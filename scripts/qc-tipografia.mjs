#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-tipografia.mjs (linhas 1-170, commit 4afda12).
// O que mudou: família e pesos da marca vêm de marca/tokens.css do canal (fallback: tokens neutros do motor) pelo leitor da
// casa, scripts/lib/marca-tokens.mjs; nova checagem de FAMÍLIA fora da marca (ARTE-161, reprova); var(--peso-*) é resolvido; peso sem
// face na marca e família por variável JS são aviso; o PISO DE PESO é da MARCA (--peso-minimo do tokens; o 600 da ARTE-148 é o
// do Top10, medido na Neue Haas), nunca abaixo de 400, e 400 quando a marca não declara (decisão I3); a suspeita de glifo em
// caixa alta lê os pesos que a PRÓPRIA marca mediu e proibiu (--pesos-proibidos-caixa-alta, do provar-fonte) — saiu a Neue Haas
// cravada e o escape "Helvetica Neue"; aceita pasta de cenas soltas (regua/Mxx); sem tokens a família sai NÃO MEDIDA (exit 2);
// alvo inexistente (o *.html que o terminal do Windows não expande) e pasta sem cena saem 2, não 1.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
//
// A TIPOGRAFIA DA CENA É A DA MARCA? — peso, família e consistência entre cenas do MESMO vídeo.
//
//   node scripts/qc-tipografia.mjs <proj> [--json]
//   node scripts/qc-tipografia.mjs <proj>/graphics/s07-x.html
//
// ── POR QUE EXISTE ──────────────────────────────────────────────────────────────────────────────
// O Mateus, revendo o `o-acre` em 08/ago/2026: *"A s07 parece estar com a fonte diferente (Neue Haas)
// da s08. A s08 está como eu gosto, a s07 está mais fina e diferente, parece outra fonte. s21 também
// parece estar com a fonte feia do s07."*
//
// Medido, e a diferença é objetiva — não é impressão:
//
//     s07 (a que ele reprovou) ....... font-weight  500 · 700 · 900
//     s08 (a que ele aprovou) ........ font-weight  600 · 800 · 900
//
// **Peso 500 é Medium.** Na Neue Haas Grotesk Display Pro ele é visivelmente mais fino que o 600, e
// num palco 4K a diferença aparece como "outra fonte" — que foi exatamente a palavra dele.
//
// A casa já tinha METADE desta régua: o CLAUDE.md registra que Bold (600–749) desenha Ã/Õ maiúsculos
// errado e manda usar 900 em caps acentuadas. Faltava o piso de baixo — ninguém dizia quão FINO podia
// ser. O resultado é o que se vê: cada cena escolheu um peso, e o vídeo saiu com duas tipografias.
//
// ── AS TRÊS CHECAGENS ───────────────────────────────────────────────────────────────────────────
// 1. **PISO 600** em qualquer texto visível. Abaixo disso não é a voz da marca. [porte Régie: o piso é o da MARCA
//    (--peso-minimo), nunca abaixo de 400; o 600 é o do Top10 — ver PISO_OFICIO abaixo]
// 2. **900 em CAPS ACENTUADAS** — a regra que já existia, agora com gate (Ã/Õ quebram em 600–749).
// 3. **CONSISTÊNCIA NO VÍDEO** — o conjunto de pesos de uma cena não pode divergir do conjunto que o
//    vídeo usa na maioria das cenas. É esta que pega o caso do Mateus: a s07 não estava "errada"
//    sozinha, estava DIFERENTE das irmãs. *Defeito de conjunto não aparece em gate de cena isolada.*
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, basename, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { lerMarca, lerVariaveis } from "./lib/marca-tokens.mjs";

// [porte Régie] fileURLToPath em vez de import.meta.dirname: o dirname só existe a partir do Node 20.11 e o
// canal declara >=22.13, mas manter a forma dos outros scripts portados evita o terceiro dialeto.
const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const argv = process.argv.slice(2);
const JSONOUT = argv.includes("--json");
const alvo = argv.find((a) => !a.startsWith("--"));
if (!alvo) { console.error("uso: qc-tipografia.mjs <proj> | <caminho.html> [--json]"); process.exit(2); }

