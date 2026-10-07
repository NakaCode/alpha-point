// teste-voz-v4.mjs — o teste da voz do vídeo 2 no ElevenLabs v4 (Lucas, 07/10/2026: "prosseguir com o áudio na v4").
// O que se testa: a voz do canal (829pig94w9GefZ9jJQYl, a calma de 26/09) no eleven_v4, em três jeitos de pedir o
// MESMO texto (3 parágrafos do gancho de Los Angeles, ~650 caracteres cada rodada):
//   A · um pedido por parágrafo, stability 0.5 (como o Juneau pedia, mas em "Natural");
//   B · um pedido só para os 3 parágrafos, stability 0.5 (a fala corrida: o v4 aceita 10.000 caracteres por pedido);
//   C · um pedido só, stability 0 ("Criativo", o ajuste do Juneau), para ver se o "Criativo" é o que muda o tom.
// Por quê: no Juneau o Lucas ouviu "diversas mudanças de tom" e "transição abrupta também na fala" (02/10); a causa
// provável é o v3 em Criativo, um pedido por parágrafo, sem stitching (CLAUDE.md, a narração).
// Gasto: ~1.950 créditos, dentro dos 15.000 do vídeo (autonomia de 02/10). O saldo se lê antes e depois, e cada
// pedido grava o request-id e o character-cost em teste-voz-v4.json.
// Uso (cwd na raiz): node out/los-angeles/_pesquisa/teste-voz-v4.mjs [--simular]
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
const { lerChave } = await import("file:///C:/projetos/regie-v1/src/lib/chaves.mjs");

const VOZ = "829pig94w9GefZ9jJQYl";
const MODELO = "eleven_v4";
const SAIDA = "out/los-angeles/_tmp/voz-v4";
const RECIBO = "out/los-angeles/_pesquisa/teste-voz-v4.json";
const P = [
  "Los Angeles is America's second-largest city. By the port's own count, its harbor handled more container traffic than any other in the Western Hemisphere every year from 2000 through 2024.",
  "But in 1886, an Army engineer looked at the shallow estuary there and wrote that it \"can never be made a harbor for deep-water ships.\"",
  "And look at the city's outline. To reach that water, Los Angeles runs south through a strip barely half a mile wide, between other cities. Until 1909, the city didn't touch the ocean at all. So how did it end up with this port? You're at Alpha Point, and this is where the story of the strip that took Los Angeles to its port begins.",
];
const PEDIDOS = [
  ...P.map((t, i) => ({ id: `A-p${i + 1}`, variante: "A", texto: t, stability: 0.5 })),
  { id: "B", variante: "B", texto: P.join("\n\n"), stability: 0.5 },
  { id: "C", variante: "C", texto: P.join("\n\n"), stability: 0 },
];
const total = PEDIDOS.reduce((s, p) => s + p.texto.length, 0);
console.log(`${PEDIDOS.length} pedidos, ${total} caracteres (≈ ${total} créditos no v4, multiplicador 1)`);
if (process.argv.includes("--simular")) process.exit(0);

const k = await lerChave("ELEVENLABS_API_KEY");
const H = { "xi-api-key": k };
const saldo = async () => { const s = await (await fetch("https://api.elevenlabs.io/v1/user/subscription", { headers: H })).json(); return s.character_limit - s.character_count; };
mkdirSync(SAIDA, { recursive: true });
const recibo = existsSync(RECIBO) ? JSON.parse(readFileSync(RECIBO, "utf8")) : { voz: VOZ, modelo: MODELO, pedidos: [] };
recibo.saldo_antes = await saldo();
for (const p of PEDIDOS) {
  const arq = `${SAIDA}/${p.id}.wav`;
  if (existsSync(arq)) { console.log(`${p.id}: já existe, não pede de novo`); continue; }
  const corpo = { text: p.texto, model_id: MODELO, language_code: "en", voice_settings: { stability: p.stability, similarity_boost: 0.75 } };
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOZ}?output_format=pcm_44100`, {
    method: "POST", headers: { ...H, "content-type": "application/json", accept: "audio/*" }, body: JSON.stringify(corpo),
  });
  const reqId = r.headers.get("request-id"), custo = r.headers.get("character-cost");
  if (!r.ok) { const e = await r.text(); console.log(`${p.id}: HTTP ${r.status} ${e.slice(0, 300)}`); recibo.pedidos.push({ id: p.id, http: r.status, erro: e.slice(0, 300), request_id: reqId }); break; }
  const pcm = Buffer.from(await r.arrayBuffer());
  const h = Buffer.alloc(44); const n = pcm.length;
  h.write("RIFF", 0); h.writeUInt32LE(36 + n, 4); h.write("WAVE", 8); h.write("fmt ", 12); h.writeUInt32LE(16, 16);
  h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22); h.writeUInt32LE(44100, 24); h.writeUInt32LE(88200, 28);
  h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write("data", 36); h.writeUInt32LE(n, 40);
  writeFileSync(arq, Buffer.concat([h, pcm]));
  recibo.pedidos.push({ id: p.id, variante: p.variante, caracteres: p.texto.length, stability: p.stability, request_id: reqId, character_cost: custo, segundos: +(n / 88200).toFixed(2), em: new Date().toISOString() });
  console.log(`${p.id}: ${(n / 88200).toFixed(1)} s, custo ${custo}`);
}
recibo.saldo_depois = await saldo();
recibo.gasto_pelo_saldo = recibo.saldo_antes - recibo.saldo_depois;
recibo.textos = P;
writeFileSync(RECIBO, JSON.stringify(recibo, null, 1) + "\n");
console.log(`saldo ${recibo.saldo_antes} → ${recibo.saldo_depois} (gasto ${recibo.gasto_pelo_saldo})`);
