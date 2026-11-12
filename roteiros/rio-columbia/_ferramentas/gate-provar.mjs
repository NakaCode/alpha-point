// gate-provar.mjs — a prova do portão do vídeo 7, o rio Columbia (roteiros/rio-columbia/_ferramentas/gate.mjs).
//   node roteiros/rio-columbia/_ferramentas/gate-provar.mjs      (cwd = raiz do canal; exit 0 = tudo como o esperado, 1 = alguma
//                                                                 checagem falhou, 2 = não rodou)
// Deriva da prova do vídeo 6 (roteiros/praia-do-cassino/_ferramentas/gate-provar.mjs), em 11/11/2026, pelo pedido da Sala de controle.
// Grava roteiros sintéticos em out/_tmp/gate-rio-columbia/casos/ (fora do git), roda o portão em cada um e confere a saída:
//   - a base passa (o gancho com a 1ª frase certa, o título pago, o "But", a pergunta e a assinatura; o corpo até o meio da faixa; a
//     inscrição numa fronteira entre atos, a ~45 %), sem nenhum alerta;
//   - a faixa (2.450 a 2.700), a média (18) e a maior frase (34): o piso e o teto exatos passam, uma palavra a menos ou a mais reprova;
//   - o título e a primeira frase: um caso que reprova para cada regra, um que alerta para cada alerta, e o que passa ao lado;
//   - o "não se diz" do Columbia: um caso que reprova para cada id (e mais de um onde o padrão tem formas), e o que passa ao lado (a
//     forma que a pauta ou o fatos-c dão, quando dão uma);
//   - os alertas do Columbia, cada um com o seu caso, e o que fica ao lado sem alerta; as palavras de ALERTA do molde;
//   - a inscrição falada: a posição (abaixo de 35 %, na margem, no meio, na margem de cima, acima de 60 %) e a conta do tempo; o
//     gancho, o fecho (pela marca e pelas 8 últimas), a fronteira de parágrafo e a de ato; as palavras vetadas, o número, a plateia,
//     o tamanho, o "if", o "you", a frase de antes com aspas e com número-herói; a ausente, as duas e o outro "subscrib…";
//   - as regras do Cassino saíram: o que o portão do vídeo 6 reprovava passa aqui;
//   - o gancho A da pauta §8 como está (só ele: nenhum "não se diz", nenhuma regra do título nem da 1ª frase) e com um corpo de
//     teste (a inscrição no lugar certo e nos errados);
//   - o fecho (a pergunta repetida e a lista), que fica do molde;
//   - o autoplágio contra o roteiro do vídeo 6 (roteiros/praia-do-cassino/roteiro-narrador.md);
//   - as frases que a pauta e o fatos-c recomendam, juntas num texto: nenhuma reprova;
//   - o portão novo no roteiro do vídeo 6: reprova pelo título, pela primeira frase e pela inscrição ausente, e só nisso; as taxas, o
//     sha, as contagens, o gancho, o autoplágio e os alertas do fecho saem iguais aos do portão do vídeo 6 no mesmo texto; e o sha de um
//     texto (com BOM, CRLF, título, citação e comentário) igual nos dois portões;
//   - o ferramentas/portao-fatos.mjs cruza o sha com o portão novo (numa raiz de teste) sem divergir;
//   - o arquivo padrão, a opção desconhecida, o --onde e o --derivados (com os derivados novos do vídeo 7).
// Sem rede, sem crédito. Grava só em out/_tmp/gate-rio-columbia/. A saída também vai a out/_tmp/gate-rio-columbia/prova-saida.md.
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync, rmSync, existsSync, copyFileSync } from "node:fs";
import { posix, resolve } from "node:path";
const { join, dirname } = posix;   // os caminhos com "/", também no Windows
import { isDeepStrictEqual } from "node:util";

const GATE = "roteiros/rio-columbia/_ferramentas/gate.mjs";
const GATE_C = "roteiros/praia-do-cassino/_ferramentas/gate.mjs";
const ROTEIRO_C = "roteiros/praia-do-cassino/roteiro-narrador.md";
const PASTA = "out/_tmp/gate-rio-columbia";
const CASOS = join(PASTA, "casos");
if (!existsSync(GATE)) { console.error(`não encontrado: ${GATE} (rode da raiz do canal)`); process.exit(2); }
rmSync(CASOS, { recursive: true, force: true });
rmSync(join(PASTA, "raiz"), { recursive: true, force: true });
mkdirSync(CASOS, { recursive: true });

