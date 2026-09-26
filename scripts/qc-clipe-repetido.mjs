#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-clipe-repetido.mjs (linhas 1-445, commit 4afda12).
// O que mudou: ffprobe/ffmpeg por executavelFf (scripts/stock/lib/ferramentas.mjs: FFPROBE_PATH/FFMPEG_PATH, REGIE_*, PATH; carregado
// sob demanda — sem motor é NÃO MEDIDO, 2), windowsHide; o projeto também é procurado em <canal>/out/<proj> (o terminal do Windows
// abre em qualquer pasta); sem graphics/ sai 2 (era 1); espelho com BOM é lido, e quebrado é NÃO MEDIDO (era SyntaxError, 1). O escape do "fundo do apresentador" ficou:
// num canal faceless ele nunca casa, e tirá-lo seria mudar a régua sem medida. Sem ffmpeg o desempate por pixel diz NÃO MEDI.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// QC · CLIPE REPETIDO — o gate da [ARTE-108], nas DUAS escalas que ninguém media.
//
// POR QUE EXISTE: o Mateus reprovou a `s43` em 04/ago/2026 — *"teve 2 vídeos repetidos 2x, que ao
// total ficou com 4 cortes… mantenha os 2 primeiros, e os 2 últimos MUDE para outros 2 DIFERENTES"*.
// Ao caçar o defeito, dois buracos apareceram:
//
//   DENTRO DA CENA — o `qc-repeticao.mjs` tinha duas linhas dizendo literalmente que *"repetir DENTRO
//   da mesma cena é composição, não reuso"*. O gate estava PROGRAMADO para ignorar exatamente o que
//   o dono reclamou. Um clipe em dois planos SUCESSIVOS não é composição: é o mesmo plano de novo.
//
//   ENTRE CENAS — ninguém media. Levantamento de 04/ago encontrou 7 pares, incluindo o plano de
//   FECHAMENTO da abertura reaparecendo no meio do vídeo, e duas cenas novas montadas quase
//   inteiras com material que o vídeo já tinha mostrado.
//
// A distinção que o gate faz (e que o antigo não fazia): janelas SOBREPOSTAS do mesmo arquivo são
// composição legítima (camada, PiP, mesma imagem em dois papéis simultâneos); janelas SUCESSIVAS
// são repetição. Entre cenas, qualquer reaparecimento é suspeito — mas a distância importa, então o
// relatório sempre diz quantos segundos separam as duas aparições.
//
// ⚠️ COMPOSIÇÃO SE DECLARA, e isso é sério: alarme falso é bug de prioridade alta, porque ensina a
// ignorar o gate — e aí ele para de proteger justamente quando acerta. A `s30b` usa a MESMA foto
// duas vezes de propósito (fundo desfocado + cartão-postal por cima, os dois no ar ao mesmo tempo),
// e isso é arte, não preguiça. Para o gate aceitar, a cena declara no elemento:
//     <img src="..." data-qc-composicao="fundo desfocado da própria foto">
// A declaração é barata para quem tem razão e cara para quem não tem: obriga a escrever POR QUE.
//
//   node scripts/qc-clipe-repetido.mjs out/<proj>
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename, isAbsolute } from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { stemDaChave } from "./lib/stem-de-cena.mjs";
import { lerJsonDoDisco, lerJsonOuNaoMedi, ferramentasOuNaoMedi } from "./lib/modos.mjs";

// [porte Régie] ffprobe/ffmpeg: FFPROBE_PATH/FFMPEG_PATH (a convenção do renderizar do motor), depois
// REGIE_FFPROBE/REGIE_FFMPEG (a da finalização), depois o nome puro no PATH (no Windows, ffprobe.exe —
// o Node acha o .exe sozinho). Sempre execFileSync com array, sem shell, e sem janela piscando.
const FF = await ferramentasOuNaoMedi("qc-clipe-repetido");   // o dono único da regra: scripts/stock/lib/ferramentas.mjs
const exe = (nome) => FF.executavelFf(nome);
const RAIZ = fileURLToPath(new URL("..", import.meta.url));

