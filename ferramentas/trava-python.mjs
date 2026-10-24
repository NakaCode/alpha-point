#!/usr/bin/env node
// trava-python.mjs — o verificador (hook PreToolUse do .claude/settings.json) que recusa, antes de rodar, o comando do Bash, do PowerShell
// ou do Monitor em que o Python lê o script pela entrada padrão: `python -`, `python - <<'EOF'`, `python <<'EOF'`, `cat x.py | python`,
// `python <<< "…"`, `python < x.py`, `python -i`, `@'…'@ | python -`. No Git Bash do Windows esse Python fica preso, sem saída, e segura a
// cadeia de comandos (APRENDIZADOS.md, item 89; em 24/10/2026 até um heredoc VAZIO prendeu). O Lucas autorizou a trava em 24/10/2026:
// "Instalar (Recomendado)".
//
// Entrada: o JSON do hook na entrada padrão ({tool_name, tool_input: {command}, cwd}). Saída:
//   0 = deixa rodar (inclusive quando o próprio verificador falha: um defeito dele nunca segura o Bash da casa);
//   2 = recusa, com o motivo e o jeito certo na saída de erro, que o Claude Code entrega ao agente.
// Passa: `python -X utf8 -B arquivo.py`, `python -m mod`, `python -c "…"`, `python --version`, `command -v python`, `xargs python`.
// Olha também dentro de `bash -c`, `sh -c`, `find -exec sh -c`, `su -c`, `cmd /c` (e `//c`), `eval`, `$( … )`, crases (inclusive entre
// aspas duplas), `powershell`/`pwsh -Command`, `iex`, `Start-Process -RedirectStandardInput`; no texto que vai a um shell (`bash <<EOF`,
// `cat <<EOF | bash`, `echo '…' | bash`); no script .sh que o comando grava (`cat > x.sh <<EOF`, `tee x.sh`); e no .sh que o comando roda
// (`bash x.sh`, `./x.sh`, `source x.sh`), lido do disco. O corpo do heredoc que vai a outro programa, o texto entre aspas e o comentário
// não contam: `grep "python -"` e o `git commit -m "$(cat <<'EOF' …)"` com "python -" na mensagem passam.
// Limites: o programa só se reconhece pelo nome (ou por variável com "py" no nome); um .sh sem a extensão, ou que não está no disco na
// hora, não se lê; um `$( … )` que monta o texto de um `bash -c` não se lê.
// A prova: node ferramentas/trava-python-provar.mjs.
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { readFileSync, statSync } from "node:fs";

const MSG = (como) =>
  `RECUSADO pela trava do canal (ferramentas/trava-python.mjs): ${como}. No Git Bash do Windows esse Python fica preso esperando a ` +
  `entrada e segura o que vem depois (APRENDIZADOS.md, item 89). Grave o script num arquivo (Write, em out/<proj>/_tmp/ ou no ` +
  `scratchpad) e rode \`python -X utf8 -B <arquivo>.py\`. Se um Python já ficou preso, encerre-o pelo PID, nunca por nome.`;

const PROF_MAX = 40; // aninhamento máximo de $( ), crases e bash -c que se analisa; mais fundo, o texto não se lê
const PARADA = " \t\r\n;|&<>()";

// ─── o Bash: palavras e comandos simples, com aspas, heredoc, here-string, case, função e array ─────────────────────────────────────
// Cada comando: {palavras, heredocs (delimitadores), corpos (os textos dos heredocs), herestring, entradaArquivo, saidas, pipeDe}.
function novo() { return { palavras: [], heredocs: [], corpos: [], herestring: false, entradaArquivo: false, saidas: [], pipeDe: null }; }

function lerDelim(src, i) { // o delimitador do heredoc, a partir do que vem depois de "<<"
  const n = src.length;
  let tira = false;
  if (src[i] === "-") { tira = true; i++; }
  while (src[i] === " " || src[i] === "\t") i++;
  let delim = "";
  while (i < n && !PARADA.includes(src[i])) {
    if (src[i] === "'" || src[i] === '"') { const q = src[i], f = src.indexOf(q, i + 1); delim += src.slice(i + 1, f < 0 ? n : f); i = f < 0 ? n : f + 1; continue; }
    if (src[i] === "\\") { i++; continue; }
    delim += src[i]; i++;
  }
  return { delim, tira, i };
}

