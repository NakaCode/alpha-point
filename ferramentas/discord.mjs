#!/usr/bin/env node
// discord.mjs — os avisos do canal no Discord do Lucas: status, pendências, aprendizados e erros.
//
// Decisão do Lucas, 28/09/2026, 14:2x de Brasília (CLAUDE.md, "O Discord"): "Avisos primeiro (Recomendado)". A
// opção dizia: "O bot posta status, pendências, aprendizados e erros, e te marca quando algo depende de você. As
// respostas continuam aqui no chat. É o mais rápido de montar."
// Por isso esta ferramenta SÓ POSTA. Ela não lê o que se escreve no Discord, e nada que chegue por lá vale como
// resposta do Lucas: a resposta que libera algo continua sendo a do chat do Claude.
//
// A chave: DISCORD_BOT_TOKEN no arquivo de chaves da máquina (%USERPROFILE%\.regie\chaves.env), lida pelo leitor
// da pré-v1 (src/lib/chaves.mjs, com REGIE_MOTOR ou C:/projetos/regie-v1). Nunca se imprime. O estado (o
// servidor, os canais, o dono e o último aprendizado postado) fica em db/discord-estado.json, fora do git.
// Sem dependência: o fetch e o WebSocket do próprio Node (24+). Sem npm.
//
// Uso (cwd na raiz do canal):
//   node ferramentas/discord.mjs conferir                       a chave funciona? o nome do bot e o link de convite
//   node ferramentas/discord.mjs preparar [--servidor=<nome>]   acha o servidor, cria os canais que faltam, manda o teste
//   node ferramentas/discord.mjs avisar <canal> [--marcar] [--simular] (--arquivo=<txt> | <texto...>)
//   node ferramentas/discord.mjs aprendizados [--simular] [--desde=<n>]   os itens novos do APRENDIZADOS.md
//   node ferramentas/discord.mjs status [--marcar] [--simular]  a fila da Régie (regie queue)
// Canais: status · pendencias · aprendizados · erros.
// Saída: 0 = feito · 1 = o Discord recusou, ou a mensagem foi barrada pela guarda · 2 = não rodou (uso, chave, estado)
//
// A guarda, antes de todo envio: nenhuma mensagem sai com um valor do arquivo de chaves (nem do .env do canal),
// nem com e-mail que não seja o contato público do canal (canal.json › contato).
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const MOTOR = process.env.REGIE_MOTOR || "C:/projetos/regie-v1";
const { lerChave, onde, interpretar, ARQUIVO_MAQUINA } = await import(pathToFileURL(path.join(MOTOR, "src/lib/chaves.mjs")).href);

const API = "https://discord.com/api/v10";
const GATEWAY = "wss://gateway.discord.gg/?v=10&encoding=json";
const UA = "DiscordBot (https://github.com/top10-company/alpha-point, 0.1)"; // o formato que o Discord pede aos bots
const CANAIS = {
  status: "Cada etapa dos vídeos do Alpha Point.",
  pendencias: "O que espera o Lucas. A resposta vai no chat do Claude, não aqui.",
  aprendizados: "As notas do APRENDIZADOS.md, uma por mensagem.",
  erros: "Portão que reprovou, especialista que falhou, site que bloqueou.",
};
// MANAGE_CHANNELS (só para criar os canais que faltam) · VIEW_CHANNEL · SEND_MESSAGES · EMBED_LINKS · READ_MESSAGE_HISTORY
const PERMISSOES = 16 + 1024 + 2048 + 16384 + 65536;
const ESTADO = path.join("db", "discord-estado.json");
const LIMITE = 1900; // o Discord aceita 2000 caracteres por mensagem; a folga é da menção

const args = process.argv.slice(2);
const cmd = args[0];
const flag = (n) => args.includes(`--${n}`);
const valor = (n) => { const a = args.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
const livres = args.slice(1).filter((a) => !a.startsWith("--"));
const dormir = (ms) => new Promise((r) => setTimeout(r, ms));
const agora = () => new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "short" });

function sair(codigo, msg) { if (msg) (codigo ? console.error : console.log)(msg); process.exit(codigo); }
if (!fs.existsSync("canal.json")) sair(2, "NÃO RODOU — rode da raiz do canal (a pasta com o canal.json).");

