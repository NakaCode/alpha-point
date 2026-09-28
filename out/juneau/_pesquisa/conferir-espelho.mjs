#!/usr/bin/env node
// conferir-espelho.mjs — prova, por conta, o que o montador afirma sobre out/<proj>/espelho.json.
// Só LÊ: o espelho, o words.json, o narracao.json, o texto aprovado, a cópia para a voz, a tabela de trocas e
// (se o ffprobe existir) a contagem de quadros do master; desde a décima primeira revisão, também a lista de
// out/<proj>/_media/geo/ e, se existir, out/<proj>/_pesquisa/conferencia-midia.json (os vereditos do conferente).
// Não guarda nenhum tempo próprio (o espelho é a fonte única de timing, ofício do montador §7.1).
//
// Uso (cwd na raiz do canal):  node out/juneau/_pesquisa/conferir-espelho.mjs [proj] [--json] [--espelho=<outro.json>]
// Saída: 0 = todas as provas passaram · 1 = alguma prova falhou · 2 = não mediu (arquivo ausente/ilegível)
//
// 27/09/2026 (revisão dos verificadores): a borda da cauda deixou de ser isenta da grade de quadros; o fim da
// última cena passou a ser conferido contra o fim do VÍDEO do master (não do áudio); entrou a simulação do
// arredondamento do pipeline (renderizar.mjs `quadrosDe = Math.round(dur*30)`, xml-premiere.mjs
// `f2 = Math.round(s*30)`), e as provas de _quadros, planos, _virada, semente, REGISTRO (§10.1), cópia
// arquivada, cadeia referencial, cardápio de `modo` e termos de busca por plano.
//
// 27/09/2026 (segunda revisão): o aviso da cópia arquivada mora em `_fonte_arquivada`, e `needs.dados` só leva
// pedido de dado (nada de aviso, figura semântica ou instrução); `convocado_por` são as primeiras palavras do
// próprio plano; plano abaixo de 2,0 s que não é registro declara `_texto_no_ar` (identidade §4.3); os planos de
// retrato (`_pedido_a: pesquisa-pessoas`) ficam fora da lista do pesquisa-imagens e dentro de `retratos`; todo
// plano de registro com termo está na lista; a cauda é fundo provisório renderizado; cena com país no mapa pede
// a bandeira (`needs.logos`) ou diz por que não (`_nota_logos`).
//
// 27/09/2026 (terceira revisão): a cadeia também no sentido inverso (a _cadeia de cada cena contra
// _cadeia_referencial) e no motivo da cena que abre a promessa; toda cena que paga é candidata a showpiece,
// igual em _cadeia e em _candidatas_a_showpiece; nenhum texto põe a origem do corredor do Taku em Cascade
// Point (s44); plano de registro com ano no objeto pede a época no termo (identidade §6); número sobre lugar
// declara `_figura` (ofício §6.7); toda cena documento/citação tem `_documentos`, e toda cena com
// `_documentos` está em _despacho_research › documentos; `needs.logos` está nos pedidos do pesquisa-logos.
//
// 27/09/2026 (quarta revisão): o Taku em qualquer ordem de palavras (toda frase que cite o Taku e Cascade Point ou o
// fim da estrada, fora de `_geografia` e sem negação), o Taku Inlet pedido em s44 e o corredor dele no plano 3; nenhum
// pedido diz que a malha continental para antes do panhandle; nenhum texto põe o fim do asfalto no lugar do fim da
// estrada; plano de registro com um ano exato no objeto e só a década no termo diz a regra do crédito (a data da foto
// vai no crédito) ou "sem rótulo de ano"; `_citacao.palavras` é a contagem do verbatim; a declaração de 1978 (s18) é
// assinada (f-033); no despacho de documentos, o regime e a palavra que convoca cada plano batem com o espelho, e
// nenhum trecho a grifar cai numa entrada com plano de registro; o plano com `_pedido_a: pesquisa-documentos` fica
// só na lista do pesquisa-documentos; o `_borda` de cada cena confere com o words.json; candidatas a showpiece pela
// roupa do diretor-de-arte §2 inteira (a abertura, as parcelas e o fecho).
//
// 27/09/2026 (quinta revisão): texto travado numa palavra ("trava/travado/entra/pousa/abre em|com|sobre|como", ou
// "word-lock") nomeia a palavra entre aspas, dita dentro do plano, e fica ≥ 2,0 s no ar até o fim do plano, também
// sobre registro, ou declara `_texto_no_ar`; plano de mapa não manda traçar corredor, caminho ou rota sem geometria
// (mapista §6c), e s44 põe os corredores como seta; plano de registro com ano exato no objeto e algum termo que aceita
// outro ano (a década, ou outro ano) diz a regra do crédito; no despacho de documentos, todo trecho a grifar tem a
// palavra da voz (`voz_do_grifo`) dita dentro dos planos listados, e esses planos têm o documento na tela (documento,
// citação ou dado; PRANCHA só declarada); peça com `caca` do pesquisa-documentos não tem plano na lista do
// pesquisa-imagens, com ou sem `_pedido_a`; a lista `cenas` do despacho bate com o espelho (modo, midia, tempo,
// regime e termos de cada plano); cada capítulo cai na cena citada, na primeira palavra da parte (ou na borda da cena).
//
// 27/09/2026 (sexta revisão; decisões do Claude central). (1) A "regra do crédito" (o ano da tela é o do fato, e a data da
// foto vai no crédito) afrouxava a identidade §6 e saiu: nenhum texto a usa; plano de registro que não é B-roll de hoje
// pede o tempo do fato em todo termo (ano exato que o objeto dá, nunca a década); "sem rótulo de ano" só em B-roll de hoje;
// a pergunta ao Lucas (foto do lugar de poucos anos antes ou depois) está nas pendências, e cada plano que ela destravaria
// diz no objeto o re-espelho com o mesmo id. (2) Nenhum texto ou número entra antes de a voz dizê-lo: nada de "ênfase"
// dentro de um bloco que entra antes; a trava não põe na tela uma frase citada que a voz diz depois; todo número ou frase
// citada que o objeto põe na tela e que a voz diz a menos de 2,0 s do fim do plano declara `_texto_no_ar` (lista de
// {texto, palavra, de, ate, sobre}: atravessa os planos seguintes da mesma cena, ou declara o conflito, que vai à pendência
// do regente-de-imagem). (3) O grifo só com o documento na tela (sem exceção para a PRANCHA); o mesmo lugar em cenas
// diferentes exige clipes diferentes; o rótulo de needs.geo é só o nome da tela em inglês; os trechos de um grifo são
// varridos na ordem da página.
//
// 27/09/2026 (sétima revisão). A decisão (2) passa a ser medida na entrada, e não só pelas palavras "ênfase" e pela distância
// ao fim do plano: em cada cláusula com verbo de entrada e palavra entre aspas, o que a cláusula põe na tela (os números, que
// a voz diz por extenso, "a million" incluído; as datas, pelo mês; as frases entre aspas; "a data" = as datas do objeto) é
// dito pela voz, na cena, até o fim da palavra de entrada, e a entrada não vem mais de 1,0 s depois da voz no mesmo plano.
// E três guardas do que a verificação achou: a pergunta ao Lucas nomeia cada ano que um sim tiraria da tela e que a voz da
// cena não diz (e não diz "na voz ou no documento"); nenhum texto cita s06 como "século XIX"; texto que atravessa o card de
// outra pessoa leva nota de que sai com a atribuição a quem o disse (s25).
//
// 27/09/2026 (oitava revisão; verificação da sétima). A varredura das frases entre aspas vale também para a fala do modo
// citação, partida nas frases e nas interrupções do narrador (cada parte medida quando a voz a diz); texto que "se soma" a um
// bloco nomeia a palavra de entrada; o ano que o objeto põe "na tela" e a voz da cena não diz nomeia a palavra que o convoca;
// nenhum objeto põe na tela um número que a voz só diz num plano seguinte da cena; a regra do crédito com outras palavras ("o
// ano da foto", "a data real", a data "na legenda" ou "na procedência", ou uma cláusula que aceita foto de ano que não é o do
// fato) reprova; o rotulo de needs.geo não tem vírgula (dois nomes, duas entradas).
//
// 27/09/2026 (nona revisão; as decisões do Lucas de 27/09). As provas que cobravam as pendências decididas mudaram com o
// fato, sem afrouxar: (1) a cópia arquivada vale como fonte (CLAUDE.md, "A marca"), e o aviso de `_fonte_arquivada` diz
// isso e traz, para cada fonte que cita (doc-NN, mec-NN), a data da captura que o `url_acessada` do fundamento.json dá;
// nenhum texto a chama de NÃO CONFERIDO nem de pendente; (2) vídeo do governo do Alasca (midia.md §7.5) e (3) logo de
// órgão federal e de outras instituições (§7.6) não aparecem como pendentes, e `needs.logos` só pede bandeira; (4) a
// pergunta sobre foto de outro ano saiu das pendências (identidade §6: sem foto do ano, mapa ou desenho), a decisão está
// em `_decisoes_do_lucas`, e os 11 planos que ela listava continuam dizendo o re-espelho com o mesmo id. A pendência PARA O
// REGENTE-DE-IMAGEM leva a decisão do Claude central sobre a palavra de entrada.
//
// 27/09/2026 (décima revisão; verificação da nona). A decisão (1) cobre a cópia arquivada de página oficial do Estado do
// Alasca, não de "site que recusa robô" em geral, e prova o texto, não a licença: nenhum texto a generaliza, e nenhuma
// licença ou permissão se confere "pela cópia arquivada". As guardas de (2) e (3) leem a oração inteira: vídeo do
// Estado dado como pendente ou negado, e logo dada como pendente ou deixada entrar, reprovam (com e sem maiúscula).
//
// 28/09/2026 (décima primeira revisão; o re-espelho que a pesquisa de mídia devolve, que o despacho do research chama de
// sétima; as decisões do Lucas de 27 e 28/09). As provas que a regra nova deixou velhas mudaram com ela, sem afrouxar:
// (1) país no mapa: o nome escrito, sem bandeira (identidade §6; Lucas, 27/09/2026: "Só o nome escrito (Recomendado)"):
// needs.logos não pede nada (nem bandeira), a cena com país no mapa diz a regra na _nota_logos, e a bandeira pendente
// entrou nas DECIDIDAS. (2) Rota que nunca foi construída (identidade §6; Lucas, 27/09/2026: "Sim, tracejada e com aviso
// (Recomendado)"): o plano dos corredores de s44 diz o esquema tracejado pelo texto da fonte, o aviso Approximate route,
// a identidade §6 e que não decalca a figura do estudo (a seta sem linha e a citação do mapista §6c eram a solução
// provisória da quinta revisão); o Taku Inlet pode ser o ponto do GNIS (taku-inlet-gnis); a cláusula de mapa que diz o
// esquema tracejado não é "traçar sem geometria"; toda cena com esquema tem `_esquema` (a regra, e por rota o plano, o
// ponto de partida em needs.geo, a fonte entre aspas e, com o ponto fora do disco, o que o plano faz sem ele), e os
// planos dele dizem o aviso; o esquema pendente entrou nas DECIDIDAS. (3) Foto de outro ano, com o aviso na tela
// (identidade §6; Lucas, 27/09/2026: "Quando não houver foto do ano, mas houver foto pode utilizar com um aviso em
// tela"; a peça de acervo fotografada depois, sem aviso, 28/09): a decisão em `_decisoes_do_lucas` é essa, e a de antes
// ("Não: sem foto do ano, vira mapa ou desenho") não volta como vigente; os 11 planos da pergunta de 27/09 e os oito que
// ficaram sem nenhuma foto seguem a ordem da identidade §6 (registro com o aviso do ano, ou "sem aviso", ou, sem foto,
// outro regime com o mesmo id, dito no objeto); a cláusula que aceita foto de outro ano passa se diz o aviso; e cada foto
// ou retrato que o conferente aprovou tem, no objeto do plano, o aviso do ano (aviso_de_ano true) ou "sem aviso"
// (false). (4) `_existe` diz o disco: true só com out/<proj>/_media/geo/<id>.json, false só sem ele.
//
// 28/09/2026 (a fusão do diretor-de-arte, contrato dele §3.2; ajuste do Claude central). Um run `fundir:true` do
// conceito-visual vira UM arquivo: cada filho leva `_mergedInto: "<mãe>"`, e a `dur` e o `_quadros.out` da mãe cobrem a
// janela do run inteiro. As provas de conteúdo (fala, âncora, planos, borda, números, capítulos e as contas) continuam na
// janela PRÓPRIA de cada cena, que na mãe acaba onde começa o primeiro filho: o script lê a mãe com essa janela. O arquivo
// fundido se prova à parte (§0b): os filhos logo depois da mãe, sem cadeia de fusão, a `dur` da mãe até o fim do último
// filho e o `_quadros` do arquivo no arredondamento do pipeline, fechando no quadro do último filho. Contra o espelho de
// antes da fusão, nenhuma prova muda.
import { readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const argv = process.argv.slice(2);
const proj = argv.find((a) => !a.startsWith("--")) || "juneau";
const JSON_OUT = argv.includes("--json");
const OUTRO = argv.find((a) => a.startsWith("--espelho="))?.slice("--espelho=".length); // para provar o conferente contra uma cópia
const P = {
  esp: OUTRO || `out/${proj}/espelho.json`, words: `out/${proj}/words.json`, narr: `out/${proj}/narracao.json`,
  aprov: `roteiros/${proj}/roteiro-narrador.md`, voz: `out/${proj}/roteiro.md`, trocas: `roteiros/${proj}/voz/trocas.md`,
  fund: `pautas/${proj}/fundamento.json`, // nona revisão: a data de captura de cada cópia arquivada (url_acessada)
};
for (const [k, p] of Object.entries(P)) if (!existsSync(p)) { console.error(`NÃO MEDIDO: falta ${p} (${k})`); process.exit(2); }
const ler = (p) => JSON.parse(readFileSync(p, "utf8").replace(/^﻿/, ""));
let E, W, N, FUND;
try { E = ler(P.esp); W = ler(P.words); N = ler(P.narr); FUND = ler(P.fund); } catch (e) { console.error(`NÃO MEDIDO: JSON ilegível (${e.message})`); process.exit(2); }

const FPS = 30, TOL = 1e-6;
const S = [...E.segmentos].sort((a, b) => a.inSec - b.inSec);
const FIM_AUDIO = N.audio.duracaoSec;
const r3 = (x) => Math.round(x * 1000) / 1000;
const falhas = [];
const F = (m) => falhas.push(m);
const desvio = (t) => { const q = t * FPS; return Math.abs(q - Math.round(q)); };

// ── 0b · a fusão (28/09/2026): o arquivo fundido provado à parte; daqui em diante, a mãe na janela própria ──
const FILHOS = {};
for (const s of S) if (s._mergedInto) (FILHOS[s._mergedInto] ??= []).push(s);
const FUNDIDOS = [];
for (const [maeId, filhos] of Object.entries(FILHOS)) {
  const iMae = S.findIndex((s) => s.id === maeId);
  const mae = S[iMae];
  if (!mae) { F(`fusão: ${filhos.map((f) => f.id).join(", ")} apontam _mergedInto para "${maeId}", que não está no espelho`); continue; }
  if (mae._mergedInto) F(`fusão: ${maeId} é mãe e também filha de ${mae._mergedInto} (cadeia de fusão)`);
  const seguintes = S.slice(iMae + 1, iMae + 1 + filhos.length).map((s) => s.id);
  if (seguintes.join() !== filhos.map((f) => f.id).join()) F(`fusão: os filhos de ${maeId} (${filhos.map((f) => f.id).join(", ")}) não vêm logo depois dela (vêm ${seguintes.join(", ")})`);
  const ult = filhos.at(-1);
  const durArquivo = mae.dur, qArq = mae._quadros ? { ...mae._quadros } : null;
  const janelaRun = r3(ult.inSec + ult.dur - mae.inSec);
  if (Math.abs(durArquivo - janelaRun) > 1e-3) F(`fusão: ${maeId}: dur ${durArquivo} ≠ a janela do run, ${janelaRun} (de ${mae.inSec} ao fim de ${ult.id})`);
  const qIn = Math.round(mae.inSec * FPS), qFimArq = qIn + Math.round(durArquivo * FPS);
  if (!qArq || qArq.in !== qIn || qArq.out !== qFimArq) F(`fusão: ${maeId}: _quadros {${qArq?.in}, ${qArq?.out}} ≠ o arquivo no pipeline {${qIn}, ${qFimArq}}`);
  else if (ult._quadros && qArq.out !== ult._quadros.out) F(`fusão: ${maeId}: o arquivo fecha no quadro ${qArq.out}, e ${ult.id} no ${ult._quadros.out}`);
  // a janela própria da mãe acaba onde começa o primeiro filho: é assim que as provas de conteúdo a leem (só em memória)
  mae.dur = r3(filhos[0].inSec - mae.inSec);
  if (mae._quadros) mae._quadros = { ...mae._quadros, out: qIn + Math.round(mae.dur * FPS) };
  FUNDIDOS.push({ mae: maeId, filhos: filhos.map((f) => f.id), de: mae.inSec, ate: r3(mae.inSec + durArquivo), dur_arquivo: durArquivo, quadros_arquivo: qArq, dur_propria: mae.dur });
}

// ── 0 · o fim do vídeo: quadros do master pelo ffprobe; sem ele, o primeiro quadro inteiro depois do áudio ──
const MASTER = `out/${proj}/_media/_master.mp4`;
let quadrosMaster = null, fonteFim = "ceil(áudio × 30) — ffprobe ou master ausente";
if (existsSync(MASTER)) {
  try {
    const o = execFileSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=nb_frames", "-of", "default=nw=1:nk=1", MASTER], { encoding: "utf8" }).trim();
    if (/^\d+$/.test(o)) { quadrosMaster = +o; fonteFim = `ffprobe do master: ${quadrosMaster} quadros`; }
  } catch { /* sem ffprobe: cai na conta pelo áudio */ }
}
const QUADROS_FIM = quadrosMaster ?? Math.ceil(FIM_AUDIO * FPS - 1e-6);
const FIM_VIDEO = QUADROS_FIM / FPS;

// ── 1 · cobertura, vão e sobreposição ──
if (S[0].inSec !== 0) F(`a primeira cena abre em ${S[0].inSec}, não em 0`);
const fimUlt = r3(S.at(-1).inSec + S.at(-1).dur);
if (Math.abs(fimUlt - FIM_VIDEO) > 1e-3) F(`a última cena fecha em ${fimUlt}; o vídeo do master fecha em ${r3(FIM_VIDEO)} (${fonteFim})`);
if (fimUlt + 1e-9 < FIM_AUDIO) F(`a última cena fecha em ${fimUlt}, antes do fim do áudio (${FIM_AUDIO})`);
const soma = r3(S.reduce((s, x) => s + x.dur, 0));
let maiorVao = 0, maiorSobre = 0;
for (let i = 1; i < S.length; i++) {
  const d = r3(S[i].inSec - (S[i - 1].inSec + S[i - 1].dur));
  if (d > maiorVao) maiorVao = d;
  if (-d > maiorSobre) maiorSobre = -d;
}
if (maiorVao > TOL) F(`vão de ${maiorVao} s`);
if (maiorSobre > TOL) F(`sobreposição de ${maiorSobre} s`);

// ── 2 · a grade, como o pipeline a arredonda (renderizar.mjs: round(dur×30); xml-premiere.mjs: round(s×30)) ──
const pipeline = [];
for (let i = 0; i < S.length; i++) {
  const s = S[i];
  const qIn = Math.round(s.inSec * FPS), qN = Math.round(s.dur * FPS), qFim = qIn + qN;
  const qProx = i + 1 < S.length ? Math.round(S[i + 1].inSec * FPS) : QUADROS_FIM;
  if (qFim !== qProx) { F(`${s.id}: no pipeline fecha no quadro ${qFim} e a seguinte abre no ${qProx} (${qProx - qFim > 0 ? "vão" : "sobreposição"} de ${Math.abs(qProx - qFim)} quadro)`); pipeline.push(s.id); }
  if (desvio(s.inSec) > 0.02) F(`${s.id}: inSec ${s.inSec} fora da grade de ${FPS} fps (quadro ${(s.inSec * FPS).toFixed(3)})`);
  if (desvio(s.inSec + s.dur) > 0.02) F(`${s.id}: o fim ${r3(s.inSec + s.dur)} fora da grade (quadro ${((s.inSec + s.dur) * FPS).toFixed(3)})`);
  const q = s._quadros;
  if (!q) F(`${s.id}: sem _quadros`);
  else if (q.in !== qIn || q.out !== qFim || !Number.isInteger(q.in) || !Number.isInteger(q.out)) F(`${s.id}: _quadros {${q.in}, ${q.out}} ≠ o pipeline {${qIn}, ${qFim}}`);
}

// ── 3 · cada borda interna cai numa pausa do words.json (sem cortar palavra), a menos de 1 quadro da palavra ──
const bordas = [];
for (let i = 1; i < S.length; i++) {
  const t = S[i].inSec;
  const prox = W.findIndex((w) => w.start >= t - 1e-9);
  const ant = prox > 0 ? prox - 1 : (prox === -1 ? W.length - 1 : -1);
  const fimAnt = ant >= 0 ? W[ant].end : 0;
  const iniProx = prox >= 0 ? W[prox].start : null;
  const naPausa = fimAnt <= t + 1e-9 && (iniProx === null || t <= iniProx + 1e-9);
  const b = { cena: S[i].id, t, palavra_seguinte: iniProx === null ? "(nenhuma: cauda)" : W[prox].w, inicio_da_palavra: iniProx, fim_da_anterior: fimAnt,
    folga_antes_da_palavra_s: iniProx === null ? null : r3(iniProx - t), quadro: r3(t * FPS), na_pausa: naPausa, na_grade: desvio(t) <= 0.02 };
  bordas.push(b);
  if (!naPausa) F(`${S[i].id}: a borda ${t} corta palavra (fim da anterior ${fimAnt}, início da seguinte ${iniProx})`);
  if (iniProx !== null && iniProx - t >= 1 / FPS - 1e-9) F(`${S[i].id}: a borda ${t} está a ${r3(iniProx - t)} s da palavra (mais de 1 quadro)`);
}

// ── 4 · a âncora de cada cena = as palavras cujo início cai na janela dela ──
const ancoraOk = [];
for (const s of S) {
  const a = s.inSec, b = s.inSec + s.dur;
  const pal = W.filter((w) => w.start >= a - 1e-9 && w.start < b - 1e-9).map((w) => w.w).join(" ");
  const ok = s.ancora === pal;
  ancoraOk.push({ cena: s.id, ok, palavras: pal ? pal.split(" ").length : 0 });
  if (!ok) F(`${s.id}: a âncora não é a fala da janela${pal ? "" : " (a janela não tem fala: a âncora fica vazia)"}`);
}
const totalPal = ancoraOk.reduce((s, x) => s + x.palavras, 0);
if (totalPal !== W.length) F(`as âncoras somam ${totalPal} palavras; o words.json tem ${W.length}`);

// ── 5 · o texto aprovado de cada cena, trocado para a voz, é a âncora ──
const trocas = readFileSync(P.trocas, "utf8").split(/\r?\n/)
  .map((l) => l.split("|").map((c) => c.trim()))
  .filter((c) => c.length >= 6 && /^\d+$/.test(c[1]))
  .map((c) => ({ par: +c[1], tipo: c[2], de: c[3], para: c[4] }));
const mapa = new Map(); const conflito = [];
for (const t of trocas) { if (mapa.has(t.de) && mapa.get(t.de) !== t.para) conflito.push(t.de); mapa.set(t.de, t.para); }
if (conflito.length) F(`trocas ambíguas: ${conflito.join(", ")}`);
const chaves = [...mapa.keys()].sort((a, b) => b.length - a.length);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const RE = new RegExp(chaves.map((k) => `(?<![\\w$.])${esc(k)}(?![\\w])`).join("|"), "g");
const paraVoz = (txt) => txt.replace(RE, (m) => mapa.get(m));
// quinta revisão: achar uma frase (na grafia do texto aprovado ou na da voz) entre as palavras que começam em [de, ate);
// devolve as palavras do words.json que a formam, ou null. Compara sem caixa, aspas, pontuação e hífen.
const normTok = (t) => String(t).toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9\s-]+/g, " ").split(/[\s-]+/).filter(Boolean);
const achaTodos = (frase, de, ate) => {
  const toks = W.filter((w) => w.start >= de - 1e-9 && w.start < ate - 1e-9).flatMap((w) => normTok(w.w).map((t) => ({ t, w })));
  for (const f of [paraVoz(String(frase)), String(frase)]) {
    const q = normTok(f); if (!q.length) continue;
    for (let j = 0; j + q.length <= toks.length; j++) if (q.every((x, k) => toks[j + k].t === x)) return [...new Set(toks.slice(j, j + q.length).map((x) => x.w))];
  }
  return null;
};
let grifosProvados = 0;
const textoOk = [];
for (const s of S) {
  const ok = s._texto_aprovado ? paraVoz(s._texto_aprovado) === s.ancora : s.ancora === "";
  textoOk.push({ cena: s.id, ok });
  if (!ok) F(`${s.id}: o texto aprovado, trocado para a voz, não é a âncora`);
}
const corpoAprov = readFileSync(P.aprov, "utf8").split(/\r?\n\s*\r?\n/).map((p) => p.trim())
  .filter((p) => p && !/^(#|>|<!--|---)/.test(p)).join(" ").split(/\s+/).join(" ");
const corpoEsp = S.map((s) => s._texto_aprovado).filter(Boolean).join(" ");
if (corpoAprov !== corpoEsp) F("os _texto_aprovado das cenas, em ordem, não reproduzem o roteiro-narrador.md");

// ── 6 · contrato mínimo que o schema não pega, e a roupa do canal ──
const REAL = new Set(["footage", "foto", "drone"]);
const CARDAPIO = new Set(["mapa", "mapa3d", "footage", "foto", "aereo-real", "desenho", "dados", "documento", "citacao"]); // roupa do montador §3
const REGIME_REAL = new Set(["footage", "foto", "split", "aereo-real"]);
const REGIME_MAPA = new Set(["mapa", "mapa3d"]);
const ultimaId = S.at(-1).id;
for (const s of S) {
  if (s.anima !== true) F(`${s.id}: anima ${s.anima} (faceless: preto)`);
  if (!CARDAPIO.has(s.modo)) F(`${s.id}: modo \`${s.modo}\` fora do cardápio do canal (roupa do montador §3)`);
  if (REAL.has(s.midia) && !(s.midia_termos || []).length && !String(s.midia_necessidade || "").trim()) F(`${s.id}: pedido mudo`);
  const pl = s._planos || [];
  if (!pl.length) { F(`${s.id}: sem _planos`); continue; }
  if (pl[0].regime !== s.modo) F(`${s.id}: o modo (${s.modo}) não é o regime de abertura (${pl[0].regime}; ofício §11b)`);
  if (Math.abs(pl[0].de - s.inSec) > TOL) F(`${s.id}: o 1º plano não abre na cena`);
  if (Math.abs(pl.at(-1).ate - (s.inSec + s.dur)) > 1e-3) F(`${s.id}: o último plano não fecha na cena`);
  for (let i = 0; i < pl.length; i++) {
    if (Math.abs(r3(pl[i].ate - pl[i].de) - pl[i].dur) > 1e-3) F(`${s.id} plano ${i + 1}: dur ≠ ate − de`);
    if (pl[i].dur < 1.5 - 1e-9) F(`${s.id} plano ${i + 1}: ${pl[i].dur} s, abaixo do piso de beat de 1,5 s (identidade §4.3)`);
    // texto no ar ≥ 2,0 s (identidade §4.3): plano curto que não é registro diz como o texto dele fica no ar
    if (pl[i].dur < 2.0 - 1e-9 && !REGIME_REAL.has(pl[i].regime) && !(Array.isArray(pl[i]._texto_no_ar) && pl[i]._texto_no_ar.length)) F(`${s.id} plano ${i + 1}: ${pl[i].dur} s de ${pl[i].regime}, abaixo do texto no ar de 2,0 s, sem _texto_no_ar (identidade §4.3)`);
    // convocado_por = as primeiras palavras do próprio plano (nenhuma palavra do plano seguinte)
    const doPlano = W.filter((w) => w.start >= pl[i].de - 1e-9 && w.start < pl[i].ate - 1e-9).map((w) => w.w);
    const conv = String(pl[i].convocado_por || "").trim();
    if (conv && !conv.startsWith("(")) { const cw = conv.split(/\s+/); if (cw.length > doPlano.length || cw.some((w, k) => w !== doPlano[k])) F(`${s.id} plano ${i + 1}: convocado_por "${conv}" não são as primeiras palavras do plano ("${doPlano.slice(0, cw.length).join(" ")}")`); }
    if (i === 0) continue;
    if (Math.abs(pl[i].de - pl[i - 1].ate) > TOL) F(`${s.id}: planos com vão`);
    const t = pl[i].de, k = W.findIndex((w) => w.start >= t - 1e-9);
    if (desvio(t) > 0.02) F(`${s.id} plano ${i + 1}: borda ${t} fora da grade`);
    // dentro da pausa; ou, quando as palavras se tocam (vão < 1 quadro), no quadro imediatamente antes da palavra seguinte
    const colada = k > 0 && W[k].start - W[k - 1].end < 1 / FPS && Math.abs(t - Math.floor(W[k].start * FPS + 1e-6) / FPS) < 1e-3;
    if (k > 0 && W[k - 1].end > t + 1e-9 && !colada) F(`${s.id} plano ${i + 1}: a borda ${t} corta "${W[k - 1].w}"`);
  }
  // _virada: SEMPRE uma lista, com cada troca de regime entre planos seguidos
  const trocasRegime = [];
  for (let i = 1; i < pl.length; i++) if (pl[i].regime !== pl[i - 1].regime) trocasRegime.push({ em_s: pl[i].de, de: pl[i - 1].regime, para: pl[i].regime });
  const v = s._virada;
  if (trocasRegime.length && !Array.isArray(v)) F(`${s.id}: vira por dentro (${trocasRegime.map((x) => `${x.de}→${x.para}`).join(", ")}) e não declara _virada em lista`);
  if (!trocasRegime.length && v) F(`${s.id}: declara _virada sem troca de regime nos planos`);
  if (Array.isArray(v)) {
    if (v.length !== trocasRegime.length) F(`${s.id}: _virada tem ${v.length} item(ns); os planos trocam de regime ${trocasRegime.length} vez(es)`);
    for (const x of trocasRegime) {
      const d = v.find((y) => Math.abs(y.em_s - x.em_s) < 1e-6);
      if (!d || d.de !== x.de || d.para !== x.para) F(`${s.id}: a virada ${x.de}→${x.para} em ${x.em_s} não está em _virada`);
      else if (W[d.em_palavra]?.start < d.em_s - 1e-9 || (d.em_palavra > 0 && W[d.em_palavra - 1].start >= d.em_s - 1e-9)) F(`${s.id}: _virada em ${d.em_s} aponta a palavra errada (${d.em_palavra})`);
    }
  }
  // semente ≤ 6 palavras (ofício §9)
  const sem = /semente:\s*"([^"]+)"/.exec(s.tese || "");
  if (s.id !== ultimaId) {
    if (!sem) F(`${s.id}: tese sem semente entre aspas`);
    else if (sem[1].trim().split(/\s+/).length > 6) F(`${s.id}: semente "${sem[1]}" com ${sem[1].trim().split(/\s+/).length} palavras (teto 6, ofício §9)`);
  }
  // REGISTRO (§10.1): cena sem plano de registro escreve o porquê
  const temRegistro = pl.some((p) => REGIME_REAL.has(p.regime));
  if (!temRegistro && s.id !== ultimaId && !/REGISTRO \(§10\.1\):/.test(s.motivo || "")) F(`${s.id}: sem plano de registro e sem a linha "REGISTRO (§10.1):" no motivo`);
  if (/REGISTRO \(§10\.1\):/.test(s.motivo || "") && !/isto não foi filmado|FALTA DECLARADA|pedid[oa]|satélite/.test((s.motivo || "").split("REGISTRO (§10.1):").slice(1).join(" "))) F(`${s.id}: a linha REGISTRO (§10.1) não diz nem "isto não foi filmado", nem "FALTA DECLARADA", nem o pedido`);
  // pedido por plano (ofício §11b): os termos da cena são a união dos termos dos planos, e todo plano de registro tem termo
  const doPlano = [...new Set(pl.flatMap((p) => p.midia_termos || []))];
  const daCena = [...new Set(s.midia_termos || [])];
  if (doPlano.length !== daCena.length || doPlano.some((t) => !daCena.includes(t))) F(`${s.id}: os midia_termos da cena não são a união dos termos dos planos`);
  pl.forEach((p, i) => { if (REGIME_REAL.has(p.regime) && !(p.midia_termos || []).length) F(`${s.id} plano ${i + 1}: plano de registro sem midia_termos (pedido mudo)`); });
}
// quinta revisão: texto travado numa palavra fica ≥ 2,0 s no ar (identidade §4.3), também sobre registro. Toda frase do
// objeto (entre ponto e vírgula) que trava texto ("trava/travado/entra/pousa/abre em|com|sobre|como", ou "word-lock"),
// sem negação logo antes do verbo, nomeia entre aspas a palavra da trava, dita dentro do plano; da palavra ao fim do
// plano vão ≥ 2,0 s, ou o plano declara `_texto_no_ar`. A palavra que só enfatiza ("é só a ênfase") não é trava.
const TRAVA = /\b(trava|travad[oa]s?|entra|entram|pousa|pousam|abre)\s+(em|com|sobre|como)\b|word-lock/;
const NEG_TRAVA = /\b(não|nunca|nem)\s+(trava|travad|entra|pousa|abre)/;
// sexta revisão: `_texto_no_ar` é uma lista de {texto, palavra, de, ate, sobre[, conflito]}; o plano o tem para a palavra que
// começa em t0 quando alguma entrada tem essa palavra dita no plano, começando em t0
const listaTNA = (p) => (Array.isArray(p._texto_no_ar) ? p._texto_no_ar : []);
const temTNA = (p, t0) => listaTNA(p).some((x) => { const ws = x && achaTodos(x.palavra, p.de, p.ate); return !!ws && ws.some((w) => Math.abs(w.start - t0) < 1e-6); });
const ASPAS = /["“]([^"”]{2,200})["”]/g; // oitava revisão: até 200 caracteres (a fala de s05, com 82, ficava fora da varredura)
const travas = [];
for (const s of S) (s._planos || []).forEach((p, i) => {
  for (const cl of String(p.objeto || "").split(/;\s/)) {
    if (!TRAVA.test(cl) || NEG_TRAVA.test(cl)) continue;
    let ws = null, frase = null;
    for (const m of cl.matchAll(ASPAS)) { ws = achaTodos(m[1], p.de, p.ate); if (ws) { frase = m[1]; break; } }
    if (!ws) { F(`${s.id} plano ${i + 1}: texto travado sem a palavra da trava entre aspas, dita dentro do plano ("${cl.slice(0, 80)}…")`); continue; }
    const t0 = ws[0].start, noPlano = r3(p.ate - t0), naCena = r3(s.inSec + s.dur - t0);
    travas.push({ cena: s.id, plano: i + 1, regime: p.regime, palavra: frase, em_s: t0, no_ar_ate_o_fim_do_plano_s: noPlano, ate_o_fim_da_cena_s: naCena, texto_no_ar: temTNA(p, t0) });
    if (noPlano < 2.0 - 1e-9 && !temTNA(p, t0)) F(`${s.id} plano ${i + 1}: o texto trava em "${frase}" (${t0} s) e fica ${noPlano} s no ar até o fim do plano (${naCena} s até o fim da cena), abaixo de 2,0 s, sem _texto_no_ar para essa palavra (identidade §4.3)`);
    // sexta revisão: a trava não põe na tela outra frase citada na mesma cláusula que a voz só diz depois dela
    for (const m of cl.matchAll(ASPAS)) {
      if (m[1] === frase) continue;
      const o = achaTodos(m[1], s.inSec, s.inSec + s.dur);
      if (o && o[0].start > t0 + 1e-6) F(`${s.id} plano ${i + 1}: a trava em "${frase}" (${t0} s) leva "${m[1]}", que a voz só diz em ${o[0].start} s (sexta revisão: nenhum texto entra antes da voz)`);
    }
  }
});

// ── sexta revisão (decisão do Claude central, 27/09): nenhum texto ou número entra na tela antes de a voz dizê-lo ──
// O piso de 2,0 s de texto no ar (identidade §4.3) se cumpre deixando o texto ficar DEPOIS: ele atravessa o fim do plano
// e segue sobre o plano seguinte da mesma cena, declarado em `_texto_no_ar`; se o corte para a cena seguinte vem antes de
// 2,0 s, o espelho não antecipa: declara o conflito para o regente-de-imagem (_decisoes_pendentes).
// (a) a "ênfase dentro do bloco" (o número que entra antes, com a trava numa palavra anterior) não volta
const ENFASE = /só a ênfase|como ênfase|ênfase dentro do bloco|não a entrada dele/;
{ const ts = []; (function walk(o, p) { if (typeof o === "string") ts.push([p, o]); else if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) walk(v, `${p}.${k}`); })(E, "espelho");
  for (const [p, t] of ts) if (!/\._revisao$/.test(p) && ENFASE.test(t)) F(`${p}: põe texto ou número na tela antes de a voz dizê-lo, como ênfase de um bloco travado numa palavra anterior ("${ENFASE.exec(t)[0]}"; sexta revisão)`); }
