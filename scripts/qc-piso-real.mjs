#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-piso-real.mjs (linhas 1-144, commit 4afda12).
// O que mudou: a config continua em infra/piso-registro-real.json, mas na raiz do CANAL e decidida pelo dono DELE — o 50% é do
// Top10 e não sobe. Sem piso decidido (arquivo ausente, ou `piso: null`, o padrão do canal), o portão mede, imprime e diz que NÃO
// SE APLICA, com o porquê (exit 0) — não compara com recomendado nenhum; `--piso=N` e `--duro` continuam tornando a régua
// contratual a pedido. Arquivo presente e quebrado segue saindo 2. No faceless o segmento `apresentador` é preto e fica NA
// cobertura (só sai com "apresentador": true no canal.json). Aceita out\<proj>; BOM no espelho; a dica aponta o ofício do canal.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
/**
 * qc-piso-real.mjs — por quanto TEMPO o espelho põe o mundo real na tela?
 *
 * ⚠️ QUINTO IRMÃO, CLONE DE NENHUM. Os outros quatro medem o mesmo eixo com outra régua:
 *
 *   1. `qc-espelho-midia` → o PEDIDO do espelho, em CENAS (e reprova o pedido mudo).
 *   2. `qc-direcao-real`  → a ÂNCORA da direção, contando documento e mapa como registro.
 *   3. `qc-midia-real`    → a ENTREGA da arte, cena a cena.
 *   4. `qc-deserto-real`  → o RELÓGIO: a maior janela seguida sem nada real.
 *   5. **este**           → a PARCELA em SEGUNDOS de imagem do mundo (footage, foto, drone com
 *                           pedido que diz o que buscar), sem contar documento nem mapa.
 *
 * ══ O CASO QUE O CRIOU (16/set/2026) ══
 *
 * O dono reprovou o `petroleo-foz-do-amazonas`: *«ficou com muitas animações e poucas fotos,
 * imagens e footages reais… quero mais vídeos e fotos reais. Preciso de footages reais.»* O espelho
 * dele tinha passado nos quatro irmãos: 26,4% das CENAS pediam registro (acima do alerta de 25%) e a
 * direção ancorava 32,9% contando documento e mapa. Medido em segundos, sem documento e sem mapa,
 * o Petróleo põe o mundo na tela em **10,6%** da cobertura. É a única régua das três em que o vídeo
 * reprovado fica em último.
 *
 * ══ O PISO É DO DONO ══
 *
 * O número mora em `infra/piso-registro-real.json`, que é o DONO ÚNICO dele. Enquanto `piso` estiver
 * `null` (ninguém decidiu), este gate mede, compara com o RECOMENDADO e avisa — sai 0. No dia em que
 * o Mateus preencher `piso` + `decidido_por`, ele passa a reprovar sem mudar uma linha de código.
 *
 * Uso:  node scripts/qc-piso-real.mjs <proj | pasta | espelho.json> [--json] [--laudo]
 *                                     [--config=<arquivo>] [--piso=N] [--duro]
 *
 *   --laudo      grava `_laudo-piso-real.json` ao lado do espelho (falta em segundos + candidatas)
 *   --piso=N     hipótese na mão: compara com N e REPROVA abaixo (nunca use na receita da estação)
 *   --duro       torna contratual o piso RECOMENDADO enquanto o dono não decide
 *
 * [porte Régie] No canal, `piso` é null por padrão: sem piso decidido o portão mede e diz NÃO SE APLICA (exit 0).
 *
 * Exit 0 = PASS, ISENTO, NÃO SE APLICA ou abaixo só do recomendado · 1 = REPROVADO · 2 = INDEFINIDO (não deu para
 * medir, fora do escopo, ou configuração que não decide nada). Custo: zero inferência.
 */
