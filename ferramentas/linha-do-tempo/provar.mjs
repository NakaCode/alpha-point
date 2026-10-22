#!/usr/bin/env node
// provar.mjs — a prova automática da linha do tempo, SEM navegador (DESENHO.md, seção C: passos 1, 2, 4 na parte do
// servidor, 6 e 7). Sobe o servidor dentro deste processo, numa porta livre de 127.0.0.1, roda as checagens e para.
//
//   node ferramentas/linha-do-tempo/provar.mjs        (cwd qualquer; sai 0 só com tudo passando)
//
// O Juneau real só se LÊ. Tudo o que ESCREVE (comentário, visto, aprovação) vai para uma cópia em
// out/juneau/_tmp/linha-do-tempo/prova-raiz/ (fora do git), e a prova confere, no fim, que a fila de verdade
// (out/_feedback-queue.jsonl), out/juneau/qc/, out/juneau/graphics/ e os vistos/medidas de verdade não mudaram.
// Nada aqui abre navegador, Chrome ou render; nada fala com host de fora.
//
// A seção 8 (22/10/2026) prova a legenda em português (legenda.mjs montar e conferir, o legenda-pt.json na lista fechada e
// o estado "em-dia"/"outra-versao"/"sem" que a página recebe), também na cópia, com uma tradução de mentira; e a página aberta
// durante a troca da narração, que recusa a legenda nova sobre o words.json e a narração velhos que ela carregou.
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { appendFileSync, copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import { request } from "node:http";
import { join } from "node:path";
import vm from "node:vm";
import sharp from "sharp";
import {
  ENTRADAS_MOTOR, MOTOR, RAIZ_CANAL, SHA_MOTOR, caminhoPermitido, carregarMotor, citadosDoHtml, conferirMotor, estadoDoProjeto, fechoDeImports,
  lerLinha,
} from "./linha.mjs";
import { criarServidor } from "./servidor.mjs";
import { DEM_RGB } from "./mapa.mjs";

const PROJ = "juneau";
const CLI = join(RAIZ_CANAL, "ferramentas", "linha-do-tempo.mjs");
const COPIA = join(RAIZ_CANAL, "out", PROJ, "_tmp", "linha-do-tempo", "prova-raiz");
const PASTA_CODIGO = join(RAIZ_CANAL, "ferramentas", "linha-do-tempo");

let total = 0, falhas = 0;
function checar(nome, ok, detalhe = "") {
  total++; if (!ok) falhas++;
  console.log(`${ok ? "  ✓" : "  ✗"} ${nome}${detalhe ? ` — ${detalhe}` : ""}`);
  return ok;
}
const titulo = (t) => console.log(`\n${t}`);
const sha1 = (b) => createHash("sha1").update(b).digest("hex");

function cli(args) {
  const r = spawnSync(process.execPath, [CLI, ...args], { cwd: RAIZ_CANAL, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  return { codigo: r.status, out: r.stdout || "", err: r.stderr || "" };
}

/**
 * Um pedido HTTP cru (o caminho vai como está: %2e%2e e %5c chegam ao servidor sem normalizar). Cada pedido numa conexão
 * nova (agent: false): o servidor roda neste mesmo processo, e o spawnSync das checagens de linha de comando o congela;
 * uma conexão guardada pelo agente podia vencer o keep-alive dele bem na hora do pedido seguinte (ECONNRESET, visto em
 * 22/10/2026 na seção 8).
 */
function pedir(porta, caminho, { method = "GET", headers = {}, corpo = null, host } = {}) {
  return new Promise((ok, falha) => {
    const req = request({ host: "127.0.0.1", port: porta, path: caminho, method, agent: false,
      headers: { host: host ?? `127.0.0.1:${porta}`, ...headers } }, (res) => {
      const partes = []; res.on("data", (d) => partes.push(d));
      res.on("end", () => ok({ status: res.statusCode, h: res.headers, corpo: Buffer.concat(partes) }));
    });
    req.on("error", falha);
    if (corpo !== null) req.write(corpo);
    req.end();
  });
}
const jsonDe = (r) => { try { return JSON.parse(r.corpo.toString("utf8")); } catch { return null; } };

function subir(m, raiz, extra = {}) {
  const { servidor, token } = criarServidor({ m, raiz, proj: PROJ, ...extra });
  return new Promise((ok, falha) => {
    servidor.on("error", falha);
    servidor.listen(0, "127.0.0.1", () => ok({ servidor, token, porta: servidor.address().port }));
  });
}
const descer = (s) => new Promise((ok) => { s.servidor.closeAllConnections?.(); s.servidor.close(() => ok()); });

/** O retrato do que a prova NÃO pode mudar no projeto de verdade. */
function retrato() {
  const linhas = [];
  const arq = (p) => { try { const st = statSync(p); linhas.push(`${p}|${st.size}|${st.mtimeMs}`); } catch { linhas.push(`${p}|ausente`); } };
  arq(join(RAIZ_CANAL, "out", "_feedback-queue.jsonl"));
  arq(join(RAIZ_CANAL, "out", PROJ, "_tmp", "linha-do-tempo", "vistos.jsonl"));
  arq(join(RAIZ_CANAL, "out", PROJ, "_tmp", "linha-do-tempo", "medidas.jsonl"));
  arq(join(RAIZ_CANAL, "out", PROJ, "_tmp", "linha-do-tempo", "legenda-pt.json"));
  arq(join(RAIZ_CANAL, "out", PROJ, "_tmp", "linha-do-tempo", "legenda-pt.traducao.json"));
  for (const d of ["qc", "graphics"]) {
    const pasta = join(RAIZ_CANAL, "out", PROJ, d);
    for (const f of readdirSync(pasta).sort()) if (!/\.mp4$/i.test(f)) arq(join(pasta, f));
  }
  return linhas.join("\n");
}

async function principal() {
  const antes = retrato();
  console.log("Prova da linha do tempo (sem navegador). O Juneau real só se lê; a escrita vai para a cópia.");

  // ── 0. o motor e o molde ─────────────────────────────────────────────────────────────────────
  titulo("0. o motor e o molde conferidos pelo sha256");
  const prob = conferirMotor();
  checar("os módulos importados são os da versão conferida", prob.length === 0, prob.join("; "));
  // Achado 4: o sha256 cobre o FECHO dos imports, não só as portas de entrada.
  const fecho = fechoDeImports(MOTOR, ENTRADAS_MOTOR);
  checar("[4] o fecho dos imports do motor tem 12 módulos, e a lista de sha256 cobre exatamente esses", fecho.problemas.length === 0 &&
    JSON.stringify(fecho.modulos.slice().sort()) === JSON.stringify(Object.keys(SHA_MOTOR).sort()), `${fecho.modulos.length}: ${fecho.modulos.map((x) => x.split("/").pop()).join(", ")}`);
  // Numa cópia dos 12 módulos (o motor de verdade não se toca): um módulo do meio do fecho mudado, e um import novo.
  const copiaMotor = join(RAIZ_CANAL, "out", PROJ, "_tmp", "linha-do-tempo", "prova-motor");
  rmSync(copiaMotor, { recursive: true, force: true });
  for (const rel of Object.keys(SHA_MOTOR)) { const para = join(copiaMotor, ...rel.split("/")); mkdirSync(join(para, ".."), { recursive: true }); copyFileSync(join(MOTOR, ...rel.split("/")), para); }
  checar("[4] a cópia fiel do motor passa na conferência", conferirMotor({ motor: copiaMotor }).length === 0);
  appendFileSync(join(copiaMotor, "src", "lib", "cor-709.mjs"), "\n// mudança de prova\n");
  let pm = conferirMotor({ motor: copiaMotor });
  checar("[4] um módulo do meio do fecho mudado (lib/cor-709.mjs) faz a ferramenta parar", pm.some((x) => /cor-709\.mjs: o sha256 mudou/.test(x)), pm.join("; ").slice(0, 200));
  appendFileSync(join(copiaMotor, "src", "lib", "wav.mjs"), "\nimport \"./novo-da-prova.mjs\";\n");
  writeFileSync(join(copiaMotor, "src", "lib", "novo-da-prova.mjs"), "export {};\n");
  pm = conferirMotor({ motor: copiaMotor });
  checar("[4] um módulo novo no fecho (import acrescentado) também faz parar", pm.some((x) => /novo-da-prova\.mjs: módulo novo/.test(x)), pm.join("; ").slice(0, 200));
  rmSync(copiaMotor, { recursive: true, force: true });
  const m = await carregarMotor();
  let c;

  // ── 1. a lista ───────────────────────────────────────────────────────────────────────────────
  titulo("1. a lista (linha.mjs e o verbo estado)");
  const e1 = cli(["estado", PROJ, "--json"]);
  checar("estado juneau --json sai 0", e1.codigo === 0, e1.err.trim().slice(0, 300));
  const est = JSON.parse(e1.out);
  checar("55 cenas", est.cenas.length === 55, `${est.cenas.length}`);
  checar("sem s09 na linha (fundida na s08), e ela listada como fora", !est.cenas.some((c) => c.id === "s09") && est.orfas.includes("s09"), `órfãs: ${est.orfas.join(",")}`);
  checar("19982 quadros (11:06)", est.totalQuadros === 19982, `${est.totalQuadros}`);
  const contiguas = est.cenas.every((c, i) => (i === 0 ? c.ini === 0 : est.cenas[i - 1].fim === c.ini)) && est.cenas.at(-1).fim === est.totalQuadros;
  checar("as janelas são contíguas, de 0 ao fim", contiguas);
  const xml = readFileSync(join(RAIZ_CANAL, "out", PROJ, `${PROJ}-POS.xml`), "utf8");
  const clips = [...xml.matchAll(/<clipitem id="v2-\d+-([^"]+)"><name>[^<]*<\/name>.*?<start>(\d+)<\/start><end>(\d+)<\/end>/g)].map((x) => ({ id: x[1], ini: +x[2], fim: +x[3] }));
  const difXml = est.cenas.filter((c, i) => !clips[i] || clips[i].id !== c.id || clips[i].ini !== c.ini || clips[i].fim !== c.fim);
  checar("os 55 inícios e fins batem com os 55 clipitem do juneau-POS.xml", clips.length === 55 && difXml.length === 0,
    `${clips.length} clipitem; diferentes: ${difXml.map((c) => c.id).join(",") || "nenhum"}; s01 ${est.cenas[0].ini}–${est.cenas[0].fim}, s63 ${est.cenas.at(-1).ini}–${est.cenas.at(-1).fim}`);
  let shaOk = 0, emDiaOk = 0, emDia = 0;
  const mtime = (p) => { try { return statSync(p).mtimeMs; } catch { return null; } };
  for (const c of est.cenas) {
    const html = readFileSync(join(RAIZ_CANAL, "out", PROJ, "graphics", `${c.id}.html`));
    if (sha1(html) === c.sha1) shaOk++;
    let l1 = null, l2 = null; try { [l1, l2] = readFileSync(join(RAIZ_CANAL, "out", PROJ, "graphics", `${c.id}.mp4.de-html`), "utf8").replace(/\r/g, "").split("\n"); } catch {}
    // Em dia: o carimbo do render (sha1 + 2160p) e nenhum arquivo citado mais novo que o clipe.
    const tClipe = mtime(join(RAIZ_CANAL, "out", PROJ, "graphics", `${c.id}.mp4`));
    const citados = citadosDoHtml(html.toString("utf8"), PROJ).map((rel) => mtime(join(RAIZ_CANAL, ...rel.split("/"))));
    const indep = l1 === sha1(html) && l2 === "2160p" && tClipe !== null && citados.every((t) => t !== null && Math.floor(t) <= Math.floor(tClipe));
    if (indep === c.clipeEmDia) emDiaOk++;
    if (indep) emDia++;
  }
  checar("o sha1 de cada HTML é o dos bytes do disco", shaOk === 55, `${shaOk}/55`);
  checar("o 'clipe em dia' bate com a linha 1 + 2160p do .mp4.de-html e as datas dos arquivos citados", emDiaOk === 55, `${emDia}/55 com clipe 4K desta versão`);
  checar("nenhuma cena do Juneau com erro (contrato do render, arquivo citado que falta)", est.cenas.every((c) => !c.erro), est.cenas.filter((c) => c.erro).map((c) => `${c.id}: ${c.erro}`).join("; ").slice(0, 300));
  const tipos = est.resumo.porTipo;
  // Desde 03/10/2026 a s01 é o voo de abertura sobre o mapa (CLAUDE.md, "MapTiler"; relevo 3D em s01), não mais vídeo
  // de banco: 2 com vídeo e 17 de mapa. Até 02/10 eram 3 e 16, e esta checagem falhava desde então (achado em 22/10).
  checar("36 de página, 2 com vídeo (s40, s53), 17 de mapa (a s01 é o voo de abertura desde 03/10)", tipos.dom === 36 && tipos.video === 2 && tipos.mapa === 17 &&
    ["s40", "s53"].every((id) => est.cenas.find((c) => c.id === id).tipo === "video") && est.cenas.find((c) => c.id === "s01").tipo === "mapa", JSON.stringify(tipos));
  checar("só a s44 avisa o relevo plano no rascunho", est.cenas.filter((c) => c.avisoRelevo).map((c) => c.id).join(",") === (est.cenas.find((c) => c.id === "s44").modoMapa === "rascunho" ? "s44" : ""),
    est.cenas.filter((c) => c.avisoRelevo).map((c) => c.id).join(",") || "nenhuma");

  // ── 2. o servidor e a lista fechada (Juneau real, só leitura) ─────────────────────────────────
  titulo("2. o servidor e a lista fechada (Juneau real, só GET)");
  const S = await subir(m, RAIZ_CANAL);
  const P = S.porta;
  checar("ouve só em 127.0.0.1", S.servidor.address().address === "127.0.0.1", S.servidor.address().address);
  let r = await pedir(P, "/?p=juneau");
  checar("GET / dá a página com o token da sessão", r.status === 200 && r.corpo.toString().includes(`content="${S.token}"`) && /^[0-9a-f]{48}$/.test(S.token) && !r.corpo.toString().includes("__TOKEN__"));
  for (const p of ["/lt/pagina.js", "/lt/pagina.css"]) { r = await pedir(P, p); checar(`GET ${p}`, r.status === 200, `${r.status} ${r.h["content-type"]}`); }
  r = await pedir(P, "/api/linha");
  const L = jsonDe(r);
  checar("GET /api/linha: 55 cenas com tipo, versão e modo do mapa", r.status === 200 && L?.cenas?.length === 55 && L.cenas.every((c) => c.sha1 && c.tipo && c.url) &&
    L.cenas.filter((c) => c.tipo === "mapa").every((c) => c.modoMapa === "proxy" || c.modoMapa === "rascunho") && r.h["cache-control"] === "no-store");
  for (const p of ["/db/canal.db", "/midia/_motor/pre-v1-levantamento-2026-09-25.json", "/out/juneau/_media/_caca/x.mp4", "/out/juneau/_media/_CACA/x.mp4",
    "/out/juneau/_media/_master.mp4", "/out/juneau/graphics/s09.html", "/out/juneau/graphics/S09.HTML", "/out/juneau/espelho.json", "/CLAUDE.md",
    "/out/juneau/qc/s01.laudo.json", "/out/juneau/graphics/s01.mp4", "/out/prova-mapa/graphics/landsat-juneau.html", "/scripts/serve-galeria.mjs",
    "/out/juneau/_tmp/linha-do-tempo/vistos.jsonl", "/api/nada"]) {
    r = await pedir(P, p);
    checar(`404 em ${p}`, r.status === 404, `${r.status}`);
  }
  for (const p of ["/out/juneau/%2e%2e/%2e%2e/db/canal.db", "/out/juneau/graphics/%2e%2e/%2e%2e/%2e%2e/CLAUDE.md", "/out%5cjuneau%5cnarracao.wav", "/.git/config", "/out/juneau/graphics/..%5c..%5cespelho.json"]) {
    r = await pedir(P, p);
    checar(`403 ou 404 em ${p}`, r.status === 403 || r.status === 404, `${r.status}`);
  }
  r = await pedir(P, "/", { host: "evil.example:80" }); checar("Host de fora: 421", r.status === 421, `${r.status}`);
  r = await pedir(P, "/");
  checar("[8] a página sai com X-Frame-Options SAMEORIGIN e frame-ancestors 'self' (ninguém de fora a enquadra)", r.h["x-frame-options"] === "SAMEORIGIN" && r.h["content-security-policy"] === "frame-ancestors 'self'", `${r.h["x-frame-options"]} · ${r.h["content-security-policy"]}`);
  r = await pedir(P, "/out/juneau/graphics/s02.html");
  checar("[8] …e as cenas também", r.h["x-frame-options"] === "SAMEORIGIN" && r.h["content-security-policy"] === "frame-ancestors 'self'");
  r = await pedir(P, "/", { host: `localhost:${P}` }); checar("Host localhost:<porta>: 200", r.status === 200, `${r.status}`);

  // O aparelho remoto pelo Tailscale Serve (16/10/2026). Sem `remoto`, o Host do tailnet e os cabeçalhos do Serve dão 421.
  const HR = "pc-exemplo.tailnet-exemplo.ts.net:8790", IPR = "100.64.0.9", LOGR = "dono@exemplo.com";
  const serve = (ip = IPR, login = LOGR) => ({ "x-forwarded-for": ip, "x-forwarded-host": HR, "tailscale-user-login": login, "tailscale-headers-info": "x" });
  r = await pedir(P, "/", { host: HR, headers: serve() }); checar("[remoto] sem a opção: Host do tailnet dá 421", r.status === 421, `${r.status}`);
  r = await pedir(P, "/", { headers: serve() }); checar("[remoto] sem a opção: cabeçalho do Serve com Host local dá 421", r.status === 421, `${r.status}`);
  const IP6R = "fd7a:115c:a1e0::9";
  const SR = await subir(m, RAIZ_CANAL, { remoto: { hosts: [HR], ip: [IPR, IP6R], login: LOGR } });
  const PR = SR.porta;
  r = await pedir(PR, "/?p=juneau", { host: HR, headers: serve() });
  checar("[remoto] o aparelho, com o IP e o login dele: 200 com a página", r.status === 200 && r.corpo.toString().includes(`content="${SR.token}"`), `${r.status}`);
  r = await pedir(PR, "/api/linha", { host: HR, headers: serve(IPR, "DONO@EXEMPLO.COM") }); checar("[remoto] o login em maiúsculas também passa", r.status === 200, `${r.status}`);
  r = await pedir(PR, "/", { host: HR, headers: serve(IP6R.toUpperCase()) }); checar("[remoto] o aparelho pelo IPv6 dele: 200", r.status === 200, `${r.status}`);
  r = await pedir(PR, "/", { host: HR, headers: serve("100.64.0.10") }); checar("[remoto] outro aparelho (IP): 403", r.status === 403, `${r.status}`);
  r = await pedir(PR, "/", { host: HR, headers: serve(IPR, "outro@exemplo.com") }); checar("[remoto] outro login: 403", r.status === 403, `${r.status}`);
  r = await pedir(PR, "/", { host: HR, headers: serve(`${IPR}, 1.2.3.4`) }); checar("[remoto] X-Forwarded-For com dois IPs: 403", r.status === 403, `${r.status}`);
  r = await pedir(PR, "/", { host: HR }); checar("[remoto] Host do tailnet sem os cabeçalhos do Serve: 403", r.status === 403, `${r.status}`);
  r = await pedir(PR, "/", { headers: serve() }); checar("[remoto] cabeçalho do Serve com Host local: 421", r.status === 421, `${r.status}`);
  r = await pedir(PR, "/", { host: "evil.example:80", headers: serve() }); checar("[remoto] cabeçalho do Serve com Host de fora: 421", r.status === 421, `${r.status}`);
  r = await pedir(PR, "/"); checar("[remoto] este PC continua: Host local sem cabeçalho dá 200", r.status === 200, `${r.status}`);
  r = await pedir(PR, "/db/canal.db", { host: HR, headers: serve() }); checar("[remoto] a lista fechada vale para o aparelho: 404 em /db/canal.db", r.status === 404, `${r.status}`);
  const postR = (origem, token) => pedir(PR, "/api/comentar", { method: "POST", host: HR, corpo: "{}",
    headers: { ...serve(), "content-type": "application/json", origin: origem, ...(token ? { "x-lt-token": token } : {}) } });
  r = await postR(`http://127.0.0.1:${PR}`, SR.token);
  checar("[remoto] POST do aparelho com Origin local: 403 pela origem", r.status === 403 && /origem/.test(r.corpo.toString()), `${r.status} ${r.corpo}`);
  r = await postR(`http://${HR}`, "0".repeat(48));
  checar("[remoto] POST do aparelho com a Origin dele passa da origem e para no token errado", r.status === 403 && /token/.test(r.corpo.toString()), `${r.status} ${r.corpo}`);
  r = await pedir(PR, "/api/comentar", { method: "POST", host: `127.0.0.1:${PR}`, corpo: "{}",
    headers: { "content-type": "application/json", origin: `http://${HR}`, "x-lt-token": SR.token } });
  checar("[remoto] POST deste PC com a Origin do tailnet: 403 pela origem", r.status === 403 && /origem/.test(r.corpo.toString()), `${r.status} ${r.corpo}`);
  await descer(SR);
  let erroRemoto = null;
  try { criarServidor({ m, raiz: RAIZ_CANAL, proj: PROJ, remoto: { hosts: [HR], ip: "", login: LOGR } }); } catch (e) { erroRemoto = e.message; }
  checar("[remoto] sem IP, o servidor não sobe", !!erroRemoto, erroRemoto || "subiu");
  r = await pedir(P, "/", { method: "OPTIONS" }); checar("OPTIONS: 405", r.status === 405, `${r.status}`);
  r = await pedir(P, "/api/linha", { method: "PUT" }); checar("PUT: 405", r.status === 405, `${r.status}`);
  r = await pedir(P, "/out/juneau/narracao.wav", { headers: { range: "bytes=0-99" } });
  checar("Range na narracao.wav: 206 com Content-Range", r.status === 206 && /^bytes 0-99\/\d+$/.test(r.h["content-range"] || "") && r.corpo.length === 100 && r.h["content-type"] === "audio/wav",
    `${r.status} ${r.h["content-range"]}`);
  r = await pedir(P, "/marca/tokens.css"); checar("tokens.css sai como text/css", r.status === 200 && /^text\/css/.test(r.h["content-type"]), r.h["content-type"]);
  r = await pedir(P, "/marca/fontes/inter/Inter-VF.ttf"); checar("a fonte sai como font/ttf, com guarda de 1 h", r.status === 200 && r.h["content-type"] === "font/ttf" && /max-age=3600/.test(r.h["cache-control"]), `${r.h["content-type"]} · ${r.h["cache-control"]}`);
  const arqS01 = readFileSync(join(RAIZ_CANAL, "out", PROJ, "graphics", "s01.html"));
  r = await pedir(P, "/out/juneau/graphics/s01.html?v=1");
  checar("a cena sai byte a byte como no disco, sem nada injetado, e no-store", r.status === 200 && Buffer.compare(r.corpo, arqS01) === 0 && /no-store/.test(r.h["cache-control"]) && !r.corpo.includes("__PREVIEW=true"));
  r = await pedir(P, "/out/juneau/_media/_vendor/maplibre-gl.js");
  const etag = r.h.etag;
  checar("o maplibre vai com ETag e guarda de 1 h", r.status === 200 && etag && /max-age=3600/.test(r.h["cache-control"]), r.h["cache-control"]);
  r = await pedir(P, "/out/juneau/_media/_vendor/maplibre-gl.js", { headers: { "if-none-match": etag } }); checar("…e volta 304 com o ETag", r.status === 304, `${r.status}`);
  const fotoS04 = readdirSync(join(RAIZ_CANAL, "out", PROJ, "_media", "foto", "s04")).find((f) => /\.jpe?g$/i.test(f));
  r = await pedir(P, `/out/juneau/_media/foto/s04/${encodeURIComponent(fotoS04)}`);
  checar("a foto sai com ETag e se revalida a cada carga (no-cache)", r.status === 200 && r.h["content-type"] === "image/jpeg" && /no-cache/.test(r.h["cache-control"]) && r.h.etag, r.h["cache-control"]);
  const geo = readdirSync(join(RAIZ_CANAL, "out", PROJ, "_media", "geo")).find((f) => f.endsWith(".js"));
  r = await pedir(P, `/out/juneau/_media/geo/${encodeURIComponent(geo)}`); checar(`a geometria (${geo}) se serve`, r.status === 200, `${r.status}`);
  r = await pedir(P, "/out/juneau/words.json"); checar("words.json se serve", r.status === 200 && Array.isArray(jsonDe(r)), `${r.status}`);
  if (existsSync(join(RAIZ_CANAL, "out", PROJ, "_media", "logo"))) {
    const logo = readdirSync(join(RAIZ_CANAL, "out", PROJ, "_media", "logo"), { recursive: true }).find((f) => /\./.test(String(f)));
    if (logo) { r = await pedir(P, `/out/juneau/_media/logo/${String(logo).split(/[\\/]/).map(encodeURIComponent).join("/")}`); checar("_media/logo fica fora da lista (nenhuma cena cita)", r.status === 404, `${r.status}`); }
  }

  // ── 4. mapas: proxies e rascunho servidos, nenhum host de fora ─────────────────────────────────
  titulo("4. mapas: proxies e rascunho pelo servidor (sem navegador)");
  r = await pedir(P, "/out/juneau/_media/_vendor/perfil-mapa.js");
  const perfil = r.corpo.toString("utf8");
  const HOST_PAGO = ["api", "maptiler", "com"].join(".");
  checar("perfil-mapa.js sai trocado: tiles do servidor, sem o host pago nem {chave}", r.status === 200 && perfil.includes("/mapa/base/") &&
    !perfil.includes(HOST_PAGO) && !perfil.includes("{chave}") && /no-store/.test(r.h["cache-control"]));
  const caixa = { location: { origin: `http://127.0.0.1:${P}`, host: `127.0.0.1:${P}` } };
  caixa.window = caixa;
  vm.runInNewContext(perfil, caixa);
  const RM = caixa.__REGIE_MAPA;
  checar("__REGIE_MAPA.base.tiles[0] aponta para 127.0.0.1", RM?.base?.tiles?.[0] === `http://127.0.0.1:${P}/mapa/base/{z}/{x}/{y}`, RM?.base?.tiles?.[0]);
  checar("o relevo (dem) também vem do servidor", RM?.dem?.tiles?.[0] === `http://127.0.0.1:${P}/mapa/dem/{z}/{x}/{y}`, RM?.dem?.tiles?.[0]);
  const real = JSON.parse(readFileSync(join(RAIZ_CANAL, "out", PROJ, "_media", "_vendor", "perfil-mapa.json"), "utf8"));
  checar("o resto do perfil é o real (nome, credencial, crédito na tela, tamanho dos tiles)", RM.nome === real.nome && RM.credencial === real.credencial &&
    RM.atribuicao?.tela === real.atribuicao?.tela && RM.base.tileSize === real.base.tileSize && RM.dem?.encoding === real.dem?.encoding);
  checar("window.__chaves leva só o marcador \"rascunho\"", JSON.stringify(caixa.__chaves) === JSON.stringify({ [real.credencial]: "rascunho" }), JSON.stringify(caixa.__chaves));
  r = await pedir(P, "/mapa/base/10/100/200");
  const jpg = r.corpo;
  const fechaJpeg = jpg.length > 4 && jpg[0] === 0xff && jpg[1] === 0xd8 && [...Array(Math.min(64, jpg.length - 2)).keys()].some((k) => jpg[jpg.length - 2 - k] === 0xff && jpg[jpg.length - 1 - k] === 0xd9);
  const metaJ = r.status === 200 ? await sharp(jpg).metadata() : {};
  checar("tile de base: JPEG 512×512 que fecha com FF D9 (passa no defeitoDaImagem)", r.status === 200 && r.h["content-type"] === "image/jpeg" && fechaJpeg && metaJ.width === 512 && metaJ.height === 512, `${jpg.length} bytes`);
  r = await pedir(P, "/mapa/dem/10/1/1");
  const webp = r.corpo;
  const decl = webp.length >= 8 ? webp.readUInt32LE(4) : -1;
  const px = r.status === 200 ? await sharp(webp).raw().toBuffer({ resolveWithObject: true }) : null;
  const cor = (i) => px ? [px.data[i * px.info.channels], px.data[i * px.info.channels + 1], px.data[i * px.info.channels + 2]] : [];
  const altura = (rgb) => -10000 + (rgb[0] * 65536 + rgb[1] * 256 + rgb[2]) * 0.1;
  checar("tile de relevo: WebP com o tamanho que declara e RGB 1/134/160 (0 m no mapbox)", r.status === 200 && r.h["content-type"] === "image/webp" &&
    webp.toString("latin1", 0, 4) === "RIFF" && decl + 8 === webp.length && [0, 512 * 512 - 1].every((i) => cor(i).join() === [DEM_RGB.r, DEM_RGB.g, DEM_RGB.b].join()) &&
    Math.abs(altura(cor(0))) < 1e-6, `${webp.length} bytes, cor ${cor(0).join("/")}, ${altura(cor(0)).toFixed(3)} m`);
  for (const p of ["/mapa/base/3/9/0", "/mapa/xyz/1/1/1", "/mapa/base/1/1", "/mapa/base/a/b/c"]) { r = await pedir(P, p); checar(`404 no tile inválido ${p}`, r.status === 404, `${r.status}`); }
  const mapas = L.cenas.filter((c) => c.tipo === "mapa");
  const comProxy = mapas.filter((c) => c.modoMapa === "proxy");
  for (const c of comProxy) {
    r = await pedir(P, c.proxy, { headers: { range: "bytes=0-1023" } });
    checar(`${c.id}: o proxy (${c.proxy.split("/").pop()}) se serve por Range`, r.status === 206 && r.h["content-type"] === "video/mp4", `${r.status}`);
    // O mesmo quadro no proxy e no clipe 4K (reduzido a 1080p): o PSNR diz se a cópia é fiel. Só ffmpeg, sem render.
    const k = Math.floor(c.n / 2);
    const saida = await m.rodar(m.FFMPEG(), ["-v", "error", "-i", join(RAIZ_CANAL, ...decodeURIComponent(c.proxy.split("?")[0]).slice(1).split("/")),
      "-i", join(RAIZ_CANAL, "out", PROJ, "graphics", `${c.id}.mp4`), "-filter_complex",
      `[0:v]select='eq(n\\,${k})',setpts=PTS-STARTPTS[a];[1:v]select='eq(n\\,${k})',scale=1920:1080:flags=bicubic,format=yuv420p,setpts=PTS-STARTPTS[b];[a][b]psnr=stats_file=-`,
      "-frames:v", "1", "-f", "null", "-"]).catch((e) => e.message);
    const psnr = Number((/psnr_avg:([\d.]+|inf)/.exec(String(saida)) || [])[1]?.replace("inf", "99"));
    checar(`${c.id}: o quadro ${k} do proxy bate com o do clipe 4K (PSNR ≥ 35 dB)`, psnr >= 35, `${psnr} dB`);
  }
  checar("as cenas de mapa sem proxy dizem por que estão em rascunho", mapas.filter((c) => c.modoMapa === "rascunho").every((c) => c.motivoMapa),
    `${comProxy.length} pelo clipe, ${mapas.length - comProxy.length} em rascunho`);
  const s05 = est.cenas.find((c) => c.id === "s05");
  checar("s05: o proxy, se existe, tem o nome da versão atual (o sha1 do HTML e o clipe de origem)", !L.cenas.find((c) => c.id === "s05").proxy ||
    decodeURIComponent(L.cenas.find((c) => c.id === "s05").proxy.split("?")[0]).endsWith(s05.proxyEsperado.split("/").pop()));
  await descer(S);
  const F = await subir(m, RAIZ_CANAL, { forcarRascunho: new Set(["s05"]) });
  const LF = jsonDe(await pedir(F.porta, "/api/linha"));
  const f05 = LF.cenas.find((c) => c.id === "s05");
  checar("--forcar-rascunho=s05 põe a s05 em rascunho", f05.modoMapa === "rascunho" && /forçado/.test(f05.motivoMapa), f05.motivoMapa);
  await descer(F);
  // O código não fala com host de fora nem lê chaves.
  const codigo = [join(RAIZ_CANAL, "ferramentas", "linha-do-tempo.mjs"), ...readdirSync(PASTA_CODIGO).filter((f) => /\.(mjs|js|html|css)$/.test(f)).map((f) => join(PASTA_CODIGO, f))];
  // Os padrões se montam por pedaços: esta prova também entra na busca, e não pode achar a si mesma.
  const ENV = "." + "env";
  const proibidos = [HOST_PAGO, "chaves" + ENV, `"${ENV}"`, `'${ENV}'`, `/${ENV}`];
  // O leitor de chaves está no fecho do motor (mapa/perfis.mjs o importa) e na lista de sha256; o que não pode é a
  // ferramenta importá-lo ou chamar uma função dele.
  const usaLeitor = /\bimport\s*(?:[^;"'`]*\bfrom\s*)?["'][^"']*chaves\.mjs["']|\bimport\s*\(\s*["'][^"']*chaves\.mjs|\b(?:lerChave|exigirChave|chavesParaCena)\s*\(/;
  const achados = [];
  for (const f of codigo) {
    const t = readFileSync(f, "utf8");
    for (const p of proibidos) if (t.includes(p)) achados.push(`${f.split(/[\\/]/).pop()}: ${p}`);
    if (!/provar\.mjs$/.test(f) && usaLeitor.test(t)) achados.push(`${f.split(/[\\/]/).pop()}: usa o leitor de chaves`);
  }
  checar("nenhum código cita o host pago, o arquivo de chaves ou o .env do canal, nem usa o leitor de chaves", achados.length === 0, achados.join("; "));
  const rede = [];
  for (const f of codigo.filter((x) => !/provar\.mjs$|pagina\.(js|html|css)$/.test(x))) {
    const t = readFileSync(f, "utf8");
    if (/\bfetch\s*\(|\bhttps?\.(request|get)\s*\(|from\s+["']node:(https|net|tls|dgram)["']|new\s+WebSocket/.test(t)) rede.push(f.split(/[\\/]/).pop());
  }
  checar("o lado do servidor não abre conexão para fora (sem fetch, https, net, WebSocket)", rede.length === 0, rede.join(", "));
  const pg = readFileSync(join(PASTA_CODIGO, "pagina.js"), "utf8") + readFileSync(join(PASTA_CODIGO, "pagina.html"), "utf8") + readFileSync(join(PASTA_CODIGO, "pagina.css"), "utf8");
  const urlsFora = [...pg.matchAll(/https?:\/\/[^\s"'`)]+/g)].map((x) => x[0]);
  checar("a página não cita endereço de fora", urlsFora.length === 0, urlsFora.join(", "));
  checar("a página não define __PREVIEW nem tem botão de aprovar", !/__PREVIEW\s*=/.test(pg) && !/aprovar/i.test(readFileSync(join(PASTA_CODIGO, "pagina.html"), "utf8")));
  const __chaves = codigo.filter((f) => readFileSync(f, "utf8").includes("__chaves") && !/provar\.mjs$/.test(f)).map((f) => f.split(/[\\/]/).pop());
  checar("__chaves só aparece no rascunho do mapa (o marcador)", __chaves.every((f) => f === "mapa.mjs"), __chaves.join(", "));

  // ── 6. comentários e vistos (na cópia) ────────────────────────────────────────────────────────
  titulo("6. comentários e vistos (na cópia: out/juneau/_tmp/linha-do-tempo/prova-raiz/)");
  const outras04 = montarCopia(m, fotoS04);
  const C = await subir(m, COPIA);
  const CP = C.porta;
  const linhaC = async () => jsonDe(await pedir(CP, "/api/linha"));
  const cenaC = async (id) => (await linhaC()).cenas.find((c) => c.id === id);
  let LC = await linhaC();
  checar("a cópia abre com as 55 cenas e nenhuma com erro", LC.cenas.length === 55 && LC.cenas.every((c) => !c.erro), LC.cenas.filter((c) => c.erro).map((c) => `${c.id}: ${c.erro}`).join("; ").slice(0, 300));
  const sha = (id) => LC.cenas.find((c) => c.id === id).sha1;
  const post = (rota, corpo, { token = C.token, tipo = "application/json", origem = `http://127.0.0.1:${CP}` } = {}) =>
    pedir(CP, rota, { method: "POST", corpo: typeof corpo === "string" ? corpo : JSON.stringify(corpo),
      headers: { "content-type": tipo, ...(token ? { "x-lt-token": token } : {}), ...(origem ? { origin: origem } : {}) } });
  // O visto como a página manda: a versão que ela carregou, o modo em que tocou e os arquivos do resource timing.
  const vistoDe = (cc, extra = {}) => post("/api/visto", { cena: cc.id, sha1: cc.sha1, versao: cc.versao,
    modo: cc.tipo === "mapa" && cc.modoMapa === "proxy" ? "proxy" : "iframe", cobertura: 1, arquivos: [], ...extra });
  const visto = async (id) => (await cenaC(id) || {}).visto;
  const daqui = Date.now() + 60_000;   // "a página recebeu o arquivo agora": depois de qualquer data do disco

  r = await post("/api/comentar", "x", { tipo: "text/plain" }); checar("POST sem JSON: 415", r.status === 415, `${r.status}`);
  r = await post("/api/comentar", { cena: "s02" }, { origem: "http://evil.example" }); checar("POST com Origin de fora: 403", r.status === 403, `${r.status}`);
  r = await post("/api/comentar", { cena: "s02" }, { token: null }); checar("POST sem o token da sessão: 403", r.status === 403, `${r.status}`);
  r = await post("/api/comentar", { cena: "s02" }, { token: "0".repeat(48) }); checar("POST com token errado: 403", r.status === 403, `${r.status}`);
  r = await post("/api/comentar", "x".repeat(70 * 1024)); checar("corpo acima de 64 KB: 413", r.status === 413, `${r.status}`);
  r = await post("/api/outra", {}); checar("POST em rota que não existe: 404", r.status === 404, `${r.status}`);
  r = await post("/api/comentar", { cena: "s02", t: 1.4, tVideo: 15.0, sha1: sha("s02"), texto: "teste da ferramenta: comentário de prova" });
  const marca = jsonDe(r)?.marcas?.[0];
  checar("comentário de teste em s02 a 15,0 s do vídeo: 200", r.status === 200 && marca, `${r.status}`);
  const naFila = m.lerFila(COPIA).find((x) => x.id === marca?.id);
  checar("…aparece na fila com t 1,4, a cena s02, pendente, o instante do vídeo e a versão", naFila && naFila.t === 1.4 && naFila.cena === "s02" && naFila.proj === PROJ &&
    naFila.status === "pendente" && naFila.texto === `teste da ferramenta: comentário de prova [vídeo 00:15.0 · versão ${sha("s02").slice(0, 8)}]`, naFila && JSON.stringify({ t: naFila.t, texto: naFila.texto }));
  let lista = jsonDe(await pedir(CP, "/api/comentarios"));
  checar("…e em GET /api/comentarios, aberto", lista.some((x) => x.id === marca.id && x.aberta));
  checar("…e o bloco da s02 fica laranja (abertos 1)", (await cenaC("s02")).abertos === 1);
  m.marcarStatus(COPIA, marca.id, "preservada", "teste da ferramenta");   // a mesma função do serve-galeria --marcar
  lista = jsonDe(await pedir(CP, "/api/comentarios"));
  const resp = lista.find((x) => x.id === marca.id);
  checar("fechado com preservada \"teste da ferramenta\": a nota aparece para a página", resp && resp.status === "preservada" && resp.nota === "teste da ferramenta" && !resp.aberta);
  checar("…e a s02 deixa de ter comentário aberto", (await cenaC("s02")).abertos === 0);
  r = await post("/api/comentar", { cena: "s02", t: 1, tVideo: 14.6, texto: "   " }); checar("comentário vazio: 400", r.status === 400, `${r.status}`);
  r = await post("/api/comentar", { cena: "s09", t: 1, tVideo: 79, texto: "x" }); checar("comentário em cena fora da linha (s09): 404", r.status === 404, `${r.status}`);
  r = await post("/api/comentar", { cena: "s02", t: 1, tVideo: 14.6, texto: "x".repeat(4000) }); checar("comentário com mais de 4.000 caracteres: 413", r.status === 413, `${r.status}`);
  r = await post("/api/comentar", { cena: "s02", t: 99, tVideo: 14.6, texto: "x" }); checar("instante fora da cena: 400", r.status === 400, `${r.status}`);
  // Achado 18: a versão do comentário é a que estava na tela, não a do disco agora.
  const velho02 = "a".repeat(40);
  r = await post("/api/comentar", { cena: "s02", t: 1, tVideo: 14.6, sha1: velho02, texto: "teste da ferramenta: versão da tela" });
  const mv = jsonDe(r)?.marcas?.[0];
  checar("[18] comentário feito sobre outra versão leva a versão da tela e o aviso \"a cena mudou depois\"", r.status === 200 && mv && /versão aaaaaaaa · a cena mudou depois\]$/.test(mv.texto), mv?.texto);
  if (mv) m.marcarStatus(COPIA, mv.id, "preservada", "teste da ferramenta");

  const urlFoto = `/out/juneau/_media/foto/s04/${encodeURIComponent(fotoS04)}`;
  const relFotos04 = [fotoS04, ...outras04].map((f) => `out/juneau/_media/foto/s04/${f}`).sort();
  let c04 = await cenaC("s04");
  r = await vistoDe(c04, { cobertura: 0.95, arquivos: [{ u: urlFoto, t: daqui }, "/db/canal.db", "/out/juneau/_media/_caca/x.mp4", "/out/juneau/graphics/s04.html", "/out/juneau/narracao.wav"] });
  const v4 = jsonDe(r)?.visto;
  checar("visto da s04: 200; entram as fotos que o HTML cita, e o resto da página se descarta", r.status === 200 && JSON.stringify(v4.arquivos.map((a) => a.rel)) === JSON.stringify(relFotos04),
    v4 && JSON.stringify(v4.arquivos.map((a) => a.rel)));
  checar("…e a s04 fica vista nesta versão", (await visto("s04")) === "atual");
  r = await vistoDe(c04, { sha1: "0".repeat(40) }); checar("visto com sha1 velho: 409", r.status === 409, `${r.status}`);
  r = await vistoDe(c04, { cobertura: 0.5 }); checar("visto com 50 % dos quadros: 400", r.status === 400, `${r.status}`);
  r = await vistoDe({ ...c04, id: "s09" }); checar("visto de cena fora da linha: 404", r.status === 404, `${r.status}`);
  r = await vistoDe(c04, { modo: "pausa" }); checar("[17] visto no plano B \"pausa\" (cena parada): 422", r.status === 422, `${r.status} ${jsonDe(r)?.erro}`);
  const htmlS04 = join(COPIA, "out", PROJ, "graphics", "s04.html");
  appendFileSync(htmlS04, " ");
  checar("1 byte a mais no HTML da s04: ela volta a \"nova versão para ver\"", (await visto("s04")) === "velho", await visto("s04"));
  c04 = await cenaC("s04");
  r = await vistoDe(c04, { arquivos: [{ u: urlFoto, t: daqui }] });
  checar("…vista de novo na versão nova: atual", r.status === 200 && (await visto("s04")) === "atual");
  appendFileSync(join(COPIA, "out", PROJ, "_media", "foto", "s04", fotoS04), Buffer.from([0]));
  checar("trocar a foto (sem mexer no HTML) também derruba o visto", (await visto("s04")) === "velho", await visto("s04"));
  // Achado 3: a lista que vale é a do HTML, não a da página. Visto com a lista VAZIA, e a outra foto trocada.
  c04 = await cenaC("s04");
  r = await vistoDe(c04, { arquivos: [] });
  checar("[3] visto da s04 com a lista da página vazia: o servidor grava as duas fotos que o HTML cita", r.status === 200 && jsonDe(r).visto.arquivos.length === 2, `${r.status} ${jsonDe(r)?.visto?.arquivos?.length}`);
  appendFileSync(join(COPIA, "out", PROJ, "_media", "foto", "s04", outras04[0]), Buffer.from([0]));
  checar("[3] …e trocar a foto que a página não listou derruba o visto", (await visto("s04")) === "velho", await visto("s04"));
  // Achado 10: a página que carregou a versão de antes não ganha visto da de agora.
  const v04antes = c04.versao;
  c04 = await cenaC("s04");
  checar("[10] trocar uma foto citada muda a versão que a página recebe (ela recarrega a cena)", c04.versao !== v04antes, `${v04antes} → ${c04.versao}`);
  r = await vistoDe({ ...c04, versao: v04antes }); checar("[10] visto com a versão de antes da troca: 409", r.status === 409, `${r.status}`);
  const extra = join(COPIA, "out", PROJ, "_media", "foto", "s04", "extra-dinamica.jpg");
  writeFileSync(extra, "x");
  const urlExtra = "/out/juneau/_media/foto/s04/extra-dinamica.jpg";
  r = await vistoDe(c04, { arquivos: [{ u: urlExtra, t: Date.now() - 60_000 }] });
  checar("[10] arquivo que a cena pediu sozinha e mudou DEPOIS que a página o recebeu: 409", r.status === 409 && /mudou depois/.test(jsonDe(r)?.erro || ""), `${r.status} ${jsonDe(r)?.erro}`);
  r = await vistoDe(c04, { arquivos: [{ u: "/out/juneau/_media/foto/s04/nao-existe.jpg", t: daqui }] });
  checar("[14] arquivo que a cena pediu e não existe (404 na página): 409, e não some do visto", r.status === 409 && /não existe/.test(jsonDe(r)?.erro || ""), `${r.status} ${jsonDe(r)?.erro}`);
  r = await vistoDe(c04, { arquivos: [{ u: urlExtra, t: daqui }] });
  checar("[10] …o mesmo arquivo recebido depois da última mudança: 200, e ele entra no visto", r.status === 200 && jsonDe(r).visto.arquivos.some((a) => a.rel.endsWith("extra-dinamica.jpg")), `${r.status}`);
  // Achado 14: as recusas do render chegam ao servidor (arquivo citado que falta, contrato do render).
  const outra04 = join(COPIA, "out", PROJ, "_media", "foto", "s04", outras04[0]), bytesOutra = readFileSync(outra04);
  rmSync(outra04);
  c04 = await cenaC("s04");
  checar("[14] foto citada que não existe: a s04 fica com erro (bloco vermelho)", /cita arquivo que não existe/.test(c04.erro || ""), c04.erro);
  r = await vistoDe(c04); checar("[14] …e o visto dela é recusado (422)", r.status === 422, `${r.status}`);
  writeFileSync(outra04, bytesOutra);
  const htmlS02 = join(COPIA, "out", PROJ, "graphics", "s02.html"), orig02 = readFileSync(htmlS02);
  appendFileSync(htmlS02, "\n<script>window.__sorteio = Math.random();</script>\n");
  const c02q = await cenaC("s02");
  checar("[14] cena que quebra o contrato do render (Math.random): erro na linha, com a regra", /contrato/.test(c02q.erro || "") && /Math\.random/.test(c02q.erro || ""), c02q.erro);
  r = await vistoDe(c02q); checar("[14] …e o visto dela é recusado (422)", r.status === 422, `${r.status}`);
  writeFileSync(htmlS02, orig02);
  checar("[14] o HTML de volta: a s02 sem erro", !(await cenaC("s02")).erro);
  r = await pedir(CP, "/lt/motor.js");
  checar("[14] a página recebe o verificarMidias do render em /lt/motor.js", r.status === 200 && r.corpo.toString().includes("__LT_verificarMidias") && r.corpo.toString().includes(m.verificarMidias.toString().slice(0, 60)), `${r.status}`);
  const med0 = await post("/api/medida", { cena: "s02", tipo: "toque", quadrosPorSegundo: 29.7, derivaQuadros: { media: 0.1, max: 1 }, lixo: { a: { b: { c: { d: { e: 1 } } } } } });
  const med = readFileSync(join(COPIA, "out", PROJ, "_tmp", "linha-do-tempo", "medidas.jsonl"), "utf8").trim().split("\n").map((l) => JSON.parse(l)).at(-1);
  checar("medida: 200 e gravada em medidas.jsonl, limpa", med0.status === 200 && med.quadrosPorSegundo === 29.7 && med.cena === "s02" && med.lixo.a.b.c === null);

  // ── 6b. mapas: o rascunho não se aprova, o proxy vale pelo clipe de origem (na cópia) ──────────────
  titulo("6b. mapas: visto em rascunho, proxy e clipe refeito (achados 5, 11 e 12)");
  let c05 = await cenaC("s05");
  checar("a s05 começa em rascunho (sem proxy na cópia)", c05.modoMapa === "rascunho", c05.modoMapa);
  r = await vistoDe(c05);
  checar("[5] visto da s05 em rascunho: 200, gravado como rascunho", r.status === 200 && jsonDe(r).visto.modo === "rascunho", `${r.status}`);
  let e05 = estadoDoProjeto(m, COPIA, PROJ);
  checar("[5] mapa visto só em rascunho NÃO é aprovável, e o estado diz por quê", !e05.resumo.aprovaveis.includes("s05") && e05.resumo.semSatelite.includes("s05"), `aprováveis: ${e05.resumo.aprovaveis.join(",")}`);
  const p05 = e05.cenas.find((c) => c.id === "s05");
  apendarAprov([{ proj: PROJ, cena: "s05", sha1: p05.sha1, arquivos: p05.arquivosVistos, modo: "rascunho", mensagem: "sim", hora: "teste", quando: new Date().toISOString() }]);
  c = cli(["conferir", PROJ, `--raiz=${COPIA}`]);
  checar("[5] uma aprovação de mapa feita sobre o rascunho não vale: conferir sai 1 e diz \"sem satélite\"", c.codigo === 1 && /s05: o mapa foi aprovado vendo o rascunho/.test(c.out), c.out.split("\n").find((l) => /s05/.test(l)));
  const simularProxy = (rel) => { const abs = join(COPIA, ...rel.split("/")); mkdirSync(join(abs, ".."), { recursive: true }); writeFileSync(abs, ""); };
  simularProxy(p05.proxyEsperado);   // o proxy desta versão do clipe, simulado
  c05 = await cenaC("s05");
  checar("com o proxy feito, a s05 passa ao clipe (modo proxy)", c05.modoMapa === "proxy" && !!c05.proxy, c05.modoMapa);
  checar("[11] o visto feito em rascunho NÃO vale para o mapa com satélite: \"nova versão para ver\"", c05.visto === "velho", c05.visto);
  r = await vistoDe(c05, { modo: "iframe" }); checar("[11] visto em rascunho com o proxy já pronto: 409", r.status === 409, `${r.status}`);
  r = await vistoDe(c05);
  const v05 = jsonDe(r)?.visto;
  checar("[12] visto pelo proxy: 200, modo proxy, com o clipe de origem nos arquivos", r.status === 200 && v05.modo === "proxy" && v05.arquivos.some((a) => a.rel === "out/juneau/graphics/s05.mp4"), `${r.status}`);
  e05 = estadoDoProjeto(m, COPIA, PROJ);
  checar("[5] vista pelo clipe: a s05 é aprovável", e05.resumo.aprovaveis.includes("s05") && !e05.resumo.semSatelite.includes("s05"));
  const mp405 = join(COPIA, "out", PROJ, "graphics", "s05.mp4");
  writeFileSync(mp405, "clipe refeito");   // o render --forcar com o mesmo HTML (uma geometria trocada), simulado
  c05 = await cenaC("s05");
  const pe05 = estadoDoProjeto(m, COPIA, PROJ).cenas.find((x) => x.id === "s05");
  checar("[12] clipe refeito com o mesmo HTML: o proxy velho deixa de servir (outro nome) e a s05 volta ao rascunho", c05.modoMapa === "rascunho" && !c05.proxy && pe05.proxyEsperado !== p05.proxyEsperado,
    `${p05.proxyEsperado.split("/").pop()} → ${pe05.proxyEsperado.split("/").pop()}`);
  // O visto em rascunho de antes volta a valer (é o rascunho de agora), mas o feito pelo proxy não: o clipe mudou.
  checar("[12] …e o visto pelo proxy de antes cai (o clipe de origem mudou): sobra só o de rascunho, que não se aprova",
    c05.vistoModo === "rascunho" && pe05.semSatelite && !estadoDoProjeto(m, COPIA, PROJ).resumo.aprovaveis.includes("s05"), `${c05.visto}/${c05.vistoModo}`);
  const { gerarProxies } = await import("./mapa.mjs");
  const g05 = await gerarProxies(m, COPIA, lerLinha(m, COPIA, PROJ), { cenas: ["s05"] });
  checar("[12] o verbo proxies não pula a s05 como \"já existe\" (tenta a cópia do clipe novo)", !g05.pulados.some((p) => /já existe/.test(p.motivo)) && (g05.feitos.includes("s05") || g05.falhas.some((f) => f.id === "s05")),
    JSON.stringify({ pulados: g05.pulados, falhas: g05.falhas.map((f) => f.id) }));

  // ── 7. aprovar, conferir e --depois-do-render (na cópia) ───────────────────────────────────────
  titulo("7. aprovar, conferir e --depois-do-render");
  c = cli(["conferir", PROJ]);
  checar("no Juneau real, conferir sem aprovação sai 1", c.codigo === 1, `${c.codigo}`);
  const R = `--raiz=${COPIA}`;
  c = cli(["conferir", PROJ, R]); checar("na cópia, antes de tudo: conferir sai 1", c.codigo === 1, `${c.codigo}`);
  c = cli(["conferir", "nao-existe", R]); checar("projeto que não existe: conferir sai 2", c.codigo === 2, `${c.codigo}`);
  c = cli(["aprovar", PROJ, R, "--hora=12:00", "--assinatura=000000000000"]); checar("aprovar sem --mensagem sai 2", c.codigo === 2, `${c.codigo}`);
  c = cli(["aprovar", PROJ, R, "--mensagem=sim", "--assinatura=000000000000"]); checar("aprovar sem --hora sai 2", c.codigo === 2, `${c.codigo}`);
  c = cli(["aprovar", PROJ, R, "--mensagem=sim", "--hora=12:00"]); checar("[6] aprovar sem --assinatura sai 2", c.codigo === 2, `${c.codigo}`);
  c = cli(["estado", PROJ, R, "--opcao-que-nao-existe"]); checar("opção desconhecida sai 2", c.codigo === 2, `${c.codigo}`);
  // As cenas de mapa só se aprovam vistas pelo clipe: o proxy de cada uma, simulado.
  for (const cc of estadoDoProjeto(m, COPIA, PROJ).cenas.filter((x) => x.tipo === "mapa" && x.modoMapa !== "proxy")) simularProxy(cc.proxyEsperado);
  const L2 = await linhaC();
  checar("as 17 de mapa pelo clipe na cópia", L2.cenas.filter((x) => x.tipo === "mapa").length === 17 && L2.cenas.filter((x) => x.modoMapa === "proxy").length === 17,
    `${L2.cenas.filter((x) => x.modoMapa === "proxy").length} pelo clipe`);
  for (const cc of L2.cenas) {
    if (cc.visto === "atual") continue;
    r = await vistoDe(cc, cc.id === "s04" ? { arquivos: [{ u: urlExtra, t: daqui }] } : {});
    if (r.status !== 200) { checar(`visto de ${cc.id}`, false, `${r.status} ${jsonDe(r)?.erro}`); break; }
  }
  r = await post("/api/comentar", { cena: "s06", t: 2, tVideo: 48.4, sha1: sha("s06"), texto: "teste da ferramenta: comentário aberto" });
  const aberto = jsonDe(r).marcas[0].id;
  const assin = () => JSON.parse(cli(["estado", PROJ, R, "--json"]).out).resumo.assinatura;
  const A1 = assin();
  c = cli(["aprovar", PROJ, R, "--mensagem=sim, pode renderizar", "--hora=02/10/2026 18:00", `--assinatura=${A1}`]);
  const aprov = () => readFileSync(join(COPIA, "out", PROJ, "qc", "_aprovacao-lucas.jsonl"), "utf8").trim().split("\n").map((l) => JSON.parse(l)).filter((a) => a.hora !== "teste");
  let ap = aprov();
  checar("aprovar com o \"sim\" e a assinatura do estado: sai 0 e grava as 54 vistas sem comentário (a s06 fica fora)", c.codigo === 0 && ap.length === 54 && !ap.some((a) => a.cena === "s06") &&
    ap.every((a) => a.mensagem === "sim, pode renderizar" && a.hora === "02/10/2026 18:00" && /^[0-9a-f]{40}$/.test(a.sha1) && a.assinatura === A1), `${c.codigo}, ${ap.length} linhas`);
  checar("…a s04 é aprovada com as fotos e o arquivo que a cena pediu", ap.find((a) => a.cena === "s04")?.arquivos?.length === 3, `${ap.find((a) => a.cena === "s04")?.arquivos?.length}`);
  checar("[5] …e cada mapa é aprovado com o modo proxy gravado", ap.filter((a) => L2.cenas.find((x) => x.id === a.cena).tipo === "mapa").every((a) => a.modo === "proxy"));
  c = cli(["conferir", PROJ, R]); checar("conferir sai 1 e aponta a s06 com o comentário aberto", c.codigo === 1 && /s06: 1 comentário/.test(c.out), c.out.split("\n").slice(1, 3).join(" | "));
  const A2 = assin();
  m.marcarStatus(COPIA, aberto, "ajustada", "teste da ferramenta");
  c = cli(["aprovar", PROJ, R, "--mensagem=sim", "--hora=18:05", `--assinatura=${A2}`]);
  checar("[6] o conjunto mudou depois do estado (o comentário fechou): aprovar recusa com saída 1 e não grava", c.codigo === 1 && aprov().length === 54 && /mudou desde o estado/.test(c.out), `${c.codigo}, ${aprov().length}`);
  c = cli(["aprovar", PROJ, R, "--mensagem=sim", "--hora=18:05", `--assinatura=${assin()}`]);
  checar("comentário fechado e novo \"sim\" com a assinatura nova: só a s06 entra", c.codigo === 0 && aprov().length === 55 && aprov().at(-1).cena === "s06", `${aprov().length}`);
  c = cli(["aprovar", PROJ, R, "--mensagem=sim", "--hora=18:06", `--assinatura=${assin()}`]);
  checar("aprovar de novo não duplica (sai 0, nada novo)", c.codigo === 0 && aprov().length === 55, `${c.codigo}, ${aprov().length}`);
  c = cli(["conferir", PROJ, R]); checar("conferir sai 0 com as 55 aprovadas na versão atual", c.codigo === 0, c.out.trim().split("\n")[0]);
  // A s04 mudou (HTML e fotos) depois do clipe: o clipe é de outra versão.
  c = cli(["conferir", PROJ, R, "--depois-do-render"]);
  checar("--depois-do-render sai 1: o clipe da s04 é da versão de antes do byte novo", c.codigo === 1 && /s04: o clipe não é da versão aprovada/.test(c.out) && c.out.trim().split("\n").length === 2, c.out.split("\n")[1]);
  let est7 = estadoDoProjeto(m, COPIA, PROJ);
  checar("…e a s04 está em aRenderizar", est7.resumo.aRenderizar.join() === "s04", est7.resumo.aRenderizar.join(","));
  // Achados 1 e 13: o comentário feito DEPOIS do "sim" segura a trava e o render.
  r = await post("/api/comentar", { cena: "s04", t: 1, tVideo: 27.2, sha1: sha("s04"), texto: "teste da ferramenta: ainda quero mudar isto" });
  const depois = jsonDe(r).marcas[0].id;
  est7 = estadoDoProjeto(m, COPIA, PROJ);
  checar("[1] comentário depois da aprovação: a s04 continua aprovada, mas sai do aRenderizar", est7.cenas.find((x) => x.id === "s04").aprovada === "atual" && !est7.resumo.aRenderizar.includes("s04"), est7.resumo.aRenderizar.join(","));
  c = cli(["conferir", PROJ, R]); checar("[1] …e conferir sai 1, com a s04 e o comentário", c.codigo === 1 && /s04: 1 comentário/.test(c.out), c.out.split("\n")[1]);
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("[1] …e --depois-do-render também sai 1", c.codigo === 1 && /s04: 1 comentário/.test(c.out), c.out.split("\n")[1]);
  m.marcarStatus(COPIA, depois, "preservada", "teste da ferramenta");
  // O render da versão aprovada, simulado: o carimbo novo E o clipe regravado (mais novo que as fotos).
  const graf = (f) => join(COPIA, "out", PROJ, "graphics", f);
  const renderSimulado = (id) => { writeFileSync(graf(`${id}.mp4`), `render ${Date.now()}`); writeFileSync(graf(`${id}.mp4.de-html`), `${estadoDoProjeto(m, COPIA, PROJ).cenas.find((x) => x.id === id).sha1}\n2160p\n`); };
  renderSimulado("s04");
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("com o clipe da s04 refeito: --depois-do-render sai 0 (clipes 2160p da versão aprovada)", c.codigo === 0, c.out.trim().split("\n")[0]);
  // Achado 2: a foto trocada depois do "sim" e do render não passa na trava final.
  const foto018 = join(COPIA, "out", PROJ, "_media", "foto", "s04", fotoS04);
  appendFileSync(foto018, Buffer.from([1]));
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("[2] foto trocada depois da aprovação e do render: --depois-do-render sai 1", c.codigo === 1 && /s04:/.test(c.out), c.out.split("\n")[1]);
  // Achado 9: ele vê e aprova a foto nova (o HTML é o mesmo): o clipe velho não pode passar por "em dia".
  const c04n = await cenaC("s04");
  r = await vistoDe(c04n, { arquivos: [{ u: urlExtra, t: daqui }] });
  c = cli(["aprovar", PROJ, R, "--mensagem=sim", "--hora=18:10", `--assinatura=${assin()}`]);
  est7 = estadoDoProjeto(m, COPIA, PROJ);
  const s04e = est7.cenas.find((x) => x.id === "s04");
  checar("[9] a foto nova vista e aprovada, o HTML igual: o clipe NÃO conta como em dia", r.status === 200 && c.codigo === 0 && s04e.aprovada === "atual" && s04e.carimboEmDia && !s04e.clipeEmDia, s04e.motivoClipe);
  checar("[9] …a s04 volta ao aRenderizar, e na lista do --forcar (o carimbo do render só olha o HTML)", est7.resumo.aRenderizar.includes("s04") && est7.resumo.aRenderizarForcar.includes("s04"), `${est7.resumo.aRenderizar} · ${est7.resumo.aRenderizarForcar}`);
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("[9] …e --depois-do-render sai 1: o clipe é mais velho que a foto", c.codigo === 1 && /s04: o clipe é mais velho que/.test(c.out), c.out.split("\n")[1]);
  renderSimulado("s04");
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("[9] o clipe refeito depois da foto: sai 0", c.codigo === 0, c.out.trim().split("\n")[0]);
  const s02b = readFileSync(graf("s02.html"));
  const mudado = Buffer.from(s02b); mudado[mudado.length - 1] = mudado[mudado.length - 1] === 0x0a ? 0x20 : 0x0a;
  writeFileSync(graf("s02.html"), mudado);
  c = cli(["conferir", PROJ, R]); checar("1 byte trocado na s02: conferir sai 1 (mudou depois de vista)", c.codigo === 1 && /s02: a cena mudou depois/.test(c.out), c.out.split("\n")[1]);
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("…e --depois-do-render sai 1", c.codigo === 1 && /s02:/.test(c.out), c.out.split("\n")[1]);
  writeFileSync(graf("s02.html"), s02b);
  c = cli(["conferir", PROJ, R]); checar("o byte de volta: conferir sai 0 de novo", c.codigo === 0, `${c.codigo}`);
  const carimbo07 = graf("s07.mp4.de-html"), orig07 = readFileSync(carimbo07);
  writeFileSync(carimbo07, `${sha("s07")}\n1080p\n`);
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("clipe da s07 em 1080p: --depois-do-render sai 1", c.codigo === 1 && /s07:/.test(c.out), c.out.split("\n")[1]);
  writeFileSync(carimbo07, `${"f".repeat(40)}\n2160p\n`);
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("clipe da s07 de outra versão: --depois-do-render sai 1", c.codigo === 1 && /s07:/.test(c.out), c.out.split("\n")[1]);
  writeFileSync(carimbo07, orig07);
  const carimbo06 = graf("s06.mp4.de-html"), orig06 = readFileSync(carimbo06);
  writeFileSync(carimbo06, `${sha("s06")}\n1080p\n`);
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("clipe da s06 (página) em 1080p: --depois-do-render sai 1", c.codigo === 1 && /s06: o clipe é 1080p/.test(c.out), c.out.split("\n")[1]);
  writeFileSync(carimbo06, orig06);
  const mp406 = graf("s06.mp4"), b06 = readFileSync(mp406);
  rmSync(mp406);
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("sem o s06.mp4: --depois-do-render sai 1", c.codigo === 1 && /s06: sem o \.mp4/.test(c.out), c.out.split("\n")[1]);
  writeFileSync(mp406, b06);
  c = cli(["conferir", PROJ, R, "--depois-do-render"]); checar("tudo de volta: --depois-do-render sai 0", c.codigo === 0, c.out.trim().split("\n").slice(0, 2).join(" | "));
  const estC = estadoDoProjeto(m, COPIA, PROJ);
  checar("estado da cópia: 55 aprovadas nesta versão", estC.resumo.aprovadasAtual === 55, `${estC.resumo.aprovadasAtual}`);

  // ── 8. a legenda em português (na cópia) ───────────────────────────────────────────────────────
  // Lucas, 22/10/2026: "Sobre o vídeo (Recomendado)". A tradução é de mentira (o texto não importa aqui): a prova é do
  // contrato (legenda.mjs montar e conferir), da lista fechada (só o legenda-pt.json montado, do projeto da linha) e do
  // estado que a página recebe ("em-dia", "outra-versao", "sem"). Tudo na cópia; o Juneau real só se lê.
  titulo("8. a legenda em português (legenda.mjs, a lista fechada e o estado; na cópia)");
  const LEG_CLI = join(PASTA_CODIGO, "legenda.mjs");
  const leg = (args) => { const x = spawnSync(process.execPath, [LEG_CLI, ...args], { cwd: RAIZ_CANAL, encoding: "utf8" }); return { codigo: x.status, out: (x.stdout || "") + (x.stderr || "") }; };
  const RL = `--raiz=${COPIA}`;
  const pastaLC = join(COPIA, "out", PROJ, "_tmp", "linha-do-tempo");
  const arqTrad = join(pastaLC, "legenda-pt.traducao.json"), arqLeg = join(pastaLC, "legenda-pt.json");
  const wordsC = join(COPIA, "out", PROJ, "words.json"), roteiroC = join(COPIA, "roteiros", PROJ, "roteiro-narrador.md");
  mkdirSync(join(COPIA, "roteiros", PROJ), { recursive: true });
  copyFileSync(join(RAIZ_CANAL, "roteiros", PROJ, "roteiro-narrador.md"), roteiroC);
  rmSync(arqTrad, { force: true }); rmSync(arqLeg, { force: true });
  const sha256 = (b) => createHash("sha256").update(b).digest("hex");
  const palavrasC = JSON.parse(readFileSync(wordsC, "utf8"));
  // Um bloco por frase (palavra que termina em . ? !), partido a cada 14 palavras.
  const blocosProva = [];
  for (let i = 0, de = 0; i < palavrasC.length; i++) {
    if (/[.?!]["\u201d\u2019)]*$/.test(palavrasC[i].w) || i - de >= 13 || i === palavrasC.length - 1) {
      blocosProva.push({ de, ate: i, pt: `Bloco de prova ${blocosProva.length}, palavras ${de} a ${i}.` }); de = i + 1;
    }
  }
  const tradBase = () => ({ proj: PROJ, words_sha256: sha256(readFileSync(wordsC)), roteiro_sha256: sha256(readFileSync(roteiroC)), idioma: "pt-BR",
    blocos: blocosProva.map((b) => ({ ...b })) });
  const gravarTrad = (t) => writeFileSync(arqTrad, JSON.stringify(t, null, 1));
  const retratoLeg = () => { try { const st = statSync(arqLeg); return `${st.size}|${st.mtimeMs}|${sha256(readFileSync(arqLeg))}`; } catch { return "ausente"; } };
  const estadoLeg = async () => (await linhaC()).legenda || {};
  // Um bloco do meio com pelo menos 2 palavras (para abrir buraco ou sobrepor sem inverter o bloco).
  const kM = blocosProva.findIndex((b, i) => i >= 5 && b.ate - b.de >= 2);

  let lg = await estadoLeg();
  checar("[legenda] sem legenda montada: o estado diz \"sem legenda\", sem url", lg.estado === "sem" && lg.motivo === "sem legenda" && lg.url === null, JSON.stringify(lg));
  checar("[legenda] …mas traz o words_sha256 do words.json de agora (a página o guarda na partida)", lg.words_sha256 === sha256(readFileSync(wordsC)), `${lg.words_sha256}`);
  c = leg(["montar", PROJ, RL]);
  checar("[legenda] montar sem a tradução: sai 1, diz o que falta e não grava", c.codigo === 1 && /falta out\/juneau\/_tmp\/linha-do-tempo\/legenda-pt\.traducao\.json/.test(c.out) && !existsSync(arqLeg), `${c.codigo} ${c.out.trim().split("\n").slice(-1)}`);
  c = leg(["conferir", PROJ, RL]); checar("[legenda] conferir sem legenda montada: sai 1", c.codigo === 1, `${c.codigo} ${c.out.trim()}`);

  gravarTrad(tradBase());
  c = leg(["montar", PROJ, RL]);
  const montada = existsSync(arqLeg) ? JSON.parse(readFileSync(arqLeg, "utf8")) : null;
  checar("[legenda] a tradução válida: montar sai 0 e grava o legenda-pt.json", c.codigo === 0 && !!montada, `${c.codigo} ${c.out.trim().split("\n").slice(-1)}`);
  checar("[legenda] …com proj, idioma, words_sha256 e roteiro_sha256 de agora, a hora da montagem e todos os blocos", !!montada && montada.proj === PROJ && montada.idioma === "pt-BR" &&
    montada.words_sha256 === sha256(readFileSync(wordsC)) && montada.roteiro_sha256 === sha256(readFileSync(roteiroC)) && !Number.isNaN(Date.parse(montada.montado_em)) &&
    montada.blocos.length === blocosProva.length, montada && `${montada.blocos.length} blocos`);
  checar("[legenda] …e cada bloco com t0 = start da palavra \"de\" e t1 = end da palavra \"ate\"", !!montada && montada.blocos.every((b, i) => b.de === blocosProva[i].de && b.ate === blocosProva[i].ate &&
    b.t0 === palavrasC[b.de].start && b.t1 === palavrasC[b.ate].end && b.pt === blocosProva[i].pt));
  c = leg(["conferir", PROJ, RL]); checar("[legenda] conferir com a legenda em dia: sai 0", c.codigo === 0, c.out.trim());

  // As recusas: cada uma sai 1, aponta o bloco e o motivo, e não toca a legenda montada.
  const valida = retratoLeg();
  const recusa = (nome, mudar, re) => {
    const t = tradBase(); mudar(t); gravarTrad(t);
    const x = leg(["montar", PROJ, RL]);
    checar(`[legenda] recusa ${nome}: sai 1 e não grava`, x.codigo === 1 && re.test(x.out) && retratoLeg() === valida, `${x.codigo} ${x.out.trim().split("\n").filter((l) => /^\s+-/.test(l)).slice(0, 2).join(" | ")}`);
  };
  recusa("o buraco", (t) => { t.blocos[kM].de += 1; }, new RegExp(`bloco ${kM}: buraco: as palavras ${blocosProva[kM].de}–${blocosProva[kM].de} ficam sem legenda`));
  recusa("a sobreposição", (t) => { t.blocos[kM].de -= 1; }, new RegExp(`bloco ${kM}: sobreposição`));
  recusa("o primeiro bloco fora do 0", (t) => { t.blocos[0].de = 1; }, /bloco 0: o primeiro bloco começa em 1/);
  recusa("as últimas palavras sem bloco", (t) => { t.blocos.pop(); }, /ficam sem legenda \(o último bloco tem de acabar em/);
  recusa("o índice fora do words.json", (t) => { t.blocos.at(-1).ate = palavrasC.length; }, new RegExp(`bloco ${blocosProva.length - 1}: "ate" ${palavrasC.length} fora do words\\.json`));
  recusa("o índice que não é inteiro", (t) => { t.blocos[kM].de = String(t.blocos[kM].de); }, new RegExp(`bloco ${kM}: "de" e "ate" têm de ser inteiros`));
  recusa("o \"de\" depois do \"ate\"", (t) => { const b = t.blocos[kM]; [b.de, b.ate] = [b.ate, b.de]; }, new RegExp(`bloco ${kM}: "de" \\d+ depois do "ate"`));
  recusa("o pt vazio", (t) => { t.blocos[kM].pt = "   "; }, new RegExp(`bloco ${kM}: "pt" vazio`));
  recusa("o pt só de espaço de largura zero", (t) => { t.blocos[kM].pt = String.fromCharCode(0x200b, 0x200b); }, new RegExp(`bloco ${kM}: "pt" vazio`));
  recusa("o pt com controle de direção (bidi)", (t) => { t.blocos[kM].pt = "a" + String.fromCharCode(0x202e) + "b"; }, new RegExp(`bloco ${kM}: "pt" com caractere de controle`));
  recusa("o pt com mais de 100 caracteres", (t) => { t.blocos[kM].pt = "á".repeat(101); }, new RegExp(`bloco ${kM}: "pt" com 101 caracteres \\(o teto é 100\\)`));
  recusa("o pt com quebra de linha", (t) => { t.blocos[kM].pt = "linha um" + String.fromCharCode(10) + "linha dois"; }, new RegExp(`bloco ${kM}: "pt" com quebra de linha`));
  recusa("o pt com quebra de linha Unicode (U+2028)", (t) => { t.blocos[kM].pt = "linha um" + String.fromCharCode(0x2028) + "linha dois"; }, new RegExp(`bloco ${kM}: "pt" com quebra de linha`));
  recusa("o words_sha256 de outra narração", (t) => { t.words_sha256 = "0".repeat(64); }, /tradução: a tradução é de outra versão da narração/);
  recusa("o roteiro_sha256 de outro roteiro", (t) => { t.roteiro_sha256 = "f".repeat(64); }, /tradução: a tradução é de outra versão do roteiro/);
  recusa("o projeto errado", (t) => { t.proj = "outro"; }, /"proj" é "outro"/);
  recusa("o idioma errado", (t) => { t.idioma = "en-US"; }, /"idioma" é "en-US"/);
  writeFileSync(arqTrad, "{ isto não é JSON");
  c = leg(["montar", PROJ, RL]); checar("[legenda] recusa a tradução que não é JSON: sai 1 e não grava", c.codigo === 1 && /não é JSON válido/.test(c.out) && retratoLeg() === valida, `${c.codigo}`);
  // Os limites que passam: 100 caracteres (contados depois do NFC: 100 "á" decompostos são 200 unidades) e o aviso.
  const decomposto = ("a" + String.fromCharCode(0x301)).repeat(100);
  let t8 = tradBase(); t8.blocos[kM].pt = decomposto; gravarTrad(t8);
  c = leg(["montar", PROJ, RL]);
  const comNfc = existsSync(arqLeg) ? JSON.parse(readFileSync(arqLeg, "utf8")).blocos[kM].pt : "";
  checar("[legenda] 100 caracteres passam (contados no NFC), com aviso acima de 84", c.codigo === 0 && new RegExp(`aviso · bloco ${kM}: "pt" com 100 caracteres`).test(c.out) && comNfc === "á".repeat(100), `${c.codigo} ${c.out.trim().split("\n")[0]}`);
  t8 = tradBase(); const bk = t8.blocos[kM];
  t8.blocos.splice(kM, 1, { de: bk.de, ate: bk.de, pt: "Curto." }, { de: bk.de + 1, ate: bk.ate, pt: bk.pt }); gravarTrad(t8);
  c = leg(["montar", PROJ, RL]);
  checar("[legenda] a fala abaixo de 0,8 s (um bloco de uma palavra) é aviso, não erro", c.codigo === 0 && new RegExp(`aviso · bloco ${kM}: [\\d.]+ s de fala \\(abaixo de 0\\.8 s`).test(c.out),
    `${c.codigo} · ${(palavrasC[bk.de].end - palavrasC[bk.de].start).toFixed(2)} s · ${c.out.trim().split("\n")[0]}`);
  gravarTrad(tradBase());
  c = leg(["montar", PROJ, RL]); checar("[legenda] a tradução válida de novo: sai 0", c.codigo === 0, `${c.codigo}`);
  // Uso errado: 2.
  for (const [nome, args] of [["sem verbo", [RL]], ["verbo desconhecido", ["traduzir", PROJ, RL]], ["sem projeto", ["montar", RL]], ["dois projetos", ["montar", PROJ, "outro", RL]],
    ["opção desconhecida", ["montar", PROJ, RL, "--forcar"]], ["projeto que não existe", ["montar", "nao-existe", RL]], ["projeto com ..", ["conferir", "..", RL]]]) {
    c = leg(args); checar(`[legenda] uso errado (${nome}): sai 2`, c.codigo === 2, `${c.codigo} ${c.out.trim().split("\n")[0]}`);
  }

  // A lista fechada: só o legenda-pt.json montado, do projeto da linha.
  const ctx = { proj: PROJ, ids: new Set(["s02"]), narracao: `out/${PROJ}/narracao.wav` };
  checar("[legenda] caminhoPermitido: o legenda-pt.json do projeto da linha entra", caminhoPermitido(`out/${PROJ}/_tmp/linha-do-tempo/legenda-pt.json`, ctx));
  for (const p of [`out/outro/_tmp/linha-do-tempo/legenda-pt.json`, `out/${PROJ}/_tmp/linha-do-tempo/legenda-pt.traducao.json`, `out/${PROJ}/_tmp/linha-do-tempo/vistos.jsonl`,
    `out/${PROJ}/_tmp/linha-do-tempo/medidas.jsonl`, `out/${PROJ}/_tmp/linha-do-tempo/legenda-pt.json.tmp-1`, `out/${PROJ}/_tmp/linha-do-tempo/x/legenda-pt.json`,
    `out/${PROJ}/_tmp/legenda-pt.json`, `out/${PROJ}/legenda-pt.json`, `out/${PROJ}/_tmp/linha-do-tempo/legenda-pt.jsonx`, `out/${PROJ}/_tmp/linha-do-tempo/quadros/s02/s02@001.png`]) {
    checar(`[legenda] caminhoPermitido recusa ${p}`, !caminhoPermitido(p, ctx));
  }
  // E pelo servidor: o arquivo montado sai; os vizinhos, outro projeto e a travessia, não.
  const outroLeg = join(COPIA, "out", "outro", "_tmp", "linha-do-tempo", "legenda-pt.json");
  mkdirSync(join(outroLeg, ".."), { recursive: true }); copyFileSync(arqLeg, outroLeg);
  writeFileSync(`${arqLeg}.tmp-1`, "{}");
  r = await pedir(CP, `/out/${PROJ}/_tmp/linha-do-tempo/legenda-pt.json`);
  checar("[legenda] GET do legenda-pt.json montado: 200, JSON, os mesmos bytes do disco", r.status === 200 && /^application\/json/.test(r.h["content-type"]) && Buffer.compare(r.corpo, readFileSync(arqLeg)) === 0, `${r.status} ${r.h["content-type"]}`);
  for (const p of [`/out/outro/_tmp/linha-do-tempo/legenda-pt.json`, `/out/${PROJ}/_tmp/linha-do-tempo/legenda-pt.traducao.json`, `/out/${PROJ}/_tmp/linha-do-tempo/LEGENDA-PT.TRADUCAO.JSON`,
    `/out/${PROJ}/_tmp/linha-do-tempo/vistos.jsonl`, `/out/${PROJ}/_tmp/linha-do-tempo/medidas.jsonl`, `/out/${PROJ}/_tmp/linha-do-tempo/legenda-pt.json.tmp-1`]) {
    r = await pedir(CP, p); checar(`[legenda] 404 em ${p}`, r.status === 404, `${r.status}`);
  }
  for (const p of [`/out/outro/%2e%2e/${PROJ}/_tmp/linha-do-tempo/legenda-pt.json`, `/out/${PROJ}/_tmp/linha-do-tempo/legenda-pt.json/%2e%2e/legenda-pt.traducao.json`,
    `/out/${PROJ}/_tmp/linha-do-tempo/%2e%2e/linha-do-tempo/vistos.jsonl`, `/out/${PROJ}/_tmp/linha-do-tempo%5clegenda-pt.traducao.json`, `/out/${PROJ}/_tmp/linha-do-tempo/..%5clinha-do-tempo%5clegenda-pt.traducao.json`]) {
    r = await pedir(CP, p); checar(`[legenda] travessia recusada (403 ou 404): ${p}`, r.status === 403 || r.status === 404, `${r.status}`);
  }

  // O estado que a página recebe: "em-dia" só com o words_sha256 igual ao do words.json servido.
  lg = await estadoLeg();
  const shaW = sha256(readFileSync(wordsC));
  checar("[legenda] legenda montada e narração igual: o estado diz \"em-dia\", com a url versionada e o words_sha256 de agora", lg.estado === "em-dia" && !lg.motivo &&
    typeof lg.url === "string" && lg.url.startsWith(`/out/${PROJ}/_tmp/linha-do-tempo/legenda-pt.json?v=${shaW.slice(0, 12)}-`) && lg.words_sha256 === shaW, JSON.stringify(lg));
  r = await pedir(CP, lg.url || "/"); checar("[legenda] …e a url do estado se serve", r.status === 200 && jsonDe(r)?.words_sha256 === shaW, `${r.status}`);
  const lgV = jsonDe(await pedir(CP, "/api/versao"))?.legenda || {};
  checar("[legenda] …e o /api/versao (a pergunta de 2 s) traz o mesmo estado", lgV.estado === "em-dia" && lgV.url === lg.url, JSON.stringify(lgV));
  const LW0 = await linhaC();   // a /api/linha de uma página que abre agora (o words.json e a narração que ela carrega)
  checar("[legenda] a url do words.json na /api/linha leva os 12 primeiros do words_sha256 de agora, o mesmo do estado da legenda", LW0.words === `/out/${PROJ}/words.json?v=${shaW.slice(0, 12)}` &&
    LW0.legenda?.words_sha256 === shaW, `${LW0.words}`);
  r = await pedir(CP, LW0.words || "/"); checar("[legenda] …e se serve, com os bytes do disco", r.status === 200 && Buffer.compare(r.corpo, readFileSync(wordsC)) === 0, `${r.status}`);
  const wordsOrig = readFileSync(wordsC);
  writeFileSync(wordsC, Buffer.concat([wordsOrig, Buffer.from("\n")]));   // a narração "mudou": outros bytes, o mesmo JSON
  lg = await estadoLeg();
  checar("[legenda] words.json mudou depois da montagem: o estado diz \"legenda de outra versão da narração\", sem url", lg.estado === "outra-versao" && lg.motivo === "legenda de outra versão da narração" &&
    lg.url === null && lg.words_sha256 === sha256(readFileSync(wordsC)), JSON.stringify(lg));
  checar("[legenda] …e a url do words.json passa a levar o sha256 novo", (await linhaC()).words === `/out/${PROJ}/words.json?v=${sha256(readFileSync(wordsC)).slice(0, 12)}`);
  c = leg(["conferir", PROJ, RL]); checar("[legenda] …conferir sai 1 e diz que a narração mudou", c.codigo === 1 && /a narração mudou depois da montagem/.test(c.out), c.out.trim());
  gravarTrad({ ...tradBase(), words_sha256: sha256(wordsOrig) });   // a tradução de antes da mudança
  const antesMud = retratoLeg();
  c = leg(["montar", PROJ, RL]);
  checar("[legenda] …e montar com a tradução de antes da mudança sai 1, sem tocar a legenda", c.codigo === 1 && /outra versão da narração/.test(c.out) && retratoLeg() === antesMud, `${c.codigo}`);
  writeFileSync(wordsC, wordsOrig);
  lg = await estadoLeg(); checar("[legenda] o words.json de volta: \"em-dia\" de novo", lg.estado === "em-dia", lg.estado);
  c = leg(["conferir", PROJ, RL]); checar("[legenda] …e conferir sai 0", c.codigo === 0, c.out.trim());

  // A página aberta durante a troca da narração (defeito 1 da revisão do código, 22/10/2026): ela carregou o words.json e a
  // narração uma vez só, na partida. O words.json muda e a tradução nova é montada sobre ele: o servidor diz "em-dia" (certo,
  // contra o words.json de agora), e a página tem de recusar, porque o áudio e a fala que ela toca são os velhos. Com o
  // código do próprio pagina.js (legendaDestaPagina e carregarLegenda), num vm, contra o servidor da cópia.
  const jsPgV = readFileSync(join(PASTA_CODIGO, "pagina.js"), "utf8");
  const fonteV = (assinatura) => { const i = jsPgV.indexOf(assinatura); const j = jsPgV.indexOf("\n  }\n", i); return i >= 0 && j > i ? jsPgV.slice(i, j + 4) : ""; };
  const codigoGuarda = `${fonteV("function legendaDestaPagina(")} ${fonteV("async function carregarLegenda(")}`;
  /** Uma "página" que abriu com a /api/linha `Lp`: o fetch vai ao servidor da cópia, e cada pedido se conta. */
  const paginaQueAbriu = (Lp) => {
    const pedidos = [];
    const cx = { WORDS_DA_PAGINA: (Lp.legenda && Lp.legenda.words_sha256) || null, NARRACAO_DA_PAGINA: Lp.narracao, ultimoT: 0,
      desenharBotaoLegenda() {}, atualizarLegenda() {}, pedidos,
      LEG: { estado: "sem", motivo: "sem legenda", url: null, wordsSha: null, blocos: [], geracao: 0 },
      fetch: async (url) => { pedidos.push(url); const x = await pedir(CP, url); return { ok: x.status === 200, json: async () => jsonDe(x) }; } };
    vm.runInNewContext(codigoGuarda, cx);
    return cx;
  };
  // O servidor roda neste processo e serve o legenda-pt.json por stream: o pedido acaba (o cliente já tem os bytes) antes de
  // o stream ver o fim do arquivo e fechá-lo, e o spawnSync do montar congela o processo com o arquivo aberto. No Windows, o
  // rename do montar sobre arquivo aberto dá EPERM (visto em 22/10/2026). Antes de cada montar depois de a "página" baixar a
  // legenda, espera o servidor soltar o arquivo: um rename de prova sobre ele (os mesmos bytes), até 2 s.
  const soltarLegenda = async () => {
    const tmp = `${arqLeg}.prova-solta`;
    for (let i = 0; i < 100; i++) {
      try { copyFileSync(arqLeg, tmp); renameSync(tmp, arqLeg); return true; } catch { await new Promise((ok) => setTimeout(ok, 20)); }
    }
    rmSync(tmp, { force: true });
    return false;
  };
  checar("[legenda] página: legendaDestaPagina e carregarLegenda achadas no pagina.js", /function legendaDestaPagina\(info, narracao\)/.test(codigoGuarda) &&
    /^async function carregarLegenda\(info, narracao\) \{\s*info = legendaDestaPagina\(info, narracao\);/.test(codigoGuarda.slice(codigoGuarda.indexOf("async function"))));
  let pgv = paginaQueAbriu(LW0);
  await pgv.carregarLegenda(LW0.legenda, LW0.narracao);
  checar("[legenda] página aberta com a narração de agora: baixa e mostra a legenda (\"em-dia\")", pgv.LEG.estado === "em-dia" && pgv.LEG.blocos.length === blocosProva.length && pgv.pedidos.length === 1,
    `${pgv.LEG.estado} ${pgv.LEG.blocos.length} ${pgv.pedidos.length}`);
  writeFileSync(wordsC, Buffer.concat([wordsOrig, Buffer.from("\n")]));   // a narração muda com a página aberta
  gravarTrad(tradBase());                                                  // e a tradução nova é feita sobre o words.json novo
  await soltarLegenda();
  c = leg(["montar", PROJ, RL]);
  const LW1 = await linhaC();
  checar("[legenda] …o words.json muda e a tradução nova se monta: o servidor diz \"em-dia\" com o sha256 novo", c.codigo === 0 && LW1.legenda?.estado === "em-dia" &&
    LW1.legenda.words_sha256 === sha256(readFileSync(wordsC)) && LW1.legenda.words_sha256 !== LW0.legenda.words_sha256, `${c.codigo} ${c.out.trim().split("\n").filter((l) => /^[✓✗]/.test(l)).join(" | ")} ${JSON.stringify(LW1.legenda)}`);
  await pgv.carregarLegenda(LW1.legenda, LW1.narracao);
  checar("[legenda] …e a página que abriu antes recusa: \"outra-versao\", \"recarregue a página\", sem blocos e sem baixar nada", pgv.LEG.estado === "outra-versao" &&
    /a narração mudou depois que a página abriu: recarregue a página/.test(pgv.LEG.motivo) && pgv.LEG.blocos.length === 0 && pgv.pedidos.length === 1, `${pgv.LEG.estado} · ${pgv.LEG.motivo} · ${pgv.pedidos.length}`);
  const pgNova = paginaQueAbriu(LW1);
  await pgNova.carregarLegenda(LW1.legenda, LW1.narracao);
  checar("[legenda] …e a página recarregada (que carrega o words.json novo) mostra a legenda nova", pgNova.LEG.estado === "em-dia" && pgNova.LEG.blocos.length === blocosProva.length && pgNova.pedidos.length === 1,
    `${pgNova.LEG.estado} ${pgNova.pedidos.length}`);
  // A narração (o áudio) com outra versão, com o mesmo words.json: também recusa. E a página que abriu sem words.json não
  // aceita legenda que apareça depois. O "sem" do servidor passa como veio.
  pgv = paginaQueAbriu(LW1);
  await pgv.carregarLegenda(LW1.legenda, `${LW1.narracao}x`);
  checar("[legenda] página: o mesmo words.json com a narração em outra versão: \"outra-versao\", sem baixar", pgv.LEG.estado === "outra-versao" && pgv.pedidos.length === 0, `${pgv.LEG.estado} ${pgv.pedidos.length}`);
  await pgv.carregarLegenda(LW1.legenda, LW1.narracao);
  checar("[legenda] …e de volta à narração que ela tocou: \"em-dia\" de novo", pgv.LEG.estado === "em-dia" && pgv.pedidos.length === 1, `${pgv.LEG.estado} ${pgv.pedidos.length}`);
  pgv = paginaQueAbriu({ ...LW1, legenda: { estado: "sem", motivo: "sem legenda", url: null, words_sha256: null } });
  await pgv.carregarLegenda(LW1.legenda, LW1.narracao);
  checar("[legenda] página: a que abriu sem words.json não aceita a legenda que aparece depois", pgv.LEG.estado === "outra-versao" && pgv.pedidos.length === 0, `${pgv.LEG.estado} ${pgv.pedidos.length}`);
  await pgv.carregarLegenda({ estado: "sem", motivo: "sem legenda", detalhe: "x", url: null, words_sha256: LW1.legenda.words_sha256 }, LW1.narracao);
  checar("[legenda] página: o \"sem\" do servidor passa como veio", pgv.LEG.estado === "sem" && pgv.LEG.motivo === "sem legenda" && pgv.pedidos.length === 0, `${pgv.LEG.estado} ${pgv.LEG.motivo}`);
  // A ligação na partida e na pergunta de 2 s: os dois guardados uma vez só, ANTES de baixar o words.json, e as duas
  // chamadas com a narração da mesma resposta.
  checar("[legenda] página: a partida guarda o words_sha256 e a narração da /api/linha antes de baixar o words.json, e só ela os grava",
    /L = await r\.json\(\);[\s\S]*?\n\s*WORDS_DA_PAGINA = \(L\.legenda && L\.legenda\.words_sha256\) \|\| null;\s*NARRACAO_DA_PAGINA = L\.narracao;\s*if \(L\.words\)[\s\S]*?carregarLegenda\(L\.legenda, L\.narracao\);/.test(jsPgV) &&
    (jsPgV.match(/^\s*WORDS_DA_PAGINA = /gm) || []).length === 1 && (jsPgV.match(/^\s*NARRACAO_DA_PAGINA = /gm) || []).length === 1);
  checar("[legenda] página: a pergunta de 2 s passa a narração da mesma resposta, e não há outra chamada", /carregarLegenda\(v\.legenda, v\.narracao\);/.test(jsPgV) &&
    (jsPgV.match(/carregarLegenda\(/g) || []).length === 3);
  // De volta: o words.json original e a legenda montada sobre ele.
  writeFileSync(wordsC, wordsOrig);
  gravarTrad(tradBase());
  await soltarLegenda();
  c = leg(["montar", PROJ, RL]);
  lg = await estadoLeg(); checar("[legenda] o words.json original e a legenda montada sobre ele de volta: \"em-dia\"", c.codigo === 0 && lg.estado === "em-dia" && lg.words_sha256 === shaW, `${c.codigo} ${lg.estado}`);
  const legBoa = readFileSync(arqLeg);
  writeFileSync(arqLeg, "{ quebrada");
  lg = await estadoLeg(); checar("[legenda] legenda montada ilegível: \"sem legenda\", sem url", lg.estado === "sem" && lg.motivo === "sem legenda" && lg.url === null, JSON.stringify(lg));
  c = leg(["conferir", PROJ, RL]); checar("[legenda] …e conferir sai 1", c.codigo === 1, `${c.codigo}`);
  writeFileSync(arqLeg, JSON.stringify({ ...JSON.parse(legBoa.toString("utf8")), proj: "outro" }));
  lg = await estadoLeg(); checar("[legenda] legenda de outro projeto no lugar: \"sem legenda\"", lg.estado === "sem" && lg.url === null, JSON.stringify(lg));
  writeFileSync(arqLeg, legBoa);
  lg = await estadoLeg(); checar("[legenda] a legenda de volta: \"em-dia\"", lg.estado === "em-dia", lg.estado);

  // A página: a legenda é elemento dela, por cima da prévia, e o relógio dos blocos (acharBloco) e a quebra das linhas
  // (quebrarLinhas) se provam aqui, fora do navegador, com o código do próprio pagina.js.
  const htmlPg = readFileSync(join(PASTA_CODIGO, "pagina.html"), "utf8"), jsPg = readFileSync(join(PASTA_CODIGO, "pagina.js"), "utf8");
  const iPalco = htmlPg.indexOf('<div id="palco"'), iLeg = htmlPg.indexOf('<div id="legendaPt"'), iCtl = htmlPg.indexOf('<div id="controles"');
  checar("[legenda] na página: #legendaPt dentro do #palco, depois das cenas, e o botão \"Legenda PT\" nos controles", iPalco >= 0 && iLeg > htmlPg.indexOf('id="slotB"') && iLeg < iCtl &&
    /<button id="legendaBtn"[^>]*>Legenda PT<\/button>/.test(htmlPg) && htmlPg.indexOf('id="legendaBtn"') > iCtl);
  checar("[legenda] na página: o texto entra por textContent (nunca innerHTML), e nada da legenda vai ao iframe", /sp\.textContent = quebrarLinhas/.test(jsPg) &&
    !/legendaPt[^\n]*innerHTML|innerHTML[^\n]*legenda/i.test(jsPg) && !/contentDocument[^\n]*legenda|legenda[^\n]*contentDocument/i.test(jsPg));
  checar("[legenda] na página: a tecla L passa pelo mesmo filtro das outras (caixa aberta, foco em TEXTAREA ou INPUT)",
    /if \(\$\("caixa"\)\.open[^\n]*\n[^\n]*\n\s*if \(tag === "TEXTAREA" \|\| tag === "INPUT"\) return;[\s\S]*?e\.key === "l" \|\| e\.key === "L"\) \{ e\.preventDefault\(\); alternarLegenda\(\); \}/.test(jsPg));
  checar("[legenda] na página: o localStorage só dentro de try/catch", (jsPg.match(/localStorage\./g) || []).length === 2 &&
    /try \{ if \(localStorage\.getItem\(CHAVE_LEG\)/.test(jsPg) && /try \{ localStorage\.setItem\(CHAVE_LEG/.test(jsPg));
  const fonteDe = (nome) => { const i = jsPg.indexOf(`function ${nome}(`); const j = jsPg.indexOf("\n  }\n", i); return i >= 0 && j > i ? jsPg.slice(i, j + 4) : ""; };
  const caixaPg = vm.runInNewContext(`const SEGURA_S = 0.6, LINHA_MAX = 42; const LEG = { blocos: B }; ${fonteDe("acharBloco")} ${fonteDe("quebrarLinhas")} ({ acharBloco, quebrarLinhas });`,
    { B: [{ t0: 1, t1: 2 }, { t0: 3, t1: 4 }, { t0: 4.2, t1: 5 }] });
  const casos = [[0.5, -1], [1, 0], [1.5, 0], [2, 0], [2.5, 0], [2.6, 0], [2.61, -1], [2.99, -1], [3, 1], [4.1, 1], [4.19, 1], [4.2, 2], [5.6, 2], [5.61, -1], [99, -1]];
  const errados = casos.filter(([t, k]) => caixaPg.acharBloco(t) !== k).map(([t, k]) => `${t} s → ${caixaPg.acharBloco(t)} (esperado ${k})`);
  checar("[legenda] o relógio dos blocos: mostra o do instante, segura o anterior até 0,6 s depois do t1, e nunca o próximo antes do t0", errados.length === 0, errados.join("; "));
  const l1 = caixaPg.quebrarLinhas("Uma linha corre ao longo da costa.");
  const l2 = caixaPg.quebrarLinhas("Uma linha corre ao longo da costa do Peru, e a água desce dos Andes até Lima.");
  const l3 = caixaPg.quebrarLinhas("A".repeat(10) + " " + "b".repeat(60) + " " + "c".repeat(29));
  // O meio exato desta frase cai entre "Santa" e "Eulalia": sem a regra do nome, a quebra seria ali.
  const l4 = caixaPg.quebrarLinhas("A represa grande fica em Santa Eulalia, bem longe da costa.");
  checar("[legenda] a quebra: texto curto numa linha; o de 84 em 2 linhas de até 42; nunca 3 linhas", l1.length === 1 && l2.length === 2 && l2.every((x) => x.length <= 42) &&
    l3.length === 2 && l2.join(" ") === "Uma linha corre ao longo da costa do Peru, e a água desce dos Andes até Lima.", JSON.stringify([l1, l2, l3.map((x) => x.length)]));
  checar("[legenda] a quebra evita partir um nome (Santa | Eulalia), mesmo quando o meio cai ali", l4.length === 2 && (l4[0].endsWith("Santa Eulalia,") || l4[1].startsWith("Santa Eulalia,")), JSON.stringify(l4));
  // A 1ª linha não termina em artigo nem preposição, e um nome com partícula não se parte (a revisão de 22/10/2026).
  const l5 = caixaPg.quebrarLinhas("A Comissão da Verdade e Reconciliação do Peru estimou o número de mortos.");
  checar("[legenda] a quebra não deixa a 1ª linha em artigo ou preposição, nem parte \"Verdade e | Reconciliação\"",
    l5.length === 2 && !/(^|\s)(de|da|do|e|o|a|que|para)$/i.test(l5[0]) && !l5[0].endsWith("Verdade e") && l5.every((x) => x.length <= 42), JSON.stringify(l5));
  await descer(C);

  // ── o projeto de verdade não mudou ─────────────────────────────────────────────────────────────
  titulo("Guarda: o que a prova não pode ter mudado");
  const depoisR = retrato();
  checar("a fila de verdade, out/juneau/qc/, out/juneau/graphics/ e os vistos/medidas reais estão como antes", antes === depoisR,
    antes === depoisR ? "" : depoisR.split("\n").filter((l) => !antes.split("\n").includes(l)).slice(0, 5).join(" ; "));
  checar("out/_feedback-queue.jsonl de verdade não foi criado pela prova", antes.includes("_feedback-queue.jsonl|ausente") ? !existsSync(join(RAIZ_CANAL, "out", "_feedback-queue.jsonl")) : true);

  console.log(`\n${falhas ? "✗" : "✓"} ${total - falhas} de ${total} checagens passaram${falhas ? ` — ${falhas} falharam` : ""}.`);
  console.log("Não provado aqui (pede navegador): o relógio, a troca de cena, os quadros por segundo, o vídeo ao vivo (o setter, a pausa do vídeo que a cena deixa de posicionar), o rascunho de mapa desenhado, as recusas da página na carga (verificarMidias, erro de JS, HTTP ≥ 400) e o quadro contra o render; e, da legenda em português, ela desenhada sobre a prévia (tamanho, posição, as 2 linhas), a troca com a voz tocando, a tecla L, o botão e o localStorage.");
  return falhas ? 1 : 0;
}

function apendarAprov(linhas) {
  const arq = join(COPIA, "out", PROJ, "qc", "_aprovacao-lucas.jsonl");
  mkdirSync(join(COPIA, "out", PROJ, "qc"), { recursive: true });
  appendFileSync(arq, linhas.map((l) => JSON.stringify(l)).join("\n") + "\n");
}

/**
 * A cópia do projeto para as provas que escrevem: o mínimo para a linha, sem a mídia pesada. Os arquivos de _media que
 * os HTML citam entram VAZIOS (só o nome, o tamanho e a data contam), menos a 1ª foto da s04, que é a real. Os clipes
 * nascem depois deles: o clipe mais novo que os arquivos da cena é "em dia". Devolve as outras fotos da s04.
 */
function montarCopia(m, fotoS04) {
  rmSync(COPIA, { recursive: true, force: true });   // só a cópia da prova, que esta prova mesma criou
  const de = join(RAIZ_CANAL, "out", PROJ), para = join(COPIA, "out", PROJ);
  mkdirSync(join(para, "graphics"), { recursive: true });
  for (const f of ["espelho.json", "words.json"]) copyFileSync(join(de, f), join(para, f));
  const htmls = readdirSync(join(de, "graphics")).filter((f) => /\.html$/.test(f));
  const citados = new Set();
  for (const f of htmls) for (const rel of citadosDoHtml(readFileSync(join(de, "graphics", f), "utf8"), PROJ)) citados.add(rel);
  for (const rel of citados) { const abs = join(COPIA, ...rel.split("/")); mkdirSync(join(abs, ".."), { recursive: true }); writeFileSync(abs, ""); }
  copyFileSync(join(de, "_media", "foto", "s04", fotoS04), join(para, "_media", "foto", "s04", fotoS04));
  for (const f of readdirSync(join(de, "graphics"))) {
    if (/\.html$|\.mp4\.de-html$/.test(f)) copyFileSync(join(de, "graphics", f), join(para, "graphics", f));
    if (/\.mp4$/.test(f)) writeFileSync(join(para, "graphics", f), "");   // só a existência: o clipe não se lê aqui
  }
  // A narração da cópia: WAV de silêncio com a MESMA duração (8 kHz, 8 bits, mono: 666,05 s = 5.328.400 bytes).
  const dados = 5328400, cab = Buffer.alloc(44);
  cab.write("RIFF", 0, "latin1"); cab.writeUInt32LE(36 + dados, 4); cab.write("WAVEfmt ", 8, "latin1");
  cab.writeUInt32LE(16, 16); cab.writeUInt16LE(1, 20); cab.writeUInt16LE(1, 22); cab.writeUInt32LE(8000, 24);
  cab.writeUInt32LE(8000, 28); cab.writeUInt16LE(1, 32); cab.writeUInt16LE(8, 34); cab.write("data", 36, "latin1"); cab.writeUInt32LE(dados, 40);
  writeFileSync(join(para, "narracao.wav"), Buffer.concat([cab, Buffer.alloc(dados, 0x80)]));
  return [...citados].filter((r) => r.startsWith(`out/${PROJ}/_media/foto/s04/`)).map((r) => r.split("/").pop()).filter((f) => f !== fotoS04).sort();
}

principal().then((c) => process.exit(c), (e) => { console.error(`✗ a prova quebrou: ${e.stack || e.message}`); process.exit(2); });
