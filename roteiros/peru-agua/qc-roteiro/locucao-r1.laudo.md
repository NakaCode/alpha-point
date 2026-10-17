# Laudo · crítico de locução (adaptado para en-US e TTS) · rodada 1

Revisão julgada: `87ea57b0abe5` · data-base 2026-10-17

NOTA: 7/10. O roteiro quase todo se fala de primeira. As frases são curtas (média de 16,1 palavras), a frase curta fica guardada para as viradas, os termos se definem na oração em que entram, e a fonte vem dita antes das citações. Não há achado GRAVE. Mas em nove lugares o ouvido monta outra coisa que a página. São orações relativas sem "that", que a voz não marca ("the water Lima stores", "the river Lima drinks from"), um possessivo que soa como contração ("Lima's is"), listas que soam como aposto e filas de números numa frase só. Há ainda o "about 2 percent" do gancho, que dito não diz de quê.

VEREDITO: RESSALVA. Nenhum GRAVE segura o texto (ofício §6), mas a nota fica abaixo de 8 por causa dos MÉDIOS. As trocas são pontuais e cabem numa rodada. Aplicadas juntas numa cópia, o `gate.mjs` dá PASSA (detalhes abaixo).

## Notas

- **O que foi julgado.** O texto falado de `roteiros/peru-agua/roteiro-narrador.md`, sha256 `87ea57b0abe551676e18c3347454c08c1cdc7a8501c51b49ad650791fcd4a5a0`. São 27 parágrafos, 127 frases e 2.039 palavras, e o portão dá PASSA. O gancho chega à assinatura com 166 palavras, o "But" está na palavra 44, não há autoplágio e nenhuma taxa chega ao teto. A origem de cada frase foi lida em `roteiro-editor.md`, e a pronúncia na folha `pronuncia.md`, que já cita este sha.
- **Como foi lido.** Do jeito que a voz vai ler: um pedido por parágrafo, eleven_v4 a ~184 palavras/min, stability 0,5. Aspas, itálico, hífen e maiúscula não se ouvem, e os números só vão por extenso na cópia para a voz. Os achados são da primeira passada.
- **O que esta lente não refez.** A média, o teto de frase, a fila de datas, as palavras vetadas e as taxas são do portão, e não foram recontadas aqui. Fato e estrutura ficam com as outras lentes. Quando uma troca encosta em fato, o achado diz o que a lente de fatos tem de conferir.
- **O alerta do portão**, "In 2026, it still had no construction date.", fica. O "still" vem com a data absoluta na mesma frase (voz §2), e o "it" se prende ao "second tunnel" logo antes, sem tropeço. É volátil: o Lucas o relê na semana da gravação.
- **As trocas, provadas numa cópia.** As 14 trocas dos 10 achados abaixo, aplicadas juntas numa cópia fora do canal, dão no `gate.mjs`:
  - PASSA, com 2.038 palavras, 129 frases, média de 15,8 e maior frase de 31 palavras;
  - **o gancho com 170 palavras até a assinatura, exatamente no teto.** Com A3(a) e A4 juntas, não sobra folga nenhuma. Se outra lente acrescentar uma palavra ao gancho, uma das duas cai: só A4 deixa 169, e só A3(a), 167. Entre as duas, A4 pesa mais;
  - o "But" na palavra 47, sem autoplágio e sem nenhuma taxa no teto;
  - o mesmo alerta do "still".
- **Duas trocas encostam em forma literal da Sala**, e a decisão é dela: A3(a) e A3(b) ("more than half of the water Lima stores for the dry season", decisão de 17/10) e A3(c), na R09 do dossiê ("…and also to firm up the river Lima drinks from"). A troca só põe um "that" e não muda número, nome nem afirmação. Se a Sala quiser a forma literal, o risco fica para a amostra.
- **A chamada de inscrição** (cta §5.3) tem onde entrar. A janela é de 35 a 60 % do vídeo, entre as palavras ~714 e ~1.224. Nela há frases curtas e calmas: "UNESCO calls it the oldest center of civilization in the Americas." (~36 %) e "A canal about 50 miles long once supplied it." (~39 %). Há também a pausa entre parágrafos depois de "It did not put most of its people there." (~48 %), mas essa frase é a virada da parte 3, e ali a chamada não entra. O texto não tem "here" nem "this line". Quem escolhe é o regente.
- **Para a folha de pronúncia e a amostra** (não são achados):
  - **Supe** é o risco cômico do roteiro: "the green valley of the Supe River" e "Rivers like the Supe" dão "the soup river" e "like the soup" se a voz disser SOOP. O alias de reserva (SOO-pay) é o primeiro a testar se a amostra errar;
  - **Callao** cai no gancho ("With its port, Callao,"), onde erro pesa mais. A amostra já o testa duas vezes (pedidos 1 e 13);
  - se A7 entrar, o "'90s" sai, e o apóstrofo que a folha manda conferir de ouvido some com ele: "the 1980s and 1990s" vira "the nineteen eighties and nineteen nineties";
  - se A9 entrar, a cópia para a voz escreve "fifty-nine-year-old" e "thirty-year-old". Se A6 entrar, escreve "more than forty percent";
  - se os cortes opcionais de Marcapomacocha e Huinco entrarem (abaixo da linha), os dois nomes saem da folha. Com qualquer troca, a folha se refaz com o sha novo.
