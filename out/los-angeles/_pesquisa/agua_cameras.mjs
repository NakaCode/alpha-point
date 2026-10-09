#!/usr/bin/env node
// A caixa que as câmeras das cenas de mapa do vídeo 2 veem, sem abrir cena e sem tile: lê o objeto CENA e o DUR de cada HTML,
// refaz o cameraAt da própria cena (pernas "h" lineares em Mercator, "v" pelo criarCameraMapa do _vendor, giro linear) a 30 fps
// e projeta os 4 cantos do quadro 3840×2160 (MapLibre, tiles de 512 px, pitch 0). Grava out/los-angeles/_tmp/agua/cameras.json.
// Uso, de dentro de C:/projetos/alpha-point: node out/los-angeles/_pesquisa/agua_cameras.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import vm from "node:vm";
const ctxCam = { Math, console };
vm.runInNewContext(readFileSync("out/los-angeles/_media/_vendor/camera-mapa.js", "utf8"), ctxCam);
const criarCameraMapa = ctxCam.criarCameraMapa;
const G = "out/los-angeles/graphics/";
const cenas = ["s01","s03","s05","s07","s10","s12","s14","s17","s19","s21","s23","s26","s29","s31","s33","s37","s40","s42","s44","s46","s48","s49","s53","s55"];
function literal(src, ini) { // do "{" em ini até o "}" que fecha, respeitando strings
  let d = 0, q = null;
  for (let i = ini; i < src.length; i++) {
    const c = src[i];
    if (q) { if (c === "\\") { i++; continue; } if (c === q) q = null; continue; }
    if (c === '"' || c === "'" || c === "`") { q = c; continue; }
    if (c === "/" && src[i + 1] === "/") { i = src.indexOf("\n", i); continue; }
    if (c === "{") d++; else if (c === "}") { d--; if (d === 0) return src.slice(ini, i + 1); }
  }
  throw new Error("CENA sem fim");
}
const merc = (lng, lat) => { const s = Math.sin(lat * Math.PI / 180); return [lng, 0.5 * Math.log((1 + s) / (1 - s))]; };
const unmercLat = (y) => (2 * Math.atan(Math.exp(y)) - Math.PI / 2) * 180 / Math.PI;
const cl = (v, a, b) => v < a ? a : v > b ? b : v;
export function cantos(cam, W = 3840, H = 2160, pts = null) {
  const ws = 512 * Math.pow(2, cam.zoom), b = cam.bearing * Math.PI / 180;
  const cx = (cam.center[0] + 180) / 360 * ws;
  const s = Math.sin(cam.center[1] * Math.PI / 180), cy = (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * ws;
  const P = pts || [[0, 0], [W, 0], [W, H], [0, H]];
  return P.map(([x, y]) => { const dx = x - W / 2, dy = y - H / 2;
    const wx = cx + dx * Math.cos(b) - dy * Math.sin(b), wy = cy + dx * Math.sin(b) + dy * Math.cos(b);
    return [wx / ws * 360 - 180, Math.atan(Math.sinh(Math.PI * (1 - 2 * wy / ws))) * 180 / Math.PI]; });
}
export function camera(cena) {
  const src = readFileSync(G + cena + ".html", "utf8");
  const i = src.indexOf("var CENA = {"); if (i < 0) throw new Error(cena + ": sem var CENA");
  const lit = literal(src, src.indexOf("{", i));
  const CENA = vm.runInNewContext("(" + lit + ")", { Math });
  const m = src.match(/var DUR = ([0-9.]+)/); const DUR = m ? +m[1] : CENA.duracao;
  const PT = CENA.pontos;
  const vp = (n) => ({ lng: PT[n].lng, lat: PT[n].lat, zoom: PT[n].zoom, bearing: 0, pitch: 0 });
  CENA.pernas.forEach((L) => { if (L.tipo === "v") L.cam = criarCameraMapa({ viewports: [vp(L.de), vp(L.para)], duration: L.t1 - L.t0,
    width: 3840, height: 2160, bearingLoop: null, cameraAbre: (cena === "s03") ? 0.5 : (L.abre != null ? L.abre : 0.5), cameraFecha: L.fecha != null ? L.fecha : 0.5 }); });
  const giro = CENA.giro || [0, 0];
  const at = (t) => {
    let L = CENA.pernas[CENA.pernas.length - 1];
    for (const p of CENA.pernas) if (t < p.t1) { L = p; break; }
    let c;
    if (L.tipo === "v") c = L.cam(cl(t - L.t0, 0, L.t1 - L.t0));
    else { const u = cl((t - L.t0) / (L.t1 - L.t0), 0, 1), a = PT[L.de], b = PT[L.para];
      const ma = merc(a.lng, a.lat), mb = merc(b.lng, b.lat);
      c = { center: [a.lng + (b.lng - a.lng) * u, unmercLat(ma[1] + (mb[1] - ma[1]) * u)], zoom: a.zoom + (b.zoom - a.zoom) * u }; }
    return { center: c.center, zoom: c.zoom, bearing: giro[0] + (giro[1] - giro[0]) * t / DUR, pitch: 0 };
  };
  return { CENA, DUR, at };
}
if (process.argv[1] && process.argv[1].endsWith("agua_cameras.mjs")) {
  const out = {};
  for (const c of cenas) {
    if (!existsSync(G + c + ".html")) { out[c] = { erro: "sem HTML" }; continue; }
    try {
      const { DUR, at } = camera(c);
      let bb = [180, 90, -180, -90], zmin = 99, zmax = -99, n = 0;
      for (let f = 0; f <= Math.ceil(DUR * 30); f++) { const t = Math.min(f / 30, DUR), cam = at(t); n++;
        zmin = Math.min(zmin, cam.zoom); zmax = Math.max(zmax, cam.zoom);
        for (const [x, y] of cantos(cam)) { bb[0] = Math.min(bb[0], x); bb[1] = Math.min(bb[1], y); bb[2] = Math.max(bb[2], x); bb[3] = Math.max(bb[3], y); } }
      out[c] = { dur: DUR, quadros: n, zoom: [+zmin.toFixed(3), +zmax.toFixed(3)], bbox: bb.map((v) => +v.toFixed(4)) };
    } catch (e) { out[c] = { erro: String(e.message || e) }; }
    console.log(c, JSON.stringify(out[c]));
  }
  writeFileSync("out/los-angeles/_tmp/agua/cameras.json", JSON.stringify(out, null, 1) + "\n");
}
