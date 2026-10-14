#!/usr/bin/env node
// portao-margens-provar.mjs — a prova do ferramentas/portao-margens.mjs, sem rede e sem MapTiler.
//
// Cinco partes, todas com o portão rodado como o editor e o mapista o rodam (node ferramentas/portao-margens.mjs …
// --json), conferindo o exit e o CONJUNTO dos lados reprovados:
//   A. sintéticas: cenas 4K mínimas, uma por regra, que passam e que reprovam (topo, laterais, faixa do crédito, fim do
//      crédito, canto reservado, a fita girada pelo canto, a câmera que leva o texto para fora no fim, a sombra, a
//      folha que entra de fora, a borda de papel na faixa, a caixa que agrupa os créditos, a pílula que entra
//      cruzando a margem, o recorte, o assentamento lento), os NÃO MEDIDO (sem __renderAt, cena vazia, mapa que não
//      assenta) e o aviso do crédito com palavra sozinha; e a régua da marca sem um token. Do cético (14/10/2026): o
//      papel de tela cheia que rola (o cabeçalho que sai pelo alto no rolo não conta; parado acima da margem, conta), a
//      câmera rápida que não isenta a pílula, a foto girada perto do canto (a envolvente entra, a foto não) e a que entra,
//      e a cena que pede tile de relevo (NÃO MEDIDO).
//   B. a rede presa: na página e num Worker, o tile da MapTiler é respondido aqui com a chave falsa, e o resto não sai.
//   C. as cenas do vídeo 2 que o qc-visual (ou a varredura do Claude central) reprovou por margem ou fita, NA VERSÃO
//      DE ENTÃO (git show <commit>:out/los-angeles/graphics/<id>.html, com um <base> para a mídia de hoje): têm de
//      reprovar, com o lado que o registro diz. As 10 de mapa também, sem tile.
//   D. as 48 cenas do vídeo 2 de hoje (as que o Lucas aprovou na linha do tempo): têm de passar, menos os achados
//      abertos listados abaixo, que têm de reprovar com exatamente aqueles lados (se mudarem, a prova avisa).
//   E. o mapa sem satélite contra o clipe 4K de verdade: em 5 cenas de mapa, a cada 1,5 s, a borda da pílula medida no
//      DOM (com os ladrilhos cinza daqui) tem de cair na borda escura da pílula no quadro do clipe (graphics/<id>.mp4, com
//      o carimbo 2160p e o sha1 do HTML de hoje): |desvio| mediano ≤ 3 px e máximo ≤ 6 px, onde o satélite em volta é
//      claro o bastante para ver a borda. Prova que a câmera sem satélite é a do render.
//
// Uso (cwd na raiz do canal): node ferramentas/portao-margens-provar.mjs [--pasta=<dir>] [--so=A,B,C,D,E]
//   --pasta  onde montar as cenas e gravar resultado.json (padrão: out/_tmp/portao-margens-teste/, fora do git).
// Saída: 0 = tudo certo · 1 = algum caso errado · 2 = não rodou. Nada do vídeo de verdade é tocado.
import { writeFileSync, existsSync, mkdirSync, rmSync, readFileSync } from "node:fs";
import { spawnSync, execFileSync } from "node:child_process";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

process.env.REGIE_MOTOR ||= "C:/projetos/regie-v1";
const RAIZ = process.cwd();
const AQUI = path.dirname(fileURLToPath(import.meta.url));
const PORTAO = path.join(AQUI, "portao-margens.mjs");
for (const f of [PORTAO, path.join(RAIZ, "scripts", "lib", "chrome.mjs"), path.join(RAIZ, "marca", "tokens.css")])
  if (!existsSync(f)) { console.error(`NÃO RODOU — falta ${f} (rode da raiz do canal)`); process.exit(2); }
const argv = process.argv.slice(2);
const opt = (n) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
const PASTA = path.resolve(opt("pasta") || path.join(RAIZ, "out", "_tmp", "portao-margens-teste"));
const PARTES = (opt("so") || "A,B,C,D,E").split(",");
mkdirSync(PASTA, { recursive: true });
if (!opt("pasta")) writeFileSync(path.join(PASTA, ".gitignore"), "*\n");
const M = await import(pathToFileURL(PORTAO).href);

