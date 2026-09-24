// Dados da página da rodada 7 (o tom de conversa): um item por parágrafo reescrito (ou por parte, se a
// reescrita mudou o número de parágrafos dela), com o texto de hoje, o novo, o diff por palavra e o porquê
// de cada troca de frase. Confere que cada "de" casa uma vez no roteiro aprovado e roda o gate sobre o
// conjunto todo. Saída: dados.json (lido pelo HTML), dados.recomendado.txt e um relatório no console.
//   node montar-dados.mjs <roteiro-narrador.md> <r7-itens.json> <r7-result.json> <r6-secoes.json> <saida.json>
import fs from "node:fs";
import crypto from "node:crypto";

const REVISAO = "c8677c8e3318";
const [, , ARQ, ITENS, RES, SECS, SAI] = process.argv;
const bruto = fs.readFileSync(ARQ, "utf8").replace(/\r\n/g, "\n");
const paras = bruto.split(/\n{2,}/).map((p) => p.trim()).filter((p) => p && !p.startsWith("#") && !p.startsWith(">") && !p.startsWith("<!--"));
const corpo = paras.join("\n\n");
const sha = crypto.createHash("sha256").update(corpo).digest("hex");
if (!sha.startsWith(REVISAO)) throw new Error(`o texto no disco é ${sha.slice(0, 12)}, não ${REVISAO}`);
const itens = JSON.parse(fs.readFileSync(ITENS, "utf8"));
const W = JSON.parse(fs.readFileSync(RES, "utf8")); const R = W.result ?? W;
const secs = JSON.parse(fs.readFileSync(SECS, "utf8"));

