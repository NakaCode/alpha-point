#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-espelho-modelo.mjs (linhas 1-160, commit 4afda12).
// O que mudou: o catálogo vem de scripts/lib/modos.mjs (knowledge/CATALOGO-MODELOS.md ou a tabela de regua/LEIA-ME.md);
// catálogo ausente sai 2 (NÃO MEDIDO) em vez de reprovar tudo; M28/M32/M33 (apresentador) reprovam em canal faceless,
// salvo "apresentador": true no canal.json (canal.json ilegível = NÃO MEDIDO, nunca "faceless" chutado); espelho quebrado = NÃO
// MEDIDO; aceita out\<proj> e pasta absoluta; a mensagem aponta regua/ e não dourados/.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-espelho-modelo.mjs — o `modelo` declarado tem de existir no catálogo E servir ao `modo`.
 *
 * ══ POR QUE EXISTE (08/ago/2026, estação ARTE do `dentro-do-sol`) ══
 *
 * O montador declara dois campos que dizem a mesma coisa por caminhos diferentes: `modo` (a família
 * — `footage`, `split`, `documento`…) e `modelo` (o código do cardápio — `M07`, `M08`, `M05`…).
 * Ninguém conferia se os dois falam da mesma cena, e **eles divergiram em 33 das 121 cenas (27%)**
 * de um vídeo só, em padrão sistemático:
 *
 *     17× modo `footage`   com M14  (M14 = print social re-criado → família documento)
 *     13× modo `split`     com M25  (M25 = split de footage SEM texto → família split-footage)
 *      1× modo `documento` com M22  (M22 = anatomia/raio-X → família desenho)
 *      1× modo `navegacao` com M24  (M24 = pergunta-retórica → família cinematico)
 *
 * O erro não aparece em lugar nenhum sozinho, e faz DUAS coisas caras, as duas em silêncio:
 *
 * **1 · Manda o executor abrir a régua errada.** `scripts/desenhar-cenas.mjs` resolve os caminhos de
 * `seed/examples/dourados/<Mxx>/` a partir do `modelo` e os entrega prontos ao agente. Uma cena de
 * footage full-bleed do Sol recebia os exemplares de *print de tweet*; o comunicado do Nobel recebia
 * um *corte de subsolo com camadas rotuladas*. O agente que obedece desenha a coisa errada com
 * capricho.
 *
 * **2 · Manda a cena para o modelo de LLM errado.** O roteamento molde × invenção também sai do
 * `modelo` traduzido: `documento` é família de MOLDE, então as 17 cenas de footage iam para o Opus,
 * e uma cena de invenção classificada como molde chegaria ao Fable — a cota mais escassa do estúdio
 * — pelo motivo oposto. A conta de quem paga o quê estava sendo feita sobre um campo não conferido.
 *
 * ⚠️ **O DOSSIÊ SALVOU AS CENAS, E É POR ISSO QUE NINGUÉM VIU.** Medido no mesmo vídeo: a
 * `s02-mais-denso-que-chumbo`, declarada M25 (split de vídeo, SEM texto), saiu um split comparativo
 * COM rótulo e unidade certos — porque o `_brief-arte` entrega modo, metáfora e técnica, e isso pesa
 * mais que a pasta de exemplares. **Defeito que o bom senso do executor corrige não deixa de ser
 * defeito: ele só passa a custar mais caro quando um dia o executor não corrigir.**
 *
 * Regra que só funciona se a pessoa lembrar é regra morta ([SIS-124]) — o montador já tinha uma
 * tabela "a fala pede → modelo" no ofício dele, e ela não cobria justamente `footage`, `split` e
 * `navegacao`. Tabela é lembrete; isto aqui é gate.
 *
 * A fonte da verdade é `src/modos.mjs` (que deriva de `knowledge/CATALOGO-MODELOS.md`), nunca uma
 * lista digitada aqui: se um M31 nascer amanhã, o gate o conhece sem ninguém editar este arquivo.
 *
 * Uso:  node scripts/qc-espelho-modelo.mjs <proj> [--json] [--corrigir]
 */
