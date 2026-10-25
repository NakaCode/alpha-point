#!/usr/bin/env node
// roteiro-motor-provar.mjs — a prova do ferramentas/roteiro-motor.mjs (a porta do roteiro para o motor sem rosto), sem rede.
//
//   node ferramentas/roteiro-motor-provar.mjs --rascunho=<pasta> (--clone=<clone do top10-estudio> [--commit=6253755] | --motor=<pasta>)
//   (cwd = raiz do canal)
//
// Tudo se grava numa pasta nova, <rascunho>/roteiro-motor-prova-<AAAAMMDDThhmmssZ>/; nada em roteiros/, estudio/, no motor
// nem no clone. A prova confere, no começo e no fim, o sha256 de todo arquivo de roteiros/peru-agua/ e roteiros/zona-do-canal/,
// e que nenhuma pasta motor/ nasceu ali.
//   --clone: exporta do clone, só com "git show <commit>:<arquivo>" (sem checkout), o scripts/sem-rosto/portao.mjs e tudo que
//     ele importa (o fecho dos imports relativos; o roteiro.mjs está nele), para <pasta da rodada>/motor/, com um ORIGEM.json
//     (o commit inteiro e o sha256 de cada arquivo). Recusa o fecho que importe pacote do npm.
//   --motor: usa uma pasta já exportada (com scripts/sem-rosto/roteiro.mjs; o portão de verdade só roda se o portao.mjs e o
//     fecho dele estiverem lá).
//   Sem os dois, roda o resto e sai 2, com a concordância com o motor NÃO MEDIDA.
//
// O QUE SE CONFERE (cada caso roda a ferramenta pela linha de comando, com --json):
//   1. conferir: para cada regra (as do motor, réplica de roteiro.mjs, e as da Sala, requisitos §5), um caso que passa e
//      um que reprova, com o exit e o CONJUNTO EXATO das regras dos problemas (nem a menos, nem a mais); os avisos onde o
//      caso é deles; casos de borda que só pedem que a réplica e o motor concordem (BOM, CRLF, "#1", "##" sozinho, sete #,
//      comentário no meio da linha…). Em todo caso com o motor, ele tem de concordar com a réplica.
//   2. a concordância não é de enfeite: um motor falso que aceita tudo, e um que lê diferente, dão "motor:discorda"; um que
//      quebra com erro que não é de roteiro dá 2.
//   3. converter, num canal de mentira (--raiz): o caso que passa (o texto exato do resultado, os sha do .json), a cópia
//      para a voz (o texto exato), e um mutante por regra da conversão, que sai 1 sem gravar nada.
//   4. as conversões reais do Peru e da Zona do Canal, das duas fontes (narrador e voz), no rascunho: saem 0; o sha da
//      fonte e o do resultado batem com o disco; a revisão é a que o gate.mjs do vídeo dá; e o PORTÃO DE VERDADE do motor
//      (novaObra + aprovar "roteiro", importados do motor exportado, numa obra de rascunho com um canal de mentira) aceita o
//      arquivo e congela os mesmos bytes. Um arquivo que reprova, o portão recusa com a mesma mensagem da réplica.
//   5. o uso errado sai 2.
// Saída: 0 = todos certos · 1 = algum errado · 2 = não rodou (ou a concordância com o motor não foi medida).
// Grava <pasta da rodada>/resultado.json.
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, posix, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const RAIZ = process.cwd();
const FERRAMENTA = join(RAIZ, "ferramentas", "roteiro-motor.mjs");
const VIDEOS = ["peru-agua", "zona-do-canal"];
if (!existsSync(FERRAMENTA) || !VIDEOS.every((v) => existsSync(join(RAIZ, "roteiros", v, "roteiro-narrador.md")))) {
  console.error("NÃO RODOU: rode da raiz do canal (falta ferramentas/roteiro-motor.mjs ou um roteiro-narrador.md)"); process.exit(2);
}
const opc = (n) => process.argv.slice(2).find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3) ?? null;
for (const a of process.argv.slice(2)) if (!/^--(rascunho|clone|commit|motor)=/.test(a)) { console.error(`opção desconhecida: ${a}`); process.exit(2); }
const sha = (b) => createHash("sha256").update(b).digest("hex");
const carimbo = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+Z$/, "Z");
const RODADA = resolve(opc("rascunho") ?? tmpdir(), `roteiro-motor-prova-${carimbo}`);
if (existsSync(RODADA)) { console.error(`NÃO RODOU: ${RODADA} já existe`); process.exit(2); }
mkdirSync(RODADA, { recursive: true });

const resultados = [];
const ok = (nome, certo, detalhe = "") => { resultados.push({ nome, certo: !!certo, detalhe }); console.log(`${certo ? "ok    " : "ERRADO"} · ${nome}${detalhe && !certo ? ` · ${detalhe}` : ""}`); };
const grava = (f, t) => { mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, t); return f; };
function roda(args) {
  const r = spawnSync(process.execPath, [FERRAMENTA, ...args], { cwd: RAIZ, encoding: "utf8", maxBuffer: 1 << 26 });
  let json = null; try { json = JSON.parse(r.stdout); } catch { /* sem --json, ou não rodou */ }
  return { code: r.status, stdout: r.stdout, stderr: r.stderr, json };
}
const conjunto = (xs) => [...new Set(xs)].sort().join(",");
const regrasDe = (j) => conjunto((j?.problemas ?? j?.conferencia?.problemas ?? []).map((p) => p.regra));
const avisosDe = (j) => conjunto((j?.avisos ?? []).map((p) => p.regra));

