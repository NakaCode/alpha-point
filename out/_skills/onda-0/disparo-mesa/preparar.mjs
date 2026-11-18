#!/usr/bin/env node
// preparar.mjs — monta o teste de disparo de mesa (catálogo §1.4 e §1.7; cético de 08/10, §5; cético da Onda 0, C9): as
// descrições das skills e os pedidos dos gatilhos.md, embaralhados e sem as respostas. O gabarito vai para fora da pasta que o
// leitor lê (o scratchpad, passado em --gabarito=).
//
// Duas listas possíveis:
//   - sem --lista-real (as rodadas 1 a 3 da Onda 0): as 66 do catálogo §2, sem as notas [cético], com a descrição de verdade
//     das que existem em .claude/skills/. Leva o leitor a ver as 66 como se todas existissem, e nenhuma de fora do canal.
//   - com --lista-real=<transcrição.jsonl> (desde o cético da Onda 0): a lista que a conversa vê de verdade, o último anexo
//     "skill_listing" completo (isInitial) da transcrição, mais os avisos depois dele, com as skills de fora do canal e as que
//     aparecem só com o nome; as do canal com a descrição de hoje (sem as de prova); e, numa seção à parte, as do catálogo §2
//     que ainda não existem.
//
// Uso (cwd na raiz do canal):
//   node out/_skills/onda-0/disparo-mesa/preparar.mjs --gabarito=<arquivo.json> [--lista-real=<transcrição.jsonl>]
//        [--so=<skill,…>] [--sufixo=<n>]
//   --so: só os pedidos destas skills; --sufixo: grava descricoes<n>.md e pedidos<n>.md, para uma rodada nova.
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const AQUI = "out/_skills/onda-0/disparo-mesa";
const arg = (k) => process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3);
const gab = arg("gabarito");
if (!gab) { console.error("uso: node out/_skills/onda-0/disparo-mesa/preparar.mjs --gabarito=<arquivo.json> [--lista-real=<transcrição.jsonl>] [--so=<skill,…>] [--sufixo=<n>]"); process.exit(2); }
const { lerFrontmatter } = await import(pathToFileURL(path.resolve("ferramentas/skills-conferir.mjs")).href);

