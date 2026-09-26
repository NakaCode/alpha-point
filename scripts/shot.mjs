// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/shot.mjs (linhas 1-257, commit 4afda12).
// O que mudou: o Chrome vem de lib/chrome.mjs (o instalado, achado pelo motor — Chrome ou Edge no
// Windows — com as flags da casa); a pasta do PNG é criada se faltar (C:\tmp não existe num Windows
// novo); face da marca que não carregou (window.__fontesFaltando, do RIG) entra na lista de mídia
// faltando; o conserto sugerido deixou o --restaurar do bucket; Chrome que não sobe sai 2 (não medi).
// Na integração da v1: o palco 4K vem da régua do render do motor (aspas simples e __native4k contam); sem out.png, o quadro vai para out/<proj>/_shots/.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// Screenshot de validação de 1 frame de uma cena HTML a um tempo t (custo zero, p/ conferir antes do 4K).
// Uso: node scripts/shot.mjs <html> <t> [out.png] [--scale N]
//      [porte Régie] sem out.png, o quadro vai para out/<proj>/_shots/<cena>@<t>s.png (a pasta do
//      projeto; cena solta: _shots/ ao lado dela). Nunca /tmp: no Windows isso vira C:\tmp, fora do canal.
// Lote: node scripts/shot.mjs <html> --batch=<manifest.json> [--scale N]
// Manifesto: {"version":1,"frames":[{"tempo":0,"saida":"out/<proj>/_shots/frame.png"}, ...]}
import { pathToFileURL } from "node:url";
import { basename, dirname, join, resolve } from "node:path";
import { mkdirSync, readFileSync } from "node:fs";

// [porte Régie] O Chrome instalado, pelo lançador único do canal (CHROME_PATH ainda vence).
import { lancarChrome } from "./lib/chrome.mjs";
import { palcoDaCena } from "./lib/abrir-cena.mjs";
import { projetoDaCena } from "./lib/qc-cena-gates.mjs";
import { NAO_MEDIDO } from "./lib/nao-medido.mjs";
const [HTML, T, OUT_ARG] = process.argv.slice(2);
// [porte Régie] out.png é OPCIONAL: sem ele, a 3ª posição pode ser uma flag conhecida (`--scale 2`)
const FLAG_CONHECIDA = /^--(scale|qc-background)(=|$)/;
const OUT = typeof OUT_ARG === "string" && FLAG_CONHECIDA.test(OUT_ARG) ? undefined : OUT_ARG;
/** Onde o quadro vai quando ninguém diz: out/<proj>/_shots/, dentro do canal. */
function saidaPadrao(html, tempo) {
  const abs = resolve(html);
  const base = projetoDaCena(abs) ?? dirname(abs);
  const nome = basename(abs).replace(/\.html?$/i, "");
  return join(base, "_shots", `${nome}@${String(tempo).replace(/[^0-9.]/g, "")}s.png`);
}
const emLote = typeof T === "string" && T.startsWith("--batch=");
let capturas;

if (emLote) {
  try {
    if (!HTML || HTML.startsWith("--")) throw new Error("HTML posicional ausente");
    const manifesto = JSON.parse(readFileSync(resolve(T.slice("--batch=".length)), "utf8"));
    if (manifesto?.version !== 1 || !Array.isArray(manifesto.frames) || !manifesto.frames.length) {
      throw new Error("manifesto exige version:1 e frames não vazios");
    }
    const destinos = new Set();
    capturas = manifesto.frames.map((frame) => {
      if (!frame || typeof frame.tempo !== "number" || !Number.isFinite(frame.tempo) || frame.tempo < 0
        || typeof frame.saida !== "string" || !frame.saida.trim()) throw new Error("frame exige tempo finito e saída PNG");
      const destino = resolve(frame.saida);
      if (destinos.has(destino)) throw new Error("saída duplicada no lote");
      destinos.add(destino);
      return { tempo: frame.tempo, saida: frame.saida };
    });
  } catch (error) {
    console.error(`✗ lote inválido: ${error.message}`);
    process.exit(2);
  }
}

