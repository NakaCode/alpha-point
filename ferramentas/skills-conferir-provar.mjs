#!/usr/bin/env node
// skills-conferir-provar.mjs — a prova do ferramentas/skills-conferir.mjs, sem rede e sem chamar o Claude.
//
// Três partes:
//   A. a skill malformada reprova, cada uma pelo código certo: uma skill boa (que tem de passar sem nenhum item) e ~35
//      variações dela, cada uma com um defeito só (o nome, a descrição, os campos que pedem o ok do Lucas, o corpo, o
//      "Pare se", o gatilhos.md, o licoes.md, o índice). Tudo numa pasta temporária do sistema, apagada no fim.
//   B. o legado: a cópia da cacar-no-chrome passa como legado com o sha256 registrado; um byte a mais e ela reprova (X1);
//      com --estrito, reprova sempre.
//   C. a linha de comando: o CLI sai 2 com a pasta que não existe, 1 com uma skill ruim, 0 com a boa, e o --json se lê.
// No fim, à parte e fora da conta (cético da Onda 0, C20): o estado do canal, o .claude/skills/ de verdade, que depende do que está
// na pasta naquela hora.
//
// Uso (cwd na raiz do canal): node ferramentas/skills-conferir-provar.mjs
// Saída: 0 = tudo certo · 1 = algum caso errado · 2 = não rodou.
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, existsSync, readFileSync, copyFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import os from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const CONF = path.join(AQUI, "skills-conferir.mjs");
if (!existsSync(CONF)) { console.error(`NÃO RODOU — falta ${CONF}`); process.exit(2); }
const { conferir } = await import(pathToFileURL(CONF).href);
const RAIZ_CANAL = path.resolve(AQUI, "..");

const TMP = mkdtempSync(path.join(os.tmpdir(), "skills-conferir-prova-"));
const PESSOAIS = path.join(TMP, "pessoais");
const AGENTES = path.join(TMP, "agentes");
mkdirSync(PESSOAIS, { recursive: true });
mkdirSync(AGENTES, { recursive: true });
writeFileSync(path.join(AGENTES, "qc-visual.md"), "---\nname: qc-visual\n---\n");
mkdirSync(path.join(PESSOAIS, "minha-pessoal"), { recursive: true });
writeFileSync(path.join(PESSOAIS, "minha-pessoal", "SKILL.md"), "---\nname: minha-pessoal\ndescription: x\n---\n");

let erros = 0, total = 0;
const ok = (cond, msg) => { total++; if (!cond) { erros++; console.log(`✗ ${msg}`); } };

// ─── a skill boa ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
const FM = (extra = "", nome = "boa") => `---
name: ${nome}
description: >-
  Faz a coisa boa da prova. Use quando a prova pedir a skill boa; para a coisa ruim, outra-skill.
argument-hint: "<proj>"
metadata:
  versao: "1"
  atualizada: "2026-11-18"
  origem: "prova"
${extra}---
`;
const CORPO = `
# A skill boa

**Acima desta skill:** o CLAUDE.md. Se divergirem, pare.
**Quem roda:** a prova.

## Pare se
- uma;
- duas;
- três.

## Antes de começar
- nada.

## Etapas
1. Faça. **Feito quando:** feito.

## Saída
- nada.

## O que esta skill NÃO faz
- nada.

## Decisões do Lucas que ela segue
- nenhuma.

## Lições (leia quando a etapa pedir)
- \`licoes.md\`.
`;
const GAT = `# Gatilhos

## Devem acordar
- "um"
- "dois"
- "três"

## Não devem acordar
- "quatro" → \`outra\`
- "cinco" → nenhuma
`;
const LIC = `# Lições

### L1 · uma lição
- **Sintoma:** s.
- **Causa:** c.
- **O que resolveu:** r.
- **Como evitar:** e.
- **Origem:** o.
`;