- **Abaixo da linha.** Não são achados e não seguram nada. Ficam a critério de quem escreve:
  - **p1:** "A smaller third region, in the south, drains into Lake Titicaca." O roteiro está cheio de frações (three-quarters, a third of an inch, three in five, a quarter, a third), e dito, "a smaller third" se ouve primeiro como fração ("um terço menor"). Em p4, "the three census regions" é outra tríade, e as duas se misturam. Proposta: "In the south, a smaller region drains into Lake Titicaca.";
  - **O molde "Peru's <órgão> <verbo>"** volta 13 vezes: national water plan, own water authority, weather service (3), water authority, census, statistics institute, Truth and Reconciliation Commission, truth commission, ombudsman (2) e water regulator. Dito, começa a soar como formulário (ofício §3.6). Nenhuma ocorrência sozinha é defeito: a fonte na voz é regra da marca, e a sigla não se lê. Vale variar duas ou três. Por exemplo, p1: "Peru's own water authority calls that a paradox." → "The country's water authority calls that a paradox."; p7: "In 2025, Peru's ombudsman, citing the utility's own plan," → "In 2025, the ombudsman's office, citing the utility's own plan,". A lente de fatos confere que "the ombudsman's office" é a Defensoría;
  - **p2:** "On the eastern slopes, that air rises and falls as rain." Dito, "rises and falls" é a expressão de "sobe e desce", e não é o ar que cai como chuva. Proposta: "On the eastern slopes, that air rises, and its moisture falls as rain.";
  - **p6:** "An official at the utility told the agency it brings about 260 gallons…". "AFP" só foi dito como sigla, e logo depois de "the utility", "the agency" se ouve como órgão do governo. Proposta: "An official at the utility told AFP that it brings about 260 gallons…";
  - **p4:** "A large share were newcomers:". A frase anterior termina em "economic output", e "a large share" se prende a ela por um instante. Proposta: "A large share of the city's people were newcomers:";
  - **p4:** "In May 1971, the government moved 180 families who had taken over a plot of land to a vast, semi-desert stretch of sand south of the city." O "to" fica a 11 palavras do "moved", e o ouvido o prende a "a plot of land". Proposta (REORDENAR): "In May 1971, the government moved 180 families to a vast, semi-desert stretch of sand south of the city, after they had taken over a plot of land.";
  - **p5:** "A weather station there, at Marcapomacocha, sits about 65 miles from downtown Lima in a straight line." A estação é só uma medida indireta do lugar das lagoas, e isso só funciona lido. A frase traz o nome mais longo do roteiro. E o "about 65 miles" do outro lado da linha, dito depois do "less than 70 miles" da divisória (p1), faz o ouvido comparar os dois números e estranhar. Proposta: CORTAR, se o mapa der a distância. A estrutura e o mapa decidem;
  - **p5:** "It was built between 1958 and 1962, and the system has been in service since 1963. … The plant, at Huinco, opened in 1964." São quatro anos em três frases, depois do "early 1960s" do gancho. Proposta: CORTAR "The plant, at Huinco, opened in 1964.". As datas que a Sala pediu (1958–1962 e 1963) ficam;
  - **p7:** "The water had to be brought to them: by canal in the old valleys, through a tunnel across the Andes since the early 1960s, and at the city's edge, by truck." O terceiro membro inverte a ordem dos outros dois. Proposta: "…by canal in the old valleys, by tunnel across the Andes since the early 1960s, and by truck at the city's edge.";
  - **p6:** ""There are worms in the bottom of the tank," she said.". A voz não marca as aspas, e a frase soa por um instante como do narrador. Proposta (REORDENAR): "She said, "There are worms in the bottom of the tank."";
  - **p7, a coda:** "Every May 1, the utility starts letting out its high lakes" é compressão (soltar as lagoas). Proposta: "starts letting water out of its high lakes";
  - **"own"** volta 4 vezes: "Lima's own river", "Peru's own water authority", "the Rímac's own natural flow" e "the utility's own plan". Um ou dois podem sair;
  - **p1:** "Peru's largest department". Para o ouvido de fora, "department" é órgão de governo, e o termo não se define (voz §1). A troca por "region" esbarraria nas outras regiões do texto, e a lente de estrutura decide.

