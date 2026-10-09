#!/usr/bin/env node
// Imprime a câmera (center, zoom, bearing) de uma cena num instante, pelo cameraAt refeito em agua_cameras.mjs.
// Uso: node out/los-angeles/_pesquisa/agua_camera_em.mjs s29 6.0 [s31 0 ...]
import { camera } from "./agua_cameras.mjs";
const a = process.argv.slice(2), r = [];
for (let i = 0; i < a.length; i += 2) { const { at } = camera(a[i]); r.push({ cena: a[i], t: +a[i + 1], ...at(+a[i + 1]) }); }
console.log(JSON.stringify(r));
