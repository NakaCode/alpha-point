// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-rodape-contraste.mjs (linhas 1-274, commit 4afda12).
// O que mudou: a raiz do canal sai de fileURLToPath (o `new URL(..).pathname` virava %20 e /C:/
// no Windows); o projeto da cena sai de dirname(dirname(html)), não de split("/out/"); aceita
// `<proj>`, `out/<proj>` e caminho absoluto; a duração cai em window.__duracao antes do chute de 8 s;
// ganhou o terceiro estado — página que não abriu, Chrome que não subiu e "sem crédito" numa página
// com erro de JS saíam 0 e agora saem 2; o vocabulário de crédito conhece as fontes de mídia da
// Régie. Chrome e sharp vêm sob demanda.
// Na integração da v1: o palco 4K vem da régua do render do motor; o espelho.json é lido sem BOM; o conserto cita os tokens da marca da Régie (--fundo, --texto-caixa), não o --tinta do Top10.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core (^1.60.0) e sharp (^0.35.2), carregados sob demanda.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
//
// qc-rodape-contraste — mede a RAZÃO DE CONTRASTE REAL do crédito de rodapé (`#fonte`) contra o que
// está DESENHADO atrás dele, e não contra o que o CSS diz que está atrás.
//
// ══ POR QUE EXISTE ══
//
// O rodapé de atribuição é o único texto da cena que ninguém posiciona pensando no fundo: ele mora
// numa coordenada fixa (`left:240px;bottom:200px`) e o fundo é que se move por baixo. Quando a arte
// põe ali uma superfície clara — a borda laranja do Sol, um footage estourado —, o crédito continua
// exatamente onde estava, agora ilegível. Nenhum gate por-cena pega isso: `check-overlap` mede
// COLISÃO entre caixas, `qc-carga` mede QUANTIDADE de texto, e o contraste declarado no CSS está
// certo — quem muda é o pixel embaixo.
//
// MEDIDO em `dentro-do-sol` (09/ago/2026): a passada anterior achou o defeito na `s24` OLHANDO um
// frame, mediu à mão e consertou. O mesmo defeito estava na `s30` — o showpiece — e em nenhum lugar
// havia como saber quais das outras 8 cenas com rodapé também tinham, sem repetir o olho uma a uma.
//
// ══ COMO MEDE ══
//
// Abre a cena no mesmo Chrome do `shot.mjs`, roda `__renderAt(t)`, pega o boundingClientRect REAL do
// `#fonte` e fotografa só aquela caixa. Dentro do recorte: o FUNDO é a moda das luminâncias e o
// TEXTO é o miolo da letra — o percentil extremo do lado oposto ao fundo, não a borda antisserrilhada
// (que é onde a medição ingênua se engana, porque a borda mistura as duas cores e devolve sempre um
// número intermediário tranquilizador).
//
// Piso: 3:1 (WCAG AA para texto grande — o rodapé é ≥72px no palco 4K).
//
// Uso: node scripts/qc-rodape-contraste.mjs <proj> [--sel=#fonte] [--piso=3] [--json]
import { pathToFileURL, fileURLToPath } from "node:url";
import { resolve, join, basename, dirname, isAbsolute } from "node:path";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { lancarChrome } from "./lib/chrome.mjs";
import { palcoDaCena } from "./lib/abrir-cena.mjs";
import { lerJsonSemBom } from "./lib/qc-cena-gates.mjs";
import { importarDependencia, morrerComoNaoMedido, NAO_MEDIDO } from "./lib/nao-medido.mjs";

// [porte Régie] Chrome que não sobe, sharp ausente: NÃO MEDIDO (2), nunca "todos leem" nem "reprovei".
morrerComoNaoMedido("qc-rodape-contraste");
const sharp = (await importarDependencia("sharp")).default;

const argv = process.argv.slice(2);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
const livres = argv.filter((a) => !a.startsWith("--"));
const PISO = +opt("piso", "3");
const JSONOUT = argv.includes("--json");
if (!livres.length) { console.error("uso: qc-rodape-contraste.mjs <proj> | <a.html> [b.html …] [--piso=3] [--json] [--so=id1,id2]"); process.exit(2); }