function pulaCorpos(src, i, pendentes) { // a partir do começo da linha seguinte; devolve onde o código recomeça
  const n = src.length;
  while (pendentes.length) {
    const { delim, tira, cmd } = pendentes.shift();
    const ini = i;
    let fimCorpo = n;
    while (i < n) {
      let fim = src.indexOf("\n", i);
      if (fim < 0) fim = n;
      let linha = src.slice(i, fim).replace(/\r$/, "");
      if (tira) linha = linha.replace(/^\t+/, "");
      if (linha === delim) { fimCorpo = i; i = fim + 1; break; }
      i = fim + 1;
    }
    if (cmd) cmd.corpos.push(src.slice(ini, Math.min(fimCorpo, n)));
  }
  return i;
}

function fechaCrase(src, i) { // o índice da crase que fecha
  for (let k = i; k < src.length; k++) { if (src[k] === "\\") { k++; continue; } if (src[k] === "`") return k; }
  return src.length;
}

// Acha o ")" que fecha, a partir de i (já depois do "("), respeitando aspas, crases, comentários, corpos de heredoc e parênteses
// aninhados. modo: "bash"; "arit" ($(( )) e (( )): sem heredoc, comentário nem aspas simples); "ps" (o PowerShell: a crase escapa, a barra
// é texto, não há heredoc). Devolve [interno, depois].
function parenteses(src, i, modo = "bash") {
  const n = src.length;
  const arit = modo === "arit", ps = modo === "ps";
  let prof = 1, j = i;
  const pend = [];
  while (j < n) {
    const c = src[j];
    if (c === "\n" && pend.length) { j = pulaCorpos(src, j + 1, pend); continue; }
    if (c === "\\") { j += ps ? 1 : 2; continue; }
    if (c === "'" && !arit) { const f = src.indexOf("'", j + 1); j = f < 0 ? n : f + 1; continue; }
    if (c === '"') {
      let k = j + 1;
      while (k < n && src[k] !== '"') {
        if (src[k] === (ps ? "`" : "\\")) { k += 2; continue; }
        if (src[k] === "$" && src[k + 1] === "(") { k = parenteses(src, k + 2, ps ? "ps" : src[k + 2] === "(" ? "arit" : "bash")[1]; continue; }
        if (!ps && src[k] === "`") { k = fechaCrase(src, k + 1) + 1; continue; }
        k++;
      }
      j = k + 1; continue;
    }
    if (c === "`") { j = ps ? j + 2 : fechaCrase(src, j + 1) + 1; continue; }
    if (modo === "bash" && c === "<" && src[j + 1] === "<") {
      if (src[j + 2] === "<") { j += 3; continue; }
      const r = lerDelim(src, j + 2);
      j = r.i;
      if (r.delim) pend.push({ delim: r.delim, tira: r.tira, cmd: null });
      continue;
    }
    if (!arit && c === "#" && (j === i || /[\s;&|(]/.test(src[j - 1]))) { const f = src.indexOf("\n", j); j = f < 0 ? n : f; continue; }
    if (c === "(") prof++;
    if (c === ")" && --prof === 0) return [src.slice(i, j), j + 1];
    j++;
  }
  return [src.slice(i), n];
}

export function comandosBash(src, prof = 0) {
  const cmds = [];
  if (prof > PROF_MAX) return cmds;
  const n = src.length;
  let atual = novo(), palavra = null;
  const pendentes = [];
  let caseNivel = 0, padrao = false; // dentro de "case … in", entre o começo do padrão e o ")"
  const sub = (texto) => { for (const s of comandosBash(texto, prof + 1)) cmds.push(s); };
  const fechaPalavra = () => {
    if (palavra === null) return;
    const w = palavra;
    palavra = null;
    if (padrao) { if (w === "esac") { padrao = false; caseNivel = Math.max(0, caseNivel - 1); } return; }
    if (w === "esac" && atual.palavras.length === 0 && caseNivel > 0) { caseNivel--; return; }
    atual.palavras.push(w);
    const p = atual.palavras;
    if (p.length === 3 && p[0] === "case" && p[2] === "in") { caseNivel++; padrao = true; atual = novo(); }
  };
  const fechaCmd = () => {
    fechaPalavra();
    let feito = null;
    if (!padrao && (atual.palavras.length || atual.heredocs.length || atual.herestring)) { cmds.push(atual); feito = atual; }
    atual = novo();
    return feito;
  };
  const pulaAlvo = () => { // o alvo de um redirecionamento não é palavra do comando; devolve-o
    while (src[i] === " " || src[i] === "\t") i++;
    let alvo = "";
    while (i < n && !PARADA.includes(src[i])) {
      if (src[i] === "'" || src[i] === '"') { const q = src[i], f = src.indexOf(q, i + 1); alvo += src.slice(i + 1, f < 0 ? n : f); i = f < 0 ? n : f + 1; continue; }
      alvo += src[i]; i++;
    }
    return alvo;
  };
  let i = 0;
  while (i < n) {
    const c = src[i];
    if (c === "\n") {
      fechaCmd();
      i++;
      if (pendentes.length) i = pulaCorpos(src, i, pendentes);
      continue;
    }
    if (c === "\\") {
      if (src[i + 1] === "\n") { i += 2; continue; }
      if (src[i + 1] === "\r" && src[i + 2] === "\n") { i += 3; continue; }
      if (i + 1 < n) palavra = (palavra ?? "") + src[i + 1];
      i += 2; continue;
    }
    if (c === "'") { const f = src.indexOf("'", i + 1); palavra = (palavra ?? "") + src.slice(i + 1, f < 0 ? n : f); i = f < 0 ? n : f + 1; continue; }
    if (c === "$" && src[i + 1] === "'") { // $'…'
      let j = i + 2, s = "";
      while (j < n && src[j] !== "'") { if (src[j] === "\\" && j + 1 < n) { s += src[j] + src[j + 1]; j += 2; continue; } s += src[j]; j++; }
      palavra = (palavra ?? "") + s; i = j + 1; continue;
    }
    if (c === '"') {
      let j = i + 1, s = "";
      while (j < n && src[j] !== '"') {
        if (src[j] === "\\" && j + 1 < n) { // entre aspas duplas, a barra só escapa $ ` " \ e a quebra de linha
          const d = src[j + 1];
          if ('$`"\\'.includes(d)) s += d; else if (d !== "\n") s += "\\" + d;
          j += 2; continue;
        }
        if (src[j] === "$" && src[j + 1] === "(") {
          if (src[j + 2] === "(") { j = parenteses(src, j + 2, "arit")[1]; s += "$((…))"; continue; }
          const [interno, k] = parenteses(src, j + 2);
          sub(interno); s += "$(…)"; j = k; continue;
        }
        if (src[j] === "`") { const f = fechaCrase(src, j + 1); sub(src.slice(j + 1, f)); s += "`…`"; j = f + 1; continue; }
        s += src[j]; j++;
      }
      palavra = (palavra ?? "") + s; i = j + 1; continue;
    }
    if (c === "$" && src[i + 1] === "(") {
      if (src[i + 2] === "(") { i = parenteses(src, i + 2, "arit")[1]; palavra = (palavra ?? "") + "$((…))"; continue; }
      const [interno, k] = parenteses(src, i + 2);
      sub(interno); palavra = (palavra ?? "") + "$(…)"; i = k; continue;
    }
    if (c === "$" && src[i + 1] === "{") { // ${…}
      let k = i + 2, nivel = 1;
      while (k < n && nivel) { if (src[k] === "{") nivel++; else if (src[k] === "}") nivel--; k++; }
      palavra = (palavra ?? "") + src.slice(i, k); i = k; continue;
    }
    if (c === "`") { const f = fechaCrase(src, i + 1); sub(src.slice(i + 1, f)); palavra = (palavra ?? "") + "`…`"; i = f + 1; continue; }
    if (c === "#" && palavra === null) { const f = src.indexOf("\n", i); i = f < 0 ? n : f; continue; }
    if (c === " " || c === "\t" || c === "\r") { fechaPalavra(); i++; continue; }
    if (c === "{" && src[i + 1] === "}") { palavra = (palavra ?? "") + "{}"; i += 2; continue; } // find -exec … {}, xargs -I {}
    if (c === "(") {
      let j = i + 1;
      while (src[j] === " " || src[j] === "\t") j++;
      const ate = [...atual.palavras, ...(palavra !== null ? [palavra] : [])];
      if (src[j] === ")" && !padrao && (ate.length === 1 || (ate.length === 2 && ate[0] === "function"))) { // nome() { … }: definição
        palavra = null; atual = novo(); i = j + 1; continue;
      }
      if (palavra !== null && palavra.endsWith("=")) { i = parenteses(src, i + 1)[1]; palavra += "(…)"; continue; } // arr=( … )
      if (src[i + 1] === "(" && palavra === null) { i = parenteses(src, i + 1, "arit")[1]; continue; } // (( aritmética ))
      if (padrao) { i++; continue; }
      fechaCmd(); i++; continue;
    }
    if (c === ";" || c === "|" || c === "&" || c === ")" || ((c === "{" || c === "}") && palavra === null)) {
      if (c === "&" && src[i + 1] === ">") { fechaPalavra(); i += 2; if (src[i] === ">") i++; pulaAlvo(); continue; } // &> arquivo
      if (padrao && c === ")") { fechaPalavra(); padrao = false; atual = novo(); i++; continue; }
      if (padrao && c === "|") { fechaPalavra(); i++; continue; }
      const feito = fechaCmd();
      if (c === ";" && (src[i + 1] === ";" || src[i + 1] === "&")) { i += 2; if (src[i] === "&") i++; if (caseNivel > 0) padrao = true; continue; }
      if (c === "|" && src[i + 1] !== "|") { i += src[i + 1] === "&" ? 2 : 1; atual.pipeDe = feito; continue; }
      i += (c === "|" || c === "&") && src[i + 1] === c ? 2 : 1;
      continue;
    }
    if (c === "<") {
      fechaPalavra();
      if (src.startsWith("<<<", i)) { atual.herestring = true; i += 3; pulaAlvo(); continue; }
      if (src[i + 1] === "<") {
        const r = lerDelim(src, i + 2);
        i = r.i;
        if (r.delim) { pendentes.push({ delim: r.delim, tira: r.tira, cmd: atual }); atual.heredocs.push(r.delim); }
        continue;
      }
      if (src[i + 1] === "(") { const [interno, k] = parenteses(src, i + 2); sub(interno); palavra = (palavra ?? "") + "/dev/fd/63"; i = k; continue; }
      i++;
      if (src[i] === "&" || src[i] === ">") i++;
      atual.entradaArquivo = true; pulaAlvo(); continue;
    }
    if (c === ">") {
      fechaPalavra();
      i++;
      if (src[i] === "(") { const [interno, k] = parenteses(src, i + 1); sub(interno); palavra = (palavra ?? "") + "/dev/fd/63"; i = k; continue; }
      if (src[i] === ">" || src[i] === "|") i++;
      if (src[i] === "&") { i++; pulaAlvo(); continue; } // >&2
      const alvo = pulaAlvo();
      if (alvo) atual.saidas.push(alvo);
      continue;
    }
    if (/[0-9]/.test(c) && palavra === null && (src[i + 1] === ">" || src[i + 1] === "<")) { i++; continue; } // 2> 2>&1 0<
    palavra = (palavra ?? "") + c; i++;
  }
  fechaCmd();
  if (pendentes.length) pulaCorpos(src, n, pendentes);
  return cmds;
}

// ─── o PowerShell ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// Aspas simples (com '' dentro), duplas (com a crase de escape), here-strings @'…'@ e @"…"@ (texto), separadores ; | && || ( ) { } e a
// quebra de linha. Um comando que começa por texto entre aspas, sem o operador &, é expressão (Test-Path ('…python.exe')), não programa.
export function comandosPowerShell(src, prof = 0) {
  const cmds = [];
  if (prof > PROF_MAX) return cmds;
  const n = src.length;
  const vazio = () => ({ palavras: [], heredocs: [], corpos: [], herestring: false, entradaArquivo: false, saidas: [], pipeDe: null, citada: false, chamada: false });
  let atual = vazio(), palavra = null;
  const sub = (texto) => { for (const s of comandosPowerShell(texto, prof + 1)) cmds.push(s); };
  const comeca = () => { if (palavra === null && atual.palavras.length === 0) atual.citada = true; };
  const fechaPalavra = () => { if (palavra !== null) { atual.palavras.push(palavra); palavra = null; } };
  const fechaCmd = () => { fechaPalavra(); let feito = null; if (atual.palavras.length) { cmds.push(atual); feito = atual; } atual = vazio(); return feito; };
  let i = 0;
  while (i < n) {
    const c = src[i];
    if (c === "@" && (src[i + 1] === "'" || src[i + 1] === '"') && /^\r?\n/.test(src.slice(i + 2, i + 4))) {
      comeca();
      const k = src.indexOf(`\n${src[i + 1]}@`, i + 2);
      i = k < 0 ? n : k + 3;
      palavra = (palavra ?? "") + "@…@";
      continue;
    }
    if (c === "'") {
      comeca();
      let j = i + 1, s = "";
      while (j < n) { if (src[j] === "'" && src[j + 1] === "'") { s += "'"; j += 2; continue; } if (src[j] === "'") break; s += src[j]; j++; }
      palavra = (palavra ?? "") + s; i = j + 1; continue;
    }
    if (c === '"') {
      comeca();
      let j = i + 1, s = "";
      while (j < n && src[j] !== '"') {
        if (src[j] === "`" && j + 1 < n) { s += src[j + 1]; j += 2; continue; }
        if (src[j] === "$" && src[j + 1] === "(") { const [interno, k] = parenteses(src, j + 2, "ps"); sub(interno); s += "$(…)"; j = k; continue; }
        s += src[j]; j++;
      }
      palavra = (palavra ?? "") + s; i = j + 1; continue;
    }
    if (c === "`" && i + 1 < n) { if (src[i + 1] === "\n" || src[i + 1] === "\r") { i += 2; continue; } palavra = (palavra ?? "") + src[i + 1]; i += 2; continue; }
    if (c === "#" && palavra === null) { const f = src.indexOf("\n", i); i = f < 0 ? n : f; continue; }
    if (c === "<" && src[i + 1] === "#") { const f = src.indexOf("#>", i + 2); i = f < 0 ? n : f + 2; continue; }
    if (c === "$" && src[i + 1] === "(") { const [interno, k] = parenteses(src, i + 2, "ps"); sub(interno); palavra = (palavra ?? "") + "$(…)"; i = k; continue; }
    if (c === " " || c === "\t" || c === "\r") { fechaPalavra(); i++; continue; }
    if (c === "\n" || c === ";" || c === "{" || c === "}" || c === "(" || c === ")") { fechaCmd(); i++; continue; }
    if (c === "|") {
      if (src[i + 1] === "|") { fechaCmd(); i += 2; continue; }
      const feito = fechaCmd(); atual.pipeDe = feito; i++; continue;
    }
    if (c === "&") {
      if (src[i + 1] === "&") { fechaCmd(); i += 2; continue; }
      if (palavra === null && atual.palavras.length === 0) { atual.chamada = true; i++; continue; } // operador de chamada: & python …
      fechaCmd(); i++; continue;
    }
    if (c === ">") { fechaPalavra(); i++; if (src[i] === ">") i++; while (src[i] === " ") i++; while (i < n && !" \t\r\n;|".includes(src[i])) i++; continue; }
    if (/[0-9*]/.test(c) && palavra === null && src[i + 1] === ">") { i++; continue; }
    palavra = (palavra ?? "") + c; i++;
  }
  fechaCmd();
  return cmds;
}

// ─── o juízo ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const EH_PYTHON = /^(python[0-9.]*|pythonw[0-9.]*|py|pypy[0-9.]*)(\.exe)?$/i;
const VAR_PYTHON = /^\$\{?[A-Za-z_]*py[A-Za-z0-9_]*(\}|:-[^}]*\})?$/i; // $PY, ${PYTHON}, "${PYTHON:-python}"
const PALAVRAS_DO_SHELL = new Set(["do", "then", "else", "elif", "if", "while", "until", "!", "coproc"]);
const OPC_COM_ARG = { // os embrulhos, e as opções deles que levam valor
  env: new Set(["-u", "-C", "-S", "--unset", "--chdir", "--split-string"]),
  timeout: new Set(["-s", "-k", "--signal", "--kill-after"]),
  nice: new Set(["-n", "--adjustment"]),
  exec: new Set(["-a"]),
  stdbuf: new Set(["-i", "-o", "-e", "--input", "--output", "--error"]),
  sudo: new Set(["-u", "-g", "-h", "-p", "-C", "-D", "-r", "-t", "-T", "-U"]),
  xargs: new Set(["-n", "-L", "-P", "-s", "-d", "-E", "-I", "-a", "--max-args", "--max-lines", "--max-procs", "--delimiter", "--arg-file"]),
  time: new Set(["-o", "-f", "--output", "--format"]),
  nohup: new Set(), command: new Set(), builtin: new Set(), winpty: new Set(),
};
const RUN_COM_ARG = new Set(["--with", "--python", "-p", "--project", "--directory", "--env-file", "--extra", "--group", "--package", "-w",
  "--index", "--index-url", "-n", "--name", "--prefix", "--cwd"]);
