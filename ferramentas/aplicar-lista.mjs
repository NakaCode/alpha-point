#!/usr/bin/env node
// aplicar-lista.mjs — o aplicador da lista fechada do roteiro, com provas (item 4 do estudo de roteiro,
// out/_analises/estudo-roteiro/cetico.md). Genérico para qualquer vídeo; estende o aplicar-r2.mjs do vídeo 2
// (roteiros/los-angeles/_ferramentas/aplicar-r2.mjs), em que cada "de" casa uma vez, senão nada se grava.
//
//   node ferramentas/aplicar-lista.mjs <proj> --lista=<arquivo.json> [--seco] [--raiz=roteiros]
//   (cwd = raiz do canal; --raiz só para a prova, que trabalha numa cópia: os arquivos ficam em <raiz>/<proj>/)
//
// A lista:
//   {"proj", "rodada", "revisao_julgada": "<sha12 do texto falado que a bancada julgou>",
//    "revisoes_julgadas": {"variantes/x.md": "<sha12>"}   (só se algum item mexe numa variante),
//    "itens": [{"id", "op", "arquivo": "roteiro-narrador.md" | "<variante>", "parte"?, "de", "para", "lentes",
//               "numerais_permitidos": [], "numerais_removidos": [], "aspas_removidas"?: [], "aspas_novas"?: [],
//               "editor": [{"de", "para"}]}]}
//   op: CORTAR, ESTREITAR, ENFRAQUECER, ATRIBUIR, REORDENAR, DA-PAUTA (= DO-DOSSIE), DA-FONTE, REDIZER, PEDIR.
//   Não existe "afirmar". PEDIR sem "para" não se aplica: vai a "pendentes ao escritor" e a saída é 3. PEDIR com
//   "para" é a resposta do escritor (Fable) e se aplica como troca, com todas as provas.
//
// O texto falado é o que o gate.mjs do vídeo lê: tudo menos o título "# …", as linhas "> …", os comentários <!-- -->
// e as linhas em branco; parágrafos separados por linha em branco, cada um com as linhas aparadas e juntadas por um
// espaço; o sha256 é o do texto dos parágrafos juntados por "\n\n". Se roteiros/<proj>/_ferramentas/gate.mjs existe,
// a ferramenta o roda antes e depois e confere que o sha dele é o mesmo (se não for, sai 2: a leitura divergiu).
//
// Recusa (exit 1, sem gravar nada) se:
//   sha     o sha do texto falado de agora não é o "revisao_julgada";
//   casa    algum "de" não casa exatamente uma vez no arquivo (na ordem da lista, sobre o texto já trocado);
//   (a)     as aspas (trechos entre aspas retas ou curvas) não ficam idênticas e na mesma ordem, menos as que um item
//           declara mudar (aspas_removidas / aspas_novas). Compara-se o conteúdo, sem a pontuação final de dentro
//           (o "never" de antes e o "never," de depois são a mesma citação: é a vírgula da norma americana);
//   (b)     os numerais (dígito e por extenso em inglês, inclusive "a hundred", "and a half" e os ordinais) do depois
//           não são os de antes, menos os "numerais_removidos", mais os "numerais_permitidos" de cada item; e, item a
//           item, o saldo de numerais no trecho dele (lido no texto falado, com o numeral inteiro que toca o trecho) não
//           é o que ele declara (um número que sai de uma frase e entra noutra, por dois itens, não se compensa).
//           REDIZER que muda a ordem dos numerais só avisa;
//   (c)     um parágrafo falado mudou (ou sumiu, ou entrou) sem conter um "de" (o parágrafo dono); uma frase do diff
//           ficou sem item que a explique; ou o "parte" declarado no item não é a parte (<!-- pN -->) do dono;
//   (d)     um item REDIZER traz número, data, nome próprio (palavra com maiúscula fora do início de frase, ou no
//           início de frase quando o próprio texto a escreve com maiúscula no meio de outra frase) ou grupo de
//           pessoas que o "de" não tinha, ou declara "aspas_novas" (citação nova não é o mesmo dito de outro jeito);
//   (e)     um par do "editor" não casa exatamente uma vez em roteiros/<proj>/roteiro-editor.md;
//   lista   a lista tem item sem id, op fora da lista fechada, "de" vazio, arquivo fora de roteiros/<proj>/ (o caminho
//           se normaliza e se compara sem caixa: "./roteiro-narrador.md" é o roteiro, e "Roteiro-Editor.md" é o editor).
// Na (a), a citação declarada que o texto tem mais de uma vez vale em qualquer das posições.
//
// Sem --seco: copia o roteiro para roteiros/<proj>/_trabalho/roteiro-<rodada>.antes.md (o editor para
// roteiro-editor-<rodada>.antes.md, a variante para <nome>-<rodada>.antes.md; a rodada 1 vira "r1"),
// confere o sha256 da cópia, grava, relê e confere. Saída: JSON no stdout (itens aplicados, pendentes, provas, sha
// antes e depois, o diff frase a frase com o id de cada diferença); um resumo legível no stderr.
// Exit: 0 aplicado (ou seco ok) · 1 recusado · 2 não rodou · 3 há PEDIR pendente (nada se grava).
import { readFileSync, writeFileSync, existsSync, mkdirSync, unlinkSync } from "node:fs";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const OPS = ["CORTAR", "ESTREITAR", "ENFRAQUECER", "ATRIBUIR", "REORDENAR", "DA-PAUTA", "DO-DOSSIE", "DA-FONTE", "REDIZER", "PEDIR"];
const sha256 = (s) => createHash("sha256").update(s).digest("hex");

// ---------------------------------------------------------------- a leitura do texto falado (a do gate.mjs) ----
// Cada pedaço carrega, ao lado do texto, a posição de cada caractere no arquivo cru (-1 no espaço que junta linhas).
const fatiar = (t, a, b = t.s.length) => ({ s: t.s.slice(a, b), m: t.m.slice(a, b) });
function semComentariosInline(t) {
  let s = "", m = [], k = 0;
  for (const x of t.s.matchAll(/<!--.*?-->/g)) { s += t.s.slice(k, x.index); m.push(...t.m.slice(k, x.index)); k = x.index + x[0].length; }
  return { s: s + t.s.slice(k), m: m.concat(t.m.slice(k)) };
}
const aparar = (t) => fatiar(t, t.s.length - t.s.trimStart().length, t.s.trimEnd().length);

