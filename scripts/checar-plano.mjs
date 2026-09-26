// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/checar-plano.mjs (linhas 1-198, commit 4afda12).
// O que mudou: lerCortes, a lista de masters e o RELÓGIO do espelho vêm do motor (src/finalize/cortes.mjs, midia.mjs e
// relogio-espelho.mjs — o dono único da pergunta, em vez da regra própria que este gate tinha), com a pasta absoluta que ele
// exige; o master é o da V1 (inclui o sintético preto+narração). FACELESS: as seções 1-2 (Bôco em tela, FIN-47/lei 96,
// infra/faixa-apresentador.json) só rodam com "apresentador": true no canal.json; sem isso o complemento das cenas que animam é
// medido como TELA PRETA até o fim da NARRAÇÃO (narracao.wav ou words.json) — não até o fim do espelho —, e segmento de
// apresentador é avisado. ffprobe por executavelFf (stock/lib/ferramentas.mjs, sob demanda); BOM e JSON quebrado = NÃO MEDIDO.
// Segue advisory (exit 0).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// CHECA O ESPELHO antes de produzir — o "gate de edição" (advisory).
// Mede: % de APRESENTADOR em tela (meta ~20%, picado — FIN-28/29), DISTRIBUIÇÃO do Bôco (lei 96 — picado por todo o
// vídeo, a publi/CTA NÃO conta, sem buraco de minutos), variedade de modos (nada de 3× o mesmo seguido),
// cobertura (buracos sem cena) e sobreposição.
//
// Uso: node scripts/checar-plano.mjs <proj|out/proj|caminho/espelho.json>
//
// AS TRÊS FORMAS SÃO ACEITAS DE PROPÓSITO. Este auto-QA estava PRESCRITO na doutrina e NUNCA RODAVA:
// `out/<proj>` abortava com EISDIR (readFileSync numa pasta) e `<slug>` ia direto no nome LEGADO
// `out/<slug>/plano-roteirista.json`, que não existe em 11 dos 22 projetos — os atuais têm `espelho.json`.
// Só funcionava passando o caminho completo do JSON, que não era o que o prompt do montador mandava rodar.
// Gate que só roda na forma que ninguém usa é gate desligado.
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import { importarDoMotor } from "./lib/motor.mjs";
import { lerJsonOuNaoMedi, canalTemApresentador, tetoDaNarracao, ferramentasOuNaoMedi } from "./lib/modos.mjs";

// [porte Régie] `lerCortes` e a lista de masters moram no MOTOR e são importados (a fonte única de
// src/cortes.mjs do estúdio virou src/finalize/cortes.mjs lá; a assinatura mudou num ponto: a pasta
// tem de ser ABSOLUTA — o `resolve(dir)` abaixo existe por isso).
// Sem motor: NÃO MEDI (exit 2), com a mensagem que diz onde apontar o motor — nunca uma pilha solta.
let lerCortes, candidatosMaster, relogioDoEspelho;
try {
  ({ lerCortes } = await importarDoMotor("src/finalize/cortes.mjs"));
  ({ candidatosMaster } = await importarDoMotor("src/finalize/midia.mjs"));
  ({ relogioDoEspelho } = await importarDoMotor("src/finalize/relogio-espelho.mjs"));   // [porte Régie] [FIN-164] o dono único
} catch (e) { console.error(`checar-plano: NÃO MEDIDO — ${e.message}`); process.exit(2); }
// [porte Régie] ffprobe: FFPROBE_PATH, REGIE_FFPROBE ou o PATH (ffprobe.exe no Windows); array, sem shell. O módulo do canal
// espelha o executável em REGIE_FFPROBE ao ser carregado, e é esse que o relogioDoEspelho do motor usa (decisão I2).
const FF = await ferramentasOuNaoMedi("checar-plano");
const RAIZ = fileURLToPath(new URL("..", import.meta.url));

const arg = process.argv[2];
if (!arg) { console.error("uso: checar-plano.mjs <proj|out/proj|caminho/espelho.json>"); process.exit(2); }

