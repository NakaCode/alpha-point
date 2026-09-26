// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/validar-contrato.mjs (linhas 1-267, commit 4afda12).
// O que mudou: a comparação "sou eu o programa chamado?" do fim do arquivo ficou insensível a caixa no Windows (letra do drive) e passa os dois lados pelo realpath (link simbólico, junção). Nenhuma regra de validação mudou. Os schemas que ele lê estão em ../contratos/, byte a byte iguais aos do estúdio.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// VALIDADOR DE CONTRATO — checa um .json contra contratos/<tipo>.schema.json, SEM ajv/deps.
// Validador próprio, leve: suporta type (string ou [tipos]), required, properties, patternProperties,
// items, enum, const, additionalProperties (false ou subschema) e as restrições de grandeza
// (minItems/maxItems, minLength/maxLength, minimum/maximum, pattern).
//
// ⚠️ ELE FALHA NO QUE NÃO SABE APLICAR — e essa é a regra mais importante daqui (05/ago/2026).
//
// Antes, palavra-chave desconhecida era IGNORADA EM SILÊNCIO, e cinco delas estavam escritas nos
// contratos sem ninguém aplicá-las. O caso que doeu foi a FIN-13: `laudo-finalizacao.schema.json:18`
// declara `minItems: 1` na checklist de montagem, e um laudo com `"itens": []` saía
// `✓ válido — contrato "laudo-finalizacao" [estrito]`, exit 0. Daí `qa-finalizacao.mjs` filtrava os
// FAIL de um array vazio, achava nenhum, e imprimia `✓ finalização PASS (0 item(ns), nenhum reprova)`
// — o número que denunciava estava dentro da mensagem de sucesso. **Vídeo promovido para `entregas/`
// sem um único item de montagem conferido**, e quem escreve esse laudo é um agente LLM, que é
// exatamente o caso em que a restrição do schema é a única defesa contra artefato truncado.
//
// Silenciados pelo mesmo mecanismo: `laudo-qc.schema.json:21` (motivo minLength 8 — passava com "a"),
// `:59-60` (nota 0–10 — passava com 99) e `espelho.schema.json:63` (o modo tinha de casar M01–M26 —
// passava com "M99-INVENTADO").
//
// *Schema que declara o que ninguém checa é pior que schema nenhum, porque o leitor humano acredita
// nele.* Por isso não basta implementar as cinco: qualquer palavra-chave nova que este validador não
// conheça vira ERRO DE CONTRATO, com nome e caminho. O terceiro estado — "não sei medir isto" — não
// pode continuar sendo achatado para "válido".
//
// PROPRIEDADE NÃO PREVISTA: por padrão é AVISO (exit 0) — o histórico do repo tem deriva legítima que
// ainda não foi triada, e reprovar tudo de uma vez pararia a produção. Com `--estrito` vira ERRO
// (exit 1). É a mesma varredura nos dois modos; muda só o peso. Aperte o gate (CI, pré-entrega,
// artefato novo) sem quebrar o que já roda hoje. — D12, 22/jul.
//
// Uso: node scripts/validar-contrato.mjs <tipo> <arquivo.json> [--estrito]
//   ex: node scripts/validar-contrato.mjs espelho out/<proj>/plano-roteirista.json
//   ex: node scripts/validar-contrato.mjs espelho out/<proj>/espelho.json --estrito
import { readFileSync, existsSync, realpathSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

let ESTRITO = false;
let erros = [], avisos = [];
const nome = (v) => v === null ? "null" : Array.isArray(v) ? "array" : typeof v;
const casaTipo = (t, v) =>
  t === "null" ? v === null :
  t === "array" ? Array.isArray(v) :
  t === "object" ? (v !== null && typeof v === "object" && !Array.isArray(v)) :
  t === "integer" ? Number.isInteger(v) :
  t === "number" ? typeof v === "number" :
  typeof v === t;                                   // string | boolean

/**
 * ══ O QUE ESTE VALIDADOR SABE FAZER — declarado, para poder acusar o que não sabe ══
 *
 * `APLICADAS` são as palavras-chave que a `validar()` de fato usa para julgar. `ANOTACOES` são as que
 * existem para o leitor humano e não têm efeito nenhum sobre o dado — ignorá-las é correto.
 * Tudo que não estiver em nenhuma das duas é uma promessa que o schema faz e o código não cumpre:
 * `varreSchema()` acusa antes de validar qualquer dado.
 *
 * `$ref` fica de fora DE PROPÓSITO: hoje nenhum contrato o usa, e tratá-lo como anotação faria uma
 * referência inteira ser ignorada em silêncio — o defeito que este bloco existe para matar.
 */
const APLICADAS = new Set([
  "type", "enum", "const", "required", "properties", "patternProperties", "additionalProperties",
  "items", "minItems", "maxItems", "uniqueItems", "minProperties", "maxProperties",
  "minLength", "maxLength", "minimum", "maximum", "pattern", "propertyNames", "not", "allOf",
  "oneOf",
]);
const ANOTACOES = new Set([
  "$schema", "$id", "title", "description", "$comment", "examples", "default",
  "deprecated", "readOnly", "writeOnly",
]);

/**
 * Varre o SCHEMA (não o dado) atrás de palavra-chave que este validador não sabe aplicar.
 *
 * É uma passada só, antes da validação, de propósito: acusar durante a `validar()` reportaria o mesmo
 * defeito de schema uma vez por item do array, e o relatório viraria ruído. O defeito é do contrato,
 * não do arquivo — então se diz uma vez, com o caminho dentro do schema.
 */
function varreSchema(sc, path, achados) {
  if (!sc || typeof sc !== "object" || Array.isArray(sc)) return;
  for (const k of Object.keys(sc)) {
    if (APLICADAS.has(k) || ANOTACOES.has(k)) continue;
    achados.push(`${path || "(raiz)"}: o schema declara "${k}", que este validador NÃO sabe aplicar — a restrição não está sendo checada por ninguém`);
  }
  for (const k of ["properties", "patternProperties"])
    for (const [nome, sub] of Object.entries(sc[k] || {})) varreSchema(sub, `${path ? path + "." : ""}${k}[${nome}]`, achados);
  if (sc.items) varreSchema(sc.items, `${path || "(raiz)"}.items`, achados);
  if (sc.propertyNames) varreSchema(sc.propertyNames, `${path || "(raiz)"}.propertyNames`, achados);
  if (sc.not) varreSchema(sc.not, `${path || "(raiz)"}.not`, achados);
  for (const [i, sub] of (sc.allOf || []).entries())
    varreSchema(sub, `${path || "(raiz)"}.allOf[${i}]`, achados);
  for (const [i, sub] of (sc.oneOf || []).entries())
    varreSchema(sub, `${path || "(raiz)"}.oneOf[${i}]`, achados);
  if (sc.additionalProperties && typeof sc.additionalProperties === "object")
    varreSchema(sc.additionalProperties, `${path || "(raiz)"}.additionalProperties`, achados);
}

function serializarCanonico(valor) {
  if (Array.isArray(valor)) return `[${valor.map(serializarCanonico).join(",")}]`;
  if (valor !== null && typeof valor === "object") {
    return `{${Object.keys(valor).sort().map((chave) => (
      `${JSON.stringify(chave)}:${serializarCanonico(valor[chave])}`
    )).join(",")}}`;
  }
  return JSON.stringify(valor);
}

function validar(sc, v, path) {
  const p = path || "(raiz)";
  if (sc.type) {
    const tipos = Array.isArray(sc.type) ? sc.type : [sc.type];
    if (!tipos.some((t) => casaTipo(t, v))) {
      erros.push(`${p}: esperado ${tipos.join("|")}, veio ${nome(v)}`);
      return;                                        // tipo errado → não vale descer
    }
  }
  if (sc.not) {
    // `not` inverte o veredito do subschema. Mede num buffer isolado para não vazar os erros que
    // significam justamente "não casou" — o estado desejado quando a negação passa.
    const e0 = erros.length, a0 = avisos.length;
    validar(sc.not, v, path);
    const casouComOProibido = erros.length === e0;
    erros.splice(e0);
    avisos.splice(a0);
    if (casouComOProibido) erros.push(`${p}: valor casa com um subschema explicitamente proibido por "not"`);
  }
  if (sc.oneOf) {
    let matches = 0;
    for (const sub of sc.oneOf) {
      const e0 = erros.length, a0 = avisos.length;
      validar(sub, v, path);
      if (erros.length === e0) matches++;
      erros.splice(e0);
      avisos.splice(a0);
    }
    if (matches !== 1) erros.push(`${p}: esperado casar com exatamente um subschema de "oneOf", casou com ${matches}`);
  }
  for (const sub of sc.allOf || []) validar(sub, v, path);
  if (sc.enum && !sc.enum.includes(v))
    erros.push(`${p}: valor ${JSON.stringify(v)} fora do enum [${sc.enum.join(", ")}]`);
  if ("const" in sc && JSON.stringify(v) !== JSON.stringify(sc.const))
    erros.push(`${p}: esperado exatamente ${JSON.stringify(sc.const)}, veio ${JSON.stringify(v)}`);

  // ── AS RESTRIÇÕES DE GRANDEZA — cada uma cobre um jeito de o artefato nascer OCO ──
  // Só se aplicam ao tipo certo: `minLength` num número não é violação, é palavra-chave fora de lugar,
  // e acusá-la aqui fabricaria alarme falso onde o `type` já é o dono da pergunta.
  if (typeof v === "string") {
    if (Number.isFinite(sc.minLength) && v.length < sc.minLength)
      erros.push(`${p}: texto com ${v.length} caractere(s), mínimo ${sc.minLength} — ${JSON.stringify(v.slice(0, 40))}`);
    if (Number.isFinite(sc.maxLength) && v.length > sc.maxLength)
      erros.push(`${p}: texto com ${v.length} caractere(s), máximo ${sc.maxLength}`);
    if (sc.pattern) {
      let re = null;
      try { re = new RegExp(sc.pattern); } catch (e) { erros.push(`${p}: o schema traz um "pattern" que nem compila (${sc.pattern}) — contrato quebrado`); }
      if (re && !re.test(v)) erros.push(`${p}: ${JSON.stringify(v)} não casa com o padrão ${sc.pattern}`);
    }
  }
  if (typeof v === "number") {
    if (Number.isFinite(sc.minimum) && v < sc.minimum) erros.push(`${p}: ${v} abaixo do mínimo ${sc.minimum}`);
    if (Number.isFinite(sc.maximum) && v > sc.maximum) erros.push(`${p}: ${v} acima do máximo ${sc.maximum}`);
  }
  if (Array.isArray(v)) {
    if (Number.isFinite(sc.minItems) && v.length < sc.minItems)
      erros.push(`${p}: ${v.length} item(ns), mínimo ${sc.minItems} — lista vazia/curta não satisfaz o contrato`);
    if (Number.isFinite(sc.maxItems) && v.length > sc.maxItems)
      erros.push(`${p}: ${v.length} item(ns), máximo ${sc.maxItems}`);
    if ("uniqueItems" in sc && typeof sc.uniqueItems !== "boolean") {
      erros.push(`${p}: o schema exige uniqueItems booleano`);
    } else if (sc.uniqueItems === true) {
      const vistos = new Set();
      for (const item of v) {
        const canonico = serializarCanonico(item);
        if (vistos.has(canonico)) {
          erros.push(`${p}: lista contém item duplicado, mas uniqueItems=true`);
          break;
        }
        vistos.add(canonico);
      }
    }
  }

  if (v !== null && typeof v === "object" && !Array.isArray(v)) {   // objeto
    // ⚠️ `minProperties` é o `minItems` do MAPA, e faltava — implementado em 07/ago/2026.
    //
    // Nem todo artefato da casa guarda a coleção como lista: o `conceito-visual.json` mapeia
    // id-da-cena → conceito, então a geração de LLM que morre no meio produz `{}`, não `[]`. Sem
    // esta checagem o schema podia declarar a exigência e ninguém a aplicava — que é exatamente o
    // silêncio que este validador foi reescrito para não ter (ver o cabeçalho: a FIN-13 aprovou um
    // laudo com `"itens": []` por esse mesmo mecanismo, só que na versão de lista).
    if (Number.isFinite(sc.minProperties) && Object.keys(v).length < sc.minProperties)
      erros.push(`${p}: ${Object.keys(v).length} chave(s), mínimo ${sc.minProperties} — objeto vazio/curto não satisfaz o contrato`);
    if (Number.isFinite(sc.maxProperties) && Object.keys(v).length > sc.maxProperties)
      erros.push(`${p}: ${Object.keys(v).length} chave(s), máximo ${sc.maxProperties}`);
    if (sc.propertyNames) {
      for (const k of Object.keys(v)) validar(sc.propertyNames, k, `${path ? path + "." : ""}${k} (nome da propriedade)`);
    }
    for (const req of (sc.required || []))
      if (!(req in v)) erros.push(`${path ? path + "." : ""}${req}: campo obrigatório ausente`);
    const propriedades = sc.properties || {};
    const padroes = Object.entries(sc.patternProperties || {});
    for (const k of Object.keys(v)) {
      const caminho = (path ? path + "." : "") + k;
      let previsto = false;
      if (Object.prototype.hasOwnProperty.call(propriedades, k)) {
        validar(propriedades[k], v[k], caminho);
        previsto = true;
      }
      // JSON Schema aplica TODOS os patternProperties que casam, inclusive junto de `properties`.
      for (const [re, sub] of padroes) {
        if (!new RegExp(re).test(k)) continue;
        validar(sub, v[k], caminho);
        previsto = true;
      }
      if (previsto) continue;
      if (sc.additionalProperties === false) {
        (ESTRITO ? erros : avisos).push(`${caminho}: propriedade não prevista no schema`);
      } else if (sc.additionalProperties && typeof sc.additionalProperties === "object") {
        validar(sc.additionalProperties, v[k], caminho);
      }
    }
  }
  if (Array.isArray(v) && sc.items)                  // array → cada item
    v.forEach((item, i) => validar(sc.items, item, `${p}[${i}]`));
}

// PRIMEIRO o schema, DEPOIS o dado: se o contrato promete o que ninguém aplica, o veredito sobre o
// dado é uma meia-verdade — "válido pelo que eu sei checar" impresso como "válido".
export function validarContrato(schema, data, { estrito = false } = {}) {
  ESTRITO = estrito;
  erros = [];
  avisos = [];
  const naoSei = [];
  varreSchema(schema, "", naoSei);
  if (naoSei.length) return { valid: false, erros, avisos, naoSei };
  validar(schema, data, "");
  return { valid: erros.length === 0, erros, avisos, naoSei };
}

function main() {
  const argv = process.argv.slice(2);
  const estrito = argv.includes("--estrito");
  const [tipo, arquivo] = argv.filter((a) => !a.startsWith("--"));
  if (!tipo || !arquivo) { console.error("uso: node scripts/validar-contrato.mjs <tipo> <arquivo.json> [--estrito]"); process.exit(2); }
  const schemaFile = fileURLToPath(new URL(`../contratos/${tipo}.schema.json`, import.meta.url));
  if (!existsSync(schemaFile)) { console.error(`✗ contrato desconhecido: "${tipo}" (esperava ${schemaFile})`); process.exit(2); }
  if (!existsSync(arquivo)) { console.error(`✗ arquivo não encontrado: ${arquivo}`); process.exit(2); }
  let schema, data;
  try { schema = JSON.parse(readFileSync(schemaFile, "utf8")); } catch (e) { console.error("✗ schema inválido:", e.message); process.exit(2); }
  try { data = JSON.parse(readFileSync(arquivo, "utf8")); } catch (e) { console.error(`✗ JSON inválido em ${arquivo}:`, e.message); process.exit(1); }
  const resultado = validarContrato(schema, data, { estrito });
  for (const a of resultado.naoSei) console.log(`✗ ${a}`);
  if (resultado.naoSei.length) {
    console.log(`\n✗ CONTRATO NÃO APLICÁVEL — ${resultado.naoSei.length} palavra(s)-chave que este validador não implementa em "${tipo}".`);
    console.log(`  Não julguei o arquivo: aprovar aqui seria dizer "válido" sobre uma regra que ninguém checou.`);
    console.log(`  Conserto: implemente a palavra-chave em scripts/validar-contrato.mjs (APLICADAS) ou tire-a do schema.`);
    process.exit(2);
  }
  const modo = estrito ? " [estrito]" : "";
  for (const a of resultado.avisos) console.log(`▲ ${a}`);
  if (resultado.erros.length) {
    for (const e of resultado.erros) console.log(`✗ ${e}`);
    console.log(`\n✗ INVÁLIDO — ${resultado.erros.length} violação(ões)${resultado.avisos.length ? ` · ${resultado.avisos.length} aviso(s)` : ""} · contrato "${tipo}"${modo}`);
    process.exit(1);
  }
  console.log(`✓ válido — contrato "${tipo}"${modo}${resultado.avisos.length ? ` (${resultado.avisos.length} aviso(s) de propriedade extra — reprovaria com --estrito)` : ""}`);
}

// No Windows a letra do drive pode chegar como "c:" num lado e "C:" no outro, e a comparação
// exata diria "não sou eu" — o script importado como módulo e o chamado pela linha de comando
// ficariam indistinguíveis, e o gate simplesmente não rodaria, com exit 0. [porte Régie]
// E o Node carrega o módulo principal pelo caminho REAL: chamado por link simbólico ou por pasta
// atrás de junção (mklink /J), argv[1] não bate com import.meta.url — main() não rodava, sem texto
// e com exit 0, que o agente lê como "válido". Os dois lados passam pelo realpath. [porte Régie]
const mesmoArquivo = (a, b) => (process.platform === "win32" ? a.toLowerCase() === b.toLowerCase() : a === b);
const real = (p) => { try { return realpathSync(p); } catch { return p; } };
if (process.argv[1] && mesmoArquivo(real(resolve(process.argv[1])), real(fileURLToPath(import.meta.url)))) main();
