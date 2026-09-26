#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-cena.mjs (linhas 1-797, commit 4afda12).
// O que mudou: só roda os portões que EXISTEM no canal — o que falta vira NÃO MEDIDO (exit 2), nunca
// verde, e fora-do-quadro/mapa-vivo (não vieram) entram só se o script aparecer, com a ausência
// impressa em toda rodada; os portões são chamados pelo node que está rodando (process.execPath) e
// com caminho ABSOLUTO de cada cena (o filho roda na raiz do canal); a saturação da máquina vem de
// os.loadavg() (sem /proc e sem `uptime` via shell); o carimbo do _portao.json — que o XML do motor
// lê — usa a trava portátil de lib/qc-cena-gates.mjs (o flock/shlock do estúdio não existe no
// Windows); aceita `<proj>`, `out/<proj>` e caminho absoluto. Na integração da v1: o carimbo leva
// `hash_marca` (a marca que a medida usou) e a retomada o exige igual; cada cena é carimbada no SEU
// projeto e o src-existe roda por cena (com dois projetos, o estúdio carimbava e varria só o
// primeiro); falha ao gravar o carimbo sai 2 com o motivo (o estúdio a engolia); tamanho e til rodam
// em blocos de cenas (limite de linha de comando do Windows); a carga da máquina no Windows vem da
// ocupação da CPU; com --conc=1 os gates em lote também rodam um depois do outro.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma (chama os portões como processos).
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-cena.mjs — A VARREDURA DETERMINÍSTICA DE TODAS AS CENAS de um projeto, num comando.
 *
 * POR QUE ELE EXISTE. Os gates determinísticos de cena (contrato, carga, colisão, tamanho, til)
 * viviam SÓ no modo 1-cena do `top10 qc <html>`. O modo PROJETO (`top10 qc out/<proj>`), que é o
 * checkpoint ANTES do render em lote, não os rodava — corria só src-existe, laudo e espelho×fala. O
 * buraco: se o `editor-de-arte` não rodasse `top10 qc` em CADA html à mão, os gates visuais nunca
 * disparavam antes do 4K, e o `qc-visual` (inferência cara) acabava remedindo pixel — trabalho de
 * script pago como se fosse julgamento.
 *
 * ESTE É O RUNNER QUE FECHA O BURACO. Uma passada em todas as `graphics/*.html`: o agente de criação
 * roda ISTO e conserta até ficar verde ANTES de entregar; o `qc-visual` recebe a cena com os gates
 * já satisfeitos e gasta a inferência só no que régua nenhuma pega (abordagem, storytelling, tema).
 *
 * NÃO REIMPLEMENTA NADA. Chama os gates que já existem (a definição continua com um dono só) e
 * agrega. Os que sabem processar lote num Chrome só (`qc-tamanho`, `_audit-til`) rodam UMA vez com
 * todos os arquivos; os por-cena (`qc-carga`, `check-overlap`) rodam num pool limitado. Custo
 * medido: ~1,4 s por cena com pool=4 (as 3 janelas de Chrome em paralelo), não os ~7,6 s em série
 * que aposentaram a ideia de pôr tudo no hook por-edição.
 *
 * Uso:
 *   node scripts/qc-cena.mjs out/<proj>            # todas as cenas do projeto
 *   node scripts/qc-cena.mjs <a.html> <b.html> …   # cenas específicas
 *   node scripts/qc-cena.mjs out/<proj> --conc=6 [--json]
 *
 * Exit: 0 = todas as cenas passam os gates DUROS · 1 = alguma reprovou (lista o quê, por cena).
 */
import { execFile } from "node:child_process";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, basename, dirname, resolve, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";
import {
  argumentosQcTamanho,
  chavesForaDoPortaoQcCena,
  chavesGatesEsperadosQcCena,
  concorrenciaPadrao,
  emBlocos,
  estimarCarga,
  fundirCarimboPortao,
  interpretarSaidaQcTamanho,
  lerJsonSemBom,
  NOMES_GATES_QC_CENA,
  projetoDaCena,
  SCRIPTS_GATES_QC_CENA,
} from "./lib/qc-cena-gates.mjs";
import { NAO_MEDIDO } from "./lib/nao-medido.mjs";
import { hashDependenciasMarca, lerMarca } from "./lib/marca-tokens.mjs";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
// [porte Régie] O portão EXISTE neste canal? (a tabela de scripts mora em lib/qc-cena-gates.mjs)
const existeScript = (rel) => existsSync(join(RAIZ, rel));
const argv = process.argv.slice(2);
const flag = (n) => argv.includes(`--${n}`);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
const posic = argv.filter((a) => !a.startsWith("--"));
const JSON_OUT = flag("json");
/**
 * CONCORRÊNCIA — e por que ela REPROVAVA CENA BOA (28/jul/2026, medido no `el-nino`).
 *
 * Cada gate abre o seu próprio Chrome. Com 8 em paralelo numa máquina que já roda render e arte, o
 * Chrome fica lento e o timeout interno de cada gate expira **antes de a mídia carregar** — então o
 * gate mede um layout que ainda não existe. O resultado não é ruído: é reprovação.
 *
 * Medido: 9 de 41 cenas do `el-nino` barradas (5 mapas + 4 footage, justamente as que dependem de
 * mídia externa), com falhas `carga` e `fora-do-quadro`. Rodando as MESMAS cenas isoladas, todas
 * passam com folga larga — 1 a 4 textos contra teto de 9, ritmo 0,13–0,39 contra teto 0,9, e
 * "nada cortado, nada invisível" no fora-do-quadro. O loop de render então se recusou (com razão)
 * a gastar render em cena reprovada, e o vídeo parou em 32 de 50 cenas por 2h20.
 *
 * Dois consertos:
 *   1. `Math.max(2, …)` promovia `--conc=1` a 2 em silêncio — a flag existia e não funcionava
 *      justamente no valor que serializa, que é o único remédio quando a máquina está cheia.
 *   2. O default ignorava a carga da máquina. Agora olha o load: numa VM saturada, abrir 8 Chromes
 *      não acelera nada e ainda estraga a medição.
 *
 * ⚠️ Cena reprovada à toa custa mais caro que gate lento: o render não roda, o vídeo trava, e o
 * conserto é uma sessão humana investigando um defeito que não existe.
 */
// [porte Régie] A carga vem de lib/qc-cena-gates.mjs › estimarCarga: load average onde existe; no
// Windows (onde os.loadavg() é sempre [0,0,0]) a ocupação da CPU em duas leituras. Sem medida, o
// padrão é CONSERVADOR (3), nunca o máximo — e a rodada diz isso.
const CARGA = await estimarCarga();
const CONC = (() => {
  const pedido = +opt("conc", "");
  if (Number.isFinite(pedido) && pedido >= 1) return Math.min(pedido, 8);   // 1 é legítimo e agora vale
  return concorrenciaPadrao({ nucleos: os.cpus().length, carga: CARGA.carga });
})();
if (CARGA.carga == null && !opt("conc", "")) console.log(`  ⓘ conc=${CONC} (carga ${CARGA.fonte}: uso o padrão conservador; --conc=N manda)`);

if (!posic.length) { console.error("uso: qc-cena.mjs out/<proj>  |  qc-cena.mjs <a.html> [<b.html> …]  [--conc=N] [--max=3] [--json]"); process.exit(2); }

// ── expande projeto → lista de HTMLs ─────────────────────────────────────────
// Uma lista explícita é uma fatia (o loop de render usa blocos de 5); só o diretório representa o
// conjunto inteiro. Confundir `htmls.length > 1` com modo projeto fazia CADA bloco revarrer todos os
// clipes repetidos do projeto — no Planeta, 3 varreduras das mesmas 48 cenas durante um único QC.
const MODO_PROJETO = posic.some((a) => !a.endsWith(".html"));
const htmls = [];
for (const a of posic) {
  // [porte Régie] caminho ABSOLUTO: os portões rodam como processo filho com cwd na raiz do canal, e
  // um caminho relativo à pasta de quem chamou apontaria para o nada lá.
  if (a.endsWith(".html")) { htmls.push(resolve(a)); continue; }
  // [porte Régie] `<proj>`, `out/<proj>` ou absoluto; relativo à pasta atual e, se não houver, à raiz do canal
  const limpo = a.replace(/[\\/]+$/, "");
  const g = [join(limpo, "graphics"), ...(isAbsolute(limpo) ? [] : [join(RAIZ, limpo, "graphics"), join(RAIZ, "out", limpo, "graphics")])]
    .map((x) => resolve(x)).find(existsSync);
  if (!g) { console.error(`✗ ${join(limpo, "graphics")} não existe`); process.exit(2); }
  // ⚠️ ARQUIVO COM `_` NA FRENTE NÃO É CENA — é ferramenta (26/jul).
  //
  // A varredura de projeto pegava TUDO em `graphics/`, inclusive os auxiliares que o próprio estúdio
  // gera para inspeção. O `_emendas-contatos.html` ("Folha de emendas") reprovava três gates de uma
  // vez — 15 blocos @0s, 244 textos fora do quadro, sem `__renderAt` — e aparecia no relatório junto
  // com as cenas de verdade, como se o vídeo tivesse um defeito. Não tem: esse arquivo não está no
  // plano das 76, não tem clipe 4K e nunca vai ao ar.
  //
  // Alarme falso é bug de prioridade alta: uma reprovação que ninguém pode consertar ensina a ler
  // "✗" como ruído, e aí o gate para de proteger justamente quando acerta. O `_render-4k-loop.sh` já
  // pulava `_peek`/`_probe` pela mesma razão — a convenção existia e este runner não a respeitava.
  //
  // Passar o caminho explicitamente (`qc-cena.mjs graphics/_x.html`) continua funcionando: quem pede
  // um arquivo pelo nome sabe o que está pedindo. O filtro vale só para a expansão do projeto.
  for (const f of readdirSync(g).filter((f) => f.endsWith(".html") && !f.startsWith("_") && !f.startsWith(".")).sort()) htmls.push(join(g, f));
}
if (!htmls.length) { console.error("✗ nenhuma cena .html encontrada"); process.exit(2); }

