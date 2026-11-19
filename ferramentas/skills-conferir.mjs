#!/usr/bin/env node
// skills-conferir.mjs — a conferência de forma das skills do canal (out/_skills/catalogo.md §1.1 a §1.7, com as marcas do cético
// em out/_skills/cetico.md). Só lê: não muda skill nenhuma, não usa rede e não chama o Claude. Nasceu na Onda 0 (18/11/2026).
//
// O que confere, em cada pasta de .claude/skills/ (cada item tem um código, que a saída cita):
//   F · o SKILL.md existe, abre com o bloco "---" e o bloco se lê (um YAML simples: chave: valor, os blocos ">-" e "|", um mapa
//       aninhado, uma lista). O escalar sem aspas com ": " ou " #" no meio quebra o YAML de verdade e reprova.
//   N · o name é igual ao nome da pasta; só a-z, 0-9 e hífen, de 1 a 64, sem hífen no começo, no fim ou dobrado (§1.1); não é
//       nome reservado (synced, anthropic-skills); não coincide com uma skill pessoal de ~/.claude/skills/, que passaria por cima.
//   D · a description existe, diz quando usar ("Use …"), não tem data (§1.2: "sem datas, sem histórico") e, somada ao
//       when_to_use, cabe em 350 caracteres (§1.2; cético §2: o campo vizinho não contorna o teto).
//   C · nenhum campo inventado (campo com nome errado é ignorado sem aviso); os que pedem o ok do Lucas (§1.2 [cético]):
//       allowed-tools e hooks; model ou effort numa skill com context: fork; context: fork sem agent, ou com um agente que não é
//       especialista de .claude/agents/ (os embutidos herdam as ferramentas de MCP, inclusive as do navegador); os booleanos
//       são booleanos; o metadata tem versao e atualizada (AAAA-MM-DD) (§1.7). Os campos que dependem de decisão do Lucas
//       (§1.2, perguntas 3 e 6) reprovam com C7 sem a exceção dele: disable-model-invocation: true, e context: fork com agent
//       (a prova da Onda 0 mediu que o fork funciona, não decidiu o uso; cético da Onda 0, C7). O paths dá aviso (C8): acorda a
//       skill pelo arquivo tocado, por fora da descrição e do teste de mesa.
//   B · o corpo: nenhuma injeção de comando (§1.2 [cético]), lida no corpo inteiro, com o código em linha e o bloco cercado
//       (não se provou que a Claude Code respeita o código; cético da Onda 0, C6), nem bloco cercado aberto com "!"; menos de 500 linhas (reprova) e até ~10 KB (aviso; o número é
//       escolha do canal, §1.3); as partes da forma do §1.3 ("Acima desta skill" e "Quem roda" no topo, "## Pare se" com 3 a 6
//       itens antes de "## Etapas", "## Saída", "## O que esta skill NÃO faz", "## Decisões do Lucas…", "## Lições");
//       o "Pare se" termina nos primeiros 12 mil caracteres do arquivo (na compactação só os primeiros ~5 mil tokens de cada
//       skill voltam, §1.3; a ~3,2 caracteres por token em português, cético §4, 12 mil ficam abaixo de 4 mil tokens); os
//       arquivos da própria pasta que o corpo cita (licoes.md, gatilhos.md, references/…, scripts/…, fases/…) existem.
//   G · o gatilhos.md existe, com "## Devem acordar" (3 ou mais pedidos) e "## Não devem acordar" (2 ou mais), cada vizinho
//       com a seta para onde vai (§1.4; o teste de disparo de mesa).
//   L · o licoes.md, se existe, tem cada lição (### …) com as quatro linhas e a origem: Sintoma, Causa, O que resolveu, Como
//       evitar e Origem (§1.4 e §1.5).
//   I · o .claude/skills/INDICE.md existe e bate com as pastas: uma linha por skill, e a versão e a data iguais às do metadata
//       (§1.7). Não confere quando se pedem só algumas pastas.
//
// O legado: a cacar-no-chrome (75 KB, 870 linhas, sem "Pare se") é anterior à forma, e a reorganização dela é da Onda 2
// (catálogo §2.8). Os itens dela saem como "legado" e não reprovam, só enquanto o sha256 do SKILL.md for o registrado abaixo:
// mudou o arquivo, a isenção vence, os itens voltam a reprovar e a saída diz para conferir a mudança. --estrito ignora a isenção.
// Exceções do Lucas: um campo que pede o ok dele (allowed-tools, hooks, a injeção, disable-model-invocation, o fork com agent) só
// passa com a entrada em EXCECOES, com a data e a mensagem literal dele. A chave é "<código>:<campo>" (C2:hooks, C2:allowed-tools,
// C7:disable-model-invocation, C7:context) ou "B1". Desde 18/11/2026: o C7:disable-model-invocation das três skills de etapa.
//
// Uso (cwd na raiz do canal):
//   node ferramentas/skills-conferir.mjs                  todas as pastas de .claude/skills/ e o INDICE.md
//   node ferramentas/skills-conferir.mjs <pasta> [...]    só estas (a pasta da skill ou o SKILL.md dela); sem o índice
//   --raiz=<dir>       outra pasta de skills (a prova usa)          --pessoais=<dir>  outra pasta de skills pessoais (idem)
//   --estrito          o legado também reprova                       --json            a saída em JSON
// Saída: 0 = todas passaram (o legado, dentro da isenção) · 1 = alguma reprovou · 2 = não rodou (pasta que não existe, uso errado).
// A prova: node ferramentas/skills-conferir-provar.mjs.
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

