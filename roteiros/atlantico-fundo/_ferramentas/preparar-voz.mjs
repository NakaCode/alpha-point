// preparar-voz.mjs — a cópia do roteiro do vídeo 5 (o ponto mais fundo do Atlântico) para a voz (ElevenLabs v4): o texto revisado, com a
// GRAFIA ajustada para a voz ler certo. Nenhuma palavra falada muda; muda só como ela se escreve: datas, anos, números e
// valores em dólar por extenso. Nenhum alias de nome entra: pela política de marca/pronuncias.md, alias só depois de o nome
// ser confirmado de ouvido e a voz errar na amostra (as regras de alias, se vierem, entram em ALIASES, com o motivo).
// Deriva do do vídeo 2 (roteiros/los-angeles/_ferramentas/preparar-voz.mjs): sai a variante do gancho e as regras de TEU e
// do "never"; os ordinais valem de 1 a 31; entram o dólar e o decimal. O do vídeo 4 deriva do do vídeo 3
// (roteiros/zona-do-canal/_ferramentas/preparar-voz.mjs, 14/10/2026): muda o projeto e entra a década abreviada ("'90s").
// O do vídeo 5 deriva do do vídeo 4 (roteiros/peru-agua/_ferramentas/preparar-voz.mjs, 27/10/2026): muda o projeto, e a regra
// de ano passa a pegar 1300 a 1499 ("between 1381 and 1391", o tsunami de Anegada; roteiros/atlantico-fundo/pronuncia.md).
// O vídeo 5 sai pelo motor sem rosto: esta cópia é uma das duas entradas possíveis do portão "roteiro"; a outra é o
// roteiro-narrador.md, com algarismos (ferramentas/roteiro-motor.mjs converter --de=voz|narrador; requisitos §5).
//   node roteiros/atlantico-fundo/_ferramentas/preparar-voz.mjs      (cwd = raiz do canal)
// Saídas: roteiros/atlantico-fundo/voz/texto-para-voz.md (com o carimbo "Revisão do roteiro", que o gate.mjs --derivados
// confere) e trocas.md, e out/atlantico-fundo/roteiro.md (o que o narrar.mjs da pré-v1 leria; o motor não o lê).
import fs from "node:fs";
import crypto from "node:crypto";

const PROJ = "atlantico-fundo";
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
const paragrafos = paragrafosDe(fs.readFileSync(`roteiros/${PROJ}/roteiro-narrador.md`, "utf8"));
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
const ORD_U = { one: "first", two: "second", three: "third", five: "fifth", eight: "eighth", nine: "ninth", twelve: "twelfth" };
const ordinal = (n) => {
  if (n < 1 || n > 31) throw new Error("dia fora de 1–31: " + n);
  const w = ate99(n);
  const [cab, rabo] = w.includes("-") ? [w.slice(0, w.lastIndexOf("-") + 1), w.slice(w.lastIndexOf("-") + 1)] : ["", w];
  if (ORD_U[rabo]) return cab + ORD_U[rabo];
  if (rabo.endsWith("y")) return cab + rabo.slice(0, -1) + "ieth";
  return cab + rabo + "th";
};
const milhares = (s) => {
  const n = +s.replace(/,/g, "");
  if (n >= 1e6) throw new Error("número de milhão sem 'million': " + s);
  const a = Math.floor(n / 1000), b = n % 1000;
  return a ? `${ate999(a)} thousand${b ? " " + ate999(b) : ""}` : ate999(b);
};
const MESES = "January|February|March|April|May|June|July|August|September|October|November|December";

// Os aliases de pronúncia (vazio até a amostra mostrar um erro de ouvido; marca/pronuncias.md).
const ALIASES = [];

