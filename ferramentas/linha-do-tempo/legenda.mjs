#!/usr/bin/env node
// legenda.mjs — a legenda em português da linha do tempo pré-render: a frase da narração traduzida, embaixo da prévia,
// trocando junto com a voz. Só aparece na página (pagina.js): não entra na cena, no render, nos portões nem no XML.
//
// Pedido do Lucas (22/10/2026, no chat): "Quanto ao nosso painel de aprovação de cenas, eu queria por legenda em
// português, apenas na preview que eu vejo. Acredito que vá facilitar minha verificação". A escolha dele: "Sobre o vídeo
// (Recomendado)" ("Embaixo da prévia, como legenda do YouTube: a frase da narração traduzida, trocando junto com a voz. A
// tecla L liga e desliga. A linha em inglês com a palavra acesa continua embaixo, como hoje. Só aparece na página: não
// entra na cena, no render nem no XML.").
//
// Uso (cwd na raiz do canal; --raiz=<pasta> troca a raiz, para provas numa cópia):
//   node ferramentas/linha-do-tempo/legenda.mjs montar <proj> [--json]
//     Lê a tradução (out/<proj>/_tmp/linha-do-tempo/legenda-pt.traducao.json, feita por outro agente) e o
//     out/<proj>/words.json, confere TUDO (abaixo) e, só se tudo passar, grava out/<proj>/_tmp/linha-do-tempo/legenda-pt.json,
//     o arquivo que o servidor serve à página. Saída: 0 = gravado · 1 = problemas (cada um com o bloco e o motivo), nada
//     gravado · 2 = uso errado ou projeto que não existe. Bloco acima de 84 caracteres ou abaixo de 0,8 s de fala é aviso,
//     não erro.
//   node ferramentas/linha-do-tempo/legenda.mjs conferir <proj> [--json]
//     Só lê. 0 = a legenda montada está em dia com o words.json de agora · 1 = não está (diz por quê) · 2 = uso errado.
//
// A tradução (o contrato entre quem traduz e este script), UTF-8:
//   { "proj": "<proj>", "words_sha256": "<sha256 dos bytes do words.json na hora da tradução>",
//     "roteiro_sha256": "<sha256 dos bytes de roteiros/<proj>/roteiro-narrador.md>", "idioma": "pt-BR",
//     "blocos": [ { "de": 0, "ate": 11, "pt": "Uma linha corre ao longo da ..." }, ... ] }
//   - "de" e "ate": índices (base 0, inclusivos) no array do words.json ({w, start, end}).
//   - Os blocos cobrem TODAS as palavras, em ordem, sem buraco e sem sobreposição: o primeiro começa em 0, cada "de" é o
//     "ate" anterior + 1, e o último "ate" é o último índice do words.json.
//   - "pt": não vazio, sem quebra de linha (quem quebra a linha na tela é a página), até 100 caracteres (alvo: 84, em 2
//     linhas de 42).
//
// Quando a narração muda (words.json novo), a legenda montada deixa de valer: o servidor diz à página "legenda de outra
// versão da narração", e ela some. Traduz-se de novo sobre o words.json novo e roda-se o montar.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, realpathSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { RAIZ_CANAL, pastaLinha } from "./linha.mjs";

export const IDIOMA = "pt-BR";
export const PT_MAX = 100;          // teto duro: acima disto, o bloco é recusado
export const PT_ALVO = 84;          // 2 linhas de 42: acima disto, aviso
export const FALA_MIN_S = 0.8;      // abaixo disto, aviso (a última frase curta de um parágrafo pode juntar-se à anterior)

export const arqTraducao = (raiz, proj) => join(pastaLinha(raiz, proj), "legenda-pt.traducao.json");
export const arqLegenda = (raiz, proj) => join(pastaLinha(raiz, proj), "legenda-pt.json");
export const relLegenda = (proj) => `out/${proj}/_tmp/linha-do-tempo/legenda-pt.json`;
const arqWords = (raiz, proj) => join(raiz, "out", proj, "words.json");
const arqRoteiro = (raiz, proj) => join(raiz, "roteiros", proj, "roteiro-narrador.md");