// ── RESOLUÇÃO: arquivo, pasta ou slug — nessa ordem ──────────────────────────
// `espelho.json` é o nome VIVO; `plano-roteirista.json` é o da era-2 e só sobrevive em 7 projetos
// (4 deles já têm os dois). Preferir o espelho e cair no legado só quando o espelho não existe.
const NOMES = ["espelho.json", "plano-roteirista.json"];
const naPasta = (dir) => NOMES.map((n) => join(dir, n)).find(existsSync);

let path = null, dir = null;
const ehDir = existsSync(arg) && statSync(arg).isDirectory();
if (ehDir) { dir = arg; path = naPasta(arg); }
else if (existsSync(arg) && /\.json$/i.test(arg)) { path = arg; dir = dirname(arg); }
else { dir = join("out", arg); path = naPasta(dir); }
// [porte Régie] …e a raiz do CANAL: o terminal do Windows abre em qualquer pasta, não só na raiz.
if (!path && !isAbsolute(arg) && naPasta(join(RAIZ, "out", arg))) { dir = join(RAIZ, "out", arg); path = naPasta(dir); }
if (!path && /^out[\\/]/.test(arg) && naPasta(join(RAIZ, arg))) { dir = join(RAIZ, arg); path = naPasta(dir); }

if (!path) {
  console.error(`checar-plano: não achei espelho em "${arg}".`);
  console.error(`  procurei por: ${NOMES.map((n) => join(dir, n)).join("  ·  ")}`);
  if (!existsSync(dir)) console.error(`  (a pasta ${dir} nem existe — o slug está certo?)`);
  else console.error(`  a pasta existe, mas está sem espelho: rode a estação de espelho (agente montador) antes.`);
  process.exit(2);
}

dir = resolve(dir);   // [porte Régie] o motor recusa pasta relativa
const plano = lerJsonOuNaoMedi(resolve(path), "checar-plano");   // [porte Régie] BOM do Bloco de Notas; quebrado = NÃO MEDIDO
const segs = [...(plano.segmentos || [])].sort((a, b) => a.inSec - b.inSec);
if (!segs.length) { console.error(`${path}: espelho sem segmentos`); process.exit(2); }

// ── CORTES: o eixo do espelho é o BRUTO, e o que foi cortado NÃO É APRESENTADOR ──────────────
// Na edição do zero o `inSec` de cada cena corre no tempo da GRAVAÇÃO, não do vídeo montado. Tudo que
// o decupador mandou fora (claquete, take abortado, silêncio, título lido em voz alta) continua ocupando
// esse eixo — e este gate lia esse vazio como "Bôco em tela". Medido nos 10 projetos que têm `_cortes.json`:
// erro relativo MÉDIO de 43,6% no % de apresentador (odisseia-real 43,6%→18,1%, com 628s de corte dentro
// do intervalo; homossexualidade-antiguidade 38,3%→10,6%). O gate reprovava a meta de 10–15% em TODOS eles,
// inclusive nos que já estavam dentro da meta. Sem `_cortes.json` (projeto pré-editado) `cortado()` é 0 e a
// conta volta a ser exatamente a de antes.
const uniao = (iv) => { const s = [...iv].sort((a, b) => a[0] - b[0]), u = []; for (const [a, b] of s) { if (u.length && a <= u[u.length - 1][1] + 0.01) u[u.length - 1][1] = Math.max(u[u.length - 1][1], b); else u.push([a, b]); } return u; };
const soma = (u) => u.reduce((s, [a, b]) => s + (b - a), 0);