const SO_INFO = new Set(["-V", "--version", "-VV", "-h", "-?", "--help", "--help-env", "--help-xoptions", "--help-all"]);
const ENTRADA = /^(\/dev\/stdin|\/dev\/fd\/0|\/proc\/self\/fd\/0)$/;
const EH_BASH = /^(bash|sh|dash|zsh|ksh)(\.exe)?$/i;
const EH_PS = /^(powershell|pwsh)(\.exe)?$/i;
const EH_CMD = /^cmd(\.exe)?$/i;
const EH_SH = /\.(sh|bash)$/i;

function base(p) { return path.basename(String(p).replace(/\\/g, "/")); }
function ehPython(w) { return EH_PYTHON.test(base(w)) || VAR_PYTHON.test(w); }
function ehOpcaoC(a) { return /^-[a-zA-Z]*c[a-zA-Z]*$/.test(a ?? ""); }

function pulaOpcoes(p, comArg) {
  while (p.length && p[0].startsWith("-") && p[0] !== "-") {
    const o = p.shift();
    if (o === "--") break;
    if (comArg.has(o)) p.shift();
  }
}

// Tira atribuições (VAR=x), palavras do shell (do, then…) e embrulhos (env, timeout 60, nice -n 5, uv run…), e devolve as palavras a
// partir do programa. `command -v` só pergunta onde o programa está: não roda nada.
function semEmbrulho(palavras) {
  const p = [...palavras];
  let viaXargs = false;
  for (let volta = 0; volta < 10 && p.length; volta++) {
    if (/^[A-Za-z_][A-Za-z0-9_]*(\[[^\]]*\])?\+?=/.test(p[0])) { p.shift(); continue; }
    if (PALAVRAS_DO_SHELL.has(p[0])) { p.shift(); continue; }
    const b = base(p[0]).replace(/\.exe$/i, "").toLowerCase();
    if (b === "command" && p.slice(1).some((a) => /^-[a-zA-Z]*[vV]/.test(a))) return { p: [], viaXargs };
    if (["uv", "poetry", "pipenv", "pdm", "hatch", "conda", "mamba", "micromamba"].includes(b) && p[1] === "run") {
      p.splice(0, 2); pulaOpcoes(p, RUN_COM_ARG); continue;
    }
    if (Object.hasOwn(OPC_COM_ARG, b)) {
      p.shift();
      if (b === "xargs") viaXargs = true;
      pulaOpcoes(p, OPC_COM_ARG[b]);
      if (b === "timeout" && p.length) p.shift(); // a duração
      continue;
    }
    break;
  }
  return { p, viaXargs };
}

