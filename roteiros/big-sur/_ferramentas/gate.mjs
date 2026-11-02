// gate.mjs — o portão determinístico do roteiro do vídeo 5 (por que um pedaço da costa da Califórnia, entre Los Angeles e San
// Francisco, é tão vazio quanto o Wyoming; slug big-sur), antes da bancada e depois de cada troca. Mede o texto de
// roteiros/big-sur/roteiro-narrador.md contra as regras que se contam (marca/voz.md §1 e §2, marca/embalagem.md §1 e §2, a pauta
// pautas/2026-11-01-video-5-big-sur.md e as decisões da Sala de controle de 02/11/2026). Não julga qualidade: isso é da bancada. O
// ferramentas/portao-fatos.mjs e o ferramentas/aplicar-lista.mjs o rodam para cruzar o sha do texto falado: a leitura (paragrafosDe)
// e a forma do sha são as do molde, sem mudança.
//
// Deriva do do vídeo 4 (roteiros/atlantico-fundo/_ferramentas/gate.mjs), em 02/11/2026, pelo pedido da Sala de controle. (O topo
// dele o chama de "vídeo 5": é a numeração de antes de 27/10/2026, que não se renumera.)
//   SAEM as regras só do Atlântico: os dois títulos dele ("deepest", "Atlantic", o 83 com milhas, a ilha e a marca dos EUA nas 3
//   primeiras frases); a 1ª frase com "Puerto Rico" ou "island"; o NAO_SE_DIZ dele (o Oceano Austral, o primeiro no fundo, os 80
//   anos, o Everest, as Sandwich do Sul, os 4 milhões, o 21 de dezembro, o 83 de San Juan, as Bermudas, os peixes, 1918 e os das
//   bancadas); o ALERTA_V5 dele (1918 com a fossa, os 200 peixes, as duas medidas e o resto, com as constantes que só eles usavam:
//   MEDIDA, NUM das medidas, ATRIBUI_PEIXE); da lista de palavras em ALERTA, os nomes "Milwaukee Deep" e "Brownson Deep" e o tom de
//   prateleira só do Atlântico ("anomaly", "megaquake"); e a lista dele do que nenhum padrão pega.
//   ENTRAM (o como de cada uma está junto da regra, abaixo):
//   - O TÍTULO, aprovado pelo Lucas com a pauta em 02/11/2026: "Why This Stretch of California Is as Empty as Wyoming" (pauta §2;
//     marca/embalagem.md §2: o núcleo se paga nas 3 primeiras frases; pauta §8, o gancho A: o pedaço da Califórnia, as duas
//     metrópoles, o distrito tão vazio quanto o Wyoming). Nas 3 primeiras frases, REPROVA sem "Wyoming"; REPROVA sem a marca da
//     Califórnia ("California", "Los Angeles" ou "San Francisco"); ALERTA sem "empty".
//   - A PRIMEIRA FRASE (marca/voz.md §1, "Os números da fala": o fato mais surpreendente sobre o lugar que a imagem de abertura mostra,
//     concreto, com o nome do lugar e um número ou uma imagem; marca/identidade.md §5, "O gancho que prende"). A imagem de abertura é
//     a ponte de Bixby, dentro do distrito do censo (pauta §6). REPROVA sem "Big Sur"; ALERTA sem número (algarismo, ou por extenso
//     de "two" a "billion"; "one" não conta: "one of" não é número). A falta de número só alerta porque a regra aceita "um número ou
//     uma imagem", e a imagem o portão não vê (o gancho A da pauta §8 abre sem número, sobre a ponte: "This is Big Sur, between Los
//     Angeles and San Francisco.").
//   - O "NÃO SE DIZ" DE BIG SUR (NAO_SE_DIZ, abaixo), da pauta §5, de "Depois do sim" (DS1 a DS5 e "O que muda no roteiro"), do
//     cético (K1 a K7) e das decisões da Sala de 02/11/2026. Cada um reprova com o porquê e a fonte: [zero-pessoas], [ninguem-mora]
//     (sem "almost" na frase), [cidade-big-sur], [milhas-com-1500] (70 ou 90 milhas na frase do 1.500), [duas-maiores],
//     [superlativo-sem-dono], [unica-estrada], [estrada-fechada] (no presente), [mansoes], [mais-rigido], [clima], [fogo-destruiu]
//     ("destroyed" com fogo ou casa na frase, com ou sem negação), [terceiro-maior] e [anos-1880].
//   - OS ALERTA DE BIG SUR (ALERTA_BS, abaixo): o que pede atribuição, medida ou leitura, e o que um padrão só pega em parte:
//     [presos], [proibido-construir], [esselen], [falha], [cone-peak] (com "district" na frase), [regra-hoje] ("still", "today",
//     "now" ou "since 1986" com "plan" ou "rule"), [veraneio], [visitantes] (sem "1986" na frase) e [big-sur-tem]. Dois
//     deles não estavam no pedido da Sala e saem das decisões dela ("fewer than 1,500", sempre com "the census district"; o Wyoming,
//     sempre 2020 com 2020): [1500-sem-distrito] e [wyoming-ano]. São alertas; a Sala pode tirá-los.
//   - A FAIXA de 2.250 a 2.450 palavras faladas (decisão da Sala para o ritmo calmo, do vídeo 5 em diante; sala/do-video-5-em-diante.md:
//     "quero um ritmo mais calmo", e os vídeos mais longos, de uns 13 a 15 minutos). O molde tinha 1.950 a 2.150.
//   - A MÉDIA de no máximo 15 palavras por frase e NENHUMA frase acima de 30 (a mesma decisão: frases mais curtas e mais espaço entre os
//     fatos). O molde tinha 18 (o teto da voz §1, que continua o da marca) e 34.
//   - O roteiro do vídeo 4 (roteiros/atlantico-fundo/roteiro-narrador.md) entra no autoplágio.
//   AS FRASES DAS REGRAS DE BIG SUR são as das taxas (frasesTaxaDe: o ponto do "U.S.", do "Mt." e do decimal não parte a frase), sem
//   as aspas de abertura, como as regras do vídeo 4 as liam. As regras herdadas (a média, a maior frase, as VETADAS, o laço do ALERTA,
//   as datas, o gancho) continuam com as frases de antes.
//   FICA todo o resto do molde, sem mudança: o que é texto falado, o sha, o --derivados (com os caminhos de roteiros/big-sur/), o
//   --onde, as VETADAS da voz, as palavras de ALERTA que não são do Atlântico (o universal "everyone", "nobody", "never", "first",
//   "last" e "always"; "mystery" e "secret", o tom de prateleira de qualquer vídeo; o presente; "here" e "this line", que a chamada
//   de inscrição veta, marca/cta.md §5), as frases que abrem com data, a assinatura uma vez com até 170 palavras, o "But" até a
//   palavra 50, a pergunta antes da assinatura, o FECHO (a pergunta do gancho repetida no fim e o fecho em lista, em alerta), as taxas
//   e os TETOS (os de Juneau e Los Angeles), o autoplágio e a sua exceção da pergunta de comentário. O ritmo de conta (WPM) continua o
//   da voz medida no v4, 184 palavras/min: o da voz calma sai do teste às cegas, e até lá os minutos do laudo são o piso.
//   O "last" do universal alerta também "last summer", a forma que a Sala deu ao fogo de 2026: ali o alerta se decide como conferido.
//
// O QUE NENHUM PADRÃO PEGA, OU SÓ PEGA EM PARTE (tarefa do verificador de fatos, por cobertura, frase a frase):
//   - o 1.500 dito da costa inteira com outras palavras ("this coast", "the whole coast", "from Carmel to San Simeon"): o
//     [1500-sem-distrito] só alerta quando nem a frase nem a anterior dizem "district". As 70 ou 90 milhas numa frase vizinha da do
//     1.500 (a montagem que soma as duas) só o verificador vê: o [milhas-com-1500] olha a mesma frase. O mapa que demarca o distrito
//     (o aviso dos leitores a frio) é da arte, não do texto;
//   - "Big Sur" como lugar com gente sem "the census district" e sem número ("Big Sur, a town of…", "the people of Big Sur", "the
//     community of Big Sur"): só "town/city/village of Big Sur", "the population of Big Sur" e "Big Sur's population" reprovam, e o
//     [big-sur-tem] só alerta com número de gente logo depois. O "nobody lives" passa quando há um "almost" em qualquer ponto da
//     frase ("almost a thousand came, but nobody lives…"), e "nobody calls it home" não tem padrão;
//   - o 1.500 seguido de unidade ("1,500 feet", "1,500 acres", "$1,500") não conta como gente, nem no [milhas-com-1500] nem no
//     [1500-sem-distrito]: o número de gente dito com outra unidade ("1,500 households") conta;
//   - os anos 1880 contra hoje pela montagem, sem as palavras vetadas: "nearly a thousand" vai atribuído ao plano de 1986 e dito da
//     costa (a régua do plano), nunca do distrito; se a montagem diz "não cresceu" sem dizer, é o verificador quem decide (o ponto
//     fraco do gancho B, pauta §8);
//   - as metrópoles: "more than 17 million" com a régua das duas regiões metropolitanas oficiais (L2), pelo nome; "20 million" ou "26
//     million" sem a régua (pauta §5) e "nearly 18 million" (a base de 2020, K2) não têm padrão. "Largest cities" sem o "two" passa;
//   - o Wyoming de outro ano sem o ano na frase (o [wyoming-ano] só alerta com o ano, 6.06 ou 588,753 na frase); a contagem do censo do
//     Wyoming (576.851, de memória, K7) contra a base das estimativas (576.872): a densidade é 5,94 nas duas;
//   - a estrada: o 1919 sem a Federal Highway Administration (K6; ou "nearly two decades"), os "18 years"/"eighteen years", o 1921 e o
//     1928 (só da busca); os US$ 8 milhões do plano contra os US$ 10 milhões da FHWA (outra régua); os presos: os três acampamentos, os
//     35 centavos por dia e a pena reduzida, atribuídos à FHWA; "built entirely by prisoners" só alerta [presos];
//   - a regra de 1986: a paráfrase dos 15 % ("new homes can use no more than 15 percent of the highway"); "about half was public land"
//     (o 60 % fica fora: era plano, não fato); a regra dita como de hoje sem "still", "today", "now" ou "since 1986" ("remains in force",
//     "to this day", "continues to"): o [regra-hoje] não vê; "the county bans building" dito sem o "que se vê da estrada";
//   - o fogo: o número dele na voz (a decisão é "em palavras": "last summer", "for weeks", "hundreds of homes and buildings"); "burned
//     homes", "burned down", "lost their homes", que não dizem "destroyed"; o Plaskett Fire com número (só pelo nome); o tom de quem
//     fala de gente que acabou de passar pelo fogo ("vazio" dito da comunidade);
//   - a estrada de hoje: "the road is open" é volátil (relê-se antes da publicação, DS3); "it will close again" como previsão (pauta §5)
//     não tem padrão; as datas de Paul's Slide e Regent's Slide e o ponto de cada um (K4);
//   - as casas: as duas réguas, cada uma com o dono (o dia do censo de 2020, quase quatro em dez vagas; a ACS de 5 anos, quase todas as
//     vagas de temporada), e nenhum número com margem na voz (265 ± 94): o [veraneio] só alerta "vacation/second home";
//   - os visitantes: "the visitors came back" (Caltrans, 15/05/2026); o "900 percent" só como o tráfego em Ragged Point, atribuído à
//     Visit California, nunca como contagem de visitantes: não há padrão para o 900;
//   - Mud Creek "the largest landslide" (pauta §5) e o tamanho dele: não lido, sem padrão;
//   - o Cone Peak dito no distrito por pronome na frase seguinte (o [cone-peak] olha a mesma frase);
//   - a estrada Nacimiento–Fergusson: "the only road" com outras palavras ("the one road", "no other road", "the single road") passa;
//   - o superlativo sem dono com outras palavras ("the emptiest place in California", "the emptiest stretch of California"): só
//     "emptiest coast(line)", "most photographed" e "most famous" reprovam;
//   - o clima: "mild", atribuído ao plano; "it never rains" e afins não têm padrão;
//   - a ponte de Bixby (o ano e quem a fez, pauta §11, item 4) e os Esselen (o [esselen] só alerta o nome);
//   - o que os leitores a frio pediram (out/_pautas/video-5-2026-11-01/teste-leitores.md): a virada além de "é montanha" ou "é parque"
//     (as casas que existem e ficam vazias, a regra do que se vê, a gente dos anos 1880) e os turistas no roteiro: é da bancada.
//
//   node roteiros/big-sur/_ferramentas/gate.mjs [arquivo] [--derivados] [--onde]      (cwd = raiz do canal)
//   saída: o laudo em JSON no stdout; exit 0 = passa, 1 = reprovado, 2 = não rodou (arquivo ausente, opção desconhecida)
//   A prova: node roteiros/big-sur/_ferramentas/gate-provar.mjs (os casos em out/_tmp/gate-big-sur/, fora do git).
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
//     roteiros/zona-do-canal/, roteiros/peru-agua/ e roteiros/atlantico-fundo/, o roteiro-narrador.md de cada um; a lista
//     ANTERIORES, abaixo)
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
// derivados moram na pasta do roteiro medido (no padrão, roteiros/big-sur/), e cada um traz, numa linha só dela
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
const ARQ = ARGS.find((a) => !a.startsWith("--")) || "roteiros/big-sur/roteiro-narrador.md";
if (!existsSync(ARQ)) { console.error(`não encontrado: ${ARQ}`); process.exit(2); }
const lerTexto = (arq) => readFileSync(arq, "utf8").replace(/^﻿/, "").replace(/\r\n?/g, "\n");
const bruto = lerTexto(ARQ);