// ---------- a chave, sem nunca imprimir ----------
function token() {
  const t = lerChave("DISCORD_BOT_TOKEN");
  if (!t) sair(2, `NÃO RODOU — falta a chave DISCORD_BOT_TOKEN no arquivo de chaves da máquina (${ARQUIVO_MAQUINA()}). Nunca no git nem no chat.`);
  return t;
}

// ---------- a guarda ----------
function decodificar(buf) { // o mesmo cuidado do leitor da pré-v1: BOM e UTF-16
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) return buf.subarray(2).toString("utf16le");
  if (buf.length >= 2 && buf[0] === 0xfe && buf[1] === 0xff) { const b = Buffer.from(buf.subarray(2)); b.swap16(); return b.toString("utf16le"); }
  const s = buf.toString("utf8");
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}
function valoresSecretos() {
  const vals = [];
  for (const arq of [ARQUIVO_MAQUINA(), path.resolve(".env")]) {
    try { if (fs.existsSync(arq)) vals.push(...Object.values(interpretar(decodificar(fs.readFileSync(arq))))); } catch { /* sem arquivo, sem valor */ }
  }
  const t = lerChave("DISCORD_BOT_TOKEN");
  if (t) vals.push(t);
  return vals.filter((v) => typeof v === "string" && v.length >= 8);
}
function guarda(texto) {
  if (valoresSecretos().some((v) => texto.includes(v))) sair(1, "BARRADO — a mensagem contém um valor do arquivo de chaves. Nada foi enviado.");
  const contato = String(JSON.parse(fs.readFileSync("canal.json", "utf8")).contato || "").toLowerCase();
  const emails = (texto.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || []).filter((e) => e.toLowerCase() !== contato);
  if (emails.length) sair(1, `BARRADO — a mensagem traz ${emails.length} e-mail(s) que não é o contato público do canal. Nada foi enviado.`);
}

// ---------- o Discord ----------
async function api(metodo, rota, corpo) {
  for (let i = 0; i < 4; i++) {
    const r = await fetch(API + rota, {
      method: metodo,
      headers: { Authorization: `Bot ${token()}`, "User-Agent": UA, ...(corpo ? { "Content-Type": "application/json" } : {}) },
      body: corpo ? JSON.stringify(corpo) : undefined,
    });
    const bruto = await r.text();
    let j = null; try { j = bruto ? JSON.parse(bruto) : null; } catch { /* resposta sem JSON */ }
    if (r.status === 429) { await dormir(Math.ceil((j?.retry_after ?? 1) * 1000) + 250); continue; }
    if (!r.ok) {
      const e = new Error(`o Discord respondeu ${r.status}${j?.message ? ` (${j.message}${j.code ? `, código ${j.code}` : ""})` : ""} em ${metodo} ${rota.replace(/\d{15,}/g, "<id>")}`);
      e.status = r.status; throw e;
    }
    return j;
  }
  throw new Error(`o Discord seguiu limitando (429) em ${metodo} ${rota.replace(/\d{15,}/g, "<id>")}`);
}

// Uma identificação no gateway, no `preparar`. A documentação antiga do Discord pedia que o bot se identificasse
// uma vez antes do primeiro post pela API; a de hoje (discord/discord-api-docs, lida em 28/09/2026) não traz mais a
// frase. Fica porque não custa e prova a chave por outro caminho.
function gatewayUmaVez() {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(GATEWAY);
    let feito = false;
    const acabar = (fn, v) => { if (feito) return; feito = true; clearTimeout(relogio); try { ws.close(1000); } catch { /* já fechado */ } fn(v); };
    const relogio = setTimeout(() => acabar(reject, new Error("o gateway do Discord não respondeu em 20 s")), 20000);
    ws.onmessage = (ev) => {
      let m; try { m = JSON.parse(typeof ev.data === "string" ? ev.data : Buffer.from(ev.data).toString("utf8")); } catch { return; }
      if (m.op === 10) ws.send(JSON.stringify({ op: 2, d: { token: token(), intents: 1, properties: { os: "windows", browser: "alpha-point", device: "alpha-point" } } }));
      else if (m.op === 0 && m.t === "READY") acabar(resolve, m.d?.user?.username ?? "?");
      else if (m.op === 9) acabar(reject, new Error("o gateway recusou a identificação (sessão inválida)"));
    };
    ws.onclose = (ev) => acabar(reject, new Error(ev.code === 4004 ? "o Discord recusou a chave (4004): confira a DISCORD_BOT_TOKEN" : `o gateway fechou (${ev.code})`));
    ws.onerror = () => { /* o onclose diz o porquê */ };
  });
}

