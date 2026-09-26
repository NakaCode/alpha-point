#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/_commons.mjs (linhas 1-35, commit 4afda12).
// O que mudou: virou INVÓLUCRO FINO do motor — a URL da busca é a urlDeBuscaCommons e o texto é
// limpo pelo limparTexto de <motor>/src/midia/licenca.mjs (o limpador do estúdio concatenava o autor
// visível com o escondido: "Unknown authorUnknown author"); o User-Agent é o do CANAL (canal.json,
// campo contato — a política da Wikimedia exige contato do responsável, e o e-mail do Top10 não é
// deste canal); cada item diz se a licença PASSARIA na trava do motor (licenca_aceita) sem filtrar
// nada — continua sendo ferramenta de OLHAR. Rede injetável para o teste (principal()).
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// BUSCA NO WIKIMEDIA COMMONS — ferramenta de MÃO, anterior à etapa (existe desde 08/ago/2026).
//
// ⚠️ A ETAPA DE PRODUÇÃO É OUTRA: [porte Regie] na Régie é o buscar-midia do motor
// (`node <motor>/src/ferramentas/buscar-midia.mjs <proj> buscar "<termos>" --cena=<id>`), que filtra
// por licença aceita (CC0, domínio público, CC BY e CC BY-SA — este último liberado pelo dono na
// [PESQ-128], com crédito completo como condição; NC e ND ficam fora), devolve o contrato de
// CANDIDATO e grava a TENTATIVA. Este arquivo não filtra licença nenhuma e segue útil para olhar o
// acervo à mão — use-o para explorar, nunca para alimentar a produção.
// uso: node scripts/stock/_commons.mjs "<busca>" [--tipo=video|imagem] [--n=20] [--minw=1920]
import { importarDoMotor } from "../lib/motor.mjs";
import { ehPrincipal, opcao, posicionais } from "./lib/ferramentas.mjs";

/** [porte Regie] a resposta da API vira itens — pura, para o teste afirmar sobre a resposta gravada. */
export function itensDaResposta(j, { minW = 1920, limparTexto, licencaAceita }) {
  const out = [];
  for (const p of Object.values(j?.query?.pages || {})) {
    const ii = (p.imageinfo || [])[0]; if (!ii) continue;
    if (ii.width && ii.width < minW) continue;
    const em = ii.extmetadata || {};
    const lic = limparTexto(em.LicenseShortName?.value || em.License?.value) || "?";
    const autor = (limparTexto(em.Artist?.value) || "?").slice(0, 90);
    out.push({
      fonte: "commons", titulo: p.title, pagina: ii.descriptionurl, link: ii.url,
      w: ii.width, h: ii.height, mb: +((ii.size || 0) / 1e6).toFixed(1), mime: ii.mime,
      licenca: lic, autor, thumb: ii.thumburl || "",
      dur: (em.duration?.value ? Math.round(+em.duration.value) : null),
      // [porte Regie] informação, não filtro: diz se o buscar-midia do motor aceitaria esta licença.
      licenca_aceita: licencaAceita(lic),
    });
  }
  out.sort((a, b) => (b.w * b.h) - (a.w * a.h));
  return out;
}

export async function principal(argv = process.argv.slice(2), { raiz = process.cwd(), fetch = globalThis.fetch, log = console.log } = {}) {
  const Q = posicionais(argv)[0];
  if (!Q) { console.error('uso: _commons.mjs "<busca>" [--tipo=video|imagem] [--n=20] [--minw=1920]'); return 2; }
  const TIPO = opcao(argv, "tipo", "video"), N = +opcao(argv, "n", "20"), MINW = +opcao(argv, "minw", "1920");
  const { urlDeBuscaCommons, limparTexto, licencaAceita } = await importarDoMotor("src/midia/licenca.mjs");
  const { lerConfigCanal } = await importarDoMotor("src/midia/canal.mjs");
  const { ua } = lerConfigCanal(raiz);   // [porte Regie] erro que ensina se faltar o contato no canal.json
  const url = urlDeBuscaCommons({ termos: Q, tipo: TIPO === "video" ? "video" : "imagem", n: N });
  const r = await fetch(url, { headers: { "User-Agent": ua } });
  if (!r.ok) { console.error(`Commons respondeu HTTP ${r.status}`); return 1; }
  const out = itensDaResposta(await r.json(), { minW: MINW, limparTexto, licencaAceita });
  log(JSON.stringify({ query: Q, total: out.length, itens: out.slice(0, N) }, null, 1));
  return 0;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = e?.code === "SEM_CONTATO" || e?.code === "SEM_CANAL" ? 2 : 1; }
}
