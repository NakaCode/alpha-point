// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-contrato.mjs (linhas 1-224, commit 4afda12).
// O que mudou: o Chrome do passo de runtime abre por lancarChrome() de scripts/lib/chrome.mjs (CHROME_PATH ou a descoberta do
// motor, que conhece o Windows) — o estúdio cravava o caminho do Linux/Mac; TODA construção proibida (os quatro da origem —
// Date.now(), new Date, Math.random(), @keyframes — e o que o canal acrescenta) vem da lista ÚNICA do motor (src/cena/proibidos.mjs,
// decisão I1), com o nível que ela decide: "erro" reprova, "tolerada" avisa (setTimeout, rAF, .play()); o regex próprio e mais
// estreito da origem saiu (deixava passar @-webkit-keyframes e `new Date;`, que o render recusa). Sem motor, essa parte é NÃO
// MEDIDA (exit 2). Pasta vira a lista de .html (expandirAlvos); o nome do arquivo sai por basename (barra do Windows).
// O passo de runtime e o exit 2 de NÃO MEDIDO ficaram como estavam.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core (opcional: sem ele o passo de runtime sai NÃO MEDIDO, exit 2; --sem-runtime dispensa).
// ─────────────────────────────────────────────────────────────────────────────────────────────
// QC-CONTRATO — gate DETERMINÍSTICO de cenas HTML (revive archive/src/contract.mjs). Sem IA, sem render.
// Checa o contrato de render 4K antes de gastar frame. Comentários (HTML e /* */) são removidos antes das
// checagens — "usar" = fora de comentário.
// ERROS (exit 1): sem window.__renderAt= · sem window.__duracao= · usa Date.now(/new Date(/Math.random( · @keyframes
//                 [porte Régie: estas quatro e as do canal pela lista do motor, src/cena/proibidos.mjs]
//                 · a cena MORRE antes de registrar o contrato (passo de runtime, abaixo).
// AVISOS (exit 0): maplibre sem __prepararCaptura · <video> sem currentTime no JS (congela no render) ·
//                  sombra SOBRE a mídia real — no próprio <video>/.footage, ou `inset` na moldura que o
//                  embrulha (lei footage puro; sombra externa na moldura é o card lift dos dourados e PASSA).
// Uso: node scripts/qc-contrato.mjs <arquivo.html | pasta> [<arquivo.html> …] [--sem-runtime]
//
// ⚠️⚠️ DUAS CORREÇÕES DE 08/ago/2026, e as duas nasceram do MESMO defeito não visto (s15 do
// `cerebro-quando-sonha`, cena de 31 KB entregue e dada por pronta):
//
//  1. **GREP NÃO É PROVA DE RUNTIME.** A linha `E(has(/window\.__renderAt\s*=/), …)` responde
//     "o texto CONTÉM a atribuição", e imprimia `✓ expõe window.__renderAt(t)` para uma cena que
//     NUNCA a executava: um `var` de array declarado DEPOIS da IIFE que dava `.push` nele — com
//     `var` o hoisting eleva a declaração e não a atribuição, então o array valia `undefined`, a
//     exceção abortava o script inteiro e as linhas de baixo (inclusive o `window.__renderAt=`)
//     jamais rodavam. O frame saía com o céu vazio e o palco pela metade. Toda a checagem textual
//     passava — as strings estavam lá, no arquivo, sem nunca chegarem à página.
//     Agora o gate ABRE a cena e pergunta ao objeto `window`, que é onde a afirmação vive.
//     A régua: contrato é fato de EXECUÇÃO; verificar por texto é verificar a intenção do autor.
//
//  2. **ACEITAVA `*.html` E MEDIA SÓ O PRIMEIRO.** Era `process.argv[2]`. Passar o glob das 60
//     cenas rodava UMA e terminava imprimindo `✓ contrato OK` — que se lê, e foi lido, como
//     "as 60 passaram". Ferramenta que aceita a lista inteira em silêncio e responde por um item
//     é pior que a que recusa a lista: ela devolve uma aprovação que ninguém pediu.
import { readFileSync, existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve, basename } from "node:path";
import { importarDoMotor } from "./lib/motor.mjs";
import { lancarChrome } from "./lib/chrome.mjs";
import { expandirAlvos } from "./lib/expandir-alvos.mjs";