const resultado = { quando: new Date().toISOString(), portao_sha256: createHash("sha256").update(readFileSync(PORTAO)).digest("hex"), partes: {} };
let erros = 0;
const ok = (parte, nome, certo, detalhe) => {
  (resultado.partes[parte] ||= []).push({ nome, certo, detalhe });
  if (!certo) erros++;
  console.log(`${certo ? "certo" : "ERRADO"}  ${parte} · ${nome}${detalhe ? " — " + detalhe : ""}`);
};
const rodar = (alvos, extra = []) => {
  const r = spawnSync(process.execPath, [PORTAO, ...alvos, "--json", "--sem-registro", ...extra], { cwd: RAIZ, encoding: "utf8", maxBuffer: 64 << 20 });
  const linhas = (r.stdout || "").split("\n").filter((l) => l.startsWith("{")).map((l) => JSON.parse(l));
  return { exit: r.status, linhas, stderr: (r.stderr || "").slice(0, 400) };
};
const lados = (l) => [...new Set((l.itens || []).map((i) => i.lado))].sort();
const igual = (a, b) => JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());

// ───────────────────────────────────────────────────────────────── A. as sintéticas ────
if (PARTES.includes("A")) {
  const dirA = path.join(PASTA, "sinteticas"); rmSync(dirA, { recursive: true, force: true }); mkdirSync(dirA, { recursive: true });
  const cena = ({ corpo, script = "", dur = 2, cab = "", fim = "" }) => `<!doctype html><html lang="en-US" data-render="4k-native"><head><meta charset="utf-8">${cab}<style>
html,body{margin:0;width:3840px;height:2160px;overflow:hidden;background:#0E1726;font:500 84px/1.2 sans-serif;color:#F4F1EA}
.a{position:absolute;white-space:nowrap}.pil{background:rgba(11,15,20,.88);padding:24px 40px}
.papel{position:absolute;background:#EDE6D6;color:#14181F}
</style></head><body><div id="cam" class="a" style="left:0;top:0;width:3840px;height:2160px;transform-origin:1920px 1080px">${corpo}</div>
<script>var E=function(i){return document.getElementById(i)};var ease=function(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3)};
window.__duracao=${dur};window.__renderAt=function(t){${script}};${fim}</script></body></html>`;
  const base = `<div class="a" style="left:400px;top:400px">Inside text</div><div class="a pil" style="left:2600px;top:900px">Label</div>
<div class="a" data-qc-papel="credito" style="left:200px;top:1960px;font-size:56px">Source: test credit</div>`;
  const casos = [
    ["base: texto, pílula e crédito dentro", { corpo: base }, 0, []],
    ["texto a 150 do topo", { corpo: base + `<div class="a" style="left:900px;top:150px">Top</div>` }, 1, ["topo"]],
    ["pílula até x 3660", { corpo: base + `<div class="a pil" style="left:3420px;top:900px;width:160px">X</div>` }, 1, ["direita"]],
    ["rótulo na faixa do crédito", { corpo: base + `<div class="a" style="left:900px;top:1830px">Low</div>` }, 1, ["faixa-do-credito"]],
    ["crédito que passa de x 1720", { corpo: base + `<div class="a" data-qc-papel="credito" style="left:200px;top:2040px;font-size:56px">Source: an extremely long credit line that never breaks and runs past the limit</div>` }, 1, ["fim-do-credito"]],
    ["crédito que começa em x 150", { corpo: base + `<div class="a" data-qc-papel="credito" style="left:150px;top:2040px;font-size:56px">Source: B</div>` }, 1, ["esquerda"]],
    ["fita girada: o canto passa do topo (sem giro, ficaria em 175)", { corpo: base + `<div class="a fita" style="left:1500px;top:175px;width:440px;height:140px;background:rgba(240,230,210,.6);transform:rotate(-8deg)"></div>` }, 1, ["topo"]],
    ["fita sem giro a 175 do topo", { corpo: base + `<div class="a fita" style="left:1500px;top:175px;width:440px;height:140px;background:rgba(240,230,210,.6)"></div>` }, 0, []],
    ["caixa no canto reservado", { corpo: base + `<div class="a" style="left:3450px;top:1770px;width:180px;height:100px;background:#F4F1EA"></div>` }, 1, ["canto"]],
    ["a câmera leva o texto para fora da margem no fim", { corpo: base + `<div class="a" style="left:260px;top:600px">Edge</div>`, script: "E('cam').style.transform='scale('+(1+0.04*t/2)+')'" }, 1, ["esquerda"]],
    ["sombra fora da margem não conta", { corpo: base + `<div class="a sombra-solta" style="left:100px;top:100px;width:600px;height:400px;background:rgba(0,0,0,.4)"></div>` }, 0, []],
    ["folha que entra de fora do quadro (passagem)", { corpo: base + `<div id="f" class="papel" style="left:900px;width:1600px;height:900px"><div style="padding:60px">Document text</div></div>`, script: "E('f').style.top=(-1300+1600*ease(t/0.5))+'px'" }, 0, []],
    ["folha parada a 120 do topo", { corpo: base + `<div class="papel" style="left:900px;top:120px;width:1600px;height:900px"><div style="padding:60px">Document text</div></div>` }, 1, ["topo"]],
    ["borda de papel sem texto na faixa", { corpo: base + `<div class="papel" style="left:2200px;top:600px;width:1300px;height:1350px"><div style="padding:60px">Document text</div></div>` }, 0, []],
    ["texto do papel na faixa", { corpo: base + `<div class="papel" style="left:2200px;top:600px;width:1300px;height:1350px"><div style="position:absolute;left:60px;top:1210px">Last line</div></div>` }, 1, ["faixa-do-credito"]],
    ["caixa que só agrupa os créditos", { corpo: `<div class="a" style="left:400px;top:400px">Inside</div><div id="creds" class="a" style="left:200px;top:1900px;width:1500px;height:240px;background:rgba(11,15,20,.88)"><div data-qc-papel="credito" style="margin:20px;font-size:56px">Source: A</div></div>` }, 0, []],
    ["pílula que entra cruzando a margem (pílula nunca é passagem)", { corpo: base + `<div id="p" class="a pil" style="top:1200px">Slide</div>`, script: "E('p').style.left=(3900-500*ease(t/0.4))+'px'" }, 1, ["direita"]],
    ["texto recortado pelo container (o que não aparece não conta)", { corpo: base + `<div class="a" style="left:400px;top:1000px;width:1000px;height:200px;overflow:hidden"><div style="position:absolute;left:-300px;top:0">Clipped long text here</div></div>` }, 0, []],
    ["folha que entra e assenta devagar acima da margem", { corpo: base + `<div id="f" class="papel" style="left:900px;width:1600px;height:900px"><div style="padding:60px">Document text</div></div>`, script: "E('f').style.top=(t<0.5?(-1300+1470*ease(t/0.5)):(170-20*Math.min(1,(t-0.5)/1)))+'px'" }, 1, ["topo"]],
    // cético, 14/10/2026: o papel mais alto que o quadro (o documento que rola, a s19 do Juneau) entra na passagem
    ["folha de tela cheia que rola: o cabeçalho que sai pelo alto durante o rolo não conta", { corpo: base + `<div id="f" class="papel" style="left:400px;top:300px;width:3000px;height:2600px"><div style="position:absolute;left:60px;top:60px">HEADER</div><div style="position:absolute;left:60px;top:1100px">Body text</div></div>`, script: "E('f').style.top=(300-1200*Math.min(1,Math.max(0,t-0.5)))+'px'" }, 0, []],
    ["folha de tela cheia que rola e para com o cabeçalho a 100 do topo", { corpo: base + `<div id="f" class="papel" style="left:400px;top:300px;width:3000px;height:2600px"><div style="position:absolute;left:60px;top:60px">HEADER</div></div>`, script: "E('f').style.top=(300-260*Math.min(1,Math.max(0,(t-0.5)/0.5)))+'px'" }, 1, ["topo"]],
    // cético, 14/10/2026: o canto é um teste em duas dimensões; a envolvente da foto girada entra nele sem a foto entrar (a s04 do Juneau)
    ["foto girada perto do canto: a envolvente entra no canto, a foto não", { corpo: base + `<div class="a" style="left:2237.4px;top:939.2px;width:1200px;height:800px;background:#F4F1EA;transform:rotate(5deg)"></div>` }, 0, []],
    ["foto girada cujo canto entra no canto reservado", { corpo: base + `<div class="a" style="left:2297.4px;top:979.2px;width:1200px;height:800px;background:#F4F1EA;transform:rotate(5deg)"></div>` }, 1, ["canto"]],
    ["a câmera rápida não isenta a pílula (o #cam com um canvas não é objeto de passagem)", { corpo: base + `<canvas width="10" height="10" class="a" style="left:1900px;top:1000px"></canvas><div class="a pil" style="left:320px;top:1000px">Pill</div>`, script: "var k=Math.sin(Math.PI*Math.min(1,t));E('cam').style.transform='scale('+(1+0.15*k)+')'" }, 1, ["esquerda"]],
  ];
  for (const [nome, c, exp, expLados] of casos) {
    const f = path.join(dirA, nome.replace(/[^a-z0-9]+/gi, "-").slice(0, 60) + ".html"); writeFileSync(f, cena(c));
    const r = rodar([f]); const l = r.linhas[0] || {};
    const certo = r.exit === exp && igual(lados(l), expLados);
    ok("A", nome, certo, `exit ${r.exit} (esperado ${exp}), lados [${lados(l)}] (esperado [${expLados}])${certo ? "" : " " + (l.motivo || r.stderr)}`);
  }
  // os NÃO MEDIDO
  const nm = [
    ["cena sem __renderAt", cena({ corpo: base }).replace(/window\.__renderAt=[^;]*\};/, "")],
    ["cena vazia (só a base de tela cheia)", cena({ corpo: `<div class="a" style="left:0;top:0;width:3840px;height:2160px;background:#223"></div>` })],
    ["mapa que não assenta", cena({ corpo: base, fim: "/* maplibre */ window.__aguardarMapa=function(){return new Promise(function(){})};" })],
    // cético, 14/10/2026: com relevo 3D o map.project() depende da altitude, e o relevo daqui é plano: não se certifica
    ["cena que pede tile de relevo (terrain-rgb): NÃO MEDIDO", cena({ corpo: base + `<img src="https://api.maptiler.com/tiles/terrain-rgb-v2/1/1/1.webp?key=x" style="position:absolute;left:900px;top:900px;width:20px;height:20px">` })],
  ];
  for (const [nome, html] of nm) {
    const f = path.join(dirA, nome.replace(/[^a-z0-9]+/gi, "-") + ".html"); writeFileSync(f, html);
    const r = rodar([f]); const l = r.linhas[0] || {};
    ok("A", nome, r.exit === 2 && l.veredito === 2, `exit ${r.exit}, ${l.motivo || r.stderr}`);
  }
  // o aviso do crédito
  { const f = path.join(dirA, "aviso.html");
    writeFileSync(f, cena({ corpo: `<div class="a" style="left:400px;top:400px">Inside</div><div class="a" data-qc-papel="credito" style="left:200px;top:1950px;font-size:56px">Source: Annual Report, U.S. Army,<br>1888</div>` }));
    const r = rodar([f]); const l = r.linhas[0] || {};
    ok("A", "crédito com o ano sozinho na 2ª linha: aviso, sem reprovar", r.exit === 0 && (l.avisos || []).some((a) => a.tipo === "credito-palavra-sozinha" && a.palavra === "1888"), `exit ${r.exit}, avisos ${JSON.stringify((l.avisos || []).map((a) => a.tipo + ":" + (a.palavra || "")))}`); }
  // a régua da marca
  { const css = readFileSync(path.join(RAIZ, "marca", "tokens.css"), "utf8");
    const a = M.limitesDaMarca(css), b = M.limitesDaMarca(css.replace(/--safe-x\s*:[^;]*;/, ""));
    ok("A", "a régua vem do tokens.css (e falta de token é NÃO MEDIDO)", !a.faltam.length && a.L.SX === 200 && a.L.SY === 160 && a.L.FY === 1880 && a.L.CXF === 1720 && a.L.CANTO === 400 && igual(b.faltam, ["SX"]), JSON.stringify(a.L)); }
}