## ACHADOS

1. [MÉDIO · REDIZER · lista que soa como aposto (ofício §3.1 e §3.3)] "Off the shore, the cold Humboldt Current, water rising from the deep and a blanket of low cloud keep the sea unusually cold for its latitude." → Dito, sem vírgula antes do "and", "the cold Humboldt Current, water rising from the deep" se ouve como aposto: a corrente *é* a água que sobe do fundo. São três sujeitos para um verbo só, e o "cloud keep" chega soando como erro de concordância. O que mantém o mar frio só fica claro na última palavra. → CONSERTO: "Off the shore, three things keep the sea unusually cold for its latitude: the cold Humboldt Current, water rising from the deep, and a blanket of low cloud." É a mesma afirmação, o nome continua "the cold Humboldt Current" (nomes do dossiê), e são 28 palavras. → RAIZ: PONTUAL.

2. [MÉDIO · REDIZER · possessivo que soa como contração (ofício §3.3)] "Lima's is not the only tunnel across the line." → Na fala, "Lima's" é quase sempre "Lima is". Dito, a frase soa "Lima is is not the only tunnel", como gagueira da voz. → CONSERTO: "Lima's tunnel is not the only one across the line." → RAIZ: PONTUAL.

3. [MÉDIO · REDIZER · oração relativa sem "that", que a voz não marca (ofício §3.3)] Três frases em que o nome da cidade, colado ao substantivo, forma outra coisa no ouvido:
   - (a) gancho: "And more than half of the water Lima stores for the dry season sits in lakes on the other side of the line." → Dito, "the water Lima stores" se ouve como "a água das lojas de Lima" (stores, substantivo), e só se resolve no "sits", 7 palavras depois. É o fato do gancho que leva ao túnel. → CONSERTO: "And more than half of the water that Lima stores for the dry season sits in lakes on the other side of the line.";
   - (b) p5: "By its 2007 figures, more than half of the water Lima stores for the dry season sits on the other side of the line." → É o mesmo nó. → CONSERTO: "By its 2007 figures, more than half of the water that Lima stores for the dry season sits on the other side of the line.";
   - (c) p5: "and also to firm up the river Lima drinks from." → Dito, "the river Lima" é o nome de um rio, como "the river Thames", e o ouvinte procura um rio chamado Lima. → CONSERTO: "and also to firm up the river that Lima drinks from."

   As três são forma literal da Sala (a decisão de 17/10 e a R09): a troca só acrescenta o "that". Quem decide é a Sala. → RAIZ: INSTRUÇÃO. Falta à voz §1 a regra "na voz, a oração relativa leva 'that' quando o sujeito dela é um nome próprio colado ao substantivo".

4. [MÉDIO · REDIZER · o número do título sem dono no ouvido (ofício §3.4)] "West of it, toward the Pacific, is the dry side, with about 2 percent." → A frase anterior deu duas medidas, a terra ("three-quarters of the country") e a água ("97 percent of Peru's water"). Dito sozinho, "about 2 percent" pode voltar a qualquer das duas, e o ouvinte pode entender 2 % do território. É o número que o título e o gancho prometem. → CONSERTO: "West of it, toward the Pacific, is the dry side, with about 2 percent of the water." São três palavras a mais no gancho: 169 com esta troca sozinha, e 170 (o teto) junto com A3(a). → RAIZ: PONTUAL.

5. [MÉDIO · CORTAR · a mesma atribuição duas vezes em ~10 s (ofício §3.6)] "Peru's weather service says the main reason the coast is so dry lies out over the Pacific." → Ela fecha o 5º parágrafo, e o 6º repete o mesmo na segunda frase: "Peru's weather service calls that sinking air the main cause of the coast's dryness." Dito, soa como a voz se repetindo, e o serviço volta logo depois uma terceira vez ("The same weather service calls Lima…"). O 5º parágrafo fecha bem em "calls that a paradox.", e o 6º abre sozinho com "Over the South Pacific sits a vast high-pressure system". → CONSERTO: CORTAR a frase. A atribuição da causa fica no 6º parágrafo, colada à frase que ela sustenta. → RAIZ: PONTUAL.

