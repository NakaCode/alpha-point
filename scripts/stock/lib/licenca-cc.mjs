// ── NOVO na Régie (não é porte) ──────────────────────────────────────────────────────────────
// O que é: o juízo "esta licença Creative Commons serve a um canal monetizado?", num lugar só, para
// o gate (qc-procedencia.mjs) e o transcritor (procedencia-reconciliar.mjs) não divergirem.
// A LISTA de licenças aceitas NÃO mora aqui: é a do motor (<motor>/src/midia/licenca.mjs,
// licencaAceita), passada por quem chama. Este módulo só reconhece que o texto É Creative Commons,
// separa NC/ND (proibido, sem exceção) do resto que a trava do motor não reconhece (sem prova), e
// normaliza a grafia antes de perguntar ao motor.
// Por que existe: provado na revisão v1 (23/09/2026) — uma foto CC BY-NC-SA 4.0 atravessava
// `_commons-baixar` → `_creditos.json` → `procedencia-reconciliar --escrever` → qc-procedencia com
// PASS. A trava do motor recusava a mesma licença na busca, e a porta do canal a contornava.
// Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────

/** O texto fala de Creative Commons (ou de uma cláusula dela)? Licença de acervo pago não passa aqui. */
export const EH_CC = /\bcc\b|creative\s*commons|\battribution\b|noncommercial|non[-\s]commercial|noderiv|no[-\s]derivative|\bby[-\s](?:nc|nd|sa)\b/i;

/** NC (não comercial) ou ND (sem derivação): o canal é monetizado e a cena é obra derivada. */
export const NC_ND = /\bnc\b|noncommercial|non commercial|\bnd\b|noderiv|no derivative|n[aã]o comercial/i;

/**
 * A grafia curta que o licencaAceita do motor entende. Sufixos que não mudam a licença
 * ("International", "Unported", "Generic", "Deed", "License") saem; a forma por extenso
 * ("Creative Commons Attribution-ShareAlike 4.0") vira "cc by sa 4.0".
 */
export function curtaCC(t) {
  return String(t ?? "").toLowerCase().replace(/[-_]/g, " ").replace(/\s+/g, " ").trim()
    .replace(/\bcreative commons\b/g, "cc")
    .replace(/\battribution share ?alike\b/g, "by sa").replace(/\battribution\b/g, "by")
    .replace(/\blicen[cs]e\b|\blicen[cç]a\b/g, "")
    .replace(/\b(international|unported|generic|deed)\b/g, "")
    .replace(/\s+/g, " ").trim();
}

/** As partes legíveis de um campo `licenca` (texto, ou {nome|name, url}). */
export const partesDaLicenca = (v) => v && typeof v === "object"
  ? [v.nome, v.name, v.url].filter((x) => typeof x === "string")
  : [String(v ?? "")];

/**
 * @param valor          o campo `licenca` como veio (texto ou objeto)
 * @param licencaAceita  a função do motor (src/midia/licenca.mjs)
 * @returns {{proibida: string} | {semProva: string} | null}
 *   proibida = NC/ND escrito; semProva = Creative Commons que a trava do motor não reconhece;
 *   null = não é Creative Commons, ou é uma que o motor aceita.
 */
export function julgarLicencaCC(valor, { licencaAceita }) {
  for (const parte of partesDaLicenca(valor)) {
    const t = String(parte || "").trim();
    if (!t || !EH_CC.test(t)) continue;
    const curta = curtaCC(t);
    if (NC_ND.test(curta)) return { proibida: t.slice(0, 60) };
    if (!licencaAceita(curta)) return { semProva: t.slice(0, 60) };
  }
  return null;
}