// Lê os argumentos do Python: "stdin" se o script sai da entrada, "interativo" se o -i abre o modo interativo depois, ou null.
function scriptDoPython(args, launcherPy) {
  let interativo = false;
  const fim = (r) => (interativo ? "interativo" : r);
  for (let k = 0; k < args.length; k++) {
    const a = args[k];
    if (a === "-") return "stdin";
    if (a === "--") { const s = args[k + 1]; return s == null || s === "-" || ENTRADA.test(s) ? "stdin" : fim(null); }
    if (SO_INFO.has(a)) return null;
    if (launcherPy && /^(-0p?|--list(-paths)?)$/.test(a)) return null; // py -0, py --list: só lista as versões
    if (launcherPy && (/^-[0-9]/.test(a) || /^-V:/i.test(a))) continue; // py -3, py -3.12, py -V:3.12
    if (a === "--check-hash-based-pycs") { k++; continue; }
    if (a.startsWith("--")) continue;
    if (a.startsWith("-")) { // opções curtas, juntas ou não: -B, -BI, -Xutf8, -X utf8, -Bc "…"
      for (let q = 1; q < a.length; q++) {
        const ch = a[q];
        if (ch === "X" || ch === "W") { if (q === a.length - 1) k++; break; }
        if (ch === "c" || ch === "m") return fim(null);
        if (ch === "i") interativo = true;
      }
      continue;
    }
    if (ENTRADA.test(a)) return "stdin";
    return fim(null); // o primeiro argumento que não é opção é o arquivo do script
  }
  return interativo ? "interativo" : "stdin";
}

