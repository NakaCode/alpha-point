#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-poluicao.mjs (linhas 1-112, commit 4afda12).
// O que mudou: chama o qc-carga pelo node que está rodando (process.execPath) e pelo caminho do
// próprio arquivo (fileURLToPath), não por "node scripts/…" relativo à pasta atual; aceita `<proj>`,
// `out/<proj>` e caminho absoluto; cena NÃO MEDIDA pelo qc-carga sai do ranking e é contada (antes
// entrava com zeros e aparecia como a cena mais CALMA do projeto); exit 2 quando alguma não mediu.
// A régua (medianas e tetos dos dourados do Top10) é ofício e fica.
// Na integração da v1: caminho errado sai 2 (não medi), não 1; o qc-carga roda em blocos de cenas (limite de linha de comando do Windows).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma (chama os portões como processos).
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-poluicao.mjs — a varredura de POLUIÇÃO de um projeto inteiro, julgada contra a MEDIANA.
 *
 * POR QUE ELE EXISTE, e por que não bastava o `qc-carga` (Mateus, 25/jul, reprovando uma cena que
 * PASSOU no gate): *"é aquela coisa de ser DEMAIS, muita informação ao mesmo tempo em pouco tempo.
 * É UM CAOS! Não quero cenas assim"*.
 *
 * O `qc-carga` reprova o que passa do TETO — e o teto é o **máximo já visto num dourado** (9 blocos
 * de texto). Isso o torna um gate de segurança: ele pega o desastre. Mas a cena que encosta no teto
 * está no extremo do que já foi aceito UMA vez, não no bom: **a mediana dourada é 4**. Entre 4 e 9
 * existe uma faixa inteira de cenas que passam no gate e cansam quem assiste — e é exatamente ali
 * que estavam as cenas que o Mateus reprovou olhando.
 *
 * Este script não substitui o gate: ele RANQUEIA. Diz quais cenas do projeto estão mais longe da
 * mediana, para o olho humano (e o editor-de-arte) irem primeiro onde dói mais.
 *
 * ⚠️ DEPENDE DO GATE ENXERGAR TUDO. Até 25/jul o `qc-carga` não visitava `<b>`/`<strong>`, então
 * texto em negrito dentro de linha mista era invisível e as cenas eram SUBMEDIDAS. Corrigido — mas
 * a lição fica: um ranking construído sobre uma métrica cega ordena o nada.
 *
 * Uso: node scripts/qc-poluicao.mjs <proj> [--top=15] [--json]
 */
