#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-midia-real.mjs (linhas 1-236, commit 4afda12).
// O que mudou: o teste "é caminho ou slug?" aceita "\" do Windows.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// GATE MÍDIA-REAL (PESQ-29) — cruza quantas cenas PEDEM registro real contra quantas o RECEBERAM.
//
// POR QUE ELE EXISTE. Medido no `paises-baixos-mar` (02/ago/2026): 39 cenas de arte, e o vídeo
// inteiro entregue com 3 footages e 2 fotos — 7% de mundo real, 93% de desenho. O Mateus viu na
// tela; nenhum número viu. Os gates da casa não podiam ver, e a razão é precisa:
//
//   • `qc-src-existe` confere `src` que EXISTE no HTML — e desde 22/jul ele IGNORA comentário, de
//     propósito (o template de citação documenta o preenchimento em prosa e o gate reprovava o
//     certo). Só que a caça falhou de um jeito que ele não alcança: as 4 cenas cujo footage nunca
//     chegou (s37 moinhos · s43 tulipas · s65 Maeslantkering · s83 Benthemplein) viraram
//     `/* <!-- INSET FOOTAGE: _media/footage/…/x.mp4` — COMENTÁRIO — e foram desenhadas à mão.
//     Rodado nesse projeto, o `qc-src-existe` devolve "1 src quebrado" (uma bandeira) e cala sobre
//     as 4. O `<video>` não existe, então não há src pra quebrar: o defeito é a AUSÊNCIA.
//   • `qc-cena`, `qc-carga`, `check-overlap`, `qc-tamanho` julgam a cena que ESTÁ lá. Uma cena
//     100% desenhada passa em todos — ela é bonita, cabe no palco, não colide. O que ninguém
//     comparava era a cena contra o que o ESPELHO tinha pedido.
//
// É a família do morto-silencioso: o log diz sucesso, a pauta diz "pendente", e o vídeo sai. Este
// gate é a pergunta que faltava — *"o espelho pediu mundo real em quantas cenas, e quantas
// receberam?"* — e ele responde do disco, sem inferência.
//
// COMO ELE DISTINGUE FALHA DE FAXINA (senão vira alarme falso, que é bug de prioridade alta). Mídia
// bruta é apagada do local depois da entrega, de propósito (REND-18) — então "arquivo ausente" NÃO
// é falha por si só. Quem desempata é o HTML, que fica:
//   • HTML tem `src` VIVO apontando pro `_media/` e o arquivo sumiu → faxina pós-entrega. Informa.
//   • HTML NUNCA teve `src` vivo, e a cena pedia → a mídia nunca chegou e a cena virou desenho
//     em silêncio. REPROVA.
//   • O caminho `_media/…` só aparece DENTRO de comentário → é a assinatura do rebaixamento
//     silencioso, com promessa escrita e nada entregue. REPROVA.
//
// Uso: node scripts/qc-midia-real.mjs out/<proj> [--estrito] [--json]
//   --estrito  reprova TAMBÉM quando a razão de mídia real do vídeo cai abaixo do piso (§4)
// Saída: 0 = passou · 1 = mediu e reprovou · 2 = não mediu (indefinido NÃO reprova — ver qc-cena)
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";

const args = process.argv.slice(2);
const ESTRITO = args.includes("--estrito");
const JSON_OUT = args.includes("--json");
let proj = args.find((a) => !a.startsWith("--"));
if (!proj) { console.error("uso: qc-midia-real.mjs out/<proj> | <slug>  [--estrito] [--json]"); process.exit(2); }
/* ⚠️ ACEITA CAMINHO **OU** SLUG (08/ago/2026). Este gate espera `out/<proj>`; o `qc-procedencia`,
 * ao lado, espera o SLUG puro. Chamar com o formato errado não devolve "argumento inválido":
 * devolve "✗ sem <x>/espelho.json — nada a medir", que **parece um veredito sobre o projeto**.
 * Aconteceu num projeto que TINHA espelho, e o "nada a medir" entrou num laudo como se fosse
 * medição. Se veio só o slug, prefixa com `out/`. */
// [porte Régie] "\" também é separador (Windows).
if (!/[\\/]/.test(proj) && !existsSync(join(proj, "espelho.json"))) proj = join("out", proj);