function lerEstado() { try { return JSON.parse(fs.readFileSync(ESTADO, "utf8")); } catch { return null; } }
function gravarEstado(e) { fs.mkdirSync(path.dirname(ESTADO), { recursive: true }); fs.writeFileSync(ESTADO, JSON.stringify(e, null, 2) + "\n"); }
function exigirEstado() {
  const e = lerEstado();
  if (!e?.canais) sair(2, "NÃO RODOU — o Discord ainda não foi preparado: rode `node ferramentas/discord.mjs preparar`.");
  return e;
}

function partes(texto) {
  const out = []; let resto = texto.trim();
  while (resto.length > LIMITE) {
    let corte = resto.lastIndexOf("\n", LIMITE);
    if (corte < LIMITE * 0.5) corte = resto.lastIndexOf(" ", LIMITE);
    if (corte < LIMITE * 0.5) corte = LIMITE;
    out.push(resto.slice(0, corte).trimEnd()); resto = resto.slice(corte).trimStart();
  }
  if (resto) out.push(resto);
  return out;
}

async function postar(canal, texto, { marcar = false, simular = false } = {}) {
  if (!CANAIS[canal]) sair(2, `NÃO RODOU — canal "${canal}" não existe; use ${Object.keys(CANAIS).join(", ")}.`);
  guarda(texto);
  const pedacos = partes(texto);
  if (simular) { console.log(`[simulação] #${canal}${marcar ? " (marcando o Lucas)" : ""}, ${pedacos.length} mensagem(ns):\n${pedacos.join("\n---\n")}`); return; }
  const e = exigirEstado();
  for (let i = 0; i < pedacos.length; i++) {
    const marca = marcar && i === 0 && e.dono ? `<@${e.dono}> ` : "";
    await api("POST", `/channels/${e.canais[canal]}/messages`, {
      content: marca + pedacos[i],
      allowed_mentions: { parse: [], users: marca ? [e.dono] : [] },
    });
    if (i < pedacos.length - 1) await dormir(1200);
  }
  console.log(`enviado a #${canal}: ${pedacos.length} mensagem(ns)${marcar ? ", marcando o Lucas" : ""}`);
}

