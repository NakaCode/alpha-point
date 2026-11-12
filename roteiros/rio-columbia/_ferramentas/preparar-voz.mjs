// preparar-voz.mjs — a cópia do roteiro do vídeo 7 (`rio-columbia`, o lago que os EUA pagam ao Canadá para deixar vazio) para a voz
// (ElevenLabs v4): o texto final aprovado pelos conferentes (o r2 com o laudo de fatos fechado; o dono do canal delegou a aprovação
// deste roteiro a eles; sha12 do texto falado c4788c7ab3be em 12/11/2026, pelo gate.mjs), com a GRAFIA ajustada para a voz ler certo.
// Nenhuma palavra falada muda; muda só como ela se escreve: anos, números, decimais, milhares e porcentagens por extenso, e a sigla
// "US" com os pontos ("U.S."). Nenhum alias de nome entra: pela política de marca/pronuncias.md, alias só depois de o nome ser
// confirmado de ouvido e a voz errar na amostra (as regras de alias, se vierem, entram em ALIASES, com o motivo; os candidatos estão
// em roteiros/rio-columbia/pronuncia.md).
// O script lê o roteiro na hora em que roda: se o texto mudar (uma troca pequena do verificador de fatos), roda-se de novo, e as três
// saídas saem com o sha novo. Um número que nenhuma regra pega faz o script parar (a recusa de dígito), em vez de ir à voz.
// Deriva do do vídeo 6 (roteiros/praia-do-cassino/_ferramentas/preparar-voz.mjs), em 12/11/2026, pelo pedido da Sala de controle:
//   - muda o projeto e o "o_que" de out/rio-columbia/roteiro.md (o vídeo 7; a voz e o modelo saem agora do canal.json › narracao,
//     em vez de escritos à mão; um pedido por parágrafo, como no 6);
//   - SAI a regra "sigla" do g1 (só do Cassino; este texto não tem g1);
//   - ENTRA a regra "sigla" do US: "US" sem pontos ("the US Geological Survey's account", "the US Congressional Research Service",
//     3 vezes) vira "U.S.", a forma que as cópias para a voz dos vídeos 2 e 4 (zona-do-canal, atlantico-fundo) já usavam e que a voz
//     leu como as duas letras. Sem os pontos, "US" é também o pronome "us": a voz pode dizer "the us Geological Survey". Não é alias
//     (é a mesma fala, "you-ess", com a grafia de sempre da sigla), mas é a única troca que não é de número: se a Sala preferir a
//     grafia do roteiro, tira-se a regra (US_COM_PONTOS = false) e a amostra decide;
//   - ENTRA a regra "porcentagem" ("15%" → "fifteen percent"): este texto escreve "percent" por extenso e não a usa hoje; existe para
//     uma troca do verificador que escreva o sinal, que de outro modo pararia o script na recusa do "%";
//   - os números deste roteiro e a regra que os pega (a lista inteira, com o parágrafo, sai em voz/trocas.md):
//       · ano: 2025 (5 vezes: "the 2025 flood season", "since March 2025", "In January 2025", "In March 2025" duas vezes), 2027 (4:
//         "the spring of 2027", "the end of August 2027"), 1948, 1964 ("September 1964"), 2024 ("September 2024"), 1879 e 1967 ("From
//         1879 to 1967"), 2009 ("Since 2009": "two thousand nine"), 1956, 1941, 2026 (3: "September 2026", "August 2026", "November
//         2026") e 2029. O mês sem dia não muda (a 2ª regra de data não pega "March 2025": o "\d{1,2}" exige fronteira depois do dia);
//       · "X.Y million": 37.6 (duas vezes, uma com "dollars" e outra sem), 64.4 e 3.6 ("3.6 million acre-feet"): "thirty-seven point
//         six million"; o "dollars" e o "acre-feet" que vêm depois ficam como estão;
//       · milhar: 450,000 (2 vezes), 650,000, 600,000 (2 vezes) e 2,300 ("two thousand three hundred");
//       · número: 15 (2 vezes, "15 percent"), 60 (5 vezes: "About 60 percent" e os quatro "60 years"), 39 (2 vezes, "39 percent"), 87, 51, 42,
//         254 ("254 million dollars"), 30, 40 (2 vezes: "in 40 of 89 years" e "40 to 150 million"), 89, 4 e 34 ("between 4 and 34
//         million"), 150;
//       · os números que o roteiro já escreve por extenso (ten times, a third, three big storage dams, six springs, ten years', six
//         weeks, three and a half months, twice, a dozen, three flood seasons, the third) ficam como estão;
//   - as regras do molde que não têm caso aqui (data com dia, dólar com "$", ordinal com sufixo, década, a década abreviada '90s, o
//     decimal sem "million") FICAM: não mudam nada neste texto, e se uma troca do verificador trouxer um número desses, ele sai por
//     extenso em vez de parar o script (provado em 12/11/2026 numa cópia de rascunho do roteiro com uma linha a mais: "15%", "2.5%",
//     "$2.5 million", "$1,200", "May 3, 1990", "1990s", "'90s", "3rd", "1.75" e "US" saíram por extenso, e a volta passou);
//   - CONSERTA a regra do dólar do molde, que o teste acima pegou: "$2.5 million" saía "two dollars.five million" (os centavos pediam
//     dois dígitos, e o ".5" ficava para a regra de número), sem dígito que a recusa visse. Agora são duas regras (abaixo);
//   - fica todo o resto, sem mudança: a leitura dos parágrafos (a do gate.mjs), a prova da volta (desfeitas as trocas, o texto volta
//     byte a byte ao revisado), a recusa de dígito, "$", "%" ou colchete na cópia, e os três arquivos de saída.
//   node roteiros/rio-columbia/_ferramentas/preparar-voz.mjs      (cwd = raiz do canal)
// Saídas: roteiros/rio-columbia/voz/texto-para-voz.md (com o carimbo "Revisão do roteiro", que o gate.mjs --derivados confere) e
// trocas.md (com o "sha256 do texto falado", que ele também confere), e out/rio-columbia/roteiro.md (o que o narrar.mjs da pré-v1
// lê, com o "revisao_do_roteiro"). Não chama a API nem gasta crédito.
import fs from "node:fs";
import crypto from "node:crypto";

