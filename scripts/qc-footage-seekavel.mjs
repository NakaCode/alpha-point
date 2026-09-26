// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-footage-seekavel.mjs (linhas 1-143, commit 4afda12).
// O que mudou: sem shell — ffprobe/ffmpeg por execFileSync com array (o estúdio montava string de shell com `mv`, que o cmd.exe
// não tem) e a troca de arquivo por fs.renameSync com nova tentativa (antivírus do Windows); o executável vem de
// FFPROBE_PATH/FFMPEG_PATH, REGIE_FFPROBE/REGIE_FFMPEG ou o PATH (regra de scripts/stock/lib/ferramentas.mjs, carregada sob
// demanda), e sem ffprobe — ou com um "ffprobe" que existe e não mede (outro programa, build quebrado) — o gate sai 2 (NÃO MEDIDO)
// com o conserto; arquivo que o ffprobe não leu fica numa conta À PARTE (nunca somado aos seekáveis) e, sem reprova, sai 2;
// o projeto é o 1º argumento que não é flag, e é achado também na raiz do canal. A regra REND-47 e o filtro de pastas ficaram.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// scripts/qc-footage-seekavel.mjs — GATE: todo footage que o render lê tem de ser SEEKÁVEL.
//
// ⚠️ A LEI QUE ESTE GATE FAZ CUMPRIR (REND-47, 27/jul/2026) — o defeito custou o dia inteiro e o
// Mateus teve de reportá-lo CINCO vezes antes de eu achar:
//
//   O render é frame a frame: para cada instante faz `video.currentTime = t` e captura. Footage com
//   GOP normal (`I B B B P B B B P …`) tem UM keyframe no começo e depois só frames dependentes —
//   incluindo B-frames, codificados fora da ordem de exibição. Para entregar um frame do meio, o
//   Chrome decodifica desde o keyframe anterior, e sob seek repetido a entrega fica IMPRECISA.
//   Na tela: o vídeo trava e volta.
//
// A prova que fechou o caso: o MESMO footage, no MESMO formato e taxa do clipe (4K, 166 Mbps),
// porém ALL-INTRA e sem passar pelo render, rodou 100%. Isso eliminou formato, taxa e codec. Com o
// footage convertido para all-intra e re-renderizado, o travamento sumiu.
//
// ⚠️ Nenhum gate anterior pegava isto, e eu passei por SEIS medições erradas — hash exato, hash com
// tolerância, região, cadência, oscilação e casamento de frames. Todas mediam o ARQUIVO DE SAÍDA.
// O defeito estava na ENTRADA, numa propriedade que nenhuma delas olhava: a estrutura de keyframes.
//
// Uso: node scripts/qc-footage-seekavel.mjs <proj> [--corrigir] [--json]
import { readdirSync, existsSync, statSync, renameSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, basename, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { conferirFfprobe, ferramentasOuNaoMedi, naoMedi } from "./lib/modos.mjs";
import { linhasCsv } from "./lib/ffprobe-csv.mjs";   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs

// [porte Régie] o primeiro argumento que não é flag é o projeto (o estúdio lia argv[2] cru, e
// `--corrigir <proj>` tomava a flag por projeto).
const PROJ = process.argv.slice(2).find((a) => !a.startsWith("--"));
const CORRIGIR = process.argv.includes("--corrigir");
const JSONOUT = process.argv.includes("--json");
if (!PROJ) { console.error("uso: node scripts/qc-footage-seekavel.mjs <proj> [--corrigir]"); process.exit(2); }

// [porte Régie] aceita <proj>, out/<proj> com / ou \ e a pasta do projeto; o slug é procurado na raiz do canal.
const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const PASTA = (() => {
  const limpo = PROJ.replace(/[\\/]+$/, "");
  if (isAbsolute(limpo)) return limpo;
  if (existsSync(limpo) && statSync(limpo).isDirectory() && existsSync(join(limpo, "_media"))) return resolve(limpo);
  if (/^out[\\/]/.test(limpo)) return join(RAIZ, limpo);
  return existsSync(join("out", limpo, "_media")) ? join("out", limpo) : join(RAIZ, "out", limpo);
})();
const MEDIA = join(PASTA, "_media");
if (!existsSync(MEDIA)) { console.error(`✗ sem ${MEDIA}`); process.exit(2); }

/* [porte Régie] SEM SHELL. O estúdio montava `ffprobe … "${f}"` e `mv "${tmp}" "${f}"` como string de shell:
 * no Windows isso passa pelo cmd.exe, que não tem `mv`, expande `%+3` como variável e quebra em caminho com
 * aspas ou &. Aqui é execFileSync com array, e a troca de arquivo é fs.renameSync.
 * O executável: FFPROBE_PATH/FFMPEG_PATH, REGIE_FFPROBE/REGIE_FFMPEG, ou o nome no PATH (ffprobe.exe). */
const FF = await ferramentasOuNaoMedi("qc-footage-seekavel");   // o dono único da regra: scripts/stock/lib/ferramentas.mjs
const exe = (nome) => FF.executavelFf(nome);
const semFerramenta = (nome) => FF.erroSemFerramenta(nome, "medir a estrutura de keyframes do footage").message;   // a mensagem que ensina, do dono único
// Sem ffprobe o gate não mede NADA: sair 2 (NÃO MEDI) antes de varrer, em vez de imprimir "? não leu" por arquivo.
// [porte Régie] …e "existe mas não mede" (decisão I2) também: o FFPROBE_PATH apontando para o ffmpeg, ou um binário
// quebrado, respondia ao -version sem erro de ENOENT e o gate seguia — cada arquivo virava "? não leu" e era SOMADO aos
// seekáveis: "1/1 seekáveis · ✓ PASS" num clipe com B-frames (revisão v1).
{ const porque = conferirFfprobe(FF, "medir a estrutura de keyframes do footage"); if (porque) naoMedi("qc-footage-seekavel", porque); }
const probe = (args) => execFileSync(exe("ffprobe"), args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], windowsHide: true }).trim();

