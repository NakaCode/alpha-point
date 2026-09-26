// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/serve-galeria.mjs (linhas 23-139, 166-207 e 346-350, commit 4afda12).
// O que mudou:
//   · sem estudio.db: a lista de projetos é SÓ o disco (quem tem out/<slug>/graphics/*.html). O
//     banco só enfeitava com título e estado da pauta; o que sobra de "estado" aqui é o número de
//     marcas abertas na fila, que é o que o dono precisa ver; [porte Régie]
//   · sem project.json (o estúdio o escrevia só depois de finalizar): o manifesto é o espelho, pelo
//     helper do canal (scripts/lib/espelho-path.mjs), que também acha o legado plano-roteirista.json;
//   · as palavras do trecho saem do arquivo que o scripts/lib/words-do-espelho.mjs MEDE ser o relógio
//     do espelho — o estúdio lia words.json cravado, a mesma armadilha que aquele helper documenta;
//   · a narração é out/<proj>/narracao.wav (a que o narrar do motor grava). O _master.mp4 de 11 GB
//     era o vídeo do apresentador: canal faceless não tem, e a busca por ele saiu; [porte Régie]
//   · caminhos por path.join a partir da raiz do canal, nunca `resolve("out/...")` com barra. [porte Régie]
// Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { espelhoPath } from "../lib/espelho-path.mjs";
import { wordsDoEspelho } from "../lib/words-do-espelho.mjs";
import { nomeSeguro } from "./caminho.mjs";

/** O que conta como cena revisável: `<id>.html` em graphics/, fora prévias, rascunhos e ocultos. */
const ehCena = (f) => f.endsWith(".html") && !f.includes("-preview") && !f.startsWith("_") && !f.startsWith(".");

const lerJson = (p) => { try { return JSON.parse(readFileSync(p, "utf8")); } catch { return null; } };

// MANIFESTO por projeto, com cache por mtime do espelho (o estúdio mediu ~30 JSONs reparseados por
// F5 sem ele). Editar o espelho invalida sozinho — continua "ao vivo", só não relê à toa.
const _manCache = new Map();
export function manifesto(raiz, proj) {
  let rel;
  try { rel = espelhoPath(proj); } catch { return { cenas: [], fimJanela: 0 }; }
  const p = join(raiz, rel);
  let mt; try { mt = statSync(p).mtimeMs; } catch { return { cenas: [], fimJanela: 0 }; }
  const hit = _manCache.get(p);
  if (hit && hit.mt === mt) return hit.val;
  const e = lerJson(p) || {};
  const seg = e.segmentos || e.scenes || e.cenas || [];
  const cenas = seg.filter((s) => s && s.id).map((s) => {
    const inSec = Number.isFinite(+s.inSec) ? +s.inSec : null;
    const dur = Number.isFinite(+s.dur) ? +s.dur : 0;
    const outSec = Number.isFinite(+s.outSec) ? +s.outSec : (inSec != null ? inSec + dur : null);
    return { id: String(s.id), tese: s.tese || "", inSec, outSec, texto: s.narracao || s.texto || s.text || "" };
  });
  const fimJanela = cenas.reduce((m, c) => Math.max(m, c.outSec ?? 0), 0);
  const val = { cenas, fimJanela };
  _manCache.set(p, { mt, val });
  return val;
}

/** Cenas do projeto NA ORDEM DO ROTEIRO (inSec do espelho); sem timing, no fim, em ordem alfabética. */
export function cenasDoProjeto(raiz, proj) {
  if (!nomeSeguro(proj)) return [];
  const d = join(raiz, "out", proj, "graphics");
  let arqs; try { arqs = readdirSync(d).filter(ehCena); } catch { return []; }
  const ins = new Map(manifesto(raiz, proj).cenas.map((c) => [c.id, c.inSec]));
  return arqs
    .map((f) => f.replace(/\.html$/, ""))
    .filter(nomeSeguro)
    .sort((a, b) => {
      const va = ins.get(a), vb = ins.get(b);
      const na = va == null ? Infinity : va, nb = vb == null ? Infinity : vb;
      return na !== nb ? na - nb : a.localeCompare(b);
    });
}

