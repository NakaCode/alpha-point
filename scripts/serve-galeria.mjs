#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/serve-galeria.mjs (linhas 1-692, commit 4afda12). Repartido em
// scripts/galeria/{caminho,fila,projeto,paginas}.mjs; este arquivo é o servidor e a linha de comando.
// O que mudou:
//   · só 127.0.0.1 (o estúdio ouvia em todas as interfaces), porta por --porta, e o Host/Origin de
//     cada pedido conferido — página de fora não fala com a galeria; [porte Régie]
//   · a URL é relativa à raiz do canal e nada sai dela (ver galeria/caminho.mjs); [porte Régie]
//   · a fila é out/_feedback-queue.jsonl, com id e status por linha, sem estudio.db,
//     scripts/db/feedback.mjs, _conserto-fila.jsonl nem _claude-resp.jsonl (ver galeria/fila.mjs); [porte Régie]
//   · window.__PREVIEW = true injetado no <head> da cena servida (antes, no onload do iframe); [porte Régie]
//   · SAIU, sem substituto aqui: o fallback que baixava do bucket gs://… sob demanda (gsutil), a
//     timeline "Premiere no navegador" (/timeline, /api/timeline, /api/edicao, /api/ajuste, /clipe,
//     /api/conserto, com scripts/edicao.mjs, scripts/ajustes.mjs, src/cortes.mjs e _proxies/), o
//     upload de arquivo (/upload) e o corte de áudio por ffmpeg (/narracao). O porquê de cada um
//     está em ORIGEM/de_para da integração; em resumo: a montagem da Régie sai no XML do Premiere
//     e o dono ajusta a timeline no próprio Premiere. [porte Régie]
// Dependência npm: nenhuma (node:http puro).
// ─────────────────────────────────────────────────────────────────────────────────────────────
//
// ══ PARA O CLAUDE DO CANAL — leia antes de abrir a galeria ════════════════════════════════════
//
// O que é: a galeria de revisão. O dono do canal abre no navegador, vê cada cena HTML AO VIVO (em
// laço, sem render) ao lado do trecho exato da narração, e marca "@12.3s o texto some cedo". Cada
// marca vira uma linha em out/_feedback-queue.jsonl. É OPCIONAL: nunca trava a linha de produção —
// se o dono não abrir, nada espera por ela.
//
// ABRIR (na raiz do canal, num terminal que fica aberto; Ctrl+C fecha):
//     node scripts/serve-galeria.mjs <proj>            → http://127.0.0.1:8777/?p=<proj>
//     node scripts/serve-galeria.mjs <proj> --porta=8778   (segunda galeria sem derrubar a primeira)
//     node scripts/serve-galeria.mjs                   → todos os projetos com cena no disco
//   Dê o endereço impresso ao dono. "a porta já está em uso" quase sempre quer dizer que a galeria
//   JÁ está aberta: não mate o processo que está servindo o dono no meio da revisão.
//
// PROCESSAR A FILA (em ORDEM, sem perguntar "e agora?"):
//     node scripts/serve-galeria.mjs --fila [<proj>]        lista as marcas abertas, a mais antiga primeiro
//     node scripts/serve-galeria.mjs --fila --json          o mesmo, uma marca JSON por linha
//   Para CADA marca, nesta ordem:
//     1. marque que pegou:   node scripts/serve-galeria.mjs --marcar <id> em_curso
//     2. OLHE o frame no instante marcado ANTES de editar qualquer coisa — a marca quase sempre
//        descreve uma versão ANTIGA da cena, e a atual quase sempre já atende:
//          node scripts/shot.mjs out/<proj>/graphics/<cena>.html <t> out/<proj>/_shots/<cena>@<t>.png
//        (marca sem instante = "cena inteira": tire 3 frames, começo/meio/fim);
//     3. decida como o revisor-criativo (os três vereditos) e feche com a nota que o dono vai ler
//        embaixo da marca, na galeria:
//          node scripts/serve-galeria.mjs --marcar <id> preservada "a versão atual já tira o texto em 14s"
//          node scripts/serve-galeria.mjs --marcar <id> ajustada   "rótulo subiu 40px; resto intacto"
//          node scripts/serve-galeria.mjs --marcar <id> recriar    "briefing em out/<proj>/…"
//        "recriar" NÃO fecha a marca (SIS-89: encaminhado não é terminal) — ela continua no --fila
//        até quem refez a cena fechar com o arquivo novo na nota:
//          node scripts/serve-galeria.mjs --marcar <id> recriada   "cena nova em out/<proj>/graphics/<id>.html"
//   "preservada" com a justificativa é resposta legítima. Nunca apague nem reescreva o arquivo da
//   fila: mudar status é apendar (o --marcar faz isso), e a galeria pode estar gravando ao mesmo tempo.
// ═══════════════════════════════════════════════════════════════════════════════════════════════
import { createServer } from "node:http";
import { createReadStream, readFileSync, realpathSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { resolverNoCanal, nomeSeguro } from "./galeria/caminho.mjs";
import { ARQ_FILA, STATUS, STATUS_ABERTOS, STATUS_FECHADOS, TEXTO_MAX, abertas, gravarComentario, lerFila, lerFilaMemo, marcarStatus } from "./galeria/fila.mjs";
import { cenasDoProjeto, listarProjetos, narracaoDoProjeto, palcoDaCena, trechoDaCena } from "./galeria/projeto.mjs";
import { injetarPreview, paginaIndice, paginaPlayer } from "./galeria/paginas.mjs";

// Raiz do canal: scripts/ -> .. (fileURLToPath, nunca URL.pathname: no Windows o pathname vem
// "/C:/..." e com espaço vira %20). [porte Régie]
export const RAIZ_CANAL = fileURLToPath(new URL("..", import.meta.url));
export const PORTA_PADRAO = 8777;
const HOST = "127.0.0.1";                         // [porte Régie] nunca 0.0.0.0: a galeria é do dono, nesta máquina
const CORPO_MAX = 64 * 1024;

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8", ".geojson": "application/geo+json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".avif": "image/avif", ".gif": "image/gif", ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf", ".otf": "font/otf",
  ".mp4": "video/mp4", ".webm": "video/webm", ".mov": "video/quicktime", ".m4a": "audio/mp4", ".mp3": "audio/mpeg",
  ".aac": "audio/aac", ".wav": "audio/wav", ".txt": "text/plain; charset=utf-8",
};
// Mídia vai por Range (206): <video>/<audio> só buscam e arrastam com ele. ⚠ .mp3/.wav TÊM de estar
// aqui — sem Range o navegador não consegue posicionar o áudio (o estúdio mediu a trilha travada em 0).
const COM_RANGE = new Set([".mp4", ".mov", ".webm", ".m4a", ".mp3", ".wav", ".aac"]);