// 1. as descrições do catálogo §2.1 a §2.5
const cat = readFileSync("out/_skills/catalogo.md", "utf8");
const ini = cat.indexOf("### 2.1 "), fim = cat.indexOf("### 2.6 ");
const catalogo = new Map();
for (const l of cat.slice(ini, fim).split("\n")) {
  const m = l.match(/^\|\s*\d+\s*\|\s*`([a-z0-9-]+)`[^|]*\|\s*(.*?)\s*\|[^|]*\|[^|]*\|\s*$/);
  if (m) catalogo.set(m[1], m[2].replace(/\s*\[cético\][\s\S]*$/, "").trim());
}
// 2. as do canal que existem: a descrição do SKILL.md de hoje (sem as de prova)
const canal = new Map();
for (const d of readdirSync(".claude/skills", { withFileTypes: true })) {
  if (!d.isDirectory() || d.name.startsWith("prova-")) continue;
  const f = path.join(".claude/skills", d.name, "SKILL.md");
  if (!existsSync(f)) continue;
  const fm = lerFrontmatter(readFileSync(f, "utf8"));
  if (fm.campos?.description) canal.set(d.name, String(fm.campos.description).trim().replace(/\s+/g, " "));
}
// 3. a lista real: o último skill_listing completo e os avisos depois dele
function listaReal(transcricao) {
  const anexos = [];
  for (const linha of readFileSync(transcricao, "utf8").split("\n")) {
    if (!linha.includes('"skill_listing"')) continue;
    try { const o = JSON.parse(linha); if (o.attachment?.type === "skill_listing") anexos.push(o.attachment); } catch {}
  }
  const k = anexos.map((a) => a.isInitial).lastIndexOf(true);
  if (k < 0) throw new Error(`nenhum skill_listing completo em ${transcricao}`);
  const lista = new Map();
  for (const a of anexos.slice(k)) {
    let atual = null;
    for (const l of a.content.split("\n")) {
      const m = l.match(/^- ([A-Za-z0-9_.:-]+?)(?:: (.*))?$/);
      if (m) { atual = m[1]; lista.set(atual, (m[2] ?? "").trim()); }
      else if (atual && l.trim() && !/^The following skills/.test(l)) lista.set(atual, (lista.get(atual) + " " + l.trim()).trim());
    }
  }
  return lista;
}
let desc, aParte = null;
const real = arg("lista-real");
if (real) {
  desc = listaReal(real);
  for (const n of [...desc.keys()]) if (n.startsWith("prova-")) desc.delete(n);
  for (const [n, d] of canal) desc.set(n, d);
  aParte = new Map([...catalogo].filter(([n]) => !desc.has(n)));
} else {
  desc = new Map(catalogo);
  for (const [n, d] of canal) desc.set(n, d);
}
// 4. os pedidos dos gatilhos.md
const so = arg("so");
const suf = arg("sufixo") ?? "";
const novas = so ? so.split(",") : ["registrar-aprendizado-como-skill", "gerar-mapa-animado-maptiler", "editar-cena-html", "escrever-textos-de-tela"];
const pedidos = [];
for (const s of novas) {
  const g = readFileSync(path.join(".claude/skills", s, "gatilhos.md"), "utf8").replace(/\r\n?/g, "\n");
  let secao = null;
  for (const l of g.split("\n")) {
    if (/^## Devem acordar/.test(l)) secao = "deve";
    else if (/^## N[ãa]o devem acordar/.test(l)) secao = "nao";
    else if (/^## /.test(l)) secao = null;
    else if (secao && /^- "/.test(l)) {
      const texto = l.match(/^- "(.*?)"/)[1];
      const vai = secao === "deve" ? s : (l.match(/→\s*`([a-z0-9-]+)`/)?.[1] ?? "nenhuma");
      pedidos.push({ texto, esperado: vai, de: s, tipo: secao });
    }
  }
}
// embaralha de forma determinística (a ordem não segue a skill)
let semente = 20261118;
const rnd = () => ((semente = (semente * 1103515245 + 12345) % 2147483648) / 2147483648);
for (let i = pedidos.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [pedidos[i], pedidos[j]] = [pedidos[j], pedidos[i]]; }
pedidos.forEach((p, i) => (p.id = `P${String(i + 1).padStart(2, "0")}`));

const linhas = (m) => [...m.entries()].map(([n, d]) => (d ? `- \`${n}\`: ${d}` : `- \`${n}\``));
let txt;
if (aParte) {
  const so_nome = [...desc.values()].filter((d) => !d).length;
  txt = `# As skills\n\n## A lista que o Claude vê hoje (${desc.size} skills, na ordem da lista; ${so_nome} aparecem só com o nome, como na lista de verdade)\n\n${linhas(desc).join("\n")}\n\n## Do catálogo do canal, ainda não criadas (${aParte.size}): existirão; o pedido que for delas, aponte-as\n\n${linhas(new Map([...aParte].sort((a, b) => a[0].localeCompare(b[0])))).join("\n")}\n`;
} else {
  txt = `# As descrições das skills do canal (${desc.size})\n\nCada linha: o nome da skill e a descrição que o Claude lê para decidir se a usa.\n\n${linhas(new Map([...desc].sort((a, b) => a[0].localeCompare(b[0])))).join("\n")}\n`;
}
writeFileSync(path.join(AQUI, `descricoes${suf}.md`), txt);
writeFileSync(path.join(AQUI, `pedidos${suf}.md`), `# Os pedidos (${pedidos.length})\n\n${pedidos.map((p) => `- ${p.id}: "${p.texto}"`).join("\n")}\n`);
writeFileSync(gab, JSON.stringify(pedidos, null, 1));
console.log(`${desc.size} descrições${aParte ? ` na lista real e ${aParte.size} do catálogo à parte` : ""}, ${pedidos.length} pedidos; gabarito em ${gab}`);
