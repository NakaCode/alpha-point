// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/_audit-til.mjs (linhas 1-214, commit 4afda12).
// O que mudou: o estúdio só olhava elementos em "Neue Haas" e acusava Ã/Õ por REGRA (peso 600–749
// = a Bold defeituosa daquela fonte). Aqui a MEDIDA do til, da cedilha e da fonte reserva é a do
// MOTOR — src/ferramentas/provar-fonte.mjs (analisarAcento, vaoCedilha, os LIMIAR_*), importada por
// scripts/lib/motor.mjs, sem cópia: é a mesma régua que prova a fonte da marca no onboarding
// (docs/MARCA.md), então fonte aprovada lá e reprovada aqui (ou o contrário) não existe mais. Os
// caracteres auditados vêm do PT_BR de src/marca/fontes.mjs. O modo --marca é o próprio provar-fonte
// do motor. Entraram: FAMILIA-AUSENTE e GLIFO-RESERVA (a fonte não carregou, ou não tem a letra, e o
// Chrome troca a face SEM erro), e FORA-DA-MARCA (texto numa família que não é a da marca — a cena que
// não liga marca/tokens.css sai inteira na fonte padrão do Chrome e passava em todos os portões).
// A cena é varrida em 5 instantes pelo __renderAt (o estúdio olhava só o DOM do load). O Chrome vem
// de lib/chrome.mjs; o palco, da régua do render (lib/abrir-cena.mjs › palcoDaCena).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core
// (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// Auditoria da TIPOGRAFIA ACENTUADA — defeitos de glifo que o Chrome desenha SEM erro.
//
// 1 · TIL (Ã/Õ/ã/õ): no Top10, o NeueHaasDisplayBold.ttf desenhava o til como AGUDO ("NÃO" lia
//     "NÁO"). Medido em 04/jul/2026: CSS font-weight 600–749 era o Bold e tinha o defeito.
//     [porte Régie] A regra "600–749 = defeito" era da Neue Haas e não vale para outra fonte. A régua
//     é a do motor (provar-fonte.mjs › analisarAcento): o acento de Ã é recortado (Ã menos A) e
//     comparado com o de Á — IoU ≥ LIMIAR_IOU_AGUDO é "o til saiu agudo"; e o til tem de ONDULAR
//     (ondulação ≥ LIMIAR_ONDA), o agudo só sobe. Na família e no peso que o elemento de fato usa.
//
// 2 · CEDILHA (Ç/ç): a cedilha DESCOLA do C em caixa alta e o rótulo lê como "C ,A". Régua do motor
//     (vaoCedilha): maior faixa de linhas vazias entre o topo e a base, acima de LIMIAR_CEDILHA % do corpo.
//
// 3 · [porte Régie] GLIFO NA FONTE RESERVA e FAMÍLIA AUSENTE: a régua do motor (a mesma do
//     provar-fonte): pintando o caractere com "<família>, monospace" e com "<família>, serif", a
//     LARGURA tem de ser a mesma — se a família tem o glifo, as duas pilhas param nela; se não tem, cada
//     uma cai numa reserva diferente. E se o texto inteiro mede o mesmo que a reserva sozinha, a família
//     nem carregou.
//
// 4 · [porte Régie] FORA-DA-MARCA: texto visível cuja PRIMEIRA família não é a da marca (a "Marca" ou
//     a "MarcaSec" que marca/tokens.css declara). É o caso da cena que não liga
//     ../../../marca/tokens.css: var(--fonte) fica vazio, o Chrome desenha em Times, e nenhum outro
//     portão percebe — tamanho, carga e colisão medem a Times com a mesma confiança. A fonte padrão do
//     Chrome não passa em portão nenhum. Isenção por elemento: `data-qc-fonte-livre` (nele ou num
//     ancestral) — quem escreve assume; e texto sem letra nem dígito (uma aspa decorativa) não conta.
//
// A checagem é sobre o glifo RENDERIZADO, não sobre a string do HTML: `text-transform:uppercase`
// transforma "Aliança" em "ALIANÇA" na tela e o defeito aparece igual.
// Uso: node scripts/_audit-til.mjs <html|pasta> [...]      (ou a lista de arquivos pelo stdin)
//      node scripts/_audit-til.mjs --marca [--secundaria]   (a fonte da marca, peso a peso: é o
//                                                             provar-fonte do motor, com a prancha;
//                                                             a secundária, quando há, é provada
//                                                             junto — --secundaria prova só ela)
// Exit: 0 = nenhum defeito · 1 = achou defeito · 2 = NÃO MEDI (arquivo não abriu, Chrome não subiu)
import { pathToFileURL } from "node:url";
import { resolve, join, dirname } from "node:path";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { lancarChrome, caminhoDoChrome } from "./lib/chrome.mjs";
import { lerMarca, citarFamilia } from "./lib/marca-tokens.mjs";
import { importarDoMotor, RAIZ_CANAL } from "./lib/motor.mjs";
import { palcoDaCena } from "./lib/abrir-cena.mjs";

