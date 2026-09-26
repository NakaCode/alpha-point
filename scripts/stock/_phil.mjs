#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/_phil.mjs (linhas 1-136, commit 4afda12).
// O que mudou: (1) o User-Agent de navegador deixou de dizer "Macintosh" (o PHIL é ASP.NET e quer
// UA de navegador; o do Windows é o que o PC do canal de fato roda); (2) o ano da ficha: o estúdio
// lia lblCreationDate/lblDate, e o PHIL serve `lblCretDt` — medido na ficha gravada em 23/09/2026
// (testes/fixtures/midia-canal/phil-ficha.html), o campo `ano` saía SEMPRE vazio; (3) o download
// grava em fluxo, com tmp + rename, e recusa corpo que não é imagem (HTML de erro com nome .tif);
// (4) destino relativo à pasta atual, com acento e espaço; (5) funções de leitura exportadas e rede
// injetável para o teste (principal()). A lógica de formulário, paginação e domínio final ficou igual.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// CDC PHIL (Public Health Image Library) — BUSCA + FICHA + DOWNLOAD hi-res.
// Acervo público federal dos EUA: a esmagadora maioria é DOMÍNIO PÚBLICO (o PHIL declara o
// "Copyright Restrictions" por item — este script LÊ o campo e o devolve, nunca o presume).
//
// uso:
//   node scripts/stock/_phil.mjs busca "<termo>" [--n=40] [--paginas=N] [--fichas]
//   node scripts/stock/_phil.mjs ficha <pid...>
//   node scripts/stock/_phil.mjs baixar <pid> <destino.tif|.jpg>
//
// ⚠️ O botão "hi-resolution" da página é um __doPostBack do ASP.NET, mas o arquivo mora numa URL
//    estável: /PHIL_Images/<pid>/<pid>.tif  (o lores é <pid>_lores.jpg). Medido 09/ago/2026.
//
// ⚠️⚠️ O DOMÍNIO MUDOU (medido 09/ago/2026): `phil.cdc.gov` responde 200, serve o formulário
//    inteiro e REDIRECIONA o POST para `wwwn.cdc.gov/phil/` — e o 302 vira GET, então a busca
//    voltava a MESMA página de formulário e o parser achava 0 pids. Falha silenciosa perfeita:
//    HTTP 200, HTML de 172 kB, `encontrados: 0`, indistinguível de "o CDC não tem esse bicho".
//    Custou uma conclusão falsa de "PHIL não tem pulga" (o acervo tem 16). BASE tem que ser o
//    domínio FINAL — nunca o que redireciona, porque redirect de POST perde o corpo.
import { closeSync, createWriteStream, mkdirSync, openSync, readSync, rmSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { ehPrincipal, opcao, posicionais } from "./lib/ferramentas.mjs";
import { importarDoMotor } from "../lib/motor.mjs";

// [porte Regie] UA de navegador do Windows (o do estúdio dizia Macintosh)
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140 Safari/537.36";
export const BASE = "https://wwwn.cdc.gov/phil";

export const strip = (s = "") => s.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
  .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/\s+/g, " ").trim();

export const hidden = (html, name) => {
  const re = new RegExp(`<input[^>]*name="${name}"[^>]*value="([^"]*)"`, "i");
  const m = html.match(re) || html.match(new RegExp(`<input[^>]*value="([^"]*)"[^>]*name="${name}"`, "i"));
  return m ? m[1] : "";
};

