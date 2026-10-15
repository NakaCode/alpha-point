// O alinhamento por caractere que a própria ElevenLabs guarda no histórico de cada geração, trecho a trecho, nos
// tempos da narracao.wav. É a BASE DE TEMPO do relógio de palavras (ingest-local.py, ao lado): uma fonte de tempo
// independente do Whisper. Só GET no histórico: não gasta crédito (26/09/2026).
//
//   node out/<proj>/_pesquisa/alinhamento-elevenlabs.mjs <proj>             lista o histórico da voz e lê os detalhes que faltam
//   node out/<proj>/_pesquisa/alinhamento-elevenlabs.mjs <proj> --cache     sem rede: só o que já está em _narracao/elevenlabs/
//   ... --rebaixar                                                         baixa de novo o detalhe de cada item (GET)
//   ... --pre-v1=<clone>                                                   onde está a pré-v1 (padrão: REGIE_V1 ou C:/projetos/regie-v1)
//   (cwd = raiz do canal)
//
// Por quê (verificação do ingest do Juneau, 26/09/2026): o Whisper local erra a palavra da fronteira em algumas pausas
// e comprime os números ("1974", "$966 million" duram menos que a voz); o alinhamento da ElevenLabs acerta o miolo, os
// números e os nomes (viés de −0,03 a −0,07 s), mas põe a pausa DENTRO da palavra seguinte (começo de frase 0,49 s
// cedo, na mediana) e não prova o que a voz disse. O ingest usa este alinhamento como base e prende pausas e pontas
// ao som; o Whisper continua sendo o ouvido.
//
// Entradas (só leitura): out/<proj>/narracao.json (os requestId e os textos de cada trecho), os recibos e PCM de cada
// trecho em out/<proj>/_narracao/<chave>.json/.pcm (o cache do narrar da pré-v1), roteiros/<proj>/voz/texto-para-voz.md
// se existir (conferência extra) e a narracao.wav (conferência contra o som). A chave vem do leitor da pré-v1
// (src/lib/chaves.mjs) e nunca é impressa nem gravada; sem rede (--cache), a chave nem é lida.
// Saídas, todas em out/<proj>/_narracao/elevenlabs/ (fora do git), com nomes próprios deste script:
//   <history_item_id>.json      o detalhe de cada item, como a API devolveu (o cache); _lista.json, a listagem sem texto
//   alinhamento-elevenlabs.json por trecho: item do histórico, semântica, durações e cada palavra do texto aprovado com o
//                               tempo da palavra inteira (s, e) e só das LETRAS (sl, el), em segundos DO TRECHO. É o que
//                               o ingest lê.
//   words-elevenlabs.json       [{w,start,end}] da palavra inteira (pontuação colada), nos tempos da narracao.wav: só
//                               para comparação; NÃO é o relógio do vídeo
//   relatorio-elevenlabs.json   o laudo por trecho e a conferência contra o som
//
// Semântica dos tempos (medida nos 36 itens do Juneau, 25–26/09/2026): character_start_times_seconds é o início e
// character_end_times_seconds é a DURAÇÃO do caractere (start[i] + dur[i] = start[i+1]); o fim do caractere é
// start + dur. O script mede isso item a item e não assume: se um item vier com "fim absoluto", usa o fim; se não
// for nenhum dos dois, o trecho é reprovado e nada é gravado para o ingest.
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const PROJ = args.find((a) => !a.startsWith("--"));
const opcoes = Object.fromEntries(args.filter((a) => a.startsWith("--")).map((a) => { const [k, ...v] = a.slice(2).split("="); return [k, v.length ? v.join("=") : true]; }));
const validas = new Set(["cache", "rebaixar", "pre-v1"]);
if (!PROJ || Object.keys(opcoes).some((k) => !validas.has(k)) || !/^[\w.-]+$/.test(PROJ)) {
  console.error("uso: node out/<proj>/_pesquisa/alinhamento-elevenlabs.mjs <proj> [--cache] [--rebaixar] [--pre-v1=<clone>]   (cwd = raiz do canal)");
  process.exit(2);
}
const BASE = `out/${PROJ}`;
if (!existsSync(`${BASE}/narracao.json`)) { console.error(`não achei ${BASE}/narracao.json: rode de dentro da raiz do canal`); process.exit(2); }
const DIR_NARR = `${BASE}/_narracao`;
const CACHE = `${DIR_NARR}/elevenlabs`;
const ARQ_TEXTO = `roteiros/${PROJ}/voz/texto-para-voz.md`;
const PRE_V1 = resolve(opcoes["pre-v1"] || process.env.REGIE_V1 || "C:/projetos/regie-v1");
const OFFLINE = !!opcoes.cache;
const REBAIXAR = !!opcoes.rebaixar;
if (OFFLINE && REBAIXAR) { console.error("--cache e --rebaixar não combinam"); process.exit(2); }
const LIMIAR_DB = -50;          // quadro de 10 ms abaixo disto = silêncio (piso do WAV: -90..-85 dBFS; fala: -35..-10)
const PAUSA_MIN_S = 0.15;       // silêncio contínuo que conta como pausa real no áudio
const TOL = 0.0015;             // tolerância para "start[i] + dur[i] = start[i+1]" (os tempos vêm com 3 casas)

