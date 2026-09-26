#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-pauta-integrada.mjs (linhas 1-176, commit 4afda12).
// O que mudou: nada — só este cabeçalho.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-pauta-integrada.mjs — acusa a mídia que a PESQUISA caçou, entregou no disco e NINGUÉM pôs na
 * tela (PESQ-32).
 *
 * POR QUE EXISTE (medido no `senna`, 03/ago/2026): a pauta antirrepetição de 25/jul designou 10
 * fotos novas para 8 cenas, exatamente para matar a repetição que o Mateus tinha reclamado. As 10
 * estavam no disco. **Uma** tinha sido integrada ao HTML. As outras nove dormiam havia nove dias, e
 * o vídeo caminhava para a entrega com a mesma foto de Senna em SEIS cenas — enquanto a substituta
 * já paga, já validada por visão, estava na pasta ao lado.
 *
 * A estação de pesquisa terminou com "PASS": os arquivos existiam, a pauta estava escrita, o
 * relatório dizia "entregue". Todos os fatos eram verdadeiros e a conclusão era falsa, porque
 * *arquivo em `_media/` não é mídia entregue* — só o HTML da cena põe alguma coisa na tela.
 *
 * O `qc-repeticao` chega a acusar o SINTOMA (a mesma imagem em N cenas), mas não sabe dizer que a
 * cura já está no disco. Este gate mede a distância entre o que a pesquisa PROMETEU por escrito e o
 * que a arte de fato consumiu.
 *
 * ── COMO LÊ A PAUTA ──────────────────────────────────────────────────────────────────────────────
 *
 * Varre `out/<proj>/_pesquisa/*.json` e `out/<proj>/_media/*.json` procurando qualquer objeto que
 * ligue um ARQUIVO a uma CENA. Aceita os formatos que os `pesquisa-*` de fato escrevem hoje:
 *
 *   { itens: [ { cena: "s07-...", arquivo: "_media/foto/x.jpg", arquivo_4k: "..." } ] }
 *   { itens: [ { cena: ["s74-...","s83-..."], arquivo: "..." } ] }        // cena pode ser lista
 *   { itens: [ { cena: "s24-...", arquivos: [ { path: "out/proj/_media/..." } ] } ] }
 *
 * Um item só é cobrado quando tem cena E arquivo — pauta que não designa destino não promete nada.
 *
 * ── O QUE REPROVA ────────────────────────────────────────────────────────────────────────────────
 *
 *   ✗ ÓRFÃ    — arquivo existe no disco, a cena tem HTML, e o HTML não o referencia.
 *               É o caso do `senna`: trabalho pago, parado.
 *   ▲ SUMIU   — a pauta designa um arquivo que não está mais no disco (caça perdida ou renomeada).
 *   · sem html — a cena ainda não foi desenhada; não é defeito desta lente, só não conta como ok.
 *
 * Substituição legítima existe: a arte pode ter trocado por mídia MELHOR. Por isso a órfã cuja cena
 * já usa alguma OUTRA mídia real sai como `▲ trocada` (aviso), e não como reprovação — o gate
 * cobra a cena que ficou SEM nada, que é o dinheiro no chão.
 *
 * Uso: node scripts/qc-pauta-integrada.mjs <projeto>
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";

const PROJ = process.argv[2];
if (!PROJ) { console.error("uso: qc-pauta-integrada.mjs <projeto>"); process.exit(1); }

const RAIZ = existsSync(`out/${PROJ}`) ? `out/${PROJ}` : PROJ;
if (!existsSync(RAIZ)) { console.error(`✗ sem ${RAIZ} — nada a medir`); process.exit(1); }
const GRAPHICS = join(RAIZ, "graphics");

// ── 1 · junta tudo que as pautas prometeram ─────────────────────────────────────────────────────
const pastas = [join(RAIZ, "_pesquisa"), join(RAIZ, "_media")];
const promessas = [];   // { cena, arquivo, pauta }