// ⚠️ A INTERFACE É POSICIONAL, e quem chega escreve `--t=8.5 --out=x.png` por hábito (é a forma do
// qc-carga e do check-overlap). Sem este guard o script ACEITAVA as flags como posicionais: `+T`
// virava NaN — __renderAt(NaN) devolve um frame que não é o instante pedido — e `path:"--out=x.png"`
// fazia o Playwright criar um DIRETÓRIO chamado `--out=` no repo. E o stdout imprimia `ok`.
// Medido em 10/ago/2026 (QC do ceuta): três shots "ok", zero arquivos no destino, um diretório-lixo
// versionável criado na raiz. Sucesso falso é pior que erro — o mesmo padrão que o check-overlap já
// barra com "argumento 'passo' não é número".
for (const a of emLote ? [] : [HTML, T, OUT]) {
  if (typeof a === "string" && /^--/.test(a)) {
    console.error(`✗ argumento posicional recebeu uma flag: "${a}"`);
    console.error("  Uso: node scripts/shot.mjs <html> <t> [out.png] [--scale=N]");
    console.error("  (t e out.png são POSICIONAIS — não existem --t= nem --out= aqui.)");
    process.exit(2);
  }
}
if (!emLote && (!HTML || !Number.isFinite(+T))) {
  console.error(`✗ uso inválido — t precisa ser número (recebi: ${JSON.stringify(T)})`);
  console.error("  Uso: node scripts/shot.mjs <html> <t> [out.png] [--scale=N]");
  process.exit(2);
}
if (!emLote) capturas = [{ tempo: +T, saida: OUT ?? saidaPadrao(HTML, +T) }];
// ⚠️ ACEITA AS DUAS FORMAS, e a razão é um morto-silencioso medido em 12/ago/2026: a linha de uso no
// topo deste arquivo sempre documentou `--scale N` (sem `=`), e o parse só entendia `--scale=N`.
// Quem seguia a própria documentação recebia **escala 1 em silêncio** — frame no tamanho errado, e o
// stdout dizendo `ok`. É o mesmo defeito que o guard logo acima barra para os posicionais, só que na
// flag, e mais discreto: não cria diretório-lixo, não erra, só devolve outra coisa.
const iScale = process.argv.indexOf("--scale");
const SCALE = +(iScale > -1 ? process.argv[iScale + 1]
  : (process.argv.find(a => a.startsWith("--scale=")) || "").split("=")[1]) || 1;
const QC_BACKGROUND = (process.argv.find((a) => a.startsWith("--qc-background=")) || "").split("=").slice(1).join("=");
if (QC_BACKGROUND && !/^#[0-9A-F]{6}$/i.test(QC_BACKGROUND)) {
  console.error(`✗ --qc-background exige #RRGGBB (recebi ${JSON.stringify(QC_BACKGROUND)})`);
  process.exit(2);
}

// cena 4K-nativa (REND-13): data-render="4k-native" no <html> → viewport 3840×2160 DPR1 (como o capturar.mjs).
// Cena legado (sem a marca) → 1920×1080, idêntico ao de sempre.
let FONTE = ""; try { FONTE = readFileSync(resolve(HTML), "utf8"); } catch (e) {}
// [porte Régie] 4K pela régua do render do motor (aspas simples e __native4k contam). Com o regex de
// aspas duplas, a cena `data-render='4k-native'` saía 1920×1080 — o canto superior esquerdo do quadro 4K,
// justo na "validação do palco" que o editor-de-arte faz com este shot.
let VW = 1920, VH = 1080;
try { ({ w: VW, h: VH } = await palcoDaCena(FONTE)); }
catch (e) {
  console.error(`⚠ shot: NÃO MEDIDO — não consegui ler o palco pela régua do motor: ${String(e.message || e).split("\n")[0]}`);
  process.exit(NAO_MEDIDO);
}
// Detecta MAPA pelo FONTE (a cena declara `const map = ...`, que não vira window.map — checagem por
// runtime dava falso negativo). Precisa ser AQUI: decide se o rAF pode ser morto, lá embaixo.
const temMapa = /maplibregl|mapboxgl|maptiler/i.test(FONTE);

