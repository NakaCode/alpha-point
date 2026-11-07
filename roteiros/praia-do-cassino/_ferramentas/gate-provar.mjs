// gate-provar.mjs — a prova do portão do vídeo 6, a Praia do Cassino (roteiros/praia-do-cassino/_ferramentas/gate.mjs).
//   node roteiros/praia-do-cassino/_ferramentas/gate-provar.mjs      (cwd = raiz do canal; exit 0 = tudo como o esperado, 1 = alguma
//                                                                     checagem falhou, 2 = não rodou)
// Deriva da prova do vídeo 5 (roteiros/big-sur/_ferramentas/gate-provar.mjs), em 07/11/2026, pelo pedido da Sala de controle.
// Grava roteiros sintéticos em out/_tmp/gate-praia-do-cassino/casos/ (fora do git), roda o portão em cada um e confere a saída:
//   - a base passa (o gancho com a 1ª frase certa, o título pago, o "But", a pergunta e a assinatura; o corpo até o meio da faixa),
//     sem nenhum alerta;
//   - a faixa (2.300 a 2.500), a média (18) e a maior frase (34): o piso e o teto exatos passam, uma palavra a menos ou a mais reprova;
//   - o título, a primeira frase e o arco: um caso que reprova para cada regra, um que alerta para cada alerta, e o que passa ao lado;
//   - o "não se diz" do Cassino: um caso que reprova para cada id (e mais de um onde o padrão tem formas), e o que passa ao lado (a
//     forma que a pauta dá, quando ela dá uma);
//   - os alertas do Cassino, cada um com o seu caso, e o que fica ao lado sem alerta; as palavras de ALERTA do molde;
//   - as regras de Big Sur saíram: o que o portão do vídeo 5 reprovava passa aqui;
//   - o gancho A da pauta §8 como está (reprova só pelo "But") e com o "But";
//   - o fecho (a pergunta repetida e a lista), que fica do molde;
//   - o autoplágio contra o roteiro do vídeo 5 (roteiros/big-sur/roteiro-narrador.md);
//   - o portão novo no roteiro do vídeo 5: reprova pela faixa, pelo título e pela primeira frase, e só nisso; as taxas, o sha, as
//     contagens, o gancho (fora os segundos, que mudam com o WPM), o autoplágio e os alertas do fecho saem iguais aos do portão do vídeo
//     5 no mesmo texto; e o sha de um texto (com BOM, CRLF, título, citação e comentário) igual nos dois portões;
//   - o ferramentas/portao-fatos.mjs cruza o sha com o portão novo (numa raiz de teste) sem divergir;
//   - o arquivo padrão, a opção desconhecida, o --onde e o --derivados.
// Sem rede, sem crédito. Grava só em out/_tmp/gate-praia-do-cassino/. A saída também vai a out/_tmp/gate-praia-do-cassino/prova-saida.md.
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync, rmSync, existsSync, copyFileSync } from "node:fs";
import { posix, resolve } from "node:path";
const { join, dirname } = posix;   // os caminhos com "/", também no Windows
import { isDeepStrictEqual } from "node:util";

const GATE = "roteiros/praia-do-cassino/_ferramentas/gate.mjs";
const GATE_BS = "roteiros/big-sur/_ferramentas/gate.mjs";
const ROTEIRO_BS = "roteiros/big-sur/roteiro-narrador.md";
const PASTA = "out/_tmp/gate-praia-do-cassino";
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

// ---- a base ---------------------------------------------------------------------------------------------------------
const GANCHO = [
  "This is Praia do Cassino, a beach in Brazil sold as the world's longest beach, between two stone walls 132 miles apart.",
  "The beach itself is less than five miles longer than a straight line between them.",
  "But how does a coast that long end up almost straight?",
  "The state's own tourism website says 158 miles.",
  "So why won't that number fit on this sand?",
  "You're at Alpha Point, and this is where the story of the beach between two walls begins.",
];
// a curva do meio (o arco de 11 mi), dita uma vez no corpo da base, para a base não alertar o [o-arco]
const ARCO = "Near the middle, the beach bows out to sea by about 11 miles.";
// o corpo: frases neutras, sem nenhuma palavra de alerta, nenhuma abrindo com "A "/"An "/"First"/"Then" (o fecho em lista) e
// sem nada da pergunta do gancho; geradas por sorteio com semente fixa, todas diferentes. POOL tem mais frases que o corpo da
// base, para os casos que passam do teto da faixa.
let semente = 11;
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
const CORPO = [ARCO];
for (const f of POOL) { if (contar([...GANCHO, ...CORPO].join(" ")) >= 2400) break; CORPO.push(f); }
const N = CORPO.length;
// uma frase de enchimento com exatamente n palavras (5 a 27), para acertar a faixa no número exato
const ENCHE = "The ranger walked slowly past the quiet barn and the old gate toward the fence by the creek road at dusk with his dog and a lamp".split(" ");
const enche = (n) => `${ENCHE.slice(0, n).join(" ")}.`;
// um corpo com o total exato de palavras faladas (com o gancho da base)
function corpoCom(alvo, gancho = GANCHO) {
  const c = [ARCO];
  let t = contar([...gancho, ARCO].join(" "));
  for (const f of POOL) { if (t + contar(f) > alvo - 5) break; c.push(f); t += contar(f); }
  if (alvo - t > 0) c.push(enche(alvo - t));
  return c;
}
// monta o roteiro: título, citação e comentário (que não são falados), o gancho num parágrafo, o corpo em parágrafos de 5.
// gancho: {índice: frase nova} ou a lista inteira; trocas: {índice do corpo: frase nova, ou lista de frases ([] tira a frase)};
// corpo: outro corpo inteiro
function montar({ gancho = {}, trocas = {}, corpo = CORPO } = {}) {
  const g = Array.isArray(gancho) ? gancho : GANCHO.map((f, i) => gancho[i] ?? f);
  const c = corpo.flatMap((f, i) => (i in trocas ? [].concat(trocas[i]) : [f]));
  const pars = [g.join(" ")];
  for (let i = 0; i < c.length; i += 5) pars.push(c.slice(i, i + 5).join(" "));
  return `# Why the World's Longest Beach Is Almost a Straight Line\n\n> Roteiro de teste, gerado por gate-provar.mjs.\n\n<!-- gancho -->\n\n${pars.join("\n\n")}\n`;
}
let nCaso = 0;
function caso(nome, opcoes, esperado) {
  const arq = join(CASOS, `${String(++nCaso).padStart(3, "0")}-${nome}`, "roteiro-narrador.md");
  gravar(arq, typeof opcoes === "string" ? opcoes : montar(opcoes));
  const r = rodar([arq]);
  if (!r.laudo) return conferir(false, `${nome}: o portão não deu laudo (exit ${r.exit}): ${r.stderr.slice(0, 200)}`);
  const { problemas, alertas } = r.laudo;
  const falta = [];
  if (esperado.exit != null && r.exit !== esperado.exit) falta.push(`exit ${r.exit}, esperado ${esperado.exit}`);
  for (const s of esperado.problema || []) if (!problemas.some((p) => p.includes(s))) falta.push(`sem o problema "${s}"`);
  for (const s of esperado.semProblema || []) if (problemas.some((p) => p.includes(s))) falta.push(`com o problema "${s}"`);
  if (esperado.so) for (const p of problemas) if (!esperado.problema.some((s) => p.includes(s))) falta.push(`problema a mais: "${p.slice(0, 120)}"`);
  for (const s of esperado.alerta || []) if (!alertas.some((a) => a.includes(s))) falta.push(`sem o alerta "${s}"`);
  for (const s of esperado.semAlerta || []) if (alertas.some((a) => a.includes(s))) falta.push(`com o alerta "${s}"`);
  const resumo = r.exit === 1 ? `reprova (${problemas.length})` : r.exit === 0 ? `passa (${alertas.length} alerta[s])` : `exit ${r.exit}`;
  conferir(!falta.length, `${nome}: ${resumo}${esperado.nota ? ` — ${esperado.nota}` : ""}${falta.length ? ` · ${falta.join("; ")}` : ""}`);
  return r;
}
const I = 20;   // o lugar do corpo onde entram as frases de teste (longe do gancho e do fecho)
const nomeDe = (id) => id.replace(/[^a-z0-9-]/g, "");
const reprova = (id, frase, nota) => caso(`${nomeDe(id)}-reprova`, { trocas: { [I]: frase } },
  { exit: 1, problema: [`[${id}]`], so: true, nota: nota ?? `"${[].concat(frase).join(" ")}"` });
