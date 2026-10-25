#!/usr/bin/env node
// roteiro-motor.mjs — a porta do roteiro do canal para o motor sem rosto do Top10 (o vídeo 5 em diante).
// Converte o roteiro do canal ao formato que o portão "roteiro" do motor aceita, e confere as regras desse portão antes
// da entrega. Não chama modelo, não usa rede, não usa npm, não roda o portão nem aprova nada: o "aprovar" do portão é da
// Sala, com a palavra do Lucas (out/_maquina/motor-sem-rosto/requisitos.md §5).
//
//   node ferramentas/roteiro-motor.mjs converter <proj> [--de=narrador|voz] [--titulo="…"] [--saida=<arquivo.md>]
//                                                [--motor=<pasta>] [--cards=nenhum|titulo] [--raiz=<pasta>] [--json]
//   node ferramentas/roteiro-motor.mjs conferir <arquivo.md> [--motor=<pasta>] [--cards=nenhum|titulo] [--raiz=<pasta>] [--json]
//   (cwd = raiz do canal)
//   exit: 0 = limpo · 1 = achou problema (a lista diz a linha e a regra) · 2 = não rodou (uso errado, arquivo que não
//         existe, pasta do motor sem o validador, ou o validador do motor quebrou com erro que não é de roteiro).
//
// CONVERTER
//   --de=narrador (o padrão): lê roteiros/<proj>/roteiro-narrador.md, o texto aprovado, com algarismos (a grafia de tela).
//   --de=voz: lê roteiros/<proj>/voz/texto-para-voz.md, a cópia para a voz (números, anos e datas por extenso), que o
//     _ferramentas/preparar-voz.mjs do vídeo gera do roteiro-narrador.md. Ela não tem título nem marcas de parte: o título
//     e as partes vêm do roteiro-narrador.md, parágrafo por parágrafo. Antes, a porta confere que a cópia é desta revisão
//     do roteiro (o carimbo "> Revisão do roteiro: `<sha12>`" é o sha256 do texto falado de agora, como o gate.mjs o
//     calcula), que tem o mesmo número de parágrafos, e, se existe voz/trocas.md, que o sha da cópia é o que ele declara
//     (a cópia não foi mexida depois do preparar-voz). O out/<proj>/roteiro.md (o que o narrar.mjs da pré-v1 lê) é a
//     mesma cópia com um cabeçalho YAML; a porta não o lê.
//   O que sai: "# <título>" no topo (o do roteiro, ou --titulo), os parágrafos falados como o canal os lê (linhas aparadas
//   e juntadas por um espaço, um parágrafo por linha), e cada marca de parte "<!-- pN · Título -->" vira "## Título" no
//   mesmo lugar. Saem as notas (> …), os comentários (<!-- … -->, inclusive o do gancho, que não é parte) e o cabeçalho
//   YAML. Grava roteiros/<proj>/motor/roteiro-portao.md (ou --saida) e, ao lado, o .json com a fonte, o sha256 dela e o do
//   resultado, a revisão do roteiro e a hora. Só grava se a conversão e a conferência passam; se algo reprova, não grava
//   nada (e avisa se já havia uma saída de antes no destino, que não se entrega).
//   A conversão confere também a FIDELIDADE: o texto que o motor vai ler do resultado (a réplica dele, abaixo) é, parágrafo
//   por parágrafo, o texto aprovado, e as marcas caem antes dos mesmos parágrafos. Marcação inline (*, _, crase, link) o
//   motor limparia, e a voz leria outro texto: reprova.
//
// CONFERIR
//   As regras do portão: o "aprovar" do portão roda lerRoteiro(texto, {cards: canal.narracao?.cards ?? "titulo"})
//   (motor:scripts/sem-rosto/portao.mjs:84). Aqui está uma réplica de lerRoteiro (motor:scripts/sem-rosto/roteiro.mjs:26-30
//   e 37-106, top10-estudio no commit 6253755), com as mesmas expressões e as mesmas mensagens, que em vez de parar no
//   primeiro erro anota todos, na ordem em que o motor os acharia: o primeiro da lista é o que o motor diria.
//   O modo de card é o do canal: estudio/canal-motor.json › narracao.cards ("nenhum" no Alpha Point: o "##" é marca
//   invisível). Se o arquivo existe e não declara, vale "titulo", o padrão do motor; se não existe, "nenhum", a decisão
//   do canal (Lucas, 26/09/2026: capítulos só na descrição). --cards troca o modo (existe para a prova).
//   Mais as regras da Sala (requisitos §5, "O que a Sala entrega no portão"), medidas no texto CRU, antes da limpeza
//   inline do motor, e por isso um pouco mais duras que as dele: nenhum colchete em linha que o motor lê (fala, título,
//   marca; o motor deixa passar o colchete de link); nenhum parágrafo acima de 2.500 caracteres; nenhum «, », ( ou ) em
//   "##"; nenhuma marca no fim; pelo menos um parágrafo falado.
//   Avisos (não mudam a saída): sem título "#"; sem nenhuma "##" (a trilha do motor tem um bloco só, trilha.mjs:60-75);
//   texto acima do teto do canal por obra (narracao.limites.caracteres_max_por_obra, que o narrador cobra em
//   narrador.mjs:143-144, com o já pago); linha que o motor limpa (marcação inline); linha começada por "#" que o motor
//   lê como fala ("#1", "##" sozinho).
//   --motor=<pasta>: a pasta com scripts/sem-rosto/roteiro.mjs exportado do motor (git show, sem checkout). A conferência
//   roda também pelo lerRoteiro do PRÓPRIO motor, e as duas têm de concordar: as duas aceitam e leem o mesmo título e os
//   mesmos segmentos (tipo, texto, linha), ou as duas recusam e o primeiro erro da réplica é, letra por letra, o que o
//   motor lançou. Se discordam, é problema ("motor:discorda"), com o que cada uma disse.
//
// LIMITES
//   - A réplica é do commit 6253755. Motor novo: rode a prova (ferramentas/roteiro-motor-provar.mjs --clone=…
//     --commit=<novo>), que exporta o validador daquele commit e acusa a discordância.
//   - Não julga fato, estilo, ritmo nem pronúncia: isso é do gate.mjs do vídeo e da bancada.
//   - Na --de=voz, a prova de que a cópia é a do texto aprovado são os dois sha (o carimbo e o do trocas.md), não a
//     comparação palavra a palavra.
//   - Só "<!-- pN · Título -->", numa linha só e com o "·", vira marca; o comentário que parece marca e não está nessa
//     forma vira aviso e não entra.
//   - O --raiz existe para a prova: muda onde moram roteiros/<proj>/ e estudio/canal-motor.json.
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync, renameSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const MOTOR_COMMIT = "6253755";
export const LIMITE_CARACTERES_TRECHO = 2500;           // motor:scripts/sem-rosto/roteiro.mjs:20
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;               // motor:scripts/sem-rosto/portao.mjs:36
const sha256 = (b) => createHash("sha256").update(b).digest("hex");

