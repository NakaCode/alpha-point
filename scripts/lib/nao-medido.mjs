// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/nao-medido.mjs (linhas 1-35, commit 4afda12).
// O que mudou: a mensagem de "não medi" sai inteira quando a causa é da MÁQUINA (sem Chrome, sem
// motor, sem npm install) — a lista de onde se procurou o Chrome passava de 300 caracteres e era
// cortada no meio; e ganhou importarDependencia(), porque um `import` estático de pacote ausente
// morre ANTES de o handler existir e sai 1 ("medi e reprovei").
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * nao-medido.mjs — O TERCEIRO ESTADO na porta de saída de um gate.
 *
 * A CONVENÇÃO DA CASA é o código de saída, e ela tem três valores, não dois:
 *   0 · medi e passou
 *   1 · MEDI e reprovei      → defeito de verdade, acionável agora
 *   2 · NÃO MEDI             → indefinido; o `qc-cena.mjs` o trata como buraco de medição, e
 *                              buraco de medição invalida o carimbo do `_portao.json` (não vira
 *                              liberação de render, nem reprovação de cena boa)
 *
 * POR QUE ISTO EXISTE (achado nº 2 da auditoria de 05/ago/2026, "correção ao enunciado original").
 * Os gates de cena abrem o Chrome com um `await` de topo, sem rede de proteção. Quando o navegador
 * não sobe — e isso ACONTECE: na VM sem GPU o `qc-carga` morre com
 * `ContextResult::kTransientFailure: Failed to send GpuControl` — a rejeição não capturada faz o
 * Node sair **1**, que é exatamente o código de "medi e reprovei". Medido: as 9 cenas restantes do
 * `el-nino` foram carimbadas como reprovadas sem nunca terem sido medidas, o render se recusou (com
 * razão) a gastar em cena "reprovada", e o vídeo travou 2h20 por um defeito que não existia.
 *
 * O comentário do `qc-cena.mjs` já prometia que "crash → indefinido" desde 28/jul. Não virava: quem
 * decide é o código de saída, e o crash saía 1. Esta é a peça que faltava — e ela mora num lugar só
 * porque três cópias da mesma regra é como se chega a três réguas.
 *
 * NÃO MUDA NADA NO CAMINHO FELIZ: por padrão o Node já derruba o processo com exit 1 em exceção não
 * capturada e em promessa rejeitada. O handler só troca o **código**, de 1 (mentira) para 2 (verdade).
 */

/** O código de "não medi". Um nome, para ninguém escrever `2` solto e errar a convenção. */
export const NAO_MEDIDO = 2;

// [porte Régie] Erros cuja causa é a máquina do dono, e não a cena: a mensagem deles É o conserto
// (onde procurei o Chrome, que comando rodar), então sai inteira, sem pilha e sem corte.
const CAUSAS_DA_MAQUINA = new Set(["SEM_CHROME", "SEM_MOTOR", "MOTOR_SEM_ARQUIVO", "SEM_DEPENDENCIA", "SEM_MARCA"]);

export function morrerComoNaoMedido(nomeDoGate) {
  const morrer = (e) => {
    const msg = e && CAUSAS_DA_MAQUINA.has(e.code)
      ? String(e.message)
      : String((e && e.stack) || (e && e.message) || e).replace(/\s+/g, " ").slice(0, 300);
    console.error(`⚠ ${nomeDoGate}: NÃO MEDIDO — o gate morreu antes de terminar a medição: ${msg}`);
    console.error(`  (exit 2 = não medi. Isto NÃO é reprovação da cena: o Chrome não subiu, a máquina saturou, ou o gate quebrou.)`);
    process.exit(NAO_MEDIDO);
  };
  process.on("uncaughtException", morrer);
  process.on("unhandledRejection", morrer);
}

/**
 * [porte Régie] Carrega um pacote npm do canal (playwright-core, sharp) SOB DEMANDA.
 *
 * Por que não um `import` no topo do gate: pacote ausente (o dono ainda não rodou `npm.cmd install`)
 * derruba o módulo na fase de ligação, antes de qualquer linha do gate rodar — antes, portanto, do
 * `morrerComoNaoMedido` — e o Node sai **1**. O gate pareceria ter medido e reprovado a cena.
 * Aqui a falta vira um erro com código SEM_DEPENDENCIA, que o handler acima traduz para exit 2.
 */
export async function importarDependencia(nome) {
  try {
    return await import(nome);
  } catch (e) {
    if (e && (e.code === "ERR_MODULE_NOT_FOUND" || e.code === "MODULE_NOT_FOUND") && String(e.message).includes(nome)) {
      const err = new Error(
        `a dependência "${nome}" não está instalada neste canal.\n` +
          "  Conserto: abra o terminal NA PASTA DO CANAL e rode  npm.cmd install  (no PowerShell do Windows o\n" +
          "  comando é npm.cmd, não npm). Ele instala o que o package.json do canal declara, uma vez só."
      );
      err.code = "SEM_DEPENDENCIA";
      throw err;
    }
    throw e;
  }
}
