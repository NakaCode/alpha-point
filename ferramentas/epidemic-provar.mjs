#!/usr/bin/env node
// epidemic-provar.mjs — a prova da ferramentas/epidemic.mjs SEM o Epidemic.
//
// Tudo aqui é falso: o servidor (o fetch trocado por um módulo carregado com --import, que responde a tudo e devolve 404
// ao que não conhece), a chave (aleatória, nova a cada prova, num arquivo de chaves temporário apontado por REGIE_CHAVES),
// o canal (uma pasta temporária com uma cópia do canal.json) e o áudio (senoides do ffmpeg). Nenhum pedido sai desta
// máquina, a chave de verdade nunca é lida (REGIE_CHAVES aponta para a falsa, e EPIDEMIC_SOUND_API_KEY sai do ambiente
// dos filhos), e nada se grava no canal de verdade: só na pasta temporária, apagada no fim (--manter a guarda).
//
// Uso (cwd na raiz do canal): node ferramentas/epidemic-provar.mjs [--manter]
// Saída: 0 = todas as checagens passaram · 1 = alguma falhou · 2 = não rodou (fora da raiz, sem ffmpeg)
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { spawn, spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const RAIZ = process.cwd();
// EPIDEMIC_PROVAR_ALVO: outra cópia da ferramenta a provar (a contraprova com mutantes); sem ela, a do canal.
const FERRAMENTA = process.env.EPIDEMIC_PROVAR_ALVO ? path.resolve(process.env.EPIDEMIC_PROVAR_ALVO) : path.join(RAIZ, "ferramentas", "epidemic.mjs");
if (!fs.existsSync(FERRAMENTA) || !fs.existsSync(path.join(RAIZ, "canal.json"))) { console.error("NÃO RODOU — rode da raiz do canal (a pasta com o canal.json)."); process.exit(2); }
const FFMPEG = process.env.FFMPEG_PATH || "ffmpeg";
if (spawnSync(FFMPEG, ["-version"], { encoding: "utf8" }).status !== 0) { console.error("NÃO RODOU — o ffmpeg não está no PATH (a prova gera o áudio falso com ele)."); process.exit(2); }

const TMP = fs.mkdtempSync(path.join(os.tmpdir(), "epidemic-provar-"));
const CHAVE = crypto.randomBytes(24).toString("base64url"); // 32 caracteres, falsa; não se imprime
fs.writeFileSync(path.join(TMP, "chaves.env"), `EPIDEMIC_SOUND_API_KEY=${CHAVE}\nOUTRA_CHAVE_FALSA=${crypto.randomBytes(18).toString("hex")}\n`);
const AUDIO = path.join(TMP, "audio");
fs.mkdirSync(AUDIO);
for (const [nome, s, ext] of [["a90", 90, "mp3"], ["a200", 200, "mp3"], ["a30", 30, "mp3"], ["a90", 90, "wav"]]) {
  const r = spawnSync(FFMPEG, ["-v", "error", "-f", "lavfi", "-i", `sine=frequency=440:duration=${s}`, "-ac", "2", "-ar", "48000", path.join(AUDIO, `${nome}.${ext}`)], { encoding: "utf8" });
  if (r.status !== 0) { console.error(`NÃO RODOU — o ffmpeg não gerou ${nome}.${ext}.`); process.exit(2); }
}

// ---------- o Epidemic falso ----------
const MOCK = path.join(TMP, "epidemic-falso.mjs");
fs.writeFileSync(MOCK, String.raw`
import fs from "node:fs";
import path from "node:path";
const LOG = process.env.MOCK_LOG, CEN = process.env.MOCK_CENARIO || "normal", AUD = process.env.MOCK_AUDIO, PAD = +(process.env.MOCK_PAD || 0), CH = process.env.MOCK_CHAVE;
const MCP = "https://www.epidemicsound.com/a/mcp-service/mcp";
const rec = (id, title, artist, s, bpm, moods, voz, stems, usos = []) => ({ id, title, bpm,
  audioFile: { durationInMilliseconds: s * 1000, lqmp3Url: "https://audiocdn.epidemicsound.com/lqmp3/" + id + ".mp3" },
  stems: stems.map((t) => ({ type: t })),
  tags: [...moods.map((m) => ({ displayName: m, dimension: { name: "mood" } })), { displayName: "ambient", dimension: { name: "genre" } }, { displayName: voz, dimension: { name: "vocal type" } }, ...usos.map((u) => ({ displayName: u, dimension: { name: "production genre" } }))],
  credits: [{ role: "MAIN_ARTIST", artist: { name: artist } }] });
const CAT = {
  "6fc3ae9a-420e-48fb-8353-7a9a33ffbe42": [rec("6fc3ae9a-420e-48fb-8353-7a9a33ffbe42", "Stain of Age", "Goni", 90, 52, ["mysterious", "floating"], "no vocals", ["INSTRUMENTS", "BASS", "MELODY"]), "a90"],
  "72e13de6-4668-48cb-a86f-2c3c7a4b4f1e": [rec("72e13de6-4668-48cb-a86f-2c3c7a4b4f1e", "Snowlight", "DEX 1200", 200, 0, ["dreamy"], "no vocals", []), "a200"],
  "11111111-2222-3333-4444-555555555555": [rec("11111111-2222-3333-4444-555555555555", "Snowlight", "Other Artist", 200, 70, ["dreamy"], "vocal presence", []), "a200"],
  "22222222-3333-4444-5555-666666666666": [rec("22222222-3333-4444-5555-666666666666", "Short One", "Tiny", 30, 90, ["happy"], "no vocals", []), "a30"],
  "44444444-5555-6666-7777-888888888888": [rec("44444444-5555-6666-7777-888888888888", "Meet@Dawn.Ok", "Arroba", 90, 90, ["dark"], "no vocals", []), "a90"],
  "b7706cc1-a0ec-3db9-8cdb-1124e97a5ace": [rec("b7706cc1-a0ec-3db9-8cdb-1124e97a5ace", "Threads", "Ebb & Flod", 200, 90, ["dark"], "no vocals", []), "a200"],
  "55555555-6666-7777-8888-999999999999": [rec("55555555-6666-7777-8888-999999999999", "Clean Title", "Clean Artist", 90, 80, ["calm"], "no vocals", [], ["contato@exemplo.io"]), "a90"],
};
const log = (o) => fs.appendFileSync(LOG, JSON.stringify({ ...o, t: Date.now() }) + "\n");
const hdr = (h, k) => { if (!h) return null; if (typeof h.get === "function") return h.get(k); const e = Object.entries(h).find(([n]) => n.toLowerCase() === k); return e ? e[1] : null; };
const sse = (obj, extra = {}) => new Response("event: message\ndata: " + JSON.stringify(obj) + "\n\n", { status: 200, headers: { "content-type": "text/event-stream", ...extra } });
const dados = (id, data) => sse({ jsonrpc: "2.0", id, result: { content: [{ type: "text", text: JSON.stringify({ data }) }] } });
let saltos = 0;
globalThis.fetch = async (url, opts = {}) => {
  const u = String(url);
  let host = null; try { host = new URL(u).hostname; } catch { /* */ }
  const auth = hdr(opts.headers, "authorization");
  const e = { url: u, host, com_authorization: !!auth, chave_certa: auth === "Bearer " + CH, ua: hdr(opts.headers, "user-agent"), redirect: opts.redirect ?? null };
  if (u === MCP) {
    const b = JSON.parse(opts.body);
    log({ ...e, rpc: b.method, ferramenta: b.params?.name ?? null, argumentos: b.params?.arguments ?? null });
    if (b.method === "initialize") return sse({ jsonrpc: "2.0", id: b.id, result: { protocolVersion: "2025-06-18", serverInfo: { name: "FALSO", version: "0" }, capabilities: { tools: { listChanged: true } } } }, { "mcp-session-id": "sessao-falsa" });
    if (b.method === "notifications/initialized") return new Response(null, { status: 202 });
    if (b.method !== "tools/call") return new Response("?", { status: 400 });
    const n = b.params.name, a = b.params.arguments || {};
    if (CEN === "eco-chave") return sse({ jsonrpc: "2.0", id: b.id, error: { code: -1, message: "token recusado: " + auth } });
    if (CEN === "eco-chave-cortada") return sse({ jsonrpc: "2.0", id: b.id, error: { code: -1, message: "x".repeat(PAD) + " " + auth } });
    if (CEN === "eco-chave-isError") return sse({ jsonrpc: "2.0", id: b.id, result: { isError: true, content: [{ type: "text", text: "y".repeat(PAD) + auth }] } });
    if (CEN === "eco-parcial") return sse({ jsonrpc: "2.0", id: b.id, error: { code: -1, message: "token " + auth.slice(7, 7 + 14) + " recusado" } });
    if (CEN === "eco-parcial-bearer") return sse({ jsonrpc: "2.0", id: b.id, error: { code: -1, message: "cabecalho " + auth.slice(0, 7 + 9) } });
    if (CEN === "eco-graphql") return sse({ jsonrpc: "2.0", id: b.id, result: { content: [{ type: "text", text: JSON.stringify({ errors: [{ message: "z".repeat(PAD) + auth }] }) }] } });
    if (n === "SearchRecordings") {
      const nodes = a.filter?.recordingIDs ? a.filter.recordingIDs.filter((id) => CAT[id]).map((id) => ({ recording: CAT[id][0] })) : Object.values(CAT).slice(0, a.first || 10).map(([r]) => ({ recording: r }));
      return dados(b.id, { recordings: { nodes, meta: { total: nodes.length }, pageInfo: { hasNextPage: false, endCursor: null } } });
    }
    if (n === "DownloadRecording") {
      const ext = a.options?.fileType === "WAV" ? "wav" : "mp3";
      return dados(b.id, { recordingDownload: { assetUrl: "https://pdn.epidemicsound.com/fake/" + a.id + "." + ext + "?X-Amz-Signature=ASSINATURAFALSA123&Expires=1" } });
    }
    log({ ALERTA: "ferramenta fora do esperado", n });
    return sse({ jsonrpc: "2.0", id: b.id, error: { code: -1, message: "nao implementada no falso" } });
  }
  log(e);
  if (host === "pdn.epidemicsound.com" || host === "pdn2.epidemicsound.com") {
    const q = new URL(u);
    if (CEN === "cdn-406") return new Response("blocked", { status: 406 });
    if (CEN === "cdn-redirect-fora" && host === "pdn.epidemicsound.com") return new Response(null, { status: 302, headers: { location: "https://evil.example.com/fake/x.mp3?X-Amz-Signature=ASSINATURAFALSA999" } });
    if (CEN === "cdn-redirect-dentro" && host === "pdn.epidemicsound.com") return new Response(null, { status: 302, headers: { location: "https://pdn2.epidemicsound.com" + q.pathname + "?X-Amz-Signature=ASSINATURAFALSA777" } });
    if (CEN === "cdn-redirect-laco") return new Response(null, { status: 302, headers: { location: "/fake/laco-" + (++saltos) + q.pathname.split("/").pop() + "?X-Amz-Signature=ASSINATURAFALSA555" } });
    const id = q.pathname.split("/").pop().split(".")[0];
    let arq = (CAT[id]?.[1] ?? "a200") + (q.pathname.endsWith(".wav") ? ".wav" : ".mp3");
    if (q.pathname.endsWith(".wav")) arq = "a90.wav";
    if (CEN === "dl-errado") arq = "a90.mp3";
    const buf = fs.readFileSync(path.join(AUD, arq));
    return new Response(buf, { status: 200, headers: { "content-type": "audio/mpeg", "content-length": String(buf.length) } });
  }
  return new Response("nao", { status: 404 });
};
`);

// ---------- o andaime ----------
let ok = 0, falhas = 0, seq = 0;
function checar(nome, cond, detalhe = "") {
  if (cond) { ok++; console.log(`  ok    ${nome}`); }
  else { falhas++; console.log(`  FALHA ${nome}${detalhe ? ` — ${String(detalhe).slice(0, 600)}` : ""}`); }
}
const envFilho = (extra) => { const e = { ...process.env, REGIE_CHAVES: path.join(TMP, "chaves.env"), MOCK_AUDIO: AUDIO, MOCK_CHAVE: CHAVE, ...extra }; delete e.EPIDEMIC_SOUND_API_KEY; return e; };
function novoCanal(nome) { const d = path.join(TMP, nome); fs.mkdirSync(d, { recursive: true }); fs.copyFileSync(path.join(RAIZ, "canal.json"), path.join(d, "canal.json")); return d; }
const lerLog = (arq) => (fs.existsSync(arq) ? fs.readFileSync(arq, "utf8").trim().split("\n").filter(Boolean).map((l) => JSON.parse(l)) : []);
const TODOS_OS_LOGS = [];
function preparar(canal, args, { cenario = "normal", pad = 0 } = {}) {
  const log = path.join(TMP, `log-${String(++seq).padStart(3, "0")}.jsonl`);
  TODOS_OS_LOGS.push(log);
  return { log, argv: ["--import", pathToFileURL(MOCK).href, FERRAMENTA, ...args], opts: { cwd: canal, env: envFilho({ MOCK_LOG: log, MOCK_CENARIO: cenario, MOCK_PAD: String(pad) }), encoding: "utf8", windowsHide: true } };
}
function rodar(canal, args, o) {
  const p = preparar(canal, args, o);
  const r = spawnSync(process.execPath, p.argv, { ...p.opts, timeout: 300000 });
  return { codigo: r.status, out: r.stdout || "", err: r.stderr || "", tudo: (r.stdout || "") + (r.stderr || ""), log: lerLog(p.log) };
}
function rodarAsync(canal, args, o) {
  const p = preparar(canal, args, o);
  return new Promise((res) => {
    const c = spawn(process.execPath, p.argv, p.opts);
    let out = "", err = "";
    c.stdout.on("data", (d) => { out += d; }); c.stderr.on("data", (d) => { err += d; });
    c.on("close", (codigo) => res({ codigo, out, err, tudo: out + err, log: lerLog(p.log) }));
  });
}
const dormir = (ms) => new Promise((r) => setTimeout(r, ms));
const rpcs = (log) => log.filter((x) => x.rpc).map((x) => x.rpc + (x.ferramenta ? ` ${x.ferramenta}` : ""));
const downloads = (log) => log.filter((x) => x.ferramenta === "DownloadRecording").length;
const audios = (canal) => { const d = path.join(canal, "acervo", "trilha"); return fs.existsSync(d) ? fs.readdirSync(d).filter((f) => /\.(mp3|wav)$/i.test(f)) : []; };
const existe = (canal, rel) => fs.existsSync(path.join(canal, rel));
/** Algum trecho de 6 caracteres da chave falsa na saída? */
function vazou(texto) { for (let i = 0; i + 6 <= CHAVE.length; i++) if (texto.includes(CHAVE.slice(i, i + 6))) return `um trecho de 6 caracteres da chave (posição ${i})`; return false; }
/** A assinatura pela regra do topo da ferramenta (o conteúdo de todas as linhas, menos o "aprovado"), calculada aqui à parte. */
function canonico(v) { if (Array.isArray(v)) return v.map(canonico); if (v && typeof v === "object") return Object.fromEntries(Object.keys(v).sort().map((k) => [k, canonico(v[k])])); return v; }
const assinaturaLocal = (proj, linhas) => crypto.createHash("sha256").update(JSON.stringify({ proj, linhas: linhas.map(({ aprovado, ...r }) => canonico(r)) })).digest("hex").slice(0, 12); // eslint-disable-line no-unused-vars

const PAG = (id) => `https://www.epidemicsound.com/music/tracks/${id}/`;
const A = { id: "6fc3ae9a-420e-48fb-8353-7a9a33ffbe42", titulo: "Stain of Age", artista: "Goni", duracao_s: 90, voz: "sem voz" };
const B = { id: "72e13de6-4668-48cb-a86f-2c3c7a4b4f1e", titulo: "Snowlight", artista: "DEX 1200", duracao_s: 200, voz: "sem voz" };
const C = { id: "11111111-2222-3333-4444-555555555555", titulo: "Snowlight", artista: "Other Artist", duracao_s: 200 }; // com voz no servidor
const E = { id: "44444444-5555-6666-7777-888888888888", titulo: "Meet@Dawn.Ok", artista: "Arroba", duracao_s: 90 };
const F = { id: "b7706cc1-a0ec-3db9-8cdb-1124e97a5ace", titulo: "Threads", artista: "Ebb & Flod", duracao_s: 200 };
const G = { id: "55555555-6666-7777-8888-999999999999", titulo: "Clean Title", artista: "Clean Artist", duracao_s: 90 }; // o servidor põe um e-mail num tag de uso
const linha = (n, f, extra = {}) => ({ n, ...f, url: PAG(f.id), cena: "prova", formato: "MP3", stem: "FULL", aprovado: false, ...extra });
function gravarLista(canal, nome, linhas, proj = "juneau") {
  fs.writeFileSync(path.join(canal, nome), JSON.stringify({ proj, _prova: "LISTA FALSA da epidemic-provar.mjs: o aprovado daqui não é o sim do Lucas.", linhas }, null, 2));
  return nome;
}
function assinar(canal, nome) { const r = rodar(canal, ["lista", `--lista=${nome}`]); const m = /assinatura da lista: ([0-9a-f]{12})/.exec(r.out); return { r, assinatura: m ? m[1] : null }; }
/** Mostra a lista (assinatura), marca o "sim" nas linhas `ns` e devolve a assinatura. */
function listaAprovada(canal, nome, linhas, ns) {
  gravarLista(canal, nome, linhas);
  const { assinatura } = assinar(canal, nome);
  gravarLista(canal, nome, linhas.map((l) => ({ ...l, aprovado: ns.includes(l.n) })));
  return assinatura;
}
const baixarArgs = (nome, { linhas, mensagem = "sim (PROVA: não é o sim do Lucas)", hora = "05/10/2026 12:00", assinatura, seco = false } = {}) =>
  ["baixar", `--lista=${nome}`, ...(linhas != null ? [`--linhas=${linhas}`] : []), ...(mensagem != null ? [`--mensagem=${mensagem}`] : []), ...(hora != null ? [`--hora=${hora}`] : []), ...(assinatura != null ? [`--assinatura=${assinatura}`] : []), ...(seco ? ["--seco"] : [])];

console.log(`prova da ferramentas/epidemic.mjs (sha256 ${crypto.createHash("sha256").update(fs.readFileSync(FERRAMENTA)).digest("hex")}), contra um Epidemic FALSO, em ${TMP}`);

// ---------- 0. a lista que vai ao chat ----------
console.log("\n0. lista: a forma, a página de cada faixa e a assinatura");
{
  const k = novoCanal("c0");
  const linhas = [linha(1, A), linha(2, B), linha(3, F)];
  gravarLista(k, "l.json", linhas);
  const { r, assinatura } = assinar(k, "l.json");
  checar("a assinatura da ferramenta é a da regra do topo (calculada aqui à parte)", assinatura === assinaturaLocal("juneau", linhas), `${assinatura} / ${assinaturaLocal("juneau", linhas)}`);
  checar("lista sai 0, imprime a página de cada faixa e a assinatura, sem pedir nada ao Epidemic", r.codigo === 0 && !!assinatura && [A, B, F].every((f) => r.out.includes(PAG(f.id))) && r.log.length === 0 && /Nada foi pedido ao Epidemic/.test(r.out), r.tudo);
  gravarLista(k, "l.json", linhas.map((l) => ({ ...l, aprovado: l.n !== 3 })));
  const depois = assinar(k, "l.json").assinatura;
  checar("marcar \"aprovado\" não muda a assinatura", depois === assinatura, `${assinatura} → ${depois}`);
  gravarLista(k, "l.json", linhas.map((l) => (l.n === 3 ? { ...l, titulo: "Threads (outra)" } : l)));
  checar("mudar o título de uma linha muda a assinatura", assinar(k, "l.json").assinatura !== assinatura);
  gravarLista(k, "l.json", linhas);
  const c = rodar(k, ["lista", "--lista=l.json", "--conferir"]);
  checar("lista --conferir: UMA SearchRecordings pelos ids, e a lista bate", c.codigo === 0 && rpcs(c.log).join(" → ") === "initialize → notifications/initialized → tools/call SearchRecordings" && /Conferida contra o servidor/.test(c.out), c.tudo);
}

// ---------- 1. a identidade da faixa (achado 1) ----------
console.log("\n1. a identidade: artista e duração obrigatórios, url da própria faixa, voz conferida");
{
  const k = novoCanal("c1");
  // a linha-fraca do cético, com os "n" consertados para chegar à forma
  const fracas = [
    { n: 1, id: C.id, titulo: "Snowlight", url: PAG(B.id), voz: "sem voz", cena: "prova", aprovado: true },
    { n: 2, id: F.id, titulo: "Threads", artista: null, duracao_s: "9:99", cena: "prova", aprovado: true },
  ];
  gravarLista(k, "fraca.json", fracas);
  let r = rodar(k, ["lista", "--lista=fraca.json"]);
  checar("a lista fraca sai 2 na forma: falta artista, falta duração, url de outra faixa, duração em texto", r.codigo === 2 && /linha 1:.*falta "artista".*"duracao_s" tem de ser.*"url" é a página de outra faixa/s.test(r.err) && /linha 2:.*falta "artista".*"duracao_s" tem de ser o número de segundos \(recebi "9:99"\)/s.test(r.err) && r.log.length === 0, r.tudo);
  const sf = assinaturaLocal("juneau", fracas);
  for (const seco of [true, false]) {
    r = rodar(k, baixarArgs("fraca.json", { linhas: "1,2", assinatura: sf, seco }));
    checar(`o baixar${seco ? " --seco" : ""} da lista fraca, com a assinatura certa: sai 2 na forma, sem pedir nada`, r.codigo === 2 && /a lista tem linha mal escrita/.test(r.err) && /falta "artista"/.test(r.err) && r.log.length === 0, r.tudo);
  }
  const s1 = listaAprovada(k, "fraca2.json", [{ n: 1, id: C.id, titulo: "Snowlight", url: PAG(B.id), voz: "sem voz", artista: "Other Artist", duracao_s: 200, cena: "prova" }], []);
  checar("a url da página de OUTRA faixa (a do cético) não chega à assinatura", s1 === null);
  r = rodar(k, ["lista", "--lista=fraca2.json"]);
  checar("…e a lista sai 2 dizendo de quem é a página", r.codigo === 2 && new RegExp(`"url" é a página de outra faixa \\(${B.id}\\)`).test(r.err), r.tudo);
  gravarLista(k, "fora.json", [linha(1, A, { url: `https://evil.example.com/music/tracks/${A.id}/` })]);
  r = rodar(k, ["lista", "--lista=fora.json"]);
  checar("url fora de epidemicsound.com sai 2", r.codigo === 2 && /"url" não é a página de uma faixa do Epidemic/.test(r.err), r.tudo);
  gravarLista(k, "durtxt.json", [linha(1, A, { duracao_s: "90" })]);
  r = rodar(k, ["lista", "--lista=durtxt.json"]);
  checar("duração em texto (\"90\") sai 2", r.codigo === 2 && /"duracao_s" tem de ser/.test(r.err), r.tudo);
  gravarLista(k, "vozinv.json", [linha(1, A, { voz: "instrumental" })]);
  r = rodar(k, ["lista", "--lista=vozinv.json"]);
  checar("voz fora de \"sem voz\" | \"com voz\" | \"?\" sai 2", r.codigo === 2 && /"voz" é/.test(r.err), r.tudo);
  // a linha do cético, bem escrita: id da "Snowlight — Other Artist" (com voz), declarada "sem voz"
  const sv = listaAprovada(k, "voz.json", [linha(1, { ...C, voz: "sem voz" }), linha(2, A)], [1, 2]);
  r = rodar(k, ["lista", "--lista=voz.json", "--conferir"]);
  checar("lista --conferir pega a voz trocada e não imprime a assinatura", r.codigo === 1 && /linha 1: a voz da lista \("sem voz"\) não é a da faixa \("com voz"\)/.test(r.out) && !/assinatura da lista/.test(r.out), r.tudo);
  r = rodar(k, baixarArgs("voz.json", { linhas: "1,2", assinatura: sv, seco: true }));
  checar("baixar --seco: a voz trocada barra (saída 1), e nada se chamaria", r.codigo === 1 && /BARRADO PELO CANAL/.test(r.err) && /a voz da lista/.test(r.out) && downloads(r.log) === 0 && rpcs(r.log).join(" → ") === "initialize → notifications/initialized → tools/call SearchRecordings", r.tudo);
  const sa = listaAprovada(k, "art.json", [linha(1, { ...A, artista: "Outro Artista" })], [1]);
  r = rodar(k, baixarArgs("art.json", { linhas: "1", assinatura: sa, seco: true }));
  checar("artista divergente barra", r.codigo === 1 && /o artista da lista \("Outro Artista"\) não é o da faixa \("Goni"\)/.test(r.out), r.tudo);
  const sd = listaAprovada(k, "dur.json", [linha(1, { ...A, duracao_s: 120 })], [1]);
  r = rodar(k, baixarArgs("dur.json", { linhas: "1", assinatura: sd, seco: true }));
  checar("duração divergente barra", r.codigo === 1 && /a duração da lista \(120 s\) não é a da faixa \(90 s\)/.test(r.out), r.tudo);
}

// ---------- 2. a aprovação amarrada (achado 2) ----------
console.log("\n2. a aprovação: --linhas igual ao aprovado, n único, a mensagem coerente, a assinatura da lista do chat");
{
  const k = novoCanal("c2");
  const linhas = [linha(1, A), linha(2, B), linha(3, F)];
  const S = listaAprovada(k, "l.json", linhas, [1, 2]);
  const casos = [
    ["sem --linhas", { assinatura: S }, /falta --linhas/],
    ["--linhas=1 com as linhas 1 e 2 aprovadas", { linhas: "1", assinatura: S }, /não é o conjunto das linhas com "aprovado": true \(1,2\)/],
    ["--linhas=1,2,3 com a 3 sem aprovado", { linhas: "1,2,3", assinatura: S }, /não é o conjunto/],
    ["--linhas=1,1", { linhas: "1,1", assinatura: S }, /repete número/],
    ["\"sim, menos o 2\" com a 2 em --linhas (o T13 do cético)", { linhas: "1,2", assinatura: S, mensagem: "sim, menos o 2" }, /a mensagem tira a linha 2/],
    ["\"não\" (o T13 do cético)", { linhas: "1,2", assinatura: S, mensagem: "não" }, /começa negando/],
    ["\"ok\" (não traz sim nem aprovo)", { linhas: "1,2", assinatura: S, mensagem: "ok" }, /não traz "sim" nem "aprovo"/],
    ["\"espera, sim depois\"", { linhas: "1,2", assinatura: S, mensagem: "espera, sim depois" }, /começa negando ou pedindo para esperar/],
    ["\"aprovo 1 e 3\" com --linhas=1,2", { linhas: "1,2", assinatura: S, mensagem: "aprovo 1 e 3" }, /aprova a\(s\) linha\(s\) 1, 3/],
    ["\"sim, só a 1\" com --linhas=1,2", { linhas: "1,2", assinatura: S, mensagem: "sim, só a 1" }, /aprova a\(s\) linha\(s\) 1, e --linhas diz 1, 2/],
    ["sem --assinatura", { linhas: "1,2" }, /falta --assinatura/],
    ["--assinatura de outra lista", { linhas: "1,2", assinatura: "000000000000" }, /mudou desde a que foi ao chat/],
    ["sem --mensagem", { linhas: "1,2", assinatura: S, mensagem: null }, /faltam --mensagem/],
    ["sem --hora", { linhas: "1,2", assinatura: S, hora: null }, /faltam --mensagem/],
  ];
  for (const [nome, o, re] of casos) {
    for (const seco of [true, false]) {
      const r = rodar(k, baixarArgs("l.json", { ...o, seco }));
      checar(`${nome}${seco ? " (a seco)" : ""}: sai 2 e não pede nada`, r.codigo === 2 && re.test(r.err) && r.log.length === 0, r.tudo);
    }
  }
  // a lista mudou depois do chat (uma linha NÃO aprovada também conta)
  gravarLista(k, "l.json", linhas.map((l) => ({ ...l, aprovado: l.n !== 3, ...(l.n === 3 ? { titulo: "Threads II" } : {}) })));
  let r = rodar(k, baixarArgs("l.json", { linhas: "1,2", assinatura: S }));
  checar("a linha 3 (não aprovada) mudou de título depois do chat: sai 2", r.codigo === 2 && /mudou desde a que foi ao chat/.test(r.err) && r.log.length === 0, r.tudo);
  // n repetido (as duas linhas n=1 da lista-fraca) e n ausente
  gravarLista(k, "nrep.json", [linha(1, A, { aprovado: true }), linha(1, B, { aprovado: true })]);
  r = rodar(k, baixarArgs("nrep.json", { linhas: "1", assinatura: S }));
  checar("\"n\" repetido sai 2", r.codigo === 2 && /"n": 1 aparece duas vezes/.test(r.err) && r.log.length === 0, r.tudo);
  gravarLista(k, "nsem.json", [{ ...linha(1, A, { aprovado: true }), n: undefined }]);
  r = rodar(k, baixarArgs("nsem.json", { linhas: "1", assinatura: S }));
  checar("\"n\" ausente sai 2", r.codigo === 2 && /não tem "n" inteiro/.test(r.err) && r.log.length === 0, r.tudo);
  // o caminho certo
  gravarLista(k, "l.json", linhas.map((l) => ({ ...l, aprovado: l.n !== 3 })));
  r = rodar(k, baixarArgs("l.json", { linhas: "1,2", assinatura: S, mensagem: "sim, menos o 3", seco: true }));
  checar("\"sim, menos o 3\" com --linhas=1,2 e a assinatura do chat: o seco passa (saída 0)", r.codigo === 0 && /Cada linha do plano passou/.test(r.out), r.tudo);
  checar("…com initialize → initialized → SearchRecordings, e nenhum DownloadRecording", rpcs(r.log).join(" → ") === "initialize → notifications/initialized → tools/call SearchRecordings", rpcs(r.log).join(" → "));
  checar("…e o seco não criou acervo/ nem db/", !existe(k, "acervo") && !existe(k, "db"));
  checar("…e o plano mostra a aprovação com linhas, assinatura e o sha256 da lista", new RegExp(`"assinatura": "${S}"`).test(r.out) && /"linhas": \[\s*1,\s*2\s*\]/.test(r.out) && /"lista_sha256": "[0-9a-f]{64}"/.test(r.out), r.out.slice(0, 400));
}

// ---------- 3. a chave cortada (achado 3) ----------
console.log("\n3. a chave: limpa antes de cortar, o \"Bearer\" e o pedaço ecoado pelo servidor");
{
  const k = novoCanal("c3");
  const cen = [["eco-chave", 0], ["eco-parcial", 0], ["eco-parcial-bearer", 0]];
  for (const pad of [250, 262, 270, 275, 280, 285, 290, 295, 299]) cen.push(["eco-chave-cortada", pad]);
  for (const pad of [360, 380, 392, 395, 399]) cen.push(["eco-chave-isError", pad]);
  for (const pad of [270, 290, 299]) cen.push(["eco-graphql", pad]);
  let mascarou = 0;
  for (const [c, pad] of cen) {
    const r = rodar(k, ["buscar", "teste"], { cenario: c, pad });
    const v = vazou(r.tudo);
    if (/<CHAVE>/.test(r.tudo)) mascarou++;
    checar(`${c}${pad ? ` (${pad} caracteres antes)` : ""}: saída 1, e nenhum trecho de 6 caracteres da chave na tela`, r.codigo === 1 && /RECUSADO PELO EPIDEMIC/.test(r.err) && !v, v || r.tudo);
  }
  checar("a máscara apareceu onde o eco cabia (<CHAVE> na saída)", mascarou >= 5, `${mascarou}`);
}

// ---------- 4. a guarda antes do download (achado 4) ----------
console.log("\n4. a guarda do arquivo roda antes de qualquer DownloadRecording: na forma (o texto da lista) e no plano (o do servidor)");
{
  const k = novoCanal("c4");
  const la = [linha(1, E)];
  gravarLista(k, "arroba.json", la);
  let r = rodar(k, ["lista", "--lista=arroba.json"]);
  checar("lista: o título 'Meet@Dawn.Ok' (o do cético) barra na forma (saída 2), sem assinatura", r.codigo === 2 && /linha 1: .*a guarda: o texto para a linha 1 traz 1 e-mail/.test(r.err) && !/assinatura da lista/.test(r.out) && r.log.length === 0, r.tudo);
  const sa = assinaturaLocal("juneau", la);
  gravarLista(k, "arroba.json", la.map((l) => ({ ...l, aprovado: true })));
  for (const seco of [true, false]) {
    r = rodar(k, baixarArgs("arroba.json", { linhas: "1", assinatura: sa, seco }));
    checar(`baixar${seco ? " --seco" : ""} com a assinatura certa: sai 2 na forma, sem pedir nada, sem áudio, sem biblioteca e sem trava`, r.codigo === 2 && /a guarda/.test(r.err) && r.log.length === 0 && audios(k).length === 0 && !existe(k, "acervo/trilha/biblioteca.json") && !existe(k, "acervo/trilha/baixar.trava"), r.tudo);
  }
  const S = listaAprovada(k, "uso.json", [linha(1, G), linha(2, A)], [1, 2]);
  checar("a lista com 'Clean Title' passa na forma (o e-mail vem só do servidor)", !!S);
  r = rodar(k, baixarArgs("uso.json", { linhas: "1,2", assinatura: S, seco: true }));
  checar("seco: o tag de uso com e-mail, vindo do servidor, barra no plano (saída 1), e o seco não diz que passou", r.codigo === 1 && /linha 1: a guarda: o texto para a linha 1 da biblioteca/.test(r.out) && !/Cada linha do plano passou/.test(r.out) && downloads(r.log) === 0, r.tudo);
  r = rodar(k, baixarArgs("uso.json", { linhas: "1,2", assinatura: S }));
  checar("de verdade: saída 1, nenhum DownloadRecording (nem o da linha 2), nenhum áudio, sem biblioteca e sem trava", r.codigo === 1 && downloads(r.log) === 0 && audios(k).length === 0 && !existe(k, "acervo/trilha/biblioteca.json") && !existe(k, "acervo/trilha/baixar.trava"), r.tudo);
  checar("…e o ritmo não contou pedido nenhum (db/epidemic-estado.json não nasceu)", !existe(k, "db/epidemic-estado.json"));
}

// ---------- 5. uma linha recusada para tudo (achado 5) ----------
console.log("\n5. uma linha que não bate com o servidor para TODAS");
{
  const k = novoCanal("c5");
  const S = listaAprovada(k, "mista.json", [linha(1, A), linha(2, { ...F, titulo: "Outro Titulo Qualquer" })], [1, 2]);
  let r = rodar(k, baixarArgs("mista.json", { linhas: "1,2", assinatura: S }));
  checar("o título da linha 2 diverge: saída 1, e a linha 1 também não se baixa", r.codigo === 1 && /nada se baixa, nem as outras linhas/.test(r.err) && /linha 2: o título da lista \("Outro Titulo Qualquer"\) não é o da faixa \("Threads"\)/.test(r.out) && downloads(r.log) === 0 && audios(k).length === 0, r.tudo);
  const S2 = listaAprovada(k, "stem.json", [linha(1, A, { stem: "INSTRUMENTS", formato: "WAV" }), linha(2, A, { stem: "DRUMS" })], [1, 2]);
  r = rodar(k, baixarArgs("stem.json", { linhas: "1,2", assinatura: S2 }));
  checar("o T14b do cético (DRUMS que a faixa não tem): a INSTRUMENTS também não baixa", r.codigo === 1 && /a faixa não tem o stem DRUMS/.test(r.out) && downloads(r.log) === 0 && audios(k).length === 0, r.tudo);
}

// ---------- 6. o ritmo no disco (achado 6) ----------
console.log("\n6. o ritmo: 8 pedidos em 30 min, 15 s entre um e outro, contados entre execuções");
{
  const k = novoCanal("c6a");
  const agora = Date.now();
  fs.mkdirSync(path.join(k, "db"));
  fs.writeFileSync(path.join(k, "db", "epidemic-estado.json"), JSON.stringify({ downloads: Array.from({ length: 8 }, (_, i) => ({ hora: new Date(agora - (20 - i) * 60000).toISOString(), faixa: A.id })) }));
  const S = listaAprovada(k, "l.json", [linha(1, A)], [1]);
  let r = rodar(k, baixarArgs("l.json", { linhas: "1", assinatura: S, seco: true }));
  checar("8 pedidos nos últimos 30 min: o seco sai 3 e diz que pararia", r.codigo === 3 && /baixaria 0 de 1 agora, e pararia no teto/.test(r.out), r.tudo);
  r = rodar(k, baixarArgs("l.json", { linhas: "1", assinatura: S }));
  checar("…e o de verdade sai 3 sem pedir NADA ao Epidemic, com a hora em que volta", r.codigo === 3 && /TETO DO RITMO/.test(r.out) && /a partir de/.test(r.out) && r.log.length === 0 && audios(k).length === 0, r.tudo);

  const k2 = novoCanal("c6b");
  const ult = Date.now() - 5000;
  fs.mkdirSync(path.join(k2, "db"));
  fs.writeFileSync(path.join(k2, "db", "epidemic-estado.json"), JSON.stringify({ downloads: Array.from({ length: 7 }, (_, i) => ({ hora: new Date(ult - (6 - i) * 60000).toISOString(), faixa: A.id })) }));
  const S2 = listaAprovada(k2, "l.json", [linha(1, A), linha(2, B)], [1, 2]);
  r = rodar(k2, baixarArgs("l.json", { linhas: "1,2", assinatura: S2 }));
  const est = JSON.parse(fs.readFileSync(path.join(k2, "db", "epidemic-estado.json"), "utf8"));
  const novo = Date.parse(est.downloads.at(-1).hora);
  const bib = existe(k2, "acervo/trilha/biblioteca.json") ? JSON.parse(fs.readFileSync(path.join(k2, "acervo/trilha/biblioteca.json"), "utf8")) : { faixas: [] };
  checar("7 na janela, o último há 5 s: baixa 1, para no teto (saída 3) e diz que falta a linha 2", r.codigo === 3 && downloads(r.log) === 1 && bib.faixas.length === 1 && /Faltam as linhas 2/.test(r.out), r.tudo);
  checar("…e esperou os 15 s desde o pedido da execução ANTERIOR (gravado no disco)", est.downloads.length === 8 && novo - ult >= 14900, `${novo - ult} ms`);
  r = rodar(k2, baixarArgs("l.json", { linhas: "1,2", assinatura: S2, seco: true }));
  checar("o seco seguinte: a linha 1 já está na biblioteca, e a 2 esperaria o teto (saída 3)", r.codigo === 3 && /já está na biblioteca/.test(r.out) && /baixaria 0 de 1 agora/.test(r.out), r.tudo);
}

// ---------- 7. o redirecionamento do CDN (achado 7) ----------
console.log("\n7. o CDN: redirecionamento só à mão, só para https *.epidemicsound.com, até 3");
{
  const k = novoCanal("c7a");
  const S = listaAprovada(k, "l.json", [linha(1, A)], [1]);
  let r = rodar(k, baixarArgs("l.json", { linhas: "1", assinatura: S }), { cenario: "cdn-redirect-fora" });
  checar("redirecionamento para evil.example.com: barra (saída 1), sem pedir lá, sem arquivo e sem biblioteca", r.codigo === 1 && /BARRADO PELO CANAL/.test(r.err) && /redirecionou \(salto 1\) para https:\/\/evil\.example\.com/.test(r.err) && !r.log.some((x) => x.host === "evil.example.com") && audios(k).length === 0 && !existe(k, "acervo/trilha/biblioteca.json"), r.tudo);
  checar("…e a URL assinada do redirecionamento não aparece na tela", !/ASSINATURAFALSA/.test(r.tudo), r.tudo);
  checar("…o GET do CDN foi com redirect manual e sem a chave", r.log.filter((x) => x.host === "pdn.epidemicsound.com").every((x) => x.redirect === "manual" && !x.com_authorization), JSON.stringify(r.log.filter((x) => !x.rpc)));
  const k2 = novoCanal("c7b");
  const S2 = listaAprovada(k2, "l.json", [linha(1, A)], [1]);
  r = rodar(k2, baixarArgs("l.json", { linhas: "1", assinatura: S2 }), { cenario: "cdn-redirect-dentro" });
  checar("redirecionamento para pdn2.epidemicsound.com: segue, baixa e grava (saída 0)", r.codigo === 0 && /depois de 1 redirecionamento/.test(r.out) && audios(k2).length === 1 && r.log.some((x) => x.host === "pdn2.epidemicsound.com" && !x.com_authorization), r.tudo);
  const k3 = novoCanal("c7c");
  const S3 = listaAprovada(k3, "l.json", [linha(1, A)], [1]);
  r = rodar(k3, baixarArgs("l.json", { linhas: "1", assinatura: S3 }), { cenario: "cdn-redirect-laco" });
  checar("redirecionamento em laço: para no 4º (saída 1), com 4 pedidos ao CDN", r.codigo === 1 && /mais de 3 vezes/.test(r.err) && r.log.filter((x) => x.host === "pdn.epidemicsound.com").length === 4, r.tudo);
}

// ---------- 8. a trava e o caminho inteiro (achado 8, e o que resistiu) ----------
console.log("\n8. a trava (a biblioteca se lê depois dela) e o caminho inteiro");
{
  const k = novoCanal("c8");
  const linhas = [linha(1, A), linha(2, B), linha(3, A, { formato: "WAV", stem: "INSTRUMENTS" })];
  const S = listaAprovada(k, "l.json", linhas, [1, 2, 3]);
  fs.mkdirSync(path.join(k, "acervo", "trilha"), { recursive: true });
  fs.writeFileSync(path.join(k, "acervo", "trilha", "baixar.trava"), "");
  let r = rodar(k, baixarArgs("l.json", { linhas: "1,2,3", assinatura: S }));
  checar("com a trava de outra execução: sai 2, não pede nada e não apaga a trava dela", r.codigo === 2 && /outro baixar em curso/.test(r.err) && r.log.length === 0 && existe(k, "acervo/trilha/baixar.trava"), r.tudo);
  fs.writeFileSync(path.join(k, "acervo", "trilha", "biblioteca.json"), "{ isto não é JSON");
  r = rodar(k, baixarArgs("l.json", { linhas: "1,2,3", assinatura: S }));
  checar("trava de outra execução E biblioteca quebrada: o erro é a trava (a biblioteca só se lê depois de pegá-la)", r.codigo === 2 && /outro baixar em curso/.test(r.err) && !/não é JSON/.test(r.err) && existe(k, "acervo/trilha/baixar.trava"), r.tudo);
  fs.rmSync(path.join(k, "acervo", "trilha", "baixar.trava"));
  r = rodar(k, baixarArgs("l.json", { linhas: "1,2,3", assinatura: S }));
  checar("biblioteca quebrada, lida já com a trava: sai 2, não pede nada, e a trava sai junto", r.codigo === 2 && /biblioteca\.json não é JSON/.test(r.err) && r.log.length === 0 && !existe(k, "acervo/trilha/baixar.trava"), r.tudo);
  fs.rmSync(path.join(k, "acervo", "trilha", "biblioteca.json"));

  const t0 = Date.now();
  const x = rodarAsync(k, baixarArgs("l.json", { linhas: "1,2,3", assinatura: S, mensagem: "sim, pode baixar (PROVA)" }));
  while (!existe(k, "acervo/trilha/baixar.trava") && Date.now() - t0 < 20000) await dormir(100);
  await dormir(1500);
  const y = rodar(k, baixarArgs("l.json", { linhas: "1,2,3", assinatura: S, mensagem: "sim, pode baixar (PROVA)" }));
  checar("um segundo baixar no meio do primeiro: sai 2 e não pede nada", y.codigo === 2 && /outro baixar em curso/.test(y.err) && y.log.length === 0, y.tudo);
  r = await x;
  const bib = JSON.parse(fs.readFileSync(path.join(k, "acervo", "trilha", "biblioteca.json"), "utf8"));
  const shaLista = crypto.createHash("sha256").update(fs.readFileSync(path.join(k, "l.json"))).digest("hex");
  checar("o primeiro termina: 3 baixadas (MP3, MP3 e WAV INSTRUMENTS), saída 0, sem trava", r.codigo === 0 && bib.faixas.length === 3 && audios(k).length === 3 && !existe(k, "acervo/trilha/baixar.trava"), r.tudo);
  checar("a aprovação de cada linha traz a mensagem, a hora, as linhas, a assinatura e o sha256 da lista", bib.faixas.every((f, i) => f.aprovacao.mensagem === "sim, pode baixar (PROVA)" && f.aprovacao.hora === "05/10/2026 12:00" && JSON.stringify(f.aprovacao.linhas) === "[1,2,3]" && f.aprovacao.assinatura === S && f.aprovacao.lista_sha256 === shaLista && f.aprovacao.linha === i + 1 && f.aprovacao.lista === "l.json"), JSON.stringify(bib.faixas.map((f) => f.aprovacao)));
  const est = JSON.parse(fs.readFileSync(path.join(k, "db", "epidemic-estado.json"), "utf8"));
  const hs = est.downloads.map((d) => Date.parse(d.hora));
  checar("os 3 pedidos de download ficaram no disco, a 15 s ou mais um do outro", hs.length === 3 && hs[1] - hs[0] >= 14900 && hs[2] - hs[1] >= 14900, JSON.stringify(est.downloads));
  const cdn = r.log.filter((q) => !q.rpc), mcp = r.log.filter((q) => q.rpc);
  checar("a chave só foi ao servidor MCP; o GET do CDN saiu sem ela, com o User-Agent do canal", mcp.every((q) => q.chave_certa) && cdn.length === 3 && cdn.every((q) => !q.com_authorization && /alpha-point-canal/.test(q.ua || "")), JSON.stringify(cdn));
  checar("a URL assinada não aparece na tela nem na biblioteca", !/ASSINATURAFALSA|X-Amz/.test(r.tudo) && !/ASSINATURAFALSA|X-Amz/.test(JSON.stringify(bib)));
  const pv = spawnSync(process.execPath, ["C:/projetos/regie-v1/src/ferramentas/trilha.mjs", "--biblioteca"], { cwd: k, encoding: "utf8", env: envFilho({}) });
  checar("a pré-v1 aceita a biblioteca (trilha.mjs --biblioteca sai 0)", pv.status === 0 && /biblioteca ok/.test(pv.stdout + pv.stderr), (pv.stdout + pv.stderr).slice(0, 600));
  r = rodar(k, baixarArgs("l.json", { linhas: "1,2,3", assinatura: S, mensagem: "sim, pode baixar (PROVA)" }));
  checar("o mesmo comando de novo: nada a baixar (saída 0), nenhum DownloadRecording", r.codigo === 0 && /Nenhuma linha a baixar/.test(r.out) && downloads(r.log) === 0, r.tudo);
}

// ---------- 9. os rótulos (achado 9) ----------
console.log("\n9. os rótulos: a conferência do canal não sai como recusa do Epidemic");
{
  const k = novoCanal("c9a");
  const S = listaAprovada(k, "l.json", [linha(1, B)], [1]);
  let r = rodar(k, baixarArgs("l.json", { linhas: "1", assinatura: S }), { cenario: "dl-errado" });
  checar("arquivo de 90 s para uma faixa de 200 s: \"BARRADO PELO CANAL\", não \"RECUSADO PELO EPIDEMIC\"", r.codigo === 1 && /^BARRADO PELO CANAL — o arquivo da linha 1 não passou na conferência: dura 90/m.test(r.err) && !/RECUSADO PELO EPIDEMIC/.test(r.err), r.tudo);
  checar("…o arquivo fica como _recusado_, sem linha na biblioteca", fs.readdirSync(path.join(k, "acervo", "trilha")).some((f) => f.startsWith("_recusado_")) && !existe(k, "acervo/trilha/biblioteca.json"));
  const k2 = novoCanal("c9b");
  const S2 = listaAprovada(k2, "l.json", [linha(1, A)], [1]);
  r = rodar(k2, baixarArgs("l.json", { linhas: "1", assinatura: S2 }), { cenario: "cdn-406" });
  checar("406 do CDN: \"RECUSADO PELO EPIDEMIC\" e para", r.codigo === 1 && /RECUSADO PELO EPIDEMIC — o CDN do Epidemic recusou o download \(406/.test(r.err) && audios(k2).length === 0, r.tudo);
}

// ---------- o que vale para todas ----------
console.log("\n10. em todas as execuções desta prova");
{
  const todos = TODOS_OS_LOGS.flatMap(lerLog);
  const ferramentas = new Set(todos.filter((x) => x.ferramenta).map((x) => x.ferramenta));
  checar("só SearchRecordings e DownloadRecording foram chamadas, e nenhuma fora da lista", [...ferramentas].every((f) => ["SearchRecordings", "DownloadRecording"].includes(f)) && !todos.some((x) => x.ALERTA), [...ferramentas].join(", "));
  checar("nenhum pedido à prévia (audiocdn) nem a host fora de *.epidemicsound.com", !todos.some((x) => x.host && !(x.host === "epidemicsound.com" || x.host.endsWith(".epidemicsound.com")) || x.host === "audiocdn.epidemicsound.com"), JSON.stringify(todos.filter((x) => x.host && !x.host.endsWith("epidemicsound.com"))));
  checar("todo pedido ao servidor MCP levou a chave certa e o User-Agent do canal", todos.filter((x) => x.rpc).every((x) => x.chave_certa && /alpha-point-canal/.test(x.ua || "")));
}

console.log(`\n${falhas ? "FALHOU" : "PASSOU"}: ${ok} de ${ok + falhas} checagens.`);
if (process.argv.includes("--manter")) console.log(`a pasta da prova ficou em ${TMP}`);
else { try { fs.rmSync(TMP, { recursive: true, force: true }); } catch { /* */ } }
process.exit(falhas ? 1 : 0);
