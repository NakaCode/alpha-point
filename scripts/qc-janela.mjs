#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-janela.mjs (linhas 1-511, commit 4afda12).
// O que mudou: caminho absoluto reconhecido por isAbsolute (C:\ no Windows), e "out\" como prefixo. As dicas que ele imprime citam recarimbar-ancora.mjs, que NÃO veio: se aparecer, reporte NÃO MEDIDO.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * QC-JANELA — o HTML cabe na janela que o espelho reservou, e foi coreografado contra ELA?
 *
 * ── POR QUE EXISTE ──────────────────────────────────────────────────────────────────────────────
 * Medido em 03/ago/2026, na estação QC do `energia-escura`. O portão dizia "41/41 cenas passam os
 * gates duros" e o vídeo tinha **7 cenas dessincronizadas da fala** e **7 declarando duração maior
 * que a janela**. Nenhum gate perguntou, porque todos julgam a cena SOZINHA — abrem o HTML, medem
 * pixel, texto, colisão, e nunca comparam com o `espelho.json`. A cena estava linda e no lugar
 * errado, e isso é invisível para quem só olha a cena.
 *
 * O que aconteceu: a transcrição foi refeita e a fala inteira andou −16,29 s. O espelho foi
 * ressincronizado, mas **não uniformemente** — algumas cenas deslocaram −11,6 s, outras −22,8 s. Os
 * HTMLs, feitos dias antes, continuaram coreografados contra a ancoragem velha. Casos medidos:
 *
 *   c38  arte 6,36 s atrasada  → abre com 6,3 s de tela vazia enquanto a narração já disparou a citação
 *   c26b arte 4,64 s atrasada  → 3,7 s de quadro vazio em cima do beat principal
 *   c23  `__duracao` 15 × janela 10,282 → o beat da TRAVA do ponteiro, que é METADE da tese, nunca vai ao ar
 *   c11  `__duracao` 16 × janela 11,023 → 4,98 s de animação desenhada para ninguém
 *
 * ── AS DUAS PERGUNTAS ───────────────────────────────────────────────────────────────────────────
 *   A. DURAÇÃO  — `window.__duracao` bate com a `dur` que o espelho reservou?
 *      Sobra = animação que o compositor corta (ou que invade a janela do apresentador). Falta =
 *      cena que acaba antes da fala dela.
 *   B. ANCORAGEM — o cabeçalho declara o `inSec` contra o qual a arte foi coreografada
 *      (`Word-lock (−1338)`, `inSec 1338` — padrão da casa). Se ele não é o `inSec` VIGENTE, a arte
 *      está no relógio de um espelho que não existe mais, e todo beat erra pela diferença.
 *
 * A pergunta B é a que dói: ela não custa Chrome, não custa inferência, e teria pego as 7 cenas
 * antes de o qc-visual gastar 500 mil tokens para achar 4 delas por medição de beat.
 *
 * ⚠️ ANCORAGEM DIFERENTE NEM SEMPRE É DEFEITO. Quando o decupador troca de TAKE, o `inSec` muda mas
 * a FALA da janela é a mesma — a arte continua certa. Por isso o gate compara o texto das duas
 * janelas: similaridade alta = troca de take (avisa e não reprova), similaridade baixa = a cena
 * está sobre outra fala (reprova). Sem esse desempate o gate acusaria 20 cenas onde só 7 doem.
 *
 * Uso: node scripts/qc-janela.mjs <proj> [--tol-dur=0.15] [--tol-in=0.4] [--sim=0.75] [--json]
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename, isAbsolute } from "node:path";
import { wordsDoEspelho, todosOsWords, janelaTxt } from "./lib/words-do-espelho.mjs";

const argv = process.argv.slice(2);
const flag = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : d; };
const proj = argv.find((a) => !a.startsWith("--"));
if (!proj) { console.error("uso: qc-janela.mjs <proj> [--tol-dur=0.15] [--tol-in=0.4] [--sim=0.75] [--json]"); process.exit(2); }

const TOL_DUR = +flag("tol-dur", "0.15");
const TOL_IN = +flag("tol-in", "0.4");
const SIM_MIN = +flag("sim", "0.75");
const JSON_OUT = argv.includes("--json");

/* Aceita `slug`, `out/slug` e caminho ABSOLUTO. Sem o teste de absoluto, chamar o gate de fora do
 * repo (ou de um worktree, onde ele nem existe) montava `out/<caminho absoluto>` e ele reclamava de
 * um espelho que ninguém pediu — erro que parece "projeto sem espelho" e é só concatenação. */
// [porte Régie] "absoluto" no Windows é "C:\..." e o separador pode ser "\": isAbsolute e a
// classe [\/] cobrem os dois sistemas; startsWith("/") só cobria Linux e Mac.
const D = isAbsolute(proj) || /^out[\\/]/.test(proj) ? proj : join("out", proj);
const G = join(D, "graphics");
if (!existsSync(join(D, "espelho.json"))) { console.error(`✗ sem ${D}/espelho.json — nada a comparar`); process.exit(2); }
if (!existsSync(G)) { console.error(`✗ sem ${G}`); process.exit(2); }

const esp = JSON.parse(readFileSync(join(D, "espelho.json"), "utf8"));
const segs = esp.segmentos || esp.cenas || [];
const byId = Object.fromEntries(segs.map((s) => [s.id, s]));

/* O gap REAL de um card de título é declarado pelo decupador no `_cortes.json` (span classe `titulo`
 * + `gapSec`) — o mecanismo canônico da FIN-06/FIN-17. Casa pelo inSec da cena cair dentro do span
 * do corte; sem o arquivo (ou sem casar), o chamador usa o padrão de 3s. */