for (const dir of pastas) {
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter(n => n.endsWith(".json"))) {
    let doc;
    try { doc = JSON.parse(readFileSync(join(dir, f), "utf8")); } catch { continue; }
    const itens = doc.itens || doc.arquivos || [];
    if (!Array.isArray(itens)) continue;

    for (const it of itens) {
      const cenas = [].concat(it.cena || it.cenas || []).filter(c => typeof c === "string");
      if (!cenas.length) continue;

      // o arquivo pode vir solto no item ou dentro de uma lista `arquivos`
      const brutos = [it.arquivo, it.arquivo_4k, ...[].concat(it.arquivos || []).map(a => a && a.path)];
      for (const bruto of brutos.filter(Boolean)) {
        for (const cena of cenas) promessas.push({ cena, arquivo: bruto, pauta: f });
      }
    }
  }
}

if (!promessas.length) {
  console.log(`══ PAUTA × TELA · ${PROJ} ══\n  nenhuma pauta liga arquivo→cena — nada a cobrar`);
  process.exit(0);
}

// ── 2 · quem já está na tela, e quantas cenas usam cada mídia ───────────────────────────────────
// Duas armadilhas que este gate pisou na primeira versão, as duas medidas no `senna`:
//
// 1 · VARIANTE NÃO É OUTRA FOTO. A pauta cita `senna-trofeu-monaco-1992.jpg` e o HTML usa
//     `senna-trofeu-monaco-1992-4k.jpg` — mesma imagem, upscalada. Comparar o nome cru acusava 20
//     falsos positivos. Alarme falso é bug de prioridade alta: ensina a ignorar o gate.
//
// 2 · "A CENA USA OUTRA MÍDIA REAL" NÃO PROVA TROCA DELIBERADA. Era a heurística original, e ela
//     ABSOLVIA exatamente o caso que motivou a lei: a s07 usava mídia real, sim — a foto repetida
//     em SEIS cenas que a pauta viera substituir. Quando a mídia que ocupou o lugar é ela própria
//     repetida, não houve upgrade: houve promessa não cumprida.
const radical = n => basename(n).replace(/\.[a-z0-9]+$/i, "").replace(/[-_](4k|x4|hd|upscaled|upscale)$/i, "").toLowerCase();

const usoPorRadical = new Map();   // radical → Set(cenas que o referenciam)
const htmlCache = new Map();
for (const f of (existsSync(GRAPHICS) ? readdirSync(GRAPHICS).filter(n => n.endsWith(".html")) : [])) {
  const fonte = readFileSync(join(GRAPHICS, f), "utf8");
  const cena = f.replace(/\.html$/, "");
  htmlCache.set(cena, fonte);
  for (const m of fonte.matchAll(/(?:src|href)=["']([^"']*_media\/[^"']+)["']|url\(["']?([^)"']*_media\/[^)"']+)/g)) {
    const r = radical(m[1] || m[2]);
    if (!usoPorRadical.has(r)) usoPorRadical.set(r, new Set());
    usoPorRadical.get(r).add(cena);
  }
}

const orfas = [], sumidas = [], trocadas = [], semHtml = [];
let ok = 0;
const vistos = new Set();