// ── o retrato de roteiros/ dos dois vídeos (nada pode mudar) ──
function retrato() {
  const out = {};
  const anda = (d) => { for (const n of readdirSync(d)) { const f = join(d, n); if (statSync(f).isDirectory()) anda(f); else out[f.slice(RAIZ.length + 1).replace(/\\/g, "/")] = sha(readFileSync(f)); } };
  for (const v of VIDEOS) anda(join(RAIZ, "roteiros", v));
  return out;
}
const ANTES = retrato();

// ── o motor ──
let MOTOR = null, motorNota = "";
if (opc("clone")) {
  const clone = resolve(opc("clone")), commit = opc("commit") ?? "6253755";
  const git = (...a) => spawnSync("git", ["-C", clone, ...a], { encoding: "utf8", maxBuffer: 1 << 26 });
  const rev = git("rev-parse", "--verify", `${commit}^{commit}`);
  if (rev.status !== 0) { console.error(`NÃO RODOU: o commit ${commit} não existe no clone ${clone}`); process.exit(2); }
  const inteiro = rev.stdout.trim(), dest = join(RODADA, "motor"), arquivos = [], externos = [];
  const vistos = new Set(), fila = ["scripts/sem-rosto/portao.mjs"];
  while (fila.length) {
    const f = fila.shift(); if (vistos.has(f)) continue; vistos.add(f);
    const r = git("show", `${inteiro}:${f}`);
    if (r.status !== 0) { console.error(`NÃO RODOU: git show ${f} falhou`); process.exit(2); }
    grava(join(dest, f), r.stdout); arquivos.push({ caminho: f, sha256: sha(r.stdout) });
    for (const m of r.stdout.matchAll(/(?:^|\n)\s*(?:import|export)\s[^;]*?from\s*["']([^"']+)["']|import\(\s*["']([^"']+)["']\s*\)/g)) {
      const s = m[1] || m[2];
      if (s.startsWith("node:")) continue;
      if (s.startsWith(".")) fila.push(posix.normalize(posix.join(posix.dirname(f), s))); else externos.push(`${s} (em ${f})`);
    }
  }
  if (externos.length) { console.error(`NÃO RODOU: o fecho do portão importa pacote de fora: ${externos.join(", ")}`); process.exit(2); }
  grava(join(dest, "ORIGEM.json"), JSON.stringify({ clone, commit: inteiro, pedido: commit, como: "git show <commit>:<arquivo>, sem checkout", arquivos }, null, 2) + "\n");
  MOTOR = dest; motorNota = `exportado de ${clone} @ ${inteiro.slice(0, 12)} (${arquivos.length} arquivos, sem npm)`;
} else if (opc("motor")) { MOTOR = resolve(opc("motor")); motorNota = `pasta já exportada: ${MOTOR}`; }
console.log(`rodada: ${RODADA}\nmotor: ${MOTOR ? motorNota : "NÃO MEDIDO (sem --clone nem --motor)"}\n`);
const naoMedido = MOTOR ? [] : ["a concordância com o lerRoteiro do motor"];
const comMotor = MOTOR ? [`--motor=${MOTOR}`] : [];

