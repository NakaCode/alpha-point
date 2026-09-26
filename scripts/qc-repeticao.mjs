#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-repeticao.mjs (linhas 1-253, commit 4afda12).
// O que mudou: só a resolução do projeto — a barra invertida do Windows conta como caminho, e o slug também é procurado na
// raiz do canal. Identidade por conteúdo (tamanho → md5 por stream), filtro de símbolo e o corte GRAVE=4 ficaram como estavam.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-repeticao.mjs — acusa a MESMA mídia usada em mais de uma cena do mesmo vídeo (ARTE-60).
 *
 * POR QUE EXISTE (Mateus, 25/jul, sobre a versão nova do `senna`): *"tiveram repetições da mesma
 * forma diversas vezes… uma imagem/vídeo deve aparecer uma única vez e não repetir de novo durante o
 * vídeo, pois fica chato e cansativo"*.
 *
 * A segunda aparição de uma imagem não acrescenta informação e ainda avisa o espectador de que o
 * vídeo está esticando material. É o defeito do plano genérico, com agravante: já foi visto.
 *
 * ⚠️ A EXCEÇÃO É SEMÂNTICA, e por isso este gate ACUSA em vez de reprovar sozinho: quando o roteiro
 * **retoma o gancho** que remete àquela imagem, a volta é deliberada e o espectador a lê como rima.
 * Nenhum script sabe distinguir rima de preguiça — quem decide é quem conhece o roteiro. O papel do
 * gate é garantir que a decisão seja TOMADA, não passar batido.
 *
 * Marque a volta deliberada com `data-gancho="por quê"` no elemento, e ela sai do relatório.
 *
 * ── 02/ago/2026 · O QUE ESTA VERSÃO CONSERTA (medido no acervo da VM, 11 projetos) ──────────────
 *
 * O Mateus perguntou se a repetição *"foi corrigida, por sinal?"*. A lei existia, o gate existia —
 * e mesmo assim o `senna` estava com 7 mídias repetidas (a pior em 6 cenas) e o
 * `galaxia-arco-flecha` com 11 (a pior em 9 cenas). Medir de novo revelou dois defeitos NO GATE:
 *
 * 1 · ELE COMPARAVA CAMINHO, NÃO CONTEÚDO. O mesmo arquivo salvo em duas pastas — ou com dois
 *     nomes — passava como duas mídias distintas. Medido: `orcas-nao-matam` reportava ZERO e tem
 *     163 MB do MESMO vídeo em quatro pastas (`c01`, `c05`, `t01`, `t03`), servindo quatro cenas —
 *     e num dos casos com nome diferente (`orca_wild_swimming_close` × `..._pod`), o que derrota
 *     também qualquer comparação por nome. Na casa inteira: 5 grupos de gêmeos-por-conteúdo,
 *     21 cenas, 1,18 GB de bytes redundantes, tudo invisível. Agora a identidade da mídia é o
 *     HASH do conteúdo, não o caminho.
 *
 * 2 · O FILTRO DE SÍMBOLO ERA ESTREITO E GRITAVA À TOA. Ele reconhecia `flags/` (pasta) e
 *     `logos/`, mas não `flag-uy.png` nem a pasta `logo/` no singular. Resultado: a PIOR
 *     "repetição" do `uruguai-despovoado` era a bandeira do Uruguai (4×, correta), e o
 *     `galaxia-arco-flecha` era acusado pelo logo da MNRAS. Alarme falso é bug de prioridade alta:
 *     ele ensina a ignorar o gate justamente quando ele acerta.
 *
 * ── SEVERIDADE, E DE ONDE SAI O NÚMERO ──────────────────────────────────────────────────────────
 *
 * Distribuição medida no acervo da VM (35 assets repetidos, 11 projetos com ≥5 cenas):
 *
 *      2 cenas ███████████████████████████ 27      ≥2 ....  35 (100%)
 *      3 cenas ███  3                              ≥3 ....   8  (23%)
 *      4 cenas ██   2                              ≥4 ....   5  (14%)
 *      6 cenas ██   2                              ≥6 ....   3   (9%)
 *      9 cenas █    1                              ≥9 ....   1   (3%)
 *
 * O joelho está entre 3 e 4: 86% das repetições da casa vivem em 2–3 cenas, e a cauda de ≥4 é
 * onde moram exatamente os dois casos que o Mateus VIU e reclamou (senna 6×, galáxia 9×). Daí o
 * limite de GRAVE = 4: numa lista de ~40 cenas, a mesma imagem em 4 delas aparece em uma cena a
 * cada dez, e aí não é rima, é o vídeo tendo uma imagem só. Abaixo disso o gate ALERTA e não
 * bloqueia — reprovar 2× pararia 6 dos 11 projetos da casa, e gate que para tudo é gate ignorado.
 *
 * Uso: node scripts/qc-repeticao.mjs <proj|out/proj> [--grave] [--limite=N] [--json]
 *   (sem flag)   exit 1 se houver QUALQUER repetição sem gancho declarado — o modo advisory que o
 *                `finalizar.mjs` consome desde 26/jul; ele marca ALERTA e segue.
 *   --grave      exit 1 SÓ na cauda (≥ limite). É este o modo do checkpoint pré-render, onde
 *                bloquear tem custo: cena reprovada aqui ainda não virou 4K.
 *   --limite=N   move o corte de GRAVE (padrão 4).
 */
