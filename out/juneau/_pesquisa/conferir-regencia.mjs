#!/usr/bin/env node
// conferir-regencia.mjs — prova, por conta, o que o regente-de-imagem afirma sobre out/<proj>/regencia.json.
// Só LÊ: a regência, o espelho, o words.json, o conceito-visual.json e a lista da mídia entregue em
// out/<proj>/_media/<tipo>/<cena>/. O canal não tem schema nem validador da regência (roupa do regente, §6): este
// script prova a forma e as contas do contrato do regente (ofício §2 e §4) e da roupa (§0, §1, §4 e §5) contra o disco.
//
// Uso (cwd na raiz do canal):  node out/juneau/_pesquisa/conferir-regencia.mjs [proj] [--json] [--regencia=<outro.json>]
// Saída: 0 = todas as provas passaram · 1 = alguma prova falhou · 2 = não mediu (arquivo ausente/ilegível)
//
// 28/09/2026: primeira versão, para a primeira regência do Juneau. Com a fusão do diretor-de-arte (contrato dele,
// §3.2), a regência tem uma entrada por ARQUIVO: a mãe do run entra com o `inSec` dela e a `dur` do arquivo inteiro
// (a do espelho), e os filhos (`_mergedInto`) não entram.
// Falha (1): forma, enums, tempos (a soma, a grade de quadros, o piso de 1,5 s), `palavras` que não é o literal do
// words.json na janela, t0 depois da primeira palavra, as listas da auditoria que têm de sair vazias, o censo e a
// proporção de respiro que não batem com a conta, rajada acima do teto, respiro abaixo do piso, relevo fora da cena
// liberada, a cauda fora da regra da roupa, e dois planos de registro com o mesmo `exige` na mesma entrada.
// Aviso: o que pede juízo (mídia entregue que nenhum beat nomeia, pico no regime mais morno da vizinhança, cena longa
// com um plano só, imagem adiantada mais de 1 s) e a régua do canal abaixo de 60 % (aceita pelo Lucas no Juneau).
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const proj = args.find((a) => !a.startsWith("--")) || "juneau";
const COMO_JSON = args.includes("--json");
const argRegencia = args.find((a) => a.startsWith("--regencia="));
const FPS = 30, QUADRO = 1 / FPS, TOL = 0.0015, TOL_GRADE = 0.05, TOL_BORDA = 0.05;
const PISO_BEAT = 1.5, RAJADA_BEAT = 2.5, RESPIRO_BEAT = 6; // roupa do regente, §1 (identidade §4.3)
const TETO_RAJADA = 0.2, PISO_RESPIRO = 0.1, REGUA_CANAL = 0.6; // idem, e roupa §5
const TIPOS = ["footage_real", "foto_real", "grafico", "mapa", "mapa_relevo", "documento_real", "tipografia", "desenho", "continua"];
const FORCAS = ["imprescindivel", "recomendado", "livre"];
const REGIMES = ["respiro", "normal", "rajada"];
const FAMILIA = {
  footage_real: "registro_real", foto_real: "registro_real", mapa: "registro_real", mapa_relevo: "registro_real",
  documento_real: "registro_real", grafico: "desenho", desenho: "desenho", tipografia: "desenho", continua: "continua",
};
const REGUA_TIPOS = new Set(["footage_real", "foto_real", "mapa", "mapa_relevo"]); // roupa §5: sem documento_real
const REGISTRO_TIPOS = new Set(["footage_real", "foto_real"]);
// O relevo: só em s44 no Juneau (Lucas, 28/09/2026; identidade §6, "O gasto do Juneau, liberado"). Nos próximos
// vídeos, nenhum até um ok próprio (roupa do regente, §4).
const RELEVO_LIBERADO = { juneau: ["s44"] }[proj] ?? [];
// O `porque` da cauda (roupa do regente, §0).
const PORQUE_CAUDA = proj === "juneau"
  ? "tela final: a última cena, parada e escurecendo (Lucas, 28/09/2026)"
  : "proposta: a tela final do Juneau";