export const LIMITE_DESCRICAO = 350;         // §1.2: até ~350 caracteres (description + when_to_use)
export const LIMITE_LINHAS = 500;            // §1.3: menos de 500 linhas (a documentação)
export const IDEAL_BYTES = 10 * 1024;        // §1.3: "o ideal é até ~10 KB" (escolha do canal, sem fonte: só aviso)
export const LIMITE_PARE_SE_CHARS = 12000;   // §1.3: o "Pare se" dentro dos ~5 mil tokens que voltam na compactação
const NOMES_RESERVADOS = new Set(["synced", "anthropic-skills"]);
const EMBUTIDOS = new Set(["general-purpose", "explore", "plan", "statusline-setup", "claude-code-guide", "claude"]);
const CAMPOS = new Set([
  "name", "description", "when_to_use", "argument-hint", "arguments", "disable-model-invocation", "user-invocable",
  "allowed-tools", "disallowed-tools", "model", "effort", "context", "agent", "background", "hooks", "paths", "shell",
  "license", "compatibility", "metadata",
]);
const PEDEM_OK = { "allowed-tools": "C2", hooks: "C2" };
export const LEGADO = {
  "cacar-no-chrome": {
    sha256: "639be90c92aedf14f1025663f554a0c2e7c9b8628b02b15d0f948468ab5bbe7e",
    motivo: "anterior à forma; a reorganização (SKILL.md de ~8 KB, fases ao lado, descrição de ~300 caracteres) é da Onda 2, catálogo §2.8",
  },
};
// { "<skill>": { "<código>:<campo>" ou "B1": "<data> · <mensagem literal do Lucas no chat>" } }
export const EXCECOES = {
  "gerar-mapa-animado-maptiler": { "C7:disable-model-invocation": "18/11/2026, ~21:2x · à pergunta \"As três skills de etapa do canal (mapa, cena HTML e textos de tela) aparecem na lista de toda conversa, até nos setores, que não podem usá-las. As peças já as leem pelo caminho do pedido. Tiro essas três da lista automática?\": \"Tirar da lista (Recomendado)\" (a opção dizia: \"Continuam valendo para as peças, que as leem pelo pedido; você ainda pode chamá-las digitando /nome. Sobra espaço na lista para as outras.\")" },
  "editar-cena-html": { "C7:disable-model-invocation": "18/11/2026, ~21:2x · à pergunta \"As três skills de etapa do canal (mapa, cena HTML e textos de tela) aparecem na lista de toda conversa, até nos setores, que não podem usá-las. As peças já as leem pelo caminho do pedido. Tiro essas três da lista automática?\": \"Tirar da lista (Recomendado)\" (a opção dizia: \"Continuam valendo para as peças, que as leem pelo pedido; você ainda pode chamá-las digitando /nome. Sobra espaço na lista para as outras.\")" },
  "escrever-textos-de-tela": { "C7:disable-model-invocation": "18/11/2026, ~21:2x · à pergunta \"As três skills de etapa do canal (mapa, cena HTML e textos de tela) aparecem na lista de toda conversa, até nos setores, que não podem usá-las. As peças já as leem pelo caminho do pedido. Tiro essas três da lista automática?\": \"Tirar da lista (Recomendado)\" (a opção dizia: \"Continuam valendo para as peças, que as leem pelo pedido; você ainda pode chamá-las digitando /nome. Sobra espaço na lista para as outras.\")" },
};

// ─── o YAML do começo do arquivo (o mínimo que as skills do canal usam) ─────────────────────────────────────────────────────────
class ErroYaml extends Error {}

