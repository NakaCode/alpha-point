// amostra-voz.mjs — a amostra de voz do vídeo 5, antes do portão "roteiro" do motor sem rosto. Gera, na voz do canal:
//   A01–A14: os 14 pedidos de nomes de roteiros/atlantico-fundo/pronuncia.md ("A amostra que esta folha pede"), cada um
//            com as mesmas frases, mas na grafia do roteiro (com algarismos), não na da cópia para a voz;
//   B<nn>:   todas as outras frases do roteiro com algarismo, um pedido por parágrafo, na ordem.
// Responde a duas perguntas: os nomes (o Lucas ouve) e a pergunta 12 da out/_maquina/motor-sem-rosto/requisitos.md (o v4 lê
// o algarismo certo?), que o amostra-voz-conferir.py mede transcrevendo sem algarismos.
// Os parâmetros são os do narrador do motor (estudio/canal-motor.json › narracao; motor:scripts/sem-rosto/elevenlabs.mjs,
// sintetizar): POST /v1/text-to-speech/{voz}/with-timestamps?output_format=pcm_44100, com text, model_id, voice_settings
// e language_code, sem seed. A conta é a do canal (a chave ELEVENLABS_API_KEY, lida pelo leitor da pré-v1 e nunca impressa),
// não a do Top10 que o motor usa. O gasto é da Sala, dentro do teto de 15.000 créditos do vídeo (CLAUDE.md, "A autonomia do
// vídeo 2 em diante"), com o saldo lido antes e depois.
//   node out/atlantico-fundo/_pesquisa/amostra-voz.mjs --simular            (o plano e o custo estimado; sem rede)
//   node out/atlantico-fundo/_pesquisa/amostra-voz.mjs                      (gera o que falta; saldo antes e depois)
//   node out/atlantico-fundo/_pesquisa/amostra-voz.mjs --so=A03,B12 [--refazer]
// Saídas, em out/atlantico-fundo/_tmp/amostra-voz/ (fora do git): plano.json, <id>.wav, <id>.json (o texto, o recibo e os
// dois alinhamentos da API), recibos.jsonl, saldo.jsonl, amostra-nomes.mp3 (A01–A14) e amostra-numeros.mp3 (os B).
// exit: 0 = feito · 1 = um pedido falhou (o que já saiu fica; rode de novo, que ele pula o feito) · 2 = não rodou.
import fs from "node:fs";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

const PROJ = "atlantico-fundo";
const PASTA = `out/${PROJ}/_tmp/amostra-voz`;
const CREDITO_POR_CARACTERE = 0.48; // o v4 nos vídeos 3 e 4 (out/peru-agua/_pesquisa/narracao-conferencia.md)
const args = process.argv.slice(2);
for (const a of args) if (!/^--(simular|refazer|so=[A-Z0-9,]+)$/.test(a)) { console.error(`opção desconhecida: ${a}`); process.exit(2); }
const SIMULAR = args.includes("--simular"), REFAZER = args.includes("--refazer");
const SO = (args.find((a) => a.startsWith("--so=")) || "").slice(5).split(",").filter(Boolean);
const sha = (t) => crypto.createHash("sha256").update(t).digest("hex");
const pare = (msg) => { console.error(`PARADO: ${msg}`); process.exit(2); };

const nar = JSON.parse(fs.readFileSync("estudio/canal-motor.json", "utf8")).narracao;
const VOZ = { voice_id: nar.voice_id, model_id: nar.model_id, output_format: nar.output_format,
  voice_settings: nar.voice_settings ?? null, language_code: nar.language_code ?? null };
if (VOZ.output_format !== "pcm_44100") pare(`o formato do motor mudou (${VOZ.output_format}); este script só converte pcm_44100`);

