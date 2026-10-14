#!/usr/bin/env node
// aplicar-lista-provar.mjs — a prova do ferramentas/aplicar-lista.mjs, sem rede.
//
// Numa cópia em out/_tmp/aplicar-teste/ (fora do git: a pasta ganha um .gitignore com "*"), o aplicador:
//   1. reproduz a rodada 1 do vídeo 2: o roteiro que a bancada 1 julgou (roteiros/los-angeles/_trabalho/roteiro-r1.md,
//      sha 822cb8e37301) com a lista-r1.json convertida ao formato novo tem de dar o sha 4902fe99688b, que o
//      aplicado-r1.md registra (e que é o de _trabalho/roteiro-r2.md), com as mesmas 28 diferenças frase a frase;
//   2. recusa cada mutante, com a saída esperada: o sha errado, o "de" ausente, o "de" duplicado, o PEDIR pendente e as
//      provas (a) a (e), com os controles que mostram que a declaração certa passa.
// O roteiro de verdade não é tocado: cada caso trabalha numa pasta própria, com --raiz apontando para ela.
//
// Uso (cwd na raiz do canal): node ferramentas/aplicar-lista-provar.mjs
// Saída: 0 = todos os casos certos · 1 = algum errado · 2 = não rodou. Grava out/_tmp/aplicar-teste/resultado.json.
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync, readdirSync, copyFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { pathToFileURL } from "node:url";

const RAIZ = process.cwd();
const FERRAMENTA = path.join(RAIZ, "ferramentas", "aplicar-lista.mjs");
const R1 = "roteiros/los-angeles/_trabalho/roteiro-r1.md", R2 = "roteiros/los-angeles/_trabalho/roteiro-r2.md";
const LISTA_R1 = "roteiros/los-angeles/_trabalho/lista-r1.json", APLICADO_R1 = "roteiros/los-angeles/_trabalho/aplicado-r1.md";
const EDITOR = "roteiros/los-angeles/roteiro-editor.md", VARIANTE = "roteiros/los-angeles/variantes/gancho-hoje.md";
for (const f of [FERRAMENTA, "canal.json", R1, R2, LISTA_R1, APLICADO_R1, EDITOR, VARIANTE]) if (!existsSync(f)) { console.error(`NÃO RODOU — falta ${f} (rode da raiz do canal)`); process.exit(2); }
const { numerais, lerFalado } = await import(pathToFileURL(FERRAMENTA).href);
const sha256 = (b) => createHash("sha256").update(b).digest("hex");

const TESTE = "out/_tmp/aplicar-teste";
rmSync(`${TESTE}/casos`, { recursive: true, force: true });
mkdirSync(`${TESTE}/casos`, { recursive: true });
writeFileSync(`${TESTE}/.gitignore`, "*\n");

