// gate-provar.mjs — a prova do portão do vídeo 5, Big Sur (roteiros/big-sur/_ferramentas/gate.mjs).
//   node roteiros/big-sur/_ferramentas/gate-provar.mjs      (cwd = raiz do canal; exit 0 = tudo como o esperado, 1 = alguma checagem
//                                                            falhou, 2 = não rodou)
// Deriva da prova do vídeo 4 (roteiros/atlantico-fundo/_ferramentas/gate-provar.mjs), em 02/11/2026, pelo pedido da Sala de controle.
// Grava roteiros sintéticos em out/_tmp/gate-big-sur/casos/ (fora do git), roda o portão em cada um e confere a saída:
//   - a base passa (o gancho com a 1ª frase certa, o título pago, o "But", a pergunta e a assinatura; o corpo até o meio da faixa),
//     sem nenhum alerta;
//   - a faixa (2.250 a 2.450), a média (18) e a maior frase (34): o piso e o teto exatos passam, uma palavra a menos ou a mais reprova;
//   - o título e a primeira frase: um caso que reprova para cada regra, um que alerta para cada alerta, e o que passa ao lado;
//   - o "não se diz" de Big Sur: um caso que reprova para cada id (e mais de um onde o padrão tem formas), e o que passa ao lado;
//   - os alertas de Big Sur, cada um com o seu caso, e o que fica ao lado sem alerta; as palavras de ALERTA que ficam e as que saíram;
//   - o gancho A da pauta §8 como está (reprova só pelo "But") e com o "But";
//   - o fecho (a pergunta repetida e a lista), que fica do molde;
//   - o autoplágio contra o roteiro do vídeo 4 (roteiros/atlantico-fundo/roteiro-narrador.md);
//   - o portão novo no roteiro do vídeo 4: reprova pela faixa, pelo título e pela primeira frase, e as taxas, o sha, as contagens, o
//     gancho, o autoplágio e os alertas do fecho saem iguais aos do portão do vídeo 4 no mesmo texto; e o sha de um texto (com BOM,
//     CRLF, título, citação e comentário) igual nos dois portões;
//   - o ferramentas/portao-fatos.mjs cruza o sha com o portão novo (numa raiz de teste) sem divergir;
//   - o arquivo padrão, a opção desconhecida, o --onde e o --derivados.
// Sem rede, sem crédito. Grava só em out/_tmp/gate-big-sur/. A saída também vai a out/_tmp/gate-big-sur/prova-saida.md.
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync, rmSync, existsSync, copyFileSync } from "node:fs";
import { posix, resolve } from "node:path";
const { join, dirname } = posix;   // os caminhos com "/", também no Windows
import { isDeepStrictEqual } from "node:util";