// ── 1. conferir: um caso que passa e um que reprova por regra ──
const texto = (n) => { const b = "Rain falls on the western side and drains to the sea. "; let s = b.repeat(Math.ceil(n / b.length) + 1).slice(0, n); if (s.endsWith(" ")) s = s.slice(0, -1) + "."; return s; };
const CASOS = [
  // [nome, texto, regras esperadas (null = só a concordância), avisos esperados (null = não confere), opções]
  ["passa: o caso base", "# Title\n\nFirst paragraph.\n\n## Part one\n\nSecond paragraph.\n", [], []],
  ["passa: cabeçalho YAML fechado", "---\nprojeto: x\n---\n# Title\n\nHello.\n\n## Part\n\nBye.\n", [], []],
  ["reprova: cabeçalho YAML sem fecho", "---\nprojeto: x\n\nHello.\n", ["motor:yaml-sem-fecho"], null],
  ["reprova: dois títulos", "# A\n\n# B\n\nHello.\n\n## P\n\nBye.\n", ["motor:dois-titulos"], null],
  ["reprova: marca vazia (## ##)", "# T\n\nHello.\n\n## ##\n\n## P\n\nBye.\n", ["motor:marca-vazia"], null],
  ["passa: parênteses e aspas na FALA", "# T\n\nHello (and goodbye), «he said».\n\n## P\n\nBye.\n", [], []],
  ["reprova: ( ) na marca", "# T\n\nHello.\n\n## Part (one)\n\nBye.\n", ["motor:sinais-na-marca", "sala:sinais-na-marca"], null],
  ["reprova: « » na marca", "# T\n\nHello.\n\n## «Part»\n\nBye.\n", ["motor:sinais-na-marca", "sala:sinais-na-marca"], null],
  ["reprova: ### cabeçalho de nível 3", "# T\n\nHello.\n\n### Sub\n\n## P\n\nBye.\n", ["motor:cabecalho-3"], null],
  ["passa: colchete em nota e comentário (não são lidos)", "# T\n\n> nota [com colchete]\n\n<!-- [x] -->\n\nHello.\n\n## P\n\nBye.\n", [], []],
  ["reprova: colchete na fala", "# T\n\nHello [whispers] there.\n\n## P\n\nBye.\n", ["motor:colchete", "sala:colchete"], null],
  ["passa: parágrafo de 2.500 caracteres", `# T\n\n${texto(2500)}\n\n## P\n\nBye.\n`, [], []],
  ["reprova: parágrafo de 2.501 caracteres", `# T\n\n${texto(2501)}\n\n## P\n\nBye.\n`, ["motor:paragrafo-longo", "sala:paragrafo-longo"], null],
  ["passa: comentário de várias linhas", "# T\n\nHello.\n\n<!-- uma nota\nem duas linhas -->\n\n## P\n\nBye.\n", [], []],
  ["reprova: comentário sem fecho", "# T\n\nHello.\n\n## P\n\nBye.\n\n<!-- aberto\n\nMore.\n", ["motor:comentario-sem-fecho"], null],
  ["passa: um parágrafo falado basta", "# T\n\nHello.\n", [], ["aviso:sem-marca"]],
  ["reprova: nenhum parágrafo falado", "# T\n\n> só uma nota\n", ["motor:sem-fala", "sala:sem-fala"], null],
  ["passa: uma marca no começo (antes da primeira fala)", "# T\n\n## Opening\n\nHello.\n", [], []],
  ["reprova: duas marcas seguidas", "# T\n\nHello.\n\n## A\n\n## B\n\nBye.\n", ["motor:marcas-seguidas"], null],
  ["reprova: marca no fim", "# T\n\nHello.\n\n## End\n", ["motor:marca-no-fim", "sala:marca-no-fim"], null],
  ["passa (cards titulo): com um ##", "# T\n\nHello.\n\n## Card\n\nBye.\n", [], [], ["--cards=titulo"]],
  ["reprova (cards titulo): sem nenhum ##", "# T\n\nHello.\n", ["motor:sem-card"], null, ["--cards=titulo"]],
  ["reprova (cards titulo): dois cards seguidos", "# T\n\nHello.\n\n## A\n\n## B\n\nBye.\n", ["motor:marcas-seguidas"], null, ["--cards=titulo"]],
  ["reprova (cards titulo): card no fim", "# T\n\nHello.\n\n## End\n", ["motor:marca-no-fim", "sala:marca-no-fim"], null, ["--cards=titulo"]],
  // a Sala é mais dura que o motor (o motor aceita e concorda; a Sala reprova)
  ["reprova só na Sala: colchete de link na fala", "# T\n\nSee [the plan](https://example.com) now.\n\n## P\n\nBye.\n", ["sala:colchete"], ["aviso:inline"]],
  ["reprova só na Sala: colchete no título", "# T [draft]\n\nHello.\n\n## P\n\nBye.\n", ["sala:colchete"], []],
  ["reprova só na Sala: 2.504 caracteres crus, 2.500 limpos", `# T\n\n**Bold** ${texto(2495)}\n\n## P\n\nBye.\n`, ["sala:paragrafo-longo"], ["aviso:inline"]],
  ["reprova só na Sala: link na marca", "# T\n\nHello.\n\n## [Part](x)\n\nBye.\n", ["sala:colchete", "sala:sinais-na-marca"], []],
  // avisos
  ["aviso: sem título e sem marca", "Hello.\n", [], ["aviso:sem-marca", "aviso:sem-titulo"]],
  ["aviso: # sem espaço e ## sozinho viram fala", "# T\n\n#1 in the world.\n\n##\n\n## P\n\nBye.\n", [], ["aviso:cerquilha"]],
  ["aviso: acima do teto do canal por obra (30.000)", `# T\n\n${Array.from({ length: 13 }, () => texto(2400)).join("\n\n")}\n\n## P\n\nBye.\n`, [], ["aviso:limite-da-obra"]],
  // bordas: só a concordância com o motor
  ["borda: BOM e CRLF", "﻿# T\r\n\r\nHello.\r\n\r\n## P\r\n\r\nBye.\r\n", [], null],
  ["borda: comentário no meio da linha e no fim do parágrafo", "# T\n\nHello <!-- x --> there.\nAnd <!-- aberto\nfechado --> more.\n\n## P\n\nBye.\n", [], null],
  ["borda: sete # (fala), título com # no fim", "# Title ##\n\n####### seven\n\n## P\n\nBye.\n", null, null],
  ["borda: nota dentro do parágrafo", "# T\n\nHello\n> nota\nthere.\n\n## P\n\nBye.\n", [], null],
  ["borda: parágrafo que a limpeza esvazia", "# T\n\n** **\n\n## P\n\nBye.\n", null, null],
  ["borda: título vazio", "# **\n\nHello.\n", null, null],
  ["borda: erro na fala e comentário sem fecho", "# T\n\nHello [x].\n\n<!-- aberto\n", null, null],
];
const casosDir = join(RODADA, "casos");
for (const [k, [nome, t, regras, avisos, extra = []]] of CASOS.entries()) {
  const f = grava(join(casosDir, `c${String(k + 1).padStart(2, "0")}.md`), t);
  const r = roda(["conferir", f, "--json", ...extra, ...comMotor]);
  if (!r.json) { ok(`conferir · ${nome}`, false, `não saiu JSON (exit ${r.code}): ${r.stderr.slice(0, 200)}`); continue; }
  const temMotor = r.json.problemas.filter((p) => p.regra.startsWith("motor:") && p.regra !== "motor:discorda").length > 0;
  const problemas = [];
  if (regras !== null) {
    if (regrasDe(r.json) !== conjunto(regras)) problemas.push(`regras ${regrasDe(r.json) || "(nenhuma)"}, esperadas ${conjunto(regras) || "(nenhuma)"}`);
    if (r.code !== (regras.length ? 1 : 0)) problemas.push(`exit ${r.code}`);
  } else if (r.code !== (r.json.problemas.length ? 1 : 0)) problemas.push(`exit ${r.code} com ${r.json.problemas.length} problemas`);
  if (avisos !== null && avisosDe(r.json) !== conjunto(avisos)) problemas.push(`avisos ${avisosDe(r.json) || "(nenhum)"}, esperados ${conjunto(avisos) || "(nenhum)"}`);
  if (MOTOR) {
    if (!r.json.motor?.concorda) problemas.push(`o motor discorda: ${r.json.motor?.detalhe}`);
    else if (r.json.motor.aceita === temMotor) problemas.push(`o motor ${r.json.motor.aceita ? "aceita" : "recusa"}, e a réplica ${temMotor ? "recusa" : "aceita"}`);
  }
  ok(`conferir · ${nome}${MOTOR ? ` · motor ${r.json.motor?.aceita ? "aceita" : "recusa"}` : ""}`, !problemas.length, problemas.join("; "));
}

