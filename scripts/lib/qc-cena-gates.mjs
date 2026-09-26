// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/qc-cena-gates.mjs (linhas 1-73, commit 4afda12) e
// top10-estudio/scripts/lib/portao-carimbo.mjs (linhas 1-107, mesmo commit).
// O que mudou: (1) a TABELA dos portões mora aqui, com o script de cada um, para o qc-cena saber
// quais existem no canal e dizer NÃO MEDIDO dos que não vieram; (2) "cena de mapa" passa a ser
// `maplibre`/`__aguardarMapa`, a mesma leitura de lib/abrir-cena.mjs — o `__prepararCaptura`
// que o estúdio usava aqui está em TODA cena; (3) o carimbo do _portao.json deixou o `flock`
// (Linux) e o `shlock` (Mac), que não existem no Windows: a exclusão entre processos é um arquivo
// de trava criado com a flag "wx" (atômica em NTFS e em ext4), com token, prazo de validade e
// quebra por rename (dois processos não apagam a trava um do outro); (4) moram aqui também os
// auxiliares do qc-cena que precisam de teste sem navegador: o projeto de cada cena, os blocos de
// cenas por chamada (limite de linha de comando do Windows), a leitura de JSON sem BOM e a carga
// da máquina no Windows (onde o load average é sempre zero).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
import { closeSync, existsSync, linkSync, openSync, readFileSync, renameSync, rmSync, statSync, writeSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { randomUUID } from "node:crypto";
import os from "node:os";

export const NOMES_GATES_QC_CENA = Object.freeze({
  contrato: "contrato",
  carga: "carga",
  overlap: "colisão",
  tamanho: "tamanho",
  // [porte Régie] era "til-Bold": o defeito do Top10 era da Bold da Neue Haas. Aqui o portão mede o
  // til e a cedilha na FAMÍLIA DA MARCA do canal, em qualquer peso — o nome diz o que ele mede.
  til: "til-glifo",
  src: "src-existe",
  quadro: "fora-do-quadro",
  mapa: "mapa-vivo",
  credito: "crédito-fantasma",
});

/**
 * [porte Régie] O SCRIPT DE CADA PORTÃO, relativo à raiz do canal. É por esta tabela que o qc-cena
 * sabe se o portão EXISTE no canal: portão ausente é NÃO MEDIDO (exit 2 na convenção da casa), nunca
 * verde — "o gate não veio" e "o gate aprovou" não podem sair iguais no carimbo.
 *
 * `base: true` = cobrado de toda cena (entra nos esperados mesmo sem o arquivo, e aí vira NÃO
 * MEDIDO). `base: false` = só onde o conteúdo pede (mapa, mídia) — ou, para `mapa`, só se o canal
 * tiver o script: o qc-mapa-vivo NÃO veio do estúdio nesta versão (ver ORIGEM.json nao_portados), e
 * cobrá-lo de toda cena de mapa deixaria o portão delas eternamente em NÃO MEDIDO. A falta dele é
 * impressa no fim de cada rodada e gravada no carimbo (`fora_do_portao`), não escondida.
 * O `quadro` (qc-fora-do-quadro) VEIO na integração: é base, como no estúdio — as roupas o citam como
 * o par do check-overlap ("geometria se fecha com os dois juntos").
 */
export const SCRIPTS_GATES_QC_CENA = Object.freeze({
  contrato: { script: "scripts/qc-contrato.mjs", base: true },
  carga: { script: "scripts/qc-carga.mjs", base: true },
  overlap: { script: "scripts/check-overlap.mjs", base: true },
  tamanho: { script: "scripts/qc-tamanho.mjs", base: true },
  til: { script: "scripts/_audit-til.mjs", base: true },
  src: { script: "scripts/qc-src-existe.mjs", base: true },
  quadro: { script: "scripts/qc-fora-do-quadro.mjs", base: true },
  mapa: { script: "scripts/qc-mapa-vivo.mjs", base: false, seExistir: true },
  credito: { script: "scripts/qc-credito-fantasma.mjs", base: false },
});

export const CHAVES_GATES_BASE_QC_CENA = Object.freeze([
  "contrato",
  "carga",
  "overlap",
  "tamanho",
  "til",
  "src",
  "quadro",
]);

export function detectarGatesOpcionaisQcCena(fonte) {
  const html = String(fonte || "");
  return {
    // [porte Régie] era /maptiler|mapbox|maplibre|__prepararCaptura/: `__prepararCaptura` é o contrato
    // de render de TODA cena (lib/abrir-cena.mjs mediu isto em 11/set/2026), então toda cena
    // "tinha mapa". O sinal é o motor de mapa, o mesmo de cenaEhDeMapa().
    temMapa: /maptiler|mapbox|maplibre|__aguardarMapa/i.test(html),
    temMidia: /_media\//.test(html) && /<(?:img|video)\b/i.test(html),
  };
}

export function chavesGatesEsperadosQcCena(fonte, { existe = () => true } = {}) {
  const { temMapa, temMidia } = detectarGatesOpcionaisQcCena(fonte);
  const opcional = (g) => !SCRIPTS_GATES_QC_CENA[g].seExistir || existe(SCRIPTS_GATES_QC_CENA[g].script);
  return [
    ...CHAVES_GATES_BASE_QC_CENA,
    ...(temMapa && opcional("mapa") ? ["mapa"] : []),
    ...(temMidia ? ["credito"] : []),
  ];
}

/**
 * [porte Régie] Os portões que ESTA cena pediria e que o canal não tem (hoje: mapa-vivo em cena de
 * mapa). Vão para o carimbo em `fora_do_portao`: o XML e quem lê o _portao.json sabem que o ok:true
 * dela não cobre aquela pergunta.
 */
export function chavesForaDoPortaoQcCena(fonte, { existe = () => true } = {}) {
  const todas = chavesGatesEsperadosQcCena(fonte, { existe: () => true });
  const cobertas = new Set(chavesGatesEsperadosQcCena(fonte, { existe }));
  return todas.filter((g) => !cobertas.has(g));
}

/** Cenas por chamada de processo. O Windows corta a linha de comando em 32.767 caracteres; 60
 * caminhos de ~200 cabem com folga larga (12 mil). */
export const CENAS_POR_CHAMADA = 60;
export function emBlocos(lista, n = CENAS_POR_CHAMADA) {
  const out = [];
  for (let i = 0; i < lista.length; i += n) out.push(lista.slice(i, i + n));
  return out;
}

/**
 * [porte Régie] O PROJETO DA CENA: a pasta acima de graphics/. Cena solta fora de graphics/ não tem
 * projeto — e então não tem onde ser carimbada (o qc-cena diz isso, em vez de gravar no projeto de
 * outra cena, que era o que acontecia com `dirname(dirname(htmls[0]))`).
 */
export function projetoDaCena(html) {
  const g = dirname(resolve(html));
  return basename(g) === "graphics" ? dirname(g) : null;
}

/** JSON de arquivo do projeto, sem o BOM que o PowerShell 5.1 grava com `-Encoding utf8`. */
export const semBom = (texto) => String(texto).replace(/^\uFEFF/, "");
export function lerJsonSemBom(arquivo) {
  return JSON.parse(semBom(readFileSync(arquivo, "utf8")));
}

/**
 * [porte Régie] A CARGA DA MÁQUINA, também no Windows.
 *
 * O estúdio lia o load average (os.loadavg() aqui). No Windows ele devolve SEMPRE [0,0,0]: a
 * concorrência padrão virava núcleos−2 (até 8 Chromes 4K) justo no PC do dono com o Premiere aberto
 * — o incidente que o próprio qc-cena narra (QC pendurado a 0% de CPU por 6 min). No win32 a carga
 * é ESTIMADA pela ociosidade de os.cpus() em duas leituras: ocupação × núcleos, a mesma unidade do
 * load average. Se nem isso der para medir, devolve null e quem chama usa um padrão conservador.
 *
 * @returns {Promise<{carga: number|null, fonte: string}>}
 */
export async function estimarCarga({ plataforma = process.platform, loadavg = os.loadavg, cpus = os.cpus, esperarMs = 500 } = {}) {
  if (plataforma !== "win32") return { carga: loadavg()[0] || 0, fonte: "load average" };
  const soma = () => (cpus() || []).reduce((a, c) => {
    const t = c?.times || {};
    const total = (t.user || 0) + (t.nice || 0) + (t.sys || 0) + (t.idle || 0) + (t.irq || 0);
    return { ocioso: a.ocioso + (t.idle || 0), total: a.total + total, n: a.n + 1 };
  }, { ocioso: 0, total: 0, n: 0 });
  try {
    const a = soma();
    await new Promise((ok) => setTimeout(ok, esperarMs));
    const b = soma();
    const dt = b.total - a.total;
    if (!b.n || !(dt > 0)) return { carga: null, fonte: "não medida no Windows" };
    const ocupacao = Math.min(1, Math.max(0, 1 - (b.ocioso - a.ocioso) / dt));
    return { carga: ocupacao * b.n, fonte: "ocupação da CPU (Windows)" };
  } catch { return { carga: null, fonte: "não medida no Windows" }; }
}
/** Concorrência padrão quando a carga não pôde ser medida: poucos Chromes 4K, nunca o máximo. */
export const CONC_SEM_CARGA = 3;
export function concorrenciaPadrao({ nucleos, carga }) {
  if (carga == null) return Math.max(1, Math.min(CONC_SEM_CARGA, nucleos - 2 || 1, 8));
  const livres = Math.max(1, Math.floor(nucleos - carga));
  return Math.max(1, Math.min(livres, nucleos - 2, 8));
}

export function nomesGatesEsperadosQcCena(fonte, opcoes) {
  return chavesGatesEsperadosQcCena(fonte, opcoes).map((chave) => NOMES_GATES_QC_CENA[chave]);
}

export function argumentosQcTamanho({ htmls, passo = "", remedir = false, naoMediu = false } = {}) {
  const arquivos = Array.isArray(htmls) ? htmls : [];
  const passoEfetivo = passo || (remedir && naoMediu ? "0.5" : "");
  return [
    ...arquivos,
    ...(passoEfetivo ? [`--passo=${passoEfetivo}`] : []),
    "--json",
  ];
}

export function interpretarSaidaQcTamanho(out) {
  const resultados = new Map();
  try {
    const linhas = String(out).split(/\r?\n/);
    const inicio = linhas.findIndex((linha) => /^\s*\[(?:\s*\{|\s*\]|\s*$)/.test(linha));
    if (inicio < 0) return resultados;
    for (const item of JSON.parse(linhas.slice(inicio).join("\n"))) {
      if (!item || typeof item.file !== "string" || item.erro) continue;
      const falhas = Array.isArray(item.falhas) ? item.falhas : [];
      const detalhe = (falha) => `[${falha.tipo}] ${falha.msg}${falha.px == null ? "" : ` ${falha.px}<${falha.piso}`}`;
      resultados.set(basename(item.file), {
        ok: falhas.length === 0,
        linha: falhas.map(detalhe).join(" · "),
      });
    }
  } catch { /* JSON inválido permanece NÃO MEDIDO e falha fechado no agregador */ }
  return resultados;
}

// ── O CARIMBO (_portao.json) ─────────────────────────────────────────────────────────────────
// Quem lê: o motor, em src/finalize/xml-premiere.mjs, que avisa no XML as cenas reprovadas ou com
// carimbo vencido (hash do HTML diferente). Formato idêntico ao do estúdio:
//   { "<cena>.html": { ok, hash (sha1 12), em, falhas: [nome], indefinidos: [nome] } }

const objeto = (v) => v && typeof v === "object" && !Array.isArray(v);
const PAUSA = new Int32Array(new SharedArrayBuffer(4));
const dormir = (ms) => Atomics.wait(PAUSA, 0, 0, Math.max(1, ms));

/** Troca o arquivo de uma vez. No Windows o rename falha (EPERM/EBUSY) enquanto outro processo o lê: tenta de novo. */
function trocarAtomico(temporario, destino) {
  for (let i = 0; ; i++) {
    try { renameSync(temporario, destino); return; }
    catch (e) {
      if (i >= 20 || !["EPERM", "EBUSY", "EACCES"].includes(e.code)) throw e;
      dormir(50);
    }
  }
}

function aplicarMerge(arquivo, parcial) {
  let anterior = {};
  if (existsSync(arquivo)) {
    // [porte Régie] sem o BOM: um _portao.json salvo pelo PowerShell 5.1 fazia o JSON.parse lançar, e
    // o carimbo não era gravado (o qc-cena agora diz isso e sai 2 — ver fundirCarimboPortao).
    try { anterior = lerJsonSemBom(arquivo); }
    catch (e) { throw new Error(`${arquivo} não é JSON legível (${e.message}) — conserte ou apague o arquivo e rode de novo`); }
    if (!objeto(anterior)) throw new Error("_portao.json não contém objeto");
  }
  const temporario = join(dirname(arquivo), `.${basename(arquivo)}.${process.pid}.${randomUUID()}.tmp`);
  try {
    const fd = openSync(temporario, "wx", 0o600);
    try { writeSync(fd, `${JSON.stringify({ ...anterior, ...parcial }, null, 1)}\n`); } finally { closeSync(fd); }
    trocarAtomico(temporario, arquivo);
  } finally {
    rmSync(temporario, { force: true });
  }
}

const lerTalvez = (arq) => { try { return readFileSync(arq, "utf8"); } catch { return null; } };

/**
 * Quebra uma trava VENCIDA sem apagar a trava nova de outro processo.
 *
 * [porte Régie] Antes: dois processos viam a mesma trava vencida e os dois davam rmSync — o segundo
 * apagava a trava NOVA que o primeiro acabara de criar, e os dois entravam juntos no read-merge-write.
 * Agora a trava vencida é RENOMEADA para um nome único (o rename é atômico: só um processo a leva), e
 * só é apagada se o conteúdo levado é o mesmo que se julgou vencido. Se veio outro conteúdo, levou-se
 * a trava fresca de alguém: ela é devolvida com link (que falha se o nome já foi retomado, em vez de
 * sobrescrever).
 */
export function quebrarTravaVencida(trava, conteudoVencido) {
  const levada = `${trava}.${process.pid}.${randomUUID()}.vencida`;
  try { renameSync(trava, levada); } catch { return; }          // outro processo levou antes: disputa segue
  const veio = lerTalvez(levada);
  if (veio === conteudoVencido) { rmSync(levada, { force: true }); return; }
  try { linkSync(levada, trava); } catch { /* já retomada por outro: o dono dela confere o token ao soltar */ }
  rmSync(levada, { force: true });
}

/**
 * Faz o read-merge-write do carimbo sob exclusão mútua entre processos.
 *
 * [porte Régie] A trava é `<_portao.json>.lock` criado com "wx" (falha se já existe — a criação é
 * atômica no sistema de arquivos, então só um processo ganha), com um token único dentro. Trava com
 * mais de `validadeMs` é de um processo que morreu no meio (o `flock` do estúdio morria junto com o
 * processo; um arquivo não morre sozinho): é quebrada (quebrarTravaVencida) e a disputa recomeça.
 * No NTFS, abrir com "wx" uma trava cuja exclusão ainda está pendente dá EPERM (ou EACCES), não
 * EEXIST: é disputa, e tenta de novo. Ao soltar, só apaga a trava se o token ainda é o seu.
 * Sem `shlock`, sem `flock`, sem shell.
 */
export function fundirCarimboPortao(arquivo, parcial, { timeoutMs = 15_000, validadeMs = 60_000 } = {}) {
  const destino = resolve(arquivo);
  if (!objeto(parcial)) throw new Error("carimbo parcial inválido");
  const trava = `${destino}.lock`;
  const token = `${process.pid}:${randomUUID()}`;
  const limite = Date.now() + timeoutMs;
  let fd = null;
  while (fd === null) {
    try { fd = openSync(trava, "wx"); }
    catch (e) {
      if (!["EEXIST", "EPERM", "EACCES", "EBUSY"].includes(e.code)) throw e;
      if (e.code === "EEXIST") {
        try {
          const conteudo = lerTalvez(trava);
          if (conteudo !== null && Date.now() - statSync(trava).mtimeMs > validadeMs) { quebrarTravaVencida(trava, conteudo); continue; }
        } catch { continue; }
      }
      if (Date.now() >= limite) throw new Error(`timeout de ${timeoutMs / 1000}s aguardando a trava ${trava} (outro qc-cena gravando? trava presa?)`);
      dormir(25);
    }
  }
  try {
    writeSync(fd, token);
    closeSync(fd); fd = -1;
    aplicarMerge(destino, parcial);
  } finally {
    if (fd > 0) { try { closeSync(fd); } catch { } }
    if (lerTalvez(trava) === token) rmSync(trava, { force: true });
  }
}
