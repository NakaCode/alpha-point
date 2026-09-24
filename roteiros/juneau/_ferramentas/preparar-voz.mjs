// Gera a cópia do roteiro para a voz (ElevenLabs, eleven_v3): o texto aprovado, com a GRAFIA ajustada
// para a voz ler certo. Nenhuma palavra falada muda. Muda só como ela se escreve: números, datas e dinheiro
// por extenso, as pronúncias confirmadas pelo dono (marca/pronuncias.md) e hífens que viram pausa.
// Alias só entra quando o nome foi confirmado de ouvido e a grafia normal leva a voz a errar; os outros
// aliases da folha ficam de reserva, para o caso de a amostra errar (política em marca/pronuncias.md).
//   node preparar-voz.mjs            (de dentro de roteiros/juneau/_ferramentas)
// Saídas, em roteiros/juneau/voz/: texto-para-voz.md, trocas.md e amostra.md.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const AQUI = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const RAIZ = path.join(AQUI, "..");
const SAI = path.join(RAIZ, "voz");
const SHA_APROVADO = "c8677c8e3318";

const R = JSON.parse(fs.readFileSync(path.join(RAIZ, "roteiro.json"), "utf8"));
const paragrafos = R.secoes.flatMap((s) => s.paragrafos);
const narr = paragrafos.join("\n\n");
const sha = (t) => crypto.createHash("sha256").update(t).digest("hex");
if (!sha(narr).startsWith(SHA_APROVADO)) throw new Error(`o roteiro.json não é a revisão aprovada (${SHA_APROVADO})`);

// --- número por extenso, do jeito que se fala em inglês dos EUA ----------------------------------------
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
const ORD = { 27: "twenty-seventh" };

// --- as regras, em ordem. Cada troca feita fica registrada em trocas.md ----------------------------------
const trocas = [];
const REGRAS = [
  // pronúncias confirmadas de ouvido pelo dono (marca/pronuncias.md, 24/09/2026)
  { tipo: "pronúncia", re: /\bGladziszewski\b/g, f: () => "Gladyshevsky", motivo: "ouvido na KTOO e dito por ela mesma" },
  { tipo: "pronúncia", re: /\bKiehl\b/g, f: () => "Keel", motivo: "ouvido na KTOO e dito por ele mesmo" },
  { tipo: "pronúncia", re: /\bKTOO\b/g, f: () => "Kay-too", motivo: "a emissora diz K + \"too\"" },
  { tipo: "pronúncia", re: /\bMat-Su\b/g, f: () => "Mat-Sue", motivo: "ouvido pelo dono como \"mat-siu\"" },
  // sigla que se soletra (marca/pronuncias.md)
  { tipo: "sigla", re: /\bNFL\b/g, f: () => "N F L", motivo: "sigla soletrada no ar" },
  // hífens e juntas que a voz pode ler com pausa longa ou separar (roteiros/juneau/pronuncia.md)
  { tipo: "grafia", re: /\bwinner-take-all\b/g, f: () => "winner take all", motivo: "evitar pausa longa nos hífens" },
  { tipo: "grafia", re: /\btime consuming\b/g, f: () => "time-consuming", motivo: "ler junto, como uma palavra" },
  // data com dia: o inglês dos EUA fala o ordinal
  { tipo: "data", re: /\b(January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2}), (\d{4})\b/g,
    f: (m, mes, dia, a) => { if (!ORD[+dia]) throw new Error("ordinal faltando: " + dia); return `${mes} ${ORD[+dia]}, ${ano(+a)}`; }, motivo: "dia como ordinal, ano como se fala" },
  // dinheiro
  { tipo: "dinheiro", re: /\$(\d+)\.(\d) (million|billion)\b/g, f: (m, i, d, e) => `${ate999(+i)} point ${U[+d]} ${e} dollars`, motivo: "dinheiro por extenso" },
  { tipo: "dinheiro", re: /\$(\d{1,3}) (million|billion)\b/g, f: (m, i, e) => `${ate999(+i)} ${e} dollars`, motivo: "dinheiro por extenso" },
  // anos de quatro dígitos (1800–2099)
  { tipo: "ano", re: /\b(1[89]\d\d|20\d\d)\b/g, f: (m, a) => ano(+a), motivo: "ano como se fala" },
  // o que sobrar: contagens e porcentagens de até três dígitos
  { tipo: "número", re: /\b(\d{1,3})\b/g, f: (m, n) => ate999(+n), motivo: "número por extenso" },
];

const aplicar = (texto, i) => {
  let t = texto;
  for (const r of REGRAS) {
    t = t.replace(r.re, (...a) => {
      const para = r.f(...a);
      trocas.push({ paragrafo: i + 1, tipo: r.tipo, de: a[0], para, motivo: r.motivo });
      return para;
    });
  }
  return t;
};
const voz = paragrafos.map(aplicar);

