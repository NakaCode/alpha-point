// servidor.mjs — o servidor da linha do tempo: só em 127.0.0.1, um projeto por vez (DESENHO, A.3).
//
// Rotas:
//   GET  /                          a página, com um token aleatório desta sessão
//   GET  /lt/pagina.js|pagina.css   o código da página
//   GET  /lt/motor.js               o verificarMidias do render (renderizar.mjs), para a página repetir a recusa dele
//   GET  /api/linha                 as cenas, os quadros, a versão, o tipo, o modo do mapa e o estado; e a legenda em
//                                   português: "em-dia" só se o words_sha256 dela é o do words.json servido agora (a
//                                   página ainda a recusa se esse words.json ou a narração não são os que ela carregou)
//   GET  /api/versao                o mesmo estado, leve: a página pergunta a cada 2 s
//   GET  /api/comentarios           a fila do projeto, com as notas do Claude
//   POST /api/comentar | /api/visto | /api/medida   (JSON, Origin conferido e o token da sessão)
//   GET  /mapa/{base|dem}/{z}/{x}/{y}  o tile de rascunho
//   GET  o resto                    só a lista fechada (linha.mjs, caminhoPermitido), byte a byte como está no disco;
//                                   de _tmp, só os proxies e out/<proj>/_tmp/linha-do-tempo/legenda-pt.json
//
// Travas copiadas da galeria (scripts/serve-galeria.mjs, que não as exporta): o Host (421), o Origin (403), o
// application/json (415), o método (405), o corpo até 64 KB; mais o token da sessão no POST (403). Toda resposta leva
// X-Frame-Options e frame-ancestors: um site de fora não põe a página num iframe para induzir cliques (vistos e
// comentários). A cena sai como está no disco: nada se injeta no HTML. A única resposta trocada é o
// _media/_vendor/perfil-mapa.js (o rascunho).
//
// O aparelho remoto, pelo Tailscale Serve (opção `remoto`; Lucas, 16/10/2026, "Só o meu aparelho (Recomendado)", e o
// aparelho "lucasrosa-casa"). O servidor continua ouvindo só em 127.0.0.1: quem atende a rede é o tailscaled
// (`tailscale serve --bg --http=<porta> http://127.0.0.1:<porta>`), que repassa daqui de 127.0.0.1, com o Host do nome
// do PC no tailnet. Medido em 16/10 (eco na 8799): o Serve TROCA o Tailscale-User-Login e o X-Forwarded-For que o cliente
// mandar pelos verdadeiros, e pedido pelo IP ou com outro Host dá 404 nele, sem chegar aqui. Pedido remoto (Host do
// tailnet, ou qualquer cabeçalho que só o Serve põe) só passa com o IP do aparelho E o login do dono dele; sem `remoto`,
// tudo isso dá 421, como antes.
import { createServer } from "node:http";
import { createReadStream, readFileSync, statSync } from "node:fs";
import { extname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";
import {
  caminhoPermitido, comentariosDoProjeto, estadoDoProjeto, lerLinha, raizReal, registrarComentario, registrarMedida, registrarVisto,
} from "./linha.mjs";
import { perfilRascunhoJs, tileBase, tileDem } from "./mapa.mjs";
import { estadoDaLegenda } from "./legenda.mjs";

export const HOST = "127.0.0.1";
export const PORTA_PADRAO = 8790;
const CORPO_MAX = 64 * 1024;
const PASTA_PAGINA = fileURLToPath(new URL(".", import.meta.url));

// A tabela MIME da galeria (serve-galeria.mjs:71-78), copiada: lá não é exportada.
const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8", ".geojson": "application/geo+json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".avif": "image/avif", ".gif": "image/gif", ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf", ".otf": "font/otf",
  ".mp4": "video/mp4", ".webm": "video/webm", ".mov": "video/quicktime", ".m4a": "audio/mp4", ".mp3": "audio/mpeg",
  ".aac": "audio/aac", ".wav": "audio/wav", ".txt": "text/plain; charset=utf-8",
};
const COM_RANGE = new Set([".mp4", ".mov", ".webm", ".m4a", ".mp3", ".wav", ".aac"]);
// O que muda pouco e pesa (o maplibre de 800 KB, as fontes): guarda 1 h. Foto, documento e geometria se revalidam a
// cada pedido (ETag, 304): trocar uma foto no mesmo nome tem de aparecer na próxima carga da cena.
const GUARDA_LONGA = /^marca\/fontes\/|^out\/[^/]+\/_media\/_vendor\//i;

