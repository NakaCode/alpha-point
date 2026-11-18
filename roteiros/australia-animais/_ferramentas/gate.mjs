// gate.mjs — o portão determinístico do roteiro do vídeo 8 (por que a Austrália tem tantos animais perigosos, no ângulo do paradoxo: muito
// veneno, poucas mortes; slug australia-animais), antes da bancada e depois de cada troca. Mede o texto de
// roteiros/australia-animais/roteiro-narrador.md contra as regras que se contam (marca/voz.md §1, §2 e §3, marca/cta.md §1, §5 e §6,
// marca/embalagem.md §2, a pauta v2 pautas/2026-11-18-video-8-australia-pauta.md, aprovada pelo Lucas em 18/11/2026, ~14:1x, "Pode seguir
// (Recomendado)", o registro pautas/2026-11-18-video-8-australia.md, com as leituras da Sala depois da pauta, o teste dos leitores a frio,
// out/_pautas/video-8-australia/teste-leitores.md, e as falas do Lucas em roteiros/australia-animais/decisoes-lucas.md). Não julga qualidade:
// isso é da bancada. O ferramentas/portao-fatos.mjs e o ferramentas/aplicar-lista.mjs o rodam para cruzar o sha do texto falado: a leitura
// (paragrafosDe) e a forma do sha são as do molde, sem mudança.
//
// Deriva do do vídeo 7 (roteiros/rio-columbia/_ferramentas/gate.mjs), em 18/11/2026, pelo pedido da Sala de controle
// (roteiros/australia-animais/_trabalho/pedido-gate.md). As notas da derivação: roteiros/australia-animais/_trabalho/gate-notas.md.
//   SAEM as regras só do Columbia: o título dele ([titulo-pagamento], [titulo-empty]; os alertas [titulo-eua], [titulo-lago], [titulo-parte] e
//   [titulo-valor]); a 1ª frase com "Arrow"; o NAO_SE_DIZ dele inteiro (61 ids, do [tratado-cancelado] ao [fontes-de-fundo]), os dois por
//   parágrafo ([bargaining-chip] e [mais-importante-aspas]) e o ALERTA_COL inteiro (18 ids, do [picos-sem-2009] ao [every-sem-data]), com o
//   [acre-pe], o [uma-vez-no-gancho] e o [deal-treaty-apresentado], e as constantes que só eles usavam (N600, N450, N650, N376, N644, os N..PCT,
//   N88, STATE_DEPT, CANADA, CONTROLA_V, CANCELOU, EXPIROU, GATILHO, SINIXT, LAGO_TODO, ACRE_PE, USO_DEAL, INTRO_TRATADO…); e a lista dele do que
//   nenhum padrão pega. Das palavras de ALERTA da voz, nenhuma era só do Columbia: a lista fica inteira.
//   ENTRAM (o como de cada uma está junto da regra, abaixo):
//   - OS TRÊS TÍTULOS do Test & Compare da publicação (o Lucas, 18/11/2026, ~14:1x, "O 3, o 2 e o meu (Recomendado)"; embalagem §2: o núcleo
//     se paga nas 3 primeiras frases; aqui, três títulos, e o gancho paga os três):
//     · T3 "Australia's Deadliest Snake Isn't Its Most Venomous One", nas 3 primeiras frases (o mais clicado no teste, 6,75; o par mais forte
//       com a miniatura "NOT THE KILLER", 8,25): REPROVA [titulo-3-veneno] (nenhuma das 3 com o superlativo do veneno) e [titulo-3-mata]
//       (nenhuma das 3 diz que ela não é a cobra que mata). E REPROVA [ressalva-camundongo]: o superlativo do veneno, em qualquer frase do
//       gancho, sem "mice", "mouse", "lab" ou "laboratory" na mesma frase ou na seguinte;
//     · T2 "Why So Few People Die From Australia's Deadly Animals", no gancho: REPROVA [titulo-2-registro] (sem os 85 com "people",
//       "deaths", "died" ou "killed") e [titulo-2-estrada] (sem "road"/"roads" e "month" na mesma frase: a miniatura "10 YEARS OF VENOM <
//       1 MONTH");
//     · T1, o do Lucas, "Why Does Australia Have So Many Dangerous Animals?", no gancho: REPROVA [titulo-1] (sem a contagem das cobras
//       venenosas: um número ou uma fração com "snake(s)"/"species"/"kinds" e "venomous"/"elapid(s)") e ALERTA [titulo-1-palavra] (sem
//       "dangerous" nem "deadly" no gancho).
//   - A PRIMEIRA FRASE (voz §1, "Os números da fala"; a imagem de abertura é o aéreo das planícies do Channel Country, pauta §6): REPROVA sem
//     "venom"/"venomous" (o fio do vídeo: o veneno contra o registro) e sem "Australia", "Australian" ou "outback"; ALERTA sem número (o do
//     molde: algarismo, ou por extenso de "two" a "billion"; "one of" não conta).
//   - O "NÃO SE DIZ" DA AUSTRÁLIA (NAO_SE_DIZ, abaixo): a pauta §5 inteira, o que a coluna "Na fala" do §4 põe "fora" ou só na "tela", a lista
//     "O que fica fora da fala" do §7 onde um padrão a pega sem barrar a forma segura, o registro e o que a Sala decidiu depois da pauta (o
//     "15 percent", o Australian Museum, a taipan "never killed", a Índia com "times" ou "per capita", o cavalo e o canguru com número). Cada um
//     REPROVA, com o porquê e a fonte na mensagem; onde a pauta dá a forma segura, ela passa (a prova confere cada uma). Um se mede por
//     parágrafo (a fala citada atravessa a frase): [aspas-da-jornalista].
//   - OS ALERTA DA AUSTRÁLIA (ALERTA_AU, abaixo, frase a frase; e os que contam o texto inteiro): os do pedido da Sala ([live-science],
//     [pergunta-dupla], [oito-que-faltam], [amostra-pequena], [numeros-falados], [uma-vez] e [hipotese-como-causa]) e os que saem da mesma
//     pauta, do registro e do teste dos leitores, que a Sala pode tirar ([duas-em-tres], [contagem-dono], [contas-iguais], [veneno-terra],
//     [fama-dono], [arbuckle-quem], [marrom-dono], [parque-dono], [colisao-20], [primeiro-soro], [internacoes-aihw], [funnel-found] e
//     [termo-definido]).
//   - A FAIXA de 2.500 a 2.800 palavras faladas (o pedido da Sala; a pauta §7 orça ~2.611, 14,6 min a 179; os consertos dos leitores acrescentam
//     conteúdo; o cético da v1: "16 min, não", 2.864). A do Columbia era de 2.450 a 2.700. O ritmo de conta (WPM) continua 179.
//   - A CONTA DOS NÚMEROS FALADOS (a do Columbia, com três ajustes para este vídeo, ditos junto da numerosDe): a razão "one in three million"
//     ("1 in 3 million", "one-in-five") conta uma vez; o número por extenso conta também antes de "of them/those/these" ("Seventeen of
//     them", "Ten of those people") e das medidas do vídeo ("species", "kinds", "snakes", "deaths", "cases", "bites", "Australians",
//     "spiders", "milkings"); e a palavra de escala sozinha depois de "few", "several" ou "many" ("the last few million years") não conta.
//   - O roteiro do vídeo 7 (roteiros/rio-columbia/roteiro-narrador.md) entra no autoplágio, ao lado dos sete de antes.
//   - O ACRÉSCIMO DA SALA (18/11/2026, ~16:3x), com o fatos-c, a medida do Censo e o NCIS lidos:
//     · a pergunta do Lucas atribuída a outros ("Every visitor asks…", "people ask", "the question everyone asks", "you've probably heard",
//       "people wonder", "it's the question…") passa no [premissa-tantos], com o ALERTA [pergunta-atribuida], e paga o [titulo-1] junto da
//       contagem das cobras; dita pelo narrador como pressuposto, continua reprovando;
//     · o Censo: o [taipan-vazio] fechado (~1.000 pessoas; "empty", "no one/nobody lives", "uninhabited" reprovam; "nearly empty" e "almost
//       no one" só com o número; outro número de gente, não), e os novos [censo-ano], [censo-razao], [censo-area-taipan] e [marrom-ausente]
//       (REPROVA), [censo-preciso], [censo-causa] e [marrom-genero] (ALERTA);
//     · o fatos-c: [redback-ano] (o 1955), [soro-a-razao], [anzcor-16] e [carrapato-x25] (REPROVA), [struan] e [abelha-73] (ALERTA); o
//       [abelha-europeia] e o [india-razao] fechados na forma do fatos-c; o 1956 do redback sai do [na-tela-soros] e entra no
//       [aranhas-desde] com "confirmed";
//     · o NCIS: o resumo da página passa sem número; o NCIS com o cavalo, o canguru ou um número continua no [cavalo-canguru].
//   AS FRASES DAS REGRAS DA AUSTRÁLIA são as das taxas (frasesTaxaDe: o ponto do "U.S.", do "a.m." e do decimal não parte a frase), sem as
//   aspas de abertura, como as do Columbia. As regras herdadas (a média, a maior frase, as VETADAS, o laço do ALERTA, as datas, o gancho)
//   continuam com as frases de antes.
//   FICA todo o resto do molde, sem mudança: o que é texto falado, o sha, o --onde, o --derivados (com os derivados do vídeo 7), as VETADAS da
//   voz, as palavras de ALERTA (o universal "everyone", "nobody", "never", "first", "last" e "always"; "mystery" e "secret"; o presente;
//   "here" e "this line"), as frases que abrem com data, a assinatura uma vez com até 170 palavras, o "But" até a palavra 50 (o "Yet" não
//   conta), a pergunta antes da assinatura, o FECHO (a pergunta do gancho repetida no fim e o fecho em lista, em alerta), a média de no máximo
//   18 palavras por frase e nenhuma acima de 34, as taxas e os TETOS, o autoplágio e a sua exceção da pergunta de comentário, a inscrição
//   falada do vídeo 7 inteira (os mesmos ids, a conta do tempo com a cauda de 20 s, a fronteira de parágrafo, a de ato, o alerta abaixo de
//   37 % e acima de 58 %; só o texto do [inscricao-ato] diz agora onde a pauta deste vídeo a põe) e o ritmo de conta de 179 palavras/min.
//
// PARA ACRESCENTAR UM ID AO "NÃO SE DIZ" OU AOS ALERTAS (o primeiro acréscimo, o do fatos-c e da medida do Censo, entrou em 18/11/2026):
//   - no NAO_SE_DIZ, um objeto {id, porque, julga(f, ant, ctx)} que devolve "reprova", "alerta" (com o texto em "alerta") ou null; no ALERTA_AU,
//     um objeto {id, porque, testa(f, ant, ctx)} que devolve true ou false. f é a frase, ant a anterior, e ctx = {i, iAss, iGancho, noGancho,
//     frases, prox(k)} (prox(k) é a frase k adiante, ou atrás com k negativo, "" fora do texto). O porquê diz a fonte e a forma que passa;
//   - um id que só muda de reprovar para passar (a Sala liberou a frase) se tira da lista, ou se estreita o padrão, e a prova troca o caso de
//     "reprova" por "passa";
//   - em roteiros/australia-animais/_ferramentas/gate-provar.mjs, um reprova(id, frase) e um passa(id, frase segura) (ou alerta(id, frase)),
//     e a frase segura nova entra também na lista SEGURAS; rode a prova até sair 0, e o portão nos roteiros dos vídeos de antes (o padrão
//     novo não pode pegar nenhum por engano). As notas dizem o mesmo, com o que ainda espera leitura (o PDF do NCIS, o AIHW, o AVRU).
//
// O QUE NENHUM PADRÃO PEGA, OU SÓ PEGA EM PARTE (tarefa do verificador de fatos, por cobertura, frase a frase; as notas,
// roteiros/australia-animais/_trabalho/gate-notas.md, "Os limites", dizem o mesmo com exemplos):
//   - a premissa dita com outras palavras ("no place on Earth packs more venom", "the most dangerous country for animals"), e a fama
//     afirmada sem a palavra "overstated" ou "myth";
//   - a cobra que mata por pronome longe do nome, e o "deadliest" dado à taipan numa frase que não diz "taipan" nem o superlativo;
//   - o endereço com outras palavras: o vazio do Channel Country ("barely a town for hundreds of miles") e a marrom "in towns" ou "next door";
//   - a hipótese dita como fato sem "because" ("the reputation grew out of good hospitals"; "its venom is a defense against lizards");
//   - os números certos ditos com outro dono, ou com outro período (os 85 de 2016–2025 como "a year"; os 35 como "since 1981");
//   - os 8 que faltam ditos fora do parágrafo seguinte, ou nomeados com outras palavras ("ticks and ants" pega; "a few other creatures" não);
//   - a Índia contada por outra porta ("a country of a billion people loses…"), e o que mudar depois de 18/11/2026 nos voláteis (o parque, o
//     ABS de 2025, o TGA), que se relê antes da gravação;
//   - a moldura da pergunta atribuída: se quem pergunta existe, e se o narrador não a assume logo depois com outras palavras;
//   - do Censo: o vazio com outras palavras ("barely a town", "a handful of ranches"), a densidade como causa sem "because" nem "so", "the three
//     states where brown snakes live" (como se fossem os únicos), a Grande Sydney como a área da funnel-web, Moomba e Betoota como vilas da conta;
//   - do fatos-c: o "35, not 350" como contrafactual com outras palavras, a bandagem "proved in people" ou que "neutralizes", e "most people
//     bitten get antivenom" (os dois números do governo não se conciliam);
//   - a frase-chave do bloco ao lado da inscrição, e se a cena por baixo dela está calma (cta §5): é do regente e do qc-visual.
//
//   node roteiros/australia-animais/_ferramentas/gate.mjs [arquivo] [--derivados] [--onde]      (cwd = raiz do canal)
//   saída: o laudo em JSON no stdout; exit 0 = passa, 1 = reprovado, 2 = não rodou (arquivo ausente, opção desconhecida)
//   A prova: node roteiros/australia-animais/_ferramentas/gate-provar.mjs (os casos em out/_tmp/gate-australia-animais/, fora do git).
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
//     roteiros/zona-do-canal/, roteiros/peru-agua/, roteiros/atlantico-fundo/, roteiros/big-sur/, roteiros/praia-do-cassino/ e
//     roteiros/rio-columbia/, o roteiro-narrador.md de cada um; a lista ANTERIORES, abaixo)
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
// derivados moram na pasta do roteiro medido (no padrão, roteiros/australia-animais/), e cada um traz, numa linha só dela
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
const ARQ = ARGS.find((a) => !a.startsWith("--")) || "roteiros/australia-animais/roteiro-narrador.md";
if (!existsSync(ARQ)) { console.error(`não encontrado: ${ARQ}`); process.exit(2); }
const lerTexto = (arq) => readFileSync(arq, "utf8").replace(/^﻿/, "").replace(/\r\n?/g, "\n");
const bruto = lerTexto(ARQ);

// o ritmo da voz medido no Big Sur: a cópia para a voz (roteiros/big-sur/voz/texto-para-voz.md), 2.300 palavras por este portão, em
// 767,6 s de fala (out/big-sur/_tmp/regente/v2_ritmo.out.txt): 179,8/min. O Lucas o escolheu às cegas em 03/11/2026 ("Amostra 2").
const WPM = 179;
// a faixa do vídeo 8 (o pedido da Sala; a pauta §7: ~2.611 palavras, 14,6 min a 179; os consertos dos leitores acrescentam conteúdo de
// verdade; o cético da v1: "16 min, não", 2.864). 2.500 palavras são 14,0 min a 179; 2.800, 15,6
const MIN_PALAVRAS = 2500, MAX_PALAVRAS = 2800;
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

