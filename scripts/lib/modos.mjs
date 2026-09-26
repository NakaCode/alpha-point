// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/src/modos.mjs (linhas 1-363, commit 4afda12).
// O que mudou: mudou de pasta (src/ → scripts/lib/, raiz sobe dois níveis); o catálogo vem de knowledge/CATALOGO-MODELOS.md
// ou, na falta dele, da tabela de regua/LEIA-ME.md (mesmas colunas); a régua é regua/<Mxx>/; e saíram ehCardDeTitulo e
// cardsDeTitulo, que o motor já tem (src/finalize/card-de-titulo.mjs) — cópia aqui seria o gêmeo que a FIN-85 matou. NOVO no
// fim do arquivo: a leitura do projeto que os portões do espelho compartilham (JSON sem BOM e ilegível = NÃO MEDI, canal.json,
// ffprobe que mede, o teto da narração no faceless, e o módulo de ffmpeg carregado sob demanda).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * modos.mjs — a PONTE entre o `modo` do espelho e a RÉGUA DE ARTE.
 *
 * ⚠️ O PROBLEMA QUE ISTO RESOLVE (medido em 26/jul/2026, e é silencioso — nenhum gate o via).
 *
 * O `CLAUDE.md` manda todo `editor-de-arte`: *"abra a pasta do modelo que você vai fazer e leia 1–2
 * cenas INTEIRAS antes de desenhar"*, e a régua vive em `seed/examples/dourados/<Mxx>/`, indexada pelo
 * CÓDIGO do modelo. Mas os espelhos escrevem o campo `modo` de duas formas incompatíveis:
 *
 *   `compilado-previsoes-jiang`     → `modo: "M03"`     (código — o contrato)
 *   `homossexualidade-antiguidade`  → `modo: "mapa"`    (nome de família)
 *   `avioes-pequenos`               → `modo: "foto"`    (nome de família)
 *
 * Para os dois últimos a busca da régua **nunca podia funcionar**: a chave não bate com o índice. O
 * agente abria `dourados/foto/`, não achava nada, e desenhava sem referência — que é exatamente a
 * "regressão de cenas tímidas" que a [ARTE-39] existe para combater. E ninguém percebia, porque
 * ausência de exemplar não dá erro: dá silêncio.
 *
 * ⚠️ E A TRADUÇÃO É UM-PARA-MUITOS, o que torna o nome de família LOSSY de verdade:
 *
 *   `dados`    → M09 M10 M11 M13 M15 M18 M23   (7 modelos!)
 *   `desenho`  → M02 M10 M13 M17 M21 M22
 *   `foto`     → M07 M12 M16 M19 M20
 *   `mapa`     → M03 M16
 *
 * Ou seja: `modo: "dados"` não diz se a cena é cartão de número-herói (M09), ranking de barras (M11) ou
 * stepper de etapas (M21). A família é LOSSY — mas **lossy não é errado**, e a diferença é o parágrafo
 * seguinte.
 *
 * ⚠️⚠️ ATÉ 05/ago ESTA LINHA DIZIA O CONTRÁRIO DO CONTRATO, e a contradição vivia dentro do próprio
 * arquivo: aqui em cima estava escrito *"o espelho **deve** cravar o código; família é degradação, e o
 * gate acusa quem escreve família"*, e trinta linhas abaixo (§ENUM_DO_CONTRATO) a correção já dizia o
 * oposto, com a medição. Quem lesse o cabeçalho não chegava na correção — é o mesmo defeito que o
 * laudo de 05/ago pescou em `bin/top10:401`, comentário desmentido catorze linhas adiante.
 *
 * **O que vale: família é a forma CORRETA.** `contratos/espelho.schema.json` tem enum e ele é de
 * famílias; quem escreve `modo:"M03"` é que viola (o `compilado-previsoes-jiang`, 75 cenas). E a
 * precisão que se perde na família **não se recupera no `modo`**: recupera-se no campo OPCIONAL
 * `modelo` (`^M\d{2}$`), criado no schema em 26/jul justamente para isto — `modo:"mapa"` +
 * `modelo:"M03"` é schema-válido E preciso, e `reguaDaCena()` prefere o `modelo` quando ele existe.
 * O gate (`scripts/qc-modo-regua.mjs`) reprova o CÓDIGO no `modo`, nunca a família.
 *
 * ⚠️ A TABELA NÃO É COPIADA À MÃO. É lida de `knowledge/CATALOGO-MODELOS.md` em tempo de execução —
 * fato gerado vence fato escrito. Se o catálogo ganhar M27, este módulo o conhece sem ninguém editar.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";   // [porte Régie] ffprobe dos portões, array e sem shell

