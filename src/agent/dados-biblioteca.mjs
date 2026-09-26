#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/src/agent/dados-biblioteca.mjs (linhas 1-72, commit 4afda12).
// O que mudou: (1) saiu o envio do índice ao bucket público do Top10 (gcloud storage cp
// --predefined-acl=publicRead): nos canais da Régie o fact store é do CANAL e mora só no
// repositório dele, em assets/dados/index.json; (2) a pasta é resolvida a partir da raiz do canal
// (este arquivo mora em <canal>/src/agent/), não da pasta atual — e só é criada ao SALVAR (o estúdio
// criava a pasta no import, inclusive de quem só queria ler); REGIE_DADOS_DIR aponta outra pasta
// (o teste usa); (3) gravação por tmp + rename; índice ilegível é ERRO que diz o arquivo — o estúdio
// devolvia [] e o próximo salvarFato SOBRESCREVIA o índice inteiro com um fato só; (4) o teste de
// "sou o script chamado" funciona no Windows — pela régua do MOTOR (realpath dos dois lados, sem caixa
// no Windows), via scripts/stock/lib/ferramentas.mjs; (5) [revisão v1] a troca do índice usa o
// renomearComRetentativa do motor (o Defender segura o arquivo recém-escrito: EPERM/EBUSY).
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// BIBLIOTECA DE DADOS (fact store) — cache de FATOS verificados com fonte citável, reusável entre vídeos.
// Espelha a biblioteca de mídia (biblioteca.mjs), mas pra NÚMEROS/SÉRIES em vez de fotos/footage.
// Cada fato: assunto → valores + fonte + url + data + confiança. O agente de dados salva; o Diretor reusa.
// Cresce com o uso: cada vídeo enriquece a inteligência de dados dos próximos. NUNCA inventa — só guarda o verificado.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { importarDoMotor } from "../../scripts/lib/motor.mjs";
import { ehPrincipal } from "../../scripts/stock/lib/ferramentas.mjs";

// [porte Regie] rename com nova tentativa do motor: no Windows o antivírus segura o .tmp recém-escrito
const { renomearComRetentativa } = await importarDoMotor("src/midia/arquivos.mjs");

// [porte Regie] raiz do canal: src/agent/ -> ../..
const RAIZ_CANAL = fileURLToPath(new URL("../..", import.meta.url));
const dir = () => process.env.REGIE_DADOS_DIR || join(RAIZ_CANAL, "assets", "dados");
const idx = () => join(dir(), "index.json");

const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const slug = (s) => norm(s).replace(/\s+/g, "-").slice(0, 60);

function lerIndice() {
  if (!existsSync(idx())) return [];
  // [porte Regie] ilegível não vira [] — viraria um índice novo por cima do antigo no próximo salvar
  try { const j = JSON.parse(readFileSync(idx(), "utf8").replace(/^﻿/, "")); return Array.isArray(j) ? j : []; }
  catch (e) { throw Object.assign(new Error(`o fact store ${idx()} está ilegível (${e.message}) — conserte-o; nada foi gravado`), { code: "INDICE_ILEGIVEL" }); }
}
function salvarIndice(arr) {
  mkdirSync(dir(), { recursive: true });
  const tmp = `${idx()}.tmp-${process.pid}`;
  writeFileSync(tmp, JSON.stringify(arr, null, 2));
  renomearComRetentativa(tmp, idx());
}
// [porte Regie] subirIndiceGCS() saiu: o bucket público era do Top10; o fact store é do canal.

// RECUPERA um fato do cache por ASSUNTO (match por palavras-chave; reaproveita entre vídeos).
// maxIdadeDias: fatos voláteis (preços, reservas) expiram; passe 0 p/ ignorar idade.
export function buscarFato(assunto, { maxIdadeDias = 120 } = {}) {
  const lista = lerIndice();
  const alvo = new Set(norm(assunto).split(" ").filter(w => w.length > 2));
  let best = null, bestScore = 0;
  for (const f of lista) {
    const toks = new Set(norm(f.assunto + " " + (f.tags || []).join(" ")).split(" "));
    let hits = 0; for (const w of alvo) if (toks.has(w)) hits++;
    const score = alvo.size ? hits / alvo.size : 0;
    if (score > bestScore) { bestScore = score; best = f; }
  }
  if (!best || bestScore < 0.6) return null;                       // exige sobreposição forte de assunto
  if (maxIdadeDias > 0 && best.data_busca) {
    const dias = (Date.now() - new Date(best.data_busca).getTime()) / 864e5;
    if (dias > maxIdadeDias) return { ...best, _stale: true };     // achou mas VELHO → o agente decide re-buscar
  }
  return best;
}

// SALVA um fato verificado (dedup por assunto; atualiza se já existe). Retorna o fato salvo.
export function salvarFato({ assunto, tipo = "numero", valores = [], unidade = "", fonte = "", fonte_url = "", confianca = "media", nota = "", tags = [] }) {
  if (!assunto || !valores?.length) return null;
  const lista = lerIndice();
  const id = slug(assunto);
  const fato = { id, assunto, tipo, valores, unidade, fonte, fonte_url, confianca, nota, tags, data_busca: new Date().toISOString(),
    hash: createHash("sha1").update(JSON.stringify(valores)).digest("hex").slice(0, 10) };
  const i = lista.findIndex(f => f.id === id);
  if (i >= 0) lista[i] = fato; else lista.push(fato);
  salvarIndice(lista);
  return fato;
}

export const statsFatos = () => { const lista = lerIndice(); return { total: lista.length, assuntos: lista.map(f => f.assunto) }; };

// CLI: node src/agent/dados-biblioteca.mjs            → estatísticas
//      node src/agent/dados-biblioteca.mjs "<assunto>" → busca um fato no cache
// [porte Regie] a comparação "file://" + argv[1] nunca é verdadeira no Windows
if (ehPrincipal(import.meta.url)) {
  try {
    const q = process.argv.slice(2).join(" ");
    if (!q) console.log(JSON.stringify(statsFatos(), null, 2));
    else { const f = buscarFato(q, { maxIdadeDias: 0 }); console.log(f ? JSON.stringify(f, null, 2) : "(não no cache)"); }
  } catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
