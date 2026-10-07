// preparar-voz.mjs — a cópia do roteiro do vídeo 2 para a voz (ElevenLabs v4): o texto revisado, com a GRAFIA ajustada
// para a voz ler certo. Nenhuma palavra falada muda; muda só como ela se escreve: datas, anos e números por extenso, e a
// sigla TEU soletrada (roteiros/los-angeles/pronuncia.md). Nenhum alias de nome entra: pela política de marca/pronuncias.md,
// alias só depois de o nome ser confirmado de ouvido e a voz errar na amostra. Deriva do do Juneau
// (roteiros/juneau/_ferramentas/preparar-voz.mjs), lendo o roteiro-narrador.md como o gate.mjs e o narrar.mjs o leem.
//   node roteiros/los-angeles/_ferramentas/preparar-voz.mjs [--gancho=hoje]      (cwd = raiz do canal)
// Saídas: roteiros/los-angeles/voz/texto-para-voz.md e trocas.md, e out/los-angeles/roteiro.md (o que o narrar.mjs lê).
// Com --gancho=hoje, os dois parágrafos do gancho vêm de roteiros/los-angeles/variantes/gancho-hoje.md.
import fs from "node:fs";
import crypto from "node:crypto";

const GANCHO_HOJE = process.argv.includes("--gancho=hoje");
const sha = (t) => crypto.createHash("sha256").update(t).digest("hex");
const paragrafosDe = (bruto) => {
  const out = []; let buf = [], emCom = false;
  for (const l of bruto.replace(/^﻿/, "").replace(/\r\n?/g, "\n").split("\n")) {
    let t = l;
    if (emCom) { if (t.includes("-->")) { emCom = false; t = t.slice(t.indexOf("-->") + 3); } else continue; }
    t = t.replace(/<!--.*?-->/g, "");
    if (t.includes("<!--")) { emCom = true; t = t.slice(0, t.indexOf("<!--")); }
    if (/^\s*#/.test(t) || /^\s*>/.test(t) || !t.trim()) { if (buf.length) { out.push(buf.join(" ")); buf = []; } continue; }
    buf.push(t.trim());
  }
  if (buf.length) out.push(buf.join(" "));
  return out;
};
let paragrafos = paragrafosDe(fs.readFileSync("roteiros/los-angeles/roteiro-narrador.md", "utf8"));
if (GANCHO_HOJE) {
  const v = paragrafosDe(fs.readFileSync("roteiros/los-angeles/variantes/gancho-hoje.md", "utf8"));
  if (v.length !== 2) throw new Error(`a variante tem ${v.length} parágrafos, não 2`);
  paragrafos = [...v, ...paragrafos.slice(2)];
}
const narr = paragrafos.join("\n\n");

const U = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
  "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const D = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const ate99 = (n) => (n < 20 ? U[n] : D[Math.floor(n / 10)] + (n % 10 ? "-" + U[n % 10] : ""));
const ate999 = (n) => (n < 100 ? ate99(n) : U[Math.floor(n / 100)] + " hundred" + (n % 100 ? " " + ate99(n % 100) : ""));
const ano = (n) => {
  if (n === 2000) return "two thousand";
  if (n > 2000 && n < 2010) return "two thousand " + U[n - 2000];
  const a = Math.floor(n / 100), b = n % 100;
  if (b === 0) return ate99(a) + " hundred";
  if (b < 10) return ate99(a) + " oh-" + U[b];
  return ate99(a) + " " + ate99(b);
};
const ORD = { 1: "first", 4: "fourth", 8: "eighth", 12: "twelfth", 26: "twenty-sixth", 28: "twenty-eighth" };
const MESES = "January|February|March|April|May|June|July|August|September|October|November|December";

const trocas = [];
const REGRAS = [
  { tipo: "sigla", re: /\bTEU\b/g, f: () => "T E U", motivo: "sigla soletrada (pronuncia.md; Wiktionary: initialism)" },
  // 07/10/2026: na 1ª narração, o alinhamento da ElevenLabs pôs o "never" entre aspas do trecho 10 uns 0,3 s depois do som
  // (o ingest-local recusou o relógio: vão com voz de 0,32 s entre "his" e "never"). A voz não fala as aspas: elas saem só
  // aqui, e o trecho 10 se refaz. O "never," do trecho 11 alinhou certo e fica como está.
  { tipo: "grafia", re: /what his "never" measured/g, f: () => "what his never measured", motivo: "aspas que a voz não fala; o alinhamento as cobrava em tempo (trecho 10, 1ª narração)" },
  { tipo: "data", re: new RegExp(String.raw`\b(${MESES}) (\d{1,2}), (\d{4})\b`, "g"),
    f: (m, mes, dia, a) => { if (!ORD[+dia]) throw new Error("ordinal faltando: " + dia); return `${mes} ${ORD[+dia]}, ${ano(+a)}`; }, motivo: "dia como ordinal, ano como se fala" },
  { tipo: "data", re: new RegExp(String.raw`\b(${MESES}) (\d{1,2})\b(?!,? ?\d)`, "g"),
    f: (m, mes, dia) => { if (!ORD[+dia]) throw new Error("ordinal faltando: " + dia); return `${mes} ${ORD[+dia]}`; }, motivo: "dia como ordinal" },
  { tipo: "número", re: /\b(\d+)\.(\d) million\b/g, f: (m, i, d) => `${ate999(+i)} point ${U[+d]} million`, motivo: "número por extenso" },
  { tipo: "ano", re: /\b(1[6-9]\d\d|20\d\d)\b/g, f: (m, a) => ano(+a), motivo: "ano como se fala" },
  { tipo: "número", re: /\b(\d{1,3}),(\d{3})\b/g, f: (m, a, b) => `${ate999(+a)} thousand${+b ? " " + ate999(+b) : ""}`, motivo: "número por extenso" },
  { tipo: "número", re: /\b(\d{1,3})\b/g, f: (m, n) => ate999(+n), motivo: "número por extenso" },
];
// Cada troca guarda a posição dela no texto logo depois da sua passada; desfeitas na ordem inversa, as posições valem.
const aplicar = (texto, i) => {
  let t = texto;
  for (const r of REGRAS) {
    let delta = 0;
    t = t.replace(r.re, (...a) => {
      const para = r.f(...a), off = a[a.length - 2];
      trocas.push({ paragrafo: i + 1, tipo: r.tipo, de: a[0], para, motivo: r.motivo, pos: off + delta });
      delta += para.length - a[0].length;
      return para;
    });
  }
  return t;
};
const voz = paragrafos.map(aplicar);
const sobra = voz.join("\n\n").match(/[\d$%[\]]/g);
if (sobra) throw new Error("ficou dígito, $, % ou colchete no texto: " + [...new Set(sobra)].join(" "));
const volta = voz.map((p, i) => {
  let t = p;
  for (const x of trocas.filter((x) => x.paragrafo === i + 1).reverse()) {
    if (t.slice(x.pos, x.pos + x.para.length) !== x.para) throw new Error("troca não achada na volta: " + x.para);
    t = t.slice(0, x.pos) + x.de + t.slice(x.pos + x.para.length);
  }
  return t;
}).join("\n\n");
if (volta !== narr) throw new Error("a volta das trocas não reproduz o texto revisado");

const textoVoz = voz.join("\n\n");
fs.mkdirSync("roteiros/los-angeles/voz", { recursive: true });
fs.writeFileSync("roteiros/los-angeles/voz/texto-para-voz.md", textoVoz + "\n");
const porTipo = {}; for (const x of trocas) porTipo[x.tipo] = (porTipo[x.tipo] || 0) + 1;
fs.writeFileSync("roteiros/los-angeles/voz/trocas.md", [
  "# Cópia para a voz: as trocas", "",
  `> Gerado por \`_ferramentas/preparar-voz.mjs\` a partir de \`roteiro-narrador.md\` (sha256 do texto falado \`${sha(narr).slice(0, 12)}\`, gancho ${GANCHO_HOJE ? "de hoje (variante)" : "de 1906"}).`,
  `> Cópia para a voz: \`texto-para-voz.md\`, sha256 \`${sha(textoVoz).slice(0, 12)}\`, ${textoVoz.length} caracteres, ${voz.length} parágrafos.`,
  "> Prova: desfazendo cada troca abaixo, volta-se byte a byte ao texto revisado. Não sobrou dígito, `$`, `%` nem colchete.",
  "> Nenhuma palavra falada mudou; muda só a grafia. Nenhum alias de nome (política de `marca/pronuncias.md`).", "",
  `**${trocas.length} trocas:** ${Object.entries(porTipo).map(([k, v]) => `${k} ${v}`).join(" · ")}`, "",
  "| § | Tipo | Revisado | Para a voz | Por quê |", "|---|---|---|---|---|",
  ...trocas.map((x) => `| ${x.paragrafo} | ${x.tipo} | ${x.de} | ${x.para} | ${x.motivo} |`), "",
].join("\n"));
fs.mkdirSync("out/los-angeles", { recursive: true });
fs.writeFileSync("out/los-angeles/roteiro.md", [
  "---", "projeto: los-angeles",
  `o_que: a narração do vídeo 2 (${voz.length} parágrafos), pela API, eleven_v4, voz "Alpha Point - Narrator (conversational, calm)" (829pig94w9GefZ9jJQYl), um pedido por parágrafo`,
  `texto: idêntico a roteiros/los-angeles/voz/texto-para-voz.md (sha256 ${sha(textoVoz).slice(0, 16)}); gancho ${GANCHO_HOJE ? "de hoje (variante)" : "de 1906"}`,
  `revisao_do_roteiro: ${sha(narr).slice(0, 12)}`,
  "---", textoVoz, "",
].join("\n"));
console.log(`${trocas.length} trocas (${JSON.stringify(porTipo)}) · voz: ${textoVoz.length} caracteres, ${voz.length} parágrafos, sha ${sha(textoVoz).slice(0, 12)} · roteiro ${sha(narr).slice(0, 12)}`);
