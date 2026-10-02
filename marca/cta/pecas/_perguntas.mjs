// O conjunto fixo de perguntas do comentario.html (a peça do canal, marca/cta/pecas/; a regra é marca/cta.md §7):
// perguntas reais, cada uma com a quebra que se espera dela (ou o erro).
// Rode a cada mudança da quebra, do corpo ou da largura, da raiz do canal:
//   node marca/cta/pecas/_perguntas.mjs [--determinismo] [--saida=<pasta>]
// Desde 01/10/2026 o alvo do corpo é 176 px (o Lucas escolheu "176 px, um pouco menor"; marca/cta.md §3), e não mais
// os 192 da proposta: os 4 esperados com corpo 192 passaram a 176 (a padrão, "Which city…", "Have you ever…" e "Which
// capital…"). Nenhuma quebra mudou: as perguntas que saíam a 192 saem a 176 com as mesmas linhas, e as de 176 e 160
// ficaram onde estavam. Entraram dois casos: "Was 'Willow'…" crava 1 linha a 176 (uma linha só no alvo), e
// ?corpo=192 tem de ser recusado. Depois, um terceiro: "Which border would you erase from the map?", com 42 caracteres,
// crava 2 linhas a 160. É a prova de que a contagem de caracteres não decide o corpo (no conjunto, uma de 47 sai a 176):
// a 176 ela não cabe em 2 linhas com uma quebra boa (marca/cta.md §7).
// Abre a página com ?q= no Chrome desta máquina, espera window.__pronto e confere o __info() contra o esperado:
//   params (outros parâmetros da URL, como o corpo), linhas (a quebra exata), corpo, max_linhas, proibido ("a|b": a
//   linha não pode terminar em a com a seguinte abrindo em b), fim (uma linha tem de terminar nesta palavra), contem (o texto final tem de conter), erro (a página tem de
//   recusar, com esta mensagem), padrao (a página tem de cair na pergunta padrão).
// Grava perguntas.json (o resultado de cada uma, com o corpo, as linhas, a duração e a placa) FORA do git, em
// marca/cta/propostas/c-faixa-minima/final/ (ou na pasta de --saida=), e imprime uma linha por pergunta. Sai 1 se
// alguma pergunta não deu o esperado.
// --q="<pergunta>": só esta pergunta, sem conjunto e sem gravar perguntas.json; imprime o __info() inteiro (o corpo, as
//   linhas, as quebras, a duração, a placa e o aviso). É o que o redator-de-tela roda antes de entregar a pergunta.
// --determinismo: desenha a pergunta padrão e a longa em t = 3 s em 2 contextos novos e em 2 navegadores lançados de
//   novo, e confere que os quadros saem idênticos, bit a bit (o marca/cta/_capturar.mjs lança o Chrome com a mesma opção).
import { chromium } from "playwright-core";
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const AQUI = dirname(fileURLToPath(import.meta.url));
const PAGINA = join(AQUI, "comentario.html");
// a saída fica fora do git: marca/cta/propostas/ está no .gitignore
const SAIDA_ARG = process.argv.find((a) => a.startsWith("--saida="));
const SAIDA = SAIDA_ARG ? resolve(SAIDA_ARG.slice(8)) : join(AQUI, "..", "propostas", "c-faixa-minima", "final");
export const CHROME = { executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--disable-gpu-rasterization"] };

const CASOS = [
  { q: "", padrao: true, linhas: ["Where would you have put", "the capital?"], corpo: 176 },
  { q: "Juneau, Willow or Anchorage: where would you have put Alaska's capital, and why?",
    linhas: ["Juneau, Willow or Anchorage:", "where would you have put", "Alaska’s capital, and why?"], corpo: 160 },
  { q: "If you could redraw one border, which would it be?", fim: ["border,"], proibido: ["one|border,", "redraw|one"] },
  { q: "Where would you build a new capital for your country?", proibido: ["a|new", "new|capital", "your|country?"] },
  { q: "Which country has the strangest border you know?", proibido: ["strangest|border", "the|strangest", "border|you", "you|know?"], max_linhas: 2 },
  { q: "Which city should be Alaska's capital?", linhas: ["Which city should be", "Alaska’s capital?"], corpo: 176 },
  { q: "Have you ever been to Juneau?", corpo: 176, max_linhas: 2, proibido: ["to|Juneau?", "you|ever"] },
  { q: "Which capital would you pick?", corpo: 176, max_linhas: 2 },
  { q: "Would you have moved Alaska's capital away from Juneau?", proibido: ["Alaska’s|capital", "have|moved", "from|Juneau?", "away|from"] },
  { q: "Do you think Alaska will ever move its capital out of Juneau?", proibido: ["its|capital", "will|ever", "out|of", "of|Juneau?"] },
  { q: "Which one would you pick: Juneau or Willow?", fim: ["pick:"], max_linhas: 2 },
  { q: "Was 'Willow' the right call?", contem: "‘Willow’", proibido: ["the|right", "right|call?"], linhas: ["Was ‘Willow’ the right call?"], corpo: 176 },
  { q: "Have you driven the road north of Juneau?", proibido: ["the|road", "of|Juneau?"], max_linhas: 2 },
  { q: "What would a capital in Willow have changed?", proibido: ["a|capital", "in|Willow", "have|changed?"], max_linhas: 2 },
  { q: "Should a state capital be easy to reach?", proibido: ["a|state", "state|capital", "to|reach?"], max_linhas: 2 },
  { q: "Where would you move Washington, D.C.?", proibido: ["Washington,|D.C.?"] },
  { q: "Could the capital move to Prince William Sound?", proibido: ["Prince|William", "William|Sound?", "to|Prince"] },
  { q: "What did the '70s get right about Alaska?", contem: "’70s" },
  // 42 caracteres e já a 160: a contagem não decide o corpo (marca/cta.md §7)
  { q: "Which border would you erase from the map?", linhas: ["Which border would you erase", "from the map?"], corpo: 160 },
  { q: "Juneau or Willow?|Tell us why.", linhas: ["Juneau or Willow?", "Tell us why."] },
  // o que a página tem de recusar
  { q: "<b>Where</b> would you have put the capital?", erro: /caractere que a peça não desenha/ },
  { q: "<img src=x onerror=alert(1)> capital?", erro: /caractere que a peça não desenha/ },
  { q: "Where would you go? 🗺️", erro: /caractere que a peça não desenha/ },
  { q: "Где столица?", erro: /caractere que a peça não desenha/ },
  { q: "a|b|c|d", erro: /linhas forçadas/ },
  { q: "", params: { corpo: "192" }, erro: /aceita 176 ou 160/ },   // o 192 da proposta não vale mais (marca/cta.md §3)
  { q: "Antidisestablishmentarianismantidisestablishmentarianism?", erro: /mais larga que a linha/ },
  { q: "If the capital had moved to Willow in the 1980s, how different would Anchorage, Juneau and the road north look today, and who would have paid for it?", erro: /não cabe|partindo a oração/ },
  { q: "   ", padrao: true },
  { q: "|", padrao: true },
];

const UMA = process.argv.find((a) => a.startsWith("--q="));
if (process.argv.some((a) => a === "--q")) { console.error('uso: --q="<pergunta>", com "="'); process.exit(2); }
if (UMA) {
  const browser = await chromium.launch(CHROME);
  try {
    const page = await browser.newPage({ viewport: { width: 3840, height: 2160 }, deviceScaleFactor: 1 });
    const url = pathToFileURL(PAGINA); url.searchParams.set("q", UMA.slice(4));
    await page.goto(url.href, { waitUntil: "load" });
    try { await page.evaluate(() => window.__pronto); console.log(JSON.stringify(await page.evaluate(() => window.__info()), null, 1)); }
    catch (e) { console.error("a página recusou: " + String(e.message).split(String.fromCharCode(10))[0].replace(/^.*?Error: /, "")); process.exitCode = 1; }
  } finally { await browser.close(); }
  process.exit(process.exitCode || 0);
}

const resultado = [];
let falhas = 0;
const browser = await chromium.launch(CHROME);
try {
  for (const c of CASOS) {
    const page = await browser.newPage({ viewport: { width: 3840, height: 2160 }, deviceScaleFactor: 1 });
    const url = pathToFileURL(PAGINA); if (c.q) url.searchParams.set("q", c.q);
    for (const [k, v] of Object.entries(c.params || {})) url.searchParams.set(k, v);
    await page.goto(url.href, { waitUntil: "load" });
    let erro = null, info = null;
    try { await page.evaluate(() => window.__pronto); info = await page.evaluate(() => window.__info()); } catch (e) { erro = String(e.message).split("\n")[0].replace(/^.*?Error: /, ""); }
    await page.close();
    const problemas = [];
    if (c.erro) { if (!erro || !c.erro.test(erro)) problemas.push(`esperava erro ${c.erro}, veio ${erro || "desenho"}`); }
    else if (erro) problemas.push(`erro: ${erro}`);
    else {
      const L = info.linhas, pares = L.slice(0, -1).map((l, i) => `${l.split(" ").pop()}|${L[i + 1].split(" ")[0]}`);
      if (c.padrao && info.pergunta !== "Where would you have put the capital?") problemas.push("não caiu no padrão");
      if (c.linhas && JSON.stringify(L) !== JSON.stringify(c.linhas)) problemas.push(`linhas ${JSON.stringify(L)}`);
      if (c.corpo && info.corpo !== c.corpo) problemas.push(`corpo ${info.corpo}`);
      if (c.max_linhas && L.length > c.max_linhas) problemas.push(`${L.length} linhas`);
      for (const p of c.proibido || []) if (pares.includes(p)) problemas.push(`quebra proibida ${p}`);
      for (const f of c.fim || []) if (!L.slice(0, -1).some((l) => l.endsWith(f))) problemas.push(`nenhuma linha termina em "${f}"`);
      if (c.contem && !info.pergunta.includes(c.contem)) problemas.push(`não contém ${c.contem}`);
    }
    if (problemas.length) falhas++;
    resultado.push({ q: c.q, ...(c.params && { params: c.params }), ok: !problemas.length, problemas, erro, ...(info && { corpo: info.corpo, linhas: info.linhas, caracteres: info.caracteres,
      palavras: info.palavras, duracao: info.duracao, leitura_s: info.leitura_s, agulha_px: info.agulha_px, placa: info.placa, quebras: info.quebras, aviso: info.aviso }) });
    console.log(`${problemas.length ? "FALHOU" : "ok    "} ${(JSON.stringify(c.q) + (c.params ? " " + new URLSearchParams(c.params) : "")).slice(0, 70).padEnd(72)} ${info ? `${info.corpo} px · ${info.linhas.length} lin · ${info.duracao} s · ${info.linhas.join(" / ")}` : `erro: ${erro}`}${problemas.length ? "\n         " + problemas.join("; ") : ""}${info?.aviso ? "\n         aviso: " + info.aviso : ""}`);
  }

  if (process.argv.includes("--determinismo")) {
    for (const q of ["", "Juneau, Willow or Anchorage: where would you have put Alaska's capital, and why?"]) {
      const shas = [];
      for (let k = 0; k < 4; k++) {
        // os dois primeiros em contextos novos deste navegador; os dois últimos, cada um num navegador lançado de novo
        const outro = k >= 2 ? await chromium.launch(CHROME) : null;
        const ctx = await (outro || browser).newContext({ viewport: { width: 3840, height: 2160 }, deviceScaleFactor: 1 });
        const page = await ctx.newPage();
        const url = pathToFileURL(PAGINA); if (q) url.searchParams.set("q", q);
        await page.goto(url.href, { waitUntil: "load" }); await page.evaluate(() => window.__pronto);
        await page.evaluate(() => window.render(3));
        shas.push(createHash("sha1").update(await page.screenshot({ omitBackground: true })).digest("hex").slice(0, 12));
        await ctx.close(); if (outro) await outro.close();
      }
      const igual = shas.every((s) => s === shas[0]);
      if (!igual) falhas++;
      console.log(`${igual ? "ok    " : "FALHOU"} determinismo em 2 contextos novos e 2 navegadores novos, ${q ? "a longa" : "a padrão"}: ${shas.join(" ")}`);
    }
  }
} finally { await browser.close(); }

mkdirSync(SAIDA, { recursive: true });
writeFileSync(join(SAIDA, "perguntas.json"), JSON.stringify(resultado, null, 1));
console.log(`gravado ${join(SAIDA, "perguntas.json")}`);
console.log(`\n${resultado.length - falhas >= 0 ? resultado.filter((r) => r.ok).length : 0} de ${resultado.length} perguntas como o esperado${falhas ? `; ${falhas} falha(s)` : ""}`);
process.exit(falhas ? 1 : 0);