function responder(res, status, corpo, tipo = "text/plain; charset=utf-8") {
  res.statusCode = status;
  res.setHeader("content-type", tipo);
  res.end(corpo);
}
const json = (res, status, v) => { res.setHeader("Cache-Control", "no-store"); responder(res, status, JSON.stringify(v), "application/json; charset=utf-8"); };

// servirRange da galeria (serve-galeria.mjs:93-125), copiado: lá não é exportado. Mídia NÃO pode ir no-store (o
// <video> fica em readyState 0, o preto que o estúdio mediu); vai com cache curto, ETag e Last-Modified.
function servirRange(req, res, arq, mime, etagDe) {
  const st = statSync(arq), size = st.size, range = req.headers.range, etag = etagDe(st);
  res.setHeader("Content-Type", mime); res.setHeader("Accept-Ranges", "bytes");
  res.setHeader("Cache-Control", "private, max-age=3600");
  res.setHeader("ETag", etag); res.setHeader("Last-Modified", new Date(st.mtimeMs).toUTCString());
  if (!range && String(req.headers["if-none-match"] || "").split(/\s*,\s*/).includes(etag)) { res.statusCode = 304; return res.end(); }
  if (range && req.headers["if-range"] && req.headers["if-range"] !== etag) {
    res.statusCode = 200; res.setHeader("Content-Length", size);
    if (req.method === "HEAD") return res.end();
    return createReadStream(arq).on("error", () => res.destroy()).pipe(res);
  }
  if (range) {
    const mm = /^bytes=(\d*)-(\d*)/.exec(range) || [];
    let start, end;
    if (mm[1] === "" && mm[2]) { start = Math.max(0, size - parseInt(mm[2], 10)); end = size - 1; }
    else { start = mm[1] ? parseInt(mm[1], 10) : 0; end = mm[2] ? parseInt(mm[2], 10) : size - 1; }
    if (!Number.isFinite(start) || start < 0) start = 0;
    if (!Number.isFinite(end) || end >= size) end = size - 1;
    if (start > end || start >= size) { res.statusCode = 416; res.setHeader("Content-Range", `bytes */${size}`); return res.end(); }
    res.statusCode = 206; res.setHeader("Content-Range", `bytes ${start}-${end}/${size}`); res.setHeader("Content-Length", end - start + 1);
    if (req.method === "HEAD") return res.end();
    return createReadStream(arq, { start, end }).on("error", () => res.destroy()).pipe(res);
  }
  res.statusCode = 200; res.setHeader("Content-Length", size);
  if (req.method === "HEAD") return res.end();
  createReadStream(arq).on("error", () => res.destroy()).pipe(res);
}

/** Arquivo comum com ETag: 304 quando o navegador já tem esta versão. */
function servirArquivo(req, res, arq, st, mime, cache, etagDe) {
  const etag = etagDe(st);
  res.setHeader("Content-Type", mime);
  res.setHeader("Cache-Control", cache);
  res.setHeader("ETag", etag); res.setHeader("Last-Modified", new Date(st.mtimeMs).toUTCString());
  if (String(req.headers["if-none-match"] || "").split(/\s*,\s*/).includes(etag)) { res.statusCode = 304; return res.end(); }
  res.statusCode = 200; res.setHeader("Content-Length", st.size);
  if (req.method === "HEAD") return res.end();
  createReadStream(arq).on("error", () => res.destroy()).pipe(res);
}

function lerCorpo(req) {
  return new Promise((ok, falha) => {
    let tam = 0; const partes = [];
    // Acima do teto: para de ler e responde 413 (a conexão fecha depois da resposta, não antes: senão o 413 se perde).
    req.on("data", (d) => { tam += d.length; if (tam > CORPO_MAX) { req.pause(); falha(Object.assign(new Error("corpo grande demais"), { status: 413 })); } else partes.push(d); });
    req.on("end", () => ok(Buffer.concat(partes).toString("utf8")));
    req.on("error", falha);
  });
}