// aceita `out/<proj>` e `<proj>` — a casa mistura as duas convenções (10 gates pedem o slug puro,
// 3 pedem o caminho), e chamar com a forma da maioria devolvia `✗ sem <proj>/graphics`, que lê como
// "o projeto não tem arte". Erro de chamada disfarçado de defeito do projeto manda investigar o
// lugar errado; normalizar é mais barato que padronizar 13 arquivos.
const argDir = process.argv[2];
if (!argDir) { console.error("uso: node scripts/qc-clipe-repetido.mjs out/<proj>  (aceita também só <proj>)"); process.exit(2); }
// [porte Régie] …e a raiz do CANAL como terceira tentativa: o dono no Windows abre o terminal onde quiser.
const dir = existsSync(join(argDir, "graphics")) ? argDir
  : existsSync(join("out", argDir, "graphics")) ? join("out", argDir)
  : !isAbsolute(argDir) && existsSync(join(RAIZ, "out", argDir, "graphics")) ? join(RAIZ, "out", argDir) : argDir;
const G = join(dir, "graphics");
if (!existsSync(G)) { console.error(`✗ sem ${G} — NÃO MEDIDO (sem arte não há clipe a comparar)`); process.exit(2); }   // [porte Régie] era 1

const esp = lerJsonOuNaoMedi(join(dir, "espelho.json"), "qc-clipe-repetido") || { segmentos: [] };   // [porte Régie] BOM; quebrado = NÃO MEDIDO
const pos = new Map((esp.segmentos || []).map((s) => [s.id, s.inSec]));

/**
 * ── IDENTIDADE DO PLANO ─────────────────────────────────────────────────────────────────────────
 * O gate comparava BASENAME, e por isso era cego para o defeito mais caro que existe aqui: em
 * 06/ago/2026 o `especies-humanas` usava `pexels-36926180` na s34 e `multidao-rua-30` na s40 —
 * que é o REENCODE 30fps/all-intra do mesmo item ([REND-47], renomeado por assunto). Dois nomes,
 * UM plano, a 224s de distância, e nenhum gate acusava. O espectador reconhece o plano; o
 * `basename` não.
 *
 * A `_pesquisa/pauta-*.json` guarda a URL do item por arquivo, inclusive para os renomeados —
 * então a URL é a identidade e o nome fica de reserva. Mesma lição do [PESQ-45], que consertou o
 * `qc-procedencia` cego pela MESMA renomeação: *uma renomeação, dois gates cegos, porque os dois
 * liam o nome como se fosse identidade.* [ARTE-139]
 */
/**
 * ⚠️ DUAS FONTES DE IDENTIDADE, e a segunda faltava — medido em 10/ago/2026 no `quao-fundo-terra`.
 *
 * Esta função lia SÓ as pautas de `_pesquisa/`. Mas a pauta é o que a pesquisa PLANEJOU baixar, e a
 * `_PROCEDENCIA.json` é o que ela DE FATO baixou — é lá que a URL vive depois que o arquivo existe.
 * Arquivo que chegou por fora da pauta (recaça, substituição, correção) ficava **sem identidade**, e
 * o gate deixava de agrupá-lo com qualquer outro: a `s01` e a `s06` usavam a MESMA foto aérea de
 * Kola (`88057cee7ead2ac6dfdb732e168939ff`, byte-idêntica, 35 s de distância) com a MESMA URL
 * declarada nas duas `_PROCEDENCIA.json` — e o gate imprimiu PASS.
 *
 * *Ler a intenção e não o registro é medir o plano em vez do resultado.*
 */
function carregarIdentidades() {
  const m = new Map();
  const P = join(dir, "_pesquisa");
  if (existsSync(P)) {
    for (const f of readdirSync(P).filter((x) => /^pauta-.*\.json$/i.test(x))) {
      let j = null;
      try { j = lerJsonDoDisco(join(P, f)); } catch { continue; }   // [porte Régie] BOM
      for (const it of j?.itens || []) {
        const u = it?.url || it?.fonte?.pagina_url;
        if (it?.arquivo && u) m.set(basename(it.arquivo), u);
      }
    }
  }
  // …e as procedências declaradas no disco, que são o registro do que existe de fato.
  (function varrerProc(d) {
    if (!existsSync(d)) return;
    for (const e of readdirSync(d, { withFileTypes: true })) {
      if (e.isDirectory()) { varrerProc(join(d, e.name)); continue; }
      if (e.name !== "_PROCEDENCIA.json") continue;
      let j = null;
      try { j = lerJsonDoDisco(join(d, e.name)); } catch { continue; }   // [porte Régie] BOM
      for (const [arq, v] of Object.entries(j || {})) {
        const u = v?.url || v?.fonte?.pagina_url;
        if (u && !m.has(basename(arq))) m.set(basename(arq), u);
      }
    }
  })(join(dir, "_media"));
  return m;
}
const IDENT = carregarIdentidades();
const identidade = (arq) => IDENT.get(arq) || arq;

