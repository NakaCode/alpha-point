#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/_contato.mjs (linhas 1-53, commit 4afda12).
// O que mudou: (1) as miniaturas vêm por fetch (o curl do estúdio não existe num Windows sem Git
// Bash), com o mesmo prazo de 25 s, e também de ARQUIVO LOCAL (caminho ou file://); (2) ffmpeg por
// scripts/stock/lib/ferramentas.mjs e a fonte do rótulo procurada no sistema, escapada para o
// drawtext; (3) pasta temporária do sistema; (4) a entrada aceita, além de {itens:[…]} e da lista,
// os candidatos do buscar-midia do motor (`candidatos` em out/<proj>/_pesquisa/candidatos/<cena>.json)
// e a forma [{busca,url,candidatos:[…]}] — a roupa mandava achatar com `jq`, que não existe no
// Windows; (5) miniatura que falha é CONTADA na saída (o estúdio a ignorava calado).
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// FOLHA DE CONTATO — baixa thumbs de candidatos e monta uma grade numerada (ffmpeg xstack),
// para o agente OLHAR os candidatos antes de baixar os arquivos grandes.
// uso: node scripts/stock/_contato.mjs <json-de-candidatos> <saida.png> [--cols=4]
// entrada: JSON {itens:[{thumb,...}]} ou array de {thumb} / {url}
import { readFileSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ehPrincipal, fonteParaRotulo, opcao, opcaoFontfile, pastaTemporaria, posicionais, rodarSync, textoDoRotulo } from "./lib/ferramentas.mjs";

/** [porte Regie] todas as formas de entrada conhecidas viram uma lista de itens — puro. */
export function itensDaEntrada(j) {
  if (Array.isArray(j)) {
    // [{busca,url,candidatos:[…]}] (a shortlist do baixar do estúdio) — achatada aqui, sem jq
    if (j.length && j.every((x) => x && Array.isArray(x.candidatos))) return j.flatMap((x) => x.candidatos);
    return j;
  }
  if (Array.isArray(j?.itens)) return j.itens;
  if (Array.isArray(j?.candidatos)) return j.candidatos;          // buscar-midia do motor
  return [];
}

/** O rótulo de um item — puro. */
export function rotuloDoItem(it, i) {
  return textoDoRotulo(it.rotulo || `${i + 1}. ${it.fonte || ""} ${it.w || ""}x${it.h || ""} ${it.mbps ? it.mbps + "Mbps" : ""} ${it.dur ? it.dur + "s" : ""}`);
}

/** [porte Regie] a miniatura: URL http(s) por fetch, ou arquivo local. */
async function obterMiniatura(u, destino, { raiz, fetch }) {
  if (/^https?:\/\//i.test(u)) {
    const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0" }, signal: AbortSignal.timeout(25_000) });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    writeFileSync(destino, Buffer.from(await r.arrayBuffer()));
    return destino;
  }
  return /^file:/i.test(u) ? fileURLToPath(u) : resolve(raiz, u);
}

export async function principal(argv = process.argv.slice(2), { raiz = process.cwd(), fetch = globalThis.fetch, log = console.log } = {}) {
  const [SRC, OUT_ARG] = posicionais(argv);
  if (!SRC || !OUT_ARG) { console.error("uso: _contato.mjs <json-de-candidatos> <saida.png> [--cols=4]"); return 2; }
  const OUT = resolve(raiz, OUT_ARG);
  const COLS = +opcao(argv, "cols", "4");
  const itens = itensDaEntrada(JSON.parse(readFileSync(resolve(raiz, SRC), "utf8").replace(/^﻿/, "")));
  const TMP = pastaTemporaria("regie-contato-");          // [porte Regie]
  mkdirSync(dirname(OUT), { recursive: true });
  const FONTE = fonteParaRotulo({ log });   // [porte Regie] sem drawtext ou sem fonte: folha sem rótulo, avisada

  try {
    const ok = [];
    const mortas = [];
    for (const [i, it] of itens.entries()) {
      const u = it.thumb || it.url || it.preview;
      if (!u) { mortas.push(`${i + 1} (sem miniatura)`); continue; }
      const p = join(TMP, `t${String(i + 1).padStart(2, "0")}.jpg`);
      try {
        const origem = await obterMiniatura(u, p, { raiz, fetch });
        // normaliza para 640x360 e carimba o número + rótulo
        const rot = rotuloDoItem(it, i);
        const p2 = join(TMP, `n${String(i + 1).padStart(2, "0")}.png`);
        const rotulo = FONTE ? `,drawtext=${opcaoFontfile(FONTE)}text='${rot}':x=8:y=6:fontsize=22:fontcolor=yellow` : "";
        rodarSync("ffmpeg", ["-y", "-v", "error", "-i", origem, "-frames:v", "1", "-vf",
          `scale=640:360:force_original_aspect_ratio=decrease,pad=640:360:(ow-iw)/2:(oh-ih)/2:black,drawbox=y=0:h=34:w=640:color=black@0.75:t=fill${rotulo}`,
          p2]);
        ok.push(p2);
      } catch (e) {
        if (e?.code === "FERRAMENTA_AUSENTE") throw e;
        mortas.push(`${i + 1} (${String(e.message || e).split("\n")[0].slice(0, 60)})`);   // [porte Regie] contada, não calada
      }
    }
    if (!ok.length) { console.error(`nenhuma thumb baixada${mortas.length ? `: ${mortas.join(", ")}` : ""}`); return 1; }
    // xstack exige grade cheia; completa com pretos. [porte Regie] completa ANTES (o estúdio tentava,
    // falhava e refazia) e também quando há UMA miniatura só, que o xstack não aceita.
    const rows = Math.ceil(ok.length / COLS);
    const falta = rows * COLS - ok.length;
    let todos = ok;
    if (falta > 0 || ok.length < 2) {
      const preto = join(TMP, "preto.png");
      rodarSync("ffmpeg", ["-y", "-v", "error", "-f", "lavfi", "-i", "color=black:s=640x360", "-frames:v", "1", preto]);
      todos = [...ok, ...Array(Math.max(falta, ok.length < 2 ? 1 : 0)).fill(preto)];
    }
    const cols = Math.min(COLS, todos.length);
    const args = []; todos.forEach((p) => args.push("-i", p));
    args.push("-filter_complex", `${todos.map((_, i) => `[${i}:v]`).join("")}xstack=inputs=${todos.length}:layout=${todos.map((_, i) => `${(i % cols) * 640}_${Math.floor(i / cols) * 360}`).join("|")}:fill=black[v]`, "-map", "[v]", "-frames:v", "1", "-y", OUT);
    rodarSync("ffmpeg", ["-v", "error", ...args]);
    log(`ok ${ok.length} thumbs -> ${OUT_ARG}`);
    if (mortas.length) log(`  ${mortas.length} sem miniatura: ${mortas.join(", ")}`);
    return 0;
  } finally {
    rmSync(TMP, { recursive: true, force: true });
  }
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