const palavras = (t) => t.split(/\s+/).filter(Boolean).length;
const frases = (t) => t.replace(/\s*\n+\s*/g, " ").split(/(?<=[.!?]["”’)]?)\s+(?=["“‘(]?[A-Z0-9$])/).filter((f) => f.trim());
const N0 = palavras(corpo);
const minuto = (idx) => { const w = palavras(corpo.slice(0, idx)); const s = Math.round((w / 155) * 60); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
const ocorr = (t, s) => t.split(s).length - 1;
function aplicar(texto, trocas, rotulo) {
  let t = texto;
  for (const x of trocas) { const n = ocorr(t, x.de); if (n !== 1) throw new Error(`${rotulo}: "${x.de.slice(0, 60)}…" casou ${n} vezes`); t = t.split(x.de).join(x.para); }
  return t;
}
function diff(a, b) {
  const A = a.replace(/\n\n/g, " ¶ ").split(/\s+/).filter(Boolean), B = b.replace(/\n\n/g, " ¶ ").split(/\s+/).filter(Boolean);
  const m = A.length, n = B.length, L = Array.from({ length: m + 1 }, () => new Int32Array(n + 1));
  for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) L[i][j] = A[i] === B[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const out = []; let i = 0, j = 0;
  const push = (k, w) => { const u = out[out.length - 1]; if (u && u[0] === k) u[1] += " " + w; else out.push([k, w]); };
  while (i < m && j < n) { if (A[i] === B[j]) { push("=", A[i]); i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) push("-", A[i++]); else push("+", B[j++]); }
  while (i < m) push("-", A[i++]); while (j < n) push("+", B[j++]);
  return out;
}
const PROMESSA = "The answer comes down to one line that showed up on later ballots: the price.";
const BANIDOS = [/\bshocking\b/i, /\binsane\b/i, /\bcrazy\b/i, /you won'?t believe/i, /mind-?blowing/i, /\bbreaking\b/i, /just happened/i, /\bthis week\b/i, /\byesterday\b/i, /\brecently\b/i, /experts say/i, /reports suggest/i, /some people believe/i, /sources claim/i, /\bregime\b/i, /\bour (enemies|allies|country|state)\b/i, /\bwe need to\b/i, /\bevil\b/i, /\bis about to\b/i, /willow project/i, /\bthe only (u\.s\. |us |american )?state capital\b/i, /only state (on the planet|in the (country|nation|union))/i, /\bnearly \$?10 billion|\$9\.5 billion|\$4\.8 billion/i, /\b91,249\b|\b26,452\b/, /\bnon-?binding\b|\badvisory (vote|question)\b/i, /\bFrank Harris\b/];
const DATA = /^(In|On|By|Since|From|Until|Through|Back in) (early |late |mid-)?((January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2}, )?)?(1[89]\d\d|20\d\d)\b/;
function gate(t) {
  const duros = [], n = palavras(t), f = frases(t), media = n / f.length;
  if (n < 1600 || n > 1850) duros.push(`total ${n}`);
  if (media > 18) duros.push(`média ${media.toFixed(1)}`);
  for (const rx of BANIDOS) { const m = t.match(rx); if (m) duros.push(`vetado: ${m[0]}`); }
  for (const m of t.matchAll(/\bFrank\b(?! (committee|initiative))/g)) duros.push(`"Frank" solto`);
  const iw = t.search(/\bWillow\b/); const j = t.slice(Math.max(0, iw - 250), iw + 250);
  if (!/town of Willow/i.test(j) || !/Mat-Su/i.test(j)) duros.push("Willow sem 'town of Willow' e 'Mat-Su'");
  if (!t.includes(PROMESSA)) duros.push("promessa ausente");
  let fila = 0; for (const x of f) { fila = DATA.test(x.trim()) ? fila + 1 : 0; if (fila === 3) duros.push(`três datas em fila: ${x.slice(0, 50)}`); }
  const longas = f.filter((x) => palavras(x) > 30).map((x) => `${palavras(x)}p: ${x.slice(0, 60)}…`);
  return { palavras: n, frases: f.length, media: +media.toFixed(1), duros, longas };
}

// o porquê de cada troca de frase: as trocas do redator (e das correções) cujo "para" sobreviveu no texto final
const porques = (secId, novo) => {
  const w = R.secoes.find((x) => x && x.id === secId) || {};
  const vistos = new Set();
  return (w.trocas || []).filter((t) => t.de !== t.para && t.para && novo.includes(t.para) && !vistos.has(t.para) && vistos.add(t.para)).map((t) => ({ de: t.de, para: t.para, porque: t.porque || "" }));
};

const dados = { fatos: R.fatos || "", revisao: REVISAO, palavras: N0, minutos: +(N0 / 155).toFixed(1), secoes: [], itens: [] };
const rel = [];
for (const s of secs) {
  const doSec = itens.filter((it) => it.secao === s.id);
  if (doSec.length) dados.secoes.push({ id: s.id, titulo: s.titulo_estrutural, paragrafos: s.paragrafos.length });
}
for (const it of itens) {
  const idx = corpo.indexOf(it.de);
  if (idx < 0 || ocorr(corpo, it.de) !== 1) throw new Error(`${it.id}: o texto de hoje casou ${ocorr(corpo, it.de)} vezes`);
  const novo = aplicar(corpo, [it], it.id);
  const delta = palavras(novo) - N0;
  const k = it.id.includes("-") ? +it.id.split("-")[1] : 0;
  const ps = porques(it.secao, it.para);
  rel.push(`${it.id}: ${delta >= 0 ? "+" : ""}${delta} palavras · ${ps.length} porquês`);
  // dependência de outra parte (achada na leitura final): a frase deste parágrafo que só funciona se a outra ficar
  const avisos = (R.dependencias || []).filter((d) => d.frase && it.para.includes(d.frase)).map((d) => `“${d.frase}” depende de ${d.depende_de}. Se lá ficar a de hoje, eu ajusto: ${d.se_faltar}`);
  dados.itens.push({ id: it.id, secao: it.secao, paragrafo: k, minuto: minuto(idx), hoje: it.de, nova: it.para, delta, diff: diff(it.de, it.para), porques: ps, avisos, recomendado: "nova" });
}
const tudo = aplicar(corpo, itens, "todas as novas");
const gT = gate(tudo);
dados.recomendadas = { trocas: itens.length, palavras: gT.palavras, minutos: +(gT.palavras / 155).toFixed(1), media: gT.media, gate: gT.duros };
dados.hoje = { media: gate(corpo).media };
// a cópia para a voz de hoje tem 11.065 caracteres; a nova, na mesma proporção do texto
const creditos = Math.round((tudo.length * 11065) / corpo.length / 100) * 100;
dados.creditos = creditos;
dados.depois = [
  { titulo: "Aplico as suas escolhas", texto: "Troco no roteiro só os parágrafos que você marcou. A fonte de cada frase segue junto com ela, como hoje." },
  { titulo: "Confiro o texto inteiro de novo", texto: "O conjunto passa pelo portão de sempre: o tamanho, as palavras vetadas, as datas em fila e a promessa da abertura. Se você misturou os dois textos, confiro também a passagem de um parágrafo para o outro." },
  { titulo: "Gero a narração", texto: `Com a voz “Alpha Point - Narrator (conversational)”, no v3 em modo Creative, em 3 blocos, com 2 versões de cada. São uns ${creditos.toLocaleString("pt-BR")} créditos, contados sobre o texto novo; você tinha aprovado uns 11.100, contados sobre o de hoje. Você ouve e escolhe a versão de cada bloco.` },
  { titulo: "O download dos áudios", texto: "O navegador do app corta os arquivos em 1,8 MB, e cada bloco tem uns 4 MB. Antes de gerar, combino com você um jeito de baixar os áudios inteiros." },
];
fs.writeFileSync(SAI, JSON.stringify(dados, null, 1));
fs.writeFileSync(SAI.replace(/\.json$/, ".recomendado.txt"), tudo + "\n");
console.log(rel.join("\n"));
console.log(`\nhoje: ${N0} palavras (${(N0 / 155).toFixed(1)} min) · média ${dados.hoje.media}`);
console.log(`todas as novas: ${itens.length} itens · ${gT.palavras} palavras (${(gT.palavras / 155).toFixed(1)} min) · média ${gT.media} · gate ${gT.duros.length ? gT.duros.join("; ") : "ok"}${gT.longas.length ? " · LONGAS: " + gT.longas.join(" | ") : ""}`);