function escalar(bruto, onde) {
  const s = bruto.trim();
  if (s.startsWith('"')) {
    if (!s.endsWith('"') || s.length < 2) throw new ErroYaml(`${onde}: aspas duplas sem fechar`);
    try { return JSON.parse(s); } catch { throw new ErroYaml(`${onde}: string entre aspas duplas que não se lê`); }
  }
  if (s.startsWith("'")) {
    if (!s.endsWith("'") || s.length < 2) throw new ErroYaml(`${onde}: aspas simples sem fechar`);
    return s.slice(1, -1).replace(/''/g, "'");
  }
  if (s.startsWith("[") && s.endsWith("]")) {
    return s.slice(1, -1).split(",").map((x) => x.trim()).filter(Boolean).map((x) => escalar(x, onde));
  }
  if (s === "true") return true;
  if (s === "false") return false;
  if (s === "" || s === "~" || s === "null") return null;
  if (/^[&*!%@`{|>?]/.test(s) || /^-\s/.test(s)) throw new ErroYaml(`${onde}: o valor sem aspas começa com "${s[0]}", que o YAML lê como sinal`);
  if (/:\s/.test(s) || /:$/.test(s)) throw new ErroYaml(`${onde}: o valor sem aspas tem ": " no meio, que o YAML lê como outra chave (ponha entre aspas ou use ">-")`);
  if (/\s#/.test(s)) throw new ErroYaml(`${onde}: o valor sem aspas tem " #" no meio, que o YAML corta como comentário`);
  return s;
}

function desindentar(linhas) {
  const ind = Math.min(...linhas.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length));
  return linhas.map((l) => (l.trim() ? l.slice(ind) : ""));
}

function bloco(indicador, filhos) {
  const corpo = desindentar(filhos);
  while (corpo.length && corpo[corpo.length - 1] === "") corpo.pop();
  let txt;
  if (indicador.startsWith("|")) txt = corpo.join("\n");
  else {
    txt = "";
    for (let i = 0; i < corpo.length; i++) {
      const l = corpo[i];
      if (l === "") { txt += "\n"; continue; }
      if (txt && !txt.endsWith("\n")) txt += " ";
      txt += l;
    }
  }
  return indicador.endsWith("-") ? txt : txt + "\n";
}

export function lerYaml(linhas, base = 1) {
  const obj = {};
  let i = 0;
  while (i < linhas.length) {
    const l = linhas[i];
    const onde = `linha ${base + i}`;
    if (!l.trim() || /^\s*#/.test(l)) { i++; continue; }
    if (/^\s/.test(l)) throw new ErroYaml(`${onde}: linha recuada sem chave acima`);
    if (/^\t/.test(l)) throw new ErroYaml(`${onde}: tabulação no recuo`);
    const m = l.match(/^([A-Za-z_][\w-]*)\s*:(?:[ \t]+(.*))?$/);
    if (!m) throw new ErroYaml(`${onde}: esperava "chave: valor", veio ${JSON.stringify(l.slice(0, 60))}`);
    const chave = m[1];
    const resto = (m[2] ?? "").trim();
    if (Object.prototype.hasOwnProperty.call(obj, chave)) throw new ErroYaml(`${onde}: a chave "${chave}" aparece duas vezes`);
    i++;
    const filhos = [];
    while (i < linhas.length && (/^[ \t]+\S/.test(linhas[i]) || !linhas[i].trim())) { filhos.push(linhas[i]); i++; }
    if (filhos.some((f) => /^\t/.test(f))) throw new ErroYaml(`${onde}: tabulação no recuo de "${chave}"`);
    while (filhos.length && !filhos[filhos.length - 1].trim()) filhos.pop();
    let valor;
    if (/^[>|][+-]?$/.test(resto)) {
      if (!filhos.length) throw new ErroYaml(`${onde}: o bloco "${resto}" de "${chave}" está vazio`);
      valor = bloco(resto, filhos);
    } else if (resto === "") {
      if (!filhos.length) valor = null;
      else {
        const d = desindentar(filhos);
        if (/^-(\s|$)/.test(d.find((x) => x.trim()))) {
          valor = [];
          for (const x of d) {
            if (!x.trim()) continue;
            const mm = x.match(/^-\s*(.*)$/);
            if (!mm) { valor.push({ __bruto: x }); continue; } // item composto (o hooks, por exemplo): fica bruto
            valor.push(mm[1].includes(": ") ? { __bruto: mm[1] } : escalar(mm[1], onde));
          }
        } else valor = lerYaml(d, base + i - filhos.length);
      }
    } else {
      if (filhos.length) {
        if (/^["'[]/.test(resto)) throw new ErroYaml(`${onde}: "${chave}" continua na linha de baixo depois de um valor entre aspas`);
        valor = escalar([resto, ...filhos.map((f) => f.trim()).filter(Boolean)].join(" "), onde);
      } else valor = escalar(resto, onde);
    }
    obj[chave] = valor;
  }
  return obj;
}

export function lerFrontmatter(texto) {
  const t = texto.replace(/^﻿/, "").replace(/\r\n?/g, "\n");
  const linhas = t.split("\n");
  if (linhas[0] !== "---") return { erro: "o arquivo não abre com a linha \"---\" do bloco do começo", texto: t };
  const fim = linhas.indexOf("---", 1);
  if (fim < 0) return { erro: "o bloco do começo não fecha com \"---\"", texto: t };
  try {
    const campos = lerYaml(linhas.slice(1, fim), 2);
    return { campos, texto: t, linhaCorpo: fim + 1 };
  } catch (e) {
    if (e instanceof ErroYaml) return { erro: `o bloco do começo não se lê: ${e.message}`, texto: t };
    throw e;
  }
}

// ─── as partes do corpo ─────────────────────────────────────────────────────────────────────────────────────────────────────────
function titulos(texto) { // [{nivel, titulo, linha, offset}] (fora de bloco de código)
  const out = [];
  let off = 0, cerca = false;
  texto.split("\n").forEach((l, i) => {
    if (/^```/.test(l)) cerca = !cerca;
    const m = !cerca && l.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (m) out.push({ nivel: m[1].length, titulo: m[2], linha: i, offset: off });
    off += l.length + 1;
  });
  return out;
}