export const FONTES = {
  "motor:yaml-sem-fecho": "motor, roteiro.mjs:43-45",
  "motor:dois-titulos": "motor, roteiro.mjs:79-80",
  "motor:marca-vazia": "motor, roteiro.mjs:83-85",
  "motor:sinais-na-marca": "motor, roteiro.mjs:86",
  "motor:cabecalho-3": "motor, roteiro.mjs:76,89",
  "motor:colchete": "motor, roteiro.mjs:55",
  "motor:paragrafo-longo": "motor, roteiro.mjs:20,56",
  "motor:comentario-sem-fecho": "motor, roteiro.mjs:94",
  "motor:sem-fala": "motor, roteiro.mjs:96",
  "motor:sem-card": "motor, roteiro.mjs:97-98",
  "motor:marcas-seguidas": "motor, roteiro.mjs:99-103",
  "motor:marca-no-fim": "motor, roteiro.mjs:99-101,104",
  "motor:discorda": "o lerRoteiro do próprio motor (--motor)",
  "sala:colchete": "Sala, requisitos §5 (nenhum colchete)",
  "sala:paragrafo-longo": "Sala, requisitos §5 (nenhum parágrafo acima de 2.500 caracteres)",
  "sala:sinais-na-marca": "Sala, requisitos §5 (nenhum «», ( ou ) em ##)",
  "sala:marca-no-fim": "Sala, requisitos §5 (nenhuma marca no fim)",
  "sala:sem-fala": "Sala, requisitos §5 (pelo menos um parágrafo falado)",
  "conv:sem-titulo": "porta: o roteiro tem um # (ou --titulo)",
  "conv:cabecalho": "porta: o roteiro do canal tem um # só, o título",
  "conv:partes-fora-de-ordem": "porta: as partes são p1, p2, … na ordem",
  "conv:parte-sem-titulo": "porta: a marca de parte tem título",
  "conv:voz-sem-carimbo": "porta: a cópia para a voz traz o carimbo da revisão",
  "conv:voz-de-outra-revisao": "porta: a cópia para a voz é da revisão de agora do roteiro",
  "conv:voz-paragrafos": "porta: a cópia para a voz tem os mesmos parágrafos",
  "conv:voz-mexida": "porta: a cópia para a voz é a que o trocas.md declara",
  "conv:fidelidade": "porta: o motor lê do resultado o texto aprovado",
};

// ── a réplica do motor ────────────────────────────────────────────────────────────────────────────────────────────────
// motor:scripts/sem-rosto/roteiro.mjs:26-30, cópia literal.
export const limparInline = (t) => t
  .replace(/\[([^\]]+)\]\((?:[^)]+)\)/g, "$1")
  .replace(/(\*\*|__)(.+?)\1/g, "$2").replace(/(^|[\s(])[*_]([^*_\n]+)[*_](?=[\s).,;:!?]|$)/g, "$1$2")
  .replace(/`([^`]+)`/g, "$1")
  .replace(/\s+/g, " ").trim();

/**
 * lerRoteiro do motor (roteiro.mjs:37-106), anotando os erros em vez de lançar o primeiro. Devolve
 * { titulo, segmentos (como o motor), brutos (o texto cru de cada segmento), lidas (as linhas que o motor lê, cruas),
 *   erros [{regra, linha, mensagem, texto}] na ordem do motor, tituloLinha, cerquilhas }.
 */
export function lerComoOMotor(texto, { cards = "titulo" } = {}) {
  const tipoDoH2 = cards === "nenhum" ? "marca" : "card";
  const erros = [], lidas = [], brutos = [], cerquilhas = [];
  const err = (regra, linha, mensagem) => erros.push({ regra, linha, mensagem, texto: linha ? `linha ${linha}: ${mensagem}` : mensagem });
  const s = String(texto).replace(/^﻿/, "").replace(/\r\n?/g, "\n");
  const linhas = s.split("\n");
  let i = 0;
  if (linhas[0]?.trim() === "---") {                                    // 43-47
    const fim = linhas.findIndex((l, k) => k > 0 && l.trim() === "---");
    if (fim < 0) { err("motor:yaml-sem-fecho", 1, "cabeçalho --- sem fechamento"); return { titulo: null, tituloLinha: null, segmentos: [], brutos, lidas, erros, cerquilhas, parou: true }; }
    i = fim + 1;
  }
  let titulo = null, tituloLinha = null, emComentario = false;
  const segmentos = [];
  let paragrafo = [], ini = null;
  const fecharParagrafo = () => {                                        // 51-60
    if (!paragrafo.length) return;
    const cru = paragrafo.join(" ");
    const t = limparInline(cru);
    if (t) {
      if (/[[\]]/.test(t)) err("motor:colchete", ini, "colchete no texto falado: marca de áudio não entra no relógio (tire ou escreva por extenso)");
      if (t.length > LIMITE_CARACTERES_TRECHO) err("motor:paragrafo-longo", ini, `parágrafo com ${t.length} caracteres (máximo ${LIMITE_CARACTERES_TRECHO} por pedido à voz): divida`);
      segmentos.push({ tipo: "fala", texto: t, linha: ini }); brutos.push(cru);
    }
    paragrafo = []; ini = null;
  };
  for (; i < linhas.length; i++) {                                       // 61-93
    let l = linhas[i];
    const n = i + 1;
    if (emComentario) {
      const f = l.indexOf("-->");
      if (f < 0) continue;
      l = l.slice(f + 3); emComentario = false;
    }
    l = l.replace(/<!--[\s\S]*?-->/g, "");
    const abre = l.indexOf("<!--");
    if (abre >= 0) { emComentario = true; l = l.slice(0, abre); }
    const t = l.trim();
    if (!t) { fecharParagrafo(); continue; }
    if (/^>/.test(t)) { fecharParagrafo(); continue; }
    lidas.push({ linha: n, texto: t });
    const h = t.match(/^(#{1,6})\s+(.*?)\s*#*$/);
    if (h) {
      fecharParagrafo();
      if (h[1].length === 1) {
        if (titulo !== null) { err("motor:dois-titulos", n, "dois títulos (#): o vídeo tem um título só"); continue; }
        titulo = limparInline(h[2]); tituloLinha = n; continue;
      }
      if (h[1].length === 2) {
        const card = limparInline(h[2]);
        if (!card) { err("motor:marca-vazia", n, "card de título vazio"); continue; }
        if (/[«»()]/.test(card)) err("motor:sinais-na-marca", n, "card com «», ( ou ): o registro do card usa esses sinais como delimitadores");
        segmentos.push({ tipo: tipoDoH2, titulo: card, linha: n }); brutos.push(h[2]); continue;
      }
      err("motor:cabecalho-3", n, `cabeçalho ${h[1]} não tem papel no roteiro narrado (use # para o título e ## para card)`); continue;
    }
    if (/^#/.test(t)) cerquilhas.push(n);
    if (ini === null) ini = n;
    paragrafo.push(t);
  }
  if (emComentario) err("motor:comentario-sem-fecho", null, "comentário <!-- sem fechamento");   // 94
  fecharParagrafo();                                                                              // 95
  if (!segmentos.some((x) => x.tipo === "fala")) err("motor:sem-fala", null, "roteiro sem nenhum parágrafo falado");
  if (cards === "titulo" && !segmentos.some((x) => x.tipo === "card"))
    err("motor:sem-card", null, "roteiro sem card de título (##): o espelho do vídeo novo precisa de ao menos um (canal sem card: narracao.cards «nenhum»)");
  const [seguidos, noFim] = cards === "nenhum"
    ? ["duas marcas (##) seguidas, sem fala entre elas", "o roteiro termina numa marca (##): depois da marca vem fala"]
    : ["dois cards seguidos, sem fala entre eles", "o roteiro termina num card: depois do card vem fala"];
  for (let k = 1; k < segmentos.length; k++)
    if (segmentos[k].tipo === tipoDoH2 && segmentos[k - 1].tipo === tipoDoH2) err("motor:marcas-seguidas", segmentos[k].linha, seguidos);
  if (segmentos.length && segmentos.at(-1).tipo === tipoDoH2) err("motor:marca-no-fim", segmentos.at(-1).linha, noFim);
  return { titulo, tituloLinha, segmentos, brutos, lidas, erros, cerquilhas, parou: false };
}

