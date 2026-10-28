// saldo-elevenlabs.mjs — lê o saldo de créditos da conta ElevenLabs do canal (a chave do chaves.env, pelo leitor da pré-v1) e o
// anota em out/atlantico-fundo/_pesquisa/saldo-narracao.jsonl, antes e depois de cada rodada do narrar.mjs (CLAUDE.md, "Do vídeo 2
// em diante, até 15.000 créditos por vídeo sem pedir ok": o saldo se registra antes e depois). Só um GET; não gasta crédito e não
// imprime a chave.
//   node out/atlantico-fundo/_pesquisa/saldo-elevenlabs.mjs <momento>     (cwd = raiz do canal; ex.: antes-narracao)
import fs from "node:fs";

const momento = process.argv[2];
if (!momento) { console.error("uso: node out/atlantico-fundo/_pesquisa/saldo-elevenlabs.mjs <momento>"); process.exit(2); }
const { lerChave } = await import("file:///C:/projetos/regie-v1/src/lib/chaves.mjs");
const chave = lerChave("ELEVENLABS_API_KEY");
const r = await fetch("https://api.elevenlabs.io/v1/user/subscription", { headers: { "xi-api-key": chave }, signal: AbortSignal.timeout(60_000) });
if (!r.ok) { console.error(`o saldo respondeu ${r.status}`); process.exit(1); }
const j = await r.json();
const s = { momento, quando: new Date().toISOString(), restante: j.character_limit - j.character_count, usado: j.character_count, limite: j.character_limit };
fs.appendFileSync("out/atlantico-fundo/_pesquisa/saldo-narracao.jsonl", JSON.stringify(s) + "\n");
console.log(`saldo (${momento}): ${s.restante} restantes (${s.quando})`);