// O mesmo critério do nomeSeguro do molde (scripts/galeria/caminho.mjs): um slug, nada que monte caminho.
const projSeguro = (s) => typeof s === "string" && /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/.test(s) && !s.includes("..");
const sha256 = (b) => createHash("sha256").update(b).digest("hex");
const HEX64 = /^[0-9a-f]{64}$/;
// Quebra de linha (de qualquer tipo) e caractere de controle: a página quebra a linha, o texto não.
const QUEBRA = /[\r\n\u0085\u2028\u2029]/;
// Os controles C1, os de direção do texto (bidi) e os de largura zero também: na tela, nenhum deles se vê.
const CONTROLE = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f​-‏‪-‮⁠-⁩﻿]|\t/;
// O que não se vê não conta como texto: um "pt" só de espaço de largura zero vira uma tarja preta vazia.
const INVISIVEL = /[\s​-‍⁠﻿]/g;

/** As palavras do words.json: a lista de {w, start, end} (ou o .words, como a página tolera). null se ilegível. */
export function palavrasDe(dados) {
  const p = Array.isArray(dados) ? dados : dados && Array.isArray(dados.words) ? dados.words : null;
  return p;
}

/**
 * Confere a tradução contra as palavras de agora. Pura: recebe os objetos e os sha256 já calculados.
 * Devolve {problemas, avisos, blocos}: cada problema e aviso é {bloco (índice no array, ou null), motivo}; `blocos` é a
 * legenda pronta ({de, ate, t0, t1, pt}), só com sentido quando não há problema.
 * @param {any} trad          o JSON da tradução
 * @param {any[]} palavras    o array do words.json
 * @param {{proj:string, wordsSha:string, roteiroSha:string|null}} agora
 */
