// gate.mjs — o portão determinístico do roteiro do vídeo 7 (por que os EUA pagam ao Canadá para deixar vazia parte de um lago: o
// reservatório de Arrow, no rio Columbia; slug rio-columbia), antes da bancada e depois de cada troca. Mede o texto de
// roteiros/rio-columbia/roteiro-narrador.md contra as regras que se contam (marca/voz.md §1, §2 e §3, marca/cta.md §1, §5 e §6,
// marca/embalagem.md §2, a pauta pautas/2026-11-09-video-7-rio-columbia.md, aprovada pelo Lucas em 09/11/2026, o teste dos leitores a
// frio do mesmo dia, out/_pautas/video-7-rio-columbia/teste-leitores.md, e as releituras de depois da pauta,
// pautas/rio-columbia/_trabalho/fatos-c.md). Não julga qualidade: isso é da bancada. O ferramentas/portao-fatos.mjs e o
// ferramentas/aplicar-lista.mjs o rodam para cruzar o sha do texto falado: a leitura (paragrafosDe) e a forma do sha são as do molde,
// sem mudança.
//
// Deriva do do vídeo 6 (roteiros/praia-do-cassino/_ferramentas/gate.mjs), em 11/11/2026, pelo pedido da Sala de controle.
//   SAEM as regras só do Cassino: o título dele ("longest beach" e "straight" nas 3 primeiras frases; o "world", o "almost" e as milhas
//   em alerta; a curva de 11 mi no texto inteiro); a 1ª frase com "Cassino"; o NAO_SE_DIZ dele inteiro (44 ids, do [maior-praia-fato] ao
//   [brasil-um-so]) e o ALERTA_C dele inteiro (16 ids, do [158-sem-turismo] ao [fosseis]), com as constantes que só eles usavam
//   (MAIOR_PRAIA, RETA_*, LINHA_RETA, PARADOXO*, MENTIRA, GUINNESS, N_TRILHA, N39, N_FAIXA, PARQUE*, MARE, MAR_ALTO, RIOS_NADA, AREIA_RIO,
//   FOGUETE, GEMINI, ALTAIR, MOLHES, EIGHTY, COX, PADRE, NOME_DE_MILHAS, NUM_MILHAS, DIST, NUM_ALTURA, HERM_97, N158, N135…); e a lista
//   dele do que nenhum padrão pega. Das palavras de ALERTA da voz, nenhuma era só do Cassino: a lista fica inteira.
//   ENTRAM (o como de cada uma está junto da regra, abaixo):
//   - O TÍTULO, aprovado pelo Lucas com a pauta em 09/11/2026: "Why the U.S. Pays Canada to Keep Part of a Lake Empty" (pauta §2;
//     marca/embalagem.md §2: o núcleo se paga nas 3 primeiras frases; o gancho A da pauta §8 paga nas frases 1 e 2). Nas 3 primeiras
//     frases, REPROVA sem o pagamento (uma forma de "pay" e "Canada" na MESMA frase: "pays Canada") e REPROVA sem "empty"/"emptied".
//     E quatro ALERTA, decididos aqui (a Sala pode tirá-los): [titulo-eua] (sem "United States", "U.S.", "US" ou "America": quem paga),
//     [titulo-lago] (sem "lake", "Lakes" ou "reservoir"), [titulo-parte] (com "empty" e sem "part of", "portion", "some of", "space" ou
//     "room": o "Part of" é o que mantém o título honesto, o lago inteiro não se esvazia, pauta §5 "Half empty") e [titulo-valor] (sem
//     o 37.6: a miniatura "$37.6M A YEAR" se paga na voz aos 6,0 s, frase 2 do gancho A, pauta §8; os quatro leitores a escolheram).
//   - A PRIMEIRA FRASE (marca/voz.md §1, "Os números da fala": o fato mais surpreendente sobre o lugar que a imagem de abertura mostra,
//     com o nome do lugar e um número ou uma imagem). A imagem de abertura é o reservatório de Arrow, baixo (pauta §6). REPROVA sem
//     "Arrow"; ALERTA sem número (o mesmo do molde: algarismo, ou por extenso de "two" a "billion"; "one of" não conta). O gancho A abre
//     sem número: a regra aceita "um número ou uma imagem", e a imagem o portão não vê.
//   - O "NÃO SE DIZ" DO COLUMBIA (NAO_SE_DIZ, abaixo): a pauta §5 inteira (as quatro do enxame; o gatilho e os picos; as correções da base
//     e da v1; a política e as pessoas), o que a coluna "Na fala" do §4 e a lista "O que fica fora da fala" do §7 põem fora da voz, e o que
//     o fatos-c.md mudou depois da pauta. Cada um REPROVA, com o porquê e a fonte na mensagem; onde a pauta dá a forma segura, ela passa
//     (a prova confere cada uma). Os ids estão na lista NAO_SE_DIZ; os dois que se medem por parágrafo (a fala citada atravessa a frase)
//     são [bargaining-chip] e [mais-importante-aspas]. Dois devolvem ALERTA na forma que pede só conferência: [libby-ano] (com dono) e
//     [sinal-gac] (com o tipo do documento).
//   - OS ALERTA DO COLUMBIA (ALERTA_COL, abaixo, frase a frase; e três que contam o texto inteiro): o que pede atribuição, leitura ou
//     cuidado, da pauta, dos leitores e do fatos-c. Os do pedido da Sala: [uma-vez-no-gancho] (os 15 %, 39 % e 88 anos ditos mais de uma
//     vez, K6), [deal-treaty-apresentado] ("the deal" ou "the treaty" antes de apresentados, os leitores), [numeros-falados] (mais de 50
//     números na voz, K6; o laudo mostra a conta) e [picos-sem-2009] (os picos sem "since 2009"). Os a mais saem da mesma pauta (§4, §5,
//     §7, §11) e do fatos-c, e a Sala pode tirá-los: [dois-denominadores], [gatilho-sem-crs], [estudo-bc], [faixa-bc-hydro],
//     [mortos-cheia-sem-dono], [30000-sem-dono], [sinixt-dono], [dix], [barton], [cbc], [puds], [pausa-sem-dono], [comprimento-rio],
//     [quantia-fixa], [quem-vendeu], [curva-sem-lugar], [every-sem-data] e [acre-pe].
//   - A INSCRIÇÃO FALADA (regra nova desde 09/11/2026: marca/voz.md §3; marca/cta.md §1, §5 e §6; o Lucas, "Uma por vídeo
//     (Recomendado)"). Ela vem no laudo ("inscricao") com o parágrafo, o tempo e o percentual estimados. REPROVA:
//     [inscricao-ausente] (nenhuma frase com "subscribe to Alpha Point"), [inscricao-mais-de-uma], [inscricao-outro-subscribe] (outro
//     "subscrib…" no texto), [inscricao-posicao] (fora de 35 % a 60 % do vídeo), [inscricao-primeiro-minuto], [inscricao-gancho] (antes ou
//     na assinatura), [inscricao-fecho] (na parte do fecho), [inscricao-paragrafo] (fora de uma fronteira de parágrafo),
//     [inscricao-vetada] ("smash", "hit the like", "like button", "leave a like", "ring the bell", "bell", "don't forget", "make sure",
//     "please", "comment…", "every week"/"weekly"/"daily"), [inscricao-numero] (qualquer número), [inscricao-plateia] ("most of you"…) e
//     [inscricao-longa] (mais de 24 palavras). ALERTA: [inscricao-margem] (abaixo de 37 % ou acima de 58 %: a narração real mexe 1 a 2
//     pontos), [inscricao-ato] (fora de uma fronteira entre atos, as marcas <!-- … -->), [inscricao-16] (mais de 16 palavras),
//     [inscricao-if], [inscricao-you], [inscricao-citacao] e [inscricao-numero-heroi] (a frase logo antes dela com aspas, ou com um
//     número-herói). O como de cada uma está no bloco da inscrição, abaixo.
//     · A conta do tempo (o pedido da Sala): o início da frase = as palavras antes dela ÷ 179 × 60, mais 0,25 s por troca de parágrafo
//       antes dela; a duração do vídeo = a fala inteira (as palavras ÷ 179 × 60), mais 0,25 s por troca de parágrafo, MAIS a cauda de 20 s
//       (canal.json › narracao.cauda_tela_final_s; o cta.md §6 conta a cauda dentro da duração: "Num vídeo de 10:00, entre 3:30 e 6:00",
//       com a cauda de 9:40 a 10:00). As palavras são as do texto do narrador, pelo contar() do portão, com os números em algarismo: a
//       cópia para a voz tem uns 2 % a mais, e a narração real mexe 1 a 2 pontos (no Cassino, a estimativa e o relógio diferiram).
//     · A fronteira de parágrafo: a frase é a última do parágrafo; ou a penúltima, com a frase de volta ao assunto como a última; ou a
//       primeira do parágrafo. A frase de volta é curta (até 10 palavras) e tem "back to" ou abre com "Now,", "Anyway,", "Right," ou
//       "Okay," ("Now, back to the river."; "Back to the ruler, then."). Atenção: o "Now" dispara o alerta do presente do molde.
//     · A fronteira entre atos: há uma marca <!-- … --> entre o parágrafo dela e o vizinho do lado da fronteira. A parte do fecho: os
//       parágrafos depois da última marca que começa com "fecho", "conclus", "close", "closing", "ending", "end" ou "outro"; sem essa
//       marca, as 8 últimas frases (o N_FECHO do molde).
//     · O número-herói (o critério é daqui; voz §3 e cta §5: "nunca colada a … um número-herói"): na frase logo antes, um "$" com
//       algarismo, um "%", um número com "percent", "million", "billion", "thousand", "acre-feet", "cubic feet", "miles" ou "times", ou um
//       número de quatro dígitos ou mais com vírgula ("600,000", "2,300"). Ano sozinho ("1964") e "60 years" não são número-herói.
//   - A FAIXA de 2.450 a 2.700 palavras faladas (o pedido da Sala; a pauta §7 orça ~2.555, 14,3 min a 179, sem a frase de inscrição; o
//     Lucas quer vídeos mais longos, dentro da cota). O do Cassino tinha 2.300 a 2.500. O ritmo de conta (WPM) continua 179.
//   - O roteiro do vídeo 6 (roteiros/praia-do-cassino/roteiro-narrador.md) entra no autoplágio, ao lado dos seis de antes.
//   - O --derivados confere também a tradução de leitura (roteiro-narrador-pt-BR.md), as trocas da voz (voz/trocas.md, a linha "sha256
//     do texto falado") e a cópia para a voz em out/<proj>/roteiro.md (a linha "revisao_do_roteiro:"), além dos do molde.
//   AS FRASES DAS REGRAS DO COLUMBIA são as das taxas (frasesTaxaDe: o ponto do "U.S.", do "a.m." e do decimal não parte a frase), sem
//   as aspas de abertura, como as do Cassino. As regras herdadas (a média, a maior frase, as VETADAS, o laço do ALERTA, as datas, o
//   gancho) continuam com as frases de antes.
//   FICA todo o resto do molde, sem mudança: o que é texto falado, o sha, o --onde, as VETADAS da voz (atenção: "regime" está lá, e "the
//   river's flow regime" reprova; "breaking" também), as palavras de ALERTA (o universal "everyone", "nobody", "never", "first", "last"
//   e "always"; "mystery" e "secret"; o presente; "here" e "this line"), as frases que abrem com data, a assinatura uma vez com até 170
//   palavras, o "But" até a palavra 50 (o "Yet" não conta), a pergunta antes da assinatura, o FECHO (a pergunta do gancho repetida no fim e
//   o fecho em lista, em alerta), a média de no máximo 18 palavras por frase e nenhuma acima de 34, as taxas e os TETOS, o autoplágio e a
//   sua exceção da pergunta de comentário, e o ritmo de conta de 179 palavras/min.
//
// O QUE NENHUM PADRÃO PEGA, OU SÓ PEGA EM PARTE (tarefa do verificador de fatos, por cobertura, frase a frase; as notas,
// roteiros/rio-columbia/_trabalho/gate-notas.md, "Os limites", dizem o mesmo com exemplos):
//   - o controle e o fechamento ditos com outras palavras ("Canada has its hand on the valve" pega; "the upper river answers to Victoria"
//     não), e a torneira por pronome numa frase longe do "Canada";
//   - o gatilho: o 600 mil como do tratado sem "trigger" nem "the treaty sets" ("the treaty's number is 600,000"); a faixa de 450 a 650
//     dita como dos dois países; os picos regulados ditos como o rio sem o espaço ("the river is tamer now");
//   - o porquê do pagamento: a lei nas palavras dela só se confere por leitura ("including operations…"); o "insurance" e o "certainty"
//     do canal; o anticlímax dos leitores ("é só um seguro") é da bancada;
//   - as duas contas: "lado a lado" só se vê numa janela de uma frase; o tom de quem "ganha" com outras palavras ("Canada holds the
//     better cards");
//   - Vanport: número de mortos que não é 15, 16 ou 50/51, ou dito por pronome a duas frases do nome; a hora (16h15 ou 16h17) cravada;
//   - os Sinixt: o laço 1956 → barragens com outras palavras ("the same decade the dams were planned"), e o nome que a Corte usa;
//   - as datas: "since the treaty" e "since the dams" pegam; "in the regulated era" não; o "every spring" sem data só na janela de duas
//     frases;
//   - a política: o presidente dos EUA sem o nome ("the White House pulled out"), e o que mudou depois de 09/11/2026 (os voláteis do
//     §11, item 13: as conversas, o pagamento, a WRDA, o aviso de saída), que se relê antes da gravação;
//   - a frase-chave do bloco ao lado da inscrição, e se a cena por baixo dela está calma (cta §5): é do regente e do qc-visual.
//
//   node roteiros/rio-columbia/_ferramentas/gate.mjs [arquivo] [--derivados] [--onde]      (cwd = raiz do canal)
//   saída: o laudo em JSON no stdout; exit 0 = passa, 1 = reprovado, 2 = não rodou (arquivo ausente, opção desconhecida)
//   A prova: node roteiros/rio-columbia/_ferramentas/gate-provar.mjs (os casos em out/_tmp/gate-rio-columbia/, fora do git).
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
//   - --onde: cada taxa traz também "onde", as frases contadas (para o crítico dizer onde estão, sem recontar); e a conta
//     dos números falados traz "onde", os números contados.
//
// O AUTOPLÁGIO (item 7). O laudo ganha "autoplagio": [{trecho, roteiro}], e cada item vira um alerta.
//   - Compara o texto falado com os roteiros dos vídeos anteriores (roteiros/juneau/, roteiros/los-angeles/,
//     roteiros/zona-do-canal/, roteiros/peru-agua/, roteiros/atlantico-fundo/, roteiros/big-sur/ e roteiros/praia-do-cassino/, o
//     roteiro-narrador.md de cada um; a lista ANTERIORES, abaixo)
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
// derivados moram na pasta do roteiro medido (no padrão, roteiros/rio-columbia/), e cada um traz, numa linha só dela
// (pode vir dentro de citação "> " e com o valor entre crases; 12 a 64 hex, e contam os 12 primeiros):
//   - qc-roteiro/*.laudo.md:       Revisão julgada: `<sha12>`        (fora: os que terminam em -r<n>.laudo.md, com ou sem letra,
//                                  como -r1, -r2 e -r2b, ou em -antigo.laudo.md: são a entrada da lista daquela rodada e julgaram o
//                                  texto de antes; a Sala, 26/10/2026, depois de o aplicador da r2 apontar que só o -r1 ficava fora)
//   - roteiro-editor.md:           Revisão do roteiro: `<sha12>`
//   - pronuncia.md:                Revisão do roteiro: `<sha12>`
//   - roteiro-narrador-pt-BR.md:   Revisão do roteiro: `<sha12>`     (a tradução de leitura para o Lucas; novo no vídeo 7)
//   - voz/texto-para-voz.md:       Revisão do roteiro: `<sha12>`
//   - voz/trocas.md:               … (sha256 do texto falado `<sha12>`)   (o que o preparar-voz.mjs escreve; novo no vídeo 7)
//   - out/<proj>/roteiro.md:       revisao_do_roteiro: <sha12>      (a cópia para a voz que o narrar.mjs lê; só quando o roteiro
//                                  medido mora em <raiz>/roteiros/<proj>/, e o <proj> é o nome dessa pasta; novo no vídeo 7)
//   Derivado ausente não é erro. Derivado sem a linha, ou com outro sha, é: vai a "derivados_velhos" [{arquivo,
//   cita}] e aos problemas, e o portão sai 1. "derivados" lista todos os conferidos. Sem --derivados, nada disso roda.
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { basename, dirname, join, resolve } from "node:path";

