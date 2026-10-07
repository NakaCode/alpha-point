#!/usr/bin/env node
// epidemic.mjs — a trilha do canal no Epidemic Sound: buscar faixas, achar parecidas e baixar SÓ o que o Lucas aprovou.
//
// Decisão do Lucas, 05/10/2026 (CLAUDE.md, "A trilha: Epidemic Sound"): "estou com a chave do Epidemic Sund". A conta é
// dele, com o Alpha Point conectado ("Minha, canal conectado"). A chave abre o servidor MCP oficial do Epidemic
// (https://www.epidemicsound.com/a/mcp-service/mcp; documentação em https://developers.epidemicsound.com/docs/mcp/).
// O que esta ferramenta faz: a busca, para montar a lista com a página de cada faixa; a lista que vai ao chat, com a
// assinatura dela; e o download, só com o "sim" do Lucas a essa lista. Quem roda o `baixar` é o Claude central, e mais
// ninguém: subagente não baixa.
// O que esta ferramenta NÃO faz:
//   - a edição de duração (EditRecording, PollEditRecordingJob, DownloadRecordingEdit). A CLAUDE.md a admite só com o
//     "sim" do Lucas a uma lista, como o download; mas o que ela entrega não foi medido, e ela pediria um verbo próprio,
//     com prova própria. Até lá, não sai daqui;
//   - o download de efeito (DownloadSoundEffect);
//   - a voz (GenerateVoiceover e as outras), que o canal nunca usa: a voz do canal é a da ElevenLabs.
//
// A chave: EPIDEMIC_SOUND_API_KEY no arquivo de chaves da máquina (%USERPROFILE%\.regie\chaves.env), posta pelo Lucas no
// Bloco de Notas e lida SÓ por lerChave() da pré-v1 (file:///C:/projetos/regie-v1/src/lib/chaves.mjs), dentro deste
// processo. Nunca se imprime, nunca se grava, nunca passa por linha de comando, e nunca vai a outro endereço que não o
// servidor MCP (a URL assinada do download se busca SEM ela). Toda saída na tela passa pela guarda do discord.mjs:
// valor do arquivo de chaves (e do .env do canal) sai como <CHAVE>, e também o que vier depois de "Bearer " e qualquer
// trecho de 10 caracteres seguidos da chave do Epidemic (o eco que o servidor cortou). A guarda limpa ANTES de cortar um
// texto (um corte no meio da chave deixaria um pedaço que a troca do valor inteiro não reconhece). Todo arquivo
// gravado passa pela mesma guarda, mais a de e-mail (só o contato do canal) e a de URL assinada: se pegar, nada se grava.
// Sem dependência: o fetch do próprio Node (24+). Sem npm. O ffprobe vem do PATH (ou FFPROBE_PATH/REGIE_FFPROBE).
// A prova, sem rede e sem a chave de verdade (um Epidemic falso, numa pasta temporária): node ferramentas/epidemic-provar.mjs
//
// Uso (cwd na raiz do canal):
//   node ferramentas/epidemic.mjs conferir
//        initialize e tools/list, sem gasto: a chave entra? as ferramentas de busca e o DownloadRecording estão como
//        a ferramenta espera? (o servidor declara listChanged: a lista pode mudar.)
//   node ferramentas/epidemic.mjs buscar <termo> [--mood=a,b] [--genero=a,b] [--bpm=60-100] [--dur-min=<s>]
//        [--dur-max=<s>] [--instrumental] [--ordem=relevancia|popularidade|data|duracao|titulo|bpm] [--crescente]
//        [--n=10] [--depois=<cursor>] [--json]
//        UMA busca (SearchRecordings). Sem termo, só com filtros, também vale; sem termo e sem filtro, não (varreria o
//        catálogo). --mood e --genero são slugs do Epidemic, em minúsculas (o de duas palavras, "heavy & ponderous", não
//        foi medido). --bpm=60-100, 60- ou -100: um mínimo tira as faixas sem pulso (BPM 0: ambient, drone).
//        --instrumental pede vocals:false E tira o que não tem o tag "no vocals" (o filtro do servidor deixa passar
//        "vocal presence"). --json imprime as linhas no formato da lista (aprovado: false).
//   node ferramentas/epidemic.mjs parecidas <id> [--n=10] [--depois=<cursor>] [--instrumental] [--dur-min=<s>]
//        [--dur-max=<s>] [--json]
//        UMA busca de faixas parecidas (SearchSimilarToRecording). O servidor não filtra aqui: --instrumental e a
//        duração se aplicam na resposta.
//   node ferramentas/epidemic.mjs lista --lista=<arquivo.json> [--conferir]
//        A lista que vai ao chat. Sem rede: confere a forma de TODAS as linhas (as regras do baixar, abaixo) e imprime uma
//        linha por faixa (n, título, artista, duração, cena, formato e stem, voz, a página da faixa) e a ASSINATURA: 12
//        hex do conteúdo de todas as linhas, menos o "aprovado". O Lucas responde a ESTA lista; o "sim" dele marca
//        "aprovado": true nas linhas que cobriu, e a assinatura não muda com isso. --conferir faz UMA SearchRecordings
//        pelos ids e confere título, artista, duração e voz de cada linha contra o servidor, antes de a lista ir ao
//        Lucas; com divergência, não imprime a assinatura (saída 1).
//   node ferramentas/epidemic.mjs baixar --lista=<arquivo.json> --linhas=1,3 --mensagem="<o sim literal do Lucas>"
//        --hora="<hora>" --assinatura=<a que o `lista` imprimiu> [--seco]
//        Baixa SÓ as linhas com "aprovado": true (o booleano; "sim" em texto não conta) para acervo/trilha/. A aprovação
//        se amarra assim, e qualquer falta para tudo antes da rede (saída 2):
//          - --linhas são os números que o "sim" cobre, e têm de ser o conjunto exato das linhas com "aprovado": true;
//          - --assinatura é a da lista que foi ao chat: se a lista mudou depois (fora o "aprovado"), nada se baixa;
//          - a mensagem não pode contradizer --linhas: começar negando ("não", "espera"), não trazer "sim" nem
//            "aprovo", tirar com "menos o N" (ou "sem", "exceto", "fora") uma linha de --linhas, ou aprovar ("aprovo",
//            "só") outros números que os de --linhas. Isso barra a contradição evidente; não prova o sim. Quem confere
//            que a mensagem é a do Lucas, no chat, é o Claude central;
//          - o "n" de cada linha é inteiro, único na lista.
//        Antes do primeiro download, linha por linha: a forma; o servidor (UMA SearchRecordings pelos ids: título,
//        artista, duração e voz da lista têm de bater com os da faixa, e o stem tem de existir); a declaração da pré-v1;
//        e a guarda do arquivo sobre a linha que iria à biblioteca. UMA linha que não passa para TUDO: nada se baixa,
//        nem as outras (saída 1). A linha que já está na biblioteca não se baixa de novo (não é erro).
//        O ritmo: um download por vez; 15 s entre um pedido de download e o próximo, inclusive entre execuções; e no
//        máximo 8 pedidos em 30 min. As horas dos pedidos ficam em db/epidemic-estado.json (fora do git), gravadas
//        antes de cada pedido. Chegando ao teto, para, diz a hora em que volta e sai 3; o que baixou está na biblioteca,
//        e o mesmo comando, depois da hora dita, segue das que faltam.
//        Depois de cada download: o ffprobe (formato, duração contra a do Epidemic, canais), o sha256, e a linha no
//        acervo/trilha/biblioteca.json, no formato da pré-v1 (licença "assinatura", fonte "epidemic", titular
//        "conta Epidemic do Lucas Rosa", canal_liberado ["alpha-point"]), com o id, a URL da faixa e a aprovação (a
//        mensagem, a hora, as linhas, a assinatura e o sha256 do arquivo da lista). No fim, a checagem da biblioteca
//        inteira pela pré-v1 (sem --gravar).
//        --seco faz tudo até antes do DownloadRecording (inclusive a busca pelos ids e a guarda) e mostra o que faria;
//        não chama o DownloadRecording, não cria pasta e não grava nada. Sai 3 se o teto do ritmo pararia o baixar.
//        Formato da lista: { "proj": "<proj>", "linhas": [ { "n": 1, "id": "<uuid>", "titulo": "...", "artista": "...",
//        "duracao_s": 267.3, "cena": "s12", "formato": "MP3"|"WAV", "stem": "FULL"|"BASS"|"DRUMS"|"INSTRUMENTS",
//        "url": "<a página da faixa, opcional>", "voz": "sem voz"|"com voz"|"?" (opcional), "aprovado": true } ] }.
//        "n", "id", "titulo", "artista" (texto) e "duracao_s" (número, de 60 s para cima) são obrigatórios; "url", se
//        vier, é a página da própria faixa; "voz", se vier, é a do servidor. O texto de cada linha já passa pela guarda
//        do arquivo na forma (um título com cara de e-mail não chega ao download). Também vale "faixas" no lugar de
//        "linhas" (a saída do buscar --json), ou a lista solta. "bundle" não se aceita: o que ele entrega não foi medido.
// Saída: 0 = feito · 1 = o Epidemic recusou, a conferência barrou ou a guarda barrou · 2 = não rodou (uso, chave,
// lista, aprovação ausente ou incoerente) · 3 = parou no teto do ritmo (o que baixou está na biblioteca; rode o mesmo
// comando depois da hora dita)
//
// Regras do servidor (out/juneau/_tmp/trilha/epidemic-api.md, 05/10/2026): um pedido por vez, sem laço de varredura,
// User-Agent do canal; uma sessão MCP por execução; RETRY_LATER, 429 e 503 param a execução e dizem quanto esperar
// (nada se repete sozinho); 406 do CDN de download = parar, nunca insistir. O download segue redirecionamento só à mão,
// até 3 vezes, e só para https em *.epidemicsound.com. A prévia (audiocdn.epidemicsound.com) tem "Disallow: /" no
// robots.txt: esta ferramenta nunca a pede, e nem a imprime. O Lucas ouve na página da faixa.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import { pathToFileURL } from "node:url";

