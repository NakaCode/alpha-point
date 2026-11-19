#!/usr/bin/env node
// portao-movimento-provar.mjs — a prova do ferramentas/portao-movimento.mjs, sem rede e sem MapTiler.
//
// Três partes, todas com o portão rodado como o mapista e o editor o rodam (node ferramentas/portao-movimento.mjs … --json),
// conferindo o exit e os TIPOS reprovados na janela de tempo de cada caso:
//   A. sintéticas: cenas 4K mínimas, uma por regra, que passam e que reprovam. As de mapa usam o MapLibre do canal
//      (out/rio-columbia/_media/_vendor/maplibre-gl.js) com um estilo sem fonte nenhuma (só o fundo): nenhum pedido sai. O mapa parado
//      (e a aproximação de +0,004/s, que reprova, e a de +0,02/s, que passa), a pílula que quebra o parado, a luz de corrente que não
//      conta, o traço que se desenha e conta, a viagem de 1,2 s e a de 1,8 s, o recuo de 6 níveis/s, o mergulho de 6 níveis/s, o corte
//      seguido de viagem, a vista de 0,8 s, a foto que encolhe (não é corte), o "·" e o "•" na ponta da linha (o <br>, a quebra pela
//      largura, o começo), o "·" no meio, o campo em branco e o que ganha o texto a tempo, a caixa que nunca ganha texto, o --aceitos,
//      e os NÃO MEDIDO (sem __renderAt, mapa que não assenta).
//   C. os achados das duas revisões de espectador do vídeo 7 (out/rio-columbia/_tmp/espectador-r1 e -r2, mantidos.json e
//      derrubados.json), NA VERSÃO QUE OS REVISORES VIRAM (git show <commit>:out/rio-columbia/graphics/<id>.html, com um <base> para a
//      mídia de hoje, em out/_tmp/portao-movimento/casos/<commit>/): o MANTIDO de movimento, de "·" e de campo vazio tem de reprovar,
//      com o tipo certo, na janela do achado; o DERRUBADO do mesmo tipo não pode reprovar ali. Os derrubados que o portão reprova por
//      decisão (os desvios que a Sala aceitou, pelo --aceitos) ou porque as duas revisões se contradizem estão em CONFLITOS, com o
//      porquê; a prova confere que continuam exatamente assim.
//   D. as cenas de hoje (out/rio-columbia/graphics/, as 57 que o Lucas aprovou na linha do tempo): em cada caso de C, o mantido já
//      consertado não reprova mais na janela (o conserto valeu) e o derrubado continua passando. O que o portão acha de NOVO nas 57
//      vai ao resultado.json (achados_de_hoje) e ao RELATO, sem mudar o veredito da prova.
//
// v2 (18/11/2026, as trocas do cético, out/_tmp/portao-movimento/cetico.md): o recuo rápido é aviso (K7), e o caso sintético, o M1 e o
// D29 conferem o aviso (SO_AVISO); o D29 saiu dos CONFLITOS. Dos 14 mantidos, 13 reprovam pelo motivo do achado, e o M7 ("o cabo sem
// nome") reprova pela janela do M8, o mapa parado: o nome que falta não se mede, e o conserto foi o mesmo (K11). As 22 cenas de borda
// do cético (out/_tmp/portao-movimento/cetico-casos/bordas/ e bordas-video/) ficaram fora desta prova: elas usam um vídeo feito na
// hora pelo ffmpeg, e o resultado delas na v2 está no RELATO (§10).
// Uso (cwd na raiz do canal): node ferramentas/portao-movimento-provar.mjs [--pasta=<dir>] [--so=A,C,D]
//   --pasta  onde montar as cenas e gravar resultado.json (padrão: out/_tmp/portao-movimento/, fora do git).
// Saída: 0 = tudo certo · 1 = algum caso errado · 2 = não rodou. Nada do vídeo de verdade é tocado (as cenas de hoje só se leem).
import { writeFileSync, existsSync, mkdirSync, rmSync, readFileSync } from "node:fs";
import { spawn, execFileSync } from "node:child_process";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

process.env.REGIE_MOTOR ||= "C:/projetos/regie-v1";
const RAIZ = process.cwd();
const AQUI = path.dirname(fileURLToPath(import.meta.url));
const PORTAO = path.join(AQUI, "portao-movimento.mjs");
const VENDOR = path.join(RAIZ, "out", "rio-columbia", "_media", "_vendor");
for (const f of [PORTAO, path.join(RAIZ, "scripts", "lib", "chrome.mjs"), path.join(VENDOR, "maplibre-gl.js")])
  if (!existsSync(f)) { console.error(`NÃO RODOU — falta ${f} (rode da raiz do canal)`); process.exit(2); }
