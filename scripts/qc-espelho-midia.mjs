#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-espelho-midia.mjs (linhas 1-214, commit 4afda12).
// O que mudou: o argumento aceita "\" do Windows. A calibração (pisos, faixa do acervo) é a do estúdio e continua valendo como régua até o canal ter a própria medição.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-espelho-midia.mjs — o ESPELHO pede o mundo real, ou já nasce desenhando?
 *
 * ⚠️ IRMÃO DE DOIS, CLONE DE NENHUM. Os três medem o mesmo eixo em três instantes, e o instante é
 * a diferença que importa — porque o conserto encarece a cada estação:
 *
 *   1. **este** (`qc-espelho-midia`)  → o que o ESPELHO DECLARA.   Roda na estação ESPELHO/DECUPAGEM.
 *   2. `qc-direcao-real` (ARTE-94)    → o que a DIREÇÃO ANCORA.    Roda na estação DIREÇÃO DE ARTE.
 *   3. `qc-midia-real`   (PESQ-29)    → o que a ARTE ENTREGA.      Roda no `top10 qc`, sobre os HTMLs.
 *
 * O 3 pega a promessa quebrada; o 2, a promessa nunca feita; **este pega o pedido que nunca existiu**
 * — e ele é o primeiro, porque nenhum dos outros dois consegue pedir o que o espelho não listou.
 *
 * ══ O CASO QUE O CRIOU (02/ago/2026, `paises-baixos-mar`) ══
 *
 * O `qc-direcao-real` mediu a direção da Holanda em **4,1% de âncora real** e o `qc-midia-real` achou
 * 4 cenas M07 entregues sem uma única `<img>`. Os dois estão certos, e os dois chegam tarde: quando
 * o diretor de arte abriu o espelho, **só 8 das 39 cenas de cobertura pediam registro real** (20,5%).
 * Uma direção perfeita ancoraria 8. Uma caça perfeita traria 8. *O teto foi decidido uma estação
 * antes de todos eles* — num vídeo sobre um país de moinhos, pôlderes, diques e Kinderdijk, coisas
 * que existem, foram filmadas, e estão em qualquer banco de footage.
 *
 * ⚠️ E QUEM ESCREVEU AQUELE ESPELHO NÃO FOI O MONTADOR. No fluxo do bruto do apresentador — que a
 * doutrina do próprio montador chama de *"o PADRÃO, e a maioria esmagadora do que se produz"* — o
 * espelho sai da estação DECUPAGEM (`PROXIMA.decupagem = "pesquisa"`, o montador é pulado). A
 * [ARTE-88] ("a coisa nomeada vira needs") foi escrita no ofício do montador e mora em `regras/ARTE.md`
 * — e a fatia que o decupador carrega é `FIN.md` + `PESQ.md`. Lei certa, agente que não roda, gaveta
 * que ninguém abre. **Por isso o gate mede o ARQUIVO e não pergunta quem o assinou.**
 *
 * ══ O QUE EU MEDI ANTES DE CALIBRAR — 21 espelhos (Mac + VM), 02/ago ══
 *
 * **Taxa de pedido** = cenas de cobertura que exigem registro real ÷ cenas de cobertura.
 * (Cobertura exclui `apresentador`, `titulo-topico`, `navegacao`, `nenhum`: a "mídia real" do Bôco em
 * câmera é a própria gravação, e contá-lo afoga a razão.)
 *
 *     0 (compilado-jiang) · 10,9 (el-nino) · 19,2 (nilo) · 20,5 (paises-baixos) · 23,2 (planetas)
 *     25,3 · 28,6 · 30,8 · 35,8 · 41,3 · 44,6 ·│mediana 44,6│· 48 · 50,8 · 56,1 · 66 · 74,6
 *     91,3 (lugar-mais-profundo) · 94,3 (senna) · 100 (energia-escura, ia-fisica, oceano-700km)
 *
 * A rampa é CONTÍNUA — não há banda vazia no pé, então piso solto aqui é número inventado. O que
 * separa o defeito do legítimo não é a altura: é **o vídeo ser ou não sobre o mundo real**.
 * `planetas-algodao-doce` está em 23,2% e não deve nada a ninguém — não existe registro de um
 * exoplaneta de algodão-doce, e ali o desenho **é** a verdade. Reprová-lo seria o alarme falso que a
 * [ARTE-77] proíbe. Então herdo o desempate que o `qc-direcao-real` já usa: **o alerta só acende onde
 * o PRÓPRIO plano declarou lugar real — ≥5 cenas com `needs.geo`.**
 *
 * Com esse filtro, o piso de **25%** cai no vão entre 20,5 e 28,6 e acende em **3 de 21**:
 * `el-nino` (10,9% · geo 19 — é o vídeo da ANCHOVETA, o peixe nomeado que nunca apareceu),
 * `nilo-nao-secou` (19,2% · geo 6) e `paises-baixos-mar` (20,5% · geo 18). Os dois primeiros já
 * tinham reclamação do Mateus. `planetas` (geo 0) e `compilado-jiang` (geo 0) nunca acendem.
 * O piso é o MESMO 25% do gate irmão de propósito: dois pisos diferentes para a mesma pergunta é
 * como uma doutrina começa a divergir de si mesma.
 *
 * ══ A SEGUNDA MEDIDA — e é a que discrimina de verdade ══
 *
 * **Pedido MUDO**: a cena declara mídia real (`midia: footage|foto|drone`, ou `needs.midia`) e **não
 * diz o que buscar** — `midia_termos` vazio E `midia_necessidade` vazio. A pesquisa recebe "traga
 * footage" sem assunto, sem lugar e sem época.
 *
 *     paises-baixos-mar  8/8 = 100%   ←  ZERO termo de busca nas 8 cenas que pedem registro
 *     nilo-nao-secou     1/5 =  20%
 *     os outros 19       0/…  =   0%   ← exatamente zero, todos
 *
 * Discriminação limpa em 21 projetos, sem faixa cinzenta: **por isso ela REPROVA e a taxa só alerta.**
 * O que a Holanda pôs no lugar dos termos foram 8 caminhos de arquivo INVENTADOS em `needs.midia`
 * (`_media/footage/kinderdijk/kinderdijk-19-moinhos-4k.mp4`) — dos quais **4 nunca existiram no
 * disco**. Nomear o arquivo que você gostaria de ter não é pedir; é fingir que já pediu. O campo
 * `needs.midia` é a GRAFIA CANÔNICA de um asset (schema, 22/jul) — ele diz ONDE a coisa vai morar,
 * nunca O QUE procurar. Quem diz o que procurar são `midia_termos` e `midia_necessidade`.
 *
 * ⚠️ Nota de leitura para quem vier depois: `needs.midia` aparece em **1 dos 21** espelhos do acervo
 * (justamente o condenado). Não conclua daí que "quase ninguém declara mídia" — os outros 20 declaram
 * pelo par `midia` + `midia_termos`, que é o caminho vivo. Medir só `needs.midia` inverteria o
 * ranking e poria a Holanda em primeiro lugar.
 *
 * ══ SEVERIDADE ══
 *   ✗ FALHA  → cena pede registro real e não diz O QUE buscar (termos e necessidade vazios)
 *   ▲ ALERTA → taxa de pedido < piso num vídeo que declara ≥5 cenas com `needs.geo`
 *   ○ INFO   → composição, taxa contra a faixa do acervo, e `needs.midia` apontando arquivo ausente
 *
 * O alerta é EDITORIAL: informa e sai 0. `--duro` o promove a reprovação. Gate que nasce vermelho e
 * fica semanas assim é gate que alguém desliga.
 *
 * Uso: node scripts/qc-espelho-midia.mjs <proj> [--duro] [--piso=25] [--json]
 */