export function conferirTraducao(trad, palavras, { proj, wordsSha, roteiroSha }) {
  const problemas = [], avisos = [], blocos = [];
  const erro = (bloco, motivo) => problemas.push({ bloco, motivo });
  if (!trad || typeof trad !== "object" || Array.isArray(trad)) { erro(null, "a tradução tem de ser um objeto JSON"); return { problemas, avisos, blocos }; }
  if (trad.proj !== proj) erro(null, `"proj" é ${JSON.stringify(trad.proj)}, não "${proj}"`);
  if (trad.idioma !== IDIOMA) erro(null, `"idioma" é ${JSON.stringify(trad.idioma)}, não "${IDIOMA}"`);
  if (typeof trad.words_sha256 !== "string" || !HEX64.test(trad.words_sha256)) erro(null, "\"words_sha256\" não é um sha256 (64 hex)");
  else if (trad.words_sha256 !== wordsSha) erro(null, `a tradução é de outra versão da narração: "words_sha256" ${trad.words_sha256.slice(0, 12)}…, e o words.json de agora é ${wordsSha.slice(0, 12)}… (traduza de novo sobre o words.json de agora)`);
  if (typeof trad.roteiro_sha256 !== "string" || !HEX64.test(trad.roteiro_sha256)) erro(null, "\"roteiro_sha256\" não é um sha256 (64 hex)");
  else if (roteiroSha === null) erro(null, `falta roteiros/${proj}/roteiro-narrador.md para conferir o "roteiro_sha256"`);
  else if (trad.roteiro_sha256 !== roteiroSha) erro(null, `a tradução é de outra versão do roteiro: "roteiro_sha256" ${trad.roteiro_sha256.slice(0, 12)}…, e o roteiro-narrador.md de agora é ${roteiroSha.slice(0, 12)}…`);
  if (!Array.isArray(palavras) || !palavras.length) { erro(null, "o words.json não tem palavras"); return { problemas, avisos, blocos }; }
  if (!Array.isArray(trad.blocos) || !trad.blocos.length) { erro(null, "\"blocos\" tem de ser uma lista com pelo menos um bloco"); return { problemas, avisos, blocos }; }

  const n = palavras.length, ultimo = n - 1;
  const tempo = (i, k) => { const p = palavras[i]; const v = p && typeof p === "object" ? Number(p[k]) : NaN; return Number.isFinite(v) ? v : null; };
  let esperado = 0;            // o "de" que o próximo bloco tem de ter
  let t0Anterior = -Infinity;
  trad.blocos.forEach((b, k) => {
    const nome = k;
    if (!b || typeof b !== "object" || Array.isArray(b)) { erro(nome, "o bloco tem de ser um objeto {de, ate, pt}"); return; }
    const { de, ate, pt } = b;
    let indicesOk = true;
    if (!Number.isInteger(de) || !Number.isInteger(ate)) { erro(nome, `"de" e "ate" têm de ser inteiros (veio de=${JSON.stringify(de)}, ate=${JSON.stringify(ate)})`); indicesOk = false; }
    else {
      if (de < 0 || de > ultimo) { erro(nome, `"de" ${de} fora do words.json (0 a ${ultimo})`); indicesOk = false; }
      if (ate < 0 || ate > ultimo) { erro(nome, `"ate" ${ate} fora do words.json (0 a ${ultimo})`); indicesOk = false; }
      if (de > ate) { erro(nome, `"de" ${de} depois do "ate" ${ate}`); indicesOk = false; }
    }
    if (Number.isInteger(de)) {
      // A cobertura: cada "de" é o "ate" anterior + 1 (o primeiro, 0).
      if (de > esperado) erro(nome, k === 0 ? `o primeiro bloco começa em ${de}, não em 0: as palavras 0–${de - 1} ficam sem legenda`
        : `buraco: as palavras ${esperado}–${de - 1} ficam sem legenda (o bloco anterior acaba em ${esperado - 1})`);
      else if (de < esperado) erro(nome, k === 0 ? `"de" ${de} antes de 0` : `sobreposição: o bloco começa em ${de}, mas o anterior já cobre até ${esperado - 1}`);
    }
    if (Number.isInteger(ate) && Number.isInteger(de) && ate >= de) esperado = Math.max(esperado, ate + 1);
    // O texto.
    let texto = null;
    if (typeof pt !== "string") erro(nome, "\"pt\" tem de ser texto");
    else if (!pt.replace(INVISIVEL, "").length) erro(nome, "\"pt\" vazio");
    else if (QUEBRA.test(pt)) erro(nome, "\"pt\" com quebra de linha (quem quebra a linha na tela é a página)");
    else if (CONTROLE.test(pt)) erro(nome, "\"pt\" com caractere de controle (tabulação inclusive)");
    else {
      texto = pt.normalize("NFC");
      const nc = [...texto].length;
      if (nc > PT_MAX) erro(nome, `"pt" com ${nc} caracteres (o teto é ${PT_MAX})`);
      else if (nc > PT_ALVO) avisos.push({ bloco: nome, motivo: `"pt" com ${nc} caracteres (o alvo é até ${PT_ALVO}, 2 linhas de 42)` });
    }
    // Os tempos, das palavras.
    if (!indicesOk) return;
    const t0 = tempo(de, "start"), t1 = tempo(ate, "end");
    if (t0 === null || t1 === null) { erro(nome, `o words.json não tem tempo válido em ${t0 === null ? `start da palavra ${de}` : `end da palavra ${ate}`}`); return; }
    if (t1 < t0) { erro(nome, `o fim (${t1} s) vem antes do começo (${t0} s) no words.json`); return; }
    if (t0 < t0Anterior) erro(nome, `o começo (${t0} s) vem antes do começo do bloco anterior (${t0Anterior} s) no words.json`);
    t0Anterior = Math.max(t0Anterior, t0);
    const dur = t1 - t0;
    if (dur < FALA_MIN_S) avisos.push({ bloco: nome, motivo: `${dur.toFixed(2)} s de fala (abaixo de ${FALA_MIN_S} s; a última frase curta de um parágrafo pode juntar-se à anterior)` });
    if (texto !== null) blocos.push({ de, ate, t0, t1, pt: texto });
  });
  if (esperado <= ultimo) erro(trad.blocos.length - 1, `as palavras ${esperado}–${ultimo} ficam sem legenda (o último bloco tem de acabar em ${ultimo}, o último índice do words.json)`);
  return { problemas, avisos, blocos };
}

/** Lê um arquivo do disco: {ok, bytes} ou {ok:false, motivo}. */
function ler(abs, rotulo) {
  try { return { ok: true, bytes: readFileSync(abs) }; }
  catch (e) { return { ok: false, motivo: e.code === "ENOENT" ? `falta ${rotulo}` : `não consegui ler ${rotulo}: ${e.message}` }; }
}
function jsonDe(bytes, rotulo) {
  try { return { ok: true, v: JSON.parse(bytes.toString("utf8").replace(/^\uFEFF/, "")) }; }
  catch (e) { return { ok: false, motivo: `${rotulo} não é JSON válido: ${e.message}` }; }
}

