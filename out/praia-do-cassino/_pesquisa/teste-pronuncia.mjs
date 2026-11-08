// teste-pronuncia.mjs — a amostra de pronúncia do vídeo 6 (praia-do-cassino), antes da narração inteira (08/11/2026).
// O que se testa: os nomes de risco alto e médio de roteiros/praia-do-cassino/pronuncia.md, na voz e nos ajustes de produção
// (canal.json › narracao: eleven_v4, a voz 829pig94w9GefZ9jJQYl, stability 0.5, similarity 0.75, language_code "en", pcm_44100;
// o mesmo corpo que o narrar.mjs da pré-v1 manda), um pedido por linha, um de cada vez.
//   · "copia": as 7 linhas da proposta da folha, literais da cópia para a voz (o script confere que cada uma está em
//     out/praia-do-cassino/roteiro.md e para se não estiver), SEM alias, como a produção vai;
//   · "apoio": as mesmas frases (ou o trecho delas) com a grafia de apoio da coluna "Alias de reserva" da folha, para o Lucas
//     comparar na mesma escuta, sem uma segunda rodada. Nada aqui põe alias na produção: alias só entra se o Lucas ouvir a
//     "copia" errada (marca/pronuncias.md).
// Gasto: o preço do dia sai do character-cost do 1º pedido (0,48 por caractere em 03/11); o saldo se lê antes e depois, e cada
// pedido grava o request-id e o character-cost em teste-pronuncia.json. Dentro dos 15.000 do vídeo (a autonomia de 02/10).
// Saída: out/praia-do-cassino/_tmp/teste-pronuncia/ (fora do git): um WAV por linha e a amostra.mp3, com 1,5 s entre as linhas.
// Uso (cwd na raiz): node out/praia-do-cassino/_pesquisa/teste-pronuncia.mjs [--simular]
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
const { lerChave } = await import("file:///C:/projetos/regie-v1/src/lib/chaves.mjs");

const canal = JSON.parse(readFileSync("canal.json", "utf8")).narracao;
const SAIDA = "out/praia-do-cassino/_tmp/teste-pronuncia";
const RECIBO = "out/praia-do-cassino/_pesquisa/teste-pronuncia.json";
const COPIA = readFileSync("out/praia-do-cassino/roteiro.md", "utf8").replace(/\s+/g, " ");