const GATE = "roteiros/big-sur/_ferramentas/gate.mjs";
const GATE_ATL = "roteiros/atlantico-fundo/_ferramentas/gate.mjs";
const ROTEIRO_ATL = "roteiros/atlantico-fundo/roteiro-narrador.md";
const PASTA = "out/_tmp/gate-big-sur";
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
  "This is Big Sur, a coast between Los Angeles and San Francisco, where the mountains climb 5,200 feet.",
  "Those two metro areas hold more than 17 million people.",
  "But the census district around this bridge counted fewer than 1,500, as empty as Wyoming.",
  "So why is this stretch of California so empty?",
  "The answer is a mountain range, a road that keeps falling, and a rule in a 1986 county plan.",
  "You're at Alpha Point, and this is where the story of the coast that stayed empty begins.",
];
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
while (POOL.length < 420) {
  const f = `${pega(SUJ)} ${pega(VERBO)} ${pega(OBJ)} ${pega(RABO)}.`;
  if (!usadas.has(f)) { usadas.add(f); POOL.push(f); }
}
const CORPO = [];
for (const f of POOL) { if (contar([...GANCHO, ...CORPO].join(" ")) >= 2330) break; CORPO.push(f); }
const N = CORPO.length;
// uma frase de enchimento com exatamente n palavras (5 a 27), para acertar a faixa no número exato
const ENCHE = "The ranger walked slowly past the quiet barn and the old gate toward the fence by the creek road at dusk with his dog and a lamp".split(" ");
const enche = (n) => `${ENCHE.slice(0, n).join(" ")}.`;
// um corpo com o total exato de palavras faladas (com o gancho da base)
function corpoCom(alvo, gancho = GANCHO) {
  const c = [];
  let t = contar(gancho.join(" "));
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
  return `# Why This Stretch of California Is as Empty as Wyoming\n\n> Roteiro de teste, gerado por gate-provar.mjs.\n\n<!-- gancho -->\n\n${pars.join("\n\n")}\n`;
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
  conferir(L.palavras >= 2250 && L.palavras <= 2450, `a base tem ${L.palavras} palavras (faixa 2.250–2.450), ${L.frases} frases, média ${L.media_palavras_por_frase} (teto 18), maior ${L.maior_frase} (teto 34); o gancho tem ${L.gancho.palavras_ate_assinatura} palavras e o "But" na palavra ${L.gancho.but_na_palavra}`);
  conferir(L.alertas.length === 0, `a base não tem nenhum alerta (${JSON.stringify(L.alertas).slice(0, 300)})`);
  conferir(L.autoplagio.length === 0, "a base não tem autoplágio com os cinco roteiros anteriores (Juneau, Los Angeles, Zona, Peru e Atlântico)");
  conferir(Object.values(L.taxas).every((t) => !t.alerta), "a base não dispara nenhuma taxa");
}

// ---- a faixa, a média e a maior frase -------------------------------------------------------------------------------
secao("A faixa (2.250 a 2.450), a média (18) e a maior frase (34)");
caso("faixa-piso-2250", { corpo: corpoCom(2250) }, { exit: 0, semProblema: ["palavras:"], nota: "2.250 palavras exatas passam" });
caso("faixa-2249", { corpo: corpoCom(2249) }, { exit: 1, problema: ["palavras: 2249, abaixo de 2250"], so: true, nota: "2.249 reprova" });
caso("faixa-teto-2450", { corpo: corpoCom(2450) }, { exit: 0, semProblema: ["palavras:"], nota: "2.450 palavras exatas passam" });
caso("faixa-2451", { corpo: corpoCom(2451) }, { exit: 1, problema: ["palavras: 2451, acima de 2450"], so: true, nota: "2.451 reprova" });
caso("faixa-2150-do-molde", { corpo: corpoCom(2150) }, { exit: 1, problema: ["palavras: 2150, abaixo de 2250"], so: true,
  nota: "o teto do molde (2.150) já fica abaixo do piso novo" });
// a média: o corpo em pares unidos por ponto e vírgula (as mesmas palavras, metade das frases); nenhuma passa de 34
const CORPO_PARES = [];
for (let i = 0; i < N; i += 2) CORPO_PARES.push(i + 1 < N ? `${CORPO[i].slice(0, -1)}; ${CORPO[i + 1][0].toLowerCase()}${CORPO[i + 1].slice(1)}` : CORPO[i]);
caso("media-acima-de-18", { corpo: CORPO_PARES }, { exit: 1, problema: ["média de "], so: true, nota: "as frases do corpo unidas em pares (~20 palavras cada)" });
// a maior frase: 34 passa, 35 reprova (as palavras do próprio corpo, sem ponto)
const PALAVRAS_CORPO = CORPO.slice(30, 40).join(" ").replace(/\./g, "").split(/\s+/);
const longa = (n) => `${PALAVRAS_CORPO.slice(0, n).join(" ")}.`;
caso("frase-de-34", { trocas: { [I]: longa(34) } }, { exit: 0, semProblema: ["frase com"], nota: "uma frase de 34 palavras passa" });
caso("frase-de-35", { trocas: { [I]: longa(35) } }, { exit: 1, problema: ["frase com 35 palavras (teto 34"], so: true, nota: "uma frase de 35 palavras reprova" });
caso("frase-de-31-de-antes", { trocas: { [I]: longa(31) } }, { exit: 0, semProblema: ["frase com"],
  nota: "o teto de antes (30) já não reprova: 31 passa" });

