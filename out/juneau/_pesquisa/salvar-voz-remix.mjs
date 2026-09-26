// Salva como voz da conta a prévia do Remix que o Lucas escolheu na escuta (26/09/2026: "a B é a melhor").
// A letra vem da escuta às cegas (remix-ritmo.json › escuta.chave); a prévia, do generated_voice_id da rodada.
//
//   node out/juneau/_pesquisa/salvar-voz-remix.mjs B
// Grava o voice_id novo em remix-ritmo.json › voz_salva. Não mexe no canal.json: a troca da voz do canal vem depois
// do teste de text-to-speech com ela.
import { readFileSync, writeFileSync } from "node:fs";

const letra = process.argv[2];
const arq = "out/juneau/_pesquisa/remix-ritmo.json";
const reg = JSON.parse(readFileSync(arq, "utf8"));
const origem = reg.escuta?.chave?.[letra];
if (!origem) { console.error(`a letra "${letra}" não está na chave da escuta (${Object.keys(reg.escuta?.chave ?? {}).join(", ")})`); process.exit(2); }
if (reg.voz_salva) { console.error(`já salva: ${reg.voz_salva.voice_id} (${reg.voz_salva.nome})`); process.exit(2); }
const [, forca, opcao] = origem.match(/^forca-([\d.]+)-opcao-(\d)$/);
const previa = reg.rodadas.find((r) => r.forca === Number(forca)).previas.find((p) => p.opcao === Number(opcao));

const nome = "Alpha Point - Narrator (conversational, calm)";
const { exigirChave } = await import("file:///C:/projetos/regie-v1/src/lib/chaves.mjs");
const r = await fetch("https://api.elevenlabs.io/v1/text-to-voice", {
  method: "POST",
  headers: { "xi-api-key": exigirChave("ELEVENLABS_API_KEY", "salvar a voz escolhida"), "Content-Type": "application/json" },
  body: JSON.stringify({ voice_name: nome, voice_description: reg.descricao, generated_voice_id: previa.generated_voice_id }),
});
if (!r.ok) { console.error(`HTTP ${r.status} ${(await r.text()).slice(0, 300)}`); process.exit(1); }
const j = await r.json();
reg.voz_salva = { voice_id: j.voice_id, nome, de: origem, letra_na_escuta: letra, generated_voice_id: previa.generated_voice_id,
  escolhida_por: "Lucas Rosa, 26/09/2026: \"a B é a melhor\"", salva_em: new Date().toISOString() };
writeFileSync(arq, JSON.stringify(reg, null, 2));
console.log(`salva: ${nome} → ${j.voice_id} (de ${origem})`);