// ⚠️ O PONTO CEGO QUE ESTE GATE TEVE ATÉ 31/jul/2026: ele pulava TODA pasta começada por `_`, e a
// pesquisa de imagens agrupa footage exatamente assim — `_media/footage/_mar-egeu-mediterraneo/`.
// Resultado medido no `odisseia-real`: o gate enxergava **12 de 27** vídeos. Os 15 escondidos incluíam
// os dois do `s69-consenso-meio-termo` (`asprovalta-costa-egeu-grecia`, `mykonos-falesias-egeu-turquesa`),
// ambos com `has_b_frames=2` — o defeito EXATO que este arquivo existe para matar. O Mateus viu o
// travamento na tela; o gate dizia "9/11 seekáveis" e passava.
//
// O `_` aqui nunca quis dizer "ignore": quis dizer "isto é organização interna". Só que a convenção
// vazou para as pastas de conteúdo, e o filtro virou um buraco que só cresce — quanto mais a pesquisa
// agrupa, menos o gate vê. Agora o descarte é NOMEADO: só o que é comprovadamente descartável (backup,
// original pré-conversão, temporário) fica de fora, e qualquer pasta nova entra na varredura por padrão.
// ⚠️⚠️ E O ERRO QUE A PRIMEIRA CORREÇÃO DISTO CAUSOU (31/jul, minutos depois): ao tirar o filtro do
// `_`, eu tirei junto a proteção dos ARQUIVOS que começam com `_` — e o gate saiu re-encodando o
// `_media/_master-decupado.mp4`, o master de 5,5 GB recém-gerado com o áudio do mic. Peguei no meio
// (o script escreve num `.__ai.mp4` temporário e só troca no fim, então o original sobreviveu), mas
// a lição fica: `_` no NOME DA PASTA é organização de conteúdo; `_` no NOME DO ARQUIVO, dentro de
// `_media/`, é ARTEFATO DO PROJETO — master, decupado, proxy de análise. Nunca é footage.
// Afrouxar um filtro é operação de precisão: relaxe só a dimensão que estava errada (aqui, PASTA),
// nunca as duas de uma vez.
// ⚠️ ESTA LINHA FOI CONSERTADA DUAS VEZES, EM MÁQUINAS DIFERENTES, E CADA CONSERTO PERDEU O DO OUTRO.
// A união está aqui; as duas medições são reais e nenhuma das duas metades pode sair:
//
// · (VM, 03/ago/2026, `uruguai-despovoado`) `_fps-original` FALTAVA e o gate acusava 10 reprovas
//   FANTASMA. A normalização de fps arquiva a cópia pré-conversão em `_media/_fps-original/`, com os
//   MESMOS nomes de arquivo do footage bom. O gate varria as duas e imprimia o mesmo basename como
//   `✓ all-intra` E como `✗ BIP` — o laudo se contradizia na mesma tela, e quem lesse só o total
//   ("10 REPROVAM") ia consertar footage que já estava certo. Pior: `--corrigir` re-encodaria a pasta
//   de ARQUIVO. `<qualquer-coisa>-original` é a mesma categoria que `_originais?`/`_orig` já cobrem —
//   só faltava a forma composta, junto de `_tmp`/`_lixo`/`_antigas`/`_pre-*`.
//
// · (Mac, 05/ago/2026) o mesmo defeito, medido de novo: "3 REPROVAM", e os 3 eram originais
//   arquivados, com os arquivos VIVOS todos passando. O conserto daqui listou `_fps-original`
//   explicitamente — mas a lista da VM, mais larga, tinha DERRUBADO `trilha|audio|voz|dub`, que são
//   pastas de ÁUDIO e nunca foram footage. Sem elas o gate volta a opinar sobre arquivo de som.
//
// Alarme falso é bug de prioridade alta: ensina a ignorar o gate, e aí ele para de proteger quando
// acerta. E afrouxar um filtro é operação de precisão — relaxa a dimensão certa (PASTA nomeada como
// original pré-conversão, ou pasta de áudio) e mais nenhuma.
// (`_origin(?:al|ais)?` em vez de `_originais?`: os DOIS lados só pegavam o plural, então uma pasta
// chamada `_original` — o singular, a forma mais natural de escrever — era varrida e reprovava o
// projeto pelo próprio backup. Não é regressão de nenhum dos consertos; é um furo que os dois tinham.)
const IGNORAR = /^(trilha|audio|voz|dub|_bkp|_backup|_origin(?:al|ais)?|_orig|_fps-original|[\w-]+-origin(?:al|ais)|_tmp|_temp|_lixo|_antig[ao]s?|_defeituosas?-nao-usar|_pre-\w+)$/i;
function varrer(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue;
    if (e.isDirectory()) {
      if (IGNORAR.test(e.name)) continue;          // pasta descartável, nomeada
      out.push(...varrer(join(dir, e.name)));      // qualquer outra pasta ENTRA, com `_` ou sem
    } else {
      if (e.name.startsWith("_")) continue;        // artefato do projeto (_master-*, _decupado…), não footage
      if (/\.(mp4|mov|webm|mkv)$/i.test(e.name)) out.push(join(dir, e.name));
    }
  }
  return out;
}