// ---- o título ---------------------------------------------------------------------------------------------------------
secao('O título ("Why This Stretch of California Is as Empty as Wyoming") nas 3 primeiras frases');
caso("titulo-sem-wyoming", { gancho: { 2: "But the census district around this bridge counted fewer than 1,500, about as empty as a desert." } },
  { exit: 1, problema: ['"Wyoming" não aparece'], so: true });
caso("titulo-wyoming-na-4a", { gancho: { 2: "But the census district around this bridge counted fewer than 1,500, about as empty as a desert.",
  3: "So why is this stretch of California as empty as Wyoming?" } },
  { exit: 1, problema: ['"Wyoming" não aparece'], so: true, nota: '"Wyoming" na 4ª frase já não paga' });
caso("titulo-sem-california", { gancho: { 0: "This is Big Sur, a coast where the mountains climb 5,200 feet.",
  1: "The two metro areas to the north and south hold more than 17 million people." } },
  { exit: 1, problema: ['"California", "Los Angeles" ou "San Francisco" não aparece'], so: true,
    nota: 'sem a marca da Califórnia nas 3 primeiras (a 4ª diz "California": não conta)' });
caso("titulo-so-california", { gancho: { 0: "This is Big Sur, on the coast of California, where the mountains climb 5,200 feet.",
  1: "The two metro areas to the north and south hold more than 17 million people." } },
  { exit: 0, semProblema: ['"California", "Los Angeles"'], nota: '"California" sozinho paga' });
caso("titulo-so-san-francisco", { gancho: { 0: "This is Big Sur, south of San Francisco, where the mountains climb 5,200 feet.",
  1: "The two metro areas to the north and south hold more than 17 million people." } },
  { exit: 0, semProblema: ['"California", "Los Angeles"'], nota: '"San Francisco" sozinho paga' });
caso("titulo-sem-empty", { gancho: { 2: "But the census district around this bridge counted fewer than 1,500, like Wyoming." } },
  { exit: 0, alerta: ['"empty" não aparece nas 3 primeiras'], semProblema: ['"Wyoming"'],
    nota: 'sem "empty" nas 3 primeiras (a 4ª o diz: não conta): alerta, não reprova' });

// ---- a primeira frase -------------------------------------------------------------------------------------------------
secao('A primeira frase ("Big Sur" e número)');
caso("primeira-sem-big-sur", { gancho: { 0: "This coast lies between Los Angeles and San Francisco, where the mountains climb 5,200 feet." } },
  { exit: 1, problema: ['a primeira frase não diz "Big Sur"'], so: true });
caso("primeira-big-sur-na-2a", { gancho: { 0: "This coast lies between Los Angeles and San Francisco, where the mountains climb 5,200 feet.",
  1: "It is called Big Sur, and those two metro areas hold more than 17 million people." } },
  { exit: 1, problema: ['a primeira frase não diz "Big Sur"'], so: true, nota: '"Big Sur" na 2ª frase não conta' });
caso("primeira-sem-numero", { gancho: { 0: "This is Big Sur, between Los Angeles and San Francisco." } },
  { exit: 0, alerta: ["a primeira frase não tem número"], semProblema: ["a primeira frase"],
    nota: 'sem número só alerta: a regra aceita "um número ou uma imagem" (a ponte de Bixby)' });
caso("primeira-numero-por-extenso", { gancho: { 0: "This is Big Sur, between Los Angeles and San Francisco, where the mountains climb five thousand feet." } },
  { exit: 0, semAlerta: ["a primeira frase não tem número"], nota: '"five thousand" por extenso conta como número' });