export function lerFalado(raw) {
  const paragrafos = [];
  let buf = [], bufParte = null, emComentario = false, parte = null, ini = 0;
  const flush = () => {
    if (!buf.length) return;
    let s = "", m = [];
    buf.forEach((seg, k) => { if (k) { s += " "; m.push(-1); } s += seg.s; m = m.concat(seg.m); });
    const reais = m.filter((x) => x >= 0);
    paragrafos.push({ texto: s, map: m, parte: bufParte, primeiro: reais[0], ultimo: reais[reais.length - 1] });
    buf = [];
  };
  for (const linha of raw.split("\n")) {
    let t = { s: linha, m: Array.from({ length: linha.length }, (_, k) => ini + k) };
    ini += linha.length + 1;
    const marca = linha.match(/<!--\s*(gancho|p\d+)\b/);
    if (marca) parte = marca[1];
    if (emComentario) { const k = t.s.indexOf("-->"); if (k >= 0) { emComentario = false; t = fatiar(t, k + 3); } else continue; }
    t = semComentariosInline(t);
    const k2 = t.s.indexOf("<!--");
    if (k2 >= 0) { emComentario = true; t = fatiar(t, 0, k2); }
    if (/^\s*#/.test(t.s) || /^\s*>/.test(t.s)) { flush(); continue; }
    if (!t.s.trim()) { flush(); continue; }
    if (!buf.length) bufParte = parte;
    buf.push(aparar(t));
  }
  flush();
  const texto = paragrafos.map((p) => p.texto).join("\n\n");
  return { paragrafos, texto, sha: sha256(texto) };
}

// as frases, como o gate as parte, com a posição de cada uma no parágrafo
export function frasesDe(p) {
  const out = [];
  for (const x of p.texto.matchAll(/[^.?!]+(?:[.?!]+["”’)]*|$)/g)) {
    const bruto = x[0], a = bruto.length - bruto.trimStart().length, f = bruto.trim();
    if (!f) continue;
    const i0 = x.index + a;
    out.push({ texto: f, raw: p.map.slice(i0, i0 + f.length).filter((y) => y >= 0) });
  }
  return out;
}

// ---------------------------------------------------------------- numerais, dígito e por extenso ----
const UNID = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const DEZ = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
const ESCALA = new Set("hundred thousand million billion trillion hundreds thousands millions billions trillions".split(" "));
const ORD = new Set(("first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth thirteenth fourteenth fifteenth " +
  "sixteenth seventeenth eighteenth nineteenth twentieth thirtieth fortieth fiftieth sixtieth seventieth eightieth ninetieth " +
  "hundredth thousandth millionth billionth").split(" "));
const FRAC = new Set("half halves quarter quarters dozen dozens twice".split(" "));
const NUM = new Set([...UNID, ...DEZ, ...ESCALA, ...ORD, ...FRAC]);
const DEPOIS_DE_A = new Set(["hundred", "thousand", "million", "billion", "half", "quarter", "dozen"]);
const RE_TOK = /\$?\d+(?:[.,]\d+)*(?:st|nd|rd|th|s)?%?|[A-Za-z]+(?:['’][A-Za-z]+)*/g;

const UM_PRONOME_ANTES = new Set(["no", "any", "every", "some", "each", "other", "another", "this", "that", "which"]);
const UM_PRONOME_DEPOIS = new Set(["another", "who", "whom", "whose", "that", "which"]);
// a classe de cada palavra de número, para saber se a seguinte continua o mesmo numeral ("nineteen seventy-nine",
// "two hundred thousand", "twenty-first", "three quarters") ou começa outro ("one twenty-foot container")
const classe = (w) => UNID.indexOf(w) >= 0 ? (UNID.indexOf(w) >= 10 ? "T" : "U") : DEZ.includes(w) ? "D" : ESCALA.has(w) ? "S" : ORD.has(w) ? "O" : FRAC.has(w) ? "F" : null;
const SEGUE = { S: "UTDS", U: "DS", T: "TS", D: "TS", O: "DS", F: "UTD" };
const continua = (ultimo, prox) => { const a = classe(ultimo), b = classe(prox); return !!a && !!b && (SEGUE[b] || "").includes(a); };

export const normNum = (s) => String(s).toLowerCase().replace(/[-‐–]/g, " ").replace(/\s+/g, " ").trim();

export function numerais(texto) {
  const toks = [...texto.matchAll(RE_TOK)].map((m) => ({ w: m[0], lo: m[0].toLowerCase(), i: m.index, f: m.index + m[0].length }));
  const junto = (a, b) => { const g = texto.slice(a.f, b.i); return /^[\s-]+$/.test(g) && !g.includes("\n\n"); };
  const out = [];
  let k = 0;
  while (k < toks.length) {
    const t = toks[k];
    if (/^\$?\d/.test(t.w)) { out.push({ v: t.lo, i: t.i, f: t.f }); k++; continue; }
    const ant = k > 0 && junto(toks[k - 1], t) ? toks[k - 1].lo : null;
    const prox = toks[k + 1] && junto(t, toks[k + 1]) ? toks[k + 1].lo : null;
    // "one" pronome não é numeral: "no one", "each one", "the other one", "the one who", "one another"
    if (!NUM.has(t.lo) || (t.lo === "one" && (UM_PRONOME_ANTES.has(ant) || UM_PRONOME_DEPOIS.has(prox)))) { k++; continue; }
    const frase = [];
    if (DEPOIS_DE_A.has(t.lo) && (ant === "a" || ant === "an")) frase.push("a");
    frase.push(t.lo);
    let j = k + 1;
    while (!ORD.has(frase[frase.length - 1]) && j < toks.length && junto(toks[j - 1], toks[j])) {
      const w = toks[j].lo, w1 = toks[j + 1], w2 = toks[j + 2];
      if (NUM.has(w) && continua(frase.filter((x) => x !== "and").pop(), w)) { frase.push(w); j++; continue; }
      if (w === "and" && w1?.lo === "a" && w2?.lo === "half" && junto(toks[j], w1) && junto(w1, w2)) { frase.push("and", "a", "half"); j += 3; continue; }
      if (w === "and" && ESCALA.has(frase[frase.length - 1]) && w1 && NUM.has(w1.lo) && continua(frase[frase.length - 1], w1.lo) && junto(toks[j], w1)) { frase.push("and"); j++; continue; }
      break;
    }
    out.push({ v: frase.join(" "), i: t.i, f: toks[j - 1].f });
    k = j;
  }
  return out;
}

const contagem = (lista) => { const m = new Map(); for (const v of lista) m.set(v, (m.get(v) || 0) + 1); return m; };

// ---------------------------------------------------------------- aspas ----
const normAspa = (s) => s.replace(/\s+/g, " ").trim().replace(/[.,;:!?]+$/, "").trim();
export function aspas(paragrafos) {
  const lista = [], desbalanceadas = [];
  paragrafos.forEach((p, n) => {
    const t = p.texto;
    if ((t.match(/"/g) || []).length % 2 || (t.match(/“/g) || []).length !== (t.match(/”/g) || []).length) desbalanceadas.push(n + 1);
    const achadas = [];
    for (const x of t.matchAll(/"([^"]*)"/g)) achadas.push({ i: x.index, bruto: x[1] });
    for (const x of t.matchAll(/“([^”]*)”/g)) achadas.push({ i: x.index, bruto: x[1] });
    achadas.sort((a, b) => a.i - b.i).forEach((a) => lista.push({ v: normAspa(a.bruto), bruto: a.bruto, paragrafo: n + 1 }));
  });
  return { lista, desbalanceadas };
}

// ---------------------------------------------------------------- nomes, datas e grupos (a prova do REDIZER) ----
const MESES = new Set("January February March April May June July August September October November December".split(" "));
const DIAS = new Set("Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "));
const GRUPOS = new Set(("people peoples folks persons workers laborers labourers residents inhabitants citizens voters immigrants migrants " +
  "settlers colonists families women men children kids crew crews sailors seamen soldiers troops farmers ranchers merchants " +
  "businessmen owners landowners taxpayers employees locals townspeople natives tribes tribe population populations community " +
  "communities villagers neighbors neighbours strangers foreigners officials politicians engineers slaves prisoners convicts " +
  "students veterans laborforce workforce miners loggers fishermen dockworkers longshoremen whites blacks").split(" "));
const normNome = (w) => w.replace(/['’]s$/, "").replace(/['’]$/, "");

export function maiusculas(texto, inicioEhFrase) {
  const out = [];
  for (const x of texto.matchAll(/[A-Za-z]+(?:['’][A-Za-z]+)*/g)) {
    const w = x[0];
    if (!/^[A-Z]/.test(w) || w === "I") continue;
    const antes = texto.slice(0, x.index);
    const inicial = antes.trim() === "" ? inicioEhFrase
      : /[.?!]["”’)]*\s+["“(]*$/.test(antes) || /(^|\s|:)["“(]$/.test(antes) || /\n\s*$/.test(antes);
    out.push({ w, norm: normNome(w), inicial });
  }
  return out;
}
const comecaFrase = (texto, i) => { const a = texto.slice(0, i); return a.trim() === "" || /[.?!]["”’)]*\s+["“(]*$/.test(a) || /\n\s*$/.test(a); };

function provaRedizer(it, ctx) {
  const novos = [];
  const numDe = new Set(numerais(it.de).map((n) => n.v));
  for (const n of numerais(it.para)) if (!numDe.has(n.v)) novos.push({ tipo: "número", v: n.v });
  if ((it.numerais_permitidos || []).length) novos.push({ tipo: "número", v: `numerais_permitidos declarados (${it.numerais_permitidos.join(", ")}): REDIZER não traz número` });
  // a citação nova é afirmação da fonte, não o mesmo dito de outro jeito (cético, 14/10/2026)
  if ((it.aspas_novas || []).length) novos.push({ tipo: "citação", v: `aspas_novas declaradas (${it.aspas_novas.map((a) => `"${String(a).slice(0, 40)}"`).join(", ")}): REDIZER não traz citação` });
  const capsDe = new Set(maiusculas(it.de, true).map((c) => c.norm));
  for (const c of maiusculas(it.para, ctx.paraComecaFrase)) {
    if (capsDe.has(c.norm)) continue;
    if (MESES.has(c.norm) || DIAS.has(c.norm)) novos.push({ tipo: "data", v: c.w });
    else if (!c.inicial) novos.push({ tipo: "nome", v: c.w });
    else if (ctx.capsNoMeio.has(c.norm)) novos.push({ tipo: "nome", v: `${c.w} (no início da frase, mas o texto o escreve com maiúscula no meio de outra)` });
  }
  const gruposDe = new Set((it.de.toLowerCase().match(/[a-z]+/g) || []).filter((w) => GRUPOS.has(w)));
  for (const w of new Set((it.para.toLowerCase().match(/[a-z]+/g) || []).filter((w) => GRUPOS.has(w)))) if (!gruposDe.has(w)) novos.push({ tipo: "grupo", v: w });
  return novos;
}

// ---------------------------------------------------------------- a aplicação, com o rastro de cada caractere ----
const contar = (s, sub) => { let n = 0, i = s.indexOf(sub); while (i >= 0) { n++; i = s.indexOf(sub, i + 1); } return n; };
function concat32(...partes) { const n = partes.reduce((a, p) => a + p.length, 0); const r = new Int32Array(n); let k = 0; for (const p of partes) { r.set(p, k); k += p.length; } return r; }

// o arquivo com o que não é falado (título, "> ", comentário) trocado por espaço: as posições continuam as do arquivo
function soFalado(s) {
  const fala = new Uint8Array(s.length);
  for (const p of lerFalado(s).paragrafos) for (const y of p.map) if (y >= 0) fala[y] = 1;
  const out = new Array(s.length);
  for (let k = 0; k < s.length; k++) out[k] = fala[k] || s[k] === "\n" ? s[k] : " ";
  return out.join("");
}

function aplicarNoArquivo(raw0, itens) {
  let s = raw0;
  let orig = Int32Array.from({ length: s.length }, (_, k) => k);
  let ins = new Int32Array(s.length).fill(-1);
  let junc = new Array(s.length).fill(null);
  const delPor = new Int32Array(raw0.length).fill(-1);
  const juncOrig = new Map();
  const res = [];
  for (const it of itens) {
    const n = contar(s, it.de);
    if (n !== 1) { res.push({ it, casou: n }); continue; }
    const i = s.indexOf(it.de), dl = it.de.length, L = it.para.length;
    const linha = s.slice(0, i).split("\n").length;
    const spanOrig = [], spanIns = new Set();
    for (let x = i; x < i + dl; x++) { if (orig[x] >= 0) { spanOrig.push(orig[x]); delPor[orig[x]] = it._k; } else spanIns.add(ins[x]); }
    for (const x of [i - 1, i + dl]) if (x >= 0 && x < s.length && orig[x] >= 0) { if (!juncOrig.has(orig[x])) juncOrig.set(orig[x], new Set()); juncOrig.get(orig[x]).add(it._k); }
    const paraComecaFrase = comecaFrase(s, i);
    // os numerais do item lidos no contexto (cético, 14/10/2026): o que toca o trecho do "de" antes e o do "para" depois,
    // inteiro mesmo quando o numeral passa da ponta ("two hundred" com de = "hundred")
    // inteiro mesmo quando o numeral passa da ponta ("two hundred" com de = "hundred"), e só no texto falado (o "2" de
    // um <!-- p2 --> não conta, como não conta na prova do texto inteiro)
    const numSai = numerais(soFalado(s)).filter((x) => x.i < i + dl && x.f > i).map((x) => x.v);
    s = s.slice(0, i) + it.para + s.slice(i + dl);
    const numEntra = numerais(soFalado(s)).filter((x) => x.i < i + L && x.f > i).map((x) => x.v);
    orig = concat32(orig.subarray(0, i), new Int32Array(L).fill(-1), orig.subarray(i + dl));
    ins = concat32(ins.subarray(0, i), new Int32Array(L).fill(it._k), ins.subarray(i + dl));
    junc = junc.slice(0, i).concat(new Array(L).fill(null), junc.slice(i + dl));
    for (const x of [i - 1, i + L]) if (x >= 0 && x < s.length) junc[x] = (junc[x] || []).concat(it._k);
    res.push({ it, casou: 1, linha, spanOrig, spanIns: [...spanIns], paraComecaFrase, numSai, numEntra });
  }
  return { texto: s, orig, ins, junc, delPor, juncOrig, res };
}

// LCS de frases, em blocos de diferença
function diffFrases(a, b) {
  const n = a.length, m = b.length, D = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) D[i][j] = a[i].texto === b[j].texto ? D[i + 1][j + 1] + 1 : Math.max(D[i + 1][j], D[i][j + 1]);
  const blocos = []; let i = 0, j = 0, cur = null;
  const fecha = () => { if (cur) { blocos.push(cur); cur = null; } };
  while (i < n || j < m) {
    if (i < n && j < m && a[i].texto === b[j].texto) { fecha(); i++; j++; continue; }
    cur ||= { sai: [], entra: [] };
    if (j >= m || (i < n && D[i + 1][j] >= D[i][j + 1])) cur.sai.push(a[i++]); else cur.entra.push(b[j++]);
  }
  fecha();
  return blocos;
}

// ---------------------------------------------------------------- a prova de um arquivo ----
function provarArquivo(rel, raw0, itens, recusas, avisos) {
  const antes = lerFalado(raw0);
  const ap = aplicarNoArquivo(raw0, itens);
  const falhasCasa = ap.res.filter((r) => r.casou !== 1);
  for (const r of falhasCasa) recusas.push({ prova: "casa", item: r.it.id, arquivo: rel, msg: `o "de" casa ${r.casou} vez(es) em ${rel} (tem de casar 1)` });
  const out = { arquivo: rel, sha_antes: antes.sha, paragrafos_antes: antes.paragrafos.length, aplicados: [] };
  if (falhasCasa.length) { out.provas = "não medidas: o casamento falhou"; return out; }
  const depois = lerFalado(ap.texto);
  out.sha_depois = depois.sha; out.paragrafos_depois = depois.paragrafos.length; out.texto_novo = ap.texto;

  // dono de cada posição do arquivo antigo: o parágrafo (pelo intervalo); no vão só de espaço entre dois, os dois
  const P = antes.paragrafos;
  const donoDe = new Int32Array(raw0.length).fill(-1);
  const vao = new Map(); // posição -> [p, p+1]
  P.forEach((p, k) => { for (let x = p.primeiro; x <= p.ultimo; x++) donoDe[x] = k; });
  for (let k = 0; k + 1 < P.length; k++) if (!raw0.slice(P[k].ultimo + 1, P[k + 1].primeiro).trim()) for (let x = P[k].ultimo + 1; x < P[k + 1].primeiro; x++) vao.set(x, [k, k + 1]);
  const donosItem = new Map();
  for (const r of ap.res) {
    const conteudo = new Set(), vizinhos = new Set();
    for (const x of r.spanOrig) { if (donoDe[x] >= 0) conteudo.add(donoDe[x]); else if (vao.has(x)) vao.get(x).forEach((k) => vizinhos.add(k)); }
    for (const k of r.spanIns) for (const d of donosItem.get(k)?.todos || []) conteudo.add(d);
    donosItem.set(r.it._k, { conteudo: [...conteudo].sort((a, b) => a - b), todos: [...new Set([...conteudo, ...vizinhos])].sort((a, b) => a - b) });
  }
  const donos = new Set([...donosItem.values()].flatMap((d) => d.todos));

  // (c) parágrafos: o intacto é o mesmo texto, feito só dos mesmos caracteres do antigo
  const intactoAntes = new Set(), mudadosDepois = [];
  depois.paragrafos.forEach((q, qi) => {
    const reais = q.map.filter((y) => y >= 0);
    const o = reais.map((y) => ap.orig[y]);
    const k = o.length && o[0] >= 0 ? donoDe[o[0]] : -1;
    const p = k >= 0 ? P[k] : null;
    const pr = p ? p.map.filter((y) => y >= 0) : null;
    if (p && q.texto === p.texto && o.length === pr.length && o.every((x, n) => x === pr[n])) { intactoAntes.add(k); return; }
    const fontes = new Set(), itensQ = new Set(); let deFora = false;
    reais.forEach((y) => { if (ap.orig[y] >= 0) { const d = donoDe[ap.orig[y]]; if (d >= 0) fontes.add(d); else deFora = true; } else itensQ.add(ap.ins[y]); });
    mudadosDepois.push({ n: qi + 1, fontes: [...fontes], deFora, itens: [...itensQ] });
  });
  const provaC = { ok: true, paragrafos_mudados: mudadosDepois.length, falhas: [] };
  P.forEach((p, k) => { if (!intactoAntes.has(k) && !donos.has(k)) provaC.falhas.push(`o parágrafo ${k + 1} do antes ("${p.texto.slice(0, 60)}…") mudou ou saiu do texto falado sem conter um "de"`); });
  for (const q of mudadosDepois) {
    for (const f of q.fontes) if (!donos.has(f)) provaC.falhas.push(`o parágrafo ${q.n} do depois tem texto do parágrafo ${f + 1} do antes, que não contém um "de"`);
    if (q.deFora) provaC.falhas.push(`o parágrafo ${q.n} do depois tem texto que não era falado (comentário, título ou citação "> ")`);
    for (const k of q.itens) if (!donosItem.get(k)?.todos.length) provaC.falhas.push(`o parágrafo ${q.n} do depois nasce de ${itens.find((it) => it._k === k).id}, cujo "de" não toca texto falado`);
  }
  // a parte declarada
  for (const r of ap.res) {
    const d = donosItem.get(r.it._k), ks = d.conteudo.length ? d.conteudo : d.todos;
    if (!ks.length) avisos.push(`${r.it.id}: o "de" não toca texto falado (está num comentário, título ou citação)`);
    if (r.it.parte && ks.some((k) => P[k].parte && P[k].parte !== r.it.parte)) provaC.falhas.push(`${r.it.id}: declarado na parte ${r.it.parte}, mas o parágrafo dono está em ${[...new Set(ks.map((k) => P[k].parte))].join(", ")}`);
    out.aplicados.push({ id: r.it.id, op: r.it.op, linha: r.linha, paragrafos_donos: d.todos.map((k) => k + 1), parte: [...new Set(ks.map((k) => P[k].parte))].join(",") || null });
  }

  // o diff frase a frase, com o item de cada diferença
  const fa = P.flatMap((p, k) => frasesDe(p).map((f) => ({ ...f, parte: p.parte })));
  const fb = depois.paragrafos.flatMap((p) => frasesDe(p).map((f) => ({ ...f, parte: p.parte })));
  const idDe = (k) => itens.find((it) => it._k === k).id;
  const itensSai = (f) => { const s = new Set(); for (const x of f.raw) { if (ap.delPor[x] >= 0) s.add(ap.delPor[x]); (ap.juncOrig.get(x) || []).forEach((k) => s.add(k)); } return [...s].sort((a, b) => a - b).map(idDe); };
  const itensEntra = (f) => { const s = new Set(); for (const y of f.raw) { if (ap.ins[y] >= 0) s.add(ap.ins[y]); (ap.junc[y] || []).forEach((k) => s.add(k)); } return [...s].sort((a, b) => a - b).map(idDe); };
  const blocos = diffFrases(fa, fb).map((b, n) => ({
    n: n + 1, parte: [...new Set([...b.sai, ...b.entra].map((f) => f.parte))].join(","),
    sai: b.sai.map((f) => ({ frase: f.texto, itens: itensSai(f) })), entra: b.entra.map((f) => ({ frase: f.texto, itens: itensEntra(f) })),
  }));
  const semItem = blocos.flatMap((b) => [...b.sai, ...b.entra]).filter((f) => !f.itens.length);
  for (const f of semItem) provaC.falhas.push(`frase mudada sem item que a explique: "${f.frase.slice(0, 80)}"`);
  const vistos = new Set(blocos.flatMap((b) => [...b.sai, ...b.entra]).flatMap((f) => f.itens));
  out.diff = { blocos, frases_sem_item: semItem.length, itens_no_diff: itens.filter((it) => vistos.has(it.id)).map((it) => it.id), itens_fora_do_diff: itens.filter((it) => !vistos.has(it.id)).map((it) => it.id) };
  provaC.ok = !provaC.falhas.length;
  for (const f of provaC.falhas) recusas.push({ prova: "c", arquivo: rel, msg: f });

  // (a) aspas
  const aA = aspas(P), aD = aspas(depois.paragrafos);
  const restA = aA.lista.map((x) => x.v), restD = aD.lista.map((x) => x.v);
  const provaA = { ok: true, antes: restA.length, depois: restD.length, falhas: [] };
  // a citação declarada sai da comparação. Quando o texto tem a mesma citação mais de uma vez (o "never" do vídeo 2), a
  // declaração não diz qual: valem todas as escolhas, e passa se alguma deixa os dois lados iguais (cético, 14/10/2026;
  // antes, saía sempre a primeira, e cortar o segundo "never", declarado, recusava)
  const variantes = (arr, campo, onde) => {
    let seqs = [arr];
    for (const it of itens) for (const v of it[campo] || []) {
      const nv = normAspa(v), prox = new Map();
      for (const s of seqs) s.forEach((x, k) => { if (x === nv) { const t = [...s.slice(0, k), ...s.slice(k + 1)]; prox.set(JSON.stringify(t), t); } });
      if (!prox.size) { provaA.falhas.push(`${it.id}: declara ${onde} a citação "${v}", que não está lá`); continue; }
      seqs = [...prox.values()].slice(0, 5000);
    }
    return seqs;
  };
  const vA = variantes(restA, "aspas_removidas", "que sai"), vD = variantes(restD, "aspas_novas", "que entra");
  const chavesD = new Set(vD.map((s) => JSON.stringify(s)));
  if (!vA.some((s) => chavesD.has(JSON.stringify(s)))) {
    const sA = vA[0], sD = vD[0], nMax = Math.max(sA.length, sD.length);
    for (let k = 0; k < nMax; k++) if (sA[k] !== sD[k]) { provaA.falhas.push(`a citação nº ${k + 1} mudou: antes "${(sA[k] ?? "—").slice(0, 70)}" · depois "${(sD[k] ?? "—").slice(0, 70)}"`); break; }
  }
  for (const n of aD.desbalanceadas) if (!aA.desbalanceadas.includes(n)) provaA.falhas.push(`o parágrafo ${n} do depois ficou com aspas sem par`);
  provaA.ok = !provaA.falhas.length;
  for (const f of provaA.falhas) recusas.push({ prova: "a", arquivo: rel, msg: f });

  // (b) numerais
  const nA = contagem(numerais(antes.texto).map((x) => x.v)), nD = contagem(numerais(depois.texto).map((x) => x.v));
  const esperado = new Map(nA);
  const declarados = [], falhasItem = [];
  for (const r of ap.res) {
    const it = r.it;
    for (const v of it.numerais_removidos || []) { const k = normNum(v); esperado.set(k, (esperado.get(k) || 0) - 1); }
    for (const v of it.numerais_permitidos || []) { const k = normNum(v); esperado.set(k, (esperado.get(k) || 0) + 1); }
    const dDe = contagem(r.numSai), dPara = contagem(r.numEntra);
    const sai = [], entra = [];
    for (const k of new Set([...dDe.keys(), ...dPara.keys()])) { const d = (dPara.get(k) || 0) - (dDe.get(k) || 0); for (let z = 0; z < Math.abs(d); z++) (d > 0 ? entra : sai).push(k); }
    if (sai.length || entra.length || (it.numerais_removidos || []).length || (it.numerais_permitidos || []).length)
      declarados.push({ id: it.id, no_de_para: { saem: sai, entram: entra }, declarados: { removidos: it.numerais_removidos || [], permitidos: it.numerais_permitidos || [] } });
    // por item (cético, 14/10/2026): o saldo de cada numeral no trecho do item tem de ser o declarado por ele. Sem isto,
    // um item que tira "three" de uma frase e outro que o põe noutra, sem declarar, deixam o texto inteiro igual.
    const saldo = new Map();
    for (const v of it.numerais_permitidos || []) { const k = normNum(v); saldo.set(k, (saldo.get(k) || 0) + 1); }
    for (const v of it.numerais_removidos || []) { const k = normNum(v); saldo.set(k, (saldo.get(k) || 0) - 1); }
    for (const k of new Set([...saldo.keys(), ...dDe.keys(), ...dPara.keys()])) {
      const real = (dPara.get(k) || 0) - (dDe.get(k) || 0), decl = saldo.get(k) || 0;
      if (real !== decl) falhasItem.push(`${it.id}: "${k}" ${real > 0 ? `entra ${real}` : real < 0 ? `sai ${-real}` : "não muda"} no trecho do item, e ele declara ${decl > 0 ? `entrar ${decl}` : decl < 0 ? `sair ${-decl}` : "nada"}`);
    }
    // REDIZER que troca a ordem dos numerais: não recusa (o L33 do vídeo 2 diz a dragagem em outra ordem), mas avisa
    if (it.op === "REDIZER") { let q = 0; for (const x of r.numSai) if (q < r.numEntra.length && r.numEntra[q] === x) q++; if (q < r.numEntra.length) avisos.push(`${it.id} (REDIZER) muda a ordem dos numerais (${r.numSai.join(", ")} → ${r.numEntra.join(", ")}): confira que nenhum número trocou de lugar com outro; se é ordem, a op é REORDENAR`); }
  }
  const provaB = { ok: true, antes: [...nA.values()].reduce((a, b) => a + b, 0), depois: [...nD.values()].reduce((a, b) => a + b, 0), por_item: declarados, falhas: [...falhasItem] };
  for (const k of new Set([...esperado.keys(), ...nD.keys()])) {
    const e = esperado.get(k) || 0, d = nD.get(k) || 0;
    if (e < 0) provaB.falhas.push(`"${k}" declarado como removido ${-e} vez(es) a mais do que havia no texto`);
    else if (e !== d) provaB.falhas.push(`"${k}": o texto de depois tem ${d}, e o esperado (antes − removidos + permitidos) é ${e}`);
  }
  provaB.ok = !provaB.falhas.length;
  for (const f of provaB.falhas) recusas.push({ prova: "b", arquivo: rel, msg: f });

  // (d) REDIZER
  const capsNoMeio = new Set(maiusculas(antes.texto, true).filter((c) => !c.inicial).map((c) => c.norm));
  const provaD = { ok: true, itens: 0, falhas: [] };
  for (const r of ap.res) if (r.it.op === "REDIZER") {
    provaD.itens++;
    for (const nv of provaRedizer(r.it, { capsNoMeio, paraComecaFrase: r.paraComecaFrase })) provaD.falhas.push(`${r.it.id} (REDIZER) traz ${nv.tipo} que o "de" não tinha: ${nv.v}`);
  }
  provaD.ok = !provaD.falhas.length;
  for (const f of provaD.falhas) recusas.push({ prova: "d", arquivo: rel, msg: f });

  out.provas = { a_aspas: provaA, b_numerais: provaB, c_paragrafos: provaC, d_redizer: provaD };
  return out;
}

// ---------------------------------------------------------------- o gate do vídeo, para cruzar o sha ----
function shaDoGate(gate, conteudo) {
  const tmp = path.join(tmpdir(), `aplicar-lista-${process.pid}-${Date.now()}-${Math.random().toString(36).slice(2)}.md`);
  writeFileSync(tmp, conteudo);
  try {
    const r = spawnSync(process.execPath, [gate, tmp], { encoding: "utf8" });
    if (r.status !== 0 && r.status !== 1) return { erro: `o gate saiu ${r.status}` };
    const j = JSON.parse(r.stdout);
    return { sha256: j.sha256, veredito: j.veredito, palavras: j.palavras, problemas: j.problemas?.length ?? null };
  } catch (e) { return { erro: String(e.message || e) }; } finally { try { unlinkSync(tmp); } catch {} }
}

// ---------------------------------------------------------------- o principal ----
export function principal(argv) {
  const args = argv.filter((a) => !a.startsWith("--"));
  const opt = Object.fromEntries(argv.filter((a) => a.startsWith("--")).map((a) => { const [k, ...v] = a.slice(2).split("="); return [k, v.length ? v.join("=") : true]; }));
  const proj = args[0];
  const saida = { proj, lista: opt.lista || null, seco: !!opt.seco, veredito: null, recusas: [], avisos: [], pendentes: [], arquivos: [] };
  const fim = (codigo, veredito) => { saida.veredito = veredito; return { codigo, saida }; };
  if (!proj || !opt.lista || !/^[a-z0-9][a-z0-9-]*$/.test(proj)) { saida.recusas.push({ prova: "uso", msg: "uso: node ferramentas/aplicar-lista.mjs <proj> --lista=<arquivo.json> [--seco]" }); return fim(2, "NAO_RODOU"); }
  const raiz = (opt.raiz && opt.raiz !== true ? opt.raiz : "roteiros").replace(/\\/g, "/").replace(/\/$/, "");
  const base = `${raiz}/${proj}`;
  let lista;
  try { lista = JSON.parse(readFileSync(opt.lista, "utf8").replace(/^﻿/, "")); } catch (e) { saida.recusas.push({ prova: "lista", msg: `a lista não se lê: ${e.message}` }); return fim(2, "NAO_RODOU"); }
  const narr = `${base}/roteiro-narrador.md`;
  if (!existsSync(narr)) { saida.recusas.push({ prova: "arquivo", msg: `não encontrado: ${narr}` }); return fim(2, "NAO_RODOU"); }
  const rodada = lista.rodada == null ? null : (/^\d+$/.test(String(lista.rodada)) ? `r${lista.rodada}` : String(lista.rodada));
  saida.rodada = rodada;
  const R = saida.recusas;

  // a lista
  if (lista.proj && lista.proj !== proj) R.push({ prova: "lista", msg: `a lista é do vídeo "${lista.proj}", não de "${proj}"` });
  if (!rodada || !/^[A-Za-z0-9._-]+$/.test(rodada)) R.push({ prova: "lista", msg: `"rodada" ausente ou inválida (${lista.rodada})` });
  if (typeof lista.revisao_julgada !== "string" || !/^[0-9a-f]{12,64}$/.test(lista.revisao_julgada)) R.push({ prova: "lista", msg: `"revisao_julgada" tem de ser o sha12 (12 a 64 hex) do texto falado julgado` });
  if (!Array.isArray(lista.itens)) { R.push({ prova: "lista", msg: `"itens" não é uma lista` }); return fim(1, "RECUSADO"); }
  const ids = new Set(), grafias = new Map();
  const itens = [];
  lista.itens.forEach((it, k) => {
    const id = it?.id;
    if (!id || ids.has(id)) R.push({ prova: "lista", msg: `item ${k + 1}: id ausente ou repetido (${id})` });
    ids.add(id);
    if (!OPS.includes(it.op)) R.push({ prova: "lista", item: id, msg: `op "${it.op}" fora da lista fechada (${OPS.join(", ")}; não existe "afirmar")` });
    if (typeof it.de !== "string" || !it.de) R.push({ prova: "lista", item: id, msg: `"de" vazio ou ausente` });
    // o caminho normalizado e comparado sem caixa (cético, 14/10/2026): no Windows, "./roteiro-narrador.md" e
    // "Roteiro-Editor.md" são o roteiro e o editor, e passavam como outro arquivo (o editor, fora da prova (e))
    let arq = path.posix.normalize(String(it.arquivo || "roteiro-narrador.md").replace(/\\/g, "/"));
    if (arq.toLowerCase().startsWith(`roteiros/${proj}/`)) arq = path.posix.normalize(arq.slice(`roteiros/${proj}/`.length));
    const baixo = arq.toLowerCase();
    if (baixo === "roteiro-narrador.md") arq = "roteiro-narrador.md";
    if (arq.startsWith("/") || /^[a-z]:/i.test(arq) || /(^|\/)\.\.(\/|$)/.test(arq) || !baixo.endsWith(".md") || baixo.startsWith("_trabalho/") || baixo === "roteiro-editor.md")
      R.push({ prova: "lista", item: id, msg: `arquivo "${it.arquivo}" não é o roteiro nem uma variante de roteiros/${proj}/` });
    if (grafias.has(baixo) && grafias.get(baixo) !== arq) R.push({ prova: "lista", item: id, msg: `arquivo "${it.arquivo}" é o mesmo que "${grafias.get(baixo)}", com outra grafia` });
    grafias.set(baixo, arq);
    for (const c of ["numerais_permitidos", "numerais_removidos", "aspas_removidas", "aspas_novas", "editor"]) if (it[c] != null && !Array.isArray(it[c])) R.push({ prova: "lista", item: id, msg: `"${c}" tem de ser uma lista` });
    for (const e of it.editor || []) if (typeof e?.de !== "string" || !e.de || typeof e?.para !== "string") R.push({ prova: "lista", item: id, msg: `par do editor sem "de" ou "para"` });
    if (it.op === "PEDIR" && (it.para == null || it.para === "")) { saida.pendentes.push({ id, arquivo: arq, parte: it.parte ?? null, de: it.de, pedido: it.pedido ?? it.problema ?? null, lentes: it.lentes ?? [] }); return; }
    if (typeof it.para !== "string") R.push({ prova: "lista", item: id, msg: `"para" ausente` });
    itens.push({ ...it, arquivo: arq, _k: k });
  });
  if (R.length) return fim(1, "RECUSADO");

  // os arquivos, um por um, na ordem da lista
  const porArquivo = new Map();
  for (const it of itens) { if (!porArquivo.has(it.arquivo)) porArquivo.set(it.arquivo, []); porArquivo.get(it.arquivo).push(it); }
  if (!porArquivo.has("roteiro-narrador.md")) porArquivo.set("roteiro-narrador.md", []);
  const gatePath = [`${base}/_ferramentas/gate.mjs`, `roteiros/${proj}/_ferramentas/gate.mjs`].find(existsSync) || null;
  const gravar = [];
  for (const [rel, its] of porArquivo) {
    const caminho = `${base}/${rel}`;
    if (!existsSync(caminho)) { R.push({ prova: "arquivo", msg: `não encontrado: ${caminho}` }); continue; }
    const bytes = readFileSync(caminho);
    let txt = bytes.toString("utf8");
    const bom = txt.startsWith("﻿"); if (bom) txt = txt.slice(1);
    const crlf = txt.includes("\r\n");
    const raw0 = txt.replace(/\r\n?/g, "\n");
    const julgado = rel === "roteiro-narrador.md" ? lista.revisao_julgada : lista.revisoes_julgadas?.[rel];
    const shaAgora = lerFalado(raw0).sha;
    if (!julgado) { R.push({ prova: "sha", arquivo: rel, msg: `${rel} não tem sha julgado na lista ("revisoes_julgadas")` }); continue; }
    if (!shaAgora.startsWith(julgado)) { R.push({ prova: "sha", arquivo: rel, msg: `o texto falado de agora é ${shaAgora.slice(0, 12)}, e a bancada julgou ${julgado.slice(0, 12)}` }); continue; }
    const res = provarArquivo(rel, raw0, its, R, saida.avisos);
    const { texto_novo, ...semTexto } = res;
    const reg = { ...semTexto, caminho, sha12_antes: res.sha_antes.slice(0, 12), sha12_depois: res.sha_depois?.slice(0, 12) ?? null };
    if (rel === "roteiro-narrador.md" && gatePath && texto_novo != null) {
      const gA = shaDoGate(gatePath, raw0), gD = shaDoGate(gatePath, texto_novo);
      reg.gate = { arquivo: gatePath, antes: gA, depois: gD };
      if (gA.erro || gD.erro || gA.sha256 !== res.sha_antes || gD.sha256 !== res.sha_depois) {
        saida.arquivos.push(reg); saida.recusas.push({ prova: "gate", msg: `o sha do gate não bate com o desta ferramenta (antes ${gA.sha256?.slice(0, 12) ?? gA.erro}, depois ${gD.sha256?.slice(0, 12) ?? gD.erro}): a leitura do texto falado divergiu` });
        return fim(2, "NAO_RODOU");
      }
    } else if (rel === "roteiro-narrador.md" && !gatePath) saida.avisos.push(`sem roteiros/${proj}/_ferramentas/gate.mjs: o sha não foi cruzado com o gate`);
    saida.arquivos.push(reg);
    if (texto_novo != null) {
      let novo = crlf ? texto_novo.replace(/\n/g, "\r\n") : texto_novo; if (bom) novo = "﻿" + novo;
      gravar.push({ rel, caminho, bytes, novo: Buffer.from(novo, "utf8"), sha_falado: res.sha_depois });
    }
  }
  if (saida.arquivos.length) { saida.sha_antes = saida.arquivos.find((a) => a.arquivo === "roteiro-narrador.md")?.sha_antes ?? null; saida.sha_depois = saida.arquivos.find((a) => a.arquivo === "roteiro-narrador.md")?.sha_depois ?? null; }
  saida.sha12_antes = saida.sha_antes?.slice(0, 12) ?? null; saida.sha12_depois = saida.sha_depois?.slice(0, 12) ?? null;

  // (e) o editor
  const editores = itens.flatMap((it) => (it.editor || []).map((e) => ({ ...e, id: it.id })));
  const provaE = { ok: true, pares: editores.length, falhas: [] };
  let editorNovo = null, editorBytes = null;
  const edPath = `${base}/roteiro-editor.md`;
  if (editores.length) {
    if (!existsSync(edPath)) provaE.falhas.push(`não encontrado: ${edPath}`);
    else {
      editorBytes = readFileSync(edPath);
      let t = editorBytes.toString("utf8"); const bom = t.startsWith("﻿"); if (bom) t = t.slice(1);
      const crlf = t.includes("\r\n"); t = t.replace(/\r\n?/g, "\n");
      for (const e of editores) { const n = contar(t, e.de); if (n !== 1) { provaE.falhas.push(`${e.id}: o par do editor casa ${n} vez(es) em roteiro-editor.md (tem de casar 1): "${e.de.slice(0, 60)}"`); continue; } t = t.replace(e.de, () => e.para); }
      if (crlf) t = t.replace(/\n/g, "\r\n"); if (bom) t = "﻿" + t;
      editorNovo = Buffer.from(t, "utf8");
    }
  }
  provaE.ok = !provaE.falhas.length;
  for (const f of provaE.falhas) R.push({ prova: "e", msg: f });
  saida.provas_editor = provaE;
  saida.aplicados = saida.arquivos.flatMap((a) => a.aplicados || []);

  if (R.length) return fim(1, "RECUSADO");
  if (saida.pendentes.length) { saida.avisos.push("há PEDIR sem resposta do escritor: nada se grava até ele responder (a lista inteira se aplica de uma vez, sobre o mesmo sha)"); return fim(3, "PENDENTE"); }
  if (opt.seco) return fim(0, "SECO_OK");

  // a gravação: primeiro as cópias (conferidas), depois os arquivos (relidos e conferidos)
  const trab = `${base}/_trabalho`;
  mkdirSync(trab, { recursive: true });
  const copias = [];
  const tarefas = gravar.map((g) => ({ ...g, copia: g.rel === "roteiro-narrador.md" ? `${trab}/roteiro-${rodada}.antes.md` : `${trab}/${path.basename(g.rel, ".md")}-${rodada}.antes.md` }));
  if (editorNovo && !editorNovo.equals(editorBytes)) tarefas.push({ rel: "roteiro-editor.md", caminho: edPath, bytes: editorBytes, novo: editorNovo, copia: `${trab}/roteiro-editor-${rodada}.antes.md` });
  for (const t of tarefas) if (existsSync(t.copia) && !readFileSync(t.copia).equals(t.bytes)) { R.push({ prova: "copia", msg: `a cópia ${t.copia} já existe com outro conteúdo: nada se grava` }); return fim(2, "NAO_RODOU"); }
  for (const t of tarefas) {
    writeFileSync(t.copia, t.bytes);
    const lido = sha256(readFileSync(t.copia)), orig = sha256(t.bytes);
    copias.push({ arquivo: t.rel, copia: t.copia, sha256: lido, confere: lido === orig });
    if (lido !== orig) { saida.copias = copias; R.push({ prova: "copia", msg: `a cópia ${t.copia} não confere (sha256)` }); return fim(2, "NAO_RODOU"); }
  }
  saida.copias = copias;
  const gravados = [];
  for (const t of tarefas) {
    writeFileSync(t.caminho, t.novo);
    const relido = readFileSync(t.caminho);
    const ok = relido.equals(t.novo) && (t.sha_falado == null || lerFalado(relido.toString("utf8").replace(/^﻿/, "").replace(/\r\n?/g, "\n")).sha === t.sha_falado);
    gravados.push({ arquivo: t.rel, caminho: t.caminho, sha256: sha256(relido), sha12_falado: t.sha_falado?.slice(0, 12) ?? null, confere: ok });
    if (!ok) { saida.gravados = gravados; R.push({ prova: "gravacao", msg: `${t.caminho} relido não confere: restaure pela cópia ${t.copia}` }); return fim(2, "NAO_RODOU"); }
  }
  saida.gravados = gravados;
  if (gatePath) { const g = shaDoGate(gatePath, readFileSync(narr, "utf8")); saida.gate_depois_de_gravar = g; if (g.sha256 !== saida.sha_depois) { R.push({ prova: "gate", msg: "o gate, sobre o arquivo gravado, dá outro sha" }); return fim(2, "NAO_RODOU"); } }
  return fim(0, "APLICADO");
}

function resumo(s) {
  const L = [`aplicar-lista · ${s.proj} · ${s.rodada ?? "?"} · ${s.veredito}${s.seco ? " (seco)" : ""}`];
  if (s.sha12_antes) L.push(`texto falado: ${s.sha12_antes} → ${s.sha12_depois ?? "—"}`);
  for (const r of s.recusas) L.push(`RECUSA [${r.prova}]${r.item ? ` ${r.item}` : ""}: ${r.msg}`);
  for (const p of s.pendentes) L.push(`PENDENTE AO ESCRITOR ${p.id}: "${String(p.de).slice(0, 70)}"`);
  for (const a of s.avisos) L.push(`aviso: ${a}`);
  for (const a of s.arquivos) if (a.diff) {
    L.push(`\n${a.arquivo}: ${a.aplicados.length} itens · ${a.diff.blocos.length} diferenças · frases sem item: ${a.diff.frases_sem_item}`);
    for (const b of a.diff.blocos) {
      L.push(`  Diferença ${b.n} (${b.parte})`);
      for (const f of b.sai) L.push(`    SAI:   ${f.frase} ← ${f.itens.join(", ") || "SEM ITEM"}`);
      for (const f of b.entra) L.push(`    ENTRA: ${f.frase} ← ${f.itens.join(", ") || "SEM ITEM"}`);
    }
  }
  return L.join("\n");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  let r;
  try { r = principal(process.argv.slice(2)); } catch (e) { console.log(JSON.stringify({ veredito: "NAO_RODOU", erro: String(e.stack || e) }, null, 1)); process.exit(2); }
  console.log(JSON.stringify(r.saida, null, 1));
  console.error(resumo(r.saida));
  process.exit(r.codigo);
}
