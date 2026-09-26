// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/_capturar-pagina.mjs (linhas 1-36, commit 4afda12).
// O que mudou: o Chrome vem de lib/chrome.mjs; a pasta do PNG é criada se faltar; e a captura
// deixou de ser "prova" quando a página não veio — navegação que falhou saía 0 com o PNG da página
// de erro do Chrome, e HTTP 404/500 também. Agora: sem resposta = exit 2 (não capturei), resposta
// ≥ 400 = exit 1 (capturei, mas é a página de ERRO, não o documento). O PNG fica, para quem quiser ver.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core
// (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// Captura de página web para PROVA documental (pesquisa-documentos).
// Uso: node scripts/_capturar-pagina.mjs <url> <out.png> [--full] [--w 1600] [--h 1200] [--esperar 4000]
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { lancarChrome } from "./lib/chrome.mjs";
import { morrerComoNaoMedido, NAO_MEDIDO } from "./lib/nao-medido.mjs";

morrerComoNaoMedido("_capturar-pagina");
const args = process.argv.slice(2);
const URL = args[0], OUT = args[1];
if (!URL || !OUT || URL.startsWith("--") || OUT.startsWith("--")) {
  console.error("uso: node scripts/_capturar-pagina.mjs <url> <out.png> [--full] [--w 1600] [--h 1200] [--esperar 4000]");
  process.exit(2);
}
const flag = (n, d) => { const i = args.indexOf("--" + n); return i >= 0 ? args[i + 1] : d; };
const FULL = args.includes("--full");
const W = +flag("w", 1600), H = +flag("h", 1400), ESPERA = +flag("esperar", 5000);

const b = await lancarChrome({ args: ["--disable-blink-features=AutomationControlled"] });
const ctx = await b.newContext({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  locale: "en-US",
});
const p = await ctx.newPage();
let status = "?", erroNav = null;
try {
  const r = await p.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
  status = r ? r.status() : "sem-resposta";
} catch (e) { erroNav = e.message.split("\n")[0]; console.error("NAV ERRO:", erroNav); }
await p.waitForTimeout(ESPERA);
// mata banners de cookie mais comuns (a captura é PROVA, não peça de tela)
await p.evaluate(() => {
  const alvos = ["#onetrust-consent-sdk", "#onetrust-banner-sdk", ".osano-cm-window", "#cookie-banner",
    "[id*=cookie][id*=banner]", "[class*=cookie-banner]", "#usercentrics-root", ".cc-window", "#gdpr-banner"];
  for (const s of alvos) document.querySelectorAll(s).forEach(e => e.remove());
}).catch(() => {});
await p.waitForTimeout(500);
mkdirSync(dirname(resolve(OUT)), { recursive: true });   // [porte Régie] pasta do PNG criada se faltar
await p.screenshot({ path: OUT, fullPage: FULL });
const titulo = await p.title().catch(() => "");
console.log(JSON.stringify({ url: URL, urlFinal: p.url(), status, titulo, arquivo: OUT, ...(erroNav ? { erro: erroNav } : {}) }));
await b.close();
// [porte Régie] O PNG de uma navegação que falhou é o retrato da página de erro do Chrome — guardá-lo
// como "prova documental" com exit 0 é o verde falso desta ferramenta. Quem chama lê o código.
if (erroNav) { console.error("⚠ NÃO CAPTURADO — a página não abriu; o PNG é a tela de erro do navegador, não o documento."); process.exit(NAO_MEDIDO); }
if (typeof status === "number" && status >= 400) { console.error(`✗ a página respondeu HTTP ${status} — o PNG é a página de ERRO do site, não o documento.`); process.exit(1); }