const passa = (id, frase, nota, extra = {}) => caso(`${nomeDe(id)}-passa`, { trocas: { [I]: frase } },
  { exit: 0, semProblema: [`[${id}]`], semAlerta: [`[${id}]`], nota: nota ?? `"${[].concat(frase).join(" ")}"`, ...extra });
const alerta = (id, frase, nota) => caso(`${nomeDe(id)}-alerta`, { trocas: { [I]: frase } },
  { exit: 0, semProblema: [`[${id}]`], alerta: [`[${id}]`], nota: nota ?? `"${[].concat(frase).join(" ")}"` });

secao("A base");
const base = caso("base", {}, { exit: 0 });
if (base.laudo) {
  const L = base.laudo;
  conferir(L.palavras >= 2300 && L.palavras <= 2500, `a base tem ${L.palavras} palavras (faixa 2.300–2.500), ${L.frases} frases, média ${L.media_palavras_por_frase} (teto 18), maior ${L.maior_frase} (teto 34); o gancho tem ${L.gancho.palavras_ate_assinatura} palavras (${L.gancho.segundos_estimados} s a 179) e o "But" na palavra ${L.gancho.but_na_palavra}; ${L.minutos_estimados} min a 179`);
  conferir(L.alertas.length === 0, `a base não tem nenhum alerta (${JSON.stringify(L.alertas).slice(0, 300)})`);
  conferir(L.autoplagio.length === 0, "a base não tem autoplágio com os seis roteiros anteriores (Juneau, Los Angeles, Zona, Peru, Atlântico e Big Sur)");
  conferir(Object.values(L.taxas).every((t) => !t.alerta), "a base não dispara nenhuma taxa");
}

// ---- a faixa, a média e a maior frase -------------------------------------------------------------------------------
secao("A faixa (2.300 a 2.500), a média (18) e a maior frase (34)");
caso("faixa-piso-2300", { corpo: corpoCom(2300) }, { exit: 0, semProblema: ["palavras:"], nota: "2.300 palavras exatas passam" });
caso("faixa-2299", { corpo: corpoCom(2299) }, { exit: 1, problema: ["palavras: 2299, abaixo de 2300"], so: true, nota: "2.299 reprova" });
caso("faixa-teto-2500", { corpo: corpoCom(2500) }, { exit: 0, semProblema: ["palavras:"], nota: "2.500 palavras exatas passam" });
caso("faixa-2501", { corpo: corpoCom(2501) }, { exit: 1, problema: ["palavras: 2501, acima de 2500"], so: true, nota: "2.501 reprova" });
caso("faixa-2250-do-big-sur", { corpo: corpoCom(2250) }, { exit: 1, problema: ["palavras: 2250, abaixo de 2300"], so: true,
  nota: "o piso de Big Sur (2.250) já fica abaixo do piso novo" });
// a média: o corpo em pares unidos por ponto e vírgula (as mesmas palavras, metade das frases); nenhuma passa de 34
const CORPO_PARES = [];
for (let i = 0; i < N; i += 2) CORPO_PARES.push(i + 1 < N ? `${CORPO[i].slice(0, -1)}; ${CORPO[i + 1][0].toLowerCase()}${CORPO[i + 1].slice(1)}` : CORPO[i]);
caso("media-acima-de-18", { corpo: CORPO_PARES }, { exit: 1, problema: ["média de "], so: true, nota: "as frases do corpo unidas em pares (~20 palavras cada)" });
// a maior frase: 34 passa, 35 reprova (as palavras do próprio corpo, sem ponto)
const PALAVRAS_CORPO = CORPO.slice(30, 40).join(" ").replace(/\./g, "").split(/\s+/);
const longa = (n) => `${PALAVRAS_CORPO.slice(0, n).join(" ")}.`;
caso("frase-de-34", { trocas: { [I]: longa(34) } }, { exit: 0, semProblema: ["frase com"], nota: "uma frase de 34 palavras passa" });
caso("frase-de-35", { trocas: { [I]: longa(35) } }, { exit: 1, problema: ["frase com 35 palavras (teto 34"], so: true, nota: "uma frase de 35 palavras reprova" });

// ---- o título ---------------------------------------------------------------------------------------------------------
secao('O título ("Why the World\'s Longest Beach Is Almost a Straight Line") nas 3 primeiras frases, e o arco');
const G0_SEM_MAIOR = "This is Praia do Cassino, a beach in Brazil sold as the world's longest stretch of sand, between two stone walls 132 miles apart.";
caso("titulo-sem-longest-beach", { gancho: { 0: G0_SEM_MAIOR } }, { exit: 1, problema: ['"longest beach" não aparece'], so: true,
  semAlerta: ['"longest beach" sem "world"'] });
