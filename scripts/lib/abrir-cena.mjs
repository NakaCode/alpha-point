// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/abrir-cena.mjs (linhas 1-169, commit 4afda12).
// O que mudou: nada no código — só este cabeçalho. `pathToFileURL(resolve(…))` já monta a URL
// certa com C:\, espaço e acento. Os tetos (8 s de mapa, 30 s de load) são os do estúdio.
// Na integração da v1: palcoDaCena() — a cena é 4K pela régua do render do motor.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma (recebe a
// página do playwright-core pronta).
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * ABRIR UMA CENA PARA MEDIR — o caminho ÚNICO que todo gate determinístico usa para pôr uma cena
 * de pé antes de tirar qualquer medida dela.
 *
 * ───────────────────────────────────────────────────────────────────────────────────────────────
 * POR QUE ISTO EXISTE
 *
 * Cena de MAPA nunca chega a `load`. O palco do mapista fica puxando tile do MapTiler e terreno
 * DEM enquanto a página viver, então o `waitUntil: "load"` que o Playwright usa por padrão espera
 * uma condição que não chega — estoura o timeout e o gate devolve `⚠ NÃO MEDIDO`, que no portão
 * pesa o mesmo que uma falha e NÃO libera render.
 *
 * A onda 2 de 11/set/2026 curou isso nos dois gates que gritaram (`qc-tamanho`, `qc-carga`)
 * tratando o timeout como condição registrada em vez de veredito. **Funcionou e continua valendo**
 * — mas cura o sintoma pela metade, de dois jeitos:
 *
 *   1. ⏱️ O gate ainda GASTA os 30 s inteiros do `goto` em toda cena de mapa, antes de cair no
 *      fallback. Sob carga, esses 30 s por gate × 9 gates são exatamente o que estoura o
 *      `QC_TIMEOUT_MS` de 3 min por gate — e o `NÃO MEDIDO` volta pela outra porta. Medido na
 *      `t-s125` em 11/set: com o fallback já no lugar, o portão dela ainda saiu com
 *      `carga`, `fora-do-quadro` e `crédito-fantasma` indefinidos, e só fechou com
 *      `QC_TIMEOUT_MS=900000`. **Dar mais paciência ao relógio não é o conserto: é pagar o
 *      sintoma mais caro.**
 *
 *   2. ⛔ E o `qc-tamanho` mede a cena de mapa NO ESTADO ERRADO. Ele nunca chamou
 *      `__prepararCaptura()` nem esperou o mapa assentar — então mede com a câmera na posição
 *      inicial e o auto-loop correndo, isto é, mede uma cena que NÃO vai ao ar. É a mesma
 *      [ARTE-150] que o `qc-fora-do-quadro` e o `qc-carga` já tinham consertado cada um por sua
 *      conta, e que ficou de fora aqui porque ninguém compara gate com gate.
 *
 * ───────────────────────────────────────────────────────────────────────────────────────────────
 * O CONSERTO, E POR QUE ELE É UM ARQUIVO SÓ
 *
 * A espera do mapa já existia escrita TRÊS vezes — `qc-fora-do-quadro.mjs:115`, `qc-carga.mjs:164`
 * e os probes —, com tetos e ordens ligeiramente diferentes. Cópia paralela da mesma regra é como
 * o regex de cor do hook de escrita e o do `qc-hex` divergiram até o mesmo defeito passar pelos
 * dois, cada um pelo furo que o outro não tinha. Então o caminho passa a ser UM, e quem quiser
 * um quarto gate (o `qc-rodape-contraste` é o próximo candidato: mesma navegação, mesmo defeito)
 * chama esta função em vez de copiar o bloco.
 *
 * A ordem é: DECIDIR pelo arquivo se a cena é de mapa (determinístico, sem abrir Chrome) → navegar
 * pelo caminho que essa resposta pede → pausar o auto-loop → esperar o mapa assentar.
 *
 * ⚠️ CENA COMUM NÃO MUDA DE COMPORTAMENTO. Ela continua esperando `load` com o mesmo teto de
 * sempre e a mesma pausa curta depois. Isto é deliberado: cena com foto/vídeo medida antes de a
 * mídia carregar devolve número BAIXO, e essa é a submedição que o CLAUDE.md já documenta no
 * `qc-carga` em lote. O caminho rápido é SÓ para quem declarou mapa.
 */
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { importarDoMotor } from "./motor.mjs";