// [porte Régie] fileURLToPath: o `.pathname` devolvia "/C:/Users/Jo%C3%A3o/…" no Windows.
const RAIZ = fileURLToPath(new URL("..", import.meta.url));
// Aceita o PROJETO (varre graphics/) ou HTMLs soltos — a mesma interface dos outros gates por-cena,
// para que pendurá-lo no `qc-cena.mjs` seja trocar uma linha, e não reescrever a chamada.
const porArquivo = livres.every((a) => a.endsWith(".html"));
const PROJ = porArquivo ? null : livres[0].replace(/[\\/]+$/, "");
// [porte Régie] `<proj>`, `out/<proj>` ou caminho absoluto — como o qc-janela.
const DIR_PROJ = porArquivo ? dirname(dirname(resolve(livres[0])))
  : (isAbsolute(PROJ) || existsSync(join(PROJ, "graphics"))) ? resolve(PROJ) : join(RAIZ, "out", PROJ);
const G = porArquivo ? null : join(DIR_PROJ, "graphics");
// [porte Régie] o projeto de uma cena é a pasta acima de graphics/ — não um split("/out/"), que no
// Windows (contrabarra) nunca casava e deixava o espelho sem ler.
const ESP = join(DIR_PROJ, "espelho.json");
if (G && !existsSync(G)) { console.error(`✗ sem ${G}`); process.exit(2); }

const dur = {};
try {
  const e = lerJsonSemBom(ESP);   // [porte Régie] sem o BOM do PowerShell 5.1
  for (const s of e.segmentos || e.cenas || []) dur[s.id] = s.dur;
} catch { }

const lum = (r, g, b) => {
  const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const razao = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);

/** O miolo da letra, não a borda: percentil extremo do lado oposto à moda do fundo. */
function medir(px, w, h) {
  const N = w * h;
  if (N < 200) return null;
  const ls = new Float64Array(N);
  const hist = new Map();
  for (let i = 0; i < N; i++) {
    const L = lum(px[i * 4], px[i * 4 + 1], px[i * 4 + 2]);
    ls[i] = L;
    const k = Math.round(L * 40);                       // 40 baldes: agrupa gradiente, separa texto
    hist.set(k, (hist.get(k) || 0) + 1);
  }
  let modaK = 0, modaN = -1;
  for (const [k, n] of hist) if (n > modaN) { modaN = n; modaK = k; }
  const Lfundo = modaK / 40;
  const ord = Array.from(ls).sort((a, b) => a - b);
  // texto claro sobre fundo escuro → p99; texto escuro sobre fundo claro → p1
  const claro = Lfundo < 0.5;
  const Ltexto = claro ? ord[Math.floor(N * 0.99)] : ord[Math.floor(N * 0.01)];
  const cobertura = modaN / N;
  return { Lfundo, Ltexto, razao: razao(Lfundo, Ltexto), coberturaFundo: cobertura };
}

/**
 * ⚠️ ACHAR O CRÉDITO PELO NOME DO ID É O JEITO DE O GATE MENTIR POR OMISSÃO.
 *
 * A primeira versão filtrava por `#fonte` e mediu 10 de 59 cenas — mas cada cena batiza o crédito
 * como quer: MEDIDO em `dentro-do-sol`, `#fonte`, `#fontes`, `#fonteLinha`, `#fonteL`, e a `s30`
 * (o showpiece onde o defeito foi VISTO a olho) não usava nenhum deles. Um gate que só enxerga uma
 * grafia devolve "✓ todos leem" sobre a cena defeituosa — pior que gate nenhum, porque encerra a
 * dúvida com um verde falso.
 *
 * O crédito se acha pelo que ele É: um texto de atribuição, pequeno, no rodapé. A varredura é no
 * DOM (dentro do Chrome), por conteúdo — assim vale para a grafia que ninguém previu.
 */
const SO = new Set((opt("so", "") || "").split(",").map((x) => x.trim()).filter(Boolean));
const arqs = (porArquivo ? livres.map((a) => resolve(a)) : readdirSync(G).filter((f) => f.endsWith(".html")).map((f) => join(G, f)))
  .filter((f) => !SO.size || SO.has(basename(f, ".html")));   // re-medir 1 cena não custa as 59