// ---------------------------------------------------------------- a lista-r1 no formato novo ----
// A lista do vídeo 2 não tinha op nem numerais declarados. A op de cada item é atribuída aqui, à mão, pelo que o item
// faz (o "por_que" e as lentes dele); os numerais e as aspas declarados saem do próprio de/para de cada item (o que o
// de tem e o para não tem é "removido"; o contrário, "permitido"). A prova (b), no texto inteiro, é outra conta: ela
// confere que nada mudou de número FORA do que os itens declaram.
const OP = {
  L01: ["CORTAR", "tira 'about six hundred miles apart'"], L02: ["DA-FONTE", "fatos:A7, 'exposed to the southeast and south' é da fonte"],
  L03: ["ENFRAQUECER", "tira a figura falsa do bote"], L04: ["REDIZER", "parte a frase; nada novo"], L05: ["REDIZER", "'Then' → 'In between'"],
  L06: ["REDIZER", "'preliminary examination' → 'report'; a glosa do calado"], L07: ["REDIZER", "'he wrote' antes da citação"],
  L08: ["REDIZER", "'his'"], L09: ["DA-FONTE", "acrescenta a dúvida de Mendell (fonte)"], L10: ["REDIZER", "'That man, the one who'"],
  L11: ["CORTAR", "tira o parágrafo de recapitulação"], L12: ["REDIZER", "a glosa de Port Los Angeles; 'A later federal report' tira o 1897"],
  L13: ["REDIZER", "a glosa 'That meant going broke.'"], L14: ["ENFRAQUECER", "fatos:A5, 'They called it' → 'It's remembered as'"],
  L15: ["DA-FONTE", "fatos:A2, 'the railroad's', 'a later board', 'spending at'"], L16: ["DA-FONTE", "fatos:A1, 'more than twenty miles'"],
  L17: ["DA-PAUTA", "a ponte nova, com o 1906 do plano"], L18: ["ATRIBUIR", "'according to the Los Angeles Times'"],
  L19: ["REDIZER", "'leave' → 'approval'"], L20: ["CORTAR", "tira 'where the tide had stopped'"], L21: ["CORTAR", "tira 'named the San Pedro'"],
  L22: ["CORTAR", "tira a frase de 1912 (volta no L30)"], L23: ["DA-FONTE", "fatos:A6, os placares e a atribuição"],
  L24: ["ENFRAQUECER", "'about eighteen and a half' → 'more than eighteen'"], L25: ["REDIZER", "junta três frases em uma"],
  L26: ["DA-FONTE", "fatos:A3, 'almost'"], L27: ["REDIZER", "'doorsteps' → 'boundary lines'"], L28: ["ESTREITAR", "a lei de 1909 repete a regra"],
  L29: ["REDIZER", "tira 'first' e o placar de LA; 'by a landslide'"], L30: ["DA-FONTE", "fatos:A4, 'almost' e as duas milhas de pedra"],
  L31: ["CORTAR", "tira o recapitulado em camadas"], L32: ["CORTAR", "tira o 'still' repetido"], L33: ["REDIZER", "a dragagem dita em outra ordem"],
  L34: ["DA-PAUTA", "a definição do TEU com 'forty-foot … two'"], L35: ["REDIZER", "'a deep-water harbor'"],
};
const menos = (a, b) => { const m = new Map(); for (const x of b) m.set(x, (m.get(x) || 0) + 1); return a.filter((x) => (m.get(x) > 0 ? (m.set(x, m.get(x) - 1), false) : true)); };
const aspasDe = (t) => [...t.matchAll(/"([^"]*)"/g)].map((x) => x[1]);
function converter() {
  const l = JSON.parse(readFileSync(LISTA_R1, "utf8"));
  const itens = l.itens.map((i) => {
    if (!OP[i.id]) throw new Error(`sem op para ${i.id}`);
    const nd = numerais(i.de).map((x) => x.v), np = numerais(i.para).map((x) => x.v);
    return {
      id: i.id, op: OP[i.id][0], op_porque: OP[i.id][1], arquivo: "roteiro-narrador.md", parte: i.parte, de: i.de, para: i.para, lentes: i.lentes,
      numerais_removidos: menos(nd, np), numerais_permitidos: menos(np, nd), editor: [],
    };
  });
  return { proj: "los-angeles", rodada: 1, revisao_julgada: l.base.sha256_texto_falado.slice(0, 12), origem: `${LISTA_R1} (convertida por ferramentas/aplicar-lista-provar.mjs)`, itens };
}
const LISTA = converter();
writeFileSync(`${TESTE}/lista-r1-novo.json`, JSON.stringify(LISTA, null, 1) + "\n");