const dir = path.join("out", proj);
function ler(p) {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch (e) { return { __erro: `${p}: ${e.message || e}` }; }
}
const R = ler(argRegencia ? argRegencia.slice("--regencia=".length) : path.join(dir, "regencia.json"));
const E = ler(path.join(dir, "espelho.json"));
const W = ler(path.join(dir, "words.json"));
const C = ler(path.join(dir, "conceito-visual.json"));
for (const o of [R, E, W, C]) if (o && o.__erro) { console.error(`NÃO MEDIDO — ${o.__erro}`); process.exit(2); }
if (!Array.isArray(E.segmentos) || !Array.isArray(W)) { console.error("NÃO MEDIDO — espelho sem `segmentos` ou words.json que não é lista"); process.exit(2); }

const falhas = [], avisos = [];
const F = (m) => falhas.push(m), A = (m) => avisos.push(m);
const r3 = (x) => Math.round(x * 1000) / 1000;
const pct = (x) => `${(x * 100).toFixed(1)} %`;

// ---------- o espelho: os arquivos (mães e cenas soltas) e os filhos da fusão ----------
const SEG = E.segmentos;
const porId = new Map(SEG.map((s) => [s.id, s]));
const ARQUIVOS = SEG.filter((s) => !s._mergedInto);
const FILHOS = SEG.filter((s) => s._mergedInto);
const arquivoDe = (id) => porId.get(id)?._mergedInto ?? id;

