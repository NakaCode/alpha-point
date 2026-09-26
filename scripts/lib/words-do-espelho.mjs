// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/words-do-espelho.mjs (linhas 1-132, commit 4afda12).
// O que mudou: nada — só este cabeçalho. No faceless só existe words.json (um relógio só), e a escolha cai nele sozinha.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * QUAL arquivo de palavras descreve o relógio DESTE espelho?
 *
 * ── POR QUE EXISTE ──────────────────────────────────────────────────────────────────────────────
 * Um projeto tem até três transcrições no disco, em três relógios diferentes:
 *   `words.json`        BRUTO  — a gravação inteira, com os erros e os silêncios
 *   `words-limpo.json`  LIMPO  — pós-ripple dos cortes, o relógio intermediário
 *   `words-final.json`  FINAL  — a fala do `_master-decupado.mp4`, o padrão desde 06/ago
 *
 * O espelho vive em UM deles, e desde o re-espelho em tempo final essa escolha deixou de ser óbvia.
 * Quem grampeia o nome do arquivo no código acerta enquanto a convenção não muda e passa a mentir
 * DEPOIS que ela muda — sem erro, sem exceção, sem sintoma: o consumidor recebe a fala de OUTRO
 * trecho do vídeo, plausível e deslocada por dezenas de segundos.
 *
 * Medido em 08/ago/2026 no `galaxia-arco-flecha` (espelho 0→587,13s), dois consumidores ao mesmo tempo:
 *   `_brief-arte.mjs`  lia `words-limpo` (17,08→663,36s) e entregava word-lock de outra cena ao Fable
 *                      — a `s30` receberia word-lock VAZIO, a `s62` receberia a fala da `s49`/`s50`;
 *   `qc-janela.mjs`    lia `words.json` (10,22→681,52s) no desempate take × dessincronia, achava 0%
 *                      de fala em comum onde a fala é a MESMA, e reprovava 47 cenas por ancoragem.
 * O segundo é o caro: o laudo mandava re-ancorar o vídeo inteiro, o que significa despachar dezenas
 * de agentes pagos para consertar arte que estava certa.
 *
 * ── COMO DECIDE ─────────────────────────────────────────────────────────────────────────────────
 * Não pelo nome nem por uma flag: pela MEDIDA. O relógio certo é aquele cuja fala COBRE a janela do
 * espelho — cada cena tem de ter fala embaixo dela.
 *
 * ⚠️ ATÉ 14/ago/2026 A MEDIDA ESTAVA INVERTIDA, e é uma inversão que só aparece num caso.
 *
 * A regra era `cabe = c.ini >= -0.5 && c.fim <= fimJanela + 1`: exigia que **a fala coubesse dentro
 * da janela do espelho**, quando o certo é o contrário — a JANELA tem de caber dentro da FALA. Uma
 * transcrição que termina muito antes do fim do espelho satisfazia `cabe` trivialmente (ela cabe,
 * de sobra) e vencia; a transcrição certa, que passa alguns segundos do fim da última cena — o
 * normal, porque a fala continua depois da última arte —, levava a penalidade de 1e6 e perdia.
 *
 * Medido no `energia-escura` (espelho 30,4→1529,5s):
 *   `words-final.json`  0,22→1115,2s   escolhido — deixava **414s de espelho sem fala nenhuma**
 *   `words-limpo.json`  30,0→1532,0s   o certo, descartado por passar 2,5s do fim
 *
 * O efeito: `qc-espelho-fala` reprovou **33 de 41 cenas** de um espelho correto, cada uma com um
 * desvio que CRESCIA ao longo do vídeo (c14 acusada em 453s contra 293s; c40 em 1495s contra
 * 1076s) — a assinatura de comparar tempo bruto com tempo pós-corte. Provado palavra a palavra: a
 * âncora da c14 fala em "5 mil fibras óticas", e "fibras" está em @455,2s no `words.json` e em
 * @296,1s no `words-final.json`; o espelho põe a cena em @453s, ou seja, **certo**.
 *
 * O perigo não era o FAIL: era o `--corrigir` oferecido na última linha do laudo, que reescreveria
 * 33 `inSec` sãos para o relógio errado, com a arte já desenhada e renderizada.
 *
 * A regra nova mede a distância entre as duas janelas e pune **10× mais o trecho de espelho que
 * fica descoberto** (cena sem fala embaixo — o erro grave) do que a fala que sobra depois do fim
 * (inofensiva: ninguém ancora ali). Conferida contra os 18 projetos com espelho no disco da VM:
 * **17 mantêm exatamente a escolha de antes** e só o `energia-escura` muda — o caso defeituoso.
 * *Uma regra que erra num caso e acerta em dezessete não se troca no escuro: troca-se medindo os
 * dezessete.*
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const CANDIDATOS = ["words-final.json", "words-limpo.json", "words.json"];

