# O portão do roteiro do vídeo 7 (`rio-columbia`): as notas da derivação

Derivado em 11/11/2026, pelo pedido da Sala de controle, do portão do vídeo 6 (`roteiros/praia-do-cassino/_ferramentas/gate.mjs`), contra a pauta
aprovada (`pautas/2026-11-09-video-7-rio-columbia.md`: §2, §3, §4 com a coluna "Na fala", §5, §7, §8 e "O que o cético pediu → o que mudou"),
o teste dos leitores (`out/_pautas/video-7-rio-columbia/teste-leitores.md`), as releituras de depois da pauta
(`pautas/rio-columbia/_trabalho/fatos-c.md`), `marca/voz.md` §1 a §3 e `marca/cta.md` §1, §5 e §6.

- O portão: `roteiros/rio-columbia/_ferramentas/gate.mjs` (`node roteiros/rio-columbia/_ferramentas/gate.mjs [arquivo] [--derivados] [--onde]`,
  cwd na raiz do canal; sem arquivo, mede `roteiros/rio-columbia/roteiro-narrador.md`, que ainda não existe: exit 2).
- A prova: `roteiros/rio-columbia/_ferramentas/gate-provar.mjs`, com os casos em `out/_tmp/gate-rio-columbia/casos/` e a saída em
  `out/_tmp/gate-rio-columbia/prova-saida.md` (fora do git, como as provas dos portões de antes).
- O topo do `gate.mjs` diz o mesmo que estas notas, com o como de cada regra junto dela no código.
- O `ferramentas/portao-fatos.mjs` e o `ferramentas/aplicar-lista.mjs` acham o portão em `roteiros/<proj>/_ferramentas/gate.mjs` e o
  rodam com o caminho do roteiro: a leitura do texto falado (`paragrafosDe`) e a forma do sha ficam as do molde. A prova roda o
  `portao-fatos` numa raiz de teste e confere que o sha cruza (`gate.igual = true`).

## O que saiu (as regras só do Cassino)

- O título dele nas 3 primeiras frases ("longest beach" e "straight", que reprovavam; o "world", o "almost" e as milhas, em alerta) e a curva
  de 11 mi no texto inteiro (alerta).
- A 1ª frase com "Cassino" (reprovava).
- O `NAO_SE_DIZ` dele inteiro (44 ids, do `maior-praia-fato` ao `brasil-um-so`) e o `ALERTA_C` inteiro (16 ids, do `158-sem-turismo` ao
  `fosseis`), com as constantes que só eles usavam (`MAIOR_PRAIA`, `RETA_*`, `PARADOXO*`, `GUINNESS`, `N_FAIXA`, `PARQUE*`, `MARE`, `FOGUETE`,
  `ALTAIR`, `MOLHES`, `NOME_DE_MILHAS`, `DIST`, `NUM_ALTURA`, `N158`, `N135`…). A prova confere que o que o portão do vídeo 6 reprovava ou
  alertava ("Praia do Cassino is the world's longest beach.", "The beach is perfectly straight.", "NASA launched 21 rockets from the beach.",
  "The Altair may disappear one day.") passa aqui.
- A lista dele do que nenhum padrão pega.
- Das palavras de `ALERTA` da voz, nenhuma era só do Cassino: a lista fica inteira.

## O que entrou

**O título** ("Why the U.S. Pays Canada to Keep Part of a Lake Empty"; pauta §2 e §8; `embalagem.md` §2), nas 3 primeiras frases (as das
taxas, sem aspas de abertura):
- REPROVA `[titulo-pagamento]`: nenhuma das 3 tem uma forma de "pay" **com "Canada" na mesma frase** ("pays Canada"). Decidi a mesma frase:
  "the United States pays… The money goes to Canada" não paga o "Pays Canada". A Sala pode afrouxar para "nas 3 juntas";
- REPROVA `[titulo-empty]`: nem "empty" nem "emptied" (nem "empties", "emptying");
- ALERTA, decididos aqui (a Sala pode tirá-los):
  - `[titulo-eua]`: sem "United States", "U.S.", "US" ou "America": quem paga ("Washington" não conta);
  - `[titulo-lago]`: sem "lake", "Lakes" ou "reservoir";
  - `[titulo-parte]`: com "empty" e sem "part of", "portion", "some of", "space" ou "room". O "Part of" mantém o título honesto: só parte do
    lago se esvazia (pauta §5, "Half empty"; Dale: "o 'part of' mostra que alguém olhou de perto");
  - `[titulo-valor]`: sem o 37.6. A miniatura "$37.6M A YEAR", que os quatro leitores escolheram, se paga na voz aos 6,0 s (frase 2 do gancho A).

**A primeira frase** (`voz.md` §1, "Os números da fala"; a imagem de abertura é o reservatório de Arrow, baixo, pauta §6):
- REPROVA sem "Arrow";
- ALERTA sem número (o do molde). O gancho A abre sem número, e a regra aceita "um número ou uma imagem".

**O "não se diz" do Columbia** (`NAO_SE_DIZ`). Ele vem da pauta §5 inteira, da coluna "Na fala" do §4, da lista "O que fica fora da fala" do §7 e
do que o `fatos-c.md` mudou depois da pauta. Cada um REPROVA com o porquê e a fonte na mensagem, e a forma que a pauta ou o fatos-c dão passa (a
prova confere cada uma). Os dois últimos da tabela se medem por parágrafo, porque a fala citada atravessa a frase.

