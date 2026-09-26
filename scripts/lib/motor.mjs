// motor.mjs — onde está o motor (a Régie) que este canal usa, e como importar código de lá.
//
// Por que existe: alguns scripts do canal precisam de código que já mora no motor (o relógio
// do espelho, os cortes, o Chrome). Copiar esse código para dentro do canal cria um GÊMEO — e
// o estúdio do Top10 aprendeu caro que conserto aplicado num gêmeo e não no outro é pior que
// conserto ausente, porque a doutrina passa a jurar que o defeito morreu. Então o canal
// IMPORTA do motor, por aqui, em vez de copiar.
//
// Onde procura, nesta ordem:
//   1. a variável REGIE_MOTOR (para teste, ou para quem clonou o motor noutro lugar);
//   2. `motor.caminho` no canal.json (gravado pelo create-regie na criação do canal).
// Se nenhum dos dois aponta para um motor de verdade, o erro diz o que fazer — nunca segue
// calado com um caminho errado.
//
// O canal.json pode vir com BOM (a marca invisível U+FEFF que o Bloco de Notas antigo grava no
// começo do arquivo): o JSON.parse cru recusa, e o motor "sumia" com a mensagem de canal.json ilegível.
// Aqui o BOM sai antes do parse, como em todo leitor de JSON do motor.
//
// ehPrincipal(): "este módulo é o programa que o Node foi chamado para rodar?" — a mesma régua do
// motor (src/midia/arquivos.mjs:123-129): compara CAMINHOS REAIS (realpath: atalho, junção e link
// simbólico resolvidos) e, no Windows, sem diferença de maiúscula/minúscula (a letra do disco vem em
// qualquer caixa). Sem isso, um script chamado por um caminho com link saía 0 sem fazer nada.
import { existsSync, readFileSync, realpathSync } from "node:fs";
import { join, isAbsolute, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// Raiz do canal: scripts/lib/ -> ../..
export const RAIZ_CANAL = fileURLToPath(new URL("../..", import.meta.url));

function ehMotor(caminho) {
  try {
    const pkg = JSON.parse(readFileSync(join(caminho, "package.json"), "utf8"));
    return pkg.name === "regie" || existsSync(join(caminho, "bin", "create-regie"));
  } catch {
    return false;
  }
}

let memo = null;

export function caminhoDoMotor() {
  if (memo) return memo;
  const tentativas = [];
  const doAmbiente = process.env.REGIE_MOTOR;
  if (doAmbiente) {
    const c = resolve(doAmbiente);
    tentativas.push(`REGIE_MOTOR=${c}`);
    if (ehMotor(c)) return (memo = c);
  }
  const arqCanal = join(RAIZ_CANAL, "canal.json");
  if (existsSync(arqCanal)) {
    try {
      const canal = JSON.parse(readFileSync(arqCanal, "utf8").replace(/^\uFEFF/, ""));
      const c = canal?.motor?.caminho;
      if (c) {
        const abs = isAbsolute(c) ? c : resolve(RAIZ_CANAL, c);
        tentativas.push(`canal.json motor.caminho=${abs}`);
        if (ehMotor(abs)) return (memo = abs);
      }
    } catch (e) {
      tentativas.push(`canal.json ilegível (${e.message})`);
    }
  } else {
    tentativas.push(`canal.json não existe em ${RAIZ_CANAL}`);
  }
  const err = new Error(
    "Não achei o motor (a Régie) nesta máquina.\n" +
      `  Procurei: ${tentativas.join(" · ") || "nada configurado"}\n` +
      "  Conserto: confira onde o regie foi clonado (ex.: C:\\projetos\\regie) e ponha esse caminho\n" +
      "  em motor.caminho no canal.json — ou defina a variável REGIE_MOTOR."
  );
  err.code = "SEM_MOTOR";
  throw err;
}

// Importa um módulo do motor pelo caminho relativo à raiz dele, ex.:
//   const { mapSecFactory } = await importarDoMotor("src/finalize/cortes.mjs");
export async function importarDoMotor(relativo) {
  const abs = join(caminhoDoMotor(), relativo);
  if (!existsSync(abs)) {
    const err = new Error(
      `O motor em ${caminhoDoMotor()} não tem ${relativo}. O canal pode estar à frente da versão do motor ` +
        "clonada nesta máquina: atualize o motor para a versão que o canal.json declara (motor.versao)."
    );
    err.code = "MOTOR_SEM_ARQUIVO";
    throw err;
  }
  return import(pathToFileURL(abs).href);
}

// "Fui chamado direto?" — para o script do canal que também é importado pelo teste. Ver o cabeçalho.
export function ehPrincipal(urlDoModulo, argv1 = process.argv[1]) {
  if (!argv1) return false;
  let a, b;
  try { a = realpathSync(resolve(argv1)); b = realpathSync(fileURLToPath(urlDoModulo)); } catch { return false; }
  return process.platform === "win32" ? a.toLowerCase() === b.toLowerCase() : a === b;
}