// [porte Régie] este arquivo mudou de pasta (src/ → scripts/lib/), então a raiz do canal sobe DOIS níveis.
const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
// [porte Régie] O CATÁLOGO: o do estúdio (`knowledge/CATALOGO-MODELOS.md`) quando o canal o tiver; senão a
// tabela "O cardápio de modos" de `regua/LEIA-ME.md`, que é o resumo dele sem o que é do Top10 e tem as
// MESMAS colunas (| Mxx | o que a cena é | `modo` | …) — o leitor abaixo não precisa saber qual das duas leu.
// Nunca uma lista digitada aqui: é o mesmo princípio do cabeçalho ("fato gerado vence fato escrito").
const CATALOGO = [join(RAIZ, "knowledge", "CATALOGO-MODELOS.md"), join(RAIZ, "regua", "LEIA-ME.md")]
  .find((p) => existsSync(p)) || join(RAIZ, "knowledge", "CATALOGO-MODELOS.md");
// [porte Régie] a régua do canal mora em `regua/<Mxx>/` (cópia dos exemplares 4K do estúdio), não em
// `seed/examples/dourados/<Mxx>/`.
const DOURADOS = join(RAIZ, "regua");

/** `apresentador` não é modelo do catálogo: é o Bôco falando, sem cena desenhada. Não é defeito. */
const NAO_E_MODELO = new Set(["apresentador", "boco", "bôco", "master", "fala", "nenhum"]);

/**
 * ⚠️ QUEM MANDA NO VOCABULÁRIO É O CONTRATO, e eu errei isto na primeira versão deste módulo.
 *
 * Escrevi aqui que o espelho "deve cravar o código Mxx" e que família era degradação do montador.
 * **Falso.** `contratos/espelho.schema.json` tem enum explícito e ele é de NOMES DE FAMÍLIA:
 * `dados mapa mapa3d drone desenho footage cinematico foto citacao documento split split-footage
 * titulo-topico apresentador nenhum`. Ou seja: família é a forma CORRETA, e quem viola o contrato é o
 * `compilado-previsoes-jiang`, que escreve `M03`.
 *
 * Cheguei a "consertar" `s43-pistas-invisiveis` de `drone` para `M07` chamando o espelho de quebrado —
 * e quebrei um espelho que estava válido. Revertido.
 *
 * A lição: antes de declarar um dado inválido, ache o ARQUIVO que define o válido. Doutrina em prosa
 * (`CLAUDE.md` diz que o modo "aponta o modelo") não vence schema versionado — o schema é o que uma
 * máquina checa.
 */
export const ENUM_DO_CONTRATO = (() => {
  const p = join(RAIZ, "contratos", "espelho.schema.json");
  if (!existsSync(p)) return [];
  try {
    const m = readFileSync(p, "utf8").replace(/\s+/g, " ").match(/"modo"\s*:\s*\{[^}]*"enum"\s*:\s*\[([^\]]*)\]/);
    return m ? m[1].split(",").map((x) => x.trim().replace(/^"|"$/g, "")).filter(Boolean) : [];
  } catch { return []; }
})();

/**
 * A tabela do catálogo: [{ codigo:"M07", titulo:"Footage…", familias:["footage","foto"] }]
 * A 4ª coluna do markdown é o nome de família, às vezes com barra ("footage / foto", "dados/desenho").
 */
