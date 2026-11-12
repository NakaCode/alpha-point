COBERTURA: 222 de 222

# Laudo · verificador de fatos · roteiro r2 · rio-columbia (vídeo 7)

Revisão julgada: `58991dc7d979` · data-base 12/11/2026 (o texto e as cópias lidos entre ~01h e ~02h de 12/11/2026, hora de Brasília; as
leituras na web do r1 são do mesmo dia)

As 222 linhas de `roteiros/rio-columbia/qc-roteiro/fatos-tabela.json` têm veredito, e as 222 são "confirmada" (9 delas linhas L, de
inferência, cada uma apoiada em linha confirmada). **Como a lista foi derivada:** o canal não tem extrator de afirmações para este vídeo.
A lista é a do r1 (`fatos-tabela-r1.json`, 191 linhas, feita pela leitura integral, à mão, do r1), casada frase a frase com o r2 por um
script (a frase do r1 só vale se está inteira num parágrafo do r2, a mesma regra do `portao-fatos`), mais a **leitura integral, à mão, do
r2**, para as frases novas e mexidas:
- **141 linhas levadas do r1**: a frase não mudou; o veredito, o trecho e a fonte são os do r1, com o número de parágrafo do r2 (só o 34 e
  o 35 trocaram de lugar);
- **42 linhas rejulgadas**: a frase mudou e foi julgada de novo, na cópia local da fonte (entre elas, as 7 que o r1 deu como `corrigir`,
  `atribuir` ou `nao_conferida`, e cujas trocas o r2 aplicou);
- **39 linhas novas**, para as frases novas e para o que as mexidas passaram a afirmar;
- **8 linhas do r1 saíram com as frases delas** (F061–F063, os "four lakes"; F138, o dono "by the State Department's count"; F140, a faixa
  da BC Hydro; F144, a faixa 180–280; F149–F150, "Without the treaty, as that congressional report puts it"). 191 − 8 = 141 + 42.

O texto falado tem 44 parágrafos e 189 frases contadas sem partir os decimais 37.6 (duas vezes), 64.4 e 3.6 (o gate conta 193). Cada
frase com número, data, nome, citação, atribuição, superlativo, causa ou mecanismo tem pelo menos uma linha: **149 das 189 frases têm
linha**. As outras 40 não afirmam nada que se possa conferir e estão listadas uma a uma no fim (NADA A CHECAR). O piso por parágrafo do
`portao-fatos` passou nos 44. **O texto foi CHECADO POR INTEIRO, e está CHECADO E LIMPO.**

NOTA: 9.0/10. Os oito itens do laudo do r1 foram aplicados com a letra da troca e conferem; as frases novas e as que o escritor mexeu
conferem todas, na cópia local da fonte ou na conta refeita (`fatos-medidas-r2.txt`). A nota anterior era 7,5 (r1): **subiu, sem
regressão**. Segura o 10: os voláteis que ainda pedem releitura antes da voz (a WRDA e a pausa das conversas), e a pergunta da CBC, que se
confirma pelo título lido pela Sala no navegador do app (a origem recusa robô; abaixo), não por leitura minha.

## Os itens que pedem troca (a frase de agora → a troca proposta)

**Nenhum.** Nenhuma linha DIVERGE, nenhuma é REFUTADA, nenhuma ficou sem leitura. Não há troca de voz a fazer neste r2.

## Os 8 itens do r1, no r2

| r1 | p (r2) | a frase de agora | veredito |
|---|---|---|---|
| 1 | 41 | "A Senate bill would move that date to 2029." | CONFIRMADA. S. 4949, sec. 1367: "in paragraph (3), by striking ``2027'' and inserting ``2029''"; a (c)(3) é o "Sunset" de 31/08/2027 da lei. Não é lei: o BILLSTATUS (lido hoje pelo r1) para em "Calendar No. 457", e a busca de hoje não achou votação no Senado (volátil). |
| 2 | 25 | "Beside the American figure, which is per call, 37.6 million a year looks steep. Beside the Canadian one, which is per year, it looks cheap." | CONFIRMADA. "per request" (US Entity, CRS nota 41) e "per year" (Canadian Entity, nota 40); a conta fecha: 37,6 > 34 e 37,6 < 40 (`fatos-medidas-r2.txt`, B). |
| 3 | — | a faixa da BC Hydro saiu da voz (B7) | o item cai: vai à tela, sem "US$". |
| 4 | 27 | "As a tariff fight between the two countries grew, CBC News asked whether ending this treaty could help Canada fight back." / "In March 2025, British Columbia's energy minister addressed the idea." | CONFIRMADAS. A data que não se leu saiu da voz. A pergunta é o título do vídeo da CBC, "Could ending a water treaty help Canada fight U.S. tariffs?" (lido pela Sala no navegador do app, com o oEmbed, em 09/11/2026; `pautas/rio-columbia/_trabalho/concorrencia.md`). A briga: "Trade tensions between Canada and the United States have escalated rapidly" (CP, 25/03/2025). O mês do ministro: a sessão de 25/03/2025 (página do tratado da BC) e "first published March 25, 2025" (CP). |
| 5 | 14 | "Canada answered, by the US Congressional Research Service's account, with a plan to divert much of the upper Columbia for its own use." | CONFIRMADA, com o dono. |
| 6 | 21 | "The Canadian side assumed it would be called only at 600,000, a flood expected to be rare." | CONFIRMADA. "the Canadian Entity has assumed … only once flows reach 600,000 cfs (which is expected to be rare)": o "expected" ficou sem dono, como no CRS. |
| 7 | 39 | "Three of them, in Washington State, went to court and stopped paying their part, and in September 2026 they settled with the federal government." | CONFIRMADA, na ordem certa: "initiated litigation in June 2024"; "stopped contributing to the CE in September 2024"; o acordo, 25/09/2026, "with the U.S. government" (APPA). |
| 8 | 32 | "Part of that strip is the room, seen from the ground." | CONFIRMADA. Os 3,6 MAF pagos são 51 % dos 7,1 MAF do tratado em Arrow (`fatos-medidas-r2.txt`, D). |

## As frases que a Sala pediu para olhar primeiro (a letra do escritor)

1. **p2 "But this river is mostly American: only about 15 percent of the land it drains lies in Canada." → CONFIRMADA.** "only about 15
   percent of the 259,500 square miles of the Columbia River Basin is actually located in Canada" (USACE + BPA). "mostly American" é a
   leitura dos outros ~85 % e está presa à terra pelo dois-pontos; pelo comprimento também vale (de 60 a 66 % do rio corre nos EUA,
   `fatos-medidas.txt`, B).
2. **p2 "A much bigger share of its water comes down through British Columbia." → CONFIRMADA.** "Yet the Canadian waters account for about
   38 percent of the average annual volume" (USACE + BPA).
3. **p3 "Talks to update the treaty between them have been paused since March 2025." → CONFIRMADA** (volátil). "The U.S. has paused
   negotiations with Canada on an amended Columbia River Treaty" (BC News, 11/03/2025); "update" = "amended". Nenhuma retomada achada até
   hoje. "unless both countries agree on something new" → CONFIRMADA (a nota de 22/11/2024: o período interino vai até "July 31, 2027" ou
   o 31 de julho depois do tratado novo).
4. **p4 "And the strange part: that treaty already promises Canada's help in a big flood, if the United States asks." → CONFIRMADA** (Art. IV(3)).
5. **p9 "About 15 percent of the land, and about 39 percent of the water." → CONFIRMADA.** Os 15 % são da USACE + BPA; os 39 % são a conta
   do canal da frase anterior (Birchbank/The Dalles, 87 anos: 39,3 %), e a USACE + BPA dá a mesma ordem para a água do Canadá (38 %). O eco
   vem depois de "That's our own calculation", e assim a conta do canal não cobre os 15 %: está certo como está.
6. **p15 "Its lake backs 42 miles into Canada, and by the treaty's own count, the water it regulates makes extra power there too." → CONFIRMADA.**
   "backs 42 miles into Canada" (USACE + BPA); "more than 200,000 kilowatt years per annum of energy benefit downstream in Canada"
   (Protocolo de 1964, V).
