#!/usr/bin/env node
// portao-fatos-provar.mjs — a prova do ferramentas/portao-fatos.mjs, sem rede.
//
// Num vídeo de teste ("teste") em out/_tmp/portao-fatos-teste/casos/<caso>/ (fora do git: a pasta ganha um .gitignore
// com "*"), cada caso monta roteiros/teste/ (roteiro-narrador.md, qc-roteiro/fatos.laudo.md e fatos-tabela.json), as
// cópias das fontes (fontes/*.txt) e a saída de uma medida (medidas/saida.txt), roda o portão com --raiz=<caso> --json
// e confere a saída: o exit e o CONJUNTO EXATO das regras dos problemas (nem a menos, nem a mais).
//   - "base": o caso que passa (5 linhas: texto, texto, imprensa, a linha L e a medição; um número por extenso na frase
//     contra o dígito no trecho; um parágrafo sem nada checável, que não pede linha).
//   - um mutante por regra (sha velho; cobertura que não bate; parágrafo com número sem linha; trecho com 3 palavras;
//     trecho com reticências; trecho que não está na cópia; imprensa com 21 palavras; medição sem arquivo; linha L sem
//     apoio; laudo PASS com linha "corrigir"; número da frase que não está no trecho), e os controles que passam
//     (a hifenização de OCR; a tipografia; "about 23,000" contra "23,559"; imprensa com 20 palavras; RESSALVA com a linha
//     "corrigir"; o conferido na imagem), mais as bordas (caminho absoluto, PDF, tabela que não se lê).
//   - o sha: o do portão, no caso base, tem de ser o que o gate.mjs do vídeo 3 (roteiros/zona-do-canal/_ferramentas/
//     gate.mjs) dá para o mesmo arquivo; e o portão, com esse gate copiado para o vídeo de teste, cruza os dois e passa.
// O vídeo de verdade não é tocado.
//
// Uso (cwd na raiz do canal): node ferramentas/portao-fatos-provar.mjs
// Saída: 0 = todos os casos certos · 1 = algum errado · 2 = não rodou. Grava out/_tmp/portao-fatos-teste/resultado.json.
import { writeFileSync, existsSync, mkdirSync, rmSync, copyFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { pathToFileURL } from "node:url";

const RAIZ = process.cwd();
const PORTAO = path.join(RAIZ, "ferramentas", "portao-fatos.mjs");
const GATE3 = path.join(RAIZ, "roteiros", "zona-do-canal", "_ferramentas", "gate.mjs");
for (const f of [PORTAO, GATE3, path.join(RAIZ, "ferramentas", "aplicar-lista.mjs")]) if (!existsSync(f)) { console.error(`NÃO RODOU — falta ${f} (rode da raiz do canal)`); process.exit(2); }
const { falado } = await import(pathToFileURL(PORTAO).href);

const TESTE = path.join(RAIZ, "out", "_tmp", "portao-fatos-teste");
const CASOS = path.join(TESTE, "casos");
rmSync(CASOS, { recursive: true, force: true });
mkdirSync(CASOS, { recursive: true });
writeFileSync(path.join(TESTE, ".gitignore"), "*\n");

// ---------------------------------------------------------------- o vídeo de teste ----
const P1 = "In 1979, after seventy-five years, the United States handed the Canal Zone back to Panama.";
const P2a = "The census of 1960 counted 23,559 people born in the United States in the Zone.";
const P2b = "The government ran the stores, the schools and the hospitals.";
const P3 = "The strip measured 16.1 kilometers from Balboa to the locks.";
const P4 = "Life there felt like a small town that never changed.";
const roteiroDe = (p2a = P2a, extra = "") => `# Teste do portão de fatos\n\n<!-- gancho -->\n${P1}\n\n> uma nota que o texto falado não lê\n\n${p2a}\n${P2b}\n\n<!-- p2 -->\n${P3}\n\n${P4}\n${extra}`;
const F3 = "The company ran the stores, the schools and the hospitals of the Zone, and it also ran the bus lines, the theaters and the funeral home, a reporter wrote in 1962.\n";
const FONTES = {
  "fontes/F1-tratado.txt": "Article II.\nIn 1979, after 75 years, the Canal Zone ceased to exist, and the territory\nreturned to the Republic of Panama.\n",
  "fontes/F2-censo.txt": "Table 3.\nPopulation born in the United States: 23,559 persons in the Canal Zone in 1960.\nTotal population: 42,122.\n",
  "fontes/F3-jornal.txt": F3,
  "medidas/saida.txt": "Balboa-locks: 16.1 km (10.0 mi)\n",
};
const tabelaBase = () => [
  { paragrafo: 1, frase: P1, afirmacao: "the Zone ended in 1979, after 75 years", veredito: "confirmada", fonte_id: "F1", arquivo_local: "fontes/F1-tratado.txt", trecho: "In 1979, after 75 years, the Canal Zone ceased to exist", classe: "texto" },
  { paragrafo: 2, frase: P2a, afirmacao: "23,559 born in the US lived in the Zone in 1960", veredito: "confirmada", fonte_id: "F2", arquivo_local: "fontes/F2-censo.txt", trecho: "born in the United States: 23,559 persons in the Canal Zone in 1960", classe: "texto" },
  { paragrafo: 2, frase: P2b, afirmacao: "the stores, schools and hospitals were run by the company", veredito: "confirmada", fonte_id: "F3", arquivo_local: "fontes/F3-jornal.txt", trecho: "ran the stores, the schools and the hospitals", classe: "imprensa" },
  { paragrafo: "p2", frase: P2b, afirmacao: "the listener concludes that the Zone ran like a company town", veredito: "confirmada", fonte_id: "F3", inferencia: true },
  { paragrafo: 3, frase: P3, afirmacao: "16.1 km from Balboa to the locks", veredito: "confirmada", fonte_id: "M1", arquivo_local: "medidas/saida.txt", trecho: "Balboa-locks: 16.1 km", classe: "medicao" },
];
function laudoDe({ sha12, tabela, cobertura, veredito = "PASS", semRevisao = false, semVeredito = false }) {
  const n = tabela.filter((l) => l.veredito === "confirmada").length, m = tabela.length;
  return [
    "# Laudo de fatos — teste", "",
    ...(semRevisao ? [] : [`Revisão julgada: \`${sha12}\` · data-base 2026-10-14`, ""]),
    `COBERTURA: ${cobertura ?? `${n} de ${m}`}. A tabela está em fatos-tabela.json.`, "",
    "## Achados", "", "Nenhum além da tabela.", "",
    ...(semVeredito ? [] : [`VEREDITO: ${veredito}`]), "",
  ].join("\n");
}

// cada caso: {nome, roteiro?, tabela?(t), fontes?(f), laudo?, extra?(dir), espera: {codigo, regras, aviso?, gate?}}
const linha = (k, mud) => (t) => { t[k] = { ...t[k], ...mud }; return t; };
const vinteUm = F3.split(" ").slice(0, 21).join(" "), vinte = F3.split(" ").slice(0, 20).join(" ");
const casos = [
  { nome: "base", espera: { codigo: 0, regras: [] } },
  { nome: "tabela-como-objeto", tabelaObjeto: true, espera: { codigo: 0, regras: [] } },
  { nome: "gate-do-video-cruzado", gateReal: true, espera: { codigo: 0, regras: [], gate: true } },
  { nome: "gate-que-diverge", gateFalso: true, espera: { codigo: 2, regras: [] } },
  // [sha]
  { nome: "sha-velho", laudo: { sha12: "0123456789ab" }, espera: { codigo: 1, regras: ["sha"] } },
  { nome: "sem-revisao-julgada", laudo: { semRevisao: true }, espera: { codigo: 1, regras: ["sha"] } },
  // [cobertura]
  { nome: "cobertura-que-nao-bate", laudo: { cobertura: "4 de 5" }, espera: { codigo: 1, regras: ["cobertura"] } },
  // [piso] e [frase]
  { nome: "paragrafo-com-numero-sem-linha", roteiro: roteiroDe(P2a, "\nSome 5,000 workers arrived in 1904.\n"), espera: { codigo: 1, regras: ["piso"] } },
  { nome: "paragrafo-com-nome-sem-linha", roteiro: roteiroDe(P2a, "\nThe town took its name from Vasco Balboa.\n"), espera: { codigo: 1, regras: ["piso"] } },
  { nome: "assinatura-sozinha-nao-pede-linha-passa", roteiro: roteiroDe(P2a, "\nYou're at Alpha Point, and this is where the story of the Canal Zone begins.\n"), espera: { codigo: 0, regras: [] } },
  { nome: "frase-que-nao-esta-no-paragrafo", tabela: linha(0, { frase: "In 1979 the United States left Panama." }), espera: { codigo: 1, regras: ["frase"] } },
  { nome: "paragrafo-que-nao-existe", tabela: linha(4, { paragrafo: 9 }), espera: { codigo: 1, regras: ["frase", "piso"] } },
  // [trecho]
  { nome: "trecho-com-3-palavras", tabela: linha(2, { trecho: "ran the stores" }), espera: { codigo: 1, regras: ["trecho"] } },
  { nome: "trecho-com-reticencias", tabela: linha(2, { trecho: "ran the stores … the hospitals" }), espera: { codigo: 1, regras: ["trecho"] } },
  { nome: "trecho-com-tres-pontos", tabela: linha(2, { trecho: "ran the stores, the schools ... the hospitals" }), espera: { codigo: 1, regras: ["trecho"] } },
  { nome: "trecho-fora-da-copia", tabela: linha(2, { trecho: "ran the shops, the schools and the hospitals" }), espera: { codigo: 1, regras: ["trecho"] } },
  { nome: "confirmada-sem-trecho", tabela: linha(0, { trecho: "" }), espera: { codigo: 1, regras: ["trecho", "numeros"] } },
  { nome: "hifenizacao-de-ocr-passa", fontes: (f) => { f["fontes/F1-tratado.txt"] = "Article II.\nIn 1979, after 75 years, the Canal Zone ceased to ex-\nist, and the territory\nreturned to the Republic of Panama.\n"; return f; }, espera: { codigo: 0, regras: [] } },
  { nome: "tipografia-passa",
    fontes: (f) => { f["fontes/F3-jornal.txt"] = "The company ran THE STORES,\n  the schools and\tthe hospitals of the Zone — “all of it,” a reporter wrote.\n"; return f; },
    tabela: linha(2, { trecho: 'ran the stores, the schools and the hospitals of the Zone - "all of it,"' }), espera: { codigo: 0, regras: [] } },
  { nome: "caminho-absoluto-dentro-passa", tabela: (t, dir) => linha(0, { arquivo_local: path.join(dir, "fontes", "F1-tratado.txt").replace(/\\/g, "/") })(t), espera: { codigo: 0, regras: [] } },
  { nome: "caminho-absoluto-fora", tabela: linha(0, { arquivo_local: "C:/Windows/win.ini" }), espera: { codigo: 1, regras: ["trecho"] } },
  { nome: "caminho-que-sai-da-raiz", tabela: linha(0, { arquivo_local: "../../../../../CLAUDE.md" }), espera: { codigo: 1, regras: ["trecho"] } },
  { nome: "copia-em-pdf", fontes: (f) => { f["fontes/F1.pdf"] = "%PDF-1.4 In 1979, after 75 years, the Canal Zone ceased to exist"; return f; }, tabela: linha(0, { arquivo_local: "fontes/F1.pdf" }), espera: { codigo: 1, regras: ["trecho"] } },
  { nome: "conferido-na-imagem-passa-com-aviso", fontes: (f) => { f["fontes/F3-p2.png"] = "imagem"; return f; },
    tabela: linha(2, { trecho: "ran the stores, the schools and the clinics", conferido_na_imagem: { arquivo: "fontes/F3-p2.png", pagina: 2 } }), espera: { codigo: 0, regras: [], aviso: true } },
  { nome: "conferido-na-imagem-que-nao-existe", tabela: linha(2, { trecho: "ran the stores, the schools and the clinics", conferido_na_imagem: { arquivo: "fontes/F3-p9.png", pagina: 9 } }), espera: { codigo: 1, regras: ["trecho"] } },
  // [imprensa]
  { nome: "imprensa-com-21-palavras", tabela: linha(2, { trecho: vinteUm }), espera: { codigo: 1, regras: ["imprensa"] } },
  { nome: "imprensa-com-20-palavras-passa", tabela: linha(2, { trecho: vinte }), espera: { codigo: 0, regras: [] } },
  // [medicao]
  { nome: "medicao-sem-arquivo", tabela: linha(4, { arquivo_local: "medidas/nao-existe.txt" }), espera: { codigo: 1, regras: ["medicao"] } },
  { nome: "medicao-sem-o-numero-da-frase", tabela: linha(4, { trecho: "(10.0 mi)" }), espera: { codigo: 1, regras: ["medicao", "numeros"] } },
  // [linha_L]
  { nome: "linha-L-sem-apoio", tabela: linha(3, { fonte_id: "F9" }), espera: { codigo: 1, regras: ["linha_L"] } },
  { nome: "linha-L-sem-o-ouvinte-conclui", tabela: linha(3, { afirmacao: "the Zone ran like a company town" }), espera: { codigo: 1, regras: ["linha_L"] } },
  { nome: "linha-L-com-apoio-nao-confirmado", tabela: linha(2, { veredito: "atribuir" }), laudo: { veredito: "RESSALVA" }, espera: { codigo: 1, regras: ["linha_L"] } },
  { nome: "linha-L-em-portugues-com-apoio-em-lista-passa", tabela: linha(3, { afirmacao: "o ouvinte conclui que a Zona funcionava como cidade de empresa", fonte_id: ["F9", "F3"] }), espera: { codigo: 0, regras: [] } },
  // [veredito]
  { nome: "laudo-PASS-com-linha-corrigir", tabela: linha(0, { veredito: "corrigir" }), espera: { codigo: 1, regras: ["veredito"] } },
  { nome: "laudo-RESSALVA-com-linha-corrigir-passa", tabela: linha(0, { veredito: "corrigir" }), laudo: { veredito: "RESSALVA" }, espera: { codigo: 0, regras: [] } },
  { nome: "laudo-sem-veredito", laudo: { semVeredito: true }, espera: { codigo: 1, regras: ["veredito"] } },
  // [numeros]
  { nome: "numero-da-frase-fora-do-trecho", tabela: linha(1, { trecho: "Population born in the United States: 23,559 persons" }), espera: { codigo: 1, regras: ["numeros"] } },
  ...[["about 23,000", 0], ["more than 23,000", 0], ["nearly 24,000", 0], ["about 30,000", 1], ["more than 24,000", 1], ["about 20,000", 1]].map(([dito, codigo]) => {
    const p2a = P2a.replace("23,559", dito);
    return { nome: `hedge-${dito.replace(/[ ,]/g, "-")}-contra-23559${codigo ? "" : "-passa"}`, roteiro: roteiroDe(p2a), tabela: linha(1, { frase: p2a }), espera: { codigo, regras: codigo ? ["numeros"] : [] } };
  }),
  { nome: "numero-marcado-por-linha-nao-confirmada-passa",
    roteiro: roteiroDe(P2a.replace(" in the Zone.", " in the Zone, out of 42,123.")),
    tabela: (t) => { const f = P2a.replace(" in the Zone.", " in the Zone, out of 42,123."); t[1] = { ...t[1], frase: f }; t.push({ paragrafo: 2, frase: f, afirmacao: "the total was 42,123", veredito: "corrigir", fonte_id: "F2", arquivo_local: "fontes/F2-censo.txt", trecho: "the Canal Zone in 1960. Total population: 42,122", classe: "texto" }); return t; },
    laudo: { veredito: "RESSALVA" }, espera: { codigo: 0, regras: [] } },
  // não rodou
  { nome: "sem-tabela", semTabela: true, espera: { codigo: 2, regras: [] } },
  { nome: "tabela-que-nao-se-le", tabelaCrua: "{ isto não é json", espera: { codigo: 2, regras: [] } },
  { nome: "opcao-desconhecida", args: ["--depressa"], espera: { codigo: 2, regras: [] } },
];

// ---------------------------------------------------------------- rodar ----
const gravar = (p, s) => { mkdirSync(path.dirname(p), { recursive: true }); writeFileSync(p, s); };
const resultados = [];
let errados = 0;
for (const c of casos) {
  const dir = path.join(CASOS, c.nome);
  const base = path.join(dir, "roteiros", "teste");
  const roteiro = c.roteiro ?? roteiroDe();
  gravar(path.join(base, "roteiro-narrador.md"), roteiro);
  const fontes = c.fontes ? c.fontes({ ...FONTES }) : { ...FONTES };
  for (const [k, v] of Object.entries(fontes)) gravar(path.join(dir, k), v);
  let tabela = tabelaBase();
  if (c.tabela) tabela = c.tabela(tabela, dir);
  if (c.tabelaCrua) gravar(path.join(base, "qc-roteiro", "fatos-tabela.json"), c.tabelaCrua);
  else if (!c.semTabela) gravar(path.join(base, "qc-roteiro", "fatos-tabela.json"), JSON.stringify(c.tabelaObjeto ? { linhas: tabela } : tabela, null, 1) + "\n");
  const sha12 = falado(roteiro).sha12;
  gravar(path.join(base, "qc-roteiro", "fatos.laudo.md"), laudoDe({ sha12, tabela, ...(c.laudo || {}) }));
  if (c.gateReal) gravar(path.join(base, "_ferramentas", "gate.mjs"), ""), copyFileSync(GATE3, path.join(base, "_ferramentas", "gate.mjs"));
  if (c.gateFalso) gravar(path.join(base, "_ferramentas", "gate.mjs"), 'console.log(JSON.stringify({sha256: "f".repeat(64)})); process.exit(1);\n');
  const r = spawnSync(process.execPath, [PORTAO, "teste", "--json", `--raiz=${dir}`, ...(c.args || [])], { encoding: "utf8", cwd: RAIZ });
  let s = null;
  try { s = JSON.parse(r.stdout); } catch {}
  const regras = s ? [...new Set((s.problemas || []).map((p) => p.regra))].sort() : null;
  const esperadas = [...c.espera.regras].sort();
  const falhas = [];
  if (r.status !== c.espera.codigo) falhas.push(`exit ${r.status}, esperado ${c.espera.codigo}`);
  if (c.espera.codigo !== 2) {
    if (!s) falhas.push("a saída não é JSON");
    else if (JSON.stringify(regras) !== JSON.stringify(esperadas)) falhas.push(`regras [${regras.join(", ")}], esperado [${esperadas.join(", ")}]`);
  }
  if (c.espera.aviso && !(s && s.avisos && s.avisos.length)) falhas.push("esperava um aviso, e não veio nenhum");
  if (c.espera.gate && !(s && s.gate && s.gate.igual === true)) falhas.push("esperava o sha cruzado com o gate.mjs, e não veio");
  if (falhas.length) errados++;
  resultados.push({ caso: c.nome, ok: !falhas.length, exit: r.status, regras, falhas, problemas: s ? (s.problemas || []).map((p) => `[${p.regra}] ${p.msg}`) : null, avisos: s?.avisos || [], erro: s?.erro || (s ? undefined : (r.stderr || r.stdout).slice(0, 300)) });
}

// o sha do portão contra o do gate.mjs do vídeo 3, no roteiro do caso base
const arqBase = path.join(CASOS, "base", "roteiros", "teste", "roteiro-narrador.md");
const g = spawnSync(process.execPath, [GATE3, arqBase], { encoding: "utf8", cwd: RAIZ });
let shaGate = null;
try { shaGate = JSON.parse(g.stdout).sha256; } catch {}
const shaPortao = resultados.find((x) => x.caso === "base") && falado(roteiroDe()).sha256;
const shaOk = !!shaGate && shaGate === shaPortao;
if (!shaOk) errados++;
resultados.push({ caso: "sha-igual-ao-do-gate-do-video-3", ok: shaOk, gate: shaGate, portao: shaPortao, falhas: shaOk ? [] : ["o sha do portão não é o do gate.mjs"] });

writeFileSync(path.join(TESTE, "resultado.json"), JSON.stringify({ quando: new Date().toISOString(), casos: resultados.length, errados, resultados }, null, 1) + "\n");
for (const x of resultados) console.log(`${x.ok ? "ok  " : "ERRO"} ${x.caso}${x.ok ? "" : ` — ${x.falhas.join("; ")}`}`);
console.log(`\n${resultados.length - errados} de ${resultados.length} casos certos`);
process.exit(errados ? 1 : 0);