/**
 * ── A URL É A FONTE, NÃO O ITEM ─────────────────────────────────────────────────────────────────
 * Agrupar por URL acha o reencode renomeado ([ARTE-139]) e, pelo mesmo movimento, junta coisas que
 * só COMPARTILHAM A ORIGEM: as páginas p2/p3/p4 extraídas de um PDF de relatório têm uma URL só (a
 * do PDF), e a obra inteira e o recorte de detalhe de um quadro na Wikimedia também. Medido no
 * `ceuta` em 08/ago: dos 4 pares acusados como "mesmo item, nomes diferentes", 3 eram páginas ou
 * recortes distintos e 1 era repetição de verdade. *Reprovar três páginas de um documento como se
 * fossem o mesmo plano ensina o agente a não ler o gate — que é o único jeito de perder o caso real
 * junto.*
 *
 * O desempate é o CONTEÚDO, mas hash igual não pode ser a condição para acusar: o reencode
 * 30fps/all-intra do [REND-47] muda todos os bytes e continua sendo o mesmo plano na tela. Então os
 * vereditos são diferentes, e nenhum deles some:
 *   bytes IGUAIS      → o mesmo arquivo com dois nomes. Repetição dura, reprova.
 *   bytes DIFERENTES  → mesma fonte, arquivos distintos. Aqui entra o desempate por PIXEL (abaixo).
 *
 * ⚠️⚠️ O DESEMPATE POR PIXEL — acrescentado em 10/ago/2026 no QC do `quao-fundo-terra` [ARTE-221].
 * Esta função dizia, em comentário, que com bytes distintos *"daqui o gate não distingue 'página 3
 * do PDF' de 'reencode do mesmo vídeo'"* — e por isso só AVISAVA. **Dava para distinguir, e o preço
 * era um ffmpeg.** O caso que escapou: a `s12` e a `s98` usavam o MESMO item do Storyblocks
 * (id 353848549), baixado duas vezes no mesmo dia com nomes diferentes; as duas `_PROCEDENCIA.json`
 * apontavam a mesma URL, os bytes divergiam (dois reencodes) e o gate imprimiu ⚠ "confira por
 * visão". Ninguém confere por visão um aviso no meio de doze. O mesmo plano ia ao ar duas vezes,
 * com 891 s de intervalo, e a `s12` ainda declarava no cabeçalho "Sem clipe repetido (ARTE-108)".
 *
 * Agora o gate DECIDE: decodifica dois instantes de cada arquivo, reduz a 32×18 em cinza e compara
 * a diferença média por pixel. Mesma imagem nos dois instantes → é o mesmo plano, reprova. Imagens
 * diferentes → segue avisando, mas com a afirmação MEDIDA em vez de uma tarefa para o humano.
 * A comparação é por DISTÂNCIA, não por hash exato, porque dois reencodes com parâmetros distintos
 * dão pixels quase iguais e nunca idênticos — hash exato aqui devolveria "diferente" e recriaria o
 * buraco por outro caminho. Dois instantes (não um) porque clipe que abre em preto colide no t≈0.
 * *Instrução que delega ao humano a medição que a máquina sabe fazer é instrução que não roda.*
 */
const MEDIA = new Map();                          // basename → caminho no disco
(function varrer(d) {
  if (!existsSync(d)) return;
  for (const e of readdirSync(d, { withFileTypes: true })) {
    if (e.isDirectory()) varrer(join(d, e.name));
    else if (!MEDIA.has(e.name)) MEDIA.set(e.name, join(d, e.name));
  }
})(join(dir, "_media"));
const _hashes = new Map();
function hashDe(arq) {
  if (_hashes.has(arq)) return _hashes.get(arq);
  const p = MEDIA.get(arq);
  let h = null;
  try { if (p) h = createHash("md5").update(readFileSync(p)).digest("hex"); } catch { h = null; }
  _hashes.set(arq, h);
  return h;
}

