// mapa.mjs — as cenas de mapa na linha do tempo, sem pedir um tile à MapTiler (DESENHO, A.5).
//
// Duas coisas:
//   1. os PROXIES: do clipe 4K que o mapista já renderizou (carimbo em dia, sha1 do HTML + "2160p"), uma cópia leve em
//      1080p, H.264 com GOP normal e +faststart, para o <video> da página tocar e arrastar. O clipe 4K do render é
//      ALL-INTRA a ~200 Mb/s: tocar isso ao vivo não está provado. Só sai cópia de clipe em dia;
//   2. o RASCUNHO, para a cena de mapa sem clipe em dia: o perfil-mapa.js trocado (tiles do próprio servidor e um
//      marcador no lugar da chave) e os tiles gerados aqui pelo sharp. Um JPEG cinza com grade e "RASCUNHO z/x/y", para
//      a câmera aparecer andando, e um DEM WebP sem perda com RGB 1/134/160 (0 m no encoding mapbox). Os dois passam
//      no defeitoDaImagem das cenas: o JPEG fecha com FF D9 e o WebP tem o tamanho que declara.
// Nada aqui fala com a rede nem lê arquivo de chaves.
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { pastaProxies } from "./linha.mjs";

// ─── o rascunho ──────────────────────────────────────────────────────────────────────────────────

export const TILE = 512;
// A cor do relevo plano: mapbox = -10000 + (R·65536 + G·256 + B)·0,1 → 1·65536 + 134·256 + 160 = 100000 → 0 m.
export const DEM_RGB = { r: 1, g: 134, b: 160 };

/**
 * O perfil-mapa.js do rascunho: o perfil-mapa.json REAL do projeto, só com base.tiles e dem.tiles trocados pelos do
 * servidor, e window.__chaves com um MARCADOR (não a chave). Os endereços dos tiles se montam na página, a partir do
 * location.origin da cena: o servidor nunca escreve o endereço de um host de fora.
 */
export function perfilRascunhoJs(raiz, proj) {
  const arq = join(raiz, "out", proj, "_media", "_vendor", "perfil-mapa.json");
  const p = JSON.parse(readFileSync(arq, "utf8"));
  if (!p.base) throw new Error(`${arq} não tem "base"`);
  p.base = { ...p.base, tiles: ["/mapa/base/{z}/{x}/{y}"] };
  if (p.dem) p.dem = { ...p.dem, tiles: ["/mapa/dem/{z}/{x}/{y}"] };
  p.hosts = [];
  p.rascunho = true;
  const credencial = typeof p.credencial === "string" ? p.credencial : null;
  return `// Rascunho da linha do tempo (ferramentas/linha-do-tempo/mapa.mjs): NÃO é o arquivo do disco. Os tiles vêm do
// próprio servidor (sem satélite e com relevo plano), e __chaves leva um marcador, nunca uma chave.
(function () {
  var p = ${JSON.stringify(p, null, 2)};
  var o = location.origin;
  p.base.tiles = p.base.tiles.map(function (u) { return o + u; });
  if (p.dem) p.dem.tiles = p.dem.tiles.map(function (u) { return o + u; });
  p.hosts = [location.host];
  window.__REGIE_MAPA = p;
  var ch = {};${credencial ? `\n  ch[${JSON.stringify(credencial)}] = "rascunho";` : ""}
  window.__chaves = ch;
})();
`;
}

const escXml = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Cache curto em memória: a câmera pede os mesmos tiles a cada quadro que o MapLibre redesenha.
const _base = new Map();
const CACHE_MAX = 600;

