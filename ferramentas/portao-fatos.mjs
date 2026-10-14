#!/usr/bin/env node
// portao-fatos.mjs — o portão de fatos mínimo do roteiro (item 5 do estudo de roteiro, out/_analises/estudo-roteiro/cetico.md,
// "MANTIDO COM AJUSTE: a versão mínima"; a ideia é a do fatos-portao.mjs da Régie nova, que é estrutura: o código é outro).
// Confere, por código, o laudo de fatos que o verificador da bancada grava. Não chama modelo, não usa rede.
//
//   node ferramentas/portao-fatos.mjs <proj> [--json] [--raiz=<pasta>]      (cwd = raiz do canal)
//   --raiz: a pasta onde moram roteiros/<proj>/ e as cópias das fontes (o padrão é o cwd). Existe para a prova
//           (ferramentas/portao-fatos-provar.mjs), que trabalha em out/_tmp/portao-fatos-teste/.
//   saída: um resumo legível; com --json, o laudo do portão em JSON no stdout.
//   exit: 0 = nenhum problema · 1 = há problema (a lista diz qual regra) · 2 = não rodou (arquivo ausente, tabela que não
//         se lê, opção desconhecida, ou o sha deste portão diverge do sha do gate.mjs do vídeo).
//
// AS ENTRADAS (em <raiz>/roteiros/<proj>/):
//   - roteiro-narrador.md: o texto falado como o roteiros/<proj>/_ferramentas/gate.mjs o lê (tudo menos "# …", "> …",
//     <!-- … --> e linhas em branco; parágrafos separados por linha em branco, linhas aparadas e juntadas por um espaço).
//     O sha256 é o do texto dos parágrafos juntados por "\n\n", e o carimbo são os 12 primeiros hex. paragrafosDe() abaixo
//     é cópia literal da do gate. Se roteiros/<proj>/_ferramentas/gate.mjs existe, o portão o roda e confere que o sha
//     dele é o mesmo; se não for, sai 2 (a leitura divergiu).
//   - qc-roteiro/fatos.laudo.md: a linha "Revisão julgada: `<sha12>`" (pode vir em citação "> "), a linha
//     "COBERTURA: N de M" e a linha "VEREDITO: <X>" (ou "VEREDITO DA LENTE: <X>").
//   - qc-roteiro/fatos-tabela.json: uma lista, ou {"linhas": [...]}, de
//       {"paragrafo", "frase", "afirmacao", "veredito": "confirmada|corrigir|datar|atribuir|nao_conferida",
//        "fonte_id", "arquivo_local", "trecho", "classe": "texto|medicao|imprensa",
//        opcionais: "conferido_na_imagem" ({"arquivo", "pagina"} ou o caminho), "inferencia": true, "id"}
//     "paragrafo" é o número do parágrafo falado, contado de 1 (aceita 3, "3", "p3", "P3" e "§3").
//     "arquivo_local" é relativo à raiz; o absoluto vale se estiver dentro da raiz do canal ou da --raiz.
//
// AS REGRAS (cada problema leva a regra entre colchetes):
//   [sha]       a "Revisão julgada" do laudo é o sha12 de agora do texto falado.
//   [cobertura] o "COBERTURA: N de M" do laudo bate com a tabela: N = linhas com veredito confirmada, M = linhas.
//   [piso]      todo parágrafo falado com número (dígito ou por extenso), ano, data (nome de mês) ou nome próprio fora do
//               início de frase tem pelo menos uma linha da tabela que não seja linha L. A assinatura do canal ("You're at
//               Alpha Point, and this is where the story of … begins.") fica fora da conta.
//   [frase]     a frase de cada linha está INTEIRA no parágrafo dito (sem caixa, com espaços, aspas e travessões
//               normalizados): uma frase ou frases seguidas, do começo de frase ao fim de frase (o ponto final pode faltar),
//               nunca um pedaço, que deixaria os números da frase fora da regra [numeros]; o parágrafo existe; o veredito
//               é um dos cinco.
//   [trecho]    classe texto ou imprensa: a linha confirmada tem trecho (as outras, se trazem trecho, ele se confere igual);
//               o trecho tem 4 palavras ou mais, não tem reticências ("…" ou "...") e ESTÁ na cópia local (arquivo_local).
//               A busca normaliza só o que o OCR e a tipografia mudam: espaços e quebras de linha (inclusive o espaço
//               duro), a hifenização no fim de linha ("gov-\nernment" = "government"; "Canal-\nZone" = "Canal-Zone"), o
//               hífen mole, as ligaduras (ﬁ, ﬂ…), aspas e apóstrofos curvos × retos, os travessões (– — ‐ − e "--" = "-") e
//               as maiúsculas, o espaço em volta da pontuação ("1904 ," = "1904,"; "Bunau- Varilla" = "Bunau-Varilla") e a
//               forma Unicode (NFC: "i" + acento solto = "í"). O espaço entre letras conta ("cam bios" ≠ "cambios"). O
//               trecho vale inteiro: palavra ou número cortado na ponta não passa ("resident" dentro de "nonresident",
//               "1,000" dentro de "21,000", "10" dentro de "10.5"). Não achado: problema, a menos que a linha traga
//               "conferido_na_imagem" com um ARQUIVO que existe (pasta não vale; aí, aviso: quem conferiu a imagem responde
//               por ele). PDF e arquivo binário (UTF-16 inclusive) não são cópia em texto.
//   [imprensa]  classe imprensa: o trecho tem no máximo 20 palavras (a regra de direito autoral do dossiê: vai ao git).
//   [medicao]   classe medicao: arquivo_local existe (a saída do script de medida), o trecho está nele e traz um número
//               que a frase usa (o mesmo valor, ou o exato que um "about"/"more than"… da frase arredonda).
//   [linha_L]   "inferencia": true só com a afirmacao começando por "the listener concludes" ou "o ouvinte conclui"; e cada
//               linha L cita (no "fonte_id", texto ou lista, ou no "apoio", lista) o fonte_id ou o id de pelo menos uma
//               outra linha, que não seja L e esteja confirmada.
//   [veredito]  a tabela vence o veredito: com alguma linha fora de "confirmada", o laudo não pode dizer VEREDITO: PASS.
//               Laudo sem linha de VEREDITO também é problema (pode ter sido cortado), e o último VEREDITO tem de ser PASS ou
//               RESSALVA (a trava antes da voz, sintese.md, item 5): FAIL, ou outra palavra, é problema.
//   [numeros]   todo número que a frase de uma linha confirmada diz (dígito ou por extenso; "10.3 million" é um número só)
//               aparece, com o mesmo valor, nos trechos das linhas confirmadas daquela frase (dígito ou por extenso). Fica
//               fora o número que uma linha não confirmada da mesma frase traz na afirmacao (ela já o marcou). O número
//               com hedge passa quando o trecho traz o exato que ele arredonda, na precisão do número dito:
//                 about / roughly / around / approximately / close to: piso, arredondamento ou teto, e até 10 % de distância;
//                 more than / over: o exato é maior e o número dito é o piso dele;
//                 at least: o exato é igual ou maior e o dito é o piso dele;
//                 nearly / almost: o exato é menor, o dito é o teto ou o arredondamento, e até 10 %;
//                 fewer than / less than / under: o exato é menor e o dito é o teto;
//                 up to: o exato é igual ou menor e o dito é o teto.
//               Ex.: "about 23,000" com o trecho "23,559" passa; "about 30,000", não.
//   [tabela]    linha sem frase, sem veredito, sem paragrafo, ou classe fora das três na linha confirmada.
//
// OS LIMITES (o que este portão NÃO prova):
//   - O trecho prova que ele EXISTE na fonte, não que SUSTENTA a frase. Isso continua com o verificador (e o cético dele).
//   - O piso é por regex: ele erra para menos (nome próprio no começo de frase, número escrito de forma estranha) e nunca
//     é teto. "Mr. Smith" conta como começo de frase.
//   - Na regra [numeros], "one", "first", "second" e as frações e plurais soltos ("half", "a quarter", "thousands",
//     "dozens", "twice") não se exigem no trecho: são ambíguos demais ("one of", "at first", "thousands of"). Contam
//     no piso. Dois anos seguidos por extenso ("twenty twenty-four") viram dois números.
//   - A cópia local é a que o dossiê baixou; o portão não sabe se ela é fiel à fonte publicada, nem se o fonte_id é a
//     fonte certa. O "conferido_na_imagem" é declaração: o portão só confere que o arquivo existe.
//   - O piso é por PARÁGRAFO: uma linha basta. A frase de um parágrafo que nenhuma linha cobre (ou que só uma linha L
//     cobre) não passa pela regra [numeros]. O verificador cobre as frases; o portão não conta frase a frase.
//   - A cópia .html/.htm se lê crua, com as tags e as entidades: trecho que cruza uma tag não se acha. Aponte o .txt.
//   - O OCR que troca letra ("avater", "emits", "go percent") ou parte palavra ("installa tions") e o "u. s." × "u.s."
//     não se normalizam: o trecho se copia da cópia como ela está, ou vai com "conferido_na_imagem". As passagens do
//     fundamento.json do vídeo 3 não são literais da cópia em ~40 % dos casos (reticências, " / ", "(p. 230)", colunas
//     intercaladas dos Statutes): o trecho sai da cópia, não do dossiê (out/_tmp/cetico-portao-fatos/laudo.md).
//   - Sem o modo delta (cetico.md, item 5): a rodada final segue por diff, como no vídeo 2.
import { readFileSync, existsSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const CANAL = path.resolve(AQUI, "..");
const { numerais, maiusculas } = await import(pathToFileURL(path.join(AQUI, "aplicar-lista.mjs")).href);

export const VEREDITOS = ["confirmada", "corrigir", "datar", "atribuir", "nao_conferida"];
export const CLASSES = ["texto", "medicao", "imprensa"];
const ASSINATURA = /^You're at Alpha Point, and this is where the story of .+ begins\.$/;
const MESES = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/;

// ---------------------------------------------------------------- o texto falado (cópia literal do gate.mjs) ----
export const lerTexto = (arq) => readFileSync(arq, "utf8").replace(/^﻿/, "").replace(/\r\n?/g, "\n");
export function paragrafosDe(texto) {
  const paragrafos = [];
  let buf = [], emComentario = false;
  for (const l of texto.split("\n")) {
    let t = l;
    if (emComentario) { if (t.includes("-->")) { emComentario = false; t = t.slice(t.indexOf("-->") + 3); } else continue; }
    t = t.replace(/<!--.*?-->/g, "");
    if (t.includes("<!--")) { emComentario = true; t = t.slice(0, t.indexOf("<!--")); }
    if (/^\s*#/.test(t) || /^\s*>/.test(t)) { if (buf.length) { paragrafos.push(buf.join(" ")); buf = []; } continue; }
    if (!t.trim()) { if (buf.length) { paragrafos.push(buf.join(" ")); buf = []; } continue; }
    buf.push(t.trim());
  }
  if (buf.length) paragrafos.push(buf.join(" "));
  return paragrafos;
}
export const shaDe = (s) => createHash("sha256").update(s, "utf8").digest("hex");
export function falado(bruto) {
  const paragrafos = paragrafosDe(bruto);
  const texto = paragrafos.join("\n\n");
  return { paragrafos, texto, sha256: shaDe(texto), sha12: shaDe(texto).slice(0, 12) };
}
const frasesDe = (p) => p.match(/[^.?!]+(?:[.?!]+["”’)]*|$)/g)?.map((f) => f.trim()).filter(Boolean) || [];

// ---------------------------------------------------------------- a busca normalizada ----
const LIGADURAS = { "ﬀ": "ff", "ﬁ": "fi", "ﬂ": "fl", "ﬃ": "ffi", "ﬄ": "ffl", "ﬅ": "st", "ﬆ": "st" };
function tipografia(s) {
  // NFC: a cópia pode vir com o acento solto ("i" + U+0301, o laestrella-2018-cicatriz.txt do vídeo 3) e o trecho, junto
  return s.normalize("NFC").replace(/\r\n?/g, "\n").replace(/­/g, "").replace(/[ﬀ-ﬆ]/g, (c) => LIGADURAS[c] || c)
    .replace(/[‘’‚‛′`´]/g, "'").replace(/[“”„‟″]/g, '"')
    .replace(/[‐‑‒–—―−]/g, "-").replace(/--+/g, "-");
}
// o espaço que o OCR põe ou tira em volta da pontuação ("1904 ,", "Bunau- Varilla", "U.S. -wage") não conta; o espaço
// entre duas letras conta ("cam bios" não é "cambios": apagá-lo juntaria "a part" e "apart")
const espacos = (s) => s.replace(/\s+/g, " ").trim().toLowerCase()
  .replace(/ (?=[,.;:!?)\]])/g, "").replace(/([(\[]) /g, "$1").replace(/ ?- ?/g, "-");
export const normTrecho = (s) => espacos(tipografia(String(s)));
// a fonte em três leituras: a hifenização de fim de linha juntada ("gov-\nernment"), o hífen de composto mantido
// ("Canal-\nZone") e, para o trecho que tem os dois casos, a quebra marcada (SENT), que acharNaFonte lê como "" ou "-"
const SENT = "\u0001";
export function normFonte(s) {
  const t = tipografia(s);
  return [espacos(t.replace(/([A-Za-z])-[ \t]*\n[ \t]*(?=[a-z])/g, "$1")), espacos(t.replace(/-[ \t]*\n[ \t]*/g, "-")),
    espacos(t.replace(/([A-Za-z])-[ \t]*\n[ \t]*(?=[a-z])/g, "$1" + SENT))];
}
// o trecho só vale inteiro: nem palavra nem número cortado na ponta ("resident" dentro de "nonresident", "1,000" dentro
// de "21,000", "10" dentro de "10.5")
const PAL = /[\p{L}\p{N}]/u;
function nasBordas(v, i, f, t) {
  const a = v[i - 1], d = v[f];
  if (PAL.test(t[0]) && a !== undefined && (PAL.test(a) || a === SENT || (/\d/.test(t[0]) && /[.,]/.test(a) && /\d/.test(v[i - 2] || "")))) return false;
  const u = t[t.length - 1];
  if (PAL.test(u) && d !== undefined && (PAL.test(d) || d === SENT || (/\d/.test(u) && /[.,]/.test(d) && /\d/.test(v[f + 1] || "")))) return false;
  return true;
}
export function acharNaFonte(versoes, t) {
  if (!t) return false;
  for (const v of versoes.slice(0, 2)) for (let i = v.indexOf(t); i >= 0; i = v.indexOf(t, i + 1)) if (nasBordas(v, i, i + t.length, t)) return true;
  const v3 = versoes[2];
  if (!v3 || !v3.includes(SENT)) return false;
  const re = new RegExp([...t].map((c) => (c === "-" ? `[-${SENT}]` : c.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&"))).join(`${SENT}?`), "gu");
  for (const m of v3.matchAll(re)) if (nasBordas(v3, m.index, m.index + m[0].length, t)) return true;
  return false;
}
export const contarPalavras = (s) => (String(s).match(/[A-Za-z0-9][A-Za-z0-9'’.,$%-]*/g) || []).filter((w) => /[A-Za-z0-9]/.test(w)).length;

// ---------------------------------------------------------------- os números e o valor de cada um ----
const UNIDADES = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const DEZENAS = { twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
const ORDINAIS = Object.fromEntries([
  ..."first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth thirteenth fourteenth fifteenth sixteenth seventeenth eighteenth nineteenth"
    .split(" ").map((w, i) => [w, i + 1]),
  ["twentieth", 20], ["thirtieth", 30], ["fortieth", 40], ["fiftieth", 50], ["sixtieth", 60], ["seventieth", 70], ["eightieth", 80], ["ninetieth", 90],
]);
const ESCALAS = { hundred: 100, thousand: 1e3, million: 1e6, billion: 1e9, trillion: 1e12, hundredth: 100, thousandth: 1e3, millionth: 1e6, billionth: 1e9 };
const PLURAIS = new Set(["hundreds", "thousands", "millions", "billions", "trillions"]);
const VAGOS = new Set(["one", "first", "second", "half", "a half", "quarter", "a quarter", "quarters", "twice", "dozens", "halves"]);

// o valor de um numeral por extenso, como o numerais() do aplicar-lista o agrupa; null quando é vago demais para exigir
export function valorPorExtenso(v) {
  if (VAGOS.has(v)) return null;
  let toks = v.split(" ");
  let frac = 0;
  if (toks.length >= 3 && toks.slice(-3).join(" ") === "and a half") { frac = 0.5; toks = toks.slice(0, -3); }
  let total = 0, cur = 0, ant = null, temNumero = false, umA = false;
  for (const w of toks) {
    if (w === "a" || w === "an") { umA = true; continue; }
    if (w === "and") continue;
    let x = null, c = null;
    const iu = UNIDADES.indexOf(w);
    if (iu >= 0) { x = iu; c = iu >= 10 ? "T" : "U"; }
    else if (w in DEZENAS) { x = DEZENAS[w]; c = "D"; }
    else if (w in ORDINAIS) { x = ORDINAIS[w]; c = x >= 20 && x % 10 === 0 ? "D" : x >= 10 ? "T" : "U"; }
    if (x != null) {
      // "nineteen seventy-nine" = 1979: unidade ou "teen" seguida de outro grupo, ou dezena seguida de dezena ou "teen"
      if (cur > 0 && cur < 100 && (ant === "U" || ant === "T" || (ant === "D" && (c === "D" || c === "T")))) cur = cur * 100 + x;
      else cur += x;
      ant = c; temNumero = true; continue;
    }
    if (w in ESCALAS) {
      if (cur === 0) cur = 1;
      if (ESCALAS[w] === 100) cur *= 100; else { total += cur * ESCALAS[w]; cur = 0; }
      ant = "S"; temNumero = true; continue;
    }
    if (PLURAIS.has(w)) { if (!temNumero) return null; if (w === "hundreds") cur *= 100; else { total += cur * ESCALAS[w.slice(0, -1)]; cur = 0; } ant = "S"; continue; }
    if (w === "dozen") { if (!temNumero && !umA) return null; cur = (cur || 1) * 12; ant = "S"; temNumero = true; continue; }
    if (w === "quarter" || w === "quarters") { if (!temNumero) return null; cur = cur * 0.25; ant = "S"; continue; }
    if (w === "half") { if (!temNumero) return null; cur = cur * 0.5; ant = "S"; continue; }
    return null;
  }
  if (!temNumero) return null;
  return total + cur + frac;
}
export function valorDigito(v) {
  const s = v.replace(/^\$/, "").replace(/%$/, "").replace(/(st|nd|rd|th|s)$/i, "").replace(/,/g, "");
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}
// os números de um texto: [{v, valor, i, f}]; o dígito seguido de escala ("10.3 million") vira um número só
export function numerosDe(texto) {
  const lista = numerais(String(texto));
  const out = [];
  for (let k = 0; k < lista.length; k++) {
    const a = lista[k];
    if (/^\$?\d/.test(a.v)) {
      const b = lista[k + 1];
      if (b && b.v in ESCALAS && /^\s+$/.test(texto.slice(a.f, b.i))) {
        const d = valorDigito(a.v);
        out.push({ v: `${a.v} ${b.v}`, valor: d == null ? null : d * ESCALAS[b.v], i: a.i, f: b.f }); k++; continue;
      }
      out.push({ v: a.v, valor: valorDigito(a.v), i: a.i, f: a.f });
    } else out.push({ v: a.v, valor: valorPorExtenso(a.v), i: a.i, f: a.f });
  }
  return out;
}
const igual = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
function precisao(n) {
  if (n === 0) return null;
  if (Number.isInteger(n)) { let p = 1; while (n % (p * 10) === 0) p *= 10; return p; }
  const d = (String(n).split(".")[1] || "").length;
  return 10 ** -d;
}
const HEDGE = /\b(about|roughly|around|approximately|close to|more than|over|at least|nearly|almost|fewer than|less than|under|up to)\s+(?:an?\s+)?\$?\s*$/i;
export function hedgeAntes(texto, i) { const m = texto.slice(0, i).match(HEDGE); return m ? m[1].toLowerCase() : null; }
// o número dito (n), com hedge, arredonda o exato (v)?
export function arredonda(n, v, hedge) {
  const p = precisao(n);
  if (!p || !hedge || v === 0) return false;
  const piso = Math.floor(v / p + 1e-9) * p, arred = Math.round(v / p) * p, teto = Math.ceil(v / p - 1e-9) * p;
  const dist = Math.abs(v - n) / Math.abs(v);
  if (["about", "roughly", "around", "approximately", "close to"].includes(hedge)) return (igual(n, piso) || igual(n, arred) || igual(n, teto)) && dist <= 0.1;
  if (hedge === "more than" || hedge === "over") return v > n && igual(n, piso);
  if (hedge === "at least") return v >= n && igual(n, piso);
  if (hedge === "nearly" || hedge === "almost") return v < n && (igual(n, teto) || igual(n, arred)) && dist <= 0.1;
  if (hedge === "fewer than" || hedge === "less than" || hedge === "under") return v < n && igual(n, teto);
  if (hedge === "up to") return v <= n && igual(n, teto);
  return false;
}

// ---------------------------------------------------------------- os caminhos ----
const dentro = (base, p) => { const r = path.relative(path.resolve(base), path.resolve(p)); return r === "" || (!r.startsWith("..") && !path.isAbsolute(r)); };
function resolverLocal(arq, raiz) {
  if (typeof arq !== "string" || !arq.trim()) return { erro: "sem arquivo_local" };
  const a = arq.trim().replace(/\\/g, "/");
  if (path.isAbsolute(a) || /^[A-Za-z]:\//.test(a)) {
    const abs = path.resolve(a);
    const ok = process.platform === "win32"
      ? [CANAL, raiz].some((b) => dentro(b.toLowerCase(), abs.toLowerCase())) : [CANAL, raiz].some((b) => dentro(b, abs));
    return ok ? { abs } : { erro: `caminho absoluto fora da raiz do canal: ${a}` };
  }
  const abs = path.resolve(raiz, a);
  return dentro(raiz, abs) ? { abs } : { erro: `caminho que sai da raiz: ${a}` };
}

// ---------------------------------------------------------------- o principal ----
export function principal(argv) {
  const pos = argv.filter((a) => !a.startsWith("--"));
  const opts = argv.filter((a) => a.startsWith("--"));
  const saida = { proj: pos[0] || null, veredito: null, sha12: null, problemas: [], avisos: [] };
  const fim = (codigo, veredito, msg) => { if (msg) saida.erro = msg; saida.veredito = veredito; return { codigo, saida }; };
  let raiz = process.cwd();
  saida.json = opts.includes("--json");
  for (const o of opts) {
    if (o === "--json") continue;
    if (o.startsWith("--raiz=") && o.length > 7) raiz = path.resolve(o.slice(7));
    else return fim(2, "NAO_RODOU", `opção desconhecida: ${o} (há --json e --raiz=<pasta>)`);
  }
  const proj = pos[0];
  if (!proj || pos.length > 1 || !/^[a-z0-9][a-z0-9-]*$/.test(proj)) return fim(2, "NAO_RODOU", "uso: node ferramentas/portao-fatos.mjs <proj> [--json] [--raiz=<pasta>]");
  const base = path.join(raiz, "roteiros", proj);
  const arqRoteiro = path.join(base, "roteiro-narrador.md"), arqLaudo = path.join(base, "qc-roteiro", "fatos.laudo.md");
  const arqTabela = path.join(base, "qc-roteiro", "fatos-tabela.json");
  const rel = (p) => path.relative(raiz, p).replace(/\\/g, "/");
  saida.raiz = raiz.replace(/\\/g, "/");
  saida.arquivos = { roteiro: rel(arqRoteiro), laudo: rel(arqLaudo), tabela: rel(arqTabela) };
  for (const a of [arqRoteiro, arqLaudo, arqTabela]) if (!existsSync(a)) return fim(2, "NAO_RODOU", `não encontrado: ${rel(a)}`);

  const F = falado(lerTexto(arqRoteiro));
  saida.sha12 = F.sha12; saida.sha256 = F.sha256; saida.paragrafos = F.paragrafos.length;
  // o gate do vídeo, para cruzar o sha
  const gate = path.join(base, "_ferramentas", "gate.mjs");
  if (existsSync(gate)) {
    const r = spawnSync(process.execPath, [gate, arqRoteiro], { encoding: "utf8", cwd: process.cwd() });
    let sg = null;
    try { sg = JSON.parse(r.stdout).sha256; } catch {}
    if ((r.status === 0 || r.status === 1) && sg) {
      saida.gate = { sha256: sg, igual: sg === F.sha256 };
      if (sg !== F.sha256) return fim(2, "NAO_RODOU", `o sha do texto falado diverge do gate.mjs (${sg.slice(0, 12)} × ${F.sha12}): a leitura divergiu`);
    } else saida.avisos.push(`o gate.mjs do vídeo não rodou (saiu ${r.status}): o sha não se cruzou com ele`);
  }

  let linhas;
  try {
    const j = JSON.parse(readFileSync(arqTabela, "utf8").replace(/^﻿/, ""));
    linhas = Array.isArray(j) ? j : j && Array.isArray(j.linhas) ? j.linhas : null;
  } catch (e) { return fim(2, "NAO_RODOU", `a tabela não se lê: ${e.message}`); }
  if (!linhas) return fim(2, "NAO_RODOU", "a tabela não é uma lista nem {\"linhas\": [...]}");
  const laudo = lerTexto(arqLaudo);
  const P = saida.problemas, A = saida.avisos;
  const prob = (regra, msg, n) => P.push({ regra, ...(n != null ? { linha: n } : {}), msg });
  const rotulo = (l, n) => `linha ${n}${l && l.id ? ` (${l.id})` : ""}`;

  // [sha]
  const mSha = laudo.match(/^[ \t]*(?:>[ \t]*)?Revisão julgada:[ \t]*`?([0-9a-fA-F]{12,64})\b/m);
  const julgada = mSha ? mSha[1].slice(0, 12).toLowerCase() : null;
  saida.laudo = { revisao_julgada: julgada };
  if (!julgada) prob("sha", `o laudo não tem a linha "Revisão julgada: \`${F.sha12}\`"`);
  else if (julgada !== F.sha12) prob("sha", `o laudo julgou ${julgada}, e o texto falado de agora é ${F.sha12}`);

  // [cobertura]
  const confirmadas = linhas.filter((l) => l && l.veredito === "confirmada").length;
  const mCob = laudo.match(/COBERTURA:\s*\**\s*([\d.,]+)\s+de\s+([\d.,]+)/);
  const cob = mCob ? [Number(mCob[1].replace(/[.,]/g, "")), Number(mCob[2].replace(/[.,]/g, ""))] : null;
  saida.laudo.cobertura = cob ? { n: cob[0], m: cob[1] } : null;
  saida.tabela = { linhas: linhas.length, confirmadas };
  if (!cob) prob("cobertura", 'o laudo não tem a linha "COBERTURA: N de M"');
  else if (cob[0] !== confirmadas || cob[1] !== linhas.length) prob("cobertura", `o laudo diz COBERTURA: ${cob[0]} de ${cob[1]}, e a tabela tem ${confirmadas} confirmada(s) de ${linhas.length} linha(s)`);

  // [veredito]
  const vereditos = [...laudo.matchAll(/^[ \t]*(?:>[ \t]*)?\**VEREDITO(?:\s+DA\s+LENTE)?\**:\s*\**\s*([A-ZÁÂÃÉÊÍÓÔÕÚÇ_]+)/gm)].map((m) => m[1]);
  saida.laudo.veredito = vereditos.length ? vereditos[vereditos.length - 1] : null;
  if (!vereditos.length) prob("veredito", "o laudo não tem linha de VEREDITO (pode ter sido cortado)");
  // a trava antes da voz quer PASS ou RESSALVA para o sha (sintese.md, item 5): FAIL, ou palavra fora das três, não passa
  else if (!["PASS", "RESSALVA"].includes(saida.laudo.veredito)) prob("veredito", `o laudo termina em VEREDITO: ${saida.laudo.veredito} (só PASS ou RESSALVA deixam seguir)`);
  const naoConfirmadas = linhas.map((l, i) => [l, i + 1]).filter(([l]) => l && l.veredito !== "confirmada");
  if (vereditos.includes("PASS") && naoConfirmadas.length)
    prob("veredito", `o laudo diz VEREDITO: PASS, e a tabela tem ${naoConfirmadas.length} linha(s) fora de "confirmada" (${naoConfirmadas.map(([l, n]) => `${rotulo(l, n)}: ${l.veredito}`).join("; ")})`);

  // as linhas: a forma, o parágrafo e a frase
  const normFrase = (s) => normTrecho(s);
  // a frase é frase inteira (ou frases seguidas): começa no começo do parágrafo ou depois de um fim de frase, e acaba no
  // fim dele ou num fim de frase (com ou sem o ponto). Um pedaço ("the last office closed", ".") deixaria os números da
  // frase de fora da regra [numeros].
  const fraseInteira = (pn, fn) => {
    if (!/[\p{L}\p{N}]/u.test(fn)) return false;
    for (let i = pn.indexOf(fn); i >= 0; i = pn.indexOf(fn, i + 1)) {
      const antes = pn.slice(0, i), depois = pn.slice(i + fn.length);
      const ini = i === 0 || /[.?!]["')\]]*\s$/.test(antes);
      const fimOk = depois === "" || (/[.?!]["')\]]*$/.test(fn) && /^\s/.test(depois)) || /^[.?!]["')\]]*(\s|$)/.test(depois);
      if (ini && fimOk) return true;
    }
    return false;
  };
  const parsN = F.paragrafos.map(normFrase);
  const L = linhas.map((l, i) => {
    const n = i + 1, info = { l, n, par: null, ok: false };
    if (!l || typeof l !== "object") { prob("tabela", `${rotulo(l, n)} não é um objeto`, n); return info; }
    const mp = String(l.paragrafo ?? "").trim().match(/^(?:[Pp§]\s*)?(\d+)$/);
    if (!mp) { prob("tabela", `${rotulo(l, n)} sem "paragrafo" (número do parágrafo falado, de 1)`, n); return info; }
    info.par = Number(mp[1]);
    if (!VEREDITOS.includes(l.veredito)) prob("tabela", `${rotulo(l, n)}: veredito "${l.veredito}" fora de ${VEREDITOS.join("|")}`, n);
    if (typeof l.frase !== "string" || !l.frase.trim()) { prob("tabela", `${rotulo(l, n)} sem "frase"`, n); return info; }
    if (info.par < 1 || info.par > F.paragrafos.length) { prob("frase", `${rotulo(l, n)}: o parágrafo ${info.par} não existe (o texto falado tem ${F.paragrafos.length})`, n); return info; }
    if (!fraseInteira(parsN[info.par - 1], normFrase(l.frase))) { prob("frase", `${rotulo(l, n)}: a frase não está inteira no parágrafo ${info.par} (frase ou frases inteiras, não um pedaço): "${l.frase.slice(0, 100)}"`, n); return info; }
    info.ok = true;
    info.L = l.inferencia === true;
    return info;
  });

  // [piso]
  const piso = [];
  F.paragrafos.forEach((p, k) => {
    // a assinatura sai pelo texto, sem partir frases (o ponto de "16.1" partiria o número)
    const semAss = frasesDe(p).some((f) => ASSINATURA.test(f)) ? p.replace(/You're at Alpha Point, and this is where the story of .+? begins\./, " ") : p;
    const gatilhos = [];
    const nums = numerosDe(semAss);
    if (nums.length) gatilhos.push(`número (${nums.slice(0, 3).map((x) => x.v).join(", ")})`);
    if (MESES.test(semAss)) gatilhos.push(`data (${semAss.match(MESES)[1]})`);
    const nomes = [...new Set(maiusculas(semAss, true).filter((c) => !c.inicial && c.w !== "I").map((c) => c.w))];
    if (nomes.length) gatilhos.push(`nome próprio (${nomes.slice(0, 3).join(", ")})`);
    const qtas = L.filter((x) => x.par === k + 1 && !x.L).length;
    piso.push({ paragrafo: k + 1, gatilhos, linhas: qtas });
    if (gatilhos.length && !qtas) prob("piso", `o parágrafo ${k + 1} tem ${gatilhos.join(", ")} e nenhuma linha na tabela (fora as L): "${p.slice(0, 80)}…"`);
  });
  saida.piso = piso;

  // [trecho], [imprensa], [medicao]
  const cache = new Map();
  const lerFonte = (abs) => {
    if (cache.has(abs)) return cache.get(abs);
    let r;
    if (/\.pdf$/i.test(abs)) r = { erro: "é PDF, não cópia em texto (aponte o .txt do dossiê)" };
    else {
      const buf = readFileSync(abs);
      r = buf.includes(0) ? { erro: "é binário, não cópia em texto" } : { versoes: normFonte(buf.toString("utf8").replace(/^﻿/, "")) };
    }
    cache.set(abs, r);
    return r;
  };
  const achaNaFonte = (l, n, regra) => {
    const loc = resolverLocal(l.arquivo_local, raiz);
    if (loc.erro) { prob(regra, `${rotulo(l, n)}: ${loc.erro}`, n); return null; }
    if (!existsSync(loc.abs) || !statSync(loc.abs).isFile()) { prob(regra, `${rotulo(l, n)}: a cópia local não existe: ${l.arquivo_local}`, n); return null; }
    const fonte = lerFonte(loc.abs);
    if (fonte.erro) { prob(regra, `${rotulo(l, n)}: ${l.arquivo_local} ${fonte.erro}`, n); return null; }
    return acharNaFonte(fonte.versoes, normTrecho(l.trecho));
  };
  const imagemConferida = (l) => {
    const c = l.conferido_na_imagem;
    const arq = typeof c === "string" ? c : c && typeof c === "object" ? c.arquivo : null;
    if (!arq) return null;
    const loc = resolverLocal(arq, raiz);
    return { arq, pagina: c && typeof c === "object" ? c.pagina ?? null : null, existe: !loc.erro && existsSync(loc.abs) && statSync(loc.abs).isFile() };
  };
  for (const x of L) {
    if (!x.ok) continue;
    const { l, n } = x;
    const trecho = typeof l.trecho === "string" ? l.trecho.trim() : "";
    if (x.L) {
      // [linha_L]
      if (!/^(the listener concludes|o ouvinte conclui)\b/i.test(String(l.afirmacao || "").trim()))
        prob("linha_L", `${rotulo(l, n)} tem "inferencia": true, e a afirmacao não começa com "the listener concludes" nem "o ouvinte conclui"`, n);
      const cita = [l.fonte_id, l.apoio].flat(2).filter((v) => typeof v === "string" && v.trim()).map((v) => v.trim());
      const apoio = L.filter((y) => y !== x && y.ok && !y.L && y.l.veredito === "confirmada" && cita.some((c) => c === y.l.fonte_id || (y.l.id && c === y.l.id)));
      if (!apoio.length) prob("linha_L", `${rotulo(l, n)} (linha L) não cita nenhuma outra linha confirmada que a sustente (cita: ${cita.length ? cita.join(", ") : "nada"})`, n);
      if (trecho) { const ach = achaNaFonte(l, n, "trecho"); if (ach === false) prob("trecho", `${rotulo(l, n)}: o trecho não está na cópia ${l.arquivo_local}: "${trecho.slice(0, 100)}"`, n); }
      continue;
    }
    if (l.veredito === "confirmada" && !CLASSES.includes(l.classe)) { prob("tabela", `${rotulo(l, n)}: classe "${l.classe}" fora de ${CLASSES.join("|")}`, n); continue; }
    if (l.classe === "medicao") {
      const loc = resolverLocal(l.arquivo_local, raiz);
      if (loc.erro || !existsSync(loc.abs)) { prob("medicao", `${rotulo(l, n)} (medição): o arquivo da medida não existe: ${l.arquivo_local ?? "(sem arquivo_local)"}`, n); continue; }
      if (!trecho) { prob("medicao", `${rotulo(l, n)} (medição) sem trecho com o número`, n); continue; }
      if (/…|\.\.\./.test(trecho)) prob("medicao", `${rotulo(l, n)} (medição): o trecho tem reticências`, n);
      const ach = achaNaFonte(l, n, "medicao");
      if (ach === false) prob("medicao", `${rotulo(l, n)} (medição): o trecho não está em ${l.arquivo_local}: "${trecho.slice(0, 100)}"`, n);
      const nf = numerosDe(l.frase).filter((y) => y.valor != null), nt = numerosDe(trecho).filter((y) => y.valor != null);
      if (!nf.length) prob("medicao", `${rotulo(l, n)} (medição): a frase não diz número nenhum`, n);
      else if (!nf.some((y) => nt.some((z) => igual(y.valor, z.valor) || arredonda(y.valor, z.valor, hedgeAntes(l.frase, y.i)))))
        prob("medicao", `${rotulo(l, n)} (medição): o trecho não traz nenhum número que a frase usa (${nf.map((y) => y.v).join(", ")})`, n);
      continue;
    }
    if (!trecho) { if (l.veredito === "confirmada") prob("trecho", `${rotulo(l, n)} confirmada sem trecho`, n); continue; }
    const palavras = contarPalavras(trecho);
    if (palavras < 4) prob("trecho", `${rotulo(l, n)}: o trecho tem ${palavras} palavra(s) (o mínimo é 4): "${trecho}"`, n);
    if (/…|\.\.\./.test(trecho)) prob("trecho", `${rotulo(l, n)}: o trecho tem reticências (cite inteiro, ou em duas linhas): "${trecho.slice(0, 100)}"`, n);
    if (l.classe === "imprensa" && palavras > 20) prob("imprensa", `${rotulo(l, n)} (imprensa): o trecho tem ${palavras} palavras (o teto é 20)`, n);
    const ach = achaNaFonte(l, n, "trecho");
    if (ach === false) {
      const img = imagemConferida(l);
      if (img && img.existe) A.push(`${rotulo(l, n)}: o trecho não está na cópia em texto ${l.arquivo_local}, e foi conferido na imagem ${img.arq}${img.pagina != null ? `, p. ${img.pagina}` : ""} (declarado; o portão só confere que a imagem existe)`);
      else prob("trecho", `${rotulo(l, n)}: o trecho não está na cópia ${l.arquivo_local}${img ? ` (e a imagem declarada não existe: ${img.arq})` : ""}: "${trecho.slice(0, 100)}"`, n);
    }
  }

  // [numeros]: por frase, os trechos das linhas confirmadas juntos
  const grupos = new Map();
  for (const x of L) {
    if (!x.ok || x.L) continue;
    const k = `${x.par}|${normFrase(x.l.frase)}`;
    if (!grupos.has(k)) grupos.set(k, []);
    grupos.get(k).push(x);
  }
  for (const xs of grupos.values()) {
    const conf = xs.filter((x) => x.l.veredito === "confirmada");
    if (!conf.length) continue;
    const frase = conf[0].l.frase;
    const marcados = xs.filter((x) => x.l.veredito !== "confirmada").flatMap((x) => numerosDe(String(x.l.afirmacao || "")).filter((y) => y.valor != null).map((y) => y.valor));
    const nt = conf.flatMap((x) => numerosDe(String(x.l.trecho || "")).filter((y) => y.valor != null).map((y) => y.valor));
    for (const y of numerosDe(frase)) {
      if (y.valor == null || marcados.some((m) => igual(m, y.valor))) continue;
      if (nt.some((v) => igual(v, y.valor))) continue;
      const h = hedgeAntes(frase, y.i);
      if (h && nt.some((v) => arredonda(y.valor, v, h))) continue;
      const ns = conf.map((x) => x.n);
      prob("numeros", `${ns.length > 1 ? `linhas ${ns.join(", ")}` : rotulo(conf[0].l, ns[0])}: a frase diz "${h ? `${h} ` : ""}${y.v}", e nenhum trecho confirmado da frase traz esse número${h ? " (nem o exato que ele arredonda)" : ""}: "${frase.slice(0, 90)}"`, ns[0]);
    }
  }

  return fim(P.length ? 1 : 0, P.length ? "REPROVADO" : "PASSA");
}

function resumo(s) {
  const linhas = [`portão de fatos — ${s.proj ?? "?"}: ${s.veredito}`];
  if (s.erro) linhas.push(`  ${s.erro}`);
  if (s.sha12) linhas.push(`  sha12 do texto falado: ${s.sha12}${s.gate ? " (igual ao do gate.mjs)" : ""} · ${s.paragrafos} parágrafos`);
  if (s.laudo) linhas.push(`  laudo: Revisão julgada ${s.laudo.revisao_julgada ?? "—"} · COBERTURA ${s.laudo.cobertura ? `${s.laudo.cobertura.n} de ${s.laudo.cobertura.m}` : "—"} · VEREDITO ${s.laudo.veredito ?? "—"}`);
  if (s.tabela) linhas.push(`  tabela: ${s.tabela.confirmadas} confirmada(s) de ${s.tabela.linhas}`);
  for (const p of s.problemas) linhas.push(`  PROBLEMA [${p.regra}] ${p.msg}`);
  for (const a of s.avisos) linhas.push(`  aviso: ${a}`);
  return linhas.join("\n");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  let r;
  try { r = principal(process.argv.slice(2)); } catch (e) { r = { codigo: 2, saida: { veredito: "NAO_RODOU", erro: String(e.stack || e), problemas: [], avisos: [] } }; }
  if (r.saida.json) { const { json, ...s } = r.saida; console.log(JSON.stringify(s, null, 1)); } else console.log(resumo(r.saida));
  process.exit(r.codigo);
}