import { writeFileSync, copyFileSync, existsSync, statSync } from "node:fs";
import { join, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { CATALOGO_MODELOS, lerJsonOuNaoMedi, canalTemApresentador as apresentadorNoCanal } from "./lib/modos.mjs";   // [porte Régie] src/modos.mjs do estúdio → scripts/lib/modos.mjs

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const argv = process.argv.slice(2);
const proj = argv.find((a) => !a.startsWith("--"));
const JSONO = argv.includes("--json");
const CORRIGIR = argv.includes("--corrigir");
if (!proj) { console.error("uso: node scripts/qc-espelho-modelo.mjs <proj> [--json] [--corrigir]"); process.exit(2); }

// [porte Régie] aceita <proj>, out/<proj> (com / ou \\) e uma pasta de produção (absoluta ou relativa ao terminal).
const pastaDoProj = (a) => {
  const limpo = String(a).replace(/[\\/]+$/, "");
  if (isAbsolute(limpo)) return limpo;
  if (/^out[\\/]/.test(limpo)) return join(RAIZ, limpo);
  if (existsSync(limpo) && statSync(limpo).isDirectory()) return resolve(limpo);
  return join(RAIZ, "out", limpo);
};
const P = join(pastaDoProj(proj), "espelho.json");
if (!existsSync(P)) { console.error(`✗ sem ${P}`); process.exit(2); }
const esp = lerJsonOuNaoMedi(P, "qc-espelho-modelo");   // [porte Régie] BOM do Bloco de Notas; quebrado = NÃO MEDIDO, nunca 1
const cenas = esp.segmentos || esp.cenas || [];

const familiasDe = {};
for (const m of CATALOGO_MODELOS) familiasDe[m.codigo] = m.familias || [];
// [porte Régie] catálogo vazio não é "todo modelo inexistente": é NÃO MEDI. Sem esta guarda, um canal sem
// knowledge/CATALOGO-MODELOS.md e sem regua/LEIA-ME.md reprovaria toda cena com `modelo` por "código não existe".
if (!CATALOGO_MODELOS.length) {
  console.error("✗ NÃO MEDIDO — não achei o catálogo de modelos (knowledge/CATALOGO-MODELOS.md nem a tabela de regua/LEIA-ME.md).");
  process.exit(2);
}

/**
 * [porte Régie] MODELO DE APRESENTADOR NUM CANAL SEM APRESENTADOR.
 *
 * M28 (apresentador + informação), M32 (apresentador puro) e M33 (apresentador + registro real) só
 * existem onde há alguém filmado. Os canais da Régie são faceless: não há gravação para pôr na V1 — o
 * master é preto com a narração ("master sintético" do motor). Uma cena declarada M32 num canal assim é
 * tela PRETA, e nenhum outro gate a pega, porque o modo `apresentador` é válido no contrato.
 * Opcional DECLARADO: o canal que um dia gravar apresentador liga `"apresentador": true` no canal.json.
 */
const MODELOS_DE_APRESENTADOR = new Set(["M28", "M32", "M33"]);
const canalTemApresentador = apresentadorNoCanal("qc-espelho-modelo");   // canal.json ilegível = NÃO MEDIDO (I5)

/**
 * O modelo CANÔNICO de uma família: o menor código do catálogo cuja lista de famílias a contém.
 * Derivado, nunca digitado — e "menor código" não é arbitrário: o catálogo cresce por acréscimo, e
 * o primeiro modelo de uma família é o genérico dela (M07 footage, M08 split), enquanto os altos
 * são especializações (M25 split SÓ de vídeo). Sugestão para o humano ler, não conserto automático
 * silencioso: quem escolhe entre M08 e M19 para um `split` é o montador, olhando a fala.
 */
const canonicoDe = (modo) => (CATALOGO_MODELOS.find((m) => (m.familias || []).includes(modo)) || {}).codigo || null;

/**
 * [ARTE-283] DESVIO DECLARADO É DECISÃO; DESVIO SILENCIOSO É DEFEITO (18/ago/2026, estação ARTE do
 * `aceleradores-particulas`). O gate nasceu cego para a diferença e reprovava as duas coisas igual.
 *
 * O caso que revelou: a `s93-tres-caminhos` (SHOWPIECE, 15 s) declara `dados` + M21 e o montador
 * escreveu no próprio `motivo` POR QUÊ — "os três caminhos são uma ENUMERAÇÃO nomeada e o stepper
 * em três estações word-locked é a forma que garante que os três fiquem legíveis lado a lado". O
 * diretor de arte concordou por escrito na `tecnica` ("SHOWPIECE M21, 15 s"). O gate acusava, e o
 * `--corrigir` que ele mesmo sugere teria trocado M21 por M09, jogando fora a direção do showpiece
 * mais importante do fecho — o estrago que a régua existe para evitar, feito pela régua.
 *
 * Duas formas valem, nesta ordem: o campo explícito `modelo_isencao` (preferido, no padrão dos
 * `data-qc-rolagem`/`data-qc-sem-heroi` das cenas) e o `motivo` citando LITERALMENTE o código do
 * modelo declarado — que é como o montador já escreve hoje, e por isso não exige reescrever espelho
 * nenhum. Declarado NÃO some do laudo: aparece como decisão, para quem lê poder discordar.
 */
const RX_COD = (cod) => new RegExp(`(^|[^\\w])${cod}([^\\w]|$)`);
const isencaoDe = (s) => {
  const exp = typeof s.modelo_isencao === "string" && s.modelo_isencao.trim();
  if (exp) return { via: "modelo_isencao", texto: exp };
  const mot = typeof s.motivo === "string" ? s.motivo : "";
  if (mot && RX_COD(s.modelo).test(mot)) return { via: "motivo", texto: mot.trim() };
  return null;
};

const achados = [];
const declarados = [];
for (const s of cenas) {
  if (!s.modelo) continue;                       // ausência é outro assunto (o ofício do montador cobra)
  const fam = familiasDe[s.modelo];
  const erro = !fam
    ? "código não existe no catálogo"
    : !fam.includes(s.modo) ? `${s.modelo} serve a ${fam.join("/")}, não a "${s.modo}"`
    : MODELOS_DE_APRESENTADOR.has(s.modelo) && !canalTemApresentador
      ? `${s.modelo} é cena de APRESENTADOR, e este canal é faceless (sem "apresentador": true no canal.json) — a tela sai preta`   // [porte Régie]
      : null;
  if (!erro) continue;
  const base = { id: s.id, modo: s.modo, modelo: s.modelo, erro, sugestao: canonicoDe(s.modo) };
  // código inexistente NUNCA se isenta: não há o que declarar sobre um M que não existe.
  // [porte Régie] nem modelo de apresentador em canal faceless: não há gravação que a declaração faça aparecer.
  const isen = fam && !(MODELOS_DE_APRESENTADOR.has(s.modelo) && !canalTemApresentador) ? isencaoDe(s) : null;
  if (isen) declarados.push({ ...base, isencao: isen }); else achados.push(base);
}

if (CORRIGIR && achados.length) {
  const comSugestao = achados.filter((a) => a.sugestao);
  copyFileSync(P, P + ".bkp-antes-qc-modelo");
  const porId = Object.fromEntries(comSugestao.map((a) => [a.id, a.sugestao]));
  for (const s of cenas) if (porId[s.id]) s.modelo = porId[s.id];
  writeFileSync(P, JSON.stringify(esp, null, 1));
  console.log(`✎ ${comSugestao.length} cena(s) com o modelo trocado pelo canônico da família (backup em espelho.json.bkp-antes-qc-modelo).`);
  if (comSugestao.length < achados.length) console.log(`  ⚠ ${achados.length - comSugestao.length} sem sugestão (modo não existe em nenhum modelo) — resolva à mão.`);
  console.log(`  ⚠ Canônico é o GENÉRICO da família. Se a cena pedia a especialização (M19 wipe, M25 split só de vídeo), reponha à mão.`);
}

if (JSONO) {
  console.log(JSON.stringify({ proj, cenas: cenas.length, comModelo: cenas.filter((s) => s.modelo).length, achados, declarados }, null, 2));
  process.exit(achados.length && !CORRIGIR ? 1 : 0);
}

const comModelo = cenas.filter((s) => s.modelo).length;
console.log(`\n══ MODO × MODELO — ${proj} ══`);
console.log(`  ${cenas.length} cena(s) · ${comModelo} declaram \`modelo\``);
if (comModelo < cenas.length) console.log(`  (${cenas.length - comModelo} sem \`modelo\` — o executor escolhe sozinho; ver ofício do montador)`);
console.log("");

if (declarados.length) {
  console.log(`  ⓘ ${declarados.length} desvio(s) DECLARADO(S) — decisão do montador, não defeito (o \`--corrigir\` não os toca):`);
  for (const d of declarados) {
    console.log(`     ${d.modo} + ${d.modelo}  ·  ${d.id}   [via ${d.isencao.via}]`);
    console.log(`        ${d.isencao.texto.replace(/\s+/g, " ").slice(0, 150)}${d.isencao.texto.length > 150 ? "…" : ""}`);
  }
  console.log("");
}

if (!achados.length) { console.log("✓ PASS — todo `modelo` declarado existe no catálogo e serve ao `modo` da cena (ou o desvio está declarado).\n"); process.exit(0); }
if (CORRIGIR) { console.log("✓ corrigido — rode de novo sem `--corrigir` para conferir.\n"); process.exit(0); }

console.log(`✗ FAIL — ${achados.length} cena(s) declaram um modelo que não serve ao próprio modo:\n`);
const porTipo = {};
for (const a of achados) (porTipo[`${a.modo} + ${a.modelo}`] ||= []).push(a);
for (const [k, v] of Object.entries(porTipo).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`   ${String(v.length).padStart(3)}×  ${k.padEnd(26)} ${v[0].erro}${v[0].sugestao ? `  →  o canônico de "${v[0].modo}" é ${v[0].sugestao}` : ""}`);
  console.log(`        ${v.slice(0, 4).map((a) => a.id).join(", ")}${v.length > 4 ? `, … +${v.length - 4}` : ""}`);
}
// [porte Régie] a régua do canal é regua/<Mxx>/; o roteamento molde×invenção (Opus × Fable) era do despachante
// do estúdio, que não veio — o estrago que sobra é o da régua errada, e ele basta.
console.log(`\n   O estrago é silencioso: o executor abre a régua de OUTRO modelo em \`regua/<Mxx>/\` (ou desenha`);
console.log(`   sem régua) e desenha a coisa errada com capricho. Nada falha; tudo acerta a coisa errada.`);
console.log(`\n   Conserto: node scripts/qc-espelho-modelo.mjs ${proj} --corrigir   (troca pelo canônico da família)`);
if (achados.some((a) => MODELOS_DE_APRESENTADOR.has(a.modelo) && !canalTemApresentador))
  console.log(`   Modelo de apresentador (M28/M32/M33) num canal faceless: troque a cena por uma que tenha imagem — o \`--corrigir\` não resolve isso.`);   // [porte Régie]
console.log(`   Depois confira as especializações à mão: M19 (antes→depois), M25 (split SÓ de vídeo), M16 (mapa de época).\n`);
process.exit(1);