function montar(raiz, nome, { skill, gat = GAT, lic = LIC, extras = {} } = {}) {
  const d = path.join(raiz, nome);
  mkdirSync(d, { recursive: true });
  writeFileSync(path.join(d, "SKILL.md"), skill ?? FM("", nome) + CORPO);
  if (gat != null) writeFileSync(path.join(d, "gatilhos.md"), gat);
  if (lic != null) writeFileSync(path.join(d, "licoes.md"), lic);
  for (const [k, v] of Object.entries(extras)) { mkdirSync(path.dirname(path.join(d, k)), { recursive: true }); writeFileSync(path.join(d, k), v); }
  return d;
}
const indice = (linhas) => `# Índice\n\n| Skill | Grupo | Onda | Quem usa | Versão | Atualizada |\n|---|---|---|---|---|---|\n${linhas.map((l) => `| \`${l[0]}\` | g | 0 | x | ${l[1] ?? "1"} | ${l[2] ?? "2026-11-18"} |`).join("\n")}\n`;

// A · uma raiz por caso, cada uma com a skill sob teste e o índice certo para ela
const casos = [];
const caso = (nome, codigo, monta, nomePasta = "x") => casos.push({ nome, codigo, monta, nomePasta });
const sub = (de, para) => (FM("", "x") + CORPO).replace(de, para);

caso("o name diferente da pasta", "N1", (r) => montar(r, "x", { skill: FM("", "y") + CORPO }));
caso("o name com acento", "N2", (r) => montar(r, "narração", { skill: FM("", "narração") + CORPO }), "narração");
caso("o name com maiúscula", "N2", (r) => montar(r, "Narrar", { skill: FM("", "Narrar") + CORPO }), "Narrar");
caso("o name com 65 caracteres", "N2", (r) => montar(r, "a".repeat(65), { skill: FM("", "a".repeat(65)) + CORPO }), "a".repeat(65));
caso("o hífen dobrado", "N2", (r) => montar(r, "a--b", { skill: FM("", "a--b") + CORPO }), "a--b");
caso("o hífen no fim", "N2", (r) => montar(r, "a-b-", { skill: FM("", "a-b-") + CORPO }), "a-b-");
caso("o nome reservado", "N3", (r) => montar(r, "synced", { skill: FM("", "synced") + CORPO }), "synced");
caso("a pessoal com o mesmo nome", "N4", (r) => montar(r, "minha-pessoal", { skill: FM("", "minha-pessoal") + CORPO }), "minha-pessoal");
caso("sem o bloco do começo", "F2", (r) => montar(r, "x", { skill: CORPO }));
caso("o bloco sem fechar", "F2", (r) => montar(r, "x", { skill: FM("", "x").replace(/---\n$/, "") + CORPO }));
caso("o valor sem aspas com ': '", "F3", (r) => montar(r, "x", { skill: sub(/description: >-\n  (.*)\n/, "description: Faz isto: aquilo. Use quando a prova pedir.\n") }));
caso("o valor sem aspas com ' #'", "F3", (r) => montar(r, "x", { skill: sub(/description: >-\n  (.*)\n/, "description: Faz isto #2. Use quando a prova pedir.\n") }));
caso("a chave repetida", "F3", (r) => montar(r, "x", { skill: FM("name: x\n", "x") + CORPO }));
caso("sem a description", "D1", (r) => montar(r, "x", { skill: sub(/description: >-\n  .*\n/, "") }));
caso("a description com 351 caracteres", "D2", (r) => montar(r, "x", { skill: sub(/description: >-\n  .*\n/, `description: "Use ${"a".repeat(347)}"\n`) }));
caso("o when_to_use somando acima de 350", "D2", (r) => montar(r, "x", { skill: FM(`when_to_use: "${"b".repeat(300)}"\n`, "x") + CORPO }));
caso("a description com data", "D3", (r) => montar(r, "x", { skill: sub("Faz a coisa boa da prova.", "Faz a coisa boa desde 02/10/2026.") }));
caso("a description com ano", "D3", (r) => montar(r, "x", { skill: sub("Faz a coisa boa da prova.", "Faz a coisa boa de 2026.") }));
caso("a description sem dizer quando usar", "D4", (r) => montar(r, "x", { skill: sub("Use quando a prova pedir a skill boa", "Serve quando a prova pedir a skill boa") }));
caso("o campo inventado", "C1", (r) => montar(r, "x", { skill: FM("descricao: x\n", "x") + CORPO }));
caso("o allowed-tools", "C2", (r) => montar(r, "x", { skill: FM("allowed-tools: Bash Read\n", "x") + CORPO }));
caso("o hooks", "C2", (r) => montar(r, "x", { skill: FM("hooks:\n  PreToolUse:\n    - matcher: Bash\n", "x") + CORPO }));
caso("o fork sem agent", "C2", (r) => montar(r, "x", { skill: FM("context: fork\n", "x") + CORPO }));
caso("o fork com agent embutido", "C2", (r) => montar(r, "x", { skill: FM("context: fork\nagent: general-purpose\n", "x") + CORPO }));
caso("o fork com model", "C2", (r) => montar(r, "x", { skill: FM("context: fork\nagent: qc-visual\nmodel: opus\n", "x") + CORPO }));
caso("o fork com effort", "C2", (r) => montar(r, "x", { skill: FM("context: fork\nagent: qc-visual\neffort: high\n", "x") + CORPO }));
caso("o context que não é fork", "C3", (r) => montar(r, "x", { skill: FM("context: inline\n", "x") + CORPO }));
caso("o agent que não existe", "C4", (r) => montar(r, "x", { skill: FM("context: fork\nagent: mapista-inventado\n", "x") + CORPO }));
caso("o booleano em texto", "C5", (r) => montar(r, "x", { skill: FM('disable-model-invocation: "sim"\n', "x") + CORPO }));
caso("sem metadata.versao", "C6", (r) => montar(r, "x", { skill: sub('  versao: "1"\n', "") }));
caso("a data do metadata fora do formato", "C6", (r) => montar(r, "x", { skill: sub('atualizada: "2026-11-18"', 'atualizada: "18/11/2026"') }));
caso("a injeção de comando", "B1", (r) => montar(r, "x", { skill: sub("1. Faça.", "1. Faça !`git status`.") }));
caso("a injeção dentro de código em linha", "B1", (r) => montar(r, "x", { skill: sub("1. Faça.", "1. Faça `` !`regie queue` ``.") }));
caso("a injeção num bloco cercado", "B1", (r) => montar(r, "x", { skill: sub("1. Faça.", "1. Faça:\n\n```\n!`git status`\n```\n") }));
caso("o bloco cercado aberto com ```!", "B1", (r) => montar(r, "x", { skill: sub("1. Faça.", "1. Faça:\n\n```!\ngit status\n```\n") }));
caso("o fork com especialista sem a exceção do Lucas", "C7", (r) => montar(r, "x", { skill: FM("context: fork\nagent: qc-visual\n", "x") + CORPO }));
caso("o disable-model-invocation sem a exceção do Lucas", "C7", (r) => montar(r, "x", { skill: FM("disable-model-invocation: true\n", "x") + CORPO }));
caso("500 linhas", "B2", (r) => montar(r, "x", { skill: FM("", "x") + CORPO + "linha\n".repeat(480) }));
caso("sem o Pare se", "B3", (r) => montar(r, "x", { skill: sub(/## Pare se\n- uma;\n- duas;\n- três.\n/, "") }));
caso("o Pare se com 2 itens", "B3", (r) => montar(r, "x", { skill: sub("- três.\n", "") }));
caso("o Pare se com 7 itens", "B3", (r) => montar(r, "x", { skill: sub("- três.\n", "- três;\n- 4;\n- 5;\n- 6;\n- 7.\n") }));
caso("o Pare se depois das etapas", "B3", (r) => {
  const s = FM("", "x") + CORPO.replace(/## Pare se\n- uma;\n- duas;\n- três.\n\n/, "").replace("## Saída", "## Pare se\n- uma;\n- duas;\n- três.\n\n## Saída");
  return montar(r, "x", { skill: s });
});
caso("o Pare se longe do começo", "B3", (r) => montar(r, "x", { skill: FM("", "x") + CORPO.replace("**Quem roda:** a prova.\n", "**Quem roda:** a prova.\n\n" + "texto de enchimento antes do Pare se. ".repeat(340) + "\n") }));
caso("sem as Etapas", "B4", (r) => montar(r, "x", { skill: sub("## Etapas", "## Passos") }));
caso("sem a Saída", "B4", (r) => montar(r, "x", { skill: sub("## Saída", "## Resultado") }));
caso("sem o NÃO faz", "B4", (r) => montar(r, "x", { skill: sub("## O que esta skill NÃO faz", "## Limites") }));
caso("sem as Decisões", "B4", (r) => montar(r, "x", { skill: sub("## Decisões do Lucas que ela segue", "## Regras") }));
caso("sem as Lições", "B4", (r) => montar(r, "x", { skill: sub("## Lições (leia quando a etapa pedir)\n- `licoes.md`.", "## Notas") }));
caso("sem o Acima desta skill", "B4", (r) => montar(r, "x", { skill: sub("**Acima desta skill:**", "Acima:") }));
caso("sem o Quem roda", "B4", (r) => montar(r, "x", { skill: sub("**Quem roda:**", "Quem:") }));
caso("o Quem roda depois do Pare se", "B4", (r) => montar(r, "x", { skill: sub("**Quem roda:** a prova.\n", "").replace("## Antes de começar", "**Quem roda:** a prova.\n\n## Antes de começar") }));
caso("cita references/ que não existe", "B5", (r) => montar(r, "x", { skill: sub("1. Faça.", "1. Faça (ver `references/historico.md`).") }));
caso("cita o licoes.md que não existe", "B5", (r) => montar(r, "x", { lic: null }));
caso("sem o gatilhos.md", "G1", (r) => montar(r, "x", { gat: null }));
caso("o gatilhos.md com 2 que devem", "G2", (r) => montar(r, "x", { gat: GAT.replace('- "três"\n', "") }));
caso("o gatilhos.md com 1 vizinho", "G2", (r) => montar(r, "x", { gat: GAT.replace('- "cinco" → nenhuma\n', "") }));
caso("o gatilhos.md sem a seção dos vizinhos", "G2", (r) => montar(r, "x", { gat: GAT.replace("## Não devem acordar", "## Outros") }));
caso("a lição sem a Causa", "L1", (r) => montar(r, "x", { lic: LIC.replace("- **Causa:** c.\n", "") }));
caso("a lição sem a Origem", "L1", (r) => montar(r, "x", { lic: LIC.replace("- **Origem:** o.\n", "") }));

// a boa passa sem nenhum item
{
  const r = mkdtempSync(path.join(TMP, "boa-"));
  montar(r, "boa", { skill: FM("", "boa") + CORPO });
  writeFileSync(path.join(r, "INDICE.md"), indice([["boa"]]));
  const res = conferir({ raiz: r, pessoais: PESSOAIS, agentesDir: AGENTES });
  ok(res.ok && res.resultados[0].reprova.length === 0 && res.resultados[0].avisos.length === 0,
    `A · a skill boa devia passar sem itens: ${JSON.stringify(res.resultados[0]?.reprova)} ${JSON.stringify(res.resultados[0]?.avisos)}`);
  // o fork com especialista, sem model nem effort, e o disable-model-invocation passam só com a exceção do Lucas (C7)
  const r2 = mkdtempSync(path.join(TMP, "boa-fork-"));
  montar(r2, "boa", { skill: FM("context: fork\nagent: qc-visual\nbackground: false\ndisable-model-invocation: true\n", "boa") + CORPO });
  writeFileSync(path.join(r2, "INDICE.md"), indice([["boa"]]));
  const exc = { boa: { "C7:context": "prova", "C7:disable-model-invocation": "prova" } };
  const res2 = conferir({ raiz: r2, pessoais: PESSOAIS, agentesDir: AGENTES, excecoes: exc });
  ok(res2.ok, `A · o fork com agent: qc-visual e o disable-model-invocation, com a exceção, deviam passar: ${JSON.stringify(res2.resultados[0]?.reprova)}`);
  const res2b = conferir({ raiz: r2, pessoais: PESSOAIS, agentesDir: AGENTES, excecoes: { boa: { "C7:context": "prova" } } });
  ok(!res2b.ok && res2b.resultados[0].reprova.filter((x) => x.id === "C7").length === 1, "A · a exceção de um campo não cobre o outro (C7)");
  // o paths dá aviso, não reprova
  const r3 = mkdtempSync(path.join(TMP, "boa-paths-"));
  montar(r3, "boa", { skill: FM('paths: "out/*/graphics/*.html"\n', "boa") + CORPO });
  writeFileSync(path.join(r3, "INDICE.md"), indice([["boa"]]));
  const res3 = conferir({ raiz: r3, pessoais: PESSOAIS, agentesDir: AGENTES });
  ok(res3.ok && res3.resultados[0].avisos.some((x) => x.id === "C8"), "A · o paths devia passar com o aviso C8");
}
for (const c of casos) {
  const r = mkdtempSync(path.join(TMP, "caso-"));
  c.monta(r);
  writeFileSync(path.join(r, "INDICE.md"), indice([[c.nomePasta]]));
  const res = conferir({ raiz: r, pessoais: PESSOAIS, agentesDir: AGENTES });
  const s = res.resultados?.[0];
  const ids = s ? s.reprova.map((x) => x.id) : [];
  ok(s && !s.ok && ids.includes(c.codigo), `A · "${c.nome}" devia reprovar com ${c.codigo}; reprovou com [${ids.join(", ")}]`);
}
// o índice
{
  const r = mkdtempSync(path.join(TMP, "indice-"));
  montar(r, "boa", { skill: FM("", "boa") + CORPO });
  montar(r, "outra", { skill: FM("", "outra") + CORPO });
  const tenta = (txt) => { if (txt == null) rmSync(path.join(r, "INDICE.md"), { force: true }); else writeFileSync(path.join(r, "INDICE.md"), txt); return conferir({ raiz: r, pessoais: PESSOAIS, agentesDir: AGENTES }); };
  const codigos = (res) => (res.indice?.erros ?? []).map((x) => x.id);
  ok(tenta(indice([["boa"], ["outra"]])).ok, "A · o índice certo devia passar");
  ok(codigos(tenta(null)).includes("I1"), "A · sem o INDICE.md devia reprovar com I1");
  ok(codigos(tenta(indice([["boa"]]))).includes("I2"), "A · o índice sem uma skill devia reprovar com I2");
  ok(codigos(tenta(indice([["boa"], ["outra"], ["fantasma"]]))).includes("I2"), "A · o índice com skill sem pasta devia reprovar com I2");
  ok(codigos(tenta(indice([["boa", "2"], ["outra"]]))).includes("I3"), "A · a versão diferente no índice devia reprovar com I3");
  ok(codigos(tenta(indice([["boa", "1", "2026-11-17"], ["outra"]]))).includes("I3"), "A · a data diferente no índice devia reprovar com I3");
  const so = conferir({ raiz: r, pastas: [path.join(r, "boa")], pessoais: PESSOAIS, agentesDir: AGENTES });
  ok(so.ok && so.indice === null, "A · com só uma pasta pedida, o índice não se confere");
}

// ─── B · o legado ───────────────────────────────────────────────────────────────────────────────────────────────────────────────
const CACA = path.join(RAIZ_CANAL, ".claude", "skills", "cacar-no-chrome", "SKILL.md");
if (existsSync(CACA)) {
  const r = mkdtempSync(path.join(TMP, "legado-"));
  mkdirSync(path.join(r, "cacar-no-chrome"));
  copyFileSync(CACA, path.join(r, "cacar-no-chrome", "SKILL.md"));
  writeFileSync(path.join(r, "INDICE.md"), indice([["cacar-no-chrome", "—", "—"]]));
  const a = conferir({ raiz: r, pessoais: PESSOAIS, agentesDir: AGENTES });
  ok(a.ok && a.resultados[0].legado?.sha256_confere, "B · a cacar-no-chrome de hoje devia passar como legado");
  const e = conferir({ raiz: r, pessoais: PESSOAIS, agentesDir: AGENTES, estrito: true });
  ok(!e.ok, "B · com --estrito, o legado devia reprovar");
  writeFileSync(path.join(r, "cacar-no-chrome", "SKILL.md"), readFileSync(CACA, "utf8") + "\n");
  const m = conferir({ raiz: r, pessoais: PESSOAIS, agentesDir: AGENTES });
  ok(!m.ok && m.resultados[0].reprova.some((x) => x.id === "X1"), "B · a cacar-no-chrome mudada devia reprovar com X1 (a isenção vence)");
} else { erros++; total++; console.log("✗ B · não achei a cacar-no-chrome do canal para provar o legado"); }

// ─── C · a linha de comando e as skills do canal ────────────────────────────────────────────────────────────────────────────────
const cli = (...a) => spawnSync(process.execPath, [CONF, ...a], { cwd: RAIZ_CANAL, encoding: "utf8" });
{
  const r = mkdtempSync(path.join(TMP, "cli-"));
  montar(r, "boa", { skill: FM("", "boa") + CORPO });
  writeFileSync(path.join(r, "INDICE.md"), indice([["boa"]]));
  ok(cli(`--raiz=${r}`, `--pessoais=${PESSOAIS}`, `--agentes=${AGENTES}`).status === 0, "C · o CLI devia sair 0 com a skill boa");
  montar(r, "ruim", { skill: FM("", "ruim") + CORPO, gat: null });
  writeFileSync(path.join(r, "INDICE.md"), indice([["boa"], ["ruim"]]));
  ok(cli(`--raiz=${r}`, `--pessoais=${PESSOAIS}`, `--agentes=${AGENTES}`).status === 1, "C · o CLI devia sair 1 com uma skill ruim");
  ok(cli(`--raiz=${path.join(TMP, "nao-existe")}`).status === 2, "C · o CLI devia sair 2 com a pasta que não existe");
  ok(cli("--opcao-errada").status === 2, "C · o CLI devia sair 2 com a opção errada");
  const j = cli(`--raiz=${r}`, `--pessoais=${PESSOAIS}`, `--agentes=${AGENTES}`, "--json");
  let lido = null; try { lido = JSON.parse(j.stdout); } catch {}
  ok(lido && lido.ok === false && Array.isArray(lido.resultados), "C · o --json devia dar um JSON com ok e resultados");
}
rmSync(TMP, { recursive: true, force: true });
console.log(`${erros ? "✗" : "✓"} skills-conferir-provar: ${total - erros} de ${total} casos certos (${casos.length} malformadas, cada uma pelo código certo; a boa, o fork com a exceção e o paths; o índice; o legado; o CLI)`);

// O estado do canal: as skills de verdade de .claude/skills/. Não conta na prova (cético da Onda 0, C20): uma skill de prova
// posta ali pela Sala, por exemplo, reprova o estado sem que a ferramenta tenha defeito.
{
  const real = cli();
  console.log(`  estado do canal (não conta na prova): node ferramentas/skills-conferir.mjs saiu ${real.status}${real.status === 0 ? "" : `:\n${real.stdout}${real.stderr}`}`);
}
process.exit(erros ? 1 : 0);