// ───────────────────────────────────────────────────────────────── B. a rede presa ────
if (PARTES.includes("B")) {
  const { lancarChrome } = await import(pathToFileURL(path.join(RAIZ, "scripts", "lib", "chrome.mjs")).href);
  const b = await lancarChrome({ chromiumSandbox: false, args: ["--host-resolver-rules=MAP * ~NOTFOUND"] });
  try {
    const ctx = await b.newContext(); const rede = { respondidos: 0, cortados: 0, urls: new Set() };
    await M.prenderRede(ctx, await M.ladrilhos(), rede);
    const f = path.join(PASTA, "rede.html");
    writeFileSync(f, `<!doctype html><meta charset="utf-8"><script>
window.__r = (async () => {
  const t = async (u) => { try { const r = await fetch(u); return r.status + ":" + (await r.arrayBuffer()).byteLength; } catch (e) { return "falhou"; } };
  const w = await new Promise((res) => { const wk = new Worker(URL.createObjectURL(new Blob(["fetch('https://example.com/').then(r=>postMessage('chegou '+r.status),()=>postMessage('falhou'))"]))); wk.onmessage = (e) => res(e.data); setTimeout(() => res("sem resposta"), 15000); });
  return { chave: (window.__chaves || {}).MAPTILER_KEY, tile: await t("https://api.maptiler.com/tiles/satellite-v2/12/700/1600.jpg?key=" + (window.__chaves || {}).MAPTILER_KEY), outro: await t("https://example.com/"), worker: w };
})();</script>`);
    const p = await ctx.newPage(); await p.goto(pathToFileURL(f).href); const r = await p.evaluate(() => window.__r);
    ok("B", "a chave da página é a falsa", r.chave === M.CHAVE_FALSA, r.chave);
    ok("B", "o tile de satélite é respondido aqui (200, ladrilho cinza)", /^200:\d+$/.test(r.tile) && rede.respondidos === 1, `${r.tile}; respondidos ${rede.respondidos}`);
    ok("B", "outro endereço não sai (na página)", r.outro === "falhou" && rede.cortados >= 1, `${r.outro}; cortados ${rede.cortados}`);
    ok("B", "outro endereço não sai (num Worker)", r.worker !== "sem resposta" && !/^chegou/.test(r.worker), r.worker);
    await ctx.close();
  } finally { await b.close(); }
}

