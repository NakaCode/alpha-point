// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/instalacao-procedencia.mjs (linhas 1-77, commit 4afda12).
// O que mudou: (1) o nome do plano do Top10 ("Unlimited All Access") saiu do texto da licença — o
// plano é da conta de quem instala, não do código; (2) plataforma assinada SEM linha de manifesto
// agora exige a URL do item (o estúdio aceitava url null) e a declaração diz que plataforma e URL
// foram informadas por quem instalou; (3) a mensagem de acervo livre aponta o buscar-midia do motor,
// que é quem grava a licença medida na fonte na Régie (o acervo-livre-baixar.mjs do estúdio não veio).
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * A DECLARAÇÃO DE PROCEDÊNCIA DO `_instalar-lote.mjs` — pura, para poder ser testada sem ffmpeg.
 *
 * ⛔ O DEFEITO QUE ISTO FECHA (medido em 16/set/2026, trava 2 da Holding sobre o #341):
 *
 *     licenca: LIC[plat] || "licença de assinatura ativa",
 *     fonte:   FONTE[plat] || plat,
 *
 * Qualquer plataforma FORA das quatro assinaturas ganhava a frase «licença de assinatura ativa». Uma
 * foto do Wikimedia Commons instalada por esta porta sairia declarada como clipe de assinatura paga —
 * exatamente a conversão que a frente de direitos existe para impedir: *«assinatura existe» não é
 * «este arquivo está licenciado»*, e muito menos para um arquivo que nem veio da assinatura.
 *
 * A regra agora tem três ramos, e nenhum inventa:
 *   · plataforma ASSINADA → a licença do plano, transcrita abaixo (a de sempre);
 *   · `acervo-livre` com `licenca_medida_na_fonte` → licença, autor e página COPIADOS da linha que o
 *     buscar-midia do motor gravou ao ler a API; [porte Regie]
 *   · qualquer outra coisa → RECUSA, dizendo o caminho certo. Não há `--licenca=`: agente nenhum
 *     digita licença.
 */
// [porte Regie] "do canal": a assinatura é a da conta de quem caça neste canal, não a do Top10.
export const LIC = Object.freeze({
  storyblocks: "Storyblocks — licença de assinatura do canal, uso comercial em produção audiovisual",
  envato: "Envato Elements — licença de assinatura do canal, uso comercial em produção audiovisual",
  shutterstock: "Shutterstock — licença de assinatura do canal, uso comercial em produção audiovisual",
  motionarray: "Motion Array — licença de assinatura do canal, uso comercial em produção audiovisual",
});
/**
 * [porte Regie] [I4] O DOMÍNIO de cada acervo assinado. A URL do item é a única ponte até a licença
 * quando não há linha de manifesto — e uma ponte que aceita qualquer URL não liga nada: provado na
 * revisão v1 (23/09/2026), um clipe do YouTube instalado com `--plataforma=envato
 * --url=https://www.youtube.com/watch?v=abc123` saía declarado como licença Envato do canal, e o gate
 * dava PASS. Aqui a URL tem de ser da plataforma declarada (o host, ou um subdomínio dele).
 * Envato: só o Elements (a assinatura) — o Envato Market (videohive.net etc.) é licença por item.
 */
export const DOMINIOS = Object.freeze({
  storyblocks: Object.freeze(["storyblocks.com"]),
  envato: Object.freeze(["elements.envato.com", "app.envato.com"]),
  shutterstock: Object.freeze(["shutterstock.com"]),
  motionarray: Object.freeze(["motionarray.com"]),
  adobestock: Object.freeze(["stock.adobe.com"]),
});

/** O host da URL (sem "www."), ou null se não for http(s) legível. */
export function hostDe(url) {
  try {
    const u = new URL(String(url ?? "").trim());
    return ["http:", "https:"].includes(u.protocol) && u.hostname ? u.hostname.toLowerCase().replace(/^www\./, "") : null;
  } catch { return null; }
}

/** A URL é da plataforma `p` (chave de DOMINIOS)? */
export function urlEhDaPlataforma(p, url) {
  const h = hostDe(url);
  const doms = DOMINIOS[String(p || "").toLowerCase().replace(/[^a-z]/g, "")];
  return Boolean(h && doms && doms.some((d) => h === d || h.endsWith(`.${d}`)));
}

/** Qual acervo assinado um texto livre (fonte, plataforma, nome de arquivo) cita? null se nenhum. */
export function plataformaAssinadaDoTexto(txt) {
  const t = String(txt ?? "");
  if (/shutterstock|\bsstk\b/i.test(t)) return "shutterstock";
  if (/storyblocks|\bSBV-\d/i.test(t)) return "storyblocks";
  if (/envato/i.test(t)) return "envato";
  if (/motion.?array/i.test(t)) return "motionarray";
  if (/adobe.?stock/i.test(t)) return "adobestock";
  return null;
}

export const FONTE = Object.freeze({
  storyblocks: "Storyblocks — stock video (assinatura ativa)",
  envato: "Envato Elements — stock video (assinatura ativa)",
  shutterstock: "Shutterstock — stock video (assinatura ativa)",
  motionarray: "Motion Array — stock video (assinatura ativa)",
});

/**
 * @returns {{ok: true, campos: object} | {ok: false, motivo: string}}
 *   `campos` são os que dependem da ORIGEM (fonte, licença, url, autor…); o resto da entrada
 *   (resolução, cena, datas) continua sendo montado pelo script.
 */
// `seloConfere(reg)`: quem chama confere o selo da linha do manifesto (src/midia/selo.mjs do motor).
// Linha de acervo livre sem selo válido foi editada à mão — é a "lavagem de licença" que o revisor
// provou (CC BY-SA virando CC0 no texto do manifesto). Sem a função, a rota de acervo livre RECUSA:
// na dúvida, barra (fail-closed).
export function declaracaoDeInstalacao({ plat, reg = null, urlArg = null, seloConfere = null }) {
  const p = String(plat || "").toLowerCase().trim();
  if (!p) return { ok: false, motivo: "sem registro no manifest e sem --plataforma= — procedência NÃO declarada" };

  if (LIC[p]) {
    // [porte Regie] Sem linha de manifesto, a URL do item é a única ponte até a licença: sem ela a
    // declaração diria "assinatura" sobre um arquivo que ninguém consegue reencontrar na plataforma.
    const url = reg?.url || urlArg || null;
    if (!reg && !url) {
      return { ok: false, motivo: `plataforma «${p}» sem linha no manifest.jsonl e sem --url= do item — procedência NÃO declarada. `
        + "Passe --url=<página do item na plataforma> (a que você abriu para baixar)." };
    }
    // [porte Regie] [I4] a URL tem de ser da plataforma declarada — venha ela do manifest ou do --url.
    if (url && !urlEhDaPlataforma(p, url)) {
      return { ok: false, motivo: `a URL ${String(url).slice(0, 80)} não é de ${DOMINIOS[p].join(" / ")} — `
        + `a plataforma «${p}» não se prova com a página de outro site. Procedência NÃO declarada; nada foi instalado.` };
    }
    return {
      ok: true,
      campos: {
        fonte: FONTE[p], url, licenca: LIC[p],
        ...(reg ? {} : { declarado_sem_manifesto: "plataforma e URL informadas por quem instalou (--plataforma/--url); não há linha de download que as prove" }),
      },
    };
  }

  if (p === "acervo-livre") {
    if (typeof seloConfere !== "function") return { ok: false, motivo: "acervo livre: esta rota não confere o selo da linha do manifesto — instale pelo buscar-midia do motor (entregar), que confere" };
    if (!seloConfere(reg)) return { ok: false, motivo: "acervo livre: o selo da linha do manifesto não confere (a linha foi editada depois do download, ou é de antes desta versão) — baixe de novo pelo buscar-midia do motor" };
    const faltas = [];
    if (reg?.licenca_medida_na_fonte !== true) faltas.push("a linha não foi gravada pelo buscar-midia do motor (licenca_medida_na_fonte ausente)");
    if (!String(reg?.licenca || "").trim()) faltas.push("licença");
    if (!String(reg?.url || "").trim()) faltas.push("página de origem");
    if (reg?.exige_credito && !String(reg?.autor || "").trim()) faltas.push("autor — a licença exige crédito [PESQ-128]");
    if (faltas.length) return { ok: false, motivo: `acervo livre sem prova completa: falta ${faltas.join(", ")}` };
    return {
      ok: true,
      campos: {
        fonte: reg.fonte || reg.fonte_id || "acervo livre",
        url: reg.url,
        licenca: reg.licenca,
        licenca_origem: reg.licenca_origem || "item",
        ...(reg.politica_url ? { politica_url: reg.politica_url } : {}),
        autor: reg.autor || null,
        exige_credito: Boolean(reg.exige_credito),
        ...(reg.credito_declarado ? { credito_declarado: reg.credito_declarado } : {}),
        ...(reg.link ? { link: reg.link } : {}),
        ...(Array.isArray(reg.ressalvas) && reg.ressalvas.length ? { ressalvas: reg.ressalvas } : {}),
        abaixo_de_4k: reg.abaixo_de_4k ?? null,
      },
    };
  }

  return {
    ok: false,
    motivo: `plataforma «${p}» não é acervo assinado e não traz licença medida na fonte — procedência NÃO declarada. `
      // [porte Regie] o caminho certo na Régie é a ferramenta do motor, que baixa e já entrega com prova.
      + "Para acervo livre, use node <motor>/src/ferramentas/buscar-midia.mjs <proj> baixar/entregar, que grava licença, autor e página.",
  };
}
