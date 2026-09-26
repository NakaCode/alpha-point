// SEGREDOS — acha chave, token e senha antes que entrem no git.
//
// Escrito para a Régie (ADR 0009 §C): é a "varredura de segredos" do check `canal`, e é o que o
// Claude roda antes de cada commit do git autônomo. Um segredo que chega ao GitHub está vazado
// mesmo que o próximo commit o apague — o histórico guarda. O conserto é trocar a chave, não
// apagar a linha.
//
// Uso:
//   node scripts/segredos.mjs                 a árvore inteira (os arquivos que o git versiona)
//   node scripts/segredos.mjs --staged        só o que está no "git add" (antes do commit)
//   node scripts/segredos.mjs --diff <base>   só as linhas que este ramo ACRESCENTA desde <base>
//                                             (o check do PR: --diff origin/main)
//   node scripts/segredos.mjs --json          a mesma coisa, em JSON (para máquina)
//
// Saída: 0 limpo · 1 achou · 2 não deu para rodar (não é repositório, base inexistente...).
// O segredo NUNCA é impresso: a saída mostra o arquivo, a linha, o tipo e uma máscara
// (os 4 primeiros caracteres e o tamanho). Imprimir a chave num log de CI é vazá-la de novo.
//
// Falso positivo documentado: acrescente o marcador `segredos:ignorar` NA MESMA LINHA, com o
// motivo. Não há lista de exceções escondida em outro arquivo — a exceção fica à vista no diff.
//
// Sem dependência: só o Node e o git. O git roda por execFile, com os argumentos em array.

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, realpathSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// ── os padrões ────────────────────────────────────────────────────────────────────────────────
// Alta precisão primeiro: formatos com prefixo fixo, que quase nunca aparecem por acaso.
// Os padrões são montados por partes (junta()) para ESTE arquivo não se acusar ao ser varrido.
const junta = (...p) => new RegExp(p.join(""), "g");

export const PADROES = Object.freeze([
  { tipo: "chave privada (PEM)", re: junta("-----BEGIN ", "(?:RSA |EC |DSA |OPENSSH |PGP |ENCRYPTED )?", "PRIVATE KEY", "-----") },
  { tipo: "token do GitHub", re: junta("\\bgh[pousr]_", "[A-Za-z0-9]{36,}\\b") },
  { tipo: "token do GitHub (fine-grained)", re: junta("\\bgithub_pat_", "[A-Za-z0-9_]{50,}") },
  { tipo: "chave/token da Anthropic", re: junta("\\bsk-ant-", "[A-Za-z0-9_-]{20,}") },
  { tipo: "chave da OpenAI", re: junta("\\bsk-(?:proj|svcacct|admin)-", "[A-Za-z0-9_-]{20,}") },
  { tipo: "chave do Google (API)", re: junta("\\bAIza", "[0-9A-Za-z_-]{35}\\b") },
  { tipo: "segredo de cliente OAuth do Google", re: junta("\\bGOCSPX-", "[A-Za-z0-9_-]{24,}") },
  { tipo: "chave de acesso da AWS", re: junta("\\b(?:AKIA|ASIA)", "[0-9A-Z]{16}\\b") },
  { tipo: "token do Slack", re: junta("\\bxox[baprs]-", "[A-Za-z0-9-]{10,}") },
  { tipo: "chave do Stripe", re: junta("\\b[rs]k_live_", "[A-Za-z0-9]{20,}") },
  { tipo: "chave da ElevenLabs", re: junta("\\bsk_", "[a-f0-9]{48}\\b") },
  { tipo: "chave da fal.ai", re: junta("\\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", ":[0-9a-f]{32}\\b") },
  { tipo: "JWT (token de sessão)", re: junta("\\beyJ[A-Za-z0-9_-]{10,}\\.", "eyJ[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,}") },
  { tipo: "conta de serviço do Google (JSON)", re: junta("\"type\"\\s*:\\s*\"service", "_account\"") },
  { tipo: "senha dentro de URL", re: junta("\\b[a-z][a-z0-9+.-]*://[^\\s/:@\"'<>]+:", "[^\\s/:@\"'<>$]{6,}@[A-Za-z0-9.-]+") },
]);