function resolver(dir, alvo) { // um caminho do Git Bash (ou do Windows) no disco; null quando não se sabe
  if (!alvo || /[$`*?{]/.test(alvo)) return null;
  let a = alvo.replace(/\\/g, "/");
  const m = a.match(/^\/([a-zA-Z])(\/|$)/);
  if (m) a = `${m[1].toUpperCase()}:/${a.slice(3)}`;
  if (a === "~" || a.startsWith("~/")) a = path.join(os.homedir(), a.slice(1));
  if (a === "/tmp" || a.startsWith("/tmp/")) a = path.join(os.tmpdir(), a.slice(4));
  if (/^[a-zA-Z]:/.test(a)) return path.resolve(a);
  if (a.startsWith("/")) return null;
  return dir ? path.resolve(dir, a) : null;
}

function julgarArquivo(arq, ctx, prof) { // o .sh que o comando roda, lido do disco
  if (prof >= 4) return null;
  const p = resolver(ctx.dir, arq);
  if (!p) return null;
  try { const st = statSync(p); if (!st.isFile() || st.size > 512 * 1024) return null; } catch { return null; }
  let txt;
  try { txt = readFileSync(p, "utf8"); } catch { return null; }
  const r = julgar(comandosBash(txt, prof + 1), prof + 1, false, { dir: ctx.dir });
  return r ? `${r}, dentro do script ${path.basename(p)}` : null;
}

function motivo(cmd, args, r) {
  if (r === "interativo") return "Python em modo interativo (`python -i`): depois do script, ele espera a entrada";
  if (cmd.heredocs.length) return "Python por heredoc (`python - <<'EOF'`)";
  if (cmd.herestring) return "Python por here-string (`python <<< …`)";
  if (cmd.entradaArquivo) return "Python com o script por redirecionamento (`python < arquivo`)";
  if (args.some((a) => ENTRADA.test(a))) return "Python lendo o script de /dev/stdin";
  if (args.includes("-")) return "Python com o script na entrada (`python -`)";
  return "Python sem arquivo de script (ele lê a entrada)";
}

function julgar(cmds, prof = 0, ps = false, ctx = { dir: process.cwd() }) {
  if (prof > PROF_MAX) return null;
  const bash = (texto) => julgar(comandosBash(texto, prof + 1), prof + 1, false, { dir: ctx.dir });
  const pwsh = (texto) => julgar(comandosPowerShell(texto, prof + 1), prof + 1, true, { dir: ctx.dir });
  for (const cmd of cmds) {
    let palavras = cmd.palavras;
    if (ps) {
      if (cmd.citada && !cmd.chamada) continue; // expressão, não programa
      if (/^\$[\w:]+$/.test(palavras[0] ?? "") && /^[-+*/%?]?=$/.test(palavras[1] ?? "")) palavras = palavras.slice(2); // $r = …
      if (palavras[0] === ".") palavras = palavras.slice(1); // . python (dot-source)
    }
    const { p, viaXargs } = semEmbrulho(palavras);
    if (!p.length) {
      // o texto que vai a um shell sem o nome dele (cat <<EOF | bash) se julga no comando do shell, abaixo
      continue;
    }
    const prog = base(p[0]);
    const progL = prog.toLowerCase();
    const resto = p.slice(1);

    if (!ps && progL === "cd" && resto.length <= 1) { ctx.dir = resto.length ? resolver(ctx.dir, resto[0]) : os.homedir(); continue; }

    if (ehPython(p[0])) {
      const r = scriptDoPython(resto, /^py(\.exe)?$/i.test(prog));
      if (r && !(viaXargs && !resto.includes("-"))) return motivo(cmd, resto, r);
    }

    // o script .sh que este comando grava: cat > x.sh <<EOF, tee x.sh <<EOF
    if (!ps && cmd.corpos.length && (cmd.saidas.some((s) => EH_SH.test(s)) || (progL === "tee" && resto.some((a) => EH_SH.test(a))))) {
      const nome = [...cmd.saidas, ...resto].find((s) => EH_SH.test(s));
      for (const corpo of cmd.corpos) { const r = bash(corpo); if (r) return `${r}, no script ${base(nome)} que este comando grava`; }
    }

    // os shells: -c, o texto que vai a eles pela entrada, e o .sh que eles rodam
    if (EH_BASH.test(prog)) {
      const k = resto.findIndex(ehOpcaoC);
      if (k >= 0) {
        let s = resto[k + 1];
        if (s === "--") s = resto[k + 2];
        if (s != null) { const r = bash(s); if (r) return r; }
      } else {
        let arq = null;
        for (let q = 0; q < resto.length; q++) { if (resto[q] === "-o" || resto[q] === "+o") { q++; continue; } if (!resto[q].startsWith("-") && !resto[q].startsWith("+")) { arq = resto[q]; break; } }
        if (arq) { const r = julgarArquivo(arq, ctx, prof); if (r) return r; }
        else {
          const textos = [...cmd.corpos];
          const de = cmd.pipeDe;
          if (de) {
            textos.push(...de.corpos);
            const pb = base(de.palavras[0] ?? "").toLowerCase();
            if ((pb === "echo" || pb === "printf") && de.palavras.length > 1) textos.push(de.palavras.slice(1).filter((a) => !/^-[neE]+$/.test(a)).join(" "));
          }
          for (const t of textos) { const r = bash(t); if (r) return `${r}, no texto que vai ao ${prog}`; }
        }
      }
    }
    // em qualquer lugar do comando: … sh -c '…' (find -exec, sudo, xargs)
    for (let q = 1; q < p.length - 1; q++) {
      if (EH_BASH.test(base(p[q])) && ehOpcaoC(p[q + 1])) {
        let s = p[q + 2];
        if (s === "--") s = p[q + 3];
        if (s != null) { const r = bash(s); if (r) return r; }
      }
    }
    if (!ps && (progL === "su" || progL === "script")) { const k = resto.indexOf("-c"); if (k >= 0 && resto[k + 1] != null) { const r = bash(resto[k + 1]); if (r) return r; } }
    if (!ps && (progL === "source" || p[0] === ".") && resto[0]) { const r = julgarArquivo(resto[0], ctx, prof); if (r) return r; }
    if (!ps && EH_SH.test(prog)) { const r = julgarArquivo(p[0], ctx, prof); if (r) return r; } // ./x.sh
    if (!ps && progL === "eval" && resto.length) { const r = bash(resto.join(" ")); if (r) return r; }
    if (EH_CMD.test(prog)) {
      const k = resto.findIndex((a) => /^\/\/?[ck]$/i.test(a));
      if (k >= 0) { const r = bash(resto.slice(k + 1).join(" ")); if (r) return r; }
    }
    if (EH_PS.test(prog)) {
      const k = resto.findIndex((a) => /^-(c|command|com|comm|comma|comman)$/i.test(a));
      if (k >= 0 && resto[k + 1] != null) { const r = pwsh(resto.slice(k + 1).join(" ")); if (r) return r; }
    }
    if (ps && /^(iex|invoke-expression)$/i.test(prog) && resto.length) { const r = pwsh(resto.join(" ")); if (r) return r; }
    if (ps && /^(start-process|saps|start)$/i.test(prog)) {
      const SWITCH = /^-(nonewwindow|wait|passthru|usenewenvironment|loaduserprofile)$/i;
      let arq = null, lista = null, redir = false;
      for (let q = 0; q < resto.length; q++) {
        const a = resto[q];
        if (/^-f(i(l(e(p(a(th?)?)?)?)?)?)?$/i.test(a)) { arq = resto[++q]; continue; }
        if (/^-(a(r(g(u(m(e(n(t(l(i(st?)?)?)?)?)?)?)?)?)?)?|args)$/i.test(a)) { lista = resto[++q]; continue; }
        if (/^-redirectstandardinput$/i.test(a)) { redir = true; q++; continue; }
        if (SWITCH.test(a)) continue;
        if (a.startsWith("-")) { q++; continue; }
        if (arq === null) arq = a; else if (lista === null) lista = a;
      }
      if (arq && ehPython(arq) && (redir || (lista != null && lista.split(/[\s,]+/).includes("-")))) return "Python por Start-Process com o script na entrada";
    }
  }
  return null;
}

// O motivo da recusa (texto curto), ou null quando o comando pode rodar.
export function avaliar(ferramenta, comando, cwd) {
  if (typeof comando !== "string") return null;
  const ctx = { dir: typeof cwd === "string" && cwd ? cwd : process.cwd() };
  return /powershell/i.test(ferramenta ?? "")
    ? julgar(comandosPowerShell(comando), 0, true, ctx)
    : julgar(comandosBash(comando), 0, false, ctx);
}

// ─── o hook ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  let dados = "";
  const desiste = setTimeout(() => process.exit(0), 5000); // sem entrada em 5 s, deixa rodar
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (d) => { dados += d; });
  process.stdin.on("error", () => process.exit(0));
  process.stdin.on("end", () => {
    clearTimeout(desiste);
    try {
      const e = JSON.parse((dados || "{}").replace(/^\uFEFF/, ""));
      const como = avaliar(e.tool_name, e.tool_input?.command, e.cwd);
      if (como) { process.stderr.write(MSG(como) + "\n"); process.exit(2); }
    } catch { /* defeito do verificador: deixa rodar */ }
    process.exit(0);
  });
}
