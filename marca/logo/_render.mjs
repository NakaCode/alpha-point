// Fotografa uma página HTML local num PNG do tamanho pedido, com o Chrome desta máquina (playwright-core, sem baixar
// navegador). Uso: node marca/logo/_render.mjs <arquivo.html> <largura> <altura> <saida.png>
// A página deve desenhar no tamanho pedido, sem rolagem. Espera as fontes carregarem antes de fotografar.
import { chromium } from "playwright-core";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const [html, w, h, out] = process.argv.slice(2);
if (!html || !w || !h || !out) { console.error("uso: node marca/logo/_render.mjs <arquivo.html> <largura> <altura> <saida.png>"); process.exit(2); }
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
try {
  const page = await browser.newPage({ viewport: { width: Number(w), height: Number(h) }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(resolve(html)).href, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: Number(w), height: Number(h) } });
  console.log(`ok ${out} ${w}x${h}`);
} finally { await browser.close(); }