// ---------- o relógio, normalizado para comparar `palavras` ----------
const norm = (t) => String(t).normalize("NFC").toLowerCase().replace(/[’‘]/g, "'").replace(/[“”"«»]/g, "")
  .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
const PAL = W.map((w) => ({ n: norm(w.w), w: w.w, start: w.start, end: w.end })).filter((p) => p.n);
const tokens = (s) => String(s ?? "").split(/\s+/).map(norm).filter(Boolean);

// ---------- a regência: forma ----------
const RC = Array.isArray(R.cenas) ? R.cenas : [];
if (!Array.isArray(R.cenas)) F("regencia.json sem a lista `cenas`");
if (R.projeto !== proj) F(`projeto = ${JSON.stringify(R.projeto)}; esperado "${proj}"`);
if (!R.gerado_em || Number.isNaN(Date.parse(R.gerado_em))) F("gerado_em ausente ou fora de ISO");

const idsR = RC.map((c) => c.id);
const repetidos = [...new Set(idsR.filter((id, i) => idsR.indexOf(id) !== i))];
if (repetidos.length) F(`ids repetidos na regência: ${repetidos.join(", ")}`);
for (const s of ARQUIVOS) if (!idsR.includes(s.id)) F(`${s.id}: sem entrada na regência`);
for (const s of FILHOS) if (idsR.includes(s.id)) F(`${s.id}: filho de ${s._mergedInto} (fusão) com entrada própria; a regência tem uma entrada por arquivo`);
for (const id of idsR) if (!porId.has(id)) F(`${id}: não está no espelho`);
const ordemEspelho = ARQUIVOS.map((s) => s.id).filter((id) => idsR.includes(id)).join();
if (ordemEspelho !== idsR.filter((id) => porId.has(id) && !porId.get(id)._mergedInto).join()) F("as entradas não estão na ordem do espelho");

// ---------- cada entrada ----------
let nBeats = 0;
const medidos = { total: 0, rajada: 0, respiro: 0, regua: 0, reguaHerdada: 0, familia: { registro_real: 0, desenho: 0, continua: 0 } };
const porTipo = Object.fromEntries(TIPOS.map((t) => [t, 0]));
let adiantamentoMax = { s: 0, onde: "" };
const semBeat = []; // palavras da fala que nenhum beat cita (informação)
const textoDaEntrada = new Map();

RC.forEach((c, i) => {
  const s = porId.get(c.id);
  const onde = c.id;
  if (!s) return;
  if (typeof c.inSec !== "number" || Math.abs(c.inSec - s.inSec) > TOL) F(`${onde}: inSec ${c.inSec} ≠ espelho ${s.inSec}`);
  if (typeof c.dur !== "number" || Math.abs(c.dur - s.dur) > TOL) F(`${onde}: dur ${c.dur} ≠ espelho ${s.dur} (na fusão, a dur da mãe é a do arquivo)`);
  if (i > 0) {
    const p = RC[i - 1], fimP = p.inSec + p.dur;
    if (Math.abs(fimP - c.inSec) > TOL) F(`${p.id}→${onde}: ${fimP > c.inSec ? "sobreposição" : "vão"} de ${r3(Math.abs(fimP - c.inSec))} s entre as entradas`);
  }
  if (!REGIMES.includes(c.regime)) F(`${onde}: regime ${JSON.stringify(c.regime)} fora de ${REGIMES.join("|")}`);
  if (!String(c.regime_porque ?? "").trim()) F(`${onde}: regime_porque vazio`);
  const B = Array.isArray(c.beats) ? c.beats : [];
  if (!B.length) { F(`${onde}: sem beats`); return; }
  nBeats += B.length;
  const ini = s.inSec, dur = s.dur;
  const palCena = PAL.filter((p) => p.start >= ini - TOL_BORDA && p.start < ini + dur - TOL_BORDA);
  if (Math.abs(B[0].t0) > 1e-6) F(`${onde}: o primeiro t0 é ${B[0].t0}, não 0`);
  if (Math.abs(B.at(-1).t1 - dur) > TOL) F(`${onde}: o último t1 é ${B.at(-1).t1}, não a dur ${dur}`);
  const usados = new Set();
  let fimAnterior = -1, familiaAnterior = null;
  const vistosExige = new Map();
  textoDaEntrada.set(onde, B.map((b) => `${b.exige ?? ""} ${b.porque ?? ""}`).join(" "));
  B.forEach((b, j) => {
    const q = `${onde} beat ${j + 1}`;
    if (typeof b.t0 !== "number" || typeof b.t1 !== "number" || !(b.t1 > b.t0)) { F(`${q}: t0/t1 inválidos (${b.t0}–${b.t1})`); return; }
    if (j > 0 && Math.abs(b.t0 - B[j - 1].t1) > 1e-6) F(`${q}: ${b.t0 > B[j - 1].t1 ? "buraco" : "sobreposição"} entre ${B[j - 1].t1} e ${b.t0}`);
    for (const [nome, t] of [["t0", b.t0], ["t1", b.t1]]) {
      if (nome === "t1" && j === B.length - 1) continue; // o último t1 é a dur do espelho
      if (Math.abs(t * FPS - Math.round(t * FPS)) > TOL_GRADE) F(`${q}: ${nome} = ${t} fora da grade de quadros (${r3(t * FPS)} quadros)`);
    }
    const d = b.t1 - b.t0;
    if (d < PISO_BEAT - 1e-6) F(`${q}: ${r3(d)} s, abaixo do piso de ${PISO_BEAT} s`);
    if (!TIPOS.includes(b.tipo)) F(`${q}: tipo ${JSON.stringify(b.tipo)} fora do enum`);
    if (!FORCAS.includes(b.forca)) F(`${q}: forca ${JSON.stringify(b.forca)} fora do enum`);
    if (!String(b.porque ?? "").trim()) F(`${q}: porque vazio`);
    if (b.tipo !== "continua" && !String(b.exige ?? "").trim()) F(`${q}: exige vazio num beat que pede imagem`);
    if (b.tipo === "mapa_relevo" && !RELEVO_LIBERADO.includes(onde)) F(`${q}: mapa_relevo fora das cenas liberadas (${RELEVO_LIBERADO.join(", ") || "nenhuma"})`);
    if (REGISTRO_TIPOS.has(b.tipo)) {
      const k = norm(String(b.exige ?? "").replace(/\s+/g, " "));
      if (vistosExige.has(k)) F(`${q}: o mesmo exige do beat ${vistosExige.get(k)} (um termo de busca por plano, ofício §4.7)`);
      else vistosExige.set(k, j + 1);
    }
    // as contas
    medidos.total += d;
    if (d < RAJADA_BEAT) medidos.rajada += d;
    if (d >= RESPIRO_BEAT) medidos.respiro += d;
    if (FAMILIA[b.tipo]) medidos.familia[FAMILIA[b.tipo]] += d;
    if (porTipo[b.tipo] !== undefined) porTipo[b.tipo] += d;
    if (REGUA_TIPOS.has(b.tipo)) medidos.regua += d;
    const tipoNaTela = b.tipo === "continua" ? familiaAnterior : b.tipo;
    if (REGUA_TIPOS.has(tipoNaTela)) medidos.reguaHerdada += d;
    if (b.tipo !== "continua") familiaAnterior = b.tipo;
    // `palavras`: o literal do words.json, dito dentro do beat, com o t0 em cima ou antes da primeira palavra
    const tk = tokens(b.palavras);
    const abs0 = ini + b.t0, abs1 = ini + b.t1;
    const falaNoBeat = palCena.filter((p) => p.start >= abs0 - TOL_BORDA && p.start < abs1 - TOL_BORDA);
    if (!tk.length) {
      if (falaNoBeat.length) F(`${q}: palavras vazio, mas a voz diz ${falaNoBeat.length} palavra(s) no beat`);
      return;
    }
    const ocorrencias = [];
    for (let k = 0; k + tk.length <= palCena.length; k++) {
      let ok = true;
      for (let m = 0; m < tk.length; m++) if (palCena[k + m].n !== tk[m]) { ok = false; break; }
      if (ok) ocorrencias.push(k);
    }
    if (!ocorrencias.length) { F(`${q}: palavras não é o literal do words.json na janela da cena: "${b.palavras}"`); return; }
    const dentro = ocorrencias.filter((k) => palCena[k].start >= abs0 - QUADRO - 1e-6 && palCena[k].start < abs1);
    const k = dentro.find((x) => x > fimAnterior) ?? dentro[0]
      ?? ocorrencias.reduce((a, x) => (Math.abs(palCena[x].start - abs0) < Math.abs(palCena[a].start - abs0) ? x : a));
    const primeira = palCena[k];
    if (primeira.start < abs0 - QUADRO - 1e-6) F(`${q}: t0 ${r3(abs0 - primeira.start)} s DEPOIS da primeira palavra ("${primeira.w}", ${primeira.start} s)`);
    else if (primeira.start >= abs1) F(`${q}: a primeira palavra ("${primeira.w}", ${primeira.start} s) cai depois do fim do beat (${r3(abs1)} s)`);
    const adiant = primeira.start - abs0;
    if (adiant > 1.0) A(`${q}: imagem ${r3(adiant)} s adiantada em relação a "${primeira.w}" (ofício §2: adiantada entrega o final antes da frase)`);
    if (adiant > adiantamentoMax.s) adiantamentoMax = { s: r3(adiant), onde: q };
    if (k <= fimAnterior) F(`${q}: palavras repete palavras do beat anterior`);
    for (let m = 0; m < tk.length; m++) usados.add(k + m);
    fimAnterior = k + tk.length - 1;
  });
  palCena.forEach((p, k) => { if (!usados.has(k)) semBeat.push(`${onde}: ${p.w}`); });
  // cena longa com um plano só (ofício §4.6), só como aviso: a conta dos objetos é juízo
  const pedemImagem = B.filter((b) => b.tipo !== "continua").length;
  if (dur >= 10 && pedemImagem <= 1 && palCena.length) A(`${onde}: ${r3(dur)} s com ${pedemImagem} beat que pede imagem (ofício §4.6: um objeto sem plano é buraco)`);
});

// ---------- a cauda: a última entrada ----------
const ultima = RC.at(-1), ultimoSeg = SEG.at(-1);
if (ultima && ultimoSeg) {
  if (ultima.id !== ultimoSeg.id) F(`a última entrada é ${ultima.id}; a cauda do espelho é ${ultimoSeg.id}`);
  const falaNaCauda = PAL.filter((p) => p.start >= ultimoSeg.inSec - TOL_BORDA);
  if (falaNaCauda.length) F(`a voz diz ${falaNaCauda.length} palavra(s) na janela da cauda (${ultimoSeg.id})`);
  const Bc = ultima.beats || [];
  if (Bc.length !== 1) F(`${ultima.id} (cauda): ${Bc.length} beats; a roupa pede um beat único`);
  const b = Bc[0] || {};
  if (b.tipo !== "continua") F(`${ultima.id} (cauda): tipo ${JSON.stringify(b.tipo)}; a roupa pede "continua"`);
  if (b.forca !== "livre") F(`${ultima.id} (cauda): forca ${JSON.stringify(b.forca)}; a roupa pede "livre"`);
  if (!String(b.porque ?? "").includes(PORQUE_CAUDA)) F(`${ultima.id} (cauda): o porque não traz "${PORQUE_CAUDA}"`);
  const fimR = ultima.inSec + ultima.dur, fimE = ultimoSeg.inSec + ultimoSeg.dur;
  if (Math.abs(fimR - fimE) > TOL) F(`a regência acaba em ${r3(fimR)} s; o espelho, em ${r3(fimE)} s`);
}
if (RC[0] && SEG[0] && Math.abs(RC[0].inSec - SEG[0].inSec) > TOL) F(`a regência começa em ${RC[0].inSec} s; o espelho, em ${SEG[0].inSec} s`);
for (const id of RELEVO_LIBERADO) {
  const e = RC.find((c) => c.id === arquivoDe(id));
  if (e && !(e.beats || []).some((b) => b.tipo === "mapa_relevo")) A(`${id}: relevo liberado, e nenhum beat saiu mapa_relevo (roupa §4: o beat que argumenta altura sai mapa_relevo)`);
}

// ---------- a auditoria contra a conta ----------
const AU = R.auditoria || {};
for (const campo of ["nomeados_sem_imagem", "beats_curtos_demais", "rajadas_sem_justificativa"]) {
  if (!Array.isArray(AU[campo])) F(`auditoria.${campo} ausente`);
  else if (AU[campo].length) F(`auditoria.${campo} não está vazio: ${JSON.stringify(AU[campo]).slice(0, 400)}`);
}
const T = medidos.total, cauda = ultima && ultima.id === ultimoSeg?.id ? (ultima.beats || []).reduce((a, b) => a + (b.t1 - b.t0), 0) : 0;
const fr = (x, semCauda = false) => x / (semCauda ? T - cauda : T);
const bate = (declarado, medidoCom, medidoSem) => typeof declarado === "number"
  && (Math.abs(declarado - medidoCom) <= 0.01 ? "com a cauda" : Math.abs(declarado - medidoSem) <= 0.01 ? "sem a cauda" : null);
const respCom = fr(medidos.respiro), respSem = (medidos.respiro - (cauda >= RESPIRO_BEAT ? cauda : 0)) / (T - cauda);
const bResp = bate(AU.proporcao_respiro, respCom, respSem);
if (!bResp) F(`auditoria.proporcao_respiro = ${AU.proporcao_respiro}; a conta dá ${r3(respCom)} com a cauda e ${r3(respSem)} sem ela`);
const CR = AU.censo_registro || {};
const contCom = fr(medidos.familia.continua), contSem = (medidos.familia.continua - cauda) / (T - cauda);
const censo = {
  registro_real: [fr(medidos.familia.registro_real), medidos.familia.registro_real / (T - cauda)],
  desenho: [fr(medidos.familia.desenho), medidos.familia.desenho / (T - cauda)],
  continua: [contCom, contSem],
};
const bases = new Set();
for (const [k, [com, sem]] of Object.entries(censo)) {
  const b = bate(CR[k], com, sem);
  if (!b) F(`auditoria.censo_registro.${k} = ${CR[k]}; a conta dá ${r3(com)} com a cauda e ${r3(sem)} sem ela`);
  else bases.add(b);
}
if (bases.size > 1) A("o censo mistura as duas bases (com e sem a cauda)");
if (bases.has("sem a cauda") || bResp === "sem a cauda") A("o regente mediu sem a cauda de 20 s (o ofício pede fração do tempo do vídeo; a diferença está acima)");
if (!Array.isArray(CR.dispensas_sem_motivo)) F("auditoria.censo_registro.dispensas_sem_motivo ausente");
if (fr(medidos.rajada) > TETO_RAJADA + 1e-9) F(`rajada (beats < ${RAJADA_BEAT} s) em ${pct(fr(medidos.rajada))} do tempo; teto de ${pct(TETO_RAJADA)}`);
if (fr(medidos.respiro) < PISO_RESPIRO - 1e-9) F(`respiro (beats ≥ ${RESPIRO_BEAT} s) em ${pct(fr(medidos.respiro))} do tempo; piso de ${pct(PISO_RESPIRO)}`);
if (fr(medidos.regua) < REGUA_CANAL) A(`régua do canal (footage, foto e mapa, sem documento) em ${pct(fr(medidos.regua))} do tempo (${pct(fr(medidos.reguaHerdada))} com o continua herdando a imagem de antes); piso de ${pct(REGUA_CANAL)}${proj === "juneau" ? " — aceita abaixo no Juneau (Lucas, 28/09/2026)" : ""}`);

// ---------- o arco: pico no regime mais morno da vizinhança ----------
const RANK = { respiro: 0, normal: 1, rajada: 2 };
const picos = Object.entries(C.cenas || {}).filter(([, v]) => v && v.showpiece).map(([id]) => id);
for (const id of picos) {
  const i = RC.findIndex((c) => c.id === arquivoDe(id));
  if (i < 0) continue;
  const viz = [RC[i - 1], RC[i + 1]].filter(Boolean).map((c) => RANK[c.regime]);
  if (viz.length && viz.every((r) => RANK[RC[i].regime] < r)) A(`${id} (pico do conceito): regime ${RC[i].regime}, o mais morno da vizinhança (ofício §4.5)`);
}

// ---------- a mídia entregue: cada arquivo nomeado por algum beat da entrada dele ----------
const pastasMidia = ["foto", "footage", "pessoa", "logo", "documento"];
const entregues = [];
for (const t of pastasMidia) {
  const base = path.join(dir, "_media", t);
  if (!fs.existsSync(base)) continue;
  for (const cena of fs.readdirSync(base)) {
    const d = path.join(base, cena);
    if (!fs.statSync(d).isDirectory()) continue;
    for (const f of fs.readdirSync(d)) {
      if (f.startsWith("_") || /-prova/.test(f) || !fs.statSync(path.join(d, f)).isFile()) continue;
      entregues.push({ cena, arquivo: f, rel: `_media/${t}/${cena}/${f}` });
    }
  }
}
for (const m of entregues) {
  const id = arquivoDe(m.cena), txt = textoDaEntrada.get(id) ?? "";
  const semExt = m.arquivo.replace(/\.[^.]+$/, "");
  if (!txt.includes(m.arquivo) && !txt.includes(semExt)) A(`${m.rel}: nenhum beat de ${id} nomeia o arquivo (o conferente precisa casar a mídia com o beat)`);
}

// ---------- o relato ----------
const out = {
  proj, entradas: RC.length, arquivos_no_espelho: ARQUIVOS.length, filhos_da_fusao: FILHOS.map((s) => `${s.id}→${s._mergedInto}`),
  beats: nBeats, tempo_s: r3(T), cauda_s: r3(cauda),
  rajada: r3(fr(medidos.rajada)), respiro: r3(fr(medidos.respiro)),
  censo_medido: Object.fromEntries(Object.entries(censo).map(([k, [com, sem]]) => [k, { com_cauda: r3(com), sem_cauda: r3(sem) }])),
  regua_canal: r3(fr(medidos.regua)), regua_canal_continua_herdada: r3(fr(medidos.reguaHerdada)),
  por_tipo_s: Object.fromEntries(Object.entries(porTipo).map(([k, v]) => [k, r3(v)])),
  adiantamento_max: adiantamentoMax, palavras_sem_beat: semBeat.length,
  midia_entregue: entregues.length, falhas, avisos,
};
if (COMO_JSON) console.log(JSON.stringify(out, null, 2));
else {
  console.log(`conferir-regencia ${proj}: ${RC.length} entradas (${ARQUIVOS.length} arquivos no espelho; fusão: ${out.filhos_da_fusao.join(", ") || "nenhuma"}), ${nBeats} beats, ${r3(T)} s`);
  console.log(`  rajada ${pct(out.rajada)} (teto ${pct(TETO_RAJADA)}) · respiro ${pct(out.respiro)} (piso ${pct(PISO_RESPIRO)}) · régua do canal ${pct(out.regua_canal)} (${pct(out.regua_canal_continua_herdada)} com o continua herdado)`);
  console.log(`  censo medido (com a cauda): registro_real ${out.censo_medido.registro_real.com_cauda} · desenho ${out.censo_medido.desenho.com_cauda} · continua ${out.censo_medido.continua.com_cauda}`);
  console.log(`  maior adiantamento: ${adiantamentoMax.s} s (${adiantamentoMax.onde || "—"}) · palavras da fala fora de todo beat: ${semBeat.length} · mídia entregue: ${entregues.length}`);
  for (const a of avisos) console.log(`  aviso: ${a}`);
  for (const f of falhas) console.log(`  FALHA: ${f}`);
  console.log(falhas.length ? `✗ ${falhas.length} falha(s)` : "✓ PASS — a regência bate com o espelho, o relógio e a própria auditoria");
}
process.exit(falhas.length ? 1 : 0);