import { existsSync, statSync, writeFileSync } from "node:fs";
import { join, basename, dirname, resolve, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import {
  segmentosDe, medirParcela, lerConfig, foraDoEscopo, decidir, candidatas,
} from "./lib/piso-real.mjs";
import { lerJsonDoDisco, canalTemApresentador } from "./lib/modos.mjs";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const argv = process.argv.slice(2);
const opt = (n) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
const JSON_OUT = argv.includes("--json");
const LAUDO = argv.includes("--laudo");
const DURO = argv.includes("--duro");
const alvo = argv.find((a) => !a.startsWith("--"));

function sair(codigo, mensagem, extra = {}) {
  if (JSON_OUT) console.log(JSON.stringify({ veredito: "INDEFINIDO", exit: codigo, motivo: mensagem, ...extra }, null, 1));
  else console.error(`✗ INDEFINIDO — ${mensagem}`);
  process.exit(codigo);
}

if (!alvo) sair(2, "uso: qc-piso-real.mjs <proj | pasta | espelho.json> [--json] [--laudo] [--config=] [--piso=N] [--duro]");

/* ── onde está o espelho ─────────────────────────────────────────────────────────────────────
 * `<proj>` resolve para `out/<proj>/`; pasta ou arquivo explícito servem ao teste e ao censo. */
function localizar(a) {
  // [porte Régie] "out\\" e a barra invertida do Windows contam como caminho, como a "/".
  const cand = /^out[\\/]/.test(a) ? join(RAIZ, a)
    : isAbsolute(a) || a.startsWith(".") || /[\\/]/.test(a) ? resolve(a)
      : join(RAIZ, "out", a);
  if (existsSync(cand) && statSync(cand).isFile()) return { arquivo: cand, dir: dirname(cand) };
  for (const f of ["espelho.json", "_espelho.json"]) if (existsSync(join(cand, f))) return { arquivo: join(cand, f), dir: cand };
  return { arquivo: null, dir: cand };
}
const { arquivo, dir } = localizar(alvo);
if (!arquivo) sair(2, `nenhum espelho em ${dir}`);
const slug = basename(dir);

let segs;
try { segs = segmentosDe(lerJsonDoDisco(arquivo)); } catch (e) { sair(2, `espelho ilegível: ${e.message}`); }   // [porte Régie] BOM
// [porte Régie] o apresentador só sai da cobertura onde ele EXISTE (canal.json "apresentador": true); no faceless é preto
const opcoesCobertura = { comApresentador: canalTemApresentador("qc-piso-real") };

/* ── a régua vem do arquivo, e nunca de um padrão calado ─────────────────────────────────── */
const caminhoConfig = opt("config") ? resolve(opt("config")) : join(RAIZ, "infra", "piso-registro-real.json");
/* [porte Régie] O PISO DE REGISTRO REAL DO CANAL É `null` POR PADRÃO — e sem piso o portão NÃO SE APLICA.
 *
 * O 50% é decisão do Mateus para o TOP10 (16/set/2026), e o 35/45 "recomendado" foi medido no acervo DO TOP10:
 * nenhum dos dois sobe para outro canal. O porte anterior, sem o arquivo, comparava o canal com o 35 do Top10 e
 * imprimia "ABAIXO DO RECOMENDADO" — uma régua que ninguém deste canal escolheu, dita como se fosse dele.
 * Agora, sem piso decidido (arquivo ausente, ou `piso: null` — o template nasce assim), o portão mede e imprime a
 * parcela (é o insumo da decisão do dono) e diz que NÃO SE APLICA, com o porquê: exit 0, porque não há régua a
 * cumprir, e não 2, porque a medida FOI feita. Quem liga o portão é o dono: `piso` + `decidido_por` no arquivo.
 * `--piso=N` (hipótese na mão) e `--duro` (o recomendado DO ARQUIVO DO CANAL, se houver) seguem valendo a pedido.
 * Arquivo PRESENTE e quebrado continua saindo 2: erro de digitação do dono não vira "não se aplica" calado. */
const temArquivo = existsSync(caminhoConfig);
if (opt("config") && !temArquivo) sair(2, `--config ${caminhoConfig} não existe`);
let config = null;
if (temArquivo) {
  let bruto = null;
  try { bruto = lerJsonDoDisco(caminhoConfig); } catch (e) { sair(2, e.message); }
  config = lerConfig(bruto);
  if (config.erro) sair(2, `${caminhoConfig}: ${config.erro}`);
}

const medida = medirParcela(segs, opcoesCobertura);
const ehCompilado = ["_reaproveitamento.json", "_compilado-montagem.json"].some((f) => existsSync(join(dir, f)));
const escopo = foraDoEscopo({ segs, medida, slug, ehCompilado, coberturaMinima: config?.cobertura_minima_s ?? 240 });
if (escopo) sair(2, `${slug}: ${escopo}`, { proj: slug, medida });

const pisoHipotese = opt("piso") !== null ? Number(opt("piso")) : null;
if (pisoHipotese !== null && !(pisoHipotese > 0 && pisoHipotese < 100)) sair(2, `--piso inválido: ${opt("piso")}`);
if (DURO && pisoHipotese === null && !config?.vigente && !config?.recomendado)
  sair(2, `--duro endurece o piso RECOMENDADO do canal, e ${config ? `${caminhoConfig} não declara recomendado.piso` : `este canal não tem ${caminhoConfig}`} — não há régua a endurecer (o 50% é do Top10)`);
// [porte Régie] sem piso decidido, sem hipótese e sem --duro: NÃO SE APLICA (ver o bloco acima)
const naoSeAplica = pisoHipotese === null && !DURO && !config?.vigente;
const dec = naoSeAplica
  ? { veredito: "NAO_SE_APLICA", exit: 0, piso: null, fonte: "nenhum", contratual: false, excecao: null, falta_s: null }
  : decidir({ medida, config: config || { vigente: false, recomendado: null, alvo: null, excecoes: [] }, slug, pisoHipotese, duro: DURO });
const lista = candidatas(segs, 15, opcoesCobertura);

const laudo = {
  proj: slug, espelho: arquivo, medido_em: new Date().toISOString(),
  regua: "segundos de imagem do mundo (footage|foto|drone, com pedido que diz o que buscar, fora documento/mapa/mapa3d) ÷ segundos de cobertura",
  ...medida,
  piso: dec.piso, fonte_do_piso: dec.fonte, contratual: dec.contratual,
  piso_decidido: config?.vigente ? { piso: config.piso, por: config.decidido_por, em: config.decidido_em } : null,
  recomendado: config ? { piso: config.recomendado, alvo: config.alvo } : null,
  nao_se_aplica: naoSeAplica ? (temArquivo ? "piso null em infra/piso-registro-real.json: o dono do canal não decidiu um piso de registro real" : "o canal não tem infra/piso-registro-real.json: não há piso de registro real decidido") : null,   // [porte Régie]
  excecao: dec.excecao, veredito: dec.veredito, exit: dec.exit, falta_s: dec.falta_s,
  candidatas: lista, candidatas_nota: "heurística para ORDENAR onde procurar; não afirma que o registro existe — quem prova é a pesquisa",
  lei: config?.lei || "ARTE-323",
};
if (LAUDO) {
  try { writeFileSync(join(dir, "_laudo-piso-real.json"), JSON.stringify(laudo, null, 1) + "\n"); }
  catch (e) { console.error(`▲ não consegui gravar o laudo em ${dir}: ${e.message}`); }
}

if (JSON_OUT) {
  console.log(JSON.stringify(laudo, null, 1));
} else {
  const s = medida.segundos;
  const pct = (x) => (medida.cobertura_s ? ((100 * x) / medida.cobertura_s).toFixed(1) : "0.0");
  console.log(`\n══ IMAGEM DO MUNDO EM SEGUNDOS · ${slug} · ${medida.segmentos} segmentos ══`);
  console.log(`  cobertura (fora o Bôco, a navegação e anima:false): ${medida.cobertura_cenas} cenas · ${medida.cobertura_s} s`);
  console.log(`  MUNDO (footage/foto/drone com pedido): ${s.mundo} s = ${medida.parcela}%`);
  console.log(`  não conta: documento ${s.documento} s (${pct(s.documento)}%) · mapa ${s.mapa} s (${pct(s.mapa)}%) · pedido mudo ${s["real-mudo"]} s (${pct(s["real-mudo"])}%) · animação ${s.animacao} s (${pct(s.animacao)}%)`);
  const origem = {
    vigente: `piso ${dec.piso}% decidido por ${config?.decidido_por}${config?.decidido_em ? ` em ${config.decidido_em}` : ""}`,
    recomendado: `piso RECOMENDADO ${dec.piso}% do arquivo do canal, endurecido por --duro — ainda NÃO decidido pelo dono (infra/piso-registro-real.json)`,   // [porte Régie]
    nenhum: `nenhuma — ${laudo.nao_se_aplica}`,   // [porte Régie]
    hipotese: `piso ${dec.piso}% por --piso (hipótese na mão)`,
    excecao: `piso ${dec.piso}% por exceção de projeto (${dec.excecao?.motivo}; ${dec.excecao?.decidido_por}, ${dec.excecao?.em})`,
  }[dec.fonte];
  console.log(`  régua: ${origem}`);

  if (!["PASS", "NAO_SE_APLICA"].includes(dec.veredito) && lista.length) {   // [porte Régie]
    console.log(`\n  Onde procurar os ${dec.falta_s} s que faltam (heurística — não afirma que o registro existe):`);
    for (const c of lista.slice(0, 10)) console.log(`      ${String(c.id).padEnd(28)} ${String(c.dur).padStart(6)} s  [${c.modo}/${c.midia}]  ${c.sinais.join(" · ")}`);
    console.log(`      Regras: o ofício do montador (.claude/agents/montador.md) — sujeito nomeado pede a imagem DELE; classe só quando a fala é da classe (PESQ-17).`);   // [porte Régie] a roupa do Top10 não sobe
  }

  const fim = {
    // [porte Régie] sem piso decidido: o número acima é o insumo da decisão do dono, não um veredito
    NAO_SE_APLICA: `\n○ NÃO SE APLICA — este canal não tem piso de registro real decidido (${temArquivo ? "`piso: null` em infra/piso-registro-real.json" : "sem infra/piso-registro-real.json"}).` +
      `\n  O 50% é decisão do Top10 para o canal DELE e não vale aqui. A parcela acima está medida para o dono decidir;` +
      `\n  o portão passa a cobrar quando ele gravar \`piso\` + \`decidido_por\` em infra/piso-registro-real.json. (--piso=N testa uma hipótese.)\n`,
    PASS: `\n✓ PASS — ${medida.parcela}% de imagem do mundo, no piso de ${dec.piso}% ou acima.${config?.alvo && medida.parcela < config.alvo ? ` Faltam ${Math.max(0, Math.ceil((config.alvo / 100) * medida.cobertura_s - medida.mundo_s))} s para o alvo recomendado de ${config.alvo}%.` : ""}\n`,
    ISENTO: `\n○ ISENTO — exceção de projeto (${dec.excecao?.motivo}). Medido e registrado; não reprova.\n`,
    // [porte Régie] "decisão do Mateus" → "decisão do dono do canal": o piso de cada canal é de quem é dono dele.
    ABAIXO_DO_RECOMENDADO: `\n▲ ABAIXO DO RECOMENDADO — ${medida.parcela}% contra ${dec.piso}%; faltam ${dec.falta_s} s. O piso ainda é DECISÃO DO DONO DO CANAL: avisa, não reprova (\`--duro\` reprova).\n`,
    REPROVADO: `\n✗ REPROVADO — ${medida.parcela}% de imagem do mundo, abaixo do piso de ${dec.piso}%. Faltam ${dec.falta_s} s. Devolva ao montador antes de gastar arte.\n`,
  }[dec.veredito];
  console.log(fim);
}
process.exitCode = dec.exit;
