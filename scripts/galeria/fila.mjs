// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/serve-galeria.mjs (linhas 11-15, 140-165, 444-449, 463-497 e
// 641-645, commit 4afda12).
// O que mudou: no estúdio a marca ia para TRÊS lugares — o log out/_feedback-queue.jsonl, a
// tabela `feedback` do estudio.db (scripts/db/feedback.mjs, a fila "de verdade", com id e status)
// e out/_conserto-fila.jsonl — mais out/<proj>/feedback-mateus.jsonl; a resposta do Claude vinha
// de um quarto arquivo, out/_claude-resp.jsonl. Sem estudio.db no canal, a fila é UM arquivo só:
// out/_feedback-queue.jsonl, com identidade (id) e estado (status) em cada linha. [porte Régie]
// Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// FILA DE MARCAS — o que o dono do canal marcou na galeria e o Claude do canal ainda não tratou.
//
// Por que o estúdio foi para o banco (serve-galeria.mjs:11-13): "o JSONL não tem identidade por
// item nem estado, e o cursor em arquivo perde o item quando a sessão morre no meio". Medido em
// 25/jul/2026: 80 pedidos parados, o mais antigo com quatro dias. A lição fica, o banco sai:
//   · cada marca nasce com um `id` e `status: "pendente"`;
//   · mudar o status é APENDAR outra linha com o mesmo id (e os mesmos campos) — vale a ÚLTIMA.
//     Nunca se reescreve o arquivo: a galeria pode estar gravando uma marca nova no mesmo instante,
//     e reescrever (ler → mudar → gravar) perderia essa marca calado. Apêndice de uma linha é
//     atômico o bastante nos dois sistemas; reescrita não é;
//   · "o que falta" = ids cuja última linha tem status de STATUS_ABERTOS (pendente, em_curso,
//     recriar), na ordem em que NASCERAM. O cursor do estúdio (out/_feedback-cursor) não existe mais:
//     o status por linha o substitui.
//
// Linha de marca (uma por marca — um comentário com "@3s … @8.5s …" vira duas linhas):
//   { id, proj, cena, t, texto, quando, status, tipo, comentario?, grupo?, nota? }
//   t      segundo DENTRO da cena (o relógio da agulha da galeria, 0 = início da cena), ou null
//          quando o texto não cita instante (vale a cena inteira);
//   tipo   "critica" | "aprovacao";
//   status ABERTOS: "pendente" → "em_curso" → "recriar" (veredito RECRIAR: o revisor-criativo
//          briefou e escalou, a cena AINDA não foi refeita — SIS-89: encaminhado não é terminal);
//          FECHADOS: "preservada" | "ajustada" (os outros dois vereditos), "recriada" (quem refez a
//          cena fecha, com o arquivo novo na nota) — ou "aprovada" (tipo aprovacao, já nasce resolvida);
//   nota   o que o Claude fez e por quê — aparece para o dono embaixo da marca, na galeria.
import { appendFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { createHash, randomBytes } from "node:crypto";

export const ARQ_FILA = join("out", "_feedback-queue.jsonl");
// A ÚNICA lista de status: o servidor (resumo da home) e o player (cor da etiqueta) derivam daqui.
export const STATUS_ABERTOS = ["pendente", "em_curso", "recriar"];
export const STATUS_FECHADOS = ["preservada", "ajustada", "recriada", "aprovada"];
export const STATUS = [...STATUS_ABERTOS, ...STATUS_FECHADOS];
export const TEXTO_MAX = 4000;

const novoId = () => `${Date.now().toString(36)}-${randomBytes(3).toString("hex")}`;

/**
 * Quebra um comentário nas marcas que ele cita. Pura.
 *   "@12.3s o texto some cedo; @30,1s a barra some" → [{t:12.3,texto:"o texto some cedo"}, {t:30.1,…}]
 *   "o fundo está escuro demais"                   → [{t:null, texto:"o fundo está escuro demais"}]
 * O que vem antes da primeira marca é CONTEXTO comum: não vira marca própria, vai no campo
 * `comentario` (o texto inteiro), que toda linha do mesmo comentário carrega.
 */
export function quebrarEmMarcas(texto) {
  const txt = String(texto ?? "").replace(/\r\n?/g, "\n").trim();
  if (!txt) return [];
  const re = /@(\d{1,4}(?:[.,]\d+)?)\s*s\b/g;
  const achados = [...txt.matchAll(re)];
  if (!achados.length) return [{ t: null, texto: txt }];
  const marcas = [];
  for (let i = 0; i < achados.length; i++) {
    const a = achados[i];
    const fim = i + 1 < achados.length ? achados[i + 1].index : txt.length;
    const trecho = txt.slice(a.index + a[0].length, fim).replace(/^[\s:,;–—-]+|[\s,;]+$/g, "");
    const t = Math.round(Number(a[1].replace(",", ".")) * 100) / 100;
    marcas.push({ t, texto: trecho || txt });
  }
  return marcas;
}

/** Lê o arquivo e devolve a ÚLTIMA versão de cada id, na ordem em que o id nasceu. CRLF tolerado. */
export function lerFila(raiz) {
  const f = join(raiz, ARQ_FILA);
  let bruto;
  try { bruto = readFileSync(f, "utf8"); } catch { return []; }
  const porId = new Map();
  for (const l of bruto.split(/\r?\n/)) {                 // [porte Régie] CRLF: o arquivo pode ter passado por um editor do Windows
    if (!l.trim()) continue;
    let r; try { r = JSON.parse(l); } catch { continue; }  // linha truncada (queda no meio de um apêndice) não derruba a fila
    if (!r || typeof r !== "object" || Array.isArray(r)) continue;
    if (!r.id) { const m = daLinhaDoEstudio(r, l); porId.set(m.id, m); continue; }
    const antes = porId.get(r.id);
    // A primeira linha de um id sem status é marca nova: nasce aberta, nunca "sem status" (que
    // nenhum filtro enxerga e some calada).
    porId.set(r.id, { ...(antes || { status: "pendente" }), ...r, id: r.id });
  }
  return [...porId.values()];
}

/**
 * Linha do formato do estúdio (sem id): { ts, cena: "<abs>/out/<proj>/graphics/<id>.html", nome,
 * texto|opcao|tipo, marks: [s…] }. Vira marca ABERTA do projeto e da cena certos — projeto migrado
 * do estúdio não perde pedido do dono calado. O id é o hash da própria linha: estável, e o
 * `--marcar` o fecha como qualquer outro. [porte Régie]
 */
function daLinhaDoEstudio(r, linhaCrua) {
  const m = /(?:^|[\\/])out[\\/]([^\\/]+)[\\/]graphics[\\/]([^\\/]+)\.html$/i.exec(String(r.cena || ""));
  const marks = Array.isArray(r.marks) ? r.marks.map(Number).filter(Number.isFinite) : [];
  const texto = String(r.texto || r.feedback || r.opcao || r.tipo || "");
  return {
    id: "estudio-" + createHash("sha1").update(linhaCrua.trim()).digest("hex").slice(0, 12),
    proj: m ? m[1] : null,
    cena: m ? m[2] : (r.nome ? String(r.nome) : null),
    t: marks.length ? marks[0] : null,
    texto,
    ...(marks.length > 1 ? { comentario: texto } : {}),
    quando: r.ts || null,
    status: "pendente",
    tipo: "critica",
    legado: "estudio",
  };
}

// Cache pelo mtime: a página do player e o /api/marcas releem a fila a cada poucos segundos.
let _cache = { f: null, mt: -1, tam: -1, itens: [] };
export function lerFilaMemo(raiz) {
  const f = join(raiz, ARQ_FILA);
  let st; try { st = statSync(f); } catch { return []; }
  if (_cache.f === f && _cache.mt === st.mtimeMs && _cache.tam === st.size) return _cache.itens;
  const itens = lerFila(raiz);
  _cache = { f, mt: st.mtimeMs, tam: st.size, itens };
  return itens;
}

export const abertas = (itens) => itens.filter((m) => STATUS_ABERTOS.includes(m.status));

function apendar(raiz, linhas) {
  const f = join(raiz, ARQ_FILA);
  mkdirSync(dirname(f), { recursive: true });
  // UMA chamada de escrita para todas as linhas do comentário: ou entra o comentário inteiro, ou nada.
  appendFileSync(f, linhas.map((l) => JSON.stringify(l)).join("\n") + "\n", "utf8");
}

/**
 * Grava as marcas de um comentário. Devolve as linhas gravadas.
 * @param {{proj:string, cena:string, texto?:string, tipo?:"critica"|"aprovacao"}} d
 */
export function gravarComentario(raiz, { proj, cena, texto = "", tipo = "critica" }) {
  const quando = new Date().toISOString();
  if (tipo === "aprovacao") {
    const linha = { id: novoId(), proj, cena, t: null, texto: texto || "aprovada pelo dono", quando, status: "aprovada", tipo };
    apendar(raiz, [linha]);
    return [linha];
  }
  const marcas = quebrarEmMarcas(String(texto).slice(0, TEXTO_MAX));
  if (!marcas.length) return [];
  const comentario = String(texto).trim();
  const grupo = marcas.length > 1 ? novoId() : undefined;
  const linhas = marcas.map((m) => ({
    id: novoId(), proj, cena, t: m.t, texto: m.texto, quando, status: "pendente", tipo: "critica",
    ...(grupo ? { grupo } : {}),
    ...(comentario !== m.texto ? { comentario } : {}),
  }));
  apendar(raiz, linhas);
  return linhas;
}

/**
 * Muda o status de uma marca: apenda a linha nova, com os campos da marca repetidos (cada linha
 * se lê sozinha). Erro claro se o id não existe ou o status não é da lista.
 */
export function marcarStatus(raiz, id, status, nota = "") {
  if (!STATUS.includes(status)) throw new Error(`status "${status}" não existe — use um de: ${STATUS.join(", ")}`);
  const atual = lerFila(raiz).find((m) => m.id === id);
  if (!atual) throw new Error(`marca "${id}" não está em ${ARQ_FILA}`);
  const linha = { ...atual, status, nota: String(nota || ""), quando_status: new Date().toISOString() };
  apendar(raiz, [linha]);
  return linha;
}

export const filaExiste = (raiz) => existsSync(join(raiz, ARQ_FILA));