6. [MÉDIO · REDIZER · números em fila numa frase só (ofício §3.4)] "Lima and Callao grew from about 650,000 people in 1940 to more than ten and a half million in 2025, from about one in ten Peruvians to about a third." → Na cópia para a voz, são seis números em 29 palavras: "six hundred fifty thousand … nineteen forty … ten and a half million … twenty twenty-five … one in ten … a third". O segundo "from … to" chega quando o ouvido ainda guarda o primeiro, e as duas escalas (gente e fração) se misturam. A parte 4 tem ainda onze frações em uns dois minutos, em quatro bases diferentes (dez, terço, quinto e quarto), e a frase seguinte acrescenta o "two-fifths", forma rara na fala americana. → CONSERTO, duas trocas:
   - (a) "Lima and Callao grew from about 650,000 people in 1940 to more than ten and a half million in 2025. Their share of Peruvians went from about one in ten to about a third.";
   - (b) "about two-fifths of Peru's economic output" → "more than 40 percent of Peru's economic output".

   A lente de fatos confere (b): o INEI dá 41,9 % em 2022 (estimativa), e a tela diz 41.9%. → RAIZ: PONTUAL.

7. [MÉDIO · REDIZER · advérbio de tempo que o ouvido prende à última data (ofício §3.3)] "Later, the violence of the 1980s and '90s pushed many more." → A última data dita foi "In a 1995 study". Dito, "Later" se ouve como "depois de 1995", e a violência dos anos 1980 e 90 parece vir depois do estudo que a antecede. O "'90s" ainda leva o apóstrofo que a folha de pronúncia manda conferir de ouvido. → CONSERTO: "The violence of the 1980s and 1990s pushed many more." → RAIZ: PONTUAL.

8. [MÉDIO · REORDENAR · duas caudas penduradas e uma relativa sem "that" (ofício §3.2 e §3.3)] "By 1981, about one in four people in Lima lived in informal settlements, which Peruvians call barriadas, by census figures Peru's truth commission cites." → A frase tem duas caudas seguidas, o termo e a fonte. Dito, "barriadas, by census figures" cola o termo à fonte, e "figures Peru's truth commission cites" é outra relativa sem "that". A fonte chega por último, quando o número já passou. → CONSERTO: "Census figures cited by Peru's truth commission put about one in four of Lima's people in informal settlements by 1981. Peruvians call them barriadas." A fonte vem antes do número, e o termo fica numa frase só dele (voz §1). A lente de fatos confere que o "by 1981" segura o 25,5 % de 1981 (R16). → RAIZ: PONTUAL.

9. [MÉDIO · REDIZER · o molde de apresentar gente e o "up … down" (ofício §3.6 e §3.3)] Duas apresentações na mesma fôrma de agência, "Nome, idade,":
   - (a) "Catalina Naupa, 59, told AFP in March 2025 that her water comes by truck." → Dito, a idade e o ano ficam colados ("fifty-nine, told AFP in March twenty twenty-five"), com a sigla no meio. → CONSERTO: "59-year-old Catalina Naupa told AFP in March 2025 that her water comes by truck." (o "In San Juan de Miraflores, in southern Lima," antes fica);
   - (b) "There, Virginia Martínez Morales, 30, a mother of three, ran a hose from a tank up the hill down to her door." → São três blocos entre vírgulas antes do verbo ("thirty, a mother of three,"), e o fim choca "up the hill down to her door". Dito como a (a), a partir da segunda o ouvido já pega a fôrma antes do nome. → CONSERTO: "There, a 30-year-old mother of three, Virginia Martínez Morales, ran a hose down to her door from a tank up the hill."

   As duas apresentações deixam de ter a mesma sintaxe, e "Another resident, Tula Tinoco Espinoza, began carrying buckets." fica como está. → RAIZ: PONTUAL.

