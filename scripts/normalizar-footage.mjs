#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/normalizar-footage.mjs (linhas 1-467, commit 4afda12).
// O que mudou: ffmpeg/ffprobe LOCAIS por scripts/stock/lib/ferramentas.mjs (FFMPEG_PATH/FFPROBE_PATH,
// REGIE_FFMPEG/REGIE_FFPROBE ou PATH; array, sem shell, windowsHide) e checados ANTES da varredura —
// sem ffprobe, o estúdio imprimia "? ffprobe não leu, pulando" arquivo por arquivo e saía 0 com
// "nada a fazer"; a saída do ffprobe do Windows (\r\n) é lida com CRLF tolerado; nomes por basename
// (o `split("/")` do estúdio devolvia o caminho inteiro com contrabarra); a troca do original pelo
// convertido usa rename com nova tentativa (o Defender segura o arquivo recém-escrito); out/<proj>
// é o da pasta do canal (aceita o slug ou o caminho, com / ou \); frames-conform mora em
// scripts/stock/lib/. A régua (30/1 exato, all-intra, codec que o Chrome abre, modos, verificação
// antes de trocar, original guardado em _fps-original/) ficou igual.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// NORMALIZAR FOOTAGE PARA 30 fps — o conserto de raiz do "vídeo de fundo travando".
//
// O DEFEITO (medido em 26/jul/2026, `avioes-pequenos`, reportado pelo Mateus):
// *"todos os gráficos que tinham footage de vídeo no fundo ficaram travados, travando diversas vezes
// por segundo"*. Ele conferiu cena a cena e o defeito estava em TODAS as cenas com vídeo.
//
// A CAUSA, provada por medição e não por intuição:
// O render captura frame a frame a 30 fps chamando `__renderAt(t)`, que faz `video.currentTime = f(t)`.
// Quando o footage é 25 fps (ou 24, 23,976, 59,94...), os instantes pedidos caem num grid que **não
// existe no arquivo**, e o browser devolve o mesmo frame para pedidos consecutivos. O fundo congela;
// o overlay animado por cima continua se movendo, e é por isso que o defeito escapa de todo gate:
// `mpdecimate` mede 97–100% de frames "distintos" porque a diferença está no overlay.
//
// A prova (diferença média entre frames consecutivos, mesmo trecho, mesmo método):
//   footage fonte 25 fps ....... 2,38  2,39  2,43  2,41  2,40  2,44   → liso (razão 1,06×)
//   clipe renderizado .......... 2,61  4,82  4,44  3,27  2,64  4,87   → ciclo fixo (razão 1,91×)
//   footage normalizado a 30 ... 4,97  4,48  5,71  5,97  5,00  4,38   → sem vale (razão 1,36×)
// O que importa é o MÍNIMO subir de 2,55 para 4,38: acabaram os frames em que o fundo não avança.
//
// ⚠️ O QUE **NÃO** ERA A CAUSA: o `seekTo` dos HTMLs pula o seek quando
// `Math.abs(v.currentTime-tt) < 0.02`, e 0,02 é maior que meio frame a 30 fps (0,0167). Parecia o
// culpado óbvio. Testei isolado — baixar para 0,001 **mudou o padrão e PIOROU** a razão (2,45×).
// Registrado aqui para ninguém "consertar" de novo por dedução.
//
// MODOS (a escolha é de custo × qualidade, medida em 4K):
//   --modo=simples      `fps=30`, repete o frame mais próximo.        16s de 4K em  0m37s
//   --modo=interpolado  `minterpolate` com compensação de movimento.  16s de 4K em 10m13s (16× mais caro)
// O `simples` troca o travamento IRREGULAR (que salta ao olho) por um judder REGULAR de pulldown, que
// é o que cinema faz há décadas. O `interpolado` inventa os frames que faltam: mais fluido, mas pode
// gerar artefato em movimento rápido ou corte — por isso não é o default.
//
// Uso: node scripts/normalizar-footage.mjs <proj> [--modo=conform|simples|interpolado] [--fps=30] [--dry] [--forcar]
// Idempotente: asset já na taxa alvo é PULADO. O original vai para `_media/_fps-original/` antes de
// ser trocado — a ordem é sempre guardar, verificar, e só então substituir.

import { readdirSync, existsSync, mkdirSync, statSync, unlinkSync } from "node:fs";
import { join, relative, dirname, basename } from "node:path";
// [porte Regie] frames-conform mora em scripts/stock/lib/; ffmpeg/ffprobe pela lib do canal
import { julgarFramesConform, esperadosNoConform } from "./stock/lib/frames-conform.mjs";
import { erroFerramentaNaoMede, erroSemFerramenta, executavelFf, rodarSync } from "./stock/lib/ferramentas.mjs";
// [porte Regie] o rascunho da caça mora DENTRO de _media na Régie (_media/_caca/<cena>/<fonte>/)
import { ehPastaDeRascunhoDeCaca } from "./stock/lib/rascunho-de-caca.mjs";
import { importarDoMotor } from "./lib/motor.mjs";
import { linhasCsv, valorCsv } from "./lib/ffprobe-csv.mjs";   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
// [porte Regie] rename com nova tentativa: o Defender segura o arquivo recém-escrito (EPERM/EBUSY)
let renameSync, exigirFerramenta;
try { ({ renomearComRetentativa: renameSync, exigirFerramenta } = await importarDoMotor("src/midia/arquivos.mjs")); }
catch (e) { console.error(e.message); process.exit(2); }   // sem motor: a mensagem de motor.mjs diz o conserto

