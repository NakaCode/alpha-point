// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/chrome.mjs (linhas 1-33, commit 4afda12), com as flags de
// top10-estudio/render/capturar.mjs (linhas 45-141, mesmo commit).
// O que mudou: a lista de caminhos do Mac/Linux saiu — quem acha o Chrome (ou o Edge) no Windows é
// o motor, src/lib/chrome.mjs, importado sem cópia; e o lançamento do playwright-core passou a
// morar AQUI, num lugar só, com as flags que o estúdio aprendeu (GPU ligada, rasterização inteira,
// leitura de arquivo local). Nunca baixa navegador: usa o instalado.
// Na integração da v1: as flags são as do render do motor (src/lib/chrome.mjs › FLAGS_BASE), importadas; as daqui ficam de reserva sem motor.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core
// (^1.60.0), carregado sob demanda — ausente vira NÃO MEDIDO, nunca reprovação.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// scripts/lib/chrome.mjs — onde está o Chrome, nesta máquina, e como abri-lo para medir uma cena.
//
// ⚠️ POR QUE (27/jul/2026): seis scripts tinham o caminho do macOS CRAVADO
// (`/Applications/Google Chrome.app/…`), com `process.env.CHROME_PATH` só como override. No Mac
// funcionava; na VM Linux — que é onde a produção 24/7 roda — todo `shot.mjs` falhava, e a falha
// aparecia lá na frente, como cena não validada. Um editor-de-arte descobriu sozinho e deixou a nota
// no log: *"neste VM Linux o shot.mjs precisa de CHROME_PATH=/usr/bin/google-chrome (o default
// aponta pro caminho macOS)"*. Ele contornou; o próximo agente teria de descobrir de novo.
//
// Conserto que não depende de ninguém lembrar: o caminho é DESCOBERTO, e `CHROME_PATH` continua
// mandando quando existe.
//
// [porte Régie] Na Régie a descoberta já existe no motor (src/lib/chrome.mjs: Chrome em Arquivos de
// Programas e em %LOCALAPPDATA%, e o Edge de reserva, que todo Windows 11 traz). Copiar aquela lista
// para cá criaria um GÊMEO; o canal importa a do motor por scripts/lib/motor.mjs.
import { existsSync } from "node:fs";
import { importarDoMotor } from "./motor.mjs";
import { importarDependencia } from "./nao-medido.mjs";

/**
 * ⚠️ RASTERIZAÇÃO PARCIAL — a causa dos PEDAÇOS FALTANDO (render/capturar.mjs, 30/jul/2026).
 *
 * Por economia, o Chrome só re-rasteriza as regiões que considera "sujas" entre um quadro e outro.
 * Numa cena 4K com `clipPath` SVG grande e gradiente radial ele erra a conta, e o que não foi
 * redesenhado sai como o fundo — o corte é RETO porque é a borda do tile que não foi pintado.
 * [porte Régie] No estúdio só o render usava estas três; aqui os portões usam as mesmas, para que o
 * quadro que o agente OLHA (shot.mjs) seja desenhado como o render desenha.
 */
export const ARGS_RASTER = ["--disable-partial-raster", "--disable-checker-imaging", "--disable-new-content-rendering-timeout"];

/**
 * [porte Régie] A cena do canal liga `../../../marca/tokens.css`, e a fonte da marca vem por
 * `@font-face url("fontes/…")`. Para o Chrome, cada arquivo local é uma origem à parte: sem esta
 * flag a fonte é recusada SEM ERRO e a cena é medida na fonte reserva — o portão de tamanho e o de
 * til mediriam outra tipografia. O render do motor (src/lib/chrome.mjs) passa a mesma flag.
 */
export const ARGS_ARQUIVO = ["--allow-file-access-from-files"];

/**
 * ⚠️⚠️ GPU LIGADA POR PADRÃO — A REGRA SE INVERTEU EM 30/jul/2026 (render/capturar.mjs:45-83).
 *
 * O remédio de 07/jul (`--disable-gpu`) virou a doença: a rasterização por SOFTWARE cortava o
 * planeta do `planetas-algodao-doce` por linha reta, determinístico, em duas máquinas batendo em
 * quatro casas decimais (13,35% × 13,34% de divergência; 0,31% com GPU ligada). A pista que decidiu:
 * `shot.mjs` abria o Chrome SEM argumento nenhum e produzia o frame certo.
 *
 * `REGIE_GPU=0` força software, para o A/B de uma cena específica — a chave de bancada que permitiu
 * descobrir isto. [porte Régie] No estúdio ela se chamava RENDER_GPU e também ligava Vulkan quando
 * havia NVIDIA (`nvidia-smi` via shell, na VM Linux). No Windows o Chrome já usa a placa pelo
 * Direct3D sem flag nenhuma, então essa metade saiu.
 */
