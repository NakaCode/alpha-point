// portoes-cena — os portões de cena num comando só: chama, na ordem, os mesmos portões que o CLAUDE.md manda ("Os portões
// medem"), cada um do jeito que ele manda, e imprime uma tabela curta (cena por portão), as linhas que reprovaram inteiras
// e a saída de cada portão. O registro completo (a saída inteira de cada um) fica gravado. É o 3º script do caminho 1 da
// página "Dois caminhos para a cota" (out/_modelos/esforco-2026-10-29/pagina-dois-caminhos.html, "Os portões num comando
// só"): hoje são quatro voltas ou mais, cada uma com uma saída longa na pilha, e a hora do `conferir` anotada à mão. O
// Lucas mandou testar na Drake (CLAUDE.md, "Do vídeo 5 em diante", 30/10/2026).
//
// Uso (da raiz do canal, no Git Bash ou no PowerShell; o REGIE_MOTOR e a pré-carga, ele põe sozinho):
//   node ferramentas/portoes-cena.mjs <proj> <cena> [<cena>…] [--mapa] [--quem="<sessão>"] [--tarefa="<texto>"] [--conc=3] [--seco] [--teto-min=60]
//   <proj>      o vídeo: `drake` ou `out/drake`.
//   <cena>      `s05`, `s05.html` ou `s05,s07` (as de out/<proj>/graphics/).
//   --mapa      deixa rodar cena de mapa. Sem ele, se alguma cena pedida é de mapa, o script diz quais e NÃO RODA NADA (sai 2):
//               com a pré-carga das chaves, os portões dela pedem tiles à MapTiler, e cada rodada conta no maptiler-gasto.md
//               (CLAUDE.md, "Os portões medem"). Use só com a MapTiler liberada para o vídeo (o `MapTiler liberado` do pedido).
//   --quem      o nome com que o out/_maquina/chrome.json fica ocupado (padrão: "portoes-cena (pid N)"). Se o aviso já está
//               ocupado com ESTE mesmo nome (o setor marcou antes de despachar a peça, setores/REGIMENTO.md, "A máquina"), o
//               script roda sem remarcar e não o libera no fim: quem marcou libera.
//   --tarefa    o que vai no campo `tarefa` do aviso (o script acrescenta o pid, para o aviso ser só dele).
//   --conc      a concorrência do qc-cena (padrão 3, a do CLAUDE.md).
//   --seco      mostra o que rodaria, na ordem e com o ambiente de cada um, e não roda nada (nem marca a máquina).
//   --teto-min  o teto de cada portão, em minutos (padrão 60): passou, o portão e a árvore dele se encerram pelo PID, e as
//               cenas dele saem NÃO MEDIDO.
//
// A ordem (uma chamada por vez, nunca duas com Chrome ao mesmo tempo):
//   0. confere e marca o out/_maquina/chrome.json (setores/REGIMENTO.md, "A máquina e os arquivos únicos"): não começa com
//      o chrome.json ocupado por outro, nem com o caca.json ou o linha-do-tempo.json ocupados (REND-07); marca, relê e
//      confere que o aviso é o seu; libera no fim, também com erro, com Ctrl+C e com o teto.
//   1. qc-cena --forcar --conc=3 --json: uma chamada com as cenas sem mapa, sem a pré-carga; e, com --mapa, uma chamada POR
//      cena de mapa, com a pré-carga (o qc-tamanho, que o qc-cena roda em lote, perde o lote inteiro quando a pré-carga
//      escreve no stderr de uma cena: chaves-nos-portoes.mjs, "Limites"; a Arte já rodava assim no vídeo 4).
//   2. portao-mapa til, e 3. portao-mapa rodape: uma chamada com as sem mapa e, com --mapa, uma com as de mapa, com a
//      pré-carga. Em TODA cena pedida: o rodapé v5 é a medida do contraste do crédito com e sem mapa (CLAUDE.md), e o
//      til e o rodapé com veredito 0 no sha1 final são o que a Arte confere no disco.
//   4. portao-margens, uma chamada com todas, SEMPRE sem a pré-carga (com ela, ele se recusa; ele mesmo responde os tiles
//      com um ladrilho cinza e não pede nada à rede).
//   5. qc-video-avanca, só nas cenas cujo HTML pode ter vídeo (<video> ou createElement("video"), o teste largo do
//      `conferir`): uma chamada sem mapa e, com --mapa, uma com as de mapa, com a pré-carga. O CLAUDE.md diz que ele "roda à
//      parte", e o `conferir` cobra a medida dele na cena de mapa que pode ter vídeo.
//   6. chaves-nos-portoes conferir out/<proj> --desde="<a hora do começo, Brasília>" --so=<as cenas>: em toda rodada (sem
//      cena de mapa, ele diz "nenhuma" e sai 0). A hora é a do começo da rodada, cortada no segundo: ninguém a anota.
//   O REGIE_MOTOR=C:/projetos/regie-v1 vai em todo portão. A pré-carga ferramentas/chaves-nos-portoes.mjs vai SÓ nas chamadas
//   de cena de mapa (com --mapa): sem mapa ela não muda a medida, e assim a chave nem entra na página (as cenas sem mapa
//   já rodavam sem ela: peru-agua-arte-3). Os filhos não herdam ALPHA_POINT_PORTOES_RODADA/RAIZ de quem chamou: cada
//   qc-cena com a pré-carga é o processo de cima da rodada dele, como o `conferir` exige (raiz "qc-cena.mjs").
//
// Cena de mapa, para este script: o HTML carrega a base de mapa da pré-v1 (_vendor/perfil-mapa.js ou maplibre-gl.js: a
// régua do `conferir`) ou cita maptiler, mapbox, maplibre, __aguardarMapa ou __chaves FORA dos comentários <!-- --> (a
// régua do qc-cena e da pré-carga, sem o comentário: a s11 e a s75 do vídeo 4 só citam a MapTiler no cabeçalho, e a Arte
// as rodava sem a pré-carga). Na dúvida (um `// maptiler` dentro de <script>), conta como mapa: a recusa custa uma flag, e
// o erro do outro lado mediria o mapa parado. Sem a pré-carga, nenhuma página recebe a chave: sem ela não há pedido pago.
//
// A tabela: uma linha por cena (com os 8 primeiros do sha1 do HTML medido) e uma coluna por portão (qc-cena, til, rodapé,
// margens, vídeo, conferir). Em cada casa: 0 passou · 1 mediu e reprovou · 2 NÃO MEDIDO · — não roda nesta cena (vídeo:
// o HTML não tem vídeo; conferir: a cena não é de mapa) · "·" rodou e não havia o que medir (o qc-video-avanca disse
// "sem <video> na cena") · "2*" o qc-cena de cena de mapa com só o til-glifo NÃO MEDIDO, por desenho da pré-carga: a
// medida do til é a do portao-mapa, na coluna "til" (CLAUDE.md, "Os portões medem"; roupa do qc-visual).
// Depois da tabela, toda casa 1 ou 2 com as linhas do portão, inteiras: as do qc-cena (`[portão] detalhe`, como ele as
// imprime, e `[NÃO MEDIDO] …`; a que tem exceção do Lucas registrada em out/<proj>/qc/_excecoes-portao.json para a
// mesma cena, o mesmo sha1 e o mesmo portão ganha uma nota, com a mensagem da exceção quando ela foi gravada com outra
// grafia, como a do qc-tamanho na s69 do vídeo 4; quem compara e aplica continua sendo o qc-visual), as do til (as linhas com
// TAB do molde), a do rodapé, os itens da margem, a linha do vídeo e os problemas que o `conferir` atribui à cena.
// Depois, o que o qc-cena só diz no JSON (o gate fora do portão, como o mapa-vivo, e o carimbo que não se gravou), a saída de
// cada chamada, a saída da rodada e o caminho do registro; com --mapa, os pedidos à MapTiler da rodada.
//
// A saída: a pior dos portões, na ordem do canal: 1 (mediu e reprovou) ganha de 2 (NÃO MEDIDO), que ganha de 0, a mesma
// regra com que cada portão junta as cenas dele (o qc-cena, o portao-margens e o portao-mapa: "a reprovação ganha do NÃO
// MEDIDO no código"). Saída fora de 0, 1 e 2 (pilha, sinal, teto) conta como 2. E a saída que as linhas não explicam
// também: 1 sem cena reprovada (a pilha do node sai 1), 0 com cena sem linha. Com casa "2*", a última linha diz também
// quanto a rodada sairia sem esse til coberto (a saída do script não muda: continua a pior dos portões). E 2, sem rodar
// nada, no uso errado, na cena de mapa sem --mapa e na máquina ocupada.
//
// O registro: out/<proj>/_tmp/portoes/<AAAAMMDD-hhmmss, Brasília>/ (fora do git): plano.json (as cenas, a régua de cada
// uma, a hora do --desde e cada chamada com o comando e a pré-carga), NN-<chamada>.saida.txt e .erros.txt (o stdout e o
// stderr inteiros de cada portão), tabela.txt (o que se imprimiu) e resumo.json (cada casa com as linhas, cada chamada com
// a saída, o pid, o tempo e a saída efetiva, e a máquina). Os portões continuam gravando onde sempre gravaram: o carimbo no
// out/<proj>/_portao.json, out/<proj>/_tmp/portao-mapa.jsonl, portao-margens.jsonl, e, com a pré-carga,
// maptiler-portoes.jsonl e portoes-saidas.jsonl.
//
// O que NÃO faz:
//   - não muda régua, portão nem a saída deles: só os chama, com os argumentos documentados (o qc-cena com --json, que
//     só troca a forma da saída: o mesmo laudo, o mesmo carimbo e a mesma saída), e lê o que eles imprimem e gravam;
//   - não aplica exceção de portão (quem aplica é o qc-visual), não anota o maptiler-gasto.md (quem anota é quem pediu a
//     rodada, e o setor no lote: ele só imprime a conta), não roda o qc-hex, o qc-janela, o qc-src-existe avulso (o
//     src-existe vai dentro do qc-cena), o qc-rodape-contraste do molde (o rodapé v5 do portao-mapa o substitui, com e sem
//     mapa) nem o qc-clipe-repetido (que o qc-cena só roda no modo projeto, sem --json);
//   - não renderiza, não tira quadro e não confere o clipe 4K: a margem da cena com relevo 3D sai NÃO MEDIDO do
//     portao-margens, por desenho dele, e continua no clipe de prova (CLAUDE.md);
//   - não commita, não chama o regie nem manda mensagem.
//
// Limites:
//   - o aviso da máquina é escrito, não uma trava do sistema (o regimento o define assim): grava, relê e confere; dois
//     processos que gravassem no mesmo milissegundo ainda poderiam se cruzar na releitura, e aí o que perdeu não começa;
//   - processo encerrado à força (taskkill /F, o Gerenciador de Tarefas) não libera o aviso: fica ocupado, e só a Sala o
//     libera, depois de conferir (regimento, "Aviso esquecido"). O Ctrl+C, o fechar da janela e o teto liberam;
//   - a casa do til e do rodapé vem da linha que o portão gravou no portao-mapa.jsonl com o pid dele; a do qc-cena, do JSON
//     dele; a da margem e a do vídeo, do texto que eles imprimem; a do conferir, das linhas "  - <cena>: …" da lista de
//     problemas dele (a lista que ele corta em 40 deixa as cenas não listadas como 2, com a nota). Se um portão mudar o
//     formato do que imprime, a casa sai 2 com "sem linha" (falha fechada), nunca 0;
//   - a régua de cena de mapa olha o texto do HTML, como as do canal: um mapa montado por um arquivo que o HTML importe sem
//     citar nenhum desses nomes passaria por cena sem mapa. Sem a pré-carga ele rodaria sem a chave (nenhum pedido pago) e
//     o `conferir`, com a régua dele, o pegaria;
//   - a prova (ferramentas/portoes-cena-provar.mjs) roda os portões de verdade só em cenas sem mapa do vídeo 4; o caminho
//     com --mapa foi provado no plano (--seco) e nas leituras, sem tile nenhum. Os ganchos PORTOES_CENA_MAQUINA (a pasta dos
//     avisos) e PORTOES_CENA_PROVA_ERRO (um erro logo depois de marcar) são só da prova: o segundo só vale com o primeiro, e
//     o primeiro só numa pasta out/<proj>/_tmp/portoes/prova-<data>/ (fora dela, o script recusa: sai 2).
import { spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  closeSync, createWriteStream, existsSync, fstatSync, mkdirSync, openSync, readFileSync, readSync, renameSync, rmSync, writeFileSync,
} from "node:fs";
import { basename, dirname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const MOTOR = "C:/projetos/regie-v1";
export const PRE_CARGA_URL = pathToFileURL(join(RAIZ, "ferramentas", "chaves-nos-portoes.mjs")).href;
const NAO_MEDIDO = 2;
const MAQUINA_PADRAO = join(RAIZ, "out", "_maquina");
const ENV_RODADA = ["ALPHA_POINT_PORTOES_RODADA", "ALPHA_POINT_PORTOES_RAIZ"];

// ── a régua de cena de mapa e de vídeo ──────────────────────────────────────────────────────────────────────────────
// a do `conferir` (a cena que carrega a base de mapa da pré-v1) e a do qc-cena e da pré-carga (sem os comentários HTML)
const BASE_DE_MAPA = /_vendor\/(?:perfil-mapa|maplibre-gl)\.js/;
const MAPA_NO_CODIGO = /maptiler|mapbox|maplibre|__aguardarMapa|__chaves/i;
// a do `conferir`, larga de propósito (casa comentário e o vídeo criado fora do documento)
const PODE_TER_VIDEO = /<video\b|createElement\(\s*["']video["']\s*\)/i;
export const semComentariosHtml = (fonte) => String(fonte).replace(/<!--[\s\S]*?-->/g, "");
export function classificarCena(fonte) {
  const f = String(fonte);
  const base = BASE_DE_MAPA.test(f);
  const codigo = MAPA_NO_CODIGO.exec(semComentariosHtml(f));
  return {
    mapa: base || !!codigo,
    porque: base ? "carrega a base de mapa, _vendor/" : codigo ? `cita "${codigo[0]}" fora dos comentários` : "sem mapa",
    video: PODE_TER_VIDEO.test(f),
  };
}

// ── a saída: a pior, na ordem do canal (1 > 2 > 0); fora de 0, 1 e 2, conta como 2 ─────────────────────────────────
export const normalizarSaida = (c) => (c === 0 ? 0 : c === 1 ? 1 : NAO_MEDIDO);
export function piorSaida(codigos) {
  const n = codigos.map(normalizarSaida);
  return n.includes(1) ? 1 : n.includes(NAO_MEDIDO) ? NAO_MEDIDO : 0;
}
// a saída que as casas da chamada explicam: 1 só com casa 1; 0 só com todas 0 (ou "·")
export function saidaEfetiva(bruta, valores) {
  const vs = valores.filter((v) => v !== null && v !== undefined);
  if (bruta === 0) return vs.some((v) => v !== 0) ? piorSaida(vs) : 0;
  if (bruta === 1) return vs.includes(1) ? 1 : NAO_MEDIDO;
  return vs.includes(1) ? 1 : NAO_MEDIDO;
}

// ── a hora (Brasília, UTC−3, a mesma conta do `conferir`) ─────────────────────────────────────────────────────────────
const brt = (d) => new Date(d.getTime() - 3 * 3600_000).toISOString();
export const horaBrasilia = (d) => brt(d).slice(0, 19).replace("T", " ");            // 2026-10-30 15:02:11
export const dataHoraAviso = (d) => { const s = brt(d); return `${s.slice(8, 10)}/${s.slice(5, 7)}/${s.slice(0, 4)} ${s.slice(11, 16)}`; };
export const carimboPasta = (d) => brt(d).slice(0, 19).replace(/-/g, "").replace("T", "-").replace(/:/g, "");

// ── a máquina (setores/REGIMENTO.md, "A máquina e os arquivos únicos") ──────────────────────────────────────────────
export function lerAviso(arq) {
  try { return JSON.parse(readFileSync(arq, "utf8").replace(/^\uFEFF/, "")); }
  catch (e) { return e.code === "ENOENT" ? null : { ilegivel: true, erro: String(e.message).split("\n")[0] }; }
}
function gravarAviso(arq, obj) {
  mkdirSync(dirname(arq), { recursive: true });
  const tmp = join(dirname(arq), `.${basename(arq)}.${process.pid}.${Date.now()}.tmp`);
  writeFileSync(tmp, JSON.stringify(obj) + "\n");
  for (let i = 0; ; i++) {
    try { renameSync(tmp, arq); return; }
    catch (e) {
      if (i >= 20 || !["EPERM", "EACCES", "EBUSY"].includes(e.code)) { rmSync(tmp, { force: true }); throw e; }
      const ate = Date.now() + 50; while (Date.now() < ate) { /* espera curta: o Windows segura o arquivo por um instante */ }
    }
  }
}
// a pasta de avisos de teste da prova: dentro de out/<proj>/_tmp/portoes/prova-<carimbo>/
export function ehPastaDaProva(dir) {
  const rel = relative(RAIZ, resolve(dir)).split("\\").join("/");
  return !isAbsolute(rel) && /^out\/[a-z0-9][a-z0-9_-]*\/_tmp\/portoes\/prova-\d{8}-\d{6}\/[^/]/i.test(rel);
}
// devolve { ok, herdado, motivo }: herdado = o aviso já era deste `quem` (quem marcou libera)
export function tomarMaquina({ dir = MAQUINA_PADRAO, quem, tarefa, agora = new Date() }) {
  for (const nome of ["caca.json", "linha-do-tempo.json"]) {
    const a = lerAviso(join(dir, nome));
    if (a?.ilegivel) return { ok: false, motivo: `out/_maquina/${nome} ilegível (${a.erro}): não mexo nele, e o Chrome não abre sem saber (só a Sala o confere)` };
    if (a?.estado === "ocupado") return { ok: false, motivo: `out/_maquina/${nome} ocupado por ${a.quem} desde ${a.desde} (${a.tarefa || a.ultima_tarefa || "?"}): o Chrome não abre junto (REND-07)` };
  }
  const arq = join(dir, "chrome.json");
  const a = lerAviso(arq);
  if (a?.ilegivel) return { ok: false, motivo: `out/_maquina/chrome.json ilegível (${a.erro}): não mexo nele (só a Sala o confere)` };
  if (a && a.estado === "ocupado") {
    if (a.quem === quem) return { ok: true, herdado: true, aviso: a };
    return { ok: false, motivo: `out/_maquina/chrome.json ocupado por ${a.quem} desde ${a.desde} (${a.tarefa}): não começo (aviso esquecido, há mais de 6 h, só a Sala libera)` };
  }
  if (a && a.estado !== "livre") return { ok: false, motivo: `out/_maquina/chrome.json com estado "${a.estado}": não mexo nele` };
  const novo = { estado: "ocupado", quem, tarefa, desde: dataHoraAviso(agora) };
  gravarAviso(arq, novo);
  const relido = lerAviso(arq);
  if (!relido || relido.estado !== "ocupado" || relido.quem !== quem || relido.tarefa !== tarefa)
    return { ok: false, motivo: `out/_maquina/chrome.json: outro o tomou junto (relido: ${relido ? `${relido.estado}, ${relido.quem}` : "nada"}); não começo` };
  return { ok: true, herdado: false, aviso: novo };
}
export function liberarMaquina({ dir = MAQUINA_PADRAO, quem, tarefa, agora = new Date() }) {
  const arq = join(dir, "chrome.json");
  const a = lerAviso(arq);
  if (!a || a.ilegivel || a.estado !== "ocupado" || a.quem !== quem || a.tarefa !== tarefa)
    return { ok: false, motivo: `o chrome.json não é mais deste aviso (${a ? `${a.estado}, ${a.quem}` : "ausente"}): não mexo` };
  gravarAviso(arq, { estado: "livre", quem, tarefa, desde: dataHoraAviso(agora) });
  return { ok: true };
}

// ── o plano: as chamadas, na ordem ──────────────────────────────────────────────────────────────────────────────────
export const COLUNAS = ["qc-cena", "til", "rodapé", "margens", "vídeo", "conferir"];
export function planejar({ rel, cenas, info, conc = 3, desde }) {
  const semMapa = cenas.filter((c) => !info[c].mapa), comMapa = cenas.filter((c) => info[c].mapa);
  const html = (c) => `${rel}/graphics/${c}.html`;
  const ch = [];
  const add = (o) => ch.push({ chrome: true, ...o });
  if (semMapa.length) add({ id: "qc-cena", coluna: "qc-cena", grupo: "sem mapa", cenas: semMapa, preCarga: false, script: "scripts/qc-cena.mjs", args: [...semMapa.map(html), `--conc=${conc}`, "--forcar", "--json"] });
  for (const c of comMapa) add({ id: `qc-cena-${c}`, coluna: "qc-cena", grupo: c, cenas: [c], preCarga: true, script: "scripts/qc-cena.mjs", args: [html(c), `--conc=${conc}`, "--forcar", "--json"] });
  for (const [p, coluna] of [["til", "til"], ["rodape", "rodapé"]]) {
    if (semMapa.length) add({ id: p, coluna, portaoMapa: p, grupo: "sem mapa", cenas: semMapa, preCarga: false, script: "ferramentas/portao-mapa.mjs", args: [p, rel, `--so=${semMapa.join(",")}`] });
    if (comMapa.length) add({ id: `${p}-mapa`, coluna, portaoMapa: p, grupo: "mapa", cenas: comMapa, preCarga: true, script: "ferramentas/portao-mapa.mjs", args: [p, rel, `--so=${comMapa.join(",")}`] });
  }
  add({ id: "margens", coluna: "margens", grupo: "todas", cenas: [...cenas], preCarga: false, script: "ferramentas/portao-margens.mjs", args: [rel, `--so=${cenas.join(",")}`] });
  const vSem = semMapa.filter((c) => info[c].video), vCom = comMapa.filter((c) => info[c].video);
  if (vSem.length) add({ id: "video", coluna: "vídeo", grupo: "sem mapa", cenas: vSem, preCarga: false, script: "scripts/qc-video-avanca.mjs", args: vSem.map(html) });
  if (vCom.length) add({ id: "video-mapa", coluna: "vídeo", grupo: "mapa", cenas: vCom, preCarga: true, script: "scripts/qc-video-avanca.mjs", args: vCom.map(html) });
  ch.push({ id: "conferir", coluna: "conferir", grupo: "rodada", cenas: [...cenas], preCarga: false, chrome: false, script: "ferramentas/chaves-nos-portoes.mjs", args: ["conferir", rel, `--desde=${desde}`, `--so=${cenas.join(",")}`] });
  return ch;
}
const aspas = (a) => (/[\s"]/.test(a) ? `"${a.replace(/"/g, '\\"')}"` : a);
export function comandoDe(c) {
  return `REGIE_MOTOR=${MOTOR} node ${c.preCarga ? `--import=${PRE_CARGA_URL} ` : ""}${c.script} ${c.args.map(aspas).join(" ")}`;
}
export function ambienteDe(c, base = process.env) {
  const env = { ...base, REGIE_MOTOR: MOTOR };
  for (const k of Object.keys(env)) if (ENV_RODADA.includes(k.toUpperCase())) delete env[k];
  return env;
}

// ── as leituras: o que cada portão imprimiu e gravou, por cena ───────────────────────────────────────────────────────
// cada leitura devolve { [cena]: { v: 0|1|2|null, linhas: [], nota?: string, semVideo?: true } }
const nomeCena = (s) => basename(String(s).replace(/\\/g, "/")).replace(/\.html?$/i, "");
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// qc-cena --json: o objeto vem depois das linhas de andamento (ⓘ, ⚖, ↻), numa linha "{" sem recuo
export function lerJsonDoQcCena(txt) {
  const ls = String(txt).split(/\r?\n/);
  for (let i = ls.length - 1; i >= 0; i--) {
    if (ls[i] !== "{") continue;
    try { const o = JSON.parse(ls.slice(i).join("\n")); if (o && Array.isArray(o.cenas)) return o; } catch { }
  }
  return null;
}
export function casasQcCena(stdout, cenas, saida) {
  const o = lerJsonDoQcCena(stdout);
  const r = {};
  if (!o) { for (const c of cenas) r[c] = { v: NAO_MEDIDO, linhas: [`o qc-cena não deixou o JSON do laudo (saída ${saida}): veja o registro`] }; return { casas: r, json: null }; }
  const por = new Map(o.cenas.map((x) => [nomeCena(x.cena || x.file), x]));
  for (const c of cenas) {
    const x = por.get(c);
    if (!x) { r[c] = { v: NAO_MEDIDO, linhas: ["o qc-cena não deu veredito para a cena"] }; continue; }
    const falhas = Array.isArray(x.falhas) ? x.falhas : [], indef = Array.isArray(x.indefinidos) ? x.indefinidos : [];
    const linhas = [...falhas.map((f) => `[${f.gate}] ${f.detalhe || "reprovou"}`), ...(indef.length ? [`[NÃO MEDIDO] ${indef.join(", ")}`] : [])];
    r[c] = { v: falhas.length ? 1 : indef.length ? NAO_MEDIDO : x.ok === true ? 0 : NAO_MEDIDO, linhas, indefinidos: indef, falhas: falhas.map((f) => f.gate) };
  }
  return { casas: r, json: o };
}
// o que o qc-cena diz em texto e o --json só guarda no objeto: os gates fora do portão nesta versão (o mapa-vivo, que
// "não veio do estúdio e fica fora do portão (ele avisa)", CLAUDE.md) e o carimbo do _portao.json que não se gravou
// (aí ele sai 2 com toda cena verde). Cada linha uma vez, com o grupo da chamada.
export function avisosDoQcCena(porChamada) {
  const fora = new Set(), out = [];
  for (const { grupo, json } of porChamada) {
    if (!json) continue;
    for (const g of Array.isArray(json.foraDoPortao) ? json.foraDoPortao : []) fora.add(g);
    const c = json.carimbo || {};
    for (const e of Array.isArray(c.erros) ? c.erros : []) out.push(`⚠ qc-cena [${grupo}]: carimbo NÃO gravado em ${e.arq}: ${e.motivo}`);
    if (c.gravado === false && !(c.erros || []).length) out.push(`⚠ qc-cena [${grupo}]: carimbo NÃO gravado (sem motivo no laudo)`);
  }
  if (fora.size) out.unshift(`⊘ fora do portão nesta versão da Régie (não vieram do estúdio): ${[...fora].join(", ")} — o verde do qc-cena não os inclui`);
  return out;
}
// portao-mapa (til e rodape): o veredito é o da linha que o processo gravou (pid); as linhas, as do stdout dele
export function linhasDoPortaoMapa(jsonlTexto, pid, portao) {
  const por = {};
  for (const l of String(jsonlTexto).split(/\r?\n/)) {
    if (!l.trim()) continue;
    let o; try { o = JSON.parse(l); } catch { continue; }
    if (o.pid === pid && o.portao === portao && o.cena) por[nomeCena(o.cena)] = o;
  }
  return por;
}
export function casasPortaoMapa(portao, stdout, porCena, cenas) {
  const ls = String(stdout).split(/\r?\n/);
  const r = {};
  for (const c of cenas) {
    const l = porCena[c];
    const minhas = portao === "til"
      ? ls.filter((x) => x.includes("\t") && nomeCena(x.split("\t")[0]) === c)
      : ls.filter((x) => new RegExp(`^\\s+(?:✗|▲|✓|·)\\s+${escRe(c)}(?:\\s|$)`).test(x));
    if (!l) { r[c] = { v: NAO_MEDIDO, linhas: [`o portao-mapa ${portao} não gravou a linha da cena no _tmp/portao-mapa.jsonl`, ...minhas] }; continue; }
    const v = [0, 1, 2].includes(l.veredito) ? l.veredito : NAO_MEDIDO;
    r[c] = { v, linhas: v === 0 ? [] : (minhas.length ? minhas : [l.veredito_txt || "sem texto"]), sha1: l.sha1, pedidos: l.maptiler?.pedidos ?? 0, preCarga: !!l.pre_carga };
  }
  return r;
}
// portao-margens (texto): "✓ s05.html (…)", "✗ s05.html (…)" com os itens recuados, "? s05.html: NÃO MEDIDO — …"
export function casasMargens(stdout, cenas) {
  const por = {};
  let atual = null;
  for (const l of String(stdout).split(/\r?\n/)) {
    const m = /^([✓✗?]) ([^\s:]+)\.html\b/.exec(l);
    if (m) { atual = { v: m[1] === "✓" ? 0 : m[1] === "✗" ? 1 : NAO_MEDIDO, cab: l, itens: [] }; por[m[2]] = atual; continue; }
    if (atual && l.startsWith("    ")) { atual.itens.push(l); continue; }
    atual = null;
  }
  const r = {};
  for (const c of cenas) {
    const x = por[c];
    if (!x) { r[c] = { v: NAO_MEDIDO, linhas: ["o portao-margens não imprimiu a linha da cena"] }; continue; }
    const itens = x.itens.filter((l) => !/^\s+aviso /.test(l));
    r[c] = { v: x.v, linhas: x.v === 0 ? [] : x.v === 1 ? (itens.length ? itens : [x.cab]) : [x.cab, ...x.itens] };
  }
  return r;
}
// qc-video-avanca: "✓  <cena> …", "⛔ TODOS PARADOS  <cena> …", "·  <cena> sem <video> na cena — nada a medir", "ERRO  <cena>: …"
export function casasVideo(stdout, cenas) {
  const por = {};
  for (const l of String(stdout).split(/\r?\n/)) {
    let m;
    if ((m = /^✓\s+(\S+)/.exec(l))) por[m[1]] = { v: 0, linhas: [] };
    else if ((m = /^⛔ TODOS PARADOS\s+(\S+)/.exec(l))) por[m[1]] = { v: 1, linhas: [l] };
    else if ((m = /^·\s+(\S+)\s+sem <video>/.exec(l))) por[m[1]] = { v: 0, linhas: [], semVideo: true };
    else if ((m = /^ERRO\s+([^\s:]+):/.exec(l))) por[m[1]] = { v: NAO_MEDIDO, linhas: [l] };
  }
  const r = {};
  for (const c of cenas) r[c] = por[c] || { v: NAO_MEDIDO, linhas: ["o qc-video-avanca não imprimiu a linha da cena"] };
  return r;
}
// conferir: o cabeçalho diz as cenas de mapa que ele olhou; a lista "N ponto(s) sem prova" diz os problemas, por cena
export function casasConferir(stdout, saida, cenas) {
  const ls = String(stdout).split(/\r?\n/);
  const cab = ls.map((l) => /^\S+: \d+ cena\(s\) que carregam a base de mapa[^:]*: (.*)$/.exec(l)).find(Boolean);
  const r = {};
  if (!cab) { for (const c of cenas) r[c] = { v: NAO_MEDIDO, linhas: [`o conferir não rodou (saída ${saida}): veja o registro`] }; return r; }
  const escopo = new Set(cab[1] === "nenhuma" ? [] : cab[1].split(",").map((s) => s.trim()).filter(Boolean));
  const ini = ls.findIndex((l) => /ponto\(s\) sem prova de medida/.test(l));
  const problemas = {}; let cortada = false;
  if (ini >= 0) for (const l of ls.slice(ini + 1)) {
    const m = /^  - ([^:\s]+): (.*)$/.exec(l);
    if (m) { (problemas[m[1]] ||= []).push(l.trim()); continue; }
    if (/^  … e mais/.test(l)) { cortada = true; continue; }
    if (l.trim()) break;
  }
  for (const c of cenas) {
    if (!escopo.has(c)) { r[c] = { v: null, linhas: [] }; continue; }
    if (problemas[c]) { r[c] = { v: NAO_MEDIDO, linhas: problemas[c] }; continue; }
    if (saida === 0) { r[c] = { v: 0, linhas: [] }; continue; }
    if (saida === NAO_MEDIDO && ini >= 0 && !cortada) { r[c] = { v: 0, linhas: [] }; continue; }
    r[c] = { v: NAO_MEDIDO, linhas: [cortada ? "a lista de problemas do conferir foi cortada em 40: veja o registro" : `o conferir saiu ${saida} sem dizer por quê: veja o registro`] };
  }
  return r;
}

// ── a tabela ────────────────────────────────────────────────────────────────────────────────────────────────────────
export function textoDaCasa(k) {
  if (!k || k.v === null || k.v === undefined) return "—";
  if (k.semVideo) return "·";
  if (k.coberto) return "2*";
  return String(k.v);
}
export function montarTabela(cenas, casas, sha) {
  const cab = ["cena", "sha1", ...COLUNAS];
  const linhas = cenas.map((c) => [c, (sha[c] || "").slice(0, 8), ...COLUNAS.map((col) => textoDaCasa(casas[c]?.[col]))]);
  const larg = cab.map((h, i) => Math.max(h.length, ...linhas.map((l) => l[i].length)));
  const fmt = (l) => l.map((x, i) => x.padEnd(larg[i])).join("  ").trimEnd();
  return [fmt(cab), ...linhas.map(fmt)].join("\n");
}
// a linha da tabela de volta em casas (a prova a usa para conferir o que se imprimiu)
export function lerTabela(txt) {
  const ls = String(txt).split(/\r?\n/);
  const i = ls.findIndex((l) => /^cena\s+sha1\s+qc-cena\s+til\s+rodapé\s+margens\s+vídeo\s+conferir\s*$/.test(l));
  if (i < 0) return null;
  const r = {};
  for (const l of ls.slice(i + 1)) {
    const p = l.trim().split(/\s+/);
    if (p.length !== 2 + COLUNAS.length) break;
    r[p[0]] = { sha1: p[1], ...Object.fromEntries(COLUNAS.map((c, j) => [c, p[2 + j]])) };
  }
  return r;
}

// a exceção do Lucas para a linha do qc-cena (só a nota: quem aplica é o qc-visual)
function excecoesDe(pasta) {
  try {
    const e = JSON.parse(readFileSync(join(pasta, "qc", "_excecoes-portao.json"), "utf8").replace(/^\uFEFF/, ""));
    return Array.isArray(e?.excecoes) ? e.excecoes : [];
  } catch { return []; }
}
// a exce\u00E7\u00E3o vale para a cena, o sha1 do HTML e o port\u00E3o; a mensagem foi gravada ora como o qc-cena a imprime, ora como o
// port\u00E3o a imprime ("\u2192 60px < 72"): com a mesma, a nota diz; com outra, mostra a dela, e quem compara \u00E9 o qc-visual
export function notaExcecao(excecoes, cena, sha1, linha) {
  const portao = (/^\[([^\]]+)\]/.exec(linha) || [])[1];
  if (!portao || portao === "N\u00C3O MEDIDO") return "";
  const doPortao = excecoes.filter((x) => x.cena === cena && x.sha1_html === sha1 && (x.falha_no_portao || []).includes(portao));
  if (!doPortao.length) return "";
  if (doPortao.some((x) => x.reprovacao === linha)) return "  \u2190 exce\u00E7\u00E3o do Lucas registrada para esta mensagem e este sha1 (qc/_excecoes-portao.json); quem a aplica \u00E9 o qc-visual";
  return `  \u2190 h\u00E1 exce\u00E7\u00E3o do Lucas para o ${portao} neste sha1, com a mensagem ${doPortao.map((x) => JSON.stringify(x.reprovacao)).join(" / ")} (qc/_excecoes-portao.json); quem compara e aplica \u00E9 o qc-visual`;
}

// ── rodar um portão ─────────────────────────────────────────────────────────────────────────────────────────────────
let filhoAtual = null;
function matarArvore(filho) {
  if (!filho || filho.exitCode !== null || filho.signalCode) return;
  // pelo PID da árvore, nunca pelo nome (o Chrome do Lucas e o render têm o mesmo nome)
  if (process.platform === "win32") spawnSync("taskkill", ["/PID", String(filho.pid), "/T", "/F"], { windowsHide: true, stdio: "ignore" });
  else { try { filho.kill("SIGKILL"); } catch { } }
}
function tamanho(arq) { try { const fd = openSync(arq, "r"); try { return fstatSync(fd).size; } finally { closeSync(fd); } } catch { return 0; } }
function linhasAte(arq, ateByte) {
  try { const b = readFileSync(arq).subarray(0, ateByte); let n = 0; for (const x of b) if (x === 10) n++; return n; } catch { return 0; }
}
export function lerDesde(arq, pos) {
  try {
    const fd = openSync(arq, "r");
    try {
      const tam = fstatSync(fd).size; const de = tam < pos ? 0 : pos;
      const buf = Buffer.alloc(tam - de); readSync(fd, buf, 0, buf.length, de); return buf.toString("utf8");
    } finally { closeSync(fd); }
  } catch { return ""; }
}
function rodar(c, arqSaida, arqErros, tetoMs) {
  return new Promise((res) => {
    const t0 = Date.now();
    const args = [...(c.preCarga ? [`--import=${PRE_CARGA_URL}`] : []), c.script, ...c.args];
    let out = "", err = "", estourou = false;
    const fo = createWriteStream(arqSaida), fe = createWriteStream(arqErros);
    let filho;
    try { filho = spawn(process.execPath, args, { cwd: RAIZ, env: ambienteDe(c), windowsHide: true, stdio: ["ignore", "pipe", "pipe"] }); }
    catch (e) { fo.end(); fe.end(String(e.message)); return res({ saida: NAO_MEDIDO, pid: null, ms: 0, out: "", err: String(e.message), estourou: false }); }
    filhoAtual = filho;
    filho.stdout.setEncoding("utf8"); filho.stderr.setEncoding("utf8");
    filho.stdout.on("data", (s) => { out += s; fo.write(s); });
    filho.stderr.on("data", (s) => { err += s; fe.write(s); });
    const teto = setTimeout(() => { estourou = true; matarArvore(filho); }, tetoMs);
    const fim = (code, sinal, erro) => {
      clearTimeout(teto); filhoAtual = null;
      if (erro) err += `\n${erro}`;
      const ate = (s) => new Promise((r) => s.end(r));
      Promise.all([ate(fo), ate(fe)]).then(() => res({ saida: estourou ? NAO_MEDIDO : (code ?? NAO_MEDIDO), bruta: code, sinal, pid: filho.pid, ms: Date.now() - t0, out, err, estourou }));
    };
    let fechou = false;
    filho.on("error", (e) => { if (!fechou) { fechou = true; fim(null, null, `não subiu: ${e.message}`); } });
    filho.on("close", (code, sinal) => { if (!fechou) { fechou = true; fim(code, sinal); } });
  });
}

// ── a entrada ───────────────────────────────────────────────────────────────────────────────────────────────────────
const USO = `uso: node ferramentas/portoes-cena.mjs <proj> <cena> [<cena>…] [--mapa] [--quem="<sessão>"] [--tarefa="<texto>"] [--conc=3] [--seco] [--teto-min=60]`;
const sair = (codigo, msg) => { if (msg) process.stderr.write(`portoes-cena: ${msg}\n`); process.exit(codigo); };

export function lerArgumentos(argv) {
  const opt = (n) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a == null ? null : a.slice(n.length + 3); };
  const conhecida = (a) => ["--mapa", "--seco"].includes(a) || /^--(quem|tarefa|conc|teto-min)=/.test(a);
  const erradas = argv.filter((a) => a.startsWith("--") && !conhecida(a));
  if (erradas.length) return { erro: `opção desconhecida: ${erradas.join(" ")}` };
  const pos = argv.filter((a) => !a.startsWith("--"));
  if (pos.length < 2) return { erro: "faltam o projeto e a cena" };
  const conc = opt("conc") == null ? 3 : Number(opt("conc"));
  if (!(Number.isInteger(conc) && conc >= 1 && conc <= 8)) return { erro: "--conc vai de 1 a 8" };
  const tetoMin = opt("teto-min") == null ? 60 : Number(opt("teto-min"));
  if (!(tetoMin > 0)) return { erro: "--teto-min tem de ser um número > 0" };
  const quem = opt("quem"), tarefa = opt("tarefa");
  if (quem !== null && !quem.trim()) return { erro: "--quem vazio" };
  return { proj: pos[0], cenas: pos.slice(1), mapa: argv.includes("--mapa"), seco: argv.includes("--seco"), conc, tetoMs: tetoMin * 60_000, quem: quem?.trim() || null, tarefa: tarefa?.trim() || null };
}
export function acharProjeto(p) {
  const limpo = String(p).replace(/\\/g, "/").replace(/\/+$/, "");
  const cands = isAbsolute(limpo) ? [limpo] : [join(RAIZ, limpo), join(RAIZ, "out", limpo)];
  const pasta = cands.map((x) => resolve(x)).find((x) => existsSync(join(x, "graphics")));
  if (!pasta) return null;
  const rel = relative(RAIZ, pasta).split("\\").join("/");
  if (!/^out\/[a-z0-9][a-z0-9_-]*$/i.test(rel)) return null;
  return { pasta, rel, nome: basename(pasta) };
}
export function lerCenas(lista, pasta) {
  const cenas = [], erros = [];
  for (const bruta of lista.flatMap((x) => String(x).split(","))) {
    const c = bruta.trim().replace(/\\/g, "/").replace(/^.*\//, "").replace(/\.html$/i, "");
    if (!c) continue;
    if (!/^[a-z0-9][a-z0-9._-]*$/i.test(c)) { erros.push(`nome de cena estranho: ${bruta}`); continue; }
    if (!existsSync(join(pasta, "graphics", `${c}.html`))) { erros.push(`não existe: graphics/${c}.html`); continue; }
    if (!cenas.includes(c)) cenas.push(c);
  }
  cenas.sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
  return { cenas, erros };
}

async function main() {
  const a = lerArgumentos(process.argv.slice(2));
  if (a.erro) sair(NAO_MEDIDO, `${a.erro}\n${USO}`);
  // a pré-carga NESTE processo poria a rodada e o NODE_OPTIONS em todos os filhos (até nos sem mapa) e escreveria a rodada
  // dele no portoes-saidas.jsonl: ela vai só nas chamadas que precisam, e quem a põe é este script
  if ([...process.execArgv, process.env.NODE_OPTIONS || ""].join(" ").includes("chaves-nos-portoes"))
    sair(NAO_MEDIDO, "rode SEM a pré-carga das chaves (nem --import, nem NODE_OPTIONS): o portoes-cena a põe só nas chamadas de cena de mapa, com --mapa");
  const proj = acharProjeto(a.proj);
  if (!proj) sair(NAO_MEDIDO, `não achei out/${a.proj}/graphics\n${USO}`);
  const { cenas, erros } = lerCenas(a.cenas, proj.pasta);
  if (erros.length) sair(NAO_MEDIDO, erros.join("\n"));
  if (!cenas.length) sair(NAO_MEDIDO, `nenhuma cena\n${USO}`);
  const info = {}, sha = {};
  for (const c of cenas) {
    const bruto = readFileSync(join(proj.pasta, "graphics", `${c}.html`));
    info[c] = classificarCena(bruto.toString("utf8"));
    sha[c] = createHash("sha1").update(bruto).digest("hex");
  }
  const mapas = cenas.filter((c) => info[c].mapa);
  if (mapas.length && !a.mapa) {
    sair(NAO_MEDIDO, `${mapas.map((c) => `${c} (${info[c].porque})`).join(", ")}: ${mapas.length > 1 ? "são cenas" : "é cena"} de mapa. Com a pré-carga das chaves, ` +
      `os portões ${mapas.length > 1 ? "delas" : "dela"} pediriam tiles à MapTiler, e cada rodada conta no out/${proj.nome}/_pesquisa/maptiler-gasto.md. Não rodei nada: ` +
      `rode de novo com --mapa só com a MapTiler liberada para este vídeo (o "MapTiler liberado" do pedido, com o ok do Lucas).`);
  }
  const inicio = new Date();
  const desde = horaBrasilia(new Date(Math.floor(inicio.getTime() / 1000) * 1000));
  const plano = planejar({ rel: proj.rel, cenas, info, conc: a.conc, desde });

  if (a.seco) {
    console.log(`portoes-cena (seco: nada roda, nada se marca) · ${proj.nome} · ${cenas.length} cena(s)${mapas.length ? `, ${mapas.length} de mapa (com a pré-carga: pede tiles)` : ", nenhuma de mapa"} · --desde="${desde}"`);
    for (const c of cenas) console.log(`  ${c}  ${sha[c].slice(0, 8)}  ${info[c].mapa ? `MAPA (${info[c].porque})` : "sem mapa"}${info[c].video ? ", pode ter vídeo" : ""}`);
    console.log("o chrome.json se marca antes da 1ª chamada e se libera no fim. As chamadas, na ordem:");
    plano.forEach((c, i) => console.log(`  ${i + 1}. ${c.id} [${c.grupo}${c.preCarga ? ", com a pré-carga" : ""}${c.chrome ? "" : ", sem Chrome"}]: ${comandoDe(c)}`));
    process.exit(0);
  }

  // 0. a máquina (o gancho da prova só vale numa pasta da prova: fora dela, ele passaria por cima do chrome.json de verdade)
  const dirMaquina = process.env.PORTOES_CENA_MAQUINA ? resolve(process.env.PORTOES_CENA_MAQUINA) : MAQUINA_PADRAO;
  if (process.env.PORTOES_CENA_MAQUINA && !ehPastaDaProva(dirMaquina))
    sair(NAO_MEDIDO, `PORTOES_CENA_MAQUINA é só da prova (uma pasta em out/<proj>/_tmp/portoes/prova-<data>/): ${dirMaquina} não é. O aviso de verdade é o out/_maquina/chrome.json`);
  const quem = a.quem || `portoes-cena (pid ${process.pid})`;
  const tarefa = `${a.tarefa || `portoes-cena ${proj.nome} ${cenas.join(",")}${mapas.length ? " (com mapa)" : ""}`} [pid ${process.pid}]`;
  const tomada = tomarMaquina({ dir: dirMaquina, quem, tarefa });
  if (!tomada.ok) sair(NAO_MEDIDO, `não começo: ${tomada.motivo}`);
  const maquina = { dir: dirMaquina, quem, tarefa: tomada.herdado ? tomada.aviso.tarefa : tarefa, herdado: !!tomada.herdado, solto: false, liberou: null };
  const soltar = () => {
    if (maquina.herdado || maquina.solto) return;
    maquina.solto = true;
    try { const r = liberarMaquina({ dir: maquina.dir, quem: maquina.quem, tarefa: maquina.tarefa }); maquina.liberou = r.ok ? "livre" : r.motivo; }
    catch (e) { maquina.liberou = `não consegui liberar: ${e.message}`; }
  };
  process.on("exit", soltar);
  for (const s of ["SIGINT", "SIGTERM", "SIGHUP", "SIGBREAK"]) {
    process.on(s, () => { matarArvore(filhoAtual); soltar(); process.stderr.write(`\nportoes-cena: interrompido (${s}); o chrome.json ${maquina.herdado ? "continua com quem o marcou" : `ficou: ${maquina.liberou}`}\n`); process.exit(s === "SIGINT" ? 130 : 143); });
  }

  let codigo = NAO_MEDIDO;
  try {
    if (process.env.PORTOES_CENA_PROVA_ERRO === "apos-marcar" && process.env.PORTOES_CENA_MAQUINA) throw new Error("erro da prova, logo depois de marcar a máquina");
    let nomePasta = carimboPasta(inicio);
    const raizReg = join(proj.pasta, "_tmp", "portoes");
    if (existsSync(join(raizReg, nomePasta))) nomePasta += `-${process.pid}`;
    const reg = join(raizReg, nomePasta);
    mkdirSync(reg, { recursive: true });
    const relReg = relative(RAIZ, reg).split("\\").join("/");
    writeFileSync(join(reg, "plano.json"), JSON.stringify({
      proj: proj.nome, inicio: inicio.toISOString(), desde, quem, maquina: { herdado: maquina.herdado, tarefa: maquina.tarefa, dir: relative(RAIZ, dirMaquina).split("\\").join("/") },
      cenas: cenas.map((c) => ({ cena: c, sha1: sha[c], ...info[c] })),
      chamadas: plano.map((c, i) => ({ n: i + 1, id: c.id, grupo: c.grupo, coluna: c.coluna, cenas: c.cenas, pre_carga: c.preCarga, chrome: c.chrome, comando: comandoDe(c) })),
    }, null, 1) + "\n");

    const jsonlMapa = join(proj.pasta, "_tmp", "portao-mapa.jsonl");
    const jsonlTiles = join(proj.pasta, "_tmp", "maptiler-portoes.jsonl");
    const posTiles = tamanho(jsonlTiles);
    const casas = Object.fromEntries(cenas.map((c) => [c, Object.fromEntries(COLUNAS.map((col) => [col, { v: null, linhas: [] }]))]));
    const resultados = [], jsonsQc = [];
    for (const [i, c] of plano.entries()) {
      const nn = String(i + 1).padStart(2, "0");
      const pos = c.portaoMapa ? tamanho(jsonlMapa) : 0;
      process.stderr.write(`portoes-cena: ${i + 1}/${plano.length} ${c.id} [${c.grupo}]…\n`);
      const r = await rodar(c, join(reg, `${nn}-${c.id}.saida.txt`), join(reg, `${nn}-${c.id}.erros.txt`), a.tetoMs);
      let k;
      if (c.coluna === "qc-cena") { let json; ({ casas: k, json } = casasQcCena(r.out, c.cenas, r.saida)); jsonsQc.push({ grupo: c.grupo, cenas: c.cenas, json }); }
      else if (c.portaoMapa) k = casasPortaoMapa(c.portaoMapa, r.out, linhasDoPortaoMapa(lerDesde(jsonlMapa, pos), r.pid, c.portaoMapa), c.cenas);
      else if (c.coluna === "margens") k = casasMargens(r.out, c.cenas);
      else if (c.coluna === "vídeo") k = casasVideo(r.out, c.cenas);
      else k = casasConferir(r.out, r.saida, c.cenas);
      if (r.estourou) for (const cn of c.cenas) k[cn] = { v: NAO_MEDIDO, linhas: [`o portão passou do teto de ${a.tetoMs / 60_000} min e foi encerrado`] };
      for (const cn of c.cenas) casas[cn][c.coluna] = k[cn];
      const efetiva = saidaEfetiva(r.saida, c.cenas.map((cn) => k[cn].v));
      resultados.push({ n: i + 1, id: c.id, grupo: c.grupo, coluna: c.coluna, cenas: c.cenas, pre_carga: c.preCarga, saida: r.saida, bruta: r.bruta ?? null, efetiva, sinal: r.sinal || null, pid: r.pid, ms: r.ms, estourou: r.estourou });
    }
    // "2*": o qc-cena de cena de mapa com só o til-glifo NÃO MEDIDO, com o til do portao-mapa medido (0 ou 1) na rodada
    // (e só com o carimbo da chamada gravado: sem ele o qc-cena sai 2 por outro motivo, que o 2* não pode cobrir)
    for (const c of mapas) {
      const q = casas[c]["qc-cena"], t = casas[c].til;
      const carimbo = jsonsQc.find((x) => x.cenas.includes(c))?.json?.carimbo;
      if (q.v === NAO_MEDIDO && (q.falhas || []).length === 0 && (q.indefinidos || []).length === 1 && q.indefinidos[0] === "til-glifo" && (t.v === 0 || t.v === 1) && carimbo?.gravado === true) q.coberto = true;
    }
    const exc = excecoesDe(proj.pasta);
    const saida = piorSaida(resultados.map((r) => r.efetiva));
    // só para a última linha: a chamada cujo único 2 é o til coberto conta 0 (a saída do script não muda)
    const semCoberto = piorSaida(resultados.map((r) => {
      const ks = r.cenas.map((cn) => casas[cn][r.coluna]);
      return r.saida === NAO_MEDIDO && ks.some((k) => k.coberto) && ks.every((k) => k.coberto || k.v === 0 || k.v === null) ? 0 : r.efetiva;
    }));

    // a impressão
    const L = [];
    L.push(`portoes-cena · ${proj.nome} · ${cenas.length} cena(s)${mapas.length ? ` (${mapas.length} de mapa, com a pré-carga)` : " sem mapa"} · desde ${desde} (Brasília)`);
    L.push(montarTabela(cenas, casas, sha));
    L.push("0 passou · 1 reprovou · 2 NÃO MEDIDO · — não roda nesta cena · · sem <video> a medir" + (cenas.some((c) => casas[c]["qc-cena"].coberto) ? " · 2* só o til-glifo, NÃO MEDIDO por desenho em cena de mapa (a medida é a coluna til)" : ""));
    const ruins = [];
    for (const c of cenas) for (const col of COLUNAS) {
      const k = casas[c][col];
      if (k.v !== 1 && k.v !== NAO_MEDIDO) continue;
      for (const l of k.linhas.length ? k.linhas : ["(sem linha)"]) {
        ruins.push(`  ${c} · ${col}${k.coberto ? " (2*)" : ""} · ${l}${col === "qc-cena" ? notaExcecao(exc, c, sha[c], l) : ""}`);
      }
    }
    if (ruins.length) { L.push("", "reprovou ou NÃO MEDIDO (as linhas inteiras):", ...ruins); }
    const avisosQc = avisosDoQcCena(jsonsQc);
    if (avisosQc.length) L.push("", ...avisosQc);
    L.push("", `saídas: ${resultados.map((r) => `${r.id} ${r.saida}${r.estourou ? " (teto)" : ""}`).join(" · ")}`);
    for (const r of resultados) {
      if (![0, 1, 2].includes(r.saida) || r.estourou) L.push(`  ⚠ ${r.id}: saída ${r.bruta ?? "nenhuma"}${r.sinal ? ` (sinal ${r.sinal})` : ""}${r.estourou ? ", passou do teto" : ""}: conta como ${r.efetiva}`);
      else if (r.efetiva !== r.saida) L.push(`  ⚠ ${r.id}: a saída ${r.saida} não bate com as linhas que ele deixou: conta como ${r.efetiva}`);
    }
    if (mapas.length) {
      const pidsMapa = new Set(resultados.filter((r) => r.pre_carga).map((r) => r.pid));
      const primeira = linhasAte(jsonlTiles, posTiles) + 1;
      let pedidos = 0, linhas = 0;
      for (const l of lerDesde(jsonlTiles, posTiles).split(/\r?\n/)) {
        if (!l.trim()) continue; let o; try { o = JSON.parse(l); } catch { continue; }
        const pidRodada = Number(String(o.rodada || "").split("-").pop());
        if (pidsMapa.has(o.pid) || pidsMapa.has(pidRodada)) { linhas++; pedidos += o.pedidos_maptiler || 0; }
      }
      L.push(`MapTiler: ${pedidos} pedido(s) nesta rodada, em ${linhas} linha(s) do _tmp/maptiler-portoes.jsonl, da ${primeira} em diante: anote no out/${proj.nome}/_pesquisa/maptiler-gasto.md (no lote, o setor anota uma vez antes e uma depois)`);
    }
    L.push(`saída: ${saida} (a pior dos portões: 1 reprovou ganha de 2 NÃO MEDIDO, que ganha de 0)${semCoberto !== saida ? ` · sem o til coberto (2*), seria ${semCoberto}` : ""}`);
    L.push(`registro: ${relReg}/`);
    soltar();
    if (!maquina.herdado && maquina.liberou !== "livre") L.push(`⚠ o chrome.json: ${maquina.liberou}`);
    const texto = L.join("\n");
    console.log(texto);
    writeFileSync(join(reg, "tabela.txt"), texto + "\n");
    writeFileSync(join(reg, "resumo.json"), JSON.stringify({
      proj: proj.nome, inicio: inicio.toISOString(), fim: new Date().toISOString(), desde, saida, sem_til_coberto: semCoberto,
      cenas: cenas.map((c) => ({ cena: c, sha1: sha[c], mapa: info[c].mapa, video: info[c].video, casas: casas[c] })),
      chamadas: resultados,
      maquina: { quem: maquina.quem, tarefa: maquina.tarefa, herdado: maquina.herdado, liberou: maquina.herdado ? "herdado: quem marcou libera" : maquina.liberou },
    }, null, 1) + "\n");
    codigo = saida;
  } catch (e) {
    process.stderr.write(`portoes-cena: parou: ${e?.stack || e}\n`);
    codigo = NAO_MEDIDO;
  } finally {
    matarArvore(filhoAtual);
    soltar();
  }
  process.exit(codigo);
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href.toLowerCase() === import.meta.url.toLowerCase()) await main();
