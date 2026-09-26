#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/_svg-para-png.mjs (linhas 1-48, commit 4afda12).
// O que mudou: (1) o Chrome vem do acharChrome do motor (<motor>/src/lib/chrome.mjs: CHROME_PATH,
// Chrome e Edge do Windows) — o estúdio só conhecia /usr/bin/google-chrome; (2) PERFIL TEMPORÁRIO
// PRÓPRIO (--user-data-dir): sem ele, no Windows o chrome.exe repassa o comando ao Chrome que o dono
// já tem aberto e sai — nenhum PNG, e o erro não diz por quê (a mesma lição do motor); (3) o HTML
// temporário vai para a pasta temporária do sistema e é aberto por pathToFileURL (o "file://" +
// caminho do estúdio quebra com C:\ e com espaço); (4) a dimensão do PNG é lida do CABEÇALHO do
// arquivo (medirCabecalhoImagem do motor) — o estúdio usava ffprobe; (5) --no-sandbox só quando o
// processo roda como root no Linux (no Windows e para um usuário comum ele só enfraquece o Chrome).
// Os dois guards medidos (não-SVG e proporção pela tag <svg>) ficaram iguais.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// RASTERIZA um SVG (bandeira/brasão do Commons) em PNG de alta resolução usando Chrome headless.
// uso: node scripts/stock/_svg-para-png.mjs <arquivo.svg> <saida.png> [--w=3840]
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync, openSync, readSync, closeSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { importarDoMotor } from "../lib/motor.mjs";
import { ehPrincipal, opcao, pastaTemporaria, posicionais, rodarSync } from "./lib/ferramentas.mjs";

/**
 * Os dois guards e a conta da altura — puros. Devolve {ok:false, erro} ou {ok:true, w, h, H}.
 */
export function planejarSvg(src, W = 3840) {
  /* O ARQUIVO É MESMO UM SVG? (12/ago/2026, caça de logos do `ate-que-altura-construir`)
   * Sem este guard o script rasterizava PÁGINA DE ERRO HTML e imprimia `✓` com dimensões
   * plausíveis: o `upload.wikimedia.org` devolveu 429 ao IP da VM, vieram 2.256 bytes de
   * `<!DOCTYPE html>` gravados com nome `.svg`, o regex de width/height não casou, o
   * fallback da linha abaixo assumiu 3×2 e o Chrome fotografou o erro. Morto-silencioso
   * clássico: exit 0, arquivo no disco, laudo verde — e uma logo corrompida a caminho do
   * vídeo. Quem pegou foi um agente conferindo o CABEÇALHO à mão; nenhum gate olhava. */
  const inicio = src.replace(/^\uFEFF/, "").trimStart().slice(0, 4096);
  if (!/<svg[\s>]/i.test(inicio)) {
    const parece = /^<!doctype\s+html|^<html[\s>]/i.test(inicio) ? " — é HTML (página de erro do servidor?)" : "";
    return { ok: false, erro: `não é SVG${parece}. Primeiros bytes: ${JSON.stringify(inicio.slice(0, 120))}` };
  }
  /* A PROPORÇÃO SAI DA TAG `<svg …>`, NUNCA DO ARQUIVO INTEIRO (18/ago/2026, caça de logos do
   * `ultimo-dia-dinossauros`). O regex antigo varria `src` todo e casava com o PRIMEIRO
   * width/height que achasse — que num SVG bem-formado costuma ser de um `<rect>` interno.
   * O logo oficial da VU Amsterdam só declara `viewBox` no raiz e traz `width="1.5"
   * height="7.1"` numa barrinha lá dentro: o script gerou 2400×11360 = 27,3 MP em vez de
   * 2400×584, com exit 0 e `✓` no log. Mesma família do guard de HTML acima — o número sai
   * plausível, ninguém confere, e o gate de tamanho é que reprova depois, longe da causa. */
  const tagSvg = (src.match(/<svg\b[^>]*>/i) || [""])[0];
  let w = +(tagSvg.match(/\bwidth="([\d.]+)/)?.[1] || 0), h = +(tagSvg.match(/\bheight="([\d.]+)/)?.[1] || 0);
  if (!w || !h) { const vb = (tagSvg.match(/viewBox="([^"]+)"/)?.[1] || src.match(/viewBox="([^"]+)"/)?.[1] || "").split(/[\s,]+/).map(Number); if (vb.length === 4) { w = vb[2]; h = vb[3]; } }
  if (!w || !h) { w = 3; h = 2; }
  return { ok: true, w, h, H: Math.round(W * h / w) };
}