// ---------------------------------------------------------------- os casos ----
let nCaso = 0;
function preparar(nome) {
  const dir = `${TESTE}/casos/${String(++nCaso).padStart(2, "0")}-${nome}`;
  const base = `${dir}/roteiros/los-angeles`;
  mkdirSync(`${base}/variantes`, { recursive: true });
  copyFileSync(R1, `${base}/roteiro-narrador.md`);
  copyFileSync(EDITOR, `${base}/roteiro-editor.md`);
  copyFileSync(VARIANTE, `${base}/variantes/gancho-hoje.md`);
  return { dir, base, raiz: `${dir}/roteiros` };
}
function rodar(c, lista, seco = true) {
  const lp = `${c.dir}/lista.json`;
  writeFileSync(lp, typeof lista === "string" ? lista : JSON.stringify(lista, null, 1));
  const args = [FERRAMENTA, "los-angeles", `--lista=${lp}`, `--raiz=${c.raiz}`];
  if (seco) args.push("--seco");
  const r = spawnSync(process.execPath, args, { encoding: "utf8" });
  writeFileSync(`${c.dir}/saida.json`, r.stdout || ""); writeFileSync(`${c.dir}/saida.txt`, r.stderr || "");
  let j = null; try { j = JSON.parse(r.stdout); } catch {}
  return { codigo: r.status, j };
}
const clone = () => JSON.parse(JSON.stringify(LISTA));
const item = (l, id) => l.itens.find((i) => i.id === id);
const casos = [];
function caso(nome, descricao, fn) {
  const checks = [];
  const ok = (cond, msg) => checks.push({ ok: !!cond, msg });
  let erro = null, extra = {};
  try { extra = fn(ok) || {}; } catch (e) { erro = String(e.stack || e); }
  const passou = !erro && checks.length > 0 && checks.every((x) => x.ok);
  casos.push({ nome, descricao, passou, checks, erro, ...extra });
}
const provas = (j) => [...new Set((j?.recusas || []).map((r) => r.prova))].sort();
const intacto = (c) => readFileSync(`${c.base}/roteiro-narrador.md`).equals(readFileSync(R1)) && readFileSync(`${c.base}/roteiro-editor.md`).equals(readFileSync(EDITOR)) && !existsSync(`${c.base}/_trabalho`);
// um mutante de recusa: exit 1, a prova esperada entre as recusas (e só ela, quando "so")
function recusa(nome, descricao, mutar, esperadas, so = true) {
  caso(nome, descricao, (ok) => {
    const c = preparar(nome), l = clone(); mutar(l);
    const r = rodar(c, l);
    ok(r.codigo === 1, `exit ${r.codigo} (esperado 1)`);
    const p = provas(r.j);
    for (const e of esperadas) ok(p.includes(e), `a recusa traz a prova "${e}" (veio: ${p.join(", ") || "nenhuma"})`);
    if (so) ok(p.every((x) => esperadas.includes(x)), `só as provas esperadas recusam (veio: ${p.join(", ")})`);
    ok(intacto(c), "nada gravado");
  });
}
function controle(nome, descricao, mutar, conferir) {
  caso(nome, descricao, (ok) => {
    const c = preparar(nome), l = clone(); mutar(l);
    const r = rodar(c, l);
    ok(r.codigo === 0, `exit ${r.codigo} (esperado 0; recusas: ${(r.j?.recusas || []).map((x) => `[${x.prova}] ${x.msg}`).join(" | ") || "nenhuma"})`);
    conferir?.(r, ok, c);
  });
}