function responder(res, status, corpo, tipo = "text/plain; charset=utf-8") {
  res.statusCode = status;
  res.setHeader("content-type", tipo);
  res.end(corpo);
}
const json = (res, status, v) => responder(res, status, JSON.stringify(v), "application/json; charset=utf-8");

/** Validador da mídia: muda quando o arquivo é regravado no MESMO nome (tamanho ou mtime). */
export const etagDe = (st) => `"${st.size.toString(36)}-${Math.floor(st.mtimeMs).toString(36)}"`;

function servirRange(req, res, arq, mime) {
  const st = statSync(arq), size = st.size, range = req.headers.range, etag = etagDe(st);
  res.setHeader("Content-Type", mime); res.setHeader("Accept-Ranges", "bytes");
  // ⚠ MÍDIA NÃO PODE SER no-store: sem guardar os pedaços que baixou, o <video> fica em `stalled`
  // com readyState 0 para sempre — o preview PRETO que o estúdio mediu. Por isso o cache curto.
  // Só que o narrar e o editor-de-arte REGRAVAM mídia no mesmo nome (narracao.wav depois de cada
  // conserto): a narração vai com ?v=<mtime> na URL (paginas.mjs) e toda mídia leva ETag e
  // Last-Modified, para o navegador revalidar em vez de tocar a versão velha. [porte Régie]
  res.setHeader("Cache-Control", "private, max-age=3600");
  res.setHeader("ETag", etag); res.setHeader("Last-Modified", new Date(st.mtimeMs).toUTCString());
  if (!range && String(req.headers["if-none-match"] || "").split(/\s*,\s*/).includes(etag)) { res.statusCode = 304; return res.end(); }
  if (range && req.headers["if-range"] && req.headers["if-range"] !== etag) {
    // If-Range com validador velho: o arquivo mudou, o pedaço pedido é de outra versão → inteiro.
    res.statusCode = 200; res.setHeader("Content-Length", size);
    if (req.method === "HEAD") return res.end();
    return createReadStream(arq).on("error", () => res.destroy()).pipe(res);
  }
  if (range) {
    const mm = /^bytes=(\d*)-(\d*)/.exec(range) || [];
    let start, end;
    if (mm[1] === "" && mm[2]) { start = Math.max(0, size - parseInt(mm[2], 10)); end = size - 1; } // "bytes=-500": o final
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

/** Lê o corpo com teto; rejeita o que passa de CORPO_MAX. */
function lerCorpo(req) {
  return new Promise((ok, falha) => {
    let tam = 0; const partes = [];
    req.on("data", (d) => { tam += d.length; if (tam > CORPO_MAX) { falha(Object.assign(new Error("corpo grande demais"), { status: 413 })); req.destroy(); } else partes.push(d); });
    req.on("end", () => ok(Buffer.concat(partes).toString("utf8")));
    req.on("error", falha);
  });
}

/** URL relativa da mídia + ?v=<mtime>: arquivo regravado no mesmo nome vira URL nova. */
function comVersao(raiz, rel) {
  if (!rel) return null;
  try { return `${rel}?v=${Math.floor(statSync(join(raiz, ...rel.split("/"))).mtimeMs)}`; } catch { return rel; }
}

/** Conta marcas por cena e marcas abertas por projeto, para a home. */
function resumoDaFila(itens) {
  const porCena = new Map(), abertasPorProj = {};
  for (const m of itens) {
    const k = `${m.proj}/${m.cena}`;
    const r = porCena.get(k) || { total: 0, abertas: 0 };
    r.total++;
    if (STATUS_ABERTOS.includes(m.status)) { r.abertas++; abertasPorProj[m.proj] = (abertasPorProj[m.proj] || 0) + 1; }
    porCena.set(k, r);
  }
  return { porCena, abertasPorProj };
}

/**
 * Cria o servidor da galeria (não chama listen). Exportado para os testes. O projeto escolhido na
 * linha de comando vai no ENDEREÇO impresso (?p=<proj>), não aqui: assim o "todos os projetos" da
 * home leva mesmo a todos.
 * @param {{raiz?:string}} op
 */
export function criarGaleria({ raiz = RAIZ_CANAL } = {}) {
  raiz = resolve(raiz);
  const servidor = createServer(async (req, res) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "no-referrer");
    // [porte Régie] DNS rebinding: uma página de fora que aponte um nome dela para 127.0.0.1 chega
    // aqui com Host: nome-dela. Só atendemos o endereço que nós mesmos imprimimos.
    const porta = servidor.address()?.port;
    const hostsOk = [`127.0.0.1:${porta}`, `localhost:${porta}`];
    if (!hostsOk.includes(String(req.headers.host || "").toLowerCase())) return responder(res, 421, "host não atendido");

    const cru = String(req.url || "/").split("#")[0];
    const iq = cru.indexOf("?");
    const pathnameCru = iq >= 0 ? cru.slice(0, iq) : cru;      // CRU: o `new URL` normalizaria ../ e esconderia a tentativa
    const q = new URLSearchParams(iq >= 0 ? cru.slice(iq + 1) : "");

    try {
      if (req.method === "POST") {
        if (pathnameCru !== "/api/marca") return responder(res, 404, "404");
        const origem = req.headers.origin;
        if (origem && !hostsOk.map((h) => `http://${h}`).includes(String(origem).toLowerCase())) return responder(res, 403, "origem não atendida");
        // application/json obriga o navegador a um preflight que esta galeria não responde:
        // formulário de outro site não consegue gravar marca. [porte Régie]
        if (!/^application\/json\b/i.test(String(req.headers["content-type"] || ""))) return responder(res, 415, "envie application/json");
        let d;
        try { d = JSON.parse(await lerCorpo(req)); } catch (e) { return responder(res, e.status || 400, e.status ? e.message : "JSON inválido"); }
        const { proj, cena } = d || {};
        const tipo = d?.tipo === "aprovacao" ? "aprovacao" : "critica";
        if (!nomeSeguro(proj) || !nomeSeguro(cena)) return responder(res, 400, "proj/cena inválidos");
        if (!cenasDoProjeto(raiz, proj).includes(cena)) return responder(res, 404, `out/${proj}/graphics/${cena}.html não existe`);
        const texto = typeof d.texto === "string" ? d.texto : "";
        if (tipo === "critica" && !texto.trim()) return responder(res, 400, "marca sem texto");
        if (texto.length > TEXTO_MAX) return responder(res, 413, `marca com mais de ${TEXTO_MAX} caracteres`);
        const linhas = gravarComentario(raiz, { proj, cena, texto, tipo });
        console.log(`  💬 ${proj}/${cena}: ${linhas.length} marca(s) na fila`);
        return json(res, 200, { ok: true, marcas: linhas });
      }
      if (req.method !== "GET" && req.method !== "HEAD") { res.setHeader("Allow", "GET, HEAD, POST"); return responder(res, 405, "método não atendido"); }

      // NO-CACHE: a galeria serve a cena AO VIVO — sem isto o navegador guarda a versão velha e o dono
      // continua vendo a arte antiga depois que o Claude editou. Mídia sobrescreve (servirRange).
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");

      if (pathnameCru === "/" || pathnameCru === "") {
        const filtro = q.get("p") || null;
        const { porCena, abertasPorProj } = resumoDaFila(lerFilaMemo(raiz));
        let projs = listarProjetos(raiz, abertasPorProj);
        if (filtro) projs = projs.filter((p) => p.slug === filtro);
        return responder(res, 200, paginaIndice({ projs, cenasPor: (s) => cenasDoProjeto(raiz, s), marcasPorCena: porCena, soProj: filtro }), "text/html; charset=utf-8");
      }
      if (pathnameCru === "/play") {
        const proj = q.get("p"), id = q.get("c");
        if (!nomeSeguro(proj) || !nomeSeguro(id)) return responder(res, 400, "p/c inválidos");
        const cenas = cenasDoProjeto(raiz, proj);
        const i = cenas.indexOf(id);
        if (i < 0) return responder(res, 404, `out/${proj}/graphics/${id}.html não existe`);
        const arq = join(raiz, "out", proj, "graphics", `${id}.html`);
        const html = readFileSync(arq, "utf8");
        // A cena liga o marca/tokens.css do canal; sem ele, o render sai na fonte reserva. A galeria
        // mostra igual ao render (sem remendo), mas avisa. [porte Régie]
        let aviso = "";
        if (/marca\/tokens\.css/.test(html)) { try { statSync(join(raiz, "marca", "tokens.css")); } catch { aviso = "a cena liga marca/tokens.css, que não existe neste canal — fonte e cores saem na reserva, aqui e no render."; } }
        return responder(res, 200, paginaPlayer({
          proj, id,
          anterior: cenas[(i - 1 + cenas.length) % cenas.length], proxima: cenas[(i + 1) % cenas.length],
          palco: palcoDaCena(html), mtime: Math.floor(statSync(arq).mtimeMs),
          trecho: trechoDaCena(raiz, proj, id), narracao: comVersao(raiz, narracaoDoProjeto(raiz, proj)), aviso,
          status: { abertos: STATUS_ABERTOS, fechados: STATUS_FECHADOS },
        }), "text/html; charset=utf-8");
      }
      if (pathnameCru === "/api/marcas") {
        const proj = q.get("p"), cena = q.get("c");
        const itens = lerFilaMemo(raiz).filter((m) => (!proj || m.proj === proj) && (!cena || m.cena === cena));
        return json(res, 200, itens);
      }
      if (pathnameCru === "/api/fila") return json(res, 200, abertas(lerFilaMemo(raiz)));
      if (pathnameCru === "/favicon.ico") { res.statusCode = 204; return res.end(); }

      // Arquivo do canal: a cena, a mídia dela (../_media/…), o marca/tokens.css e as fontes.
      const alvo = resolverNoCanal(raiz, pathnameCru);
      if (!alvo) return responder(res, 403, "caminho fora do canal");
      let st;
      try { st = alvo.existe ? statSync(alvo.abs) : null; } catch { st = null; }
      if (!st || !st.isFile()) return responder(res, 404, "404");
      const ext = extname(alvo.abs).toLowerCase();
      if (COM_RANGE.has(ext)) return servirRange(req, res, alvo.abs, MIME[ext]);
      // A cena servida ganha window.__PREVIEW no <head>. Só as cenas: um HTML qualquer do canal
      // sai como está. [porte Régie]
      if (ext === ".html" && /^out\/[^/]+\/graphics\/[^/]+\.html$/i.test(alvo.rel)) {
        return responder(res, 200, req.method === "HEAD" ? "" : injetarPreview(readFileSync(alvo.abs, "utf8")), MIME[".html"]);
      }
      res.statusCode = 200;
      res.setHeader("content-type", MIME[ext] || "application/octet-stream");
      res.setHeader("Content-Length", st.size);
      if (req.method === "HEAD") return res.end();
      createReadStream(alvo.abs).on("error", () => res.destroy()).pipe(res);
    } catch (e) {
      console.error(`  ✗ ${req.method} ${pathnameCru}: ${e.message}`);
      if (!res.headersSent) responder(res, 500, "erro interno da galeria: " + e.message);
      else res.destroy();
    }
  });
  return servidor;
}