const sha = (b) => createHash("sha256").update(b).digest("hex");
const r3 = (x) => Math.round(x * 1000) / 1000;
const r6 = (x) => Math.round(x * 1e6) / 1e6;
const ehLetra = (ch) => /[\p{L}\p{N}]/u.test(ch);
const pct = (arr, p) => { if (!arr.length) return null; const a = [...arr].sort((x, y) => x - y); return a[Math.min(a.length - 1, Math.floor(p * (a.length - 1) + 0.5))]; };
const resumo = (arr) => arr.length ? { n: arr.length, mediana: r3(pct(arr, 0.5)), p90: r3(pct(arr, 0.9)), max: r3(Math.max(...arr)) } : { n: 0 };
const gravar = (arq, texto) => { writeFileSync(arq + ".parcial", texto); renameSync(arq + ".parcial", arq); };
mkdirSync(CACHE, { recursive: true });
const problemas = [], avisos = [];

// ── 1. narracao.json e o WAV que ele descreve ────────────────────────────────────────────────────────────────
const narrTexto = readFileSync(`${BASE}/narracao.json`, "utf8").replace(/^\uFEFF/, "");
const narr = JSON.parse(narrTexto);
const wavBuf = readFileSync(narr.audio.arquivo);
const shaWav = sha(wavBuf);
const wav = (() => {
  let p = 12, fmt = null;
  while (p + 8 <= wavBuf.length) {
    const id = wavBuf.toString("ascii", p, p + 4), sz = wavBuf.readUInt32LE(p + 4);
    if (id === "fmt ") fmt = { canais: wavBuf.readUInt16LE(p + 10), sr: wavBuf.readUInt32LE(p + 12), bits: wavBuf.readUInt16LE(p + 22) };
    if (id === "data") return { ...fmt, off: p + 8, amostras: Math.min(sz, wavBuf.length - p - 8) / 2 / fmt.canais };
    p += 8 + sz + (sz & 1);
  }
  throw new Error("WAV sem chunk data");
})();
const audio = {
  arquivo: narr.audio.arquivo, sha256: shaWav, sha256_bate_com_narracao_json: shaWav === narr.audio.sha256,
  sampleRate: wav.sr, canais: wav.canais, bits: wav.bits, amostras: wav.amostras, duracaoSec: +(wav.amostras / wav.sr).toFixed(6),
};
if (!audio.sha256_bate_com_narracao_json) problemas.push("o narracao.wav não é o que o narracao.json descreve (sha256 diferente): os tempos dos segmentos não valem para ele");
if (wav.canais !== 1 || wav.bits !== 16 || wav.amostras !== narr.audio.amostras) problemas.push(`formato do WAV inesperado: ${JSON.stringify(audio)}`);
const falas = narr.segmentos.filter((s) => s.tipo === "fala");
for (const s of narr.segmentos) for (const t of [s.start, s.end]) if (Math.abs(t * wav.sr - Math.round(t * wav.sr)) > 1e-6) avisos.push(`segmento ${s.i}: ${t} s não cai em amostra inteira`);

// ── 2. texto aprovado (conferência extra, quando o texto-para-voz.md existe) ─────────────────────────────────
let textoAprovado = { fonte: `${BASE}/narracao.json › segmentos[].texto` };
if (existsSync(ARQ_TEXTO)) {
  const md = readFileSync(ARQ_TEXTO, "utf8");
  let paragrafos = md.split(/\r?\n\s*\r?\n/).map((x) => x.trim()).filter(Boolean);
  // O preparar-voz do vídeo 3 em diante abre o arquivo com o carimbo da revisão do roteiro ("> Revisão do roteiro: `<sha12>`"),
  // que o gate.mjs --derivados confere. Ele não é fala: sai da conta, e só ele (uma linha só, de citação, no topo).
  let carimbo = null;
  if (paragrafos.length && /^> Revisão do roteiro: `[0-9a-f]{12}`$/.test(paragrafos[0])) carimbo = paragrafos.shift();
  textoAprovado = { ...textoAprovado, conferido_com: ARQ_TEXTO, sha256: sha(Buffer.from(md, "utf8")), paragrafos: paragrafos.length,
    ...(carimbo ? { carimbo_ignorado: carimbo } : {}),
    igual_aos_textos_dos_segmentos: paragrafos.length === falas.length && falas.every((s, k) => paragrafos[k] === s.texto) };
  if (!textoAprovado.igual_aos_textos_dos_segmentos) problemas.push(`${ARQ_TEXTO} não bate, parágrafo a parágrafo, com os "texto" do narracao.json`);
}