/** A estrutura dos 3 primeiros segundos: só `I` = all-intra = seek exato. */
function estrutura(f) {
  try {
    const tipos = linhasCsv(probe(["-v", "error", "-select_streams", "v:0", "-show_entries", "frame=pict_type",   // [porte Régie]
      "-of", "csv=p=0", "-read_intervals", "%+3", f]), 1).map(([t]) => t);   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
    if (!tipos.length) return null;
    const set = [...new Set(tipos)].sort();
    return { tipos: set, allIntra: set.length === 1 && set[0] === "I", temB: set.includes("B"), n: tipos.length };
  } catch { return null; }
}

const arqs = varrer(MEDIA);
console.log(`\n══ REND-47 · footage SEEKÁVEL (all-intra) · ${PROJ} ══\n`);
if (!arqs.length) { console.log("  nenhum footage de vídeo.\n"); process.exit(0); }

const ruins = [], naoLidos = [];   // [porte Régie] não lido é uma TERCEIRA conta, nunca "seekável"
for (const f of arqs) {
  const e = estrutura(f);
  const nome = basename(f);   // [porte Régie] split("/") não corta o caminho do Windows
  if (!e) { naoLidos.push(nome); console.log(`  ? ${nome.padEnd(44)} ffprobe não leu`); continue; }
  if (e.allIntra) { console.log(`  ✓ ${nome.padEnd(44)} all-intra`); continue; }
  ruins.push({ f, nome, ...e });
  console.log(`  ✗ ${nome.padEnd(44)} ${e.tipos.join("")}${e.temB ? "  ← tem B-frames (o pior caso p/ seek)" : ""}`);
}

