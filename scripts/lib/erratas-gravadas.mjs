#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/erratas-gravadas.mjs (linhas 1-275, commit 4afda12).
// O que mudou: a raiz padrão de `erratasDaEntrada` é a do canal, não o diretório corrente; o "sou eu o programa chamado?"
// do fim compara os CAMINHOS REAIS dos dois lados (realpath: atalho, junção, link simbólico) e sem caixa no Windows (decisão
// I6, a régua de motor:src/midia/arquivos.mjs ehPrincipal). "Apresentador GRAVOU" no
// canal faceless é a NARRAÇÃO gerada do roteiro: o laudo de entrada julga o mesmo texto, e o contrato do arquivo é o mesmo.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
/**
 * erratas-gravadas.mjs — o que a lente de fatos achou de ERRADO no texto que o apresentador GRAVOU,
 * lido na forma que as estações seguintes conseguem USAR ([SIS-452]).
 *
 *   node scripts/lib/erratas-gravadas.mjs <slug>          # a lista, para a estação ler
 *   node scripts/lib/erratas-gravadas.mjs <slug> --json
 *
 * ── POR QUE EXISTE (11/set/2026) ────────────────────────────────────────────────────────────────
 *
 * O `roteiro-entrada.mjs` julga, na ENTRADA da produção, o texto gravado que a bancada nunca viu
 * (o backlog anterior a 31/jul, o roteiro que mudou depois do PASS). Ele grava o laudo em
 * `out/<slug>/qc-roteiro/entrada/fatos.laudo.md` — e um laudo que ninguém lê custa a inferência que o
 * produziu e não muda nada no vídeo. É o defeito que esta casa mais conhece: o `mamute-de-volta` foi
 * ao ar em 12/ago com FAIL nas quatro lentes guardado desde 08/ago. Não faltava julgamento; faltava
 * CONSUMIDOR. (Ver [[laudo-bom-nao-vira-conserto]].)
 *
 * Os consumidores são dois, e cada um só pode fazer uma coisa, porque a fala já está gravada:
 *   · o `decupador` (via `decupar-agente.mjs`) pode CORTAR a frase errada, quando ela sai limpa;
 *   · o `redator-de-tela` (estação `textos`) garante que a tela NÃO a repete num card — e o
 *     `qc-textos-tela.mjs` confere que cada errata ganhou gaveta em `nao_vai_para_tela`.
 * O que sobra no corte final vai para o dono no Premiere, que é onde ele conserta rápido ([FIN-45]).
 *
 * ── O FORMATO É O DO LAUDO REAL, NÃO UM IMAGINADO ───────────────────────────────────────────────
 *
 * Calibrado nos dois laudos da lente que existiam no Mac em 11/set (`golfo-bebe-do-mar`,
 * `petroleo-foz-do-amazonas`): a tabela tem ou não a coluna `#`, o cabeçalho diz "afirmação" ou
 * "afirmação (roteiro)", e o veredito vem como `**DIVERGE (leve)**`, `**⛔ ARITMÉTICA INTERNA**` ou
 * `**CONFIRMADA na composição, DIVERGE no piso**` — que é divergência, e conta. A fonte repetida vem
 * como `idem`. Quando o laudo traz o bloco estruturado `ERRATAS_GRAVADAS:` … `FIM_ERRATAS_GRAVADAS`
 * (com o valor errado e o certo), ele manda; a tabela é o caminho de quem não o trouxe.
 *
 * `NÃO ACHEI` não é errata — é sustentação frágil, e o contrato da lente proíbe tratá-lo como
 * refutação. Ele sai numa lista à parte (`frageis`), que a tela consulta e o gate não cobra.
 */