/**
 * [porte Régie] A CENA É 4K? — a MESMA pergunta, com a MESMA régua, que o render do motor faz.
 *
 * Cinco portões decidiam isso com `/data-render="4k-native"/`, que só aceita aspas DUPLAS. O render
 * (src/ferramentas/renderizar.mjs › palco) aceita aspas simples e `window.__native4k = true`. Medido na
 * integração: a mesma cena de 12 rótulos, com `data-render='4k-native'`, saía "palco 1920 · 4 textos ·
 * ✓" no qc-carga (o que fica além de x=1920 não era contado) e o shot mostrava só o canto superior
 * esquerdo do quadro 4K. Com aspas duplas, "✗ DENSIDADE". O portão e o render discordavam sobre o
 * palco — então a régua agora é importada do motor, sem cópia (o módulo tem a guarda ehPrincipal e
 * não roda o render ao ser importado).
 *
 * Decide pelo TEXTO do arquivo, antes de abrir o Chrome (o viewport tem de nascer no tamanho certo).
 * @returns {Promise<{nativo: boolean, w: number, h: number}>}
 */
export async function palcoDaCena(texto) {
  const { palco } = await importarDoMotor("src/ferramentas/renderizar.mjs");
  const p = palco(String(texto ?? ""));
  return { nativo: p.nativo, w: p.largura, h: p.altura };
}

/** Teto para o mapa assentar, o mesmo que os três chamadores já usavam. */
export const TETO_MAPA_MS = 8000;

/**
 * A cena declarou MAPA?
 *
 * Decidido pelo TEXTO DO ARQUIVO, não perguntando à página — de propósito. Perguntar à página
 * exigiria já ter navegado, e é justamente a navegação que precisa saber a resposta. É o mesmo
 * sinal que o `qc-contrato.mjs:120` usa, então os dois gates concordam por construção sobre o que
 * é "cena de mapa".
 *
 * ⛔ E O SINAL É `maplibre`, NUNCA `__prepararCaptura` — este comentário existe porque a primeira
 * versão desta função aceitava os dois, e isso QUEBROU uma cena comum na primeira medição.
 *
 * `window.__prepararCaptura = …` é o CONTRATO DE RENDER: **toda** cena da casa o expõe, tenha mapa
 * ou não. Medido em 11/set/2026 nas cenas do `terremotos-america-do-sul`:
 *
 *     cena       maplibre   __prepararCaptura=   __aguardarMapa
 *     t-s125         3              1                  1          ← mapa de verdade
 *     t-s016         0              1                  0          ← desenho
 *     t-c007         0              1                  0          ← card de título
 *     t-s063         0              1                  0          ← grade de 5 painéis de vídeo
 *
 * Com o teste largo, `t-s016` entrou no caminho do mapa, saiu com `navegouCompleto=false`, não
 * encontrou `__aguardarMapa` para provar a abertura — e como ela é uma cena que DECLARA não ter
 * texto, a trava do verde vazio disparou e o gate devolveu `⚠ NÃO MEDIDO` numa cena que passava.
 * Um conserto de gate que reprova cena boa é pior que o defeito que ele cura: ensina a ignorar o
 * gate. *O símbolo que todo mundo tem não distingue ninguém.*
 */
export function cenaEhDeMapa(arquivo, texto = null) {
  const s = texto ?? readFileSync(arquivo, "utf8");
  return /maplibre/i.test(s) || /__aguardarMapa/.test(s);
}

/**
 * Abre a cena e a deixa pronta para medir.
 *
 * Devolve o que o chamador precisa para não mentir no veredito:
 *   · `ehMapa`          — o caminho que foi tomado;
 *   · `navegouCompleto` — se a navegação chegou a `load`. ⛔ Quando for `false`, medição que não
 *                          encontra NADA tem de voltar a ser `NÃO MEDIDO`, nunca `✓ ok`: página
 *                          que não abriu e página sem conteúdo se parecem no resultado, e a régua
 *                          da casa é falhar fechado quando não dá para distinguir. Esta função
 *                          entrega o dado; quem dá o veredito é o gate.
 *   · `mapaAssentou`    — `__aguardarMapa` respondeu dentro do teto (false = caiu no teto).
 */