caso("primeira-so-one", { gancho: { 0: "This is Big Sur, one of the coasts between Los Angeles and San Francisco." } },
  { exit: 0, alerta: ["a primeira frase não tem número"], nota: '"one of" não é número: alerta' });

// ---- o "não se diz" de Big Sur ----------------------------------------------------------------------------------------
secao('O "não se diz" de Big Sur (reprova)');
reprova("zero-pessoas", "Some videos say this coast has zero people.");
reprova("ninguem-mora", "Nobody lives on the ridge above the bridge.");
reprova("ninguem-mora", "No one lives in the canyons.");
passa("ninguem-mora", "Almost nobody lives on the ridge above the bridge.", '"almost" na frase: passa (o "nobody" do universal ainda alerta)');
reprova("cidade-big-sur", "The town of Big Sur has a gas station and a post office.");
reprova("cidade-big-sur", "Big Sur's population is tiny.");
reprova("cidade-big-sur", "The population of Big Sur would fit in one school.");
passa("cidade-big-sur", "The census district of Big Sur covers the north of the coast.");
reprova("milhas-com-1500", "Fewer than 1,500 people live along these 70 miles of coast.");
reprova("milhas-com-1500", "The census district counted fewer than 1,500 people on a seventy-mile coast.");
reprova("milhas-com-1500", "Ninety miles of coast hold about fifteen hundred people.");
passa("milhas-com-1500", ["The county's plan covers more than 70 miles of coast.", "The census district counted fewer than 1,500 people."],
  "as 70 milhas e o 1.500 em frases separadas: passa (a montagem é do verificador)");
passa("milhas-com-1500", "The road climbs 1,500 feet in less than 70 miles.", '"1,500 feet" é medida, não gente: passa');
reprova("duas-maiores", "Los Angeles and San Francisco are the two largest metro areas in the state.");
reprova("duas-maiores", "They rank among the biggest cities in the country.");
reprova("duas-maiores", "Los Angeles is the largest metro area on the coast.");
passa("duas-maiores", "Los Angeles and San Francisco hold more than 17 million people.");
reprova("superlativo-sem-dono", "Big Sur is the emptiest coast in California.");
reprova("superlativo-sem-dono", "Bixby Bridge is the most photographed bridge on the coast.");
reprova("superlativo-sem-dono", "It may be the most famous drive in the state.");
reprova("unica-estrada", "Highway 1 is the only road along this coast.");
reprova("unica-estrada", "For the ranches, the boat was the only way in.");
passa("unica-estrada", "Highway 1 is the coast road.");
reprova("estrada-fechada", "The road is closed at Paul's Slide.");
reprova("estrada-fechada", "Highway 1 remains closed south of the bridge.");
reprova("estrada-fechada", "Parts of the highway are still closed.");
passa("estrada-fechada", "The road was closed for almost three years.");
reprova("mansoes", "A billionaire bought a ranch on the ridge.");
reprova("mansoes", "Mansions line the cliffs.");
reprova("mais-rigido", "It is the strictest coastal plan in the country.");
reprova("mais-rigido", "The rules are among the toughest anywhere.");
reprova("clima", "The coast has perfect weather.");
reprova("clima", "It never gets cold on this coast.");
reprova("fogo-destruiu", "The fire destroyed dozens of homes.");
reprova("fogo-destruiu", "No houses were destroyed.", '"No houses were destroyed": a página não mostra destruídas, e "nenhuma" também afirma');
passa("fogo-destruiu", "The slide destroyed a stretch of the road.", '"destroyed" sem fogo nem casa: passa');
passa("fogo-destruiu", "The fire threatened hundreds of homes and buildings.");
reprova("terceiro-maior", "It was the third-largest fire in the state that year.");
reprova("terceiro-maior", "The Timber Fire was the third largest of the season.");
reprova("anos-1880", "The coast holds about the same as in the 1880s.");
reprova("anos-1880", "The population hasn't grown.");
reprova("anos-1880", "Fewer people live in the district than in the 1880s.");
reprova("anos-1880", "By the 1880s, nearly a thousand people lived on this coast, about as many as today.");
passa("anos-1880", "By the 1880s, nearly a thousand people lived on this coast, according to the county's 1986 plan.");
passa("anos-1880", "The burned slope hasn't grown back yet.", '"hasn\'t grown back" é a encosta, não a gente: passa');
// as regras do Atlântico saíram: o que o portão do vídeo 4 reprovava passa aqui
passa("marianas-no-atlantico", "Most people think the Mariana Trench is in the Atlantic.", "a regra do vídeo 4 saiu: passa");
passa("1918-causa", "The Puerto Rico Trench caused the 1918 tsunami.", "a regra do vídeo 4 saiu: passa", { semAlerta: ["[1918-fossa]"] });