/**
 * ASSINATURA DE PIXEL — dois instantes de um arquivo, cada um reduzido a 32×18 em cinza (576 bytes).
 * Devolve null quando não dá para medir (ffmpeg ausente, arquivo ilegível, formato não decodificável):
 * medida que falha tem de se DECLARAR ausente, senão o `todos iguais` de um array vazio devolve
 * `true` e o gate reprova o vídeo inteiro por não ter conseguido medir nada.
 */
const _pix = new Map();
function assinaturaPixel(arq) {
  if (_pix.has(arq)) return _pix.get(arq);
  const p = MEDIA.get(arq);
  let sig = null;
  if (p) {
    const ehVideo = /\.(mp4|mov|webm|mkv)$/i.test(arq);
    let dur = 0;
    if (ehVideo) {
      try {
        dur = +execFileSync(exe("ffprobe"), ["-v", "error", "-show_entries", "format=duration",
          "-of", "default=nw=1:nk=1", p], { encoding: "utf8", timeout: 30000, windowsHide: true }).trim() || 0;   // [porte Régie]
      } catch { dur = 0; }
    }
    // dois instantes distintos: 10% e 55% da duração. Clipe que abre em preto colide no t≈0, e
    // um instante só transformaria "os dois começam escuros" em "são o mesmo plano".
    const marcas = ehVideo && dur > 0.4 ? [dur * 0.10, dur * 0.55] : [null];
    const quadros = [];
    for (const t of marcas) {
      try {
        const args = ["-v", "error"];
        if (t != null) args.push("-ss", t.toFixed(3));
        args.push("-i", p, "-frames:v", "1", "-vf", "scale=32:18,format=gray",
          "-f", "rawvideo", "-pix_fmt", "gray", "-");
        const buf = execFileSync(exe("ffmpeg"), args, { maxBuffer: 1 << 20, timeout: 60000, windowsHide: true, stdio: ["ignore", "pipe", "ignore"] });   // [porte Régie]
        if (buf?.length === 576) quadros.push(buf);
      } catch { /* instante não decodificou — cai no null abaixo */ }
    }
    if (quadros.length === marcas.length) sig = quadros;
  }
  _pix.set(arq, sig);
  return sig;
}

/** true = mesma imagem nos DOIS instantes · false = imagens distintas · null = não deu para medir */
function mesmoPlano(nomes) {
  const sigs = nomes.map(assinaturaPixel);
  if (sigs.some((s) => !s)) return null;                       // sem medida → sem veredito
  const n = sigs[0].length;
  if (!sigs.every((s) => s.length === n)) return null;
  for (let q = 0; q < n; q++) {
    for (let i = 1; i < sigs.length; i++) {
      const a = sigs[0][q], b = sigs[i][q];
      let soma = 0;
      for (let k = 0; k < a.length; k++) soma += Math.abs(a[k] - b[k]);
      // limiar 4/255 por pixel: absorve a perda de dois reencodes distintos do MESMO plano e ainda
      // fica muito abaixo da distância entre dois quadros diferentes (medido: 0,0 contra 30+).
      if (soma / a.length > 4) return false;
    }
  }
  return true;
}

/** Extrai de cada TAG do HTML o par (src, atributos) — o atributo pode vir antes OU depois do src. */
function tagsComSrc(html) {
  const out = [];
  for (const m of html.matchAll(/<(?:video|img|source)\b([^>]*)>/gi)) {
    const attrs = m[1];
    const s = attrs.match(/\bsrc="([^"]+)"/);
    if (s) out.push({ src: s[1], attrs });
  }
  return out;
}