caso("titulo-longest-beach-na-4a", { gancho: { 0: G0_SEM_MAIOR, 3: "The state's own tourism website calls it the world's longest beach and says 158 miles." } },
  { exit: 1, problema: ['"longest beach" não aparece'], so: true, nota: '"longest beach" na 4ª frase já não paga' });
caso("titulo-sem-straight", { gancho: { 1: "The beach itself is less than five miles longer than the distance between them.",
  2: "But how does a coast that long end up so even?" } },
  { exit: 1, problema: ['"straight" não aparece'], so: true, semAlerta: ['"straight" sem "almost"'] });
caso("titulo-straight-na-4a", { gancho: { 1: "The beach itself is less than five miles longer than the distance between them.",
  2: "But how does a coast that long end up so even?", 3: "The state's own tourism website says 158 miles, for a coast this straight." } },
  { exit: 1, problema: ['"straight" não aparece'], so: true, nota: '"straight" na 4ª frase já não paga' });
caso("titulo-sem-world", { gancho: { 0: "This is Praia do Cassino, a beach in Brazil sold as the longest beach of all, between two stone walls 132 miles apart." } },
  { exit: 0, alerta: ['"longest beach" sem "world"'], semProblema: ['"longest beach"'], nota: 'sem "world" junto do "longest beach": alerta, não reprova' });
caso("titulo-longest-beach-in-the-world", { gancho: { 0: "This is Praia do Cassino, a beach in Brazil sold as the longest beach in the world, between two stone walls 132 miles apart." } },
  { exit: 0, semAlerta: ['"longest beach" sem "world"'], nota: '"the longest beach in the world" paga o "World\'s"' });
caso("titulo-sem-almost", { gancho: { 1: "The beach itself runs beside a straight line between them.", 2: "But how does a coast that long end up straight?" } },
  { exit: 0, alerta: ['"straight" sem "almost"'], semProblema: ['"straight"'], nota: 'com "straight" e sem "almost"/"longer" nas 3 primeiras: alerta (o "Almost" do título)' });
caso("titulo-almost-sem-longer", { gancho: { 1: "The beach itself runs beside a straight line between them.", 2: "But how does a coast that long end up almost straight?" } },
  { exit: 0, semAlerta: ['"straight" sem "almost"'], nota: '"almost" sem "longer" paga' });
caso("titulo-sem-milhas", { gancho: { 0: "This is Praia do Cassino, a beach in Brazil sold as the world's longest beach, between two stone walls far apart.",
  1: "The beach itself is barely longer than a straight line between them." } },
  { exit: 0, alerta: ["nenhum número em milhas nas 3 primeiras"], semProblema: ['"straight"', '"longest beach"'],
    nota: "sem número em milhas nas 3 primeiras: alerta (a condição dos leitores a frio)" });
caso("titulo-milhas-por-extenso", { gancho: { 0: "This is Praia do Cassino, a beach in Brazil sold as the world's longest beach, between two stone walls a hundred thirty-two miles apart." } },
  { exit: 0, semAlerta: ["nenhum número em milhas"], nota: '"a hundred thirty-two miles" por extenso conta' });
caso("arco-ausente", { trocas: { 0: [] } }, { exit: 0, alerta: ["a curva do meio (11 mi"], nota: "sem o 11 mi do arco em lugar nenhum: alerta" });
caso("arco-por-extenso", { trocas: { 0: "Near the middle, the beach bows out to sea by about eleven miles." } },
  { exit: 0, semAlerta: ["a curva do meio (11 mi"], nota: '"eleven miles" por extenso conta' });

// ---- a primeira frase -------------------------------------------------------------------------------------------------
secao('A primeira frase ("Cassino" e número)');
caso("primeira-sem-cassino", { gancho: { 0: "This is a beach in southern Brazil, sold as the world's longest beach, between two stone walls 132 miles apart." } },
  { exit: 1, problema: ['a primeira frase não diz "Cassino"'], so: true });
caso("primeira-cassino-na-2a", { gancho: { 0: "This is a beach in southern Brazil, sold as the world's longest beach, between two stone walls 132 miles apart.",
  1: "It is called Praia do Cassino, and it is less than five miles longer than a straight line between them." } },
  { exit: 1, problema: ['a primeira frase não diz "Cassino"'], so: true, nota: '"Cassino" na 2ª frase não conta' });
caso("primeira-sem-numero", { gancho: { 0: "This is Praia do Cassino, in Brazil, sold as the world's longest beach." } },
  { exit: 0, alerta: ["a primeira frase não tem número"], semProblema: ["a primeira frase"],
    nota: 'sem número só alerta: a regra aceita "um número ou uma imagem" (a areia reta)' });
caso("primeira-numero-por-extenso", { gancho: { 0: "This is Praia do Cassino, in Brazil, sold as the world's longest beach, between two stone walls." } },
  { exit: 0, semAlerta: ["a primeira frase não tem número"], nota: '"two" por extenso conta como número' });
caso("primeira-so-one", { gancho: { 0: "This is Praia do Cassino, one of the beaches of Brazil, sold as the world's longest beach." } },
  { exit: 0, alerta: ["a primeira frase não tem número"], nota: '"one of" não é número: alerta' });