/**
 * ⚠️⚠️ CRASH DESTE GATE VIRAVA REPROVAÇÃO — e por isso o caminho errado do Chrome custou caro.
 *
 * A convenção da casa tem TRÊS estados (`scripts/lib/nao-medido.mjs`): 0 passou · 1 MEDI e reprovei ·
 * 2 NÃO MEDI. O Node, ao morrer de exceção não tratada, sai com **1** — exatamente o código de
 * "medi e reprovei". Então este gate, que na VM nem conseguia abrir o Chrome, era lido pelo
 * `qc-cena.mjs` como tendo medido e reprovado a cena.
 */
import { morrerComoNaoMedido, NAO_MEDIDO } from "./lib/nao-medido.mjs";
morrerComoNaoMedido("_audit-til");

const MARCA_SO = process.argv.includes("--marca");
// ENTRADA: aceita CAMINHOS COMO ARGUMENTO **e** lista pelo stdin.
// ⚠ CORREÇÃO 22/jul — o falso-verde que a lei 110 narra: quem chamava
//   `node scripts/_audit-til.mjs cena.html` (a forma intuitiva, e a que 6 documentos sugerem)
//   caía no readFileSync(0) sem stdin, auditava ZERO arquivos e IMPRIMIA SUCESSO.
//   Um gate que aprova sem olhar é pior que gate nenhum.
const argvFiles = process.argv.slice(2).filter(a => !a.startsWith("--"));
// ⚠ CORREÇÃO 09/ago — o MESMO falso-verde, segunda encarnação: `_audit-til.mjs out/<proj>/graphics/`
//   contava o DIRETÓRIO como um candidato só e imprimia "0 arquivo(s) defeituosos, de 1 candidatos".
//   Diretório agora vira a lista dos .html que ele contém.
const expandido = argvFiles.flatMap((a) => {
  try {
    if (!statSync(a).isDirectory()) return [a];
    return readdirSync(a).filter((f) => f.endsWith(".html")).sort().map((f) => join(a, f));
  } catch { return [a]; }   // caminho inexistente segue adiante e falha ADIANTE, com nome, não aqui
});
// [porte Régie] Terminal interativo sem pipe: ler o stdin PENDURARIA esperando digitação (no Windows
// é o caso comum de quem roda o gate sem argumento). Sem pipe, lista vazia → uso errado, exit 2.
const doStdin = () => (process.stdin.isTTY ? "" : readFileSync(0, "utf8"));
const files = MARCA_SO ? [] : expandido.length
  ? expandido
  : doStdin().split(/\r?\n/).map(s => s.trim()).filter(Boolean);   // [porte Régie] CRLF do Windows
if (!MARCA_SO && !files.length) {
  console.error("✗ nenhum arquivo para auditar. Uso: _audit-til.mjs <html|pasta...>  |  _audit-til.mjs --marca");
  process.exit(2);   // 2 = uso errado (≠ 1 = achou defeito) — não deixa passar por 'verde'
}

// [porte Régie] A MEDIDA É A DO MOTOR. Motor ausente = NÃO MEDIDO (o handler acima traduz SEM_MOTOR).
const PROVA = await importarDoMotor("src/ferramentas/provar-fonte.mjs");
const { PT_BR } = await importarDoMotor("src/marca/fontes.mjs");