/**
 * [porte Régie] O QUE JÁ EXISTE, IMPORTADO — nunca copiado.
 *   · `scripts/lib/chrome.mjs` (lancarChrome) é o "um lugar só" onde todo portão do canal abre o Chrome
 *     INSTALADO pelo playwright-core: CHROME_PATH, senão a descoberta do motor (Windows: Program Files,
 *     LOCALAPPDATA, Edge de reserva), com as flags da casa. O estúdio cravava o caminho do Linux/Mac, e
 *     no Windows este gate cairia sempre em "Chrome não subiu" (NÃO MEDIDO).
 *   · `src/cena/proibidos.mjs` (motor) é a lista ÚNICA de construções que tiram a cena do tempo `t`.
 * Sem motor configurado o gate não morre: o que não depende do motor (o contrato em texto e em runtime, o
 * comentário aberto no <style>, os avisos) segue medido, e as construções proibidas são declaradas NÃO
 * MEDIDAS — exit 2, nunca "✓ contrato OK" (o qc-cena gravaria o contrato como medido).
 */
let MOTOR_PROIBIDOS = null, SEM_MOTOR = null;
try { MOTOR_PROIBIDOS = await importarDoMotor("src/cena/proibidos.mjs"); } catch (e) { SEM_MOTOR = e.message.split("\n")[0]; }

const args = process.argv.slice(2);
const SEM_RUNTIME = args.includes("--sem-runtime");
const alvos = args.filter((a) => !a.startsWith("--"));
if (!alvos.length) { console.error("uso: node scripts/qc-contrato.mjs <arquivo.html | pasta> [<arquivo.html> …] [--sem-runtime]"); process.exit(2); }
/* [porte Régie] PASTA VIRA A LISTA DE .html, e o alvo inexistente é NÃO MEDI (2) com a dica. Passar a pasta das cenas
 * morria com EISDIR e saía 1 ("reprovei"); e no PowerShell/cmd o `*.html` NÃO se expande — o gate recebe o texto
 * literal "out\v\graphics\*.html". Erro de chamada nunca pode sair como reprovação. */
for (const a of alvos) if (!existsSync(a)) {
  console.error(`✗ não encontrado: ${a} — NÃO MEDIDO.`);
  if (/[*?]/.test(a)) console.error("  O terminal do Windows não expande *.html: passe a PASTA das cenas (ex.: out\\<proj>\\graphics).");
  process.exit(2);
}
const files = expandirAlvos(alvos, "qc-contrato");

/**
 * O CONTRATO EXISTE NA PÁGINA? — a pergunta que o grep não faz.
 *
 * ⚠️ O CHROME QUE NÃO SOBE NÃO É CENA QUEBRADA (mesma proteção do check-overlap.mjs). Na VM sem GPU
 * o lançamento falha por motivo ambiental; devolver "reprovado" aí carimba arte correta e ensina a
 * ignorar o gate. Falha de INFRAESTRUTURA vira AVISO ("não medido"); só a página que carrega e não
 * tem o contrato é ERRO.
 */
async function medirRuntime(lista) {
  const out = new Map();
  // [porte Régie] playwright-core ausente, Chrome não achado ou que não sobe: tudo é causa da MÁQUINA, e o
  // motivo (que já traz o conserto: npm.cmd install, CHROME_PATH) vai inteiro para o aviso de NÃO MEDIDO.
  let b;
  try { b = await lancarChrome({ args: ["--no-sandbox"] }); }
  catch (e) {
    const motivo = e?.code === "SEM_DEPENDENCIA" ? "playwright-core ausente — rode npm.cmd install na pasta do canal"
      : e?.code === "SEM_CHROME" ? `sem Chrome: ${String(e.message).split("\n")[0]}`
      : `Chrome não subiu (${String(e?.message || e).split("\n")[0]})`;
    for (const f of lista) out.set(f, { medido: false, motivo });
    return out;
  }
  for (const f of lista) {
    const p = await b.newPage({ viewport: { width: 960, height: 540 } });
    const erros = [];
    p.on("pageerror", (e) => erros.push(String(e.message).split("\n")[0]));
    try {
      // `domcontentloaded` de propósito: cena com footage 4K de centenas de MB não fecha o `load`
      // em tempo hábil, e o contrato é registrado pelo script inline, que já rodou aqui.
      await p.goto(pathToFileURL(resolve(f)).href, { waitUntil: "domcontentloaded", timeout: 30000 });
      let i = null;
      // Duas medições: mídia lenta pode adiar o registro do contrato, e reprovar por lentidão
      // seria inventar defeito. Só a segunda leitura conta como veredito.
      for (const espera of [500, 1500]) {
        await p.waitForTimeout(espera);
        i = await p.evaluate(() => ({ ra: typeof window.__renderAt, d: typeof window.__duracao }));
        if (i.ra === "function" && i.d === "number") break;
      }
      out.set(f, { medido: true, ...i, erros });
    } catch (e) {
      out.set(f, { medido: false, motivo: `não carregou (${String(e.message).split("\n")[0]})` });
    }
    await p.close();
  }
  await b.close();
  return out;
}

