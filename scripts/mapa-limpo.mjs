#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/mapa-limpo.mjs (linhas 1-176, commit 4afda12).
// O que mudou: (1) aceita "\" como separador; (2) sem XML, as cenas vêm do espelho (a timeline é a própria narração); (3) no --conferir, o master do canal faceless é narracao.wav, e o gate MEDE: WAV válido, words.json não vazio, words.json do MESMO áudio (sha256 do transcricao.json) e fim da fala casando com o fim do áudio.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// MAPA LIMPO — a régua entre o que o Mateus VÊ e o que os agentes EDITAM.
//
// Por que existe: o Mateus revisa o composto e aponta em TIMECODE (00:02:07:02). Os agentes editam
// `espelho.json`, que fala em segundos do MASTER. Entre os dois há um terceiro relógio que ninguém
// tinha na mão: os **gaps de 3 s dos cards de título**, que o XML insere e que empurram tudo depois
// deles. Sem esta régua, toda revisão humana virava aritmética à mão — e errada, porque quem soma
// os cortes esquece de somar os gaps.
//
// OS TRÊS RELÓGIOS, nomeados de uma vez por todas:
//   BRUTO     — a gravação como saiu da câmera. Morre na decupagem e NÃO deve sobreviver a ela.
//   MASTER    — `_media/_master-decupado.mp4`, o material já cortado. É o relógio do `words.json`
//               e o único que o espelho deve usar.
//   TIMELINE  — o que o Mateus assiste (composto/XML) = MASTER + os gaps de card de título.
//
// A prova de que os três estão em dia (rodada por `--conferir`): a transcrição do MASTER tem de
// bater palavra a palavra com o áudio, e o deslocamento MASTER→TIMELINE tem de ser exatamente a
// soma dos gaps. Em 04/ago/2026 esse gate não existia e o `words.json` do projeto `paises-baixos-mar`
// era de um BRUTO que não existia mais: previa 19 palavras onde o áudio tinha 39, e a repetição de
// take que o Mateus ouviu era invisível para todo agente que lia o arquivo.
//
//   node scripts/mapa-limpo.mjs <proj>                    # tabela de cenas nos 3 relógios
//   node scripts/mapa-limpo.mjs <proj> --tc 00:02:07:02   # o que toca nesse timecode
//   node scripts/mapa-limpo.mjs <proj> --tc A-B           # o trecho inteiro (cenas + fala)
//   node scripts/mapa-limpo.mjs <proj> --silencios 1.0    # buracos de fala ≥ N s
//   node scripts/mapa-limpo.mjs <proj> --conferir         # o gate: words.json × áudio × gaps
//   node scripts/mapa-limpo.mjs <proj> --json             # para outro script consumir
import { readFileSync, existsSync, readdirSync, openSync, readSync, closeSync, fstatSync } from "node:fs";
import { createHash } from "node:crypto";
import { basename, join } from "node:path";

const FPS = 30;
const proj = process.argv[2];
if (!proj || proj.startsWith("--")) {
  console.error("uso: node scripts/mapa-limpo.mjs <proj> [--tc TC[-TC]] [--silencios N] [--conferir] [--json]");
  process.exit(2);
}
// [porte Régie] no Windows o caminho chega com "\"; sem isto "out\meu-video" virava out/out\meu-video.
const dir = /[\\/]/.test(proj) ? proj : join("out", proj);
const arg = (n) => { const i = process.argv.indexOf(n); return i > 0 ? (process.argv[i + 1] ?? true) : null; };

const tc = (s) => {
  const f = Math.max(0, Math.round(s * FPS));
  return [Math.floor(f / (FPS * 3600)), Math.floor(f / (FPS * 60)) % 60, Math.floor(f / FPS) % 60, f % FPS]
    .map((n) => String(n).padStart(2, "0")).join(":");
};
const detc = (t) => {
  const p = String(t).split(":").map(Number);
  if (p.length !== 4 || p.some(Number.isNaN)) throw new Error(`timecode inválido: ${t}`);
  return ((p[0] * 60 + p[1]) * 60 + p[2]) + p[3] / FPS;
};