for (const p of promessas) {
  const rad = radical(p.arquivo);
  const chave = p.cena + "|" + rad;
  if (vistos.has(chave)) continue;
  vistos.add(chave);

  const noDisco = [p.arquivo, join(RAIZ, p.arquivo), p.arquivo.replace(/^out\/[^/]+\//, RAIZ + "/")]
    .some(c => existsSync(c));

  const fonte = htmlCache.get(p.cena);
  if (fonte === undefined) { semHtml.push(p); continue; }
  if (!noDisco) { sumidas.push(p); continue; }

  // Reserva declarada pela própria pauta: arquivo nomeado `-fallback` é plano B por construção —
  // cobrar que ele entre na tela seria cobrar o contrário do que a pesquisa quis dizer.
  if (/[-_]fallback/i.test(rad)) { ok++; continue; }

  // RECUSA FUNDAMENTADA (mesmo contrato do `data-gancho` do qc-repeticao): nem toda promessa deve
  // ser cumprida — a pauta é escrita sem conhecer o SLOT. No `senna`, a Silverstone-93 designada
  // para a s09 é retrato 1553×1868 e a lâmina da cena é landscape 1190×720: `object-fit:cover`
  // cortaria quase tudo. Recusar foi certo; recusar em silêncio é que não. Declare na cena:
  //   <!-- pauta-recusa: senna-paddock-silverstone-1993.jpg — retrato em lâmina landscape -->
  // ou o atributo data-pauta-recusa="<arquivo> — <motivo>" em qualquer elemento.
  const recusa = [...fonte.matchAll(/pauta-recusa["'=:\s]+([^"'\n>]+)/gi)]
    .some(m => radical(m[1].split(/[—-]\s|,/)[0].trim()) === rad || m[1].toLowerCase().includes(rad));
  if (recusa) { ok++; continue; }

  // na tela? aceita a variante (-4k/-x4/upscaled) como a mesma imagem
  const naTela = [...fonte.matchAll(/(?:src|href)=["']([^"']*_media\/[^"']+)["']|url\(["']?([^)"']*_media\/[^)"']+)/g)]
    .some(m => radical(m[1] || m[2]) === rad);
  if (naTela) { ok++; continue; }

  // não está na tela: a cena pôs outra mídia real no lugar, e essa outra é EXCLUSIVA dela?
  const substitutas = [...fonte.matchAll(/(?:src|href)=["']([^"']*_media\/[^"']+)["']|url\(["']?([^)"']*_media\/[^)"']+)/g)]
    .map(m => radical(m[1] || m[2]))
    .filter(r => !/\/(flags?|logos?|bandeiras?)\//.test(r) && !/^(flag|logo)-/.test(r));
  const trocaLimpa = substitutas.length > 0 && substitutas.every(r => (usoPorRadical.get(r)?.size || 0) === 1);

  (trocaLimpa ? trocadas : orfas).push(p);
}

// ── 3 · relatório ───────────────────────────────────────────────────────────────────────────────
const n = promessas.length;
console.log(`══ PAUTA × TELA · ${PROJ} · ${vistos.size} promessa(s) de mídia→cena ══\n`);
console.log(`  na tela ......... ${ok}`);
console.log(`  órfãs ........... ${orfas.length}   (no disco, cena desenhada, HTML ignora — trabalho pago parado)`);
console.log(`  trocadas ........ ${trocadas.length}   (cena usa outra mídia real; provável decisão de arte)`);
console.log(`  sumidas ......... ${sumidas.length}   (pauta cita arquivo que não está no disco)`);
console.log(`  cena sem HTML ... ${semHtml.length}\n`);

const linha = p => `    ${p.cena.padEnd(42)} ${basename(p.arquivo).padEnd(46)} [${p.pauta}]`;
if (orfas.length)    { console.log("✗ ÓRFÃ — caçada, entregue, e nunca posta na tela:"); orfas.forEach(p => console.log(linha(p))); console.log(); }
if (sumidas.length)  { console.log("▲ SUMIU do disco — a pauta promete o que não existe mais:"); sumidas.forEach(p => console.log(linha(p))); console.log(); }
if (trocadas.length) { console.log("▲ trocada — a cena usa outra mídia real (confira se foi upgrade deliberado):"); trocadas.forEach(p => console.log(linha(p))); console.log(); }

if (orfas.length) {
  console.log(`✗ REPROVA — ${orfas.length} mídia(s) caçada(s) e paga(s) não chegaram à tela.`);
  console.log("   Arquivo em _media/ NÃO é mídia entregue: só o HTML põe na tela (PESQ-32).");
  console.log("   Conserto: integrar o src no HTML da cena e re-renderizar — e conferir o CRÉDITO,");
  console.log("   que costuma ficar apontando para a foto antiga (atribuição errada é pior que ausente).");
  process.exit(1);
}
console.log("✓ PASS — toda mídia que a pesquisa prometeu por escrito está na tela (ou foi trocada por outra real).");