// ⚠️⚠️ …MAS SÓ QUANDO O ESPELHO ESTÁ EM TEMPO BRUTO. Desde 06/ago/2026 ele pode nascer em tempo
// FINAL (escrito sobre `words-final.json`, a transcrição do master JÁ cortado e JÁ com os gaps de card
// materializados), e aí descontar os cortes é aplicar o ripple DUAS VEZES. Medido em 09/ago no
// `itaipu-afogou`: eixo de 671 s que já era o montado, −117 s descontados → "554 s montados", e o Bôco
// saiu 13,7% contra os 12,36% reais. Os dois passam em 10–15%, e é isso que torna o defeito perigoso —
// ele só aparece quando empurra um espelho correto para fora da faixa, e aí o montador conserta o que
// não estava quebrado. Encolher o denominador E o numerador não se cancela: as janelas do apresentador
// não se distribuem como os cortes.
//
// A detecção é a MESMA do `qc-espelho-cortes.mjs` (§RELOGIO) e do `qc-tempo-apresentador.mjs`, de
// propósito: dois gates que decidem o relógio por critérios diferentes acabam discordando sobre o mesmo
// espelho, e aí não há como saber qual acreditar. Sem master no disco assume-se BRUTO — o conservador,
// porque é o que tem contra o que ser medido.
// [porte Régie] …e por isso a regra NÃO mora mais aqui: quem responde é o `relogioDoEspelho` do motor, o mesmo
// que o qc-espelho-cortes importa ([FIN-164]). Esta cópia tinha a régua do estúdio sem o degrau da aritmética
// de cortes, e os dois gates podiam discordar sobre o mesmo espelho — o gêmeo que o cabeçalho acima condena.
const fimEsp = Math.max(...segs.map((s) => s.inSec + s.dur));

// [porte Régie] o master é o que a V1 vai usar (lista do motor): o decupado do estúdio, o editado, ou o
// SINTÉTICO `_media/_master.mp4` (preto + narração) do canal faceless.
const MASTER_DEC = candidatosMaster(dir).find((f) => existsSync(f)) || null;
const rel = relogioDoEspelho(dir, { fimEspelho: fimEsp, master: MASTER_DEC });
const durMaster = rel.durMaster || 0;
const RELOGIO = rel.relogio.toLowerCase();
if (MASTER_DEC && !durMaster) console.log(`⚠️  o master ${MASTER_DEC} está no disco e o ffprobe não o mediu — o relógio saiu de outro degrau (${rel.como})`);   // [porte Régie]

// [porte Régie] ── APRESENTADOR É OPCIONAL DECLARADO ────────────────────────────────────────────────
// As seções 1 e 2 medem o Bôco em tela (FIN-47, lei 96). Num canal faceless não há Bôco: o complemento das
// cenas que animam não é "o apresentador falando", é TELA PRETA — o master sintético do motor é preto com
// a narração por baixo. Então, sem `"apresentador": true` no canal.json, o que se mede é o preto.
// (canal.json ilegível é NÃO MEDIDO: chutar "faceless" trocaria a régua em silêncio.)
const TEM_APRESENTADOR = canalTemApresentador("checar-plano");

let CORTES = [], temCortes = false;
try {
  const r = lerCortes(dir, { silencioso: true });                                            // fonte única (src/cortes.mjs)
  temCortes = r.cortes.length > 0;
  if (RELOGIO === "bruto") CORTES = uniao(r.cortes.map((c) => [c.ini, c.fim]));
} catch (e) { temCortes = true; console.log(`⚠️  _cortes.json ilegível (${e.message.slice(0, 80)}) — medindo sem descontar cortes`); }
if (RELOGIO === "final" && temCortes) {   // [porte Régie] o degrau vem do motor (rel.como): master, words-final ou aritmética
  console.log(`   relógio do espelho: FINAL (${rel.como}: ${rel.detalhe}) — os cortes JÁ estão aplicados no arquivo, não desconto de novo`);
}

/* [porte Régie] NO FACELESS O VÍDEO ACABA COM A NARRAÇÃO, não com o espelho.
 * O complemento das cenas era medido só até o fim do ESPELHO: uma narração de 90 s com espelho até 50 s dava
 * "sem tela preta" — 40 s de preto no fim, sem aviso, e esta é a única checagem que substitui a FIN-47 no
 * faceless (revisão v1). Sem cortes (o faceless da v1) há um relógio só, e o fim do vídeo é o MAIOR entre o fim do espelho, a narração (narracao.wav medida ou o
 * fim do words.json) e o master medido. Narração no disco que o ffprobe não mede é avisada — nunca vira zero. */