const PROJ = "rio-columbia";
const US_COM_PONTOS = true;
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
const decimais = (d) => [...d].map((x) => U[+x]).join(" ");
const MESES = "January|February|March|April|May|June|July|August|September|October|November|December";

// Os aliases de pronúncia (vazio até a amostra mostrar um erro de ouvido; marca/pronuncias.md e roteiros/rio-columbia/pronuncia.md).
const ALIASES = [];

const trocas = [];
const REGRAS = [
  ...ALIASES,
  ...(US_COM_PONTOS ? [{ tipo: "sigla", re: /\bUS\b(?!\.)/g, f: () => "U.S.",
    motivo: "a sigla com os pontos, como nas cópias dos vídeos 2 e 4: sem eles, \"US\" é também o pronome \"us\"" }] : []),
  { tipo: "data", re: new RegExp(String.raw`\b(${MESES}) (\d{1,2}), (\d{4})\b`, "g"),
    f: (m, mes, dia, a) => `${mes} ${ordinal(+dia)}, ${ano(+a)}`, motivo: "dia como ordinal, ano como se fala" },
  { tipo: "data", re: new RegExp(String.raw`\b(${MESES}) (\d{1,2})\b(?!,? ?\d)`, "g"),
    f: (m, mes, dia) => `${mes} ${ordinal(+dia)}`, motivo: "dia como ordinal" },
  // o dólar em duas regras (no molde era uma só, e "$2.5 million" saía "two dollars.five million", sem dígito que a recusa pegasse):
  // com "million"/"billion", o decimal de qualquer tamanho; sem, só centavos de dois dígitos, e o "$2.5" solto fica com o "$" e para
  // o script na recusa, em vez de ir à voz partido.
  { tipo: "dólar", re: /\$(\d{1,3}(?:,\d{3})*|\d+)(?:\.(\d+))? (million|billion)\b/g,
    f: (m, i, d, mag) => `${milhares(i)}${d ? " point " + decimais(d) : ""} ${mag} dollars`, motivo: "valor em dólar por extenso" },
  { tipo: "dólar", re: /\$(\d{1,3}(?:,\d{3})*|\d+)(?:\.(\d\d))?(?!\.?\d)/g,
    f: (m, i, c) => `${milhares(i)} dollar${+i.replace(/,/g, "") === 1 ? "" : "s"}${c && +c ? ` and ${ate99(+c)} cent${+c === 1 ? "" : "s"}` : ""}`,
    motivo: "valor em dólar por extenso" },
  { tipo: "porcentagem", re: /\b(\d{1,3})(?:\.(\d+))?\s?%/g, f: (m, i, d) => `${ate999(+i)}${d ? " point " + decimais(d) : ""} percent`,
    motivo: "porcentagem por extenso" },
  { tipo: "ordinal", re: /\b(\d{1,2})(?:st|nd|rd|th)\b/g, f: (m, n) => ordinal(+n), motivo: "ordinal por extenso" },
  { tipo: "número", re: /\b(\d+)\.(\d+) (million|billion)\b/g, f: (m, i, d, mag) => `${milhares(i)} point ${decimais(d)} ${mag}`, motivo: "número por extenso" },
  { tipo: "década", re: /\b(1[6-9]\d0|20\d0)s\b/g,
    f: (m, a) => { const w = ano(+a); return w.endsWith("y") ? w.slice(0, -1) + "ies" : w + "s"; }, motivo: "década como se fala" },
  { tipo: "década", re: /'([1-9])0s\b/g, f: (m, d) => ate99(+d * 10).slice(0, -1) + "ies", motivo: "década abreviada como se fala (o apóstrofo pode dar pausa na voz)" },
  { tipo: "ano", re: /\b(1[3-9]\d\d|20\d\d)\b(?!,\d)/g, f: (m, a) => ano(+a), motivo: "ano como se fala" },
  { tipo: "número", re: /\b(\d{1,3}(?:,\d{3})+)\b/g, f: (m, n) => milhares(n), motivo: "número por extenso" },
  { tipo: "número", re: /\b(\d+)\.(\d+)\b/g, f: (m, i, d) => `${milhares(i)} point ${decimais(d)}`, motivo: "decimal por extenso" },
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

const narracao = JSON.parse(fs.readFileSync("canal.json", "utf8")).narracao || {};
const NOMES_DE_VOZ = { "829pig94w9GefZ9jJQYl": "Alpha Point - Narrator (conversational, calm)" };
const vozDesc = `${narracao.model_id || "(sem model_id no canal.json)"}, voz ${NOMES_DE_VOZ[narracao.voice_id] ? `"${NOMES_DE_VOZ[narracao.voice_id]}" ` : ""}(${narracao.voice_id || "sem voice_id no canal.json"})`;

const textoVoz = voz.join("\n\n");
const sha12 = sha(narr).slice(0, 12);
fs.mkdirSync(`roteiros/${PROJ}/voz`, { recursive: true });
fs.writeFileSync(`roteiros/${PROJ}/voz/texto-para-voz.md`, `> Revisão do roteiro: \`${sha12}\`\n\n` + textoVoz + "\n");
const porTipo = {}; for (const x of trocas) porTipo[x.tipo] = (porTipo[x.tipo] || 0) + 1;
const outras = trocas.filter((x) => !["número", "ano", "data", "década", "ordinal", "dólar", "porcentagem"].includes(x.tipo)).length;
fs.writeFileSync(`roteiros/${PROJ}/voz/trocas.md`, [
  "# Cópia para a voz: as trocas", "",
  `> Gerado por \`_ferramentas/preparar-voz.mjs\` a partir de \`roteiro-narrador.md\` (sha256 do texto falado \`${sha12}\`).`,
  `> Cópia para a voz: \`texto-para-voz.md\` (sem a linha do carimbo), sha256 \`${sha(textoVoz).slice(0, 12)}\`, ${textoVoz.length} caracteres, ${voz.length} parágrafos.`,
  "> Prova: desfazendo cada troca abaixo, volta-se byte a byte ao texto revisado. Não sobrou dígito, `$`, `%` nem colchete.",
  `> Nenhuma palavra falada mudou; muda só a grafia. ${ALIASES.length ? ALIASES.length + " alias(es) de pronúncia, com o motivo." : "Nenhum alias de nome (política de `marca/pronuncias.md`)."}` +
    (outras ? ` Fora dos números, ${outras} troca(s) de grafia de sigla (o "US" com os pontos; o porquê no topo do script).` : ""), "",
  `**${trocas.length} trocas:** ${Object.entries(porTipo).map(([k, v]) => `${k} ${v}`).join(" · ")}`, "",
  "| § | Tipo | Revisado | Para a voz | Por quê |", "|---|---|---|---|---|",
  ...trocas.map((x) => `| ${x.paragrafo} | ${x.tipo} | ${x.de} | ${x.para} | ${x.motivo} |`), "",
].join("\n"));
fs.mkdirSync(`out/${PROJ}`, { recursive: true });
fs.writeFileSync(`out/${PROJ}/roteiro.md`, [
  "---", `projeto: ${PROJ}`,
  `o_que: a cópia para a voz do vídeo 7, o rio Columbia (${voz.length} parágrafos), ${vozDesc}, um pedido por parágrafo; é o que o narrar.mjs da pré-v1 lê`,
  `texto: idêntico a roteiros/${PROJ}/voz/texto-para-voz.md sem a linha do carimbo (sha256 ${sha(textoVoz).slice(0, 16)})`,
  `revisao_do_roteiro: ${sha12}`,
  "---", textoVoz, "",
].join("\n"));
console.log(`${trocas.length} trocas (${JSON.stringify(porTipo)}) · voz: ${textoVoz.length} caracteres, ${voz.length} parágrafos, sha ${sha(textoVoz).slice(0, 12)} · roteiro ${sha12}`);