const args = process.argv.slice(2);
// [porte Regie] slug ou caminho out/<proj> (com / ou \\)
const proj = (args.find(a => !a.startsWith("--")) || "").replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean).pop();
const flag = (n, d = null) => {
  const a = args.find(x => x.startsWith(`--${n}=`));
  return a ? a.slice(n.length + 3) : (args.includes(`--${n}`) ? true : d);
};
const MODO = String(flag("modo", "conform"));   // 27/jul: conform é o padrão (escolha do Mateus, medida)
const FPS = +flag("fps", 30);
const DRY = !!flag("dry");
const FORCAR = !!flag("forcar");

if (!proj || !["conform", "simples", "interpolado"].includes(MODO)) {
  console.error("uso: node scripts/normalizar-footage.mjs <proj> [--modo=conform|simples|interpolado] [--fps=30] [--dry] [--forcar]");
  process.exit(2);
}

const MEDIA = join(process.cwd(), "out", proj, "_media");   // [porte Regie] a pasta do canal é a atual
if (!existsSync(MEDIA)) { console.error(`✗ sem ${MEDIA}`); process.exit(1); }
// [porte Regie] sem ffprobe, "não leu, pulando" em todo arquivo e "nada a fazer" no fim seria mentira
// [I2] a conferência do MOTOR (exigirFerramenta): ausente = "instale"; presente mas que não se identifica
// como ffprobe/ffmpeg (o caminho aponta outro programa) = "o caminho apontado não serve".
for (const f of ["ffprobe", "ffmpeg"]) {
  try { await exigirFerramenta(f, "medir e normalizar o footage"); }
  catch (e) { console.error(e.message); process.exit(2); }
}
const GUARDA = join(MEDIA, "_fps-original");

const sh = (c, a) => rodarSync(c, a, { maxBuffer: 1 << 26 });   // [porte Regie] array, sem shell
function taxa(f) {
  try {
    const r = valorCsv(sh("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries",
      "stream=r_frame_rate", "-of", "csv=p=0", f]));   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
    const [n, d] = r.split("/").map(Number);
    return { texto: r, valor: d ? n / d : n };
  } catch { return null; }
}
/**
 * ⚠️ A DURAÇÃO QUE INTERESSA É A DO VÍDEO, NÃO A DO CONTAINER — e confundir as duas reprovou uma
 * conversão perfeita.
 *
 * `format=duration` devolve a duração do arquivo, que é a do stream MAIS LONGO. Quando a conversão
 * levava o áudio junto (`-c:a copy`, até 12/set/2026), ele saía com a duração ORIGINAL enquanto o
 * vídeo era conformado: num footage NTSC de 23,98 fps, o vídeo vira 8,87 s e o áudio continua com
 * 11,11 s — e o container relata 11,11 s. Hoje a saída é MUDA (`-an`, [SIS-457]) e essa fonte de
 * divergência secou; a régua fica, porque medir o stream de vídeo é o certo em qualquer hipótese e
 * porque os arquivos convertidos ANTES desta data seguem no acervo com o áudio original dentro.
 * Medido em 21/ago/2026 no `closeup-of-tiger-laying-in-grass-…-4K.mp4` do
 * `especies-humanas`: o gate acusou "duração 11,11s ≠ esperada 8,88s" e matou o lote de 49 cenas,
 * enquanto o vídeo estava CERTO — 266 frames a 30/1, 8,867 s, exatamente o que o `conform` promete.
 *
 * *Gate que mede a coisa errada não protege nada: ele reprova o certo e, no dia em que o errado
 * tiver o container do tamanho esperado, aprova o defeito.* Aqui a régua passa a ser o stream de
 * vídeo, com a contagem de frames como segunda fonte quando o stream não declara duração.
 */
