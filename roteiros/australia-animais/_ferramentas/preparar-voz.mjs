// preparar-voz.mjs — a cópia do roteiro do vídeo 8 (`australia-animais`, a Austrália dos bichos venenosos e das poucas mortes) para a
// voz (ElevenLabs v4): o texto aprovado pelo Lucas (o r2 com as duas trocas de uma frase do verificador de fatos; à pergunta "Pode ir para
// a voz?", "Pode seguir (Recomendado)", 18/11/2026, ~21:2x, em roteiros/australia-animais/decisoes-lucas.md; sha12 do texto falado
// bfd94a54b442, pelo gate.mjs), com a GRAFIA ajustada para a voz ler certo.
// Nenhuma palavra falada muda; muda só como ela se escreve: anos, números e milhares por extenso, e o número colado à sigla da dose
// ("LD50") por extenso e separado dela. Nenhum alias de nome entra: pela política de marca/pronuncias.md, alias só depois de o nome ser
// confirmado de ouvido e a voz errar na amostra (as regras de alias, se vierem, entram em ALIASES, com o motivo; os candidatos estão
// em roteiros/australia-animais/pronuncia.md).
// O script lê o roteiro na hora em que roda: se o texto mudar (uma troca pequena do verificador de fatos), roda-se de novo, e as três
// saídas saem com o sha novo. Um número que nenhuma regra pega faz o script parar (a recusa de dígito), em vez de ir à voz.
// Deriva do do vídeo 7 (roteiros/rio-columbia/_ferramentas/preparar-voz.mjs), em 18/11/2026, pelo pedido da Sala de controle
// (roteiros/australia-animais/_trabalho/pedido-voz.md):
//   - muda o projeto e o "o_que" de out/australia-animais/roteiro.md (o vídeo 8; a voz e o modelo continuam saindo do canal.json ›
//     narracao; um pedido por parágrafo, como no 6 e no 7);
//   - SAI a regra "sigla" do US (e a constante US_COM_PONTOS): o texto falado deste roteiro não tem "US" nem "U.S." (o único "US" do
//     arquivo é o "en-US" de uma linha de citação, que não vai à voz). Se uma troca do verificador trouxer a sigla, a regra volta do
//     vídeo 7, com o porquê dela;
//   - ENTRA a regra "sigla com número" (o caso: "what scientists call the LD50", uma vez, no §26). Sem ela o script parou na recusa
//     (rodado em 18/11/2026: "ficou dígito, $, %, × ou colchete no texto: 5 0 (em §26 "LD50.")"): o "50" colado às letras não tem
//     fronteira de palavra antes dele, e nenhuma regra de número o pegava. A dose letal mediana se lê pelas letras e pelo número, "L-D-fifty"
//     (Dictionary.com, LD50: "median lethal dose"; o Wiktionary: "The amount of a substance required to kill half of a given population";
//     nenhum dos dois dá a pronúncia, e a Merriam-Webster recusou a leitura automática, 403: a forma é a hipótese da folha de pronúncia).
//     A sigla fica como está, e o número sai por extenso, separado dela por um espaço: "LD fifty". A regra pega só as siglas de dose da
//     toxicologia (LD, LC e ED, com 1 a 3 dígitos, que se leem todas assim): uma sigla de modelo ("A380", "F150", "W56") não se lê pelo
//     número cardinal, e continua parando na recusa;
//   - a recusa ganha o "×" (o pedido da Sala) e diz onde sobrou o caractere: dígito, "$", "%", "×" ou colchete na cópia param o script;
//   - os números deste roteiro e a regra que os pega (a lista inteira, com o parágrafo, sai em voz/trocas.md):
//       · ano: 2016 e 2025 ("from 2016 to 2025", §3), 2025 ("an average month of 2025", §3), 1979 ("In 1979", §26), 2017 ("By 2017",
//         §28: "twenty seventeen"), 2021 ("At the 2021 census", §29), 2005 e 2015 ("from 2005 to 2015", §36), 2005 ("By a 2005 count",
//         §43), 1930 ("since 1930", §39: "nineteen thirty"), 1981 ("Before 1981", §47), 1956 ("in 1956", §48), 1822 ("in 1822", §51:
//         "eighteen twenty-two"), 1971 ("in 1971", §54) e 2026 ("In January 2026", §58; o mês sem dia não muda: a 2ª regra de data não
//         pega "January 2026", o "\d{1,2}" exige fronteira depois do dia);
//       · os anos que têm duas leituras seguem a do molde, a dos vídeos de antes: de 2001 a 2009, "two thousand" e o algarismo (2005 →
//         "two thousand five", como o 2009 do vídeo 7, "two thousand nine", e o 2002 e o 2003 do vídeo 4); de 2010 em diante, aos pares
//         (2015 → "twenty fifteen", como no vídeo 4; 2016 → "twenty sixteen" e 2017 → "twenty seventeen", como no Juneau e, o 2017, no
//         vídeo 5; 2025 e 2026 como no 6 e no 7). Os vídeos 6 e 7 não tinham ano de 2010 a 2019; a regra é a mesma do molde;
//       · faixa de anos: as duas pontas pela regra do ano, e o "from … to" fica: "from twenty sixteen to twenty twenty-five" (§3) e
//         "from two thousand five to twenty fifteen" (§36; as duas leituras de cima na mesma faixa, como a fala americana comum);
//       · milhar: 12,000 ("about 12,000 times", §9: "twelve thousand"), 117,000 ("about 117,000 square miles", §29: "one hundred seventeen
//         thousand") e 58,000 ("about 58,000 snakebite deaths", §37: "fifty-eight thousand");
//       · "X million" sem decimal: a regra do número solto pega o algarismo, e o "million" fica: "Some 80 to 85 million years ago" (§14:
//         "eighty to eighty-five million"), 45 (§15), "25 to 30 million" (§18), 23 (§21), 15 (§23), "almost 20 million people" (§34) e
//         "150 to 200 million years" (§45: "one hundred fifty to two hundred million"). Não há "X.Y million" neste texto;
//       · número: 85 ("killed 85 people", §3), 35 e 42 (§7), 23 ("counted 23 deaths", §36), 70 (§43), 13 (§47 e §54), 14 (§48), 154
//         (§52: "one hundred fifty-four"), 202 (§55: "two hundred two"), 150 ("about 150 milkings", §58) e 40 ("more than 40 years ago",
//         §59);
//       · sigla com número: LD50 (§26: "LD fifty", a regra nova, acima);
//       · os números que o roteiro já escreve por extenso (two in three, ten years, eight deaths, one at a time, one in three million, one in
//         five, a dozen, Only three, a thousand people, every hundred square miles, a thousand times, Seventeen, three or four a year,
//         hundreds of times, fewer than a hundred, more than a thousand, half, a single vial, tens of millions, the past few million
//         years) ficam como estão;
//   - as regras do molde que não têm caso aqui (data com dia, as duas do dólar com "$", porcentagem, ordinal com sufixo, década, a década
//     abreviada '90s, o "X.Y million" e o decimal sem "million") FICAM: não mudam nada neste texto, e se uma troca do verificador trouxer um
//     número desses, ele sai por extenso em vez de parar o script (provado em 18/11/2026 numa cópia de rascunho do roteiro com um
//     parágrafo a mais, em out/australia-animais/_tmp/voz/prova/: "15%", "2.5%", "$2.5 million", "$1,200", "May 3, 1990", "1990s",
//     "'90s", "3rd", "1.75", "64.4 million", "LC50" e "ED50" saíram por extenso, e a volta passou; e três rascunhos com um caso só, "an
//     A380", "3×" e "[pause]", pararam na recusa, como devem);
//   - fica todo o resto, sem mudança: a leitura dos parágrafos (a do gate.mjs), a prova da volta (desfeitas as trocas, o texto volta
//     byte a byte ao revisado), a recusa e os três arquivos de saída.
//   node roteiros/australia-animais/_ferramentas/preparar-voz.mjs      (cwd = raiz do canal)
// Saídas: roteiros/australia-animais/voz/texto-para-voz.md (com o carimbo "Revisão do roteiro", que o gate.mjs --derivados confere) e
// trocas.md (com o "sha256 do texto falado", que ele também confere), e out/australia-animais/roteiro.md (o que o narrar.mjs da pré-v1
// lê, com o "revisao_do_roteiro"). Não chama a API nem gasta crédito.
import fs from "node:fs";
import crypto from "node:crypto";