// ── a conferência ─────────────────────────────────────────────────────────────────────────────────────────────────────
function regrasDaSala(lido) {
  const p = [];
  if (lido.parou) return p;     // o cabeçalho YAML sem fecho: o motor não lê nada, e a Sala não tem o que medir
  const err = (regra, linha, mensagem) => p.push({ regra, linha, mensagem });
  for (const l of lido.lidas)
    if (/[[\]]/.test(l.texto)) err("sala:colchete", l.linha, "colchete numa linha que o motor lê (a Sala não deixa nenhum, nem em link, título ou marca; o motor recusa só o da fala, depois de limpar o link)");
  lido.segmentos.forEach((s, k) => {
    const cru = lido.brutos[k];
    if (s.tipo === "fala" && cru.length > LIMITE_CARACTERES_TRECHO)
      err("sala:paragrafo-longo", s.linha, `parágrafo com ${cru.length} caracteres no texto cru (máximo ${LIMITE_CARACTERES_TRECHO}): divida`);
    if (s.tipo !== "fala" && /[«»()]/.test(cru)) err("sala:sinais-na-marca", s.linha, "«, », ( ou ) no título da parte (##), contado antes da limpeza do motor");
  });
  if (!lido.segmentos.some((s) => s.tipo === "fala")) err("sala:sem-fala", null, "nenhum parágrafo falado");
  const ult = lido.segmentos.at(-1);
  if (ult && ult.tipo !== "fala") err("sala:marca-no-fim", ult.linha, "o roteiro termina numa marca (##): o fim tem de ser fala");
  return p;
}

function avisosDe(lido, { limite }) {
  const a = [];
  const falas = lido.segmentos.filter((s) => s.tipo === "fala");
  if (lido.titulo === null && !lido.parou) a.push({ regra: "aviso:sem-titulo", linha: null, mensagem: "sem título (#): a Sala entrega \"# <título de trabalho>\" (requisitos §5)" });
  if (!lido.parou && !lido.segmentos.some((s) => s.tipo !== "fala")) a.push({ regra: "aviso:sem-marca", linha: null, mensagem: "nenhuma marca (##): os capítulos da descrição não têm instante, e a trilha tem um bloco só (trilha.mjs:60-75)" });
  const total = falas.reduce((x, s) => x + s.texto.length, 0);
  if (limite && total > limite) a.push({ regra: "aviso:limite-da-obra", linha: null, mensagem: `o texto falado tem ${total} caracteres, acima do teto do canal por obra (${limite}; narrador.mjs:143-144)` });
  lido.segmentos.forEach((s, k) => {
    if (s.tipo !== "fala") return;
    const cru = lido.brutos[k].replace(/\s+/g, " ").trim();
    if (cru !== s.texto) a.push({ regra: "aviso:inline", linha: s.linha, mensagem: `o motor limpa a marcação deste parágrafo, e a voz lê outro texto: «${trecho(s.texto, cru)}»` });
  });
  for (const n of lido.cerquilhas) a.push({ regra: "aviso:cerquilha", linha: n, mensagem: "linha começada por # que o motor lê como FALA (o cabeçalho pede espaço depois de # a ######)" });
  return a;
}

// o primeiro ponto em que dois textos diferem, com um pouco de contexto (para a mensagem)
function trecho(a, b) {
  let k = 0; while (k < a.length && k < b.length && a[k] === b[k]) k++;
  const ini = Math.max(0, k - 25);
  return `${ini ? "…" : ""}${a.slice(ini, k + 35)}${k + 35 < a.length ? "…" : ""}» onde o texto diz «${ini ? "…" : ""}${b.slice(ini, k + 35)}${k + 35 < b.length ? "…" : ""}`;
}

