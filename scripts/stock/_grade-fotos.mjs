#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/_grade-fotos.mjs (linhas 1-39, commit 4afda12).
// O que mudou: ffmpeg por scripts/stock/lib/ferramentas.mjs (FFMPEG_PATH, array, sem shell); a fonte
// do rótulo é procurada no sistema e o caminho vai escapado para o drawtext (o DejaVu cravado do
// estúdio não existe no Windows, e "C:" quebra o filtro) — sem fonte, a grade sai sem o nome e o
// script AVISA; pastas relativas à pasta atual; a paginação troca só a extensão .png FINAL.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// FOLHA DE CONFERÊNCIA de FOTOS (o agente OLHA antes de aceitar) — grid 3xN com o nome carimbado.
// uso: node scripts/stock/_grade-fotos.mjs <dir> <saida.png> [--cols=3] [--cel=640x440] [--so=trecho]
import { readdirSync, mkdirSync } from "node:fs";
import { join, basename, dirname, resolve } from "node:path";
import { ehPrincipal, fonteParaRotulo, opcao, opcaoFontfile, posicionais, rodarSync, textoDoRotulo } from "./lib/ferramentas.mjs";

/** O filtro de UMA página da grade — puro, para o teste afirmar sobre ele sem ffmpeg. */
export function filtroDaPagina(nomes, { cols = 3, cw = 640, ch = 440, fonte = null } = {}) {
  let filt = "";
  nomes.forEach((f, i) => {
    // [porte Regie] rótulo só com fonte achada; texto sem aspa, dois-pontos, contrabarra e %
    const rotulo = fonte ? `,drawtext=${opcaoFontfile(fonte)}text='${textoDoRotulo(basename(f).replace(/\.[a-z]+$/i, ""))}':x=5:y=5:fontsize=19:fontcolor=yellow:box=1:boxcolor=black@0.75` : "";
    filt += `[${i}:v]scale=${cw}:-1:force_original_aspect_ratio=decrease,scale=w=${cw}:h=${ch}:force_original_aspect_ratio=decrease,`
      + `pad=${cw}:${ch}:(ow-iw)/2:(oh-ih)/2:black${rotulo}[v${i}];`;
  });
  let rows = "", r = 0;
  for (let k = 0; k < nomes.length; k += cols) {
    const ins = []; for (let c = 0; c < cols && k + c < nomes.length; c++) ins.push(`[v${k + c}]`);
    // [porte Regie] `cols > 1`: hstack de uma entrada só é erro do ffmpeg (--cols=1)
    if (ins.length === cols && cols > 1) filt += `${ins.join("")}hstack=${cols}[r${r}];`;
    else filt += `${ins.join("")}${ins.length > 1 ? `hstack=${ins.length},` : ""}pad=${cw * cols}:${ch}:0:0:black[r${r}];`;
    rows += `[r${r}]`; r++;
  }
  filt += r > 1 ? `${rows}vstack=${r}[out]` : `${rows}null[out]`;
  return filt;
}

export function principal(argv = process.argv.slice(2), { raiz = process.cwd(), log = console.log } = {}) {
  const [DIR_ARG, OUT_ARG] = posicionais(argv);
  if (!DIR_ARG || !OUT_ARG) { console.error("uso: _grade-fotos.mjs <dir> <saida.png> [--cols=3] [--cel=640x440] [--so=trecho]"); return 2; }
  const DIR = resolve(raiz, DIR_ARG), OUT = resolve(raiz, OUT_ARG);   // [porte Regie]
  const COLS = +opcao(argv, "cols", "3"), SO = opcao(argv, "so", "");
  const [CW, CH] = opcao(argv, "cel", "640x440").split("x").map(Number);
  const FONTE = fonteParaRotulo({ log });   // [porte Regie] sem drawtext ou sem fonte: folha sem rótulo, avisada
  let fs_ = readdirSync(DIR).filter((f) => /\.(jpg|jpeg|png|webp|tif|tiff)$/i.test(f)).sort();
  if (SO) fs_ = fs_.filter((f) => f.includes(SO));
  if (!fs_.length) { log("sem imagens em " + DIR); return 0; }
  mkdirSync(dirname(OUT), { recursive: true });
  const paginas = [];
  const PORPAG = COLS * 3;
  for (let p = 0; p < fs_.length; p += PORPAG) {
    const lote = fs_.slice(p, p + PORPAG);
    const args = [];
    lote.forEach((f) => args.push("-i", join(DIR, f)));
    const filt = filtroDaPagina(lote, { cols: COLS, cw: CW, ch: CH, fonte: FONTE });
    // [porte Regie] só a extensão FINAL: "grade.png.png" ou pasta com ".png" no nome não se confundem
    const saida = fs_.length > PORPAG ? OUT.replace(/\.png$/i, `-${paginas.length}.png`) : OUT;
    // [porte Regie] -frames:v 1: a saída é UMA imagem (sem ele o muxer de imagem reclama de padrão de nome)
    rodarSync("ffmpeg", ["-y", "-v", "error", ...args, "-filter_complex", filt, "-map", "[out]", "-frames:v", "1", saida], { paraQue: "montar a grade de fotos" });
    paginas.push(saida);
    log(`ok ${saida} (${lote.length} imagens)`);
  }
  return 0;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