/** Erro que vira saída 2 ("não rodou"): uso errado, projeto que não existe. */
export class UsoErrado extends Error {}

function exigirProjeto(raiz, proj) {
  if (!projSeguro(proj)) throw new UsoErrado(`projeto inválido: ${JSON.stringify(proj)}`);
  let st; try { st = statSync(join(raiz, "out", proj)); } catch { st = null; }
  if (!st || !st.isDirectory()) throw new UsoErrado(`o projeto não existe: out/${proj}/`);
}

/**
 * O verbo montar. Devolve {ok, problemas, avisos, gravado, legenda}. Só grava com ok; grava por troca (arquivo
 * temporário + rename), para o servidor nunca ler uma legenda pela metade.
 */
export function montar(raiz, proj, { agora = () => new Date() } = {}) {
  exigirProjeto(raiz, proj);
  const relT = `out/${proj}/_tmp/linha-do-tempo/legenda-pt.traducao.json`;
  const problemas = [];
  const rt = ler(arqTraducao(raiz, proj), relT);
  const rw = ler(arqWords(raiz, proj), `out/${proj}/words.json`);
  const rr = ler(arqRoteiro(raiz, proj), `roteiros/${proj}/roteiro-narrador.md`);
  if (!rt.ok) problemas.push({ bloco: null, motivo: `${rt.motivo} (a tradução é de outro agente: este script não traduz)` });
  if (!rw.ok) problemas.push({ bloco: null, motivo: rw.motivo });
  if (problemas.length) return { ok: false, problemas, avisos: [], gravado: null };
  const jt = jsonDe(rt.bytes, relT), jw = jsonDe(rw.bytes, `out/${proj}/words.json`);
  if (!jt.ok) problemas.push({ bloco: null, motivo: jt.motivo });
  if (!jw.ok) problemas.push({ bloco: null, motivo: jw.motivo });
  if (problemas.length) return { ok: false, problemas, avisos: [], gravado: null };
  const palavras = palavrasDe(jw.v);
  if (!palavras) return { ok: false, problemas: [{ bloco: null, motivo: "o words.json não é uma lista de palavras" }], avisos: [], gravado: null };
  const wordsSha = sha256(rw.bytes), roteiroSha = rr.ok ? sha256(rr.bytes) : null;
  const r = conferirTraducao(jt.v, palavras, { proj, wordsSha, roteiroSha });
  if (r.problemas.length) return { ok: false, problemas: r.problemas, avisos: r.avisos, gravado: null };
  const legenda = { proj, idioma: IDIOMA, words_sha256: wordsSha, roteiro_sha256: roteiroSha, montado_em: agora().toISOString(), blocos: r.blocos };
  const destino = arqLegenda(raiz, proj), tmp = `${destino}.tmp-${process.pid}`;
  mkdirSync(pastaLinha(raiz, proj), { recursive: true });
  try { writeFileSync(tmp, JSON.stringify(legenda, null, 1) + "\n", "utf8"); renameSync(tmp, destino); }
  finally { try { rmSync(tmp, { force: true }); } catch {} }
  return { ok: true, problemas: [], avisos: r.avisos, gravado: relLegenda(proj), legenda };
}

/** A legenda montada tem a forma que a página lê? Pura. */
function formaDaLegenda(leg, proj) {
  if (!leg || typeof leg !== "object" || Array.isArray(leg)) return "a legenda montada não é um objeto";
  if (leg.proj !== proj) return `a legenda montada é de outro projeto (${JSON.stringify(leg.proj)})`;
  if (typeof leg.words_sha256 !== "string" || !HEX64.test(leg.words_sha256)) return "a legenda montada não tem o words_sha256";
  if (!Array.isArray(leg.blocos) || !leg.blocos.length) return "a legenda montada não tem blocos";
  const ruim = leg.blocos.findIndex((b) => !b || !Number.isFinite(b.t0) || !Number.isFinite(b.t1) || typeof b.pt !== "string");
  if (ruim >= 0) return `o bloco ${ruim} da legenda montada não tem t0, t1 e pt`;
  return null;
}