let fim = fimEsp, tetoTxt = "";
if (!TEM_APRESENTADOR && !temCortes) {   // com cortes o espelho pode estar em tempo BRUTO: não se mistura com a narração
  const n = tetoDaNarracao(dir, FF);
  if (n.naoMediu) console.log(`⚠️  fim da narração NÃO MEDIDO — ${n.motivo}`);
  const candidatos = [[fimEsp, "espelho"], [n.s || 0, n.de], [durMaster, "master"]];
  const [maior, de] = candidatos.reduce((a, b) => (b[0] > a[0] + 0.5 ? b : a));
  fim = maior;
  if (de !== "espelho") tetoTxt = ` · o vídeo vai até ${fim.toFixed(1)}s (${de}), além do fim do espelho em ${fimEsp.toFixed(1)}s`;
}

const cortado = (a, b) => soma(CORTES.map(([x, y]) => [Math.max(x, a), Math.min(y, b)]).filter(([x, y]) => y > x));
const real = (a, b) => Math.max(0, (b - a) - cortado(a, b));   // duração no vídeo MONTADO
const iv = segs.filter((s) => s.anima).map((s) => [s.inSec, s.inSec + s.dur]);
const uni = uniao(iv);
const emTela = segs.filter((s) => s.modo === "apresentador" || s.modo === "nenhum" || s.anima === false);

// janelas de apresentador = complemento da união das cenas que animam (no eixo do bruto)
const janelasBrutas = []; { let p = 0; for (const [a, b] of uni) { if (a - p > 0.5) janelasBrutas.push([p, a]); p = b; } if (fim - p > 0.5) janelasBrutas.push([p, fim]); }

const durReal = real(0, fim);                                   // o vídeo que o espectador vê
const tTela = janelasBrutas.reduce((s, [a, b]) => s + real(a, b), 0);
const pct = durReal > 0 ? tTela / durReal * 100 : 0;

let warns = 0;
const W = (m) => { console.log("⚠️  " + m); warns++; };
const OK = (m) => console.log("✅ " + m);

console.log(`ESPELHO · ${path} · ${segs.length} segmentos · ${fim.toFixed(0)}s de eixo`
  + (CORTES.length ? ` · −${(fim - durReal).toFixed(0)}s de corte (${CORTES.length} trecho(s)) → ${durReal.toFixed(0)}s montados (~${(durReal / 60).toFixed(1)}min)` : ` (~${(fim / 60).toFixed(1)}min)`)
  + tetoTxt);   // [porte Régie]