// ── O XML de entrega é a VERDADE do que foi montado ─────────────────────────────────────────────
// V1 (o apresentador) carrega o mapeamento TIMELINE↔MASTER nos seus in/out: cada clipe diz "deste
// frame da timeline em diante, mostro este frame do master". A diferença entre um clipe e o
// seguinte É o gap de card. Derivar isso do XML em vez de recalcular o ripple evita a pergunta
// "qual lista de cortes valeu?" — o XML mostra a que de fato virou vídeo.
//
// [porte Régie] O XML que a Régie entrega (`<proj>-POS.xml`, do src/ferramentas/finalizar.mjs do
// motor) tem o mesmo arranjo que esta régua lê: V1 = o master (no faceless, o master SINTÉTICO:
// preto com a narração) e V2 = as cenas. Medido em 23/09/2026 com um XML real do finalizar: lido
// certo. Antes do finalizar não há XML, e a timeline é a própria narração (o card de capítulo,
// quando o canal usa, já é silêncio DENTRO da narração): as cenas vêm do espelho, logo abaixo.
const xmlPath = readdirSync(dir).find((f) => f.endsWith("-POS.xml"));
const lerXml = () => {
  if (!xmlPath) return null;
  const x = readFileSync(join(dir, xmlPath), "utf8");
  const tracks = [...x.matchAll(/<track>([\s\S]*?)<\/track>/g)].map((m) => m[1]);
  const itens = (t) => [...t.matchAll(/<clipitem id="([^"]+)">([\s\S]*?)<\/clipitem>/g)].map((m) => {
    const b = m[2], g = (k) => { const r = b.match(new RegExp(`<${k}>(-?\\d+)</${k}>`)); return r ? +r[1] : null; };
    return { id: m[1], name: (b.match(/<name>([^<]*)<\/name>/) || [])[1] || "", start: g("start"), end: g("end"), in: g("in"), out: g("out") };
  });
  return { v1: itens(tracks[0] || ""), v2: itens(tracks[1] || ""), tracks: tracks.map(itens) };
};
const xml = lerXml();

// TIMELINE → MASTER. Fora de qualquer clipe do V1 = está DENTRO de um gap de card (devolve null).
const tlParaMaster = (t) => {
  if (!xml?.v1?.length) return t;
  const f = t * FPS;
  for (const c of xml.v1) if (c.start <= f && f < c.end) return (c.in + (f - c.start)) / FPS;
  return null;
};
const masterParaTl = (m) => {
  if (!xml?.v1?.length) return m;
  const f = m * FPS;
  for (const c of xml.v1) if (c.in <= f && f < c.out) return (c.start + (f - c.in)) / FPS;
  return null;
};
const gaps = () => {
  const g = [];
  for (let i = 1; i < (xml?.v1?.length || 0); i++) {
    const a = xml.v1[i - 1], b = xml.v1[i];
    if (b.start > a.end) g.push({ tlIni: a.end / FPS, dur: (b.start - a.end) / FPS });
  }
  return g;
};

// ── A fala, no relógio do MASTER (words.json canônico) ──────────────────────────────────────────
const lerPalavras = () => {
  const p = join(dir, "words.json");
  if (!existsSync(p)) return [];
  const j = JSON.parse(readFileSync(p, "utf8"));
  const arr = Array.isArray(j) ? j : j.words || j.palavras || [];
  return arr.map((w) => ({ t: w.start ?? w.inicio ?? w.s, f: w.end ?? w.fim ?? w.e, txt: w.w ?? w.text ?? w.word ?? w.palavra ?? "" }))
    .filter((w) => typeof w.t === "number").sort((a, b) => a.t - b.t);
};
const palavras = lerPalavras();
const falaMaster = (a, b) => palavras.filter((w) => (w.f ?? w.t) > a + 0.01 && w.t < b - 0.01).map((w) => w.txt).join(" ").trim();