import { readFileSync, existsSync } from "node:fs";
import { join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const argv = process.argv.slice(2);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
const JSON_OUT = argv.includes("--json");
const DURO = argv.includes("--duro");
const PISO = +opt("piso", "25");
const GEO_MIN = +opt("geo-min", "5");
const proj = argv.find((a) => !a.startsWith("--"));
if (!proj) { console.error("uso: qc-espelho-midia.mjs <proj> [--duro] [--piso=25] [--json]"); process.exit(2); }
// [porte Régie] a barra invertida do Windows vira "/" antes do teste: "out\meu-video" é o mesmo
// projeto que "out/meu-video", e sem isto virava out/out\meu-video — "nenhum espelho", exit 2.
const projN = proj.replace(/\\/g, "/");
const D = projN.startsWith("out/") ? join(RAIZ, projN) : join(RAIZ, "out", projN);

const esp = ["espelho.json", "_espelho.json"].map((f) => join(D, f)).find(existsSync);
if (!esp) { console.error(`✗ nenhum espelho em ${D} — nada a medir`); process.exit(2); }
const segs = (() => { const j = JSON.parse(readFileSync(esp, "utf8")); return j.segmentos || j.cenas || (Array.isArray(j) ? j : []); })();
if (!segs.length) { console.error(`✗ espelho sem cenas: ${esp}`); process.exit(2); }

/* ── vocabulário ────────────────────────────────────────────────────────────────────────────────
 * FORA do denominador: o Bôco em câmera e a mobília de navegação. A "mídia real" deles é a própria
 * gravação; contá-los afoga a razão (o mesmo recorte do `qc-direcao-real`, de propósito).
 * REGISTRO: os valores vivos de `midia` no acervo são exatamente `animacao|footage|foto|drone`.     */
const FORA = new Set(["apresentador", "titulo-topico", "navegacao", "nenhum"]);
const MIDIA_REAL = new Set(["footage", "foto", "drone"]);

const listaDe = (v) => (Array.isArray(v) ? v.filter((x) => String(x).trim()) : []);
const prosaDe = (v) => String(v ?? "").trim();
/* A cena EXIGE registro real quando declara isso por qualquer um dos três caminhos vivos do schema. */
const pedeReal = (s) =>
  MIDIA_REAL.has(String(s.midia)) || listaDe(s?.needs?.midia).length > 0 || listaDe(s.midia_termos).length > 0;
/* …e é MUDA quando pede e não diz o que procurar. `needs.midia` NÃO conta: ele é a grafia canônica
 * de onde o asset vai morar, não um termo de busca (ver o cabeçalho). */
const ehMuda = (s) => listaDe(s.midia_termos).length === 0 && !prosaDe(s.midia_necessidade);

/* ── COBERTURA É O QUE VAI SER PRODUZIDO, NÃO O QUE JÁ ESTÁ NA TELA ────────────────────────────
 * O denominador tem de ser a cena que alguém ainda vai desenhar — é dela que se pergunta "pediu
 * registro real ou virou diagrama?". Cena `anima:false` não vai à arte: no vídeo do zero ela é o
 * rosto do apresentador (e o `modo` já a tirava daqui pelo FORA); no compilado de edição sobre a
 * edição ela é o MASTER dos editores, com footage real, print de matéria e infográfico já na tela,
 * e o espelho dessas janelas não pede nada de propósito (pedir abriria caça para vídeo pronto).
 *
 * Contá-las inflava o denominador com trabalho que não existe. Medido em 11/set/2026 sobre os 16
 * espelhos no disco: **15 não mudam em um único ponto percentual** — porque neles `anima:false` é
 * sempre apresentador, que o FORA já excluía. O 16º é o `compilado-poder-militar-china-eua`, cuja
 * taxa sai de 13,7% (alerta de "virou diagrama") para 32,6% — acima do piso, que é a leitura certa:
 * 29 das 98 cenas NOVAS pedem registro real, e as outras 160 janelas são master que já o entrega.
 * O mesmo critério que o `qc-modo-needs.mjs` usa desde 05/ago (`if (!c.anima) continue`).        */
const cobertura = segs.filter((s) => !FORA.has(s.modo || "") && s.anima !== false);
const pedem = cobertura.filter(pedeReal);
const mudas = pedem.filter(ehMuda);
const geoDecl = segs.filter((s) => listaDe(s?.needs?.geo).length > 0);
const pct = (a, b) => (b ? +((a / b) * 100).toFixed(1) : 0);
const taxa = pct(pedem.length, cobertura.length);

const histo = {};
for (const s of segs) histo[s.modo || "?"] = (histo[s.modo || "?"] || 0) + 1;

/* ── `needs.midia` apontando arquivo ausente ────────────────────────────────────────────────────
 * INFO, nunca falha: mídia bruta sai do disco de propósito depois da entrega (REND-18), e acusar
 * faxina foi o alarme falso que o gate irmão produziu DUAS vezes calibrando a mesma coisa. Aqui só
 * conto e mostro — quem tem contexto para desempatar é quem está com o projeto aberto.            */
const ausentes = [];
let citados = 0;
for (const s of cobertura) {
  for (const p of listaDe(s?.needs?.midia)) {
    citados++;
    const abs = p.startsWith("assets/") ? join(RAIZ, p) : join(D, p.replace(/^\.\.\//, ""));
    if (!existsSync(abs)) ausentes.push({ id: s.id, path: p });
  }
}

/* ── vereditos ──────────────────────────────────────────────────────────────────────────────── */
const falhas = mudas.length ? [{ tipo: "pedido-mudo", n: mudas.length, de: pedem.length }] : [];
const alertas = [];
if (geoDecl.length >= GEO_MIN && taxa < PISO)
  alertas.push({ tipo: "taxa-de-pedido-baixa", valor: taxa, piso: PISO, geo: geoDecl.length });

if (JSON_OUT) {
  console.log(JSON.stringify({
    proj: basename(D), segmentos: segs.length, cobertura: cobertura.length,
    pedemRegistro: pedem.length, taxa, piso: PISO, modos: histo,
    mudas: mudas.map((s) => ({ id: s.id, modo: s.modo, midia: s.midia })),
    geoDeclarado: geoDecl.length, needsMidiaCitados: citados, needsMidiaAusentes: ausentes,
    falhas, alertas, duro: DURO,
  }, null, 1));
} else {
  console.log(`\n══ ESPELHO × MUNDO REAL · ${basename(D)} · ${segs.length} segmentos ══`);
  console.log(`  cobertura (fora o apresentador e a mobília de navegação): ${cobertura.length} cenas`);
  console.log(`  PEDEM registro real: ${pedem.length} = ${taxa}%   (mediana do acervo, 21 espelhos em 02/ago: 44,6%)`);
  console.log(`  faixa medida: 0 (compilado) · 10,9 (el-nino) · 20,5 (paises-baixos) │ 44,6 │ 74,6 (o-acre) · 94,3 (senna) · 100 (oceano-700km)`);
  console.log(`  modos: ${Object.entries(histo).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
  console.log(`  lugar real declarado (needs.geo): ${geoDecl.length} cena(s)`);

  if (mudas.length) {
    console.log(`\n  ✗ ${mudas.length} de ${pedem.length} cena(s) PEDEM registro real e NÃO DIZEM O QUE BUSCAR:`);
    for (const s of mudas.slice(0, 12)) console.log(`      ${s.id}  [${s.modo}]  midia=${s.midia}`);
    if (mudas.length > 12) console.log(`      … +${mudas.length - 12}`);
    console.log(`      A pesquisa recebe "traga footage" sem assunto, sem lugar e sem época.`);
    console.log(`      Preencha \`midia_termos\` (o que procurar) e/ou \`midia_necessidade\` (a prosa do que a cena precisa ver).`);
    console.log(`      \`needs.midia\` NÃO substitui: ele diz ONDE o asset vai morar, não O QUE procurar.`);
    console.log(`      No acervo isto é 0 em 19 de 21 projetos — não é como a casa trabalha.`);
  }
  for (const a of alertas) {
    console.log(`\n  ▲ TAXA DE PEDIDO EM ${a.valor}% — abaixo do piso de ${a.piso}%, num vídeo que declara ${a.geo} cenas de LUGAR REAL.`);
    console.log(`      O espelho é o TETO: a arte não mostra o que ninguém pediu e a pesquisa não caça o que ninguém listou.`);
    console.log(`      Releia a cobertura perguntando, cena a cena: *a âncora NOMEIA algo que existe no mundo?*`);
    console.log(`      Se nomeia, PEÇA a imagem — quem prova que ela não existe é a pesquisa, não o espelho. [ARTE-88] [ARTE-323]`);
    console.log(`      E meça em SEGUNDOS: \`node scripts/qc-piso-real.mjs ${basename(D)}\` — esta taxa conta cenas.`);
  }
  if (ausentes.length) {
    console.log(`\n  ○ ${ausentes.length} de ${citados} caminho(s) em \`needs.midia\` não estão no disco:`);
    for (const m of ausentes.slice(0, 8)) console.log(`      ${m.id}  →  ${m.path}`);
    if (ausentes.length > 8) console.log(`      … +${ausentes.length - 8}`);
    console.log(`      INFO, não falha: pode ser faxina pós-entrega (REND-18) ou asset que nunca chegou.`);
    console.log(`      Quem desempata pelo HTML é \`qc-midia-real.mjs\`; pela direção, \`qc-direcao-real.mjs\`.`);
  }

  const reprova = falhas.length || (DURO && alertas.length);
  console.log(reprova
    ? `\n✗ REPROVADO — ${falhas.length} falha(s)${DURO && alertas.length ? ` + ${alertas.length} alerta(s) sob --duro` : ""}.\n`
    : alertas.length
      ? `\n▲ PASSA COM ${alertas.length} ALERTA(S) — editorial, não contratual. \`--duro\` o torna reprovação.\n`
      : `\n✓ PASS — o espelho pede o mundo real onde ele existe, e diz o que procurar.\n`);
}

process.exitCode = (falhas.length || (DURO && alertas.length)) ? 1 : 0;