// ---- o "não se diz" do Cassino ----------------------------------------------------------------------------------------
secao('O "não se diz" do Cassino (reprova)');
reprova("maior-praia-fato", "Praia do Cassino is the world's longest beach.");
reprova("maior-praia-fato", "Praia do Cassino, the world's longest beach, sits in southern Brazil.", "o aposto também afirma");
reprova("maior-praia-fato", "It is officially the longest beach in the world.");
passa("maior-praia-fato", "Praia do Cassino is sold as the world's longest beach.", 'com o rótulo ("sold as"): passa');
passa("maior-praia-fato", "The world's longest beach starts and ends at walls people built.", "como sujeito, a frase da pauta §4.3: passa");
passa("maior-praia-fato", "Is this really the world's longest beach?", "a pergunta não afirma: passa");
reprova("reta-perfeita", "The beach is perfectly straight.");
reprova("reta-perfeita", "From the air, the coast looks ruler-straight.");
reprova("reta-perfeita", "It is the straightest coast in the world.");
reprova("reta-perfeita", "The beach is straight.", '"is straight" sem ressalva');
passa("reta-perfeita", "It isn't ruler-straight.", "a negação, a frase da pauta §4.3: passa");
passa("reta-perfeita", "The beach runs straight to the border.", '"straight to" é direção: passa');
reprova("linha-reta-sem-almost", "The beach is a straight line.");
reprova("linha-reta-sem-almost", "Seen from a satellite, it's one long straight line.");
passa("linha-reta-sem-almost", "The beach is almost a straight line.");
passa("linha-reta-sem-almost", "The two walls are about 132 miles apart in a straight line.", "a distância das paredes em linha reta: passa");
passa("linha-reta-sem-almost", "It isn't a straight line.");
reprova("nunca-curva", "The shore never bends.");
reprova("nunca-curva", "There are no curves for the extra miles to hide in.");
reprova("nunca-curva", "It doesn't bend once between the walls.");
passa("nunca-curva", "The shore almost never bends.", '"almost never": passa (o "never" do universal ainda alerta)');
passa("nunca-curva", "It barely bends.");
reprova("paradoxo-errado", "The coastline paradox is wrong.");
reprova("paradoxo-errado", ["The famous explanation is the coastline paradox.", "On this coast, it doesn't work."], "por pronome, na frase seguinte");
passa("paradoxo-errado", ["The famous explanation is the coastline paradox.", "On this coast, it barely works."], "a forma da pauta §4.3: passa");
reprova("paradoxo-explica", "The coastline paradox explains the gap.");
reprova("paradoxo-explica", "The extra miles come from the coastline paradox.");
passa("paradoxo-explica", "Brazil's g1 says the coastline paradox explains the gap.", "atribuído ao g1: passa");
passa("paradoxo-explica", "The coastline paradox explains why most coasts grow when measured closely.", "o paradoxo em geral, sem os números daqui: passa");
reprova("mentira", "The state's 158 is fake.");
reprova("mentira", "The record is a myth.");
reprova("mentira", "Someone made up the number.");
reprova("mentira", "The number is simply wrong.");
reprova("mentira", "The state exaggerates.");
passa("mentira", "The barrier is made up of old beach ridges.", '"made up of": passa');
passa("mentira", "The lagoons lie behind the beach.", '"lie" de lugar: passa');
passa("mentira", "Ninety Mile Beach shows that names stretch the truth too.", 'o O1 da pauta, sobre um nome: passa');
reprova("guinness-nega", "Guinness denies the record.");
reprova("guinness-nega", "It was never in the Guinness book.");
passa("guinness-nega", "Guinness World Records told Brazil's g1 news site it doesn't monitor that title.", "a forma da pauta §4.1: passa", { semAlerta: ["[guinness-atribuido]"] });
reprova("guinness-confirma", "Guinness World Records confirmed the title.");
reprova("guinness-confirma", "The beach holds the Guinness world record.");
passa("guinness-confirma", "WorldAtlas says Guinness World Records has recognised it since 1994.", "com o dono: não reprova (alerta [guinness-atribuido], abaixo)");
reprova("tres-oficiais", "The beach has three official lengths.");
reprova("tres-oficiais", "In a way, all three are right.");
passa("tres-oficiais", "Two of the three numbers come from governments, and one from a trail.");
reprova("cidade-139", "The city says the beach is 139 miles long.");
passa("cidade-139", "A national trail network puts its route at 139 miles.", "a forma da pauta §4.3: passa", { semAlerta: ["[223-sem-trilha]"] });
reprova("so-39", "The real Cassino is only 39 miles long.");
caso("so-39-no-gancho", { gancho: { 3: "The part inside the city of Rio Grande is about 39 miles." } },
  { exit: 1, problema: ["[so-39]"], so: true, nota: "os 39 mi no gancho (antes da assinatura), mesmo com o dono: reprova (K9)" });
