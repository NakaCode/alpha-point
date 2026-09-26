#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/_conferir.mjs (linhas 1-50, commit 4afda12).
// O que mudou: ffmpeg/ffprobe por scripts/stock/lib/ferramentas.mjs (FFMPEG_PATH, array, sem shell,
// erro que ensina a instalar); a pasta temporária é a do sistema (o /tmp do estúdio não existe no
// Windows); a fonte do rótulo é procurada no sistema (arialbd.ttf no Windows, DejaVu no Linux) e o
// caminho vai escapado para o drawtext ("C:" quebrava o filtro) — sem fonte, a folha sai sem rótulo
// e o script AVISA; vídeo que o ffprobe não mede é pulado com aviso (o estúdio morria no Number(NaN));
// o prefixo de saída é relativo à pasta atual; o último bloco com UMA tira só não morre mais no
// vstack (que exige duas entradas).
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// TIRA 3 FRAMES REAIS de cada vídeo baixado e monta uma folha de conferência (o agente OLHA).
// uso: node scripts/stock/_conferir.mjs <dir-videos> <saida-prefixo> [--por=6] [--so=trecho]
import { readdirSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { ehPrincipal, fonteParaRotulo, opcao, opcaoFontfile, pastaTemporaria, posicionais, rodarSync, textoDoRotulo } from "./lib/ferramentas.mjs";

export function principal(argv = process.argv.slice(2), { raiz = process.cwd(), log = console.log } = {}) {
  const [DIR_ARG, PREF_ARG] = posicionais(argv);
  if (!DIR_ARG || !PREF_ARG) { console.error("uso: _conferir.mjs <dir-videos> <saida-prefixo> [--por=6] [--so=trecho]"); return 2; }
  const DIR = resolve(raiz, DIR_ARG), PREF = resolve(raiz, PREF_ARG);
  const POR = +opcao(argv, "por", "6");
  const so = opcao(argv, "so", "");
  // [porte Regie] fonte do sistema, escapada para o filtro; null = folha sem rótulo, avisada
  const FONTE = fonteParaRotulo({ log });   // [porte Regie] sem drawtext ou sem fonte: folha sem rótulo, avisada

  // .mov entra junto: o Envato entrega .mov e o filtro só-.mp4 devolvia folha VAZIA sem dizer por quê
  // — o jeito silencioso de a validação por visão deixar de acontecer (medido no rosto-da-formiga, 21/ago).
  let vids = readdirSync(DIR).filter((f) => /\.(mp4|mov)$/i.test(f)).sort();
  if (so) vids = vids.filter((f) => f.includes(so));
  if (!vids.length) {
    const todos = readdirSync(DIR);
    const exts = [...new Set(todos.map((f) => (f.match(/\.[^.]+$/) || ["(sem extensão)"])[0].toLowerCase()))];
    console.error(`x nenhum video conferivel em ${DIR}${so ? ` com "${so}"` : ""}: ${todos.length} arquivos, extensoes ${exts.join(" ")}`);
    return 1;
  }
  const TMP = pastaTemporaria("regie-conf-");              // [porte Regie]
  try {
    const tiras = [];
    for (const v of vids) {
      const p = join(DIR, v);
      // [porte Regie] ffprobe que não mede pula o arquivo AVISANDO (o estúdio seguia com NaN e o ffmpeg morria)
      let dur = NaN;
      try { dur = +rodarSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", p], { paraQue: "medir a duracao do clipe" }).trim(); }
      catch (e) { if (e?.code === "FERRAMENTA_AUSENTE") throw e; }
      if (!(dur > 0)) { log(`x ffprobe nao mediu ${v} — fora da folha`); continue; }
      const ts = [dur * 0.12, dur * 0.5, dur * 0.85];
      const fr = [];
      ts.forEach((t, i) => {
        const o = join(TMP, `${v}-${i}.png`);
        rodarSync("ffmpeg", ["-y", "-v", "error", "-ss", String(t.toFixed(2)), "-i", p, "-frames:v", "1",
          "-vf", "scale=640:360:force_original_aspect_ratio=decrease,pad=640:360:(ow-iw)/2:(oh-ih)/2:black", o]);
        fr.push(o);
      });
      const tira = join(TMP, `tira-${tiras.length}.png`);
      const rot = textoDoRotulo(v.replace(/\.(mp4|mov)$/i, ""), 62);
      const rotulo = FONTE ? `,drawtext=${opcaoFontfile(FONTE)}text='${rot}':x=8:y=4:fontsize=24:fontcolor=yellow` : "";
      rodarSync("ffmpeg", ["-v", "error", "-i", fr[0], "-i", fr[1], "-i", fr[2], "-filter_complex",
        `[0:v][1:v][2:v]hstack=inputs=3[s];[s]drawbox=y=0:h=30:w=1920:color=black@0.8:t=fill${rotulo}[v]`,
        "-map", "[v]", "-frames:v", "1", "-y", tira]);
      tiras.push(tira);
    }
    if (!tiras.length) { console.error("x nenhum clipe entrou na folha (todos sem medida)"); return 1; }
    mkdirSync(dirname(PREF), { recursive: true });
    for (let k = 0; k * POR < tiras.length; k++) {
      const bloco = tiras.slice(k * POR, k * POR + POR);
      const args = []; bloco.forEach((p) => args.push("-i", p));
      // [porte Regie] vstack exige 2+ entradas: bloco de 1 tira só é copiado (o estúdio morria no último bloco ímpar)
      const filtro = bloco.length > 1 ? `${bloco.map((_, i) => `[${i}:v]`).join("")}vstack=inputs=${bloco.length}[v]` : "[0:v]null[v]";
      args.push("-filter_complex", filtro, "-map", "[v]", "-frames:v", "1", "-y", `${PREF}-${k}.png`);
      rodarSync("ffmpeg", ["-v", "error", ...args]);
      log(`ok ${PREF_ARG}-${k}.png (${bloco.length} clipes)`);
    }
    return 0;
  } finally {
    rmSync(TMP, { recursive: true, force: true });
  }
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