// O texto falado, como o preparar-voz.mjs e o gate.mjs o leem: parágrafos, sem notas, comentários nem títulos.
const paragrafosDe = (bruto) => {
  const out = []; let buf = [], emCom = false;
  for (const l of bruto.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n").split("\n")) {
    let t = l;
    if (emCom) { if (t.includes("-->")) { emCom = false; t = t.slice(t.indexOf("-->") + 3); } else continue; }
    t = t.replace(/<!--.*?-->/g, "");
    if (t.includes("<!--")) { emCom = true; t = t.slice(0, t.indexOf("<!--")); }
    if (/^\s*#/.test(t) || /^\s*>/.test(t) || !t.trim()) { if (buf.length) { out.push(buf.join(" ")); buf = []; } continue; }
    buf.push(t.trim());
  }
  if (buf.length) out.push(buf.join(" "));
  return out;
};
// Frases: corta no espaço depois de . ! ? (com aspa de fecho) antes de maiúscula; "U.S. Coast" não corta.
const frases = (p) => p.replace(/\b(U\.S\.|St\.|Dr\.|Mr\.|Mrs\.|Capt\.) /g, (m) => m.slice(0, -1) + "\u0001")
  .split(/(?<=[.!?]["\u201d]?)\s+(?=["\u201c]?[A-Z])/).map((x) => x.replace(/\u0001/g, " "));

const S = paragrafosDe(fs.readFileSync(`roteiros/${PROJ}/roteiro-narrador.md`, "utf8"));
const vozBruto = fs.readFileSync(`roteiros/${PROJ}/voz/texto-para-voz.md`, "utf8");
const V = paragrafosDe(vozBruto);
const sha12 = sha(S.join("\n\n")).slice(0, 12);
const carimbo = (vozBruto.match(/Revisão do roteiro: `([0-9a-f]{12})`/) || [])[1];
if (carimbo !== sha12) pare(`a cópia para a voz é da revisão ${carimbo}, e o roteiro está em ${sha12}: rode o _ferramentas/preparar-voz.mjs`);
if (S.length !== V.length) pare(`o roteiro tem ${S.length} parágrafos, e a cópia para a voz, ${V.length}`);
const FS = S.map(frases), FV = V.map(frases);
FS.forEach((f, i) => { if (f.length !== FV[i].length) pare(`o parágrafo ${i + 1} tem ${f.length} frases no roteiro e ${FV[i].length} na cópia`); });

// Os 14 pedidos da folha de pronúncia, levados de volta à grafia do roteiro, frase por frase.
const pron = fs.readFileSync(`roteiros/${PROJ}/pronuncia.md`, "utf8").replace(/\r\n?/g, "\n");
const ini = pron.indexOf("## A amostra que esta folha pede"), fim = pron.indexOf("## O que a cópia para a voz vai trocar");
if (ini < 0 || fim < ini) pare("não achei a seção da amostra na pronuncia.md");
const linhas = [...pron.slice(ini, fim).matchAll(/^(\d+)\. (.+)$/gm)].map((m) => ({ n: +m[1], texto: m[2].trim() }));
if (linhas.length !== 14) pare(`a folha tem ${linhas.length} pedidos na amostra, não 14`);
// Um pedido pode juntar frases de dois parágrafos seguidos (o 3, do Challenger ao Milwaukee): casa-se na ordem, frase a frase.
const plano_ = FV.flatMap((fr, i) => fr.map((f, k) => ({ i, k, f })));
const usadas = new Set(), pedidos = [];
for (const l of linhas) {
  const fl = frases(l.texto);
  let achou = null;
  for (let s = 0; s < plano_.length && !achou; s++) {
    if (plano_[s].f !== fl[0]) continue;
    const pos = [s];
    for (const f of fl.slice(1)) {
      const j = plano_.findIndex((x, n) => n > pos.at(-1) && x.f === f && x.i - plano_[s].i <= 1);
      if (j < 0) break; pos.push(j);
    }
    if (pos.length === fl.length) achou = pos.map((n) => plano_[n]);
  }
  if (!achou) pare(`o pedido ${l.n} da amostra não casa com a cópia para a voz desta revisão`);
  achou.forEach((x) => usadas.add(`${x.i}:${x.k}`));
  pedidos.push({ id: `A${String(l.n).padStart(2, "0")}`, grupo: "nomes", paragrafo: achou[0].i + 1,
    frases: achou.map((x) => `${x.i + 1}.${x.k + 1}`),
    texto: achou.map((x) => FS[x.i][x.k]).join(" "), texto_voz: achou.map((x) => FV[x.i][x.k]).join(" ") });
}
// As outras frases com algarismo, um pedido por parágrafo.
FS.forEach((fr, i) => {
  const ks = fr.map((f, k) => k).filter((k) => /\d/.test(fr[k]) && !usadas.has(`${i}:${k}`));
  if (ks.length) pedidos.push({ id: `B${String(i + 1).padStart(2, "0")}`, grupo: "numeros", paragrafo: i + 1, frases: ks.map((k) => `${i + 1}.${k + 1}`),
    texto: ks.map((k) => fr[k]).join(" "), texto_voz: ks.map((k) => FV[i][k]).join(" ") });
});
for (const p of pedidos) {
  p.caracteres = p.texto.length;
  if (p.caracteres > 2500) pare(`${p.id} passa de 2.500 caracteres`);
}
const semDigito = FS.flatMap((fr, i) => fr.map((f, k) => [i, k, f])).filter(([i, k, f]) => /\d/.test(f) && !pedidos.some((p) => p.frases.includes(`${i + 1}.${k + 1}`)));
if (semDigito.length) pare(`${semDigito.length} frase(s) com algarismo ficaram fora da amostra`);

const total = pedidos.reduce((s, p) => s + p.caracteres, 0);
const plano = { projeto: PROJ, revisao_do_roteiro: sha12, voz: VOZ, conta: "a do canal (ELEVENLABS_API_KEY do chaves.env)",
  pedidos: pedidos.length, caracteres: total, estimativa_creditos: Math.round(total * CREDITO_POR_CARACTERE), itens: pedidos };
fs.mkdirSync(PASTA, { recursive: true });
fs.writeFileSync(`${PASTA}/plano.json`, JSON.stringify(plano, null, 1));
const alvo = pedidos.filter((p) => !SO.length || SO.includes(p.id));
if (SO.length && alvo.length !== SO.length) pare(`--so com id que não existe (há ${pedidos.map((p) => p.id).join(" ")})`);
console.log(`revisão ${sha12} · ${pedidos.length} pedidos (${pedidos.filter((p) => p.grupo === "nomes").length} de nomes, ${pedidos.filter((p) => p.grupo === "numeros").length} de números) · ${total} caracteres · ~${plano.estimativa_creditos} créditos`);
console.log(`voz ${VOZ.voice_id} · ${VOZ.model_id} · ${JSON.stringify(VOZ.voice_settings)} · ${VOZ.language_code} · ${VOZ.output_format}`);
if (SIMULAR) {
  for (const p of alvo) console.log(`${p.id} (frases ${p.frases.join(" ")}, ${p.caracteres} car): ${p.texto}`);
  process.exit(0);
}

const { lerChave } = await import("file:///C:/projetos/regie-v1/src/lib/chaves.mjs");
const chave = lerChave("ELEVENLABS_API_KEY");
if (!chave) pare("sem a chave ELEVENLABS_API_KEY");
const API = "https://api.elevenlabs.io";
const saldo = async (momento) => {
  const r = await fetch(`${API}/v1/user/subscription`, { headers: { "xi-api-key": chave }, signal: AbortSignal.timeout(60_000) });
  if (!r.ok) pare(`o saldo respondeu ${r.status}`);
  const j = await r.json();
  const s = { momento, quando: new Date().toISOString(), restante: j.character_limit - j.character_count, usado: j.character_count, limite: j.character_limit };
  fs.appendFileSync(`${PASTA}/saldo.jsonl`, JSON.stringify(s) + "\n");
  return s;
};
const ffmpeg = (...a) => execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...a], { stdio: ["ignore", "ignore", "inherit"] });