const MOTOR = "C:/projetos/regie-v1";
const importar = (rel) => import(pathToFileURL(path.join(MOTOR, rel)).href);
const { lerChave, onde, interpretar, ARQUIVO_MAQUINA } = await importar("src/lib/chaves.mjs");

const URL_MCP = "https://www.epidemicsound.com/a/mcp-service/mcp";
const UA = "alpha-point-canal (contato.naka@hotmail.com)";
const VERSAO_PROTOCOLO = "2025-06-18";
const NOME_CHAVE = "EPIDEMIC_SOUND_API_KEY";
const PAGINA = (id) => `https://www.epidemicsound.com/music/tracks/${id}/`;
const RE_PAGINA = /^https:\/\/(?:www\.)?epidemicsound\.com\/music\/tracks\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\/?$/i;
const PASTA = path.join("acervo", "trilha");
const BIBLIOTECA = path.join(PASTA, "biblioteca.json");
const TRAVA = path.join(PASTA, "baixar.trava");
const ESTADO = path.join("db", "epidemic-estado.json"); // as horas dos pedidos de download: fora do git, como o do discord.mjs
const TITULAR = "conta Epidemic do Lucas Rosa";
const SLUG_CANAL = "alpha-point";
const ESPACO_ENTRE_DOWNLOADS_S = 15; // fixo: um por vez, espaçado. Nada aleatório (CLAUDE.md, "Caça", último parágrafo).
const TETO_DOWNLOADS = 8;            // pedidos de download...
const JANELA_MIN = 30;               // ...em 30 min, contados no disco, entre execuções
const MAX_SALTOS = 3;                // redirecionamentos do CDN, seguidos à mão
const TOLERANCIA_DURACAO_S = 2;      // o arquivo contra a duração que o Epidemic declara
const TOLERANCIA_LISTA_S = 1.5;      // a duração da lista contra a do servidor
const DURACAO_MINIMA_S = 60;         // a da biblioteca da pré-v1 (src/trilha/biblioteca.mjs)
const MAX_LINHAS_POR_BUSCA = 50;     // a conferência pelos ids é UMA busca

// O que esta ferramenta pode pedir ao servidor. Tudo o mais sai antes da rede.
const BUSCA = ["SearchRecordings", "SearchSimilarToRecording", "SearchSoundEffects", "SearchSimilarToSoundEffect", "SearchExternalReferences"];
const PERMITIDAS = new Set([...BUSCA, "DownloadRecording"]);
const NUNCA = ["DownloadSoundEffect", "EditRecording", "PollEditRecordingJob", "DownloadRecordingEdit",
  "GenerateVoiceover", "PollVoiceoverGenerationStatus", "GetVoiceover", "DownloadVoiceover", "ListVoices", "ListUserGeneratedVoices"];

