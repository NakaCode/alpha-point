# O portão do roteiro do vídeo 8 (`australia-animais`): as notas da derivação

Derivado em 18/11/2026, pelo pedido da Sala de controle (`roteiros/australia-animais/_trabalho/pedido-gate.md`), do portão do vídeo 7
(`roteiros/rio-columbia/_ferramentas/gate.mjs`). As fontes foram estas:

- a pauta v2 aprovada (`pautas/2026-11-18-video-8-australia-pauta.md`): §2, §3, §4 com a coluna "Na fala" e as frases seguras, §5, §7, §8 e
  "O que o cético pediu → o que mudou";
- o registro, com as leituras da Sala depois da pauta (`pautas/2026-11-18-video-8-australia.md`);
- o teste dos leitores (`out/_pautas/video-8-australia/teste-leitores.md`);
- as falas do Lucas (`roteiros/australia-animais/decisoes-lucas.md`);
- `marca/voz.md` §1 a §3, `marca/cta.md` §1, §5 e §6, e `marca/embalagem.md` §2;
- no acréscimo da Sala (18/11/2026, ~16:3x): `pautas/australia-animais/_trabalho/fatos-c.md`, `pautas/australia-animais/_trabalho/medida-censo.md`
  e o fim do registro ("O NCIS, o AIHW e o AVRU, no navegador do app"). O que ele mudou está em "O acréscimo da Sala", abaixo.

- O portão: `roteiros/australia-animais/_ferramentas/gate.mjs`. Uso: `node roteiros/australia-animais/_ferramentas/gate.mjs [arquivo]
  [--derivados] [--onde]`, com o cwd na raiz do canal. Sem arquivo, ele mede `roteiros/australia-animais/roteiro-narrador.md`, que ainda não
  existe, e sai com exit 2.
- A prova: `roteiros/australia-animais/_ferramentas/gate-provar.mjs`. Os casos ficam em `out/_tmp/gate-australia-animais/casos/` e a saída
  em `out/_tmp/gate-australia-animais/prova-saida.md`, fora do git, como as provas dos portões de antes.
- O topo do `gate.mjs` diz o mesmo que estas notas, e o como de cada regra está junto dela no código.
- O `ferramentas/portao-fatos.mjs` e o `ferramentas/aplicar-lista.mjs` acham o portão em `roteiros/<proj>/_ferramentas/gate.mjs` e o rodam com
  o caminho do roteiro. A leitura do texto falado (`paragrafosDe`) e a forma do sha ficam as do molde. A prova roda o `portao-fatos` numa raiz
  de teste e confere que o sha cruza (`gate.igual = true`).

## O que saiu (as regras só do Columbia)

- **O título dele:**
  - reprovavam `[titulo-pagamento]` e `[titulo-empty]`;
  - alertavam `[titulo-eua]`, `[titulo-lago]`, `[titulo-parte]` e `[titulo-valor]`.
- **A 1ª frase com "Arrow"**, que reprovava.
- **As listas dele, inteiras:**
  - o `NAO_SE_DIZ` (61 ids, do `tratado-cancelado` ao `fontes-de-fundo`);
  - os dois por parágrafo (`bargaining-chip` e `mais-importante-aspas`);
  - o `ALERTA_COL` (18 ids, do `picos-sem-2009` ao `every-sem-data`);
  - o `[acre-pe]`, o `[uma-vez-no-gancho]` e o `[deal-treaty-apresentado]`;
  - as constantes que só eles usavam (`N600`, `N450`, `N650`, `N376`, `N644`, os `N..PCT`, `N88`, `STATE_DEPT`, `CANADA`, `CONTROLA_V`,
    `CANCELOU`, `EXPIROU`, `GATILHO`, `SINIXT`, `LAGO_TODO`, `ACRE_PE`, `USO_DEAL`, `INTRO_TRATADO`…).

  A prova confere que estas frases, que o portão do vídeo 7 reprovava ou alertava, passam aqui sem alerta: "The treaty was scrapped.",
  "Canada controls the river.", "Trump called it a very large faucet." e "Every spring, the United States pays for that empty space.".
- A lista dele do que nenhum padrão pega.
- Das palavras de `ALERTA` da voz, nenhuma era só do Columbia: a lista fica inteira.

## O que entrou

### Os três títulos

São os títulos do Test & Compare da publicação, e o gancho paga os três. A decisão é do Lucas, em 18/11/2026: "O 3, o 2 e o meu
(Recomendado)". A regra de onde se pagam é a do `embalagem.md` §2.

**Onde o portão procura:**
- As frases dessas regras são as das taxas (`frasesTaxaDe`, sem as aspas de abertura), como no Columbia.
- "O gancho" são as frases antes da assinatura.
- Se não houver assinatura (o molde já reprova isso), o gancho é o 1º parágrafo. Essa recaída é decisão minha: sem ela, um gancho sem
  assinatura deixaria de ser medido pelos títulos.

**T3, *Australia's Deadliest Snake Isn't Its Most Venomous One*, nas 3 primeiras frases:**
- REPROVA `[titulo-3-veneno]` quando nenhuma das 3 tem o superlativo do veneno.
  - Aceito como superlativo: "most potent/toxic/lethal/powerful/deadly venom", "most venomous", "most toxic", "deadliest/strongest venom" e
    "venom is/was the most potent/toxic…", com uma palavra no meio ("most potent snake venom").
  - "topped a test" não conta.