const argv = process.argv.slice(2);
const opt = (n) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
const PASTA = path.resolve(opt("pasta") || path.join(RAIZ, "out", "_tmp", "portao-movimento"));
const PARTES = (opt("so") || "A,C,D").split(",");
mkdirSync(PASTA, { recursive: true });

const resultado = { quando: new Date().toISOString(), portao_sha256: createHash("sha256").update(readFileSync(PORTAO)).digest("hex"), partes: {} };
let erros = 0;
const ok = (parte, nome, certo, detalhe) => {
  (resultado.partes[parte] ||= []).push({ nome, certo, detalhe });
  if (!certo) erros++;
  console.log(`${certo ? "certo" : "ERRADO"}  ${parte} · ${nome}${detalhe ? " — " + detalhe : ""}`);
};
// o portão, num processo à parte (como o mapista o roda), com várias cenas de uma vez
const rodar = (alvos, extra = []) => new Promise((res) => {
  const ch = spawn(process.execPath, [PORTAO, ...alvos, "--json", "--sem-registro", ...extra], { cwd: RAIZ });
  let out = "", err = ""; ch.stdout.on("data", (d) => { out += d; }); ch.stderr.on("data", (d) => { err += d; });
  ch.on("close", (code) => res({ exit: code, linhas: out.split("\n").filter((l) => l.startsWith("{")).map((l) => JSON.parse(l)), stderr: err.slice(0, 600) }));
});
const tipos = (l) => [...new Set((l.itens || []).filter((i) => !i.aceito).map((i) => i.tipo))].sort();
const igual = (a, b) => JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
const naJanela = (l, ts, [a, b]) => (l.itens || []).filter((i) => !i.aceito && ts.includes(i.tipo) && Math.min(i.t1, b) - Math.max(i.t0, a) >= Math.min(0.3, (i.t1 - i.t0) / 2) - 1e-6);
const resumo = (its) => its.map((i) => `${i.tipo} ${i.v} @${i.t0}–${i.t1}s`).join("; ");