const RT = SEM_RUNTIME ? new Map() : await medirRuntime(files);

let reprovados = 0;
let naoMedidos = 0;   // runtime pedido e NÃO obtido → exit 2 (ver o bloco de saída, no fim)
let semListaDoMotor = 0;   // [porte Régie] construções proibidas não medidas (sem motor) → exit 2, mesmo com --sem-runtime
for (const file of files) {
const raw = readFileSync(file, "utf8");
// remove comentários (HTML <!-- -->  e  CSS/JS /* */) → o que sobra é código "em uso"
const code = raw.replace(/<!--[\s\S]*?-->/g, " ").replace(/\/\*[\s\S]*?\*\//g, " ");
const has = (re) => re.test(code);

const erros = [], avisos = [], oks = [];
const E = (ok, msg) => (ok ? oks : erros).push(msg);
const W = (cond, msg) => { if (cond) avisos.push(msg); };

// --- contrato de render (ERRO) ---
E(has(/window\.__renderAt\s*=/), "expõe window.__renderAt(t)");
E(has(/window\.__duracao\s*=/), "expõe window.__duracao");

// [porte Régie] --- as construções PROIBIDAS, pela lista ÚNICA do motor (src/cena/proibidos.mjs, decisão I1) ---
// Inclusive as quatro da origem (Date.now(), new Date, Math.random(), @keyframes). O porte anterior as checava
// com o regex do estúdio e DESCARTAVA o que o motor achava com o mesmo nome — e o regex daqui era mais
// estreito: `@-webkit-keyframes`, `new Date;` (sem parênteses) e `Math . random()` saíam "✓ contrato OK"
// enquanto o render (que usa a lista do motor) recusava a cena. Duas listas divergem; o mesmo defeito passa pela
// que tem o furo. Agora este portão não mantém lista nem veredito próprios:
//   nivel "erro"     → ERRO (as quatro, transição CSS, Date() sem new, el.animate(), SMIL, autoplay…);
//   nivel "tolerada" → AVISO (setTimeout/rAF/performance.now/.play(): teto de prontidão ou ramo
//                      window.__PREVIEW; o render os congela). A régua M11 tem um setTimeout assim.
{
  if (!MOTOR_PROIBIDOS) {
    W(true, `construções proibidas (Date.now, new Date, Math.random, @keyframes, transição CSS, SMIL, autoplay…) NÃO MEDIDAS — ` +
      `a lista mora no motor, e o motor não foi achado: ${SEM_MOTOR}`);
    semListaDoMotor++;
  } else {
    const porRegra = new Map();
    for (const a of MOTOR_PROIBIDOS.construcoesProibidas(raw, { ignorarComentarios: true, incluirToleradas: true })) {
      const regra = a.regra ?? a.nome;
      if (!porRegra.has(regra)) porRegra.set(regra, { nivel: a.nivel ?? "erro", conserto: a.conserto, linhas: [] });
      porRegra.get(regra).linhas.push(a.linha);
    }
    for (const [regra, { nivel, conserto, linhas }] of porRegra) {
      const onde = `linha ${linhas.slice(0, 4).join(", ")}${conserto ? ` — ${conserto}` : ""}`;
      if (nivel === "tolerada") W(true, `${regra} na ${onde}`);
      else E(false, `sem ${regra} (determinismo · ${onde})`);
    }
    if (![...porRegra.values()].some((x) => x.nivel !== "tolerada"))
      oks.push("sem Date.now/new Date/Math.random/@keyframes, transição CSS, SMIL, el.animate() nem autoplay (lista do motor)");
  }
}

// --- comentário /* não fechado dentro do <style> = TODO o CSS da cena morre (bug s36/s60: fundo branco, layout no fluxo) ---
{
  let comentarioAberto = false;
  for (const blk of raw.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || []) {
    let i = 0, incom = false;
    while (i < blk.length - 1) {
      if (!incom && blk[i] === "/" && blk[i + 1] === "*") { incom = true; i += 2; continue; }
      if (incom && blk[i] === "*" && blk[i + 1] === "/") { incom = false; i += 2; continue; }
      i++;
    }
    if (incom) comentarioAberto = true;
  }
  E(!comentarioAberto, "comentário /* fechado com */ no <style> (um /* sem */ engole e MATA todo o CSS da cena — bug s36/s60)");
}

// --- avisos ---
W(has(/maplibre/i) && !has(/window\.__prepararCaptura\s*=/),
  "usa maplibre mas NÃO expõe window.__prepararCaptura() — o auto-loop tem que PAUSAR e esperar os tiles (map.once('idle')) senão o mapa sai borrado no render");

const temVideo = has(/<video[\s>]/i);
W(temVideo && !has(/currentTime/),
  "tem <video> mas NENHUM currentTime no JS — vídeo de fundo CONGELA no render 4K (o __renderAt tem que seekar currentTime=f(t), não play()). Ver memória video-bg-render-seek-mecanismo");

/**
 * SOMBRA SOBRE MÍDIA REAL (ARTE-26 / ARTE-72) — só acusa a sombra que cai NO FOOTAGE.
 *
 * ⚠️ A versão anterior era `temFootage && has(/box-shadow|drop-shadow/)`: qualquer sombra em
 * QUALQUER elemento de uma cena que tivesse um <video> em algum lugar. Medido no `dentro-do-sol`
 * em 09/ago/2026: acusou **10 de 10** cenas e nenhuma tinha o defeito — as sombras estavam em
 * pílula de número (#pill276), divisor de split (#costura, #div1, #divisa), grifo (#risco), glow
 * de anel desenhado (#ringGlow) e na MOLDURA do inset. Gate que erra 100% das vezes ensina a
 * ignorar gate, e o que ele deveria pegar passa junto com o ruído.
 *
 * A régua, lida nos dourados (`M07/esquentou-brilhou.html`, `M07/caixa-orbita-reveal.html`): a
 * moldura do inset de prova real LEVA `border` + `box-shadow: 0 18px 60px rgba(0,0,0,.55)` — o
 * card lift é padrão da casa, não defeito. O que a lei proíbe é escurecer os PIXELS da mídia:
 * sombra no próprio <video>/.footage, ou sombra `inset` na moldura (que pinta por dentro, sobre
 * a imagem). Fora disso, sombra é acabamento de desenho e a lei nem fala dela.
 */
{
  const temFootage = temVideo || /class=["'][^"']*\bfootage\b/i.test(code);
  const idsVideo = [...code.matchAll(/<video[^>]*\bid=["']([^"']+)["']/gi)].map((m) => m[1]);
  // wrapper = elemento cuja abertura é imediatamente seguida por um <video> (o #inset dos dourados)
  const idsWrapper = [...code.matchAll(/<(?:div|figure|span)[^>]*\bid=["']([^"']+)["'][^>]*>\s*<video/gi)].map((m) => m[1]);
  const alvoMidia = (sel) =>
    /(^|[\s,>+~])video(\b|[.:#\[])/i.test(sel) || /\.footage\b/i.test(sel) ||
    idsVideo.some((id) => sel.includes(`#${id}`));
  const culpados = [];
  for (const blk of code.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || []) {
    for (const m of blk.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const sel = m[1].trim().split("\n").pop().trim(), corpo = m[2];
      if (!/box-shadow|drop-shadow/i.test(corpo)) continue;
      const sombras = (corpo.match(/(?:box-shadow|filter)\s*:[^;]+/gi) || []).join(" ");
      if (!/box-shadow|drop-shadow/i.test(sombras)) continue;
      // (a) sombra no próprio vídeo/.footage — qualquer uma, inset ou não
      if (alvoMidia(sel)) { culpados.push(`${sel} (sombra na própria mídia)`); continue; }
      // (b) sombra INSET na moldura que embrulha o vídeo — pinta por dentro, sobre a imagem
      if (/\binset\b/i.test(sombras) && idsWrapper.some((id) => sel.includes(`#${id}`)))
        culpados.push(`${sel} (box-shadow inset na moldura do footage)`);
    }
  }
  // (c) sombra inline no próprio <video>
  if (/<video[^>]*style=["'][^"']*(?:box-shadow|drop-shadow)/i.test(code)) culpados.push("<video style= inline>");
  W(temFootage && culpados.length,
    `sombra SOBRE a mídia real: ${culpados.join(" · ")} — footage é PURO, ZERO sombra nas bordas (ARTE-26/ARTE-72). ` +
    "Conserto: tirar a sombra da mídia; se era para descolar do fundo, use border + box-shadow EXTERNO na moldura (o card lift dos dourados M07), nunca inset.");
}

// --- o contrato EM RUNTIME (o fato, não a string) ---
{
  const r = RT.get(file);
  if (SEM_RUNTIME) { /* desligado a pedido */ }
  else if (!r || !r.medido) {
    W(true, `contrato em runtime NÃO MEDIDO — ${r?.motivo || "sem resultado"} (isto é ambiente, não defeito da cena)`);
    naoMedidos++;
  }
  else {
    const vivo = r.ra === "function" && r.d === "number";
    E(vivo, `o contrato EXISTE na página (window.__renderAt=${r.ra} · window.__duracao=${r.d})`);
    // O erro de página é a CAUSA quando a cena morre, e ruído quando ela vive: reportado como
    // aviso no caso são, porque cena que roda com exceção solta ainda é cena para consertar.
    if (r.erros?.length) (vivo ? avisos : erros).push(`erro de JS na página: ${r.erros[0]}`);
  }
}

// --- saída ---
console.log(`QC-CONTRATO · ${basename(file)}`);   // [porte Régie] split("/") não corta o caminho do Windows
for (const m of oks)    console.log(`  ✓ ${m}`);
for (const m of avisos) console.log(`  ▲ ${m}`);
for (const m of erros)  console.log(`  ✗ ${m}`);
// ⚠️ o veredito que se imprime tem de ser o mesmo que sai pela porta: dizer "✓ contrato OK" quando
// o passo de runtime não rodou é o `grep` de antes do [ARTE-158] se passando por medição.
console.log(erros.length
  ? `\n✗ REPROVADO — ${erros.length} erro(s) de contrato${avisos.length ? ` · ${avisos.length} aviso(s)` : ""}`
  : semListaDoMotor   // [porte Régie]
  ? `\n⚠ NÃO MEDIDO — sem o motor, as construções proibidas não foram checadas (exit 2, não é aprovação)`
  : naoMedidos
  ? `\n⚠ NÃO MEDIDO — a parte estática passou, mas o contrato EM RUNTIME não foi medido (exit 2, não é aprovação)`
  : `\n✓ contrato OK${avisos.length ? ` — ${avisos.length} aviso(s) (não bloqueiam)` : ""}`);
if (erros.length) reprovados++;
}

if (files.length > 1) console.log(`\n══ ${files.length - reprovados}/${files.length} passaram · ${reprovados} REPROVADA(S) ══`);

/**
 * ⚠️ NÃO MEDI ≠ APROVEI — e este gate saía **0** quando o Chrome não subia (15/ago/2026).
 *
 * O passo de runtime é a razão de este gate existir na forma atual: desde 08/ago ele abre a cena no
 * Chrome porque o `grep` imprimia `✓ expõe window.__renderAt(t)` para cena que morria antes de
 * chegar lá ([ARTE-158]). Quando o navegador não sobe, o gate voltava a ser o `grep` de antes — e
 * mesmo assim carimbava `✓ contrato OK` com exit 0.
 *
 * O estrago não é a mensagem: é que o `qc-cena.mjs` lê `code === 0` como *"medi e passou"* e grava
 * `contrato` como MEDIDO no `_portao.json`. Toda a maquinaria de "indefinido não reprova mas
 * tampouco libera" — que existe, funciona, e salvou os outros 6 gates no mesmo teste — nunca era
 * acionada, porque o gate mentia na porta de saída. Medido com `CHROME_PATH=/nao/existe/chrome`:
 * `carga`, `colisão`, `fora-do-quadro`, `tamanho`, `til-Bold` e `mapa-vivo` foram para
 * `indefinidos`; `contrato` foi para o carimbo como aprovado.
 *
 * Terceiro estado da casa (`scripts/lib/nao-medido.mjs`): 0 passou · 1 medi e reprovei · 2 NÃO MEDI.
 * `--sem-runtime` continua saindo 0: aí a ausência da medição é PEDIDA, não sofrida.
 */
process.exit(reprovados ? 1 : naoMedidos || semListaDoMotor ? 2 : 0);   // [porte Régie] sem motor também é NÃO MEDI