/**
 * [porte Régie] A MARCA QUE A MEDIDA USA ENTRA NO CARIMBO (decisão I9 da integração).
 *
 * Tamanho e til leem marca/tokens.css e as fontes; carga e colisão mudam com a métrica da fonte. O
 * carimbo era só o hash do HTML, então trocar a marca (o arquiteto-de-marca faz isso no onboarding e
 * depois) não invalidava carimbo nenhum — provado na integração: tokens.css trocado (fonte inexistente,
 * --piso-rotulo 150) e a rodada seguinte dizia "✓ todas as cenas já estavam verdes e inalteradas".
 * Agora o carimbo leva `hash_marca` (sha1 do tokens.css resolvido e de cada fonte que ele declara —
 * lib/marca-tokens.mjs › hashDependenciasMarca), e a retomada exige os DOIS iguais. O `hash` segue
 * sendo só o do HTML: é o que o XML do motor (src/finalize/xml-premiere.mjs) compara.
 */
let HASH_MARCA;
try { HASH_MARCA = hashDependenciasMarca(lerMarca()); }
catch (e) { console.error(`✗ não consegui ler a marca do canal: ${e.message}`); process.exit(NAO_MEDIDO); }

/**
 * [porte Régie] CADA CENA NO SEU PROJETO. O estúdio lia e gravava o carimbo em
 * `dirname(dirname(htmls[0]))`: com cenas de dois projetos na linha de comando, o carimbo da segunda
 * ia para o _portao.json do PRIMEIRO projeto (e o XML do segundo não achava carimbo nenhum). Agora a
 * cena vai para o projeto dela (lib/qc-cena-gates.mjs › projetoDaCena); cena solta, fora de
 * out/<proj>/graphics/, é medida e NÃO é carimbada — e a rodada diz isso.
 */
const PROJETO = new Map(htmls.map((h) => [h, projetoDaCena(h)]));
const projetos = [...new Set([...PROJETO.values()].filter(Boolean))];
const semProjeto = htmls.filter((h) => !PROJETO.get(h));

/**
 * ⚠️ RETOMADA: CENA COM CARIMBO VÁLIDO NÃO É REGATEADA.
 *
 * O carimbo de `_portao.json` é ancorado no HASH do HTML. Se o conteúdo não mudou, o veredito de
 * antes continua verdadeiro — e re-medir custa ~1,4 s de Chrome por cena, à toa.
 *
 * Medido em 26/jul: o revisor autônomo chama este runner como pré-requisito a cada lançamento, e
 * varria as 76 cenas do zero toda vez (~10 min) antes de julgar a primeira. Duas varreduras
 * simultâneas (76 + 65 cenas) chegaram a disputar o mesmo Mac. Computação é barata, mas desperdício
 * que atrasa trabalho não é barato — é atraso.
 *
 * `--forcar` re-mede tudo, para quando se muda um GATE (e não a cena): aí o carimbo antigo foi
 * emitido por uma régua que não existe mais.
 */
if (!flag("forcar")) {
  const antes = htmls.length;
  const carimbos = new Map();
  for (const proj of projetos) {
    const arq = join(proj, "_portao.json");
    if (!existsSync(arq)) { carimbos.set(proj, {}); continue; }
    try { carimbos.set(proj, lerJsonSemBom(arq)); }
    catch (e) { carimbos.set(proj, {}); console.log(`  ⚠ ${arq} ilegível (${e.message}) — re-medindo tudo deste projeto`); }
  }
  const pular = new Set();
  let regua_velha = 0, marcaMudou = 0;
  for (const h of htmls) {
    const c = (carimbos.get(PROJETO.get(h)) || {})[basename(h)];
    if (!c || !c.ok) continue;                       // sem carimbo, ou reprovada: re-mede
    /**
     * ⚠️ CARIMBO SEM `indefinidos` É DE OUTRA RÉGUA — e é o passivo inteiro (05/ago/2026).
     *
     * Até hoje o carimbo não registrava o que NÃO foi medido, então um `ok:true` emitido por uma
     * passada em que nenhum gate rodou é indistinguível de um `ok:true` legítimo. Pular a cena por
     * causa dele é o que tornava o verde falso PERMANENTE: a máquina saudável nunca mais a olhava.
     *
     * Carimbo com o campo e com a lista vazia continua valendo (retomada segue de graça). Carimbo
     * com indefinidos, ou sem o campo, volta para a fila — é exatamente o caso que a `--forcar`
     * documenta: *"o carimbo antigo foi emitido por uma régua que não existe mais"*, só que agora o
     * código percebe isso sozinho, em vez de depender de alguém lembrar de passar a flag.
     */
    if (!Array.isArray(c.indefinidos)) { regua_velha++; continue; }
    if (c.indefinidos.length) continue;
    // [porte Régie] carimbo de outra marca (ou de antes do hash_marca) é de outra régua: re-mede
    if (c.hash_marca !== HASH_MARCA) { marcaMudou++; continue; }
    try {
      if (createHash("sha1").update(readFileSync(h)).digest("hex").slice(0, 12) === c.hash) pular.add(h);
    } catch { }
  }
  if (pular.size) {
    for (let i = htmls.length - 1; i >= 0; i--) if (pular.has(htmls[i])) htmls.splice(i, 1);
    console.log(`  ↩ ${pular.size} de ${antes} cena(s) com carimbo válido — puladas (use --forcar para re-medir)`);
  }
  if (regua_velha) console.log(`  ↻ ${regua_velha} cena(s) com carimbo de régua ANTIGA (sem registro do que não foi medido) — re-medindo`);
  if (marcaMudou) console.log(`  ↻ ${marcaMudou} cena(s) carimbada(s) com OUTRA marca (tokens.css ou fonte mudou desde o carimbo) — re-medindo`);
  if (!htmls.length) { console.log("✓ todas as cenas já estavam verdes e inalteradas."); process.exit(0); }
}

// ⚠️ TETO DE ESPERA — sem ele o portão trava a LINHA INTEIRA (27/jul/2026).
//
// O `execFile` sem `timeout` espera para sempre. Um QC que pendura no Chrome (que não sobe porque a
// GPU está ocupada, porque a máquina saturou, porque o perfil travou) nunca devolve — e como o
// render só começa depois do portão, a produção para sem erro nenhum no log.
//
// Aconteceu duas vezes no mesmo dia, nas duas máquinas: no Mac, `qc-carga`, `check-overlap` e
// `qc-fora-do-quadro` ficaram a **0,0% de CPU por 6 minutos** com o Premiere aberto disputando GPU;
// na VM, a estação de arte do `el-nino` encerrou dizendo *"o portão ainda roda em background, vou
// aguardar sua conclusão"* — e virou `bloqueado`.
//
// Processo que não termina é pior que processo que falha: falha tem código de saída e alguém trata.
// Com o teto, o QC pendurado vira uma FALHA NOMEADA — a cena não é aprovada, mas a fila anda.
const TETO_MS = +(process.env.QC_TIMEOUT_MS || 180000);   // 3 min por QC: folgado para 4K, finito