passa("so-39", "The part inside the city of Rio Grande, the part that carries the Cassino name, is about 39 miles.", "a forma da pauta §4.3, no corpo: passa", { semAlerta: ["[39-sem-dono]"] });
reprova("numero-sem-dono", "The beach is 158 miles long.");
reprova("numero-sem-dono", "It runs about 135 miles from wall to wall.");
reprova("numero-sem-dono", "That is 254 km of white sand.");
passa("numero-sem-dono", "Brazil's statistics agency maps this shore at about 135 miles.", "a forma da pauta §4.3: passa", { semAlerta: ["[135-sem-dono]"] });
reprova("tres-decadas", "Newspapers have repeated the record for three decades.");
reprova("tres-decadas", "Since the 1990s, newspapers have called it the longest.");
passa("tres-decadas", "Newspapers have repeated the record for years.", 'a forma da pauta ("for years"): passa');
reprova("virginia-28", "Virginia Beach holds a record for its 28 miles.");
passa("virginia-28", "Long Beach, in Washington, has 28 miles of sand.", 'os 28 mi de Long Beach: passa');
reprova("briga-vizinha", "Santa Vitória do Palmar stole the title.");
reprova("briga-vizinha", "The two towns have a long feud.");
passa("briga-vizinha", "Santa Vitória do Palmar contested the claim.");
reprova("hermenegildo-97", "Hermenegildo and Barra do Chuí are the other 97 miles.");
passa("hermenegildo-97", "The Albardão lighthouse stands near the middle of the stretch.", "o meio é o Albardão: passa", { semAlerta: ["[hermenegildo]", "[albardao-sem-dono]"] });
reprova("parque-area", "The park covers about a million hectares.");
passa("parque-area", "More than 5,000 square miles of lagoon catch the rivers' sand first.", "milhas quadradas de lagoa, sem parque: passa");
reprova("parque-maior", "It is the largest marine park in Brazil.");
passa("parque-maior", "In March 2026, Brazil's federal government created the Albardão National Park, and a protected area beside it.", "a forma da pauta §4.4: passa", { semAlerta: ["[albardao-sem-dono]"] });
reprova("parque-juizo", "The decree finally protected the beach.");
reprova("parque-juizo", "The senator's bill threatens the park.");
passa("parque-juizo", "The decree names the beach, the dunes and fossil sites tied to the beach.", "nas palavras do decreto (pauta §4.4): passa", { semAlerta: ["[fosseis]"] });
reprova("parque-previsao", "The decree will be overturned.");
reprova("parque-previsao", "The park is safe.");
passa("parque-previsao", "Nobody knows yet what the Senate will decide.");
reprova("parque-processo", "Santa Vitória do Palmar is suing over the park.");
passa("parque-processo", "Santa Vitória do Palmar holds most of the sand.");
reprova("parque-praia-toda", "The park covers the whole beach.");
reprova("parque-praia-toda", "The entire beach is now protected.");
passa("parque-praia-toda", "The decree's limits mention the Mangueira lagoon and the mouth of the Chuí stream.");
reprova("pdl-sem-data", "The bill is still waiting in a Senate committee.");
reprova("pdl-sem-data", ["A senator from Rio Grande do Sul has filed a bill to cancel the decree.", "It is still waiting in a Senate committee."], "por pronome, sem a data");
passa("pdl-sem-data", ["A senator from Rio Grande do Sul has filed a bill to cancel the decree.", "As of November 2026, it was still waiting in a Senate committee."], "a forma da pauta §4.4: passa", { semAlerta: ["[pdl-sem-dono]"] });
reprova("mare-numero", "The tide rises about ten inches.");
reprova("mare-numero", "The tide on this coast is only one foot.");
passa("mare-numero", "This coast has a tide of well under two feet.", "a forma da pauta §4.5: passa");
passa("mare-numero", "By 1881, the bar had ten feet at low tide.", 'o fundo "at low tide" (Los Angeles) não é a maré: passa');
reprova("mar-alto-numero", "Five thousand years ago, the sea stood ten feet higher.");
reprova("mar-alto-numero", "The sea was about two meters above today's level.");
passa("mar-alto-numero", "A layer of rock starts more than 4,000 feet above sea level.", "uma altitude (o Atlântico), não o mar de antes: passa");
passa("mar-alto-numero", "About five thousand years ago, the sea stood several feet higher.", "a forma da pauta §4.5: passa", { semProblema: ["[data-relativa]", "[idades]"] });
reprova("rios-nada", "The rivers send nothing to the sea.");
passa("rios-nada", "The rivers drop their sand in the lagoons behind the beach.");
reprova("areia-dos-rios", "The sand comes from the rivers.");
reprova("areia-dos-rios", "The rivers bring sand to the beach.");
passa("areia-dos-rios", "The sand doesn't come from the rivers.", "a negação: passa");
passa("areia-dos-rios", "The rivers carry sand toward the coast, but drop it in the lagoons.");
reprova("nada-cresce", "So nothing builds out into the sea.");
passa("nada-cresce", "Near the border, old lagoon mud and peat poke out of the beach.", "a frase da pauta §4.5: passa");
reprova("sem-riacho", "Not a single stream crosses the sand.");
reprova("sem-riacho", "The beach runs unbroken for 135 miles.");
passa("sem-riacho", "In about 390 miles, the barrier opens in only two places, and this beach starts at one of them.", "a forma da pauta §4.5: passa");
reprova("linhas-na-areia", "Depending on the line you pick, the length changes by 10 to 20 percent.");
reprova("linhas-na-areia", "Measured along the high-tide line, the beach gets longer.");
passa("linhas-na-areia", "At the high-tide line, shells pile up after storms.", "a linha da preamar sem medida: passa");
reprova("idades", "This is a 400,000-year-old beach.");
reprova("idades", "The oldest barrier formed about a hundred and twenty thousand years ago.");
passa("idades", "The newest of the four barriers is the beach you are standing on.");
reprova("conchas", "There are 37 miles of shells.");
reprova("conchas", "Motorcyclists fear that stretch.");
passa("conchas", "Shells pile up along parts of the beach.");
reprova("foguetes-lancados", "NASA launched 21 rockets from the beach.");
reprova("foguetes-lancados", "The rockets lifted off over the ocean.");
passa("foguetes-lancados", "NASA's release planned 21 rockets from a beach about 15 miles south of Rio Grande.", 'a forma da pauta §4.6 ("planned"): passa', { semAlerta: ["[foguetes-numero]"] });
passa("foguetes-lancados", "How many rockets actually went up, the release doesn't say.");
reprova("gemini-viu", "Gemini 12's astronauts watched the eclipse from orbit.");
passa("gemini-viu", "Gemini 12's astronauts were scheduled to watch the eclipse from orbit.", 'a forma da pauta ("was scheduled to watch"): não reprova (o [gemini] alerta, abaixo)');
reprova("lugar-perfeito", "A long, straight, empty beach was the perfect launch site.");
reprova("lugar-perfeito", "NASA chose the beach because the beach was so long and empty.");
passa("lugar-perfeito", "NASA's release gives the reason: the beach sat very near the path of the total eclipse.", "a forma da pauta §4.6: passa");
reprova("altair-tempestade", "A storm wrecked the Altair.");
reprova("altair-tempestade", "The Altair ran aground in June 1976.");
passa("altair-tempestade", "In a storm, its crew ran the Altair ashore on purpose, g1 reports.", 'o "on purpose", atribuído ao g1: passa', { semAlerta: ["[altair]"] });
reprova("molhes-ano", "The breakwaters were finished in 1915.");
passa("molhes-ano", "The stone walls of the breakwaters went up in the 1910s.", 'a forma da pauta ("in the 1910s"): passa');
passa("molhes-ano", "Since 1976, the Altair has sat between the two walls.", "um ano sem a obra: passa", { semAlerta: ["[altair]"] });
reprova("rivais", "Eighty Mile Beach is longer.");
reprova("rivais", "Cox's Bazar is the longest natural beach in the world.");
reprova("rivais", "Padre Island has 70 miles of beach.");
passa("rivais", "Ninety Mile Beach, in New Zealand, is about 55 miles long.", 'o O1 da pauta: o nome "Ninety Mile" não é distância, e a Ninety Mile não é rival vetada: passa');
passa("rivais", "Cox's Bazar is widely marketed as the longest unbroken natural sandy beach in the world.", 'a forma da pauta §4.2 ("marketed as"): passa', { semAlerta: ["[sem-interrupcao]"] });
reprova("visto-do-espaco", "The beach is visible from space.");
passa("visto-do-espaco", "A Sentinel-3 image shows the beach seen from space.", "a imagem do Sentinel-3 (O3): passa");
reprova("data-relativa", "Sixty years ago this month, NASA planned a launch from this sand.");
reprova("data-relativa", "This year, the decree turned the dunes into a park.");
passa("data-relativa", "On November 12, 1966, the shadow of the eclipse crossed southern Brazil.", "a data absoluta: passa");
reprova("populacao", "Cassino has a population of 30,000.");
passa("populacao", "Cassino is a beach district of Rio Grande.");
reprova("fecho-milhas-atras", "There are 135 miles behind you.");
passa("fecho-milhas-atras", "Behind you, the whole stretch runs north.", 'a forma da pauta ("the whole stretch"): passa');
reprova("brasil-um-so", "Brazil says the beach is 158 miles long.");
passa("brasil-um-so", "Brazil's statistics agency says about 135 miles.");
// as regras de Big Sur saíram: o que o portão do vídeo 5 reprovava passa aqui
passa("cidade-big-sur", "The town of Big Sur has a gas station and a post office.", "a regra do vídeo 5 saiu: passa");
passa("estrada-fechada", "The road is closed at Paul's Slide.", "a regra do vídeo 5 saiu: passa");
passa("fogo-destruiu", "The fire destroyed dozens of homes.", "a regra do vídeo 5 saiu: passa");
passa("big-sur-tem", "Big Sur has fewer than 1,500 people.", "o alerta do vídeo 5 saiu: passa sem alerta", { semAlerta: ["[1500-sem-distrito]"] });

