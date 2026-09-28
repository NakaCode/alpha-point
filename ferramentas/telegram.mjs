#!/usr/bin/env node
// telegram.mjs — o que espera o Lucas, no Telegram dele: o que depende dele, o erro que segura o vídeo e o limite
// atingido.
//
// Decisão do Lucas, 28/09/2026 (CLAUDE.md, "Os avisos no celular"). A Meta travou a conta nova do WhatsApp ("Business
// account has been locked", erro 131031, sem solução confirmada). A pergunta: "A Meta travou a conta nova do WhatsApp.
// Como seguimos?" A resposta: "Telegram agora". A opção dizia: "Oficial, grátis e sem essa trava: um bot criado no
// próprio app do Telegram, em uns 10 minutos. Não é o WhatsApp."
// Por isso: a Bot API oficial do Telegram, só para o chat do Lucas. Esta ferramenta SÓ ENVIA. A única leitura é a do
// `preparar`, uma vez: acha o chat que mandou o código do convite, guarda o número dele e descarta o resto da fila.
// Nada do que se escreve no Telegram vale como resposta do Lucas: a resposta que libera algo continua sendo a do chat
// do Claude.
//
// A chave: TELEGRAM_BOT_TOKEN no arquivo de chaves da máquina (%USERPROFILE%\.regie\chaves.env), posta pelo Lucas no
// Bloco de Notas, nunca pelo chat, e nunca impressa. A Bot API leva a chave no caminho da URL (é o único jeito dela):
// por isso nenhuma mensagem daqui mostra a URL. O estado (o bot, o convite e o chat do Lucas) fica em
// db/telegram-estado.json, fora do git. A saída nunca mostra o nome nem o usuário de quem mandou o convite.
// Sem dependência: o fetch do próprio Node (24+). Sem npm.
//
// Uso (cwd na raiz do canal):
//   node ferramentas/telegram.mjs conferir        a chave funciona? o nome do bot; o chat do Lucas já está ligado?
//   node ferramentas/telegram.mjs convite         gera um código de uso único e o link t.me/<bot>?start=<código>
//   node ferramentas/telegram.mjs preparar        acha o chat que mandou o código, guarda e manda a confirmação
//   node ferramentas/telegram.mjs avisar [--simular] [--silencioso] (--arquivo=<txt> | <texto...>)
// Saída: 0 = feito · 1 = o Telegram recusou, ou a mensagem foi barrada pela guarda · 2 = não rodou (uso, chave, estado)
//
// A guarda, antes de todo envio: nenhuma mensagem sai com um valor do arquivo de chaves (nem do .env do canal), nem
// com e-mail que não seja o contato público do canal (canal.json › contato).
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";

const MOTOR = process.env.REGIE_MOTOR || "C:/projetos/regie-v1";
const { lerChave, interpretar, ARQUIVO_MAQUINA } = await import(pathToFileURL(path.join(MOTOR, "src/lib/chaves.mjs")).href);

const ESTADO = path.join("db", "telegram-estado.json");
const LIMITE = 4000; // o Telegram aceita 4.096 caracteres por mensagem
const VALIDADE_CONVITE_MS = 2 * 60 * 60 * 1000; // o código do convite vale 2 h

const args = process.argv.slice(2);
const cmd = args[0];
const flag = (n) => args.includes(`--${n}`);
const valor = (n) => { const a = args.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
const livres = args.slice(1).filter((a) => !a.startsWith("--"));
const agora = () => new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "short" });

function sair(codigo, msg) { if (msg) (codigo ? console.error : console.log)(msg); process.exit(codigo); }
if (!fs.existsSync("canal.json")) sair(2, "NÃO RODOU — rode da raiz do canal (a pasta com o canal.json).");

// ---------- a chave, sem nunca imprimir ----------
function token() {
  const t = lerChave("TELEGRAM_BOT_TOKEN");
  if (!t) sair(2, `NÃO RODOU — falta TELEGRAM_BOT_TOKEN no arquivo de chaves da máquina (${ARQUIVO_MAQUINA()}). O Lucas a põe pelo Bloco de Notas, nunca pelo chat.`);
  const v = String(t).trim();
  if (!/^\d+:[A-Za-z0-9_-]{20,}$/.test(v)) sair(2, "NÃO RODOU — TELEGRAM_BOT_TOKEN não tem a forma de chave do @BotFather (números, dois-pontos e letras, sem espaço).");
  return v;
}

// ---------- a guarda (a mesma do discord.mjs) ----------
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
  const t = lerChave("TELEGRAM_BOT_TOKEN");
  if (t) vals.push(String(t).trim());
  return vals.filter((v) => typeof v === "string" && v.length >= 8);
}
function guarda(texto) {
  if (valoresSecretos().some((v) => texto.includes(v))) sair(1, "BARRADO — a mensagem contém um valor do arquivo de chaves. Nada foi enviado.");
  const contato = String(JSON.parse(fs.readFileSync("canal.json", "utf8")).contato || "").toLowerCase();
  const emails = (texto.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || []).filter((e) => e.toLowerCase() !== contato);
  if (emails.length) sair(1, `BARRADO — a mensagem traz ${emails.length} e-mail(s) que não é o contato público do canal. Nada foi enviado.`);
}

