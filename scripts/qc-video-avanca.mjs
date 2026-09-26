// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-video-avanca.mjs (linhas 1-34, commit 4afda12).
// O que mudou: o Chrome vem de lib/chrome.mjs; cena SEM <video> deixou de sair "⛔ TODOS PARADOS"
// (0 de 0 parados contava como "nenhum mexeu" — alarme falso) e passa a dizer que não há vídeo; o
// código de saída passou a concordar com o que se imprime (1 = há cena com todos parados, 2 = alguma
// cena não abriu; o estúdio saía 0 sempre); o nome da cena sai por basename (o split("/") não
// separava o caminho do Windows); o __renderAt é esperado com await (seek assíncrono).
// Na integração da v1: o contexto do Chrome é fechado em todo caminho (a cena sem vídeo deixava a aba aberta).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core
// (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// Uso: node scripts/qc-video-avanca.mjs <html> [<html> …]
// @roda: ambos
// Responde a pergunta que NENHUM gate responde: o <video> da cena AVANÇA quando o t avança?
// Congelar pode ser DESIGN (frame fixo declarado) — por isso o laudo diz quantos de quantos
// pararam, e quem lê decide contra o cabeçalho da cena. Ver [ARTE-220].
// [porte Régie] Exit: 0 = todo vídeo medido avança (ou a cena não tem vídeo) · 1 = alguma cena com
// TODOS os vídeos parados (confira se é congelamento declarado) · 2 = alguma cena não deu para medir.
import { pathToFileURL } from "node:url";
import { resolve, basename } from "node:path";
import { lancarChrome } from "./lib/chrome.mjs";
import { morrerComoNaoMedido, NAO_MEDIDO } from "./lib/nao-medido.mjs";
morrerComoNaoMedido("qc-video-avanca");
const arquivos = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!arquivos.length) { console.error("uso: node scripts/qc-video-avanca.mjs <html> [<html> …]"); process.exit(2); }
const b = await lancarChrome({ chromiumSandbox: false });
let parados = 0, erros = 0;
for (const HTML of arquivos) {
  // [porte Régie] o CONTEXTO é fechado em todo caminho (finally): o `continue` da cena sem vídeo pulava o
  // p.close() e o contexto nunca era fechado — num projeto inteiro, uma aba viva por cena até o fim.
  const ctx = await b.newContext({ viewport:{width:1280,height:720}, deviceScaleFactor:1 });
  const p = await ctx.newPage();
  const nome = basename(HTML).replace(/\.html$/, "");   // [porte Régie] basename, não split("/")
  try {
    await p.goto(pathToFileURL(resolve(HTML)).href, { waitUntil: "load" });
    await p.evaluate(() => document.fonts.ready);
    await p.evaluate(() => window.__prepararCaptura && window.__prepararCaptura());
    await p.waitForTimeout(1200);
    const dur = await p.evaluate(() => window.__duracao);
    // [porte Régie] sem __duracao o 0,30×undefined virava NaN e o __renderAt(NaN) media um instante qualquer
    if (!(dur > 0) || !(await p.evaluate(() => typeof window.__renderAt === "function"))) throw new Error("a cena não expõe __duracao/__renderAt — não há tempo para avançar");
    const t1 = +(dur*0.30).toFixed(2), t2 = +(dur*0.85).toFixed(2);
    await p.evaluate(async t => { await window.__renderAt(t); }, t1);
    await p.waitForTimeout(2600);
    const a = await p.evaluate(() => [...document.querySelectorAll("video")].map(v=>+v.currentTime.toFixed(3)));
    await p.evaluate(async t => { await window.__renderAt(t); }, t2);
    await p.waitForTimeout(2600);
    const c = await p.evaluate(() => [...document.querySelectorAll("video")].map(v=>+v.currentTime.toFixed(3)));
    // [porte Régie] zero vídeo não é "todos parados": não há o que avançar (e não é verde de vídeo)
    if (!a.length) { console.log(`·  ${nome.padEnd(42)} sem <video> na cena — nada a medir`); continue; }
    const paradas = a.map((v,i)=>Math.abs(v-c[i])<=0.02);
    const mexeu = paradas.some(x=>!x);
    if (!mexeu) parados++;
    console.log(`${mexeu?"✓":"⛔ TODOS PARADOS"}  ${nome.padEnd(42)} t=${t1}→${t2}  ${paradas.filter(Boolean).length}/${paradas.length} parado(s)  ${JSON.stringify(a)} → ${JSON.stringify(c)}`);
  } catch(e) { erros++; console.log(`ERRO  ${nome}: ${String(e).replace(/\s+/g, " ").slice(0,140)}`); }
  finally { await ctx.close().catch(() => {}); }
}
await b.close();
process.exit(parados ? 1 : erros ? NAO_MEDIDO : 0);