if (TEM_APRESENTADOR) {
  // 1. % apresentador — A FAIXA VEM DE `infra/faixa-apresentador.json` (FIN-47), NÃO DAQUI.
  //
  // ⚠️ Este trecho é o exemplo do defeito que ele mesmo descrevia. O comentário anterior dizia, com
  // todas as letras, que *"duas fontes com limiares diferentes para a mesma medida é o defeito que o
  // próprio doctor caça"* — e cravava `pct >= 16 && pct <= 24` enquanto o gate duro cobrava 30–40.
  // Saber a regra não substitui derivar o número: enquanto ele é copiado à mão, ele divergirá.
  const FAIXA = (() => {
    try {
      const m = JSON.parse(readFileSync(new URL("../infra/faixa-apresentador.json", import.meta.url), "utf8"));
      if (m.piso >= 0 && m.teto > m.piso) return { piso: m.piso, teto: m.teto, alvo: m.alvo, lei: m.lei || "FIN-47" };
    } catch { }
    return null;
  })();
  const alvo = FAIXA ? (pct >= FAIXA.piso && pct <= FAIXA.teto) : null;
  (alvo === null ? W : alvo ? OK : W)(
    `apresentador em tela: ${pct.toFixed(1)}% (${tTela.toFixed(0)}s em ${emTela.length} corte(s)) — `
    + (FAIXA ? `alvo ${FAIXA.alvo}%, faixa ${FAIXA.piso}–${FAIXA.teto}% (${FAIXA.lei}; gate duro: qc-tempo-apresentador)`
             : `infra/faixa-apresentador.json ilegível — sem faixa contra que comparar`));

  // 2. distribuição PICADA + LEI 96 (Bôco picado/distribuído; a PUBLI/CTA NÃO conta; sem buraco de minutos)
  const rotWin = (a, b) => { const seg = emTela.find((s) => s.inSec >= a - 1 && s.inSec <= b + 1); return seg ? `${seg.id} ${seg.motivo || ""} ${seg.modo || ""}` : ""; };
  // "cta" precisa de fronteira: sem \b ele casa dentro de "espeCTAdor" e transforma janela de CONTEÚDO em
  // publi/CTA — o vão sem o Bôco vira falso (medido no cerebro-quando-sonha: 203s reportados, 80s reais).
  const ehPubliCta = (a, b) => /publi|patroc|sponsor|manual|\bcta\b|encerr|despedida|like|inscrev|abertura|\bintro/i.test(rotWin(a, b));
  if (uni.length) {
    // janela que sobrou 100% no chão de corte não é janela do Bôco: ela não existe no vídeo montado
    const janelas = janelasBrutas.filter(([a, b]) => real(a, b) > 0.5);
    const publiCta = janelas.filter(([a, b]) => ehPubliCta(a, b));
    const conteudo = janelas.filter(([a, b]) => !ehPubliCta(a, b));
    const tConteudo = conteudo.reduce((s, [a, b]) => s + real(a, b), 0);
    const pctConteudo = durReal > 0 ? tConteudo / durReal * 100 : 0;

    // maior BURACO sem o Bôco DE CONTEÚDO — a publi NÃO tapa o buraco (lei 96): complemento SÓ das
    // janelas de conteúdo, medido em tempo MONTADO (um vão de 10min que é 90% claquete não é vão).
    const semConteudo = []; let q = 0;
    for (const [a, b] of conteudo) { if (a - q > 0.5) semConteudo.push([q, a]); q = b; }
    if (fim - q > 0.5) semConteudo.push([q, fim]);
    let maiorVao = 0, vIni = 0;
    for (const [a, b] of (semConteudo.length ? semConteudo : [[0, fim]])) { const r = real(a, b); if (r > maiorVao) { maiorVao = r; vIni = a; } }
    (maiorVao <= 150 ? OK : W)(`maior buraco SEM o Bôco (publi/CTA não conta): ${maiorVao.toFixed(0)}s @${vIni.toFixed(0)}s — lei 96, alvo ≤ ~150s (picado, várias vezes)`);

    // presença de conteúdo concentrada? (lei 96 — não "quitar" os 15% num trecho/na publi só)
    const minJanelas = Math.max(3, Math.floor(durReal / 150));
    (conteudo.length >= minJanelas ? OK : W)(`janelas do Bôco de CONTEÚDO: ${conteudo.length} (${tConteudo.toFixed(0)}s, ${pctConteudo.toFixed(1)}%) — lei 96 quer o rosto picado em TODO o vídeo (≥${minJanelas}, ~1 por 2–2,5min)`);

    // janela de CONTEÚDO longa = bloco não-picado (publi/CTA PODEM ser longas — não contam)
    for (const [a, b] of conteudo) { const r = real(a, b); if (r > 20) W(`janela de conteúdo LONGA: ${r.toFixed(0)}s @${a.toFixed(0)}s (${rotWin(a, b).trim()}) — lei 96: picado é ≤ ~20s (quebrar com b-roll/animação)`); }

    console.log(`   Bôco: ${conteudo.length} janela(s) de conteúdo${publiCta.length ? ` + ${publiCta.length} de publi/CTA (não conta)` : ""} · ${janelas.map(([a, b]) => `${a.toFixed(0)}s+${real(a, b).toFixed(0)}s`).join(" · ")}`);
  } else W("nenhuma cena animada no espelho?");
} else {
  // [porte Régie] FACELESS — toda janela sem cena que anima é tela preta no vídeo montado.
  const pretas = janelasBrutas.map(([a, b]) => [a, b, real(a, b)]).filter(([, , r]) => r > 0.5);
  if (pretas.length) {
    const tPreto = pretas.reduce((s, [, , r]) => s + r, 0);
    W(`TELA PRETA: ${pretas.length} janela(s) sem cena que anima (${tPreto.toFixed(1)}s) — canal faceless, o master é preto: ` +
      pretas.slice(0, 6).map(([a, , r]) => `@${a.toFixed(1)}s+${r.toFixed(1)}s`).join(" · ") + (pretas.length > 6 ? " …" : ""));
  } else if (uni.length) OK("sem tela preta: toda janela do vídeo tem cena que anima");
  else W("nenhuma cena animada no espelho?");
  const deApresentador = segs.filter((s) => /^apresentador/.test(String(s.modo || "")) || ["M28", "M32", "M33"].includes(s.modelo));
  if (deApresentador.length)
    W(`${deApresentador.length} segmento(s) de APRESENTADOR num canal faceless (${deApresentador.slice(0, 4).map((s) => s.id).join(", ")}) — não há gravação: vira preto`);
}