const CORTES = (() => {
  try {
    const raw = JSON.parse(readFileSync(join(D, "_cortes.json"), "utf8"));
    const arr = Array.isArray(raw) ? raw : (raw.cortes || raw.segmentos || []);
    return arr.filter((c) => (c.classe || c.tipo) === "titulo");
  } catch { return []; }
})();
const gapDoCorte = (s) => {
  const inSec = s.inSec ?? s.timestamps?.inSec;
  if (inSec == null) return null;
  const c = CORTES.find((c) => inSec >= c.ini - 1 && inSec <= c.fim + 1);
  return c?.gapSec ?? null;
};

/* TODOS os cortes (não só os de título) — para medir o que cai DENTRO da janela de uma cena.
 *
 * ⚠️ [ARTE-97] A `dur` DO ESPELHO É BRUTA E A CENA VIVE EM TEMPO LIMPO. Quando há corte dentro da
 * própria janela, os dois números divergem, e o que vai ao ar é o LIMPO: a finalização não emenda o
 * clipe por dentro (`compor-base-youtube.mjs` põe a cena por setpts+overlay, sem trim interno), então
 * a parte que excede a janela limpa é cauda que ninguém vê. Medido no `orcas-nao-matam` em 05/ago:
 * 18 das 28 cenas de arte têm corte interno, e a `c27b` diverge em 43,5s (95,28 bruta × 51,74 limpa).
 *
 * Este gate cobrava a BRUTA e por isso REPROVAVA a cena consertada conforme a lei. As duas convenções
 * convivem no acervo (a bruta é a ARTE-90, revogada em 01/ago), então aceito as duas e digo qual é a
 * preferida — reprovar a bruta em bloco encheria de vermelho todo projeto anterior à revogação, que é
 * exatamente o erro que este arquivo já cometeu uma vez ao somar as durs dos `_mergedInto`. */
const TODOS_CORTES = (() => {
  try {
    const raw = JSON.parse(readFileSync(join(D, "_cortes.json"), "utf8"));
    const arr = Array.isArray(raw) ? raw : (raw.cortes || raw.segmentos || []);
    return arr.map((c) => ({ ini: +c.ini, fim: +c.fim })).filter((c) => Number.isFinite(c.ini) && Number.isFinite(c.fim));
  } catch { return []; }
})();
const janelaLimpa = (s) => {
  /* ⚠️ SÓ HÁ O QUE DESCONTAR SE O ESPELHO ESTIVER EM TEMPO BRUTO. Desde 06/ago o espelho nasce em
   * tempo FINAL — o ripple de `_cortes.json` JÁ está aplicado no arquivo — e descontá-lo aqui é
   * aplicá-lo duas vezes, a mesma família da [FIN-130]. Medido em 08/ago no `galaxia-arco-flecha`:
   * a `s01` (abertura, 15,2s, um corte de 15,20s que no relógio bruto ficava ANTES dela) foi
   * acusada de "o composto exibe 0s" — a cena de abertura inteira declarada inexistente. O relógio
   * é o mesmo que o desempate usa, então a decisão é medida, não presumida. */
  if (relogio.arquivo && relogio.arquivo !== "words.json") return null;
  const ini = s.inSec ?? s.timestamps?.inSec, dur = s.dur ?? s.durSec;
  if (ini == null || dur == null) return null;
  let dentro = 0;
  for (const c of TODOS_CORTES) {
    const ov = Math.min(ini + dur, c.fim) - Math.max(ini, c.ini);
    if (ov > 0.02) dentro += ov;
  }
  return dentro > 0.05 ? +(dur - dentro).toFixed(3) : null;   // null = não há corte dentro; bruta == limpa
};

/* Cena FUNDIDA não recebe tratamento aqui, e isso é deliberado. A [ARTE-102] manda o diretor-de-arte
 * gravar a fusão no espelho, com a `dur` da MÃE já valendo a janela inteira do run — então o espelho
 * conforme já entrega a janela certa e este gate não precisa somar nada. Tentei somar as durs dos
 * `_mergedInto` em 03/ago e o resultado ensina: nos dois projetos CONFORMES (mamute-de-volta,
 * galaxia-arco-flecha) a soma virou CONTAGEM DUPLA e inventou 52 reprovações de "janela sem cena";
 * o único projeto onde ela "acertava" era o orcas-nao-matam, justamente porque ele estava FORA do
 * contrato (c30 com dur=23.04 cobrindo só o 1º beat de um run de 55.22). Quem mede fusão é o
 * `qc-fusao-espelho`, que reprova a mãe e a conserta com `--aplicar`. Relaxar a régua daqui
 * mascararia exatamente o defeito que aquele gate existe para pegar. */

/* Fala real, para o desempate take × dessincronia.
 *
 * ⚠️ O DESEMPATE SÓ FUNCIONA NO RELÓGIO DO ESPELHO. Esta linha era `["words.json","words-limpo.json"]`
 * e pegava o primeiro que existisse — o BRUTO. Num projeto re-espelhado em tempo FINAL as duas janelas
 * comparadas (`fala(inSec)` e `fala(inSec+desloc)`) caem sobre outro trecho da gravação, a similaridade
 * desaba, e o gate reprova por ANCORAGEM cenas cuja fala não mudou uma palavra.
 * Medido em 08/ago no `galaxia-arco-flecha`: espelho 0→587,13s contra `words.json` 10,22→681,52s —
 * 47 cenas acusadas com "a fala da janela só bate 0%", laudo que manda re-ancorar o vídeo inteiro.
 * Falso positivo em massa custa o dobro: paga agente para consertar arte certa e ensina a estação a
 * ignorar o gate. Quem escolhe o arquivo agora é a MEDIDA (`scripts/lib/words-do-espelho.mjs`). */
