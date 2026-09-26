#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-respiro.mjs (linhas 1-96, commit 4afda12).
// O que mudou: resolução do projeto (out\<proj>, pasta absoluta); o rodapé diz que a régua de referência é do acervo do Top10; o
// espelho com BOM é lido (antes os modos sumiam em silêncio) e o espelho quebrado é NÃO MEDIDO (exit 2).
// O piso continua decisão editorial do dono (--piso=N); sem ele o gate só MEDE.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-respiro.mjs — o vídeo deixa o espectador RESPIRAR? E os modos estão equilibrados?
 *
 * ══ O QUE É UMA CENA QUE RESPIRA ══
 *
 * Mateus, 26/jul: *"eu quero justamente que tenham cenas de vídeos que não hajam textos nem nenhum
 * elemento em tela, justamente pra deixar um tempo do espectador absorver a leitura do roteiro, com
 * vídeos reais e acontecimentos reais, pra ilustrar o que está sendo dito, sem nenhuma informação
 * extra em tela."*
 *
 * É footage/foto REAL em tela cheia com a tela limpa. Não é cena vazia: é a cena em que a imagem
 * carrega sozinha e o espectador ouve. Sem ela o vídeo inteiro é leitura — o olho nunca descansa e a
 * narração compete com texto do primeiro ao último segundo.
 *
 * ══ POR QUE ESTE GATE EXISTE, e por que ele NÃO reprova ══
 *
 * Medido em 26/jul, e o espalhamento é a prova de que não havia critério: `homossexualidade` 27%,
 * `avioes-pequenos` 18%, `senna` 9%, `compilado-previsoes-jiang` **0 de 76**. E a régua da casa é
 * MUDA: os exemplares dourados respiram **11%** (3 de 28) — ou seja, o estúdio nunca fez isto de
 * propósito, e não dá para derivar o piso deles.
 *
 * Por isso ele MEDE e AVISA, não reprova: o piso é decisão editorial do dono, não número que eu
 * invento. Quando ele fixar, vira `--piso=N` no `top10 doctor` e passa a barrar.
 *
 * Uso: node scripts/qc-respiro.mjs <proj> [--piso=25] [--json]
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { lerJsonOuNaoMedi } from "./lib/modos.mjs";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const argv = process.argv.slice(2);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
const PROJ = argv.find((a) => !a.startsWith("--"));
const PISO = +opt("piso", "0");
const JSON_OUT = argv.includes("--json");
if (!PROJ) { console.error("uso: qc-respiro.mjs <proj> [--piso=25] [--json]"); process.exit(2); }

// [porte Régie] aceita <proj>, out/<proj> com / ou \ e a pasta do projeto (antes, só o slug).
const D = (() => {
  const limpo = PROJ.replace(/[\\/]+$/, "");
  if (isAbsolute(limpo)) return limpo;
  if (/^out[\\/]/.test(limpo)) return join(RAIZ, limpo);
  if (existsSync(limpo) && statSync(limpo).isDirectory()) return resolve(limpo);
  return join(RAIZ, "out", limpo);
})();
const G = join(D, "graphics");

/**
 * Conta blocos de texto VISÍVEIS. Fora de <script>/<style>, e descartando pontuação solta e
 * entidades — senão um `&nbsp;` ou um `·` de ornamento contaria como informação na tela.
 */
const textosDe = (h) => {
  const s = h.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  return [...s.matchAll(/>([^<>]{2,})</g)].map((m) => m[1].trim())
    .filter((t) => t && !/^[\s{}();:,.\-–—|/\\·•]+$/.test(t) && !/^&[a-z#0-9]+;$/.test(t)).length;
};

const cenas = [];
if (existsSync(G)) {
  for (const a of readdirSync(G).filter((f) => f.endsWith(".html") && !f.startsWith("_") && !f.startsWith("."))) {
    const h = readFileSync(join(G, a), "utf8");
    cenas.push({ id: a.replace(/\.html$/, ""), midia: /<video|<img/.test(h), textos: textosDe(h) });
  }
}

// modos vêm do espelho (o artefato não guarda o modo)
let modos = {};
{ // [porte Régie] BOM do Bloco de Notas; ausente = sem modos; quebrado = NÃO MEDI (o catch vazio de antes calava os dois)
  const e = lerJsonOuNaoMedi(join(D, "espelho.json"), "qc-respiro");
  for (const s of (e?.segmentos || e?.cenas || [])) if (s.anima) modos[s.modo || "?"] = (modos[s.modo || "?"] || 0) + 1;
}

const comMidia = cenas.filter((c) => c.midia);
const respiram = comMidia.filter((c) => c.textos <= 2);
const pct = cenas.length ? +(respiram.length / cenas.length * 100).toFixed(1) : 0;

if (JSON_OUT) {
  console.log(JSON.stringify({ proj: PROJ, cenas: cenas.length, comMidia: comMidia.length, respiram: respiram.length, pct, modos, piso: PISO }, null, 1));
} else {
  console.log(`\n══ RESPIRO · ${PROJ} ══`);
  if (!cenas.length) { console.log(`  (sem HTML ainda — rode depois da estação ARTE)\n`); process.exit(0); }
  console.log(`  ${cenas.length} cenas · ${comMidia.length} com mídia real`);
  console.log(`  RESPIRAM (mídia real, ≤2 textos na tela): ${respiram.length} = ${pct}%`);
  if (Object.keys(modos).length) {
    const tot = Object.values(modos).reduce((a, b) => a + b, 0);
    const linha = Object.entries(modos).sort((a, b) => b[1] - a[1])
      .map(([k, v]) => `${k} ${v} (${(v / tot * 100).toFixed(0)}%)`).join(" · ");
    console.log(`  modos: ${linha}`);
    const [maiorNome, maiorQtd] = Object.entries(modos).sort((a, b) => b[1] - a[1])[0];
    if (maiorQtd / tot > 0.4) console.log(`  ⚠ "${maiorNome}" é ${(maiorQtd / tot * 100).toFixed(0)}% do vídeo — o espectador vê a mesma linguagem quase metade do tempo`);
  }
  if (respiram.length) console.log(`  exemplos: ${respiram.slice(0, 4).map((c) => c.id).join(" · ")}`);
  console.log(`\n  Régua medida em 26/jul no acervo do Top10 — homossexualidade 27% · avioes 18% · senna 9% · compilado-jiang 0%`);   // [porte Régie]
  console.log(`  e os exemplares DOURADOS respiram 11%: a casa nunca fez isto de propósito.`);
  if (PISO) {
    console.log(pct >= PISO ? `\n✓ acima do piso de ${PISO}%\n` : `\n✗ ABAIXO do piso de ${PISO}% — faltam ${Math.ceil(cenas.length * PISO / 100) - respiram.length} cena(s) de respiro\n`);
  } else {
    console.log(`  Sem --piso este gate só MEDE: o número é decisão editorial, não invenção minha.\n`);
  }
}
process.exitCode = PISO && pct < PISO ? 1 : 0;