/**
 * ⚠️ O TETO É POR CHAMADA, MAS TRÊS GATES RECEBEM O LOTE INTEIRO — e aí 3 min não bastam.
 *
 * `qc-tamanho`, `_audit-til` e `qc-src-existe` são invocados com TODAS as cenas de uma vez
 * (`[...htmls]`), enquanto os demais rodam por cena. Com o teto fixo, um projeto grande estoura
 * e **o lote inteiro vira `indefinido` de uma só vez** — não uma cena, todas.
 *
 * Medido em 07/ago/2026 no `orcas-nao-matam`: 13 verdes, **1 falha real** e **14 "indefinido"**,
 * com o gate `tamanho` faltando nas 14. Rodado isolado numa cena, o mesmo gate devolve exit 0 em
 * segundos. Não estava quebrado: não cabia no relógio. E 13 dessas 14 já tinham clipe renderizado
 * de quando ele cabia — o projeto ficou irrenderizável por ter CRESCIDO.
 *
 * O teto passa a escalar com o tamanho do lote, como o prazo do portão já faz ([REND-82]).
 * Uma cena continua com os 3 min de sempre; 81 cenas ganham 3 min + 4 s por cena.
 *
 * ⚠️⚠️ E ELE TAMBÉM TEM DE ESCALAR COM A CARGA — o mesmo relógio, outra variável (07/ago/2026).
 *
 * Escalar por TAMANHO DE LOTE resolve metade: a chamada cresce com o número de cenas. A outra
 * metade é que **a mesma chamada, com a mesma cena, demora o dobro numa máquina cheia**.
 *
 * Medido no `mamute-de-volta`, com a VM a load 72 de 16 núcleos: `qc-carga` numa cena SOZINHA levou
 * **200 s e PASSOU** (`✓ dentro dos tetos`). O teto do desempate era 180 s — ele matou a medição
 * **20 segundos antes de ela terminar**, e o resultado virou `NÃO MEDIDO`, que reprova a cena.
 * *A cena era boa, o gate funcionava, e o veredito foi não porque o relógio do juiz era curto.*
 *
 * Isto é o irmão de carga da [REND-82] (que era de tamanho) e fecha a mesma família que mordeu três
 * vezes hoje: **limite fixo cobrindo trabalho de duração variável**. Aqui a variável é a saturação,
 * e ela sobe justamente quando o estúdio produz mais — ou seja, o gate fica mais rígido exatamente
 * quando a máquina está mais ocupada, que é o pior momento possível para endurecer.
 *
 * O fator é a saturação real (`load / núcleos`), com piso 1 (máquina folgada não muda nada) e teto
 * 4× (acima disso o problema é outro, e esticar o relógio só adia o diagnóstico).
 */
// [porte Régie] a carga de estimarCarga() (load average, ou a ocupação da CPU no Windows) no lugar de
// /proc/loadavg e de `uptime` pelo shell. Carga não medida = fator 1 (o teto do tamanho do lote).
const saturacao = Math.min(4, Math.max(1, (CARGA.carga || 0) / (os.cpus().length || 1)));
const tetoPara = (n) => Math.min(Math.round((TETO_MS + Math.max(0, n - 1) * 4000) * saturacao), 20 * 60_000);

const run = (script, args, cenasEquivalentes = null) => new Promise((res) => {
  // [porte Régie] PORTÃO AUSENTE NO CANAL = NÃO MEDIDO. Sem esta porta o execFile falharia com
  // MODULE_NOT_FOUND e sairia 1 — "medi e reprovei" — sobre uma cena que ninguém olhou.
  if (!existeScript(script)) {
    return res({ code: NAO_MEDIDO, estourou: false, ausente: true,
      out: `⚠ NÃO MEDIDO — o portão ${script} não existe neste canal (não veio do estúdio, ou foi apagado)` });
  }
  const t0 = Date.now();
  // quantos HTMLs há nesta chamada — é o que decide o relógio.
  // ⚠️ Gate que recebe a PASTA do projeto (e não a lista de .html) mediria o teto de UMA cena e
  // seria morto no meio: `cenasEquivalentes` deixa o chamador declarar o tamanho real do trabalho.
  const nCenas = cenasEquivalentes ?? Math.max(1, args.filter((a) => String(a).endsWith(".html")).length);
  const TETO = tetoPara(nCenas);
  // [porte Régie] o node que está rodando (no Windows "node" pode não estar no PATH do processo) e sem janela
  execFile(process.execPath, ["--no-warnings", join(RAIZ, script), ...args],
    { cwd: RAIZ, maxBuffer: 32 << 20, timeout: TETO, killSignal: "SIGKILL", windowsHide: true },
    (err, stdout, stderr) => {
      const estourou = err && (err.killed || err.signal === "SIGKILL") && Date.now() - t0 >= TETO - 500;
      res({
        code: err ? (err.code ?? 1) : 0,
        estourou,
        out: `${stdout || ""}${stderr || ""}${estourou ? `\n✗ ${script} não respondeu em ${TETO / 1000}s (lote de ${nCenas} cena[s]) e foi encerrado — QC pendurado (Chrome não subiu?) não pode travar a fila` : ""}`,
      });
    });
});

// pool de N promessas sobre uma fila de tarefas
/**
 * `aoTerminar` avisa a cada tarefa concluída, em vez de só devolver tudo no fim.
 *
 * Não é enfeite: sem ele o `laudo` fica VAZIO durante toda a execução do pool — que é justamente
 * onde o tempo é gasto — e o resultado de cada gate só era registrado depois do `await`, num for
 * sobre o array já completo. Um processo morto no meio do pool tinha, portanto, medido dezenas de
 * cenas e não sabia de nenhuma. Quem quiser persistir progresso precisa do dado enquanto ele nasce.
 */
async function pool(tarefas, n, aoTerminar) {
  const fila = [...tarefas]; const resultados = [];
  await Promise.all(Array.from({ length: n }, async () => {
    while (fila.length) {
      const t = fila.shift();
      const r = await t.fn();
      resultados.push([t.key, r]);
      if (aoTerminar) { try { aoTerminar(t.key, r); } catch { } }
    }
  }));
  return resultados;
}

// resultado por cena: { contrato, guardrail, overlap, tamanho, til } → {ok, linha}
const laudo = new Map(htmls.map((h) => [h, {}]));
const linhaChave = (out, re) => (out.split("\n").find((l) => re.test(l)) || "").trim();
const GATES = ["contrato", "carga", "overlap", "tamanho", "til", "src", "quadro", "mapa", "credito"];
const NOMES = NOMES_GATES_QC_CENA;
/**
 * Quais gates cada cena DEVE ter medido — populado lá embaixo, ao montar as tarefas (a lista depende
 * do conteúdo: mapa e crédito só entram onde fazem sentido). Declarado AQUI, no topo, e não junto de
 * onde é preenchido, porque o handler de sinal logo abaixo o lê: `const` tem zona morta temporal, e
 * uma referência antes da declaração lançaria dentro do handler, no pior momento possível.
 */
const esperados = new Map();

/**
 * ══ SALVAR O QUE JÁ SE MEDIU AO SER MORTO (11/ago/2026, `dentro-do-sol`) ══════════════════════
 *
 * O carimbo era escrito UMA vez, no fim de tudo. Quem matasse o processo no meio — `timeout`, fim de
 * sessão headless, rate limit derrubando o pai — perdia o veredito de TODAS as cenas, inclusive das
 * que já tinham fechado todos os gates. E o Chrome já gasto não volta.
 *
 * Medido duas vezes no mesmo projeto, com 24 h de intervalo, nas mesmas 4 cenas (`s33`, `s51`,
 * `s53`, `s68` — duas com footage de 200 e 317 MB): a passada de 03:42Z registrou no diário *"rodei
 * qc-cena para carimbar"* e o `_portao.json` continuou com 85 carimbos para 89 HTMLs; a de 04:41Z
 * rodou 15 min sob `timeout 900`, morreu com **EXIT=143** e não escreveu uma linha. Duas passadas,
 * meia hora de Chrome, zero carimbo — e cena sem carimbo é **barrada no render**, então o defeito
 * não atrasa só o QC: ele trava o vídeo, em silêncio, num ponto onde ninguém procura.
 *
 * Persistir só as cenas COMPLETAS é deliberado. Cena com gate ainda por medir sai daqui de fora, e
 * não porque um carimbo `ok:false` fosse perigoso — ele não é, "sem carimbo" e "carimbo com
 * indefinidos" já barram igual — mas porque a próxima passada re-mede as duas do mesmo jeito, e
 * escrever meia-medição só enche o portão de linha que não informa nada.
 *
 * O ganho é o trabalho TERMINADO: num lote de 30 cenas cortado na 25ª, hoje se perde 25 e a partir
 * daqui se perde 5. *Trabalho caro se persiste quando fica pronto, não quando o programa acaba.*
 */
/**
 * [porte Régie] UMA ENTRADA DO CARIMBO. `hash` segue sendo o sha1 do HTML (o XML do motor compara
 * só ele); `hash_marca` é a marca que a medida usou (I9); `fora_do_portao` diz o que a cena pediria e
 * o canal não tem (hoje, mapa-vivo em cena de mapa) — o ok:true dela não cobre aquela pergunta.
 */
const entradaCarimbo = (h, { ok, falhas, indefinidos }) => {
  let fonte = ""; try { fonte = readFileSync(h, "utf8"); } catch { }
  return {
    ok,
    hash: createHash("sha1").update(readFileSync(h)).digest("hex").slice(0, 12),
    hash_marca: HASH_MARCA,
    em: new Date().toISOString(),
    falhas,
    indefinidos,
    fora_do_portao: chavesForaDoPortaoQcCena(fonte, { existe: existeScript }).map((g) => NOMES_GATES_QC_CENA[g]),
  };
};