// ───────────────────────────────────────────────────────────────── A. as sintéticas ────
async function parteA() {
  const dirA = path.join(PASTA, "sinteticas"); rmSync(dirA, { recursive: true, force: true }); mkdirSync(dirA, { recursive: true });
  const vend = pathToFileURL(VENDOR + path.sep).href;
  const css = `html,body{margin:0;width:3840px;height:2160px;overflow:hidden;background:#0E1726;font:500 84px/1.2 sans-serif;color:#F4F1EA}
#map{position:absolute;left:0;top:0;width:3840px;height:2160px}.a{position:absolute;white-space:nowrap}.pil{background:rgba(11,15,20,.92);padding:24px 40px}
.card{position:absolute;background:#EDE6D6;color:#14181F}`;
  const comum = `var E=function(i){return document.getElementById(i)};var cl=function(v){return Math.max(0,Math.min(1,v))};
var eio=function(u){u=cl(u);return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2};var eo=function(u){u=cl(u);return 1-Math.pow(1-u,3)};`;
  // a cena de mapa: o MapLibre do canal, sem fonte (nenhum pedido), a câmera por jumpTo(cam(t)) e o overlay por over(t)
  const mapa = ({ dur, camera, corpo = "", script = "", assenta = true }) => `<!doctype html><html lang="en-US" data-render="4k-native"><head><meta charset="utf-8">
<link rel="stylesheet" href="${vend}maplibre-gl.css"><script src="${vend}maplibre-gl.js"></script><style>${css}</style></head>
<body><div id="map"></div>${corpo}<script>${comum}
function cam(t){${camera}} function over(t){${script}}
window.__duracao=${dur}; var pronto; window.__ready=new Promise(function(r){pronto=r});
var map=new maplibregl.Map({container:"map",interactive:false,fadeDuration:0,attributionControl:false,
  style:{version:8,sources:{},layers:[{id:"bg",type:"background",paint:{"background-color":"#2a3340"}}]},center:cam(0).center,zoom:cam(0).zoom});
window.map=map; map.on("load",function(){window.__renderAt(0);pronto(true)});
window.__renderAt=function(t){map.jumpTo(cam(t));over(t)};
window.__aguardarMapa=function(){return ${assenta ? "window.__ready" : "new Promise(function(){})"}};
</script></body></html>`;
  // a cena sem mapa (mesa, texto)
  const dom = ({ dur, corpo, script = "", semRender = false }) => `<!doctype html><html lang="en-US" data-render="4k-native"><head><meta charset="utf-8"><style>${css}</style></head>
<body>${corpo}<script>${comum} window.__duracao=${dur};${semRender ? "" : `window.__renderAt=function(t){${script}};`}</script></body></html>`;
  const C0 = "return {center:[-118,46],zoom:6,bearing:0,pitch:0}";
  const pil = (id, x, y, txt, op = 1) => `<div id="${id}" class="a pil" style="left:${x}px;top:${y}px;opacity:${op}">${txt}</div>`;
  const casos = [
    // [nome, html, exit esperado, tipos esperados]
    ["mapa parado 3 s (uma pílula fixa)", mapa({ dur: 3.5, camera: C0, corpo: pil("p", 1200, 900, "Fixed label") }), 1, ["mapa-parado"]],
    ["aproximação de +0,004/s (a s48 de antes): parado", mapa({ dur: 3.5, camera: "return {center:[-118,46],zoom:6+0.004*t}", corpo: pil("p", 1200, 900, "Label") }), 1, ["mapa-parado"]],
    ["aproximação de +0,02/s (o conserto): passa", mapa({ dur: 3.5, camera: "return {center:[-118,46],zoom:6+0.02*t}", corpo: pil("p", 1200, 900, "Label") }), 0, []],
    ["a pílula que entra a cada 1,5 s quebra o parado", mapa({ dur: 5, camera: C0, corpo: pil("p1", 400, 400, "One", 0) + pil("p2", 400, 700, "Two", 0) + pil("p3", 400, 1000, "Three", 0),
      script: "E('p1').style.opacity=cl((t-1)/0.3);E('p2').style.opacity=cl((t-2.5)/0.3);E('p3').style.opacity=cl((t-4)/0.3)" }), 0, []],
    ["a luz de corrente (só o dashoffset muda) não conta", mapa({ dur: 3.5, camera: C0,
      corpo: `<svg class="a" style="left:0;top:0" width="3840" height="2160"><path id="luz" d="M400,1600 L3400,600" fill="none" stroke="#bfe" stroke-width="8" stroke-dasharray="70 230"/></svg>`,
      script: "E('luz').setAttribute('stroke-dashoffset',(-(t*110)%300).toFixed(1))" }), 1, ["mapa-parado"]],
    ["o traço que se desenha (dasharray do tamanho do traço) conta", mapa({ dur: 4, camera: C0,
      corpo: `<svg class="a" style="left:0;top:0" width="3840" height="2160"><path id="rio" d="M400,1600 L3400,600" fill="none" stroke="#5ad" stroke-width="12" stroke-dasharray="3200 3200"/></svg>`,
      script: "E('rio').setAttribute('stroke-dashoffset',(3200*(1-cl(t/3.8))).toFixed(1))" }), 0, []],
    ["viagem de 1,2 s", mapa({ dur: 2.8, camera: "return {center:[-118,46],zoom:6+2*eio((t-1)/1.2)}" }), 1, ["viagem-curta"]],
    ["viagem de 1,8 s", mapa({ dur: 3.4, camera: "return {center:[-118,46],zoom:6+2*eio((t-1)/1.8)}" }), 0, []],
    ["recuo de 4 níveis em 2 s (6 níveis/s no pico): aviso, não reprova (v2, K7)", mapa({ dur: 3.6, camera: "return {center:[-118,46],zoom:10-4*eio((t-1)/2)}" }), 0, []],
    ["mergulho de 4 níveis em 2 s (6 níveis/s): passa", mapa({ dur: 3.6, camera: "return {center:[-118,46],zoom:6+4*eio((t-1)/2)}" }), 0, []],
    ["o corte seco e a viagem no mesmo quadro", mapa({ dur: 3.6, camera: "return {center:[-118,46],zoom:6+2*eio((t-1)/2)}",
      corpo: `<div id="capa" style="position:absolute;left:0;top:0;width:3840px;height:2160px;background:#EDE6D6"></div>`, script: "E('capa').style.visibility=t<1?'visible':'hidden'" }), 1, ["partida-sem-vista"]],
    ["o corte seco, 0,8 s de vista, e a viagem", mapa({ dur: 4.4, camera: "return {center:[-118,46],zoom:6+2*eio((t-1.8)/2)}",
      corpo: `<div id="capa" style="position:absolute;left:0;top:0;width:3840px;height:2160px;background:#EDE6D6"></div>`, script: "E('capa').style.visibility=t<1?'visible':'hidden'" }), 0, []],
    ["a foto que encolhe sobre o mapa não é corte", mapa({ dur: 3.8, camera: "return {center:[-118,46],zoom:9-2*eio((t-1.1)/2.2)}",
      corpo: `<div id="foto" style="position:absolute;left:0;top:0;width:3840px;height:2160px;background:#7a7f86;transform-origin:2600px 700px"></div>`,
      script: "var k=1-0.85*eo((t-1)/0.6);E('foto').style.transform='scale('+k.toFixed(4)+')'" }), 0, []],
    ["a fusão de 0,5 s da foto para o mapa, com a viagem junto, não é corte (a troca da s61)", mapa({ dur: 3.8, camera: "return {center:[-118,46],zoom:7+1.5*eio((t-1)/2.2)}",
      corpo: `<div id="foto" style="position:absolute;left:0;top:0;width:3840px;height:2160px;background:#7a7f86"></div>`, script: "E('foto').style.opacity=(1-cl((t-1)/0.5)).toFixed(3)" }), 0, []],
    ["“·” no fim da linha (a quebra escrita, <br>)", dom({ dur: 2, corpo: `<div class="a pil" style="left:600px;top:600px">MEASURED AT BIRCHBANK ·<br>ALPHA POINT CALCULATION</div>` }), 1, ["ponto-na-quebra"]],
    ["“·” que a largura deixa no fim da linha", dom({ dur: 2, corpo: `<div class="a pil" style="left:600px;top:600px;white-space:normal;width:900px">2010 · 2011 · 2012 · 2017 · 2018 · 2020</div>` }), 1, ["ponto-na-quebra"]],
    ["“•” no começo da linha", dom({ dur: 2, corpo: `<div class="a pil" style="left:600px;top:600px">EVERY YEAR<br>• STARTING 2025</div>` }), 1, ["ponto-na-quebra"]],
    ["“·” no meio da linha: passa", dom({ dur: 2, corpo: `<div class="a pil" style="left:600px;top:600px">CBC NEWS · FEB. 17, 2025</div>` }), 0, []],
    ["campo em branco por 1 s (o cartão assentado esperando o cabeçalho)", dom({ dur: 3,
      corpo: `<div id="card" class="card" style="left:900px;top:500px;width:2000px;height:1100px"><div id="cab" style="position:absolute;left:80px;top:80px;opacity:0">CBC NEWS · FEB. 17, 2025</div></div>`,
      script: "E('card').style.transform='translateY('+(190*(1-eo(t/0.5))).toFixed(1)+'px)';E('cab').style.opacity=cl((t-1.5)/0.3)" }), 1, ["campo-em-branco"]],
    ["o cartão que ganha o texto 150 ms depois de assentar: passa", dom({ dur: 3,
      corpo: `<div id="card" class="card" style="left:900px;top:500px;width:2000px;height:1100px"><div id="cab" style="position:absolute;left:80px;top:80px;opacity:0">CBC NEWS · FEB. 17, 2025</div></div>`,
      script: "E('card').style.transform='translateY('+(190*(1-eo(t/0.5))).toFixed(1)+'px)';E('cab').style.opacity=cl((t-0.65)/0.3)" }), 0, []],
    ["a caixa que nunca ganha texto (a régua) não é campo", dom({ dur: 3, corpo: `<div class="card" style="left:900px;top:900px;width:2000px;height:120px"></div><div class="a" style="left:900px;top:400px">Ruler</div>` }), 0, []],
  ];
  const arquivos = casos.map(([nome, html], k) => { const f = path.join(dirA, String(k + 1).padStart(2, "0") + "-" + nome.normalize("NFD").replace(/[^a-z0-9]+/gi, "-").slice(0, 50) + ".html"); writeFileSync(f, html); return f; });
  const r = await rodar(arquivos);
  casos.forEach(([nome, , exp, expT], k) => {
    const l = r.linhas.find((x) => path.resolve(x.arquivo) === path.resolve(arquivos[k])) || {};
    const certo = l.veredito === exp && igual(tipos(l), expT);
    ok("A", nome, certo, `veredito ${l.veredito} (esperado ${exp}), tipos [${tipos(l)}] (esperado [${expT}])${l.itens?.length ? " · " + resumo(l.itens) : ""}${certo ? "" : " " + (l.motivo || r.stderr)}`);
  });
  // v2 (K7): o recuo rápido sai como aviso, com a medida
  { const k = casos.findIndex((c) => c[0].startsWith("recuo de 4 níveis")); const l = r.linhas.find((x) => path.resolve(x.arquivo) === path.resolve(arquivos[k])) || {};
    const av = (l.avisos || []).filter((a) => a.tipo === "recuo-brusco");
    ok("A", "o recuo de 6 níveis/s sai como aviso, com a medida acima de 4,75 (v2, K7)", av.length === 1 && av[0].v > 4.75, JSON.stringify(av.map((a) => [a.t, a.v]))); }
  // uma viagem é uma viagem: a de 1,8 s sai uma vez só, com a duração e a partida certas
  { const k = casos.findIndex((c) => c[0] === "viagem de 1,8 s"); const l = r.linhas.find((x) => path.resolve(x.arquivo) === path.resolve(arquivos[k])) || {};
    const v = l.viagens || [];
    ok("A", "a viagem de 1,8 s sai uma vez só, com 1,8 s e a partida em 1,0 s", v.length === 1 && Math.abs(v[0].duracao - 1.8) <= 0.03 && Math.abs(v[0].t0 - 1.0) <= 0.15, JSON.stringify(v.map((x) => [x.t0, x.t1, x.duracao, x.pico_zoom]))); }
  // o --aceitos: o mapa parado aceito pela Sala não reprova, e continua listado
  { const ac = path.join(dirA, "aceitos.json"); writeFileSync(ac, JSON.stringify([{ cena: path.basename(arquivos[0], ".html"), tipo: "mapa-parado", de: 0, ate: 3.5, porque: "teste" }]));
    const r2 = await rodar([arquivos[0]], [`--aceitos=${ac}`]); const l = r2.linhas[0] || {};
    ok("A", "o --aceitos tira da reprovação o desvio que a Sala aceitou (e o lista)", r2.exit === 0 && l.veredito === 0 && (l.itens || []).some((i) => i.aceito), `exit ${r2.exit}, itens ${resumo(l.itens || [])}`); }
  // os NÃO MEDIDO
  const nm = [
    ["cena sem __renderAt", dom({ dur: 2, corpo: pil("p", 600, 600, "Label"), semRender: true })],
    ["mapa que não assenta", mapa({ dur: 2, camera: C0, assenta: false })],
  ];
  const fn = nm.map(([nome, html]) => { const f = path.join(dirA, "nm-" + nome.normalize("NFD").replace(/[^a-z0-9]+/gi, "-") + ".html"); writeFileSync(f, html); return f; });
  const rn = await rodar(fn);
  nm.forEach(([nome], k) => { const l = rn.linhas.find((x) => path.resolve(x.arquivo) === path.resolve(fn[k])) || {}; ok("A", nome + ": NÃO MEDIDO", l.veredito === 2, l.motivo || rn.stderr); });
  ok("A", "a reprovação ganha do NÃO MEDIDO no código de saída", rn.exit === 2 && r.exit === 1, `exit das NÃO MEDIDO ${rn.exit}, das sintéticas ${r.exit}`);
}