// ── As cenas: o V2 do XML manda; o espelho é o fallback ─────────────────────────────────────────
const espelho = existsSync(join(dir, "espelho.json")) ? JSON.parse(readFileSync(join(dir, "espelho.json"), "utf8")) : { segmentos: [] };
const segs = espelho.segmentos || espelho;
const cenasDoXml = () => xml.v2.map((c) => {
  const id = c.name.replace(/-4k(-hold)?$/, "");
  const s = segs.find((z) => z.id === id) || {};
  return { id, hold: /-hold$/.test(c.name), tlIni: c.start / FPS, tlFim: c.end / FPS,
           mIni: tlParaMaster(c.start / FPS), mFim: tlParaMaster((c.end - 1) / FPS), modo: s.modo || "", titulo: s.titulo || "" };
});
// [porte Régie] Sem XML, o comentário acima prometia o espelho como reserva e o código devolvia
// lista VAZIA: o `--tc` respondia "só o apresentador em câmera" durante a produção inteira, num
// canal que não tem apresentador. Sem XML, timeline = master = narração, e a cena vale inSec→inSec+dur.
const cenasDoEspelho = () => (Array.isArray(segs) ? segs : [])
  .filter((s) => s && s.id && typeof s.inSec === "number" && typeof s.dur === "number" && !(s._mergedInto || s.mergedInto))
  .map((s) => ({ id: s.id, hold: false, tlIni: s.inSec, tlFim: s.inSec + s.dur, mIni: s.inSec, mFim: s.inSec + s.dur,
                 modo: s.modo || "", titulo: s.titulo || "" }));
const cenas = xml?.v2?.length ? cenasDoXml() : cenasDoEspelho();
const cenaEm = (tl) => cenas.filter((c) => tl >= c.tlIni - 0.001 && tl < c.tlFim);

// ── [porte Régie] a narração do faceless: o WAV lido pelo cabeçalho, em Node puro ──────────────
/** Duração de um WAV PCM pelo cabeçalho RIFF (byteRate e tamanho do chunk `data`). Lê só os
 *  cabeçalhos, nunca o áudio inteiro. Devolve {dur} ou {erro}. */
function duracaoWav(p) {
  const fd = openSync(p, "r");
  try {
    const tam = fstatSync(fd).size;
    const ler = (pos, n) => { const b = Buffer.alloc(n); const lidos = readSync(fd, b, 0, n, pos); return b.subarray(0, lidos); };
    const h = ler(0, 12);
    if (h.length < 12 || h.toString("latin1", 0, 4) !== "RIFF" || h.toString("latin1", 8, 12) !== "WAVE")
      return { erro: `não é WAV (${tam} byte(s), sem cabeçalho RIFF/WAVE)` };
    let pos = 12, byteRate = 0;
    while (pos + 8 <= tam) {
      const c = ler(pos, 8);
      const id = c.toString("latin1", 0, 4), n = c.readUInt32LE(4);
      if (id === "fmt ") { const f = ler(pos + 8, 16); if (f.length >= 12) byteRate = f.readUInt32LE(8); }
      if (id === "data") {
        if (!byteRate) return { erro: "WAV sem chunk fmt antes do data" };
        // WAV gravado em fluxo pode trazer o tamanho 0xFFFFFFFF ou maior que o arquivo: vale o que há no disco
        const bytes = Math.min(n, tam - pos - 8);
        return { dur: bytes / byteRate, bytes };
      }
      pos += 8 + n + (n % 2);
    }
    return { erro: "WAV sem chunk data" };
  } finally { closeSync(fd); }
}

function sha256Arquivo(p) {
  const h = createHash("sha256"), fd = openSync(p, "r"), b = Buffer.alloc(1 << 20);
  try { let n; while ((n = readSync(fd, b, 0, b.length, null)) > 0) h.update(b.subarray(0, n)); }
  finally { closeSync(fd); }
  return h.digest("hex");
}

const lerJsonOu = (p) => { try { return JSON.parse(readFileSync(p, "utf8")); } catch { return null; } };

