// ── NOVO na Régie (não é porte) ──────────────────────────────────────────────────────────────
// O que é: o pedágio do Windows nativo para os scripts de mídia do canal, num lugar só.
// Por que existe: os scripts do estúdio (commit 4afda12) chamavam ffmpeg/ffprobe/curl pelo nome,
// gravavam em /tmp e carimbavam rótulo com a fonte em /usr/share/fonts/... — nada disso existe num
// Windows novo. Em vez de repetir o conserto em nove arquivos (e ver as nove cópias divergirem), os
// scripts de scripts/stock/ e o normalizar-footage importam daqui.
// Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
//
// O que cada função resolve:
//   · executavelFf — onde está o ffmpeg/ffprobe. É a régua do MOTOR (src/midia/arquivos.mjs,
//     executavel), importada: FFMPEG_PATH/FFPROBE_PATH (canônicas), REGIE_FFMPEG/REGIE_FFPROBE
//     (sinônimos), o ffprobe AO LADO do ffmpeg apontado, e por fim o PATH. O winget instala o ffmpeg e
//     o PATH novo só vale em terminal NOVO — por isso o caminho explícito existe;
//   · rodarSync — execFileSync com ARRAY (nunca shell) e windowsHide; ENOENT vira erro que ensina a
//     instalar, e não "o vídeo não tem duração";
//   · fonteDoRotulo + opcaoFontfile — o drawtext precisa de um arquivo de fonte, e no Windows o
//     caminho tem "C:" — dois-pontos é o separador de opção do filtro. Sem escapar, o ffmpeg lê
//     "fontfile=C" e reclama de uma opção "/Windows/Fonts/arialbd.ttf" que não existe;
//   · textoDoRotulo — o texto carimbado não pode ter aspas, dois-pontos, contrabarra nem %;
//   · ehPrincipal — o `import.meta.url === "file://" + process.argv[1]` do estúdio nunca é
//     verdadeiro no Windows (contrabarra, letra de unidade, espaço codificado). A régua é a do MOTOR
//     (src/midia/arquivos.mjs, ehPrincipal: realpath dos dois lados, sem caixa no Windows), importada —
//     a cópia que morava aqui comparava URL e saía 0 sem fazer nada quando o script era chamado por
//     link simbólico ou junção (achado da revisão v1, 23/09/2026).
//
// ffmpeg/ffprobe — UMA regra para o canal e para o motor (decisão I2 da integração v1). Esta lib tinha
// a SUA cópia da precedência (FFMPEG_PATH primeiro) enquanto o motor lia só REGIE_*: o medir() do
// motor procurava "ffprobe" no PATH e falhava DEPOIS de o clipe já estar na pasta da cena (provado na
// revisão v1 no _instalar-lote). Agora a precedência e o erro que ensina são os do motor, importados.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, win32, posix } from "node:path";
import { importarDoMotor } from "../../lib/motor.mjs";

// [I2][I6] a régua do executável, o erro que ensina e o "fui chamado direto?" são os do motor —
// importados, nunca copiados (uma cópia diverge exatamente no dia em que a regra muda).
const motorArquivos = await importarDoMotor("src/midia/arquivos.mjs");

/** O executável do ffmpeg ou do ffprobe — a régua do motor (ver o cabeçalho). */
export const executavelFf = (nome, env = process.env, existe = existsSync) => motorArquivos.executavel(nome, env, existe);

/** Erro que ensina a instalar — o do motor. ASCII: vai direto para o console do dono (PowerShell 5.1). */
export const erroSemFerramenta = (nome, paraQue) => motorArquivos.erroFerramentaAusente(nome, paraQue);

/**
 * [I2] O ffprobe EXISTE (responde a -version) mas não mediu arquivo nenhum: build quebrado, caminho que
 * aponta para outro programa, DLL faltando. Sem esta mensagem, cada arquivo sai "? nao leu" e o laudo
 * parece falar do VÍDEO, quando o defeito é do programa.
 */
