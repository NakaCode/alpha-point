// Remix da voz de conversa para um ritmo calmo (26/09/2026). Pela API da ElevenLabs, sem operar o site.
//
// Por quê: a voz "Alpha Point - Narrator (conversational)" fala a ~200 palavras/min em qualquer ajuste (teste pago
// de 26/09: velocidade 0,85, "Natural", [slowly] e [deliberate] deram de 194 a 206), e a marca pede 150–160
// (marca/voz.md). O ritmo vem da própria voz: o Remix de 24/09 pediu "Natural, varied pacing" e "relaxed", e
// acelerou; a voz âncora de origem lia a ~166 em "Natural" (histórico, narracao-conferencia.md).
//
// O Remix gera 3 opções por chamada, que só viram voz se forem salvas (POST /v1/text-to-voice, depois, com o ok do
// Lucas). Cobra o texto de prévia, uma vez por chamada.
//
//   node out/juneau/_pesquisa/remix-ritmo.mjs --simular            mostra o pedido e o custo, sem rede
//   node out/juneau/_pesquisa/remix-ritmo.mjs --forca=0.3 [--forca=0.5]
// Grava as prévias em out/juneau/_narracao/remix/ (fora do git) e a procedência em out/juneau/_pesquisa/remix-ritmo.json.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

const VOZ = "iAc9oLyb1zcwD4O3ZTBv";
const DESCRICAO =
  "Keep the same voice, timbre, age, warmth and neutral American accent, and keep the relaxed, conversational " +
  "storytelling delivery, like a journalist telling a story to a friend. Change only the pace: calm and unhurried, " +
  "about 150 words per minute, with clear pauses between sentences and a short beat between ideas. Never rushed.";

const args = process.argv.slice(2);
const simular = args.includes("--simular");
const forcas = args.filter((a) => a.startsWith("--forca=")).map((a) => Number(a.slice(8)));
if (!simular && !forcas.length) { console.error("diga --simular ou --forca=0.3 (pode repetir)"); process.exit(2); }

const texto = readFileSync("roteiros/juneau/voz/texto-para-voz.md", "utf8")
  .split(/\n\s*\n/).map((p) => p.replace(/\s+/g, " ").trim()).filter(Boolean).slice(0, 4).join(" ");
const palavras = (texto.match(/[A-Za-z0-9']+(?:-[A-Za-z0-9']+)*/g) || []).length;
if (texto.length < 100 || texto.length > 1000) throw new Error(`o texto de prévia tem de ter de 100 a 1.000 caracteres (tem ${texto.length})`);
console.log(`texto de prévia: parágrafos 1–4 do Juneau, ${texto.length} caracteres, ${palavras} palavras`);
console.log(`forças: ${forcas.join(", ") || "(simulação)"} · custo esperado: ~${texto.length} créditos por chamada`);
if (simular) process.exit(0);

const { exigirChave } = await import("file:///C:/projetos/regie-v1/src/lib/chaves.mjs");
const H = { "xi-api-key": exigirChave("ELEVENLABS_API_KEY", "remixar a voz do canal"), "Content-Type": "application/json" };
const saldo = async () => (await (await fetch("https://api.elevenlabs.io/v1/user/subscription", { headers: H })).json()).character_count;
mkdirSync("out/juneau/_narracao/remix", { recursive: true });
const arqJson = "out/juneau/_pesquisa/remix-ritmo.json";
const reg = existsSync(arqJson) ? JSON.parse(readFileSync(arqJson, "utf8")) : { voz_de_origem: VOZ, descricao: DESCRICAO, texto_caracteres: texto.length, palavras, rodadas: [] };

for (const forca of forcas) {
  const antes = await saldo();
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-voice/${VOZ}/remix?output_format=mp3_44100_192`, {
    method: "POST", headers: H,
    body: JSON.stringify({ voice_description: DESCRICAO, text: texto, prompt_strength: forca }),
  });
  if (!r.ok) { console.error(`forca ${forca}: HTTP ${r.status} ${(await r.text()).slice(0, 300)}`); process.exit(1); }
  const j = await r.json();
  const depois = await saldo();
  const rodada = { forca, quando: new Date().toISOString(), cobrado: depois - antes, previas: [] };
  j.previews.forEach((p, i) => {
    const buf = Buffer.from(p.audio_base_64, "base64");
    const arq = `out/juneau/_narracao/remix/forca-${forca}-opcao-${i + 1}.mp3`;
    writeFileSync(arq, buf);
    rodada.previas.push({ opcao: i + 1, generated_voice_id: p.generated_voice_id, arquivo: arq, bytes: buf.length,
      sha256: createHash("sha256").update(buf).digest("hex"), duracao_s: p.duration_secs,
      palavras_por_min_bruto: Math.round(palavras / p.duration_secs * 60) });
    console.log(`forca ${forca} · opção ${i + 1}: ${p.duration_secs.toFixed(1)} s ≈ ${Math.round(palavras / p.duration_secs * 60)} pal/min (com pausas) → ${arq}`);
  });
  console.log(`  cobrado: ${rodada.cobrado} créditos`);
  reg.rodadas.push(rodada);
  writeFileSync(arqJson, JSON.stringify(reg, null, 2));
}