// ───────────────────────────────────────── C e D. os achados do vídeo 7 ────
const R1 = "cae4248", R2 = "08393f7";   // a arte (13/11, 06:26), que a r1 viu (13/11, 10:5x); o lote de consertos (17/11, 00:11), que a r2 viu (17/11, 10:2x)
const CAMERA = ["recuo-brusco", "viagem-curta", "partida-sem-vista"];
const CASOS = [
  // [id, revisão, commit, cena, mantido, tipos do portão, janela [t0, t1], o achado]
  ["M1", "r1", R1, "s13", true, CAMERA, [15.4, 18.6], "o recuo do Columbia Lake: ~5 níveis/s, \"o movimento mais rápido da cena\""],
  ["M2", "r1", R1, "s19", true, ["ponto-na-quebra"], [8.8, 22.1], "“MEASURED AT BIRCHBANK ·” e “≈ 15% OF THE BASIN ·”"],
  ["M3", "r1", R1, "s36", true, ["mapa-parado"], [13.4, 22.3], "de 13,4 a 22,3 s nada entra, sai ou muda (a deriva de 1 px a cada 0,5 s no 1080p)"],
  ["M4", "r1", R1, "s37", true, ["ponto-na-quebra"], [18.5, 26.8], "“2010 · 2011 · 2012 ·” / “2017 · 2018 · 2020”"],
  ["M5", "r1", R1, "s45", true, ["campo-em-branco"], [0.6, 2.9], "o cartão da CBC pousado em branco até o cabeçalho, em 2,667 s"],
  ["M6", "r1", R1, "s48", true, ["mapa-parado"], [0, 4.5], "o mapa abre e nada se mexe até ~4,2 s (z + 0,004/s)"],
  ["M7", "r1", R1, "s55", true, ["mapa-parado"], [6.45, 10.8], "o cabo sem nome parado (o mesmo trecho do M8; o conserto é o mesmo)"],
  ["M8", "r1", R1, "s55", true, ["mapa-parado"], [6.45, 10.8], "o mapa parado e nada novo de 6,45 a ~10,8 s"],
  ["M9", "r1", R1, "s55", true, ["ponto-na-quebra"], [16.0, 18.8], "“EVERY YEAR ·”"],
  ["M10", "r1", R1, "s55", true, ["ponto-na-quebra"], [16.5, 18.8], "“UP FRONT ·”"],
  ["M11", "r2", R2, "s18", true, ["mapa-parado"], [15.2, 19.43], "o mapa de The Dalles parado depois do recuo (1,4 % em 4,2 s)"],
  ["M12", "r2", R2, "s19", true, ["mapa-parado"], [9.65, 14.7], "o mapa parado ~5 s (z + 0,0025/s)"],
  ["M13", "r2", R2, "s38", true, CAMERA, [3.85, 5.5], "o mergulho logo depois do corte da página para o mapa"],
  ["M14", "r2", R2, "s57", true, CAMERA, [3.1, 4.6], "a viagem de 1,3 s para Washington, a 0,05 s do corte"],
  ["D1", "r1", R1, "s02", false, CAMERA, [0.5, 5.0], "o vai e volta do gancho (~4 níveis/s, relevo 3D)"],
  ["D2", "r1", R1, "s07", false, CAMERA, [0, 1.6], "o mergulho do gancho (~5 níveis em 1,5 s)"],
  ["D3", "r1", R1, "s13", false, CAMERA, [3.8, 5.7], "o voo1 (~3,3 níveis/s)"],
  ["D4", "r1", R1, "s13", false, CAMERA, [37.7, 40.5], "o recuo da P4 (~3 níveis/s)"],
  ["D5", "r1", R1, "s13", false, CAMERA, [19.7, 22.4], "a fronteira que gira (o rumo de −20°)"],
  ["D6", "r1", R1, "s22", false, CAMERA, [3.6, 6.4], "o recuo de Portland ao Noroeste"],
  ["D7", "r1", R1, "s26", false, CAMERA, [8.7, 10.5], "o voo de Blaine (1,6 s)"],
  ["D8", "r1", R1, "s36", false, CAMERA, [0.3, 3.4], "a descida até The Dalles (3 s)"],
  ["D9", "r1", R1, "s38", false, CAMERA, [3.85, 5.5], "o mergulho de 1,5 s depois do papel (a r2 o manteve: M13)"],
  ["D10", "r1", R1, "s51", false, CAMERA, [16.6, 19.2], "o voo de 'Farther north'"],
  ["D11", "r1", R1, "s63", false, CAMERA, [7.7, 10.7], "o recuo de 2,8 s"],
  ["D12", "r2", R2, "s13", false, CAMERA, [3.8, 5.7], "o voo1"],
  ["D13", "r2", R2, "s13", false, CAMERA, [37.7, 40.5], "o recuo da P4"],
  ["D14", "r2", R2, "s26", false, CAMERA, [8.7, 10.5], "o voo de Peace Arch"],
  ["D15", "r2", R2, "s36", false, CAMERA, [0.3, 3.4], "a descida de abertura"],
  ["D16", "r1", R1, "s19", false, ["mapa-parado"], [9.5, 21.5], "o mapa quase parado de 9,5 a 21,5 s"],
  ["D17", "r1", R1, "s19", false, ["mapa-parado"], [24.0, 32.5], "o mapa de 24 a 32,5 s (0,7 %/s)"],
  ["D18", "r1", R1, "s26", false, ["mapa-parado"], [17.0, 19.7], "depois do Koocanusa (~1 %/s)"],
  ["D19", "r1", R1, "s35", false, ["mapa-parado", "campo-em-branco"], [0, 4.5], "imóvel e sem texto até 4,5 s"],
  ["D20", "r1", R1, "s36", false, ["mapa-parado"], [29.5, 35.9], "de 29,5 a 35,9 s nada novo"],
  ["D21", "r1", R1, "s46", false, ["mapa-parado"], [0, 5.4], "o mapa igual 5,4 s (desvio aceito: o enchimento sutil dos lagos)"],
  ["D22", "r1", R1, "s58", false, ["mapa-parado"], [16.0, 28.4], "a deriva lenta (desvio aceito)"],
  ["D23", "r2", R2, "s19", false, ["mapa-parado"], [24.0, 33.0], "o mapa quase parado até 33 s"],
  ["D24", "r2", R2, "s30", false, ["mapa-parado"], [28.5, 31.5], "o fecho com as cédulas"],
  ["D25", "r2", R2, "s46", false, ["mapa-parado"], [0, 5.5], "o mapa igual 5,5 s (desvio aceito)"],
  ["D26", "r2", R2, "s55", false, ["mapa-parado"], [6.5, 15.5], "o cabo parado (o ESP-12 consertado)"],
  ["D27", "r2", R2, "s55", false, ["mapa-parado"], [9.5, 13.0], "o mapa parado de 9,5 a 13 s (o ESP-13 consertado)"],
  ["D28", "r1", R1, "s42", false, ["campo-em-branco"], [0, 2.9], "as réguas sem rótulo nos primeiros 2,9 s"],
  ["D29", "r1", R1, "s61", false, CAMERA, [11.5, 13.4], "o recuo de 1,75 s na troca do par Landsat (a parte do mantido da s61 que caiu)"],
];
// os derrubados que o portão reprova, e o porquê (a prova confere que continuam assim; se mudarem, avisa)
const CONFLITOS = {
  D9: "as revisões se contradizem: o mesmo voo (7,1 níveis/s logo depois do corte, sem mudança entre a arte e o lote) foi derrubado na r1 e mantido na r2 (M13), e o conserto da r2 (o corte em 3,1 s) foi aplicado. O portão segue a r2",
  D16: "as revisões se contradizem: a r2 manteve o mesmo trecho (M12, de 9,7 a 14,7 s, a mesma câmera de +0,0025/s, 4 px/s) e o conserto foi aplicado. A r1 o derrubou pela régua dos 8 s de \"imagem parada de verdade\" do pedido do espectador, não pela dos 2 s do mapa (identidade §5)",
  D20: "o mesmo regime do M3 (a deriva de 4 px/s e o zoom de +0,002/s: 7 px/s no quadro 4K, medido nos dois trechos): a r1 manteve 13,4–22,3 (8,9 s) e derrubou 29,5–35,9 (7,2 s) pela régua dos 8 s, que ela mesma não usou na s48 (4,2 s) nem na s55 (4,3 s). Pela regra dos 2 s, os dois são o mesmo achado; o conserto do M3 (a aproximação de +0,025/s no P3) já levou a cena inteira",
};
// v2 (o cético, K7, e o Lucas, 18/11/2026: "Só aviso (Recomendado)"): o recuo rápido é só aviso (a marca não tem número para a velocidade da câmera; o M1,
// s13, 5,09, foi mantido, e o D29, s61, 6,25, derrubado). O M1 e o D29 conferem o aviso, não a reprovação: o que cada um espera na
// versão dos revisores (C) e na de hoje (D). O D29 saiu dos CONFLITOS: sem a régua, as revisões não se contradizem mais.
const SO_AVISO = {
  M1: { C: "aviso", D: "nada", porque: "o recuo da s13 a 5,09 níveis/s; o conserto (3,53) ficou abaixo do aviso" },
  D29: { C: "aviso", D: "aviso", porque: "o recuo da s61 a 6,25 níveis/s, derrubado como desvio declarado do editor; a cena de hoje é a mesma nesse trecho" },
};
// os desvios que a Sala aceitou na arte do vídeo 7 (out/rio-columbia/_tmp/sala/espectador-r1-pedido-cetico.md, "Desvios aceitos"), que viram o --aceitos
const ACEITOS = [
  { cena: "s46", tipo: "mapa-parado", de: 0, ate: 5.6, porque: "desvio aceito pela Sala na arte: o enchimento sutil dos lagos da s46 aos 3,7 s" },
  { cena: "s58", tipo: "mapa-parado", de: 15.9, ate: 28.5, porque: "desvio aceito pela Sala na arte: a deriva lenta da câmera na s58" },
];
const versao = (commit, cena, dir) => {
  const t = execFileSync("git", ["show", `${commit}:out/rio-columbia/graphics/${cena}.html`], { cwd: RAIZ, encoding: "utf8", maxBuffer: 64 << 20 });
  const m = t.match(/<head[^>]*>/i); const baseHref = pathToFileURL(path.join(RAIZ, "out", "rio-columbia", "graphics") + path.sep).href;
  const f = path.join(dir, commit, `${cena}.html`); mkdirSync(path.dirname(f), { recursive: true });
  writeFileSync(f, t.slice(0, m.index + m[0].length) + `<base href="${baseHref}">` + t.slice(m.index + m[0].length)); return f;
};
function julgarCaso([id, rev, , cena, mantido, ts, jan, achado], l, parte, hoje) {
  const its = naJanela(l, ts, jan), nome = `${id} (${rev}, ${cena}${hoje ? " de hoje" : ""}) ${mantido ? "mantido" : "derrubado"}: ${achado}`;
  if (l.veredito === 2 || !l.cena) return ok(parte, nome, false, `NÃO MEDIDO: ${l.motivo || "sem linha do portão"}`);
  if (SO_AVISO[id]) {   // v2 (K7): o recuo rápido é aviso
    const esp = SO_AVISO[id][parte], avs = (l.avisos || []).filter((a) => a.tipo === "recuo-brusco" && a.t >= jan[0] - 0.5 && a.t <= jan[1]);
    const certo = !its.length && (esp === "aviso" ? avs.length > 0 : !avs.length);
    return ok(parte, `${nome} — ${esp === "aviso" ? "só o aviso do recuo" : "nem aviso (o conserto valeu)"} (v2, K7)`, certo,
      `${its.length ? "REPROVOU: " + resumo(its) + "; " : ""}avisos de recuo na janela: ${avs.map((a) => `${a.v} níveis/s @${a.t}s`).join(", ") || "nenhum"} · ${SO_AVISO[id].porque}`);
  }
  const aceitos =(l.itens || []).filter((i) => i.aceito && ts.includes(i.tipo) && Math.min(i.t1, jan[1]) - Math.max(i.t0, jan[0]) > 0);
  if (hoje) {
    if (mantido) return ok(parte, nome + " — o conserto valeu", !its.length, its.length ? `ainda reprova: ${resumo(its)}` : `nada de [${ts}] em ${jan[0]}–${jan[1]} s`);
    if (CONFLITOS[id]) return ok(parte, nome + " — CONFLITO" + (its.length ? ", reprova hoje também" : ", passa hoje"), true, `${its.length ? resumo(its) : `nada de [${ts}] em ${jan[0]}–${jan[1]} s`} · ${CONFLITOS[id]}`);
    return ok(parte, nome + " — continua passando", !its.length, its.length ? `REPROVOU: ${resumo(its)}` : `nada de [${ts}] em ${jan[0]}–${jan[1]} s${aceitos.length ? " (aceito: " + resumo(aceitos) + ")" : ""}`);
  }
  if (mantido) return ok(parte, nome + " — reprova", its.length > 0, its.length ? resumo(its) : `NÃO PEGOU: tipos na cena [${tipos(l)}]; ${resumo(l.itens || []) || "nenhum item"}`);
  if (CONFLITOS[id]) return ok(parte, nome + " — CONFLITO, reprova", its.length > 0, `${resumo(its) || "passou (o conflito sumiu: reveja a lista)"} · ${CONFLITOS[id]}`);
  return ok(parte, nome + " — passa", !its.length, its.length ? `REPROVOU: ${resumo(its)}` : `nada de [${ts}] em ${jan[0]}–${jan[1]} s${aceitos.length ? " (aceito pela Sala: " + resumo(aceitos) + ")" : ""}`);
}