// Atribuição genérica: `api_key = "..."`, `"senha": "..."`, `TOKEN=...`. É a mais barulhenta, então
// o VALOR precisa parecer segredo: 12+ caracteres, sem espaço, com letra E número, e com entropia.
const NOMES = "(?:api[_-]?key|apikey|secret|segredo|token|senha|password|passwd|pwd|client[_-]?secret|access[_-]?key|private[_-]?key|auth)";
const ATRIBUICAO = new RegExp(`(?<nome>[A-Za-z0-9_.-]*${NOMES}[A-Za-z0-9_.-]*)["']?\\s*[:=]\\s*["']?(?<valor>[^\\s"'\`,;()[\\]{}]{12,})`, "gi");

// O nome tem de TER a palavra, não só conter as letras: "tokenizer_family" não é token, "author" não
// é auth. Quebra em pedaços por _ . - e por troca de caixa (authToken → auth, token).
const PALAVRAS = new Set(["token", "secret", "segredo", "senha", "password", "passwd", "pwd", "apikey", "auth"]);
const PARES = new Set(["api key", "client secret", "access key", "private key"]);
export function nomeDeSegredo(nome) {
  const partes = nome.split(/[_.\-]+|(?<=[a-z0-9])(?=[A-Z])/).map((x) => x.toLowerCase()).filter(Boolean);
  return partes.some((p, i) => PALAVRAS.has(p) || PARES.has(`${p} ${partes[i + 1]}`));
}
const MARCADOR_IGNORAR = "segredos:ignorar";

// Valor que é claramente modelo, variável ou exemplo não é segredo.
const PARECE_MODELO = /^(?:\$|%|<|\{|process\.env|env\.|os\.environ|import\.meta)|x{4,}|\*{3,}|\.{3}|changeme|exemplo|example|placeholder|seu[_-]?|sua[_-]?|your[_-]?|dummy|fake|falso|teste?[_-]|redacted|null|undefined|true|false/i;

/** Entropia de Shannon por caractere — segredo gerado por máquina fica acima de ~3,5. */
export function entropia(s) {
  const n = {};
  for (const c of s) n[c] = (n[c] || 0) + 1;
  let h = 0;
  for (const k in n) { const p = n[k] / s.length; h -= p * Math.log2(p); }
  return h;
}

// Arquivos que são segredo PELO NOME, qualquer que seja o conteúdo.
const NOMES_PROIBIDOS = [
  [/(^|\/)\.env(\.[^/]*)?$/i, "arquivo .env"],
  [/\.(pem|key|pfx|p12|jks|keystore)$/i, "arquivo de chave/certificado"],
  [/(^|\/)id_(rsa|ed25519|ecdsa|dsa)$/i, "chave SSH"],
  [/(^|\/)\.credentials\.json$/i, "credencial do Claude Code"],
  [/(^|\/)[^/]*_credentials\.json$/i, "arquivo de credenciais"],
  [/(^|\/)service-account[^/]*\.json$/i, "chave de conta de serviço"],
  [/(^|\/)drive-sa\.json$/i, "chave da conta de serviço do Drive"],
  [/(^|\/)chaves\.env$/i, "chaves da Régie"],
  [/(^|\/)\.netrc$/i, "credencial .netrc"],
];
// O modelo das chaves (só NOMES) é permitido: é documentação, não segredo.
const NOME_PERMITIDO = /(\.env\.(modelo|exemplo|example|sample|template))$|chaves\.env\.modelo$/i;

/** Máscara: nunca o segredo inteiro. */
const mascara = (s) => `${s.slice(0, 4)}… (${s.length} caracteres)`;

/**
 * Varre UMA linha. Devolve os achados, sem o valor.
 * @returns {{tipo: string, mascara: string}[]}
 */
export function varrerLinha(linha) {
  if (linha.includes(MARCADOR_IGNORAR)) return [];
  const achados = [];
  const vistos = [];
  for (const { tipo, re } of PADROES) {
    re.lastIndex = 0;
    for (const m of linha.matchAll(re)) { achados.push({ tipo, mascara: mascara(m[0]) }); vistos.push([m.index, m.index + m[0].length]); }
  }
  ATRIBUICAO.lastIndex = 0;
  for (const m of linha.matchAll(ATRIBUICAO)) {
    const v = m.groups.valor;
    const ini = m.index + m[0].lastIndexOf(v);
    if (vistos.some(([a, b]) => ini < b && ini + v.length > a)) continue;   // já acusado por um padrão forte
    if (!nomeDeSegredo(m.groups.nome)) continue;
    if (PARECE_MODELO.test(v)) continue;
    if (/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)+$/.test(v)) continue;                            // expressão de código: obj.campo
    if (!/[A-Za-z]/.test(v) || !/[0-9]/.test(v)) continue;
    if (/^[\w.-]+\.(mjs|js|json|md|html|css|txt|png|jpg|mp4|wav|xml|ya?ml)$/i.test(v)) continue;   // nome de arquivo
    if (/^(https?:)?\/\//i.test(v) || /^[A-Za-z]:[\\/]/.test(v) || v.startsWith("/")) continue;      // URL ou caminho
    if (entropia(v) < 3.5) continue;
    achados.push({ tipo: `valor de "${m.groups.nome}"`, mascara: mascara(v) });
  }
  return achados;
}

/** Texto de um arquivo: UTF-8 (com ou sem BOM) ou UTF-16 com BOM. null = binário. */
export function textoDe(buf) {
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) return buf.subarray(2).toString("utf16le");
  if (buf.length >= 2 && buf[0] === 0xfe && buf[1] === 0xff) { const b = Buffer.from(buf.subarray(2)); b.swap16(); return b.toString("utf16le"); }
  if (buf.subarray(0, 8000).includes(0)) return null;
  return buf.toString("utf8").replace(/^\uFEFF/, "");
}