/** O estado que vai à página: tira o que ela não usa (o caminho do HTML no disco, o carimbo cru). */
function paraPagina(est, { proj }) {
  const v = (rel, ver) => `/${rel.split("/").map(encodeURIComponent).join("/")}${ver ? `?v=${ver}` : ""}`;
  let narrVer = "";
  try { const st = statSync(join(est.raiz, ...est.narracao.split("/"))); narrVer = `${st.size.toString(36)}-${Math.floor(st.mtimeMs).toString(36)}`; } catch {}
  // O estado da legenda traz sempre o words_sha256 do words.json de agora (mesmo sem legenda montada): a página o guarda na
  // partida como o do words.json que ela carregou, e a url do words.json leva os 12 primeiros, como a da narração leva a dela.
  const lg = estadoDaLegenda(est.raiz, proj);
  return {
    proj, fps: 30, totalQuadros: est.totalQuadros, duracao: est.duracao,
    narracao: v(est.narracao, narrVer), words: est.words ? v(est.words, lg.words_sha256 ? lg.words_sha256.slice(0, 12) : "") : null,
    assinatura: `${est.espelhoMtime}-${est.totalQuadros}-${est.cenas.map((c) => `${c.id}:${c.ini}:${c.fim}`).join(",")}`,
    cenas: est.cenas.map((c) => ({
      id: c.id, ini: c.ini, fim: c.fim, n: c.n, tipo: c.tipo, sha1: c.sha1, versao: c.versao, erro: c.erro || null,
      url: c.html ? v(c.html, c.sha1.slice(0, 8)) : null, palco: c.palco || null,
      modoMapa: c.modoMapa, motivoMapa: c.motivoMapa, avisoRelevo: !!c.avisoRelevo,
      proxy: c.proxy ? v(c.proxy) : null, clipeEmDia: !!c.clipeEmDia,
      visto: c.visto, vistoModo: c.vistoModo, abertos: c.abertos, aprovada: c.aprovada,
    })),
    resumo: est.resumo, fundidas: est.fundidas,
    // A legenda em português (legenda.mjs; Lucas, 22/10/2026): a página só a mostra no "em-dia", só se este words_sha256 é
    // o que ela guardou na partida e a narração é a que ela tocou, e confere de novo o words_sha256 do arquivo que baixar.
    // A url leva a versão (o words_sha256 dela, o tamanho e a data).
    legenda: { estado: lg.estado, motivo: lg.motivo, detalhe: lg.detalhe, words_sha256: lg.words_sha256,
      url: lg.estado === "em-dia" && lg.rel ? v(lg.rel, lg.ver) : null },
  };
}

/**
 * Cria o servidor (não chama listen). Exportado para a prova (provar.mjs), que o sobe no próprio processo.
 * `remoto`: {hosts: ["<nome no tailnet>:<porta>"], ip: "<IP do aparelho no tailnet>", login: "<login do dono>"}, ou null.
 * @param {{m:object, raiz:string, proj:string, forcarRascunho?:Set<string>, log?:Function, remoto?:object|null}} op
 */
