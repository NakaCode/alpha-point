#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-fusao-espelho.mjs (linhas 1-123, commit 4afda12).
// O que mudou: importa ./lib/espelho-path.mjs no lugar de ../src/paths.mjs; o argumento aceita "out/<proj>" e "\"; projeto que não existe é erro de chamada (exit 2), não "nada a cobrar".
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// QC FUSÃO×ESPELHO — o gate que faltava para a ARTE-102: cruza os runs `fundir:true` do
// `conceito-visual.json` com o que está GRAVADO no `espelho.json`.
//
// POR QUE EXISTE: a ARTE-102 manda o diretor-de-arte gravar a fusão no espelho ele mesmo, e o
// gate 4b do agente é AUTO-DECLARADO — quem não leu a lei (ou concebeu o vídeo antes dela, 03/ago)
// passa batido, e nada no estúdio cruza os dois arquivos. Medido em 03/ago, com a lei já escrita:
// de 9 vídeos com run fundido, **7 estavam com a fusão só no conceito-visual**. O sintoma não
// aparece na arte: aparece semanas depois, como vídeo que a fila devolve pra ARTE PARA SEMPRE
// (`situacao.mjs`/`despachante.mjs` contam cada filho como cena sem HTML) ou como clipe longo
// entrando em slot curto (a `dur` da mãe valendo só o primeiro beat).
// O `mamute-de-volta` queimou sessões inteiras auditando arte que estava 81/81 pronta por isto.
// Doutrina: seed/regras/SIS.md · [SIS-75] (o porquê) e seed/regras/ARTE.md · [ARTE-102] (a regra).
//
// Uso: node scripts/qc-fusao-espelho.mjs <proj>            → PASS/FAIL
//      node scripts/qc-fusao-espelho.mjs <proj> --aplicar  → grava a fusão (a direção já decidiu)
//      node scripts/qc-fusao-espelho.mjs --todos           → varre out/*
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { espelhoPath, lerEspelho } from "./lib/espelho-path.mjs";   // [porte Régie] era ../src/paths.mjs

// [porte Régie] Os caminhos abaixo são relativos à raiz do canal (a regra de ouro: comando roda na
// raiz). O espelho já era lido de lá pelo lib/espelho-path.mjs; o resto passa a ser também, para que
// um cwd errado não leia o espelho de um lugar e o conceito-visual de outro.
const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const R = (rel) => join(RAIZ, rel);

/**
 * LENTE 2 — a fusão pode ENGOLIR a exigência de registro real, e isso nenhum gate via.
 *
 * A cena fundida herda a técnica da MÃE. Quando uma mãe de `dados`/`split`/`desenho` absorve uma
 * vizinha de `footage`, a janela da filha — que pedia registro real — passa a ser coberta por
 * gráfico ou desenho, e o pedido some sem deixar rastro: a filha não existe mais como arquivo, o
 * `--listar` conta as duas como cobertas, e a mãe passa em contrato/hex/overlap porque não há nada
 * de errado com ELA. Medido no `rosto-da-formiga` em 21/ago/2026: `s25-sete-vezes-mais-rapido`
 * (dados) engoliu `s26-o-mundo-em-camera-lenta` (footage) e `s27-o-tapa-em-dois-tempos`
 * (split-footage) e saiu com ZERO mídia; `s55-anestesico-e-anticoagulante` (split) engoliu
 * `s56-a-picada-indolor-e-a-coceira` (footage), idem.
 *
 * ⚠️ AVISA, NÃO REPROVA — e a distinção é o ponto. Pode ser decisão editorial legítima (o gráfico
 * cobre a janela de propósito). Reprovar condenaria arte JÁ PAGA a ser refeita por suspeita, que é
 * exatamente o custo que a casa recusa. O que o gate deve garantir é que a escolha seja VISTA.
 */