// ── MODO --marca: a fonte da marca, sozinha, peso a peso — é o provar-fonte do motor ─────────────
// [porte Régie] Responde, no dia em que o canal escolhe a fonte, o que o estúdio só descobriu com
// cena no ar: "algum peso desta família desenha o til errado, ou não tem o Ç?". Uma régua só: este
// modo CHAMA o provar-fonte (que também grava a prancha para o olho), em vez de ter a sua.
// [porte Régie] A SECUNDÁRIA TAMBÉM (rodada 3 da v1): a marca que tem --fonte-sec distinta (a "MarcaSec"
// que src/marca/tokens.mjs escreve a partir de marca.json › fonte_secundaria) usa essa família na tela
// — o modo cena já a mede e a aceita como da marca. O --marca provava só a principal, a menos que
// alguém lembrasse da flag: a secundária com til trocado passava no dia da escolha e só aparecia na
// cena. Agora, havendo secundária, as DUAS são provadas; `--secundaria` segue provando só ela.
// Veredito da rodada: 1 se alguma reprovou (medi e reprovei manda), 2 se alguma não foi medida, 0 só
// com as duas provadas e boas.
if (MARCA_SO) {
  const soSecundaria = process.argv.includes("--secundaria");
  const marcaJson = join(RAIZ_CANAL, "marca", "marca.json");
  const provas = [];   // [{ papel, argv }]
  if (existsSync(marcaJson)) {
    let temSec = soSecundaria;
    try {
      const m = JSON.parse(readFileSync(marcaJson, "utf8").replace(/^﻿/, ""));
      temSec ||= !!(m?.fonte_secundaria && m.fonte_secundaria.familia !== m?.fonte?.familia);
    } catch { /* marca.json ilegível: o provar-fonte da principal diz o motivo e sai 2 */ }
    if (!soSecundaria) provas.push({ papel: "principal", argv: ["marca/marca.json"] });
    if (temSec) provas.push({ papel: "secundária", argv: ["marca/marca.json", "--secundaria"] });
  } else {
    // canal sem marca.json (usa a marca neutra do motor, ou REGIE_MARCA_TOKENS): prova as fontes que o
    // tokens.css declara, pela pasta delas, uma família de cada vez (a principal "Marca" e, se houver, a
    // secundária), e a prancha vai para out/_provas-fonte/ (não para marca/)
    const marca = lerMarca();
    const familias = [[marca.familia, "principal", "fonte-marca.png"], [marca.familiaSec, "secundária", "fonte-marca-sec.png"]]
      .filter(([f], i) => f && (i === 0 ? !soSecundaria : true));
    if (soSecundaria && !marca.familiaSec) {
      console.error(`⚠ _audit-til --marca --secundaria: NÃO MEDIDO — ${marca.arquivo || "a marca"} não tem fonte secundária (--fonte-sec é a própria --fonte).`);
      process.exit(NAO_MEDIDO);
    }
    for (const [familia, papel, png] of familias) {
      const faces = marca.faces.filter((f) => f.familia.toLowerCase() === String(familia).toLowerCase());
      const pastas = [...new Set(faces.flatMap((f) => f.arquivos || []).map((a) => dirname(a)))];
      if (pastas.length !== 1) {
        console.error(`⚠ _audit-til --marca: NÃO MEDIDO — ${marca.arquivo || "a marca"} declara ${pastas.length ? `a família ${papel} ("${familia}") em mais de uma pasta` : `nenhum arquivo de fonte para a família ${papel} ("${familia}")`}; ` +
          "prove cada uma com  node <motor>/src/ferramentas/provar-fonte.mjs <pasta-ou-arquivo>");
        process.exit(NAO_MEDIDO);
      }
      provas.push({ papel, argv: [pastas[0], `--saida=${join(RAIZ_CANAL, "out", "_provas-fonte", png)}`] });
    }
  }
  const chrome = await caminhoDoChrome();
  const codigos = [];
  for (const { papel, argv } of provas) {
    if (provas.length > 1) console.log(`\n── fonte ${papel} ──`);
    codigos.push(await PROVA.principal(argv, { raiz: RAIZ_CANAL, chrome }));
  }
  const codigo = codigos.includes(1) ? 1 : codigos.some((c) => c !== 0) ? NAO_MEDIDO : 0;
  if (provas.length > 1) {
    console.log(`\n${codigo === 0 ? "✓" : codigo === 1 ? "✗" : "⚠"} _audit-til --marca: ` +
      provas.map((p, i) => `${p.papel} ${codigos[i] === 0 ? "ok" : codigos[i] === 1 ? "REPROVADA" : "NÃO MEDIDA"}`).join(" · "));
  }
  process.exit(codigo);
}