export async function abrirCenaParaMedir(page, arquivo, opcoes = {}) {
  const { textoDoArquivo = null, timeoutLoadMs = 30000, tetoMapaMs = TETO_MAPA_MS, pausaMs = 300 } = opcoes;
  const ehMapa = cenaEhDeMapa(arquivo, textoDoArquivo);
  const url = pathToFileURL(resolve(arquivo)).href;

  let navegouCompleto = true;
  if (ehMapa) {
    /**
     * CAMINHO DO MAPA — nem se tenta o `load`, porque ele não chega e a tentativa custa 30 s.
     * `domcontentloaded` é o que esta medição de fato precisa: o DOM inteiro está parseado, e o
     * que falta é rede de tile, que quem espera é o `__aguardarMapa` logo abaixo, com teto.
     * **Navegação que não "termina" não é navegação que falhou.**
     */
    navegouCompleto = false;
    /**
     * ⚠️ E O `domcontentloaded` TAMBÉM ESTOURA SOB CARGA — medido em 11/set/2026 com load 39 na
     * `estudio-top10`: `t-s125` devolveu `page.goto: Timeout 30000ms exceeded` já no
     * `domcontentloaded`, e o gate morreu em `NÃO MEDIDO` de novo, agora pela porta nova.
     *
     * Estourar aqui NÃO é a mesma coisa que estourar no `load`. No `load` a espera é por uma
     * condição que a cena de mapa nunca atinge — esperar é sempre desperdício. No
     * `domcontentloaded` a condição CHEGA; ela só chegou depois do teto porque o Chrome está
     * disputando a máquina. Então este caso pede mais tempo, e só este.
     *
     * Quem decide o veredito continua não sendo o relógio: é o `mapaAssentou` lá embaixo, que é
     * prova POSITIVA de que a página abriu e o motor está vivo.
     */
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: timeoutLoadMs });
    } catch (e) {
      if (!/[Tt]imeout/.test(String(e?.message || e))) throw e;
      await page.waitForLoadState("domcontentloaded", { timeout: timeoutLoadMs }).catch(() => {});
    }
  } else {
    // CENA COMUM — o comportamento histórico, intocado. Se estourar, ainda assim se mede o que der
    // (o fallback da onda 2), mas registrando que a navegação não fechou.
    try {
      await page.goto(url, { waitUntil: "load", timeout: timeoutLoadMs });
    } catch (e) {
      if (!/[Tt]imeout/.test(String(e?.message || e))) throw e;
      navegouCompleto = false;
      await page.waitForLoadState("domcontentloaded").catch(() => {});
    }
  }

  await page.evaluate(() => document.fonts.ready).catch(() => {});

  let mapaAssentou = !ehMapa;
  if (ehMapa) {
    // PAUSAR O AUTO-LOOP ANTES DE ESPERAR. Na ordem inversa o `idle` do mapa nunca chega: a câmera
    // continua andando e o mapa continua pedindo tile para a posição nova.
    await page.evaluate(() => window.__prepararCaptura && window.__prepararCaptura()).catch(() => {});
    await page.evaluate(
      (teto) => (window.__ready ? Promise.race([window.__ready, new Promise((r) => setTimeout(r, teto))]) : Promise.resolve()),
      tetoMapaMs,
    ).catch(() => {});
    // `__aguardarMapa` é o `map.once('idle')` embrulhado pela própria cena. A corrida contra o teto
    // existe para o gate não pendurar quando a rede de tile não responde.
    mapaAssentou = await page.evaluate(
      (teto) => (typeof window.__aguardarMapa === "function"
        ? Promise.race([window.__aguardarMapa().then(() => true), new Promise((r) => setTimeout(() => r(false), teto))])
        : Promise.resolve(false)),
      tetoMapaMs,
    ).catch(() => false);
  }

  // Uma pausa curta para o layout assentar. Mapa já esperou o que tinha de esperar acima.
  await page.waitForTimeout(ehMapa ? pausaMs : navegouCompleto ? pausaMs : 1200);

  return { ehMapa, navegouCompleto, mapaAssentou };
}
