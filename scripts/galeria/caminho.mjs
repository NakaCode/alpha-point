// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/serve-galeria.mjs (linhas 461-462 e 664-691, commit 4afda12).
// O que mudou: o estúdio servia o caminho ABSOLUTO que vinha na URL (`p = decodeURIComponent(
// url.pathname)` e `existsSync(p)`), então `/etc/passwd` ou `/C:/Users/...` saía pelo servidor.
// Aqui a URL é relativa à raiz do canal e este módulo é o único portão entre a URL e o disco.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// CAMINHO — traduz o caminho de uma URL para um arquivo DENTRO da pasta do canal, ou recusa.
//
// Recusa (devolve null), nesta ordem:
//   · caminho que não decodifica (%E0%A4%A é UTF-8 quebrado) ou que traz byte nulo;
//   · contrabarra, crua ou codificada (%5c): no Windows `..\..\` é separador, e `\` numa URL não
//     tem uso legítimo nesta galeria;
//   · qualquer segmento `.` ou `..`, cru ou codificado (%2e%2e): o `new URL` já normaliza o cru,
//     mas o codificado só vira `..` DEPOIS do decode, que é quando olhamos;
//   · segmento que começa com ponto (.git, .claude, .env): nada ali é de revisar;
//   · dois-pontos em qualquer segmento: `C:` troca de unidade e `arquivo:$DATA` abre o fluxo
//     alternativo do NTFS;
//   · nome reservado do Windows (CON, NUL, COM1…), que abre um dispositivo em vez de um arquivo;
//   · segmento terminado em ponto ou espaço, que o Windows apara em silêncio (outro arquivo abriria);
//   · o que, resolvido, cai fora da raiz — inclusive por link simbólico ou junção do Windows,
//     porque a conferência final é feita no caminho REAL (realpath) dos dois lados;
//   · o que, resolvido, cai num segmento com ponto (atalho ou nome 8.3 que chega em .git).
import { realpathSync } from "node:fs";
import { isAbsolute, join, relative, resolve, sep } from "node:path";

const RESERVADO_WIN = /^(con|prn|aux|nul|com[0-9¹²³]|lpt[0-9¹²³])(\..*)?$/i;

/** Os segmentos já decodificados de um pathname, ou null se algum for proibido. Pura. */
export function segmentosSeguros(pathname) {
  let bruto = String(pathname ?? "");
  if (!bruto.startsWith("/")) return null;
  // Contrabarra codificada ou crua: recusada ANTES do decode também, para não depender de como o
  // cliente escolheu codificar. [porte Régie]
  if (/\\|%5c/i.test(bruto)) return null;
  const partes = bruto.split("/").slice(1);
  const out = [];
  for (const p of partes) {
    let s;
    try { s = decodeURIComponent(p); } catch { return null; }
    if (s === "") continue;                           // "//" ou "/" no fim: sem efeito
    if (s.includes("\0") || s.includes("\\") || s.includes("/")) return null; // %2f também: um segmento é um nome
    if (s === "." || s === "..") return null;
    if (s.startsWith(".")) return null;
    if (s.includes(":")) return null;
    if (RESERVADO_WIN.test(s)) return null;
    if (/[<>"|?*]/.test(s)) return null;              // proibidos em nome de arquivo no Windows
    if (/[. ]$/.test(s)) return null;                 // [porte Régie] o Windows apaga ponto/espaço do fim: "x." abriria "x"
    out.push(s);
  }
  return out;
}

/** Caminho real da raiz, memorizado (a raiz não muda durante a vida do servidor). */
const _raizReal = new Map();
function raizReal(raiz) {
  if (!_raizReal.has(raiz)) {
    let r = resolve(raiz);
    try { r = realpathSync.native(r); } catch { /* raiz ainda sem existir: compara o resolvido */ }
    _raizReal.set(raiz, r);
  }
  return _raizReal.get(raiz);
}

/** `alvo` está dentro de `base` (ou é a própria base)? Compara caminhos já absolutos. */
export function dentroDe(base, alvo) {
  const rel = relative(base, alvo);
  if (rel === "") return true;
  return !rel.startsWith("..") && !isAbsolute(rel) && !rel.split(sep).includes("..");
}

/**
 * Arquivo do canal que a URL pede, ou null. `existe:false` quando o caminho é legítimo mas o
 * arquivo não está no disco (o chamador responde 404, não 403).
 * @param {string} raiz      pasta do canal (absoluta)
 * @param {string} pathname  `url.pathname` CRU (ainda codificado)
 * @returns {{abs:string, rel:string, existe:boolean} | null}
 */
export function resolverNoCanal(raiz, pathname) {
  const segs = segmentosSeguros(pathname);
  if (!segs || !segs.length) return null;
  const base = resolve(raiz);
  const abs = join(base, ...segs);                    // [porte Régie] path.join, nunca concatenação com "/"
  if (!dentroDe(base, abs)) return null;
  let real;
  try { real = realpathSync.native(abs); } catch { return { abs, rel: segs.join("/"), existe: false }; }
  // Link simbólico/junção que aponta para fora do canal: o nome parece inocente, o destino não é.
  const rr = raizReal(raiz);
  if (!dentroDe(rr, real)) return null;
  // A regra do ponto vale no DESTINO, não só no nome da URL: um apelido dentro do canal
  // (`atalho -> .git`, ou o nome curto 8.3 `GIT~1` que o NTFS dá sozinho a `.git`) chegaria em
  // .git/config por um nome sem ponto. [porte Régie]
  if (relative(rr, real).split(sep).some((s) => s.startsWith("."))) return null;
  return { abs: real, rel: segs.join("/"), existe: true };
}

/** Slug de projeto ou id de cena: o que o disco do canal usa, sem nada que monte caminho. */
export const NOME_SEGURO = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;
export const nomeSeguro = (s) => typeof s === "string" && NOME_SEGURO.test(s) && !s.includes("..");
