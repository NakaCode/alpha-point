// Junta as camadas da rodada 7 (o tom de conversa), cada uma por cima da anterior, seção por seção:
//   r7-result.json          a reescrita em conversa (a p1 fica dela: é igual à prova aprovada pelo dono);
//   r7-enxugar-result.json  o enxugamento que fez o texto caber no limite de palavras;
//   r7-polir-result.json    o polimento dos trechos que a leitura final ainda achou lidos.
// A seção que uma camada não aprovou fica como estava na camada de baixo. As dependências entre partes
// que valem só para o texto novo seguem junto, para a página avisar.
//   node juntar-r7.mjs      (de dentro de midia/juneau/roteiro/_execucao) → r7-final-result.json
import fs from "node:fs";
const ler = (f) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : null);
const R = ler("r7-result.json");
const CAMADAS = [["enxugada", ler("r7-enxugar-result.json")], ["polida", ler("r7-polir-result.json")]].filter(([, x]) => x);
const palavras = (t) => t.split(/\s+/).filter(Boolean).length;

let conferidas = 0;
const secoes = R.secoes.map((s) => {
  let atual = { id: s.id, paragrafos: s.paragrafos, mapa: s.mapa, trocas: s.trocas, origem: "reescrita" };
  let ok = s.verificacao?.aprovada;
  for (const [nome, X] of CAMADAS) {
    const e = X.secoes.find((x) => x && x.id === s.id);
    if (!e) continue;
    if (e.reprovada) { atual.origem += ` (${nome.replace(/a$/, "amento")} não passou)`; continue; }
    atual = { id: s.id, paragrafos: e.paragrafos, mapa: e.mapa, trocas: e.trocas, origem: nome };
    ok = e.verificacao?.aprovada;
  }
  if (ok) conferidas++;
  return atual;
});

// dependências que só existem no texto novo: a frase de uma parte que conversa com uma frase nova de outra
const DEPENDE = [
  { frase: "Go back to the map", precisa: "Start with the map.", onde: "no parágrafo 2 da parte 1", troca: "Look at a map" },
];
const texto = secoes.map((s) => s.paragrafos.join("\n\n")).join("\n\n");
const dependencias = DEPENDE.filter((d) => texto.includes(d.frase) && texto.includes(d.precisa)).map((d) => ({
  frase: secoes.flatMap((s) => s.paragrafos.flatMap((p) => p.split(/(?<=[.!?])\s+/))).find((f) => f.includes(d.frase)),
  depende_de: `“${d.precisa}”, ${d.onde}`,
  se_faltar: `troco “${d.frase}” por “${d.troca}”.`,
}));

const fatos = conferidas === R.secoes.length
  ? "Os fatos são os mesmos: cada parte foi conferida de novo contra as fontes do dossiê, frase a frase, e outra vez a cada ajuste depois disso."
  : `${conferidas} de ${R.secoes.length} partes passaram na conferência de fatos; as outras estão marcadas.`;
const total = secoes.reduce((a, s) => a + palavras(s.paragrafos.join(" ")), 0);
fs.writeFileSync("r7-final-result.json", JSON.stringify({ secoes, palavras: total, fatos, dependencias }, null, 1));
console.log(secoes.map((s) => `${s.id} ${palavras(s.paragrafos.join(" "))} (${s.origem})`).join(" · "));
console.log(`total ${total} palavras · conferidas ${conferidas}/${R.secoes.length} · dependências ${dependencias.length}`);