const ITENS = [
  { id: "01-copia", tipo: "copia", nomes: ["Praia do Cassino"],
    texto: "This is Praia do Cassino, in Brazil, sold as the world's longest beach." },
  { id: "02-apoio", tipo: "apoio", nomes: ["Praia do Cassino → Pry-uh do Cassino"],
    texto: "This is Pry-uh do Cassino, in Brazil, sold as the world's longest beach." },
  { id: "03-copia", tipo: "copia", nomes: ["G one", "Guinness", "Rio Grande"],
    texto: "Then, in twenty twenty-five, the Brazilian news site G one asked Guinness about it, and the answer came back: it doesn't monitor that title. G one follows it back to a local journalist's history of Rio Grande, the port city at the north end of this sand." },
  { id: "04-apoio", tipo: "apoio", nomes: ["Rio Grande → Rio Grahn-dee"],
    texto: "G one follows it back to a local journalist's history of Rio Grahn-dee, the port city at the north end of this sand." },
  { id: "05-copia", tipo: "copia", nomes: ["Lagoa dos Patos", "Chuí", "Uruguay"],
    texto: "It runs out into the Atlantic as a line of stone, right where the Lagoa dos Patos, the big lagoon behind this coast, meets the sea. And it ends the same way, far to the southwest, at another pair of breakwaters, where a small stream called the Chuí reaches the ocean on the border with Uruguay." },
  { id: "06-apoio", tipo: "apoio", nomes: ["Chuí → Shoo-EE"],
    texto: "And it ends the same way, far to the southwest, at another pair of breakwaters, where a small stream called the Shoo-EE reaches the ocean on the border with Uruguay." },
  { id: "07-copia", tipo: "copia", nomes: ["Santa Vitória do Palmar", "Rio Grande", "Cassino", "Barra do Chuí"],
    texto: "Everything beyond, more than two-thirds of the sand, belongs to Santa Vitória do Palmar, the town that objected to the record book. Rio Grande, for its part, says the longest beach begins at Cassino and ends at Barra do Chuí." },
  { id: "08-apoio", tipo: "apoio", nomes: ["Santa Vitória do Palmar → Santa Vitória do Pahl-MAR", "Barra do Chuí → Barra do Shoo-EE"],
    texto: "Everything beyond belongs to Santa Vitória do Pahl-MAR, the town that objected to the record book. Rio Grande says the longest beach ends at Barra do Shoo-EE." },
  { id: "09-copia", tipo: "copia", nomes: ["Lagoa dos Patos", "Lagoa Mirim"],
    texto: "Behind the barrier sit two enormous lagoons, the Lagoa dos Patos and the Lagoa Mirim, more than five thousand square miles of water between them." },
  { id: "10-apoio", tipo: "apoio", nomes: ["Lagoa dos Patos → Luh-GOH-uh dos PAH-toos", "Lagoa Mirim → Lagoa Mee-REEN"],
    texto: "Behind the barrier sit two enormous lagoons, the Luh-GOH-uh dos PAH-toos and the Lagoa Mee-REEN, more than five thousand square miles of water between them." },
  { id: "11-copia", tipo: "copia", nomes: ["Albardão", "Rio Grande do Sul"],
    texto: "In March twenty twenty-six, Brazil's federal government created the Albardão National Park, and a protected area beside it, on the southern town's stretch of this coast. A senator from Rio Grande do Sul has filed a bill to cancel the decree." },
  { id: "12-apoio", tipo: "apoio", nomes: ["Albardão → Al-bar-DOWN", "Rio Grande do Sul → Rio Grahn-dee do Sool"],
    texto: "Brazil's federal government created the Al-bar-DOWN National Park. A senator from Rio Grahn-dee do Sool has filed a bill to cancel the decree." },
  { id: "13-copia", tipo: "copia", nomes: ["Padre Island", "Cox's Bazar"],
    texto: "In Texas, Padre Island's national seashore is the longest stretch of undeveloped barrier island, says the National Park Service, and Cox's Bazar, in Bangladesh, is marketed as the longest unbroken natural sandy beach." },
];

// a "copia" tem de estar literal na cópia para a voz (o roteiro.md que o narrar lê), frase a frase: as linhas da folha juntam
// frases do mesmo parágrafo que lá não são vizinhas
const fora = ITENS.filter((it) => it.tipo === "copia")
  .flatMap((it) => it.texto.split(/(?<=[.?!])\s+/).filter((f) => !COPIA.includes(f)).map((f) => `${it.id}: ${f}`));
if (fora.length) { console.log("estas frases 'copia' não estão literais em out/praia-do-cassino/roteiro.md:"); for (const f of fora) console.log("  " + f); process.exit(1); }

const total = ITENS.reduce((s, it) => s + it.texto.length, 0);
const nCopia = ITENS.filter((it) => it.tipo === "copia").reduce((s, it) => s + it.texto.length, 0);
console.log(`${ITENS.length} pedidos, ${total} caracteres (${nCopia} da cópia, ${total - nCopia} de apoio); a 0,48 por caractere, ≈ ${Math.round(total * 0.48)} créditos`);
if (process.argv.includes("--simular")) process.exit(0);