// ---- os alertas de Big Sur --------------------------------------------------------------------------------------------
secao("Os alertas de Big Sur (nunca reprovam)");
alerta("presos", "The road was built by prisoners from San Quentin.");
alerta("presos", "Convicts built the road.");
passa("presos", "Prisoners from three San Quentin camps worked on the road, paid 35 cents a day.", "com a medida: sem alerta");
alerta("proibido-construir", "On this coast, you can't build anything.");
alerta("proibido-construir", "Building is banned along the highway.");
passa("proibido-construir", "The county's 1986 plan bans new building that can be seen from Highway 1.", 'a forma da Sala: sem alerta (nem [regra-hoje])', { semAlerta: ["[regra-hoje]"] });
alerta("esselen", "The Esselen lived in these mountains.");
alerta("falha", "An earthquake shook the coast.");
alerta("falha", "The San Andreas fault runs far to the east.");
alerta("cone-peak", "Cone Peak rises inside the census district.");
passa("cone-peak", "Cone Peak rises above this coast.");
alerta("regra-hoje", "That rule from the 1986 plan still holds.");
alerta("regra-hoje", "The plan has guarded the views since 1986.");
alerta("veraneio", "Many of the empty homes are vacation homes.");
alerta("veraneio", "Some are second homes for city families.");
alerta("visitantes", "About 3 million visitors drive this road every year.");
alerta("visitantes", "Millions of tourists pass the bridge.");
passa("visitantes", "In 1986, the county counted about 2.9 million visitors a year.", 'com "1986" na frase: sem alerta');
alerta("big-sur-tem", "Big Sur has fewer than 1,500 people.");
alerta("big-sur-tem", "Big Sur is home to fewer than 1,500 full-time residents.");
passa("big-sur-tem", "Big Sur has two state parks.", "número que não é de gente: sem alerta");
alerta("1500-sem-distrito", "Fewer than 1,500 people live on this coast.");
passa("1500-sem-distrito", ["The census district is large.", "It counted fewer than 1,500 people."], '"district" na frase anterior: sem alerta');
passa("1500-sem-distrito", "The road climbs 1,500 feet.", '"1,500 feet" é medida: sem alerta');
alerta("wyoming-ano", "In 2025, Wyoming had about six people per square mile.");
passa("wyoming-ano", "In 2020, Wyoming had about six people per square mile.");
// as palavras de ALERTA: as que ficam do molde alertam; as só do Atlântico saíram
const alertaPalavra = (nome, frase, re) => caso(`palavra-${nome}`, { trocas: { [I]: frase } }, { exit: 0, alerta: [`conferir ${re}`], nota: `"${frase}"` });
alertaPalavra("everyone", "Everyone on the crew agreed on the count.", String.raw`/\beveryone\b/i`);
alertaPalavra("nobody", "Nobody on the crew questioned the count.", String.raw`/\bnobody\b/i`);
alertaPalavra("never", "The crew never questioned the count.", String.raw`/\bnever\b/i`);
alertaPalavra("first", "The first count came back at dawn.", String.raw`/\bfirst\b/i`);
alertaPalavra("last", "Last summer, the crew counted the posts again.", String.raw`/\blast\b/i`);
alertaPalavra("always", "The crew always checked the count twice.", String.raw`/\balways\b/i`);
alertaPalavra("mystery", "The empty coast is no mystery.", String.raw`/\bmyster(y|ies|ious)\b/i`);
alertaPalavra("secret", "The coast keeps no secret from the map.", String.raw`/\bsecrets?\b/i`);
alertaPalavra("still", "The ranches still sell beef.", String.raw`/\b(still|today|now|currently)\b/i`);
alertaPalavra("here", "Out here, the nights are dark.", String.raw`/\bhere\b/i`);
alertaPalavra("this-line", "Follow this line to the coast.", String.raw`/\bthis line\b/i`);
caso("palavras-do-atlantico-sairam", { trocas: { [I]: ["The Milwaukee Deep and the Brownson Deep are far away.", "A megaquake is a word for a gravity anomaly."] } },
  { exit: 0, semAlerta: ["Milwaukee", "Brownson", "anomal", "mega"], nota: '"Milwaukee Deep", "Brownson Deep", "anomaly" e "megaquake": sem alerta (saíram)' });