const porCena = new Map();
const declaradosPorCena = new Map();   // data-qc-composicao → dentro da MESMA cena
const reusoPorCena = new Map();        // data-qc-reuso      → ENTRE cenas
const ehRetrato = new Set();           // nomes vindos de _media/pessoa/
const ehSimbolo = new Set();           // nomes vindos de _media/flags|logo/ — símbolo institucional
const ehFundoDeCena = new Set();       // fundo do apresentador gerado na casa (_media/cenas/*/fundo-*)
const inativos = [];                   // data-qc-inativo → no DOM, fora da janela (ver ESCAPE −1)
/* ARQUIVO OCULTO EM `graphics/` NÃO É CENA — a mesma convenção que o `montar-fila-real.mjs` passou a
 * respeitar em 21/ago (commit `0586b704`), e que faltava AQUI. O que começa com ponto é rascunho do
 * autor: proposta de outro modelo, sonda de gate, backup de meio-conserto. Medido em 22/ago no
 * `especies-humanas`: `.tmp-probe-s06.html` é uma cópia da `s06` com uma declaração `data-qc-sem-heroi`
 * em teste (17 linhas de diferença) — e, contado como cena, fez o gate acusar SEIS repetições que eram
 * o arquivo comparado com a própria cópia (`male-lion`, `closeup-of-tiger`, `Bifaz_de_Atapuerca`,
 * `fire-burning`, `glowing-embers`, `lioness`). Duas delas existiam SÓ por causa da probe.
 * *Laudo inflado por rascunho é pior que laudo silencioso: manda declarar reuso onde não há reuso, e
 * a declaração falsa fica no HTML para sempre.* */
for (const f of readdirSync(G).filter((x) => x.endsWith(".html") && !x.startsWith("."))) {
  const id = f.slice(0, -5);
  const html = readFileSync(join(G, f), "utf8");
  const tags = tagsComSrc(html).filter((t) => t.src.includes("_media") && /\.(mp4|mov|jpg|jpeg|png|webp)$/i.test(t.src));
  const declarados = new Set(), reusos = new Set();
  const conta = new Map();
  for (const t of tags) {
    const nome = basename(t.src);
    /* ESCAPE −1 · MÍDIA NO DOM E FORA DA JANELA — o elemento existe, carrega, e NUNCA acende.
     * Medido em 22/ago/2026 no `especies-humanas`, em TRÊS cenas com a mesma forma e origens
     * diferentes: `s15` guardava dois takes cujas rampas de alfa começavam em t=11,30 e t=14,25
     * numa cena de 11,08s (sobra de uma coreografia de ~30s que a decupagem encurtou); `s06`
     * desenhava o biface e o fogo com `p1=0`/`p2=0` — constantes literais — depois de as provas
     * migrarem para `n015`; `s16` manteve `a2`/`a3` com `opacity:0` e escreveu no cabeçalho que o
     * DOM foi "PRESERVADO intacto... se a janela voltar a crescer, a arte está aqui, não precisa
     * ser refeita".
     * O gate conta a TAG, não o pixel — então os três acusavam repetição de mídia que ninguém vê,
     * e dois dos achados vinham com as distâncias mais curtas do laudo (8s e 6s), isto é, os que
     * mais parecem graves. Pior: a "cura" natural é escrever `data-qc-reuso` explicando uma costura
     * que não existe, e a declaração falsa fica no HTML para sempre.
     * O caso da `s16` é o que exige ESTE escape em vez de faca: apagar ali contraria a regra de
     * ouro da casa (artefato pronto é ativo pago e não se descarta), e o autor declarou a intenção
     * por escrito. Quando a mídia é lixo de verdade — coreografia órfã, prova que mudou de cena —
     * o certo continua sendo REMOVER, como se fez em `s15` e `s06`.
     * A isenção NÃO cala: os inativos saem listados no rodapé, porque cena que acumula mídia
     * invisível é peso de render (cada `<video preload="auto">` é um 4K decodificado à toa) e
     * merece ser vista. Exige motivo com ≥12 caracteres — atributo vazio não declara nada. */
    const mInativo = t.attrs.match(/\bdata-qc-inativo\s*=\s*"([^"]*)"/);
    if (mInativo && mInativo[1].trim().length >= 12) {
      inativos.push({ cena: id, nome, motivo: mInativo[1].trim() });
      continue;
    }
    if (/_media[\\/]pessoas?[\\/]/.test(t.src)) ehRetrato.add(nome);
    /* Símbolo se reconhece pela PASTA **ou pelo NOME** — o mesmo critério que o `qc-procedencia` já
     * usa (`^flag[-_]`, `logo`). Medido em 17/ago/2026 no `uruguai-despovoado`: `_media/flags/uy.png`
     * e `_media/flag-uy.png` são **o mesmo arquivo** (md5 `1dab4542…`), um na pasta e outro na raiz.
     * Como o escape exige que TODOS os nomes do grupo sejam símbolo, bastava o da raiz para derrubar
     * a isenção — e a bandeira do Uruguai, num vídeo SOBRE o Uruguai, virava a maior "repetição" do
     * laudo: 10 cenas. A [ARTE-57] MANDA repeti-la. *Isenção que depende de onde o arquivo foi
     * guardado falha no dia em que alguém o guarda no lugar certo com outro nome.* */
    if (/_media[\\/](flags?|bandeiras?|logos?)[\\/]/.test(t.src) || /^(flag|bandeira|logo|brasao|bras[ãa]o)[-_]/i.test(nome)) ehSimbolo.add(nome);
    /* O FUNDO DO APRESENTADOR não é acervo nem plano: é o cenário do Bôco, gerado na casa, e ele se
     * repete em toda cena de apresentador POR CONSTRUÇÃO — trocar de fundo a cada aparição é que
     * seria o defeito. Mesma lógica da bandeira, outro objeto. */
    if (/_media[\\/]cenas?[\\/]/.test(t.src) && /^fundo-/i.test(nome)) { ehSimbolo.add(nome); ehFundoDeCena.add(nome); }
    if (/\bdata-qc-composicao\b/.test(t.attrs)) declarados.add(nome);
    if (/\bdata-qc-reuso\b/.test(t.attrs)) reusos.add(identidade(nome));
    conta.set(nome, (conta.get(nome) || 0) + 1);
  }
  declaradosPorCena.set(id, declarados);
  reusoPorCena.set(id, reusos);
  porCena.set(id, conta);
}