// ---- o "não se diz" da Austrália (pautas/2026-11-18-video-8-australia-pauta.md §5 inteiro, a coluna "Na fala" do §4, a lista "O que fica
// fora da fala" do §7, o registro pautas/2026-11-18-video-8-australia.md e o que a Sala decidiu depois da pauta): reprovam. Cada um tem o id
// (entre colchetes na mensagem), o porquê com a fonte, e julga(frase, a anterior, ctx) → "reprova" | "alerta" | null, na forma do molde.
// ctx = {i, iAss, iGancho, noGancho, frases, prox(k)}: prox(k) é a frase k adiante (k negativo volta; "" fora do texto).
// Para acrescentar um id (o acréscimo da Sala depois do fatos-c.md e da medida do Censo), ver o topo do arquivo.
const NEG_LARGA = /(?:n['’]t|\bnot|\bnever|\bno|\bneither|\bnor|\bwithout|\bnobody|\bnone|\bnothing)\b[^.?!]{0,40}$/i;
// algum achado de re na frase sem negação nas 40 letras antes
const semNeg = (f, re, neg = NEGA_ANTES) => {
  const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : `${re.flags}g`);
  for (const m of f.matchAll(g)) if (!neg.test(f.slice(0, m.index))) return true;
  return false;
};
const NEG_INTERNA = /n['’]t\b|\bnot\b|\bnever\b|\bno\b/i;
const PCT = String.raw`\s*(?:%|percent\b|per\s+cent\b)`;
// os bichos e os lugares
const COBRA = /\bsnakes?\b|\bsnakebites?\b|\belapids?\b|\bserpents?\b/i;
const COBRA_CTX = /\bsnakes?\b|\bserpents?\b|\belapids?\b|\bvipers?\b|\bvenomous\b|\bspecies\b|\bkinds\b/i;
const TAIPAN = /\btaipans?\b/i;
const MARROM = /\bbrown\s+snakes?\b|\bbrowns\b|\b(?:eastern|western)\s+browns?\b|\bPseudonaja\b/i;
const FUNIL = /\bfunnel[\s-]webs?\b/i, ARANHA = /\bspiders?\b/i, REDBACK = /\bredbacks?\b/i;
const AGUA_VIVA = /\bjellyfish\b|\bbox\s+jell\w*|\bstinger\b/i;
const ABELHA = /\b(?:honey\s*)?bees?\b|\bwasps?\b|\bhoneybees?\b/i;
const EUA = /\bAmerica\b|\bAmericans?\b|\bUnited\s+States\b|\bU\.S\.|\bUS\b/;
const INDIA = /\bIndia\w*/;
// o superlativo do veneno (o título 3, "Most Venomous"): "most potent venom", "most venomous", "most toxic", "deadliest venom", "the venom is
// the most potent"
const VENENO_SUPER = /\bmost\s+(?:potent|toxic|lethal|powerful|deadly)\s+(?:[\w-]+\s+)?venoms?\b|\bmost\s+venomous\b|\bmost\s+toxic\b|\b(?:deadliest|strongest|most\s+potent)\s+(?:[\w-]+\s+)?venoms?\b|\bvenoms?\s+(?:is|was|are|were)\s+(?:the\s+)?(?:most\s+(?:potent|toxic|lethal|powerful)|strongest|deadliest)\b/i;
const CAMUNDONGO = /\bmice\b|\bmouse\b|\blab\b|\blaboratory\b/i;
const LUGAR_TAIPAN = /\bChannel\s+Country\b|\bDiamantina\b|\bCooper\b|\bfloodplains?\b/i;
// a frase fala da taipan (ou da cobra do topo do teste, que o gancho diz sem o nome), nela ou na anterior
const cobraTopo = (f, ant) => [f, ant].some((s) => TAIPAN.test(s) || VENENO_SUPER.test(s));
const lugarTaipan = (f, ant) => cobraTopo(f, ant) || LUGAR_TAIPAN.test(f) || LUGAR_TAIPAN.test(ant);
// quem diz (a atribuição tira o juízo da boca do narrador)
const ATRIB = /\b(?:says?|said|according|calls?|called|calling|describ\w*|argu\w*|insist\w*|told|notes?|noted|points?\s+out|wonder\w*|in\s+(?:his|her|their|its)\s+words)\b/i;
const REPUTACAO = /\b(?:reputation|image|fame|famous|known\s+for|is\s+said|are\s+said|stereotype|clich[eé]s?|memes?|jokes?)\b/i;
// os números de que as regras falam
const N15PCT = new RegExp(String.raw`(?<![\w.,])(?:15|fifteen)${PCT}`, "i");
const UM_EM_CINCO = new RegExp(String.raw`\bone[\s-]+in[\s-]+(?:every\s+)?five\b|\bone[\s-]fifth\b|(?<![\w.,])1\s+in\s+5\b|(?<![\w.,])(?:19|20|nineteen|twenty)(?:\.\d+)?${PCT}`, "i");
const DUAS_EM_TRES = /\btwo[\s-]+(?:in|out\s+of)[\s-]+(?:every\s+)?three\b|\btwo[\s-]thirds\b/i;
const N85 = /(?<![\w.,])(?:85|eighty[\s-]five)(?![\d.,]\d)(?!\s*(?:million|thousand|billion|percent|%|to\s+\d|-\d|–\d))\b/i;
const UM_EM_3M = /\b(?:one|1)[\s-]+in[\s-]+(?:about\s+)?(?:three|3)[\s-]+million\b/i;
const N35 = /(?<![\w.,])(?:35|thirty[\s-]five)(?![\d.,]\d)\b(?!\s+million)/i, N42 = /(?<![\w.,])(?:42|forty[\s-]two)(?![\d.,]\d)\b(?!\s+million)/i;
const N23 = /(?<![\w.,])(?:23|twenty[\s-]three)\b(?!\s+million)/i, N13 = /(?<![\w.,])(?:13|thirteen)\b(?!\s+(?:million|years))/i;
// a contagem das cobras da Austrália: a da Live Science (145 de 220) ou a da Sala (150 de 229), ou "two in three"
const CONTA_AU = /(?<![\w.,])(?:145|220|150|229)\b/;
const contaAU = (f) => (CONTA_AU.test(f) && /\b(?:snakes?|species|kinds|venomous|elapids?)\b/i.test(f) && !/\bmillion\b|\bmilkings?\b/i.test(f)) || (DUAS_EM_TRES.test(f) && COBRA.test(f));
const fracaoMundo = (f, ant) => (N15PCT.test(f) || UM_EM_CINCO.test(f)) && COBRA_CTX.test(`${ant} ${f}`);
const DONO_CONTA = /\bLive\s+Science\b|\bbiologist\b|\bLee\b|\bReptile\s+Database\b|\bdatabase\b|\bcatalog\w*|\bby\s+(?:the\s+|our\s+|one\s+)?count\b|\bcounted\b|\baccording\b|\btold\b|\bsays?\b|\bsaid\b/i;
// o título 3 pago: a cobra do topo não é a que mata ("it isn't even the snake that kills the most Australians"; "the snake that actually
// kills Australians lives somewhere else"; "another snake does the killing"). Não pagam: "rarely kills" (o [taipan-raramente-mata]) e "never
// killed" (o [taipan-nunca-matou]): o "never" não entra na negação daqui
const NEG_COPULA = String.raw`(?:isn['’]t|is\s+not|wasn['’]t|was\s+not|aren['’]t|are\s+not|['’]s\s+not|not\s+even)`;
const MATA_T3 = String.raw`(?:kill\w*|killer|deadliest|deadly\s+one|most\s+deadly)`;
const mataNegado = (f) => new RegExp(String.raw`\b${NEG_COPULA}\b[^.?!]{0,60}?\b${MATA_T3}`, "i").test(f)
  || (/\b(?:another|a\s+different|some\s+other|a\s+second)\s+(?:[\w-]+\s+)?(?:snake|one|species)\b|\b(?:somewhere|someone|something)\s+else\b|\belsewhere\b/i.test(f) && new RegExp(String.raw`\b${MATA_T3}`, "i").test(f))
  || /\b(?:doesn['’]t|does\s+not)\s+(?:even\s+)?kill\s+(?:the\s+)?most\b/i.test(f);
// a contagem do título 1: um número ou uma fração com "snake(s)"/"species"/"kinds" e "venomous"/"elapid(s)", da Austrália (a fração só do
// mundo não paga)
const FRACAO_T1 = /\d|\b(?:two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|dozen)\b|\bhalf\b|\bthirds?\b|\bquarters?\b|\bfifths?\b|\bpercent\b|%/i;
const contagemT1 = (f) => FRACAO_T1.test(f) && /\bsnakes?\b|\bspecies\b|\bkinds\b/i.test(f) && /\bvenomous\b|\belapids?\b/i.test(f)
  && (/\bAustralia\w*|\bhere\b|\bthis\s+continent\b|\bthe\s+(?:country|continent)\b/i.test(f) || !/\bworld\w*|\bglobal\w*|\bon\s+Earth\b|\belsewhere\b/i.test(f));
// as formas de cada regra
const MAIS_QUE_TODOS = /\bmore\s+(?:venomous|deadly|dangerous|poisonous|lethal|killer)\s+(?:animals|creatures|critters|species|wildlife)\s+than\s+(?:any|anywhere|every|the\s+rest)\b|\bthe\s+most\s+(?:venomous|deadly|dangerous|poisonous)\s+(?:animals|creatures|wildlife)\s+(?:on\s+Earth|in\s+the\s+world|of\s+any\s+(?:country|continent|place))\b/i;
const CASA_DOS_PIORES = /\b(?:home\s+to|has|have|full\s+of)\s+(?:(?:many|most|some)\s+of\s+)?the\s+(?:world['’]s|planet['’]s|Earth['’]s)\s+(?:most\s+(?:venomous|deadly|dangerous|poisonous)|deadliest)\s+(?:animals|creatures|wildlife|species)\b/i;
const TANTOS_BICHOS = /\bso\s+many\s+(?:venomous|deadly|dangerous|poisonous|lethal|killer)\s+(?:animals|creatures|critters|species|things|wildlife)\b/i;
const NUNCA_MATOU = /\bnever\s+(?:\w+\s+)?(?:killed|kills|caused\s+a\s+death)\b|\bha(?:s|ve)(?:n['’]t|\s+not)\s+(?:\w+\s+)?killed\b|\bno\s+(?:recorded|known|confirmed|documented|reported|human)\s+(?:human\s+)?(?:deaths?|fatalit(?:y|ies)|kills?)\b|\bnot\s+(?:a\s+)?single\s+(?:recorded\s+|known\s+|human\s+)*(?:death|fatality|person|victim)\b|\b(?:it|taipans?|snake)\s+(?:has\s+)?killed\s+(?:no\s+one|nobody)\b|\bno\s+one\s+has\s+(?:ever\s+)?died\b|\bnever\s+(?:been\s+)?(?:blamed|linked|tied)\s+(?:for|to)\s+(?:a\s+)?(?:single\s+)?death/i;
const TOXINA_EXCLUSIVA = /\bshar(?:e|es|ed|ing)\s+(?:a|one|the\s+same)\s+(?:[\w-]+\s+)?toxins?\b|\btoxins?\s+(?:that\s+)?no\s+other\s+snakes?\s+(?:have|has|make|makes|produce)\b|\bprothrombinase\b|\bunique\s+toxins?\b|\bexclusive\s+toxins?\b/i;
// A PERGUNTA DO LUCAS ATRIBUÍDA (o acréscimo da Sala, 18/11/2026, ~16:3x; a leitora australiana do teste: "É a pergunta que todo estrangeiro me faz
// há vinte anos"): "Why does Australia have so many dangerous animals?" dita por outros ("Every visitor asks…", "people ask", "the question
// everyone asks", "you've probably heard", "people wonder", "it's the question…"), na frase, na anterior ou na seguinte, passa (com o alerta
// [pergunta-atribuida], para a Sala conferir a moldura) e paga o título 1; dita pelo narrador como pressuposto, continua no [premissa-tantos]
const ATRIBUI = /\b(?:every|each|most|many|the)\s+(?:visitors?|tourists?|foreigners?|travell?ers?|outsiders?|newcomers?|Americans?|people)\s+(?:who\s+\w+\s+(?:\w+\s+)?)?(?:always\s+|eventually\s+|still\s+|soon\s+)?(?:asks?|asked|wonders?|wondered|wants?\s+to\s+know)\b|\b(?:people|visitors|tourists|foreigners|travell?ers|outsiders|everyone|everybody|they)\s+(?:always\s+|often\s+|keep\s+|still\s+|usually\s+|tend\s+to\s+)?(?:ask|asks|asked|asking|wonder|wonders|wondered|wondering)\b|\bthe\s+question\s+(?:that\s+)?(?:everyone|everybody|people|visitors|foreigners|tourists|outsiders|every\s+\w+|most\s+\w+)\b|\byou['’]ve\s+(?:probably\s+|likely\s+|maybe\s+|already\s+)?(?:heard|asked|wondered)\b|\b(?:it['’]s|that['’]s|this\s+is|it\s+is|that\s+is)\s+(?:the|a)\s+(?:question|thing)\s+(?:that\s+)?(?:every|everyone|everybody|people|visitors|foreigners|tourists|outsiders|most)\b|\bask(?:s|ed)?\s+(?:me|us|her|him|them|Australians|locals)\b/i;
const atribuida = (f, ant, ctx) => ATRIBUI.test(f) || ATRIBUI.test(ant || "") || ATRIBUI.test(ctx?.prox?.(1) || "");
// O CENSO (pautas/australia-animais/_trabalho/medida-censo.md, 18/11/2026, ~16:1x): o Channel Country (IBRA 7.1 CHC) tem ~1.000 moradores
// (1.020 pelo centroide, 1.032 ponderado, 1.224 com as vilas da beira; Censo 2021), 117.411 mi², 1 pessoa a cada ~115 mi²; os três estados da
// marrom, 18,5/mi²; a razão das densidades, ~2.133× (em pessoas, ~19.345×)
const MIL_PESSOAS = /\b(?:a|one)\s+thousand\b|(?<![\w.,])1,(?:0\d\d|1\d\d|2\d\d)\b|\bfor\s+every\s+(?:[\w,]+\s+){0,2}square\s+miles?\b|\bper\s+square\s+mile\b|\bsquare\s+miles?\s+(?:per|for\s+every|for\s+each)\s+(?:person|resident)\b/i;
const PESSOAS_NUM = new RegExp(String.raw`${NUMR}\s+(?:[\w-]+\s+)?(?:people|residents|persons?|inhabitants)\b`, "i");
const CENSO_CTX = /\bcensus\b|\bsquare\s+miles?\b|\bper\s+square\b|\b(?:a|one)\s+thousand\s+people\b|\b(?:\d+|twenty|almost\s+20|nearly\s+20)\s+million\s+people\b|\b(?:people|persons?)\s+(?:per|for\s+every)\b|\bdensely\b|\bdensity\b/i;
const CENSO_PRECISO = /(?<![\w.,])(?:1,020|1,032|1,224|2,133|2,108|1,777|2,326|117,411|19,731,792|19,345|5,129|24,924)\b/;
// O FATOS-C (pautas/australia-animais/_trabalho/fatos-c.md, 18/11/2026, ~16:3x)
const SORO_OU_BANDAGEM = /\bantivenoms?\b|\bbandag\w*|\bfirst\s+aid\b|\bpressure\s+immobili\w*|\bsplints?\b/i;
const PER_CAPITA = /\bper\s+(?:capita|person|head|resident)\b|\bper\s+(?:100,000|100\s+thousand|hundred\s+thousand|million|10\s+million|ten\s+million)\b|\bfor\s+every\s+(?:100,000|hundred\s+thousand|million)\b|\b(?:death\s+)?rates?\b|\b(?:for|by|against|adjusted\s+for)\s+(?:its\s+|the\s+|their\s+)?(?:size\s+of\s+(?:its|the)\s+)?population\b|\bpopulation[\s-]adjusted\b/i;
const MEL = /\bhoney\s*bees?\b|\bEuropean\s+(?:honey\s*)?bees?\b|\bApis\b/i;

const NAO_SE_DIZ = [
  // ---- a fama e a premissa (pauta §5; K1)
  { id: "premissa-tantos",
    porque: 'a base não mede "mais bicho venenoso que em qualquer lugar", e um especialista diz que, fora as cobras, a fauna venenosa da Austrália é comum para uma terra tropical (Arbuckle, P10; K1): nunca "Australia has more venomous animals than anywhere else", "home to the world\'s deadliest animals", nem a pergunta "Why does Australia have so many venomous (ou dangerous) animals?" como fato; vale "so many of Australia\'s snakes", ou a fama posta como pergunta, "So does Australia really have so many dangerous animals?", ou a pergunta atribuída a outros ("Every visitor asks…", "people ask", "the question everyone asks", "you\'ve probably heard"), com o alerta [pergunta-atribuida] (pauta §5, "A fama e a premissa", e §8; o acréscimo da Sala, 18/11/2026)',
    julga: (f, ant, ctx) => {
      if (REPUTACAO.test(f)) return null;
      if (MAIS_QUE_TODOS.test(f) || CASA_DOS_PIORES.test(f)) return "reprova";
      // a pergunta atribuída a outros passa (o acréscimo da Sala): o alerta [pergunta-atribuida] pede a conferência da moldura
      return TANTOS_BICHOS.test(f) && !(pergunta(f) && /\breally\b/i.test(f)) && !atribuida(f, ant, ctx) ? "reprova" : null;
    } },
  { id: "mito",
    porque: '"Experts say Australia\'s dangerous animals are a myth" não se diz: Arbuckle diz "for the most part … overstated", e as cobras são a exceção; nem "myth", "hype", "overrated" ou "overblown" sobre os bichos ou a fama na boca do narrador (com o dono, "he says", passa) (pauta §5, "A fama e a premissa"; K1)',
    julga: (f) => (semNeg(f, /\bmyths?\b|\bhype[ds]?\b|\boverrated\b|\boverblown\b/i, NEG_LARGA) && /\b(?:animals?|creatures|wildlife|danger\w*|deadl\w*|venom\w*|snakes?|spiders?|reputation|image|fame)\b/i.test(f) && !ATRIB.test(f) ? "reprova" : null) },
  { id: "gondwana-livescience",
    porque: 'da matéria da Live Science, a pauta não usa o "about 100 million years ago" de Arbuckle para a separação (fica com a Geoscience Australia, 85–80 milhões) nem as paráfrases da jornalista ("60 million years ago … an accident of history", "the first snakes colonized"); vale "Some 80 to 85 million years ago, Australia began to pull away from Antarctica" (pauta §4.1, §4.2 e §5; K1)',
    julga: (f) => ((/(?<![\w.,])(?:100|(?:a|one)\s+hundred)\s+million\s+years\b/i.test(f) && /\b(?:split|broke|break|separat\w*|pull\w*\s+away|rift\w*|Gondwana|Antarctica|apart)\b/i.test(f))
      || (/(?<![\w.,])(?:60|sixty)\s+million\s+years\b/i.test(f) && /\b(?:snakes?|coloni[sz]\w*|arriv\w*|elapids?)\b/i.test(f))
      || /\baccident\s+of\s+history\b/i.test(f) || /\bfirst\s+snakes\b[^.?!]{0,40}\b(?:coloni[sz]\w*|arriv\w*|reach\w*|came)\b/i.test(f) ? "reprova" : null) },
  // ---- a cobra e o laboratório (pauta §5)
  { id: "taipan-mais-mortal",
    porque: 'a taipan-do-interior é a de veneno mais potente medido em camundongo, não a que mais mata: quem mata é a marrom (17 das 23 mortes de 2005–2015, P3); nunca "the inland taipan is the deadliest snake (in the world)", nem "the deadliest snake on Earth"; vale "the land snake with the most potent venom on Earth, as measured on lab mice" (pauta §5, "A cobra e o laboratório")',
    julga: (f) => {
      const m1 = f.match(/\btaipans?\b[^.?!]{0,60}?\b(?:is|was|['’]s|remains)\s+(?:[\w-]+\s+){0,3}?(?:the\s+)?(?:world['’]s\s+|Australia['’]s\s+|planet['’]s\s+|Earth['’]s\s+)?(?:deadliest|most\s+(?:deadly|dangerous|lethal))\b/i);
      if (m1 && !NEG_INTERNA.test(m1[0])) return "reprova";
      const m2 = f.match(/\b(?:deadliest|most\s+(?:deadly|dangerous|lethal))\s+snake\b[^.?!]{0,30}?\b(?:inland\s+)?taipan/i);
      if (m2 && !NEG_INTERNA.test(m2[0]) && !NEGA_ANTES.test(f.slice(0, m2.index))) return "reprova";
      return semNeg(f, /\b(?:world['’]s|planet['’]s|Earth['’]s)\s+(?:deadliest|most\s+(?:deadly|dangerous|lethal))\s+snake\b|\b(?:deadliest|most\s+(?:deadly|dangerous|lethal))\s+snake\s+(?:on\s+(?:Earth|the\s+planet)|in\s+the\s+world)\b/i, NEG_LARGA) ? "reprova" : null;
    } },
  { id: "taipan-nunca-matou",
    porque: 'o "nenhuma morte registrada" da taipan-do-interior é do AVRU (Universidade de Melbourne, 403), NÃO CONFERIDO: nunca "it has never killed anyone", "never killed", "no recorded/known/confirmed death"; vale "By 2017, doctors had written up only about a dozen cases of someone envenomed by one" e, das mortes, "None was put down to the inland taipan" (o estudo nacional, P3) (pauta §4.3, §5 e §11, item 6; o pedido da Sala)',
    julga: (f, ant) => (lugarTaipan(f, ant) && NUNCA_MATOU.test(f) ? "reprova" : null) },
  { id: "taipan-raramente-mata",
    porque: '"It rarely kills" diz que ela mata às vezes, e a base não tem morte nenhuma lida por taipan-do-interior (o título "…It Rarely Kills." da v1 ficou fora por isso; o cético, K2); vale "has almost no record of hurting people" e "rarely touches anyone" (pauta "Lado a lado" e §4.3; o pedido da Sala)',
    julga: (f, ant) => (lugarTaipan(f, ant) && /\b(?:rarely|seldom|hardly\s+ever|almost\s+never|very\s+rarely|only\s+rarely)\s+(?:\w+\s+)?(?:kill\w*|fatal\w*|deadly)\b/i.test(f) ? "reprova" : null) },
  { id: "duzia-sem-ano",
    porque: 'a dúzia de casos da taipan é a contagem de 2017 (Weinstein et al.: 11 casos documentados, 2 de cobra selvagem, mais o do artigo; K9): sempre com o ano, "By 2017, doctors had written up only about a dozen cases"; os 11 + 1 e os 2 + 1 ficam na tela (pauta §4.3, §5 e §7)',
    julga: (f, ant) => (/\b(?:a\s+dozen|twelve|12|eleven|11)\b/i.test(f) && /\b(?:cases|envenom\w*|written\s+up|documented|bites)\b/i.test(f) && (lugarTaipan(f, ant) || /\bwritten\s+up\b/i.test(f)) && !/\b2017\b/.test(`${ant} ${f}`) ? "reprova" : null) },
  { id: "ld50-valor",
    porque: 'nenhum valor de LD50 foi lido (o 0,025 mg/kg é NÃO CONFERIDO), e "one bite can kill 100 men" não tem fonte: na voz, "the dose that kills half the mice in a test", sem valor (pauta §4.3 e §5; fa B4)',
    julga: (f) => (/\bmg\s*\/\s*kg\b|\bmilligrams?\s+per\s+kilo\w*|\bmicrograms?\s+per\b|(?<![\w.,])0\.0\d+\b/i.test(f)
      || /\b(?:one|a\s+single)\s+bite\b[^.?!]{0,50}\bkill\w*\s+(?:\d|a\s+hundred|one\s+hundred|hundreds|thousands|dozens|an?\s+(?:army|elephant|horse))/i.test(f)
      || /\benough\s+(?:venom\s+)?to\s+kill\s+(?:\d|a\s+hundred|one\s+hundred|hundreds|thousands|dozens|an?\s+(?:army|elephant|horse)|\w+\s+(?:men|people|humans|adults|mice))/i.test(f) ? "reprova" : null) },
  { id: "evoluiu-para-matar",
    porque: 'nenhuma fonte lida diz que o veneno "evolved to kill people" nem que o veneno australiano é mais forte "because of the isolation" (fa B7); a hipótese da taipan é a da presa ("a rat can bite back"), dita como hipótese (pauta §4.3 e §5)',
    julga: (f) => (/\bevolved\s+(?:\w+\s+)?to\s+kill\s+(?:people|humans|us|you)\b/i.test(f)
      || /\bvenoms?\b[^.?!]{0,60}\b(?:because\s+of|due\s+to|thanks\s+to)\s+(?:the\s+|its\s+|that\s+|Australia['’]s\s+)?isolation\b|\bisolation\b[^.?!]{0,50}\b(?:made|makes|gave|turned)\b[^.?!]{0,40}\bvenom/i.test(f) ? "reprova" : null) },
  { id: "camundongo-errado",
    porque: 'a crítica de Ainsworth (2026) aos testes em camundongo é de método e de ética, não diz que a taipan é fraca em gente, e a marrom, do mesmo topo do teste, mata (K3): nunca "But mice aren\'t people" como fecho, nem "the mouse test is wrong"; vale "Researchers now criticize mouse tests like that one, partly because they don\'t reflect what happens when a snake bites a person" (pauta §4.3 e §5)',
    julga: (f) => (/\bmice\s+(?:aren['’]t|are\s+not)\s+(?:people|humans|us)\b|\b(?:mouse|mice|lab|LD50)\s+tests?\s+(?:is|are|was|were)\s+(?:simply\s+|just\s+)?(?:wrong|flawed|useless|meaningless|misleading|bogus|broken)\b/i.test(f) ? "reprova" : null) },
  { id: "marrom-segunda",
    porque: 'o lugar da marrom na lista de 1979 não foi lido (o AVRU, 403): nunca "the second most venomous snake"; vale "near the top, too" (Jackson 2016, "the most toxic snakes of all", P11) (pauta §4.4 e §5)',
    julga: (f) => (/\b(?:second|third|2nd|3rd)[\s-]+(?:most\s+(?:venomous|toxic|potent|lethal)|deadliest|strongest)\b|\b(?:number|No\.)\s+(?:two|2|three|3)\s+on\s+the\s+list\b/i.test(f) ? "reprova" : null) },
  { id: "toxina-extrema",
    porque: 'o que é só da taipan e da marrom é o complexo da protrombinase inteiro; o que "partially underwrites" a toxicidade no camundongo é o fXa, comum a quase todas as elapídeas australianas (Jackson 2016, P11; K3): nunca "It\'s part of what makes their venom so extreme on lab rodents" sobre a toxina exclusiva; vale "Brown snakes and taipans share a toxin no other snakes have" (pauta §4.4 e §5)',
    julga: (f, ant, ctx) => {
      if (!TOXINA_EXCLUSIVA.test(f)) return null;
      if (/\b(?:mice|mouse|rodents?|lab|extreme\w*|potency|toxicity|lethal\w*|deadl\w*)\b/i.test(f)) return "reprova";
      const p = ctx.prox(1);
      return /\b(?:what\s+makes|part\s+of\s+(?:what|why)|why\s+(?:their|its)\s+venom|explains?)\b/i.test(p) && /\b(?:mice|mouse|rodents?|lab|extreme\w*|potent|toxic\w*|lethal\w*|deadl\w*)\b/i.test(p) ? "reprova" : null;
    } },
  { id: "marrom-quintal",
    porque: 'o endereço da marrom é o do Queensland Museum, lido pela Sala em 18/11/2026 (o Australian Museum deu 403): "Found over most of Queensland, New South Wales and Victoria", "Found in all habitats except rainforest", "It has adapted well to farmed, grazed and semi-urban lands": nunca "in people\'s backyards", "in gardens", "in the suburbs", "in cities" nem "all over Australia"; vale "The other lives where people farm and build" (pauta §4.4 e §5; o registro, "Onde vive a cobra-marrom")',
    julga: (f, ant) => ((MARROM.test(f) || (MARROM.test(ant) && /^(?:It|They|The\s+other|This\s+one|That\s+one)\b/i.test(f)))
      && /\bback\s*yards?\b|\bgardens?\b|\b(?:in|inside|into)\s+(?:people['’]s\s+|your\s+|our\s+)?(?:homes|houses|kitchens|cities|city)\b|\bsuburb\w*|\bcity\s+streets\b|\b(?:all\s+over|across\s+all\s+of|throughout|everywhere\s+in)\s+(?:Australia|the\s+(?:country|continent))\b|\beverywhere\b/i.test(f) ? "reprova" : null) },
  { id: "taipan-vazio",
    porque: 'a medida do Censo (medida-censo.md, §1 e §8; Censo 2021 e IBRA 7.1): no Channel Country vivem ~1.000 pessoas (1.020 pelo centroide; de 1.032 a 1.224 nas variantes centrais), em seis vilas e nas estâncias: nunca "empty", "no one lives", "nobody lives", "uninhabited", "deserted" sobre a terra da taipan, e "nearly empty" ou "almost no one" só com o número na frase; outro número de gente ali, também não; vale "At the 2021 census, about a thousand people lived there", "about one person for every hundred square miles" e "One lives out on these floodplains, where about a thousand people live, and is usually quite shy" (pauta §4.4; o acréscimo da Sala, 18/11/2026)',
    julga: (f, ant) => {
      const mil = MIL_PESSOAS.test(f);
      if (lugarTaipan(f, ant)) {
        if (/\b(?:empty|uninhabited|deserted|unpopulated|abandoned)\b/i.test(f) && !(/\b(?:nearly|almost|mostly|largely|virtually)\s+(?:empty|deserted|uninhabited)\b/i.test(f) && mil)) return "reprova";
        if (/\b(?:no\s+one|nobody|no\s+people)\s+(?:lives?|lived|living|has\s+ever\s+lived)\b|\bwhere\s+(?:no\s+one|nobody)\b/i.test(f)) return "reprova";
        if (/\b(?:almost|hardly|barely|virtually|next\s+to)\s+(?:no\s+one|nobody|anyone|anybody|no\s+people)\b/i.test(f) && !mil) return "reprova";
      }
      // o número de gente ali: "about a thousand" (1.000 a 1.299) passa; outro número, não (a densidade, "one person for every hundred square miles", passa)
      const lugarF = LUGAR_TAIPAN.test(f) || (/\bthere\b|\bout\s+here\b/i.test(f) && LUGAR_TAIPAN.test(ant || ""));
      return lugarF && PESSOAS_NUM.test(f) && !mil ? "reprova" : null;
    } },
  { id: "censo-ano",
    porque: 'o Censo da medida é o de 2021 (a noite de 10/08/2021); o de 2026 não foi lido, e o Censo é de cinco em cinco anos: nunca "the latest census", "the last census", "the most recent census"; vale "at the 2021 census" (medida-censo.md §6 e §8; o acréscimo da Sala)',
    alerta: 'os ~1.000 do Channel Country são de 2021: "today", "right now", "these days" ou "in 2026" com eles pede o ano ("At the 2021 census, …"), na voz ou no crédito de tela (medida-censo.md §7 e §8)',
    julga: (f) => /\b(?:the\s+)?(?:latest|last|most\s+recent|newest|current|recent)\s+(?:national\s+)?census\b/i.test(f) ? "reprova"
      : (/\btoday\b|\bright\s+now\b|\bthese\s+days\b|\bnowadays\b|\bin\s+2026\b|\bthis\s+year\b/i.test(f) && MIL_PESSOAS.test(f) && !/\b2021\b/.test(f) ? "alerta" : null) },
  { id: "censo-razao",
    porque: 'a razão das densidades (três estados ÷ Channel Country) é ~2.133× por milha quadrada; em pessoas, ~19.345×: "a thousand times", "two thousand times", "2,000 times" só com "per square mile" (ou "square mile") na mesma frase; vale "Per square mile, that\'s more than a thousand times as many people as the Channel Country" (medida-censo.md §1, §2 e §8; o acréscimo da Sala). A Grande Sydney contra o Channel Country, em pessoas ("thousands of times the people", 5.129×), passa',
    julga: (f, ant) => {
      if (!/\b(?:a|one|two|three|four|five|several|many)\s+thousand\s+times\b|(?<![\w.,])\d{1,3}(?:,\d{3})+\s*(?:times|×|x)\b|(?<![\w.,])\d{4,}\s*(?:times|×)\b|\bthousands\s+of\s+times\b|\bthousand[\s-]?fold\b/i.test(f)) return null;
      // a milha quadrada, a Grande Sydney (em pessoas) e a Índia (o [india-razao]) ficam fora daqui
      if (/\bsquare\s+miles?\b/i.test(f) || /\bSydney\b/i.test(`${ant} ${f}`) || INDIA.test(`${ant} ${f}`)) return null;
      return /\b(?:people|persons|population|residents|crowded|populated|Channel\s+Country|Queensland|New\s+South\s+Wales|Victoria|states?)\b/i.test(`${ant} ${f}`) ? "reprova" : null;
    } },
  { id: "censo-area-taipan",
    porque: 'a divisa do IBRA (o Channel Country) não é a área de ocorrência da taipan, que não ocupa a biorregião inteira (medida-censo.md §6 e §8): nunca "the taipan\'s range", "its range covers…", "the taipan\'s habitat" com milhas quadradas ou gente; vale "The Channel Country, where the inland taipan lives, covers about 117,000 square miles" (o acréscimo da Sala)',
    julga: (f, ant) => {
      const area = /\b(?:the\s+)?(?:inland\s+)?taipan['’]s\s+(?:range|habitat|territory|home)\b|\brange\s+of\s+the\s+(?:inland\s+)?taipans?\b|\bwhere\s+the\s+(?:inland\s+)?taipan['’]s\s+range\b/i.test(f)
        || (/\b(?:its|their)\s+(?:entire\s+|whole\s+)?(?:range|habitat|territory)\b/i.test(f) && TAIPAN.test(`${ant} ${f}`));
      return area && /\bsquare\s+miles?\b|\bsquare\s+kilomet\w*|\b(?:people|residents|persons?)\b|\bcovers?\b|\bspans?\b|\blives?\b|\blived\b/i.test(f) ? "reprova" : null;
    } },
  { id: "marrom-ausente",
    porque: 'o Queensland Museum diz que a marrom-oriental é "Found over most of Queensland, New South Wales and Victoria", e o Channel Country é, na maior parte, Queensland: nunca "the brown snake doesn\'t live out here", "brown snakes live only in the east" nem "only in those three states" (medida-censo.md §6 e §8; o acréscimo da Sala)',
    julga: (f, ant) => {
      if (!(MARROM.test(f) || (/^(?:It|They|The\s+other(?:\s+one)?)\b/i.test(f) && MARROM.test(ant || "")))) return null;
      return (/\b(?:doesn['’]t|don['’]t|does\s+not|do\s+not|never|can['’]t|cannot|isn['’]t|aren['’]t|is\s+not|are\s+not)\s+(?:even\s+)?(?:live|lives|living|occur|occurs|found|seen|survive|reach|go|range)\b/i.test(f)
          && /\b(?:out\s+here|out\s+there|here|there|Channel\s+Country|floodplains?|outback|inland|interior|deserts?|the\s+west)\b/i.test(f))
        || /\bno\s+brown\s+snakes?\b|\bonly\s+(?:in|on|along)\s+the\s+(?:east|coast|eastern)\b|\bonly\s+in\s+(?:those|the|these)\s+(?:three\s+)?states\b|\b(?:lives?|found|occurs?)\s+only\s+(?:in|on|along)\b/i.test(f) ? "reprova" : null;
    } },
  { id: "espera-soro",
    porque: 'as 4,3 horas até o primeiro soro são a mediana de todos os 835 envenenados do estudo nacional, não das 23 mortes (K9): fora da voz, e nunca "the wait for antivenom killed them" nem a distância como causa das mortes (pauta §4.4, §5 e §7)',
    julga: (f) => (/(?<![\w.,])4\.3\s+hours\b|\bfour\s+point\s+three\s+hours\b|(?<![\w.,])835\b/i.test(f)
      || /\b(?:wait\w*|delay\w*|distance|too\s+far|hours\s+(?:from|away))\b[^.?!]{0,50}\b(?:killed|cost\s+(?:them\s+)?(?:their\s+)?lives|caused\s+(?:the|their|those)\s+deaths?|led\s+to\s+(?:the|their|those)\s+deaths?)\b/i.test(f) ? "reprova" : null) },
  // ---- a deriva e as cobras (pauta §5)
  { id: "isolada-tempo",
    porque: 'a GA dá "an isolated continent between about 55 and 10 million years ago"; o "40 a 50 milhões" do resumo do Lucas é metade da história: nunca "isolated for 40 (ou 50) million years"; vale "For tens of millions of years, it traveled alone" (pauta §4.2 e §5; fa A4)',
    julga: (f) => (/\b(?:isolat\w*|alone|cut\s+off)\b[^.?!]{0,40}\b(?:for\s+)?(?:(?:about|some|nearly|almost|over|more\s+than)\s+)?(?:40|45|50|55|forty|forty[\s-]five|fifty|fifty[\s-]five)\s+million\b|(?<![\w.,])(?:40|45|50|forty|fifty)\s+million\s+years\s+of\s+(?:isolation|solitude)\b/i.test(f) ? "reprova" : null) },
  { id: "continente-rapido",
    porque: '"the fastest-moving continent" (ou "the fastest plate") não está na GA, que só diz "continues to move north by about seven centimetres each year"; os 7 cm ficam no fundo (na voz, se entrar, "almost three inches a year": só milhas) (pauta §4.2, §5 e §7; fa A5)',
    julga: (f) => (/\bfastest[\s-]+(?:moving|drifting)\b|\bfastest\s+(?:continent|plate|landmass)\b|\bmoves?\s+faster\s+than\s+any\b/i.test(f) || /(?<![\w.,])(?:7|seven)\s+(?:cm|centimet(?:er|re)s?)\b/i.test(f) ? "reprova" : null) },
  { id: "elapideas-depois",
    porque: 'as elapídeas chegaram da Ásia há uns 30–25 milhões de anos (relógio molecular, Lee 2016), antes da colisão (Mioceno inicial) e antes da secura: nunca "elapids arrived 40 million years ago", "the snakes arrived after Australia hit Asia" nem "and then, from Asia, came the snakes" depois da colisão; vale "But before Australia ever reached Asia, something had already made the crossing" (pauta §4.2 e §5; K6)',
    julga: (f) => (/\b(?:elapids?|snakes?)\b[^.?!]{0,40}\b(?:arriv\w*|came|reached|crossed|got\s+here)\b[^.?!]{0,30}\b(?:40|forty|35|thirty[\s-]five)\s+million\b/i.test(f)
      || /\b(?:elapids?|snakes?)\b[^.?!]{0,40}\b(?:arriv\w*|came|crossed|reached|got\s+here)\b[^.?!]{0,30}\bafter\b[^.?!]{0,50}\b(?:hit|reached|collid\w*|ran\s+into|crashed|touched|met|joined|bumped)\b/i.test(f)
      || /\bthen,?\s+from\s+Asia,?\s+came\s+the\s+snakes\b/i.test(f) ? "reprova" : null) },
  { id: "campo-aberto",
    porque: 'Lee 2016 diz que a chegada das elapídeas não acelerou as espécies ("it is surprising that the colonization … did not result in sharply increased rates of speciation"): nunca "an open field", "every niche", "an explosion of species", nem um "So" ligando a falta de víboras aos papéis que elas ocupam; vale os fatos lado a lado, "There were no vipers here… Today, elapids fill most of the roles a snake can play on land" (pauta §4.2 e §5; K6)',
    julga: (f, ant) => (/\bopen\s+field\b|\bexplosion\s+of\s+(?:species|snakes|diversity|forms)\b|\bset\s+off\s+an?\s+(?:explosion|boom)\b|\bexploded\s+into\b|\bevery\s+(?:single\s+)?niche\b|\bempty\s+niches?\b/i.test(f)
      || (/\bno\s+vipers\b/i.test(`${ant} ${f}`) && /\b(?:so|thus|therefore|which\s+(?:is\s+why|let|allowed))\b[^.?!]{0,60}\b(?:fill\w*|took\s+over|spread|moved\s+into|occup\w*|ran\s+wild)\b/i.test(f)) ? "reprova" : null) },
  { id: "45-e-mar-fundo",
    porque: 'o norte (há uns 45 milhões de anos) e o mar fundo (33,5 milhões, Scher 2015) são dois tempos: nunca "Around 45 million years ago, Australia moved north and deep ocean opened up" numa frase só; vale "…and over the next ten million years or so, deep ocean opened up behind it" (pauta §4.2 e §5; K6)',
    julga: (f) => (/(?<![\w.,])(?:45|forty[\s-]five)\s+million\b/i.test(f) && /\bdeep\s+(?:ocean|sea|water)\b/i.test(f) && !/\bover\s+the\s+(?:next|following)\b|\bthat\s+followed\b|\blater\b|\bafter(?:ward)?s?\b/i.test(f) ? "reprova" : null) },
  { id: "quase-toda-venenosa",
    porque: 'há pítons e cobras-cegas na Austrália (o Reptile Database, lido pela Sala: 17 pitonídeas e 49 tiflopídeas das 229): nunca "almost every snake in Australia is venomous" (pauta §5; o registro)',
    julga: (f) => (/\b(?:almost|nearly|virtually|practically)\s+(?:every|all|each)\s+(?:(?:of\s+)?(?:Australia['’]s|the)\s+)?(?:\w+\s+)?snakes?\b[^.?!]{0,50}\bvenomous\b|\bevery\s+(?:single\s+)?snake\s+(?:in|of)\s+Australia\b[^.?!]{0,30}\bvenomous\b|\ball\s+(?:of\s+)?Australia['’]s\s+snakes\s+are\s+venomous\b/i.test(f) ? "reprova" : null) },
  { id: "corrente-secou",
    porque: 'a ligação da corrente circumpolar com a secura da Austrália é inferência, não lida (fa A3): fora; vale "Then the continent dried out. Its interior began turning arid about 15 million years ago…" (pauta §4.3 e §5)',
    julga: (f) => (/\bcurrents?\b[^.?!]{0,60}\b(?:dried|dry|drying|dries|arid\w*|desert\w*)\b|\b(?:dried|drying|aridi\w*)\b[^.?!]{0,60}\bcurrents?\b/i.test(f) ? "reprova" : null) },
  { id: "endemismo",
    porque: 'o "About 90% of our reptiles and frog species are endemic" é do ABS de 2002, arquivado, e fora das duas perguntas (K9): fora da voz (pauta §4.2, §5 e §7)',
    julga: (f) => ((/\bnine\s+(?:in|out\s+of)\s+(?:every\s+)?ten\b|(?<![\w.,])(?:90|ninety)\s*(?:%|percent)/i.test(f) && /\b(?:reptiles?|frogs?|species|animals|endemic|nowhere\s+else)\b/i.test(f))
      || (/\bfound\s+nowhere\s+else\b|\bendemic\b/i.test(f) && /\b(?:reptiles?|frogs?|species|animals|wildlife)\b/i.test(f)) ? "reprova" : null) },
  // ---- a água (pauta §5)
  { id: "agua-viva-recorde",
    porque: '"The box jellyfish is the most venomous animal on Earth" não está na base; e as caixas-medusas não são perigo só australiano: Arbuckle, "these creatures populate tropical and subtropical waters, not just those Down Under" (pauta §4.5 e §5; P10)',
    julga: (f) => {
      if (!/\bbox\s+jell\w*|\bjellyfish\b/i.test(f)) return null;
      if (semNeg(f, /\b(?:most\s+(?:venomous|deadly|dangerous|lethal|toxic)|deadliest)\s+(?:animal|creature|thing|species)\b|\b(?:most\s+(?:venomous|deadly|dangerous|lethal|toxic)|deadliest)\b[^.?!]{0,20}\b(?:on\s+Earth|in\s+the\s+world|on\s+the\s+planet)\b/i, NEG_LARGA)) return "reprova";
      return /\bjell\w*\s+(?:are|is)\s+(?:an?\s+)?(?:uniquely\s+|purely\s+|truly\s+)?Australian\b(?!\s+waters)|\bjell\w*\b[^.?!]{0,40}\bonly\s+(?:in|found\s+in|live\s+in|lives\s+in|off)\s+Australia\b/i.test(f) ? "reprova" : null;
    } },
  { id: "crocodilo",
    porque: 'o crocodilo-de-água-salgada vai "from Sri Lanka to Southeast Asia and down to northern Australia" (fa C4), não é bicho só australiano; e o total de crocodilos hoje é NÃO CONFERIDO: nunca "Crocodiles are Australian animals" nem "there are 100,000 crocodiles in the Territory"; os 26 anos de caça ficam na tela (pauta §4.6, §5 e §7)',
    julga: (f) => (/\bcroc\w*\s+(?:are|is)\s+(?:an?\s+)?(?:uniquely\s+|purely\s+|truly\s+)?Australian\b|\bcroc\w*\b[^.?!]{0,40}\bonly\s+(?:in|found\s+in|live\s+in|lives\s+in)\s+Australia\b/i.test(f)
      || /(?<![\w.,])(?:\d{1,3}(?:,\d{3})+|\d+\s+thousand|(?:a|one)\s+hundred\s+thousand|tens\s+of\s+thousands|hundreds\s+of\s+thousands|\w+\s+thousand)\s+(?:saltwater\s+|wild\s+|estuarine\s+)?croc\w*/i.test(f)
      || (/(?<![\w.,])(?:26|twenty[\s-]six)\s+(?:years|yr)\b/i.test(f) && /\b(?:croc\w*|hunt\w*)\b/i.test(f)) ? "reprova" : null) },
  { id: "soro-agua-viva",
    porque: 'o soro da vespa-do-mar (1970) vai sem o peixe-pedra (1956: "o peixe-pedra só entraria nesta frase", K10) e sem "and it works": a eficácia não está na base; vale "Australia went on to make the world\'s first antivenom for a jellyfish, in 1970" (pauta §4.5 e §5)',
    julga: (f, ant) => (/\bstonefish\b/i.test(f) || (AGUA_VIVA.test(`${ant} ${f}`) && /\bantivenom\w*\b[^.?!]{0,60}\b(?:works|worked|effective|saves?\s+lives|saved\s+lives)\b|\band\s+it\s+works\b/i.test(f)) ? "reprova" : null) },
  { id: "tubarao",
    porque: 'os números de tubarão do Taronga (e da AP, que os cita) não têm licença de uso comercial sem permissão (pedir é do Lucas), e a média de ataques subiu: nunca "Taronga" nem "shark attacks are rare and falling"; na voz, o tubarão vai só nas palavras do ABS, "animals in the sea, sharks among them", sem o 32 do W56, nem as mortes de 2026 nem o menino do porto de Sydney (pauta §4.5, §4.6, §4.7, §5 e §7; K9)',
    julga: (f) => (/\bTaronga\b/i.test(f) || /\bsharks?\b[^.?!]{0,60}\b(?:falling|declining|dropping|going\s+down|on\s+the\s+decline|fewer\s+(?:every|each)\s+year)\b/i.test(f)
      || new RegExp(String.raw`${NUMR}\s+(?:[\w-]+\s+){0,3}?(?:by\s+)?sharks?\b|\bsharks?\s+(?:have\s+|had\s+)?(?:killed|kill|kills|attacks?|bit|bite)\s+(?:[\w-]+\s+){0,2}?${NUMR}`, "i").test(f)
      || (/\bsharks?\b/i.test(f) && /\b2026\b|\bSydney\s+Harbou?r\b/i.test(f)) ? "reprova" : null) },
  // ---- as aranhas (pauta §5)
  { id: "aranhas-desde",
    porque: 'a morte por aranha vai por espécie, "no confirmed death", com o ano de cada soro: nunca "no one has died from a spider bite since 1981" (todas as aranhas), "since 1956" do redback sem "confirmed" (o soro é de 1956, Wiener, MJA 2003; o próprio fatos-c: "no confirmed death since"), nem "the last spider death was in 2016" (o caso de 2016 é NÃO CONFERIDO) (pauta §4.5 e §5; fb 12 e 13; fa D2 e D4; fatos-c §3)',
    julga: (f, ant) => {
      if (!ARANHA.test(f) && !FUNIL.test(f) && !REDBACK.test(f) && !(/^(?:It|They|Since\s+then)\b/i.test(f) && (ARANHA.test(ant) || REDBACK.test(ant)))) return null;
      if (/\b(?:last|latest|most\s+recent)\s+(?:[\w-]+\s+){0,2}?(?:death|fatality|victim)\b[^.?!]{0,40}\b2016\b|\bin\s+2016,?\s+(?:a|an|one)\s+(?:[\w-]+\s+){0,3}?(?:died|was\s+killed)\b|\b2016\b[^.?!]{0,30}\b(?:first|only)\s+(?:spider\s+)?(?:death|fatality)\b/i.test(f)) return "reprova";
      if (/\bsince\s+(?:19[5-9]\d|20\d\d)\b/i.test(f) && /\b(?:died|deaths?|killed|kill|fatal\w*|no\s+one|nobody)\b/i.test(f)) {
        // o redback: só "since 1956", e com "confirmed" (o 1955 é o [redback-ano])
        if (REDBACK.test(`${ant} ${f}`)) return /\bsince\s+1956\b/i.test(f) && /\bconfirmed\b/i.test(f) ? null : "reprova";
        if (!/\bconfirmed\b/i.test(f) && !ATRIB.test(f)) return "reprova";
      }
      return null;
    } },
  { id: "veneno-lagartos",
    porque: 'o PNAS (2020) propõe que a toxina da funnel-web nasceu para caçar insetos e que os machos a viraram defesa contra vertebrados que não somos nós: nunca "the funnel-web\'s venom evolved to fight lizards"; vale "it started out as a weapon for catching insects. The males, the team proposes, turned it into a defense…" (pauta §4.5 e §5; K8)',
    julga: (f) => (/\bevolved\s+(?:\w+\s+)?(?:to|for)\s+(?:fight|kill|defend\s+against|deter|ward\s+off|attack|stop)\b[^.?!]{0,40}\b(?:lizards?|predators?|bandicoots?|birds|vertebrates|mammals)\b/i.test(f) ? "reprova" : null) },
  { id: "acasalamento",
    porque: 'a fonte diz "in search of females" e "between November and March", não "mating season" (K8): vale "males that leave their burrows to look for females, and most happen between November and March" (pauta §4.5 e §5)',
    julga: (f) => (/\b(?:mating|breeding)\s+season\b/i.test(f) ? "reprova" : null) },
  { id: "soro-funnel",
    porque: 'a revisão do MJA diz "a complete response in 97%" dos casos identificados por especialista: nunca "completely reversed the bite"; na voz, "worked completely in almost every case", e os 97 % ficam na tela; as 7 crianças, fora da voz (pauta §4.5, §5 e §7; K8)',
    julga: (f, ant) => (/\bcompletely\s+reversed\b|\breversed\s+(?:the\s+)?(?:bite|envenom\w*|effects?|poison\w*)\b/i.test(f) || (/(?<![\w.,])(?:97|ninety[\s-]seven)\s*(?:%|percent)/i.test(f) && (FUNIL.test(`${ant} ${f}`) || ARANHA.test(`${ant} ${f}`) || /\bantivenoms?\b|\bbites?\b|\bcases?\b|\bresponse\b|\bpatients?\b/i.test(f)))
      || (/\bchild(?:ren)?\b|\bkids?\b/i.test(f) && (FUNIL.test(`${ant} ${f}`) || ARANHA.test(`${ant} ${f}`))) ? "reprova" : null) },
  { id: "redback-soro",
    porque: 'o ensaio RAVE-II (2014) achou que o soro do redback "did not significantly improve pain or systemic effects": nunca "the redback antivenom saved lives"; vale "So it isn\'t clear that the antivenom is what keeps redback bites from killing" (pauta §4.5 e §5; fa D4)',
    julga: (f, ant) => (REDBACK.test(`${ant} ${f}`) && semNeg(f, /\bantivenom\w*\b[^.?!]{0,50}\b(?:saved|saves|prevented|prevents|stopped|stops|ended|ends)\b|\b(?:saved|saves)\s+(?:\w+\s+)?lives\b/i, NEG_LARGA) ? "reprova" : null) },
  { id: "caes-imunes",
    porque: 'o PNAS diz que cães e gatos são "insensitive" ao veneno da funnel-web, não "immune" (fa D1): vale "Dogs and cats, they note, are insensitive to it" (pauta §4.5 e §5)',
    julga: (f) => (/\bimmun\w*/i.test(f) && /\b(?:dogs?|cats?)\b/i.test(f) ? "reprova" : null) },
  { id: "minutos",
    porque: '"The funnel-web can kill in 15 minutes" não foi lido em fonte nenhuma (pauta §5, "As aranhas")',
    julga: (f) => (/\b(?:in|within)\s+(?:just\s+|as\s+little\s+as\s+|under\s+|less\s+than\s+)?(?:\d+|a\s+few|fifteen|ten|twenty|thirty)\s+minutes\b/i.test(f) && /\b(?:kill\w*|die|dies|died|death|dead|fatal)\b/i.test(f) ? "reprova" : null) },
  { id: "internacoes",
    porque: 'a tabela de Welton (Intern Med J 2017) não fecha o período (11 ou 13 anos; K9): nunca "about 42,000 hospitalisations", "over 13 years" nem "12,000 spider bites"; vale "Over a little more than a decade, spider bites put Australians in the hospital about 12,000 times", até o AIHW; as 39.424, o 1 a cada 616, o 1 a cada 227 e o "199 per 100 000" ficam fora da voz (pauta §4.1, §5 e §7)',
    julga: (f) => (/(?<![\w.,])42,000\b|\bforty[\s-]two\s+thousand\b|(?<![\w.,])39,424\b|\b199\s+per\b|\b(?:one|1)\s+in\s+(?:every\s+)?(?:616|227)\b/i.test(f)
      || (/(?<![\w.,])(?:13|thirteen)\s+years\b/i.test(f) && /\b(?:hospital\w*|admi\w*|bites?|stings?)\b/i.test(f))
      || /(?<![\w.,])12,000\s+(?:\w+\s+)?bites\b|\btwelve\s+thousand\s+(?:\w+\s+)?bites\b/i.test(f) ? "reprova" : null) },
  // ---- quem mata (pauta §5)
  { id: "cavalo-canguru",
    porque: 'o NCIS ("Animal-related deaths in Australia", FS24-09: os cavalos 222 de 713, os cangurus 53) é NÃO CONFERIDO, de segunda mão até a Sala achar a ficha, e não há fonte nacional lida do canguru: nem o cavalo nem o canguru com número, nem "horses kill more than snakes, spiders and sharks combined"; vale, sem número, "On farms, a separate study found, most fatal incidents with animals involved horses or cattle", e o resumo da página do NCIS, sem número ("deaths … remain relatively rare, particularly in comparison to deaths associated with other species"; CC BY 4.0, lido pela Sala no navegador do app em 18/11/2026; o PDF não foi lido) (pauta §4.6, §5 e §7; S1; o pedido e o acréscimo da Sala)',
    // o resumo da página do NCIS foi lido (o registro, 18/11/2026, CC BY 4.0) e vai à voz sem número; o PDF não foi lido: o NCIS com o cavalo
    // ou o canguru, ou com um número, continua fora
    julga: (f) => ((/\bNCIS\b|\bNational\s+Coronial\b/i.test(f) && (/\b(?:horses?|kangaroos?|roos|cattle|cows|dogs)\b/i.test(f) || /(?<![\w.,])\d[\d,]*\b/.test(f.replace(/\b(?:19|20)\d\d\b/g, ""))))
      || /\b(?:horses?|kangaroos?|roos)\s+(?:\w+\s+){0,2}?(?:kill|kills|killed|cause|caused)\s+(?:\w+\s+){0,2}?more\b|\bmore\s+(?:Australians|people|deaths|lives)\s+(?:\w+\s+){0,4}?than\b[^.?!]{0,30}\b(?:horses?|kangaroos?)\b/i.test(f)
      || new RegExp(String.raw`${NUMR}\s+(?:[\w-]+\s+){0,3}?(?:by\s+|from\s+|involving\s+)?(?:horses?|kangaroos?|roos)\b|\b(?:horses?|kangaroos?|roos)\s+(?:have\s+|had\s+)?(?:killed|kill|kills|caused|accounted\s+for|were\s+behind)\s+(?:[\w-]+\s+){0,2}?${NUMR}`, "i").test(f) ? "reprova" : null) },
  { id: "cama",
    porque: 'a cama é o tropo do gênero, e o 118 de 2025 é o ano de pico, preliminar (K5): fora do vídeo, no gancho e no ato 6 (os 118, 864 e 86 por ano também) (pauta §4.1, §5 e §7)',
    julga: (f) => (/\bbeds?\b/i.test(f) && /\b(?:fall\w*|fell|died|deaths?|killed|kill)\b/i.test(f) ? "reprova" : null) },
  { id: "eua",
    porque: 'a comparação com os EUA saiu (K4): o resumo de Forrester não fecha consigo mesmo, e, só nos venenosos, a Austrália mataria 1,7 a 2,1 vezes mais por pessoa; nunca "Australia is as safe as America" nem outra comparação de mortes ou risco com os EUA, a não ser que o Lucas queira (pauta §4.6, §5 e §10)',
    julga: (f) => (EUA.test(f) && /\b(?:venom\w*|snakes?|snakebites?|spiders?|animals?|wildlife|bites?|stings?)\b/i.test(f) && /\b(?:deaths?|die|dies|died|kill\w*|rate|safe\w*|dangerous|deadl\w*|risk\w*)\b/i.test(f) ? "reprova" : null) },
  { id: "india-razao",
    porque: 'a Índia por habitante, medida no fatos-c (§5: o eLife 2020, ~4,7 por 100.000 por ano, contra 0,0136 da Austrália, ABS 2016–2025): de 350 a 500 vezes conforme o período e a fonte, um modelo de autópsia verbal contra um registro de óbito; a conta se sustenta como ordem de grandeza, não como número fino: "hundreds of times", por habitante, passa; um múltiplo exato ("350 times", "300 times", "500 times") não; e "hundreds of times" sem o "por habitante" compara totais (58.000 contra 3 ou 4 por ano: milhares de vezes); valem a OMS, com o intervalo do mundo, e os ~58.000 da Índia por ano em 2000–2019 (fatos-c §5; o acréscimo da Sala)',
    alerta: '"more than 300 times" por habitante é a forma que o fatos-c dá como segura (§5.2), mas tem o número: a Sala confere se vai à voz assim ou como "hundreds of times" (o acréscimo da Sala: múltiplo exato reprova)',
    julga: (f, ant) => {
      if (!(INDIA.test(f) || INDIA.test(ant))) return null;
      const capita = PER_CAPITA.test([ant, f].join(" "));
      if (new RegExp(NUMR + "\\s+times\\b", "i").test(f)) return /\b(?:more\s+than|over|at\s+least)\s+\S+(?:\s+hundred)?\s+times\b/i.test(f) && capita ? "alerta" : "reprova";
      if (/\bhundreds\s+of\s+times\b/i.test(f)) return capita ? null : "reprova";
      return /\b(?:thousands|tens\s+of\s+thousands)\s+of\s+times\b/i.test(f) ? "reprova" : null;
    } },
  { id: "abelhas-sem-soro",
    porque: '"There\'s no antivenom for bee stings" não tem fonte na base (K9): vale "Those deaths usually come from anaphylaxis, a severe allergic reaction. One national study found that fewer than half of the people who died that way reached medical care before they died" (pauta §4.6 e §5)',
    julga: (f, ant) => ((ABELHA.test(`${ant} ${f}`) || /\banaphyla\w*/i.test(`${ant} ${f}`)) && /\bno\s+(?:\w+\s+)?antivenom\b|\bantivenom\b[^.?!]{0,30}\b(?:doesn['’]t|does\s+not|can['’]t|cannot|won['’]t)\s+(?:exist|help|work|treat)\b|\bnothing\s+to\s+treat\b/i.test(f) ? "reprova" : null) },
  { id: "abelha-europeia",
    porque: 'a abelha-de-mel é a europeia (Apis mellifera), com a primeira introdução que sobreviveu em 1822 ("aboard the Isabella", Bee Aware), e é a maior causa das mortes por picada de inseto, por alergia (73 % num estudo de 1997–2013, de segunda mão: Turner 2017 sobre Mullins 2016): a abelha trazida e o 1822 passam; a morte, só dita como alergia ("…the honeybee, an import from Europe, is the insect behind most of Australia\'s fatal sting allergies"; "…behind roughly three in four of the fatal insect-sting reactions"); nunca "European honeybees kill more Australians than snakes" (o X23 junta abelha, vespa e marimbondo), "most bee deaths" sem a alergia, outro ano que 1822, o mês, as "seven hives" ou "the first bees ever"; e a vespa europeia sem ano (1959 só em resumo; a fonte oficial não foi lida) e sem "mata mais" (fatos-c §2; o acréscimo da Sala)',
    julga: (f, ant, ctx) => {
      if (/\bEuropean\s+wasps?\b|\bVespula\b|\byellow\s*jackets?\b|\bGerman\s+wasps?\b/i.test(f) && (/\b19\d\d\b/.test(f) || /\bmore\s+than\b|\bmost\b|\bdeadlie\w*|\bkill\w*|\bdeaths?\b/i.test(f))) return "reprova";
      if (!(MEL.test(f) || (/^(?:It|They|The\s+bees?)\b/i.test(f) && MEL.test(ant || "")))) return null;
      if (/\b1[6-9]\d\d\b/.test(f) && !/\b1822\b/.test(f) && /\b(?:brought|introduced|imported|arrived|came|shipped|landed)\b/i.test(f)) return "reprova";
      if (/\b(?:seven|7)\s+hives\b|\bfirst\s+(?:honey\s*)?bees?\s+(?:ever|of\s+all)\b|\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+(?:of\s+)?1822\b/i.test(f)) return "reprova";
      if (/\bmore\s+(?:Australians|people|lives)?\s*(?:[\w-]+\s+){0,3}?than\s+(?:the\s+|all\s+the\s+)?snakes\b|\bdeadlier\s+than\s+(?:the\s+)?snakes\b/i.test(f)) return "reprova";
      if (/\bdeaths?\b|\bdie\b|\bdied\b|\bkill\w*|\bfatal\w*|\bkiller\b/i.test(f) && !/\ballerg\w*|\banaphyla\w*|\breactions?\b/i.test([f, ctx && ctx.prox ? ctx.prox(1) : ""].join(" "))) return "reprova";
      return null;
    } },
  { id: "soro-acabou",
    porque: 'o soro não zerou as mortes por cobra: 4 por ano em 1992–94, 2,2 em 2000–2016, 3,5 em 2016–2025 (fb §1.3); nunca "the antivenom ended snake deaths" (pauta §4.4 e §5)',
    julga: (f) => (semNeg(f, /\bantivenoms?\b[^.?!]{0,40}\b(?:ended|stopped|eliminated|wiped\s+out|put\s+an\s+end\s+to|ends|stops)\b[^.?!]{0,30}\b(?:snake\w*\s+)?deaths?\b|\bno\s+(?:one|longer)\b[^.?!]{0,20}\bdies?\s+(?:of|from)\s+(?:a\s+)?snake\w*/i, NEG_LARGA) ? "reprova" : null) },
  { id: "parque-causa",
    porque: 'o parque credita a falta de mortes da funnel-web a "antivenom and rapid medical treatment" (P1), e ele é parte interessada: nunca "The Reptile Park is why no one dies" (pauta §4.6 e §5)',
    julga: (f) => (/\b(?:Reptile\s+Park|the\s+park)\b[^.?!]{0,50}\b(?:is\s+(?:the\s+reason|why)|saves?\s+(?:every|all|countless)|keeps?\s+(?:everyone|people|Australians)\s+alive|is\s+what\s+keeps)\b|\bthanks\s+to\s+(?:the\s+)?(?:Reptile\s+)?Park\b[^.?!]{0,40}\b(?:no\s+one|nobody)\b|\bbecause\s+of\s+(?:the\s+)?(?:Reptile\s+)?Park\b/i.test(f) ? "reprova" : null) },
  { id: "fama-hospitais",
    porque: 'que a fama da Austrália vem da ciência e da medicina do país é hipótese de Arbuckle ("He wondered if part of this belief stems from…", P10), e vai como hipótese: nunca "Australia\'s reputation comes from its good hospitals"; vale "He has wondered whether part of that image comes from the country\'s "scientific capital"…" e "It\'s a thought, not a finding" (pauta §4.6 e §5; K1)',
    julga: (f) => (/\b(?:reputation|image|fame|famous)\b/i.test(f) && /\b(?:hospitals?|medic\w*|health\s*care|public\s+health|science|scientific|scientists|infrastructure|doctors)\b/i.test(f)
      && /\b(?:comes?|came|stems?|stemmed|grew|is\s+due|owes)\b|\bbecause\b|\bthanks\s+to\b/i.test(f)
      && !/\b(?:wonder\w*|thinks?|thought|suggest\w*|perhaps|maybe|might|may|could|hypothes\w*|guess\w*|propos\w*|whether|if\s+part|idea)\b/i.test(f) ? "reprova" : null) },
  // ---- o hoje (pauta §4.7 e §5)
  { id: "hoje",
    porque: 'o vídeo vale daqui a dois anos (voz §2): nada de "right now", "this year", "this summer" sobre o soro ou os bichos, e o TGA (o soro da cobra-preta "Unavailable" até 31/12/2026, e a falta dos outros) fica fora da voz (K9); as mortes por cobra, crocodilo ou tubarão de 2026 também (pauta §4.7 e §5)',
    julga: (f) => ((/\bright\s+now\b|\bthis\s+(?:year|summer|season|month|spring|winter)\b|\bat\s+the\s+moment\b|\bthese\s+days\b/i.test(f) && /\b(?:antivenom\w*|venom\w*|snakes?|spiders?|sharks?|croc\w*|jellyfish|bees?|wasps?|animals?|bites?|deaths?|killed)\b/i.test(f))
      || /\bTGA\b|\bTherapeutic\s+Goods\b/.test(f)
      || /\bantivenom\w*\b[^.?!]{0,40}\b(?:unavailable|shortage|short\s+supply|out\s+of\s+stock|ran\s+out|running\s+out|running\s+low)\b|\bshortage\s+of\s+(?:\w+\s+)?antivenom/i.test(f)
      || (/\b2026\b/.test(f) && /\b(?:snakes?|snakebites?|croc\w*|sharks?)\b/i.test(f) && /\b(?:died|deaths?|killed|fatal\w*)\b/i.test(f)) ? "reprova" : null) },
  // ---- o que a Sala decidiu depois da pauta (o registro; o pedido da Sala)
  { id: "15-por-cento",
    porque: 'o "about 15 percent" das cobras do mundo (a frase da jornalista da Live Science) não se sustenta: pela contagem da Sala no Reptile Database (18/11/2026), elapídeas e víboras, as de presa na frente, são 826 de 4.252 espécies, 19,4 %, "cerca de 1 em 5"; vale "about one in five", com "elapids and vipers" ou "front-fanged" (o registro, "A contagem das cobras"; o pedido da Sala)',
    julga: (f, ant) => (N15PCT.test(f) && COBRA_CTX.test(`${ant} ${f}`) ? "reprova" : null) },
  { id: "um-em-cinco",
    porque: 'o "cerca de 1 em 5" do mundo é a contagem das elapídeas e das víboras, as de presa na frente (826 de 4.252, 19,4 %), não a de "venomous" sozinho, que conta outras famílias: a frase leva "elapids and vipers" ou "front-fanged" nela ou na anterior (o registro, "A contagem das cobras"; o pedido da Sala)',
    julga: (f, ant) => (UM_EM_CINCO.test(f) && COBRA_CTX.test(`${ant} ${f}`) && ![f, ant].some((s) => /\belapids?\b[^.?!]*\bvipers?\b|\bvipers?\b[^.?!]*\belapids?\b|\bfront[\s-]fang\w*|\bfangs?\s+(?:in|at)\s+the\s+front\b/i.test(s)) ? "reprova" : null) },
  { id: "australian-museum",
    porque: 'o Australian Museum não foi lido: deu 403 ao robô e também no navegador do app (o registro, "Onde vive a cobra-marrom"): fora da voz (o South Australian Museum, de Michael Lee, é outro e passa) (o pedido da Sala)',
    julga: (f) => (/(?<!\bSouth\s)\bAustralian\s+Museum\b/.test(f) ? "reprova" : null) },
  // ---- o que o §4 ("Na fala") e o §7 ("O que fica fora da fala") põem na tela ou no fundo, onde um padrão pega sem barrar a forma segura
  { id: "na-tela-registro",
    porque: 'do livro do ABS, a voz diz os totais (85; 35; 42; os 8 que faltam; 154; 202; mais de mil) e a chance; ficam na tela ou fora (pauta §4.1, §4.6 e §7, "O que fica fora da fala"): a série ano a ano (os 9 de 2018, os 6 de 2025), o 1 em 4,6 milhões de 2025, a vida de 80 anos (só na tela, com "if today\'s rate held"), os 106 por mês e os 24 dias da estrada (os 1.276 de 2025), os 2.077 afogados e as razões (2,4 vezes, 11,9 vezes)',
    julga: (f) => ((/\b2018\b/.test(f) && /\b(?:snakes?|venom\w*|deaths?|died|killed)\b/i.test(f))
      || /\b4\.6\s+million\b|\bfour\s+point\s+six\s+million\b/i.test(f)
      || /(?<![\w.,])(?:6|six)\s+(?:[\w-]+\s+){0,3}?(?:in|during)\s+2025\b|\bin\s+2025\s+(?:alone\s+)?,?\s*(?:[\w-]+\s+){0,3}?(?:6|six)\s+(?:people|deaths|Australians)\b/i.test(f)
      || /\blifetime\b[^.?!]{0,40}\b(?:chance|odds|risk)\b|\b(?:chance|odds|risk)\b[^.?!]{0,40}\blifetime\b|\b(?:80|eighty)[\s-]years?\b[^.?!]{0,40}\b(?:life|lives|lifetime)\b|(?<![\w.,])37,900\b|\b(?:one|1)\s+in\s+(?:about\s+)?(?:38,000|37,900)\b/i.test(f)
      || /(?<![\w.,])(?:106|1,276)\b|\b(?:24|twenty[\s-]four)\s+days\b|\bone\s+hundred\s+(?:and\s+)?six\b/i.test(f)
      || /(?<![\w.,])2,077\b|(?<![\w.,])(?:2\.4|11\.9)\s+times\b|\b(?:about|almost|nearly)\s+(?:12|twelve)\s+times\b/i.test(f) ? "reprova" : null) },
  { id: "na-tela-deriva",
    porque: 'da deriva e das cobras, ficam na tela ou fora (pauta §4.2, §4.3 e §7): os 33,5 milhões do mar fundo, os 55 a 10 milhões da GA, o 1 a 4 milhões dos desertos, os 273 mamíferos, os ~100 e ~30 elapídeos (terrestres e marinhos), os ~160 do núcleo, os 10 a 12 milhões da radiação, os 11 + 1 e 2 + 1 casos da taipan, os 65 % da Live Science, o "Plioceno" dos ratos (NÃO CONFERIDO) e o "25 Ma" da colisão (NÃO CONFERIDO; na voz, "some 20 million years ago")',
    julga: (f) => (/(?<![\w.,])33\.5\b|\bthirty[\s-]three\s+(?:and\s+a\s+half|point\s+five)\b/i.test(f)
      || /(?<![\w.,])55\s+(?:and|to)\s+10\s+million\b|\bfifty[\s-]five\s+(?:and|to)\s+ten\s+million\b/i.test(f)
      || /(?<![\w.,])(?:1|one)\s*(?:to|and|-|–)\s*(?:4|four)\s+million\b/i.test(f) || /(?<![\w.,])273\b/.test(f)
      || /\b(?:100|(?:a|one)\s+hundred)\s+(?:terrestrial|land)\s+(?:species|elapids|kinds)\b|(?<![\w.,])(?:30|thirty)\s+(?:marine|sea)\s+(?:species|elapids|snakes|kinds)\b/i.test(f)
      || (/(?<![\w.,])160\b|\bone\s+hundred\s+(?:and\s+)?sixty\b/i.test(f) && COBRA.test(f))
      || /(?<![\w.,])(?:10|ten)\s*(?:to|and|-|–)\s*(?:12|twelve)\s+million\b/i.test(f)
      || /\b(?:11|eleven)\s+(?:previously\s+)?(?:well[\s-])?documented\b|\b(?:only\s+)?(?:2|two)\s+(?:were\s+)?(?:inflicted|caused)\s+by\s+wild\b/i.test(f)
      || /(?<![\w.,])(?:65|66|sixty[\s-]five|sixty[\s-]six)(?:\.\d+)?\s*(?:%|percent)/i.test(f) || /\bPliocene\b/i.test(f)
      || /(?<![\w.,])(?:25|twenty[\s-]five)\s+million\s+years\s+ago\b[^.?!]{0,60}\b(?:collid\w*|collision|hit|ran\s+into|crash\w*|bump\w*)\b|\b(?:collid\w*|collision|hit|ran\s+into|crash\w*|bump\w*)\b[^.?!]{0,60}(?<![\w.,])(?:25|twenty[\s-]five)\s+million\b/i.test(f) ? "reprova" : null) },
  { id: "na-tela-agua",
    porque: 'do mar, ficam na tela ou fora (pauta §4.5 e §7; K7): a 1 morte em 225 picadas de Darwin e das Tiwi, o polvo-de-anéis-azuis e o cone (fora da voz), e o 1935 da ilha Hayman',
    julga: (f) => (/(?<![\w.,])225\b/.test(f) || /\bblue[\s-]ring(?:ed)?\s+octop\w*|\bcone\s+snails?\b|\bcone\s+shells?\b|\bHayman\b|\b1935\b/i.test(f) ? "reprova" : null) },
  { id: "na-tela-soros",
    porque: 'dos soros e das mortes por cobra, ficam na tela ou fora (pauta §4.4, §4.5 e §7): os anos dos soros depois de 1930 (1955, 1956, 1958, 1962; o do redback é 1956, Wiener, MJA 2003, e vai à voz, "in 1956" ou "in the 1950s": é o [redback-ano]), o 1980 da liberação do da funnel-web (na voz, "in 1981"), os 224 pacientes do RAVE-II, os 4 das cobras-tigre e os 41 % da marrom (na voz, se entrar, "about four in ten")',
    julga: (f, ant) => ((/\b(?:1955|1956|1958|1962|1980)\b/.test(f) && /\bantivenom\w*|\bserum\b/i.test(`${ant} ${f}`) && !(/\b(?:1955|1956)\b/.test(f) && REDBACK.test(`${ant} ${f}`) && !/\b(?:1958|1962|1980)\b/.test(f))) || /(?<![\w.,])224\b/.test(f)
      || /\b(?:4|four)\s+(?:[\w-]+\s+){0,2}?tiger\s+snakes?\b|\btiger\s+snakes?\s+(?:[\w-]+\s+){0,2}?(?:4|four)\b|\btiger\s+\((?:4|four)\)/i.test(f)
      || /(?<![\w.,])(?:41|forty[\s-]one)\s*(?:%|percent)/i.test(f) ? "reprova" : null) },
  // ---- o fatos-c (pautas/australia-animais/_trabalho/fatos-c.md; o acréscimo da Sala, 18/11/2026)
  { id: "redback-ano",
    porque: 'o soro do redback é de 1956, dito por quem o fez (Wiener, carta ao MJA, 2003: "since antivenom became available in 1956"); o 1955 da base (o AFP de 2004) é o começo da pesquisa (Wiener: "Between 1955 and 1957, I dissected…"): nunca "1955" com o redback; vale "in 1956" e "in the 1950s" (fatos-c §3)',
    julga: (f, ant) => /\b1955\b/.test(f) && REDBACK.test(`${ant} ${f}`) ? "reprova" : null },
  { id: "soro-a-razao",
    porque: 'nenhuma fonte lida diz "a razão" de tão pouca gente morrer: o ASP-20 diz que não há ensaio controlado do soro e que a taxa de morte não mudou em dez anos, a diretriz da bandagem diz "no clear benefit" em campo, e a metade honesta do "part of why" é a pouca exposição (835 envenenados em dez anos): nunca "the reason", "that\'s why", "which is why", "is why", "because of" ou "thanks to" ligando o soro, a bandagem ou o primeiro socorro às poucas mortes; vale "Part of it is the medicine…" e "part of why" (fatos-c §1.4; o acréscimo da Sala)',
    julga: (f, ant) => {
      if (/\bpart\s+of\s+(?:why|the\s+reason|it|the\s+answer|the\s+story|that)\b/i.test(f)) return null;
      return /\bthe\s+(?:main\s+|real\s+|only\s+|big\s+|biggest\s+|simple\s+)?reasons?\b|\bthat['’]s\s+why\b|\bwhich\s+is\s+why\b|\b(?:is|are)\s+why\b|\bbecause\s+of\b|\bthanks\s+to\b|\bexplains?\s+why\b/i.test(f)
        && SORO_OU_BANDAGEM.test(`${ant} ${f}`)
        && /\bfew\b|\bsurviv\w*|\bdeaths?\b|\bdies?\b|\bdied\b|\bdying\b|\bkill\w*|\balive\b|\bsaved?\b|\blives\b/i.test(`${ant} ${f}`) ? "reprova" : null;
    } },
  { id: "anzcor-16",
    porque: 'o ANZCOR 9.4.1 diz "In the 16 years to 2016, 16 Australians were recorded as dying of snake bite", e o Welton que ele cita diz 35 mortes "ascribed or antecedent to a snake bite", das quais 16 diretas: o "16" do ANZCOR confunde os dois; use os 35 do ABS (2016–2025) (fatos-c §1.4; o acréscimo da Sala)',
    julga: (f) => /\b(?:16|sixteen)\s+Australians\b|\b(?:16|sixteen)\s+years\s+to\s+2016\b/i.test(f) ? "reprova" : null },
  { id: "carrapato-x25",
    porque: 'o X25 da CID-10 é "other venomous arthropods" (a OMS dá de exemplo a formiga e a lagarta) e o X26, "venomous marine animals and plants": o código não nomeia o carrapato nem a água-viva de cada morte, e o ABS só dá o código: nunca "ticks killed" com número, "6 tick deaths", "the other eight were ticks…" nem "2 box jellyfish deaths"; vale "other venomous arthropods", "venomous marine animals" e "the records don\'t say which animal it was" (fatos-c §4.1; o acréscimo da Sala)',
    julga: (f) => {
      const semAno = f.replace(/\b(?:1[89]|20)\d\d\b/g, "");
      if (/\bticks?\b/i.test(f) && /\bkill\w*|\bdeaths?\b|\bdied\b|\bdie\b|\bwere\b|\bwas\b/i.test(f) && new RegExp(NUMR, "i").test(semAno)) return "reprova";
      return /\b(?:2|two)\s+(?:box\s+)?jellyfish\s+(?:deaths|victims)\b|\b(?:box\s+)?jellyfish\s+(?:killed|caused)\s+(?:2|two)\b|\b(?:6|six)\s+(?:ant|tick|caterpillar)\s+(?:deaths|victims)\b/i.test(f) ? "reprova" : null;
    } },
  { id: "na-tela-quem-mata",
    porque: 'dos animais sem veneno, a voz diz os 154 e os 13 dos crocodilos; ficam na tela ou fora (pauta §4.6 e §7): os 42 cães, os 63 outros mamíferos, os 64 cavaleiros (e as 64 mortes da tabela de Welton), os 127 do proxy, as 6,5 mortes por ano nas fazendas, os 75 cavalos, os 31 bois e os 81 %',
    julga: (f) => (/(?<![\w.,])(?:42|forty[\s-]two)\s+(?:[\w-]+\s+){0,2}?(?:by\s+)?dogs?\b|\bdogs?\s+(?:[\w-]+\s+){0,2}?(?:42|forty[\s-]two)\b/i.test(f)
      || /(?<![\w.,])(?:63|64|127|sixty[\s-]three|sixty[\s-]four)\b(?=[^.?!]*\b(?:mammals?|riders?|horses?|carts?|deaths?|died|killed)\b)/i.test(f)
      || /(?<![\w.,])6\.5\b|\bsix\s+and\s+a\s+half\s+(?:deaths|people)\b/i.test(f)
      || /(?<![\w.,])(?:75|seventy[\s-]five)\s+(?:[\w-]+\s+)?horses?\b|(?<![\w.,])(?:31|thirty[\s-]one)\s+(?:[\w-]+\s+)?(?:cattle|cows|bulls)\b|(?<![\w.,])(?:81|eighty[\s-]one)\s*(?:%|percent)/i.test(f) ? "reprova" : null) },
  { id: "na-tela-parque",
    porque: 'do parque, ficam na tela ou fora (pauta §4.7 e §7): os 15 pontos de entrega e os 2.000 filhotes',
    julga: (f) => (/\b(?:15|fifteen)\s+(?:official\s+)?(?:spider\s+)?(?:drop[\s-]?off|collection|donation)\b|(?<![\w.,])2,000\s+(?:[\w-]+\s+)?(?:spiders|spiderlings|juveniles|young|babies)\b|\btwo\s+thousand\s+(?:[\w-]+\s+)?(?:spiders|spiderlings|juveniles)\b/i.test(f) ? "reprova" : null) },
];
// o que se mede por parágrafo: a fala citada pode atravessar a frase. As paráfrases da jornalista da Live Science não são falas de Arbuckle
// nem de Lee: entre aspas, reprovam
const NAO_SE_DIZ_PAR = [
  { id: "aspas-da-jornalista",
    porque: 'na matéria da Live Science (26/11/2023), "These deadly serpents account for 65%…, though only about 15% of the world\'s snakes are venomous" e "Aside from snakes, however, Arbuckle argued Australia\'s venomous fauna are actually well within typical range" são frases da jornalista, e "the first snakes" e "an accident of history" são paráfrases dela: nada disso vai entre aspas como fala de Lee ou de Arbuckle; "The exception, he says, is the snakes" vai sem aspas (pauta §4.1 e "P10")',
    re: /\bexception\b[^"”]*\bsnakes?\b|\bwell\s+within\s+(?:the\s+)?typical\s+range\b|\bonly\s+about\s+15\s*(?:%|percent)|\b65\s*(?:%|percent)|\baccident\s+of\s+history\b|\bfirst\s+snakes\b/i },
];
const trechosCitados = (p) => [...p.matchAll(/"([^"]+)"|“([^”]+)”|‘([^’]+)’/g)].map((m) => m[1] ?? m[2] ?? m[3]);

// ---- os ALERTA da Austrália (conferir, nunca reprovar): {id, porque, testa(frase, a anterior, ctx)}; os que contam o texto inteiro vêm
// depois, junto da aplicação
const CAUSA = /\bbecause\b|\bthe\s+reason\b|\bthat['’]s\s+why\b|\bwhich\s+is\s+why\b|\bexplains?\s+why\b|\bdue\s+to\b|\bcaused\s+by\b/i;
const ALERTA_AU = [
  // ---- o acréscimo da Sala (18/11/2026, ~16:3x): a pergunta atribuída, o Censo e o fatos-c
  { id: "pergunta-atribuida", porque: 'a pergunta do Lucas ("Why does Australia have so many dangerous animals?") dita por outros passa e paga o título 1; confira a moldura: quem pergunta é gente de verdade (a leitora australiana: "É a pergunta que todo estrangeiro me faz há vinte anos"), e o narrador não a assume como fato logo depois (o acréscimo da Sala)',
    testa: (f, ant, ctx) => TANTOS_BICHOS.test(f) && !REPUTACAO.test(f) && atribuida(f, ant, ctx) },
  { id: "censo-preciso", porque: 'a precisão da medida não vai à voz (o ajuste aleatório do ABS, o centroide, a divisa de 2 km): "1,020", "2,133", "117,411" e os outros números finos da conta; na voz, "about a thousand people", "more than a thousand times… per square mile", "about 117,000 square miles"; na tela, "≈ 1,000" (medida-censo.md §8; o acréscimo da Sala)',
    testa: (f) => CENSO_PRECISO.test(f) },
  { id: "censo-causa", porque: 'a medida mostra onde a gente mora, não por que a marrom mata mais: "because", "that\'s why" ou "so … kills" ligando o Censo às mortes vira causa; "You can guess which one kills" deixa a conta com quem assiste (medida-censo.md §6 e §8; o acréscimo da Sala)',
    testa: (f, ant) => !pergunta(f) && CENSO_CTX.test([ant, f].join(" ")) && /\bkill\w*|\bdeaths?\b|\bdied\b|\bdies?\b|\bbites?\b/i.test(f)
      && (CAUSA.test(f) || /\bso\b[^.?!]{0,80}\bkill\w*|^So\b/i.test(f)) },
  { id: "marrom-genero", porque: 'as 17 mortes do estudo nacional (ASP-20) são de "brown snakes", o gênero, e a página do Queensland Museum é da eastern brown (Pseudonaja textilis): "eastern brown" junto das 17 mortes as atribui só à oriental (medida-censo.md §6; o acréscimo da Sala)',
    testa: (f, ant, ctx) => {
      const N17 = /(?<![\w.,])(?:17|seventeen)\b/i, ORIENTAL = /\beastern\s+browns?\b/i;
      return (ORIENTAL.test(f) && [ant, f, ctx.prox(1)].some((s) => N17.test(s || ""))) || (N17.test(f) && /\bbrown/i.test(f) && [ant, ctx.prox(1)].some((s) => ORIENTAL.test(s || "")));
    } },
  { id: "struan", porque: 'o primeiro nome de Sutherland ("Struan") não está em fonte lida: o resumo da Lancet de 1979 traz só "Sutherland SK" (fatos-c §1.2; o acréscimo da Sala)',
    testa: (f) => /\bStruan\b/.test(f) },
  { id: "abelha-73", porque: 'os 73 % da abelha-de-mel nas mortes por picada de inseto (1997–2013) são de segunda mão (a revisão de Turner 2017 sobre Mullins 2016, que está atrás de paywall): na voz, "roughly three in four" com o estudo e o período, ou sem número (fatos-c §2.2; o acréscimo da Sala)',
    testa: (f, ant) => /(?<![\w.,])(?:73|seventy[\s-]three)\s*(?:%|percent)/i.test(f) && ABELHA.test([ant, f].join(" ")) },
  { id: "live-science",porque: '"a biologist told Live Science" no meio da fala faz a voz tropeçar (Mia, no teste dos leitores), e a contagem da Sala (o Reptile Database) pode ir com o nosso dono; mas o "overstated" de Arbuckle pode precisar da matéria: confira se "Live Science" na voz é preciso (o pedido da Sala; o registro)',
    testa: (f) => /\bLive\s+Science\b/i.test(f) },
  { id: "duas-em-tres", porque: 'a pauta (§4.1 e §5) proibia "two in three" até a contagem conferida, e a Sala a conferiu no Reptile Database (18/11/2026: 150 das 229 espécies da Austrália são elapídeas, 65,5 %; o registro): confira que a frase diz elapídeas, as de presa na frente (ou "venomous" com o dono), e que a contagem vai uma vez na voz',
    testa: (f, ant) => DUAS_EM_TRES.test(f) && COBRA.test(`${ant} ${f}`) },
  { id: "contagem-dono", porque: 'a contagem das cobras vai com o dono, na voz, na frase ou numa vizinha (voz §1: "toda afirmação contestável tem a fonte dita na voz"): a de 2023, "a biologist told Live Science" (145 de 220); a da Sala, o Reptile Database (150 de 229, lida em 18/11/2026) (pauta §4.1; o registro)',
    testa: (f, ant, ctx) => contaAU(f) && !DONO_CONTA.test([ant, f, ctx.prox(1)].join(" ")) },
  { id: "veneno-terra", porque: 'a fonte diz "the most potent venom of any land snake on earth" (a ficha da Austrália do Sul, P6): o superlativo "on Earth" ou "in the world" vai com "land" (as cobras-do-mar ficam fora da conta); vale "the land snake with the most potent venom on Earth" (pauta §4.3, §5 e §8)',
    testa: (f) => VENENO_SUPER.test(f) && /\bon\s+(?:Earth|the\s+planet)\b|\bin\s+the\s+world\b|\b(?:world|planet|Earth)['’]s\b/i.test(f) && !/\bland\b/i.test(f) },
  { id: "fama-dono", porque: 'a fama "exagerada" é de Arbuckle ("for the most part … overstated", P10), dita com o dono; sem ele, é juízo do narrador (voz §1: "cada ator nos próprios termos, e atribuído") (pauta §4.1 e §5; K1)',
    testa: (f, ant) => /\boverstated\b|\bexaggerat\w*|\boverblown\b|\boverrated\b|\boverhyped\b/i.test(f) && !/\bArbuckle\b|\b(?:says?|said|argues|argued|according|called|calls|told|wondered)\b/i.test(`${ant} ${f}`) },
  { id: "marrom-dono", porque: 'o endereço da marrom tem dono: o Queensland Museum (lido pela Sala em 18/11/2026: "Found over most of Queensland, New South Wales and Victoria"; "It has adapted well to farmed, grazed and semi-urban lands"), na voz ou na tela (o registro, "Onde vive a cobra-marrom"; pauta §4.4)',
    testa: (f, ant, ctx) => (MARROM.test(`${ant} ${f}`) || /^The\s+other\b/i.test(f)) && /\bfarm\w*|\bgraz\w*|\bsemi[\s-]urban\b|\bwhere\s+people\b|\bnear\s+people\b|\bNew\s+South\s+Wales\s+and\s+Victoria\b|\ball\s+habitats\b/i.test(f)
      && !/\bmuseum\b/i.test([ctx.prox(-2), ant, f, ctx.prox(1)].join(" ")) },
  { id: "parque-dono", porque: 'o parque é parte interessada: o "significantly more potent" dos machos e o "not a single person has died" vão com "the park says" (P1; pauta §4.7, o fecho)',
    testa: (f, ant) => /\b(?:Reptile\s+Park|the\s+park)\b/i.test(`${ant} ${f}`) && /\bmore\s+potent\b|\b(?:no\s+one|nobody|not\s+a\s+single\s+person)\s+has\s+(?:ever\s+)?died\b/i.test(f) && !/\b(?:says?|said|according|in\s+its\s+words)\b/i.test(f) },
  { id: "colisao-20", porque: 'o "some 20 million years ago" da colisão é a leitura da pauta do "Early Miocene" (23 a 16 milhões) do resumo de Hall (2013, [R]); o verificador confere (pauta §4.2; K6)',
    testa: (f) => /(?<![\w.,])(?:20|twenty)\s+million\s+years\b/i.test(f) && /\b(?:running\s+into|ran\s+into|run\s+into|collid\w*|collision|hit|bump\w*|crash\w*)\b/i.test(f) },
  { id: "primeiro-soro", porque: '"the world\'s first antivenom for a jellyfish, in 1970" lê o "including the first marine antivenoms in the world (1956: stonefish antivenom; 1970: box jellyfish)" de Winkel et al. 2006 ([R]); o verificador confere a leitura de "first" (pauta §4.5; K10)',
    testa: (f, ant) => /\bfirst\s+(?:\w+\s+)?antivenoms?\b/i.test(f) && AGUA_VIVA.test(`${ant} ${f}`) },
  { id: "internacoes-aihw", porque: 'os "about 12,000" das aranhas são a tabela do comunicado de Welton (EM PARTE: o período não fecha), "até o AIHW" (pauta §4.1 e §11, item 5); a tela leva "Welton et al., 2017"',
    testa: (f) => /(?<![\w.,])12,000\b|\btwelve\s+thousand\b/i.test(f) && /\bhospital\w*|\badmi\w*/i.test(f) },
  { id: "funnel-found", porque: '"A team that studied the toxin found it started out as…": o verificador confere se "found" pesa mais que a fonte ("we propose that the δ-HXTXs were repurposed…"); se pesar, "thinks it started out" (pauta §4.5)',
    testa: (f) => /\bfound\s+(?:that\s+)?(?:it|the\s+toxin|the\s+venom|its\s+venom)\s+(?:started|began|evolved|was\s+first)\b/i.test(f) },
  { id: "amostra-pequena", porque: 'as amostras pequenas vão ditas em voz alta (o Arjun, no teste dos leitores): as 23 mortes por cobra com "study", "over a decade" ou o equivalente perto (é um estudo nacional de 2005–2015, P3), e as 13 da funnel-web com "at least" ou "before 1981" (a revisão achou 13; não é um censo, fa D2) (pauta §4.4 e §4.5; o pedido da Sala)',
    testa: (f, ant) => (N23.test(f) && /\b(?:deaths?|died|killed|people)\b/i.test(f) && !/\bstud(?:y|ies|ied)\b|\bsurvey\b|\bdecade\b|\b(?:ten|10|eleven|11)\s+years\b|\b2005\b|\b2015\b/i.test(`${ant} ${f}`))
      || (N13.test(f) && (FUNIL.test(`${ant} ${f}`) || ARANHA.test(f)) && /\b(?:deaths?|died|killed|people)\b/i.test(f) && !/\bat\s+least\b|\bbefore\s+1981\b/i.test(f)) },
  { id: "hipotese-como-causa", porque: 'três explicações são hipóteses dos autores e vão como hipótese ("researchers think", "probably", "the team proposes", "he has wondered"), nunca com "because" nem "the reason": a fama vinda da ciência e da medicina do país (Arbuckle, "wondered"), o porquê de a taipan picar e soltar (Jackson, "probably an adaptation") e o veneno da funnel-web (o PNAS, "we propose") (pauta §3, "a hipótese dita como hipótese"; §4.3, §4.5 e §4.6; o pedido da Sala)',
    testa: (f, ant) => CAUSA.test(f) && (
      (/\b(?:reputation|image|fame|famous)\b/i.test(`${ant} ${f}`) && /\b(?:medic\w*|hospitals?|health|science|scientific|infrastructure|doctors)\b/i.test(f))
      || /\bbites?\s+once\b|\bpulls?\s+back\b|\blets?\s+go\b|\breleas(?:es|ed|ing)?\s+(?:it|them|its\s+(?:prey|grip|hold)|the\s+(?:rat|prey))\b|\bretaliat\w*|\bbite\s+back\b|\bwaits?\s+for\s+(?:the|its)\s+(?:rat|prey)\b|\badaptation\b/i.test(f)
      || (/\binsects?\b|\brepurpos\w*|\bcoincidence\b|\blizards?\b|\bbandicoots?\b|\bpredators?\b|\bdefen[cs]e\b|\bevolv\w*|\bevolution\w*/i.test(f) && (FUNIL.test(`${ant} ${f}`) || /\btoxins?\b|\bvenoms?\b/i.test(f)))) },
];
// ---- a conta dos números falados (a do Columbia: cada número dito em algarismo, com o "million"/"billion"/"thousand" que vem junto, e
// cada número por extenso seguido de medida ou depois de um quantificador; "one" e o número por extenso sem medida não contam; uma faixa
// conta uma vez, e a data também, só o ano). Os três ajustes deste vídeo: (1) a razão ("one in three million", "1 in 3 million",
// "one-in-five") conta uma vez, sempre; (2) o número por extenso conta também antes de "of them/those/these" ("Seventeen of them", "Ten of
// those people") e das medidas do vídeo ("species", "kinds", "snakes", "deaths", "cases", "bites", "Australians", "spiders", "milkings"); (3)
// a palavra de escala sozinha depois de "few", "several" ou "many" ("the last few million years") não conta. A pauta §7 conta também
// "half" e os dois anos de "2016 to 2025"; o portão, não (a faixa conta uma vez)
const MAX_NUMEROS = 50;
const MEDIDA = "percent|per\\s+cent|million|billion|thousand|hundred|miles?|mi|kilomet(?:er|re)s?|km|feet|foot|ft|inch(?:es)?|acre[\\s-]f(?:ee|oo)t|acres?|hectares?|cubic|years?|weeks?|months?|days?|hours?|minutes?|seconds?|decades?|centur(?:y|ies)|times|dollars|people|species|kinds|snakes|deaths|cases|bites|Australians|spiders|milkings|of\\s+(?:them|those|these)";
const RAZAO = String.raw`\b(?:one|1)[\s-]+in[\s-]+(?:every\s+)?(?:\d[\d,]*(?:\.\d+)?(?:[\s-]+(?:million|billion|thousand))?|(?:${NUM_PALAVRAS})(?:[\s-]+(?:${NUM_PALAVRAS}))*)\b`;
const NUM_CONTA = new RegExp(String.raw`${RAZAO}|(?<![\w.,])\$?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?(?:[\s-]+(?:million|billion|thousand))?|(?<![\w-])(?:${NUM_PALAVRAS})(?:[\s-]+(?:and[\s-]+)?(?:a\s+half|one|${NUM_PALAVRAS}))*\b`, "gi");
const DEPOIS_MEDIDA = new RegExp(String.raw`^['’]?[\s-]*(?:%|(?:${MEDIDA})\b)`, "i");
const QUANTIF_ANTES = /\b(?:about|nearly|almost|roughly|around|some|more\s+than|less\s+than|fewer\s+than|over|under|at\s+least|only|just|exactly)\s+(?:a\s+)?$/i;
const ESCALA_SO = /^(?:hundred|thousand|million|billion|dozen)$/i, POUCOS_ANTES = /\b(?:few|several|many)\s+$/i;
const DIA_DA_DATA = new RegExp(String.raw`\b(${MESES})\s+\d{1,2}(?:st|nd|rd|th)?,?\s+(?=\d{4}\b)`, "g");
function numerosDe(f) {
  const s = f.replace(DIA_DA_DATA, "$1 ");
  const achados = [];
  for (const m of s.matchAll(NUM_CONTA)) {
    const razao = /^(?:one|1)[\s-]+in\b/i.test(m[0]);
    if (!razao && ESCALA_SO.test(m[0]) && POUCOS_ANTES.test(s.slice(0, m.index))) continue;
    if (!razao && !/\d/.test(m[0]) && !DEPOIS_MEDIDA.test(s.slice(m.index + m[0].length)) && !QUANTIF_ANTES.test(s.slice(0, m.index))) continue;
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
    "roteiros/praia-do-cassino/roteiro-narrador.md", "roteiros/rio-columbia/roteiro-narrador.md"];
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
if (palavras < MIN_PALAVRAS) problemas.push(`palavras: ${palavras}, abaixo de ${MIN_PALAVRAS} (a faixa do vídeo 8: o pedido da Sala; a pauta §7 orça ~2.611 palavras, 14,6 min a 179)`);
if (palavras > MAX_PALAVRAS) problemas.push(`palavras: ${palavras}, acima de ${MAX_PALAVRAS} (a faixa do vídeo 8: o pedido da Sala; a pauta §7 orça ~2.611 palavras, 14,6 min a 179; o cético da v1: "16 min, não")`);
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

// ---- a Austrália: os títulos, a primeira frase, o "não se diz", os alertas, os números e o que vai uma vez -------------------------------
// as frases destas regras: as das taxas (o ponto do "U.S.", do "a.m." e do decimal não parte a frase), sem as aspas de abertura; e, para
// o que olha aspas, as mesmas frases com as aspas (frasesRaw). parDe[i] e kDe[i]: o parágrafo da frase i e o lugar dela nele
const porPar = paragrafos.map(frasesTaxaDe);
const frasesRaw = porPar.flat();
const frasesC = frasesRaw.map(abertura);
const parDe = [], kDe = [];
porPar.forEach((fs, P) => fs.forEach((_, k) => { parDe.push(P); kDe.push(k); }));
const iAssC = frasesC.findIndex((f) => ASSINATURA.test(f));
// o gancho destas regras: as frases antes da assinatura; sem assinatura (o molde já reprova), as do 1º parágrafo
const iGancho = iAssC >= 0 ? iAssC : frasesC.filter((_, i) => parDe[i] === 0).length;
const gancho = frasesC.slice(0, iGancho), ganchoC = gancho.join(" ");
// os três títulos do Test & Compare (o Lucas, 18/11/2026, ~14:1x; roteiros/australia-animais/decisoes-lucas.md), pagos no gancho
// (embalagem §2: o núcleo se paga nas 3 primeiras frases)
const T3 = '"Australia\'s Deadliest Snake Isn\'t Its Most Venomous One"', T2 = '"Why So Few People Die From Australia\'s Deadly Animals"', T1 = '"Why Does Australia Have So Many Dangerous Animals?"';
const tres = frasesC.slice(0, 3);
if (!tres.some((f) => VENENO_SUPER.test(f))) problemas.push(`título [titulo-3-veneno]: nenhuma das 3 primeiras frases tem o superlativo do veneno ("most potent venom", "most venomous", "most toxic", "deadliest venom"): o título ${T3} se paga ali (é o mais clicado no teste, 6,75, e o par mais forte com a miniatura "NOT THE KILLER", 8,25; embalagem §2; o pedido da Sala)`);
if (!tres.some(mataNegado)) problemas.push(`título [titulo-3-mata]: nenhuma das 3 primeiras frases diz que ela não é a cobra que mata (uma forma de "kill"/"killer"/"deadliest" com "isn't"/"is not"/"not even", ou "another snake"/"a different snake"/"somewhere else" fazendo a matança): o título ${T3} se paga ali; a pauta §8 propõe "And it isn't even the snake that kills the most Australians." ("it rarely kills" e "it has never killed" não pagam: a base não tem morte nenhuma lida por taipan-do-interior; o pedido da Sala)`);
gancho.forEach((f, i) => {
  if (VENENO_SUPER.test(f) && !CAMUNDONGO.test(f) && !CAMUNDONGO.test(frasesC[i + 1] || "")) problemas.push(`título [ressalva-camundongo]: o superlativo do veneno no gancho sem "mice", "mouse", "lab" ou "laboratory" na mesma frase ou na seguinte (o posto é de um teste em camundongo, de 1979: pauta §2, §5 e §8; os leitores acharam que "as measured on lab mice" no meio da frase 1 faz a voz tropeçar: a ressalva pode ir à frase 2): "${f.slice(0, 110)}"`);
});
if (!gancho.some((f) => N85.test(f) && /\bpeople\b|\bdeaths?\b|\bdied\b|\bkilled\b/i.test(f))) problemas.push(`título [titulo-2-registro]: o gancho não diz os 85 ("85" ou "eighty-five" com "people", "deaths", "died" ou "killed" na mesma frase): o título ${T2} se paga no gancho, com o livro do ABS de 2016–2025 (pauta §4.1 e §8; o pedido da Sala)`);
if (!gancho.some((f) => /\broads?\b/i.test(f) && /\bmonths?\b/i.test(f))) problemas.push(`título [titulo-2-estrada]: o gancho não diz a estrada num mês ("road"/"roads" e "month" na mesma frase): é o que paga a miniatura "10 YEARS OF VENOM < 1 MONTH" do título ${T2} (os 85 de dez anos contra os 106 de um mês médio de 2025; pauta §4.1 e §8; o pedido da Sala)`);
// o título 1 se paga com a contagem das cobras, ou com a pergunta dele atribuída a outros ("Every visitor asks…"; o acréscimo da Sala)
const perguntaAtribuidaNoGancho = gancho.some((f, i) => TANTOS_BICHOS.test(f) && !REPUTACAO.test(f) && atribuida(f, frasesC[i - 1] || "", { prox: (k) => frasesC[i + k] || "" }));
if (!gancho.some(contagemT1) && !perguntaAtribuidaNoGancho) problemas.push(`título [titulo-1]: o gancho não diz a contagem das cobras venenosas da Austrália (um número ou uma fração com "snake(s)"/"species"/"kinds" e "venomous"/"elapid(s)" na mesma frase; a fração só do mundo não paga) nem a pergunta do título atribuída a outros ("Every visitor asks: why does Australia have so many dangerous animals?"): o título do Lucas, ${T1}, se paga ali, com o que a base sustenta ou com as palavras dele (pauta §3, §8 e K1; o pedido e o acréscimo da Sala)`);
if (!/\bdangerous\b|\bdeadly\b/i.test(ganchoC)) alertas.push(`título [titulo-1-palavra]: nem "dangerous" nem "deadly" no gancho, as palavras dos títulos do Lucas (${T1}) e do 2 (os leitores acharam "dangerous" vago, e a pergunta da pauta fala de cobras venenosas: o alerta só lembra quem escreve; o pedido da Sala)`);
// a primeira frase (voz §1, "Os números da fala"): o fato mais surpreendente sobre o lugar da imagem de abertura (o aéreo das planícies do
// Channel Country, pauta §6), com o nome do lugar e um número ou uma imagem; e o fio do vídeo, o veneno
const primeira = frasesC[0] || "";
if (!/\bvenom\w*/i.test(primeira)) problemas.push(`a primeira frase não diz "venom"/"venomous" (o fio do vídeo: o veneno contra o registro; pauta §8; o pedido da Sala): "${primeira.slice(0, 110)}"`);
if (!/\bAustralia\w*|\boutback\b/i.test(primeira)) problemas.push(`a primeira frase não diz "Australia", "Australian" nem "outback" (o lugar da imagem de abertura, as planícies do Channel Country; voz §1, "Os números da fala"; pauta §6 e §8): "${primeira.slice(0, 110)}"`);
if (!/\d/.test(primeira) && !RE_NUM_EXTENSO.test(primeira)) alertas.push(`a primeira frase não tem número (algarismo ou por extenso): ela é o fato mais surpreendente sobre o lugar da imagem de abertura, concreto, com o nome do lugar e um número ou uma imagem (voz §1, "Os números da fala"); sem número, confira que a imagem concreta está lá: "${primeira.slice(0, 110)}"`);
// o "não se diz" e os alertas da Austrália, frase a frase (a anterior vale para o que a frase diz por pronome; a posição, para o gancho)
frasesC.forEach((f, i) => {
  const ant = i > 0 ? frasesC[i - 1] : "";
  const ctx = { i, iAss: iAssC, iGancho, noGancho: i < iGancho, frases: frasesC, prox: (k) => frasesC[i + k] || "" };
  for (const r of NAO_SE_DIZ) {
    const v = r.julga(f, ant, ctx);
    if (v === "reprova") problemas.push(`não se diz [${r.id}] (${r.porque}): "${f.slice(0, 110)}"`);
    else if (v === "alerta") alertas.push(`conferir [${r.id}] (${r.alerta || r.porque}): "${f.slice(0, 100)}"`);
  }
  for (const a of ALERTA_AU) if (a.testa(f, ant, ctx)) alertas.push(`conferir [${a.id}] (${a.porque}): "${f.slice(0, 100)}"`);
});
// o que se mede por parágrafo (a fala citada atravessa a frase): reprova dentro de aspas
paragrafos.forEach((p) => {
  for (const c of trechosCitados(p)) for (const r of NAO_SE_DIZ_PAR) if (r.re.test(c)) problemas.push(`não se diz [${r.id}] (${r.porque}): "${c.slice(0, 110)}"`);
});
// os termos definidos na primeira vez (voz §1: "todo termo técnico é definido na primeira vez", numa oração; pauta §3, "As palavras que o
// público de fora da Austrália não tem"), da frase anterior às duas seguintes
const TERMOS = [
  ["elapids", /\belapids?\b/i, /\bfront[\s-]fang\w*|\bcobras?\b|\bfangs?\s+(?:in|at)\s+the\s+front\b/i, '"the elapids, front-fanged snakes, the family that cobras belong to"'],
  ["LD50", /\bLD[\s-]?50\b|\bL-D-fifty\b/i, /\bdose\s+that\s+kills\s+half\b|\bhalf\s+(?:of\s+)?the\s+(?:mice|animals)\b/i, '"the dose that kills half the mice in a test, what scientists call the LD50"'],
  ["anaphylaxis", /\banaphyla\w*/i, /\ballergic\b|\ballergy\b/i, '"anaphylaxis, a severe allergic reaction"'],
  ["Gondwana", /\bGondwana\b/i, /\bsupercontinent\b/i, '"an old supercontinent called Gondwana"'],
  ["stinger season", /\bstinger\s+season\b/i, /\bOctober\b|\bJune\b/i, '"each "stinger season," which runs from October to June"'],
];
for (const [nome, uso, def, como] of TERMOS) {
  const iT = frasesC.findIndex((f) => uso.test(f));
  if (iT >= 0 && !def.test([frasesC[iT - 1] || "", frasesC[iT], frasesC[iT + 1] || "", frasesC[iT + 2] || ""].join(" "))) alertas.push(`conferir [termo-definido] ("${nome}" na primeira vez sem a definição numa oração, da frase anterior às duas seguintes: voz §1; pauta §3, por exemplo ${como}): "${frasesC[iT].slice(0, 100)}"`);
}
// Arbuckle com o nome e o lugar na primeira vez (pauta §4.1: "com o nome e o lugar"; na tela, "Kevin Arbuckle, Swansea University, to Live
// Science (2023)")
const iArb = frasesC.findIndex((f) => /\bArbuckle\b/.test(f));
if (iArb >= 0 && !/\bSwansea\b|\bbiologist\b|\bprofessor\b|\bscientist\b|\bresearcher\b/i.test([frasesC[iArb - 1] || "", frasesC[iArb], frasesC[iArb + 1] || ""].join(" "))) alertas.push(`conferir [arbuckle-quem] (Arbuckle na primeira vez sem quem ele é: "Kevin Arbuckle, an evolutionary biologist at Swansea University"; pauta §4.1): "${frasesC[iArb].slice(0, 100)}"`);
// a pergunta do gancho: uma, e um porquê só (a Mia, no teste dos leitores: a pergunta dupla do fim do gancho)
gancho.forEach((f, i) => {
  if (!pergunta(f)) return;
  const prox = frasesC[i + 1] || "";
  if ((f.match(/\bwhy\b/gi) || []).length >= 2 || /\band\s+why\b/i.test(f)) alertas.push(`conferir [pergunta-dupla] (a pergunta do gancho com dois "why", ou juntas por "and why": os leitores pediram uma pergunta só no fim do gancho, Mia; o pedido da Sala): "${f.slice(0, 110)}"`);
  else if (i + 1 < iGancho && pergunta(prox) && /^And\b/i.test(prox)) alertas.push(`conferir [pergunta-dupla] (duas perguntas juntas, a segunda aberta por "And": os leitores pediram uma pergunta só no fim do gancho, Mia; o pedido da Sala): "${f.slice(0, 60)} ${prox.slice(0, 60)}"`);
});
// os 8 que faltam: o 35 das cobras e o 42 das abelhas e vespas ditos pedem os outros 8 (X25, outros artrópodes, 6; X26, marinhos, 2: 35 +
// 42 + 6 + 2 = 85) no mesmo parágrafo ou no seguinte (Mia, Arjun e Tunde: "fico preso nisso e perco a frase seguinte"; o registro)
const OITO = /\b(?:8|eight)\b|\barthropods?\b|\bticks?\b|\bants\b|\bcentipedes?\b|\bscorpions?\b|\bmarine\b|\bjellyfish\b|\bsea\s+(?:animals|creatures|life)\b|\bin\s+the\s+(?:sea|ocean|water)\b/i;
const i35 = frasesC.findIndex((f, i) => N35.test(f) && COBRA.test(`${frasesC[i - 1] || ""} ${f}`));
const i42 = frasesC.findIndex((f, i) => N42.test(f) && ABELHA.test(`${frasesC[i - 1] || ""} ${f}`));
if (i35 >= 0 && i42 >= 0) {
  const P = Math.max(parDe[i35], parDe[i42]);
  if (!OITO.test([paragrafos[P], paragrafos[P + 1] || ""].join(" "))) alertas.push(`conferir [oito-que-faltam] (o 35 das cobras e o 42 das abelhas e vespas ditos, e nenhuma conta dos outros 8 no mesmo parágrafo ou no seguinte: X25, outros artrópodes, 6, e X26, animais marinhos, 2, somam 85; os leitores ficaram presos na conta; o pedido da Sala): "${frasesC[Math.max(i35, i42)].slice(0, 100)}"`);
}
// a contagem de lá com a fração de cá: a Live Science conta "venomous" (145 de 220), e o "cerca de 1 em 5" do mundo é de elapídeas e víboras;
// a comparação é a mesma régua dos dois lados (150 de 229 elapídeas, o Reptile Database, contra elapídeas e víboras, cerca de 1 em 5)
const iLS = frasesC.findIndex((f) => /(?<![\w.,])(?:145|220)\b/.test(f) && contaAU(f));
const iMundo = frasesC.findIndex((f, i) => UM_EM_CINCO.test(f) && COBRA_CTX.test(`${frasesC[i - 1] || ""} ${f}`));
if (iLS >= 0 && iMundo >= 0) alertas.push(`conferir [contas-iguais] (a contagem da Live Science, "venomous", 145 de 220, ao lado do "cerca de 1 em 5" do mundo, que é de elapídeas e víboras, as de presa na frente: a régua tem de ser a mesma dos dois lados; a da Sala, 150 de 229 elapídeas no Reptile Database contra 826 de 4.252 elapídeas e víboras; o registro): "${frasesC[iLS].slice(0, 60)}" × "${frasesC[iMundo].slice(0, 60)}"`);
// o que vai uma vez na voz (o pedido da Sala): o 85 e o "one in three million"; a contagem das cobras (a pauta: "volta como imagem, sem
// repetir os números na voz") e a fração do mundo; e a estrada num mês, com morte na frase (a estrada repetida saiu na v2, K7; sem a
// morte, "the road… months after" do Big Sur contaria)
const umaVez = {
  "85 (o livro do ABS)": frasesC.filter((f) => N85.test(f) && /\b(?:people|deaths?|died|killed|Australians|lives)\b/i.test(f)),
  "one in three million": frasesC.filter((f) => UM_EM_3M.test(f)),
  "a contagem das cobras da Austrália": frasesC.filter((f) => contaAU(f)),
  "a fração das cobras do mundo": frasesC.filter((f, i) => fracaoMundo(f, frasesC[i - 1] || "")),
  "a estrada num mês": frasesC.filter((f) => /\broads?\b/i.test(f) && /\bmonths?\b/i.test(f) && /\b(?:kill\w*|deaths?|died|dead|toll)\b/i.test(f)),
};
for (const [o, fs] of Object.entries(umaVez)) if (fs.length > 1) alertas.push(`conferir [uma-vez] (vai uma vez na voz, no gancho; depois, só como imagem: pauta §7, ato 2, e K7; o pedido da Sala): "${o}" ${fs.length} vezes: ${fs.map((f) => `"${f.slice(0, 60)}"`).join(", ")}`);
// a conta dos números falados (a pauta §7 orça ~43 e 45 com a medida do Censo; ALERTA acima de 50)
const numerosPorFrase = frasesC.map((f, i) => (i === iAssC ? [] : numerosDe(f)));
const numerosFalados = numerosPorFrase.reduce((a, l) => a + l.length, 0);
const numerosGancho = iAssC >= 0 ? numerosPorFrase.slice(0, iAssC + 1).reduce((a, l) => a + l.length, 0) : null;
if (numerosFalados > MAX_NUMEROS) alertas.push(`conferir [numeros-falados] (${numerosFalados} números na voz, acima de ${MAX_NUMEROS}: a pauta §7 orça ~43, e 45 com a medida do Censo; a conta é a do portão, e o laudo a traz em "numeros_falados")`);

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
  else if (marcasOk && !atoDepois && !atoAntes) alertas.push(`conferir [inscricao-ato] (a inscrição está na fronteira ${bordaDepois ? `entre os parágrafos ${P + 1} e ${P + 2}` : `entre os parágrafos ${P} e ${P + 1}`}, sem marca <!-- … --> de ato ali: a pausa natural é entre dois atos, e a pauta §7 a põe entre a ponte do ato 3 e a primeira frase do ato 4; voz §3): "${f.slice(0, 90)}"`);
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