/**
 * [porte Régie] Grava as entradas no _portao.json de CADA projeto. Devolve os projetos em que a
 * gravação falhou, com o motivo — o qc-cena os imprime e sai 2: laudo verde no terminal com carimbo
 * velho no disco era o pior dos mundos (o XML listava a cena como vencida e ninguém sabia por quê).
 */
function gravarCarimbos(porCena) {
  const porProjeto = new Map();
  for (const [h, entrada] of porCena) {
    const proj = PROJETO.get(h);
    if (!proj) continue;
    (porProjeto.get(proj) || porProjeto.set(proj, {}).get(proj))[basename(h)] = entrada;
  }
  const erros = [];
  let gravadas = 0;
  for (const [proj, parcial] of porProjeto) {
    const arq = join(proj, "_portao.json");
    try { fundirCarimboPortao(arq, parcial); gravadas += Object.keys(parcial).length; }
    catch (e) { erros.push({ arq, motivo: String(e?.message || e).split("\n")[0] }); }
  }
  return { gravadas, erros };
}

const carimbarCompletas = (motivo) => {
  try {
    const porCena = [];
    for (const h of htmls) {
      const L = laudo.get(h), esp = esperados.get(h);
      if (!esp || esp.some((g) => !L[g])) continue;            // ainda falta gate: fica de fora
      const falhas = esp.filter((g) => !L[g].ok);
      porCena.push([h, entradaCarimbo(h, { ok: falhas.length === 0, falhas: falhas.map((g) => NOMES[g]), indefinidos: [] })]);
    }
    if (!porCena.length) return 0;
    const { gravadas, erros } = gravarCarimbos(porCena);
    if (gravadas) console.log(`\n  ⛑ ${motivo}: ${gravadas} cena(s) com todos os gates medidos foram carimbadas antes de sair.`);
    for (const e of erros) console.log(`  ⚠ carimbo NÃO gravado em ${e.arq}: ${e.motivo}`);
    return gravadas;
  } catch { return 0; }
};
for (const sig of ["SIGTERM", "SIGINT", "SIGHUP"]) {
  process.on(sig, () => { carimbarCompletas(`interrompido por ${sig}`); process.exit(sig === "SIGINT" ? 130 : 143); });
}

// ⚠️ "NÃO CONSEGUI MEDIR" NÃO É "MEDI E REPROVEI" — e tratá-los igual barrou cena boa (28/jul).
//
// Era `ok: r.code === 0`, o que faz QUALQUER saída não-zero reprovar a cena: exit 1 (mediu e
// achou falha, legítimo), exit 2 (erro de uso), crash do node, e timeout. Na VM sem GPU o
// `qc-carga` CRASHA — `ContextResult::kTransientFailure: Failed to send GpuControl` — e as 9
// cenas restantes do `el-nino` foram carimbadas como reprovadas sem nunca terem sido medidas.
// O render então se recusa a gastar em cena "reprovada" e o vídeo trava sem defeito nenhum.
//
// Por convenção da casa, os gates saem 1 quando MEDEM e reprovam. Então:
//   code 0 ......................... passou
//   code 1 ......................... mediu e reprovou → falha de verdade
//   code >=2, crash ou timeout ..... NÃO MEDIU → indefinido, e indefinido NÃO reprova
// Deixar `undefined` faz a cena cair na lista de `indefinidos`, que já existe e é reportada —
// visível para quem lê, sem barrar o render por uma ferramenta que não rodou.
const veredito = (r) => (r.code === 0 ? { ok: true } : (r.code === 1 && !r.estourou) ? { ok: false } : null);

// ── 1 · GATES EM LOTE (um Chrome por bloco) ──────────────────────────────────
// qc-tamanho e _audit-til nasceram sabendo processar vários arquivos numa sessão só de Chrome.
// [porte Régie] Em BLOCOS de cenas (lib/qc-cena-gates.mjs › emBlocos): o Windows corta a linha de
// comando em 32.767 caracteres, e com caminhos de ~120 o lote inteiro de ~250 cenas não cabia — o
// spawn falhava e tamanho e til viravam NÃO MEDIDO no projeto todo. Os blocos de um gate rodam em
// série (um Chrome por gate por vez); com --conc=1 os dois gates também rodam um depois do outro.
const PASSO = opt("passo", "");
const emSerie = async (script, argsDoBloco) => {
  const out = [];
  for (const bloco of emBlocos(htmls)) out.push({ bloco, res: await run(script, argsDoBloco(bloco)) });
  return out;
};
const tamanhoLote = () => emSerie(SCRIPTS_GATES_QC_CENA.tamanho.script, (bloco) => argumentosQcTamanho({ htmls: bloco, passo: PASSO }));
const tilLote = () => emSerie(SCRIPTS_GATES_QC_CENA.til.script, (bloco) => bloco);
/**
 * [porte Régie] src-existe POR CENA. O estúdio passava a pasta do projeto da PRIMEIRA cena e dava
 * "src ok" a toda cena que não aparecesse como [FALTA] — inclusive às de outro projeto, que nem eram
 * varridas. E se a pasta não tinha graphics/, o gate morria com exit 1 e nenhuma linha [FALTA]: o
 * agregador lia "reprovou" e, sem linha, aprovava todas. Provado na integração: cena de out/b com
 * <img> apontando para arquivo inexistente saía "✓ 2/2" (e carimbada em out/p). Agora cada cena é
 * medida por si (é leitura de texto: milissegundos) e só a cena que o gate cobriu recebe veredito.
 */
const srcPorCena = async () => {
  const r = new Map();
  await pool(htmls.map((h) => ({ key: h, fn: () => run(SCRIPTS_GATES_QC_CENA.src.script, [h]) })), 4, (h, res) => r.set(h, res));
  return r;
};
let tamLotes, tilLotes, srcRes;
if (CONC === 1) { tamLotes = await tamanhoLote(); tilLotes = await tilLote(); srcRes = await srcPorCena(); }
else [tamLotes, tilLotes, srcRes] = await Promise.all([tamanhoLote(), tilLote(), srcPorCena()]);

// tamanho: JSON com {file, falhas[]}
// A leitura vira função porque o DESEMPATE (§2.5) re-roda o MESMO gate com um arquivo só e
// precisa interpretar a saída do mesmo jeito — dois parsers para um formato divergem.
const lerTamanho = interpretarSaidaQcTamanho;
for (const { bloco, res } of tamLotes) {
  const m = lerTamanho(res.out);
  for (const h of bloco) { const v = m.get(basename(h)); if (v) laudo.get(h).tamanho = v; }
}

/**
 * ⚠️ SAÍDA VAZIA NÃO É APROVAÇÃO — os dois gates de LEITURA fabricavam `ok:true` do nada.
 *
 * O padrão dos dois blocos abaixo é "quem não aparece na lista de afetados passou". Isso está certo
 * quando a ferramenta RODOU: aí a lista vazia significa mesmo "não achei nada". Mas quando ela
 * crashou, estourou o teto de espera ou saiu 2 por erro de uso, a saída também vem vazia — e o
 * código lia isso como aprovação para TODAS as cenas de uma vez. Gate que não rodou virava carimbo
 * verde no lote inteiro.
 *
 * O `veredito()` acima já sabe a diferença; faltava consultá-lo. Quando ele diz `null` (não mediu), o
 * gate fica sem entrada no laudo — isto é, cai na lista de `indefinidos`, que agora invalida o carimbo.
 */
// til: linhas "<file>\t<TIPO>\t<peso>\t<id>\t<texto — detalhe>" para os afetados; exit 1 se achou
// [porte Régie] o laudo diz QUAL defeito (TIL, CEDILHA, GLIFO-RESERVA, FAMILIA-AUSENTE, FORA-DA-MARCA) —
// o estúdio escrevia sempre "Bold defeituoso (use 900/Helvetica)", o conserto de UMA fonte.
// [porte Régie] Saída 2 com o rodapé "== N arquivo(s) … ==" quer dizer que o gate RODOU e só algumas
// cenas não abriram (linha ERRO): as outras têm veredito. Sem o rodapé, o gate não rodou — o bloco
// inteiro fica NÃO MEDIDO.
const TIL_CONCLUIU = /^== \d+ arquivo\(s\) com glifo/m;
let tilSemMedida = 0;
for (const { bloco, res } of tilLotes) {
  const v = veredito(res);
  if (v === null && !(res.code === NAO_MEDIDO && TIL_CONCLUIU.test(res.out))) { tilSemMedida += bloco.length; continue; }
  const porArquivo = new Map();
  for (const l of res.out.split(/\r?\n/).filter((x) => x.includes("\t"))) {
    const [arq, tipo, peso, , txt] = l.split("\t");
    if (tipo === "ERRO") continue;
    (porArquivo.get(arq) || porArquivo.set(arq, []).get(arq)).push(`${tipo}@${peso} ${(txt || "").slice(0, 60)}`);
  }
  // a cena que o _audit-til não conseguiu abrir (linha ERRO) fica SEM veredito: NÃO MEDIDO
  const erroEm = new Set(res.out.split(/\r?\n/).filter((x) => x.split("\t")[1] === "ERRO").map((x) => x.split("\t")[0]));
  for (const h of bloco) {
    if (erroEm.has(h)) continue;
    const d = porArquivo.get(h);
    laudo.get(h).til = { ok: !d, linha: d ? d.slice(0, 2).join(" · ") : "" };
  }
}
if (tilSemMedida) console.log(`  ⚠ til-glifo NÃO MEDIDO (o gate não rodou) — ${tilSemMedida} cena(s) ficam sem carimbo válido`);