/* [porte Régie] O PISO DE PESO É DA MARCA — e o ofício só põe o chão (decisão I3 da integração v1).
 *
 * No estúdio o piso era 600, cravado como "ofício". Não é: a ARTE-148 foi medida na Neue Haas Grotesk Display
 * Pro do Top10, onde o Medium (500) lê como "outra fonte" no palco 4K — é uma decisão da MARCA do Top10
 * (docs/MARCA.md lista "piso de 600 em todo texto visível" como exemplo de marca). Cravado aqui, ele reprovava
 * toda cena que seguisse a própria marca do canal: a marca neutra do motor declara `--peso-texto: 400` para
 * corpo, legenda e crédito, e o editor-de-arte "consertaria" subindo para 600, contra a marca.
 * Agora:
 *   · a marca declara o piso em `--peso-minimo` no tokens.css (o Top10 escreveria 600);
 *   · sem a declaração, o piso é 400 — o da marca neutra;
 *   · e nunca abaixo de 400, que é o chão de ofício (abaixo do Regular a fonte fica fina demais para a TV).
 * O piso de TAMANHO (260/104/72/72 no 4K) continua ofício e mora em marca-tokens.mjs. */
const PISO_OFICIO = 400;

/* ── [porte Régie] A MARCA DO CANAL: família e pesos vêm de marca/tokens.css ─────────────────────
 *
 * No estúdio a família era uma só e implícita (a Neue Haas do Top10), e este gate nem a lia — a
 * [ARTE-161] ("a fonte errada não era o PESO, era a FAMÍLIA") pegou a outra metade só por conserto em
 * massa, sem gate. No canal a família é decisão da marca, e mora no `marca/tokens.css` do canal:
 *   · `--fonte`         a pilha; a 1ª família é a da marca (a marca neutra chama a face de "Marca");
 *   · `@font-face`      as faces que a marca de fato CARREGA, com os pesos que existem em arquivo;
 *   · `--peso-*`        os pesos por papel (herói, título, rótulo, texto).
 * Sem `marca/tokens.css` no canal vale o tokens NEUTRO do motor (src/cena/marca-padrao/tokens.css) —
 * a mesma regra de fallback que a cena segue. Sem nenhum dos dois, a checagem de FAMÍLIA sai NÃO
 * MEDIDA (exit 2) e o piso de peso, que é ofício, continua valendo.
 *
 * O LEITOR É O DA CASA: `scripts/lib/marca-tokens.mjs` (lerMarca), o mesmo dos portões visuais — uma
 * regra de fallback só, para o portão de tipografia e o de tamanho nunca discordarem de qual é a marca.
 * Daqui só sai a TRADUÇÃO para o que este gate pergunta (família permitida, pesos com face, --peso-*). */
function lerTokensDaMarca() {
  let m;
  try { m = lerMarca(); }
  catch (e) { console.error(`✗ ${e.message}`); process.exit(2); }   // REGIE_MARCA_TOKENS apontando para o nada
  if (!m || m.origem === "oficio" || !m.familia) return null;       // sem marca: a família não se mede
  const origem = m.origem === "canal" ? "marca/tokens.css do canal"
    : /^motor/.test(m.origem) ? "tokens NEUTROS do motor (o canal não tem marca/tokens.css)"
    : `${m.origem} = ${m.arquivo}`;
  const principal = m.familia;
  // o peso de uma @font-face pode ser um número ("600") ou uma FAIXA de fonte variável ("100 900")
  const faixa = (peso) => { const n = String(peso).match(/\d{3}/g)?.map(Number) || [400]; return [n[0], n[n.length - 1]]; };
  const facesDaPrincipal = m.faces.filter((f) => f.familia.toLowerCase() === principal.toLowerCase()).map((f) => faixa(f.peso));
  return {
    arquivo: m.arquivo, origem, principal, pilha: [principal, ...m.reservas],
    // quem a cena pode nomear direto: a família principal e toda face que o tokens CARREGA
    permitidas: new Set([principal, ...m.faces.map((f) => f.familia)].filter(Boolean).map((f) => f.toLowerCase())),
    temFace: (p) => facesDaPrincipal.some(([a, b]) => p >= a && p <= b),
    facesTxt: facesDaPrincipal.map(([a, b]) => (a === b ? `${a}` : `${a}–${b}`)).join("/"),
    temFaces: facesDaPrincipal.length > 0,
    // `--peso-minimo` é o PISO, não o peso de um papel (herói, título…): fica fora da lista de pesos resolvíveis
    pesos: Object.fromEntries(Object.entries(m.pesos).filter(([k]) => k !== "minimo").map(([k, v]) => [`peso-${k}`, v])),
    ...lerPisoECaixaAlta(m.arquivo),
  };
}