/** Varre um texto inteiro: [{linha, tipo, mascara}]. CRLF e LF. */
export function varrerTexto(texto) {
  const out = [];
  texto.split(/\r?\n/).forEach((l, i) => { for (const a of varrerLinha(l)) out.push({ linha: i + 1, ...a }); });
  return out;
}

/** O nome do arquivo já é o problema? */
export function nomeProibido(caminho) {
  const p = caminho.split("\\").join("/");
  if (NOME_PERMITIDO.test(p)) return null;
  for (const [re, tipo] of NOMES_PROIBIDOS) if (re.test(p)) return tipo;
  return null;
}

// ── git ───────────────────────────────────────────────────────────────────────────────────────
function git(args, cwd) {
  // core.quotePath=false: caminho com acento sai como está (sem "\303\247"), o que importa no Windows.
  return execFileSync("git", ["-c", "core.quotePath=false", ...args], {
    cwd, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"], windowsHide: true, maxBuffer: 512 * 1024 * 1024,
  });
}
const lista0 = (buf) => buf.toString("utf8").split("\0").filter(Boolean);

const LIMITE_BYTES = 5 * 1024 * 1024;   // arquivo maior que isto é mídia ou pacote, não configuração

/** Varre arquivos inteiros do disco (a árvore, ou os que o diff não mostra como texto). */
function varrerArquivos(raiz, caminhos) {
  const achados = [];
  for (const rel of caminhos) {
    const tipoNome = nomeProibido(rel);
    if (tipoNome) achados.push({ arquivo: rel, linha: 0, tipo: tipoNome, mascara: "(o arquivo inteiro)" });
    const abs = join(raiz, rel);
    let st;
    try { st = statSync(abs); } catch { continue; }
    if (!st.isFile() || st.size > LIMITE_BYTES) continue;
    const texto = textoDe(readFileSync(abs));
    if (texto == null) continue;
    for (const a of varrerTexto(texto)) achados.push({ arquivo: rel, ...a });
  }
  return achados;
}

/**
 * Varre as linhas ACRESCENTADAS por um diff unificado (--unified=0).
 * Arquivo que o git mostra como binário mas é UTF-16 (o PowerShell 5 grava assim) é lido inteiro.
 */