async function carregarMotor(pasta) {
  const f = resolve(pasta, "scripts", "sem-rosto", "roteiro.mjs");
  if (!existsSync(f)) throw new ErroUso(`--motor=${pasta}: não achei scripts/sem-rosto/roteiro.mjs nessa pasta (exporte-o com git show, sem checkout)`);
  const mod = await import(pathToFileURL(f).href);
  if (typeof mod.lerRoteiro !== "function") throw new ErroUso(`--motor=${pasta}: o roteiro.mjs não exporta lerRoteiro`);
  let origem = null;
  const fo = resolve(pasta, "ORIGEM.json");
  if (existsSync(fo)) { try { origem = JSON.parse(readFileSync(fo, "utf8")); } catch { origem = "ORIGEM.json ilegível"; } }
  return { mod, arquivo: f, sha256: sha256(readFileSync(f)), origem };
}

/** Roda o lerRoteiro do próprio motor e compara com a réplica. */
function pelaMotor(motor, texto, cards, lido) {
  let r = null, e = null;
  try { r = motor.mod.lerRoteiro(texto, { cards }); } catch (x) { e = x; }
  const ehDeRoteiro = e && ((motor.mod.ErroRoteiro && e instanceof motor.mod.ErroRoteiro) || e.name === "ErroRoteiro");
  if (e && !ehDeRoteiro) throw new ErroUso(`o lerRoteiro do motor quebrou com um erro que não é de roteiro: ${e.stack || e}`);
  const meus = lido.erros.filter((x) => x.regra.startsWith("motor:"));
  const base = { pasta: motor.arquivo, roteiro_mjs_sha256: motor.sha256, origem: motor.origem, aceita: !e, mensagem: e ? e.message : null };
  if (!e && !meus.length) {
    const a = JSON.stringify({ titulo: r.titulo, segmentos: r.segmentos }), b = JSON.stringify({ titulo: lido.titulo, segmentos: lido.segmentos });
    if (a === b) return { ...base, concorda: true, detalhe: `as duas aceitam, com o mesmo título e os mesmos ${r.segmentos.length} segmentos` };
    return { ...base, concorda: false, detalhe: `as duas aceitam, mas leem diferente: motor ${a.slice(0, 300)} · réplica ${b.slice(0, 300)}` };
  }
  if (e && meus.length && e.message === meus[0].texto) return { ...base, concorda: true, detalhe: "as duas recusam, com o mesmo primeiro erro" };
  if (e && !meus.length) return { ...base, concorda: false, detalhe: `o motor recusa («${e.message}») e a réplica aceita` };
  if (!e) return { ...base, concorda: false, detalhe: `o motor aceita e a réplica recusa («${meus[0].texto}»)` };
  return { ...base, concorda: false, detalhe: `as duas recusam, com erros diferentes: motor «${e.message}» · réplica «${meus[0].texto}»` };
}

export function modoDeCards(raiz, opc) {
  if (opc !== null && opc !== undefined) {
    if (!["nenhum", "titulo"].includes(opc)) throw new ErroUso(`--cards=${opc}: o motor só conhece «titulo» e «nenhum» (roteiro.mjs:38)`);
    return { cards: opc, de: "--cards", limite: lerCanalMotor(raiz)?.narracao?.limites?.caracteres_max_por_obra ?? null };
  }
  const j = lerCanalMotor(raiz);
  if (j === null) return { cards: "nenhum", de: "o padrão do canal (Lucas, 26/09/2026), porque estudio/canal-motor.json não existe ou não se lê", limite: null };
  const c = j?.narracao?.cards, limite = j?.narracao?.limites?.caracteres_max_por_obra ?? null;
  if (["nenhum", "titulo"].includes(c)) return { cards: c, de: "estudio/canal-motor.json › narracao.cards", limite };
  return { cards: "titulo", de: "o padrão do motor (portao.mjs:84), porque estudio/canal-motor.json não declara narracao.cards", limite };
}
function lerCanalMotor(raiz) {
  const f = join(raiz, "estudio", "canal-motor.json");
  if (!existsSync(f)) return null;
  try { return JSON.parse(readFileSync(f, "utf8")); } catch { return null; }
}

/** A conferência de um texto: as regras do motor (réplica), as da Sala, os avisos e, com motor, a concordância. */
export function conferirTexto(texto, { cards, limite = null, motor = null }) {
  const lido = lerComoOMotor(texto, { cards });
  const problemas = [...lido.erros.map(({ regra, linha, mensagem }) => ({ regra, linha, mensagem })), ...regrasDaSala(lido)];
  const avisos = avisosDe(lido, { limite });
  let m = null;
  if (motor) {
    m = pelaMotor(motor, texto, cards, lido);
    if (!m.concorda) problemas.push({ regra: "motor:discorda", linha: null, mensagem: `a réplica e o motor discordam: ${m.detalhe}` });
  }
  for (const x of [...problemas, ...avisos]) x.fonte = FONTES[x.regra] ?? null;
  problemas.sort((a, b) => (a.linha ?? 1e9) - (b.linha ?? 1e9));
  const falas = lido.segmentos.filter((s) => s.tipo === "fala");
  const maior = falas.reduce((x, s) => (!x || s.texto.length > x.texto.length ? s : x), null);
  return {
    lido, problemas, avisos, motor: m,
    contagem: {
      paragrafos: falas.length, marcas: lido.segmentos.length - falas.length,
      caracteres_falados: falas.reduce((x, s) => x + s.texto.length, 0),
      maior_paragrafo: maior ? { linha: maior.linha, caracteres: maior.texto.length } : null,
    },
    titulo: lido.titulo,
  };
}