// ── linha de comando ────────────────────────────────────────────────────────────────────────────

function lerArgs(argv) {
  const a = { posicionais: [], porta: null, fila: false, json: false, marcar: false };
  for (const x of argv) {
    if (x === "--fila") a.fila = true;
    else if (x === "--json") a.json = true;
    else if (x === "--marcar") a.marcar = true;
    else if (x.startsWith("--porta=")) a.porta = x.slice(8);
    else if (x === "-h" || x === "--help") a.ajuda = true;
    else if (x.startsWith("--")) a.desconhecido = x;
    else a.posicionais.push(x);
  }
  return a;
}

const USO = `uso:
  node scripts/serve-galeria.mjs [<proj>] [--porta=8777]    abre a galeria (só em 127.0.0.1)
  node scripts/serve-galeria.mjs --fila [<proj>] [--json]   marcas abertas, a mais antiga primeiro
  node scripts/serve-galeria.mjs --marcar <id> <status> ["nota para o dono"]
      status: ${STATUS.join(" | ")}`;

function cmdFila(a) {
  const proj = a.posicionais[0];
  const itens = abertas(lerFila(RAIZ_CANAL)).filter((m) => !proj || m.proj === proj);
  if (a.json) { for (const m of itens) console.log(JSON.stringify(m)); return 0; }
  if (!itens.length) { console.log(`✓ nenhuma marca aberta${proj ? ` em ${proj}` : ""} (${ARQ_FILA})`); return 0; }
  console.log(`${itens.length} marca(s) aberta(s)${proj ? ` em ${proj}` : ""} — processe EM ORDEM, shot.mjs em cada uma antes de editar:\n`);
  for (const m of itens) {
    const t = m.t == null ? "cena inteira" : `@${Number(m.t).toFixed(1)}s`;
    console.log(`  ${m.id}  [${m.status}]  out/${m.proj}/graphics/${m.cena}.html  ${t}`);
    console.log(`      "${m.texto}"${m.comentario ? `\n      (comentário inteiro: "${m.comentario}")` : ""}`);
  }
  return 0;
}