let erros = 0;
console.log(`# clipe repetido — ${dir}\n`);

// 1) dentro da cena: o mesmo arquivo citado em mais de um <video>/<img>
console.log("## dentro da cena");
let dentro = 0;
for (const [id, conta] of porCena) {
  for (const [arq, n] of conta) if (n > 1) {
    if (declaradosPorCena.get(id)?.has(arq)) { console.log(`  ↩ ${id} usa "${arq}" ${n}× — composição DECLARADA`); continue; }
    console.log(`  ✗ ${id} usa "${arq}" ${n}× (se for composição simultânea, declare data-qc-composicao)`);
    dentro++; erros++;
  }
}
if (!dentro) console.log("  ✓ nenhuma cena cita o mesmo arquivo duas vezes");

// 2) entre cenas — agrupado por IDENTIDADE (URL da pauta), não por nome de arquivo
console.log("\n## entre cenas");
/**
 * AGRUPAMENTO POR UNIÃO — hash do arquivo **ou** identidade declarada.
 *
 * O agrupamento era só pela URL declarada, e por isso dependia de alguém ter declarado. Dois
 * arquivos com o MESMO md5 são o mesmo arquivo — isso não precisa de declaração, de pauta nem de
 * procedência, e é a evidência mais barata que existe. Agora os dois critérios se somam (união, não
 * escolha): arquivos caem no mesmo grupo se compartilham o hash OU a URL.
 *
 * Por que união e não "hash primeiro": trocar URL por hash resolveria o par byte-idêntico e perderia
 * o par REENCODADO (bytes diferentes, mesma origem) — que é exatamente o caso `s12`×`s98` da
 * [ARTE-221]. Os dois critérios pegam defeitos diferentes e nenhum substitui o outro.
 */
