// gate-provar.mjs — a prova do portão do vídeo 5 (roteiros/atlantico-fundo/_ferramentas/gate.mjs).
//   node roteiros/atlantico-fundo/_ferramentas/gate-provar.mjs      (cwd = raiz do canal; exit 0 = tudo como o esperado, 1 = alguma
//                                                                    checagem falhou)
// Grava roteiros sintéticos em out/_tmp/gate-atlantico-fundo/casos/ (fora do git), roda o portão em cada um e confere a saída:
//   - a base passa (o gancho com a 1ª frase certa, os dois títulos pagos, o "But", a pergunta e a assinatura; o corpo até a
//     faixa de palavras), sem nenhum alerta;
//   - as regras novas (os títulos, a primeira frase, o "não se diz"): um caso que reprova para cada uma e um que passa ao lado;
//   - os alertas novos (o universal, os nomes, 1918, os "200 peixes", as duas medidas, o tom, o presente, os que vêm do "não se
//     diz") e o fecho (a pergunta repetida e a lista), cada um com o seu caso, e o que fica ao lado sem alerta;
//   - o autoplágio contra o roteiro do Peru;
//   - o portão novo no roteiro do Peru: reprova pelos títulos e pela primeira frase, e as taxas e o sha saem iguais aos do portão
//     do Peru no mesmo texto; e o sha de um texto (com BOM, CRLF, título, citação e comentário) igual nos dois portões;
//   - o ferramentas/portao-fatos.mjs cruza o sha com o portão novo (numa raiz de teste) sem divergir;
//   - o arquivo padrão, a opção desconhecida, o --onde e o --derivados.
// Sem rede, sem crédito. Grava só em out/_tmp/gate-atlantico-fundo/. A saída também vai a out/_tmp/gate-atlantico-fundo/prova-saida.md.
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync, rmSync, existsSync, copyFileSync } from "node:fs";
import { posix, resolve } from "node:path";
const { join, dirname } = posix;   // os caminhos com "/", também no Windows
import { isDeepStrictEqual } from "node:util";

const GATE = "roteiros/atlantico-fundo/_ferramentas/gate.mjs";
const GATE_PERU = "roteiros/peru-agua/_ferramentas/gate.mjs";
const ROTEIRO_PERU = "roteiros/peru-agua/roteiro-narrador.md";
const PASTA = "out/_tmp/gate-atlantico-fundo";
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
  "About 83 miles off the coast of Puerto Rico, a U.S. island, lies the deepest point of the Atlantic Ocean.",
  "But the ocean floor there sits more than five miles down.",
  "Stand Mount Everest on the bottom, and its top 1,500 feet would poke out of the water.",
  "When you think of the deepest ocean, you think of the Mariana Trench, in the Pacific.",
  "So why is the bottom of the Atlantic so close to a U.S. island?",
  "You're at Alpha Point, and this is where the story of the Atlantic's deepest trench begins.",
];
// o corpo: frases neutras, sem nenhuma palavra de alerta, nenhuma abrindo com "A "/"An "/"First"/"Then" (o fecho em lista) e
// sem nada da pergunta do gancho; geradas por sorteio com semente fixa, todas diferentes
let semente = 11;
const sorte = () => (semente = (semente * 1103515245 + 12345) % 2147483648) / 2147483648;
const pega = (l) => l[Math.floor(sorte() * l.length)];
const SUJ = ["The survey ship", "The deck crew", "The sonar operator", "The chief mate", "The cook from Ponce", "The winch driver",
  "The night watch", "The ship's doctor", "The radio officer", "The bosun", "The galley hand", "The data clerk"];
const VERBO = ["logged", "checked", "cleaned", "stacked", "measured", "labeled", "repaired", "counted", "sorted", "painted"];
const OBJ = ["the cable drums", "nine sample jars", "the salinity charts", "a box of spare fuses", "the bridge windows",
  "the winch brakes", "seven coils of rope", "the weather notes", "the ballast logs", "the pressure housings"];