function cmdMarcar(a) {
  const [id, status, ...nota] = a.posicionais;
  if (!id || !status) { console.error(USO); return 2; }
  try {
    const l = marcarStatus(RAIZ_CANAL, id, status, nota.join(" "));
    console.log(`✓ ${l.id} → ${l.status}${l.nota ? ` ("${l.nota}")` : ""}`);
    return 0;
  } catch (e) { console.error(`✗ ${e.message}`); return 2; }
}

function cmdServir(a) {
  const proj = a.posicionais[0] || null;
  // --porta vence; PORT continua valendo por compatibilidade com o estúdio (`PORT=8778 node …`).
  const bruta = a.porta ?? process.env.PORT ?? String(PORTA_PADRAO);
  const porta = Number(bruta);
  if (!Number.isInteger(porta) || porta < 0 || porta > 65535) { console.error(`✗ porta inválida: ${bruta}`); return Promise.resolve(2); }
  if (proj) {
    if (!nomeSeguro(proj) || !cenasDoProjeto(RAIZ_CANAL, proj).length) {
      const tem = listarProjetos(RAIZ_CANAL).map((p) => p.slug);
      console.error(`✗ out/${proj}/graphics/ não tem cena para revisar.` + (tem.length ? `\n  Projetos com cena: ${tem.join(", ")}` : "\n  Nenhum projeto tem cena ainda."));
      return Promise.resolve(2);
    }
  }
  const servidor = criarGaleria({ raiz: RAIZ_CANAL });
  return new Promise((fim) => {
    servidor.on("error", (e) => {
      if (e.code === "EADDRINUSE") {
        console.error(`✗ a porta ${porta} já está em uso — a galeria provavelmente JÁ está aberta em http://${HOST}:${porta}/` +
          `\n  Não derrube a que está servindo o dono. Para uma segunda: node scripts/serve-galeria.mjs ${proj || ""} --porta=${porta + 1}`);
      } else console.error(`✗ a galeria não subiu: ${e.message}`);
      fim(1);
    });
    servidor.listen(porta, HOST, () => {
      const p = servidor.address().port;
      console.log(`✓ galeria em http://${HOST}:${p}/${proj ? `?p=${encodeURIComponent(proj)}` : ""}`);
      console.log(`  marcas → ${ARQ_FILA} · processar: node scripts/serve-galeria.mjs --fila${proj ? ` ${proj}` : ""} · Ctrl+C fecha`);
    });
  });
}