7. **p16 "The strange part starts when those 60 years run out." → CONFIRMADA** ("until the expiration of sixty years from the ratification
   date", Art. IV(2)). **p18 "Year after year, the snow melted, and the lakes caught part of it." → CONFIRMADA** (a regulação "would greatly
   reduce peak river flows during the spring runoff (snowmelt season)", USACE + BPA; o Arrow volta a encher em maio e junho, BC Hydro 2018).
   As barragens do tratado entraram de 1967 a 1973: a frase não diz que foram 60 anos de lagos, e "Year after year" não diz mais que isso.
8. **p22 "…passed the Canadian side's line in 40 of 89 years." → CONFIRMADA.** Refeita com ">" no lugar de "≥": 40 de 89, e nenhum pico igual
   a 600 mil, então "passed" vale (`fatos-medidas-r2.txt`, A). **"…too low for the Canadian line." → CONFIRMADA** (0 acima de 600 mil e 6
   entre 450 e 600 mil desde 2009). O 600 mil continua sendo a suposição da Entidade Canadense nos estudos, nunca uma linha do tratado.
9. **p23 "…behind the dam that holds back the Arrow Lakes." → CONFIRMADA** ("Arrow Reservoir, impounded by Hugh Keenleyside Dam", BC Hydro 2026).
10. **p26 "Under the deal, it pays so the room is already there, call or no call." → CONFIRMADA.** O pré-planejado do acordo interino "would
    be distinct from and in no way related to" o called-upon (nota de 22/11/2024), e é "per operating year" (a lei).
11. **p29 "Remember that Canadian gauge? Before the big storage dams went in upstream, on both sides of the border, June dwarfed February
    there." → CONFIRMADA** (junho 6.134 contra fevereiro 590 m³/s em Birchbank, 1938–1967: 10,4 vezes).
12. **p34 "Decades later, the Supreme Court of Canada wrote those words in a ruling. It found that a successor group of the Sinixt, based in
    Washington State, is an Aboriginal people of Canada." → CONFIRMADAS.** As palavras são da maioria, §6 ("the government of Canada
    declared the Arrow Lakes Band extinct"), em 2021, 65 anos depois de 1956; "the Lakes Tribe are a modern successor of the Sinixt";
    "based in the State of Washington"; "Accordingly, the Lakes Tribe is an Aboriginal people of Canada" (R. v. Desautel, 2021 SCC 17).
13. **p37 "Canada agreed to a smaller share of the power. The cut was more than a third." → CONFIRMADAS.** "Beginning August 1, 2024, the
    Canadian Entitlement decreased by 37%" (CRS, sobre o comunicado do Departamento de Estado de 25/11/2024); 37 % > 33,3 %
    (`fatos-medidas-r2.txt`, C). O corte previsto até 2033 (~50 %) também passa de um terço: a frase não envelhece.
14. **p38 "The American agencies that run the treaty once estimated that ending it would raise American power revenues, mostly by ending
    Canada's share." → CONFIRMADA.** "under a Treaty termination scenario, the United States would gain significant revenue"; "largely due to
    the termination of the Canadian Entitlement" (CRS, nota 44); o estudo é de junho de 2012 ("once").
15. **p39 "Canada's share is power, and part of the bill for that power falls on utilities along the river." → CONFIRMADA**, também no
    presente: pelo acordo, "the Mid-Columbia PUDs will pay for 25% of the reduced Canadian Entitlement (CE) obligations" (The Star,
    30/09/2026); antes, davam 27,5 %.
16. **p44 "For now, the United States pays to have that room waiting." → CONFIRMADA** (volátil: "required to pay Canada annual payments of
    USD", BC Hydro, 06/2026).

**O fecho (p42–p44):** as outras frases não mudaram e continuam confirmadas (o mínimo do fim do inverno, o enchimento de maio e junho, o
espaço em Keenleyside "to minimize the flood risk", o 31/07/2027).

**As frases com a letra da lista** (conferida a costura): p14, p16 ("Most of the money was for one lake: Arrow, the lake at the start of
this story."), p20 ("In September 2024, the 60 years the United States had paid for ran out." e "The promise didn't.": a cheia garantida
"converts on 16 September 2024 to a Called Upon operation", e o tratado "remains in force"), p21 (a unidade em cfs, "the Canadian side",
e "Between 450,000 and 600,000, one side expects the call and the other doesn't.": o CRS diz que picos "from 450,000 … to 650,000 cfs would
activate available Canadian storage" e que o lado canadense só espera "once flows reach 600,000 cfs"), p25, p26 ("And no number says
when.": "not currently defined in the Treaty"; "The treaty is the promise. The deal is the room.": linha L), p27, p28 ("Then the lakes are
full, and the rest of the river keeps coming.": linha L sobre as seis semanas e os três meses e meio), p32, p35 ("And the river had lost
something even before the treaty dams.": o Grand Coulee é de 1941, e as barragens do tratado, de 1967 a 1973), p39 e p41. Todas
CONFIRMADAS. "We'll call that the gap." (a troca da Sala) dá nome ao intervalo e não afirma nada: NADA A CHECAR.

## Para a tela (vai ao `redator-de-tela`; não é troca de voz)

- **O corte da parte do Canadá**: a voz diz "more than a third"; na tela, "37 %" com o dono certo, que é o comunicado do Departamento de
  Estado de 25/11/2024, como o CRS o resume ("Beginning August 1, 2024, the Canadian Entitlement decreased by 37%"): `U.S. STATE
  DEPARTMENT, NOV. 25, 2024`.
- As faixas que saíram da voz: **"$110–400 MILLION A YEAR"** da BC Hydro (06/2026) **sem "US$"** (o slide não diz a moeda; laudo do r1,
  item 3) e com o "typically" da fonte; **"$180–280 MILLION A YEAR"**, US Entity, junho de 2012 (CRS, nota 26), essa em dólar americano.
- **87 YEARS**, não 88 (laudo do r1); a ressalva dos picos: **"1974–2008: DAILY AVERAGES"**.
- O par do eco (15 % da terra, 39 % da água no medidor): o 39 % com a conta como **do canal** ("ALPHA POINT CALCULATION, WSC + USGS DATA"),
  e o 15 % com a USACE + BPA.
- "Lakes Tribe" (das Colville Confederated Tribes), que saiu da voz.

## Os voláteis que ficaram na fala (data-base 12/11/2026)

| Frase | Estado lido | O que a faz mudar | Fonte mais nova |
|---|---|---|---|
| "Talks to update the treaty between them have been paused since March 2025." (p3); "As of August 2026, … had not resumed." (p40) | pausadas; nenhuma retomada achada | um anúncio de retomada (BC, GAC, Departamento de Estado) | Canadian Geographic, 17/08/2026; a página do tratado da BC, lida em 12/11/2026 (a última notícia sobre as conversas é de 26/03/2025); a busca de hoje não achou retomada |
| "nothing we've read says either side has given it" (p27); "The treaty itself remains in force" (p41) | nenhum aviso de saída achado | um aviso de denúncia (Art. XIX.2) | CRS 12/2024 ("To date, neither country has given notice") |
| "It has not been finalized." (p40) | não finalizado | a assinatura ou a ratificação do tratado novo | BC Hydro, 23/06/2026 |
| "pays" (p1, p39, p44); "the spring of 2027 is the third" (p41); "part of the bill … falls on utilities" (p39) | o pagamento em vigor; o acordo das PUDs aprovado em 25/09/2026 | os EUA deixarem de escolher o ano 2026–27; um tratado novo em vigor antes de 31/07/2027; o acordo das PUDs não entrar em vigor | BC Hydro, 23/06/2026; APPA, 25/09/2026 |
| "The law that authorizes the payment expires at the end of August 2027, unless Congress extends it. A Senate bill would move that date to 2029." (p41) | nenhum projeto virou lei; o S. 4949 no calendário do Senado | o Senado votar o S. 4949, ou o texto final da WRDA 2026 mudar a (c)(3) | govinfo, BILLSTATUS (lido em 12/11/2026; atualizado em 29/09/2026); a busca de hoje não achou votação no plenário do Senado |

O que zera: uma retomada anunciada zera a p3 e a p40; a WRDA 2026 sancionada com o fim em 2029 muda a p41 e o fecho ("as far as this deal
can reach" fala do acordo interino, que termina em 31/07/2027 de qualquer jeito, mas a lei passaria a ir além). Reler tudo na véspera da
gravação.

## O que ficou sem leitura (NÃO FOI CHECADO na origem), e a URL

- **Nenhuma linha ficou sem veredito.** Nesta rodada não pedi nada à origem: o r2 não trouxe fato novo, e as cópias locais (as de
  `fontes/texto/` e as de `fontes/web/`, lidas hoje pelo r1, um pedido por vez, com o User-Agent do canal) bastaram. As duas buscas de hoje
  (WebSearch: a WRDA 2026 e a retomada das conversas) só serviram de orientação para os voláteis; o que veio só delas não entrou como
  leitura.
- **O vídeo da CBC** (p27): `https://www.youtube.com/` recusou a leitura automática à pauta e `https://www.cbc.ca/` dá 403 (registrados
  pela pauta e pela Sala; não se tentou de novo). A pergunta se confirma pelo título que a Sala leu no navegador do app em 09/11/2026
  (`concorrencia.md`). A data do vídeo continua sem leitura, mas não está mais na voz.
- **congress.gov** (S. 4949 e H.R. 9497): pediu verificação de robô à Sala em 09/11/2026; não se tentou. O estado vem do BILLSTATUS do
  govinfo.gov.

## A lista de nomes (o anônimo da voz → quem é)

| Na voz | Quem é | Credencial | Onde |
|---|---|---|---|
| "The American agencies that run the treaty" (p25, p38); "American planners" (p21) | a US Entity: a Bonneville Power Administration e a Northwestern Division do US Army Corps of Engineers | as duas agências designadas pelo Art. XIV | CRS R43287, nota 2 · https://www.everycrsreport.com/reports/R43287.html |
| "The Canadian side" (p21, p22) | a Entidade Canadense: a BC Hydro (o CRS também a chama de "the Province of British Columbia") | a entidade designada pelo Canadá | CRS R43287, notas 2 e 39 |
| "British Columbia's energy minister" (p27) | Adrian Dix | Minister of Energy and Climate Solutions and Minister Responsible for the Columbia River Treaty | https://engage.gov.bc.ca/columbiarivertreaty/ · https://cfjctoday.com/2025/03/25/b-c-energy-minister-says-treaty-not-a-bargaining-chip-in-u-s-trade-dispute/ |
| "CBC News asked" (p27) | o vídeo "Could ending a water treaty help Canada fight U.S. tariffs?" | CBC News (YouTube) | `pautas/rio-columbia/_trabalho/concorrencia.md` (leitura da Sala, 09/11/2026) |
| "the US Geological Survey's account" (p12) | S. E. Rantz e H. C. Riggs | autores do USGS Water-Supply Paper 1080 (1949) | https://pubs.usgs.gov/wsp/1080/report.pdf |
| "the US Congressional Research Service" (p14, p21) | Charles V. Stern | Specialist in Natural Resources Policy, CRS (R43287, 03/12/2024) | https://www.everycrsreport.com/reports/R43287.html |
| "the Supreme Court of Canada" (p34) | o voto da maioria, de Rowe J. | R. v. Desautel, 2021 SCC 17, 23/04/2021 | https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do |
| "representatives of three First Nations" (p40) | Ktunaxa, Syilx-Okanagan e Secwépemc | Global Affairs Canada (nota de 28/05/2025) | https://search.open.canada.ca/qpnotes/record/dfatd-maecd%2C00019-2025 |
| "the magazine Canadian Geographic" (p40) | David Geselbracht | autor da matéria de 17/08/2026 | https://canadiangeographic.ca/articles/we-want-to-let-the-salmon-know-were-still-here/ |
| "Three of them" (p39) | Chelan, Douglas e Grant County PUDs; Kirk Hudson, Gary Ivory e John Mertlich assinam a nota conjunta | APPA, Paul Ciampoli, 25/09/2026 | https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments |
| "The government of British Columbia puts the count" (p33) | "A Review of the Range of Impacts and Benefits of the Columbia River Treaty" (2012) | governo da Colúmbia Britânica | https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf |

## Os dois padrões mais vistos

1. **A troca que tirou o número e deixou a ideia.** O r2 resolveu três itens do r1 tirando da voz o que não se sustentava como dito (a faixa
   da BC Hydro, a data da CBC, o "both chambers") e passando os números para a tela. A ideia de cada frase continua com fonte; o que muda é
   que o dono e a data passam a depender da tela. O `redator-de-tela` tem de levar o dono junto (o "37 %" do Departamento de Estado, o
   "$110–400" sem moeda, o "87 YEARS").
2. **O dono que a frase nova pôs no lugar certo.** "the Canadian side", "by the US Congressional Research Service's account", "a flood
   expected to be rare" sem dono: as quatro trocas de atribuição do r1 entraram com a letra da fonte. Nenhuma frase nova trouxe dono novo
   sem leitura.

## Como a tabela foi feita (para quem a reler)

- **O casamento com o r1**: um script casou as 191 linhas do r1 com o r2 pela regra do `portao-fatos` (a frase inteira no parágrafo, não um
  pedaço). Uma frase do r1 que só aparece como pedaço ("That strip is the room…" dentro de "Part of that strip is the room…") não passa como
  levada: foi rejulgada.
- **As medidas novas** (`fatos-medidas-r2.txt`) são a saída literal de `fatos-medidas-r2.py`, com o comando no cabeçalho: os picos com ">"
  (A), a conta do "per call / per year" (B), o terço (C), os 3,6 de 7,1 MAF (D), o eco (E), 1956 → 2021 (F) e os dois países (G). O
  `fatos-medidas.txt` do r1 ficou como estava.
- **Duas limitações do portão, declaradas** (as mesmas do r1): ele lê "more than a third" como "mais que 3", e a linha F221 cita a conta
  "37 % contra 1/3 = 33.3 %" (o 3 do denominador); e ele exige no trecho o numeral de "the two countries" (p27), que a linha F213 conta na
  frase da CP ("Canada and the United States"). Nenhum número novo entrou por esse caminho.
- **As linhas L** (9): as 7 do r1 e duas novas, "The treaty is the promise. The deal is the room." (F211) e "Then the lakes are full, and the
  rest of the river keeps coming." (F216), cada uma apoiada em linha confirmada.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- "What the United States is buying is certainty." (p26): a pauta (§4.3) deixou a frase para o Lucas; como fato, apoia-se na lei e na nota
  de 22/11/2024 (linha L F094). Se fica, é decisão dele.
- Onde gravar o laudo de fatos dos próximos vídeos (a roupa, §2): gravado aqui, em `roteiros/rio-columbia/qc-roteiro/`, como no r1.

## NADA A CHECAR (as 40 frases sem linha, uma a uma)

Perguntas, transições, imagens sem fato, a assinatura e o nome do intervalo. Nenhuma afirma um fato que se possa conferir.

- p4.2 "So why pay for empty space, when the United States can already call on Canada in a flood?"
- p5.1 "You're at Alpha Point, and this is where the story of the lake that waits for the flood begins."
- p6.1 "Put your finger on the map where the Columbia River begins."
- p6.3 "Its beginning is somewhere else."
- p8.1 "So where does all that water come from, and when?"
- p9.3 "A gauge is just a station on the bank that records how much water is going past."
- p10.1 "Numbers like those make you wonder who holds the tap."
- p10.2 "Hold that thought; we'll measure it."
- p11.2 "A river like that floods."
- p13.1 "What do you do with a river that arrives all at once?"
- p13.3 "That takes room: a deep valley, a dam across it, and a long lake with space left to rise."
- p14.1 "The early ideas pulled in opposite directions."
- p15.1 "Out of that argument came a treaty."
- p16.1 "Then follow the money, because it runs the other way."
- p16.2 "Water comes down, and money goes up."
- p17.1 "The other half of the bargain is power."
- p19.2 "Back to that empty space, then."
- p20.1 "Maybe you've already decided what the payment is."
- p20.2 "It's insurance."
- p20.4 "That's close, and it leaves out the strange part."
- p20.8 "That's what it means to have Canada on call."
- p21.9 "We'll call that the gap."
- p22.1 "So we looked at the river itself."
- p25.1 "The alternative has a price too."
- p27.1 "Certainty about what, exactly?"
- p28.1 "For another, look at what the dams can hold."
- p29.1 "Remember that Canadian gauge?"
- p31.1 "What Canada has in its hands, then, is a calendar."
- p32.1 "That room came from somewhere."
- p36.1 "So that is the room, and what it cost."
- p36.2 "What it's worth depends on who is counting."
- p38.1 "Each side has its own account of what the other gains."
- p38.5 "Two careful sums, and they don't land in the same place."
- p39.1 "When you hear that the United States pays, it's fair to ask who that is."
- p40.1 "There is a longer plan, in outline."
- p41.1 "That leaves the clock."
- p42.1 "It starts with snow."
- p42.4 "Nothing much is happening yet."
- p42.5 "The room is there, and the flood isn't."
- p43.1 "Then the melt comes."

## A tabela (uma linha por item da lista; a mesma de `fatos-tabela.json`)

A coluna "r2" diz se a linha foi levada do r1 (a frase não mudou), rejulgada (a frase mudou) ou é nova.

| id | p | frase (início) | veredito | o que a fonte diz (trecho, ou a nota) | fonte e URL | r2 |
|---|---|---|---|---|---|---|
| F001 | 1 | Every year, before the spring snowmelt, part of the Arrow Lakes Res… | confirmada | "Since then, the reservoir has been drafting to meet Treaty flood control requirements." | BC Hydro, Columbia River Operations Summary, 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf | levada |
| F002 | 1 | Every year, before the spring snowmelt, part of the Arrow Lakes Res… | confirmada | "Currently, Canada provides 8.95 million acre-feet (MAF) of dedicated, pre-planned FRM through all the Canadian CRT projects" | BC, AIP Public Description, 30/08/2024 (L4) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/09/CRT-AIP-Canada-public-description-Final_2024Aug30.pdf | levada |
| F003 | 1 | And starting with the 2025 flood season, the United States pays Can… | confirmada | "there is authorized to be appropriated $37,600,000 for fiscal year 2025 and $37,600,000, adjusted for inflation" | Public Law 118-272, sec. 1152 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | levada |
| F004 | 1 | And starting with the 2025 flood season, the United States pays Can… | confirmada | "The first payment started at $37.6 million in fiscal year 2025" | PNWA, 08/05/2026 (L2) · PNWA, WRDA 2026, 08/05/2026 (lobby dos portos; URL em pautas/rio-columbia/_trabalho/fatos-b.md) | levada |
| F005 | 2 | But this river is mostly American: only about 15 percent of the lan… | confirmada | "only about 15 percent of the 259,500 square miles of the Columbia River Basin is actually located in Canada" | USACE + BPA, History and 2014/2024 Review (F3, L5) · https://www.osti.gov/servlets/purl/1132837 | rejulgada |
| F006 | 2 | A much bigger share of its water comes down through British Columbia. | confirmada | "Yet the Canadian waters account for about 38 percent of the average annual volume" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | rejulgada |
| F007 | 3 | The payment is temporary: part of a deal that runs out after the sp… | confirmada | "The Interim FRM Period is defined to run until the earliest of the first July 31 following the entry into force of the Modernized Treaty, or July 31, 2027." | Nota diplomática dos EUA, 22/11/2024 (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf | rejulgada |
| F172 | 3 | The payment is temporary: part of a deal that runs out after the sp… | confirmada | "announced an agreement in principle between the two countries on the terms for modernization of the Treaty" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | rejulgada |
| F008 | 3 | Talks to update the treaty between them have been paused since Marc… | confirmada | "The U.S. has paused negotiations with Canada on an amended Columbia River Treaty." | BC News, 11/03/2025 · https://news.gov.bc.ca/releases/2025ECS0009-000191 | rejulgada |
| F009 | 3 | Talks to update the treaty between them have been paused since Marc… | confirmada | "Victoria Tuesday, March 11, 2025" | BC News, 11/03/2025 · https://news.gov.bc.ca/releases/2025ECS0009-000191 | rejulgada |
| F010 | 3 | Talks to update the treaty between them have been paused since Marc… | confirmada | "At the time of writing, the negotiations are still paused" | Canadian Geographic, 17/08/2026 · https://canadiangeographic.ca/articles/we-want-to-let-the-salmon-know-were-still-here/ | rejulgada |
| F011 | 4 | And the strange part: that treaty already promises Canada's help in… | confirmada | "Canada shall, when called upon by an entity designated by the United States of America for that purpose, operate within the limits of existing facilities any storage in the Columbia River basin in Canada" | Tratado, Art. IV(3) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | rejulgada |
| F012 | 6 | You may know its American end: this is the largest hydropower-produ… | confirmada | "The Columbia River is the largest hydropower-producing river system in the United States." | CRS R43287, 03/12/2024 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F013 | 6 | It's a lake in the mountains of British Columbia, called Columbia L… | confirmada | "The headwaters of the Columbia River is in Columbia Lake in British Columbia, between the Canadian Rockies and the Selkirk Mountains" | USGS, River Basins: The Columbia, 1981 (F7) · https://pubs.usgs.gov/gip/70039373/report.pdf | levada |
| F014 | 7 | From there, the river does something odd for a river on its way to … | confirmada | "the Columbia River flows into the Pacific Ocean near Astoria, Oregon" | USGS SIR 2007-5186 (F8) · https://pubs.usgs.gov/sir/2007/5186/section3.html | levada |
| F015 | 7 | It heads northwest, deeper into Canada. | confirmada | "The river flows northwest 218 miles; then south for 280 miles" | USGS 1981 (F7) · https://pubs.usgs.gov/gip/70039373/report.pdf | levada |
| F016 | 7 | Then it swings around in a long hairpin, the river's big bend in Br… | confirmada | "then south for 280 miles; it crosses the United States-Canadian border into northeastern Washington" | USGS 1981 (F7) · https://pubs.usgs.gov/gip/70039373/report.pdf | levada |
| F017 | 7 | That bend is underwater these days: it lies beneath a lake, behind … | confirmada | "Formerly the "Big Bend" area of the Columbia River, and named for the former town of Mica Creek, drowned under the pondage." | BC Geographical Names, Mica Dam (F16) · https://apps.gov.bc.ca/pub/bcgnws/names/51532.html | levada |
| F018 | 7 | Keep your finger moving, and by the time the Columbia crosses into … | confirmada | "664/1942 km = 34.2 % e 498/1243 mi = 40.1 %, os dois acima de 1/3 (33.3 %)" | conta do verificador sobre F7 e F8 · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F019 | 8 | The Canadian part of the basin, the land that drains into the river… | confirmada | "The Canadian portion is mountainous with much snow." | BC Hydro, Columbia Operations Update, 23/06/2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F179 | 8 | For months, the snow just sits there. Then, late in the spring, it … | confirmada | "Approximately 60% of this runoff occurs in May, June, and July." | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F020 | 8 | About 60 percent of the water that runs off the whole basin in a ye… | confirmada | "Approximately 60% of this runoff occurs in May, June, and July." | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F180 | 8 | Most of the river's year arrives in one season. | confirmada | "Approximately 60% of this runoff occurs in May, June, and July." | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F181 | 9 | A large part of it arrives by way of Canada. | confirmada | "Yet the Canadian waters account for about 38 percent of the average annual volume" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F182 | 9 | You can read that off two gauges. | confirmada | "séries casadas (a_calc_fracoes.py): WSC 08NE049, do governo do Canadá, e USGS 14105700, do governo dos EUA = 2 séries, de 2 governos" | contagem do verificador · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F021 | 9 | One of them sits in British Columbia, a short way north of the border. | confirmada | "latitude 49.1778 N, longitude -117.7177: 19.8 km (12.3 mi) ao norte do paralelo 49" | WSC 08NE049 (coordenadas da estação); conta do verificador · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F022 | 9 | The other is far downstream at The Dalles, a place on the river in … | confirmada | "USGS 14105700 COLUMBIA RIVER AT THE DALLES, OR" | USGS 14105700 (o arquivo de picos) · https://nwis.waterdata.usgs.gov/nwis/peak?site_no=14105700&agency_cd=USGS&format=rdb (o download do cético, cetico-v1.md) | levada |
| F023 | 9 | We lined the two records up, year against year, for the 87 years th… | confirmada | "Birchbank/The Dalles 1938-2024 n=87: 71,191 / 181,213 cfs = 39.3 %" | a_calc_fracoes.py (WSC + USGS) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F173 | 9 | We lined the two records up, year against year, for the 87 years th… | confirmada | "séries casadas (a_calc_fracoes.py): WSC 08NE049, do governo do Canadá, e USGS 14105700, do governo dos EUA = 2 séries, de 2 governos" | contagem do verificador · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F024 | 9 | On average, the river at the Canadian gauge is already carrying abo… | confirmada | "Birchbank/The Dalles 1938-2024 n=87: 71,191 / 181,213 cfs = 39.3 %" | a_calc_fracoes.py (WSC + USGS) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F025 | 9 | That's our own calculation, from the two governments' data. | confirmada | "Monthly Mean of Water Level or Discharge for COLUMBIA RIVER AT BIRCHBANK (08NE049)" | WSC 08NE049 · WSC 08NE049, API aberta do ECCC (a série mensal: https://api.weather.gc.ca/collections/hydrometric-monthly-mean/items?STATION_NUMBER=08NE049; fatos-a, F13) | levada |
| F174 | 9 | That's our own calculation, from the two governments' data. | confirmada | "séries casadas (a_calc_fracoes.py): WSC 08NE049, do governo do Canadá, e USGS 14105700, do governo dos EUA = 2 séries, de 2 governos" | contagem do verificador · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F192 | 9 | About 15 percent of the land, and about 39 percent of the water. | confirmada | "only about 15 percent of the 259,500 square miles of the Columbia River Basin is actually located in Canada" | USACE + BPA, History and 2014/2024 Review (F3, L5) · https://www.osti.gov/servlets/purl/1132837 | nova |
| F193 | 9 | About 15 percent of the land, and about 39 percent of the water. | confirmada | "Birchbank/The Dalles 1938-2024 n=87: 71,191 / 181,213 cfs = 39.3 %" | a_calc_fracoes.py (WSC + USGS) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | nova |
| F194 | 9 | About 15 percent of the land, and about 39 percent of the water. | confirmada | "Yet the Canadian waters account for about 38 percent of the average annual volume" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | nova |
| F026 | 10 | BC Hydro, the power company that runs Canada's side of the treaty, … | confirmada | "the Canadian Entity (the British Columbia Hydro and Power Authority, or BC Hydro)" | CRS R43287, nota 2 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F027 | 10 | Most of the power, and most of the need to hold back floods, is in … | confirmada | "Most hydropower production and need for flood control is in the USA." | BC Hydro 2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F028 | 10 | The big sites for storing water are in Canada. | confirmada | "The major storage dam sites are in Canada." | BC Hydro 2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F183 | 10 | One country has the need. The other has the room. | confirmada | "Most hydropower production and need for flood control is in the USA. The major storage dam sites are in Canada." | BC Hydro 2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F029 | 11 | Before the big storage dams, the river at that Canadian gauge carri… | confirmada | "mês mais cheio: jun 6,134; mais baixo: fev 590; razão 10.4×" | p_contas.py (WSC 08NE049) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F030 | 11 | And in 1948, it did. | confirmada | "the early part of June 1948 the Columbia River Basin in the United States and Canada was ravaged by a flood" | USGS Water-Supply Paper 1080 (1949) · https://pubs.usgs.gov/wsp/1080/report.pdf | levada |
| F031 | 12 | That spring, the river came up over its banks, and the damage ran f… | confirmada | "caused major damage from Trail, British Columbia, to Vanport, Ore." | USACE + BPA (F3, L5) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F032 | 12 | That spring, the river came up over its banks, and the damage ran f… | confirmada | "communities such as Vanport, Ore., just north of Portland" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F033 | 12 | At Vanport, a railroad embankment was doing the work of a dike. | confirmada | "fill serving as a dike broke at 4:15 p.m. on Sunday, May 30" | USGS WSP 1080, p. 9 · https://pubs.usgs.gov/wsp/1080/report.pdf | levada |
| F034 | 12 | It broke on a Sunday afternoon, and within an hour, by the US Geolo… | confirmada | "The disaster occurred on a Sunday afternoon" | USGS WSP 1080, p. 9 · https://pubs.usgs.gov/wsp/1080/report.pdf | levada |
| F035 | 12 | It broke on a Sunday afternoon, and within an hour, by the US Geolo… | confirmada | "Within an hour the town was completely destroyed." | USGS WSP 1080, p. 9 · https://pubs.usgs.gov/wsp/1080/report.pdf | levada |
| F036 | 12 | Across the whole flood, the same report counts at least 51 people d… | confirmada | "At least 51 lives were lost as a result of the flood." | USGS WSP 1080, p. 13 · https://pubs.usgs.gov/wsp/1080/report.pdf | levada |
| F037 | 12 | Across the whole flood, the same report counts at least 51 people d… | confirmada | "38,500 persons made homeless" | USGS WSP 1080, p. 13 · https://pubs.usgs.gov/wsp/1080/report.pdf | levada |
| F184 | 13 | You catch part of it upstream, and you let it down slowly. | confirmada | "the usable space in a reservoir that is set aside for impounding and releasing water for flood risk management" | Public Law 118-272, sec. 1152(d)(3) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | levada |
| F038 | 13 | On the Columbia, the big sites for that were north of the border. | confirmada | "The major storage dam sites are in Canada." | BC Hydro 2026, p. 7 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F039 | 14 | A few years after the flood, the United States proposed a dam of it… | confirmada | "the United States had proposed in 1951 to build Libby Dam in Montana (which would flood 42 miles into Canada)" | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F040 | 14 | Canada answered, by the US Congressional Research Service's account… | confirmada | "Canada was opposed to this solution, and as a response proposed to divert as much as 15.5 MAF from the Columbia River for its own purposes" | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | rejulgada |
| F041 | 15 | It took effect in September 1964, and the two countries' leaders ma… | confirmada | "signed at Washington January 17, 1961, and entered into force September 16, 1964" | Public Law 118-272 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | levada |
| F042 | 15 | It took effect in September 1964, and the two countries' leaders ma… | confirmada | "meet on Sept. 16, 1964, at the International Boundary at Blaine, Wash., and Surrey, B.C." | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F175 | 15 | It took effect in September 1964, and the two countries' leaders ma… | confirmada | "líderes na fronteira em 16/09/1964 (USACE + BPA): Johnson, dos EUA; Pearson e Bennett, do Canadá = 2 países" | contagem do verificador sobre F3 · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F043 | 15 | Canada would build three big storage dams. | confirmada | "Required to construct the Kinbasket, Arrow and Duncan storage reservoirs" | BC Hydro 2026, p. 7 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F044 | 15 | Canada would build three big storage dams. | confirmada | "helped fund the construction of the three Treaty dams in Canada" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F045 | 15 | The United States would build the one it had asked for, Libby. | confirmada | "The Treaty also allowed the United States an option to build Libby Dam on the Kootenai River" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F046 | 15 | Its lake backs 42 miles into Canada, and by the treaty's own count,… | confirmada | "whose reservoir Lake Koocanusa backs 42 miles into Canada" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | rejulgada |
| F047 | 15 | Its lake backs 42 miles into Canada, and by the treaty's own count,… | confirmada | "more than 200,000 kilowatt years per annum of energy benefit downstream in Canada" | Protocolo de 1964, V (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | rejulgada |
| F048 | 16 | For the room behind the Canadian dams, the United States paid 64.4 … | confirmada | "lump sum payments totaling $64.4 million when each of the three Canadian dams became operational" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F049 | 16 | For the room behind the Canadian dams, the United States paid 64.4 … | confirmada | "For the purpose of flood control until the expiration of sixty years from the ratification date" | Tratado, Art. IV(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | levada |
| F050 | 16 | The price was half of what those dams were expected to save it in f… | confirmada | "Canada was to be paid 50 percent of the estimated value of U.S." | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | rejulgada |
| F051 | 16 | Most of the money was for one lake: Arrow, the lake at the start of… | confirmada | "Pagamento de 1964 pela cheia: Arrow 52,1 de 64,4 = 80.9 %" | Tratado, Art. VI(1), pelo p_contas.py · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | rejulgada |
| F052 | 16 | So paying Canada for room is as old as the treaty itself. | confirmada | L: the listener concludes that the United States has paid Canada for flood room since the treaty took effect (apoio: F048) | F048 · — | levada |
| F195 | 16 | The strange part starts when those 60 years run out. | confirmada | "For the purpose of flood control until the expiration of sixty years from the ratification date" | Tratado, Art. IV(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | nova |
| F053 | 17 | Water stored in Canada and released on a schedule lets the American… | confirmada | "For power generating purposes the 15,500,000 acre-feet of Canadian storage will be operated in accordance with operating plans designed to achieve optimum power generation downstream" | Tratado, Anexo A (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | levada |
| F054 | 17 | The treaty splits that gain down the middle: half of the extra powe… | confirmada | "Canada is entitled to one half the downstream power benefits determined under Article VII." | Tratado, Art. V(1) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | levada |
| F055 | 17 | The treaty splits that gain down the middle: half of the extra powe… | confirmada | "The United States of America shall deliver to Canada at a point on the Canada-United States of America boundary near Oliver" | Tratado, Art. V(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | levada |
| F056 | 17 | British Columbia sold the first 30 years of that share up front, fo… | confirmada | "Canada initially sold its share of this additional power, called the Canadian Entitlement, for $254 million to a consortium of U.S. utilities for a period of 30 years." | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F057 | 17 | British Columbia sold the first 30 years of that share up front, fo… | confirmada | "helped fund the construction of the three Treaty dams in Canada" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F058 | 17 | British Columbia sold the first 30 years of that share up front, fo… | confirmada | "entered into between the British Columbia Hydro and Power Authority and the Columbia Storage Power Exchange" | Troca de notas de 16/09/1964 (F2) · https://internationalwaterlaw.org/documents/regionaldocs/columbia_river_note1.html | levada |
| F059 | 17 | So American money helped build Canada's dams, and water stored in C… | confirmada | L: the listener concludes that the money went north to build the dams and the stored water raised power in the United States (apoio: F054, F056) | F054, F056 · — | levada |
| F060 | 18 | For 60 years, that was the bargain: room for money, and stored wate… | confirmada | "For the purpose of flood control until the expiration of sixty years from the ratification date" | Tratado, Art. IV(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | levada |
| F196 | 18 | Year after year, the snow melted, and the lakes caught part of it. | confirmada | "river ﬂ ows during the spring runoff (snowmelt season)" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | nova |
| F197 | 18 | Year after year, the snow melted, and the lakes caught part of it. | confirmada | "434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June" | BC Hydro, Columbia River Operations Summary, 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf | nova |
| F064 | 19 | If you're enjoying the trip downriver, subscribe to Alpha Point. | confirmada | "subscribe to Alpha Point" | marca/cta.md · marca/cta.md | levada |
| F065 | 20 | The United States bought decades of cover, the cover ran out, and s… | confirmada | "Canada elected to receive lump sum payments totaling $64.4 million when each of the three Canadian dams became operational" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F066 | 20 | In September 2024, the 60 years the United States had paid for ran … | confirmada | "Assured Annual Flood Control expires automatically in 2024 and converts on 16 September 2024 to a Called Upon operation" | BC, Treaty highlights (F5) · https://engage.gov.bc.ca/columbiarivertreaty/ (Treaty highlights; fatos-a, F5) | rejulgada |
| F198 | 20 | In September 2024, the 60 years the United States had paid for ran … | confirmada | "For the purpose of flood control until the expiration of sixty years from the ratification date" | Tratado, Art. IV(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | nova |
| F199 | 20 | In September 2024, the 60 years the United States had paid for ran … | confirmada | "lump sum payments totaling $64.4 million when each of the three Canadian dams became operational" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | nova |
| F185 | 20 | The promise didn't. | confirmada | "converts on 16 September 2024 to a Called Upon operation" | BC, Treaty highlights (F5) · https://engage.gov.bc.ca/columbiarivertreaty/ (Treaty highlights; fatos-a, F5) | levada |
| F200 | 20 | The promise didn't. | confirmada | "Assured Annual Flood Control expires automatically in 2024 and converts on 16 September 2024 to a Called Upon operation" | BC, Treaty highlights (F5) · https://engage.gov.bc.ca/columbiarivertreaty/ (Treaty highlights; fatos-a, F5) | nova |
| F201 | 20 | The promise didn't. | confirmada | "recognizes that the scope of the Treaty, which remains in force" | Nota diplomática dos EUA, 22/11/2024 (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf | nova |
| F067 | 20 | Under the treaty, Canada has to help in a big flood whenever the Un… | confirmada | "Canada would be responsible for making these changes. In exchange, the United States would pay for operating costs and economic losses in Canada due to the changed operation." | CRS R43287 (L15) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F068 | 20 | Under the treaty, Canada has to help in a big flood whenever the Un… | confirmada | "only to control potential floods in the United States of America that could not be adequately controlled by all the related storage facilities in the United States of America" | Protocolo de 1964, I(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | levada |
| F069 | 21 | And the treaty doesn't say how big a flood that is. | confirmada | "is not currently defined in the Treaty and is likely to be an important point in negotiations" | CRS R43287, nota 39 (L15) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F186 | 21 | No number, no line on a gauge. | confirmada | "The actual trigger for called-upon flood control operations, as well as the cost for these operations, is not currently defined in the Treaty" | CRS R43287, nota 39 (L15) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F070 | 21 | A flood on this river is measured in cubic feet per second: how muc… | confirmada | "a range of peak flows at the Dalles (a large dam near the mouth of the Columbia River) from 450,000 cubic feet per second" | CRS R43287, nota 39 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | rejulgada |
| F071 | 21 | When the treaty came up for review, the two sides worked from diffe… | confirmada | "Treaty Continues with 450 and 600 flood flow objectives" | USACE, 31/01/2013, p. 15 (L13) · USACE, Overview of Treaty Review Process, 31/01/2013, cópia da USEA (Sala; a URL não está no índice local, a registrar) | levada |
| F176 | 21 | When the treaty came up for review, the two sides worked from diffe… | confirmada | "an important point in negotiations between the two countries" | CRS R43287, nota 39 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F072 | 21 | American planners projected that Canadian storage would come into p… | confirmada | "from 450,000 cubic feet per second (cfs) to 650,000 cfs would activate available Canadian storage" | CRS R43287, nota 39 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F073 | 21 | The Canadian side assumed it would be called only at 600,000, a flo… | confirmada | "the Canadian Entity has assumed that it would provide called-upon storage only once flows reach 600,000 cfs (which is expected to be rare)" | CRS R43287, nota 39 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | rejulgada |
| F074 | 21 | That's how the US Congressional Research Service describes those st… | confirmada | "While the U.S. Entity has projected that a range of peak flows at the Dalles" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F202 | 21 | Between 450,000 and 600,000, one side expects the call and the othe… | confirmada | "from 450,000 cubic feet per second (cfs) to 650,000 cfs would activate available Canadian storage" | CRS R43287, nota 39 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | nova |
| F203 | 21 | Between 450,000 and 600,000, one side expects the call and the othe… | confirmada | "the Canadian Entity has assumed that it would provide called-upon storage only once flows reach 600,000 cfs" | CRS R43287, nota 39 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | nova |
| F075 | 22 | From 1879 to 1967, the yearly peak at The Dalles passed the Canadia… | confirmada | "1879-1967: 89 anos; pico >= 600,000 cfs em 40 de 89 anos" | fatos-medidas-picos.py (USGS) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | rejulgada |
| F204 | 22 | From 1879 to 1967, the yearly peak at The Dalles passed the Canadia… | confirmada | "1879-1967: 89 anos; pico > 600,000 cfs em 40 de 89 anos; pico igual a 600,000 em 0" | fatos-medidas-r2.py (USGS) · roteiros/rio-columbia/qc-roteiro/fatos-medidas-r2.txt (as contas do canal) | nova |
| F076 | 22 | On the old river, that was no rare flood. | confirmada | L: the listener concludes that a 600,000 cfs peak was common at The Dalles before the treaty dams (apoio: F075) | F075 · — | levada |
| F077 | 22 | Since 2009, with the space reserved upstream, it hasn't passed it o… | confirmada | "2009-2025: 17 anos; pico >= 600,000 cfs em 0 de 17 anos; entre 450,000 e 600,000 em 6" | fatos-medidas-picos.py (USGS) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | rejulgada |
| F083 | 23 | That gap is where the law comes in. | confirmada | L: the listener concludes that the law pays for storage beyond what the treaty's on-call promise obliges Canada to give (apoio: F082, F072) | F082, F072 · — | levada |
| F078 | 23 | In January 2025, Congress authorized the payment. | confirmada | "Approved January 4, 2025." | Public Law 118-272 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | levada |
| F079 | 23 | It pays for reserving 3.6 million acre-feet of room a year behind t… | confirmada | "reserving and operating 3,600,000 acre- feet of pre-planned flood storage per operating year at Hugh Keenleyside Dam" | Public Law 118-272, sec. 1152 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | rejulgada |
| F080 | 23 | It pays for reserving 3.6 million acre-feet of room a year behind t… | confirmada | "Arrow Reservoir, impounded by Hugh Keenleyside Dam" | BC Hydro 2026, p. 20 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | rejulgada |
| F081 | 23 | An acre-foot is enough water to cover an acre of land one foot deep. | confirmada | "1 MAF represents the volume of water covering an area of 1 acre to a depth of 1 foot, times a million" | BC, AIP Public Description, glossário (L4) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/09/CRT-AIP-Canada-public-description-Final_2024Aug30.pdf | levada |
| F082 | 23 | The law spells out what that includes, in its own words: "operation… | confirmada | "including operations that the Government of Canada may not be obligated to provide under the Columbia River Treaty" | Public Law 118-272, sec. 1152 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | rejulgada |
| F084 | 24 | The lake drops every winter anyway, as water moves downstream to ma… | confirmada | "The limited number of Called Upon years had less impact than the power requirements." | USACE, 31/01/2013, p. 22 (L13) · USACE, Overview of Treaty Review Process, 31/01/2013, cópia da USEA (Sala; a URL não está no índice local, a registrar) | levada |
| F085 | 24 | The lake drops every winter anyway, as water moves downstream to ma… | confirmada | "reduced fall and winter drafts—also known as drawdowns—in Canadian reservoirs" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F086 | 24 | What the United States pays for is a guarantee: that much room, eve… | confirmada | "pre-planned flood storage per operating year at Hugh Keenleyside Dam, including operations that the Government of Canada may not be obligated to provide" | Public Law 118-272, sec. 1152 · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | levada |
| F087 | 25 | The American agencies that run the treaty once estimated that a cal… | confirmada | "the U.S. Entity has previously estimated costs of between $4 million and $34 million per request for called-upon flood control" | CRS R43287, nota 41 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F088 | 25 | The American agencies that run the treaty once estimated that a cal… | confirmada | "US Entity, custo por pedido (CRS R43287, nota 41): de 4 a 34 milhões de dólares, ou seja, 4 e 34" | CRS R43287 (a faixa transcrita) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F089 | 25 | British Columbia's estimate is that relying on those calls would co… | confirmada | "The Canadian Entity estimates that, for power production alone, called-upon operations would result in $40 million to $150 million per year in lost benefits to the United States" | CRS R43287, nota 40 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F090 | 25 | British Columbia's estimate is that relying on those calls would co… | confirmada | "Canadian Entity, perda por ano (CRS R43287, nota 40): de 40 a 150 milhões de dólares, ou seja, 40 e 150" | CRS R43287 (a faixa transcrita) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F091 | 25 | Beside the American figure, which is per call, 37.6 million a year … | confirmada | "has previously estimated costs of between $4 million and $34 million per request" | CRS R43287, notas 40 e 41 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | rejulgada |
| F205 | 25 | Beside the American figure, which is per call, 37.6 million a year … | confirmada | "the U.S. Entity has previously estimated costs of between $4 million and $34 million per request for called-upon flood control" | CRS R43287, nota 41 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | nova |
| F206 | 25 | Beside the American figure, which is per call, 37.6 million a year … | confirmada | "called-upon operations would result in $40 million to $150 million per year in lost benefits to the United States" | CRS R43287, nota 40 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | nova |
| F207 | 25 | Beside the American figure, which is per call, 37.6 million a year … | confirmada | "there is authorized to be appropriated $37,600,000 for fiscal year 2025 and $37,600,000, adjusted for inflation" | Public Law 118-272, sec. 1152 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | nova |
| F208 | 25 | Beside the American figure, which is per call, 37.6 million a year … | confirmada | "pagamento por ano: 37.6 million; teto do custo por pedido (US Entity): 34" | fatos-medidas-r2.py · roteiros/rio-columbia/qc-roteiro/fatos-medidas-r2.txt (as contas do canal) | nova |
| F092 | 26 | So yes, the United States can call on Canada in a flood. | confirmada | "Canada shall, when called upon by an entity designated by the United States of America for that purpose" | Tratado, Art. IV(3) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | levada |
| F209 | 26 | And no number says when. | confirmada | "is not currently defined in the Treaty and is likely to be an important point in negotiations" | CRS R43287, nota 39 (L15) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | nova |
| F093 | 26 | Under the deal, it pays so the room is already there, call or no call. | confirmada | "pre-planned FRM operations under the Interim FRM Period Entity Agreement would be distinct from and in no way" | Nota diplomática dos EUA, 22/11/2024 (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf | rejulgada |
| F210 | 26 | Under the deal, it pays so the room is already there, call or no call. | confirmada | "pre-planned flood storage per operating year at Hugh Keenleyside Dam" | Public Law 118-272, sec. 1152 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | nova |
| F211 | 26 | The treaty is the promise. The deal is the room. | confirmada | L: the listener concludes that the on-call help comes from the treaty and the set yearly room from the interim deal and its payment (apoio: F092, F093) | F092, F093 · — | nova |
| F094 | 26 | What the United States is buying is certainty. | confirmada | L: the listener concludes that the payment buys a set amount of empty space every year, whether or not a call comes (apoio: F093, F082) | F093, F082 · — | levada |
| F187 | 27 | Not about whether Canada could shut the river off. | confirmada | L: the listener concludes that Canada cannot keep the river from reaching the United States, only shift when it comes (apoio: F102) | F102 · — | rejulgada |
| F095 | 27 | As a tariff fight between the two countries grew, CBC News asked wh… | confirmada | "Could ending a water treaty help Canada fight U.S. tariffs?" | CBC News, vídeo 'Could ending a water treaty help Canada fight U.S. tariffs?' (registro da Sala em concorrencia.md) · o vídeo da CBC News no YouTube: o título foi lido pela Sala no navegador do app, com o oEmbed, em 09/11/2026 (pautas/rio-columbia/_trabalho/concorrencia.md); o YouTube recusa a leitura automática | rejulgada |
| F212 | 27 | As a tariff fight between the two countries grew, CBC News asked wh… | confirmada | "Trade tensions between Canada and the United States have escalated rapidly since Trump took office" | CFJC/Canadian Press, 25/03/2025 · https://cfjctoday.com/2025/03/25/b-c-energy-minister-says-treaty-not-a-bargaining-chip-in-u-s-trade-dispute/ | nova |
| F213 | 27 | As a tariff fight between the two countries grew, CBC News asked wh… | confirmada | "Canada + United States = 2 países" | contagem do verificador sobre a CFJC/CP · roteiros/rio-columbia/qc-roteiro/fatos-medidas-r2.txt (as contas do canal) | nova |
| F096 | 27 | In March 2025, British Columbia's energy minister addressed the idea. | confirmada | "The session was hosted by Adrian Dix, Minister of Energy and Climate Solutions and Minister Responsible for the Columbia River Treaty" | BC, página do tratado (lida em 12/11/2026) · https://engage.gov.bc.ca/columbiarivertreaty/ (lida em 12/11/2026) | rejulgada |
| F097 | 27 | In March 2025, British Columbia's energy minister addressed the idea. | confirmada | "Dix says there has been speculation about how the treaty could potentially be used" | CFJC/Canadian Press, 25/03/2025 · https://cfjctoday.com/2025/03/25/b-c-energy-minister-says-treaty-not-a-bargaining-chip-in-u-s-trade-dispute/ | rejulgada |
| F214 | 27 | In March 2025, British Columbia's energy minister addressed the idea. | confirmada | "The Province of B.C. hosted a virtual information session March 25, 2025, to share updates" | BC, página do tratado (lida em 12/11/2026) · https://engage.gov.bc.ca/columbiarivertreaty/ (lida em 12/11/2026) | nova |
| F215 | 27 | In March 2025, British Columbia's energy minister addressed the idea. | confirmada | "This report by The Canadian Press was first published March 25, 2025." | CFJC/Canadian Press, 25/03/2025 · https://cfjctoday.com/2025/03/25/b-c-energy-minister-says-treaty-not-a-bargaining-chip-in-u-s-trade-dispute/ | nova |
| F098 | 27 | "Canadian action to terminate the treaty would have little effect o… | confirmada | "Canadian action to terminate the treaty would have little effect on the current dispute." | CFJC/Canadian Press, 25/03/2025 · https://cfjctoday.com/2025/03/25/b-c-energy-minister-says-treaty-not-a-bargaining-chip-in-u-s-trade-dispute/ | levada |
| F099 | 27 | "Canadian action to terminate the treaty would have little effect o… | confirmada | "would have little effect on the current dispute and would obviously involve losses on all sides,” he said" | OPB, 28/03/2025 · https://www.opb.org/article/2025/03/27/canadian-leaders-hope-trade-negotiations-wont-derail-columbia-river-treaty/ | levada |
| F100 | 27 | For one thing, leaving takes ten years' written notice, and nothing… | confirmada | "if it has delivered at least ten years written notice to the other of its intention to terminate the Treaty" | Tratado, Art. XIX(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | levada |
| F101 | 27 | For one thing, leaving takes ten years' written notice, and nothing… | confirmada | "To date, neither country has given notice of termination" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F102 | 28 | Together, the three treaty lakes in Canada can store as much water … | confirmada | "The Dalles: 41.5 dias = 5.9 semanas (about 6)" | p_contas.py e fatos-medidas-contas.py · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F103 | 28 | Together, the three treaty lakes in Canada can store as much water … | confirmada | "helped fund the construction of the three Treaty dams in Canada" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 | levada |
| F104 | 28 | Together, the three treaty lakes in Canada can store as much water … | confirmada | "Canada shall provide in the Columbia River basin in Canada 15,500,000 acre-feet of storage" | Tratado, Art. II(1) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf | levada |
| F105 | 28 | Measured against the river as it runs through British Columbia, nea… | confirmada | "Birchbank: 110.0 dias = 3.61 meses (closer to 3.5 than to 4)" | p_contas.py e fatos-medidas-contas.py · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F216 | 28 | Then the lakes are full, and the rest of the river keeps coming. | confirmada | L: the listener concludes that the treaty lakes fill in weeks to months, after which the river passes (apoio: F102, F105) | F102, F105 · — | nova |
| F106 | 28 | So Canada can't turn the Columbia off. | confirmada | L: the listener concludes that the treaty storage holds only weeks to months of the river, not the whole year (apoio: F102) | F102 · — | levada |
| F107 | 28 | What it can do, under plans agreed with the United States, is decid… | confirmada | "the operations of the Treaty reservoirs in B.C must be agreed to by both Canada and the U.S." | BC Hydro 2026, p. 7 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F108 | 29 | Before the big storage dams went in upstream, on both sides of the … | confirmada | "mês mais cheio: jun 6,134; mais baixo: fev 590; razão 10.4×" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | rejulgada |
| F109 | 29 | With all of them in place, the river's busiest month carries only a… | confirmada | "mês mais cheio: jul 2,753; mais baixo: abr 1,320; razão 2.1×" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F110 | 29 | With all of them in place, the river's busiest month carries only a… | confirmada | "depois (1974–2025): 52 anos; média 2,001 m3/s" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F111 | 29 | With all of them in place, the river's busiest month carries only a… | confirmada | "antes (1938–1967): 30 anos; média 2,026 m3/s" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F188 | 29 | The water wasn't taken away. | confirmada | "depois (1974–2025): 52 anos; média 2,001 m3/s" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F112 | 29 | It was moved: into winter, to make power, and out of spring, to lea… | confirmada | "mai–jul = 31.6 % do volume; dez–fev = 25.8 %" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F113 | 29 | It was moved: into winter, to make power, and out of spring, to lea… | confirmada | "drafted for winter and early spring energy and to ensure space for flood risk management prior to peak snow melt" | BC Hydro 2026, p. 25 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F189 | 30 | And the timing isn't Canada's alone to set. | confirmada | "the operations of the Treaty reservoirs in B.C must be agreed to by both Canada and the U.S." | BC Hydro 2026, p. 7 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F114 | 30 | Canada did not turn over control of its reservoirs to the United St… | confirmada | "Canada did not turn over control of its reservoirs to the U.S. Rather, the operations of the Treaty reservoirs in B.C must be agreed to by both Canada and the U.S." | BC Hydro 2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F177 | 30 | Canada did not turn over control of its reservoirs to the United St… | confirmada | "quem acerta a operação das barragens do tratado (BC Hydro 2026, p. 7): both Canada and the U.S. = 2 lados" | contagem do verificador sobre a BC Hydro · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F115 | 31 | And for every spring of the deal, the United States pays to have on… | confirmada | "pre-planned flood storage per operating year" | Public Law 118-272, sec. 1152 · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | levada |
| F116 | 32 | Stand on the shore of the Arrow Lakes in late winter, when the wate… | confirmada | "the reservoir reached its minimum level of 427.15 metres (1,401.4 feet) on February 4, 2017" | BC Hydro 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf | levada |
| F117 | 32 | There's a wide strip of bare ground between the lake and the trees. | confirmada | "for Arrow Lakes Reservoir is between 440.1 metres (1,444 feet) and 419.9 metres (1,377.9 feet)" | BC Hydro 2026, p. 21 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F118 | 32 | By summer, the water will cover it. | confirmada | "434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June" | BC Hydro 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf | levada |
| F119 | 32 | Part of that strip is the room, seen from the ground. | confirmada | "Arrow Lakes Reservoir provides 7.1 MAF of Treaty storage" | BC Hydro 2026, p. 21 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | rejulgada |
| F217 | 32 | Part of that strip is the room, seen from the ground. | confirmada | "reserving and operating 3,600,000 acre- feet of pre-planned flood storage per operating year at Hugh Keenleyside Dam" | Public Law 118-272, sec. 1152 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | nova |
| F120 | 32 | Before the treaty dams, people lived along these valleys. | confirmada | "Approximately 2,300 people were displaced and more than a dozen small communities were inundated primarily in the Arrow Lakes and Koocanusa Reservoirs" | BC, A Review of the Range of Impacts and Benefits, 2012 (F6) · https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf | levada |
| F121 | 33 | The government of British Columbia puts the count at about 2,300 pe… | confirmada | "Approximately 2,300 people were displaced and more than a dozen small communities were inundated" | BC, Review 2012 (F6) · https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf | levada |
| F122 | 33 | Some, like Edgewood and Burton, were relocated. | confirmada | "Relocation of the communities of Edgewood, Fauquier and Burton" | BC, Review 2012 (F6) · https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf | levada |
| F123 | 33 | Renata no longer exists. | confirmada | "Some communities such as Renata, no longer exist" | BC, Review 2012 (F6) · https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf | levada |
| F124 | 33 | Farther north, the river's big bend in British Columbia went under … | confirmada | "Formerly the "Big Bend" area of the Columbia River, and named for the former town of Mica Creek, drowned under the pondage." | BC Geographical Names (F16) · https://apps.gov.bc.ca/pub/bcgnws/names/51532.html | levada |
| F125 | 33 | As for how residents and First Nations were consulted, the province… | confirmada | "First Nations and public consultation and mitigation at the time could be considered inadequate to non-existent by today’s standards" | BC, About the Columbia River Treaty (F5) · https://engage.gov.bc.ca/columbiarivertreaty/ (a página About, pela API WordPress do site; fatos-a, F5) | levada |
| F130 | 34 | The Arrow Lakes lie in the traditional territory of the Sinixt. | confirmada | "only 21 Sinixt still lived on their traditional territory in Canada, in the Arrow Lakes Band reserve" | R. v. Desautel, 2021 SCC 17, §6 (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do | levada |
| F131 | 34 | The Arrow Lakes lie in the traditional territory of the Sinixt. | confirmada | "The place where he shot the elk was within this territory." | SCC, Case in Brief (F11) · https://scc-csc.ca/judgments-jugements/cb/2021/38734/ | levada |
| F132 | 34 | In 1956, the government of Canada declared the Arrow Lakes Band ext… | confirmada | "after her death in 1956, the gov- ernment of Canada declared the Arrow Lakes Band extinct" | R. v. Desautel, §6 (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do | levada |
| F133 | 34 | Decades later, the Supreme Court of Canada wrote those words in a r… | confirmada | "R. v. DESAUTEL [2021] 1 S.C.R." | R. v. Desautel (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do | rejulgada |
| F218 | 34 | Decades later, the Supreme Court of Canada wrote those words in a r… | confirmada | "after her death in 1956, the gov- ernment of Canada declared the Arrow Lakes Band extinct" | R. v. Desautel, 2021 SCC 17, §6 · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do | nova |
| F134 | 34 | It found that a successor group of the Sinixt, based in Washington … | confirmada | "Accordingly, the Lakes Tribe is an Aboriginal people of Canada." | R. v. Desautel (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do | rejulgada |
| F135 | 34 | It found that a successor group of the Sinixt, based in Washington … | confirmada | "the Lakes Tribe are a modern successor of the Sinixt" | R. v. Desautel (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do | rejulgada |
| F136 | 34 | It found that a successor group of the Sinixt, based in Washington … | confirmada | "Lakes Tribe of the Colville Confederated Tribes based in the State of Washington" | R. v. Desautel, §4 (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do | rejulgada |
| F129 | 35 | And the river had lost something even before the treaty dams. | confirmada | "1941 → 1967/1973 = 26/32" | p_contas.py · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | rejulgada |
| F219 | 35 | And the river had lost something even before the treaty dams. | confirmada | "Grand Coulee Dam stopped the natural migratory runs of fish on the upper Columbia River." | Reclamation, Grand Coulee FAQ · https://www.usbr.gov/pn/grandcoulee/about/faq.html | nova |
| F126 | 35 | Grand Coulee Dam, built by the United States far downstream and fin… | confirmada | "the original dam structure and Left Powerhouse completed in 1941" | Bureau of Reclamation, Grand Coulee FAQ (F10) · https://www.usbr.gov/pn/grandcoulee/about/faq.html | levada |
| F127 | 35 | Grand Coulee Dam, built by the United States far downstream and fin… | confirmada | "Grand Coulee Dam stopped the natural migratory runs of fish on the upper Columbia River." | Bureau of Reclamation (F10) · https://www.usbr.gov/pn/grandcoulee/about/faq.html | levada |
| F128 | 35 | Grand Coulee Dam, built by the United States far downstream and fin… | confirmada | "This included the second most important salmon fishery on the Columbia River at Kettle Falls" | Bureau of Reclamation (F10) · https://www.usbr.gov/pn/grandcoulee/about/faq.html | levada |
| F190 | 37 | As the paid years ended, each side gave something up. | confirmada | "Beginning August 1, 2024, the Canadian Entitlement decreased by 37%." | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F137 | 37 | Canada agreed to a smaller share of the power. | confirmada | "Beginning August 1, 2024, the Canadian Entitlement decreased by 37%." | CRS R43287 (o Departamento de Estado, 25/11/2024) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | rejulgada |
| F220 | 37 | The cut was more than a third. | confirmada | "Beginning August 1, 2024, the Canadian Entitlement decreased by 37%." | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | nova |
| F221 | 37 | The cut was more than a third. | confirmada | "corte da parte do Canadá: 37 % contra 1/3 = 33.3 %: True (more than a third)" | fatos-medidas-r2.py · roteiros/rio-columbia/qc-roteiro/fatos-medidas-r2.txt (as contas do canal) | nova |
| F139 | 37 | The United States agreed to pay by the year for room it used to hav… | confirmada | "The United States is expected to compensate Canada for preplanned FRM by providing US$ 37.6 million per year, indexed to inflation" | BC, AIP Public Description (L4) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/09/CRT-AIP-Canada-public-description-Final_2024Aug30.pdf | levada |
| F141 | 38 | The American agencies that run the treaty once estimated that endin… | confirmada | "net annual revenues for the United States would increase by about $180 million to $280 million" | CRS R43287, nota 26 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | rejulgada |
| F142 | 38 | The American agencies that run the treaty once estimated that endin… | confirmada | "Columbia River Treaty 2014/2024 Review: Recent Study Results,” June 2012" | CRS R43287, nota 12 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | rejulgada |
| F143 | 38 | The American agencies that run the treaty once estimated that endin… | confirmada | "largely due to the termination of the Canadian Entitlement" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | rejulgada |
| F222 | 38 | The American agencies that run the treaty once estimated that endin… | confirmada | "under a Treaty termination scenario, the United States would gain significant revenue" | CRS R43287, nota 44 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | nova |
| F145 | 38 | British Columbia disputed those assumptions. | confirmada | "It disputed several assumptions in the U.S. Entity’s review process." | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F146 | 38 | British Columbia disputed those assumptions. | confirmada | "the Canadian Entity (the Province of British Columbia)" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F147 | 38 | Its argument is that the treaty makes the river dependable, and tha… | confirmada | "Canada has argued that the reliability of operations provided for under the Treaty allows for generation that is worth more to the United States than the Canadian Entitlement" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F148 | 38 | Its argument is that the treaty makes the river dependable, and tha… | confirmada | "To date, Canada has not produced estimates of the cost of this lack of reliability. British Columbia U.S. Benefits Study" | CRS R43287, nota 43 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F151 | 39 | The payment for the room is federal: Congress authorized it. | confirmada | "is authorized to compensate, and make arrangements with, the Government of Canada" | Public Law 118-272, sec. 1152 · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | levada |
| F152 | 39 | Canada's share is power, and part of the bill for that power falls … | confirmada | "supplying the United States with 27.5% of the power the U.S. was obligated to return to Canada" | APPA, 25/09/2026 (lida em 12/11/2026) · https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments | rejulgada |
| F223 | 39 | Canada's share is power, and part of the bill for that power falls … | confirmada | "the Mid-Columbia PUDs will pay for 25% of the reduced Canadian Entitlement (CE) obligations" | The Star (Grand Coulee), 30/09/2026 · https://www.grandcoulee.com/story/2026/09/30/news/puds-settle-suit-with-us-over-columbia-river-treaty-payments/19602.html | nova |
| F153 | 39 | Three of them, in Washington State, went to court and stopped payin… | confirmada | "The Mid-Columbia PUDs initiated litigation in June 2024" | APPA, 25/09/2026 · https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments | rejulgada |
| F224 | 39 | Three of them, in Washington State, went to court and stopped payin… | confirmada | "The three Mid-Columbia River public utility districts, Chelan, Grant and Douglas, approved a settlement agreement" | APPA, Paul Ciampoli, 25/09/2026 · https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments (lida em 12/11/2026) | nova |
| F225 | 39 | Three of them, in Washington State, went to court and stopped payin… | confirmada | "the Mid-Columbia PUDs stopped contributing to the CE in September 2024" | APPA, Paul Ciampoli, 25/09/2026 · https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments (lida em 12/11/2026) | nova |
| F226 | 39 | Three of them, in Washington State, went to court and stopped payin… | confirmada | "Ending Litigation Over Columbia River Treaty Payments September 25, 2026" | APPA, Paul Ciampoli, 25/09/2026 · https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments (lida em 12/11/2026) | nova |
| F227 | 39 | Three of them, in Washington State, went to court and stopped payin… | confirmada | "resolve ongoing litigation with the U.S. government" | APPA, Paul Ciampoli, 25/09/2026 · https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments (lida em 12/11/2026) | nova |
| F228 | 39 | Three of them, in Washington State, went to court and stopped payin… | confirmada | "are owned and operated by three Washington state public utility" | BPA, Record of Decision, 1999 · https://www.bpa.gov/-/media/Aep/about/publications/records-of-decision/1999-rod/rod-19990331-delivery-of-canadian-entitlement-final-environmental-impact-statement-supplement.pdf | nova |
| F154 | 40 | Shortly before the paid years ended, the two governments announced … | confirmada | "announced an agreement in principle on terms of modernization of the Treaty on July 11, 2024" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F178 | 40 | Shortly before the paid years ended, the two governments announced … | confirmada | "announced an agreement in principle between the two countries on the terms for modernization of the Treaty" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F155 | 40 | It has not been finalized. | confirmada | "Until a new Treaty is finalized, operations are subject to current Treaty requirements." | BC Hydro 2026, p. 8 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | levada |
| F156 | 40 | In March 2025, British Columbia's government announced that the Uni… | confirmada | "The U.S. has paused negotiations with Canada on an amended Columbia River Treaty." | BC News, 11/03/2025 · https://news.gov.bc.ca/releases/2025ECS0009-000191 | levada |
| F157 | 40 | In March 2025, British Columbia's government announced that the Uni… | confirmada | "Victoria Tuesday, March 11, 2025" | BC News, 11/03/2025 · https://news.gov.bc.ca/releases/2025ECS0009-000191 | levada |
| F158 | 40 | Canada's delegation to them includes representatives of three First… | confirmada | "The Canadian delegation is made up of federal, provincial and First Nation representatives from the Ktunaxa, the Syilx-Okanagan and the Secwépemc Nations" | Global Affairs Canada, Question Period Note, 28/05/2025 · https://search.open.canada.ca/qpnotes/record/dfatd-maecd%2C00019-2025 | levada |
| F159 | 40 | Canada's delegation to them includes representatives of three First… | confirmada | "Ktunaxa, Syilx-Okanagan, Secwépemc = 3 nações" | contagem do verificador sobre a nota da GAC · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) | levada |
| F160 | 40 | As of August 2026, the magazine Canadian Geographic reported that t… | confirmada | "At the time of writing, the negotiations are still paused" | Canadian Geographic, 17/08/2026 · https://canadiangeographic.ca/articles/we-want-to-let-the-salmon-know-were-still-here/ | levada |
| F161 | 40 | As of August 2026, the magazine Canadian Geographic reported that t… | confirmada | "in the age of Trump Aug 17, 2026" | Canadian Geographic, 17/08/2026 · https://canadiangeographic.ca/articles/we-want-to-let-the-salmon-know-were-still-here/ | levada |
| F162 | 41 | The temporary deal can cover up to three flood seasons, and the spr… | confirmada | "operations for up to three consecutive operating years for which the U.S. Entity elects for the provision of those operations by compensating the Canadian Entity. The Interim FRM Period is defined to run until the earliest of the first July 31 following the entry into force of the Modernized Treaty, or July 31, 2027." | Nota diplomática dos EUA, 22/11/2024 (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf | levada |
| F163 | 41 | The law that authorizes the payment expires at the end of August 20… | confirmada | "shall expire on August 31, 2027" | Public Law 118-272, sec. 1152(c)(3) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | levada |
| F164 | 41 | A Senate bill would move that date to 2029. | confirmada | "in paragraph (3), by striking ``2027'' and inserting ``2029''" | S. 4949 (RS), sec. 1367 · https://www.govinfo.gov/content/pkg/BILLS-119s4949rs/html/BILLS-119s4949rs.htm | rejulgada |
| F229 | 41 | A Senate bill would move that date to 2029. | confirmada | "subsection shall expire on August 31, 2027" | Public Law 118-272, sec. 1152 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | nova |
| F230 | 41 | A Senate bill would move that date to 2029. | confirmada | "Placed on Senate Legislative Calendar under General Orders. Calendar No. 457." | govinfo, BILLSTATUS do S. 4949 (lido em 12/11/2026) · https://www.govinfo.gov/bulkdata/BILLSTATUS/119/s/BILLSTATUS-119s4949.xml | nova |
| F165 | 41 | The treaty itself remains in force, on-call promise, missing number… | confirmada | "recognizes that the scope of the Treaty, which remains in force" | Nota diplomática dos EUA, 22/11/2024 (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf | levada |
| F166 | 42 | By the end of winter, the mountains above the Arrow Lakes are holdi… | confirmada | "Approximately 60% of this runoff occurs in May, June, and July." | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) | levada |
| F167 | 42 | Down in the valley, the lake is at its lowest point of the year, wi… | confirmada | "the reservoir reached its minimum level of 427.15 metres (1,401.4 feet) on February 4, 2017" | BC Hydro 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf | levada |
| F168 | 43 | Through May and June, the creeks fill, the river rises, and the lak… | confirmada | "434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June" | BC Hydro 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf | levada |
| F169 | 43 | Part of a flood that would have reached Portland stays up in the va… | confirmada | "to minimize the flood risk in the Columbia River Basin" | Public Law 118-272, sec. 1152 · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) | levada |
| F191 | 44 | Next winter, the lake will drop again, and the snow will come back. | confirmada | "Since then, the reservoir has been drafting to meet Treaty flood control requirements." | BC Hydro 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf | levada |
| F170 | 44 | For now, the United States pays to have that room waiting. | confirmada | "required to pay Canada annual payments of USD" | BC Hydro 2026, p. 7 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) | rejulgada |
| F171 | 44 | And the spring of 2027 is as far as this deal can reach. | confirmada | "following the entry into force of the Modernized Treaty, or July 31, 2027." | Nota diplomática dos EUA (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf | levada |

NOTA: 9.0/10

VEREDITO: PASS
