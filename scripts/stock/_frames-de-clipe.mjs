#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/_frames-de-clipe.mjs (linhas 1-48, commit 4afda12).
// O que mudou: ffmpeg/ffprobe por scripts/stock/lib/ferramentas.mjs (FFMPEG_PATH, array, sem shell;
// ffmpeg ausente vira erro que ensina a instalar em vez de "x ffprobe falhou" em todo clipe);
// pastas relativas à pasta atual; a extração segue a mesma régua (15/50/85%, nunca o quadro zero).
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// FRAMES ESPALHADOS de clipes baixados — a peça que faltava entre a caça e o `_grade-fotos.mjs`.
//
// A caça baixa VÍDEO; a folha de conferência que o agente OLHA (`_grade-fotos.mjs`) come IMAGEM.
// Sem este passo, o agente escolhia footage pelo NOME DO ARQUIVO — que é exatamente o erro que a
// casa já pagou: o nome descreve o que o fornecedor quis vender, e a janela que a cena vai usar
// pode mostrar outra coisa.
//
// Extrai em 15%/50%/85% da duração, NUNCA o quadro zero: o primeiro quadro engana (fade-in preto,
// cartela do fornecedor, plano que só começa depois). Mesma régua do catalogador-de-midia.
//
// uso: node scripts/stock/_frames-de-clipe.mjs <dir-com-clipes> <dir-saida> [--so=trecho]
import { readdirSync, mkdirSync } from "node:fs";
import { join, basename, resolve } from "node:path";
import { ehPrincipal, opcao, posicionais, rodarSync } from "./lib/ferramentas.mjs";
import { linhasCsv } from "../lib/ffprobe-csv.mjs";   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs

export function principal(argv = process.argv.slice(2), { raiz = process.cwd(), log = console.log } = {}) {
  const [DIR_ARG, SAIDA_ARG] = posicionais(argv);
  const SO = opcao(argv, "so", "");
  if (!DIR_ARG || !SAIDA_ARG) { console.error("uso: _frames-de-clipe.mjs <dir-com-clipes> <dir-saida> [--so=trecho]"); return 2; }
  const DIR = resolve(raiz, DIR_ARG), SAIDA = resolve(raiz, SAIDA_ARG);   // [porte Regie]
  mkdirSync(SAIDA, { recursive: true });

  let clipes = readdirSync(DIR).filter((f) => /\.(mp4|mov|mxf)$/i.test(f)).sort();
  if (SO) clipes = clipes.filter((f) => f.includes(SO));
  if (!clipes.length) { log("sem clipes em " + DIR); return 0; }

  for (const c of clipes) {
    const src = join(DIR, c);
    let dur = 0, dim = "?";
    try {
      dur = +rodarSync("ffprobe", ["-v", "error", "-show_entries", "format=duration",
        "-of", "default=nw=1:nk=1", src], { paraQue: "medir a duracao do clipe" }).trim();
      dim = (linhasCsv(rodarSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries",
        "stream=width,height,r_frame_rate,has_b_frames", "-of", "csv=p=0", src]), 4)[0] || []).join(",") || "?";   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
    } catch (e) {
      if (e?.code === "FERRAMENTA_AUSENTE") throw e;   // [porte Regie] sem ffprobe não é defeito do clipe
      log(`x ffprobe falhou: ${c}`); continue;
    }
    if (!dur) { log(`x duracao 0 (arquivo truncado?): ${c}`); continue; }

    const base = basename(c).replace(/\.[a-z0-9]+$/i, "").slice(0, 64);
    let n = 0;
    [0.15, 0.5, 0.85].forEach((f, i) => {
      const t = (dur * f).toFixed(2);
      try {
        rodarSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", t, "-i", src,
          "-frames:v", "1", "-vf", "scale=640:-2", join(SAIDA, `${base}__${i}.png`)]);
        n++;
      } catch { /* instante ruim, segue — 2 de 3 já contam a história */ }
    });
    log(`${n ? "ok" : "x"} ${base}  |  ${dim} | ${dur.toFixed(1)}s | ${n} frame(s)`);
  }
  return 0;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