const args = process.argv.slice(2);
const cmd = args[0];
const flag = (n) => args.includes(`--${n}`);
const valor = (n) => { const a = args.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
const livres = args.slice(1).filter((a) => !a.startsWith("--"));
const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- a guarda (a do discord.mjs: nenhum valor do arquivo de chaves sai na tela nem em arquivo) ----------
function decodificar(buf) { // o mesmo cuidado do leitor da pré-v1: BOM e UTF-16
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) return buf.subarray(2).toString("utf16le");
  if (buf.length >= 2 && buf[0] === 0xfe && buf[1] === 0xff) { const b = Buffer.from(buf.subarray(2)); b.swap16(); return b.toString("utf16le"); }
  const s = buf.toString("utf8");
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}
let _secretos = null;
function valoresSecretos() {
  if (_secretos) return _secretos;
  const vals = [];
  for (const arq of [ARQUIVO_MAQUINA(), path.resolve(".env")]) {
    try { if (fs.existsSync(arq)) vals.push(...Object.values(interpretar(decodificar(fs.readFileSync(arq))))); } catch { /* sem arquivo, sem valor */ }
  }
  if (process.env[NOME_CHAVE]) vals.push(process.env[NOME_CHAVE]);
  _secretos = [...new Set(vals.filter((v) => typeof v === "string" && v.length >= 8))].sort((a, b) => b.length - a.length);
  return _secretos;
}
const urlsAssinadas = new Set(); // a URL do download (e a de cada redirecionamento): nunca inteira na tela, nunca em arquivo
// O pedaço da chave do Epidemic (a única que vai a um cabeçalho, e que um servidor poderia ecoar cortada): qualquer trecho
// de 10 caracteres seguidos dela, e o que continua a chave dali, sai como <CHAVE>. Só ela: um valor curto ou comum de
// outra linha do arquivo de chaves mascararia texto à toa.
const PEDACO = 10;
let _pedacos = null;
function pedacosDaChave() {
  if (_pedacos) return _pedacos;
  const v = String(lerChave(NOME_CHAVE) || "").trim(), mapa = new Map();
  if (v.length >= 16) for (let i = 0; i + PEDACO <= v.length; i++) { const w = v.slice(i, i + PEDACO); if (!mapa.has(w)) mapa.set(w, i); }
  return (_pedacos = { v, mapa });
}
function mascararPedacos(s) {
  const { v, mapa } = pedacosDaChave();
  if (!mapa.size || s.length < PEDACO) return s;
  let out = "", i = 0;
  while (i <= s.length - PEDACO) {
    const j = mapa.get(s.slice(i, i + PEDACO));
    if (j === undefined) { out += s[i]; i++; continue; }
    let fim = i + PEDACO, jf = j + PEDACO;
    while (fim < s.length && jf < v.length && s[fim] === v[jf]) { fim++; jf++; }
    out += "<CHAVE>"; i = fim;
  }
  return out + s.slice(i);
}
function limpar(t) {
  let s = String(t);
  for (const v of valoresSecretos()) s = s.split(v).join("<CHAVE>");
  s = s.replace(/\bBearer\s+[^\s"'<>,;)\]}]+/gi, "Bearer <CHAVE>"); // o eco do cabeçalho, mesmo que o servidor o tenha cortado
  s = mascararPedacos(s);
  for (const u of urlsAssinadas) { s = s.split(u).join("<URL assinada>"); try { const x = new URL(u); s = s.split(x.origin + x.pathname).join("<URL assinada>"); } catch { /* */ } }
  return s;
}
/** Limpa ANTES de cortar: cortado primeiro, um pedaço da chave escaparia (limpar() só reconhece o valor inteiro). */
const corte = (t, n) => limpar(t).slice(0, n);
const dizer = (t = "") => console.log(limpar(t));
const queixa = (t) => console.error(limpar(t));
function sair(codigo, msg) { if (msg) (codigo ? queixa : dizer)(msg); process.exit(codigo); }

class Recusa extends Error { constructor(m) { super(limpar(m)); } }   // o Epidemic (servidor ou CDN) recusou: saída 1
class Barrado extends Error { constructor(m) { super(limpar(m)); } }  // a conferência ou a guarda do canal barrou: saída 1
class NaoRodou extends Error { constructor(m) { super(limpar(m)); } } // uso, lista, aprovação, biblioteca, trava: saída 2

const CONTATO = (() => { try { return String(JSON.parse(fs.readFileSync("canal.json", "utf8")).contato || "").toLowerCase(); } catch { return ""; } })();
/** Antes de gravar: nada de chave, de e-mail que não seja o contato do canal, nem de URL assinada. Pegou: lança, e nada se grava. */
function guardaArquivo(texto, onde) {
  if (valoresSecretos().some((v) => texto.includes(v))) throw new Barrado(`a guarda: o texto para ${onde} contém um valor do arquivo de chaves. Nada foi gravado.`);
  const emails = (texto.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || []).filter((e) => e.toLowerCase() !== CONTATO);
  if (emails.length) throw new Barrado(`a guarda: o texto para ${onde} traz ${emails.length} e-mail(s) que não é o contato do canal (ou algo com a forma de um). Nada foi gravado.`);
  for (const u of urlsAssinadas) if (texto.includes(u) || texto.includes(u.split("?")[0])) throw new Barrado(`a guarda: o texto para ${onde} traz a URL assinada do download. Nada foi gravado.`);
  if (/[?&](X-Amz-|Signature=|Expires=|Policy=|Key-Pair-Id=|token=|sig=)/i.test(texto)) throw new Barrado(`a guarda: o texto para ${onde} traz o que parece uma URL assinada. Nada foi gravado.`);
}
function gravarAtomico(alvo, texto) {
  const tmp = `${alvo}.tmp-${process.pid}`;
  fs.writeFileSync(tmp, texto);
  for (let i = 0; ; i++) {
    try { fs.renameSync(tmp, alvo); return; }
    catch (e) { if (i >= 5 || !["EBUSY", "EPERM", "EACCES"].includes(e?.code)) { try { fs.rmSync(tmp, { force: true }); } catch { /* */ } throw e; } Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100 * (i + 1)); }
  }
}

// A trava do baixar: solta-se em qualquer saída (inclusive process.exit), mas só a que ESTA execução pegou.
let travaMinha = false;
function soltarTrava() { if (travaMinha) { try { fs.rmSync(TRAVA, { force: true }); } catch { /* */ } travaMinha = false; } }
process.on("exit", soltarTrava);

if (!fs.existsSync("canal.json")) sair(2, "NÃO RODOU — rode da raiz do canal (a pasta com o canal.json).");

// ---------- o servidor MCP (Streamable HTTP; resposta em JSON ou SSE) ----------
const pedidos = []; // o que se pediu ao Epidemic nesta execução, para o relato
function chave() {
  const v = lerChave(NOME_CHAVE);
  if (!v) throw new NaoRodou(`falta a chave ${NOME_CHAVE} no arquivo de chaves da máquina (${ARQUIVO_MAQUINA()}). O Lucas a põe pelo Bloco de Notas, nunca pelo chat.`);
  return String(v).trim();
}
function lerCorpo(tipo, texto) {
  if ((tipo || "").includes("text/event-stream")) {
    const msgs = [];
    for (const bloco of texto.split(/\r?\n\r?\n/)) {
      const dados = bloco.split(/\r?\n/).filter((l) => l.startsWith("data:")).map((l) => l.slice(5).trimStart()).join("\n");
      if (dados) { try { msgs.push(JSON.parse(dados)); } catch { /* bloco sem JSON */ } }
    }
    return msgs;
  }
  if (!texto) return [];
  try { const j = JSON.parse(texto); return Array.isArray(j) ? j : [j]; } catch { return []; }
}

function esperaDe(r) {
  const ra = r.headers.get("retry-after");
  return ra ? ` O servidor pediu ${corte(ra, 40)} s de espera: nada se repete sozinho; rode de novo depois disso.` : "";
}

const sessao = { id: null, protocolo: null, seq: 0, aberta: false, liberaDownload: false };
async function pedir(metodo, params, { notificacao = false } = {}) {
  const corpo = { jsonrpc: "2.0", method: metodo, ...(params ? { params } : {}) };
  if (!notificacao) corpo.id = ++sessao.seq;
  const headers = { Authorization: `Bearer ${chave()}`, "Content-Type": "application/json", Accept: "application/json, text/event-stream", "User-Agent": UA };
  if (sessao.id) headers["Mcp-Session-Id"] = sessao.id;
  if (sessao.protocolo) headers["MCP-Protocol-Version"] = sessao.protocolo;
  pedidos.push(metodo + (params?.name ? ` ${params.name}` : ""));
  let r;
  try { r = await fetch(URL_MCP, { method: "POST", headers, body: JSON.stringify(corpo), signal: AbortSignal.timeout(120000) }); }
  catch (e) { throw new Recusa(`o servidor do Epidemic não respondeu a ${metodo} (${e?.cause?.code || e?.name || "erro de rede"}).`); }
  const sid = r.headers.get("mcp-session-id");
  if (sid) sessao.id = sid; // vive só na memória: não se grava nem se imprime
  const texto = await r.text();
  if (r.status === 401 || r.status === 403) throw new Recusa(`o Epidemic recusou a chave (HTTP ${r.status}) em ${metodo}. A chave vale um ano a partir da criação; o Lucas confere na conta dele.`);
  if (r.status === 429 || r.status === 503) throw new Recusa(`o Epidemic pediu calma (HTTP ${r.status}) em ${metodo}.${esperaDe(r)}`);
  if (notificacao) { if (r.status >= 400) throw new Recusa(`o Epidemic respondeu HTTP ${r.status} a ${metodo}.`); return null; }
  if (r.status !== 200) throw new Recusa(`o Epidemic respondeu HTTP ${r.status} a ${metodo}.`);
  const msgs = lerCorpo(r.headers.get("content-type"), texto);
  const m = msgs.find((x) => x && x.id === corpo.id && (x.result || x.error)) || msgs.find((x) => x && (x.result || x.error));
  if (!m) throw new Recusa(`a resposta a ${metodo} veio sem mensagem JSON-RPC.`);
  if (m.error) throw new Recusa(`erro JSON-RPC em ${metodo}: ${corte(m.error.message || JSON.stringify(m.error), 300)}`);
  return m.result;
}
async function abrir() {
  if (sessao.aberta) return sessao.info;
  const res = await pedir("initialize", { protocolVersion: VERSAO_PROTOCOLO, capabilities: {}, clientInfo: { name: "alpha-point-canal", version: "1.0.0" } });
  sessao.protocolo = res?.protocolVersion || VERSAO_PROTOCOLO;
  await pedir("notifications/initialized", null, { notificacao: true });
  sessao.aberta = true; sessao.info = res;
  return res;
}
/** Uma ferramenta, pelo nome. Só as da lista; o DownloadRecording só dentro do `baixar` de verdade. */
async function ferramenta(nome, argumentos) {
  if (!PERMITIDAS.has(nome)) throw new Barrado(`"${nome}" não é ferramenta desta ferramenta (só ${[...PERMITIDAS].join(", ")}). Nada foi pedido.`);
  if (nome === "DownloadRecording" && !sessao.liberaDownload) throw new Barrado("DownloadRecording só sai do `baixar`, depois da lista aprovada e das conferências, e nunca a seco.");
  await abrir();
  const res = await pedir("tools/call", { name: nome, arguments: argumentos });
  const texto = (res?.content || []).filter((c) => c.type === "text").map((c) => c.text).join("\n");
  if (res?.isError) throw new Recusa(`${nome} voltou com erro: ${corte(texto, 400)}`);
  let j; try { j = JSON.parse(texto); } catch { throw new Recusa(`${nome}: a resposta não é o JSON do GraphQL (${corte(texto, 200)}).`); }
  if (Array.isArray(j.errors) && j.errors.length) {
    const e = j.errors[0], ext = e.extensions || {};
    if (ext.code === "RETRY_LATER") throw new Recusa(`${nome}: o Epidemic pediu para tentar depois (RETRY_LATER${ext.retryAfterSeconds != null ? `, ${corte(ext.retryAfterSeconds, 20)} s` : ""}). Nada se repete sozinho.`);
    throw new Recusa(`${nome}: ${corte(e.message || "erro do GraphQL", 300)}${ext.code ? ` (${corte(ext.code, 60)})` : ""}`);
  }
  return j.data;
}

// ---------- a faixa, como o canal a lê ----------
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const tags = (rec, dim) => (rec.tags || []).filter((t) => t?.dimension?.name === dim).map((t) => t.displayName);
function artistas(rec) {
  const por = (papel) => [...new Set((rec.credits || []).filter((c) => c.role === papel).map((c) => c.artist?.name).filter(Boolean))];
  const a = por("MAIN_ARTIST");
  return (a.length ? a : por("COMPOSER")).join(" & ") || null;
}
const VOZES = ["sem voz", "com voz", "?"];
function voz(rec) {
  const v = tags(rec, "vocal type").map((x) => x.toLowerCase());
  if (v.includes("vocal presence")) return "com voz";
  if (v.includes("no vocals")) return "sem voz";
  return "?";
}
function resumo(rec) {
  const ms = rec.audioFile?.durationInMilliseconds;
  return {
    id: rec.id,
    titulo: rec.title,
    artista: artistas(rec),
    duracao_s: Number.isFinite(ms) ? +(ms / 1000).toFixed(3) : null,
    bpm: Number.isFinite(rec.bpm) ? rec.bpm : null,
    moods: tags(rec, "mood"),
    generos: tags(rec, "genre"),
    uso: tags(rec, "production genre"),
    voz: voz(rec),
    stems: (rec.stems || []).map((s) => s.type),
    url: PAGINA(rec.id),
  };
}
const mmss = (s) => (s == null || !Number.isFinite(+s) ? "?" : `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`);
function imprimirFaixas(faixas) {
  faixas.forEach((f, i) => {
    dizer(`${String(i + 1).padStart(2)}. ${f.titulo} — ${f.artista ?? "artista ?"} · ${mmss(f.duracao_s)} · ${f.bpm ? `${f.bpm} BPM` : "sem pulso (BPM 0)"} · ${f.voz}`);
    dizer(`    moods: ${f.moods.join(", ") || "—"} · gêneros: ${f.generos.join(", ") || "—"}${f.uso.length ? ` · uso: ${f.uso.join(", ")}` : ""}`);
    dizer(`    stems: ${f.stems.join(", ") || "nenhum"} · id ${f.id}`);
    dizer(`    ${f.url}`);
  });
}
const paraLista = (f, i) => ({ n: i + 1, ...f, cena: null, formato: "MP3", stem: "FULL", aprovado: false });

function numero(n, nome) { const v = Number(n); if (!Number.isFinite(v) || v < 0) sair(2, `NÃO RODOU — --${nome} tem de ser número (recebi "${n}").`); return v; }
function faixaBpm(t) {
  const m = /^(\d*)\s*-\s*(\d*)$/.exec(t) || /^(\d+)$/.exec(t);
  if (!m) sair(2, `NÃO RODOU — --bpm=60-100, 60- ou -100 (recebi "${t}").`);
  if (m.length === 2) return { min: +m[1], max: +m[1] };
  const o = {}; if (m[1]) o.min = +m[1]; if (m[2]) o.max = +m[2];
  return o;
}
const slugs = (t) => t.split(",").map((s) => s.trim().toLowerCase().replace(/\s+/g, "-")).filter(Boolean);
const ORDENS = { relevancia: "RELEVANCE", popularidade: "POPULARITY", data: "DATE", duracao: "DURATION", titulo: "TITLE", bpm: "BPM" };
function tamanho() { const n = valor("n") ? Math.round(numero(valor("n"), "n")) : 10; if (n < 1 || n > 50) sair(2, "NÃO RODOU — --n vai de 1 a 50."); return n; }
function filtroDuracaoLocal(f) {
  const mn = valor("dur-min") ? numero(valor("dur-min"), "dur-min") : null, mx = valor("dur-max") ? numero(valor("dur-max"), "dur-max") : null;
  return (f.duracao_s == null) || ((mn == null || f.duracao_s >= mn) && (mx == null || f.duracao_s <= mx));
}
// No --json, o relato vai ao stderr: o stdout fica só com o JSON.
function relatoPedidos() { (flag("json") ? queixa : dizer)(`pedidos ao Epidemic nesta execução: ${pedidos.length ? pedidos.join(" → ") : "nenhum"}`); }

// ---------- conferir ----------
async function conferir() {
  dizer(`a chave ${NOME_CHAVE}: ${onde(NOME_CHAVE) ? `presente (${onde(NOME_CHAVE)}; o valor não se mostra)` : "AUSENTE"}`);
  const ini = await abrir();
  dizer(`servidor: ${ini?.serverInfo?.name ?? "?"} ${ini?.serverInfo?.version ?? ""}, protocolo ${sessao.protocolo}, listChanged: ${ini?.capabilities?.tools?.listChanged ?? "?"}`);
  const lst = await pedir("tools/list", {});
  const ts = lst?.tools || [];
  const nomes = ts.map((t) => t.name);
  dizer(`${ts.length} ferramentas${lst?.nextCursor ? " (há mais página: o servidor mudou; confira à mão)" : ""}: ${nomes.join(", ")}`);
  const problemas = [];
  for (const n of [...BUSCA, "DownloadRecording"]) if (!nomes.includes(n)) problemas.push(`falta ${n}`);
  for (const n of BUSCA) { const t = ts.find((x) => x.name === n); if (t && t.annotations?.readOnlyHint !== true) problemas.push(`${n} deixou de ser só leitura`); }
  const dl = ts.find((t) => t.name === "DownloadRecording");
  const op = dl?.inputSchema?.properties?.options?.properties;
  if (dl && !(op?.fileType?.enum?.includes("MP3") && op?.stemType?.enum?.includes("FULL"))) problemas.push("o DownloadRecording mudou de forma (options.fileType/stemType)");
  const novas = nomes.filter((n) => !PERMITIDAS.has(n) && !NUNCA.includes(n));
  if (novas.length) dizer(`ferramentas novas, que esta ferramenta não usa: ${novas.join(", ")}`);
  relatoPedidos();
  if (problemas.length) sair(1, `CONFERIR: ${problemas.join("; ")}.`);
  dizer("CONFERIR: ok — a chave entra, a busca e o DownloadRecording estão como a ferramenta espera. Nada foi baixado.");
}

// ---------- buscar ----------
async function buscar() {
  const termo = livres.join(" ").trim();
  const filter = {};
  if (valor("mood")) filter.moodSlugs = { matchType: "ANY", values: slugs(valor("mood")) };
  if (valor("genero")) filter.taxonomySlugs = { matchType: "ANY", values: slugs(valor("genero")) };
  if (valor("bpm")) filter.bpm = faixaBpm(valor("bpm"));
  const dmin = valor("dur-min"), dmax = valor("dur-max");
  if (dmin || dmax) { filter.duration = {}; if (dmin) filter.duration.min = Math.round(numero(dmin, "dur-min") * 1000); if (dmax) filter.duration.max = Math.round(numero(dmax, "dur-max") * 1000); }
  if (flag("instrumental")) filter.vocals = false;
  if (!termo && !Object.keys(filter).length) sair(2, "NÃO RODOU — buscar sem termo e sem filtro varreria o catálogo. Dê um termo ou um filtro. Nada foi pedido ao Epidemic.");
  const a = { first: tamanho() };
  if (termo) a.query = { term: termo };
  if (Object.keys(filter).length) a.filter = filter;
  if (valor("ordem")) {
    const by = ORDENS[valor("ordem")];
    if (!by) sair(2, `NÃO RODOU — --ordem é ${Object.keys(ORDENS).join(" | ")}.`);
    a.sort = { by, order: flag("crescente") ? "ASCENDING" : "DESCENDING" };
  }
  if (valor("depois")) a.after = valor("depois");
  const d = await ferramenta("SearchRecordings", a);
  const con = d?.recordings;
  if (!con) throw new Recusa("SearchRecordings: a resposta não traz data.recordings.");
  let faixas = (con.nodes || []).map((n) => resumo(n.recording));
  const antes = faixas.length;
  if (flag("instrumental")) faixas = faixas.filter((f) => f.voz === "sem voz");
  const tiradas = antes - faixas.length;
  const total = con.meta?.total ?? null;
  const proxima = con.pageInfo?.hasNextPage ? con.pageInfo.endCursor : null;
  if (flag("json")) {
    dizer(JSON.stringify({ ferramenta: "SearchRecordings", argumentos: a, total, proxima, tiradas_por_voz: tiradas, faixas: faixas.map(paraLista) }, null, 2));
    relatoPedidos();
    return;
  }
  dizer(`busca: ${termo ? `"${termo}"` : "(sem termo)"}${Object.keys(filter).length ? ` · filtros ${JSON.stringify(filter)}` : ""}${a.sort ? ` · ordem ${a.sort.by} ${a.sort.order}` : ""}`);
  dizer(`total no Epidemic: ${total ?? "?"}${termo && total === 500 ? " (500 é o teto do servidor numa busca com termo)" : ""} · nesta página: ${antes}${tiradas ? `, ${tiradas} tirada(s) por voz (sem o tag "no vocals")` : ""}`);
  dizer("");
  imprimirFaixas(faixas);
  if (filter.bpm?.min) dizer("\naviso: o BPM mínimo tira as faixas sem pulso (BPM 0), que é o ambient e o drone.");
  if (proxima) dizer(`\npróxima página (uma busca a mais, só se precisar): --depois=${proxima}`);
  dizer("A prévia se ouve na página da faixa, no navegador do Lucas. Nada foi baixado.");
  relatoPedidos();
}

// ---------- parecidas ----------
async function parecidas() {
  const id = livres[0];
  if (!id || !UUID.test(id)) sair(2, "NÃO RODOU — parecidas <id>: o id é o UUID da faixa (o da busca). Nada foi pedido ao Epidemic.");
  const a = { id, first: tamanho() };
  if (valor("depois")) a.after = valor("depois");
  const d = await ferramenta("SearchSimilarToRecording", a);
  const con = d?.recording?.similarRecordings;
  if (!con) throw new Recusa("SearchSimilarToRecording: a resposta não traz data.recording.similarRecordings (o id existe?).");
  let faixas = (con.nodes || []).map(resumo);
  const antes = faixas.length;
  if (flag("instrumental")) faixas = faixas.filter((f) => f.voz === "sem voz");
  faixas = faixas.filter(filtroDuracaoLocal);
  const proxima = con.pageInfo?.hasNextPage ? con.pageInfo.endCursor : null;
  if (flag("json")) {
    dizer(JSON.stringify({ ferramenta: "SearchSimilarToRecording", argumentos: a, proxima, tiradas_pelo_filtro: antes - faixas.length, faixas: faixas.map(paraLista) }, null, 2));
    relatoPedidos();
    return;
  }
  dizer(`parecidas com ${id} (${PAGINA(id)}) · nesta página: ${antes}${antes - faixas.length ? `, ${antes - faixas.length} tirada(s) pelo filtro local` : ""}`);
  dizer("");
  imprimirFaixas(faixas);
  if (proxima) dizer(`\npróxima página (uma busca a mais, só se precisar): --depois=${proxima}`);
  dizer("Nada foi baixado.");
  relatoPedidos();
}

// ---------- a lista: forma, assinatura e conferência contra o servidor ----------
const FORMATOS = { MP3: ".mp3", WAV: ".wav" };
const STEMS = ["FULL", "BASS", "DRUMS", "INSTRUMENTS"];
const tituloCaixa = (t) => String(t).replace(/(^|[\s(/-])([a-z])/g, (_, a, b) => a + b.toUpperCase());
const norm = (t) => String(t ?? "").normalize("NFKC").trim().toLowerCase().replace(/\s+/g, " ");
const semAcento = (t) => String(t).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const hex = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
function canonico(v) {
  if (Array.isArray(v)) return v.map(canonico);
  if (v && typeof v === "object") return Object.fromEntries(Object.keys(v).sort().map((k) => [k, canonico(v[k])]));
  return v;
}
/** A assinatura da lista que vai ao chat: o conteúdo de TODAS as linhas, menos o "aprovado" (que é o sim que se marca depois). */
function assinaturaDe(proj, linhas) {
  const sem = linhas.map((l) => { const { aprovado, ...resto } = l; return canonico(resto); }); // eslint-disable-line no-unused-vars
  return hex(JSON.stringify({ proj: proj ?? null, linhas: sem })).slice(0, 12);
}
function caminhoParaRegistro(arq) {
  const abs = path.resolve(arq), rel = path.relative(process.cwd(), abs);
  return (rel && !rel.startsWith("..") && !path.isAbsolute(rel) ? rel : abs).replace(/\\/g, "/");
}
function lerLista(arq) {
  if (!arq) throw new NaoRodou("falta --lista=<arquivo.json>.");
  if (!fs.existsSync(arq)) throw new NaoRodou(`a lista ${arq} não existe.`);
  const bytes = fs.readFileSync(arq);
  let j; try { j = JSON.parse(decodificar(bytes)); } catch (e) { throw new NaoRodou(`a lista ${arq} não é JSON (${e.message}).`); }
  const linhas = Array.isArray(j) ? j : (j?.linhas || j?.faixas);
  if (!Array.isArray(linhas) || !linhas.length) throw new NaoRodou(`a lista ${arq} não tem linhas ("linhas", "faixas" ou a lista solta).`);
  if (linhas.some((l) => !l || typeof l !== "object" || Array.isArray(l))) throw new NaoRodou(`a lista ${arq} tem linha que não é um objeto.`);
  // O "n" é o número que o Lucas cita no "sim": inteiro, em toda linha, e único.
  const p = [], vistos = new Map();
  linhas.forEach((l, i) => {
    if (!Number.isInteger(l.n) || l.n < 1) p.push(`a ${i + 1}ª linha não tem "n" inteiro ≥ 1 (tem ${JSON.stringify(l.n ?? null)})`);
    else if (vistos.has(l.n)) p.push(`"n": ${l.n} aparece duas vezes (na ${vistos.get(l.n)}ª e na ${i + 1}ª linha)`);
    else vistos.set(l.n, i + 1);
  });
  if (p.length) throw new NaoRodou(`a lista ${arq} não numera as linhas direito: ${p.join("; ")}. O "sim" do Lucas cita as linhas pelo número.`);
  const proj = Array.isArray(j) ? null : (j.proj ?? null);
  return { arq, proj, linhas: JSON.parse(JSON.stringify(linhas)), assinatura: assinaturaDe(proj, linhas), sha256: hex(bytes) };
}
/** A forma de uma linha (a que pode ir ao download). Normaliza formato e stem. */
function problemasDaLinha(l) {
  l.formato = String(l.formato ?? "MP3").toUpperCase(); l.stem = String(l.stem ?? "FULL").toUpperCase();
  const p = [];
  if (typeof l.id !== "string" || !UUID.test(l.id)) p.push("\"id\" não é o UUID da faixa");
  if (typeof l.titulo !== "string" || !l.titulo.trim()) p.push("falta \"titulo\" (o que o Lucas viu na lista)");
  if (typeof l.artista !== "string" || !l.artista.trim()) p.push("falta \"artista\" (o que o Lucas viu na lista)");
  if (typeof l.duracao_s !== "number" || !Number.isFinite(l.duracao_s) || l.duracao_s <= 0) p.push(`"duracao_s" tem de ser o número de segundos (recebi ${JSON.stringify(l.duracao_s ?? null)})`);
  else if (l.duracao_s < DURACAO_MINIMA_S) p.push(`a faixa tem ${l.duracao_s} s; a biblioteca pede ${DURACAO_MINIMA_S} s ou mais`);
  try { guardaArquivo(JSON.stringify(l), `a linha ${l.n}`); } catch (e) { p.push(e.message); } // o texto da linha vai à biblioteca: a guarda já aqui
  if (l.url != null) {
    const m = typeof l.url === "string" ? RE_PAGINA.exec(l.url.trim()) : null;
    if (!m) p.push(`"url" não é a página de uma faixa do Epidemic (${JSON.stringify(l.url)})`);
    else if (typeof l.id === "string" && m[1].toLowerCase() !== l.id.toLowerCase()) p.push(`"url" é a página de outra faixa (${m[1]}), não a do "id" ${l.id}`);
  }
  if (l.voz != null && !VOZES.includes(l.voz)) p.push(`"voz" é ${VOZES.map((v) => `"${v}"`).join(", ")} ou ausente (recebi ${JSON.stringify(l.voz)})`);
  if (!FORMATOS[l.formato]) p.push(`"formato" é MP3 ou WAV (recebi ${JSON.stringify(l.formato)})`);
  if (!STEMS.includes(l.stem)) p.push(`"stem" é ${STEMS.join(", ")} (recebi ${JSON.stringify(l.stem)})`);
  if (l.bundle) p.push("\"bundle\" não se aceita: o que ele entrega não foi medido");
  return p;
}
function exigirForma(linhas) {
  const malformadas = [];
  for (const l of linhas) { const p = problemasDaLinha(l); if (p.length) malformadas.push(`linha ${l.n}: ${p.join("; ")}`); }
  const chaves = linhas.map((l) => `${String(l.id).toLowerCase()}|${l.stem}|${l.formato}`);
  if (new Set(chaves).size !== chaves.length) malformadas.push("a mesma faixa, no mesmo stem e formato, aparece duas vezes");
  if (malformadas.length) throw new NaoRodou(`a lista tem linha mal escrita:\n  ${malformadas.join("\n  ")}\nQuem a escreveu conserta; se mudar o que o Lucas viu, ela volta a ele.`);
}
/** UMA busca pelos ids (ferramenta de busca, sem gasto): a faixa de cada id, como o servidor a descreve. */
async function faixasDoServidor(linhas) {
  const ids = [...new Set(linhas.map((l) => l.id))];
  if (ids.length > MAX_LINHAS_POR_BUSCA) throw new NaoRodou(`a lista tem ${ids.length} faixas; a conferência pelos ids é uma busca só, de até ${MAX_LINHAS_POR_BUSCA}. Divida a lista.`);
  const d = await ferramenta("SearchRecordings", { filter: { recordingIDs: ids }, first: ids.length });
  if (!d?.recordings) throw new Recusa("SearchRecordings: a resposta não traz data.recordings.");
  return new Map((d.recordings.nodes || []).map((n) => [n.recording?.id, resumo(n.recording)]));
}
/** A identidade da linha contra a faixa do servidor: o que o Lucas viu tem de ser a faixa que se baixaria. */
function problemasContraServidor(l, s) {
  if (!s) return ["o servidor não devolveu essa faixa pelo id"];
  const p = [];
  if (norm(s.titulo) !== norm(l.titulo)) p.push(`o título da lista ("${l.titulo}") não é o da faixa ("${s.titulo}")`);
  if (norm(s.artista) !== norm(l.artista)) p.push(`o artista da lista ("${l.artista}") não é o da faixa ("${s.artista ?? "?"}")`);
  if (s.duracao_s == null) p.push("o servidor não declara a duração da faixa");
  else if (Math.abs(l.duracao_s - s.duracao_s) > TOLERANCIA_LISTA_S) p.push(`a duração da lista (${l.duracao_s} s) não é a da faixa (${s.duracao_s} s)`);
  if (l.voz != null && l.voz !== s.voz) p.push(`a voz da lista ("${l.voz}") não é a da faixa ("${s.voz}")`);
  if (s.duracao_s != null && s.duracao_s < DURACAO_MINIMA_S) p.push(`a faixa tem ${s.duracao_s} s; a biblioteca pede ${DURACAO_MINIMA_S} s ou mais`);
  if (l.stem !== "FULL" && !s.stems.includes(l.stem)) p.push(`a faixa não tem o stem ${l.stem} (tem ${s.stems.join(", ") || "nenhum"})`);
  const moods = (Array.isArray(l.mood) && l.mood.length ? l.mood : s.moods || []);
  if (!moods.length) p.push("a faixa não tem mood no Epidemic, e a lista não deu um (a biblioteca exige mood)");
  return p;
}

// ---------- lista ----------
async function lista() {
  const L = lerLista(valor("lista") ?? livres[0]);
  exigirForma(L.linhas);
  let doServidor = null;
  if (flag("conferir")) doServidor = await faixasDoServidor(L.linhas);
  dizer(`lista ${L.arq}${L.proj ? ` (${L.proj})` : ""}: ${L.linhas.length} linha(s). Para o chat, uma por faixa:`);
  dizer("");
  const divergentes = [];
  for (const l of L.linhas) {
    dizer(`${l.n}. "${l.titulo}" — ${l.artista} · ${mmss(l.duracao_s)}${l.cena ? ` · cena ${l.cena}` : ""} · ${l.formato} ${l.stem}${l.voz ? ` · ${l.voz}` : ""}`);
    dizer(`    ${PAGINA(l.id)}`);
    if (l.aprovado !== undefined && l.aprovado !== false) dizer(`    aviso: esta linha já traz "aprovado": ${JSON.stringify(l.aprovado)}. Quem a marca é o "sim" do Lucas, depois de ver a lista.`);
    if (doServidor) { const p = problemasContraServidor(l, doServidor.get(l.id)); if (p.length) divergentes.push(`linha ${l.n}: ${p.join("; ")}`); }
  }
  if (doServidor) {
    if (divergentes.length) {
      dizer(`\nA lista NÃO bate com o servidor, e não vai ao Lucas assim:\n  ${divergentes.join("\n  ")}`);
      relatoPedidos();
      return 1;
    }
    dizer(`\nConferida contra o servidor: título, artista, duração${L.linhas.some((l) => l.voz != null) ? ", voz" : ""} e stem de cada linha batem.`);
  }
  dizer(`\nassinatura da lista: ${L.assinatura} (o conteúdo de todas as linhas, menos o "aprovado")`);
  dizer(`Com o "sim" do Lucas: marque "aprovado": true SÓ nas linhas que ele cobriu, e rode primeiro a seco:`);
  dizer(`  node ferramentas/epidemic.mjs baixar --lista=${L.arq} --linhas=<os números do sim> --mensagem="<o sim literal>" --hora="<a hora dele>" --assinatura=${L.assinatura} --seco`);
  dizer("e depois o mesmo sem --seco. Se a lista mudar (fora o \"aprovado\"), a assinatura muda, e ela volta ao Lucas.");
  if (pedidos.length) relatoPedidos();
  else dizer("Nada foi pedido ao Epidemic.");
  return 0;
}

// ---------- a aprovação ----------
const NUMS = String.raw`(\d+(?:\s*(?:,|e|and|&)\s*(?:(?:a|o|as|os)\s+)?\d+)*)`;
/** A mensagem contra --linhas: barra a contradição evidente. Não prova o sim (quem confere a mensagem no chat é o Claude central). */
function coerenciaDaMensagem(msg, cobertas) {
  const t = semAcento(msg).replace(/\s+/g, " ").trim();
  const nums = (s) => (s.match(/\d+/g) || []).map(Number);
  const p = [];
  if (/^[\s"'“”«(]*(nao|no|nope|cancela|cancele|cancelar|espera|espere|pare|para)\b/.test(t)) p.push(`a mensagem começa negando ou pedindo para esperar ("${msg}")`);
  if (!/\b(sim|aprovo|aprovad[oa]s?|pode|yes|baixa|baixe)\b/.test(t)) p.push(`a mensagem não traz "sim" nem "aprovo" ("${msg}")`);
  const tira = new RegExp(String.raw`\b(?:menos|exceto|tirando|tira|sem|fora)\s+(?:(?:a|o|as|os)\s+)?(?:linhas?\s+)?` + NUMS, "g");
  for (const m of t.matchAll(tira)) for (const n of nums(m[1])) if (cobertas.has(n)) p.push(`a mensagem tira a linha ${n} ("${m[0]}"), e --linhas a inclui`);
  const poe = new RegExp(String.raw`\b(?:aprovo|so|somente|apenas)\s+(?:(?:a|o|as|os)\s+)?(?:linhas?\s+)?` + NUMS, "g");
  const incl = new Set();
  for (const m of t.matchAll(poe)) nums(m[1]).forEach((n) => incl.add(n));
  if (incl.size && !(incl.size === cobertas.size && [...incl].every((n) => cobertas.has(n))))
    p.push(`a mensagem aprova a(s) linha(s) ${[...incl].sort((a, b) => a - b).join(", ")}, e --linhas diz ${[...cobertas].sort((a, b) => a - b).join(", ")}`);
  return p;
}

// ---------- o ritmo dos downloads (no disco, entre execuções) ----------
function lerEstado() {
  if (!fs.existsSync(ESTADO)) return { _leia: "As horas dos pedidos de download ao Epidemic (ferramentas/epidemic.mjs): o ritmo se conta aqui, entre execuções. Fora do git.", downloads: [] };
  let j; try { j = JSON.parse(decodificar(fs.readFileSync(ESTADO))); } catch (e) { throw new NaoRodou(`${ESTADO} não é JSON (${e.message}): o ritmo dos downloads se conta nele. Confira à mão.`); }
  if (!j || !Array.isArray(j.downloads)) throw new NaoRodou(`${ESTADO} não tem a lista "downloads": o ritmo dos downloads se conta nela. Confira à mão.`);
  return j;
}
function gravarEstado(est) {
  const texto = JSON.stringify(est, null, 2) + "\n";
  guardaArquivo(texto, ESTADO);
  fs.mkdirSync(path.dirname(ESTADO), { recursive: true });
  gravarAtomico(ESTADO, texto);
}
function ritmo(est, agora) {
  const janela = JANELA_MIN * 60000;
  const hs = est.downloads.map((d) => Date.parse(d?.hora)).filter(Number.isFinite).sort((a, b) => a - b);
  const naJanela = hs.filter((h) => agora - h < janela);
  const ultimo = hs.length ? hs[hs.length - 1] : null;
  return {
    naJanela: naJanela.length,
    vagas: Math.max(0, TETO_DOWNLOADS - naJanela.length),
    liberaEm: naJanela.length >= TETO_DOWNLOADS ? naJanela[naJanela.length - TETO_DOWNLOADS] + janela : null,
    esperarMs: ultimo != null ? Math.min(ESPACO_ENTRE_DOWNLOADS_S * 1000, Math.max(0, ultimo + ESPACO_ENTRE_DOWNLOADS_S * 1000 - agora)) : 0, // hora no futuro (relógio voltou) não trava
  };
}
const horaLocal = (ms) => { try { return new Date(ms).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }) + " (Brasília)"; } catch { return new Date(ms).toISOString(); } };

// ---------- baixar ----------
function slugTitulo(t) {
  return String(t).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "faixa";
}
function lerBiblioteca() {
  if (!fs.existsSync(BIBLIOTECA)) return null;
  let b; try { b = JSON.parse(decodificar(fs.readFileSync(BIBLIOTECA))); } catch (e) { throw new NaoRodou(`${BIBLIOTECA} não é JSON (${e.message}). Confira à mão.`); }
  if (!b || !Array.isArray(b.faixas)) throw new NaoRodou(`${BIBLIOTECA} não tem a lista "faixas". Confira à mão.`);
  return b;
}
function novaBiblioteca() {
  return {
    _leia: [
      "Biblioteca de trilha do Alpha Point, no formato da pré-v1 (src/trilha/biblioteca.mjs, commit 7ab9543): o trilha.mjs só escolhe o que está aqui.",
      "Cada faixa veio da conta Epidemic do Lucas Rosa (o Alpha Point está conectado nela), baixada por ferramentas/epidemic.mjs baixar, só com o \"sim\" dele a uma lista no chat: a mensagem, a hora, as linhas e a assinatura da lista ficam em \"aprovacao\".",
      "\"duracao_s\" e \"sha256\" foram MEDIDOS no arquivo (ffprobe e sha256), não digitados. O mp3/wav fica só nesta máquina (.gitignore); este arquivo vai ao git.",
      "A mp3 da Top10 (catalogo-top10.json do motor) nunca entra aqui: a assinatura dela não cobre o Alpha Point.",
    ],
    versao: 1,
    faixas: [],
  };
}
function gravarBiblioteca(b) {
  const texto = JSON.stringify(b, null, 2) + "\n";
  guardaArquivo(texto, BIBLIOTECA);
  gravarAtomico(BIBLIOTECA, texto);
}
function sha256(p) {
  const h = crypto.createHash("sha256"), buf = Buffer.allocUnsafe(1 << 20), fd = fs.openSync(p, "r");
  try { for (let n; (n = fs.readSync(fd, buf, 0, buf.length, null)) > 0;) h.update(buf.subarray(0, n)); } finally { fs.closeSync(fd); }
  return h.digest("hex");
}
function sondar(p) {
  const bin = process.env.FFPROBE_PATH || process.env.REGIE_FFPROBE || "ffprobe";
  let s;
  try { s = execFileSync(bin, ["-v", "error", "-print_format", "json", "-show_format", "-show_streams", p], { encoding: "utf8", windowsHide: true, maxBuffer: 16 << 20, stdio: ["ignore", "pipe", "pipe"] }); }
  catch (e) { return { erro: e?.code === "ENOENT" ? "o ffprobe não está no PATH" : `o ffprobe não leu o arquivo (${corte(String(e?.stderr || e?.message).trim(), 200)})` }; }
  const j = JSON.parse(s), st = j.streams || [];
  const audio = st.filter((x) => x.codec_type === "audio");
  return {
    formato: j.format?.format_name || "",
    duracao_s: +(+j.format?.duration).toFixed(3),
    audio: audio.map((a) => ({ codec: a.codec_name, canais: a.channels, taxa_hz: +a.sample_rate })),
    video: st.filter((x) => x.codec_type === "video" && !x.disposition?.attached_pic).length,
    bytes: fs.statSync(p).size,
  };
}
const hostDoEpidemic = (u) => u.protocol === "https:" && (u.hostname === "epidemicsound.com" || u.hostname.endsWith(".epidemicsound.com"));
/** O GET do arquivo, SEM a chave. Redirecionamento só à mão, até MAX_SALTOS, e cada endereço conferido: https em *.epidemicsound.com. */
async function pedirAoCdn(inicio) {
  let atual = inicio;
  for (let salto = 0; ; salto++) {
    let u; try { u = new URL(atual); } catch { throw new Barrado(`o endereço do download${salto ? ` (depois de ${salto} redirecionamento(s))` : ""} não é uma URL.`); }
    if (!hostDoEpidemic(u)) throw new Barrado(`o download ${salto ? `redirecionou (salto ${salto}) para` : "aponta para"} ${u.protocol}//${u.hostname}, fora de https *.epidemicsound.com. Não se baixa; o Claude central decide.`);
    let r;
    try { r = await fetch(atual, { headers: { "User-Agent": UA }, redirect: "manual", signal: AbortSignal.timeout(10 * 60 * 1000) }); } // sem a chave
    catch (e) { throw new Recusa(`o download não respondeu (${e?.cause?.code || e?.name || "erro de rede"}).`); }
    if (r.type === "opaqueredirect" || r.status === 0) throw new Barrado("o CDN redirecionou sem mostrar para onde. Não se baixa.");
    if ([301, 302, 303, 307, 308].includes(r.status)) {
      const loc = r.headers.get("location");
      try { await r.body?.cancel(); } catch { /* */ }
      if (!loc) throw new Recusa(`o CDN redirecionou (HTTP ${r.status}) sem dizer para onde.`);
      if (salto + 1 > MAX_SALTOS) throw new Barrado(`o CDN redirecionou mais de ${MAX_SALTOS} vezes. Não se baixa.`);
      let prox; try { prox = new URL(loc, atual).href; } catch { throw new Barrado("o CDN redirecionou para um endereço que não é URL."); }
      urlsAssinadas.add(prox); // pode trazer assinatura: nunca na tela nem em arquivo
      atual = prox;
      continue;
    }
    return { r, host: u.hostname, saltos: salto };
  }
}

async function baixar() {
  const seco = flag("seco");
  const mensagem = (valor("mensagem") ?? "").trim();
  const hora = (valor("hora") ?? "").trim();
  const txtLinhas = (valor("linhas") ?? "").replace(/\s+/g, "");
  const assinatura = (valor("assinatura") ?? "").trim().toLowerCase();
  // 1. A aprovação, antes de tudo: sem ela inteira, nada se lê da rede.
  if (!mensagem || !hora) throw new NaoRodou("faltam --mensagem=\"<o sim literal do Lucas, como ele escreveu no chat>\" e --hora=\"<a hora da mensagem>\". Sem os dois, nada se baixa.");
  if (!/^\d+(,\d+)*$/.test(txtLinhas)) throw new NaoRodou(`falta --linhas=1,3: os números das linhas que o "sim" cobre, como o Lucas as viu na lista (recebi ${JSON.stringify(valor("linhas"))}).`);
  const listaNs = txtLinhas.split(",").map(Number);
  const cobertas = new Set(listaNs);
  if (cobertas.size !== listaNs.length || [...cobertas].some((n) => n < 1)) throw new NaoRodou(`--linhas=${txtLinhas} repete número ou traz zero.`);
  if (!/^[0-9a-f]{12}$/.test(assinatura)) throw new NaoRodou("falta --assinatura=<os 12 caracteres que o `lista` imprimiu junto da lista que foi ao chat>.");
  guardaArquivo(mensagem + "\n" + hora, "a aprovação"); // vai à biblioteca: a guarda barra antes (saída 1)
  const L = lerLista(valor("lista"));
  if (L.assinatura !== assinatura) throw new NaoRodou(`a lista ${L.arq} mudou desde a que foi ao chat (a assinatura dela não é mais ${assinatura}). Rode \`lista\` de novo, mostre ao Lucas e peça um "sim" novo.`);
  // 2. Só "aprovado": true (o booleano), e o conjunto tem de ser o de --linhas.
  const aprovadas = L.linhas.filter((l) => l.aprovado === true);
  const fora = L.linhas.filter((l) => l.aprovado !== true);
  dizer(`lista ${L.arq}${L.proj ? ` (${L.proj})` : ""}: ${L.linhas.length} linha(s), ${aprovadas.length} aprovada(s); assinatura ${L.assinatura}.`);
  for (const l of fora) dizer(`  fora: linha ${l.n} (${l.titulo ?? l.id ?? "?"}) — "aprovado" é ${JSON.stringify(l.aprovado ?? null)}, não true. Não se baixa.`);
  if (!aprovadas.length) throw new NaoRodou("nenhuma linha tem \"aprovado\": true.");
  const nsAprovadas = new Set(aprovadas.map((l) => l.n));
  const ordena = (s) => [...s].sort((a, b) => a - b).join(",");
  if (ordena(nsAprovadas) !== ordena(cobertas))
    throw new NaoRodou(`--linhas=${ordena(cobertas)} não é o conjunto das linhas com "aprovado": true (${ordena(nsAprovadas)}). Os dois dizem o que o "sim" cobriu: têm de bater.`);
  const incoerencias = coerenciaDaMensagem(mensagem, cobertas);
  if (incoerencias.length) throw new NaoRodou(`a mensagem não casa com --linhas: ${incoerencias.join("; ")}. Confira com o Lucas, no chat, o que o "sim" cobre.`);
  // 3. A forma de cada linha aprovada. Uma linha mal escrita para tudo: quem a escreveu conserta.
  exigirForma(aprovadas);
  const slug = (() => { try { return JSON.parse(fs.readFileSync("canal.json", "utf8")).slug; } catch { return null; } })();
  if (slug !== SLUG_CANAL) throw new NaoRodou(`o canal.json diz slug ${JSON.stringify(slug)}, e esta ferramenta é do ${SLUG_CANAL}.`);
  const { problemasDaDeclaracao, checarBiblioteca } = await importar("src/trilha/biblioteca.mjs");

  // 4. A trava: um baixar por vez (só o de verdade; o seco não grava nada). A biblioteca e o ritmo se leem DEPOIS dela.
  if (!seco) {
    fs.mkdirSync(PASTA, { recursive: true });
    try { fs.closeSync(fs.openSync(TRAVA, "wx")); travaMinha = true; }
    catch { throw new NaoRodou(`há outro baixar em curso (${TRAVA}). Se não houver, a trava ficou de uma execução que caiu: confira e apague à mão.`); }
  }
  let codigo = 0;
  try {
    const bib = lerBiblioteca() ?? novaBiblioteca();
    const nomesUsados = new Set(bib.faixas.map((f) => String(f.arquivo || "").toLowerCase()));
    const idsUsados = new Set(bib.faixas.map((f) => f.id));
    const est = lerEstado();
    const r0 = ritmo(est, Date.now());
    if (!seco && !r0.vagas) {
      dizer(`TETO DO RITMO — ${r0.naJanela} pedidos de download nos últimos ${JANELA_MIN} min (o teto é ${TETO_DOWNLOADS}). Nada foi pedido ao Epidemic. Rode o mesmo comando a partir de ${horaLocal(r0.liberaEm)}.`);
      return 3;
    }

    // 5. Cada linha contra o servidor (UMA busca pelos ids), a declaração da pré-v1 e a guarda. Uma linha que não passa
    //    para TUDO: a lista tem de bater inteira com o que o Lucas viu.
    const doServidor = await faixasDoServidor(aprovadas);
    const plano = [], recusadas = [];
    const comoGravada = (e, s) => ({ ...e, duracao_s: s.duracao_s, sha256: "0".repeat(64), medido: { canais: 2, taxa_hz: 48000, codec: e.epidemic.formato.toLowerCase(), formato: e.epidemic.formato.toLowerCase(), bytes: 1 }, epidemic: { ...e.epidemic, baixado_em: new Date().toISOString() } });
    for (const l of aprovadas) {
      const s = doServidor.get(l.id);
      const idLinha = `es-${l.id}${l.stem === "FULL" ? "" : `-${l.stem.toLowerCase()}`}${l.formato === "MP3" ? "" : `-${l.formato.toLowerCase()}`}`;
      if (s && idsUsados.has(idLinha) && !problemasContraServidor(l, s).length) { dizer(`  linha ${l.n}: "${l.titulo}" (${l.stem}, ${l.formato}) já está na biblioteca como ${idLinha}. Não se baixa de novo.`); continue; }
      const p = problemasContraServidor(l, s);
      if (idsUsados.has(idLinha)) p.push(`já está na biblioteca como ${idLinha}`);
      let arquivo = `es_${l.id.slice(0, 8)}_${slugTitulo(s?.titulo ?? l.titulo)}${l.stem === "FULL" ? "" : `_${l.stem.toLowerCase()}`}${FORMATOS[l.formato]}`;
      if (nomesUsados.has(arquivo.toLowerCase())) arquivo = `es_${l.id}_${slugTitulo(s?.titulo ?? l.titulo)}${l.stem === "FULL" ? "" : `_${l.stem.toLowerCase()}`}${FORMATOS[l.formato]}`;
      if (nomesUsados.has(arquivo.toLowerCase())) p.push(`o nome ${arquivo} já está na biblioteca, com outra faixa`);
      if (fs.existsSync(path.join(PASTA, arquivo))) p.push(`${path.join(PASTA, arquivo)} já existe sem linha na biblioteca: confira à mão (nada se sobrescreve)`);
      if (fs.existsSync(path.join(PASTA, `_baixando_${arquivo}`))) p.push(`sobrou ${path.join(PASTA, `_baixando_${arquivo}`)} de um download que caiu: confira à mão (nada se sobrescreve)`);
      const moods = (Array.isArray(l.mood) && l.mood.length ? l.mood : s?.moods || []).map(tituloCaixa);
      const entrada = s ? {
        id: idLinha,
        arquivo,
        titulo: s.titulo,
        artista: s.artista,
        mood: moods,
        genero: s.generos.map(tituloCaixa),
        energia: l.energia ?? null,
        bpm: s.bpm > 0 ? s.bpm : null, // a pré-v1 aceita número positivo ou null; BPM 0 é "sem pulso"
        duracao_s: null,
        sha256: null,
        licenca: { fonte: "epidemic", tipo: "assinatura", titular: TITULAR, canal_liberado: [SLUG_CANAL], atribuicao: null, prova: PAGINA(l.id) },
        epidemic: { id: l.id, url: PAGINA(l.id), stem: l.stem, formato: l.formato, voz: s.voz, uso: s.uso, duracao_declarada_s: s.duracao_s },
        aprovacao: { mensagem, hora, linhas: [...cobertas].sort((a, b) => a - b), assinatura: L.assinatura, lista: caminhoParaRegistro(L.arq), lista_sha256: L.sha256, linha: l.n, proj: L.proj ?? null, cena: l.cena ?? null },
      } : null;
      if (entrada) {
        const decl = problemasDaDeclaracao(entrada, SLUG_CANAL); // a declaração, pela pré-v1, antes de gastar um download
        if (decl.length) p.push(`a pré-v1 recusaria a linha: ${decl.join("; ")}`);
        try { guardaArquivo(JSON.stringify(comoGravada(entrada, s), null, 2), `a linha ${l.n} da biblioteca`); } catch (e) { p.push(e.message); } // a guarda, ANTES do download
      }
      if (p.length) { recusadas.push(`linha ${l.n}: ${p.join("; ")}`); continue; }
      nomesUsados.add(arquivo.toLowerCase()); idsUsados.add(idLinha);
      plano.push({ l, s, entrada });
    }
    if (!recusadas.length && plano.length) {
      try { guardaArquivo(JSON.stringify({ ...bib, faixas: [...bib.faixas, ...plano.map(({ entrada, s }) => comoGravada(entrada, s))] }, null, 2), BIBLIOTECA); }
      catch (e) { recusadas.push(`a biblioteca inteira, com as linhas do plano: ${e.message}`); }
    }
    if (recusadas.length) {
      dizer(`\n${seco ? "A SECO — " : ""}${recusadas.length} linha(s) não passaram na conferência:`);
      for (const r of recusadas) dizer(`  ${r}`);
      throw new Barrado(`nada se ${seco ? "baixaria" : "baixa"}, nem as outras linhas: a lista tem de bater inteira com o que o Lucas viu e com o servidor. Conserte a lista; se mudar o que o Lucas viu, ela volta a ele.`);
    }
    if (!plano.length) { dizer("Nenhuma linha a baixar: todas já estão na biblioteca."); relatoPedidos(); return 0; }

    if (seco) {
      dizer(`\nA SECO — o que o baixar faria (nada foi baixado, nenhuma pasta criada, nada gravado):`);
      dizer(`o ritmo: ${r0.naJanela} pedido(s) de download nos últimos ${JANELA_MIN} min (teto ${TETO_DOWNLOADS}); ${r0.esperarMs ? `esperaria ${Math.ceil(r0.esperarMs / 1000)} s antes do primeiro; ` : ""}baixaria ${Math.min(plano.length, r0.vagas)} de ${plano.length} agora${plano.length > r0.vagas ? `, e pararia no teto (saída 3): as outras ${plano.length - r0.vagas} ficariam para uma execução depois de a janela abrir` : ""}.`);
      for (const [i, { l, s, entrada }] of plano.entries()) {
        dizer(`\n${i + 1}. linha ${l.n}: "${s.titulo}" — ${s.artista} · ${mmss(s.duracao_s)} · ${l.stem} · ${l.formato}${l.cena ? ` · cena ${l.cena}` : ""}`);
        if (i > 0) dizer(`   esperaria ${ESPACO_ENTRE_DOWNLOADS_S} s depois do pedido anterior`);
        dizer(`   gravaria a hora do pedido em ${ESTADO} e chamaria DownloadRecording { id: ${l.id}, options: { fileType: ${l.formato}, stemType: ${l.stem} } } (NÃO chamado)`);
        dizer(`   baixaria a URL assinada (sem a chave; redirecionamento só à mão, até ${MAX_SALTOS}, e só https em *.epidemicsound.com) para ${path.join(PASTA, `_baixando_${entrada.arquivo}`)}`);
        dizer(`   conferiria: ffprobe (formato ${l.formato.toLowerCase()}, 1 ou 2 canais, sem vídeo, duração ${s.duracao_s} s ± ${TOLERANCIA_DURACAO_S} s, ≥ ${DURACAO_MINIMA_S} s) e o sha256`);
        dizer(`   renomearia para ${path.join(PASTA, entrada.arquivo)} e gravaria em ${BIBLIOTECA} esta linha (duracao_s e sha256 medidos no arquivo):`);
        dizer(JSON.stringify({ ...entrada, duracao_s: "<medida pelo ffprobe>", sha256: "<medido>", medido: "<canais, taxa, codec, bytes>", epidemic: { ...entrada.epidemic, baixado_em: "<hora do download>" } }, null, 2).replace(/^/gm, "   "));
      }
      dizer(`\nCada linha do plano passou: o servidor, a declaração na pré-v1 (problemasDaDeclaracao, canal ${SLUG_CANAL}) e a guarda do arquivo.`);
      relatoPedidos();
      if (pedidos.some((p) => p.includes("DownloadRecording"))) sair(1, "ERRO — o seco chamou o DownloadRecording.");
      return plano.length > r0.vagas ? 3 : 0; // o teto pararia o baixar: o seco diz o mesmo
    }

    // 6. O download, um por vez, no ritmo contado no disco.
    sessao.liberaDownload = true;
    const feitos = [];
    let parouEm = null;
    for (const { l, s, entrada } of plano) {
      const r = ritmo(est, Date.now());
      if (!r.vagas) { parouEm = r.liberaEm; break; }
      if (r.esperarMs > 0) { dizer(`  (${Math.ceil(r.esperarMs / 1000)} s até o próximo pedido de download)`); await dormir(r.esperarMs); }
      dizer(`\nlinha ${l.n}: "${s.titulo}" — ${s.artista} · ${l.stem} · ${l.formato}`);
      est.downloads = [...est.downloads, { hora: new Date().toISOString(), faixa: l.id }].slice(-100);
      gravarEstado(est); // a hora do pedido fica no disco ANTES do pedido: conta mesmo se ele falhar
      const dd = await ferramenta("DownloadRecording", { id: l.id, options: { fileType: l.formato, stemType: l.stem } });
      const assetUrl = dd?.recordingDownload?.assetUrl ?? dd?.downloadRecording?.assetUrl ?? Object.values(dd || {}).find((v) => v && typeof v.assetUrl === "string")?.assetUrl;
      if (typeof assetUrl !== "string") throw new Recusa("DownloadRecording: a resposta não traz assetUrl.");
      urlsAssinadas.add(assetUrl);
      const { r: resp, host, saltos } = await pedirAoCdn(assetUrl);
      dizer(`  URL assinada recebida (host ${host}${saltos ? `, depois de ${saltos} redirecionamento(s)` : ""}; não se mostra nem se grava)`);
      if (resp.status === 406) throw new Recusa("o CDN do Epidemic recusou o download (406, o firewall de downloads automáticos). Parar: nunca insistir. O Claude central avisa o Lucas.");
      if (resp.status === 429 || resp.status === 503) throw new Recusa(`o CDN do Epidemic pediu calma (HTTP ${resp.status}).${esperaDe(resp)}`);
      if (!resp.ok || !resp.body) throw new Recusa(`o CDN do Epidemic respondeu HTTP ${resp.status} ao download.`);
      const tmp = path.join(PASTA, `_baixando_${entrada.arquivo}`); // termina em .mp3/.wav: o .gitignore o pega
      const tipo = resp.headers.get("content-type") || "";
      const declarado = +resp.headers.get("content-length") || null;
      await pipeline(Readable.fromWeb(resp.body), fs.createWriteStream(tmp, { flags: "wx" }));
      const m = sondar(tmp);
      const p = [];
      if (m.erro) p.push(m.erro);
      else {
        if (!m.formato.split(",").includes(l.formato === "MP3" ? "mp3" : "wav")) p.push(`o arquivo é ${m.formato || "?"} (content-type ${corte(tipo || "?", 80)}), não ${l.formato}`);
        if (m.audio.length !== 1) p.push(`${m.audio.length} trilhas de áudio (espero 1)`);
        else if (!(m.audio[0].canais === 1 || m.audio[0].canais === 2)) p.push(`${m.audio[0].canais} canais (espero 1 ou 2)`);
        if (m.video) p.push("o arquivo tem vídeo");
        if (!Number.isFinite(m.duracao_s)) p.push("o ffprobe não mediu a duração");
        else {
          if (s.duracao_s != null && Math.abs(m.duracao_s - s.duracao_s) > TOLERANCIA_DURACAO_S) p.push(`dura ${m.duracao_s} s; o Epidemic declara ${s.duracao_s} s`);
          if (m.duracao_s < DURACAO_MINIMA_S) p.push(`dura ${m.duracao_s} s, menos que os ${DURACAO_MINIMA_S} s da biblioteca`);
        }
        if (declarado && declarado !== m.bytes) p.push(`chegaram ${m.bytes} bytes, o CDN declarou ${declarado}`);
      }
      if (p.length) {
        const ao = path.join(PASTA, `_recusado_${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}_${entrada.arquivo}`);
        try { fs.renameSync(tmp, ao); } catch { /* fica com o nome de download */ }
        throw new Barrado(`o arquivo da linha ${l.n} não passou na conferência: ${p.join("; ")}. Ficou em ${fs.existsSync(ao) ? ao : tmp} (fora do git, não apagado), sem linha na biblioteca.`);
      }
      const final = path.join(PASTA, entrada.arquivo);
      if (fs.existsSync(final)) throw new Barrado(`${final} apareceu durante o download: nada se sobrescreve. O baixado ficou em ${tmp}.`);
      fs.renameSync(tmp, final);
      const hash = sha256(final);
      const linha = {
        ...entrada,
        duracao_s: m.duracao_s,
        sha256: hash,
        medido: { canais: m.audio[0].canais, taxa_hz: m.audio[0].taxa_hz, codec: m.audio[0].codec, formato: m.formato, bytes: m.bytes },
        epidemic: { ...entrada.epidemic, baixado_em: new Date().toISOString() },
      };
      bib.faixas.push(linha);
      gravarBiblioteca(bib); // a cada faixa: o que chegou fica registrado mesmo se a próxima falhar
      feitos.push(linha);
      dizer(`  ok: ${final} · ${mmss(m.duracao_s)} (${m.duracao_s} s; o Epidemic declara ${s.duracao_s} s) · ${m.audio[0].canais} canais · ${m.audio[0].taxa_hz} Hz · ${m.bytes} bytes · sha256 ${hash.slice(0, 12)}…`);
    }
    // 7. A biblioteca inteira, pela pré-v1 (sem --gravar: só confere).
    const chk = checarBiblioteca(process.cwd());
    dizer(`\nbaixadas: ${feitos.length} de ${plano.length}. A biblioteca pela pré-v1: ${chk.faixas.length} faixa(s) passaram${chk.erros.length ? `, ${chk.erros.length} erro(s)` : ", nenhum erro"}${chk.avisos.length ? `, ${chk.avisos.length} aviso(s)` : ""}.`);
    for (const e of chk.erros) dizer(`  ERRO: ${e}`);
    for (const a of chk.avisos) dizer(`  aviso: ${a}`);
    if (chk.erros.length) codigo = 1;
    if (parouEm != null) {
      const faltam = plano.slice(feitos.length).map(({ l }) => l.n);
      dizer(`\nTETO DO RITMO — ${TETO_DOWNLOADS} pedidos de download em ${JANELA_MIN} min. Faltam as linhas ${faltam.join(", ")}: rode o mesmo comando a partir de ${horaLocal(parouEm)} (as baixadas não se baixam de novo).`);
      if (!codigo) codigo = 3;
    }
    relatoPedidos();
    return codigo;
  } finally {
    soltarTrava();
  }
}

// ---------- o despacho ----------
const USO = "uso: node ferramentas/epidemic.mjs conferir | buscar <termo> [--mood= --genero= --bpm= --dur-min= --dur-max= --instrumental --ordem= --n= --depois= --json] | parecidas <id> [--n= --instrumental --dur-min= --dur-max= --json] | lista --lista=<arquivo.json> [--conferir] | baixar --lista=<arquivo.json> --linhas=1,3 --mensagem=\"<sim literal>\" --hora=\"<hora>\" --assinatura=<a do lista> [--seco]  (o topo do arquivo diz como)";
try {
  let codigo = 0;
  if (cmd === "conferir") await conferir();
  else if (cmd === "buscar") await buscar();
  else if (cmd === "parecidas") await parecidas();
  else if (cmd === "lista") codigo = await lista();
  else if (cmd === "baixar") codigo = await baixar();
  else sair(2, USO);
  process.exit(codigo);
} catch (e) {
  if (e instanceof Recusa) { queixa(`RECUSADO PELO EPIDEMIC — ${e.message}`); relatoPedidos(); process.exit(1); }
  if (e instanceof Barrado) { queixa(`BARRADO PELO CANAL — ${e.message}`); relatoPedidos(); process.exit(1); }
  if (e instanceof NaoRodou) { queixa(`NÃO RODOU — ${e.message}${pedidos.length ? "" : " Nada foi pedido ao Epidemic."}`); if (pedidos.length) relatoPedidos(); process.exit(2); }
  queixa(`ERRO — ${e?.message || e}`); relatoPedidos(); process.exit(2);
}
