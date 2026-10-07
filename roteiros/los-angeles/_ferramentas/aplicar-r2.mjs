// aplicar-r2.mjs — a 2ª lista fechada do roteiro do vídeo 2: só trocas com a redação que as lentes da bancada final deram
// (roteiros/los-angeles/qc-roteiro/*-final.laudo.md). Cada "de" tem de casar UMA vez; senão, nada se grava (exit 1).
import { readFileSync, writeFileSync } from "node:fs";
const ARQ = "roteiros/los-angeles/roteiro-narrador.md";
const LISTA = [
  ["R2-01", "The wall came first.", "The breakwater came first.", "locução A1, clareza C1, roteiro"],
  ["R2-02", "A TEU is the space of one twenty-foot container;", "A TEU is the space of a single twenty-foot container;", "locução A2"],
  ["R2-03", "So put the deep-water harbor on the map: in San Pedro Bay, more than twenty miles from the Plaza.", "So put the deep-water harbor on the map: in San Pedro Bay.", "clareza C3 (a régua até Point Fermin fica no mapa)"],
  ["R2-04", "And a city nineteen miles from that harbor drew a strip half a mile wide to touch the two towns around it, then voted itself onto the coast.", "And a city nineteen miles from the harbor towns drew a strip half a mile wide to touch them, then voted itself onto the coast.", "roteiro A2, fatos B1 (o 19 mede da Plaza a Wilmington, F087)"],
  ["R2-05", "Colonel Mendell signed a report in San Francisco.", "Colonel Mendell signed it in San Francisco.", "clareza C4"],
  ["R2-06", "On today's outline, about nine miles of it still run thin, between its neighbors: Gardena, Torrance, Carson, Lomita, and pockets of county land. Long Beach doesn't touch it.", "On today's outline, the city has grown around both ends, and about nine miles of it still run thin, between other cities and county land.", "clareza C2/C7 (para onde foram as seis milhas; os vizinhos já estão em p5)"],
];
let t = readFileSync(ARQ, "utf8");
const falhas = [];
for (const [id, de, para] of LISTA) {
  const n = t.split(de).length - 1;
  if (n !== 1) { falhas.push(`${id}: casa ${n} vez(es)`); continue; }
  t = t.replace(de, para);
}
if (falhas.length) { console.error(falhas.join("\n")); process.exit(1); }
writeFileSync(ARQ, t);
console.log(`aplicadas ${LISTA.length} trocas`);