// [porte Régie] A MARCA do canal: quem o texto DEVIA usar (FORA-DA-MARCA). A medição do glifo usa a
// família que o elemento DE FATO computa. Marca sem --fonte é configuração quebrada: NÃO MEDIDO que
// ensina, nunca "segue sem saber qual é a marca" (fail-closed, decisão I5 da integração).
const MARCA = lerMarca();
if (!MARCA.familia) {
  console.error(`⚠ _audit-til: NÃO MEDIDO — ${MARCA.aviso || "a marca não declara --fonte"}.`);
  console.error("  Conserto: o tokens.css do canal (marca/tokens.css) tem de declarar --fonte; gere-o com o motor:");
  console.error("  node <motor>/src/ferramentas/marca.mjs gerar");
  process.exit(NAO_MEDIDO);
}
const FAMILIAS_MARCA = MARCA.familiasMarca.map((f) => f.toLowerCase());

// Os caracteres auditados: as letras acentuadas do PT_BR do motor (src/marca/fontes.mjs). TIL e CEDILHA
// têm teste de forma; toda letra acentuada tem o teste de fonte reserva, porque o Chrome troca a face
// de QUALQUER glifo que falte, não só destes.
const ACENTUADOS = [...new Set([...PT_BR].filter((c) => /\p{L}/u.test(c) && c.normalize("NFD") !== c))].join("");
const REGUA = {
  corpo: 200,                                   // px do glifo no canvas de medida (o do provar-fonte)
  limIou: PROVA.LIMIAR_IOU_AGUDO, limOnda: PROVA.LIMIAR_ONDA, limCedilha: PROVA.LIMIAR_CEDILHA,
};
// As duas medidas puras do motor, escritas AUTOCONTIDAS para irem à página como texto (provar-fonte.mjs:62-64).
const MEDIDAS_DO_MOTOR = `window.__regieAnalisarAcento = ${PROVA.analisarAcento.toString()};\n` +
  `window.__regieVaoCedilha = ${PROVA.vaoCedilha.toString()};`;

/**
 * Mede, NA PÁGINA, cada combinação. Roda no navegador: recebe só dados.
 * combos: [{ chave, pilha, peso, estilo, ch? }] — sem `ch`, só a pergunta "a família carregou?".
 * Devolve { chave → { familia, familiaAusente, reserva, til, cedilha } }.
 */
async function medirNaPagina(page, combos) {
  await page.evaluate(MEDIDAS_DO_MOTOR);
  return page.evaluate(async ({ combos, regua, amostra }) => {
    const GEN = new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "emoji", "math", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded"]);
    const primeira = (pilha) => { const m = /^\s*(?:"([^"]+)"|'([^']+)'|([^,]+))/.exec(pilha || ""); return m ? (m[1] || m[2] || m[3]).trim() : ""; };
    const cit = (f) => (GEN.has(f.toLowerCase()) ? f : `"${f.replace(/"/g, '\\"')}"`);
    // o MESMO canvas do provar-fonte (480×480, corpo 200, glifo em 80,330) — é nele que os limiares valem
    const cv = document.createElement("canvas"); cv.width = 480; cv.height = 480;
    const cx = cv.getContext("2d", { willReadFrequently: true });
    const glifo = (texto, fonte) => {
      cx.setTransform(1, 0, 0, 1, 0, 0);
      cx.fillStyle = "#fff"; cx.fillRect(0, 0, 480, 480);
      cx.fillStyle = "#000"; cx.font = fonte; cx.textBaseline = "alphabetic";
      cx.fillText(texto, 80, 330);
      const px = cx.getImageData(0, 0, 480, 480).data;
      const d = new Uint8Array(480 * 480);
      for (let i = 0; i < d.length; i++) d[i] = px[i * 4] < 128 ? 1 : 0;
      return { w: 480, h: 480, d };
    };
    const largura = (texto, fonte) => { cx.font = fonte; return cx.measureText(texto).width; };
    const TIL = { "Ã": ["A", "Á"], "Õ": ["O", "Ó"], "ã": ["a", "á"], "õ": ["o", "ó"] };
    const out = {};
    for (const { chave, pilha, peso, estilo, ch } of combos) {
      const fam = primeira(pilha);
      const r = { familia: fam, familiaAusente: false, reserva: false, til: null, cedilha: null };
      const f = (resto) => `${estilo} ${peso} ${regua.corpo}px ${resto}`;
      try { await document.fonts.load(f(pilha), (ch || "") + amostra); } catch { }
      if (fam && !GEN.has(fam.toLowerCase())) {
        const c = cit(fam);
        // a régua do provar-fonte: o texto inteiro mede o mesmo que a reserva sozinha → a família não carregou
        const mm = largura(amostra, f(`${c}, monospace`)), m = largura(amostra, f("monospace"));
        const ms = largura(amostra, f(`${c}, serif`)), s = largura(amostra, f("serif"));
        if (Math.abs(mm - m) < 0.5 && Math.abs(ms - s) < 0.5) r.familiaAusente = true;
        // por caractere: com a família inteira, "fam, monospace" e "fam, serif" param no MESMO glifo
        else if (ch && Math.abs(largura(ch, f(`${c}, monospace`)) - largura(ch, f(`${c}, serif`))) > 0.01) r.reserva = true;
      }
      if (ch && !r.familiaAusente && !r.reserva) {
        const fonte = f(fam ? cit(fam) : pilha);
        if (TIL[ch]) {
          const [b, g] = TIL[ch];
          r.til = window.__regieAnalisarAcento(glifo(b, fonte), glifo(ch, fonte), glifo(g, fonte), regua.corpo, regua.limIou, regua.limOnda);
        }
        if (ch === "Ç" || ch === "ç") r.cedilha = window.__regieVaoCedilha(glifo(ch, fonte), regua.corpo);
      }
      out[chave] = r;
    }
    return out;
  }, { combos, regua: REGUA, amostra: "HAOaoÁÓáó0123" });
}