// ───────────────────────────────────────── C. as reprovadas do vídeo 2, na versão de então ────
const REPROVADAS = [
  // [commit da versão julgada, cena, lados esperados (regex por item), o registro]
  ["c71a9ad", "s28", ["topo"], "Q2 (07/10, 23:3x): fita a y≈93 (_decisoes-central.md, Q2 item 2)"],
  ["c71a9ad", "s38", ["esquerda"], "Q2: fita a x≈106 e borda de folha a x≈178 (Q2 item 2)"],
  ["4dfd6df", "s15", ["topo", "direita"], "Q6 (08/10, 00:4x): fita a 129 do topo; a cota até x 3699 (Q6 itens 1 e 7)"],
  ["4dfd6df", "s20", ["topo"], "Q6: fita a 144 (item 1)"],
  ["4dfd6df", "s22", ["topo"], "Q6: fita a 128 (item 1)"],
  ["4dfd6df", "s27", ["topo"], "Q6: fita a 142 (item 1)"],
  ["4dfd6df", "s35", ["topo", "esquerda"], "Q6: fita a 145 do topo e a 189 da esquerda (item 1)"],
  ["4dfd6df", "s39", ["topo"], "Q6: fita a 136–140 (item 1)"],
  ["4dfd6df", "s13", ["fim-do-credito"], "Q6: o crédito numa linha só, até x 1792 (item 2)"],
  ["9f8aaef", "s11", ["direita"], "varredura do Claude central (08/10, medida 01:39–01:47, decisão 03:0x): “JULY 1871” 1 px além da direita"],
  ["9f8aaef", "s47", ["esquerda", "direita"], "varredura: “ABOUT 15,000 FT” a 197, “1912” a 3642"],
  ["3816a6f", "s38", ["faixa-do-credito"], "varredura: a última linha da folha C e o grifo do “203” na faixa (1919, 1898)"],
  ["a89cdf0", "s21", ["esquerda|direita"], "Q4 (mapa): a borda do cartão 14 px dentro da margem de 200 (Q4 item 5)"],
  ["a89cdf0", "s23", ["esquerda|direita", "faixa-do-credito"], "Q4 (mapa): o cartão de Morgan 3–9 px dentro da margem e 14 px abaixo de 1880 (item 5)"],
  ["44e1713", "s07", ["esquerda|direita"], "Q9 (mapa): a pílula “Wilmington estuary” a 176–178 px da borda (Q9 item 2)"],
  ["44e1713", "s14", ["esquerda|direita"], "Q9 (mapa): a pílula do estuário a 176–178 px; o cartão em x 3658 no assentamento (itens 2 e 3)"],
  ["a89cdf0", "s26", ["topo"], "varredura (mapa): a pílula “Los Angeles” acima do topo (19)"],
  ["a89cdf0", "s29", ["faixa-do-credito"], "varredura (mapa): rótulo cortado embaixo (2239) e legenda na faixa (1929)"],
  ["a89cdf0", "s33", ["faixa-do-credito", "direita", "topo"], "varredura (mapa): foto e “San Pedro” na faixa, “DECEMBER 1905” além da direita, “Los Angeles” cortado em cima"],
  ["a89cdf0", "s37", ["faixa-do-credito"], "varredura (mapa): a pílula “San Pedro” na faixa (1923)"],
  ["eb3a6b1", "s44", ["topo"], "varredura (mapa): rótulo e pílula cortados em cima (−111, −117)"],
  ["34e3569", "s10", ["esquerda|direita"], "varredura (mapa): a pílula do estuário a 179"],
];
const versao = (commit, cena, dir) => {
  const t = execFileSync("git", ["show", `${commit}:out/los-angeles/graphics/${cena}.html`], { cwd: RAIZ, encoding: "utf8", maxBuffer: 64 << 20 });
  const m = t.match(/<head[^>]*>/i); const baseHref = pathToFileURL(path.join(RAIZ, "out", "los-angeles", "graphics") + path.sep).href;
  const f = path.join(dir, commit, `${cena}.html`); mkdirSync(path.dirname(f), { recursive: true });
  writeFileSync(f, t.slice(0, m.index + m[0].length) + `<base href="${baseHref}">` + t.slice(m.index + m[0].length)); return f;
};
if (PARTES.includes("C")) {
  const dirC = path.join(PASTA, "versoes");
  for (const [commit, cena, esperados, registro] of REPROVADAS) {
    let f; try { f = versao(commit, cena, dirC); } catch (e) { ok("C", `${cena}@${commit}`, false, "git show falhou: " + String(e.message).slice(0, 120)); continue; }
    const r = rodar([f]); const l = r.linhas[0] || {}; const ls = lados(l);
    const faltam = esperados.filter((re) => !ls.some((x) => new RegExp(`^(${re})$`).test(x)));
    const certo = r.exit === 1 && !faltam.length;
    const itens = (l.itens || []).map((i) => `${i.lado} ${i.v} ${i.k} ${i.nome}${i.s ? ` “${i.s.slice(0, 24)}”` : ""} @${i.t}s`).join("; ");
    ok("C", `${cena}@${commit} reprova — ${registro}`, certo, `exit ${r.exit}${l.eh_mapa ? ", mapa sem satélite, " + (l.rede?.respondidos ?? "?") + " pedidos respondidos aqui" : ""}; ${itens || l.motivo || r.stderr}${faltam.length ? `; FALTOU: ${faltam}` : ""}`);
  }
}