10. [LEVE · REORDENAR · o verbo perdido entre apostos (ofício §3.1 e §3.2)] "In the south, near Nazca, underground channels called puquios, commonly attributed to the Nazca culture, carry water to some fields, a 2012 study reports." → O "carry" chega 13 palavras depois do sujeito, e o aposto da datação fica entalado no meio. Ainda se ouve "Nazca" duas vezes antes do verbo, e a atribuição pendurada no fim ("some fields, a twenty twelve study reports") soa como mais um item. → CONSERTO: "In the south, near Nazca, underground channels called puquios carry water to some fields, a 2012 study reports. They are commonly attributed to the Nazca culture." O "commonly attributed" da R54 fica inteiro. → RAIZ: PONTUAL.

## O QUE ESTÁ FORTE

- **O gancho se fala de primeira, no essencial.** "A line runs along the Andes and divides Peru." abre com a imagem, curta. O "East of it" e o "West of it" dão ao ouvido o mapa antes do número. O "But" é limpo e curto ("But that is where most Peruvians live."). A data e a fonte vêm antes da fração ("In 2012, by the national water plan's figures, more than three in five did."), e a pergunta volta às palavras do título logo antes da assinatura.
- **As viradas em frase curta, sem rajada:**
  - "The mountains help.";
  - "And yet people built a city on that coast about 5,000 years ago.";
  - "That put Peru's capital on the dry side of the line. It did not put most of its people there.";
  - "Then, census by census, the balance tipped.";
  - "The water makes it across the line.".
- **O termo definido na oração em que entra:** "That line is the continental divide."; "underground channels called puquios"; "informal settlements, which Peruvians call barriadas"; "a lid of warmer air".
- **Nenhuma sigla para a voz decidir**, fora AFP e UNESCO. Os órgãos se dizem pelo que fazem ("Lima's water utility", "Peru's weather service"), como o dossiê manda.
- **A fonte dita antes da citação:** "Peru's statistics institute put it this way: the population had gone from "predominantly Andean" to "mostly coastal."". O ouvinte sabe de quem é a frase antes de ela vir.
- **Os números já arredondados e por extenso no texto:** "about a third of an inch", "more than six feet of rain", "nearly twice", "about six times", "half a million", "ten and a half million".
- **A resposta de p7 em série, com espinha:** "First, the valleys: … Then the port: … Then the people: …". Cada membro tem verbo e data, e a anáfora é o desenho da resposta.
- **A coda** fecha o arco no título, sem número nem nome difícil: "Peru lives on the dry side of the Andes.".

## NÃO TOCAR

- "A line runs along the Andes and divides Peru.": a 1ª frase, com "Peru" e "Andes".
- "But that is where most Peruvians live.": o "But" do gancho, na palavra 44.
- "In 2012, by the national water plan's figures, more than three in five did.": a forma da Sala ("more than three in five", com o ano e a fonte).
- "So why do most Peruvians live on the dry side of that line? You're at Alpha Point, and this is where the story of Peru's water divide begins.": a forma que o portão confere.
- "That line is the continental divide."
- "The mountains help."
- "And yet people built a city on that coast about 5,000 years ago."
- "That put Peru's capital on the dry side of the line. It did not put most of its people there.": a virada da parte 3. A chamada de inscrição não entra sobre ela.
- "Then, census by census, the balance tipped."
- "Peru's statistics institute put it this way: the population had gone from "predominantly Andean" to "mostly coastal."".
- "A city that size needs water all year, and its river runs low for seven months of it."
- "It was built between 1958 and 1962, and the system has been in service since 1963.": as datas da Sala.
- "Peru's weather service says it was built first to power a hydroelectric plant": a forma da Sala e da R09 (só o "that" de A3(c) é proposta).
- "In 2026, it still had no construction date.": o alerta do portão, julgado aqui; fica.
- "After a tanker truck slid down the slope and took three houses with it, drivers stopped going up the steepest streets."
- "Not because that side has the water." e a série "First, the valleys: … Then the port: … Then the people: …".
- "Peru lives on the dry side of the Andes. From May to November, part of its capital's water comes from the other one.": a coda.

PADRÕES:
- **A relação que a voz não marca.** A relativa sem "that" depois de nome próprio ("the water Lima stores", "the river Lima drinks from"), o possessivo que soa como contração ("Lima's is"), a lista que soa como aposto (a Humboldt) e o advérbio que se prende à última data ("Later" depois de 1995). Na página, a sintaxe resolve; dita, a voz não diz a quem a palavra volta (A1, A2, A3, A7).
- **A frase com caudas e apostos empilhados, que só funciona lida.** Os seis números da frase de Lima e Callao, as duas caudas das barriadas, o verbo perdido dos puquios e o "Nome, idade," das moradoras (A6, A8, A9, A10).