// ── 3. recibos e PCM de cada trecho (o cache do narrar) ──────────────────────────────────────────────────────
const recibos = new Map();
for (const f of readdirSync(DIR_NARR)) {
  if (!/^[0-9a-f]{20}\.json$/.test(f)) continue;
  const r = JSON.parse(readFileSync(`${DIR_NARR}/${f}`, "utf8"));
  const arqPcm = `${DIR_NARR}/${f.replace(".json", ".pcm")}`;
  const pcm = existsSync(arqPcm) ? readFileSync(arqPcm) : null;
  recibos.set(r.requestId, { recibo: r, arqPcm, bytes: pcm?.length ?? null,
    sha_ok: !!pcm && pcm.length === r.bytes && sha(pcm) === r.sha256, duracao_s: pcm ? pcm.length / 2 / wav.sr : null });
}

// ── 4. histórico da ElevenLabs (só GET) ──────────────────────────────────────────────────────────────────────
let chave = null;
async function get(caminho) {
  if (!chave) {
    const { exigirChave } = await import(pathToFileURL(join(PRE_V1, "src", "lib", "chaves.mjs")).href);
    chave = exigirChave("ELEVENLABS_API_KEY", "ler o histórico da ElevenLabs (alinhamento, sem gasto)");
  }
  const r = await fetch("https://api.elevenlabs.io" + caminho, { method: "GET", headers: { "xi-api-key": chave }, signal: AbortSignal.timeout(60_000) });
  if (!r.ok) throw new Error(`HTTP ${r.status} em ${caminho.split("?")[0]}`);
  return r.json();
}
const VOZ = narr.voz.voice_id;
let lista;
const arqLista = `${CACHE}/_lista.json`;
if (OFFLINE) {
  if (!existsSync(arqLista)) { console.error(`--cache sem ${arqLista}: rode sem --cache (só GET, sem gasto)`); process.exit(1); }
  lista = JSON.parse(readFileSync(arqLista, "utf8"));
} else {
  lista = []; let depois = null;
  do {
    const q = new URLSearchParams({ voice_id: VOZ, page_size: "100" });
    if (depois) q.set("start_after_history_item_id", depois);
    const j = await get(`/v1/history?${q}`);
    lista.push(...j.history);
    depois = j.has_more ? j.last_history_item_id : null;
  } while (depois);
  // a lista vai para o cache sem o texto (o texto é o do roteiro; não precisa de cópia)
  gravar(arqLista, JSON.stringify(lista.map((it) => { const c = { ...it }; delete c.text; return c; }), null, 1));
}
const porRequest = new Map();
for (const it of lista) { if (!porRequest.has(it.request_id)) porRequest.set(it.request_id, []); porRequest.get(it.request_id).push(it); }
const usados = new Set();

