#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/procedencia-reconciliar.mjs (linhas 1-247, commit 4afda12).
// O que mudou:
//   · o projeto é out/<proj>/ da pasta do canal (a atual) — saiu o /dados/out da VM;
//   · "já declarado" usa o lerProcedencia do MOTOR (<motor>/src/midia/procedencia.mjs), que lê as
//     quatro formas do _PROCEDENCIA.json (mapa, lista, envelope itens[], envelope entradas{}). O
//     estúdio olhava só `j[nome]` — e o buscar-midia do motor grava o envelope {itens:[…]}: todo
//     arquivo entregue pelo motor pareceria "não declarado" e ganharia uma SEGUNDA declaração;
//   · _PROCEDENCIA.json ILEGÍVEL não é mais tratado como {} e sobrescrito (o estúdio fazia
//     `catch { j = {} }` e gravava por cima — apagando a declaração de todo mundo na pasta). A pasta
//     é pulada e reportada;
//   · lista na raiz vira envelope {itens:[…]} antes de acrescentar (acrescentar chave num array
//     produzia JSON que perde as chaves);
//   · gravação por tmp + rename com nova tentativa (o Defender segura arquivo recém-escrito);
//   · JSON com BOM (PowerShell 5.1) e CRLF tolerados na leitura; caminhos impressos com barra normal;
//   · [revisão v1, 23/09/2026] LICENÇA NC/ND NÃO É TRANSCRITA: registro com `licenca_aceita: false`
//     (o que o _commons-baixar grava) ou com licença Creative Commons NC/ND/fora da trava do motor
//     (<motor>/src/midia/licenca.mjs, via stock/lib/licenca-cc.mjs) é REPORTADO à parte e sai 1 —
//     transcrevê-lo transformava a licença proibida em declaração que o gate aprovava;
//   · a gravação é sob a trava do motor (comTrava, a mesma do escreverProcedencia): o entregar do motor
//     e o _instalar-lote podem escrever na mesma pasta ao mesmo tempo;
//   · o rascunho da caça (_media/_caca*) não recebe declaração: não é acervo;
//   · "fui chamado direto?" é a régua do motor (realpath), via lib/ferramentas.mjs.
// A regra de ouro (TRANSCRITOR: todo campo sai de um arquivo do projeto, com `_via`) não mudou.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * procedencia-reconciliar.mjs — TRANSCREVE para `_PROCEDENCIA.json` a prova de origem que a caça
 * já escreveu em outro lugar. Não busca nada, não deduz nada, não inventa nada.
 *
 * ── O CASO (07/ago/2026, `o-acre-o-estado-que-o`, na estação de finalização) ────────────────────
 * O `qc-procedencia.mjs` reprovou com **218 arquivos "? SEM PROVA"** em 37 pastas, a um passo da
 * entrega. Nenhum era proibido — a mídia estava certa. O que faltava era a DECLARAÇÃO no formato
 * que o gate lê. E a prova existia o tempo todo, a poucos diretórios de distância:
 *
 *     _media/<pasta>/_creditos.json     ← o agente de pesquisa escreveu fonte, licença, autor, URL
 *     _pesquisa/*.json                  ← e de novo, com plataforma + fonte_url + licenca
 *
 * O gate lê `_PROCEDENCIA.json`, `manifest.jsonl` e `_pesquisa/pauta-*.json`. O `_creditos.json` e
 * os demais JSONs de `_pesquisa/` (`_lote-final-arte.json`, `geoglifos.json`, `borracha.json`, …)
 * ficavam de fora **por causa do nome do arquivo**, não por ausência de prova.
 *
 * A alternativa era um humano (ou um modelo caro) redigitar 218 entradas lendo 18 JSONs — trabalho
 * de arqueologia sobre dado que já estava estruturado, com o risco garantido de erro de cópia. O
 * próprio cabeçalho do gate previa este desperdício: *"12 fotos de Wikimedia Commons tinham licença,
 * autor e URL na pauta desde a caça, e iam ser redigitadas à mão em 7 `_PROCEDENCIA.json` a três
 * pastas de distância"*.
 *
 * ── A REGRA DE OURO ────────────────────────────────────────────────────────────────────────────
 * Este script é um TRANSCRITOR. Todo campo que ele escreve veio, literalmente, de um arquivo do
 * projeto — e ele grava em `_via` de onde veio, para que a declaração seja auditável até a origem.
 * Arquivo sem prova em lugar nenhum ele **deixa em branco e reporta**: a resposta honesta é "não há
 * declaração", nunca uma fonte plausível. Inventar procedência é o único jeito de este script
 * causar o dano que o gate existe para impedir. [PESQ-50]
 *
 * Uso: node scripts/procedencia-reconciliar.mjs <proj> [--escrever] [--json]
 *      (sem `--escrever` é SIMULAÇÃO — imprime o que faria e não toca em disco)
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname, basename, relative, sep } from "node:path";
import { importarDoMotor } from "./lib/motor.mjs";
import { ehPrincipal } from "./stock/lib/ferramentas.mjs";
import { julgarLicencaCC } from "./stock/lib/licenca-cc.mjs";
import { ehCaminhoDeRascunhoDeCaca } from "./stock/lib/rascunho-de-caca.mjs";

const EXT = /\.(mp4|mov|jpg|jpeg|png|webp)$/i;

/** Todos os arquivos de mídia sob `_media`, com o caminho relativo (é o que o gate usa como chave). */
export function midias(dir, rel = "", nivel = 0, out = []) {
  if (nivel > 6) return out;
  let es; try { es = readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of es) {
    const p = join(dir, e.name), r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) midias(p, r, nivel + 1, out);
    else if (EXT.test(e.name)) out.push({ abs: p, rel: r, nome: e.name, dir });
  }
  return out;
}