/**
 * Projetos revisáveis, DERIVADOS do disco a cada chamada (projeto novo aparece no F5, projeto
 * limpo some sozinho — a lição de 24/jul do estúdio, quando 7 de 21 ids da lista escrita à mão
 * não tinham mais pasta). Ordem: quem tem marca aberta primeiro, depois o mexido mais recente.
 */
export function listarProjetos(raiz, abertasPorProj = {}) {
  const out = join(raiz, "out");
  let slugs; try { slugs = readdirSync(out); } catch { return []; }
  const projs = [];
  for (const slug of slugs) {
    if (!nomeSeguro(slug)) continue;
    const g = join(out, slug, "graphics");
    let mtime = 0;
    try { if (!statSync(g).isDirectory()) continue; mtime = statSync(g).mtimeMs; } catch { continue; }
    const cenas = cenasDoProjeto(raiz, slug);
    if (!cenas.length) continue;
    projs.push({ slug, cenas: cenas.length, mtime, abertas: abertasPorProj[slug] || 0 });
  }
  return projs.sort((a, b) => (b.abertas > 0) - (a.abertas > 0) || b.mtime - a.mtime);
}

/**
 * O TRECHO EXATO: as palavras realmente faladas na janela da cena — não a tese do espelho. É o que
 * o dono lê para revisar (substitui ouvir o áudio). Sem palavras no disco, cai no texto do espelho.
 */
export function trechoDaCena(raiz, proj, id) {
  const man = manifesto(raiz, proj);
  const c = man.cenas.find((x) => x.id === id);
  if (!c) return null;
  const inSec = c.inSec ?? 0;
  const outSec = c.outSec ?? inSec;
  let texto = "", fonte = "";
  try {
    const w = wordsDoEspelho(join(raiz, "out", proj), man.fimJanela);
    if (w.arquivo) {
      texto = w.words
        .filter((x) => { const t = x.start ?? x.s ?? x.t ?? 0; return t >= inSec - 0.05 && t < outSec; })
        .map((x) => x.w ?? x.word ?? x.text ?? "")
        .join(" ").replace(/\s+([,.!?;:…])/g, "$1").replace(/\s{2,}/g, " ").trim();
      fonte = w.arquivo + (w.cabe ? "" : " (⚠ relógio não cobre o espelho)");
    }
  } catch { /* palavras ilegíveis: cai no texto do espelho */ }
  if (!texto) { texto = c.texto || c.tese || ""; fonte = texto ? "espelho" : ""; }
  return { texto, fonte, inSec, outSec, tese: c.tese };
}

/** Áudio da narração do projeto, relativo à raiz do canal (URL), ou null. Leve → legado. */
export function narracaoDoProjeto(raiz, proj) {
  // [porte Régie] narracao.wav é o que src/ferramentas/narrar.mjs do motor grava; audio-hq.m4a e
  // audio.wav são os nomes do estúdio, aceitos para projeto migrado de lá. Sem _master.mp4 (faceless).
  for (const f of ["narracao.wav", "narracao.m4a", "narracao.mp3", "audio-hq.m4a", "audio.wav"]) {
    if (existsSync(join(raiz, "out", proj, f))) return `out/${proj}/${f}`;
  }
  return null;
}

/**
 * Palco da cena: 3840×2160 quando ela se declara 4K nativa, 1920×1080 no legado. O iframe precisa
 * saber — no estúdio, cena 4K num iframe de 1920 aparecia só o quadrante superior esquerdo.
 * A MESMA regex do palco() do motor (src/ferramentas/renderizar.mjs), sobre o arquivo INTEIRO, como
 * lá: aspas simples ou duplas, e __native4k em qualquer ponto da cena. O estúdio olhava só os
 * primeiros 8000 caracteres, e a galeria discordava do render. Não é importada do motor porque a
 * galeria abre mesmo sem o motor localizado (o importarDoMotor exige canal.json ou REGIE_MOTOR) e
 * não carrega o renderizar inteiro (Chrome, mapa, chaves) por uma regex; o gêmeo é vigiado:
 * testes/galeria.test.mjs compara as duas numa bateria de casos. [porte Régie]
 */
export const REGEX_4K_NATIVO = /data-render=["']4k-native["']|__native4k\s*=\s*true/i;
export function palcoDaCena(html) {
  return REGEX_4K_NATIVO.test(String(html)) ? { W: 3840, H: 2160 } : { W: 1920, H: 1080 };
}