const RABO = ["before the breakfast bell", "beside the aft crane", "under a grey sky", "after the evening meal",
  "near the starboard rail", "with a borrowed pen", "for the cruise report", "on a windy Thursday", "below the radar mast",
  "between two squalls"];
const usadas = new Set(), CORPO = [];
while (contar([...GANCHO, ...CORPO].join(" ")) < 2040) {
  const f = `${pega(SUJ)} ${pega(VERBO)} ${pega(OBJ)} ${pega(RABO)}.`;
  if (!usadas.has(f)) { usadas.add(f); CORPO.push(f); }
}
const N = CORPO.length;
// monta o roteiro: título, citação e comentário (que não são falados), o gancho num parágrafo, o corpo em parágrafos de 5.
// gancho: {índice: frase nova}; trocas: {índice do corpo: frase nova, ou lista de frases}
function montar({ gancho = {}, trocas = {} } = {}) {
  const g = GANCHO.map((f, i) => gancho[i] ?? f);
  const c = CORPO.flatMap((f, i) => (i in trocas ? [].concat(trocas[i]) : [f]));
  const pars = [g.join(" ")];
  for (let i = 0; i < c.length; i += 5) pars.push(c.slice(i, i + 5).join(" "));
  return `# The Deepest Point in the Atlantic Ocean\n\n> Roteiro de teste, gerado por gate-provar.mjs.\n\n<!-- gancho -->\n\n${pars.join("\n\n")}\n`;
}
let nCaso = 0;
function caso(nome, opcoes, esperado) {
  const arq = join(CASOS, `${String(++nCaso).padStart(2, "0")}-${nome}`, "roteiro-narrador.md");
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
const reprova = (id, frase, nota) => caso(id.replace(/[^a-z0-9-]/g, "") + "-reprova", { trocas: { [I]: frase } },
  { exit: 1, problema: [`[${id}]`], so: true, nota: nota ?? `"${[].concat(frase).join(" ")}"` });
const passa = (id, frase, nota, extra = {}) => caso(id.replace(/[^a-z0-9-]/g, "") + "-passa", { trocas: { [I]: frase } },
  { exit: 0, semProblema: [`[${id}]`], semAlerta: [`[${id}]`], nota: nota ?? `"${[].concat(frase).join(" ")}"`, ...extra });
const alerta = (id, frase, nota) => caso(id.replace(/[^a-z0-9-]/g, "") + "-alerta", { trocas: { [I]: frase } },
  { exit: 0, semProblema: [`[${id}]`], alerta: [`[${id}]`], nota: nota ?? `"${[].concat(frase).join(" ")}"` });

secao("A base");
const base = caso("base", {}, { exit: 0 });
if (base.laudo) {
  const L = base.laudo;
  conferir(L.palavras >= 1950 && L.palavras <= 2150, `a base tem ${L.palavras} palavras (faixa 1.950–2.150), ${L.frases} frases, média ${L.media_palavras_por_frase}, maior ${L.maior_frase}; o gancho tem ${L.gancho.palavras_ate_assinatura} palavras e o "But" na palavra ${L.gancho.but_na_palavra}`);
  conferir(L.alertas.length === 0, `a base não tem nenhum alerta (${JSON.stringify(L.alertas).slice(0, 300)})`);
  conferir(L.autoplagio.length === 0, "a base não tem autoplágio com os quatro roteiros anteriores (Juneau, Los Angeles, Zona e Peru)");
  conferir(Object.values(L.taxas).every((t) => !t.alerta), "a base não dispara nenhuma taxa");
}

// ---- 3: os títulos --------------------------------------------------------------------------------------------------
secao("Regra 3: os dois títulos pagos nas 3 primeiras frases");
caso("titulo-sem-deepest", { gancho: { 0: "About 83 miles off the coast of Puerto Rico, a U.S. island, the Atlantic Ocean reaches its lowest point." } },
  { exit: 1, problema: ['"deepest" não aparece'], so: true });
caso("titulo-sem-atlantic", { gancho: { 0: "About 83 miles off the coast of Puerto Rico, a U.S. island, lies the deepest point of this ocean." } },
  { exit: 1, problema: ['"Atlantic" não aparece'], so: true });
caso("titulo-sem-83-milhas", { gancho: { 0: "Off the coast of Puerto Rico, a U.S. island, lies the deepest point of the Atlantic Ocean, 134 kilometers out." } },
  { exit: 1, problema: ['"83 miles" (ou "eighty-three miles") não aparece'], so: true });
caso("titulo-83-por-extenso", { gancho: { 0: "About eighty-three miles off the coast of Puerto Rico, a U.S. island, lies the deepest point of the Atlantic Ocean." } },
  { exit: 0, semProblema: ['"83 miles"'], nota: '"About eighty-three miles…" passa' });
caso("titulo-83-na-3a-frase", { gancho: { 0: "Off Puerto Rico, a U.S. island, lies the deepest point of the Atlantic Ocean, more than five miles down.",
  1: "But the spot is not far from land.", 2: "Its distance to the nearest coast is about 83 miles." } },
  { exit: 0, semProblema: ['"83 miles"'], nota: "o 83 na 3ª frase ainda paga o título" });
caso("titulo-83-na-4a-frase", { gancho: { 0: "Off Puerto Rico, a U.S. island, lies the deepest point of the Atlantic Ocean, more than five miles down.",
  1: "But the spot is not far from land.", 2: "Stand Mount Everest on the bottom, and its top 1,500 feet would poke out of the water.",
  3: "Its distance to the nearest coast is about 83 miles, in the Atlantic." } },
  { exit: 1, problema: ['"83 miles" (ou "eighty-three miles") não aparece'], so: true, nota: "o 83 na 4ª frase já não paga" });
caso("titulo-sem-ilha", { gancho: { 0: "About 83 miles off a U.S. coast lies the deepest point of the Atlantic Ocean." } },
  { exit: 1, problema: ['"Puerto Rico" ou "island" não aparece nas 3 primeiras', "a primeira frase não diz o lugar"], so: true,
    nota: "sem Porto Rico nem ilha nas 3 primeiras: reprova aqui e na 1ª frase" });
caso("titulo-sem-marca-eua", { gancho: { 0: "About 83 miles off the coast of Puerto Rico, an island, lies the deepest point of the Atlantic Ocean." } },
  { exit: 0, alerta: ["a marca dos EUA"], nota: "sem U.S. nas 3 primeiras: alerta, não reprova" });
caso("titulo-united-states", { gancho: { 0: "About 83 miles off Puerto Rico, an island of the United States, lies the deepest point of the Atlantic Ocean." } },
  { exit: 0, semAlerta: ["a marca dos EUA"], nota: '"United States" conta como a marca' });

// ---- 4: a primeira frase --------------------------------------------------------------------------------------------
secao("Regra 4: a primeira frase (número e lugar)");
caso("primeira-sem-numero", { gancho: { 0: "The deepest point of the Atlantic Ocean lies off the coast of Puerto Rico, a U.S. island.",
  1: "But the spot is about 83 miles from shore, and the floor sits five miles down." } },
  { exit: 0, alerta: ["a primeira frase não tem número"], semProblema: ["a primeira frase"],
    nota: 'sem número só alerta: a regra aceita "um número ou uma imagem"' });
caso("primeira-numero-por-extenso", { gancho: { 0: "The deepest point of the Atlantic Ocean lies more than five miles down, off Puerto Rico, a U.S. island.",
  1: "But the spot is only about 83 miles from shore." } },
  { exit: 0, semProblema: ["a primeira frase"], nota: '"five" por extenso conta como número' });
caso("primeira-so-one", { gancho: { 0: "One of the deepest points of the Atlantic Ocean lies off the coast of Puerto Rico, a U.S. island.",
  1: "But the spot is about 83 miles from shore, and the floor sits five miles down." } },
  { exit: 0, alerta: ["a primeira frase não tem número"], semProblema: ["a primeira frase"], nota: '"One of" não é número: alerta' });
caso("primeira-sem-lugar", { gancho: { 0: "About 83 miles off a U.S. coast lies the deepest point of the Atlantic Ocean.",
  1: "But the closest land is the island of Puerto Rico, and the floor sits five miles down." } },
  { exit: 1, problema: ["a primeira frase não diz o lugar"], so: true, alerta: ['a primeira frase não diz "Puerto Rico"'] });
caso("primeira-so-ilha", { gancho: { 0: "About 83 miles off this U.S. island lies the deepest point of the Atlantic Ocean." } },
  { exit: 0, alerta: ['a primeira frase não diz "Puerto Rico"'], semProblema: ["a primeira frase"],
    nota: '"this U.S. island" passa com alerta (e o ponto do "U.S." não parte a frase)' });

// ---- 5: o "não se diz" ----------------------------------------------------------------------------------------------
secao('Regra 5: o "não se diz" do vídeo 5');
reprova("austral", "The Southern Ocean, south of 60 degrees, was never ratified by the IHO.");
reprova("austral", "By international law, the Southern Ocean begins at the 60th parallel.");
passa("austral", "In 2023, the IHO recognized the Southern Ocean, which begins at the 60°S line.");
alerta("austral", ["The Southern Ocean starts at the 60°S line.", "That line was never ratified."], "a negação na frase seguinte: alerta");
reprova("primeiro-no-fundo", "In 2018, Victor Vescovo became the first human on the bottom of the Atlantic.");
reprova("primeiro-no-fundo", "He was the first person ever to touch the floor of the trench.");
passa("primeiro-no-fundo", "In 2018, Victor Vescovo became the first person to reach the deepest point of the Atlantic.");
reprova("80-anos", "For almost 80 years, we measured it wrong.");
reprova("80-anos", "The reference books were wrong for eighty years.");
reprova("80-anos", "From 1939 to 2018, the official depth was wrong.");
passa("80-anos", "For decades, the number in the reference books was hundreds of feet too deep.");
reprova("everest", "The trench is deeper than Mount Everest is tall.");
reprova("everest", "Stand Mount Everest on the bottom, and it would vanish beneath the waves.");
passa("everest", "Stand Mount Everest on the bottom, and its top 1,500 feet would still stick out of the water.");
reprova("everest", "Mount Everest would fit inside the trench.");
passa("everest", "Mount Everest wouldn't fit in the deepest part of the Atlantic.");
reprova("everest", "Drop Mount Everest into the trench, and it would be completely submerged.");
alerta("everest", "The Challenger Deep is deeper than Mount Everest is tall.", "dito da Marianas: alerta");
alerta("everest", ["Picture Mount Everest on the floor of the trench.", "It would be swallowed by the sea."], "o Everest por pronome na frase seguinte: alerta");
reprova("soberania", "The South Sandwich Islands are British islands in the far south.");
reprova("soberania", "Those Argentine islands sit on a volcanic arc.");
passa("soberania", "Anegada is in the British Virgin Islands.");
reprova("marianas-no-atlantico", "Most people think the Mariana Trench is in the Atlantic.");
passa("marianas-no-atlantico", ["When you think 'deepest ocean', you think Mariana.", "But that's the Pacific."], "a forma honesta da pauta §3");
reprova("quatro-milhoes", "About four million people live in Puerto Rico and the Virgin Islands.");
reprova("quatro-milhoes", "A quake there would threaten 4 million U.S. citizens.");
passa("quatro-milhoes", "About 3.2 million people live in Puerto Rico, by the 2020 census.");
reprova("21-de-dezembro", "Vescovo reached the bottom on December 21, 2018.");
passa("21-de-dezembro", "Vescovo reached the bottom on December 19, 2018.");
alerta("21-de-dezembro", "Five Deeps announced the dive on December 21, 2018.", "a data do release, dita como release: alerta");
reprova("83-san-juan", "The deepest point lies 83 miles north of San Juan.");
passa("83-san-juan", "The deepest point lies about 83 miles from the coast near Aguadilla.");
reprova("bermudas", "The trench sits at the edge of the Bermuda Triangle.");
// a bancada 1 do roteiro (26/10/2026, à noite): C27 e N50 do dossiê
reprova("lista-decadas", "For decades, the official list of undersea features gave the Atlantic a number about 1,200 feet too deep.");
passa("lista-decadas", "A 2019 study found that the official list of undersea features still had the Atlantic about 1,200 feet too deep.");
passa("lista-decadas", "For decades, sailors told stories about this trench.", "'for decades' sem a lista: passa");
reprova("nenhum-peixe", "It found no fish at all.");
reprova("nenhum-peixe", "In 2019, no fish were seen at the same spot.");
passa("nenhum-peixe", "It saw none of those fish.");
reprova("vescovo-voltou", "The scientists who went back concluded that the fish were sea cucumbers.");
reprova("vescovo-voltou", "In 2019, Vescovo went back to the spot where the French had seen their fish.");
passa("vescovo-voltou", "In a 2020 paper, the scientists concluded that the 'fish' had been sea cucumbers. One of the five authors was Vescovo.");
reprova("especies", "The expedition discovered four new species.");
alerta("especies", "The chief scientist believed four new species were found.", "atribuída: alerta");
reprova("sandwich-mais-funda", "The South Sandwich Trench is deeper than the Puerto Rico Trench.");
reprova("sandwich-mais-funda", "The Atlantic has two deepest points.");
passa("sandwich-mais-funda", "The Meteor Deep is deeper than the Factorian Deep.");
reprova("peixe-caracol-8336", "A snailfish was filmed at 8,336 meters in the Atlantic.");
reprova("1918-causa", "The Puerto Rico Trench caused the 1918 tsunami.");
passa("1918-causa", "The 1918 earthquake struck in the Mona Passage, not in the trench.", undefined, { alerta: ["[1918-fossa]"] });
reprova("vem-ai", "A megaquake is coming to the trench.");
passa("vem-ai", "A large quake there could send a tsunami to the coast.");
reprova("misterio", "Sensors picked up an unknown signal from the deep.");
reprova("misterio", "NOAA is hiding what it found down there.");

// ---- 6: os alertas --------------------------------------------------------------------------------------------------
secao("Regra 6: os alertas do vídeo 5 (nunca reprovam)");
const alertaPalavra = (nome, frase, re) => caso(`alerta-${nome}`, { trocas: { [I]: frase } }, { exit: 0, alerta: [`conferir ${re}`], nota: `"${frase}"` });
alertaPalavra("everyone", "Everyone on deck agreed on the reading.", String.raw`/\beveryone\b/i`);
alertaPalavra("nobody", "Nobody on deck questioned the reading.", String.raw`/\bnobody\b/i`);
alertaPalavra("never", "The crew never questioned the reading.", String.raw`/\bnever\b/i`);
alertaPalavra("first", "The first reading came back at dawn.", String.raw`/\bfirst\b/i`);
alertaPalavra("last", "The last reading came back at dusk.", String.raw`/\blast\b/i`);
alertaPalavra("always", "The crew always checked the reading twice.", String.raw`/\balways\b/i`);
alertaPalavra("milwaukee", "The Navy named the spot the Milwaukee Deep in 1939.", String.raw`/\bMilwaukee Deep\b/i`);
alertaPalavra("brownson", "Some scientists call the spot the Brownson Deep.", String.raw`/\bBrownson Deep\b/i`);
alertaPalavra("anomaly", "The trench has a strong gravity anomaly.", String.raw`/\banomal(y|ies|ous)\b/i`);
alertaPalavra("megaquake", "Some videos warn of a megaquake.", String.raw`/\bmega-?quakes?\b/i`);
alertaPalavra("mystery", "The depth of the trench is no mystery.", String.raw`/\bmyster(y|ies|ious)\b/i`);
alertaPalavra("secret", "The seafloor keeps no secret from the sonar.", String.raw`/\bsecrets?\b/i`);
alertaPalavra("still", "The plates still move past each other.", String.raw`/\b(still|today|now|currently)\b/i`);
alertaPalavra("here", "Out here, the water is very cold.", String.raw`/\bhere\b/i`);
alertaPalavra("this-line", "Follow this line to the coast.", String.raw`/\bthis line\b/i`);
alerta("1918-fossa", "A tsunami from the trench reached Anegada in the Middle Ages.");
alerta("200-peixes", "In 1964, the dive found 200 snailfish.");
passa("200-peixes", "In 1964, the French crew reported 200 snailfish.", '"reported": atribuído, sem alerta');
alerta("duas-medidas", "The sonar found 8,378 meters, and the sub logged 27,480 feet.");
passa("duas-medidas", "The sonar found a depth of about 27,480 feet.", "uma medida só, sem alerta");
alerta("mais-fundo-da-terra", "The Puerto Rico Trench is the deepest place on Earth.", "a frase pode falar da Marianas: alerta, não reprova");
alerta("numero-antigo", "In 1939, the Navy reported 30,246 feet.");
alerta("archimede", "In 1964, the bathyscaphe Archimède reached about 7,300 meters.");
alerta("mortos-1918", "The 1918 tsunami killed 116 people.");
alerta("mediu-errado", "The Navy crew measured it wrong in 1939.", '"measured it wrong" sem os 80 anos: alerta');
alerta("costa-leste", "Some say the East Coast is at risk.");
alerta("peixe-mais-fundo", "A cusk eel from the trench is the deepest fish ever caught.");
alerta("sandwich-soberania", "Britain runs the South Sandwich Islands.");

// ---- 7: o fecho -----------------------------------------------------------------------------------------------------
secao("Regra 7: o fecho (alerta)");
caso("fecho-repete-pergunta", { trocas: { [N - 1]: "That is why the bottom of the Atlantic sits so close to a U.S. island." } },
  { exit: 0, alerta: ["o fecho repete a pergunta do gancho"], nota: '"the bottom of the atlantic" (5 palavras da pergunta) na última frase' });
caso("fecho-4-palavras", { trocas: { [N - 1]: "The bottom of that ocean was quiet that night." } },
  { exit: 0, semAlerta: ["o fecho repete a pergunta do gancho"], nota: '"the bottom of that": 4 palavras da pergunta, sem alerta' });
caso("fecho-pergunta-fora-das-8", { trocas: { [N - 9]: "That is why the bottom of the Atlantic sits so close to a U.S. island." } },
  { exit: 0, semAlerta: ["o fecho repete a pergunta do gancho"], nota: "a mesma frase na 9ª antes do fim: sem alerta" });
caso("fecho-em-lista", { trocas: { [N - 3]: "First, the plates slid past each other.", [N - 2]: "Then the floor sank for millions of years.",
  [N - 1]: "Finally, a sonar found the deepest spot." } },
  { exit: 0, alerta: ["o fecho em lista: 3 das 8"], nota: '"First…", "Then…", "Finally…" nas 3 últimas' });
caso("fecho-2-da-lista", { trocas: { [N - 3]: "First, the plates slid past each other.", [N - 2]: "Then the floor sank for millions of years." } },
  { exit: 0, semAlerta: ["o fecho em lista"], nota: "duas aberturas de lista: sem alerta" });
caso("fecho-em-lista-a-an", { trocas: { [N - 6]: "A ridge rose to the north of the plate.", [N - 4]: "A slab of crust sank to the south.",
  [N - 1]: "An old echo sounder missed the deepest spot." } },
  { exit: 0, alerta: ["o fecho em lista: 3 das 8"], nota: '"A …", "A …", "An …" entre as 8 últimas (o molde "A treaty… A law…" da voz §1)' });
caso("fecho-pergunta-curta", { gancho: { 4: "Why so deep?" }, trocas: { [N - 1]: "The crew asked why so deep a hole sits off the coast." } },
  { exit: 0, alerta: ["o fecho repete a pergunta do gancho"], nota: 'a pergunta do gancho com 3 palavras ("Why so deep?"): ela inteira no fim alerta' });

// ---- 8: o autoplágio com o Peru ---------------------------------------------------------------------------------------
secao("Regra 8: o autoplágio compara também com o roteiro do Peru");
caso("autoplagio-peru", { trocas: { [I]: "Over the South Pacific sits a vast high-pressure system, and under it, the air sinks." } },
  { exit: 0, alerta: [`autoplágio (6+ palavras iguais a ${ROTEIRO_PERU})`], nota: "uma frase do roteiro do Peru" });

// ---- o portão novo no roteiro do Peru, e o sha nos dois portões ------------------------------------------------------
secao("O roteiro do Peru nos dois portões, e o sha");
const novo = rodar([ROTEIRO_PERU]), peru = rodar([ROTEIRO_PERU], GATE_PERU);
if (novo.laudo && peru.laudo) {
  const esperados = ['"deepest" não aparece', '"Atlantic" não aparece', '"83 miles"', '"Puerto Rico" ou "island" não aparece',
    "a primeira frase não diz o lugar"];
  const P = novo.laudo.problemas;
  conferir(novo.exit === 1 && esperados.every((s) => P.some((p) => p.includes(s))) && P.length === esperados.length
    && novo.laudo.alertas.some((a) => a.includes("a primeira frase não tem número")),
    `o portão novo reprova o Peru só pelos títulos (4) e pela primeira frase sem lugar (1), e alerta a primeira frase sem número: exit ${novo.exit}, ${P.length} problema(s)`);
  conferir(peru.exit === 0, `o portão do Peru, no mesmo texto: exit ${peru.exit} (${peru.laudo.veredito})`);
  conferir(isDeepStrictEqual(novo.laudo.taxas, peru.laudo.taxas) && novo.laudo.taxas_palavras_contadas === peru.laudo.taxas_palavras_contadas,
    `as taxas saem iguais nos dois portões (${Object.entries(novo.laudo.taxas).map(([k, t]) => `${k} ${t.valor}`).join(", ")}; ${novo.laudo.taxas_palavras_contadas} palavras contadas)`);
  conferir(novo.laudo.sha256 === peru.laudo.sha256, `o sha do Peru é o mesmo nos dois portões (${novo.laudo.sha256.slice(0, 12)})`);
  conferir(["palavras", "paragrafos", "frases", "media_palavras_por_frase", "maior_frase"].every((k) => novo.laudo[k] === peru.laudo[k])
    && isDeepStrictEqual(novo.laudo.gancho, peru.laudo.gancho), "palavras, parágrafos, frases, média, maior frase e gancho iguais");
  conferir(novo.laudo.alertas.some((a) => a.includes("o fecho repete a pergunta do gancho")) && novo.laudo.alertas.some((a) => a.includes("o fecho em lista")),
    'no fecho do Peru (o molde que a voz §1 manda variar do vídeo 5 em diante), os dois alertas do fecho disparam');
} else conferir(false, `os portões não deram laudo no Peru (${novo.exit}, ${peru.exit})`);
// o sha de um texto com BOM, CRLF, título, citação e comentário de várias linhas, nos dois portões
const ARQ_SHA = join(CASOS, "sha-bom-crlf", "roteiro-narrador.md");
gravar(ARQ_SHA, "﻿" + montar().replace("<!-- gancho -->", "<!-- gancho\nem duas linhas -->").replace(/\n/g, "\r\n"));
const s1 = rodar([ARQ_SHA]), s2 = rodar([ARQ_SHA], GATE_PERU), sBase = rodar([join(CASOS, "01-base", "roteiro-narrador.md")]);
conferir(s1.laudo && s2.laudo && s1.laudo.sha256 === s2.laudo.sha256 && s1.laudo.sha256 === sBase.laudo?.sha256,
  `o sha de um texto com BOM, CRLF e comentário de duas linhas é o mesmo nos dois portões e o da base (${s1.laudo?.sha256.slice(0, 12)})`);

// ---- o portao-fatos cruza o sha com o portão novo --------------------------------------------------------------------
secao("O ferramentas/portao-fatos.mjs com o portão novo");
const RAIZ = join(PASTA, "raiz"), BASE_R = join(RAIZ, "roteiros", "atlantico-fundo");
gravar(join(BASE_R, "roteiro-narrador.md"), montar());
mkdirSync(join(BASE_R, "_ferramentas"), { recursive: true });
copyFileSync(GATE, join(BASE_R, "_ferramentas", "gate.mjs"));
gravar(join(BASE_R, "qc-roteiro", "fatos.laudo.md"), `# Laudo de teste\n\nRevisão julgada: \`${sBase.laudo?.sha256.slice(0, 12)}\`\n\nCOBERTURA: 0 de 0\n\nVEREDITO: RESSALVA\n`);
gravar(join(BASE_R, "qc-roteiro", "fatos-tabela.json"), "[]\n");
const pf = spawnSync(process.execPath, ["ferramentas/portao-fatos.mjs", "atlantico-fundo", "--json", `--raiz=${resolve(RAIZ)}`], { encoding: "utf8" });
let pfs = null; try { pfs = JSON.parse(pf.stdout); } catch {}
conferir(pf.status !== 2 && pfs?.gate?.igual === true && pfs.sha256 === sBase.laudo?.sha256,
  `o portao-fatos roda a cópia do portão novo (numa raiz de teste) e o sha cruza: exit ${pf.status} (o piso reprova a tabela vazia, de propósito), gate.igual = ${pfs?.gate?.igual}`);

// ---- o resto do molde: o arquivo padrão, as opções -------------------------------------------------------------------
secao("O arquivo padrão e as opções do molde");
const PADRAO = "roteiros/atlantico-fundo/roteiro-narrador.md";
const semArg = rodar([]);
if (existsSync(PADRAO)) conferir(semArg.laudo?.arquivo === PADRAO, `sem argumento, o portão mede ${PADRAO} (exit ${semArg.exit})`);
else conferir(semArg.exit === 2 && semArg.stderr.includes(PADRAO), `sem argumento, o portão procura ${PADRAO}, que ainda não existe: exit ${semArg.exit}, "${semArg.stderr.trim()}"`);
const opc = rodar(["--xyz", join(CASOS, "01-base", "roteiro-narrador.md")]);
conferir(opc.exit === 2 && /opção desconhecida: --xyz/.test(opc.stderr), `opção desconhecida: exit ${opc.exit}`);
const onde = rodar(["--onde", join(CASOS, "01-base", "roteiro-narrador.md")]);
conferir(onde.exit === 0 && Array.isArray(onde.laudo?.taxas?.abre_so?.onde) && onde.laudo.taxas.abre_so.onde.length === 1,
  `--onde: cada taxa traz as frases (abre_so: ${JSON.stringify(onde.laudo?.taxas?.abre_so?.onde)})`);
const DIR_D = join(CASOS, "derivados");
gravar(join(DIR_D, "roteiro-narrador.md"), montar());
gravar(join(DIR_D, "qc-roteiro", "fatos.laudo.md"), `> Revisão julgada: \`${sBase.laudo?.sha256.slice(0, 12)}\`\n`);
gravar(join(DIR_D, "roteiro-editor.md"), "Revisão do roteiro: `000000000000`\n");
const der = rodar(["--derivados", join(DIR_D, "roteiro-narrador.md")]);
conferir(der.exit === 1 && der.laudo?.derivados?.length === 2 && der.laudo.derivados_velhos?.length === 1
  && der.laudo.derivados_velhos[0].arquivo.endsWith("roteiro-editor.md"),
  `--derivados: o laudo com o sha de agora passa, o roteiro-editor.md com o sha velho reprova (exit ${der.exit})`);

// ---- a saída ----------------------------------------------------------------------------------------------------------
const cab = `# Prova do portão do vídeo 5 (${GATE})\n\n${total - falhas} de ${total} checagens como o esperado${falhas ? ` · ${falhas} FALHARAM` : ""}.\n` +
  `A base: ${base.laudo?.palavras} palavras, ${N} frases de corpo; os casos em ${CASOS}/.`;
const saida = `${cab}\n${linhas.join("\n")}\n`;
writeFileSync(join(PASTA, "prova-saida.md"), saida, "utf8");
console.log(saida);
process.exit(falhas ? 1 : 0);