/** Veredito de uma medição de glifo. Devolve { tipo, detalhe } ou null. */
function defeito(ch, m) {
  if (!m) return null;
  if (m.familiaAusente) return { tipo: "FAMILIA-AUSENTE", detalhe: `a família "${m.familia}" não carregou — o texto sai na fonte reserva` };
  if (m.reserva) return { tipo: "GLIFO-RESERVA", detalhe: `"${m.familia}" não tem "${ch}" — o Chrome desenha essa letra com outra fonte` };
  if (m.til?.defeito === "sem-acento") return { tipo: "TIL", detalhe: `"${ch}" saiu sem acento` };
  if (m.til?.defeito === "igual-ao-agudo") return { tipo: "TIL", detalhe: `o til de "${ch}" saiu como AGUDO (IoU ${m.til.iou} ≥ ${REGUA.limIou})` };
  if (m.til?.defeito === "sem-onda") return { tipo: "TIL", detalhe: `o acento de "${ch}" não ondula (${m.til.ondulacao} < ${REGUA.limOnda}) — não parece til` };
  if (m.cedilha != null && m.cedilha > REGUA.limCedilha) return { tipo: "CEDILHA", detalhe: `cedilha de "${ch}" descolada: vão de ${m.cedilha}% do corpo (limite ${REGUA.limCedilha}%)` };
  return null;
}

const b = await lancarChrome();
let afetados = 0;
const naoMedidos = [];