import { existsSync, readFileSync, realpathSync } from "node:fs";
import { createHash } from "node:crypto";
import { isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const limpar = (s) => String(s ?? "").replace(/\*\*|__|`/g, "").replace(/⛔|⚠️|✅|❌/g, "").replace(/\s+/g, " ").trim();
const URL_RE = /https?:\/\/[^\s)\]>|]+/;

/** DIVERGE · REFUTADA · ARITMETICA (errata) · FRAGIL (não achei) · null (confirmada ou ilegível). */
export function classificarVeredito(celula) {
  const v = limpar(celula).toUpperCase();
  if (!v) return null;
  if (/REFUTAD/.test(v)) return { veredito: "REFUTADA", gravidade: "grave" };
  if (/ARITM/.test(v)) return { veredito: "ARITMETICA", gravidade: "media" };
  if (/DIVERGE/.test(v)) return { veredito: "DIVERGE", gravidade: /LEVE/.test(v) ? "leve" : "media" };
  if (/N[ÃA]O ACHEI/.test(v)) return { veredito: "FRAGIL", gravidade: "leve" };
  return null;
}

/**
 * A frase que quem edita vai procurar na transcrição. Se a célula traz trecho entre aspas, é ele
 * (o mais longo); senão, a célula inteira sem marcação.
 */
export function fraseDaAfirmacao(celula) {
  const t = String(celula ?? "").replace(/\*\*|__|`/g, "").replace(/⛔/g, "");
  const aspas = [...t.matchAll(/«([^»]+)»|"([^"]+)"|“([^”]+)”/g)].map((m) => (m[1] || m[2] || m[3]).trim()).filter(Boolean);
  const escolhida = aspas.length ? aspas.sort((a, b) => b.length - a.length)[0] : t;
  return limpar(escolhida).slice(0, 300);
}

const celulas = (linha) => linha.trim().replace(/^\|/, "").replace(/\|$/, "").split(/(?<!\\)\|/).map((c) => c.trim());
const ehSeparador = (linha) => /^\|?\s*:?-{3,}/.test(linha.trim());

function daTabela(txt) {
  const linhas = String(txt || "").split("\n");
  const itens = [];
  for (let i = 0; i < linhas.length; i++) {
    if (!linhas[i].trim().startsWith("|")) continue;
    const cab = celulas(linhas[i]).map((c) => limpar(c).toLowerCase());
    const iAf = cab.findIndex((c) => /afirma/.test(c));
    const iVe = cab.findIndex((c) => /veredito/.test(c));
    if (iAf < 0 || iVe < 0 || !ehSeparador(linhas[i + 1] || "")) continue;
    const iFd = cab.findIndex((c) => /fonte diz|o que a fonte/.test(c));
    const iUrl = cab.findIndex((c) => /^url$|link/.test(c));
    let urlAnterior = null;
    let j = i + 2;
    for (; j < linhas.length && linhas[j].trim().startsWith("|"); j++) {
      const c = celulas(linhas[j]);
      const cls = classificarVeredito(c[iVe]);
      const bruto = iUrl >= 0 ? c[iUrl] || "" : "";
      const achada = (bruto.match(URL_RE) || (iFd >= 0 ? (c[iFd] || "").match(URL_RE) : null) || [])[0] || null;
      const url = achada || (/^idem\b/i.test(limpar(bruto)) ? urlAnterior : null);
      if (achada) urlAnterior = achada;
      if (!cls) continue;
      itens.push({ ...cls, frase: fraseDaAfirmacao(c[iAf]), fonte_diz: limpar(iFd >= 0 ? c[iFd] : "").slice(0, 600),
        url, errado: null, certo: null });
    }
    i = j - 1;
  }
  return itens;
}

function doBloco(txt) {
  const linhas = String(txt || "").split("\n");
  const ini = linhas.findIndex((l) => /^\s*ERRATAS_GRAVADAS\s*:\s*$/i.test(limpar(l)));
  if (ini < 0) return null;
  const itens = [];
  for (let i = ini + 1; i < linhas.length; i++) {
    const l = linhas[i].trim();
    if (/^FIM_ERRATAS_GRAVADAS\s*$/i.test(limpar(l))) break;
    if (!l.startsWith("-")) continue;
    const campos = l.replace(/^-\s*/, "").split(/\s+\|\s+/).map((c) => c.trim());
    if (/^NENHUMA?\.?$/i.test(limpar(campos[0]))) continue;
    const cls = classificarVeredito(campos[0]);
    if (!cls) continue;
    const valor = (chave) => { const f = campos.find((c) => new RegExp(`^${chave}\\s*=`, "i").test(c)); return f ? limpar(f.replace(/^[^=]*=/, "")) : null; };
    const url = (campos.find((c) => URL_RE.test(c)) || "").match(URL_RE)?.[0] || null;
    itens.push({ ...cls, frase: fraseDaAfirmacao(campos[1] || ""), fonte_diz: valor("fonte") || "", url,
      errado: valor("errado"), certo: valor("certo") });
  }
  return itens;
}

