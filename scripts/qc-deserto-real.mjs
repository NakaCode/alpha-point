#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-deserto-real.mjs (linhas 1-198, commit 4afda12).
// O que mudou: resolução do projeto (out\<proj>, pasta absoluta) e BOM do Bloco de Notas no espelho (JSON quebrado = NÃO MEDIDO);
// o rodapé diz que a faixa de referência é do acervo do Top10. O `modo === "apresentador"` só quebra o deserto quando o canal.json
// declara "apresentador": true — no faceless esse trecho é PRETO, não gente real na tela (o porte anterior o contava como registro
// mesmo sem apresentador, e um deserto de 250 s passava como 120 s). O `_registro_master` (compilado) ficou. O piso 180 s é o
// medido no Top10 (--piso muda).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-deserto-real.mjs — quanto tempo SEGUIDO o espectador fica sem ver nada real?
 *
 * ⚠️ QUARTO IRMÃO, CLONE DE NENHUM. Os outros três medem a MESMA pergunta ("o vídeo põe o mundo real
 * na tela?") em três instantes da linha. Este muda a pergunta: não é *quanto*, é **onde**.
 *
 *   1. `qc-espelho-midia`  → o que o ESPELHO DECLARA.  Uma RAZÃO (cenas que pedem ÷ cobertura).
 *   2. `qc-direcao-real`   → o que a DIREÇÃO ANCORA.   Uma RAZÃO (âncoras reais ÷ cenas dirigidas).
 *   3. `qc-midia-real`     → o que a ARTE ENTREGA.     Uma RAZÃO (HTMLs com mídia viva ÷ cenas).
 *   4. **este**            → como aquilo se DISTRIBUI NO TEMPO. Um RELÓGIO.
 *
 * Os três primeiros são cegos para a distribuição, e é um ponto cego real: uma razão saudável com a
 * mídia toda amontoada nos primeiros cinco minutos passa nos três, e o espectador atravessa quinze
 * minutos de desenho sem ver uma foto. **Razão e distribuição são duas perguntas, e só uma delas
 * tinha gate.**
 *
 * ══ O CASO QUE O CRIOU (03/ago/2026) ══
 *
 * Mateus, sobre a `orcas-nao-matam` recém-finalizada e o resto da fila: *"Garanta que a orca que
 * finalizou agora e os demais projetos também tenham bastante FOOTAGES de vídeos, imagens, desenhos,
 * mapas, mapas 3D, variações de tudo (quando há necessidade — e ver como que está esse julgamento de
 * quando entra cada coisa, pois pode estar mal calibrado também)."*
 *
 * Medindo os 22 espelhos do acervo, o defeito não estava na razão — estava no relógio. Os DOIS
 * projetos com a melhor razão do acervo pelo gate nº1 (`oceano-700km` e `energia-escura`, ambos em
 * **100%** de "pede registro real") são também os que têm **11min18s** e **9min04s** contínuos sem um
 * único `footage|foto|drone` declarado. O gate nº1 não erra — ele mede intenção, e intenção não tem
 * relógio. Este mede o relógio.
 *
 * ══ O QUE EU MEDI ANTES DE CALIBRAR — 21 espelhos comparáveis (Mac + VM), 03/ago ══
 *
 * **Maior janela contínua sem registro real**, em segundos, ordenada:
 *
 *      0 · 0 · 33 · 42 · 55 · 57 · 61 · 69 · 94 · 99 · 104 · 130 · 133 · 134 · 136
 *      ╎  BANDA VAZIA DE 98s  ╎
 *      234 (orcas) · 426 (especies-humanas) · 544 (energia-escura) · 563 (el-nino)
 *      678 (oceano-700km) · 906 (nilo-nao-secou)
 *
 * A distribuição é **bimodal, não uma rampa** — 15 projetos moram abaixo de 136s e 6 acima de 234s,
 * com nada no meio. O piso de **180s** cai no centro da banda vazia: 24% acima do último que passa,
 * 30% abaixo do primeiro que acende. Não é número inventado; é o joelho medido.
 *
 * A segunda medida confirma o corte sem depender dele — **fração do vídeo dentro de janelas > piso**:
 * é **0% em todos os 15** que passam e **24% a 85%** em todos os 6 que acendem. Zero faixa cinzenta.
 *
 * ⚠️ **Por que NÃO herdo o guarda `needs.geo ≥ 5` dos irmãos.** Lá ele existe para poupar o vídeo que
 * não fala de lugar nenhum (`planetas-algodao-doce`, exoplaneta que ninguém fotografou). Aqui ele
 * pouparia justamente `energia-escura` (geo 2) e `oceano-700km` (geo 3) — dois dos seis achados —, e
 * pouparia errado: dark energy tem o instrumento DESI fotografado, e a água no manto tem o diamante
 * de Juína, que a própria narração nomeia. **A pergunta aqui não é "existe lugar real", é "o
 * espectador passou tempo demais sem imagem nenhuma"** — e essa não tem exceção por tema.
 * `planetas-algodao-doce` passa por mérito próprio (94s), sem precisar de guarda.
 *
 * ══ SEVERIDADE ══
 *   ▲ ALERTA → maior janela sem registro real > piso (default 180s)
 *   ○ INFO   → o mapa das janelas, a fração em deserto, e o "deserto do ASSUNTO" (leitura estrita)
 *
 * NÃO REPROVA por padrão, de propósito: é julgamento editorial, e [ARTE-77] manda tratar alarme falso
 * como bug de prioridade alta. `--duro` promove a reprovação. Gate que nasce vermelho e fica semanas
 * assim é gate que alguém desliga.
 *
 * Uso: node scripts/qc-deserto-real.mjs <proj> [--duro] [--piso=180] [--json]
 */
import { existsSync, statSync } from "node:fs";
import { join, basename, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { lerJsonOuNaoMedi, canalTemApresentador } from "./lib/modos.mjs";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const argv = process.argv.slice(2);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
const JSON_OUT = argv.includes("--json");
const DURO = argv.includes("--duro");
const PISO = +opt("piso", "180");
const proj = argv.find((a) => !a.startsWith("--"));
if (!proj) { console.error("uso: qc-deserto-real.mjs <proj> [--duro] [--piso=180] [--json]"); process.exit(2); }
// [porte Régie] aceita <proj>, out/<proj> com / ou \ (o estúdio só testava "out/") e a pasta do projeto.
const D = (() => {
  const limpo = proj.replace(/[\\/]+$/, "");
  if (isAbsolute(limpo)) return limpo;
  if (/^out[\\/]/.test(limpo)) return join(RAIZ, limpo);
  if (existsSync(limpo) && statSync(limpo).isDirectory()) return resolve(limpo);
  return join(RAIZ, "out", limpo);
})();

const esp = ["espelho.json", "_espelho.json"].map((f) => join(D, f)).find(existsSync);
if (!esp) { console.error(`✗ nenhum espelho em ${D} — nada a medir`); process.exit(2); }
const segs = (() => { const j = lerJsonOuNaoMedi(esp, "qc-deserto-real"); return j.segmentos || j.cenas || (Array.isArray(j) ? j : []); })();   // [porte Régie] BOM; quebrado = NÃO MEDIDO
if (!segs.length) { console.error(`✗ espelho sem cenas: ${esp}`); process.exit(2); }

/* ── o campo `midia` é o insumo; sem ele não há medida ──────────────────────────────────────────
 * O `compilado-previsoes-jiang` usa o vocabulário `Mxx` no `modo` e NÃO tem campo `midia` em nenhum
 * dos 75 segmentos. Medi-lo daria "3669s de deserto" — um número que só reflete um schema diferente.
 * Indefinido NÃO reprova: exit 2. (Nos outros 21 do acervo o campo está em 100% dos segmentos.)   */
const semCampo = segs.filter((s) => s.midia === undefined).length;
if (semCampo / segs.length > 0.3) {
  console.error(`✗ ${semCampo}/${segs.length} segmentos sem o campo \`midia\` — schema incompatível, nada a medir.`);
  process.exit(2);
}

const MIDIA_REAL = new Set(["footage", "foto", "drone"]);
const ehReal = (s) => MIDIA_REAL.has(String(s.midia));

/* ── O MASTER TAMBÉM PÕE REGISTRO REAL NA TELA, E ELE NÃO APARECE EM `midia` ────────────────────
 * Este gate lê o PEDIDO (`midia`) porque no vídeo do zero pedido e tela são a mesma coisa: o que
 * ninguém pede, ninguém mostra. No compilado de **edição sobre a edição** isso deixa de valer — a
 * maior parte da tela é o master dos editores, que já é footage real, print de matéria ou
 * infográfico, e o espelho dessas janelas NÃO pede nada (`midia:"apresentador"`, senão o
 * `insumos-ledger` abre caça para vídeo pronto desde junho). Medindo só o pedido, o gate julga a
 * camada nova como se ela fosse o vídeo inteiro.
 *
 * O montador desse fluxo declara o que o master entrega em `_registro_master` — anotação do próprio
 * espelho (a convenção `^_` do `contratos/espelho.schema.json`). Quando o campo existe, ele conta:
 * uma janela em que o editor pôs footage real NÃO é deserto, é registro que já está pago e na tela.
 *
 * Medido no `compilado-poder-militar-china-eua` (11/set/2026): pela leitura antiga, 189 s de maior
 * janela e 13% do vídeo "em deserto" — sendo que dentro dessas janelas o master mostra HQ-9 e S-400
 * disparando, navio na costa, cabo submarino, documentos do MSS, o show aéreo de Changchun e quatro
 * lançamentos reais. O conserto proposto por aquele laudo era "quebrar a janela", ou seja, cobrir
 * imagem real com desenho. Campo OPCIONAL e retrocompatível: dos 15 espelhos em `out/` hoje, só o
 * compilado o tem — nos outros 14 a medida não muda em um segundo.                              */
const REGISTRO_MASTER_REAL = new Set(["footage-real", "foto-real", "print-materia", "infografico-estudio", "cinema-cg", "misto"]);
const masterMostraReal = (s) => REGISTRO_MASTER_REAL.has(String(s._registro_master || ""));
const ordenados = [...segs].sort((a, b) => (+a.inSec || 0) - (+b.inSec || 0));
const durTotal = Math.max(...ordenados.map((s) => (+s.inSec || 0) + (+s.dur || 0)));

/* Varre a linha do tempo e devolve as janelas contínuas em que NADA real entrou na tela.
 * `quebra` diz o que interrompe o deserto — é o único parâmetro que separa as duas leituras. */
function janelas(quebra) {
  const out = [];
  let ini = null, fim = null, n = 0;
  for (const s of ordenados) {
    if (quebra(s)) { if (ini !== null) { out.push({ ini, fim, n }); ini = null; n = 0; } continue; }
    if (ini === null) ini = +s.inSec || 0;
    fim = (+s.inSec || 0) + (+s.dur || 0);
    n++;
  }
  if (ini !== null) out.push({ ini, fim, n });
  return out.map((j) => ({ ...j, dur: j.fim - j.ini })).sort((a, b) => b.dur - a.dur);
}

/* LEITURA PRINCIPAL (conservadora): qualquer segmento com mídia real quebra o deserto — inclusive o
 * plano do apresentador, cuja mídia é a própria gravação. É gente de verdade na tela.
 *
 * ⚠️ O `modo === "apresentador"` PRECISA estar aqui explicitamente, e o motivo é o CONTRATO
 * (04/ago/2026, `energia-escura`). O comentário acima sempre disse "inclusive o plano do
 * apresentador" — mas quem testava era só `ehReal`, e `midia` é um enum FECHADO em
 * `contratos/espelho.schema.json`: ["animacao","footage","foto","drone"]. Não existe valor para
 * "é a gravação do apresentador". O montador é obrigado a escrever "animacao" nesse plano, e a
 * leitura principal então contava 42 aparições de gente real como DESERTO.
 *
 * O tamanho do erro, medido: o `energia-escura` acusou 549 s (9min09s) de janela e "80% do vídeo em
 * deserto"; contando o apresentador, a maior janela é 77 s — abaixo do piso de 180 s, 0% em deserto.
 * O laudo mandava devolver 40 cenas à arte, cada uma jogando fora um clipe 4K pago, para consertar
 * um deserto que não existia. Alarme falso caro ensina a ignorar o gate. [ARTE-117]                 */
/* [porte Régie] …MAS SÓ ONDE HÁ APRESENTADOR FILMADO. No canal faceless (o padrão da Régie) não há gravação: o segmento
 * `apresentador` é o master sintético — PRETO com a narração. Contá-lo como "gente real na tela" quebrava o deserto
 * exatamente onde não há imagem nenhuma: 120 s de animação + 10 s de "apresentador" + 120 s davam maior janela de
 * 120 s e PASS sob --duro, quando o espectador atravessa 250 s sem o mundo (revisão v1). Opcional DECLARADO:
 * `"apresentador": true` no canal.json devolve a regra do estúdio. */
const TEM_APRESENTADOR = canalTemApresentador("qc-deserto-real");
const jan = janelas((s) => ehReal(s) || (TEM_APRESENTADOR && s.modo === "apresentador") || masterMostraReal(s));
/* LEITURA ESTRITA (INFO): só a COBERTURA quebra. O rosto do apresentador é real, mas não é registro
 * DO ASSUNTO — quem ouve falar do peixe quer ver o peixe, não o locutor. [ARTE-88]                  */
const janAssunto = janelas((s) => (ehReal(s) || masterMostraReal(s)) && s.modo !== "apresentador");

const maior = jan.length ? jan[0].dur : 0;
const maiorAssunto = janAssunto.length ? janAssunto[0].dur : 0;
const emDeserto = jan.filter((j) => j.dur > PISO).reduce((a, j) => a + j.dur, 0);
const pctDeserto = durTotal ? +((emDeserto / durTotal) * 100).toFixed(0) : 0;
const s1 = (n) => `${Math.floor(n / 60)}min${String(Math.round(n % 60)).padStart(2, "0")}s`;

const alertas = [];
if (maior > PISO) alertas.push({ tipo: "deserto-de-registro-real", maior: Math.round(maior), piso: PISO, pctDeserto });

if (JSON_OUT) {
  console.log(JSON.stringify({
    proj: basename(D), segmentos: segs.length, duracao: +durTotal.toFixed(1),
    maiorJanela: Math.round(maior), maiorJanelaAssunto: Math.round(maiorAssunto),
    pctEmDeserto: pctDeserto, piso: PISO,
    janelas: jan.filter((j) => j.dur > PISO).map((j) => ({ ini: +j.ini.toFixed(1), fim: +j.fim.toFixed(1), dur: Math.round(j.dur), cenas: j.n })),
    alertas, duro: DURO,
  }, null, 1));
} else {
  console.log(`\n══ DESERTO DE REGISTRO REAL · ${basename(D)} · ${segs.length} segmentos · ${s1(durTotal)} ══`);
  console.log(`  maior janela SEM footage/foto/drone: ${Math.round(maior)}s (${s1(maior)})`);
  // [porte Régie] a faixa é a do acervo do TOP10 (de onde saiu o piso de 180 s); o canal ainda não tem a sua.
  console.log(`  faixa do acervo do Top10 (21 espelhos, 03/ago): 0 · 33 · 55 · 94 · 104 · 133 · 136 ┊ 234 · 426 · 563 · 678 · 906`);
  console.log(`                                                └── 15 projetos ──┘ banda vazia └── 6 projetos ──┘`);
  console.log(`  fração do vídeo dentro de janelas > ${PISO}s: ${pctDeserto}%   (0% em todos os 15 que passam)`);
  console.log(`  ○ leitura estrita (só a COBERTURA quebra o deserto): ${Math.round(maiorAssunto)}s`);

  for (const a of alertas) {
    console.log(`\n  ▲ ${s1(a.maior)} CONTÍNUOS sem um único registro real na tela — o piso é ${a.piso}s.`);
    console.log(`      As janelas acima do piso:`);
    for (const j of jan.filter((x) => x.dur > PISO).slice(0, 6))
      console.log(`        @${Math.round(j.ini)}s → ${Math.round(j.fim)}s   ${Math.round(j.dur)}s em ${j.n} cenas seguidas`);
    console.log(`      Isto mede o RELÓGIO; a parcela em segundos é do \`qc-piso-real\` [ARTE-323].`);
    console.log(`      É o mundo real AMONTOADO — a razão do vídeo pode estar ótima e o espectador`);
    console.log(`      ainda atravessar ${s1(a.maior)} sem ver uma foto, um vídeo ou um relevo.`);
    console.log(`      Conserto barato, nesta estação: quebre a janela com o que a fala JÁ nomeia lá dentro.`);
  }

  const reprova = DURO && alertas.length;
  console.log(reprova
    ? `\n✗ REPROVADO — ${alertas.length} deserto(s) acima do piso, sob --duro.\n`
    : alertas.length
      ? `\n▲ PASSA COM ${alertas.length} ALERTA(S) — editorial, não contratual. \`--duro\` o torna reprovação.\n`
      : `\n✓ PASS — o registro real está DISTRIBUÍDO: nenhuma janela passa de ${PISO}s.\n`);
}

process.exitCode = (DURO && alertas.length) ? 1 : 0;