const relogio = wordsDoEspelho(D, segs.length ? Math.max(...segs.map((s) => (s.inSec ?? 0) + (s.dur ?? 0))) : 0);
const words = relogio.words;
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
const fala = (ini, dur) => norm(words.filter((x) => { const t = x.start ?? x.s; return t >= ini && t < ini + dur; }).map((x) => x.word ?? x.text ?? x.w).join(" "));
const jaccard = (a, b) => { const A = new Set(a.split(" ").filter(Boolean)), B = new Set(b.split(" ").filter(Boolean)); if (!A.size && !B.size) return 1; let i = 0; for (const x of A) if (B.has(x)) i++; return +(i / (A.size + B.size - i)).toFixed(2); };

/* A âncora declarada. O padrão da casa é `Word-lock (−1338)` — o menos que também aparece é o
 * MENOS UNICODE (−, U+2212), não o hífen ASCII: aceitar só `-` deixava o gate cego no formato real.
 * `inSec 1338` no sumário é a segunda forma. Só o CABEÇALHO conta (primeiras linhas), senão qualquer
 * número solto do corpo do script vira falso positivo.
 *
 * ⚠️ O DECIMAL DA CASA É VÍRGULA — e aceitar só o ponto TRUNCA a âncora em silêncio [ARTE-253].
 *
 * Este estúdio escreve o cabeçalho em PT-BR, então a cena grava `inSec 733,60 · dur 16,028`. Com
 * `[0-9]+(?:\.[0-9]+)?` o regex casava só `733`, e `parseFloat("733")` devolvia uma âncora 0,6s
 * menor que a real. Como TOL_IN é 0,4, esses 0,6 bastavam para a cena PERDER a isenção do `emDia`
 * ("quem declara a âncora vigente está em dia") e cair no ramo do consenso — que lhe carimbava o
 * deslocamento inteiro da turma.
 *
 * Medido em 13/ago/2026, `orcas-nao-matam/c28` (mapa do Estreito de Gibraltar): o laudo acusou
 * "arte ATRASADA 144.84s — SUBTRAIA 144.84s dos tempos do renderAt", e a aritmética fecha exata,
 * (733 − 733,6) − 144,237 = −144,84. A cena estava CERTA: o word-lock dela cita "2025,"(0,88),
 * "Espanha,"(9,26), "Portugal"(9,87) e "leme"(14,24), que é palavra por palavra a fala vigente da
 * janela; os dois shots confirmam a câmera pousando no estreito com o rótulo no lugar.
 *
 * O perigo não é o alarme falso, é a INSTRUÇÃO que ele emite: subtrair 144,84s de uma cena de
 * 16s joga todo o renderAt para tempo negativo — o conserto destruiria arte sã, e nesta faixa
 * (invenção) o refazer custa a cota mais escassa da casa. *Gate que mede errado não fica neutro:
 * ele manda estragar o que está certo.* */
/**
 * ⚠️ O PARÊNTESE NÃO FECHA LOGO DEPOIS DO NÚMERO — e exigir isso derrubava o gate no fallback.
 *
 * Desde que um projeto pode ter DOIS relógios, o editor-de-arte carimba qual deles usou:
 * `Word-lock (−333.197 · relógio FINAL, words-final.json)`. O `\)` colado ao número não casa com
 * isso, e o gate descia para o segundo padrão — que aceita qualquer `inSec N` do cabeçalho,
 * INCLUSIVE a menção a OUTRA cena.
 *
 * Medido em 13/ago/2026, `dentro-do-sol`: 10 das 121 cenas escrevem o formato qualificado. Em 8 o
 * fallback acertava por coincidência (o cabeçalho repetia o mesmo número adiante) e em 2 errava —
 * na `s46-temperatura-e-pressao` o parágrafo explica por que o painel direito é DENSIDADE e não
 * pressão, citando «a s31 (inSec 221.6)» como a cena que já tem a pressão. O gate leu 221,6 como a
 * âncora da s46 (a real é 333,197) e emitiu "arte ATRASADA 284.31s — SUBTRAIA 284.31s dos tempos
 * do renderAt". A cena estava certa: a fala de `words-final.json` na janela 333,197→345,297 é
 * palavra por palavra a âncora do espelho. Seguir a instrução teria destruído uma cena sã — e os
 * 284,31s são a soma dos cortes, o que faria o erro parecer um problema de relógio do projeto.
 *
 * Dois consertos, e o segundo importa tanto quanto o primeiro:
 *   1. o número do Word-lock é lido sem exigir o fecha-parêntese colado (o qualificador é livre);
 *   2. o fallback `inSec N` IGNORA menção a outra cena — `s31 (inSec 221.6)` é citação, não
 *      carimbo. *Menção não é estado*, a mesma armadilha que já contou "FALTA" no conceito-visual.
 */