/**
 * ── AS CHAVES QUE VALEM COMO PROVA ─────────────────────────────────────────────────────────────
 * Cada agente de pesquisa nomeou os campos do seu jeito ao longo de meses. Normalizar aqui é o que
 * permite não reescrever histórico: a prova antiga continua válida, só muda de embalagem.
 */
const K_FONTE = ["fonte", "plataforma", "acervo", "provedor", "colecao", "instituicao", "fonte_principal"];
const K_URL = ["fonte_url", "url", "url_arquivo", "url_imagem", "url_obra_original", "pagina",
               "pagina_url", "link", "permalink", "origem_url", "url_scan_da_pagina"];
const K_LIC = ["licenca", "license", "direitos"];
const K_AUTOR = ["autor", "atribuicao_exigida", "credito_exigido", "credito_na_tela", "credito_sugerido",
                 "creditos", "fotografo"];

/**
 * ── O TRAVESSÃO NÃO É PROVA ─────────────────────────────────────────────────────────────────────
 * Os agentes escrevem `"—"` (ou `-`, `n/a`) quando o campo NÃO SE APLICA — e para foto de
 * colaborador do Commons `instituicao: "—"` é a resposta certa: não há instituição detentora, há um
 * autor. Aceitar esse travessão como fonte gravava `"fonte": "—"` no `_PROCEDENCIA.json`, que passa
 * pelo `.trim()` e REPROVA no `qc-procedencia` — com a prova de verdade (`fonte.provedor:
 * "Wikimedia Commons"`) escrita no mesmo registro, uma chave ao lado.
 * Medido em 18/ago/2026 no `brasil-portugues`: 2 fotos da s19 sobreviveram à reconciliação assim,
 * e o laudo dizia "SEM procedência" sobre arquivo cuja procedência estava declarada. Pular o
 * placeholder faz o mesmo laço cair para o candidato seguinte, que é onde a prova mora.
 */
const VAZIO = /^[\s—–-]*$|^n\.?\/?a\.?$|^(nao|não)\s+(se\s+)?aplica$|^(sem|nenhum[ao]?)$/i;
const util = (v) => (typeof v === "string" && v.trim() && !VAZIO.test(v.trim()) ? v.trim() : null);

/** Procura as chaves no objeto e, se o valor for um sub-objeto de fonte, mais um nível dentro dele. */
const pegaNo = (o, chaves) => {
  if (!o || typeof o !== "object") return null;
  for (const k of chaves) {
    const v = util(o[k]);
    if (v) return v;
  }
  // Um nível dentro dos sub-objetos do MESMO registro: `pessoas[].fonte_principal` guarda acervo,
  // licença e quatro URLs num bloco só, e sem isto a entrada sai com fonte e sem URL — passando no
  // gate mas caindo na lista "sem url nem id, não dá para reconferir", que é meia prova.
  for (const v of Object.values(o)) {
    if (!v || typeof v !== "object" || Array.isArray(v)) continue;
    for (const k of chaves) { const s = util(v[k]); if (s) return s; }
  }
  return null;
};