// ── 5. trecho a trecho: alinhamento → palavras ───────────────────────────────────────────────────────────────
const words = [], trechos = [], porSegmento = [], pontuacaoLonga = [], paraIngest = [];
for (const seg of falas) {
  const t = { trecho: seg.trecho, i: seg.i, request_id: seg.requestId, start: seg.start, end: seg.end, duracao_segmento_s: r3(seg.end - seg.start) };
  trechos.push(t);
  const rec = recibos.get(seg.requestId);
  t.pcm = rec ? { arquivo: rec.arqPcm, bytes: rec.bytes, sha256_bate_com_recibo: rec.sha_ok, duracao_s: r3(rec.duracao_s), recibo_duracaoSec: rec.recibo.duracaoSec } : null;
  if (!rec) problemas.push(`trecho ${seg.trecho}: nenhum recibo em ${DIR_NARR} com requestId ${seg.requestId}`);
  else if (!rec.sha_ok) problemas.push(`trecho ${seg.trecho}: o PCM ${rec.arqPcm} não bate com o sha256 do recibo`);
  const cands = porRequest.get(seg.requestId) ?? [];
  if (cands.length !== 1) { problemas.push(`trecho ${seg.trecho}: ${cands.length} itens do histórico com request_id ${seg.requestId}`); t.status = "sem_item"; continue; }
  const it = cands[0]; usados.add(it.history_item_id);
  t.history_item_id = it.history_item_id;
  t.gerado_em = new Date(it.date_unix * 1000).toISOString();
  const arqDet = `${CACHE}/${it.history_item_id}.json`;
  let det;
  if (existsSync(arqDet) && !REBAIXAR) det = JSON.parse(readFileSync(arqDet, "utf8"));
  else if (OFFLINE) { problemas.push(`trecho ${seg.trecho}: --cache sem ${arqDet}`); t.status = "sem_detalhe"; continue; }
  else { det = await get(`/v1/history/${it.history_item_id}`); gravar(arqDet, JSON.stringify(det)); }

  t.item = { request_id_confere: det.request_id === seg.requestId, model_id: det.model_id, stability: det.settings?.stability ?? null,
    output_format: det.output_format, caracteres_cobrados: it.character_count_change_to - it.character_count_change_from, characterCost_no_narracao_json: seg.characterCost };
  if (!t.item.request_id_confere) { problemas.push(`trecho ${seg.trecho}: o detalhe ${it.history_item_id} é de outro request_id`); t.status = "item_errado"; continue; }
  const dialogo = det.dialogue?.[0]?.text ?? det.text ?? null;
  t.texto_do_historico_igual_ao_aprovado = dialogo === seg.texto;

  const al = det.alignments?.alignment, nal = det.alignments?.normalized_alignment;
  if (!al?.characters?.length) { problemas.push(`trecho ${seg.trecho}: item ${it.history_item_id} sem alignments.alignment`); t.status = "sem_alinhamento"; continue; }
  const c = al.characters, st = al.character_start_times_seconds, e2 = al.character_end_times_seconds;
  if (st.length !== c.length || e2.length !== c.length) { problemas.push(`trecho ${seg.trecho}: vetores do alinhamento com tamanhos diferentes`); t.status = "alinhamento_torto"; continue; }
  // semântica medida neste item
  let casaDur = 0, casaFim = 0, naoMonotono = 0;
  for (let k = 0; k + 1 < c.length; k++) {
    if (Math.abs(st[k] + e2[k] - st[k + 1]) < TOL) casaDur++;
    if (Math.abs(e2[k] - st[k + 1]) < TOL) casaFim++;
    if (st[k + 1] < st[k] - 1e-9) naoMonotono++;
  }
  const pares = c.length - 1;
  const semantica = casaDur >= 0.99 * pares ? "duracao" : casaFim >= 0.99 * pares ? "fim" : "indefinida";
  const fimChar = (k) => semantica === "fim" ? e2[k] : st[k] + e2[k];
  const durAl = fimChar(c.length - 1);
  const textoAl = c.join("");
  t.alinhamento = {
    caracteres: c.length, semantica_end_times: semantica,
    pares_start_mais_dur_igual_proximo_start: `${casaDur}/${pares}`, pares_end_igual_proximo_start: `${casaFim}/${pares}`, starts_fora_de_ordem: naoMonotono,
    primeiro_start_s: st[0], duracao_s: r3(durAl), maior_valor_end_times_s: r3(Math.max(...e2)),
    duracao_pcm_s: rec ? r3(rec.duracao_s) : null, diferenca_alinhamento_menos_pcm_s: rec ? r3(durAl - rec.duracao_s) : null,
    texto_igual_ao_aprovado: textoAl === seg.texto,
    normalized_texto_igual_ao_aprovado: nal ? nal.characters.join("") === seg.texto : null,
    normalized_identico_ao_alignment: nal ? JSON.stringify(nal) === JSON.stringify(al) : null,
  };
  if (semantica === "indefinida") { problemas.push(`trecho ${seg.trecho}: end_times não são nem duração nem fim (${casaDur}/${pares} e ${casaFim}/${pares})`); t.status = "semantica_indefinida"; continue; }
  if (naoMonotono) { problemas.push(`trecho ${seg.trecho}: ${naoMonotono} caracteres começam antes do anterior`); t.status = "fora_de_ordem"; continue; }
  if (textoAl !== seg.texto) { problemas.push(`trecho ${seg.trecho}: o texto do alinhamento difere do aprovado; palavras não geradas`); t.status = "texto_diferente"; continue; }
  if (rec && Math.abs(durAl - rec.duracao_s) > 0.005) avisos.push(`trecho ${seg.trecho}: o alinhamento mede ${r3(durAl)} s e o PCM ${r3(rec.duracao_s)} s (${durAl > rec.duracao_s ? "+" : ""}${r3(durAl - rec.duracao_s)} s)`);

  // palavras: split por espaço (o mesmo do ingest), pontuação colada; s/e = palavra inteira, sl/el = só as letras
  const locais = [];
  for (const m of seg.texto.matchAll(/[^ ]+/g)) {
    const a = m.index, b = a + m[0].length - 1;
    let la = a; while (la <= b && !ehLetra(c[la])) la++;
    let lb = b; while (lb >= a && !ehLetra(c[lb])) lb--;
    locais.push({ w: m[0], a, b, s: st[a], e: fimChar(b), sl: la <= b ? st[la] : st[a], el: lb >= a ? fimChar(lb) : fimChar(b) });
  }
  if (locais.length !== seg.texto.split(" ").length) { problemas.push(`trecho ${seg.trecho}: o texto tem espaço duplo ou nas pontas; as palavras não casam com o split do ingest`); t.status = "espacos"; continue; }
  paraIngest.push({ trecho: seg.trecho, i: seg.i, requestId: seg.requestId, history_item_id: it.history_item_id, texto: seg.texto,
    semantica_end_times: semantica, duracao_alinhamento_s: r6(durAl), duracao_pcm_s: rec ? r6(rec.duracao_s) : null,
    pcm_sha256_bate_com_recibo: rec ? rec.sha_ok : null,
    palavras: locais.map((L) => ({ w: L.w, s: r6(L.s), e: r6(L.e), sl: r6(L.sl), el: r6(L.el) })) });
  const recortes = [];
  const segWords = [];
  for (const L of locais) {
    if (L.e - L.el > 0.15) pontuacaoLonga.push(r3(L.e - L.el));
    let start = r3(seg.start + L.s), end = r3(seg.start + L.e);
    if (end > seg.end) { recortes.push({ w: L.w, end_alinhamento: end, end_gravado: seg.end, excesso_s: r3(end - seg.end) }); end = seg.end; }
    if (start >= seg.end) problemas.push(`trecho ${seg.trecho}: "${L.w}" começa em ${start}, depois do fim do segmento (${seg.end})`);
    const W = { w: L.w, start, end };
    words.push(W);
    segWords.push({ ...W, sl: seg.start + L.sl, el: Math.min(seg.end, seg.start + L.el), a: L.a, b: L.b });
  }
  porSegmento.push({ seg, st, fimChar, c, palavras: segWords });
  t.palavras = locais.length;
  t.primeira = { w: words.at(-locais.length).w, start: words.at(-locais.length).start };
  t.ultima = { w: words.at(-1).w, end: words.at(-1).end };
  if (recortes.length) { t.recortadas_no_fim_do_segmento = recortes; avisos.push(`trecho ${seg.trecho}: ${recortes.map((r) => `"${r.w}" ia até ${r.end_alinhamento} s; gravado ${r.end_gravado} s (fim do segmento)`).join("; ")}`); }
  t.status = "ok";
}
const naoUsados = lista.filter((it) => !usados.has(it.history_item_id)).map((it) => ({
  history_item_id: it.history_item_id, request_id: it.request_id, gerado_em: new Date(it.date_unix * 1000).toISOString(),
  caracteres_cobrados: it.character_count_change_to - it.character_count_change_from }));

