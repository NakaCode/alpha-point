#!/usr/bin/env node
// SESSÃO — INÍCIO: mostra o resumo do último observatório ao abrir uma sessão do Claude neste canal.
//
// O que faz: acha o relatório mais novo em out/_observatorio/<AAAA-MM-DD>.json (escrito pela rotina
// diária `observatorio`, ADR 0009 §B) e devolve as 3 linhas do resumo. Se o último relatório é velho,
// diz isso — rotina que parou de rodar sem ninguém ver é o defeito que o observatório existe para pegar.
//
// Por que um hook de início de sessão: a rotina roda pelo Agendador de Tarefas com `claude -p`, e não
// há caminho documentado para ela mandar push ao iPhone; o aviso precisa de outro canal, e o
// levantamento sugere exatamente este: "gravar um arquivo que um hook SessionStart mostra na próxima
// sessão" (v1/autonomia-levantamento.json, bloco `critica`, resposta sobre notificação; fontes
// code.claude.com/docs/en/remote-control e /desktop-scheduled-tasks citadas lá).
//
// Como o Claude Code usa a saída (code.claude.com/docs/en/hooks, conferido em 23/09/2026 — não está no
// levantamento): no SessionStart, o que o hook imprime vira contexto que o Claude vê; em JSON,
// `systemMessage` é a mensagem mostrada à pessoa e `hookSpecificOutput.additionalContext` é o contexto
// do modelo. Este script usa as duas: o dono lê o resumo, e o Claude sabe onde está o relatório.
//
// Regras de um hook de início de sessão:
//   - NUNCA atrapalha a sessão: qualquer erro sai 0 e calado. Um resumo a menos é melhor que uma sessão
//     que não abre.
//   - Rápido e sem rede: só lê dois arquivos pequenos. Não importa nada do motor (roda até sem ele).
//   - Não lê a entrada padrão: o que o Claude Code manda nela não é necessário aqui.
//   - O relatório mora na PASTA PRINCIPAL do canal (out/ não viaja pelo git). A pasta vem do git
//     (`rev-parse --git-common-dir`, em ARRAY, com prazo curto), a partir da posição DESTE arquivo — não
//     da pasta atual. Motivo: a sessão pode já NASCER numa worktree (a opção de worktree da aba Code do
//     app, code.claude.com/docs/en/desktop, ou `claude -w`), e aí o que roda é a cópia deste script que
//     está na worktree, onde out/_observatorio não existe. Sem git (ou fora de um repositório), fica a
//     posição do script (scripts/claude/ → ../..).
//
// Uso manual (para conferir): node scripts/claude/sessao-inicio-observatorio.mjs [--texto]
//   --texto  imprime só as linhas, sem o JSON do hook.

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/** A pasta principal do canal: a do `.git` comum, se ela tiver canal.json; senão, a deste script. */
function raizDoCanal() {
  const aqui = fileURLToPath(new URL("../..", import.meta.url));
  try {
    const comum = execFileSync("git", ["-C", aqui, "rev-parse", "--path-format=absolute", "--git-common-dir"], {
      encoding: "utf8", timeout: 3000, windowsHide: true, stdio: ["ignore", "pipe", "ignore"],
      env: { ...process.env, GIT_TERMINAL_PROMPT: "0" },
    }).trim();
    if (/[\\/]\.git$/.test(comum)) {
      const principal = resolve(dirname(comum));
      if (existsSync(join(principal, "canal.json"))) return principal;
    }
  } catch { /* sem git, ou não é repositório: fica a posição do script */ }
  return aqui;
}

const PASTA = join(raizDoCanal(), "out", "_observatorio");
/** Relatório mais velho que isto: a rotina diária provavelmente não rodou. */
const VELHO_H = 36;

function texto(arq) {
  const buf = readFileSync(arq);
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) return buf.subarray(2).toString("utf16le");
  const s = buf.toString("utf8");
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

/** As linhas do resumo do .json; se ele faltar, a seção "## Resumo" do .md. */
function lerResumo(dia) {
  const j = join(PASTA, `${dia}.json`);
  if (existsSync(j)) {
    try {
      const r = JSON.parse(texto(j)).resumo;
      if (Array.isArray(r) && r.length) return r.map(String).slice(0, 3);
    } catch { /* cai no .md */ }
  }
  const m = join(PASTA, `${dia}.md`);
  if (!existsSync(m)) return null;
  const ls = texto(m).split(/\r?\n/);
  const i = ls.findIndex((l) => /^##\s+Resumo/.test(l));
  if (i < 0) return null;
  const out = [];
  for (const l of ls.slice(i + 1)) {
    if (/^##\s/.test(l)) break;
    if (/^\s*-\s+/.test(l)) out.push(l.replace(/^\s*-\s+/, ""));
    if (out.length === 3) break;
  }
  return out.length ? out : null;
}

function montar({ agora = Date.now() } = {}) {
  if (!existsSync(PASTA)) return null;
  const dias = [...new Set(readdirSync(PASTA).map((n) => (n.match(/^(\d{4}-\d{2}-\d{2})\.(json|md)$/) || [])[1]).filter(Boolean))].sort();
  for (const dia of dias.reverse()) {
    const resumo = lerResumo(dia);
    if (!resumo) continue;
    const arq = existsSync(join(PASTA, `${dia}.json`)) ? join(PASTA, `${dia}.json`) : join(PASTA, `${dia}.md`);
    const idadeH = Math.floor((agora - statSync(arq).mtimeMs) / 3_600_000);
    const linhas = [`Observatório de ${dia}:`, ...resumo.map((l) => `  ${l}`)];
    if (idadeH >= VELHO_H) {
      linhas.push(`  ⚠ Este é o último relatório, de ${idadeH} h atrás: a rotina diária do observatório pode estar parada. ` +
        "Peça ao Claude para conferir as rotinas (doctor).");
    }
    return {
      linhas,
      contexto: `${linhas.join("\n")}\nRelatório completo: out/_observatorio/${dia}.md (e .json). ` +
        "Não repita o resumo ao dono, ele já o viu; use-o se ele perguntar como está o canal.",
    };
  }
  return null;
}

try {
  const r = montar();
  if (r) {
    if (process.argv.includes("--texto")) process.stdout.write(r.linhas.join("\n") + "\n");
    else process.stdout.write(JSON.stringify({
      systemMessage: r.linhas.join("\n"),
      hookSpecificOutput: { hookEventName: "SessionStart", additionalContext: r.contexto },
    }) + "\n");
  }
} catch { /* nunca atrapalhar a abertura da sessão */ }
process.exitCode = 0;