/**
 * ── POR QUE SUBIR NA CADEIA DE ANCESTRAIS ───────────────────────────────────────────────────────
 * O objeto mais específico é o que NOMEIA o arquivo, mas frequentemente não é o que declara a
 * origem. Em `_pesquisa/pessoas.json`, cada pessoa tem um `fonte_principal` completo (acervo, 4 URLs,
 * licença) e uma lista `arquivos[]` cujos itens só trazem `{arquivo, papel, res}`. Parar no item
 * deixava 9 retratos de Plácido de Castro e do Barão do Rio Branco como "sem prova" — com a prova
 * escrita dois níveis acima, no mesmo registro.
 *
 * Subir é legítimo porque o filho PERTENCE ao registro do pai: é o mesmo item, descrito em duas
 * camadas. O que não se pode é atravessar para um registro IRMÃO — daí a cadeia ser só de ancestrais
 * diretos, e o campo `_via` registrar o arquivo de onde a declaração saiu.
 */
const extrair = (cadeia, chaves) => {
  for (const o of cadeia) { const v = pegaNo(o, chaves); if (v) return v; }
  return null;
};

/**
 * Varre um JSON e indexa, por NOME DE ARQUIVO, o menor objeto que o menciona. O menor é o mais
 * específico: o objeto do item, não o lote inteiro que o contém — indexar o lote daria a mesma
 * fonte a 30 arquivos de origens diferentes, que é precisamente a mentira a evitar.
 */
export function indexar(o, src, idx, prof = 0, ancestrais = []) {
  if (!o || typeof o !== "object" || prof > 12) return;
  const cadeia = Array.isArray(o) ? ancestrais : [o, ...ancestrais];
  if (Array.isArray(o)) { for (const x of o) indexar(x, src, idx, prof + 1, ancestrais); return; }
  for (const [k, v] of Object.entries(o)) {
    if (typeof v === "string" && EXT.test(v)) {
      // [porte Regie] "a\\b.jpg" (caminho do Windows escrito por agente) também vira "b.jpg"
      const nome = basename(v.replace(/\\/g, "/"));
      const tam = JSON.stringify(o).length;
      const cur = idx.get(nome);
      if (!cur || tam < cur.tam) idx.set(nome, { obj: o, cadeia, src, tam, viaChave: k });
    }
  }
  for (const v of Object.values(o)) indexar(v, src, idx, prof + 1, cadeia);
}

// [porte Regie] JSON escrito pelo PowerShell 5.1 vem com BOM; o JSON.parse cru o recusa
const lerJson = (p) => JSON.parse(readFileSync(p, "utf8").replace(/^﻿/, ""));

/** As duas jazidas de prova: `_creditos.json` ao lado da mídia e os JSONs de `_pesquisa/`. */
export function jazidas(D, MEDIA) {
  const idx = new Map();
  const pesq = join(D, "_pesquisa");
  if (existsSync(pesq)) {
    for (const f of readdirSync(pesq).filter((x) => x.endsWith(".json"))) {
      try { indexar(lerJson(join(pesq, f)), `_pesquisa/${f}`, idx); } catch { }
    }
  }
  // `_creditos.json` por último: é o mais perto da mídia, então tem a última palavra.
  const varrer = (dir, rel = "", nivel = 0) => {
    if (nivel > 6) return;
    let es; try { es = readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of es) if (e.isDirectory()) varrer(join(dir, e.name), rel ? `${rel}/${e.name}` : e.name, nivel + 1);
    const c = join(dir, "_creditos.json");
    if (existsSync(c)) {
      try { indexar(lerJson(c), `_media/${rel ? rel + "/" : ""}_creditos.json`, idx); } catch { }
    }
  };
  varrer(MEDIA);
  return idx;
}