// src-existe, por cena: linhas "  [FALTA|VAZIO] <basename>: <src>"
// exit 0 = passou · exit 1 COM linha [FALTA|VAZIO] = reprovou · exit 1 SEM linha (o gate morreu) ou ≥2 = NÃO MEDIDO
let srcSemMedida = 0;
for (const h of htmls) {
  const res = srcRes.get(h);
  const linhas = [];
  for (const l of String(res?.out || "").split(/\r?\n/)) { const m = l.match(/\[(FALTA|VAZIO)\]\s+([^:]+):\s*(.+)/); if (m) linhas.push(`${m[1]} ${m[3].trim()}`); }
  const v = res ? veredito(res) : null;
  if (v === null || (!v.ok && !linhas.length)) { srcSemMedida++; continue; }
  laudo.get(h).src = { ok: v.ok, linha: linhas.join(" · ") };
}
if (srcSemMedida) console.log(`  ⚠ src-existe NÃO MEDIDO em ${srcSemMedida} cena(s) (o gate não rodou) — ficam sem carimbo válido`);

// ── 2 · GATES POR-CENA (um Chrome cada, em pool) ─────────────────────────────
//
// A TABELA É A FONTE ÚNICA de "como se roda cada gate por-cena". O pool a usa na primeira passada
// e o DESEMPATE (§2.5) a usa para re-rodar sozinho — se cada um tivesse a sua cópia, o desempate
// acabaria medindo com uma régua diferente da que reprovou.
//
// · CARGA (ARTE-59): substituiu o `guard-rail`, que contava só `.lbl,#hero` — o que o autor lembrou
//   de marcar — e por isso dava verde em cena poluída (medido: "PICO 3 ✓" num frame com 26 blocos
//   de texto). O `qc-carga` conta todo elemento visível, com tetos calibrados nos dourados.
// · OS DOIS DE 25–26/jul nasceram fora deste agregador e por isso NUNCA rodavam sozinhos — a mesma
//   doença que este arquivo existe para curar (gate que só dispara se alguém lembrar é gate morto):
//     fora-do-quadro — texto cortado pela borda, quase sempre por movimento (push-in empurra para
//       fora o que estava perto da margem). Varre a duração inteira; o frame 0 não pega.
//     mapa-vivo      — cena de mapa que renderiza com o tile faltando: o buraco só aparece no 4K.
// [porte Régie] o caminho de cada script vem da tabela única (lib/qc-cena-gates.mjs)
const S = SCRIPTS_GATES_QC_CENA;
const GATE_CENA = {
  contrato: { script: S.contrato.script, regex: /✗/ },
  carga: { script: S.carga.script, regex: /✗/ },
  overlap: { script: S.overlap.script, regex: /par\(es\) com|✗/ },
  quadro: { script: S.quadro.script, regex: /✗/ },
  mapa: { script: S.mapa.script, regex: /✗/ },
  // crédito-fantasma (10/ago): a linha de atribuição legível ANTES da mídia que ela credita. Medido em
  // 4 cenas do `quao-fundo-terra` (s24 3,55 s · s77 7,5 s · s109 ~17 s de crédito no ar sem a foto).
  // Nenhum gate acima faz essa pergunta: `overlap` mede COLISÃO, `carga` mede QUANTIDADE, `til` mede GLIFO.
  credito: { script: S.credito.script, regex: /✗/ },
};

/**
 * ⚠️ "GATE ESPERADO" É POR CENA, NÃO A LISTA INTEIRA — e confundir os dois seria alarme falso em massa.
 *
 * O `mapa-vivo` só roda onde há mapa (rodar nas outras é Chrome gasto à toa). Se o veredito exigisse
 * os 8 gates de toda cena, TODA cena sem mapa nasceria "não medida" e o portão fecharia o estúdio
 * inteiro. Então cada cena declara aqui quais gates DEVIAM ter veredito, e é contra essa lista — não
 * contra `GATES` — que se conta o que faltou.
 */
// [porte Régie] os esperados de cada cena saem de chavesGatesEsperadosQcCena() (lib/qc-cena-gates.mjs).
/**
 * ⚠️ CENA DE MAPA NUNCA FECHAVA A CARGA — e o runner não repassava o remédio (04/ago/2026).
 *
 * O `qc-carga` sonda a cena de 0,1 em 0,1 s. Numa cena com terreno DEM ou footage 4K pesado, cada
 * sonda espera o Chrome desenhar e o gate estoura o teto: volta `código ≠ 1`, vira **indefinido**, e
 * o relatório diz "não medido" — que, pela regra da casa, não é aprovação nem reprovação. O remédio
 * existe e está documentado no próprio briefing das estações (`--passo=0.5`), mas o runner chamava
 * `run(script, [h])` com o HTML e mais nada: a flag que o operador passava para o RUNNER morria aqui.
 *
 * O custo era invisível e recorrente. Medido nesta estação: TODA cena de mapa (15 no
 * `o-acre-o-estado-que-o`) voltava "carga: não medido", e cada agente que consertava uma delas tinha
 * de descobrir sozinho o motivo e re-rodar o gate isolado à mão — três agentes diferentes fizeram
 * exatamente isso no mesmo dia, cada um gastando um Chrome a mais. O gate mais caro do portão era o
 * único que quase nunca produzia veredito.
 *
 * Agora as flags de MEDIÇÃO viajam do runner para o gate que as entende. `--passo` é a que importa
 * (só `qc-carga` a lê); as outras ficam de fora de propósito — flag que o gate não conhece vira
 * argumento posicional e ele tenta abrir "--passo=0.5" como arquivo.
 *
 * ⚠️ O REMÉDIO CHEGOU A UM GATE SÓ, E O OUTRO TRAVOU O VÍDEO POR QUATRO PASSADAS (09/ago/2026).
 *
 * O parágrafo acima diz "as outras ficam de fora de propósito", e a razão dada é verdadeira só pela
 * METADE: o `check-overlap` não entende `--passo=X` **nomeada**, mas entende o passo como SEGUNDO
 * ARGUMENTO POSICIONAL — o próprio cabeçalho dele documenta `<html> [passo=0.2]`. Ele ficou de fora
 * por uma leitura rápida da assinatura alheia, não por decisão.
 *
 * O efeito, medido no `especies-humanas`: a `s40` tem 1,4 GB de footage 4K em três `<video>`, e a
 * 0,2 s são ~230 sondas, cada uma seekando os três. O gate leva **mais de 300 s**; o teto é 180 s.
 * Ele estoura SEMPRE → `indefinido` → carimbo inválido → o render se recusa a gastar → a estação é
 * redespachada e mede de novo, igual. Quatro passadas de render, nenhuma cena a mais, nenhum
 * defeito de arte no caminho.
 *
 * E a ironia que escondia a causa: o teto ESTICA com a saturação (`tetoPara`), então a máquina
 * OCIOSA é o pior caso — teto mínimo de 180 s para um gate cujo custo é de I/O e não muda com a
 * carga. Quem media com a VM cheia via o teto em 720 s e culpava a carga; quem media com ela livre
 * via o teto em 180 s e culpava a cena. *Limite que se move com a métrica errada não protege: ele
 * troca a explicação do erro a cada medição.*
 *
 * Aqui o passo viaja para os QUATRO gates de varredura, na sintaxe que cada um fala. Sem `--passo`
 * explícito nada muda — o default de cada gate continua valendo, e a sensibilidade fina segue
 * sendo a régua padrão. O fora-do-quadro também precisa recebê-lo: mapa pesado era justamente o
 * caso que estourava o teto, mas a antiga implementação repetia 0,2 s mesmo ao recomendar 0,5 s.
 */
const flagsDe = (g) => (!PASSO ? []
  : g === "carga" ? [`--passo=${PASSO}`]        // nomeada: é o que o qc-carga lê
  : g === "overlap" ? [String(PASSO)]           // POSICIONAL: `check-overlap.mjs <html> [passo]`
  : g === "quadro" ? [`--passo=${PASSO}`]       // nomeada: qc-fora-do-quadro aceita desde REND-117
  : g === "credito" ? [`--passo=${PASSO}`]       // nomeada: evita seek fino de footage pesado
  : []);