// ── 6. sanidade do words-elevenlabs.json ─────────────────────────────────────────────────────────────────────
let foraDeOrdem = 0, sobrepostas = 0, invertidas = 0;
for (let k = 0; k < words.length; k++) {
  if (words[k].end < words[k].start) invertidas++;
  if (k && words[k].start < words[k - 1].start) foraDeOrdem++;
  if (k && words[k].start < words[k - 1].end - 1e-9) sobrepostas++;
}
if (invertidas || foraDeOrdem || sobrepostas) problemas.push(`words: ${invertidas} com end < start, ${foraDeOrdem} fora de ordem, ${sobrepostas} sobrepostas`);

// cobertura e portões como a pré-v1 os mede (transcrever.mjs), aplicados a estas palavras: TAUTOLÓGICOS aqui
const { medirCobertura } = await import(pathToFileURL(join(PRE_V1, "src", "ferramentas", "transcrever.mjs")).href);
const { contarPalavras } = await import(pathToFileURL(join(PRE_V1, "src", "ferramentas", "narrar.mjs")).href);
const cob = medirCobertura(words, narr, new Set());
const suspeitos = cob.trechos.filter((x) => x.status !== "ok");
const fimUltima = words.length ? words.at(-1).end : 0;
const portoesPreV1 = [
  { nome: "palavras", ok: words.length > 0, detalhe: `${words.length} palavras` },
  { nome: "duracao", ok: fimUltima <= audio.duracaoSec + 0.5, detalhe: `última palavra termina em ${fimUltima} s, WAV mede ${audio.duracaoSec} s` },
  { nome: "idioma", ok: null, detalhe: `não se aplica: o alinhamento é do texto enviado (language_code "${narr.voz.language_code}" no pedido)` },
  { nome: "cobertura", ok: suspeitos.length === 0, detalhe: suspeitos.length ? `trechos fora: ${suspeitos.map((x) => x.trecho).join(", ")}` : `${cob.trechos.length} trechos dentro de 0.9..1.1` },
];