// 1. a reprodução, em seco
const SHA_ANTES = "822cb8e37301beacc503a5820695fc79a447983299c70a3afe6fe4ad35653bfd";
const SHA_DEPOIS = "4902fe99688bd24675424efecb0fceecf730ca4d3a0e600f42dafbdfa62efc96";
// as diferenças que o aplicado-r1.md registra, para comparar com as do aplicador
function diferencasDoAplicado() {
  const blocos = []; let cur = null;
  for (const linha of readFileSync(APLICADO_R1, "utf8").split("\n")) {
    if (/^\*\*Diferença \d+\*\*/.test(linha)) { cur = { sai: [], entra: [] }; blocos.push(cur); continue; }
    const m = linha.match(/^- (SAI|ENTRA): “(.*)” ← (.*)$/);
    if (m && cur) cur[m[1] === "SAI" ? "sai" : "entra"].push({ frase: m[2], itens: m[3].split(/,\s*/).filter(Boolean) });
  }
  return blocos;
}
caso("reproduz-r1-seco", "a lista-r1 convertida, em seco, sobre o roteiro-r1: o sha e as 28 diferenças do aplicado-r1.md", (ok) => {
  const c = preparar("reproduz-r1-seco");
  const r = rodar(c, LISTA);
  ok(r.codigo === 0, `exit ${r.codigo} (esperado 0)`);
  ok(r.j?.veredito === "SECO_OK", `veredito ${r.j?.veredito}`);
  ok(r.j?.sha_antes === SHA_ANTES, `sha antes ${r.j?.sha12_antes} = 822cb8e37301 (a revisão que a bancada 1 julgou)`);
  ok(r.j?.sha_depois === SHA_DEPOIS, `sha depois ${r.j?.sha12_depois} = 4902fe99688b (o do aplicado-r1.md)`);
  ok(r.j?.aplicados?.length === 35, `${r.j?.aplicados?.length} de 35 itens aplicados`);
  const a = r.j?.arquivos?.[0];
  ok(a?.gate?.antes?.sha256 === SHA_ANTES && a?.gate?.depois?.sha256 === SHA_DEPOIS, "o gate.mjs do vídeo 2 dá os mesmos dois sha");
  ok(a?.diff?.frases_sem_item === 0, `frases mudadas sem item: ${a?.diff?.frases_sem_item}`);
  ok(a?.diff?.itens_fora_do_diff?.length === 0, `itens fora do diff: ${a?.diff?.itens_fora_do_diff?.join(", ") || "nenhum"}`);
  const deles = diferencasDoAplicado(), meus = a?.diff?.blocos || [];
  ok(deles.length === 28 && meus.length === 28, `diferenças: ${meus.length} no aplicador, ${deles.length} no aplicado-r1.md`);
  let frasesIguais = true; const itensExtras = [];
  deles.forEach((d, n) => {
    const m = meus[n]; if (!m) { frasesIguais = false; return; }
    for (const lado of ["sai", "entra"]) {
      if (d[lado].length !== m[lado].length || d[lado].some((f, k) => f.frase !== m[lado][k].frase)) frasesIguais = false;
      d[lado].forEach((f, k) => {
        const mi = m[lado][k]?.itens || [];
        if (!f.itens.every((x) => mi.includes(x))) frasesIguais = false;
        const extra = mi.filter((x) => !f.itens.includes(x)); if (extra.length) itensExtras.push(`Diferença ${n + 1}, ${lado.toUpperCase()}: “${f.frase.slice(0, 50)}…” ← também ${extra.join(", ")}`);
      });
    }
  });
  ok(frasesIguais, "as 28 diferenças têm as mesmas frases, na mesma ordem, e cada item que o aplicado-r1.md dá está no do aplicador");
  return { itens_a_mais: itensExtras };
});