// ───────────────────────────────────────────────────── D. as 48 cenas aprovadas de hoje ────
// Achado aberto: medida que a ferramenta faz e que não está em exceção nenhuma. Vai à Sala, que decide (conserto ou
// exceção). A prova confere que ele continua exatamente assim; se sumir ou crescer, avisa.
const ACHADOS_ABERTOS = {
  s35: { lados: ["faixa-do-credito"], porque: "dois grifos da p. 97 (div.grifo) 1–5 px abaixo de y 1880 de 10,1 a 13,4 s; a varredura de 08/10 contou o grifo do “203” da s38 na faixa como defeito, e o Q8 sinalizou este" },
  s29: { lados: ["canto"], porque: "a pílula “Santa Catalina Island” (#rotCat) entra 26–37 px no canto de 400 × 400 em 3,0 s, levada pela câmera, e só esmaece em 3,1 s (opacidade 1,00 → 0,35): uns 3 quadros; a regra do rótulo que esmaece antes de cruzar (03:0x, item 1)" },
};
if (PARTES.includes("D")) {
  const r = rodar([path.join(RAIZ, "out", "los-angeles")]);
  const todas = r.linhas;
  ok("D", "as 48 cenas medidas", todas.length === 48 && todas.every((l) => l.veredito !== 2), `${todas.length} linhas; NÃO MEDIDO: ${todas.filter((l) => l.veredito === 2).map((l) => l.cena + " (" + l.motivo + ")").join(", ") || "nenhuma"}`);
  for (const l of todas) {
    const ab = ACHADOS_ABERTOS[l.cena];
    if (ab) { ok("D", `${l.cena}: achado aberto, vai à Sala`, l.veredito === 1 && igual(lados(l), ab.lados), `${(l.itens || []).map((i) => `${i.lado} ${i.v} ${i.nome} @${i.t0}–${i.t1}s`).join("; ")} · ${ab.porque}`); continue; }
    ok("D", `${l.cena} passa`, l.veredito === 0, l.veredito === 0 ? `${l.medidos} itens, ${l.amostras} amostras${l.eh_mapa ? `, mapa sem satélite (${l.rede.respondidos} pedidos respondidos aqui, ${l.rede.cortados} cortados)` : ""}` : `${(l.itens || []).map((i) => `${i.lado} ${i.v} ${i.nome} @${i.t}s`).join("; ") || l.motivo}`);
  }
  resultado.avisos_de_hoje = todas.flatMap((l) => (l.avisos || []).map((a) => ({ cena: l.cena, ...a })));
}