/** O gate: words.json é deste narracao.wav? Devolve o número de falhas. */
function conferirNarracao(wav, pal) {
  let f = 0;
  const w = duracaoWav(wav);
  if (w.erro) { console.log(`  ✗ master narracao.wav inválido: ${w.erro}`); return 1; }
  console.log(`  master: narracao.wav, ${w.dur.toFixed(2)}s`);
  if (!pal.length) { console.log(`  ✗ words.json ausente ou vazio — sem fala transcrita não há relógio`); return 1; }
  // 1. A prova forte: o transcrever do motor grava no transcricao.json o sha256 do WAV que ouviu.
  const tr = lerJsonOu(join(dir, "transcricao.json"));
  const sha = tr?.audio?.sha256 ? sha256Arquivo(wav) : null;
  if (!tr) console.log(`  ▲ sem transcricao.json — a origem do words.json não se prova pelo hash; só pela duração`);
  else if (!tr.audio?.sha256) console.log(`  ▲ transcricao.json sem audio.sha256 — só a duração decide`);
  else if (tr.audio.sha256 !== sha) {
    console.log(`  ✗ o words.json é de OUTRO áudio: transcricao.json ouviu ${tr.audio.sha256.slice(0, 12)}…, o narracao.wav de hoje é ${sha.slice(0, 12)}…`);
    console.log(`    Narrou de novo? Transcreva de novo antes de espelhar.`);
    f++;
  } else if (tr.status && tr.status !== "aprovado") { console.log(`  ✗ transcricao.json com status "${tr.status}"`); f++; }
  else console.log(`  ✓ words.json transcrito DESTE narracao.wav (sha256 confere)`);
  // 2. A duração: a última palavra acaba perto do fim do áudio. Silêncio de card no FIM da narração
  //    (narracao.json, segmentos depois da última fala) entra na tolerância.
  const nar = lerJsonOu(join(dir, "narracao.json"));
  let cauda = 0;
  if (Array.isArray(nar?.segmentos) && Math.abs((nar.audio?.duracaoSec ?? -1) - w.dur) < 0.05) {
    for (let i = nar.segmentos.length - 1; i >= 0 && nar.segmentos[i].tipo !== "fala"; i--) cauda += (nar.segmentos[i].end - nar.segmentos[i].start) || 0;
  }
  const fim = Math.max(...pal.map((p) => p.f ?? p.t));
  const TOL = 1.5;
  if (fim > w.dur + 0.25) { console.log(`  ✗ a última palavra acaba em ${fim.toFixed(2)}s, DEPOIS do fim do áudio (${w.dur.toFixed(2)}s) — words.json de outro áudio`); f++; }
  else if (w.dur - fim > TOL + cauda) {
    console.log(`  ✗ a fala acaba em ${fim.toFixed(2)}s e o áudio em ${w.dur.toFixed(2)}s — ${(w.dur - fim).toFixed(2)}s sem palavra no fim (tolerância ${(TOL + cauda).toFixed(2)}s). words.json de outro áudio?`);
    f++;
  } else console.log(`  ✓ fim da fala (${fim.toFixed(2)}s) casa com o fim do áudio (${w.dur.toFixed(2)}s)`);
  return f;
}

// ── modos ───────────────────────────────────────────────────────────────────────────────────────
if (arg("--conferir")) {
  let falhas = 0;
  const dur = palavras.length ? palavras[palavras.length - 1].f ?? 0 : 0;
  console.log(`# gate dos relógios — ${proj}\n`);
  console.log(`  words.json: ${palavras.length} palavras, última em ${tc(dur)} (relógio do MASTER)`);
  const g = gaps();
  console.log(`  gaps de card no XML: ${g.length} × ${g.map((z) => z.dur.toFixed(2) + "s").join(", ") || "—"} = ${g.reduce((a, z) => a + z.dur, 0).toFixed(2)}s`);
  // [porte Régie] no canal faceless o "master" é a narração sintetizada (`narracao.wav`): é dela
  // que o words.json sai, e é ela a timeline. O master decupado do estúdio continua valendo onde
  // existir — ele vem primeiro para o comportamento do estúdio não mudar.
  // [porte Régie] E aqui se MEDE, não se supõe. Só conferir que o arquivo existe deixava passar o
  // caso típico: o roteiro muda, alguém narra de novo e não transcreve de novo — o words.json é do
  // áudio de ontem e o espelho inteiro ancora num relógio que não existe mais.
  const wav = join(dir, "narracao.wav");
  const mp4 = join(dir, "_media", "_master-decupado.mp4");
  if (existsSync(wav)) falhas += conferirNarracao(wav, palavras);
  else if (existsSync(mp4)) console.log(`  master: existe (${basename(mp4)}) — duração NÃO MEDIDA aqui (mp4 pede ffprobe)`);
  else { console.log(`  ⚠ master ausente — sem ele não dá para provar que o words.json é dele`); falhas++; }
  // o teste que pega o defeito: densidade de fala. Um words.json de outro relógio produz janelas
  // longas com pouquíssima palavra, porque as palavras que faltam foram "cortadas" pelo mapa errado.
  const jan = 20, magros = [];
  for (let t = 0; t + jan < dur; t += jan) {
    const n = palavras.filter((w) => w.t >= t && w.t < t + jan).length;
    const sil = 0; // (o silêncio real entra em --silencios)
    if (n < 12) magros.push({ t, n });
  }
  if (magros.length) {
    console.log(`\n  ⚠ ${magros.length} janelas de ${jan}s com menos de 12 palavras — confira se é silêncio de verdade:`);
    for (const m of magros.slice(0, 8)) console.log(`     ${tc(m.t)} → ${m.n} palavras`);
  } else console.log(`\n  ✓ densidade de fala uniforme (nenhuma janela de ${jan}s abaixo de 12 palavras)`);
  process.exit(falhas ? 1 : 0);
}