| id | O que reprova | O que passa ao lado (na prova) |
|---|---|---|
| `tratado-cancelado` | "canceled/scrapped/terminated/killed/abandoned the treaty/deal", "walked away from…", "withdrew from…", "the treaty was scrapped/is dead", sem negação nem pergunta | "…announced that the United States had paused talks to update the treaty"; "The treaty itself remains in force"; a fala de Dix ("to terminate the treaty would have little effect") |
| `tratado-expirou` | "the treaty expired/ended/runs out/will end/is over", sem negação nem pergunta; "61 years" | "The treaty has no end date"; "In September 2024, its flood part changed" |
| `canada-controla` | "controls", "took control", "can/could turn … off", "shuts off", "holds the valve/tap/faucet/keys", com o Canadá (ou a BC, Ottawa, Victoria) nas 60 letras antes e sem negação no meio; "hostage" em qualquer lugar | "So Canada can't turn the Columbia off"; "Canada did not turn over control…, BC Hydro says"; a pergunta do ato 3 |
| `hidreletrica-40` | 40 %, 44 %, "a third of US/American…" ou "more than a third" com hidrelétrica, energia ou geração; "hydropower … at risk" | "the largest hydropower-producing river system in the United States"; "a third or more of its journey in Canada" |
| `gatilho-600` | 600 mil com "trigger/threshold" sem o Canadá ou "assumed/expected"; "the treaty sets/says/defines the trigger" (ou o 600 mil) sem negação | "British Columbia assumed it would be called only at 600,000…"; "the treaty never says how big a flood that is" |
| `picos-desde-1974` | 600 mil com "never/hasn't/not once/no year" e "since/after" um ano antes de 2009 ou "the dams/the treaty" | "Since 2009, with the space reserved, it hasn't once…" |
| `sem-pagamento-enchente` | "without the payment/deal/space… would flood/hit/reach"; "Portland would flood"; 600 mil com "every other year" ou "would hit/reach" | "Part of a flood that would reach Portland stays here" (o fecho) |
| `canada-recusou` | o Canadá com "refused/declined/won't… to help/hold/provide" ou "no longer has to help", fora de pergunta | "Canada has to help in a big flood, when the United States asks…" |
| `paga-por-nada` | "pays for nothing", "Canada charges/bills"; "fee", "royalty", "compensation"; "rent…" no assunto do vídeo (espaço, lago, Canadá, água, barragem) | "The law pays for reserving and operating that space"; "lived in rented quarters" (outro assunto) |
| `estacao-mudou` | "flattened/smoothed/evened out" com o pagamento ou 2025; "mostly to make power / for power / for flood…"; "the water was taken away", sem negação | "The water wasn't taken away. It was moved: …" |
| `rio-inteiro` | "hold back / stop / block / turn off the whole river/Columbia/flow", sem negação; "six weeks" (ou 41,5/42 dias) com rio, lago ou barragem e sem "The Dalles" | a frase da medida (K4), com os dois denominadores |
| `dois-meses` | "two months" (ou 55/68 dias) com "every other reservoir/dam/lake" ou "all the (other) reservoirs" | "Add the extra storage Canada built at Mica, outside the treaty, and it's closer to two months" |
| `canada-produz-39` | 39 % com o Canadá e "produces/provides/supplies/contributes/comes from…", ou "Canada's 39", sem "gauge", "station", "Birchbank" ou "measur…" | a frase do gancho A ("at a river gauge in British Columbia…") |
| `agua-um-numero` | 38 % em qualquer lugar; 30 %, 35 %, 30–35 % ou 50 % com água, vazão ou "of the river" sem o lugar (The Dalles, Portland, a bacia, a foz, a estação…); "half the water/flow/river" com o Canadá ou a fronteira | "…30 to 35 percent of the inflow for the entire basin"; "…as much as 50 percent of the flows recorded at Portland" |
| `venda-1964` | "sold … starting/beginning/from 1964"; "from 1973" ou "1973 to 2003" com venda ou energia | "British Columbia sold the first 30 years of that power up front, for about 254 million dollars" |
| `big-bend` | "Big Bend" com maiúsculas | "the river's big bend in British Columbia" |
| `assinado-ottawa` | "signed in Ottawa"; "ratif…" com 1961 | "A treaty between the two countries was signed in 1961; it took effect in September 1964" |
| `grand-coulee-1942` | Grand Coulee com 1942 | "Grand Coulee Dam, from 1941, stopped the natural migratory runs of fish…" |
| `salmao-barragens` | salmão com "killed/wiped out/stopped/blocked…" e uma barragem do tratado (ou Libby), sem Grand Coulee nem Chief Joseph | o Grand Coulee |
| `salmao-cabeceiras` | salmão com "headwaters", "Columbia Lake", "the source of the river", "all the way up" (o NPCC deu 502; fatos-c 11b) | "Salmon once reached Canada, according to Canadian Geographic" |
| `libby-ano` | Libby com o ano da conclusão ("finished/completed/built/opened/dedicated" e 196x/197x) **sem dono**; com o Corps, o CRS ou "says", só **alerta** | "Lake Koocanusa, behind Libby Dam, backs 42 miles into Canada" |
| `pagou-em-1964` | 64,4 com 1964 | "paid 64.4 million dollars, once, for 60 years of flood protection…" |
| `libby-nada` | Libby com "nothing", "no (Canadian) benefit", "for free"; "no Canadian benefit" em qualquer lugar | "And its water, regulated, makes extra power in Canada too, by the treaty's own count" |
| `desvio-numero` | o desvio com 15,5 ou "million acre-feet" (K7) | "…a plan to divert much of the upper Columbia for its own use, according to the US Congressional Research Service" |
| `vanport-mortos` | numa frase de mortes sobre Vanport (o nome na frase, ou na anterior sem "whole/across/total…"): 50, 51, "fifty" ou "dozens" sem marca de cheia inteira; 15 sem a Oregon Encyclopedia/Oregon Historical Society; 16 sem o USGS | a forma do fatos-c: "At least 15 … by the Oregon Historical Society's count; the USGS's 1949 report says at least 16. Across the whole flood, at least 51 died." |
| `vanport-30000` | Vanport com 30.000, sem "the flood" nem marca de cheia inteira | "The flood displaced about 30,000 people, by the count of the US agencies…" |
| `sinixt-extintos` | "extinct" com os Sinixt, a banda ou a Lakes Tribe, sem "declared"; ou "declared extinct" com barragens, tratado, cheia, "so that" ou "consult…" | "In 1956, the government of Canada declared the Arrow Lakes Band extinct" |
| `sinixt-excluidos` | os Sinixt com "excluded/left out/shut out/no seat/not at the table/ignored" (fatos-c 12b) | "Canada's delegation includes representatives of three First Nations…" |
| `pago-em-dinheiro` | "in/with cash", "cash payments", com a parte, a energia ou a metade, sem negação | "…paid in electricity, not cash" |
| `vale-120` | 120 milhões com "share/entitlement/worth/value" | "between about 110 and 400 million dollars a year, by BC Hydro's count" |
| `duas-contas` | a estimativa de 2012 (180/280 mi, ou 2012 com estimativa ou receita e energia/EUA) sem o lado da BC (a BC, a BC Hydro, o Canadá com "estimate/count/side", Ottawa) e uma palavra de contestação ou conta, **na frase ou na seguinte**; "the US loses money" | a frase do cético, com "British Columbia disputed those assumptions" logo depois |
| `ate-2044` | 2044 sem "would", "agreement in principle", "AIP", "propos…", "not been finalized", "if" ou "plan…" | o AIP no condicional |
| `nunca-finalizado` | "never (been) finalized" | "It has not been finalized" |
| `deal-2025` | "deal/agreement … began/started/signed/struck/reached/made/agreed in 2025" | "a temporary deal that took effect for the spring floods of 2025" |
| `deal-31-julho` | "July 31" com o acordo, "ends", "expires" ou "runs out"; "at the latest" com 2027; "talks to replace" | "The deal runs out after the spring of 2027, unless…" |
| `corte-37-sem-dono` | 37 % sem o Departamento de Estado na frase ou na anterior | "…cut by 37 percent, by the State Department's count" |
| `meio-vazio` | "half empty"; "the lake/reservoir/Arrow Lakes (Reservoir) is (left/completely) empty/emptied/drained/dry" sem "part of" antes | "Every spring, part of the Arrow Lakes Reservoir is emptied on purpose" |
| `eua-pararam` | "the US/United States/America/federal government stopped paying" | "Three utilities in Washington stopped paying in 2024" |
| `no-papel` | "at least on paper" (K8) | — |
| `37-sem-inflacao` | a 1ª menção do 37.6 sem "inflation"/"index…" na frase nem na seguinte; o 64,4 e o 37,6 na mesma frase sem a inflação | a inflação na frase seguinte; o 37.6 depois da 1ª vez |
| `trump` | "Trump" em qualquer lugar (K8; fatos-c 1 e 2) | "The new US administration paused the talks, British Columbia's government announced" |
| `carney-eby` | "Carney" ou "Eby" em qualquer lugar (fatos-c 13e) | — |
| `dix-2026` | Dix com 2026 (fatos-c 3c) | "In March 2025, British Columbia's energy minister, Adrian Dix, …" |
| `sinal-gac` | "wait for a signal" sem "note", "briefing", "internal", "Question Period" ou "memo" na frase ou na anterior; com o tipo, só **alerta** | "A May 2025 briefing note for Canada's foreign minister said Canada waits for a signal…" (alerta) |
| `wrda-lei` | "Congress/the House/the Senate/the law/WRDA extended/renewed", "a new law extends", "the deal/payments/authority were extended", sem negação e sem "unless"; "became law"/"signed into law" com 2026 ou extensão, sem condicional; "through/to/until 2029/2030" com pagamento, acordo ou autoridade, sem condicional | "…expires at the end of August 2027, unless Congress extends it. Bills in both chambers would." |
| `retomada` | "talks/negotiations resumed/restarted/back on/under way/continue", "resumed the talks", "continue to negotiate", "back at the table", sem negação e sem ano até 2024 | "No later report we found says the talks have resumed" |
| `aviso-saida` | "gave/given/served/filed/sent/issued (written/formal) notice"; "announced it would leave/withdraw/terminate", sem negação ("neither" conta) | "…neither side had given it, and no later report we found mentions one"; "To date, neither country has given notice" |
| `juizo` | "unfair", "a bad/raw/lopsided/fair/good/better deal", "ripped off", "rip-off", "overpays", "freeloader", "swindle", "extort", "is (un)fair"; "Canada/the US/America wins/won/came out ahead/got the better", "the big/real/clear winner"; **sem atribuição** na frase ("says", "called", "calling", "argues"…) | "Each side has its own count of what the other gains"; "A State Department memo called the old access unfair competition" |
| `apagados` | "erased", "genocide", "stolen land", "ethnic cleansing", "wiped off the map", sem atribuição | "Renata no longer exists" |
| `renata-fogo` | Renata (na frase ou na anterior) com "burn…", "fire", "torch", "flames" | "Renata no longer exists" |
| `pausa-sem-data` | "still/currently/remains paused (on pause, on hold, frozen, stalled)" sem data ("As of August 2026", "In June 2026") | "As of August 2026, according to Canadian Geographic, the talks were still paused"; "In June 2026, BC Hydro still called them paused" |
| `area-na-tela` | "hectares"; um número com "acres" (o acre-pé não conta) | "An acre-foot is enough water to cover an acre of land one foot deep" |
| `energia-na-tela` | "megawatts", "MW", "GW", "kW", "kilowatt years"; 6,5 % | "Canada's share falls by about half" |
| `vazao-na-tela` | "cubic meters per second", "m³/s" | "…about ten times more water in June than in February" |
| `valores-na-tela` | 253.929.534; 29,9 mi; 8,45/8,95; 52,1/11,1/1,2 mi com barragem ou pagamento | "…for about 254 million dollars" |
| `aip-flexivel` | "zero to four million", "four million acre-feet", "four years ahead" | — |
| `datas-na-tela` | Duncan, Keenleyside, Mica ou Arrow com a conclusão e o ano; 1951 em qualquer lugar | "A few years later, the United States proposed a dam whose lake would reach into Canada" |
| `nivel-arrow` | o nível em pés (1.37x a 1.44x ft); 2017 com o nível mais baixo do lago | "In February, the lake sits at its lowest point of the year" |
| `sinixt-numeros` | 1902, 1930 ou "21 people/members/Sinixt" com os Sinixt ou a banda | "In 1956, the government of Canada declared the Arrow Lakes Band extinct" |
| `salmao-26` | "26 years" com salmão, peixe ou Coulee | — |
| `fontes-de-fundo` | "EIA", "Energy Information Administration", "KTVZ" | — |
| `bargaining-chip` (por parágrafo) | "bargaining chip" dentro de aspas (retas, curvas ou simples curvas), mesmo com a fala atravessando duas frases (fatos-c 3b) | "…said the treaty would not be used as a bargaining chip in the trade fight" (sem aspas) |
| `mais-importante-aspas` (por parágrafo) | "the most important of the Canadian dams" dentro de aspas; "most important" com o Departamento de Estado na frase (fatos-c 7) | "Keenleyside, the Canadian dam that matters most for flood control" |

**Os alertas do Columbia** (nunca reprovam; os quatro primeiros são do pedido da Sala, os outros saem da mesma pauta e do fatos-c, e a Sala pode
tirá-los):