export async function principal(argv = process.argv.slice(2), { raiz = process.cwd(), log = console.log, hoje = new Date().toISOString().slice(0, 10) } = {}) {
  // `--aplicar` é o nome que o `qc-procedencia.mjs` imprime na receita (e o que o irmão
  // `procedencia-declarar.mjs` usa). Aceitar os dois: instrução que não roda empurra quem lê para
  // improvisar — e aqui o improviso é declarar procedência à mão, que é o dano que o gate impede.
  const ESCREVER = argv.includes("--escrever") || argv.includes("--aplicar");
  const JSON_OUT = argv.includes("--json");
  // [porte Regie] aceita o slug ou o caminho out/<proj> (com / ou \)
  const bruto = argv.find((a) => !a.startsWith("--"));
  const proj = bruto ? bruto.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean).pop() : null;
  if (!proj) { console.error("uso: procedencia-reconciliar.mjs <proj> [--escrever|--aplicar]"); return 2; }

  const D = join(raiz, "out", proj);                       // [porte Regie] sem /dados/out
  const MEDIA = join(D, "_media");
  if (!existsSync(MEDIA)) { console.error(`- ${proj}: sem _media/ em ${D}, nada a reconciliar.`); return 2; }
  const { lerProcedencia } = await importarDoMotor("src/midia/procedencia.mjs");
  const { comTrava, renomearComRetentativa } = await importarDoMotor("src/midia/arquivos.mjs");
  const { licencaAceita } = await importarDoMotor("src/midia/licenca.mjs");
  const rel = (p) => relative(D, p).split(sep).join("/");

  const IDX = jazidas(D, MEDIA);
  // [porte Regie] rascunho da caça não é acervo: não se declara (o qc-procedencia o conta à parte)
  const arqs = midias(MEDIA).filter((a) => !ehCaminhoDeRascunhoDeCaca(a.rel));

  /** O que já está declarado (não sobrescrever: declaração existente é decisão de alguém). */
  const ilegiveis = new Set();
  function jaDeclarado(dir, nome, relArq) {
    let d = dir;
    for (let i = 0; i < 6; i++) {
      const f = join(d, "_PROCEDENCIA.json");
      if (existsSync(f)) {
        // [porte Regie] as quatro formas, pelo leitor do motor; e ilegível NÃO conta como vazio
        try { lerJson(f); } catch { ilegiveis.add(f); }
        const nomes = new Set(lerProcedencia(d).map((x) => x.arquivo));
        if (nomes.has(nome) || nomes.has(basename(relArq))) return true;
      }
      if (d === MEDIA || d === dirname(d)) break;
      d = dirname(d);
    }
    return false;
  }

  const porPasta = new Map();   // dir → { nome: entrada }
  const semProva = [];
  const recusadas = [];         // [porte Regie] {rel, licenca, porque} — licença que não serve ao canal
  let jaOk = 0;

  for (const a of arqs) {
    if (jaDeclarado(a.dir, a.nome, a.rel)) { jaOk++; continue; }
    const hit = IDX.get(a.nome);
    if (!hit) { semProva.push(a.rel); continue; }
    const cad = hit.cadeia || [hit.obj];
    const fonte = extrair(cad, K_FONTE);
    const url = extrair(cad, K_URL);
    const licenca = extrair(cad, K_LIC);
    const autor = extrair(cad, K_AUTOR);
    // Sem fonte NEM url não é prova de origem — é menção. Não vale carimbo.
    if (!fonte && !url) { semProva.push(a.rel); continue; }
    // [porte Regie] Licença que não serve a um canal monetizado não vira declaração, com ou sem pedido.
    // Duas provas, qualquer uma basta: o próprio registro diz `licenca_aceita: false` (o _commons-baixar
    // mede com a trava do motor e grava), ou a licença escrita é Creative Commons NC/ND ou fora da trava.
    const recusouNaFonte = cad.some((o) => o && typeof o === "object" && o.licenca_aceita === false);
    const juizo = licenca ? julgarLicencaCC(licenca, { licencaAceita }) : null;
    if (recusouNaFonte || juizo) {
      recusadas.push({ rel: a.rel, licenca: licenca || "(sem licenca)",
        porque: juizo?.proibida ? "NC/ND: nao serve a canal monetizado" : recusouNaFonte ? "licenca_aceita: false no registro (fora da trava do motor)" : "Creative Commons fora da trava do motor" });
      continue;
    }
    const e = { fonte: fonte || "(não declarada)", ...(url ? { url } : {}), ...(licenca ? { licenca } : {}),
                ...(autor ? { autor } : {}), _via: hit.src, _transcrito_em: hoje };
    if (!porPasta.has(a.dir)) porPasta.set(a.dir, {});
    porPasta.get(a.dir)[a.nome] = e;
  }

  // [porte Regie] pasta com _PROCEDENCIA.json ilegível não recebe nada: consertar é de quem o escreveu
  const bloqueadas = [...porPasta.keys()].filter((d) => ilegiveis.has(join(d, "_PROCEDENCIA.json")));
  for (const d of bloqueadas) porPasta.delete(d);

  const totalNovos = [...porPasta.values()].reduce((s, o) => s + Object.keys(o).length, 0);

  if (JSON_OUT) {
    log(JSON.stringify({ proj, jaDeclarados: jaOk, aEscrever: totalNovos,
      pastas: porPasta.size, semProva, recusadasPorLicenca: recusadas, ilegiveis: [...ilegiveis].map(rel) }, null, 1));
    return semProva.length || ilegiveis.size || recusadas.length ? 1 : 0;
  }

  log(`\n-- RECONCILIAR PROCEDENCIA | ${proj} --`);
  log(`  midia em _media/ ......... ${arqs.length}`);
  log(`  ja declarada ............. ${jaOk}`);
  log(`  prova achada e transcrita  ${totalNovos}  em ${porPasta.size} pasta(s)`);
  log(`  SEM prova em lugar nenhum  ${semProva.length}`);
  log(`  licenca RECUSADA .......... ${recusadas.length}`);

  if (!ESCREVER) {
    log(`\n  (SIMULACAO — nada foi escrito. Repita com --escrever)`);
    const ex = [...porPasta.entries()][0];
    if (ex) {
      const [d, o] = ex, k = Object.keys(o)[0];
      log(`\n  exemplo | ${rel(d)}/_PROCEDENCIA.json`);
      log(`    "${k}": ${JSON.stringify(o[k], null, 6).replace(/\n/g, "\n    ")}`);
    }
  } else {
    let escritos = 0;
    for (const [d, novas] of porPasta) {
      const f = join(d, "_PROCEDENCIA.json");
      // [porte Regie] ler-modificar-gravar SOB A TRAVA do motor, relendo lá dentro: outro processo pode
      // ter declarado (ou quebrado) o arquivo entre a varredura e agora.
      const gravou = comTrava(f, () => {
        let j = {};
        if (existsSync(f)) {
          try { j = lerJson(f) || {}; } catch { ilegiveis.add(f); return false; }   // quebrou no meio: não sobrescreve
        }
        const ja = new Set(lerProcedencia(d).map((x) => x.arquivo));
        if (Array.isArray(j)) j = { itens: j };             // [porte Regie] lista vira envelope antes de ganhar chave
        for (const [k, v] of Object.entries(novas)) if (!j[k] && !ja.has(k)) j[k] = v;   // nunca sobrescreve
        const tmp = `${f}.tmp-${process.pid}`;
        writeFileSync(tmp, JSON.stringify(j, null, 1) + "\n");
        renomearComRetentativa(tmp, f);                    // [porte Regie] Defender
        return true;
      });
      if (gravou) escritos++;
    }
    log(`\n  ok escrito em ${escritos} arquivo(s) _PROCEDENCIA.json`);
  }

  if (ilegiveis.size) {
    log(`\n  ! ${ilegiveis.size} _PROCEDENCIA.json ILEGIVEL(IS) — nada foi escrito nessas pastas (sobrescrever apagaria a declaracao de alguem):`);
    for (const f of ilegiveis) log(`     | ${rel(f)}`);
  }
  if (recusadas.length) {
    log(`\n  x ${recusadas.length} arquivo(s) com licenca que NAO serve ao canal — NAO transcritos, e nao devem ir ao video:`);
    for (const x of recusadas.slice(0, 20)) log(`     | ${x.rel}  [${x.licenca}]  ${x.porque}`);
    if (recusadas.length > 20) log(`     ... e mais ${recusadas.length - 20}`);
    log(`  Licenca NC (nao comercial) ou ND (sem derivacao) nao vira material aprovado: troque a midia.`);
  }
  if (semProva.length) {
    log(`\n  ! ${semProva.length} arquivo(s) sem NENHUMA prova no projeto — carimbo aqui seria invencao.`);
    for (const r of semProva.slice(0, 20)) log(`     | ${r}`);
    if (semProva.length > 20) log(`     ... e mais ${semProva.length - 20}`);
    log(`  Estes precisam da URL de quem os cacou, ou de recaca. Nao os declare no escuro.`);
  }
  log("");
  return recusadas.length ? 1 : 0;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