// ──────────────────────────────────────── E. o mapa sem satélite contra o clipe 4K de verdade ────
if (PARTES.includes("E")) {
  const { lancarChrome } = await import(pathToFileURL(path.join(RAIZ, "scripts", "lib", "chrome.mjs")).href);
  const { abrirCenaParaMedir } = await import(pathToFileURL(path.join(RAIZ, "scripts", "lib", "abrir-cena.mjs")).href);
  const b = await lancarChrome({ chromiumSandbox: false, args: ["--host-resolver-rules=MAP * ~NOTFOUND"] });
  const L0 = await M.ladrilhos();
  const ALVOS = ["s07", "s14", "s21", "s26", "s33"];
  try {
    for (const cena of ALVOS) {
      const html = path.join(RAIZ, "out", "los-angeles", "graphics", `${cena}.html`), mp4 = html.replace(/\.html$/, ".mp4");
      const carimbo = existsSync(mp4 + ".de-html") ? readFileSync(mp4 + ".de-html", "utf8").trim().split(/\s+/) : [];
      const sha1 = createHash("sha1").update(readFileSync(html)).digest("hex");
      if (carimbo[0] !== sha1 || carimbo[1] !== "2160p") { ok("E", `${cena}: clipe de hoje`, false, `o carimbo do clipe (${carimbo.join(" ")}) não é o do HTML de hoje (${sha1}) em 2160p`); continue; }
      const ctx = await b.newContext({ viewport: { width: 3840, height: 2160 } }); await M.prenderRede(ctx, L0, { respondidos: 0, cortados: 0, urls: new Set() });
      const p = await ctx.newPage(); await abrirCenaParaMedir(p, html);
      const dur = await p.evaluate(() => window.__duracao);
      const desvios = [];
      for (let t0 = 1; t0 < dur - 0.5; t0 += 1.5) {
        const t = Math.round(t0 * 30) / 30;   // um quadro do render (30 fps)
        await p.evaluate(async (t) => { await window.__renderAt(t); if (window.__aguardarMapa) await Promise.race([window.__aguardarMapa(), new Promise((r) => setTimeout(r, 8000))]); }, t);
        const c = await p.evaluate(M.coletar, { W: 3840, H: 2160, OP: 0.95 });
        const pilulas = c.itens.filter((i) => i.k === "caixa" && !i.cred && i.b && i.b.x > 60 && i.b.x2 < 3780 && i.b.y > 60 && i.b.y2 < 2100 && i.b.x2 - i.b.x > 120 && i.b.y2 - i.b.y > 80 && i.b.y2 - i.b.y < 400);
        if (!pilulas.length) continue;
        const raw = execFileSync("ffmpeg", ["-v", "error", "-ss", t.toFixed(4), "-i", mp4, "-frames:v", "1", "-f", "rawvideo", "-pix_fmt", "rgb24", "pipe:1"], { maxBuffer: 3840 * 2160 * 3 + 1024 });
        const lum = (x, y) => { const k = (Math.round(y) * 3840 + Math.round(x)) * 3; return 0.2126 * raw[k] + 0.7152 * raw[k + 1] + 0.0722 * raw[k + 2]; };
        for (const pi of pilulas) {
          // as 4 bordas: onde o escuro da pílula (luma < 45) acaba, numa linha que corta a borda no respiro (fora do texto);
          // só conta a borda cujo lado de fora é claro (o satélite claro, luma ≥ 55 nos 10 pontos de fora)
          const ym = (pi.b.y + pi.b.y2) / 2, xr = pi.b.x + 20;
          const bordas = [["esq", pi.b.x, -1, "x", ym], ["dir", pi.b.x2, 1, "x", ym], ["topo", pi.b.y, -1, "y", xr], ["base", pi.b.y2, 1, "y", xr]];
          for (const [lado, dom, passo, eixo, fixo] of bordas) {
            const L = (v) => eixo === "x" ? lum(v, fixo) : lum(fixo, v);
            const fora = [...Array(10)].map((_, i) => L(dom + passo * (12 + i * 3))); if (Math.min(...fora) < 55) continue;
            let v = dom - passo * 20, achou = null;
            for (let k = 0; k < 40; k++, v += passo) if (L(v) >= 45 && L(v - passo) < 45) { achou = passo > 0 ? v : v + 1; break; }
            if (achou != null) desvios.push({ t, nome: pi.nome, lado, dom: Math.round(dom), clipe: achou, d: +(achou - dom).toFixed(1) });
          }
        }
      }
      await ctx.close();
      const ds = desvios.map((d) => Math.abs(d.d)).sort((a, b) => a - b), med = ds.length ? ds[Math.floor(ds.length / 2)] : null;
      ok("E", `${cena}: a borda da pílula no DOM sem satélite cai na do clipe 4K`, ds.length >= 3 && med <= 3 && ds[ds.length - 1] <= 6, `${ds.length} bordas comparadas, |desvio| mediano ${med} px, máximo ${ds.length ? ds[ds.length - 1].toFixed(1) : "-"} px`);
      resultado[`E_${cena}`] = desvios;
    }
  } finally { await b.close(); }
}

writeFileSync(path.join(PASTA, "resultado.json"), JSON.stringify({ ...resultado, erros }, null, 2));
console.log(`\nportao-margens-provar: ${erros ? erros + " caso(s) ERRADO(S)" : "todos os casos certos"} · ${path.join(PASTA, "resultado.json")}`);
process.exit(erros ? 1 : 0);