// 2. a reprodução, gravando
caso("reproduz-r1-grava", "a mesma lista, sem --seco: a cópia do antes, o arquivo gravado e o roteiro-r2.md do vídeo 2", (ok) => {
  const c = preparar("reproduz-r1-grava");
  const r = rodar(c, LISTA, false);
  ok(r.codigo === 0 && r.j?.veredito === "APLICADO", `exit ${r.codigo}, veredito ${r.j?.veredito}`);
  const copia = `${c.base}/_trabalho/roteiro-r1.antes.md`;
  ok(existsSync(copia) && readFileSync(copia).equals(readFileSync(R1)), "a cópia do antes é o roteiro-r1.md, byte a byte");
  ok(r.j?.copias?.[0]?.confere === true && r.j?.copias?.[0]?.sha256 === sha256(readFileSync(R1)), "o sha256 da cópia foi conferido");
  const gravado = readFileSync(`${c.base}/roteiro-narrador.md`);
  ok(lerFalado(gravado.toString("utf8")).sha === SHA_DEPOIS, "o texto falado do arquivo gravado é o 4902fe99688b");
  ok(r.j?.gate_depois_de_gravar?.sha256 === SHA_DEPOIS, "o gate.mjs, sobre o arquivo gravado, dá o 4902fe99688b");
  ok(!existsSync(`${c.base}/_trabalho/roteiro-editor-r1.antes.md`), "o editor não foi copiado (nenhum par do editor na lista)");
  // o roteiro-r2.md é a cópia do roteiro aplicado pelo vídeo 2 na rodada 1 (sha falado 4902fe99688b): o arquivo inteiro,
  // com título, notas "> " e marcas <!-- -->, tem de sair igual
  const igual = gravado.equals(readFileSync(R2));
  ok(igual, "o arquivo gravado é o _trabalho/roteiro-r2.md do vídeo 2, byte a byte (título, notas e marcas incluídos)");
  const a = gravado.toString("utf8").split("\n"), b = readFileSync(R2, "utf8").split("\n");
  return { byte_a_byte_com_r2: igual, linhas_diferentes_do_r2: igual ? [] : a.map((x, k) => (x !== b[k] ? { linha: k + 1, gravado: x, r2: b[k] ?? null } : null)).filter(Boolean) };
});

// 3. a lista e o sha
recusa("sha-errado", 'o "revisao_julgada" não é o sha do texto de agora', (l) => { l.revisao_julgada = "000000000000"; }, ["sha"]);
recusa("sha-de-outra-revisao", "a lista julgada sobre a r2 aplicada à r1", (l) => { l.revisao_julgada = SHA_DEPOIS.slice(0, 12); }, ["sha"]);
recusa("de-ausente", 'um "de" que não está no texto', (l) => { item(l, "L19").de = "the Army got permission to extend the wall"; }, ["casa"]);
recusa("de-duplicado", 'um "de" que casa duas vezes', (l) => { l.itens.push({ id: "X01", op: "REDIZER", arquivo: "roteiro-narrador.md", de: "the Corps of Engineers", para: "the Army engineers", numerais_removidos: [], numerais_permitidos: [], editor: [] }); }, ["casa"]);
recusa("op-afirmar", 'op fora da lista fechada ("AFIRMAR" não existe)', (l) => { item(l, "L02").op = "AFIRMAR"; }, ["lista"]);
recusa("variante-sem-sha", "um item numa variante sem o sha julgado dela", (l) => { l.itens.push({ id: "X02", op: "REDIZER", arquivo: "variantes/gancho-hoje.md", de: "Los Angeles is America's second-largest city.", para: "Los Angeles is the second-largest city in America.", numerais_removidos: [], numerais_permitidos: [], editor: [] }); }, ["sha"]);
caso("lista-quebrada", "a lista não é JSON: não rodou", (ok) => {
  const c = preparar("lista-quebrada"); const r = rodar(c, '{"proj": "los-angeles", "itens": [');
  ok(r.codigo === 2, `exit ${r.codigo} (esperado 2)`); ok(intacto(c), "nada gravado");
});