const tarefas = [];
for (const h of htmls) {
  let fonte = ""; try { fonte = readFileSync(h, "utf8"); } catch { }
  // [porte Régie] os esperados desta cena: base + quadro/mapa SÓ se o script existir no canal + crédito onde há mídia
  const esp = chavesGatesEsperadosQcCena(fonte, { existe: existeScript });
  for (const g of ["contrato", "carga", "overlap", "quadro"]) if (esp.includes(g)) tarefas.push({ key: `${g}|${h}`, fn: () => run(GATE_CENA[g].script, [h, ...flagsDe(g)]) });
  const temMapa = esp.includes("mapa"), temMidia = esp.includes("credito");
  // mapa-vivo só faz sentido onde há mapa — rodar nas outras é Chrome gasto à toa
  if (temMapa) tarefas.push({ key: `mapa|${h}`, fn: () => run(GATE_CENA.mapa.script, [h]) });
  /* crédito-fantasma: mesma economia, com o teste DELIBERADAMENTE FROUXO — `_media/` em qualquer
   * lugar do arquivo, mais uma tag de mídia. Casar `<img … src="…_media/…">` por regex erraria o
   * src montado em JS, o `<video>` com atributos longos e o `srcset` — e a assimetria do erro não é
   * simétrica: rodar à toa custa UM Chrome numa cena que o gate declara "sem mídia real" em
   * segundos; NÃO rodar deixa passar o defeito que ele existe para pegar. */
  if (temMidia) tarefas.push({ key: `credito|${h}`, fn: () => run(GATE_CENA.credito.script, [h, ...flagsDe("credito")]) });
  esperados.set(h, esp);
}


// Registra NO MOMENTO em que cada gate termina — o `laudo` cresce durante o pool, e não de uma vez
// no fim. É o que dá ao handler de sinal algo para salvar.
await pool(tarefas, CONC, (key, r) => {
  const [gate, h] = key.split("|");
  const v = veredito(r);
  if (v === null) return;                         // não mediu → indefinido
  laudo.get(h)[gate] = { ok: v.ok, linha: linhaChave(r.out, GATE_CENA[gate].regex) };
});

/**
 * ══ 2.5 · O DESEMPATE — reprovação medida SOB CONCORRÊNCIA não é veredito, é sintoma ══
 *
 * O bloco de cima (28/jul) já separava "não mediu" de "mediu e reprovou". Não bastou: existe uma
 * terceira categoria, e é a mais traiçoeira — o gate **mediu**, saiu 1 na regra da casa, e o que
 * ele mediu foi a MÁQUINA, não a cena. Cada gate abre o seu Chrome; com vários em paralelo a
 * mídia não termina de carregar dentro do timeout interno e o gate afere um layout que ainda não
 * existe. Exit 1 legítimo, veredito falso.
 *
 * REINCIDÊNCIA MEDIDA. Em 28/jul isso barrou 9 de 41 cenas do `el-nino` e parou o vídeo 2h20; o
 * conserto de então foi só calibrar a concorrência (`--conc=1` passou a valer, o default passou a
 * olhar o load). Em 31/jul voltou: 11 cenas de dois vídeos (`energia-escura`, `uruguai-despovoado`)
 * carimbadas `fora-do-quadro` — com os carimbos no MESMO MILISSEGUNDO, a assinatura do lote. Em
 * 02/ago, re-medidas sozinhas na VM ociosa, **10 das 11 passaram**. Dois dias de produção parada
 * por defeito que não existia. Calibrar concorrência é remédio de sintoma: a máquina fica cheia de
 * novo, e a doença volta.
 *
 * O CONSERTO ESTRUTURAL. Antes de cravar `ok:false` — que é o que o `_render-4k-loop.sh` lê para se
 * recusar a renderizar —, o gate reprovador roda DE NOVO, sozinho, sem nada em paralelo. Só a
 * reprovação que sobrevive isolada vira veredito. A aritmética é trivial e não tem outro lado:
 * re-medir custa um Chrome (segundos); reprovar à toa custa o vídeo travado até um humano
 * investigar um defeito inexistente. E alarme falso é bug de prioridade alta — ele ensina a ler
 * "✗" como ruído, e aí o gate para de proteger justamente quando acerta.
 *
 * QUANDO NÃO RODA. Com `--conc=1` a primeira medição JÁ foi isolada: re-medir na mesma condição
 * não desempata nada, só dobra o custo. O `tamanho` entra pela mesma porta por outro motivo — é
 * gate de LOTE, mede layout num Chrome compartilhado por todas as cenas, e portanto sofre da mesma
 * exposição; só se desempata quando o lote tinha mais de uma cena. `til` e `src` ficam de fora de
 * propósito: são leitura estática do HTML, não medem pixel, e não têm como variar com a carga.
 *
 * E SE A RE-MEDIÇÃO NÃO MEDIR (crash/timeout do Chrome isolado)? Cai na regra de cima: indefinido
 * não reprova — mas ⚠️ desde 05/ago ele tampouco libera: o carimbo fica inválido e o portão do
 * `_render-4k-loop.sh` RECUSA a cena. (Esta frase dizia "sem barrar o render", e era verdade quando
 * foi escrita; depois virou o convite a subestimar exatamente o laço que o bloco abaixo conserta.)
 */
const remedirSozinha = async (gate, h, naoMediu = false) => {
  if (gate === "tamanho") {
    const args = argumentosQcTamanho({ htmls: [h], passo: PASSO, remedir: true, naoMediu });
    return lerTamanho((await run(S.tamanho.script, args)).out).get(basename(h)) ?? null;
  }
  const d = GATE_CENA[gate];
  if (!d) return null;
  if (!existeScript(d.script)) return null;   // [porte Régie] portão ausente: re-medir não cria o arquivo
  /**
   * ⚠️⚠️ AS FLAGS DE MEDIÇÃO TÊM DE VIAJAR AQUI TAMBÉM — e não viajavam (07/ago/2026).
   *
   * Este `run(d.script, [h])` era a MESMA linha pelada que o comentário de 04/ago (acima) condena
   * e diz ter consertado. O conserto de então alcançou a medição em LOTE; o desempate, escrito
   * depois, reintroduziu o defeito no lugar onde ele custa mais caro — porque o desempate é a
   * ÚLTIMA chance de a cena receber veredito. Falhar aqui não devolve "reprovado", devolve
   * **indefinido**, e desde 05/ago indefinido BARRA render.
   *
   * O laço se fechava: `carga` não fecha no lote → vai para o desempate → o desempate re-mede na
   * MESMA condição que já falhou → indefinido de novo → o portão recusa → o `_render-4k-loop.sh`
   * roda outra vez e repete tudo, para sempre. Medido no `orcas-nao-matam`, a 6 cenas de fechar:
   * `c09b`, `c13`, `c14` e `c21` (footage 4K pesado) carimbadas `carga: NÃO MEDIDO` desde 12:29,
   * com duas rodadas de portão inteiras gastas sem produzir um veredito sequer.
   *
   * ESCADA DE PASSO. Quando o gate NÃO MEDIU e o operador não pediu passo nenhum, a re-medição
   * sobe para `--passo=0.5` — o remédio que o briefing das estações já mandava aplicar à mão. Não
   * afrouxa o caminho normal: só entra depois de a sonda fina ter falhado, e a alternativa que ela
   * substitui não é uma medição mais rigorosa, é **nenhuma medição**. Amostragem grossa dá veredito
   * discutível; sonda estourada não dá veredito nenhum e trava o vídeo.
   */
  const flags = [...flagsDe(gate)];
  if (gate === "carga" && naoMediu && !PASSO) flags.push("--passo=0.5");
  const r = await run(d.script, [h, ...flags]);
  const v = veredito(r);
  return v === null ? null : { ok: v.ok, linha: linhaChave(r.out, d.regex) };
};