function duracao(f) {
  try {
    const v = +valorCsv(sh("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries",
      "stream=duration", "-of", "csv=p=0", f]));   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
    if (v > 0) return v;
  } catch { }
  // MOV e alguns MP4 não trazem `duration` no stream. Frames ÷ taxa é exato e não olha o áudio.
  try {
    const t = taxa(f), n = frames(f);
    if (t?.valor > 0 && n > 0) return n / t.valor;
  } catch { }
  try { return +valorCsv(sh("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f])) || 0; }   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
  catch { return 0; }
}
// Contagem de frames — é a grandeza que o modo `conform` promete preservar. O `nb_frames` do
// container é instantâneo; quando ele não existe (comum em MOV/WebM), conta os frames de verdade.
function frames(f) {
  try {
    const r = +valorCsv(sh("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries",
      "stream=nb_frames", "-of", "csv=p=0", f]));   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
    if (r > 0) return r;
  } catch { }
  return framesMedidos(f);
}
// A MEDIÇÃO: decodifica o arquivo e conta o que sai. Cara (é um decode integral), então só se chama
// quando a declaração do contêiner não fecha — ver `lib/frames-conform.mjs` e a [SIS-457].
function framesMedidos(f) {
  try {
    return +valorCsv(sh("ffprobe", ["-v", "error", "-select_streams", "v:0", "-count_frames",
      "-show_entries", "stream=nb_read_frames", "-of", "csv=p=0", f])) || 0;   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
  } catch { return 0; }
}
/**
 * O arquivo é ALL-INTRA? — a metade do requisito da REND-47 que este script não media.
 *
 * Mesma leitura do `qc-footage-seekavel.mjs` (um assunto, uma medida): lê os `pict_type` dos
 * primeiros segundos e responde `true` só se TODOS forem `I`. Amostrar 3 s basta porque o padrão de
 * GOP se repete — e é o que o gate usa para reprovar, então usar outro critério aqui produziria
 * ferramentas discordando sobre o mesmo arquivo.
 *
 * Devolve `null` quando o ffprobe não lê: nesse caso o chamador NÃO deve tratar como defeito
 * (converter por dúvida custa uma hora de CPU por engano), mas também não pode afirmar que está bom.
 */
/**
 * O TERCEIRO requisito, que faltava aqui: o Chrome tem de CONSEGUIR DECODIFICAR o arquivo.
 *
 * O headless que renderiza não decodifica **ProRes**, HEVC/H.265, VP9 em container exótico nem
 * 10-bit/4:2:2. Um `.mov` ProRes 4K abre no ffprobe, mede 30 fps, passa no all-intra (ProRes É
 * all-intra) e atravessa este script como "já ok" — e a cena renderiza **PRETA**.
 *
 * Medido no `mamute-de-volta` em 11/ago/2026: três clipes assinados baixados em ProRes deixaram
 * `s102`, `s104` (dois takes) e `card-03` sem imagem. O `shot.mjs` avisava (`ok-COM-MIDIA-FALTANDO`),
 * o `qc-procedencia` dava a mídia por boa (procedência é sobre a FONTE, não sobre o codec) e nada
 * reprovava. O defeito só apareceria no render 4K, com três clipes pretos já pagos.
 *
 * Note a ironia que fazia o buraco: quanto MELHOR o arquivo (ProRes all-intra, o formato de
 * masterização), mais limpo ele passava pelos dois filtros anteriores. Qualidade de origem não é
 * compatibilidade de destino.
 */
const CODECS_OK = new Set(["h264", "vp8", "vp9", "av1"]);
function codecDe(f) {
  try {
    const [codec, pix] = linhasCsv(sh("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries",
      "stream=codec_name,pix_fmt", "-of", "csv=p=0", f]), 2)[0] || [];   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
    if (!codec) return null;
    return { codec: codec.trim(), pix: (pix || "").trim() };
  } catch { return null; }
}
/** true = o Chrome não abre isto. `null` do ffprobe NÃO vira defeito (mesma regra do allIntra). */
function indecodificavel(f) {
  const c = codecDe(f);
  if (!c) return false;
  if (!CODECS_OK.has(c.codec)) return true;
  return c.codec === "h264" && c.pix && c.pix !== "yuv420p" && c.pix !== "yuvj420p";
}

function allIntra(f) {
  try {
    const tipos = linhasCsv(sh("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries",
      "frame=pict_type", "-of", "csv=p=0", "-read_intervals", "%+3", f]), 1).map(([t]) => t);   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
    if (!tipos.length) return null;
    return tipos.every((t) => t === "I");
  } catch { return null; }
}