function secao(texto, re) { // o texto da seção "## <re>" até o próximo título de nível ≤ 2
  const ts = titulos(texto);
  const k = ts.findIndex((t) => t.nivel === 2 && re.test(t.titulo));
  if (k < 0) return null;
  const prox = ts.slice(k + 1).find((t) => t.nivel <= 2);
  const fim = prox ? prox.offset : texto.length;
  return { inicio: ts[k].offset, fim, texto: texto.slice(ts[k].offset, fim), titulo: ts[k].titulo };
}

const itensDe = (s) => (s ? s.texto.split("\n").filter((l) => /^[-*]\s+\S/.test(l)) : []);
const kb = (b) => (b / 1024).toFixed(1).replace(".", ",") + " KB";
const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");

// ─── uma skill ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────
export function conferirSkill(pasta, { pessoais = path.join(os.homedir(), ".claude", "skills"), agentes, excecoes = EXCECOES } = {}) {
  const nomePasta = path.basename(pasta);
  const r = { skill: nomePasta, pasta, reprova: [], avisos: [], tamanho: null };
  const falha = (id, msg) => r.reprova.push({ id, msg });
  const aviso = (id, msg) => r.avisos.push({ id, msg });
  const arq = path.join(pasta, "SKILL.md");
  if (!existsSync(arq)) { falha("F1", "a pasta não tem SKILL.md"); return r; }
  const buf = readFileSync(arq);
  r.sha256 = sha256(buf);
  const fm = lerFrontmatter(buf.toString("utf8"));
  const texto = fm.texto;
  const nLinhas = texto.replace(/\n$/, "").split("\n").length;
  const arquivos = readdirSync(pasta, { withFileTypes: true });
  let bytesPasta = 0;
  const somar = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) somar(p); else bytesPasta += statSync(p).size;
    }
  };
  somar(pasta);
  r.tamanho = { skill_bytes: buf.length, skill_linhas: nLinhas, pasta_bytes: bytesPasta, arquivos: arquivos.map((e) => e.name + (e.isDirectory() ? "/" : "")) };

  // F · o bloco do começo
  if (fm.erro) { falha(fm.erro.startsWith("o bloco do começo não se lê") ? "F3" : "F2", fm.erro); }
  const c = fm.campos ?? {};

  // N · o nome
  const name = c.name;
  if (typeof name !== "string" || !name) falha("N1", "falta o name");
  else {
    if (name !== nomePasta) falha("N1", `o name "${name}" não é o nome da pasta "${nomePasta}" (catálogo §1.1)`);
    if (name.length > 64) falha("N2", `o name tem ${name.length} caracteres (até 64)`);
    if (!/^[a-z0-9-]+$/.test(name)) falha("N2", `o name "${name}" tem caractere fora de a-z, 0-9 e hífen (sem acento, cedilha nem maiúscula)`);
    if (/^-|-$|--/.test(name)) falha("N2", `o name "${name}" tem hífen no começo, no fim ou dobrado`);
    if (NOMES_RESERVADOS.has(name)) falha("N3", `"${name}" é nome reservado da Claude Code`);
    else if (/anthropic|claude/.test(name)) aviso("N3", `o name tem "anthropic" ou "claude", que a API de skills recusa`);
    if (pessoais && existsSync(path.join(pessoais, name, "SKILL.md"))) falha("N4", `há uma skill pessoal "${name}" em ${pessoais}: a pessoal passa por cima da do canal (catálogo §1.1)`);
  }
  if (nomePasta !== name && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(nomePasta)) falha("N2", `o nome da pasta "${nomePasta}" tem caractere fora de a-z, 0-9 e hífen`);

  // D · a descrição
  const desc = typeof c.description === "string" ? c.description.trim() : "";
  if (!desc) falha("D1", "falta a description (é o que faz a skill ser achada)");
  else {
    const wtu = typeof c.when_to_use === "string" ? c.when_to_use.trim() : "";
    const n = [...desc].length + (wtu ? 1 + [...wtu].length : 0);
    r.descricao_caracteres = n;
    if (n > LIMITE_DESCRICAO) falha("D2", `a description${wtu ? " com o when_to_use" : ""} tem ${n} caracteres (até ${LIMITE_DESCRICAO}, catálogo §1.2)`);
    const tudo = desc + " " + wtu;
    const data = tudo.match(/\b\d{1,2}\/\d{1,2}(?:\/\d{2,4})?\b|\b\d{4}-\d{2}-\d{2}\b|\b(?:19|20)\d{2}\b/);
    if (data) falha("D3", `a description tem data ("${data[0]}"): sem datas nem histórico (catálogo §1.2)`);
    if (!/\bUse\b/.test(tudo)) falha("D4", "a description não diz quando usar (\"Use …\", catálogo §1.2)");
  }

  // C · os campos
  for (const k of Object.keys(c)) if (!CAMPOS.has(k)) falha("C1", `campo "${k}" não existe no formato: a Claude Code o ignora sem aviso (catálogo §1.2)`);
  const exc = excecoes[nomePasta] ?? {};
  for (const [k, id] of Object.entries(PEDEM_OK)) {
    if (k in c && !exc[`${id}:${k}`]) falha(id, `"${k}" pede o ok do Lucas (catálogo §1.2 [cético])`);
  }
  if ("context" in c && c.context !== "fork") falha("C3", `context: "${c.context}" (o único valor é fork)`);
  if (c.context === "fork") {
    if (!c.agent) falha("C2", "context: fork sem agent cai no general-purpose, que herda as ferramentas de MCP, inclusive as do navegador (catálogo §1.2 [cético])");
    else {
      const a = String(c.agent);
      if (EMBUTIDOS.has(a.toLowerCase())) falha("C2", `context: fork com agent: ${a}, embutido, herda as ferramentas de MCP (catálogo §1.2 [cético]): só especialista de .claude/agents/`);
      else if (agentes && !agentes.has(a)) falha("C4", `agent: ${a} não está em .claude/agents/`);
    }
    for (const k of ["model", "effort"]) if (k in c) falha("C2", `"${k}" numa skill com context: fork passa por cima do modelo do especialista (catálogo §1.2 [cético])`);
    if (c.agent && !exc["C7:context"]) falha("C7", "context: fork com agent depende de decisão do Lucas (catálogo §1.2, pergunta 6): a prova da Onda 0 mediu que funciona, não decidiu o uso; o fork pula o despacho (o esforço, as liberações, a regra dos 5 minutos)");
  } else if ("agent" in c) aviso("C4", "agent sem context: fork não faz nada");
  if (c["disable-model-invocation"] === true && !exc["C7:disable-model-invocation"]) falha("C7", "disable-model-invocation: true depende de decisão do Lucas (catálogo §1.2, pergunta 3)");
  if ("paths" in c) aviso("C8", "paths acorda a skill pelo arquivo tocado, por fora da descrição e do teste de mesa (o que faz nesta versão não foi conferido)");
  for (const k of ["disable-model-invocation", "user-invocable", "background"]) {
    if (k in c && typeof c[k] !== "boolean") falha("C5", `"${k}" tem de ser true ou false`);
  }
  const meta = c.metadata && typeof c.metadata === "object" && !Array.isArray(c.metadata) ? c.metadata : null;
  if (!meta) falha("C6", "falta o metadata (versao, atualizada, origem; catálogo §1.7)");
  else {
    if (meta.versao == null || meta.versao === "") falha("C6", "falta metadata.versao");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(meta.atualizada ?? ""))) falha("C6", "metadata.atualizada falta ou não é AAAA-MM-DD");
    if (!meta.origem) aviso("C6", "falta metadata.origem");
  }
  r.versao = meta?.versao != null ? String(meta.versao) : null;
  r.atualizada = meta?.atualizada != null ? String(meta.atualizada) : null;

  // B · o corpo
  if (!fm.erro) {
    const corpo = texto.split("\n").slice(fm.linhaCorpo).join("\n");
    // B1 lê o corpo inteiro, com o código: não se provou que a Claude Code respeita o código (a L5 da registrar; cético C6).
    if ((/!`[^`]+`/.test(corpo) || /^\s*(```|~~~)!/m.test(corpo)) && !exc["B1"]) falha("B1", "o corpo tem injeção de comando (o ponto de exclamação com o comando entre crases, ou um bloco cercado aberto com \"!\"), que roda sozinha a cada uso, mesmo dentro de código: pede o ok do Lucas (catálogo §1.2 [cético])");
  }
  if (nLinhas >= LIMITE_LINHAS) falha("B2", `o SKILL.md tem ${nLinhas} linhas (menos de ${LIMITE_LINHAS}, catálogo §1.3)`);
  if (buf.length > IDEAL_BYTES) aviso("B2", `o SKILL.md tem ${kb(buf.length)} (o ideal do canal é até ~10 KB, catálogo §1.3)`);
  const pare = secao(texto, /^Pare se\b/i);
  const etapas = secao(texto, /^Etapas\b/i);
  if (!pare) falha("B3", "falta \"## Pare se\" (catálogo §1.3 e §2.10)");
  else {
    const n = itensDe(pare).length;
    if (n < 3 || n > 6) falha("B3", `o "Pare se" tem ${n} itens (de 3 a 6, catálogo §1.3)`);
    if (etapas && pare.inicio > etapas.inicio) falha("B3", "o \"Pare se\" vem depois das etapas: o que trava vem primeiro (catálogo §1.3)");
    if (pare.fim > LIMITE_PARE_SE_CHARS) falha("B3", `o "Pare se" termina no caractere ${pare.fim}, depois dos primeiros ${LIMITE_PARE_SE_CHARS} (o que volta na compactação, catálogo §1.3)`);
  }
  if (!etapas) falha("B4", "falta \"## Etapas\"");
  if (!secao(texto, /^Sa[ií]da\b/i)) falha("B4", "falta \"## Saída\"");
  if (!secao(texto, /^O que esta skill N[ÃA]O faz/i)) falha("B4", "falta \"## O que esta skill NÃO faz\"");
  if (!secao(texto, /^Decis[õo]es do Lucas/i)) falha("B4", "falta \"## Decisões do Lucas que ela segue\"");
  if (!secao(texto, /^Li[çc][õo]es\b/i)) falha("B4", "falta \"## Lições\"");
  if (!secao(texto, /^Antes de come[çc]ar/i)) aviso("B4", "falta \"## Antes de começar\"");
  const acima = texto.search(/^\*\*Acima desta skill:\*\*/m);
  const quem = texto.search(/^\*\*Quem roda:\*\*/m);
  if (acima < 0) falha("B4", "falta a linha \"**Acima desta skill:**\" (catálogo §1.3)");
  if (quem < 0) falha("B4", "falta a linha \"**Quem roda:**\" (catálogo §1.3)");
  if (pare && ((acima >= 0 && acima > pare.inicio) || (quem >= 0 && quem > pare.inicio))) falha("B4", "\"Acima desta skill\" e \"Quem roda\" vêm antes do \"Pare se\" (catálogo §1.3)");
  const citados = new Set();
  for (const m of texto.matchAll(/`(?:\$\{CLAUDE_SKILL_DIR\}\/)?((?:references|scripts|assets|fases)\/[^`\s]+|licoes\.md|gatilhos\.md)`/g)) citados.add(m[1]);
  for (const f of citados) if (!existsSync(path.join(pasta, f))) falha("B5", `o corpo cita \`${f}\`, que não está na pasta`);

  // G · o gatilhos.md
  const gat = path.join(pasta, "gatilhos.md");
  if (!existsSync(gat)) falha("G1", "falta o gatilhos.md (o teste de disparo, catálogo §1.4 e §1.7)");
  else {
    const g = readFileSync(gat, "utf8").replace(/\r\n?/g, "\n");
    const dev = secao(g, /^Devem acordar\b/i), nao = secao(g, /^N[ãa]o devem acordar\b/i);
    if (!dev) falha("G2", "o gatilhos.md não tem \"## Devem acordar\"");
    else if (itensDe(dev).length < 3) falha("G2", `o gatilhos.md tem ${itensDe(dev).length} pedidos que devem acordar (3 ou mais)`);
    if (!nao) falha("G2", "o gatilhos.md não tem \"## Não devem acordar\"");
    else {
      const it = itensDe(nao);
      if (it.length < 2) falha("G2", `o gatilhos.md tem ${it.length} vizinhos que não devem acordar (2 ou mais)`);
      const semSeta = it.filter((l) => !/→|->/.test(l)).length;
      if (semSeta) aviso("G2", `${semSeta} vizinho(s) sem a seta para a skill aonde o pedido vai`);
    }
  }

  // L · o licoes.md
  const lic = path.join(pasta, "licoes.md");
  if (existsSync(lic)) {
    const lt = readFileSync(lic, "utf8").replace(/\r\n?/g, "\n");
    const blocos = lt.split(/^(?=### )/m).filter((b) => b.startsWith("### "));
    if (!blocos.length) aviso("L1", "o licoes.md não tem lição nenhuma (### …)");
    for (const b of blocos) {
      const t = b.split("\n")[0].replace(/^###\s+/, "");
      const faltam = ["Sintoma", "Causa", "O que resolveu", "Como evitar", "Origem"].filter((k) => !new RegExp(`^[-*]\\s+\\*\\*${k}[^*]*:\\*\\*`, "m").test(b));
      if (faltam.length) falha("L1", `a lição "${t.slice(0, 60)}" não tem ${faltam.join(", ")} (catálogo §1.4 e §1.5)`);
    }
    r.licoes = blocos.length;
  } else r.licoes = 0;
  return r;
}

// ─── o índice ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────
export function conferirIndice(raiz, resultados) {
  const arq = path.join(raiz, "INDICE.md");
  const erros = [];
  if (!existsSync(arq)) return { ok: false, erros: [{ id: "I1", msg: "falta o .claude/skills/INDICE.md (catálogo §1.7)" }] };
  const linhas = readFileSync(arq, "utf8").replace(/\r\n?/g, "\n").split("\n");
  const cab = linhas.find((l) => /^\|\s*Skill\s*\|/i.test(l));
  if (!cab) return { ok: false, erros: [{ id: "I1", msg: "o INDICE.md não tem a tabela (| Skill | … |)" }] };
  const cols = cab.split("|").slice(1, -1).map((x) => x.trim().toLowerCase());
  const iV = cols.findIndex((x) => x.startsWith("vers")), iA = cols.findIndex((x) => x.startsWith("atualizada"));
  if (iV < 0 || iA < 0) erros.push({ id: "I1", msg: "a tabela do INDICE.md não tem as colunas Versão e Atualizada" });
  const linhasIdx = new Map();
  for (const l of linhas) {
    const m = l.match(/^\|\s*`([^`]+)`\s*\|/);
    if (!m) continue;
    if (linhasIdx.has(m[1])) erros.push({ id: "I2", msg: `a skill \`${m[1]}\` aparece duas vezes no INDICE.md` });
    linhasIdx.set(m[1], l.split("|").slice(1, -1).map((x) => x.trim()));
  }
  const norm = (x) => (x == null || x === "" || x === "—" || x === "-" ? null : String(x).replace(/^"|"$/g, ""));
  for (const r of resultados) {
    const cel = linhasIdx.get(r.skill);
    if (!cel) { erros.push({ id: "I2", msg: `a skill \`${r.skill}\` não está no INDICE.md` }); continue; }
    if (iV >= 0 && norm(cel[iV]) !== norm(r.versao)) erros.push({ id: "I3", msg: `\`${r.skill}\`: a versão no INDICE.md (${cel[iV]}) não é a do metadata (${r.versao ?? "—"})` });
    if (iA >= 0 && norm(cel[iA]) !== norm(r.atualizada)) erros.push({ id: "I3", msg: `\`${r.skill}\`: a data no INDICE.md (${cel[iA]}) não é a do metadata (${r.atualizada ?? "—"})` });
  }
  const pastas = new Set(resultados.map((r) => r.skill));
  for (const k of linhasIdx.keys()) if (!pastas.has(k)) erros.push({ id: "I2", msg: `o INDICE.md lista \`${k}\`, que não tem pasta` });
  return { ok: erros.length === 0, erros };
}