// 3. variedade: mesmo modo 3× seguido (entre as que animam)
const anim = segs.filter((s) => s.anima);
let rep = 0;
for (let i = 2; i < anim.length; i++)
  if (anim[i].modo === anim[i - 1].modo && anim[i].modo === anim[i - 2].modo) { W(`3× "${anim[i].modo}" seguidas: ${anim[i - 2].id} → ${anim[i].id} — variar o modelo (retenção)`); rep++; }
if (!rep && anim.length >= 3) OK("variedade de modos ok (sem 3× seguidas)");

// 4. cobertura: buracos >25s sem NADA (nem cena nem apresentador) — em tempo MONTADO
let prev = 0, buracos = 0;
for (const s of segs) { const gap = real(prev, s.inSec); if (gap > 25) { W(`BURACO sem cobertura: ${prev.toFixed(0)}s → ${s.inSec.toFixed(0)}s (${gap.toFixed(0)}s montados sem cena nem apresentador)`); buracos++; } prev = Math.max(prev, s.inSec + s.dur); }
if (real(prev, fim) > 25) { W(`BURACO no fim: ${prev.toFixed(0)}s → ${fim.toFixed(0)}s (${real(prev, fim).toFixed(0)}s montados)`); buracos++; }
if (!buracos) OK("cobertura contínua (sem buracos >25s)");

// 5. sobreposição de cenas que animam
// ⚠️ Cena `_mergedInto` (filha de RUN FUNDIDO) vive DENTRO da janela da mãe por design — a mãe cobre
// o run inteiro e a filha é um beat dela, sem HTML nem clipe próprio. Compará-la com a vizinha acusa
// uma "invasão" que é a estrutura funcionando. Mesmo filtro do `despachante.mjs` (idsEspelho) e do
// `cenas-reais.mjs`; quem confere fusão de verdade é `qc-fusao-espelho.mjs`.
// Medido em 10/ago/2026 no `quao-fundo-terra`: 9 avisos falsos (até −22,4 s) num espelho com 0
// sobreposição real, e o rodapé "9 aviso(s) — ajustar o espelho antes de produzir" quase mandou
// refazer 122 cenas ancoradas a 59 HTMLs já pagos. [SIS-…] Aviso falso em ferramenta advisory não é
// ruído inofensivo: ele é lido como veredito por quem chega depois.
const semFundidas = anim.filter((s) => !s._mergedInto && !s.mergedInto);
let overl = 0;
for (let i = 1; i < semFundidas.length; i++) {
  const a = semFundidas[i - 1], b = semFundidas[i];
  if (a.inSec + a.dur - b.inSec > 1.5) { W(`sobreposição: ${a.id} invade ${b.id} em ${(a.inSec + a.dur - b.inSec).toFixed(1)}s`); overl++; }
}
const nFundidas = anim.length - semFundidas.length;
if (!overl && semFundidas.length >= 2) OK(`sem sobreposições relevantes${nFundidas ? ` (${nFundidas} filha(s) de run fundido fora da conta — janela da mãe)` : ""}`);

// resumo de modos
const cont = {}; for (const s of segs) cont[s.modo] = (cont[s.modo] || 0) + 1;
console.log("modos: " + Object.entries(cont).map(([k, v]) => `${k}×${v}`).join(" · "));
console.log(warns ? `\n${warns} aviso(s) — ajustar o espelho antes de produzir.` : "\nESPELHO REDONDO ✓");
process.exit(0);
