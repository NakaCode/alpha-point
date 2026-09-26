// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/src/paths.mjs (linhas 1-32, commit 4afda12).
// O que mudou: mudou de pasta (src/ → scripts/lib/), e por isso a raiz sobe dois níveis. O nome novo diz o que ele resolve.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// PATHS — helper único de resolução do "espelho de edição" de um projeto.
// O espelho é o contrato central da produção (o que o montador escreve). Historicamente o mesmo
// artefato se chamou plano-roteirista.json; o nome novo é espelho.json. Este helper unifica os dois
// SEM tocar nos scripts que ainda escrevem plano-roteirista.json (produções em curso).
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, isAbsolute } from "node:path";

const ROOT = fileURLToPath(new URL("../..", import.meta.url)); // raiz do canal (scripts/lib/ -> ../..) [porte Régie]

// Caminho do espelho (relativo à raiz do repo, p/ casar com o resto do pipeline):
// espelho.json se existir → senão plano-roteirista.json se existir → senão o caminho NOVO (p/ escrita).
export function espelhoPath(proj) {
  const novo = join("out", proj, "espelho.json");
  const legado = join("out", proj, "plano-roteirista.json");
  if (existsSync(join(ROOT, novo))) return novo;
  if (existsSync(join(ROOT, legado))) return legado;
  return novo;
}

// Lê + parseia o espelho, com erro CLARO (não um JSON.parse cru estourando fundo na pilha).
export function lerEspelho(proj) {
  const rel = espelhoPath(proj);
  const abs = isAbsolute(rel) ? rel : join(ROOT, rel);
  if (!existsSync(abs))
    throw new Error(`espelho ausente p/ "${proj}": nem out/${proj}/espelho.json nem plano-roteirista.json existem`);
  try {
    return JSON.parse(readFileSync(abs, "utf8"));
  } catch (e) {
    throw new Error(`espelho de "${proj}" inválido (${rel}): ${e.message}`);
  }
}