// ─── o todo ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
export function conferir({ raiz = ".claude/skills", pastas = null, pessoais, estrito = false, agentesDir = ".claude/agents", excecoes } = {}) {
  if (!existsSync(raiz) || !statSync(raiz).isDirectory()) return { naoRodou: `a pasta de skills ${raiz} não existe` };
  const agentes = existsSync(agentesDir) ? new Set(readdirSync(agentesDir).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3))) : null;
  let alvo;
  if (pastas && pastas.length) {
    alvo = [];
    for (const p of pastas) {
      const d = /SKILL\.md$/i.test(p) ? path.dirname(p) : p;
      if (!existsSync(d) || !statSync(d).isDirectory()) return { naoRodou: `a pasta ${p} não existe` };
      alvo.push(d);
    }
  } else alvo = readdirSync(raiz, { withFileTypes: true }).filter((e) => e.isDirectory() && !e.name.startsWith(".")).map((e) => path.join(raiz, e.name));
  const resultados = alvo.map((p) => {
    const r = conferirSkill(p, { pessoais, agentes, ...(excecoes ? { excecoes } : {}) });
    const leg = LEGADO[r.skill];
    if (leg && !estrito) {
      r.legado = { motivo: leg.motivo, sha256_confere: r.sha256 === leg.sha256 };
      if (r.legado.sha256_confere) { r.legado.itens = r.reprova; r.reprova = []; }
      else r.reprova.push({ id: "X1", msg: `o SKILL.md mudou desde o registro do legado (sha256 ${r.sha256?.slice(0, 12)}…, registrado ${leg.sha256.slice(0, 12)}…): confira a mudança e atualize o LEGADO, ou ponha a skill na forma` });
    }
    r.ok = r.reprova.length === 0;
    return r;
  });
  const indice = pastas && pastas.length ? null : conferirIndice(raiz, resultados);
  const ok = resultados.every((r) => r.ok) && (indice ? indice.ok : true);
  return { raiz, ok, resultados, indice };
}