// 4. PEDIR
caso("pedir-pendente", "um PEDIR sem para: sai 3, lista o pendente e não grava nada, nem sem --seco", (ok) => {
  const c = preparar("pedir-pendente"), l = clone();
  l.itens.push({ id: "P01", op: "PEDIR", arquivo: "roteiro-narrador.md", parte: "p7", de: "It was the way to a deep-water harbor that didn't exist yet.", pedido: "a frase final pede uma imagem de hoje (escritor)", lentes: ["roteiro:99"] });
  const r = rodar(c, l, false);
  ok(r.codigo === 3, `exit ${r.codigo} (esperado 3)`);
  ok(r.j?.veredito === "PENDENTE" && r.j?.pendentes?.length === 1 && r.j.pendentes[0].id === "P01", "P01 está em pendentes ao escritor");
  ok((r.j?.recusas || []).length === 0, "nenhuma recusa (os outros 35 passariam)");
  ok(intacto(c), "nada gravado");
});
recusa("pedir-pendente-e-recusa", "um PEDIR pendente e um sha errado: a recusa vence (1)", (l) => { l.revisao_julgada = "000000000000"; l.itens.push({ id: "P01", op: "PEDIR", de: "It was the way", lentes: [] }); }, ["sha"]);
controle("pedir-respondido", "um PEDIR com o para do escritor se aplica como troca, com as provas", (l) => {
  l.itens.push({ id: "P01", op: "PEDIR", arquivo: "roteiro-narrador.md", parte: "p7", de: "It was the way to a deep-water harbor that didn't exist yet.", para: "It was the road to a deep-water harbor that didn't exist yet.", numerais_removidos: [], numerais_permitidos: [], editor: [] });
}, (r, ok) => { ok(r.j?.sha_depois && r.j.sha_depois !== SHA_DEPOIS, "o sha muda (a troca do escritor entrou)"); ok(r.j?.aplicados?.some((a) => a.id === "P01"), "P01 aplicado"); });

// 5. (a) aspas
recusa("a-aspas-mudadas", "(a) a citação de Mendell muda uma palavra", (l) => { item(l, "L07").para = 'And still he wrote: "It was a small estuary'; }, ["a"]);
recusa("a-aspas-sem-par", "(a) a citação perde a aspa de fechar", (l) => { item(l, "L13").para = '"would go to the wall. That meant going broke.'; }, ["a"]);
recusa("a-aspas-somem", "(a) um CORTAR leva uma citação sem declarar", (l) => { item(l, "L09").para = "San Pedro Bay, Mendell wrote, was worth improving, though he questioned whether an artificial harbor there was worth it, and he asked for a survey."; }, ["a"]);
controle("a-aspas-declaradas", "(a) a mesma mudança, declarada em aspas_removidas e aspas_novas, passa (como DA-FONTE: REDIZER não troca citação)", (l) => {
  const i = item(l, "L07"); i.op = "DA-FONTE"; i.para = 'And still he wrote: "It was a small estuary'; i.aspas_removidas = ["It is a small estuary and can never be made a harbor for deep-water ships."]; i.aspas_novas = ["It was a small estuary and can never be made a harbor for deep-water ships."];
});

// do cético (14/10/2026): o caso que a primeira versão errava em cada conserto
controle("a-never-repetido-declarado", "(a) cortar o segundo \"never\" citado, declarado: o texto tem a mesma citação duas vezes", (l) => {
  l.itens = [];
  l.itens.push({ id: "X10", op: "CORTAR", arquivo: "roteiro-narrador.md", de: 'The man who wrote "never" had designed', para: "The man who wrote that word had designed", aspas_removidas: ["never"], numerais_removidos: [], numerais_permitidos: [], editor: [] });
});
recusa("d-citacao-nova", "(d) REDIZER que traz citação nova, declarada em aspas_novas", (l) => {
  l.itens = [];
  l.itens.push({ id: "X11", op: "REDIZER", arquivo: "roteiro-narrador.md", de: "And a wall needs a decision about where.", para: 'And a wall, as an engineer put it, "needs a decision about where."', aspas_novas: ["needs a decision about where."], numerais_removidos: [], numerais_permitidos: [], editor: [] });
}, ["d"]);
recusa("b-numero-migra-entre-itens", "(b) um item tira \"three\" de uma frase e outro o põe noutra, sem declarar: o texto inteiro fica igual", (l) => {
  l.itens = [];
  l.itens.push({ id: "X12", op: "CORTAR", arquivo: "roteiro-narrador.md", de: "anchored about three miles out", para: "anchored out", numerais_removidos: [], numerais_permitidos: [], editor: [] });
  l.itens.push({ id: "X13", op: "DA-FONTE", arquivo: "roteiro-narrador.md", de: "a bay that wrecked ships", para: "a bay that wrecked three ships", numerais_removidos: [], numerais_permitidos: [], editor: [] });
}, ["b"]);
recusa("lista-editor-pela-caixa", "o editor com outra caixa no nome (o Windows não distingue) não passa por variante", (l) => {
  l.revisoes_julgadas = { "Roteiro-Editor.md": lerFalado(readFileSync(EDITOR, "utf8").replace(/\r\n?/g, "\n")).sha.slice(0, 12) };
  l.itens.push({ id: "X14", op: "REDIZER", arquivo: "Roteiro-Editor.md", de: " o que a faixa ", para: " o que a tira ", numerais_removidos: [], numerais_permitidos: [], editor: [] });
}, ["lista"]);