// ── a leitura do roteiro do canal ─────────────────────────────────────────────────────────────────────────────────────
// paragrafosDe: cópia literal da de roteiros/peru-agua/_ferramentas/gate.mjs:144-158 (a mesma do preparar-voz.mjs), sobre
// o texto já sem BOM e com fim de linha LF. O sha256 dos parágrafos juntados por "\n\n" é a revisão do roteiro.
function paragrafosDe(texto) {
  const paragrafos = [];
  let buf = [], emComentario = false;
  for (const l of texto.split("\n")) {
    let t = l;
    if (emComentario) { if (t.includes("-->")) { emComentario = false; t = t.slice(t.indexOf("-->") + 3); } else continue; }
    t = t.replace(/<!--.*?-->/g, "");
    if (t.includes("<!--")) { emComentario = true; t = t.slice(0, t.indexOf("<!--")); }
    if (/^\s*#/.test(t) || /^\s*>/.test(t)) { if (buf.length) { paragrafos.push(buf.join(" ")); buf = []; } continue; }
    if (!t.trim()) { if (buf.length) { paragrafos.push(buf.join(" ")); buf = []; } continue; }
    buf.push(t.trim());
  }
  if (buf.length) paragrafos.push(buf.join(" "));
  return paragrafos;
}

const MARCA_PARTE = /^\s*<!--\s*p(\d+)\s*·\s*(.*?)\s*-->\s*$/;
const PARECE_PARTE = /^\s*<!--\s*p\d+\b/;

/** O roteiro do canal em blocos: título, partes (com o índice do parágrafo que vem depois), parágrafos com a linha. */
export function lerFonteDoCanal(bruto) {
  let texto = String(bruto).replace(/^﻿/, "").replace(/\r\n?/g, "\n");
  const avisos = [];
  let linhas = texto.split("\n"), desloc = 0;
  if (linhas[0]?.trim() === "---") {
    const fim = linhas.findIndex((l, k) => k > 0 && l.trim() === "---");
    if (fim > 0) {
      avisos.push({ regra: "aviso:yaml-na-fonte", linha: 1, mensagem: `cabeçalho YAML nas linhas 1-${fim + 1}: sai do resultado, mas o gate.mjs e o preparar-voz.mjs do canal o leriam como fala` });
      desloc = fim + 1; linhas = linhas.slice(fim + 1); texto = linhas.join("\n");
    }
  }
  const titulos = [], cabecalhos = [], partes = [], paragrafos = [], carimbos = [];
  let buf = [], ini = null, emComentario = false;
  const fechar = () => { if (buf.length) { paragrafos.push({ texto: buf.join(" "), linha: ini }); buf = []; ini = null; } };
  linhas.forEach((l, k) => {
    const n = k + 1 + desloc;
    let t = l;
    const dentro = emComentario;
    if (emComentario) { if (t.includes("-->")) { emComentario = false; t = t.slice(t.indexOf("-->") + 3); } else return; }
    const parte = !dentro && l.match(MARCA_PARTE);
    if (parte) { fechar(); partes.push({ n: +parte[1], titulo: parte[2], linha: n, antes: paragrafos.length }); return; }
    if (!dentro && PARECE_PARTE.test(l)) avisos.push({ regra: "aviso:marca-malformada", linha: n, mensagem: "comentário que parece marca de parte e não está na forma \"<!-- pN · Título -->\": não vira ##" });
    t = t.replace(/<!--.*?-->/g, "");
    if (t.includes("<!--")) { emComentario = true; t = t.slice(0, t.indexOf("<!--")); }
    if (/^\s*#/.test(t)) {
      fechar();
      const h = t.trim().match(/^#\s+(.*?)\s*$/);
      if (h && !titulos.length) titulos.push({ texto: h[1], linha: n }); else cabecalhos.push({ texto: t.trim(), linha: n });
      return;
    }
    if (/^\s*>/.test(t)) {
      fechar();
      const c = t.match(/Revisão do roteiro:\s*`?([0-9a-f]{12,64})`?/);
      if (c) carimbos.push({ hex: c[1], linha: n });
      return;
    }
    if (!t.trim()) { fechar(); return; }
    if (ini === null) ini = n;
    buf.push(t.trim());
  });
  fechar();
  // a leitura em blocos tem de dar os mesmos parágrafos que a do canal (senão a revisão calculada não seria a dele)
  const doCanal = paragrafosDe(texto);
  const iguais = doCanal.length === paragrafos.length && doCanal.every((p, k) => p === paragrafos[k].texto);
  return { titulos, cabecalhos, partes, paragrafos, carimbos, avisos, iguais, revisao: sha256(doCanal.join("\n\n")) };
}

// ── a conversão ───────────────────────────────────────────────────────────────────────────────────────────────────────
/** O texto do portão. `de[n-1]` é a origem da linha n do resultado ({arquivo, linha} na fonte), para os problemas. */
export function montar({ titulo, tituloOrigem = null, partes, paragrafos, origens = [] }) {
  const out = [`# ${titulo}`, ""], de = [tituloOrigem, null];
  const porIndice = new Map();
  for (const p of partes) { if (!porIndice.has(p.antes)) porIndice.set(p.antes, []); porIndice.get(p.antes).push(p); }
  for (let k = 0; k <= paragrafos.length; k++) {
    for (const p of porIndice.get(k) || []) { out.push(`## ${p.titulo}`, ""); de.push(p.origem ?? null, null); }
    if (k < paragrafos.length) { out.push(paragrafos[k], ""); de.push(origens[k] ?? null, null); }
  }
  while (out.at(-1) === "") { out.pop(); de.pop(); }
  return { texto: out.join("\n") + "\n", de };
}

class ErroUso extends Error {}

const relDe = (raiz, f) => { const r = relative(raiz, f); return (!r.startsWith("..") && !isAbsolute(r) ? r : resolve(f)).replace(/\\/g, "/"); };
const horaBrasilia = (d) => d.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "medium" });