const CABECALHO = 4000;
const declarado = (html) => {
  const cab = html.slice(0, CABECALHO);
  const wl = cab.match(/[Ww]ord-?lock\s*\(\s*[-−–]\s*([0-9]+(?:[.,][0-9]+)?)/);
  if (wl) return parseFloat(wl[1].replace(",", "."));
  for (const m of cab.matchAll(/\binSec\s+([0-9]+(?:[.,][0-9]+)?)/gi)) {
    const antes = cab.slice(Math.max(0, m.index - 40), m.index);
    if (/\bs\d+[a-z]?\b[^.]{0,12}$/i.test(antes)) continue;   // «a s31 (inSec 221.6)» = outra cena
    return parseFloat(m[1].replace(",", "."));
  }
  return null;
};

/**
 * ⚠️ QUEM MANDA É A **ÚLTIMA** ATRIBUIÇÃO, NÃO A PRIMEIRA — e este gate lia a primeira [ARTE-238].
 *
 * `String.match` sem `/g` devolve a primeira ocorrência. Isso basta enquanto o HTML atribui
 * `window.__duracao` uma vez só; quando atribui duas, o gate e o navegador passam a ler valores
 * DIFERENTES do mesmo arquivo — e o gate lê o certo, que é o pior dos casos, porque aprova.
 *
 * Medido em 12/ago/2026, `especies-humanas/s29-genesvivostibeteedefesac`: a readaptação escreveu
 * `window.__duracao=11.44` (a janela nova) e deixou viva a linha velha `window.__duracao=DUR`
 * (=81.74) logo abaixo. O gate lia 11,44 e aprovava; o Chrome executava as duas em ordem e
 * renderizaria **81,74 s** — 7× a janela, num clipe que entra num vídeo já montado.
 *
 * Agora: varre TODAS as atribuições, resolve cada uma (número ou identificador), fica com a
 * última — e denuncia a duplicata, que é sempre defeito de edição, mesmo quando os dois valores
 * por acaso coincidem.
 *
 * ⚠️ MAS O COMENTÁRIO NÃO É CÓDIGO — e a varredura crua não sabia disso (14/ago/2026,
 * `nilo-nao-secou/10-dados`). O cabeçalho da cena DOCUMENTA a janela na prosa
 * (`inSec 235.333 (BRUTO) · dur 53.1 · window.__duracao = 53.1`), dentro de `<!-- -->`. A regex
 * casava com a menção e o gate acusava DUPLA ATRIBUIÇÃO numa cena com uma atribuição só —
 * mandando "remover a linha velha" que não existe. Mesma família do `qc-hex`, que reprova por
 * `#vig` citado entre crases no cabeçalho: **gate que lê comentário como código condena a
 * documentação da cena**, e o artista aprende a não documentar. Comentário HTML sai antes de varrer.
 */
const semComentariosHtml = (html) => html.replace(/<!--[\s\S]*?-->/g, "");

const duracaoDetalhe = (html) => {
  const achados = [];
  const codigo = semComentariosHtml(html);   // o mesmo texto vale para achar o identificador
  for (const m of codigo.matchAll(/window\.__duracao\s*=\s*([0-9]+(?:\.[0-9]+)?|[A-Za-z_$][\w$]*)/g)) {
    const bruto = m[1];
    if (/^[0-9]/.test(bruto)) { achados.push({ bruto, valor: parseFloat(bruto) }); continue; }
    const v = codigo.match(new RegExp(`(?:const|let|var)\\s+${bruto}\\s*=\\s*([0-9]+(?:\\.[0-9]+)?)`));
    achados.push({ bruto, valor: v ? parseFloat(v[1]) : null });
  }
  if (!achados.length) return { valor: null, achados };
  return { valor: achados[achados.length - 1].valor, achados };   // a que o JS executa por último
};

const duracao = (html) => duracaoDetalhe(html).valor;

/**
 * ⚠️ O RELÓGIO INTEIRO PODE TER MUDADO — E ISSO NÃO É DEFEITO DE CENA.
 *
 * Primeira versão deste gate acusou 29 de 41 cenas do `energia-escura`; só 7 doíam. O erro era
 * conceitual: quando a transcrição é refeita, a ORIGEM do relógio anda e TODA cena passa a declarar
 * um `inSec` maior pela mesma quantidade. Comparar o número cru declarado com o número cru vigente
 * mede a mudança de origem, não o desalinhamento da arte — e um gate que acusa o vídeo inteiro
 * ensina a ignorá-lo, que é o pior estrago que um gate faz [ARTE-77].
 *
 * O consenso é a régua: a MEDIANA dos deslocamentos é quanto o relógio andou. O que reprova é o
 * DESVIO de cada cena em relação a esse consenso — a cena que não acompanhou a turma. Medido no
 * `energia-escura`: mediana 16,29 s (o relógio), e os desvios reproduziram exatamente a defasagem
 * que o qc-visual achou medindo beat a beat (c25 −3,41 × −3,48 medido · c26b −4,65 × −4,70 ·
 * c36 −1,84 × −1,89 · c38 −6,36 × −6,4). Quatro confirmações independentes, sem gastar inferência.
 */
/**
 * ⚠️ QUEM JÁ DECLARA A ÂNCORA VIGENTE ESTÁ EM DIA — E NÃO ENTRA NO CONSENSO.
 *
 * Esta regra nasceu de o gate se virar contra o próprio conserto (03/ago, no meio do lote do
 * `energia-escura`). As três primeiras cenas voltaram do editor-de-arte re-ancoradas E com o
 * cabeçalho atualizado — passaram a declarar exatamente o `inSec` vigente, isto é, deslocamento
 * ZERO. Como a mediana ainda era 15,68 (as outras 29 seguiam com o comentário velho), o gate leu as
 * três recém-consertadas como "atrasadas 15,68 s" e mandou consertar de novo o que acabara de ficar
 * pronto. Um gate que pune o conserto é pior que gate nenhum: ele desfaz trabalho pago.
 *
 * Duas correções, e as duas são sobre o mesmo engano — tratar "comentário velho" como sinônimo de
 * "arte errada":
 *   1. `declarado == inSec` é o estado CORRETO por definição. Nunca acusa, e sai da conta.
 *   2. O consenso se mede só entre as DESATUALIZADAS — senão as já consertadas puxam a mediana e o
 *      resultado oscila conforme o lote avança.
 */
const brutos = [];
for (const f of readdirSync(G).filter((f) => f.endsWith(".html") && !f.startsWith("_") && !f.startsWith("."))) {
  const s = byId[basename(f, ".html")]; if (!s) continue;
  const a = declarado(readFileSync(join(G, f), "utf8"));
  if (a == null) continue;
  const d = a - s.inSec;
  if (Math.abs(d) > TOL_IN) brutos.push(d);        // só as que ainda apontam para o relógio antigo
}
brutos.sort((x, y) => x - y);
const RELOGIO = brutos.length ? +brutos[Math.floor(brutos.length / 2)].toFixed(3) : 0;

/* ── EM QUAL RELÓGIO A ARTE FOI COREOGRAFADA? ────────────────────────────────────────────────────
 * O `RELOGIO` acima é uma MEDIANA, e o desempate abaixo a usava como se o deslocamento fosse
 * uniforme — "a fala que começava em `a` hoje começa em `a − RELOGIO`". Entre dois relógios de
 * verdade isso é falso por construção: o ripple dos cortes é CUMULATIVO, então cada cena desloca
 * mais que a anterior. Medido em 08/ago no `galaxia-arco-flecha` (arte no LIMPO, espelho no FINAL):
 * o deslocamento vai de 17,06s na `s01` a 76,83s na `s85`, contra uma mediana de 71,73s. A `s01`
 * erra por 55s — e o desempate, procurando a fala 55s adiante, acha outro trecho do vídeo, devolve
 * 0% e reprova a cena. Foram 47 cenas assim, num laudo que mandava re-ancorar o vídeo inteiro.
 *
 * O conserto é não estimar: cada janela é lida NO SEU PRÓPRIO relógio. Qual é o relógio da arte se
 * descobre pela medida — o candidato do disco que faz as janelas declaradas baterem com as vigentes.
 * Com ele, as mesmas 47 cenas medem 20 com fala IDÊNTICA e 34 acima de 85%: a arte estava certa. */
const paresAncora = [];
for (const f of readdirSync(G).filter((f) => f.endsWith(".html") && !f.startsWith("_") && !f.startsWith("."))) {
  const s = byId[basename(f, ".html")]; if (!s || s.dur == null) continue;
  const a = declarado(readFileSync(join(G, f), "utf8"));
  if (a != null && Math.abs(a - s.inSec) > TOL_IN) paresAncora.push({ a, inSec: s.inSec, dur: s.dur });
}
const falaEm = (w, ini, dur) => norm(w.filter((x) => { const t = x.start ?? x.s; return t >= ini && t < ini + dur; }).map((x) => x.word ?? x.text ?? x.w).join(" "));
const aderencia = (w) => paresAncora.length
  ? paresAncora.reduce((acc, p) => acc + jaccard(falaEm(w, p.a, p.dur), fala(p.inSec, p.dur)), 0) / paresAncora.length
  : 0;
const candArte = todosOsWords(D).map((c) => ({ ...c, aderencia: +aderencia(c.words).toFixed(3) }))
  .sort((x, y) => y.aderencia - x.aderencia);
/* Sem aderência mínima não há relógio da arte identificável (arte realmente dessincronizada, ou
 * cabeçalhos sem âncora): cai no comportamento antigo, que ao menos não inventa um relógio. */
const relogioArte = candArte[0] && candArte[0].aderencia >= 0.5 ? candArte[0] : null;

const erros = [], avisos = [], oks = [];
for (const f of readdirSync(G).filter((f) => f.endsWith(".html") && !f.startsWith("_") && !f.startsWith(".")).sort()) {
  const id = basename(f, ".html");
  const s = byId[id];
  if (!s) { avisos.push({ cena: id, tipo: "sem-segmento", msg: "HTML sem segmento no espelho — órfão ou renomeado" }); continue; }
  const html = readFileSync(join(G, f), "utf8");
  const dur = s.dur ?? s.durSec;
  const det = duracaoDetalhe(html);
  const d = det.valor, a = declarado(html);
  let limpo = true;

  if (d == null) avisos.push({ cena: id, tipo: "duracao-ilegivel", msg: "não consegui ler window.__duracao" });
  /* Duplicata de atribuição é defeito de EDIÇÃO, e denuncia-se mesmo quando os valores coincidem:
   * hoje é inofensiva, amanhã alguém edita uma das duas linhas e o arquivo passa a mentir [ARTE-238]. */
  if (det.achados.length > 1) {
    limpo = false;
    const vals = det.achados.map((x) => `${x.bruto}${/^[0-9]/.test(x.bruto) ? "" : `(=${x.valor ?? "?"})`}`).join(" → ");
    erros.push({ cena: id, tipo: "duracao-atribuida-duas-vezes",
      msg: `window.__duracao atribuído ${det.achados.length}× no mesmo arquivo (${vals}) — o navegador obedece a ÚLTIMA (${d}). `
         + `Remova a linha velha em vez de empilhar a nova; enquanto as duas existirem, este gate e o render leem valores diferentes` });
  }
  /* CARD DE TÍTULO tem outra régua — e o gate estava INVERTIDO nela ([ARTE-93], medido no o-acre em
   * 03/ago). O que vai ao ar num `titulo-topico` é o GAP que o XML abre (`gapSec` do _cortes.json,
   * 3s por FIN-17), não o `dur` do espelho, que é só o span da leitura no master. A ARTE-93 manda o
   * clipe ser MAIOR que o gap, com folga: clipe menor que o gap deixa TELA PRETA no resto do buraco
   * (2,1s de preto no paises-baixos-mar, que é a cena-mãe da lei). Comparando com o `dur`, este gate
   * reprovava os dois cards CERTOS deste vídeo (s41 4.15 · s58 3.9) e absolvia o único frágil (s14,
   * 3.0 justo, zero margem) — leitura ao contrário do que a lei manda, e quem obedecesse o laudo
   * reintroduziria o defeito. Agora a régua é o gap: abaixo dele REPROVA, dentro da folga passa. */
  else if (s.modo === "titulo-topico") {
    /* O `gapSec` do `_cortes.json` é uma DECLARAÇÃO do decupador, e ela envelhece: quando o espelho
     * nasce em tempo FINAL, o vão já está MATERIALIZADO no master e a `dur` do card é a sua medida.
     * Onde os dois discordam, vale o artefato. Medido em 08/ago no `galaxia-arco-flecha`: o
     * `_cortes.json` declarava 3s nos quatro cards e os vãos reais eram 3,07 / 3,27 / 4,10 / 3,57 —
     * contra o número velho o `card03` (3,20) passava com folga aparente e levava 0,90s de TELA
     * PRETA ao ar, que é exatamente o defeito da [ARTE-93] que este ramo existe para pegar. */
    const MATERIALIZADO = !!(relogio.arquivo && relogio.arquivo !== "words.json");
    const gap = (MATERIALIZADO ? (s.dur ?? gapDoCorte(s)) : gapDoCorte(s)) ?? 3;
    if (d < gap - 0.02) {
      limpo = false;
      erros.push({ cena: id, tipo: "duracao-card", declarado: d, janela: gap, delta: +(d - gap).toFixed(3),
        msg: `card de título com __duracao ${d} < gap ${gap} — ${(gap - d).toFixed(2)}s de TELA PRETA no fim do buraco que o XML abre (ARTE-93)` });
    } else if (d < gap + 0.3) {
      /* ⚠️ "PEÇA FOLGA" É CONSELHO DE QUANDO O VÃO ERA ABERTO PELO XML — e no vão MATERIALIZADO
       * ele manda invadir a fala. Quando o espelho está em tempo FINAL, o buraco já existe fisicamente
       * dentro do `_master-decupado.mp4` e mede exatamente o que a `dur` diz; um card de ~3,9s sobre
       * um vão de 3,0s não ganha margem nenhuma — põe 0,9s de card por cima da primeira palavra do
       * capítulo seguinte, e com quatro cards são 3,6s de invasão. Medido no `dentro-do-sol` (13/ago):
       * `gapSec` 3,0 nos quatro cortes de título e master de 1198,534s = 1186,534 + 12,000, isto é,
       * 4 × 3,0 já dentro do arquivo. Margem 0,00 aqui é o estado CORRETO, não um defeito a corrigir —
       * e duas passadas de QC seguidas pararam neste aviso sem saber para que lado andar.
       * (Sem materialização o conselho antigo continua valendo: lá o XML abre o buraco e sobra é
       * barata, enquanto falta é preto.) */
      avisos.push({ cena: id, tipo: "card-sem-folga", materializado: MATERIALIZADO,
        msg: MATERIALIZADO
          ? `card de título com __duracao ${d} sobre vão MATERIALIZADO de ${gap}s no master — margem ${(d - gap).toFixed(2)}s é o esperado, NÃO estique. Aqui o buraco é físico: esticar para ~3,9 põe ${(3.9 - gap).toFixed(2)}s de card por cima da fala seguinte. O conselho de folga da ARTE-93 vale para o vão aberto pelo XML, não para este`
          : `card de título com __duracao ${d} contra gap ${gap} — cabe, mas com margem ${(d - gap).toFixed(2)}s: um frame de arredondamento no XML já vira preto. A ARTE-93 pede FOLGA (os irmãos sadios ficam em ~3,9)` });
    } else if (d > gap + 1.5) {
      avisos.push({ cena: id, tipo: "card-folga-larga",
        msg: `card de título com __duracao ${d} contra gap ${gap} — ${(d - gap).toFixed(2)}s de folga; não é defeito (o XML corta no gap), mas confira se a manchete não assenta depois do corte` });
    }
  }
  /* A cena está na convenção LIMPA da [ARTE-97]: `__duracao` casa com a janela sem os cortes
   * internos. É a forma CERTA — passa sem ruído. */
  else if (janelaLimpa(s) !== null && Math.abs(d - janelaLimpa(s)) <= TOL_DUR) {
    oks.push({ cena: id, tipo: "duracao-limpa" });
  }
  /* A cena está na convenção BRUTA (ARTE-90, revogada em 01/ago): `__duracao` casa com a `dur` do
   * espelho, mas há corte DENTRO da janela — então a diferença é cauda que não vai ao ar. Não é
   * erro de execução (era a regra da casa quando a arte foi feita), é dívida: avisa e ensina. */
  else if (janelaLimpa(s) !== null && Math.abs(d - dur) <= TOL_DUR) {
    const lp = janelaLimpa(s);
    avisos.push({ cena: id, tipo: "duracao-bruta-legada", declarado: d, limpa: lp,
      msg: `__duracao ${d} == dur BRUTA, mas há ${(dur - lp).toFixed(2)}s de corte dentro — o composto exibe ${lp}s` });
  }
  else if (Math.abs(d - dur) > TOL_DUR) {
    limpo = false;
    const sobra = +(d - dur).toFixed(3);
    /* Excesso do tamanho EXATO do segmento vizinho = a mãe de um run fundido cuja `dur` não foi
     * consolidada no espelho ([ARTE-102]). Aqui a arte está certa e o espelho não: mandar re-ancorar
     * o `renderAt` estraga cena boa. Rode `qc-fusao-espelho <proj> --aplicar`. */
    const vizinho = segs.find((x) => x._mergedInto === id);
    const fusao = vizinho && Math.abs(sobra - (vizinho.dur ?? 0)) < 0.15;
    erros.push({
      cena: id, tipo: "duracao", declarado: d, janela: dur, delta: sobra,
      msg: (sobra > 0
        ? `__duracao ${d} > janela ${dur} — ${sobra}s de animação que NÃO vai ao ar`
        : `__duracao ${d} < janela ${dur} — ${-sobra}s de janela sem cena`)
        + (fusao ? ` ⇔ o excesso é a dur EXATA de ${vizinho.id} (_mergedInto ${id}): run fundido sem a dur consolidada no espelho — conserto é \`qc-fusao-espelho ${basename(D)} --aplicar\`, NÃO re-ancorar a arte` : ""),
    });
  }

  // DESVIO do consenso, não o número cru: quanto ESTA cena deixou de acompanhar a turma.
  // ⚠️ Antes do consenso vem a regra absoluta: quem declara a âncora VIGENTE está em dia, ponto.
  // Sem esta linha o gate acusa exatamente as cenas que acabaram de ser consertadas (ver acima).
  const emDia = a != null && Math.abs(a - s.inSec) <= TOL_IN;
  if (!emDia && a != null && Math.abs((a - s.inSec) - RELOGIO) > TOL_IN) {
    const dev = +((a - s.inSec) - RELOGIO).toFixed(2);
    /* O sinal, e ele confunde: `dev > 0` = a cena deslocou MAIS que o relógio, ou seja, o espelho a
     * põe MAIS CEDO do que a fala dela chegou → em t=0 a fala ainda não alcançou o primeiro beat, e
     * a arte aparece ANTES da voz (ADIANTADA, conserto = SOMAR). `dev < 0` = o inverso (ATRASADA,
     * conserto = SUBTRAIR). Conferido contra as quatro cenas medidas por beat. */
    /* Onde, no relógio de hoje, está a fala que a arte coreografou: `inSec + dev`. A arte foi feita
     * para a fala que começava em `a` no relógio velho; ela hoje começa em `a − RELOGIO`, e
     * `a − RELOGIO = inSec + dev` por construção. Somar (e não subtrair) é o que faz o desempate
     * comparar as duas janelas certas — com o sinal trocado, `c24` aparecia com 0% de fala em comum
     * e era, na verdade, o MESMO parágrafo regravado em outro take. */
    const desloc = dev;
    /* Duas janelas, dois relógios: a declarada lida no relógio DA ARTE, a vigente no do ESPELHO.
     * Só quando não se identifica o relógio da arte é que se recorre à estimativa por consenso. */
    const sim = relogioArte
      ? jaccard(falaEm(relogioArte.words, a, dur), fala(s.inSec, dur))
      : (words.length ? jaccard(fala(s.inSec, dur), fala(s.inSec + desloc, dur)) : null);
    if (sim != null && sim >= SIM_MIN) {
      avisos.push({ cena: id, tipo: "take-trocado", delta: dev, sim,
        msg: `âncora desviou ${dev}s do consenso, mas a fala da janela é a MESMA (${Math.round(sim * 100)}% igual) — troca de take, arte segue válida; corrija só o comentário do cabeçalho` });
    } else {
      limpo = false;
      erros.push({ cena: id, tipo: "ancoragem", declarado: a, atual: s.inSec, delta: dev, sim,
        msg: `arte ${dev > 0 ? "ADIANTADA" : "ATRASADA"} ${Math.abs(dev)}s — ${dev > 0 ? "SOME" : "SUBTRAIA"} ${Math.abs(dev)}s dos tempos do renderAt${sim != null ? ` (a fala da janela só bate ${Math.round(sim * 100)}%)` : ""}` });
    }
  }
  if (limpo) oks.push(id);
}

if (JSON_OUT) { console.log(JSON.stringify({ proj: basename(D), erros, avisos, ok: oks.length }, null, 1)); process.exit(erros.length ? 1 : 0); }

console.log(`\n══ JANELA · ${basename(D)} · ${readdirSync(G).filter((f) => f.endsWith(".html") && !f.startsWith("_") && !f.startsWith(".")).length} cena(s) ══`);
console.log(`  relógio da transcrição andou ${RELOGIO}s desde que a arte foi feita (consenso de ${brutos.length} cenas) — isso sozinho não é defeito`);
console.log(relogio.arquivo
  ? `  fala lida de ${janelaTxt(relogio)}${relogio.cabe ? "" : " ⚠️ NÃO casa com o espelho — o desempate take × dessincronia está CEGO"}`
  : `  ⚠️ sem transcrição no disco — desempate take × dessincronia DESLIGADO (toda âncora desviada vira erro)`);
if (relogioArte) console.log(`  a arte foi coreografada em ${janelaTxt(relogioArte)} (aderência ${Math.round(relogioArte.aderencia * 100)}% em ${paresAncora.length} cenas) — cada janela é lida no SEU relógio`);
else if (paresAncora.length) console.log(`  ⚠️ nenhum relógio do disco explica as âncoras declaradas (melhor aderência ${Math.round((candArte[0]?.aderencia ?? 0) * 100)}%) — desempate por estimativa de consenso`);
if (erros.length) {
  console.log(`\n  ✗ ${erros.length} cena(s) fora da janela do espelho:\n`);
  /* ⚠️ ESTE LAÇO LISTAVA SÓ `ancoragem` E `duracao` — e o gate ganhou `duracao-card` com a [ARTE-93]
   * sem ganhar a linha que o imprime. Resultado medido em 05/ago no `energia-escura`: o rodapé dizia
   * "✗ 1 cena(s) fora da janela" e o corpo vinha VAZIO. Gate que reprova sem dizer O QUÊ é
   * inatendível — quem recebe o FAIL não tem por onde começar, e a estação trava por falta de
   * informação, não por falta de conserto. Agora o laço percorre os tipos conhecidos na ordem e
   * varre o RESTO no fim, para que um tipo novo nunca mais volte a ser contado em silêncio. */
  const rotulos = { ancoragem: "ANCORAGEM", duracao: "DURAÇÃO  ", "duracao-card": "CARD     " };
  const vistos = new Set();
  for (const [tipo, rot] of Object.entries(rotulos))
    for (const e of erros.filter((x) => x.tipo === tipo)) { vistos.add(e); console.log(`    ${e.cena.padEnd(9)} ${rot} · ${e.msg}`); }
  for (const e of erros) if (!vistos.has(e)) console.log(`    ${e.cena.padEnd(9)} ${String(e.tipo || "?").toUpperCase().padEnd(9)} · ${e.msg || JSON.stringify(e)}`);
}
if (avisos.length) {
  /* A dívida da convenção BRUTA é sistêmica (18 de 28 cenas no `orcas-nao-matam`) e a mensagem é a
   * MESMA em todas — imprimir o parágrafo inteiro por cena empurrava o FAIL de verdade para o rodapé,
   * ilegível. Gate que afoga o próprio sinal não é lido. Agrupo: o porquê uma vez, os números em
   * tabela. */
  const legado = avisos.filter((a) => a.tipo === "duracao-bruta-legada");
  const resto = avisos.filter((a) => a.tipo !== "duracao-bruta-legada");
  if (resto.length) {
    console.log(`\n  ▲ ${resto.length} aviso(s):\n`);
    for (const a of resto) console.log(`    ${a.cena.padEnd(9)} ${a.msg}`);
    /* ⚠️ "corrija só o comentário do cabeçalho" É TRABALHO DE `replace`, E TEM SCRIPT — mas o gate
     * não o nomeava, e a saída cara é a que o silêncio convida: despachar o editor-de-arte (Fable, a
     * cota mais escassa da casa) para reescrever um número. Medido no `galaxia-arco-flecha`, 08/ago:
     * 15 cenas neste estado = 15 agentes pagos para consertar arte que estava correta.
     * O `recarimbar-ancora` faz SÓ o carimbo — nunca desloca `renderAt`, nunca mexe em `__duracao` —,
     * e é por isso que ele serve aqui e não serve no bloco de ERROS: ali a fala da janela mudou de
     * verdade, e cena com fala nova é caso do editor-de-arte. A separação take-trocado × ancoragem
     * que este gate faz é exatamente a linha entre os dois consertos. */
    /* ⚠️ A dica só vale para take-trocado SEM erro (12/ago, orcas-nao-matam). O `recarimbar-ancora`
     * exclui de propósito toda cena que também aparece em `erros` — "o script nunca decide sozinho
     * que uma cena está boa" —, então contar os take-trocado TODOS fazia o gate mandar rodar um
     * comando que sai com `✗ nenhuma cena indicada`. Aqui as 7 estavam as 7 em erro de DURAÇÃO e a
     * dica era inerte em 100% dos casos. Instrução que não roda é pior que instrução nenhuma: quem
     * a vê falhar tende a forçar a variante perigosa (passar os ids na mão, recarimbando cena cuja
     * fala mudou de verdade). Conte os ELEGÍVEIS e, quando não houver, diga por quê. */
    const comErro = new Set(erros.map((e) => e.cena));
    const takes = resto.filter((a) => a.tipo === "take-trocado").map((a) => a.cena);
    const elegiveis = [...new Set(takes.filter((c) => !comErro.has(c)))];
    if (elegiveis.length) {
      console.log(`\n    ⚡ ${elegiveis.length} cena(s) só com o CARIMBO velho — não despache agente para isto:`);
      console.log(`         node scripts/recarimbar-ancora.mjs ${basename(D)} --todas-take-trocado --seco   # simula`);
      console.log(`         node scripts/recarimbar-ancora.mjs ${basename(D)} --todas-take-trocado          # grava`);
    } else if (takes.length) {
      console.log(`\n    · ${new Set(takes).size} cena(s) de carimbo velho estão TAMBÉM em erro acima — o recarimbo não as toca.`);
      console.log(`      O cabeçalho delas se corrige junto da readaptação; não rode o recarimbar-ancora aqui.`);
    }
  }
  if (legado.length) {
    console.log(`\n  ▲ ${legado.length} cena(s) na convenção BRUTA legada ([ARTE-90], revogada pela [ARTE-97]):`);
    console.log(`     \`__duracao\` casa com a \`dur\` do espelho, mas há corte DENTRO da janela — o composto`);
    console.log(`     exibe menos e o excedente é cauda. Não urge quando a cauda cobre apresentador; urge`);
    console.log(`     quando leva o payoff junto. Quem mede o dano real é \`qc-janela-exibida\`.\n`);
    for (const a of legado)
      console.log(`    ${a.cena.padEnd(9)} __duracao ${String(a.declarado).padStart(7)} → alvo ${String(a.limpa).padStart(7)}  (${String((a.declarado - a.limpa).toFixed(2)).padStart(6)}s de cauda)`);
  }
}
console.log(erros.length
  ? `\n✗ FAIL — ${erros.length} cena(s). O conserto é da ARTE (re-ancorar os tempos do renderAt e travar __duracao na dur do espelho), não do espelho.\n`
  : `\n✓ PASS — toda cena cabe na janela que o espelho reservou e foi coreografada contra ela.\n`);
process.exit(erros.length ? 1 : 0);