// ---- o gancho A da pauta §8 -------------------------------------------------------------------------------------------
secao("O gancho A da pauta §8");
const GANCHO_A = [
  "This is Big Sur, between Los Angeles and San Francisco.",
  "Those two metro areas hold more than 17 million people.",
  "The census district around this bridge counted fewer than 1,500, as empty as Wyoming.",
  "Why?",
  "It isn't the weather.",
  "Monterey County's own plan calls the climate here mild.",
  "And it isn't that nobody ever came.",
  "By the 1880s, nearly a thousand people lived on this coast.",
  "The answer is a mountain range that drops straight into the sea, a road that keeps falling with it, and a rule in a 1986 county plan.",
  "You're at Alpha Point, and this is where the story of the coast that stayed empty begins.",
];
caso("gancho-a-como-esta", { gancho: GANCHO_A }, { exit: 1, problema: ['o "But" do gancho'], so: true,
  alerta: ["a primeira frase não tem número", String.raw`conferir /\bhere\b/i`, String.raw`conferir /\bnobody\b/i`],
  nota: 'o gancho A, como está na pauta, só reprova pelo "But" (não tem frase que abra com "But"), e alerta a 1ª frase sem número, o "here" e o "nobody"' });
caso("gancho-a-com-but", { gancho: GANCHO_A.map((f, i) => (i === 2 ? `But the census district around this bridge counted fewer than 1,500, as empty as Wyoming.` : f)) },
  { exit: 0, semProblema: ['o "But" do gancho'], nota: 'com "But the census district…" na 3ª frase, passa' });

// ---- o fecho (do molde) -----------------------------------------------------------------------------------------------
secao("O fecho (alerta; fica do molde)");
caso("fecho-repete-pergunta", { trocas: { [N - 1]: "The bridge shows why this stretch of California so rarely fills up." } },
  { exit: 0, alerta: ["o fecho repete a pergunta do gancho"], nota: '"this stretch of california so" (5 palavras da pergunta) na última frase' });
caso("fecho-4-palavras", { trocas: { [N - 1]: "The ranger walked this stretch of California at dawn." } },
  { exit: 0, semAlerta: ["o fecho repete a pergunta do gancho"], nota: '"this stretch of california": 4 palavras da pergunta, sem alerta' });
caso("fecho-pergunta-fora-das-8", { trocas: { [N - 9]: "The bridge shows why this stretch of California so rarely fills up." } },
  { exit: 0, semAlerta: ["o fecho repete a pergunta do gancho"], nota: "a mesma frase na 9ª antes do fim: sem alerta" });
caso("fecho-em-lista", { trocas: { [N - 3]: "First, the mountains rose from the sea.", [N - 2]: "Then the road came, slowly.",
  [N - 1]: "Finally, the county wrote its plan." } },
  { exit: 0, alerta: ["o fecho em lista: 3 das 8"], nota: '"First…", "Then…", "Finally…" nas 3 últimas' });