const WPM = 184;                       // o ritmo medido da voz no v4 (out/los-angeles/_pesquisa/teste-voz-v4.md); o da voz calma sai do teste às cegas
// a faixa do ritmo calmo, do vídeo 5 em diante (a Sala, 02/11/2026; sala/do-video-5-em-diante.md): 2.250 palavras são 12,2 min a 184
// palavras/min e 14,1 min a 160; 2.450, 13,3 e 15,3. O molde tinha 1.950 a 2.150.
const MIN_PALAVRAS = 2250, MAX_PALAVRAS = 2450;
// a mesma decisão: frases mais curtas, um número por frase (o molde tinha 18, o teto da voz §1, e 34)
const MEDIA_MAX = 15, FRASE_MAX = 30;
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
  // o tom de prateleira de qualquer vídeo (o gênero "the secret of…"); "anomaly" e "megaquake", só do Atlântico, saíram
  /\bmyster(y|ies|ious)\b/i, /\bsecrets?\b/i,
  /\b(still|today|now|currently)\b/i, /\bhere\b/i, /\bthis line\b/i,
];
// ---- o "não se diz" de Big Sur (pautas/2026-11-01-video-5-big-sur.md §5, "Depois do sim" e "O cético"; as decisões da Sala de
// 02/11/2026): reprovam. Cada um tem o id (entre colchetes na mensagem), o porquê com a fonte, e julga(frase, a anterior) →
// "reprova" | "alerta" | null, na forma do molde. Aqui nenhum devolve "alerta": o que pede leitura ou medida está em ALERTA_BS.
const NUM_PALAVRAS = "two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|dozen";
const RE_NUM_EXTENSO = new RegExp(String.raw`\b(?:${NUM_PALAVRAS})\b`, "i");   // sem "one": "one of" não é número
const NUM_FALADO = String.raw`(?:\d[\d,]*(?:\.\d+)?|(?:one|${NUM_PALAVRAS})(?:[\s-]+(?:and[\s-]+)?(?:one|${NUM_PALAVRAS}))*)`;
// o 1.474 do distrito, dito de qualquer jeito ("1,500", "1,474", "fifteen hundred", "fourteen hundred", "a thousand five hundred"),
// fora o que é medida ou dinheiro: "1,500 feet", "1,500-foot", "1,500 acres" e "$1,500" não são gente
const MIL_E_QUINHENTOS = new RegExp(String.raw`(?<!\$)(?:\b1,?500\b|\b1,?474\b|\b(?:fifteen|fourteen) hundred\b|\b(?:one |a )?thousand(?:[\s-]+and)?[\s-]+(?:four|five) hundred\b)(?![\s-]*(?:(?:feet|foot|ft|meters?|metres?|miles?|acres?|square|percent|dollars|years?|degrees?|inches?)\b|%))`, "i");
const MILHAS_DA_COSTA = /\b(?:70|90|seventy|ninety)[\s-]+miles?\b/i;   // "70 miles", "70-mile", "seventy-mile", "ninety miles"
const ANOS_1880 = String.raw`(?:1880['’]?s|eighteen[- ]eighties)`;
const NAO_CRESCEU = new RegExp([
  String.raw`\bsame as (?:in |back in |during )?the ${ANOS_1880}`,
  String.raw`\bhas(?:n['’]t| not)\s+(?:really\s+|much\s+)?grown\b(?!\s+back\b)`,   // "hasn't grown back" é a encosta depois do fogo
  String.raw`\bfewer\b[^.?!]{0,50}?\bthan (?:in |back in |during )?the ${ANOS_1880}`,
  String.raw`\b${ANOS_1880}[^.?!]{0,60}\b(?:the same as|as many (?:people )?as|just as many as) (?:today|now)\b`,
  String.raw`\b(?:the same as|as many (?:people )?as) (?:today|now)\b[^.?!]{0,60}\b${ANOS_1880}`,
].join("|"), "i");
const ESTRADA_FECHADA = /\b(?:road|highway|Highway (?:1|One)|route)\s+(?:is|['’]s)\s+(?:(?:now|currently|still|again|fully)\s+)?closed\b|\bremains closed\b|\bstill closed\b/i;
const NAO_SE_DIZ = [
  { id: "zero-pessoas",
    porque: '"zero people" é falso: o distrito do censo contou 1.474 pessoas em 2020 (C3); o vazio é "fewer than 1,500", com "the census district" (pauta §2 e §5; a Sala, 02/11/2026)',
    julga: (f) => (/\bzero (?:people|residents|inhabitants|population|humans)\b/i.test(f) ? "reprova" : null) },
  { id: "ninguem-mora",
    porque: '"nobody lives" ou "no one lives" sem "almost" é falso: 1.474 pessoas no distrito em 2020 (C3); só "almost nobody", ou "fewer than 1,500" com a régua (pauta §2 e §5; a Sala, 02/11/2026)',
    julga: (f) => (/\b(?:nobody|no[- ]one)\s+(?:(?:really|actually|else|truly|ever)\s+)?lives?\b/i.test(f) && !/\balmost\b/i.test(f) ? "reprova" : null) },
  { id: "cidade-big-sur",
    porque: 'não há lugar recenseado "Big Sur" em 2020 (C3): o 1.474 é do distrito "Big Sur CCD"; nunca "the town of Big Sur", "the city of Big Sur", "the population of Big Sur" nem "Big Sur\'s population", e sempre "the census district" (pauta §4.1 e §5; a Sala, 02/11/2026)',
    julga: (f) => (/\b(?:town|city|village) of Big Sur\b|\bpopulation of Big Sur\b|\bBig Sur['’]s population\b/i.test(f) ? "reprova" : null) },
  { id: "milhas-com-1500",
    porque: 'as 70 milhas são da costa do plano de 1986 e as 90 da imprensa; o 1.474 é do distrito, que cobre uns dois terços do norte da costa (L1): nenhum dos dois na mesma frase que o 1.500 (pauta, "Três coisas", item 1, e §5; a Sala, 02/11/2026)',
    julga: (f) => (MILHAS_DA_COSTA.test(f) && MIL_E_QUINHENTOS.test(f) ? "reprova" : null) },
  { id: "duas-maiores",
    porque: '"as duas maiores" é falso na safra 2025: a região de Riverside–San Bernardino (4.769.007) passou a de San Francisco–Oakland (4.630.041) (K2); "Los Angeles and San Francisco", pelo nome, "more than 17 million people" (L2; a Sala, 02/11/2026)',
    julga: (f) => (/\btwo (?:largest|biggest)\b|\b(?:largest|biggest) metro(?:politan)?\b|\bbiggest cities\b/i.test(f) ? "reprova" : null) },
  { id: "superlativo-sem-dono",
    porque: '"California\'s emptiest coast", "most famous" e "most photographed" não têm dono, e a Lost Coast existe (pauta §2 e §5; a Sala, 02/11/2026)',
    julga: (f) => (/\bemptiest coast(?:line)?\b|\bmost[- ]photographed\b|\bmost famous\b/i.test(f) ? "reprova" : null) },
  { id: "unica-estrada",
    porque: '"the only road" e "the only way in" são falsos: há a estrada Nacimiento–Fergusson, pela serra; "the coast road" vale (pauta §1 e §5; a Sala, 02/11/2026)',
    julga: (f) => (/\b(?:the|its|their) only road\b|\bthe only way in\b/i.test(f) ? "reprova" : null) },
  { id: "estrada-fechada",
    porque: 'a Highway 1 reabriu em 14/01/2026 (L5), voltou a fechar trechos no Timber Fire e, em 01/11/2026, estava aberta, com mão única em pontos de obra (DS2, DS3): nunca "the road is closed" no presente; o fechamento vai no passado, com a data (pauta §5; a Sala, 02/11/2026)',
    julga: (f) => (ESTRADA_FECHADA.test(f) ? "reprova" : null) },
  { id: "mansoes",
    porque: 'as mansões e os bilionários são o assunto dos concorrentes (pauta §9) e não foram lidos; o preço das casas ficou fora de propósito (DS5; pauta §5; a Sala, 02/11/2026)',
    julga: (f) => (/\bbillionaires?\b|\bmansions?\b/i.test(f) ? "reprova" : null) },
  { id: "mais-rigido",
    porque: '"the strictest plan", "one of the toughest" vinham do resumo do caçador, sem dono (pauta §5; a Sala, 02/11/2026)',
    julga: (f) => (/\bstrictest\b|\btoughest\b/i.test(f) ? "reprova" : null) },
  { id: "clima",
    porque: 'o plano de 1986 diz só "The climate in Big Sur is mild" ([P]): nunca "perfect weather" nem "it never gets cold" (pauta §4.2 e §5)',
    julga: (f) => (/\bperfect (?:weather|climate)\b|\bnever gets (?:too |very )?(?:cold|hot|chilly)\b/i.test(f) ? "reprova" : null) },
  { id: "fogo-destruiu",
    porque: 'a página do Timber Fire no CAL FIRE mostra 661 estruturas ameaçadas (casas, comércio e outras) e nenhum número de destruídas (DS2): nem "destroyed homes", nem "no homes were destroyed"; "it threatened hundreds of homes and buildings" ("Depois do sim", "O que muda no roteiro"; a Sala, 02/11/2026)',
    julga: (f) => (/\bdestroy(?:ed|s|ing)?\b/i.test(f) && /\b(?:fires?|wildfires?|blazes?|homes?|houses?|buildings?|structures?|cabins?)\b/i.test(f) ? "reprova" : null) },
  { id: "terceiro-maior",
    porque: '"the third-largest fire in California" é só da imprensa (KION, KQED; K1, só da busca): nunca dito ("Depois do sim", "O que muda no roteiro"; a Sala, 02/11/2026)',
    julga: (f) => (/\bthird[- ](?:largest|biggest)\b/i.test(f) ? "reprova" : null) },
  { id: "anos-1880",
    porque: 'os quase mil dos anos 1880 são da costa inteira do plano de 1986 ([P]), e o 1.474 é de parte dela (L1): nunca "the same as in the 1880s", "it hasn\'t grown" nem "fewer people than in the 1880s"; os dois na mesma cena, cada um com o dono (pauta §4.3 e §5; a Sala, 02/11/2026)',
    julga: (f) => (NAO_CRESCEU.test(f) ? "reprova" : null) },
];
// ---- os ALERTA de Big Sur (conferir, nunca reprovar): {id, porque, testa(frase, a anterior)}
const BIG_SUR_TEM = new RegExp(String.raw`\bBig Sur\s+(?:has|had|is home to|was home to|counts|counted)\b[^.?!]{0,40}?\b${NUM_FALADO}(?=\s*(?:[,.;:?!]|$)|\s+(?:[\w-]+\s+){0,2}?(?:people|persons|residents|inhabitants|locals|souls)\b)`, "i");
const ALERTA_BS = [
  { id: "presos", porque: '"built by prisoners" sem a medida: a obra começou em 1919 (FHWA, L4) e os presos vieram de três acampamentos de San Quentin, numa parte do tempo, a 35 centavos por dia e com a pena reduzida (FHWA); "built entirely by prisoners", não (pauta §4.3 e §5; a Sala, 02/11/2026)',
    testa: (f) => /\bbuilt\s+(?:(?:entirely|mostly|largely|wholly|all)\s+)?by\s+(?:[\w-]+\s+){0,2}?(?:prisoners|convicts|inmates)\b|\b(?:prisoners|convicts|inmates)\s+built\b/i.test(f) },
  { id: "proibido-construir", porque: 'o plano de 1986 proíbe o que é novo e se vê da Highway 1 e dos mirantes (o "critical viewshed"); o resto é condicionado, não proibido (L3; pauta §4.3 e §5): "the county\'s 1986 plan" e o que se vê, nunca "building is banned"',
    testa: (f) => /\bcan(?:['’]t|not| not) build\b|\bbuilding (?:is|was) (?:banned|forbidden|prohibited|illegal|outlawed)\b|\bbanned from building\b|\b(?:nobody|no[- ]one) (?:can|could|may) build\b|\billegal to build\b/i.test(f) },
  { id: "esselen", porque: 'os Esselen ficam fora do roteiro: não há leitura numa fonte com dono, e nada fala por eles (pauta §4.3 e §5; a Sala, 02/11/2026)',
    testa: (f) => /\bEsselen\b/i.test(f) },
  { id: "falha", porque: 'a falha e o terremoto ficam fora do roteiro: não lidos (pauta §4.2 e §5; a Sala, 02/11/2026)',
    testa: (f) => /\b(?:earth)?quakes?\b|\bfault[- ]lines?\b|\bSan Andreas\b/i.test(f) },
  { id: "cone-peak", porque: 'o Cone Peak fica no distrito de San Ardo, não no de Big Sur (L1); a serra de 5.200 pés é "this coast", a régua do plano (pauta §4.2 e §5)',
    testa: (f) => /\bCone Peak\b/i.test(f) && /\bdistrict\b/i.test(f) },
  { id: "regra-hoje", porque: 'que a regra do plano de 1986 vale igual hoje não foi confirmado (pauta §11, item 2): nada de "still", "today", "now" ou "since 1986" sobre a regra; "the county\'s 1986 plan" (a Sala, 02/11/2026)',
    testa: (f) => /\b(?:plans?|rules?)\b/i.test(f) && /\b(?:still|today|now|currently|since 1986|since nineteen eighty-six)\b/i.test(f) },
  { id: "veraneio", porque: '"vacation home" e "second home" só como paráfrase atribuída ao Census Bureau: a ACS de 5 anos (2020–2024) dá quase todas as vagas "for seasonal, recreational, or occasional use" (DS4); o dia do censo de 2020 não diz o tipo (C3)',
    testa: (f) => /\b(?:vacation|second|holiday|weekend) homes?\b/i.test(f) },
  { id: "visitantes", porque: 'o número de visitantes com dono é o de 1986 (2,9 milhões por ano, o plano), sempre com o ano; o de hoje não tem dono: "the visitors came back" (Caltrans, 15/05/2026; DS5; a Sala, 02/11/2026)',
    testa: (f) => /\bmillions? (?:of )?(?:visitors|tourists)\b|\bmillion people (?:visit|come|drive|stop|pass)\w*/i.test(f) && !/\b1986\b|\bnineteen eighty-six\b/i.test(f) },
  { id: "big-sur-tem", porque: '"Big Sur has" ou "Big Sur is home to" com número de gente: o número é do distrito do censo, não de um lugar chamado Big Sur (C3): "the census district" (a Sala, 02/11/2026)',
    testa: (f) => BIG_SUR_TEM.test(f) },
  // os dois abaixo não estavam no pedido da Sala: saem das decisões dela de 02/11/2026 (e a Sala pode tirá-los)
  { id: "1500-sem-distrito", porque: 'o 1.500 sem "district" na frase nem na anterior: "fewer than 1,500", sempre com "the census district"; o distrito cobre uns dois terços do norte da costa (L1; a Sala, 02/11/2026)',
    testa: (f, ant) => MIL_E_QUINHENTOS.test(f) && !/\bdistrict\b/i.test(f) && !/\bdistrict\b/i.test(ant) },
  { id: "wyoming-ano", porque: 'o Wyoming de outro ano que 2020: o distrito só tem o censo de 2020, e o Wyoming de 2025 é 6,06/mi²; sempre 2020 com 2020, 5,94/mi² (pauta §4.1 e §5; a Sala, 02/11/2026)',
    testa: (f) => /\bWyoming\b/i.test(f) && /\b20(?:1\d|2[1-9])\b|\b6\.06\b|\b588,753\b/.test(f) },
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
    "roteiros/peru-agua/roteiro-narrador.md", "roteiros/atlantico-fundo/roteiro-narrador.md"];
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
if (palavras < MIN_PALAVRAS) problemas.push(`palavras: ${palavras}, abaixo de ${MIN_PALAVRAS} (a faixa do ritmo calmo, do vídeo 5 em diante, de uns 13 a 15 min: a Sala, 02/11/2026)`);
if (palavras > MAX_PALAVRAS) problemas.push(`palavras: ${palavras}, acima de ${MAX_PALAVRAS} (a faixa do ritmo calmo, do vídeo 5 em diante: a Sala, 02/11/2026)`);
if (media > MEDIA_MAX) problemas.push(`média de ${media.toFixed(1)} palavras por frase (teto ${MEDIA_MAX}: o ritmo calmo, do vídeo 5 em diante, a Sala, 02/11/2026; a voz §1 diz 18)`);
frases.forEach((f, i) => { if (tamanhos[i] > FRASE_MAX) problemas.push(`frase com ${tamanhos[i]} palavras (teto ${FRASE_MAX}, o ritmo calmo: a Sala, 02/11/2026): "${f.slice(0, 90)}…"`); });
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

// ---- Big Sur: o título, a primeira frase, o "não se diz", os alertas e o fecho ---------------------------------------
// as frases destas regras: as das taxas (o ponto do "U.S.", do "Mt." e do decimal não parte a frase), sem as aspas de abertura
const frasesBS = paragrafos.flatMap(frasesTaxaDe).map(abertura);
// o título aprovado (pauta §2; o Lucas, 02/11/2026): "Why This Stretch of California Is as Empty as Wyoming", pago nas 3 primeiras
// frases (embalagem §2): "Wyoming" e a marca da Califórnia reprovam; "empty" fica como alerta
const tresBS = frasesBS.slice(0, 3).join(" ");
if (!/\bWyoming\b/i.test(tresBS)) problemas.push('"Wyoming" não aparece nas 3 primeiras frases (o título "Why This Stretch of California Is as Empty as Wyoming" se paga ali: embalagem §2, pauta §2 e §8)');
if (!/\bCalifornia\b|\bLos Angeles\b|\bSan Francisco\b/i.test(tresBS)) problemas.push('"California", "Los Angeles" ou "San Francisco" não aparece nas 3 primeiras frases (o pedaço da Califórnia do título se paga ali: embalagem §2, pauta §2 e §8)');
if (!/\bempty\b/i.test(tresBS)) alertas.push('"empty" não aparece nas 3 primeiras frases (o título "…Is as Empty as Wyoming"; o gancho A da pauta §8 o diz na 3ª: "as empty as Wyoming")');
// a primeira frase (voz §1, "Os números da fala"): o fato mais surpreendente sobre o lugar da imagem de abertura (a ponte de Bixby,
// dentro do distrito do censo, pauta §6), com o nome do lugar e um número ou uma imagem
const primeira = frasesBS[0] || "";
if (!/\bBig Sur\b/i.test(primeira)) problemas.push(`a primeira frase não diz "Big Sur" (o lugar da imagem de abertura, a ponte de Bixby; voz §1, "Os números da fala"; pauta §6 e §8): "${primeira.slice(0, 110)}"`);
if (!/\d/.test(primeira) && !RE_NUM_EXTENSO.test(primeira)) alertas.push(`a primeira frase não tem número (algarismo ou por extenso): ela é o fato mais surpreendente sobre o lugar da imagem de abertura, concreto, com o nome do lugar e um número ou uma imagem (voz §1, "Os números da fala"); sem número, confira que a imagem concreta está lá: "${primeira.slice(0, 110)}"`);
// o "não se diz" e os alertas de Big Sur, frase a frase (a anterior vale para o que a frase diz por pronome)
frasesBS.forEach((f, i) => {
  const ant = i > 0 ? frasesBS[i - 1] : "";
  for (const r of NAO_SE_DIZ) {
    const v = r.julga(f, ant);
    if (v === "reprova") problemas.push(`não se diz [${r.id}] (${r.porque}): "${f.slice(0, 110)}"`);
    else if (v === "alerta") alertas.push(`conferir [${r.id}] (${r.alerta || r.porque}): "${f.slice(0, 100)}"`);
  }
  for (const a of ALERTA_BS) if (a.testa(f, ant)) alertas.push(`conferir [${a.id}] (${a.porque}): "${f.slice(0, 100)}"`);
});
// o fecho (voz §1, "Como ele fecha", do Atlântico em diante): sem repetir a pergunta do gancho e sem a resposta em lista (alertas)
const iAssBS = frasesBS.findIndex((f) => ASSINATURA.test(f));
const finais = frasesBS.map((f, i) => ({ f, i })).filter(({ i }) => i > iAssBS).slice(-N_FECHO);
const perguntaGancho = iAssBS > 0 ? frasesBS.slice(0, iAssBS).filter((f) => /\?["”’)]*$/.test(f)).pop() : null;
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