export const CATALOGO_MODELOS = (() => {
  if (!existsSync(CATALOGO)) return [];
  const linhas = readFileSync(CATALOGO, "utf8").split(/\r?\n/).filter((l) => /^\|\s*M\d{2}\s*\|/.test(l));   // [porte Régie] CRLF do Windows
  return linhas.map((l) => {
    const col = l.split("|").map((c) => c.trim());
    return {
      codigo: col[1],
      titulo: col[2] || "",
      familias: (col[3] || "").split("/").map((f) => f.trim().toLowerCase()).filter(Boolean),
    };
  });
})();

const norm = (s) => String(s || "").trim().toLowerCase()
  .normalize("NFD").replace(/[̀-ͯ]/g, "");   // "cinemático" == "cinematico"

/** Quantas cenas .html de referência a pasta de um modelo tem. `.brief.json` não conta como cena. */
export function exemplaresDe(codigo) {
  const d = join(DOURADOS, codigo);
  if (!existsSync(d)) return [];
  try { return readdirSync(d).filter((f) => f.endsWith(".html")).map((f) => join(d, f)); } catch { return []; }
}

/**
 * PASTA VAZIA E PASTA COM INSTRUÇÃO NÃO SÃO A MESMA COISA — e tratá-las igual é alarme falso.
 *
 * Contei "19 modos sem régua" e fui promover um exemplar para o M03. Ao abrir a pasta, achei um
 * `LEIA.md` que já resolvia o caso, e melhor do que eu ia: *"cena de mapa é WebGL e é entregue+limpa do
 * disco, então o exemplar canônico morre — a régua viva é a produção atual:
 * `grep -l maplibre out/*​/graphics/*.html | xargs ls -t | head`"*. M03 e M04 estão **tratados**, não
 * vazios. O número honesto é 17, e eu quase "consertei" o que estava certo.
 *
 * Três estados, e o gate tem de distingui-los ou morre de gritar à toa ([ARTE-77] — a lei que eu mesmo
 * citei ao calibrar este gate):
 *   `canonica`  → tem cena .html: abra e leia.
 *   `delegada`  → tem doc explicando ONDE está a régua viva: leia o doc. Não é dívida.
 *   `ausente`   → nada. Aqui o agente desenha às cegas e ninguém sabe.
 */
/**
 * ══ O TERCEIRO ESTADO: REFERÊNCIA PRESENTE E OCA ═══════════════════════════════════════════════
 *
 * Este gate nasceu vendo dois estados — ponteiro morto (o Read falha, e GRITA) e referência ausente
 * (pasta vazia, e é MUDA). Medido em 12/ago/2026, existe um terceiro que nenhum dos dois pega e que
 * é o pior deles: **o arquivo está lá, abre, e está vazio por dentro.**
 *
 * A varredura da régua inteira: **40 referências de mídia, 40 MORTAS, 0 vivas** — 19 dos 48
 * exemplares renderizam como casca. São justamente os modelos que ensinam MÍDIA REAL (M07 foto ×4,
 * M09 ×3, M06, M11, M12, M25, M28). `M09/tres-estados-agua.html` devolve 13 KB e
 * `ok-COM-MIDIA-FALTANDO`. A pasta conta como `canonica` desde sempre, e o agente que a abre para
 * "ler 1–2 cenas antes de desenhar" aprende a estrutura sem nunca ver o resultado.
 *
 * A causa não é descuido de ninguém: `registrar-dourado.mjs` copiava HTML e não imagem, e
 * `entregar.mjs --limpar` apaga a `_media/` pós-entrega, como manda o disco enxuto. Duas peças certas,
 * uma podridão. O conserto de raiz é o registrador congelar FRAME (resultado não tem referência para
 * morrer); este aqui é o alarme que impede a próxima geração de apodrecer em silêncio.
 *
 * ⚠️ CONTRA O ALARME FALSO — e aqui ele seria fácil: exemplar de DESENHO PURO não tem mídia local
 * nenhuma e está perfeitamente íntegro. Só conta como oco quem **referencia mídia E tem todas as
 * referências mortas**. E o modelo só é `oca` quando não sobra NENHUM exemplar utilizável: um
 * exemplar íntegro ao lado de três ocos ainda é régua, e reprovar isso ensinaria a ignorar o gate.
 */
