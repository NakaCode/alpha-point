# Laudo · verificador de fatos · roteiro r1 · rio-columbia (vídeo 7)

Revisão julgada: `7a691f44b99d` · data-base 12/11/2026 (leituras na web entre ~23h de 11/11 e ~00h45 de 12/11, hora de Brasília)

COBERTURA: 183 de 191

As 191 linhas de `roteiros/rio-columbia/qc-roteiro/fatos-tabela.json` têm veredito: 183 "confirmada" (7 delas linhas L, de inferência,
cada uma apoiada em linha confirmada), 7 "corrigir"/"atribuir" e 1 "nao_conferida". **Como a lista foi derivada:** o canal não tem extrator
de afirmações para este vídeo; a lista saiu da **leitura integral, à mão**, do texto falado (44 parágrafos; 182 frases contadas sem partir
os decimais 37.6, 64.4 e 3.6, que o gate conta como 185). Cada frase com número, data, nome, citação, atribuição, superlativo, causa ou
mecanismo recebeu pelo menos uma linha: **142 das 182 frases têm linha**. As outras 40 não afirmam nada checável e estão listadas uma a
uma no fim (NADA A CHECAR). O piso por parágrafo do `portao-fatos` passou nos 44. O texto foi CHECADO POR INTEIRO.

NOTA: 7.5/10. Os números que sustentam a tese conferem todos, na fonte primária ou na conta refeita: os US$ 37,6 mi da lei, os 3,6
milhões de acre-pés, a citação da lei letra a letra, o gatilho do CRS (450–650 mil e 600 mil), os picos (40 de 89; 0 e 6 desde 2009), os
39 % e os 87 anos, as semanas e os meses de rio, as 10 e as 2 vezes. Segura a nota: sete frases periféricas que dizem um pouco mais (ou
um pouco diferente) do que a fonte, e uma data que não se pôde ler. Nenhuma REFUTADA. É a primeira rodada deste texto: não há nota
anterior para comparar.

## Os itens que pedem troca (a frase de agora → a troca proposta)

Cada troca é uma frase, para a Sala aplicar sem reescrever o parágrafo (a 4 pede duas, porque a segunda se apoia na data da primeira).

1. **[MÉDIO] p41 · "Bills in both chambers would." · `corrigir`** (DIVERGE)
   - Troca: **"A Senate bill would move that date to 2029."**
   - Por quê: só o S. 4949 (sec. 1367; reportado pelo comitê EPW em 15/07/2026, no calendário do Senado) muda a (c)(3), o fim em
     31/08/2027, para 2029. O H.R. 9497, aprovado pela Câmara em 16/09/2026 (415 a 9), muda só a (c)(2), as verbas ("2026 through 2030"),
     e deixa o fim de agosto de 2027 intacto (`midia/rio-columbia/fontes/texto/d__govinfo-hr9497eh.html.txt`: "Section 8309(c)(2) [...] is
     amended by striking ``2026 and 2027'' and inserting ``2026 through 2030''"; não há outra emenda à 8309 no texto aprovado).
     Nenhum dos dois é lei: o BILLSTATUS do govinfo (`fontes/web/govinfo-billstatus-*.xml`, lido hoje; atualizados em 29/09 e 08/09/2026)
     para em "Received in the Senate" (17/09/2026) e em "Calendar No. 457", e a busca de hoje não achou votação no Senado nem sanção.
     Volátil: reler antes da voz.
   - RAIZ: INSTRUÇÃO. A frase veio pronta de `pautas/rio-columbia/_trabalho/fatos-c.md` ("O que muda no roteiro", item 8), que a sugere
     logo depois de registrar, na própria tabela (13c), que o projeto da Câmara não mexe no sunset.

2. **[MÉDIO] p25 · "Beside the American figure, the yearly payment looks steep. Beside the Canadian one, it looks cheap." · `corrigir`**
   - Troca: **"Beside the American figure, which is per call, the yearly payment looks steep. Beside the Canadian one, which is per year, it looks cheap."**
   - Por quê: põe os US$ 37,6 mi por ano ao lado de um custo **por pedido** (4 a 34 mi, a US Entity) e de um custo **por ano** (40 a 150 mi,
     a Entidade Canadense), sem dizer que as unidades diferem. O "steep" só vale com no máximo um pedido por ano, e ninguém mediu quantos
     haveria (pauta §4.3: a conta "não mede quantas vezes o 'on-call' teria sido preciso"). Com a unidade na voz, o ouvinte compara
     sozinho. Se a Sala preferir, as duas frases saem sem derrubar o parágrafo (nota 4 do escritor).
   - RAIZ: PONTUAL (leitura do canal acrescentada na escrita).

3. **[MÉDIO] p37 · "As for what Canada's share is worth, BC Hydro puts it at between 110 and 400 million dollars a year." · `corrigir`**
   - Troca: **"As for what Canada's share is worth, BC Hydro says it's typically between 110 and 400 million a year."**
   - Por quê: o slide (`fontes/sala/bchydro-ops-update-2026-06-23.pdf`, p. 7) diz "typically worth between $110 - $400 million per year",
     **sem moeda**, e na mesma página marca o pagamento americano como "USD $37.6M". A BC Hydro é canadense: o "$" sem marca pode ser
     dólar canadense, e não se leu qual é. Depois de cinco "dollars" americanos na voz, "dollars" soa como US$; sem a palavra, o número
     fica com o dono e com o "typically" da fonte. **Na tela, nunca "US$"**: "$110–400 MILLION A YEAR · BC HYDRO, 2026 (CURRENCY NOT
     STATED)", ou a moeda que a Sala ler na BC Hydro. O slide também não diz se a faixa é de antes ou de depois do corte de 37 % (é o valor
     "típico" da parte de 50 %): a frase não deve ganhar "now" nem "after the cut".
   - RAIZ: INSTRUÇÃO (pauta §4.5: "between about 110 and 400 million dollars a year, by BC Hydro's count").

4. **[LEVE] p27 · a data da CBC · `nao_conferida`** (NÃO FOI CHECADO: a origem recusa robô)
   - Agora: "In 2025, as a tariff fight between the two countries grew, CBC News asked whether ending this treaty could help Canada fight
     back." e "That March, British Columbia's energy minister addressed the idea."
   - Troca: **"As a tariff fight between the two countries grew, CBC News asked whether ending this treaty could help Canada fight back."**
     e **"In March 2025, British Columbia's energy minister addressed the idea."**
   - Por quê: a data do vídeo da CBC não se leu. A cbc.ca recusa robô (403, já registrado pela pauta e pela Sala), o YouTube recusou a
     leitura automática, e a pauta só tem o "~1 ano" da busca do YouTube (`concorrencia.md`). Um resumo de busca de hoje diz "fevereiro de
     2025", e resumo não vale como leitura. A troca tira a data que não se leu e põe a que se leu (a sessão de Dix, 25/03/2025, na página
     do tratado da BC, relida hoje). **Se a Sala ler a data no navegador do app e ela for de 2025, o texto fica como está.**
   - RAIZ: INSTRUÇÃO (pauta §4.3, K8: "In 2025, as the tariff fight grew, CBC News asked…", com "a data exata, a ler").

