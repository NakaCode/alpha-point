#!/usr/bin/env node
// whatsapp.mjs — o que espera o Lucas, no WhatsApp dele: o que depende dele, o erro que segura o vídeo e o limite
// atingido.
//
// Decisão do Lucas, 28/09/2026 (CLAUDE.md, "O WhatsApp"). A pergunta: "Como você quer receber os avisos no celular
// (erros, limites e o que espera por você)?" A resposta: "WhatsApp oficial (Recomendado)". A opção dizia: "Grátis,
// pelo número de teste da Meta, só para o seu número. Você cria a conta de desenvolvedor da Meta (uns 20 min, no PC)
// e eu monto a ferramenta quando você voltar. O Discord continua."
// Por isso: a API oficial da Meta (WhatsApp Cloud API), pelo número de teste, só para o número do Lucas. Esta
// ferramenta SÓ ENVIA. Não há webhook: nada do que se escreve no WhatsApp chega aqui, e nada de lá vale como resposta
// do Lucas. A resposta que libera algo continua sendo a do chat do Claude.
//
// As chaves ficam no arquivo de chaves da máquina (%USERPROFILE%\.regie\chaves.env), postas pelo Lucas no Bloco de
// Notas, nunca pelo chat, e nunca se imprimem:
//   WHATSAPP_TOKEN      o token permanente do usuário do sistema (configurações do negócio › Usuários do sistema)
//   WHATSAPP_NUMERO_ID  o "Phone number ID" do número de teste (API Setup)
//   WHATSAPP_CONTA_ID   o "WhatsApp Business Account ID" (API Setup)
//   WHATSAPP_PARA       o WhatsApp do Lucas, com 55 e o DDD (o que não é dígito se ignora)
// Sem dependência: o fetch do próprio Node (24+). Sem npm.
//
// Uso (cwd na raiz do canal):
//   node ferramentas/whatsapp.mjs conferir               as 4 chaves existem? o token abre o número? como estão os modelos
//   node ferramentas/whatsapp.mjs modelo [--criar]       mostra o modelo do aviso; com --criar, o manda à Meta (sem custo)
//   node ferramentas/whatsapp.mjs teste                  manda o "hello_world" da Meta: prova o caminho sem modelo nosso
//   node ferramentas/whatsapp.mjs avisar [--simular] (--arquivo=<txt> | <texto...>)
// Saída: 0 = feito · 1 = a Meta recusou, ou a mensagem foi barrada pela guarda · 2 = não rodou (uso, chave)
//
// Fora da janela de 24 h depois de uma mensagem do Lucas, a Meta só entrega modelo aprovado (template): por isso o
// aviso vai sempre dentro do modelo "aviso_projeto", e o texto entra como o parâmetro {{1}}. Parâmetro não aceita
// quebra de linha, tab nem muitos espaços seguidos: o texto se achata antes de sair.
//
// A guarda, antes de todo envio: nenhuma mensagem sai com um valor do arquivo de chaves (nem do .env do canal), nem
// com e-mail que não seja o contato público do canal (canal.json › contato). A saída nunca mostra o token nem o
// número do Lucas: sequência longa de dígitos numa resposta de erro da Meta sai como <número>.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const MOTOR = process.env.REGIE_MOTOR || "C:/projetos/regie-v1";
const { lerChave, interpretar, ARQUIVO_MAQUINA } = await import(pathToFileURL(path.join(MOTOR, "src/lib/chaves.mjs")).href);

const API = "https://graph.facebook.com/v25.0"; // a versão que o painel da Meta usa no exemplo de envio (28/09/2026)
const MODELO = {
  name: "aviso_projeto",
  language: "pt_BR",
  category: "UTILITY",
  components: [{
    type: "BODY",
    text: "Alpha Point: {{1}}. Responda no chat do Claude, não aqui.",
    example: { body_text: [["o Juneau espera a sua aprovação da lista de caça"]] },
  }],
};
const LIMITE = 700; // o texto do aviso; o corpo inteiro do modelo tem teto de 1.024 caracteres
const NOMES = ["WHATSAPP_TOKEN", "WHATSAPP_NUMERO_ID", "WHATSAPP_CONTA_ID", "WHATSAPP_PARA"];