const MODO_PEDE_REGISTRO = /^(footage|split-footage|foto|aereo-real|mosaico|drone)$/;
const MIDIA_NO_HTML = /(?:src|href)="(?!data:)([^"]*\.(?:mp4|mov|jpe?g|png|webp|avif))"|url\(\s*['"]?(?!data:)([^'")]*\.(?:mp4|mov|jpe?g|png|webp|avif))/gi;

function midiaMudaDoRun(proj, maeId, filhoIds, byId) {
  const html = R(`out/${proj}/graphics/${maeId}.html`);
  if (!existsSync(html)) return null;                       // sem arte ainda: nada a medir
  const txt = readFileSync(html, "utf8");
  if (MIDIA_NO_HTML.test(txt)) { MIDIA_NO_HTML.lastIndex = 0; return null; }
  MIDIA_NO_HTML.lastIndex = 0;
  const pedem = filhoIds.filter((id) => MODO_PEDE_REGISTRO.test(String(byId[id]?.modo || "")));
  return pedem.length ? pedem : null;
}

const args = process.argv.slice(2);
const aplicar = args.includes("--aplicar");
const todos = args.includes("--todos");
// [porte Régie] aceita `out/<proj>` e "\", como os irmãos: o montador e o editor-de-arte chamam os
// gates com o prefixo out/, e aqui ele virava out/out/<proj> — que "não tinha run" e passava.
const projBruto = args.find((a) => !a.startsWith("--"));
const projArg = projBruto && projBruto.replace(/\\/g, "/").replace(/\/+$/, "").replace(/^out\//, "");

/** A janela do run em tempo BRUTO — o relógio em que o espelho fala. É `fim do último − inSec do
 *  primeiro` (ARTE-102). De propósito NÃO consulta `_cortes.json`: o bruto é auto-suficiente aqui,
 *  e é o `finalizacao-config.mjs` que remapeia bruto→limpo na hora de montar. */
const janelaBruta = (mae, ult) => +(ult.inSec + ult.dur - mae.inSec).toFixed(3);

function checar(proj, { gravar = false } = {}) {
  const cvPath = R(`out/${proj}/conceito-visual.json`);
  if (!existsSync(cvPath) || !existsSync(R(espelhoPath(proj)))) return null;
  const cv = JSON.parse(readFileSync(cvPath, "utf8"));
  const espelho = lerEspelho(proj);
  const segs = espelho.segmentos || espelho.scenes || [];
  const byId = Object.fromEntries(segs.map((s) => [s.id, s]));
  const runs = (cv.fluxo || []).filter((f) => f.fundir && Array.isArray(f.run) && f.run.length > 1);
  if (!runs.length) return null;

  const falhas = [], avisos = [];
  let filhos = 0, marcados = 0, mudou = false;
  for (const r of runs) {
    const [maeId, ...filhoIds] = r.run;
    const mae = byId[maeId];
    const ult = byId[r.run[r.run.length - 1]];
    if (!mae || !ult) { falhas.push(`run [${r.run.join(", ")}]: id ausente no espelho`); continue; }
    for (const id of filhoIds) {
      filhos++;
      const f = byId[id];
      if (!f) { falhas.push(`${id}: no fluxo mas não no espelho`); continue; }
      const atual = f._mergedInto || f.mergedInto;
      if (atual === maeId) { marcados++; continue; }
      if (atual) { falhas.push(`${id}: _mergedInto="${atual}" mas a mãe do run é "${maeId}"`); continue; }
      falhas.push(`${id}: sem _mergedInto (mãe: ${maeId})`);
      if (gravar) { f._mergedInto = maeId; mudou = true; marcados++; }
    }
    const janela = janelaBruta(mae, ult);
    if (Math.abs(mae.dur - janela) > 0.15) {
      falhas.push(`${maeId}: dur=${mae.dur} mas a janela do run é ${janela} (bruto) — clipe longo em slot curto`);
      if (gravar) { mae.dur = janela; mudou = true; }
    }

    const engolidas = midiaMudaDoRun(proj, maeId, filhoIds, byId);
    if (engolidas) avisos.push(`${maeId} (modo ${mae.modo}): HTML sem mídia nenhuma, mas absorveu ` +
      engolidas.map((id) => `${id} (${byId[id].modo})`).join(" · ") + ` — janela de registro real coberta por técnica de mãe`);
  }

  if (gravar && mudou) {
    const p = R(espelhoPath(proj));
    const txt = readFileSync(p, "utf8");
    if (!existsSync(p + ".bkp-antes-fusao")) writeFileSync(p + ".bkp-antes-fusao", txt);
    writeFileSync(p, JSON.stringify(espelho, null, 2) + (txt.endsWith("\n") ? "\n" : ""));
  }
  return { proj, runs: runs.length, filhos, marcados, falhas, avisos, gravou: gravar && mudou };
}

const projs = todos ? readdirSync(R("out")).filter((d) => existsSync(R(`out/${d}/conceito-visual.json`))) : [projArg];
if (!projs[0]) { console.error("uso: node scripts/qc-fusao-espelho.mjs <proj> [--aplicar] | --todos"); process.exit(2); }
// [porte Régie] Era o único gate portado que respondia "nada a cobrar", exit 0, para projeto que não
// existe: slug errado aprovava sem olhar nada. Projeto que não existe é erro de chamada, não aprovação
// (a mesma regra do qc-laudo e do qc-reaproveitamento).
if (!todos && !existsSync(R(`out/${projArg}`))) {
  console.error(`✗ ${projArg}: não existe em out/ — confira o slug. NÃO MEDIDO (não é aprovação).`);
  process.exit(2);
}

let falhou = 0, comRun = 0, comAviso = 0;
for (const proj of projs) {
  const r = checar(proj, { gravar: aplicar });
  if (!r) { if (!todos) console.log(`— ${proj}: nenhum run fundido no conceito-visual (nada a cobrar)`); continue; }
  comRun++;
  const ok = !r.falhas.length;
  if (!ok) falhou++;
  console.log(`${ok ? "✓ PASS" : "✗ FAIL"}  ${proj.padEnd(38)} ${r.runs} runs · ${r.marcados}/${r.filhos} filhos gravados${r.gravou ? " · GRAVADO" : ""}`);
  if (!ok && !r.gravou) r.falhas.forEach((f) => console.log(`         → ${f}`));
  // avisos não entram no veredito: são escolha a CONFERIR, não defeito a consertar
  r.avisos.forEach((a) => { comAviso++; console.log(`      ⚠ ${a}`); });
}
if (todos) console.log(`\n── ${comRun} vídeos com run fundido · ${falhou} com a fusão fora do espelho · ${comAviso} run(s) com janela de registro engolida`);
process.exit(falhou && !aplicar ? 1 : 0);