async function parteC() {
  const dirC = path.join(PASTA, "casos");
  const pares = [...new Set(CASOS.map((c) => c[2] + "|" + c[3]))].map((k) => k.split("|"));
  const arquivos = pares.map(([commit, cena]) => versao(commit, cena, dirC));
  const ac = path.join(PASTA, "aceitos-rio-columbia.json"); writeFileSync(ac, JSON.stringify(ACEITOS, null, 2));
  const r = await rodar(arquivos, [`--aceitos=${ac}`]);
  writeFileSync(path.join(PASTA, "saidas", "C-versoes-dos-revisores.jsonl"), r.linhas.map((l) => JSON.stringify(l)).join("\n") + "\n");
  for (const c of CASOS) {
    const f = path.resolve(path.join(dirC, c[2], `${c[3]}.html`));
    julgarCaso(c, r.linhas.find((x) => path.resolve(x.arquivo) === f) || {}, "C", false);
  }
  resultado.C_tempo = r.linhas.map((l) => ({ cena: l.cena, versao: path.basename(path.dirname(l.arquivo)), segundos: l.segundos, duracao: l.duracao, amostras: l.amostras }));
}

async function parteD() {
  const ac = path.join(PASTA, "aceitos-rio-columbia.json"); writeFileSync(ac, JSON.stringify(ACEITOS, null, 2));
  const r = await rodar([path.join(RAIZ, "out", "rio-columbia")], [`--aceitos=${ac}`]);
  writeFileSync(path.join(PASTA, "saidas", "D-cenas-de-hoje.jsonl"), r.linhas.map((l) => JSON.stringify(l)).join("\n") + "\n");
  ok("D", "as cenas de hoje medidas", r.linhas.length >= 50 && r.linhas.every((l) => l.veredito !== 2), `${r.linhas.length} linhas; NÃO MEDIDO: ${r.linhas.filter((l) => l.veredito === 2).map((l) => l.cena + " (" + l.motivo + ")").join(", ") || "nenhuma"}`);
  for (const c of CASOS) julgarCaso(c, r.linhas.find((x) => x.cena === c[3]) || {}, "D", true);
  resultado.achados_de_hoje = r.linhas.filter((l) => (l.itens || []).length || (l.avisos || []).length).map((l) => ({ cena: l.cena, veredito: l.veredito, itens: l.itens, avisos: l.avisos }));
  resultado.D_tempo = r.linhas.map((l) => ({ cena: l.cena, segundos: l.segundos, duracao: l.duracao, eh_mapa: l.eh_mapa }));
  resultado.D_viagens = r.linhas.flatMap((l) => (l.viagens || []).map((v) => ({ cena: l.cena, ...v })));
}

mkdirSync(path.join(PASTA, "saidas"), { recursive: true });
const tarefas = [];
if (PARTES.includes("A")) tarefas.push(parteA());
if (PARTES.includes("C")) tarefas.push(parteC());
if (PARTES.includes("D")) tarefas.push(parteD());
await Promise.all(tarefas);   // cada parte no seu Chrome, em paralelo
writeFileSync(path.join(PASTA, "resultado.json"), JSON.stringify({ ...resultado, erros }, null, 2));
console.log(`\nportao-movimento-provar: ${erros ? erros + " caso(s) ERRADO(S)" : "todos os casos certos"} · ${path.join(PASTA, "resultado.json")}`);
process.exit(erros ? 1 : 0);