export function argsGpu(env = process.env) {
  return env.REGIE_GPU === "0" ? ["--disable-gpu"] : [];
}

/**
 * [porte Régie] AS FLAGS SÃO AS DO RENDER DO MOTOR (src/lib/chrome.mjs › FLAGS_BASE), importadas, não
 * copiadas: o quadro que o portão mede tem de ser desenhado como o render desenha, e uma lista aqui e
 * outra lá divergem no primeiro conserto. Saem só as que brigam com o playwright-core, que abre o
 * navegador do jeito dele: `--headless` (ele passa o modo) e `--remote-debugging-port` (ele fala por
 * pipe; duas portas de depuração derrubam a conexão).
 * ARGS_ARQUIVO + ARGS_RASTER acima ficam como RESERVA para quando o motor não abre, e o teste confere
 * que a reserva está contida no FLAGS_BASE do motor.
 */
export function flagsDoMotorParaPlaywright(flagsBase) {
  return flagsBase.filter((f) => !/^--headless\b/.test(f) && !/^--remote-debugging-/.test(f));
}
async function argsDaCasa() {
  try {
    const { FLAGS_BASE } = await importarDoMotor("src/lib/chrome.mjs");
    if (Array.isArray(FLAGS_BASE) && FLAGS_BASE.length) return flagsDoMotorParaPlaywright(FLAGS_BASE);
  } catch { /* sem motor: a reserva abaixo, e o lançamento segue (o CHROME_PATH pode apontar o navegador) */ }
  return [...ARGS_ARQUIVO, ...ARGS_RASTER];
}

function semChrome(mensagem) {
  const err = new Error(mensagem);
  err.code = "SEM_CHROME";
  return err;
}

/**
 * O executável do Chrome (ou do Edge) desta máquina.
 * Ordem: `CHROME_PATH` (se definido, TEM de existir — override quebrado não cai calado noutro
 * navegador) → a descoberta do motor. Lança erro com código SEM_CHROME e a lista de onde procurou.
 */
export async function caminhoDoChrome(env = process.env) {
  if (env.CHROME_PATH) {
    if (existsSync(env.CHROME_PATH)) return env.CHROME_PATH;
    throw semChrome(
      `CHROME_PATH aponta para ${env.CHROME_PATH}, e esse arquivo não existe.\n` +
        "  Conserto: corrija o caminho, ou apague a variável para eu procurar o Chrome/Edge instalado."
    );
  }
  let motor;
  try {
    motor = await importarDoMotor("src/lib/chrome.mjs");
  } catch (e) {
    throw semChrome(`${e.message}\n  (Sem o motor, aponte o executável do Chrome ou do Edge na variável CHROME_PATH.)`);
  }
  const achado = motor.acharChrome({ env });
  if (!achado) throw semChrome(motor.semChromeMensagem(env));
  return achado;
}

/**
 * Abre o Chrome instalado pelo playwright-core, com as flags da casa. Todo portão que mede cena
 * no navegador passa por aqui — é o "um lugar só" que faltava no estúdio, onde cada gate montava
 * o seu `chromium.launch` e seis deles ficaram com o caminho do Mac cravado.
 *
 * @param {object} [o]
 * @param {string[]} [o.args]          flags extras do gate (somadas às da casa)
 * @param {boolean} [o.chromiumSandbox] padrão true, como os gates do estúdio
 */
export async function lancarChrome({ args = [], headless = true, chromiumSandbox = true } = {}) {
  const pw = await importarDependencia("playwright-core");
  const chromium = pw.chromium ?? pw.default?.chromium;
  const executablePath = await caminhoDoChrome();
  return chromium.launch({
    executablePath,
    headless,
    chromiumSandbox,
    args: [...(await argsDaCasa()), ...argsGpu(), ...args],
  });
}