{
  // [porte Régie] portão ausente no canal não se desempata: re-medir não cria o script
  const desempatavel = (g) => existeScript((GATE_CENA[g] || S[g] || {}).script || "") && (g === "tamanho" ? htmls.length > 1 : !!GATE_CENA[g] && CONC > 1);
  const suspeitas = [];
  /**
   * ⚠️⚠️ O DESEMPATE COBRIA A REPROVAÇÃO E DEIXAVA DE FORA O CASO PIOR: O GATE QUE NÃO MEDIU.
   *
   * A condição era `laudo.get(h)[g] && !laudo.get(h)[g].ok` — exige que o gate TENHA veredito. Um
   * gate que não produziu veredito nenhum (`undefined`) não entrava na re-medição. Só que
   * "não mediu" é a forma MAIS GRAVE de saturação de lote, não a mais leve: o Chrome compartilhado
   * não deu conta e nem chegou a um número.
   *
   * E desde 05/ago **medição ausente BARRA render** (a régua do Mac venceu, com medição). Então o
   * lote saturado passou a produzir `ok:false` em cascata, sem que uma única cena tivesse defeito.
   *
   * Medido em 07/ago/2026 no `mamute-de-volta`, com o portão já em blocos: das 10 primeiras cenas,
   * **10 reprovaram e apenas 1 tinha falha real** (uma colisão). O que barrou as outras 9 foi
   * `tamanho` **indefinido em 10 de 10** — e rodado sozinho, na mesma máquina, o `qc-tamanho` mede a
   * cena inteira sem uma falha. *O gate estava certo, a cena estava certa, e o veredito era não.*
   *
   * Agora o indefinido entra pela mesma porta da reprovação. É o mesmo remédio para a mesma doença
   * — medir sem vizinho —, e ele já estava escrito bem aqui, atendendo metade dos pacientes.
   */
  for (const h of htmls) for (const g of (esperados.get(h) || GATES)) {
    if (!desempatavel(g)) continue;
    const v = laudo.get(h)[g];
    if (v === undefined || !v.ok) suspeitas.push({ g, h, naoMediu: v === undefined });
  }

  if (suspeitas.length) {
    const semMedida = suspeitas.filter((s) => s.naoMediu).length;
    console.log(`  ⚖ ${suspeitas.length} veredito(s) suspeito(s) do lote (conc=${CONC})` +
      `${semMedida ? ` — ${semMedida} deles NÃO MEDIRAM` : ""} — re-medindo cada um SOZINHO antes de cravar…`);
    let absolvidas = 0;
    for (const { g, h, naoMediu } of suspeitas) { // EM SÉRIE: o remédio é justamente não ter vizinho
      const v = await remedirSozinha(g, h, naoMediu);
      const L = laudo.get(h);
      // ⚠️ ISTO NÃO É ABSOLVIÇÃO. A re-medição que não completa converte uma reprovação MEDIDA em
      // indefinido — e antes ainda contava como "absolvida", imprimindo `⚖ era da concorrência, não da
      // cena` sobre defeito real. Indefinido agora invalida o carimbo (ver o veredito abaixo), então a
      // cena não é liberada; o que se conserta aqui é a CONTA e a frase, que mentiam.
      if (v === null) { delete L[g]; console.log(`     ↻ ${basename(h)} [${NOMES[g]}] não mediu sozinha → NÃO MEDIDO (o carimbo fica inválido; não vira aprovação)`); continue; }
      L[g] = v;
      if (v.ok) { absolvidas++; console.log(`     ↻ ${basename(h)} [${NOMES[g]}] PASSA sozinha — a reprovação era da máquina, não da cena`); }
    }
    if (absolvidas) console.log(`  ⚖ ${absolvidas}/${suspeitas.length} reprovação(ões) era(m) da concorrência, não da cena.`);
    else console.log(`  ⚖ todas as ${suspeitas.length} reprovações se confirmaram isoladas — são defeito de verdade.`);
  }
}

/**
 * ══ O VEREDITO — e o TERCEIRO ESTADO, que era calculado e jogado fora (05/ago/2026) ══
 *
 * Este bloco sempre soube separar "não mediu" de "mediu e reprovou": o `veredito()` devolve `null`
 * para crash/timeout/exit≥2, e a lista `indef` existe desde sempre. O defeito era o que se fazia com
 * ela — **nada**. `ok` era `falhas.length === 0`, e falha só conta gate COM veredito; então cena em
 * que nenhum gate mediu saía `ok:true, falhas:[]`.
 *
 * Consequência medida, com cena que reprova de verdade: cortando o teto de espera — a assinatura
 * exata de máquina saturada —, a `01-timeline-B.html` do `contato-et`, que reprova legitimamente por
 * `[carga] 6 entradas na janela de 1 s` e `[tamanho] herói 60<130`, saiu `✓ 1/1 cena(s) passam os
 * gates duros`, exit 0, `_portao.json` = `"ok": true, "falhas": []`. Na passada seguinte, com a
 * máquina sã: `↩ 1 de 1 cena(s) com carimbo válido — puladas`. O `portao_ok()` do
 * `_render-4k-loop.sh` devolveu 0 = **LIBERA RENDER 4K**. Uma passada numa máquina ocupada abençoava
 * o projeto inteiro em definitivo, e a máquina saudável não tinha mais como pegá-lo — o gatilho não é
 * hipotético: este arquivo documenta o QC pendurado a 0,0% de CPU por 6 min, duas vezes no mesmo dia,
 * nas duas máquinas, e a [SIS-98] registra a reincidência em 04/ago no `uruguai-despovoado`.
 *
 * Agora `ok` exige **veredito em todos os gates esperados DESTA cena**, e `indefinidos` vai para o
 * carimbo — é o campo que faltava no único registro que sobrevive.
 */
let reprovadas = 0, naoMedidas = 0;
const relato = [];
for (const h of htmls) {
  const L = laudo.get(h);
  const esp = esperados.get(h) || GATES;
  const falhas = esp.filter((g) => L[g] && !L[g].ok);
  const indef = esp.filter((g) => !L[g]);
  if (falhas.length) reprovadas++; else if (indef.length) naoMedidas++;
  relato.push({
    cena: basename(h), file: h,
    // ⚠️ CONFLITO RESOLVIDO EM 05/ago/2026 — e a decisão veio de MEDIÇÃO, não de preferência.
    //
    // O Mac e a VM atacaram esta linha no MESMO dia e decidiram o OPOSTO:
    //   Mac  `ok: falhas.length === 0 && indef.length === 0`  → medição ausente BARRA render
    //   VM   `ok: falhas.length === 0`                        → só falha real barra
    //
    // Cada lado tinha um caso concreto. O do Mac (`contato-et`): cortando o teto de espera — a
    // assinatura exata de máquina saturada — uma cena que reprova LEGITIMAMENTE (`[carga] 6 entradas
    // em 1 s`, `[tamanho] herói 60<130`) saiu `✓ 1/1 passa`, exit 0, `_portao.json ok:true`, e o
    // `portao_ok()` LIBEROU render 4K. O da VM (`energia-escura`): 41/41 aprovadas com `tamanho`
    // nunca medido.
    //
    // O argumento da VM para não barrar era *"reprovar por medição ausente TRAVARIA A LINHA"* — e
    // isso era **hipótese**, não medida. A Fase 1 mediu hoje, no acervo inteiro: **a onda atribuível
    // ao terceiro estado é ZERO em 617 cenas**; nenhuma muda de veredito. A linha não trava.
    //
    // Hipótese derrubada por medição posterior perde para o caso concreto do outro lado. Fica o
    // comportamento do Mac — não por ser o Mac, mas porque o motivo da VM deixou de valer.
    ok: falhas.length === 0 && indef.length === 0,     // sem falha E sem buraco de medição
    falhas: falhas.map((g) => ({ gate: NOMES[g], detalhe: L[g].linha })),
    indefinidos: indef.map((g) => NOMES[g]),
    gates: esp.map((g) => ({
      gate: NOMES[g],
      status: !L[g] ? "not_measured" : L[g].ok ? "passed" : "failed",
    })),
  });
}

/**
 * ══ O CARIMBO — o que transforma este runner de conselho em PORTÃO ══
 *
 * POR QUE (Mateus, 26/jul): *"o QC também tem que rodar após a criação do HTML, ao invés de ser
 * depois da render e montagem, pois assim ganharemos tempo ao invés de ficar re-renderizando e
 * re-montando toda hora"*. Ele está certo, e o diagnóstico é mais duro que o pedido: os 18 gates
 * existiam e **o render não chamava nenhum**. Rodá-los dependia de alguém lembrar — regra sem
 * verificação automática é regra morta (núcleo §3).
 *
 * O carimbo é a memória do veredito, e é **ancorado no CONTEÚDO**, não na hora: a chave é o hash do
 * HTML. Editou a cena? O hash muda, o carimbo daquela cena deixa de valer, e o render volta a
 * exigir passagem. Não editou? O carimbo continua valendo e re-gatear é de graça (não roda de novo).
 *
 * É isto que o `_render-4k-loop.sh` lê antes de gastar 200 s de máquina numa cena que já se sabia
 * quebrada.
 */
// `indefinidos` é o campo que faltava: sem ele, "gate não rodou" e "gate aprovou" viravam o mesmo
// carimbo verde, e a retomada o tornava PERMANENTE. Ele também data a régua — carimbo sem este campo
// é de antes deste conserto, e a retomada acima o recusa por isso.
// Funde com o que já havia: rodar em 3 cenas não pode apagar o veredito das outras 73.
// [porte Régie] O estúdio engolia a falha aqui ("carimbo é conveniência"). Não é: o XML do motor lê
// este arquivo, e laudo verde com carimbo velho no disco faz a cena aparecer vencida sem motivo
// aparente. Falha de gravação é impressa e a rodada sai 2 (NÃO MEDIDO: o veredito não ficou registrado).
let errosCarimbo = [];
try {
  ({ erros: errosCarimbo } = gravarCarimbos(relato.map((r) => [r.file, entradaCarimbo(r.file, {
    ok: r.ok, falhas: r.falhas.map((f) => f.gate), indefinidos: r.indefinidos,
  })])));
} catch (e) { errosCarimbo = [{ arq: "_portao.json", motivo: String(e?.message || e).split("\n")[0] }]; }

