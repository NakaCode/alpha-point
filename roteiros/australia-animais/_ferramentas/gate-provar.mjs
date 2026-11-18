// gate-provar.mjs — a prova do portão do vídeo 8, os animais perigosos da Austrália (roteiros/australia-animais/_ferramentas/gate.mjs).
//   node roteiros/australia-animais/_ferramentas/gate-provar.mjs      (cwd = raiz do canal; exit 0 = tudo como o esperado, 1 = alguma
//                                                                       checagem falhou, 2 = não rodou)
// Deriva da prova do vídeo 7 (roteiros/rio-columbia/_ferramentas/gate-provar.mjs), em 18/11/2026, pelo pedido da Sala de controle
// (roteiros/australia-animais/_trabalho/pedido-gate.md). Grava roteiros sintéticos em out/_tmp/gate-australia-animais/casos/ (fora do git),
// roda o portão em cada um e confere a saída:
//   - a base passa (o gancho com a 1ª frase certa, os três títulos pagos, o "But", a pergunta e a assinatura; o corpo até o meio da faixa;
//     a inscrição numa fronteira entre atos, a ~45 %), sem nenhum alerta;
//   - a faixa (2.500 a 2.800), a média (18) e a maior frase (34): o piso e o teto exatos passam, uma palavra a menos ou a mais reprova;
//   - os três títulos e a primeira frase: um caso que reprova para cada regra, um que alerta para cada alerta, e o que passa ao lado;
//   - o "não se diz" da Austrália: um caso que reprova para cada id (e mais de um onde o padrão tem formas), e o que passa ao lado (a
//     forma que a pauta, o registro ou a Sala dão);
//   - os alertas da Austrália, cada um com o seu caso, e o que fica ao lado sem alerta; as palavras de ALERTA do molde;
//   - o acréscimo da Sala (18/11/2026, ~16:3x): a pergunta do Lucas atribuída (passa, com alerta, e paga o título 1; dita pelo narrador,
//     não), o Censo (medida-censo.md), o fatos-c e o NCIS, cada regra com o caso que reprova (ou alerta) e o que passa, com as frases seguras
//     dos dois arquivos e do resumo do NCIS no texto de conferência;
//   - a conta dos números falados, com os três ajustes deste vídeo;
//   - a inscrição falada (a do vídeo 7, sem mudança): a posição (abaixo de 35 %, na margem, no meio, na margem de cima, acima de 60 %) e a
//     conta do tempo; o gancho, o fecho (pela marca e pelas 8 últimas), a fronteira de parágrafo e a de ato; as palavras vetadas, o número,
//     a plateia, o tamanho, o "if", o "you", a frase de antes com aspas e com número-herói; a ausente, as duas e o outro "subscrib…"; e a
//     frase que a pauta §7 propõe, no lugar que ela propõe;
//   - as regras do Columbia saíram: o que o portão do vídeo 7 reprovava passa aqui;
//   - os ganchos A e B da pauta §8 como estão, e o A consertado (com a frase do título 3, sem o "15 percent", com um "But" e uma pergunta só);
//   - o fecho (a pergunta repetida e a lista), que fica do molde;
//   - o autoplágio contra o roteiro do vídeo 7 (roteiros/rio-columbia/roteiro-narrador.md);
//   - as frases seguras da pauta (§4, §7 e §8) juntas num texto: nenhuma reprova (menos as que a Sala tirou depois da pauta, ditas abaixo);
//   - o portão novo no roteiro do vídeo 7: reprova pelos títulos e pela primeira frase, e só nisso; as taxas, o sha, as contagens, o gancho,
//     o autoplágio e os alertas do fecho saem iguais aos do portão do vídeo 7 no mesmo texto; e o sha de um texto (com BOM, CRLF, título,
//     citação e comentário) igual nos dois portões;
//   - o ferramentas/portao-fatos.mjs cruza o sha com o portão novo (numa raiz de teste) sem divergir;
//   - o arquivo padrão, a opção desconhecida, o --onde e o --derivados.
// Sem rede, sem crédito. Grava só em out/_tmp/gate-australia-animais/. A saída também vai a out/_tmp/gate-australia-animais/prova-saida.md.
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync, rmSync, existsSync, copyFileSync } from "node:fs";
import { posix, resolve } from "node:path";
const { join, dirname } = posix;   // os caminhos com "/", também no Windows
import { isDeepStrictEqual } from "node:util";

