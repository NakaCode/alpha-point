# Laudo · conferência do delta da rodada 2 · peru-agua (as lentes de roteiro, clareza e locução, juntas)

Revisão julgada: `40905ef8ecdc` · data-base 2026-10-17 (o laudo julgou `d406515a8aa9`; a r2c, abaixo, aplicou as trocas que ele propôs)

VEREDITO: RESSALVA

O que este laudo julga: só o delta de `44ec6a38887f` (`_trabalho/roteiro-r2.antes.md`) para `d406515a8aa9` (`roteiro-narrador.md`):
os 19 itens de `_trabalho/lista-r2.json` (saída em `_trabalho/aplicado-r2.txt`, `44ec6a38887f → 6d68a95846e2`) e o item de
`_trabalho/lista-r2b.json` (saída em `_trabalho/aplicado-r2b.txt`, `6d68a95846e2 → d406515a8aa9`). O resto do texto é o que a bancada
final julgou; os laudos dela estão em `qc-roteiro/*-r2-antigo.laudo.md` (roteiro, clareza, locucao, fatos, escuta-fria). Este laudo
não é a lente de fatos: o que cada troca muda de fato vai indicado para ela (abaixo, "Para a lente de fatos").

Por que RESSALVA, e não PASS: as 20 trocas são as da lista, palavra por palavra, e resolvem o achado que as pediu (algumas em parte,
ditas abaixo); nenhuma ponte, escala ou antecedente quebrou. Mas a `pronuncia.md` cita `d406515a8aa9` e guarda, na amostra e em três
linhas, frases de antes da r2 (D1, MÉDIO, num derivado que o `--derivados` não pega); e o F19 deixou a frase mais longa do roteiro, com
o sujeito na 20ª palavra, no clímax (D2, LEVE). Nenhum GRAVE; nada no gancho.

## Depois deste laudo: a r2c (da Sala de controle)

A Sala aplicou, com `ferramentas/aplicar-lista.mjs`, `_trabalho/lista-r2c.json` (`d406515a8aa9 → 40905ef8ecdc`; saída em
`_trabalho/aplicado-r2c.txt`), com as trocas que este laudo propôs, palavra por palavra:
- A1 → G01 (CORTAR, p4): "The city drew newcomers, and many of them built their own homes at the city's edge.";
- D2 → G05 (REORDENAR, p7): o motivo no fim da frase do fecho;
- D3 → G03 (REDIZER, p6): "she said. To save water, she added, she washed…";
- D4 → G02 (REDIZER, p5): "The dry-season releases";
- e a O1 do laudo de fatos → G04 (CORTAR, p6): sai o "utility" do F18.
D1 e D5 (os derivados): a `pronuncia.md` (as linhas 62 e 98, os pedidos 2, 9, 10, 11 e 13 da amostra e os pares de anos) e a
linha 64 do `roteiro-editor.md` foram postos com as frases de hoje. O portão sobre `40905ef8ecdc`: PASSA, 2.057 palavras, 129 frases,
média 15,9, maior 33 (o fecho, agora com o sujeito na 8ª palavra), gancho intacto (166, "But" na 44ª), autoplágio vazio. O carimbo
abaixo foi posto em dia pela Sala; o julgamento deste laudo é o de `d406515a8aa9`, mais estas trocas, que ele mesmo propôs.

## O portão

`node roteiros/peru-agua/_ferramentas/gate.mjs`: PASSA, sha256 do texto falado
`d406515a8aa9eed74ca8c06201f72cc1b0cca167533a40f4b7caa3fcdef533f5`. 2.069 palavras (eram 2.041: +28), ≈11:14 a 184 palavras/min, 27
parágrafos (=), 129 frases (= : o F09 parte uma em duas, o F16 junta duas numa), média 16 (era 15,8), **maior 33 (era 31: é a do F19)**,
gancho com 166 palavras até a assinatura e o "But" na palavra 44 (intactos), 0 problemas, 1 alerta (o "still" de p7, o mesmo de antes e
já decidido), nenhuma taxa em alerta (abre_and 2, abre_so 3, perguntas 2, frases_curtas 2), autoplágio vazio. `--derivados`: o
`roteiro-editor.md` e a `pronuncia.md` citam `d406515a8aa9` (ok); o portão só confere a citação, não o conteúdo (D1, D5).