const ESPELHO = join(proj, "espelho.json");
const GRAPHICS = join(proj, "graphics");
if (!existsSync(ESPELHO)) { console.error(`✗ sem ${ESPELHO} — nada a medir`); process.exit(2); }
if (!existsSync(GRAPHICS)) { console.error(`✗ sem ${GRAPHICS}/ — projeto sem arte local (entregue e limpo?), nada a medir`); process.exit(2); }

// Modos que NÃO são cena de arte: o Bôco em câmera e os cartões de sistema. Ficam fora da conta
// porque a "mídia real" deles é a própria gravação — contá-los afogaria a razão em 55% de teto.
const NAO_ARTE = new Set(["apresentador", "titulo-topico", "navegacao", "nenhum"]);
// PEDIDO DURO — a definição do modo É "um registro real preenche a tela". Cena assim sem mídia
// não é escolha de direção: é buraco.
const MODO_EXIGE = new Set(["footage", "foto", "drone", "split-footage"]);
// PEDIDO BRANDO — o espelho marcou `midia:"footage"` numa cena de desenho/dados/cinemático: quer
// registro real POR CIMA ou POR BAIXO do desenho. Entra na razão (§4), não reprova sozinho.
const MIDIA_EXIGE = new Set(["footage", "foto", "drone"]);

const RE_SRC = /(?:<(?:img|video|audio|source)[^>]*?\ssrc|data-src)\s*=\s*["']([^"']+)["']/gi;
const RE_MEDIA = /_media\/(?:footage|foto|drone|documento|historico)\//;

let espelho;
try { espelho = JSON.parse(readFileSync(ESPELHO, "utf8")); }
catch (e) { console.error(`✗ espelho ilegível: ${e.message}`); process.exit(2); }

const arte = (espelho.segmentos || []).filter((s) => !NAO_ARTE.has(s.modo));
if (!arte.length) { console.error("✗ espelho sem cena de arte — nada a medir"); process.exit(2); }

