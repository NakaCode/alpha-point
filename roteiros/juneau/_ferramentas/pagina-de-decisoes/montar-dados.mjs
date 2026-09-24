// Confere e prepara os dados da página de decisões: cada "de" casa uma vez no texto final,
// aplica as trocas, mede palavras, faz o diff por palavra e roda o gate sobre o conjunto
// recomendado. Saída: dados.json (lido pelo HTML) e um relatório no console.
//   node montar-dados.mjs <roteiro-narrador.md> <saida.json>
import fs from "node:fs";
import crypto from "node:crypto";
import { ITENS, DEPOIS, REVISAO } from "./itens.mjs";

const [, , ARQ, SAI] = process.argv;
const bruto = fs.readFileSync(ARQ, "utf8").replace(/\r\n/g, "\n");
const paras = bruto.split(/\n{2,}/).map((p) => p.trim()).filter((p) => p && !p.startsWith("#") && !p.startsWith(">") && !p.startsWith("<!--"));
const corpo = paras.join("\n\n");
const sha = crypto.createHash("sha256").update(corpo).digest("hex");
if (!sha.startsWith(REVISAO)) throw new Error(`o texto no disco é ${sha.slice(0, 12)}, não ${REVISAO}`);

const palavras = (t) => t.split(/\s+/).filter(Boolean).length;
const frases = (t) => t.replace(/\s*\n+\s*/g, " ").split(/(?<=[.!?]["”’)]?)\s+(?=["“‘(]?[A-Z0-9$])/).filter((f) => f.trim());
const N0 = palavras(corpo);
const minuto = (idx) => { const w = palavras(corpo.slice(0, idx)); const s = Math.round((w / 155) * 60); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
const ocorr = (t, s) => t.split(s).length - 1;

function aplicar(texto, trocas, rotulo) {
  let t = texto;
  for (const x of trocas) {
    const n = ocorr(t, x.de);
    if (n !== 1) throw new Error(`${rotulo}: "${x.de.slice(0, 60)}…" casou ${n} vezes`);
    t = t.split(x.de).join(x.para);
  }
  return t;
}

// diff por palavra (LCS), com ¶ marcando parágrafo
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

// parágrafos afetados: os do original que somem e os novos que entram, em ordem
function trecho(novo) {
  const P0 = corpo.split("\n\n"), P1 = novo.split("\n\n");
  const s0 = new Set(P0), s1 = new Set(P1);
  // parágrafos que não são vizinhos ganham um marcador de salto, para a prévia não os colar
  const junta = (P, outro) => {
    const out = []; let ult = -1;
    P.forEach((p, i) => { if (outro.has(p)) return; if (ult >= 0 && i !== ult + 1) out.push(`[… ${i - ult - 1} ${i - ult - 1 === 1 ? "parágrafo" : "parágrafos"} …]`); out.push(p); ult = i; });
    return out.join("\n\n");
  };
  return { antes: junta(P0, s1), depois: junta(P1, s0) };
}

const PROMESSA = "The answer comes down to one line that showed up on later ballots: the price.";
const BANIDOS = [/\bshocking\b/i, /\binsane\b/i, /\bcrazy\b/i, /you won'?t believe/i, /mind-?blowing/i, /\bbreaking\b/i, /just happened/i, /\bthis week\b/i, /\byesterday\b/i, /\brecently\b/i, /experts say/i, /reports suggest/i, /some people believe/i, /sources claim/i, /\bregime\b/i, /\bwe need to\b/i, /\bevil\b/i, /\bis about to\b/i, /willow project/i, /\bthe only (u\.s\. |us |american )?state capital\b/i, /\bnearly \$?10 billion|\$9\.5 billion|\$4\.8 billion/i, /\b91,249\b|\b26,452\b/, /\bnon-?binding\b|\badvisory (vote|question)\b/i, /\bFrank Harris\b/];
function gate(t) {
  const duros = [], n = palavras(t), f = frases(t), media = n / f.length;
  if (n < 1600 || n > 1850) duros.push(`total ${n}`);
  if (media > 18) duros.push(`média ${media.toFixed(1)}`);
  for (const rx of BANIDOS) { const m = t.match(rx); if (m) duros.push(`vetado: ${m[0]}`); }
  for (const m of t.matchAll(/\bFrank\b(?! (committee|initiative))/g)) duros.push(`"Frank" solto`);
  const iw = t.search(/\bWillow\b/); const j = t.slice(Math.max(0, iw - 250), iw + 250);
  if (!/town of Willow/i.test(j) || !/Mat-Su/i.test(j)) duros.push("Willow sem 'town of Willow' e 'Mat-Su'");
  if (!t.includes(PROMESSA)) duros.push("promessa ausente");
  const longas = f.filter((x) => palavras(x) > 30).map((x) => `${palavras(x)}p: ${x.slice(0, 60)}…`);
  return { palavras: n, frases: f.length, media: +media.toFixed(1), duros, longas };
}

const dados = { revisao: REVISAO, palavras: N0, minutos: +(N0 / 155).toFixed(1), itens: [], depois: DEPOIS };
const rel = [];
for (const it of ITENS) {
  const idx = it.ancora ? corpo.indexOf(it.ancora) : -1;
  if (it.ancora && (idx < 0 || ocorr(corpo, it.ancora) !== 1)) throw new Error(`${it.id}: âncora "${it.ancora}" casou ${ocorr(corpo, it.ancora)} vezes`);
  if (!it.opcoes.some((o) => o.id === it.recomendado)) throw new Error(`${it.id}: recomendado inexistente`);
  const opcoes = it.opcoes.map((o) => {
    if (!o.trocas) return { id: o.id, rotulo: o.rotulo, nota: o.nota || "" };
    const novo = aplicar(corpo, o.trocas, `${it.id}/${o.id}`);
    const tr = trecho(novo), g = gate(novo);
    rel.push(`${it.id}/${o.id}: ${palavras(novo) - N0 >= 0 ? "+" : ""}${palavras(novo) - N0} palavras · gate ${g.duros.length ? g.duros.join("; ") : "ok"}${g.longas.length ? " · LONGAS: " + g.longas.join(" | ") : ""}`);
    return { id: o.id, rotulo: o.rotulo, nota: o.nota || "", delta: palavras(novo) - N0, diff: diff(tr.antes, tr.depois), antes: tr.antes, depois: tr.depois, gate: g.duros };
  });
  // sem troca: mostra o trecho de hoje (o parágrafo da âncora)
  let hoje = "";
  if (idx >= 0) { const ini = corpo.lastIndexOf("\n\n", idx) + 2; const fim = corpo.indexOf("\n\n", idx); hoje = corpo.slice(ini < 2 ? 0 : ini, fim < 0 ? undefined : fim); }
  dados.itens.push({ id: it.id, grupo: it.grupo, titulo: it.titulo, quem: it.quem, explicacao: it.explicacao, minuto: idx >= 0 ? minuto(idx) : "", hoje, opcoes, recomendado: it.recomendado, porque: it.porque });
}

// o conjunto recomendado, tudo junto
const recs = ITENS.flatMap((it) => (it.opcoes.find((o) => o.id === it.recomendado).trocas || []).map((x) => ({ ...x, it: it.id })));
const tudo = aplicar(corpo, recs, "recomendadas juntas");
const gT = gate(tudo);
dados.recomendadas = { trocas: recs.length, palavras: gT.palavras, minutos: +(gT.palavras / 155).toFixed(1), media: gT.media, gate: gT.duros };
fs.writeFileSync(SAI, JSON.stringify(dados, null, 1));
fs.writeFileSync(SAI.replace(/\.json$/, ".recomendado.txt"), tudo + "\n");
console.log(rel.join("\n"));
console.log(`\nhoje: ${N0} palavras (${(N0 / 155).toFixed(1)} min) · média ${gate(corpo).media}`);
console.log(`recomendadas juntas: ${recs.length} trocas · ${gT.palavras} palavras (${(gT.palavras / 155).toFixed(1)} min) · média ${gT.media} · gate ${gT.duros.length ? gT.duros.join("; ") : "ok"}${gT.longas.length ? " · LONGAS: " + gT.longas.join(" | ") : ""}`);
