# Vídeo 7 (`rio-columbia`): o cético da pauta v1 · 09/11/2026

Este arquivo julga `pautas/2026-11-09-video-7-rio-columbia.md` (a pauta v1). Ele não reescreve a pauta: diz o que cai e o que muda.

**O que li** (09/11/2026, ~12h40 a ~13h20 de Brasília, um pedido por vez):
- **no disco:**
  - a pauta v1 inteira; o resumo da base, `fatos-a.md` e `fatos-b.md`;
  - `concorrencia.md`, inclusive o §6;
  - `p_contas.py`, que rodei de novo. As contas da pauta conferem (ver "O que passou");
  - o cético do Lesoto e o teste dos leitores dele;
  - `marca/voz.md`, `marca/embalagem.md` e as memórias `feedback-titulo-unico`, `feedback-roteiro-engessado` e `ritmo-duracao`;
- **nas cópias locais** (`midia/rio-columbia/fontes/`, só lidas, com `python -I`):
  - o CRS de 12/2024 (`b/crs-r43287-everycrs.html`): as notas 12, 14, 26 e 39 a 44, e o trecho de 1951;
  - o deck da BC Hydro de 23/06/2026 (`sala/bchydro-ops-update-2026-06-23.pdf`): as pp. 7, 8, 20, 21 e 25;
  - a revisão da BC de 2012 (`a/bc-review-impacts-benefits.pdf`, pp. 7, 8, 15, 16 e 22);
  - o fact sheet da US Entity (`a/us-entity-crt-review-fact-sheet.pdf`);
- **na web:**
  - **1 download**, pelo `baixar.py`: os picos anuais do USGS em The Dalles
    (`https://nwis.waterdata.usgs.gov/nwis/peak?site_no=14105700&agency_cd=USGS&format=rdb`). Ficou em
    `midia/rio-columbia/fontes/c/usgs-pico-14105700.rdb`, fora do git, com sha256 `969fdcd8…`;
  - **1 busca**: o estudo da US Entity de junho de 2012. Ele só apareceu numa cópia do web archive da UNT, de um site federal. Pela regra
    do `CLAUDE.md`, essa cópia não vale para checagem, e **não a abri**;
  - **1 leitura pelo WebFetch**: a APPA de 25/09/2026, sobre o acordo das PUDs. É resumo de modelo (†).

Nada recusou a leitura, e nada se contornou. Não usei o vidIQ, o navegador, banco pago nem o git.

**O script novo** está em `pautas/rio-columbia/_trabalho/scripts/cetico_picos.py` e roda com
`python -I -X utf8 -B cetico_picos.py <usgs-pico-14105700.rdb>`. Ele conta, por período, os anos em que o pico anual em The Dalles passou dos
gatilhos do "called-upon".

---

## Os achados, do mais grave ao menos

### [K1] Contra o The Hidden Provinces, a diferença cabe em uns 5 dos 14,6 minutos (grave; muda o §3, o §7, o §9 e o §12)

**O problema.** A pauta diz que "a história em ordem […] já está contada" e por isso o ato 4 é curto. Mas o rascunho gasta uns 60 % do tempo no
que a descrição do The Hidden Provinces (HP) já lista:
- **o gancho:** o mapa de 15 % e 38 %. O HP abre a descrição com ele: "Only about 15 per cent of its basin is Canadian, but that 15 per cent
  supplies roughly a third of the river's annual flow and far more of the spring peak";
- **o ato 1:** a nascente e a curva. O Cascade PBS (157 mil) também fez a nascente;
- **o ato 2:** o Vanport, os 15,5 MAF, os US$ 64,4 mi, os US$ 254 mi, Libby e as 42 milhas, e McNaughton (o capítulo "McNaughton's opposition"
  quase certamente é o plano de desvio que a pauta quer mostrar como "número que se transforma");
- **o ato 4:** Renata, os ~2.300, os Sinixt, 1956, o Desautel de 2021 e o salmão;
- **o próprio conceito do título:** "Canadian reservoirs are drawn down through the winter to make space, they absorb the spring surge before
  Portland ever sees it";
- **o status:** sem data de fim, sem cancelamento, o "called upon" desde 16/09/2024, e o AIP pausado em março de 2025.

O HP também está no estilo do canal, com fontes na tela e na voz. Quem viu o HP, e é a esse público que o algoritmo vai mostrar o vídeo, só
encontra novidade no ato 3 e no ato 5: umas 960 das 2.610 palavras.

**O que a pauta tem de novo de verdade:**
- o pagamento anual desde 2025;
- o prazo de 2027;
- a medida de Birchbank;
- o espaço em dias de rio.

Isso é real, mas é pouco para 14 minutos. **A estimativa de 2012 não entra nesta conta** (K2).