// --- conferências ------------------------------------------------------------------------------------
const sobra = voz.join("\n\n").match(/[\d$%]/g);
if (sobra) throw new Error("ficou dígito, $ ou % no texto: " + [...new Set(sobra)].join(" "));
// fora das trocas, o texto tem de ser idêntico: desfaz cada troca e compara com o aprovado
let volta = voz.map((p, i) => {
  let t = p;
  for (const x of trocas.filter((x) => x.paragrafo === i + 1).reverse()) {
    const k = t.lastIndexOf(x.para);
    if (k < 0) throw new Error("troca não achada na volta: " + x.para);
    t = t.slice(0, k) + x.de + t.slice(k + x.para.length);
  }
  return t;
}).join("\n\n");
if (volta !== narr) throw new Error("a volta das trocas não reproduz o texto aprovado");

// --- saídas ------------------------------------------------------------------------------------------
fs.mkdirSync(SAI, { recursive: true });
const textoVoz = voz.join("\n\n");
const carac = textoVoz.length;
fs.writeFileSync(path.join(SAI, "texto-para-voz.md"), textoVoz + "\n");

const porTipo = {};
for (const x of trocas) porTipo[x.tipo] = (porTipo[x.tipo] || 0) + 1;
const T = [
  "# Cópia para a voz: as trocas",
  "",
  `> Gerado por \`_ferramentas/preparar-voz.mjs\` a partir da revisão aprovada \`${SHA_APROVADO}\` (\`roteiro.json\`).`,
  `> Cópia para a voz: \`texto-para-voz.md\`, sha256 \`${sha(textoVoz).slice(0, 12)}\`, ${carac} caracteres.`,
  "> Prova: desfazendo cada troca abaixo, volta-se byte a byte ao texto aprovado. Não sobrou dígito, `$` nem `%`.",
  "> Nenhuma palavra falada mudou; muda só a grafia. As pronúncias vêm de `marca/pronuncias.md`.",
  "",
  `**${trocas.length} trocas:** ${Object.entries(porTipo).map(([k, v]) => `${k} ${v}`).join(" · ")}`,
  "",
  "| § | Tipo | Aprovado | Para a voz | Por quê |",
  "|---|---|---|---|---|",
  ...trocas.map((x) => `| ${x.paragrafo} | ${x.tipo} | ${x.de} | ${x.para} | ${x.motivo} |`),
  "",
];
fs.writeFileSync(path.join(SAI, "trocas.md"), T.join("\n"));

// a amostra para as 3 vozes (o dono autorizou uns 700 caracteres por voz): frases inteiras, copiadas da
// cópia para a voz, escolhidas para testar o que a voz pode errar (conferência de 24/09):
// - nomes cujo alias ainda não foi aplicado, e a amostra decide: Taku, Lynn Canal, fjord, Wasilla, Juneau's;
// - os "a confirmar" de marca/pronuncias.md: Rae (o de maior risco), Dittman;
// - os aliases já aplicados: Mat-Sue, Keel, Kay-too, Gladyshevsky;
// - "fifty-two percent to forty-five" (a voz não pode inventar "percent" no fim), Frank e duas citações.
// Ficam para a primeira escuta da narração inteira: N F L, o dinheiro por extenso e o par de anos.
const textoCorrido = voz.join(" ");
const FRASES = [
  ["That leaves two corridors: the Taku River valley to the east, and Lynn Canal to the north.",
    "Lynn Canal is a long fjord between steep mountains, not a dug canal."],
  ["They passed the Frank initiative, with nearly fifty-six percent.",
    "A Dittman Research poll in late September had the move ahead, fifty-two percent to forty-five.",
    "In nineteen ninety, state labor economist Brian Rae wrote that the expense \"finally persuaded voters to reject the plans.\""],
  ["The new site was Wasilla, another Mat-Sue Valley town, and the ballot carried no price."],
  ["Juneau's state senator, Jesse Keel, told Kay-too in twenty twenty-five: \"It's a little bit like a zombie movie. It's never all the way dead.\"",
    "Assembly member Maria Gladyshevsky voted no."],
];
for (const f of FRASES.flat()) if (!textoCorrido.includes(f)) throw new Error("a frase da amostra não está na cópia: " + f);
const amostra = FRASES.map((g) => g.join(" ")).join("\n\n");
fs.writeFileSync(path.join(SAI, "amostra.md"), [
  "# Amostra para as 3 vozes",
  "",
  `> ${amostra.length} caracteres por voz (o dono autorizou uns 700). Frases inteiras da cópia para a voz, fora da ordem`,
  "> do vídeo. Testam os nomes cujo alias ainda não foi aplicado (Taku, Lynn Canal, fjord, Wasilla, Juneau's), os \"a",
  "> confirmar\" (Rae, Dittman), os aliases já aplicados (Mat-Sue, Keel, Kay-too, Gladyshevsky), \"fifty-two percent to",
  "> forty-five\", Frank e duas citações. N F L, o dinheiro por extenso e o par de anos ficam para a primeira escuta da",
  "> narração inteira.",
  "",
  amostra,
  "",
].join("\n"));

console.log(`${trocas.length} trocas (${JSON.stringify(porTipo)}) · voz: ${carac} caracteres, sha ${sha(textoVoz).slice(0, 12)} · amostra: ${amostra.length} caracteres`);