/** O verbo conferir: só lê. {emDia, motivo, avisos}. */
export function conferir(raiz, proj) {
  exigirProjeto(raiz, proj);
  const rl = ler(arqLegenda(raiz, proj), relLegenda(proj));
  if (!rl.ok) return { emDia: false, motivo: `${rl.motivo}: rode o montar depois da tradução`, avisos: [] };
  const jl = jsonDe(rl.bytes, relLegenda(proj));
  if (!jl.ok) return { emDia: false, motivo: jl.motivo, avisos: [] };
  const forma = formaDaLegenda(jl.v, proj);
  if (forma) return { emDia: false, motivo: forma, avisos: [] };
  const rw = ler(arqWords(raiz, proj), `out/${proj}/words.json`);
  if (!rw.ok) return { emDia: false, motivo: rw.motivo, avisos: [] };
  const wordsSha = sha256(rw.bytes);
  if (jl.v.words_sha256 !== wordsSha) {
    return { emDia: false, avisos: [],
      motivo: `a narração mudou depois da montagem: a legenda é do words.json ${jl.v.words_sha256.slice(0, 12)}…, e o de agora é ${wordsSha.slice(0, 12)}… (traduza de novo sobre o words.json de agora e rode o montar)` };
  }
  const avisos = [];
  const rr = ler(arqRoteiro(raiz, proj), `roteiros/${proj}/roteiro-narrador.md`);
  if (!rr.ok) avisos.push(`${rr.motivo}: não conferi o roteiro_sha256`);
  else if (sha256(rr.bytes) !== jl.v.roteiro_sha256) avisos.push("o roteiro-narrador.md mudou depois da montagem (o words.json não): confira se a tradução ainda diz o mesmo");
  return { emDia: true, motivo: null, avisos, blocos: jl.v.blocos.length, montadoEm: jl.v.montado_em || null };
}

// ─── o estado que o servidor manda à página ──────────────────────────────────────────────────────

// O sha256 do words.json e o JSON da legenda, recalculados só quando o tamanho ou a data mudam (a página pergunta a
// cada 2 s).
const _memo = new Map();
function memo(abs, fazer) {
  let st; try { st = statSync(abs); } catch { _memo.delete(abs); return null; }
  if (!st.isFile()) return null;
  const c = _memo.get(abs);
  if (c && c.tam === st.size && c.mt === st.mtimeMs) return c;
  let v; try { v = fazer(readFileSync(abs)); } catch { v = undefined; }
  const novo = { tam: st.size, mt: st.mtimeMs, v };
  _memo.set(abs, novo);
  return novo;
}

/**
 * A legenda para a página, sem nunca mandar a velha: "em-dia" só quando o words_sha256 da legenda montada é o sha256
 * do words.json que o servidor serve agora. Devolve {estado: "em-dia"|"outra-versao"|"sem", motivo (o título curto do
 * botão), detalhe, rel, ver, words_sha256 (o do words.json de agora)}; rel e ver só no "em-dia".
 */
export function estadoDaLegenda(raiz, proj) {
  const sem = (detalhe, wordsSha = null) => ({ estado: "sem", motivo: "sem legenda", detalhe, rel: null, ver: null, words_sha256: wordsSha });
  if (!projSeguro(proj)) return sem("projeto inválido");
  const w = memo(arqWords(raiz, proj), (b) => sha256(b));
  if (!w || !w.v) return sem(`falta out/${proj}/words.json`);
  const l = memo(arqLegenda(raiz, proj), (b) => JSON.parse(b.toString("utf8").replace(/^\uFEFF/, "")));
  if (!l) return sem("a legenda não foi montada (legenda.mjs montar)", w.v);
  const forma = l.v === undefined ? "a legenda montada não é JSON válido" : formaDaLegenda(l.v, proj);
  if (forma) return sem(forma, w.v);
  if (l.v.words_sha256 !== w.v) {
    return { estado: "outra-versao", motivo: "legenda de outra versão da narração", rel: null, ver: null, words_sha256: w.v,
      detalhe: "a narração (words.json) mudou depois da montagem: traduza de novo e rode o montar" };
  }
  return { estado: "em-dia", motivo: null, detalhe: null, rel: relLegenda(proj), words_sha256: w.v,
    ver: `${l.v.words_sha256.slice(0, 12)}-${l.tam.toString(36)}-${Math.floor(l.mt).toString(36)}` };
}

