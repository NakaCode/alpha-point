// gate.mjs — o portão determinístico do roteiro do vídeo 6 (por que a praia vendida como a maior do mundo, a Praia do Cassino, no
// extremo sul do Brasil, é quase uma linha reta; slug praia-do-cassino), antes da bancada e depois de cada troca. Mede o texto de
// roteiros/praia-do-cassino/roteiro-narrador.md contra as regras que se contam (marca/voz.md §1 e §2, marca/embalagem.md §1 e §2, a
// pauta pautas/2026-11-07-video-6-cassino.md, aprovada pelo Lucas em 07/11/2026, e o teste dos leitores a frio do mesmo dia,
// out/_pautas/video-6-2026-11-07/teste-leitores.md). Não julga qualidade: isso é da bancada. O ferramentas/portao-fatos.mjs e o
// ferramentas/aplicar-lista.mjs o rodam para cruzar o sha do texto falado: a leitura (paragrafosDe) e a forma do sha são as do molde,
// sem mudança.
//
// Deriva do do vídeo 5 (roteiros/big-sur/_ferramentas/gate.mjs), em 07/11/2026, pelo pedido da Sala de controle.
//   SAEM as regras só de Big Sur: o título dele ("Wyoming" e a marca da Califórnia nas 3 primeiras frases, "empty" em alerta); a 1ª frase
//   com "Big Sur"; o NAO_SE_DIZ dele (o zero, o "nobody lives", a cidade de Big Sur, as milhas com o 1.500, as duas maiores, o
//   superlativo sem dono, a única estrada, a estrada fechada, as mansões, o mais rígido, o clima, o fogo, o terceiro maior e os anos
//   1880), com as constantes que só ele usava (MIL_E_QUINHENTOS, MILHAS_DA_COSTA, ANOS_1880, NAO_CRESCEU, ESTRADA_FECHADA, BIG_SUR_TEM);
//   o ALERTA_BS dele inteiro (os presos, o proibido construir, os Esselen, a falha, o Cone Peak, a regra de hoje, o veraneio, os
//   visitantes, o "Big Sur has", o 1.500 sem distrito e o Wyoming de outro ano); a nota do "last summer"; e a lista dele do que nenhum
//   padrão pega. Das palavras de ALERTA, nenhuma era só de Big Sur: a lista fica inteira.
//   ENTRAM (o como de cada uma está junto da regra, abaixo):
//   - O TÍTULO, aprovado pelo Lucas com a pauta em 07/11/2026: "Why the World's Longest Beach Is Almost a Straight Line" (pauta §2;
//     marca/embalagem.md §2: o núcleo se paga nas 3 primeiras frases; pauta §8, o gancho A: "sold as the world's longest beach", "about
//     132 miles apart in a straight line", "less than five miles longer"). Nas 3 primeiras frases, REPROVA sem "longest beach" e REPROVA
//     sem "straight". E três ALERTA, decididos aqui (a Sala pode tirá-los):
//       · sem "world" junto do "longest beach" ("world's", "longest beach in the world"): o título diz "World's", e "Brazil's longest
//         beach" não o paga. Só alerta: a fama tem várias formas, e o "sold as" pode vir antes do lugar;
//       · com "straight" e sem "almost", "nearly", "barely", "hardly", "not quite" ou "longer": o "Almost" é o que mantém o título
//         honesto (pauta, "Três coisas", item 1; o teste dos leitores: sem ele, "o título vira enganoso", Dale). O gancho A não diz
//         "almost": paga com "less than five miles longer", e por isso o "longer" conta. Só alerta: a nuance pode vir com outra palavra;
//       · sem número em milhas (algarismo ou por extenso, antes de "mile"/"miles"/"mi"): a condição dos três leitores é dizer cedo os
//         números (a reta, 132 mi; a praia, menos de 5 mi a mais). Só alerta: a pauta paga o título na frase 3, e o mapa está na tela.
//     E um ALERTA no texto inteiro: a curva do meio (11 mi, "eleven miles") nunca dita. A fala tem de dizer o arco ("A fala diz isso",
//     pauta, "Três coisas", item 1; a condição dos leitores), e o portão não sabe onde ela entra: só se falta.
//   - A PRIMEIRA FRASE (marca/voz.md §1, "Os números da fala": o fato mais surpreendente sobre o lugar que a imagem de abertura mostra,
//     concreto, com o nome do lugar e um número ou uma imagem; marca/identidade.md §5, "O gancho que prende"). A imagem de abertura é a
//     areia reta, no Cassino (pauta §6). REPROVA sem "Cassino"; ALERTA sem número (o mesmo do molde: algarismo, ou por extenso de "two"
//     a "billion"; "one of" não conta). O gancho A da pauta §8 abre sem número ("This is Praia do Cassino, in Brazil, sold as the world's
//     longest beach."): a regra aceita "um número ou uma imagem", e a imagem o portão não vê.
//   - O "NÃO SE DIZ" DO CASSINO (NAO_SE_DIZ, abaixo), da pauta §5, do topo ("Três coisas" e "Depois do sim"), do §2 (o que fica fora do
//     título), do §4 (a coluna "Na fala"), do cético (K1 a K10), das leituras da Sala (S1 a S6) e do teste dos leitores. Cada um REPROVA,
//     com o porquê e a fonte na mensagem: [maior-praia-fato], [reta-perfeita], [linha-reta-sem-almost], [nunca-curva],
//     [paradoxo-errado], [paradoxo-explica], [mentira], [guinness-nega], [guinness-confirma] (sem dono; com dono, o alerta
//     [guinness-atribuido]), [tres-oficiais], [cidade-139], [so-39], [numero-sem-dono], [tres-decadas], [virginia-28],
//     [briga-vizinha], [hermenegildo-97], [parque-area], [parque-maior], [parque-juizo], [parque-previsao], [parque-processo],
//     [parque-praia-toda], [pdl-sem-data], [mare-numero], [mar-alto-numero], [rios-nada], [areia-dos-rios], [nada-cresce],
//     [sem-riacho], [linhas-na-areia], [idades], [conchas], [foguetes-lancados], [gemini-viu], [lugar-perfeito],
//     [altair-tempestade], [molhes-ano], [rivais], [visto-do-espaco], [data-relativa], [populacao], [fecho-milhas-atras] e
//     [brasil-um-so]. Onde a pauta dá a forma que se pode dizer, ela passa (a prova confere cada uma).
//   - OS ALERTA DO CASSINO (ALERTA_C, abaixo): o que pede atribuição ou leitura. Os do pedido da Sala: [158-sem-turismo] (o 158 ou o
//     254 sem o turismo do Estado na frase), [223-sem-trilha] (o 139 ou o 223 sem a trilha), [albardao-sem-dono] (o parque sem o
//     decreto, na frase nem na anterior), [pdl-sem-dono] (o pedido de derrubada sem o senador), [altair] (a distância, o "on purpose"
//     sem o g1, o "may disappear" sem a FURG, outro ano que 1976), [gemini] (toda menção, até o relatório da missão ser lido) e
//     [hermenegildo] (o meio da faixa é o Albardão). Os a mais, que saem da mesma pauta (e a Sala pode tirá-los):
//     [guinness-atribuido], [39-sem-dono], [135-sem-dono], [foguetes-numero], [razoes-do-senador], [sem-interrupcao],
//     [onda-altura], [eighty-mile] e [fosseis].
//   - A FAIXA de 2.300 a 2.500 palavras faladas (a pauta §7: ~2.400 palavras, 13,4 min a 179; o alvo de 13 a 14 min). O de Big Sur tinha
//     2.250 a 2.450.
//   - O RITMO DE CONTA (WPM): 179 palavras/min, a voz medida no Big Sur (a cópia para a voz, roteiros/big-sur/voz/texto-para-voz.md,
//     tem 2.300 palavras por este portão, em 767,6 s de fala: out/big-sur/_tmp/regente/v2_ritmo.out.txt; 179,8/min), o ritmo que o
//     Lucas escolheu às cegas em 03/11/2026. O de Big Sur contava a 184 (a voz do v4). Os minutos do laudo contam as palavras do texto
//     do narrador, com os números em algarismo: a cópia para a voz tem uns 2 % a mais (Big Sur: 2.260 contra 2.300).
//   - O roteiro do vídeo 5 (roteiros/big-sur/roteiro-narrador.md) entra no autoplágio.
//   AS FRASES DAS REGRAS DO CASSINO são as das taxas (frasesTaxaDe: o ponto do "U.S.", do "a.m." e do decimal não parte a frase), sem
//   as aspas de abertura, como as de Big Sur. As regras herdadas (a média, a maior frase, as VETADAS, o laço do ALERTA, as datas, o
//   gancho) continuam com as frases de antes.
//   FICA todo o resto do molde, sem mudança: o que é texto falado, o sha, o --derivados (com os caminhos de roteiros/praia-do-cassino/),
//   o --onde, as VETADAS da voz (atenção: "breaking" e "regime" estão lá, e "breaking waves" ou "wave regime" reprovam), as palavras
//   de ALERTA (o universal "everyone", "nobody", "never", "first", "last" e "always"; "mystery" e "secret"; o presente; "here" e "this
//   line", que a chamada de inscrição veta, marca/cta.md §5), as frases que abrem com data, a assinatura uma vez com até 170 palavras,
//   o "But" até a palavra 50 (o "Yet" não conta), a pergunta antes da assinatura, o FECHO (a pergunta do gancho repetida no fim e o
//   fecho em lista, em alerta), a média de no máximo 18 palavras por frase e nenhuma acima de 34 (os tetos do molde: o ritmo calmo vem
//   do espaço entre as ideias), as taxas e os TETOS (os de Juneau e Los Angeles), o autoplágio e a sua exceção da pergunta de
//   comentário.
//
// O QUE NENHUM PADRÃO PEGA, OU SÓ PEGA EM PARTE (tarefa do verificador de fatos, por cobertura, frase a frase):
//   - a fama dita como fato sem cópula nem aposto ("Welcome to the world's longest beach", "on the world's longest beach", "the world's
//     longest", sem "beach"): o [maior-praia-fato] só pega "is (the) world's longest beach" e ", the world's longest beach" sem rótulo
//     na frase. "The world's longest beach starts and ends at walls people built" passa (a pauta, §4.3, o usa depois do "sold as");
//   - a reta: "straight" sem ressalva com outras palavras ("it runs true", "a ruler could have drawn it", "not a wiggle in 136 miles"); a
//     reta de régua por pronome na frase seguinte; e o "early" dos leitores (o mapa com a reta cedo é da arte; o alerta do arco só vê
//     se o 11 falta no texto inteiro). "There are no wiggles for the extra miles to hide in" passa: é a frase da pauta (§7, ato 3), e
//     "wiggle" não está no [nunca-curva]. "A straight line" dito de outra coisa ("the shortest path is a straight line") reprova o
//     [linha-reta-sem-almost]: o portão não sabe de quem se fala;
//   - o paradoxo: a explicação do g1 dada como nossa sem as palavras de causa ("the paradox is at work here", "blame the ruler"); a
//     régua do canal sem a declaração na tela (é da arte); "the paradox barely works" passa (pauta §4.3);
//   - o 158: "none of the sources we read says who measured it, or how" (pauta §5 e §11, item 6) é a forma; dizer que o Estado errou ou
//     inventou com outras palavras ("the state got it wrong", "someone added 20 miles") só pega em parte; "Brazilian officials say 158"
//     passa o [brasil-um-so];
//   - o Guinness: o que o g1 conta do livro (1993 a 1995, as edições brasileiras, a "praia mais extensa do Brasil", o trecho tirado
//     depois da contestação), atribuído ao g1 e ao livro de Willy César; "for years" no lugar de "for three decades" com outras palavras
//     ("for a generation"); "the only one we could find" e o "ONLY" fora da tela; o recorde de Virginia Beach sem o número (o
//     [virginia-28] só olha a mesma frase);
//   - os números com dono: a régua de cada um (o IBGE é o limite dos municípios com o mar, a trilha é o que se anda, o 254 é do turismo
//     do Estado) e o "uma vez por fonte" na voz (o 136 uma vez, a UFRGS uma vez, as razões do senador uma vez): o portão não conta
//     repetição; o [numero-sem-dono] só pega a cópula ("the beach is 158 miles") e o adjetivo ("158 miles of sand");
//   - os 39 mi: "only" com outras palavras ("a mere stretch of 39"), e o "só no ato 2" (o portão só sabe do gancho);
//   - o Albardão: o lugar do parque na areia antes do mapa do ICMBio com outras palavras ("from the lighthouse to the border"), o tom
//     ("a win for nature", "red tape"), as razões do senador nos termos do texto do PDL (o [razoes-do-senador] só alerta), e o estado
//     do projeto, que se relê antes da publicação;
//   - a física: a maré "well under two feet" (as médias divergem: 0,25 ou 0,5 m), "several feet higher" (2 ou 3 m), as idades das
//     barreiras ditas sem número ("the oldest barrier, from the last ice age"), os sangradouros e o "nothing builds out" com outras
//     palavras; a lama na frente do Cassino (o contrapeso de K10) não tem padrão;
//   - o eclipse: "the launches went ahead", "the countdown ended in fire" e afins, sem "rocket" nem "NASA"; o Gemini 12 que "got a
//     view"; o laço causal com outras palavras ("the empty sand made it easy"); o ponto do lançamento só como "about 15 miles south of
//     Rio Grande, near Cassino";
//   - o Altair: o "on purpose" atribuído ao g1 por pronome numa frase longe; "abandoned", "dumped" sem tempestade; os 16 ou 20 km;
//   - os molhes: o [molhes-ano] só pega o ano com a obra na frase ("built", "finished", "began", "went up"…); "the 1915 breakwaters"
//     passa. E ele pega qualquer quebra-mar com ano e obra, inclusive o de outro lugar (no roteiro de Los Angeles, dois casos);
//   - as medidas que o ajuste da precisão deixa passar: o fundo "at low tide" não conta como maré ([mare-numero]); a altitude "above sea
//     level" não conta como o mar de antes ([mar-alto-numero]); o "$158" não conta como o 158; "sounding" (a sondagem de profundidade)
//     não conta como foguete; "Eighty Mile Beach" e "Ninety Mile Beach" não contam como distância; o "National Park Service" não conta
//     como o parque;
//   - o fecho sem número com outras formas ("the whole 136 behind you" pega; "every mile of it" não);
//   - o que os leitores a frio pediram (out/_pautas/video-6-2026-11-07/teste-leitores.md): o "who" da miniatura pago na física ("nobody
//     drew it: the waves did", na forma que o roteiro escolher) e a "gentle S-curve": é da bancada.
//
//   node roteiros/praia-do-cassino/_ferramentas/gate.mjs [arquivo] [--derivados] [--onde]      (cwd = raiz do canal)
//   saída: o laudo em JSON no stdout; exit 0 = passa, 1 = reprovado, 2 = não rodou (arquivo ausente, opção desconhecida)
//   A prova: node roteiros/praia-do-cassino/_ferramentas/gate-provar.mjs (os casos em out/_tmp/gate-praia-do-cassino/, fora do git).
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
//     roteiros/zona-do-canal/, roteiros/peru-agua/, roteiros/atlantico-fundo/ e roteiros/big-sur/, o roteiro-narrador.md de
//     cada um; a lista ANTERIORES, abaixo)
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
// derivados moram na pasta do roteiro medido (no padrão, roteiros/praia-do-cassino/), e cada um traz, numa linha só dela
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
const ARQ = ARGS.find((a) => !a.startsWith("--")) || "roteiros/praia-do-cassino/roteiro-narrador.md";
if (!existsSync(ARQ)) { console.error(`não encontrado: ${ARQ}`); process.exit(2); }
const lerTexto = (arq) => readFileSync(arq, "utf8").replace(/^﻿/, "").replace(/\r\n?/g, "\n");
const bruto = lerTexto(ARQ);

