// linha.mjs — a lista de cenas da linha do tempo pré-render, e o estado de cada uma (visto, comentário, aprovação).
//
// Desenho: ferramentas/linha-do-tempo/DESENHO.md, seções A.2, A.6 e E. Este módulo só LÊ o projeto, com duas
// exceções que só ACRESCENTAM linhas: vistos.jsonl e medidas.jsonl (out/<proj>/_tmp/linha-do-tempo/, fora do git) e
// qc/_aprovacao-lucas.jsonl (vai ao git). Nunca reescreve arquivo: como a fila da galeria, o estado é a soma das linhas.
//
// O que vem de fora, sem editar (seção E):
//   - do motor (C:/projetos/regie-v1, commit 7ab9543), por file:///: planejarJanelas e fundidasDe (montar-previa.mjs),
//     sha1, quadrosDe, carimboConfere, contratoDaCena e verificarMidias (renderizar.mjs). A janela de cada cena é a
//     MESMA do XML e da prévia, e as recusas do render são as mesmas;
//   - do molde (scripts/galeria/*.mjs e scripts/serve-galeria.mjs): o portão de caminho, a fila, a narração, o palco
//     e o ETag.
// Antes de importar, confere-se o sha256 de TODO módulo que o import carrega (o fecho inteiro, não só a porta de
// entrada): o do molde contra scripts/ORIGEM.json (sha256_aqui), o do motor contra a lista fixa abaixo. Se mudou, ou
// se apareceu um módulo novo no fecho, nada roda: a ferramenta foi escrita contra aquela versão (DESENHO, D).
//
// A versão de uma cena (o que o "visto" e a aprovação guardam) é o sha1 do HTML MAIS o tamanho e a data de cada
// arquivo de _media que o HTML cita (lido do próprio HTML pelo servidor, não da página), mais o modo do mapa e, no
// proxy, o clipe de origem. Trocar uma foto sem mexer no HTML derruba o visto, mesmo que a página não a liste.
import { createHash } from "node:crypto";
import { appendFileSync, closeSync, existsSync, mkdirSync, openSync, readFileSync, readSync, readdirSync, realpathSync, statSync } from "node:fs";
import { join, posix, relative, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const RAIZ_CANAL = fileURLToPath(new URL("../..", import.meta.url));
// O motor das ferramentas é a pré-v1 (CLAUDE.md, "Os marcadores"), não o motor.caminho do canal.json.
export const MOTOR = resolve(process.env.REGIE_MOTOR || "C:/projetos/regie-v1");
export const FPS = 30;

// Por onde a ferramenta entra no motor: os dois de carregarMotor e os dois do verbo quadros.
export const ENTRADAS_MOTOR = ["src/ferramentas/montar-previa.mjs", "src/ferramentas/renderizar.mjs", "src/lib/captura-png.mjs", "src/lib/chrome.mjs"];
// O sha256 de cada módulo do FECHO dos imports dessas entradas, no commit 7ab9543 (conferido em 02/10/2026; 12 módulos).
// O leitor de chaves (lib/chaves.mjs) entra porque mapa/perfis.mjs o importa: fica carregado, nunca é chamado aqui, e
// o sha256 dele garante que continua sem ler nada ao ser importado.
export const SHA_MOTOR = {
  "src/ferramentas/montar-previa.mjs": "641a609f14359ba1ae424ec55ccd349dd76e415c0de50e3ef383ff9752274db1",
  "src/ferramentas/renderizar.mjs": "e014f2b48752a097fb691224c4dddfe3a28260a75c0d18dc72be0da50a126caf",
  "src/lib/captura-png.mjs": "fb5f8dfcfc20f3f03765e99c92efec4152d2b6da1e8fb72c1d3618ac29abecce",
  "src/lib/chrome.mjs": "2495b36285720801b59e5d915bbfc20de85ca7917b1233f0bc4b5128a3c98988",
  "src/midia/arquivos.mjs": "93d58f49659074ed7a5ecb92132a50b71109257a33d4b57f230903acc76df644",
  "src/cena/proibidos.mjs": "6e9242215c5373f60e96083550e36377289b03b431417d96232c755e928b07f5",
  "src/mapa/perfis.mjs": "1efa50cee244a8827e7faf68316e38c2ecc0d3c43e984c86b8f16c3d585e1658",
  "src/lib/chaves.mjs": "55f70e4d138d6b6039c4475903f258766160d6ea61422f0029986be8858865fc",
  "src/finalize/midia.mjs": "a6dc67f0923d5139dc317e159d75ed4aae4b6bc46d3ab2a7ad5c5cb9159b7834",
  "src/lib/wav.mjs": "a2e0094e1e871989287acdae34c28658c933d34320d470981eb104137d5918dd",
  "src/lib/ffprobe-csv.mjs": "b2e25a2b51196ebec4b503797fe6b30ab263326b285a34b917e0467cffeb778d",
  "src/lib/cor-709.mjs": "c72090c21cd0e559d1815c709e7c4832f6303d2d5fd683f6c28a1ab85619c31b",
};
// As entradas do molde, e o fecho que se espera delas (cada um conferido contra scripts/ORIGEM.json).
export const ENTRADAS_MOLDE = ["galeria/caminho.mjs", "galeria/fila.mjs", "galeria/projeto.mjs", "serve-galeria.mjs"];
const DO_MOLDE = ["galeria/caminho.mjs", "galeria/fila.mjs", "galeria/projeto.mjs", "galeria/paginas.mjs",
  "serve-galeria.mjs", "lib/espelho-path.mjs", "lib/words-do-espelho.mjs"];

// As pastas de _media que as cenas citam (conferido com grep nos 56 HTML do Juneau). _caca e _master.mp4 ficam fora.
// "base" desde 09/10/2026: o still da mesa do vídeo 2 (_media/base/mesa-los-angeles.png, Landsat, domínio público), que toda
// cena de mesa cita; sem ela as 20 cenas sem mapa do vídeo 2 não abriam ("img não carregou").
export const PASTAS_MIDIA = new Set(["_vendor", "geo", "foto", "footage", "documento", "pessoa", "base"]);

/** Erro que vira saída 2 ("não rodou"): uso errado, projeto que não existe, motor mudado. */
export class NaoRodou extends Error {}

const sha256De = (arq) => createHash("sha256").update(readFileSync(arq)).digest("hex");
const hashCurto = (s, n = 12) => createHash("sha1").update(s).digest("hex").slice(0, n);

// ─── o fecho dos imports ─────────────────────────────────────────────────────────────────────────

// import … from "x" | import "x" | export {…}|* from "x". O trecho antes do "from" não tem aspas nem ";": uma
// importação nunca atravessa outra. Só os especificadores relativos ("./", "../") são do motor ou do molde.
const RE_IMPORT = /(?:^|[\n;])[ \t]*(?:import(?![ \t]*\()[ \t]*(?:[^;"'`]*?\bfrom[ \t]*)?|export[ \t]+(?:\*(?:[ \t]+as[ \t]+[\w$]+)?|\{[^}]*\})[ \t]*from[ \t]*)["']([^"']+)["']/g;

/**
 * Os módulos que um import das `entradas` carrega, seguindo os imports relativos de cada um. `rel` com "/" a partir
 * de `base`. Um import() dinâmico não se segue: vira problema (a conferência não diria o que ele carrega).
 */
export function fechoDeImports(base, entradas) {
  const vistos = new Set(), fila = [...entradas], problemas = [];
  while (fila.length) {
    const rel = fila.shift();
    if (vistos.has(rel)) continue;
    vistos.add(rel);
    let txt;
    try { txt = readFileSync(join(base, ...rel.split("/")), "utf8"); } catch { problemas.push(`${rel}: não existe`); continue; }
    for (const mm of txt.matchAll(RE_IMPORT)) {
      if (mm[1].startsWith(".")) fila.push(posix.normalize(posix.join(posix.dirname(rel), mm[1])));
    }
    if (/\bimport[ \t]*\(/.test(txt)) problemas.push(`${rel}: tem import() dinâmico, que a conferência não segue`);
  }
  return { modulos: [...vistos], problemas };
}

/** O que mudou no motor ou no molde desde que a ferramenta foi escrita (vazia = nada). */
export function conferirMotor({ raizCanal = RAIZ_CANAL, motor = MOTOR } = {}) {
  const problemas = [];
  const fm = fechoDeImports(motor, ENTRADAS_MOTOR);
  problemas.push(...fm.problemas.map((p) => `${motor}/${p}`));
  for (const rel of fm.modulos) {
    const esperado = SHA_MOTOR[rel], arq = join(motor, ...rel.split("/"));
    if (!esperado) { problemas.push(`${arq}: módulo novo no fecho dos imports, nunca conferido`); continue; }
    let atual; try { atual = sha256De(arq); } catch { continue; }   // a falta já veio do fecho
    if (atual !== esperado) problemas.push(`${arq}: o sha256 mudou (${atual.slice(0, 12)}…, esperado ${esperado.slice(0, 12)}…)`);
  }
  let origem = null;
  try { origem = JSON.parse(readFileSync(join(raizCanal, "scripts", "ORIGEM.json"), "utf8")).arquivos; }
  catch (e) { problemas.push(`scripts/ORIGEM.json ilegível: ${e.message}`); }
  const fmo = fechoDeImports(join(raizCanal, "scripts"), ENTRADAS_MOLDE);
  problemas.push(...fmo.problemas.map((p) => `scripts/${p}`));
  if (origem) {
    for (const rel of fmo.modulos) {
      if (!DO_MOLDE.includes(rel)) { problemas.push(`scripts/${rel}: módulo novo no fecho dos imports, nunca conferido`); continue; }
      const esperado = origem[rel]?.sha256_aqui;
      const arq = join(raizCanal, "scripts", ...rel.split("/"));
      if (!esperado) { problemas.push(`scripts/${rel}: sem sha256_aqui em scripts/ORIGEM.json`); continue; }
      let atual; try { atual = sha256De(arq); } catch { continue; }
      if (atual !== esperado) problemas.push(`scripts/${rel}: o sha256 não é o do ORIGEM.json`);
    }
  }
  return problemas;
}

let _motor = null;
/**
 * Confere e importa tudo o que vem de fora. Os imports são dinâmicos de propósito: o sha256 se confere ANTES de
 * qualquer módulo de fora rodar.
 */
export async function carregarMotor() {
  if (_motor) return _motor;
  const problemas = conferirMotor();
  if (problemas.length) {
    throw new NaoRodou("o motor ou o molde mudou desde que a linha do tempo foi escrita, e ela não roda sobre uma versão " +
      "que não foi conferida:\n  - " + problemas.join("\n  - ") +
      "\n  Avise o Claude central: a ferramenta precisa ser conferida de novo contra a versão nova.");
  }
  const doMotor = (rel) => import(pathToFileURL(join(MOTOR, ...rel.split("/"))).href);
  const doMolde = (rel) => import(pathToFileURL(join(RAIZ_CANAL, "scripts", ...rel.split("/"))).href);
  const [previa, render, caminho, fila, projeto, galeria] = await Promise.all([
    doMotor("src/ferramentas/montar-previa.mjs"), doMotor("src/ferramentas/renderizar.mjs"),
    doMolde("galeria/caminho.mjs"), doMolde("galeria/fila.mjs"), doMolde("galeria/projeto.mjs"), doMolde("serve-galeria.mjs"),
  ]);
  _motor = {
    planejarJanelas: previa.planejarJanelas, fundidasDe: previa.fundidasDe,
    sha1: render.sha1, quadrosDe: render.quadrosDe, carimboConfere: render.carimboConfere,
    contratoDaCena: render.contratoDaCena, descreverContrato: render.descreverContrato, verificarMidias: render.verificarMidias,
    FFMPEG: render.FFMPEG, FFPROBE: render.FFPROBE, rodar: render.rodar,
    resolverNoCanal: caminho.resolverNoCanal, nomeSeguro: caminho.nomeSeguro, dentroDe: caminho.dentroDe,
    ARQ_FILA: fila.ARQ_FILA, STATUS_ABERTOS: fila.STATUS_ABERTOS, TEXTO_MAX: fila.TEXTO_MAX,
    lerFila: fila.lerFila, lerFilaMemo: fila.lerFilaMemo, abertas: fila.abertas,
    gravarComentario: fila.gravarComentario, marcarStatus: fila.marcarStatus,
    narracaoDoProjeto: projeto.narracaoDoProjeto, palcoDaCena: projeto.palcoDaCena,
    etagDe: galeria.etagDe,
  };
  return _motor;
}

// ─── caminhos ────────────────────────────────────────────────────────────────────────────────────

export const pastaLinha = (raiz, proj) => join(raiz, "out", proj, "_tmp", "linha-do-tempo");
export const arqVistos = (raiz, proj) => join(pastaLinha(raiz, proj), "vistos.jsonl");
export const arqMedidas = (raiz, proj) => join(pastaLinha(raiz, proj), "medidas.jsonl");
export const pastaProxies = (raiz, proj) => join(pastaLinha(raiz, proj), "proxies");
export const arqAprovacao = (raiz, proj) => join(raiz, "out", proj, "qc", "_aprovacao-lucas.jsonl");
/**
 * O nome do proxy: a cena, o sha1 do HTML e o tamanho + a data do clipe 4K de origem. Clipe refeito com o mesmo HTML
 * (render --forcar depois de trocar uma geometria) tem outro nome: o proxy velho deixa de servir.
 */
export const nomeProxy = (id, sha1, clipe) => `${id}-${sha1.slice(0, 8)}-${hashCurto(`${clipe?.tam}:${clipe?.mtime}`, 8)}.mp4`;
const barra = (p) => p.split(sep).join("/");

const _raizReal = new Map();
/** O caminho real da raiz (realpath), para comparar com o caminho real do arquivo pedido. */
export function raizReal(raiz) {
  if (!_raizReal.has(raiz)) { let r = resolve(raiz); try { r = realpathSync.native(r); } catch {} _raizReal.set(raiz, r); }
  return _raizReal.get(raiz);
}

/**
 * A lista fechada do que o servidor entrega (DESENHO, A.3; desde 22/10/2026, também a legenda em português montada).
 * `rel` é o caminho REAL relativo à raiz, com "/", e a
 * comparação é em minúsculas porque o NTFS não distingue maiúsculas (_CACA é _caca). Pura.
 */
export function caminhoPermitido(rel, { proj, ids, narracao }) {
  const r = String(rel).toLowerCase(), p = String(proj).toLowerCase();
  if (narracao && r === narracao.toLowerCase()) return true;
  if (r === `out/${p}/words.json`) return true;
  if (r === "marca/tokens.css") return true;
  if (r.startsWith("marca/fontes/") && r.length > "marca/fontes/".length) return true;
  let m = /^out\/([^/]+)\/graphics\/([^/]+)\.html$/.exec(r);
  if (m) return m[1] === p && [...ids].some((id) => id.toLowerCase() === m[2]);
  m = /^out\/([^/]+)\/_media\/([^/]+)\/.+$/.exec(r);
  if (m) return m[1] === p && PASTAS_MIDIA.has(m[2]);
  m = /^out\/([^/]+)\/_tmp\/linha-do-tempo\/proxies\/[^/]+\.mp4$/.exec(r);
  if (m) return m[1] === p;
  // A legenda em português montada (legenda.mjs montar; Lucas, 22/10/2026): só este nome exato, do projeto da linha. A
  // tradução crua, os vistos, as medidas e o resto de _tmp continuam fora.
  if (r === `out/${p}/_tmp/linha-do-tempo/legenda-pt.json`) return true;
  return false;
}

// ─── leitura ─────────────────────────────────────────────────────────────────────────────────────

/** Duração da narração pelo cabeçalho do WAV, em quadros inteiros, sem ffprobe. null se não for um WAV PCM legível. */
export function quadrosDoWav(arq) {
  let fd;
  try {
    fd = openSync(arq, "r");
    const b = Buffer.alloc(64 * 1024);
    const n = readSync(fd, b, 0, b.length, 0);
    if (n < 12 || b.toString("latin1", 0, 4) !== "RIFF" || b.toString("latin1", 8, 12) !== "WAVE") return null;
    let pos = 12, byteRate = 0, dados = 0;
    while (pos + 8 <= n) {
      const id = b.toString("latin1", pos, pos + 4), tam = b.readUInt32LE(pos + 4);
      if (id === "fmt ") byteRate = b.readUInt32LE(pos + 8 + 8);
      if (id === "data") { dados = Math.min(tam, statSync(arq).size - pos - 8); break; }
      pos += 8 + tam + (tam % 2);
    }
    if (!byteRate || !dados) return null;
    // Conta inteira antes da divisão: 666,05 s × 30 dá 19981,5 e arredonda para 19982, como o ffprobe + montar-previa.
    return { quadros: Math.round((dados * FPS) / byteRate), segundos: dados / byteRate };
  } catch { return null; } finally { if (fd !== undefined) closeSync(fd); }
}

// sha1 dos bytes do HTML, recalculado só quando o tamanho ou a data mudam (a página pergunta a cada 2 s).
const _sha = new Map();
function sha1DoArquivo(m, abs) {
  const st = statSync(abs);
  const c = _sha.get(abs);
  if (c && c.tam === st.size && c.mt === st.mtimeMs) return c;
  const v = { tam: st.size, mt: st.mtimeMs, sha1: m.sha1(readFileSync(abs)), html: null, citados: null, contrato: new Map() };
  _sha.set(abs, v);
  return v;
}
function textoDoHtml(m, abs) {
  const c = sha1DoArquivo(m, abs);
  if (c.html === null) c.html = readFileSync(abs, "utf8");
  return c;
}

/** Como a cena toca: "mapa" (carrega o perfil de mapa), "video" (tem <video>) ou "dom". Pura. */
export function tipoDaCena(html) {
  if (/_vendor\/perfil-mapa\.js/.test(html)) return "mapa";
  if (/<video\b|createElement\(\s*["']video["']\s*\)/i.test(html)) return "video";
  return "dom";
}
/** A cena usa relevo (DEM)? No rascunho ele é plano, e o que depende dele sai fora do lugar (DESENHO, A.5). */
// O molde das cenas de mapa traz o código do DEM em todas; quem liga é o bloco CENA (relevo: true), ou um setTerrain
// com fonte. No Juneau, só a s44 (identidade §6).
export const usaRelevo = (html) => /\brelevo\s*:\s*true\b/.test(html) || /\.setTerrain\(\s*\{/.test(html);

// O arquivo de _media que o HTML cita, com extensão: "../_media/foto/s04/x.jpg". O comentário que cita uma pasta
// ("../_media/footage/s01/, aprovado") e o caminho montado no JS ("../_media/geo/" + slug) não casam: não têm extensão.
const RE_CITADO = /\.\.\/_media\/(?:_vendor|geo|foto|footage|documento|pessoa)\/[A-Za-z0-9._~\-\/%]+\.[A-Za-z0-9]{1,5}/g;
/** Os arquivos de _media que o HTML da cena cita, como caminho relativo à raiz ("out/<proj>/_media/…"). Pura. */
export function citadosDoHtml(html, proj) {
  const out = new Set();
  for (const r of html.match(RE_CITADO) || []) {
    let d; try { d = decodeURIComponent(r.slice(3)); } catch { continue; }
    if (d.split("/").some((s) => s === ".." || s === "." || s === "")) continue;
    out.add(`out/${proj}/${d}`);
  }
  return [...out].sort();
}

/** Lê uma linha JSONL tolerando linha truncada e CRLF. */
function lerJsonl(arq) {
  let bruto; try { bruto = readFileSync(arq, "utf8"); } catch { return []; }
  const out = [];
  for (const l of bruto.split(/\r?\n/)) { if (!l.trim()) continue; try { const r = JSON.parse(l); if (r && typeof r === "object") out.push(r); } catch {} }
  return out;
}
function apendar(arq, linhas) {
  mkdirSync(resolve(arq, ".."), { recursive: true });
  appendFileSync(arq, linhas.map((l) => JSON.stringify(l)).join("\n") + "\n", "utf8");
}

/** {rel, tam, mtime} de um arquivo do canal, ou null. */
function carimboDoArquivo(raiz, rel) {
  try { const st = statSync(join(raiz, ...rel.split("/"))); return st.isFile() ? { rel, tam: st.size, mtime: Math.floor(st.mtimeMs) } : null; }
  catch { return null; }
}

/**
 * A linha do projeto: as cenas na grade global de quadros, com versão, tipo, modo de mapa, os arquivos citados e o
 * frescor do clipe 4K.
 * @param {object} m  o que carregarMotor() devolve
 * @param {{forcarRascunho?:Set<string>}} op
 */
export function lerLinha(m, raiz, proj, { forcarRascunho = new Set() } = {}) {
  if (!m.nomeSeguro(proj)) throw new NaoRodou(`projeto inválido: ${JSON.stringify(proj)}`);
  const pasta = join(raiz, "out", proj);
  const arqEspelho = join(pasta, "espelho.json");
  // O espelho se lê da raiz pedida, e não pelo lerEspelho do molde: ele tem a raiz do canal fixa, e a prova roda numa
  // cópia (--raiz).
  let espelho;
  try { espelho = JSON.parse(readFileSync(arqEspelho, "utf8")); }
  catch (e) { throw new NaoRodou(`não consegui ler out/${proj}/espelho.json: ${e.code === "ENOENT" ? "o arquivo não existe" : e.message}`); }
  const narracao = m.narracaoDoProjeto(raiz, proj);
  if (!narracao) throw new NaoRodou(`falta a narração em out/${proj}/narracao.wav`);
  const dur = quadrosDoWav(join(raiz, ...narracao.split("/")));
  if (!dur) throw new NaoRodou(`${narracao}: não consegui ler a duração pelo cabeçalho (é um WAV PCM?)`);
  let janelas;
  try { janelas = m.planejarJanelas(espelho.segmentos, dur.quadros); }
  catch (e) { throw new NaoRodou(`o espelho não se planeja: ${e.message}`); }
  const porId = new Map((espelho.segmentos || []).filter((s) => !s?._mergedInto).map((s) => [s.id, s]));
  const graphics = join(pasta, "graphics");
  const cenas = [];
  for (const j of janelas) {
    if (!j.id) continue;   // preto antes da primeira cena: a página mostra o palco vazio
    const abs = join(graphics, `${j.id}.html`);
    const base = { id: j.id, ini: j.ini, fim: j.ini + j.n, n: j.n, anima: porId.get(j.id)?.anima !== false };
    if (!existsSync(abs)) { cenas.push({ ...base, tipo: "falta", sha1: null, versao: null, citados: [], erro: `out/${proj}/graphics/${j.id}.html não existe` }); continue; }
    const c = textoDoHtml(m, abs);
    const tipo = tipoDaCena(c.html);
    if (!c.citados) c.citados = citadosDoHtml(c.html, proj);
    const citados = c.citados.map((rel) => carimboDoArquivo(raiz, rel) || { rel, falta: true });
    const faltando = citados.filter((a) => a.falta).map((a) => a.rel);
    const assinCitados = citados.map((a) => (a.falta ? `${a.rel}:falta` : `${a.rel}:${a.tam}:${a.mtime}`)).join(",");
    // O contrato estático do render (contratoDaCena): a mesma régua, para a cena que o render recusaria não ganhar
    // visto. Lê o HTML e os .css/.js locais que ele cita: guardado por versão dos arquivos citados.
    if (!c.contrato.has(assinCitados)) {
      let v; try { v = m.contratoDaCena(abs, c.html); } catch (e) { v = [{ regra: "contrato ilegível", conserto: e.message }]; }
      c.contrato.clear(); c.contrato.set(assinCitados, v.length ? m.descreverContrato(v) : null);
    }
    const erroContrato = c.contrato.get(assinCitados);
    const mp4 = join(graphics, `${j.id}.mp4`);
    const carimbo = (() => { try { const [a, b] = readFileSync(`${mp4}.de-html`, "utf8").replace(/\r/g, "").split("\n"); return { sha1: a, resolucao: b }; } catch { return null; } })();
    const clipe = carimboDoArquivo(raiz, `out/${proj}/graphics/${j.id}.mp4`);
    const carimboEmDia = !!clipe && m.carimboConfere(`${mp4}.de-html`, c.sha1, "2160p");
    // O carimbo do render só olha o HTML: um arquivo citado mais novo que o clipe (a foto trocada depois do render)
    // deixa o clipe velho, e o renderizar.mjs o pularia pelo carimbo. Aqui ele não conta como em dia.
    const maisNovo = clipe ? citados.filter((a) => !a.falta && a.mtime > clipe.mtime).map((a) => a.rel) : [];
    const clipeEmDia = carimboEmDia && maisNovo.length === 0;
    const motivoClipe = clipeEmDia ? null : !clipe ? "sem clipe 4K" : !carimbo ? "sem carimbo (.mp4.de-html)"
      : carimbo.sha1 !== c.sha1 ? "o clipe é de outra versão do HTML" : carimbo.resolucao !== "2160p" ? `o clipe é ${carimbo.resolucao || "sem resolução"}`
      : `arquivo da cena mais novo que o clipe (${maisNovo.map((r) => r.split("/").pop()).join(", ")}): renderize com --forcar`;
    const proxyAbs = clipe ? join(pastaProxies(raiz, proj), nomeProxy(j.id, c.sha1, clipe)) : null;
    // O proxy de cena de mapa é o caminho normal; o de outra cena é o plano B (?proxy=<id> na página).
    const temProxy = clipeEmDia && !!proxyAbs && existsSync(proxyAbs);
    let modoMapa = null, motivoMapa = null;
    if (tipo === "mapa") {
      if (forcarRascunho.has(j.id)) { modoMapa = "rascunho"; motivoMapa = "rascunho forçado (--forcar-rascunho)"; }
      else if (temProxy) modoMapa = "proxy";
      else if (clipeEmDia) { modoMapa = "rascunho"; motivoMapa = "o clipe 4K está em dia, mas falta a cópia leve desta versão do clipe: rode o verbo proxies"; }
      else { modoMapa = "rascunho"; motivoMapa = `sem clipe 4K em dia (${motivoClipe}): mapa sem satélite`; }
    }
    const erro = faltando.length ? `a cena cita arquivo que não existe: ${faltando.join(", ")}` : erroContrato || null;
    cenas.push({
      ...base, tipo, sha1: c.sha1, tam: c.tam, mtime: Math.floor(c.mt),
      html: `out/${proj}/graphics/${j.id}.html`, palco: m.palcoDaCena(c.html),
      citados, erro, carimbo, clipe, carimboEmDia, clipeEmDia, motivoClipe,
      proxy: temProxy ? barra(relative(raiz, proxyAbs)) : null,
      proxyEsperado: proxyAbs ? barra(relative(raiz, proxyAbs)) : null,
      modoMapa, motivoMapa, avisoRelevo: tipo === "mapa" && modoMapa === "rascunho" && usaRelevo(c.html),
      // A versão que a página carrega e devolve no visto: tudo o que, mudando, faz a cena que ele viu não ser mais esta.
      versao: hashCurto(`${c.sha1}|${modoMapa || ""}|${temProxy ? `${clipe.tam}:${clipe.mtime}` : ""}|${assinCitados}`, 16),
    });
  }
  const ids = new Set(cenas.map((c) => c.id));
  let orfas = [];
  try { orfas = readdirSync(graphics).filter((f) => /\.html$/i.test(f)).map((f) => f.replace(/\.html$/i, "")).filter((id) => !ids.has(id)).sort(); } catch {}
  return {
    proj, totalQuadros: dur.quadros, duracao: dur.quadros / FPS, narracao,
    words: existsSync(join(pasta, "words.json")) ? `out/${proj}/words.json` : null,
    espelhoMtime: Math.floor(statSync(arqEspelho).mtimeMs),
    cenas, fundidas: m.fundidasDe(espelho.segmentos), orfas,
  };
}

// ─── arquivos que a cena carregou ────────────────────────────────────────────────────────────────

/** Os arquivos ainda são os mesmos (tamanho e data)? Trocar uma foto sem mexer no HTML derruba o visto. */
export function arquivosIguais(raiz, lista) {
  for (const a of lista || []) {
    const agora = carimboDoArquivo(raiz, a.rel);
    if (!agora || agora.tam !== a.tam || agora.mtime !== a.mtime) return false;
  }
  return true;
}

/**
 * Normaliza os arquivos que a página mandou (pathname das URLs que o iframe carregou, com `t`, o instante em que
 * terminou de chegar, em ms desde 1970): só o que passa pelo portão de caminho E pela lista fechada conta. Arquivo da
 * lista que não existe, ou cuja data é posterior ao instante em que a página o recebeu (trocado depois da carga),
 * vira problema: a página mostrou outra coisa. O resto se descarta calado: é dado da página, não ordem.
 */
export function normalizarArquivos(m, raiz, linha, itens) {
  const rr = raizReal(raiz), ids = new Set(linha.cenas.map((c) => c.id));
  const vistos = new Map(), problemas = [];
  for (const it of (Array.isArray(itens) ? itens : []).slice(0, 400)) {
    const bruto = typeof it === "string" ? it : it && typeof it.u === "string" ? it.u : null;
    if (!bruto || bruto.length > 1000) continue;
    const t = typeof it === "object" && Number.isFinite(Number(it.t)) ? Number(it.t) : null;
    const alvo = m.resolverNoCanal(raiz, bruto.split(/[?#]/)[0]);
    if (!alvo) continue;
    const rel = alvo.existe ? barra(relative(rr, alvo.abs)) : alvo.rel;
    if (/\.html$/i.test(rel)) continue;   // o HTML já está no sha1
    if (!caminhoPermitido(rel, { proj: linha.proj, ids, narracao: linha.narracao })) continue;
    if (rel.toLowerCase() === linha.narracao.toLowerCase() || /\/_tmp\/linha-do-tempo\//i.test(rel)) continue;
    const c = alvo.existe ? carimboDoArquivo(raiz, rel) : null;
    if (!c) { problemas.push(`a cena pediu ${rel}, que não existe`); continue; }
    if (t !== null && c.mtime > t + 1) problemas.push(`${rel} mudou depois que a página o carregou`);
    vistos.set(rel.toLowerCase(), c);
  }
  return { arquivos: [...vistos.values()].sort((a, b) => a.rel.localeCompare(b.rel)), problemas };
}

// ─── vistos, comentários e aprovação ─────────────────────────────────────────────────────────────

export const COBERTURA_MIN = 0.9;
const MODOS_PAGINA = new Set(["iframe", "proxy", "pausa"]);

/**
 * Grava um visto. Devolve {status, corpo}: 200, 400 (pedido torto), 404 (cena fora da linha), 409 (a versão que a
 * página tocou não é a de agora) ou 422 (a cena não pode ser vista: tem erro, ou tocou no plano B "pausa").
 */
export function registrarVisto(m, raiz, linha, d) {
  const cena = linha.cenas.find((c) => c.id === d?.cena);
  if (!cena) return { status: 404, corpo: { erro: `a cena ${JSON.stringify(d?.cena)} não está na linha` } };
  if (typeof d.sha1 !== "string" || !/^[0-9a-f]{40}$/.test(d.sha1)) return { status: 400, corpo: { erro: "sha1 inválido" } };
  if (typeof d.versao !== "string" || !/^[0-9a-f]{16}$/.test(d.versao)) return { status: 400, corpo: { erro: "versão inválida" } };
  if (!MODOS_PAGINA.has(d.modo)) return { status: 400, corpo: { erro: `modo ${JSON.stringify(d.modo)}: tem de ser iframe, proxy ou pausa` } };
  const cob = Number(d.cobertura);
  if (!Number.isFinite(cob) || cob < COBERTURA_MIN || cob > 1.0001) return { status: 400, corpo: { erro: `cobertura ${d.cobertura}: o visto pede pelo menos ${COBERTURA_MIN * 100} % dos quadros` } };
  // No plano B "pausa" a cena fica parada no quadro da preparação: ele não a viu animada.
  if (d.modo === "pausa") return { status: 422, corpo: { erro: "a cena tocou no plano B \"pausa\" (parada): não conta como vista" } };
  if (cena.erro) return { status: 422, corpo: { erro: `a cena tem erro e o render a recusaria: ${cena.erro}` } };
  // O servidor recalcula a versão: a página pode ter tocado a de antes de um conserto, de uma foto trocada, ou o mapa
  // em rascunho antes do proxy chegar.
  if (d.sha1 !== cena.sha1 || d.versao !== cena.versao) return { status: 409, corpo: { erro: "versão velha: a cena mudou depois que a página a carregou", atual: cena.versao } };
  if (d.modo === "proxy" && !cena.proxy) return { status: 409, corpo: { erro: "a cena não tem proxy desta versão" } };
  if (cena.tipo === "mapa" && (d.modo === "proxy") !== (cena.modoMapa === "proxy")) return { status: 409, corpo: { erro: "o modo do mapa mudou depois que a página o carregou" } };
  const { arquivos: daPagina, problemas } = normalizarArquivos(m, raiz, linha, d.arquivos);
  if (problemas.length) return { status: 409, corpo: { erro: problemas.join("; ") } };
  // Os arquivos do visto: os que o HTML cita (o servidor os lê do HTML, não da página), os que a página carregou, e,
  // no proxy, o clipe de origem (o que ele viu é o clipe).
  const todos = new Map();
  for (const a of [...cena.citados, ...daPagina]) todos.set(a.rel.toLowerCase(), { rel: a.rel, tam: a.tam, mtime: a.mtime });
  if (d.modo === "proxy") todos.set("·clipe", { ...cena.clipe });
  const arquivos = [...todos.values()].sort((a, b) => a.rel.localeCompare(b.rel));
  const modo = d.modo === "proxy" ? "proxy" : cena.tipo === "mapa" ? "rascunho" : "iframe";
  const linhaVisto = { proj: linha.proj, cena: cena.id, sha1: cena.sha1, versao: cena.versao, arquivos, cobertura: +cob.toFixed(3), modo, quando: new Date().toISOString() };
  apendar(arqVistos(raiz, linha.proj), [linhaVisto]);
  return { status: 200, corpo: { ok: true, visto: linhaVisto } };
}

/** Grava as medidas da página (quadros por segundo, deriva, erros). Só números e textos curtos passam. */
export function registrarMedida(raiz, linha, d) {
  const limpar = (v, prof = 0) => {
    if (v === null || typeof v === "boolean") return v;
    if (typeof v === "number") return Number.isFinite(v) ? +v.toFixed(4) : null;
    if (typeof v === "string") return v.slice(0, 500);
    if (prof > 3) return null;
    if (Array.isArray(v)) return v.slice(0, 50).map((x) => limpar(x, prof + 1));
    if (typeof v === "object") { const o = {}; for (const k of Object.keys(v).slice(0, 40)) if (/^[A-Za-z_][A-Za-z0-9_]{0,40}$/.test(k)) o[k] = limpar(v[k], prof + 1); return o; }
    return null;
  };
  if (!d || typeof d !== "object" || Array.isArray(d)) return { status: 400, corpo: { erro: "medida tem de ser um objeto" } };
  if (d.cena != null && !linha.cenas.some((c) => c.id === d.cena)) return { status: 404, corpo: { erro: "cena fora da linha" } };
  const reg = { ...limpar(d), proj: linha.proj, recebido: new Date().toISOString() };
  apendar(arqMedidas(raiz, linha.proj), [reg]);
  return { status: 200, corpo: { ok: true } };
}

/** Monta o texto do comentário como o desenho pede: "@<t>s <texto> [vídeo mm:ss.s · versão <sha1:8>]". Pura. */
export function textoDoComentario({ t, tVideo, sha1, texto, mudou = false }) {
  const mmss = (s) => { const v = Math.max(0, s); const mm = Math.floor(v / 60); return `${String(mm).padStart(2, "0")}:${(v - mm * 60).toFixed(1).padStart(4, "0")}`; };
  // Só o "@<t>s" do começo é marca: um "@3s" que a pessoa escreve no meio vira marca própria, de propósito (é o
  // quebrarEmMarcas da fila), e o t do começo continua o instante em que ela apertou C.
  return `@${(Math.round(t * 10) / 10).toFixed(1)}s ${String(texto).trim()} [vídeo ${mmss(tVideo)} · versão ${String(sha1).slice(0, 8)}${mudou ? " · a cena mudou depois" : ""}]`;
}

/** Grava um comentário na fila da galeria (a mesma do --fila/--marcar). Devolve {status, corpo}. */
export function registrarComentario(m, raiz, linha, d) {
  const cena = linha.cenas.find((c) => c.id === d?.cena);
  if (!cena) return { status: 404, corpo: { erro: `a cena ${JSON.stringify(d?.cena)} não está na linha` } };
  const texto = typeof d.texto === "string" ? d.texto : "";
  if (!texto.trim()) return { status: 400, corpo: { erro: "comentário sem texto" } };
  const t = Number(d.t), tVideo = Number(d.tVideo);
  if (!Number.isFinite(t) || t < 0 || t > cena.n / FPS + 1) return { status: 400, corpo: { erro: "instante fora da cena" } };
  if (!Number.isFinite(tVideo) || tVideo < 0) return { status: 400, corpo: { erro: "instante do vídeo inválido" } };
  // A versão é a que estava na tela quando ele apertou C (a página manda), não a do disco agora: a cena pode ter
  // mudado enquanto ele escrevia.
  const daTela = typeof d.sha1 === "string" && /^[0-9a-f]{40}$/.test(d.sha1) ? d.sha1 : null;
  const sha1 = daTela || cena.sha1 || "";
  const completo = textoDoComentario({ t, tVideo, sha1, texto, mudou: !!daTela && daTela !== cena.sha1 });
  if (completo.length > m.TEXTO_MAX) return { status: 413, corpo: { erro: `comentário com mais de ${m.TEXTO_MAX} caracteres` } };
  const linhas = m.gravarComentario(raiz, { proj: linha.proj, cena: cena.id, texto: completo, tipo: "critica" });
  return { status: 200, corpo: { ok: true, marcas: linhas } };
}

/** Os comentários do projeto, abertos e fechados, para a página mostrar as respostas do Claude. */
export function comentariosDoProjeto(m, raiz, proj) {
  return m.lerFilaMemo(raiz).filter((x) => x.proj === proj).map((x) => ({
    id: x.id, cena: x.cena, t: x.t, texto: x.texto, status: x.status, nota: x.nota || "",
    quando: x.quando || null, aberta: m.STATUS_ABERTOS.includes(x.status),
  }));
}

/**
 * Um registro (visto ou aprovação) é da versão de hoje? O mesmo sha1 do HTML, os mesmos arquivos (tamanho e data), e
 * todo arquivo que o HTML cita hoje dentro dele (um registro sem eles não prova que a foto de hoje foi vista).
 */
function registroAtual(raiz, c, r) {
  if (r.sha1 !== c.sha1 || !arquivosIguais(raiz, r.arquivos)) return false;
  const tem = new Set((r.arquivos || []).map((a) => String(a.rel).toLowerCase()));
  return c.citados.every((a) => tem.has(a.rel.toLowerCase()));
}

/** A assinatura do conjunto aprovável: o que foi ao chat é o que o "sim" aprova. Pura. */
export const assinaturaDe = (cenas) => hashCurto(JSON.stringify(cenas.map((c) => [c.id, c.versao])), 12);

/**
 * O estado de cada cena: visto ("atual", "velho" ou "nunca"), comentários abertos e aprovação ("atual", "velha" ou
 * "nunca"). Nas de mapa, o visto em rascunho não vale para o mapa com satélite, e só o visto pelo clipe (proxy) é
 * aprovável: o Lucas não aprova um mapa que não viu.
 */
export function estadoDoProjeto(m, raiz, proj, op = {}) {
  const linha = lerLinha(m, raiz, proj, op);
  const vistos = lerJsonl(arqVistos(raiz, proj)).filter((v) => v.proj === proj);
  const aprov = lerJsonl(arqAprovacao(raiz, proj)).filter((v) => v.proj === proj);
  const abertasPorCena = new Map();
  for (const x of m.abertas(m.lerFila(raiz)).filter((x) => x.proj === proj)) abertasPorCena.set(x.cena, (abertasPorCena.get(x.cena) || 0) + 1);
  // Visto: no mapa, o de rascunho não vale quando o mapa de agora é o do clipe.
  const vistoAtual = (c, r) => registroAtual(raiz, c, r) && (c.tipo !== "mapa" || r.modo === "proxy" || c.modoMapa !== "proxy");
  // Aprovação: no mapa, só a feita sobre o visto pelo clipe.
  const aprovAtual = (c, a) => registroAtual(raiz, c, a) && (c.tipo !== "mapa" || a.modo === "proxy");
  for (const c of linha.cenas) {
    const vs = vistos.filter((v) => v.cena === c.id);
    const va = vs.filter((v) => vistoAtual(c, v));
    c.visto = va.length ? "atual" : vs.length ? "velho" : "nunca";
    const melhor = va.filter((v) => v.modo === "proxy").pop() || va[va.length - 1] || null;
    c.vistoModo = melhor ? melhor.modo : null;
    c.arquivosVistos = melhor ? melhor.arquivos : null;
    c.abertos = abertasPorCena.get(c.id) || 0;
    const as = aprov.filter((a) => a.cena === c.id);
    const aa = as.filter((a) => aprovAtual(c, a));
    c.aprovada = aa.length ? "atual" : as.length ? "velha" : "nunca";
    c.aprovacaoAtual = aa.length ? aa[aa.length - 1] : null;
    c.aprovadaSemSatelite = c.tipo === "mapa" && !aa.length && as.some((a) => registroAtual(raiz, c, a) && a.modo !== "proxy");
    c.ultimaAprovacao = as.length ? { sha1: as[as.length - 1].sha1, quando: as[as.length - 1].quando } : null;
    c.semSatelite = c.tipo === "mapa" && c.visto === "atual" && c.vistoModo !== "proxy";
  }
  const cs = linha.cenas;
  const aprovaveis = cs.filter((c) => c.visto === "atual" && c.abertos === 0 && c.aprovada !== "atual" && !c.erro && !c.semSatelite);
  // O render espera o "sim": entram as aprovadas (ou aprováveis) SEM comentário aberto e sem clipe em dia.
  const aRenderizar = cs.filter((c) => c.abertos === 0 && !c.erro && (aprovaveis.includes(c) || c.aprovada === "atual") && !c.clipeEmDia);
  linha.resumo = {
    cenas: cs.length,
    porTipo: Object.fromEntries(["dom", "video", "mapa", "falta"].map((t) => [t, cs.filter((c) => c.tipo === t).length])),
    mapaProxy: cs.filter((c) => c.modoMapa === "proxy").length,
    mapaRascunho: cs.filter((c) => c.modoMapa === "rascunho").length,
    vistasAtual: cs.filter((c) => c.visto === "atual").length,
    vistasVelhas: cs.filter((c) => c.visto === "velho").length,
    comentariosAbertos: cs.reduce((s, c) => s + c.abertos, 0),
    cenasComComentario: cs.filter((c) => c.abertos > 0).length,
    aprovadasAtual: cs.filter((c) => c.aprovada === "atual").length,
    comErro: cs.filter((c) => c.erro).map((c) => c.id),
    semSatelite: cs.filter((c) => c.semSatelite).map((c) => c.id),
    aprovaveis: aprovaveis.map((c) => c.id),
    assinatura: assinaturaDe(aprovaveis),
    aRenderizar: aRenderizar.map((c) => c.id),
    // O renderizar.mjs pula pelo carimbo (só o HTML): a cena com arquivo mais novo que o clipe pede --forcar.
    aRenderizarForcar: aRenderizar.filter((c) => c.carimboEmDia).map((c) => c.id),
  };
  return linha;
}

/** O conjunto aprovável mudou entre o "estado" que foi ao chat e o "aprovar": saída 1, sem gravar nada. */
export class ConjuntoMudou extends Error {}

/**
 * Acrescenta em qc/_aprovacao-lucas.jsonl cada cena aprovável (vista na versão atual, sem comentário aberto, sem erro
 * e, no mapa, vista pelo clipe), com a mensagem literal do Lucas e a hora dele. Só o Claude central roda, depois do
 * "sim" no chat, com a assinatura que o `estado` imprimiu: se o conjunto mudou desde então, nada se grava.
 */
export function aprovar(m, raiz, proj, { mensagem, hora, assinatura }) {
  if (typeof mensagem !== "string" || !mensagem.trim()) throw new NaoRodou("falta --mensagem=\"<a mensagem literal do Lucas no chat>\"");
  if (typeof hora !== "string" || !hora.trim()) throw new NaoRodou("falta --hora=\"<a hora da mensagem dele>\"");
  if (typeof assinatura !== "string" || !/^[0-9a-f]{12}$/.test(assinatura)) throw new NaoRodou("falta --assinatura=<a que o estado imprimiu junto da frase que foi ao chat>");
  const est = estadoDoProjeto(m, raiz, proj);
  if (est.resumo.assinatura !== assinatura) {
    throw new ConjuntoMudou(`o conjunto aprovável mudou desde o estado que foi ao chat (assinatura ${est.resumo.assinatura}, não ${assinatura}). ` +
      `Aprováveis agora: ${est.resumo.aprovaveis.join(", ") || "nenhuma"}. Rode estado de novo e pergunte de novo.`);
  }
  const quando = new Date().toISOString();
  const linhas = est.cenas.filter((c) => est.resumo.aprovaveis.includes(c.id)).map((c) => ({
    proj, cena: c.id, sha1: c.sha1, versao: c.versao, modo: c.vistoModo, arquivos: c.arquivosVistos || [],
    mensagem: mensagem.trim(), hora: hora.trim(), assinatura, quando,
  }));
  if (linhas.length) apendar(arqAprovacao(raiz, proj), linhas);
  return { gravadas: linhas.map((l) => l.cena), est };
}

/**
 * A trava antes do render: 0 = todas aprovadas na versão atual e sem comentário aberto; 1 = falta alguma.
 * Com depoisDoRender: as mesmas checagens e, além delas, o clipe de cada cena é 2160p, da versão aprovada e mais novo
 * que todo arquivo que a cena usa (a foto trocada depois do render não passa).
 */
export function conferir(m, raiz, proj, { depoisDoRender = false } = {}) {
  const est = estadoDoProjeto(m, raiz, proj);
  const faltas = [];
  for (const c of est.cenas) {
    const falta = (motivo) => faltas.push({ cena: c.id, motivo });
    if (c.tipo === "falta") { falta(c.erro); continue; }
    if (c.erro) { falta(c.erro); continue; }
    // O comentário aberto segura, mesmo numa cena já aprovada: ele marcou para mudar depois do "sim".
    if (c.abertos) { falta(`${c.abertos} comentário(s) aberto(s)`); continue; }
    if (c.aprovada !== "atual") {
      falta(c.aprovadaSemSatelite ? "o mapa foi aprovado vendo o rascunho, sem satélite: precisa ser visto pelo clipe"
        : c.semSatelite ? "o mapa foi visto só em rascunho, sem satélite"
        : c.visto === "nunca" ? "o Lucas não viu esta cena"
        : c.visto === "velho" ? "a cena mudou depois que o Lucas a viu"
        : c.aprovada === "velha" ? "a aprovação é de uma versão anterior"
        : "vista e sem comentário, mas ainda sem o \"sim\" registrado (aprovar)");
      continue;
    }
    if (!depoisDoRender) continue;
    const ap = c.aprovacaoAtual;
    if (!c.carimbo) { falta("sem clipe (falta o .mp4.de-html)"); continue; }
    if (!c.clipe) { falta("sem o .mp4"); continue; }
    if (c.carimbo.sha1 !== ap.sha1) { falta("o clipe não é da versão aprovada"); continue; }
    if (c.carimbo.resolucao !== "2160p") { falta(`o clipe é ${c.carimbo.resolucao || "sem resolução"}, não 2160p`); continue; }
    // O clipe tem de ser mais novo que todo arquivo da aprovação e da cena (fora ele mesmo).
    const proprio = c.clipe.rel.toLowerCase();
    const novos = [...(ap.arquivos || []), ...c.citados].filter((a) => !a.falta && String(a.rel).toLowerCase() !== proprio && a.mtime > c.clipe.mtime);
    if (novos.length) { falta(`o clipe é mais velho que ${[...new Set(novos.map((a) => a.rel.split("/").pop()))].join(", ")}: renderize de novo com --forcar`); continue; }
  }
  return { ok: faltas.length === 0, faltas, est };
}