async function converter(proj, o) {
  const raiz = resolve(o.raiz ?? process.cwd());
  if (!proj) throw new ErroUso("uso: converter <proj> [--de=narrador|voz] [--titulo=\"…\"] [--saida=<arquivo.md>] [--motor=<pasta>]");
  if (!SLUG.test(proj)) throw new ErroUso(`<proj> «${proj}» não é um slug (^[a-z0-9]+(?:-[a-z0-9]+)*$, o mesmo do portão: portao.mjs:36)`);
  const de = o.de ?? "narrador";
  if (!["narrador", "voz"].includes(de)) throw new ErroUso(`--de=${de}: é narrador ou voz`);
  if (o.titulo !== null && o.titulo !== undefined && !String(o.titulo).trim()) throw new ErroUso("--titulo vazio");
  const fNarr = join(raiz, "roteiros", proj, "roteiro-narrador.md");
  const fVoz = join(raiz, "roteiros", proj, "voz", "texto-para-voz.md");
  const fTrocas = join(raiz, "roteiros", proj, "voz", "trocas.md");
  if (!existsSync(fNarr)) throw new ErroUso(`não encontrado: ${relDe(raiz, fNarr)}`);
  if (de === "voz" && !existsSync(fVoz)) throw new ErroUso(`não encontrado: ${relDe(raiz, fVoz)} (a cópia para a voz; rode o _ferramentas/preparar-voz.mjs do vídeo)`);
  const saida = resolve(o.saida ?? join(raiz, "roteiros", proj, "motor", "roteiro-portao.md"));
  const saidaJson = saida.replace(/\.md$/i, "") + ".json";
  const modo = modoDeCards(raiz, o.cards);
  const motor = o.motor ? await carregarMotor(o.motor) : null;

  const bNarr = readFileSync(fNarr);
  const narr = lerFonteDoCanal(bNarr.toString("utf8"));
  if (!narr.iguais) throw new ErroUso("a leitura em blocos divergiu da paragrafosDe do canal (defeito da porta): não converto");
  const problemas = [], avisos = [...narr.avisos];
  const prob = (regra, linha, mensagem, arquivo) => problemas.push({ regra, linha, mensagem, arquivo, fonte: FONTES[regra] });
  const aNarr = relDe(raiz, fNarr);
  const titulo = o.titulo ? String(o.titulo).trim() : narr.titulos[0]?.texto ?? null;
  if (!titulo) prob("conv:sem-titulo", null, "o roteiro não tem \"# título\" e não veio --titulo", aNarr);
  for (const c of narr.cabecalhos) prob("conv:cabecalho", c.linha, `linha começada por # que não é o título («${c.texto.slice(0, 60)}»): o canal não usa, e a porta não sabe o que fazer com ela`, aNarr);
  narr.partes.forEach((p, k) => {
    if (p.n !== k + 1) prob("conv:partes-fora-de-ordem", p.linha, `a marca é p${p.n}, e a ${k + 1}ª parte devia ser p${k + 1}`, aNarr);
    if (!p.titulo.trim()) prob("conv:parte-sem-titulo", p.linha, `a marca p${p.n} não tem título`, aNarr);
  });

  let paragrafos = narr.paragrafos.map((p) => p.texto), linhaFonte = narr.paragrafos.map((p) => p.linha), fonte = { arquivo: aNarr, sha256: sha256(bNarr) };
  const registro = { estrutura: null, trocas: null };
  let fArqFonte = fNarr;
  if (de === "voz") {
    const bVoz = readFileSync(fVoz), aVoz = relDe(raiz, fVoz);
    const voz = lerFonteDoCanal(bVoz.toString("utf8"));
    if (!voz.iguais) throw new ErroUso("a leitura em blocos divergiu da paragrafosDe do canal na cópia para a voz (defeito da porta): não converto");
    avisos.push(...voz.avisos);
    const rev12 = narr.revisao.slice(0, 12);
    if (!voz.carimbos.length) prob("conv:voz-sem-carimbo", null, "a cópia para a voz não tem a linha \"> Revisão do roteiro: `<sha12>`\"", aVoz);
    else if (voz.carimbos[0].hex.slice(0, 12) !== rev12)
      prob("conv:voz-de-outra-revisao", voz.carimbos[0].linha, `a cópia é da revisão ${voz.carimbos[0].hex.slice(0, 12)}, e o roteiro-narrador.md está na ${rev12}: rode o _ferramentas/preparar-voz.mjs do vídeo`, aVoz);
    if (voz.paragrafos.length !== narr.paragrafos.length)
      prob("conv:voz-paragrafos", null, `a cópia tem ${voz.paragrafos.length} parágrafos, e o roteiro tem ${narr.paragrafos.length}`, aVoz);
    for (const c of voz.cabecalhos.concat(voz.titulos)) prob("conv:cabecalho", c.linha, "linha começada por # na cópia para a voz", aVoz);
    if (voz.partes.length) avisos.push({ regra: "aviso:partes-na-voz", linha: voz.partes[0].linha, mensagem: "a cópia para a voz tem marcas de parte; valem as do roteiro-narrador.md" });
    const textoVoz = voz.paragrafos.map((p) => p.texto).join("\n\n");
    if (existsSync(fTrocas)) {
      const tr = readFileSync(fTrocas, "utf8");
      const m = tr.match(/Cópia para a voz: `texto-para-voz\.md` \(sem a linha do carimbo\), sha256 `([0-9a-f]{12,64})`/);
      const calc = sha256(textoVoz);
      registro.trocas = { arquivo: relDe(raiz, fTrocas), sha256: sha256(Buffer.from(tr)), declara: m ? m[1] : null, calculado: calc.slice(0, 12) };
      if (!m) prob("conv:voz-mexida", null, "o trocas.md não declara o sha da cópia (\"Cópia para a voz: `texto-para-voz.md` (sem a linha do carimbo), sha256 `…`\")", relDe(raiz, fTrocas));
      else if (!calc.startsWith(m[1])) prob("conv:voz-mexida", null, `o texto da cópia tem sha ${calc.slice(0, 12)}, e o trocas.md declara ${m[1]}: a cópia mudou depois do preparar-voz`, aVoz);
    } else avisos.push({ regra: "aviso:voz-sem-trocas", linha: null, mensagem: "sem voz/trocas.md: não deu para conferir que a cópia é a que o preparar-voz gerou (só o carimbo)" });
    const dig = voz.paragrafos.find((p) => /[\d$%]/.test(p.texto));
    if (dig) avisos.push({ regra: "aviso:voz-com-algarismo", linha: dig.linha, mensagem: "sobrou algarismo, $ ou % na cópia para a voz" });
    registro.estrutura = { arquivo: aNarr, sha256: sha256(bNarr) };
    paragrafos = voz.paragrafos.map((p) => p.texto); linhaFonte = voz.paragrafos.map((p) => p.linha);
    fonte = { arquivo: aVoz, sha256: sha256(bVoz) }; fArqFonte = fVoz;
  }

  let texto = null, conf = null;
  if (!problemas.length) {
    const aFonteP = relDe(raiz, fArqFonte);
    const m = montar({
      titulo, tituloOrigem: o.titulo ? { arquivo: "--titulo", linha: null } : { arquivo: aNarr, linha: narr.titulos[0].linha },
      partes: narr.partes.map((p) => ({ ...p, origem: { arquivo: aNarr, linha: p.linha } })),
      paragrafos, origens: linhaFonte.map((l) => ({ arquivo: aFonteP, linha: l })),
    });
    texto = m.texto;
    // a fidelidade: o que o motor lê do resultado é o texto aprovado
    const lido = lerComoOMotor(texto, { cards: modo.cards });
    const falas = lido.segmentos.filter((s) => s.tipo === "fala");
    const aFonte = relDe(raiz, fArqFonte);
    paragrafos.forEach((p, k) => {
      const esperado = p.replace(/\s+/g, " ").trim();
      if (!falas[k]) prob("conv:fidelidade", linhaFonte[k], `o motor não lê este parágrafo do resultado`, aFonte);
      else if (falas[k].texto !== esperado) prob("conv:fidelidade", linhaFonte[k], `o motor leria outro texto: «${trecho(falas[k].texto, esperado)}»`, aFonte);
    });
    if (falas.length > paragrafos.length) prob("conv:fidelidade", null, `o motor lê ${falas.length} parágrafos do resultado, e a fonte tem ${paragrafos.length}`, aFonte);
    let kf = 0; const antes = [];
    for (const s of lido.segmentos) { if (s.tipo === "fala") kf++; else antes.push({ antes: kf, titulo: s.titulo }); }
    // as marcas: as mesmas partes, antes dos mesmos parágrafos, com o título que o roteiro escreve (o capítulo da descrição)
    const esperadas = narr.partes.map((p) => ({ antes: p.antes, titulo: p.titulo.replace(/\s+/g, " ").trim() }));
    if (JSON.stringify(antes) !== JSON.stringify(esperadas)) prob("conv:fidelidade", null, `as marcas que o motor lê (${JSON.stringify(antes)}) não são as partes do roteiro (${JSON.stringify(esperadas)})`, aNarr);
    if (titulo && lido.titulo !== titulo) avisos.push({ regra: "aviso:titulo", linha: 1, mensagem: `o motor registra o título como «${lido.titulo}» (o roteiro diz «${titulo}»)` });
    if (!problemas.length) {
      conf = conferirTexto(texto, { cards: modo.cards, limite: modo.limite, motor });
      for (const p of conf.problemas) {
        const d = p.linha ? m.de[p.linha - 1] : null;
        problemas.push({ ...p, arquivo: d?.arquivo ?? "(o resultado, que não foi gravado)", linha: d ? d.linha : p.linha, linha_no_resultado: p.linha });
      }
    }
  }

  const relatorio = {
    schema: "alpha-point-roteiro-motor/1", proj, de, fonte,
    revisao_do_roteiro: narr.revisao.slice(0, 12), revisao_do_roteiro_sha256: narr.revisao,
    estrutura: registro.estrutura, trocas: registro.trocas, titulo,
    titulo_de: o.titulo ? "--titulo" : "o # do roteiro-narrador.md",
    marcas: narr.partes.map((p) => ({ n: p.n, titulo: p.titulo, antes_do_paragrafo: p.antes + 1, linha_na_fonte: p.linha })),
    cards: modo.cards, cards_de: modo.de, motor_replicado: `top10-estudio @ ${MOTOR_COMMIT} (scripts/sem-rosto/roteiro.mjs)`,
    ferramenta: { arquivo: relDe(raiz, fileURLToPath(import.meta.url)), sha256: sha256(readFileSync(fileURLToPath(import.meta.url))) },
  };

  if (problemas.length) {
    if (existsSync(saida)) avisos.push({ regra: "aviso:saida-antiga", linha: null, mensagem: `${relDe(raiz, saida)} é de uma conversão anterior e NÃO é esta: não a entregue` });
    return { codigo: 1, relatorio: { ...relatorio, gravado: false, problemas, avisos, contagem: conf?.contagem ?? null } };
  }
  // grava o .md, confere o que ficou no disco, e só então grava o .json
  mkdirSync(dirname(saida), { recursive: true });
  writeFileSync(saida + ".parcial", texto); renameSync(saida + ".parcial", saida);
  const noDisco = readFileSync(saida);
  const confDisco = conferirTexto(noDisco.toString("utf8"), { cards: modo.cards, limite: modo.limite, motor });
  const agora = new Date();
  const final = {
    ...relatorio, gravado: true,
    resultado: { arquivo: relDe(raiz, saida), sha256: sha256(noDisco), bytes: noDisco.length },
    contagem: confDisco.contagem,
    conferencia: {
      saida: confDisco.problemas.length ? 1 : 0, problemas: confDisco.problemas,
      motor: confDisco.motor ? { aceita: confDisco.motor.aceita, concorda: confDisco.motor.concorda, detalhe: confDisco.motor.detalhe, roteiro_mjs_sha256: confDisco.motor.roteiro_mjs_sha256, origem: confDisco.motor.origem } : null,
    },
    avisos: [...avisos, ...confDisco.avisos],
    gerado_em: agora.toISOString(), gerado_em_brasilia: horaBrasilia(agora),
  };
  writeFileSync(saidaJson + ".parcial", JSON.stringify(final, null, 2) + "\n"); renameSync(saidaJson + ".parcial", saidaJson);
  final.json = relDe(raiz, saidaJson);
  return { codigo: final.conferencia.saida, relatorio: final };
}