// Só o processo do Chrome é compartilhado. Contexto e página novos por instante preservam o
// isolamento do caminho posicional: DOM, storage, hooks e seeks nunca herdam o frame anterior.
async function capturarPagina(p, tempo, saida) {
p.on("pageerror", e => console.error("PAGEERROR:", e.message));
// ⚠️ MATAR o rAF deixa a cena estática determinística — mas o MapLibre DESENHA por rAF. Sem ele o
// mapa nunca pinta e o shot devolve tela vazia numa cena boa (bug real, 23/jul: 64 KB × 2,6 MB).
// Em cena de mapa, o rAF fica vivo; a estabilidade vem da espera por tiles, não de congelar o loop.
await p.addInitScript(({ mapa }) => {
  if (!mapa) window.requestAnimationFrame = () => 0;
  try { HTMLMediaElement.prototype.play = () => Promise.resolve(); } catch (e) {}
}, { mapa: temMapa });
await p.goto(pathToFileURL(resolve(HTML)).href, { waitUntil: "load" });
// Somente a captura de QC pede este matte. Ele revela logos/textos brancos de overlays alpha sem
// tocar no HTML autoritativo nem no render 4444; o vídeo final continua transparente nesta área.
if (QC_BACKGROUND) await p.evaluate((cor) => {
  document.documentElement.style.setProperty("background", cor, "important");
  document.body.style.setProperty("background", cor, "important");
}, QC_BACKGROUND);
await p.evaluate(() => document.fonts.ready);
// Espera os MESMOS ganchos que o render 4K espera (capturar.mjs). Sem isto o shot fotografa ANTES
// do mapa/fotos carregarem e mostra tela VAZIA numa cena que está boa — validação que mente é pior
// que validação nenhuma, e foi o que aconteceu com a cena `divisao-oriente-medio` (23/jul).
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
await p.waitForFunction(
  () => window.__logoPronta !== false && window.__fotosProntas !== false && window.__videoPronto !== false,
  null,
  { timeout: 15000, polling: 100 },
).catch(() => console.error("  ⚠ timeout esperando assets — o frame pode sair parcial"));
await p.evaluate(() => window.__prepararCaptura && window.__prepararCaptura());
// ⚠️ `window.__ready` das cenas de mapa é uma Promise que só resolve no evento `load` — e esse
// evento NÃO dispara se algum tile falhar. Esperar por ela pendura o processo para sempre (o
// `.catch` não salva: não há rejeição, há pendência). Sempre correr contra um relógio.
await p.evaluate(() => window.__ready
  ? Promise.race([Promise.resolve(window.__ready), new Promise(r => setTimeout(r, 8000))])
  : null).catch(() => {});
await p.waitForTimeout(600);

// CENA DE MAPA: ⚠️ NÃO espere por `map.loaded()` nem por `idle`. Medido em 23/jul: com 120 tiles já
// carregados e o estilo pronto, `map.loaded()` continuava FALSE mesmo após 25 s — bastam algumas
// requisições de tile falharem para o sinal nunca virar true. Quem espera por ele trava, e o
// screenshot sai VAZIO numa cena que está boa (foi o caso de `divisao-oriente-medio`).
// O que funciona é tempo de parede: com espera fixa o mesmo frame saiu com 2,6 MB em vez de 64 KB.
if (temMapa) {
  const espera = +(process.env.SHOT_MAPA_MS || 12000);
  await p.evaluate(() => window.__aguardarMapa ? window.__aguardarMapa() : null).catch(() => {});
  await p.waitForTimeout(espera);
}
await p.evaluate(t => window.__renderAt && window.__renderAt(t), tempo);
// ⚠️ A espera do mapa tem que vir DEPOIS do __renderAt(t) também (o capturar.mjs espera por frame):
// cena que faz setData/re-drape em função de t processa no worker, e capturar no meio fotografa
// camada pela metade — foi o corredor tênue de `crimeia-corredor-terrestre` @11.7s (26/jul).
if (temMapa) await p.evaluate(() => window.__aguardarMapa ? window.__aguardarMapa() : null).catch(() => {});

// ⚠️ VÍDEO PESADO PRECISA DO MESMO TRATAMENTO QUE O MAPA ([ARTE-123], 05/ago/2026). Os 350 ms do
// caminho "sem mapa" cobriam desenho e tipografia, mas cena de footage 4K faz `currentTime=f(t)` e
// o seek NÃO terminou quando o screenshot sai — o frame vem PRETO ou no quadro anterior. O custo é
// alto e indireto: o QC julga por frame, vê preto, e reprova cena que está boa. Medido três vezes
// no mesmo dia (`s85` deste projeto: com 2600 ms o inset pinta e `readyState=4` nos dois casos;
// `s82` e `s08`, com mapa, idem). Aqui esperamos o seek TERMINAR de verdade, com teto de tempo —
// nunca uma Promise sem relógio, que é o erro que já pendurou este script antes.
/**
 * ⚠️ O TETO DE 4 s ERA FIXO, e numa cena de muitos 4K sob máquina carregada ele vira um defeito
 * REPORTADO COMO defeito da cena. Medido em 11/set/2026 (`terremotos-america-do-sul/t-s063` — SEIS
 * vídeos 4K no mesmo palco, um deles a 341 Mbps): duas passadas seguidas de `julgar-cenas`
 * devolveram `captura-falhou · MÍDIA NÃO CARREGOU`, e os oito clipes da pasta estão sãos (h264,
 * 3840×2160, nenhum ProRes — conferido um a um por `ffprobe`). Não era arquivo ruim: era o Chrome
 * não terminando de decodificar dentro dos 4 s, com load 32.
 *
 * ⛔ O comportamento continua o mesmo e é o CERTO — o script se recusa a medir um frame incompleto,
 * que é o oposto do verde vazio. O que muda é só poder ALARGAR o teto quando se sabe que a cena é
 * pesada, na mesma convenção que o `SHOT_MAPA_MS` desta página já usa duas dúzias de linhas acima.
 * Default idêntico ao de antes: nada muda para quem não define a variável.
 */
const TETO_VIDEO_MS = +(process.env.SHOT_VIDEO_MS || 4000);
await p.evaluate((teto) => {
  const vs = [...document.querySelectorAll("video")];
  if (!vs.length) return null;
  return Promise.race([
    Promise.all(vs.map(v => (v.readyState >= 2 && !v.seeking)
      ? null
      : new Promise(r => {
          const fim = () => { v.removeEventListener("seeked", fim); v.removeEventListener("loadeddata", fim); r(); };
          v.addEventListener("seeked", fim); v.addEventListener("loadeddata", fim);
        }))),
    new Promise(r => setTimeout(r, teto)),
  ]);
}, TETO_VIDEO_MS).catch(() => {});
const temVideo = await p.evaluate(() => document.querySelector("video") !== null).catch(() => false);
await p.waitForTimeout(temMapa ? 2500 : (temVideo ? 2600 : 350));

// ⚠️⚠️ A MÍDIA CARREGOU? — sem esta conferência o shot é um morto-silencioso.
// Uma cena cuja foto não existe no disco NÃO quebra: o Chrome desenha o resto, o PNG sai com tamanho
// normal e este script imprimia "ok". Em 08/ago/2026 dois agentes que consertavam marcação sobre
// fotografia mediram coordenadas contra fundo liso por causa disso — *"o primeiro frame saiu com o
// traçado sobre fundo PRETO e 'ok' no log"*. Uma correção medida sobre o vazio sai pior que o defeito
// original, e com aparência de trabalho feito.
// A prova é `naturalWidth > 0` (não `complete`, que também fica true quando a imagem falhou).
const falhas = await p.evaluate(() => {
  const out = [...(window.__midiaFalhou || [])];
  // [porte Régie] Face da marca que não carregou: o RIG (src/cena/_rig.js do motor) a põe em
  // window.__fontesFaltando. O Chrome desenha com a fonte reserva SEM erro — o frame sai "ok" e a
  // tipografia é outra. Para quem mede coordenada ou tamanho contra este PNG, é mídia faltando.
  for (const ff of (window.__fontesFaltando || [])) out.push("fonte: " + ff);
  for (const im of document.images) if (!(im.complete && im.naturalWidth > 0)) out.push(im.src || "(sem src)");
  for (const v of document.querySelectorAll("video")) if (v.readyState < 2) out.push(v.currentSrc || v.src || "(sem src)");
  return [...new Set(out)];
}).catch(() => []);

// [porte Régie] A pasta do PNG pode não existir (a doutrina cita /tmp/…, que no Windows vira C:\tmp).
// Sem isto o screenshot lança ENOENT e o agente lê "o shot quebrou" numa cena boa.
mkdirSync(dirname(resolve(saida)), { recursive: true });
await p.screenshot({ path: saida });
return falhas;
}

