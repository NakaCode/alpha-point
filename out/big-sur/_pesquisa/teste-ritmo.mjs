// teste-ritmo.mjs — o teste às cegas do ritmo da voz do vídeo 5 (Big Sur), 03/11/2026. O Lucas, no chat da Sala: "Pode seguir"
// (o roteiro r2 aprovado e o teste do ritmo); antes, 30/10/2026: "quero um ritmo mais calmo, tive a impressão de nossa narrativa ser
// MUITO acelerada". Deriva do out/los-angeles/_pesquisa/teste-voz-v4.mjs (07/10/2026).
// O texto: o gancho e o 1º parágrafo do p1 do roteiro aprovado, na cópia para a voz (os números por extenso, abaixo).
//   A · como hoje: um pedido por parágrafo, eleven_v4, a voz do canal, stability 0.5, 0,25 s entre parágrafos;
//   B · a mesma voz, um pedido por frase, 0,45 s entre frases e 0,9 s entre parágrafos (o v4 ignora speed: a calma vem da pausa).
// Gasto: o v4 cobrou 0,48 crédito por caractere em 03/11 (0,13 em 07/10): 1.126 créditos as duas, dentro dos 15.000 do vídeo. O saldo se lê antes e
// depois, e cada pedido grava o request-id e o character-cost no recibo. Cada pedido vira um .wav em _tmp e não se pede de novo.
// Uso (cwd na raiz): node out/big-sur/_pesquisa/teste-ritmo.mjs [--simular]
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";

const VOZ = "829pig94w9GefZ9jJQYl", MODELO = "eleven_v4";
const SAIDA = "out/big-sur/_tmp/teste-ritmo", RECIBO = "out/big-sur/_pesquisa/teste-ritmo.json";
const VOZ_TROCAS = [["17 million", "seventeen million"], ["1,500", "fifteen hundred"], ["1986", "nineteen eighty-six"], ["1880s", "eighteen-eighties"],
  ["2020", "twenty twenty"], ["250", "two hundred and fifty"], ["U.S.", "U S"]];
const md = readFileSync("roteiros/big-sur/roteiro-narrador.md", "utf8").split(/\r?\n/);
const pars = []; let atual = [], parte = null;
for (const l of md) {
  const m = l.match(/^<!--\s*(\S+)/); if (m) { if (atual.length) pars.push({ parte, t: atual.join(" ") }); atual = []; parte = m[1]; continue; }
  if (!l.trim()) { if (atual.length) pars.push({ parte, t: atual.join(" ") }); atual = []; continue; }
  if (l.startsWith("#") || l.startsWith(">")) continue;
  atual.push(l.trim());
}
if (atual.length) pars.push({ parte, t: atual.join(" ") });
const P = [...pars.filter((p) => p.parte === "gancho").map((p) => p.t), pars.find((p) => p.parte === "p1").t]
  .map((t) => VOZ_TROCAS.reduce((s, [de, para]) => s.split(de).join(para), t));