// ── 7. conferência contra o ÁUDIO (o alinhamento é do TTS; o WAV é o que se ouve) ────────────────────────────
const Q = Math.round(wav.sr * 0.01), nq = Math.floor(wav.amostras / Q);
const db = new Float64Array(nq);
for (let f = 0; f < nq; f++) {
  let acc = 0; const base = wav.off + 2 * f * Q;
  for (let k = 0; k < Q; k++) { const v = wavBuf.readInt16LE(base + 2 * k) / 32768; acc += v * v; }
  db[f] = 10 * Math.log10(acc / Q + 1e-12);
}
const voz = (f) => f >= 0 && f < nq && db[f] >= LIMIAR_DB;
const deltasInicio = [], deltasFim = [], leadSil = [], classes = { entre_palavras: 0, na_pontuacao: 0, dentro_das_letras: 0, fora_do_alinhamento: 0 };
const exemplosPiores = [], palavrasMudas = [], bordas = [];
let pausasTotal = 0;
for (const S of porSegmento) {
  const { seg, st, fimChar, c, palavras } = S;
  const f0 = Math.round(seg.start * 100), f1 = Math.round(seg.end * 100);
  let pv = f0; while (pv < f1 && !voz(pv)) pv++;
  let uv = f1 - 1; while (uv >= f0 && !voz(uv)) uv--;
  bordas.push({ trecho: seg.trecho, voz_comeca_s: r3(pv / 100), primeira_letra_s: r3(palavras[0].sl), dif_inicio_s: r3(palavras[0].sl - pv / 100),
    voz_termina_s: r3((uv + 1) / 100), ultima_letra_termina_s: r3(palavras.at(-1).el), dif_fim_s: r3(palavras.at(-1).el - (uv + 1) / 100) });
  for (const P of palavras) {
    const a = Math.floor(P.sl * 100), b = Math.max(a + 1, Math.ceil(P.el * 100));
    let com = 0; for (let f = a; f < b; f++) if (voz(f)) com++;
    const frac = com / (b - a);
    let lead = 0; for (let f = a; f < b && !voz(f); f++) lead++;
    leadSil.push(lead / 100);
    if (frac < 0.5) palavrasMudas.push({ trecho: seg.trecho, w: P.w, start: r3(P.sl), end: r3(P.el), fracao_com_voz: r3(frac) });
  }
  let f = pv;
  while (f <= uv) {
    if (voz(f)) { f++; continue; }
    let g = f; while (g <= uv && !voz(g)) g++;
    if ((g - f) / 100 >= PAUSA_MIN_S) {
      pausasTotal++;
      const p0 = f / 100, p1 = g / 100, meio = (p0 + p1) / 2 - seg.start;
      let k = -1; for (let j = 0; j < c.length; j++) if (st[j] <= meio && meio < fimChar(j)) { k = j; break; }
      let prev = null, prox = null, classe;
      if (k < 0) classe = "fora_do_alinhamento";
      else {
        const idx = palavras.findIndex((P) => P.a <= k && k <= P.b);
        if (idx < 0) { classe = "entre_palavras"; prox = palavras.findIndex((P) => P.a > k); prev = prox > 0 ? prox - 1 : (prox < 0 ? palavras.length - 1 : null); if (prox < 0) prox = null; }
        else if (!ehLetra(c[k])) { classe = "na_pontuacao"; const P = palavras[idx]; const antesDaLetra = seg.start + st[k] < P.sl; prev = antesDaLetra ? idx - 1 : idx; prox = antesDaLetra ? idx : idx + 1; }
        else { classe = "dentro_das_letras"; const P = palavras[idx]; const perto = (meio + seg.start) - P.sl < P.el - (meio + seg.start); prev = perto ? idx - 1 : idx; prox = perto ? idx : idx + 1; }
      }
      classes[classe]++;
      const reg = { trecho: seg.trecho, pausa_s: [r3(p0), r3(p1)], duracao_s: r3(p1 - p0), classe };
      if (prox != null && prox >= 0 && prox < palavras.length) { const d = palavras[prox].sl - p1; deltasInicio.push(Math.abs(d)); reg.proxima = palavras[prox].w; reg.inicio_alinhamento_menos_voz_s = r3(d); }
      if (prev != null && prev >= 0 && prev < palavras.length) { const d = palavras[prev].el - p0; deltasFim.push(Math.abs(d)); reg.anterior = palavras[prev].w; reg.fim_alinhamento_menos_silencio_s = r3(d); }
      exemplosPiores.push(reg);
    }
    f = g;
  }
}
const piores = exemplosPiores.filter((x) => x.inicio_alinhamento_menos_voz_s != null)
  .sort((a, b) => Math.abs(b.inicio_alinhamento_menos_voz_s) - Math.abs(a.inicio_alinhamento_menos_voz_s)).slice(0, 15);