const cenas = [];
for (const s of arte) {
  const pedidos = (s.needs && s.needs.midia) || [];
  const duro = pedidos.length > 0 || MODO_EXIGE.has(s.modo);
  const brando = !duro && MIDIA_EXIGE.has(s.midia);
  const html = join(GRAPHICS, `${s.id}.html`);
  const bruto = existsSync(html) ? readFileSync(html, "utf8") : null;
  /**
   * O QUE CONTA COMO "NA TELA" — a pergunta certa não é "está num `src=`?" (08/ago/2026).
   *
   * O `RE_SRC` só enxerga `<img|video|audio|source src>` e `data-src` no HTML ESTÁTICO. Cena que
   * monta o DOM por script fica invisível para ele, e o gate acusa **mídia fantasma numa cena que
   * usa a mídia**. Medido em duas cenas de mapa do `ceuta`, as duas com a foto VISÍVEL no frame:
   *   • `s130-argelia-marrocos` → `foto.setAttributeNS(xlink:href, FOTO); foto.setAttribute("href", FOTO)`
   *   • `s03-mapa-ceuta`        → `g.appendChild(mk("image",{href:"../_media/foto/…"}))`
   * Em ambas o caminho chega por SVG `<image>`, que o regex não conhece — e no `s130` o valor é
   * uma const (`FOTO`), então nem casar o literal dentro do `setAttribute` resolveria.
   *
   * Perseguir cada forma de atribuição é corrida perdida (`href`, `xlink:href`, `style.background`,
   * `new Image().src`, canvas `drawImage`…). A pergunta que responde a todas: **o caminho de
   * `_media/` aparece no CÓDIGO, fora de comentário?** Se aparece, alguma linha o usa; se só existe
   * em comentário, é a promessa escrita que nunca virou tela — que é exatamente o que §3 caça.
   *
   * Comentários removidos: HTML (`<!-- -->`), bloco (`/* *​/`) e linha JS **só quando a linha
   * COMEÇA com `//`** — que é como esta casa escreve cabeçalho documental. Cortar todo `//` até o
   * fim da linha destruiria `http://www.w3.org/1999/xlink`, que é código vivo.
   */
  const vivo = bruto === null ? null : bruto
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
  const naTela = vivo === null ? false
    : ([...vivo.matchAll(RE_SRC)].some((m) => /_media\//.test(m[1])) || RE_MEDIA.test(vivo));
  /**
   * ⚠️ NEM TODO CAMINHO EM COMENTÁRIO É PROMESSA QUEBRADA — dois nomes canônicos são o CONTRÁRIO
   * disso (10/ago/2026, estação ARTE do `quasares-primordiais`).
   *
   * O modo `documento` (M05) tem por ESPECIFICAÇÃO recriar o clipping em HTML/CSS, preservando a
   * identidade da fonte — o `pesquisa-documentos` grava a base como `<cena>-clipping.html` e o
   * print de verificação como `<algo>-prova.png`. Nenhum dos dois vai à tela: o primeiro é o
   * MOLDE que a cena reconstrói, o segundo é a EVIDÊNCIA de que o texto é fiel ao original.
   * Citá-los no cabeçalho é a documentação de procedência que esta casa exige — e era justamente
   * o que §3 estava carimbando de "mídia fantasma".
   *
   * MEDIDO: `s07-o-anuncio-de-julho-de-2026` e `s17-nao-foi-construido-pra-cacar-quasar` reprovaram
   * com o clipping da ESA VISÍVEL no frame (manchete traduzida, grifo word-locked na data, DOI no
   * rodapé). O vídeo tem 6 cenas de documento: o alarme falso pegaria as 6, e mandar refazer cena
   * certa é queimar inferência para piorar o artefato.
   *
   * O recorte é estreito de propósito: vale só para estes dois sufixos. Documento que citar uma
   * FOTO comum em comentário e não a usar continua reprovando, que é o buraco real que §3 caça.
   */
  // o conjunto é só o que é caractere de PATH: em prosa de comentário o caminho vem seguido de
  // vírgula ou ponto ("…-clipping.html, lido em 09/ago"), e engoli-los faz o sufixo nunca casar.
  /* ⚠️ O PONTO NÃO PODIA SAIR DA CLASSE — ele é a extensão (12/ago/2026, `orcas-nao-matam`). A vírgula
   * foi excluída acima e o conserto pareceu completo, mas o comentário promete "vírgula OU ponto" e o
   * ponto seguia entrando: frase que ACABA no caminho ("…a prova em `_media/documento/x-prova.png`.")
   * capturava `x-prova.png.`, o `endsWith` do sufixo falhava e a isenção caía inteira — reprovando a
   * cena certa que a [ARTE-233] existe para poupar. Pontuação terminal se APARA, não se exclui da
   * classe. Mesmo defeito achado no mesmo dia em `qc-direcao-real.mjs`, que não tinha sido varrido. */
  const citados = bruto === null ? []
    : [...bruto.matchAll(/_media\/[A-Za-z0-9._/-]+/g)].map((m) => m[0].replace(/[.,;:!?]+$/, ""))
      /**
       * PASTA não é promessa de tela (10/ago/2026, mesma estação que escreveu a isenção acima).
       *
       * A isenção é um `every`, então bastava UMA menção que não casasse o sufixo para ela cair
       * inteira — e a que caía era o DIRETÓRIO, escrito em prosa no cabeçalho ("a base viva em
       * `_media/documento/`"). Nenhum diretório vira `<img>`: ele não pode ser mídia prometida e
       * não usada, logo não é evidência nem a favor nem contra. Neutro = fora da conta.
       *
       * MEDIDO na `s121-a-fisica-que-a-gente-conhece-nao-da-conta`: os caminhos citados eram
       * `_media/documento/2021-wang-arxiv-prova.png` (casa) e `_media/documento/` (pasta). O
       * segundo reprovava a cena — que estava CERTA, com a prova em disco e a recusa do Fable
       * fundamentada no cabeçalho do HTML. Sem este filtro, o veredito manda refazer arte paga.
       */
      .filter((c) => !c.endsWith("/"));
  // `length > 0` é deliberado: `every` de lista vazia é `true`, e uma cena que citasse SÓ a pasta
  // ganharia a isenção de graça. Sem nenhum ARQUIVO recriável citado, não há o que isentar.
  const soRecriavel = citados.length > 0 && citados.every((c) => /-clipping\.html$|-prova\.png$/.test(c));
  // caminho de mídia citado SÓ em comentário: a promessa escrita que nunca virou tela.
  const soComentario = !naTela && bruto !== null && RE_MEDIA.test(bruto) && !soRecriavel;
  const noDisco = pedidos.filter((p) => existsSync(join(proj, p)));
  cenas.push({ id: s.id, modo: s.modo, midia: s.midia, pedidos, duro, brando, naTela, soComentario, temHtml: bruto !== null, noDisco: noDisco.length, faltamNoDisco: pedidos.filter((p) => !existsSync(join(proj, p))) });
}

const pedemDuro = cenas.filter((c) => c.duro);
const pedemAlgo = cenas.filter((c) => c.duro || c.brando);
const atendidas = cenas.filter((c) => c.naTela);
// A distinção que evita o alarme falso (ver cabeçalho): sem src vivo = nunca chegou; com src vivo
// e arquivo ausente = faxina pós-entrega (REND-18).
const nuncaChegou = pedemDuro.filter((c) => c.temHtml && !c.naTela);
// A mídia fantasma é o SINTOMA de §2 quando a cena já pede duro — listar nos dois lugares dobrava
// a contagem ("8 cenas ficaram sem" onde havia 4, cada uma contada duas vezes). §3 fica só com o
// que §2 não pega: cena de pedido BRANDO que documentou mídia em comentário e não a usou.
const fantasmas = cenas.filter((c) => c.soComentario && !nuncaChegou.includes(c));
const limpasPosEntrega = cenas.filter((c) => c.naTela && c.pedidos.length && c.faltamNoDisco.length);
const semHtml = pedemDuro.filter((c) => !c.temHtml);

/**
 * O DENOMINADOR É O QUE JÁ FOI DESENHADO — senão o §4 contradiz a linha que ele mesmo imprime
 * (10/ago/2026, estação ARTE do `quasares-primordiais`, com a arte a meio caminho).
 *
 * A razão dividia por TODAS as cenas de arte, inclusive as que ainda não têm HTML — logo abaixo da
 * linha "ℹ N cena(s) que pedem mídia ainda sem HTML — arte não desenhada, **fora da conta**". Elas
 * não estavam fora da conta: estavam no denominador, contadas como se tivessem falhado.
 *
 * MEDIDO: 132 cenas de arte, 77 ainda sem HTML. O §4 anunciou "7,6% < 25% · o vídeo é quase todo
 * desenho: confira se a caça de mídia rodou de verdade" — quando das 16 cenas JÁ DESENHADAS que
 * pediam registro real, 10 tinham mídia na tela: **62,5%**, acima da mediana da casa (56,6%). A
 * caça tinha rodado; o que faltava era o Fable desenhar o resto, e isso não é defeito de pesquisa.
 *
 * Cena não desenhada não é cena que virou desenho sem mídia — ela não é nada ainda. Como o §4
 * REPROVA sob `--estrito`, a aritmética inflada condenava todo vídeo auditado no meio da produção.
 */
const arteDesenhada = cenas.filter((c) => c.temHtml);
const pedemAlgoDesenhadas = pedemAlgo.filter((c) => c.temHtml);
const razaoArte = arteDesenhada.length ? (100 * atendidas.length) / arteDesenhada.length : 0;
const razaoPedido = pedemAlgoDesenhadas.length ? (100 * pedemAlgoDesenhadas.filter((c) => c.naTela).length) / pedemAlgoDesenhadas.length : null;
// PISO da razão (§4). Medido em 02/ago nos 8 projetos com espelho + graphics no disco: mediana
// 56,6% de cenas de arte com registro real (ia-fisica 94,9 · simpsons-copa 82,9 ·
// buracos-negros 56,6 · heranca 32,6 · senna 31,4 · paises-baixos-mar 17,9 ·
// compilado-previsoes-jiang 16,0). O piso fica em 25% — abaixo da metade da mediana e abaixo de
// TODOS os projetos entregues sem reclamação. Ele não define o bom: marca o absurdo. E por isso
// só reprova sob `--estrito`: compilado de acervo e vídeo legitimamente conceitual ficam baixos
// sem estarem errados, e alarme que grita à toa ensina a ignorar o alarme.
const PISO = 25;

if (JSON_OUT) {
  console.log(JSON.stringify({ proj, arte: arte.length, pedemDuro: pedemDuro.length, pedemAlgo: pedemAlgo.length, atendidas: atendidas.length, razaoArte: +razaoArte.toFixed(1), razaoPedido: razaoPedido === null ? null : +razaoPedido.toFixed(1), nuncaChegou: nuncaChegou.map((c) => c.id), fantasmas: fantasmas.map((c) => c.id), limpasPosEntrega: limpasPosEntrega.map((c) => c.id) }, null, 1));
}

const p = (...a) => { if (!JSON_OUT) console.log(...a); };
p(`\n═══ MÍDIA REAL · ${basename(proj)} ═══`);
p(`  cenas de arte ............... ${arte.length}   (fora ${(espelho.segmentos || []).length - arte.length} de apresentador/cartão)`);
p(`  PEDEM registro real ......... ${pedemAlgo.length}   (${pedemDuro.length} por needs.midia/modo · ${pedemAlgo.length - pedemDuro.length} por midia:"footage|foto|drone")`);
p(`  TÊM mídia na tela ........... ${atendidas.length}`);
// o denominador vai ESCRITO: razão sem base é número que cada leitor completa do próprio jeito.
p(`  razão de mídia real ......... ${razaoArte.toFixed(1)}% das ${arteDesenhada.length} cenas de arte JÁ DESENHADAS` + (razaoPedido === null ? "" : `   ·   ${razaoPedido.toFixed(1)}% das ${pedemAlgoDesenhadas.length} que pediram e já têm HTML`));
if (arteDesenhada.length < arte.length) p(`  (${arte.length - arteDesenhada.length} de ${arte.length} cenas de arte ainda sem HTML — fora do denominador, a arte não fechou)`);

if (nuncaChegou.length) {
  p(`\n✗ §2 · PEDIU E NUNCA CHEGOU — a cena virou desenho sem ninguém avisar (${nuncaChegou.length}):`);
  for (const c of nuncaChegou) p(`    ${c.id}  [modo:${c.modo}]  ${c.pedidos.join(" ") || "(sem caminho declarado — o modo é que exige)"}${c.soComentario ? "   ← prometida em COMENTÁRIO no HTML" : ""}`);
}
if (fantasmas.length) {
  p(`\n✗ §3 · MÍDIA FANTASMA — caminho prometido SÓ dentro de comentário (${fantasmas.length}):`);
  for (const c of fantasmas) p(`    ${c.id}  [modo:${c.modo}]  → o HTML documenta a mídia e nenhum <video>/<img> a usa`);
}
if (limpasPosEntrega.length) p(`\nℹ §1 · ${limpasPosEntrega.length} cena(s) com mídia na tela e arquivo já fora do disco — faxina pós-entrega (REND-18), não é falha.`);
if (semHtml.length) p(`\nℹ ${semHtml.length} cena(s) que pedem mídia ainda sem HTML — arte não desenhada, fora da conta.`);

const razaoBaixa = razaoArte < PISO;
if (razaoBaixa) p(`\n⚠ §4 · RAZÃO ABAIXO DO PISO — ${razaoArte.toFixed(1)}% < ${PISO}% (mediana da casa: 56,6%). O vídeo é quase todo desenho: confira se a caça de mídia rodou de verdade.${ESTRITO ? " (--estrito: reprova)" : ""}`);

const duro = nuncaChegou.length + fantasmas.length;
if (duro || (ESTRITO && razaoBaixa)) {
  p(`\n✗ mídia-real REPROVADO — ${duro} cena(s) pediram mundo real e ficaram sem${ESTRITO && razaoBaixa ? ` · razão ${razaoArte.toFixed(1)}% < ${PISO}%` : ""}`);
  p(`  Conserto: rode a caça de novo com LEQUE de buscas (OFÍCIO §3b) antes de aceitar "não achei".`);
  process.exit(1);
}
p(`\n✓ mídia-real OK — toda cena que pediu registro real recebeu`);
process.exit(0);