export function criarServidor({ m, raiz, proj, forcarRascunho = new Set(), log = () => {}, remoto = null }) {
  const R = remoto ? {
    hosts: remoto.hosts.map((h) => String(h).toLowerCase()),
    ips: [].concat(remoto.ip).map((x) => String(x).trim().toLowerCase()).filter(Boolean),   // o IPv4 e o IPv6 do aparelho
    login: String(remoto.login).trim().toLowerCase(),
  } : null;
  if (R && (!R.hosts.length || !R.ips.length || !R.login)) throw new Error("remoto sem hosts, ip ou login");
  const token = randomBytes(24).toString("hex");
  const paginaHtml = () => readFileSync(join(PASTA_PAGINA, "pagina.html"), "utf8")
    .replaceAll("__TOKEN__", token).replaceAll("__PROJ__", proj.replace(/[^A-Za-z0-9._-]/g, ""));
  const estado = () => { const e = estadoDoProjeto(m, raiz, proj, { forcarRascunho }); e.raiz = raiz; return e; };
  const rr = raizReal(raiz);
  // A lista fechada pede as cenas da linha; mídia vem em muitos pedidos (Range), então a linha se relê no máximo 1×/s.
  let _lista = { t: 0, v: null };
  const listaFechada = () => {
    if (!_lista.v || Date.now() - _lista.t > 1000) {
      const l = lerLinha(m, raiz, proj, { forcarRascunho });
      _lista = { t: Date.now(), v: { ids: new Set(l.cenas.map((c) => c.id)), narracao: l.narracao } };
    }
    return _lista.v;
  };

  const servidor = createServer(async (req, res) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "no-referrer");
    // Só a própria origem enquadra: a página põe as cenas num iframe; ninguém de fora põe a página.
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Content-Security-Policy", "frame-ancestors 'self'");
    // DNS rebinding: só o endereço que nós imprimimos (serve-galeria.mjs:168-171).
    const porta = servidor.address()?.port;
    const hostPedido = String(req.headers.host || "").toLowerCase();
    let hostsOk = [`127.0.0.1:${porta}`, `localhost:${porta}`];
    // Remoto: o Host do tailnet, ou um cabeçalho que só o Tailscale Serve põe (o navegador deste PC não manda nenhum).
    const peloServe = ["tailscale-user-login", "tailscale-headers-info", "x-forwarded-for", "x-forwarded-host"].some((h) => h in req.headers);
    if (peloServe || (R && R.hosts.includes(hostPedido))) {
      if (!R || !R.hosts.includes(hostPedido)) return responder(res, 421, "host não atendido");
      const daqui = ["127.0.0.1", "::1", "::ffff:127.0.0.1"].includes(req.socket.remoteAddress);
      const ip = String(req.headers["x-forwarded-for"] || "").trim().toLowerCase();
      const login = String(req.headers["tailscale-user-login"] || "").trim().toLowerCase();
      if (!daqui || !R.ips.includes(ip) || login !== R.login) return responder(res, 403, "aparelho não atendido");
      hostsOk = R.hosts;
    } else if (!hostsOk.includes(hostPedido)) return responder(res, 421, "host não atendido");

    const cru = String(req.url || "/").split("#")[0];
    const iq = cru.indexOf("?");
    const pathnameCru = iq >= 0 ? cru.slice(0, iq) : cru;   // CRU: o new URL normalizaria ../ e esconderia a tentativa

    try {
      if (req.method === "POST") {
        const rotas = { "/api/comentar": registrarComentario, "/api/visto": registrarVisto, "/api/medida": null };
        if (!(pathnameCru in rotas)) return responder(res, 404, "404");
        const origem = req.headers.origin;
        if (origem && !hostsOk.map((h) => `http://${h}`).includes(String(origem).toLowerCase())) return responder(res, 403, "origem não atendida");
        // application/json obriga o navegador a um preflight que este servidor não responde (serve-galeria.mjs:183-185).
        if (!/^application\/json\b/i.test(String(req.headers["content-type"] || ""))) return responder(res, 415, "envie application/json");
        if (req.headers["x-lt-token"] !== token) return responder(res, 403, "token da sessão ausente ou errado: recarregue a página");
        let d;
        try { d = JSON.parse(await lerCorpo(req)); }
        catch (e) {
          if (e.status === 413) { res.setHeader("Connection", "close"); res.on("finish", () => req.destroy()); }
          return responder(res, e.status || 400, e.status ? e.message : "JSON inválido");
        }
        const est = estado();
        let r;
        if (pathnameCru === "/api/medida") r = registrarMedida(raiz, est, d);
        else r = rotas[pathnameCru](m, raiz, est, d);
        if (r.status === 200 && pathnameCru === "/api/comentar") log(`💬 ${proj}/${d.cena}: comentário na fila`);
        if (r.status === 200 && pathnameCru === "/api/visto") log(`✓ ${proj}/${d.cena}: vista nesta versão`);
        return json(res, r.status, r.corpo);
      }
      if (req.method !== "GET" && req.method !== "HEAD") { res.setHeader("Allow", "GET, HEAD, POST"); return responder(res, 405, "método não atendido"); }

      if (pathnameCru === "/" || pathnameCru === "") {
        res.setHeader("Cache-Control", "no-store");
        return responder(res, 200, req.method === "HEAD" ? "" : paginaHtml(), "text/html; charset=utf-8");
      }
      if (pathnameCru === "/lt/pagina.js" || pathnameCru === "/lt/pagina.css") {
        const arq = join(PASTA_PAGINA, pathnameCru.slice(4));
        res.setHeader("Cache-Control", "no-store");
        return responder(res, 200, req.method === "HEAD" ? "" : readFileSync(arq), MIME[extname(arq)]);
      }
      if (pathnameCru === "/lt/motor.js") {
        // A mesma varredura de mídia do render (img que não decodificou, <image> do SVG, <video> sem dados), por
        // toString: ela é autocontida e roda dentro da página, como no render.
        res.setHeader("Cache-Control", "no-store");
        return responder(res, 200, req.method === "HEAD" ? "" : `window.__LT_verificarMidias = (${m.verificarMidias.toString()});
`, MIME[".js"]);
      }
      if (pathnameCru === "/favicon.ico") { res.statusCode = 204; return res.end(); }
      if (pathnameCru === "/api/linha" || pathnameCru === "/api/versao") return json(res, 200, paraPagina(estado(), { proj }));
      if (pathnameCru === "/api/comentarios") return json(res, 200, comentariosDoProjeto(m, raiz, proj));
      if (pathnameCru.startsWith("/api/")) return responder(res, 404, "404");

      const tm = /^\/mapa\/(base|dem)\/(\d{1,2})\/(\d{1,7})\/(\d{1,7})$/.exec(pathnameCru);
      if (tm) {
        const [z, x, y] = [+tm[2], +tm[3], +tm[4]];
        if (z > 22 || x >= 2 ** z || y >= 2 ** z) return responder(res, 404, "tile fora da grade");
        const buf = tm[1] === "base" ? await tileBase(z, x, y) : await tileDem();
        res.setHeader("Cache-Control", "private, max-age=3600");
        res.setHeader("Content-Length", buf.length);
        return responder(res, 200, req.method === "HEAD" ? "" : buf, tm[1] === "base" ? "image/jpeg" : "image/webp");
      }
      if (pathnameCru.startsWith("/mapa/")) return responder(res, 404, "404");

      // Arquivo do canal: o portão de caminho do molde (realpath, regra do ponto, nomes do Windows) e, depois dele, a
      // lista fechada sobre o caminho REAL, em minúsculas.
      const alvo = m.resolverNoCanal(raiz, pathnameCru);
      if (!alvo) return responder(res, 403, "caminho fora do canal");
      const relReal = alvo.existe ? relative(rr, alvo.abs).split(sep).join("/") : alvo.rel;
      const { ids, narracao } = listaFechada();
      if (!caminhoPermitido(relReal, { proj, ids, narracao })) return responder(res, 404, "404");
      let st;
      try { st = alvo.existe ? statSync(alvo.abs) : null; } catch { st = null; }
      if (!st || !st.isFile()) return responder(res, 404, "404");
      const ext = extname(alvo.abs).toLowerCase();
      if (/^out\/[^/]+\/_media\/_vendor\/perfil-mapa\.js$/i.test(relReal)) {
        // O rascunho de mapa: sempre. A cena de mapa com clipe em dia toca o proxy e nem carrega o HTML; se carregar
        // (plano B, --forcar-rascunho), sai em rascunho também, e nunca pede tile pago.
        res.setHeader("Cache-Control", "no-store");
        return responder(res, 200, req.method === "HEAD" ? "" : perfilRascunhoJs(raiz, proj), MIME[".js"]);
      }
      if (COM_RANGE.has(ext)) return servirRange(req, res, alvo.abs, MIME[ext], m.etagDe);
      if (ext === ".html") {
        res.setHeader("Cache-Control", "no-store");
        res.statusCode = 200; res.setHeader("content-type", MIME[".html"]); res.setHeader("Content-Length", st.size);
        if (req.method === "HEAD") return res.end();
        return createReadStream(alvo.abs).on("error", () => res.destroy()).pipe(res);
      }
      return servirArquivo(req, res, alvo.abs, st, MIME[ext] || "application/octet-stream",
        GUARDA_LONGA.test(relReal) ? "private, max-age=3600" : "private, no-cache", m.etagDe);
    } catch (e) {
      log(`✗ ${req.method} ${pathnameCru}: ${e.message}`);
      if (!res.headersSent) responder(res, 500, "erro interno da linha do tempo: " + e.message);
      else res.destroy();
    }
  });
  return { servidor, token };
}