caso("fecho-2-da-lista", { trocas: { [N - 3]: "First, the mountains rose from the sea.", [N - 2]: "Then the road came, slowly." } },
  { exit: 0, semAlerta: ["o fecho em lista"], nota: "duas aberturas de lista: sem alerta" });
caso("fecho-em-lista-a-an", { trocas: { [N - 6]: "A ridge rose behind the coast.", [N - 4]: "A slab of hillside slid onto the road.",
  [N - 1]: "An old trail climbed the ridge." } },
  { exit: 0, alerta: ["o fecho em lista: 3 das 8"], nota: '"A …", "A …", "An …" entre as 8 últimas' });
caso("fecho-pergunta-curta", { gancho: { 3: "Why so empty?" }, trocas: { [N - 1]: "The rangers wonder why so empty a coast sits between two cities." } },
  { exit: 0, alerta: ["o fecho repete a pergunta do gancho"], nota: 'a pergunta do gancho com 3 palavras ("Why so empty?"): ela inteira no fim alerta' });

// ---- o autoplágio com o Atlântico -------------------------------------------------------------------------------------
secao("O autoplágio compara também com o roteiro do vídeo 4");
caso("autoplagio-atlantico", { trocas: { [I]: "In 1964, people went down into the trench themselves." } },
  { exit: 0, alerta: [`autoplágio (6+ palavras iguais a ${ROTEIRO_ATL})`], nota: "uma frase do roteiro do Atlântico" });

// ---- o portão novo no roteiro do vídeo 4, e o sha nos dois portões ----------------------------------------------------
secao("O roteiro do vídeo 4 nos dois portões, e o sha");
const novo = rodar([ROTEIRO_ATL]), atl = rodar([ROTEIRO_ATL], GATE_ATL);
if (novo.laudo && atl.laudo) {
  const esperados = [`palavras: ${atl.laudo.palavras}, abaixo de 2250`, '"Wyoming" não aparece',
    '"California", "Los Angeles" ou "San Francisco" não aparece', 'a primeira frase não diz "Big Sur"'];
  const P = novo.laudo.problemas;
  conferir(novo.exit === 1 && esperados.every((s) => P.some((p) => p.includes(s))) && P.length === esperados.length,
    `o portão novo reprova o roteiro do vídeo 4 só pela faixa (${atl.laudo.palavras} palavras), pelo título (2) e pela primeira frase sem "Big Sur" (1): exit ${novo.exit}, ${P.length} problema(s): ${P.map((p) => p.slice(0, 60)).join(" | ")}`);
  conferir(novo.laudo.alertas.some((a) => a.includes('"empty" não aparece')) && !novo.laudo.alertas.some((a) => a.includes("a primeira frase não tem número")),
    'e alerta o "empty" fora das 3 primeiras (a 1ª frase dele tem número, o 83: sem esse alerta)');
  conferir(atl.exit === 0, `o portão do vídeo 4, no mesmo texto: exit ${atl.exit} (${atl.laudo.veredito})`);
  conferir(isDeepStrictEqual(novo.laudo.taxas, atl.laudo.taxas) && novo.laudo.taxas_palavras_contadas === atl.laudo.taxas_palavras_contadas,
    `as taxas saem iguais nos dois portões (${Object.entries(novo.laudo.taxas).map(([k, t]) => `${k} ${t.valor}`).join(", ")}; ${novo.laudo.taxas_palavras_contadas} palavras contadas)`);
  conferir(novo.laudo.sha256 === atl.laudo.sha256, `o sha do roteiro do vídeo 4 é o mesmo nos dois portões (${novo.laudo.sha256.slice(0, 12)})`);
  conferir(["palavras", "paragrafos", "frases", "media_palavras_por_frase", "maior_frase"].every((k) => novo.laudo[k] === atl.laudo[k])
    && isDeepStrictEqual(novo.laudo.gancho, atl.laudo.gancho), "palavras, parágrafos, frases, média, maior frase e gancho iguais");
  conferir(isDeepStrictEqual(novo.laudo.autoplagio, atl.laudo.autoplagio),
    `o autoplágio é o mesmo nos dois (o novo compara também com o próprio Atlântico, que sai da conta por ser o arquivo medido): ${novo.laudo.autoplagio.length} trecho(s)`);
  const fecho = (l) => l.alertas.filter((a) => a.startsWith("o fecho"));
  conferir(isDeepStrictEqual(fecho(novo.laudo), fecho(atl.laudo)), `os alertas do fecho são os mesmos nos dois (${fecho(novo.laudo).length})`);
} else conferir(false, `os portões não deram laudo no roteiro do vídeo 4 (${novo.exit}, ${atl.exit})`);
// o sha de um texto com BOM, CRLF, título, citação e comentário de várias linhas, nos dois portões
const ARQ_SHA = join(CASOS, "sha-bom-crlf", "roteiro-narrador.md");
gravar(ARQ_SHA, "﻿" + montar().replace("<!-- gancho -->", "<!-- gancho\nem duas linhas -->").replace(/\n/g, "\r\n"));
const s1 = rodar([ARQ_SHA]), s2 = rodar([ARQ_SHA], GATE_ATL), sBase = rodar([join(CASOS, "001-base", "roteiro-narrador.md")]);
conferir(s1.laudo && s2.laudo && s1.laudo.sha256 === s2.laudo.sha256 && s1.laudo.sha256 === sBase.laudo?.sha256,
  `o sha de um texto com BOM, CRLF e comentário de duas linhas é o mesmo nos dois portões e o da base (${s1.laudo?.sha256.slice(0, 12)})`);