const k = lerChave("ELEVENLABS_API_KEY");
const H = { "xi-api-key": k };
const saldo = async () => { const s = await (await fetch("https://api.elevenlabs.io/v1/user/subscription", { headers: H })).json(); return s.character_limit - s.character_count; };
mkdirSync(SAIDA, { recursive: true });
const recibo = existsSync(RECIBO) ? JSON.parse(readFileSync(RECIBO, "utf8")) : { voz: canal.voice_id, modelo: canal.model_id, voice_settings: canal.voice_settings, language_code: canal.language_code, pedidos: [] };
recibo.saldo_antes = await saldo();
for (const it of ITENS) {
  const arq = `${SAIDA}/${it.id}.wav`;
  if (existsSync(arq)) { console.log(`${it.id}: já existe, não pede de novo`); continue; }
  const corpo = { text: it.texto, model_id: canal.model_id, voice_settings: canal.voice_settings, language_code: canal.language_code };
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${canal.voice_id}?output_format=pcm_44100`, {
    method: "POST", headers: { ...H, "content-type": "application/json", accept: "audio/*" }, body: JSON.stringify(corpo),
  });
  const reqId = r.headers.get("request-id"), custo = r.headers.get("character-cost");
  if (!r.ok) { const e = await r.text(); console.log(`${it.id}: HTTP ${r.status} ${e.slice(0, 300)}`); recibo.pedidos.push({ id: it.id, http: r.status, erro: e.slice(0, 300), request_id: reqId }); break; }
  const pcm = Buffer.from(await r.arrayBuffer());
  const h = Buffer.alloc(44); const n = pcm.length;
  h.write("RIFF", 0); h.writeUInt32LE(36 + n, 4); h.write("WAVE", 8); h.write("fmt ", 12); h.writeUInt32LE(16, 16);
  h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22); h.writeUInt32LE(44100, 24); h.writeUInt32LE(88200, 28);
  h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write("data", 36); h.writeUInt32LE(n, 40);
  writeFileSync(arq, Buffer.concat([h, pcm]));
  recibo.pedidos = recibo.pedidos.filter((p) => p.id !== it.id);
  recibo.pedidos.push({ id: it.id, tipo: it.tipo, nomes: it.nomes, caracteres: it.texto.length, request_id: reqId, character_cost: custo, segundos: +(n / 88200).toFixed(2), em: new Date().toISOString() });
  console.log(`${it.id}: ${(n / 88200).toFixed(1)} s, custo ${custo}`);
}
recibo.saldo_depois = await saldo();
recibo.gasto_pelo_saldo = recibo.saldo_antes - recibo.saldo_depois;
recibo.gasto_pelos_cabecalhos = recibo.pedidos.reduce((s, p) => s + (+p.character_cost || 0), 0);
recibo.textos = ITENS.map(({ id, tipo, texto }) => ({ id, tipo, texto }));

// a amostra única: as linhas na ordem, com 1,5 s de silêncio entre elas; o começo de cada uma vai ao recibo
const prontos = ITENS.filter((it) => existsSync(`${SAIDA}/${it.id}.wav`));
if (prontos.length === ITENS.length) {
  const VAO = 1.5, inicios = [];
  let t = 0;
  const partes = [];
  for (const it of prontos) {
    const buf = readFileSync(`${SAIDA}/${it.id}.wav`);
    const pcm = buf.subarray(44);
    inicios.push({ id: it.id, tipo: it.tipo, nomes: it.nomes, inicio_s: +t.toFixed(2) });
    partes.push(pcm, Buffer.alloc(Math.round(VAO * 44100) * 2));
    t += pcm.length / 88200 + VAO;
  }
  const pcm = Buffer.concat(partes);
  const h = Buffer.alloc(44); const n = pcm.length;
  h.write("RIFF", 0); h.writeUInt32LE(36 + n, 4); h.write("WAVE", 8); h.write("fmt ", 12); h.writeUInt32LE(16, 16);
  h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22); h.writeUInt32LE(44100, 24); h.writeUInt32LE(88200, 28);
  h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write("data", 36); h.writeUInt32LE(n, 40);
  writeFileSync(`${SAIDA}/amostra.wav`, Buffer.concat([h, pcm]));
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", `${SAIDA}/amostra.wav`, "-codec:a", "libmp3lame", "-b:a", "160k", `${SAIDA}/amostra.mp3`]);
  recibo.amostra = { arquivo: `${SAIDA}/amostra.mp3`, vao_s: VAO, duracao_s: +t.toFixed(2), linhas: inicios };
  for (const i of inicios) console.log(`  ${String(Math.floor(i.inicio_s / 60))}:${String(Math.floor(i.inicio_s % 60)).padStart(2, "0")}  ${i.id}  ${i.nomes.join("; ")}`);
}
writeFileSync(RECIBO, JSON.stringify(recibo, null, 1) + "\n");
console.log(`saldo ${recibo.saldo_antes} → ${recibo.saldo_depois} (gasto pelo saldo ${recibo.gasto_pelo_saldo}; pelos cabeçalhos ${recibo.gasto_pelos_cabecalhos})`);