// o modo de card: o do canal-motor.json do canal; sem o arquivo, "nenhum"; com o arquivo sem "cards", "titulo" (o do motor)
{
  const semMarca = grava(join(casosDir, "modo.md"), "# T\n\nHello.\n");
  const real = roda(["conferir", semMarca, "--json"]);
  ok("modo de card: o do estudio/canal-motor.json do canal («nenhum»)", real.code === 0 && real.json?.cards === "nenhum" && /canal-motor\.json/.test(real.json?.cards_de ?? ""), JSON.stringify([real.code, real.json?.cards, real.json?.cards_de]));
  const vazia = join(RODADA, "raiz-sem-estudio"); mkdirSync(vazia, { recursive: true });
  const sem = roda(["conferir", semMarca, "--json", `--raiz=${vazia}`]);
  ok("modo de card: sem estudio/canal-motor.json, «nenhum» (o padrão do canal)", sem.code === 0 && sem.json?.cards === "nenhum", JSON.stringify([sem.code, sem.json?.cards]));
  const semCards = join(RODADA, "raiz-sem-cards"); grava(join(semCards, "estudio", "canal-motor.json"), JSON.stringify({ narracao: { fonte: "tts" } }));
  const tit = roda(["conferir", semMarca, "--json", `--raiz=${semCards}`]);
  ok("modo de card: canal-motor.json sem narracao.cards dá «titulo» (portao.mjs:84), e o roteiro sem ## reprova", tit.code === 1 && tit.json?.cards === "titulo" && regrasDe(tit.json) === "motor:sem-card", JSON.stringify([tit.code, tit.json?.cards, regrasDe(tit.json)]));
}

// ── 2. a concordância não é de enfeite ──
{
  const falsos = join(RODADA, "motores-falsos");
  const aceita = grava(join(falsos, "aceita-tudo", "scripts", "sem-rosto", "roteiro.mjs"), "export class ErroRoteiro extends Error {}\nexport function lerRoteiro() { return { titulo: null, segmentos: [] }; }\n");
  const outra = grava(join(falsos, "le-outro", "scripts", "sem-rosto", "roteiro.mjs"), "export class ErroRoteiro extends Error {}\nexport function lerRoteiro() { return { titulo: 'Title', segmentos: [{ tipo: 'fala', texto: 'Outro.', linha: 3 }] }; }\n");
  const quebra = grava(join(falsos, "quebra", "scripts", "sem-rosto", "roteiro.mjs"), "export function lerRoteiro() { throw new TypeError('quebrei'); }\n");
  const colchete = grava(join(casosDir, "discorda-colchete.md"), "# T\n\nHello [whispers] there.\n");
  const base = grava(join(casosDir, "discorda-base.md"), "# Title\n\nFirst paragraph.\n\n## Part one\n\nSecond paragraph.\n");
  const a = roda(["conferir", colchete, "--json", `--motor=${join(falsos, "aceita-tudo")}`]);
  ok("concordância: um motor que aceita tudo, num arquivo que reprova, dá motor:discorda", a.code === 1 && regrasDe(a.json).split(",").includes("motor:discorda"), JSON.stringify([a.code, regrasDe(a.json)]));
  const b = roda(["conferir", base, "--json", `--motor=${join(falsos, "le-outro")}`]);
  ok("concordância: um motor que aceita e lê outros segmentos dá motor:discorda", b.code === 1 && regrasDe(b.json) === "motor:discorda", JSON.stringify([b.code, regrasDe(b.json)]));
  const c = roda(["conferir", base, "--json", `--motor=${join(falsos, "quebra")}`]);
  ok("concordância: um motor que quebra com erro que não é de roteiro sai 2", c.code === 2 && /não é de roteiro/.test(c.stderr), JSON.stringify([c.code, c.stderr.slice(0, 120)]));
  void aceita; void outra; void quebra;
}