const args = process.argv.slice(2);
const cmd = args[0];
const flag = (n) => args.includes(`--${n}`);
const valor = (n) => { const a = args.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
const livres = args.slice(1).filter((a) => !a.startsWith("--"));

function sair(codigo, msg) { if (msg) (codigo ? console.error : console.log)(msg); process.exit(codigo); }
if (!fs.existsSync("canal.json")) sair(2, "NÃO RODOU — rode da raiz do canal (a pasta com o canal.json).");

// ---------- as chaves, sem nunca imprimir ----------
function chave(nome) {
  const v = lerChave(nome);
  if (!v) sair(2, `NÃO RODOU — falta ${nome} no arquivo de chaves da máquina (${ARQUIVO_MAQUINA()}). O Lucas a põe pelo Bloco de Notas, nunca pelo chat.`);
  return String(v).trim();
}
const para = () => chave("WHATSAPP_PARA").replace(/\D/g, "");
function formatos() {
  const erros = [];
  if (!/^\d{12,15}$/.test(para())) erros.push("WHATSAPP_PARA não parece um WhatsApp com 55 e o DDD (12 a 15 dígitos)");
  for (const n of ["WHATSAPP_NUMERO_ID", "WHATSAPP_CONTA_ID"]) if (!/^\d{6,25}$/.test(chave(n))) erros.push(`${n} não parece um ID da Meta (só dígitos)`);
  if (/\s/.test(chave("WHATSAPP_TOKEN"))) erros.push("WHATSAPP_TOKEN tem espaço no meio");
  if (erros.length) sair(2, `NÃO RODOU — ${erros.join("; ")}.`);
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
  for (const n of NOMES) { const v = lerChave(n); if (v) vals.push(String(v).trim()); }
  const p = lerChave("WHATSAPP_PARA"); if (p) vals.push(String(p).replace(/\D/g, ""));
  return vals.filter((v) => typeof v === "string" && v.length >= 8);
}
function guarda(texto) {
  const soDigitos = texto.replace(/\D/g, "");
  if (valoresSecretos().some((v) => texto.includes(v) || (/^\d+$/.test(v) && soDigitos.includes(v)))) sair(1, "BARRADO — a mensagem contém um valor do arquivo de chaves. Nada foi enviado.");
  const contato = String(JSON.parse(fs.readFileSync("canal.json", "utf8")).contato || "").toLowerCase();
  const emails = (texto.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || []).filter((e) => e.toLowerCase() !== contato);
  if (emails.length) sair(1, `BARRADO — a mensagem traz ${emails.length} e-mail(s) que não é o contato público do canal. Nada foi enviado.`);
}

// ---------- a Meta ----------
const mascarar = (s) => String(s).replace(/\d{8,}/g, "<número>");
const DICAS = {
  190: "o token não vale mais (expirou ou foi revogado): o Lucas gera um novo no usuário do sistema e troca a linha no arquivo de chaves.",
  10: "o token não tem a permissão, ou o usuário do sistema não recebeu o app e a conta do WhatsApp.",
  200: "o token não tem a permissão, ou o usuário do sistema não recebeu o app e a conta do WhatsApp.",
  131030: "o número do Lucas não está na lista do número de teste (API Setup › To).",
  132001: "o modelo não existe nesse idioma ou ainda não foi aprovado: `conferir` mostra como está.",
  132018: "o texto tem algo que a Meta recusa num parâmetro (quebra de linha, tab ou muitos espaços).",
  131047: "passou a janela de 24 h: fora dela, só modelo aprovado.",
};
async function api(metodo, rota, corpo) {
  const r = await fetch(API + rota, {
    method: metodo,
    headers: { Authorization: `Bearer ${chave("WHATSAPP_TOKEN")}`, ...(corpo ? { "Content-Type": "application/json" } : {}) },
    body: corpo ? JSON.stringify(corpo) : undefined,
  });
  const bruto = await r.text();
  let j = null; try { j = bruto ? JSON.parse(bruto) : null; } catch { /* resposta sem JSON */ }
  if (!r.ok || j?.error) {
    const er = j?.error || {};
    const e = new Error(mascarar(`a Meta respondeu ${r.status}${er.code ? `, código ${er.code}${er.error_subcode ? `/${er.error_subcode}` : ""}` : ""}${er.message ? ` (${er.message})` : ""}${er.error_data?.details ? `: ${er.error_data.details}` : ""}`));
    e.codigo = er.code; throw e;
  }
  return j;
}
async function enviar(template) {
  const r = await api("POST", `/${chave("WHATSAPP_NUMERO_ID")}/messages`, { messaging_product: "whatsapp", recipient_type: "individual", to: para(), type: "template", template });
  if (!r?.messages?.[0]?.id) throw new Error("a Meta não devolveu o id da mensagem");
  return r.messages[0];
}

function achatar(texto) { // parâmetro de modelo não aceita quebra de linha, tab nem mais de 4 espaços seguidos
  let t = String(texto).replace(/\r?\n+/g, " · ").replace(/\t/g, " ").replace(/ {2,}/g, " ").trim();
  t = t.replace(/[.\s]+$/, ""); // o ponto final é do modelo
  if (t.length > LIMITE) t = `${t.slice(0, LIMITE - 1).trimEnd()}…`;
  return t;
}

// ---------- os comandos ----------
try {
  if (cmd === "conferir") {
    const faltam = NOMES.filter((n) => !lerChave(n));
    if (faltam.length) sair(2, `NÃO RODOU — faltam no arquivo de chaves (${ARQUIVO_MAQUINA()}): ${faltam.join(", ")}.`);
    formatos();
    const num = await api("GET", `/${chave("WHATSAPP_NUMERO_ID")}?fields=verified_name,quality_rating`);
    console.log(`o token abre o número de teste: "${num.verified_name || "?"}"${num.quality_rating ? `, qualidade ${num.quality_rating}` : ""}`);
    const mods = (await api("GET", `/${chave("WHATSAPP_CONTA_ID")}/message_templates?fields=name,status,language,category&limit=50`)).data || [];
    console.log(`modelos da conta: ${mods.length ? mods.map((m) => `${m.name} (${m.language}, ${m.category}): ${m.status}`).join(" · ") : "nenhum"}`);
    const meu = mods.find((m) => m.name === MODELO.name && m.language === MODELO.language);
    sair(0, meu ? `o modelo do aviso: ${meu.status}` : "o modelo do aviso ainda não existe: `node ferramentas/whatsapp.mjs modelo --criar`.");
  }
  if (cmd === "modelo") {
    const c = MODELO.components[0];
    console.log(`o modelo "${MODELO.name}" (${MODELO.language}, ${MODELO.category}):\n  ${c.text}\n  exemplo do {{1}}: ${c.example.body_text[0][0]}`);
    if (!flag("criar")) sair(0, "(só mostrado; com --criar, vai à Meta para aprovação, sem custo)");
    formatos();
    const r = await api("POST", `/${chave("WHATSAPP_CONTA_ID")}/message_templates`, MODELO);
    sair(0, `mandado à Meta: ${r.status || "?"}${r.category ? `, categoria ${r.category}` : ""}. A aprovação leva de minutos a 24 h: \`conferir\` mostra como está.`);
  }
  if (cmd === "teste") {
    formatos();
    await enviar({ name: "hello_world", language: { code: "en_US" } });
    sair(0, "enviado: o hello_world da Meta, ao WhatsApp do Lucas");
  }
  if (cmd === "avisar") {
    const bruto = valor("arquivo") ? fs.readFileSync(valor("arquivo"), "utf8") : livres.join(" ");
    if (!bruto.trim()) sair(2, "NÃO RODOU — nada a avisar: passe o texto, ou --arquivo=<txt>.");
    const t = achatar(bruto);
    guarda(t);
    if (flag("simular")) sair(0, `[simulação] ao WhatsApp do Lucas:\n${MODELO.components[0].text.replace("{{1}}", t)}`);
    formatos();
    await enviar({ name: MODELO.name, language: { code: MODELO.language }, components: [{ type: "body", parameters: [{ type: "text", text: t }] }] });
    sair(0, "enviado ao WhatsApp do Lucas");
  }
  sair(2, "uso: node ferramentas/whatsapp.mjs conferir | modelo [--criar] | teste | avisar [--simular] (--arquivo=<txt> | <texto...>)");
} catch (e) {
  sair(1, `RECUSADO — ${mascarar(e.message)}${DICAS[e.codigo] ? `\n  ${DICAS[e.codigo]}` : ""}`);
}