const conta = (arr, lim) => arr.filter((x) => x > lim).length;
const comSinal = (arr) => { const a = arr.filter((x) => x != null); return a.length ? { n: a.length, p10: r3(pct(a, 0.1)), mediana: r3(pct(a, 0.5)), p90: r3(pct(a, 0.9)), min: r3(Math.min(...a)), max: r3(Math.max(...a)) } : { n: 0 }; };
const tipoAnterior = (w) => !w ? "?" : /[.?!]["”]?$/.test(w) ? "fim_de_frase" : /[,;:]["”]?$/.test(w) ? "virgula_ou_dois_pontos" : "sem_pontuacao";
const recorte = (filtro) => { const s = exemplosPiores.filter(filtro); return { pausas: s.length,
  inicio_alinhamento_menos_voz_s: comSinal(s.map((x) => x.inicio_alinhamento_menos_voz_s)),
  fim_alinhamento_menos_silencio_s: comSinal(s.map((x) => x.fim_alinhamento_menos_silencio_s)),
  classes: s.reduce((o, x) => (o[x.classe] = (o[x.classe] ?? 0) + 1, o), {}) }; };
const conferenciaAudio = {
  leitura: "negativo = o alinhamento vem antes do áudio. Depois de fim de frase, o alinhamento põe a pausa dentro da palavra seguinte: ela " +
    "começa antes de a voz voltar. Depois de vírgula, a pausa fica na vírgula e o erro é pequeno. Os fins de palavra vêm ~0,1 s antes de o " +
    "áudio cair abaixo do limiar (parte disso é a cauda da voz, que o limiar de -50 dBFS pega).",
  por_onde_o_alinhamento_pos_a_pausa: Object.fromEntries(["entre_palavras", "na_pontuacao", "dentro_das_letras"].map((k) => [k, recorte((x) => x.classe === k)])),
  por_pontuacao_da_palavra_anterior: Object.fromEntries(["fim_de_frase", "virgula_ou_dois_pontos", "sem_pontuacao"].map((k) => [k, recorte((x) => tipoAnterior(x.anterior) === k)])),
  metodo: `quadros de 10 ms do ${audio.arquivo}; voz = quadro >= ${LIMIAR_DB} dBFS; pausa = ${PAUSA_MIN_S * 1000} ms ou mais sem voz, por dentro de cada trecho. ` +
    "Para cada pausa real, a palavra seguinte do texto deveria começar (letras) quando a voz volta, e a anterior terminar quando o silêncio começa.",
  pausas_reais_no_audio: pausasTotal,
  onde_o_alinhamento_poe_o_meio_da_pausa: classes,
  inicio_da_palavra_seguinte_menos_volta_da_voz_abs_s: { ...resumo(deltasInicio), acima_de_0_1_s: conta(deltasInicio, 0.1), acima_de_0_2_s: conta(deltasInicio, 0.2), acima_de_0_3_s: conta(deltasInicio, 0.3) },
  fim_da_palavra_anterior_menos_inicio_do_silencio_abs_s: { ...resumo(deltasFim), acima_de_0_1_s: conta(deltasFim, 0.1), acima_de_0_2_s: conta(deltasFim, 0.2), acima_de_0_3_s: conta(deltasFim, 0.3) },
  silencio_no_comeco_das_palavras_s: { ...resumo(leadSil), palavras_com_mais_de_0_1_s: conta(leadSil, 0.1), palavras_com_mais_de_0_2_s: conta(leadSil, 0.2) },
  palavras_com_voz_em_menos_da_metade: { n: palavrasMudas.length, lista: palavrasMudas.slice(0, 40) },
  bordas_dos_trechos: {
    inicio_primeira_letra_menos_voz_s: comSinal(bordas.map((x) => x.dif_inicio_s)), fim_ultima_letra_menos_voz_s: comSinal(bordas.map((x) => x.dif_fim_s)), por_trecho: bordas,
  },
  piores_inicios: piores,
  pausas: exemplosPiores,
};