// ── 3. converter, num canal de mentira ──
const NARR = [
  "# A Test Title", "",
  "> nota do roteiro, com [colchete] e (parênteses)", "",
  "<!-- gancho · as notas do gancho (dois parágrafos) -->", "",
  "In 2012, about 97 percent of it", "ran downhill.", "",
  "That was the start.", "",
  "<!-- p1 · The first part -->", "",
  "By 1940, 3 rivers ran dry.", "",
  "<!-- p2 · The second part -->", "",
  "It ended there.", "",
].join("\n");
const PARAS = ["In 2012, about 97 percent of it ran downhill.", "That was the start.", "By 1940, 3 rivers ran dry.", "It ended there."];
const PARAS_VOZ = ["In twenty twelve, about ninety-seven percent of it ran downhill.", "That was the start.", "By nineteen forty, three rivers ran dry.", "It ended there."];
const REV = sha(PARAS.join("\n\n"));
const montarEsperado = (titulo, ps) => [`# ${titulo}`, "", ps[0], "", ps[1], "", "## The first part", "", ps[2], "", "## The second part", "", ps[3], ""].join("\n");
const vozDe = (ps, rev = REV.slice(0, 12)) => `> Revisão do roteiro: \`${rev}\`\n\n${ps.join("\n\n")}\n`;
const trocasDe = (ps) => `# Cópia para a voz: as trocas\n\n> Cópia para a voz: \`texto-para-voz.md\` (sem a linha do carimbo), sha256 \`${sha(ps.join("\n\n")).slice(0, 12)}\`, 0 caracteres.\n`;
let nCanal = 0;
function canal(nome, { narr = NARR, voz = null, trocas = null } = {}) {
  const r = join(RODADA, "canais", `v${String(++nCanal).padStart(2, "0")}`), d = join(r, "roteiros", "teste");
  grava(join(r, "CASO.txt"), nome + "\n");
  grava(join(d, "roteiro-narrador.md"), narr);
  if (voz !== null) grava(join(d, "voz", "texto-para-voz.md"), voz);
  if (trocas !== null) grava(join(d, "voz", "trocas.md"), trocas);
  return { raiz: r, saida: join(r, "saida", "roteiro-portao.md") };
}
function converte(nome, cfg, args = [], esperado) {
  const c = canal(nome, cfg);
  const r = roda(["converter", "teste", "--json", `--raiz=${c.raiz}`, `--saida=${c.saida}`, ...args, ...comMotor]);
  const gravou = existsSync(c.saida), json = c.saida.replace(/\.md$/, ".json");
  const problemas = [];
  if (!r.json) problemas.push(`não saiu JSON (exit ${r.code}): ${r.stderr.slice(0, 200)}`);
  else if (esperado.regras) {
    const got = conjunto((r.json.problemas ?? r.json.conferencia?.problemas ?? []).map((p) => p.regra));
    if (got !== conjunto(esperado.regras)) problemas.push(`regras ${got || "(nenhuma)"}, esperadas ${conjunto(esperado.regras) || "(nenhuma)"}`);
  }
  if (r.code !== esperado.code) problemas.push(`exit ${r.code}, esperado ${esperado.code}`);
  if (esperado.code === 1 && (gravou || existsSync(json))) problemas.push("gravou mesmo reprovando");
  if (esperado.code === 0) {
    if (!gravou || !existsSync(json)) problemas.push("não gravou");
    else {
      const t = readFileSync(c.saida, "utf8"), j = JSON.parse(readFileSync(json, "utf8"));
      if (esperado.texto !== undefined && t !== esperado.texto) problemas.push(`o texto do resultado não é o esperado:\n${t}\n---esperado---\n${esperado.texto}`);
      if (j.resultado?.sha256 !== sha(readFileSync(c.saida))) problemas.push("o sha do resultado no .json não é o do disco");
      if (j.fonte?.sha256 !== sha(readFileSync(join(c.raiz, j.fonte.arquivo)))) problemas.push("o sha da fonte no .json não é o do disco");
      if (j.revisao_do_roteiro_sha256 !== REV && cfg.narr === undefined) problemas.push(`a revisão ${j.revisao_do_roteiro} não é a calculada ${REV.slice(0, 12)}`);
      if (!j.gerado_em || !j.gerado_em_brasilia) problemas.push("sem a hora");
      if (MOTOR && !j.conferencia?.motor?.concorda) problemas.push("o motor não concordou");
    }
  }
  if (esperado.avisos && !esperado.avisos.every((a) => (r.json?.avisos ?? []).some((x) => x.regra === a))) problemas.push(`faltou aviso ${esperado.avisos.join(", ")}: ${avisosDe(r.json)}`);
  if (esperado.extra) { const e = esperado.extra(r, c); if (e) problemas.push(e); }
  ok(`converter · ${nome}`, !problemas.length, problemas.join("; "));
  return { r, c };
}
converte("passa: do narrador (título, nota, gancho, parágrafo em duas linhas, duas partes)", {}, [], { code: 0, regras: [], texto: montarEsperado("A Test Title", PARAS) });
converte("passa: da cópia para a voz (título e partes do narrador, parágrafos da voz)", { voz: vozDe(PARAS_VOZ), trocas: trocasDe(PARAS_VOZ) }, ["--de=voz"], { code: 0, regras: [], texto: montarEsperado("A Test Title", PARAS_VOZ) });
converte("passa: --titulo troca o título", {}, ["--titulo=Another Title"], { code: 0, regras: [], texto: montarEsperado("Another Title", PARAS) });
converte("reprova: a voz é de outra revisão do roteiro", { voz: vozDe(PARAS_VOZ, "0123456789ab"), trocas: trocasDe(PARAS_VOZ) }, ["--de=voz"], { code: 1, regras: ["conv:voz-de-outra-revisao"] });
converte("reprova: a voz sem o carimbo", { voz: PARAS_VOZ.join("\n\n") + "\n", trocas: trocasDe(PARAS_VOZ) }, ["--de=voz"], { code: 1, regras: ["conv:voz-sem-carimbo"] });
converte("reprova: a voz com outro número de parágrafos (sem trocas.md)", { voz: vozDe(PARAS_VOZ.slice(0, 3)) }, ["--de=voz"], { code: 1, regras: ["conv:voz-paragrafos"], avisos: ["aviso:voz-sem-trocas"] });
converte("reprova: a voz mexida depois do preparar-voz", { voz: vozDe(PARAS_VOZ.map((p, k) => (k === 1 ? "That was the end." : p))), trocas: trocasDe(PARAS_VOZ) }, ["--de=voz"], { code: 1, regras: ["conv:voz-mexida"] });
converte("aviso: algarismo na cópia para a voz", { voz: vozDe(PARAS_VOZ.map((p, k) => (k === 2 ? "By 1940, three rivers ran dry." : p))), trocas: trocasDe(PARAS_VOZ.map((p, k) => (k === 2 ? "By 1940, three rivers ran dry." : p))) }, ["--de=voz"], { code: 0, regras: [], avisos: ["aviso:voz-com-algarismo"] });
converte("reprova: sem título e sem --titulo", { narr: NARR.replace("# A Test Title\n", "") }, [], { code: 1, regras: ["conv:sem-titulo"] });
converte("passa: sem título, com --titulo", { narr: NARR.replace("# A Test Title\n", "") }, ["--titulo=Given Title"], { code: 0, regras: [], texto: montarEsperado("Given Title", PARAS) });
converte("reprova: um ## no roteiro do canal", { narr: NARR.replace("That was the start.", "That was the start.\n\n## Stray") }, [], { code: 1, regras: ["conv:cabecalho"] });
converte("reprova: partes fora de ordem (p1, p3)", { narr: NARR.replace("p2 ·", "p3 ·") }, [], { code: 1, regras: ["conv:partes-fora-de-ordem"] });
converte("reprova: parte sem título", { narr: NARR.replace("p2 · The second part", "p2 · ") }, [], { code: 1, regras: ["conv:parte-sem-titulo"] });
converte("reprova: marcação inline que o motor limparia", { narr: NARR.replace("ran dry", "ran *dry*") }, [], { code: 1, regras: ["conv:fidelidade"] });
converte("reprova: parênteses no título da parte (a linha aponta a marca no roteiro)", { narr: NARR.replace("The second part", "The second (and last) part") }, [], {
  code: 1, regras: ["motor:sinais-na-marca", "sala:sinais-na-marca"],
  extra: (r) => { const p = r.json?.problemas?.[0]; return p && p.linha === 16 && /roteiro-narrador\.md$/.test(p.arquivo) && p.linha_no_resultado === 11 ? null : `a linha não aponta a marca no roteiro: ${JSON.stringify(p)}`; },
});
converte("reprova: parte depois do último parágrafo", { narr: NARR + "\n<!-- p3 · After the end -->\n" }, [], { code: 1, regras: ["motor:marca-no-fim", "sala:marca-no-fim"] });
converte("aviso: comentário que parece marca e não está na forma", { narr: NARR.replace("<!-- p2 · The second part -->", "<!-- p2 - The second part -->") }, [], {
  code: 0, regras: [], avisos: ["aviso:marca-malformada"],
  extra: (r, c) => (readFileSync(c.saida, "utf8").includes("## The second part") ? "a marca malformada entrou" : null),
});
converte("passa: marca dentro de comentário aberto não vale", { narr: NARR.replace("<!-- p2 · The second part -->", "<!-- p2 · The second part -->\n<!-- uma nota aberta\n<!-- p3 · Falsa -->") }, [], {
  code: 0, regras: [], extra: (r, c) => (readFileSync(c.saida, "utf8").includes("Falsa") ? "a marca de dentro do comentário entrou" : null),
});
converte("passa: cabeçalho YAML na fonte sai (com aviso)", { narr: "---\nprojeto: teste\n---\n" + NARR }, [], {
  code: 0, regras: [], avisos: ["aviso:yaml-na-fonte"], texto: montarEsperado("A Test Title", PARAS),
});
{
  const c = canal("reprova sem tocar a saída de antes", { narr: NARR.replace("ran dry", "ran *dry*") });
  grava(c.saida, "antiga\n"); const antes = sha(readFileSync(c.saida));
  const r = roda(["converter", "teste", "--json", `--raiz=${c.raiz}`, `--saida=${c.saida}`]);
  ok("converter · reprova e avisa que a saída de antes não é esta (sem tocá-la)", r.code === 1 && (r.json?.avisos ?? []).some((a) => a.regra === "aviso:saida-antiga") && sha(readFileSync(c.saida)) === antes, JSON.stringify([r.code, avisosDe(r.json)]));
}