// ---- os alertas do Cassino --------------------------------------------------------------------------------------------
secao("Os alertas do Cassino (nunca reprovam)");
alerta("158-sem-turismo", "Less than two percent apart, and nowhere near 158.");
passa("158-sem-turismo", "The state's own tourism website says 158 miles.", "com o turismo do Estado: sem alerta");
passa("158-sem-turismo", "The survey cost $158 in all.", "dinheiro (a Zona: $158.46) não é o 158: sem alerta");
alerta("223-sem-trilha", "Another source puts it at 139 miles.");
alerta("albardao-sem-dono", "The Albardão is now a national park.");
passa("albardao-sem-dono", "Padre Island is the longest stretch of undeveloped barrier island in the world, in the words of the National Park Service.",
  'a forma da pauta §4.2: o "National Park Service" não é o parque, e "longest stretch" não é "longest beach": sem alerta', { semProblema: ["[maior-praia-fato]", "[rivais]"] });
alerta("pdl-sem-dono", "A bill in the Senate would cancel the decree.");
passa("pdl-sem-dono", "A senator from Rio Grande do Sul has filed a bill to cancel the decree.", "com o senador: sem alerta");
alerta("altair", "The Altair sits about 10 miles from the center of Cassino.", "a distância (o ponto sai do OSM)");
alerta("altair", "The Altair may disappear one day.", 'o "may disappear" sem a FURG');
alerta("altair", "The Altair was run ashore on purpose.", 'o "on purpose" sem o g1');
passa("altair", "The Altair has sat on this sand since 1976.", "a forma da pauta §4.6: sem alerta");
alerta("gemini", "Gemini 12's astronauts were scheduled to watch the eclipse from orbit.", "toda menção alerta, até o relatório da missão");
alerta("hermenegildo", "Hermenegildo is a small resort near the border.");
alerta("guinness-atribuido", "WorldAtlas says Guinness World Records has recognised it since 1994.");
alerta("39-sem-dono", "The Cassino part is about 39 miles.");
alerta("135-sem-dono", "That gives about 136 miles.");
alerta("foguetes-numero", "In 1966, NASA sent rockets to Cassino.");
passa("foguetes-numero", "A sounding of the shelf came to about 400 feet.", '"sounding" de profundidade (o Atlântico) não é foguete: sem alerta');
alerta("razoes-do-senador", "The senator says the decree is too big.");
passa("razoes-do-senador", "A senator from Rio Grande do Sul has filed a bill to cancel the decree.", "o pedido, sem as razões: sem alerta");
alerta("sem-interrupcao", "The sand is uninterrupted.");
passa("sem-interrupcao", "Cassino is sold as the longest uninterrupted sandy beach.", "com o rótulo: sem alerta");
alerta("onda-altura", "The waves average five feet.");
passa("onda-altura", "Big waves roll in from the southeast.", "a forma da pauta: sem alerta");
alerta("eighty-mile", "Eighty Mile Beach sits in Western Australia.");
alerta("fosseis", "The fossils include the bones of giant sloths.");
// as palavras de ALERTA do molde, todas ficam
const alertaPalavra = (nome, frase, re) => caso(`palavra-${nome}`, { trocas: { [I]: frase } }, { exit: 0, alerta: [`conferir ${re}`], nota: `"${frase}"` });
alertaPalavra("everyone", "Everyone on the crew agreed on the count.", String.raw`/\beveryone\b/i`);
alertaPalavra("nobody", "Nobody on the crew questioned the count.", String.raw`/\bnobody\b/i`);
alertaPalavra("never", "The crew never questioned the count.", String.raw`/\bnever\b/i`);
alertaPalavra("first", "The first count came back at dawn.", String.raw`/\bfirst\b/i`);
alertaPalavra("last", "Last summer, the crew counted the posts again.", String.raw`/\blast\b/i`);
alertaPalavra("always", "The crew always checked the count twice.", String.raw`/\balways\b/i`);
alertaPalavra("mystery", "The straight coast is no mystery.", String.raw`/\bmyster(y|ies|ious)\b/i`);
alertaPalavra("secret", "The coast keeps no secret from the map.", String.raw`/\bsecrets?\b/i`);
alertaPalavra("still", "The fishermen still work the surf.", String.raw`/\b(still|today|now|currently)\b/i`);
alertaPalavra("here", "Out here, the nights are dark.", String.raw`/\bhere\b/i`);
alertaPalavra("this-line", "Follow this line to the border.", String.raw`/\bthis line\b/i`);
// as VETADAS do molde ficam: "breaking" (de "breaking news") também pega as ondas
caso("vetada-breaking", { trocas: { [I]: "The breaking waves bend around the point." } },
  { exit: 1, problema: ["vetada (voz §2) /\\bbreaking\\b/i"], so: true, nota: '"breaking waves" reprova pela VETADA do molde: escreva "the waves break"' });

// ---- o gancho A da pauta §8 -------------------------------------------------------------------------------------------
secao("O gancho A da pauta §8");
const GANCHO_A = [
  "This is Praia do Cassino, in Brazil, sold as the world's longest beach.",
  "Stone walls mark its two ends, about 132 miles apart in a straight line.",
  "The beach itself is less than five miles longer.",
  "How does a coast end up that straight?",
  "That should also make it easy to measure.",
  "Yet the state's own tourism website says 158 miles, right next to the words \"Guinness Book.\"",
  "And in 2025, Guinness World Records told a Brazilian news site it doesn't monitor that title.",
  "So why won't the famous number fit on this sand?",
  "You're at Alpha Point, and this is where the story of the beach between two walls begins.",
];
const gA = caso("gancho-a-como-esta", { gancho: GANCHO_A }, { exit: 1, problema: ['o "But" do gancho'], so: true,
  alerta: ["a primeira frase não tem número"], semAlerta: ["[158-sem-turismo]", "[guinness-", '"straight" sem "almost"', "nenhum número em milhas"],
  nota: 'o gancho A, como está na pauta, só reprova pelo "But" (o "Yet" da 6ª frase não conta) e alerta a 1ª frase sem número' });
if (gA.laudo) conferir(gA.laudo.alertas.length === 1 && gA.laudo.gancho.palavras_ate_assinatura === 111,
  `o gancho A tem ${gA.laudo.gancho.palavras_ate_assinatura} palavras até a assinatura no texto do narrador (${gA.laudo.gancho.segundos_estimados} s a 179; a pauta §8 conta 116 na cópia para a voz, com os números por extenso) e um alerta só (${gA.laudo.alertas.length})`);