const frases = (t) => t.match(/[^.?!]+[.?!]+["”]?/g).map((s) => s.trim());
const PEDIDOS = [
  ...P.map((t, i) => ({ id: `A-p${i + 1}`, variante: "A", par: i, texto: t })),
  ...P.flatMap((t, i) => frases(t).map((f, j) => ({ id: `B-p${i + 1}-f${j + 1}`, variante: "B", par: i, texto: f }))),
];
const total = PEDIDOS.reduce((s, p) => s + p.texto.length, 0);
console.log(P.map((t, i) => `[p${i + 1}] ${t}`).join("\n\n"));
console.log(`\n${PEDIDOS.length} pedidos, ${total} caracteres (≈ ${Math.round(total * 0.48)} créditos a 0,48 por caractere, o preço de 03/11)`);
if (process.argv.includes("--simular")) process.exit(0);

const { lerChave } = await import("file:///C:/projetos/regie-v1/src/lib/chaves.mjs");
const H = { "xi-api-key": await lerChave("ELEVENLABS_API_KEY") };
const saldo = async () => { const s = await (await fetch("https://api.elevenlabs.io/v1/user/subscription", { headers: H })).json(); return s.character_limit - s.character_count; };
mkdirSync(SAIDA, { recursive: true });
const recibo = existsSync(RECIBO) ? JSON.parse(readFileSync(RECIBO, "utf8")) : { voz: VOZ, modelo: MODELO, pedidos: [] };
recibo.saldo_antes = await saldo();
const pcmDe = {};
for (const p of PEDIDOS) {
  const arq = `${SAIDA}/${p.id}.pcm`;
  if (existsSync(arq)) { pcmDe[p.id] = readFileSync(arq); continue; }
  const corpo = { text: p.texto, model_id: MODELO, language_code: "en", voice_settings: { stability: 0.5, similarity_boost: 0.75 } };
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOZ}?output_format=pcm_44100`, {
    method: "POST", headers: { ...H, "content-type": "application/json", accept: "audio/*" }, body: JSON.stringify(corpo) });
  const reqId = r.headers.get("request-id"), custo = r.headers.get("character-cost");
  if (!r.ok) { const e = await r.text(); console.log(`${p.id}: HTTP ${r.status} ${e.slice(0, 300)}`); recibo.pedidos.push({ id: p.id, http: r.status, erro: e.slice(0, 300), request_id: reqId }); break; }
  const pcm = Buffer.from(await r.arrayBuffer()); writeFileSync(arq, pcm); pcmDe[p.id] = pcm;
  recibo.pedidos.push({ id: p.id, variante: p.variante, caracteres: p.texto.length, request_id: reqId, character_cost: custo, segundos: +(pcm.length / 88200).toFixed(2) });
}
const silencio = (s) => Buffer.alloc(Math.round(s * 44100) * 2);
const wav = (pcm) => { const h = Buffer.alloc(44), n = pcm.length; h.write("RIFF", 0); h.writeUInt32LE(36 + n, 4); h.write("WAVE", 8); h.write("fmt ", 12);
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22); h.writeUInt32LE(44100, 24); h.writeUInt32LE(88200, 28); h.writeUInt16LE(2, 32);
  h.writeUInt16LE(16, 34); h.write("data", 36); h.writeUInt32LE(n, 40); return Buffer.concat([h, pcm]); };
const montar = (v, entreFrases, entrePars) => {
  const partes = [];
  P.forEach((_, i) => { const ps = PEDIDOS.filter((p) => p.variante === v && p.par === i);
    ps.forEach((p, j) => { partes.push(pcmDe[p.id]); if (j < ps.length - 1) partes.push(silencio(entreFrases)); });
    if (i < P.length - 1) partes.push(silencio(entrePars)); });
  return Buffer.concat(partes);
};
const palavras = P.join(" ").split(/\s+/).length;
for (const [v, ef, ep] of [["A", 0, 0.25], ["B", 0.45, 0.9]]) {
  if (!PEDIDOS.filter((p) => p.variante === v).every((p) => pcmDe[p.id])) continue;
  const pcm = montar(v, ef, ep), s = pcm.length / 88200;
  writeFileSync(`${SAIDA}/${v}.wav`, wav(pcm));
  recibo[`variante_${v}`] = { segundos: +s.toFixed(2), palavras, palavras_por_minuto: +(palavras / s * 60).toFixed(1), entre_frases_s: ef, entre_paragrafos_s: ep };
  console.log(`${v}: ${s.toFixed(1)} s, ${(palavras / s * 60).toFixed(0)} palavras/min`);
}
recibo.saldo_depois = await saldo(); recibo.gasto_pelo_saldo = recibo.saldo_antes - recibo.saldo_depois; recibo.textos = P;
writeFileSync(RECIBO, JSON.stringify(recibo, null, 1) + "\n");
console.log(`saldo ${recibo.saldo_antes} → ${recibo.saldo_depois} (gasto ${recibo.gasto_pelo_saldo})`);