export function varrerDiff(textoDiff, { raiz = null } = {}) {
  const achados = [];
  let arquivo = null, linhaNova = 0;
  const binarios = [];
  for (const l of textoDiff.split(/\r?\n/)) {
    if (l.startsWith("diff --git ")) { arquivo = null; continue; }
    if (l.startsWith("+++ ")) {
      const alvo = l.slice(4).replace(/^"(.*)"$/, "$1");
      arquivo = alvo === "/dev/null" ? null : alvo.replace(/^b\//, "");
      continue;
    }
    const bin = /^Binary files (?:.+?) and (?:"?b\/(.+?)"?) differ$/.exec(l);
    if (bin) { binarios.push(bin[1]); continue; }
    const h = /^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/.exec(l);
    if (h) { linhaNova = Number(h[1]); continue; }
    if (arquivo && l.startsWith("+") && !l.startsWith("+++")) {
      for (const a of varrerLinha(l.slice(1))) achados.push({ arquivo, linha: linhaNova, ...a });
      linhaNova++;
    }
  }
  if (raiz) {
    const utf16 = binarios.filter((b) => {
      try { const x = readFileSync(join(raiz, b)); return x.length >= 2 && ((x[0] === 0xff && x[1] === 0xfe) || (x[0] === 0xfe && x[1] === 0xff)); }
      catch { return false; }
    });
    achados.push(...varrerArquivos(raiz, utf16).filter((a) => a.linha > 0));
  }
  return achados;
}

/**
 * @param {{modo: "arvore"|"staged"|"diff", base?: string, cwd?: string}} op
 * @returns {{achados: {arquivo: string, linha: number, tipo: string, mascara: string}[], varridos: number}}
 */
export function varrer({ modo = "arvore", base = null, cwd = process.cwd() } = {}) {
  const raiz = git(["rev-parse", "--show-toplevel"], cwd).toString("utf8").trim();
  if (modo === "arvore") {
    const arquivos = lista0(git(["ls-files", "-z", "--cached", "--others", "--exclude-standard"], raiz));
    return { achados: varrerArquivos(raiz, arquivos), varridos: arquivos.length };
  }
  const intervalo = modo === "staged" ? ["--cached"] : [`${base}...HEAD`];
  if (modo === "diff") git(["rev-parse", "--verify", "--quiet", `${base}^{commit}`], raiz);   // base inexistente = erro claro
  const nomes = lista0(git(["diff", "--name-only", "-z", "--diff-filter=ACMR", ...intervalo], raiz));
  const achados = nomes.map((n) => [n, nomeProibido(n)]).filter(([, t]) => t)
    .map(([n, t]) => ({ arquivo: n, linha: 0, tipo: t, mascara: "(o arquivo inteiro)" }));
  const diff = git(["diff", "--unified=0", "--no-color", "--no-ext-diff", "--diff-filter=ACMR", ...intervalo], raiz).toString("utf8");
  achados.push(...varrerDiff(diff, { raiz }));
  return { achados, varridos: nomes.length };
}

function main(argv) {
  const json = argv.includes("--json");
  const i = argv.indexOf("--diff");
  const modo = i >= 0 ? "diff" : argv.includes("--staged") ? "staged" : "arvore";
  const base = i >= 0 ? argv[i + 1] : null;
  if (modo === "diff" && (!base || base.startsWith("--"))) {
    console.error("uso: node scripts/segredos.mjs [--staged | --diff <base>] [--json]");
    return 2;
  }
  let r;
  try { r = varrer({ modo, base }); }
  catch (e) {
    const msg = String(e.stderr || e.message || e).trim().split(/\r?\n/)[0];
    console.error(`✗ não consegui varrer: ${msg}${modo === "diff" ? `\n  (a base "${base}" existe? no CI, o checkout precisa de fetch-depth: 0)` : ""}`);
    return 2;
  }
  if (json) { console.log(JSON.stringify({ modo, base, ...r }, null, 2)); return r.achados.length ? 1 : 0; }
  const onde = modo === "arvore" ? "na árvore" : modo === "staged" ? "no que está para commitar" : `no que este ramo acrescenta desde ${base}`;
  if (!r.achados.length) { console.log(`✓ nenhum segredo ${onde} (${r.varridos} arquivo(s))`); return 0; }
  console.log(`✗ ${r.achados.length} possível(is) segredo(s) ${onde}:\n`);
  for (const a of r.achados) console.log(`  ${a.arquivo}${a.linha ? `:${a.linha}` : ""}  ${a.tipo}  ${a.mascara}`);
  console.log(`
  O que fazer:
  - Se for segredo de verdade: NÃO commite. Tire do arquivo (chave mora em %USERPROFILE%\\.regie\\chaves.env,
    fora do repositório). Se já foi para o GitHub, a chave está vazada: troque-a no provedor.
  - Se for falso positivo (exemplo, texto): acrescente "segredos:ignorar" na mesma linha, com o motivo.`);
  return 1;
}

const real = (p) => { try { return realpathSync(p); } catch { return resolve(p); } };
const mesmo = (a, b) => (process.platform === "win32" ? a.toLowerCase() === b.toLowerCase() : a === b);
if (process.argv[1] && existsSync(process.argv[1]) && mesmo(real(resolve(process.argv[1])), real(fileURLToPath(import.meta.url)))) {
  process.exitCode = main(process.argv.slice(2));
}