caso("gancho-a-but-no-lugar-do-yet", { gancho: GANCHO_A.map((f, i) => (i === 5 ? f.replace(/^Yet/, "But") : f)) },
  { exit: 1, problema: ['o "But" do gancho (o 2º tempo) começa na palavra 52'], so: true,
    nota: 'o "Yet" trocado por "But" cai na palavra 52: ainda reprova (o teto é a 50)' });
caso("gancho-a-com-but", { gancho: GANCHO_A.map((f, i) => (i === 3 ? "But how does a coast end up that straight?" : f)) },
  { exit: 0, semProblema: ['o "But" do gancho'], nota: 'com "But how does a coast end up that straight?" na 4ª frase (palavra 36), passa' });

// ---- o fecho (do molde) -----------------------------------------------------------------------------------------------
secao("O fecho (alerta; fica do molde)");
caso("fecho-repete-pergunta", { trocas: { [N - 1]: "The clerk could not see how that number fit on this sand at all." } },
  { exit: 0, alerta: ["o fecho repete a pergunta do gancho"], nota: '"that number fit on this" (5 palavras da pergunta) na última frase' });
caso("fecho-4-palavras", { trocas: { [N - 1]: "The clerk saw that number fit on paper." } },
  { exit: 0, semAlerta: ["o fecho repete a pergunta do gancho"], nota: '"that number fit on": 4 palavras da pergunta, sem alerta' });
caso("fecho-pergunta-fora-das-8", { trocas: { [N - 9]: "The clerk could not see how that number fit on this sand at all." } },
  { exit: 0, semAlerta: ["o fecho repete a pergunta do gancho"], nota: "a mesma frase na 9ª antes do fim: sem alerta" });
caso("fecho-em-lista", { trocas: { [N - 3]: "First, the sea rose over the plain.", [N - 2]: "Then the waves came, slowly.",
  [N - 1]: "Finally, the lagoons filled in." } },
  { exit: 0, alerta: ["o fecho em lista: 3 das 8"], nota: '"First…", "Then…", "Finally…" nas 3 últimas' });
caso("fecho-2-da-lista", { trocas: { [N - 3]: "First, the sea rose over the plain.", [N - 2]: "Then the waves came, slowly." } },
  { exit: 0, semAlerta: ["o fecho em lista"], nota: "duas aberturas de lista: sem alerta" });
caso("fecho-em-lista-a-an", { trocas: { [N - 6]: "A ridge of sand rose behind the shore.", [N - 4]: "A lagoon filled in behind it.",
  [N - 1]: "An old dune climbed the ridge." } },
  { exit: 0, alerta: ["o fecho em lista: 3 das 8"], nota: '"A …", "A …", "An …" entre as 8 últimas' });
caso("fecho-pergunta-curta", { gancho: { 4: "Why so straight?" }, trocas: { [N - 1]: "The rangers wonder why so straight a coast sits between two walls." } },
  { exit: 0, alerta: ["o fecho repete a pergunta do gancho"], nota: 'a pergunta do gancho com 3 palavras ("Why so straight?"): ela inteira no fim alerta' });

// ---- o autoplágio com Big Sur -----------------------------------------------------------------------------------------
secao("O autoplágio compara também com o roteiro do vídeo 5");
caso("autoplagio-big-sur", { trocas: { [I]: "Their metro areas hold more than 17 million people." } },
  { exit: 0, alerta: [`autoplágio (6+ palavras iguais a ${ROTEIRO_BS})`], nota: "uma frase do roteiro de Big Sur" });