const RX_MIDIA = /(?:src|href)\s*=\s*["']([^"']+\.(?:png|jpe?g|webp|gif|svg|mp4|mov|webm|avif)(?:\?[^"']*)?)["']/gi;

/** um exemplar é OCO quando referencia mídia local e NENHUMA delas existe no disco. */
export function exemplarOco(htmlPath) {
  let html = "";
  try { html = readFileSync(htmlPath, "utf8"); } catch { return false; }
  const refs = [...html.matchAll(RX_MIDIA)].map((m) => m[1])
    .filter((u) => !/^(https?:|data:|#)/i.test(u));
  if (!refs.length) return false;                      // desenho puro — íntegro por natureza
  const dir = dirname(htmlPath);
  return refs.every((r) => !existsSync(join(dir, r.split("?")[0])));
}

export function estadoDaRegua(codigo) {
  const d = join(DOURADOS, codigo);
  if (!existsSync(d)) return { estado: "ausente", exemplares: [], docs: [], ocos: [] };
  let itens = [];
  try { itens = readdirSync(d); } catch { return { estado: "ausente", exemplares: [], docs: [], ocos: [] }; }
  const exemplares = itens.filter((f) => f.endsWith(".html")).map((f) => join(d, f));
  const docs = itens.filter((f) => f.endsWith(".md")).map((f) => join(d, f));
  const ocos = exemplares.filter(exemplarOco);
  if (exemplares.length) {
    // sobra alguma cena que ainda MOSTRA o que ensina? então a régua serve, com ressalva anotada.
    const estado = ocos.length === exemplares.length ? "oca" : "canonica";
    return { estado, exemplares, docs, ocos };
  }
  if (docs.length) return { estado: "delegada", exemplares, docs, ocos };
  return { estado: "ausente", exemplares, docs, ocos };
}

/**
 * resolverModo("M07")   → { forma:"codigo",  codigos:["M07"], … }
 * resolverModo("foto")  → { forma:"familia", codigos:["M07","M12","M16","M19","M20"], … }
 * resolverModo("apresentador") → { forma:"nao-e-modelo" }
 * resolverModo("xyz")   → { forma:"desconhecida" }
 *
 * `regua` é a lista de arquivos de referência que o agente PODE abrir — vazia significa que a
 * instrução "leia 1–2 cenas do modelo" é impossível de cumprir, e isso tem de aparecer.
 */
export function resolverModo(modo) {
  const m = norm(modo);
  if (!m) return { forma: "vazia", modo, codigos: [], regua: [] };
  if (NAO_E_MODELO.has(m)) return { forma: "nao-e-modelo", modo, codigos: [], regua: [] };

  const porCodigo = CATALOGO_MODELOS.find((x) => norm(x.codigo) === m);
  if (porCodigo) {
    const regua = exemplaresDe(porCodigo.codigo);
    return { forma: "codigo", modo, codigos: [porCodigo.codigo], titulo: porCodigo.titulo, regua };
  }

  const porFamilia = CATALOGO_MODELOS.filter((x) => x.familias.some((f) => norm(f) === m));
  if (porFamilia.length) {
    const codigos = porFamilia.map((x) => x.codigo);
    return { forma: "familia", modo, codigos, regua: codigos.flatMap(exemplaresDe) };
  }
  // no contrato mas sem modelo no catálogo: o valor é VÁLIDO e ainda assim não há régua possível.
  // Medido em 26/jul: `drone` e `titulo-topico`. Não é espelho quebrado — é doutrina divergente.
  if (ENUM_DO_CONTRATO.some((v) => norm(v) === m)) {
    return { forma: "sem-modelo", modo, codigos: [], regua: [] };
  }
  return { forma: "desconhecida", modo, codigos: [], regua: [] };
}

/**
 * A divergência entre os dois documentos que definem o mesmo vocabulário. Um assunto, dois donos — e é
 * por isso que apodreceu. Medido em 26/jul: schema tem 15 valores, catálogo tem 12 famílias.
 *   noSchemaSemModelo: ["drone","titulo-topico"]  → válido escrever, impossível ter régua
 *   noCatalogoForaDoSchema: ["navegacao"]         → M26 EXISTE, tem agente dedicado, e o montador
 *                                                    NÃO PODE PEDI-LO: capacidade inalcançável.
 */
export function divergenciaVocabulario() {
  const familias = new Set(CATALOGO_MODELOS.flatMap((m) => m.familias.map(norm)));
  const noSchemaSemModelo = ENUM_DO_CONTRATO
    .filter((v) => !familias.has(norm(v)) && !NAO_E_MODELO.has(norm(v)));
  const noCatalogoForaDoSchema = [...familias]
    .filter((f) => !ENUM_DO_CONTRATO.some((v) => norm(v) === f));
  return { enumContrato: ENUM_DO_CONTRATO.length, familiasCatalogo: familias.size, noSchemaSemModelo, noCatalogoForaDoSchema };
}

/** Lê o `modo` de cada cena de um espelho, seja ele `{segmentos}`, `{cenas}` ou array na raiz. */
/**
 * ⚠️ CENA FUNDIDA NÃO É CENA — e cobrá-la é um alarme falso que já travou produção.
 *
 * Uma entrada com `_mergedInto` foi ABSORVIDA por outra: o montador decidiu que aquele trecho de
 * fala é coberto pela cena de destino, que por isso é mais longa. A entrada continua no arquivo
 * como REGISTRO DA DECISÃO, não como cena a montar — ela não tem HTML, não tem clipe, e não tem
 * `needs` próprios, tudo por design.
 *
 * Medido em 07/ago/2026: o `qc-modo-needs` reprovou o `ceuta` por *"1 mapa sem needs.geo"* e
 * alertou sobre duas cenas de dados — **as três eram fundidas naquele mesmo dia**. O laudo mandava
 * consertar cenas que não vão existir.
 *
 * O despachante já tinha aprendido isto por outra porta: cobrar artefato de cena fundida travou o
 * `orcas-nao-matam` em **5 tentativas** com "marcador presente e ARTEFATO AUSENTE", por um arquivo
 * cuja existência seria duplicata.
 *
 * O default é o caso comum — as cenas que vão virar vídeo. Quem precisa do registro completo
 * (o `sanear-espelho` lista as fusões de propósito) pede `{ comFundidas: true }`.
 */
export function cenasDoEspelho(espelhoJson, { comFundidas = false } = {}) {
  const d = espelhoJson;
  const todas = Array.isArray(d) ? d : (d?.segmentos || d?.cenas || d?.scenes || []);
  return comFundidas ? todas : todas.filter((c) => !c?._mergedInto && !c?.mergedInto);
}

/**
 * QUANTAS CENAS ESTE VÍDEO DEVE À ENTREGA — a régua, com dono único.
 *
 * ⚠️ Quem manda é o campo `anima`, porque é ele que o gerador do XML lê para decidir se cobra um
 * clipe. Contar por `modo !== "apresentador"` parece equivalente e não é: mede quem NÃO é
 * apresentador, não quem TEM arte própria.
 *
 * Medido em 15/set/2026, nos dois vídeos em produção:
 *
 *     compilado-poder-militar-china-eua   258 segmentos
 *       modo !== "apresentador"  → 220     ← o que o cobrador dizia
 *       anima truthy             →  98
 *       … e não fundida          →  93     ← o que o gerador entrega
 *     petroleo-foz-do-amazonas            182 segmentos → 147 pelas duas réguas
 *
 * No China isso fazia o cobrador anunciar «arte 80/220 · ⛔ 140 cenas sem arte» num vídeo a que
 * faltavam 13 — **122 das 220 são `anima:false`**, trechos em que o vídeo pré-editado já traz a
 * imagem e o estúdio não desenha nada. Alarme falso num painel que o dono lê de manhã é o pior
 * estrago possível: ensina a ignorar o cobrador, e aí ele para de proteger quando acerta.
 *
 * ⚠️ E o conserto NÃO é copiar o filtro do gerador para o cobrador. Dois filtros escritos à mão
 * divergem — foi assim que chegamos aqui, e a casa já viu o mesmo com o hook que tinha cópia
 * própria do regex de cor. Quem precisa do denominador chama ESTA função.
 *
 * ⚠️ Fidelidade declarada: `anima` AUSENTE conta como «não anima», que é o que o gerador faz
 * (ele testa `s.anima` truthy). Nos dois projetos medidos não há um só caso de `anima` ausente —
 * logo os dados NÃO distinguem esta escolha de `anima !== false`. Ela vem da leitura do gerador,
 * não da medição, e está dito aqui para quem for mexer saber o que está apoiado em quê.
 */
export function cenasQueViramClipe(espelhoJson) {
  return cenasDoEspelho(espelhoJson).filter((c) => Boolean(c?.anima));
}

/**
 * A REGRA DE PRECEDÊNCIA de uma cena: `modelo` (código exato) vence `modo` (família).
 *
 * O `modo` é vocabulário FECHADO e de FAMÍLIA por desenho do contrato — e família é um-para-muitos, logo
 * perde informação. O campo opcional `modelo` (acrescentado ao schema em 26/jul) guarda o código quando o
 * montador sabe qual dos modelos é. Quem procura a régua usa esta função e não o campo cru: assim a cena
 * que sabe ser M11 lê a régua de M11, e a que só sabe "dados" lê a união da família.
 */
export function reguaDaCena(cena) {
  if (cena?.modelo) {
    const r = resolverModo(cena.modelo);
    if (r.forma === "codigo") return { ...r, veioDe: "modelo" };
  }
  return { ...resolverModo(cena?.modo), veioDe: "modo" };
}

/**
 * [porte Régie] `ehCardDeTitulo` e `cardsDeTitulo` NÃO moram mais aqui.
 *
 * No estúdio este arquivo era o dono único do predicado "esta cena é card de tópico?" ([FIN-85]/[ARTE-200]:
 * ele viveu copiado em três scripts e errou três vezes). Na Régie, quem precisa dele primeiro é a
 * finalização, que mora no MOTOR — e o motor já o extraiu, verbatim, para `src/finalize/card-de-titulo.mjs`.
 * Manter uma segunda cópia aqui seria recriar exatamente o gêmeo que a [FIN-85] matou. Quem precisa:
 *
 *     import { importarDoMotor } from "./motor.mjs";
 *     const { ehCardDeTitulo } = await importarDoMotor("src/finalize/card-de-titulo.mjs");
 *
 * (`cardsDeTitulo` é `cenasDoEspelho(e).filter(ehCardDeTitulo)` ordenado por `inSec`; ninguém no canal o chama.)
 */

/* ══ [porte Régie] O QUE OS PORTÕES DO PROJETO LEEM DO DISCO — num lugar só ══════════════════════════
 *
 * Não é porte de nenhum arquivo do estúdio: nasceu da revisão da v1 (23/09/2026), que achou a MESMA
 * leitura escrita de seis jeitos nos portões do espelho — e cada jeito com o seu furo:
 *   · o BOM que o Bloco de Notas grava no começo do arquivo: seis portões o tiravam, cinco não. Nos
 *     que não tiravam, um espelho salvo no Bloco de Notas saía 1 (SyntaxError = "medi e reprovei"),
 *     2 ("sem espelho") ou perdia os modos em silêncio, conforme o portão;
 *   · o canal.json ilegível virava "faceless, pt-BR" calado — um erro de digitação do dono mudava a
 *     régua sem ninguém ver (decisão I5: configuração do canal quebrada é erro que ensina, nunca
 *     "segue com o padrão");
 *   · a duração da narração: cada portão perguntava ao ffprobe do seu jeito e, quando ele não media,
 *     seguia com zero — e zero de teto é "nada transborda".
 * Mora aqui, e não num arquivo novo, porque este é o arquivo do VOCABULÁRIO DO ESPELHO que os portões
 * da frente já importam; a integração pode movê-lo para scripts/lib/ sem mudar quem chama.
 * ═══════════════════════════════════════════════════════════════════════════════════════════════ */

/** Código de saída de "NÃO MEDI" (a convenção da casa: 0 passou · 1 medi e reprovei · 2 não medi). */
const NAO_MEDI = 2;

/**
 * Lê um JSON do disco. Arquivo AUSENTE devolve `null` (quem chama decide se ausência é "zero" ou
 * "não medi"); arquivo PRESENTE e quebrado LANÇA (code JSON_ILEGIVEL) — nunca vira `null`, porque
 * "ilegível" tratado como "ausente" é exatamente como um portão passa a aprovar o que não leu.
 * O BOM do começo (U+FEFF, o Bloco de Notas do Windows o grava) sai antes do parse.
 */
export function lerJsonDoDisco(p) {
  if (!existsSync(p)) return null;
  const txt = readFileSync(p, "utf8").replace(/^﻿/, "");
  try { return JSON.parse(txt); }
  catch (e) {
    throw Object.assign(new Error(`${p} não é um JSON válido (${e.message}). Conserte o arquivo — ` +
      "o portão não mede em cima de arquivo quebrado."), { code: "JSON_ILEGIVEL", arquivo: p });
  }
}

/** Sai 2 (NÃO MEDI) com a causa e o conserto. Só para os CLIs dos portões — lib pura não chama isto. */
export function naoMedi(gate, motivo) {
  console.error(`✗ ${gate}: NÃO MEDIDO — ${motivo}`);
  console.error("  (exit 2 = não medi. Isto não é reprovação: o insumo ou a ferramenta impediram a medida.)");
  process.exit(NAO_MEDI);
}

/** `lerJsonDoDisco` para os CLIs: ausente → null; quebrado → NÃO MEDI (exit 2), nunca 1. */
export function lerJsonOuNaoMedi(p, gate) {
  try { return lerJsonDoDisco(p); } catch (e) { return naoMedi(gate, e.message); }
}

/**
 * O canal.json do canal ({} quando não existe — o canal de teste ou a pasta avulsa). Ilegível é NÃO
 * MEDI: é dele que sai se o canal tem apresentador e em que língua ele fala, e chutar os dois
 * mudaria a régua em silêncio (I5).
 */
export function canalOuNaoMedi(gate) {
  const c = lerJsonOuNaoMedi(join(RAIZ, "canal.json"), gate);
  return c && typeof c === "object" ? c : {};
}

/** O canal declara apresentador filmado? Padrão da Régie: NÃO (faceless) — opcional DECLARADO. */
export const canalTemApresentador = (gate) => canalOuNaoMedi(gate).apresentador === true;

/** A língua em que o canal FALA (canal.json → idiomas.origem; padrão pt-BR, a língua do template). */
export const idiomaDeOrigem = (gate) => String(canalOuNaoMedi(gate)?.idiomas?.origem || "pt-BR");

/**
 * O ffprobe resolvido É um ffprobe que mede? (decisão I2: "existe mas não mede" é erro claro, e não
 * "? não leu" arquivo por arquivo). Devolve `null` quando está tudo certo, ou a mensagem que ensina.
 * `ff` = o módulo scripts/stock/lib/ferramentas.mjs (executavelFf, erroSemFerramenta), passado por quem
 * chama — assim esta lib não carrega o motor só por ser importada.
 */
export function conferirFfprobe(ff, paraQue = "medir a duração") {
  const exe = ff.executavelFf("ffprobe");
  const r = spawnSync(exe, ["-version"], { encoding: "utf8", windowsHide: true, timeout: 15_000 });
  if (r.error?.code === "ENOENT") return ff.erroSemFerramenta("ffprobe", paraQue).message;
  const primeira = String(r.stdout || "").split(/\r?\n/)[0].trim();
  if (r.error || r.status !== 0)
    return `o ffprobe desta máquina (${exe}) existe mas não responde (${r.error?.code || `saiu ${r.status}`}). ` +
      "Reinstale o ffmpeg (winget install Gyan.FFmpeg) ou aponte outro em FFPROBE_PATH (REGIE_FFPROBE também vale).";
  if (!/^ffprobe\b/i.test(primeira))
    return `FFPROBE_PATH/REGIE_FFPROBE aponta para OUTRO programa (${exe} diz "${primeira.slice(0, 60)}"). ` +
      "Aponte para o ffprobe (no pacote do ffmpeg ele fica ao lado do ffmpeg.exe).";
  return null;
}

/** Duração do CONTÊINER (serve a .wav, .m4a e .mp4) pelo ffprobe do canal. {s} ou {erro}. */
export function duracaoMedida(p, ff) {
  const r = spawnSync(ff.executavelFf("ffprobe"), ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", p],
    { encoding: "utf8", windowsHide: true, timeout: 60_000 });
  const v = parseFloat(String(r.stdout || "").trim());
  if (Number.isFinite(v) && v > 0) return { s: v };
  return { erro: conferirFfprobe(ff) || `o ffprobe não mediu ${basename(p)} (arquivo vazio, corrompido ou segurado por outro programa)` };
}

/**
 * O FIM DO VÍDEO num canal faceless: a NARRAÇÃO. O master sintético nasce dela (motor:
 * src/finalize/master-sintetico.mjs, duração = a da narracao.wav) — e ela existe ANTES da finalização,
 * então é contra ela que o espelho se mede enquanto a arte ainda está sendo feita.
 *   1. `narracao.wav` medida pelo ffprobe (a régua; se está no disco e não se mede, é NÃO MEDI — nunca
 *      cai calada no degrau de baixo, que é mais curto);
 *   2. o fim da última palavra do `words.json` (a transcrição da própria narração), quando a wav não
 *      está no disco — com folga de 1 s, porque a wav tem a respiração depois da última palavra.
 * @returns {{s:number, de:string, folga:number} | {s:null, motivo:string, naoMediu?:boolean}}
 */
export function tetoDaNarracao(P, ff) {
  const wav = join(P, "narracao.wav");
  if (existsSync(wav)) {
    const d = duracaoMedida(wav, ff);
    return d.s ? { s: d.s, de: "narracao.wav (medida pelo ffprobe)", folga: 0.5 }
      : { s: null, motivo: `a narracao.wav está no disco e não foi medida: ${d.erro}`, naoMediu: true };
  }
  let w;
  try { w = lerJsonDoDisco(join(P, "words.json")); }
  catch (e) { return { s: null, motivo: e.message, naoMediu: true }; }
  const ws = Array.isArray(w) ? w : (w?.words || w?.palavras || []);
  const fim = ws.reduce((m, x) => Math.max(m, +(x?.end ?? x?.e ?? 0) || 0), 0);
  if (fim > 0) return { s: fim, de: "fim da última palavra do words.json (a narracao.wav não está no disco)", folga: 1 };
  return { s: null, motivo: "sem narracao.wav e sem words.json no projeto" };
}

/**
 * O módulo de ffmpeg/ffprobe do canal (scripts/stock/lib/ferramentas.mjs), carregado SOB DEMANDA.
 * Ele importa o motor no topo; um `import` estático dele derrubaria o portão na ligação dos módulos,
 * antes de qualquer linha rodar, e o Node sairia 1 ("medi e reprovei") num canal sem motor. Aqui a
 * falta vira NÃO MEDI (exit 2) com o conserto.
 */
export async function ferramentasOuNaoMedi(gate) {
  let ff;
  try { ff = await import("../stock/lib/ferramentas.mjs"); }
  catch (e) { return naoMedi(gate, String(e?.message || e)); }
  // A PONTE PARA O MOTOR (decisão I2: FFMPEG_PATH/FFPROBE_PATH canônicas, REGIE_* sinônimos, o ffprobe ao lado do ffmpeg).
  // O relogioDoEspelho do motor mede o master pelo `executavel` de src/finalize/midia.mjs, que lê REGIE_* ANTES de *_PATH
  // e não procura o ffprobe ao lado do ffmpeg — com só FFMPEG_PATH definido ele não achava o ffprobe, e a lente TRANSBORDA
  // morria em silêncio. O executável que o canal resolveu (a régua do motor em src/midia/arquivos.mjs) é gravado em
  // REGIE_* DESTE processo: o motor passa a medir com o MESMO programa. Não é cópia da regra — é o resultado dela.
  for (const nome of ["ffmpeg", "ffprobe"]) {
    const exe = ff.executavelFf(nome);
    if (exe && exe !== nome) process.env[`REGIE_${nome.toUpperCase()}`] = exe;
  }
  return ff;
}