| id | O que alerta |
|---|---|
| `uma-vez-no-gancho` | os 15 % (com a bacia ou o Canadá), os 39 % ou os "88 years" ditos mais de uma vez (K6) |
| `deal-treaty-apresentado` | "the/this/that deal" antes de "a … deal/agreement" (ou "deal that took effect"); "the/this/that treaty" antes de "a … treaty between/signed/that…", "1964 treaty", "Columbia River Treaty" ou "treaty signed" (os leitores) |
| `numeros-falados` | mais de 50 números na voz; o laudo traz a conta em `numeros_falados` (com `--onde`, cada número) |
| `picos-sem-2009` | 450 ou 600 mil com "never/hasn't/not once" ou "six springs/years/times", sem 2009 na frase nem na anterior |
| `dois-denominadores` | "six weeks" com The Dalles sem "three and a half months" (ou 3,5 meses, 110 dias, "closer to three") na frase ou na seguinte (K4) |
| `gatilho-sem-crs` | os números do gatilho com "projected/assumed/expected/trigger/come into play/called/planners", sem o CRS de duas frases antes a duas depois |
| `estudo-bc` | "40 to/and 150" (a conta da BC, sem data lida, §11 item 2) |
| `faixa-bc-hydro` | "110 to/and 400" sem a BC Hydro na frase ou na anterior (K2) |
| `mortos-cheia-sem-dono` | mortes com 50/51/"dozens" fora de Vanport, sem o USGS, o Corps, as agências ou a Cruz Vermelha na frase ou na anterior |
| `30000-sem-dono` | 30.000 desalojados sem as agências, o Corps ou a BPA na frase ou na anterior |
| `sinixt-dono` | "declared … extinct" sem governo, Canadá, Ottawa ou federal |
| `dix` | Dix sem "minister" ou sem 2025/"March" da frase anterior à seguinte |
| `barton` | "most critical" (Barton, †, não relido) |
| `cbc` | toda menção à CBC (a data exata a ler, §11 item 5) |
| `puds` | "utilities", PUD, "utility district" († a reler) |
| `pausa-sem-dono` | os EUA, Washington, a administração ou o presidente "paused", sem a BC, a BC Hydro, "announced", "according" ou "said" |
| `comprimento-rio` | o comprimento do rio em milhas ou km (dois números do USGS, fatos-c 11a) |
| `quantia-fixa` | "fixed/set amount" (o diagrama de Arrow a ler, §11 item 6) |
| `quem-vendeu` | "Canada sold/sells" (quem vendeu foi a Colúmbia Britânica) |
| `curva-sem-lugar` | "big bend" em minúsculas sem a Colúmbia Britânica ou o Canadá na frase ou na anterior |
| `every-sem-data` | "every spring/year/winter/summer" com pagamento ou "empty/emptied", sem um ano na frase ou nas duas seguintes ("every year of the deal" passa) |
| `acre-pe` | a 1ª menção de "acre-feet" sem a definição da frase anterior às duas seguintes |
| `libby-ano`, `sinal-gac` | a forma com dono ou com o tipo do documento (acima) |

**A inscrição falada** (regra nova desde 09/11/2026: `voz.md` §3; `cta.md` §1, §5 e §6). O laudo ganha `inscricao`: a frase, o parágrafo, o
lugar no parágrafo, as palavras antes e no total, o início e a duração (em segundos e m:ss), o percentual, a janela, a fronteira e a conta por
extenso.
- **A conta (o pedido da Sala):** o início = as palavras antes ÷ 179 × 60, mais 0,25 s por troca de parágrafo antes dela; a duração = a fala
  inteira, mais 0,25 s por troca de parágrafo, mais a cauda de 20 s (o `cta.md` §6 conta a cauda dentro da duração). A prova confere a conta
  com uma conta à parte, a 0,1 s.
- **REPROVA:**
  - `[inscricao-ausente]`, `[inscricao-mais-de-uma]` e `[inscricao-outro-subscribe]` (outro "subscrib…" no texto, ou um segundo na mesma frase);
  - `[inscricao-posicao]`: fora de 35 % a 60 %;
  - `[inscricao-primeiro-minuto]`: o início antes de 60 s. Só pesa em texto curto, porque a 35 % de ~15 min ela já está em ~5 min;
  - `[inscricao-gancho]`: antes ou na assinatura;
  - `[inscricao-fecho]`: depois da última marca `<!-- fecho… -->` (ou "conclus…", "close", "ending", "outro"), ou nas 8 últimas frases sem
    essa marca;
  - `[inscricao-paragrafo]`: fora de uma fronteira de parágrafo. A fronteira é: a última frase do parágrafo; a penúltima, com a volta ao assunto
    por último; ou a primeira do parágrafo. A volta tem até 10 palavras e "back to", ou abre com "Now,", "Anyway,", "Right," ou "Okay,";
  - `[inscricao-vetada]`: "smash", "hit the like", "like button", "leave/drop/give a like", "ring the bell", "bell", "don't forget", "make sure",
    "please", "comment…", "every week/day/<dia>", "weekly", "daily";
  - `[inscricao-numero]`: algarismo ou número por extenso (o "one" não conta);
  - `[inscricao-plateia]`: "most/many/half/some/few of you", "% of you";
  - `[inscricao-longa]`: mais de 24 palavras.
- **ALERTA:**
  - `[inscricao-margem]`: abaixo de 37 % ou acima de 58 %;
  - `[inscricao-ato]`: na fronteira de parágrafo, mas sem marca `<!-- … -->` entre o parágrafo dela e o vizinho;
  - `[inscricao-16]`: de 17 a 24 palavras;
  - `[inscricao-if]` e `[inscricao-you]`;
  - `[inscricao-citacao]`: a frase logo antes tem aspas;
  - `[inscricao-numero-heroi]`: a frase logo antes tem um número-herói. **O critério é daqui:** "$" com algarismo, "%", um número com
    "percent", "million", "billion", "thousand", "acre-feet", "cubic feet", "miles" ou "times", ou um número com vírgula de milhar ("600,000",
    "2,300"). Um ano sozinho e "60 years" não contam: o fecho do ato 2 da pauta ("For 60 years, that was the deal.") passa.

**A faixa e o ritmo:** de 2.450 a 2.700 palavras faladas (o pedido da Sala; a pauta §7 orça ~2.555, sem a frase de inscrição). A média de até 18
palavras por frase e nenhuma acima de 34 ficam as do molde, e o `WPM` de conta continua 179.

**O autoplágio** ganha o roteiro do vídeo 6 (`roteiros/praia-do-cassino/roteiro-narrador.md`), **ao lado dos seis de antes**. Li o pedido
("compara com os roteiros dos vídeos 5 e 6") como "ganha o 6": tirar Juneau, LA, Zona, Peru e Atlântico só perderia alerta. Se a Sala quiser só
o 5 e o 6, é a lista `ANTERIORES`.

**O `--derivados`** confere, além dos do molde (os laudos de `qc-roteiro/`, o `roteiro-editor.md`, o `pronuncia.md` e o `voz/texto-para-voz.md`),
três a mais, com a forma que cada um já traz no Cassino:
- `roteiro-narrador-pt-BR.md`: "Revisão do roteiro";
- `voz/trocas.md`: "sha256 do texto falado";
- `out/<proj>/roteiro.md`: "revisao_do_roteiro:".

A cópia em `out/` só se procura quando o roteiro medido mora em `<raiz>/roteiros/<proj>/`. Rodado no Cassino de verdade, ele acha os seis
derivados de lá, todos com o sha de agora (`3348a7b2cc5d`).

## O que ficou, sem mudança

- O que é texto falado (`paragrafosDe`) e o sha (a forma que o `portao-fatos` e o `aplicar-lista` cruzam).
- O `--onde`, que agora traz também os números contados.
- As `VETADAS` da voz e as palavras de `ALERTA` (o universal, "mystery" e "secret", o presente, "here" e "this line").
- As frases que abrem com data, a assinatura uma vez com até 170 palavras, o "But" até a palavra 50 e a pergunta antes da assinatura.
- O fecho (a pergunta do gancho repetida e o fecho em lista, em alerta).
- As taxas e os `TETOS`, e a exceção da pergunta de comentário no autoplágio.
- A leitura das marcas `<!-- … -->` da inscrição é uma função nova (`marcasDe`), à parte. Ela segue a mesma leitura de `paragrafosDe`, que não
  mudou, e confere que conta os mesmos parágrafos. Se não contar, ela avisa e não julga o ato nem o fecho pela marca.

## Para quem escreve o roteiro (lido na prova)

- **O gancho A da pauta §8, como está, reprova por duas regras do molde e por nenhuma do Columbia:**
  - **o tamanho:** tem 196 palavras até a assinatura pela conta do portão (65,7 s; a pauta conta 195 na cópia para a voz), e o teto é 170;
  - **o "But":** não tem, e o "Yet" da 5ª frase cai na palavra 61. As 3 primeiras frases já somam 51 palavras pela conta do molde, que parte o
    "37.6" em dois. Então "But only about 15 percent…" na 4ª frase cai na 51 e reprova por uma palavra; com uma palavra a menos nas 3
    primeiras, passa;
  - **os alertas que ficam:** "the treaty" usado antes de apresentado (a 11ª frase; o conserto que os leitores pediram), a 1ª frase sem número,
    "Here's" (a taxa e o "here") e o "still".
- **A inscrição** vai na fronteira entre o ato 2 e o ato 3, numa linha de parágrafo, com uma marca `<!-- … -->` entre os dois. Tem "subscribe to
  Alpha Point", "If…" e "you", até 16 palavras, sem número, e uma vez só.
  - **A margem de baixo é curta.** Com ~2.575 palavras no total, ela precisa de ~920 palavras antes para passar de 35 % e de ~975 para sair da
    margem de 37 %. A pauta orça 975 (gancho, ato 1 e ato 2).
  - Se o gancho cair de 196 para 170, os atos 1 e 2 precisam de ~25 palavras a mais, ou ela cai no alerta. E se o vídeo crescer para 2.650, a
    marca de 37 % vai a ~1.000.