if (arg("--silencios")) {
  const lim = Number(arg("--silencios")) || 1.0;
  console.log(`# buracos de fala ≥ ${lim}s — TC do composto (o relógio do Mateus)\n`);
  let ant = null;
  for (const w of palavras) {
    if (ant !== null && w.t - ant >= lim) {
      const tl = masterParaTl(ant), c = tl !== null ? cenaEm(tl)[0] : null;
      console.log(`  ${tl !== null ? tc(tl) : "—"} → ${tc(masterParaTl(w.t) ?? 0)}   ${(w.t - ant).toFixed(2)}s   master ${ant.toFixed(2)}–${w.t.toFixed(2)}   ${c ? c.id : "(só Bôco)"}`);
    }
    ant = Math.max(ant ?? 0, w.f ?? w.t);
  }
  process.exit(0);
}

if (arg("--json")) { console.log(JSON.stringify({ fps: FPS, cenas, gaps: gaps() }, null, 2)); process.exit(0); }

const alvo = arg("--tc");
if (alvo && alvo !== true) {
  const [a, b] = String(alvo).split("-");
  const ta = detc(a), tb = b ? detc(b) : null;
  const ma = tlParaMaster(ta), mb = tb !== null ? tlParaMaster(tb) : null;
  console.log(`\n## ${a}${b ? ` → ${b}` : ""}   ${tb ? `(${(tb - ta).toFixed(2)}s)` : ""}`);
  console.log(`   timeline ${ta.toFixed(3)}s${tb ? ` → ${tb.toFixed(3)}s` : ""}`);
  console.log(`   MASTER   ${ma === null ? "(dentro de um gap de card)" : ma.toFixed(3) + "s"}${mb !== null ? ` → ${mb.toFixed(3)}s` : ""}   ← use ESTE no espelho\n`);
  const lista = tb ? cenas.filter((c) => c.tlFim > ta + 0.01 && c.tlIni < tb - 0.01) : cenaEm(ta);
  if (lista.length) for (const c of lista) console.log(`   ${c.id}${c.hold ? " (hold)" : ""}  [${tc(c.tlIni)} → ${tc(c.tlFim)}]  ${(c.tlFim - c.tlIni).toFixed(2)}s  modo=${c.modo}`);
  else console.log(xml?.v2?.length ? `   (sem cena em V2 neste ponto)` : `   (sem cena no espelho neste ponto)`);   // [porte Régie]
  if (ma !== null) console.log(`\n   FALA: "${falaMaster(ma, mb ?? ma + 0.5)}"\n`);
  process.exit(0);
}

console.log(`# ${proj} — os três relógios · ${cenas.length} clipes em V2 · ${gaps().length} gaps de card\n`);
console.log("TC-IN(composto)  TC-OUT       DUR     MASTER-IN   MASTER-OUT  MODO           CENA");
for (const c of cenas) {
  if (c.hold) continue;
  console.log(`${tc(c.tlIni)}     ${tc(c.tlFim)}  ${(c.tlFim - c.tlIni).toFixed(2).padStart(6)}  ${String(c.mIni?.toFixed(2) ?? "—").padStart(9)}  ${String(c.mFim?.toFixed(2) ?? "—").padStart(10)}  ${String(c.modo).padEnd(13)}  ${c.id}`);
}