import { execFileSync } from "node:child_process";
import { readdirSync, existsSync } from "node:fs";
import { join, basename, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import { NAO_MEDIDO } from "./lib/nao-medido.mjs";
import { emBlocos } from "./lib/qc-cena-gates.mjs";

// [porte Régie] a raiz do canal e o qc-carga pelo caminho DESTE arquivo — rodar de outra pasta funciona
const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const QC_CARGA = fileURLToPath(new URL("./qc-carga.mjs", import.meta.url));

const argv = process.argv.slice(2);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
const proj = argv.find((a) => !a.startsWith("--"));
if (!proj) { console.error("uso: node scripts/qc-poluicao.mjs <proj> [--top=15] [--json]"); process.exit(2); }
const TOP = +opt("top", "15");
const JSON_OUT = argv.includes("--json");

// A RÉGUA — medianas medidas nas 28 cenas douradas (as que o Mateus aprovou), não números inventados.
// O teto do qc-carga continua sendo o do gate; aqui a pergunta é outra: "quão longe do BOM isto está?"
/**
 * ⚠️ RÉGUA REMEDIDA EM 25/jul, e a razão importa: **o medidor mudou, então a régua tinha de mudar
 * junto.** Os números antigos (texto 4 · ritmo 0,32) foram medidos com um `qc-carga` que era CEGO
 * para `<b>`, `<small>` e texto de pseudo-elemento — ou seja, contavam menos do que a tela mostra.
 * Com o gate enxergando tudo, as MESMAS 28 cenas douradas medem **5** no pico e **0,36** de ritmo.
 *
 * Manter a régua velha sobre o medidor novo seria pedir aos agentes um alvo **mais apertado que os
 * próprios dourados** — perseguir um número que nem a referência de qualidade alcança, gastando
 * inferência para "consertar" o que já está bom. Régua e medidor se movem juntos, sempre.
 *
 * Origem: `node scripts/qc-carga.mjs seed/examples/dourados/*&#47;*.html --json`, mediana das 28.
 */
const MEDIANA = { texto: 5, info: 18, ritmo: 0.36, janela: 2 };
const TETO    = { texto: 9, info: 77, ritmo: 0.9,  janela: 4 };

// [porte Régie] `<proj>`, `out/<proj>` ou absoluto; relativo à pasta atual, e se não houver, à raiz do canal.
const limpo = proj.replace(/[\\/]+$/, "");
const base = isAbsolute(limpo) || /^out[\\/]/.test(limpo) ? limpo : join("out", limpo);
const D = existsSync(join(base, "graphics")) ? join(base, "graphics") : join(RAIZ, base, "graphics");
// [porte Régie] caminho errado é NÃO MEDI (2), não "projeto poluído" (1) — a convenção da casa
if (!existsSync(D)) { console.error(`✗ não achei ${D}`); process.exit(NAO_MEDIDO); }
const htmls = readdirSync(D).filter((f) => f.endsWith(".html") && !f.startsWith("_") && !f.startsWith(".")).sort().map((f) => join(D, f));
if (!htmls.length) { console.error(`✗ nenhuma cena em ${D}`); process.exit(NAO_MEDIDO); }

console.error(`\n══ POLUIÇÃO · ${proj} · ${htmls.length} cenas ══`);
console.error(`  régua: mediana dourada (${MEDIANA.texto} textos · ${MEDIANA.ritmo}/s) — o teto do gate é ${TETO.texto}\n`);

// o qc-carga aceita vários arquivos e devolve JSON — um Chrome por BLOCO de cenas.
// [porte Régie] Em blocos (lib/qc-cena-gates.mjs › emBlocos), não todas numa chamada: o Windows corta a
// linha de comando em 32.767 caracteres, e com caminhos de ~120 (C:\Users\Nome Sobrenome\…) o limite
// estoura perto de 250 cenas — o spawn falharia e o projeto inteiro ficaria sem medida.
let laudos = [];
for (const bloco of emBlocos(htmls)) {
  let parte;
  try {
    parte = JSON.parse(execFileSync(process.execPath, [QC_CARGA, ...bloco, "--json"],
      { encoding: "utf8", maxBuffer: 64 * 1024 * 1024, stdio: ["ignore", "pipe", "inherit"], windowsHide: true }));
  } catch (e) {
    // exit 1 = alguma cena reprovou no gate; o JSON ainda veio no stdout
    // [porte Régie] sem laudo nenhum não é "projeto poluído" (1): é não medi (2) — para as cenas DESTE bloco
    try { parte = JSON.parse(String(e.stdout || "")); }
    catch { parte = bloco.map((h) => ({ arq: basename(h), naoMedido: "não consegui ler o laudo do qc-carga (o Chrome subiu?)" })); }
  }
  laudos.push(...parte);
}
/**
 * [porte Régie] CENA NÃO MEDIDA NÃO ENTRA NO RANKING. O qc-carga devolve `naoMedido` com os números
 * zerados (página que não abriu, motor de animação morto). Somada ao ranking, ela aparecia no FIM —
 * como a cena mais calma do projeto —, que é o verde falso na forma de uma ordenação.
 */
const naoMedidas = laudos.filter((l) => l.naoMedido);
laudos = laudos.filter((l) => !l.naoMedido);

/**
 * EXCESSO: quanto a cena passa da mediana, em cada eixo, somado.
 * Normalizado pela distância mediana→teto, para que os eixos sejam comparáveis: "1,0" significa
 * estar no teto daquele eixo. Assim uma cena com ritmo no limite pesa igual a uma com densidade no
 * limite — que é como o espectador sente, porque os dois cansam do mesmo jeito.
 */
const excesso = (l) => {
  const e = (v, m, t) => Math.max(0, (v - m) / Math.max(t - m, 0.001));
  return {
    texto: e(l.picoTexto, MEDIANA.texto, TETO.texto),
    info: e(l.picoInfo, MEDIANA.info, TETO.info),
    ritmo: e(l.entPorSeg, MEDIANA.ritmo, TETO.ritmo),
    janela: e(l.piorJanela, MEDIANA.janela, TETO.janela),
  };
};

const rank = laudos.map((l) => {
  const ex = excesso(l);
  const total = ex.texto + ex.info + ex.ritmo + ex.janela;
  // densidade TEMPORAL: informação por segundo de tela. Uma cena de 5s com 6 textos cansa mais que
  // uma de 15s com 6 — o espectador tem menos de 1s por bloco. É o que o Mateus chamou de "muita
  // informação ao mesmo tempo EM POUCO TEMPO", e nenhum eixo isolado do gate captura isso.
  const segPorTexto = l.dur / Math.max(l.picoTexto, 1);
  return { ...l, ex, total: +total.toFixed(2), segPorTexto: +segPorTexto.toFixed(2), reprova: l.falhas?.length > 0 };
}).sort((a, b) => b.total - a.total);

if (JSON_OUT) { console.log(JSON.stringify(rank, null, 1)); process.exit(naoMedidas.length ? NAO_MEDIDO : 0); }

const barra = (v) => "█".repeat(Math.min(10, Math.round(v * 5))).padEnd(10, "·");
console.log("  EXCESSO  (0 = na mediana dourada · 1,0 por eixo = no teto do gate)\n");
console.log("  total  texto info ritmo janel  s/txt  cena");
for (const r of rank.slice(0, TOP)) {
  const marca = r.reprova ? "✗" : (r.total >= 2 ? "▲" : " ");
  console.log(`  ${marca} ${String(r.total).padStart(4)} ${barra(r.ex.texto)}` +
    ` ${String(r.picoTexto).padStart(2)} ${String(r.picoInfo).padStart(3)} ${String(r.entPorSeg).padStart(5)} ${String(r.piorJanela).padStart(2)}` +
    `  ${String(r.segPorTexto).padStart(5)}s  ${r.arq.replace(/\.html$/, "")}`);
}
const acima = rank.filter((r) => r.total >= 2).length;
const reprovadas = rank.filter((r) => r.reprova).length;
console.log(`\n  ${reprovadas} reprovam no GATE · ${acima} passam no gate mas estão LONGE da mediana (≥2,0)`);
console.log(`  mediana do projeto: ${rank[Math.floor(rank.length/2)]?.picoTexto} textos · dourados: ${MEDIANA.texto}\n`);
if (naoMedidas.length) {
  console.log(`  ⚠ ${naoMedidas.length} cena(s) NÃO MEDIDA(S) — fora do ranking (não são as mais calmas: não foram vistas):`);
  for (const l of naoMedidas) console.log(`     ${l.arq} — ${l.naoMedido}`);
  process.exit(NAO_MEDIDO);
}