const _pai = new Map();
const _acha = (x) => { while (_pai.get(x) !== x) { _pai.set(x, _pai.get(_pai.get(x))); x = _pai.get(x); } return x; };
const _no = (x) => { if (!_pai.has(x)) _pai.set(x, x); return x; };
const _une = (a, b) => { const ra = _acha(_no(a)), rb = _acha(_no(b)); if (ra !== rb) _pai.set(ra, rb); };
for (const [, conta] of porCena) for (const arq of conta.keys()) {
  _no(arq);
  _une(arq, `ident:${identidade(arq)}`);
  const h = hashDe(arq);
  if (h) _une(arq, `hash:${h}`);
}
const dono = new Map();   // grupo canônico → [{id, arq}]
for (const [id, conta] of porCena) for (const arq of conta.keys()) {
  const k = _acha(_no(arq));
  if (!dono.has(k)) dono.set(k, []);
  dono.get(k).push({ id, arq });
}
let entre = 0;
for (const [, usos] of [...dono].sort()) {
  if (usos.length < 2) continue;
  // A cena declara `data-qc-reuso` contra a IDENTIDADE de um nome — e o grupo agora pode reunir
  // nomes distintos (união por hash). Declarou para qualquer nome do grupo = declarou para o grupo.
  const idents = new Set(usos.map((u) => identidade(u.arq)));
  const declarou = (cid) => { const s = reusoPorCena.get(cid); return !!s && [...idents].some((i) => s.has(i)); };
  const comPos = usos.map((u) => ({ ...u, t: pos.get(u.id) ?? null })).sort((a, b) => (a.t ?? 0) - (b.t ?? 0));
  const dist = comPos[0].t != null && comPos[comPos.length - 1].t != null
    ? `${(comPos[comPos.length - 1].t - comPos[0].t).toFixed(0)}s de distância` : "posição desconhecida";
  const nomes = [...new Set(usos.map((u) => u.arq))];
  // dois NOMES para um só plano: reencode renomeado. Vale dizer em voz alta — foi o caso que
  // cegou este gate e o qc-procedencia ao mesmo tempo.
  const hs = nomes.map(hashDe);
  const mesmosBytes = nomes.length > 1 && hs.every((h) => h && h === hs[0]);
  const bytesDistintos = nomes.length > 1 && hs.every(Boolean) && new Set(hs).size === nomes.length;
  /**
   * ⚠️ GRUPO MISTO — o caso que o rótulo binário escondia. `mesmosBytes` e `bytesDistintos` cobrem
   * os extremos (todos iguais / todos diferentes); quando a união por hash+URL reúne PARTE
   * byte-idêntica e parte não, os dois davam false e o grupo saía rotulado "mesma FONTE, arquivos
   * diferentes" — a frase que mais engana, porque nega justamente o subconjunto que É o mesmo
   * download. Medido em 14/ago no `quasares-primordiais`: 4 nomes do disco solar do SDO em s30·s74·
   * s82, dos quais TRÊS com md5 4d51338c idêntico, apresentados como "arquivos diferentes"; e
   * s91·s148, o mesmo mapa dos 31 alvos sob dois nomes, no mesmo balde. Quem lesse o laudo
   * concluiria que não havia plano repetido — e havia, três vezes.
   * O subgrupo idêntico é a informação mais barata e mais dura que este gate tem. Diga-a.
   */
  const porHash = new Map();
  nomes.forEach((n, i) => { const h = hs[i]; if (h) porHash.set(h, [...(porHash.get(h) || []), n]); });
  const gemeos = [...porHash.values()].filter((g) => g.length > 1);
  const misto = !mesmosBytes && gemeos.length > 0;
  const rotulo = nomes.length > 1
    ? `${nomes.join(mesmosBytes ? " = " : " ≠ ")}  ⚠ ${
        mesmosBytes ? "MESMO ARQUIVO, dois nomes"
        : misto ? `mesma FONTE — e ATENÇÃO: ${gemeos.map((g) => g.join(" = ")).join(" · ")} é o MESMO ARQUIVO sob nomes distintos`
        : "mesma FONTE, arquivos diferentes"}`
    : `"${nomes[0]}"`;
  // o id encurtado do laudo sai da régua de stem, não do primeiro hífen: em vídeo de família
  // hifenizada `split("-")[0]` devolvia `ormuz` para TODAS as cenas, e o laudo dizia "em 2 cenas:
  // ormuz · ormuz" — nenhum veredito mudava, mas quem fosse consertar não sabia onde. Aqui o stem
  // é só display; nos ids que já encurtavam bem (`s004-morpho` → `s004`) ele sai igual.
  const cenas = comPos.map((c) => stemDaChave(c.id)).join(" · ");
  // ESCAPE 0 · mesma URL, bytes distintos: páginas de um PDF, recorte de detalhe, quadro e close —
  // OU o mesmo plano baixado duas vezes e reencodado. Quem separa os dois é o PIXEL, não o humano.
  let reencodeDoMesmoPlano = false;
  if (bytesDistintos) {
    const veredito = mesmoPlano(nomes);
    if (veredito === false) {
      console.log(`  ⚠ ${rotulo} em ${cenas}  (${dist}) — a URL da pauta é só a FONTE comum, e o CONTEÚDO é distinto (medido por pixel em 2 instantes): páginas/recortes da mesma origem, não repetição`);
      continue;
    }
    if (veredito === null) {
      console.log(`  ⚠ ${rotulo} em ${cenas}  (${dist}) — mesma FONTE e NÃO FOI POSSÍVEL MEDIR o pixel (ffmpeg/arquivo); confira por visão se não é o mesmo plano reencodado`);
      continue;
    }
    // veredito === true: mesma imagem nos dois instantes. É o mesmo plano com dois nomes.
    reencodeDoMesmoPlano = true;
  }

  // ESCAPE 1 · reuso DELIBERADO, declarado nas DUAS pontas. Exigir dos dois lados é o que separa
  // "costura de capítulo" de "a outra cena nem sabe que foi reusada".
  const declarantes = comPos.filter((c) => declarou(c.id));
  if (declarantes.length === comPos.length) {
    console.log(`  ↩ ${rotulo} em ${cenas}  (${dist}) — reuso DECLARADO nas ${comPos.length} pontas`);
    continue;
  }
  // ESCAPE 2 · retrato de pessoa. A mesma pessoa citada duas vezes é a MESMA pessoa — trocar a foto
  // é que confundiria. Mas isenção que cala é isenção que esconde: aqui ela AVISA.
  if (nomes.every((n) => ehRetrato.has(n))) {
    console.log(`  ⚠ ${rotulo} em ${cenas}  (${dist}) — retrato em _media/pessoa/: isento, mas confira se os dois usos são a mesma pessoa no mesmo papel`);
    continue;
  }
  // ESCAPE 3 · SÍMBOLO INSTITUCIONAL (bandeira, brasão, logo). Repetir aqui não é preguiça: a
  // [ARTE-57] MANDA pôr a bandeira oficial ao lado de todo país nomeado na tela, então um vídeo
  // sobre dois países repete as duas bandeiras POR CONSTRUÇÃO. Trocar de bandeira a cada menção
  // é que seria o defeito. O espectador não "reconhece o plano" — ele reconhece o PAÍS, que é
  // exatamente o efeito pretendido. Isenta, mas AVISA (isenção que cala é isenção que esconde).
  if (nomes.every((n) => ehSimbolo.has(n))) {
    const fundo = nomes.every((n) => ehFundoDeCena.has(n));
    console.log(fundo
      ? `  ⚠ ${rotulo} em ${cenas}  (${dist}) — fundo do apresentador gerado na casa: repete por construção, isento`
      : `  ⚠ ${rotulo} em ${cenas}  (${dist}) — símbolo institucional (_media/flags|logo/): isento por [ARTE-57], mas confira se é sempre a MESMA entidade`);
    continue;
  }
  const faltam = comPos.filter((c) => !declarou(c.id)).map((c) => stemDaChave(c.id));
  const dica = declarantes.length
    ? `  (declarado só em ${declarantes.map((c) => stemDaChave(c.id)).join("/")} — falta em ${faltam.join("/")})`
    : "  (se for costura deliberada, declare data-qc-reuso nas duas pontas)";
  const prova = reencodeDoMesmoPlano
    ? "  ⛔ MESMO PLANO em dois arquivos: bytes distintos (dois reencodes) mas imagem IDÊNTICA nos 2 instantes medidos — foi baixado duas vezes."
    : "";
  console.log(`  ✗ ${rotulo} em ${comPos.length} cenas: ${cenas}  (${dist})${dica}${prova}`);
  entre++; erros++;
}
if (!entre) console.log("  ✓ nenhum arquivo de mídia aparece em duas cenas sem declaração");

// Isenção que cala é isenção que esconde: mídia inativa não conta como repetição, mas aparece.
if (inativos.length) {
  console.log(`\n## mídia no DOM e fora da janela (${inativos.length}) — não conta como repetição, mas PESA no render`);
  for (const i of inativos) console.log(`  ⏻ ${i.cena} · ${i.nome}\n      ${i.motivo}`);
}

console.log(`\n${erros ? `✗ ${erros} repetição(ões) — ARTE-108` : "✓ sem repetição de clipe"}`);
process.exit(erros ? 1 : 0);