const carregar = (dir, f) => {
  const w = JSON.parse(readFileSync(join(dir, f), "utf8"));
  return w.words || w.segments || w;
};
const ini = (w) => w[0].start ?? w[0].s;
const fim = (w) => w[w.length - 1].end ?? w[w.length - 1].e;

const inicioDoEspelho = (dir) => {
  try {
    const espelho = JSON.parse(readFileSync(join(dir, "espelho.json"), "utf8"));
    const segmentos = espelho.segmentos || espelho.cenas || [];
    const inicios = segmentos.map((s) => s.inSec).filter(Number.isFinite);
    return inicios.length ? Math.min(...inicios) : 0;
  } catch {
    return 0;
  }
};

/**
 * @param {string} dir      pasta do projeto (out/<proj>)
 * @param {number} fimJanela  fim da última cena do espelho (max inSec+dur)
 * @returns {{arquivo:string, words:Array, ini:number, fim:number, cabe:boolean, descartados:Array}}
 *          `cabe:false` = NENHUM candidato casa — o chamador decide se avisa ou aborta, mas não deve
 *          seguir calado: word-lock em relógio errado não tem sintoma visível.
 */
export function wordsDoEspelho(dir, fimJanela, iniJanela = null) {
  const cands = CANDIDATOS
    .filter((f) => existsSync(join(dir, f)))
    .map((f) => { const w = carregar(dir, f); return w.length ? { arquivo: f, words: w, ini: ini(w), fim: fim(w) } : null; })
    .filter(Boolean);
  if (!cands.length) return { arquivo: null, words: [], ini: 0, fim: 0, cabe: false, descartados: [] };

  // quanto da janela do espelho fica SEM fala embaixo — o erro grave, porque cena sem fala é cena
  // ancorada em nada; e quanto de fala sobra fora da janela — inofensivo, ninguém ancora ali.
  // A escolha histórica continua comparando contra zero quando o chamador omite o início. Mudar
  // esse eixo trocaria silenciosamente o arquivo de palavras de todos os consumidores.
  const inicioDaEscolha = Number.isFinite(iniJanela) ? iniJanela : 0;
  const descoberto = (c) => Math.max(0, c.ini - inicioDaEscolha) + Math.max(0, fimJanela - c.fim);
  const excesso = (c) => Math.max(0, inicioDaEscolha - c.ini) + Math.max(0, c.fim - fimJanela);
  const erro = (c) => descoberto(c) * 10 + excesso(c);
  /**
   * `cabe` é só o AVISO ("leia o laudo com desconfiança"), nunca a escolha — e por isso a folga aqui
   * é calibrada contra o disco, não contra o ideal. Com 2s ela acusava `orcas-nao-matam` (2s),
   * `planeta-em-meteorito` (4s) e `sol-artificial-fusao` (5s), que estão certos: a última cena
   * termina um pouco depois da última palavra, o que é o normal — a arte segura o quadro no fim da
   * frase. Três alarmes falsos ensinam a ignorar o quarto, que seria o de verdade.
   * 10s separa a borda (≤5s medidos) do desvio real (414s no `energia-escura`) com folga nos dois lados.
   */
  // O alerta, ao contrário, mede a janela real do espelho. Silêncio anterior à primeira cena não é
  // fala descoberta; início explicitamente passado pelo chamador permanece soberano, inclusive 0.
  // [SIS-418]
  const inicioDoAlerta = Number.isFinite(iniJanela) ? iniJanela : inicioDoEspelho(dir);
  const descobertoParaAlerta = (c) => Math.max(0, c.ini - inicioDoAlerta) + Math.max(0, fimJanela - c.fim);
  const cabe = (c) => descobertoParaAlerta(c) <= 10;
  const [escolhido, ...resto] = cands.slice().sort((a, b) => erro(a) - erro(b));
  return { ...escolhido, cabe: cabe(escolhido), descartados: resto };
}

/** "words-final.json 0.10→586.26s" — para o chamador DIZER de qual relógio está falando. */
export const janelaTxt = (c) => `${c.arquivo} ${c.ini.toFixed(2)}→${c.fim.toFixed(2)}s`;

/**
 * Todas as transcrições do disco, cada uma com sua janela. Para quem precisa comparar RELÓGIOS
 * DIFERENTES — o caso do `qc-janela`, que confronta a janela declarada no HTML (o relógio em que a
 * arte foi feita) com a janela vigente do espelho. Ali não existe "o" arquivo certo: existem dois,
 * e ler os dois lados no mesmo é o que produz 0% de fala em comum onde a fala é idêntica.
 */
export function todosOsWords(dir) {
  return CANDIDATOS
    .filter((f) => existsSync(join(dir, f)))
    .map((f) => { const w = carregar(dir, f); return w.length ? { arquivo: f, words: w, ini: ini(w), fim: fim(w) } : null; })
    .filter(Boolean);
}