// ⚠️ RECURSIVO, e isso não é detalhe. A v1 lia só o nível de cima de `_media/` — no `avioes-pequenos`
// os assets ficam ali e funcionou, mas no `compilado-previsoes-jiang` eles vivem em SUBPASTAS por
// assunto (`_media/nvidia-chips-e-logo/`, `_media/dessalinizacao-golfo/`). Resultado medido em
// 26/jul/2026: o script disse "0 a converter" para um projeto com 4 assets fora de 30 fps, e as
// cenas `nvidia-recorde-historico` e `nvidia-5-trilhoes` continuaram travando. Varredura que não
// alcança o arquivo devolve "nada a fazer" — que é indistinguível de "está tudo certo".
//
// ⚠️ E A VARREDURA TEM DE PARAR NO MASTER — este script se chama normalizar-FOOTAGE, e `_media/`
// guarda mais que footage. `_media/_master-decupado.mp4` (e os `_master-editado`/`_master-edit`/
// `_master` que `xml-premiere-5camadas.mjs:168-177` procura) é o Bôco inteiro: ele ocupa a V1 do XML
// de 5 camadas e o ÁUDIO DELE É A NARRAÇÃO DO VÍDEO. Dois estragos distintos moram aí, e o segundo
// existe desde sempre: com `-an` o master perderia a voz, e o modo `conform` — que conserva FRAMES e
// muda a DURAÇÃO — dessincronizaria o master de `_cortes.json`, de `words.json` e de toda a
// finalização. `_media/_mascara-boco-*.mov` cai na mesma vala: é ProRes 4444 com alpha, e converter
// para h264 yuv420p descarta o canal alpha inteiro.
//
// A régua é o prefixo `_` no NOME DO ARQUIVO, e ela foi MEDIDA antes de virar regra: em
// `gs://…/out/ate-que-altura-construir/_media/`, dos 56 vídeos, o único com `_` no começo é o
// `_master-decupado.mp4` — footage de caça sai com nome de cena (`s01-burj-khalifa-aereo-…`). Vale
// só para ARQUIVO: `_cacaB/` e `_fps-original/` são PASTAS, e a primeira guarda footage legítimo.
//
// A assimetria justifica a escolha: pular footage por engano custa um "não normalizou" que o
// `qc-footage-seekavel` acusa em seguida; converter o master por engano gasta reencode de gigabytes
// e troca o arquivo que a finalização inteira referencia.
// [porte Regie] Canal faceless não tem master do Bôco nem máscara; a régua do `_` fica mesmo assim —
// ela protege qualquer arquivo que a casa marque como não-footage, e a finalização do motor ainda
// aceita um _master em _media/.
//
// [porte Regie] E A VARREDURA NÃO DESCE NO RASCUNHO DA CAÇA. No estúdio o rascunho morava fora de
// _media (hub em ~/Downloads, /dados/tmp); na Régie ele mora DENTRO: o buscar-midia do motor grava
// _media/_caca/<cena>/acervo-livre/ e o api-oficial grava _media/_caca/<cena>/shutterstock/. Descer
// ali reencodava candidato rejeitado e o original licenciado — e, pior, trocava o sha256 do rascunho,
// e o `buscar-midia <proj> entregar` do motor passava a RECUSAR a entrega ("casamento por sha256").
// Provado na revisão v1 (23/09/2026) com --dry e com uma rodada real. A régua é a mesma do
// qc-procedencia (rascunho-de-caca.mjs): `_caca/` e `_caca-<cena>/`. Footage só vira alvo depois de
// ENTREGUE em _media/footage/<cena>/.
function varrer(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith("_TESTE") || e.name === "_fps-original") continue;
    if (e.isDirectory() && ehPastaDeRascunhoDeCaca(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...varrer(p));
    else if (e.name.startsWith("_")) continue;               // master, máscara e afins: não é footage
    else if (/\.(mp4|mov|webm|mkv)$/i.test(e.name)) out.push(p);
  }
  return out;
}
const TOLERAR_NTSC = process.argv.includes("--tolerar-ntsc");
const alvos = varrer(MEDIA);

console.log(`\n◆ NORMALIZAR FOOTAGE · ${proj} · alvo ${FPS} fps · modo ${MODO}`);
console.log(`  ${alvos.length} arquivo(s) de vídeo em ${MEDIA}\n`);