function imprimir(res) {
  const L = [];
  L.push(`skills-conferir · ${res.raiz} · ${res.resultados.length} skill(s)`);
  for (const r of res.resultados) {
    const t = r.tamanho ? `SKILL.md ${kb(r.tamanho.skill_bytes)} / ${r.tamanho.skill_linhas} linhas; pasta ${kb(r.tamanho.pasta_bytes)} (${r.tamanho.arquivos.join(", ")})` : "";
    const d = r.descricao_caracteres != null ? `; descrição ${r.descricao_caracteres} car.` : "";
    const lc = r.licoes ? `; ${r.licoes} lição(ões)` : "";
    if (r.legado && r.ok) {
      L.push(`~ ${r.skill} — LEGADO (${r.legado.motivo}); sha256 confere; ${r.legado.itens.length} item(ns) não contam:`);
      for (const x of r.legado.itens) L.push(`    · [${x.id}] ${x.msg}`);
    } else L.push(`${r.ok ? "✓" : "✗"} ${r.skill} — ${t}${d}${lc}`);
    for (const x of r.reprova) L.push(`    ✗ [${x.id}] ${x.msg}`);
    for (const x of r.avisos) L.push(`    ! [${x.id}] ${x.msg}`);
  }
  if (res.indice) {
    if (res.indice.ok) L.push(`✓ INDICE.md bate com as ${res.resultados.length} pastas`);
    else { L.push("✗ INDICE.md"); for (const x of res.indice.erros) L.push(`    ✗ [${x.id}] ${x.msg}`); }
  }
  const n = res.resultados.length, rep = res.resultados.filter((r) => !r.ok).length, leg = res.resultados.filter((r) => r.legado && r.ok).length;
  L.push(`Resultado: ${res.ok ? 0 : 1} (${n - rep - leg} passaram, ${leg} legado, ${rep} reprovaram${res.indice && !res.indice.ok ? ", índice reprovado" : ""})`);
  return L.join("\n");
}

const principal = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (principal) {
  const args = process.argv.slice(2);
  const opt = { pastas: [] };
  let json = false;
  for (const a of args) {
    if (a === "--json") json = true;
    else if (a === "--estrito") opt.estrito = true;
    else if (a.startsWith("--raiz=")) opt.raiz = a.slice(7);
    else if (a.startsWith("--pessoais=")) opt.pessoais = a.slice(11);
    else if (a.startsWith("--agentes=")) opt.agentesDir = a.slice(10);
    else if (a.startsWith("--")) { console.error(`uso: node ferramentas/skills-conferir.mjs [<pasta> …] [--raiz=<dir>] [--pessoais=<dir>] [--estrito] [--json]  (opção desconhecida: ${a})`); process.exit(2); }
    else opt.pastas.push(a);
  }
  let res;
  try { res = conferir(opt); } catch (e) { console.error(`NÃO RODOU — ${e.stack || e}`); process.exit(2); }
  if (res.naoRodou) { console.error(`NÃO RODOU — ${res.naoRodou}`); process.exit(2); }
  console.log(json ? JSON.stringify(res, null, 1) : imprimir(res));
  process.exit(res.ok ? 0 : 1);
}