// ── 4. as conversões reais, e o portão de verdade ──
let portao = null;
if (MOTOR && existsSync(join(MOTOR, "scripts", "sem-rosto", "portao.mjs"))) {
  try { portao = await import(pathToFileURL(join(MOTOR, "scripts", "sem-rosto", "portao.mjs")).href); }
  catch (e) { ok("o portão do motor importa sem npm", false, String(e.message || e).slice(0, 300)); }
}
const CANAL_FALSO = Object.freeze({ id: "alpha-point-prova", membros: [{ pessoa: "prova-da-porta", papel: "dono-do-canal" }], narracao: { cards: "nenhum" }, portoes: {} });
const obras = join(RODADA, "obras");
const reais = [];
for (const v of VIDEOS) {
  const gate = spawnSync(process.execPath, [join(RAIZ, "roteiros", v, "_ferramentas", "gate.mjs")], { cwd: RAIZ, encoding: "utf8", maxBuffer: 1 << 26 });
  let laudo = null; try { laudo = JSON.parse(gate.stdout); } catch { /* fica null */ }
  for (const de of ["narrador", "voz"]) {
    const saida = join(RODADA, "conversoes", `${v}-${de}`, "roteiro-portao.md");
    const r = roda(["converter", v, `--de=${de}`, `--saida=${saida}`, "--json", ...comMotor]);
    const j = r.json, problemas = [];
    if (r.code !== 0 || !j?.gravado) problemas.push(`exit ${r.code}: ${JSON.stringify(j?.problemas ?? r.stderr).slice(0, 600)}`);
    else {
      const bytes = readFileSync(saida), fonte = de === "voz" ? join(RAIZ, "roteiros", v, "voz", "texto-para-voz.md") : join(RAIZ, "roteiros", v, "roteiro-narrador.md");
      if (j.resultado.sha256 !== sha(bytes)) problemas.push("o sha do resultado não é o do disco");
      if (j.fonte.sha256 !== sha(readFileSync(fonte))) problemas.push("o sha da fonte não é o do disco");
      if (!laudo?.sha256) problemas.push(`o gate.mjs do vídeo não deu o sha (exit ${gate.status})`);
      else if (j.revisao_do_roteiro_sha256 !== laudo.sha256) problemas.push(`a revisão ${j.revisao_do_roteiro} não é a do gate.mjs (${laudo.sha256.slice(0, 12)})`);
      if (typeof laudo?.paragrafos === "number" && j.contagem.paragrafos !== laudo.paragrafos) problemas.push(`${j.contagem.paragrafos} parágrafos, e o gate.mjs conta ${laudo.paragrafos}`);
      if (j.contagem.marcas !== 7) problemas.push(`${j.contagem.marcas} marcas, esperadas 7 (p1 a p7)`);
      if (de === "voz" && j.trocas?.declara !== j.trocas?.calculado) problemas.push("a cópia para a voz não é a do trocas.md");
      if (MOTOR && !j.conferencia.motor?.concorda) problemas.push("o motor não concordou");
      if (portao) {
        try {
          const slug = `${v}-${de}`;
          portao.novaObra({ obras, slug, pauta: "prova da porta do roteiro (rascunho)", por: "prova-da-porta", canal: CANAL_FALSO });
          const reg = portao.aprovar({ dirObra: join(obras, slug), canal: CANAL_FALSO, portao: "roteiro", por: "prova-da-porta", arquivo: saida });
          const congelado = readFileSync(join(obras, slug, "_obra", "roteiro-aprovado.md"));
          if (reg.artefato?.sha256 !== sha(bytes) || sha(congelado) !== sha(bytes)) problemas.push("o portão congelou outros bytes");
        } catch (e) { problemas.push(`o portão de verdade recusou: ${e.message}`); }
      }
    }
    reais.push({ video: v, de, saida, exit: r.code, contagem: j?.contagem ?? null, resultado: j?.resultado ?? null, fonte: j?.fonte ?? null, revisao: j?.revisao_do_roteiro ?? null, avisos: (j?.avisos ?? []).map((a) => `${a.regra}: ${a.mensagem}`) });
    ok(`real · ${v} --de=${de} · ${j?.contagem ? `${j.contagem.paragrafos} parágrafos, ${j.contagem.marcas} marcas, ${j.contagem.caracteres_falados} caracteres, o maior ${j.contagem.maior_paragrafo?.caracteres}` : "?"}${portao ? " · o portão aceitou" : ""}`, !problemas.length, problemas.join("; "));
  }
}
if (portao) {
  // o portão de verdade recusa o que a réplica recusa, com a mesma mensagem
  const f = join(casosDir, "c11.md");      // "reprova: colchete na fala"
  const conf = roda(["conferir", f, "--json"]);
  const primeiro = conf.json?.problemas?.find((p) => p.regra.startsWith("motor:"));
  let msg = null;
  try { portao.novaObra({ obras, slug: "recusa", pauta: "prova (rascunho)", por: "prova-da-porta", canal: CANAL_FALSO }); portao.aprovar({ dirObra: join(obras, "recusa"), canal: CANAL_FALSO, portao: "roteiro", por: "prova-da-porta", arquivo: f }); }
  catch (e) { msg = e.message; }
  const esperado = primeiro ? `o roteiro não está no formato do narrador: linha ${primeiro.linha}: ${primeiro.mensagem}` : null;
  ok("o portão de verdade recusa o colchete com a mensagem da réplica (portao.mjs:84)", msg !== null && msg === esperado, `portão: ${msg} · réplica: ${esperado}`);
  ok("o portão recusado não congelou nada", !existsSync(join(obras, "recusa", "_obra", "roteiro-aprovado.md")));
} else naoMedido.push(MOTOR ? "o portão de verdade (a pasta do motor não tem o portao.mjs e o fecho dele)" : "o portão de verdade");