5. **[LEVE] p14 · "Canada answered with a plan to divert much of the upper Columbia for its own use." · `atribuir`**
   - Troca: **"Canada answered, by the US Congressional Research Service's account, with a plan to divert much of the upper Columbia for its own use."**
   - Por quê: uma fonte só, secundária, e sem nota de fonte no CRS ("Canada was opposed to this solution, and as a response proposed to
     divert as much as 15.5 MAF from the Columbia River for its own purposes"); a pauta (K7, §4.2) mandou dizer com o dono. O fato confere
     com o CRS ("answered" = "as a response"); falta o dono na voz. A fonte primária (a IJC, McNaughton) não se leu.
   - RAIZ: PONTUAL (o escritor guardou o dono para o ato 3, nota 5).

6. **[LEVE] p21 · "British Columbia assumed it would be called only at 600,000, a flood it expected to be rare." · `corrigir`**
   - Troca: **"British Columbia assumed it would be called only at 600,000, a flood expected to be rare."**
   - Por quê: o 600 mil é a suposição da Entidade Canadense (confere). O "(which is expected to be rare)" é um parêntese do CRS, na voz do
     relatório, sem dizer quem espera; a frase de agora o põe na boca da BC. Sem o "it", a frase volta ao que a fonte diz.
   - RAIZ: INSTRUÇÃO (a frase segura da pauta, §4.3: "which it expected to be rare").

7. **[LEVE] p39 · "Three of them, in Washington State, stopped paying their part and went to court, and in September 2026 they settled with the federal government." · `corrigir`**
   - Troca: **"Three of them, in Washington State, went to court and stopped paying their part, and in September 2026 they settled with the federal government."**
   - Por quê: lidas hoje na origem, a APPA (25/09/2026) e a The Star (30/09/2026) dizem "The Mid-Columbia PUDs initiated litigation in June
     2024" e "stopped contributing to the CE in September 2024 when their existing contracts requiring those payments expired"; o acordo
     foi aprovado e anunciado em 25/09/2026. A frase de agora inverte a ordem (pararam, depois foram à Justiça). Chelan, Douglas e Grant são
     "three Washington state public utility districts" (BPA, ROD de 1999). O resto confere: o acordo é com o governo dos EUA ("ongoing
     litigation with the U.S. government"), e as PUDs davam 27,5 % da energia devolvida ao Canadá.
   - RAIZ: PONTUAL.

8. **[LEVE] p32 · "That strip is the room, seen from the ground." · `corrigir`**
   - Troca: **"Part of that strip is the room, seen from the ground."**
   - Por quê: a faixa exposta no fim do inverno é o rebaixamento inteiro do Arrow (a faixa licenciada vai de 1.377,9 a 1.444 pés; 7,1 MAF de
     armazenamento do tratado), maior que os 3,6 MAF pagos que o gancho chama de "that empty space". Quem guardou o gancho ouve que a
     faixa toda é o espaço pago. O escritor já tinha apontado (nota 17).
   - RAIZ: PONTUAL.

**Para a tela** (o `redator-de-tela`; não é troca de voz): a pauta §8 previa "88 YEARS OF GAUGES": vira **87 YEARS** (item 1 abaixo).
O "$110–400 MILLION" vai sem "US$" (item 3 acima). O "1974–2008: DAILY AVERAGES" da pauta continua obrigatório junto dos picos.

## As dúvidas que a Sala pediu para olhar primeiro

1. **"for the 87 years they share" → CONFIRMADA (87).** Refeita a conta (`a_calc_fracoes.py`, em `fatos-medidas.txt`): "Birchbank/The
   Dalles 1938-2024 n=87: 71,191 / 181,213 cfs = 39.3 %". Os 88 da pauta são os anos completos de Birchbank sozinha (1938–2025); a série
   anual de The Dalles termina em 2024, e os anos casados são 87. O escritor está certo; a tela da pauta (§8) tem de seguir: 87.
2. **"between 110 and 400 million dollars a year" → `corrigir`** (item 3 acima): sem moeda na fonte; a forma honesta tira "dollars" da
   voz, põe o "typically" da fonte, e a tela diz que a moeda não foi dada.
3. **"Bills in both chambers would." → `corrigir`** (item 1 acima). A leitura da Sala confere: a Câmara mexe só na (c)(2). Hoje (12/11/2026)
   nenhum dos dois virou lei (BILLSTATUS do govinfo; a busca não achou votação no Senado nem sanção). O congress.gov não foi tentado:
   já pediu verificação de robô à Sala em 09/11.
4. **Os 4 a 34 milhões por pedido e os 40 a 150 por ano → CONFIRMADAS**, letra a letra no CRS (notas 40 e 41). "once estimated" cabe no
   "has previously estimated". O dono "British Columbia's estimate" cabe na "Canadian Entity" (o CRS: "the Canadian Entity (the Province
   of British Columbia)"; a nota 40 é o "British Columbia U.S. Benefits Study", cuja data não se leu). As duas de leitura ("steep" /
   "cheap") → `corrigir` (item 2 acima).
5. **O desvio canadense sem dono → `atribuir`** (item 5 acima).
6. **As três empresas → lidas na origem hoje** (APPA e The Star, cópias em `fontes/web/`): a Justiça, a parada, o acordo de setembro de
   2026 e Washington conferem; a ordem não (item 7 acima).
7. **"British Columbia disputed those assumptions. Its argument is that…" → CONFIRMADA.** O CRS escreve "Canada has argued that the
   reliability of operations…", mas no parágrafo que cita o "British Columbia U.S. Benefits Study" (notas 42 e 43), e chama a Entidade
   Canadense de "the Province of British Columbia". "Its argument" (o da BC) é atribuição justa; "Canada's argument" também seria.
8. **O relógio e a certeza:** "The temporary deal can cover up to three flood seasons, and the spring of 2027 is the third." → CONFIRMADA
   (a nota de 22/11/2024: "up to three consecutive operating years", até "July 31, 2027"; o ano de operação vai de agosto a julho; a
   BC Hydro, 06/2026: "for 3 years"). "call or no call" → CONFIRMADA: a mesma nota diz que o pré-planejado "would be distinct from and in
   no way related to" o called-upon. "What the United States is buying is certainty." → linha L, apoiada na lei e na nota (é a leitura do
   canal que a pauta deixou para o Lucas). "That strip is the room" → `corrigir` (item 8). "Every year, before the spring snowmelt… is
   emptied on purpose" junto de "starting with the 2025 flood season" → CONFIRMADA: o rebaixamento de cheia é anual desde as barragens
   (BC Hydro 2018: "drafting to meet Treaty flood control requirements"), e o pagamento por ele começou em 2025; as duas frases dizem
   coisas diferentes, e as duas conferem.