const fila = [];
let jaOk = 0;
const naoLidos = [];   // [porte Regie] arquivo que o ffprobe não mediu NÃO é "já ok" — é desconhecido
for (const f of alvos) {
  const t = taxa(f);
  if (!t) { naoLidos.push(f); console.log(`  ? ${basename(f)} — ffprobe não leu, pulando`); continue; }   // [porte Regie] basename
  // ⚠️ A TOLERÂNCIA DE 0,5% ERA O BURACO — ela dava passe livre justamente ao 29,97 (05/ago/2026).
  //
  // O comentário antigo dizia "reencodar isso seria perda sem ganho", e o raciocínio parece sólido:
  // 29,97 e 30 são visualmente idênticos. Mas o que quebra NÃO é a aparência, é o SEEK. O render
  // pede `currentTime = k/30` exato; num arquivo a 30000/1001 esses instantes caem ENTRE quadros, e
  // o browser devolve o quadro repetido — ou nada. O Mateus viu e descreveu: *"a s39 ficou com erro
  // de render, os frames pretos ficaram piscando parece."* Dois dos quatro footages daquela cena
  // estavam em 29,97 e passaram por aqui como "já em 30 fps".
  //
  // A defasagem é pequena e CUMULATIVA — é isso que a tolerância percentual não enxerga: 0,1% de
  // erro por quadro vira um quadro inteiro de deriva em 33 s de cena.
  //
  // Agora a régua é a IGUALDADE EXATA da fração: 30/1 passa, 30000/1001 não. `--tolerar-ntsc`
  // devolve o comportamento antigo para quem tiver um caso em que reencodar custe mais que o defeito.
  const exato = Math.abs(t.valor - FPS) < 1e-6;
  const ntscOk = TOLERAR_NTSC && Math.abs(t.valor - FPS) / FPS < 0.005;
  // ⚠️ O FPS CERTO NÃO BASTA — a REND-47 pede DUAS coisas, e este filtro só olhava uma.
  //
  // Um arquivo que já nasce em 30/1 exato caía no `continue` e nunca era convertido, ainda que
  // fosse `IPBBP…`. E é o B-frame que faz o render travar (o motivo está escrito em `converte()`,
  // logo abaixo): o Chrome precisa decodificar desde o keyframe anterior para entregar um frame do
  // meio, e sob seek repetido a entrega fica imprecisa.
  //
  // MEDIDO em `fatos-a380` (09/ago/2026): a normalização converteu 22 arquivos e reportou sucesso
  // limpo, mas o `qc-footage-seekavel` seguia reprovando **4** — `s46-aereo-pista-taxi-cruzamento`,
  // `s46-aereo-widebody-manobrando`, `card-t1-a380-perfil-lateral-dois-decks` e
  // `card-t2-cabine-cheia-de-passageiros`, todos `BIP` **e todos já em 30 fps**. Eles nunca
  // apareceram na lista do `--dry`: para esta ferramenta não existiam.
  //
  // O dano não é só o arquivo que escapa: quando TODO o footage já está na taxa alvo, o script
  // imprimia `✓ nada a fazer` e saía 0 — dando por resolvido um projeto que trava o render inteiro.
  // *Ferramenta que mede metade do requisito e declara sucesso é pior que ferramenta que não roda.*
  const intra = allIntra(f);
  // O codec vem ANTES dos outros dois na ordem de gravidade: fps errado e B-frame degradam o seek;
  // codec que o Chrome não abre não entrega imagem NENHUMA. E é o único dos três que passa despercebido
  // justamente por o arquivo ser bom demais (ProRes é all-intra e costuma vir em fps exato).
  const semCodec = indecodificavel(f);
  if (!FORCAR && !semCodec && (exato || ntscOk) && intra !== false) { jaOk++; continue; }
  fila.push({ f, taxa: t, dur: duracao(f), soBFrames: !semCodec && (exato || ntscOk) && intra === false, semCodec });
}

// [porte Regie] [I2] ffprobe que EXISTE mas não mede NADA: o defeito é do programa, não dos vídeos. Um
// erro claro, uma vez — e não "? não leu" em todo arquivo seguido de "nada a fazer" com exit 0.
if (alvos.length && naoLidos.length === alvos.length) {
  console.error(`\n${erroFerramentaNaoMede("ffprobe", alvos.length, basename(alvos[0])).message}`);
  process.exit(2);
}

const segTotal = fila.reduce((a, x) => a + x.dur, 0);
const ritmo = MODO === "simples" ? 37 / 16 : 613 / 16;   // segundos de CPU por segundo de vídeo 4K, MEDIDO
const soB = fila.filter((x) => x.soBFrames).length;
console.log(`  já em ${FPS} fps E all-intra: ${jaOk}   ·   a converter: ${fila.length}${soB ? ` (${soB} só por B-frames — o fps já estava certo)` : ""}   ·   ${segTotal.toFixed(0)}s de vídeo`);
console.log(`  custo estimado (ritmo medido em 4K): ${(segTotal * ritmo / 60).toFixed(1)} min\n`);

// [porte Regie] "nada a fazer" só quando TUDO foi medido: arquivo que o ffprobe não leu pode travar o
// render do mesmo jeito, e o exit 0 diria ao agente que o projeto está pronto.
const avisoNaoLidos = () => {
  if (!naoLidos.length) return;
  console.log(`\n  ✗ ${naoLidos.length} arquivo(s) que o ffprobe NÃO mediu — não sei se estão em ${FPS} fps all-intra:`);
  for (const f of naoLidos.slice(0, 10)) console.log(`       ${relative(MEDIA, f).split("\\").join("/")}`);
  console.log(`     Arquivo corrompido ou incompleto? Rebaixe-o, ou confira com: ffprobe -v error -show_streams <arquivo>`);
};
if (!fila.length) {
  if (naoLidos.length) { avisoNaoLidos(); process.exit(1); }
  console.log(`✓ nada a fazer — todo footage já está em ${FPS} fps E all-intra.`); process.exit(0);
}
for (const x of fila) console.log(`    ${basename(x.f).padEnd(46)} ${x.taxa.texto.padEnd(11)} ${x.dur.toFixed(1)}s${x.semCodec ? `  ← ⛔ ${codecDe(x.f)?.codec ?? "?"}: o Chrome NÃO decodifica — a cena renderiza PRETA` : x.soBFrames ? "  ← fps ok, entra por B-frames" : ""}`);
const nCodec = fila.filter((x) => x.semCodec).length;
if (nCodec) {
  console.log(`\n  ⛔ ${nCodec} arquivo(s) em codec que o navegador do render NÃO ABRE (ProRes/HEVC/10-bit).`);
  console.log(`     Estes não degradam o seek: eles não entregam imagem. Sem conversão, a cena sai PRETA`);
  console.log(`     no 4K — e nenhum outro gate pega (procedência olha a FONTE, não o codec).`);
}