function relatarFalhas(falhas, saida) {
if (falhas.length) {
  console.error(`\n⚠️  MÍDIA NÃO CARREGOU (${falhas.length}) — ESTE FRAME ESTÁ INCOMPLETO:`);
  for (const f of falhas.slice(0, 8)) console.error("     ✗ " + String(f).replace(/^file:\/\//, ""));
  if (falhas.length > 8) console.error(`     … e mais ${falhas.length - 8}`);
  console.error("   NÃO meça coordenada contra este frame — o que você vê não é o que o vídeo mostra.");
  // [porte Régie] O --restaurar do estúdio baixava do bucket de nuvem, que a Régie não tem.
  console.error("   Conserto: node scripts/qc-src-existe.mjs out/<proj>  (diz qual arquivo falta) e traga a mídia de novo pela busca.\n");
  console.log("ok-COM-MIDIA-FALTANDO", saida);   // o stdout também avisa: quem só lê "ok" tem de tropeçar
}
}

async function fecharComPrazo(alvo, etapa) {
  if (!alvo) return;
  // close pode esperar pipes/auxiliares após o Chrome principal sair. O handler SIGTERM do
  // Playwright força o grupo quando o fechamento já começou e aguarda seu cleanup real.
  // Repetir browser.close() na API cliente só aguardaria a mesma Promise. Este prazo vale
  // SOMENTE para liberar recursos, nunca para renderAt, carregamento, seek ou screenshot.
  const gracioso = setTimeout(() => {
    console.error(`⚠ fechamento de ${etapa} pendente; acionando cleanup do Playwright`);
    process.emit("SIGTERM");
  }, 5_000);
  const limite = setTimeout(() => {
    console.error(`✗ encerramento de ${etapa} não comprovado; captura recusada`);
    process.exit(process.exitCode || 1);
  }, 15_000);
  try { await alvo.close(); }
  finally { clearTimeout(gracioso); clearTimeout(limite); }
}

let browser;
try {
  // [porte Régie] Chrome que não sobe (não instalado, CHROME_PATH errado, npm install não rodado) NÃO
  // é erro da cena: sai 2, "não medi", com a mensagem que diz o conserto — nunca 1.
  try { browser = await lancarChrome(); }
  catch (e) {
    console.error(`⚠ shot: NÃO MEDIDO — o Chrome não subiu: ${e.code ? e.message : String(e.message || e).replace(/\s+/g, " ").slice(0, 300)}`);
    process.exitCode = NAO_MEDIDO;
    throw Object.assign(new Error("sem Chrome"), { jaRelatado: true });
  }
  for (const { tempo, saida } of capturas) {
    const contexto = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: SCALE });
    let timer;
    try {
      const pagina = await contexto.newPage();
      // O timeout externo cobre o lote inteiro; cada instante conserva o teto de 90 s do QC.
      const captura = capturarPagina(pagina, tempo, saida);
      const falhas = emLote ? await Promise.race([
        captura,
        new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(`tempo de captura esgotado @${tempo}s`)), 90_000); }),
      ]) : await captura;
      if (falhas.length) {
        relatarFalhas(falhas, saida);
        process.exitCode = 3;
        break;
      }
      console.log("ok", saida);
    } finally {
      clearTimeout(timer);
      await fecharComPrazo(contexto, "contexto");
    }
  }
} catch (error) {
  if (!error.jaRelatado) { console.error(error.stack || error.message); process.exitCode = 1; }
} finally {
  await fecharComPrazo(browser, "browser");
}