/**
 * As erratas de um laudo. `fonte` diz de onde vieram: o bloco (curado pela lente) vence a tabela
 * (derivada). IDs `E1…En` na ordem do laudo — estáveis enquanto o laudo não mudar, e o laudo só
 * muda quando o texto gravado muda, caso em que tudo o que se escreveu antes também deixa de valer.
 */
export function lerErratasDoLaudo(txt) {
  const bloco = doBloco(txt);
  const brutos = bloco ?? daTabela(txt);
  const erratas = brutos.filter((e) => e.veredito !== "FRAGIL").map((e, k) => ({ id: `E${k + 1}`, ...e }));
  // `NÃO ACHEI` só vem da tabela: o bloco é, por definição, a lista do que está ERRADO.
  const frageis = (bloco ? daTabela(txt) : brutos).filter((e) => e.veredito === "FRAGIL")
    .map((e, k) => ({ id: `F${k + 1}`, frase: e.frase, fonte_diz: e.fonte_diz, url: e.url }));
  return { fonte: bloco ? "bloco" : brutos.length || frageis.length ? "tabela" : "nenhuma", erratas, frageis };
}

const sha256 = (x) => createHash("sha256").update(x).digest("hex");

/**
 * O laudo de entrada de um projeto, se houver. Nunca lança: a ausência é o caso comum (projeto sem
 * julgamento de entrada, ou com a lente de fatos aprovando), e quem consome segue sem ele.
 */
// [porte Régie] a raiz padrão é a do CANAL (scripts/lib/ -> ../..), não o diretório corrente: no estúdio o
// comando rodava sempre da raiz do repositório; no Windows o dono abre o terminal onde quiser, e "."
// apontava para uma pasta sem out/ — o que devolvia "sem-entrada" (NÃO SEI) em vez de ler o laudo.
const RAIZ_CANAL = fileURLToPath(new URL("../..", import.meta.url));

export function erratasDaEntrada(slug, { raiz = RAIZ_CANAL } = {}) {
  const pEntrada = join(raiz, "out", slug, "qc-roteiro", "entrada.json");
  if (!existsSync(pEntrada)) return { estado: "sem-entrada", erratas: [], frageis: [] };
  let entrada;
  try { entrada = JSON.parse(readFileSync(pEntrada, "utf8")); }
  catch (e) { return { estado: "entrada-ilegivel", erro: e.message, erratas: [], frageis: [] }; }
  const rel = entrada?.fatos?.laudo || null;
  if (!rel) return { estado: "sem-laudo", entrada, erratas: [], frageis: [] };
  const pLaudo = isAbsolute(rel) ? rel : join(raiz, rel);
  if (!existsSync(pLaudo)) return { estado: "laudo-ausente", entrada, laudo: rel, erratas: [], frageis: [] };
  const lido = lerErratasDoLaudo(readFileSync(pLaudo, "utf8"));
  const divergencia = projecaoDiverge(entrada?.fatos?.erratas, lido.erratas);
  return { estado: "ok", entrada, laudo: rel, ...lido, ...(divergencia ? { divergencia } : {}) };
}

/**
 * O registro de entrada guarda uma PROJEÇÃO das erratas (`fatos.erratas`), para a fila e o painel
 * lerem campo em vez de prosa. Quem consome aqui lê o LAUDO, que é a fonte: a projeção é derivada, e
 * derivado não testemunha sobre a fonte. Se as duas listas diferem, dois leitores estão discordando
 * — e a divergência tem de aparecer, nunca ser resolvida em silêncio. Compara pela frase (os nomes
 * de veredito podem vir em dialetos diferentes; a frase é o que quem edita procura).
 */
export function projecaoDiverge(projetadas, lidas) {
  if (!Array.isArray(projetadas)) return null;
  const chave = (e) => limpar(e?.frase).toLowerCase();
  const a = projetadas.map(chave).sort(), b = lidas.map(chave).sort();
  const iguais = a.length === b.length && a.every((x, i) => x === b[i]);
  return iguais ? null : { projetadas: projetadas.length, lidas: lidas.length };
}

/**
 * O laudo julgou ESTE roteiro? ([SIS-289] — o selo cita o objeto.) `true`/`false` quando dá para
 * provar pelo SHA-256 cru que o registro declara; `null` quando o registro não o declara, e aí quem
 * consome não pode presumir que sim.
 */