if (DRY) { avisoNaoLidos(); console.log(`\n(--dry: não converti nada)`); process.exit(naoLidos.length ? 1 : 0); }

if (!existsSync(GUARDA)) mkdirSync(GUARDA, { recursive: true });

// ── O MODO `conform` — PADRÃO desde 27/jul/2026, por escolha do Mateus ────────────────────────────
//
// Ele comparou os três lado a lado no player e escolheu este. A diferença em relação ao `simples`
// não é de grau, é de natureza:
//
//   simples (`fps=30`) ...... REPETE o frame mais próximo. Mantém a velocidade real, mas o judder
//                             CONTINUA — só fica regular (pulldown) em vez de irregular. Medido:
//                             o mínimo da série sobe, mas os vales não somem.
//   conform (`setpts`) ...... cada frame do footage cai em EXATAMENTE um frame de saída. O judder
//                             DESAPARECE (CV 0,442 → 0,156); em troca a ação acelera na razão
//                             (+20% em 25→30, +25% em 24→30).
//   interpolado ............. inventa os frames que faltam: liso E na velocidade certa, mas custa
//                             ~46× o tempo real de CPU (medido: 5 s de vídeo em 3 min 49 s).
//
// ⚠️ E o conform tem DOIS sentidos, que o modo `simples` não distinguia:
//   footage MAIS LENTO que o render (25→30) → conform, cada frame vira um frame, acelera;
//   footage MAIS RÁPIDO (60→30) → DESCARTA 1 a cada 2. A velocidade se mantém e não há o que
//   inventar. Tratar 60 fps com `fps=30` desperdiça metade dos frames de forma irregular.
const razaoFps = (fpsOrig) => fpsOrig / FPS;
function filtroPara(fpsOrig) {
  if (MODO === "interpolado") return `minterpolate=fps=${FPS}:mi_mode=mci:mc_mode=aobmc:vsbmc=1`;
  if (MODO === "simples") return `fps=${FPS}`;
  const r = razaoFps(fpsOrig);
  if (r >= 1.9) { const passo = Math.round(r); return `select='not(mod(n\\,${passo}))',setpts=N/${FPS}/TB`; }
  return `setpts=N/${FPS}/TB`;
}
const VF = MODO === "simples"
  ? `fps=${FPS}`
  : MODO === "interpolado" ? `minterpolate=fps=${FPS}:mi_mode=mci:mc_mode=aobmc:vsbmc=1`
  : null;   // conform: o filtro depende do fps de CADA arquivo — ver filtroPara()

// ── PARALELISMO ───────────────────────────────────────────────────────────────────────────────────
// `minterpolate` consome ~1,5 núcleo por processo (medido: 148% de CPU). Rodar em série numa VM de
// 16 vCPUs deixa 14 ociosos e transforma 40 min em 6 h — foi o que aconteceu na primeira execução.
// O default divide os núcleos por 2, deixando folga para o resto do estúdio (o despachante e os
// timers dividem a mesma máquina; ocupar tudo derruba o que roda ao lado).
import { cpus } from "node:os";
import { spawn } from "node:child_process";
const PAR = Math.max(1, +flag("par", Math.max(1, Math.floor(cpus().length / 2))));
console.log(`  paralelismo: ${PAR} (de ${cpus().length} núcleos)\n`);