const s0 = await saldo("antes");
console.log(`saldo antes: ${s0.restante} (${s0.quando})`);
let feitos = 0, pagos = 0;
for (const p of alvo) {
  if (!REFAZER && fs.existsSync(`${PASTA}/${p.id}.json`) && fs.existsSync(`${PASTA}/${p.id}.wav`)) { console.log(`${p.id}: já feito, pulei`); continue; }
  const corpo = { text: p.texto, model_id: VOZ.model_id };
  if (VOZ.voice_settings) corpo.voice_settings = VOZ.voice_settings;
  if (VOZ.language_code) corpo.language_code = VOZ.language_code;
  let res, txt;
  try {
    res = await fetch(`${API}/v1/text-to-speech/${encodeURIComponent(VOZ.voice_id)}/with-timestamps?output_format=${VOZ.output_format}`, {
      method: "POST", headers: { "xi-api-key": chave, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(corpo), signal: AbortSignal.timeout(180_000) });
    txt = await res.text();
  } catch (e) { console.error(`${p.id}: sem resposta (${e?.name}: ${String(e?.message).slice(0, 160)})`); process.exitCode = 1; break; }
  const requestId = res.headers.get("request-id") ?? res.headers.get("x-request-id");
  const custo = res.headers.get("character-cost") ?? res.headers.get("x-character-count");
  if (!res.ok) {
    fs.appendFileSync(`${PASTA}/recibos.jsonl`, JSON.stringify({ id: p.id, status: res.status, request_id: requestId, erro: txt.slice(0, 300), quando: new Date().toISOString() }) + "\n");
    console.error(`${p.id}: HTTP ${res.status} ${txt.slice(0, 300)}`); process.exitCode = 1; break;
  }
  const j = JSON.parse(txt);
  const pcm = Buffer.from(j.audio_base64, "base64");
  fs.writeFileSync(`${PASTA}/${p.id}.pcm`, pcm);
  ffmpeg("-f", "s16le", "-ar", "44100", "-ac", "1", "-i", `${PASTA}/${p.id}.pcm`, "-c:a", "pcm_s16le", `${PASTA}/${p.id}.wav`);
  fs.unlinkSync(`${PASTA}/${p.id}.pcm`);
  const duracao = +(pcm.length / 2 / 44100).toFixed(3);
  const normalizado = j.normalized_alignment?.characters ? j.normalized_alignment.characters.join("") : null;
  const quando = new Date().toISOString();
  fs.writeFileSync(`${PASTA}/${p.id}.json`, JSON.stringify({ ...p, texto_sha256: sha(p.texto), voz: VOZ, request_id: requestId,
    custo_caracteres: custo == null ? null : +custo, duracao_s: duracao, quando, texto_normalizado_pela_api: normalizado,
    alinhamento: j.alignment ?? null, alinhamento_normalizado: j.normalized_alignment ?? null }));
  fs.appendFileSync(`${PASTA}/recibos.jsonl`, JSON.stringify({ id: p.id, status: res.status, request_id: requestId, custo_caracteres: custo == null ? null : +custo, caracteres: p.caracteres, duracao_s: duracao, quando }) + "\n");
  feitos++; pagos += custo == null ? 0 : +custo;
  console.log(`${p.id}: ${p.caracteres} car · cobrou ${custo ?? "?"} · ${duracao.toFixed(1)} s${normalizado && normalizado !== p.texto ? " · a API normalizou o texto" : ""}`);
}
const s1 = await saldo("depois");
console.log(`saldo depois: ${s1.restante} · gasto pelo saldo: ${s0.restante - s1.restante} · pelos recibos desta rodada: ${pagos} (${feitos} pedidos)`);

// As duas faixas para ouvir, com 1,2 s de silêncio entre os pedidos.
const todos = pedidos.filter((p) => fs.existsSync(`${PASTA}/${p.id}.wav`));
if (todos.length === pedidos.length) {
  ffmpeg("-f", "lavfi", "-i", "anullsrc=r=44100:cl=mono", "-t", "1.2", "-c:a", "pcm_s16le", `${PASTA}/_silencio.wav`);
  for (const [grupo, nome] of [["nomes", "amostra-nomes.mp3"], ["numeros", "amostra-numeros.mp3"]]) {
    const ids = pedidos.filter((p) => p.grupo === grupo).map((p) => p.id);
    fs.writeFileSync(`${PASTA}/_lista-${grupo}.txt`, ids.flatMap((id, k) => [`file '${id}.wav'`, ...(k < ids.length - 1 ? ["file '_silencio.wav'"] : [])]).join("\n") + "\n");
    ffmpeg("-f", "concat", "-safe", "0", "-i", `${PASTA}/_lista-${grupo}.txt`, "-c:a", "libmp3lame", "-q:a", "2", `${PASTA}/${nome}`);
    console.log(`${nome}: ${ids.length} pedidos`);
  }
} else console.log(`faltam ${pedidos.length - todos.length} pedidos: as faixas para ouvir saem quando todos existirem`);