// 6. (b) numerais
recusa("b-extenso-trocado", "(b) por extenso: 'three more years' vira 'four', sem declarar", (l) => { item(l, "L26").para = "That took almost four more years."; }, ["b"]);
recusa("b-digito-trocado", "(b) em dígito: o placar oficial do território vira 213 a 204, sem declarar (L23, DA-FONTE)", (l) => { const i = item(l, "L23"); i.para = i.para.replace("213 to 203", "213 to 204"); }, ["b"]);
recusa("b-removido-sem-declarar", "(b) o CORTAR do L01 sem o numerais_removidos", (l) => { item(l, "L01").numerais_removidos = []; }, ["b"]);
recusa("b-ordinal-novo", "(b) um ordinal novo, sem declarar", (l) => { item(l, "L05").para = "In between came the second letter."; }, ["b", "d"]);
recusa("b-declarado-a-mais", "(b) declara remover um número que o texto não tem", (l) => { item(l, "L32").numerais_removidos = ["forty-two"]; }, ["b"]);
controle("b-declarado", "(b) a troca do L26 por 'four', declarada (removido three, permitido four), passa", (l) => { const i = item(l, "L26"); i.para = "That took almost four more years."; i.numerais_removidos = ["three"]; i.numerais_permitidos = ["four"]; });

// 7. (c) parágrafos
recusa("c-comentario-engole", "(c) um para abre um comentário <!-- e engole o resto da parte p4", (l) => { item(l, "L19").para = "the Army got approval <!-- revisar to extend the wall"; }, ["c"], false);
recusa("c-comentario-vira-fala", "(c) um item troca a marca <!-- p2 --> por texto falado", (l) => {
  const raw = readFileSync(R1, "utf8"); const marca = raw.match(/<!-- p2 [^\n]*-->/)[0];
  l.itens.push({ id: "X03", op: "DA-PAUTA", arquivo: "roteiro-narrador.md", de: marca, para: "Then the jetty came.", numerais_removidos: [], numerais_permitidos: [], editor: [] });
}, ["c"]);
recusa("c-parte-errada", "(c) o L01 declarado na parte p5, mas o parágrafo dono está em p1", (l) => { item(l, "L01").parte = "p5"; }, ["c"]);

// 8. (d) REDIZER
recusa("d-numero", "(d) REDIZER com número novo (declarado em permitidos, para a (b) passar)", (l) => { const i = item(l, "L05"); i.para = "In 1887 came the letter."; i.numerais_permitidos = ["1887"]; }, ["d"]);
recusa("d-data", "(d) REDIZER com mês novo", (l) => { item(l, "L05").para = "In May came the letter."; }, ["d"]);
recusa("d-nome", "(d) REDIZER com nome próprio novo no meio da frase", (l) => { item(l, "L27").para = "The strip had taken the city to the boundary lines of Wilmington."; }, ["d"]);
recusa("d-nome-no-inicio", "(d) REDIZER com nome no início da frase, que o texto escreve com maiúscula no meio de outra", (l) => { item(l, "L05").para = "Mendell's letter came in between."; }, ["d"]);
recusa("d-grupo", "(d) REDIZER com grupo de pessoas novo", (l) => { item(l, "L08").para = 'So that is what his "never" measured for the workers: not the bay, the estuary.'; }, ["d"]);
controle("d-mesmo-texto-outra-op", "(d) o mesmo para do d-nome, como ATRIBUIR, passa: a prova (d) é só do REDIZER", (l) => { const i = item(l, "L27"); i.op = "ATRIBUIR"; i.para = "The strip had taken the city to the boundary lines of Wilmington."; });