9. **A CBC → `nao_conferida`** (item 4 acima). **"The Arrow Lakes lie in the traditional territory of the Sinixt." → CONFIRMADA** (R. v.
   Desautel, §6: "only 21 Sinixt still lived on their traditional territory in Canada, in the Arrow Lakes Band reserve"; o Case in Brief:
   o alce foi abatido "in the Arrow Lakes region", e "The place where he shot the elk was within this territory").
   **"the Lakes Tribe, a successor group of the Sinixt based in Washington State" → CONFIRMADA** (o acórdão: "Lakes Tribe of the Colville
   Confederated Tribes based in the State of Washington"; "the Lakes Tribe are a modern successor of the Sinixt"; "Accordingly, the Lakes
   Tribe is an Aboriginal people of Canada").
10. **Os voláteis, lidos hoje (12/11/2026):** abaixo.

## Os voláteis que ficaram na fala (data-base 12/11/2026)

| Frase | Estado lido | O que a faz mudar | Fonte mais nova |
|---|---|---|---|
| "Their talks have been paused since March 2025." (p3); "As of August 2026, … had not resumed." (p40) | pausadas; nenhuma retomada achada | um anúncio de retomada (BC, GAC, Departamento de Estado) | Canadian Geographic, 17/08/2026; a página do tratado da BC, relida hoje: a última notícia é de 04/12/2025, e a última sobre as conversas, de 26/03/2025 |
| "nothing we've read says either side has given it" (p27); "The treaty itself remains in force" (p41) | nenhum aviso de saída achado | um aviso de denúncia (Art. XIX.2) | CRS 12/2024 ("To date, neither country has given notice"); a busca de hoje não achou nenhum |
| "It has not been finalized." (p40) | não finalizado | a assinatura ou a ratificação do tratado novo | BC Hydro, 23/06/2026 |
| "pays" (p1, p39, p44); "the spring of 2027 is the third" (p41) | o pagamento em vigor, os 3 anos | os EUA deixarem de escolher o ano 2026–27; um tratado novo em vigor antes de 31/07/2027 | BC Hydro, 23/06/2026 ("required to pay … for 3 years"); a lei (verbas até o ano fiscal de 2027) |
| "expires at the end of August 2027, unless Congress extends it" (p41) + a troca do item 1 | nenhum projeto virou lei | o Senado votar o S. 4949 ou o texto final da WRDA 2026 mudar a (c)(3) | govinfo, BILLSTATUS (lido hoje; atualizado em 29/09/2026) |

O que zera: uma retomada anunciada zera a p3 e a p40; a WRDA 2026 sancionada com o sunset de 2029 muda o p41 e o fecho (p44, "as far as this
deal can reach" fala do acordo interino, que termina em 31/07/2027 de qualquer jeito, mas a lei passaria a ir além). Reler tudo na véspera
da gravação.

## O que ficou sem leitura (NÃO FOI CHECADO na origem), e a URL

- **A data do vídeo da CBC** (p27): `https://www.youtube.com/` (o YouTube recusou a leitura automática à pauta; não se tentou de novo) e
  `https://www.cbc.ca/` (403 para o leitor B e para a Sala; não se tentou). A Sala lê no navegador do app.
- **congress.gov** (H.R. 9497 e S. 4949): pediu verificação de robô à Sala em 09/11/2026; não se tentou. O estado veio do BILLSTATUS do
  govinfo.gov, que é a cópia oficial em lote.
- Nada foi tentado e recusado nesta rodada: os quatro pedidos de hoje (APPA, The Star, a página do tratado da BC, os dois BILLSTATUS)
  deram 200, um por vez, com o User-Agent do canal (`baixar.py`). As buscas de hoje (WebSearch) só serviram para achar URLs e o estado da
  WRDA; o que veio só delas não entrou como leitura.

## A lista de nomes (o anônimo da voz → quem é)

| Na voz | Quem é | Credencial | Onde |
|---|---|---|---|
| "The American agencies that run the treaty" (p25, p38); "American planners" (p21) | a US Entity: a Bonneville Power Administration (o administrador preside) e a Northwestern Division do US Army Corps of Engineers | as duas agências designadas pelo Art. XIV | CRS R43287, nota 2 (`fontes/texto/b__crs-r43287-everycrs.html.txt`) |
| "British Columbia's energy minister" (p27) | Adrian Dix | Minister of Energy and Climate Solutions and Minister Responsible for the Columbia River Treaty | https://engage.gov.bc.ca/columbiarivertreaty/ (lida hoje); https://cfjctoday.com/2025/03/25/b-c-energy-minister-says-treaty-not-a-bargaining-chip-in-u-s-trade-dispute/ |
| "the US Geological Survey's account" (p12) | S. E. Rantz e H. C. Riggs | autores do USGS Water-Supply Paper 1080 (1949) | https://pubs.usgs.gov/wsp/1080/report.pdf |
| "the US Congressional Research Service" / "that congressional report" (p21, p38) | Charles V. Stern | Specialist in Natural Resources Policy, CRS (R43287, 03/12/2024) | https://www.everycrsreport.com/reports/R43287.html |
| "the State Department's count" (p37) | o comunicado de 25/11/2024, pelo CRS; a nota de 22/11/2024 é assinada por Brian A. Nichols, "For the Secretary of State" | Departamento de Estado | CRS R43287; `fontes/b/eon-frm-2024-11-22.pdf` |
| "the Supreme Court of Canada, writing decades later" (p35) | o voto da maioria, de Rowe J. | R. v. Desautel, 2021 SCC 17, 23/04/2021 | https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do |
| "representatives of three First Nations" (p40) | Ktunaxa, Syilx-Okanagan e Secwépemc; Nathan Matthew é "the Secwépemc Nation lead to the Canadian delegation" | Global Affairs Canada (nota de 28/05/2025); Canadian Geographic | https://search.open.canada.ca/qpnotes/record/dfatd-maecd%2C00019-2025 · https://canadiangeographic.ca/articles/we-want-to-let-the-salmon-know-were-still-here/ |
| "the magazine Canadian Geographic" (p40) | David Geselbracht | autor da matéria de 17/08/2026 | a mesma URL |
| "Three of them" (p39) | Chelan, Douglas e Grant County PUDs; os gerentes-gerais Kirk Hudson, Gary Ivory e John Mertlich assinam a nota conjunta | APPA, Paul Ciampoli, 25/09/2026 | https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments |
| "The government of British Columbia puts the count" (p33) | "A Review of the Range of Impacts and Benefits of the Columbia River Treaty" (2012) | governo da Colúmbia Britânica | https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf |

## Os dois padrões mais vistos

1. **O dono que escorrega.** A fonte diz uma coisa com um dono, e a voz a passa a outro, ou a nenhum: o parêntese do CRS vira expectativa
   da BC (p21); o desvio de uma fonte só fica sem dono (p14); a faixa da BC Hydro perde o "typically" e ganha uma moeda que a fonte não
   dá (p37); o "Bills in both chambers" diz do projeto da Câmara o que só o do Senado faz (p41). Quatro dos oito itens nasceram em frase
   pronta da pauta ou das releituras (RAIZ: INSTRUÇÃO): vale conferir as "frases seguras" da pauta contra a cópia antes de passá-las ao
   escritor.
2. **A leitura do canal que junta coisas de medida diferente.** O "steep/cheap" põe um custo por pedido ao lado de um custo por ano (p25);
   o "That strip is the room" põe o rebaixamento inteiro no lugar do espaço pago (p32). O fato de cada lado confere; a ponte entre eles
   diz mais que os dois.

## Como a tabela foi feita (para quem a reler)

- **As cópias em texto.** PDF, HTML e JSON não contam como cópia em texto para o portão: as 72 fontes locais de `a/`, `b/`, `d/` e `sala/`
  ganharam cópia em `midia/rio-columbia/fontes/texto/` (o nome é `<pasta>__<arquivo>.txt`; o PDF pelo PyMuPDF, página a página; o HTML sem
  tags; o JSON pelas cadeias de texto), com a origem e o sha256 dela no cabeçalho. As leituras de hoje estão em `midia/rio-columbia/fontes/web/`
  (o bruto e o `.txt` ao lado, com a URL, a data e o sha256). Ficam fora do git, como `midia/`.
- **As medidas** (`roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt`) são a saída literal de cinco scripts, com o comando no cabeçalho de
  cada bloco: `p_contas.py`, `a_calc_fracoes.py` e `cetico_picos.py`, da pauta; e dois novos, ao lado do laudo: `fatos-medidas-picos.py`
  (os picos de 2009–2025 e os códigos do USGS) e `fatos-medidas-contas.py` (semanas, meses, o terço, a distância de Birchbank à fronteira,
  as faixas e as contagens).
- **Duas limitações do portão, declaradas.** (a) Ele lê "between 4 and 34 million" como 4 e 34.000.000, e a fonte escreve "$4 million and
  $34 million": o bloco D de `fatos-medidas-contas.py` transcreve as três faixas do CRS como a voz as diz (4 e 34; 40 e 150; 180 e 280),
  com a nota de cada uma, e as linhas `medicao` citam essa transcrição ao lado da linha `texto` do CRS. (b) Ele exige no trecho os
  numerais da frase ("two countries", "three First Nations"): o bloco E conta os nomes que a fonte lista (os dois governos das séries, os
  líderes de 16/09/1964, as três nações da GAC). Nenhum número novo entrou por esse caminho.
- **As linhas L** (7) são as conclusões do canal ("So paying Canada for room is as old as the treaty itself", "What the United States is
  buying is certainty", "So Canada can't turn the Columbia off"…): cada uma diz o que o ouvinte conclui e cita a linha confirmada que a apoia.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- "What the United States is buying is certainty." (p26): a pauta (§4.3) deixou a frase para o Lucas. Como fato, ela se apoia na lei e na nota
  de 22/11/2024 (linha L); se fica, é decisão dele.
- Onde gravar o laudo de fatos dos próximos vídeos (a roupa, §2): gravado aqui, em `roteiros/rio-columbia/qc-roteiro/`, como nos vídeos anteriores.

## NADA A CHECAR (as 40 frases sem linha, uma a uma)

Perguntas, transições, imagens sem fato, a assinatura e a chamada. Nenhuma afirma um fato que se possa conferir.

- p4.2 "So why pay for empty space, when the United States can already call on Canada in a flood?"
- p5.1 "You're at Alpha Point, and this is where the story of the lake that waits for the flood begins."
- p6.1 "Put your finger on the map where the Columbia River begins."
- p6.3 "Its beginning is somewhere else."
- p8.1 "So where does all that water come from, and when?"
- p9.3 "A gauge is just a station on the bank that records how much water is going past."
- p10.1 "A number like that makes you wonder who holds the tap."
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
- p22.1 "So we looked at the river itself."
- p25.1 "The alternative has a price too."
- p27.1 "Certainty about what, exactly?"
- p28.1 "For another, look at what the dams can hold."
- p29.1 "You've seen what that does."
- p31.1 "What Canada has in its hands, then, is a calendar."
- p32.1 "That room came from somewhere."
- p34.1 "The river had lost something before any of this."
- p36.1 "So that is the room, and what it cost."
- p36.2 "What it's worth depends on who is counting."
- p38.1 "Each side has its own account of what the other gains."
- p38.6 "Two careful sums, and they don't land in the same place."
- p39.1 "When you hear that the United States pays, it's fair to ask who that is."
- p40.1 "There is a longer plan, in outline."
- p41.1 "That leaves the clock."
- p42.1 "It starts with snow."
- p42.4 "Nothing much is happening yet."
- p42.5 "The room is there, and the flood isn't."
- p43.1 "Then the melt comes."

## A tabela (uma linha por item da lista; a mesma de `fatos-tabela.json`)

| id | p | frase (início) | veredito | o que a fonte diz (trecho, ou a nota) | fonte e URL |
|---|---|---|---|---|---|
| F001 | 1 | Every year, before the spring snowmelt, part of the Arrow Lakes Res… | confirmada | "Since then, the reservoir has been drafting to meet Treaty flood control requirements." | BC Hydro, Columbia River Operations Summary, 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf |
| F002 | 1 | Every year, before the spring snowmelt, part of the Arrow Lakes Res… | confirmada | "Currently, Canada provides 8.95 million acre-feet (MAF) of dedicated, pre-planned FRM through all the Canadian CRT projects" | BC, AIP Public Description, 30/08/2024 (L4) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/09/CRT-AIP-Canada-public-description-Final_2024Aug30.pdf |
| F003 | 1 | And starting with the 2025 flood season, the United States pays Can… | confirmada | "there is authorized to be appropriated $37,600,000 for fiscal year 2025 and $37,600,000, adjusted for inflation" | Public Law 118-272, sec. 1152 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F004 | 1 | And starting with the 2025 flood season, the United States pays Can… | confirmada | "The first payment started at $37.6 million in fiscal year 2025" | PNWA, 08/05/2026 (L2) · PNWA, WRDA 2026, 08/05/2026 (lobby dos portos; URL em pautas/rio-columbia/_trabalho/fatos-b.md) |
| F005 | 2 | But only about 15 percent of the land that drains into the Columbia… | confirmada | "only about 15 percent of the 259,500 square miles of the Columbia River Basin is actually located in Canada" | USACE + BPA, History and 2014/2024 Review (F3, L5) · https://www.osti.gov/servlets/purl/1132837 |
| F006 | 2 | Even so, a much bigger share of the river's water comes down throug… | confirmada | "Yet the Canadian waters account for about 38 percent of the average annual volume" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F007 | 3 | The payment is temporary: part of a deal that runs out after the sp… | confirmada | "The Interim FRM Period is defined to run until the earliest of the first July 31 following the entry into force of the Modernized Treaty, or July 31, 2027." | Nota diplomática dos EUA, 22/11/2024 (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf |
| F008 | 3 | Their talks have been paused since March 2025. | confirmada | "The U.S. has paused negotiations with Canada on an amended Columbia River Treaty." | BC News, 11/03/2025 · https://news.gov.bc.ca/releases/2025ECS0009-000191 |
| F009 | 3 | Their talks have been paused since March 2025. | confirmada | "Victoria Tuesday, March 11, 2025" | BC News, 11/03/2025 · https://news.gov.bc.ca/releases/2025ECS0009-000191 |
| F010 | 3 | Their talks have been paused since March 2025. | confirmada | "At the time of writing, the negotiations are still paused" | Canadian Geographic, 17/08/2026 · https://canadiangeographic.ca/articles/we-want-to-let-the-salmon-know-were-still-here/ |
| F011 | 4 | And the strange part: a treaty between them already promises Canada… | confirmada | "Canada shall, when called upon by an entity designated by the United States of America for that purpose, operate within the limits of existing facilities any storage in the Columbia River basin in Canada" | Tratado, Art. IV(3) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F012 | 6 | You may know its American end: this is the largest hydropower-produ… | confirmada | "The Columbia River is the largest hydropower-producing river system in the United States." | CRS R43287, 03/12/2024 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F013 | 6 | It's a lake in the mountains of British Columbia, called Columbia L… | confirmada | "The headwaters of the Columbia River is in Columbia Lake in British Columbia, between the Canadian Rockies and the Selkirk Mountains" | USGS, River Basins: The Columbia, 1981 (F7) · https://pubs.usgs.gov/gip/70039373/report.pdf |
| F014 | 7 | From there, the river does something odd for a river on its way to … | confirmada | "the Columbia River flows into the Pacific Ocean near Astoria, Oregon" | USGS SIR 2007-5186 (F8) · https://pubs.usgs.gov/sir/2007/5186/section3.html |
| F015 | 7 | It heads northwest, deeper into Canada. | confirmada | "The river flows northwest 218 miles; then south for 280 miles" | USGS 1981 (F7) · https://pubs.usgs.gov/gip/70039373/report.pdf |
| F016 | 7 | Then it swings around in a long hairpin, the river's big bend in Br… | confirmada | "then south for 280 miles; it crosses the United States-Canadian border into northeastern Washington" | USGS 1981 (F7) · https://pubs.usgs.gov/gip/70039373/report.pdf |
| F017 | 7 | That bend is underwater these days: it lies beneath a lake, behind … | confirmada | "Formerly the "Big Bend" area of the Columbia River, and named for the former town of Mica Creek, drowned under the pondage." | BC Geographical Names, Mica Dam (F16) · https://apps.gov.bc.ca/pub/bcgnws/names/51532.html |
| F018 | 7 | Keep your finger moving, and by the time the Columbia crosses into … | confirmada | "664/1942 km = 34.2 % e 498/1243 mi = 40.1 %, os dois acima de 1/3 (33.3 %)" | conta do verificador sobre F7 e F8 · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F019 | 8 | The Canadian part of the basin, the land that drains into the river… | confirmada | "The Canadian portion is mountainous with much snow." | BC Hydro, Columbia Operations Update, 23/06/2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F020 | 8 | About 60 percent of the water that runs off the whole basin in a ye… | confirmada | "Approximately 60% of this runoff occurs in May, June, and July." | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F021 | 9 | One of them sits in British Columbia, a short way north of the border. | confirmada | "latitude 49.1778 N, longitude -117.7177: 19.8 km (12.3 mi) ao norte do paralelo 49" | WSC 08NE049 (coordenadas da estação); conta do verificador · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F022 | 9 | The other is far downstream at The Dalles, a place on the river in … | confirmada | "USGS 14105700 COLUMBIA RIVER AT THE DALLES, OR" | USGS 14105700 (o arquivo de picos) · https://nwis.waterdata.usgs.gov/nwis/peak?site_no=14105700&agency_cd=USGS&format=rdb (o download do cético, cetico-v1.md) |
| F023 | 9 | We lined the two records up, year against year, for the 87 years th… | confirmada | "Birchbank/The Dalles 1938-2024 n=87: 71,191 / 181,213 cfs = 39.3 %" | a_calc_fracoes.py (WSC + USGS) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F024 | 9 | On average, the river at the Canadian gauge is already carrying abo… | confirmada | "Birchbank/The Dalles 1938-2024 n=87: 71,191 / 181,213 cfs = 39.3 %" | a_calc_fracoes.py (WSC + USGS) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F025 | 9 | That's our own calculation, from the two governments' data. | confirmada | "Monthly Mean of Water Level or Discharge for COLUMBIA RIVER AT BIRCHBANK (08NE049)" | WSC 08NE049 · WSC 08NE049, API aberta do ECCC (a série mensal: https://api.weather.gc.ca/collections/hydrometric-monthly-mean/items?STATION_NUMBER=08NE049; fatos-a, F13) |
| F026 | 10 | BC Hydro, the power company that runs Canada's side of the treaty, … | confirmada | "the Canadian Entity (the British Columbia Hydro and Power Authority, or BC Hydro)" | CRS R43287, nota 2 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F027 | 10 | Most of the power, and most of the need to hold back floods, is in … | confirmada | "Most hydropower production and need for flood control is in the USA." | BC Hydro 2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F028 | 10 | The big sites for storing water are in Canada. | confirmada | "The major storage dam sites are in Canada." | BC Hydro 2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F029 | 11 | Before the big storage dams, the river at that Canadian gauge carri… | confirmada | "mês mais cheio: jun 6,134; mais baixo: fev 590; razão 10.4×" | p_contas.py (WSC 08NE049) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F030 | 11 | And in 1948, it did. | confirmada | "the early part of June 1948 the Columbia River Basin in the United States and Canada was ravaged by a flood" | USGS Water-Supply Paper 1080 (1949) · https://pubs.usgs.gov/wsp/1080/report.pdf |
| F031 | 12 | That spring, the river came up over its banks, and the damage ran f… | confirmada | "caused major damage from Trail, British Columbia, to Vanport, Ore." | USACE + BPA (F3, L5) · https://www.osti.gov/servlets/purl/1132837 |
| F032 | 12 | That spring, the river came up over its banks, and the damage ran f… | confirmada | "communities such as Vanport, Ore., just north of Portland" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F033 | 12 | At Vanport, a railroad embankment was doing the work of a dike. | confirmada | "fill serving as a dike broke at 4:15 p.m. on Sunday, May 30" | USGS WSP 1080, p. 9 · https://pubs.usgs.gov/wsp/1080/report.pdf |
| F034 | 12 | It broke on a Sunday afternoon, and within an hour, by the US Geolo… | confirmada | "The disaster occurred on a Sunday afternoon" | USGS WSP 1080, p. 9 · https://pubs.usgs.gov/wsp/1080/report.pdf |
| F035 | 12 | It broke on a Sunday afternoon, and within an hour, by the US Geolo… | confirmada | "Within an hour the town was completely destroyed." | USGS WSP 1080, p. 9 · https://pubs.usgs.gov/wsp/1080/report.pdf |
| F036 | 12 | Across the whole flood, the same report counts at least 51 people d… | confirmada | "At least 51 lives were lost as a result of the flood." | USGS WSP 1080, p. 13 · https://pubs.usgs.gov/wsp/1080/report.pdf |
| F037 | 12 | Across the whole flood, the same report counts at least 51 people d… | confirmada | "38,500 persons made homeless" | USGS WSP 1080, p. 13 · https://pubs.usgs.gov/wsp/1080/report.pdf |
| F038 | 13 | On the Columbia, the big sites for that were north of the border. | confirmada | "The major storage dam sites are in Canada." | BC Hydro 2026, p. 7 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F039 | 14 | A few years after the flood, the United States proposed a dam of it… | confirmada | "the United States had proposed in 1951 to build Libby Dam in Montana (which would flood 42 miles into Canada)" | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F040 | 14 | Canada answered with a plan to divert much of the upper Columbia fo… | atribuir | a resposta canadense de desvio: uma fonte só (o CRS, sem nota de fonte), e a voz não diz o dono. Trecho: "Canada was opposed to this solution, and as a response proposed to divert as much as 15.5 MAF from the Columbia River for its own purposes" | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F041 | 15 | It took effect in September 1964, and the two countries' leaders ma… | confirmada | "signed at Washington January 17, 1961, and entered into force September 16, 1964" | Public Law 118-272 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F042 | 15 | It took effect in September 1964, and the two countries' leaders ma… | confirmada | "meet on Sept. 16, 1964, at the International Boundary at Blaine, Wash., and Surrey, B.C." | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F043 | 15 | Canada would build three big storage dams. | confirmada | "Required to construct the Kinbasket, Arrow and Duncan storage reservoirs" | BC Hydro 2026, p. 7 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F044 | 15 | Canada would build three big storage dams. | confirmada | "helped fund the construction of the three Treaty dams in Canada" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F045 | 15 | The United States would build the one it had asked for, Libby. | confirmada | "The Treaty also allowed the United States an option to build Libby Dam on the Kootenai River" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F046 | 15 | Its lake backs 42 miles into Canada, and its water, once regulated,… | confirmada | "whose reservoir Lake Koocanusa backs 42 miles into Canada" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F047 | 15 | Its lake backs 42 miles into Canada, and its water, once regulated,… | confirmada | "more than 200,000 kilowatt years per annum of energy benefit downstream in Canada" | Protocolo de 1964, V (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F048 | 16 | For the room behind the Canadian dams, the United States paid 64.4 … | confirmada | "lump sum payments totaling $64.4 million when each of the three Canadian dams became operational" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F049 | 16 | For the room behind the Canadian dams, the United States paid 64.4 … | confirmada | "For the purpose of flood control until the expiration of sixty years from the ratification date" | Tratado, Art. IV(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F050 | 16 | The price was half of what those dams were expected to save it in f… | confirmada | "Canada was to be paid 50 percent of the estimated value of U.S." | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F051 | 16 | The price was half of what those dams were expected to save it in f… | confirmada | "Pagamento de 1964 pela cheia: Arrow 52,1 de 64,4 = 80.9 %" | Tratado, Art. VI(1), pelo p_contas.py · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F052 | 16 | So paying Canada for room is as old as the treaty itself. | confirmada | L: the listener concludes that the United States has paid Canada for flood room since the treaty took effect (apoio: F048) | — |
| F053 | 17 | Water stored in Canada and released on a schedule lets the American… | confirmada | "For power generating purposes the 15,500,000 acre-feet of Canadian storage will be operated in accordance with operating plans designed to achieve optimum power generation downstream" | Tratado, Anexo A (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F054 | 17 | The treaty splits that gain down the middle: half of the extra powe… | confirmada | "Canada is entitled to one half the downstream power benefits determined under Article VII." | Tratado, Art. V(1) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F055 | 17 | The treaty splits that gain down the middle: half of the extra powe… | confirmada | "The United States of America shall deliver to Canada at a point on the Canada-United States of America boundary near Oliver" | Tratado, Art. V(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F056 | 17 | British Columbia sold the first 30 years of that share up front, fo… | confirmada | "Canada initially sold its share of this additional power, called the Canadian Entitlement, for $254 million to a consortium of U.S. utilities for a period of 30 years." | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F057 | 17 | British Columbia sold the first 30 years of that share up front, fo… | confirmada | "helped fund the construction of the three Treaty dams in Canada" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F058 | 17 | British Columbia sold the first 30 years of that share up front, fo… | confirmada | "entered into between the British Columbia Hydro and Power Authority and the Columbia Storage Power Exchange" | Troca de notas de 16/09/1964 (F2) · https://internationalwaterlaw.org/documents/regionaldocs/columbia_river_note1.html |
| F059 | 17 | So American money helped build Canada's dams, and water stored in C… | confirmada | L: the listener concludes that the money went north to build the dams and the stored water raised power in the United States (apoio: F054, F056) | — |
| F060 | 18 | For 60 years, that was the bargain: room for money, and stored wate… | confirmada | "For the purpose of flood control until the expiration of sixty years from the ratification date" | Tratado, Art. IV(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F061 | 18 | On the map, it comes to four lakes in the mountains: three in Canad… | confirmada | "Together, these four dams more than doubled the storage capacity" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F062 | 18 | On the map, it comes to four lakes in the mountains: three in Canad… | confirmada | "helped fund the construction of the three Treaty dams in Canada" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F063 | 18 | On the map, it comes to four lakes in the mountains: three in Canad… | confirmada | "whose reservoir Lake Koocanusa backs 42 miles into Canada" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F064 | 19 | If you're enjoying the trip downriver, subscribe to Alpha Point. | confirmada | "subscribe to Alpha Point" | marca/cta.md · marca/cta.md |
| F065 | 20 | The United States bought decades of cover, the cover ran out, and s… | confirmada | "Canada elected to receive lump sum payments totaling $64.4 million when each of the three Canadian dams became operational" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F066 | 20 | In September 2024, the paid years did end. | confirmada | "Assured Annual Flood Control expires automatically in 2024 and converts on 16 September 2024 to a Called Upon operation" | BC, Treaty highlights (F5) · https://engage.gov.bc.ca/columbiarivertreaty/ (Treaty highlights; fatos-a, F5) |
| F067 | 20 | Under the treaty, Canada has to help in a big flood whenever the Un… | confirmada | "Canada would be responsible for making these changes. In exchange, the United States would pay for operating costs and economic losses in Canada due to the changed operation." | CRS R43287 (L15) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F068 | 20 | Under the treaty, Canada has to help in a big flood whenever the Un… | confirmada | "only to control potential floods in the United States of America that could not be adequately controlled by all the related storage facilities in the United States of America" | Protocolo de 1964, I(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F069 | 21 | And the treaty doesn't say how big a flood that is. | confirmada | "is not currently defined in the Treaty and is likely to be an important point in negotiations" | CRS R43287, nota 39 (L15) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F070 | 21 | A flood on this river is measured by how much water goes past The D… | confirmada | "a range of peak flows at the Dalles" | CRS R43287, nota 39 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F071 | 21 | When the treaty came up for review, the two sides worked from diffe… | confirmada | "Treaty Continues with 450 and 600 flood flow objectives" | USACE, 31/01/2013, p. 15 (L13) · USACE, Overview of Treaty Review Process, 31/01/2013, cópia da USEA (Sala; a URL não está no índice local, a registrar) |
| F072 | 21 | American planners projected that Canadian storage would come into p… | confirmada | "from 450,000 cubic feet per second (cfs) to 650,000 cfs would activate available Canadian storage" | CRS R43287, nota 39 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F073 | 21 | British Columbia assumed it would be called only at 600,000, a floo… | corrigir | o 600 mil é a suposição da Entidade Canadense (confere); o 'expected to be rare' é um parêntese do CRS, sem dono, e a voz o põe na boca da BC. Trecho: "the Canadian Entity has assumed that it would provide called-upon storage only once flows reach 600,000 cfs (which is expected to be rare)" | CRS R43287, nota 39 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F074 | 21 | That's how the US Congressional Research Service describes those st… | confirmada | "While the U.S. Entity has projected that a range of peak flows at the Dalles" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F075 | 22 | From 1879 to 1967, the yearly peak at The Dalles passed British Col… | confirmada | "1879-1967: 89 anos; pico >= 600,000 cfs em 40 de 89 anos" | fatos-medidas-picos.py (USGS) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F076 | 22 | On the old river, that was no rare flood. | confirmada | L: the listener concludes that a 600,000 cfs peak was common at The Dalles before the treaty dams (apoio: F075) | — |
| F077 | 22 | Since 2009, with the space reserved upstream, it hasn't passed it o… | confirmada | "2009-2025: 17 anos; pico >= 600,000 cfs em 0 de 17 anos; entre 450,000 e 600,000 em 6" | fatos-medidas-picos.py (USGS) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F078 | 23 | In January 2025, Congress authorized the payment. | confirmada | "Approved January 4, 2025." | Public Law 118-272 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F079 | 23 | It pays for reserving 3.6 million acre-feet of room a year behind t… | confirmada | "reserving and operating 3,600,000 acre- feet of pre-planned flood storage per operating year at Hugh Keenleyside Dam" | Public Law 118-272, sec. 1152 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F080 | 23 | It pays for reserving 3.6 million acre-feet of room a year behind t… | confirmada | "Arrow Reservoir, impounded by Hugh Keenleyside Dam" | BC Hydro 2026, p. 20 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F081 | 23 | An acre-foot is enough water to cover an acre of land one foot deep. | confirmada | "1 MAF represents the volume of water covering an area of 1 acre to a depth of 1 foot, times a million" | BC, AIP Public Description, glossário (L4) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/09/CRT-AIP-Canada-public-description-Final_2024Aug30.pdf |
| F082 | 23 | And the law spells out what that includes, in its own words: "opera… | confirmada | "including operations that the Government of Canada may not be obligated to provide under the Columbia River Treaty" | Public Law 118-272, sec. 1152 (L11) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F083 | 23 | That gap is where the law comes in. | confirmada | L: the listener concludes that the law pays for storage beyond what the treaty's on-call promise obliges Canada to give (apoio: F082, F072) | — |
| F084 | 24 | The lake drops every winter anyway, as water moves downstream to ma… | confirmada | "The limited number of Called Upon years had less impact than the power requirements." | USACE, 31/01/2013, p. 22 (L13) · USACE, Overview of Treaty Review Process, 31/01/2013, cópia da USEA (Sala; a URL não está no índice local, a registrar) |
| F085 | 24 | The lake drops every winter anyway, as water moves downstream to ma… | confirmada | "reduced fall and winter drafts—also known as drawdowns—in Canadian reservoirs" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F086 | 24 | What the United States pays for is a guarantee: that much room, eve… | confirmada | "pre-planned flood storage per operating year at Hugh Keenleyside Dam, including operations that the Government of Canada may not be obligated to provide" | Public Law 118-272, sec. 1152 · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F087 | 25 | The American agencies that run the treaty once estimated that a cal… | confirmada | "the U.S. Entity has previously estimated costs of between $4 million and $34 million per request for called-upon flood control" | CRS R43287, nota 41 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F088 | 25 | The American agencies that run the treaty once estimated that a cal… | confirmada | "US Entity, custo por pedido (CRS R43287, nota 41): de 4 a 34 milhões de dólares, ou seja, 4 e 34" | CRS R43287 (a faixa transcrita) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F089 | 25 | British Columbia's estimate is that relying on those calls would co… | confirmada | "The Canadian Entity estimates that, for power production alone, called-upon operations would result in $40 million to $150 million per year in lost benefits to the United States" | CRS R43287, nota 40 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F090 | 25 | British Columbia's estimate is that relying on those calls would co… | confirmada | "Canadian Entity, perda por ano (CRS R43287, nota 40): de 40 a 150 milhões de dólares, ou seja, 40 e 150" | CRS R43287 (a faixa transcrita) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F091 | 25 | Beside the American figure, the yearly payment looks steep. Beside … | corrigir | compara os US$ 37,6 mi por ano com um custo por pedido (4 a 34) e com um custo por ano (40 a 150), e a voz não diz que as unidades diferem. Trecho: "has previously estimated costs of between $4 million and $34 million per request" | CRS R43287, notas 40 e 41 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F092 | 26 | So yes, the United States can call on Canada in a flood. | confirmada | "Canada shall, when called upon by an entity designated by the United States of America for that purpose" | Tratado, Art. IV(3) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F093 | 26 | It pays so the room is already there, call or no call. | confirmada | "pre-planned FRM operations under the Interim FRM Period Entity Agreement would be distinct from and in no way" | Nota diplomática dos EUA, 22/11/2024 (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf |
| F094 | 26 | What the United States is buying is certainty. | confirmada | L: the listener concludes that the payment buys a set amount of empty space every year, whether or not a call comes (apoio: F093, F082) | — |
| F095 | 27 | In 2025, as a tariff fight between the two countries grew, CBC News… | nao_conferida | a data do vídeo da CBC (2025) não se leu: a cbc.ca recusa robô (403) e o YouTube recusou a leitura automática | CBC News (vídeo do YouTube) · — |
| F096 | 27 | That March, British Columbia's energy minister addressed the idea. | confirmada | "The session was hosted by Adrian Dix, Minister of Energy and Climate Solutions and Minister Responsible for the Columbia River Treaty" | BC, página do tratado (lida em 12/11/2026) · https://engage.gov.bc.ca/columbiarivertreaty/ (lida em 12/11/2026) |
| F097 | 27 | That March, British Columbia's energy minister addressed the idea. | confirmada | "Dix says there has been speculation about how the treaty could potentially be used" | CFJC/Canadian Press, 25/03/2025 · https://cfjctoday.com/2025/03/25/b-c-energy-minister-says-treaty-not-a-bargaining-chip-in-u-s-trade-dispute/ |
| F098 | 27 | "Canadian action to terminate the treaty would have little effect o… | confirmada | "Canadian action to terminate the treaty would have little effect on the current dispute." | CFJC/Canadian Press, 25/03/2025 · https://cfjctoday.com/2025/03/25/b-c-energy-minister-says-treaty-not-a-bargaining-chip-in-u-s-trade-dispute/ |
| F099 | 27 | "Canadian action to terminate the treaty would have little effect o… | confirmada | "would have little effect on the current dispute and would obviously involve losses on all sides,” he said" | OPB, 28/03/2025 · https://www.opb.org/article/2025/03/27/canadian-leaders-hope-trade-negotiations-wont-derail-columbia-river-treaty/ |
| F100 | 27 | For one thing, leaving takes ten years' written notice, and nothing… | confirmada | "if it has delivered at least ten years written notice to the other of its intention to terminate the Treaty" | Tratado, Art. XIX(2) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F101 | 27 | For one thing, leaving takes ten years' written notice, and nothing… | confirmada | "To date, neither country has given notice of termination" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F102 | 28 | Together, the three treaty lakes in Canada can store as much water … | confirmada | "The Dalles: 41.5 dias = 5.9 semanas (about 6)" | p_contas.py e fatos-medidas-contas.py · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F103 | 28 | Together, the three treaty lakes in Canada can store as much water … | confirmada | "helped fund the construction of the three Treaty dams in Canada" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F104 | 28 | Together, the three treaty lakes in Canada can store as much water … | confirmada | "Canada shall provide in the Columbia River basin in Canada 15,500,000 acre-feet of storage" | Tratado, Art. II(1) (F1) · https://csgwest.org/wp-content/uploads/2023/10/Columbia-River-Treaty-Protocol-and-Documents.pdf |
| F105 | 28 | Measured against the river as it runs through British Columbia, nea… | confirmada | "Birchbank: 110.0 dias = 3.61 meses (closer to 3.5 than to 4)" | p_contas.py e fatos-medidas-contas.py · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F106 | 28 | So Canada can't turn the Columbia off. | confirmada | L: the listener concludes that the treaty storage holds only weeks to months of the river, not the whole year (apoio: F102) | — |
| F107 | 28 | What it can do, under plans agreed with the United States, is decid… | confirmada | "the operations of the Treaty reservoirs in B.C must be agreed to by both Canada and the U.S." | BC Hydro 2026, p. 7 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F108 | 29 | Before the big storage dams went in upstream, on both sides of the … | confirmada | "mês mais cheio: jun 6,134; mais baixo: fev 590; razão 10.4×" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F109 | 29 | With all of them in place, the river's busiest month carries only a… | confirmada | "mês mais cheio: jul 2,753; mais baixo: abr 1,320; razão 2.1×" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F110 | 29 | With all of them in place, the river's busiest month carries only a… | confirmada | "depois (1974–2025): 52 anos; média 2,001 m3/s" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F111 | 29 | With all of them in place, the river's busiest month carries only a… | confirmada | "antes (1938–1967): 30 anos; média 2,026 m3/s" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F112 | 29 | It was moved: into winter, to make power, and out of spring, to lea… | confirmada | "mai–jul = 31.6 % do volume; dez–fev = 25.8 %" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F113 | 29 | It was moved: into winter, to make power, and out of spring, to lea… | confirmada | "drafted for winter and early spring energy and to ensure space for flood risk management prior to peak snow melt" | BC Hydro 2026, p. 25 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F114 | 30 | Canada did not turn over control of its reservoirs to the United St… | confirmada | "Canada did not turn over control of its reservoirs to the U.S. Rather, the operations of the Treaty reservoirs in B.C must be agreed to by both Canada and the U.S." | BC Hydro 2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F115 | 31 | And for every spring of the deal, the United States pays to have on… | confirmada | "pre-planned flood storage per operating year" | Public Law 118-272, sec. 1152 · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F116 | 32 | Stand on the shore of the Arrow Lakes in late winter, when the wate… | confirmada | "the reservoir reached its minimum level of 427.15 metres (1,401.4 feet) on February 4, 2017" | BC Hydro 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf |
| F117 | 32 | There's a wide strip of bare ground between the lake and the trees. | confirmada | "for Arrow Lakes Reservoir is between 440.1 metres (1,444 feet) and 419.9 metres (1,377.9 feet)" | BC Hydro 2026, p. 21 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F118 | 32 | By summer, the water will cover it. | confirmada | "434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June" | BC Hydro 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf |
| F119 | 32 | That strip is the room, seen from the ground. | corrigir | a faixa exposta é o rebaixamento inteiro do lago (até 66 pés; 7,1 MAF do tratado em Arrow), maior que os 3,6 MAF pagos que o gancho chama de 'that empty space'. Trecho: "Arrow Lakes Reservoir provides 7.1 MAF of Treaty storage" | BC Hydro 2026, p. 21 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F120 | 32 | Before the treaty dams, people lived along these valleys. | confirmada | "Approximately 2,300 people were displaced and more than a dozen small communities were inundated primarily in the Arrow Lakes and Koocanusa Reservoirs" | BC, A Review of the Range of Impacts and Benefits, 2012 (F6) · https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf |
| F121 | 33 | The government of British Columbia puts the count at about 2,300 pe… | confirmada | "Approximately 2,300 people were displaced and more than a dozen small communities were inundated" | BC, Review 2012 (F6) · https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf |
| F122 | 33 | Some, like Edgewood and Burton, were relocated. | confirmada | "Relocation of the communities of Edgewood, Fauquier and Burton" | BC, Review 2012 (F6) · https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf |
| F123 | 33 | Renata no longer exists. | confirmada | "Some communities such as Renata, no longer exist" | BC, Review 2012 (F6) · https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf |
| F124 | 33 | Farther north, the river's big bend in British Columbia went under … | confirmada | "Formerly the "Big Bend" area of the Columbia River, and named for the former town of Mica Creek, drowned under the pondage." | BC Geographical Names (F16) · https://apps.gov.bc.ca/pub/bcgnws/names/51532.html |
| F125 | 33 | As for how residents and First Nations were consulted, the province… | confirmada | "First Nations and public consultation and mitigation at the time could be considered inadequate to non-existent by today’s standards" | BC, About the Columbia River Treaty (F5) · https://engage.gov.bc.ca/columbiarivertreaty/ (a página About, pela API WordPress do site; fatos-a, F5) |
| F126 | 34 | Grand Coulee Dam, built by the United States far downstream and fin… | confirmada | "the original dam structure and Left Powerhouse completed in 1941" | Bureau of Reclamation, Grand Coulee FAQ (F10) · https://www.usbr.gov/pn/grandcoulee/about/faq.html |
| F127 | 34 | Grand Coulee Dam, built by the United States far downstream and fin… | confirmada | "Grand Coulee Dam stopped the natural migratory runs of fish on the upper Columbia River." | Bureau of Reclamation (F10) · https://www.usbr.gov/pn/grandcoulee/about/faq.html |
| F128 | 34 | Grand Coulee Dam, built by the United States far downstream and fin… | confirmada | "This included the second most important salmon fishery on the Columbia River at Kettle Falls" | Bureau of Reclamation (F10) · https://www.usbr.gov/pn/grandcoulee/about/faq.html |
| F129 | 34 | That was long before the treaty dams. | confirmada | "1941 → 1967/1973 = 26/32" | p_contas.py · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F130 | 35 | The Arrow Lakes lie in the traditional territory of the Sinixt. | confirmada | "only 21 Sinixt still lived on their traditional territory in Canada, in the Arrow Lakes Band reserve" | R. v. Desautel, 2021 SCC 17, §6 (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do |
| F131 | 35 | The Arrow Lakes lie in the traditional territory of the Sinixt. | confirmada | "The place where he shot the elk was within this territory." | SCC, Case in Brief (F11) · https://scc-csc.ca/judgments-jugements/cb/2021/38734/ |
| F132 | 35 | In 1956, the government of Canada declared the Arrow Lakes Band ext… | confirmada | "after her death in 1956, the gov- ernment of Canada declared the Arrow Lakes Band extinct" | R. v. Desautel, §6 (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do |
| F133 | 35 | Those are the words of the Supreme Court of Canada, writing decades… | confirmada | "R. v. DESAUTEL [2021] 1 S.C.R." | R. v. Desautel (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do |
| F134 | 35 | In that ruling, the Court found that the Lakes Tribe, a successor g… | confirmada | "Accordingly, the Lakes Tribe is an Aboriginal people of Canada." | R. v. Desautel (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do |
| F135 | 35 | In that ruling, the Court found that the Lakes Tribe, a successor g… | confirmada | "the Lakes Tribe are a modern successor of the Sinixt" | R. v. Desautel (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do |
| F136 | 35 | In that ruling, the Court found that the Lakes Tribe, a successor g… | confirmada | "Lakes Tribe of the Colville Confederated Tribes based in the State of Washington" | R. v. Desautel, §4 (F11) · https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do |
| F137 | 37 | Canada agreed to a smaller share of the power: a cut of 37 percent,… | confirmada | "Beginning August 1, 2024, the Canadian Entitlement decreased by 37%." | CRS R43287 (o Departamento de Estado, 25/11/2024) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F138 | 37 | Canada agreed to a smaller share of the power: a cut of 37 percent,… | confirmada | "The State Department noted that the interim measures would remain in force until a modernized treaty enters into force" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F139 | 37 | The United States agreed to pay by the year for room it used to hav… | confirmada | "The United States is expected to compensate Canada for preplanned FRM by providing US$ 37.6 million per year, indexed to inflation" | BC, AIP Public Description (L4) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/09/CRT-AIP-Canada-public-description-Final_2024Aug30.pdf |
| F140 | 37 | As for what Canada's share is worth, BC Hydro puts it at between 11… | corrigir | o slide diz 'typically worth between $110 - $400 million per year', sem moeda (na mesma página o pagamento vem como 'USD $37.6M'), e descreve o valor típico da parte de 50 %, sem dizer se é antes ou depois do corte de 37 %. Trecho: "typically worth between $110 - $400 million per year" | BC Hydro 2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F141 | 38 | In 2012, the American agencies that run the treaty estimated that e… | confirmada | "net annual revenues for the United States would increase by about $180 million to $280 million" | CRS R43287, nota 26 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F142 | 38 | In 2012, the American agencies that run the treaty estimated that e… | confirmada | "Columbia River Treaty 2014/2024 Review: Recent Study Results,” June 2012" | CRS R43287, nota 12 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F143 | 38 | In 2012, the American agencies that run the treaty estimated that e… | confirmada | "largely due to the termination of the Canadian Entitlement" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F144 | 38 | In 2012, the American agencies that run the treaty estimated that e… | confirmada | "US Entity, 2012, receita a mais sem o tratado (CRS R43287, nota 26): de 180 a 280 milhões de dólares, ou seja, 180 e 280" | CRS R43287 (a faixa transcrita) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F145 | 38 | British Columbia disputed those assumptions. | confirmada | "It disputed several assumptions in the U.S. Entity’s review process." | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F146 | 38 | British Columbia disputed those assumptions. | confirmada | "the Canadian Entity (the Province of British Columbia)" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F147 | 38 | Its argument is that the treaty makes the river dependable, and tha… | confirmada | "Canada has argued that the reliability of operations provided for under the Treaty allows for generation that is worth more to the United States than the Canadian Entitlement" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F148 | 38 | Its argument is that the treaty makes the river dependable, and tha… | confirmada | "To date, Canada has not produced estimates of the cost of this lack of reliability. British Columbia U.S. Benefits Study" | CRS R43287, nota 43 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F149 | 38 | Without the treaty, as that congressional report puts it, Canada co… | confirmada | "without the CRT, Canada would be able to operate its dams for its own benefit" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F150 | 38 | Without the treaty, as that congressional report puts it, Canada co… | confirmada | "This could make U.S. hydropower generation more difficult to control and predict" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F151 | 39 | The payment for the room is federal: Congress authorized it. | confirmada | "is authorized to compensate, and make arrangements with, the Government of Canada" | Public Law 118-272, sec. 1152 · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F152 | 39 | Canada's share is power, and part of that bill falls on utilities a… | confirmada | "supplying the United States with 27.5% of the power the U.S. was obligated to return to Canada" | APPA, 25/09/2026 (lida em 12/11/2026) · https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments (lida em 12/11/2026) |
| F153 | 39 | Three of them, in Washington State, stopped paying their part and w… | corrigir | a ordem está trocada: as três PUDs foram à Justiça em junho de 2024 e pararam de pagar em setembro de 2024; o acordo de setembro de 2026 confere (APPA, 25/09/2026; The Star, 30/09/2026); Washington, pela BPA (1999). Trecho: "The Mid-Columbia PUDs initiated litigation in June 2024" | APPA, 25/09/2026 · https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments (lida em 12/11/2026) |
| F154 | 40 | Shortly before the paid years ended, the two governments announced … | confirmada | "announced an agreement in principle on terms of modernization of the Treaty on July 11, 2024" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F155 | 40 | It has not been finalized. | confirmada | "Until a new Treaty is finalized, operations are subject to current Treaty requirements." | BC Hydro 2026, p. 8 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F156 | 40 | In March 2025, British Columbia's government announced that the Uni… | confirmada | "The U.S. has paused negotiations with Canada on an amended Columbia River Treaty." | BC News, 11/03/2025 · https://news.gov.bc.ca/releases/2025ECS0009-000191 |
| F157 | 40 | In March 2025, British Columbia's government announced that the Uni… | confirmada | "Victoria Tuesday, March 11, 2025" | BC News, 11/03/2025 · https://news.gov.bc.ca/releases/2025ECS0009-000191 |
| F158 | 40 | Canada's delegation to them includes representatives of three First… | confirmada | "The Canadian delegation is made up of federal, provincial and First Nation representatives from the Ktunaxa, the Syilx-Okanagan and the Secwépemc Nations" | Global Affairs Canada, Question Period Note, 28/05/2025 · https://search.open.canada.ca/qpnotes/record/dfatd-maecd%2C00019-2025 |
| F159 | 40 | Canada's delegation to them includes representatives of three First… | confirmada | "Ktunaxa, Syilx-Okanagan, Secwépemc = 3 nações" | contagem do verificador sobre a nota da GAC · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F160 | 40 | As of August 2026, the magazine Canadian Geographic reported that t… | confirmada | "At the time of writing, the negotiations are still paused" | Canadian Geographic, 17/08/2026 · https://canadiangeographic.ca/articles/we-want-to-let-the-salmon-know-were-still-here/ |
| F161 | 40 | As of August 2026, the magazine Canadian Geographic reported that t… | confirmada | "in the age of Trump Aug 17, 2026" | Canadian Geographic, 17/08/2026 · https://canadiangeographic.ca/articles/we-want-to-let-the-salmon-know-were-still-here/ |
| F162 | 41 | The temporary deal can cover up to three flood seasons, and the spr… | confirmada | "operations for up to three consecutive operating years for which the U.S. Entity elects for the provision of those operations by compensating the Canadian Entity. The Interim FRM Period is defined to run until the earliest of the first July 31 following the entry into force of the Modernized Treaty, or July 31, 2027." | Nota diplomática dos EUA, 22/11/2024 (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf |
| F163 | 41 | The law that authorizes the payment expires at the end of August 20… | confirmada | "shall expire on August 31, 2027" | Public Law 118-272, sec. 1152(c)(3) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F164 | 41 | Bills in both chambers would. | corrigir | só o projeto do Senado (S. 4949, sec. 1367) muda o fim de 31/08/2027, para 2029; o da Câmara (H.R. 9497, aprovado em 16/09/2026, sec. 302(f)) só muda as verbas da (c)(2) para os anos de 2026 a 2030 e deixa a (c)(3) intacta; nenhum é lei (govinfo, BILLSTATUS, lido em 12/11/2026). Trecho: "Section 8309(c)(2) of the Water Resources Development Act of 2022" | H.R. 9497 (EH), sec. 302(f) · https://www.govinfo.gov/content/pkg/BILLS-119hr9497eh/html/BILLS-119hr9497eh.htm |
| F165 | 41 | The treaty itself remains in force, on-call promise, missing number… | confirmada | "recognizes that the scope of the Treaty, which remains in force" | Nota diplomática dos EUA, 22/11/2024 (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf |
| F166 | 42 | By the end of winter, the mountains above the Arrow Lakes are holdi… | confirmada | "Approximately 60% of this runoff occurs in May, June, and July." | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F167 | 42 | Down in the valley, the lake is at its lowest point of the year, wi… | confirmada | "the reservoir reached its minimum level of 427.15 metres (1,401.4 feet) on February 4, 2017" | BC Hydro 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf |
| F168 | 43 | Through May and June, the creeks fill, the river rises, and the lak… | confirmada | "434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June" | BC Hydro 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf |
| F169 | 43 | Part of a flood that would have reached Portland stays up in the va… | confirmada | "to minimize the flood risk in the Columbia River Basin" | Public Law 118-272, sec. 1152 · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F170 | 44 | For now, the United States pays for the room in between. | confirmada | "required to pay Canada annual payments of USD" | BC Hydro 2026, p. 7 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F171 | 44 | And the spring of 2027 is as far as this deal can reach. | confirmada | "following the entry into force of the Modernized Treaty, or July 31, 2027." | Nota diplomática dos EUA (L3) · https://engage.gov.bc.ca/app/uploads/sites/6/2024/12/20241122_FRM_EON_CAN_US.pdf |
| F172 | 3 | The payment is temporary: part of a deal that runs out after the sp… | confirmada | "announced an agreement in principle between the two countries on the terms for modernization of the Treaty" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F173 | 9 | We lined the two records up, year against year, for the 87 years th… | confirmada | "séries casadas (a_calc_fracoes.py): WSC 08NE049, do governo do Canadá, e USGS 14105700, do governo dos EUA = 2 séries, de 2 governos" | contagem do verificador · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F174 | 9 | That's our own calculation, from the two governments' data. | confirmada | "séries casadas (a_calc_fracoes.py): WSC 08NE049, do governo do Canadá, e USGS 14105700, do governo dos EUA = 2 séries, de 2 governos" | contagem do verificador · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F175 | 15 | It took effect in September 1964, and the two countries' leaders ma… | confirmada | "líderes na fronteira em 16/09/1964 (USACE + BPA): Johnson, dos EUA; Pearson e Bennett, do Canadá = 2 países" | contagem do verificador sobre F3 · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F176 | 21 | When the treaty came up for review, the two sides worked from diffe… | confirmada | "an important point in negotiations between the two countries" | CRS R43287, nota 39 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F177 | 30 | Canada did not turn over control of its reservoirs to the United St… | confirmada | "quem acerta a operação das barragens do tratado (BC Hydro 2026, p. 7): both Canada and the U.S. = 2 lados" | contagem do verificador sobre a BC Hydro · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F178 | 40 | Shortly before the paid years ended, the two governments announced … | confirmada | "announced an agreement in principle between the two countries on the terms for modernization of the Treaty" | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F179 | 8 | For months, the snow just sits there. Then, late in the spring, it … | confirmada | "Approximately 60% of this runoff occurs in May, June, and July." | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F180 | 8 | Most of the river's year arrives in one season. | confirmada | "Approximately 60% of this runoff occurs in May, June, and July." | CRS R43287 (L1) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F181 | 9 | A large part of it arrives by way of Canada. | confirmada | "Yet the Canadian waters account for about 38 percent of the average annual volume" | USACE + BPA (F3) · https://www.osti.gov/servlets/purl/1132837 |
| F182 | 9 | You can read that off two gauges. | confirmada | "séries casadas (a_calc_fracoes.py): WSC 08NE049, do governo do Canadá, e USGS 14105700, do governo dos EUA = 2 séries, de 2 governos" | contagem do verificador · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F183 | 10 | One country has the need. The other has the room. | confirmada | "Most hydropower production and need for flood control is in the USA. The major storage dam sites are in Canada." | BC Hydro 2026, p. 7 (L12) · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F184 | 13 | You catch part of it upstream, and you let it down slowly. | confirmada | "the usable space in a reservoir that is set aside for impounding and releasing water for flood risk management" | Public Law 118-272, sec. 1152(d)(3) · govinfo.gov, Public Law 118-272 (cópia da Sala; a URL exata não está no índice local, a registrar) |
| F185 | 20 | The promise didn't. | confirmada | "converts on 16 September 2024 to a Called Upon operation" | BC, Treaty highlights (F5) · https://engage.gov.bc.ca/columbiarivertreaty/ (Treaty highlights; fatos-a, F5) |
| F186 | 21 | No number, no line on a gauge. | confirmada | "The actual trigger for called-upon flood control operations, as well as the cost for these operations, is not currently defined in the Treaty" | CRS R43287, nota 39 (L15) · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F187 | 27 | It isn't about whether the water arrives. | confirmada | L: the listener concludes that Canada cannot keep the river from reaching the United States, only shift when it comes (apoio: F102) | — |
| F188 | 29 | The water wasn't taken away. | confirmada | "depois (1974–2025): 52 anos; média 2,001 m3/s" | p_contas.py (WSC) · roteiros/rio-columbia/qc-roteiro/fatos-medidas.txt (as contas do canal) |
| F189 | 30 | And the timing isn't Canada's alone to set. | confirmada | "the operations of the Treaty reservoirs in B.C must be agreed to by both Canada and the U.S." | BC Hydro 2026, p. 7 · BC Hydro, Columbia Operations Update, 23/06/2026: cópia da Sala; a URL não está no índice local (a registrar) |
| F190 | 37 | As the paid years ended, each side gave something up. | confirmada | "Beginning August 1, 2024, the Canadian Entitlement decreased by 37%." | CRS R43287 · https://www.everycrsreport.com/reports/R43287.html (CRS R43287, 03/12/2024; o PDF oficial do congress.gov deu 403 ao leitor B) |
| F191 | 44 | Next winter, the lake will drop again, and the snow will come back. | confirmada | "Since then, the reservoir has been drafting to meet Treaty flood control requirements." | BC Hydro 2018 (F15) · https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/corporate/community/columbia-river-operations-summary.pdf |

As cópias locais de cada linha estão no `arquivo_local` da JSON (`midia/rio-columbia/fontes/texto/…`, `…/web/…`, o `.rdb` do USGS e `fatos-medidas.txt`).

## Fecho

CHECADO POR INTEIRO, com ressalva: 183 de 191 linhas confirmadas; 7 pedem troca (todas periféricas, cada uma com a frase pronta acima) e 1 não se leu na origem (a data da CBC, com troca que dispensa a leitura). Nenhuma REFUTADA, e nenhuma DIVERGE na tese (o pagamento, a lei, o gatilho que falta, os picos, a medida).

NOTA: 7.5/10

VEREDITO: RESSALVA