export function erroFerramentaNaoMede(nome, quantos, exemplo) {
  const N = nome.toUpperCase();
  return Object.assign(new Error(
    `o ${nome} desta maquina (${executavelFf(nome)}) responde, mas nao mediu NENHUM dos ${quantos} arquivo(s)` +
    `${exemplo ? ` (ex.: ${exemplo})` : ""}.\n` +
    "  O defeito provavel e do PROGRAMA, nao dos videos: build incompleto, caminho apontando para outro\n" +
    `  executavel, ou arquivo bloqueado. Confira com:  ${nome} -v error -show_streams <um video>\n` +
    `  e, se preciso, reinstale (winget install Gyan.FFmpeg) ou aponte outro em ${N}_PATH.`),
  { code: "FERRAMENTA_NAO_MEDE", ferramenta: nome });
}

/** Executável que não é ffmpeg/ffprobe (o Chrome do _svg-para-png): a mensagem é dele, não do ffmpeg. */
function erroExecutavelAusente(exe) {
  return Object.assign(new Error(
    `nao achei o programa ${exe}.\n` +
    "  Se e o navegador: instale o Google Chrome (ou o Edge) ou aponte o caminho completo em CHROME_PATH."),
  { code: "FERRAMENTA_AUSENTE", ferramenta: exe });
}

/**
 * execFileSync com array de argumentos. `nome` é "ffmpeg"/"ffprobe" (resolvidos por executavelFf) ou
 * um caminho de executável qualquer (o Chrome do _svg-para-png).
 */
export function rodarSync(nome, args, { encoding = "utf8", timeoutMs = 0, maxBuffer = 1 << 26, stdio = "pipe", env = process.env, paraQue = null } = {}) {
  const exe = ["ffmpeg", "ffprobe"].includes(nome) ? executavelFf(nome, env) : nome;
  try {
    return execFileSync(exe, args, { encoding, timeout: timeoutMs || undefined, maxBuffer, stdio, windowsHide: true, env });
  } catch (e) {
    if (e?.code === "ENOENT") throw exe === nome && !["ffmpeg", "ffprobe"].includes(nome) ? erroExecutavelAusente(nome) : erroSemFerramenta(nome, paraQue);
    throw e;
  }
}

/** A ferramenta responde a -version? */
export function temFerramentaSync(nome, env = process.env) {
  try { rodarSync(nome, ["-version"], { timeoutMs: 15_000, env }); return true; } catch { return false; }
}

/**
 * O arquivo de fonte para o rótulo carimbado nas folhas de conferência. REGIE_FONTE_ROTULO vence;
 * depois as negritas que cada sistema traz de fábrica. null = sem fonte (o drawtext do ffmpeg tenta
 * o fontconfig, que no Windows costuma não existir — quem chama decide se segue sem rótulo).
 */
export function candidatosDeFonte(env = process.env, plataforma = process.platform) {
  const lista = [];
  if (env.REGIE_FONTE_ROTULO) lista.push(env.REGIE_FONTE_ROTULO);
  if (plataforma === "win32") {
    const fontes = win32.join(env.WINDIR || env.windir || env.SystemRoot || "C:\\Windows", "Fonts");
    for (const f of ["arialbd.ttf", "segoeuib.ttf", "arial.ttf", "segoeui.ttf"]) lista.push(win32.join(fontes, f));
  } else if (plataforma === "darwin") {
    lista.push("/System/Library/Fonts/Supplemental/Arial Bold.ttf", "/Library/Fonts/Arial Bold.ttf", "/System/Library/Fonts/Helvetica.ttc");
  } else {
    lista.push("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
      "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf", "/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf");
  }
  return lista;
}

export function fonteDoRotulo({ env = process.env, plataforma = process.platform, existe = existsSync } = {}) {
  return candidatosDeFonte(env, plataforma).find((c) => { try { return existe(c); } catch { return false; } }) ?? null;
}

/**
 * `fontfile='<caminho>':` pronto para entrar num drawtext, ou "" sem fonte.
 *
 * Dois níveis de escape, e os dois importam: as aspas simples fazem o NÍVEL DO FILTERGRAPH passar o
 * texto literal (vírgula, colchete e espaço de "C:\Users\Lucas Rosa" não quebram a cadeia); dentro
 * delas, o dois-pontos ainda precisa de `\:` porque o NÍVEL DA OPÇÃO do drawtext usa ":" como
 * separador. Contrabarra vira barra normal (o ffmpeg do Windows aceita as duas, e a barra não é
 * caractere de escape em nível nenhum).
 */