async function conferir(arquivo, o) {
  const raiz = resolve(o.raiz ?? process.cwd());
  if (!arquivo) throw new ErroUso("uso: conferir <arquivo.md> [--motor=<pasta>] [--cards=nenhum|titulo]");
  const f = resolve(arquivo);
  if (!existsSync(f) || !statSync(f).isFile()) throw new ErroUso(`não encontrado: ${arquivo}`);
  const modo = modoDeCards(raiz, o.cards);
  const motor = o.motor ? await carregarMotor(o.motor) : null;
  const bytes = readFileSync(f);
  const c = conferirTexto(bytes.toString("utf8"), { cards: modo.cards, limite: modo.limite, motor });
  return {
    codigo: c.problemas.length ? 1 : 0,
    relatorio: {
      schema: "alpha-point-roteiro-motor-conferencia/1", arquivo: relDe(raiz, f), sha256: sha256(bytes),
      cards: modo.cards, cards_de: modo.de, limite_da_obra: modo.limite, motor_replicado: `top10-estudio @ ${MOTOR_COMMIT} (scripts/sem-rosto/roteiro.mjs)`,
      titulo: c.titulo, contagem: c.contagem, problemas: c.problemas, avisos: c.avisos,
      motor: c.motor, saida: c.problemas.length ? 1 : 0,
    },
  };
}

