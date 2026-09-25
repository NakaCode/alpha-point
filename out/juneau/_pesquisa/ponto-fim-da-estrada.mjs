// O ponto de Cascade Point: o fim da estrada de Juneau, tirado da própria estrada do OSM.
//
// Por que assim: o roteiro diz, com fonte, que as estradas de Juneau vão uns 43 milhas ao norte "to Cascade
// Point, and stop". Nem o Natural Earth nem o OSM têm um lugar com esse nome ali (o Nominatim só acha o
// homônimo das Pribilof, e o Overpass não tem nada chamado "Cascade" perto do fim da estrada, 25/09/2026).
// Então o ponto é a ponta norte da Glacier Highway (Alaska Route 7) em estrada-juneau-cascade.json, e o nome
// vem do roteiro, não do OSM. O dono decidiu assim em 25/09/2026 ("Pela estrada no OSM").
//
//   node out/juneau/_pesquisa/ponto-fim-da-estrada.mjs            (confere, não grava)
//   node out/juneau/_pesquisa/ponto-fim-da-estrada.mjs --gravar   (grava pelo gravarGeo da pré-v1)
//   (cwd = a raiz do canal)
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const COMUM = "file:///C:/projetos/regie-v1/src/geo/comum.mjs";
const { gravarGeo, relatarGravacao } = await import(COMUM);

const ESTRADA = "out/juneau/_media/geo/estrada-juneau-cascade.json";
const bruto = readFileSync(ESTRADA, "utf8");
const fc = JSON.parse(bruto);
const linha = fc.features[0].geometry.coordinates;
// a ponta norte é o fim da estrada (a linha vai do centro de Juneau para o norte)
const fim = linha.reduce((a, b) => (b[1] > a[1] ? b : a));
const ultimo = linha[linha.length - 1];
if (fim[0] !== ultimo[0] || fim[1] !== ultimo[1]) throw new Error("a ponta norte não é o último ponto da estrada: confira o traçado");

const shaEstrada = createHash("sha256").update(bruto).digest("hex");
const ponto = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    geometry: { type: "Point", coordinates: [fim[0], fim[1]] },
    properties: {
      name: "Cascade Point", name_pt: "Cascade Point", rotulo: "Cascade Point",
      papel: "fim da estrada de Juneau",
      origem_do_ponto: `ponta norte de ${ESTRADA} (sha256 ${shaEstrada.slice(0, 12)}…), a Glacier Highway do OSM (relation/535397)`,
      origem_do_nome: "o roteiro (roteiros/juneau/roteiro-narrador.md), que o cita com fonte; o OSM não nomeia o lugar",
      aviso: "no Natural Earth 1:10M o ponto cai na água, a 236 m da costa simplificada (a estrada corre junto ao mar: 310 dos 1.505 vértices dela também). Sobre a base de satélite fica certo; se a cena pintar a terra com o polígono do NE, declare o deslocamento",
    },
  }],
};
console.log(`Cascade Point = ${fim[1].toFixed(6)}, ${fim[0].toFixed(6)} (ponta norte da estrada)`);
if (process.argv.includes("--gravar")) {
  const g = gravarGeo({ slug: "cascade-point", fc: ponto, proj: "juneau", origem: {
    fonte: "OpenStreetMap via Overpass API — ponta norte da Glacier Highway (relation/535397)",
    licenca: "ODbL 1.0 — exige atribuição © OpenStreetMap contributors",
    url: "https://www.openstreetmap.org/copyright", exige_credito: true,
    derivado_por: `out/juneau/_pesquisa/ponto-fim-da-estrada.mjs --gravar (de ${ESTRADA}, sha256 ${shaEstrada.slice(0, 12)}…)` } });
  console.error(relatarGravacao(g));
}
