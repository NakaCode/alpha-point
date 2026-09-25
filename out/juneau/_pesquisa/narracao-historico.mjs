// Baixa do histórico da ElevenLabs as gerações da narração do Juneau (24/09/2026) — sem gastar crédito.
//
// Por que existe: a narração foi gerada no site (2 versões por clique), e a pré-v1 não baixa do histórico
// (APRENDIZADOS.md item 17, achado 14). O navegador do app corta downloads acima de ~1,8 MB. Então a API:
//   GET /v1/history?voice_id=…            lista (paginada: has_more, last_history_item_id)
//   GET /v1/history/{history_item_id}/audio   o MP3 de uma geração
// A chave vem do leitor da pré-v1 (src/lib/chaves.mjs) e nunca é impressa. O Lucas autorizou baixar as 6 em
// 25/09/2026.
//
// Cada bloco se reconhece pela contagem de caracteres que a geração cobrou (character_count_change_to - from),
// igual ao tamanho do texto aprovado em roteiros/juneau/voz/bloco-N.txt. A 2ª versão do mesmo clique não cobra
// (from = to) e vem no mesmo segundo, com o mesmo "from": é assim que ela se junta à 1ª.
//
//   node out/juneau/_pesquisa/narracao-historico.mjs            lista e confere, não baixa
//   node out/juneau/_pesquisa/narracao-historico.mjs --baixar   baixa para out/juneau/_narracao/historico/
//                                                               e grava a procedência em _pesquisa/narracao-historico.json
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const { exigirChave } = await import("file:///C:/projetos/regie-v1/src/lib/chaves.mjs");
const chave = exigirChave("ELEVENLABS_API_KEY", "baixar a narração do histórico");
const canal = JSON.parse(readFileSync("canal.json", "utf8"));
const VOZ = canal.narracao?.voice_id;
if (!VOZ) { console.error("canal.json sem narracao.voice_id"); process.exit(2); }
const DIA = "2026-09-24", MODELO = "eleven_v3";
const DESTINO = "out/juneau/_narracao/historico";
const BAIXAR = process.argv.includes("--baixar");

const blocos = [1, 2, 3].map((n) => {
  const txt = readFileSync(`roteiros/juneau/voz/bloco-${n}.txt`, "utf8");
  return { n, caracteres: txt.length, sha256_texto: createHash("sha256").update(txt).digest("hex") };
});

async function api(caminho) {
  const r = await fetch("https://api.elevenlabs.io" + caminho, { headers: { "xi-api-key": chave } });
  if (r.status === 401 || r.status === 403) { console.error(`a ElevenLabs recusou (HTTP ${r.status}): confira a chave; não se contorna`); process.exit(1); }
  if (!r.ok) { console.error(`HTTP ${r.status} em ${caminho.split("?")[0]}`); process.exit(1); }
  return r;
}

let itens = [], depois = null;
do {
  const q = new URLSearchParams({ voice_id: VOZ, page_size: "100" });
  if (depois) q.set("start_after_history_item_id", depois);
  const j = await (await api(`/v1/history?${q}`)).json();
  itens.push(...j.history);
  depois = j.has_more ? j.last_history_item_id : null;
} while (depois);

const doDia = itens.filter((it) => new Date(it.date_unix * 1000).toISOString().slice(0, 10) === DIA && it.model_id === MODELO);
// a geração que cobrou diz o bloco; a outra do mesmo "from" é a 2ª versão do mesmo clique
const saida = [];
for (const b of blocos) {
  const cobrou = doDia.filter((it) => it.character_count_change_to - it.character_count_change_from === b.caracteres);
  if (cobrou.length !== 1) { console.error(`bloco ${b.n}: esperava 1 geração que cobrou ${b.caracteres} caracteres, achei ${cobrou.length}`); process.exit(1); }
  const par = doDia.filter((it) => it.character_count_change_from === cobrou[0].character_count_change_from)
    .sort((x, y) => x.date_unix - y.date_unix || (x === cobrou[0] ? -1 : 1));
  if (par.length !== 2) { console.error(`bloco ${b.n}: esperava 2 versões do mesmo clique, achei ${par.length}`); process.exit(1); }
  par.forEach((it, k) => saida.push({ bloco: b.n, versao: "ab"[k], history_item_id: it.history_item_id, date_unix: it.date_unix,
    quando_brasilia: new Date(it.date_unix * 1000).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    cobrou_caracteres: it.character_count_change_to - it.character_count_change_from,
    texto_aprovado: { arquivo: `roteiros/juneau/voz/bloco-${b.n}.txt`, caracteres: b.caracteres, sha256: b.sha256_texto } }));
}
for (const s of saida) console.log(`bloco ${s.bloco}${s.versao} · ${s.quando_brasilia} · ${s.history_item_id} · cobrou ${s.cobrou_caracteres}`);

if (BAIXAR) {
  mkdirSync(DESTINO, { recursive: true });
  for (const s of saida) {
    const arq = `${DESTINO}/bloco-${s.bloco}${s.versao}-${s.history_item_id}.mp3`;
    if (!existsSync(arq)) {
      const r = await api(`/v1/history/${s.history_item_id}/audio`);
      const tipo = r.headers.get("content-type") || "";
      if (!/^audio\//.test(tipo)) { console.error(`bloco ${s.bloco}${s.versao}: veio ${tipo}, não áudio`); process.exit(1); }
      writeFileSync(arq, Buffer.from(await r.arrayBuffer()));
    }
    const buf = readFileSync(arq);
    const dur = +execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", arq], { encoding: "utf8" }).trim();
    Object.assign(s, { arquivo: arq, bytes: buf.length, sha256: createHash("sha256").update(buf).digest("hex"), duracao_s: +dur.toFixed(2) });
    console.log(`  ✓ ${arq} (${(buf.length / 1e6).toFixed(1)} MB, ${Math.floor(dur / 60)}:${String(Math.round(dur % 60)).padStart(2, "0")})`);
  }
  writeFileSync("out/juneau/_pesquisa/narracao-historico.json", JSON.stringify({
    fonte: "ElevenLabs, histórico da conta (GET /v1/history/{id}/audio), sem gasto de crédito",
    voz: { voice_id: VOZ, nome: "Alpha Point - Narrator (conversational)" }, modelo: MODELO, dia_da_geracao: DIA,
    baixado_em: new Date().toISOString().slice(0, 10), gerado_por: "out/juneau/_pesquisa/narracao-historico.mjs --baixar",
    geracoes: saida }, null, 2) + "\n");
  console.log("procedência: out/juneau/_pesquisa/narracao-historico.json");
}