const b = await lancarChrome();
const linhas = [];
for (const f of arqs) {
  const id = basename(f, ".html");
  const fonte = readFileSync(f, "utf8");
  // [porte Régie] 4K pela régua do render do motor (aspas simples e __native4k contam) — lib/abrir-cena.mjs
  const PALCO = await palcoDaCena(fonte);
  const ctx = await b.newContext({ viewport: { width: PALCO.w, height: PALCO.h }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  await p.addInitScript(() => {
    window.requestAnimationFrame = () => 0;
    try { HTMLMediaElement.prototype.play = () => Promise.resolve(); } catch (e) { }
  });
  let r = null, erro = null, naoMedido = null;
  const errosJS = [];
  p.on("pageerror", (e) => errosJS.push(String(e.message || e).slice(0, 100)));
  try {
    await p.goto(pathToFileURL(f).href, { waitUntil: "load" });
    await p.evaluate(() => document.fonts.ready);
    // ⛔ TRÊS ARGUMENTOS, E `polling` — as duas metades de um defeito só (medido em 16/set/2026).
//
    // 1. A assinatura é `waitForFunction(fn, arg, options)`. Na forma de DOIS argumentos o objeto vira
    //    `arg` e as opções são SILENCIOSAMENTE ignoradas: medido, `{ timeout: 1500 }` assim virou
    //    **30 s**, o padrão. O teto declarado nesta casa nunca valeu.
    // 2. O padrão de repoll é `requestAnimationFrame` — que este arquivo MATA acima, para a cena ficar
    //    determinística. Com o rAF morto a condição é avaliada UMA vez: se der falso, a espera fica
    //    parada até o teto e avisa «timeout» sobre cena que ficou pronta segundos depois.
//
    // A frente vertical mediu o mesmo na s115 da P7: «não abria», e ficava pronta em 2,53 s. [SIS-575]
    await p.waitForFunction(() => window.__logoPronta !== false && window.__fotosProntas !== false && window.__videoPronto !== false, null, { timeout: 15000, polling: 100 }).catch(() => { });
    await p.evaluate(() => window.__prepararCaptura && window.__prepararCaptura());
    await p.waitForTimeout(400);
    // ⚠️ UM instante só não decide: o crédito entra e sai, e o fundo ANDA por baixo dele.
    // Medir a 70% pegou "invisível neste t" em cenas que têm o crédito no ar — e, pior, pode pegar
    // o único instante em que o fundo está escuro numa cena que passa o vídeo inteiro sobre claro.
    // Varre a janela e guarda o PIOR: contraste é gargalo, não média.
    // [porte Régie] sem espelho, a duração da PRÓPRIA cena antes do chute de 8 s (cena de 20 s tinha
    // o crédito varrido só até 7,4 s)
    const D = dur[id] || (await p.evaluate(() => +window.__duracao || 0)) || 8;
    const ts = [0.35, 0.55, 0.75, 0.92].map((k) => +(D * k).toFixed(2));
    let pior = null; const amostras = [];
    for (const t of ts) {
      await p.evaluate((tt) => window.__renderAt && window.__renderAt(tt), t);
      await p.waitForTimeout(160);
    const box = await p.evaluate(() => {
      const RE = /^\s*(fontes?|cr[ée]ditos?|source|imagens?|fotos?|v[ií]deos?|dados|terra)\s*[:·]/i;
      const cands = [];
      // ⚠️ `text` (SVG) ENTRA NA VARREDURA. Metade das cenas deste estúdio desenha o crédito com
      // uma função `txt()` que cria um `<text>` SVG — não um `<div>`. Enquanto o seletor listava só
      // elementos HTML, todo crédito de cena SVG era invisível para este gate, e ele os reportava
      // como "sem crédito de rodapé". Medido em 10/ago/2026 no `galaxia-arco-flecha`: a `s30`
      // (showpiece do LOFAR) escreve `Foto: A. R. Offringa · CC BY-SA 3.0` em SVG, com
      // `data-qc-papel="credito"` — e CC BY-SA licencia SOB CONDIÇÃO de creditar. Um crédito
      // ilegível ali não é questão de estética: é a condição da licença que deixa de ser cumprida.
      for (const el of document.querySelectorAll("div,span,p,figcaption,small,footer,text")) {
        // folha: quem carrega o texto. `<text>` SVG só tem tspan como filho, e continua sendo folha
        // para o que interessa aqui (o texto é dele).
        const soTspan = el.tagName.toLowerCase() === "text" &&
          [...el.children].every((c) => c.tagName.toLowerCase() === "tspan");
        if (el.children.length && !soTspan) continue;
        const t = (el.textContent || "").trim();
        if (t.length < 6 || t.length > 220) continue;
        // ⚠️ A DECLARAÇÃO DA CENA VALE MAIS QUE O VOCABULÁRIO. Achar crédito por regex de texto
        // ("Fonte:", "NASA", "CC BY") deixa passar todo crédito que começa pelo NOME DO ACERVO —
        // e aí o gate não diz "reprovado", diz "sem crédito de rodapé", que se lê como cena isenta.
        // Medido em 10/ago/2026 na s67 do `galaxia-arco-flecha`: "LOFAR · LoTSS DR2 · Figura: Hota
        // et al. 2026, MNRAS" em #9FB0C8 sobre o mosaico azul-claro — ilegível no frame, invisível
        // para este gate, e o elemento JÁ declarava `data-qc-papel="credito"`. Quem desenhou disse
        // o que aquilo é; adivinhar por dicionário em cima de uma declaração explícita é regredir.
        const declarado = el.dataset && /^cr[ée]dito|fonte$/i.test(el.dataset.qcPapel || "");
        // [porte Régie] + as fontes de mídia que a busca da Régie usa. Reuters/Getty/Shutterstock ficam
        // na lista porque ela DETECTA crédito — não é permissão de uso (Reuters é licença do Top10).
        if (!declarado && !RE.test(t) && !/\b(NASA|ESA|NOAA|Reuters|Getty|Shutterstock|CC BY|©|Pexels|Pixabay|DVIDS|NARA|Smithsonian|Europeana|Wikimedia|Commons)\b/.test(t)) continue;
        const cs = getComputedStyle(el);
        if (cs.display === "none" || cs.visibility === "hidden") continue;
        const b = el.getBoundingClientRect();
        if (b.width < 40 || b.height < 12) continue;
        if (b.y < innerHeight * 0.55) continue;              // crédito mora no rodapé
        // opacidade EFETIVA: o pai animado é quem costuma esconder o filho
        let op = 1, n = el;
        while (n && n !== document.documentElement) { op *= +getComputedStyle(n).opacity || 0; n = n.parentElement; }
        cands.push({ x: b.x, y: b.y, w: b.width, h: b.height, opacidade: op, texto: t.slice(0, 60) });
      }
      if (!cands.length) return null;
      const vis = cands.filter((c) => c.opacidade >= 0.05);
      if (!vis.length) return { invisivel: true };
      // a caixa que UNE todos os créditos visíveis — é o bloco inteiro que precisa ler
      const x0 = Math.min(...vis.map((c) => c.x)), y0 = Math.min(...vis.map((c) => c.y));
      const x1 = Math.max(...vis.map((c) => c.x + c.w)), y1 = Math.max(...vis.map((c) => c.y + c.h));
      return { x: x0, y: y0, w: x1 - x0, h: y1 - y0, opacidade: Math.max(...vis.map((c) => c.opacidade)), texto: vis[0].texto, n: vis.length };
    });
      if (!box || box.invisivel || box.w < 8 || box.h < 8) continue;   // sem crédito no ar neste t
      const W = PALCO.w, H = PALCO.h;
      const clip = {
        x: Math.max(0, Math.round(box.x)), y: Math.max(0, Math.round(box.y)),
        width: Math.min(Math.round(box.w), W - Math.max(0, Math.round(box.x))),
        height: Math.min(Math.round(box.h), H - Math.max(0, Math.round(box.y))),
      };
      const buf = await p.screenshot({ clip });
      const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
      const m = medir(data, info.width, info.height);
      if (!m) continue;
      amostras.push({ ...m, opacidade: box.opacidade, t, texto: box.texto });
    }
    // ⚠️ DESCARTAR POR OPACIDADE BAIXA ESCONDE JUSTAMENTE O DEFEITO QUE SE PROCURA.
    //
    // A versão anterior pulava tudo abaixo de 0,6 para não medir o meio de um fade — e com isso
    // apagou da lista a `s29`, cujo crédito **repousa** em `opacity:.5` (medido: 0,5 constante nos
    // quatro instantes). Ou seja: a única cena do vídeo abaixo do piso saiu do laudo como
    // "sem crédito", e o gate imprimiu "✓ todos leem".
    //
    // O que separa fade de translucidez de PROJETO não é o valor da opacidade, é a VARIAÇÃO dela.
    // Fade: muda entre instantes → o pico é o crédito no ar. Projeto: constante → o pico é o próprio
    // repouso, e é ele que o espectador vê o tempo todo. Medir no pico serve aos dois casos.
    if (amostras.length) {
      const opMax = Math.max(...amostras.map((a) => a.opacidade));
      const noAr = amostras.filter((a) => a.opacidade >= opMax * 0.8 && a.opacidade >= 0.15);
      for (const a of noAr) if (!pior || a.razao < pior.razao) pior = a;
    }
    if (pior) r = pior;
    // [porte Régie] "sem crédito" numa página com erro de JS é indistinguível de "não montou": 2.
    else if (errosJS.length) naoMedido = `nenhum crédito achado E a página tem erro de JS (${errosJS[0]})`;
    else erro = "sem crédito de rodapé";
  } catch (e) { naoMedido = e.message.replace(/\s+/g, " ").slice(0, 100); }   // [porte Régie] não abriu = não medi
  await ctx.close();
  linhas.push({ cena: id, ...(r || {}), erro: naoMedido ? `NÃO MEDIDO — ${naoMedido}` : erro, naoMedido: !!naoMedido });
}
await b.close();

const ruins = linhas.filter((l) => l.razao && l.razao < PISO);
const naoMedidas = linhas.filter((l) => l.naoMedido);   // [porte Régie] o terceiro estado
const SAIDA = ruins.length ? 1 : naoMedidas.length ? NAO_MEDIDO : 0;
if (JSONOUT) { console.log(JSON.stringify({ piso: PISO, linhas }, null, 1)); process.exit(SAIDA); }

console.log(`\n══ CONTRASTE DO CRÉDITO DE RODAPÉ · ${PROJ || "cenas soltas"} · ${linhas.length} cena(s) · piso ${PISO}:1 ══\n`);
for (const l of linhas.sort((a, b2) => (a.razao || 99) - (b2.razao || 99))) {
  if (l.erro) { console.log(`  ·  ${l.cena.padEnd(34)} — ${l.erro}`); continue; }
  const m = l.razao < PISO ? "✗" : l.razao < PISO * 1.4 ? "▲" : "✓";
  const op = l.opacidade < 0.95 ? ` op=${l.opacidade.toFixed(2)}` : "";
  console.log(`  ${m}  ${l.cena.padEnd(34)} ${l.razao.toFixed(2)}:1  @${String(l.t).padStart(5)}s${op}  “${(l.texto || "").slice(0, 38)}”`);
}
console.log("");
if (ruins.length) {
  console.log(`  ✗ ${ruins.length} cena(s) ABAIXO de ${PISO}:1 — o crédito não lê sobre o que a arte pôs atrás.\n`);
  // ⚠️ O CONSELHO TEM DE SAIR DA MEDIÇÃO, não ser fixo. São dois defeitos com o mesmo sintoma, e o
  // conserto de um NÃO conserta o outro: scrim sobre fundo já escuro não muda nada, e clarear o
  // texto sobre fundo claro piora. Instrução que não serve ao caso empurra para o conserto errado.
  for (const l of ruins) {
    const fundoClaro = l.Lfundo > 0.18;
    // ⚠️ NÃO BASTA SABER QUE O FUNDO É CLARO — é preciso saber DE QUE COR É O TEXTO. São TRÊS
    // casos, não dois, e o terceiro chegou com o `galaxia-arco-flecha` (10/ago): crédito de tinta
    // ESCURA translúcida sobre o papel CLARO de um card de documento (s63 2,87:1 · s69 2,92:1).
    // Fundo claro, sim — mas mandar scrim escuro aí é a receita do caso INVERSO: escurecer o que
    // está atrás de um texto escuro DERRUBA o contraste, e ainda planta uma mancha preta no meio
    // de um clipping de jornal. A distinção é gratuita: o `Ltexto` já era medido na linha 83 e
    // simplesmente não chegava até aqui. Quando o texto é mais escuro que o fundo, a cura é
    // ESCURECER O TEXTO (subir a tinta), nunca escurecer o fundo.
    const textoEscuro = l.Ltexto < l.Lfundo;
    if (fundoClaro && textoEscuro) {
      console.log(`  · ${l.cena} — ${l.razao.toFixed(2)}:1 · fundo L=${l.Lfundo.toFixed(3)} · texto L=${l.Ltexto.toFixed(3)} (TINTA ESCURA sobre papel claro)`);
      console.log(`      NÃO use scrim: escurecer o fundo de um texto escuro PIORA o contraste e mancha o card.`);
      // [porte Régie] --tinta era token do Top10. Na marca da Régie o texto ESCURO sobre papel claro é
      // var(--fundo) (é o que o tokens.css prescreve por cima do --grifo); --texto e --sec são as cores
      // CLARAS, e trocá-las aqui inverteria o problema.
      console.log(`      Conserto: subir a opacidade da tinta escura do crédito (ex.: color-mix(in srgb, var(--fundo) 46%, transparent) → 72%),`);
      console.log(`      mantendo a hierarquia do card (manchete 100% > corpo ~92% > crédito ~72%).`);
      console.log(`      (validado nas s63/s69 de galaxia-arco-flecha, 10/ago: 46% → 72% levou 2,87 e 2,92 a 6,27 e 6,38:1)`);
      continue;
    }
    console.log(`  · ${l.cena} — ${l.razao.toFixed(2)}:1 · fundo L=${l.Lfundo.toFixed(3)} · crédito em opacidade ${l.opacidade.toFixed(2)}`);
    if (fundoClaro) {
      console.log(`      FUNDO CLARO passou por baixo de um texto CLARO. O remédio da marca para texto sobre imagem é`);
      console.log(`      background: var(--texto-caixa) (e text-shadow: var(--texto-sombra)), que o tokens.css do canal já traz.`);
      console.log(`      Sem caixa na marca: scrim no \`::before\` do crédito —`);
      console.log(`      inset negativo, z-index:-1, radial-gradient escuro. No ::before para não deslocar o texto e para`);
      console.log(`      herdar de graça a opacidade animada do pai. Sombra NÃO resolve: marca a borda e deixa o miolo igual.`);
      console.log(`      (validado na s24 de dentro-do-sol, 09/ago: 2,85 → 10,01:1 · e nas s31/s34 de galaxia-arco-flecha,`);
      console.log(`      10/ago: 2,43 e 2,24 → 7,83:1 nas duas)`);
    } else {
      console.log(`      O fundo já é escuro — quem está apagado é o TEXTO. Scrim aqui não muda nada. Conserto:`);
      console.log(`      subir o patamar de opacidade (mantendo o fade-in) e/ou clarear a cor para a da paleta.`);
      console.log(`      (validado 09/ago: s29 op .50→.90 = 2,64 → 5,60:1 · s97 op .55→.90 + #5E7890→#9FB8D0 = 2,34 → 8,53:1)`);
    }
  }
  console.log("");
  process.exit(1);
}
if (naoMedidas.length) {
  console.log(`  ⚠ ${naoMedidas.length} cena(s) NÃO MEDIDA(S) — não abriram ou não deu para distinguir de cena quebrada. Não medir não é ler.\n`);
  process.exit(NAO_MEDIDO);
}
// [porte Régie] O verde diz o que mediu: "todos leem" sobre ZERO crédito medido era verdade vazia.
const medidos = linhas.filter((l) => l.razao).length;
console.log(medidos
  ? `  ✓ todos os ${medidos} crédito(s) medido(s) leem sobre o fundo real.\n`
  : `  ✓ nenhuma das ${linhas.length} cena(s) tem crédito no rodapé (nos 45% de baixo do quadro) — não há contraste de rodapé a medir.\n`);