// ---------- os aprendizados ----------
function itensAprendizados() {
  const txt = fs.readFileSync("APRENDIZADOS.md", "utf8").replace(/\r\n/g, "\n");
  const itens = []; let atual = null, secao = "";
  for (const linha of txt.split("\n")) {
    const m = /^###\s+(\d+)\.\s+(.*)$/.exec(linha);
    if (m) { if (atual) itens.push(atual); atual = { n: Number(m[1]), titulo: m[2].trim(), secao, corpo: [] }; continue; }
    const sec = /^##\s+(.*)$/.exec(linha);
    if (sec || /^#\s/.test(linha)) { if (atual) itens.push(atual); atual = null; if (sec) secao = sec[1].trim(); continue; }
    if (atual) atual.corpo.push(linha);
  }
  if (atual) itens.push(atual);
  return itens.map((i) => ({ ...i, corpo: i.corpo.join("\n").trim() }));
}
function resumo(item) {
  const TETO = 1500;
  let c = item.corpo;
  if (c.length > TETO) {
    let corte = c.lastIndexOf("\n\n", TETO);
    if (corte < 400) corte = c.lastIndexOf(". ", TETO) + 1;
    if (corte < 400) corte = TETO;
    c = `${c.slice(0, corte).trimEnd()}\n…`;
  }
  return `**${item.n}. ${item.titulo}**\n${c}\n-# APRENDIZADOS.md, item ${item.n}${item.secao ? ` · ${item.secao}` : ""}`;
}

// ---------- os comandos ----------
try {
  if (cmd === "conferir") {
    const app = await api("GET", "/oauth2/applications/@me");
    const servidores = await api("GET", "/users/@me/guilds");
    console.log(`bot: ${app.name} · a chave vem do arquivo: ${onde("DISCORD_BOT_TOKEN")}`);
    console.log(`bot público: ${app.bot_public ? "SIM — qualquer um com o link pode pôr o bot num servidor (desligue em Bot › Public Bot)" : "não"}`);
    console.log(`servidores: ${servidores.length ? servidores.map((g) => g.name).join(", ") : "nenhum ainda"}`);
    console.log(`convite: https://discord.com/oauth2/authorize?client_id=${app.id}&scope=bot&permissions=${PERMISSOES}`);
  } else if (cmd === "preparar") {
    const nomeBot = await gatewayUmaVez();
    const servidores = await api("GET", "/users/@me/guilds");
    const pedido = valor("servidor");
    const g = pedido ? servidores.find((x) => x.name === pedido) : servidores.length === 1 ? servidores[0] : null;
    if (!g) sair(2, `NÃO RODOU — ${servidores.length ? `o bot está em ${servidores.length} servidores (${servidores.map((x) => x.name).join(", ")}); diga qual com --servidor=<nome>` : "o bot ainda não está em nenhum servidor: use o link de convite do `conferir`"}.`);
    const guild = await api("GET", `/guilds/${g.id}`);
    const existentes = await api("GET", `/guilds/${g.id}/channels`);
    const antes = lerEstado() || {};
    const canais = {}; const criados = [];
    for (const [nome, topico] of Object.entries(CANAIS)) {
      let c = existentes.find((x) => x.type === 0 && x.name === nome);
      if (!c) { c = await api("POST", `/guilds/${g.id}/channels`, { name: nome, type: 0, topic: topico }); criados.push(nome); }
      canais[nome] = c.id;
    }
    gravarEstado({ servidor: { id: g.id, nome: g.name }, dono: guild.owner_id, canais, aprendizados_ultimo: antes.aprendizados_ultimo ?? 0, preparado_em: new Date().toISOString() });
    console.log(`bot ${nomeBot} no servidor "${g.name}" · canais criados agora: ${criados.join(", ") || "nenhum (já existiam)"}`);
    await postar("status", `Olá! Sou o bot do Alpha Point (${agora()}). Aqui chegam o status dos vídeos; em #pendencias, o que espera você; em #aprendizados, as notas do canal; em #erros, o que deu errado. As respostas continuam no chat do Claude.`, { marcar: true });
  } else if (cmd === "avisar") {
    const canal = livres[0];
    const arq = valor("arquivo");
    const texto = arq ? fs.readFileSync(arq, "utf8") : livres.slice(1).join(" ");
    if (!canal || !texto.trim()) sair(2, "uso: node ferramentas/discord.mjs avisar <canal> [--marcar] [--simular] (--arquivo=<txt> | <texto...>)");
    await postar(canal, texto, { marcar: flag("marcar"), simular: flag("simular") });
  } else if (cmd === "aprendizados") {
    const simular = flag("simular");
    const e = simular ? lerEstado() || {} : exigirEstado();
    const desde = valor("desde") !== null ? Number(valor("desde")) - 1 : e.aprendizados_ultimo ?? 0;
    const novos = itensAprendizados().filter((i) => i.n > desde).sort((a, b) => a.n - b.n);
    if (!novos.length) sair(0, `nenhum aprendizado novo (o último postado é o ${desde}).`);
    for (const item of novos) {
      const msg = resumo(item);
      if (simular) { console.log(`[simulação] item ${item.n}: ${msg.length} caracteres — ${item.titulo}`); guarda(msg); continue; }
      await postar("aprendizados", msg);
      e.aprendizados_ultimo = item.n; gravarEstado(e); // grava a cada item: se cair no meio, recomeça do seguinte
      await dormir(1200);
    }
    if (simular) console.log(`[simulação] ${novos.length} item(ns) a postar; nada foi enviado.`);
  } else if (cmd === "status") {
    const regie = process.env.REGIE_CLI || "C:/projetos/regie/bin/regie";
    const fila = execFileSync(process.execPath, [regie, "queue"], { encoding: "utf8" }).trim();
    await postar("status", `**A fila da Régie** (${agora()})\n\`\`\`\n${fila}\n\`\`\``, { marcar: flag("marcar"), simular: flag("simular") });
  } else {
    sair(2, "uso: node ferramentas/discord.mjs conferir | preparar | avisar | aprendizados | status (veja o topo do arquivo)");
  }
} catch (err) {
  sair(1, `FALHOU — ${err.message}`);
}
