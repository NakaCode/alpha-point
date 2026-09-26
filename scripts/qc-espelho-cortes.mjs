#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-espelho-cortes.mjs (linhas 1-353, commit 4afda12).
// O que mudou: ePreservado, relogioDoEspelho, ehCardDeTitulo e a lista de masters são IMPORTADOS do motor (src/finalize/…),
// nunca copiados; o master é o que a V1 vai usar (inclui o sintético preto+narração); sem _cortes.json é zero corte (a v1 não
// decupa bruto) em vez de sair 2 — e aí há UM relógio só, e a lente TRANSBORDA mede SEMPRE contra a NARRAÇÃO (narracao.wav, ou
// o fim do words.json), que existe antes da finalização; sem teto medido é NÃO MEDIDO (2); master no disco que o ffprobe não
// mede também. A narração entra como o "bruto" da conferência master × cortes; ffprobe por executavelFf
// (scripts/stock/lib/ferramentas.mjs, carregado sob demanda); BOM e JSON quebrado = NÃO MEDIDO; pasta absoluta e out\<proj>.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
//
// O ESPELHO CABE NO ARQUIVO? — e ele está falando do relógio certo?
//
//   node scripts/qc-espelho-cortes.mjs <proj> [--json]
//
// ── POR QUE EXISTE (Mateus, 06/ago/2026) ────────────────────────────────────────────────────────
// *"Preciso garantir que o espelho se baseie pelos cortes CORRETOS e atualizados do decupador."*
//
// ── A MUDANÇA DE ORDEM QUE ESTE GATE TEVE DE ACOMPANHAR ────────────────────────────────────────
// Até 06/ago/2026 o espelho nascia ANTES do master e falava em tempo BRUTO; quem convertia era o
// `finalizacao-config.mjs`, a cada montagem. Desde então a ordem é master → Scribe #2 → espelho, e o
// espelho fala no tempo do ARQUIVO FINAL (`words-final.json`). Ver passo 7b de `estacoes/decupagem.md`.
//
// **Os dois mundos coexistem**, porque os projetos abertos antes da mudança continuam com espelho em
// tempo bruto e não se reprocessa o que já está entregue. Então este gate primeiro DESCOBRE em que
// relógio o espelho está, e só então escolhe a lente. Aplicar a lente errada seria pior que não
// medir: acusaria o espelho correto e aprovaria o quebrado.
//
// ── AS LENTES, POR RELÓGIO ─────────────────────────────────────────────────────────────────────
// ESPELHO EM TEMPO FINAL (o fluxo novo):
//   · TRANSBORDA    — a cena passa do fim do master. Não há arquivo ali: ela não vai existir.
//   · GAP OCUPADO   — cena que NÃO é card de título ocupando um vão de 3 s. O card fica sem lugar e
//                     a virada de tópico perde o respiro que o corte abriu de propósito.
//   · DESCOLADA     — a cena começa longe de qualquer fronteira de palavra (>0,7 s). Word-lock é o
//                     método da casa; começar no meio de uma palavra é sintoma de tempo copiado de
//                     outro relógio.
//
// ESPELHO EM TEMPO BRUTO (projetos anteriores):
//   · ENGOLIDA      — a cena inteira cai dentro de um corte. O remapeador não tem para onde mandá-la.
//   · MUTILADA      — parte da cena cai dentro de um corte; a `dur` declarada mente.
//   · ATRAVESSA     — a cena cruza uma emenda. Não é defeito, mas é onde mora o flash de apresentador.
import { existsSync, statSync } from "node:fs";
import { join, isAbsolute, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { importarDoMotor } from "./lib/motor.mjs";
import { lerJsonOuNaoMedi, naoMedi, tetoDaNarracao, conferirFfprobe, ferramentasOuNaoMedi } from "./lib/modos.mjs";

// [porte Régie] OS DONOS ÚNICOS MORAM NO MOTOR, e são IMPORTADOS de lá (cópia no canal viraria o gêmeo que
// a [FIN-85] e a [FIN-164] mataram). As assinaturas foram conferidas contra a origem: `relogioDoEspelho`
// ganhou `{ master }` e exige pasta ABSOLUTA; `ePreservado` e `ehCardDeTitulo` são os mesmos, verbatim.
// Sem motor o gate NÃO MEDE (exit 2) — uma exceção solta sairia 1, que se lê "medi e reprovei".
let ePreservado, relogioDoEspelho, ehCardDeTitulo, candidatosMaster;
try {
  ({ ePreservado } = await importarDoMotor("src/finalize/cortes.mjs"));
  ({ relogioDoEspelho } = await importarDoMotor("src/finalize/relogio-espelho.mjs"));   // [FIN-164] dono único de "em que relógio o espelho fala?"
  ({ ehCardDeTitulo } = await importarDoMotor("src/finalize/card-de-titulo.mjs"));       // [FIN-80/85/46] dono único de "esta cena é card de tópico?"
  ({ candidatosMaster } = await importarDoMotor("src/finalize/midia.mjs"));             // a lista de V1 que o gerador do XML usa
} catch (e) { console.error(`✗ NÃO MEDIDO — ${e.message}`); process.exit(2); }

// [porte Régie] ffprobe: FFPROBE_PATH, REGIE_FFPROBE ou o PATH (ffprobe.exe no Windows); array, sem shell. O módulo do canal
// (o dono único da regra) também ESPELHA o executável em REGIE_FFPROBE ao ser carregado — é o que o relogioDoEspelho do
// motor lê, e assim os dois medem com o MESMO programa (decisão I2).
const FF = await ferramentasOuNaoMedi("qc-espelho-cortes");
const exe = (nome) => FF.executavelFf(nome);

const RAIZ = fileURLToPath(new URL("..", import.meta.url));   // [porte Régie] em vez de import.meta.dirname
const argv = process.argv.slice(2);
const proj = argv.find((a) => !a.startsWith("--"));
const JSONOUT = argv.includes("--json");
if (!proj) { console.error("uso: qc-espelho-cortes.mjs <proj> [--json]"); process.exit(2); }

// [porte Régie] a pasta é ABSOLUTA (o motor recusa relativa); aceita <proj>, out/<proj> com / ou \ e a pasta.
const P = (() => {
  const limpo = proj.replace(/[\\/]+$/, "");
  if (isAbsolute(limpo)) return limpo;
  if (/^out[\\/]/.test(limpo)) return join(RAIZ, limpo);
  if (existsSync(limpo) && statSync(limpo).isDirectory()) return resolve(limpo);
  return join(RAIZ, "out", limpo);
})();
const fe = join(P, "espelho.json"), fc = join(P, "_cortes.json");
if (!existsSync(fe)) { console.error(`✗ falta ${fe}`); process.exit(2); }
/* [porte Régie] SEM `_cortes.json` NÃO É "NÃO MEDI" NA RÉGIE: é zero corte. A v1 é narração sintética, sem
 * decupagem de bruto — o `lerCortes` do motor devolve [] no mesmo caso. O estúdio saía 2 aqui porque lá o
 * arquivo era obrigatório (todo vídeo tinha gravação decupada); aqui isso deixaria o gate calado em TODO
 * vídeo, justamente sobre a lente que importa no faceless: a cena que passa do fim da narração. */
const semCortes = !existsSync(fc);

const e = lerJsonOuNaoMedi(fe, "qc-espelho-cortes");   // [porte Régie] BOM do Bloco de Notas; quebrado = NÃO MEDIDO, nunca 1
/**
 * ⚠️ A PROJEÇÃO TEM DE CARREGAR TUDO QUE `ehCardDeTitulo` LÊ ([ARTE-200], 11/ago/2026).
 *
 * Esta linha renomeava `inSec`→`ini` e, de passagem, DESCARTAVA `titulo` e `tese` — dois dos quatro
 * campos que o dono único consulta. O predicado então respondia sobre um objeto mutilado, sem erro
 * nenhum: `String(undefined || "")` é `""`, e string vazia não casa regex nenhum. O gate importava
 * o dono certo e perguntava a coisa certa sobre uma cena que já não era a do espelho.
 *
 * Efeito medido no `planeta-em-meteorito`: os 5 cards (que se declaram na `tese`) e qualquer card
 * cujo sinal esteja no `titulo` — a rede `/^CARD\b/`, viva no dono desde [FIN-46] — eram INVISÍVEIS
 * aqui desde sempre. Três calibrações deste gate (ceuta, orcas-nao-matam, especies-humanas) mexeram
 * no PREDICADO, que já estava certo; nenhuma olhou o objeto entregue a ele.
 *
 * Por isso a projeção passa a ser aditiva (`...x`): campo novo no espelho chega sozinho ao predicado,
 * e o próximo dialeto não precisa de um quarto conserto aqui. Os nomes curtos seguem por cima.
 */
const cenas = (Array.isArray(e) ? e : e.cenas || e.segmentos || [])
  .map((x) => ({ ...x, id: x.id, ini: +x.inSec || 0, dur: +x.dur || 0, modo: x.modo }));
const c = semCortes ? [] : lerJsonOuNaoMedi(fc, "qc-espelho-cortes");   // [porte Régie]
const cortes = (Array.isArray(c) ? c : c.cortes || [])
  .map((x) => ({ ini: x.ini ?? x.in ?? 0, fim: x.fim ?? x.out ?? 0, classe: x.classe, gapSec: +x.gapSec || 0,
                 manter: ePreservado(x) }))
  .sort((a, b) => a.ini - b.ini);
/* ⚠️ SPAN COM `manter:true` NÃO É CORTE — ele FICA no master (é o beat de bastidor que o decupador
 * preservou, `src/cortes.mjs:177` já o separa: `todos.filter((c) => !c.manter)`). Este gate lia o
 * `_cortes.json` por conta própria e DESCARTAVA o campo, então contava o span preservado como
 * removido e todo o mapa BRUTO→FINAL saía adiantado dali para a frente.
 * Medido no `rosto-da-formiga` (09/ago/2026): um beat preservado de 4,12 s empurrou os vãos dos
 * cards 3, 2 e 1 em ~3,8 s e o gate deu 3 REPROVA de `gap-ocupado` num espelho correto — cujos
 * cards estão exatamente em cima do silêncio real do `words-final.json`. Pior: o conserto sugerido
 * ("termine a cena antes do vão") jogaria o card POR CIMA de fala viva. Honrando `manter`, os 10
 * vãos batem com o silêncio real dentro de 0,22–0,59 s.                                            */
const cortesReais = cortes.filter((x) => !x.manter);

const achados = [];
const mm = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.round(s % 60)).padStart(2, "0")}`;
const fimEspelho = cenas.reduce((m, x) => Math.max(m, x.ini + x.dur), 0);

// ── EM QUE RELÓGIO ESTE ESPELHO FALA? ──────────────────────────────────────────────────────────
// A régua é a duração do master decupado. Um espelho em tempo final termina DENTRO dele; um em tempo
// bruto o ultrapassa, porque descreve a gravação inteira. A margem de 30 s absorve a cauda que
// qualquer espelho deixa sem cobrir sem que isso signifique outro relógio.
//
// ⚠️ A pergunta nasceu aqui e ficou SÓ aqui — e quem deriva tempo a partir do espelho continuou
// assumindo BRUTO por escrito. Medido no `ceuta` (09/ago/2026): o `trilha/escolher.mjs` carimbou um
// plano FINAL como BRUTO e contratou 4 faixas para 681 s que não existem ([FIN-164]). A régua, que
// já estava certa, virou `src/relogio-espelho.mjs` — o dono único e IMPORTÁVEL da pergunta. Os
// degraus e a ordem são os mesmos deste gate, conferidos veredito a veredito em 17 projetos antes
// da troca; ele só acrescenta um quarto degrau (aritmética cortes×fala) onde aqui não havia nada
// para medir e se chutava BRUTO. *Régua boa que não se pode importar é copiada errado.*
// [porte Régie] o master é o que o gerador do XML vai pôr na V1: a primeira existente da lista do motor (o
// `_master-decupado` do estúdio, o editado, ou o SINTÉTICO `_media/_master.mp4` = preto + narração).
const MASTER = candidatosMaster(P).find((f) => existsSync(f)) || null;
const rel = relogioDoEspelho(P, { fimEspelho, master: MASTER });
const durMaster = rel.durMaster || 0;
// [porte Régie] MASTER NO DISCO QUE O FFPROBE NÃO MEDIU É NÃO MEDIDO — nunca "sem master". Achatar os dois apagava a lente
// TRANSBORDA em silêncio (ffprobe ausente, FFPROBE_PATH apontando para o ffmpeg, arquivo segurado pelo antivírus).
if (MASTER && !durMaster)
  naoMedi("qc-espelho-cortes", `o master ${MASTER} está no disco e o ffprobe não o mediu — ${conferirFfprobe(FF) || "o arquivo não abriu (corrompido, vazio ou segurado por outro programa)"}`);

/* [porte Régie] SEM `_cortes.json` HÁ UM RELÓGIO SÓ — e o teto é a NARRAÇÃO.
 *
 * Sem corte nenhum, bruto e final são o mesmo tempo: não há "em que relógio o espelho fala" a decidir. O
 * `relogioDoEspelho` do motor, porém, responde BRUTO ("assumido") quando não há master — o caso de TODO vídeo
 * faceless antes da finalização, que é justamente quando o editor-de-arte e o diretor-de-arte rodam este gate.
 * Seguir aquele rótulo desligava a lente TRANSBORDA (ela só rodava no ramo FINAL e só com master medido) e o
 * gate imprimia "✓ PASS" sobre um espelho que passava 140 s do fim da narração. E com o master presente, um
 * espelho que passava do fim por MAIS de 30 s virava "BRUTO" pela margem do motor e passava, enquanto um estouro
 * de 15 s reprovava: a régua invertida (revisão v1, 23/09/2026).
 * Então, sem cortes: a lente roda SEMPRE, contra a narração (que existe antes do master; o master sintético nasce
 * dela e dura o mesmo), e o master só vale de teto quando não há narração no projeto. Sem teto nenhum: NÃO MEDIDO. */
let TETO = null;
if (semCortes) {
  const n = tetoDaNarracao(P, FF);
  // `fim`: o que acaba no teto, dito no achado. [rodada 3] O achado dizia "a narração acaba em" também
  // quando o teto era o MASTER, num projeto sem narração — o conserto certo (encurtar a cena ou
  // regravar a voz) depende de saber qual dos dois acabou.
  if (n.s) TETO = { s: n.s, de: n.de, folga: n.folga, fim: "a narração", porque: "o vídeo acaba com a narração" };
  else if (n.naoMediu) naoMedi("qc-espelho-cortes", n.motivo);
  else if (durMaster) TETO = { s: durMaster, de: `master ${MASTER} (medido; o projeto não tem narracao.wav nem words.json)`, folga: 0.5,
    fim: "o master", porque: "o vídeo acaba com o master (o projeto não tem narração no disco)" };
  else naoMedi("qc-espelho-cortes", `${n.motivo}, e nenhum master no disco — a lente TRANSBORDA (a cena que passa do fim do vídeo) ` +
    "não tem contra o que medir. Grave a narração (motor: src/ferramentas/narrar.mjs) antes de conferir o espelho.");
  // o master sintético é refeito pelo finalizar quando a narração muda; um master que não bate com ela é de OUTRA narração
  if (durMaster && TETO.s !== durMaster && Math.abs(durMaster - TETO.s) > 1)
    console.log(`  ▲ o master no disco (${durMaster.toFixed(1)}s) não tem a duração da narração (${TETO.s.toFixed(1)}s): ele é de outra narração — o finalizar o refaz. O teto aqui é a narração.`);
}
/**
 * O RÓTULO tem de dizer de qual degrau o veredito veio (`rel.como`, impresso no log lá embaixo):
 *   · `master`      → MEDIDO. É o único caso em que a lente TRANSBORDA roda.
 *   · `words-final` → INFERIDO final (o Scribe #2 só existe no fluxo novo), sem régua de duração.
 *   · `aritmetica`  → o fim do espelho casa melhor com um dos relógios calculados dos cortes.
 *   · `assumido`    → nada para medir: BRUTO, o modo conservador.
 * ⚠️ O estado "não consegui medir" achatado no lado errado é como um gate passa a mentir — e
 * ANUNCIAR "assumindo bruto" depois de ter lido FINAL é a versão barulhenta do mesmo defeito:
 * frase que se contradiz ensina a ignorar o gate, e aí ele para de proteger quando acerta.
 */
const RELOGIO = rel.relogio.toLowerCase();
const temFinal = existsSync(join(P, "words-final.json"));

/**
 * ⚠️ ANTES DE ACUSAR A CENA, CONFIRA QUE O MASTER É O ARQUIVO QUE OS CORTES DESCREVEM.
 *
 * A lente TRANSBORDA mede a cena contra `dur(master)`. Se o próprio master estiver errado, ela
 * acusa cena boa — e o conselho que ela imprime ("encurte a `dur` ou remova a cena") vira uma
 * ordem para DESTRUIR conteúdo. Medido no `dentro-do-sol` (13/ago): as duas reprovas eram
 * `s153-clube-de-membros` e `s154-boco-despedida`, e obedecer o gate teria apagado a despedida do
 * Bôco — que a regra do decupador chama de INTOCÁVEL.
 *
 * A conta que faltava é uma subtração, e o material já está todo aqui:
 *
 *     dur(master)  ==  dur(bruto) − Σ(cortes efetivos) + Σ(gapSec dos cards)
 *
 * No `dentro-do-sol` ela dá 1198,524s contra os 1186,534s do arquivo — **exatamente os 12,000s dos
 * quatro cards de 3 s**. O master foi materializado sem os gaps que a régua soma, então cena e
 * arquivo vivem em relógios com 12 s de diferença. Nenhum gate perguntava isso: o `_cortes.json` era
 * lido como verdade e nunca conferido contra o arquivo que ele descreve.
 *
 * Quando a conta não fecha, a lente TRANSBORDA é SUPRIMIDA. Um teto errado não produz veredito
 * melhor por ser aplicado com rigor — produz reprovação confiante na cena errada.
 */
let tetoSuspeito = null;
if (durMaster && !semCortes) {   // [porte Régie] sem cortes a conta é a de cima (master × narração), não esta
  // ⚠️ `durDoArquivo` mede `-select_streams V:0` — serve ao master e devolve null num .m4a, que não
  // tem vídeo. O bruto se mede pelo CONTÊINER, senão a conferência abaixo nunca roda e o gate volta
  // a ser o que era: silencioso sobre a única coisa que ele precisava perguntar.
  const durDeAudio = (p) => {
    if (!existsSync(p)) return null;
    const r = spawnSync(exe("ffprobe"), ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", p], { encoding: "utf8", windowsHide: true });   // [porte Régie]
    const v = parseFloat((r.stdout || "").trim());
    return Number.isFinite(v) && v > 0 ? v : null;
  };
  // [porte Régie] no faceless o "bruto" é a narração (narracao.wav): o master sintético nasce dela, e um
  // master mais curto ou mais longo que ela é um master de OUTRA narração — a mesma pergunta, outro arquivo.
  const durBruto = durDeAudio(join(P, "audio-hq.m4a")) || durDeAudio(join(P, "_media", "audio-hq.m4a"))
    || durDeAudio(join(P, "narracao.wav"));
  if (durBruto) {
    const somaCortes = cortes.filter((c) => !c.manter).reduce((s, c) => s + (c.fim - c.ini), 0);
    const somaGaps = cortes.reduce((s, c) => s + (+c.gapSec || 0), 0);
    const previsto = durBruto - somaCortes + somaGaps;
    const delta = previsto - durMaster;
    if (Math.abs(delta) > 1) {
      tetoSuspeito = { previsto, delta, somaCortes, somaGaps, durBruto };
      console.log(`  ⚠ O MASTER NÃO É O ARQUIVO QUE OS CORTES DESCREVEM — a lente TRANSBORDA foi suprimida`);
      console.log(`      bruto ${durBruto.toFixed(3)}s − cortes ${somaCortes.toFixed(3)}s + gaps ${somaGaps.toFixed(3)}s = ${previsto.toFixed(3)}s`);
      console.log(`      mas o master (${MASTER}) tem ${durMaster.toFixed(3)}s  →  diferença de ${delta.toFixed(3)}s`);   // [porte Régie]
      if (somaGaps > 0 && Math.abs(delta - somaGaps) < 1)
        console.log(`      a diferença é EXATAMENTE a soma dos gaps: o master foi materializado SEM os cards de título`);
      console.log(`      conserte a decupagem (re-materializar o master ou acertar os gapSec) — NÃO encurte cena por causa disto`);
    }
  }
}

if (RELOGIO === "final" || semCortes) {   // [porte Régie] sem cortes o relógio é um só, e é o do arquivo final
  // os vãos de 3 s, no tempo do arquivo final: soma dos keeps anteriores + gaps já materializados
  const vaos = []; { let cur = 0, limpo = 0;
    for (const ct of cortes) {
      if (ct.ini > cur) limpo += ct.ini - cur;
      if (ct.manter) { limpo += Math.max(0, ct.fim - Math.max(ct.ini, cur)); cur = Math.max(cur, ct.fim); continue; }
      if (ct.gapSec > 0) { vaos.push({ ini: +limpo.toFixed(2), fim: +(limpo + ct.gapSec).toFixed(2) }); limpo += ct.gapSec; }
      cur = Math.max(cur, ct.fim);
    }
  }
  // fronteiras de palavra, para a lente DESCOLADA
  let inicios = [];
  let silencios = []; // ⚠️ NÃO confundir com `vaos` (linha 84), que são os buracos de card de título
  // [porte Régie] sem cortes o words.json (a transcrição da narração) JÁ está no relógio do vídeo
  const arqPalavras = temFinal ? "words-final.json" : semCortes && existsSync(join(P, "words.json")) ? "words.json" : null;
  if (arqPalavras) {
    const d = lerJsonOuNaoMedi(join(P, arqPalavras), "qc-espelho-cortes");   // [porte Régie]
    const ws = Array.isArray(d) ? d : d.words || [];
    inicios = ws.map((w) => w.start ?? w.t ?? 0);
    // Os VÃOS DE SILÊNCIO entre uma palavra e a próxima. Sem eles, a lente media a distância até a
    // palavra mais próxima e acusava toda cena que abre numa PAUSA — exatamente onde ela deve abrir.
    // Medido no `ceuta` em 07/ago/2026: a s159 começa 1,36 s depois do fim de "existe." e 0,86 s
    // antes de "Antes", em silêncio absoluto, e o alerta dizia "começa no meio de uma palavra".
    // Alarme falso ensina a ignorar o gate, e aí ele para de proteger quando acerta.
    for (let i = 0; i + 1 < ws.length; i++) {
      const a = ws[i].end ?? ws[i].e;
      const b = ws[i + 1].start ?? ws[i + 1].t;
      if (a != null && b != null && b - a > 0.15) silencios.push([a, b]);
    }
  }
  const emSilencio = (t) => silencios.some(([a, b]) => t >= a && t <= b);

  for (const cena of cenas) {
    const fim = cena.ini + cena.dur;
    if (TETO && fim > TETO.s + TETO.folga) {   // [porte Régie] faceless: contra a narração, e sem supressão
      achados.push({ lente: "transborda", id: cena.id, gravidade: "REPROVA",
        o_que: `a cena termina em ${mm(fim)} e ${TETO.fim} acaba em ${mm(TETO.s)} (teto: ${TETO.de})`,
        porque: `${TETO.porque}: o que passa dele é cena cortada no meio (ou preto, se a cena encolher)`,
        conserto: "encurte a `dur` ou remova a cena — o espelho tem de caber na voz que existe" });
      continue;
    }
    if (!semCortes && durMaster > 0 && !tetoSuspeito && fim > durMaster + 0.5) {
      achados.push({ lente: "transborda", id: cena.id, gravidade: "REPROVA",
        o_que: `a cena termina em ${mm(fim)} e o master acaba em ${mm(durMaster)}`,
        porque: "não há arquivo ali: a cena simplesmente não vai existir na montagem",
        conserto: "encurte a `dur` ou remova a cena — e confira se o espelho não está em tempo BRUTO por engano" });
      continue;
    }
    /**
     * ⚠️ ESTA É "A GUARDA ACIMA" QUE O COMENTÁRIO DA LENTE `engolida` (linha ~195) DIZ TER NASCIDO
     * COM DOIS SINAIS FRÁGEIS — e que ficou para trás quando a outra foi consertada (09/ago/2026).
     *
     * O conserto do `especies-humanas` reescreveu a lente `engolida` para reconhecer o card pela
     * ESTRUTURA (`gapSec > 0`) e acrescentou `titulo-topico` à lista de modos. Aqui, a três dezenas
     * de linhas de distância e no MESMO arquivo, o predicado antigo seguiu vivo: `id` com
     * "card"/"titulo" ou `modo === "card-titulo"`, exatamente.
     *
     * Medido em 10/ago/2026 no `orcas-nao-matam`: os quatro cards se chamam `t01`–`t04` e o modo
     * deles é `titulo-topico`. Nenhum dos dois sinais casa — e o gate deu **4 REPROVAS de
     * `gap-ocupado` acusando os próprios cards de invadir o vão do card**, com o conserto sugerido
     * ("termine a cena antes do vão. O vão é do card") apontando para a única cena que já estava
     * certa. As 4 se somavam a 1 reprova legítima, e é isso que torna o falso positivo caro: ele
     * não some no meio do laudo, ele AFOGA o achado verdadeiro.
     *
     * Agora quem responde é `ehCardDeTitulo` de `src/modos.mjs` — o dono importável da pergunta
     * ([FIN-80]/[FIN-85]/[FIN-46], que já lê o modo declarado e exclui o card de MEMBROS). *Bug
     * consertado em uma das duas cópias volta pela cópia que ficou.*
     */
    const ehCard = ehCardDeTitulo(cena) || cena.modo === "card-titulo";
    const vao = vaos.find((v) => cena.ini < v.fim - 0.2 && fim > v.ini + 0.2);
    if (vao && !ehCard) {
      achados.push({ lente: "gap-ocupado", id: cena.id, gravidade: "REPROVA",
        o_que: `invade o vão de card em ${mm(vao.ini)}→${mm(vao.fim)}`,
        porque: "esse buraco foi aberto de propósito para o card de título entrar (FIN-17) — ocupá-lo tira o respiro da virada de tópico",
        conserto: "termine a cena antes do vão, ou comece depois dele. O vão é do card." });
    }
    /**
     * ⚠️ CARD DE TÍTULO NÃO SE MEDE POR WORD-LOCK — ele MORA no silêncio (3ª calibração deste gate).
     *
     * O vão de 3 s existe justamente porque ali não há fala: o título foi cortado e o card ocupa o
     * buraco. Medir a distância dele até a palavra mais próxima devolve ~1 s por construção, e os 4
     * cards do `ceuta` alertaram todos na primeira execução com o espelho já correto.
     *
     * Este gate já produziu três falsos positivos, todos da mesma família: punir o card por seguir o
     * mecanismo que o desenho prevê. *Onde a regra tem uma exceção estrutural, quem sabe dela é o
     * gate — não quem lê o laudo.*
     */
    if (inicios.length && !ehCard) {
      const dist = inicios.reduce((m, t) => Math.min(m, Math.abs(t - cena.ini)), Infinity);
      if (dist > 0.7 && cena.ini > 0.5 && !emSilencio(cena.ini)) {
        achados.push({ lente: "descolada", id: cena.id, gravidade: "ALERTA",
          o_que: `começa a ${dist.toFixed(2)}s da fronteira de palavra mais próxima`,
          porque: "word-lock é o método da casa; começar no meio de uma palavra costuma ser tempo copiado de outro relógio" });
      }
    }
  }
} else {
  for (const cena of cenas) {
    const fim = cena.ini + cena.dur;
    let dentro = 0, engole = null;
    for (const ct of cortesReais) {
      const ov = Math.min(fim, ct.fim) - Math.max(cena.ini, ct.ini);
      if (ov <= 0) continue;
      dentro += ov;
      /**
       * ⚠️ A TOLERÂNCIA DE 1 FRAME NÃO É FROUXIDÃO — é o que separa "cabe exatamente" de "não cabe".
       *
       * Medido no `especies-humanas`: o card `s14` tem `inSec=911.61 dur=4.95` e o vão de título vai
       * de 911.61 a 916.56. Cabe ao centésimo. Mas `911.61 + 4.95` dá **916.5600000000001** em ponto
       * flutuante, e `916.56 >= 916.5600000000001` é FALSO — então a cena que casa perfeitamente não
       * era reconhecida como "engolida", caía no ramo seguinte e saía **REPROVADA por 1e-13**.
       *
       * O épsilon é 1/60 s (um frame a 60 fps, mais estreito que qualquer frame que a casa usa):
       * grande o bastante para o ruído binário, pequeno demais para perdoar um erro real de relógio.
       */
      const EPS = 1 / 60;
      if (ct.ini <= cena.ini + EPS && ct.fim >= fim - EPS) engole = ct;
    }
    /**
     * ⚠️ CARD DE TÍTULO DENTRO DE CORTE DE TÍTULO É O DESENHO, NÃO DEFEITO.
     * Falso positivo pego na primeira execução deste gate: as 4 "engolidas" do `ceuta` eram
     * `s09-card-t1`…`s103-card-t4`, todas dentro de cortes de classe `titulo`. É o mecanismo da
     * FIN-17. *Gate que acusa o mecanismo previsto ensina a ignorá-lo — e aí perde o caso real.*
     */
    /**
     * ⚠️ A PROVA DE QUE A CENA PERTENCE AO VÃO É ESTRUTURAL — não é o nome dela (09/ago/2026).
     *
     * A guarda acima nasceu certa e reconhecia o card por DOIS sinais frágeis: o `id` conter
     * "card"/"titulo", ou o `modo` ser exatamente `card-titulo`. Medido no `especies-humanas`, os
     * quatro cards se chamam `s03-ummundocheiodegentedifer`, `s14-abaguncaequasetaovelhaqu`,
     * `s23-ofantasmaescondidonoseud` e `s34-porquesobrousoagente` — batizados pelo CONTEÚDO, como
     * todo o resto do espelho — e o modo deles é **`titulo-topico`**, não `card-titulo`.
     *
     * Resultado: 4 REPROVAS num vídeo cujos cards estão exatamente onde devem estar. Dois deles
     * casam com o vão ao CENTÉSIMO (`s14` em 911,61 num vão 911,61→916,56; `s23` em 1211,07 num vão
     * 1211,07→1216,88). O gate barrava a coisa mais correta do arquivo.
     *
     * O sinal que não depende de convenção é o `gapSec`: um span com `gapSec > 0` **é**, por
     * definição, o buraco que a decupagem abriu para um card caber. Cena que cai nele está no lugar
     * projetado — e o nome dela é irrelevante para esse fato.
     *
     * Mantenho os dois sinais antigos como reforço (custam nada e cobrem espelho antigo sem
     * `gapSec`), mas o que decide agora é a estrutura. *Guarda que depende de convenção de nome
     * protege só quem seguiu a convenção — e quem a seguiu raramente é quem erra.* Mesma família da
     * [ARTE-183], onde um gate acusava pela presença de um caractere em vez de medir a forma.
     */
    const ehCardEmCorteDeTitulo = engole && engole.classe === "titulo" &&
      (engole.gapSec > 0 || /card|titulo|título/i.test(cena.id) ||
       /^(card-titulo|titulo-topico)$/.test(cena.modo || ""));
    if (engole && !ehCardEmCorteDeTitulo) {
      achados.push({ lente: "engolida", id: cena.id, gravidade: "REPROVA",
        o_que: `a cena inteira (${mm(cena.ini)}, ${cena.dur}s) cai dentro do corte ${mm(engole.ini)}→${mm(engole.fim)} [${engole.classe}]`,
        porque: "o remapeador BRUTO→LIMPO não tem para onde mandá-la: ela some da montagem",
        conserto: "ou a cena sai do espelho, ou o corte está errado. Decida qual" });
    } else if (dentro > 0.2 && !ehCardEmCorteDeTitulo) {
      // Uma cena cobre uma JANELA DE FALA, e essa janela pode conter um retake removido — o corte
      // tira a repetição e a cena segue cobrindo o que sobrou. Só abaixo de 40% de sobra ela virou
      // outra coisa e o inSec/dur precisam ser refeitos.
      const sobra = cena.dur - dentro;
      achados.push({ lente: "mutilada", id: cena.id,
        gravidade: sobra < cena.dur * 0.4 ? "REPROVA" : "ALERTA",
        o_que: `${dentro.toFixed(2)}s dos ${cena.dur}s da cena caem dentro de corte(s)`,
        porque: "a `dur` declarada mente: a cena vai durar menos do que diz",
        conserto: "ajuste inSec/dur para a janela que SOBRA, ou mova a fronteira do corte" });
    }
  }
  for (const cena of cenas) {
    const cruza = cortesReais.filter((ct) => ct.ini > cena.ini && ct.fim < cena.ini + cena.dur);
    if (cruza.length) achados.push({ lente: "atravessa", id: cena.id, gravidade: "ALERTA",
      o_que: `atravessa ${cruza.length} emenda(s) inteira(s)`,
      porque: "o ripple resolve, mas é onde mora o flash de apresentador — confira o frame da junta" });
  }
}

const reprovas = achados.filter((a) => a.gravidade === "REPROVA");
if (JSONOUT) {
  console.log(JSON.stringify({ proj, relogio: semCortes ? "unico" : RELOGIO, cenas: cenas.length, cortes: cortesReais.length, preservados: cortes.length - cortesReais.length,
    durMaster: +durMaster.toFixed(2), fimEspelho: +fimEspelho.toFixed(2), teto: TETO ? { s: +TETO.s.toFixed(2), de: TETO.de } : null,   // [porte Régie]
    ok: !reprovas.length, achados }, null, 1));
  process.exit(reprovas.length ? 1 : 0);
}

console.log(`\n══ ESPELHO × ARQUIVO · ${proj} · ${cenas.length} cenas, ${cortesReais.length} cortes ══`);
const comoSoube = ` · ${rel.como}: ${rel.detalhe}`;
// [porte Régie] sem cortes o relógio é ÚNICO: o rótulo BRUTO/FINAL do motor e o "fluxo ANTIGO" não se aplicam (seriam falsos)
if (semCortes) {
  console.log(`   relógio do espelho: ÚNICO (sem cortes, bruto = final) · teto: ${TETO.de}, ${TETO.s.toFixed(1)}s`);
  console.log(`   ○ sem \`_cortes.json\`: zero corte (narração sintética, sem decupagem de bruto) — as lentes de corte não têm o que medir.`);
} else {
  console.log(`   relógio do espelho: ${RELOGIO.toUpperCase()}${comoSoube}`);
  if (RELOGIO === "bruto") console.log(`   ▲ fluxo ANTIGO. Desde 06/ago o espelho nasce depois do master, em tempo FINAL (passo 7b da estação).`);
  if (!durMaster) console.log(`   ▲ sem master no disco (nem o decupado, nem o sintético \`_media/_master.mp4\`): a lente TRANSBORDA não rodou. Cena que passa do fim do arquivo passa daqui EM SILÊNCIO — confira o teto à mão contra o fim da fala.`);   // [porte Régie]
}
console.log("");
if (!achados.length) { console.log("  ✓ PASS — o espelho cabe no arquivo e respeita os vãos de card\n"); process.exit(0); }
for (const a of achados.slice(0, 25)) {
  console.log(`  ${a.gravidade === "REPROVA" ? "✗" : "▲"} [${a.lente}] ${a.id} — ${a.o_que}`);
  if (a.porque) console.log(`      ${a.porque}`);
  if (a.conserto) console.log(`      → ${a.conserto}`);
}
if (achados.length > 25) console.log(`  … +${achados.length - 25}`);
console.log(`\n  ${reprovas.length ? `✗ ${reprovas.length} REPROVA(S)` : "▲ só alertas"} · ${achados.length - reprovas.length} alerta(s)\n`);
process.exit(reprovas.length ? 1 : 0);