for (const f of files) {
  let texto = ""; try { texto = readFileSync(resolve(f), "utf8"); } catch { /* o goto abaixo falha com o nome */ }
  const palco = await palcoDaCena(texto);
  const ctx = await b.newContext({ viewport: { width: palco.w, height: palco.h }, deviceScaleFactor: 1 });
  await ctx.route(/\.(mp4|webm|mov)(\?|$)/, r => r.abort()); // vídeo de fundo não importa pra auditoria
  const p = await ctx.newPage();
  const errosJS = [];
  p.on("pageerror", (e) => errosJS.push(String(e.message || e).slice(0, 100)));
  try {
    await p.addInitScript(() => { window.requestAnimationFrame = () => 0; try { HTMLMediaElement.prototype.play = () => Promise.resolve(); } catch (e) {} });
    await p.goto(pathToFileURL(resolve(f)).href, { waitUntil: "load", timeout: 15000 });
    await p.evaluate(() => document.fonts.ready);
    await p.evaluate(() => window.__prepararCaptura && window.__prepararCaptura()).catch(() => {});
    // [porte Régie] CINCO INSTANTES, não só o DOM do load: texto que o __renderAt cria ou troca
    // (datilografia, rótulo que entra aos 8 s) não existia no DOM que o estúdio auditava.
    const dur = await p.evaluate(() => (typeof window.__renderAt === "function" && +window.__duracao > 0) ? +window.__duracao : 0);
    const instantes = dur ? [0, 0.25, 0.5, 0.75, 1].map((k) => +(dur * k).toFixed(2)) : [null];
    const vistos = new Map();   // id+texto+fonte → item
    for (const t of instantes) {
      const itens = await p.evaluate(async ({ t, ACENTUADOS }) => {
        if (t != null) { try { await window.__renderAt(t); } catch { } }
        const re = new RegExp(`[${ACENTUADOS}]`, "u");
        const opac = (el) => { let o = 1, n = el; while (n && n.nodeType === 1) { const s = getComputedStyle(n); if (s.display === "none" || s.visibility === "hidden") return 0; o *= parseFloat(s.opacity || "1"); n = n.parentElement; } return o; };
        const out = [];
        let textos = 0;
        for (const el of document.querySelectorAll("body *")) {
          // <script>/<style> têm nós de texto que NUNCA são desenhados — o código-fonte da cena
          // casava com /Ç/ e virava hit fantasma.
          if (/^(SCRIPT|STYLE|TEMPLATE|NOSCRIPT|TITLE)$/.test(el.tagName)) continue;
          // só texto DIRETO do elemento (senão o ancestral duplica o hit do filho)
          const txt = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join("");
          if (!txt.trim()) continue;
          textos++;
          const cs = getComputedStyle(el);
          // o que o espectador VÊ: `text-transform:uppercase` faz "Aliança" render como "ALIANÇA"
          const visto = /uppercase/i.test(cs.textTransform) ? txt.toUpperCase() : /lowercase/i.test(cs.textTransform) ? txt.toLowerCase() : txt;
          const id = el.tagName.toLowerCase() + (el.id ? "#" + el.id : "") + (el.className && typeof el.className === "string" && el.className ? "." + el.className.split(/\s+/)[0] : "");
          out.push({
            id, pilha: cs.fontFamily, peso: cs.fontWeight, estilo: cs.fontStyle, visto,
            txt: txt.replace(/\s+/g, " ").trim().slice(0, 60),
            acento: re.test(visto),
            // [porte Régie] para o FORA-DA-MARCA: visível agora, com letra ou dígito, e sem isenção declarada
            visivel: el.getClientRects().length > 0 && opac(el) > 0.05,
            temLetra: /[\p{L}\p{N}]/u.test(visto),
            livre: !!el.closest("[data-qc-fonte-livre]"),
          });
        }
        return { out, textos };
      }, { t, ACENTUADOS });
      for (const it of itens.out) {
        const k = `${it.id}|${it.visto}|${it.pilha}|${it.peso}|${it.estilo}`;
        const antes = vistos.get(k);
        vistos.set(k, antes ? { ...antes, visivel: antes.visivel || it.visivel } : it);
      }
      if (t === instantes[0] && !itens.textos && errosJS.length) throw new Error(`página sem texto nenhum e com erro de JS (${errosJS[0]}) — não dá para separar cena sem texto de cena que não montou`);
    }
    // medir cada (pilha, peso, estilo[, caractere]) UMA vez
    const combos = new Map();
    const juntar = (c) => { if (!combos.has(c.chave)) combos.set(c.chave, c); };
    for (const it of vistos.values()) {
      juntar({ chave: `${it.pilha}|${it.peso}|${it.estilo}|`, pilha: it.pilha, peso: it.peso, estilo: it.estilo });
      if (it.acento) for (const ch of new Set([...it.visto].filter((c) => ACENTUADOS.includes(c)))) {
        juntar({ chave: `${it.pilha}|${it.peso}|${it.estilo}|${ch}`, pilha: it.pilha, peso: it.peso, estilo: it.estilo, ch });
      }
    }
    const med = combos.size ? await medirNaPagina(p, [...combos.values()]) : {};
    const hits = [];
    const foraDaMarca = new Map();   // família → { n, primeiro }
    for (const it of vistos.values()) {
      const base = med[`${it.pilha}|${it.peso}|${it.estilo}|`];
      const prim = base?.familia || "";
      // 4 · FORA-DA-MARCA — só para o que o espectador vê de fato
      if (it.visivel && it.temLetra && !it.livre && !FAMILIAS_MARCA.includes(prim.toLowerCase())) {
        const g = foraDaMarca.get(prim) || foraDaMarca.set(prim, { n: 0, it }).get(prim);
        g.n++;
      }
      const tipos = new Set();
      // 3 · a família do elemento nem carregou (vale para todo texto, com ou sem acento)
      // (texto sem letra nem dígito — uma aspa decorativa — não entra: a reserva desenha a mesma aspa)
      const dBase = base?.familiaAusente && it.temLetra ? defeito("", base) : null;
      if (dBase) { tipos.add(dBase.tipo); hits.push({ tipo: dBase.tipo, w: it.peso, id: it.id, txt: `${it.txt} — ${dBase.detalhe}` }); }
      if (it.acento) for (const ch of new Set([...it.visto].filter((c) => ACENTUADOS.includes(c)))) {
        const d = defeito(ch, med[`${it.pilha}|${it.peso}|${it.estilo}|${ch}`]);
        if (d && !tipos.has(d.tipo)) { tipos.add(d.tipo); hits.push({ tipo: d.tipo, w: it.peso, id: it.id, txt: `${it.txt} — ${d.detalhe}` }); }
      }
    }
    for (const [fam, { n, it }] of foraDaMarca) {
      hits.push({ tipo: "FORA-DA-MARCA", w: it.peso, id: it.id,
        txt: `${it.txt} — ${n} texto(s) em "${fam || it.pilha}", não na fonte da marca (${MARCA.familiasMarca.map(citarFamilia).join(" / ")})` });
    }
    if (hits.length) { afetados++; for (const h of hits) console.log(`${f}\t${h.tipo}\t${h.w}\t${h.id}\t${h.txt}`); }
  } catch (e) {
    console.log(`${f}\tERRO\t\t${String(e.message).replace(/\s+/g, " ").slice(0, 160)}`);
    naoMedidos.push(f);   // ver o exit 2 lá embaixo: arquivo que não abriu NÃO é arquivo aprovado
  }
  await ctx.close().catch(() => {});
}
console.error(`\n== ${afetados} arquivo(s) com glifo acentuado defeituoso ou fora da marca, de ${files.length} candidatos · marca: ${MARCA.familiasMarca.map(citarFamilia).join(" / ")} (${MARCA.origem}) · régua: provar-fonte do motor ==`);
await b.close();
// ⚠ CORREÇÃO 09/ago: arquivo que não abriu NÃO é arquivo limpo — exit 2 diz "não medi".
if (naoMedidos.length) {
  console.error(`⚠ _audit-til: NÃO MEDIDO em ${naoMedidos.length} de ${files.length} — ${naoMedidos.slice(0, 5).join(", ")}${naoMedidos.length > 5 ? "…" : ""}`);
  console.error(`  (exit 2 = não medi. NÃO é reprovação: o arquivo não existe, não carregou, ou o Chrome saturou.)`);
  process.exit(afetados ? 1 : NAO_MEDIDO);
}
// ⚠ CORREÇÃO 22/jul: o script NÃO tinha process.exit nenhum — sempre saía 0, mesmo achando defeito.
if (afetados) {
  console.error(`   TIL → troque o PESO ou a família; prove a fonte peso a peso:  node scripts/_audit-til.mjs --marca`);
  console.error(`   GLIFO-RESERVA / FAMILIA-AUSENTE → a fonte da marca não tem a letra, ou não carregou: confira as`);
  console.error(`        @font-face de marca/tokens.css e se a cena liga ../../../marca/tokens.css.`);
  console.error(`   FORA-DA-MARCA → a cena liga ../../../marca/tokens.css e escreve font-family: var(--fonte) (ou`);
  console.error(`        var(--fonte-sec))? Sem o link, o Chrome desenha na fonte padrão dele. Fonte diferente de`);
  console.error(`        propósito (um documento reproduzido): data-qc-fonte-livre no elemento — quem escreve assume.`);
  console.error(`   CEDILHA → o vão MEDIDO passou de ${REGUA.limCedilha}% do corpo. Troque a família e RE-MEÇA:`);
  console.error(`        a prescrição não é fé — se a família nova der o mesmo vão, o problema é outro.`);
  process.exit(1);
}
process.exit(0);