// 9. (e) o editor
const ed = readFileSync(EDITOR, "utf8");
const linhaUnica = ed.split("\n").find((x) => x.length > 40 && !x.startsWith(">") && ed.split(x).length === 2);
recusa("e-par-ausente", "(e) um par do editor que não está no roteiro-editor.md", (l) => { item(l, "L01").editor = [{ de: "uma frase que o dossiê não tem", para: "x" }]; }, ["e"]);
recusa("e-par-duplicado", "(e) um par do editor que casa mais de uma vez", (l) => { item(l, "L01").editor = [{ de: "Mendell", para: "Mendell" }]; }, ["e"]);
controle("e-par-certo", "(e) um par que casa uma vez: o editor muda, com a cópia do antes", (l) => { item(l, "L01").editor = [{ de: linhaUnica, para: linhaUnica + " (r1)" }]; }, () => {});
caso("e-par-certo-grava", "(e) o mesmo, sem --seco: o editor gravado e a cópia roteiro-editor-r1.antes.md conferida", (ok) => {
  const c = preparar("e-par-certo-grava"), l = clone(); item(l, "L01").editor = [{ de: linhaUnica, para: linhaUnica + " (r1)" }];
  const r = rodar(c, l, false);
  ok(r.codigo === 0, `exit ${r.codigo}`);
  ok(readFileSync(`${c.base}/_trabalho/roteiro-editor-r1.antes.md`).equals(readFileSync(EDITOR)), "a cópia do editor é o editor de antes");
  ok(readFileSync(`${c.base}/roteiro-editor.md`, "utf8") === ed.replace(linhaUnica, linhaUnica + " (r1)"), "o editor gravado tem o par");
});

// 10. recusa sem --seco não grava; e a segunda aplicação da mesma lista recusa pelo sha
caso("recusa-sem-seco", "uma recusa sem --seco não grava nada", (ok) => {
  const c = preparar("recusa-sem-seco"), l = clone(); item(l, "L26").para = "That took almost four more years.";
  const r = rodar(c, l, false);
  ok(r.codigo === 1, `exit ${r.codigo}`); ok(intacto(c), "o roteiro, o editor e o _trabalho/ estão como antes");
});
caso("reaplicar", "a mesma lista aplicada duas vezes: a segunda recusa pelo sha", (ok) => {
  const c = preparar("reaplicar");
  const r1 = rodar(c, LISTA, false), r2 = rodar(c, LISTA, false);
  ok(r1.codigo === 0, `1ª: exit ${r1.codigo}`); ok(r2.codigo === 1 && provas(r2.j).join() === "sha", `2ª: exit ${r2.codigo}, provas ${provas(r2.j)}`);
});

// ---------------------------------------------------------------- o resultado ----
const certos = casos.filter((c) => c.passou).length;
const resultado = { em: new Date().toISOString(), ferramenta: "ferramentas/aplicar-lista.mjs", sha256_ferramenta: sha256(readFileSync(FERRAMENTA)), casos_certos: certos, casos: casos.length, lista_convertida: `${TESTE}/lista-r1-novo.json`, detalhes: casos };
writeFileSync(`${TESTE}/resultado.json`, JSON.stringify(resultado, null, 1) + "\n");
for (const c of casos) {
  console.log(`${c.passou ? "CERTO " : "ERRADO"} ${c.nome}: ${c.descricao}`);
  for (const k of c.checks) if (!k.ok || !c.passou) console.log(`   ${k.ok ? "ok " : "NÃO"} ${k.msg}`);
  if (c.erro) console.log(`   erro: ${c.erro}`);
}
console.log(`\n${certos} de ${casos.length} casos certos · ${TESTE}/resultado.json`);
process.exit(certos === casos.length ? 0 : 1);