// ─── linha de comando ────────────────────────────────────────────────────────────────────────────

const USO = `uso:
  node ferramentas/linha-do-tempo/legenda.mjs montar <proj> [--json]
  node ferramentas/linha-do-tempo/legenda.mjs conferir <proj> [--json]
  (os dois aceitam --raiz=<pasta>; o padrão é a raiz do canal)`;
const OPCOES = ["raiz", "json"];

export function principal(argv) {
  const op = {}, pos = [];
  for (const x of argv) {
    const m = /^--([a-z-]+)(?:=([\s\S]*))?$/.exec(x);
    if (m) op[m[1]] = m[2] === undefined ? true : m[2]; else pos.push(x);
  }
  const [verbo, proj, ...resto] = pos;
  if (!verbo) { console.error(`✗ diga o verbo\n${USO}`); return 2; }
  if (!["montar", "conferir"].includes(verbo)) { console.error(`✗ verbo desconhecido: ${verbo}\n${USO}`); return 2; }
  if (!proj || resto.length) { console.error(`✗ diga o projeto (um só)\n${USO}`); return 2; }
  const desconhecidas = Object.keys(op).filter((k) => !OPCOES.includes(k));
  if (desconhecidas.length) { console.error(`✗ opção desconhecida: --${desconhecidas.join(", --")}\n${USO}`); return 2; }
  if (op.raiz !== undefined && (typeof op.raiz !== "string" || !op.raiz.trim())) { console.error(`✗ --raiz=<pasta>\n${USO}`); return 2; }
  const raiz = resolve(typeof op.raiz === "string" ? op.raiz : RAIZ_CANAL);
  try {
    if (verbo === "montar") {
      const r = montar(raiz, proj);
      if (op.json) { console.log(JSON.stringify({ ok: r.ok, gravado: r.gravado, problemas: r.problemas, avisos: r.avisos, blocos: r.legenda?.blocos.length ?? 0 }, null, 2)); return r.ok ? 0 : 1; }
      const onde = (x) => (x.bloco === null ? "tradução" : `bloco ${x.bloco}`);
      for (const a of r.avisos) console.log(`  aviso · ${onde(a)}: ${a.motivo}`);
      if (!r.ok) {
        console.log(`✗ ${proj}: a legenda NÃO foi montada (nada gravado). ${r.problemas.length} problema(s):`);
        for (const p of r.problemas) console.log(`  - ${onde(p)}: ${p.motivo}`);
        return 1;
      }
      console.log(`✓ ${proj}: ${r.legenda.blocos.length} blocos em ${r.gravado}` + (r.avisos.length ? ` (${r.avisos.length} aviso(s) acima)` : ""));
      return 0;
    }
    const r = conferir(raiz, proj);
    if (op.json) { console.log(JSON.stringify(r, null, 2)); return r.emDia ? 0 : 1; }
    if (!r.emDia) { console.log(`✗ ${proj}: a legenda não está em dia — ${r.motivo}`); return 1; }
    console.log(`✓ ${proj}: a legenda (${r.blocos} blocos, montada em ${r.montadoEm || "?"}) está em dia com o words.json de agora`);
    for (const a of r.avisos) console.log(`  aviso: ${a}`);
    return 0;
  } catch (e) {
    console.error(`✗ ${e instanceof UsoErrado ? e.message : `${verbo} não rodou: ${e.stack || e.message}`}`);
    return 2;
  }
}

function ehPrincipal() {
  if (!process.argv[1]) return false;
  try {
    const eu = realpathSync(fileURLToPath(import.meta.url)), chamado = realpathSync(resolve(process.argv[1]));
    return process.platform === "win32" ? eu.toLowerCase() === chamado.toLowerCase() : eu === chamado;
  } catch { return false; }
}

// exitCode, e não process.exit: a saída para um pipe termina de ser escrita antes de o processo sair.
if (ehPrincipal()) process.exitCode = principal(process.argv.slice(2));