- REPROVA `[titulo-3-mata]` quando nenhuma das 3 diz que ela não é a cobra que mata. Aceito três formas:
  - "kill/killer/deadliest" com "isn't", "is not", "wasn't", "aren't", "'s not" ou "not even" antes, até 60 letras ("And it isn't even the
    snake that kills the most Australians", a frase do §8);
  - "another/a different/some other/a second snake (one, species)" ou "somewhere/someone/something else", "elsewhere", com uma forma de
    "kill" ("The snake that actually kills Australians lives somewhere else", a ponte do ato 3);
  - "doesn't kill the most".

  "it rarely kills" e "it has never killed anyone" não pagam e reprovam à parte (`[taipan-raramente-mata]` e `[taipan-nunca-matou]`).
- REPROVA `[ressalva-camundongo]` quando o superlativo do veneno, em qualquer frase do gancho, não tem "mice", "mouse", "lab" ou "laboratory"
  na mesma frase ou na seguinte. A ressalva na frase 2 passa. Fora do gancho, a regra não vale (a ponte do ato 3 passa).

**T2, *Why So Few People Die From Australia's Deadly Animals*, no gancho:**
- REPROVA `[titulo-2-registro]` sem "85" ou "eighty-five" com "people", "deaths", "died" ou "killed" na mesma frase.
- REPROVA `[titulo-2-estrada]` sem "road"/"roads" e "month"/"months" na mesma frase. Duas frases ("Look at Australia's roads in 2025. In an
  average month, they killed more than that.") reprovam, como o pedido diz.

**T1, o do Lucas, *Why Does Australia Have So Many Dangerous Animals?*, no gancho:**
- REPROVA `[titulo-1]` quando o gancho não tem uma frase com número ou fração, "snake(s)", "species" ou "kinds", e "venomous" ou
  "elapid(s)". Desde o acréscimo da Sala, a pergunta do título atribuída a outros também paga ("Every visitor asks the same thing: why
  does Australia have so many dangerous animals?"); dita pelo narrador, não.
  - Decidi que a contagem tem de ser a da Austrália: a frase com "world", "global", "on Earth" ou "elsewhere" e sem "Australia", "here" ou
    "the country/continent" não paga. Sem isso, "Worldwide, … one in five kinds of venomous snakes" pagaria o título do Lucas.
  - "a great many kinds" não conta.
- ALERTA `[titulo-1-palavra]` sem "dangerous" nem "deadly" no gancho.

### A primeira frase

A fonte é `voz.md` §1, e a imagem de abertura é o aéreo das planícies do Channel Country (pauta §6).
- REPROVA sem "venom" ou "venomous" (aceito `venom\w*`).
- REPROVA sem "Australia", "Australian" ou "outback". O "Australians" da 2ª frase não conta.
- ALERTA sem número, como no molde: algarismo, ou número por extenso de "two" a "billion". A frase 1 do gancho A não tem número.

### O "não se diz" da Austrália (`NAO_SE_DIZ`)

**De onde vem:**
- a pauta §5 inteira;
- o que a coluna "Na fala" do §4 põe "fora" ou só na "tela";
- a lista "O que fica fora da fala" do §7, onde um padrão a pega sem barrar a forma segura;
- o registro;
- o que a Sala decidiu depois da pauta.

**Como funciona:**
- Cada id REPROVA com o porquê e a fonte na mensagem.
- Onde a pauta dá a forma segura, ela passa, e a prova confere cada uma.
- A frase anterior vale para o que a frase diz por pronome (`ant`): "Out on those plains lives the inland taipan. No one has ever died from
  its bite." reprova.
- São 62 ids frase a frase (54 do pedido e 8 do acréscimo da Sala, na seção dele) e 1 por parágrafo. As linhas abaixo já estão na forma de
  depois do acréscimo.

| id | O que reprova | O que passa ao lado (na prova) |
|---|---|---|
| `premissa-tantos` | "more venomous animals than anywhere else", "home to the world's deadliest animals" e a pergunta "Why does Australia have so many venomous/dangerous animals?" dita pelo narrador como pressuposto | "So does Australia really have so many dangerous animals?" (a forma do cético, §8); "Australia is famous for having so many deadly animals"; "so many of Australia's snakes" (a ponte do ato 1); a pergunta atribuída a outros, na frase, na anterior ou na seguinte (com o alerta `[pergunta-atribuida]`) |
| `mito` | "myth", "hype", "overrated" ou "overblown" sobre os bichos ou a fama, sem dono | a negação; a fala de Arbuckle com "says" |
| `gondwana-livescience` | "split from Gondwana about 100 million years ago"; o "60 million years ago" das cobras; "an accident of history"; "the first snakes colonized" | "Some 80 to 85 million years ago, Australia began to pull away from Antarctica." |
| `taipan-mais-mortal` | a taipan (ou "out there lives…") como "the deadliest snake (in the world / on Earth)" ou "Australia's deadliest snake" | a negação; o título 3 |
| `taipan-nunca-matou` | "never killed", "no recorded/known/confirmed death" da taipan, também por pronome na frase seguinte | "None was put down to the inland taipan."; "…has almost no record of hurting people." |
| `taipan-raramente-mata` | "rarely kills" sobre a taipan | "So the most potent venom on land rarely touches anyone…" (a ponte do ato 5) |
| `duzia-sem-ano` | "about a dozen cases" sem o ano | "By 2017, doctors had written up only about a dozen cases…" |
| `ld50-valor` | o valor da LD50 (mg/kg); "one bite can kill 100 men" | "the dose that kills half the mice in a test, what scientists call the LD50" |
| `evoluiu-para-matar` | "evolved to kill people"; "stronger because of the isolation" | a hipótese da presa ("…probably an adaptation to its prey: a rat can bite back.") |
| `camundongo-errado` | "But mice aren't people"; "the mouse test is wrong" | "Researchers now criticize mouse tests like that one, partly because…" |
| `marrom-segunda` | "the second most venomous snake" | "…near the top, too: the brown snake." |
| `toxina-extrema` | a toxina exclusiva ligada ao extremo no camundongo ("so extreme on lab rodents", "deadly to mice"), na frase ou na seguinte | "Brown snakes and taipans share a toxin no other snakes have." com a frase seguinte da pauta |
| `marrom-quintal` | "in people's backyards", "in gardens/the suburbs/cities", "all over Australia" | "The other lives where people farm and build."; as palavras do Queensland Museum |
| `taipan-vazio` (fechado com o Censo) | "empty", "deserted", "uninhabited", "no one/nobody lives" sobre a terra da taipan; "nearly empty" e "almost no one" sem o número; outro número de gente ali que ~1.000 (1.000 a 1.299) | "At the 2021 census, about a thousand people lived there."; "about one person for every hundred square miles"; "One lives out on these floodplains, where about a thousand people live, …"; "nearly empty: about a thousand people live there" |
| `espera-soro` | as 4,3 horas; "the wait for antivenom killed them" | "Ten of those people went into cardiac arrest outside a hospital." |
| `isolada-tempo` | "isolated for 40/50 million years" | "For tens of millions of years, it traveled alone, an island continent." |
| `continente-rapido` | "the fastest-moving continent/plate"; os 7 cm | "It keeps moving north almost three inches a year." |
| `elapideas-depois` | "elapids arrived 40 million years ago"; "arrived after Australia hit Asia"; "And then, from Asia, came the snakes" | "But before Australia ever reached Asia, something had already made the crossing." |
| `campo-aberto` | "an open field", "every niche", "an explosion of species", e um "So" ligando a falta de víboras aos papéis que elas ocupam | os fatos lado a lado (§4.2) |
| `45-e-mar-fundo` | o norte e o mar fundo como um tempo só, numa frase | "…and over the next ten million years or so, deep ocean opened up behind it." |
| `quase-toda-venenosa` | "almost every snake in Australia is venomous" | "Australia has well over a hundred kinds of them." |
| `corrente-secou` | a corrente oceânica que secou a Austrália | "Then the continent dried out. Its interior began turning arid…" |
| `endemismo` | "nine in ten" ou "90 %" dos répteis "found nowhere else" | os cangurus e os coalas, sem gatos nativos nem animais de casco |
| `agua-viva-recorde` | "the most venomous animal on Earth" da caixa-medusa; a caixa-medusa como perigo australiano | "…has been blamed for around 70 deaths in tropical Australian waters."; Arbuckle, "…live in warm seas well beyond Australia." |
| `crocodilo` | "Crocodiles are Australian animals"; o total de crocodilos | "The crocodiles killed 13." com "They live from Sri Lanka to northern Australia…" |
| `soro-agua-viva` | o peixe-pedra na frase dos primeiros soros do mar; "and it works" | "…the world's first antivenom for a jellyfish, in 1970." |
| `tubarao` | "Taronga"; "rare and falling"; número com tubarão; o tubarão de 2026 e o porto de Sydney | "…animals in the sea, sharks among them…" (o ABS) |
| `aranhas-desde` | "no one has died from a spider bite since 1981"; "since 1956" do redback sem "confirmed" (e qualquer outro ano com o redback); "the last spider death was in 2016" | por espécie, "no confirmed death after it"; "There hasn't been a confirmed death from a redback bite since 1956."; o zero do ABS de 2016–2025; o fecho com "the park says" |
| `veneno-lagartos` | "the funnel-web's venom evolved to fight lizards" | "…started out as a weapon for catching insects." e "The males, the team proposes, …" |
| `acasalamento` | "mating season" | "…leave their burrows to look for females, and most happen between November and March." |
| `soro-funnel` | "completely reversed (the bite)"; os 97 % com o soro, a aranha, as picadas ou os casos; as crianças com a funnel-web | "…the antivenom worked completely in almost every case."; os 97 % de outro assunto (o Peru) |
| `redback-soro` | "the redback antivenom saved lives" | "So it isn't clear that the antivenom is what keeps redback bites from killing." |
| `caes-imunes` | "immune" | "insensitive" |
| `minutos` | "can kill in 15 minutes" | — |
| `internacoes` | "about 42,000 hospitalisations", "over 13 years", "12,000 spider bites", as 39.424, o "199 per", o 1 em 616 e o 1 em 227 | "Over a little more than a decade, spider bites put Australians in the hospital about 12,000 times." |
| `cavalo-canguru` | o NCIS com cavalo, canguru, boi, cão ou um número (o PDF não foi lido); cavalo ou canguru com número; "horses kill more … than…" | "On farms, a separate study found, most fatal incidents with animals involved horses or cattle."; o resumo da página do NCIS, sem número ("…deaths … remain relatively rare, particularly in comparison to deaths associated with other species") |
| `cama` | a cama, e os 118, 864 e 86 | "The land and the water kill far more than any animal." |
| `eua` | comparação de mortes ou de risco com os EUA | os EUA sem morte ("…the same family includes the rattlesnakes.") |
| `india-razao` (fechado com o fatos-c) | um múltiplo exato ("350 times", "300 times"); "hundreds of times" sem o por habitante (compara totais); "thousands of times"; também na frase seguinte. "more than 300 times" por habitante alerta | "Per person, India's snakebite death rate is hundreds of times Australia's."; a OMS, com o intervalo do mundo e os ~58.000 da Índia; "Do the math per person and it's roughly one in 21,000 Indians every year." |
| `abelhas-sem-soro` | "there's no antivenom for bee stings" | a anafilaxia e o estudo nacional (§4.6) |
| `abelha-europeia` (fechado com o fatos-c) | a morte pela abelha-de-mel sem a alergia na frase ou na seguinte ("Most bee deaths come from European honeybees."); "…kill more Australians than snakes"; outro ano que 1822, o mês, as "seven hives", "the first bees ever"; a vespa europeia com ano ou "mata mais" | a abelha trazida e o 1822 ("It came from England on a ship called the Isabella, in 1822."); "…behind roughly three in four of the fatal insect-sting reactions"; "…the insect behind most of Australia's fatal sting allergies"; a vespa sem ano |
| `soro-acabou` | "the antivenom ended snake deaths" | "Snakes kill two or three people a year." |
| `parque-causa` | o parque como a razão de ninguém morrer | o fecho, com o pedido do parque |
| `fama-hospitais` | "Australia's reputation comes from its good hospitals" | "He has wondered whether part of that image comes from…" |
| `hoje` | "right now", "this year" ou "this summer" com bicho ou soro; o TGA; a falta de soro; as mortes de 2026 | "In January 2026, the park said it was down to about half its usual supply." |
| `15-por-cento` | "15 percent", "15%" ou "fifteen percent" com cobra na frase ou na anterior (também por pronome: "Worldwide, only about 15 percent are.") | os 15 % sem cobra ("Only about 15 percent of the land lies in Canada.") |
| `um-em-cinco` | o "one in five" das cobras sem "elapids and vipers" nem "front-fanged" na frase ou na anterior | "Worldwide, elapids and vipers, the front-fanged families, make up about one in five snakes."; a família na frase anterior |
| `australian-museum` | "Australian Museum" (não lido: 403) | "South Australian Museum" (o de Michael Lee) |
| `na-tela-registro` | a série ano a ano (os 9 de 2018, os 6 de 2025), o 1 em 4,6 milhões, a vida de 80 anos (1 em 38.000), os 106 por mês, os 24 dias e os 1.276 da estrada, os 2.077 afogados e as razões | "…about a one-in-three-million chance each year." |
| `na-tela-deriva` | os 33,5 milhões; os 55 a 10 milhões; os 1 a 4 milhões; os 273; as ~100 terrestres e ~30 marinhas; as ~160; os 10 a 12 milhões; os 11 + 1 e 2 + 1 casos; os 65 % (ou 66 %); o "Pliocene"; o "25 Ma" com a colisão | "Then, some 20 million years ago, Australia's leading edge began running into Southeast Asia…" (com o `[colisao-20]`) |
| `na-tela-agua` | o 1 em 225; o polvo-de-anéis-azuis e o cone; o 1935 | "It starts life as tiny polyps in tidal creeks." |
| `na-tela-soros` | os anos dos soros depois de 1930 com "antivenom" (1958, 1962, 1980; o 1955 e o 1956, fora do redback); os 224; os 17 e os 4 da marrom e da tigre; os 41 % | "…about four in ten of the bites…"; "Australia began making antivenom in 1930."; o 1956 do redback (o `[redback-ano]`) |
| `na-tela-quem-mata` | os 42 cães, os 63, os 64, os 127, as 6,5 mortes, os 75 cavalos, os 31 bois e os 81 % | "Bees and wasps killed 42, more than the snakes." |
| `na-tela-parque` | os 15 pontos de entrega; os 2.000 filhotes | "It takes about 150 milkings to make a single vial." |
| `aspas-da-jornalista` (por parágrafo, dentro de aspas) | entre aspas, como fala de Lee ou de Arbuckle: "The exception is the snakes", "well within typical range", "only about 15%", "65%", "an accident of history", "the first snakes" | sem aspas: "The exception, he says, is the snakes." |

### Os alertas da Austrália (nunca reprovam; a Sala pode tirar qualquer um)

**Frase a frase (`ALERTA_AU`, 19 ids: os 13 abaixo e os 6 do acréscimo da Sala, na seção dele):**

| id | Quando alerta | Origem |
|---|---|---|
| `live-science` | "Live Science" na voz | o pedido da Sala |
| `duas-em-tres` | "two in three" das cobras da Austrália | a pauta o proibia até a contagem, que a Sala conferiu (150 de 229, 65,5 %): decidi alerta, não reprovação |
| `contagem-dono` | a contagem das cobras (145/220, 150/229) sem dono ("Live Science", "Reptile Database", "Lee", "a biologist", "by the count", "says"…) na frase, na anterior ou na seguinte | voz §1; pauta §4.1 |
| `veneno-terra` | o superlativo do veneno com "on Earth", "on the planet", "in the world" ou "the world's", sem "land" | a ficha da Austrália do Sul: "of any land snake" |
| `fama-dono` | "overstated", "exaggerated", "overblown", "overrated" ou "overhyped" sem "Arbuckle" nem um verbo de dizer ("says", "argued", "told", "wondered"…) na frase ou na anterior | pauta §4.1 e §5 |
| `marrom-dono` | o endereço da marrom ("where people farm and build", "farmed", "grazed", "semi-urban"…) sem "museum" de duas frases antes até a seguinte | o registro |
| `parque-dono` | o "significantly more potent" dos machos ou o "no one has died" do parque sem "the park says" | pauta §4.7 |
| `colisao-20` | "some 20 million years ago" com a colisão | o verificador confere a leitura do "Early Miocene" |
| `primeiro-soro` | "first (…) antivenom" com "jellyfish", "box jelly…" ou "stinger" na frase ou na anterior | o verificador confere a leitura de Winkel 2006 |
| `internacoes-aihw` | os "about 12,000" das internações por aranha | EM PARTE: o período não fecha |
| `funnel-found` | "found it started/began/evolved…" | o "found" pesa mais que o "we propose" da fonte? |
| `amostra-pequena` | o 23 das mortes por cobra sem "study", "survey", "decade", "ten/eleven years", 2005 ou 2015 na frase ou na anterior; o 13 da funnel-web sem "at least" ou "before 1981" | o pedido da Sala |
| `hipotese-como-causa` | "because", "the reason", "that's why", "which is why", "explains why", "due to" ou "caused by" numa frase com a fama e a medicina, com a picada que solta, ou com o veneno da funnel-web e a sua origem | o pedido da Sala |

**No texto inteiro (7):**
- `[pergunta-dupla]`: a pergunta do gancho com dois "why" ou com "and why", ou duas perguntas seguidas no gancho, a segunda aberta por "And".
  A forma do cético no §8 ("So does Australia really… ? And why do so few people die from them?") alerta.
- `[oito-que-faltam]`: os 35 das cobras e os 42 das abelhas ditos, sem os outros 8 no mesmo parágrafo ou no seguinte. Contam "eight", "8",
  "arthropods", "ticks", "ants", "centipedes", "scorpions", "marine", "jellyfish", "sea animals/creatures/life" e "in the sea/ocean/water".
- `[contas-iguais]`, novo: a contagem da Live Science ("venomous", 145 de 220) no mesmo texto que o "one in five" do mundo, que é de
  elapídeas e víboras. A régua tem de ser a mesma dos dois lados, e a da Sala (150 de 229 elapídeas) é a que casa com o "one in five".
- `[uma-vez]`: cada um destes dito mais de uma vez no texto inteiro:
  - o 85 (com gente ou morte);
  - o "one in three million";
  - a contagem das cobras da Austrália (a pauta: no ato 2, "volta como imagem, sem repetir os números na voz");
  - a fração do mundo;
  - a estrada num mês, com morte na frase.

  Os três últimos são decisão minha, além do pedido.
- `[numeros-falados]`: mais de 50 números na voz. A pauta orça ~43–45, e o laudo mostra a conta.
- `[termo-definido]`: "elapid(s)" sem "front-fanged" ou "cobras"; "LD50" sem "the dose that kills half"; "anaphylaxis" sem "allergic";
  "Gondwana" sem "supercontinent"; "stinger season" sem "October" ou "June". Na primeira vez, da frase anterior às duas seguintes.
- `[arbuckle-quem]`: Arbuckle na primeira vez sem "Swansea", "biologist", "professor", "scientist" ou "researcher" perto.

### O acréscimo da Sala (18/11/2026, ~16:3x)

As leituras chegaram (o fatos-c, a medida do Censo e o NCIS no navegador do app), e a Sala mandou fechar as regras que esperavam por elas e
afrouxar uma. Cada mudança tem, na prova, o caso que reprova (ou alerta) e o que passa, e as frases seguras dos dois arquivos e o resumo do
NCIS entraram no texto de conferência.

**A pergunta do Lucas, atribuída** (a leitora australiana do teste: "É a pergunta que todo estrangeiro me faz há vinte anos"):
- "Why does Australia have so many dangerous animals?" (ou "deadly", "venomous") dita por outros passa no `[premissa-tantos]`, com o ALERTA
  `[pergunta-atribuida]` para a Sala conferir a moldura, e paga o `[titulo-1]` junto da contagem das cobras.
- A moldura vale na frase, na anterior ou na seguinte: "every/most/many visitors (tourists, foreigners, people…) ask/wonder", "people ask",
  "everyone asks", "the question everyone/every visitor asks", "you've probably heard/asked/wondered", "it's the question (that) every…",
  "asks me/us/locals".
- Dita pelo narrador como pressuposto ("And why does Australia have so many dangerous animals?"), continua reprovando e não paga o título 1.

**O Censo** (`medida-censo.md`):

| id | O que faz | O que passa ao lado (na prova) |
|---|---|---|
| `taipan-vazio` | fechado: na tabela acima | — |
| `censo-ano` | REPROVA "the latest/last/most recent/current census"; ALERTA "today", "right now", "these days", "this year" ou "in 2026" com os ~1.000 | "At the 2021 census, about a thousand people lived in the Channel Country." |
| `censo-razao` | REPROVA "a thousand times", "two thousand times", "2,000 times", "thousands of times" com gente ou os estados, sem "square mile(s)" na frase | "Per square mile, that's more than a thousand times as many people as the Channel Country."; "roughly two thousand times as many people per square mile"; a Grande Sydney em pessoas ("thousands of times the people", 5.129×); a Índia fica no `[india-razao]` |
| `censo-area-taipan` | REPROVA "the taipan's range/habitat/territory", "the range of the taipan", "its range covers…" (com a taipan perto) com milhas quadradas, gente ou "covers" | "The Channel Country, where the inland taipan lives, covers about 117,000 square miles." |
| `marrom-ausente` | REPROVA a marrom (ou "it/they/the other" com ela antes) que não vive "out here", "there", no Channel Country, no interior; "only in the east", "only in those three states", "no brown snakes" | a frase do museu com "most of"; "all habitats except rainforest, the Queensland Museum says" |
| `censo-preciso` | ALERTA 1,020, 1,032, 1,224, 2,133, 2,108, 1,777, 2,326, 117,411, 19,731,792, 19,345, 5,129 e 24,924 na voz | "about 117,000 square miles"; "about a thousand people" |
| `censo-causa` | ALERTA a medida (o Censo, as milhas quadradas, os ~1.000 ou os ~20 milhões, na frase ou na anterior) ligada às mortes por "because", "that's why", "so … kills" ou uma frase aberta com "So", fora de pergunta | "You can guess which one kills." (pauta §4.4) |
| `marrom-genero` | ALERTA "eastern brown" junto das 17 mortes (na frase, na anterior ou na seguinte) | "Seventeen of them were from brown snakes." |

**O fatos-c:**

| id | O que faz | O que passa ao lado (na prova) |
|---|---|---|
| `redback-ano` | REPROVA "1955" com o redback (o soro é de 1956, Wiener, MJA 2003) | "in 1956"; "in the 1950s"; a frase segura do §3 ("…made in 1956 by a Melbourne scientist…") |
| `soro-a-razao` | REPROVA "the (main/real…) reason", "that's why", "which is why", "is why", "because of", "thanks to" ou "explains why" com o soro, a bandagem ou o primeiro socorro (na frase ou na anterior) e as poucas mortes | "part of why", "part of the reason", "Part of it is the medicine: …" (§1.4) |
| `anzcor-16` | REPROVA "16 Australians" e "in the 16 years to 2016" (o erro do ANZCOR) | os 35 do ABS |
| `carrapato-x25` | REPROVA o carrapato com morte (ou "were") e número ("Ticks killed six of them", "The other eight were ticks…"); "2 box jellyfish deaths"; "6 tick/ant deaths" | "other venomous arthropods", "venomous marine animals"; "The ants and ticks in that category can kill too — … with allergy." |
| `struan` | ALERTA "Struan" (o primeiro nome não está em fonte lida) | "…an Australian researcher, Sutherland, and his colleagues" |
| `abelha-73` | ALERTA "73 percent" com abelha (de segunda mão) | "roughly three in four" |
| `abelha-europeia`, `india-razao`, `aranhas-desde`, `na-tela-soros` | mudados: na tabela acima | — |

**O NCIS:** o `[cavalo-canguru]` deixou de reprovar o nome do NCIS sozinho. O resumo da página passa sem número ("deaths … remain relatively
rare, particularly in comparison to deaths associated with other species", e a abertura sobre a fama, com o dono). O NCIS com o cavalo, o
canguru, o boi, o cão ou um número continua reprovando, porque o PDF não foi lido.

**Decisões minhas no acréscimo** (a Sala pode desfazer):
- "nearly/almost empty" e "almost no one" passam com o número de gente na frase (a medida, §8, diz "só com o número ao lado"); o pedido
  listava "empty" sem a ressalva.
- Outro número de gente no Channel Country (fora de 1.000 a 1.299, ou "a thousand") reprova no `[taipan-vazio]`.
- "more than 300 times", por habitante, é ALERTA, não reprovação: o fatos-c o dá como seguro (§5.2), e o acréscimo reprova o múltiplo
  exato. "hundreds of times" só passa com o por habitante (por pessoa, per capita, a taxa, a população) na frase ou na anterior: sem ele,
  compara totais (58.000 contra 3 ou 4 por ano dá milhares de vezes).
- Os 835 envenenados continuam reprovando no `[espera-soro]`: a pauta §7 os põe fora da fala, e o acréscimo não os liberou. A frase do
  fatos-c "A national study found 835 cases in ten years." saiu do texto de conferência; a Sala pode liberar.
- A vespa europeia com ano reprova (o 1959 é só de resumo, e a fonte oficial deu 403); sem ano, passa.
- O `[censo-razao]` deixa passar a Grande Sydney ("thousands of times the people" é verdade em pessoas, 5.129×) e a Índia (que tem regra
  própria).
- O `[carrapato-x25]` também pega "The other eight were ticks, …", que a prova usava como forma que passava no `[oito-que-faltam]`: o caso
  agora diz "other venomous arthropods, like ants, and venomous marine animals".

### A faixa, a conta dos números, o autoplágio e uma mensagem

- **A faixa** é de 2.500 a 2.800 palavras faladas. A do Columbia era de 2.450 a 2.700. A média de 18 e o teto de 34 por frase ficam os do
  molde, e o ritmo de conta continua em 179 palavras/min.
- **A conta dos números falados** é a do Columbia, com três ajustes:
  - a razão ("one in three million", "1 in 3 million", "one-in-five") conta uma vez, sempre;
  - o número por extenso conta também antes de "of them/those/these" ("Seventeen of them", "Ten of those people") e das medidas deste vídeo
    ("species", "kinds", "snakes", "deaths", "cases", "bites", "Australians", "spiders", "milkings");
  - a palavra de escala sozinha depois de "few", "several" ou "many" ("the last few million years") não conta.

  O efeito nos roteiros de antes é de 0 a +2 números: Columbia 51 (o portão dele dá 50: o "Three of them"), Peru 71 (69), Big Sur 58 (56). Os
  outros ficam iguais.
- **O autoplágio** compara também com `roteiros/rio-columbia/roteiro-narrador.md`, ao lado dos sete de antes.
- **A mensagem do `[inscricao-ato]`** diz agora onde a pauta deste vídeo põe a inscrição: entre a ponte do ato 3 e a primeira frase do ato 4.
  A regra não mudou.

## Como acrescentar um id (o acréscimo da Sala)

Para o próximo acréscimo (o primeiro, o do fatos-c e da medida do Censo, entrou em 18/11/2026: "O acréscimo da Sala", acima):

1. **No `gate.mjs`:**
   - no `NAO_SE_DIZ`, um objeto `{id, porque, julga(f, ant, ctx)}` que devolve `"reprova"`, `"alerta"` (com o texto em `alerta`) ou `null`;
   - no `ALERTA_AU`, um objeto `{id, porque, testa(f, ant, ctx)}` que devolve `true` ou `false`;
   - `f` é a frase e `ant` a anterior. `ctx` é `{i, iAss, iGancho, noGancho, frases, prox(k)}`, e `prox(k)` é a frase k adiante (ou atrás,
     com k negativo), `""` fora do texto;
   - o `porque` diz a fonte e a forma que passa: ele vai inteiro na mensagem;
   - as constantes de cobra, aranha, abelha e Índia (`COBRA`, `COBRA_CTX`, `TAIPAN`, `MARROM`, `FUNIL`, `ARANHA`, `ABELHA`, `INDIA`…) estão no
     começo do bloco da Austrália.
2. **Um id que muda de reprovar para passar** (a Sala liberou a frase) se tira da lista ou se estreita no padrão. Na prova, o caso de
   `reprova` vira `passa`.
3. **No `gate-provar.mjs`**, junto dos outros do mesmo id:
   - `reprova("id", "frase")` e `passa("id", "a frase segura")`, ou `alerta("id", "frase")`;
   - a frase segura nova entra também na lista `SEGURAS`, no ato dela;
   - se a frase depende da anterior, passe uma lista (`["a anterior.", "a frase."]`). Fixe a anterior: o corpo é sorteado, e uma palavra dele
     pode contar (no `[amostra-pequena]`, o "survey" de "The survey team…" contava como o estudo dito perto).
4. **Rode** `node roteiros/australia-animais/_ferramentas/gate-provar.mjs` até sair 0, e rode o portão nos roteiros de antes (abaixo, "A
   prova") para ver que o padrão novo não pega nenhum deles por engano.

O que ainda espera leitura, e o id que ela mexeria:
- o PDF do NCIS (FS24-09), só com o "sim" do Lucas ao download: os números do cavalo e do canguru (`[cavalo-canguru]`);
- o AIHW (Cloudflare também no navegador do app): os "about 12,000" das aranhas (`[internacoes]` e `[internacoes-aihw]`);
- o AVRU (a página nova não foi achada): o "no recorded death" da taipan (`[taipan-nunca-matou]`);
- a data da vespa europeia na fonte oficial (`[abelha-europeia]`);
- os 835 envenenados, se a Sala os quiser na voz (`[espera-soro]`).

## O que ficou, sem mudança

- O que é texto falado (`paragrafosDe`) e o sha, na forma que o `portao-fatos` e o `aplicar-lista` cruzam.
- O `--onde`, com as frases das taxas e os números contados.
- O `--derivados`, com os sete derivados do vídeo 7. A pasta da raiz de teste agora é `australia-animais`.
- As `VETADAS` da voz e as palavras de `ALERTA`: o universal ("everyone", "nobody", "never", "first", "last", "always"), "mystery" e
  "secret", o presente, "here" e "this line".
- As frases que abrem com data, a assinatura uma vez com até 170 palavras, o "But" até a palavra 50 e a pergunta antes da assinatura.
- O fecho: a pergunta do gancho repetida e o fecho em lista, em alerta.
- As taxas e os `TETOS`, e a exceção da pergunta de comentário no autoplágio.
- A inscrição falada do vídeo 7, inteira:
  - os mesmos ids e a conta do tempo, com a cauda de 20 s;
  - a fronteira de parágrafo e a de ato, e o alerta abaixo de 37 % e acima de 58 %;
  - a leitura das marcas `<!-- … -->` (`marcasDe`);
  - só o texto do `[inscricao-ato]` mudou.
- As regras herdadas (a média, a maior frase, as VETADAS, o laço do ALERTA, as datas, o gancho) continuam com as frases de antes, e as da
  Austrália, com as das taxas, como no Columbia.

## Para quem escreve o roteiro (lido na prova)

**O gancho A da pauta §8, como está, reprova por quatro regras.** Ele tem 131 palavras até a assinatura (43,9 s), e a pauta conta o mesmo.
- **`[15-por-cento]`:** "Worldwide, only about 15 percent of snakes are." saiu, por decisão da Sala.
- **`[titulo-3-mata]`:** a frase do título 3 que o §8 propõe ("And it isn't even the snake that kills the most Australians.") não está no
  texto do gancho A. Ela tem de estar nas 3 primeiras frases.
- **O "But" do molde:** o gancho A não tem nenhum.
- **A inscrição ausente** (no gancho sozinho).

Os alertas que ficam:
- `[live-science]`;
- `[pergunta-dupla]` (os dois "why");
- `[titulo-1-palavra]` (sem "dangerous" nem "deadly");
- a 1ª frase sem número;
- o "Now" de "Now look at the country's official death records".

Ele paga o T3 no veneno, com a ressalva na mesma frase, e paga o T2 e o T1.

**O gancho A consertado passa.** A prova o monta com um corpo e a inscrição a 45 %:
- a 2ª frase é a do título 3;
- "But it has plenty of company.";
- a contagem da Sala com o dono ("Of Australia's 229 kinds of snakes, 150 are elapids, front-fanged venomous snakes, by the count of the
  Reptile Database.");
- "Worldwide, elapids and vipers make up only about one in five.";
- uma pergunta só, com "dangerous" ("So why do so few people die from such dangerous animals?").

Fica com 143 palavras (47,9 s) e o "But" na palavra 35. Sobram dois alertas: a 1ª frase sem número e o "Now". A base da prova é esse mesmo
gancho, com "a 1979 test on lab mice" na 1ª frase, e passa sem nenhum alerta.

**O gancho B não serve como está.** Ele não paga o título 3 (nem o veneno, nem a cobra que mata), a 1ª frase não diz "venom", e tem o "15
percent". Paga o T2 e o T1.

**A pergunta do título do Lucas não se diz como pressuposto do narrador.** "Why does Australia have so many dangerous animals?" dita por ele
reprova `[premissa-tantos]` (pauta §5: a base não mede "mais bicho que em qualquer lugar"). Valem:
- **atribuída a outros** (o acréscimo da Sala): "Every visitor asks the same thing: why does Australia have so many dangerous animals?", "It's
  the question every visitor asks.", "You've probably heard it.", "People ask why…". Passa com o alerta `[pergunta-atribuida]` e paga o título
  1 sem a contagem das cobras. No gancho, ela é a segunda pergunta se ficar a do "why so few die": junte as duas numa sequência sem "And why"
  (o `[pergunta-dupla]`);
- a forma do cético, "So does Australia really have so many dangerous animals?";
- "so many of Australia's snakes", porque as cobras são a exceção que Arbuckle aceita.

**O Censo** (as frases da medida, §7, passam todas):
- "The Channel Country, where the inland taipan lives, covers about 117,000 square miles. At the 2021 census, about a thousand people lived
  there." O ano vai na voz ou no crédito; "the latest census" reprova;
- a comparação com a marrom vai com o museu e o "most of", e a razão só "per square mile" ("more than a thousand times as many people");
- "One lives out on these floodplains, where about a thousand people live, and is usually quite shy." é a troca da frase do §4.4;
- depois da medida, "You can guess which one kills." passa; "That's why the brown snake kills more people." alerta (`[censo-causa]`).

**O fatos-c:**
- o "part of why" vai com "part": "Part of it is the medicine…", e a metade honesta é a pouca exposição. "the reason", "that's why" ou "thanks
  to" com o soro ou a bandagem reprovam;
- o redback é "in 1956" (ou "in the 1950s"), e "no confirmed death since";
- os outros 8 vão nas palavras da CID-10 ("other venomous arthropods", "venomous marine animals"), sem nomear carrapato nem água-viva com
  número;
- a abelha: "It came from England on a ship called the Isabella, in 1822." e a morte dita como alergia;
- a Índia: a OMS e os ~58.000, ou "hundreds of times" por habitante.

**A inscrição** passa na frase e no lugar que a pauta §7 propõe ("If you're enjoying the story so far, subscribe to Alpha Point.", depois da
ponte do ato 3, que fecha o parágrafo).
- "Now, the other snake." passa como volta, mas o "Now" dispara o alerta do presente do molde. "Back to the snakes, then." não dispara.
- Ela fica fora do gancho, com uma marca `<!-- … -->` de ato antes do parágrafo seguinte, uma vez só.
- Com ~2.650 palavras em ~50 parágrafos, a janela vai de ~945 a ~1.635 palavras antes dela (35 % a 60 %), e a faixa sem alerta, de ~1.000 a
  ~1.580 (37 % a 58 %). A pauta a põe a ~50 %, depois do ato 3.

**As frases seguras da pauta** (§4, §7 e §8), do fatos-c, da medida do Censo e do resumo do NCIS (188 frases, sem as que saíram), juntas
com o gancho da base e um corpo de 13 frases neutras (2.750 palavras, a inscrição a 42,5 %), passam com exit 0. Nenhuma passa de 34
palavras. As do fatos-c (os outros 8 nas palavras da CID-10) e a do museu resolvem o `[oito-que-faltam]` e o `[marrom-dono]` que a pauta
sozinha disparava.

Os alertas que elas disparam, para quem escreve:
- `[live-science]`, nas duas frases da contagem da Live Science, e `[contas-iguais]`: a contagem dela (145 de 220, "venomous") ao lado do "one
  in five" de elapídeas e víboras. Use a da Sala (150 de 229 elapídeas, com o Reptile Database);
- `[oito-que-faltam]`: sem as frases do fatos-c logo depois, "Bees and wasps killed 42, more than the snakes." alerta. Diga os 6 artrópodes
  e os 2 marinhos ("The other eight? …") no mesmo parágrafo ou no seguinte;
- `[marrom-dono]`: sem a frase do museu perto, "The other lives where people farm and build." alerta. Na tela não basta para o portão: se
  for só na tela, o alerta se decide como conferido;
- `[funnel-found]`: "A team that studied the toxin found it started out…". A prova mostra que "thinks" não alerta;
- `[colisao-20]`, `[primeiro-soro]` e `[internacoes-aihw]`: vão ao verificador;
- `[uma-vez]`: o 85, a chance, a contagem e a estrada, repetidos entre o gancho da base e os ganchos A e B do texto de conferência. No roteiro
  só vai um gancho;
- as palavras de alerta do molde nas formas da pauta, que se decidem como conferidas:
  - "never" ("almost never hurt anyone");
  - "first" ("the first venomous snakes to reach Australia", "the world's first antivenom");
  - "last" ("the last big break", "the last few million years");
  - "always" ("the park always needs more spiders");
  - o presente ("Now look at…", "Today, elapids fill…", "Researchers now criticize…", "…is now caught by…");
  - "here" ("There were no vipers here", "lives here", "killed people here");
- as taxas: o texto de conferência tem todas as perguntas-ponte da pauta, e as perguntas chegam a 6,7 por mil palavras (teto 2,27), com o "So"
  a 6,3 (teto 3,92) e o "And" a 4,8 (teto 3,92). No roteiro, uma pergunta por ato já põe a taxa perto do teto.

**O "15 percent" e o "one in five":**
- "Worldwide, only about 15 percent are." reprova também por pronome, com a cobra na frase anterior;
- o "one in five" passa com "elapids and vipers" ou "front-fanged" na frase ou na anterior;
- "Worldwide, only about one in five snakes is venomous." reprova `[um-em-cinco]`.

## A prova

- `node --check` nos dois arquivos: sem erro.
- `node roteiros/australia-animais/_ferramentas/gate-provar.mjs`: **exit 0, 433 de 433 checagens como o esperado** (a saída inteira, abaixo;
  355 antes do acréscimo da Sala).
- **O portão novo sobre o roteiro do vídeo 7** (`node roteiros/australia-animais/_ferramentas/gate.mjs roteiros/rio-columbia/roteiro-narrador.md`):
  - **exit 1, REPROVADO**, com 7 problemas: `[titulo-3-veneno]`, `[titulo-3-mata]`, `[titulo-2-registro]`, `[titulo-2-estrada]`,
    `[titulo-1]`, a 1ª frase sem "venom" e a 1ª frase sem "Australia"/"outback";
  - **a faixa não reprova:** as 2.700 palavras do Columbia ficam dentro da faixa nova (2.500 a 2.800). O pedido esperava reprovação pela
    faixa; ela só viria com menos de 2.500 ou mais de 2.800;
  - nenhum "não se diz" da Austrália;
  - os alertas: `[titulo-1-palavra]`, a 1ª frase sem número e `[numeros-falados]` (51: o "Three of them" do ajuste de "of them"; o portão
    do vídeo 7 conta 50 e não alerta);
  - o sha (`955d5210c444`), as taxas, as contagens, o gancho (os dois portões contam a 179), o autoplágio, a inscrição e os alertas do fecho
    saem iguais aos do portão do vídeo 7, que passa o mesmo texto (exit 0).
- **A precisão, nos outros roteiros do canal** (fora da prova, rodado à mão nos de Juneau, Los Angeles, Zona, Peru, Atlântico, Big Sur e
  Cassino):
  - fora a conta dos números (78, 87, 82, 71, 75 e 58, todos acima de 50; o Cassino, 35), sobram dois, e os dois são a expressão que a regra
    veta:
    - "The Australian Museum lists the same catch, from the Puerto Rico Trench." (Atlântico) reprova `[australian-museum]`: é o museu mesmo;
    - "The count is from 2020, the most recent census." (Big Sur) reprova `[censo-ano]`: é outro censo, mas "the most recent census" é
      o que a regra veta (envelhece com o Censo de 2026);
  - essa rodada achou três falsos positivos, já consertados, e a prova guarda a forma de cada um:
    - os "97 percent of Peru's water" (Peru), no `[soro-funnel]`: os 97 % só valem com o soro, a aranha, as picadas, os casos ou os
      pacientes;
    - o "NASA press release" e o "was due to cross" (Cassino), no `[hipotese-como-causa]`: o "release" só conta como a cobra que solta a
      presa ("releases it/the rat/its prey");
    - "the road… months after" (Big Sur), no `[uma-vez]`: a estrada num mês só conta com morte na frase.
- **O `portao-fatos`** roda a cópia do portão novo numa raiz de teste, e o sha cruza (`gate.igual = true`).

## O que a Sala pode afrouxar

- **Os títulos:**
  - `[titulo-2-estrada]` na mesma frase: pode aceitar "roads" e "month" em duas frases seguidas;
  - `[titulo-3-mata]` nas 3 primeiras: pode ir às 4 primeiras, se a ressalva do camundongo ocupar a 2ª;
  - `[titulo-1]` só com a contagem da Austrália: pode aceitar a do mundo;
  - `[ressalva-camundongo]`: a janela é a frase e a seguinte.
- **A pergunta do Lucas** como fato (`[premissa-tantos]`): só ele libera.
- **Os 65 %** (`[na-tela-deriva]`): a pauta §7 os põe fora da fala porque eram os da Live Science. A contagem da Sala dá 65,5 % de elapídeas, e
  "about two in three" com o Reptile Database já passa (com o `[duas-em-tres]`). Se a Sala quiser "65 percent" na voz, tira o 65 dessa
  regra.
- **As janelas:**
  - `[um-em-cinco]` e `[15-por-cento]` olham a frase e a anterior;
  - `[amostra-pequena]`, a frase e a anterior;
  - `[oito-que-faltam]`, o parágrafo e o seguinte.
- **`[aspas-da-jornalista]`**, que reprova as frases da jornalista entre aspas.
- **Do acréscimo:**
  - os 835 envenenados (`[espera-soro]`), que a frase do fatos-c quer na voz;
  - "more than 300 times" (alerta) e "hundreds of times" sem o por habitante (reprova) no `[india-razao]`;
  - "nearly empty" com o número (passa) e os números de gente fora de 1.000–1.299 (reprovam) no `[taipan-vazio]`;
  - "the most recent census" com o ano dito na frase (`[censo-ano]`);
  - a vespa europeia com ano (`[abelha-europeia]`), se a Sala confirmar o 1959;
  - a moldura do `[pergunta-atribuida]`: a lista de formas pode crescer, e o alerta pode sair.
- **`[hoje]`**, que pega "this year" com bicho ou soro: se o roteiro precisar de "this year" de outro jeito, o padrão se estreita.
- **Todos os alertas.** Os que eu pus além do pedido: `[duas-em-tres]`, `[contagem-dono]`, `[contas-iguais]`, `[veneno-terra]`,
  `[fama-dono]`, `[arbuckle-quem]`, `[marrom-dono]`, `[parque-dono]`, `[colisao-20]`, `[primeiro-soro]`, `[internacoes-aihw]`,
  `[funnel-found]`, `[termo-definido]`, e no `[uma-vez]`, a contagem, a fração do mundo e a estrada. O limiar do `[numeros-falados]` (50)
  também. Os do acréscimo (`[pergunta-atribuida]`, `[censo-preciso]`, `[censo-causa]`, `[marrom-genero]`, `[struan]`, `[abelha-73]`) vieram
  da Sala.

## Os limites (o que nenhum padrão pega, ou só pega em parte; para o verificador de fatos)

- **A premissa com outras palavras** ("no place on Earth packs more venom", "the most dangerous country for animals"), e a fama afirmada sem
  "overstated" nem "myth".
- **A cobra que mata:**
  - dita por pronome longe do nome;
  - o "deadliest" dado à taipan numa frase sem "taipan" nem o superlativo;
  - o `[titulo-3-mata]` aceita qualquer forma negada de "kill" nas 3 primeiras, sem conferir que o sujeito é a taipan.
- **O endereço com outras palavras:** o vazio do Channel Country ("barely a town for hundreds of miles") e a marrom "in towns" ou "next door".
- **A hipótese dita como fato sem "because"** ("the reputation grew out of good hospitals"; "its venom is a defense against lizards").
- **Os números:**
  - os certos ditos com outro dono ou outro período (os 85 de 2016–2025 como "a year"; os 35 como "since 1981"; o "one in three million"
    como "in a lifetime");
  - o `[titulo-1]` vê um número e as palavras, não se o número é 150 de 229;
  - o `[titulo-2-estrada]` vê "roads" e "month", não se a comparação vai no sentido certo ("fewer than");
  - o `[ressalva-camundongo]` vê a palavra, não se o teste está descrito certo (1979, a LD50);
  - a conta é do portão e difere da da pauta: a faixa ("2016 to 2025") conta uma vez, e a pauta conta os dois anos (gancho A: 7 contra 8;
    gancho B: a pauta conta 9);
  - o `[uma-vez]` só vê a repetição, não se a única vez está no gancho.
- **Os 8 que faltam** ditos fora do parágrafo seguinte, ou nomeados com outras palavras ("ticks and ants" pega; "a few other creatures" não).
- **A Índia por outra porta** ("a country of a billion people loses…"), e o que mudar depois de 18/11/2026 nos voláteis (o parque, o ABS de
  2025, o TGA): isso se relê antes da gravação.
- **A pergunta atribuída:** se quem pergunta existe, e se o narrador não a assume logo depois com outras palavras ("And they're right.").
- **O Censo com outras palavras:** o vazio ("barely a town", "a handful of ranches"); a densidade como causa sem "because" nem "so" ("Out
  here, there's no one to bite."); "the three states where brown snakes live" como se fossem os únicos; a Grande Sydney como a área da
  funnel-web; Moomba e Betoota como vilas da conta.
- **O fatos-c com outras palavras:** o "35, not 350" como contrafactual ("without antivenom, it would be hundreds"); a bandagem "proved"
  ou que "neutralizes"; "most people bitten get antivenom" (os 5 em 100 do healthdirect e os 755 de 1.548 do ASP-20 não se conciliam); o
  "part of why" só com o soro, sem a exposição (o portão não exige a metade honesta).
- **O que os leitores a frio pediram e é da bancada:**
  - por que as 35 mortes por cobra não são 350 (o soro e os primeiros socorros);
  - os bichos do meme nomeados no bloco dos sem veneno;
  - a régua de fora (a OMS);
  - a redback;
  - menos números em fila.

  O portão só barra a forma errada; não exige a certa.
- **A inscrição:**
  - a frase-chave do bloco ao lado dela, e se a cena por baixo está calma (cta §5): é do regente e do qc-visual;
  - o tempo é estimado: a narração real mexe 1 a 2 pontos, e a margem de 37 % a 58 % existe por isso.

## A saída da prova

```text
# Prova do portão do vídeo 8, os animais perigosos da Austrália (roteiros/australia-animais/_ferramentas/gate.mjs)

433 de 433 checagens como o esperado.
A base: 2659 palavras, 225 frases de corpo (98 antes da inscrição); os casos em out/_tmp/gate-australia-animais/casos/.

## A base

- OK: base: passa (0 alerta[s])
- OK: a base tem 2659 palavras (faixa 2.500–2.800), 237 frases, média 11.2 (teto 18), maior 28 (teto 34); o gancho tem 142 palavras (47.6 s a 179) e o "But" na palavra 39; 14.85 min a 179
- OK: a base não tem nenhum alerta ([])
- OK: a base não tem autoplágio com os oito roteiros anteriores (Juneau, Los Angeles, Zona, Peru, Atlântico, Big Sur, Cassino e Columbia)
- OK: a base não dispara nenhuma taxa
- OK: a inscrição da base: parágrafo 21, frase 4 de 4, começa em 6:55.9 (45.1 % de 15:22.8, a janela de 5:23.0 a 9:13.7), na fronteira entre atos
- OK: a conta do tempo é a pedida (as palavras antes ÷ 179 × 60 + 0,25 s por troca de parágrafo; a duração com as pausas e a cauda de 20 s): o portão dá 415.9 s de 922.8 s, a conta daqui 415.9 s de 922.8 s
- OK: os números falados da base: 8 (os oito do gancho: "1979", "229", "150", "one in five", "2016 to 2025", "85", "2025", "one-in-three-million")

## A faixa (2.500 a 2.800), a média (18) e a maior frase (34)

- OK: faixa-piso-2500: passa (0 alerta[s]) — 2.500 palavras exatas passam
- OK: faixa-2499: reprova (1) — 2.499 reprova
- OK: faixa-teto-2800: passa (0 alerta[s]) — 2.800 palavras exatas passam
- OK: faixa-2801: reprova (1) — 2.801 reprova
- OK: faixa-2450-do-columbia: reprova (1) — o piso da faixa do Columbia (2.450) fica abaixo do piso novo
- OK: media-acima-de-18: reprova (1) — as frases do corpo unidas em pares (~20 palavras cada)
- OK: frase-de-34: passa (0 alerta[s]) — uma frase de 34 palavras passa
- OK: frase-de-35: reprova (1) — uma frase de 35 palavras reprova

## Os três títulos no gancho (T3 nas 3 primeiras frases; T2 e T1 antes da assinatura)

- OK: titulo-3-veneno-reprova: reprova (1) — a 1ª frase sem o superlativo do veneno ("topped a test" não é superlativo)
- OK: titulo-3-veneno-na-4a: reprova (1) — o superlativo na 4ª frase já não paga
- OK: titulo-3-most-venomous: passa (0 alerta[s]) — "most venomous" paga o "Most Venomous" do título
- OK: titulo-3-mata-reprova: reprova (1) — sem a cobra que mata nas 3 primeiras (o gancho A da pauta, sem a frase do §8)
- OK: titulo-3-mata-rarely: reprova (2) — "it rarely kills" não paga o título 3 e reprova à parte (a pauta não tem morte lida por taipan-do-interior)
- OK: titulo-3-mata-never: reprova (2) — "it has never killed anyone" não paga o título 3 e reprova à parte (o AVRU é NÃO CONFERIDO)
- OK: titulo-3-mata-somewhere-else: passa (0 alerta[s]) — a ponte do ato 3 da pauta ("…lives somewhere else") também paga
- OK: titulo-3-mata-different: passa (0 alerta[s]) — "a different snake does most of the killing" paga
- OK: titulo-3-mata-na-4a: reprova (1) — a frase do §8 na 4ª frase já não paga
- OK: ressalva-camundongo-reprova: reprova (1) — o superlativo sem "mice"/"lab" na frase nem na seguinte
- OK: ressalva-camundongo-na-seguinte: passa (1 alerta[s]) — a ressalva na frase 2 (o conserto dos leitores: "as measured on lab mice" no meio da frase 1 faz a voz tropeçar) passa; a 1ª frase sem número alerta
- OK: ressalva-laboratory: passa (0 alerta[s]) — "laboratory" conta
- OK: ressalva-camundongo-passa: passa (0 alerta[s]) — o superlativo fora do gancho, sem camundongo (a ponte do ato 3 da pauta): passa
- OK: titulo-2-registro-reprova: reprova (1) — sem os 85 no gancho
- OK: titulo-2-registro-sem-gente: reprova (1) — o 85 sem "people", "deaths", "died" ou "killed" na frase
- OK: titulo-2-registro-por-extenso: passa (0 alerta[s]) — "eighty-five people" paga
- OK: titulo-2-registro-no-corpo: reprova (1) — os 85 depois da assinatura já não pagam
- OK: titulo-2-estrada-reprova: reprova (1) — "roads" sem "month"
- OK: titulo-2-estrada-separadas: reprova (1) — "roads" numa frase e "month" na outra: reprova (a miniatura "10 YEARS OF VENOM < 1 MONTH" se paga numa frase)
- OK: titulo-1-reprova: reprova (1) — "a great many kinds" não é número nem fração
- OK: titulo-1-so-o-mundo: reprova (1) — a fração só do mundo não paga a contagem da Austrália
- OK: titulo-1-duas-em-tres: passa (1 alerta[s]) — "two in three" paga o título 1 e alerta (a pauta o proibia até a contagem; a Sala a conferiu)
- OK: titulo-1-palavra-alerta: passa (1 alerta[s]) — sem "dangerous" nem "deadly" no gancho: alerta
- OK: titulo-1-pergunta-atribuida: passa (2 alerta[s]) — sem a contagem das cobras, a pergunta do título atribuída a outros paga o título 1 (o acréscimo da Sala), com o alerta da moldura
- OK: titulo-1-pergunta-do-narrador: reprova (2) — a mesma pergunta dita pelo narrador não paga o título 1 e reprova à parte

## A primeira frase ("venom", a Austrália e número)

- OK: primeira-sem-venom: reprova (1) — "most toxic" paga o título 3, mas a 1ª frase não diz "venom"
- OK: primeira-sem-australia: reprova (1) — sem "Australia"/"outback" na 1ª frase (o "Australians" da 2ª não conta)
- OK: primeira-outback: passa (0 alerta[s]) — "outback" conta
- OK: primeira-sem-numero: passa (1 alerta[s]) — a 1ª frase do gancho A, sem número: só alerta (a regra aceita "um número ou uma imagem")
- OK: primeira-numero-por-extenso: passa (0 alerta[s]) — "forty years" por extenso conta como número

## O "não se diz" da Austrália (reprova)

- OK: premissa-tantos-reprova: reprova (1) — "Australia has more venomous animals than anywhere else."
- OK: premissa-tantos-reprova: reprova (1) — a pergunta do Lucas dita como está (pauta §5 e §8)
- OK: premissa-tantos-reprova: reprova (1) — a pergunta dita pelo narrador, sem ninguém que pergunte: reprova (o acréscimo da Sala)
- OK: pergunta-atribuida-43: passa (1 alerta[s]) — a forma da Sala ("Every visitor asks…"): passa, com o alerta
- OK: pergunta-atribuida-44: passa (1 alerta[s]) — a moldura na frase anterior ("it's the question…"): passa, com o alerta
- OK: pergunta-atribuida-45: passa (1 alerta[s]) — "you've probably heard": passa, com o alerta
- OK: pergunta-atribuida-46: passa (1 alerta[s]) — "people ask", na pergunta indireta: passa, com o alerta
- OK: pergunta-atribuida-47: passa (2 alerta[s]) — a moldura na frase seguinte: passa, com o alerta
- OK: pergunta-atribuida-48: passa (1 alerta[s]) — "people wonder": passa, com o alerta
- OK: premissa-tantos-reprova: reprova (1) — "Australia is home to the world's deadliest animals."
- OK: premissa-tantos-passa: passa (0 alerta[s]) — a forma do cético (pauta §8: a fama posta como pergunta, com "really"): passa
- OK: premissa-tantos-passa: passa (0 alerta[s]) — a fama, como fama: passa
- OK: premissa-tantos-passa: passa (0 alerta[s]) — a ponte do ato 1 (pauta §7): passa
- OK: mito-reprova: reprova (1) — "Australia's deadly animals are mostly a myth."
- OK: mito-reprova: reprova (1) — "The danger is mostly hype."
- OK: mito-passa: passa (0 alerta[s]) — a negação: passa
- OK: mito-passa: passa (0 alerta[s]) — a frase segura da fama (pauta §4.1): passa
- OK: gondwana-livescience-reprova: reprova (1) — "Australia split from Gondwana about 100 million years ago."
- OK: gondwana-livescience-reprova: reprova (1) — "The first snakes colonized Australia 60 million years ago."
- OK: gondwana-livescience-reprova: reprova (1) — "It was an accident of history."
- OK: gondwana-livescience-passa: passa (0 alerta[s]) — a forma da pauta §4.2 (a GA): passa
- OK: taipan-mais-mortal-reprova: reprova (1) — "The inland taipan is the deadliest snake in the world."
- OK: taipan-mais-mortal-reprova: reprova (1) — "The inland taipan is Australia's deadliest snake."
- OK: taipan-mais-mortal-reprova: reprova (1) — o "deadliest" do mundo sem o nome
- OK: taipan-mais-mortal-passa: passa (0 alerta[s]) — a negação: passa
- OK: taipan-mais-mortal-passa: passa (0 alerta[s]) — o título 3: passa
- OK: taipan-nunca-matou-reprova: reprova (1) — "The inland taipan has never killed anyone."
- OK: taipan-nunca-matou-reprova: reprova (1) — "There is no recorded death from an inland taipan bite."
- OK: taipan-nunca-matou-reprova: reprova (1) — por pronome, na frase seguinte
- OK: taipan-nunca-matou-passa: passa (0 alerta[s]) — a forma da pauta §4.4 (o estudo nacional, P3): passa
- OK: taipan-nunca-matou-passa: passa (0 alerta[s]) — a ponte do ato 3 (pauta §4.3): passa
- OK: taipan-raramente-mata-reprova: reprova (1) — "The inland taipan rarely kills anyone."
- OK: taipan-raramente-mata-passa: passa (0 alerta[s]) — a ponte do ato 5 (pauta §4.5): passa
- OK: duzia-sem-ano-reprova: reprova (1) — "Doctors have written up only about a dozen cases of someone envenomed by an inland taipan."
- OK: duzia-sem-ano-passa: passa (0 alerta[s]) — com o ano (pauta §4.3, K9): passa
- OK: ld50-valor-reprova: reprova (1) — "Its LD50 is 0.025 mg/kg, the dose that kills half the mice in a test."
- OK: ld50-valor-reprova: reprova (1) — "One bite can kill 100 men."
- OK: ld50-valor-passa: passa (0 alerta[s]) — a forma da pauta §4.3, sem valor: passa
- OK: evoluiu-para-matar-reprova: reprova (1) — "Its venom evolved to kill people."
- OK: evoluiu-para-matar-reprova: reprova (1) — "Australian venom is stronger because of the isolation."
- OK: evoluiu-para-matar-passa: passa (0 alerta[s]) — a hipótese da pauta §4.3: passa
- OK: camundongo-errado-reprova: reprova (1) — "But mice aren't people."
- OK: camundongo-errado-reprova: reprova (1) — "The mouse test is wrong."
- OK: camundongo-errado-passa: passa (1 alerta[s]) — a forma da pauta §4.3 (K3): passa
- OK: marrom-segunda-reprova: reprova (1) — "The brown snake is the second most venomous snake."
- OK: marrom-segunda-passa: passa (0 alerta[s]) — a forma da pauta §4.4: passa
- OK: toxina-extrema-reprova: reprova (1) — a frase que a v2 tirou (K3)
- OK: toxina-extrema-reprova: reprova (1) — "Brown snakes and taipans share a toxin no other snakes have, which makes them deadly to mice."
- OK: toxina-extrema-passa: passa (0 alerta[s]) — a forma da pauta §4.4: passa
- OK: marrom-quintal-reprova: reprova (1) — "Brown snakes live in people's backyards."
- OK: marrom-quintal-reprova: reprova (1) — "The eastern brown snake lives all over Australia."
- OK: marrom-quintal-passa: passa (1 alerta[s]) — a forma da pauta §4.4, depois da leitura da Sala (o Queensland Museum): passa (o [marrom-dono] alerta)
- OK: marrom-quintal-passa: passa (0 alerta[s]) — nas palavras do Queensland Museum: passa
- OK: taipan-vazio-reprova: reprova (1) — o "empty" da pauta: vivem ~1.000 pessoas ali (a medida do Censo)
- OK: taipan-vazio-reprova: reprova (1) — "almost no one" sem o número
- OK: taipan-vazio-reprova: reprova (1) — "Nobody lives out on those floodplains."
- OK: taipan-vazio-reprova: reprova (1) — "The Channel Country is uninhabited."
- OK: taipan-vazio-reprova: reprova (1) — "nearly empty" sem o número
- OK: taipan-vazio-reprova: reprova (1) — outro número de gente que o da medida
- OK: taipan-vazio-passa: passa (0 alerta[s]) — a forma da pauta sem a medida (§4.4): passa
- OK: taipan-vazio-passa: passa (0 alerta[s]) — a frase segura da medida (§7): passa
- OK: taipan-vazio-passa: passa (0 alerta[s]) — a densidade da medida (§7): passa
- OK: taipan-vazio-passa: passa (0 alerta[s]) — a troca que a medida dá para a frase da pauta (§7): passa
- OK: taipan-vazio-passa: passa (0 alerta[s]) — "nearly empty" com o número (medida §8): passa
- OK: censo-ano-reprova: reprova (1) — "At the latest census, about a thousand people lived in the Channel Country."
- OK: censo-ano-reprova: reprova (1) — "The last census counted about a thousand people in the Channel Country."
- OK: censo-ano-passa: passa (0 alerta[s]) — "at the 2021 census": passa
- OK: censo-ano-alerta: passa (1 alerta[s]) — os ~1.000 de 2021 ditos como de 2026: alerta (medida §8)
- OK: censo-razao-reprova: reprova (1) — a razão sem a milha quadrada (em pessoas, ~19.000×)
- OK: censo-razao-reprova: reprova (1) — "At the 2021 census, those three states had almost 20 million people. That's 2,000 times as many people as the Channel Country."
- OK: censo-razao-passa: passa (0 alerta[s]) — a frase segura da medida (§7): passa
- OK: censo-razao-passa: passa (0 alerta[s]) — o número central, com a milha quadrada (§7): passa
- OK: censo-razao-passa: passa (0 alerta[s]) — a Grande Sydney, em pessoas (5.129×, medida §1): passa
- OK: censo-area-taipan-reprova: reprova (1) — "About a thousand people live in the taipan's range."
- OK: censo-area-taipan-reprova: reprova (1) — por pronome, a taipan na frase anterior
- OK: censo-area-taipan-passa: passa (0 alerta[s]) — a frase segura da medida (§7): passa
- OK: marrom-ausente-reprova: reprova (1) — "The brown snake doesn't live out here."
- OK: marrom-ausente-reprova: reprova (1) — "Brown snakes live only in the east."
- OK: marrom-ausente-reprova: reprova (1) — por pronome
- OK: marrom-ausente-passa: passa (0 alerta[s]) — a frase segura da medida (§7), com o dono e o "most of": passa
- OK: marrom-ausente-passa: passa (0 alerta[s]) — o "except rainforest" do museu: passa
- OK: espera-soro-reprova: reprova (1) — "The median wait for antivenom was 4.3 hours."
- OK: espera-soro-reprova: reprova (1) — "The long wait for antivenom killed them."
- OK: espera-soro-passa: passa (0 alerta[s]) — a forma da pauta §4.4 (K9): passa
- OK: isolada-tempo-reprova: reprova (1) — "Australia has been isolated for 50 million years."
- OK: isolada-tempo-passa: passa (0 alerta[s]) — a forma da pauta §4.2: passa
- OK: continente-rapido-reprova: reprova (1) — "Australia is the fastest-moving continent."
- OK: continente-rapido-reprova: reprova (1) — "It keeps moving north about 7 centimeters a year."
- OK: continente-rapido-passa: passa (0 alerta[s]) — a forma da pauta §4.2 (só milhas): passa
- OK: elapideas-depois-reprova: reprova (1) — "The elapids arrived 40 million years ago."
- OK: elapideas-depois-reprova: reprova (1) — "The snakes arrived after Australia hit Asia."
- OK: elapideas-depois-reprova: reprova (1) — "And then, from Asia, came the snakes."
- OK: elapideas-depois-passa: passa (0 alerta[s]) — a ponte do cético (K6): passa
- OK: campo-aberto-reprova: reprova (1) — "They found an open field and spread into every niche."
- OK: campo-aberto-reprova: reprova (1) — o "So" ligando a falta de víboras aos papéis (K6)
- OK: campo-aberto-reprova: reprova (1) — "Their arrival set off an explosion of species."
- OK: campo-aberto-passa: passa (1 alerta[s]) — os fatos lado a lado (pauta §4.2): passa
- OK: 45-e-mar-fundo-reprova: reprova (1) — "Around 45 million years ago, Australia moved north and deep ocean opened up."
- OK: 45-e-mar-fundo-passa: passa (0 alerta[s]) — a forma da pauta §4.2 (K6): passa
- OK: quase-toda-venenosa-reprova: reprova (1) — "Almost every snake in Australia is venomous."
- OK: quase-toda-venenosa-passa: passa (0 alerta[s]) — a forma da pauta §4.2: passa
- OK: corrente-secou-reprova: reprova (1) — "The new ocean current dried out Australia."
- OK: corrente-secou-passa: passa (1 alerta[s]) — a forma da pauta §4.3: passa
- OK: endemismo-reprova: reprova (1) — "About nine in ten of its reptiles are found nowhere else."
- OK: endemismo-passa: passa (0 alerta[s]) — a forma da pauta §4.2: passa
- OK: agua-viva-recorde-reprova: reprova (1) — "The box jellyfish is the most venomous animal on Earth."
- OK: agua-viva-recorde-reprova: reprova (1) — "Box jellyfish are an Australian danger."
- OK: agua-viva-recorde-passa: passa (0 alerta[s]) — a forma da pauta §4.5: passa
- OK: agua-viva-recorde-passa: passa (0 alerta[s]) — Arbuckle (pauta §4.1): passa
- OK: crocodilo-reprova: reprova (1) — "Crocodiles are Australian animals."
- OK: crocodilo-reprova: reprova (1) — "There are 100,000 crocodiles in the Territory."
- OK: crocodilo-passa: passa (0 alerta[s]) — a forma da pauta §4.6: passa
- OK: soro-agua-viva-reprova: reprova (1) — "The world's first antivenoms for sea creatures were one for the stonefish and one for the box jellyfish."
- OK: soro-agua-viva-reprova: reprova (1) — "Australia made the world's first antivenom for a jellyfish, and it works."
- OK: soro-agua-viva-passa: passa (2 alerta[s]) — a forma da pauta §4.5 (o [primeiro-soro] alerta): passa
- OK: tubarao-reprova: reprova (1) — "Taronga counts every shark bite."
- OK: tubarao-reprova: reprova (1) — "Shark attacks are rare and falling."
- OK: tubarao-reprova: reprova (1) — "Sharks killed 32 people over that decade."
- OK: tubarao-passa: passa (0 alerta[s]) — nas palavras do ABS (pauta §4.6, K9): passa
- OK: aranhas-desde-reprova: reprova (1) — "No one has died from a spider bite since 1981."
- OK: aranhas-desde-reprova: reprova (1) — o "since 1956" do redback sem "confirmed" (fatos-c §3)
- OK: aranhas-desde-passa: passa (0 alerta[s]) — com "confirmed" e o ano de Wiener (fatos-c §3): passa
- OK: aranhas-desde-reprova: reprova (1) — "The last spider death in Australia was in 2016."
- OK: aranhas-desde-passa: passa (0 alerta[s]) — a forma da pauta §4.5: passa
- OK: aranhas-desde-passa: passa (0 alerta[s]) — o gancho B (o ABS): passa
- OK: aranhas-desde-passa: passa (0 alerta[s]) — o fecho, com o dono (pauta §4.7): passa
- OK: veneno-lagartos-reprova: reprova (1) — "The funnel-web's venom evolved to fight lizards."
- OK: veneno-lagartos-passa: passa (0 alerta[s]) — a forma da pauta §4.5 (K8): passa
- OK: acasalamento-reprova: reprova (1) — "The males wander out in the mating season."
- OK: acasalamento-passa: passa (0 alerta[s]) — a forma da pauta §4.5 (K8): passa
- OK: soro-funnel-reprova: reprova (1) — "The antivenom completely reversed the bite in almost every case."
- OK: soro-funnel-reprova: reprova (1) — "The funnel-web antivenom worked in 97 percent of cases."
- OK: soro-funnel-reprova: reprova (1) — as crianças, fora da voz
- OK: soro-funnel-passa: passa (0 alerta[s]) — a forma da pauta §4.5 (K8): passa
- OK: soro-funnel-passa: passa (1 alerta[s]) — os 97 % do Peru, sem aranha nem soro: passa (o falso positivo achado no roteiro do vídeo 3, consertado)
- OK: redback-soro-reprova: reprova (1) — "The redback antivenom saved lives."
- OK: redback-soro-passa: passa (0 alerta[s]) — a forma da pauta §4.5: passa
- OK: caes-imunes-reprova: reprova (1) — "Dogs and cats are immune to it."
- OK: caes-imunes-passa: passa (0 alerta[s]) — a forma da pauta §4.5: passa
- OK: minutos-reprova: reprova (1) — "A funnel-web bite can kill in 15 minutes."
- OK: minutos-passa: passa (0 alerta[s]) — passa
- OK: internacoes-reprova: reprova (1) — "Spider bites led to about 42,000 hospitalisations."
- OK: internacoes-reprova: reprova (1) — "Over 13 years, spider bites put Australians in the hospital."
- OK: internacoes-reprova: reprova (1) — "There were 12,000 spider bites."
- OK: internacoes-passa: passa (1 alerta[s]) — a forma da pauta §4.1 (o [internacoes-aihw] alerta): passa
- OK: cavalo-canguru-reprova: reprova (1) — "Horses kill more Australians than snakes, spiders and sharks combined."
- OK: cavalo-canguru-reprova: reprova (1) — "Horses killed 222 people."
- OK: cavalo-canguru-reprova: reprova (1) — "Kangaroos kill 5 people a year."
- OK: cavalo-canguru-passa: passa (0 alerta[s]) — o resumo da página do NCIS (CC BY 4.0), sem número (o registro, 18/11): passa
- OK: cavalo-canguru-passa: passa (0 alerta[s]) — a frase de antes no resumo do NCIS: passa
- OK: cavalo-canguru-passa: passa (0 alerta[s]) — a abertura do resumo do NCIS (a fama, com o dono): passa
- OK: cavalo-canguru-passa: passa (0 alerta[s]) — a forma da pauta §4.6 (P2), sem número: passa
- OK: cama-reprova: reprova (1) — "More Australians die falling out of bed than from venomous animals."
- OK: cama-passa: passa (0 alerta[s]) — a forma da pauta §4.6: passa
- OK: eua-reprova: reprova (1) — "Australia is as safe as America when it comes to venomous animals."
- OK: eua-reprova: reprova (1) — "Venomous animals kill more people per person in Australia than in the United States."
- OK: eua-passa: passa (0 alerta[s]) — os EUA sem mortes nem risco: passa
- OK: india-razao-reprova: reprova (1) — "India loses about 58,000 people a year to snakebite, hundreds of times Australia's toll."
- OK: india-razao-reprova: reprova (1) — um múltiplo exato, por pronome, na frase seguinte
- OK: india-razao-reprova: reprova (1) — um múltiplo exato ("300 times")
- OK: india-razao-reprova: reprova (1) — "India loses thousands of times as many people to snakebite as Australia."
- OK: india-razao-passa: passa (0 alerta[s]) — "hundreds of times", por habitante (fatos-c §5): passa
- OK: india-razao-passa: passa (0 alerta[s]) — o por habitante sem múltiplo: passa (antes reprovava, à espera do fatos-c)
- OK: india-razao-passa: passa (0 alerta[s]) — a frase segura do fatos-c com a conta (§5.3): passa
- OK: india-razao-alerta: passa (1 alerta[s]) — "more than 300 times", por habitante: alerta (o fatos-c o dá como seguro; o acréscimo da Sala reprova o múltiplo exato)
- OK: india-razao-passa: passa (0 alerta[s]) — a OMS, com o intervalo do mundo e os ~58.000 da Índia (o registro): passa
- OK: abelhas-sem-soro-reprova: reprova (1) — "There's no antivenom for bee stings."
- OK: abelhas-sem-soro-passa: passa (0 alerta[s]) — a forma da pauta §4.6 (K9): passa
- OK: abelha-europeia-reprova: reprova (1) — sem a alergia
- OK: abelha-europeia-reprova: reprova (1) — "European honeybees kill more Australians than snakes."
- OK: abelha-europeia-reprova: reprova (1) — outro ano que 1822
- OK: abelha-europeia-reprova: reprova (1) — "the first bees ever" (a fonte diz "first recorded surviving")
- OK: abelha-europeia-reprova: reprova (1) — a vespa com o ano (a fonte oficial não foi lida)
- OK: abelha-europeia-passa: passa (1 alerta[s]) — a abelha trazida: passa (antes reprovava, à espera do fatos-c)
- OK: abelha-europeia-passa: passa (0 alerta[s]) — a frase segura do fatos-c (§2.1): passa
- OK: abelha-europeia-passa: passa (1 alerta[s]) — a frase segura do fatos-c (§2.2), dita como alergia: passa
- OK: abelha-europeia-passa: passa (1 alerta[s]) — a forma curta do fatos-c (§2.2): passa
- OK: abelha-europeia-passa: passa (0 alerta[s]) — a vespa sem ano (fatos-c §2.3): passa
- OK: abelha-73-alerta: passa (1 alerta[s]) — os 73 % de segunda mão na voz
- OK: abelha-73-passa: passa (0 alerta[s]) — "roughly three in four": sem alerta
- OK: redback-ano-reprova: reprova (1) — "The redback antivenom arrived in 1955."
- OK: redback-ano-passa: passa (0 alerta[s]) — o ano de Wiener (fatos-c §3): passa
- OK: redback-ano-passa: passa (0 alerta[s]) — a frase segura do fatos-c (§3): passa
- OK: soro-a-razao-reprova: reprova (1) — "Antivenom is the reason so few people die."
- OK: soro-a-razao-reprova: reprova (1) — por pronome
- OK: soro-a-razao-reprova: reprova (1) — "Thanks to the pressure bandage, few people die of snakebite."
- OK: soro-a-razao-passa: passa (0 alerta[s]) — "part of why": passa
- OK: soro-a-razao-passa: passa (0 alerta[s]) — a frase segura do fatos-c (§1.4): passa
- OK: anzcor-16-reprova: reprova (1) — o erro do ANZCOR
- OK: anzcor-16-passa: passa (0 alerta[s]) — os 35 do ABS: passa
- OK: struan-alerta: passa (1 alerta[s]) — "The bandage trick comes from Struan Sutherland, an Australian researcher, in 1979."
- OK: struan-passa: passa (0 alerta[s]) — a frase segura do fatos-c (§1.2): sem alerta
- OK: carrapato-x25-reprova: reprova (1) — "Ticks killed six of them."
- OK: carrapato-x25-reprova: reprova (1) — o carrapato que o código não nomeia
- OK: carrapato-x25-reprova: reprova (1) — "Two box jellyfish deaths made up the rest."
- OK: carrapato-x25-passa: passa (1 alerta[s]) — a frase segura do fatos-c (§4.1): passa
- OK: carrapato-x25-passa: passa (1 alerta[s]) — o X25 nas palavras da CID-10 (fatos-c §4.1): passa
- OK: carrapato-x25-passa: passa (1 alerta[s]) — o carrapato sem número (fatos-c §4.2): passa
- OK: abelha-europeia-passa: passa (0 alerta[s]) — a forma da pauta §4.6: passa
- OK: soro-acabou-reprova: reprova (1) — "The antivenom ended snake deaths."
- OK: soro-acabou-passa: passa (0 alerta[s]) — o fundo da pauta §4.4: passa
- OK: parque-causa-reprova: reprova (1) — "The Reptile Park is why no one dies."
- OK: parque-causa-passa: passa (0 alerta[s]) — o fecho (pauta §4.7): passa
- OK: fama-hospitais-reprova: reprova (1) — "Australia's reputation comes from its good hospitals."
- OK: fama-hospitais-passa: passa (0 alerta[s]) — a hipótese como hipótese (pauta §4.6): passa
- OK: hoje-reprova: reprova (1) — "Right now there's no antivenom for black snakes."
- OK: hoje-reprova: reprova (1) — "The TGA lists that antivenom as unavailable."
- OK: hoje-reprova: reprova (1) — "In 2026, a crocodile killed a fisherman."
- OK: hoje-passa: passa (0 alerta[s]) — o fecho, com a data (pauta §4.7, K10): passa
- OK: 15-por-cento-reprova: reprova (1) — a frase do gancho A, que a Sala tirou
- OK: 15-por-cento-reprova: reprova (1) — por pronome, a cobra na frase anterior
- OK: 15-por-cento-reprova: reprova (1) — "Fifteen percent of the world's snakes are venomous."
- OK: 15-por-cento-passa: passa (1 alerta[s]) — os 15 % do Columbia, sem cobra: passa
- OK: um-em-cinco-reprova: reprova (1) — o "um em cinco" sem "elapids and vipers" nem "front-fanged"
- OK: um-em-cinco-passa: passa (1 alerta[s]) — a forma da Sala: passa
- OK: um-em-cinco-passa: passa (1 alerta[s]) — com a família na frase anterior: passa
- OK: australian-museum-reprova: reprova (1) — "The Australian Museum says brown snakes like farms."
- OK: australian-museum-passa: passa (0 alerta[s]) — o South Australian Museum, de Lee: passa
- OK: na-tela-registro-reprova: reprova (1) — "In 2018 alone, snakes killed nine people."
- OK: na-tela-registro-reprova: reprova (1) — "That's about 24 days of road deaths."
- OK: na-tela-registro-reprova: reprova (1) — "Over a lifetime, the chance is about one in 38,000."
- OK: na-tela-registro-reprova: reprova (1) — "Drowning killed 2,077 people."
- OK: na-tela-registro-passa: passa (1 alerta[s]) — a forma da pauta §8: passa
- OK: na-tela-deriva-reprova: reprova (1) — "The deep ocean opened 33.5 million years ago."
- OK: na-tela-deriva-reprova: reprova (1) — "About 100 terrestrial species of elapids live there."
- OK: na-tela-deriva-reprova: reprova (1) — "These deadly serpents account for 65 percent of Australia's snakes."
- OK: na-tela-deriva-reprova: reprova (1) — "The rats arrived in the Pliocene."
- OK: na-tela-deriva-passa: passa (1 alerta[s]) — a forma da pauta §4.2 (o [colisao-20] alerta): passa
- OK: na-tela-agua-reprova: reprova (1) — "Only 1 in 225 stings was fatal."
- OK: na-tela-agua-reprova: reprova (1) — "The blue-ringed octopus lives on the south coast."
- OK: na-tela-agua-passa: passa (0 alerta[s]) — a forma da pauta §4.5: passa
- OK: na-tela-soros-reprova: reprova (1) — o 1962 do polivalente (o 1956 do redback agora vai à voz: o [redback-ano])
- OK: na-tela-soros-reprova: reprova (1) — "The trial had 224 patients."
- OK: na-tela-soros-reprova: reprova (1) — "Brown snakes caused 17 deaths, tiger snakes four."
- OK: na-tela-soros-reprova: reprova (1) — "Brown snakes were behind 41 percent of the bites."
- OK: na-tela-soros-passa: passa (0 alerta[s]) — a troca da pauta §4.4: passa
- OK: na-tela-soros-passa: passa (0 alerta[s]) — o 1930, opcional na voz (pauta §4.4): passa
- OK: na-tela-quem-mata-reprova: reprova (1) — "Dogs killed 42 people."
- OK: na-tela-quem-mata-reprova: reprova (1) — "On farms, about 6.5 people die each year."
- OK: na-tela-quem-mata-e-cavalo: reprova (2) — "Of those, 75 involved horses.": os 75 cavalos ficam na tela, e o cavalo com número reprova à parte
- OK: na-tela-quem-mata-reprova: reprova (1) — "Of those, 31 involved cattle."
- OK: na-tela-quem-mata-passa: passa (0 alerta[s]) — o 42 das abelhas: passa
- OK: na-tela-parque-reprova: reprova (1) — "There are 15 official drop-off points."
- OK: na-tela-parque-reprova: reprova (1) — "More than 2,000 juvenile spiders are being raised."
- OK: na-tela-parque-passa: passa (0 alerta[s]) — o fecho (pauta §4.7): passa
- OK: aspas-da-jornalista-reprova: reprova (1) — ""The exception is the snakes," he says."
- OK: aspas-da-jornalista-reprova: reprova (1) — "Arbuckle said Australia's venomous fauna are "well within typical range.""
- OK: aspas-da-jornalista-passa: passa (0 alerta[s]) — sem aspas (pauta §4.1): passa
- OK: tratado-do-columbia-passa: passa (0 alerta[s]) — a regra do vídeo 7 saiu: passa
- OK: controle-do-columbia-passa: passa (0 alerta[s]) — a regra do vídeo 7 saiu: passa
- OK: trump-do-columbia-passa: passa (0 alerta[s]) — a regra do vídeo 7 saiu: passa
- OK: every-do-columbia-passa: passa (0 alerta[s]) — o alerta do vídeo 7 saiu: passa sem alerta

## Os alertas da Austrália (nunca reprovam)

- OK: live-science-alerta: passa (3 alerta[s]) — "Of Australia's roughly 220 kinds of snakes, about 145 are venomous, a biologist told Live Science."
- OK: censo-preciso-alerta: passa (1 alerta[s]) — a precisão falsa na voz
- OK: censo-preciso-alerta: passa (1 alerta[s]) — "That's 2,133 times as many people per square mile."
- OK: censo-preciso-passa: passa (0 alerta[s]) — "about 117,000": sem alerta
- OK: censo-causa-alerta: passa (1 alerta[s]) — a medida como causa
- OK: censo-causa-passa: passa (0 alerta[s]) — a conta fica com quem assiste (pauta §4.4): sem alerta
- OK: marrom-genero-alerta: passa (1 alerta[s]) — as 17 do estudo ditas "eastern brown"
- OK: marrom-genero-passa: passa (0 alerta[s]) — as 17 de "brown snakes" (pauta §4.4): sem alerta
- OK: duas-em-tres-alerta: passa (2 alerta[s]) — "About two in three of Australia's snakes are elapids, by the count of the Reptile Database."
- OK: contagem-dono-alerta: passa (2 alerta[s]) — "Of Australia's 229 kinds of snakes, 150 are elapids."
- OK: contas-iguais-alerta: passa (3 alerta[s]) — a contagem da Live Science ("venomous") ao lado do "one in five" de elapídeas e víboras do gancho da base
- OK: veneno-terra-alerta: passa (1 alerta[s]) — "It has the most potent venom in the world."
- OK: fama-dono-alerta: passa (1 alerta[s]) — "Australia's image is overstated."
- OK: fama-dono-passa: passa (0 alerta[s]) — com o dono: sem alerta
- OK: arbuckle-quem-alerta: passa (1 alerta[s]) — "Arbuckle says the image is, "for the most part," overstated."
- OK: marrom-dono-alerta: passa (1 alerta[s]) — "One lives out on these floodplains and is usually quite shy. The other lives where people farm and build."
- OK: parque-dono-alerta: passa (1 alerta[s]) — "On the Central Coast, north of Sydney, the Australian Reptile Park milks funnel-web spiders for their venom. Only adult males are milked, because their venom is significantly more potent."
- OK: parque-dono-passa: passa (0 alerta[s]) — com "the park says" (pauta §4.7): sem alerta, e sem o [hipotese-como-causa]
- OK: colisao-20-alerta: passa (1 alerta[s]) — "Some 20 million years ago, Australia began running into Southeast Asia."
- OK: primeiro-soro-alerta: passa (2 alerta[s]) — "Australia went on to make the world's first antivenom for a jellyfish, in 1970."
- OK: internacoes-aihw-alerta: passa (1 alerta[s]) — "Over a little more than a decade, spider bites put Australians in the hospital about 12,000 times."
- OK: funnel-found-alerta: passa (1 alerta[s]) — "A team that studied the toxin found it started out as a weapon for catching insects."
- OK: funnel-found-passa: passa (0 alerta[s]) — "thinks" (pauta §4.5): sem alerta
- OK: amostra-pequena-alerta: passa (1 alerta[s]) — o 23 sem o estudo nem a década (a frase de antes é fixa: o "survey" de uma frase do corpo contaria como o estudo dito perto)
- OK: amostra-pequena-passa: passa (0 alerta[s]) — com o estudo e a década: sem alerta
- OK: amostra-pequena-alerta: passa (1 alerta[s]) — "Funnel-web spiders killed 13 people."
- OK: amostra-pequena-passa: passa (0 alerta[s]) — "at least" e "before 1981": sem alerta
- OK: hipotese-como-causa-alerta: passa (1 alerta[s]) — mesmo com "wondered", o "because" alerta (o [fama-hospitais] não reprova)
- OK: hipotese-como-causa-alerta: passa (1 alerta[s]) — "It bites once and lets go because a rat can bite back."
- OK: hipotese-como-causa-alerta: passa (1 alerta[s]) — "Funnel-web venom turned into a defense because predators hunted the males."
- OK: hipotese-como-causa-passa: passa (0 alerta[s]) — a hipótese como hipótese: sem alerta
- OK: hipotese-como-causa-passa: passa (1 alerta[s]) — o "press release" e o "due to cross" do Cassino: sem alerta (o falso positivo achado no roteiro do vídeo 6, consertado: o "release" só conta como a cobra que solta a presa)
- OK: pergunta-dupla-dois-why: passa (2 alerta[s]) — a pergunta do gancho A da pauta (dois "why"): alerta
- OK: pergunta-dupla-and: passa (2 alerta[s]) — a forma do cético (pauta §8), duas perguntas juntas por "And why": alerta
- OK: pergunta-dupla-uma: passa (0 alerta[s]) — a pergunta da base, um "why" só: sem alerta
- OK: oito-que-faltam-alerta: passa (1 alerta[s]) — o 35 e o 42 sem os outros 8: alerta
- OK: oito-que-faltam-passa: passa (0 alerta[s]) — os outros 8 ditos logo depois: sem alerta
- OK: numeros-50: passa (0 alerta[s]) — 50 números (8 do gancho + 42): sem alerta
- OK: numeros-51: passa (1 alerta[s]) — 51 números: alerta (a pauta §7 orça ~43)
- OK: numeros-conta: passa (1 alerta[s]) — a conta, com os três ajustes deste vídeo
- OK: a conta dos números: 13 (os 8 do gancho, com "one in five" e "one-in-three-million" uma vez cada, e "Seventeen", "15 million", "2016 to 2025", "1964", "Ten"; o "few million" e "the leaders" não contam)
- OK: uma-vez-estrada-sem-morte: passa (1 alerta[s]) — a estrada e "months" sem morte (o Big Sur), com a estrada num mês do gancho: sem alerta (o falso positivo achado no roteiro do vídeo 5, consertado)
- OK: uma-vez-alerta: passa (5 alerta[s]) — o 85, a chance, a contagem, a fração e a estrada ditos de novo depois do gancho: alerta
- OK: termo-definido-alerta: passa (1 alerta[s]) — o LD50 sem "the dose that kills half"
- OK: termo-definido-passa: passa (0 alerta[s]) — definido: sem alerta
- OK: termo-definido-alerta: passa (1 alerta[s]) — a anafilaxia sem "allergic"
- OK: termo-definido-alerta: passa (1 alerta[s]) — a temporada sem os meses
- OK: termo-definido-elapids: passa (1 alerta[s]) — os "elapids" do gancho sem "front-fanged": alerta (e o título 1 continua pago)
- OK: palavra-everyone: passa (1 alerta[s]) — "Everyone on the crew agreed on the count."
- OK: palavra-nobody: passa (1 alerta[s]) — "Nobody on the crew questioned the count."
- OK: palavra-never: passa (1 alerta[s]) — "The crew never questioned the count."
- OK: palavra-first: passa (1 alerta[s]) — "The first count came back at dawn."
- OK: palavra-last: passa (1 alerta[s]) — "Last summer, the crew counted the posts again."
- OK: palavra-always: passa (1 alerta[s]) — "The crew always checked the count twice."
- OK: palavra-mystery: passa (1 alerta[s]) — "The empty plain is no mystery."
- OK: palavra-secret: passa (1 alerta[s]) — "The plain keeps no secret from the map."
- OK: palavra-still: passa (1 alerta[s]) — "The ranchers still work the plain."
- OK: palavra-here: passa (1 alerta[s]) — "Out here, the nights are dark."
- OK: palavra-this-line: passa (1 alerta[s]) — "Follow this line to the coast."
- OK: vetada-shocking: reprova (1) — "shocking" reprova pela VETADA do molde
- OK: vetada-recently: reprova (1) — "recently" reprova pela VETADA do molde (o hoje, voz §2)

## A inscrição falada (voz §3; cta §1, §5 e §6; a do vídeo 7, sem mudança)

- OK: insc-a-33: reprova (1) — abaixo de 35 %: reprova (a conta daqui: 32.8 %)
- OK: insc-a-33: o portão dá 32.8 % (5:02.8), a conta daqui 32.8 %
- OK: insc-a-36: passa (1 alerta[s]) — entre 35 % e 37 %: alerta (a conta daqui: 36.1 %)
- OK: insc-a-36: o portão dá 36.1 % (5:33.2), a conta daqui 36.1 %
- OK: insc-a-50: passa (0 alerta[s]) — no meio: passa sem alerta (a conta daqui: 50.0 %)
- OK: insc-a-50: o portão dá 50 % (7:41.4), a conta daqui 50.0 %
- OK: insc-a-59: passa (1 alerta[s]) — entre 58 % e 60 %: alerta (a conta daqui: 58.8 %)
- OK: insc-a-59: o portão dá 58.8 % (9:02.7), a conta daqui 58.8 %
- OK: insc-a-62: reprova (1) — acima de 60 %: reprova (a conta daqui: 62.2 %)
- OK: insc-a-62: o portão dá 62.2 % (9:33.8), a conta daqui 62.2 %
- OK: insc-ausente: reprova (1) — nenhuma frase com "subscribe to Alpha Point": reprova
- OK: insc-duas: reprova (1) — duas: reprova (o "here" alerta)
- OK: insc-outro-subscribe: reprova (1) — outro "subscrib…" no texto: reprova
- OK: insc-sem-alpha-point: reprova (2) — "subscribe to the channel": reprova (ausente, e o "subscrib…" fora dela)
- OK: insc-no-gancho: reprova (4) — antes da assinatura: reprova (e no 1º minuto, fora da janela, e no meio do parágrafo do gancho)
- OK: insc-no-fecho: reprova (2) — depois da marca do fecho: reprova
- OK: insc-no-fecho-sem-marca: reprova (2) — sem a marca do fecho, a última frase do texto (nas 8 últimas): reprova
- OK: insc-meio-do-paragrafo: reprova (1) — a 3ª de 6 frases do parágrafo: reprova
- OK: insc-penultima-sem-volta: reprova (1) — a penúltima, com uma frase qualquer depois: reprova
- OK: insc-penultima-com-volta: passa (1 alerta[s]) — a penúltima, com "Back to the snakes, then." por último: passa
- OK: insc-inicio-do-ato: passa (1 alerta[s]) — a primeira do parágrafo, com a marca de ato antes: passa
- OK: insc-sem-ato: passa (1 alerta[s]) — na fronteira de parágrafo, sem marca de ato: alerta
- OK: insc-da-pauta: passa (1 alerta[s]) — a frase e a volta da pauta §7, depois da ponte do ato 3: passa, sem alerta de inscrição (a ponte não tem aspas nem número-herói); o "Now" dispara o alerta do presente do molde
- OK: insc-smash: reprova (1) — "If you've followed the snakes this far, smash that subscribe to Alpha Point button."
- OK: insc-hit-the-like: reprova (1) — "If you've followed the snakes this far, hit the like and subscribe to Alpha Point."
- OK: insc-like-button: reprova (1) — "If you've followed the snakes, tap the like button and subscribe to Alpha Point."
- OK: insc-leave-a-like: reprova (1) — "If you've followed the snakes this far, leave a like and subscribe to Alpha Point."
- OK: insc-ring-the-bell: reprova (1) — "If you've followed the snakes this far, subscribe to Alpha Point and ring the bell."
- OK: insc-bell: reprova (1) — "If you've followed the snakes this far, subscribe to Alpha Point and tap the bell."
- OK: insc-dont-forget: reprova (1) — "Don't forget to subscribe to Alpha Point if you've followed the snakes this far."
- OK: insc-make-sure: reprova (1) — "If you've followed the snakes this far, make sure to subscribe to Alpha Point."
- OK: insc-please: reprova (1) — "If you've followed the snakes this far, please subscribe to Alpha Point."
- OK: insc-comment: reprova (1) — "If you've followed the snakes this far, subscribe to Alpha Point and leave a comment."
- OK: insc-every-week: reprova (1) — "If you want a story like this every week, subscribe to Alpha Point."
- OK: insc-numero: reprova (1) — "If you've followed the snakes for five minutes, subscribe to Alpha Point."
- OK: insc-plateia: reprova (1) — "If you're new to the channel, subscribe to Alpha Point, like most of you haven't."
- OK: insc-25-palavras: reprova (1) — "If you have followed these long and winding stories all the way from the plains in the west to the coast in the east, subscribe to Alpha Point."
- OK: insc-17-palavras: passa (2 alerta[s]) — "If you have followed the snakes from the plains down to the coast, subscribe to Alpha Point today."
- OK: insc-sem-if: passa (1 alerta[s]) — "You've followed the snakes this far, so subscribe to Alpha Point."
- OK: insc-sem-you: passa (1 alerta[s]) — "If the snakes held up so far, subscribe to Alpha Point."
- OK: insc-like-verbo: passa (0 alerta[s]) — o "like" verbo (a opção 2 do Cassino): passa
- OK: insc-depois-de-citacao: passa (1 alerta[s]) — a frase de antes com aspas: alerta
- OK: insc-depois-de-numero-heroi: passa (1 alerta[s]) — a frase de antes com um número grande: alerta
- OK: insc-depois-de-ano: passa (0 alerta[s]) — a frase de antes só com um ano: sem alerta

## Os ganchos A e B da pauta §8

- OK: gancho-a-so: reprova (5) — o gancho A sozinho: reprova pela faixa (sem corpo), pelo "But" (não tem), pelo "15 percent" (que a Sala tirou), pelo título 3 (sem a frase do §8) e pela inscrição ausente; paga o T3 no veneno, o T2 e o T1
- OK: o gancho A tem 131 palavras até a assinatura no texto do narrador (43.9 s a 179; a pauta §8 conta 131), e nenhum "But"
  - os números do gancho A pela conta do portão: 7 (a pauta §8 conta 8, com o 2016 e o 2025 da faixa à parte; o portão, como o do vídeo 7, conta "2016 to 2025" uma vez)
  - os alertas do gancho A, para quem escreve: conferir /\b(still|today|now|currently)\b/i: "Now look at the country's official · taxa abre_and: 8.55 por mil palavras · taxa abre_so: 8.55 por mil palavras · taxa perguntas: 8.55 por mil palavras · taxa frases_curtas: 8.55 por mil palavras · taxa imperativo_mapa: 8.55 por mil palavras · título [titulo-1-palavra]: nem "dangerous" nem "deadly" no gancho, as palavras d · a primeira frase não tem número · conferir [live-science] · conferir [pergunta-dupla]
- OK: gancho-a-consertado-com-corpo: passa (2 alerta[s]) — o gancho A consertado, com um corpo e a inscrição numa fronteira entre atos, a ~45 %: passa; ficam a 1ª frase sem número e o "Now" do molde
  - o gancho A consertado: 143 palavras (47.9 s), o "But" na palavra 35, 7 números; a inscrição no parágrafo 21, 6:56.3 de 15:23.1 (45.1 %); os alertas: conferir /\b(still|today|now|currently)\b/i: "Now look at th · a primeira frase não tem número
- OK: gancho-b-so: reprova (7) — o gancho B sozinho: não paga o título 3 (nem o veneno, nem a cobra que mata), a 1ª frase não diz "venom", e tem o "15 percent"; paga o T2 e o T1
  - o gancho B: 118 palavras até a assinatura (a pauta §8 conta 118) e 8 números (a pauta conta 9, com o 2016 e o 2025 da faixa à parte)

## O fecho (alerta; fica do molde)

- OK: fecho-repete-pergunta: passa (1 alerta[s]) — "why so few people die" (5 palavras da pergunta) na última frase
- OK: fecho-4-palavras: passa (0 alerta[s]) — "so few people die": 4 palavras da pergunta, sem alerta
- OK: fecho-pergunta-fora-das-8: passa (0 alerta[s]) — a mesma frase na 9ª antes do fim: sem alerta
- OK: fecho-em-lista: passa (2 alerta[s]) — "First…", "Then…", "Finally…" nas 3 últimas
- OK: fecho-2-da-lista: passa (1 alerta[s]) — duas aberturas de lista: sem alerta

## O autoplágio compara também com o roteiro do vídeo 7

- OK: autoplagio-columbia: passa (1 alerta[s]) — uma frase do roteiro do Columbia

## As frases seguras da pauta, juntas num texto

- OK: frases-seguras: passa (35 alerta[s]) — 188 frases da pauta (§4, §7 e §8), do fatos-c, da medida do Censo e do resumo do NCIS, sem as que saíram, com o gancho da base e 13 frases de corpo: o texto inteiro passa
  - 2750 palavras, a inscrição a 42.5 %; os problemas: nenhum; os alertas da Austrália: [live-science], [internacoes-aihw], [colisao-20], [primeiro-soro], [funnel-found], [contas-iguais], [uma-vez], [numeros-falados]

## O roteiro do vídeo 7 nos dois portões, e o sha

- OK: o portão novo reprova o roteiro do vídeo 7 só pelos títulos (5) e pela primeira frase (2), sem nenhum "não se diz" da Austrália; as 2700 palavras dele ficam dentro da faixa nova (2.500 a 2.800), e ela não reprova: exit 1, 7 problema(s): título [titulo-3-veneno]: nenhuma das 3  | título [titulo-3-mata]: nenhuma das 3 pr | título [titulo-2-registro]: o gancho não | título [titulo-2-estrada]: o gancho não  | título [titulo-1]: o gancho não diz a co | a primeira frase não diz "venom"/"venomo | a primeira frase não diz "Australia", "A
- OK: e só um alerta da Austrália nele, o [numeros-falados]: 51 números pela conta nova (o portão do vídeo 7 conta 50; a mais, o "Three of them" do ajuste de "of them") (conferir [numeros-falados] (51 números na voz, acima de 50: )
- OK: e alerta o gancho sem "dangerous" nem "deadly" e a 1ª frase sem número (a do Columbia não tem número)
- OK: o portão do vídeo 7, no mesmo texto: exit 0 (PASSA)
- OK: as taxas saem iguais nos dois portões (abre_but 0, abre_and 3.36, abre_so 2.98, travessoes 0, perguntas 1.86, frases_curtas 2.98, imperativo_mapa 0.75, heres 0, antitese 0.37; 2681 palavras contadas)
- OK: o sha do roteiro do vídeo 7 é o mesmo nos dois portões (955d5210c444)
- OK: palavras, parágrafos, frases, média, maior frase e gancho iguais (os dois contam a 179: 57 s)
- OK: o autoplágio é o mesmo nos dois (o novo compara também com o próprio Columbia, que sai da conta por ser o arquivo medido): 0 trecho(s)
- OK: a inscrição sai igual nos dois (6:16.6, 40.2 %)
- OK: os alertas do fecho são os mesmos nos dois (0)
- OK: o sha de um texto com BOM, CRLF e comentário de duas linhas é o mesmo nos dois portões e o da base (8203cf87c82a)
- OK: e o comentário de duas linhas não atrapalha a leitura das marcas (exit 0, a inscrição na fronteira entre atos)

## O ferramentas/portao-fatos.mjs com o portão novo

- OK: o portao-fatos roda a cópia do portão novo (numa raiz de teste) e o sha cruza: exit 1 (o piso reprova a tabela vazia, de propósito), gate.igual = true

## O arquivo padrão e as opções do molde

- OK: sem argumento, o portão procura roteiros/australia-animais/roteiro-narrador.md, que ainda não existe: exit 2, "não encontrado: roteiros/australia-animais/roteiro-narrador.md"
- OK: opção desconhecida: exit 2
- OK: --onde: cada taxa traz as frases (abre_so: ["So why do so few people die from such dangerous animals?"]), e a conta dos números traz os números (1979, 229, 150, one in five, 2016 to 2025, 85, 2025, one-in-three-million)
- OK: --derivados: 7 conferidos (o laudo, o editor, a pronúncia, a tradução pt-BR, a cópia para a voz, as trocas e out/australia-animais/roteiro.md; os -r1/-r2/-r2b/-antigo fora); o editor e a cópia em out/ com o sha velho e a pronúncia sem o carimbo reprovam (exit 1; velhos: australia-animais/pronuncia.md, australia-animais/roteiro-editor.md, australia-animais/roteiro.md)
- OK: --derivados: os 7 com o sha de agora passam (exit 0)
- OK: --derivados: as trocas e a tradução pt-BR com o sha velho reprovam (exit 1; australia-animais/roteiro-narrador-pt-BR.md, voz/trocas.md)
```