// (b) a varredura: as frases numéricas que a voz diz em cada plano ("nineteen forty", "about seventy-seven percent", "six to
// three", "more than half", "about a quarter"), com o qualificador, e as frases citadas do objeto (em desenho, dados e mapa);
// se o objeto põe o número (ou a frase) na tela e a voz o diz a menos de 2,0 s do fim do plano, o plano declara _texto_no_ar
const UN = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
const MULT = { hundred: 100, thousand: 1e3, million: 1e6, billion: 1e9 };
const QUALIF = new Set(["about", "nearly", "almost", "roughly", "just", "over"]);
const limpa = (w) => String(w || "").toLowerCase().replace(/[^a-z-]/g, "");
const valorPalavra = (w) => {
  const x = limpa(w); if (!x) return null; const ps = x.split("-").filter(Boolean);
  if (ps.length === 2 && ps[0] === "oh" && ps[1] in UN) return { n: UN[ps[1]], oh: true };
  if (ps.length && ps.every((q) => q in UN)) return { n: ps.reduce((a, q) => a + UN[q], 0) };
  if (ps.length === 2 && ps[0] in UN && ["year", "member"].includes(ps[1])) return { n: UN[ps[0]] };
  if (x in MULT) return { mult: MULT[x] };
  if (x === "point") return { ponto: true };
  if (x === "half") return { frac: "half" };
  if (/^quarters?$/.test(x)) return { frac: "quarter" };
  if (x === "percent") return { pct: true };
  return null;
};
const valorGrupo = (g) => {
  if (g.some((x) => x.frac)) return { frac: g.find((x) => x.frac).frac };
  const ns = g.filter((x) => x.n !== undefined);
  // ano dito em dois pedaços: "nineteen forty", "twenty twenty-six", "nineteen oh-six"
  if (g.length === 2 && ns.length === 2 && g[0].n >= 10 && g[0].n <= 99 && (g[1].oh || (g[1].n >= 10 && g[1].n <= 99))) return { n: g[0].n * 100 + g[1].n, ano: true };
  let total = 0, cur = 0, dec = null;
  for (const x of g) {
    if (x.ponto) { dec = ""; continue; }
    if (x.n !== undefined) { if (dec !== null) dec += String(x.n); else cur += x.n; }
    else if (x.mult === 100) cur = (cur || 1) * 100;
    else if (x.mult) { total += (dec !== null ? parseFloat(`${cur}.${dec}`) : (cur || 1)) * x.mult; cur = 0; dec = null; }
  }
  if (dec !== null) cur = parseFloat(`${cur}.${dec}`);
  return { n: total + cur };
};
const ANTES_DE_FRACAO = ["million", "billion", "quarter", "half"];
const frasesNum = (de, ate) => {
  const ws = W.filter((w) => w.start >= de - 1e-9 && w.start < ate - 1e-9), out = [];
  for (let j = 0; j < ws.length; j++) {
    const v = valorPalavra(ws[j].w), aUm = limpa(ws[j].w) === "a" && ANTES_DE_FRACAO.includes(limpa(ws[j + 1]?.w));
    if (!(v && (v.n !== undefined || v.frac)) && !aUm) continue;
    let a = j;
    while (a > 0 && (QUALIF.has(limpa(ws[a - 1].w)) || (limpa(ws[a - 1].w) === "than" && limpa(ws[a - 2]?.w) === "more") || (limpa(ws[a - 1].w) === "to" && limpa(ws[a - 2]?.w) === "up"))) a--;
    if (a > 0 && ["than", "to"].includes(limpa(ws[a].w))) a--;
    const grupos = [[]]; let b = j;
    for (; b < ws.length; b++) {
      const x = limpa(ws[b].w), vb = valorPalavra(ws[b].w);
      if (vb && !vb.pct) grupos.at(-1).push(vb);
      else if (x === "a" && ANTES_DE_FRACAO.includes(limpa(ws[b + 1]?.w))) grupos.at(-1).push({ n: 1 });
      else if (x === "to" && grupos.at(-1).length && valorPalavra(ws[b + 1]?.w)?.n !== undefined) grupos.push([]);
      else if (!(vb?.pct || x === "dollars" || x === "miles")) break;
      if (/[,.;:?!]["”]?$/.test(ws[b].w)) { b++; break; } // a pontuação fecha a frase ("twenty seventeen, six to three")
    }
    out.push({ de: ws[a].start, frase: ws.slice(a, b).map((w) => w.w).join(" "), vals: grupos.filter((g) => g.length).map(valorGrupo) });
    j = b - 1;
  }
  return out;
};
// o objeto sem o que não é texto de tela: tempos ("291,46 s"), §, ids do dossiê, catálogo, datas de revisão, planos e cenas
const PT_NUM = { "três": 3, "dois": 2, "duas": 2, "nove": 9 };
const objetoLimpo = (t) => String(t || "")
  .replace(/\(?\b\d+,\d+ s\b\)?/g, " ").replace(/§\s?[\d.]+/g, " ").replace(/\b[a-z]{2,4}-\d+(\.\d+)*\b/g, " ")
  .replace(/\bASM [\d-]+/g, " ").replace(/\b\d{1,2}\/\d{1,2}\/(\d{4})\b/g, "$1").replace(/\b\d{1,2}\/\d{1,2}\b/g, " ")
  .replace(/\bplanos? \d+( e \d+)?/g, " ").replace(/\bs\d{2}\b/g, " ").replace(/\bp\. [\d-]+/g, " ")
  .replace(/(?<![\p{L}])(três|dois|duas|nove)(?![\p{L}])/giu, (m) => String(PT_NUM[m.toLowerCase()]));
const mostra = (obj, v) => {
  if (v.frac === "half") return /metade|\bhalf\b/i.test(obj);
  if (v.frac === "quarter") return /quarto|quarter/i.test(obj);
  if (v.n === undefined) return false;
  const c = v.n >= 1e6 ? [String(+(v.n / (v.n >= 1e9 ? 1e9 : 1e6)).toFixed(2))] : [String(v.n), ...(v.n >= 1000 && !v.ano ? [v.n.toLocaleString("en-US")] : [])];
  return c.some((x) => new RegExp(`(?<![\\d.,])${esc(x)}(?![\\d])`).test(obj));
};
const REGIME_TEXTO = new Set(["desenho", "dados", "mapa", "mapa3d"]);
// oitava revisão: a varredura das frases entre aspas vale também para a fala do modo citação, e uma fala se parte nas frases
// dela e nas interrupções do narrador ("This time," the statement against it said, "no price tag is attached."): cada parte
// entra quando a voz a diz e é medida à parte. A cláusula que diz que a frase não vai à tela (o "voted no" de s57) não se varre.
const REGIME_FALA = new Set([...REGIME_TEXTO, "citacao"]);
const NAO_VAI = /não vai (à tela|ao card)|fica só na voz|fora da tela/;
const partesDaFala = (frase, de, ate) => {
  const out = []; let d = de;
  for (const sent of String(frase).split(/(?<=[.!?])\s+/)) {
    let ws = sent.split(/\s+/).filter((w) => normTok(w).length);
    while (ws.length) {
      let achou = null, k = ws.length;
      for (; k > 0; k--) { achou = achaTodos(ws.slice(0, k).join(" "), d, ate); if (achou) break; }
      if (!achou) return out; // o resto não é dito no plano: mede-se o que a voz diz
      out.push({ texto: ws.slice(0, k).join(" "), ws: achou });
      d = achou.at(-1).start + 1e-3; ws = ws.slice(k);
    }
  }
  return out;
};
const varridos = [];
for (const s of S) (s._planos || []).forEach((p, i) => {
  const obj = objetoLimpo(p.objeto);
  const fraseNoObjeto = (f) => { const a = normTok(p.objeto).join(" "), b = normTok(f).join(" "); return b.length > 0 && ` ${a} `.includes(` ${b} `); };
  for (const f of frasesNum(p.de, p.ate)) {
    if (!f.vals.length || !(f.vals.every((v) => mostra(obj, v)) || fraseNoObjeto(f.frase))) continue;
    const noAr = r3(p.ate - f.de);
    varridos.push({ cena: s.id, plano: i + 1, frase: f.frase, em_s: f.de, ate_o_fim_do_plano_s: noAr, texto_no_ar: temTNA(p, f.de) });
    if (noAr < 2.0 - 1e-9 && !temTNA(p, f.de)) F(`${s.id} plano ${i + 1}: o objeto põe na tela o que a voz diz em "${f.frase}" (${f.de} s), a ${noAr} s do fim do plano; o texto entra quando a voz o diz e fica ≥ 2,0 s atravessando o plano seguinte da cena, ou declara o conflito (_texto_no_ar; sexta revisão)`);
  }
  if (REGIME_FALA.has(p.regime)) for (const cl of String(p.objeto || "").split(/;\s/)) {
    if (NAO_VAI.test(cl)) continue;
    for (const m of cl.matchAll(ASPAS)) for (const parte of partesDaFala(m[1], p.de, p.ate)) {
      const t0 = parte.ws[0].start, noAr = r3(p.ate - t0);
      varridos.push({ cena: s.id, plano: i + 1, frase: parte.texto, em_s: t0, ate_o_fim_do_plano_s: noAr, texto_no_ar: temTNA(p, t0) });
      if (noAr < 2.0 - 1e-9 && !temTNA(p, t0)) F(`${s.id} plano ${i + 1}: o texto "${parte.texto}"${parte.texto === m[1] ? "" : ` (parte de "${m[1].slice(0, 50)}")`} entra quando a voz o diz (${t0} s) e fica ${noAr} s até o fim do plano, sem _texto_no_ar (sexta revisão; a fala do modo citação e as partes de uma fala desde a oitava)`);
    }
  }
});
// oitava revisão: texto que se soma a um bloco ("se soma", "soma-se", "junta-se", "no mesmo bloco") diz em que palavra entra
// (verbo de entrada e a palavra entre aspas, dita no plano): aí as provas da trava medem o tempo no ar e o _texto_no_ar
const ADICAO = /(?<![\p{L}])(se soma|se somam|soma-se|somam-se|somando-se|se acrescenta|acrescenta-se|se junta|junta-se|(no|ao) mesmo bloco)(?![\p{L}])/u;
for (const s of S) (s._planos || []).forEach((p, i) => {
  for (const cl of String(p.objeto || "").split(/;\s/)) {
    if (!ADICAO.test(cl)) continue;
    const mv = TRAVA.exec(cl);
    const ok = mv && !NEG_TRAVA.test(cl) && [...cl.slice(mv.index).matchAll(ASPAS)].some((m) => achaTodos(m[1], p.de, p.ate));
    if (!ok) F(`${s.id} plano ${i + 1}: o objeto soma texto a um bloco ("${ADICAO.exec(cl)[0]}") sem dizer em que palavra ele entra (verbo de entrada e a palavra entre aspas, dita no plano; oitava revisão)`);
  }
});
// oitava revisão: o ano que o objeto põe na tela ("1880 na tela") e a voz da cena não diz entra "na palavra que o convoca"
// (_nota_texto_no_ar), e o objeto nomeia essa palavra (verbo de entrada e a palavra entre aspas, dita no plano), como s01
// ("approved") e s29 ("the no side won"); da palavra ao fim do plano vão ≥ 2,0 s, ou há _texto_no_ar (prova da trava)
for (const s of S) {
  const ditos = new Set(frasesNum(s.inSec, s.inSec + s.dur).flatMap((f) => f.vals.filter((v) => v.ano).map((v) => v.n)));
  (s._planos || []).forEach((p, i) => {
    for (const m of String(p.objeto || "").matchAll(/\b(1[89]\d\d|20\d\d) na tela\b/g)) {
      if (ditos.has(+m[1])) continue; // a voz o diz: a varredura mede na palavra que o diz
      const ok = String(p.objeto).split(/;\s/).some((cl) => cl.includes(`${m[1]} na tela`) && TRAVA.test(cl) && !NEG_TRAVA.test(cl) && [...cl.slice(TRAVA.exec(cl).index).matchAll(ASPAS)].some((q) => achaTodos(q[1], p.de, p.ate)));
      if (!ok) F(`${s.id} plano ${i + 1}: põe ${m[1]} na tela, que a voz da cena não diz, sem nomear a palavra que o convoca (verbo de entrada e a palavra entre aspas, na mesma cláusula; oitava revisão)`);
    }
  });
}
// oitava revisão: o objeto de um plano não põe na tela um número que a voz só diz num plano seguinte da mesma cena (a forma
// mais direta de texto antes da voz). Conta o objeto sem os parênteses e sem as cláusulas que dizem que o texto não vai à
// tela (ou que o mandam a outro plano: "sem ano na tela neste plano: o 1977 vai ao plano 2"); no plano de registro, só as
// cláusulas que falam do que vai "na tela" (o resto é a data da foto pedida).
const antecipados = [];
for (const s of S) {
  const falas = frasesNum(s.inSec, s.inSec + s.dur).filter((f) => f.vals.length && !/^one\W*$/i.test(f.frase));
  (s._planos || []).forEach((p, i) => {
    let o = String(p.objeto || ""); while (/\([^()]*\)/.test(o)) o = o.replace(/\([^()]*\)/g, " ");
    const cls = o.split(/;\s/).filter((cl) => !NAO_VAI.test(cl) && !/sem (o )?ano na tela|sem rótulo de ano|vai ao plano \d/.test(cl) && (!REGIME_REAL.has(p.regime) || /\bna tela\b/.test(cl)));
    const obj = objetoLimpo(cls.join("; "));
    for (const f of falas) {
      if (f.de < p.ate - 1e-9 || !f.vals.every((v) => mostra(obj, v))) continue;
      if (falas.some((g) => g.de < p.ate - 1e-9 && JSON.stringify(g.vals) === JSON.stringify(f.vals))) continue; // já dito
      const k = (s._planos || []).findIndex((q) => f.de >= q.de - 1e-9 && f.de < q.ate - 1e-9);
      antecipados.push(`${s.id} p${i + 1}→p${k + 1}`);
      F(`${s.id} plano ${i + 1}: o objeto põe na tela "${f.frase}", que a voz só diz em ${f.de} s, no plano ${k + 1}: nenhum texto ou número entra antes de a voz dizê-lo (oitava revisão)`);
    }
  });
}
// (b2) sétima revisão: a palavra de entrada que o objeto declara × o momento em que a voz diz o que entra. Em cada cláusula
// (entre ponto e vírgula) com verbo de entrada (TRAVA, sem negação) e a palavra de entrada entre aspas, dita no plano (a
// primeira depois do verbo), o que a cláusula põe na tela é o que vem antes do verbo: os números (a voz os diz por extenso:
// "six to three", "a million", "fifty-three percent"), as datas (pelo mês: "27/08/1974", "JANUARY 2017", ou "a data", que são
// as datas do objeto) e as frases entre aspas. Cada um tem de ser dito pela voz, na cena, até o fim da frase de entrada
// (senão entra antes da voz: o defeito da quinta), e, se a voz o diz neste plano, a entrada não vem mais de 1,0 s depois
// (senão entra atrasado: a data de s01 até a quinta). O que a voz não diz na cena (o 57% de s01, o placar de s29) não se mede.
const MESES = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const RE_MES_EN = new RegExp(`\\b(${MESES.join("|")})\\b(?:\\s+\\d{1,2},?)?\\s+(1[89]\\d\\d|20\\d\\d)\\b`, "gi");
const mesesDitos = (mes, de, ate) => W.filter((w) => w.start >= de - 1e-9 && w.start < ate - 1e-9 && limpa(w.w) === mes && (mes !== "may" || /^May/.test(w.w))).map((w) => w.start);
const vezesDitas = (frase, de, ate) => { const t = []; let d = de, r; while ((r = achaTodos(frase, d, ate))) { t.push(r[0].start); d = r[0].start + 1e-3; } return t; };
const entradasVoz = [];
for (const s of S) {
  const fimCena = s.inSec + s.dur, falas = frasesNum(s.inSec, fimCena);
  (s._planos || []).forEach((p, i) => {
    const datasObj = [...String(p.objeto || "").matchAll(/\b\d{1,2}\/(\d{1,2})\/(1[89]\d\d|20\d\d)\b/g)].map((m) => MESES[+m[1] - 1]).filter(Boolean);
    for (const cl of String(p.objeto || "").split(/;\s/)) {
      const mv = TRAVA.exec(cl); if (!mv || NEG_TRAVA.test(cl)) continue;
      let ent = null, fr = null;
      for (const m of cl.slice(mv.index).matchAll(ASPAS)) { ent = achaTodos(m[1], p.de, p.ate); if (ent) { fr = m[1]; break; } }
      if (!ent) continue; // a trava sem palavra dita no plano já reprova acima
      const tIn = ent[0].start, tFim = ent.at(-1).end ?? ent.at(-1).start;
      // o que entra: o que vem antes do verbo, e o que vem depois da palavra de entrada, sem os parênteses (tempos, fontes,
      // histórico de revisão) e sem as outras frases entre aspas (a trava de cima já as mede)
      const iAsp = cl.indexOf(fr, mv.index);
      let resto = iAsp >= 0 ? cl.slice(iAsp + fr.length + 1) : "";
      while (/\([^()]*\)/.test(resto)) resto = resto.replace(/\([^()]*\)/g, " ");
      let suj = `${cl.slice(0, mv.index)} ${resto.replace(ASPAS, " ")}`;
      const itens = [];
      // datas: a data é uma unidade, que a voz começa pelo mês (o ano dela não se mede à parte)
      const meses = [];
      suj = suj.replace(/\b\d{1,2}\/(\d{1,2})\/(1[89]\d\d|20\d\d)\b/g, (_, mo) => { if (MESES[+mo - 1]) meses.push(MESES[+mo - 1]); return " "; });
      suj = suj.replace(RE_MES_EN, (m, mes) => { meses.push(mes.toLowerCase()); return " "; });
      if (/\bdatas?\b/.test(suj)) meses.push(...datasObj);
      for (const mes of new Set(meses)) itens.push({ o: `a data (${mes})`, t: mesesDitos(mes, s.inSec, fimCena) });
      // frases entre aspas do que entra
      for (const m of suj.matchAll(ASPAS)) itens.push({ o: `"${m[1]}"`, t: vezesDitas(m[1], s.inSec, fimCena) });
      // números: as frases numéricas da voz na cena que o que entra mostra, agrupadas pelo valor
      const sujL = objetoLimpo(suj.replace(ASPAS, " ")), porValor = new Map();
      for (const f of falas) if (f.vals.length && !/^one\W*$/i.test(f.frase) && f.vals.every((v) => mostra(sujL, v))) { const k = JSON.stringify(f.vals); porValor.set(k, [...(porValor.get(k) || []), f]); }
      for (const fs of porValor.values()) itens.push({ o: `"${fs[0].frase}"`, t: fs.map((f) => f.de) });
      for (const it of itens) {
        if (!it.t.length) continue; // a voz não o diz na cena: entra na palavra que o convoca, e isso não se mede aqui
        const ate = it.t.filter((t) => t <= tFim + 0.01);
        entradasVoz.push({ cena: s.id, plano: i + 1, o_que_entra: it.o, palavra_de_entrada: fr, entra_s: tIn, voz_s: ate.length ? Math.max(...ate) : Math.min(...it.t) });
        if (!ate.length) F(`${s.id} plano ${i + 1}: ${it.o} entra em "${fr}" (${tIn} s), e a voz só diz isso em ${r3(Math.min(...it.t))} s, ${r3(Math.min(...it.t) - tIn)} s depois da entrada (sétima revisão: nenhum texto ou número entra antes de a voz dizê-lo)`);
        else { const tv = Math.max(...ate); if (tv >= p.de - 1e-9 && tIn - tv > 1.0 + 1e-9) F(`${s.id} plano ${i + 1}: a voz diz ${it.o} em ${tv} s, e isso só entra em "${fr}" (${tIn} s), ${r3(tIn - tv)} s depois (sétima revisão: a entrada vem com a voz, no máximo 1,0 s depois)`); }
      }
    }
  });
}
// (c) cada `_texto_no_ar`: a palavra é dita no plano, em `de`; sem conflito, fica ≥ 2,0 s, dentro da cena, e `sobre` lista
// exatamente os planos seguintes que o texto atravessa; com conflito, a cena corta antes de 2,0 s, o texto vai até o corte, e
// o plano está na pendência do regente-de-imagem (que só cita planos com conflito declarado)
const PEND_REGENTE = (E._decisoes_pendentes || []).find((d) => /^PARA O REGENTE-DE-IMAGEM/.test(d)) || "";
const D2 = { travessias: [], conflitos: [] };
for (const s of S) {
  const pl = s._planos || [], fimCena = r3(s.inSec + s.dur);
  pl.forEach((p, i) => {
    const tna = p._texto_no_ar; if (tna === undefined) return;
    if (!Array.isArray(tna) || !tna.length || tna.some((x) => !x || typeof x !== "object")) { F(`${s.id} plano ${i + 1}: _texto_no_ar tem de ser uma lista de {texto, palavra, de, ate, sobre} (sexta revisão)`); return; }
    for (const x of tna) {
      const ws = achaTodos(x.palavra, p.de, p.ate);
      if (!ws || Math.abs(ws[0].start - x.de) > 1e-6) { F(`${s.id} plano ${i + 1}: _texto_no_ar "${x.texto}": a palavra "${x.palavra}" não começa em ${x.de} s dentro do plano`); continue; }
      if (x.conflito) {
        if (fimCena - x.de >= 2.0 - 1e-9) F(`${s.id} plano ${i + 1}: _texto_no_ar "${x.texto}" declara conflito, e da palavra ao fim da cena há ${r3(fimCena - x.de)} s: cabe atravessar o plano seguinte`);
        if (Math.abs(x.ate - fimCena) > 1e-3) F(`${s.id} plano ${i + 1}: o conflito de _texto_no_ar vai até ${x.ate}, e a cena corta em ${fimCena}`);
        if (!new RegExp(`\\b${s.id} plano ${i + 1}\\b`).test(PEND_REGENTE)) F(`${s.id} plano ${i + 1}: o conflito do texto no ar não está na pendência PARA O REGENTE-DE-IMAGEM (_decisoes_pendentes)`);
        D2.conflitos.push(`${s.id} p${i + 1} (${r3(fimCena - x.de)} s)`);
      } else {
        if (x.ate - x.de < 2.0 - 1e-6) F(`${s.id} plano ${i + 1}: _texto_no_ar "${x.texto}" fica ${r3(x.ate - x.de)} s no ar, abaixo de 2,0 s, sem conflito declarado`);
        if (x.ate > fimCena + 1e-6) F(`${s.id} plano ${i + 1}: _texto_no_ar "${x.texto}" passa do fim da cena (${fimCena} s): o corte para a cena seguinte é conflito, não travessia`);
        const devidos = pl.map((q, k) => k).filter((k) => k > i && pl[k].de < x.ate - 1e-9).map((k) => `plano ${k + 1}`);
        const ditos = [].concat(x.sobre || []);
        if (JSON.stringify(devidos) !== JSON.stringify(ditos)) F(`${s.id} plano ${i + 1}: _texto_no_ar "${x.texto}" atravessa ${devidos.join(", ") || "nenhum plano"}, e "sobre" diz ${ditos.join(", ") || "nada"}`);
        // sétima revisão: texto que atravessa um plano com o card de outra pessoa diz, em nota, que sai com a atribuição (s25)
        for (const d of devidos) { const q = pl[+d.replace("plano ", "") - 1]; if (q._pessoa && q._pessoa !== p._pessoa && !/atribuição/.test(x.nota || "")) F(`${s.id} plano ${i + 1}: _texto_no_ar "${x.texto}" atravessa ${d}, o card de ${q._pessoa}, sem nota de que sai com a atribuição a quem o disse (sétima revisão)`); }
        if (devidos.length) D2.travessias.push(`${s.id} p${i + 1}→${devidos.map((d) => d.replace("plano ", "p")).join(",")}`);
      }
    }
  });
}
for (const m of PEND_REGENTE.matchAll(/\b(s\d{2}) plano (\d+)\b/g)) { const p = S.find((x) => x.id === m[1])?._planos?.[+m[2] - 1]; if (!p || !listaTNA(p).some((x) => x && x.conflito)) F(`a pendência do regente cita ${m[1]} plano ${m[2]}, que não declara conflito em _texto_no_ar`); }
// o mesmo termo de busca em duas cenas só com a repetição declarada
const porTermo = new Map();
for (const s of S) for (const t of new Set(s.midia_termos || [])) porTermo.set(t, [...(porTermo.get(t) || []), s]);
for (const [t, ss] of porTermo) if (ss.length > 1) {
  const declarado = ss.every((a) => ss.some((b) => b !== a && (String(a._repeticao_intencional || "").includes(b.id) || String(b._repeticao_intencional || "").includes(a.id))));
  if (!declarado) F(`o termo "${t}" está em ${ss.map((x) => x.id).join(" e ")} sem repetição declarada (ofício §3, §11b)`);
}
// o que veio do site da Divisão de Eleições (lido de cópia arquivada) leva o aviso. Nona revisão (Lucas, 27/09/2026:
// a cópia arquivada vale como fonte, com a data): o aviso diz que a cópia vale e traz, para cada fonte que cita, a data
// da captura do `url_acessada` do dossiê (web/<AAAAMMDD…>), no formato DD/MM/AAAA; nada de NÃO CONFERIDO nem de pendente
const DIVISAO = /doc-(0[5-9]|1\d|20|28)\.|mec-0[5-8]\.|elections\.alaska\.gov|folheto (oficial )?de (19[6-9]\d|200\d)|boletim/i;
const CAPTURA = new Map();
(function walkF(o) {
  if (Array.isArray(o)) { o.forEach(walkF); return; }
  if (!o || typeof o !== "object") return;
  const m = /web\.archive\.org\/web\/(\d{4})(\d{2})(\d{2})/.exec(String(o.url_acessada || ""));
  if (m && o.id) CAPTURA.set(o.id, `${m[3]}/${m[2]}/${m[1]}`);
  Object.values(o).forEach(walkF);
})(FUND.fontes);
const arquivadas = [];
for (const s of S) {
  const txt = JSON.stringify({ n: s.needs, d: s._documentos, c: s._citacao, p: s._pessoas, m: s.midia_necessidade, a: s._fonte_arquivada });
  if (DIVISAO.test(txt)) {
    arquivadas.push(s.id);
    const fa = String(s._fonte_arquivada || "");
    if (!fa.startsWith("CÓPIA ARQUIVADA — VALE COMO FONTE (Lucas, 27/09/2026")) F(`${s.id}: usa a Divisão de Eleições (boletim ou folheto) e não leva o aviso da cópia arquivada em _fonte_arquivada (que vale como fonte, Lucas, 27/09/2026)`);
    if (/NÃO CONFERID|PENDENTE/.test(fa)) F(`${s.id}: _fonte_arquivada ainda chama a cópia arquivada de não conferida ou pendente; o Lucas decidiu em 27/09 que ela vale como fonte`);
    const ids = [...new Set([...fa.matchAll(/\b((?:doc|mec)-\d{2})\.\d/g)].map((m) => m[1]))];
    if (!/Captura: /.test(fa)) F(`${s.id}: _fonte_arquivada não traz a data da captura da cópia (CLAUDE.md, "A marca")`);
    for (const id of ids) {
      if (!CAPTURA.has(id)) F(`${s.id}: _fonte_arquivada cita ${id}, que o fundamento.json não dá como lido no web.archive.org`);
      else if (!fa.includes(`${id}, ${CAPTURA.get(id)}`)) F(`${s.id}: _fonte_arquivada cita ${id} sem a data da captura dele (${CAPTURA.get(id)}, pelo url_acessada)`);
    }
  }
  // needs.dados só com pedido de dado: o aviso vai em _fonte_arquivada, a figura em _figura, instrução fora
  for (const d of s.needs.dados || []) if (/^(CÓPIA ARQUIVADA|Figura semântica|OPCIONAL)|para desenhar/i.test(d)) F(`${s.id}: needs.dados tem item que não é pedido de dado ("${d.slice(0, 50)}…")`);
}
// o despacho do research: os retratos só ao pesquisa-pessoas; todo plano de registro com termo na lista do pesquisa-imagens
const DR = E._despacho_research || {};
const naLista = new Set((DR.cenas || []).flatMap((c) => c.planos.map((p) => `${c.cena}#${p.n}`)));
const nosRetratos = new Set((DR.retratos || []).flatMap((r) => r.cenas.map((x) => x.replace(/ plano /, "#"))));
const nosDocumentos = new Set([...((DR.documentos || {}).pecas || []).flatMap((p) => p.cenas), ...((DR.documentos || {}).materias || [])]
  .flatMap((c) => (c.planos || []).map((x) => `${c.cena}#${x.n}`)));
for (const s of S) (s._planos || []).forEach((p, i) => {
  const k = `${s.id}#${i + 1}`;
  if (p._pedido_a === "pesquisa-pessoas") {
    if (naLista.has(k)) F(`${s.id} plano ${i + 1}: retrato na lista do pesquisa-imagens (é do pesquisa-pessoas)`);
    if (!nosRetratos.has(k)) F(`${s.id} plano ${i + 1}: retrato fora de _despacho_research › retratos`);
    if (!(s._pessoas || []).some((x) => x.nome_na_tela === p._pessoa)) F(`${s.id} plano ${i + 1}: _pessoa "${p._pessoa}" sem entrada em _pessoas`);
  } else if (p._pedido_a === "pesquisa-documentos") {
    // quarta revisão: peça impressa (as mascotes de s26) tem um dono só, o pesquisa-documentos
    if (naLista.has(k)) F(`${s.id} plano ${i + 1}: peça do pesquisa-documentos também na lista do pesquisa-imagens (dois donos para o mesmo plano)`);
    if (!nosDocumentos.has(k)) F(`${s.id} plano ${i + 1}: _pedido_a pesquisa-documentos e o plano não está em _despacho_research › documentos`);
  } else if (p._pedido_a) F(`${s.id} plano ${i + 1}: _pedido_a "${p._pedido_a}" desconhecido`);
  else if ((p.midia_termos || []).length && !naLista.has(k)) F(`${s.id} plano ${i + 1}: plano com termo fora de _despacho_research › cenas`);
});
for (const k of naLista) { const [id, n] = k.split("#"); const p = S.find((x) => x.id === id)?._planos?.[+n - 1]; if (!p || !(p.midia_termos || []).length) F(`_despacho_research › cenas: ${k} não é plano com termo`); }
// quinta revisão: a lista `cenas` é uma segunda cópia do plano (ofício §7.1): modo, midia, tempo, regime e termos batem com o espelho
for (const c of DR.cenas || []) {
  const s = S.find((x) => x.id === c.cena);
  if (!s) { F(`_despacho_research › cenas: ${c.cena} não existe`); continue; }
  if ("modo" in c && c.modo !== s.modo) F(`_despacho_research › cenas: ${c.cena} com modo ${c.modo}; no espelho, ${s.modo}`);
  if ("midia" in c && c.midia !== s.midia) F(`_despacho_research › cenas: ${c.cena} com midia ${c.midia}; no espelho, ${s.midia}`);
  for (const x of c.planos || []) {
    const pl = s._planos?.[x.n - 1];
    if (!pl) { F(`_despacho_research › cenas: ${c.cena} plano ${x.n} não existe`); continue; }
    if (Math.abs(pl.de - x.de) > 1e-6 || Math.abs(pl.ate - x.ate) > 1e-6) F(`_despacho_research › cenas: ${c.cena} plano ${x.n} de ${x.de} a ${x.ate}; no espelho, de ${pl.de} a ${pl.ate}`);
    if (pl.regime !== x.regime) F(`_despacho_research › cenas: ${c.cena} plano ${x.n} com regime ${x.regime}; no espelho, ${pl.regime}`);
    if (JSON.stringify(x.midia_termos || []) !== JSON.stringify(pl.midia_termos || [])) F(`_despacho_research › cenas: ${c.cena} plano ${x.n} com termos diferentes dos do espelho`);
  }
}
// quinta revisão: peça que o pesquisa-documentos caça (`caca`) não tem plano na lista do pesquisa-imagens, dependa ou não
// de `_pedido_a`: os planos da peça e os que o texto de `caca` nomeia ("sNN (planos 1 e 3)")
for (const p of (DR.documentos || {}).pecas || []) if (String(p.caca || "").trim()) {
  const cacados = new Set(p.cenas.flatMap((c) => (c.planos || []).map((x) => `${c.cena}#${x.n}`)));
  for (const m of String(p.caca).matchAll(/\b(s\d{2})\s*\(planos?\s+([\d\s,e]+)\)/g)) for (const n of m[2].match(/\d+/g)) cacados.add(`${m[1]}#${n}`);
  for (const k of cacados) if (naLista.has(k)) F(`${k.replace("#", " plano ")}: a peça "${p.peca.slice(0, 50)}…" é caçada pelo pesquisa-documentos (caca) e o plano também está na lista do pesquisa-imagens (dois donos)`);
}
// a cauda é fundo provisório renderizado, nunca "não se renderiza"
{ const c = S.at(-1); if (!/FUNDO PROVISÓRIO/.test(c.motivo || "") || /não se renderiza|não desenhar/i.test(JSON.stringify(c))) F(`${c.id}: a cauda tem de ser fundo provisório renderizado (roupas do editor-de-arte §7, do regente e do qc-visual §6)`); }
// país no mapa: o porquê em _nota_logos. Décima primeira revisão (Lucas, 27/09/2026: "Só o nome escrito (Recomendado)";
// identidade §6): o nome escrito, sem bandeira; a _nota_logos diz a regra, e needs.logos fica vazio (a prova de needs.logos, abaixo)
for (const s of S) if ((s.needs.geo || []).some((g) => g.tipo === "pais") && !(/sem bandeira/.test(s._nota_logos || "") && /identidade §6/.test(s._nota_logos || ""))) F(`${s.id}: país no mapa sem a _nota_logos da regra (o nome escrito, sem bandeira; identidade §6)`);
// a cadeia referencial: cada cena que abre, paga ou fecha uma promessa diz isso em _cadeia
for (const c of E._cadeia_referencial || []) for (const papel of ["abre", "paga", "fecha"]) for (const id of [].concat(c[papel] || [])) {
  const s = S.find((x) => x.id === id);
  if (!s) F(`_cadeia_referencial: ${id} não existe`);
  else if (!new RegExp(`${papel.toUpperCase()} ${c.promessa[0]}\\b`).test(s._cadeia || "")) F(`${id}: ${papel} a promessa ${c.promessa[0]} e _cadeia não diz`);
}

// ── 6b · terceira revisão (27/09) ──
// a cadeia no sentido inverso: todo "ABRE|PAGA|FECHA X" da _cadeia de uma cena está em _cadeia_referencial
const REF = new Set();
for (const c of E._cadeia_referencial || []) for (const papel of ["abre", "paga", "fecha"]) for (const id of [].concat(c[papel] || [])) REF.add(`${id}|${papel.toUpperCase()} ${c.promessa[0]}`);
for (const s of S) for (const m of String(s._cadeia || "").matchAll(/\b(ABRE|PAGA|FECHA) ([A-E])\b/g)) if (!REF.has(`${s.id}|${m[1]} ${m[2]}`)) F(`${s.id}: _cadeia diz "${m[1]} ${m[2]}" e _cadeia_referencial não`);
// o motivo da cena que ABRE uma promessa, quando diz onde ela é paga, cita exatamente paga ∪ fecha (faixas "s19–s20" expandidas)
const expande = (txt) => { const ids = new Set(); for (const m of txt.matchAll(/\bs(\d{2})(?:[–-]s(\d{2}))?\b/g)) { const a = +m[1], b = m[2] ? +m[2] : a; for (let k = a; k <= b; k++) ids.add(`s${String(k).padStart(2, "0")}`); } return ids; };
for (const c of E._cadeia_referencial || []) for (const id of [].concat(c.abre || [])) {
  const X = c.promessa[0];
  const m = new RegExp(`ABRE a promessa ${X}\\b([\\s\\S]*?)(?=ABRE a promessa|\\.\\s|\\.$|$)`).exec(S.find((x) => x.id === id)?.motivo || "");
  if (!m || !/paga em/.test(m[1])) continue;
  const citados = expande(m[1]), devidos = new Set([...(c.paga || []), ...(c.fecha || [])]);
  const falta = [...devidos].filter((x) => !citados.has(x)), sobra = [...citados].filter((x) => !devidos.has(x));
  if (falta.length || sobra.length) F(`${id}: o motivo diz onde a promessa ${X} é paga e fechada, e não bate com _cadeia_referencial (falta ${falta.join(", ") || "—"}; sobra ${sobra.join(", ") || "—"})`);
}
// candidatas a showpiece, pela roupa do diretor-de-arte §2 inteira: a abertura (a cena que abre em 0), toda cena que
// PAGA (contrato §2) e o fecho (toda cena que FECHA); a cauda não; _cadeia e _candidatas_a_showpiece dizem o mesmo
const cand = (E._candidatas_a_showpiece || []).map((x) => ({ id: /^s\d+/.exec(x)?.[0], ind: /INDICAÇÃO DO MONTADOR/.test(x) }));
for (const s of S) {
  const c = String(s._cadeia || ""), marcada = /candidata a showpiece/.test(c), na = cand.find((x) => x.id === s.id);
  if (/\bPAGA [A-E]\b/.test(c) && !marcada) F(`${s.id}: paga uma promessa e a _cadeia não a marca como candidata a showpiece (contrato do montador §2)`);
  if (/\bFECHA [A-E]\b/.test(c) && !marcada) F(`${s.id}: fecha uma promessa (o fecho) e a _cadeia não a marca como candidata a showpiece (roupa do diretor-de-arte §2)`);
  if (s === S[0] && !marcada) F(`${s.id}: é a abertura e a _cadeia não a marca como candidata a showpiece (roupa do diretor-de-arte §2)`);
  if (s.id === ultimaId && (marcada || na)) F(`${s.id}: a cauda não é candidata a showpiece (fundo provisório)`);
  if (marcada !== !!na) F(`${s.id}: candidata a showpiece na _cadeia e em _candidatas_a_showpiece não batem`);
  if (na && /indicação do montador/.test(c) !== na.ind) F(`${s.id}: a indicação do montador diverge entre _cadeia e _candidatas_a_showpiece`);
}
if (!/abertura/.test(E._nota_showpiece || "") || !/fecho/.test(E._nota_showpiece || "") || !/paga/.test(E._nota_showpiece || "")) F("_nota_showpiece não cita os três critérios da roupa do diretor-de-arte §2 (a abertura, as cenas que pagam e o fecho)");
// s44: o corredor do Taku sai de Juneau (FSEIS 2018, p. 2-2), nunca de Cascade Point nem do fim da estrada
const textos = [];
(function walk(o, p) { if (typeof o === "string") textos.push([p, o]); else if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) walk(v, `${p}.${k}`); })(E, "espelho");
for (const [p, t] of textos) for (const cl of t.split(/;\s|\.\s|\n/)) {
  const m = /Taku([^;.]{0,80}?)\b(a partir|partem|parte|saem|sai)\s+d[oae]s?\s+(fim da estrada|fim dela|Cascade Point)/.exec(cl);
  if (m && !/\b(nunca|não)$/.test(m[1].trim())) F(`${p}: põe a origem do corredor do Taku em Cascade Point ou no fim da estrada ("${cl.slice(0, 90)}…")`);
  if (/\b(os dois corredores|os corredores)\b[^;.]*\b(partem|a partir d)/i.test(cl)) F(`${p}: faz os dois corredores partirem do mesmo ponto ("${cl.slice(0, 90)}…"); o do Taku sai de Juneau`);
}
for (const s of S) for (const g of s.needs.geo || []) if (g.id === "cascade-point" && /corredores/.test(g.rotulo || "")) F(`${s.id}: o rótulo de cascade-point fala em corredores`);
{ const s44 = S.find((x) => x.id === "s44"); const p3 = s44?._planos?.find((p) => /corredores/.test(p.objeto)); if (s44 && (!p3 || !/Taku[^;]*Juneau/.test(p3.objeto))) F("s44: o plano dos corredores não diz que o do Taku sai de Juneau"); }
// quarta revisão: o Taku em qualquer ordem. Toda frase (entre ponto, ponto e vírgula ou quebra de linha) que cite o Taku
// e Cascade Point ou o fim da estrada, fora de `_geografia` e sem negação ("não", "nunca", "nem"), reprova. Limite: frase
// com negação passa, e duas frases seguidas não se leem juntas.
const NEGA = /(^|[\s(,—])(não|nunca|nem)(?=[\s,:;)]|$)/;
for (const [p, t] of textos) if (!/\._geografia\b/.test(p)) for (const cl of t.split(/;\s|\.\s|\n/))
  if (/Taku/.test(cl) && /Cascade Point|fim da estrada|fim dela/.test(cl) && !NEGA.test(cl)) F(`${p}: cita o Taku e Cascade Point (ou o fim da estrada) na mesma frase, sem negação ("${cl.slice(0, 90)}…"); o do Taku sai de Juneau`);
// quarta revisão: o corredor do Taku segue o Taku Inlet (FSEIS 2018, p. 2-2); a reta do ponto de Juneau à foz corre por terra
{ const s44 = S.find((x) => x.id === "s44"); const p3 = s44?._planos?.find((p) => /corredores/.test(p.objeto));
  // décima primeira revisão: o Taku Inlet é o ponto do GNIS (taku-inlet-gnis): o contorno não existe em nenhuma fonte (research-geo.md §2)
  if (s44 && !(s44.needs.geo || []).some((g) => /^taku-inlet\b/.test(g.id))) F("s44: o corredor do Taku segue o Taku Inlet (FSEIS 2018, p. 2-2) e needs.geo não pede o Taku Inlet (taku-inlet ou taku-inlet-gnis)");
  if (p3 && !/Taku Inlet/.test(p3.objeto)) F("s44: o plano dos corredores não diz que o do Taku segue o Taku Inlet");
  // quinta revisão: sem GeoJSON do corredor, ele não se traçava (mapista §6c), e os corredores entravam como seta, até a decisão.
  // Décima primeira revisão (Lucas, 27/09/2026: "Sim, tracejada e com aviso (Recomendado)"; identidade §6, "Rota que nunca foi
  // construída"): esquema tracejado pelo texto da fonte, com o aviso Approximate route, sem decalcar a figura do estudo de 2018
  if (p3 && !(/esquema tracejado/.test(p3.objeto) && /Approximate route/.test(p3.objeto) && /identidade §6/.test(p3.objeto) && /figura do estudo/.test(p3.objeto))) F("s44: o plano dos corredores não diz o esquema tracejado pelo texto da fonte, com o aviso Approximate route, sem decalcar a figura do estudo (identidade §6)"); }
// quinta revisão: plano de mapa não manda traçar corredor, caminho ou rota sem geometria (mapista §6c: "Não há geometria
// publicada? Não desenhe a linha"). Frase (entre ponto e vírgula, ponto ou quebra de linha) que cita corredor, caminho ou
// rota com traçar, desenhar, linha ou "segue ao longo", sem negação ("não", "nunca", "nem", "sem", "nenhum"), reprova;
// e as instruções da quarta revisão ("Se a arte não traçar", "caminho pela água") não voltam, fora de `_geografia`.
const NEGA_TRACO = /(^|[\s(,—:])(não|nunca|nem|sem|nenhum|nenhuma)(?=[\s,:;)]|$)/;
for (const s of S) (s._planos || []).forEach((p, i) => {
  if (!REGIME_MAPA.has(p.regime)) return;
  for (const cl of String(p.objeto || "").split(/;\s|\.\s|\n/))
    if (/\b(corredor|corredores|caminho|rota|rotas)\b/.test(cl) && /\b(traç\w*|desenh\w*|linha|segue ao longo)\b/.test(cl) && !NEGA_TRACO.test(cl) && !(/\besquema\b/.test(cl) && /tracejad/.test(cl))) F(`${s.id} plano ${i + 1}: manda traçar corredor, caminho ou rota ("${cl.slice(0, 90)}…"); sem GeoJSON, só o esquema tracejado da identidade §6 (rota que nunca foi construída), ou seta, halo ou rótulo (mapista §6c)`);
});
// décima primeira revisão: o esquema da rota que nunca foi construída (identidade §6) mora em `_esquema` da cena: a regra, e,
// para cada rota, o plano (ou os planos), o ponto de partida (um id de needs.geo da cena), a fonte entre aspas e, se o ponto
// não está em disco, o que o plano faz sem ele (`sem_o_ponto`); todo plano que o esquema cita é mapa e diz o aviso Approximate
// route, e todo plano de mapa que cita o esquema tracejado está numa cena com `_esquema`
let esquemas = 0;
for (const s of S) {
  const es = s._esquema, cita = (s._planos || []).some((p) => REGIME_MAPA.has(p.regime) && /esquema tracejado/.test(p.objeto));
  if (cita && !es) F(`${s.id}: plano de mapa com esquema tracejado, e a cena não tem _esquema (identidade §6)`);
  if (!es) continue;
  if (!/Approximate route/.test(es.regra || "") || !/identidade §6/.test(es.regra || "")) F(`${s.id}: _esquema.regra não diz o aviso Approximate route e a identidade §6`);
  for (const [k, r] of Object.entries(es)) {
    if (k === "regra") continue;
    esquemas++;
    const g = (s.needs.geo || []).find((x) => x.id === r.parte_de);
    if (!g) F(`${s.id}: _esquema.${k} parte de "${r.parte_de}", que não está em needs.geo da cena`);
    else if (g._existe !== true && !String(r.sem_o_ponto || "").trim()) F(`${s.id}: _esquema.${k} parte de ${r.parte_de}, que não está em disco, e não diz o que o plano faz sem ele (sem_o_ponto)`);
    if (!/["“]/.test(r.fonte || "")) F(`${s.id}: _esquema.${k} sem o texto da fonte entre aspas`);
    const ns = [].concat(r.plano ?? r.planos ?? []);
    if (!ns.length) F(`${s.id}: _esquema.${k} não diz o plano`);
    for (const n of ns) { const p = s._planos?.[n - 1]; if (!p || !REGIME_MAPA.has(p.regime) || !/Approximate route/.test(p.objeto)) F(`${s.id}: _esquema.${k} cita o plano ${n}, que não é mapa com o aviso Approximate route no objeto`); }
  }
}
for (const [p, t] of textos) if (!/\._geografia\b|\._revisao$/.test(p) && /Se a arte não traçar|caminho pela água/.test(t)) F(`${p}: manda ou cogita traçar o caminho do Taku pela água ("Se a arte não traçar" / "caminho pela água"); sem GeoJSON não se traça (mapista §6c)`);
// quarta revisão: a malha continental chega ao panhandle (Haines e Skagway, mec-01.8); nenhum pedido diz que ela para antes dele
for (const [p, t] of textos) if (/\b(para|parava|termina|acaba)\s+antes do panhandle/.test(t)) F(`${p}: diz que a malha para antes do panhandle; ela chega a Haines e Skagway pelo Canadá (mec-01.8)`);
// quarta revisão: Cascade Point é o fim da estrada (o trecho desde Echo Cove é de cascalho, FSEIS p. 1-8), não o fim do asfalto
for (const [p, t] of textos) if (/fim do asfalto|asfalto que acaba/.test(t)) F(`${p}: fala do fim do asfalto; o marco é o fim da estrada, em Cascade Point (cascalho desde Echo Cove, FSEIS 2018, p. 1-8)`);
// quinta revisão: os achados de fato desta rodada não voltam. (1) "South Klondike" não está no dossiê nem no FSEIS: a
// Klondike Highway liga Skagway à Alaska Highway perto de Whitehorse (mec-01.8). (2) Os US$ 680 milhões são a estimativa
// do estudo de 2018 para a rota escolhida em 2006 (doc-21.7, evt-23.6), não um orçamento de 2006 (fora de aspas). (3) O
// anúncio de Walker foi um comunicado à imprensa (evt-23.9), e s55 não cogita entrevista coletiva. (4) O primeiro anúncio
// da Football Fannie vem com o jornal e a página da lista de fontes da coluna (Juneau Empire, 8/10/1982, p. 7).
const semAspas = (t) => t.replace(/["“][^"”]*["”]/g, "\"…\"");
for (const [p, t] of textos) {
  if (/South Klondike/.test(semAspas(t))) F(`${p}: "South Klondike" não tem fonte; a Klondike Highway liga Skagway à Alaska Highway perto de Whitehorse (mec-01.8)`);
  if (/\b(estrada|rota|versão) (de|escolhida em) 2006,? orçada/.test(semAspas(t))) F(`${p}: prende a 2006 o orçamento de cerca de US$ 680 milhões, que é a estimativa do estudo de 2018 (doc-21.7)`);
}
{ const s55 = S.find((x) => x.id === "s55"); if (s55 && (/entrevista coletiva/.test(s55.motivo || "") || !/press release/.test(s55.motivo || ""))) F("s55: o anúncio de 15/12/2016 foi um comunicado à imprensa (evt-23.9, \"a press release dated December 15, 2016\"); o motivo não cogita entrevista coletiva"); }
{ const s28 = S.find((x) => x.id === "s28"), pc = ((DR.documentos || {}).pecas || []).find((x) => /^peças de campanha/.test(x.peca));
  if (s28 && !/Juneau Empire, 8\/10\/1982, p\. 7/.test(JSON.stringify(s28._documentos || []))) F("s28: _documentos não dá o jornal e a página do primeiro anúncio (Juneau Empire, 8/10/1982, p. 7, pela lista de fontes da coluna)");
  if (pc && (!/Juneau Empire, 8\/10\/1982, p\. 7/.test(pc.peca) || !/21\/10\/1982/.test(pc.pistas || ""))) F("_despacho_research › documentos: a peça de campanha não dá o primeiro anúncio com o jornal e a página, ou não separa as imagens da coluna (ADN, 21/10 e 18/10/1982) como outras peças"); }
// quinta revisão: o verbatim tem a pontuação da fonte; nenhuma parte termina em vírgula, ponto e vírgula ou dois-pontos
// (é a pausa da voz: "for me," em s57, "…to Willow," em s18)
for (const s of S) if (s._citacao) for (const v of [].concat(s._citacao.verbatim)) if (/[,;:]\s*$/.test(v)) F(`${s.id}: o verbatim "${v.slice(-40)}" termina com a pontuação da voz, que a fonte não tem`);
// quarta revisão: a declaração de 1978 (s18) é assinada (roteiro-editor.md, f-033); o nome não vai à tela, e ela não é "sem autor"
{ const s18 = S.find((x) => x.id === "s18"); if (s18 && (!s18._citacao?.assinatura || /sem autor/.test(JSON.stringify(s18)))) F("s18: a declaração de 1978 é assinada por Frank Harris (f-033); falta _citacao.assinatura ou algum texto diz \"sem autor\""); }
// quarta revisão: _citacao.palavras é a contagem do verbatim
for (const s of S) if (s._citacao) {
  const n = [].concat(s._citacao.verbatim).join(" ").trim().split(/\s+/).length;
  if (s._citacao.palavras !== n) F(`${s.id}: _citacao.palavras ${s._citacao.palavras}; o verbatim tem ${n}`);
  for (const m of String(s.motivo || "").matchAll(/(?<!teto de |até )\b(\d+) palavras/g)) if (+m[1] !== n) F(`${s.id}: o motivo diz ${m[1]} palavras; o verbatim tem ${n}`);
}
// sexta revisão (decisão do Claude central, 27/09): a "regra do crédito" da quarta e da quinta revisões (o ano da tela é o
// do fato, e a data da foto vai no crédito) afrouxava a identidade §6 ("Imagem 'ilustrativa' de outro evento ou de outro
// ano não entra") e saiu. (a) Nenhum texto a usa, fora o histórico de `_revisao` (a pergunta ao Lucas, que a citava, saiu
// na nona revisão: ele respondeu que não, e sem foto do ano o plano vira mapa ou desenho).
const REGRA_CREDITO = /data d[ae] (cada )?foto[^.;]{0,60}\b(vai|vão|iria|fica)\b[^.;]{0,20}\bno crédito|data (real )?(dela )?no crédito|regra do crédito|regra de s0[69]\b|não (como )?a data da foto|o ano da tela é o do fato/i;
for (const [p, t] of textos) if (!/\._revisao$/.test(p) && REGRA_CREDITO.test(t)) F(`${p}: usa a regra do crédito ("${REGRA_CREDITO.exec(t)[0]}"), que afrouxa a identidade §6 e saiu na sexta revisão`);
// oitava revisão: a mesma regra com outras palavras. (a') A data ou o ano da foto separados do ano do fato ("o ano da foto",
// "a data real", a data "na legenda" ou "na procedência"), fora do histórico. (a'') Cláusula que
// aceita foto ("serve", "pode ser", "aceita"…, sem negação logo antes) com um ano que não é o do fato: os anos que os objetos
// dos planos de registro da cena dão, com os anos de dentro de um intervalo ("de 1900 a 1906", "1939–1940").
const CREDITO_OUTRAS = /\b(ano|data) da foto\b|\bdata real\b|\b(data|ano)\b[^.;]{0,30}\b(na|no) (legenda|procedência|metadado|rodapé)\b/i;
for (const [p, t] of textos) if (!/\._revisao$/.test(p) && CREDITO_OUTRAS.test(t)) F(`${p}: separa a data da foto do ano do fato ("${CREDITO_OUTRAS.exec(t)[0]}"): é a regra do crédito com outras palavras; foto de outro ano só entra com o aviso do ano na tela, nunca com a data escondida no crédito ou na legenda (identidade §6; oitava revisão; a mensagem, décima primeira)`);
// (b) plano de registro que não é B-roll de hoje pede foto do tempo do fato: nenhum termo pede a década; e, se algum termo
// pede ano, o objeto diz o ano (ou os extremos do intervalo) do fato, e todo termo pede um ano exato que o objeto dá.
// (c) "sem rótulo de ano" só vale para B-roll de hoje (o objeto diz "de hoje"), que não afirma fato datado (s33, s40, s52).
const anosDe = (t) => new Set([...String(t).matchAll(/(?<!anos )\b(1[89]\d\d|20[0-2]\d)(?!s)\b/g)].map((m) => +m[1]));
for (const s of S) (s._planos || []).forEach((p, i) => {
  if (!REGIME_REAL.has(p.regime) || p._pedido_a) return;
  const hoje = /\bde hoje\b/.test(p.objeto), termos = p.midia_termos || [];
  if (/sem rótulo de ano/.test(p.objeto) && !hoje) F(`${s.id} plano ${i + 1}: "sem rótulo de ano" fora de B-roll de hoje; foto de época pede o tempo do fato (sexta revisão)`);
  if (hoje) return;
  for (const t of termos) if (/\b(1[89]\d0|20[0-2]0)s\b/.test(t)) F(`${s.id} plano ${i + 1}: o termo "${t}" pede a década, e foto de outro ano não entra (identidade §6)`);
  if (!termos.some((t) => /\b(1[89]\d\d|20[0-2]\d)\b/.test(t))) return; // B-roll sem data (o Capitólio hoje, a balsa)
  const anos = anosDe(p.objeto);
  if (!anos.size) { F(`${s.id} plano ${i + 1}: os termos pedem ano, e o objeto não diz o tempo do fato`); return; }
  for (const t of termos) { const ys = [...t.matchAll(/\b(1[89]\d\d|20[0-2]\d)(?!s)\b/g)].map((m) => +m[1]); if (!ys.length || ys.some((y) => !anos.has(y))) F(`${s.id} plano ${i + 1}: o termo "${t}" não pede o ano do fato que o objeto dá (${[...anos].join(", ")}); foto de outro ano não entra (identidade §6)`); }
});
// oitava revisão, (a'') acima: a cláusula que aceita foto de outro ano
const ACEITA = /(?<![\p{L}])(serve|servem|aceita|aceitam|aceita-se|pode ser|podem ser|pode vir|podem vir|também entra|entra também)(?![\p{L}])/u;
for (const s of S) {
  const reg = (s._planos || []).filter((p) => REGIME_REAL.has(p.regime) && !p._pedido_a);
  const aceita = (cl) => { const m = ACEITA.exec(cl); return !!m && !/(?<![\p{L}])(não|nunca|nem)\s+$/u.test(cl.slice(0, m.index)); };
  const fatos = new Set(); // os anos do fato: os do objeto, fora das cláusulas que aceitam foto (senão o próprio aceite viraria fato)
  for (const p of reg) {
    const o = String(p.objeto).split(/[.;]\s/).filter((cl) => !aceita(cl)).join("; ");
    for (const y of anosDe(o)) fatos.add(y);
    for (const m of o.matchAll(/\b(1[89]\d\d|20[0-2]\d)\s*(?:a|–|-|até)\s*(1[89]\d\d|20[0-2]\d)\b/g)) for (let y = +m[1]; y <= +m[2]; y++) fatos.add(y);
  }
  const campos = [["midia_necessidade", s.midia_necessidade], ...reg.map((p) => [`plano ${s._planos.indexOf(p) + 1}`, p.objeto])];
  for (const [onde, t] of campos) for (const cl of String(t || "").split(/[.;]\s/)) {
    if (!aceita(cl)) continue;
    const outros = [...anosDe(cl)].filter((y) => !fatos.has(y));
    // décima primeira revisão (Lucas, 27/09/2026; identidade §6): foto de outro ano entra com o aviso do ano na tela
    if (outros.length && !/\baviso\b/.test(cl)) F(`${s.id} (${onde}): "${cl.trim().slice(0, 90)}…" aceita foto de ${outros.join(", ")}, fora do ano do fato (${[...fatos].sort().join(", ") || "nenhum"}), sem o aviso do ano: foto de outro ano só entra com o aviso na tela (identidade §6; oitava revisão, com a décima primeira)`);
  }
}
// sétima revisão: s06 pede Juneau de 1900 a 1906 e o acampamento de 1880; nenhuma referência a s06 como "século XIX"
for (const [p, t] of textos) if (!/\._revisao$/.test(p) && /s06 \([^)]*século XIX/.test(t)) F(`${p}: cita s06 como Juneau no século XIX; s06 pede Juneau de 1900 a 1906 e o acampamento de 1880 (sétima revisão)`);
// (d) nona revisão (Lucas, 27/09/2026: "Não: sem foto do ano, vira mapa ou desenho"; identidade §6). A pergunta sobre foto
// do lugar de poucos anos antes ou depois saiu das pendências; a decisão está em `_decisoes_do_lucas`, com a data e a
// identidade §6; e os 11 planos que a pergunta listava (a lista é a dela, gravada aqui) continuam de registro e dizem no
// objeto que, sem foto do tempo do fato, mudam de regime num re-espelho, com o mesmo id (para mapa ou desenho).
// (As provas da sétima revisão sobre o custo de um sim saíram com a pergunta: não há mais sim a pesar.)
if ((E._decisoes_pendentes || []).some((d) => /poucos anos antes ou depois/.test(d))) F("_decisoes_pendentes: a pergunta sobre foto do lugar de poucos anos antes ou depois foi respondida pelo Lucas em 27/09 (identidade §6) e não volta");
// Décima primeira revisão: a resposta da nona ("Não: sem foto do ano, vira mapa ou desenho") foi mudada pelo próprio Lucas
// no mesmo dia ("Quando não houver foto do ano, mas houver foto pode utilizar com um aviso em tela"; identidade §6, "a
// ordem": a foto do ano; sem ela, a do mesmo assunto de outro ano, com o aviso; sem nenhuma, mapa ou desenho). A decisão
// em `_decisoes_do_lucas` é a vigente, e a de antes não volta como vigente. Os 11 planos da pergunta e os oito que a pesquisa
// deixou sem nenhuma foto (NÃO ACHADO, research-imagens.md; a metade de Anchorage de s09 virou o plano 3) seguem a ordem:
// plano de registro diz o aviso do ano, ou "sem aviso", e a identidade §6; o que mudou de regime diz o re-espelho com o
// mesmo id e a identidade §6.
if (!(E._decisoes_do_lucas || []).some((d) => /^27\/09\/2026/.test(d) && /Quando não houver foto do ano/.test(d) && /\baviso\b/.test(d) && /mapa ou desenho/.test(d) && /identidade §6/.test(d))) F("_decisoes_do_lucas: falta a decisão de 27/09 que vale (foto de outro ano com o aviso na tela; sem nenhuma foto, mapa ou desenho; identidade §6)");
if ((E._decisoes_do_lucas || []).some((d) => /^27\/09\/2026 — sem foto do ano do fato, o plano vira mapa ou desenho, e foto do mesmo lugar de outro ano não entra/.test(d))) F("_decisoes_do_lucas: a resposta superada (\"Não: sem foto do ano, vira mapa ou desenho\") aparece como decisão vigente");
const LISTA_DA_PERGUNTA = [["s06", 1], ["s06", 2], ["s07", 2], ["s09", 1], ["s09", 2], ["s10", 1], ["s13", 1], ["s16", 1], ["s16", 2], ["s22", 1], ["s23", 4]];
const SEM_FOTO = [["s09", 3], ["s13", 1], ["s20", 1], ["s29", 2], ["s31", 5], ["s56", 2], ["s58", 4], ["s62", 1]];
for (const [id, n] of [...LISTA_DA_PERGUNTA, ...SEM_FOTO]) {
  const p = S.find((x) => x.id === id)?._planos?.[n - 1];
  if (!p) { F(`${id} plano ${n}: estava na ordem da foto do ano (a pergunta de 27/09 ou o NÃO ACHADO do research) e não existe`); continue; }
  const sem = SEM_FOTO.some(([a, b]) => a === id && b === n);
  if (REGIME_REAL.has(p.regime)) {
    if (sem) F(`${id} plano ${n}: a pesquisa não achou nenhuma foto, e o plano continua de registro (identidade §6: sem nenhuma, mapa ou desenho)`);
    else if (!/\baviso\b/.test(p.objeto) || !/identidade §6/.test(p.objeto)) F(`${id} plano ${n}: plano de registro da ordem da identidade §6 sem dizer o aviso do ano (ou "sem aviso", foto do ano do fato) e a regra`);
  } else if (!/re-espelho/.test(p.objeto) || !/mesmo id/.test(p.objeto) || !/identidade §6/.test(p.objeto)) F(`${id} plano ${n}: sem nenhuma foto, mudou de regime, e o objeto não diz o re-espelho com o mesmo id e a identidade §6`);
}
// décima primeira revisão: cada foto ou retrato que o conferente aprovou tem, no objeto do plano, o aviso do ano (aviso_de_ano
// true) ou "sem aviso" (false; a foto do ano do fato, a de hoje e a peça de acervo). Sem o arquivo, a prova não roda.
const CONF = `out/${proj}/_pesquisa/conferencia-midia.json`;
let avisosConferidos = null;
if (existsSync(CONF)) {
  let C = null; try { C = ler(CONF); } catch (e) { F(`conferencia-midia.json ilegível (${e.message})`); }
  avisosConferidos = 0;
  for (const x of C?.candidatos || []) {
    if (x.veredito !== "aprovado" || !["foto", "retrato"].includes(x.tipo)) continue;
    const m = /^(s\d{2})\s+plano\s+(\d+)/.exec(String(x.plano || ""));
    if (!m) { F(`conferencia-midia.json: o candidato aprovado ${x.id} não diz a cena e o plano ("sNN plano N")`); continue; }
    const p = S.find((y) => y.id === m[1])?._planos?.[+m[2] - 1];
    if (!p) { F(`${m[1]} plano ${m[2]}: o conferente aprovou ${x.id} para ele, e o plano não existe`); continue; }
    if (x.aviso_de_ano === true && (!/\baviso\b/.test(p.objeto) || /sem aviso/.test(p.objeto))) F(`${m[1]} plano ${m[2]}: o conferente aprovou ${x.id} com o aviso do ano (${x.data_na_origem}), e o objeto não diz o aviso (identidade §6)`);
    else if (x.aviso_de_ano === false && !/sem aviso/.test(p.objeto)) F(`${m[1]} plano ${m[2]}: o conferente aprovou ${x.id} sem aviso do ano, e o objeto não diz "sem aviso"`);
    else avisosConferidos++;
  }
}
// nona revisão: as pendências decididas em 27/09 não voltam a nenhum texto vivo (o histórico de `_revisao` fica)
// Décima revisão (verificação da nona): a guarda do vídeo não distinguia maiúscula (faltava o /i), e a da logo só
// pegava "DECISÃO DO LUCAS PENDENTE"; as duas agora leem a oração inteira (até o próximo ponto ou ponto e vírgula).
const DECIDIDAS = [
  [/cópia arquivada[^.;]{0,80}(NÃO CONFERID|PENDENTE)|(NÃO CONFERID|PENDENTE)[^.;]{0,80}cópia arquivada|nao_conferido_ate_o_navegador/i, "a cópia arquivada de página oficial do Alasca vale como fonte (CLAUDE.md, \"A marca\")"],
  [/v[íi]deos? do (governo do Alasca|Estado)[^.;]{0,80}(espera|aguarda|pendente|decide depois|a decidir|sem decisão|pergunta aberta)|§7\.4, item 3/i, "vídeo do governo do Alasca entra com a fonte na tela, e o de jornal só com licença (midia.md §7.5)"],
  [/\blogos?\b[^.;]{0,80}DECISÃO DO LUCAS PENDENTE|Se (o Lucas|ele) decidir pela logo/i, "logo de órgão federal e de outras instituições: só o nome escrito (midia.md §7.6)"],
  // décima primeira revisão: as duas decisões de 27/09 que o re-espelho aplicou
  [/DECISÃO DO LUCAS PENDENTE:? bandeira|bandeira[^.;]{0,80}(ao lado|no mapa)[^.;]{0,80}(DECISÃO DO LUCAS PENDENTE|até (o Lucas|ele) decidir)/i, "país no mapa: o nome escrito, sem bandeira (identidade §6; Lucas, 27/09/2026)"],
  [/esquema declarado[^.;]{0,120}(DECISÃO DO LUCAS PENDENTE|espera o Lucas|até a decisão)|DECISÃO DO LUCAS PENDENTE:? esquema/i, "rota que nunca foi construída: esquema tracejado pelo texto da fonte, com o aviso Approximate route (identidade §6; Lucas, 27/09/2026)"],
];
for (const [p, t] of textos) if (!/\._revisao$/.test(p)) for (const [re, regra] of DECIDIDAS) if (re.test(t)) F(`${p}: trata como pendente o que o Lucas decidiu em 27/09 ("${re.exec(t)[0].slice(0, 60)}"): ${regra}`);
// Décima revisão. (a) Vídeo do governo do Alasca negado: a oração que o nomeia não diz que ele não entra (o "não" que
// vem depois de "jornal", "veículo" ou "agência" é do vídeo de jornal, e vale). (b) Logo como substantivo ("a logo",
// "logo de…", "sem logo"; o advérbio "logo depois" não conta): a oração não a trata como pendente, e, sem negação, não
// a deixa entrar, pedir ou redesenhar. (c) A cópia arquivada vale para página oficial do Estado do Alasca, não para
// "site que recusa robô" em geral, e prova o texto, não a licença: nenhuma licença ou permissão se confere nela.
const VIDEO_ORACAO = /v[íi]deos? do (?:governo do Alasca|Estado)\b[^.;]*/gi;
const LOGO_ORACAO = /(?:\b(?:a|as|uma|da|na|sem)\s+logos?\b|\blogos?\s+d[eoa]s?\b)[^.;]*/gi;
const LOGO_PEND = /pendente|espera|aguarda|decide depois|decidir|sem decisão|pergunta aberta/i;
const NEGA_LOGO = /(?:^|[^\wÀ-ÿ])(n[ãa]o|nunca|nem|nenhuma?|sem)(?![\wÀ-ÿ])/i;
const LOGO_PERMITE = /(?:^|[^\wÀ-ÿ])(pode|podem|entra|entram|vai à (?:cena|tela)|v[ãa]o à (?:cena|tela)|aparece|aparecem|como selo|redesenhad\w*|se pede|pedir)(?![\wÀ-ÿ])/i;
const COPIA_GERAL = /cópia (?:pública )?arquivada (?:\([^)]*\) )?de (?:um )?site que recus/i;
const LICENCA_NA_COPIA = /(permiss[ãa]o|licen[çc]a)[^.;]{0,80}\(?(?:pela|na) cópia arquivada/i;
for (const [p, t] of textos) {
  if (/\._revisao$/.test(p)) continue;
  for (const m of t.matchAll(VIDEO_ORACAO)) {
    const cl = m[0]; const corte = cl.search(/jornal|ve[íi]culo|ag[êe]ncia/i); const antes = corte < 0 ? cl : cl.slice(0, corte);
    if (/n[ãa]o (?:entra|entram|vai ao ar|v[ãa]o ao ar|se pede)/i.test(antes)) F(`${p}: "${cl.slice(0, 70)}…" nega o vídeo do governo do Alasca, que entra com a fonte na tela (midia.md §7.5; Lucas, 27/09/2026)`);
  }
  for (const m of t.matchAll(LOGO_ORACAO)) {
    const cl = m[0];
    if (LOGO_PEND.test(cl)) F(`${p}: "${cl.slice(0, 70)}…" trata a logo como pendente; o Lucas decidiu em 27/09: só o nome escrito (midia.md §7.6)`);
    else if (!NEGA_LOGO.test(cl) && LOGO_PERMITE.test(cl)) F(`${p}: "${cl.slice(0, 70)}…" deixa a logo entrar; logo de instituição não vai à cena, só o nome escrito (midia.md §7.6; Lucas, 26 e 27/09/2026)`);
  }
  if (COPIA_GERAL.test(t)) F(`${p}: "${COPIA_GERAL.exec(t)[0]}…": a decisão de 27/09 cobre a cópia arquivada de página oficial do Estado do Alasca, não de site em geral (CLAUDE.md, "A marca")`);
  if (LICENCA_NA_COPIA.test(t)) F(`${p}: "${LICENCA_NA_COPIA.exec(t)[0].slice(0, 70)}…": a cópia arquivada prova o texto, não a licença; a permissão se confere na origem de hoje (CLAUDE.md, "A marca")`);
}
// décima primeira revisão: nem bandeira (identidade §6: país no mapa, o nome escrito); needs.logos não pede nada
for (const s of S) for (const l of s.needs.logos || []) F(`${s.id}: needs.logos pede "${l.slice(0, 50)}": logo de instituição não vai à cena (midia.md §7.6) e país no mapa vai com o nome escrito, sem bandeira (identidade §6; Lucas, 27/09/2026)`);
// décima primeira revisão: `_existe` diz o disco (o que o pesquisa-geo entregou em out/<proj>/_media/geo/, registrado no pauta-geo.json)
let geoNoDisco = 0;
for (const s of S) for (const g of s.needs.geo || []) {
  const ha = existsSync(`out/${proj}/_media/geo/${g.id}.json`);
  if (typeof g._existe !== "boolean") F(`${s.id}: needs.geo › ${g.id} sem _existe (true ou false)`);
  else if (g._existe && !ha) F(`${s.id}: needs.geo › ${g.id} diz _existe: true, e out/${proj}/_media/geo/${g.id}.json não existe`);
  else if (!g._existe && ha) F(`${s.id}: needs.geo › ${g.id} diz _existe: false, e a geometria está em disco (out/${proj}/_media/geo/${g.id}.json)`);
  else if (g._existe) geoNoDisco++;
}
// imagem de hoje não leva rótulo de ano (identidade §6): plano de registro com ano no objeto pede época no termo, ou diz "sem rótulo de ano"
const ANO = /\b(1[89]\d\d|20[0-2]\d)s?\b/;
for (const s of S) (s._planos || []).forEach((p, i) => {
  if (!REGIME_REAL.has(p.regime) || /sem rótulo de ano/.test(p.objeto)) return;
  if ((ANO.test(p.objeto) || /anos 19|década/.test(p.objeto)) && !(p.midia_termos || []).some((x) => ANO.test(x) || /archival/i.test(x))) F(`${s.id} plano ${i + 1}: o objeto tem ano, e nenhum termo pede a época (imagem de hoje com rótulo de ano, identidade §6)`);
});
// número sobre lugar declara a figura semântica (ofício §6.7): número na fala (fora data e ano) numa cena com plano de registro ou de mapa
const MES = "January|February|March|April|May|June|July|August|September|October|November|December";
const semData = (t) => t.replace(new RegExp(`(${MES})[\\s\\u00a0]+\\d{1,2}(?!\\d),?`, "g"), "$1").replace(/\b(1[89]\d\d|20\d\d)s?\b/g, "ANO").replace(/Half a century/g, "");
const NUMERO = /\d|percent|million|billion|\bhalf\b|quarter|to one|to three|votes/i;
for (const s of S) if ((s._planos || []).some((p) => REGIME_REAL.has(p.regime) || REGIME_MAPA.has(p.regime)) && NUMERO.test(semData(s._texto_aprovado || "")) && !s._figura) F(`${s.id}: número sobre lugar sem _figura (ofício §6.7)`);
// o despacho do pesquisa-documentos: toda cena documento/citação tem _documentos, e toda cena com _documentos está na lista, com os planos certos
const DOC = DR.documentos || {};
const docItens = [...(DOC.pecas || []).flatMap((p) => p.cenas), ...(DOC.materias || [])];
const docCenas = new Set(docItens.map((c) => c.cena));
for (const s of S) {
  if (["documento", "citacao"].includes(s.modo) && !(s._documentos || []).length) F(`${s.id}: modo ${s.modo} sem _documentos`);
  if ((s._documentos || []).length && !docCenas.has(s.id)) F(`${s.id}: tem _documentos e não está em _despacho_research › documentos`);
}
for (const c of docItens) {
  const s = S.find((x) => x.id === c.cena);
  if (!s) { F(`_despacho_research › documentos: ${c.cena} não existe`); continue; }
  if (!(s._documentos || []).length) F(`${c.cena}: está em _despacho_research › documentos e não tem _documentos`);
  for (const x of c.planos || []) {
    const pl = s._planos?.[x.n - 1];
    if (!pl || Math.abs(pl.de - x.de) > 1e-6 || Math.abs(pl.ate - x.ate) > 1e-6) { F(`_despacho_research › documentos: ${c.cena} plano ${x.n} não bate com o espelho`); continue; }
    // quarta revisão: o regime e a palavra que convoca o plano também batem
    if (pl.regime !== x.regime) F(`_despacho_research › documentos: ${c.cena} plano ${x.n} com regime ${x.regime}; no espelho, ${pl.regime}`);
    const norm = (t) => String(t || "").trim().replace(/\s+/g, " ");
    if (norm(x.voz) !== norm(pl.convocado_por)) F(`_despacho_research › documentos: ${c.cena} plano ${x.n} com voz "${x.voz}"; no espelho, convocado_por "${pl.convocado_por}"`);
  }
  // quarta revisão: trecho a grifar só onde o documento está na tela; entrada com grifo não lista plano de registro.
  // quinta revisão: nem mapa, nem PRANCHA não declarada: os planos de uma entrada com grifo são documento, citação ou dado
  // (a PRANCHA só com o texto de tela declarado em de_onde, como s16); e cada trecho tem, em `voz_do_grifo`, as palavras
  // que a voz diz enquanto o marca-texto o varre, ditas dentro dos planos listados ("o marca-texto varre a frase enquanto
  // ela é dita", pesquisa-documentos §7).
  // sexta revisão: sem exceção para a PRANCHA (s16): a sigla vai como texto de tela recriado, e a página não vai à tela;
  // o que não tem documento na tela vai em `conferir`
  const REGIME_GRIFO = new Set(["documento", "citacao", "dados"]);
  if ((c.grifar || []).length) {
    for (const x of c.planos || []) if (!REGIME_GRIFO.has(x.regime)) F(`_despacho_research › documentos: ${c.cena} tem trecho a grifar e lista o plano ${x.n}, que é ${x.regime} (sem documento na tela); o que só se confere vai em \`conferir\``);
    const vz = c.voz_do_grifo || [];
    if (vz.length !== c.grifar.length) F(`_despacho_research › documentos: ${c.cena} tem ${c.grifar.length} trecho(s) a grifar e ${vz.length} em voz_do_grifo`);
    const janela = (c.planos || []).map((x) => s._planos?.[x.n - 1]).filter(Boolean);
    const dentro = (w) => janela.some((pl) => w.start >= pl.de - 1e-9 && w.start < pl.ate - 1e-9);
    let anterior = -Infinity;
    vz.forEach((v, k) => {
      const ws = achaTodos(v, s.inSec, s.inSec + s.dur); // a frase na cena; toda palavra dela tem de cair num plano listado
      if (!ws || !ws.every(dentro)) F(`_despacho_research › documentos: ${c.cena}, trecho ${k + 1} ("${String(c.grifar[k] || "").slice(0, 40)}…"): a voz do grifo "${v.slice(0, 40)}…" ${ws ? "cai fora dos" : "não é dita na cena, nem nos"} planos listados (${(c.planos || []).map((x) => x.n).join(", ")})`);
      else grifosProvados++;
      // sexta revisão: o marca-texto varre em sequência, na ordem de `grifar` (pesquisa-documentos §2.2 e §7): a voz de cada
      // trecho começa depois da do anterior
      if (ws) { if (ws[0].start < anterior) F(`_despacho_research › documentos: ${c.cena}, o trecho ${k + 1} de grifar é varrido em ${ws[0].start} s, antes do trecho ${k} (${anterior} s): fora da ordem`); anterior = ws[0].start; }
    });
  }
  for (const x of c.conferir || []) if (!s._planos?.[x.plano - 1]) F(`_despacho_research › documentos: ${c.cena} manda conferir no plano ${x.plano}, que não existe`);
}
// quarta revisão: o _borda de cada cena com fala confere com o words.json (primeira e última palavra, início, fim da anterior)
for (const s of S) {
  const b = s._borda || {};
  const idx = W.map((w, i) => i).filter((i) => W[i].start >= s.inSec - 1e-9 && W[i].start < s.inSec + s.dur - 1e-9);
  if (!idx.length) { if (s.id === ultimaId && Math.abs((b.fim_da_ultima_palavra ?? -1) - W.at(-1).end) > 1e-6) F(`${s.id}: _borda.fim_da_ultima_palavra ≠ o fim da última palavra (${W.at(-1).end})`); continue; }
  const [i0, i1] = [idx[0], idx.at(-1)];
  const ant = i0 > 0 ? W[i0 - 1].end : null;
  if (!Array.isArray(b.palavras) || b.palavras[0] !== i0 || b.palavras[1] !== i1 || b.palavra !== W[i0].w || Math.abs(b.palavra_inicio - W[i0].start) > 1e-6 || (ant === null ? b.fim_da_palavra_anterior !== null : Math.abs(b.fim_da_palavra_anterior - ant) > 1e-6))
    F(`${s.id}: _borda não confere com o words.json (esperado palavras [${i0}, ${i1}], "${W[i0].w}" em ${W[i0].start}, anterior acaba em ${ant})`);
}
// quinta revisão: os capítulos (vão à descrição do YouTube). As partes são as marcas `<!-- pN · título -->` do texto
// aprovado; a primeira palavra de cada parte, na voz, é a soma das palavras dos parágrafos anteriores (o texto aprovado
// trocado para a voz tem as mesmas palavras do words.json, prova 5). Cada capítulo tem a parte e o título da marca, cai
// dentro da cena que cita, e o `em_s` é o início da primeira palavra da parte ou a borda da cena que abre nela.
{
  const partes = []; let atual = null, idx = 0;
  for (const bloco of readFileSync(P.aprov, "utf8").split(/\r?\n\s*\r?\n/).map((b) => b.trim()).filter(Boolean)) {
    const mk = /^<!--\s*(p\d+)\s*·\s*(.+?)\s*-->$/.exec(bloco);
    if (mk) { atual = { parte: mk[1], titulo: mk[2], primeira: null }; partes.push(atual); continue; }
    if (/^(#|>|<!--|---)/.test(bloco)) continue;
    if (atual && atual.primeira === null) atual.primeira = idx;
    idx += paraVoz(bloco.split(/\s+/).join(" ")).split(/\s+/).length;
  }
  if (idx !== W.length) F(`capítulos: o texto aprovado trocado para a voz tem ${idx} palavras; o words.json, ${W.length} (a conta das partes não vale)`);
  const caps = E._capitulos || [];
  if (caps.length !== partes.length) F(`capítulos: ${caps.length} no espelho, ${partes.length} partes no texto aprovado`);
  caps.forEach((c, k) => {
    const pt = partes.find((x) => x.parte === c.parte), s = S.find((x) => x.id === c.cena);
    if (!pt) { F(`capítulos: ${c.parte} não é parte do texto aprovado`); return; }
    if (partes[k]?.parte !== c.parte) F(`capítulos: ${c.parte} fora de ordem`);
    if (pt.titulo !== c.titulo) F(`capítulos: ${c.parte} com título "${c.titulo}"; no texto aprovado, "${pt.titulo}"`);
    if (!s) { F(`capítulos: ${c.parte} cita ${c.cena}, que não existe`); return; }
    if (!(c.em_s >= s.inSec - 1e-9 && c.em_s < s.inSec + s.dur - 1e-9)) F(`capítulos: ${c.parte} em ${c.em_s} s, fora de ${c.cena} (${s.inSec}–${r3(s.inSec + s.dur)})`);
    const w = W[pt.primeira], naPalavra = w && Math.abs(c.em_s - w.start) < 1e-6, naBorda = Math.abs(c.em_s - s.inSec) < 1e-6 && s._borda?.palavras?.[0] === pt.primeira;
    if (!naPalavra && !naBorda) F(`capítulos: ${c.parte} em ${c.em_s} s; a parte começa em "${w?.w}" (${w?.start} s)${s._borda?.palavras?.[0] === pt.primeira ? `, e ${c.cena} abre nela em ${s.inSec}` : ""}`);
  });
}
// sexta revisão: o mesmo lugar em cenas diferentes (o mesmo par de nomes próprios, fora "Alaska", nos termos de planos de
// registro) está numa só entrada de mesmo_lugar_clipes_diferentes (ou de mesmo_arquivo) com todas essas cenas (ofício §3:
// o pesquisa-imagens não entrega o mesmo clipe a duas cenas; a verificação de 27/09 achou o Lynn Canal de s43 e s51)
{
  const lugares = new Map();
  for (const s of S) (s._planos || []).forEach((p) => {
    if (!REGIME_REAL.has(p.regime) || p._pedido_a) return;
    for (const t of p.midia_termos || []) { const ws = t.split(/\s+/); for (let k = 0; k + 1 < ws.length; k++) if (/^[A-Z][a-z]/.test(ws[k]) && /^[A-Z][a-z]/.test(ws[k + 1]) && ws[k] !== "Alaska" && ws[k + 1] !== "Alaska") { const L = `${ws[k]} ${ws[k + 1]}`; lugares.set(L, new Set([...(lugares.get(L) || []), s.id])); } }
  });
  const entradas = [...(DR.mesmo_lugar_clipes_diferentes || []), ...(DR.mesmo_arquivo || [])];
  for (const [L, ids] of lugares) if (ids.size > 1 && !entradas.some((e) => [...ids].every((id) => new RegExp(`\\b${id}\\b`).test(e)))) F(`_despacho_research › mesmo_lugar_clipes_diferentes: "${L}" está nos termos de ${[...ids].join(", ")}, e nenhuma entrada exige clipes diferentes entre todas essas cenas (ofício §3)`);
}
// sexta revisão: o rotulo de needs.geo é só o rótulo da tela, em inglês (contrato do pesquisa-geo §1: { tipo, id, rotulo };
// roupa §4: o valor é texto de tela), ou vazio quando a feição não tem nome próprio; a descrição, os extremos e a fonte vão
// em _exige (a anotação que o schema do espelho documenta para needs.geo)
// oitava revisão: nem vírgula (dois nomes numa entrada só: "Larson Lake, Mount Yenlo" gravaria uma camada com os dois)
const ROTULO_PT = /[(:;,]|(?<![\p{L}])(de|da|do|dos|das|até|onde|recorte|polígono|vila|estrada|terminal|rede|áreas|raio|distritos|trecho|início|fim|alternativa|previsto|margem|ligação|ponto|rota|os|as|outros|terreno|rodovias|eleitorais)(?![\p{L}])|FSEIS|\bmec-|\bdoc-|\bp\. \d/iu;
for (const s of S) for (const g of s.needs.geo || []) if (ROTULO_PT.test(g.rotulo || "")) F(`${s.id}: needs.geo › ${g.id}: o rotulo "${g.rotulo}" não é só o rótulo da tela em inglês (a descrição vai em _exige)`);
// o pesquisa-logos: todo needs.logos está na lista de pedidos; entidade com logo pendente tem _nota_logos nas cenas dela
const LG = DR.logos || {};
for (const s of S) if ((s.needs.logos || []).length && !(LG.pedidos || []).some((x) => x.cena === s.id)) F(`${s.id}: needs.logos fora de _despacho_research › logos › pedidos`);
for (const e of LG.nome_escrito?.entidades || []) for (const id of e.cenas) if (/^s\d+$/.test(id)) {
  const s = S.find((x) => x.id === id);
  if (!s) F(`logos › nome_escrito: ${id} não existe`);
  else if (/DECISÃO DO LUCAS PENDENTE/.test(e.nota || "") && !s._nota_logos) F(`${id}: ${e.entidade} tem logo pendente e a cena não tem _nota_logos`);
}

// ── 7 · as contas do report ──
const dur = (a) => r3(a.reduce((s, x) => s + x, 0));
const porModo = {};
for (const s of S) { porModo[s.modo] ??= { cenas: 0, s: 0 }; porModo[s.modo].cenas++; porModo[s.modo].s = r3(porModo[s.modo].s + s.dur); }
const planos = S.flatMap((s) => (s._planos || []).map((p) => ({ ...p, cena: s.id, modo: s.modo })));
const semCauda = planos.filter((p) => p.cena !== ultimaId);
const tReal = dur(semCauda.filter((p) => REGIME_REAL.has(p.regime)).map((p) => p.dur));
const tMapa = dur(semCauda.filter((p) => REGIME_MAPA.has(p.regime)).map((p) => p.dur));
const tFala = r3(S.at(-1).inSec);
const pct = (a, b) => r3((a / b) * 100);
const janela = (ehReal) => { let melhor = { s: 0 }, ini = null; for (const p of semCauda) { if (ehReal(p)) { ini = null; continue; } if (ini === null) ini = p.de; const t = r3(p.ate - ini); if (t > melhor.s) melhor = { s: t, de: ini, ate: p.ate, ate_cena: p.cena }; } return melhor; };
const jReg = janela((p) => REGIME_REAL.has(p.regime));
const jCanal = janela((p) => REGIME_REAL.has(p.regime) || REGIME_MAPA.has(p.regime));
const cobertura = S.filter((s) => !["apresentador", "titulo-topico", "navegacao"].includes(s.modo) && s.anima !== false);
const pedem = cobertura.filter((s) => REAL.has(s.midia));
const comPlanoReal = pedem.filter((s) => (s._planos || []).some((p) => REGIME_REAL.has(p.regime)));
const soRetrato = pedem.filter((s) => !comPlanoReal.includes(s));
const rajada = dur(planos.filter((p) => p.dur < 2.5 && p.cena !== ultimaId).map((p) => p.dur));
const respiroCand = semCauda.filter((p) => p.dur >= 6 && (REGIME_REAL.has(p.regime) || REGIME_MAPA.has(p.regime)));
const longas = S.filter((s) => s.dur >= 10).map((s) => ({ cena: s.id, dur: s.dur, planos: (s._planos || []).length }));
const viradas = S.filter((s) => Array.isArray(s._virada)).map((s) => ({ cena: s.id, n: s._virada.length }));
const semRegistro = S.filter((s) => s.id !== ultimaId && !(s._planos || []).some((p) => REGIME_REAL.has(p.regime)));
const formaDispensa = (s) => { const r = (s.motivo || "").split("REGISTRO (§10.1):").slice(1).join(" "); return /satélite/.test(r) ? "satélite" : /FALTA DECLARADA/.test(r) ? "falta declarada" : /isto não foi filmado/.test(r) ? "isto não foi filmado" : /pedid/.test(r) ? "pedido (retrato/peça)" : "?"; };

const out = {
  proj, espelho: P.esp, cenas: S.length, primeira_inSec: S[0].inSec, ultima_fim: fimUlt, audio_s: FIM_AUDIO, video_s: r3(FIM_VIDEO), fonte_do_fim: fonteFim, soma_dur: soma,
  maior_vao_s: maiorVao, maior_sobreposicao_s: maiorSobre, pipeline_desencontros: pipeline.length, fusao: FUNDIDOS,
  bordas_internas: bordas.length, bordas_na_pausa: bordas.filter((b) => b.na_pausa).length, bordas_na_grade: bordas.filter((b) => b.na_grade).length,
  folga_max_antes_da_palavra_s: Math.max(...bordas.filter((b) => b.folga_antes_da_palavra_s !== null).map((b) => b.folga_antes_da_palavra_s)),
  ancoras_ok: ancoraOk.filter((x) => x.ok).length, palavras_cobertas: totalPal, palavras_words_json: W.length,
  texto_aprovado_ok: textoOk.filter((x) => x.ok).length, trocas_lidas: trocas.length,
  por_modo: porModo, planos: planos.length, viradas: { cenas: viradas.length, trocas: viradas.reduce((a, x) => a + x.n, 0), lista: viradas },
  regua_canal: { fala_s: tFala, registro_s: tReal, satelite_s: tMapa, mundo_real_s: r3(tReal + tMapa), pct_da_fala: pct(tReal + tMapa, tFala), pct_do_video: pct(tReal + tMapa, FIM_VIDEO), alvo_pct: 60 },
  taxa_de_pedido: { cobertura: cobertura.length, pedem_registro: pedem.length, pct: pct(pedem.length, cobertura.length), com_plano_de_registro: comPlanoReal.map((s) => s.id), so_retrato_ou_peca: soRetrato.map((s) => s.id) },
  sem_plano_de_registro: semRegistro.map((s) => ({ cena: s.id, modo: s.modo, forma: formaDispensa(s) })),
  cenas_da_divisao_de_eleicoes: arquivadas,
  maior_janela_sem_registro: jReg, maior_janela_sem_registro_nem_satelite: jCanal,
  rajada: { s: rajada, pct_do_video: pct(rajada, FIM_VIDEO), teto_pct: 20 },
  respiro_candidatos: { planos: respiroCand.map((p) => `${p.cena} ${p.de}–${p.ate} (${p.dur} s, ${p.regime})`), s: dur(respiroCand.map((p) => p.dur)), pct_do_video: pct(dur(respiroCand.map((p) => p.dur)), FIM_VIDEO), alvo_pct: 10 },
  cenas_longas: longas,
  travas_de_texto: travas, grifos_com_voz_provada: grifosProvados,
  avisos_do_conferente_conferidos: avisosConferidos, esquemas_de_rota: esquemas, geo_em_disco_conferida: geoNoDisco,
  texto_na_voz: { varridos, entradas: entradasVoz, travessias: D2.travessias, conflitos_para_o_regente: D2.conflitos, numeros_antes_da_voz: antecipados },
  falhas,
};
if (JSON_OUT) console.log(JSON.stringify({ ...out, bordas }, null, 1));
else {
  console.log(`# conferir-espelho — ${proj}`);
  console.log(`cenas ${out.cenas} · primeira em ${out.primeira_inSec} · última fecha em ${out.ultima_fim} (vídeo ${out.video_s}, ${fonteFim}; áudio ${FIM_AUDIO}) · soma ${out.soma_dur}`);
  console.log(`maior vão ${out.maior_vao_s} s · maior sobreposição ${out.maior_sobreposicao_s} s · desencontros no arredondamento do pipeline: ${pipeline.length}`);
  console.log(`fusão (diretor-de-arte): ${FUNDIDOS.length ? FUNDIDOS.map((x) => `${x.mae} ← ${x.filhos.join(", ")}: um arquivo de ${x.de} a ${x.ate} s (${x.dur_arquivo} s; quadros ${x.quadros_arquivo?.in}–${x.quadros_arquivo?.out}); a mãe lida na janela própria, ${x.dur_propria} s`).join(" · ") : "nenhuma"}`);
  console.log(`bordas internas ${out.bordas_internas}: ${out.bordas_na_pausa} na pausa, ${out.bordas_na_grade} na grade, sem isenção (folga máx. antes da palavra ${out.folga_max_antes_da_palavra_s} s)`);
  console.log(`âncoras = fala da janela: ${out.ancoras_ok}/${S.length} · palavras ${totalPal}/${W.length}`);
  console.log(`texto aprovado → voz = âncora: ${out.texto_aprovado_ok}/${S.length} (${trocas.length} trocas lidas)`);
  console.log(`modos: ${Object.entries(porModo).map(([k, v]) => `${k} ${v.cenas} (${v.s} s)`).join(" · ")}`);
  console.log(`planos ${planos.length} · cenas que viram por dentro ${viradas.length} (${out.viradas.trocas} viradas)`);
  console.log(`régua do canal (registro + satélite, sem documento, sem a cauda): ${out.regua_canal.mundo_real_s} s = ${out.regua_canal.pct_da_fala}% da fala · ${out.regua_canal.pct_do_video}% do vídeo (alvo 60%)`);
  console.log(`taxa de pedido: ${pedem.length}/${cobertura.length} = ${out.taxa_de_pedido.pct}% (${comPlanoReal.length} com plano de registro · ${soRetrato.length} só com retrato ou peça)`);
  console.log(`sem plano de registro: ${semRegistro.length} cenas — ${Object.entries(semRegistro.reduce((a, s) => { const f = formaDispensa(s); a[f] = (a[f] || 0) + 1; return a; }, {})).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
  console.log(`cenas com boletim ou folheto da Divisão de Eleições (cópia arquivada, que vale como fonte, com a data da captura; Lucas, 27/09/2026): ${arquivadas.length}`);
  console.log(`maior janela sem registro (footage/foto/split): ${jReg.s} s (${jReg.de}–${jReg.ate}) · sem registro nem satélite: ${jCanal.s} s (${jCanal.de}–${jCanal.ate})`);
  console.log(`rajada (planos < 2,5 s): ${rajada} s = ${out.rajada.pct_do_video}% (teto 20%) · respiro candidato (planos ≥ 6 s de registro/satélite): ${out.respiro_candidatos.s} s = ${out.respiro_candidatos.pct_do_video}%`);
  const curtas = travas.filter((x) => x.no_ar_ate_o_fim_do_plano_s < 2.0);
  console.log(`texto travado numa palavra: ${travas.length} trava(s), menor tempo no ar até o fim do plano ${travas.length ? Math.min(...travas.map((x) => x.no_ar_ate_o_fim_do_plano_s)) : "—"} s${curtas.length ? ` (abaixo de 2,0 s, com _texto_no_ar: ${curtas.map((x) => `${x.cena} p${x.plano}`).join(", ")})` : ""} · grifos com a voz provada dentro dos planos: ${grifosProvados}`);
  console.log(`texto na voz (sexta a oitava revisões): ${varridos.length} números ou frases citadas que o objeto põe na tela e a voz diz no plano, medidos da fala ao fim do plano (abaixo de 2,0 s, com _texto_no_ar; desde a oitava, também a fala do modo citação, parte por parte); ${antecipados.length} números que um objeto põe na tela antes do plano em que a voz os diz; ${entradasVoz.length} comparações entre a palavra de entrada que o objeto declara (verbo de entrada e palavra entre aspas) e o momento em que a voz diz o que entra (número, data pelo mês, frase entre aspas): cada uma reprova se a voz o diz depois do fim da palavra de entrada, ou se a entrada vem mais de 1,0 s depois da voz no plano (${[...new Set(entradasVoz.map((x) => `${x.cena} p${x.plano}`))].join(", ") || "—"}); ${D2.travessias.length} atravessam o plano seguinte da cena (${D2.travessias.join(", ") || "—"}); ${D2.conflitos.length} conflitos para o regente-de-imagem (${D2.conflitos.join(", ") || "—"}); não se mede o texto descrito em português sem verbo de entrada, sem número e sem aspas (a parte de um bloco que a voz diz noutra frase), nem rótulo de lugar`);
  console.log(`décima primeira revisão: ${avisosConferidos === null ? "vereditos do conferente NÃO MEDIDOS (sem conferencia-midia.json)" : `${avisosConferidos} fotos e retratos aprovados pelo conferente com o aviso do ano (ou "sem aviso") no objeto`} · ${esquemas} rotas em esquema tracejado (_esquema) · ${geoNoDisco} pedidos de needs.geo com _existe: true e o arquivo em disco`);
  console.log(falhas.length ? `\n✗ ${falhas.length} falha(s):\n  ${falhas.join("\n  ")}` : "\n✓ todas as provas passaram");
}
process.exit(falhas.length ? 1 : 0);