// ── a saída legível ───────────────────────────────────────────────────────────────────────────────────────────────────
const fmt = (n) => Number(n).toLocaleString("pt-BR");
function linhaDe(x) {
  const onde = `${x.linha ? `linha ${x.linha}` : "(o arquivo)"}${x.arquivo ? ` de ${x.arquivo}` : ""}${x.linha_no_resultado ? ` (linha ${x.linha_no_resultado} do resultado)` : ""}`;
  return `  ✗ ${onde} · ${x.regra} (${x.fonte ?? "?"}) · ${x.mensagem}`;
}
function resumo(verbo, r, codigo) {
  const L = [];
  if (verbo === "converter") {
    L.push(`converter ${r.proj} --de=${r.de}: ${r.fonte.arquivo} (sha256 ${r.fonte.sha256.slice(0, 12)}), revisão do roteiro ${r.revisao_do_roteiro}`);
    if (r.estrutura) L.push(`  título e partes de ${r.estrutura.arquivo}${r.trocas ? `; a cópia confere com ${r.trocas.arquivo} (${r.trocas.declara ?? "sem declaração"})` : ""}`);
    L.push(`  cards «${r.cards}» (${r.cards_de}) · réplica do motor ${r.motor_replicado}`);
  } else {
    L.push(`conferir ${r.arquivo} (sha256 ${r.sha256.slice(0, 12)})`);
    L.push(`  cards «${r.cards}» (${r.cards_de}) · réplica do motor ${r.motor_replicado}`);
  }
  const c = r.contagem;
  if (c) L.push(`  ${c.paragrafos} ${c.paragrafos === 1 ? "parágrafo falado" : "parágrafos falados"} · ${c.marcas} ${c.marcas === 1 ? "marca" : "marcas"} ## · ${fmt(c.caracteres_falados)} caracteres falados${c.maior_paragrafo ? ` · o maior: ${fmt(c.maior_paragrafo.caracteres)} (linha ${c.maior_paragrafo.linha})` : ""}${r.titulo ? ` · título «${r.titulo}»` : ""}`);
  const probs = verbo === "converter" ? (r.gravado ? r.conferencia.problemas : r.problemas) : r.problemas;
  const motor = verbo === "converter" ? r.conferencia?.motor ?? null : r.motor;
  if (!probs.length) L.push("  ✓ regras do motor (réplica) e da Sala: nenhum problema");
  for (const x of probs) L.push(linhaDe(x));
  if (motor) L.push(`  ${motor.concorda ? "✓" : "✗"} o lerRoteiro do próprio motor (roteiro.mjs sha256 ${motor.roteiro_mjs_sha256.slice(0, 12)}${motor.origem?.commit ? `, commit ${motor.origem.commit}` : ""}): ${motor.aceita ? "aceita" : "recusa"}; ${motor.concorda ? "concorda com a réplica" : "DISCORDA da réplica"} (${motor.detalhe})`);
  else L.push("  - o lerRoteiro do próprio motor: não rodou (sem --motor)");
  for (const a of r.avisos || []) L.push(`  aviso · ${a.linha ? `linha ${a.linha} · ` : ""}${a.regra} · ${a.mensagem}`);
  if (verbo === "converter") L.push(r.gravado ? `  gravado: ${r.resultado.arquivo} (sha256 ${r.resultado.sha256.slice(0, 12)}, ${fmt(r.resultado.bytes)} bytes) e ${r.json}` : "  nada gravado");
  L.push(`saída ${codigo}`);
  return L.join("\n");
}

// ── a linha de comando ────────────────────────────────────────────────────────────────────────────────────────────────
const OPCOES = { converter: ["de", "titulo", "saida", "motor", "cards", "raiz", "json"], conferir: ["motor", "cards", "raiz", "json"] };
async function main(argv) {
  const [verbo, ...resto] = argv;
  if (!OPCOES[verbo]) { console.error("uso: roteiro-motor.mjs converter <proj> [--de=narrador|voz] [--titulo=\"…\"] [--saida=<arquivo.md>] [--motor=<pasta>]\n     roteiro-motor.mjs conferir <arquivo.md> [--motor=<pasta>]"); return 2; }
  const o = {}, pos = [];
  for (const a of resto) {
    if (!a.startsWith("--")) { pos.push(a); continue; }
    const m = a.match(/^--([a-z]+)(?:=([\s\S]*))?$/);
    if (!m || !OPCOES[verbo].includes(m[1])) { console.error(`opção desconhecida para ${verbo}: ${a} (há ${OPCOES[verbo].map((x) => "--" + x).join(", ")})`); return 2; }
    if (m[1] === "json") { o.json = true; continue; }
    if (m[2] === undefined) { console.error(`--${m[1]} pede um valor (--${m[1]}=…)`); return 2; }
    o[m[1]] = m[2];
  }
  if (pos.length > 1) { console.error(`argumento a mais: ${pos.slice(1).join(" ")}`); return 2; }
  try {
    const { codigo, relatorio } = verbo === "converter" ? await converter(pos[0], o) : await conferir(pos[0], o);
    console.log(o.json ? JSON.stringify(relatorio, null, 1) : resumo(verbo, relatorio, codigo));
    return codigo;
  } catch (e) {
    if (e instanceof ErroUso) { console.error(`não rodou: ${e.message}`); return 2; }
    console.error(`não rodou: ${e.stack || e}`); return 2;
  }
}

const ehCli = process.argv[1] && (() => { const a = resolve(process.argv[1]), b = fileURLToPath(import.meta.url); return process.platform === "win32" ? a.toLowerCase() === b.toLowerCase() : a === b; })();
if (ehCli) process.exitCode = await main(process.argv.slice(2));