// [porte Régie] o JSON também diz o que o portão não cobre nesta versão
const foraDoPortaoJson = Object.entries(SCRIPTS_GATES_QC_CENA).filter(([, d]) => d.seExistir && !existeScript(d.script)).map(([g]) => NOMES_GATES_QC_CENA[g]);
const carimboJson = {
  gravado: !errosCarimbo.length,
  erros: errosCarimbo,
  semProjeto: semProjeto.filter((h) => htmls.includes(h)),
};
if (JSON_OUT) { console.log(JSON.stringify({ total: htmls.length, reprovadas, naoMedidas, foraDoPortao: foraDoPortaoJson, carimbo: carimboJson, cenas: relato }, null, 1)); }
else {
  // [porte Régie] o cabeçalho lista só os portões que EXISTEM no canal — listar os ausentes sugeria que rodaram
  console.log(`\n══ QC DE CENA (determinístico) — ${htmls.length} cena(s) · gates: ${Object.entries(NOMES).filter(([g]) => existeScript(SCRIPTS_GATES_QC_CENA[g].script)).map(([, n]) => n).join(", ")} ══\n`);
  for (const r of relato) {
    if (r.ok) { console.log(`  ✓ ${r.cena}`); continue; }
    console.log(`  ${r.falhas.length ? "✗" : "⚠"} ${r.cena}`);
    for (const f of r.falhas) console.log(`      [${f.gate}] ${f.detalhe || "reprovou"}`);
    // NÃO MEDIDO aparece com o mesmo peso de uma falha, e diz a consequência: sem isto, quem lê o
    // relatório trata o buraco de medição como detalhe — foi assim que ele virou verde permanente.
    if (r.indefinidos.length) console.log(`      [NÃO MEDIDO] ${r.indefinidos.join(", ")} — o carimbo não libera render enquanto isto não for medido`);
  }
  /**
   * ── GATE DE CONJUNTO · clipe repetido ([ARTE-108]) ──────────────────────────────────────────
   *
   * ⚠️ ESTE RUNNER É O AUTO-QA QUE O `editor-de-arte` RODA — e por não incluir o `qc-clipe-repetido`
   * ele dava VERDE a cenas cuja declaração de reuso estava no lugar errado. O agente tem a doutrina
   * certa e completa (`.claude/agents/editor-de-arte.md` §5: o atributo vai na tag do `src`, o `<div>`
   * pai é invisível, "depois de declarar, RODE o gate"), mas a instrução manda rodar UMA ferramenta e
   * o runner que ele de fato usa rodava OUTRAS NOVE. Quando a instrução compete com a ferramenta, a
   * ferramenta ganha — e o defeito reincidiu três vezes em oito dias: `o-acre` (07/ago, 12
   * declarações escritas à mão pelo QC), `planeta-em-meteorito` (12/ago), `quasares-primordiais`
   * (14/ago, 8 declarações). Cada uma custa um re-render de clipe 4K já pago por um atributo que não
   * muda um pixel. [SIS-396]
   *
   * Roda SÓ no modo projeto: "o mesmo arquivo em duas cenas" não é pergunta que uma cena isolada
   * possa responder. E NÃO reprova — o veredito dele é de conjunto, não carimba `_portao.json` de
   * cena nenhuma; entra como aviso alto para quem está fechando a arte, que é quem ainda tem o
   * contexto para declarar de graça.
   */
  // [porte Régie] um projeto por vez: com dois projetos na linha de comando, o estúdio só olhava o primeiro
  if (MODO_PROJETO) for (const projRaiz of projetos) {
    const rep = await run("scripts/qc-clipe-repetido.mjs", [projRaiz], htmls.filter((h) => PROJETO.get(h) === projRaiz).length || 1);
    if (rep.ausente) {
      // [porte Régie] gate de conjunto que não veio: diz, não cala
      console.log(`\n  ⚠ CLIPE REPETIDO — NÃO MEDIDO: scripts/qc-clipe-repetido.mjs não existe neste canal.`);
    } else if (rep.code !== 0 && rep.code !== 1 && !rep.estourou) {
      console.log(`\n  ⚠ CLIPE REPETIDO — NÃO MEDIDO (o gate saiu ${rep.code}). Gate que não rodou não é gate que aprovou.`);
    } else if (rep.estourou) {
      console.log(`\n  ⚠ CLIPE REPETIDO — NÃO MEDIDO (o gate não respondeu no teto). Gate que não rodou não é gate que aprovou:`);
      console.log(`     rode à mão: node scripts/qc-clipe-repetido.mjs ${basename(projRaiz)}`);
    } else if (rep.code === 1) {
      const linhas = rep.out.split("\n").filter((l) => /^\s*✗/.test(l));
      console.log(`\n  ⚠ CLIPE REPETIDO — ${linhas.length} achado(s) [ARTE-108], gate de CONJUNTO (não reprova cena):`);
      for (const l of linhas.slice(0, 8)) console.log(`     ${l.trim()}`);
      if (linhas.length > 8) console.log(`     … +${linhas.length - 8}`);
      console.log(`     Se o uso é deliberado, o atributo vai DENTRO da tag que tem o \`src\` — \`data-qc-composicao\``);
      console.log(`     (mesma cena) ou \`data-qc-reuso\` (entre cenas, nas DUAS pontas). Comentário no cabeçalho`);
      console.log(`     não conta: o gate lê a tag, não a prosa [ARTE-270].`);
    }
  }

  console.log("\n" + "─".repeat(72));
  const partes = [];
  if (reprovadas) partes.push(`✗ ${reprovadas}/${htmls.length} cena(s) com gate duro reprovando`);
  if (naoMedidas) partes.push(`⚠ ${naoMedidas}/${htmls.length} cena(s) NÃO MEDIDA(S) — gate que não rodou não é gate que aprovou`);
  console.log(partes.length
    ? partes.join("\n") + `\n  Conserte (ou re-meça) ANTES de entregar ao qc-visual / render.`
    : `✓ ${htmls.length}/${htmls.length} cena(s) passam os gates duros. O qc-visual pode julgar só o subjetivo.`);

  /**
   * ⚠️ O RODAPÉ TEM DE DIZER **QUAL** GATE NÃO MEDIU, E EM QUANTAS CENAS — senão o total mente por
   * omissão (medido 03/ago/2026, `energia-escura`).
   *
   * O runner fechou **"41/41 cena(s) passam os gates duros"** com `tamanho` NÃO MEDIDO nas 41 e mais
   * três gates ausentes na `c39` (footage 4K de 87 MB que não fecha no passo padrão). Zero gate de
   * tamanho executado, e o laudo dizendo que os gates duros passaram. O parêntese com os gates
   * ausentes ficava lá em cima, uma linha por cena, fácil de passar batido.
   *
   * Silêncio e aprovação parecem iguais no rodapé; é o rodapé que tem de separar os dois — e dizer o
   * remédio, senão cada agente redescobre o `--passo=0.5` sozinho, gastando um Chrome a mais por vez.
   */
  // [porte Régie] O QUE O PORTÃO NÃO COBRE NESTA VERSÃO, em toda rodada — ausência calada vira verde.
  const foraDoPortao = Object.entries(SCRIPTS_GATES_QC_CENA).filter(([, d]) => d.seExistir && !existeScript(d.script)).map(([g]) => NOMES[g]);
  if (foraDoPortao.length) console.log(`\n  ⊘ fora do portão nesta versão da Régie (não vieram do estúdio): ${foraDoPortao.join(", ")} — o verde acima não os inclui.`);
  const semMedir = relato.filter((r) => r.indefinidos.length);
  if (semMedir.length) {
    const porGate = {};
    for (const r of semMedir) for (const g of r.indefinidos) porGate[g] = (porGate[g] || 0) + 1;
    console.log(`\n▲ ${semMedir.length} cena(s) com medição FALTANDO, por gate:`);
    for (const [g, n] of Object.entries(porGate).sort((a, b) => b[1] - a[1])) console.log(`    ${g}: ${n} cena(s) sem medir`);
    console.log(`  Cena de MAPA (terreno DEM) e FOOTAGE 4K pesado não fecham no passo padrão — re-rode`);
    console.log(`  essas sozinhas com \`--passo=0.5\` e timeout largo antes de tratar o verde como aprovação.`);
  }
}
// [porte Régie] o que não foi carimbado, dito no fim (também no modo --json, pelo stderr)
for (const e of errosCarimbo) console.error(`  ⚠ carimbo NÃO gravado em ${e.arq}: ${e.motivo}`);
if (carimboJson.semProjeto.length) console.error(`  ⓘ ${carimboJson.semProjeto.length} cena(s) fora de out/<proj>/graphics/ — medidas, mas SEM carimbo (não há _portao.json de projeto para elas): ${carimboJson.semProjeto.slice(0, 3).map((h) => basename(h)).join(", ")}${carimboJson.semProjeto.length > 3 ? "…" : ""}`);
// 1 = medi e reprovei · 2 = NÃO MEDI (ou medi e o carimbo não foi gravado) · 0 = tudo medido, aprovado e carimbado.
process.exit(reprovadas ? 1 : (naoMedidas || errosCarimbo.length) ? NAO_MEDIDO : 0);