**O que faz a diferença ficar grande** (tudo firme na base ou medido hoje; nada disso aparece na descrição do HP):
1. **O porquê de verdade do título: o gatilho que os dois países nunca acertaram.** É o melhor achado novo.
   - O tratado não diz como o "called-upon" funciona depois de 2024. Nota 14 do CRS: "The Treaty does not describe the methodologies and
     procedures for how called-upon flood control would be implemented after 2024".
   - Nota 39: "the U.S. Entity has projected that a range of peak flows at the Dalles […] from 450,000 cubic feet per second (cfs) to 650,000
     cfs would activate available Canadian storage, the Canadian Entity has assumed that it would provide called-upon storage only once flows
     reach 600,000 cfs (which is expected to be rare)".
   - **A conta nova** (`cetico_picos.py`, picos anuais do USGS em The Dalles):

     | Período | Anos | Anos ≥ 450 mil cfs | Anos ≥ 600 mil cfs | Maior pico |
     |---|---:|---:|---:|---|
     | 1879–1967 (antes das barragens do tratado) | 89 | 71 | **40** | 1.240.000 (1894); 1.010.000 (1948) |
     | 1974–2025 (depois da última) | 52 | 9 | **0** | 588.000 (1974); 587.000 (2012) |

   - Os picos depois de 1974 já vêm regulados (o código 6 do USGS), com os 8,45 MAF de cheia garantida em vigor e o armazenamento dos dois
     lados da fronteira.
   - Então a conta **não** mede quantas vezes o "on-call" teria sido preciso. Ela mede só que, com o espaço reservado todo ano, o rio nunca
     mais chegou ao número que o Canadá usava como gatilho.
   - É a resposta que o título pede: **os EUA pagam pela certeza**. O "on-call" não tem gatilho acordado, e, pelo número do Canadá, só
     valeria para cheias que o rio de hoje não vê há 50 anos.
2. **A última cheia coberta.**
   - O interino cobre "up to three consecutive operating years" (L3). O ano de operação vai de agosto a julho. Pelo CRS, são os anos "from
     2024 through 2027", e o deck da BC Hydro de 23/06/2026 diz "for 3 years".
   - Quando o vídeo sair (dez/2026 ou jan/2027), estará correndo o terceiro e último ano. **A primavera de 2027 é a última cheia que o
     acordo cobre.** É o relógio concreto que o "July 31, 2027" sozinho não dá.
   - Que os EUA "elegeram" os anos 2 e 3 é leitura a fazer (abaixo).
3. **Quem paga, nos EUA, a parte do Canadá.**
   - As três PUDs do Médio Columbia pararam de pagar a parte delas em setembro de 2024 e fecharam acordo com o governo dos EUA em 25/09/2026:
     US$ 29,9 mi de uma vez e 25 % daqui em diante. A APPA, relida hoje (†): "stopped contributing to the CE in September 2024", "a one-time
     payment totaling $29.9 million".
   - Isso aconteceu **depois** do HP (11/09/2026). A pauta o pôs no "fundo". Ele merece uma frase no ato 5, com a data.
4. **O espaço vazio visto da margem, hoje.**
   - É a CBC de 2023 (L9): o Arrow baixo na seca, e os moradores contra a água "being sent to the US".
   - É o outro lado do título no presente, não em 1968. Pede a leitura da Sala.
5. **Arrow quase não gera energia para o Canadá.** O deck da BC Hydro (p. 20): "BC Hydro does not generate power from Arrow Reservoir", e a
   usina pequena da CPC dá "<1% of BC Hydro's total generation". O HP já diz "They are tanks", então isso entra como uma frase, não como
   cena.

**O que muda:**
- **o ato 2** vai de ~520 para ~380 palavras;
  - sai a cena "o número do desvio que vira o do tratado" (K7). O HP conta McNaughton, e o 15,5 do desvio só está no CRS;
- **o ato 4** vai de ~380 para ~280 palavras;
  - o tempo que sobra vai à margem de hoje (item 4, depois da leitura);
- **o ato 3** ganha o gatilho e os picos (item 1, uns 150 palavras). É o "por que pagar" que o HP não tem;
- **o ato 5** ganha as PUDs e a "última cheia coberta";
- **ao Lucas**, no "Três coisas", item 2: "o que o canal traz" passa a ser o gatilho medido, a última cheia, o ano do rio e o espaço em dias.
  A estimativa de 2012 sai dessa lista.

### [K2] A "virada" do ato 5 é a conta de um lado só, e a pauta deixa de fora a do outro lado, que está na mesma página (grave; muda o "Três coisas", item 1, o §4.5, o §7, ato 5, e a conc. §4)

**O problema.** A pauta trata a estimativa de 2012 como a prova de que "o 'Canada has power over the U.S.' não se sustenta" e como "a virada do
ato 5". No CRS que ela mesma leu, a conta é outra coisa:
- **é receita de energia, e vem do fim do Entitlement.** A nota 26 está na seção dos "power interests". O texto, adiante, diz: "the United
  States would gain significant revenue while Canadian net revenues would be expected to decrease, **largely due to the termination of the
  Canadian Entitlement**". Ela não põe preço no risco de cheia;