O portão de fatos (`node ferramentas/portao-fatos.mjs peru-agua`) sai 2, NAO_RODOU: `qc-roteiro/fatos.laudo.md` não existe (o de
`44ec6a38887f` foi renomeado para `fatos-r2-antigo.laudo.md`), e a `qc-roteiro/fatos-tabela.json` é a de antes (idêntica, em tamanho e
nas frases, a `_trabalho/fatos-tabela-r2.antes.json`). Para este laudo: **NÃO MEDIDO (portao-fatos)**.

## 1. Só as frases da lista mudaram, e cada uma é a troca proposta

`diff _trabalho/roteiro-r2.antes.md roteiro-narrador.md`: 14 linhas de parágrafo (as 14 "Diferenças" do `aplicado-r2.txt`), nada fora
delas. O `aplicado-r2.txt` dá 19 itens, 0 frases sem item; o `aplicado-r2b.txt`, 1 item, 0 frases sem item. O aviso do aplicador sobre o
F09 (a ordem dos numerais mudou) foi conferido: nenhum número trocou de valor nem de dono (650,000 e "one in ten" ficam com 1940; "ten
and a half million" e "a third" com 2025).

| item | laudo `-r2-antigo` que pediu | a troca, como está hoje | resolve? | o que está em volta |
|---|---|---|---|---|
| F01 · REDIZER | clareza 3 (LEVE, "department" soa como órgão); escuta-fria E13 | "There, Loreto, Peru's largest region, is also one of its most thinly populated." | sim | "one of its most thinly populated" elide "regions", e a elipse fica mais natural. "Region" passa a ter dois sentidos no texto: o administrativo (Loreto, "the Lima region" de p1 e p4) e o do censo ("the region the census calls the coast", "census region", "that coastal region", todos em p4). Cada um vem qualificado; observação, não achado. A palavra vai à lente de fatos. |
| F02 · REDIZER | locução A9 (LEVE, três "Peru's"); escuta-fria E06 (MÉDIO, "paradoxo de quê?") | "The country's water authority calls that imbalance a paradox." | A9 sim; E06 em parte | O parágrafo abre agora com "Peru's", "The dry side", "Per person", "The country's", "Peru's": o formulário sumiu. "That imbalance" dá nome ao que a frase anterior mediu (cem vezes a água por pessoa), e o gancho já disse quem está do lado seco; o paradoxo da fonte (doc-01: "paradójicamente se concentra el 65% de la población") é o mesmo arranjo visto pela gente. Sai o "own" da R05 ("Peru's own water authority calls it a paradox"): a forma de voz da regra muda (o `observacao` de `doc.afi-05` já dava "the country's own"); a lente de fatos confere "imbalance" e a forma. "The country" ecoa "less than a quarter of the country" duas frases antes: dito, não confunde. Em p2, a mesma ANA volta como "Peru's water authority" (F06): o mesmo dono, nome quase igual; bom. |
| F03 · CORTAR | roteiro 2 (MÉDIO); locução A1 (MÉDIO) | "It stays as fog, low cloud and drizzle." | sim | "It" continua preso a "the moisture". A contradição com "Lima gets about a third of an inch of rain, almost all of it drizzle" (20 s depois) sumiu; o contraste fica em "cannot rise to build a rain cloud" e em "The dry side gets real rain too". |
| F04 · REDIZER | locução A2 (MÉDIO, "rises and falls" é expressão feita) | "On the eastern slopes, that air rises, and its moisture falls as rain." | sim | A lente propôs "climbs"; ficou "rises". O par "rises … falls" continua, mas com dois sujeitos e "its moisture" no meio: o ouvido não o junta mais na expressão. "That air" segue preso a "moist air from the Amazon". |
| F05 · CORTAR | roteiro 5 (LEVE); clareza 1 (MÉDIO) | "That rain runs off fast, down short rivers." | sim | "That rain" aponta para "real rain … from December to March": antecedente único. |
| F06 · REORDENAR | locução A10 (LEVE, 13 palavras de sujeito antes do verbo) | "In 2009, Peru's water authority said that, for lack of storage, about half of the flood water from the wetter part of the Pacific side runs back into the sea unused." | em parte | A frase agora pousa em "unused", e a causa vem antes; o problema que a lente descreveu (o sujeito de 13 palavras antes de "runs") continua, e entra uma interrupção entre "that" e o sujeito. Não quebra nada, e a frase seguinte ("Along the shore lies…") liga como antes. A forma da lente ("said that on the wetter part of the Pacific side, about half of the flood water runs back…") encurtaria o sujeito; fica como opção, sem achado. |
| F07 · REDIZER | roteiro 4 (LEVE); clareza 6 (LEVE): "its" com dois candidatos | "It did not put most of the country's people on the coast." | sim | As duas lentes propuseram "most Peruvians"; "the country's people" também tira a capital do páreo. O "most of them" de p4 ("Peru's census found most of them in the highlands") fica com um antecedente só. "It" segue preso a "That" (a fundação). |
| F08 · REDIZER | clareza 2 (LEVE, os seis em dez de 2025 parecem desmentir os três em cinco do gancho); escuta-fria E07 | "By 2025, nearly six in ten lived in that coastal region." | em parte | "That coastal region" lembra a régua do censo ("the region the census calls the coast", quatro frases antes, com o "covers only part of the dry side") e desfaz o "did" elíptico; não diz, como a forma da lente ("on the coast alone"), que a régua é menor que a do gancho. Quem ligou a ressalva ao número entende; quem não ligou ainda pode fazer a conta errada. Fica como está: o número é verdadeiro e datado, e o recorte está dito. |
| F09 + F09b · REDIZER, REORDENAR | locução A3 (MÉDIO, dois "from… to" e seis números numa frase); escuta-fria E02 (MÉDIO, o muro de números) | "Lima and Callao had about 650,000 people in 1940, about one in ten Peruvians. By 2025, they had more than ten and a half million, about a third." | sim (A3); E02 em parte | Duas frases de 13 e 11 palavras, cada par com o seu ano: o ouvido não perde mais qual fração é de quando. "They" pega "Lima and Callao" sem concorrente; "more than ten and a half million" sem "people" e "about a third" sem "of Peruvians" se pagam pelo paralelo com a frase anterior. A ESCALA bate: "more than ten million" (gancho) e "more than ten and a half million" (p4) com 10.643.581 (`doc.num-33`). O F09b tirou a terceira data seguida na abertura de frase; ficam duas ("By 2025," e "In 2022,"), dentro da regra, com a volta de 2025 para 2022 que já existia. "Six hundred fifty thousand people in nineteen forty" põe dois numerais a duas palavras um do outro na cópia para a voz: legível, mas é a nova fila de números a conferir de ouvido (D1). O E02 pedia também tirar números; o total de números de p4 é o mesmo. |
| F10 · REDIZER | locução A4 (MÉDIO, "nineteen seventy-one, one hundred eighty" gagueja); escuta-fria E03 (MÉDIO, a invasão e o reassentamento sem ligação) | "In 1971, a group of 180 families took over a plot of land, and more followed. The government then set out to resettle about 7,000 families…" | A4 sim; E03 em parte | "A group of" separa os dois numerais. O "then" é o "entonces" da fonte ("Se trató, entonces de ubicar alrededor de 7,000 familias", `gen.num-19`): marca a sequência e deixa a causa implícita, como a fonte. Se a "plot" e a "stretch of sand" são o mesmo lugar o texto continua sem dizer (pela fonte, não parecem ser: a invasão é "a un terreno de propiedad del Estado", e o reassentamento, num "extenso arenal semi-desértico", `gen.num-19`), e "That ground became Villa El Salvador" segue preso ao areal. "And more followed": "more" pode ser mais famílias ou mais grupos; os dois servem. |
| F11 · REDIZER | clareza 8 (LEVE); locução A5 (MÉDIO): "firm up a river" | "…and also to steady the flow of the river Lima drinks from." | sim | É a forma da clareza ("steady"; a locução propôs "secure"). O tr-08 ("built first to power a hydroelectric plant") fica palavra por palavra. "Steady the flow" pelo "afianzar el caudal" (`lim.afi-05`) vai à lente de fatos. O "the river Lima drinks from" sem "that" é forma da Sala (r1, A3c) e não se reabre. |
| F12 · REDIZER | locução A6 (LEVE, duas usinas em 30 s) | "The power plant, at Huinco, opened in 1964." | sim | Liga à "hydroelectric plant" da frase anterior; a "treatment plant" do parágrafo de antes fica fora do páreo. |
| F13 · REORDENAR | locução A7 (MÉDIO, o nome entalado entre a data e o cargo); clareza 9 (LEVE, a cadeia da assessoria) | "The releases run from May 1 to November 30, Rómulo Cárhuaz, a watershed analyst at the utility, told its press office in remarks reported in 2024." | A7 sim; clareza 9 em parte | As datas, o que a frase quer que fique, vêm primeiro; o nome difícil vem depois de uma pausa natural, e "its press office" agora tem o antecedente mais perto certo ("the utility"). A frase seguinte ganha: "…three large reservoirs, he said." tem Cárhuaz como sujeito da frase anterior. A cadeia "told its press office in remarks reported in 2024" continua, mas no fim, onde pesa menos. A afirmação fica atribuída na mesma frase (a voz a diz por 8 palavras antes do dono, a forma de citação invertida corrente). O que pode ter enfraquecido: "The releases" abre a frase frio, logo depois de "…the Chillón and the Lurín, and on wells." (D4). |
| F14 · REDIZER | roteiro 6 (LEVE, "those homes" sem antecedente) | "…almost all of the homes without a connection bought water from tanker trucks…" | sim | É o grupo da fonte ("el 94.7% de los hogares sin conexión", `lim.num-24`). "Without a connection" duas frases seguidas: eco, que também amarra; sem achado. |
| F15 · REDIZER | clareza 10 (LEVE, "AFP" sem tradução); escuta-fria E13 | "…Catalina Naupa, 59, told the news agency AFP in March 2025 that her water comes by truck." | sim | 25 palavras, ritmo igual ao de antes. A sigla fica com a glosa na primeira menção. |
| F16 · REDIZER | locução A8 (LEVE, "she said. She said") | "\"There are worms in the bottom of the tank,\" she said, and to save water, she washed clothes once a week, or every two weeks." | sim, com custo | A emenda repetida sumiu. Em troca, o "and" junta a fala citada e um hábito, com quatro pausas em 22 palavras (D3). Fato: a frase deixa de ser fala relatada e passa à voz do narrador; a AFP diz o mesmo na voz dela ("Naupa, who washes her clothes only once a week or even every two weeks to conserve water", cópia local `gente/enca-afp-lima-running-water-dream.txt`), e o parágrafo está enquadrado pela AFP: não é problema de atribuição. |
| F17 · REDIZER | roteiro 7 (LEVE, "the agency" soa como órgão) | "An official at the utility told the news agency it brings about 260 gallons…" | sim | "The news agency" duas vezes em três frases, depois "AFP reported": claro, sem colisão com o regulador e a empresa. |
| F18 · REDIZER | escuta-fria E08 (MÉDIO, caminhão caro ou grátis?) | "AFP reported that those utility deliveries were free." | sim | "Those" segue preso à entrega do funcionário ("it brings about 260 gallons"); "utility" marca, para o ouvido, a diferença dos "tanker trucks" pagos do parágrafo anterior. É o que a AFP diz ("Blue tanker trucks bring water for free once a week… to parts of San Juan de Miraflores", e o funcionário da Sedapal na frase seguinte); a lente de fatos confere a ligação. |
| F19 · DO-DOSSIE | escuta-fria, "O que o título prometeu" (o fecho repete o fato, não o motivo; "pagou uns 80 %") | "Then the people: in the 20th century, pushed in part by a shortage of farmland and later by violence, the country came down from the mountains, to the coast and to that capital." | sim, com custo | Ver abaixo, "O F19 e o fecho", e D2. |

### O F19 e o fecho

- **Repete p4, sem afirmar mais.** p4 diz: "In a 1995 study, the same institute pointed to a shortage of farmland in the highlands, and called
  the coast the main destination of people leaving the Andes. The political violence of the 1980s and '90s pushed many more." A meia
  frase nova diz as mesmas duas causas, na mesma ordem e com o mesmo verbo ("pushed"), com "in part" (o "uma das causas" da regra 12 e
  da R18) e "later" (o "later" da forma de voz da R43: "Peru's statistics institute pointed to a shortage of farmland; later, the
  violence of the 1980s and '90s pushed many more"). A fonte do INEI dá as duas juntas ("la escasez de tierras de cultivo y la violencia
  terrorista", `gen-03`, linha da `fatos-tabela.json` em p4, confirmada); o "later" põe a violência nos anos 1980 e '90, que p4 data.
  Nada de "poverty", nada de "terrorist". Não traz número nem fato que p4 não tenha pago.
- **O que ela solta:** o dono (o INEI e a CVR estão em p4, a uns 2 min 30 s) e o "political" da violência (o termo da CVR que a L26 da
  r1 pôs). Num resumo que retoma o que já foi atribuído, o dono solto é a forma do resto da resposta ("people built a city", "the Spanish
  put their capital"); a regra 12 do dossiê ("entra só atribuída") é da lente de fatos, que diz se o resumo a cumpre. A troca de D2
  pode levar o "political" de volta (+1) se a lente quiser.
- **A lista diz que o F19 veio de duas lentes (frio e roteiro)**: o laudo de roteiro não o pediu, e pôs "A resposta de p7 e a coda,
  palavra por palavra" no NÃO TOCAR. A troca é de uma lente só, contra o NÃO TOCAR de outra. Ainda assim fica: ela paga a promessa do
  título (o "por quê" da gente) com o que o vídeo já disse, sem número novo, que era o que o NÃO TOCAR protegia ("sem número novo, cada
  camada paga antes"). A Sala sabe que mexeu num NÃO TOCAR.
- **O custo é de voz alta:** a frase passa a 33 palavras, a maior do roteiro, e o sujeito ("the country") só chega na 20ª, depois de uma
  interrupção de 12 palavras, na terceira batida de uma lista em que as duas primeiras ("First, the valleys: …", "Then the port: …") têm
  15 e 14 palavras e o sujeito na 8ª e na 7ª. Num pedido só à voz sintética, a interrupção antes do sujeito costuma sair em tom chapado, e a
  lista perde o passo no clímax (D2).
- **A ponte para a frase seguinte** ("The water had to be brought to them: …") continua: "them" é a gente que desceu, e nenhuma palavra
  nova o disputa ("violence" e "farmland" não são gente).

### O que está em volta, conferido

- **As pontes do plano**, todas de pé: "Peru's weather service says the main reason the coast is so dry lies out over the Pacific." (logo
  depois do F02), "And yet people built a city on that coast about 5,000 years ago." (depois do F06), "That put Peru's capital on the dry
  side of the line." + F07, "A city that size needs water all year, and its river runs low for seven months of it." (depois do F10), "The
  water makes it across the line. On the hills at the city's edge, many homes are not on the network at all." (depois do F13), "Most of
  the families there, the magazine reported, had come down from the Andean regions in search of better work." e a resposta de p7.
- **A ESCALA:** nenhum número mudou de valor. As cifras do gancho e das repetições ("more than ten million" / "more than ten and a half
  million", "about a third of an inch", "more than half of the water Lima stores for the dry season") batem como antes.
- **O gancho e a coda** não foram tocados (166 palavras, "But" na 44; as duas últimas frases, palavra por palavra).

## Para a lente de fatos (não julgado aqui)

O portão de fatos não rodou (acima). As trocas que mexem em palavra de fato: F01 ("largest region", onde a fonte diz "department",
`gen.afi-26`), F02 ("imbalance", e a forma da R05), F08 ("that coastal region"), F10 ("then"), F11 ("steady the flow"), F16 (a fala vira
voz do narrador, coberta pela narração da AFP), F18 ("utility deliveries") e F19 (as duas causas no fecho, sem dono). As linhas da
`fatos-tabela.json` dessas frases têm a frase de antes, e a regra `[frase]` do portão as reprovaria.

## O que os laudos da bancada final deixaram fora da lista

O motivo da Sala, para os que ela deu: o El Niño fica pela fonte (`_leia` da lista-r2: o SENAMHI, `mec-01`, l. 1024–1042, "principalmente
en el extremo norte de la Costa", para as chuvas intensas e inundações). Para os outros, a lista diz só o critério (duas ou mais lentes,
ou troca segura).

| laudo (`-r2-antigo`) | item | gravidade | por que fica, e se importa antes de o Lucas ler |
|---|---|---|---|
| roteiro | 1 · El Niño "mostly in the north" (o SENAMHI diz "Costa norte y central") | MÉDIO | Decidido pela Sala com a fonte. A cópia local tem as duas passagens: l. 1024–1042 (a Corriente del Niño, "principalmente en el extremo norte de la Costa", e as chuvas e inundações) e l. 1048–1060 (os eventos fortes, a tropicalização "principalmente en la Costa norte y central"). A frase do texto fala das chuvas e inundações: casa com a primeira. Não é defeito. |
| roteiro | 3 · "in 1993, almost four in ten…" / "Many of them built…" / "In 1971…" (a volta no tempo e a 11ª fração de p4) | MÉDIO | **Importa.** Ver A1, abaixo. Uma lente só, mas a escuta fria (E02, o muro de números de p4) e a clareza (o "vale de carga" de p4, "MAPA DE RETENÇÃO") apontam para o mesmo trecho. O F09 aliviou a frase de Lima e Callao, não esta. |
| clareza | 4 · "the trade winds" sem lugar no mecanismo | LEVE | Troca de −3 palavras ("In El Niño years, the high pressure eases,"); o vento não aparece no parágrafo que monta o sistema. Barato, mas LEVE; fica a critério da Sala. |
| clareza | 5 · "the Chimú capital" (e o Moche ao lado) | LEVE | Polimento; não segura a leitura. |
| clareza | 7 · cortar "The utility calls the tunnel the only way…" (o "único túnel" gasto a 72 %) | LEVE | Dose; p7 continua a dar o risco. Fica. |
| escuta-fria | E01 · "water authority", "water utility" e "water regulator" soam como a mesma coisa | MÉDIO | Uma lente só. O F02 tirou um "Peru's", não a semelhança dos três. Não é erro de fato, e cada nome está certo; quem ouve uma vez pode não saber quem fiscaliza quem. Vale a Sala perguntar ao Lucas se ele também se perde, na leitura dele, antes de mexer. |
| escuta-fria | E04 (nomes de lugar demais), E05 (atribuição densa), E09 (27.000 milhas² e 260 galões sem âncora), E10 (a frase do armazenamento em p2), E11 (nomes que não voltam), E12 (repetições), E14 ("Lima region") | MÉDIO a LEVE | Pedem corte ou reescrita contra decisões já tomadas (as atribuições e as formas da Sala, as pessoas com nome, as repetições do gancho que p5 paga). Preferência de escuta, não defeito. |
| escuta-fria | E07 (as três geografias) | MÉDIO | Em parte resolvido pelo F08 (acima). |
| escuta-fria | "Onde quis parar" (os três exemplos de p3; Puente Piedra) e "A pergunta que ficou sem resposta" (a fração anual; os incas; o túnel que cai) | — | A fração do consumo é vetada (tr-06); os incas não têm fonte lida no dossiê; o resto é dose. Não é defeito. |
| locução | "abaixo da linha" (o molde de aposto das pessoas, o "that" de "a quarter of that", "two cooperatives") | — | A própria lente diz que não são achados. |

## ACHADOS

**D1** · [MÉDIO · derivado (a amostra de pronúncia cita o sha novo e guarda o texto velho)] `roteiros/peru-agua/pronuncia.md`
- Trecho: a amostra ("São frases do roteiro de `c803b5cf5e0b`, literais") traz, como estavam antes da r2, o pedido 2 ("There, Loreto,
  Peru's largest department, is…"), o 9 ("The plant, at Huinco, opened in nineteen sixty-four."), o 10 ("In remarks reported in twenty
  twenty-four, Rómulo Cárhuaz, … told its press office that the releases run from May first to November thirtieth."), o 11 ("…Catalina
  Naupa, fifty-nine, told AFP in March twenty twenty-five…") e o 13 ("Lima and Callao grew from about six hundred fifty thousand people in
  nineteen forty to more than ten and a half million in twenty twenty-five, from about one in ten Peruvians to about a third."); e, na
  tabela e na cópia para a voz, a linha 62 (`Huinco ("The plant, at Huinco")`), a 98 (`AFP ("told AFP"; "AFP reported")`) e a 183 (o par
  `"from about 650,000 people in 1940 to … in 2025" (16º)`).
- Problema: o cabeçalho da folha cita `d406515a8aa9`, e o `gate.mjs --derivados` dá ok, mas a amostra que a Sala gera para o Lucas ouvir
  diria cinco frases que não estão mais no roteiro, e a nota da cópia para a voz manda conferir um par de anos que saiu. O Cárhuaz, em
  particular, mudou de lugar na frase (agora depois das datas), e é isso que a amostra quer ouvir.
- Troca (para quem cuida da folha; este laudo não a edita): os pedidos 2, 9, 10, 11 e 13 com as frases de hoje, por extenso; a linha 62
  `Huinco ("The power plant, at Huinco")`; a 98 `AFP ("the news agency AFP"; "AFP reported")`; a 183, no lugar do par, `"about 650,000
  people in 1940" (16º: "six hundred fifty thousand people in nineteen forty", dois numerais a duas palavras)`; e o cabeçalho da amostra
  com o sha de hoje. A contagem de caracteres e o custo da amostra se refazem.

**D2** · [LEVE · locução (o sujeito na 20ª palavra, a maior frase, no clímax)] p7, 26º parágrafo
- Trecho: "Then the people: in the 20th century, pushed in part by a shortage of farmland and later by violence, the country came down from
  the mountains, to the coast and to that capital."
- Problema: acima, "O F19 e o fecho": 33 palavras, 12 de interrupção antes do sujeito, na terceira batida de uma lista de três.
- Troca (REORDENAR, 0 palavras): "Then the people: in the 20th century, the country came down from the mountains, pushed in part by a shortage of farmland and
  later by violence, to the coast and to that capital." O sujeito e o verbo voltam à 9ª e à 10ª palavra, perto das duas batidas de antes,
  e o particípio, depois da oração, prende-se ao sujeito ("came down … pushed"). Se a lente de fatos quiser o termo de p4: "…and later by
  political violence, …" (+1).
- Prova: com D2 e D3 aplicados numa cópia fora do canal (scratchpad), o `gate.mjs` dá PASSA: 2.070 palavras, 130 frases, média 15,9,
  maior 33 (a mesma frase, que não encurta), gancho intacto (166, "But" na 44), o mesmo alerta, nenhum problema.

**D3** · [LEVE · locução (o "and" que junta a fala e o hábito)] p6, 23º parágrafo
- Trecho: "\"There are worms in the bottom of the tank,\" she said, and to save water, she washed clothes once a week, or every two weeks."
- Problema: o F16 tirou o "she said. She said", mas juntou com "and" a fala citada e um hábito, e a frase ficou com quatro pausas em 22
  palavras; dito sem aspas, o "she said, and to save water" se ouve primeiro como continuação do que ela disse.
- Troca (REDIZER, +1): "\"There are worms in the bottom of the tank,\" she said. To save water, she added, she washed clothes once a week, or every
  two weeks." É a forma que a lente de locução propôs (A8): sem a repetição e com a fala de volta à boca dela (a AFP a dá nos dois modos).

**D4** · [LEVE · coesão ("The releases" abre frio)] p5, 21º parágrafo
- Trecho: "The city also draws on two other rivers, the Chillón and the Lurín, and on wells. The releases run from May 1 to November 30, …"
- Problema: com o F13, "The releases" passou a abrir a frase, logo depois de rios e poços; o que é solto ("lets it out in the dry ones")
  está dois parágrafos antes. O ouvido se acerta na data, mas meio segundo depois.
- Troca (QUALIFICAR, +1, opcional): "The dry-season releases run from May 1 to November 30, …". "Dry-season" retoma "the water Lima
  stores for the dry season" (gancho e p5) e "lets it out in the dry ones" (p5), sem dado novo.

**D5** · [LEVE · derivado] `roteiros/peru-agua/roteiro-editor.md`, linha 64 (a linha S8 da tabela do gancho)
- Trecho: `p4, 3º parágrafo ("Lima and Callao grew from about 650,000 people in 1940 to more than ten and a half million in 2025, from about one
  in ten Peruvians to about a third")`.
- Problema: o editor foi posto em dia nas linhas da lista (l. 470 tem as duas frases novas), mas esta remissão cita a frase de antes.
- Troca: `p4, 3º parágrafo ("Lima and Callao had about 650,000 people in 1940, about one in ten Peruvians. By 2025, they had more than ten
  and a half million, about a third.")`.

**A1** · [MÉDIO · de fora da lista, e que o Lucas deveria ver antes de ler] p4, 17º parágrafo (o laudo de roteiro, achado 3)
- Trecho: "The city drew newcomers: in 1993, almost four in ten of Lima's residents had been born somewhere else. Many of them built their own
  homes at the city's edge. In 1971, a group of 180 families took over a plot of land, …"
- Problema: o que o laudo de roteiro disse continua, palavra por palavra: a linha do tempo vai de 2022 (o PIB) a 1993, volta a 1971 e
  avança a 1981, e "Many of them" amarra as casas da borda aos residentes de 1993, logo antes do exemplo de 1971. É também mais uma fração
  no trecho que três lentes (roteiro, clareza, escuta fria) apontaram como o mais carregado do vídeo. O F10 só mexeu na frase de 1971.
- Troca (CORTAR, −13; a do laudo de roteiro): "The city drew newcomers, and many of them built their own homes at the city's edge." O 38,8 % de 1993
  (`gen.num-17`) vai à tela, se o regente quiser; a ligação migrante → barriada continua sustentada (CVR, citada no laudo de roteiro). Com
  D2, D3 e esta troca numa cópia, o `gate.mjs` dá PASSA: 2.057 palavras (piso 1.950), 129 frases, média 15,9, maior 33, gancho intacto,
  o mesmo alerta, nenhum problema. O editor (l. 137) e a tabela de fatos perderiam a linha do `gen.num-17`.

## Conclusão

As 20 trocas são as da lista, palavra por palavra; só as frases delas mudaram; os números ficaram com o valor e o dono; as pontes, a
ESCALA, o gancho e a coda estão de pé; o gate passa. Os achados que elas pediram estão resolvidos, cinco em parte (F02, F06, F08, F13 e o
E02 do F09). O que segura o PASS é derivado (D1, a amostra de pronúncia com frases velhas sob o sha novo) e de voz alta, barato (D2 e D3,
que custam 0 e +1 palavra). Os fatos das frases novas ficam com a lente de fatos (o portão de fatos não rodou). De fora da lista, o
Lucas deveria ver o A1 (a volta no tempo de p4) antes de ler, e a Sala pode perguntar a ele sobre o E01 (os três "water" das
instituições).