// ── 8. gravar ────────────────────────────────────────────────────────────────────────────────────────────────
const tudoOk = !problemas.length && trechos.every((t) => t.status === "ok");
const arqAlinhamento = `${CACHE}/alinhamento-elevenlabs.json`, arqWords = `${CACHE}/words-elevenlabs.json`, arqRelatorio = `${CACHE}/relatorio-elevenlabs.json`;
const gerado_por = `out/${PROJ}/_pesquisa/alinhamento-elevenlabs.mjs ${PROJ}${OFFLINE ? " --cache" : ""}`;
if (tudoOk) {
  // o que o ingest lê: um registro por trecho de fala, casado pelo requestId e pelo texto do narracao.json
  gravar(arqAlinhamento, JSON.stringify({ schemaVersion: 1, proj: PROJ, gerado_por,
    sobre: "alinhamento por caractere da ElevenLabs (GET /v1/history/{id}), por trecho de fala do narracao.json; tempos em segundos DO TRECHO " +
      "(some o start do segmento para o tempo da narracao.wav). s/e = palavra inteira (pontuação colada), sl/el = só as letras. Não prova o que a voz disse.",
    voice_id: VOZ, semantica: "fim do caractere = start + character_end_times_seconds (duração), medido item a item", trechos: paraIngest }) + "\n");
  gravar(arqWords, JSON.stringify(words));
} else {
  // um alinhamento velho não fica ao lado de um relatório com problema: o ingest leria tempos que não valem mais
  rmSync(arqAlinhamento, { force: true }); rmSync(arqWords, { force: true });
}
const relatorio = {
  schemaVersion: 1, proj: PROJ, status: tudoOk ? "ok" : "com_problemas",
  gerado_por,
  fonte: { provedor: "elevenlabs", endpoints: ["GET /v1/history?voice_id=…&page_size=100 (paginado)", "GET /v1/history/{history_item_id}"], voice_id: VOZ,
    itens_da_voz_no_historico: lista.length, casados: usados.size, gasto_de_credito: 0, rede: !OFFLINE },
  audio, texto_aprovado: textoAprovado,
  semantica: {
    conclusao: trechos.every((t) => t.alinhamento?.semantica_end_times === "duracao")
      ? "character_end_times_seconds é a DURAÇÃO de cada caractere em todos os itens: start[i] + end_times[i] = start[i+1]; o fim do caractere é start + end_times"
      : "misturada ou incompleta: ver alinhamento.semantica_end_times por trecho",
    alignment_e_normalized: trechos.every((t) => t.alinhamento?.normalized_identico_ao_alignment) ? "idênticos em todos os trechos (o texto já vai com números por extenso)" : "diferem em algum trecho: ver por trecho",
    duracao_alinhamento_igual_pcm: trechos.filter((t) => t.alinhamento && Math.abs(t.alinhamento.diferenca_alinhamento_menos_pcm_s) <= 0.005).length,
    duracao_alinhamento_diferente_pcm: trechos.filter((t) => t.alinhamento && Math.abs(t.alinhamento.diferenca_alinhamento_menos_pcm_s) > 0.005)
      .map((t) => ({ trecho: t.trecho, alinhamento_s: t.alinhamento.duracao_s, pcm_s: t.alinhamento.duracao_pcm_s, diferenca_s: t.alinhamento.diferenca_alinhamento_menos_pcm_s })),
  },
  saidas: { alinhamento: tudoOk ? arqAlinhamento : null, words: tudoOk ? arqWords : null },
  words: { palavras: words.length, contarPalavras_pre_v1: falas.reduce((n, s) => n + contarPalavras(s.texto), 0),
    primeira: words[0] ?? null, ultima: words.at(-1) ?? null, invertidas, fora_de_ordem: foraDeOrdem, sobrepostas,
    regra: "split por espaço, pontuação colada; start = início do 1º caractere; end = início + duração do último; + start do segmento; 3 casas; end limitado ao fim do segmento",
    pontuacao_final_com_mais_de_0_15_s: { palavras: pontuacaoLonga.length, ...resumo(pontuacaoLonga),
      leitura: "nessas palavras o end inclui a pausa que o alinhamento pôs na vírgula/ponto: o end não é o fim da voz" } },
  portoes_pre_v1: portoesPreV1,
  cobertura_pre_v1: { aviso: "a cobertura aqui é tautológica: as palavras vêm do texto enviado, não do que a voz disse. Não prova que o áudio diz o roteiro.", trechos: cob.trechos, emCard: cob.emCard },
  conferencia_audio: conferenciaAudio,
  trechos,
  historico_nao_usado: naoUsados,
  avisos, problemas,
};
gravar(arqRelatorio, JSON.stringify(relatorio, null, 2) + "\n");

// ── resumo na tela ───────────────────────────────────────────────────────────────────────────────────────────
console.log(`itens da voz no histórico: ${lista.length}; casados por request_id: ${usados.size}/${falas.length}${OFFLINE ? " (sem rede, do cache)" : ""}`);
console.log(`semântica: ${relatorio.semantica.conclusao}`);
console.log(`duração do alinhamento = PCM em ${relatorio.semantica.duracao_alinhamento_igual_pcm} trechos; diferente em: ${JSON.stringify(relatorio.semantica.duracao_alinhamento_diferente_pcm)}`);
console.log(`texto do alinhamento = aprovado: ${trechos.filter((t) => t.alinhamento?.texto_igual_ao_aprovado).length}/${falas.length}`);
console.log(`palavras: ${words.length} (contarPalavras da pré-v1: ${relatorio.words.contarPalavras_pre_v1})`);
console.log(`áudio: ${pausasTotal} pausas reais; meio da pausa: ${JSON.stringify(classes)}`);
for (const a of avisos) console.log("aviso:", a);
for (const p of problemas) console.log("PROBLEMA:", p);
console.log(tudoOk ? `gravado: ${arqAlinhamento}, ${arqWords} e ${arqRelatorio}` : `alinhamento NÃO gravado; laudo em ${arqRelatorio}`);
process.exitCode = tudoOk ? 0 : 1;