// ---- o portão novo no roteiro do vídeo 5, e o sha nos dois portões ----------------------------------------------------
secao("O roteiro do vídeo 5 nos dois portões, e o sha");
const novo = rodar([ROTEIRO_BS]), bs = rodar([ROTEIRO_BS], GATE_BS);
if (novo.laudo && bs.laudo) {
  const esperados = [`palavras: ${bs.laudo.palavras}, abaixo de 2300`, '"longest beach" não aparece', '"straight" não aparece',
    'a primeira frase não diz "Cassino"'];
  const P = novo.laudo.problemas;
  conferir(novo.exit === 1 && esperados.every((s) => P.some((p) => p.includes(s))) && P.length === esperados.length,
    `o portão novo reprova o roteiro do vídeo 5 só pela faixa (${bs.laudo.palavras} palavras), pelo título (2) e pela primeira frase sem "Cassino" (1), sem nenhum "não se diz" do Cassino: exit ${novo.exit}, ${P.length} problema(s): ${P.map((p) => p.slice(0, 60)).join(" | ")}`);
  const doCassino = novo.laudo.alertas.filter((a) => /^conferir \[/.test(a));
  conferir(doCassino.length === 0, `e nenhum alerta do Cassino nele (${doCassino.map((a) => a.slice(0, 80)).join(" | ") || "nenhum"})`);
  conferir(novo.laudo.alertas.some((a) => a.includes("nenhum número em milhas")) && novo.laudo.alertas.some((a) => a.includes("a curva do meio"))
    && novo.laudo.alertas.some((a) => a.includes("a primeira frase não tem número")),
    "e alerta o número em milhas fora das 3 primeiras, o arco ausente e a 1ª frase sem número (a de Big Sur não tem número)");
  conferir(bs.exit === 0, `o portão do vídeo 5, no mesmo texto: exit ${bs.exit} (${bs.laudo.veredito})`);
  conferir(isDeepStrictEqual(novo.laudo.taxas, bs.laudo.taxas) && novo.laudo.taxas_palavras_contadas === bs.laudo.taxas_palavras_contadas,
    `as taxas saem iguais nos dois portões (${Object.entries(novo.laudo.taxas).map(([k, t]) => `${k} ${t.valor}`).join(", ")}; ${novo.laudo.taxas_palavras_contadas} palavras contadas)`);
  conferir(novo.laudo.sha256 === bs.laudo.sha256, `o sha do roteiro do vídeo 5 é o mesmo nos dois portões (${novo.laudo.sha256.slice(0, 12)})`);
  const semSeg = (g) => ({ ...g, segundos_estimados: undefined });
  conferir(["palavras", "paragrafos", "frases", "media_palavras_por_frase", "maior_frase"].every((k) => novo.laudo[k] === bs.laudo[k])
    && isDeepStrictEqual(semSeg(novo.laudo.gancho), semSeg(bs.laudo.gancho)),
    `palavras, parágrafos, frases, média, maior frase e gancho iguais (os segundos do gancho mudam com o WPM: ${novo.laudo.gancho.segundos_estimados} s a 179 contra ${bs.laudo.gancho.segundos_estimados} s a 184)`);
  conferir(isDeepStrictEqual(novo.laudo.autoplagio, bs.laudo.autoplagio),
    `o autoplágio é o mesmo nos dois (o novo compara também com o próprio Big Sur, que sai da conta por ser o arquivo medido): ${novo.laudo.autoplagio.length} trecho(s)`);
  const fecho = (l) => l.alertas.filter((a) => a.startsWith("o fecho"));
  conferir(isDeepStrictEqual(fecho(novo.laudo), fecho(bs.laudo)), `os alertas do fecho são os mesmos nos dois (${fecho(novo.laudo).length})`);
} else conferir(false, `os portões não deram laudo no roteiro do vídeo 5 (${novo.exit}, ${bs.exit})`);
// o sha de um texto com BOM, CRLF, título, citação e comentário de várias linhas, nos dois portões
const ARQ_SHA = join(CASOS, "sha-bom-crlf", "roteiro-narrador.md");
gravar(ARQ_SHA, "﻿" + montar().replace("<!-- gancho -->", "<!-- gancho\nem duas linhas -->").replace(/\n/g, "\r\n"));
const s1 = rodar([ARQ_SHA]), s2 = rodar([ARQ_SHA], GATE_BS), sBase = rodar([join(CASOS, "001-base", "roteiro-narrador.md")]);
conferir(s1.laudo && s2.laudo && s1.laudo.sha256 === s2.laudo.sha256 && s1.laudo.sha256 === sBase.laudo?.sha256,
  `o sha de um texto com BOM, CRLF e comentário de duas linhas é o mesmo nos dois portões e o da base (${s1.laudo?.sha256.slice(0, 12)})`);

// ---- o portao-fatos cruza o sha com o portão novo ---------------------------------------------------------------------
secao("O ferramentas/portao-fatos.mjs com o portão novo");
const RAIZ = join(PASTA, "raiz"), BASE_R = join(RAIZ, "roteiros", "praia-do-cassino");
gravar(join(BASE_R, "roteiro-narrador.md"), montar());
mkdirSync(join(BASE_R, "_ferramentas"), { recursive: true });
copyFileSync(GATE, join(BASE_R, "_ferramentas", "gate.mjs"));
gravar(join(BASE_R, "qc-roteiro", "fatos.laudo.md"), `# Laudo de teste\n\nRevisão julgada: \`${sBase.laudo?.sha256.slice(0, 12)}\`\n\nCOBERTURA: 0 de 0\n\nVEREDITO: RESSALVA\n`);
gravar(join(BASE_R, "qc-roteiro", "fatos-tabela.json"), "[]\n");
const pf = spawnSync(process.execPath, ["ferramentas/portao-fatos.mjs", "praia-do-cassino", "--json", `--raiz=${resolve(RAIZ)}`], { encoding: "utf8" });
let pfs = null; try { pfs = JSON.parse(pf.stdout); } catch {}
conferir(pf.status !== 2 && pfs?.gate?.igual === true && pfs.sha256 === sBase.laudo?.sha256,
  `o portao-fatos roda a cópia do portão novo (numa raiz de teste) e o sha cruza: exit ${pf.status} (o piso reprova a tabela vazia, de propósito), gate.igual = ${pfs?.gate?.igual}`);

// ---- o resto do molde: o arquivo padrão, as opções --------------------------------------------------------------------
secao("O arquivo padrão e as opções do molde");
const PADRAO = "roteiros/praia-do-cassino/roteiro-narrador.md";
const semArg = rodar([]);
if (existsSync(PADRAO)) conferir(semArg.laudo?.arquivo === PADRAO, `sem argumento, o portão mede ${PADRAO} (exit ${semArg.exit})`);
else conferir(semArg.exit === 2 && semArg.stderr.includes(PADRAO), `sem argumento, o portão procura ${PADRAO}, que ainda não existe: exit ${semArg.exit}, "${semArg.stderr.trim()}"`);
const opc = rodar(["--xyz", join(CASOS, "001-base", "roteiro-narrador.md")]);
conferir(opc.exit === 2 && /opção desconhecida: --xyz/.test(opc.stderr), `opção desconhecida: exit ${opc.exit}`);
const onde = rodar(["--onde", join(CASOS, "001-base", "roteiro-narrador.md")]);
conferir(onde.exit === 0 && Array.isArray(onde.laudo?.taxas?.abre_so?.onde) && onde.laudo.taxas.abre_so.onde.length === 1,
  `--onde: cada taxa traz as frases (abre_so: ${JSON.stringify(onde.laudo?.taxas?.abre_so?.onde)})`);
const DIR_D = join(CASOS, "derivados");
gravar(join(DIR_D, "roteiro-narrador.md"), montar());
gravar(join(DIR_D, "qc-roteiro", "fatos.laudo.md"), `> Revisão julgada: \`${sBase.laudo?.sha256.slice(0, 12)}\`\n`);
gravar(join(DIR_D, "roteiro-editor.md"), "Revisão do roteiro: `000000000000`\n");
// os laudos com sufixo de rodada (-r1, -r2, -r2b…) e os -antigo ficam fora: julgaram o texto de antes (a Sala, 26/10/2026)
for (const n of ["roteiro-r1.laudo.md", "roteiro-r2.laudo.md", "roteiro-r2b.laudo.md", "roteiro-r2-antigo.laudo.md"]) gravar(join(DIR_D, "qc-roteiro", n), "> Revisão julgada: `000000000000`\n");
const der = rodar(["--derivados", join(DIR_D, "roteiro-narrador.md")]);
conferir(der.exit === 1 && der.laudo?.derivados?.length === 2 && der.laudo.derivados_velhos?.length === 1
  && der.laudo.derivados_velhos[0].arquivo.endsWith("roteiro-editor.md"),
  `--derivados: o laudo com o sha de agora passa, o roteiro-editor.md com o sha velho reprova (exit ${der.exit})`);

// ---- a saída ----------------------------------------------------------------------------------------------------------
const cab = `# Prova do portão do vídeo 6, a Praia do Cassino (${GATE})\n\n${total - falhas} de ${total} checagens como o esperado${falhas ? ` · ${falhas} FALHARAM` : ""}.\n` +
  `A base: ${base.laudo?.palavras} palavras, ${N} frases de corpo; os casos em ${CASOS}/.`;
const saida = `${cab}\n${linhas.join("\n")}\n`;
writeFileSync(join(PASTA, "prova-saida.md"), saida, "utf8");
console.log(saida);
process.exit(falhas ? 1 : 0);
