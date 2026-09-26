#!/usr/bin/env node
// ── NOVO na Régie (não é porte) ──────────────────────────────────────────────────────────────
// O REGISTRADOR DA CAÇA PELO CHROME — pega o arquivo que o Chrome acabou de baixar, põe na cena e
// grava de onde ele veio.
//
// Por que existe (ADR 0009 §D): a caça nos acervos pagos (Shutterstock com a conta própria do dono;
// Storyblocks, Envato e Motion Array com as contas do Top10) acontece na sessão Produção, pela
// extensão Claude in Chrome, no Chrome de sempre do dono (skill .claude/skills/cacar-no-chrome). A
// extensão NÃO tem ferramenta de download documentada: o arquivo cai na pasta Downloads do Chrome
// (levantamento de 23/09/2026, pergunta 10, https://code.claude.com/docs/en/chrome — "nao_documentado").
// Então alguém tem de ir buscá-lo lá, esperar ele terminar, levá-lo para a cena e carimbar a
// procedência — e esse alguém não pode ser a memória do agente: o estúdio já perdeu 25 clipes pagos
// parados num hub fora do projeto por nove dias [PESQ-102], e 6 arquivos sem declaração porque o
// carimbo ficou para o fim (pesquisa-imagens, Delta 91).
//
// Os três verbos, na ordem em que a skill os usa:
//
//   node scripts/stock/registrar-download.mjs marcar  --proj=<slug> [--plataforma=<p>]
//        ANTES de clicar em baixar: fotografa a pasta Downloads (para saber depois o que é NOVO) e,
//        no Shutterstock, diz quanto resta do dia da conta (sai 5 se não resta nada: não clique).
//   node scripts/stock/registrar-download.mjs recolher --proj=<slug> --cena=<id> --plataforma=<p>
//        --url=<página do item> [--busca="…"] [--tipo=video|foto|audio] [--arquivo=<nome>]
//        [--espera=<s>] [--instalar=<nome-final>] [--vertical] [--aceitar-abaixo-de-4k]
//        DEPOIS do clique: espera o download terminar (.crdownload), confere que o arquivo é DESTE
//        clique (ver "O arquivo é deste item?" abaixo), move o arquivo para
//        out/<proj>/_media/_caca/<cena>/<plataforma>/, mede, grava a linha do manifest.jsonl e o
//        _PROCEDENCIA.json dessa pasta, e conta no teto do Shutterstock.
//   node scripts/stock/registrar-download.mjs instalar --proj=<slug> --cena=<id> --arquivo=<no _caca> --nome=<nome-final>
//        FOTO e ÁUDIO: copia do _caca para _media/<foto|audio>/<cena>/ e declara ali. (Vídeo se instala
//        com scripts/stock/_instalar-lote.mjs, que confere 30 fps all-intra — REND-47.)
//   node scripts/stock/registrar-download.mjs teto [--acertar=<usados hoje> --motivo="…"]
//        Quanto resta do dia do Shutterstock nesta conta; --acertar alinha o contador ao que o site diz.
//
// A pasta Downloads: --downloads=<pasta>, senão a variável REGIE_DOWNLOADS, senão marca/midia.json
// (caca.pasta_downloads, aceita ~ e %USERPROFILE%), senão %USERPROFILE%\Downloads — a pasta padrão do
// Chrome no Windows (levantamento, pergunta 10). Se o dono mudou a pasta no Chrome (Configurações ›
// Downloads › Local), é ali que se configura.
//
// O ARQUIVO É DESTE ITEM? (revisão v1, 23/09/2026). A pasta Downloads e o Chrome são os de sempre do
// dono: enquanto o registrador espera, ele pode baixar uma coisa pessoal no mesmo Chrome. Arquivo errado
// recolhido aqui vira procedência FALSA gravada como prova (URL e licença de um item, bytes de outro).
// Por isso só conta como "deste clique" o arquivo que passa nas três portas:
//   · NOME NOVO — não existia no retrato do 'marcar'. Arquivo antigo que só mudou de tamanho ou de
//     data NÃO é download novo (o Chrome nunca sobrescreve: repete o nome como "x (1).mp4");
//   · CRIADO DEPOIS DO 'marcar' — a data de criação do arquivo (o NTFS a preserva no rename que o
//     Chrome faz do .crdownload para o nome final) não pode ser anterior ao retrato. Pega o download
//     que o dono começou ANTES e que terminou durante a espera. Onde o disco não informa a data de
//     criação, esta porta fica aberta (as outras duas continuam);
//   · SHUTTERSTOCK: o id no nome. O site entrega `shutterstock_<id>.<ext>` (medido no estúdio:
//     top10-estudio/scripts/stock/baixar.mjs:321, `shutterstock_3453605845.mp4`), e o id é o mesmo da
//     URL do item (idDaUrl). Nome sem o id da --url = arquivo de outro item: sai 3, nada movido.
// E o 'marcar' é obrigatório, também com --arquivo: sem retrato não há como provar que o arquivo chegou
// depois do clique. Esqueceu? 'marcar' e clique de novo ("Baixar novamente", no Shutterstock).
//
// Códigos de saída: 0 ok · 2 uso/configuração · 3 mais de um arquivo novo (diga qual com --arquivo) ·
// 5 teto do Shutterstock zerado (marcar/teto) · 6 nada chegou, ou ainda baixando, dentro da espera ·
// 7 fora da régua 4K landscape (vertical ou abaixo de 4K: foi para _rejeitado-*/, e o download CONTOU) ·
// 8 o arquivo não é mídia (página HTML, desconhecido) — ficou onde estava · 11 destino ocupado ·
// 12 procedência não declarada. Os códigos 7, 11 e 12 casam com os do api-oficial.mjs.
//
// Windows nativo: caminhos por path.join, nomes pelo nomeSeguro do motor (sem acento, sem : ? *),
// rename com nova tentativa (o antivírus segura o arquivo recém-baixado), e cópia+apagar quando a
// pasta Downloads está noutro disco (EXDEV). Nenhum shell, nenhum processo filho.
// Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
import { appendFileSync, closeSync, copyFileSync, existsSync, mkdirSync, openSync, readdirSync, readFileSync, readSync, rmSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { basename, extname, isAbsolute, join, relative, resolve } from "node:path";
import { importarDoMotor } from "../lib/motor.mjs";
import { declaracaoDeInstalacao, DOMINIOS, urlEhDaPlataforma } from "./lib/instalacao-procedencia.mjs";
import { declarar, podeDeclarar } from "./lib/procedencia-canal.mjs";
import * as tetoPadrao from "./lib/teto-shutterstock.mjs";
import { ehPrincipal, opcao } from "./lib/ferramentas.mjs";

/** As quatro plataformas da caça pelo Chrome (ADR 0009 §D). O nome é a chave de LIC/DOMINIOS. */
export const PLATAFORMAS = Object.freeze(["shutterstock", "storyblocks", "envato", "motionarray"]);
const NOME_BONITO = Object.freeze({ shutterstock: "Shutterstock", storyblocks: "Storyblocks", envato: "Envato Elements", motionarray: "Motion Array" });
/** De quem é a conta, por padrão (ADR 0009 §D). marca/midia.json › caca.contas troca o texto. */
export const CONTAS_PADRAO = Object.freeze({ shutterstock: "propria do dono", storyblocks: "Top10", envato: "Top10", motionarray: "Top10" });

/** Download em andamento no Chrome/Edge (.crdownload, "Unconfirmed 123.crdownload") e afins. */
export const EM_ANDAMENTO = /(\.(crdownload|part|partial|download|tmp)$)|(^Unconfirmed \d+)/i;
const IGNORAR = /^(desktop\.ini|thumbs\.db|\.ds_store)$|^~\$|^\./i;
const EXT_VIDEO = /^\.(mp4|mov|m4v|mkv|webm|mxf)$/i;
const EXT_FOTO = /^\.(jpe?g|png|webp|tiff?)$/i;
const EXT_AUDIO = /^\.(mp3|wav|aiff?|m4a|flac|ogg)$/i;
const MARCA = ".antes-do-download.json";
/** O registro dos recusados pela régua, dentro de _rejeitado-<motivo>/ — de propósito NÃO se chama manifest.jsonl. */
export const REJEITADOS = "_REJEITADOS.jsonl";
export const LADO_4K = 3840;
/** Espera padrão do 'recolher', em segundos (marca/midia.json › caca.espera_download_s troca). */
export const ESPERA_PADRAO_S = 180;
/**
 * Folga entre o relógio do Node e a data que o disco grava: o sistema de arquivos usa um relógio mais
 * grosso (medido nesta máquina: a data de criação sai ~4 ms ANTES do Date.now() lido antes de gravar;
 * no NTFS o passo é da ordem de 15 ms). Meio segundo cobre isso com sobra, e nenhum clique humano
 * acontece meio segundo antes do próprio 'marcar' terminar.
 */
export const FOLGA_CRIACAO_MS = 500;
/** O id do Shutterstock no nome do arquivo baixado: "shutterstock_3453605845.mp4", "shutterstock_2211 (1).jpg". */
export function idShutterstockNoNome(nome) {
  const m = String(nome ?? "").match(/shutterstock_(\d{4,})/i);
  return m ? m[1] : null;
}

/** O nome da plataforma como o dono escreve ("Motion Array", "motion-array") → a chave. */
export function normalizarPlataforma(p) {
  const k = String(p ?? "").toLowerCase().replace(/[^a-z]/g, "");
  return PLATAFORMAS.includes(k) ? k : null;
}

/**
 * O caminho de uma URL http(s) ("/video/clip-123"), tirado do `href` normalizado — sem query nem
 * âncora. null se não for URL legível. (Não usa a propriedade de caminho do objeto URL: a régua dos
 * scripts do canal a proíbe, porque em URL de ARQUIVO ela quebra no Windows e com espaço.)
 */
export function caminhoDaUrl(url) {
  let href; try { href = new URL(String(url ?? "").trim()).href; } catch { return null; }
  const m = href.match(/^https?:\/\/[^/?#]+(\/[^?#]*)?/i);
  return m ? (m[1] || "/") : null;
}

/**
 * A URL é a página de BUSCA, não a do item? As rotas de busca são as que o estúdio calibrou
 * (top10-estudio/scripts/stock/baixar.mjs:327-328, 364, 541-542, 624, commit 4afda12). A página de
 * busca não identifica o arquivo: com ela na procedência ninguém reencontra o item depois.
 */
export function pareceBusca(plat, url) {
  const p = caminhoDaUrl(url)?.replace(/\/+$/, "/");
  if (p == null) return false;
  if (plat === "shutterstock") return /^\/(video\/)?search(\/|$)/.test(p) || p === "/";
  if (plat === "storyblocks") return /\/search(\/|$)/.test(p) || p === "/";
  if (plat === "envato") return p === "/search" || p === "/search/" || p === "/photos" || p === "/photos/" || p === "/";
  if (plat === "motionarray") return (p === "/stock-video/" || p === "/stock-video") || p === "/";
  return false;
}

/** O id do item na plataforma, quando a URL o traz de forma inequívoca; senão null (nunca um chute). */
export function idDaUrl(plat, url) {
  const caminho = caminhoDaUrl(url);
  if (caminho == null) return null;
  const ult = caminho.split("/").filter(Boolean).pop() || "";
  if (plat === "storyblocks") { const m = caminho.match(/\b(SBV-\d+|SBI-\d+|SBA-\d+)\b/i); if (m) return m[1].toUpperCase(); }
  const uuid = ult.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
  if (uuid) return uuid[0];
  // clip-<id>-<slug> / track-<id> (Shutterstock) vem antes: um slug pode terminar em ano ("...-2024")
  const num = ult.match(/^(?:clip|track)-(\d{4,})(?:-|$)/) || ult.match(/-(\d{4,})$/);
  if (num) return num[1];
  if (plat === "envato") { const m = ult.match(/-([A-Z0-9]{6,})$/); if (m) return m[1]; }
  return null;
}

/** O formato pelo conteúdo, com os casos que o do motor não cobre aqui: áudio, zip, página HTML. */
export function formatoDoArquivo(bytes, formatoPorConteudo) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
  const txt = (i, n) => String.fromCharCode(...b.subarray(i, i + n));
  if (b.length >= 12 && txt(4, 4) === "ftyp" && /^M4A /.test(txt(8, 4))) return { ext: ".m4a", categoria: "audio" };
  const f = formatoPorConteudo(b);
  if (f && !f.naoSuportado) return { ext: f.ext, categoria: f.categoria === "imagem" ? "foto" : f.categoria };
  if (f?.naoSuportado) return { naoSuportado: f.naoSuportado };
  if (b.length >= 3 && txt(0, 3) === "ID3") return { ext: ".mp3", categoria: "audio" };
  if (b.length >= 2 && b[0] === 0xff && (b[1] & 0xe0) === 0xe0) return { ext: ".mp3", categoria: "audio" };
  if (b.length >= 12 && txt(0, 4) === "RIFF" && txt(8, 4) === "WAVE") return { ext: ".wav", categoria: "audio" };
  if (b.length >= 4 && txt(0, 4) === "fLaC") return { ext: ".flac", categoria: "audio" };
  if (b.length >= 12 && txt(0, 4) === "FORM" && /^AIF[FC]$/.test(txt(8, 4))) return { ext: ".aiff", categoria: "audio" };
  if (b.length >= 4 && b[0] === 0x50 && b[1] === 0x4b && b[2] === 0x03 && b[3] === 0x04) return { ext: ".zip", categoria: "pacote" };
  return null;
}

function lerComeco(caminho, n = 4096) {
  const fd = openSync(caminho, "r");
  try { const buf = Buffer.alloc(n); const lidos = readSync(fd, buf, 0, n, 0); return buf.subarray(0, lidos); }
  finally { closeSync(fd); }
}

const expandir = (p, home) => String(p).replace(/^~(?=$|[\\/])/, home).replace(/%USERPROFILE%/gi, home);

/** A configuração da caça em marca/midia.json › caca (tudo opcional). Mal formado = erro (I5). */
export function lerConfigCaca(raiz) {
  const arq = join(raiz, "marca", "midia.json");
  const j = existsSync(arq) ? tetoPadrao.lerJsonDoCanal(arq, "marca/midia.json") : {};
  const c = j?.caca ?? {};
  const erro = (m) => Object.assign(new Error(`${m}\n  Forma: "caca": { "pasta_downloads": null, "espera_download_s": 180, "contas": { "storyblocks": "Top10" } }`), { code: "CONFIG_INVALIDA" });
  if (typeof c !== "object" || Array.isArray(c) || c === null) throw erro("\"caca\" em marca/midia.json nao e um objeto.");
  if (c.pasta_downloads != null && (typeof c.pasta_downloads !== "string" || !c.pasta_downloads.trim())) throw erro("\"caca.pasta_downloads\" tem de ser um caminho (texto) ou null.");
  if (c.espera_download_s != null && (!Number.isInteger(c.espera_download_s) || c.espera_download_s < 5 || c.espera_download_s > 7200)) throw erro("\"caca.espera_download_s\" tem de ser um inteiro de 5 a 7200.");
  if (c.contas != null && (typeof c.contas !== "object" || Array.isArray(c.contas))) throw erro("\"caca.contas\" tem de ser um objeto { plataforma: texto }.");
  return {
    pastaDownloads: c.pasta_downloads ?? null,
    // 180 s: um clipe 4K da assinatura chega em poucos minutos numa conexão de casa, e o 'recolher'
    // se repete quando sai 6 ("ainda baixando"). Janela longa é janela em que um download PESSOAL do
    // dono, no mesmo Chrome, pode ser tomado pelo deste item (revisão v1, 23/09/2026: era 900 s).
    esperaS: c.espera_download_s ?? ESPERA_PADRAO_S,
    contas: { ...CONTAS_PADRAO, ...Object.fromEntries(Object.entries(c.contas || {}).filter(([k, v]) => normalizarPlataforma(k) && typeof v === "string").map(([k, v]) => [normalizarPlataforma(k), v.slice(0, 80)])) },
  };
}

/** A pasta onde o Chrome deixa os downloads, e de onde ela veio. */
export function pastaDownloads(argv, { raiz, env, home, cfgCaca }) {
  const doArg = opcao(argv, "downloads", "");
  if (doArg) return { pasta: resolve(expandir(doArg, home)), origem: "--downloads" };
  if (env.REGIE_DOWNLOADS) return { pasta: resolve(expandir(env.REGIE_DOWNLOADS, home)), origem: "REGIE_DOWNLOADS" };
  if (cfgCaca.pastaDownloads) return { pasta: resolve(raiz, expandir(cfgCaca.pastaDownloads, home)), origem: "marca/midia.json > caca.pasta_downloads" };
  return { pasta: join(home, "Downloads"), origem: "padrao do Chrome (%USERPROFILE%\\Downloads)" };
}

/**
 * O retrato da pasta: nome → {tam, mtime, criado}. Só arquivos; pastas e lixo de sistema ficam de fora.
 * `criado` é a data de criação (birthtime) — null onde o disco não a informa (Node devolve 0).
 */
export function fotografar(pasta) {
  const r = {};
  for (const e of readdirSync(pasta, { withFileTypes: true })) {
    if (!e.isFile() || IGNORAR.test(e.name)) continue;
    try {
      const s = statSync(join(pasta, e.name));
      r[e.name] = { tam: s.size, mtime: Math.round(s.mtimeMs), criado: s.birthtimeMs > 0 ? Math.round(s.birthtimeMs) : null };
    } catch { /* sumiu no meio */ }
  }
  return r;
}

/** O arquivo foi criado ANTES do 'marcar'? (null/sem data = não se sabe = não acusa) */
export function criadoAntes(s, desdeMs) {
  return Number.isFinite(desdeMs) && Number.isFinite(s?.criado) && s.criado < desdeMs - FOLGA_CRIACAO_MS;
}

/**
 * O que CHEGOU desde o retrato: {prontos, andamento, antigos}.
 *   · prontos: nome que NÃO existia no retrato, sem cara de download em curso, e (onde o disco informa)
 *     criado depois do 'marcar';
 *   · andamento: download em curso (.crdownload…) novo ou que mudou — espera-se por ele;
 *   · antigos: nome novo mas criado ANTES do 'marcar' (um rename, ou um download que o dono começou
 *     antes). Não é deste clique; só aparece na mensagem.
 * Arquivo que já existia e só mudou de tamanho ou de data NÃO entra em nada: não é download novo.
 */
export function novidades(antes, agora, { desdeMs = null } = {}) {
  const prontos = [], andamento = [], antigos = [];
  for (const [nome, s] of Object.entries(agora)) {
    const a = antes[nome];
    if (EM_ANDAMENTO.test(nome)) {
      if (a && a.tam === s.tam && a.mtime === s.mtime) continue;
      andamento.push(nome);
      continue;
    }
    if (a) continue;                                           // já existia: mudar não o torna novo
    (criadoAntes(s, desdeMs) ? antigos : prontos).push(nome);
  }
  return { prontos: prontos.sort(), andamento: andamento.sort(), antigos: antigos.sort() };
}

/** Um nome livre em `pasta`: base.ext, base-2.ext, base-3.ext… Nunca sobrescreve. */
function nomeLivre(pasta, base, ext) {
  for (let i = 1; i < 1000; i++) {
    const n = `${base}${i === 1 ? "" : `-${i}`}${ext}`;
    if (!existsSync(join(pasta, n))) return n;
  }
  throw Object.assign(new Error(`mil nomes ocupados em ${pasta}`), { code: "JA_EXISTE" });
}

class Saida extends Error { constructor(codigo) { super(`saida ${codigo}`); this.codigo = codigo; } }
const dormirPadrao = (ms) => new Promise((ok) => setTimeout(ok, ms));

export async function principal(argv = process.argv.slice(2), {
  raiz = process.cwd(), log = console.log, erro = console.error, env = process.env, home = homedir(),
  dormir = dormirPadrao, agora = () => Date.now(), teto = tetoPadrao, medir = null, passoMs = 1000,
} = {}) {
  const verbo = argv[0];
  const flag = (n) => argv.includes(`--${n}`);
  const opt = (n, d = "") => opcao(argv, n, d);
  const sair = (c) => { throw new Saida(c); };
  const USO = "uso: registrar-download.mjs marcar --proj=<slug> [--plataforma=<p>]\n" +
    "     registrar-download.mjs recolher --proj=<slug> --cena=<id> --plataforma=<p> --url=<pagina do item> [--busca=\"...\"] [--tipo=video|foto|audio] [--arquivo=<nome>] [--espera=<s>] [--instalar=<nome-final>]\n" +
    "     registrar-download.mjs instalar --proj=<slug> --cena=<id> --arquivo=<caminho no _caca> --nome=<nome-final>\n" +
    "     registrar-download.mjs teto [--acertar=<usados hoje> --motivo=\"...\"]\n" +
    `     plataformas: ${PLATAFORMAS.join(" | ")}`;

  try {
    if (!["marcar", "recolher", "instalar", "teto"].includes(verbo)) { erro(USO); sair(2); }
    if (!existsSync(join(raiz, "canal.json"))) {
      erro(`x nao achei canal.json em ${raiz}. Rode de dentro da pasta do canal (a que tem canal.json e out/).`);
      sair(2);
    }
    const tetoDoDia = (cfg = null) => {
      try { return teto.restante(raiz, { agora: agora(), home, config: cfg }); }
      catch (e) { erro(`x ${e.message}`); sair(2); }
    };

    // ── teto ──────────────────────────────────────────────────────────────────────────────────
    if (verbo === "teto") {
      const ac = opt("acertar");
      let r;
      if (ac !== "") {
        const n = Number(ac);
        try { r = teto.acertar(raiz, n, { agora: agora(), home, motivo: opt("motivo") || null }); }
        catch (e) { erro(`x ${e.message}`); sair(2); }
        log(`  acerto gravado: hoje a conta ja gastou ${n}.`);
      } else r = tetoDoDia();
      log(`  ${teto.descrever(r)}`);
      return r.restante === 0 ? 5 : 0;
    }

    let cfgCaca;
    try { cfgCaca = lerConfigCaca(raiz); } catch (e) { erro(`x ${e.message}`); sair(2); }
    const proj = opt("proj");
    if (!proj || /[\\/]|^\.\.?$/.test(proj)) { erro("x falta --proj=<slug do video> (o nome da pasta em out/)."); sair(2); }
    const projDir = join(raiz, "out", proj);
    if (!existsSync(projDir)) { erro(`x out/${proj} nao existe neste canal — nada foi feito (nenhuma pasta nasce fora de um projeto aberto).`); sair(2); }
    const { nomeSeguro, relPosix, renomearComRetentativa, comTrava, sha256Arquivo } = await importarDoMotor("src/midia/arquivos.mjs");
    const motorProc = await importarDoMotor("src/midia/procedencia.mjs");
    const { lerProcedencia, formatoPorConteudo } = motorProc;
    const medirArq = medir || motorProc.medir;

    // ── instalar (foto/áudio do _caca para a cena) ────────────────────────────────────────────
    const instalar = async ({ arq, cena, nome, linha }) => {
      const ext = extname(arq).toLowerCase();
      const tipo = EXT_FOTO.test(ext) ? "foto" : EXT_AUDIO.test(ext) ? "audio" : EXT_VIDEO.test(ext) ? "video" : null;
      if (tipo === "video") {
        erro(`x video se instala com o instalador de footage, que confere 30 fps e all-intra (REND-47):`);
        erro(`    node scripts/stock/_instalar-lote.mjs ${proj} ${cena} "${relPosix(raiz, arq)}" ${nomeSeguro(nome, { max: 80, reserva: "footage" })}`);
        return 2;
      }
      if (!tipo) { erro(`x ${basename(arq)} nao e foto nem audio que a cena use (${ext || "sem extensao"}) — nada instalado.`); return 2; }
      const cenaSegura = nomeSeguro(cena, { max: 60, reserva: "cena" });
      const destDir = join(projDir, "_media", tipo, cenaSegura);
      const nomeFinal = `${nomeSeguro(nome, { max: 80, reserva: tipo })}${ext}`;
      const destino = join(destDir, nomeFinal);
      if (existsSync(destino)) { erro(`x ja existe out/${proj}/_media/${tipo}/${cenaSegura}/${nomeFinal} — escolha outro --nome.`); return 11; }
      const pode = podeDeclarar(destDir, nomeFinal, { lerProcedencia });
      if (!pode.ok) { erro(`x ${pode.porque}`); return 11; }
      const plat = linha.plataforma;
      const decl = declaracaoDeInstalacao({ plat, reg: linha });
      if (!decl.ok) { erro(`x ${decl.motivo}`); return 12; }
      const item = {
        arquivo: nomeFinal,
        ...decl.campos,
        fonte: `${NOME_BONITO[plat] || plat} — stock ${tipo === "foto" ? "photo" : "audio"} (assinatura, conta: ${linha.conta || "?"})`,
        conta: linha.conta || null,
        ...(linha.id_na_fonte ? { id_fornecedor: String(linha.id_na_fonte) } : {}),
        busca: linha.busca || null, cena: cenaSegura, arquivo_original: basename(arq),
        resolucao: linha.medido?.resolucao || null, baixado_em: linha.ts || null,
        medido: linha.medido || null,
        declarado_por: { quem: "registrar-download.mjs", manifesto: relPosix(projDir, join(arq, "..", "manifest.jsonl")) },
      };
      let instalado = false, r;
      try {
        r = declarar(destDir, item, {
          lerProcedencia, renomearComRetentativa, comTrava, quem: "registrar_download",
          antes: () => {
            if (existsSync(destino)) throw Object.assign(new Error(`ja existe ${relPosix(raiz, destino)} (outro processo instalou esse nome agora)`), { code: "JA_EXISTE" });
            copyFileSync(arq, destino); instalado = true;
          },
        });
      } catch (e) {
        if (instalado) rmSync(destino, { force: true });
        erro(`x a procedencia NAO foi declarada e o arquivo NAO ficou na cena: ${String(e.message).split("\n")[0]}`);
        return 12;
      }
      if (!r.ok) { erro(`x ${r.porque} — nada instalado.`); return 12; }
      log(`  instalado em out/${proj}/_media/${tipo}/${cenaSegura}/${nomeFinal} (procedencia declarada no _PROCEDENCIA.json da pasta)`);
      return 0;
    };

    if (verbo === "instalar") {
      const cena = opt("cena"), nome = opt("nome"), a = opt("arquivo");
      if (!cena || !nome || !a) { erro(USO); sair(2); }
      const arq = resolve(raiz, a);
      const caca = join(projDir, "_media", "_caca");
      if (relative(caca, arq).startsWith("..") || isAbsolute(relative(caca, arq)) || !existsSync(arq)) {
        erro(`x --arquivo tem de ser um arquivo que o recolher pos em out/${proj}/_media/_caca/ — ${a} nao e.`); sair(2);
      }
      const { reg } = acharLinhaDoArquivo(join(arq, "..", "manifest.jsonl"), basename(arq));
      if (!reg) { erro(`x ${basename(arq)} nao tem linha no manifest.jsonl ao lado — sem ela a procedencia nao se prova. Recolha o arquivo pelo 'recolher'.`); sair(12); }
      return await instalar({ arq, cena, nome, linha: reg });
    }

    const plataforma = normalizarPlataforma(opt("plataforma"));
    const dl = pastaDownloads(argv, { raiz, env, home, cfgCaca });
    const marcaArq = join(projDir, "_media", "_caca", MARCA);

    // ── marcar ────────────────────────────────────────────────────────────────────────────────
    if (verbo === "marcar") {
      if (opt("plataforma") && !plataforma) { erro(`x plataforma desconhecida: ${opt("plataforma")} (${PLATAFORMAS.join(" | ")}).`); sair(2); }
      if (!existsSync(dl.pasta)) {
        erro(`x a pasta de downloads nao existe: ${dl.pasta} (${dl.origem}).`);
        erro("  Veja no Chrome onde ele salva (Configuracoes > Downloads > Local) e ponha esse caminho em marca/midia.json > caca.pasta_downloads.");
        sair(2);
      }
      let r = null;
      if (plataforma === "shutterstock") {
        r = tetoDoDia();
        log(`  ${teto.descrever(r)}`);
      }
      mkdirSync(join(projDir, "_media", "_caca"), { recursive: true });
      // O relógio REAL (não o `agora` injetável): ele é comparado com a data de criação que o disco
      // grava nos arquivos, e o disco não conhece o relógio falso de ninguém. Lido ANTES do retrato.
      const desdeMs = Date.now();
      const foto = fotografar(dl.pasta);
      writeFileSync(marcaArq, `${JSON.stringify({ ts: new Date(agora()).toISOString(), desde_ms: desdeMs, pasta: dl.pasta, arquivos: foto }, null, 1)}\n`);
      log(`  pasta de downloads fotografada (${Object.keys(foto).length} arquivo(s) ja existentes): ${dl.pasta}`);
      if (r && r.restante === 0) {
        erro("x o dia do Shutterstock desta conta ACABOU — nao clique em baixar. Use Storyblocks, Envato ou Motion Array (sem teto), ou espere o dia virar.");
        return 5;
      }
      log("  Agora clique em baixar no Chrome; depois rode 'recolher' com a URL da pagina do item.");
      return 0;
    }

    // ── recolher ──────────────────────────────────────────────────────────────────────────────
    const cena = opt("cena"), url = opt("url"), busca = opt("busca") || null;
    if (!plataforma) { erro(`x falta --plataforma=<${PLATAFORMAS.join("|")}> (veio ${JSON.stringify(opt("plataforma"))}).`); sair(2); }
    if (!cena) { erro("x falta --cena=<id da cena>."); sair(2); }
    if (!url || !urlEhDaPlataforma(plataforma, url)) {
      erro(`x --url tem de ser a pagina do ITEM em ${DOMINIOS[plataforma].join(" / ")} (a que voce abriu para baixar); veio ${JSON.stringify(String(url).slice(0, 100))}.`);
      erro("  Sem ela a procedencia nao se prova, e ninguem reencontra o item na plataforma depois. Nada foi movido.");
      sair(2);
    }
    if (pareceBusca(plataforma, url)) {
      erro(`x ${url.slice(0, 100)} e a pagina de BUSCA, nao a do item. Abra o item e passe a URL dele. Nada foi movido.`);
      sair(2);
    }
    // Shutterstock: o id do item vem da URL e tem de reaparecer no nome do arquivo (ver o cabeçalho).
    const idItem = plataforma === "shutterstock" ? idDaUrl(plataforma, url) : null;
    if (plataforma === "shutterstock" && !idItem) {
      erro(`x ${url.slice(0, 100)} nao traz o id do item (a pagina do item do Shutterstock termina em "-<numero>", como clip-1234567-... ou .../refinaria-2211).`);
      erro("  Sem o id nao da para conferir que o arquivo baixado e deste item. Nada foi movido.");
      sair(2);
    }
    const tipoPedido = opt("tipo") || null;
    if (tipoPedido && !["video", "foto", "audio"].includes(tipoPedido)) { erro("x --tipo e video, foto ou audio."); sair(2); }
    let cfgTeto = null;
    if (plataforma === "shutterstock") {
      try { cfgTeto = teto.lerConfigShutterstock(raiz); } catch (e) { erro(`x ${e.message}`); sair(2); }
    }
    if (!existsSync(dl.pasta)) { erro(`x a pasta de downloads nao existe: ${dl.pasta} (${dl.origem}). Nada foi movido.`); sair(2); }
    const esperaS = Number(opt("espera")) || cfgCaca.esperaS;

    // Qual arquivo: o dito em --arquivo (dentro da pasta de downloads), ou o ÚNICO novo desde o 'marcar'.
    let nomeBaixado = null;
    const aArg = opt("arquivo");
    let antes = null, desdeMs = null;
    try {
      const mk = JSON.parse(readFileSyncTexto(marcaArq));
      if (mk && typeof mk.arquivos === "object" && mk.arquivos !== null) { antes = mk.arquivos; desdeMs = Number.isFinite(mk.desde_ms) ? mk.desde_ms : null; }
    } catch { antes = null; }
    if (!antes) {
      erro(`x nao ha retrato da pasta de downloads para out/${proj}: rode 'marcar' ANTES de clicar em baixar (tambem com --arquivo).`);
      erro("  Sem retrato nao ha como provar que o arquivo chegou depois do clique. Rode 'marcar' e clique de novo (no Shutterstock, \"Baixar novamente\"). Nada foi movido.");
      sair(2);
    }
    const doItem = (nome) => plataforma !== "shutterstock" || idShutterstockNoNome(nome) === idItem;
    if (aArg) {
      const alvo = resolve(dl.pasta, aArg);
      const rel = relative(dl.pasta, alvo);
      if (rel.startsWith("..") || isAbsolute(rel) || rel.includes("\\") || rel.includes("/")) {
        erro(`x --arquivo tem de ser um arquivo da pasta de downloads (${dl.pasta}); veio ${aArg}. Nada foi movido.`); sair(2);
      }
      if (antes[rel]) {
        erro(`x ${rel} ja estava na pasta de downloads no 'marcar' — nao e o download deste clique. Nada foi movido.`); sair(3);
      }
      if (!doItem(rel)) {
        erro(`x ${rel} nao e o arquivo do item ${idItem}: o Shutterstock entrega shutterstock_${idItem}.<ext> para essa URL. Nada foi movido.`); sair(3);
      }
      nomeBaixado = rel;
    }

    // Espera: o arquivo pronto (sem .crdownload), estável em dois olhares seguidos.
    const limite = agora() + esperaS * 1000;
    let ultimo = null, ultimaNovidade = { prontos: [], andamento: [] };
    for (;;) {
      const foto = fotografar(dl.pasta);
      let candidato = null;
      if (nomeBaixado) {
        const emCurso = Object.keys(foto).some((n) => n.startsWith(`${nomeBaixado}.`) && EM_ANDAMENTO.test(n));
        if (foto[nomeBaixado] && !emCurso && !EM_ANDAMENTO.test(nomeBaixado)) candidato = nomeBaixado;
        ultimaNovidade = { prontos: foto[nomeBaixado] ? [nomeBaixado] : [], andamento: emCurso ? [nomeBaixado] : [] };
      } else {
        const nov = novidades(antes, foto, { desdeMs });
        // No Shutterstock, o que chegou mas não traz o id da --url é de OUTRO item (ou do dono): fica de fora.
        ultimaNovidade = { ...nov, prontos: nov.prontos.filter(doItem), alheios: nov.prontos.filter((n) => !doItem(n)) };
        if (ultimaNovidade.prontos.length > 1 && !ultimaNovidade.andamento.length) {
          erro(`x chegaram ${ultimaNovidade.prontos.length} arquivos novos desde o 'marcar': ${ultimaNovidade.prontos.join(" · ")}`);
          erro("  Nao sei qual e o deste item. Diga com --arquivo=<nome>. Nada foi movido.");
          sair(3);
        }
        if (ultimaNovidade.prontos.length === 1 && !ultimaNovidade.andamento.length) candidato = ultimaNovidade.prontos[0];
      }
      if (candidato && criadoAntes(foto[candidato], desdeMs)) {
        erro(`x ${candidato} foi criado ANTES do 'marcar' (um download comecado antes, ou um arquivo renomeado) — nao e deste clique. Nada foi movido.`);
        sair(3);
      }
      if (candidato) {
        const s = foto[candidato];
        if (ultimo && ultimo.nome === candidato && ultimo.tam === s.tam && ultimo.mtime === s.mtime && s.tam > 0) { nomeBaixado = candidato; break; }
        ultimo = { nome: candidato, ...s };
      } else ultimo = null;
      if (agora() >= limite) {
        if (ultimo) erro(`x ${ultimo.nome} chegou mas ainda estava mudando de tamanho depois de ${esperaS} s. Rode 'recolher' de novo em instantes (--espera=<s> para esperar mais).`);
        else if (ultimaNovidade.andamento.length) erro(`x o download ainda esta em andamento depois de ${esperaS} s: ${ultimaNovidade.andamento.join(" · ")}. Rode 'recolher' de novo quando o Chrome terminar (--espera=<s> para esperar mais).`);
        else if (ultimaNovidade.alheios?.length) {
          erro(`x chegou ${ultimaNovidade.alheios.join(" · ")}, mas NAO e o item ${idItem}: o Shutterstock entrega shutterstock_${idItem}.<ext> para essa URL.`);
          erro("  Esse arquivo e de outro item (ou do dono) e ficou onde estava. Confira na barra de downloads do Chrome se o clique deste item baixou. Nada foi movido.");
          sair(3);
        } else if (ultimaNovidade.antigos?.length) {
          erro(`x chegou ${ultimaNovidade.antigos.join(" · ")}, mas foi criado ANTES do 'marcar' (um download comecado antes, ou um arquivo renomeado) — nao e deste clique.`);
          erro("  Ficou onde estava. Confira na barra de downloads do Chrome se o clique deste item baixou. Nada foi movido.");
          sair(3);
        } else erro(`x nenhum arquivo novo chegou em ${dl.pasta} em ${esperaS} s. O clique no Chrome baixou mesmo? Veja a barra de downloads do Chrome.`);
        sair(6);
      }
      await dormir(passoMs);
    }
    const orig = join(dl.pasta, nomeBaixado);
    let statOrig = null;
    try { statOrig = fotografar(dl.pasta)[nomeBaixado] || null; } catch { /* sem data: a linha sai sem ela */ }

    // O que É o arquivo — pelo conteúdo, não pelo nome (o Motion Array entrega "download" sem
    // extensão: top10-estudio/scripts/stock/baixar.mjs:797-799).
    const fmt = formatoDoArquivo(lerComeco(orig), formatoPorConteudo);
    const extOrig = extname(nomeBaixado).toLowerCase();
    let ext = null, categoria = null;
    if (fmt?.naoSuportado) { erro(`x ${nomeBaixado}: ${fmt.naoSuportado}. Ficou em ${dl.pasta}; nada foi movido.`); sair(8); }
    if (fmt) { categoria = fmt.categoria; ext = (EXT_VIDEO.test(extOrig) && categoria === "video") || (EXT_FOTO.test(extOrig) && categoria === "foto") || (EXT_AUDIO.test(extOrig) && categoria === "audio") ? extOrig : fmt.ext; }
    else if (EXT_AUDIO.test(extOrig)) { categoria = "audio"; ext = extOrig; }
    else {
      const comeco = String.fromCharCode(...lerComeco(orig, 80)).replace(/[^\x20-\x7e]/g, ".").trim();
      erro(`x ${nomeBaixado} nao e midia que eu reconheca (comeca com "${comeco.slice(0, 60)}"). Se for uma pagina de erro ou de login salva, a sessao caiu ou o site barrou.`);
      erro(`  Ficou em ${dl.pasta}; nada foi movido nem contado.`);
      sair(8);
    }
    const tipo = tipoPedido || (categoria === "pacote" ? null : categoria);

    // O Shutterstock conta ASSIM que o arquivo é reconhecido: o download já gastou um do dia, e isso
    // não desfaz mesmo que a régua o recuse depois (Delta 22 do tecnico-stock: "o download FOI gasto").
    let tetoInfo = null;
    if (plataforma === "shutterstock") {
      try { tetoInfo = teto.registrar(raiz, 1, { agora: agora(), home, config: cfgTeto, via: "chrome", url, canal: canalSlug(raiz) }); }
      catch (e) { erro(`  ! o download NAO foi contado no teto do Shutterstock (${String(e.message).split("\n")[0]}) — acerte com: registrar-download.mjs teto --acertar=<usados hoje>`); }
    }

    // Para a cena: out/<proj>/_media/_caca/<cena>/<plataforma>/<nome seguro>.
    const cenaSegura = nomeSeguro(cena, { max: 60, reserva: "cena" });
    const cacaDir = join(projDir, "_media", "_caca", cenaSegura, plataforma);
    mkdirSync(cacaDir, { recursive: true });
    const base = nomeSeguro(basename(nomeBaixado, extOrig) || `${plataforma}-download`, { max: 80, reserva: `${plataforma}-download` });
    let nomeFinal = nomeLivre(cacaDir, base, ext);
    let destino = join(cacaDir, nomeFinal);
    try { mover(orig, destino, renomearComRetentativa); }
    catch (e) { erro(`x nao consegui mover ${orig} para ${relPosix(raiz, destino)}: ${e.code || e.message}. O arquivo continua em ${dl.pasta}.`); sair(11); }
    try { rmSync(marcaArq, { force: true }); } catch { /* o retrato velho só atrapalharia o próximo */ }

    // Medir. Sem ffprobe o vídeo fica sem medida — e sem medida não se acusa (oferta.mjs, estúdio);
    // o _instalar-lote mede de novo antes de pôr na cena.
    let medida = { bytes: statSync(destino).size, sha256: null, resolucao: null, codec: null };
    try { medida = { ...medida, ...(await medirArq(destino)) }; }
    catch (e) { log(`  ! nao medi o arquivo (${String(e.message).split("\n")[0]}); sigo sem medida.`); }
    if (!medida.sha256) { try { medida.sha256 = await sha256Arquivo(destino); } catch { /* sem hash */ } }

    // A régua da casa: 4K sempre, landscape sempre (top10-estudio/scripts/stock/oferta.mjs, julgarOferta).
    let rejeitado = null;
    const m = String(medida.resolucao || "").match(/^(\d+)x(\d+)$/);
    if (m && (tipo === "video" || tipo === "foto")) {
      const w = Number(m[1]), h = Number(m[2]);
      if (h > w && !flag("vertical")) rejeitado = "vertical";
      else if (Math.max(w, h) < LADO_4K && !flag("aceitar-abaixo-de-4k")) rejeitado = "abaixo-de-4k";
    }
    // O REJEITADO NÃO PODE VIRAR INSTALÁVEL (revisão v1, 23/09/2026). O _instalar-lote procura a linha
    // do manifest ao lado do arquivo e UMA PASTA ACIMA, por sha256 e, na falta, pelo NOME — e não olha o
    // campo `rejeitado`. Com a linha do rejeitado no manifest.jsonl da plataforma, um
    // `_instalar-lote ... _rejeitado-vertical/x.mp4` achava a linha e punha o clipe em retrato na cena
    // com a procedência completa. Por isso: (1) a linha do rejeitado vai para `_REJEITADOS.jsonl`
    // DENTRO de _rejeitado-*/, que nenhum instalador lê como manifest; (2) o nome ganha o prefixo
    // REJEITADO-<motivo>-, para não casar pelo NOME com a linha de um arquivo aceito depois com o mesmo
    // nome de download. Auditável do mesmo jeito: arquivo e linha ficam lado a lado, nunca apagados.
    let manifestoDaLinha = join(cacaDir, "manifest.jsonl");
    if (rejeitado) {
      const pasta = join(cacaDir, `_rejeitado-${rejeitado}`);
      mkdirSync(pasta, { recursive: true });
      const n = nomeLivre(pasta, `REJEITADO-${rejeitado}-${basename(nomeFinal, ext)}`, ext);
      renomearComRetentativa(destino, join(pasta, n));
      destino = join(pasta, n); nomeFinal = n;
      manifestoDaLinha = join(pasta, REJEITADOS);
    }

    const conta = plataforma === "shutterstock" && cfgTeto ? `${cfgCaca.contas.shutterstock} (${cfgTeto.conta})` : cfgCaca.contas[plataforma];
    const linha = {
      ts: new Date(agora()).toISOString(), plataforma, via: "chrome", evento: "download", conta,
      tipo, busca, cena: cenaSegura, arquivo: relPosix(projDir, destino), arquivo_baixado: nomeBaixado,
      url, id_na_fonte: idDaUrl(plataforma, url),
      ...(idItem ? { id_conferido_no_nome: true } : {}),
      ...(Number.isFinite(statOrig?.criado) ? { criado_em: new Date(statOrig.criado).toISOString() } : {}),
      ...(desdeMs ? { marcado_em: new Date(desdeMs).toISOString() } : {}),
      medido: { resolucao: medida.resolucao ?? null, codec: medida.codec ?? null, bytes: medida.bytes ?? null, sha256: medida.sha256 ?? null },
      ...(rejeitado ? { rejeitado } : {}),
      ...(!rejeitado && m && Math.max(Number(m[1]), Number(m[2])) < LADO_4K ? { abaixo_de_4k: true } : {}),
    };
    try { appendFileSync(manifestoDaLinha, `${JSON.stringify(linha)}\n`); }
    catch (e) { erro(`  ! a linha do ${basename(manifestoDaLinha)} NAO gravou (${e.code || e.message}): o arquivo esta em ${relPosix(raiz, destino)}, sem prova de origem.`); }

    const resumoTeto = tetoInfo ? `  ${teto.descrever(tetoInfo)}` : null;
    if (rejeitado) {
      erro(`x FORA DA REGUA (${rejeitado === "vertical" ? "retrato" : "abaixo de 4K"}: ${medida.resolucao}) — o canal e 4K landscape.`);
      erro(`  Guardado em ${relPosix(raiz, destino)} (auditavel, nunca apagado).${plataforma === "shutterstock" ? " O download CONTOU no dia do Shutterstock." : ""}`);
      erro(`  Avalie melhor pelo preview antes do proximo clique.${rejeitado === "vertical" ? " Vertical de proposito: --vertical." : " Abaixo de 4K de proposito: --aceitar-abaixo-de-4k."}`);
      if (resumoTeto) erro(resumoTeto);
      return 7;
    }

    // A procedência no formato do canal (lib/instalacao-procedencia.mjs), na pasta da plataforma.
    const decl = declaracaoDeInstalacao({ plat: plataforma, reg: linha });
    if (!decl.ok) { erro(`x ${decl.motivo}`); sair(12); }
    const tipoTxt = tipo === "foto" ? "photo" : tipo === "audio" ? "audio" : tipo === "video" ? "video" : "pacote";
    const item = {
      arquivo: nomeFinal, ...decl.campos,
      fonte: `${NOME_BONITO[plataforma]} — stock ${tipoTxt} (assinatura, conta: ${conta})`,
      conta, ...(linha.id_na_fonte ? { id_fornecedor: linha.id_na_fonte } : {}),
      busca, cena: cenaSegura, arquivo_original: nomeBaixado, resolucao: medida.resolucao ?? null,
      baixado_em: linha.ts, medido: linha.medido,
      declarado_por: { quem: "registrar-download.mjs", manifesto: relPosix(projDir, join(cacaDir, "manifest.jsonl")) },
    };
    let rDecl;
    try { rDecl = declarar(cacaDir, item, { lerProcedencia, renomearComRetentativa, comTrava, quem: "registrar_download" }); }
    catch (e) { rDecl = { ok: false, porque: String(e.message).split("\n")[0] }; }
    if (!rDecl.ok) {
      erro(`x o arquivo esta em ${relPosix(raiz, destino)} com a linha no manifest.jsonl, mas o _PROCEDENCIA.json NAO gravou: ${rDecl.porque}`);
      if (resumoTeto) erro(resumoTeto);
      return 12;
    }

    log(`  ok ${relPosix(raiz, destino)} (${medida.resolucao || "sem medida"}, ${((medida.bytes || 0) / 1048576).toFixed(1)} MB) — ${NOME_BONITO[plataforma]}, ${url}`);
    log(`  procedencia: ${relPosix(raiz, join(cacaDir, "_PROCEDENCIA.json"))} e manifest.jsonl`);
    if (resumoTeto) log(resumoTeto);
    if (categoria === "pacote") log(`  ! veio um .zip: extraia o arquivo de midia e recolha-o de novo (--arquivo=<nome>) — o zip nao entra em cena.`);

    const nomeInst = opt("instalar");
    if (tipo === "video") {
      log(`  proximo passo (o arquivo ainda e RASCUNHO; so conta para a producao depois de instalado):`);
      log(`    node scripts/stock/_instalar-lote.mjs ${proj} ${cenaSegura} "${relPosix(raiz, destino)}" ${nomeInst ? nomeSeguro(nomeInst, { max: 80, reserva: "footage" }) : "<nome-final>"}`);
      return 0;
    }
    if (nomeInst && (tipo === "foto" || tipo === "audio")) return await instalar({ arq: destino, cena, nome: nomeInst, linha });
    if (tipo === "foto" || tipo === "audio") {
      log(`  proximo passo: node scripts/stock/registrar-download.mjs instalar --proj=${proj} --cena=${cenaSegura} --arquivo="${relPosix(raiz, destino)}" --nome=<nome-final>`);
    }
    return 0;
  } catch (e) {
    if (e instanceof Saida) return e.codigo;
    throw e;
  }
}

/** Texto de arquivo nosso que pode ter passado por um editor do Windows (BOM). */
function readFileSyncTexto(caminho) {
  return readFileSync(caminho, "utf8").replace(/^\uFEFF/, "");
}

/** O slug do canal, para o registro do teto (qual canal gastou). null se ilegível. */
function canalSlug(raiz) {
  try { return tetoPadrao.lerJsonDoCanal(join(raiz, "canal.json"), "canal.json")?.slug || null; } catch { return null; }
}

/** A linha do manifest.jsonl que descreve `nome` (a última). */
export function acharLinhaDoArquivo(manifesto, nome) {
  if (!existsSync(manifesto)) return { reg: null };
  let reg = null;
  for (const l of readFileSyncTexto(manifesto).split(/\r?\n/)) {
    if (!l.trim()) continue;
    try { const j = JSON.parse(l); if (j?.arquivo && basename(String(j.arquivo).replace(/\\/g, "/")) === nome && !j.rejeitado) reg = j; } catch { /* linha alheia ilegível: não é desta */ }
  }
  return { reg };
}

/** rename; se a pasta Downloads está noutro disco (EXDEV), copia, confere o tamanho e apaga a origem. */
export function mover(de, para, renomear) {
  if (existsSync(para)) throw Object.assign(new Error(`ja existe ${para}`), { code: "JA_EXISTE" });
  try { renomear(de, para); return; }
  catch (e) { if (e?.code !== "EXDEV") throw e; }
  copyFileSync(de, para);
  if (statSync(de).size !== statSync(para).size) { rmSync(para, { force: true }); throw Object.assign(new Error("a copia saiu de tamanho diferente"), { code: "COPIA_INCOMPLETA" }); }
  for (let i = 1; ; i++) {
    try { unlinkSync(de); return; }
    catch (e) { if (!["EPERM", "EBUSY", "EACCES"].includes(e?.code) || i >= 5) throw e; }
  }
}

/** Para o bin/regie do motor e para quem importa: o mesmo principal. */
export const cli = (argv) => principal(argv);

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