import { readdirSync, readFileSync, existsSync, statSync, createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { join, resolve, basename, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";

const argv = process.argv.slice(2);
const alvo = argv.find((a) => !a.startsWith("--"));
const JSON_OUT = argv.includes("--json");
const SO_GRAVE = argv.includes("--grave");
const LIMITE = +(argv.find((a) => a.startsWith("--limite="))?.split("=")[1] || 4);
if (!alvo) { console.error("uso: node scripts/qc-repeticao.mjs <proj|out/proj> [--grave] [--limite=N] [--json]"); process.exit(2); }

// aceita tanto o slug (`senna`) quanto o caminho (`out/senna`) — o `top10 qc` passa caminho, o
// `finalizar.mjs` passa slug, e um gate que só entende um dos dois vira bug de fiação.
// [porte Régie] a barra do Windows ("out\\x") conta como caminho, como a "/"; e quando o slug não está
// debaixo do terminal, procura na raiz do CANAL — o dono no Windows abre o terminal onde quiser.
const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const proj = basename(alvo.replace(/[\\/]+$/, ""));
let PROJ = /[\\/]/.test(alvo) ? alvo.replace(/[\\/]+$/, "") : join("out", proj);
if (!existsSync(join(PROJ, "graphics")) && !isAbsolute(PROJ) && existsSync(join(RAIZ, PROJ, "graphics"))) PROJ = join(RAIZ, PROJ);
const D = join(PROJ, "graphics");
if (!existsSync(D)) { console.error(`✗ não achei ${D}`); process.exit(1); }

// normaliza o caminho da mídia: o que importa é o ARQUIVO, não como cada cena o escreveu
// (absoluto, relativo, com query de cache — tudo aponta para o mesmo pixel na tela).
const normalizar = (s) => {
  let v = s.split("?")[0].split("#")[0].trim();
  v = v.replace(/\\/g, "/");
  const i = v.lastIndexOf("/_media/");
  if (i >= 0) v = v.slice(i + 1);            // tudo a partir de _media/
  return v.replace(/^\.\//, "");
};
const ehMidia = (s) => /\.(jpg|jpeg|png|webp|gif|mp4|mov|webm|avif|svg)$/i.test(s.split("?")[0]);

/**
 * SÍMBOLO ≠ MÍDIA ILUSTRATIVA — e confundir os dois transforma o gate em alarme falso.
 *
 * A bandeira da Alemanha DEVE aparecer toda vez que a Alemanha for citada; o logo da Nvidia idem.
 * São elementos de IDENTIFICAÇÃO: repeti-los é o comportamento correto, e trocá-los por "variação"
 * seria erro factual. A regra do Mateus é sobre material ILUSTRATIVO — a foto, o footage, a imagem
 * que existe para preencher a tela: essa, vista duas vezes, avisa que o vídeo está esticando.
 *
 * Medido ao estrear o gate: das 7 "repetições" no compilado, 7 eram bandeiras e logos. Zero eram o
 * defeito real. Sem esta distinção o gate gritaria em todo projeto e seria ignorado no terceiro.
 *
 * ⚠️ 02/ago: a lista era estreita demais e o alarme falso voltou por dois buracos de GRAFIA —
 * `flag-uy.png` (bandeira fora da pasta `flags/`) e `_media/logo/` (pasta no SINGULAR, enquanto o
 * padrão só cobria `logos/`). Eram, respectivamente, a pior acusação do `uruguai-despovoado` e uma
 * das 11 do `galaxia-arco-flecha`. Símbolo é o que IDENTIFICA — a família de nomes é ampla porque
 * quem batiza o arquivo não consulta o gate.
 */
const ehSimbolo = (s) =>
     /(^|\/)(flags?|logos?|brand|brasoes?|bandeiras?)[-_/]/i.test(s)   // flags/ · flag-uy.png · logo/ · logo_x
  || /\/(flags?|logos?|brand|marcas?|escudos?)\//i.test(s)             // qualquer pasta de identidade
  || /(^|\/)[^/]*(-logo|logo-|bandeira|brasao|icone-)/i.test(s);       // sufixo/prefixo no nome do arquivo

// ── 1 · quem usa o quê ──────────────────────────────────────────────────────────────────────────
const usos = new Map();      // caminho normalizado → [{cena, gancho, bruto}]
const cenas = readdirSync(D).filter((f) => f.endsWith(".html") && !f.startsWith("_") && !f.startsWith(".")).sort();
for (const f of cenas) {
  const src = readFileSync(join(D, f), "utf8");
  const cena = f.replace(/\.html$/, "");
  const vistos = new Set();
  // pega src="..." e url(...) — as duas formas de trazer mídia para a tela
  for (const m of src.matchAll(/(?:src|href)\s*=\s*["']([^"']+)["']|url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
    const bruto = m[1] || m[2];
    if (!bruto || !ehMidia(bruto)) continue;
    if (ehSimbolo(bruto)) continue;     // bandeira/logo/brasão: repetir é o correto
    const arq = normalizar(bruto);
    if (vistos.has(arq)) continue;            // repetir DENTRO da mesma cena é composição, não reuso
    vistos.add(arq);
    // gancho declarado: procura `data-gancho` na mesma tag
    const trecho = src.slice(Math.max(0, m.index - 400), m.index + 400);
    const gancho = (trecho.match(/data-gancho\s*=\s*["']([^"']*)["']/) || [])[1] || null;
    if (!usos.has(arq)) usos.set(arq, []);
    usos.get(arq).push({ cena, gancho, bruto });
  }
}

// ── 2 · IDENTIDADE POR CONTEÚDO ─────────────────────────────────────────────────────────────────
/**
 * Dois caminhos com os mesmos bytes são UMA mídia na tela do espectador — ele não vê o nome do
 * arquivo. A comparação é em dois estágios, como todo desduplicador honesto: primeiro o TAMANHO
 * (grátis, um `stat`), e só nos empates o hash. Numa produção típica isso significa hashear zero
 * arquivo; no `orcas-nao-matam`, quatro grupos.
 *
 * ⚠️ Mídia AUSENTE não é falha aqui. Depois da entrega, `_media` é apagado de propósito (REND-18):
 * o gate então cai de volta na comparação por caminho e DIZ que caiu, em vez de fingir que mediu.
 * Ausência tratada como defeito foi a armadilha que o `qc-midia-real` aprendeu a desviar.
 */
const hashArquivo = (p) => new Promise((res, rej) => {
  const h = createHash("md5");                        // integridade não é a questão; identidade é
  const s = createReadStream(p);                      // stream: `readFileSync` estoura em >2 GiB
  s.on("data", (d) => h.update(d));
  s.on("end", () => res(h.digest("hex")));
  s.on("error", rej);
});

const noDisco = (arq, brutos) => {
  for (const b of brutos) {                            // o caminho como a cena escreveu, a partir do HTML
    const p = resolve(D, b.split("?")[0].split("#")[0]);
    if (existsSync(p) && statSync(p).isFile()) return p;
  }
  for (const p of [join(PROJ, arq), join(D, arq), resolve(arq)])
    if (existsSync(p) && statSync(p).isFile()) return p;
  return null;
};

const porTamanho = new Map();
let resolvidos = 0;
for (const [arq, u] of usos) {
  const p = noDisco(arq, [...new Set(u.map((x) => x.bruto))]);
  if (!p) continue;
  resolvidos++;
  const t = statSync(p).size;
  if (!porTamanho.has(t)) porTamanho.set(t, []);
  porTamanho.get(t).push({ arq, p });
}
const ausentes = usos.size - resolvidos;

const canonico = new Map();     // caminho normalizado → identidade (hash quando há gêmeo)
const gemeos = [];              // grupos de caminhos distintos com o MESMO conteúdo
for (const [, v] of porTamanho) {
  if (v.length < 2) continue;
  const porHash = new Map();
  for (const x of v) {
    let h; try { h = await hashArquivo(x.p); } catch { continue; }
    if (!porHash.has(h)) porHash.set(h, []);
    porHash.get(h).push(x);
  }
  for (const [h, g] of porHash) {
    if (g.length < 2) continue;
    gemeos.push({ hash: h.slice(0, 8), tamanho: statSync(g[0].p).size, caminhos: g.map((x) => x.arq) });
    for (const x of g) canonico.set(x.arq, `hash:${h.slice(0, 8)}`);
  }
}

// funde os usos pela identidade de conteúdo
const porIdentidade = new Map();
for (const [arq, u] of usos) {
  const id = canonico.get(arq) || arq;
  if (!porIdentidade.has(id)) porIdentidade.set(id, { arquivos: new Set(), usos: [] });
  const e = porIdentidade.get(id);
  e.arquivos.add(arq);
  e.usos.push(...u);
}

// ── 3 · o veredito ──────────────────────────────────────────────────────────────────────────────
const repetidos = [...porIdentidade.entries()]
  .map(([id, e]) => {
    // a unidade é a CENA distinta: a mesma mídia duas vezes na mesma cena é composição, não reuso
    const porCena = new Map();
    for (const x of e.usos) if (!porCena.has(x.cena)) porCena.set(x.cena, x.gancho);
    return { id, arquivo: [...e.arquivos][0], arquivos: [...e.arquivos], gemeo: e.arquivos.size > 1,
             vezes: porCena.size, cenas: [...porCena.keys()],
             ganchos: [...porCena.values()].filter(Boolean) };
  })
  .filter((r) => r.vezes > 1)
  .sort((a, b) => b.vezes - a.vezes);

const semJustificativa = repetidos.filter((r) => r.ganchos.length < r.vezes - 1);
const graves = semJustificativa.filter((r) => r.vezes >= LIMITE);
const reprova = SO_GRAVE ? graves.length > 0 : semJustificativa.length > 0;

if (JSON_OUT) {
  console.log(JSON.stringify({ proj, cenas: cenas.length, assets: usos.size, resolvidos, ausentes,
    limite: LIMITE, gemeos, repetidos, semJustificativa, graves }, null, 1));
  process.exit(reprova ? 1 : 0);
}

console.log(`\n══ REPETIÇÃO DE MÍDIA · ${proj} · ${cenas.length} cenas · ${usos.size} assets ══\n`);
if (ausentes)
  console.log(`  ℹ ${ausentes}/${usos.size} asset(s) fora do disco — comparação por CAMINHO neles (faxina pós-entrega, REND-18).\n`);

if (gemeos.length) {
  console.log(`  ⧉ MESMO ARQUIVO, NOMES DIFERENTES (${gemeos.length} grupo(s)) — o caminho engana, o conteúdo não:`);
  for (const g of gemeos)
    console.log(`      ${g.hash} · ${(g.tamanho / 1048576).toFixed(2)} MB · ${g.caminhos.join("  =  ")}`);
  console.log();
}

if (!repetidos.length) { console.log("  ✓ nenhuma mídia aparece em mais de uma cena\n"); process.exit(0); }

for (const r of repetidos) {
  const ok = r.ganchos.length >= r.vezes - 1;
  const sev = ok ? "•" : r.vezes >= LIMITE ? "✗ GRAVE" : "▲ alerta";
  console.log(`  ${sev} ${r.vezes}× ${r.arquivo}${r.gemeo ? `  (+${r.arquivos.length - 1} cópia(s) com outro nome)` : ""}`);
  console.log(`      ${r.cenas.join(" · ")}`);
  if (r.ganchos.length) console.log(`      gancho declarado: ${r.ganchos.join(" | ")}`);
}
console.log(`\n  ${repetidos.length} mídia(s) repetida(s) · ${semJustificativa.length} SEM gancho declarado · ${graves.length} GRAVE (≥${LIMITE} cenas)`);
if (semJustificativa.length) {
  console.log(`\n  ARTE-60: a mesma imagem duas vezes cansa e avisa que o vídeo está esticando material.`);
  console.log(`  Troque por mídia nova (o stock é ilimitado), ou — se a volta é deliberada porque o roteiro`);
  console.log(`  retoma o gancho — marque no elemento: data-gancho="o roteiro volta a X aqui".\n`);
}
process.exit(reprova ? 1 : 0);