// o ritmo da voz medido no Big Sur: a cópia para a voz (roteiros/big-sur/voz/texto-para-voz.md), 2.300 palavras por este portão, em
// 767,6 s de fala (out/big-sur/_tmp/regente/v2_ritmo.out.txt): 179,8/min. O Lucas o escolheu às cegas em 03/11/2026 ("Amostra 2").
const WPM = 179;
// a faixa do vídeo 6 (a pauta §7: ~2.400 palavras, 13,4 min a 179; o alvo de 13 a 14 min). 2.300 palavras são 12,8 min a 179; 2.500, 14,0
const MIN_PALAVRAS = 2300, MAX_PALAVRAS = 2500;
// os tetos do molde (o 18 é o da voz §1): o ritmo calmo vem do espaço entre as ideias, não de frases cortadas (o Lucas, 02/11/2026)
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
  // o tom de prateleira de qualquer vídeo (o gênero "the secret of…")
  /\bmyster(y|ies|ious)\b/i, /\bsecrets?\b/i,
  /\b(still|today|now|currently)\b/i, /\bhere\b/i, /\bthis line\b/i,
];
// ---- os números falados (do molde) ------------------------------------------------------------------------------------------------
const NUM_PALAVRAS = "two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|dozen";
const RE_NUM_EXTENSO = new RegExp(String.raw`\b(?:${NUM_PALAVRAS})\b`, "i");   // sem "one": "one of" não é número
const NUM_FALADO = String.raw`(?:\d[\d,]*(?:\.\d+)?|(?:one|${NUM_PALAVRAS})(?:[\s-]+(?:and[\s-]+)?(?:one|${NUM_PALAVRAS}))*)`;
const NUMR = String.raw`(?<![\w.,])${NUM_FALADO}`;   // o número que começa ali (nem no meio de "5,000", nem dentro de "often")
const NUM_MILHAS = new RegExp(String.raw`${NUMR}[\s-]+(?:miles?|mi)\b`, "i");
const DIST_RE = new RegExp(String.raw`${NUMR}[\s-]+(?:miles?|mi|km|kilomet(?:er|re)s?)\b`, "i");
// o nome da praia não é distância: "Eighty Mile Beach" e "Ninety Mile Beach" saem antes de procurar o número com milhas
const NOME_DE_MILHAS = /\b(?:Eighty|Ninety)[\s-]Mile\s+Beach\b/gi;
const DIST = { test: (f) => DIST_RE.test(f.replace(NOME_DE_MILHAS, "Beach")) };
const UNID_ALTURA = String.raw`(?:inch(?:es)?|centimet(?:er|re)s?|cm|millimet(?:er|re)s?|mm|met(?:er|re)s?|m|feet|foot|ft)\b`;
const NUM_ALTURA = new RegExp(String.raw`${NUMR}[\s-]+${UNID_ALTURA}`, "i");
const NEGA_ANTES = /(?:n['’]t|\bnot|\bnever|\bno)\b[^.?!]{0,40}$/i;   // uma negação nas 40 letras antes do achado
const pergunta = (f) => /\?["”’)]*$/.test(f);

// ---- o "não se diz" do Cassino (pautas/2026-11-07-video-6-cassino.md §5, o topo, o §2, o §4, o cético, as leituras da Sala e o teste
// dos leitores): reprovam. Cada um tem o id (entre colchetes na mensagem), o porquê com a fonte, e julga(frase, a anterior, {i, iAss})
// → "reprova" | "alerta" | null, na forma do molde. Aqui nenhum devolve "alerta": o que pede leitura ou dono está em ALERTA_C.
const MAIOR_PRAIA = String.raw`(?:(?:the\s+)?(?:world|earth|planet)['’]s\s+longest\s+beach|the\s+longest\s+beach\s+(?:in\s+the\s+world|on\s+(?:earth|the\s+planet)))`;
const MAIOR_DO_MUNDO = new RegExp(MAIOR_PRAIA, "i");
const AFIRMA_MAIOR = new RegExp(String.raw`(?:\b(?:is|was|isn['’]t|wasn['’]t|is\s+not|was\s+not|remains|became|becomes|ranks\s+as|stands\s+as|counts\s+as)|['’]s)\s+(?:(?:truly|really|actually|officially|definitely|indeed|still|now|technically|arguably|easily|probably|clearly|simply|in\s+fact|by\s+far)\s+)*${MAIOR_PRAIA}|,\s*${MAIOR_PRAIA}`, "i");
const ROTULO_FAMA = /\b(?:sold|billed|marketed|advertised|promoted|known|called|calls?|named|dubbed|claims?|claimed|says?|said|according|websites?|sites?|reputation|fame|famous|title|record|label(?:ed|led)?|nicknamed?|brochures?|signs?|slogan|repeat\w*|papers?|newspapers?|press|account|branded)\b/i;
const RETA_ABSOLUTA = /\b(?:perfectly|completely|totally|entirely|absolutely|exactly|dead|truly|ruler|arrow|razor|laser|pin)[\s-]+straight\b|\bstraight\s+as\s+(?:an?\s+)?(?:arrow|ruler|die|string|razor|laser|yardstick)\b|\bstraightest\b/i;
const RETA_NUA = /\b(?:beach|coast|coastline|shore|shoreline|it|sand|strip|stretch)(?:\s+(?:is|was|looks|stays|runs)|['’]s)\s+straight\b(?!\s*[-–]?\s*(?:out|into|to|up|down|from|away|ahead|across|through|toward|towards|back|for)\b)/i;
const LINHA_RETA = /(?:\b(?:is|was|are|were|forms?|formed|makes?|made|follows?|followed|runs?\s+in|ran\s+in|lies?\s+in|lay\s+in)|['’]s)\s+(?:(?:just|simply|really|truly|literally|basically|essentially|pretty\s+much|practically|virtually|almost|nearly|close\s+to|all\s+but|more\s+or\s+less|roughly|not\s+quite|very\s+nearly)\s+)*(?:a|one)\s+(?:(?:long|single|perfect|near|nearly|almost|true|pure|giant|huge|clean)[\s-]+)*straight\s+line\b/i;
const HEDGE_RETA = /\b(?:almost|nearly|near|practically|virtually|close\s+to|all\s+but|more\s+or\s+less|roughly|not\s+quite)\b/i;
const NUNCA_CURVA = /\bnever\s+(?:bends?|bent|curves?|curved|wavers?|deviates?|veers?|swerves?)\b|\bno\s+(?:curves?|bends?)\b|\bnot\s+(?:a|one)\s+(?:single\s+)?(?:curve|bend)\b|\bwithout\s+(?:a|any|one)\s+(?:single\s+)?(?:curve|bend)s?\b|\b(?:does|did)(?:n['’]t|\s+not)\s+(?:even\s+)?(?:bend|curve)\b/i;
const QUASE_ANTES = /\b(?:almost|nearly|barely|hardly|practically|virtually)\s*$/i;
const PARADOXO = /\bparadox\b/i;
const ERRADO = /\b(?:wrong|fails?|failed|failing|breaks?|broke|broken|debunk\w*|disprov\w*|false|refut\w*|collapses?)\b|\bdoes(?:n['’]t|\s+not)\s+(?:apply|work|hold)\b|\bis(?:n['’]t|\s+not)\s+(?:true|real|right)\b/i;
const ERRADO_PRONOME = /(?:^|,\s*)(?:it|that|this|the\s+paradox|the\s+idea|the\s+theory)\b[^.?!]{0,30}?(?:\b(?:is\s+wrong|fails|failed|breaks\s+down|broke\s+down|is\s+broken|is\s+false)\b|\bdoes(?:n['’]t|\s+not)\s+(?:apply|work|hold)\b)/i;
const PARADOXO_CAUSA = /\bparadox\b[^.?!]{0,50}?\b(?:explains?|explained|accounts?\s+for|is\s+(?:the\s+)?(?:reason|answer|cause)|is\s+why|causes?|caused|creates?|created|adds?|added|produces?)\b|\b(?:because\s+of|thanks\s+to|due\s+to|blame|comes?\s+from|came\s+from|explained\s+by|caused\s+by)\s+(?:the\s+)?(?:coastline\s+|coast\s+)?paradox\b/i;
const DOS_NUMEROS = /\b(?:158|254|139|223|135|136|218|gap|difference|numbers?|figures?|extra|missing|this\s+beach|the\s+beach|Cassino|here|these\s+miles|the\s+miles)\b/i;
const ATRIBUI_PARADOXO = /\b(?:g1|wikipedia|encyclopedia|WorldAtlas|famous|usual|common|popular|standard|they|says?|said|claims?|according|textbook|supposed|would|should|expect|you['’]d|in\s+theory)\b|\byou['’]ll\s+read\b/i;
const MENTIRA = /\bfake\b|\bmyths?\b|\bmythical\b|\bhoax\w*|\bfraud\w*|\bscams?\b|\bbogus\b|\bdebunk\w*|\bliars?\b|\blied\b|\b(?:a|the|big|white|outright)\s+lie\b|\bmade[- ]up\b(?!\s+of\b)|\bfabricat\w*/i;
const ERRADO_NUM = /\b(?:158|254|number|figure|state|website|site|Guinness|record|claim|title)\b[^.?!]{0,40}?(?:\b(?:is|was|are|were)|['’]s)\s+(?:(?:just|simply|plainly|clearly|probably|flat|obviously)\s+)?(?:wrong|incorrect|false|bogus|untrue|inaccurate)\b/i;
const EXAGERO = /\b(?:exaggerat\w*|inflat(?:ed|es|ing)|overstat\w*|stretch(?:es|ed)?\s+the\s+truth)\b/i;
const QUEM_EXAGERA = /\b(?:Brazil\w*|state|Rio\s+Grande|Cassino|tourism|government|officials?|website|site|number|figure|158|254|record|claim|Guinness)\b/i;
const GUINNESS = /\bGuinness\b/i;
const NEGA_G = /\b(?:den(?:y|ies|ied|ials?)|reject\w*|refut\w*|disown\w*|debunk\w*|dismiss\w*|disavow\w*|never)\b|\b(?:has|keeps|holds|lists)\s+no\s+(?:such\s+)?record\b|\bno\s+such\s+record\b/i;
const CONFIRMA_G = /\b(?:confirm\w*|certif\w*|verif\w*|recogni[sz]\w*|award\w*|officially|official\s+(?:record|title)|endors\w*|approv\w*|lists?\s+it|listed|ranks?\s+it|ranked|crowned|holds?\s+(?:the\s+|a\s+)?(?:\w+\s+){0,2}?record|record[- ]holder|record\s+holder)\b/i;
const ATRIBUI = /\b(?:says?|said|according|websites?|sites?|WorldAtlas|claims?|claimed|calls?|called|papers?|newspapers?|press|reports?|reported|repeat\w*|print\w*|sold|billed|marketed|words|brochures?|signs?|tourism)\b|\byou['’]ll\s+read\b|\bstate['’]s\b/i;
const N_TRILHA = String.raw`(?:139|223|one\s+hundred\s+(?:and\s+)?thirty[\s-]nine|two\s+hundred\s+(?:and\s+)?twenty[\s-]three)`;
const RE_TRILHA_NUM = new RegExp(String.raw`(?<![\w.,])${N_TRILHA}\b`, "i");
const CIDADE = /\b(?:city|city\s+hall|town\s+hall|mayor\w*|municipal\w*|prefeitura|local\s+government)\b/i;
const TRILHA = /\b(?:trails?|hike[sd]?|hiking|hikers?|route|walk\w*|trek\w*)\b/i;
const N39 = String.raw`(?:39|thirty[\s-]nine|62|sixty[\s-]two)`;
const SO_39 = new RegExp(String.raw`\b(?:only|just|merely|barely|really|actually|truly|a\s+mere)\s+(?:(?:about|around|some|roughly|nearly)\s+)?${N39}\b`, "i");
const MI_39 = /(?<![\w.,])(?:39|thirty[\s-]nine)[\s-]+(?:miles?|mi)\b|(?<![\w.,])(?:62|sixty[\s-]two)(?:\.\d+)?[\s-]+(?:km|kilomet(?:er|re)s?)\b/i;
const N_FAIXA = String.raw`(?:158|254|135|136|139|218|219|220|223|one\s+hundred\s+(?:and\s+)?(?:fifty[\s-]eight|thirty[\s-](?:five|six|nine))|two\s+hundred\s+(?:and\s+)?(?:fifty[\s-]four|eighteen|nineteen|twenty(?:[\s-]three)?))(?:\.\d+)?`;
const COPULA_NUM = new RegExp(String.raw`\b(?:beach|it|Cassino|shore|shoreline|coast|coastline|strip|stretch|sand)(?:\s+(?:is|was|measures|measured|runs|ran|stretches|stretched|spans|spanned|extends|extended|covers|covered|goes\s+on\s+for)|['’]s)\s+(?:(?:about|around|roughly|nearly|almost|some|over|more\s+than|just\s+over|exactly|precisely|a\s+full)\s+)?${N_FAIXA}[\s-]+(?:miles?|mi|km|kilomet(?:er|re)s?)\b`, "i");
const ADJ_NUM = new RegExp(String.raw`(?<![\w.,])${N_FAIXA}[\s-]+(?:miles?|mi|km|kilomet(?:er|re)s?)\s+(?:of\s+)?(?:(?:white|golden|unbroken|continuous|empty|open)\s+)*(?:sand|beach|coast|coastline|shore)\b|(?<![\w.,])${N_FAIXA}-(?:mile|kilomet(?:er|re)|km)(?:-long)?\s+(?:\w+\s+)?(?:beach|coast|shore|strip|stretch)\b`, "i");
const DONO_NUM = /\b(?:says?|said|according|maps?|mapped|puts?|line|ruler|IBGE|agency|statistics|OpenStreetMap|OSM|trails?|websites?|sites?|state|tourism|sold|claims?|claimed|calls?|called|lists?|listed|prints?|printed|we|our|us|count\w*|survey\w*|government)\b/i;
const DECADAS = /\b(?:three|3)\s+decades\b|\b(?:thirty|30)\s+years\b|\bsince\s+the\s+['’]?(?:19)?90s\b|\bsince\s+the\s+(?:nineteen[\s-])?nineties\b/i;
const CTX_FAMA = /\b(?:Guinness|record|title|newspapers?|papers|press|media|headlines?|articles?|reporters?|claim\w*|called|repeat\w*|longest|fame|famous)\b/i;
const PARQUE = /\b(?:parks?|Albard[aã]o|decree|protected\s+areas?|reserves?|APA|conservation\s+areas?|sanctuar(?:y|ies))\b/i;
const AREA = /\b(?:hectares?|acres?|square\s+(?:miles?|kilomet(?:er|re)s?|km))\b|\b(?:sq\.?\s*(?:mi|km)\b|mi²|km²)/i;
const PARQUE_CTX = /\b(?:parks?|Albard[aã]o|decree|protected\s+areas?|APA|reserves?|bill|senator|Senate|PDL|Heinze)\b/i;
const JUIZO = /\b(?:threaten\w*|under\s+(?:attack|threat|siege|fire)|at\s+risk|in\s+danger|in\s+jeopardy|endanger\w*|finally\s+(?:protected|safe|saved)|saved|saving|rescue[ds]?|rescuing|power\s+grab|land\s+grab|attack\w*|assault\w*|war\s+on|victory|defeat\w*)\b/i;
const PREVISAO = /\b(?:will|is\s+going\s+to|are\s+going\s+to|is\s+likely\s+to|is\s+set\s+to|is\s+expected\s+to|could\s+soon|may\s+soon|is\s+bound\s+to)\s+(?:(?:probably|likely|soon|almost\s+certainly)\s+)?(?:be\s+)?(?:overturned|cancel(?:l)?ed|struck\s+down|revoked|annulled|repealed|scrapped|approved|rejected|upheld|killed|survive|fall|stand|win|lose|pass|fail|disappear|end)\b|\b(?:is|are|seems?)\s+(?:now\s+)?(?:safe|secure|doomed)\b|\bdoomed\b/i;
const PROCESSO = /\b(?:suing|sued|sues|lawsuits?|legal\s+action|in\s+court|to\s+court|court\s+case|injunction)\b/i;
const QUEM_PROCESSA = /\bSanta\s+Vit[oó]ria\b|\b(?:mayor\w*|city|town|municipalit\w*|prefeitura)\b/i;
const PRAIA_TODA = /\b(?:parks?|protected\s+areas?|APA|reserves?|decree)\b[^.?!]{0,60}?\b(?:covers?|covering|covered|protects?|protecting|protected|includes?|including|included|spans?|spanning|takes\s+in|encompass\w*|stretches\s+along|runs\s+along|reaches\s+along)\s+(?:(?:the|this)\s+)?(?:whole|entire|full|all(?:\s+of)?(?:\s+the)?|every\s+mile\s+of(?:\s+the)?)\s+(?:beach|sand|coast|coastline|stretch|shore|strip)\b|\b(?:whole|entire|all\s+of\s+the)\s+(?:beach|sand|coast|stretch|shore|strip)\s+(?:is|was|are|lies)\s+(?:now\s+)?(?:protected|(?:a|inside\s+(?:a|the))\s+(?:national\s+)?park|inside\s+the\s+protected\s+area)\b/i;
const ESTADO_PDL = /\bstill\s+(?:waiting|pending|stuck|sitting|sits|in\s+(?:a\s+)?committee|awaiting|unresolved|undecided)\b|\b(?:waiting\s+(?:for|in|on)|awaiting|pending|stalled|stuck\s+in|sits\s+in|sitting\s+in|is\s+in\s+(?:a\s+)?(?:Senate\s+)?committee)\b|\bhas(?:n['’]t|\s+not)\s+(?:moved|advanced|been\s+(?:voted|decided|debated))\b|\bno\s+(?:vote|rapporteur|decision)\s+yet\b/i;
const PDL = /\b(?:bill|PDL|Senate|senator|committee|Heinze)\b/i;
const MESES = "January|February|March|April|May|June|July|August|September|October|November|December";
const COM_DATA = new RegExp(String.raw`\bas\s+of\s+(?:(?:early|mid|late)[\s-]+)?(?:(?:${MESES})\s+)?(?:\d{1,2},?\s+)?(?:20\d\d|twenty[\s-]twenty[\s-]\w+)\b|\b(?:in|by)\s+(?:early\s+|mid[\s-]|late\s+)?(?:${MESES}),?\s+20\d\d\b`, "i");
const MARE = /\btid(?:e|es|al)\b/i;
const TETO_ANTES = /\b(?:under|less\s+than|below|no\s+more\s+than|not\s+even|not\s+quite|barely|at\s+most|up\s+to)\s*$/i;
// o mar mais alto que hoje, com número: "the sea stood ten feet higher", "two meters above today's level"; "4,000 feet above sea
// level" (uma altitude) passa
const UNID_MAR = String.raw`(?:feet|foot|ft|met(?:er|re)s?|m|yards?)\b`;
const MAR_ALTO = new RegExp(String.raw`\b(?:sea|seas|ocean|water)(?:\s+level)?\s+(?:stood|was|were|rose|sat|reached|peaked|lay|had\s+been)\b[^.?!]{0,30}?${NUMR}[\s-]+${UNID_MAR}[^.?!]{0,15}?\b(?:higher|above|up)\b|${NUMR}[\s-]+${UNID_MAR}\s+(?:higher|above)\s+(?:than\s+)?(?:today|now|the\s+present|today['’]s|present|it\s+is\s+(?:today|now))\b`, "i");
const RIOS_NADA = /\brivers?\b[^.?!]{0,50}?\b(?:send|sends|sent|carry|carries|carried|bring|brings|brought|deliver\w*|take|takes|took|give|gives|gave|contribute\w*)\s+(?:almost\s+)?nothing\b|\bnothing\b[^.?!]{0,40}?\b(?:reaches|reached|gets\s+to|makes\s+it\s+to|flows\s+(?:out\s+)?to|goes\s+out\s+to)\s+(?:the\s+)?(?:sea|ocean)\b/i;
const AREIA_RIO = /\b(?:sand|beach|beaches)\b[^.?!]{0,30}?\b(?:comes?|came|coming)\s+from\s+(?:the\s+)?rivers?\b|\brivers?\s+(?:bring|brings|brought|carry|carries|carried|deliver\w*|supply|supplies|supplied|feed|feeds|fed|dump\w*|drop\w*)\s+(?:(?:the|this|its|their|all\s+the)\s+)?sand\s+(?:to|onto|into|on)\s+(?:the\s+|this\s+)?(?:beach|coast|shore|sea|ocean)\b/i;
const NADA_CRESCE = /\bnothing\s+(?:builds?|grows?|pushes|juts|sticks|bulges|pokes)\s+out\b|\bnothing\s+(?:can\s+)?builds?\s+up\b/i;
const SEM_RIACHO = new RegExp(String.raw`\bnot\s+(?:a|one)\s+(?:single\s+)?(?:stream|river|creek|brook|channel|inlet|outlet)\b|\bno\s+(?:streams?|rivers?|creeks?|brooks?|inlets?|outlets?)\s+(?:cross\w*|break\w*|cut\w*|interrupt\w*|reach\w*|run\w*)\b|\b(?:unbroken|uninterrupted|without\s+(?:a|one)\s+(?:single\s+)?break)\b[^.?!]{0,25}?\b(?:for|over|along|across)\s+(?:(?:about|nearly|almost|some|more\s+than|all)\s+)?${NUM_FALADO}[\s-]+(?:miles?|mi|km)\b`, "i");
const DEZ_VINTE = /(?<![\w.,])(?:10|ten)\s*(?:to|-|–|or)\s*(?:20|twenty)\s*(?:per\s*cent|percent|%)/i;
const LINHAS = /\b(?:high|low)[\s-](?:tide|water)\s+(?:lines?|marks?)\b|\b(?:waterline|water\s+line|dune\s+line|tide\s+line|foot\s+of\s+the\s+dunes)\b/i;
const MEDIDA_CTX = /\b(?:measur\w*|length|long|longer|shorter|miles?|km|kilomet\w+|difference|numbers?|figures?)\b/i;
const IDADE = /(?<![\w.,])(?:\d{2,3},\d{3}|\d{1,3},\d{3},\d{3}|\d{2,3}\s+thousand|\d+(?:\.\d+)?\s+million|(?:ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred)(?:[\s-]+(?:and[\s-]+)?(?:one|two|three|four|five|six|seven|eight|nine|ten|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred))*[\s-]+thousand|(?:a|one|two|three|four|five|half\s+a)\s+million|tens\s+of\s+thousands\s+of|hundreds\s+of\s+thousands\s+of)[\s-]+years?\b/i;
const CONCHAS = /\b(?:shells?|seashells?|shell\s+(?:beds?|banks?|deposits?|fields?)|concheiros?)\b/i;
const MOTOS = /\b(?:motorcycl\w*|motorbik\w*|bikers?|riders?|drivers?)\b[^.?!]{0,50}?\b(?:fear\w*|dread\w*|afraid|scar\w*|terrif\w*|nightmare|avoid\w*)\b/i;
const FOGUETE = /\b(?:rockets?|payloads?|Nike(?:[\s-]\w+)?)\b/i;   // sem "sounding": a sondagem de profundidade também se chama assim
const NASA = /\bNASA\b/;
const LANCOU = /\b(?:launched|lifted\s+off|blasted\s+off|took\s+off|went\s+up|flew|shot\s+up|soared|fired|were\s+sent\s+up|roared)\b/i;
const PLANO_F = /\b(?:plan\w*|scheduled|would|will|to\s+be|were\s+to|was\s+to|expected|meant\s+to|set\s+to|supposed\s+to|intended|propos\w*|unknown|unclear|how\s+many|whether)\b|\b(?:does|did)(?:n['’]t|\s+not)\s+say\b/i;
const GEMINI = /\bGemini\b/i;
const VIU = /\b(?:watched|saw|seen|observed|photographed|filmed|witnessed|captured|spotted|recorded|viewed|caught)\b/i;
const PLANO_G = /\b(?:scheduled|plan\w*|were\s+to|was\s+to|would|expected|meant\s+to|set\s+to|supposed\s+to|will|to\s+(?:watch|observe|photograph|see|film))\b/i;
const CTX_LANC = /\b(?:rockets?|launch\w*|NASA|eclipse|1966|payloads?|scientists?)\b/i;
const PERFEITO = /\b(?:perfect|ideal|obvious|natural|best|right|ideally\s+suited|tailor[\s-]made|made\s+for)\b[^.?!]{0,30}?\b(?:launch(?:\s*(?:site|pad|place|spot))?|site|place|spot|location|choice|pad|stage)\b|\bbecause\s+(?:the|this|a|its)\s+(?:beach|coast|sand|shore)\s+(?:was|is)\s+(?:so\s+)?(?:long|straight|empty|flat|remote|wide|open)\b|\b(?:long|straight|empty|flat|remote),?\s+(?:and\s+)?(?:long|straight|empty|flat|remote)\b[^.?!]{0,40}?\b(?:perfect|ideal|right)\b/i;
const ALTAIR = /\bAltair\b/i;
const NAVIO = /\b(?:the\s+ship|the\s+freighter|the\s+vessel|the\s+cargo\s+ship|it)\b/i;
const NAUFRAGIO = /\b(?:wrecked|ran\s+aground|run\s+aground|sank|sunk|capsized|smashed|crashed)\b|\bstorms?\b[^.?!]{0,40}?\b(?:wreck\w*|drove|driven|threw|thrown|tossed|hurled|pushed|dumped|stranded|beached|grounded|washed|cast|swept)\b|\b(?:wreck\w*|drove|driven|threw|thrown|tossed|hurled|pushed|dumped|stranded|beached|grounded|washed|cast|swept)\b[^.?!]{0,40}?\bstorms?\b/i;
const PROPOSITO = /\b(?:on\s+purpose|deliberately|intentionally|g1|according|reports?|says)\b/i;
const MOLHES = /\b(?:breakwaters?|jett(?:y|ies)|molhes|seawalls?|(?:stone\s+)?walls?|piers?)\b/i;
const ANO_UNICO = /(?<![\w.,])1[89]\d\d\b(?!['’]?s)/;
// só a obra datada: "the walls were finished in 1915"; "since 1976, the Altair has sat between the walls" passa
const OBRA = /\b(?:built|build|building|finished|finish|completed|complete|went\s+up|go\s+up|opened|construct\w*|raised|laid|begun|began|begin|started|erected|extended|work\s+(?:began|started|ended))\b/i;
const EIGHTY = /\bEighty[\s-]Mile\s+Beach\b/i;
const COMPARA = /\b(?:longer|longest|bigger|biggest|larger|largest)\b/i;
const COX = /\bCox['’]s\s+Bazar\b/i;
const COX_MAIOR = /\bCox['’]s\s+Bazar(?:\s+beach)?(?:\s+(?:is|was|remains)|['’]s)\s+(?:(?:really|truly|actually|officially)\s+)?(?:the\s+)?(?:world['’]s\s+)?(?:longest|biggest)\b/i;
const PADRE = /\bPadre\s+Island\b/i;
const ESPACO = /\b(?:visible|seen|see\s+it|spot\s+it|spotted|be\s+seen|make\s+it\s+out)\s+from\s+(?:space|orbit|the\s+(?:moon|space\s+station))\b/i;
const IMAGEM_ESPACO = /\b(?:Sentinel\S*|satellite|ESA|Copernicus|images?|photos?|pictures?)\b/i;
const N_ANOS = "one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety";
const DATA_REL = new RegExp(String.raw`\bthis\s+(?:month|year)\b|(?<![\w.,])(?:\d{1,2}|(?:${N_ANOS})(?:[\s-]+(?:one|two|three|four|five|six|seven|eight|nine))?|a\s+(?:few|couple(?:\s+of)?)|several|many|some)\s+(?:years|decades|months|weeks)\s+ago\b|\b(?:half\s+a\s+century|a\s+century|a\s+decade|a\s+year)\s+ago\b`, "i");
const LUGAR = /\b(?:Cassino|Rio\s+Grande|Santa\s+Vit[oó]ria|Hermenegildo|Albard[aã]o)\b|\bChu[ií](?!\w)/i;
const POP = /\b(?:population|residents|inhabitants|locals|dwellers)\b|\bpeople\s+(?:live|lived|living|call\s+it\s+home)\b|\b(?:city|town|port|resort|community)\s+of\s+(?:(?:about|some|nearly|almost|more\s+than|over)\s+)?\d/i;
const MILHAS_ATRAS = new RegExp(String.raw`${NUMR}[\s-]+(?:miles?|mi|km)\b[^.?!]{0,25}?\bbehind\s+(?:you|us|me)\b`, "i");
const BRASIL_UM = /\bBrazil\s+(?:says|said|claims?|claimed|calls?|called|insists?|measures?|measured|lists?|listed|puts?|exaggerat\w*|advertises?|advertised)\b|\bBrazilians\s+(?:say|said|claim|claimed|call|insist|believe)\b/i;
const HERM_97 = /(?<![\w.,])(?:97|ninety[\s-]seven|15[56](?:\.\d+)?|one\s+hundred\s+(?:and\s+)?fifty[\s-](?:five|six))\b/i;

const NAO_SE_DIZ = [
  { id: "maior-praia-fato",
    porque: '"the world\'s longest beach" só como fama, com dono ("sold as", "calls itself", "the state\'s website says"): o Guinness disse ao g1 que não monitora o título (fatos A.1), e o recorde estava só nas edições brasileiras, como "praia mais extensa do Brasil" (pauta §5; §2, o rótulo; o gancho A: "sold as")',
    julga: (f) => (AFIRMA_MAIOR.test(f) && !ROTULO_FAMA.test(f) && !pergunta(f) ? "reprova" : null) },
  { id: "reta-perfeita",
    porque: 'a praia não é reta de régua: no meio, perto do Albardão, ela se afasta 18 km (11 mi) da reta, para o mar (L12); nunca "perfectly straight", "ruler-straight" sem negação, "the straightest coast" (nenhuma fonte compara) nem "the beach is straight" sem ressalva; vale "It isn\'t ruler-straight", "it barely wiggles" (pauta §2, §4.3 e §5; o teste dos leitores: "a gentle S-curve")',
    julga: (f) => {
      for (const re of [RETA_ABSOLUTA, RETA_NUA]) { const m = f.match(re); if (m && !NEGA_ANTES.test(f.slice(0, m.index))) return "reprova"; }
      return null;
    } },
  { id: "linha-reta-sem-almost",
    porque: '"a straight line" dito da praia sem o "almost": a praia tem menos de 5 mi a mais que a reta, mas faz um arco de 11 mi (L12); sem o "Almost", o título vira enganoso (o teste dos leitores, Dale); vale "almost a straight line", "nearly a straight line", e a distância das paredes "in a straight line" (pauta §5 e §8)',
    julga: (f) => { const m = f.match(LINHA_RETA); return m && !HEDGE_RETA.test(m[0]) && !NEGA_ANTES.test(f.slice(0, m.index)) ? "reprova" : null; } },
  { id: "nunca-curva",
    porque: '"never bends", "no curves", "doesn\'t bend" são falsos: o arco do meio tem 11 mi (L12); vale "it barely bends", "almost never" (pauta §2 e §5)',
    julga: (f) => { const m = f.match(NUNCA_CURVA); return m && !QUASE_ANTES.test(f.slice(0, m.index)) ? "reprova" : null; } },
  { id: "paradoxo-errado",
    porque: 'o paradoxo da costa não está errado: aqui ele quase não age; nunca "wrong", "fails", "doesn\'t apply", "breaks the paradox"; vale "On this coast, it barely works" e a régua do canal, declarada na tela (pauta §4.3 e §5)',
    julga: (f, ant) => ((PARADOXO.test(f) && ERRADO.test(f)) || (PARADOXO.test(ant) && !PARADOXO.test(f) && ERRADO_PRONOME.test(f)) ? "reprova" : null) },
  { id: "paradoxo-explica",
    porque: 'o paradoxo da costa não explica os números desta praia: de 10 m a 50 km a linha do OSM muda 1,7 % (L11) e nenhuma régua passa de 220 km, e os 254 ficam 16 % acima (S2, L11; K1): ele é a explicação do g1, da enciclopédia e do WorldAtlas, e vai atribuído ("The famous explanation is the coastline paradox") (pauta §4.3; as leituras da Sala, item 2)',
    julga: (f) => (PARADOXO_CAUSA.test(f) && DOS_NUMEROS.test(f) && !ATRIBUI_PARADOXO.test(f) ? "reprova" : null) },
  { id: "mentira",
    porque: 'o vídeo não diz que alguém mente: diz que nenhuma régua chega ao número e que nenhuma fonte lida diz quem o mediu; nunca "fake", "myth", "lie", "made up", "the 158 is wrong" nem "the state exaggerates" (pauta §2, §3 o tom, e §5; voz §2)',
    julga: (f) => (MENTIRA.test(f) || ERRADO_NUM.test(f) || (EXAGERO.test(f) && QUEM_EXAGERA.test(f)) ? "reprova" : null) },
  { id: "guinness-nega",
    porque: 'o Guinness não negou nada: disse ao g1 que não monitora o título (fatos A.1); e o g1 conta que um trecho sobre a "praia mais extensa do Brasil" saiu nas edições brasileiras de 1993 a 1995 (fatos A.2): nunca "Guinness denies it" nem "it was never in the Guinness book"; vale "Guinness World Records told Brazil\'s g1 news site it doesn\'t monitor that title" (pauta §4.1 e §5)',
    julga: (f) => (GUINNESS.test(f) && NEGA_G.test(f) ? "reprova" : null) },
  { id: "guinness-confirma",
    porque: 'o Guinness não confirma o título: disse ao g1 que não o monitora (fatos A.1); "recognised by Guinness World Records since 1994" é o que o WorldAtlas diz, e vai com o dono (fatos 1.7); sem dono na frase, reprova (pauta §4.1 e §5)',
    julga: (f) => (GUINNESS.test(f) && CONFIRMA_G.test(f) && !ATRIBUI.test(f) ? "reprova" : null) },
  { id: "tres-oficiais",
    porque: '"three official lengths" caiu: são dois governos (o IBGE e o turismo do Estado) e uma trilha (S4; K5); e o "all three are right" saiu do gancho com a régua (K1) (pauta, "O que mudou da v1", e §5)',
    julga: (f) => (/\b(?:three|3)\s+(?:different\s+|separate\s+|competing\s+|rival\s+)?official\b|\bin\s+a\s+way,?\s+all\s+three\b|\ball\s+three\s+(?:are|were|could\s+be|can\s+be)\s+(?:right|correct|true)\b/i.test(f) ? "reprova" : null) },
  { id: "cidade-139",
    porque: 'os 223 km (139 mi) são da Rede Brasileira de Trilhas, a distância de uma trilha (S4); o número da Prefeitura do Rio Grande não foi lido (S4): nunca "the city says 139"; vale "a national trail network puts its route at 139 miles" (pauta §4.3 e §5)',
    julga: (f) => (RE_TRILHA_NUM.test(f) && CIDADE.test(f) && !TRILHA.test(f) ? "reprova" : null) },
  { id: "so-39",
    porque: 'os 39 mi (62 km) são "the part inside the city of Rio Grande, the part that carries the Cassino name", atribuídos ao g1 e à Fepam, e só no ato 2: nunca "only 39 miles", e nunca no gancho (o jogo de nome que derrubou o título 3 e a miniatura "ONLY 39 MILES?", K9) (pauta §4.3 e §5)',
    julga: (f, ant, ctx) => (SO_39.test(f) || (MI_39.test(f) && ctx && ctx.iAss >= 0 && ctx.i < ctx.iAss) ? "reprova" : null) },
  { id: "numero-sem-dono",
    porque: 'nenhum comprimento da faixa sem dono na frase ("the beach is 158 miles", "135 miles of sand"): 135 é a linha do IBGE, 136 a do OpenStreetMap (a medida do canal, declarada na tela), 139 a trilha, 158 o turismo do Estado (pauta §4.3 e §5)',
    julga: (f) => ((COPULA_NUM.test(f) || ADJ_NUM.test(f)) && !DONO_NUM.test(f) ? "reprova" : null) },
  { id: "tres-decadas",
    porque: 'nenhum jornal dos anos 1990 foi lido, e a base não tem data (K10): nunca "for three decades" nem "since the 1990s, newspapers…"; vale "for years" (pauta §4.1 e §5)',
    julga: (f) => (DECADAS.test(f) && CTX_FAMA.test(f) ? "reprova" : null) },
  { id: "virginia-28",
    porque: 'o "28 miles" fica só para Long Beach: dois "28 miles" seguidos confundem (K10); o recorde de Virginia Beach vai sem número (pauta §4.1 e §5)',
    julga: (f) => (/\bVirginia\s+Beach\b/i.test(f) && /(?<![\w.,])(?:28|twenty[\s-]eight)\b/i.test(f) ? "reprova" : null) },
  { id: "briga-vizinha",
    porque: 'sem rir de ninguém: Santa Vitória do Palmar contestou o trecho do livro, e cada um fala nos próprios termos; nunca "stole the title", "a feud", "jealous neighbors" (pauta §3 o tom, e §5)',
    julga: (f) => (/\b(?:stole|stolen|steal(?:s|ing)?|feud\w*|jealous\w*|envious|envy|rivalry|rivalries|bad\s+blood|war\s+of\s+words|turf\s+war|grudges?)\b/i.test(f) ? "reprova" : null) },
  { id: "hermenegildo-97",
    porque: 'o Hermenegildo e a Barra do Chuí são balneários pequenos na ponta sul; a maior parte dos 156 km de Santa Vitória do Palmar é o Albardão (K6, a confirmar no OSM): nunca "Hermenegildo and Barra do Chuí are the other 97 miles" (pauta §4.3 e §5)',
    julga: (f) => (/\bHermenegildo\b/i.test(f) && HERM_97.test(f) ? "reprova" : null) },
  { id: "parque-area",
    porque: 'sem hectares na voz (nem acres, nem milhas quadradas do parque): a área vai à tela só com o mapa (o cético; pauta §4.4 e §5)',
    julga: (f) => (PARQUE.test(f) && AREA.test(f) ? "reprova" : null) },
  { id: "parque-maior",
    porque: '"the largest marine park in Brazil" é só da busca, FRÁGIL (K2): fora (pauta §4.4 e §5)',
    julga: (f) => (/\b(?:largest|biggest|greatest|most\s+extensive|vastest)\b[^.?!]{0,40}?\b(?:park|protected\s+area|reserve|sanctuary|conservation\s+area|marine\s+area)s?\b/i.test(f) ? "reprova" : null) },
  { id: "parque-juizo",
    porque: 'o assunto tem lado, e a voz não toma partido: o decreto diz o que protege, o senador diz o que o projeto faz; nunca "finally protected", "threatened", "under attack" (pauta §4.4, o tom, e §5; voz §1 e §2)',
    julga: (f) => (PARQUE_CTX.test(f) && JUIZO.test(f) ? "reprova" : null) },
  { id: "parque-previsao",
    porque: 'a voz não prevê o resultado: nunca "the park will be overturned" nem "the park is safe" (pauta §4.4 e §5)',
    julga: (f) => (PARQUE_CTX.test(f) && PREVISAO.test(f) ? "reprova" : null) },
  { id: "parque-processo",
    porque: 'o prefeito que ameaça ir à Justiça é só do resumo de uma busca, não lido (as leituras da Sala, item 6): nunca "Santa Vitória is suing" (pauta §4.4 e §5)',
    julga: (f) => (PROCESSO.test(f) && (PARQUE_CTX.test(f) || QUEM_PROCESSA.test(f)) ? "reprova" : null) },
  { id: "parque-praia-toda",
    porque: 'de que ponto a que ponto da areia o parque e a APA vão está a confirmar no mapa do ICMBio, que não foi achado pronto ("Depois do sim", item 3): nunca "the park covers the whole beach" (pauta §4.4 e §5)',
    julga: (f) => (PRAIA_TODA.test(f) ? "reprova" : null) },
  { id: "pdl-sem-data",
    porque: 'o estado do PDL 112/2026 muda ("Em tramitação", "AGUARDANDO DESIGNAÇÃO DO RELATOR" em 12/05/2026, lido em 07/11/2026, S6): vai com a data na frase ("As of November 2026, it was still waiting in a Senate committee"), e se relê antes da publicação (pauta §4.4 e §5)',
    julga: (f, ant) => (ESTADO_PDL.test(f) && (PDL.test(f) || PDL.test(ant)) && !COM_DATA.test(f) ? "reprova" : null) },
  { id: "mare-numero",
    porque: 'as médias da maré divergem (0,25 m em Toldo, 0,5 m em Dillenburg; fatos 3.4 e 3.5, L10): nunca um número de maré ("ten inches"); vale o teto firme, "a tide of well under two feet" (pauta §4.5 e §5)',
    julga: (f) => {
      if (!MARE.test(f.replace(/\bat\s+(?:low|high)\s+tide\b/gi, ""))) return null;   // "ten feet at low tide" é fundo, não a maré
      for (const m of f.matchAll(new RegExp(NUM_ALTURA.source, "gi"))) if (!TETO_ANTES.test(f.slice(0, m.index))) return "reprova";
      return null;
    } },
  { id: "mar-alto-numero",
    porque: 'a altura do mar de 5 mil anos atrás diverge (~3 m em Clerot, ~2 m em Dillenburg; fatos 3.8, L10): nunca "the sea was ten feet higher"; vale "several feet higher" (pauta §4.5 e §5)',
    julga: (f) => (MAR_ALTO.test(f) ? "reprova" : null) },
  { id: "rios-nada",
    porque: '"the rivers send nothing to the sea" é falso: a Lagoa dos Patos manda lama ao mar bem em frente à praia (K10, Continental Shelf Research 29(3), 2009); o que fica nas lagoas é a areia, a carga de fundo (fatos 3.2, L10) (pauta §4.5 e §5)',
    julga: (f) => (RIOS_NADA.test(f) ? "reprova" : null) },
  { id: "areia-dos-rios",
    porque: '"the sand comes from the rivers" é o contrário: os rios deixam a areia nas lagoas de trás, e o sistema praial recebe muito pouca areia do continente (Toldo; Dillenburg, L10); a areia vem da plataforma (pauta §4.5 e §5)',
    julga: (f) => { const m = f.match(AREIA_RIO); return m && !NEGA_ANTES.test(f.slice(0, m.index + m[0].length)) ? "reprova" : null; } },
  { id: "nada-cresce",
    porque: '"so nothing builds out into the sea" é inferência: só com a frase de um geólogo, que não foi lida (pauta §4.5, §5 e §11, item 5)',
    julga: (f) => (NADA_CRESCE.test(f) ? "reprova" : null) },
  { id: "sem-riacho",
    porque: 'o firme é a barreira com só duas aberturas em 625 km (Dillenburg, L10); os sangradouros não foram lidos (fatos 2.9): nunca "not a single stream crosses the sand" nem "unbroken for 135 miles"; vale "in about 390 miles, the barrier opens in only two places" (pauta §4.5 e §5)',
    julga: (f) => (SEM_RIACHO.test(f) ? "reprova" : null) },
  { id: "linhas-na-areia",
    porque: 'as linhas na areia (as dunas, a preamar, a baixa-mar) e os "10 to 20 per cent" do WorldAtlas não explicam a diferença: numa costa reta, linhas paralelas a uns 100 m têm o mesmo comprimento (K1); fora, na fala e no desenho (pauta §4.3 e §5)',
    julga: (f) => (DEZ_VINTE.test(f) || (LINHAS.test(f) && MEDIDA_CTX.test(f)) ? "reprova" : null) },
  { id: "idades",
    porque: 'as idades das barreiras são FRÁGEIS (fatos 3.7) e ficam fora; a praia de hoje é a barreira mais nova: nunca "a 400,000-year-old beach"; o mar de 5 mil anos atrás, FIRME, passa (pauta §4.5 e §5)',
    julga: (f) => (IDADE.test(f) ? "reprova" : null) },
  { id: "conchas",
    porque: 'as conchas divergem (60 km em Calliari e Klein, 1993; "até 15 km" no Brasil de Fato, K6): sem número; e "the stretch motorcyclists fear" não tem fonte (título de vlog não é fonte) (pauta §4.5 e §5)',
    julga: (f) => ((CONCHAS.test(f) && DIST.test(f)) || MOTOS.test(f) ? "reprova" : null) },
  { id: "foguetes-lancados",
    porque: 'o release 66-285 da NASA é de antes do eclipse: planeja 21 foguetes de Cassino ("will be launched"); quantos subiram não foi lido (fatos 4.8, FRÁGIL): nunca "21 rockets were launched" nem "NASA launched rockets from the beach"; vale "planned" (pauta §4.6 e §5)',
    julga: (f) => ((FOGUETE.test(f) || NASA.test(f)) && LANCOU.test(f) && !PLANO_F.test(f) ? "reprova" : null) },
  { id: "gemini-viu",
    porque: 'o release diz que os astronautas do Gemini 12 "will observe" o eclipse (fatos 4.7): "was scheduled to watch", nunca "watched", até a leitura do relatório da missão (pauta §4.6, §5 e §11, item 8; K4)',
    julga: (f) => (GEMINI.test(f) && VIU.test(f) && !PLANO_G.test(f) ? "reprova" : null) },
  { id: "lugar-perfeito",
    porque: 'o laço "uma praia longa, reta e vazia era o lugar perfeito" não está em fonte nenhuma: o release dá o porquê, "very near the path of totality" (fatos 4.2; K4) (pauta §4.6 e §5)',
    julga: (f) => (CTX_LANC.test(f) && PERFEITO.test(f) ? "reprova" : null) },
  { id: "altair-tempestade",
    porque: 'o g1 diz que o Altair foi jogado à costa de propósito, numa tempestade, para não afundar; o Seu Dinheiro, que encalhou num banco de areia: nunca "the storm wrecked the Altair" nem "it ran aground" sem dono; vale "on purpose", atribuído ao g1 (pauta §4.6 e §5)',
    julga: (f, ant) => ((ALTAIR.test(f) || (NAVIO.test(f) && ALTAIR.test(ant))) && NAUFRAGIO.test(f) && !PROPOSITO.test(f) ? "reprova" : null) },
  { id: "molhes-ano",
    porque: 'o ano dos molhes do norte é FRÁGIL (1911 a 1919, fatos 5.3), e o do sul não foi lido: "in the 1910s" para o norte, e o sul sem ano; nunca "the breakwaters were finished in 1915" (pauta §4.3 e §5)',
    julga: (f) => (MOLHES.test(f) && ANO_UNICO.test(f) && OBRA.test(f) ? "reprova" : null) },
  { id: "rivais",
    porque: 'cada rival ganha com o seu adjetivo, sem número: a Eighty Mile Beach fica fora da v2, Cox\'s Bazar é "marketed as" (FRÁGIL), e os números de Cox\'s Bazar, de Padre Island e da Eighty Mile Beach ficam fora; nunca "Eighty Mile Beach is longer", "Cox\'s Bazar is the longest natural beach", "Padre Island has 70 miles of beach" (pauta §4.2, §5 e §7)',
    julga: (f) => ((EIGHTY.test(f) && (COMPARA.test(f) || DIST.test(f))) || (COX.test(f) && (DIST.test(f) || (COX_MAIOR.test(f) && !ROTULO_FAMA.test(f)))) || (PADRE.test(f) && DIST.test(f)) ? "reprova" : null) },
  { id: "visto-do-espaco",
    porque: '"visible from space" como coisa única não tem fonte; a imagem do Sentinel-3 de julho de 2023 (g1) é o opcional O3, com a licença da ESA lida (pauta §4.6 e §5)',
    julga: (f) => (ESPACO.test(f) && !IMAGEM_ESPACO.test(f) ? "reprova" : null) },
  { id: "data-relativa",
    porque: 'a data de hoje não vai à voz ("60 years ago this month", "this year", "N years ago"): o vídeo precisa valer daqui a dois anos; o eclipse vai com a data absoluta, 12/11/1966 (pauta §5; voz §2). O "five thousand years ago" do mar passa',
    julga: (f) => (DATA_REL.test(f) ? "reprova" : null) },
  { id: "populacao",
    porque: 'a população do Cassino (e dos outros lugares da faixa) não foi lida (pauta §5)',
    julga: (f) => (LUGAR.test(f) && POP.test(f) && (/\d/.test(f) || RE_NUM_EXTENSO.test(f)) ? "reprova" : null) },
  { id: "fecho-milhas-atras",
    porque: 'o fecho não tem número (pauta §7): "135 miles behind you" é o número do IBGE sem dono (K10); vale "the whole stretch" (pauta §5)',
    julga: (f) => (MILHAS_ATRAS.test(f) ? "reprova" : null) },
  { id: "brasil-um-so",
    porque: '"Brazil" não é um só: o IBGE (federal) diz 135; o turismo do Estado, 158; nunca "Brazil says" nem "Brazil exaggerates": cada número com o seu dono (pauta §5)',
    julga: (f) => (BRASIL_UM.test(f) ? "reprova" : null) },
];
// ---- os ALERTA do Cassino (conferir, nunca reprovar): {id, porque, testa(frase, a anterior, {i, iAss})}
const N158 = /(?<![\w.,$])(?:158|254|one\s+hundred\s+(?:and\s+)?fifty[\s-]eight|two\s+hundred\s+(?:and\s+)?fifty[\s-]four)\b/i;
const TURISMO = /\b(?:state|tourism|websites?|sites?|Rio\s+Grande\s+do\s+Sul|government|portal|secretariat)\b/i;
const NOVO_PARQUE = /\bAlbard[aã]o\b|\bnational\s+park\b(?!\s+service)|\bprotected\s+area\b/i;   // o "National Park Service" (Padre Island) não é o parque
const DONO_PARQUE = /\b(?:decree|government|federal|Brazil['’]s|2026|March|Planalto|president|ICMBio)\b/i;
const DERRUBA = /\b(?:cancel\w*|overturn\w*|revok\w*|strike\s+down|struck\s+down|suspend\w*|annul\w*|repeal\w*|undo|scrap\w*|block\w*|kill\w*|revers\w*|halt\w*)\b/i;
const SENADOR = /\b(?:senator|Heinze)\b/i;
const N135 = /(?<![\w.,])(?:135|136|218|219|220)(?:\.\d+)?[\s-]+(?:miles?|mi|km|kilomet(?:er|re)s?)\b|\bone\s+hundred\s+(?:and\s+)?thirty[\s-](?:five|six)\s+miles?\b/i;
const DONO_135 = /\b(?:IBGE|statistics|agency|census|maps?|mapped|OpenStreetMap|OSM|lines?|ruler|measur\w*|we|our|us|government)\b/i;
const ALERTA_C = [
  { id: "158-sem-turismo", porque: 'o 158 (254 km) é o número que o turismo do Estado imprime ao lado de "Guinness Book", sem método nem autor (S3): na frase, o dono ("the state\'s own tourism website says 158 miles"); o "nowhere near 158" sem ele, confira (pauta §4.1 e §5; o pedido da Sala)',
    testa: (f) => N158.test(f) && !TURISMO.test(f) },
  { id: "223-sem-trilha", porque: 'o 139 (223 km) é a distância da trilha da Rede Brasileira de Trilhas (S4), o que se anda, não uma linha de costa: na frase, a trilha (pauta §4.3; o pedido da Sala)',
    testa: (f) => RE_TRILHA_NUM.test(f) && !TRILHA.test(f) && !CIDADE.test(f) },
  { id: "albardao-sem-dono", porque: 'o Parque Nacional e a APA do Albardão são do Decreto nº 12.868, de 06/03/2026 (o governo federal): o dono e a data absoluta, na frase ou na anterior ("In March 2026, Brazil\'s federal government created…") (pauta §4.4; K2; o pedido da Sala)',
    testa: (f, ant) => NOVO_PARQUE.test(f) && /\b(?:parks?|protected|reserves?|APA)\b/i.test(f) && !DONO_PARQUE.test(f) && !DONO_PARQUE.test(ant) },
  { id: "pdl-sem-dono", porque: 'o pedido para derrubar o decreto é o PDL 112/2026, do senador Luis Carlos Heinze (PP/RS) (S6): o senador, na frase ou na anterior ("A senator from Rio Grande do Sul has filed a bill to cancel the decree") (pauta §4.4; o pedido da Sala)',
    testa: (f, ant) => /\b(?:bill|PDL|Senate|Congress|lawmakers?|legislators?)\b/i.test(f) && DERRUBA.test(f) && !SENADOR.test(f) && !SENADOR.test(ant) },
  { id: "altair", porque: 'o Altair: "since 1976" (o g1, junho de 1976); o "on purpose" atribuído ao g1 e o "may disappear" à FURG, na frase ou na anterior; o ponto do mapa sai do OSM, não dos "16 km" do g1 nem dos "20 km" da legenda do Commons (K10) (pauta §4.6 e §5; o pedido da Sala)',
    testa: (f, ant) => ALTAIR.test(f) && (DIST.test(f)
      || (/\b(?:on\s+purpose|deliberately|intentionally)\b/i.test(f) && !/\bg1\b/i.test(`${ant} ${f}`))
      || (/\b(?:disappear\w*|vanish\w*|break(?:s|ing)?\s+(?:up|apart)|gone|swallowed|lost\s+to)\b/i.test(f) && !/\b(?:FURG|university)\b/i.test(`${ant} ${f}`))
      || (f.match(/(?<![\w.,])(?:19|20)\d\d\b/g) || []).some((a) => a !== "1976")) },
  { id: "gemini", porque: 'o Gemini 12 só como o release previa ("was scheduled to watch"), até a leitura do relatório da missão na NASA (pauta §4.6 e §11, item 8; K4; o pedido da Sala)',
    testa: (f) => GEMINI.test(f) && !(VIU.test(f) && !PLANO_G.test(f)) },
  { id: "hermenegildo", porque: 'o Hermenegildo é um balneário pequeno na ponta sul, não o meio da faixa: o meio é o Albardão (o farol, as dunas, os concheiros e o parque), a confirmar no OSM (K6; pauta §4.3 e §11, item 2; o pedido da Sala)',
    testa: (f) => /\bHermenegildo\b/i.test(f) && !HERM_97.test(f) },
  // os abaixo não estavam no pedido da Sala: saem da mesma pauta (e a Sala pode tirá-los)
  { id: "guinness-atribuido", porque: 'o Guinness confirmando o título, com dono na frase: confira que é o que a fonte diz, palavra por palavra (o WorldAtlas: "has been recognised by Guinness World Records since 1994"; o turismo do RS: "(Guinness Book)"; a Cultura do RS: "segundo dados do Guiness Book") (pauta §4.1; S3)',
    testa: (f) => GUINNESS.test(f) && CONFIRMA_G.test(f) && ATRIBUI.test(f) },
  { id: "39-sem-dono", porque: 'os 39 mi (62 km) são o trecho dentro do município do Rio Grande, o que leva o nome Cassino (o enquadramento do g1 e da Fepam: o limite municipal é o único critério): "the part inside the city of Rio Grande", na frase ou na anterior, e só no ato 2 (pauta §4.3 e §5; K6)',
    testa: (f, ant, ctx) => MI_39.test(f) && !/\bRio\s+Grande\b/i.test(`${ant} ${f}`) && !SO_39.test(f) && !(ctx && ctx.iAss >= 0 && ctx.i < ctx.iAss) },
  { id: "135-sem-dono", porque: 'o 135 (218 km) é a linha do IBGE, e o 136 (219,7 km) a do OpenStreetMap, medida pelo canal e declarada na tela ("Measure: Alpha Point, on IBGE (2024) and © OpenStreetMap contributors lines"): na frase, a linha ou quem a mede (pauta §4.3 e §5)',
    testa: (f) => N135.test(f) && !DONO_135.test(f) && !((COPULA_NUM.test(f) || ADJ_NUM.test(f)) && !DONO_NUM.test(f)) },
  { id: "foguetes-numero", porque: 'o número de foguetes é o que o release planejava (21 de Cassino, 12 de Tartagal); quantos subiram não foi lido: na frase, "planned" ou o release (pauta §4.6 e §5)',
    testa: (f) => FOGUETE.test(f) && (/\d/.test(f) || RE_NUM_EXTENSO.test(f)) && !/\b(?:plan\w*|scheduled|will|would|to\s+be|were\s+to|was\s+to|expected|release|propos\w*|meant\s+to)\b/i.test(f) && !(LANCOU.test(f) && !PLANO_F.test(f)) },
  { id: "razoes-do-senador", porque: 'as razões do senador vão nos termos do texto inicial do PDL 112/2026, uma vez, com o dono: a forma do decreto, a categoria mais restritiva para a maior parte da área e o tamanho da restrição; a consulta e a base técnica; a pesca, a eólica no mar e a Bacia de Pelotas ("Depois do sim", item 2)',
    testa: (f) => SENADOR.test(f) && /\b(?:says?|said|argues?|argued|claims?|claimed|because|wants?|wanted|worries|worried|warns?|warned|objects?|objected|believes?|thinks?|reasons?|justif\w*|complain\w*)\b|\bcalls?\s+it\b/i.test(f) },
  { id: "sem-interrupcao", porque: 'o "uninterrupted" vai com dono: é o adjetivo da fama do Cassino ("uninterrupted sandy", pauta §4.2), e o que o segura na voz é a barreira de Dillenburg, com só duas aberturas em 625 km (L10) (pauta §4.5)',
    testa: (f) => /\b(?:uninterrupted|unbroken|continuous|nonstop|non-stop)\b|\bwithout\s+(?:a\s+)?(?:break|interruption)\b/i.test(f) && !/\b(?:geolog\w*|university|UFRGS|barrier|sold|billed|marketed|called|calls?|label\w*|words?|says?|said|claims?|known|title|tourism|state|ICMBio|FURG|adjective)\b/i.test(f) },
  { id: "onda-altura", porque: 'a altura da onda fica no fundo, fora da fala (pauta §7: "a altura da onda e as médias da maré (fundo)"); a voz diz "big waves, from the southeast"',
    testa: (f) => /\bwaves?\b/i.test(f) && NUM_ALTURA.test(f) && !MARE.test(f) },
  { id: "eighty-mile", porque: 'a Eighty Mile Beach fica fora da v2: o vídeo não precisa dela (pauta §4.2)',
    testa: (f) => EIGHTY.test(f) && !COMPARA.test(f) && !DIST.test(f) },
  { id: "fosseis", porque: 'os fósseis vão nas palavras do decreto ("sítios paleontológicos associados ao ambiente de praia"): o que são e onde, só com a leitura de uma fonte do ICMBio, da FURG ou da UFRGS (pauta §4.6 e §11, item 3)',
    testa: (f, ant) => /\bfossil\w*/i.test(f) && (!/\bdecree\b/i.test(`${ant} ${f}`) || /\b(?:dinosaur\w*|mammal\w*|megafauna|sloths?|mammoths?|glyptodon\w*|toxodon\w*|bones?|teeth|tooth|skulls?|species|extinct)\b|\b(?:million|thousand)\s+years\b/i.test(f)) },
];
const N_FECHO = 8, N_PERGUNTA = 5;   // o fecho: as 8 últimas frases; a pergunta do gancho, por sequências de 5 palavras
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
    "roteiros/peru-agua/roteiro-narrador.md", "roteiros/atlantico-fundo/roteiro-narrador.md", "roteiros/big-sur/roteiro-narrador.md"];
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
if (palavras < MIN_PALAVRAS) problemas.push(`palavras: ${palavras}, abaixo de ${MIN_PALAVRAS} (a faixa do vídeo 6, de 13 a 14 min: a pauta §7, ~2.400 palavras, 13,4 min a 179)`);
if (palavras > MAX_PALAVRAS) problemas.push(`palavras: ${palavras}, acima de ${MAX_PALAVRAS} (a faixa do vídeo 6, de 13 a 14 min: a pauta §7, ~2.400 palavras, 13,4 min a 179)`);
if (media > MEDIA_MAX) problemas.push(`média de ${media.toFixed(1)} palavras por frase (teto ${MEDIA_MAX}: a voz §1)`);
frases.forEach((f, i) => { if (tamanhos[i] > FRASE_MAX) problemas.push(`frase com ${tamanhos[i]} palavras (teto ${FRASE_MAX}, o do molde): "${f.slice(0, 90)}…"`); });
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

// ---- o Cassino: o título, a primeira frase, o arco, o "não se diz", os alertas e o fecho ----------------------------------
// as frases destas regras: as das taxas (o ponto do "U.S.", do "a.m." e do decimal não parte a frase), sem as aspas de abertura
const frasesC = paragrafos.flatMap(frasesTaxaDe).map(abertura);
const iAssC = frasesC.findIndex((f) => ASSINATURA.test(f));
// o título aprovado (pauta §2; o Lucas, 07/11/2026): "Why the World's Longest Beach Is Almost a Straight Line", pago nas 3 primeiras
// frases (embalagem §2): "longest beach" e "straight" reprovam; o "World's", o "Almost" e o número em milhas ficam como alerta
const tresC = frasesC.slice(0, 3).join(" ");
const temMaior = /\blongest\s+beach\b/i.test(tresC), temReta = /\bstraight\b/i.test(tresC);
if (!temMaior) problemas.push('"longest beach" não aparece nas 3 primeiras frases (o título "Why the World\'s Longest Beach Is Almost a Straight Line" se paga ali: embalagem §2, pauta §2 e §8; o gancho A: "sold as the world\'s longest beach")');
if (!temReta) problemas.push('"straight" não aparece nas 3 primeiras frases (o título "…Is Almost a Straight Line" se paga ali: embalagem §2, pauta §2 e §8; o gancho A: "about 132 miles apart in a straight line")');
if (temMaior && !MAIOR_DO_MUNDO.test(tresC)) alertas.push('"longest beach" sem "world" nas 3 primeiras frases ("the world\'s longest beach", "the longest beach in the world"): o título diz "World\'s" (pauta §2 e §8)');
if (temReta && !/\b(?:almost|nearly|barely|hardly|not\s+quite|longer)\b/i.test(tresC)) alertas.push('"straight" sem "almost", "nearly", "barely", "hardly", "not quite" ou "longer" nas 3 primeiras frases: o "Almost" é o que mantém o título honesto (o arco de 11 mi, L12; os leitores a frio: sem ele, "o título vira enganoso"); o gancho A paga com "less than five miles longer" (pauta, "Três coisas", item 1, e §8)');
if (!NUM_MILHAS.test(tresC.replace(NOME_DE_MILHAS, "Beach"))) alertas.push('nenhum número em milhas nas 3 primeiras frases: a condição dos três leitores a frio é dizer cedo os números (a reta, 132 mi; a praia, menos de 5 mi a mais), e o gancho A os diz nas frases 2 e 3 (pauta, "Depois do sim", item 1, e §8)');
// o arco do meio (L12: 18,21 km, 11,3 mi, para o mar, a 123 km da barra): a fala tem de dizê-lo ("A fala diz isso"; os leitores a frio)
if (!/(?<![\w.,])(?:11|eleven)[\s-]+(?:miles?|mi)\b/i.test(frasesC.join(" "))) alertas.push('a curva do meio (11 mi, "eleven miles") não aparece na fala: o "Almost" do título só é honesto se o vídeo diz o arco ("A fala diz isso", pauta, "Três coisas", item 1; a condição dos três leitores a frio; a forma da pauta §4.3: "near the middle it bows out to sea by about 11 miles")');
// a primeira frase (voz §1, "Os números da fala"): o fato mais surpreendente sobre o lugar da imagem de abertura (a areia reta, no
// Cassino, pauta §6), com o nome do lugar e um número ou uma imagem
const primeira = frasesC[0] || "";
if (!/\bCassino\b/i.test(primeira)) problemas.push(`a primeira frase não diz "Cassino" (o lugar da imagem de abertura, a areia reta no Cassino; voz §1, "Os números da fala"; pauta §6 e §8): "${primeira.slice(0, 110)}"`);
if (!/\d/.test(primeira) && !RE_NUM_EXTENSO.test(primeira)) alertas.push(`a primeira frase não tem número (algarismo ou por extenso): ela é o fato mais surpreendente sobre o lugar da imagem de abertura, concreto, com o nome do lugar e um número ou uma imagem (voz §1, "Os números da fala"); sem número, confira que a imagem concreta está lá: "${primeira.slice(0, 110)}"`);
// o "não se diz" e os alertas do Cassino, frase a frase (a anterior vale para o que a frase diz por pronome; a posição, para o gancho)
frasesC.forEach((f, i) => {
  const ant = i > 0 ? frasesC[i - 1] : "";
  const ctx = { i, iAss: iAssC };
  for (const r of NAO_SE_DIZ) {
    const v = r.julga(f, ant, ctx);
    if (v === "reprova") problemas.push(`não se diz [${r.id}] (${r.porque}): "${f.slice(0, 110)}"`);
    else if (v === "alerta") alertas.push(`conferir [${r.id}] (${r.alerta || r.porque}): "${f.slice(0, 100)}"`);
  }
  for (const a of ALERTA_C) if (a.testa(f, ant, ctx)) alertas.push(`conferir [${a.id}] (${a.porque}): "${f.slice(0, 100)}"`);
});
// o fecho (voz §1, "Como ele fecha", do Atlântico em diante): sem repetir a pergunta do gancho e sem a resposta em lista (alertas)
const finais = frasesC.map((f, i) => ({ f, i })).filter(({ i }) => i > iAssC).slice(-N_FECHO);
const perguntaGancho = iAssC > 0 ? frasesC.slice(0, iAssC).filter((f) => /\?["”’)]*$/.test(f)).pop() : null;
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
