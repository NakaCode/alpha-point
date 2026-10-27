// gate.mjs — o portão determinístico do roteiro do vídeo 5 (o ponto mais fundo do Atlântico, na Fossa de Porto Rico; slug
// atlantico-fundo), antes da bancada e depois de cada troca. Mede o texto de roteiros/atlantico-fundo/roteiro-narrador.md contra
// as regras que se contam (marca/voz.md §1 e §2, marca/embalagem.md §1, CLAUDE.md "no mínimo 10 minutos"). Não julga qualidade:
// isso é da bancada. O ferramentas/portao-fatos.mjs o roda para cruzar o sha do texto falado: a leitura (paragrafosDe) e a forma
// do sha são as do molde, sem mudança.
//
// Deriva do do vídeo 4 (roteiros/peru-agua/_ferramentas/gate.mjs), em 26/10/2026, pelo pedido da Sala de controle.
//   SAEM as regras só do Peru: "Peru" e "Andes" nas 3 primeiras frases (o título de trabalho do vídeo 4); o "2 percent" e o
//   lado seco nas 3 primeiras frases (alertas); o túnel no gancho (alerta); o "60 percent" da água de Lima; as PROIBIDAS e os
//   ALERTA do Peru (out/_pautas/video-4/peru-confirmacao.md).
//   ENTRAM (o como de cada uma está junto da regra, abaixo):
//   - OS TÍTULOS (pautas/2026-10-24-video-5.md §2; o Lucas, 24/10/2026, 18:4x: "Manter o meu e o "Only" para teste"). Vão a teste
//     "The Deepest Point in the Atlantic Ocean" e "The Deepest Point in the Atlantic Ocean Is Only 83 Miles From a U.S. Island", e
//     o roteiro paga os dois nas 3 primeiras frases. REPROVA sem "deepest", sem "Atlantic", sem o 83 com milhas ("83 miles" ou
//     "eighty-three miles"; "about 83 miles" passa) e sem "Puerto Rico" ou "island". ALERTA sem a marca dos EUA ("U.S.", "US",
//     "United States", "American").
//   - A PRIMEIRA FRASE (marca/voz.md §1, "Os números da fala", do vídeo 5 em diante; o Lucas, 24/10/2026; marca/identidade.md §5,
//     "O gancho que prende"): o fato mais surpreendente sobre o lugar que a imagem de abertura mostra (a foto da Estação Espacial
//     de Porto Rico, pauta §6), concreto, com o nome do lugar e um número ou uma imagem. REPROVA sem lugar ("Puerto Rico" ou
//     "island"); ALERTA sem "Puerto Rico" e ALERTA sem número (algarismo, ou por extenso de "two" a "billion"; "one" não conta:
//     "one of" não é número). A falta de número só alerta porque a regra aceita "um número ou uma imagem", e a imagem o portão
//     não vê: quem escreve decide o alerta (a Sala, 26/10/2026; a 1ª versão reprovava as duas faltas).
//   - O "NÃO SE DIZ" DO VÍDEO 5 (NAO_SE_DIZ, abaixo), da pauta §3 e §4, da checagem §2.8 e do cético
//     (pautas/2026-10-24-video-5-checagem.md). Cada um reprova com o porquê e a fonte; onde a mesma frase pode estar certa (dita
//     da Marianas, atribuída, com a data do release), vira alerta nesse caso, e o porquê diz qual.
//   - OS ALERTA DO VÍDEO 5: os de palavra em ALERTA (o universal, os nomes "Milwaukee Deep" e "Brownson Deep", o tom de
//     prateleira, o presente, "here" e "this line"); os de mais de uma condição em ALERTA_V5 (1918 ou tsunami com a fossa, os
//     "200 peixes" sem atribuição, duas medidas na mesma frase, e o que vem do "não se diz" que um padrão só pega em parte).
//   - O FECHO (marca/voz.md §1, "Como ele fecha", do vídeo 5 em diante; o Lucas, 17/10/2026: "Manter no Peru, variar do 5
//     (Recomendado)"), em ALERTA: a pergunta do gancho (a última frase com "?" antes da assinatura) repetida no fim, isto é, uma
//     sequência de 5 palavras normalizadas dela (ou a pergunta inteira, se tiver 3 ou 4) numa das 8 últimas frases depois da
//     assinatura; e o fecho em lista, com 3 ou mais dessas 8 frases abrindo com "First", "Then", "Next", "Finally", "Second",
//     "Third", "A " ou "An ".
//   - O roteiro do vídeo 4 (roteiros/peru-agua/roteiro-narrador.md) entra no autoplágio.
//   AS FRASES DAS REGRAS NOVAS são as das taxas (frasesTaxaDe: o ponto do "U.S.", do "Mt." e do decimal não parte a frase), sem
//   as aspas de abertura. Sem a proteção, "off this U.S. island" partia a 1ª frase em "…off this U." e "S.", e "4 million U.S.
//   citizens" escapava ao padrão. As regras herdadas (a média, a maior frase, as VETADAS, o laço do ALERTA, as datas, o gancho)
//   continuam com as frases de antes.
//   FICA todo o resto do molde, sem mudança: o que é texto falado, o sha, o --derivados, o --onde, as VETADAS da voz, as frases
//   que abrem com data, a assinatura uma vez com até 170 palavras, o "But" até a palavra 50, a pergunta antes da assinatura, a
//   média e a maior frase, a faixa de 1.950 a 2.150 palavras, as taxas e os TETOS, o autoplágio e a sua exceção da pergunta de
//   comentário. Os tetos das taxas continuam os de Juneau e Los Angeles.
//
// O QUE NENHUM PADRÃO PEGA, OU SÓ PEGA EM PARTE (tarefa do verificador de fatos, por cobertura, frase a frase):
//   - a camada das medições (pauta §5): o que ficou errado foi o número dos livros (o gazetteer, as enciclopédias, o release de
//     2011), não a medida da ciência (o USGS mediu 8.300–8.340 m em 2002–2003). "For decades … too deep, even after sonar showed
//     otherwise" é a forma; "we measured it wrong" sem os 80 anos só alerta [mediu-errado];
//   - o número de 1939 está em disputa (30.246 ft na Marinha × 28.680 ft no jornal): "more than 28,000 feet", ou os dois com as
//     duas fontes; o portão só alerta o número antigo [numero-antigo]. A origem do 8.740 do gazetteer (o número de 1939 em braças)
//     é hipótese do cético, não lida em fonte;
//   - a profundidade do Archimède (7.300 × ~8.300 m): sem a leitura da pauta §9, só "in 1964" [archimede, alerta];
//   - "the first to reach the bottom" sem o substantivo (pessoa, humano…): só o alerta do "first";
//   - os mortos de 1918 ("more than 100", ou a faixa com a fonte) e a causa do tsunami (em disputa) [mortos-1918, alerta]; a fossa
//     como causa de 1918 só reprova dita direto, sem negação na frase [1918-causa];
//   - o tsunami de 1381–1391 é "provavelmente" de um terremoto acima de magnitude 8 na fossa: o hedge na voz;
//   - os 83 mi são da costa de Aguadilla, do ponto que o sonar da Five Deeps achou ("from the nearest coast"); só o 83 com San Juan
//     reprova. Isabela, a estimativa de 2019 (na zona da República Dominicana) e o ponto de Lyman ficam para o verificador;
//   - de quem é o mar: o ponto cai na zona econômica dos EUA (Porto Rico); a estimativa de 2019, na da República Dominicana;
//   - o Oceano Austral: se a resolução da IHO de 2023 diz 60°S (pauta §9, item 9); a negação numa frase sem "Southern Ocean",
//     "60" nem "IHO", logo depois de uma que os nomeia, só alerta [austral]. "Not recognized by the IHO" dito de outra coisa (o
//     nome Brownson Deep, por exemplo) também reprova: reescreva a frase, ou leve ao verificador;
//   - a Marianas: a crença do público dita em duas frases ("People think of the Atlantic. They picture the Mariana.") passa;
//   - o Everest dito por pronome na frase seguinte só alerta [everest];
//   - a soberania das Sandwich do Sul dita sem "British islands"/"Argentine islands" ("UK territory", "Britain controls") só
//     alerta [sandwich-soberania];
//   - a enguia de 1970 só com a ressalva da rede, que pode vir na frase seguinte [peixe-mais-fundo, alerta]; as "four new species"
//     atribuídas alertam [especies];
//   - o tamanho da fossa (810 × 1.750 km) está em disputa; a origem dos nomes "Brownson" e "Factorian" não foi lida; "Brownson
//     Deep" não está na cópia do gazetteer consultada;
//   - a Costa Leste "em risco" só alerta [costa-leste]; o tom de prateleira dito sem as palavras do alerta.
//
//   node roteiros/atlantico-fundo/_ferramentas/gate.mjs [arquivo] [--derivados] [--onde]      (cwd = raiz do canal)
//   saída: o laudo em JSON no stdout; exit 0 = passa, 1 = reprovado, 2 = não rodou (arquivo ausente, opção desconhecida)
//   A prova: node roteiros/atlantico-fundo/_ferramentas/gate-provar.mjs (os casos em out/_tmp/gate-atlantico-fundo/, fora do git).
//
// O que é texto falado: tudo menos o título (# …), as linhas de citação (> …), os comentários <!-- … --> e as
// linhas em branco. Os parágrafos são separados por linha em branco, como o narrar.mjs os lê.
//
// Desde 14/10/2026, do estudo de roteiro (out/_analises/estudo-roteiro/cetico.md, itens 7 e 8, com os ajustes do cético;
// sintese.md §4.7 e §4.8). Nada disso mudou o que o portão já reprovava:
//
// AS TAXAS (item 7) — ALERTA, NUNCA REPROVAÇÃO. O laudo ganha "taxas": {nome: {valor, teto, alerta, contagem}} e
// "taxas_palavras_contadas"; cada taxa no teto ou acima vira também uma linha em "alertas" ("taxa <nome>: …").
//   - valor = ocorrências por mil palavras faladas, com 2 casas. O denominador são as palavras das frases contadas
//     (todas menos a assinatura), pelo mesmo contar() do portão.
//   - As frases das taxas são as do portão (frasesDe), com uma proteção: o ponto entre algarismos ("10.3", "2.8") e o
//     de sigla ("U.S.") não partem a frase. Sem ela, "about 10.3 million TEU" virava duas frases, e uma de ≤ 4 palavras.
//     Nem a inicial do meio de um nome ("Dwight D. Eisenhower", entre duas palavras com maiúscula), o título antes do
//     nome ("Gen.", "Dr.", "St."…) e o "a.m."/"p.m." (o 2º ponto só não parte a frase quando a seguinte segue em minúscula).
//     Custo: "Plan B. Then…" vira uma frase só; e a sigla no fim de frase ("…to the U.S. Few stayed.") cola as duas.
//     As outras regras do portão (média, maior frase, gancho) continuam com as frases de antes, sem a proteção.
//   - Fora de toda contagem: a assinatura. Fora da contagem de "But": o "But" estrutural do gancho (a 1ª frase aberta
//     com "But" antes da assinatura, a que o portão exige perto da palavra 50).
//   - abre_but, abre_and, abre_so: frases que abrem com "But", "And", "So" (maiúscula, depois de aspas ou parêntese).
//   - travessoes: cada "—" e cada "--" do texto falado (o par de um aposto conta 2). O travessão é recurso da marca
//     (voz §1); o alerta só diz que a taxa chegou ao teto.
//   - perguntas: frases que terminam em "?".
//   - frases_curtas: frases de até 4 palavras.
//   - imperativo_mapa: "Look at", "Notice", "Watch", "Follow", "Zoom", "See how", no começo da frase ou depois de
//     vírgula, dois-pontos, ponto e vírgula ou travessão, com um "Now", "And", "So" ou "Then" opcional antes.
//   - heres: "Here's" (em qualquer caixa) e "Here is" (com maiúscula; "here is" no meio da frase é lugar, não cacoete).
//   - antitese: duas formas. (a) "not X, but Y" numa frase: "not" (fora "not only"), até 60 caracteres, vírgula
//     opcional, "but". (b) "It wasn't X. It was Y.": uma frase que abre com sujeito de até 5 palavras e cópula negada
//     ("isn't", "wasn't", "aren't", "weren't", "is/was/are/were not|never", "'s not") e a seguinte que abre com
//     "It/This/That/They/He/She/There" ou o mesmo sujeito, com a cópula afirmativa.
//   - O TETO de cada taxa é o MAIOR valor medido nos dois roteiros do canal (Juneau e Los Angeles), por este portão,
//     com estas regras (a constante TETOS, abaixo, diz a medida de cada um). O alerta dispara com a taxa ≥ teto: no
//     vídeo 2, o imperativo de mapa "no teto" era o caso que motivou a regra, e com "> teto" ele nunca dispararia.
//     Por isso, rodado num dos dois roteiros, o portão alerta na taxa em que aquele roteiro é o máximo. Teto 0 (a
//     marca nunca usou): o alerta dispara com qualquer ocorrência (> 0), senão dispararia sempre.
//   - Se mudar alguma regra de contagem, meça de novo os dois roteiros (`gate.mjs roteiros/juneau/roteiro-narrador.md`
//     e o de Los Angeles) e reescreva TETOS com as medidas novas.
//   - --onde: cada taxa traz também "onde", as frases contadas (para o crítico dizer onde estão, sem recontar).
//
// O AUTOPLÁGIO (item 7). O laudo ganha "autoplagio": [{trecho, roteiro}], e cada item vira um alerta.
//   - Compara o texto falado com os roteiros dos vídeos anteriores (roteiros/juneau/, roteiros/los-angeles/,
//     roteiros/zona-do-canal/ e roteiros/peru-agua/, o roteiro-narrador.md de cada um; a lista ANTERIORES, abaixo)
//     (o mesmo parser de texto falado) por sequências de 6 palavras normalizadas: minúsculas, sem pontuação nem
//     apóstrofo ("don't" = "dont"); o travessão separa palavras.
//   - Uma sequência não atravessa parágrafo nem a frase tirada da conta.
//   - Fora: a assinatura do canal ("You're at Alpha Point, and this is where the story of … begins."), nos três textos;
//     e a pergunta de comentário do fim (uma das 3 últimas frases), quando ela for igual, palavra por palavra
//     normalizada, a uma pergunta de marca/cta.md (as entre aspas e as da tabela do §7).
//   - Sequências de 6 que se sobrepõem viram um trecho só (o maior trecho comum), no texto como está no roteiro de
//     agora. Duas que só se encostam, sem palavra em comum, ficam dois trechos (a emenda não está no anterior).
//   - O roteiro que é o próprio arquivo medido (o mesmo caminho, ou o mesmo sha do texto falado) não entra na comparação.
//   - A variável GATE_ANTERIORES troca a lista dos roteiros comparados. Existe só para a prova (um anterior de mentira com
//     a pergunta de comentário); o portão de verdade roda sem ela.
//
// O SHA NOS DERIVADOS (item 8), só com --derivados. O sha do texto falado é o "sha256" do laudo; o carimbo é o
// começo dele, 12 caracteres hex (o mesmo "Revisão julgada" que o montar-roteiro.mjs do Juneau já escrevia). Os
// derivados moram na pasta do roteiro medido (no padrão, roteiros/atlantico-fundo/), e cada um traz, numa linha só dela
// (pode vir dentro de citação "> " e com o valor entre crases; 12 a 64 hex, e contam os 12 primeiros):
//   - qc-roteiro/*.laudo.md:   Revisão julgada: `<sha12>`        (fora: os que terminam em -r<n>.laudo.md, com ou sem letra,
//                              como -r1, -r2 e -r2b, ou em -antigo.laudo.md: são a entrada da lista daquela rodada e julgaram o
//                              texto de antes; a Sala, 26/10/2026, depois de o aplicador da r2 apontar que só o -r1 ficava fora)
//   - roteiro-editor.md:       Revisão do roteiro: `<sha12>`
//   - pronuncia.md:            Revisão do roteiro: `<sha12>`
//   - voz/texto-para-voz.md:   Revisão do roteiro: `<sha12>`
//   Derivado ausente não é erro. Derivado sem a linha, ou com outro sha, é: vai a "derivados_velhos" [{arquivo,
//   cita}] e aos problemas, e o portão sai 1. "derivados" lista todos os conferidos. Sem --derivados, nada disso roda.
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";

