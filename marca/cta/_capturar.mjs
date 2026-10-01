// Grava uma peça animada (HTML) quadro a quadro, com fundo transparente, e monta:
//   <saida>/<nome>.mov  — ProRes 4444 com alfa, 3840×2160, para pôr por cima de qualquer cena no Premiere;
//   <saida>/<nome>-sobre-<fundo>.mp4 — prévias em 1920×1080, a peça por cima de quadros do canal.
// A página expõe window.render(t) (t em segundos) e desenha o estado daquele instante, sem animação CSS solta.
// Uso: node marca/cta/_capturar.mjs <peca.html> <duracao_s> <pasta_saida> [--fps=30] [--fundos=a.jpg,b.jpg]
import { chromium } from "playwright-core";
import { pathToFileURL } from "node:url";
import { resolve, basename, join } from "node:path";
import { mkdirSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";

const args = process.argv.slice(2);
const pos = args.filter((a) => !a.startsWith("--"));
const opt = Object.fromEntries(args.filter((a) => a.startsWith("--")).map((a) => a.slice(2).split("=")));
const [html, durS, saida] = pos;
if (!html || !durS || !saida) { console.error("uso: node marca/cta/_capturar.mjs <peca.html> <duracao_s> <pasta_saida> [--fps=30] [--fundos=a.jpg,b.jpg]"); process.exit(2); }
const fps = Number(opt.fps || 30), W = 3840, H = 2160, n = Math.round(Number(durS) * fps);
const nome = basename(html).replace(/\.html$/, "");
const quadros = join(saida, `_quadros-${nome}`);
rmSync(quadros, { recursive: true, force: true }); mkdirSync(quadros, { recursive: true });

const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
try {
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(resolve(html)).href, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  if (!(await page.evaluate(() => typeof window.render === "function"))) throw new Error("a página não expõe window.render(t)");
  for (let i = 0; i < n; i++) {
    await page.evaluate((t) => window.render(t), i / fps);
    await page.screenshot({ path: join(quadros, `f_${String(i).padStart(5, "0")}.png`), omitBackground: true, clip: { x: 0, y: 0, width: W, height: H } });
  }
} finally { await browser.close(); }

const mov = join(saida, `${nome}.mov`);
execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-framerate", String(fps), "-i", join(quadros, "f_%05d.png"),
  "-c:v", "prores_ks", "-profile:v", "4444", "-pix_fmt", "yuva444p10le", "-vendor", "apl0", mov]);
console.log(`ok ${mov} (${n} quadros, ${fps} fps, alfa)`);
for (const f of (opt.fundos ? opt.fundos.split(",") : [])) {
  const out = join(saida, `${nome}-sobre-${basename(f).replace(/\.\w+$/, "")}.mp4`);
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-loop", "1", "-framerate", String(fps), "-i", f, "-i", mov,
    "-filter_complex", "[0:v]scale=1920:1080,setsar=1[b];[1:v]scale=1920:1080[p];[b][p]overlay=0:0:format=auto,format=yuv420p[v]",
    "-map", "[v]", "-t", String(durS), "-c:v", "libx264", "-crf", "18", "-r", String(fps), out]);
  console.log(`ok ${out}`);
}