export async function principal(argv = process.argv.slice(2), { raiz = process.cwd(), env = process.env, log = console.log } = {}) {
  const [SVG, OUT] = posicionais(argv);
  if (!SVG || !OUT) { console.error("uso: _svg-para-png.mjs <arquivo.svg> <saida.png> [--w=3840]"); return 2; }
  const W = +opcao(argv, "w", "3840");
  const src = readFileSync(resolve(raiz, SVG), "utf8");
  const plano = planejarSvg(src, W);
  if (!plano.ok) {
    console.error(`x ${SVG} ${plano.erro}`);
    console.error(`  Rebaixe o download antes de converter — rasterizar isto produz um PNG do erro.`);
    return 1;
  }
  const { w, h, H } = plano;
  // [porte Regie] Chrome do motor (Windows: Chrome ou Edge), com CHROME_PATH valendo primeiro.
  const { acharChrome, semChromeMensagem } = await importarDoMotor("src/lib/chrome.mjs");
  const { medirCabecalhoImagem } = await importarDoMotor("src/midia/busca.mjs");
  const CHROME = acharChrome({ env });
  if (!CHROME) { console.error(semChromeMensagem(env)); return 1; }

  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
html,body{margin:0;padding:0;background:transparent}
img{display:block;width:${W}px;height:${H}px;image-rendering:auto}
</style></head><body><img src="data:image/svg+xml;base64,${Buffer.from(src).toString("base64")}"></body></html>`;
  const tmp = pastaTemporaria("regie-svg2png-");          // [porte Regie] o /tmp do estúdio não existe no Windows
  const saida = resolve(raiz, OUT);
  // [porte Regie] O Chrome grava num arquivo NOVO ao lado do destino, e só ele é conferido. Antes o
  // script gravava direto em `saida` e conferia só existsSync(saida): com o Chrome falhando calado e
  // um PNG VELHO no destino, saía "ok ... 600x400" com --w=900 pedido — a bandeira da cena era a de
  // outra rodada (provado na revisão v1, 23/09/2026, com CHROME_PATH=/bin/true).
  const novo = `${saida}.novo-${process.pid}.png`;
  rmSync(novo, { force: true });
  const { renomearComRetentativa } = await importarDoMotor("src/midia/arquivos.mjs");
  try {
    const pagina = join(tmp, "svg.html");
    writeFileSync(pagina, html);
    mkdirSync(dirname(saida), { recursive: true });
    const rootNoLinux = process.platform === "linux" && process.getuid?.() === 0;
    rodarSync(CHROME, ["--headless=new", "--disable-gpu", ...(rootNoLinux ? ["--no-sandbox"] : []), "--hide-scrollbars",
      `--user-data-dir=${join(tmp, "perfil")}`,           // [porte Regie] sem isso o Windows repassa ao Chrome aberto
      "--no-first-run", "--no-default-browser-check",
      "--default-background-color=00000000", `--window-size=${W},${H}`,
      `--screenshot=${novo}`, pathToFileURL(pagina).href], { timeoutMs: 120_000 });
  } finally {
    try { rmSync(tmp, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 }); } catch { /* o Chrome ainda segura o perfil: sobra na pasta temporária */ }
  }
  if (!existsSync(novo)) { console.error(`x o Chrome saiu sem gravar o PNG — ${OUT} NAO foi tocado.`); return 1; }
  // [porte Regie] a dimensão pelo cabeçalho do PNG — sem ffprobe — e COMPARADA com o pedido: largura
  // exata, altura com 1 px de folga (o arredondamento de W*h/w).
  const cab = Buffer.alloc(64); const fd = openSync(novo, "r"); const n = readSync(fd, cab, 0, 64, 0); closeSync(fd);
  const d = medirCabecalhoImagem(cab.subarray(0, n));
  if (!d || d.w !== W || Math.abs(d.h - H) > 1) {
    rmSync(novo, { force: true });
    console.error(`x o PNG saiu ${d ? `${d.w}x${d.h}` : "com dimensao ilegivel"}, e o pedido era ${W}x${H} — ${OUT} NAO foi tocado.`);
    return 1;
  }
  renomearComRetentativa(novo, saida);
  log(`ok ${OUT}  ${d.w}x${d.h}  (de ${SVG}, viewBox ${w}x${h})`);
  return 0;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
