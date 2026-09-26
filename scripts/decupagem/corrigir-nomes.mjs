#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/decupagem/corrigir-nomes.mjs (linhas 1-202, commit 4afda12).
// O que mudou: nada — só este cabeçalho. Atenção: ele só corrige words-final.json / words-limpo.json e NUNCA o words.json; no canal faceless, que só tem words.json, ele sai com exit 2 e a correção NÃO É MEDIDA nesta versão.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
//
// A ORTOGRAFIA DOS NOMES PRÓPRIOS NA FALA — o transcritor transcreve SOM, não ortografia.
//
//   node scripts/decupagem/corrigir-nomes.mjs <proj> [--aplicar] [--ignorar-caixa]
//
// Lê `out/<proj>/_nomes-proprios.json` (chave = como o transcritor OUVIU · valor = como se ESCREVE,
// escrito pela estação TEXTOS a partir do glossário do `redator-de-tela`) e corrige a grafia nos
// arquivos de fala canônicos — `words-final.json` e/ou `words-limpo.json` —, preservando timestamps.
//
// ── POR QUE EXISTE ──────────────────────────────────────────────────────────────────────────────
// O `_brief-arte.mjs` lê `words-limpo.json` como **WORD-LOCK**: é literalmente o texto que a arte
// copia para a tela. Uma palavra mal ouvida ali vai ao ar escrita, e nenhum QC de cena a pega —
// porque a cena, olhada sozinha, está fiel ao insumo que recebeu.
//
//   · `ceuta` (07/ago/2026): 6 de 26 ocorrências do nome do PRÓPRIO VÍDEO saíram "Celta".
//   · `cerebro-quando-sonha` (07/ago/2026): o nome do CANAL saiu "Top Dez" em 2 de 3 ocorrências
//     (na terceira o transcritor acertou "Top 10") — duas grafias do mesmo referente no mesmo vídeo.
//
// A estação `scripts/estudio/estacoes/textos.md` manda rodar este script desde que foi escrita; ele
// só não existia. *Instrução que aponta para script inexistente não falha — ela é improvisada, e o
// improviso de cada sessão é diferente.*
//
// ── DECISÕES DE PROJETO ─────────────────────────────────────────────────────────────────────────
// 1. **`words.json` NÃO é tocado.** Ele é o registro do que o transcritor ouviu, e é contra ele que
//    o `variantes_ouvidas` do `textos-tela.json` se prova. Apagar a evidência do erro faz o gate
//    seguinte caçar fantasma.
// 2. **Casamento sensível à CAIXA por padrão.** Nome próprio é maiúsculo; sem isso a chave "Top Dez"
//    também pegaria o "dez" de "dez milhões de inscritos" — reescrever a fala comum é fora de escopo.
// 3. **Chave pode ter VÁRIAS palavras** ("Top Dez" → "Top 10"). É o caso normal, não a exceção: o
//    erro do transcritor quase nunca cabe em um token só.
// 4. **Chave que não casa é ERRO, e sai no relatório.** Glossário que aponta para palavra inexistente
//    é o mesmo defeito de outro ângulo.
import { existsSync, readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const RAIZ = join(import.meta.dirname, "..", "..");
const argv = process.argv.slice(2);
const proj = argv.find((a) => !a.startsWith("--"));
const APLICAR = argv.includes("--aplicar");
const IGNORAR_CAIXA = argv.includes("--ignorar-caixa");
const PERMITIR_FUSAO = argv.includes("--permitir-fusao");
if (!proj) { console.error("uso: corrigir-nomes.mjs <proj> [--aplicar] [--ignorar-caixa] [--permitir-fusao]"); process.exit(2); }

const P = join(RAIZ, "out", proj);
const fMapa = join(P, "_nomes-proprios.json");
if (!existsSync(fMapa)) {
  console.error(`✗ falta ${fMapa}`);
  console.error(`  ele nasce na estação TEXTOS, do glossário do redator-de-tela:`);
  console.error(`  { "como o transcritor ouviu": "como se escreve" }`);
  process.exit(2);
}

/** Campos com prefixo `_` são anotação interna (mesma convenção dos contratos). */
const mapa = Object.entries(JSON.parse(readFileSync(fMapa, "utf8")))
  .filter(([k]) => !k.startsWith("_"));
if (!mapa.length) { console.error(`✗ ${fMapa} não tem nenhum par de grafia`); process.exit(2); }

/** Separa o miolo da pontuação grudada: `Dez.` → ['', 'Dez', '.'] · `"Dormimos?"` → ['"', 'Dormimos', '?"'] */
const PONT = /^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u;
const partir = (t) => { const m = PONT.exec(t); return { pre: m[1], miolo: m[2], pos: m[3] }; };
const igual = (a, b) => (IGNORAR_CAIXA ? a.toLowerCase() === b.toLowerCase() : a === b);

/**
 * ⚠️ PAR QUE MUDA O NÚMERO DE TOKENS É OUTRA OPERAÇÃO — e por isso não passa sem ser pedida.
 * Medido em 07/ago/2026: "ativação síntese" → "ativação-síntese" é ortografia impecável e mesmo
 * assim funde duas palavras em uma, levando o arquivo de 2.641 para 2.640. A lista de palavras não
 * é só texto: é a grade de fronteiras que o `sanear-espelho.mjs` usa para provar que nenhuma troca
 * de cena cai no meio de uma palavra, e é sobre ela que o word-lock por índice se apoia. *Trocar a
 * grafia é seguro porque não move nada; fundir tokens move a régua, e régua que se move em nome de
 * um hífen troca um erro visível por um invisível.* Com `--permitir-fusao`, o timestamp do span é
 * repartido proporcionalmente — só use quando a fusão for o objetivo, não um efeito colateral.
 */
const fusoes = mapa.filter(([k, v]) => k.trim().split(/\s+/).length !== v.trim().split(/\s+/).length);
if (fusoes.length && !PERMITIR_FUSAO) {
  console.log(`▲ ${fusoes.length} par(es) mudam o NÚMERO DE PALAVRAS e foram IGNORADOS:`);
  for (const [k, v] of fusoes) console.log(`    "${k}" (${k.trim().split(/\s+/).length}) → "${v}" (${v.trim().split(/\s+/).length})`);
  console.log(`  A lista de palavras é a grade de fronteiras dos gates, não só texto. Se a fusão é`);
  console.log(`  mesmo o que você quer, repita com --permitir-fusao.\n`);
  // Sai do `mapa` ANTES de `semCasar` ser construído a partir dele — assim não vira "chave que não casou".
  for (const [k] of fusoes) mapa.splice(mapa.findIndex(([mk]) => mk === k), 1);
}

const alvos = ["words-final.json", "words-limpo.json"].filter((f) => existsSync(join(P, f)));
if (!alvos.length) { console.error(`✗ nem words-final.json nem words-limpo.json em ${P}`); process.exit(2); }

const mm = (t) => `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
const semCasar = new Set(mapa.map(([k]) => k));
let totalTrocas = 0;

for (const arq of alvos) {
  const f = join(P, arq);
  const bruto = JSON.parse(readFileSync(f, "utf8"));
  const ehLista = Array.isArray(bruto);
  const ws = ehLista ? bruto : bruto.words;
  if (!Array.isArray(ws)) { console.error(`✗ ${arq}: não achei a lista de palavras`); process.exit(2); }

  const saida = [];
  const trocas = [];
  let i = 0;
  while (i < ws.length) {
    let casou = null;
    for (const [ouvido, escrito] of mapa) {
      const de = ouvido.trim().split(/\s+/);
      if (i + de.length > ws.length) continue;
      const bate = de.every((tok, k) => igual(partir(ws[i + k].w).miolo, partir(tok).miolo));
      if (!bate) continue;
      // A chave mais longa vence — "Top Dez" antes de "Dez", sempre.
      if (!casou || de.length > casou.de.length) casou = { de, para: escrito.trim().split(/\s+/), ouvido };
    }
    if (!casou) { saida.push(ws[i]); i += 1; continue; }

    const orig = ws.slice(i, i + casou.de.length);
    const t0 = orig[0].start, t1 = orig[orig.length - 1].end;
    // A pontuação grudada é do ARQUIVO, não do glossário: ela sobrevive à troca.
    const pre = partir(orig[0].w).pre, pos = partir(orig[orig.length - 1].w).pos;
    let novas;
    if (casou.para.length === orig.length) {
      /**
       * MESMO NÚMERO DE PALAVRAS = troca 1:1, e cada palavra fica com O SEU tempo original, intacto.
       * Repartir o span aqui seria aritmética gratuita que APAGA O SILÊNCIO entre as palavras — em
       * "Top Dez" (50,72–50,86 · 50,96–51,24) a repartição proporcional colava as duas em 51,032 e
       * comia os 0,10 s de pausa. Essas bordas são as fronteiras legítimas de corte de cena que o
       * `sanear-espelho.mjs` confere: mover uma delas para consertar uma letra é trocar um erro
       * visível por um invisível. Medido e revertido em 07/ago/2026.
       */
      novas = casou.para.map((p, k) => ({
        ...orig[k],
        w: (k === 0 ? pre : "") + p + (k === orig.length - 1 ? pos : ""),
      }));
    } else {
      // n≠m (só com --permitir-fusao): não há tempo original para herdar, então reparte o span
      // proporcionalmente ao tamanho de cada palavra nova.
      const pesos = casou.para.map((p) => p.length);
      const soma = pesos.reduce((a, b) => a + b, 0);
      let acc = 0;
      novas = casou.para.map((p, k) => {
        const ini = t0 + ((t1 - t0) * acc) / soma;
        acc += pesos[k];
        const fim = t0 + ((t1 - t0) * acc) / soma;
        return { w: (k === 0 ? pre : "") + p + (k === casou.para.length - 1 ? pos : ""),
                 start: +ini.toFixed(3), end: +fim.toFixed(3) };
      });
    }
    saida.push(...novas);
    trocas.push({ t: t0, de: orig.map((w) => w.w).join(" "), para: novas.map((w) => w.w).join(" ") });
    semCasar.delete(casou.ouvido);
    i += casou.de.length;
  }

  console.log(`\n${arq} — ${ws.length} palavras · ${trocas.length} troca(s)`);
  for (const t of trocas) console.log(`  @${mm(t.t)}  "${t.de}"  →  "${t.para}"`);
  totalTrocas += trocas.length;

  if (APLICAR && trocas.length) {
    const bkp = f + ".pre-nomes";
    if (!existsSync(bkp)) copyFileSync(f, bkp);           // o primeiro backup é o bom: não sobrescreve
    writeFileSync(f, JSON.stringify(ehLista ? saida : { ...bruto, words: saida }));
    console.log(`  ✓ escrito (backup em ${arq}.pre-nomes)`);
  }
}

if (semCasar.size) {
  console.log(`\n▲ chave(s) do _nomes-proprios.json que NÃO existem na fala:`);
  for (const k of semCasar) console.log(`    "${k}"`);
  console.log(`  Grafia listada que ninguém falou faz o gate seguinte caçar fantasma. Confira contra`);
  console.log(`  o words.json (o registro do que o transcritor ouviu) antes de mantê-la.`);
}

/**
 * A `ancora` do espelho é CÓPIA LITERAL da fala. Corrigir a fala e deixar a cópia para trás é o
 * defeito que o `sanear-espelho.mjs` existe para pegar — "âncora presa a uma palavra que o arquivo
 * final não contém" —, e ele nasce aqui. Por isso a âncora vai junto: mesma troca, zero efeito no
 * tempo. A `tese` e o `motivo` NÃO são tocados: são texto do montador, não transcrição.
 */
const fe = join(P, "espelho.json");
if (totalTrocas && existsSync(fe)) {
  const esp = JSON.parse(readFileSync(fe, "utf8"));
  const cenas = Array.isArray(esp) ? esp : esp.segmentos || esp.cenas || [];
  const tocadas = [];
  for (const c of cenas) {
    if (typeof c.ancora !== "string") continue;
    let a = c.ancora;
    for (const [ouvido, escrito] of mapa) {
      const re = new RegExp(ouvido.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), IGNORAR_CAIXA ? "gi" : "g");
      a = a.replace(re, escrito);
    }
    if (a !== c.ancora) { tocadas.push(c.id); c.ancora = a; }
  }
  if (tocadas.length) {
    console.log(`\nespelho.json — âncora corrigida em ${tocadas.length} cena(s): ${tocadas.join(", ")}`);
    if (APLICAR) {
      const bkp = fe + ".pre-nomes";
      if (!existsSync(bkp)) copyFileSync(fe, bkp);
      writeFileSync(fe, JSON.stringify(esp, null, 2));
      console.log(`  ✓ escrito (backup em espelho.json.pre-nomes)`);
    }
  }
}

if (!APLICAR) console.log(`\n(simulação — nada foi escrito. Repita com --aplicar)`);