/** [porte Regie] o que a página de resultado diz — puro, testado contra a resposta gravada. */
export function lerResultado(h) {
  return {
    total: +((h.match(/([\d,]+) images? found/i) || [])[1] || "0").replace(/,/g, "") || 0,
    totalPags: +((h.match(/images? found\s*-\s*(\d+) pages?/i) || [])[1] || "1"),
    pids: [...new Set([...h.matchAll(/PHIL_Images\/(\d+)\//g)].map((m) => m[1]))],
  };
}

/** [porte Regie] a ficha a partir do HTML — pura. */
export function lerFicha(h, pid) {
  const campo = (id) => { const m = h.match(new RegExp(`id="${id}"[^>]*>([\\s\\S]*?)</span>`, "i")); return m ? strip(m[1]) : ""; };
  const hiresMB = (h.match(/hi-resolution image \(([\d.]+ [KM]B)\)/i) || [])[1] || "";
  return {
    pid: String(pid),
    pagina: `${BASE}/Details.aspx?pid=${pid}`,
    legenda: campo("lblDesc"),
    provedor: campo("lblContprov"),
    creditos: campo("lblPhotoCredit") || campo("lblCredit"),
    copyright: campo("lblCopyright") || campo("lblCopyRight"),
    // [porte Regie] lblCretDt é o id que o PHIL serve hoje (medido 23/09/2026); os outros ficam de reserva
    ano: campo("lblCretDt") || campo("lblCreationDate") || campo("lblDate"),
    hires: hiresMB,
    tif: `${BASE}/PHIL_Images/${pid}/${pid}.tif`,
    jpg: `${BASE}/PHIL_Images/${pid}/${pid}_lores.jpg`,
  };
}

// ⚠️ A grade do PHIL entrega 16 por página e NÃO traz legenda nenhuma — só o pid e o thumb.
//    Uma busca que devolve "16" está devolvendo A PRIMEIRA PÁGINA, não o acervo: "flea" tem 326
//    imagens em 21 páginas. Sem `--paginas`, quem lê o 16 conclui que o CDC mal tem o bicho.
export async function buscar(termo, n, paginas = 1, { fetch = globalThis.fetch } = {}) {
  // 1) pega o formulário e os tokens
  const r0 = await fetch(`${BASE}/Quicksearch.aspx`, { headers: { "User-Agent": UA } });
  let h = await r0.text();
  const cookies = (r0.headers.getSetCookie?.() || []).map((c) => c.split(";")[0]).join("; ");
  const post = async (extra) => {
    const body = new URLSearchParams({
      __EVENTTARGET: "", __EVENTARGUMENT: "", __LASTFOCUS: "",
      __VIEWSTATE: hidden(h, "__VIEWSTATE"),
      __VIEWSTATEGENERATOR: hidden(h, "__VIEWSTATEGENERATOR"),
      __EVENTVALIDATION: hidden(h, "__EVENTVALIDATION"),
      "ctl00$contentArea2$ucQuickSearch$txtQuickKeywords": termo,
      "ctl00$contentArea2$ucQuickSearch$chkTypes$chkTypes_0": "on", // still images
      ...extra,
    });
    const r = await fetch(`${BASE}/Quicksearch.aspx`, {
      method: "POST", redirect: "follow",
      headers: {
        "User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded",
        Referer: `${BASE}/Quicksearch.aspx`, Cookie: cookies,
      },
      body,
    });
    h = await r.text();
    return h;
  };
  await post({ "ctl00$contentArea2$ucQuickSearch$bntSearch": "Search" });
  const { total, totalPags, pids: primeira } = lerResultado(h);
  const pids = new Set(primeira);
  // paginação: o "próximo" é um __doPostBack no dpImages; ctl02..ctlNN são os números de página
  const alvoPag = (i) => `ctl00$contentArea2$ucQuickSearch$ucDisplayImages1$dpImages$ctl00$ctl${String(i).padStart(2, "0")}`;
  for (let p = 2; p <= Math.min(paginas, totalPags) && pids.size < n; p++) {
    // o índice do controle acompanha o número da página enquanto ela está na régua visível
    const idx = Math.min(p, 10);
    await post({ __EVENTTARGET: alvoPag(idx), __EVENTARGUMENT: "" });
    const antes = pids.size;
    for (const pid of lerResultado(h).pids) pids.add(pid);
    if (pids.size === antes) break; // não avançou: para em vez de girar em falso
  }
  const itens = [];
  for (const pid of [...pids].slice(0, n)) itens.push({ pid, pagina: `${BASE}/Details.aspx?pid=${pid}` });
  return { termo, total_no_acervo: total, paginas_no_acervo: totalPags, encontrados: pids.size, itens };
}

export async function ficha(pid, { fetch = globalThis.fetch } = {}) {
  const r = await fetch(`${BASE}/Details.aspx?pid=${pid}`, { headers: { "User-Agent": UA } });
  return lerFicha(await r.text(), pid);
}

/** [porte Regie] os primeiros bytes são de imagem (TIFF/JPEG/PNG)? HTML de erro com nome .tif não passa. */
export function pareceImagem(buf) {
  if (!buf || buf.length < 4) return false;
  const b = buf;
  return (b[0] === 0x49 && b[1] === 0x49 && b[2] === 0x2a) || (b[0] === 0x4d && b[1] === 0x4d && b[3] === 0x2a) // TIFF II*/MM*
    || (b[0] === 0xff && b[1] === 0xd8) || (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47);
}

export async function baixar(pid, destino, { fetch = globalThis.fetch, log = console.log } = {}) {
  const url = destino.toLowerCase().endsWith(".tif") ? `${BASE}/PHIL_Images/${pid}/${pid}.tif`
    : `${BASE}/PHIL_Images/${pid}/${pid}_lores.jpg`;
  const r = await fetch(url, { headers: { "User-Agent": UA, Referer: `${BASE}/Details.aspx?pid=${pid}` } });
  if (!r.ok || !r.body) { console.error(`x ${pid}: HTTP ${r.status}`); return 1; }
  mkdirSync(dirname(destino), { recursive: true });
  // [porte Regie] em fluxo (o .tif do PHIL passa de 30 MB) e só vira arquivo depois de conferido
  const parte = `${destino}.part`;
  // [porte Regie] rede que cai no meio, ou rename que o Defender segura: o .part SAI em qualquer falha
  // (sobrava lixo na pasta de destino), e o rename tem a nova tentativa do motor (EPERM/EBUSY).
  const { renomearComRetentativa } = await importarDoMotor("src/midia/arquivos.mjs");
  try {
    await pipeline(Readable.fromWeb(r.body), createWriteStream(parte));
    const cab = Buffer.alloc(8); const fd = openSync(parte, "r"); const lidos = readSync(fd, cab, 0, 8, 0); closeSync(fd);
    if (!pareceImagem(cab.subarray(0, lidos))) {
      console.error(`x ${pid}: o servidor devolveu algo que nao e imagem (pagina de erro?) — nada gravado`);
      return 1;
    }
    renomearComRetentativa(parte, destino);
  } finally {
    rmSync(parte, { force: true });
  }
  log(`ok ${destino} (${(statSync(destino).size / 1e6).toFixed(1)} MB) <- ${url}`);
  return 0;
}

export async function principal(argv = process.argv.slice(2), { raiz = process.cwd(), fetch = globalThis.fetch, log = console.log } = {}) {
  const livres = posicionais(argv);
  const CMD = livres[0];
  if (CMD === "busca") {
    const termo = livres.slice(1).join(" ");
    const res = await buscar(termo, +opcao(argv, "n", "40"), +opcao(argv, "paginas", "1"), { fetch });
    // --fichas: sem a legenda a busca é uma lista de números — e escolher micrografia por número
    // é escolher no escuro. A ficha é onde mora a ESPÉCIE, que é o que este acervo tem de melhor.
    if (argv.includes("--fichas")) {
      const out = [];
      for (const it of res.itens) { try { out.push(await ficha(it.pid, { fetch })); } catch { out.push({ pid: it.pid, erro: "ficha falhou" }); } }
      res.itens = out;
    }
    log(JSON.stringify(res, null, 1));
    return 0;
  }
  if (CMD === "ficha") {
    const out = [];
    for (const pid of livres.slice(1)) out.push(await ficha(pid, { fetch }));
    log(JSON.stringify(out, null, 1));
    return 0;
  }
  if (CMD === "baixar" && livres[1] && livres[2]) return baixar(livres[1], resolve(raiz, livres[2]), { fetch, log });
  console.error('uso: _phil.mjs busca "<termo>" [--n=40] [--paginas=N] [--fichas] | ficha <pid...> | baixar <pid> <destino>');
  return 2;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