/** O tile de base do rascunho (JPEG). z/x/y já validados como inteiros pelo servidor. */
export async function tileBase(z, x, y) {
  const k = `${z}/${x}/${y}`;
  if (_base.has(k)) return _base.get(k);
  const linhas = [];
  for (let i = 0; i <= TILE; i += 64) {
    const forte = i % 256 === 0;
    linhas.push(`<line x1="${i}" y1="0" x2="${i}" y2="${TILE}" stroke="#${forte ? "8a9099" : "6c727b"}" stroke-width="${forte ? 3 : 1}"/>`);
    linhas.push(`<line x1="0" y1="${i}" x2="${TILE}" y2="${i}" stroke="#${forte ? "8a9099" : "6c727b"}" stroke-width="${forte ? 3 : 1}"/>`);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${TILE}" height="${TILE}">
<rect width="${TILE}" height="${TILE}" fill="#4d525a"/>${linhas.join("")}
<text x="${TILE / 2}" y="${TILE / 2 - 10}" font-family="sans-serif" font-size="44" font-weight="700" fill="#c9ced6" text-anchor="middle">RASCUNHO</text>
<text x="${TILE / 2}" y="${TILE / 2 + 44}" font-family="sans-serif" font-size="34" fill="#c9ced6" text-anchor="middle">${escXml(k)}</text>
</svg>`;
  const buf = await sharp(Buffer.from(svg)).jpeg({ quality: 70 }).toBuffer();
  if (_base.size >= CACHE_MAX) _base.delete(_base.keys().next().value);
  _base.set(k, buf);
  return buf;
}

let _dem = null;
/** O tile de relevo do rascunho: o mesmo para todo z/x/y (plano, 0 m). WebP SEM perda, para a cor não mudar. */
export async function tileDem() {
  if (!_dem) {
    _dem = await sharp({ create: { width: TILE, height: TILE, channels: 3, background: DEM_RGB } })
      .webp({ lossless: true }).toBuffer();
  }
  return _dem;
}

// ─── os proxies ──────────────────────────────────────────────────────────────────────────────────

/** Os argumentos do ffmpeg para a cópia leve. Pura: a cor do clipe (709, faixa limitada) segue etiquetada. */
export function argsProxy(entrada, saida) {
  return ["-y", "-v", "error", "-i", entrada,
    "-vf", "scale=1920:1080:flags=bicubic,format=yuv420p",
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "20",
    // GOP de 1 s: a página arrasta e ressincroniza; num clipe só de quadros-chave a 200 Mb/s, o navegador engasgaria.
    "-g", "30", "-keyint_min", "30", "-r", "30",
    "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709", "-color_range", "tv",
    "-an", "-movflags", "+faststart", saida];
}

/**
 * Gera os proxies das cenas de mapa com clipe em dia. Pula o que já existe para esta versão (o sha1 do HTML e o
 * tamanho + a data do clipe de origem: clipe refeito com o mesmo HTML pede proxy novo). Apaga só as cópias VELHAS da
 * mesma cena feitas por esta ferramenta (o cache dela em _tmp/, fora do git).
 * @returns {Promise<{feitos:string[], pulados:{id:string, motivo:string}[], falhas:{id:string, erro:string}[]}>}
 */
export async function gerarProxies(m, raiz, linha, { cenas = null, log = () => {} } = {}) {
  const pasta = pastaProxies(raiz, linha.proj);
  const feitos = [], pulados = [], falhas = [];
  // Sem --cena: as de mapa. Com --cena: as pedidas, de qualquer tipo (o plano B de uma cena que engasga ao vivo).
  const alvo = linha.cenas.filter((c) => (cenas ? cenas.includes(c.id) : c.tipo === "mapa"));
  for (const c of alvo) {
    if (!c.clipeEmDia) { pulados.push({ id: c.id, motivo: "sem clipe 4K em dia (carimbo de outra versão, ou sem clipe)" }); continue; }
    const nome = c.proxyEsperado.split("/").pop(), saida = join(pasta, nome);
    if (existsSync(saida)) { pulados.push({ id: c.id, motivo: "o proxy desta versão já existe" }); continue; }
    mkdirSync(pasta, { recursive: true });
    const entrada = join(raiz, "out", linha.proj, "graphics", `${c.id}.mp4`);
    const parcial = saida.replace(/\.mp4$/, ".parcial.mp4");
    const t0 = Date.now();
    try {
      log(`${c.id}: cópia leve do clipe 4K…`);
      await m.rodar(m.FFMPEG(), argsProxy(entrada, parcial));
      const contar = async (arq) => Number(String(await m.rodar(m.FFPROBE(), ["-v", "error", "-select_streams", "v:0", "-count_packets",
        "-show_entries", "stream=nb_read_packets", "-of", "csv=p=0", arq])).trim().split(/[,\s]/)[0]);
      const [nOrig, nProxy] = [await contar(entrada), await contar(parcial)];
      if (!(nProxy > 0) || nProxy !== nOrig) throw new Error(`o proxy saiu com ${nProxy} quadros e o clipe tem ${nOrig}`);
      renameSync(parcial, saida);
      for (const f of readdirSync(pasta)) {
        if (f !== nome && f.startsWith(`${c.id}-`) && f.endsWith(".mp4")) rmSync(join(pasta, f), { force: true });
      }
      feitos.push(c.id);
      log(`${c.id}: ✓ ${nome} (${nProxy} quadros, ${((Date.now() - t0) / 1000).toFixed(1)} s)`);
    } catch (e) {
      rmSync(parcial, { force: true });
      falhas.push({ id: c.id, erro: e.message });
      log(`${c.id}: ✗ ${e.message}`);
    }
  }
  return { feitos, pulados, falhas };
}
