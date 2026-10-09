#!/usr/bin/env node
// Confere que a caixa da camada agua-osm-la contém todo quadro de toda cena de mapa do vídeo 2, a 30 fps, com o giro; na s05,
// os quadros com zoom >= 9,5 (abaixo disso a camada fica apagada pela rampa de zoom proposta). Imprime a folga mínima em km.
// Uso: node out/los-angeles/_pesquisa/agua_caixa_conferir.mjs
import { camera, cantos } from "./agua_cameras.mjs";
const B = [-120.40, 32.80, -116.30, 34.95];
const cenas = ["s01","s03","s05","s07","s10","s12","s14","s17","s19","s21","s23","s26","s29","s31","s33","s37","s40","s42","s44","s46","s48","s49","s53","s55"];
const km = (dlon, lat) => dlon * 111.32 * Math.cos(lat * Math.PI / 180);
let pior = Infinity, falhas = 0;
for (const c of cenas) {
  const { DUR, at } = camera(c); let min = Infinity, onde = null, n = 0;
  for (let f = 0; f <= Math.ceil(DUR * 30); f++) {
    const t = Math.min(f / 30, DUR), cam = at(t);
    if (c === "s05" && cam.zoom < 9.5) continue;
    n++;
    for (const [x, y] of cantos(cam)) {
      const d = Math.min(km(x - B[0], y), km(B[2] - x, y), (y - B[1]) * 110.57, (B[3] - y) * 110.57);
      if (d < min) { min = d; onde = { t: +t.toFixed(3), zoom: +cam.zoom.toFixed(2), canto: [+x.toFixed(4), +y.toFixed(4)] }; }
    }
  }
  if (min <= 0) falhas++;
  pior = Math.min(pior, min);
  console.log(c, "quadros", n, "folga mínima", min.toFixed(1), "km", JSON.stringify(onde));
}
console.log(falhas ? `FALHA: ${falhas} cena(s) saem da caixa` : `ok: todas dentro, folga mínima ${pior.toFixed(1)} km`);
process.exit(falhas ? 1 : 0);