/**
 * Este arquivo é o programa que o Node foi chamado para rodar? A régua do motor
 * (src/midia/arquivos.mjs, ehPrincipal): caminho REAL dos dois lados — o Node entrega o
 * import.meta.url do principal já resolvido, então o canal aberto por link simbólico ou junção
 * (mklink /J) não casava com o argv[1] cru, e o script saía 0 sem fazer nada: o Claude lia
 * "fila vazia". No Windows a letra da unidade pode vir em outra caixa (c:\ × C:\). [porte Régie]
 */
function ehPrincipal() {
  if (!process.argv[1]) return false;
  let eu, chamado;
  try { eu = realpathSync(fileURLToPath(import.meta.url)); chamado = realpathSync(resolve(process.argv[1])); } catch { return false; }
  return process.platform === "win32" ? eu.toLowerCase() === chamado.toLowerCase() : eu === chamado;
}

if (ehPrincipal()) {
  const a = lerArgs(process.argv.slice(2));
  if (a.ajuda) { console.log(USO); process.exit(0); }
  if (a.desconhecido) { console.error(`✗ opção desconhecida: ${a.desconhecido}\n${USO}`); process.exit(2); }
  if (a.fila) process.exit(cmdFila(a));
  if (a.marcar) process.exit(cmdMarcar(a));
  const codigo = await cmdServir(a);
  if (codigo) process.exit(codigo);
}