- **a BC contestou.** O CRS: "It disputed several assumptions in the U.S. Entity's review process";
- **o Canadá tem a conta dele, no mesmo parágrafo, e a pauta não a usa:**
  - "The Canadian Entity estimates that, for power production alone, called-upon operations would result in **$40 million to $150 million per
    year in lost benefits to the United States**";
  - "Canada has argued that the reliability of operations provided for under the Treaty allows for generation that is worth more to the
    United States than the Canadian Entitlement";
  - "if the Treaty were terminated, the lack of reliable expectations for Canadian flow would constrain U.S. hydropower benefits";
  - e, contra isso, a US Entity estimou "between $4 million and $34 million per request" pelo "called-upon";
- **ela é de antes do corte.** Se a parte do Canadá caiu 37 % em agosto de 2024, o ganho dos EUA com o fim do tratado, calculado em 2012,
  também encolheu. O valor de hoje não foi lido.

Pôr só o número dos EUA como "virada" faz a voz arbitrar (`voz.md` §1: "A voz não arbitra quem tem razão"). Além disso, ele lê como "os
EUA pagam demais", que é a tese que a pauta proíbe no §5 ("the US overpays") e que a plateia americana de 2025–26 ouve como argumento de
campanha.

**O que muda:**
- **o lugar:** no meio do ato 5, como "cada lado pôs preço no outro", e não como clímax;
- **a frase segura (EN):**
  > In 2012, the US agencies that run the treaty estimated that ending it would raise American power revenues by 180 to 280 million dollars
  > a year, mostly because the US would stop delivering Canada's share. British Columbia disputed those assumptions. Its own estimate says
  > that falling back on on-call flood control alone would cost the US 40 to 150 million dollars a year in lost power.

  (O CRS: "for power production alone, called-upon operations would result in $40 million to $150 million per year in lost benefits to the
  United States". A data da conta canadense se lê na fonte, item 2 de "O que falta ler".)
- **antes de ir à voz:** ler a página 11 do "U.S. Benefits Study" da BC (a nota 40 do CRS) e as pp. 6–7 do "Recent Study Results" da US
  Entity (a nota 26), para confirmar a data da conta canadense e o que a americana inclui (abaixo);
- **no "Três coisas", item 1:** sai "o fim do tratado aumentaria a receita líquida dos EUA" como prova. A prova de que o Canadá não fecha o
  rio é a medida (K4) e o tratado (os 10 anos de aviso, o "called-upon" que sobrevive ao fim). A estimativa vai como "cada lado tem a sua
  conta";
- **na conc. §4, item 2:** "Pela conta da própria US Entity, o fim do tratado daria dinheiro aos EUA" deixa de ser "a vaga". É uma conta
  contestada;
- **o valor do Entitlement:** troca os "~US$ 120 mi" (página da BC sem data, lida só em resumo, †) pelo deck da BC Hydro de 23/06/2026, que é
  a própria Entidade Canadense: "the 'Downstream Benefit' […] is typically worth between $110 - $400 million per year". A faixa da voz fica
  "between about 110 and 400 million dollars a year, by BC Hydro's count", ou vai só à tela, com os dois donos.

### [K3] O gancho responde à pergunta do título e depois a faz de novo, e tem três frases que não se sustentam como estão (grave; muda o §8)

**O problema.** É o K5 do Lesoto, repetido:
- a frase 1 já dá a causa: "before the spring floods";
- a frase 4 anuncia a resposta ("The reason is on the map"), e as frases 5 a 9 a dão: a água e o espaço estão ao norte da fronteira;
- aos 55,6 s, "So why does the United States pay Canada to keep part of a lake empty?" já está respondida, e vira retórica. O espectador sai
  do gancho sabendo o "porquê" do título.

**As três frases:**
- **"We checked those numbers […] and they hold."** "Those numbers" são o 15 %, o 38 % e o "half". As estações só conferem o segundo, e só
  em parte:
  - Birchbank inclui a água que o Kootenai recolhe em Montana e Idaho (o leitor A diz isso, `fatos-a.md`, linha 59);
  - o deck da BC Hydro de 2026 diz "On average, it produces **30-35%** of inflow for the entire basin".
  - O que se mediu é que **o que passa em Birchbank é ~39 % do que passa em The Dalles**. A frase segura diz isso, e não "they hold";
- **"the talks to replace it"**: as conversas pausadas são as da modernização do tratado, não as de um substituto do acordo interino. Se o
  tratado novo entrar em vigor, o pagamento **continua** (até 2044, no AIP);
- **"It ends by July 31, 2027, at the latest"**: a única saída antes disso é o tratado novo, que mantém o pagamento. A frase sugere que ele
  pode acabar antes, e isso não é o caso.

E "under a deal that began in 2025": o acordo é de 22/11/2024, e o espaço começou na primavera de 2025.

**O que muda:**
- **o gancho para no fato e no relógio**: o lago esvaziado, o pagamento, o mapa como "But" (sem "The reason is…" e sem a frase 9), e o
  prazo;
- **a pergunta final** tem de ser uma que o gancho não responde. A que o K1 abre (EN):
  > So why would the United States pay for empty space, when the treaty already obliges Canada to help in a flood? And what happens after
  > the spring of 2027, the last flood this deal can cover?

  Fica um fio só: o pagamento e o porquê dele. O "what happens after" é o relógio do mesmo fio. A obrigação é a do "called-upon" (CRS:
  "Canada would be responsible for making these changes", pago pelos EUA). O "can cover" fica até a Sala ler se os anos 2 e 3 foram
  escolhidos (item 4 de "O que falta ler");
- **as frases seguras (EN):**
  > A gauge on the Columbia in British Columbia, above the border, carries about 39 percent of what passes The Dalles, averaged over 88 years.

  > The deal runs out after the spring of 2027, unless the two countries agree on something new, and talks on a new treaty have been paused
  > since March 2025.

  > …under a temporary deal that took effect for the spring floods of 2025.
- **a primeira frase** (`voz.md` §1) pode ganhar o nome e o número que lhe faltam. Hoje o nome só vem na frase 2, e o número na 3. Por
  exemplo: "Every spring, before the floods, part of this lake in British Columbia, the Arrow Lakes Reservoir, is emptied on purpose." O
  roteiro decide; o número pode ficar na 2.

### [K4] A medida do canal se sustenta, mas a pauta escolhe o denominador que diminui o Canadá e põe nas barragens do tratado o que é de todas (médio-grave; muda o §4.3, o §7, ato 3, o §8, gancho B, e o §10.1)

**A conta, refeita** (`p_contas.py` sobre `wsc-mensal-08NE049.json`), confere:

| Período | Mês mais cheio | Mês mais baixo | Razão | Mai–jul | Dez–fev | Média do ano |
|---|---|---|---:|---:|---:|---:|
| 1938–1967 | jun 6.134 | fev 590 | 10,4× | 58,8 % | 7,8 % | 2.026 m³/s |
| 1974–2025 | jul 2.753 | abr 1.320 | 2,1× | 31,6 % | 25,8 % | 2.001 m³/s |

E 15,5 MAF ÷ 0,3731 MAF/dia = 41,5 dias em The Dalles.

**O que ela prova:**
- a forma do ano em Birchbank mudou: uns 27 pontos do volume do ano saíram de maio a julho e foram para os outros meses;
- e a média quase não mudou (-1,2 %, dentro da variação do clima entre os períodos);
- **"A água não foi tirada do rio. Foi mudada de estação." se sustenta**, para Birchbank, com o dono certo.

**O que ela não prova, e onde a pauta escorrega:**
1. **Não são "as barragens do tratado".** Birchbank fica abaixo de Keenleyside **e** da foz do Kootenay (Castlegar). O "depois" soma:
   - Mica, Arrow e Duncan;
   - **Libby, que é americana**, e o lago Kootenay;
   - os 5 MAF de Mica fora do tratado, e o Revelstoke (1984).
   A pauta já pede "before the treaty dams / after the last one" na legenda. Falta a voz: o gancho B diz "Before the dams", e a regulação
   do lago Kootenay é de antes de 1938 (Corra Linn, de memória, *a conferir*). Na voz: "Before the big storage dams upstream, on both sides
   of the border".
2. **A estação mudou mais pela energia do que pela cheia.** O deck da BC Hydro (p. 25): Kinbasket e Koocanusa são "drafted for winter and
   early spring **energy and** to ensure space for flood risk management". L6: "high winter electricity demands". O inverno cheio de
   Birchbank é sobretudo água solta para gerar energia nos dois países, o que é o Entitlement, não o espaço pago em Arrow. A voz não pode
   ligar o achatamento ao pagamento de 2025. O ato 3 diz isso numa oração: "mostly to make power in winter, and to leave room for the
   flood".
3. **O denominador.**
   - "Roughly six weeks of the whole river" é verdade, mas o Canadá só segura a água que passa pelo Canadá.
   - Contra o rio canadense, os mesmos 15,5 MAF são **110 dias da vazão média de Birchbank, 30 % do ano** (a mesma conta da pauta, no §10.1).
     Com Mica fora do tratado, são 145 dias.
   - Usar só The Dalles é escolher o número que diminui o Canadá, e o cético de um canal "justo com os dois lados" não deixa passar.
   - E a frase do gancho B, "can hold back roughly six weeks of the whole river", diz o que é fisicamente falso: as barragens não seguram
     o rio inteiro.
4. **"Count every other reservoir up there, and it's closer to two months"** está errada como dita:
   - os 20,5 MAF da pauta somam **ou** Mica fora do tratado **ou** Libby, não os dois;
   - os dois juntos dão 25,5 MAF, uns 68 dias;
   - e "up there" não diz se Libby (EUA) entra.

**O que muda:**
- **a frase segura do ato 3 (EN):**
  > Together, the three treaty lakes can store as much water as the whole river carries past The Dalles in about six weeks. Measured
  > against the Canadian part of the river alone, that's closer to three and a half months. So Canada can't turn the Columbia off. What it can
  > do, under a plan agreed with the United States, is decide when a big share of its water comes down.
- **o gancho B:** "Upstream, three Canadian dams built under a 1964 treaty can store about six weeks of the whole river's flow"; e "Before
  the big storage dams upstream" no lugar de "Before the dams";
- **a linha "closer to two months"** vira "Add the extra storage Canada built at Mica, outside the treaty, and it's closer to two months", ou
  sai;
- **"So the power here isn't a tap. It's a calendar."** passa, com a frase segura logo antes. O trocadilho de "power" (energia e poder) é do
  fato, não da voz.

### [K5] O título 1 fica, mas o "Pays" vence antes de dois anos, e o vídeo tem de responder a "o lago já baixa de qualquer jeito" (médio; muda o §2, o "Lado a lado" e o §8)

**O que o título 1 promete e se o vídeo paga.** *Why the U.S. Pays Canada to Keep Part of a Lake Empty* promete o porquê de pagar por espaço
vazio. Com o K1 (o gatilho e os picos), o vídeo paga com um porquê que não é óbvio: "pela cheia" é o que um leitor atento adivinha; "pela
certeza, porque o 'on-call' não tem gatilho acordado" não é.
- **Sem o K1**, o porquê óbvio mata a curiosidade de quem entende de barragem (o Dale do Lesoto: "o enigma se desfaz sozinho").

**É literal?**
- **"Pays":** sim. "The United States will compensate Canada at a rate of $37.6 million per year" (L1). O deck da BC Hydro de 23/06/2026:
  "required to pay Canada annual payments of USD $37.6M (indexed to inflation) for flood risk management for 3 years".
- **"Keep … Empty":** sim, como figura de quem lê a frio. L4: "evacuated according to an agreed Storage Reservation Diagram".
- **"Part of a Lake":** 3,6 de 7,1 MAF do armazenamento do tratado em Arrow (51 %). Só antes da cheia, e o vídeo diz isso na frase 1.
- **O "empty" exagera em um ponto que a pauta não trata:**
  - Arrow baixa todo inverno também pela energia e pelas descargas do tratado (o deck da BC Hydro, p. 20: "Seasonal levels at Arrow are
    determine[d] by […] Columbia River Treaty Discharge");
  - o que o pagamento compra é um **mínimo de espaço garantido numa data**;
  - quem mora no lago dirá que ele baixa "de qualquer jeito". O ato 5 responde isso numa frase: "The lake drops every winter anyway, for
    power. What the US pays for is a guarantee: a set amount of room, ready by a set date".
  - Se os 3,6 MAF são fixos ou variam com a previsão de neve (o diagrama), não se leu (abaixo).

**Lê como desperdício ou golpe?**
- Menos que o "billed" do Lesoto: os dois países estão nomeados, e o Canadá **faz** algo.
- Mas "pays… to keep… empty" pode ler "pagar por nada", e na plateia americana de 2025–26, "o Canadá cobra dos EUA".
- O teste pergunta isso (a pauta já previu), e mais uma coisa: **"o que você acha que os EUA ganham com o dinheiro?"** Se dois dos quatro
  disserem "nada" ou "é golpe", o título 1 cai.

**O "Pays" no presente vence antes de dois anos** (`voz.md` §2: "O vídeo precisa valer daqui a dois anos").
- O interino acaba depois da cheia de 2027, salvo tratado novo ou lei nova (a WRDA 2026 não foi lida).
- O título pode ficar falso uns 8 meses depois de publicado.
- **A troca concreta:** a pauta registra que, se o interino vencer sem substituto, o título passa ao passado no YouTube (*Why the U.S. Paid
  Canada…*), e a miniatura também. A voz já está datada.

**A colisão.** Nenhuma achada pela Sala (conc. §6). O vizinho mais perto é o enxame com "pay" e água, "No more FREE WATER—Canada just made
Trump PAY for every DROPLET!" (America Prime, 4,8 mil, ~2 semanas). Ele não tem a estrutura do 1, e as views são poucas, mas o teste deve
perguntar se o 1 soa "da mesma família".

**Os outros títulos:**
- **o 2** (*How Long Could Canada Hold Back the Columbia River?*) **cai**:
  - fala a língua do medo;
  - a resposta honesta tem dois denominadores (K4), e um deles, uns três meses e meio do rio canadense, alimenta o enxame;
- **o 3** (*Canada Holds the Water Back. The U.S. Pays for It.*) **cai**:
  - "Holds" é o verbo do GeoZyra;
  - "the Water" lê "Canada's water";
  - e "every spring… pays for it" mistura a energia e a cheia (o item 2 do K4);
- **o 4** (o Koocanusa) fica de reserva, como a pauta diz.

**O que muda:**
- **o título 1 é o principal**;
- **para o teste**, junto dele, a variante *Why the U.S. Pays Canada for Empty Space in a Lake* (49). "Space" é a palavra do Departamento de
  Estado ("flood storage space"), e ela tira o "Keep Part of", que trava em voz alta. O 4 entra como controle, se a Sala quiser três;
- não proponho título com número, com "flood" (entrega a causa, `embalagem.md` §2) nem com "treaty".

### [K6] São 63 números na fala, e os cortes cabem sem perder nada (médio; muda o §7)

Um corte que a pauta não lista: **o ato 1 repete o 15, o 38, o "half" e o 88 do gancho.** Na voz, eles se dizem uma vez. No ato 1, vão só à
tela, e a cena é a do medidor.

| Ato | Hoje | Sai da voz (vai à tela ou some) | Fica |
|---|---:|---|---:|
| gancho | 8 | o 88 (tela: "88 YEARS OF GAUGES") | 7 |
| 1 | 7 | o 15, o 38, o "half" e o 88 repetidos | 4 |
| 2 | 12 | 1951 ("A few years later"), 1961, "by 1973", o 15,5 do desvio (K7) | 8 |
| 3 | 10 | as datas de Trump (K8), "two months", os 4 MAF e os "four years ahead" do AIP (condicional sobre um acordo que não está em vigor); entram o 600 mil e o 1974 (K1) | 8 |
| 4 | 9 | os 110.000 ha, 1902 e 21, 1930 e "one" (tela: o §6 da Corte), "26 years" | 5 |
| 5 | 14 | 1.141 MW, "about half by 2034" (a curva vai à tela), a faixa de 120 a 335 (tela, com os donos), maio de 2025, o 31/08/2027 (vira "a month later") | 9 |
| fecho | 3 | "1,401 feet" e 2017 | 2 |
| **total** | **63** | | **43** |

Os números novos do K1 e do K2 (o 600 mil, o 40–150) já estão nessa conta.

### [K7] O plano de desvio de "15,5 MAF" é de uma fonte só, e a cena que o transforma no número do tratado se apoia nessa coincidência (médio-leve; muda o §4.2, o §6, ato 2, e o §7, ato 2)

- O "proposed to divert as much as 15.5 MAF" só está no CRS, sem nota, e é idêntico ao número do Art. II.1. Pode ser verdade (o plano
  McNaughton) ou uma colagem do CRS.
- A pauta põe uma cena ("o número que se transforma no do tratado") em cima disso. E o capítulo "McNaughton's opposition" do HP provavelmente
  conta o plano.

**O que muda:**
- a voz diz "a plan to divert much of the upper Columbia for Canada's own use", com o CRS como dono e **sem o número**;
- a cena da transformação sai, até a fonte primária (o relatório da IJC de 1959, ou a de McNaughton) dar o volume;
- **o Vanport:** o HP diz "Fifteen people were killed", e as agências dos EUA dizem "more than 50" para a cheia inteira. A pauta já segura
  os mortos até a leitura; fica.

### [K8] A fala da "faucet" não é sobre o Canadá fechar o rio, e colada à pergunta do ato 3 ela muda de sentido (médio-leve; muda o §4.3, o §7, ato 3, e a inscrição falada)

**O problema:**
- Trump falou, em setembro de 2024, de **mandar mais água** do Canadá para Los Angeles: "And they have essentially a very large faucet" (†).
- A pauta abre o ato 3 com ela e pergunta: "so could Canada turn this river off?". Lado a lado, o espectador entende que Trump disse que o
  Canadá pode fechar o rio. Ele não disse.
- A pergunta "o Canadá pode usar o tratado como arma?" é da CBC ("Could ending a water treaty help Canada fight U.S. tariffs?", 302 mil; e
  "Could U.S. tariffs end this water treaty?", 1,92 mi), e o Dix respondeu a ela.
- **E a inscrição falada** (~6:15) cai logo antes da abertura do ato 3. Com a citação ali, fica "colada a uma fala citada" (`voz.md` §3).

**O que muda:**
- **sai Trump do ato 3.** A fala é de candidato, de dois anos antes da publicação, sobre outro assunto (a água da Califórnia). Sem a "faucet",
  a regra da linha da Califórnia (§5) nem precisa mais existir;
- **o ato 3 abre com a pergunta da CBC**, com o dono e o ano, e com a resposta do Dix (relida na página antes, †):
  > In 2025, as the tariff fight grew, CBC News asked whether Canada could use this treaty against the United States. British Columbia's
  > energy minister said it would not be a bargaining chip.
- com isso, a inscrição falada no fim do ato 2 fica numa pausa limpa, e o ato 3 começa pela pergunta e pela medida;
- **o fecho:** sai "at least on paper". Ele insinua que o acordo não vale (`voz.md` §1). O resto da frase passa.

### [K9] A miniatura (leve; muda o §8)

- **A 1 ("$37.6M A YEAR")** fica para a banca, com dois cuidados:
  - é o valor de partida, corrigido pela inflação: na tela, o crédito diz "starting value, indexed to inflation";
  - ela envelhece com o título (K5): se o interino vencer, troca-se junto.
  - O risco de ler escândalo, a pauta já diz; o teste o mede com o título embaixo.
- **A 3 (a escola calma, "38% OF THE WATER / Only 15% of the map")** é a frase de abertura do HP e a do Cascade PBS. Para um canal que quer
  se diferenciar deles, é a mais fraca das três.
- **Para a banca, uma alternativa da receita com lupa:**
  - a lupa sobre Arrow, com o corte do lago no traço de engenheiro e a faixa de cima tracejada;
  - o rótulo da faixa pede um dado concreto, não intenção (a lição do "ON PURPOSE" de Los Angeles). A altura em pés do espaço pago não foi
    lida: sem ela, a faixa vai sem número, e o texto continua o da 1.

### [K10] Os pequenos, cada um no seu lugar

- **"It was never finalized"** (o AIP, §4.5): "never" envelhece. "It has not been finalized" e, na tela, a data.
- **"the treaty switched to an on-call system"** (a frase segura do §4.5): quem mudou foi a parte da cheia. "the flood part of the treaty
  switched".
- **"To keep a fixed amount of room ready every year"**: são "up to three" anos, e "fixed" depende do diagrama (K5). "To keep room ready
  before each spring flood, for up to three years".
- **"cut by about 37 percent"**: é a conta do Departamento de Estado. A capacidade caiu 42 %, e a energia, 33 % (`p_contas.py`). Na voz, "by
  about a third, by the State Department's count", ou os 37 % com o dono.
- **O "30 %"**: deixou de ser "sem autoria". A BC Hydro (23/06/2026) diz "30-35% of inflow for the entire basin". Não é contradição: é a
  bacia inteira até a foz, não The Dalles. Na voz, os 38 % levam sempre "of the water that passes The Dalles".
- **"The latest report we found, from August 2026"**: o deck da BC Hydro de 23/06/2026 (a própria Entidade Canadense) diz "Treaty
  negotiations between the two countries are currently paused". A Canadian Geographic de agosto continua a mais nova. A BC Hydro é a mais
  forte, porque é primária.
- **"Libby… for no Canadian benefit at all"** (o HP): o Protocolo diz que o Kootenay regulado rende "more than 200,000 kilowatt years per
  annum of energy benefit downstream in Canada" (`fatos-a.md`, linha 74). É uma correção pequena e firme que o canal pode fazer sem citar o
  HP.

---

## O que passou

- **As contas da pauta conferem**, refeitas hoje com `p_contas.py`:
  - 15,5 MAF = 41,5 dias em The Dalles; 3,6 MAF = 9,6 dias;
  - 3,6 é 42,6 % de 8,45 e 40,2 % de 8,95; o Arrow fica com 80,9 % dos 64,4;
  - a forma do ano em Birchbank (10,4× e 2,1×; 58,8 % e 31,6 %; -1,2 % na média);
  - o gancho A com 200 palavras e 67,0 s, e a pergunta aos 55,6 s.
- **O §5 é rigoroso**: as quatro afirmações do enxame, o "half empty", o 64,4 ao lado do 37,6 sem inflação, o "through 2044", "the US paid
  in 2026", a ordem das datas e as palavras proibidas. Sai dele só a regra da linha da Califórnia "nunca depois da faucet", que perde o objeto
  com o K8.
- **As duas correções da pauta à base estão certas:** a estimativa é de junho de 2012 (nota 12 do CRS), e o pagamento é interino, escolhido
  "upon election".
- **O título 1 é justo com os dois países** e não usa nenhuma palavra do enxame. O "Pays" é literal em 2026 (BC Hydro, 23/06/2026).
- **O tom do ato 4:** sem casa queimando, sem trilha, com a Corte e o governo da BC como donos, e 1956 sem ligação de causa com as barragens.
- **A política está datada**, sem previsão, sem Carney nem Eby, e sem a ligação Trump–Trudeau de segunda mão.
- **A duração:** há assunto para 14 a 15 minutos sem encher, com o tempo tirado dos atos 2 e 4 e posto no gatilho, nas PUDs, na margem de
  hoje e na última cheia coberta (K1).
- **A inscrição falada** no fim do ato 2 (~43 %) está na janela e numa pausa entre atos, desde que o ato 3 não abra com citação (K8).
- **O gancho tem um fio só** e paga o título nas frases 1 e 3. O defeito é a pergunta final (K3), não o fio.

## O que falta ler antes do roteiro, em ordem de risco

1. **O HP pela transcrição** (a Sala): se ele conta o pagamento anual de 2025, o prazo de 2027 ou o gatilho do "called-upon". Se contar os
   três, a nota cai a 5,0.
2. **O gatilho na fonte primária:**
   - o "U.S. Benefits Study" da BC (a nota 40 do CRS, p. 11: os US$ 40–150 mi) e a fonte da nota 39 (os 450–650 mil e os 600 mil cfs), com
     a data de cada um;
   - e se o interino de 2024 ou o AIP definiu um gatilho depois (o AIP fala num processo "a desenvolver", `fatos-b.md`).
   Isso decide o centro novo do ato 3.
3. **O "Recent Study Results" da US Entity, de junho de 2012, pp. 6–7**: o que os US$ 180–280 mi incluem (só energia? com o risco de cheia?).
   - Só achei a cópia do web archive da UNT, de site federal, que a regra do `CLAUDE.md` não deixa usar;
   - o original estaria na BPA (fora do ar para o leitor B), e fica para a Sala.
4. **Se os EUA "elegeram" e pagaram os anos de operação 2025–26 e 2026–27**, e **se a WRDA 2026 estendeu o prazo**. Isso decide o "Pays",
   a "última cheia coberta" e o 31/08/2027.
5. **A CBC de 2023 sobre o Arrow na seca** (a margem de hoje, K1, item 4).
6. **O diagrama de Arrow (o "Storage Reservation Diagram")**: se os 3,6 MAF são fixos ou variam com a previsão, e a que nível do lago
   correspondem. Isso decide "a set amount of room" (K5) e o número da faixa na miniatura (K9).
7. **As PUDs**: a APPA (25/09/2026) foi relida hoje só em resumo (†). Falta a The Star (30/09/2026) ou o texto do acordo.
8. **O desvio de 1951 numa fonte primária** (K7), e os mortos de 1948 (a pauta, §11, item 7).
9. **A regulação do lago Kootenay antes de 1938** (Corra Linn), para a legenda de Birchbank (K4).
10. O resto do §11 da pauta (itens 2, 5 a 9, 11 a 17), sem mudança. A fala de Trump (item 5) só é relida se o roteiro a quiser fora do ato 3.

## Para a Sala ler no navegador do app

Nada aqui foi contornado: nenhuma destas páginas foi tentada por mim.
1. **The Hidden Provinces**, a transcrição: "Payment for control", "Regulating the river", "Treaty status today" e "The termination
   question".
2. **O "Recent Study Results" da US Entity (junho de 2012)** no site da BPA ou do Corps, no original, não no web archive.
3. **A busca do YouTube**, por data, pela variante *Why the U.S. Pays Canada for Empty Space in a Lake*.
4. **A CBC de 2023** sobre o Arrow na seca.
5. **O congress.gov ou o govinfo**: a WRDA 2024, seção 1152, e a WRDA 2026.
6. O resto da lista da pauta (itens 2, 5, 7 a 9), sem mudança.

---

## A nota: 6,0 · DE PÉ COM AJUSTE

O ângulo fica de pé, e pode ficar mais forte do que a pauta sabia:
- o título 1 é literal, justo com os dois países e sem as palavras do enxame;
- a medida de Birchbank confere;
- o "porquê" que o título pede tem uma resposta nova e firme: o gatilho do "called-upon", que os dois países nunca acertaram (US Entity:
  450–650 mil cfs; Canadá: 600 mil). Com o espaço reservado, o rio não chegou a 600 mil em The Dalles nenhuma vez desde 1974, contra 40 dos
  89 anos de antes.

O que está errado se conserta sem pesquisa nova:
- **o rascunho gasta ~60 % do tempo no que o HP já contou** (K1);
- **a "virada" do ato 5 é a conta de um lado só**, com a do outro lado na mesma página (K2);
- **o gancho responde e repergunta**, e três frases dele não se sustentam como estão (K3);
- **a medida escolhe o denominador** que diminui o Canadá e põe nas barragens do tratado o que é de todas (K4).

Desço meio ponto da nota da pauta pelo K1 e pelo K2 juntos: o centro do vídeo muda de lugar, do 2012 para o gatilho.

- **Para subir a 7,0:**
  - o HP conferido pela transcrição, sem o pagamento de 2025 nem o gatilho;
  - o gatilho lido na fonte primária, com a data;
  - os anos 2 e 3 do interino confirmados;
  - o título 1 (ou a variante) lido pelos leitores como justo, e não como desperdício.
- **Para cair a 5,0 (RESSALVA):**
  - se o HP já contar o pagamento anual, o prazo de 2027 e o gatilho. Aí o ângulo fica só na medida;
  - ou se o gatilho não se confirmar fora do CRS, e o teste ler o título 1 como "pagar por nada".