const ARGS = process.argv.slice(2);
const OPCOES = ARGS.filter((a) => a.startsWith("--"));
for (const o of OPCOES) if (!["--derivados", "--onde"].includes(o)) { console.error(`opção desconhecida: ${o} (há --derivados e --onde)`); process.exit(2); }
const COM_DERIVADOS = OPCOES.includes("--derivados"), COM_ONDE = OPCOES.includes("--onde");
const ARQ = ARGS.find((a) => !a.startsWith("--")) || "roteiros/rio-columbia/roteiro-narrador.md";
if (!existsSync(ARQ)) { console.error(`não encontrado: ${ARQ}`); process.exit(2); }
const lerTexto = (arq) => readFileSync(arq, "utf8").replace(/^﻿/, "").replace(/\r\n?/g, "\n");
const bruto = lerTexto(ARQ);

// o ritmo da voz medido no Big Sur: a cópia para a voz (roteiros/big-sur/voz/texto-para-voz.md), 2.300 palavras por este portão, em
// 767,6 s de fala (out/big-sur/_tmp/regente/v2_ritmo.out.txt): 179,8/min. O Lucas o escolheu às cegas em 03/11/2026 ("Amostra 2").
const WPM = 179;
// a faixa do vídeo 7 (o pedido da Sala; a pauta §7: ~2.555 palavras, 14,3 min a 179, sem a frase de inscrição). 2.450 palavras são
// 13,7 min a 179; 2.700, 15,1
const MIN_PALAVRAS = 2450, MAX_PALAVRAS = 2700;
// os tetos do molde (o 18 é o da voz §1): o ritmo calmo vem do espaço entre as ideias, não de frases cortadas (o Lucas, 02/11/2026)
const MEDIA_MAX = 18, FRASE_MAX = 34;
// a inscrição falada (voz §3; cta §6): a janela, a margem do alerta, a cauda da tela final (canal.json › narracao.cauda_tela_final_s),
// a pausa entre parágrafos e os tetos de palavras
const INSC_DE = 35, INSC_ATE = 60, INSC_MARGEM_DE = 37, INSC_MARGEM_ATE = 58, CAUDA_S = 20, PAUSA_PAR_S = 0.25;
const INSC_ALERTA_PALAVRAS = 16, INSC_MAX_PALAVRAS = 24;
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
const NEGA_ANTES = /(?:n['’]t|\bnot|\bnever|\bno)\b[^.?!]{0,40}$/i;   // uma negação nas 40 letras antes do achado
const pergunta = (f) => /\?["”’)]*$/.test(f);
const MESES = "January|February|March|April|May|June|July|August|September|October|November|December";

// ---- o "não se diz" do Columbia (pautas/2026-11-09-video-7-rio-columbia.md §5, a coluna "Na fala" do §4, o §7, o cético K1 a K10, e o
// fatos-c.md): reprovam. Cada um tem o id (entre colchetes na mensagem), o porquê com a fonte, e julga(frase, a anterior, ctx) →
// "reprova" | "alerta" | null, na forma do molde. ctx = {i, iAss, frases, prox(k)}: prox(k) é a frase k adiante ("" se não houver).
const NEG_LARGA = /(?:n['’]t|\bnot|\bnever|\bno|\bneither|\bnor|\bwithout|\bnobody|\bnone|\bnothing)\b[^.?!]{0,40}$/i;
// algum achado de re na frase sem negação nas 40 letras antes
const semNeg = (f, re, neg = NEGA_ANTES) => {
  const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : `${re.flags}g`);
  for (const m of f.matchAll(g)) if (!neg.test(f.slice(0, m.index))) return true;
  return false;
};
const PCT = String.raw`\s*(?:%|percent\b|per\s+cent\b)`;
const N600 = /(?<![\w.,$])(?:600,000|600\s*(?:thousand\b|k\b)|six\s+hundred\s+thousand)/i;
const N450 = /(?<![\w.,$])(?:450,000|450\s*(?:thousand\b|k\b)|four\s+hundred\s+(?:and\s+)?fifty\s+thousand)/i;
const N650 = /(?<![\w.,$])(?:650,000|650\s*(?:thousand\b|k\b)|six\s+hundred\s+(?:and\s+)?fifty\s+thousand)/i;
const N376 = /(?<![\w.,])37\.6(?!\d)|\bthirty[\s-]seven\s+point\s+six\b/i;
const N644 = /(?<![\w.,])64\.4(?!\d)|\bsixty[\s-]four\s+point\s+four\b/i;
const N15PCT = new RegExp(String.raw`(?<![\w.,])(?:15|fifteen)${PCT}`, "i");
const N37PCT = new RegExp(String.raw`(?<![\w.,])(?:37|thirty[\s-]seven)(?![.,]\d)${PCT}`, "i");
const N38PCT = new RegExp(String.raw`(?<![\w.,])(?:38|thirty[\s-]eight)(?:\.\d+)?${PCT}`, "i");
const N39PCT = new RegExp(String.raw`(?<![\w.,])(?:39|thirty[\s-]nine)(?:\.\d+)?${PCT}`, "i");
const N88 = /(?<![\w.,])(?:88|eighty[\s-]eight)\s+years\b/i;
const STATE_DEPT = /\bState\s+Department\b|\bDepartment\s+of\s+State\b/i;
const CANADA = /\b(?:Canad\w*|British\s+Columbia|B\.C\.|Ottawa|Victoria)\b/;
// a negação entre o "Canada" e o verbo vale (o "Canada did not turn over control" da BC Hydro, o "Canada can't turn the Columbia off")
const CONTROLA_V = /\b(?:controls|controlled|controlling|took\s+control|takes\s+control|taking\s+control|has\s+control|have\s+control|in\s+control|holds?\s+(?:the\s+)?(?:\w+\s+)?(?:valve|tap|faucet|keys?|upper\s+hand)|can\s+turn\s+(?:\w+\s+){0,3}?off|could\s+turn\s+(?:\w+\s+){0,3}?off|turns?\s+(?:\w+\s+){0,3}?off|shuts?\s+(?:\w+\s+){0,3}?off|cuts?\s+off\s+(?:the\s+)?(?:water|river|flow|Columbia))\b/i;
const CANCELOU = /\b(?:cancel(?:l)?ed|scrapped|terminated|killed|tore\s+up|ripped\s+up|axed|dumped|abandoned|walked\s+away\s+from|withdrew\s+from|pulled\s+out\s+of)\s+(?:the\s+)?(?:[\w-]+\s+){0,2}?(?:treaty|agreement|deal)\b|\b(?:treaty|agreement|deal)\s+(?:was|has\s+been|had\s+been|got|is\s+now|is)\s+(?:officially\s+|effectively\s+)?(?:cancel(?:l)?ed|scrapped|terminated|killed|torn\s+up|ripped\s+up|axed|abandoned|dead|void)\b/i;
const EXPIROU = /\btreaty\s+(?:has\s+|had\s+|just\s+|officially\s+|quietly\s+|finally\s+|already\s+|itself\s+)*(?:expired|expires|ran\s+out|runs\s+out|ended|ends|lapsed|lapses|will\s+(?:end|expire|lapse|run\s+out)|is\s+(?:ending|expiring|over|dead|about\s+to\s+(?:end|expire)))\b/i;
const ANOS61 = /(?<![\w.,])(?:61|sixty[\s-]one)[\s-]+years?\b/i;
const HIDRO = /\bhydro\w*|\belectricity\b|\bpower\b|\bgeneration\b/i;
const HIDRO_PCT = new RegExp(String.raw`(?<![\w.,])(?:40|forty|44|forty[\s-]four)${PCT}|\b(?:a|one)[\s-]third\s+of\s+(?:all\s+)?(?:the\s+)?(?:U\.?S\.?|US|American|America['’]s|nation['’]s|country['’]s)\b|\bmore\s+than\s+(?:a|one)[\s-]third\b`, "i");
const GATILHO = /\b(?:trigger\w*|threshold|tripwire|cut-?off)\b/i;
const TRATADO_DEFINE = /\btreaty\b[^.?!]{0,40}?\b(?:sets?|says?|defines?|fixes|specifies|spells\s+out|names?|puts?|lists?)\b[^.?!]{0,30}?(?:\btrigger|\bthreshold|600,000|six\s+hundred\s+thousand)/i;
const NUNCA_PICO = /\b(?:never|not\s+once|hasn['’]t|has\s+not|haven['’]t|didn['’]t|did\s+not|no\s+(?:year|spring|peak)|none)\b/i;
const DESDE_ANTIGO = /\b(?:since|after)\s+(?:(?:19\d\d|200[0-8])\b|the\s+(?:dams?|treaty|big\s+dams|storage\s+dams|1970s|seventies|1960s|sixties))/i;
const SEM_PAGAMENTO = /\bwithout\s+(?:the|this|that)\s+(?:payment|deal|money|space|storage|room)\b[^.?!]{0,60}?\b(?:would|will)\s+(?:\w+\s+){0,2}?(?:flood|drown|be\s+flooded|go\s+under|hit|reach|pass|top)\b|\b(?:Portland|Vancouver|the\s+city|cities)\s+would\s+(?:\w+\s+)?(?:flood|drown|be\s+flooded|go\s+under)\b/i;
const RECUSA = /\b(?:refus\w*|declined|won['’]t|wouldn['’]t|stopped)\s+(?:to\s+)?(?:help|hold|store|provide|answer|respond)\w*\b|\brefused\s+(?:the\s+)?(?:call|request)\b/i;
const NAO_PRECISA = /\b(?:no\s+longer|doesn['’]t|does\s+not|isn['’]t|is\s+not|won['’]t)\s+(?:have\s+to|has\s+to|need\s+to|needs\s+to|obliged\s+to|required\s+to|bound\s+to|obligated\s+to)\s+help\b/i;
const PAGA_NADA = /\bpa(?:y|ys|id|ying)\s+(?:\w+\s+){0,2}?for\s+nothing\b|\bCanada\s+(?:charges|bills|is\s+charging|charged)\b/i;
const PALAVRA_DINHEIRO = /\b(?:fees?|royalt(?:y|ies)|compensation)\b/i;
// o "rent" só no assunto do vídeo (o espaço, o lago, o Canadá): "lived in rented quarters" (a Zona) é outra coisa
const ALUGUEL = /\brent(?:s|ed|ing|al)?\b/i, CTX_ESPACO = /\b(?:space|room|storage|reservoirs?|lakes?|Canad\w*|Arrow|water|flood\w*|dams?)\b/i;
const ACHATA = /\b(?:flatten\w*|evened\s+out|smooth\w*|levell?ed\s+out)\b/i;
const MOSTLY = /\bmostly\s+(?:to\s+(?:make|generate|produce)\s+|for\s+|about\s+)(?:\w+\s+)?(?:power|electricity|energy|hydropower|flood\w*)\b/i;
const TIROU_AGUA = /\b(?:took|takes|taken|taking|steals?|stole|stolen)\s+(?:the\s+|its\s+|that\s+)?water\s+away\b|\b(?:took|takes|taken|taking)\s+away\s+(?:the\s+|its\s+)?water\b|\bwater\s+(?:was|were|is|has\s+been|got)\s+taken\s+away\b/i;
const SEGURA_TUDO = /\b(?:hold\s+back|holds\s+back|held\s+back|stop|stops|block|blocks|dam\s+up|turn\s+off|shut\s+off|cut\s+off)\s+(?:the\s+)?(?:whole|entire|all\s+(?:of\s+)?the)\s+(?:river|Columbia|flow)\b/i;
const SEIS_SEMANAS = /\b(?:six|6)\s+weeks\b|\ba\s+month\s+and\s+a\s+half\b|(?<![\w.,])(?:41\.5|42)\s+days\b/i;
const TRES_MESES = /\bthree\s+and\s+a\s+half\s+months\b|(?<![\w.,])3\.5\s+months\b|\bthree\s+months\s+and\s+a\s+half\b|(?<![\w.,])110\s+days\b|\bclose[rs]?\s+to\s+(?:three|3)\b/i;
const DOIS_MESES = /\b(?:two|2)\s+months\b|(?<![\w.,])(?:55|68)\s+days\b/i;
const TODO_RESERVATORIO = /\bevery\s+(?:other\s+)?(?:reservoir|dam|lake)s?\b|\ball\s+(?:the\s+)?(?:other\s+)?(?:reservoirs|dams|lakes)\b/i;
const PRODUZ = /\b(?:produc\w*|provid\w*|suppl(?:y|ies|ied)|contribut\w*|sends?|gives?|generat\w*|comes?\s+from|came\s+from|originat\w*)\b/i;
const AGUA_PCT = new RegExp(String.raw`(?<![\w.,])(?:30|35|50|thirty|thirty[\s-]five|fifty)(?:\s*(?:-|–|to)\s*(?:35|thirty[\s-]five))?${PCT}`, "i");
const AGUA = /\b(?:water|flows?|runoff|inflow|streamflow)\b|\bof\s+the\s+(?:river|Columbia)\b/i;
const LUGAR_AGUA = /\b(?:Dalles|Portland|basin|mouth|gauge|station|Birchbank|Astoria)\b/i;
const METADE_AGUA = /\bhalf\s+(?:of\s+)?(?:the|its|all\s+the)\s+(?:water|flow|river)\b/i;
const MORTE = /\b(?:died|dead|deaths?|killed|lives\s+(?:were\s+)?lost|lost\s+(?:their\s+)?lives|perished|drowned|death\s+toll|fatalities|victims)\b/i;
const CHEIA_TODA = /\b(?:whole|across|entire|in\s+all|overall|total|basin|region|the\s+flood\s+as\s+a\s+whole|all\s+along)\b/i;
const SINIXT = /\b(?:Sinixt|Arrow\s+Lakes\s+(?:Band|people|Nation)|Lakes\s+(?:Tribe|people))\b/i;
const LAGO_TODO = /\b(?:the\s+(?:whole|entire)\s+(?:lake|reservoir)|(?:the\s+)?Arrow\s+Lakes(?:\s+Reservoir)?|the\s+(?:lake|reservoir))\s+(?:is|was|gets|sits|stands|lies|ends\s+up)\s+(?:(?:almost|nearly|completely|totally|entirely|fully|left|kept)\s+)*(?:empty|emptied|drained|dry)\b|\b(?:empt(?:y|ies|ied|ying)|drain(?:s|ed|ing)?)\s+(?:the\s+(?:whole|entire)\s+)(?:lake|reservoir)\b/i;
const COM_DATA = new RegExp(String.raw`\bas\s+of\s+(?:(?:early|mid|late)[\s-]+)?(?:(?:${MESES})\s+)?(?:\d{1,2},?\s+)?(?:20\d\d|twenty[\s-]twenty[\s-]\w+)\b|\b(?:in|by)\s+(?:early\s+|mid[\s-]|late\s+)?(?:${MESES}),?\s+20\d\d\b`, "i");
const AINDA_PAUSA = /\b(?:still|currently|remains?|remained)\s+(?:on\s+)?(?:paused|on\s+pause|on\s+hold|frozen|stalled)\b|\bstill\s+(?:haven['’]t|have\s+not)\s+resumed\b/i;
const ESTENDEU = /\b(?:Congress|lawmakers|the\s+House|the\s+Senate|the\s+law|a\s+new\s+law|the\s+new\s+law|WRDA|the\s+bill)\s+(?:has\s+|have\s+|just\s+|already\s+|quietly\s+|finally\s+)?(?:extended|renewed|prolonged)\b|\b(?:new\s+)?law\s+(?:that\s+)?(?:extends|renews)\b|\b(?:deal|payments?|authority|agreement|deadline|money)\s+(?:was|were|has\s+been|have\s+been|got|is\s+now)\s+(?:\w+\s+)?(?:extended|renewed)\b/i;
const VIROU_LEI = /\b(?:became|become|becomes)\s+law\b|\bsigned\s+into\s+law\b/i;
const ATE_2030 = /\b(?:through|to|until|till|into)\s+(?:fiscal\s+(?:year\s+)?)?20(?:29|30)\b/i;
const CONDICIONAL = /\b(?:would|unless|if|could|bills?|propos\w*|hasn['’]t|has\s+not|not|asked|asks|request\w*|wants?)\b/i;
const RETOMA = /\b(?:talks|negotiations)\s+(?:have\s+|has\s+|had\s+|were\s+|are\s+|quietly\s+|finally\s+)*(?:resumed|restarted|reopened|back\s+on|under\s?way|moving\s+again|picked\s+back\s+up|continu(?:e|es|ed|ing))\b|\bresum(?:ed|es|ing)\s+(?:the\s+)?(?:talks|negotiations)\b|\bcontinu(?:e|es|ed|ing)\s+to\s+negotiate\b|\bback\s+at\s+the\s+table\b/i;
const AVISO = /\b(?:gave|given|giving|gives|served|serves|filed|files|sent|sends|issued|issues|delivered)\s+(?:its\s+|their\s+|formal\s+|written\s+|the\s+|a\s+|ten[\s-]year\s+)*notice\b|\bannounced\s+(?:it\s+(?:would|will)|plans?\s+to)\s+(?:leave|withdraw|exit|terminate|quit|pull\s+out)\b/i;
const JUIZO_C = /\bunfair\w*|\b(?:a|the|this|that)\s+(?:bad|raw|terrible|lopsided|one[\s-]sided|fair|good|great|sweet|better|worse)\s+deal\b|\bripped\s+off\b|\brip[\s-]?off\b|\boverpa(?:y|ys|id|ying)\b|\bfreeload\w*|\bswindl\w*|\bextort\w*|\bshake[\s-]?down\b|\b(?:is|was|isn['’]t|wasn['’]t)\s+(?:un)?fair\b/i;
const QUEM_GANHA = /\b(?:Canada|the\s+(?:US|U\.S\.|United\s+States)|America|British\s+Columbia|Washington|Ottawa)\s+(?:clearly\s+|really\s+)?(?:wins|won|is\s+winning|lost\s+out|comes\s+out\s+ahead|came\s+out\s+ahead|got\s+the\s+better|gets\s+the\s+better)\b|\b(?:big|real|clear|biggest|true)\s+(?:winners?|losers?)\b/i;
const APAGADO = /\berased\b|\bgenocid\w*|\bstolen\s+(?:land|lands|territory)\b|\bethnic\s+cleansing\b|\bwiped\s+off\s+the\s+map\b/i;
const DIZ = /\b(?:says?|said|according|calls?|called|calling|describ\w*|words|argu\w*|insist\w*)\b/i;
const EST2012 = /(?<![\w.,])(?:180|280)\b[^.?!]{0,30}?\bmillion\b|\bone\s+hundred\s+(?:and\s+)?eighty\b|\btwo\s+hundred\s+(?:and\s+)?eighty\b/i;
const LADO_BC = /\b(?:British\s+Columbia|B\.C\.|BC\s+Hydro|Canadian\s+(?:Entity|side|government|estimate|count)|Canada['’]s\s+(?:own\s+)?(?:estimate|count|side|answer|government)|Ottawa)\b/i;
const CONTESTA = /\b(?:disput\w*|estimat\w*|count\w*|contest\w*|argu\w*|answer\w*|reject\w*|challeng\w*|says?|own)\b/i;

const NAO_SE_DIZ = [
  // ---- as quatro do enxame (pauta §5; conc. §3)
  { id: "tratado-cancelado",
    porque: 'ninguém cancelou o tratado: em março de 2025, o governo da Colúmbia Britânica anunciou que os EUA pausaram as conversas para atualizá-lo, e o tratado continua em vigor ("the Treaty, which remains in force", L3); vale "The treaty itself remains in force" (pauta §5, as quatro do enxame; fatos-c, item 4)',
    julga: (f) => (!pergunta(f) && semNeg(f, CANCELOU, NEG_LARGA) ? "reprova" : null) },
  { id: "tratado-expirou",
    porque: 'o tratado não tem data para acabar: em setembro de 2024 mudou a parte da cheia, e sair pede 10 anos de aviso; nunca "the treaty expired", "the treaty will end in 2027" nem "61 years"; vale "The treaty has no end date. In September 2024, its flood part changed." (pauta §5, as quatro do enxame e as correções da v1; K10)',
    julga: (f) => (!pergunta(f) && (semNeg(f, EXPIROU, NEG_LARGA) || ANOS61.test(f)) ? "reprova" : null) },
  { id: "canada-controla",
    porque: 'o Canadá não controla a água dos EUA nem fecha o rio: "Canada did not turn over control of its reservoirs to the U.S. Rather, the operations […] must be agreed to by both" (BC Hydro, L12); vale a medida com os dois denominadores e "So Canada can\'t turn the Columbia off"; nunca "hostage" (pauta §5, as quatro do enxame; K4)',
    julga: (f) => {
      if (/\bhostages?\b/i.test(f)) return "reprova";
      if (pergunta(f)) return null;
      for (const m of f.matchAll(new RegExp(CONTROLA_V.source, "gi"))) {
        const antes = f.slice(Math.max(0, m.index - 60), m.index);
        if (CANADA.test(antes) && !NEG_LARGA.test(antes)) return "reprova";
      }
      return null;
    } },
  { id: "hidreletrica-40",
    porque: 'o número da hidrelétrica dos EUA fica no fundo (44 % da geração em 2012, EIA; "more than one-third" da capacidade, 2026, †) e o "40 % at risk" é do enxame: na voz, "the largest hydropower-producing river system in the United States" (o CRS, L1) (pauta §4.1 e §5)',
    julga: (f) => ((HIDRO_PCT.test(f) && HIDRO.test(f)) || /\bhydro\w*[^.?!]{0,40}\bat\s+risk\b|\bat\s+risk\b[^.?!]{0,40}\bhydro\w*/i.test(f) ? "reprova" : null) },
  // ---- o gatilho e os picos (pauta §5, novos na v2; L14, L15)
  { id: "gatilho-600",
    porque: 'o tratado não define o gatilho ("The actual trigger […] is not currently defined in the Treaty", CRS nota 39, L15): o 600 mil é a suposição do Canadá nos estudos da revisão; vale "British Columbia assumed it would be called only at 600,000, which it expected to be rare" e "the treaty never says how big a flood that is" (pauta §4.3 e §5)',
    julga: (f) => {
      if (N600.test(f) && GATILHO.test(f) && !/\b(?:British\s+Columbia|B\.C\.|Canad\w*|assum\w*|suppos\w*|expect\w*)\b/i.test(f)) return "reprova";
      const m = f.match(TRATADO_DEFINE);
      return m && !/\b(?:never|not|no)\b|n['’]t\b/i.test(m[0]) ? "reprova" : null;
    } },
  { id: "picos-desde-1974",
    porque: 'de 1974 a 2008 o USGS dá o pico como média diária (código 1, 35 dos 52 anos), abaixo do pico instantâneo: "never reached 600,000 since 1974" (ou "since the dams") não se diz; vale "Since 2009, with the space reserved, it hasn\'t once" (L14; pauta §4.3 e §5)',
    julga: (f) => (N600.test(f) && NUNCA_PICO.test(f) && DESDE_ANTIGO.test(f) ? "reprova" : null) },
  { id: "sem-pagamento-enchente",
    porque: 'os picos de depois vêm regulados, com o espaço reservado em uso: a conta não mede o rio sem o espaço; nunca "without the payment, Portland would flood" nem "the river would hit 600,000 every other year" (pauta §4.3 e §5)',
    julga: (f) => (SEM_PAGAMENTO.test(f) || (N600.test(f) && /\bevery\s+other\s+year\b|\bwould\s+(?:hit|reach|pass|top)\b/i.test(f)) ? "reprova" : null) },
  { id: "canada-recusou",
    porque: 'o Canadá tem de ajudar quando chamado (o "called-upon", Art. IV.3, que sobrevive ao fim do tratado; L15): nunca "the US pays because Canada refused to help" nem "Canada no longer has to help"; vale "the treaty never says how big a flood that is" (pauta §4.3 e §5)',
    julga: (f) => (!pergunta(f) && CANADA.test(f) && (RECUSA.test(f) || NAO_PRECISA.test(f)) ? "reprova" : null) },
  { id: "paga-por-nada",
    porque: 'os EUA não pagam por nada e o Canadá não "cobra": a lei paga por "reserving and operating" o espaço (L11), e o lago baixa "anyway" (K5); e um nome só para o dinheiro, "payment": nunca "fee", "rent", "compensation" nem "royalty" na voz (pauta §1, o que os leitores do Lesoto ensinaram, e §5)',
    julga: (f) => (semNeg(f, PAGA_NADA) || PALAVRA_DINHEIRO.test(f) || (ALUGUEL.test(f) && CTX_ESPACO.test(f)) ? "reprova" : null) },
  { id: "estacao-mudou",
    porque: 'a voz não liga o achatamento do ano do rio ao pagamento de 2025 (o inverno cheio de Birchbank é sobretudo energia, L12 p. 25; L13 p. 22), não diz "mostly" (nenhuma fonte lida mede qual pesa mais) e não diz que a água foi tirada; vale "The water wasn\'t taken away. It was moved: to make power in winter, and to leave room for the spring flood." (pauta §4.3 e §5; K4)',
    julga: (f) => ((ACHATA.test(f) && /\b(?:payment|pays?|paid|37\.6|2025)\b/i.test(f)) || MOSTLY.test(f) || semNeg(f, TIROU_AGUA, NEG_LARGA) ? "reprova" : null) },
  { id: "rio-inteiro",
    porque: 'as três barragens do tratado não seguram o rio inteiro: guardam "as much water as the whole river carries past The Dalles in about six weeks", e o outro denominador vem logo depois (uns três meses e meio na estação canadense); as "seis semanas" só com The Dalles (pauta §4.3 e §5; K4)',
    julga: (f) => (semNeg(f, SEGURA_TUDO, NEG_LARGA) || (SEIS_SEMANAS.test(f) && /\b(?:river|Columbia|water|store|stores|hold|holds|lakes?|dams?|reservoirs?)\b/i.test(f) && !/\bDalles\b/.test(f)) ? "reprova" : null) },
  { id: "dois-meses",
    porque: '"count every other reservoir up there, and it\'s two months" está errado (K4): Libby é americano; vale "Add the extra storage Canada built at Mica, outside the treaty, and it\'s closer to two months" (pauta §4.3 e §5)',
    julga: (f) => (DOIS_MESES.test(f) && TODO_RESERVATORIO.test(f) ? "reprova" : null) },
  { id: "canada-produz-39",
    porque: 'o 39 % é a medida do canal numa estação a uns 20 km da fronteira (Birchbank / The Dalles, 88 anos), e Birchbank inclui a água que o Kootenai recolhe em Montana e Idaho: nunca "Canada produces 39 percent"; vale "at a river gauge in British Columbia […] the Columbia already carries about 39 percent of the water that passes The Dalles" (pauta §4.1 e §5; K3)',
    julga: (f) => (N39PCT.test(f) && CANADA.test(f) && (PRODUZ.test(f) || /\bCanada['’]s\s+(?:\w+\s+)?(?:39|thirty[\s-]nine)\b/i.test(f)) && !/\b(?:gauge|station|Birchbank|measur\w*)\b/i.test(f) ? "reprova" : null) },
  { id: "agua-um-numero",
    porque: 'um número só para a água que vem do Canadá (os quatro leitores notaram o 38 contra o 39): na voz, a medida do canal, 39 %; o 38 % das agências e os 30–35 % e 50 % da BC Hydro vão à tela, cada um com o seu ponto de medida; nunca "38 percent" na voz, nem "30/35/50 percent of the water" sem o lugar, nem "half the water crosses the border" (pauta §4.1 e §5; K10; o teste dos leitores)',
    julga: (f) => (N38PCT.test(f) || (AGUA_PCT.test(f) && AGUA.test(f) && !LUGAR_AGUA.test(f)) || (METADE_AGUA.test(f) && /\b(?:Canad\w*|British\s+Columbia|border)\b/i.test(f)) ? "reprova" : null) },
  // ---- as correções da base e da v1 (pauta §5)
  { id: "venda-1964",
    porque: 'a Colúmbia Britânica vendeu "the first 30 years" da parte do Canadá, com o pagamento em 16/09/1964 (US$ 253.929.534,25, três fatias de 30 anos até 31/03/2003): nunca "sold 30 years of power starting in 1964" nem "from 1973 to 2003" (pauta §4.2 e §5)',
    julga: (f) => ((/\b(?:sold|sale|sell|power|entitlement|share)\b/i.test(f) && /\bfrom\s+1973\b|\b1973\s*(?:to|-|–|through|until)\s*2003\b/i.test(f)) || /\bsold\b[^.?!]{0,80}?\b(?:starting|beginning|from)\s+(?:in\s+)?1964\b/i.test(f) ? "reprova" : null) },
  { id: "big-bend",
    porque: '"the Big Bend" sozinho não se diz (lê como o parque do Texas): sempre "the river\'s big bend in British Columbia" (pauta §4.1 e §5)',
    julga: (f) => (/\bBig\s+Bend\b/.test(f) ? "reprova" : null) },
  { id: "assinado-ottawa",
    porque: 'o tratado foi "signed at Washington January 17, 1961, and entered into force September 16, 1964" (a lei, L11); os atos de troca é que são "Done at Ottawa": nunca "signed in Ottawa" nem "ratified in 1961"; vale "signed in 1961; it took effect in September 1964" (pauta §4.2 e §5)',
    julga: (f) => (/\bsigned\s+(?:it\s+)?in\s+Ottawa\b/i.test(f) || /\bratif\w*[^.?!]{0,30}?\b1961\b|\b1961\b[^.?!]{0,30}?\bratif\w*/i.test(f) ? "reprova" : null) },
  { id: "grand-coulee-1942",
    porque: 'o Grand Coulee cortou o salmão em 1941 ("stopped the natural migratory runs", F10; o Reclamation), não em 1942 (pauta §4.4 e §5)',
    julga: (f) => (/\bGrand\s+Coulee\b/i.test(f) && /\b1942\b/.test(f) ? "reprova" : null) },
  { id: "salmao-barragens",
    porque: '"the treaty dams killed the salmon" não se diz: o salmão do alto Columbia foi cortado pelo Grand Coulee, de 1941 (F10) (pauta §4.4 e §5)',
    julga: (f) => (/\bsalmon\b/i.test(f) && /\b(?:kill\w*|wiped\s+out|wipe\s+out|destroy\w*|exterminat\w*|doomed|ended|stopped|cut\s+off|blocked)\b/i.test(f) && /\b(?:treaty|Mica|Keenleyside|Arrow|Duncan|Libby)\b/i.test(f) && !/\b(?:Grand\s+Coulee|Chief\s+Joseph)\b/i.test(f) ? "reprova" : null) },
  { id: "salmao-cabeceiras",
    porque: 'nenhuma fonte institucional lida diz que o salmão chegava às cabeceiras (o NPCC deu 502; "went all the way to the headwaters" é só resumo de busca): o salmão vai ao roteiro no nível "até o Canadá", com a Canadian Geographic como dona (fatos-c, item 11b; a leitura da Sala)',
    julga: (f) => (/\bsalmon\b/i.test(f) && /\b(?:headwaters|Columbia\s+Lake|source\s+of\s+the\s+(?:river|Columbia)|all\s+the\s+way\s+(?:up|to\s+the\s+(?:top|start|source)))\b/i.test(f) ? "reprova" : null) },
  { id: "libby-ano",
    porque: 'a conclusão de Libby diverge (obra de 1966 a 1972–73; "completed in 1973" no USACE de Seattle e no CRS; "formally dedicated on Aug. 24, 1975"; 1972 só em resumo de busca): o ano só com o dono na frase (pauta §4.2 e §5; fatos-c, item 10)',
    alerta: 'Libby com o ano da conclusão e com dono: confira que é o que a fonte diz ("Completed in 1973 and formally dedicated on Aug. 24, 1975", USACE de Seattle, 06/08/2025; o CRS, "completed in 1973") (fatos-c, item 10)',
    julga: (f) => {
      if (!/\bLibby\b/.test(f) || !/\b19[67]\d\b/.test(f)) return null;
      if (!/\b(?:finished|completed?|completion|built|opened|done|went\s+into\s+(?:service|operation)|came\s+online|dedicated)\b/i.test(f)) return null;
      return /\b(?:Corps|USACE|Army|Congressional\s+Research|CRS|according|says|said)\b/i.test(f) ? "alerta" : "reprova";
    } },
  { id: "pagou-em-1964",
    porque: 'os US$ 64,4 mi foram pagos "when each of the three Canadian dams became operational" (L5), não em 1964: vale "paid 64.4 million dollars, once, for 60 years of flood protection" (pauta §4.2 e §5)',
    julga: (f) => (N644.test(f) && /\b1964\b/.test(f) ? "reprova" : null) },
  { id: "libby-nada",
    porque: '"Libby brought Canada nothing" ("for no Canadian benefit at all", o HP) está errado: o Protocolo dá ao Kootenay regulado "more than 200,000 kilowatt years per annum of energy benefit downstream in Canada"; vale a meia frase "and its water, regulated, makes extra power in Canada too, by the treaty\'s own count" (pauta §4.2 e §5; K10)',
    julga: (f) => ((/\bLibby\b/.test(f) && /\b(?:nothing|no\s+(?:Canadian\s+)?benefit|for\s+free|no\s+gain)\b/i.test(f)) || /\bno\s+Canadian\s+benefit\b/i.test(f) ? "reprova" : null) },
  { id: "desvio-numero",
    porque: 'o volume do desvio que o Canadá propôs em 1951 está numa fonte só e sem nota (K7): sem número; vale "Canada answered with a plan to divert much of the upper Columbia for its own use, according to the US Congressional Research Service" (pauta §4.2 e §5)',
    julga: (f) => (/\bdivert\w*|\bdiversion\b/i.test(f) && /(?<![\w.,])15\.5\b|\bfifteen\s+point\s+five\b|\bmillion\s+acre[\s-]f(?:ee|oo)t\b/i.test(f) ? "reprova" : null) },
  { id: "vanport-mortos",
    porque: 'os mortos de Vanport só com dono: "fifteen", com a Oregon Encyclopedia (a Oregon Historical Society); "at least 16", com o USGS (Water-Supply Paper 1080, 1949); "at least 51" e "more than 50" são da cheia inteira, nunca de Vanport (fatos-c, item 8; pauta §4.2 e §5)',
    julga: (f, ant) => {
      if (!MORTE.test(f)) return null;
      const vanF = /\bVanport\b/i.test(f), toda = CHEIA_TODA.test(f.replace(/\bVanport\b/gi, ""));
      if (!vanF && !(/\bVanport\b/i.test(ant) && !toda)) return null;   // não é de Vanport
      if (/(?<![\w.,])(?:50|51)\b|\bfifty(?:[\s-]one)?\b|\bdozens\b/i.test(f) && !toda) return "reprova";
      if (/(?<![\w.,])15\b|\bfifteen\b/i.test(f) && !/\bOregon\s+(?:Encyclopedia|Historical\s+Society)\b|\bPortland\s+State\b/i.test(f)) return "reprova";
      if (/(?<![\w.,])16\b|\bsixteen\b/i.test(f) && !/\bUSGS\b|\bGeological\s+Survey\b/i.test(f)) return "reprova";
      return null;
    } },
  { id: "vanport-30000",
    porque: 'os 30.000 desalojados do USACE/BPA são da cheia inteira, não de Vanport (Vanport tinha 18.500 a 18.700 moradores): "the flood displaced about 30,000 people" (fatos-c, item 8)',
    julga: (f) => (/\bVanport\b/i.test(f) && /(?<![\w.,])30,000\b|\bthirty\s+thousand\b/i.test(f) && !CHEIA_TODA.test(f) && !/\bthe\s+flood\b/i.test(f) ? "reprova" : null) },
  { id: "sinixt-extintos",
    porque: 'os Sinixt não são extintos: o governo do Canadá "declared the Arrow Lakes Band extinct" em 1956 (a Corte, L7 §6), e em 2021 a Corte disse que "the Lakes Tribe is an Aboriginal people of Canada"; e o laço 1956 → barragens é inferência, fora (nunca "declared extinct, so no one was consulted") (pauta §4.4 e §5)',
    julga: (f, ant) => {
      if (!/\bextinct\w*/i.test(f) || !(SINIXT.test(f) || SINIXT.test(ant) || /\bband\b/i.test(f))) return null;
      if (!/\bdeclar\w*/i.test(f)) return "reprova";
      return /\b(?:dams?|treaty|reservoirs?|flood\w*|so\s+that|to\s+make\s+(?:way|room)|clear\w*\s+the\s+way|consult\w*)\b/i.test(f) ? "reprova" : null;
    } },
  { id: "sinixt-excluidos",
    porque: 'nenhum texto lido diz que os Sinixt foram excluídos da mesa: a lista oficial (a GAC, maio de 2025) nomeia os Ktunaxa, os Syilx Okanagan e os Secwépemc, e a ausência na lista não é prova de exclusão (fatos-c, itens 12a e 12b)',
    julga: (f, ant) => ((SINIXT.test(f) || SINIXT.test(ant)) && /\b(?:excluded|left\s+out|shut\s+out|kept\s+out|no\s+seat|not\s+at\s+the\s+table|barred|ignored)\b/i.test(f) ? "reprova" : null) },
  { id: "pago-em-dinheiro",
    porque: 'a parte do Canadá é paga em eletricidade, não em dinheiro (Art. V.2): nunca "Canada gets paid in cash every year"; vale "paid in electricity, not cash" (pauta §4.2 e §5)',
    julga: (f) => (/\b(?:share|entitlement|power|electricity|half)\b/i.test(f) && semNeg(f, /\b(?:in|with|as)\s+cash\b|\bcash\s+(?:payments?|every\s+year|each\s+year)\b/i, NEG_LARGA) ? "reprova" : null) },
  { id: "vale-120",
    porque: 'os "~US$ 120 mi" da página da BC (†) saem: o valor da parte do Canadá é a faixa da BC Hydro de 2026, "typically worth between $110 - $400 million per year", com o dono (pauta §4.5 e §5; K2)',
    julga: (f) => (/(?<![\w.,])120\s+million\b|\bone\s+hundred\s+(?:and\s+)?twenty\s+million\b/i.test(f) && /\b(?:share|entitlement|worth|value)\b/i.test(f) ? "reprova" : null) },
  { id: "duas-contas",
    porque: 'a estimativa de 2012 das agências dos EUA não vai sozinha nem como virada: a conta da Colúmbia Britânica vem lado a lado, na mesma frase ou na seguinte (a frase segura do cético: "…180 to 280 million dollars a year… British Columbia disputed those assumptions. Its own estimate says…"); e nunca "the US loses money on the treaty" (pauta §4.5 e §5; K2)',
    julga: (f, ant, ctx) => {
      if (/\b(?:U\.?S\.?|US|United\s+States|America)\b[^.?!]{0,30}?\b(?:loses|lost|losing)\s+money\b/i.test(f)) return "reprova";
      if (!(EST2012.test(f) || (/\b2012\b/.test(f) && /\b(?:estimat\w*|revenues?)\b/i.test(f) && /\b(?:power|treaty|American|U\.?S\.?|US|United\s+States|agencies)\b/i.test(f)))) return null;
      const jan = `${f} ${ctx.prox(1)}`;
      return LADO_BC.test(jan) && CONTESTA.test(jan) ? null : "reprova";
    } },
  { id: "ate-2044",
    porque: '"37.6 million a year through 2044" é o acordo de princípio, que "has not been finalized" (K10): o 2044 só como o que o AIP propõe, com "would" ou "agreement in principle" (pauta §4.5 e §5)',
    julga: (f) => (/\b2044\b/.test(f) && !/\b(?:would|agreement\s+in\s+principle|AIP|propos\w*|not\s+been\s+finali[sz]ed|if|plan\w*)\b/i.test(f) ? "reprova" : null) },
  { id: "nunca-finalizado",
    porque: '"It was never finalized" envelhece (K10): vale "It has not been finalized", com a data na tela (pauta §4.5 e §5)',
    julga: (f) => (/\bnever\s+(?:been\s+|got\s+|gets\s+)?finali[sz]ed\b/i.test(f) ? "reprova" : null) },
  { id: "deal-2025",
    porque: 'o acordo interino é de 22/11/2024; o espaço começou na primavera de 2025: nunca "under a deal that began in 2025"; vale "a temporary deal that took effect for the spring floods of 2025" (pauta §5; K3)',
    julga: (f) => (new RegExp(String.raw`\b(?:deal|agreement)\b[^.?!]{0,40}?\b(?:began|begins|started|starts|signed|struck|reached|made|agreed)\s+in\s+(?:early\s+|late\s+|mid[\s-])?(?:(?:${MESES})\s+)?2025\b`, "i").test(f) ? "reprova" : null) },
  { id: "deal-31-julho",
    porque: 'nunca "the deal ends by July 31, 2027, at the latest" nem "talks to replace it" (K3): vale "The deal runs out after the spring of 2027, unless the two countries agree on something new" e "talks on a new treaty" (pauta §5)',
    julga: (f) => ((/\bJuly\s+31\b|\b31\s+July\b/i.test(f) && /\b(?:deal|agreement|interim|ends?|expires?|runs\s+out)\b/i.test(f)) || (/\bat\s+the\s+latest\b/i.test(f) && /\b2027\b/.test(f)) || /\btalks\s+to\s+replace\b/i.test(f) ? "reprova" : null) },
  { id: "corte-37-sem-dono",
    porque: 'o corte de 37 % da parte do Canadá vai com o dono: "cut by 37 percent, by the State Department\'s count" (o Departamento de Estado, pelo CRS; K10) (pauta §4.5 e §5)',
    julga: (f, ant) => (N37PCT.test(f) && !STATE_DEPT.test(f) && !STATE_DEPT.test(ant) ? "reprova" : null) },
  { id: "meio-vazio",
    porque: 'só parte do lago se esvazia (3,6 milhões de acre-pés do reservatório de Arrow): nunca "half empty" nem "the lake is emptied/drained" sem o "part of"; vale "part of the Arrow Lakes Reservoir […] is emptied on purpose" (pauta §5, "Half empty"; §8, o gancho A)',
    julga: (f) => {
      if (/\bhalf[\s-]empty\b/i.test(f)) return "reprova";
      const m = f.match(LAGO_TODO);
      return m && !/\b(?:part|portion|some|share|top|upper|layer|slice)\s+of\b/i.test(f.slice(0, m.index)) && !NEG_LARGA.test(f.slice(0, m.index)) ? "reprova" : null;
    } },
  { id: "eua-pararam",
    porque: 'os EUA não pararam de pagar: quem parou de contribuir para a parte do Canadá foram três PUDs do Médio Columbia, em 2024, que fecharam acordo em setembro de 2026 (pauta §4.5 e §5)',
    julga: (f) => (/\b(?:the\s+)?(?:U\.?S\.?|US|United\s+States|America|American\s+government|federal\s+government)\s+(?:has\s+|have\s+|had\s+|just\s+)?stopped\s+paying\b/i.test(f) ? "reprova" : null) },
  { id: "no-papel",
    porque: '"at least on paper" insinua que o acordo não vale (K8): fora, no fecho e em todo lugar (pauta §5 e §7)',
    julga: (f) => (/\bat\s+least\s+on\s+paper\b|\bon\s+paper\s+at\s+least\b/i.test(f) ? "reprova" : null) },
  { id: "37-sem-inflacao",
    porque: 'os US$ 37,6 mi vão com a inflação na primeira vez, na frase ou na seguinte ("37.6 million dollars a year, adjusted for inflation": a lei dá 37,6 no ano fiscal de 2025 e o mesmo "adjusted for inflation" em 2026 e 2027, L11; a BC Hydro, "indexed to inflation"); e nunca os 64,4 mi ao lado dos 37,6 mi por ano sem a inflação (pauta §4.3 e §5; K9)',
    julga: (f, ant, ctx) => {
      if (!N376.test(f)) return null;
      const infl = /\binflation\b|\bindex\w*/i;
      if (N644.test(f) && !infl.test(f)) return "reprova";
      return ctx.i === ctx.prim376 && !infl.test(f) && !infl.test(ctx.prox(1)) ? "reprova" : null;
    } },
  // ---- a política e as pessoas (pauta §5; fatos-c)
  { id: "trump",
    porque: 'Trump fora da voz (K8): a "very large faucet" é de candidato, de setembro de 2024, sobre mandar água a Los Angeles, e a identificação com o Columbia é dos especialistas (fatos-c, itens 1 e 2); a pausa vai com o dono que a anunciou (o governo da BC); se o roteiro precisar dizer quem governava, "the new US administration", com o dono e a data (pauta §5 e §7)',
    julga: (f) => (/\bTrump\w*/i.test(f) ? "reprova" : null) },
  { id: "carney-eby",
    porque: 'nenhuma fala de Carney ou de Eby sobre o tratado foi achada (fatos-c, item 13e; pauta §5 e §7, "não achados"): fora da voz',
    julga: (f) => (/\b(?:Carney|Eby)\b/.test(f) ? "reprova" : null) },
  { id: "dix-2026",
    porque: 'nenhuma fala de Dix sobre o tratado em 2026 foi achada; a dele é de 25/03/2025 (fatos-c, itens 3a e 3c)',
    julga: (f) => (/\bDix\b/.test(f) && /\b2026\b/.test(f) ? "reprova" : null) },
  { id: "sinal-gac",
    porque: '"We wait for a signal from the U.S. to resume" não é declaração pública: é nota interna de Question Period da Global Affairs Canada para a ministra, recebida em 28/05/2025 (fatos-c, itens 5 e "O que muda", 2); só com o tipo do documento ("a May 2025 briefing note for Canada\'s foreign minister")',
    alerta: '"wait for a signal" com o tipo do documento: confira que é a nota de Question Period da GAC (28/05/2025), nas palavras dela, e não um comunicado (fatos-c, item 5)',
    julga: (f, ant) => (/\bwait(?:s|ing|ed)?\s+for\s+a\s+signal\b/i.test(f) ? (/\b(?:note|briefing|internal|Question\s+Period|memo)\b/i.test(`${ant} ${f}`) ? "alerta" : "reprova") : null) },
  { id: "wrda-lei",
    porque: 'a WRDA 2026 não é lei: a Câmara aprovou o H.R. 9497 em 16/09/2026 (as verbas até 2030; o sunset de 2027 intacto no texto lido) e o S. 4949 foi reportado pelo comitê em 15/07/2026 (verbas e sunset até 2029); nenhuma votação no Senado nem sanção: nunca "Congress extended", "the new law extends" nem "through 2030"; vale "expires at the end of August 2027, unless Congress extends it. Bills in both chambers would." (fatos-c, itens 13b, 13c e "O que muda", 8)',
    julga: (f) => ((semNeg(f, ESTENDEU, NEG_LARGA) && !/\bunless\b/i.test(f)) || (VIROU_LEI.test(f) && /\b2026\b|\bextension\b|\bextend\w*/i.test(f) && !CONDICIONAL.test(f)) || (ATE_2030.test(f) && /\b(?:pay\w*|deal|authority|money|funding|agreement)\b/i.test(f) && !CONDICIONAL.test(f)) ? "reprova" : null) },
  { id: "retomada",
    porque: 'nenhuma retomada das conversas foi achada: a fonte mais nova diz "still paused" (Canadian Geographic, 17/08/2026), antes a BC Hydro (23/06/2026, "currently paused"); o "continue to negotiate" do deputado Larsen não é fato sobre as conversas (fatos-c, itens 6, 13a e "O que muda", 9)',
    julga: (f) => (semNeg(f, RETOMA, NEG_LARGA) && !/\b(?:19\d\d|20(?:0\d|1\d|2[0-4]))\b/.test(f) ? "reprova" : null) },
  { id: "aviso-saida",
    porque: 'nenhum aviso de saída foi achado (fatos-c, item 13d): "A US congressional report said in December 2024 that neither side had given it, and no later report we found mentions one" (pauta §4.3)',
    julga: (f) => (semNeg(f, AVISO, NEG_LARGA) ? "reprova" : null) },
  { id: "juizo",
    porque: 'o vídeo não diz se o tratado é justo, nem quem "ganha": nunca "unfair", "a bad deal", "ripped off", "the US overpays", "freeloader", "Canada wins" (pauta §3 o tom, e §5; voz §2)',
    julga: (f) => ((JUIZO_C.test(f) || QUEM_GANHA.test(f)) && !DIZ.test(f) ? "reprova" : null) },
  { id: "apagados",
    porque: '"erased", "genocide" e "stolen land" só entre aspas e com o dono que os diz (pauta §5; voz §2)',
    julga: (f) => (APAGADO.test(f) && !DIZ.test(f) ? "reprova" : null) },
  { id: "renata-fogo",
    porque: 'a casa queimando em Renata é a abertura do HP, e nenhuma fonte lida conta fogo em Renata: fora, na imagem e na voz; vale "Renata no longer exists" (pauta §4.4 e §5)',
    julga: (f, ant) => ((/\bRenata\b/.test(f) || /\bRenata\b/.test(ant)) && /\b(?:burn\w*|fires?|torch\w*|flames?|ablaze|set\s+alight)\b/i.test(f) ? "reprova" : null) },
  { id: "pausa-sem-data",
    porque: 'o estado das conversas muda: vai com a data e o dono ("In June 2026, BC Hydro still called them paused"; "As of August 2026, according to Canadian Geographic, the talks were still paused"), e se relê antes da gravação (pauta §4.5; fatos-c, "O que muda", 9; §11, item 13)',
    julga: (f) => (AINDA_PAUSA.test(f) && !COM_DATA.test(f) ? "reprova" : null) },
  // ---- o que o §4 ("Na fala") e o §7 ("O que fica fora da fala") põem na tela ou no fundo
  { id: "area-na-tela",
    porque: 'a área alagada (110.000 ha) vai à tela, não à voz (K6; pauta §4.4 e §7)',
    julga: (f) => (/\bhectares?\b/i.test(f) || new RegExp(String.raw`${NUMR}[\s-]+acres\b`, "i").test(f) ? "reprova" : null) },
  { id: "energia-na-tela",
    porque: 'os MW (os 1.141 e 550 MW da parte do Canadá, os 1.120 MW, os MW médios), os kilowatt-anos do Protocolo e os 6,5 % por MAF ficam na tela ou no fundo (pauta §4.2 e §7; K10)',
    julga: (f) => (/\b(?:megawatts?|gigawatts?|kilowatts?)\b|\bkilowatt[\s-]years?\b/i.test(f) || /\b(?:MW|GW|kW|MWh|GWh)\b/.test(f) || new RegExp(String.raw`(?<![\w.,])6\.5${PCT}`, "i").test(f) ? "reprova" : null) },
  { id: "vazao-na-tela",
    porque: 'as médias mensais em m³/s (e os cfs dos meses) ficam fora da fala; a voz diz "about ten times more water in June than in February" (pauta §4.1, §7 e §8)',
    julga: (f) => (/\bcubic\s+met(?:er|re)s?\b|m³\/s|\bm3\/s\b/i.test(f) ? "reprova" : null) },
  { id: "valores-na-tela",
    porque: 'os valores exatos vão à tela: os 253.929.534,25 da venda (na voz, "about 254 million dollars"), os 52,1/11,1/1,2 mi de cada barragem, os US$ 29,9 mi das PUDs e os 8,45 e 8,95 MAF (pauta §4.2, §4.5 e §7)',
    julga: (f) => (/253,929,534|253\.9\s+million|(?<![\w.,])29\.9\s+million\b|\$29\.9|(?<![\w.,])8\.[49]5\b/i.test(f) || (/(?<![\w.,])(?:52\.1|11\.1|1\.2)\s+million\b/i.test(f) && /\b(?:Duncan|Arrow|Keenleyside|Mica|dams?|paid|payments?)\b/i.test(f)) ? "reprova" : null) },
  { id: "aip-flexivel",
    porque: 'a flexibilidade do acordo de princípio (0 a 4,0 MAF, decididos com 4 anos de antecedência) fica fora da voz: o AIP não está em vigor (K6; pauta §4.3 e §7)',
    julga: (f) => (/\b(?:zero|0)\s+(?:to|and)\s+(?:four|4)(?:\.0)?\s+million\b|\bfour\s+years\s+(?:ahead|in\s+advance|early)\b|(?<![\w.,])4(?:\.0)?\s+million\s+acre[\s-]f(?:ee|oo)t\b|\bfour\s+million\s+acre[\s-]f(?:ee|oo)t\b/i.test(f) ? "reprova" : null) },
  { id: "datas-na-tela",
    porque: 'as datas das barragens do tratado (1967/68, 1968/69 e 1973, conforme a fonte) vão à tela, e o 1951 sai ("A few years later, the US proposed a dam whose lake would reach into Canada") (K6; pauta §4.2 e §7)',
    julga: (f) => ((/\b(?:Duncan|Keenleyside|Mica|Arrow)\b/.test(f) && /\b(?:finished|completed?|opened|went\s+into\s+(?:service|operation)|came\s+online|began\s+operat\w*|was\s+built|were\s+built|built\s+in)\b/i.test(f) && /\b19[67]\d\b/.test(f)) || /\b1951\b/.test(f) ? "reprova" : null) },
  { id: "nivel-arrow",
    porque: 'os níveis do Arrow em pés (a faixa de 1.377,9 a 1.444; o mínimo de 1.401,4 em 04/02/2017) e o "2017" do fecho vão só à tela (K6; pauta §4.1 e §7, o fecho)',
    julga: (f) => (/(?<![\w.,])1,(?:3[789]\d|4[0-4]\d)(?:\.\d+)?\s*(?:feet|foot|ft)\b/i.test(f) || (/\b2017\b/.test(f) && /\b(?:level|low|lowest|bottom|minimum)\b/i.test(f) && /\b(?:lake|Arrow|reservoir)\b/i.test(f)) ? "reprova" : null) },
  { id: "sinixt-numeros",
    porque: 'do §6 da Corte, a voz diz a banda declarada extinta em 1956; os 21 de 1902, o 1930 e a "one" ficam na tela (pauta §4.4 e §7)',
    julga: (f, ant) => ((SINIXT.test(f) || SINIXT.test(ant) || /\bband\b/i.test(f)) && /(?<![\w.,])(?:1902|1930)\b|(?<![\w.,])(?:21|twenty[\s-]one)\s+(?:people|members|Sinixt|remained|left)\b/i.test(f) ? "reprova" : null) },
  { id: "salmao-26",
    porque: 'os "26 years" do salmão saem (K6; pauta §4.4 e §7)',
    julga: (f) => (/(?<![\w.,])(?:26|twenty[\s-]six)\s+years\b/i.test(f) && /\b(?:salmon|Coulee|fish)\b/i.test(f) ? "reprova" : null) },
  { id: "fontes-de-fundo",
    porque: 'a EIA e a KTVZ ficam no fundo, fora da voz (pauta §4.1 e §7)',
    julga: (f) => (/\bEIA\b|\bEnergy\s+Information\s+Administration\b|\bKTVZ\b/.test(f) ? "reprova" : null) },
];
// os dois que se medem por parágrafo: a fala citada pode atravessar a frase ("…dispute. It would…," he said)
const NAO_SE_DIZ_PAR = [
  { id: "bargaining-chip",
    porque: '"bargaining chip" não é fala de Dix: é paráfrase do repórter e manchete (OPB e CP); a fala dele é "Canadian action to terminate the treaty would have little effect on the current dispute" (25/03/2025); vale, sem aspas, "British Columbia\'s energy minister said the treaty would not be used as a bargaining chip in the trade fight" (fatos-c, itens 3a e 3b, e "O que muda", 1)',
    re: /\bbargaining\s+chips?\b/i },
  { id: "mais-importante-aspas",
    porque: '"the most important of the Canadian dams" está no texto do CRS, sem aspas: não é citação do Departamento de Estado (o state.gov deu 403 e "Technical Difficulties"); na voz, meia frase sem aspas ("Keenleyside, the Canadian dam that matters most for flood control"), ou "according to the Congressional Research Service" (fatos-c, item 7 e "O que muda", 4)',
    re: /\bmost\s+important\s+of\s+the\s+Canadian\s+dams\b/i },
];
const trechosCitados = (p) => [...p.matchAll(/"([^"]+)"|“([^”]+)”|‘([^’]+)’/g)].map((m) => m[1] ?? m[2] ?? m[3]);

// ---- os ALERTA do Columbia (conferir, nunca reprovar): {id, porque, testa(frase, a anterior, ctx)}
const MORTE_CHEIA = /(?<![\w.,])(?:50|51)\b|\bfifty(?:[\s-]one)?\b|\bdozens\b/i;
const DONO_CHEIA = /\b(?:USGS|Geological\s+Survey|Corps|USACE|Army|agencies|Bonneville|BPA|Red\s+Cross)\b/i;
const ALERTA_COL = [
  { id: "picos-sem-2009", porque: 'os picos sem 600 mil vão com "since 2009" (de 1974 a 2008, o USGS dá médias diárias, código 1), e a ressalva na tela ("1974–2008: daily averages") (L14; pauta §4.3 e §5; o pedido da Sala)',
    testa: (f, ant) => (N600.test(f) || N450.test(f)) && (NUNCA_PICO.test(f) || /\bsix\s+(?:springs|years|times)\b/i.test(f)) && !/\b2009\b/.test(`${ant} ${f}`) && !DESDE_ANTIGO.test(f) },
  { id: "dois-denominadores", porque: 'as seis semanas (The Dalles) vêm com o outro denominador na mesma frase ou na seguinte: "Measured against the river as it flows through British Columbia, near the border, that\'s closer to three and a half months" (K4; pauta §4.3)',
    testa: (f, ant, ctx) => SEIS_SEMANAS.test(f) && /\bDalles\b/.test(f) && !TRES_MESES.test(`${f} ${ctx.prox(1)}`) },
  { id: "gatilho-sem-crs", porque: 'os números do gatilho (450 a 650 mil, os EUA; 600 mil, o Canadá) estão numa fonte secundária oficial: "That\'s according to the US Congressional Research Service", até duas frases antes ou depois; as primárias não se leram (pauta §4.3 e §11, item 2)',
    testa: (f, ant, ctx) => (N450.test(f) || N650.test(f) || N600.test(f)) && /\b(?:projected|projects|assum\w*|expected|expects|trigger\w*|come\s+into\s+play|called|call\s+on|planners)\b/i.test(f)
      && !/\bCongressional\s+Research\s+Service\b|\bCRS\b/.test([ctx.prox(-2), ant, f, ctx.prox(1), ctx.prox(2)].join(" ")) },
  { id: "estudo-bc", porque: 'a conta da BC (40 a 150 mi por ano) vem do "British Columbia U.S. Benefits Study", cuja data não se leu: "Its own estimate says…", e a data se lê antes (pauta §4.5 e §11, item 2)',
    testa: (f) => /(?<![\w.,])40\s+(?:to|and)\s+150\b|\bforty\s+(?:to|and)\s+(?:one\s+)?hundred\s+(?:and\s+)?fifty\b/i.test(f) },
  { id: "faixa-bc-hydro", porque: 'o valor da parte do Canadá (110 a 400 mi por ano) vai com o dono: "by BC Hydro\'s count" (K2; pauta §4.5)',
    testa: (f, ant) => /(?<![\w.,])110\s+(?:to|and)\s+400\b|\bone\s+hundred\s+(?:and\s+)?ten\s+(?:to|and)\s+four\s+hundred\b/i.test(f) && !/\bBC\s+Hydro\b/i.test(`${ant} ${f}`) },
  { id: "mortos-cheia-sem-dono", porque: 'os mortos da cheia inteira ("at least 51", USGS 1949; "more than 50", USACE/BPA) vão com o dono na frase ou na anterior (fatos-c, item 8)',
    testa: (f, ant) => MORTE.test(f) && MORTE_CHEIA.test(f) && !/\bVanport\b/i.test(f) && !DONO_CHEIA.test(`${ant} ${f}`) },
  { id: "30000-sem-dono", porque: 'os 30.000 desalojados são da cheia inteira, "by the count of the US agencies" (USACE/BPA, L5) (pauta §7, ato 2; fatos-c, item 8)',
    testa: (f, ant) => /(?<![\w.,])30,000\b|\bthirty\s+thousand\b/i.test(f) && /\b(?:displaced|homeless|homes|evacuat\w*|lost\s+their)\b/i.test(f) && !DONO_CHEIA.test(`${ant} ${f}`) },
  { id: "sinixt-dono", porque: 'a declaração de extinção de 1956 tem dono: "the government of Canada declared the Arrow Lakes Band extinct" (a Corte, L7 §6) (pauta §4.4)',
    testa: (f) => /\bdeclar\w*/i.test(f) && /\bextinct\b/i.test(f) && !/\b(?:government|Canada|Ottawa|federal)\b/i.test(f) },
  { id: "dix", porque: 'Dix só com a fala, a data (março de 2025) e o cargo ("British Columbia\'s energy minister"); a fala dele é "would have little effect on the current dispute", e "bargaining chip" é paráfrase do repórter (pauta §5; fatos-c, itens 3a e 3b)',
    testa: (f, ant, ctx) => /\bDix\b/.test(f) && (!/\bminister\b/i.test(`${ant} ${f} ${ctx.prox(1)}`) || !/\b2025\b|\bMarch\b/.test(`${ant} ${f} ${ctx.prox(1)}`)) },
  { id: "barton", porque: '"the most critical Canadian reservoir for flood risk management" (Barton, USACE, NWPB, 06/12/2024) veio do WebFetch (†) e se relê na página antes da fala; o fatos-c não a releu (pauta §4.3 e §11, item 5)',
    testa: (f) => /\bmost\s+critical\b/i.test(f) },
  { id: "cbc", porque: 'a pergunta da CBC abre o ato 3 (K8), mas a data exata dos dois vídeos da CBC ainda se lê (pauta §4.3 e §11, item 5)',
    testa: (f) => /\bCBC\b/.test(f) },
  { id: "puds", porque: 'as PUDs ("stopped contributing to the CE in September 2024"†; o acordo de 25/09/2026, "a one-time payment totaling $29.9 million"†) se releem na página antes da fala (APPA e The Star; pauta §4.5 e §11, item 5); o valor fica na tela',
    testa: (f) => /\butilities\b|\bPUDs?\b|\b(?:public\s+)?utility\s+districts?\b/i.test(f) },
  { id: "pausa-sem-dono", porque: 'a pausa vai com quem a anunciou: "In March 2025, British Columbia\'s government announced that the United States had paused the talks" (BC News, 11/03/2025); não com o presidente dos EUA (pauta §4.5 e §5; fatos-c, item 4)',
    testa: (f) => /\b(?:U\.?S\.?|US|United\s+States|Washington|America|administration|White\s+House|president)\b[^.?!]{0,40}?\bpaus(?:ed|ing|es)\b/i.test(f) && !/\b(?:British\s+Columbia|B\.C\.|BC\s+Hydro|announced|according|said|says|Canadian\s+Geographic|government\s+of)\b/i.test(f) },
  { id: "comprimento-rio", porque: 'o comprimento do Columbia tem dois números do USGS (1.942 km, de 2007; 1.243 mi, de 1981): "about 1,200 miles", ou o número com o ano (fatos-c, item 11a)',
    testa: (f) => /(?<![\w.,])1,(?:2\d\d|9\d\d)\s+(?:miles?|mi|km|kilomet\w+)\b|\b(?:twelve|nineteen)\s+hundred\s+(?:\w+\s+)?(?:miles?|kilomet\w+)\b/i.test(f) },
  { id: "quantia-fixa", porque: 'se os 3,6 MAF são fixos ou variam com a previsão (o "Storage Reservation Diagram") ainda se lê: "a set amount of room" espera a leitura (pauta §11, item 6; K10)',
    testa: (f) => /\b(?:fixed|set)\s+amount\b/i.test(f) },
  { id: "quem-vendeu", porque: 'quem vendeu os primeiros 30 anos da parte do Canadá foi a Colúmbia Britânica: "British Columbia sold the first 30 years of that power up front" (pauta §4.2)',
    testa: (f) => /\bCanada\s+(?:sold|sells)\b/i.test(f) },
  { id: "curva-sem-lugar", porque: 'a curva vai sempre com o lugar: "the river\'s big bend in British Columbia" (pauta §4.1)',
    testa: (f, ant) => /\bbig\s+bend\b/.test(f) && !/\b(?:British\s+Columbia|B\.C\.|Canad\w*)\b/.test(`${ant} ${f}`) },
  { id: "every-sem-data", porque: 'o "every" vem colado à data absoluta (o que os leitores do Lesoto ensinaram: "every spring" junto de "the spring floods of 2025"), na frase ou nas duas seguintes (pauta §1)',
    testa: (f, ant, ctx) => /\bevery\s+(?:spring|year|winter|summer)\b/i.test(f) && /\b(?:pa(?:y|ys|id|ying|yment|yments)|emptied|empt(?:y|ies))\b/i.test(f)
      && !/\b(?:of|under|while)\s+(?:the|this)\s+deal\b/i.test(f) && !/\b20\d\d\b/.test([f, ctx.prox(1), ctx.prox(2)].join(" ")) },
];
// o acre-pé: definido na primeira vez (voz §1: "todo termo técnico é definido na primeira vez"; pauta §4.2: "an acre-foot is enough water
// to cover an acre of land one foot deep"), na frase, na anterior ou nas duas seguintes
const ACRE_PE = /\bacre[\s-]f(?:ee|oo)t\b/i, ACRE_DEF = /\bcover(?:s|ing)?\s+an\s+acre\b|\bone\s+foot\s+deep\b|\bacre[\s-]foot\s+is\b/i;
// o "the deal" e o "the treaty" apresentados antes de usados (os leitores a frio, Mia, Tunde e Dale)
const USO_DEAL = /\b(?:the|this|that)\s+deal\b/i, INTRO_DEAL = /\b(?:a|an)\s+(?:[\w-]+\s+){0,3}?(?:deal|agreement)\b|\b(?:deal|agreement)\s+(?:that|which)\s+took\s+effect\b/i;
const USO_TRATADO = /\b(?:the|this|that)\s+treaty\b/i;
const INTRO_TRATADO = /\b(?:a|an)\s+(?:(?:19\d\d|[\w-]+)\s+){0,3}?treaty\s+(?:between|signed|from|that|which|with|of\s+19)\b|\b19[5-6]\d\s+treaty\b|\btreaty\s+(?:signed|between)\b|\bColumbia\s+River\s+Treaty\b|\bsigned\s+(?:a|the)\s+treaty\b/i;
// ---- a conta dos números falados (o pedido da Sala; a pauta §7 orça 47 e mira 45, K6): cada número dito em algarismo (com o
// "million"/"billion"/"thousand" que vem junto), e cada número por extenso seguido de medida ("six weeks", "a dozen miles", "ten
// times") ou depois de um quantificador ("more than a dozen"); "one" e o número por extenso sem medida ("the two countries", "the
// three dams") não contam. Uma faixa conta uma vez ("between 450,000 and 650,000", "40 of 89 years", "from 1879 to 1967"), e a data
// também ("September 16, 1964" conta só o ano)
const MAX_NUMEROS = 50;
const MEDIDA = "percent|per\\s+cent|million|billion|thousand|hundred|miles?|mi|kilomet(?:er|re)s?|km|feet|foot|ft|inch(?:es)?|acre[\\s-]f(?:ee|oo)t|acres?|hectares?|cubic|years?|weeks?|months?|days?|hours?|minutes?|seconds?|decades?|centur(?:y|ies)|times|dollars|people";
const NUM_CONTA = new RegExp(String.raw`(?<![\w.,])\$?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?(?:[\s-]+(?:million|billion|thousand))?|(?<![\w-])(?:${NUM_PALAVRAS})(?:[\s-]+(?:and[\s-]+)?(?:a\s+half|one|${NUM_PALAVRAS}))*\b`, "gi");
const DEPOIS_MEDIDA = new RegExp(String.raw`^['’]?[\s-]*(?:%|(?:${MEDIDA})\b)`, "i");
const QUANTIF_ANTES = /\b(?:about|nearly|almost|roughly|around|some|more\s+than|less\s+than|fewer\s+than|over|under|at\s+least|only|just|exactly)\s+(?:a\s+)?$/i;
const DIA_DA_DATA = new RegExp(String.raw`\b(${MESES})\s+\d{1,2}(?:st|nd|rd|th)?,?\s+(?=\d{4}\b)`, "g");
function numerosDe(f) {
  const s = f.replace(DIA_DA_DATA, "$1 ");
  const achados = [];
  for (const m of s.matchAll(NUM_CONTA)) {
    if (!/\d/.test(m[0]) && !DEPOIS_MEDIDA.test(s.slice(m.index + m[0].length)) && !QUANTIF_ANTES.test(s.slice(0, m.index))) continue;
    const ant = achados[achados.length - 1];
    if (ant && /^[\s,]*(?:to|and|of|or|through|-|–|—)\s*$/i.test(s.slice(ant.fim, m.index))) { ant.fim = m.index + m[0].length; ant.texto = s.slice(ant.ini, ant.fim); continue; }
    achados.push({ ini: m.index, fim: m.index + m[0].length, texto: m[0] });
  }
  return achados.map((a) => a.texto);
}
// ---- a inscrição falada (voz §3; cta §1, §5 e §6)
const INSCRICAO = /\bsubscribe\s+to\s+Alpha\s+Point\b/i;
const SUBSCRIB = /\bsubscrib\w*/gi;
const VOLTA = /\bback\s+to\b|^(?:Now|Anyway|Right|Okay|OK),\s/i;
const MARCA_FECHO = /^\s*(?:fecho|conclus|close|closing|ending|end\b|outro)/i;
const VETADAS_INSC = [
  [/\bsmash\w*/i, "smash"], [/\bhit\s+the\s+like\b/i, "hit the like"], [/\blike\s+button\b/i, "like button"],
  [/\b(?:leave|drop|give)\s+(?:(?:it|this|us|this\s+video)\s+)?a\s+like\b/i, "leave a like"], [/\bring\s+the\s+bell\b/i, "ring the bell"],
  [/\bbell\b/i, "bell"], [/\bdon['’]t\s+forget\b|\bdo\s+not\s+forget\b/i, "don't forget"], [/\bmake\s+sure\b/i, "make sure"],
  [/\bplease\b/i, "please"], [/\bcomment\w*/i, "comment"],
  [/\bevery\s+(?:week|day|month|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\b|\bweekly\b|\bdaily\b/i, "every week"],
];
const PLATEIA = /\b(?:most|many|half|some|majority|few|percent)\s+of\s+you\b|%\s+of\s+you\b/i;
// o número-herói da frase de antes (o critério é daqui; voz §3, cta §5): dinheiro, porcentagem, grandeza ou número grande com vírgula
const HEROI = new RegExp(String.raw`\$\s?\d|\d\s*%|${NUMR}[\s-]+(?:percent|per\s+cent|million|billion|thousand|acre[\s-]f(?:ee|oo)t|cubic\s+feet|miles?|times)\b|(?<![\w.,])\d{1,3}(?:,\d{3})+(?![\d,])`, "i");

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
    "roteiros/peru-agua/roteiro-narrador.md", "roteiros/atlantico-fundo/roteiro-narrador.md", "roteiros/big-sur/roteiro-narrador.md",
    "roteiros/praia-do-cassino/roteiro-narrador.md"];
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
// as marcas <!-- … --> antes de cada parágrafo, na mesma leitura de paragrafosDe (que não muda): marcas[P] = os textos dos comentários
// vistos entre o parágrafo P-1 e o P. Servem só à inscrição (a fronteira entre atos e a parte do fecho).
function marcasDe(texto) {
  const marcas = [];
  let pend = [], emComentario = false, aberto = false, nPar = 0, coment = "";
  for (const l of texto.split("\n")) {
    let t = l;
    if (emComentario) {
      if (t.includes("-->")) { emComentario = false; pend.push(`${coment} ${t.slice(0, t.indexOf("-->"))}`.trim()); coment = ""; t = t.slice(t.indexOf("-->") + 3); }
      else { coment += ` ${t}`; continue; }
    }
    for (const m of t.matchAll(/<!--(.*?)-->/g)) pend.push(m[1].trim());
    t = t.replace(/<!--.*?-->/g, "");
    if (t.includes("<!--")) { emComentario = true; coment = t.slice(t.indexOf("<!--") + 4); t = t.slice(0, t.indexOf("<!--")); }
    if (/^\s*#/.test(t) || /^\s*>/.test(t) || !t.trim()) { if (aberto) { nPar++; aberto = false; } continue; }
    if (!aberto) { marcas[nPar] = pend; pend = []; aberto = true; }
  }
  return { marcas, n: nPar + (aberto ? 1 : 0) };
}

const contar = (s) => (s.match(/[A-Za-z0-9][A-Za-z0-9'’.,$%-]*/g) || []).filter((w) => /[A-Za-z0-9]/.test(w)).length;
const frasesDe = (p) => p.match(/[^.?!]+(?:[.?!]+["”’)]*|$)/g)?.map((f) => f.trim()).filter(Boolean) || [];
const frases = paragrafos.flatMap(frasesDe);
const texto = paragrafos.join("\n\n");
const palavras = contar(texto);
const tamanhos = frases.map(contar);
const media = tamanhos.reduce((a, b) => a + b, 0) / Math.max(1, tamanhos.length);

const problemas = [], alertas = [];
if (palavras < MIN_PALAVRAS) problemas.push(`palavras: ${palavras}, abaixo de ${MIN_PALAVRAS} (a faixa do vídeo 7: o pedido da Sala; a pauta §7 orça ~2.555 palavras, 14,3 min a 179)`);
if (palavras > MAX_PALAVRAS) problemas.push(`palavras: ${palavras}, acima de ${MAX_PALAVRAS} (a faixa do vídeo 7: o pedido da Sala; a pauta §7 orça ~2.555 palavras, 14,3 min a 179)`);
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

// ---- o Columbia: o título, a primeira frase, o "não se diz", os alertas, a inscrição, os números e o fecho -------------------------
// as frases destas regras: as das taxas (o ponto do "U.S.", do "a.m." e do decimal não parte a frase), sem as aspas de abertura; e,
// para o que olha aspas, as mesmas frases com as aspas (frasesRaw). parDe[i] e kDe[i]: o parágrafo da frase i e o lugar dela nele
const porPar = paragrafos.map(frasesTaxaDe);
const frasesRaw = porPar.flat();
const frasesC = frasesRaw.map(abertura);
const parDe = [], kDe = [];
porPar.forEach((fs, P) => fs.forEach((_, k) => { parDe.push(P); kDe.push(k); }));
const iAssC = frasesC.findIndex((f) => ASSINATURA.test(f));
// o título aprovado (pauta §2; o Lucas, 09/11/2026): "Why the U.S. Pays Canada to Keep Part of a Lake Empty", pago nas 3 primeiras frases
// (embalagem §2; o gancho A paga nas frases 1 e 2): o pagamento ("pay" e "Canada" na mesma frase) e o "empty" reprovam; quem paga, o
// lago, o "part of" e o valor da miniatura ficam como alerta
const TITULO = '"Why the U.S. Pays Canada to Keep Part of a Lake Empty"';
const tres = frasesC.slice(0, 3), tresC = tres.join(" ");
const PAGA = /\bpa(?:y|ys|id|ying|yment|yments)\b/i;
if (!tres.some((f) => PAGA.test(f) && /\bCanada\b/.test(f))) problemas.push(`título [titulo-pagamento]: nenhuma das 3 primeiras frases diz o pagamento ao Canadá (uma forma de "pay" com "Canada" na mesma frase): o título ${TITULO} se paga ali (embalagem §2; pauta §2 e §8; o gancho A: "the United States pays Canada for that empty space")`);
if (!/\bempt(?:y|ied|ies|ying)\b/i.test(tresC)) problemas.push(`título [titulo-empty]: "empty"/"emptied" não aparece nas 3 primeiras frases: o título ${TITULO} se paga ali (embalagem §2; pauta §2 e §8; o gancho A: "is emptied on purpose", "that empty space")`);
if (!/\bUnited\s+States\b|\bU\.S\.|\bUS\b|\bAmerica\w*/.test(tresC)) alertas.push(`título [titulo-eua]: nenhuma das 3 primeiras frases diz quem paga ("the United States", "U.S."): o título diz "the U.S. Pays" (pauta §2 e §8)`);
if (!/\blakes?\b|\breservoir\b/i.test(tresC)) alertas.push(`título [titulo-lago]: "lake"/"reservoir" não aparece nas 3 primeiras frases: o título diz "Part of a Lake" (pauta §2 e §8; os leitores: "um lago deixado vazio de propósito" é a imagem do T1)`);
if (/\bempt(?:y|ied|ies|ying)\b/i.test(tresC) && !/\b(?:part|portion|some)\s+of\b|\bspace\b|\broom\b/i.test(tresC)) alertas.push(`título [titulo-parte]: "empty" sem "part of", "portion", "some of", "space" ou "room" nas 3 primeiras frases: o "Part of" mantém o título honesto (só parte do lago se esvazia; pauta §5, "Half empty"; Dale: "o 'part of' mostra que alguém olhou de perto")`);
if (!N376.test(tresC)) alertas.push(`título [titulo-valor]: o valor (37.6) não aparece nas 3 primeiras frases: a miniatura "$37.6M A YEAR" se paga na voz aos 6,0 s, na frase 2 do gancho A (pauta §8; os quatro leitores a escolheram)`);
// a primeira frase (voz §1, "Os números da fala"): o fato mais surpreendente sobre o lugar da imagem de abertura (o reservatório de
// Arrow, baixo, pauta §6), com o nome do lugar e um número ou uma imagem
const primeira = frasesC[0] || "";
if (!/\bArrow\b/.test(primeira)) problemas.push(`a primeira frase não diz "Arrow" (o lugar da imagem de abertura, o reservatório de Arrow, baixo; voz §1, "Os números da fala"; pauta §6 e §8): "${primeira.slice(0, 110)}"`);
if (!/\d/.test(primeira) && !RE_NUM_EXTENSO.test(primeira)) alertas.push(`a primeira frase não tem número (algarismo ou por extenso): ela é o fato mais surpreendente sobre o lugar da imagem de abertura, concreto, com o nome do lugar e um número ou uma imagem (voz §1, "Os números da fala"); sem número, confira que a imagem concreta está lá: "${primeira.slice(0, 110)}"`);
// o "não se diz" e os alertas do Columbia, frase a frase (a anterior vale para o que a frase diz por pronome; a posição, para o gancho e
// para a primeira menção)
const prim376 = frasesC.findIndex((f) => N376.test(f));
frasesC.forEach((f, i) => {
  const ant = i > 0 ? frasesC[i - 1] : "";
  const ctx = { i, iAss: iAssC, frases: frasesC, prim376, prox: (k) => frasesC[i + k] || "" };
  for (const r of NAO_SE_DIZ) {
    const v = r.julga(f, ant, ctx);
    if (v === "reprova") problemas.push(`não se diz [${r.id}] (${r.porque}): "${f.slice(0, 110)}"`);
    else if (v === "alerta") alertas.push(`conferir [${r.id}] (${r.alerta || r.porque}): "${f.slice(0, 100)}"`);
  }
  for (const a of ALERTA_COL) if (a.testa(f, ant, ctx)) alertas.push(`conferir [${a.id}] (${a.porque}): "${f.slice(0, 100)}"`);
});
// os dois que se medem por parágrafo (a fala citada atravessa a frase): reprovam dentro de aspas; o "most important" também com o
// Departamento de Estado na frase
paragrafos.forEach((p) => {
  for (const c of trechosCitados(p)) for (const r of NAO_SE_DIZ_PAR) if (r.re.test(c)) problemas.push(`não se diz [${r.id}] (${r.porque}): "${c.slice(0, 110)}"`);
});
frasesC.forEach((f) => { if (/\bmost\s+important\b/i.test(f) && STATE_DEPT.test(f)) problemas.push(`não se diz [mais-importante-aspas] (${NAO_SE_DIZ_PAR[1].porque}): "${f.slice(0, 110)}"`); });
// o acre-pé definido na primeira vez
const iAcre = frasesC.findIndex((f) => ACRE_PE.test(f));
if (iAcre >= 0 && !ACRE_DEF.test([frasesC[iAcre - 1] || "", frasesC[iAcre], frasesC[iAcre + 1] || "", frasesC[iAcre + 2] || ""].join(" "))) alertas.push(`conferir [acre-pe] (todo termo técnico é definido na primeira vez, numa oração: "an acre-foot is enough water to cover an acre of land one foot deep", voz §1; pauta §4.2): "${frasesC[iAcre].slice(0, 100)}"`);
// os 15 %, 39 % e 88 anos, uma vez na voz (no gancho); no ato 1, só na tela (K6; pauta §4.1 e §7; o pedido da Sala)
const vezes = { "15 percent (da bacia)": frasesC.filter((f) => N15PCT.test(f) && /\b(?:basin|Canad\w*)\b/i.test(f)), "39 percent": frasesC.filter((f) => N39PCT.test(f)), "88 years": frasesC.filter((f) => N88.test(f)) };
for (const [o, fs] of Object.entries(vezes)) if (fs.length > 1) alertas.push(`conferir [uma-vez-no-gancho] (os 15 %, 39 % e 88 anos vão uma vez na voz, no gancho; no ato 1, só na tela: K6, pauta §4.1 e §7): "${o}" ${fs.length} vezes: ${fs.map((f) => `"${f.slice(0, 60)}"`).join(", ")}`);
// "the deal" e "the treaty" apresentados antes de usados (os leitores a frio: Mia, Tunde e Dale)
for (const [nome, uso, intro, como] of [["the deal", USO_DEAL, INTRO_DEAL, '"a temporary deal that took effect for the spring floods of 2025"'],
  ["the treaty", USO_TRATADO, INTRO_TRATADO, '"a 1964 treaty between the two countries", "the Columbia River Treaty", "the treaty signed in 1961"']]) {
  const iU = frasesC.findIndex((f) => uso.test(f)), iI = frasesC.findIndex((f) => intro.test(f));
  if (iU >= 0 && (iI < 0 || iU < iI)) alertas.push(`conferir [deal-treaty-apresentado] ("${nome}" usado antes de apresentado: os leitores a frio pediram o tratado e o acordo apresentados antes de usados, por exemplo ${como}; teste-leitores, "O que os quatro pediram"): "${frasesC[iU].slice(0, 100)}"`);
}
// a conta dos números falados (K6: a pauta orça 47 e mira 45; ALERTA acima de 50)
const numerosPorFrase = frasesC.map((f, i) => (i === iAssC ? [] : numerosDe(f)));
const numerosFalados = numerosPorFrase.reduce((a, l) => a + l.length, 0);
const numerosGancho = iAssC >= 0 ? numerosPorFrase.slice(0, iAssC + 1).reduce((a, l) => a + l.length, 0) : null;
if (numerosFalados > MAX_NUMEROS) alertas.push(`conferir [numeros-falados] (${numerosFalados} números na voz, acima de ${MAX_NUMEROS}: a pauta §7 orça 47 e mira 45, K6; a conta é a do portão, e o laudo a traz em "numeros_falados")`);

// ---- a inscrição falada (voz §3; cta §1, §5 e §6; o pedido da Sala) ------------------------------------------------------------------
const mmss = (s) => `${Math.floor(s / 60)}:${(s % 60).toFixed(1).padStart(4, "0")}`;
const { marcas, n: nMarcas } = marcasDe(bruto);
const marcasOk = nMarcas === paragrafos.length;
if (!marcasOk) alertas.push(`as marcas <!-- … --> não se leram (${nMarcas} parágrafos na leitura delas, ${paragrafos.length} no texto falado): a fronteira entre atos e a parte do fecho da inscrição ficaram sem conferir`);
const iInsc = frasesC.map((f, i) => (INSCRICAO.test(f) ? i : -1)).filter((i) => i >= 0);
let inscricao = null;
if (!iInsc.length) problemas.push('inscrição [inscricao-ausente]: nenhuma frase com "subscribe to Alpha Point" (a inscrição é falada do vídeo 6 em diante, uma vez por vídeo: voz §3; cta §1; o Lucas, 09/11/2026, "Uma por vídeo (Recomendado)")');
if (iInsc.length > 1) problemas.push(`inscrição [inscricao-mais-de-uma]: ${iInsc.length} frases com "subscribe to Alpha Point" (é uma vez por vídeo: voz §3; cta §6): ${iInsc.map((i) => `"${frasesC[i].slice(0, 70)}"`).join(", ")}`);
frasesC.forEach((f, i) => {
  const n = (f.match(SUBSCRIB) || []).length;
  if (n > (iInsc.includes(i) ? 1 : 0)) problemas.push(`inscrição [inscricao-outro-subscribe]: "subscrib…" fora da frase de inscrição (a chamada é uma, com "subscribe to Alpha Point": voz §3; cta §6): "${f.slice(0, 100)}"`);
});
if (iInsc.length) {
  const i = iInsc[0], f = frasesC[i], P = parDe[i], k = kDe[i], nP = porPar[P].length;
  const pals = frasesC.map(contar);
  const antes = pals.slice(0, i).reduce((a, b) => a + b, 0), total = pals.reduce((a, b) => a + b, 0);
  const inicio = antes / WPM * 60 + PAUSA_PAR_S * P;
  const duracao = total / WPM * 60 + PAUSA_PAR_S * Math.max(0, paragrafos.length - 1) + CAUDA_S;
  const pct = inicio / duracao * 100;
  const volta = (g) => !!g && contar(g) <= 10 && VOLTA.test(g);
  const bordaDepois = k === nP - 1 || (k === nP - 2 && volta(porPar[P][nP - 1]));
  const bordaAntes = k === 0;
  const atoDepois = bordaDepois && P + 1 < paragrafos.length && !!marcas[P + 1]?.length;
  const atoAntes = bordaAntes && P > 0 && !!marcas[P]?.length;
  let pFecho = -1;
  if (marcasOk) marcas.forEach((ms, j) => { if (ms?.some((m) => MARCA_FECHO.test(m))) pFecho = j; });
  const noFecho = pFecho >= 0 ? P >= pFecho : i >= frasesC.length - N_FECHO;
  const palsInsc = contar(f);
  inscricao = {
    frase: f, paragrafo: P + 1, frase_no_paragrafo: k + 1, frases_no_paragrafo: nP, palavras: palsInsc,
    palavras_antes: antes, palavras_total: total, inicio_s: +inicio.toFixed(1), inicio: mmss(inicio),
    duracao_video_s: +duracao.toFixed(1), duracao_video: mmss(duracao), percentual: +pct.toFixed(1),
    janela: { de_s: +(duracao * INSC_DE / 100).toFixed(1), ate_s: +(duracao * INSC_ATE / 100).toFixed(1), de: mmss(duracao * INSC_DE / 100), ate: mmss(duracao * INSC_ATE / 100) },
    fronteira_de_paragrafo: bordaDepois ? "depois" : bordaAntes ? "antes" : null, fronteira_de_ato: atoDepois || atoAntes,
    conta: `as ${antes} palavras antes ÷ ${WPM} × 60 + ${PAUSA_PAR_S} s × ${P} trocas de parágrafo = ${inicio.toFixed(1)} s, sobre a duração estimada com a cauda (${total} palavras ÷ ${WPM} × 60 + ${PAUSA_PAR_S} s × ${Math.max(0, paragrafos.length - 1)} + ${CAUDA_S} s = ${duracao.toFixed(1)} s)`,
  };
  const onde = `começa em ${mmss(inicio)} (${pct.toFixed(1)} % do vídeo de ${mmss(duracao)}, com a cauda de ${CAUDA_S} s; a janela é de ${mmss(duracao * INSC_DE / 100)} a ${mmss(duracao * INSC_ATE / 100)})`;
  if (pct < INSC_DE || pct > INSC_ATE) problemas.push(`inscrição [inscricao-posicao]: ${onde}: fora de ${INSC_DE} % a ${INSC_ATE} % (cta §6; voz §3): "${f.slice(0, 90)}"`);
  else if (pct < INSC_MARGEM_DE || pct > INSC_MARGEM_ATE) alertas.push(`conferir [inscricao-margem] (a inscrição ${onde}: dentro da janela, mas a menos de 2 pontos da borda; a narração real mexe 1 a 2 pontos, e depois dela a frase não muda de lugar, cta §5): "${f.slice(0, 90)}"`);
  if (inicio < 60) problemas.push(`inscrição [inscricao-primeiro-minuto]: começa em ${mmss(inicio)}, no 1º minuto (cta §6; voz §3): "${f.slice(0, 90)}"`);
  if (iAssC >= 0 && i <= iAssC) problemas.push(`inscrição [inscricao-gancho]: no gancho, antes ou na assinatura "You're at Alpha Point…" (nunca no gancho: voz §3): "${f.slice(0, 90)}"`);
  if (noFecho) problemas.push(`inscrição [inscricao-fecho]: na parte do fecho (${pFecho >= 0 ? `depois da marca "${marcas[pFecho].find((m) => MARCA_FECHO.test(m)).slice(0, 40)}"` : `nas ${N_FECHO} últimas frases`}; nunca na conclusão: voz §3): "${f.slice(0, 90)}"`);
  if (!bordaDepois && !bordaAntes) problemas.push(`inscrição [inscricao-paragrafo]: a frase ${k + 1} de ${nP} do parágrafo ${P + 1}, fora de uma fronteira de parágrafo (a última; a penúltima com a volta ao assunto por último; ou a primeira: uma pausa natural, voz §3; cta §5): "${f.slice(0, 90)}"`);
  else if (marcasOk && !atoDepois && !atoAntes) alertas.push(`conferir [inscricao-ato] (a inscrição está na fronteira ${bordaDepois ? `entre os parágrafos ${P + 1} e ${P + 2}` : `entre os parágrafos ${P} e ${P + 1}`}, sem marca <!-- … --> de ato ali: a pausa natural é entre dois atos, e a pauta §7 a põe entre o ato 2 e o ato 3; voz §3): "${f.slice(0, 90)}"`);
  const vet = VETADAS_INSC.filter(([re]) => re.test(f)).map(([, o]) => o);
  if (vet.length) problemas.push(`inscrição [inscricao-vetada]: ${vet.map((o) => `"${o}"`).join(", ")} (voz §3, "Nunca"): "${f.slice(0, 90)}"`);
  if (/\d/.test(f) || RE_NUM_EXTENSO.test(f)) problemas.push(`inscrição [inscricao-numero]: número na frase de inscrição (sem número de plateia, de frequência nem outro: voz §3): "${f.slice(0, 90)}"`);
  if (PLATEIA.test(f)) problemas.push(`inscrição [inscricao-plateia]: número ou quantidade sobre a plateia sem fonte ("most of you aren't subscribed"; voz §3: só com o número do YouTube Studio, e a decisão é do Lucas): "${f.slice(0, 90)}"`);
  if (palsInsc > INSC_MAX_PALAVRAS) problemas.push(`inscrição [inscricao-longa]: ${palsInsc} palavras (teto ${INSC_MAX_PALAVRAS}; a frase é de até ~16, uns 5 s, perto dos 4,5 s da faixa: voz §3): "${f.slice(0, 90)}"`);
  else if (palsInsc > INSC_ALERTA_PALAVRAS) alertas.push(`conferir [inscricao-16] (${palsInsc} palavras: a frase é de até ~16, uns 5 s a 179/min, perto dos 4,5 s da faixa; voz §3): "${f.slice(0, 90)}"`);
  if (!/\bif\b/i.test(f)) alertas.push(`conferir [inscricao-if] (a frase vai na condicional, "If…": voz §3; o exemplo do Lucas, "If you're enjoying the map so far, subscribe to Alpha Point."): "${f.slice(0, 90)}"`);
  if (!/\byou(?:r|rs|['’](?:re|ve|d|ll))?\b/i.test(f)) alertas.push(`conferir [inscricao-you] (a frase vai em segunda pessoa: voz §3): "${f.slice(0, 90)}"`);
  if (i > 0) {
    const antR = frasesRaw[i - 1];
    if (/["“”]/.test(antR)) alertas.push(`conferir [inscricao-citacao] (a frase logo antes da inscrição tem aspas: nunca colada a uma fala citada nem a um documento lido, voz §3; cta §5): "${antR.slice(0, 100)}"`);
    if (HEROI.test(antR)) alertas.push(`conferir [inscricao-numero-heroi] (a frase logo antes da inscrição tem um número-herói, dinheiro, porcentagem, grandeza ou número grande: nunca colada a um número-herói, voz §3; cta §5): "${antR.slice(0, 100)}"`);
  }
}

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
  const LINHA_TROCAS = /sha256 do texto falado[ \t]*`?([0-9a-fA-F]{12,64})\b/;
  const LINHA_OUT = /^[ \t]*revisao_do_roteiro:[ \t]*`?([0-9a-fA-F]{12,64})\b/m;
  const FORA = /-(?:r\d+[a-z]?|antigo)\.laudo\.md$/;
  const alvos = [];
  const qc = join(PASTA, "qc-roteiro");
  if (existsSync(qc)) for (const n of readdirSync(qc).sort()) if (n.endsWith(".laudo.md") && !FORA.test(n)) alvos.push([join(qc, n), LINHA_LAUDO, "Revisão julgada"]);
  for (const n of ["roteiro-editor.md", "pronuncia.md", "roteiro-narrador-pt-BR.md", join("voz", "texto-para-voz.md")]) if (existsSync(join(PASTA, n))) alvos.push([join(PASTA, n), LINHA_DERIVADO, "Revisão do roteiro"]);
  if (existsSync(join(PASTA, "voz", "trocas.md"))) alvos.push([join(PASTA, "voz", "trocas.md"), LINHA_TROCAS, "sha256 do texto falado"]);
  // a cópia para a voz em <raiz>/out/<proj>/roteiro.md, quando o roteiro mora em <raiz>/roteiros/<proj>/
  const pastaAbs = resolve(PASTA);
  if (basename(dirname(pastaAbs)) === "roteiros") {
    const outR = join(dirname(dirname(PASTA)), "out", basename(pastaAbs), "roteiro.md");
    if (existsSync(outR)) alvos.push([outR, LINHA_OUT, "revisao_do_roteiro"]);
  }
  derivados = []; derivadosVelhos = [];
  for (const [arq, re, rotulo] of alvos) {
    const m = lerTexto(arq).match(re), cita = m ? m[1].slice(0, 12).toLowerCase() : null;
    const a = arq.replaceAll("\\", "/");
    derivados.push({ arquivo: a, cita, ok: cita === sha12 });
    if (cita !== sha12) {
      derivadosVelhos.push({ arquivo: a, cita });
      problemas.push(cita ? `derivado com sha velho: ${a} cita ${cita}, e o texto falado de agora é ${sha12}`
        : `derivado sem o carimbo: ${a} não tem a linha "${rotulo}: ${sha12}"`);
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
  inscricao,
  numeros_falados: { total: numerosFalados, ate_assinatura: numerosGancho, teto_do_alerta: MAX_NUMEROS, ...(COM_ONDE ? { onde: numerosPorFrase.flatMap((l, i) => l.map((n) => ({ numero: n, frase: frasesC[i].slice(0, 80) }))) } : {}) },
  taxas, taxas_palavras_contadas: medida.palavras,
  autoplagio,
  ...(COM_DERIVADOS ? { sha12, derivados, derivados_velhos: derivadosVelhos } : {}),
};
console.log(JSON.stringify(laudo, null, 1));
process.exit(problemas.length ? 1 : 0);
