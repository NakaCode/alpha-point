#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/probe-elemento.mjs (linhas 1-73, commit 4afda12).
// O que mudou: o Chrome vem de lib/chrome.mjs; a URL da cena sai de pathToFileURL (o "file://" +
// caminho quebrava com C:\, espaço e acento); os ids também podem vir por --ids= (a forma
// `IDS=a,b node …` não existe no PowerShell); o palco vem da marca (3840×2160 na neutra); o
// __renderAt que lança vira erro dito, não um retrato do instante errado.
// Na integração da v1: o palco é o da cena (a régua do render do motor), não o da marca.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core
// (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * PROBE DE ELEMENTO — onde um elemento ESTÁ, num instante, e o que está por cima dele.
 *
 * Os gates respondem "passou/reprovou" sobre a cena inteira. Quando o laudo discorda do frame — ou
 * quando dois gates discordam entre si — a pergunta que destrava é sempre a mesma e nenhum gate a
 * responde: **para onde a câmera levou este elemento em t, com que opacidade acumulada, e ele ainda
 * cabe no palco?**
 *
 * Nasceu em 11/ago/2026 ([ARTE-215]) diagnosticando o `clinopiroxenio-onde-existe`: o
 * `qc-rodape-contraste` acusava o crédito em 2,00:1 e a cura óbvia (clarear a cor) não mexeu no
 * número. O probe mostrou por quê em 20 segundos — `y=2149` com 92px de caixa num palco de 2160: o
 * crédito não estava apagado, estava **fora do quadro**, empurrado pelo push-in porque morava dentro
 * do `#cam`. Nenhum laudo dizia isso; o `qc-fora-do-quadro` ainda declarava `72/72, nada cortado`.
 *
 * Serve também para o inverso — provar que um corte acusado é GESTO. *Declaração de isenção sem
 * medida é chute assinado.*
 *
 * Uso:
 *   node scripts/probe-elemento.mjs <html> <t> --ids=credA,credB
 *   IDS=credA,credB node scripts/probe-elemento.mjs <html> <t>     (bash)
 *   node scripts/probe-elemento.mjs <html> <t>                      # usa IDS=palco por padrão
 *
 * Devolve, por elemento: texto, cor computada, opacidade CSS e ACUMULADA (o produto dos pais — é
 * ela que decide se o pixel aparece), o rect no palco, se cabe inteiro no quadro, e quem o
 * `elementFromPoint` acha no centro dele (o que está por cima). É DIAGNÓSTICO, não portão: sai 0
 * quando mediu, 2 quando não conseguiu abrir a cena (ou o __renderAt lançou).
 */
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { lancarChrome } from "./lib/chrome.mjs";
import { morrerComoNaoMedido } from "./lib/nao-medido.mjs";
import { palcoDaCena } from "./lib/abrir-cena.mjs";
import { readFileSync } from "node:fs";

morrerComoNaoMedido("probe-elemento");
const posic = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const [htmlArg, t] = posic;
if (!htmlArg || t == null || !Number.isFinite(+t)) {
  console.error("uso: node scripts/probe-elemento.mjs <html> <t> [--ids=id1,id2]");
  process.exit(2);
}
// ⚠️ caminho ABSOLUTO: o vendor (maplibre etc.) resolve por `../../../…`, e um caminho relativo
// resolvido do lugar errado abre a página vazia — e ela mente calada.
const html = resolve(htmlArg);
// [porte Régie] --ids= além da variável: `IDS=a,b node …` é sintaxe de bash, e o dono roda PowerShell.
const idsFlag = (process.argv.find((a) => a.startsWith("--ids=")) || "").slice(6);
const IDS = (idsFlag || process.env.IDS || "palco").split(",").map((s) => s.trim()).filter(Boolean);
// [porte Régie] era 3840×2160 cravado: o palco é o da CENA, pela régua do render do motor — cena
// legado de 1920 medida num quadro de 3840 dizia "cabe" sobre texto que sai da tela.
let texto = ""; try { texto = readFileSync(html, "utf8"); } catch { /* o goto abaixo falha com o nome */ }
const { w: PW, h: PH } = await palcoDaCena(texto);
const PALCO = { w: PW, h: PH };

const b = await lancarChrome({ chromiumSandbox: false });
const ctx = await b.newContext({ viewport: { width: PALCO.w, height: PALCO.h } });
const p = await ctx.newPage();
const erros = [];
p.on("pageerror", (e) => erros.push(String(e.message).slice(0, 120)));
await p.goto(pathToFileURL(html).href, { waitUntil: "networkidle" });   // [porte Régie] pathToFileURL
await p.evaluate(async (tt) => { if (window.__renderAt) await window.__renderAt(tt); }, +t);

const r = await p.evaluate(({ IDS, W, H }) => {
  const els = [];
  for (const id of IDS) {
    const el = document.getElementById(id);
    if (!el) { els.push({ id, ausente: true }); continue; }
    const cs = getComputedStyle(el);
    const bb = el.getBoundingClientRect();
    let op = 1, n = el;
    while (n && n !== document.documentElement) { op *= +getComputedStyle(n).opacity || 0; n = n.parentElement; }
    els.push({
      id, texto: (el.textContent || "").trim().slice(0, 48), cor: cs.color,
      opCSS: cs.opacity, opAcumulada: +op.toFixed(3),
      rect: { x: Math.round(bb.x), y: Math.round(bb.y), w: Math.round(bb.width), h: Math.round(bb.height) },
      cabeNoQuadro: bb.y >= 0 && bb.y + bb.height <= H && bb.x >= 0 && bb.x + bb.width <= W,
      porCima: (() => { const e = document.elementFromPoint(bb.x + bb.width / 2, bb.y + bb.height / 2); return e ? (e.id || (typeof e.className === "string" ? e.className : "") || e.tagName) : null; })(),
    });
  }
  const cam = document.getElementById("cam") || document.getElementById("palco");
  return { camera: cam ? getComputedStyle(cam).transform : null, els };
}, { IDS, W: PALCO.w, H: PALCO.h });

console.log(JSON.stringify({ t: +t, palco: PALCO, ...r, pageErrors: erros }, null, 1));
await b.close();