function converte(x) {
  return new Promise(res => {
    const nome = basename(x.f);   // [porte Regie] o split("/") devolvia o caminho inteiro no Windows
    const tmp = x.f.replace(/\.(\w+)$/, `.__norm.mp4`);
    // ⚠️⚠️ ALL-INTRA É OBRIGATÓRIO, E FOI A CAUSA FINAL DO "footage travando" (27/jul/2026).
    //
    // O footage normalizado saía com GOP normal — `I B B B P B B B P …`, um único keyframe no
    // começo e depois só frames DEPENDENTES, incluindo B-frames (codificados fora da ordem de
    // exibição). O render é frame a frame: para cada instante ele faz `video.currentTime = t` e
    // captura. Para entregar um frame do meio de uma cadeia dessas, o Chrome precisa decodificar
    // desde o keyframe anterior — e sob seek repetido a entrega fica IMPRECISA. O resultado é o
    // vídeo travando e voltando, exatamente como o Mateus descreveu cinco vezes.
    //
    // A PROVA que fechou o caso: gerei o footage original no MESMO formato do clipe (4K, 166 Mbps)
    // porém ALL-INTRA, sem passar pelo render. Ele rodou 100% no QuickTime dele — o que eliminou o
    // formato e a taxa como suspeitos. Convertido o footage para all-intra e re-renderizado, o
    // travamento SUMIU. Veredito dele: *"resolveu, o vídeo tá 100%, não travou mais"*.
    //
    // Por que o `requestVideoFrameCallback` (o conserto anterior) não bastou: ele garante que o
    // frame foi APRESENTADO, não que seja o frame CERTO. São dois defeitos distintos e ambos
    // precisavam do seu conserto — a oscilação caiu de 24,1% para 0% com o rVFC, e o travamento
    // caiu com o all-intra.
    //
    // Custo: o arquivo fica ~2× maior (84 → 161 Mbps no caso medido). É insumo intermediário, some
    // depois da entrega, e a alternativa é o vídeo tremendo na tela de milhões de pessoas.
    // ⚠️ NUNCA remova `keyint=1` daqui "para economizar espaço".
    // ⚠️⚠️ `-r ${FPS}` É OBRIGATÓRIO — sem ele o `setpts` NÃO MUDA A TAXA (medido em 07/ago/2026).
    //
    // O filtro `setpts=N/FPS/TB` reescreve os PTS, mas quem decide a taxa do arquivo de saída é o
    // encoder, e sem `-r` ele HERDA a do input. Medido no `orcas-nao-matam`: um footage 30000/1001
    // entrou, o script disse "✓ convertido", e o arquivo saiu com r_frame_rate, avg_frame_rate,
    // nb_frames, time_base e duration IDÊNTICOS ao original — só o all-intra pegou. Custo real:
    // 51 MB viraram 231 MB de reencode e o defeito de REND-47 que isto existe para matar continuou
    // ali, agora com carimbo verde por cima.
    //
    // Nos modos `simples`/`interpolado` o próprio filtro já fixa a taxa e o `-r` é redundante e
    // inofensivo; no `conform` ele é a diferença entre corrigir e fingir que corrigiu.
    // [porte Regie] o executável local (FFMPEG_PATH/REGIE_FFMPEG/PATH), sem janela de console no Windows
    const p = spawn(executavelFf("ffmpeg"), ["-y", "-v", "error", "-i", x.f, "-vf", (VF || filtroPara(x.taxa?.valor || 30)),
      "-r", String(FPS),
      "-c:v", "libx264", "-crf", "14", "-preset", "medium", "-pix_fmt", "yuv420p",
      "-x264-params", "keyint=1:min-keyint=1:scenecut=0:bframes=0",
      // ⚠️⚠️ `-an`, E NÃO `-c:a copy` — a faixa de áudio que ninguém usa derrubou SETE cenas
      // [SIS-457, 11/set/2026]. `.mov` de acervo costuma trazer `pcm_s16le`, e o MP4 de destino
      // recusa: `Could not find tag for codec pcm_s16le in stream #1, codec not currently supported
      // in container` → `Error initializing output stream`. O ffmpeg sai != 0, o arquivo entra na
      // lista de reprovados e o lote inteiro cai junto.
      //
      // Por que MUDO e não `-c:a aac`: nada consome o áudio DESTE arquivo. O consumidor do footage
      // normalizado é o `<video>` da cena dentro do Chrome headless, e o render captura FRAME a
      // frame (`__renderAt` → screenshot); o som do vídeo do ar vem do master e da trilha, pelas
      // faixas A1–A3 do XML. Reencodar para AAC gastaria CPU em cada arquivo para produzir uma
      // faixa que nenhuma etapa abre — e ainda deixaria o footage carregando áudio de acervo que
      // não temos razão para levar adiante.
      //
      // ⚠️ E ESTE É UM DEFEITO QUE O MAC NÃO MOSTRA. Medido em 12/set/2026: o ffmpeg 8.0.1 do
      // Homebrew ACEITA PCM em MP4 (grava como `ipcm`, suporte que entrou no 7.1) e converte sem
      // reclamar; o ffmpeg 4.4.2 do Ubuntu 22.04 das VMs de render — a máquina que de fato roda
      // isto — recusa. Conversão testada aqui e quebrada lá é a mesma família das armadilhas de
      // `stat`/`setsid` do CLAUDE.md, agora na versão da ferramenta em vez da do shell.
      "-an", tmp], { stdio: ["ignore", "ignore", "pipe"], windowsHide: true });
    let err = "";
    // [porte Regie] ffmpeg que não sobe (caminho errado) não pode pendurar a fila: vira falha deste arquivo
    p.on("error", (e) => { err = e?.code === "ENOENT" ? erroSemFerramenta("ffmpeg").message.split("\n")[0] : String(e?.message || e); });
    p.stderr.on("data", d => { err += d.toString().slice(0, 400); });
    p.on("close", code => {
      try {
        if (code !== 0) throw new Error(err.trim().split("\n").pop() || `ffmpeg saiu ${code}`);
        // VERIFICA antes de trocar: taxa certa e duração esperada. Artefato ruim não substitui o bom.
        const t2 = taxa(tmp), d2 = duracao(tmp);
        // ⚠️ A RÉGUA DA SAÍDA TEM DE SER A MESMA DA ENTRADA — era aqui que o erro passava.
        //
        // A DETECÇÃO foi endurecida para igualdade exata em 05/ago (30/1 passa, 30000/1001 não),
        // mas esta verificação continuou com a tolerância de 0,5% — a MESMA que o comentário lá em
        // cima chama de "o buraco". Com duas réguas diferentes o script entrava em contradição
        // silenciosa: detectava 29,97 como ERRADO, convertia, e aceitava 29,97 como CERTO. Sempre
        // "✓ convertido", nunca corrigido — e na rodada seguinte reconvertia o mesmo arquivo, de
        // novo com sucesso, para sempre. Gate que mede a saída por régua mais frouxa que a entrada
        // não é gate: é carimbo. [REND-92]
        const exato2 = t2 && Math.abs(t2.valor - FPS) < 1e-6;
        const ntscOk2 = t2 && TOLERAR_NTSC && Math.abs(t2.valor - FPS) / FPS < 0.005;
        if (!exato2 && !ntscOk2) throw new Error(`saiu em ${t2?.texto || "?"} (esperado ${FPS}/1 exato)`);
        // A duração ESPERADA depende do modo: `conform` conserva os FRAMES, não os segundos — é o
        // que o comentário do filtro chama de "acelera na razão". Cobrar a duração original aqui
        // reprovaria justamente a conversão bem-feita de 25→30 (que encurta 17%).
        const rz = (x.taxa?.valor || FPS) / FPS;
        let durEsperada = MODO === "conform"
          ? (rz >= 1.9 ? x.dur * (rz / Math.round(rz)) : x.dur * rz)
          : x.dur;
        if (MODO === "conform") {
          const passo = rz >= 1.9 ? Math.round(rz) : 1;
          // O julgamento vive em `lib/frames-conform.mjs`: declaração primeiro (barata), medição só
          // quando ela acusa — para separar "a conversão perdeu frame" de "o arquivo já vinha curto".
          const v = julgarFramesConform({
            origDeclarado: frames(x.f),
            saidaDeclarado: frames(tmp),
            passo,
            medir: () => ({ orig: framesMedidos(x.f), saida: framesMedidos(tmp) }),
          });
          if (!v.ok) throw new Error(v.motivo);
          if (v.truncadoNaOrigem) {
            // A origem está truncada e a conversão entregou TUDO que existia. A duração declarada
            // do original também mente (ela vem do mesmo contêiner), então cobrar `x.dur` aqui
            // reprovaria a conversão pelo mesmo motivo errado — a régua passa a ser o que se mediu.
            durEsperada = esperadosNoConform(v.medido, passo) / FPS;
            console.log(`  ⚠ ${nome.padEnd(46)} truncado NA ORIGEM: declara ${v.declarado} frames, `
              + `decodifica ${v.medido}; convertidos ${v.frames}. A conversão não perdeu nada — `
              + `o arquivo de acervo é que está curto.`);
          }
        }
        if (x.dur > 0 && Math.abs(d2 - durEsperada) > 0.25)
          throw new Error(`duração ${d2.toFixed(2)}s ≠ esperada ${durEsperada.toFixed(2)}s (original ${x.dur.toFixed(2)}s, modo ${MODO})`);
        // O guardado ESPELHA a subpasta de origem: com `_media/a/x.mp4` e `_media/b/x.mp4`, jogar os
        // dois em `_fps-original/x.mp4` faria o segundo sobrescrever o primeiro — e o original
        // perdido é justamente o que não se recupera.
        const rel = relative(MEDIA, x.f);
        const destino = join(GUARDA, rel);
        mkdirSync(dirname(destino), { recursive: true });
        // ⚠️ NUNCA sobrescrever um original já guardado. Se o arquivo em `_media` for produto de uma
        // conversão anterior (o caso do bug acima, que reconvertia em laço), mover por cima trocaria
        // o ORIGINAL VERDADEIRO por um reencode — e a cada rodada a perda seria definitiva, porque
        // `_fps-original` é a única cópia que sobrou depois que a produção limpa o disco.
        if (existsSync(destino)) { unlinkSync(x.f); }
        else renameSync(x.f, destino);          // guarda o original ANTES de pôr o novo no lugar
        renameSync(tmp, x.f);
        console.log(`  ✓ ${nome.padEnd(46)} ${(statSync(x.f).size / 2 ** 20).toFixed(0)} MB`);
        res(true);
      } catch (e) {
        if (existsSync(tmp)) { try { unlinkSync(tmp); } catch { } }
        console.log(`  ✗ ${nome.padEnd(46)} ${String(e.message).slice(0, 110)}`);
        res(false);
      }
    });
  });
}

let ok = 0, falhou = 0, prox = 0;
async function worker() {
  while (prox < fila.length) {
    const x = fila[prox++];
    (await converte(x)) ? ok++ : falhou++;
  }
}
await Promise.all(Array.from({ length: Math.min(PAR, fila.length) }, worker));

avisoNaoLidos();
console.log(`\n${falhou || naoLidos.length ? "⚠" : "✓"} ${ok} convertido(s) · ${falhou} falha(s)${naoLidos.length ? ` · ${naoLidos.length} não medido(s)` : ""}`);
console.log(`  originais preservados em ${GUARDA}`);
if (ok) console.log(`  ⚠ as cenas que usam esses assets precisam de RE-RENDER para o conserto valer.`);
process.exit(falhou || naoLidos.length ? 1 : 0);