const lidos = arqs.length - naoLidos.length;
console.log(`\n  ${lidos - ruins.length}/${arqs.length} seekáveis · ${ruins.length} REPROVAM${naoLidos.length ? ` · ${naoLidos.length} NÃO LIDO(S)` : ""}`);

// [porte Régie] reprova medida manda (1); sem reprova, arquivo não lido é NÃO MEDI (2) — não é PASS
if (!ruins.length && naoLidos.length) {
  const ex = naoLidos.slice(0, 3).join(", ");
  naoMedi("qc-footage-seekavel", naoLidos.length === arqs.length
    ? FF.erroFerramentaNaoMede("ffprobe", arqs.length, ex).message
    : `o ffprobe não leu ${naoLidos.length} de ${arqs.length} arquivo(s) (${ex}${naoLidos.length > 3 ? "…" : ""}) — corrompido, vazio ou segurado por outro programa. Conserte ou tire da pasta e meça de novo.`);
}
if (!ruins.length) { console.log(`\n  ✓ PASS\n`); process.exit(0); }
if (!CORRIGIR) {
  console.log(`\n  ✗ REPROVA — este footage faz o render travar (REND-47).`);
  console.log(`     conserto: node scripts/qc-footage-seekavel.mjs ${PROJ} --corrigir`);
  console.log(`     (ou rode a normalização inteira: node scripts/normalizar-footage.mjs ${PROJ})\n`);
  if (JSONOUT) console.log(JSON.stringify({ proj: PROJ, total: arqs.length, ruins: ruins.map((r) => r.nome) }));
  process.exit(1);
}

let ok = 0;
for (const r of ruins) {
  const tmp = r.f.replace(/\.(\w+)$/, ".__ai.mp4");
  try {
    execFileSync(exe("ffmpeg"), ["-y", "-v", "error", "-i", r.f,
      "-c:v", "libx264", "-crf", "14", "-preset", "medium", "-pix_fmt", "yuv420p",
      "-x264-params", "keyint=1:min-keyint=1:scenecut=0:bframes=0", "-c:a", "copy", tmp],
      { stdio: ["ignore", "ignore", "pipe"], windowsHide: true });
    const e2 = estrutura(tmp);
    if (!e2?.allIntra) { console.log(`  ✗ ${r.nome}: saiu ${e2?.tipos.join("") || "?"} — descarto`); try { rmSync(tmp, { force: true }); } catch {} continue; }
    // [porte Régie] fs.renameSync troca o arquivo (no Windows, MoveFileEx com substituição). O antivírus do
    // Windows segura o recém-escrito por um instante (EPERM/EBUSY): tenta de novo, como o master sintético do motor.
    for (let i = 1; ; i++) {
      try { renameSync(tmp, r.f); break; }
      catch (e) {
        if (!["EPERM", "EBUSY", "EACCES"].includes(e?.code) || i >= 5) throw e;
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100 * i);
      }
    }
    console.log(`  ✓ ${r.nome} → all-intra (${(statSync(r.f).size / 1048576).toFixed(0)} MB)`);
    ok++;
  } catch (e) { console.log(`  ✗ ${r.nome}: ${e?.code === "ENOENT" ? semFerramenta("ffmpeg") : String(e.message).slice(0, 60)}`); }   // [porte Régie]
}
console.log(`\n✓ ${ok} corrigido(s). ⚠️ As cenas que usam esses arquivos precisam ser RE-RENDERIZADAS.\n`);
// [porte Régie] o que não foi corrigido segue reprovado (1); o que não foi lido segue NÃO MEDIDO (2)
if (ok < ruins.length) process.exit(1);
if (naoLidos.length) naoMedi("qc-footage-seekavel", `${naoLidos.length} arquivo(s) o ffprobe não leu (${naoLidos.slice(0, 3).join(", ")}) — os corrigidos estão certos, estes não foram medidos.`);