const GATE = "roteiros/australia-animais/_ferramentas/gate.mjs";
const GATE_C = "roteiros/rio-columbia/_ferramentas/gate.mjs";
const ROTEIRO_C = "roteiros/rio-columbia/roteiro-narrador.md";
const PASTA = "out/_tmp/gate-australia-animais";
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
// o gancho da base: a 1ª frase com o veneno, a Austrália, o superlativo com a ressalva do camundongo e um número; o título 3 na 2ª; o "But"
// com a contagem da Sala (o Reptile Database) na 3ª; a fração do mundo com "elapids and vipers"; os 85; a estrada num mês; a chance; uma
// pergunta só, com "dangerous"; e a assinatura
const GANCHO = [
  "Out on the floodplains of the Australian outback lives the land snake with the most potent venom on Earth, as measured in a 1979 test on lab mice.",
  "And it isn't even the snake that kills the most Australians.",
  "But of Australia's 229 kinds of snakes, 150 are elapids, front-fanged venomous snakes, by the count of the Reptile Database.",
  "Worldwide, elapids and vipers make up about one in five snakes.",
  "From 2016 to 2025, every venomous animal in Australia combined killed 85 people, by the count of the country's statistics bureau.",
  "Spiders killed none.",
  "That's fewer than Australia's roads killed in an average month of 2025.",
  "Measured against the population, that's about a one-in-three-million chance each year.",
  "So why do so few people die from such dangerous animals?",
  "You're at Alpha Point, and this is where the story of Australia's venom begins.",
];
const INSC = "If you've followed the snakes this far, subscribe to Alpha Point.";
const VOLTA_F = "Back to the snakes, then.";
// o corpo: frases neutras, sem nenhuma palavra de alerta, nenhuma abrindo com "A "/"An "/"First"/"Then" (o fecho em lista) e sem nada da
// pergunta do gancho; geradas por sorteio com semente fixa, todas diferentes (as do molde do vídeo 7). POOL tem mais frases que o corpo da
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
const ALVO_BASE = 2650;
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
  const L = ["# Australia's Deadliest Snake Isn't Its Most Venomous One", "", "> Roteiro de teste, gerado por gate-provar.mjs.", "", "<!-- gancho -->", "", g.join(" "), ""];
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
  if (esperado.semAlertaAU) for (const a of alertas) if (/^conferir \[|^título \[/.test(a)) falta.push(`alerta da Austrália a mais: "${a.slice(0, 120)}"`);
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
  conferir(L.palavras >= 2500 && L.palavras <= 2800, `a base tem ${L.palavras} palavras (faixa 2.500–2.800), ${L.frases} frases, média ${L.media_palavras_por_frase} (teto 18), maior ${L.maior_frase} (teto 34); o gancho tem ${L.gancho.palavras_ate_assinatura} palavras (${L.gancho.segundos_estimados} s a 179) e o "But" na palavra ${L.gancho.but_na_palavra}; ${L.minutos_estimados} min a 179`);
  conferir(L.alertas.length === 0, `a base não tem nenhum alerta (${JSON.stringify(L.alertas).slice(0, 300)})`);
  conferir(L.autoplagio.length === 0, "a base não tem autoplágio com os oito roteiros anteriores (Juneau, Los Angeles, Zona, Peru, Atlântico, Big Sur, Cassino e Columbia)");
  conferir(Object.values(L.taxas).every((t) => !t.alerta), "a base não dispara nenhuma taxa");
  const ins = L.inscricao;
  conferir(ins && ins.percentual >= 37 && ins.percentual <= 58 && ins.fronteira_de_ato === true && ins.fronteira_de_paragrafo === "depois",
    `a inscrição da base: parágrafo ${ins?.paragrafo}, frase ${ins?.frase_no_paragrafo} de ${ins?.frases_no_paragrafo}, começa em ${ins?.inicio} (${ins?.percentual} % de ${ins?.duracao_video}, a janela de ${ins?.janela?.de} a ${ins?.janela?.ate}), na fronteira entre atos`);
  conferir(ins && Math.abs(ins.inicio_s - e.ini) < 0.06 && Math.abs(ins.duracao_video_s - e.dur) < 0.06 && Math.abs(ins.percentual - e.pct) < 0.06,
    `a conta do tempo é a pedida (as palavras antes ÷ 179 × 60 + 0,25 s por troca de parágrafo; a duração com as pausas e a cauda de 20 s): o portão dá ${ins?.inicio_s} s de ${ins?.duracao_video_s} s, a conta daqui ${e.ini.toFixed(1)} s de ${e.dur.toFixed(1)} s`);
  conferir(L.numeros_falados.total === 8 && L.numeros_falados.ate_assinatura === 8, `os números falados da base: ${L.numeros_falados.total} (os oito do gancho: "1979", "229", "150", "one in five", "2016 to 2025", "85", "2025", "one-in-three-million")`);
}

// ---- a faixa, a média e a maior frase -------------------------------------------------------------------------------
secao("A faixa (2.500 a 2.800), a média (18) e a maior frase (34)");
caso("faixa-piso-2500", { b: bCom(2500) }, { exit: 0, semProblema: ["palavras:"], nota: "2.500 palavras exatas passam" });
caso("faixa-2499", { b: bCom(2499) }, { exit: 1, problema: ["palavras: 2499, abaixo de 2500"], so: true, nota: "2.499 reprova" });
caso("faixa-teto-2800", { b: bCom(2800) }, { exit: 0, semProblema: ["palavras:"], nota: "2.800 palavras exatas passam" });
caso("faixa-2801", { b: bCom(2801) }, { exit: 1, problema: ["palavras: 2801, acima de 2800"], so: true, nota: "2.801 reprova" });
caso("faixa-2450-do-columbia", { b: bCom(2450) }, { exit: 1, problema: ["palavras: 2450, abaixo de 2500"], so: true,
  nota: "o piso da faixa do Columbia (2.450) fica abaixo do piso novo" });
// a média: o corpo em pares unidos por ponto e vírgula (as mesmas palavras, metade das frases); nenhuma passa de 34
const pares = (l) => { const o = []; for (let i = 0; i < l.length; i += 2) o.push(i + 1 < l.length ? `${l[i].slice(0, -1)}; ${l[i + 1][0].toLowerCase()}${l[i + 1].slice(1)}` : l[i]); return o; };
caso("media-acima-de-18", { a: pares(A), b: pares(B) }, { exit: 1, problema: ["média de "], so: true, nota: "as frases do corpo unidas em pares (~20 palavras cada)" });
// a maior frase: 34 passa, 35 reprova (as palavras do próprio corpo, sem ponto)
const PALAVRAS_CORPO = CORPO.slice(30, 40).join(" ").replace(/\./g, "").split(/\s+/);
const longa = (n) => `${PALAVRAS_CORPO.slice(0, n).join(" ")}.`;
caso("frase-de-34", { trocasA: { [I]: longa(34) } }, { exit: 0, semProblema: ["frase com"], nota: "uma frase de 34 palavras passa" });
caso("frase-de-35", { trocasA: { [I]: longa(35) } }, { exit: 1, problema: ["frase com 35 palavras (teto 34"], so: true, nota: "uma frase de 35 palavras reprova" });

// ---- os três títulos --------------------------------------------------------------------------------------------------
secao("Os três títulos no gancho (T3 nas 3 primeiras frases; T2 e T1 antes da assinatura)");
const S1_SEM_SUPER = "Out on the floodplains of the Australian outback lives a snake whose venom topped a 1979 test on lab mice.";
caso("titulo-3-veneno-reprova", { gancho: { 0: S1_SEM_SUPER } },
  { exit: 1, problema: ["[titulo-3-veneno]"], so: true, nota: "a 1ª frase sem o superlativo do veneno (\"topped a test\" não é superlativo)" });
caso("titulo-3-veneno-na-4a", { gancho: { 0: S1_SEM_SUPER, 3: "Its venom is the most potent of any land snake on Earth, as measured on lab mice." } },
  { exit: 1, problema: ["[titulo-3-veneno]"], so: true, nota: "o superlativo na 4ª frase já não paga" });
caso("titulo-3-most-venomous", { gancho: { 0: "Out on the floodplains of the Australian outback lives Australia's most venomous snake, as measured in a 1979 test on lab mice." } },
  { exit: 0, semProblema: ["[titulo-3-"], semAlertaAU: true, nota: '"most venomous" paga o "Most Venomous" do título' });
caso("titulo-3-mata-reprova", { gancho: { 1: "And it has plenty of company." } },
  { exit: 1, problema: ["[titulo-3-mata]"], so: true, nota: "sem a cobra que mata nas 3 primeiras (o gancho A da pauta, sem a frase do §8)" });
caso("titulo-3-mata-rarely", { gancho: { 1: "And it rarely kills anyone." } },
  { exit: 1, problema: ["[titulo-3-mata]", "[taipan-raramente-mata]"], so: true, nota: '"it rarely kills" não paga o título 3 e reprova à parte (a pauta não tem morte lida por taipan-do-interior)' });
caso("titulo-3-mata-never", { gancho: { 1: "And it has never killed anyone." } },
  { exit: 1, problema: ["[titulo-3-mata]", "[taipan-nunca-matou]"], so: true, nota: '"it has never killed anyone" não paga o título 3 e reprova à parte (o AVRU é NÃO CONFERIDO)' });
caso("titulo-3-mata-somewhere-else", { gancho: { 1: "The snake that actually kills Australians lives somewhere else." } },
  { exit: 0, semProblema: ["[titulo-3-"], semAlertaAU: true, nota: 'a ponte do ato 3 da pauta ("…lives somewhere else") também paga' });
caso("titulo-3-mata-different", { gancho: { 1: "A different snake does most of the killing." } },
  { exit: 0, semProblema: ["[titulo-3-"], nota: '"a different snake does most of the killing" paga' });
caso("titulo-3-mata-na-4a", { gancho: { 1: "And it has plenty of company.", 3: "And it isn't even the snake that kills the most Australians." } },
  { exit: 1, problema: ["[titulo-3-mata]"], so: true, nota: "a frase do §8 na 4ª frase já não paga" });
caso("ressalva-camundongo-reprova", { gancho: { 0: "Out on the floodplains of the Australian outback lives the land snake with the most potent venom on Earth, by a 1979 test." } },
  { exit: 1, problema: ["[ressalva-camundongo]"], so: true, nota: 'o superlativo sem "mice"/"lab" na frase nem na seguinte' });
caso("ressalva-camundongo-na-seguinte", { gancho: { 0: "Out on the floodplains of the Australian outback lives the land snake with the most potent venom on Earth.",
  1: "That's by a 1979 test on lab mice, and it isn't even the snake that kills the most Australians." } },
  { exit: 0, semProblema: ["[ressalva-camundongo]", "[titulo-3-"], alerta: ["a primeira frase não tem número"],
    nota: "a ressalva na frase 2 (o conserto dos leitores: \"as measured on lab mice\" no meio da frase 1 faz a voz tropeçar) passa; a 1ª frase sem número alerta" });
caso("ressalva-laboratory", { gancho: { 0: "Out on the floodplains of the Australian outback lives the land snake with the most potent venom on Earth, as a 1979 laboratory test measured it." } },
  { exit: 0, semProblema: ["[ressalva-camundongo]"], nota: '"laboratory" conta' });
passa("ressalva-camundongo", "So the snake with the most potent venom on land has almost no record of hurting people.", "o superlativo fora do gancho, sem camundongo (a ponte do ato 3 da pauta): passa");
caso("titulo-2-registro-reprova", { gancho: { 4: "From 2016 to 2025, every venomous animal in Australia combined killed fewer people than you might think, by the count of the country's statistics bureau." } },
  { exit: 1, problema: ["[titulo-2-registro]"], so: true, nota: "sem os 85 no gancho" });
caso("titulo-2-registro-sem-gente", { gancho: { 4: "From 2016 to 2025, the country's statistics bureau logged 85 entries for venomous animals." } },
  { exit: 1, problema: ["[titulo-2-registro]"], so: true, nota: 'o 85 sem "people", "deaths", "died" ou "killed" na frase' });
caso("titulo-2-registro-por-extenso", { gancho: { 4: "From 2016 to 2025, every venomous animal in Australia combined killed eighty-five people, by the count of the country's statistics bureau." } },
  { exit: 0, semProblema: ["[titulo-2-registro]"], semAlertaAU: true, nota: '"eighty-five people" paga' });
caso("titulo-2-registro-no-corpo", { gancho: { 4: "From 2016 to 2025, every venomous animal in Australia combined killed fewer people than you might think, by the count of the country's statistics bureau." },
  trocasA: { [I]: "From 2016 to 2025, venomous animals in Australia killed 85 people." } },
  { exit: 1, problema: ["[titulo-2-registro]"], so: true, nota: "os 85 depois da assinatura já não pagam" });
caso("titulo-2-estrada-reprova", { gancho: { 6: "That's fewer than Australia's roads killed in a few weeks of 2025." } },
  { exit: 1, problema: ["[titulo-2-estrada]"], so: true, nota: '"roads" sem "month"' });
caso("titulo-2-estrada-separadas", { gancho: { 6: "Look at Australia's roads in 2025.", 7: "In an average month, they killed more than that." } },
  { exit: 1, problema: ["[titulo-2-estrada]"], so: true, nota: '"roads" numa frase e "month" na outra: reprova (a miniatura "10 YEARS OF VENOM < 1 MONTH" se paga numa frase)' });
caso("titulo-1-reprova", { gancho: { 2: "But Australia is home to a great many kinds of venomous snakes, by the count of the Reptile Database." } },
  { exit: 1, problema: ["[titulo-1]"], so: true, nota: '"a great many kinds" não é número nem fração' });
caso("titulo-1-so-o-mundo", { gancho: { 2: "But the elapids, front-fanged venomous snakes, are common out there.", 3: "Worldwide, elapids and vipers make up about one in five kinds of venomous snakes." } },
  { exit: 1, problema: ["[titulo-1]"], so: true, nota: "a fração só do mundo não paga a contagem da Austrália" });
caso("titulo-1-duas-em-tres", { gancho: { 2: "But about two in three of Australia's kinds of snakes are elapids, front-fanged venomous snakes, by the count of the Reptile Database." } },
  { exit: 0, semProblema: ["[titulo-1]"], alerta: ["[duas-em-tres]"], nota: '"two in three" paga o título 1 e alerta (a pauta o proibia até a contagem; a Sala a conferiu)' });
caso("titulo-1-palavra-alerta", { gancho: { 8: "So why do so few people die from them?" } },
  { exit: 0, alerta: ["[titulo-1-palavra]"], nota: 'sem "dangerous" nem "deadly" no gancho: alerta' });
caso("titulo-1-pergunta-atribuida", { gancho: { 2: "But the snakes are only part of the story.", 8: "Every visitor asks the same thing: why does Australia have so many dangerous animals?" } },
  { exit: 0, semProblema: ["[titulo-1]", "[premissa-tantos]"], alerta: ["[pergunta-atribuida]"], nota: "sem a contagem das cobras, a pergunta do título atribuída a outros paga o título 1 (o acréscimo da Sala), com o alerta da moldura" });
caso("titulo-1-pergunta-do-narrador", { gancho: { 2: "But the snakes are only part of the story.", 8: "So why does Australia have so many dangerous animals?" } },
  { exit: 1, problema: ["[titulo-1]", "[premissa-tantos]"], so: true, nota: "a mesma pergunta dita pelo narrador não paga o título 1 e reprova à parte" });

// ---- a primeira frase -------------------------------------------------------------------------------------------------
secao('A primeira frase ("venom", a Austrália e número)');
caso("primeira-sem-venom", { gancho: { 0: "Out on the floodplains of the Australian outback lives the most toxic land snake on Earth, as measured in a 1979 test on lab mice." } },
  { exit: 1, problema: ['a primeira frase não diz "venom"'], so: true, nota: '"most toxic" paga o título 3, mas a 1ª frase não diz "venom"' });
caso("primeira-sem-australia", { gancho: { 0: "Out on the floodplains of the Diamantina lives the land snake with the most potent venom on Earth, as measured in a 1979 test on lab mice." } },
  { exit: 1, problema: ['a primeira frase não diz "Australia"'], so: true, nota: 'sem "Australia"/"outback" na 1ª frase (o "Australians" da 2ª não conta)' });
caso("primeira-outback", { gancho: { 0: "Out on the floodplains of the outback lives the land snake with the most potent venom on Earth, as measured in a 1979 test on lab mice." } },
  { exit: 0, semProblema: ["a primeira frase"], semAlertaAU: true, nota: '"outback" conta' });
caso("primeira-sem-numero", { gancho: { 0: "Out on the floodplains of the Australian outback lives the land snake with the most potent venom on Earth, as measured on lab mice." } },
  { exit: 0, alerta: ["a primeira frase não tem número"], semProblema: ["a primeira frase"], nota: "a 1ª frase do gancho A, sem número: só alerta (a regra aceita \"um número ou uma imagem\")" });
caso("primeira-numero-por-extenso", { gancho: { 0: "Out on the floodplains of the Australian outback lives the land snake with the most potent venom on Earth, as measured on lab mice some forty years ago." } },
  { exit: 0, semAlerta: ["a primeira frase não tem número"], nota: '"forty years" por extenso conta como número' });

// ---- o "não se diz" da Austrália ---------------------------------------------------------------------------------------
secao('O "não se diz" da Austrália (reprova)');
reprova("premissa-tantos", "Australia has more venomous animals than anywhere else.");
reprova("premissa-tantos", "Why does Australia have so many dangerous animals?", "a pergunta do Lucas dita como está (pauta §5 e §8)");
reprova("premissa-tantos", ["Let's find out.", "And why does Australia have so many dangerous animals?"], "a pergunta dita pelo narrador, sem ninguém que pergunte: reprova (o acréscimo da Sala)");
// a pergunta atribuída a outros passa, com o alerta [pergunta-atribuida] (o acréscimo da Sala, 18/11/2026)
const atribuidaCaso = (frase, nota) => caso("pergunta-atribuida-" + (nCaso + 1), { trocasA: { [I]: frase } },
  { exit: 0, semProblema: ["[premissa-tantos]"], alerta: ["[pergunta-atribuida]"], nota: nota ?? '"' + [].concat(frase).join(" ") + '"' });
atribuidaCaso("Every visitor asks the same thing: why does Australia have so many dangerous animals?", 'a forma da Sala ("Every visitor asks…"): passa, com o alerta');
atribuidaCaso(["It's the question every visitor asks.", "Why does Australia have so many dangerous animals?"], 'a moldura na frase anterior ("it\'s the question…"): passa, com o alerta');
atribuidaCaso(["You've probably heard it.", "Why does Australia have so many dangerous animals?"], '"you\'ve probably heard": passa, com o alerta');
atribuidaCaso("People ask why Australia has so many dangerous animals.", '"people ask", na pergunta indireta: passa, com o alerta');
atribuidaCaso(["Why does Australia have so many dangerous animals?", "It's the question everyone asks."], "a moldura na frase seguinte: passa, com o alerta");
atribuidaCaso("People wonder why Australia has so many deadly animals.", '"people wonder": passa, com o alerta');
reprova("premissa-tantos", "Australia is home to the world's deadliest animals.");
passa("premissa-tantos", "So does Australia really have so many dangerous animals?", 'a forma do cético (pauta §8: a fama posta como pergunta, com "really"): passa');
passa("premissa-tantos", "Australia is famous for having so many deadly animals.", "a fama, como fama: passa");
passa("premissa-tantos", "To see how Australia ended up with so many venomous snakes, start with where the continent has been.", "a ponte do ato 1 (pauta §7): passa");
reprova("mito", "Australia's deadly animals are mostly a myth.");
reprova("mito", "The danger is mostly hype.");
passa("mito", "It isn't a myth that the snakes are venomous.", "a negação: passa");
passa("mito", "Kevin Arbuckle, an evolutionary biologist at Swansea University, says the country's image as the home of highly venomous animals is, \"for the most part,\" overstated.", "a frase segura da fama (pauta §4.1): passa");
reprova("gondwana-livescience", "Australia split from Gondwana about 100 million years ago.");
reprova("gondwana-livescience", "The first snakes colonized Australia 60 million years ago.");
reprova("gondwana-livescience", "It was an accident of history.");
passa("gondwana-livescience", "Some 80 to 85 million years ago, Australia began to pull away from Antarctica.", "a forma da pauta §4.2 (a GA): passa");
reprova("taipan-mais-mortal", "The inland taipan is the deadliest snake in the world.");
reprova("taipan-mais-mortal", "The inland taipan is Australia's deadliest snake.");
reprova("taipan-mais-mortal", "Out there lives the deadliest snake on Earth.", "o \"deadliest\" do mundo sem o nome");
passa("taipan-mais-mortal", "The inland taipan isn't Australia's deadliest snake.", "a negação: passa");
passa("taipan-mais-mortal", "Australia's deadliest snake isn't its most venomous one.", "o título 3: passa");
reprova("taipan-nunca-matou", "The inland taipan has never killed anyone.");
reprova("taipan-nunca-matou", "There is no recorded death from an inland taipan bite.");
reprova("taipan-nunca-matou", ["Out on those plains lives the inland taipan.", "No one has ever died from its bite."], "por pronome, na frase seguinte");
passa("taipan-nunca-matou", "None was put down to the inland taipan.", "a forma da pauta §4.4 (o estudo nacional, P3): passa");
passa("taipan-nunca-matou", "So the snake with the most potent venom on land has almost no record of hurting people.", "a ponte do ato 3 (pauta §4.3): passa");
reprova("taipan-raramente-mata", "The inland taipan rarely kills anyone.");
passa("taipan-raramente-mata", "So the most potent venom on land rarely touches anyone, and the spiders have stopped killing.", "a ponte do ato 5 (pauta §4.5): passa");
reprova("duzia-sem-ano", "Doctors have written up only about a dozen cases of someone envenomed by an inland taipan.");
passa("duzia-sem-ano", "By 2017, doctors had written up only about a dozen cases of someone envenomed by an inland taipan.", "com o ano (pauta §4.3, K9): passa");
reprova("ld50-valor", "Its LD50 is 0.025 mg/kg, the dose that kills half the mice in a test.");
reprova("ld50-valor", "One bite can kill 100 men.");
passa("ld50-valor", "They measured the dose that kills half the mice in a test, what scientists call the LD50.", "a forma da pauta §4.3, sem valor: passa");
reprova("evoluiu-para-matar", "Its venom evolved to kill people.");
reprova("evoluiu-para-matar", "Australian venom is stronger because of the isolation.");
passa("evoluiu-para-matar", "The scientists who study these venoms think that's probably an adaptation to its prey: a rat can bite back.", "a hipótese da pauta §4.3: passa");
reprova("camundongo-errado", "But mice aren't people.");
reprova("camundongo-errado", "The mouse test is wrong.");
passa("camundongo-errado", "Researchers now criticize mouse tests like that one, partly because they don't reflect what happens when a snake bites a person.", "a forma da pauta §4.3 (K3): passa");
reprova("marrom-segunda", "The brown snake is the second most venomous snake.");
passa("marrom-segunda", "The test that crowned the inland taipan put another Australian snake near the top, too: the brown snake.", "a forma da pauta §4.4: passa");
reprova("toxina-extrema", ["Brown snakes and taipans share a toxin no other snakes have.", "It's part of what makes their venom so extreme on lab rodents."], "a frase que a v2 tirou (K3)");
reprova("toxina-extrema", "Brown snakes and taipans share a toxin no other snakes have, which makes them deadly to mice.");
passa("toxina-extrema", ["Brown snakes and taipans share a toxin no other snakes have.", "One lives out on these floodplains and is usually quite shy."], "a forma da pauta §4.4: passa");
reprova("marrom-quintal", "Brown snakes live in people's backyards.");
reprova("marrom-quintal", "The eastern brown snake lives all over Australia.");
passa("marrom-quintal", ["One lives out on these floodplains and is usually quite shy.", "The other lives where people farm and build."], "a forma da pauta §4.4, depois da leitura da Sala (o Queensland Museum): passa (o [marrom-dono] alerta)");
passa("marrom-quintal", "The eastern brown snake is found over most of Queensland, New South Wales and Victoria, the Queensland Museum says.", "nas palavras do Queensland Museum: passa");
reprova("taipan-vazio", "One lives out on these empty floodplains and is usually quite shy.", 'o "empty" da pauta: vivem ~1.000 pessoas ali (a medida do Censo)');
reprova("taipan-vazio", "Almost no one lives in the Channel Country.", '"almost no one" sem o número');
reprova("taipan-vazio", "Nobody lives out on those floodplains.");
reprova("taipan-vazio", "The Channel Country is uninhabited.");
reprova("taipan-vazio", "The Channel Country is nearly empty.", '"nearly empty" sem o número');
reprova("taipan-vazio", "About 3,000 people live in the Channel Country.", "outro número de gente que o da medida");
passa("taipan-vazio", "One lives out on these floodplains and is usually quite shy.", "a forma da pauta sem a medida (§4.4): passa");
passa("taipan-vazio", ["The Channel Country, where the inland taipan lives, covers about 117,000 square miles.", "At the 2021 census, about a thousand people lived there."], "a frase segura da medida (§7): passa");
passa("taipan-vazio", ["The Channel Country, where the inland taipan lives, covers about 117,000 square miles.", "That's about one person for every hundred square miles."], "a densidade da medida (§7): passa");
passa("taipan-vazio", "One lives out on these floodplains, where about a thousand people live, and is usually quite shy.", "a troca que a medida dá para a frase da pauta (§7): passa");
passa("taipan-vazio", "The Channel Country is nearly empty: about a thousand people live there.", '"nearly empty" com o número (medida §8): passa');
reprova("censo-ano", "At the latest census, about a thousand people lived in the Channel Country.");
reprova("censo-ano", "The last census counted about a thousand people in the Channel Country.");
passa("censo-ano", "At the 2021 census, about a thousand people lived in the Channel Country.", '"at the 2021 census": passa');
alerta("censo-ano", "In 2026, about a thousand people live in the Channel Country.", 'os ~1.000 de 2021 ditos como de 2026: alerta (medida §8)');
reprova("censo-razao", "Those three states have roughly two thousand times as many people as the Channel Country.", "a razão sem a milha quadrada (em pessoas, ~19.000×)");
reprova("censo-razao", ["At the 2021 census, those three states had almost 20 million people.", "That's 2,000 times as many people as the Channel Country."]);
passa("censo-razao", "Per square mile, that's more than a thousand times as many people as the Channel Country.", "a frase segura da medida (§7): passa");
passa("censo-razao", "That's roughly two thousand times as many people per square mile.", "o número central, com a milha quadrada (§7): passa");
passa("censo-razao", "Greater Sydney has a twenty-fifth of the area and thousands of times the people.", "a Grande Sydney, em pessoas (5.129×, medida §1): passa");
reprova("censo-area-taipan", "About a thousand people live in the taipan's range.");
reprova("censo-area-taipan", ["The inland taipan lives on the floodplains of the Channel Country.", "Its range covers about 117,000 square miles."], "por pronome, a taipan na frase anterior");
passa("censo-area-taipan", "The Channel Country, where the inland taipan lives, covers about 117,000 square miles.", "a frase segura da medida (§7): passa");
reprova("marrom-ausente", "The brown snake doesn't live out here.");
reprova("marrom-ausente", "Brown snakes live only in the east.");
reprova("marrom-ausente", ["The other is the brown snake.", "It isn't found in the Channel Country."], "por pronome");
passa("marrom-ausente", "The eastern brown snake, according to the Queensland Museum, is found over most of Queensland, New South Wales and Victoria.", "a frase segura da medida (§7), com o dono e o \"most of\": passa");
passa("marrom-ausente", "Brown snakes are found in all habitats except rainforest, the Queensland Museum says.", 'o "except rainforest" do museu: passa');
reprova("espera-soro", "The median wait for antivenom was 4.3 hours.");
reprova("espera-soro", "The long wait for antivenom killed them.");
passa("espera-soro", "Ten of those people went into cardiac arrest outside a hospital.", "a forma da pauta §4.4 (K9): passa");
reprova("isolada-tempo", "Australia has been isolated for 50 million years.");
passa("isolada-tempo", "For tens of millions of years, it traveled alone, an island continent.", "a forma da pauta §4.2: passa");
reprova("continente-rapido", "Australia is the fastest-moving continent.");
reprova("continente-rapido", "It keeps moving north about 7 centimeters a year.");
passa("continente-rapido", "It keeps moving north almost three inches a year.", "a forma da pauta §4.2 (só milhas): passa");
reprova("elapideas-depois", "The elapids arrived 40 million years ago.");
reprova("elapideas-depois", "The snakes arrived after Australia hit Asia.");
reprova("elapideas-depois", "And then, from Asia, came the snakes.");
passa("elapideas-depois", "But before Australia ever reached Asia, something had already made the crossing.", "a ponte do cético (K6): passa");
reprova("campo-aberto", "They found an open field and spread into every niche.");
reprova("campo-aberto", ["There were no vipers here.", "So the elapids moved into every role a snake can play."], 'o "So" ligando a falta de víboras aos papéis (K6)');
reprova("campo-aberto", "Their arrival set off an explosion of species.");
passa("campo-aberto", ["There were no vipers here, and none of the other modern snake families had arrived.", "Over time, elapids came to fill most of the roles a snake can play on land, and some live in the sea."], "os fatos lado a lado (pauta §4.2): passa");
reprova("45-e-mar-fundo", "Around 45 million years ago, Australia moved north and deep ocean opened up.");
passa("45-e-mar-fundo", "Around 45 million years ago, Australia started moving north, and over the next ten million years or so, deep ocean opened up behind it.", "a forma da pauta §4.2 (K6): passa");
reprova("quase-toda-venenosa", "Almost every snake in Australia is venomous.");
passa("quase-toda-venenosa", "Australia has well over a hundred kinds of them.", "a forma da pauta §4.2: passa");
reprova("corrente-secou", "The new ocean current dried out Australia.");
passa("corrente-secou", ["Then the continent dried out.", "Its interior began turning arid about 15 million years ago, and the full deserts of the center appeared only in the last few million years."], "a forma da pauta §4.3: passa");
reprova("endemismo", "About nine in ten of its reptiles are found nowhere else.");
passa("endemismo", "So Australia ended up with kangaroos and koalas, and with no native cats and no hoofed animals at all.", "a forma da pauta §4.2: passa");
reprova("agua-viva-recorde", "The box jellyfish is the most venomous animal on Earth.");
reprova("agua-viva-recorde", "Box jellyfish are an Australian danger.");
passa("agua-viva-recorde", "The box jellyfish has been blamed for around 70 deaths in tropical Australian waters.", "a forma da pauta §4.5: passa");
passa("agua-viva-recorde", "Box jellyfish, he points out, live in warm seas well beyond Australia.", "Arbuckle (pauta §4.1): passa");
reprova("crocodilo", "Crocodiles are Australian animals.");
reprova("crocodilo", "There are 100,000 crocodiles in the Territory.");
passa("crocodilo", ["The crocodiles killed 13.", "They live from Sri Lanka to northern Australia, and after decades of commercial hunting, the Northern Territory protected them in 1971."], "a forma da pauta §4.6: passa");
reprova("soro-agua-viva", "The world's first antivenoms for sea creatures were one for the stonefish and one for the box jellyfish.");
reprova("soro-agua-viva", "Australia made the world's first antivenom for a jellyfish, and it works.");
passa("soro-agua-viva", "Australia went on to make the world's first antivenom for a jellyfish, in 1970.", "a forma da pauta §4.5 (o [primeiro-soro] alerta): passa");
reprova("tubarao", "Taronga counts every shark bite.");
reprova("tubarao", "Shark attacks are rare and falling.");
reprova("tubarao", "Sharks killed 32 people over that decade.");
passa("tubarao", "Dogs, cattle and horses, animals in the sea, sharks among them, and saltwater crocodiles.", "nas palavras do ABS (pauta §4.6, K9): passa");
reprova("aranhas-desde", "No one has died from a spider bite since 1981.");
reprova("aranhas-desde", "No one has died from a redback bite since 1956.", 'o "since 1956" do redback sem "confirmed" (fatos-c §3)');
passa("aranhas-desde", "There hasn't been a confirmed death from a redback bite since 1956.", 'com "confirmed" e o ano de Wiener (fatos-c §3): passa');
reprova("aranhas-desde", "The last spider death in Australia was in 2016.");
passa("aranhas-desde", ["Before 1981, funnel-web spiders killed at least 13 people.", "That year, an antivenom came into use.", "A review of the recorded cases found no confirmed death after it."], "a forma da pauta §4.5: passa");
passa("aranhas-desde", "In the country's official death records, from 2016 to 2025, spiders killed no one at all.", "o gancho B (o ABS): passa");
passa("aranhas-desde", "Since the antivenom program began, more than 40 years ago, the park says, no one has died from a funnel-web bite.", "o fecho, com o dono (pauta §4.7): passa");
reprova("veneno-lagartos", "The funnel-web's venom evolved to fight lizards.");
passa("veneno-lagartos", ["A team that studied the toxin thinks it started out as a weapon for catching insects.", "The males, the team proposes, turned it into a defense against animals like bandicoots, birds and lizards."], "a forma da pauta §4.5 (K8): passa");
reprova("acasalamento", "The males wander out in the mating season.");
passa("acasalamento", "The bites mostly come from males that leave their burrows to look for females, and most happen between November and March.", "a forma da pauta §4.5 (K8): passa");
reprova("soro-funnel", "The antivenom completely reversed the bite in almost every case.");
reprova("soro-funnel", "The funnel-web antivenom worked in 97 percent of cases.");
reprova("soro-funnel", ["Before 1981, funnel-web spiders killed at least 13 people.", "Seven of them were children."], "as crianças, fora da voz");
passa("soro-funnel", "Where an expert had identified the spider, the antivenom worked completely in almost every case.", "a forma da pauta §4.5 (K8): passa");
passa("soro-funnel", "East of it, about three-quarters of the country drains toward the Amazon and holds more than 97 percent of Peru's water.", "os 97 % do Peru, sem aranha nem soro: passa (o falso positivo achado no roteiro do vídeo 3, consertado)");
reprova("redback-soro", "The redback antivenom saved lives.");
passa("redback-soro", ["But a later trial found the redback antivenom didn't significantly ease pain or other symptoms.", "So it isn't clear that the antivenom is what keeps redback bites from killing."], "a forma da pauta §4.5: passa");
reprova("caes-imunes", "Dogs and cats are immune to it.");
passa("caes-imunes", "Dogs and cats, they note, are insensitive to it.", "a forma da pauta §4.5: passa");
reprova("minutos", "A funnel-web bite can kill in 15 minutes.");
passa("minutos", "Most bites happen between November and March.", "passa");
reprova("internacoes", "Spider bites led to about 42,000 hospitalisations.");
reprova("internacoes", "Over 13 years, spider bites put Australians in the hospital.");
reprova("internacoes", "There were 12,000 spider bites.");
passa("internacoes", "Over a little more than a decade, spider bites put Australians in the hospital about 12,000 times.", "a forma da pauta §4.1 (o [internacoes-aihw] alerta): passa");
reprova("cavalo-canguru", "Horses kill more Australians than snakes, spiders and sharks combined.");
reprova("cavalo-canguru", "Horses killed 222 people.");
reprova("cavalo-canguru", "Kangaroos kill 5 people a year.");
passa("cavalo-canguru", "Deaths from these animals remain relatively rare, particularly in comparison to deaths associated with other species, the National Coronial Information System says.", "o resumo da página do NCIS (CC BY 4.0), sem número (o registro, 18/11): passa");
passa("cavalo-canguru", "Thousands of hospital admissions are attributable to contact with bees, hornets, wasps, spiders, snakes, ticks, ants and marine animals each year in Australia.", "a frase de antes no resumo do NCIS: passa");
passa("cavalo-canguru", "Australia has a reputation for being home to some of the world's most dangerous animals, the National Coronial Information System notes.", "a abertura do resumo do NCIS (a fama, com o dono): passa");
passa("cavalo-canguru", "On farms, a separate study found, most fatal incidents with animals involved horses or cattle.", "a forma da pauta §4.6 (P2), sem número: passa");
reprova("cama", "More Australians die falling out of bed than from venomous animals.");
passa("cama", "The land and the water kill far more than any animal.", "a forma da pauta §4.6: passa");
reprova("eua", "Australia is as safe as America when it comes to venomous animals.");
reprova("eua", "Venomous animals kill more people per person in Australia than in the United States.");
passa("eua", "In the United States, the same family includes the rattlesnakes.", "os EUA sem mortes nem risco: passa");
reprova("india-razao", "India loses about 58,000 people a year to snakebite, hundreds of times Australia's toll.");
reprova("india-razao", ["India loses about 58,000 people a year to snakebite.", "Per person, that's 350 times Australia's rate."], "um múltiplo exato, por pronome, na frase seguinte");
reprova("india-razao", "Per person, India's snakebite death rate is 300 times Australia's.", 'um múltiplo exato ("300 times")');
reprova("india-razao", "India loses thousands of times as many people to snakebite as Australia.");
passa("india-razao", "Per person, India's snakebite death rate is hundreds of times Australia's.", '"hundreds of times", por habitante (fatos-c §5): passa');
passa("india-razao", ["India loses about 58,000 people a year to snakebite.", "Per capita, that's far worse than Australia."], "o por habitante sem múltiplo: passa (antes reprovava, à espera do fatos-c)");
passa("india-razao", ["Snakebite kills somewhere between 81,000 and 138,000 people a year worldwide, the World Health Organization estimates, and India alone loses about 58,000 of them.", "Do the math per person and it's roughly one in 21,000 Indians every year."], "a frase segura do fatos-c com a conta (§5.3): passa");
alerta("india-razao", "Per person, India's death rate is more than 300 times Australia's.", '"more than 300 times", por habitante: alerta (o fatos-c o dá como seguro; o acréscimo da Sala reprova o múltiplo exato)');
passa("india-razao", "The World Health Organization puts snakebite deaths worldwide at around 81,410 to 137,880 a year, and India alone loses about 58,000 a year.", "a OMS, com o intervalo do mundo e os ~58.000 da Índia (o registro): passa");
reprova("abelhas-sem-soro", "There's no antivenom for bee stings.");
passa("abelhas-sem-soro", ["Those deaths usually come from anaphylaxis, a severe allergic reaction.", "One national study found that fewer than half of the people who died that way reached medical care before they died."], "a forma da pauta §4.6 (K9): passa");
reprova("abelha-europeia", "Most bee deaths come from European honeybees.", "sem a alergia");
reprova("abelha-europeia", "European honeybees kill more Australians than snakes.");
reprova("abelha-europeia", "The honeybee arrived here in 1810.", "outro ano que 1822");
reprova("abelha-europeia", "The first honeybees ever brought to Australia came in 1822.", '"the first bees ever" (a fonte diz "first recorded surviving")');
reprova("abelha-europeia", "The European wasp arrived in 1959.", "a vespa com o ano (a fonte oficial não foi lida)");
passa("abelha-europeia", "The honeybee was brought here from Europe.", "a abelha trazida: passa (antes reprovava, à espera do fatos-c)");
passa("abelha-europeia", ["The honeybee isn't Australian.", "It came from England on a ship called the Isabella, in 1822."], "a frase segura do fatos-c (§2.1): passa");
passa("abelha-europeia", ["The honeybee is the real killer here.", "It came over from Europe in 1822, and in one study of Australian deaths from 1997 to 2013, it was behind roughly three in four of the fatal insect-sting reactions."], "a frase segura do fatos-c (§2.2), dita como alergia: passa");
passa("abelha-europeia", "Here, the honeybee, an import from Europe, is the insect behind most of Australia's fatal sting allergies.", "a forma curta do fatos-c (§2.2): passa");
passa("abelha-europeia", "Then there's the European wasp, which arrived in the second half of the twentieth century.", "a vespa sem ano (fatos-c §2.3): passa");
alerta("abelha-73", "Honeybees were behind 73 percent of the fatal insect-sting reactions.", "os 73 % de segunda mão na voz");
passa("abelha-73", "In one study, honeybees were behind roughly three in four of the fatal insect-sting reactions.", '"roughly three in four": sem alerta');
reprova("redback-ano", "The redback antivenom arrived in 1955.");
passa("redback-ano", "The redback antivenom arrived in 1956.", "o ano de Wiener (fatos-c §3): passa");
passa("redback-ano", "The redback has its own antivenom, made in 1956 by a Melbourne scientist who dissected the venom glands of hundreds of spiders to do it.", "a frase segura do fatos-c (§3): passa");
reprova("soro-a-razao", "Antivenom is the reason so few people die.");
reprova("soro-a-razao", ["Australia has antivenom for every venomous native snake.", "That's why so few people die."], "por pronome");
reprova("soro-a-razao", "Thanks to the pressure bandage, few people die of snakebite.");
passa("soro-a-razao", "Part of why so few people die is the medicine: antivenom, an ambulance and a bandage.", '"part of why": passa');
passa("soro-a-razao", ["So why do so few people die?", "Part of it is the medicine: antivenom since 1930, an ambulance, a bandage that slows the venom down."], "a frase segura do fatos-c (§1.4): passa");
reprova("anzcor-16", "In the 16 years to 2016, 16 Australians died of snakebite.", "o erro do ANZCOR");
passa("anzcor-16", "Over that decade, venomous snakes killed 35 people.", "os 35 do ABS: passa");
alerta("struan", "The bandage trick comes from Struan Sutherland, an Australian researcher, in 1979.");
passa("struan", "The bandage trick comes from experiments in 1979 by an Australian researcher, Sutherland, and his colleagues.", "a frase segura do fatos-c (§1.2): sem alerta");
reprova("carrapato-x25", "Ticks killed six of them.");
reprova("carrapato-x25", "The other eight were ticks, ants and two animals in the sea.", "o carrapato que o código não nomeia");
reprova("carrapato-x25", "Two box jellyfish deaths made up the rest.");
passa("carrapato-x25", ["The other eight?", "Two died from marine animals — the official category lists jellyfish, coral and sea anemones."], "a frase segura do fatos-c (§4.1): passa");
passa("carrapato-x25", "Six died from what the death codes call 'other venomous arthropods' — which means things like ants and caterpillars.", "o X25 nas palavras da CID-10 (fatos-c §4.1): passa");
passa("carrapato-x25", "The ants and ticks in that category can kill too — not with venom, but with allergy.", "o carrapato sem número (fatos-c §4.2): passa");
passa("abelha-europeia", "The animals that kill most often in Australia's venom records aren't snakes at all.", "a forma da pauta §4.6: passa");
reprova("soro-acabou", "The antivenom ended snake deaths.");
passa("soro-acabou", "Snakes kill two or three people a year.", "o fundo da pauta §4.4: passa");
reprova("parque-causa", "The Reptile Park is why no one dies.");
passa("parque-causa", "It asks people around Sydney, the Central Coast and Newcastle to catch the funnel-webs they find, safely, and bring them in.", "o fecho (pauta §4.7): passa");
reprova("fama-hospitais", "Australia's reputation comes from its good hospitals.");
passa("fama-hospitais", "He has wondered whether part of that image comes from the country's \"scientific capital\" and its \"excellent infrastructure\" for public health and medical care.", "a hipótese como hipótese (pauta §4.6): passa");
reprova("hoje", "Right now there's no antivenom for black snakes.");
reprova("hoje", "The TGA lists that antivenom as unavailable.");
reprova("hoje", "In 2026, a crocodile killed a fisherman.");
passa("hoje", "In January 2026, the park said it was down to about half its usual supply.", "o fecho, com a data (pauta §4.7, K10): passa");
reprova("15-por-cento", "Worldwide, only about 15 percent of snakes are venomous.", "a frase do gancho A, que a Sala tirou");
reprova("15-por-cento", ["Of Australia's roughly 220 kinds of snakes, about 145 are venomous, a biologist told Live Science.", "Worldwide, only about 15 percent are."], "por pronome, a cobra na frase anterior");
reprova("15-por-cento", "Fifteen percent of the world's snakes are venomous.");
passa("15-por-cento", "Only about 15 percent of the land lies in Canada.", "os 15 % do Columbia, sem cobra: passa");
reprova("um-em-cinco", "Worldwide, only about one in five snakes is venomous.", 'o "um em cinco" sem "elapids and vipers" nem "front-fanged"');
passa("um-em-cinco", "Worldwide, elapids and vipers, the front-fanged families, make up about one in five snakes.", "a forma da Sala: passa");
passa("um-em-cinco", ["Elapids and vipers are the two front-fanged families.", "Worldwide, they're about one in five snakes."], "com a família na frase anterior: passa");
reprova("australian-museum", "The Australian Museum says brown snakes like farms.");
passa("australian-museum", "Michael Lee, of the South Australian Museum, counted them.", "o South Australian Museum, de Lee: passa");
reprova("na-tela-registro", "In 2018 alone, snakes killed nine people.");
reprova("na-tela-registro", "That's about 24 days of road deaths.");
reprova("na-tela-registro", "Over a lifetime, the chance is about one in 38,000.");
reprova("na-tela-registro", "Drowning killed 2,077 people.");
passa("na-tela-registro", "Measured against the population, that's about a one-in-three-million chance each year.", "a forma da pauta §8: passa");
reprova("na-tela-deriva", "The deep ocean opened 33.5 million years ago.");
reprova("na-tela-deriva", "About 100 terrestrial species of elapids live there.");
reprova("na-tela-deriva", "These deadly serpents account for 65 percent of Australia's snakes.");
reprova("na-tela-deriva", "The rats arrived in the Pliocene.");
passa("na-tela-deriva", "Then, some 20 million years ago, Australia's leading edge began running into Southeast Asia, and a chain of islands formed between the two.", "a forma da pauta §4.2 (o [colisao-20] alerta): passa");
reprova("na-tela-agua", "Only 1 in 225 stings was fatal.");
reprova("na-tela-agua", "The blue-ringed octopus lives on the south coast.");
passa("na-tela-agua", "It starts life as tiny polyps in tidal creeks.", "a forma da pauta §4.5: passa");
reprova("na-tela-soros", "The polyvalent antivenom arrived in 1962.", "o 1962 do polivalente (o 1956 do redback agora vai à voz: o [redback-ano])");
reprova("na-tela-soros", "The trial had 224 patients.");
reprova("na-tela-soros", "Brown snakes caused 17 deaths, tiger snakes four.");
reprova("na-tela-soros", "Brown snakes were behind 41 percent of the bites.");
passa("na-tela-soros", "In that national study, brown snakes were behind about four in ten of the bites where the snake was identified.", "a troca da pauta §4.4: passa");
passa("na-tela-soros", "Australia began making antivenom in 1930.", "o 1930, opcional na voz (pauta §4.4): passa");
reprova("na-tela-quem-mata", "Dogs killed 42 people.");
reprova("na-tela-quem-mata", "On farms, about 6.5 people die each year.");
caso("na-tela-quem-mata-e-cavalo", { trocasA: { [I]: "Of those, 75 involved horses." } },
  { exit: 1, problema: ["[na-tela-quem-mata]", "[cavalo-canguru]"], so: true, nota: '"Of those, 75 involved horses.": os 75 cavalos ficam na tela, e o cavalo com número reprova à parte' });
reprova("na-tela-quem-mata", "Of those, 31 involved cattle.");
passa("na-tela-quem-mata", "Bees and wasps killed 42, more than the snakes.", "o 42 das abelhas: passa");
reprova("na-tela-parque", "There are 15 official drop-off points.");
reprova("na-tela-parque", "More than 2,000 juvenile spiders are being raised.");
passa("na-tela-parque", "It takes about 150 milkings to make a single vial.", "o fecho (pauta §4.7): passa");
reprova("aspas-da-jornalista", '"The exception is the snakes," he says.');
reprova("aspas-da-jornalista", 'Arbuckle said Australia\'s venomous fauna are "well within typical range."');
passa("aspas-da-jornalista", "The exception, he says, is the snakes.", "sem aspas (pauta §4.1): passa");
// as regras do Columbia saíram: o que o portão do vídeo 7 reprovava passa aqui
passa("tratado-do-columbia", "The treaty was scrapped.", "a regra do vídeo 7 saiu: passa");
passa("controle-do-columbia", "Canada controls the river.", "a regra do vídeo 7 saiu: passa");
passa("trump-do-columbia", "Trump called it a very large faucet.", "a regra do vídeo 7 saiu: passa");
passa("every-do-columbia", "Every spring, the United States pays for that empty space.", "o alerta do vídeo 7 saiu: passa sem alerta", { semAlerta: ["[every-sem-data]"] });

// ---- os alertas da Austrália --------------------------------------------------------------------------------------------
secao("Os alertas da Austrália (nunca reprovam)");
alerta("live-science", "Of Australia's roughly 220 kinds of snakes, about 145 are venomous, a biologist told Live Science.");
alerta("censo-preciso", "At the 2021 census, 1,020 people lived there.", "a precisão falsa na voz");
alerta("censo-preciso", "That's 2,133 times as many people per square mile.");
passa("censo-preciso", "The Channel Country covers about 117,000 square miles.", '"about 117,000": sem alerta');
alerta("censo-causa", ["At the 2021 census, those three states had almost 20 million people.", "That's why the brown snake kills more people."], "a medida como causa");
passa("censo-causa", ["Per square mile, that's more than a thousand times as many people as the Channel Country.", "You can guess which one kills."], "a conta fica com quem assiste (pauta §4.4): sem alerta");
alerta("marrom-genero", ["In one national study of snakebites, over a decade, doctors counted 23 deaths.", "Seventeen of them were from eastern brown snakes."], 'as 17 do estudo ditas "eastern brown"');
passa("marrom-genero", ["In one national study of snakebites, over a decade, doctors counted 23 deaths.", "Seventeen of them were from brown snakes."], "as 17 de \"brown snakes\" (pauta §4.4): sem alerta");
alerta("duas-em-tres", "About two in three of Australia's snakes are elapids, by the count of the Reptile Database.");
alerta("contagem-dono", "Of Australia's 229 kinds of snakes, 150 are elapids.");
alerta("contas-iguais", "Of Australia's roughly 220 kinds of snakes, about 145 are venomous, a biologist told Live Science.", "a contagem da Live Science (\"venomous\") ao lado do \"one in five\" de elapídeas e víboras do gancho da base");
alerta("veneno-terra", "It has the most potent venom in the world.");
alerta("fama-dono", "Australia's image is overstated.");
passa("fama-dono", "Kevin Arbuckle, an evolutionary biologist at Swansea University, says the country's image as the home of highly venomous animals is, \"for the most part,\" overstated.", "com o dono: sem alerta");
alerta("arbuckle-quem", "Arbuckle says the image is, \"for the most part,\" overstated.");
alerta("marrom-dono", ["One lives out on these floodplains and is usually quite shy.", "The other lives where people farm and build."]);
alerta("parque-dono", ["On the Central Coast, north of Sydney, the Australian Reptile Park milks funnel-web spiders for their venom.", "Only adult males are milked, because their venom is significantly more potent."]);
passa("parque-dono", ["On the Central Coast, north of Sydney, the Australian Reptile Park milks funnel-web spiders for their venom.", "Only adult males are milked, because their venom, the park says, is significantly more potent."], 'com "the park says" (pauta §4.7): sem alerta, e sem o [hipotese-como-causa]', { semAlerta: ["[parque-dono]", "[hipotese-como-causa]"] });
alerta("colisao-20", "Some 20 million years ago, Australia began running into Southeast Asia.");
alerta("primeiro-soro", "Australia went on to make the world's first antivenom for a jellyfish, in 1970.");
alerta("internacoes-aihw", "Over a little more than a decade, spider bites put Australians in the hospital about 12,000 times.");
alerta("funnel-found", "A team that studied the toxin found it started out as a weapon for catching insects.");
passa("funnel-found", "A team that studied the toxin thinks it started out as a weapon for catching insects.", '"thinks" (pauta §4.5): sem alerta');
alerta("amostra-pequena", ["The crew logged the posts.", "Doctors counted 23 deaths from snakebite."], 'o 23 sem o estudo nem a década (a frase de antes é fixa: o "survey" de uma frase do corpo contaria como o estudo dito perto)');
passa("amostra-pequena", "In one national study of snakebites, over a decade, doctors counted 23 deaths.", "com o estudo e a década: sem alerta");
alerta("amostra-pequena", "Funnel-web spiders killed 13 people.");
passa("amostra-pequena", "Before 1981, funnel-web spiders killed at least 13 people.", '"at least" e "before 1981": sem alerta');
alerta("hipotese-como-causa", "He has wondered whether the reputation grew because of its excellent medical care.", 'mesmo com "wondered", o "because" alerta (o [fama-hospitais] não reprova)');
alerta("hipotese-como-causa", "It bites once and lets go because a rat can bite back.");
alerta("hipotese-como-causa", "Funnel-web venom turned into a defense because predators hunted the males.");
passa("hipotese-como-causa", "The scientists who study these venoms think that's probably an adaptation to its prey: a rat can bite back.", "a hipótese como hipótese: sem alerta");
passa("hipotese-como-causa", "That morning, a total eclipse of the sun was due to cross southern Brazil, and a NASA press release put out ahead of it lays out a plan for this sand.", 'o "press release" e o "due to cross" do Cassino: sem alerta (o falso positivo achado no roteiro do vídeo 6, consertado: o "release" só conta como a cobra que solta a presa)');
caso("pergunta-dupla-dois-why", { gancho: { 8: "So why are so many of Australia's snakes venomous, and why do so few people die?" } },
  { exit: 0, alerta: ["[pergunta-dupla]"], semProblema: ["[premissa-tantos]"], nota: "a pergunta do gancho A da pauta (dois \"why\"): alerta" });
caso("pergunta-dupla-and", { gancho: [...GANCHO.slice(0, 8), "So does Australia really have so many dangerous animals?", "And why do so few people die from them?", GANCHO[9]] },
  { exit: 0, alerta: ["[pergunta-dupla]"], semProblema: ["[premissa-tantos]"], nota: "a forma do cético (pauta §8), duas perguntas juntas por \"And why\": alerta" });
caso("pergunta-dupla-uma", {}, { exit: 0, semAlerta: ["[pergunta-dupla]"], nota: "a pergunta da base, um \"why\" só: sem alerta" });
caso("oito-que-faltam-alerta", { trocasA: { [I]: ["Over that decade, venomous snakes killed 35 people.", "Bees and wasps killed 42, more than the snakes."] } },
  { exit: 0, alerta: ["[oito-que-faltam]"], nota: "o 35 e o 42 sem os outros 8: alerta" });
caso("oito-que-faltam-passa", { trocasA: { [I]: ["Over that decade, venomous snakes killed 35 people.", "Bees and wasps killed 42, more than the snakes.", "The other eight were other venomous arthropods, like ants, and venomous marine animals."] } },
  { exit: 0, semAlerta: ["[oito-que-faltam]"], nota: "os outros 8 ditos logo depois: sem alerta" });
const CINCO = (n) => `The crew logged ${n} posts, ${n + 1} barrels, ${n + 2} signs, ${n + 3} fuses and ${n + 4} gates.`;
const OITO = Array.from({ length: 8 }, (_, k) => CINCO(100 + 10 * k));
const emSeq = (l) => Object.fromEntries(l.map((f, k) => [I + k, f]));   // troca frases seguidas do corpo (sem crescer a faixa)
caso("numeros-50", { trocasA: emSeq([...OITO, "The crew logged 301 posts and 302 barrels."]) },
  { exit: 0, semAlerta: ["[numeros-falados]"], nota: "50 números (8 do gancho + 42): sem alerta" });
caso("numeros-51", { trocasA: emSeq([...OITO, "The crew logged 301 posts, 302 barrels and 303 signs."]) },
  { exit: 0, alerta: ["[numeros-falados] (51 números"], nota: "51 números: alerta (a pauta §7 orça ~43)" });
const cNum = caso("numeros-conta", { trocasA: { [I]: ["Seventeen of them were from brown snakes.", "Its interior began turning arid about 15 million years ago, and the full deserts of the center appeared only in the last few million years.", "From 2016 to 2025, the toll was small.", "On September 16, 1964, the leaders met at the border.", "Ten of those people went into cardiac arrest outside a hospital."] } },
  { exit: 0, args: ["--onde"], nota: "a conta, com os três ajustes deste vídeo" });
if (cNum.laudo) {
  const ns = cNum.laudo.numeros_falados.onde.map((o) => o.numero);
  conferir(cNum.laudo.numeros_falados.total === 13 && ["Seventeen", "15 million", "2016 to 2025", "1964", "Ten", "one-in-three-million", "one in five"].every((n) => ns.includes(n)) && !ns.includes("million"),
    `a conta dos números: ${cNum.laudo.numeros_falados.total} (os 8 do gancho, com "one in five" e "one-in-three-million" uma vez cada, e ${ns.slice(8).map((n) => `"${n}"`).join(", ")}; o "few million" e "the leaders" não contam)`);
}
caso("uma-vez-estrada-sem-morte", { trocasA: { [I]: "For the people who live along this road, the fire came only months after the long closures of the slides had ended." } },
  { exit: 0, semAlerta: ["[uma-vez]"], nota: 'a estrada e "months" sem morte (o Big Sur), com a estrada num mês do gancho: sem alerta (o falso positivo achado no roteiro do vídeo 5, consertado)' });
caso("uma-vez-alerta", { trocasA: { [I]: "From 2016 to 2025, venomous animals killed 85 people in Australia.", 40: "That's about a one-in-three-million chance each year.",
  60: "Of Australia's 229 kinds of snakes, 150 are elapids, by the Reptile Database's count.", 70: "Worldwide, elapids and vipers make up about one in five snakes, by the same count.", 80: "Australia's roads kill more than that in a month." } },
  { exit: 0, alerta: ["[uma-vez]", '"85 (o livro do ABS)" 2 vezes', '"one in three million" 2 vezes', '"a contagem das cobras da Austrália" 2 vezes', '"a fração das cobras do mundo" 2 vezes', '"a estrada num mês" 2 vezes'],
    nota: "o 85, a chance, a contagem, a fração e a estrada ditos de novo depois do gancho: alerta" });
alerta("termo-definido", "Its LD50 came out on top.", "o LD50 sem \"the dose that kills half\"");
passa("termo-definido", "They measured the dose that kills half the mice in a test, what scientists call the LD50.", "definido: sem alerta");
alerta("termo-definido", "Those deaths usually come from anaphylaxis.", "a anafilaxia sem \"allergic\"");
alerta("termo-definido", "It comes out to sea at the start of each stinger season.", "a temporada sem os meses");
caso("termo-definido-elapids", { gancho: { 2: "But of Australia's 229 kinds of snakes, 150 are elapids, by the count of the Reptile Database." } },
  { exit: 0, alerta: ['[termo-definido] ("elapids"'], semProblema: ["[titulo-1]"], nota: 'os "elapids" do gancho sem "front-fanged": alerta (e o título 1 continua pago)' });
// as palavras de ALERTA do molde, todas ficam
const alertaPalavra = (nome, frase, re) => caso(`palavra-${nome}`, { trocasA: { [I]: frase } }, { exit: 0, alerta: [`conferir ${re}`], nota: `"${frase}"` });
alertaPalavra("everyone", "Everyone on the crew agreed on the count.", String.raw`/\beveryone\b/i`);
alertaPalavra("nobody", "Nobody on the crew questioned the count.", String.raw`/\bnobody\b/i`);
alertaPalavra("never", "The crew never questioned the count.", String.raw`/\bnever\b/i`);
alertaPalavra("first", "The first count came back at dawn.", String.raw`/\bfirst\b/i`);
alertaPalavra("last", "Last summer, the crew counted the posts again.", String.raw`/\blast\b/i`);
alertaPalavra("always", "The crew always checked the count twice.", String.raw`/\balways\b/i`);
alertaPalavra("mystery", "The empty plain is no mystery.", String.raw`/\bmyster(y|ies|ious)\b/i`);
alertaPalavra("secret", "The plain keeps no secret from the map.", String.raw`/\bsecrets?\b/i`);
alertaPalavra("still", "The ranchers still work the plain.", String.raw`/\b(still|today|now|currently)\b/i`);
alertaPalavra("here", "Out here, the nights are dark.", String.raw`/\bhere\b/i`);
alertaPalavra("this-line", "Follow this line to the coast.", String.raw`/\bthis line\b/i`);
// as VETADAS do molde ficam
caso("vetada-shocking", { trocasA: { [I]: "The numbers are shocking." } },
  { exit: 1, problema: ["vetada (voz §2) /\\bshocking\\b/i"], so: true, nota: '"shocking" reprova pela VETADA do molde' });
caso("vetada-recently", { trocasA: { [I]: "A park ranger was bitten recently." } },
  { exit: 1, problema: ["vetada (voz §2) /\\brecently\\b/i"], so: true, nota: '"recently" reprova pela VETADA do molde (o hoje, voz §2)' });

// ---- a inscrição falada ------------------------------------------------------------------------------------------------
secao("A inscrição falada (voz §3; cta §1, §5 e §6; a do vídeo 7, sem mudança)");
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
caso("insc-duas", { trocasB: { 10: "If the outback kept you here, subscribe to Alpha Point." } }, { exit: 1, problema: ["[inscricao-mais-de-uma]"], so: true, nota: "duas: reprova (o \"here\" alerta)" });
caso("insc-outro-subscribe", { trocasB: { 10: "The ranger told the crew to subscribe to the county newsletter." } }, { exit: 1, problema: ["[inscricao-outro-subscribe]"], so: true, nota: "outro \"subscrib…\" no texto: reprova" });
caso("insc-sem-alpha-point", { insc: "If you've followed the snakes this far, subscribe to the channel." },
  { exit: 1, problema: ["[inscricao-ausente]", "[inscricao-outro-subscribe]"], so: true, nota: "\"subscribe to the channel\": reprova (ausente, e o \"subscrib…\" fora dela)" });
caso("insc-no-gancho", { insc: null, gancho: [...GANCHO.slice(0, 9), INSC, GANCHO[9]] },
  { exit: 1, problema: ["[inscricao-gancho]", "[inscricao-posicao]", "[inscricao-primeiro-minuto]", "[inscricao-paragrafo]"], so: true, nota: "antes da assinatura: reprova (e no 1º minuto, fora da janela, e no meio do parágrafo do gancho)" });
caso("insc-no-fecho", { insc: null, trocasB: { [B.length - 1]: [B[B.length - 1], INSC] } },
  { exit: 1, problema: ["[inscricao-fecho]", "[inscricao-posicao]"], so: true, nota: "depois da marca do fecho: reprova" });
caso("insc-no-fecho-sem-marca", { insc: null, fecho: false, trocasB: { [B.length - 1]: [B[B.length - 1], INSC] } },
  { exit: 1, problema: ["[inscricao-fecho]", "[inscricao-posicao]"], so: true, alerta: ["[inscricao-ato]"], nota: "sem a marca do fecho, a última frase do texto (nas 8 últimas): reprova" });
caso("insc-meio-do-paragrafo", { lugar: "meio" }, { exit: 1, problema: ["[inscricao-paragrafo]"], so: true, nota: "a 3ª de 6 frases do parágrafo: reprova" });
caso("insc-penultima-sem-volta", { lugar: "penultima" }, { exit: 1, problema: ["[inscricao-paragrafo]"], so: true, nota: "a penúltima, com uma frase qualquer depois: reprova" });
caso("insc-penultima-com-volta", { lugar: "penultima-volta" }, { exit: 0, semProblema: ["[inscricao-"], semAlerta: ["[inscricao-"], nota: "a penúltima, com \"Back to the snakes, then.\" por último: passa" });
caso("insc-inicio-do-ato", { lugar: "inicio" }, { exit: 0, semProblema: ["[inscricao-"], semAlerta: ["[inscricao-"], nota: "a primeira do parágrafo, com a marca de ato antes: passa" });
caso("insc-sem-ato", { marcas: false }, { exit: 0, alerta: ["[inscricao-ato]"], semProblema: ["[inscricao-"], nota: "na fronteira de parágrafo, sem marca de ato: alerta" });
// a frase e o lugar que a pauta §7 propõe: a ponte do ato 3 ("…lives somewhere else.") fecha o parágrafo, e a inscrição e a volta vêm logo
// depois, "If you're enjoying the story so far, subscribe to Alpha Point. Now, the other snake."
const PONTE_3 = ["So the snake with the most potent venom on land has almost no record of hurting people.", "The snake that actually kills Australians lives somewhere else."];
caso("insc-da-pauta", { trocasA: { [A.length - 1]: PONTE_3 }, insc: "If you're enjoying the story so far, subscribe to Alpha Point.", volta: "Now, the other snake.", lugar: "penultima-volta" },
  { exit: 0, semProblema: ["[inscricao-"], semAlerta: ["[inscricao-"], alerta: [String.raw`conferir /\b(still|today|now|currently)\b/i`],
    nota: "a frase e a volta da pauta §7, depois da ponte do ato 3: passa, sem alerta de inscrição (a ponte não tem aspas nem número-herói); o \"Now\" dispara o alerta do presente do molde" });
const inscReprova = (nome, frase, id, nota) => caso(`insc-${nome}`, { insc: frase }, { exit: 1, problema: [id], so: true, nota: nota ?? `"${frase}"` });
inscReprova("smash", "If you've followed the snakes this far, smash that subscribe to Alpha Point button.", '"smash"');
inscReprova("hit-the-like", "If you've followed the snakes this far, hit the like and subscribe to Alpha Point.", '"hit the like"');
inscReprova("like-button", "If you've followed the snakes, tap the like button and subscribe to Alpha Point.", '"like button"');
inscReprova("leave-a-like", "If you've followed the snakes this far, leave a like and subscribe to Alpha Point.", '"leave a like"');
inscReprova("ring-the-bell", "If you've followed the snakes this far, subscribe to Alpha Point and ring the bell.", '"ring the bell"');
inscReprova("bell", "If you've followed the snakes this far, subscribe to Alpha Point and tap the bell.", '"bell"');
inscReprova("dont-forget", "Don't forget to subscribe to Alpha Point if you've followed the snakes this far.", "\"don't forget\"");
inscReprova("make-sure", "If you've followed the snakes this far, make sure to subscribe to Alpha Point.", '"make sure"');
inscReprova("please", "If you've followed the snakes this far, please subscribe to Alpha Point.", '"please"');
inscReprova("comment", "If you've followed the snakes this far, subscribe to Alpha Point and leave a comment.", '"comment"');
inscReprova("every-week", "If you want a story like this every week, subscribe to Alpha Point.", '"every week"');
inscReprova("numero", "If you've followed the snakes for five minutes, subscribe to Alpha Point.", "[inscricao-numero]");
inscReprova("plateia", "If you're new to the channel, subscribe to Alpha Point, like most of you haven't.", "[inscricao-plateia]");
inscReprova("25-palavras", "If you have followed these long and winding stories all the way from the plains in the west to the coast in the east, subscribe to Alpha Point.", "[inscricao-longa]");
const inscAlerta = (nome, frase, id, nota) => caso(`insc-${nome}`, { insc: frase }, { exit: 0, alerta: [id], semProblema: ["[inscricao-"], nota: nota ?? `"${frase}"` });
inscAlerta("17-palavras", "If you have followed the snakes from the plains down to the coast, subscribe to Alpha Point today.", "[inscricao-16]");
inscAlerta("sem-if", "You've followed the snakes this far, so subscribe to Alpha Point.", "[inscricao-if]");
inscAlerta("sem-you", "If the snakes held up so far, subscribe to Alpha Point.", "[inscricao-you]");
caso("insc-like-verbo", { insc: "If you like tracing a claim back to its source, subscribe to Alpha Point." },
  { exit: 0, semProblema: ["[inscricao-"], semAlerta: ["[inscricao-"], nota: 'o "like" verbo (a opção 2 do Cassino): passa' });
caso("insc-depois-de-citacao", { trocasA: { [A.length - 1]: 'The county clerk wrote "all clear" in the log.' } },
  { exit: 0, alerta: ["[inscricao-citacao]"], semProblema: ["[inscricao-"], nota: "a frase de antes com aspas: alerta" });
caso("insc-depois-de-numero-heroi", { trocasA: { [A.length - 1]: "The survey team counted 2,300 posts along the north gate." } },
  { exit: 0, alerta: ["[inscricao-numero-heroi]"], semProblema: ["[inscricao-"], nota: "a frase de antes com um número grande: alerta" });
caso("insc-depois-de-ano", { trocasA: { [A.length - 1]: "The survey team counted the posts in 1964." } },
  { exit: 0, semAlerta: ["[inscricao-numero-heroi]"], nota: "a frase de antes só com um ano: sem alerta" });

// ---- os ganchos da pauta §8 -------------------------------------------------------------------------------------------
secao("Os ganchos A e B da pauta §8");
const GANCHO_A = [
  "Out on the floodplains of the Australian outback lives the land snake with the most potent venom on Earth, as measured on lab mice.",
  "And it has plenty of company.",
  "Of Australia's roughly 220 kinds of snakes, about 145 are venomous, a biologist told Live Science.",
  "Worldwide, only about 15 percent of snakes are.",
  "Now look at the country's official death records.",
  "From 2016 to 2025, every venomous animal in Australia combined killed 85 people.",
  "Spiders killed none.",
  "That's fewer than Australia's roads killed in an average month of 2025.",
  "Measured against the population, that's about a one-in-three-million chance each year.",
  "So why are so many of Australia's snakes venomous, and why do so few people die?",
  "You're at Alpha Point, and this is where the story of Australia's venom begins.",
];
const gA = caso("gancho-a-so", `# Australia's Deadliest Snake Isn't Its Most Venomous One\n\n<!-- gancho A da pauta §8 -->\n\n${GANCHO_A.join(" ")}\n`,
  { exit: 1, problema: ["palavras:", 'o "But" do gancho', "[15-por-cento]", "[titulo-3-mata]", "[inscricao-ausente]"], so: true,
    semProblema: ["[titulo-3-veneno]", "[titulo-2-", "[titulo-1]", "[ressalva-camundongo]", "a primeira frase"],
    alerta: ["[live-science]", "[pergunta-dupla]", "[titulo-1-palavra]"],
    nota: 'o gancho A sozinho: reprova pela faixa (sem corpo), pelo "But" (não tem), pelo "15 percent" (que a Sala tirou), pelo título 3 (sem a frase do §8) e pela inscrição ausente; paga o T3 no veneno, o T2 e o T1' });
if (gA.laudo) {
  conferir(gA.laudo.gancho.palavras_ate_assinatura === 131 && gA.laudo.gancho.but_na_palavra === null,
    `o gancho A tem ${gA.laudo.gancho.palavras_ate_assinatura} palavras até a assinatura no texto do narrador (${gA.laudo.gancho.segundos_estimados} s a 179; a pauta §8 conta 131), e nenhum "But"`);
  linhas.push(`  - os números do gancho A pela conta do portão: ${gA.laudo.numeros_falados.ate_assinatura} (a pauta §8 conta 8, com o 2016 e o 2025 da faixa à parte; o portão, como o do vídeo 7, conta "2016 to 2025" uma vez)`);
  linhas.push(`  - os alertas do gancho A, para quem escreve: ${gA.laudo.alertas.map((a) => a.replace(/ \(.*$/, "").slice(0, 80)).join(" · ")}`);
}
// o gancho A consertado (uma proposta da prova, não do roteiro): a frase do título 3 do §8 na 2ª, o "But", a contagem da Sala com o dono
// (o Reptile Database), a fração do mundo com "elapids and vipers", e uma pergunta só, com "dangerous"
const GANCHO_A2 = [
  GANCHO_A[0],
  "And it isn't even the snake that kills the most Australians.",
  "But it has plenty of company.",
  "Of Australia's 229 kinds of snakes, 150 are elapids, front-fanged venomous snakes, by the count of the Reptile Database.",
  "Worldwide, elapids and vipers make up only about one in five.",
  ...GANCHO_A.slice(4, 9),
  "So why do so few people die from such dangerous animals?",
  GANCHO_A[10],
];
const A_GA = corteEm(45, GANCHO_A2), aGA = CORPO.slice(0, A_GA), bGA = CORPO.slice(A_GA);
const gA2 = caso("gancho-a-consertado-com-corpo", { gancho: GANCHO_A2, a: aGA, b: bGA },
  { exit: 0, semAlerta: ["[inscricao-", "[pergunta-dupla]", "[live-science]", "[contas-iguais]", "título ["], alerta: ["a primeira frase não tem número"],
    nota: "o gancho A consertado, com um corpo e a inscrição numa fronteira entre atos, a ~45 %: passa; ficam a 1ª frase sem número e o \"Now\" do molde" });
if (gA2.laudo) linhas.push(`  - o gancho A consertado: ${gA2.laudo.gancho.palavras_ate_assinatura} palavras (${gA2.laudo.gancho.segundos_estimados} s), o "But" na palavra ${gA2.laudo.gancho.but_na_palavra}, ${gA2.laudo.numeros_falados.ate_assinatura} números; a inscrição no parágrafo ${gA2.laudo.inscricao?.paragrafo}, ${gA2.laudo.inscricao?.inicio} de ${gA2.laudo.inscricao?.duracao_video} (${gA2.laudo.inscricao?.percentual} %); os alertas: ${gA2.laudo.alertas.map((a) => a.replace(/ \(.*$/, "").slice(0, 60)).join(" · ")}`);
const GANCHO_B = [
  "Australia's funnel-web spiders killed at least 13 people before 1981.",
  "That year, an antivenom came into use.",
  "Since then, doctors haven't confirmed a single death.",
  "In the country's official death records, from 2016 to 2025, spiders killed no one at all.",
  "Every venomous animal in Australia together killed 85 people.",
  "That's fewer than Australia's roads killed in an average month of 2025.",
  "And yet, of Australia's roughly 220 kinds of snakes, about 145 are venomous, a biologist told Live Science.",
  "Worldwide, only about 15 percent of snakes are.",
  "So why are so many of Australia's snakes venomous, and why do so few people die?",
  "You're at Alpha Point, and this is where the story of Australia's venom begins.",
];
const gB = caso("gancho-b-so", `# Australia's Deadliest Snake Isn't Its Most Venomous One\n\n<!-- gancho B da pauta §8 -->\n\n${GANCHO_B.join(" ")}\n`,
  { exit: 1, problema: ["palavras:", 'o "But" do gancho', "[15-por-cento]", "[titulo-3-veneno]", "[titulo-3-mata]", 'a primeira frase não diz "venom"', "[inscricao-ausente]"], so: true,
    semProblema: ["[titulo-2-", "[titulo-1]"],
    nota: "o gancho B sozinho: não paga o título 3 (nem o veneno, nem a cobra que mata), a 1ª frase não diz \"venom\", e tem o \"15 percent\"; paga o T2 e o T1" });
if (gB.laudo) linhas.push(`  - o gancho B: ${gB.laudo.gancho.palavras_ate_assinatura} palavras até a assinatura (a pauta §8 conta 118) e ${gB.laudo.numeros_falados.ate_assinatura} números (a pauta conta 9, com o 2016 e o 2025 da faixa à parte)`);

// ---- o fecho (do molde) -----------------------------------------------------------------------------------------------
secao("O fecho (alerta; fica do molde)");
const NB = B.length;
caso("fecho-repete-pergunta", { trocasB: { [NB - 1]: "The clerk wondered why so few people die from such animals." } },
  { exit: 0, alerta: ["o fecho repete a pergunta do gancho"], nota: '"why so few people die" (5 palavras da pergunta) na última frase' });
caso("fecho-4-palavras", { trocasB: { [NB - 1]: "The clerk saw so few people die." } },
  { exit: 0, semAlerta: ["o fecho repete a pergunta do gancho"], nota: '"so few people die": 4 palavras da pergunta, sem alerta' });
caso("fecho-pergunta-fora-das-8", { trocasB: { [NB - 9]: "The clerk wondered why so few people die from such animals." } },
  { exit: 0, semAlerta: ["o fecho repete a pergunta do gancho"], nota: "a mesma frase na 9ª antes do fim: sem alerta" });
caso("fecho-em-lista", { trocasB: { [NB - 3]: "First, the rain fell over the plains.", [NB - 2]: "Then the creeks rose, slowly.", [NB - 1]: "Finally, the channels filled in." } },
  { exit: 0, alerta: ["o fecho em lista: 3 das 8"], nota: '"First…", "Then…", "Finally…" nas 3 últimas' });
caso("fecho-2-da-lista", { trocasB: { [NB - 3]: "First, the rain fell over the plains.", [NB - 2]: "Then the creeks rose, slowly." } },
  { exit: 0, semAlerta: ["o fecho em lista"], nota: "duas aberturas de lista: sem alerta" });

// ---- o autoplágio com o Columbia ---------------------------------------------------------------------------------------
secao("O autoplágio compara também com o roteiro do vídeo 7");
caso("autoplagio-columbia", { trocasA: { [I]: "Talks to update the treaty between them have been paused since March 2025." } },
  { exit: 0, alerta: [`autoplágio (6+ palavras iguais a ${ROTEIRO_C})`], nota: "uma frase do roteiro do Columbia" });

// ---- as frases seguras da pauta, juntas ----------------------------------------------------------------------------------
secao("As frases seguras da pauta, juntas num texto");
// As frases seguras da pauta (§4, os blocos "A frase segura…" e as pontes; §7, as pontes e as perguntas dos atos; §8, os ganchos A e B e a
// frase do título 3), com as do fatos-c (§1 a §5), as da medida do Censo (§7) e o resumo do NCIS (o registro), juntas num texto. SAÍRAM do texto de conferência, e por quê:
//   - "Worldwide, only about 15 percent of snakes are." (gancho A e gancho B): a Sala tirou depois da pauta (a contagem do Reptile Database;
//     o pedido da Sala): agora reprova [15-por-cento], e está nos casos acima;
//   - "One lives out on these empty floodplains and is usually quite shy." (§4.4): vivem ~1.000 pessoas ali (a medida do Censo); entram a forma
//     que a pauta dá sem a medida e a que a medida dá ("…these floodplains, where about a thousand people live, …"), e a com "empty" reprova
//     [taipan-vazio] nos casos acima;
//   - o modelo da frase do Censo (§4.4, com [X], [Y] e [Z]): entra a frase pronta da medida (medida-censo.md §7);
//   - do fatos-c (o acréscimo da Sala): "A national study found 835 cases in ten years." (§1.4): os 835 envenenados ficam fora da fala pela
//     pauta §7, e o acréscimo não os liberou: reprova [espera-soro]; a frase entra sem o número. E "…the European wasp, which turned up in
//     Tasmania in 1959" (§2.3): o fatos-c a dá só se a Sala confirmar a data na fonte oficial; entra a forma sem o ano;
//   - a inscrição do §7 ("If you're enjoying the story so far, subscribe to Alpha Point. Now, the other snake."): tem o seu caso na
//     seção da inscrição (no meio do corpo ela seria a segunda inscrição).
const SEGURAS = [
  // §8, o gancho A sem o "15 percent", com a frase do título 3
  "Out on the floodplains of the Australian outback lives the land snake with the most potent venom on Earth, as measured on lab mice.",
  "And it isn't even the snake that kills the most Australians.",
  "And it has plenty of company.",
  "Of Australia's roughly 220 kinds of snakes, about 145 are venomous, a biologist told Live Science.",
  "Now look at the country's official death records.",
  "From 2016 to 2025, every venomous animal in Australia combined killed 85 people.",
  "Spiders killed none.",
  "That's fewer than Australia's roads killed in an average month of 2025.",
  "Measured against the population, that's about a one-in-three-million chance each year.",
  "So why are so many of Australia's snakes venomous, and why do so few people die?",
  "So does Australia really have so many dangerous animals?", "And why do so few people die from them?",
  // §8, o gancho B sem o "15 percent"
  "Australia's funnel-web spiders killed at least 13 people before 1981.",
  "That year, an antivenom came into use.",
  "Since then, doctors haven't confirmed a single death.",
  "In the country's official death records, from 2016 to 2025, spiders killed no one at all.",
  "Every venomous animal in Australia together killed 85 people.",
  "And yet, of Australia's roughly 220 kinds of snakes, about 145 are venomous, a biologist told Live Science.",
  // §7 e §4.1, o ato 1
  "If you've heard one thing about Australia, it's probably this.",
  "So how dangerous is Australia, really?",
  "Every year, Australia's statistics bureau publishes the cause of every death registered in the country.",
  "Over that decade, venomous snakes killed 35 people.",
  "Bees and wasps killed 42, more than the snakes.",
  "The other eight?",
  "Two died from marine animals — the official category lists jellyfish, coral and sea anemones.",
  "Six died from what the death codes call 'other venomous arthropods' — which means things like ants and caterpillars.",
  "The records don't say which animal it was.",
  "Spiders killed no one, not in a single year.",
  "And it isn't that spiders don't bite.",
  "Over a little more than a decade, spider bites put Australians in the hospital about 12,000 times.",
  "Spiders killed no one in those years either.",
  "So is Australia unusually full of venomous animals?",
  "Kevin Arbuckle, an evolutionary biologist at Swansea University, says the country's image as the home of highly venomous animals is, \"for the most part,\" overstated.",
  "Its venomous animals, he says, are \"not unusual at all for a largely tropical area.\"",
  "Box jellyfish, he points out, live in warm seas well beyond Australia.",
  "The exception, he says, is the snakes.",
  "To see how Australia ended up with so many venomous snakes, start with where the continent has been.",
  // §4.2, o ato 2
  "So where did all those venomous snakes come from?",
  "Some 80 to 85 million years ago, Australia began to pull away from Antarctica.",
  "It was the last big break in an old supercontinent called Gondwana.",
  "Around 45 million years ago, Australia started moving north, and over the next ten million years or so, deep ocean opened up behind it.",
  "For tens of millions of years, it traveled alone, an island continent.",
  "But before Australia ever reached Asia, something had already made the crossing.",
  "A family of venomous snakes arrived from Asia: the elapids, front-fanged snakes, the family that cobras belong to.",
  "Genetic dating puts their spread across the world's continents at roughly 25 to 30 million years ago.",
  "They seem to have been the first venomous snakes to reach Australia.",
  "There were no vipers here, and none of the other modern snake families had arrived.",
  "Today, elapids fill most of the roles a snake can play on land, and some live in the sea.",
  "Australia has well over a hundred kinds of them.",
  "Then, some 20 million years ago, Australia's leading edge began running into Southeast Asia, and a chain of islands formed between the two.",
  "Across those islands, very few land mammals ever made it.",
  "The only ones that crossed and took hold were rodents and bats.",
  "So Australia ended up with kangaroos and koalas, and with no native cats and no hoofed animals at all.",
  "It keeps moving north almost three inches a year.",
  // §4.3, o ato 3
  "So why does the snake with the most potent venom almost never hurt anyone?",
  "Then the continent dried out.",
  "Its interior began turning arid about 15 million years ago, and the full deserts of the center appeared only in the last few million years.",
  "One of those elapids lives here, on the cracked clay of the floodplains of the Diamantina and Cooper Creek.",
  "It hunts rats, and it shelters in their burrows and in cracks in the ground.",
  "It bites once, pulls back, and waits for the rat to die.",
  "The scientists who study these venoms think that's probably an adaptation to its prey: a rat can bite back.",
  "The rats it hunts descend from rodents that crossed from Asia, too.",
  "In 1979, researchers tested the venoms of dangerous snakes on lab mice.",
  "They measured the dose that kills half the mice in a test, what scientists call the LD50.",
  "The inland taipan's venom came out on top.",
  "Researchers now criticize mouse tests like that one, partly because they don't reflect what happens when a snake bites a person.",
  "And this snake is, in the words of a South Australian government fact sheet, \"usually quite shy.\"",
  "By 2017, doctors had written up only about a dozen cases of someone envenomed by one.",
  "Only three of those bites came from a snake in the wild.",
  "So the snake with the most potent venom on land has almost no record of hurting people.",
  "The snake that actually kills Australians lives somewhere else.",
  // §4.4, o ato 4
  "So which snake does kill people, and why that one?",
  "The test that crowned the inland taipan put another Australian snake near the top, too: the brown snake.",
  "Brown snakes and taipans share a toxin no other snakes have.",
  "One lives out on these floodplains and is usually quite shy.",
  "The other lives where people farm and build.",
  "The eastern brown snake, according to the Queensland Museum, is found over most of Queensland, New South Wales and Victoria.",
  "At the 2021 census, those three states had almost 20 million people.",
  "Per square mile, that's more than a thousand times as many people as the Channel Country.",
  "That's roughly two thousand times as many people per square mile.",
  "The Channel Country, where the inland taipan lives, covers about 117,000 square miles.",
  "At the 2021 census, about a thousand people lived there.",
  "That's about one person for every hundred square miles.",
  "One lives out on these floodplains, where about a thousand people live, and is usually quite shy.",
  "The Channel Country is about four percent of Australia's land.",
  "At the 2021 census, fewer than one in ten thousand Australians lived there.",
  "You can guess which one kills.",
  "In that national study, brown snakes were behind about four in ten of the bites where the snake was identified.",
  "In one national study of snakebites, over a decade, doctors counted 23 deaths.",
  "Seventeen of them were from brown snakes.",
  "None was put down to the inland taipan.",
  "Ten of those people went into cardiac arrest outside a hospital.",
  "Australia began making antivenom in 1930.",
  "On land, the snake that matters is the one that lives near people.",
  "Up in the tropical north, the danger is somewhere else.",
  "On land, the snake that kills is the one people meet.",
  // §4.5, o ato 5
  "And the sea?",
  "Up in the tropical north, the danger is in the water, and only for part of the year.",
  "The box jellyfish has been blamed for around 70 deaths in tropical Australian waters.",
  "It starts life as tiny polyps in tidal creeks.",
  "It comes out to sea at the start of each \"stinger season,\" which runs from October to June.",
  "Australia went on to make the world's first antivenom for a jellyfish, in 1970.",
  "But one of the most famous animals on this list doesn't live in the outback or in the sea.",
  "It lives around Sydney.",
  "Greater Sydney alone had about 5.2 million people at the 2021 census, on about 4,800 square miles.",
  "So how did a spider this deadly stop killing people?",
  "Funnel-web spiders are old.",
  "Their family goes back 150 to 200 million years, long before Australia broke away from Antarctica, and long before there were any primates.",
  "So why is their venom so deadly to us?",
  "A team that studied the toxin found it started out as a weapon for catching insects.",
  "The males, the team proposes, turned it into a defense against animals like bandicoots, birds and lizards.",
  "Its lethal effect on humans, in their words, is \"an unfortunate evolutionary coincidence.\"",
  "Dogs and cats, they note, are insensitive to it.",
  "The bites mostly come from males that leave their burrows to look for females, and most happen between November and March.",
  "Severe cases have only been recorded in New South Wales and southern Queensland.",
  "Before 1981, funnel-web spiders killed at least 13 people.",
  "A review of the recorded cases found no confirmed death after it.",
  "Where an expert had identified the spider, the antivenom worked completely in almost every case.",
  "The redback is a different story.",
  "Redback bites killed at least 14 people before an antivenom arrived, in the 1950s, and there's been no confirmed death since.",
  "But a later trial found the antivenom didn't significantly ease pain or other symptoms.",
  "So it isn't clear that the antivenom is what keeps redback bites from killing.",
  "The redback has its own antivenom, made in 1956 by a Melbourne scientist who dissected the venom glands of hundreds of spiders to do it.",
  "There hasn't been a confirmed death from a redback bite since.",
  "Though doctors still argue about how much of that is the antivenom.",
  "So the most potent venom on land rarely touches anyone, and the spiders have stopped killing.",
  "Then what does kill Australians?",
  // §4.6, o ato 6
  "So what's the most common killer?",
  "The animals that kill most often in Australia's venom records aren't snakes at all.",
  "They're bees and wasps.",
  "The honeybee is the real killer here.",
  "It came over from Europe in 1822, and in one study of Australian deaths from 1997 to 2013, it was behind roughly three in four of the fatal insect-sting reactions.",
  "Not because its venom is strong — because some people are severely allergic.",
  "The honeybee isn't Australian.",
  "It came from England on a ship called the Isabella, in 1822.",
  "Then there's the European wasp, which arrived in the second half of the twentieth century.",
  "The ants and ticks in that category can kill too — not with venom, but with allergy.",
  "Researchers have documented deaths from the jack jumper ant, mostly in Tasmania, and from tick bites.",
  "Those deaths usually come from anaphylaxis, a severe allergic reaction.",
  "One national study found that fewer than half of the people who died that way reached medical care before they died.",
  "And the animals without venom?",
  "And animals with no venom at all killed more Australians than the venomous ones did: 154 over the same decade.",
  "Dogs, cattle and horses, animals in the sea, sharks among them, and saltwater crocodiles.",
  "The crocodiles killed 13.",
  "They live from Sri Lanka to northern Australia, and after decades of commercial hunting, the Northern Territory protected them in 1971.",
  "They came back.",
  "On farms, a separate study found, most fatal incidents with animals involved horses or cattle.",
  "And the land itself?",
  "The land and the water kill far more than any animal.",
  "Over that same decade, extreme natural heat killed 202 Australians, and drowning in rivers, lakes and the sea killed more than a thousand.",
  "So where does the reputation come from?",
  "Australia's National Coronial Information System puts it plainly: deaths from these animals remain relatively rare, particularly in comparison to deaths associated with other species.",
  "Remember Kevin Arbuckle, the biologist who called Australia's image overstated?",
  "He has wondered whether part of that image comes from the country's \"scientific capital\" and its \"excellent infrastructure\" for public health and medical care.",
  "It's a thought, not a finding.",
  "But that same medicine is part of why so few people die.",
  "If a snake bites you in Australia, the official advice is simple: call an ambulance, stay still, and wrap the whole limb firmly, like a sprain.",
  "The point is to slow the venom on its way to your blood.",
  "It buys time.",
  "It doesn't cure you.",
  "The bandage trick comes from experiments in 1979 by an Australian researcher, Sutherland, and his colleagues.",
  "They injected monkeys with tiger snake venom and found that a firm bandage and a splint kept it from spreading — for a while.",
  "And when someone does reach a hospital, there's antivenom.",
  "Australia has been making it since 1930 — the first one was for the tiger snake — and the health services say there's one for every venomous native snake.",
  "So why do so few people die?",
  "Part of it is the medicine: antivenom since 1930, an ambulance, a bandage that slows the venom down.",
  "But the doctors who study it are careful.",
  "They say the proof for the bandage in real life is thin, and the number of deaths hasn't changed in twenty years.",
  "And part of it is simpler: far fewer people actually get envenomed than anyone used to think.",
  "Snakebite kills somewhere between 81,000 and 138,000 people a year worldwide, the World Health Organization estimates, and India alone loses about 58,000 of them.",
  "Do the math per person and it's roughly one in 21,000 Indians every year.",
  "In Australia, it's about one in seven million.",
  "The World Health Organization estimates that snakes kill between 81,000 and 138,000 people every year, and that India alone lost around 58,000 a year between 2000 and 2019.",
  "Australia counts about three or four.",
  "Per person, India's snakebite death rate is hundreds of times Australia's.",
  "And none of it runs by itself.",
  // §4.7, o fecho
  "On the Central Coast, north of Sydney, the Australian Reptile Park milks funnel-web spiders for their venom.",
  "It's the only supplier of funnel-web venom for antivenom in Australia.",
  "Only adult males are milked, because their venom, the park says, is significantly more potent.",
  "Adult males are also the ones that wander out and do most of the biting.",
  "It takes about 150 milkings to make a single vial.",
  "So the park always needs more spiders.",
  "It asks people around Sydney, the Central Coast and Newcastle to catch the funnel-webs they find, safely, and bring them in.",
  "During the COVID lockdowns, almost no spiders were donated.",
  "In January 2026, the park said it was down to about half its usual supply.",
  "Since the antivenom program began, more than 40 years ago, the park says, no one has died from a funnel-web bite.",
  "The spider that once killed people here is now caught by the people it lives next to.",
  "And its venom goes into the cure.",
];
// o texto: o gancho da base, as 70 primeiras seguras e um pouco de corpo antes da inscrição, as outras depois, com corpo até o meio da
// faixa; o corte do corpo é o que leva a inscrição mais perto de 45 %
const SA = SEGURAS.slice(0, 70), SB = SEGURAS.slice(70);
let segX = 0, segY = 0, segD = Infinity;
for (let x = 0; x <= 60; x++) for (let y = 0; y <= 120; y++) {
  const a = [...SA, ...CORPO.slice(0, x)], b = [...SB, ...CORPO.slice(x, x + y)];
  const w = contar([...GANCHO, ...a, INSC, VOLTA_F, ...b].join(" "));
  if (w < 2550 || w > 2750) continue;
  const d = Math.abs(estima(GANCHO, a, b).pct - 45) + Math.abs(w - 2650) / 1000;
  if (d < segD) { segD = d; segX = x; segY = y; }
}
const seg = caso("frases-seguras", { a: [...SA, ...CORPO.slice(0, segX)], b: [...SB, ...CORPO.slice(segX, segX + segY)] },
  { exit: 0, semProblema: ["não se diz [", "título [", "a primeira frase"],
    nota: `${SEGURAS.length} frases da pauta (§4, §7 e §8), do fatos-c, da medida do Censo e do resumo do NCIS, sem as que saíram, com o gancho da base e ${segX + segY} frases de corpo: o texto inteiro passa` });
if (seg.laudo) linhas.push(`  - ${seg.laudo.palavras} palavras, a inscrição a ${seg.laudo.inscricao?.percentual} %; os problemas: ${seg.laudo.problemas.map((p) => p.slice(0, 60)).join(" · ") || "nenhum"}; os alertas da Austrália: ${[...new Set(seg.laudo.alertas.filter((a) => /^conferir \[/.test(a)).map((a) => a.match(/\[[^\]]+\]/)[0]))].join(", ")}`);

// ---- o portão novo no roteiro do vídeo 7, e o sha nos dois portões ----------------------------------------------------
secao("O roteiro do vídeo 7 nos dois portões, e o sha");
const novo = rodar([ROTEIRO_C]), col = rodar([ROTEIRO_C], GATE_C);
if (novo.laudo && col.laudo) {
  const esperados = ["[titulo-3-veneno]", "[titulo-3-mata]", "[titulo-2-registro]", "[titulo-2-estrada]", "[titulo-1]", 'a primeira frase não diz "venom"', 'a primeira frase não diz "Australia"'];
  const P = novo.laudo.problemas;
  conferir(novo.exit === 1 && esperados.every((s) => P.some((p) => p.includes(s))) && P.length === esperados.length,
    `o portão novo reprova o roteiro do vídeo 7 só pelos títulos (5) e pela primeira frase (2), sem nenhum "não se diz" da Austrália; as ${col.laudo.palavras} palavras dele ficam dentro da faixa nova (2.500 a 2.800), e ela não reprova: exit ${novo.exit}, ${P.length} problema(s): ${P.map((p) => p.slice(0, 40)).join(" | ")}`);
  const daAU = novo.laudo.alertas.filter((a) => /^conferir \[/.test(a));
  conferir(daAU.length === 1 && daAU[0].startsWith("conferir [numeros-falados] (51 números"),
    `e só um alerta da Austrália nele, o [numeros-falados]: ${novo.laudo.numeros_falados.total} números pela conta nova (o portão do vídeo 7 conta ${col.laudo.numeros_falados.total}; a mais, o "Three of them" do ajuste de "of them") (${daAU.map((a) => a.slice(0, 60)).join(" | ")})`);
  conferir(["[titulo-1-palavra]", "a primeira frase não tem número"].every((s) => novo.laudo.alertas.some((a) => a.includes(s))),
    'e alerta o gancho sem "dangerous" nem "deadly" e a 1ª frase sem número (a do Columbia não tem número)');
  conferir(col.exit === 0, `o portão do vídeo 7, no mesmo texto: exit ${col.exit} (${col.laudo.veredito})`);
  conferir(isDeepStrictEqual(novo.laudo.taxas, col.laudo.taxas) && novo.laudo.taxas_palavras_contadas === col.laudo.taxas_palavras_contadas,
    `as taxas saem iguais nos dois portões (${Object.entries(novo.laudo.taxas).map(([k, t]) => `${k} ${t.valor}`).join(", ")}; ${novo.laudo.taxas_palavras_contadas} palavras contadas)`);
  conferir(novo.laudo.sha256 === col.laudo.sha256, `o sha do roteiro do vídeo 7 é o mesmo nos dois portões (${novo.laudo.sha256.slice(0, 12)})`);
  conferir(["palavras", "paragrafos", "frases", "media_palavras_por_frase", "maior_frase"].every((k) => novo.laudo[k] === col.laudo[k])
    && isDeepStrictEqual(novo.laudo.gancho, col.laudo.gancho),
    `palavras, parágrafos, frases, média, maior frase e gancho iguais (os dois contam a 179: ${novo.laudo.gancho.segundos_estimados} s)`);
  conferir(isDeepStrictEqual(novo.laudo.autoplagio, col.laudo.autoplagio),
    `o autoplágio é o mesmo nos dois (o novo compara também com o próprio Columbia, que sai da conta por ser o arquivo medido): ${novo.laudo.autoplagio.length} trecho(s)`);
  conferir(isDeepStrictEqual(novo.laudo.inscricao, col.laudo.inscricao), `a inscrição sai igual nos dois (${novo.laudo.inscricao?.inicio}, ${novo.laudo.inscricao?.percentual} %)`);
  const fecho = (l) => l.alertas.filter((a) => a.startsWith("o fecho"));
  conferir(isDeepStrictEqual(fecho(novo.laudo), fecho(col.laudo)), `os alertas do fecho são os mesmos nos dois (${fecho(novo.laudo).length})`);
} else conferir(false, `os portões não deram laudo no roteiro do vídeo 7 (${novo.exit}, ${col.exit})`);
// o sha de um texto com BOM, CRLF, título, citação e comentário de várias linhas, nos dois portões
const ARQ_SHA = join(CASOS, "sha-bom-crlf", "roteiro-narrador.md");
gravar(ARQ_SHA, "﻿" + montar().replace("<!-- gancho -->", "<!-- gancho\nem duas linhas -->").replace(/\n/g, "\r\n"));
const s1 = rodar([ARQ_SHA]), s2 = rodar([ARQ_SHA], GATE_C), sBase = rodar([join(CASOS, "001-base", "roteiro-narrador.md")]);
conferir(s1.laudo && s2.laudo && s1.laudo.sha256 === s2.laudo.sha256 && s1.laudo.sha256 === sBase.laudo?.sha256,
  `o sha de um texto com BOM, CRLF e comentário de duas linhas é o mesmo nos dois portões e o da base (${s1.laudo?.sha256.slice(0, 12)})`);
conferir(s1.exit === 0 && s1.laudo?.inscricao?.fronteira_de_ato === true, `e o comentário de duas linhas não atrapalha a leitura das marcas (exit ${s1.exit}, a inscrição na fronteira entre atos)`);

// ---- o portao-fatos cruza o sha com o portão novo ---------------------------------------------------------------------
secao("O ferramentas/portao-fatos.mjs com o portão novo");
const RAIZ = join(PASTA, "raiz"), BASE_R = join(RAIZ, "roteiros", "australia-animais");
gravar(join(BASE_R, "roteiro-narrador.md"), montar());
mkdirSync(join(BASE_R, "_ferramentas"), { recursive: true });
copyFileSync(GATE, join(BASE_R, "_ferramentas", "gate.mjs"));
gravar(join(BASE_R, "qc-roteiro", "fatos.laudo.md"), `# Laudo de teste\n\nRevisão julgada: \`${sBase.laudo?.sha256.slice(0, 12)}\`\n\nCOBERTURA: 0 de 0\n\nVEREDITO: RESSALVA\n`);
gravar(join(BASE_R, "qc-roteiro", "fatos-tabela.json"), "[]\n");
const pf = spawnSync(process.execPath, ["ferramentas/portao-fatos.mjs", "australia-animais", "--json", `--raiz=${resolve(RAIZ)}`], { encoding: "utf8" });
let pfs = null; try { pfs = JSON.parse(pf.stdout); } catch {}
conferir(pf.status !== 2 && pfs?.gate?.igual === true && pfs.sha256 === sBase.laudo?.sha256,
  `o portao-fatos roda a cópia do portão novo (numa raiz de teste) e o sha cruza: exit ${pf.status} (o piso reprova a tabela vazia, de propósito), gate.igual = ${pfs?.gate?.igual}`);

// ---- o resto do molde: o arquivo padrão, as opções --------------------------------------------------------------------
secao("O arquivo padrão e as opções do molde");
const PADRAO = "roteiros/australia-animais/roteiro-narrador.md";
const semArg = rodar([]);
if (existsSync(PADRAO)) conferir(semArg.laudo?.arquivo === PADRAO, `sem argumento, o portão mede ${PADRAO} (exit ${semArg.exit})`);
else conferir(semArg.exit === 2 && semArg.stderr.includes(PADRAO), `sem argumento, o portão procura ${PADRAO}, que ainda não existe: exit ${semArg.exit}, "${semArg.stderr.trim()}"`);
const opc = rodar(["--xyz", join(CASOS, "001-base", "roteiro-narrador.md")]);
conferir(opc.exit === 2 && /opção desconhecida: --xyz/.test(opc.stderr), `opção desconhecida: exit ${opc.exit}`);
const onde = rodar(["--onde", join(CASOS, "001-base", "roteiro-narrador.md")]);
conferir(onde.exit === 0 && Array.isArray(onde.laudo?.taxas?.abre_so?.onde) && onde.laudo.taxas.abre_so.onde.length === 1 && onde.laudo.numeros_falados?.onde?.length === 8,
  `--onde: cada taxa traz as frases (abre_so: ${JSON.stringify(onde.laudo?.taxas?.abre_so?.onde)}), e a conta dos números traz os números (${onde.laudo?.numeros_falados?.onde?.map((o) => o.numero).join(", ")})`);
// o --derivados: a pasta do roteiro numa raiz de teste (<raiz>/roteiros/australia-animais/), com a cópia para a voz em <raiz>/out/australia-animais/
const sha12b = sBase.laudo?.sha256.slice(0, 12);
const derivadosEm = (raiz, velhos) => {
  const R = join(raiz, "roteiros", "australia-animais");
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
  gravar(join(raiz, "out", "australia-animais", "roteiro.md"), `---\nprojeto: australia-animais\nrevisao_do_roteiro: ${v("out")}\n---\n\ntexto\n`);
  return rodar(["--derivados", join(R, "roteiro-narrador.md")]);
};
const der = derivadosEm(join(CASOS, "derivados-velhos"), ["editor", "pronuncia", "out"]);
const velhos = (der.laudo?.derivados_velhos || []).map((d) => d.arquivo.split("/").slice(-2).join("/")).sort();
conferir(der.exit === 1 && der.laudo?.derivados?.length === 7 && isDeepStrictEqual(velhos, ["australia-animais/pronuncia.md", "australia-animais/roteiro-editor.md", "australia-animais/roteiro.md"]),
  `--derivados: 7 conferidos (o laudo, o editor, a pronúncia, a tradução pt-BR, a cópia para a voz, as trocas e out/australia-animais/roteiro.md; os -r1/-r2/-r2b/-antigo fora); o editor e a cópia em out/ com o sha velho e a pronúncia sem o carimbo reprovam (exit ${der.exit}; velhos: ${velhos.join(", ")})`);
const derOk = derivadosEm(join(CASOS, "derivados-em-dia"), []);
conferir(derOk.exit === 0 && derOk.laudo?.derivados?.length === 7 && derOk.laudo.derivados.every((d) => d.ok),
  `--derivados: os 7 com o sha de agora passam (exit ${derOk.exit})`);
const derTr = derivadosEm(join(CASOS, "derivados-trocas-e-ptbr"), ["trocas", "ptbr"]);
conferir(derTr.exit === 1 && derTr.laudo?.derivados_velhos?.length === 2,
  `--derivados: as trocas e a tradução pt-BR com o sha velho reprovam (exit ${derTr.exit}; ${derTr.laudo?.derivados_velhos?.map((d) => d.arquivo.split("/").slice(-2).join("/")).join(", ")})`);

// ---- a saída ----------------------------------------------------------------------------------------------------------
const cab = `# Prova do portão do vídeo 8, os animais perigosos da Austrália (${GATE})\n\n${total - falhas} de ${total} checagens como o esperado${falhas ? ` · ${falhas} FALHARAM` : ""}.\n` +
  `A base: ${base.laudo?.palavras} palavras, ${CORPO.length} frases de corpo (${A.length} antes da inscrição); os casos em ${CASOS}/.`;
const saida = `${cab}\n${linhas.join("\n")}\n`;
writeFileSync(join(PASTA, "prova-saida.md"), saida, "utf8");
console.log(saida);
process.exit(falhas ? 1 : 0);