export function opcaoFontfile(caminho) {
  if (!caminho) return "";
  const p = String(caminho).replace(/\\/g, "/").replace(/'/g, "").replace(/:/g, "\\:");
  return `fontfile='${p}':`;
}

/**
 * Este ffmpeg tem o filtro? Medido em 23/09/2026: o build estático 7.0.2 de johnvansickle.com NÃO
 * traz o drawtext (sem libfreetype) — "No such filter: 'drawtext'" derrubava a folha inteira. O build
 * do BtbN (N-122997, medido no mesmo dia) traz; o do winget (Gyan) NÃO foi medido aqui. Em cache por
 * executável.
 */
const cacheFiltros = new Map();
export function temFiltroSync(filtro, env = process.env) {
  const exe = executavelFf("ffmpeg", env);
  if (!cacheFiltros.has(exe)) {
    let lista = "";
    try { lista = rodarSync("ffmpeg", ["-hide_banner", "-filters"], { timeoutMs: 15_000, env }); } catch { /* sem ffmpeg: quem roda o filtro vai dizer */ }
    cacheFiltros.set(exe, lista);
  }
  return new RegExp(`^\\s*\\S+\\s+${filtro}\\s`, "m").test(cacheFiltros.get(exe));
}

/**
 * A fonte para o rótulo das folhas de conferência, ou null — e o PORQUÊ vai para `log`. Sem rótulo a
 * folha ainda serve para OLHAR; o que não pode é a folha inteira morrer por causa do carimbo.
 */
export function fonteParaRotulo({ env = process.env, log = console.log } = {}) {
  if (!temFiltroSync("drawtext", env)) {
    log("  aviso: este ffmpeg nao tem o filtro drawtext (build sem libfreetype): a folha sai SEM o nome carimbado.\n  Para o rotulo, use um ffmpeg com libfreetype (ffmpeg -filters deve listar drawtext).");
    return null;
  }
  const f = fonteDoRotulo({ env });
  if (!f) log("  aviso: nao achei fonte para o rotulo (defina REGIE_FONTE_ROTULO); a folha sai SEM o nome carimbado.");
  return f;
}

/** Texto seguro para `text='...'` do drawtext: sem aspa, dois-pontos, contrabarra nem % (expansão). */
export function textoDoRotulo(s, max = 58) {
  return String(s ?? "").replace(/['":\\%]/g, " ").replace(/[\r\n]+/g, " ").slice(0, max);
}

/** Pasta temporária do SISTEMA (o /tmp do estúdio não existe no Windows). */
export function pastaTemporaria(prefixo = "regie-") {
  return mkdtempSync(join(tmpdir(), prefixo));
}

/**
 * Este módulo é o script que o node recebeu? [I6] A régua do motor (src/midia/arquivos.mjs:123-129):
 * realpath dos dois lados e, no Windows, sem caixa — chamada por link simbólico, junção (mklink /J)
 * ou "c:\" minúsculo casa. Por URL, a CLI chamada por um link saía 0 sem fazer nada.
 */
export const ehPrincipal = (urlDoModulo, argv1 = process.argv[1]) => motorArquivos.ehPrincipal(urlDoModulo, argv1);

/**
 * `--k=v` do jeito do estúdio, mas sem cortar o valor no segundo "=" (o `a.split("=")[1]` do estúdio
 * transformava --nota="a=b" em "a").
 */
export function opcao(argv, k, padrao) {
  const a = argv.find((s) => s.startsWith(`--${k}=`));
  return a ? a.slice(k.length + 3) : padrao;
}

/** Os argumentos que não são flag. */
export const posicionais = (argv) => argv.filter((a) => !a.startsWith("--"));

/** Caminho com barra normal, para mensagem e JSON (o `\` do Windows não serve a HTML nem a git). */
export const barraNormal = (p) => String(p).split(win32.sep).join(posix.sep);