- **"Now, back to the river."** passa como volta, mas o "Now" dispara o alerta do presente do molde. "Back to the river, then." não dispara.
- **"regime" é vetada** (voz §2): "the river's flow regime" reprova. Escreva "the river's year" ou "the seasons of the river".
- **A frase segura das duas contas** (pauta §4.5) tem 35 palavras pela conta do portão, e o teto é 34. Corte uma palavra (sem "that run the
  treaty" ela fica com 32) ou parta a frase.
- **O alerta universal** dispara nas formas da pauta: o "last" de "the last flood season", o "first" de "the first 30 years", o "never" de "the
  treaty never says" e o "still" de "Canada still has to help" e de "still called them paused". Decide-se como conferido.

## A prova

- `node --check` nos dois arquivos: sem erro.
- `node roteiros/rio-columbia/_ferramentas/gate-provar.mjs`: **exit 0, 340 de 340 checagens como o esperado** (a saída inteira, abaixo).
- **O portão novo sobre o roteiro do vídeo 6** (`node roteiros/rio-columbia/_ferramentas/gate.mjs roteiros/praia-do-cassino/roteiro-narrador.md`):
  - **exit 1, REPROVADO**, com 4 problemas: `[titulo-pagamento]`, `[titulo-empty]`, a 1ª frase sem "Arrow" e `[inscricao-ausente]`. As 2.450
    palavras do Cassino caem justo no piso da faixa nova;
  - nenhum "não se diz" e nenhum alerta do Columbia (35 números falados);
  - o sha (`3348a7b2cc5d`), as taxas, as contagens, o gancho (os dois portões contam a 179), o autoplágio e os alertas do fecho saem iguais
    aos do portão do vídeo 6, que passa o mesmo texto (exit 0).
- **A precisão, nos outros roteiros do canal** (fora da prova, rodado à mão): nos de Juneau, Los Angeles, Zona, Peru, Atlântico e Big Sur,
  nenhum "não se diz" nem alerta do Columbia, fora a conta dos números (78, 87, 82, 69, 75 e 56: todos acima de 50). Essa rodada achou quatro
  falsos positivos, já consertados:
  - "winner" de eleição (Juneau) e "unfair competition" atribuído a um memorando (Zona), no `juizo`: saiu o "winner" sozinho, e a atribuição
    passa;
  - "lived in rented quarters" (Zona), no `paga-por-nada`: o "rent" só vale no assunto do vídeo;
  - "a 2012 study reports" (Peru), no `duas-contas`: o 2012 só com estimativa ou receita e energia ou EUA;
  - "Lima's water utility" (Peru), no `puds`: só "utilities" no plural, PUD ou "utility district".
  A prova guarda a forma de cada um.
- **As frases que a pauta e o fatos-c recomendam**, 84 delas juntas num texto de teste: nenhuma reprova por regra do Columbia. Alertam o `cbc`, o
  `puds`, o `estudo-bc` (como devem), o `deal-treaty-apresentado` ("the US agencies that run the treaty" vem antes de "A treaty between…" na
  ordem do teste) e a conta dos números.
- **A conta dos números do gancho A:** 8 pela conta do portão. A pauta conta 7, e o portão conta também "a dozen miles".

## Os limites (o que nenhum padrão pega, ou só pega em parte; para o verificador de fatos)

- **O controle e o fechamento** com outras palavras ("the upper river answers to Victoria", "Canada sets the tempo"). A torneira dita por
  pronome numa frase longe do "Canada". "British Columbia controls its dams" reprova, embora a BC opere as barragens: escreva "operates".
- **O gatilho:**
  - o 600 mil dito como do tratado sem "trigger" nem "the treaty sets" ("the treaty's number is 600,000");
  - a faixa de 450 a 650 mil dita como dos dois países;
  - os picos regulados ditos como o rio sem o espaço ("the river is tamer now");
  - o "since 2009" só se vê na frase ou na anterior.
- **O porquê do pagamento:** que a lei diz "including operations…" só se confere lendo. O "insurance" e o "certainty" são do canal. O
  anticlímax que os leitores temem ("é só um seguro") é da bancada.
- **As duas contas:** "lado a lado" só se vê numa janela de uma frase. O tom de quem "ganha" com outras palavras ("Canada holds the better
  cards") também escapa.
- **Vanport:** número de mortos que não é 15, 16 ou 50/51; o número dito a duas frases do nome; a hora cravada (16h15 ou 16h17).
- **Os Sinixt:** o laço 1956 → barragens com outras palavras ("the same decade the dams were planned"); o nome que a Corte usa.
- **As datas:** "since the treaty" e "since the dams" pegam; "in the regulated era" não. O "every spring" sem data só se vê na janela de duas
  frases.
- **A política:**
  - o presidente dos EUA sem o nome ("the White House pulled out"): o `tratado-cancelado` pega "pulled out of the treaty", mas não o sujeito;
  - o que mudou depois de 09/11/2026, os voláteis do §11, item 13 (as conversas, o pagamento, a WRDA, o aviso de saída): isso se relê antes da
    gravação.
- **Os números:**
  - a conta é do portão e difere da da pauta: conta "a dozen miles", conta cada número de uma data só uma vez e une as faixas ("between 450,000
    and 650,000", "40 of 89 years"), e não conta número por extenso sem medida ("the two countries");
  - o "uma vez" dos 15 %, 39 % e 88 anos só vê a repetição, não se a única vez está no gancho.
- **A inscrição:**
  - a frase-chave do bloco ao lado dela, e se a cena por baixo está calma (cta §5): é do regente e do qc-visual;
  - o tempo é estimado: a narração real mexe 1 a 2 pontos, e a margem de 37 % a 58 % existe por isso;
  - o número-herói é o critério daqui, e o que for herói por outra razão (a frase-chave, o pico de 1894) escapa.
- **O que os leitores a frio pediram:** a escala do dinheiro ("37,6 milhões, comparado com quê?"), o lado do Canadá cedo, e chegar ao gatilho
  antes de o espectador concluir "é só um seguro". Isso é da bancada.

## A saída da prova

```text
# Prova do portão do vídeo 7, o rio Columbia (roteiros/rio-columbia/_ferramentas/gate.mjs)

340 de 340 checagens como o esperado.
A base: 2578 palavras, 223 frases de corpo (100 antes da inscrição); os casos em out/_tmp/gate-rio-columbia/casos/.

## A base

- OK: base: passa (0 alerta[s])
- OK: a base tem 2578 palavras (faixa 2.450–2.700), 231 frases, média 11.2 (teto 18), maior 19 (teto 34); o gancho tem 84 palavras (28.2 s a 179) e o "But" na palavra 38; 14.4 min a 179
- OK: a base não tem nenhum alerta ([])
- OK: a base não tem autoplágio com os sete roteiros anteriores (Juneau, Los Angeles, Zona, Peru, Atlântico, Big Sur e Cassino)
- OK: a base não dispara nenhuma taxa
- OK: a inscrição da base: parágrafo 21, frase 6 de 6, começa em 6:43.9 (45.1 % de 14:55.4, a janela de 5:13.4 a 8:57.2), na fronteira entre atos
- OK: a conta do tempo é a pedida (as palavras antes ÷ 179 × 60 + 0,25 s por troca de parágrafo; a duração com as pausas e a cauda de 20 s): o portão dá 403.9 s de 895.4 s, a conta daqui 403.9 s de 895.4 s
- OK: os números falados da base: 3 (os três do gancho: "20 miles", "37.6 million", "2025")

## A faixa (2.450 a 2.700), a média (18) e a maior frase (34)

- OK: faixa-piso-2450: passa (0 alerta[s]) — 2.450 palavras exatas passam
- OK: faixa-2449: reprova (1) — 2.449 reprova
- OK: faixa-teto-2700: passa (0 alerta[s]) — 2.700 palavras exatas passam
- OK: faixa-2701: reprova (1) — 2.701 reprova
- OK: faixa-2400-do-cassino: reprova (1) — o meio da faixa do Cassino (2.400) já fica abaixo do piso novo
- OK: media-acima-de-18: reprova (1) — as frases do corpo unidas em pares (~20 palavras cada)
- OK: frase-de-34: passa (0 alerta[s]) — uma frase de 34 palavras passa
- OK: frase-de-35: reprova (1) — uma frase de 35 palavras reprova

## O título ("Why the U.S. Pays Canada to Keep Part of a Lake Empty") nas 3 primeiras frases

- OK: titulo-sem-pagamento: reprova (1) — sem "pay" nas 3 primeiras (o "pay" da 4ª, a pergunta, não conta)
- OK: titulo-pagamento-separado: reprova (1) — "pays" numa frase e "Canada" na outra: reprova (o pagamento ao Canadá é uma frase: "pays Canada")
- OK: titulo-pagamento-na-4a: reprova (1) — "pay Canada" na 4ª frase já não paga
- OK: titulo-sem-empty: reprova (1) — sem "empty"/"emptied" nas 3 primeiras
- OK: titulo-so-emptied: passa (0 alerta[s]) — "emptied" na 1ª frase paga o "Empty"
- OK: titulo-sem-eua: passa (1 alerta[s]) — sem "United States"/"U.S." (só "Washington"): alerta
- OK: titulo-us-com-pontos: passa (0 alerta[s]) — "the U.S." conta (o ponto da sigla não parte a frase)
- OK: titulo-sem-lago: passa (1 alerta[s]) — sem "lake"/"reservoir" nas 3 primeiras: alerta
- OK: titulo-sem-parte: passa (1 alerta[s]) — "empty" sem "part of", "space" ou "room": alerta (o "Part of" mantém o título honesto)
- OK: titulo-sem-valor: passa (1 alerta[s]) — sem o 37.6 nas 3 primeiras: alerta (a miniatura "$37.6M A YEAR")

## A primeira frase ("Arrow" e número)

- OK: primeira-sem-arrow: reprova (1)
- OK: primeira-arrow-na-2a: reprova (1) — "Arrow" na 2ª frase não conta
- OK: primeira-sem-numero: passa (1 alerta[s]) — a 1ª frase do gancho A, sem número: só alerta (a regra aceita "um número ou uma imagem", o lago baixo)
- OK: primeira-numero-por-extenso: passa (0 alerta[s]) — "twenty" por extenso conta como número
- OK: primeira-so-one: passa (1 alerta[s]) — "one of" não é número: alerta

## O "não se diz" do Columbia (reprova)

- OK: tratado-cancelado-reprova: reprova (1) — "In 2025, the United States canceled the treaty."
- OK: tratado-cancelado-reprova: reprova (1) — "The treaty was scrapped."
- OK: tratado-cancelado-reprova: reprova (1) — "Washington walked away from the Columbia River Treaty."
- OK: tratado-cancelado-passa: passa (1 alerta[s]) — a forma da pauta §5: passa
- OK: tratado-cancelado-passa: passa (1 alerta[s]) — a forma da pauta §5: passa
- OK: tratado-cancelado-passa: passa (1 alerta[s]) — a fala de Dix ("terminate", no condicional): passa
- OK: tratado-expirou-reprova: reprova (1) — "The treaty just expired."
- OK: tratado-expirou-reprova: reprova (1) — "The treaty will end in 2027."
- OK: tratado-expirou-reprova: reprova (1) — "This 61-year-old treaty shapes the river."
- OK: tratado-expirou-passa: passa (1 alerta[s]) — a forma da pauta §5: passa
- OK: tratado-expirou-passa: passa (0 alerta[s]) — a forma da pauta §5 (K10): passa
- OK: canada-controla-reprova: reprova (1) — "Canada controls the river."
- OK: canada-controla-reprova: reprova (1) — "Canada can turn the Columbia off."
- OK: canada-controla-reprova: reprova (1) — "Canada holds the river hostage."
- OK: canada-controla-reprova: reprova (1) — "Canada took control of America's water."
- OK: canada-controla-passa: passa (0 alerta[s]) — a forma da pauta §4.3: passa
- OK: canada-controla-passa: passa (0 alerta[s]) — a BC Hydro (L12), com a negação entre o Canadá e o verbo: passa
- OK: canada-controla-passa: passa (0 alerta[s]) — a pergunta do ato 3 (pauta §7): passa
- OK: hidreletrica-40-reprova: reprova (1) — "The river makes 40 percent of American hydropower."
- OK: hidreletrica-40-reprova: reprova (1) — "That puts American hydropower at risk."
- OK: hidreletrica-40-passa: passa (0 alerta[s]) — a forma da pauta §5 (o CRS): passa
- OK: hidreletrica-40-passa: passa (0 alerta[s]) — o "a third or more" do caminho (pauta §4.1): passa
- OK: gatilho-600-reprova: reprova (1) — "The treaty's flood trigger is 600,000 cubic feet per second."
- OK: gatilho-600-reprova: reprova (1) — "The treaty sets the trigger at 600,000."
- OK: gatilho-600-passa: passa (0 alerta[s]) — a forma da pauta §4.3: passa
- OK: gatilho-600-passa: passa (2 alerta[s]) — a forma da pauta §4.3: passa
- OK: picos-desde-1974-reprova: reprova (1) — "Since 1974, the river hasn't once passed 600,000."
- OK: picos-desde-1974-reprova: reprova (1) — "Since the dams, the yearly peak has never reached 600,000."
- OK: picos-desde-1974-passa: passa (0 alerta[s]) — a forma da pauta §4.3: passa
- OK: sem-pagamento-enchente-reprova: reprova (1) — "Without the payment, Portland would flood."
- OK: sem-pagamento-enchente-reprova: reprova (1) — "Without the space, the river would hit 600,000 every other year."
- OK: sem-pagamento-enchente-passa: passa (1 alerta[s]) — o fecho da pauta §7: passa
- OK: canada-recusou-reprova: reprova (1) — "The United States pays because Canada refused to help."
- OK: canada-recusou-reprova: reprova (1) — "Canada no longer has to help in a flood."
- OK: canada-recusou-passa: passa (0 alerta[s]) — a forma da pauta §4.3: passa
- OK: paga-por-nada-reprova: reprova (1) — "The United States pays for nothing."
- OK: paga-por-nada-reprova: reprova (1) — "Canada charges the United States for the space."
- OK: paga-por-nada-reprova: reprova (1) — "The yearly fee is 37.6 million dollars, adjusted for inflation."
- OK: paga-por-nada-reprova: reprova (1) — "The United States rents the empty space from Canada."
- OK: paga-por-nada-passa: passa (0 alerta[s]) — a lei (L11): passa
- OK: paga-por-nada-passa: passa (0 alerta[s]) — o "rented" fora do assunto (a Zona): passa
- OK: estacao-mudou-reprova: reprova (1) — "The dams flattened the river's year for the 2025 payment."
- OK: estacao-mudou-reprova: reprova (1) — "The water was moved mostly to make power."
- OK: estacao-mudou-reprova: reprova (1) — "The water was taken away."
- OK: estacao-mudou-passa: passa (0 alerta[s]) — a forma da pauta §4.3: passa
- OK: rio-inteiro-reprova: reprova (1) — "Canada's three dams can hold back the whole river for six weeks."
- OK: rio-inteiro-reprova: reprova (1) — "The three lakes store six weeks of the river."
- OK: rio-inteiro-passa: passa (0 alerta[s]) — a forma da pauta §4.3, com os dois denominadores: passa
- OK: dois-meses-reprova: reprova (1) — "Count every other reservoir up there, and it's two months."
- OK: dois-meses-passa: passa (1 alerta[s]) — a forma da pauta §4.3: passa
- OK: canada-produz-39-reprova: reprova (1) — "Canada produces 39 percent of the river's water."
- OK: canada-produz-39-reprova: reprova (1) — "About 39 percent of the water comes from Canada."
- OK: canada-produz-39-passa: passa (0 alerta[s]) — a forma da pauta §4.1 (o gancho A): passa
- OK: agua-um-numero-reprova: reprova (1) — "Canada sends about 38 percent of the water."
- OK: agua-um-numero-reprova: reprova (1) — "Canada produces 30 to 35 percent of the flow."
- OK: agua-um-numero-reprova: reprova (1) — "Half the water crosses the border from Canada."
- OK: agua-um-numero-passa: passa (0 alerta[s]) — com o lugar (a bacia, L12): passa
- OK: agua-um-numero-passa: passa (0 alerta[s]) — com o lugar (Portland, L12): passa
- OK: venda-1964-reprova: reprova (1) — "Canada sold 30 years of power starting in 1964."
- OK: venda-1964-reprova: reprova (1) — "The power was sold from 1973 to 2003."
- OK: venda-1964-passa: passa (1 alerta[s]) — a forma da pauta §4.2: passa
- OK: big-bend-reprova: reprova (1) — "The river turns at the Big Bend."
- OK: big-bend-passa: passa (0 alerta[s]) — a forma da pauta §4.1: passa
- OK: assinado-ottawa-reprova: reprova (1) — "The deal was signed in Ottawa."
- OK: assinado-ottawa-reprova: reprova (1) — "Both countries ratified it in 1961."
- OK: assinado-ottawa-passa: passa (0 alerta[s]) — a forma da pauta §4.2: passa
- OK: grand-coulee-1942-reprova: reprova (1) — "Grand Coulee Dam stopped the salmon in 1942."
- OK: grand-coulee-1942-passa: passa (0 alerta[s]) — a forma da pauta §4.4: passa
- OK: salmao-barragens-reprova: reprova (1) — "The treaty dams killed the salmon."
- OK: salmao-barragens-passa: passa (0 alerta[s]) — o Grand Coulee (F10): passa
- OK: salmao-cabeceiras-reprova: reprova (1) — "Salmon once swam all the way to the headwaters."
- OK: salmao-cabeceiras-passa: passa (0 alerta[s]) — o nível do fatos-c (11b): passa
- OK: libby-ano-reprova: reprova (1) — "Libby Dam was finished in 1973."
- OK: libby-ano-alerta: passa (1 alerta[s]) — com o dono (o USACE, fatos-c item 10): só alerta
- OK: libby-ano-passa: passa (0 alerta[s]) — a forma da pauta §4.2, sem o ano: passa
- OK: pagou-em-1964-reprova: reprova (1) — "The United States paid 64.4 million dollars in 1964."
- OK: pagou-em-1964-passa: passa (0 alerta[s]) — a forma da pauta §4.2: passa
- OK: libby-nada-reprova: reprova (1) — "Libby brought Canada nothing."
- OK: libby-nada-passa: passa (1 alerta[s]) — a meia frase da pauta §4.2 (K10): passa
- OK: desvio-numero-reprova: reprova (1) — "Canada planned to divert 15.5 million acre-feet."
- OK: desvio-numero-passa: passa (0 alerta[s]) — a forma da pauta §4.2 (K7): passa
- OK: vanport-mortos-reprova: reprova (1) — "More than 50 people died at Vanport."
- OK: vanport-mortos-reprova: reprova (1) — "Fifteen people died in Vanport."
- OK: vanport-mortos-reprova: reprova (1) — por pronome, na frase seguinte, sem o USGS
- OK: vanport-mortos-passa: passa (0 alerta[s]) — a forma do fatos-c (item 8, "O que muda", 3): passa
- OK: vanport-30000-reprova: reprova (1) — "Vanport's 30,000 people lost their homes."
- OK: vanport-30000-passa: passa (1 alerta[s]) — a forma do fatos-c (item 8): passa
- OK: sinixt-extintos-reprova: reprova (1) — "The Sinixt are extinct."
- OK: sinixt-extintos-reprova: reprova (1) — "Canada declared the Arrow Lakes Band extinct, so no one was consulted about the dams."
- OK: sinixt-extintos-passa: passa (0 alerta[s]) — a forma da pauta §4.4 (a Corte, L7 §6): passa
- OK: sinixt-excluidos-reprova: reprova (1) — "The Sinixt were left out of the talks."
- OK: sinixt-excluidos-passa: passa (1 alerta[s]) — a forma do fatos-c (item 12a): passa
- OK: pago-em-dinheiro-reprova: reprova (1) — "Canada's share is paid in cash every year."
- OK: pago-em-dinheiro-passa: passa (0 alerta[s]) — a forma da pauta §4.2: passa
- OK: vale-120-reprova: reprova (1) — "Canada's share is worth about 120 million dollars a year."
- OK: vale-120-passa: passa (0 alerta[s]) — a forma da pauta §4.5 (K2): passa
- OK: duas-contas-reprova: reprova (1) — "In 2012, the US agencies estimated that ending it would raise American power revenues by 180 to 280 million dollars a year."
- OK: duas-contas-reprova: reprova (1) — "The United States loses money on the treaty."
- OK: duas-contas-passa: passa (0 alerta[s]) — a forma do cético (K2; pauta §4.5), sem o "that run the treaty" (a frase da pauta tem 35 palavras): passa
- OK: ate-2044-reprova: reprova (1) — "The United States pays 37.6 million dollars a year through 2044."
- OK: ate-2044-passa: passa (0 alerta[s]) — o AIP no condicional: passa
- OK: nunca-finalizado-reprova: reprova (1) — "It was never finalized."
- OK: nunca-finalizado-passa: passa (0 alerta[s]) — a forma da pauta §4.5 (K10): passa
- OK: deal-2025-reprova: reprova (1) — "The money comes under a deal that began in 2025."
- OK: deal-2025-passa: passa (0 alerta[s]) — a forma da pauta §5 (K3): passa
- OK: deal-31-julho-reprova: reprova (1) — "The deal ends by July 31, 2027, at the latest."
- OK: deal-31-julho-reprova: reprova (1) — "Talks to replace it are on pause."
- OK: deal-31-julho-passa: passa (0 alerta[s]) — a forma da pauta §5 (K3): passa
- OK: corte-37-sem-dono-reprova: reprova (1) — "In August 2024, Canada's share was cut by about 37 percent."
- OK: corte-37-sem-dono-passa: passa (0 alerta[s]) — a forma da pauta §4.5 (K10): passa
- OK: meio-vazio-reprova: reprova (1) — "Every spring, the lake is left half empty."
- OK: meio-vazio-reprova: reprova (1) — "The Arrow Lakes Reservoir is emptied every spring."
- OK: meio-vazio-passa: passa (1 alerta[s]) — com o "part of" (o gancho A): passa
- OK: eua-pararam-reprova: reprova (1) — "The United States stopped paying in 2024."
- OK: eua-pararam-passa: passa (1 alerta[s]) — as PUDs (pauta §4.5): passa (o [puds] alerta)
- OK: no-papel-reprova: reprova (1) — "The deal holds, at least on paper."
- OK: no-papel-passa: passa (1 alerta[s]) — sem o "at least on paper": passa
- OK: 37-sem-inflacao-reprova: reprova (1) — o 37.6 na 1ª vez sem a inflação, nem na frase seguinte: reprova
- OK: 37-sem-inflacao-na-seguinte: passa (0 alerta[s]) — a inflação na frase seguinte: passa
- OK: 37-sem-inflacao-reprova: reprova (1) — os 64,4 ao lado dos 37,6 sem a inflação: reprova
- OK: 37-sem-inflacao-passa: passa (0 alerta[s]) — o 37.6 depois da 1ª vez, sem os 64,4: passa
- OK: trump-reprova: reprova (1) — "Trump called it a very large faucet."
- OK: trump-passa: passa (0 alerta[s]) — a forma da pauta §5 ("the new US administration", com o dono): passa
- OK: carney-eby-reprova: reprova (1) — "Prime Minister Carney has said nothing about it."
- OK: carney-eby-reprova: reprova (1) — "Premier Eby called the river vital."
- OK: dix-2026-reprova: reprova (1) — "In 2026, Dix said the river was safe."
- OK: dix-2026-passa: passa (1 alerta[s]) — com o cargo e a data de 2025: passa
- OK: sinal-gac-reprova: reprova (1) — "Canada says it will wait for a signal from the U.S."
- OK: sinal-gac-alerta: passa (1 alerta[s]) — com o tipo do documento (a nota de Question Period): só alerta
- OK: wrda-lei-reprova: reprova (1) — "Congress extended the payment to 2030."
- OK: wrda-lei-reprova: reprova (1) — "A new law extends the deal."
- OK: wrda-lei-reprova: reprova (1) — "The payments now run through 2030."
- OK: wrda-lei-passa: passa (0 alerta[s]) — a forma do fatos-c ("O que muda", 8): passa
- OK: retomada-reprova: reprova (1) — "Talks have resumed."
- OK: retomada-reprova: reprova (1) — "The two countries continue to negotiate a new treaty."
- OK: retomada-passa: passa (0 alerta[s]) — a negação: passa
- OK: aviso-saida-reprova: reprova (1) — "The United States has given notice to leave the treaty."
- OK: aviso-saida-passa: passa (0 alerta[s]) — a forma da pauta §4.3: passa
- OK: aviso-saida-passa: passa (0 alerta[s]) — o CRS ("neither"): passa
- OK: juizo-reprova: reprova (1) — "It is a bad deal for Canada."
- OK: juizo-reprova: reprova (1) — "The United States overpays."
- OK: juizo-reprova: reprova (1) — "Canada comes out ahead."
- OK: juizo-passa: passa (0 alerta[s]) — passa
- OK: juizo-passa: passa (0 alerta[s]) — atribuído (a Zona): passa
- OK: apagados-reprova: reprova (1) — "Their towns were erased."
- OK: apagados-passa: passa (0 alerta[s]) — a forma da pauta §4.4: passa
- OK: renata-fogo-reprova: reprova (1) — "Houses in Renata were burned."
- OK: renata-fogo-passa: passa (0 alerta[s]) — a forma da pauta §4.4: passa
- OK: pausa-sem-data-reprova: reprova (1) — "The talks are still paused."
- OK: pausa-sem-data-passa: passa (1 alerta[s]) — a forma do fatos-c ("O que muda", 9): passa
- OK: pausa-sem-data-passa: passa (1 alerta[s]) — a forma da pauta §4.5: passa
- OK: area-na-tela-reprova: reprova (1) — "The reservoirs flooded about 110,000 hectares."
- OK: area-na-tela-reprova: reprova (1) — "The lakes covered 270,000 acres of valley."
- OK: area-na-tela-passa: passa (0 alerta[s]) — o acre-pé definido (pauta §4.2): passa
- OK: energia-na-tela-reprova: reprova (1) — "Canada's share falls from 1,141 megawatts to 550."
- OK: energia-na-tela-reprova: reprova (1) — "That is more than 200,000 kilowatt years of energy."
- OK: energia-na-tela-passa: passa (0 alerta[s]) — passa
- OK: vazao-na-tela-reprova: reprova (1) — "In June, the river carried 6,134 cubic meters per second."
- OK: vazao-na-tela-passa: passa (1 alerta[s]) — a forma da pauta §7: passa
- OK: valores-na-tela-reprova: reprova (1) — "British Columbia sold that power for 253,929,534 dollars."
- OK: valores-na-tela-reprova: reprova (1) — "Arrow alone was paid 52.1 million dollars."
- OK: valores-na-tela-reprova: reprova (1) — "The utilities agreed to pay 29.9 million dollars."
- OK: valores-na-tela-passa: passa (1 alerta[s]) — a forma da pauta §4.2: passa
- OK: aip-flexivel-reprova: reprova (1) — "The United States can ask for zero to four million acre-feet, four years ahead."
- OK: aip-flexivel-passa: passa (0 alerta[s]) — passa
- OK: datas-na-tela-reprova: reprova (1) — "Duncan was finished in 1967, Keenleyside in 1968, and Mica in 1973."
- OK: datas-na-tela-reprova: reprova (1) — "In 1951, the United States proposed Libby Dam."
- OK: datas-na-tela-passa: passa (0 alerta[s]) — a forma da pauta §4.2: passa
- OK: nivel-arrow-reprova: reprova (1) — "In February 2017, the lake fell to 1,401.4 feet."
- OK: nivel-arrow-reprova: reprova (1) — "In 2017, the lake hit its lowest level."
- OK: nivel-arrow-passa: passa (0 alerta[s]) — o fecho da pauta §7, sem o nível: passa
- OK: sinixt-numeros-reprova: reprova (1) — "In 1902, there were 21 Sinixt; by 1930, one."
- OK: sinixt-numeros-passa: passa (0 alerta[s]) — a forma da pauta §4.4: passa
- OK: salmao-26-reprova: reprova (1) — "For 26 years, salmon reached Canada."
- OK: salmao-26-passa: passa (0 alerta[s]) — passa
- OK: fontes-de-fundo-reprova: reprova (1) — "The EIA counts the river's hydropower."
- OK: fontes-de-fundo-passa: passa (0 alerta[s]) — passa
- OK: bargaining-chip-reprova: reprova (1) — "Dix said, "The treaty will not be a bargaining chip.""
- OK: bargaining-chip-reprova: reprova (1) — a fala citada atravessa duas frases: reprova pelo parágrafo
- OK: bargaining-chip-passa: passa (1 alerta[s]) — a paráfrase do fatos-c ("O que muda", 1): passa
- OK: mais-importante-aspas-reprova: reprova (2) — "The State Department called Keenleyside "the most important of the Canadian dams.""
- OK: mais-importante-aspas-reprova: reprova (1) — "The State Department says Keenleyside is the most important dam."
- OK: mais-importante-aspas-passa: passa (0 alerta[s]) — a meia frase do fatos-c ("O que muda", 4): passa
- OK: maior-praia-do-cassino-passa: passa (0 alerta[s]) — a regra do vídeo 6 saiu: passa
- OK: reta-do-cassino-passa: passa (0 alerta[s]) — a regra do vídeo 6 saiu: passa
- OK: foguetes-do-cassino-passa: passa (0 alerta[s]) — a regra do vídeo 6 saiu: passa
- OK: altair-do-cassino-passa: passa (0 alerta[s]) — o alerta do vídeo 6 saiu: passa sem alerta

## Os alertas do Columbia (nunca reprovam)

- OK: picos-sem-2009-alerta: passa (1 alerta[s]) — "Six springs peaked between 450,000 and 600,000."
- OK: dois-denominadores-alerta: passa (1 alerta[s]) — "Together, the three treaty lakes can store as much water as the whole river carries past The Dalles in about six weeks."
- OK: gatilho-sem-crs-alerta: passa (1 alerta[s]) — "US planners projected that Canadian storage would come into play between 450,000 and 650,000 cubic feet per second."
- OK: gatilho-sem-crs-passa: passa (0 alerta[s]) — com o CRS na frase seguinte: sem alerta
- OK: estudo-bc-alerta: passa (1 alerta[s]) — "Its own estimate says on-call flood control alone would cost the US 40 to 150 million dollars a year in lost power."
- OK: faixa-bc-hydro-alerta: passa (1 alerta[s]) — "Canada's share is worth between 110 and 400 million dollars a year."
- OK: mortos-cheia-sem-dono-alerta: passa (1 alerta[s]) — "Across the whole flood, at least 51 people died."
- OK: 30000-sem-dono-alerta: passa (1 alerta[s]) — "The flood displaced about 30,000 people."
- OK: sinixt-dono-alerta: passa (1 alerta[s]) — "The Arrow Lakes Band was declared extinct in 1956."
- OK: dix-alerta: passa (2 alerta[s]) — "Adrian Dix spoke about the treaty."
- OK: barton-alerta: passa (1 alerta[s]) — "Arrow is the most critical Canadian reservoir for flood risk management."
- OK: cbc-alerta: passa (2 alerta[s]) — "In 2025, CBC News asked whether this treaty could be used in the tariff fight."
- OK: puds-alerta: passa (1 alerta[s]) — "Three utilities in Washington stopped paying in 2024."
- OK: pausa-sem-dono-alerta: passa (1 alerta[s]) — "The US administration paused the talks."
- OK: comprimento-rio-alerta: passa (1 alerta[s]) — "The Columbia runs about 1,243 miles."
- OK: quantia-fixa-alerta: passa (1 alerta[s]) — "The deal keeps a fixed amount of room."
- OK: quem-vendeu-alerta: passa (2 alerta[s]) — "Canada sold the first 30 years of that power."
- OK: curva-sem-lugar-alerta: passa (1 alerta[s]) — "The river turns at its big bend."
- OK: every-sem-data-alerta: passa (1 alerta[s]) — "Every spring, the United States pays for that empty space."
- OK: every-sem-data-passa: passa (0 alerta[s]) — com a data absoluta: sem alerta
- OK: acre-pe-alerta: passa (1 alerta[s]) — "The three dams hold 15.5 million acre-feet."
- OK: acre-pe-passa: passa (0 alerta[s]) — definido na frase seguinte: sem alerta
- OK: uma-vez-no-gancho-alerta: passa (2 alerta[s]) — os 39 % e os 88 anos ditos duas vezes: alerta (K6)
- OK: deal-treaty-apresentado-alerta: passa (1 alerta[s]) — "the treaty" sem ter sido apresentado: alerta (os leitores)
- OK: deal-treaty-apresentado-passa: passa (0 alerta[s]) — apresentado antes ("A treaty between the two countries…"): sem alerta
- OK: deal-apresentado-alerta: passa (1 alerta[s]) — "the deal" no gancho sem "a temporary deal" antes: alerta
- OK: numeros-50: passa (0 alerta[s]) — 50 números (3 do gancho + 47): sem alerta
- OK: numeros-51: passa (1 alerta[s]) — 51 números: alerta (a pauta §7 orça 47 e mira 45)
- OK: numeros-conta: passa (1 alerta[s]) — a conta: a faixa, o 40 de 89 e a data contam uma vez cada; "six weeks" conta
- OK: a conta dos números: 8 (os 3 do gancho e "1879 to 1967", "600,000", "40 of 89", "1964", "six"; "the leaders" e "the three" não contam)
- OK: palavra-everyone: passa (1 alerta[s]) — "Everyone on the crew agreed on the count."
- OK: palavra-nobody: passa (1 alerta[s]) — "Nobody on the crew questioned the count."
- OK: palavra-never: passa (1 alerta[s]) — "The crew never questioned the count."
- OK: palavra-first: passa (1 alerta[s]) — "The first count came back at dawn."
- OK: palavra-last: passa (1 alerta[s]) — "Last summer, the crew counted the posts again."
- OK: palavra-always: passa (1 alerta[s]) — "The crew always checked the count twice."
- OK: palavra-mystery: passa (1 alerta[s]) — "The empty lake is no mystery."
- OK: palavra-secret: passa (1 alerta[s]) — "The river keeps no secret from the map."
- OK: palavra-still: passa (1 alerta[s]) — "The fishermen still work the river."
- OK: palavra-here: passa (1 alerta[s]) — "Out here, the nights are dark."
- OK: palavra-this-line: passa (1 alerta[s]) — "Follow this line to the border."
- OK: vetada-regime: reprova (1) — "flow regime" reprova pela VETADA do molde: escreva "the river's year" ou "the seasons of the river"

## A inscrição falada (voz §3; cta §1, §5 e §6)

- OK: insc-a-33: reprova (1) — abaixo de 35 %: reprova (a conta daqui: 32.9 %)
- OK: insc-a-33: o portão dá 32.9 % (4:54.4), a conta daqui 32.9 %
- OK: insc-a-36: passa (1 alerta[s]) — entre 35 % e 37 %: alerta (a conta daqui: 35.8 %)
- OK: insc-a-36: o portão dá 35.8 % (5:20.8), a conta daqui 35.8 %
- OK: insc-a-50: passa (0 alerta[s]) — no meio: passa sem alerta (a conta daqui: 50.2 %)
- OK: insc-a-50: o portão dá 50.2 % (7:29.5), a conta daqui 50.2 %
- OK: insc-a-59: passa (1 alerta[s]) — entre 58 % e 60 %: alerta (a conta daqui: 58.8 %)
- OK: insc-a-59: o portão dá 58.8 % (8:46.6), a conta daqui 58.8 %
- OK: insc-a-62: reprova (1) — acima de 60 %: reprova (a conta daqui: 61.9 %)
- OK: insc-a-62: o portão dá 61.9 % (9:14.0), a conta daqui 61.9 %
- OK: insc-ausente: reprova (1) — nenhuma frase com "subscribe to Alpha Point": reprova
- OK: insc-duas: reprova (1) — duas: reprova (o "here" alerta)
- OK: insc-outro-subscribe: reprova (1) — outro "subscrib…" no texto: reprova
- OK: insc-sem-alpha-point: reprova (2) — "subscribe to the channel": reprova (ausente, e o "subscrib…" fora dela)
- OK: insc-no-gancho: reprova (4) — antes da assinatura: reprova (e no 1º minuto, fora da janela, e no meio do parágrafo do gancho)
- OK: insc-no-fecho: reprova (2) — depois da marca do fecho: reprova
- OK: insc-no-fecho-sem-marca: reprova (2) — sem a marca do fecho, a última frase do texto (nas 8 últimas): reprova
- OK: insc-meio-do-paragrafo: reprova (1) — a 3ª de 6 frases do parágrafo: reprova
- OK: insc-penultima-sem-volta: reprova (1) — a penúltima, com uma frase qualquer depois: reprova
- OK: insc-penultima-com-volta: passa (0 alerta[s]) — a penúltima, com "Back to the river, then." por último: passa
- OK: insc-volta-now: passa (1 alerta[s]) — a volta do exemplo do Lucas ("Now, back to the river."): passa, e o "Now" dispara o alerta do presente do molde
- OK: insc-inicio-do-ato: passa (0 alerta[s]) — a primeira do parágrafo, com a marca de ato antes: passa
- OK: insc-sem-ato: passa (1 alerta[s]) — na fronteira de parágrafo, sem marca de ato: alerta
- OK: insc-smash: reprova (1) — "If you've followed the river this far, smash that subscribe to Alpha Point button."
- OK: insc-hit-the-like: reprova (1) — "If you've followed the river this far, hit the like and subscribe to Alpha Point."
- OK: insc-like-button: reprova (1) — "If you've followed the river, tap the like button and subscribe to Alpha Point."
- OK: insc-leave-a-like: reprova (1) — "If you've followed the river this far, leave a like and subscribe to Alpha Point."
- OK: insc-ring-the-bell: reprova (1) — "If you've followed the river this far, subscribe to Alpha Point and ring the bell."
- OK: insc-bell: reprova (1) — "If you've followed the river this far, subscribe to Alpha Point and tap the bell."
- OK: insc-dont-forget: reprova (1) — "Don't forget to subscribe to Alpha Point if you've followed the river this far."
- OK: insc-make-sure: reprova (1) — "If you've followed the river this far, make sure to subscribe to Alpha Point."
- OK: insc-please: reprova (1) — "If you've followed the river this far, please subscribe to Alpha Point."
- OK: insc-comment: reprova (1) — "If you've followed the river this far, subscribe to Alpha Point and leave a comment."
- OK: insc-every-week: reprova (1) — "If you want a river story every week, subscribe to Alpha Point."
- OK: insc-numero: reprova (1) — "If you've followed the river for five minutes, subscribe to Alpha Point."
- OK: insc-plateia: reprova (1) — "If you're new here, subscribe to Alpha Point, like most of you haven't."
- OK: insc-25-palavras: reprova (1) — "If you have followed this long and winding river all the way from the lake in the north to the dam in the south, subscribe to Alpha Point."
- OK: insc-17-palavras: passa (2 alerta[s]) — "If you have followed the river from the lake down to the dam, subscribe to Alpha Point today."
- OK: insc-sem-if: passa (1 alerta[s]) — "You've followed the river this far, so subscribe to Alpha Point."
- OK: insc-sem-you: passa (1 alerta[s]) — "If the river held up so far, subscribe to Alpha Point."
- OK: insc-like-verbo: passa (0 alerta[s]) — o "like" verbo (a opção 2 do Cassino): passa
- OK: insc-depois-de-citacao: passa (1 alerta[s]) — a frase de antes com aspas: alerta
- OK: insc-depois-de-numero-heroi: passa (1 alerta[s]) — a frase de antes com um número grande: alerta
- OK: insc-depois-de-ano: passa (0 alerta[s]) — a frase de antes só com um ano: sem alerta
- OK: insc-depois-de-60-anos: passa (0 alerta[s]) — o fecho do ato 2 da pauta ("For 60 years, that was the deal."), onde a pauta põe a inscrição: sem alerta

## O gancho A da pauta §8

- OK: gancho-a-so: reprova (4) — o gancho A sozinho: nenhum "não se diz", nenhuma regra do título nem da 1ª frase; reprova pela faixa (sem corpo), pelo "But" (o "Yet" cai na palavra 61), pelo teto de 170 palavras (196) e pela inscrição ausente
- OK: o gancho A tem 196 palavras até a assinatura no texto do narrador (65.7 s a 179; a pauta §8 conta 195 na cópia para a voz, com os números por extenso), e nenhum "But"
- OK: o gancho A tem 8 números pela conta do portão (a pauta conta 7; o portão conta também "a dozen miles")
  - os alertas do gancho A, para quem escreve: conferir /\b(still|today|now|currently)\b/i: "Even without this deal, the treaty · conferir /\bhere\b/i: "Here's the strange part." · taxa abre_and: 11.36 por mil palavras · taxa abre_so: 5.68 por mil palavras · taxa perguntas: 5.68 por mil palavras · taxa frases_curtas: 5.68 por mil palavras · taxa heres: 5.68 por mil palavras · a primeira frase não tem número · conferir [deal-treaty-apresentado]
- OK: gancho-a-com-corpo-insc-certa: reprova (2) — o gancho A com um corpo e a inscrição numa fronteira entre atos, a ~45 %: só o "But" e o teto do gancho
  - a inscrição: parágrafo 20, 6:58.7 de 15:32.9 (44.9 %)
- OK: gancho-a-com-corpo-insc-no-gancho: reprova (6) — a inscrição antes da assinatura: reprova (no gancho, no 1º minuto, fora da janela e no meio do parágrafo)
- OK: gancho-a-com-corpo-insc-no-meio: reprova (3) — a inscrição no meio do parágrafo: reprova
- OK: gancho-a-com-corpo-insc-tarde: reprova (3) — a inscrição a ~62 %: reprova
- OK: gancho-a-com-corpo-insc-no-fecho: reprova (4) — a inscrição no fecho: reprova
- OK: gancho-a-but-na-4a: reprova (2) — com "But only about 15 percent…" na 4ª frase, o "But" cai na palavra 51: ainda reprova por uma palavra (as 3 primeiras frases do gancho A têm 51 pela conta do molde, que parte o "37.6" em dois)
- OK: gancho-a-but-na-3a: reprova (1) — com "But it's a temporary deal…" na 3ª frase, o "But" cai na palavra 39 e passa; fica o teto de 170

## O fecho (alerta; fica do molde)

- OK: fecho-repete-pergunta: passa (1 alerta[s]) — "pay to keep a lake" (5 palavras da pergunta) na última frase
- OK: fecho-4-palavras: passa (0 alerta[s]) — "keep a lake low": 4 palavras da pergunta, sem alerta
- OK: fecho-pergunta-fora-das-8: passa (0 alerta[s]) — a mesma frase na 9ª antes do fim: sem alerta
- OK: fecho-em-lista: passa (2 alerta[s]) — "First…", "Then…", "Finally…" nas 3 últimas
- OK: fecho-2-da-lista: passa (1 alerta[s]) — duas aberturas de lista: sem alerta

## O autoplágio compara também com o roteiro do vídeo 6

- OK: autoplagio-cassino: passa (1 alerta[s]) — uma frase do roteiro do Cassino

## As frases seguras da pauta (§4, §5, §7) e do fatos-c, juntas num texto: nenhuma reprova

- OK: frases-seguras: reprova (2) — 84 frases da pauta e do fatos-c (a da medida, a do gatilho, a das duas contas, o fecho…)
  - os problemas do texto (fora do "não se diz"): palavras: 3816, acima de 2700 (a faixa do vídeo 7: o pedido  · inscrição [inscricao-posicao]: começa em 13:43.1 (62.6 % do ; os alertas do Columbia: [cbc], [estudo-bc], [puds], [deal-treaty-apresentado], [numeros-falados]

## O roteiro do vídeo 6 nos dois portões, e o sha

- OK: o portão novo reprova o roteiro do vídeo 6 só pelo título (2), pela primeira frase sem "Arrow" (1) e pela inscrição ausente (1), sem nenhum "não se diz" do Columbia (as 2450 palavras ficam na faixa nova): exit 1, 4 problema(s): título [titulo-pagamento]: nenhuma das 3 primeiras | título [titulo-empty]: "empty"/"emptied" não apare | a primeira frase não diz "Arrow" (o lugar da image | inscrição [inscricao-ausente]: nenhuma frase com "
- OK: e nenhum alerta do Columbia nele (nenhum; 35 números falados)
- OK: e alerta quem paga, o lago e o valor fora das 3 primeiras, e a 1ª frase sem número (a do Cassino não tem número)
- OK: o portão do vídeo 6, no mesmo texto: exit 0 (PASSA)
- OK: as taxas saem iguais nos dois portões (abre_but 0, abre_and 1.23, abre_so 2.47, travessoes 0, perguntas 1.23, frases_curtas 2.88, imperativo_mapa 0.41, heres 0, antitese 0; 2430 palavras contadas)
- OK: o sha do roteiro do vídeo 6 é o mesmo nos dois portões (3348a7b2cc5d)
- OK: palavras, parágrafos, frases, média, maior frase e gancho iguais (os dois contam a 179: 42.9 s)
- OK: o autoplágio é o mesmo nos dois (o novo compara também com o próprio Cassino, que sai da conta por ser o arquivo medido): 0 trecho(s)
- OK: os alertas do fecho são os mesmos nos dois (0)
- OK: o sha de um texto com BOM, CRLF e comentário de duas linhas é o mesmo nos dois portões e o da base (b3ca5f481433)
- OK: e o comentário de duas linhas não atrapalha a leitura das marcas (exit 0, a inscrição na fronteira entre atos)

## O ferramentas/portao-fatos.mjs com o portão novo

- OK: o portao-fatos roda a cópia do portão novo (numa raiz de teste) e o sha cruza: exit 1 (o piso reprova a tabela vazia, de propósito), gate.igual = true

## O arquivo padrão e as opções do molde

- OK: sem argumento, o portão procura roteiros/rio-columbia/roteiro-narrador.md, que ainda não existe: exit 2, "não encontrado: roteiros/rio-columbia/roteiro-narrador.md"
- OK: opção desconhecida: exit 2
- OK: --onde: cada taxa traz as frases (abre_so: ["So why would anyone pay to keep a lake low?"]), e a conta dos números traz os números (20, 37.6 million, 2025)
- OK: --derivados: 7 conferidos (o laudo, o editor, a pronúncia, a tradução pt-BR, a cópia para a voz, as trocas e out/rio-columbia/roteiro.md; os -r1/-r2/-r2b/-antigo fora); o editor e a cópia em out/ com o sha velho e a pronúncia sem o carimbo reprovam (exit 1; velhos: rio-columbia/pronuncia.md, rio-columbia/roteiro-editor.md, rio-columbia/roteiro.md)
- OK: --derivados: os 7 com o sha de agora passam (exit 0)
- OK: --derivados: as trocas e a tradução pt-BR com o sha velho reprovam (exit 1; rio-columbia/roteiro-narrador-pt-BR.md, voz/trocas.md)
```