const PROJ = "australia-animais";
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

// Os aliases de pronúncia (vazio até a amostra mostrar um erro de ouvido; marca/pronuncias.md e roteiros/australia-animais/pronuncia.md).
const ALIASES = [];

const trocas = [];
const REGRAS = [
  ...ALIASES,
  // a sigla de dose da toxicologia com o número colado (LD50, LC50, ED50): o número não tem fronteira de palavra antes dele, e nenhuma
  // regra de número o pegaria; a sigla fica, o número sai por extenso, separado dela (o porquê no topo)
  { tipo: "sigla com número", re: /\b(LD|LC|ED)(\d{1,3})\b/g, f: (m, s, n) => `${s} ${ate999(+n)}`,
    motivo: "a dose da toxicologia se lê pelas letras e pelo número (L-D-fifty): a sigla como está, o número por extenso, separado dela" },
  { tipo: "data", re: new RegExp(String.raw`\b(${MESES}) (\d{1,2}), (\d{4})\b`, "g"),
    f: (m, mes, dia, a) => `${mes} ${ordinal(+dia)}, ${ano(+a)}`, motivo: "dia como ordinal, ano como se fala" },
  { tipo: "data", re: new RegExp(String.raw`\b(${MESES}) (\d{1,2})\b(?!,? ?\d)`, "g"),
    f: (m, mes, dia) => `${mes} ${ordinal(+dia)}`, motivo: "dia como ordinal" },
  // o dólar em duas regras (o conserto do vídeo 7: com "million"/"billion", o decimal de qualquer tamanho; sem, só centavos de dois
  // dígitos, e o "$2.5" solto fica com o "$" e para o script na recusa, em vez de ir à voz partido)
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
const sobra = voz.join("\n\n").match(/[\d$%×[\]]/g);
if (sobra) {
  const onde = voz.flatMap((p, i) => [...p.matchAll(/\S*[\d$%×[\]]\S*/g)].map((m) => `§${i + 1} "${m[0]}"`));
  throw new Error("ficou dígito, $, %, × ou colchete no texto: " + [...new Set(sobra)].join(" ") + " (em " + onde.join(", ") + ")");
}
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
const NUMERICOS = ["número", "ano", "data", "década", "ordinal", "dólar", "porcentagem"];
const outras = trocas.filter((x) => !NUMERICOS.includes(x.tipo));
fs.writeFileSync(`roteiros/${PROJ}/voz/trocas.md`, [
  "# Cópia para a voz: as trocas", "",
  `> Gerado por \`_ferramentas/preparar-voz.mjs\` a partir de \`roteiro-narrador.md\` (sha256 do texto falado \`${sha12}\`).`,
  `> Cópia para a voz: \`texto-para-voz.md\` (sem a linha do carimbo), sha256 \`${sha(textoVoz).slice(0, 12)}\`, ${textoVoz.length} caracteres, ${voz.length} parágrafos.`,
  "> Prova: desfazendo cada troca abaixo, volta-se byte a byte ao texto revisado. Não sobrou dígito, `$`, `%`, `×` nem colchete.",
  `> Nenhuma palavra falada mudou; muda só a grafia. ${ALIASES.length ? ALIASES.length + " alias(es) de pronúncia, com o motivo." : "Nenhum alias de nome (política de `marca/pronuncias.md`)."}` +
    (outras.length ? ` Fora dos números puros, ${outras.length} troca(s) de sigla com número (${[...new Set(outras.map((x) => `"${x.de}" → "${x.para}"`))].join(", ")}; o porquê no topo do script).` : ""), "",
  `**${trocas.length} trocas:** ${Object.entries(porTipo).map(([k, v]) => `${k} ${v}`).join(" · ")}`, "",
  "| § | Tipo | Revisado | Para a voz | Por quê |", "|---|---|---|---|---|",
  ...trocas.map((x) => `| ${x.paragrafo} | ${x.tipo} | ${x.de} | ${x.para} | ${x.motivo} |`), "",
].join("\n"));
fs.mkdirSync(`out/${PROJ}`, { recursive: true });
fs.writeFileSync(`out/${PROJ}/roteiro.md`, [
  "---", `projeto: ${PROJ}`,
  `o_que: a cópia para a voz do vídeo 8, os bichos venenosos da Austrália (${voz.length} parágrafos), ${vozDesc}, um pedido por parágrafo; é o que o narrar.mjs da pré-v1 lê`,
  `texto: idêntico a roteiros/${PROJ}/voz/texto-para-voz.md sem a linha do carimbo (sha256 ${sha(textoVoz).slice(0, 16)})`,
  `revisao_do_roteiro: ${sha12}`,
  "---", textoVoz, "",
].join("\n"));
console.log(`${trocas.length} trocas (${JSON.stringify(porTipo)}) · voz: ${textoVoz.length} caracteres, ${voz.length} parágrafos, sha ${sha(textoVoz).slice(0, 12)} · roteiro ${sha12}`);