const ARGS = process.argv.slice(2);
const OPCOES = ARGS.filter((a) => a.startsWith("--"));
for (const o of OPCOES) if (!["--derivados", "--onde"].includes(o)) { console.error(`opção desconhecida: ${o} (há --derivados e --onde)`); process.exit(2); }
const COM_DERIVADOS = OPCOES.includes("--derivados"), COM_ONDE = OPCOES.includes("--onde");
const ARQ = ARGS.find((a) => !a.startsWith("--")) || "roteiros/atlantico-fundo/roteiro-narrador.md";
if (!existsSync(ARQ)) { console.error(`não encontrado: ${ARQ}`); process.exit(2); }
const lerTexto = (arq) => readFileSync(arq, "utf8").replace(/^﻿/, "").replace(/\r\n?/g, "\n");
const bruto = lerTexto(ARQ);

const WPM = 184;                       // o ritmo medido da voz no v4 (out/los-angeles/_pesquisa/teste-voz-v4.md)
const MIN_PALAVRAS = 1950, MAX_PALAVRAS = 2150;   // 10 min a 184 palavras/min = 1.840; alvo 2.000 (~10,9 min)
const MEDIA_MAX = 18, FRASE_MAX = 34;
const VETADAS = [
  /\bshocking\b/i, /\binsane\b/i, /\bcrazy\b/i, /you won'?t believe/i, /mind-?blowing/i, /world war (3|three|iii)\b/i,
  /\bbreaking\b/i, /just happened/i, /\bthis week\b/i, /\byesterday\b/i, /\brecently\b/i, /\blast (week|month|year)\b/i,
  /experts say/i, /reports suggest/i, /some people believe/i, /sources claim/i, /\bregime\b/i,
  /\bour (enemies|allies|country)\b/i, /\bwe need to\b/i, /\bwe should\b/i, /\bthe good guys\b/i, /\bthey'?re right\b/i,
  /\bevil\b/i, /\bwill collapse\b/i, /\bis about to\b/i,
];
// conferir (alerta, nunca reprovação): o universal, o que pede atribuição ou cuidado, o presente, e a chamada que a marca veta
const ALERTA = [
  /\beveryone\b/i, /\bnobody\b/i, /\bnever\b/i, /\bfirst\b/i, /\blast\b/i, /\balways\b/i,
  // os nomes: os autores (Stewart & Jamieson 2019, §6) pedem que saiam de uso; o roteiro só os diz como nomes antigos
  // ("a spot some scientists call…"; checagem §2.1 e §2.8)
  /\bMilwaukee Deep\b/i, /\bBrownson Deep\b/i,
  // o tom de prateleira (pauta §3; checagem §1 e §2.8): "anomaly" pode ser a anomalia de gravidade, que é fato (−380 mGal)
  /\banomal(y|ies|ous)\b/i, /\bmega-?quakes?\b/i, /\bmyster(y|ies|ious)\b/i, /\bsecrets?\b/i,
  /\b(still|today|now|currently)\b/i, /\bhere\b/i, /\bthis line\b/i,
];
// ---- o "O que não se diz" do vídeo 5 (pautas/2026-10-24-video-5.md §3 e §4; pautas/2026-10-24-video-5-checagem.md §2.8 e o
// cético): reprovam. Cada um tem o id (entre colchetes na mensagem), o porquê com a fonte, e julga(frase, a anterior) →
// "reprova" | "alerta" | null. O alerta é o caso em que a mesma frase pode estar certa, e "alerta" diz qual.
const NEGA = /\b(?:not|never|no)\b|n['’]t\b/i;
const negadoAntes = (f, i) => NEGA.test(f.slice(Math.max(0, i - 25), i));   // a negação nas 25 letras antes do verbo
const MARIANAS = /\bMarianas?\b|\bChallenger\b/i;
const AUSTRAL = /\bSouthern Ocean\b|\b(?:60|sixty|sixtieth)\b|\bIHO\b|\bInternational Hydrographic\b/i;
const NAO_RATIFICADO = new RegExp([
  String.raw`\b(?:not|never)\s+(?:(?:yet|been|ever|officially|formally|internationally|universally)\s+)*(?:ratified|recognized|recognised)\b`,
  String.raw`n['’]t\s+(?:(?:yet|been|ever|officially|formally|internationally|universally)\s+)*(?:ratified|recognized|recognised)\b`,
  String.raw`\byet to be (?:ratified|recognized|recognised)\b`, String.raw`\bunratified\b`, String.raw`\b(?:by|under) international law\b`,
].join("|"), "i");
const PRIMEIRO_HUMANO = /\bfirst(?:[- ]ever)?\s+(?:human beings?|humans?|persons?|people|man|men|woman|women|explorers?|divers?)\b/i;
const FUNDO = /\b(?:bottom|floor|seafloor|sea floor|seabed|sea bed)\b/i;
const ERRADO_80 = /\bwrong for (?:(?:almost|nearly|about|around|roughly|some|over|more than|close to|the past|the last)\s+)*(?:79|80|seventy[- ]nine|eighty) years\b/i;
const ANOS_80 = /\b(?:79|80|seventy[- ]nine|eighty)[- ]years?\b|\beight decades\b/i;
const DE_1939_A_2018 = /\b1939\b[^.?!]*\b2018\b|\b2018\b[^.?!]*\b1939\b/;
const EVEREST = /\bEverest\b/i;
const MAIS_FUNDO_QUE_EVEREST = /\bdeeper than (?:the (?:height|summit|top) of )?(?:Mount |Mt\.? )?Everest\b|\bEverest\b[^.?!]{0,30}\b(?:shorter|smaller) than\b[^.?!]{0,30}\b(?:deep|trench)\b/i;
const SOME = /\b(?:fits?|fitting|disappears?|vanish(?:es)?|submerged?|swallow(?:s|ed)?|sinks?|drown(?:s|ed)?|hidden|hides?|buried|bury|underwater|go(?:es)? under|be covered|engulf(?:s|ed)?)\b|\bunder (?:the )?water\b/gi;
const someSemNegar = (f) => [...f.matchAll(SOME)].some((m) => !negadoAntes(f, m.index));
const PARCIAL = /\ball but\b|\balmost\b|\bnearly\b|\bmost of\b|\bexcept\b|\bbut (?:its|the) (?:top|peak|summit|tip|last)\b|\b(?:stick|sticks|poke|pokes|jut|juts|rise|rises|break|breaks)\b[^.?!]{0,25}\b(?:out|above|through)\b|\babove the (?:water|surface|waves)\b|\bout of the water\b/i;
const SOBERANIA = new RegExp([
  String.raw`\b(?:British|Argentine|Argentinian|Argentinean)(?:[- ](?:owned|held|controlled|ruled|run|governed))?\s+islands?\b`,
  String.raw`\bislands?,?\s+(?:owned|held|controlled|ruled|run|governed)\s+by\s+(?:Britain|the UK|the U\.K\.|the United Kingdom|Argentina)\b`,
  String.raw`\b(?:Britain|Argentina|the UK|the U\.K\.|the United Kingdom)['’]s\s+(?:South Sandwich\s+)?islands\b`,
].join("|"), "i");
const CRENCA = /\b(?:think|thinks|thought|believe|believes|believed|assume|assumes|assumed|imagine|imagines|imagined|suppose|supposes|supposed|guess|guesses|expect|expects)\b/i;
const GENTE = /\b(?:people|citizens|Americans|residents|inhabitants|islanders|Puerto Ricans|population|live|lives|living|home to)\b/i;
const DIA_21 = /\b(?:December|Dec\.?)\s+(?:the\s+)?(?:21(?:st)?|twenty-first)\b|\b(?:21(?:st)?|twenty-first)\s+(?:of\s+)?December\b/i;
const MERGULHO = /\b(?:2018|dive|dives|dove|dived|diving|descen\w*|Vescovo|Limiting Factor|reach(?:ed)?|touch(?:ed)?|land(?:ed)?|submersible|sub)\b/i;
const ANUNCIO = /\b(?:announc\w*|release[ds]?|press|statement|published|publicized)\b/i;
const ATRIBUI = /\b(?:believes?|believed|thinks?|thought|said|says|claimed|claims|suspects?|suspected|according to|hoped|hopes)\b/i;
const SANDWICH_MAIS_FUNDA = new RegExp([
  String.raw`\b(?:South Sandwich|Meteor)\b[^.?!]{0,60}?\b(?:is|it['’]s)\s+(?:[\w-]+\s+){0,2}?deeper than\b[^.?!]{0,40}?\b(?:Puerto Rico|Brownson|Milwaukee)\b`,
  String.raw`\b(?:Puerto Rico|Brownson|Milwaukee)\b[^.?!]{0,60}?\b(?:is|it['’]s)\s+(?:[\w-]+\s+){0,2}?shallower than\b[^.?!]{0,40}?\b(?:South Sandwich|Meteor)\b`,
  String.raw`\btwo deepest (?:points|places|spots)\b`,
].join("|"), "i");
const TRENCH_1918 = new RegExp([
  String.raw`\btrench\b[^.?!]{0,50}\b(?:caused|triggered|unleashed|produced|generated|set off|sent|spawned)\b[^.?!]{0,60}\b1918\b`,
  String.raw`\b1918\b[^.?!]{0,60}\b(?:struck|hit|happened|occurred|started|began|ruptured|was|came)\b[^.?!]{0,25}\b(?:in|on|inside|along|beneath|under|at|from) the (?:Puerto Rico )?trench\b`,
].join("|"), "i");
const ABALO = String.raw`(?:(?:mega-?)?(?:earth)?quakes?|mega-?thrusts?|tsunamis?|big one)`;
const VEM_AI = new RegExp([
  String.raw`\b${ABALO}\b[^.?!]{0,40}\b(?:is|are) (?:coming|overdue|due|inevitable)\b`,
  String.raw`\b${ABALO}\b[^.?!]{0,40}\bwill (?:hit|strike|come|happen|return|reach)\b`,
  String.raw`\boverdue\b[^.?!]{0,40}\b${ABALO}\b`,
].join("|"), "i");
const MISTERIO = new RegExp([
  String.raw`\b(?:unknown|unexplained|mysterious|strange|unidentified)\s+(?:signals?|sounds?|objects?|structures?|lights?|noises?)\b`,
  String.raw`\b(?:NOAA|scientists|the government|the Navy|officials)\b[^.?!]{0,25}\b(?:is hiding|are hiding|hid|hides|covered up|cover up|won['’]t (?:tell|show|say)|doesn['’]t want you|don['’]t want you)\b`,
].join("|"), "i");
const NAO_SE_DIZ = [
  { id: "austral",
    porque: 'o Oceano Austral: em 2023, a 3ª Assembleia da IHO aprovou a resolução que o reconhece (PRO 3.3), e a linha de 60°S é a definição dos EUA; nunca "not ratified", "never recognized" nem "by international law": "by the 60°S line" (pauta §4; checagem §2.3 e §2.8; o cético do vídeo 6)',
    alerta: 'o Oceano Austral: "not ratified", "never recognized" ou "by international law" logo depois de uma frase que nomeia o Oceano Austral, 60°S ou a IHO; em 2023 a IHO o reconheceu (pauta §4)',
    julga: (f, ant) => (!NAO_RATIFICADO.test(f) ? null : AUSTRAL.test(f) ? "reprova" : AUSTRAL.test(ant) ? "alerta" : null) },
  { id: "primeiro-no-fundo",
    porque: 'o Archimède pousou no fundo da fossa em 1964: Vescovo é "the first person to reach the deepest point of the Atlantic", nunca o primeiro humano no fundo (pauta §4; cético §1)',
    julga: (f) => (PRIMEIRO_HUMANO.test(f) && FUNDO.test(f) ? "reprova" : null) },
  { id: "80-anos",
    porque: '"wrong for 80 years" e "we measured it wrong" caíram: o USGS tinha 8.300–8.340 m em 2002–2003; o que ficou errado foi o número dos livros: "for decades, the number in the reference books was hundreds of feet too deep" (pauta §2 e §5; cético §1)',
    julga: (f) => (ERRADO_80.test(f) || (/\bwrong\b/i.test(f) && (ANOS_80.test(f) || DE_1939_A_2018.test(f))) ? "reprova" : null) },
  { id: "everest",
    porque: 'o Everest não caberia no fundo do Atlântico: uns 1.545 ft ficariam fora d\'água ("its top 1,500 feet would still stick out"); "deeper than Everest is tall" só vale para o Challenger Deep (pauta §2 e §4; checagem §2.2 e §2.8; cético §3)',
    alerta: 'o Everest: a frase o faz sumir, mas diz que parte fica de fora, fala da Marianas, ou o nomeia só na frase anterior; no Atlântico, o topo fica de fora, uns 1.500 ft (checagem §2.2)',
    julga: (f, ant) => {
      if (MAIS_FUNDO_QUE_EVEREST.test(f)) return MARIANAS.test(f) ? "alerta" : "reprova";
      if (!someSemNegar(f)) return null;
      if (EVEREST.test(f)) return PARCIAL.test(f) || MARIANAS.test(f) ? "alerta" : "reprova";
      return EVEREST.test(ant) && !PARCIAL.test(f) && !MARIANAS.test(f) ? "alerta" : null;
    } },
  { id: "soberania",
    porque: 'as Sandwich do Sul ficam numa zona de reivindicação sobreposta, do Reino Unido e da Argentina: nunca "British islands" nem "Argentine islands" (pauta §4; checagem §2.3 e §2.8)',
    julga: (f) => (SOBERANIA.test(f) ? "reprova" : null) },
  { id: "marianas-no-atlantico",
    porque: 'ninguém informado acha que a Marianas fica no Atlântico, e nenhuma pesquisa o sustenta: a forma honesta é "when you think \'deepest ocean\', you think Mariana. But that\'s the Pacific." (pauta §3; checagem §2.8)',
    julga: (f) => (CRENCA.test(f) && /\bMarianas?\b/i.test(f) && /\bAtlantic\b/i.test(f) ? "reprova" : null) },
  { id: "quatro-milhoes",
    porque: 'os "4 million U.S. citizens" de Porto Rico e das Ilhas Virgens são de 2006 (USGS OFR 2006-1210): a população de hoje vem do Census (pauta §9, item 7; checagem §2.5)',
    julga: (f) => (/\b(?:4|four)(?:\.0)? million\b/i.test(f) && GENTE.test(f) ? "reprova" : null) },
  { id: "21-de-dezembro",
    porque: 'o mergulho de Vescovo foi na quarta, 19/12/2018 (Popular Science, a bordo); 21/12 é a data do release, que a Wikipedia copia (pauta §4; cético §1)',
    alerta: '21 de dezembro: é a data do release da Five Deeps; o mergulho foi em 19/12/2018 (pauta §4)',
    julga: (f) => (DIA_21.test(f) && MERGULHO.test(f) ? (ANUNCIO.test(f) ? "alerta" : "reprova") : null) },
  { id: "83-san-juan",
    porque: 'os 83 mi são até a costa de Aguadilla, no noroeste, a mais perto do ponto; de San Juan são uns 116 mi (pauta §4; cético, "A distância, refeita"; roteiros/atlantico-fundo/abertura-conferida-2026-10-24.md)',
    julga: (f) => (/\b(?:83|eighty[- ]three) miles\b/i.test(f) && /\bSan Juan\b|\bcapital\b/i.test(f) ? "reprova" : null) },
  { id: "bermudas",
    porque: 'o Triângulo das Bermudas fica fora do vídeo: "There is no evidence that mysterious disappearances occur with any greater frequency", e o USBGN não reconhece o nome (NOAA; checagem §2.8)',
    julga: (f) => (/\bBermuda Triangle\b/i.test(f) ? "reprova" : null) },
  { id: "especies",
    porque: '"four new species were discovered" é crença do cientista-chefe num release, sem descrição publicada (checagem §2.6 e §2.8)',
    alerta: 'as "four new species": atribuídas, mas sem descrição publicada (checagem §2.6); a crença do release, não a descoberta',
    julga: (f) => (/\b(?:four|4) new (?:marine |animal |deep-sea )?species\b/i.test(f) ? (ATRIBUI.test(f) ? "alerta" : "reprova") : null) },
  { id: "sandwich-mais-funda",
    porque: 'o Meteor Deep, o mais fundo da Fossa das Sandwich do Sul, é 113 m (371 ft) mais raso que o ponto de Porto Rico; o Atlântico não tem dois pontos mais fundos (pauta §4; checagem §2.3 e §2.8)',
    julga: (f) => (SANDWICH_MAIS_FUNDA.test(f) && !NEGA.test(f) ? "reprova" : null) },
  { id: "peixe-caracol-8336",
    porque: 'o peixe-caracol de 8.336 m que a NOAA cita não é do Atlântico (checagem §2.8)',
    julga: (f) => (/\b(?:8,336|27,349)\b/.test(f) && /\b(?:Atlantic|Puerto Rico)\b/i.test(f) ? "reprova" : null) },
  { id: "1918-causa",
    porque: 'o terremoto de 1918 foi na Passagem de Mona, a oeste de Porto Rico, não na fossa (NOAA NCEI, evento 1458; pauta §4; checagem §2.5 e §2.8)',
    julga: (f) => (TRENCH_1918.test(f) && !/\b(?:not|never|rather than|instead)\b|n['’]t\b/i.test(f) ? "reprova" : null) },
  { id: "vem-ai",
    porque: '"a megaquake is coming", "overdue": nenhuma fonte lida dá data nem probabilidade; o futuro vai em condicional, com a condição (voz §1 e §2; checagem §2.8)',
    julga: (f) => (VEM_AI.test(f) && !/\bif\b/i.test(f) ? "reprova" : null) },
  { id: "misterio",
    porque: '"sinal desconhecido", "o que a NOAA esconde": o gênero "What They Captured…"; nenhuma fonte lida tem nada disso (pauta §3; checagem §2.8)',
    julga: (f) => (MISTERIO.test(f) ? "reprova" : null) },
  // Os três abaixo vêm da bancada 1 do roteiro (26/10/2026, à noite; o dossiê, C27 e N50).
  { id: "lista-decadas",
    porque: 'nenhuma fonte data a entrada da lista oficial: a única prova (Stewart & Jamieson 2019) a põe por volta de 2019, e o mesmo artigo se contradiz; o 8.740 se atribui ao estudo ("A 2019 study found that the official list…"), nunca "for decades" (dossiê C27, N50)',
    julga: (f) => (/\bfor decades\b/i.test(f) && /\blist\b|\bgazetteer\b/i.test(f) ? "reprova" : null) },
  { id: "nenhum-peixe",
    porque: 'a volta de 2019 não viu peixe-caracol ("No snailfish were observed", o resumo do artigo de 2020); "no fish at all" passa da fonte: "It saw none of those fish" (dossiê F38, C27, N50)',
    julga: (f) => (/\bno fish at all\b|\bnot a single fish\b|\bno fish whatsoever\b|\bfound no fish\b|\bno fish (?:was|were) (?:seen|found|observed)\b/i.test(f) ? "reprova" : null) },
  { id: "vescovo-voltou",
    porque: 'nenhuma fonte diz quem estava no submersível na volta de 2019: nunca "the scientists who went back" (com o F91, faz Vescovo ter voltado) nem Vescovo voltando; "In a 2020 paper, the scientists concluded…" (dossiê F91, R14, C27, N50)',
    julga: (f) => (/\bscientists who went back\b/i.test(f) || (/\bVescovo\b/.test(f) && /\b(?:went back|returned|came back)\b/i.test(f)) ? "reprova" : null) },
  // Os três abaixo vêm da bancada final do roteiro (26/10/2026, mais tarde; o dossiê, C28 e N51).
  { id: "gancho-1200",
    porque: 'o "about 1,200 feet" é a régua do sonar da expedição, publicado em 2021; pelo número do estudo de 2019 (8.740 − 8.408 m) a lista passava 1.089 ft: na frase do estudo de 2019, "more than 1,000 feet", que vale nas duas réguas (dossiê R03, F09, C28, N51)',
    julga: (f) => (/\b2019 study\b|\bstudy (?:from|in|of) 2019\b/i.test(f) && /\b1,200\b/.test(f) ? "reprova" : null) },
  { id: "tripulacao-francesa",
    porque: 'nenhuma fonte lida diz quem estava a bordo do Archimède em 1964 nem quem escreveu o relato de 1965: o francês é o batiscafo ("a French bathyscaphe"), e a tripulação vai sem nacionalidade ("its crew") (dossiê F37, R14, A19, C28, N51)',
    julga: (f) => (/\bFrench (?:crew|crewmen|scientists?|observers?|divers?|team|sailors?|oceanographers?)\b/i.test(f) ? "reprova" : null) },
  { id: "porque-sem-dono",
    porque: 'o USGS sugere a causa da profundidade ("we suggest that these features are manifestations of large vertical movements"), não a afirma: o pouso da pergunta leva o dono ("That, the agency suggests, is why…") (dossiê S28, N51; bancada final, roteiro 1 e fatos A1)',
    julga: (f) => (/\bwhy the trench is so deep\b/i.test(f) && !/\b(?:suggests?|suggested|USGS|agency|according to)\b/i.test(f) ? "reprova" : null) },
  // Os dois abaixo vêm da bancada final da rodada 2 (26/10/2026, à noite; o dossiê, C29 e N52).
  { id: "challenger-ano",
    porque: 'o ano da sondagem do Challenger está em disputa: as fontes do disco dão 26/03/1875, mas o IHR de 1936 põe o navio "cruising between St. Thomas, Virgin Islands and the Bermudas", o trecho de março de 1873; na fala, "less than a decade earlier" (antes do Blake de 1883), que vale para os dois anos, sem o ano e sem "eight years" (dossiê F22, C29, N52)',
    julga: (f) => (/\bChallenger\b/.test(f) && !/\bChallenger Deep\b/.test(f) && /\b187[0-9]\b|\beight years\b/i.test(f) ? "reprova" : null) },
  { id: "relato-de-quem",
    porque: 'nenhuma fonte lida diz quem escreveu o relato de 1965: "the report" (a palavra da fonte), nunca "their account" nem "the crew\'s report" (dossiê F37, N51, C29)',
    julga: (f) => (/\b(?:their|the crew['’]s|its crew['’]s) (?:own )?(?:account|report|paper|article)\b/i.test(f) ? "reprova" : null) },
];
// ---- os ALERTA do vídeo 5 com mais de uma condição (conferir, nunca reprovar): {id, porque, testa(frase, a anterior)}
const NUM_PALAVRAS = "two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|dozen";
const RE_NUM_EXTENSO = new RegExp(String.raw`\b(?:${NUM_PALAVRAS})\b`, "i");   // sem "one": "one of" não é número
const NUM_FALADO = String.raw`(?:\d[\d,]*(?:\.\d+)?|(?:one|${NUM_PALAVRAS})(?:[\s-]+(?:and[\s-]+)?(?:one|${NUM_PALAVRAS}))*)`;
const MEDIDA_SRC = String.raw`\b${NUM_FALADO}\s*(?:feet|foot|ft|meters?|metres?|fathoms?|m)\b|\b${NUM_FALADO}\s+miles?\s+(?:down|deep|below|beneath|under)\b`;
const MEDIDA = new RegExp(MEDIDA_SRC, "gi"), MEDIDA_1 = new RegExp(MEDIDA_SRC, "i");
const ATRIBUI_PEIXE = /\b(?:reported|reports?|said|says|counted|counts?|described|describes|recorded|logged|claimed|wrote|noted)\b/i;
const ALERTA_V5 = [
  { id: "1918-fossa", porque: 'o terremoto de 1918 foi na Passagem de Mona, não na fossa; a causa do tsunami e os mortos estão em disputa (pauta §4; checagem §2.5 e §2.8)',
    testa: (f) => /\b1918\b|\btsunamis?\b/i.test(f) && /\btrench(?:es)?\b/i.test(f) },
  { id: "200-peixes", porque: 'os "200 peixes" de 1964, só atribuídos ("reported", "said", "counted", "described"): ninguém viu o animal, e os autores concluem que eram pepinos-do-mar (pauta §4; cético §1)',
    testa: (f) => /\b(?:200|two hundred)\s+(?:[\w-]+\s+)?fish(?:es)?\b|\bsnailfish(?:es)?\b/i.test(f) && !ATRIBUI_PEIXE.test(f) },
  { id: "duas-medidas", porque: 'duas medidas (profundidade ou altura) na mesma frase: um número por frase, de uma fonte; nunca o 27.480 ft do submersível ao lado do 8.378 m do sonar (pauta §4)',
    testa: (f) => (f.match(MEDIDA) || []).length >= 2 },
  { id: "mais-fundo-da-terra", porque: '"deepest … on Earth / in the world / on the planet": só vale para a Marianas; dito da Fossa de Porto Rico, é falso (pauta §3 e §4)',
    testa: (f) => /\bdeepest\b(?:\s+[\w'’-]+){0,2}?\s+(?:on (?:the )?Earth|on (?:our |the )?planet|in the world|anywhere)\b/i.test(f) },
  { id: "numero-antigo", porque: 'número antigo (1939 a 2011): só como história, com a data e a fonte; o de 1939 está em disputa, 30.246 ft (a Marinha) × 28.680 ft (o jornal): "more than 28,000 feet" (pauta §5; checagem §2.8; cético §1)',
    testa: (f) => /\b(?:30,246|9,219|28,680|28,576|28,675|8,740|8,710|8,605|8,648|8,428)\b|\b(?:30,000|thirty thousand) feet\b/i.test(f) },
  { id: "archimede", porque: 'a profundidade do Archimède está em disputa (7.300 m no artigo × ~8.300 m no release): sem a leitura da pauta §9, só "in 1964" (pauta §5; cético §1)',
    testa: (f) => /\bArchim[eè]de\b|\bbathyscaphe\b|\b1964\b/i.test(f) && MEDIDA_1.test(f) },
  { id: "mortos-1918", porque: 'os mortos de 1918 estão em disputa (116, 144, "at least 91"…): "more than 100 people", ou a faixa com a fonte (pauta §4; checagem §2.5)',
    testa: (f) => /\b1918\b|\btsunamis?\b/i.test(f) && /\b(?:116|144|91|ninety-one|forty|40|200)\b[^.?!]{0,25}\b(?:people|deaths|dead|died|killed|lives|victims)\b/i.test(f) },
  { id: "mediu-errado", porque: '"measured it wrong": o que ficou errado foi o número dos livros, não a medida da ciência (o USGS mediu 8.300–8.340 m em 2002–2003; pauta §5; cético §1)',
    testa: (f) => /\b(?:measured|measuring|got|had|charted|mapped)\b[^.?!]{0,30}\bwrong\b/i.test(f) && !ANOS_80.test(f) },
  { id: "costa-leste", porque: 'a Costa Leste "em risco": a moldura dos concorrentes alarmistas; nenhuma fonte lida dá data nem probabilidade (checagem §2.8)',
    testa: (f) => /\bEast Coast\b/i.test(f) && /\b(?:risk|danger|threat|threaten\w*|hit|wipe\w*|flood\w*)\b/i.test(f) },
  { id: "peixe-mais-fundo", porque: '"deepest fish": a enguia de 1970, só com a ressalva da rede (não se sabe a que profundidade o peixe entrou; checagem §2.6 e §2.8)',
    testa: (f) => /\bdeepest(?:[- ]living)? fish\b/i.test(f) },
  { id: "sandwich-soberania", porque: 'as Sandwich do Sul com o Reino Unido ou a Argentina na frase, sem a reivindicação sobreposta dita: nem britânicas, nem argentinas (checagem §2.3 e §2.8)',
    testa: (f) => /\bSouth Sandwich\b/i.test(f) && /\b(?:British|Britain|Argentin\w*|UK|U\.K\.|United Kingdom)\b/.test(f) && !/\bclaim|\bdisput|\bcontest|\boverlap|\bboth\b/i.test(f) },
];
const N_FECHO = 8, N_PERGUNTA = 5;   // o fecho: as 8 últimas frases; a pergunta do gancho, por sequências de 5 palavras
const MESES = "January|February|March|April|May|June|July|August|September|October|November|December";
const COMECA_DATA = new RegExp(`^(In|On|By|Until|Since|From|Through|Between|Early|Late|Starting)\\b[^.?!]{0,30}?(\\b(${MESES})\\b|\\b1[6-9]\\d\\d\\b|\\b20\\d\\d\\b)`);
const ASSINATURA = /^You're at Alpha Point, and this is where the story of .+ begins\.$/;

// Os tetos das taxas (por mil palavras), medidos por este portão em 14/10/2026, com as regras do topo
// (contagem entre parênteses; Juneau, 1.764 palavras contadas, sem assinatura nem "But" de gancho, que ele não tem;
// Los Angeles, 2.042 palavras contadas, fora a assinatura):
//                     Juneau       Los Angeles   teto
//   abre_but          0.00 (0)     0.49 (1)      0.49
//   abre_and          1.13 (2)     3.92 (8)      3.92
//   abre_so           1.13 (2)     3.92 (8)      3.92
//   travessoes        0.00 (0)     0.00 (0)      0      (nenhum dos dois tem travessão falado: qualquer um alerta)
//   perguntas         2.27 (4)     1.96 (4)      2.27
//   frases_curtas     3.40 (6)     3.92 (8)      3.92
//   imperativo_mapa   0.57 (1)     2.45 (5)      2.45
//   heres             0.00 (0)     0.00 (0)      0      (nenhum dos dois usa: qualquer um alerta)
//   antitese          0.57 (1)     0.98 (2)      0.98
const TETOS = {
  abre_but: 0.49, abre_and: 3.92, abre_so: 3.92, travessoes: 0, perguntas: 2.27,
  frases_curtas: 3.92, imperativo_mapa: 2.45, heres: 0, antitese: 0.98,
};
// GATE_ANTERIORES (só para prova): outra lista de roteiros para o autoplágio, separados por vírgula. Fora da prova, nunca.
const ANTERIORES = process.env.GATE_ANTERIORES ? process.env.GATE_ANTERIORES.split(",").filter(Boolean)
  : ["roteiros/juneau/roteiro-narrador.md", "roteiros/los-angeles/roteiro-narrador.md", "roteiros/zona-do-canal/roteiro-narrador.md",
    "roteiros/peru-agua/roteiro-narrador.md"];
const N_SEQ = 6;
const CTA = "marca/cta.md";

function paragrafosDe(texto) {
  const paragrafos = [];
  let buf = [], emComentario = false;
  for (const l of texto.split("\n")) {
    let t = l;
    if (emComentario) { if (t.includes("-->")) { emComentario = false; t = t.slice(t.indexOf("-->") + 3); } else continue; }
    t = t.replace(/<!--.*?-->/g, "");
    if (t.includes("<!--")) { emComentario = true; t = t.slice(0, t.indexOf("<!--")); }
    if (/^\s*#/.test(t) || /^\s*>/.test(t)) { if (buf.length) { paragrafos.push(buf.join(" ")); buf = []; } continue; }
    if (!t.trim()) { if (buf.length) { paragrafos.push(buf.join(" ")); buf = []; } continue; }
    buf.push(t.trim());
  }
  if (buf.length) paragrafos.push(buf.join(" "));
  return paragrafos;
}
const paragrafos = paragrafosDe(bruto);

const contar = (s) => (s.match(/[A-Za-z0-9][A-Za-z0-9'’.,$%-]*/g) || []).filter((w) => /[A-Za-z0-9]/.test(w)).length;
const frasesDe = (p) => p.match(/[^.?!]+(?:[.?!]+["”’)]*|$)/g)?.map((f) => f.trim()).filter(Boolean) || [];
const frases = paragrafos.flatMap(frasesDe);
const texto = paragrafos.join("\n\n");
const palavras = contar(texto);
const tamanhos = frases.map(contar);
const media = tamanhos.reduce((a, b) => a + b, 0) / Math.max(1, tamanhos.length);

const problemas = [], alertas = [];
if (palavras < MIN_PALAVRAS) problemas.push(`palavras: ${palavras}, abaixo de ${MIN_PALAVRAS} (o vídeo tem de passar de 10 min a ${WPM} palavras/min)`);
if (palavras > MAX_PALAVRAS) problemas.push(`palavras: ${palavras}, acima de ${MAX_PALAVRAS}`);
if (media > MEDIA_MAX) problemas.push(`média de ${media.toFixed(1)} palavras por frase (teto ${MEDIA_MAX}, voz §1)`);
frases.forEach((f, i) => { if (tamanhos[i] > FRASE_MAX) problemas.push(`frase com ${tamanhos[i]} palavras (teto ${FRASE_MAX}): "${f.slice(0, 90)}…"`); });
for (const re of VETADAS) for (const f of frases) if (re.test(f)) problemas.push(`vetada (voz §2) ${re}: "${f.slice(0, 100)}"`);
for (const re of ALERTA) for (const f of frases) if (re.test(f)) alertas.push(`conferir ${re}: "${f.slice(0, 100)}"`);
if (/\[[^\]]*\]/.test(texto)) problemas.push("marcador entre colchetes no texto falado (a voz leria)");
// no máximo duas frases seguidas abrindo com data (voz §1)
let seguidas = 0;
frases.forEach((f) => { seguidas = COMECA_DATA.test(f) ? seguidas + 1 : 0; if (seguidas === 3) problemas.push(`três frases seguidas abrindo com data, a 3ª: "${f.slice(0, 80)}"`); });
// a assinatura: uma vez, no fim do gancho
const ass = frases.map((f, i) => [f, i]).filter(([f]) => ASSINATURA.test(f));
if (ass.length !== 1) problemas.push(`a assinatura do canal aparece ${ass.length} vez(es) (tem de ser 1, voz §1)`);
const iAss = ass.length ? ass[0][1] : -1;
const palavrasAteAss = iAss >= 0 ? frases.slice(0, iAss + 1).reduce((a, f) => a + contar(f), 0) : null;
if (palavrasAteAss != null && palavrasAteAss > 170) problemas.push(`o gancho tem ${palavrasAteAss} palavras até a assinatura (~${(palavrasAteAss / WPM * 60).toFixed(0)} s): passe a 170 no máximo`);
// a contradição dos 15 s: a 1ª frase que abre com "But" dentro das primeiras ~46 palavras (15 s a 184/min)
let acc = 0, posBut = null;
for (const f of frases) { if (/^But\b/.test(f)) { posBut = acc; break; } acc += contar(f); }
if (posBut == null || posBut > 50) problemas.push(`o "But" do gancho (o 2º tempo) começa na palavra ${posBut ?? "—"}: tem de cair nos primeiros ~15 s (palavra 50)`);
const perguntaAntes = iAss >= 0 && frases.slice(0, iAss).some((f) => /\?["”’)]*$/.test(f));
if (!perguntaAntes) problemas.push("não há pergunta antes da assinatura (o 4º tempo vira a pergunta do vídeo)");

// ---- item 7: as taxas (alerta, nunca reprovação) -------------------------------------------------------------------
const PONTO_GUARDADO = "․";
const guardar = (p) => p.replace(/(\d)\.(?=\d)/g, `$1${PONTO_GUARDADO}`).replace(/\b(?:[A-Z]\.){2,}/g, (m) => m.replaceAll(".", PONTO_GUARDADO))
  // (cético, 14/10) a inicial do meio ("Dwight D. Eisenhower"), o título antes do nome ("Gen. Goethals") e o "a.m."/"p.m."
  .replace(/\b([A-Z][a-z]+\s+[A-Z])\.(?=\s+[A-Z][a-z])/g, `$1${PONTO_GUARDADO}`)
  .replace(/\b(Mrs?|Ms|Dr|St|Gen|Col|Lt|Sgt|Capt|Adm|Maj|Gov|Sen|Rep|Rev|Mt|Ft)\.(?=\s+[A-Z])/g, `$1${PONTO_GUARDADO}`)
  .replace(/\b([ap])\.m\.(?=\s+[a-z])/g, `$1${PONTO_GUARDADO}m${PONTO_GUARDADO}`).replace(/\b([ap])\.m\./g, `$1${PONTO_GUARDADO}m.`);
const frasesTaxaDe = (p) => frasesDe(guardar(p)).map((f) => f.replaceAll(PONTO_GUARDADO, "."));
const abertura = (f) => f.replace(/^["“‘'(\s]+/, "");
const IMPERATIVO = /(?:^|[,:;—]\s*|--\s*)(?:(?:now|and|so|then),?\s+)?(?:look at|notice|watch|follow|zoom|see how)\b/gi;
const HERES = /\b[Hh]ere['’]s\b|\bHere is\b/g;
const NOT_BUT = /\bnot\b(?!\s+only\b)[^.?!;]{1,60}?,?\s+but\b/gi;
const NEGADA = /^([A-Z][\w'’-]*(?:\s+[\w'’-]+){0,4}?)(?:\s+(?:is|was|are|were)\s+(?:not|never)\b|\s+(?:isn|wasn|aren|weren)['’]t\b|['’]s\s+(?:not|never)\b)/;
const contagem = (re, s) => (s.match(re) || []).length;

function medirTaxas(pars) {
  const fr = pars.flatMap(frasesTaxaDe).map(abertura);
  const iA = fr.findIndex((f) => ASSINATURA.test(f));
  const iButGancho = iA >= 0 ? fr.findIndex((f, i) => i < iA && /^But\b/.test(f)) : -1;
  const conta = fr.map((f, i) => ({ f, i })).filter(({ i }) => i !== iA);
  const total = conta.reduce((a, { f }) => a + contar(f), 0);
  const onde = { abre_but: [], abre_and: [], abre_so: [], travessoes: [], perguntas: [], frases_curtas: [], imperativo_mapa: [], heres: [], antitese: [] };
  const n = Object.fromEntries(Object.keys(onde).map((k) => [k, 0]));
  const marca = (k, f, q = 1) => { if (q > 0) { n[k] += q; onde[k].push(f.slice(0, 120)); } };
  for (const { f, i } of conta) {
    if (/^But\b/.test(f) && i !== iButGancho) marca("abre_but", f);
    if (/^And\b/.test(f)) marca("abre_and", f);
    if (/^So\b/.test(f)) marca("abre_so", f);
    marca("travessoes", f, contagem(/—|--/g, f));
    if (/\?["”’)]*$/.test(f)) marca("perguntas", f);
    if (contar(f) <= 4) marca("frases_curtas", f);
    marca("imperativo_mapa", f, contagem(IMPERATIVO, f));
    marca("heres", f, contagem(HERES, f));
    const notBut = contagem(NOT_BUT, f);
    marca("antitese", f, notBut);
    const neg = f.match(NEGADA), prox = fr[i + 1];
    if (!notBut && neg && prox && i + 1 !== iA) {   // a frase que já contou como "not X, but Y" não conta de novo (cético)
      const suj = neg[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const afirma = new RegExp(`^(?:It|This|That|They|He|She|There|${suj})(?:\\s+(?:is|was|are|were)\\b|['’]s\\b)(?!\\s+(?:not|never)\\b)`, "i");
      if (afirma.test(prox)) marca("antitese", `${f} ${prox}`);
    }
  }
  return { palavras: total, contagens: n, onde };
}
const medida = medirTaxas(paragrafos);
const taxas = {};
for (const [k, c] of Object.entries(medida.contagens)) {
  const valor = +(medida.palavras ? (c * 1000) / medida.palavras : 0).toFixed(2);
  const teto = TETOS[k];
  const alerta = teto > 0 ? valor >= teto : valor > 0;
  taxas[k] = { valor, teto, alerta, contagem: c };
  if (COM_ONDE) taxas[k].onde = medida.onde[k];
  if (alerta) alertas.push(`taxa ${k}: ${valor} por mil palavras (${c}×), no teto ou acima (teto ${teto}, o maior de Juneau e Los Angeles): ver se é cacoete`);
}

// ---- item 7: o autoplágio --------------------------------------------------------------------------------------
const norm = (w) => w.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]/g, "");
const tokens = (f) => f.split(/\s+|—|--/).map((o) => ({ o, n: norm(o) })).filter((t) => t.n);
const perguntasCta = (() => {
  if (!existsSync(CTA)) return new Set();
  const c = lerTexto(CTA), qs = [];
  for (const m of c.matchAll(/["“]([^"”\n]{5,160}?\?)["”]/g)) qs.push(m[1]);
  for (const m of c.matchAll(/^\|\s*([^|\n]+?\?)(?:\s*\([^)]*\))?\s*\|/gm)) qs.push(m[1].replace(/\s\/\s/g, " "));
  return new Set(qs.map((q) => tokens(q).map((t) => t.n).join(" ")));
})();
// os segmentos de palavras de um texto falado, cortados em parágrafo, na assinatura e na pergunta de comentário do fim
function segmentosDe(pars) {
  const porPar = pars.map((p) => frasesTaxaDe(p).map(abertura));
  const nTotal = porPar.reduce((a, fs) => a + fs.length, 0);   // as 3 últimas pela posição: a mesma frase no meio conta (cético)
  const segs = [];
  let k = 0;
  for (const fs of porPar) {
    let seg = [];
    for (const f of fs) {
      const ultima = k++ >= nTotal - 3;
      const fora = ASSINATURA.test(f) || (ultima && /\?["”’)]*$/.test(f) && perguntasCta.has(tokens(f).map((t) => t.n).join(" ")));
      if (fora) { if (seg.length) segs.push(seg); seg = []; continue; }
      seg.push(...tokens(f));
    }
    if (seg.length) segs.push(seg);
  }
  return segs;
}
const shaDe = (s) => createHash("sha256").update(s, "utf8").digest("hex");
const sha256 = shaDe(texto);
const meus = segmentosDe(paragrafos);
const autoplagio = [];
for (const ant of ANTERIORES) {
  if (!existsSync(ant)) { alertas.push(`autoplágio: ${ant} não encontrado (não se comparou com ele)`); continue; }
  const pAnt = paragrafosDe(lerTexto(ant));
  if (resolve(ant) === resolve(ARQ) || shaDe(pAnt.join("\n\n")) === sha256) continue;   // o próprio roteiro
  const vistos = new Set();
  for (const seg of segmentosDe(pAnt)) for (let i = 0; i + N_SEQ <= seg.length; i++) vistos.add(seg.slice(i, i + N_SEQ).map((t) => t.n).join(" "));
  const achados = new Set();
  for (const seg of meus) {
    let ini = -1, fim = -1;
    const fecha = () => { if (ini >= 0) achados.add(seg.slice(ini, fim + 1).map((t) => t.o).join(" ")); ini = fim = -1; };
    for (let i = 0; i + N_SEQ <= seg.length; i++) {
      if (!vistos.has(seg.slice(i, i + N_SEQ).map((t) => t.n).join(" "))) continue;
      if (ini >= 0 && i <= fim) fim = i + N_SEQ - 1; else { fecha(); ini = i; fim = i + N_SEQ - 1; }
    }
    fecha();
  }
  for (const trecho of achados) {
    const roteiro = ant.replaceAll("\\", "/");
    autoplagio.push({ trecho, roteiro });
    alertas.push(`autoplágio (${N_SEQ}+ palavras iguais a ${roteiro}): "${trecho}"`);
  }
}

// ---- o vídeo 5: os títulos, a primeira frase, o "não se diz", os alertas e o fecho ----------------------------------
// as frases destas regras: as das taxas (o ponto do "U.S.", do "Mt." e do decimal não parte a frase), sem as aspas de abertura
const frasesV5 = paragrafos.flatMap(frasesTaxaDe).map(abertura);
// os dois títulos em teste (pauta §2; o Lucas, 24/10/2026, 18:4x: "Manter o meu e o "Only" para teste") se pagam nas 3 primeiras
// frases: "deepest", "Atlantic", o 83 com milhas e a ilha reprovam; a marca dos EUA fica como alerta
const tresV5 = frasesV5.slice(0, 3).join(" ");
if (!/\bdeepest\b/i.test(tresV5)) problemas.push('"deepest" não aparece nas 3 primeiras frases (os dois títulos em teste se pagam ali, pauta §2)');
if (!/\bAtlantic\b/i.test(tresV5)) problemas.push('"Atlantic" não aparece nas 3 primeiras frases (os dois títulos em teste se pagam ali, pauta §2)');
if (!/\b(?:83|eighty[- ]three) miles\b/i.test(tresV5)) problemas.push('"83 miles" (ou "eighty-three miles") não aparece nas 3 primeiras frases (o título "…Is Only 83 Miles From a U.S. Island" se paga ali, pauta §2)');
if (!/\bPuerto Rico\b|\bisland\b/i.test(tresV5)) problemas.push('"Puerto Rico" ou "island" não aparece nas 3 primeiras frases (o título "…From a U.S. Island" se paga ali, pauta §2)');
if (!/\bU\.\s?S\.|\bUS\b|\bUnited States\b|\bAmericans?\b/.test(tresV5)) alertas.push('a marca dos EUA ("U.S.", "United States", "American") não aparece nas 3 primeiras frases (o título "…From a U.S. Island", pauta §2)');
// a primeira frase (voz §1, "Os números da fala", do vídeo 5 em diante): o fato mais surpreendente sobre o lugar da imagem de
// abertura (a foto da Estação Espacial de Porto Rico, pauta §6), com o nome do lugar e um número
const primeira = frasesV5[0] || "";
if (!/\d/.test(primeira) && !RE_NUM_EXTENSO.test(primeira)) alertas.push(`a primeira frase não tem número (algarismo ou por extenso): ela é o fato mais surpreendente sobre o lugar da imagem de abertura, concreto, com o nome do lugar e um número ou uma imagem (voz §1, "Os números da fala"); sem número, confira que a imagem concreta está lá: "${primeira.slice(0, 110)}"`);
if (!/\bPuerto Rico\b|\bisland\b/i.test(primeira)) problemas.push(`a primeira frase não diz o lugar ("Puerto Rico" ou "island"; voz §1, "Os números da fala"): "${primeira.slice(0, 110)}"`);
if (!/\bPuerto Rico\b/.test(primeira)) alertas.push(`a primeira frase não diz "Puerto Rico" (a imagem de abertura é a ilha vista da Estação Espacial; voz §1): "${primeira.slice(0, 100)}"`);
// o "não se diz" e os alertas de mais de uma condição, frase a frase (a anterior vale para o que a frase diz por pronome)
frasesV5.forEach((f, i) => {
  const ant = i > 0 ? frasesV5[i - 1] : "";
  for (const r of NAO_SE_DIZ) {
    const v = r.julga(f, ant);
    if (v === "reprova") problemas.push(`não se diz [${r.id}] (${r.porque}): "${f.slice(0, 110)}"`);
    else if (v === "alerta") alertas.push(`conferir [${r.id}] (${r.alerta || r.porque}): "${f.slice(0, 100)}"`);
  }
  for (const a of ALERTA_V5) if (a.testa(f, ant)) alertas.push(`conferir [${a.id}] (${a.porque}): "${f.slice(0, 100)}"`);
});
// o fecho (voz §1, "Como ele fecha", do vídeo 5 em diante): sem repetir a pergunta do gancho e sem a resposta em lista (alertas)
const iAssV5 = frasesV5.findIndex((f) => ASSINATURA.test(f));
const finais = frasesV5.map((f, i) => ({ f, i })).filter(({ i }) => i > iAssV5).slice(-N_FECHO);
const perguntaGancho = iAssV5 > 0 ? frasesV5.slice(0, iAssV5).filter((f) => /\?["”’)]*$/.test(f)).pop() : null;
if (perguntaGancho) {
  const q = tokens(perguntaGancho).map((t) => t.n), nq = Math.min(N_PERGUNTA, q.length);
  const seqs = new Set();
  if (nq >= 3) for (let i = 0; i + nq <= q.length; i++) seqs.add(q.slice(i, i + nq).join(" "));
  for (const { f } of finais) {
    const t = tokens(f).map((x) => x.n);
    let achou = null;
    for (let i = 0; !achou && i + nq <= t.length; i++) if (seqs.has(t.slice(i, i + nq).join(" "))) achou = t.slice(i, i + nq).join(" ");
    if (achou) alertas.push(`o fecho repete a pergunta do gancho ("${perguntaGancho.slice(0, 90)}"): "${achou}" numa das ${N_FECHO} últimas frases (voz §1, "Como ele fecha"): "${f.slice(0, 100)}"`);
  }
}
const emLista = finais.filter(({ f }) => /^(?:First|Then|Next|Finally|Second|Third)\b|^(?:A|An) /.test(f));
if (emLista.length >= 3) alertas.push(`o fecho em lista: ${emLista.length} das ${finais.length} últimas frases abrem com "First", "Then", "Next", "Finally", "Second", "Third", "A " ou "An " (voz §1, "Como ele fecha"): ${emLista.map(({ f }) => `"${f.slice(0, 60)}"`).join(", ")}`);

// ---- item 8: o sha nos derivados (só com --derivados) ------------------------------------------------------------
const sha12 = sha256.slice(0, 12);
let derivados = null, derivadosVelhos = null;
if (COM_DERIVADOS) {
  const PASTA = dirname(ARQ);
  const LINHA_LAUDO = /^[ \t]*(?:>[ \t]*)?Revisão julgada:[ \t]*`?([0-9a-fA-F]{12,64})\b/m;
  const LINHA_DERIVADO = /^[ \t]*(?:>[ \t]*)?Revisão do roteiro:[ \t]*`?([0-9a-fA-F]{12,64})\b/m;
  const FORA = /-(?:r\d+[a-z]?|antigo)\.laudo\.md$/;
  const alvos = [];
  const qc = join(PASTA, "qc-roteiro");
  if (existsSync(qc)) for (const n of readdirSync(qc).sort()) if (n.endsWith(".laudo.md") && !FORA.test(n)) alvos.push([join(qc, n), LINHA_LAUDO]);
  for (const n of ["roteiro-editor.md", "pronuncia.md", join("voz", "texto-para-voz.md")]) if (existsSync(join(PASTA, n))) alvos.push([join(PASTA, n), LINHA_DERIVADO]);
  derivados = []; derivadosVelhos = [];
  for (const [arq, re] of alvos) {
    const m = lerTexto(arq).match(re), cita = m ? m[1].slice(0, 12).toLowerCase() : null;
    const a = arq.replaceAll("\\", "/");
    derivados.push({ arquivo: a, cita, ok: cita === sha12 });
    if (cita !== sha12) {
      derivadosVelhos.push({ arquivo: a, cita });
      problemas.push(cita ? `derivado com sha velho: ${a} cita ${cita}, e o texto falado de agora é ${sha12}`
        : `derivado sem o carimbo: ${a} não tem a linha "${re === LINHA_LAUDO ? "Revisão julgada" : "Revisão do roteiro"}: ${sha12}"`);
    }
  }
}

const laudo = {
  arquivo: ARQ,
  sha256,
  palavras, minutos_estimados: +(palavras / WPM).toFixed(2), paragrafos: paragrafos.length, frases: frases.length,
  media_palavras_por_frase: +media.toFixed(1), maior_frase: Math.max(...tamanhos),
  gancho: { palavras_ate_assinatura: palavrasAteAss, segundos_estimados: palavrasAteAss ? +(palavrasAteAss / WPM * 60).toFixed(1) : null, but_na_palavra: posBut },
  problemas, alertas,
  veredito: problemas.length ? "REPROVADO" : "PASSA",
  taxas, taxas_palavras_contadas: medida.palavras,
  autoplagio,
  ...(COM_DERIVADOS ? { sha12, derivados, derivados_velhos: derivadosVelhos } : {}),
};
console.log(JSON.stringify(laudo, null, 1));
process.exit(problemas.length ? 1 : 0);