// ---- o portao-fatos cruza o sha com o portão novo ---------------------------------------------------------------------
secao("O ferramentas/portao-fatos.mjs com o portão novo");
const RAIZ = join(PASTA, "raiz"), BASE_R = join(RAIZ, "roteiros", "big-sur");
gravar(join(BASE_R, "roteiro-narrador.md"), montar());
mkdirSync(join(BASE_R, "_ferramentas"), { recursive: true });
copyFileSync(GATE, join(BASE_R, "_ferramentas", "gate.mjs"));
gravar(join(BASE_R, "qc-roteiro", "fatos.laudo.md"), `# Laudo de teste\n\nRevisão julgada: \`${sBase.laudo?.sha256.slice(0, 12)}\`\n\nCOBERTURA: 0 de 0\n\nVEREDITO: RESSALVA\n`);
gravar(join(BASE_R, "qc-roteiro", "fatos-tabela.json"), "[]\n");
const pf = spawnSync(process.execPath, ["ferramentas/portao-fatos.mjs", "big-sur", "--json", `--raiz=${resolve(RAIZ)}`], { encoding: "utf8" });
let pfs = null; try { pfs = JSON.parse(pf.stdout); } catch {}
conferir(pf.status !== 2 && pfs?.gate?.igual === true && pfs.sha256 === sBase.laudo?.sha256,
  `o portao-fatos roda a cópia do portão novo (numa raiz de teste) e o sha cruza: exit ${pf.status} (o piso reprova a tabela vazia, de propósito), gate.igual = ${pfs?.gate?.igual}`);

// ---- o resto do molde: o arquivo padrão, as opções --------------------------------------------------------------------
secao("O arquivo padrão e as opções do molde");
const PADRAO = "roteiros/big-sur/roteiro-narrador.md";
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
const cab = `# Prova do portão do vídeo 5, Big Sur (${GATE})\n\n${total - falhas} de ${total} checagens como o esperado${falhas ? ` · ${falhas} FALHARAM` : ""}.\n` +
  `A base: ${base.laudo?.palavras} palavras, ${N} frases de corpo; os casos em ${CASOS}/.`;
const saida = `${cab}\n${linhas.join("\n")}\n`;
writeFileSync(join(PASTA, "prova-saida.md"), saida, "utf8");
console.log(saida);
process.exit(falhas ? 1 : 0);