// ---------- o Telegram ----------
const DICAS = {
  401: "a chave não vale: o Lucas pede outra ao @BotFather (/token) e troca a linha no arquivo de chaves.",
  404: "a chave não vale: o Lucas pede outra ao @BotFather (/token) e troca a linha no arquivo de chaves.",
  403: "o bot foi bloqueado no Telegram do Lucas: ele abre o bot e toca em Reiniciar; depois, `convite` e `preparar` de novo.",
  409: "outro programa está lendo este bot (ou há um webhook ligado): só esta ferramenta deve usá-lo.",
};
async function api(metodo, corpo = {}) {
  let r;
  try {
    r = await fetch(`https://api.telegram.org/bot${token()}/${metodo}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(corpo) });
  } catch (e) {
    const er = new Error(`sem conexão com o Telegram em ${metodo} (${e.cause?.code || e.name})`); er.status = 0; throw er;
  }
  let j = null; try { j = await r.json(); } catch { /* resposta sem JSON */ }
  if (!j?.ok) {
    const er = new Error(`o Telegram respondeu ${r.status}${j?.description ? ` (${j.description})` : ""} em ${metodo}`);
    er.status = r.status; throw er;
  }
  return j.result;
}

function lerEstado() { try { return JSON.parse(fs.readFileSync(ESTADO, "utf8")); } catch { return null; } }
function gravarEstado(e) { fs.mkdirSync(path.dirname(ESTADO), { recursive: true }); fs.writeFileSync(ESTADO, JSON.stringify(e, null, 2) + "\n"); }

// ---------- os comandos ----------
try {
  if (cmd === "conferir") {
    const eu = await api("getMe");
    const e = lerEstado();
    sair(0, `a chave funciona: o bot "${eu.first_name}" (@${eu.username})\n${e?.chat ? `o chat do Lucas está ligado (desde ${e.ligado_em})` : "o chat do Lucas ainda não foi ligado: `convite`, e depois `preparar`"}`);
  }
  if (cmd === "convite") {
    const eu = await api("getMe");
    const codigo = `ap${crypto.randomBytes(8).toString("hex")}`;
    gravarEstado({ ...(lerEstado() || {}), bot: eu.username, convite: codigo, convite_ts: Date.now() });
    sair(0, `o link do convite, de uso único e válido por 2 h (o Lucas toca nele e aperta Iniciar):\nhttps://t.me/${eu.username}?start=${codigo}`);
  }
  if (cmd === "preparar") {
    const e = lerEstado();
    if (!e?.convite) sair(2, "NÃO RODOU — não há convite aberto: `node ferramentas/telegram.mjs convite`.");
    if (Date.now() - (e.convite_ts || 0) > VALIDADE_CONVITE_MS) sair(2, "NÃO RODOU — o convite passou de 2 h: gere outro com `convite`.");
    const fila = await api("getUpdates", { timeout: 0, allowed_updates: ["message"] });
    const alvo = `/start ${e.convite}`;
    const certo = fila.filter((u) => u.message?.chat?.type === "private" && (u.message.text || "").trim() === alvo).pop();
    if (fila.length) await api("getUpdates", { offset: fila[fila.length - 1].update_id + 1, timeout: 0, allowed_updates: ["message"] }); // descarta a fila: nada daqui se lê de novo
    if (!certo) sair(1, `o código do convite ainda não chegou (${fila.length} mensagem(ns) na fila, nenhuma com ele, e a fila foi descartada). O Lucas toca no link e aperta Iniciar; depois, rode de novo.`);
    const chat = certo.message.chat.id;
    await api("sendMessage", { chat_id: chat, text: "Pronto: os avisos do Alpha Point chegam aqui. As respostas continuam no chat do Claude; o que se escreve aqui ninguém lê." });
    gravarEstado({ bot: e.bot, chat, ligado_em: agora() });
    sair(0, "ligado: o chat que mandou o código do convite, com a confirmação enviada a ele");
  }
  if (cmd === "avisar") {
    const bruto = valor("arquivo") ? fs.readFileSync(valor("arquivo"), "utf8") : livres.join(" ");
    if (!bruto.trim()) sair(2, "NÃO RODOU — nada a avisar: passe o texto, ou --arquivo=<txt>.");
    let t = bruto.replace(/\r\n/g, "\n").trim();
    if (t.length > LIMITE) t = `${t.slice(0, LIMITE - 1).trimEnd()}…`;
    guarda(t);
    if (flag("simular")) sair(0, `[simulação] ao Telegram do Lucas${flag("silencioso") ? " (sem som)" : ""}:\n${t}`);
    const e = lerEstado();
    if (!e?.chat) sair(2, "NÃO RODOU — o chat do Lucas ainda não foi ligado: `convite`, e depois `preparar`.");
    await api("sendMessage", { chat_id: e.chat, text: t, disable_notification: flag("silencioso") });
    sair(0, "enviado ao Telegram do Lucas");
  }
  sair(2, "uso: node ferramentas/telegram.mjs conferir | convite | preparar | avisar [--simular] [--silencioso] (--arquivo=<txt> | <texto...>)");
} catch (e) {
  sair(1, `RECUSADO — ${e.message}${DICAS[e.status] ? `\n  ${DICAS[e.status]}` : ""}`);
}