export function laudoJulgouEsteTexto(entrada, texto) {
  const declarado = entrada?.gravado?.sha256;
  if (!/^[a-f0-9]{64}$/.test(declarado || "")) return null;
  return sha256(texto) === declarado;
}

/**
 * ── «NÃO HÁ» TEM DUAS CAUSAS, E ELAS NÃO SE PARECEM ─────────────────────────────────────────────
 *
 * Até 14/set/2026 este comando saía **0 em todos os estados**: «sem erratas do texto gravado» era o
 * que ele dizia tanto quando tinha lido o laudo inteiro e não achado nada, quanto quando não havia
 * laudo NENHUM para ler. Quem automatiza vê o mesmo 0 nos dois casos e conclui a mesma coisa —
 * *o vídeo está limpo* —, quando o segundo caso não é resposta: é ausência de pergunta.
 *
 * É a forma silenciosa do defeito que esta casa mais conhece: *ausência de resultado (rodou e não
 * produziu, listou e veio zero sem erro) é falha a investigar, nunca sucesso silencioso.*
 *
 *   0  PROVADO   — o laudo foi lido. Zero errata aqui é fato: procurei e não existe.
 *   3  SEM FONTE — não havia onde procurar (o julgamento de entrada não rodou, ou não cita laudo).
 *                  Não é erro de ninguém, e **não** autoriza concluir que o texto está limpo.
 *   4  QUEBRADO  — havia e não se pôde ler: o registro cita um laudo que não está no disco, ou o
 *                  próprio registro está ilegível. Alguém declarou que existia; conferir.
 *   2  USO       — faltou o slug.
 *
 * O `--json` sai pelo MESMO código: quem lê o campo `estado` e quem lê o código têm de concordar,
 * senão a distinção existe num canal e não no outro.
 */
export const SAIDA = Object.freeze({ PROVADO: 0, USO: 2, SEM_FONTE: 3, QUEBRADO: 4 });

export function codigoDeSaida(estado) {
  if (estado === "ok") return SAIDA.PROVADO;
  if (estado === "sem-entrada" || estado === "sem-laudo") return SAIDA.SEM_FONTE;
  if (estado === "laudo-ausente" || estado === "entrada-ilegivel") return SAIDA.QUEBRADO;
  return SAIDA.QUEBRADO;   // estado desconhecido é quebrado, nunca provado — o default não absolve
}

const GRAV = { grave: "GRAVE", media: "média", leve: "leve" };

/**
 * ⚠️ ZERO ERRATA TEM QUATRO CAUSAS, E SÓ UMA DELAS É «O TEXTO ESTÁ LIMPO».
 *
 * O `decupar-agente.mjs` imprimia `nenhuma (sem laudo de entrada)` para os quatro estados sem laudo
 * legível — e, no caso PROVADO (laudo lido, sha256 batendo, nada a acusar), imprimia «laudo de
 * entrada IGNORADO — o registro não declara o sha256», que é **falso**: ele declara e bate. O ramo
 * do `JULGOU === true` caía no `else` do ternário.
 *
 * Mora aqui, e não lá, porque é a mesma decisão que o código de saída toma — e *a mesma regra
 * escrita em dois lugares diverge*: uma cópia teria o furo que a outra não tem.
 *
 * `julgou`: `true` o laudo julgou ESTE texto · `false` julgou outro · `null` o registro não prova.
 */
export function motivoSemErrata(estado, julgou, { laudo = null, erro = null } = {}) {
  if (estado === "ok") {
    if (julgou === true) return "nenhuma — o laudo foi LIDO e não acusa nada (procurei e não existe)";
    if (julgou === false) return "laudo de entrada IGNORADO — julgou OUTRO texto ([SIS-289])";
    return "laudo de entrada IGNORADO — o registro não declara o sha256 do texto julgado ([SIS-289])";
  }
  if (estado === "sem-entrada") return "NÃO SEI — o julgamento de entrada não rodou (não havia onde procurar)";
  if (estado === "sem-laudo") return "NÃO SEI — o registro não cita laudo (não havia onde procurar)";
  if (estado === "laudo-ausente") return `⚠️ NÃO SEI — o registro CITA ${laudo}, que não está no disco`;
  if (estado === "entrada-ilegivel") return `⚠️ NÃO SEI — registro de entrada ilegível (${erro || "?"})`;
  return `⚠️ NÃO SEI — estado desconhecido (${estado})`;   // nunca "nenhuma": o default não absolve
}