const gravar = (arq, s) => { mkdirSync(dirname(arq), { recursive: true }); writeFileSync(arq, s, "utf8"); };
const rodar = (args, gate = GATE) => {
  const r = spawnSync(process.execPath, [gate, ...args], { encoding: "utf8" });
  let laudo = null; try { laudo = JSON.parse(r.stdout); } catch {}
  return { exit: r.status, laudo, stderr: r.stderr };
};
let falhas = 0, total = 0;
const linhas = [];
const conferir = (ok, msg) => { total++; if (!ok) falhas++; linhas.push(`- ${ok ? "OK" : "FALHOU"}: ${msg}`); return ok; };
const secao = (t) => linhas.push(`\n## ${t}\n`);
const contar = (s) => (s.match(/[A-Za-z0-9][A-Za-z0-9'’.,$%-]*/g) || []).filter((w) => /[A-Za-z0-9]/.test(w)).length;
const chunk = (l, n) => { const o = []; for (let i = 0; i < l.length; i += n) o.push(l.slice(i, i + n)); return o; };

// ---- a base ---------------------------------------------------------------------------------------------------------
const GANCHO = [
  "Every spring, part of the Arrow Lakes Reservoir, about 20 miles north of the border, is emptied on purpose.",
  "And the United States pays Canada for that empty space: 37.6 million dollars a year, adjusted for inflation.",
  "But a temporary deal pays for it, and it took effect for the spring floods of 2025.",
  "So why would anyone pay to keep a lake low?",
  "You're at Alpha Point, and this is where the story of the lake that waits for the flood begins.",
];
const INSC = "If you've followed the river this far, subscribe to Alpha Point.";
const VOLTA_F = "Back to the river, then.";
// o corpo: frases neutras, sem nenhuma palavra de alerta, nenhuma abrindo com "A "/"An "/"First"/"Then" (o fecho em lista) e
// sem nada da pergunta do gancho; geradas por sorteio com semente fixa, todas diferentes. POOL tem mais frases que o corpo da
// base, para os casos que passam do teto da faixa.
let semente = 7;
const sorte = () => (semente = (semente * 1103515245 + 12345) % 2147483648) / 2147483648;
const pega = (l) => l[Math.floor(sorte() * l.length)];
const SUJ = ["The park ranger", "The road crew", "The ranch hand", "The county clerk", "The bridge painter", "The trail volunteer",
  "The inn cook", "The survey team", "The night guard", "The mail driver", "The beekeeper", "The lighthouse keeper"];
const VERBO = ["logged", "checked", "cleaned", "stacked", "measured", "labeled", "repaired", "counted", "sorted", "painted"];
const OBJ = ["the fence posts", "nine water barrels", "the trail signs", "a box of spare fuses", "the cabin windows",
  "the gate hinges", "seven coils of rope", "the weather notes", "the supply lists", "the culvert grates"];
const RABO = ["before the breakfast bell", "beside the old barn", "under a grey sky", "after the evening meal",
  "near the north gate", "with a borrowed pen", "for the county report", "on a windy Thursday", "below the ridge road",
  "between two storms"];
const usadas = new Set(), POOL = [];
while (POOL.length < 440) {
  const f = `${pega(SUJ)} ${pega(VERBO)} ${pega(OBJ)} ${pega(RABO)}.`;
  if (!usadas.has(f)) { usadas.add(f); POOL.push(f); }
}
const ALVO_BASE = 2575;
const CORPO = [];
for (const f of POOL) { if (contar([...GANCHO, INSC, VOLTA_F, ...CORPO].join(" ")) >= ALVO_BASE) break; CORPO.push(f); }
// a conta do portão, aqui, para escolher onde a inscrição cai (a mesma do gate: as palavras antes ÷ 179 × 60 + 0,25 s por troca de
// parágrafo; a duração com as pausas e a cauda de 20 s). O parágrafo 0 é o gancho; a inscrição fecha o último parágrafo de "a"
function estima(gancho, a, b, insc = INSC, volta = VOLTA_F) {
  const wG = contar(gancho.join(" ")), wA = contar(a.join(" ")), wI = contar(insc), wV = volta ? contar(volta) : 0, wB = contar(b.join(" "));
  const nPA = Math.ceil(a.length / 5), nPB = Math.ceil(b.length / 5), P = nPA;
  const ini = (wG + wA) / 179 * 60 + 0.25 * P;
  const dur = (wG + wA + wI + wV + wB) / 179 * 60 + 0.25 * (nPA + nPB) + 20;
  return { ini, dur, pct: ini / dur * 100 };
}
// o corte do corpo (quantas frases antes da inscrição) que leva a inscrição mais perto do percentual pedido
const corteEm = (alvo, gancho = GANCHO, corpo = CORPO) => {
  let melhor = 0, dist = Infinity;
  for (let s = 5; s < corpo.length - 10; s++) { const d = Math.abs(estima(gancho, corpo.slice(0, s), corpo.slice(s)).pct - alvo); if (d < dist) { dist = d; melhor = s; } }
  return melhor;
};
const S = corteEm(45);
const A = CORPO.slice(0, S), B = CORPO.slice(S);
// uma frase de enchimento com exatamente n palavras (5 a 27), para acertar a faixa no número exato
const ENCHE = "The ranger walked slowly past the quiet barn and the old gate toward the fence by the creek road at dusk with his dog and a lamp".split(" ");
const enche = (n) => `${ENCHE.slice(0, n).join(" ")}.`;
// um corpo B com o total exato de palavras faladas (com o gancho, o A, a inscrição e a volta da base)
function bCom(alvo) {
  const c = [];
  let t = contar([...GANCHO, ...A, INSC, VOLTA_F].join(" "));
  for (const f of POOL.slice(S)) { if (t + contar(f) > alvo - 5) break; c.push(f); t += contar(f); }
  if (alvo - t > 0) c.push(enche(alvo - t));
  return c;
}
// monta o roteiro: título, citação e comentário (que não são falados), o gancho num parágrafo, o corpo em parágrafos de 5, com uma
// marca de ato a cada 6 parágrafos e antes do 1º parágrafo de "b", e a marca do fecho antes do último.
//   gancho: {índice: frase nova} ou a lista inteira; trocasA/trocasB: {índice: frase nova, ou lista de frases ([] tira a frase)};
//   insc: a frase de inscrição (null: nenhuma); lugar: "fim" (fecha o último parágrafo de "a"; a volta abre o 1º de "b"),
//   "penultima-volta" (a inscrição e a volta fecham o último de "a"), "penultima" (a inscrição antes da última frase de "a"), "meio"
//   (a 3ª do último parágrafo de "a") ou "inicio" (abre o 1º de "b", com a volta depois); marcas: false tira as marcas de ato (fica a
//   do gancho e a do fecho); fecho: false tira a marca do fecho
function montar({ gancho = {}, a = A, b = B, trocasA = {}, trocasB = {}, insc = INSC, volta = VOLTA_F, lugar = "fim", marcas = true, fecho = true } = {}) {
  const g = Array.isArray(gancho) ? gancho : GANCHO.map((f, i) => gancho[i] ?? f);
  const ca = a.flatMap((f, i) => (i in trocasA ? [].concat(trocasA[i]) : [f]));
  const cb = b.flatMap((f, i) => (i in trocasB ? [].concat(trocasB[i]) : [f]));
  const pa = chunk(ca, 5), pb = chunk(cb, 5);
  const ult = pa[pa.length - 1];
  if (insc) {
    if (lugar === "fim") { ult.push(insc); if (volta) pb[0].unshift(volta); }
    else if (lugar === "penultima-volta") ult.push(insc, volta);
    else if (lugar === "penultima") ult.splice(ult.length - 1, 0, insc);
    else if (lugar === "meio") ult.splice(2, 0, insc);
    else if (lugar === "inicio") pb[0].unshift(insc, ...(volta ? [volta] : []));
  }
  const L = ["# Why the U.S. Pays Canada to Keep Part of a Lake Empty", "", "> Roteiro de teste, gerado por gate-provar.mjs.", "", "<!-- gancho -->", "", g.join(" "), ""];
  let ato = 1;
  pa.forEach((p, j) => { if (marcas && j % 6 === 0) L.push(`<!-- p${ato++} · ato de teste -->`, ""); L.push(p.join(" "), ""); });
  pb.forEach((p, j) => {
    if (fecho && j === pb.length - 1) L.push("<!-- fecho · a cena final -->", "");
    else if (marcas && j % 6 === 0) L.push(`<!-- p${ato++} · ato de teste -->`, "");
    L.push(p.join(" "), "");
  });
  return L.join("\n");
}
let nCaso = 0;
function caso(nome, opcoes, esperado) {
  const arq = join(CASOS, `${String(++nCaso).padStart(3, "0")}-${nome}`, "roteiro-narrador.md");
  gravar(arq, typeof opcoes === "string" ? opcoes : montar(opcoes));
  const r = rodar([...(esperado.args || []), arq]);
  if (!r.laudo) return conferir(false, `${nome}: o portão não deu laudo (exit ${r.exit}): ${r.stderr.slice(0, 200)}`);
  const { problemas, alertas } = r.laudo;
  const falta = [];
  if (esperado.exit != null && r.exit !== esperado.exit) falta.push(`exit ${r.exit}, esperado ${esperado.exit}`);
  for (const s of esperado.problema || []) if (!problemas.some((p) => p.includes(s))) falta.push(`sem o problema "${s}"`);
  for (const s of esperado.semProblema || []) if (problemas.some((p) => p.includes(s))) falta.push(`com o problema "${s}"`);
  if (esperado.so) for (const p of problemas) if (!esperado.problema.some((s) => p.includes(s))) falta.push(`problema a mais: "${p.slice(0, 140)}"`);
  for (const s of esperado.alerta || []) if (!alertas.some((a) => a.includes(s))) falta.push(`sem o alerta "${s}"`);
  for (const s of esperado.semAlerta || []) if (alertas.some((a) => a.includes(s))) falta.push(`com o alerta "${s}"`);
  if (esperado.semAlertaColumbia) for (const a of alertas) if (/^conferir \[/.test(a)) falta.push(`alerta do Columbia a mais: "${a.slice(0, 120)}"`);
  const resumo = r.exit === 1 ? `reprova (${problemas.length})` : r.exit === 0 ? `passa (${alertas.length} alerta[s])` : `exit ${r.exit}`;
  conferir(!falta.length, `${nome}: ${resumo}${esperado.nota ? ` — ${esperado.nota}` : ""}${falta.length ? ` · ${falta.join("; ")}` : ""}`);
  return r;
}
const I = 20;   // o lugar do corpo "a" onde entram as frases de teste (longe do gancho e da inscrição)
const nomeDe = (id) => id.replace(/[^a-z0-9-]/g, "");
const reprova = (id, frase, nota) => caso(`${nomeDe(id)}-reprova`, { trocasA: { [I]: frase } },
  { exit: 1, problema: [`[${id}]`], so: true, nota: nota ?? `"${[].concat(frase).join(" ")}"` });
const passa = (id, frase, nota, extra = {}) => caso(`${nomeDe(id)}-passa`, { trocasA: { [I]: frase } },
  { exit: 0, semProblema: [`[${id}]`], semAlerta: [`[${id}]`], nota: nota ?? `"${[].concat(frase).join(" ")}"`, ...extra });
const alerta = (id, frase, nota) => caso(`${nomeDe(id)}-alerta`, { trocasA: { [I]: frase } },
  { exit: 0, semProblema: [`[${id}]`], alerta: [`[${id}]`], nota: nota ?? `"${[].concat(frase).join(" ")}"` });

secao("A base");
const base = caso("base", {}, { exit: 0 });
if (base.laudo) {
  const L = base.laudo, e = estima(GANCHO, A, B);
  conferir(L.palavras >= 2450 && L.palavras <= 2700, `a base tem ${L.palavras} palavras (faixa 2.450–2.700), ${L.frases} frases, média ${L.media_palavras_por_frase} (teto 18), maior ${L.maior_frase} (teto 34); o gancho tem ${L.gancho.palavras_ate_assinatura} palavras (${L.gancho.segundos_estimados} s a 179) e o "But" na palavra ${L.gancho.but_na_palavra}; ${L.minutos_estimados} min a 179`);
  conferir(L.alertas.length === 0, `a base não tem nenhum alerta (${JSON.stringify(L.alertas).slice(0, 300)})`);
  conferir(L.autoplagio.length === 0, "a base não tem autoplágio com os sete roteiros anteriores (Juneau, Los Angeles, Zona, Peru, Atlântico, Big Sur e Cassino)");
  conferir(Object.values(L.taxas).every((t) => !t.alerta), "a base não dispara nenhuma taxa");
  const ins = L.inscricao;
  conferir(ins && ins.percentual >= 37 && ins.percentual <= 58 && ins.fronteira_de_ato === true && ins.fronteira_de_paragrafo === "depois",
    `a inscrição da base: parágrafo ${ins?.paragrafo}, frase ${ins?.frase_no_paragrafo} de ${ins?.frases_no_paragrafo}, começa em ${ins?.inicio} (${ins?.percentual} % de ${ins?.duracao_video}, a janela de ${ins?.janela?.de} a ${ins?.janela?.ate}), na fronteira entre atos`);
  conferir(ins && Math.abs(ins.inicio_s - e.ini) < 0.06 && Math.abs(ins.duracao_video_s - e.dur) < 0.06 && Math.abs(ins.percentual - e.pct) < 0.06,
    `a conta do tempo é a pedida (as palavras antes ÷ 179 × 60 + 0,25 s por troca de parágrafo; a duração com as pausas e a cauda de 20 s): o portão dá ${ins?.inicio_s} s de ${ins?.duracao_video_s} s, a conta daqui ${e.ini.toFixed(1)} s de ${e.dur.toFixed(1)} s`);
  conferir(L.numeros_falados.total === 3 && L.numeros_falados.ate_assinatura === 3, `os números falados da base: ${L.numeros_falados.total} (os três do gancho: "20 miles", "37.6 million", "2025")`);
}

// ---- a faixa, a média e a maior frase -------------------------------------------------------------------------------
secao("A faixa (2.450 a 2.700), a média (18) e a maior frase (34)");
caso("faixa-piso-2450", { b: bCom(2450) }, { exit: 0, semProblema: ["palavras:"], nota: "2.450 palavras exatas passam" });
caso("faixa-2449", { b: bCom(2449) }, { exit: 1, problema: ["palavras: 2449, abaixo de 2450"], so: true, nota: "2.449 reprova" });
caso("faixa-teto-2700", { b: bCom(2700) }, { exit: 0, semProblema: ["palavras:"], nota: "2.700 palavras exatas passam" });
caso("faixa-2701", { b: bCom(2701) }, { exit: 1, problema: ["palavras: 2701, acima de 2700"], so: true, nota: "2.701 reprova" });
caso("faixa-2400-do-cassino", { b: bCom(2400) }, { exit: 1, problema: ["palavras: 2400, abaixo de 2450"], so: true,
  nota: "o meio da faixa do Cassino (2.400) já fica abaixo do piso novo" });
// a média: o corpo em pares unidos por ponto e vírgula (as mesmas palavras, metade das frases); nenhuma passa de 34
const pares = (l) => { const o = []; for (let i = 0; i < l.length; i += 2) o.push(i + 1 < l.length ? `${l[i].slice(0, -1)}; ${l[i + 1][0].toLowerCase()}${l[i + 1].slice(1)}` : l[i]); return o; };
caso("media-acima-de-18", { a: pares(A), b: pares(B) }, { exit: 1, problema: ["média de "], so: true, nota: "as frases do corpo unidas em pares (~20 palavras cada)" });
// a maior frase: 34 passa, 35 reprova (as palavras do próprio corpo, sem ponto)
const PALAVRAS_CORPO = CORPO.slice(30, 40).join(" ").replace(/\./g, "").split(/\s+/);
const longa = (n) => `${PALAVRAS_CORPO.slice(0, n).join(" ")}.`;
caso("frase-de-34", { trocasA: { [I]: longa(34) } }, { exit: 0, semProblema: ["frase com"], nota: "uma frase de 34 palavras passa" });
caso("frase-de-35", { trocasA: { [I]: longa(35) } }, { exit: 1, problema: ["frase com 35 palavras (teto 34"], so: true, nota: "uma frase de 35 palavras reprova" });

// ---- o título ---------------------------------------------------------------------------------------------------------
secao('O título ("Why the U.S. Pays Canada to Keep Part of a Lake Empty") nas 3 primeiras frases');
caso("titulo-sem-pagamento", { gancho: { 1: "And the United States sets aside money for that empty space: 37.6 million dollars a year, adjusted for inflation.",
  2: "But a temporary deal covers it, and it took effect for the spring floods of 2025." } },
  { exit: 1, problema: ["[titulo-pagamento]"], so: true, nota: 'sem "pay" nas 3 primeiras (o "pay" da 4ª, a pergunta, não conta)' });
caso("titulo-pagamento-separado", { gancho: { 1: "And the United States pays for that empty space: 37.6 million dollars a year, adjusted for inflation.",
  2: "But the money goes to Canada under a temporary deal, and it took effect for the spring floods of 2025." } },
  { exit: 1, problema: ["[titulo-pagamento]"], so: true, nota: '"pays" numa frase e "Canada" na outra: reprova (o pagamento ao Canadá é uma frase: "pays Canada")' });
caso("titulo-pagamento-na-4a", { gancho: { 1: "And the United States sets aside money for that empty space: 37.6 million dollars a year, adjusted for inflation.",
  2: "But a temporary deal covers it, and it took effect for the spring floods of 2025.", 3: "So why does the United States pay Canada to keep a lake low?" } },
  { exit: 1, problema: ["[titulo-pagamento]"], so: true, nota: '"pay Canada" na 4ª frase já não paga' });
caso("titulo-sem-empty", { gancho: { 0: "Every spring, part of the Arrow Lakes Reservoir, about 20 miles north of the border, is lowered on purpose.",
  1: "And the United States pays Canada for that space: 37.6 million dollars a year, adjusted for inflation." } },
  { exit: 1, problema: ["[titulo-empty]"], so: true, semAlerta: ["[titulo-parte]"], nota: 'sem "empty"/"emptied" nas 3 primeiras' });
caso("titulo-so-emptied", { gancho: { 1: "And the United States pays Canada for that space: 37.6 million dollars a year, adjusted for inflation." } },
  { exit: 0, semProblema: ["[titulo-empty]"], semAlertaColumbia: true, nota: '"emptied" na 1ª frase paga o "Empty"' });
caso("titulo-sem-eua", { gancho: { 1: "And Washington pays Canada for that empty space: 37.6 million dollars a year, adjusted for inflation." } },
  { exit: 0, alerta: ["[titulo-eua]"], nota: 'sem "United States"/"U.S." (só "Washington"): alerta' });
caso("titulo-us-com-pontos", { gancho: { 1: "And the U.S. pays Canada for that empty space: 37.6 million dollars a year, adjusted for inflation." } },
  { exit: 0, semAlerta: ["[titulo-eua]"], nota: '"the U.S." conta (o ponto da sigla não parte a frase)' });
caso("titulo-sem-lago", { gancho: { 0: "Every spring, part of the space behind a dam on the Arrow, about 20 miles north of the border, is emptied on purpose." } },
  { exit: 0, alerta: ["[titulo-lago]"], semProblema: ["Arrow"], nota: 'sem "lake"/"reservoir" nas 3 primeiras: alerta' });
caso("titulo-sem-parte", { gancho: { 0: "Every spring, the Arrow Lakes Reservoir, about 20 miles north of the border, is emptied on purpose.",
  1: "And the United States pays Canada to keep it empty: 37.6 million dollars a year, adjusted for inflation." } },
  { exit: 0, alerta: ["[titulo-parte]"], nota: '"empty" sem "part of", "space" ou "room": alerta (o "Part of" mantém o título honesto)' });
caso("titulo-sem-valor", { gancho: { 1: "And the United States pays Canada for that empty space, adjusted for inflation every year." } },
  { exit: 0, alerta: ["[titulo-valor]"], semAlerta: ["[every-sem-data]"], nota: "sem o 37.6 nas 3 primeiras: alerta (a miniatura \"$37.6M A YEAR\")" });

// ---- a primeira frase -------------------------------------------------------------------------------------------------
secao('A primeira frase ("Arrow" e número)');
caso("primeira-sem-arrow", { gancho: { 0: "Every spring, part of a reservoir in British Columbia, about 20 miles north of the border, is emptied on purpose." } },
  { exit: 1, problema: ['a primeira frase não diz "Arrow"'], so: true });
caso("primeira-arrow-na-2a", { gancho: { 0: "Every spring, part of a reservoir in British Columbia, about 20 miles north of the border, is emptied on purpose.",
  1: "And the United States pays Canada for that empty space on the Arrow Lakes: 37.6 million dollars a year, adjusted for inflation." } },
  { exit: 1, problema: ['a primeira frase não diz "Arrow"'], so: true, nota: '"Arrow" na 2ª frase não conta' });
caso("primeira-sem-numero", { gancho: { 0: "Every spring, before the floods, part of the Arrow Lakes Reservoir, in British Columbia, is emptied on purpose." } },
  { exit: 0, alerta: ["a primeira frase não tem número"], semProblema: ["a primeira frase"],
    nota: 'a 1ª frase do gancho A, sem número: só alerta (a regra aceita "um número ou uma imagem", o lago baixo)' });
caso("primeira-numero-por-extenso", { gancho: { 0: "Every spring, part of the Arrow Lakes Reservoir, about twenty miles north of the border, is emptied on purpose." } },
  { exit: 0, semAlerta: ["a primeira frase não tem número"], nota: '"twenty" por extenso conta como número' });
caso("primeira-so-one", { gancho: { 0: "Every spring, part of the Arrow Lakes Reservoir, one of the lakes of British Columbia, is emptied on purpose." } },
  { exit: 0, alerta: ["a primeira frase não tem número"], nota: '"one of" não é número: alerta' });

// ---- o "não se diz" do Columbia ---------------------------------------------------------------------------------------
secao('O "não se diz" do Columbia (reprova)');
reprova("tratado-cancelado", "In 2025, the United States canceled the treaty.");
reprova("tratado-cancelado", "The treaty was scrapped.");
reprova("tratado-cancelado", "Washington walked away from the Columbia River Treaty.");
passa("tratado-cancelado", "In March 2025, British Columbia's government announced that the United States had paused talks to update the treaty.", "a forma da pauta §5: passa");
passa("tratado-cancelado", "The treaty itself remains in force.", "a forma da pauta §5: passa");
passa("tratado-cancelado", "Canadian action to terminate the treaty would have little effect on the current dispute.", 'a fala de Dix ("terminate", no condicional): passa');
reprova("tratado-expirou", "The treaty just expired.");
reprova("tratado-expirou", "The treaty will end in 2027.");
reprova("tratado-expirou", "This 61-year-old treaty shapes the river.");
passa("tratado-expirou", "The treaty has no end date.", "a forma da pauta §5: passa");
passa("tratado-expirou", "In September 2024, its flood part changed.", "a forma da pauta §5 (K10): passa");
reprova("canada-controla", "Canada controls the river.");
reprova("canada-controla", "Canada can turn the Columbia off.");
reprova("canada-controla", "Canada holds the river hostage.");
reprova("canada-controla", "Canada took control of America's water.");
passa("canada-controla", "So Canada can't turn the Columbia off.", "a forma da pauta §4.3: passa");
passa("canada-controla", "Canada did not turn over control of its reservoirs to the United States, BC Hydro says.", "a BC Hydro (L12), com a negação entre o Canadá e o verbo: passa");
passa("canada-controla", "So could Canada turn this river off, and if it can't, what is the United States paying for?", "a pergunta do ato 3 (pauta §7): passa");
reprova("hidreletrica-40", "The river makes 40 percent of American hydropower.");
reprova("hidreletrica-40", "That puts American hydropower at risk.");
passa("hidreletrica-40", "It is the largest hydropower-producing river system in the United States.", "a forma da pauta §5 (o CRS): passa");
passa("hidreletrica-40", "The river makes a third or more of its journey in Canada.", 'o "a third or more" do caminho (pauta §4.1): passa');
reprova("gatilho-600", "The treaty's flood trigger is 600,000 cubic feet per second.");
reprova("gatilho-600", "The treaty sets the trigger at 600,000.");
passa("gatilho-600", ["British Columbia assumed it would be called only at 600,000, which it expected to be rare.", "That's according to the US Congressional Research Service."], "a forma da pauta §4.3: passa");
passa("gatilho-600", "But the treaty never says how big a flood that is.", "a forma da pauta §4.3: passa");
reprova("picos-desde-1974", "Since 1974, the river hasn't once passed 600,000.");
reprova("picos-desde-1974", "Since the dams, the yearly peak has never reached 600,000.");
passa("picos-desde-1974", "Since 2009, with the space reserved, it hasn't once, and six springs peaked between 450,000 and 600,000, right in the gap between the two numbers.", "a forma da pauta §4.3: passa", { semAlerta: ["[picos-sem-2009]"] });
reprova("sem-pagamento-enchente", "Without the payment, Portland would flood.");
reprova("sem-pagamento-enchente", "Without the space, the river would hit 600,000 every other year.");
passa("sem-pagamento-enchente", "Part of a flood that would reach Portland stays here.", "o fecho da pauta §7: passa");
reprova("canada-recusou", "The United States pays because Canada refused to help.");
reprova("canada-recusou", "Canada no longer has to help in a flood.");
passa("canada-recusou", "Canada has to help in a big flood, when the United States asks, and the United States pays the cost.", "a forma da pauta §4.3: passa");
reprova("paga-por-nada", "The United States pays for nothing.");
reprova("paga-por-nada", "Canada charges the United States for the space.");
reprova("paga-por-nada", "The yearly fee is 37.6 million dollars, adjusted for inflation.");
reprova("paga-por-nada", "The United States rents the empty space from Canada.");
passa("paga-por-nada", "The law pays for reserving and operating that space.", "a lei (L11): passa");
passa("paga-por-nada", "The teachers lived in rented quarters.", 'o "rented" fora do assunto (a Zona): passa');
reprova("estacao-mudou", "The dams flattened the river's year for the 2025 payment.");
reprova("estacao-mudou", "The water was moved mostly to make power.");
reprova("estacao-mudou", "The water was taken away.");
passa("estacao-mudou", ["The water wasn't taken away.", "It was moved: to make power in winter, and to leave room for the spring flood."], "a forma da pauta §4.3: passa");
reprova("rio-inteiro", "Canada's three dams can hold back the whole river for six weeks.");
reprova("rio-inteiro", "The three lakes store six weeks of the river.");
passa("rio-inteiro", ["Together, the three treaty lakes can store as much water as the whole river carries past The Dalles in about six weeks.",
  "Measured against the river as it flows through British Columbia, near the border, that's closer to three and a half months."],
  "a forma da pauta §4.3, com os dois denominadores: passa", { semAlerta: ["[dois-denominadores]"] });
reprova("dois-meses", "Count every other reservoir up there, and it's two months.");
passa("dois-meses", "Add the extra storage Canada built at Mica, outside the treaty, and it's closer to two months.", "a forma da pauta §4.3: passa");
reprova("canada-produz-39", "Canada produces 39 percent of the river's water.");
reprova("canada-produz-39", "About 39 percent of the water comes from Canada.");
passa("canada-produz-39", "At a river gauge in British Columbia, about a dozen miles north of the border, the Columbia already carries about 39 percent of the water that passes The Dalles, in Oregon.", "a forma da pauta §4.1 (o gancho A): passa");
reprova("agua-um-numero", "Canada sends about 38 percent of the water.");
reprova("agua-um-numero", "Canada produces 30 to 35 percent of the flow.");
reprova("agua-um-numero", "Half the water crosses the border from Canada.");
passa("agua-um-numero", "BC Hydro says Canada produces 30 to 35 percent of the inflow for the entire basin.", "com o lugar (a bacia, L12): passa");
passa("agua-um-numero", "In flood years, Canada has produced as much as 50 percent of the flows recorded at Portland.", "com o lugar (Portland, L12): passa");
reprova("venda-1964", "Canada sold 30 years of power starting in 1964.");
reprova("venda-1964", "The power was sold from 1973 to 2003.");
passa("venda-1964", "British Columbia sold the first 30 years of that power up front, for about 254 million dollars.", "a forma da pauta §4.2: passa");
reprova("big-bend", "The river turns at the Big Bend.");
passa("big-bend", "The river turns at the river's big bend in British Columbia.", "a forma da pauta §4.1: passa", { semAlerta: ["[curva-sem-lugar]"] });
reprova("assinado-ottawa", "The deal was signed in Ottawa.");
reprova("assinado-ottawa", "Both countries ratified it in 1961.");
passa("assinado-ottawa", "A treaty between the two countries was signed in 1961; it took effect in September 1964.", "a forma da pauta §4.2: passa");
reprova("grand-coulee-1942", "Grand Coulee Dam stopped the salmon in 1942.");
passa("grand-coulee-1942", "Grand Coulee Dam, from 1941, stopped the natural migratory runs of fish on the upper Columbia River.", "a forma da pauta §4.4: passa");
reprova("salmao-barragens", "The treaty dams killed the salmon.");
passa("salmao-barragens", "Grand Coulee Dam, from 1941, stopped the salmon on the upper Columbia River.", "o Grand Coulee (F10): passa");
reprova("salmao-cabeceiras", "Salmon once swam all the way to the headwaters.");
passa("salmao-cabeceiras", "Salmon once reached Canada, according to Canadian Geographic.", "o nível do fatos-c (11b): passa");
reprova("libby-ano", "Libby Dam was finished in 1973.");
caso("libby-ano-alerta", { trocasA: { [I]: "Libby Dam was completed in 1973, the Corps says, and formally dedicated in August 1975." } },
  { exit: 0, semProblema: ["[libby-ano]"], alerta: ["[libby-ano]"], nota: "com o dono (o USACE, fatos-c item 10): só alerta" });
passa("libby-ano", "Lake Koocanusa, behind Libby Dam, backs 42 miles into Canada.", "a forma da pauta §4.2, sem o ano: passa");
reprova("pagou-em-1964", "The United States paid 64.4 million dollars in 1964.");
passa("pagou-em-1964", "The United States paid 64.4 million dollars, once, for 60 years of flood protection: half of what the dams were expected to save it in flood damage.", "a forma da pauta §4.2: passa");
reprova("libby-nada", "Libby brought Canada nothing.");
passa("libby-nada", "And its water, regulated, makes extra power in Canada too, by the treaty's own count.", "a meia frase da pauta §4.2 (K10): passa");
reprova("desvio-numero", "Canada planned to divert 15.5 million acre-feet.");
passa("desvio-numero", "Canada answered with a plan to divert much of the upper Columbia for its own use, according to the US Congressional Research Service.", "a forma da pauta §4.2 (K7): passa");
reprova("vanport-mortos", "More than 50 people died at Vanport.");
reprova("vanport-mortos", "Fifteen people died in Vanport.");
reprova("vanport-mortos", ["Within an hour, Vanport was gone.", "Sixteen people died there."], "por pronome, na frase seguinte, sem o USGS");
passa("vanport-mortos", ["At least 15 people died in Vanport itself, by the Oregon Historical Society's count; the USGS's 1949 report says at least 16.",
  "Across the whole flood, at least 51 died."], "a forma do fatos-c (item 8, \"O que muda\", 3): passa", { semAlerta: ["[mortos-cheia-sem-dono]"] });
reprova("vanport-30000", "Vanport's 30,000 people lost their homes.");
passa("vanport-30000", "The flood displaced about 30,000 people, by the count of the US agencies that run the treaty.", "a forma do fatos-c (item 8): passa", { semAlerta: ["[30000-sem-dono]"] });
reprova("sinixt-extintos", "The Sinixt are extinct.");
reprova("sinixt-extintos", "Canada declared the Arrow Lakes Band extinct, so no one was consulted about the dams.");
passa("sinixt-extintos", "In 1956, the government of Canada declared the Arrow Lakes Band extinct.", "a forma da pauta §4.4 (a Corte, L7 §6): passa", { semAlerta: ["[sinixt-dono]"] });
reprova("sinixt-excluidos", "The Sinixt were left out of the talks.");
passa("sinixt-excluidos", "Canada's delegation includes representatives of three First Nations: the Ktunaxa, the Syilx Okanagan and the Secwépemc.", "a forma do fatos-c (item 12a): passa");
reprova("pago-em-dinheiro", "Canada's share is paid in cash every year.");
passa("pago-em-dinheiro", "Canada's share: half of the extra power the American dams can make thanks to the water stored in Canada, paid in electricity, not cash.", "a forma da pauta §4.2: passa");
reprova("vale-120", "Canada's share is worth about 120 million dollars a year.");
passa("vale-120", "Canada's share is worth between about 110 and 400 million dollars a year, by BC Hydro's count.", "a forma da pauta §4.5 (K2): passa", { semAlerta: ["[faixa-bc-hydro]"] });
reprova("duas-contas", "In 2012, the US agencies estimated that ending it would raise American power revenues by 180 to 280 million dollars a year.");
reprova("duas-contas", "The United States loses money on the treaty.");
passa("duas-contas", ["In 2012, the US agencies estimated that ending it would raise American power revenues by 180 to 280 million dollars a year, mostly because the US would stop delivering Canada's share.",
  "British Columbia disputed those assumptions."], "a forma do cético (K2; pauta §4.5), sem o \"that run the treaty\" (a frase da pauta tem 35 palavras): passa");
reprova("ate-2044", "The United States pays 37.6 million dollars a year through 2044.");
passa("ate-2044", "Under the agreement in principle, which has not been finalized, the payments would run through 2044.", "o AIP no condicional: passa");
reprova("nunca-finalizado", "It was never finalized.");
passa("nunca-finalizado", "It has not been finalized.", "a forma da pauta §4.5 (K10): passa");
reprova("deal-2025", "The money comes under a deal that began in 2025.");
passa("deal-2025", "It comes under a temporary deal that took effect for the spring floods of 2025.", "a forma da pauta §5 (K3): passa");
reprova("deal-31-julho", "The deal ends by July 31, 2027, at the latest.");
reprova("deal-31-julho", "Talks to replace it are on pause.");
passa("deal-31-julho", "The deal runs out after the spring of 2027, unless the two countries agree on something new.", "a forma da pauta §5 (K3): passa");
reprova("corte-37-sem-dono", "In August 2024, Canada's share was cut by about 37 percent.");
passa("corte-37-sem-dono", "Beginning August 1, 2024, Canada's share was cut by 37 percent, by the State Department's count.", "a forma da pauta §4.5 (K10): passa");
reprova("meio-vazio", "Every spring, the lake is left half empty.");
reprova("meio-vazio", "The Arrow Lakes Reservoir is emptied every spring.");
passa("meio-vazio", "Every spring, part of the Arrow Lakes Reservoir is emptied on purpose.", 'com o "part of" (o gancho A): passa');
reprova("eua-pararam", "The United States stopped paying in 2024.");
passa("eua-pararam", "Three utilities in Washington stopped paying in 2024.", "as PUDs (pauta §4.5): passa (o [puds] alerta)");
reprova("no-papel", "The deal holds, at least on paper.");
passa("no-papel", "The deal holds for now.", 'sem o "at least on paper": passa');
caso("37-sem-inflacao-reprova", { gancho: { 1: "And the United States pays Canada for that empty space: 37.6 million dollars a year." } },
  { exit: 1, problema: ["[37-sem-inflacao]"], so: true, nota: "o 37.6 na 1ª vez sem a inflação, nem na frase seguinte: reprova" });
caso("37-sem-inflacao-na-seguinte", { gancho: { 1: "And the United States pays Canada for that empty space: 37.6 million dollars a year.",
  2: "But that figure rises with inflation, under a temporary deal that took effect for the spring floods of 2025." } },
  { exit: 0, semProblema: ["[37-sem-inflacao]"], nota: "a inflação na frase seguinte: passa" });
reprova("37-sem-inflacao", "That 64.4 million paid for 60 years; today the United States pays 37.6 million every year.", "os 64,4 ao lado dos 37,6 sem a inflação: reprova");
passa("37-sem-inflacao", "The United States pays 37.6 million dollars again in 2026, before inflation.", "o 37.6 depois da 1ª vez, sem os 64,4: passa");
reprova("trump", "Trump called it a very large faucet.");
passa("trump", "The new US administration paused the talks, British Columbia's government announced.", 'a forma da pauta §5 ("the new US administration", com o dono): passa', { semAlerta: ["[pausa-sem-dono]"] });
reprova("carney-eby", "Prime Minister Carney has said nothing about it.");
reprova("carney-eby", "Premier Eby called the river vital.");
reprova("dix-2026", "In 2026, Dix said the river was safe.");
passa("dix-2026", "In March 2025, British Columbia's energy minister, Adrian Dix, spoke about the treaty.", "com o cargo e a data de 2025: passa", { semAlerta: ["[dix]"] });
reprova("sinal-gac", "Canada says it will wait for a signal from the U.S.");
caso("sinal-gac-alerta", { trocasA: { [I]: "A May 2025 briefing note for Canada's foreign minister said Canada waits for a signal from the U.S. to resume." } },
  { exit: 0, semProblema: ["[sinal-gac]"], alerta: ["[sinal-gac]"], nota: "com o tipo do documento (a nota de Question Period): só alerta" });
reprova("wrda-lei", "Congress extended the payment to 2030.");
reprova("wrda-lei", "A new law extends the deal.");
reprova("wrda-lei", "The payments now run through 2030.");
passa("wrda-lei", ["The law that authorizes the payment expires at the end of August 2027, unless Congress extends it.", "Bills in both chambers would."], "a forma do fatos-c (\"O que muda\", 8): passa");
reprova("retomada", "Talks have resumed.");
reprova("retomada", "The two countries continue to negotiate a new treaty.");
passa("retomada", "No later report we found says the talks have resumed.", "a negação: passa");
reprova("aviso-saida", "The United States has given notice to leave the treaty.");
passa("aviso-saida", "A US congressional report said in December 2024 that neither side had given it, and no later report we found mentions one.", "a forma da pauta §4.3: passa");
passa("aviso-saida", "To date, neither country has given notice.", 'o CRS ("neither"): passa');
reprova("juizo", "It is a bad deal for Canada.");
reprova("juizo", "The United States overpays.");
reprova("juizo", "Canada comes out ahead.");
passa("juizo", "Each side has its own count of what the other gains.", "passa");
passa("juizo", "A State Department memo called the old access unfair competition.", "atribuído (a Zona): passa");
reprova("apagados", "Their towns were erased.");
passa("apagados", "Renata no longer exists.", "a forma da pauta §4.4: passa");
reprova("renata-fogo", "Houses in Renata were burned.");
passa("renata-fogo", "Renata no longer exists.", "a forma da pauta §4.4: passa");
reprova("pausa-sem-data", "The talks are still paused.");
passa("pausa-sem-data", "As of August 2026, according to Canadian Geographic, the talks were still paused.", "a forma do fatos-c (\"O que muda\", 9): passa");
passa("pausa-sem-data", "In June 2026, BC Hydro still called them paused.", "a forma da pauta §4.5: passa");
reprova("area-na-tela", "The reservoirs flooded about 110,000 hectares.");
reprova("area-na-tela", "The lakes covered 270,000 acres of valley.");
passa("area-na-tela", "An acre-foot is enough water to cover an acre of land one foot deep.", 'o acre-pé definido (pauta §4.2): passa');
reprova("energia-na-tela", "Canada's share falls from 1,141 megawatts to 550.");
reprova("energia-na-tela", "That is more than 200,000 kilowatt years of energy.");
passa("energia-na-tela", "Canada's share falls by about half.", "passa");
reprova("vazao-na-tela", "In June, the river carried 6,134 cubic meters per second.");
passa("vazao-na-tela", "Before the dams, the river here carried about ten times more water in June than in February.", "a forma da pauta §7: passa");
reprova("valores-na-tela", "British Columbia sold that power for 253,929,534 dollars.");
reprova("valores-na-tela", "Arrow alone was paid 52.1 million dollars.");
reprova("valores-na-tela", "The utilities agreed to pay 29.9 million dollars.");
passa("valores-na-tela", "British Columbia sold the first 30 years of that power up front, for about 254 million dollars.", "a forma da pauta §4.2: passa");
reprova("aip-flexivel", "The United States can ask for zero to four million acre-feet, four years ahead.");
passa("aip-flexivel", "It has not been finalized.", "passa");
reprova("datas-na-tela", "Duncan was finished in 1967, Keenleyside in 1968, and Mica in 1973.");
reprova("datas-na-tela", "In 1951, the United States proposed Libby Dam.");
passa("datas-na-tela", "A few years later, the United States proposed a dam whose lake would reach into Canada.", "a forma da pauta §4.2: passa");
reprova("nivel-arrow", "In February 2017, the lake fell to 1,401.4 feet.");
reprova("nivel-arrow", "In 2017, the lake hit its lowest level.");
passa("nivel-arrow", "In February, the lake sits at its lowest point of the year.", "o fecho da pauta §7, sem o nível: passa");
reprova("sinixt-numeros", "In 1902, there were 21 Sinixt; by 1930, one.");
passa("sinixt-numeros", "In 1956, the government of Canada declared the Arrow Lakes Band extinct.", "a forma da pauta §4.4: passa");
reprova("salmao-26", "For 26 years, salmon reached Canada.");
passa("salmao-26", "Salmon once reached Canada, according to Canadian Geographic.", "passa");
reprova("fontes-de-fundo", "The EIA counts the river's hydropower.");
passa("fontes-de-fundo", "It is the largest hydropower-producing river system in the United States.", "passa");
reprova("bargaining-chip", 'Dix said, "The treaty will not be a bargaining chip."');
reprova("bargaining-chip", ['"It won\'t be a bargaining chip.', 'Not in this fight," the minister said.'], "a fala citada atravessa duas frases: reprova pelo parágrafo");
passa("bargaining-chip", "In March 2025, British Columbia's energy minister said the treaty would not be used as a bargaining chip in the trade fight.", "a paráfrase do fatos-c (\"O que muda\", 1): passa");
reprova("mais-importante-aspas", 'The State Department called Keenleyside "the most important of the Canadian dams."');
reprova("mais-importante-aspas", "The State Department says Keenleyside is the most important dam.");
passa("mais-importante-aspas", "Keenleyside, the Canadian dam that matters most for flood control, holds that space.", "a meia frase do fatos-c (\"O que muda\", 4): passa");
// as regras do Cassino saíram: o que o portão do vídeo 6 reprovava passa aqui
passa("maior-praia-do-cassino", "Praia do Cassino is the world's longest beach.", "a regra do vídeo 6 saiu: passa");
passa("reta-do-cassino", "The beach is perfectly straight.", "a regra do vídeo 6 saiu: passa");
passa("foguetes-do-cassino", "NASA launched 21 rockets from the beach.", "a regra do vídeo 6 saiu: passa");
passa("altair-do-cassino", "The Altair may disappear one day.", "o alerta do vídeo 6 saiu: passa sem alerta", { semAlerta: ["[altair]"] });

// ---- os alertas do Columbia -------------------------------------------------------------------------------------------
secao("Os alertas do Columbia (nunca reprovam)");
alerta("picos-sem-2009", "Six springs peaked between 450,000 and 600,000.");
alerta("dois-denominadores", "Together, the three treaty lakes can store as much water as the whole river carries past The Dalles in about six weeks.");
alerta("gatilho-sem-crs", "US planners projected that Canadian storage would come into play between 450,000 and 650,000 cubic feet per second.");
passa("gatilho-sem-crs", ["US planners projected that Canadian storage would come into play between 450,000 and 650,000 cubic feet per second.",
  "That's according to the US Congressional Research Service."], "com o CRS na frase seguinte: sem alerta");
alerta("estudo-bc", "Its own estimate says on-call flood control alone would cost the US 40 to 150 million dollars a year in lost power.");
alerta("faixa-bc-hydro", "Canada's share is worth between 110 and 400 million dollars a year.");
alerta("mortos-cheia-sem-dono", "Across the whole flood, at least 51 people died.");
alerta("30000-sem-dono", "The flood displaced about 30,000 people.");
alerta("sinixt-dono", "The Arrow Lakes Band was declared extinct in 1956.");
alerta("dix", "Adrian Dix spoke about the treaty.");
alerta("barton", "Arrow is the most critical Canadian reservoir for flood risk management.");
alerta("cbc", "In 2025, CBC News asked whether this treaty could be used in the tariff fight.");
alerta("puds", "Three utilities in Washington stopped paying in 2024.");
alerta("pausa-sem-dono", "The US administration paused the talks.");
alerta("comprimento-rio", "The Columbia runs about 1,243 miles.");
alerta("quantia-fixa", "The deal keeps a fixed amount of room.");
alerta("quem-vendeu", "Canada sold the first 30 years of that power.");
alerta("curva-sem-lugar", "The river turns at its big bend.");
alerta("every-sem-data", "Every spring, the United States pays for that empty space.");
passa("every-sem-data", "Every spring, the United States pays for that empty space, under a deal that took effect for the spring floods of 2025.", "com a data absoluta: sem alerta");
alerta("acre-pe", "The three dams hold 15.5 million acre-feet.");
passa("acre-pe", ["The three dams hold 15.5 million acre-feet.", "An acre-foot is enough water to cover an acre of land one foot deep."], "definido na frase seguinte: sem alerta");
caso("uma-vez-no-gancho-alerta", { trocasA: { [I]: "At a river gauge in British Columbia, the Columbia carries about 39 percent of the water that passes The Dalles.", 40: "That 39 percent is the average of 88 years.", 60: "Those 88 years start in 1938." } },
  { exit: 0, alerta: ["[uma-vez-no-gancho]", '"39 percent" 2 vezes', '"88 years" 2 vezes'], nota: "os 39 % e os 88 anos ditos duas vezes: alerta (K6)" });
caso("deal-treaty-apresentado-alerta", { trocasA: { [I]: "The treaty shapes the river." } },
  { exit: 0, alerta: ['[deal-treaty-apresentado] ("the treaty"'], nota: '"the treaty" sem ter sido apresentado: alerta (os leitores)' });
caso("deal-treaty-apresentado-passa", { trocasA: { 19: "A treaty between the two countries was signed in 1961.", [I]: "The treaty shapes the river." } },
  { exit: 0, semAlerta: ["[deal-treaty-apresentado]"], nota: "apresentado antes (\"A treaty between the two countries…\"): sem alerta" });
caso("deal-apresentado-alerta", { gancho: { 2: "But the deal pays for it, and it took effect for the spring floods of 2025." } },
  { exit: 0, alerta: ['[deal-treaty-apresentado] ("the deal"'], nota: '"the deal" no gancho sem "a temporary deal" antes: alerta' });
const CINCO = (n) => `The crew logged ${n} posts, ${n + 1} barrels, ${n + 2} signs, ${n + 3} fuses and ${n + 4} gates.`;
const NOVE = Array.from({ length: 9 }, (_, k) => CINCO(100 + 10 * k));
const emSeq = (l) => Object.fromEntries(l.map((f, k) => [I + k, f]));   // troca frases seguidas do corpo (sem crescer a faixa)
caso("numeros-50", { trocasA: emSeq([...NOVE, "The crew logged 301 posts and 302 barrels."]) },
  { exit: 0, semAlerta: ["[numeros-falados]"], nota: "50 números (3 do gancho + 47): sem alerta" });
caso("numeros-51", { trocasA: emSeq([...NOVE, "The crew logged 301 posts, 302 barrels and 303 signs."]) },
  { exit: 0, alerta: ["[numeros-falados] (51 números"], nota: "51 números: alerta (a pauta §7 orça 47 e mira 45)" });
const cNum = caso("numeros-conta", { trocasA: { [I]: ["From 1879 to 1967, the yearly peak passed 600,000 in 40 of 89 years.", "On September 16, 1964, the leaders met at the border.", "The lakes hold as much as the whole river carries past The Dalles in about six weeks."] } },
  { exit: 0, args: ["--onde"], nota: "a conta: a faixa, o 40 de 89 e a data contam uma vez cada; \"six weeks\" conta" });
if (cNum.laudo) {
  const ns = cNum.laudo.numeros_falados.onde.map((o) => o.numero);
  conferir(cNum.laudo.numeros_falados.total === 8 && ["1879 to 1967", "600,000", "40 of 89", "1964", "six"].every((n) => ns.includes(n)),
    `a conta dos números: ${cNum.laudo.numeros_falados.total} (os 3 do gancho e ${ns.slice(3).map((n) => `"${n}"`).join(", ")}; "the leaders" e "the three" não contam)`);
}
// as palavras de ALERTA do molde, todas ficam
const alertaPalavra = (nome, frase, re) => caso(`palavra-${nome}`, { trocasA: { [I]: frase } }, { exit: 0, alerta: [`conferir ${re}`], nota: `"${frase}"` });
alertaPalavra("everyone", "Everyone on the crew agreed on the count.", String.raw`/\beveryone\b/i`);
alertaPalavra("nobody", "Nobody on the crew questioned the count.", String.raw`/\bnobody\b/i`);
alertaPalavra("never", "The crew never questioned the count.", String.raw`/\bnever\b/i`);
alertaPalavra("first", "The first count came back at dawn.", String.raw`/\bfirst\b/i`);
alertaPalavra("last", "Last summer, the crew counted the posts again.", String.raw`/\blast\b/i`);
alertaPalavra("always", "The crew always checked the count twice.", String.raw`/\balways\b/i`);
alertaPalavra("mystery", "The empty lake is no mystery.", String.raw`/\bmyster(y|ies|ious)\b/i`);
alertaPalavra("secret", "The river keeps no secret from the map.", String.raw`/\bsecrets?\b/i`);
alertaPalavra("still", "The fishermen still work the river.", String.raw`/\b(still|today|now|currently)\b/i`);
alertaPalavra("here", "Out here, the nights are dark.", String.raw`/\bhere\b/i`);
alertaPalavra("this-line", "Follow this line to the border.", String.raw`/\bthis line\b/i`);
// as VETADAS do molde ficam: "regime" (de "the regime") também pega o regime do rio
caso("vetada-regime", { trocasA: { [I]: "The dams changed the river's flow regime." } },
  { exit: 1, problema: ["vetada (voz §2) /\\bregime\\b/i"], so: true, nota: '"flow regime" reprova pela VETADA do molde: escreva "the river\'s year" ou "the seasons of the river"' });

// ---- a inscrição falada ------------------------------------------------------------------------------------------------
secao("A inscrição falada (voz §3; cta §1, §5 e §6)");
const naPosicao = (nome, alvo, esperado) => {
  const s = corteEm(alvo), a = CORPO.slice(0, s), b = CORPO.slice(s), e = estima(GANCHO, a, b);
  const r = caso(nome, { a, b }, { ...esperado, nota: `${esperado.nota} (a conta daqui: ${e.pct.toFixed(1)} %)` });
  if (r.laudo?.inscricao) conferir(Math.abs(r.laudo.inscricao.percentual - e.pct) < 0.06, `${nome}: o portão dá ${r.laudo.inscricao.percentual} % (${r.laudo.inscricao.inicio}), a conta daqui ${e.pct.toFixed(1)} %`);
  return r;
};
naPosicao("insc-a-33", 33, { exit: 1, problema: ["[inscricao-posicao]"], so: true, nota: "abaixo de 35 %: reprova" });
naPosicao("insc-a-36", 36, { exit: 0, alerta: ["[inscricao-margem]"], semProblema: ["[inscricao-posicao]"], nota: "entre 35 % e 37 %: alerta" });
naPosicao("insc-a-50", 50, { exit: 0, semAlerta: ["[inscricao-"], semProblema: ["[inscricao-"], nota: "no meio: passa sem alerta" });
naPosicao("insc-a-59", 59, { exit: 0, alerta: ["[inscricao-margem]"], semProblema: ["[inscricao-posicao]"], nota: "entre 58 % e 60 %: alerta" });
naPosicao("insc-a-62", 62, { exit: 1, problema: ["[inscricao-posicao]"], so: true, nota: "acima de 60 %: reprova" });
caso("insc-ausente", { insc: null }, { exit: 1, problema: ["[inscricao-ausente]"], so: true, nota: "nenhuma frase com \"subscribe to Alpha Point\": reprova" });
caso("insc-duas", { trocasB: { 10: "If the river kept you here, subscribe to Alpha Point." } }, { exit: 1, problema: ["[inscricao-mais-de-uma]"], so: true, nota: "duas: reprova (o \"here\" alerta)" });
caso("insc-outro-subscribe", { trocasB: { 10: "The ranger told the crew to subscribe to the county newsletter." } }, { exit: 1, problema: ["[inscricao-outro-subscribe]"], so: true, nota: "outro \"subscrib…\" no texto: reprova" });
caso("insc-sem-alpha-point", { insc: "If you've followed the river this far, subscribe to the channel." },
  { exit: 1, problema: ["[inscricao-ausente]", "[inscricao-outro-subscribe]"], so: true, nota: "\"subscribe to the channel\": reprova (ausente, e o \"subscrib…\" fora dela)" });
caso("insc-no-gancho", { insc: null, gancho: [...GANCHO.slice(0, 4), INSC, GANCHO[4]] },
  { exit: 1, problema: ["[inscricao-gancho]", "[inscricao-posicao]", "[inscricao-primeiro-minuto]", "[inscricao-paragrafo]"], so: true, nota: "antes da assinatura: reprova (e no 1º minuto, fora da janela, e no meio do parágrafo do gancho)" });
caso("insc-no-fecho", { insc: null, trocasB: { [B.length - 1]: [B[B.length - 1], INSC] } },
  { exit: 1, problema: ["[inscricao-fecho]", "[inscricao-posicao]"], so: true, nota: "depois da marca do fecho: reprova" });
caso("insc-no-fecho-sem-marca", { insc: null, fecho: false, trocasB: { [B.length - 1]: [B[B.length - 1], INSC] } },
  { exit: 1, problema: ["[inscricao-fecho]", "[inscricao-posicao]"], so: true, alerta: ["[inscricao-ato]"], nota: "sem a marca do fecho, a última frase do texto (nas 8 últimas): reprova" });
caso("insc-meio-do-paragrafo", { lugar: "meio" }, { exit: 1, problema: ["[inscricao-paragrafo]"], so: true, nota: "a 3ª de 6 frases do parágrafo: reprova" });
caso("insc-penultima-sem-volta", { lugar: "penultima" }, { exit: 1, problema: ["[inscricao-paragrafo]"], so: true, nota: "a penúltima, com uma frase qualquer depois: reprova" });
caso("insc-penultima-com-volta", { lugar: "penultima-volta" }, { exit: 0, semProblema: ["[inscricao-"], semAlerta: ["[inscricao-"], nota: "a penúltima, com \"Back to the river, then.\" por último: passa" });
caso("insc-volta-now", { lugar: "penultima-volta", volta: "Now, back to the river." },
  { exit: 0, semProblema: ["[inscricao-"], semAlerta: ["[inscricao-"], alerta: [String.raw`conferir /\b(still|today|now|currently)\b/i`], nota: "a volta do exemplo do Lucas (\"Now, back to the river.\"): passa, e o \"Now\" dispara o alerta do presente do molde" });
caso("insc-inicio-do-ato", { lugar: "inicio" }, { exit: 0, semProblema: ["[inscricao-"], semAlerta: ["[inscricao-"], nota: "a primeira do parágrafo, com a marca de ato antes: passa" });
caso("insc-sem-ato", { marcas: false }, { exit: 0, alerta: ["[inscricao-ato]"], semProblema: ["[inscricao-"], nota: "na fronteira de parágrafo, sem marca de ato: alerta" });
const inscReprova = (nome, frase, id, nota) => caso(`insc-${nome}`, { insc: frase }, { exit: 1, problema: [id], so: true, nota: nota ?? `"${frase}"` });
inscReprova("smash", "If you've followed the river this far, smash that subscribe to Alpha Point button.", '"smash"');
inscReprova("hit-the-like", "If you've followed the river this far, hit the like and subscribe to Alpha Point.", '"hit the like"');
inscReprova("like-button", "If you've followed the river, tap the like button and subscribe to Alpha Point.", '"like button"');
inscReprova("leave-a-like", "If you've followed the river this far, leave a like and subscribe to Alpha Point.", '"leave a like"');
inscReprova("ring-the-bell", "If you've followed the river this far, subscribe to Alpha Point and ring the bell.", '"ring the bell"');
inscReprova("bell", "If you've followed the river this far, subscribe to Alpha Point and tap the bell.", '"bell"');
inscReprova("dont-forget", "Don't forget to subscribe to Alpha Point if you've followed the river this far.", "\"don't forget\"");
inscReprova("make-sure", "If you've followed the river this far, make sure to subscribe to Alpha Point.", '"make sure"');
inscReprova("please", "If you've followed the river this far, please subscribe to Alpha Point.", '"please"');
inscReprova("comment", "If you've followed the river this far, subscribe to Alpha Point and leave a comment.", '"comment"');
inscReprova("every-week", "If you want a river story every week, subscribe to Alpha Point.", '"every week"');
inscReprova("numero", "If you've followed the river for five minutes, subscribe to Alpha Point.", "[inscricao-numero]");
inscReprova("plateia", "If you're new here, subscribe to Alpha Point, like most of you haven't.", "[inscricao-plateia]");
inscReprova("25-palavras", "If you have followed this long and winding river all the way from the lake in the north to the dam in the south, subscribe to Alpha Point.", "[inscricao-longa]");
const inscAlerta = (nome, frase, id, nota) => caso(`insc-${nome}`, { insc: frase }, { exit: 0, alerta: [id], semProblema: ["[inscricao-"], nota: nota ?? `"${frase}"` });
inscAlerta("17-palavras", "If you have followed the river from the lake down to the dam, subscribe to Alpha Point today.", "[inscricao-16]");
inscAlerta("sem-if", "You've followed the river this far, so subscribe to Alpha Point.", "[inscricao-if]");
inscAlerta("sem-you", "If the river held up so far, subscribe to Alpha Point.", "[inscricao-you]");
caso("insc-like-verbo", { insc: "If you like tracing a claim back to its source, subscribe to Alpha Point." },
  { exit: 0, semProblema: ["[inscricao-"], semAlerta: ["[inscricao-"], nota: 'o "like" verbo (a opção 2 do Cassino): passa' });
caso("insc-depois-de-citacao", { trocasA: { [A.length - 1]: 'The county clerk wrote "all clear" in the log.' } },
  { exit: 0, alerta: ["[inscricao-citacao]"], semProblema: ["[inscricao-"], nota: "a frase de antes com aspas: alerta" });
caso("insc-depois-de-numero-heroi", { trocasA: { [A.length - 1]: "The survey team counted 2,300 posts along the north gate." } },
  { exit: 0, alerta: ["[inscricao-numero-heroi]"], semProblema: ["[inscricao-"], nota: "a frase de antes com um número grande: alerta" });
caso("insc-depois-de-ano", { trocasA: { [A.length - 1]: "The survey team counted the posts in 1964." } },
  { exit: 0, semAlerta: ["[inscricao-numero-heroi]"], nota: "a frase de antes só com um ano: sem alerta" });
caso("insc-depois-de-60-anos", { trocasA: { [A.length - 1]: "For 60 years, that was the deal." } },
  { exit: 0, semAlerta: ["[inscricao-numero-heroi]", "[inscricao-citacao]"], nota: "o fecho do ato 2 da pauta (\"For 60 years, that was the deal.\"), onde a pauta põe a inscrição: sem alerta" });

// ---- o gancho A da pauta §8 -------------------------------------------------------------------------------------------
secao("O gancho A da pauta §8");
const GANCHO_A = [
  "Every spring, before the floods, part of the Arrow Lakes Reservoir, in British Columbia, is emptied on purpose.",
  "And the United States pays Canada for that empty space: 37.6 million dollars a year, adjusted for inflation.",
  "It's a temporary deal, and it took effect for the spring floods of 2025.",
  "Only about 15 percent of the Columbia River's basin lies in Canada.",
  "Yet look at a river gauge in British Columbia, about a dozen miles north of the border.",
  "The Columbia there already carries about 39 percent of the water that passes The Dalles, in Oregon.",
  "That's the average of 88 years.",
  "The deal runs out after the spring of 2027, unless the two countries agree on something new.",
  "And talks on a new treaty have been on pause since March 2025.",
  "Here's the strange part.",
  "Even without this deal, the treaty still lets the United States call on Canada for help in a big flood.",
  "So why does the United States pay for empty space, when it can already call on Canada in a flood?",
  "You're at Alpha Point, and this is where the story of the lake that waits for the flood begins.",
];
const gA = caso("gancho-a-so", `# Why the U.S. Pays Canada to Keep Part of a Lake Empty\n\n<!-- gancho A da pauta §8 -->\n\n${GANCHO_A.join(" ")}\n`,
  { exit: 1, problema: ["palavras:", 'o "But" do gancho', "o gancho tem 196 palavras", "[inscricao-ausente]"], so: true,
    semProblema: ["não se diz [", "título [", "a primeira frase"], semAlerta: ["título [", "[37-sem-inflacao]", "[every-sem-data]", "[canada-"],
    nota: 'o gancho A sozinho: nenhum "não se diz", nenhuma regra do título nem da 1ª frase; reprova pela faixa (sem corpo), pelo "But" (o "Yet" cai na palavra 61), pelo teto de 170 palavras (196) e pela inscrição ausente' });
if (gA.laudo) {
  conferir(gA.laudo.gancho.palavras_ate_assinatura === 196 && gA.laudo.gancho.but_na_palavra === null,
    `o gancho A tem ${gA.laudo.gancho.palavras_ate_assinatura} palavras até a assinatura no texto do narrador (${gA.laudo.gancho.segundos_estimados} s a 179; a pauta §8 conta 195 na cópia para a voz, com os números por extenso), e nenhum "But"`);
  conferir(gA.laudo.numeros_falados.ate_assinatura === 8, `o gancho A tem ${gA.laudo.numeros_falados.ate_assinatura} números pela conta do portão (a pauta conta 7; o portão conta também "a dozen miles")`);
  linhas.push(`  - os alertas do gancho A, para quem escreve: ${gA.laudo.alertas.map((a) => a.replace(/ \(.*$/, "").slice(0, 80)).join(" · ")}`);
}
const A_GA = corteEm(45, GANCHO_A), aGA = CORPO.slice(0, A_GA), bGA = CORPO.slice(A_GA);
const GA_PROB = ['o "But" do gancho', "o gancho tem 196 palavras"];
const gAc = caso("gancho-a-com-corpo-insc-certa", { gancho: GANCHO_A, a: aGA, b: bGA },
  { exit: 1, problema: GA_PROB, so: true, semAlerta: ["[inscricao-"], nota: "o gancho A com um corpo e a inscrição numa fronteira entre atos, a ~45 %: só o \"But\" e o teto do gancho" });
if (gAc.laudo?.inscricao) linhas.push(`  - a inscrição: parágrafo ${gAc.laudo.inscricao.paragrafo}, ${gAc.laudo.inscricao.inicio} de ${gAc.laudo.inscricao.duracao_video} (${gAc.laudo.inscricao.percentual} %)`);
caso("gancho-a-com-corpo-insc-no-gancho", { gancho: [...GANCHO_A.slice(0, 12), INSC, GANCHO_A[12]], a: aGA, b: bGA, insc: null },
  { exit: 1, problema: [...GA_PROB.slice(0, 1), "o gancho tem 207 palavras", "[inscricao-gancho]", "[inscricao-posicao]", "[inscricao-primeiro-minuto]", "[inscricao-paragrafo]"], so: true, nota: "a inscrição antes da assinatura: reprova (no gancho, no 1º minuto, fora da janela e no meio do parágrafo)" });
caso("gancho-a-com-corpo-insc-no-meio", { gancho: GANCHO_A, a: aGA, b: bGA, lugar: "meio" },
  { exit: 1, problema: [...GA_PROB, "[inscricao-paragrafo]"], so: true, nota: "a inscrição no meio do parágrafo: reprova" });
const A_GA62 = corteEm(62, GANCHO_A);
caso("gancho-a-com-corpo-insc-tarde", { gancho: GANCHO_A, a: CORPO.slice(0, A_GA62), b: CORPO.slice(A_GA62) },
  { exit: 1, problema: [...GA_PROB, "[inscricao-posicao]"], so: true, nota: "a inscrição a ~62 %: reprova" });
caso("gancho-a-com-corpo-insc-no-fecho", { gancho: GANCHO_A, a: aGA, b: bGA, insc: null, trocasB: { [bGA.length - 1]: [bGA[bGA.length - 1], INSC] } },
  { exit: 1, problema: [...GA_PROB, "[inscricao-fecho]", "[inscricao-posicao]"], so: true, nota: "a inscrição no fecho: reprova" });
caso("gancho-a-but-na-4a", { gancho: GANCHO_A.map((f, i) => (i === 3 ? "But only about 15 percent of the Columbia River's basin lies in Canada." : f)), a: aGA, b: bGA },
  { exit: 1, problema: ['o "But" do gancho (o 2º tempo) começa na palavra 51', "o gancho tem 197 palavras"], so: true, nota: 'com "But only about 15 percent…" na 4ª frase, o "But" cai na palavra 51: ainda reprova por uma palavra (as 3 primeiras frases do gancho A têm 51 pela conta do molde, que parte o "37.6" em dois)' });
caso("gancho-a-but-na-3a", { gancho: GANCHO_A.map((f, i) => (i === 2 ? "But it's a temporary deal, and it took effect for the spring floods of 2025." : f)), a: aGA, b: bGA },
  { exit: 1, problema: ["o gancho tem 197 palavras"], so: true, nota: 'com "But it\'s a temporary deal…" na 3ª frase, o "But" cai na palavra 39 e passa; fica o teto de 170' });

// ---- o fecho (do molde) -----------------------------------------------------------------------------------------------
secao("O fecho (alerta; fica do molde)");
const NB = B.length;
caso("fecho-repete-pergunta", { trocasB: { [NB - 1]: "The clerk wondered why anyone would pay to keep a lake low." } },
  { exit: 0, alerta: ["o fecho repete a pergunta do gancho"], nota: '"pay to keep a lake" (5 palavras da pergunta) na última frase' });
caso("fecho-4-palavras", { trocasB: { [NB - 1]: "The clerk saw them keep a lake low." } },
  { exit: 0, semAlerta: ["o fecho repete a pergunta do gancho"], nota: '"keep a lake low": 4 palavras da pergunta, sem alerta' });
caso("fecho-pergunta-fora-das-8", { trocasB: { [NB - 9]: "The clerk wondered why anyone would pay to keep a lake low." } },
  { exit: 0, semAlerta: ["o fecho repete a pergunta do gancho"], nota: "a mesma frase na 9ª antes do fim: sem alerta" });
caso("fecho-em-lista", { trocasB: { [NB - 3]: "First, the snow melted over the peaks.", [NB - 2]: "Then the river rose, slowly.", [NB - 1]: "Finally, the lake filled in." } },
  { exit: 0, alerta: ["o fecho em lista: 3 das 8"], nota: '"First…", "Then…", "Finally…" nas 3 últimas' });
caso("fecho-2-da-lista", { trocasB: { [NB - 3]: "First, the snow melted over the peaks.", [NB - 2]: "Then the river rose, slowly." } },
  { exit: 0, semAlerta: ["o fecho em lista"], nota: "duas aberturas de lista: sem alerta" });

// ---- o autoplágio com o Cassino ---------------------------------------------------------------------------------------
secao("O autoplágio compara também com o roteiro do vídeo 6");
caso("autoplagio-cassino", { trocasA: { [I]: "You'll read the same line in Brazilian newspapers, year after year." } },
  { exit: 0, alerta: [`autoplágio (6+ palavras iguais a ${ROTEIRO_C})`], nota: "uma frase do roteiro do Cassino" });

// ---- as frases que a pauta e o fatos-c recomendam, juntas ---------------------------------------------------------------
secao("As frases seguras da pauta (§4, §5, §7) e do fatos-c, juntas num texto: nenhuma reprova");
const SEGURAS = [
  "So where does all that water come from, and when?",
  "The Columbia starts in Columbia Lake, in British Columbia.",
  "The river makes a third or more of its journey in Canada, and it turns at the river's big bend in British Columbia.",
  "About 60 percent of the river's yearly runoff comes in May, June and July.",
  "It is the largest hydropower-producing river system in the United States.",
  "As BC Hydro puts it, most of the power and most of the need for flood control are in the United States.",
  "The big storage sites are in Canada.",
  "Before the dams, the river here carried about ten times more water in June than in February.",
  "A river like that floods.", "And in 1948, it did.",
  "What do you do with a river that arrives all at once?",
  "In 1948, a spring flood caused major damage from Trail, British Columbia, to Vanport, Oregon.",
  "At least 15 people died in Vanport itself, by the Oregon Historical Society's count; the USGS's 1949 report says at least 16.",
  "Across the whole flood, at least 51 died.",
  "The flood displaced about 30,000 people, by the count of the US agencies that run the treaty.",
  "A few years later, the US proposed a dam whose lake would reach into Canada.",
  "Canada answered with a plan to divert much of the upper Columbia for its own use, according to the US Congressional Research Service.",
  "A treaty between the two countries was signed in 1961; it took effect in September 1964, and the two countries' leaders marked it at the border.",
  "Canada built three storage dams that hold 15.5 million acre-feet.",
  "An acre-foot is enough water to cover an acre of land one foot deep.",
  "The United States built Libby Dam, whose reservoir, Lake Koocanusa, backs 42 miles into Canada.",
  "And its water, regulated, makes extra power in Canada too, by the treaty's own count.",
  "The United States paid 64.4 million dollars, once, for 60 years of flood protection: half of what the dams were expected to save it in flood damage.",
  "Canada's share: half of the extra power the American dams can make thanks to the water stored in Canada, paid in electricity, not cash.",
  "British Columbia sold the first 30 years of that power up front, for about 254 million dollars.",
  "So American money helped build Canada's dams.",
  "For 60 years, that was the deal.",
  "So could Canada turn this river off, and if it can't, what is the United States paying for?",
  "In 2025, as the tariff fight grew, CBC News asked whether this treaty could be used in it.",
  "In March 2025, British Columbia's energy minister, Adrian Dix, said the treaty would not be used as a bargaining chip in the trade fight.",
  '"Canadian action to terminate the treaty would have little effect on the current dispute," he said.',
  "Together, the three treaty lakes can store as much water as the whole river carries past The Dalles in about six weeks.",
  "Measured against the river as it flows through British Columbia, near the border, that's closer to three and a half months.",
  "So Canada can't turn the Columbia off.",
  "What it can do, under a plan agreed with the United States, is decide when a big share of its water comes down.",
  "Add the extra storage Canada built at Mica, outside the treaty, and it's closer to two months.",
  "The water wasn't taken away.", "It was moved: to make power in winter, and to leave room for the spring flood.",
  "Canada did not turn over control of its reservoirs to the United States, BC Hydro says.",
  "Without the treaty, Canada would be able to operate its dams for its own benefit, according to the Congressional Research Service.",
  "Leaving takes ten years' written notice.",
  "A US congressional report said in December 2024 that neither side had given it, and no later report we found mentions one.",
  "In September 2024, the flood part of the treaty changed.",
  "Canada still has to help in a big flood, when the United States asks, and the United States pays the cost.",
  "But the treaty never says how big a flood that is.",
  "In studies for the treaty's review, US planners projected that Canadian storage would come into play when the river at The Dalles peaks somewhere between 450,000 and 650,000 cubic feet per second.",
  "British Columbia assumed it would be called only at 600,000, which it expected to be rare.",
  "That's according to the US Congressional Research Service.",
  "From 1879 to 1967, the river's yearly peak at The Dalles passed 600,000 in 40 of 89 years.",
  "Since 2009, with the space reserved, it hasn't once, and six springs peaked between 450,000 and 600,000, right in the gap between the two numbers.",
  "So in January 2025, Congress authorized the payment.",
  'The law says it covers 3.6 million acre-feet of flood storage every year at Hugh Keenleyside Dam, "including operations that the Government of Canada may not be obligated to provide" under the treaty.',
  "The lake drops every winter anyway, as water moves downstream for power.",
  "What the US pays for is a guarantee: 3.6 million acre-feet of room, every year of the deal.",
  "So the power here isn't a tap.", "It's a calendar.",
  "What the United States buys is certainty.",
  "And who was living where that space is now?",
  "Approximately 2,300 people were displaced and more than a dozen small communities were inundated, according to the government of British Columbia.",
  "Renata no longer exists.", "Edgewood, Fauquier and Burton were moved.",
  "Grand Coulee Dam, from 1941, stopped the natural migratory runs of fish on the upper Columbia River.",
  "In 1956, the government of Canada declared the Arrow Lakes Band extinct.",
  "In 2021, the Supreme Court of Canada ruled that the Lakes Tribe is an Aboriginal people of Canada.",
  "So who needs this deal more?",
  "Beginning August 1, 2024, Canada's share was cut by 37 percent, by the State Department's count.",
  "Canada's share is worth between about 110 and 400 million dollars a year, by BC Hydro's count.",
  "In 2012, the US agencies estimated that ending it would raise American power revenues by 180 to 280 million dollars a year, mostly because the US would stop delivering Canada's share.",
  "British Columbia disputed those assumptions.",
  "Its own estimate says that falling back on on-call flood control alone would cost the US 40 to 150 million dollars a year in lost power.",
  "Even inside the US, who pays for Canada's share went to court: three utilities in Washington stopped paying in 2024 and settled with the federal government in September 2026.",
  "It has not been finalized.",
  "In March 2025, British Columbia's government announced that the United States had paused the talks.",
  "In June 2026, BC Hydro still called them paused.",
  "The deal runs out after the spring of 2027, unless the two countries agree on something new.",
  "The spring of 2027 is the last flood season this deal can cover.",
  "The law that authorizes the payment expires at the end of August 2027, unless Congress extends it.",
  "Bills in both chambers would.",
  "The treaty itself remains in force.",
  "Canada's delegation includes representatives of three First Nations: the Ktunaxa, the Syilx Okanagan and the Secwépemc.",
  "Keenleyside, the Canadian dam that matters most for flood control, holds that space.",
  "Every winter, the lake goes down.", "Every spring, the snow fills it back.",
  "For now, the United States pays for the room in between, and the spring of 2027 is the last one this deal can cover.",
];
const seg = caso("frases-seguras", { trocasA: { [I]: SEGURAS } },
  { semProblema: ["não se diz ["], nota: `${SEGURAS.length} frases da pauta e do fatos-c (a da medida, a do gatilho, a das duas contas, o fecho…)` });
if (seg.laudo) linhas.push(`  - os problemas do texto (fora do "não se diz"): ${seg.laudo.problemas.map((p) => p.slice(0, 60)).join(" · ") || "nenhum"}; os alertas do Columbia: ${[...new Set(seg.laudo.alertas.filter((a) => /^conferir \[/.test(a)).map((a) => a.match(/\[[^\]]+\]/)[0]))].join(", ")}`);

// ---- o portão novo no roteiro do vídeo 6, e o sha nos dois portões ----------------------------------------------------
secao("O roteiro do vídeo 6 nos dois portões, e o sha");
const novo = rodar([ROTEIRO_C]), cas = rodar([ROTEIRO_C], GATE_C);
if (novo.laudo && cas.laudo) {
  const esperados = ["[titulo-pagamento]", "[titulo-empty]", 'a primeira frase não diz "Arrow"', "[inscricao-ausente]"];
  const P = novo.laudo.problemas;
  conferir(novo.exit === 1 && esperados.every((s) => P.some((p) => p.includes(s))) && P.length === esperados.length,
    `o portão novo reprova o roteiro do vídeo 6 só pelo título (2), pela primeira frase sem "Arrow" (1) e pela inscrição ausente (1), sem nenhum "não se diz" do Columbia (as ${cas.laudo.palavras} palavras ficam na faixa nova): exit ${novo.exit}, ${P.length} problema(s): ${P.map((p) => p.slice(0, 50)).join(" | ")}`);
  const doColumbia = novo.laudo.alertas.filter((a) => /^conferir \[/.test(a));
  conferir(doColumbia.length === 0, `e nenhum alerta do Columbia nele (${doColumbia.map((a) => a.slice(0, 80)).join(" | ") || "nenhum"}; ${novo.laudo.numeros_falados.total} números falados)`);
  conferir(["[titulo-eua]", "[titulo-lago]", "[titulo-valor]", "a primeira frase não tem número"].every((s) => novo.laudo.alertas.some((a) => a.includes(s))),
    "e alerta quem paga, o lago e o valor fora das 3 primeiras, e a 1ª frase sem número (a do Cassino não tem número)");
  conferir(cas.exit === 0, `o portão do vídeo 6, no mesmo texto: exit ${cas.exit} (${cas.laudo.veredito})`);
  conferir(isDeepStrictEqual(novo.laudo.taxas, cas.laudo.taxas) && novo.laudo.taxas_palavras_contadas === cas.laudo.taxas_palavras_contadas,
    `as taxas saem iguais nos dois portões (${Object.entries(novo.laudo.taxas).map(([k, t]) => `${k} ${t.valor}`).join(", ")}; ${novo.laudo.taxas_palavras_contadas} palavras contadas)`);
  conferir(novo.laudo.sha256 === cas.laudo.sha256, `o sha do roteiro do vídeo 6 é o mesmo nos dois portões (${novo.laudo.sha256.slice(0, 12)})`);
  conferir(["palavras", "paragrafos", "frases", "media_palavras_por_frase", "maior_frase"].every((k) => novo.laudo[k] === cas.laudo[k])
    && isDeepStrictEqual(novo.laudo.gancho, cas.laudo.gancho),
    `palavras, parágrafos, frases, média, maior frase e gancho iguais (os dois contam a 179: ${novo.laudo.gancho.segundos_estimados} s)`);
  conferir(isDeepStrictEqual(novo.laudo.autoplagio, cas.laudo.autoplagio),
    `o autoplágio é o mesmo nos dois (o novo compara também com o próprio Cassino, que sai da conta por ser o arquivo medido): ${novo.laudo.autoplagio.length} trecho(s)`);
  const fecho = (l) => l.alertas.filter((a) => a.startsWith("o fecho"));
  conferir(isDeepStrictEqual(fecho(novo.laudo), fecho(cas.laudo)), `os alertas do fecho são os mesmos nos dois (${fecho(novo.laudo).length})`);
} else conferir(false, `os portões não deram laudo no roteiro do vídeo 6 (${novo.exit}, ${cas.exit})`);
// o sha de um texto com BOM, CRLF, título, citação e comentário de várias linhas, nos dois portões
const ARQ_SHA = join(CASOS, "sha-bom-crlf", "roteiro-narrador.md");
gravar(ARQ_SHA, "﻿" + montar().replace("<!-- gancho -->", "<!-- gancho\nem duas linhas -->").replace(/\n/g, "\r\n"));
const s1 = rodar([ARQ_SHA]), s2 = rodar([ARQ_SHA], GATE_C), sBase = rodar([join(CASOS, "001-base", "roteiro-narrador.md")]);
conferir(s1.laudo && s2.laudo && s1.laudo.sha256 === s2.laudo.sha256 && s1.laudo.sha256 === sBase.laudo?.sha256,
  `o sha de um texto com BOM, CRLF e comentário de duas linhas é o mesmo nos dois portões e o da base (${s1.laudo?.sha256.slice(0, 12)})`);
conferir(s1.exit === 0 && s1.laudo?.inscricao?.fronteira_de_ato === true, `e o comentário de duas linhas não atrapalha a leitura das marcas (exit ${s1.exit}, a inscrição na fronteira entre atos)`);

// ---- o portao-fatos cruza o sha com o portão novo ---------------------------------------------------------------------
secao("O ferramentas/portao-fatos.mjs com o portão novo");
const RAIZ = join(PASTA, "raiz"), BASE_R = join(RAIZ, "roteiros", "rio-columbia");
gravar(join(BASE_R, "roteiro-narrador.md"), montar());
mkdirSync(join(BASE_R, "_ferramentas"), { recursive: true });
copyFileSync(GATE, join(BASE_R, "_ferramentas", "gate.mjs"));
gravar(join(BASE_R, "qc-roteiro", "fatos.laudo.md"), `# Laudo de teste\n\nRevisão julgada: \`${sBase.laudo?.sha256.slice(0, 12)}\`\n\nCOBERTURA: 0 de 0\n\nVEREDITO: RESSALVA\n`);
gravar(join(BASE_R, "qc-roteiro", "fatos-tabela.json"), "[]\n");
const pf = spawnSync(process.execPath, ["ferramentas/portao-fatos.mjs", "rio-columbia", "--json", `--raiz=${resolve(RAIZ)}`], { encoding: "utf8" });
let pfs = null; try { pfs = JSON.parse(pf.stdout); } catch {}
conferir(pf.status !== 2 && pfs?.gate?.igual === true && pfs.sha256 === sBase.laudo?.sha256,
  `o portao-fatos roda a cópia do portão novo (numa raiz de teste) e o sha cruza: exit ${pf.status} (o piso reprova a tabela vazia, de propósito), gate.igual = ${pfs?.gate?.igual}`);

// ---- o resto do molde: o arquivo padrão, as opções --------------------------------------------------------------------
secao("O arquivo padrão e as opções do molde");
const PADRAO = "roteiros/rio-columbia/roteiro-narrador.md";
const semArg = rodar([]);
if (existsSync(PADRAO)) conferir(semArg.laudo?.arquivo === PADRAO, `sem argumento, o portão mede ${PADRAO} (exit ${semArg.exit})`);
else conferir(semArg.exit === 2 && semArg.stderr.includes(PADRAO), `sem argumento, o portão procura ${PADRAO}, que ainda não existe: exit ${semArg.exit}, "${semArg.stderr.trim()}"`);
const opc = rodar(["--xyz", join(CASOS, "001-base", "roteiro-narrador.md")]);
conferir(opc.exit === 2 && /opção desconhecida: --xyz/.test(opc.stderr), `opção desconhecida: exit ${opc.exit}`);
const onde = rodar(["--onde", join(CASOS, "001-base", "roteiro-narrador.md")]);
conferir(onde.exit === 0 && Array.isArray(onde.laudo?.taxas?.abre_so?.onde) && onde.laudo.taxas.abre_so.onde.length === 1 && onde.laudo.numeros_falados?.onde?.length === 3,
  `--onde: cada taxa traz as frases (abre_so: ${JSON.stringify(onde.laudo?.taxas?.abre_so?.onde)}), e a conta dos números traz os números (${onde.laudo?.numeros_falados?.onde?.map((o) => o.numero).join(", ")})`);
// o --derivados: a pasta do roteiro numa raiz de teste (<raiz>/roteiros/rio-columbia/), com a cópia para a voz em <raiz>/out/rio-columbia/
const sha12b = sBase.laudo?.sha256.slice(0, 12);
const derivadosEm = (raiz, velhos) => {
  const R = join(raiz, "roteiros", "rio-columbia");
  gravar(join(R, "roteiro-narrador.md"), montar());
  const v = (nome) => (velhos.includes(nome) ? "000000000000" : sha12b);
  gravar(join(R, "qc-roteiro", "fatos.laudo.md"), `> Revisão julgada: \`${v("laudo")}\`\n`);
  // os laudos com sufixo de rodada (-r1, -r2, -r2b…) e os -antigo ficam fora: julgaram o texto de antes (a Sala, 26/10/2026)
  for (const n of ["roteiro-r1.laudo.md", "roteiro-r2.laudo.md", "roteiro-r2b.laudo.md", "roteiro-r2-antigo.laudo.md"]) gravar(join(R, "qc-roteiro", n), "> Revisão julgada: `000000000000`\n");
  gravar(join(R, "roteiro-editor.md"), `Revisão do roteiro: \`${v("editor")}\`\n`);
  gravar(join(R, "pronuncia.md"), velhos.includes("pronuncia") ? "# Pronúncias\n\nsem carimbo\n" : `> Revisão do roteiro: \`${sha12b}\`\n`);
  gravar(join(R, "roteiro-narrador-pt-BR.md"), `# Tradução\n\nRevisão do roteiro: \`${v("ptbr")}\`\n`);
  gravar(join(R, "voz", "texto-para-voz.md"), `> Revisão do roteiro: \`${v("voz")}\`\n\ntexto\n`);
  gravar(join(R, "voz", "trocas.md"), `# Trocas\n\n> Gerado por \`_ferramentas/preparar-voz.mjs\` a partir de \`roteiro-narrador.md\` (sha256 do texto falado \`${v("trocas")}\`).\n`);
  gravar(join(raiz, "out", "rio-columbia", "roteiro.md"), `---\nprojeto: rio-columbia\nrevisao_do_roteiro: ${v("out")}\n---\n\ntexto\n`);
  return rodar(["--derivados", join(R, "roteiro-narrador.md")]);
};
const der = derivadosEm(join(CASOS, "derivados-velhos"), ["editor", "pronuncia", "out"]);
const velhos = (der.laudo?.derivados_velhos || []).map((d) => d.arquivo.split("/").slice(-2).join("/")).sort();
conferir(der.exit === 1 && der.laudo?.derivados?.length === 7 && isDeepStrictEqual(velhos, ["rio-columbia/pronuncia.md", "rio-columbia/roteiro-editor.md", "rio-columbia/roteiro.md"]),
  `--derivados: 7 conferidos (o laudo, o editor, a pronúncia, a tradução pt-BR, a cópia para a voz, as trocas e out/rio-columbia/roteiro.md; os -r1/-r2/-r2b/-antigo fora); o editor e a cópia em out/ com o sha velho e a pronúncia sem o carimbo reprovam (exit ${der.exit}; velhos: ${velhos.join(", ")})`);
const derOk = derivadosEm(join(CASOS, "derivados-em-dia"), []);
conferir(derOk.exit === 0 && derOk.laudo?.derivados?.length === 7 && derOk.laudo.derivados.every((d) => d.ok),
  `--derivados: os 7 com o sha de agora passam (exit ${derOk.exit})`);
const derTr = derivadosEm(join(CASOS, "derivados-trocas-e-ptbr"), ["trocas", "ptbr"]);
conferir(derTr.exit === 1 && derTr.laudo?.derivados_velhos?.length === 2,
  `--derivados: as trocas e a tradução pt-BR com o sha velho reprovam (exit ${derTr.exit}; ${derTr.laudo?.derivados_velhos?.map((d) => d.arquivo.split("/").slice(-2).join("/")).join(", ")})`);

// ---- a saída ----------------------------------------------------------------------------------------------------------
const cab = `# Prova do portão do vídeo 7, o rio Columbia (${GATE})\n\n${total - falhas} de ${total} checagens como o esperado${falhas ? ` · ${falhas} FALHARAM` : ""}.\n` +
  `A base: ${base.laudo?.palavras} palavras, ${CORPO.length} frases de corpo (${A.length} antes da inscrição); os casos em ${CASOS}/.`;
const saida = `${cab}\n${linhas.join("\n")}\n`;
writeFileSync(join(PASTA, "prova-saida.md"), saida, "utf8");
console.log(saida);
process.exit(falhas ? 1 : 0);