const trocas = [];
const REGRAS = [
  ...ALIASES,
  { tipo: "data", re: new RegExp(String.raw`\b(${MESES}) (\d{1,2}), (\d{4})\b`, "g"),
    f: (m, mes, dia, a) => `${mes} ${ordinal(+dia)}, ${ano(+a)}`, motivo: "dia como ordinal, ano como se fala" },
  { tipo: "data", re: new RegExp(String.raw`\b(${MESES}) (\d{1,2})\b(?!,? ?\d)`, "g"),
    f: (m, mes, dia) => `${mes} ${ordinal(+dia)}`, motivo: "dia como ordinal" },
  { tipo: "dólar", re: /\$(\d{1,3}(?:,\d{3})*|\d+)(?:\.(\d\d))?( (?:million|billion))?/g,
    f: (m, i, c, mag) => mag ? `${milhares(i)}${c ? " point " + [...c].map((d) => U[+d]).join(" ") : ""}${mag} dollars`
      : `${milhares(i)} dollar${+i.replace(/,/g, "") === 1 ? "" : "s"}${c && +c ? ` and ${ate99(+c)} cent${+c === 1 ? "" : "s"}` : ""}`,
    motivo: "valor em dólar por extenso" },
  { tipo: "ordinal", re: /\b(\d{1,2})(?:st|nd|rd|th)\b/g, f: (m, n) => ordinal(+n), motivo: "ordinal por extenso" },
  { tipo: "número", re: /\b(\d+)\.(\d+) (million|billion)\b/g, f: (m, i, d, mag) => `${milhares(i)} point ${[...d].map((x) => U[+x]).join(" ")} ${mag}`, motivo: "número por extenso" },
  { tipo: "década", re: /\b(1[6-9]\d0|20\d0)s\b/g,
    f: (m, a) => { const w = ano(+a); return w.endsWith("y") ? w.slice(0, -1) + "ies" : w + "s"; }, motivo: "década como se fala" },
  { tipo: "década", re: /'([1-9])0s\b/g, f: (m, d) => ate99(+d * 10).slice(0, -1) + "ies", motivo: "década abreviada como se fala (o apóstrofo pode dar pausa na voz)" },
  { tipo: "ano", re: /\b(1[3-9]\d\d|20\d\d)\b(?!,\d)/g, f: (m, a) => ano(+a), motivo: "ano como se fala" },
  { tipo: "número", re: /\b(\d{1,3}(?:,\d{3})+)\b/g, f: (m, n) => milhares(n), motivo: "número por extenso" },
  { tipo: "número", re: /\b(\d+)\.(\d+)\b/g, f: (m, i, d) => `${milhares(i)} point ${[...d].map((x) => U[+x]).join(" ")}`, motivo: "decimal por extenso" },
  { tipo: "número", re: /\b(\d{1,3})\b/g, f: (m, n) => ate999(+n), motivo: "número por extenso" },
];
// Cada troca guarda a posição dela no texto logo depois da sua passada; desfeitas na ordem inversa, as posições valem.
const aplicar = (texto, i) => {
  let t = texto;
  for (const r of REGRAS) {
    let delta = 0;
    t = t.replace(r.re, (...a) => {
      const para = r.f(...a), off = a.find((x, k) => k > 0 && typeof x === "number");
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
const sha12 = sha(narr).slice(0, 12);
fs.mkdirSync(`roteiros/${PROJ}/voz`, { recursive: true });
fs.writeFileSync(`roteiros/${PROJ}/voz/texto-para-voz.md`, `> Revisão do roteiro: \`${sha12}\`\n\n` + textoVoz + "\n");
const porTipo = {}; for (const x of trocas) porTipo[x.tipo] = (porTipo[x.tipo] || 0) + 1;
fs.writeFileSync(`roteiros/${PROJ}/voz/trocas.md`, [
  "# Cópia para a voz: as trocas", "",
  `> Gerado por \`_ferramentas/preparar-voz.mjs\` a partir de \`roteiro-narrador.md\` (sha256 do texto falado \`${sha12}\`).`,
  `> Cópia para a voz: \`texto-para-voz.md\` (sem a linha do carimbo), sha256 \`${sha(textoVoz).slice(0, 12)}\`, ${textoVoz.length} caracteres, ${voz.length} parágrafos.`,
  "> Prova: desfazendo cada troca abaixo, volta-se byte a byte ao texto revisado. Não sobrou dígito, `$`, `%` nem colchete.",
  `> Nenhuma palavra falada mudou; muda só a grafia. ${ALIASES.length ? ALIASES.length + " alias(es) de pronúncia, com o motivo." : "Nenhum alias de nome (política de `marca/pronuncias.md`)."}`, "",
  `**${trocas.length} trocas:** ${Object.entries(porTipo).map(([k, v]) => `${k} ${v}`).join(" · ")}`, "",
  "| § | Tipo | Revisado | Para a voz | Por quê |", "|---|---|---|---|---|",
  ...trocas.map((x) => `| ${x.paragrafo} | ${x.tipo} | ${x.de} | ${x.para} | ${x.motivo} |`), "",
].join("\n"));
fs.mkdirSync(`out/${PROJ}`, { recursive: true });
fs.writeFileSync(`out/${PROJ}/roteiro.md`, [
  "---", `projeto: ${PROJ}`,
  `o_que: a cópia para a voz do vídeo 5 (${voz.length} parágrafos), eleven_v4, voz "Alpha Point - Narrator (conversational, calm)" (829pig94w9GefZ9jJQYl), um pedido por parágrafo; o vídeo 5 é narrado pelo motor sem rosto, que não lê este arquivo`,
  `texto: idêntico a roteiros/${PROJ}/voz/texto-para-voz.md sem a linha do carimbo (sha256 ${sha(textoVoz).slice(0, 16)})`,
  `revisao_do_roteiro: ${sha12}`,
  "---", textoVoz, "",
].join("\n"));
console.log(`${trocas.length} trocas (${JSON.stringify(porTipo)}) · voz: ${textoVoz.length} caracteres, ${voz.length} parágrafos, sha ${sha(textoVoz).slice(0, 12)} · roteiro ${sha12}`);