/** A lista em texto, para prompt e para terminal. */
export function listarErratas(erratas) {
  return erratas.map((e) => `${e.id} · ${e.veredito} (${GRAV[e.gravidade] || e.gravidade}) · "${e.frase}"` +
    `${e.errado ? ` · errado: ${e.errado}` : ""}${e.certo ? ` · certo: ${e.certo}` : ""}` +
    `${e.fonte_diz ? `\n     a fonte diz: ${e.fonte_diz.slice(0, 280)}` : ""}${e.url ? `\n     ${e.url}` : ""}`).join("\n");
}

// [porte Régie] "FUI CHAMADO DIRETO?" pelos CAMINHOS REAIS (decisão I6 — a régua de motor:src/midia/arquivos.mjs, ehPrincipal).
// No Windows a letra do drive vem em caixa diferente conforme quem chamou ("c:\…" × "C:\…"); e o canal aberto por atalho,
// junção ou link simbólico chega com o caminho do LINK no argv e o REAL no import.meta.url. Nos dois casos a comparação
// crua dava falso — o comando rodava, não imprimia nada e saía 0, que o agente lê como "nenhuma errata". Esta lib não
// importa o motor (ela serve também como módulo, num canal sem motor configurado); por isso a régua está escrita aqui.
const ehPrincipal = () => {
  if (!process.argv[1]) return false;
  let a, b;
  try { a = realpathSync(resolve(process.argv[1])); b = realpathSync(fileURLToPath(import.meta.url)); } catch { return false; }
  return process.platform === "win32" ? a.toLowerCase() === b.toLowerCase() : a === b;
};
if (ehPrincipal()) {
  const slug = process.argv.slice(2).find((a) => !a.startsWith("--"));
  if (!slug) { console.error("uso: node scripts/lib/erratas-gravadas.mjs <slug> [--json]"); process.exit(SAIDA.USO); }
  const r = erratasDaEntrada(slug);
  const codigo = codigoDeSaida(r.estado);
  if (process.argv.includes("--json")) {
    console.log(JSON.stringify({ ...r, entrada: undefined, saida: codigo }, null, 2));
    process.exit(codigo);
  }
  if (r.estado !== "ok") {
    const porque = { "sem-entrada": "o julgamento de entrada ainda não rodou (ou o projeto é anterior a ele)",
      "sem-laudo": `nenhum laudo a consumir (${r.entrada?.estado || "?"} · fatos=${r.entrada?.fatos?.veredito ?? "-"})`,
      "laudo-ausente": `o registro cita ${r.laudo}, que não está no disco`, "entrada-ilegivel": r.erro }[r.estado];
    // ⚠️ Isto NÃO é «o texto está limpo». É «não consegui perguntar» — e o código de saída diz qual
    // das duas, porque a frase sozinha já foi lida como aprovação.
    console.log(`• ${slug}: NÃO SEI se há erratas do texto gravado — ${porque}`);
    console.log(codigo === SAIDA.SEM_FONTE
      ? `  (saída ${codigo}: não havia onde procurar — isto NÃO autoriza concluir que o texto está limpo)`
      : `  (saída ${codigo}: o insumo foi declarado e não pôde ser lido — confira antes de seguir)`);
    process.exit(codigo);
  }
  console.log(`${slug}: ${r.erratas.length} errata(s) do texto gravado · ${r.frageis.length} afirmação(ões) sem sustentação (NÃO ACHEI)`);
  console.log(`  laudo: ${r.laudo} · lidas do ${r.fonte === "bloco" ? "bloco ERRATAS_GRAVADAS" : "quadro de vereditos"}`);
  // O zero PROVADO tem de se anunciar como prova — é o que o distingue do zero por ausência de fonte.
  if (!r.erratas.length) console.log(`  (saída 0: o laudo foi LIDO e não acusa nada — procurei e não existe)`);
  if (r.erratas.length) console.log(`\n${listarErratas(r.erratas)}`);
  if (r.frageis.length) console.log(`\nSEM SUSTENTAÇÃO (não é erro provado — não amplifique na tela):\n` +
    r.frageis.map((f) => `${f.id} · "${f.frase}"`).join("\n"));
}