// ── 5. o uso errado sai 2 ──
const USOS = [
  ["sem verbo", []], ["verbo desconhecido", ["aprovar", "x"]], ["conferir sem arquivo", ["conferir"]],
  ["conferir de arquivo que não existe", ["conferir", join(RODADA, "nao-existe.md")]], ["opção desconhecida", ["conferir", join(casosDir, "c01.md"), "--saida=x"]],
  ["--cards desconhecido", ["conferir", join(casosDir, "c01.md"), "--cards=xyz"]], ["--motor sem o validador", ["conferir", join(casosDir, "c01.md"), `--motor=${RODADA}`]],
  ["converter sem proj", ["converter"]], ["converter com slug inválido", ["converter", "../peru-agua"]], ["converter --de desconhecido", ["converter", "peru-agua", "--de=tela", `--saida=${join(RODADA, "x.md")}`]],
  ["converter de proj que não existe", ["converter", "nao-existe", `--saida=${join(RODADA, "x.md")}`]], ["converter --titulo vazio", ["converter", "peru-agua", "--titulo=", `--saida=${join(RODADA, "x.md")}`]],
  ["dois arquivos", ["conferir", join(casosDir, "c01.md"), join(casosDir, "c02.md")]],
];
for (const [nome, args] of USOS) { const r = roda(args); ok(`uso errado sai 2 · ${nome}`, r.code === 2, `exit ${r.code}: ${r.stdout.slice(0, 100)}${r.stderr.slice(0, 100)}`); }
ok("uso errado não gravou x.md", !existsSync(join(RODADA, "x.md")));

