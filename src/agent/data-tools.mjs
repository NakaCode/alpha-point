#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/src/agent/data-tools.mjs (linhas 1-68, commit 4afda12).
// O que mudou: (1) User-Agent da Régie ("anim-bot/1.0" era o do estúdio); (2) fetch injetável e
// prazo de 20 s por consulta (uma API pública pendurada segurava o agente para sempre); (3) o teste
// de "sou o script chamado" funciona no Windows (pathToFileURL); (4) a mensagem de "sem fonte"
// deixou de mandar editar knowledge/data-sources.md, que não existe no canal; (5) [revisão v1] o
// "sou o script chamado" é a régua do MOTOR (realpath dos dois lados, sem caixa no Windows), via
// scripts/stock/lib/ferramentas.mjs — por URL, chamado por link/junção saía 0 sem fazer nada. As duas bases (IBGE
// Censo 2022 por UF e World Bank por ISO3) e a regra "nunca inventa" ficaram iguais.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// Agente de Dados Públicos — busca números REAIS com FONTE CITÁVEL p/ a tese de uma cena.
// NUNCA inventa: se não achar, devolve { encontrado:false }.
// CLI: node src/agent/data-tools.mjs "<tese>"   |   node src/agent/data-tools.mjs --base '{"base":"worldbank","indicador":"NY.GDP.MKTP.CD","iso3":"BRA"}'
import { ehPrincipal } from "../../scripts/stock/lib/ferramentas.mjs";

// [porte Regie] UA da Régie; fetch injetável para o teste (respostas gravadas, sem rede)
let _fetch = (...a) => globalThis.fetch(...a);
export const usarFetch = (f) => { _fetch = f || ((...a) => globalThis.fetch(...a)); };
const J = async (u) => {
  const r = await _fetch(u, { headers: { "User-Agent": "regie/0.1 (dados publicos para producao de video)" }, signal: AbortSignal.timeout(20_000) });
  if (!r.ok) throw new Error(`dados ${r.status} em ${u}`);   // não dá JSON.parse no corpo "404: Not Found"
  const t = await r.text(); try { return JSON.parse(t); } catch { throw new Error("dados: resposta não-JSON"); }
};

// ---- fontes reais ----
// IBGE Censo 2022 — população por estado (UF). Agregado 4709, variável 93, N3=estados.
export async function ibgePopEstados() {
  const u = "https://servicodados.ibge.gov.br/api/v3/agregados/4709/periodos/2022/variaveis/93?localidades=N3[all]";
  const d = await J(u);
  const serie = d?.[0]?.resultados?.[0]?.series || [];
  const valores = serie.map(s => ({ local: s.localidade.nome, valor: Number(Object.values(s.serie)[0]) }))
    .filter(x => Number.isFinite(x.valor)).sort((a, b) => b.valor - a.valor);
  if (!valores.length) return null;
  return { valores, fonte: { nome: "IBGE — Censo 2022 (pop. residente por UF)", url: u } };
}
// World Bank — indicador por país (ex.: gasto militar % PIB MS.MIL.XPND.GD.ZS; PIB NY.GDP.MKTP.CD).
export async function worldBank(indicador, iso3 = "BRA") {
  const u = `https://api.worldbank.org/v2/country/${iso3}/indicator/${indicador}?format=json&per_page=8&mrnev=1`;
  const d = await J(u); const row = d?.[1]?.[0];
  if (!row || row.value == null) return null;
  return { valores: [{ local: row.country.value, ano: row.date, valor: row.value }],
    fonte: { nome: `World Bank — ${indicador}`, url: u } };
}

// ---- consulta EXPLÍCITA por base (o AGENTE escolhe a base certa; sem matcher cego que casa "Estados Unidos" → população) ----
// Usada como tool pelo caçador de dados universal: o modelo só chama isto quando o dado É desta base.
export async function consultarBaseOficial({ base, indicador, iso3 = "BRA" } = {}) {
  try {
    if (base === "ibge_pop_uf") { const r = await ibgePopEstados(); return r ? { encontrado: true, ...r } : { encontrado: false, motivo: "IBGE sem retorno" }; }
    if (base === "worldbank") {
      if (!indicador) return { encontrado: false, motivo: "worldbank exige 'indicador' (ex.: NY.GDP.MKTP.CD)" };
      const r = await worldBank(indicador, iso3); return r ? { encontrado: true, ...r } : { encontrado: false, motivo: `World Bank sem dado p/ ${indicador}/${iso3}` };
    }
  } catch (e) { return { encontrado: false, motivo: "erro ao consultar base: " + (e.message || "").slice(0, 80) }; }
  return { encontrado: false, motivo: "base não mapeada: " + base };
}

// ---- roteamento por intenção (palavras-chave da tese) — LEGADO, não usado no caçador universal ----
export async function buscarDados({ tese = "", contexto = "" }) {
  const t = (tese + " " + contexto).toLowerCase();
  try {
    if (/popula|habitant|censo|estado/.test(t)) { const r = await ibgePopEstados(); if (r) return { encontrado: true, ...r }; }
    if (/gasto militar|defesa|military/.test(t)) { const r = await worldBank("MS.MIL.XPND.GD.ZS"); if (r) return { encontrado: true, ...r, nota: "% do PIB" }; }
    if (/pib|gdp/.test(t)) { const r = await worldBank("NY.GDP.MKTP.CD"); if (r) return { encontrado: true, ...r, nota: "US$ corrente" }; }
  } catch (e) { return { encontrado: false, motivo: "erro ao consultar fonte: " + (e.message || "").slice(0, 80) }; }
  // [porte Regie] knowledge/data-sources.md é do estúdio: aqui a saída é consultar a API do órgão e registrar a URL
  return { encontrado: false, motivo: `sem fonte mapeada p/ a tese — consulte a API pública do órgão que produz o dado e registre a URL` };
}

// CLI  [porte Regie] a comparação "file://" + argv[1] nunca é verdadeira no Windows
if (ehPrincipal(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args[0] === "--base") {
    let input = {};
    try { input = JSON.parse(args[1] || "{}"); } catch { console.error("--base exige JSON válido"); process.exit(2); }
    console.log(JSON.stringify(await consultarBaseOficial(input)));
    process.exit(0);
  }
  const tese = args.join(" ");
  if (!tese) { console.error('uso: node src/agent/data-tools.mjs "<tese>"'); process.exit(1); }
  const r = await buscarDados({ tese });
  if (r.encontrado) { console.log("FONTE:", r.fonte.nome, "\n" + r.fonte.url, "\n"); console.log(r.valores.slice(0, 6)); }
  else console.log("não encontrado:", r.motivo);
}
