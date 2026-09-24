// Rodada 7: o tom de conversa (pedido do dono em 24/09/2026, depois de ouvir a narração). Aplica a reescrita
// do workflow "reescrita-conversa-juneau" sobre r6-secoes.json (a revisão aprovada, c8677c8e3318), com as
// escolhas do dono por item: "nova" (o texto reescrito) ou "manter" (o aprovado). Sem arquivo de escolhas,
// aplica tudo o que é novo (é o candidato que vai à página de aprovação).
//   node aplicar-r7.mjs <r7-result.json> [escolhas.json]      (de dentro de midia/juneau/roteiro/_execucao)
// Itens: numa seção em que a reescrita manteve o número de parágrafos, cada parágrafo mudado é um item
// ("p4-3" = p4, terceiro parágrafo); se o número mudou, a seção inteira é um item só ("p4").
// Cada afirmação (claim_usage) segue o seu parágrafo: se ele ficou novo, o excerpt vira o excerpt_novo do
// mapa, que tem de ser literal no parágrafo novo; se ficou o aprovado, o excerpt não muda.
// Saída: r7-secoes.json, r7-trocas.json e r7-itens.json (os itens, para a página).
import fs from "node:fs";
import crypto from "node:crypto";

const [, , RES, ESC] = process.argv;
const W = JSON.parse(fs.readFileSync(RES, "utf8"));
const R = W.result ?? W;
const secs = JSON.parse(fs.readFileSync("r6-secoes.json", "utf8"));
const nar = (s) => s.map((x) => x.paragrafos.join("\n\n")).join("\n\n");
const sha = (s) => crypto.createHash("sha256").update(nar(s)).digest("hex");
if (!sha(secs).startsWith("c8677c8e3318")) throw new Error(`r6 não é c8677c8e3318: ${sha(secs).slice(0, 12)}`);
const escolhas = ESC ? JSON.parse(fs.readFileSync(ESC, "utf8")) : null;
const quer = (id) => (escolhas ? escolhas[id] : "nova");

const itens = [], trocas = [], erros = [];
for (const s of secs) {
  const w = R.secoes.find((x) => x && x.id === s.id);
  if (!w || !w.paragrafos) { erros.push(`${s.id}: sem resultado da reescrita`); continue; }
  const velhos = s.paragrafos, novos = w.paragrafos;
  const mapa = new Map(w.mapa.map((m) => [m.excerpt_antigo, m.excerpt_novo]));
  const porPar = velhos.length === novos.length;
  const idsDoPar = velhos.map((_, k) => (porPar ? `${s.id}-${k + 1}` : s.id));
  if (porPar) velhos.forEach((v, k) => { if (v !== novos[k]) itens.push({ id: idsDoPar[k], secao: s.id, de: v, para: novos[k] }); });
  else itens.push({ id: s.id, secao: s.id, de: velhos.join("\n\n"), para: novos.join("\n\n") });

  const escolhidos = porPar ? velhos.map((v, k) => (v !== novos[k] && quer(idsDoPar[k]) === "nova" ? novos[k] : v)) : quer(s.id) === "nova" ? novos : velhos;
  const usou = porPar ? velhos.map((v, k) => escolhidos[k] !== v) : velhos.map(() => escolhidos !== velhos);
  for (const it of itens.filter((x) => x.secao === s.id)) if (quer(it.id) === "nova") trocas.push({ id: it.id, de: it.de, para: it.para });

  s.claim_usages = s.claim_usages.map((u) => {
    const k = velhos.findIndex((p) => p.includes(u.excerpt));
    if (k < 0) { erros.push(`${s.id}: excerpt aprovado não está em nenhum parágrafo: "${u.excerpt}"`); return u; }
    if (!usou[k]) return u;
    const nv = mapa.get(u.excerpt);
    if (!nv) { erros.push(`${s.id}: o mapa não traz "${u.excerpt}"`); return u; }
    const alvo = porPar ? escolhidos[k] : escolhidos.join("\n\n");
    if (!alvo.includes(nv)) { erros.push(`${s.id}: excerpt novo não é literal: "${nv}"`); return u; }
    return { ...u, excerpt: nv };
  });
  s.paragrafos = escolhidos;
}
if (erros.length) { console.log("ERROS:\n" + erros.join("\n")); process.exit(1); }
const palavras = nar(secs).split(/\s+/).filter(Boolean).length;
fs.writeFileSync("r7-secoes.json", JSON.stringify(secs, null, 1));
fs.writeFileSync("r7-trocas.json", JSON.stringify({ revisao_aprovada: "c8677c8e3318", escolhas: escolhas || "todas as novas", trocas }, null, 1));
fs.writeFileSync("r7-itens.json", JSON.stringify(itens, null, 1));
console.log(`itens ${itens.length} · trocas aplicadas ${trocas.length} · palavras ${palavras} · sha ${sha(secs).slice(0, 12)}`);