// ── nada mudou em roteiros/ ──
const DEPOIS = retrato();
const mudou = [...new Set([...Object.keys(ANTES), ...Object.keys(DEPOIS)])].filter((k) => ANTES[k] !== DEPOIS[k]);
ok(`roteiros/ dos dois vídeos intactos (${Object.keys(ANTES).length} arquivos, o mesmo sha256 antes e depois; nenhuma pasta motor/)`, !mudou.length && VIDEOS.every((v) => !existsSync(join(RAIZ, "roteiros", v, "motor"))), mudou.join(", "));

const certos = resultados.filter((r) => r.certo).length;
const codigo = certos !== resultados.length ? 1 : naoMedido.length ? 2 : 0;
writeFileSync(join(RODADA, "resultado.json"), JSON.stringify({ rodada: RODADA, motor: MOTOR ? motorNota : null, certos, total: resultados.length, nao_medido: naoMedido, codigo, resultados, reais }, null, 2) + "\n");
for (const n of naoMedido) console.log(`NÃO MEDIDO · ${n}`);
console.log(`\n${certos} de ${resultados.length} certos${naoMedido.length ? ` · ${naoMedido.length} NÃO MEDIDO (passe --clone)` : ""} · resultado em ${join(RODADA, "resultado.json")}\nsaída ${codigo}`);
process.exit(codigo);