/** [porte Régie] `--peso-minimo`, `--peso-caixa-alta` e `--pesos-proibidos-caixa-alta` do tokens (o gerador de marca do motor,
 *  src/marca/tokens.mjs, grava os dois últimos a partir do que o provar-fonte MEDIU na fonte do canal). */
function lerPisoECaixaAlta(arquivo) {
  let v = {};
  try { v = arquivo ? lerVariaveis(readFileSync(arquivo, "utf8")) : {}; } catch { v = {}; }
  const n = (x) => { const k = Number(String(x ?? "").trim()); return Number.isFinite(k) && k > 0 ? k : null; };
  const pesoMinimo = n(v["--peso-minimo"]);
  const proibidos = String(v["--pesos-proibidos-caixa-alta"] || "").replace(/["']/g, " ").match(/\d{3}/g)?.map(Number) || [];
  return { pesoMinimo, pesoCaixaAlta: n(v["--peso-caixa-alta"]), proibidosCaixaAlta: new Set(proibidos) };
}
const MARCA = lerTokensDaMarca();
// [porte Régie] o piso efetivo: o da marca, com o chão de ofício por baixo (I3)
const PISO = Math.max(PISO_OFICIO, MARCA?.pesoMinimo ?? PISO_OFICIO);
const PISO_DE = MARCA?.pesoMinimo
  ? (MARCA.pesoMinimo < PISO_OFICIO ? `--peso-minimo ${MARCA.pesoMinimo} da marca, subido ao chão de ofício ${PISO_OFICIO}` : `--peso-minimo da marca`)
  : `a marca não declara --peso-minimo: vale o chão de ofício ${PISO_OFICIO}`;

/** A 1ª família de um valor de font-family, sem aspas; `var(--x)` volta como está. */
function primeiraFamilia(valor) {
  let v = String(valor).trim();
  if (/^var\(/i.test(v)) return (v.match(/^var\([^)]*\)/i) || [v])[0];
  if (/^["']/.test(v)) { const q = v[0]; const fim = v.indexOf(q, 1); return fim > 0 ? v.slice(1, fim).trim() : v.slice(1).trim(); }
  return v.split(",")[0].trim();
}
const NEUTRAS = /^(inherit|initial|unset|revert|revert-layer)$/i;

/** As famílias que a cena DECLARA: CSS (bloco e inline), atributo SVG e objeto JS. */
function familiasDe(html) {
  const out = [];
  const semCom = semComentarios(html);
  // CSS: `font-family: X, Y;` — num atributo style="…" o valor termina na aspa que fecha o atributo
  for (const m of semCom.matchAll(/(?<![\w-])font-family\s*:\s*([^;{}<>\n]+)/gi)) {
    const bruto = m[1].replace(/\s*["']\s*(?:\w[\w-]*\s*=|\/?>|$).*$/, "");   // corta o resto da tag
    out.push(bruto);
  }
  // SVG: font-family="X, Y"
  for (const m of semCom.matchAll(/(?<![\w-])font-family\s*=\s*(["'])([^"']*)\1/gi)) out.push(m[2]);
  // JS: fontFamily = "…" · "font-family": "…"
  for (const m of semCom.matchAll(/(?:\bfontFamily|["']font-family["'])\s*[:=]\s*(["'`])((?:(?!\1).)*)\1/g)) out.push(m[2]);
  return out.map((v) => v.trim()).filter(Boolean);
}

/** Uma declaração de família é da marca? `null` = não dá para saber estaticamente (template JS). */
function familiaDaMarca(valor) {
  const f = primeiraFamilia(valor);
  if (!f || NEUTRAS.test(f)) return true;
  if (/^var\(\s*--fonte/i.test(f)) return true;
  if (/^var\(/i.test(f) || /^\$|\$\{/.test(f)) return null;   // variável CSS alheia ou template JS: não resolvível aqui
  return MARCA ? MARCA.permitidas.has(f.toLowerCase()) : null;
}

/** [porte Régie] O defeito de glifo em caixa alta é MEDIDO por fonte, não presumido: o provar-fonte do motor desenha
 *  ÃÕÇ em cada peso da fonte do canal e grava os que falham em `--pesos-proibidos-caixa-alta` (no Top10 era a Neue
 *  Haas, 600–749, cravada aqui). Marca sem peso proibido = suspeita sem base, e alarme sem base ensina a ignorar o
 *  gate ([SIS-154]). */
const PROIBIDOS_CAIXA_ALTA = MARCA?.proibidosCaixaAlta || new Set();

/* ⚠️ SÓ Ã/Õ E Ç — e a lista curta é a correção, não um descuido (10/ago/2026, QC do `ceuta`).
 * A régua era /[ÃÕÁÀÂÉÊÍÓÔÚÇ]/, e os defeitos de glifo MEDIDOS na Neue Haas são dois: o TIL
 * maiúsculo (só na Bold, 600–749) e a CEDILHA maiúscula (em todos os pesos). Á/À/Â/É/Ê/Í/Ó/Ô/Ú
 * desenham certo em qualquer peso — acusá-los fazia o gate reprovar `ARGÉLIA`, `POLÍTICA`,
 * `POLICÍA NACIONAL` e `EX-COLÔNIA ESPANHOLA` por um defeito que elas não têm. Quatro das nove
 * reprovações do `ceuta` eram isso. */
const CAPS_ACENTUADAS = /[ÃÕÇ]/;

/** Comentários fora: `//`, `/* *​/` e `<!-- -->`. Sem isto o gate lê a PROSA DO CABEÇALHO como
 *  texto de tela — no `ceuta` ele reprovou a `s85` citando "€ 105 MILHÕES · UNIÃO EUROPEIA", uma
 *  linha que começa com `//` e nunca chegou ao quadro. */
const semComentarios = (html) => html
  .replace(/<!--[\s\S]*?-->/g, " ")
  .replace(/\/\*[\s\S]*?\*\//g, " ")
  .replace(/^[ \t]*\/\/.*$/gm, " ");

/** Pesos declarados: CSS (`font-weight: N`) e atributo SVG.
 *
 * ⚠️ O TERCEIRO EXTRATOR FOI RETIRADO, e vale mais que a linha que ele era. Era
 * `/\bw\s*:\s*(\d{3})\b/` — "o helper `{w:N}` das cenas" —, e ele não distingue PESO de LARGURA.
 * No `ceuta` ele leu `w:120+h1(i*3)*180` (a largura de uma partícula, s115) e `{id:'b1', x:905,
 * w:340, v:72}` (a largura das barras do ranking, s28) como font-weight 120 e 340, e as duas cenas
 * saíram "⛔ ABAIXO DO PISO: fino demais para a marca". Os arquivos só têm 600/700/800/900.
 * `w:` é a abreviação mais comum de WIDTH em qualquer rig de desenho; casá-la com peso de fonte
 * garante falso positivo em toda cena que anima caixas. Peso declarado em objeto JS se escreve
 * `"font-weight"`, e o segundo extrator já o pega. */
function pesosDe(html) {
  const out = [];
  for (const m of html.matchAll(/font-weight\s*:\s*(\d{3})/g)) out.push(+m[1]);
  for (const m of html.matchAll(/["']font-weight["']\s*[,:]\s*["']?(\d{3})/g)) out.push(+m[1]);
  // [porte Régie] a cena do canal escreve `font-weight: var(--peso-titulo)`: o peso real é o do tokens.
  // Sem esta resolução o gate ficaria cego justamente para a forma que a régua do canal manda usar.
  if (MARCA) for (const m of html.matchAll(/font-weight\s*:\s*var\(\s*--(peso-[\w-]+)/g)) if (MARCA.pesos[m[1]]) out.push(MARCA.pesos[m[1]]);
  return out;
}
/** Textos em caps com Ã/Õ/Ç — os que quebram. Comentário não é tela. */
function capsAcentuadas(html) {
  const out = [];
  for (const m of semComentarios(html).matchAll(/["'`]([^"'`<>{}]{3,60})["'`]/g)) {
    const s = m[1];
    if (s === s.toUpperCase() && CAPS_ACENTUADAS.test(s) && /[A-ZÀ-Þ]{3}/.test(s)) out.push(s);
  }
  return [...new Set(out)];
}
/* [porte Régie] O escape por FAMÍLIA do estúdio ("Helvetica Neue" no bloco, [ARTE-120]) era a cura da Neue Haas do Top10 e
 * saiu com ela: no canal a cura é o peso que a marca liberou para caixa alta, var(--peso-caixa-alta). */

const cenas = [];
// [porte Régie] alvo inexistente é NÃO MEDI (2) com a dica — no PowerShell/cmd o `*.html` chega LITERAL, e o ENOENT saía 1.
const naoAchei = (onde) => {
  console.error(`✗ não achei ${onde} — NÃO MEDIDO (não é reprovação).`);
  if (/[*?]/.test(alvo)) console.error("  O terminal do Windows não expande *.html: passe o projeto ou a PASTA das cenas (ex.: out\\<proj>\\graphics).");
  process.exit(2);
};
if (/[*?]/.test(alvo)) naoAchei(alvo);
if (alvo.endsWith(".html")) {
  const p = existsSync(alvo) ? alvo : join(RAIZ, alvo);
  if (!existsSync(p)) naoAchei(alvo);
  cenas.push({ id: basename(p, ".html"), html: readFileSync(p, "utf8") });
} else {
  // [porte Régie] aceita <proj>, out/<proj> (/ ou \), a pasta do projeto ou uma pasta de cenas soltas
  // (a régua do canal, regua/Mxx/). Antes, só o slug.
  const limpo = alvo.replace(/[\\/]+$/, "");
  const cand = isAbsolute(limpo) ? limpo : /^out[\\/]/.test(limpo) ? join(RAIZ, limpo)
    : existsSync(limpo) && statSync(limpo).isDirectory() ? resolve(limpo) : join(RAIZ, "out", limpo);
  const G = existsSync(join(cand, "graphics")) ? join(cand, "graphics") : cand;
  if (!existsSync(G)) naoAchei(G);   // [porte Régie] era exit 1
  for (const f of readdirSync(G).filter((x) => x.endsWith(".html") && !x.startsWith("_") && !x.startsWith(".")))
    cenas.push({ id: f.replace(/\.html$/, ""), html: readFileSync(join(G, f), "utf8") });
}
if (!cenas.length) { console.error("✗ nenhuma cena para analisar — NÃO MEDIDO (zero de zero não é aprovação)"); process.exit(2); }   // [porte Régie] era 1

/* ⚠️ A CHECAGEM DE "PERFIL DA MAIORIA" FOI RETIRADA — ela nasceu e morreu em 08/ago/2026, e o
 * porquê vale mais que ela.
 *
 * A ideia era pegar a cena que destoa das irmãs. Rodada no `o-acre`, deu duas respostas erradas
 * seguidas. Primeiro, tirando o perfil da maioria crua: como **35 das 71 cenas usam peso 500**, o
 * perfil virou `500 · 900` e o gate acusou a `s08` — a cena que o Mateus APROVOU — de destoar.
 * Depois, calculando o perfil só entre as cenas acima do piso, ele virou `900` sozinho, e aí o gate
 * reprovou **59 de 71** por usarem 600 ou 800.
 *
 * Mas 600/800/900 na mesma cena não é inconsistência: é HIERARQUIA — título, subtítulo, corpo. O
 * gate estava punindo tipografia bem feita.
 *
 * *Consistência entre cenas é julgamento de conjunto, e julgamento não vira gate determinístico sem
 * uma régua do que é "diferente demais" — que aqui não existe.* Ficam as duas checagens objetivas: o
 * PISO e o 900 em caps acentuadas. Alarme largo demais ensina a ignorar o gate ([SIS-154]), e o de
 * cima acusaria 83% do vídeo. */
const maioria = [];

const laudo = [];
for (const c of cenas) {
  const ps = [...new Set(pesosDe(c.html))].filter((p) => p > 0).sort((a, b) => a - b);
  const finos = ps.filter((p) => p < PISO);
  const forasteiros = maioria.length ? ps.filter((p) => !maioria.includes(p) && p >= PISO) : [];
  const caps = capsAcentuadas(c.html);
  // [porte Régie] a suspeita de glifo: caps com Ã/Õ/Ç numa cena que usa um peso que a MARCA mediu e proibiu em caixa alta,
  // sem usar o peso liberado (--peso-caixa-alta). Estático: não sabe qual elemento herda qual peso — por isso é suspeita.
  const pesosRuins = ps.filter((p) => PROIBIDOS_CAIXA_ALTA.has(p));
  const risco900 = !!(caps.length && pesosRuins.length && !(MARCA?.pesoCaixaAlta && ps.includes(MARCA.pesoCaixaAlta)));
  // [porte Régie] FAMÍLIA fora da marca (ARTE-161) — reprova; família por variável JS — não resolvida, avisa
  const decl = familiasDe(c.html);
  const foraDaMarca = [...new Set(decl.filter((v) => familiaDaMarca(v) === false).map(primeiraFamilia))];
  const naoResolvidas = MARCA ? [...new Set(decl.filter((v) => familiaDaMarca(v) === null).map(primeiraFamilia))] : [];
  // [porte Régie] peso sem face na marca: o navegador troca pela face mais próxima (800 → 900) — aviso
  const semFace = MARCA?.temFaces ? ps.filter((p) => p >= PISO && !MARCA.temFace(p)) : [];
  if (finos.length || forasteiros.length || risco900 || foraDaMarca.length || naoResolvidas.length || semFace.length)
    laudo.push({ id: c.id, pesos: ps, finos, forasteiros, caps: caps.slice(0, 3), risco900, pesosRuins, foraDaMarca, naoResolvidas, semFace });
}
/* O que REPROVA (exit 1) é só o PISO, que é fato do arquivo. O risco de glifo é SUSPEITA: este gate
 * é estático e não sabe qual elemento herda qual peso — quem dá o veredito é o `_audit-til`, que
 * abre a cena e mede o glifo RENDERIZADO. Reprovar por inferência aqui manda refazer cena sã: no
 * `ceuta` foram 9 reprovações e o `_audit-til` mediu 0 defeito em 124 cenas. */
const reprovaCena = (l) => l.finos.length || l.forasteiros.length || l.foraDaMarca.length;   // [porte Régie] + família
const reprova = laudo.some(reprovaCena);
// [porte Régie] sem tokens (nem do canal nem do motor) a FAMÍLIA não foi medida: exit 2 se nada mais reprovou.
const saida = reprova ? 1 : MARCA ? 0 : 2;
// [porte Régie] a marca declarando peso de papel abaixo do PRÓPRIO piso: conflito dentro da marca, dito em voz alta.
const pesosAbaixoDoPiso = MARCA ? Object.entries(MARCA.pesos).filter(([, v]) => v < PISO) : [];

if (JSONOUT) {
  console.log(JSON.stringify({ proj: alvo, maioria, laudo, reprova, piso: PISO, piso_de: PISO_DE,   // [porte Régie]
    marca: MARCA ? { arquivo: MARCA.arquivo, origem: MARCA.origem, familia: MARCA.principal, pesos: MARCA.pesos,
      proibidos_caixa_alta: [...PROIBIDOS_CAIXA_ALTA], peso_caixa_alta: MARCA.pesoCaixaAlta } : null,
    familia_medida: !!MARCA, pesos_da_marca_abaixo_do_piso: Object.fromEntries(pesosAbaixoDoPiso) }, null, 1));
  process.exit(saida);
}

console.log(`\n══ TIPOGRAFIA · ${alvo} · ${cenas.length} cena(s) ══`);
console.log(MARCA
  ? `  marca: família "${MARCA.principal}" · ${MARCA.origem}`
  : `  ⚠ família NÃO MEDIDA — não achei marca/tokens.css no canal nem o motor (motor.caminho no canal.json)`);
console.log(`  piso de peso: ${PISO} (${PISO_DE})`);   // [porte Régie] de onde veio o número, sempre dito
if (pesosAbaixoDoPiso.length)
  console.log(`  ▲ a marca declara ${pesosAbaixoDoPiso.map(([k, v]) => `--${k}: ${v}`).join(", ")} — abaixo do próprio piso ${PISO}.` +
    ` Cena que usar esse token reprova: ou a marca sobe o peso do papel, ou baixa o --peso-minimo (nunca abaixo de ${PISO_OFICIO}).`);
console.log(`  perfil do vídeo (pesos usados pela maioria): ${maioria.join(" · ") || "(sem maioria clara)"}\n`);
if (!laudo.length) {
  console.log(MARCA ? `  ✓ toda cena usa a família e o peso da marca (piso ${PISO}).\n`
    : `  ✓ nenhuma cena abaixo do piso ${PISO} — mas a FAMÍLIA não foi medida (exit 2, não é aprovação).\n`);
  process.exit(saida);
}

for (const l of laudo) {
  console.log(`  ${reprovaCena(l) ? "✗" : "▲"} ${l.id}`);
  console.log(`      pesos na cena: ${l.pesos.join(" · ")}`);
  if (l.finos.length) console.log(`      ⛔ ABAIXO DO PISO: ${l.finos.join(", ")} — fino demais para a marca (piso ${PISO})`);
  if (l.forasteiros.length) console.log(`      ▲ fora do perfil do vídeo: ${l.forasteiros.join(", ")} — as irmãs usam ${maioria.join("/")}`);
  if (l.risco900) console.log(`      ▲ SUSPEITA de glifo — caps com Ã/Õ/Ç (${l.caps.join(" · ")}) numa cena que usa ${l.pesosRuins.join(", ")}, peso que a marca proíbe em caixa alta (--pesos-proibidos-caixa-alta); caixa alta vai em var(--peso-caixa-alta)${MARCA?.pesoCaixaAlta ? ` (${MARCA.pesoCaixaAlta})` : ""}`);
  // [porte Régie]
  if (l.foraDaMarca.length) console.log(`      ⛔ FAMÍLIA FORA DA MARCA: ${l.foraDaMarca.map((f) => `"${f}"`).join(", ")} — a marca é "${MARCA.principal}"; escreva font-family:var(--fonte) (ARTE-161)`);
  if (l.naoResolvidas.length) console.log(`      ▲ família por variável/template que este gate não resolve: ${l.naoResolvidas.join(", ")} — confira que ela aponta para var(--fonte)`);
  if (l.semFace.length) console.log(`      ▲ peso sem face na marca: ${l.semFace.join(", ")} — a marca carrega ${MARCA.facesTxt}; o navegador troca pelo vizinho`);
}
const nReprova = laudo.filter(reprovaCena).length;
const nSuspeita = laudo.length - nReprova;
if (nReprova) {
  console.log(`\n  ${nReprova} cena(s) fora da tipografia da marca.`);
  console.log(`  Conserto: família por var(--fonte), peso ${PISO}+ (de preferência var(--peso-*), que já é o da marca). Agente-raiz: editor-de-arte.`);
  /* [porte Régie] O estúdio oferecia aqui `scripts/consertar-tipografia.mjs` (troca em massa de peso e do
   * helper `FF_H`). Ele não veio: conserta a família do Top10 (Neue Haas) cravada no HTML, e a cena do canal
   * não crava família nenhuma — escreve var(--fonte). O conserto no canal é trocar o valor cravado pelo token. */
}
if (nSuspeita) {
  console.log(`\n  ${nSuspeita} cena(s) com SUSPEITA de glifo — não é reprovação.`);
  console.log(`  Este gate é ESTÁTICO: não sabe qual elemento herda qual peso. Quem decide mede o glifo RENDERIZADO:`);
  // [porte Régie] o _audit-til aceita a pasta direto; o `ls … |` não existe no PowerShell/cmd
  console.log(`      node scripts/_audit-til.mjs ${alvo.endsWith(".html") ? alvo : join("out", alvo.replace(/^out[\\/]/, ""), "graphics")}`);
}
console.log("");
process.exit(saida);   // [porte Régie] 0 · 1 · 2 (família não medida)
