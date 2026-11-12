# Pauta de dados — rio-columbia (vídeo 7), passo research

Gerada em 2026-11-12 pelo `pesquisa-dados` a partir do espelho r2 (sha256 `28f6121ba6e3…`): 60 cenas, 173 pedidos, 212 códigos F citados. Cada cena em `out/rio-columbia/_dados/<cena>.json`; as tabelas e séries no fim. Unidades de tela: milhas, pés, acre-pés, cfs; o métrico entre parênteses quando a fonte é métrica.

## Contagem (por pedido)

| Status | Pedidos | O que quer dizer |
|---|---|---|
| conferido_primario | 86 | relido nesta tarefa na cópia local da fonte que produz o dado, ou no dado oficial baixado hoje |
| atribuido_conferido | 40 | a fonte diz isso e não é quem mede (ou o que mede diverge): vai atribuído; trecho relido |
| qualitativo_conferido | 19 | afirmação sem número, trecho relido |
| calculado_conferido | 19 | conta do canal refeita do zero hoje (conferir.py), sobre o dado oficial |
| atribuido_imprensa | 8 | só imprensa ou associação do setor; a fonte primária não foi alcançada: vai atribuído, com o nome do veículo |
| NÃO CONFERIDO na origem | 1 | a fonte recusou leitura automática; o dado vem de registro da Sala |

Conferência: 204 de 204 achadas nas cópias; 8 derivadas (sem trecho próprio); checagens 63 de 63 OK; falhas: 0. Os scripts e os logs estão em `out/rio-columbia/_tmp/pesquisa-dados/`.

## s17 (DF-06): o que saiu

- **Pedido:** as 12 barras com um período anterior às barragens, e o '≈ 60 % em maio–julho' conferido antes de desenhar.
- **Série:** USGS 14105700, médias mensais 1879–1967 (baixadas hoje): out/rio-columbia/_dados/tabela-ano-do-rio-the-dalles.csv.
- **Resultado:** NÃO confirma: maio–julho = 51.4 % (1879–1967) e 52.2 % (1879–1940); abril–julho = 59.8 %.
- **Saiu:** s17 fica com a divisão ≈ 60 / 40 atribuída ao CRS, sem barras mensais; a decisão de mudar é do Lucas.

## Os seis números sem linha na tabela final (Sala, item 7)

Registrados palavra por palavra. Quem os libera para a tela é o `verificador-de-fatos`, com o `redator-de-tela`.

- **s23 · 30/05/1948, em Vanport** — USGS, Water-Supply Paper 1080 (1949), p. 9. Achado: sim.
  > The greatest single disaster of the flood occurred at Vanport, Oreg., when a railroad fill serving as a dike broke at 4:15 p.m. on Sunday, May 30.
  (o ano está no título do relatório ('Floods of May–June 1948 in Columbia River Basin'); 30/05/1948 foi domingo)
- **s30 · US$ 253.929.534,25** — troca de notas de 16/09/1964, no texto oficial da ONU (UNTS vol. 542, No. 7894, p. 37 do PDF) e na transcrição do IWLP. Achado: sim.
  > Contemporaneously with the exchange of the instruments of ratification CSPE shall have paid to Canada the sum in United States funds of $253,929,534.25, being the equivalent of the sum of $254,400,000 in United States funds as of October 1, 1964 adjusted to September 16, 1964 at a discount rate of 4 1/2 percent per annum
  (a CSG West transcreve '$254,000,000'; o oficial dá 254,400,000 (também nas notas de 22/01/1964), e a aritmética só fecha com ele)
- **s51 · 110.000 ha** — Governo da Colúmbia Britânica, 'About the Columbia River Treaty'. Achado: sim.
  > The Treaty dams and reservoirs inundated 110,000 hectares (270,000 acres) of Canadian ecosystems, displaced more than two thousand residents as well as First Nations, communities and infrastructure
  (na tela, imperial primeiro: 270,000 ACRES (110,000 HA))
- **s55 · 1.141 → 550 MW** — Governo da BC, backgrounder de 11/07/2024; CRS, Table 1 (Departamento de Estado, 26/07/2024). Achado: sim.
  > The CE for the current (2023-2024) operating year is 1,141 megawatts (MW) in hydropower generation capacity and 454 average MW (aMW) of energy. The anticipated schedule that reduces the CE at the beginning of the 2024-2025 operating year (beginning Aug. 1, 2024), starts from 660 MW capacity and 305 aMW of energy, stabilizing in 2033-2034 at 550 MW of capacity and 225 aMW of energy, and ending in 2044.
  (o −37 % não sai desta tabela (capacidade −42.2 %, energia −32.8 %))
- **s57 · US$ 29,9 milhões das PUDs** — o comunicado das três PUDs de 25/09/2026 (NÃO alcançado); lido na APPA e no The Star. Achado: só em imprensa/associação.
  > The PUDs also agreed to make a one-time payment totaling $29.9 million to cover the unpaid contributions dating back to September 2024 when payments were suspended during the dispute through May 2026.
  (o mesmo texto nos dois; a Sala pode ler o comunicado no site de uma das PUDs (Chelan, Grant ou Douglas) pelo navegador do app)
- **s53 · os 21 Sinixt de 1902 e a uma de 1930** — Suprema Corte do Canadá, R. v. Desautel, 2021 SCC 17, §6. Achado: sim.
  > By 1902, only 21 Sinixt still lived on their traditional territory in Canada, in the Arrow Lakes Band reserve. By 1930, only one person remained on the rolls of the Arrow Lakes Band, and after her death in 1956, the government of Canada declared the Arrow Lakes Band extinct
  ([2021] 1 S.C.R., p. 549)

## O estudo da BC dos US$ 40–150 milhões (s42 P2)

- **Data:** June 25, 2013 (BC Ministry of Energy and Mines, 'U.S. Benefits from the Columbia River Treaty – Past, Present and Future: A Province of British Columbia Perspective', June 25, 2013, p. 11; https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/US-Benefits-from-CRT-June-20-13-2.pdf).
- **Trecho:** "BC Hydro analysis estimated U.S. energy losses due to effective use at these facilities (in a Called Upon year) to be approximately 1,300-3,000 gigawatt hours with an estimated value of $40 to $150 million."
- **Divergência:** o original é 'in a Called Upon year'; o CRS (e a voz) dizem 'per year'.

## Divergências (para a Sala, o verificador e o redator; nenhuma muda a voz, e quem decide é o Lucas)

- **s14** — As duas medidas do USGS não batem: 1981 dá 498 de 1,243 mi no Canadá (40.1 %); 2007 dá 664 de 1,942 km (413 de 1,207 mi, 34.2 %). As duas passam de um terço ('a third or more', a voz). A tela leva a de 1981 com o ano (F018, já na tabela); a outra, só na descrição
- **s16, s17, s60** — s17 (DF-06): o CRS diz 'Approximately 60% of this runoff occurs in May, June, and July', sem nota de rodapé própria. A série medida do USGS em The Dalles (14105700, médias mensais, 89 anos de 1879 a 1967, antes das barragens do tratado) dá 51.4 % do volume do ano em maio–julho (1879–1940, antes do Grand Coulee: 52.2 %); só 2 dos 89 anos chegam a 60 %. Abril–julho dá 59.8 %. O medidor canadense (Birchbank, 1938–1967) dá 58.8 %, mas é o rio na Colúmbia Britânica, não 'the whole basin'. A voz está gravada ('About 60 percent of the water that runs off the whole basin'); a tela pode citar o CRS, como cita; o que não pode é pôr as barras de The Dalles sob o '≈ 60%'. Quem decide é o Lucas
- **s30** — A transcrição da CSG West (a cópia que o dossiê usa para o tratado) escreve '$254,000,000' como valor-base; o texto oficial da ONU (UNTS vol. 542, No. 7894) e o IWLP dão $254,400,000, e só esse fecha a conta do próprio texto (4.5 % ao ano, 15 dias). As notas de 22/01/1964 (UNTS): 'The purchase price of the entitlement shall be $254,400,000, in United States funds as of October 1, 1964'. A voz ('about 254 million dollars') e a tela ('≈ $254 MILLION', da USACE + BPA) continuam certas; a cifra exata, se for à tela, sai do oficial
- **s32** — F197 ('434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June') é PREVISÃO da BC Hydro para 2018 ('the reservoir is expected to refill … by the end of April 2018, … by end of May and … by the end of June'), não medida e não de 2017. Para a forma da linha, sem número, serve; se um ponto for à tela, a medida é a do WSC 08NE104 (ver s61)
- **s37** — O código 1 do USGS ('Discharge is a Maximum Daily Average') marca 48 anos, de 1961 a 2008, e não só 1974–2008 como dizem o espelho, o dossiê e o laudo (pauta §10.1; roteiro-editor, linhas 251 e 320; fatos.laudo.md, linha 54). O verificador contou os 7 de 1961–1967 em fatos-medidas.txt, mas o rótulo ficou '1974–2008'. Dentro de 1879–1967 são 7 anos (1961–1967), 3 deles acima de 600,000 (1961 699,000; 1964 662,000; 1967 622,000). A contagem não muda: média diária ≤ pico instantâneo, então os 3 continuam acima, e os outros 4 (1962 460,000; 1963 437,000; 1965 520,000; 1966 396,000) teriam de ganhar de 80,000 a 204,000 cfs num só dia para cruzar a linha. '40 of 89' vale como 'pelo menos 40'. O rótulo da tela e o crédito devem dizer '1961–2008: daily averages'
- **s42** — O estudo da BC (BC Ministry of Energy and Mines, 25/06/2013, p. 11; lido hoje no original) diz: 'BC Hydro analysis estimated U.S. energy losses due to effective use at these facilities (in a Called Upon year) to be approximately 1,300-3,000 gigawatt hours with an estimated value of $40 to $150 million.' É o valor num ano em que o Canadá é chamado, não um custo de todo ano. O CRS (nota 40) resumiu como 'per year', e a voz segue o CRS: 'would cost the United States 40 to 150 million dollars a year' e 'Beside the Canadian one, which is per year, it looks cheap'. A voz está gravada; a tela não deve dizer mais que o original ('PER YEAR' sozinho). A comparação 'per call × per year' perde força: as duas cifras são por evento. Quem decide é o Lucas
- **s42** — Detalhe de dono: a cifra é 'BC Hydro analysis' num documento do governo da província; 'CANADIAN ENTITY' (a BC Hydro, nota 2 do CRS) está certo
- **s55** — O '−37%' (Departamento de Estado, 25/11/2024, pelo CRS) não sai de nenhuma coluna da tabela do mesmo CRS: capacidade −42.2 %, energia −32.8 %. Pela energia sozinha o corte é MENOS de um terço. A voz ('more than a third') e a tela seguem a cifra atribuída, e estão fiéis a ela; o que não se pode é pôr os MW ao lado do −37 % como se fossem a conta dele
- **s61** — F168 ('434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June', BC Hydro 2018) é PREVISÃO para 2018 ('the reservoir is expected to refill … by the end of April 2018, … by end of May and … by the end of June'), não medida. O espelho a chama de 'os pontos de 2017': errado. A forma da subida que ela descreve está certa; se pontos forem à tela, os medidos de 2017 (WSC 08NE104, abertos) estão aqui

## Voláteis

Os voláteis foram lidos hoje (12/11/2026) pelo verificador de fatos (web/: BILLSTATUS do S. 4949, a página do tratado da BC, a APPA, o The Star) ou estão na leitura mais recente que existe (Canadian Geographic, 17/08/2026; BC Hydro, 23/06/2026; CRS, 03/12/2024). Esta tarefa não os releu de novo; relê-se antes do render.

- **s09** — 'still paused' é volátil: Canadian Geographic (imprensa), 17/08/2026, 'At the time of writing, the negotiations are still paused'; a Entidade Canadense (BC Hydro, 23/06/2026, p. 8): 'Treaty negotiations between the two countries are currently paused'. Relê-se antes do render e antes da publicação.
- **s45** — 'To date, neither country has given notice of termination' (CRS, 03/12/2024): volátil. O state.gov e o congress.gov recusam leitura automática; relê-se antes do render pelo navegador do app (state.gov, a página do tratado) ou pela página do governo da BC.
- **s57** — O acordo das PUDs (25/09/2026): volátil, relê-se antes do render.
- **s58** — O AIP não finalizado, a pausa e as três Nações: voláteis. 'still paused' é imprensa (Canadian Geographic, 17/08/2026); a BC Hydro (23/06/2026) diz 'currently paused'. Relê-se antes do render.
- **s59** — S. 4949 (BILLSTATUS lido hoje pelo verificador: última ação 15/07/2026, 'Placed on Senate Legislative Calendar under General Orders. Calendar No. 457.') e 'IN FORCE': voláteis, relidos antes do render e da publicação.
- **s63** — 'required to pay Canada annual payments of USD' (BC Hydro 2026, p. 7): volátil, relê-se antes da publicação.

## Não conferido

- **s45** — o título do vídeo da CBC: cbc.ca deu 403 (e o YouTube recusou); vem do registro da Sala, sem data
  - **Superado** (12/11/2026, ~12:5x; a Sala no navegador do app, `navegador-sala.md`): o vídeo é "Could ending a water treaty help
    Canada fight U.S. tariffs?", do canal CBC News, publicado em 17/02/2025 (youtube 93-86JKvjcc): o cartão leva "CBC NEWS · FEB. 17,
    2025". Marcado pela Sala em 12/11/2026, ~14:5x (o VR-12 do verificador do research).
- **s57** — o comunicado das PUDs de 25/09/2026 (a fonte primária dos 25 %, dos 27,5 % e dos US$ 29,9 milhões): não alcançado
- **s55** — o comunicado do Departamento de Estado de 25/11/2024 (o −37 %): state.gov recusa leitura automática; lido só pelo CRS
  - **Superado** (12/11/2026, ~12:3x; a Sala no navegador do app, `navegador-sala.md`): a nota de 25/11/2024 abriu no arquivo oficial
    do próprio Departamento (2021-2025.state.gov): "Beginning on August 1, the Canadian Entitlement decreased by 37%". Marcado pela
    Sala em 12/11/2026, ~14:5x.

## O texto oficial do tratado

As 11 citações do tratado, do Protocolo e da troca de notas que o espelho usa (F011, F047, F049, F053, F054, F055, F058, F068, F100, F104, F232) e a cifra de 1964 foram achadas no texto oficial da ONU (UNTS vol. 542, No. 7894), que o pesquisa-documentos baixou hoje; a transcrição da CSG West, que o dossiê usou, erra o valor-base de s30.

## Fontes novas de dado aberto, e a licença da BC Hydro

- **o nível do Arrow (série de 1970 a 2025 e o diário de 2017)** — Environment and Climate Change Canada, Water Survey of Canada, station 08NE104 Arrow Reservoir at Nakusp (water level, m; contributor: BC Hydro). Licença: Open Government Licence – Canada e ECCC Data Servers End-use Licence (uso comercial permitido, com atribuição; fatos-c, item 9a): 'Data: Environment and Climate Change Canada, Water Survey of Canada (station …). Contains information licensed under the Open Government Licence – Canada.', com o link da licença na descrição; a estação tem a BC Hydro como contribuinte (Third Party Information Contributor): a licença da ECCC pede indicá-la 'if possible' ('Data Source: Environment and Climate Change Canada and …'), e não dá direito a usar nome ou logo dela
- **o nível do lago antes da barragem (1922–1969, datum arbitrário)** — Environment and Climate Change Canada, Water Survey of Canada, station 08NE045 Upper Arrow Lake at Nakusp (water level, m, assumed datum; discontinued). Licença: Open Government Licence – Canada e ECCC Data Servers End-use Licence (uso comercial permitido, com atribuição; fatos-c, item 9a): 'Data: Environment and Climate Change Canada, Water Survey of Canada (station …). Contains information licensed under the Open Government Licence – Canada.', com o link da licença na descrição
- **a licença da BC Hydro (lida na origem)** — bchydro.com/siteinfo/legal.html. Licença: NÃO aberta: 'available for informational and noncommercial uses offline only … and permission is granted by BC Hydro'. A série do próprio site não se usa; a mesma estação está aberta pela ECCC (08NE104). A Sala decide

## Por cena

| Cena | Tela sugerida | Crédito sugerido | Status | Pedidos |
|---|---|---|---|---|
| s01 | ARROW LAKES RESERVOIR · BRITISH COLUMBIA (rótulo de lugar; sem número) |  | qualitativo_conferido | qualitativo_conferido 1 |
| s03 | SINCE THE 2025 FLOOD SEASON | Source: U.S. Public Law 118-272 | conferido_primario | conferido_primario 1 |
| s04 | $37.6M A YEAR · STARTING VALUE, INDEXED TO INFLATION | Source: U.S. Public Law 118-272; BC Hydro, 2026 | conferido_primario | conferido_primario 2 |
| s05 | ≈ 15% OF THE BASIN IN CANADA | Source: U.S. Army Corps of Engineers & Bonneville Power Administration, 2013 | conferido_primario | conferido_primario 1 |
| s06 | BRITISH COLUMBIA (sem número) |  | qualitativo_conferido | qualitativo_conferido 1 |
| s07 | HUGH KEENLEYSIDE DAM (rótulo de lugar) |  | conferido_primario | conferido_primario 1 |
| s08 | INTERIM DEAL · LAST FLOOD SEASON IT CAN COVER · SPRING 2027 | Source: U.S. diplomatic note, Nov. 22, 2024 | conferido_primario | conferido_primario 2 |
| s09 | TALKS PAUSED · MAR. 11, 2025 | Source: Government of British Columbia, Mar. 11, 2025 | conferido_primario | atribuido_imprensa 1; conferido_primario 1 |
| s10 | COLUMBIA RIVER TREATY · ART. IV(3) / “Canada shall, when called upon…” | Source: Columbia River Treaty, Art. IV(3) | qualitativo_conferido | qualitativo_conferido 1 |
| s13 | LARGEST HYDROPOWER-PRODUCING RIVER SYSTEM IN THE U.S. / COLUMBIA LAKE · BRITISH COLUMBIA | Source: Congressional Research Service, 2024; USGS, 1981 | atribuido_conferido | atribuido_conferido 2 |
| s14 | 498 OF 1,243 MI IN CANADA / FORMER BIG BEND · UNDER KINBASKET LAKE | Source: USGS, 1981; BC Geographical Names | conferido_primario | conferido_primario 4 |
| s15 | BASIN | Source: BC Hydro, 2026 | qualitativo_conferido | qualitativo_conferido 1 |
| s16 | (sem número; o ≈ 60% vai a s17) | Source: Congressional Research Service, 2024 | atribuido_conferido | atribuido_conferido 1 |
| s17 | ≈ 60% OF THE YEAR'S RUNOFF IN MAY–JULY (só a divisão ≈ 60 / 40, sem barras mensais) | Source: Congressional Research Service, 2024 | atribuido_conferido | atribuido_conferido 1; conferido_primario 1 |
| s18 | BIRCHBANK · WATER SURVEY OF CANADA 08NE049 / 12 MI NORTH OF THE BORDER / THE DALLES, OREGON · USGS 14105700 | Data: Environment and Climate Change Canada, Water Survey of Canada (station 08NE049). Contains information licensed under the Open Government Licence – Canada. · Source: USGS | conferido_primario | conferido_primario 4 |
| s19 | 87 YEARS (1938–2024) / ≈ 39% · MEASURED AT BIRCHBANK, B.C. / ≈ 15% OF THE BASIN · USACE & BPA, 2013 | Alpha Point calculation: Water Survey of Canada (station 08NE049), USGS (14105700). Contains information licensed under the Open Government Licence – Canada. | calculado_conferido | calculado_conferido 3 |
| s20 | BC HYDRO · CANADIAN ENTITY / “Most hydropower production and need for flood control is in the USA.” | Source: Congressional Research Service, 2024; BC Hydro, 2026 | atribuido_conferido | atribuido_conferido 4 |
| s21 | JUNE ≈ 10× FEBRUARY · 1938–1967 / JUNE 216,620 CFS / FEBRUARY 20,832 CFS / BEFORE THE BIG STORAGE DAMS | Alpha Point calculation: Water Survey of Canada (station 08NE049). Contains information licensed under the Open Government Licence – Canada. | calculado_conferido | calculado_conferido 1 |
| s22 | VANPORT, OREGON · 1948 / TRAIL, B.C. / PORTLAND | Source: USGS, 1949; U.S. Army Corps of Engineers & Bonneville Power Administration, 2013 | conferido_primario | conferido_primario 2 |
| s23 | VANPORT · MAY 30, 1948 / AT LEAST 51 DEAD · THE WHOLE 1948 FLOOD · USGS, 1949 / 38,500 HOMELESS · RED CROSS, IN USGS 1949 | Source: USGS, 1949 | conferido_primario | conferido_primario 5 |
| s24 | (o rótulo do espaço reservado é do redator) | Source: BC Hydro, 2026 | qualitativo_conferido | qualitativo_conferido 2 |
| s25 | LIBBY DAM · PROPOSED 1951 / MONTANA | Source: Congressional Research Service, 2024 | atribuido_conferido | atribuido_conferido 2 |
| s26 | COLUMBIA RIVER TREATY / SIGNED JAN. 17, 1961 · IN FORCE SEPT. 16, 1964 / SEPT. 16, 1964 · BLAINE, WASH. / SURREY, B.C. | Source: U.S. Public Law 118-272; USACE & BPA, 2013 | conferido_primario | conferido_primario 2 |
| s27 | MICA · KINBASKET / HUGH KEENLEYSIDE · ARROW / DUNCAN / LIBBY DAM · MONTANA / LAKE KOOCANUSA · 42 MI INTO CANADA | Source: USACE & BPA, 2013; Columbia River Treaty Protocol, 1964 | conferido_primario | conferido_primario 4 |
| s28 | $64.4 MILLION · LUMP SUMS AS EACH DAM CAME INTO SERVICE · 60 YEARS OF FLOOD CONTROL / 50% OF THE EXPECTED U.S. FLOOD DAMAGE PREVENTED / ARROW: $52.1M OF $64.4M | Source: USACE & BPA, 2013; Columbia River Treaty, Art. IV and VI | conferido_primario | conferido_primario 4 |
| s29 | 1964 → 2024 · 60 YEARS | Source: Columbia River Treaty, Art. IV(2) | conferido_primario | conferido_primario 2 |
| s30 | CANADIAN ENTITLEMENT · HALF · DELIVERED AS ELECTRICITY / ≈ $254 MILLION · THE FIRST 30 YEARS, SOLD UP FRONT · SEPT. 16, 1964 | Source: Columbia River Treaty, Art. V; USACE & BPA, 2013; exchange of notes, Sept. 16, 1964 | conferido_primario | conferido_primario 6 |
| s31 | 1964–2024 / ROOM FOR MONEY · STORED WATER FOR POWER | Source: Columbia River Treaty, Art. IV(2) | conferido_primario | conferido_primario 1 |
| s32 | (nenhum texto: a inscrição está na tela) |  | qualitativo_conferido | qualitativo_conferido 3 |
| s33 | INSURANCE? / $37.6M A YEAR / ONCE, UP FRONT · 1964 TREATY / EVERY YEAR · SINCE THE 2025 FLOOD SEASON / 2025 · 2026 · 2027 | Source: USACE & BPA, 2013; U.S. Public Law 118-272 | conferido_primario | conferido_primario 2 |
| s34 | SEPT. 16, 2024 / CALLED UPON · STILL IN FORCE | Source: Government of British Columbia; US diplomatic note, Nov. 22, 2024 | conferido_primario | conferido_primario 2 |
| s35 | CALLED-UPON FLOOD CONTROL / ONLY FOR FLOODS U.S. STORAGE CAN'T CONTROL · 1964 PROTOCOL / ON CALL | Source: Congressional Research Service, 2024; Columbia River Treaty Protocol, 1964 | atribuido_conferido | atribuido_conferido 3 |
| s36 | NOT CURRENTLY DEFINED IN THE TREATY · CRS, 2024 / CUBIC FEET PER SECOND (CFS) / 450,000–650,000 CFS · U.S. ENTITY STUDIES / 600,000 CFS · CANADIAN ENTITY ASSUMPTION / THE GAP | Source: Congressional Research Service, R43287, Dec. 2024; U.S. Army Corps of Engineers, 2013 | atribuido_conferido | atribuido_conferido 7 |
| s37 | 40 OF 89 YEARS · 1879–1967 / SINCE 2009 / 1961–2008: DAILY AVERAGES (o espelho diz 1974–2008: ver a divergência) / 2010 · 2011 · 2012 · 2017 · 2018 · 2020 | USGS annual peak streamflow, The Dalles (14105700). 1961–2008: daily averages. | calculado_conferido | calculado_conferido 5 |
| s38 | PUBLIC LAW 118-272 · APPROVED JAN. 4, 2025 / HUGH KEENLEYSIDE DAM / 3,600,000 ACRE-FEET A YEAR · PRE-PLANNED FLOOD STORAGE | Source: U.S. Public Law 118-272; BC Hydro, 2026 | conferido_primario | conferido_primario 3 |
| s39 | 1 ACRE-FOOT / 1 ACRE / 1 FOOT | Source: Government of British Columbia, 2024 | conferido_primario | conferido_primario 1 |
| s40 | PUBLIC LAW 118-272 · SEC. 1152 / “including operations that the Government of Canada may not be obligated to provide under the Columbia River Treaty” | Source: U.S. Public Law 118-272, sec. 1152 | qualitativo_conferido | qualitativo_conferido 1 |
| s41 | WINTER DRAWDOWN (opcional) / KEPT EMPTY · EVERY YEAR OF THE DEAL | Source: U.S. Army Corps of Engineers, 2013; Congressional Research Service, 2024; U.S. Public Law 118-272 | atribuido_conferido | atribuido_conferido 4 |
| s42 | PER CALL: $4–34 MILLION · U.S. ENTITY / $40–150 MILLION IN LOST POWER IN A CALLED-UPON YEAR · BC, 2013 (sugestão; ver a divergência) / $37.6M PER YEAR | Source: Congressional Research Service, 2024; Government of British Columbia, 2013; U.S. Public Law 118-272 | atribuido_conferido | atribuido_conferido 3 |
| s43 | NO NUMBER SAYS WHEN / PRE-PLANNED / CALLED UPON / TREATY · THE PROMISE (ON CALL) / DEAL · THE ROOM (RESERVED EVERY YEAR) | Source: Columbia River Treaty, Art. IV(3); US diplomatic note, Nov. 22, 2024 | qualitativo_conferido | qualitativo_conferido 5 |
| s44 | (sem texto) |  | qualitativo_conferido | qualitativo_conferido 1 |
| s45 | CBC NEWS / “Could ending a water treaty help Canada fight U.S. tariffs?” / ADRIAN DIX · B.C. MINISTER OF ENERGY AND CLIMATE SOLUTIONS · MAR. 25, 2025 / COLUMBIA RIVER TREATY · ART. XIX(2) / “at least ten years written notice” / NO NOTICE GIVEN · CRS, DEC. 2024 | Source: The Canadian Press (CFJC Today), Mar. 25, 2025; OPB, Mar. 28, 2025; Columbia River Treaty, Art. XIX; Congressional Research Service, 2024 | conferido_primario | NÃO CONFERIDO na origem 1; atribuido_conferido 1; atribuido_imprensa 2; conferido_primario 2 |
| s46 | 15.5 MILLION ACRE-FEET / ≈ 6 WEEKS OF AVERAGE FLOW AT THE DALLES / ≈ 3.5 MONTHS AT BIRCHBANK | Source: Columbia River Treaty, Art. II · Alpha Point calculation: Water Survey of Canada (station 08NE049), USGS (14105700). Contains information licensed under the Open Government Licence – Canada. | calculado_conferido | calculado_conferido 5 |
| s47 | BEFORE THE BIG STORAGE DAMS · 1938–1967 / AFTER THE LAST ONE · 1974–2025 / ≈ 2× / MAY–JULY: 59% → 32% / DEC.–FEB.: 8% → 26% (sugestão: inteiros) | Alpha Point calculation: Water Survey of Canada (station 08NE049). Contains information licensed under the Open Government Licence – Canada. · Source: BC Hydro, 2026 | calculado_conferido | calculado_conferido 5 |
| s48 | “must be agreed to by both Canada and the U.S.” · BC HYDRO, 2026 | Source: BC Hydro, 2026 | atribuido_conferido | atribuido_conferido 2 |
| s49 | (sem número) | Source: U.S. Public Law 118-272 | qualitativo_conferido | qualitativo_conferido 1 |
| s50 | ARROW LAKES, B.C. (rótulo de lugar) / (o aviso do ano da foto) | Source: BC Hydro, 2018 · Source: U.S. Public Law 118-272; BC Hydro, 2026 | conferido_primario | conferido_primario 4 |
| s51 | ≈ 2,300 PEOPLE DISPLACED · MORE THAN 12 COMMUNITIES FLOODED / EDGEWOOD · RELOCATED / BURTON · RELOCATED / RENATA / MICA CREEK (FORMER TOWN) | Source: Government of British Columbia, 2012; BC Geographical Names | conferido_primario | conferido_primario 5 |
| s52 | GOVERNMENT OF BRITISH COLUMBIA / “could be considered inadequate to non-existent by today’s standards” | Source: Government of British Columbia, “About the Columbia River Treaty” | qualitativo_conferido | qualitativo_conferido 1 |
| s53 | SINIXT · TRADITIONAL TERRITORY / “after her death in 1956, the government of Canada declared the Arrow Lakes Band extinct” / R. v. DESAUTEL · 2021 SCC 17 · APR. 23, 2021 / SUPREME COURT OF CANADA | Source: Supreme Court of Canada, R. v. Desautel, 2021 SCC 17, para. 6 | conferido_primario | conferido_primario 6 |
| s54 | GRAND COULEE DAM / 1941 (no mapa) / KETTLE FALLS (opcional) | Source: U.S. Bureau of Reclamation | conferido_primario | conferido_primario 3 |
| s55 | AUG. 1, 2024 / −37% · SINCE AUG. 1, 2024 · U.S. STATE DEPARTMENT, NOV. 25, 2024 / ONCE, UP FRONT · 1964 TREATY / EVERY YEAR · SINCE THE 2025 FLOOD SEASON | Source: Congressional Research Service, 2024 · Source: Government of British Columbia, 2024; Columbia River Treaty, Art. VI(1) | atribuido_conferido | atribuido_conferido 5 |
| s56 | $180–280 MILLION A YEAR · U.S. ENTITY, JUNE 2012 / DISPUTED BY BRITISH COLUMBIA / CANADA'S SHARE: TYPICALLY 110–400 MILLION A YEAR · BC HYDRO, JUNE 2026 (sem '$') | Source: Congressional Research Service, 2024 (U.S. Entity study, June 2012); BC Hydro, 2026 | atribuido_conferido | atribuido_conferido 4 |
| s57 | FEDERAL · PUBLIC LAW 118-272 / CHELAN · GRANT · DOUGLAS / JUNE 2024: LAWSUIT · SEPT. 2024: STOPPED PAYING · SEPT. 25, 2026: SETTLEMENT / 25% OF CANADA'S SHARE · SEPT. 2026 SETTLEMENT | Source: U.S. Public Law 118-272 · Source: American Public Power Association, Sept. 25, 2026; The Star (Grand Coulee), Sept. 30, 2026 | conferido_primario | atribuido_imprensa 4; conferido_primario 1 |
| s58 | AGREEMENT IN PRINCIPLE · JULY 11, 2024 / NOT FINALIZED · BC HYDRO, JUNE 2026 / KTUNAXA · SYILX-OKANAGAN · SECWÉPEMC / TALKS PAUSED · MAR. 11, 2025 / STILL PAUSED · CANADIAN GEOGRAPHIC, AUG. 17, 2026 | Source: Congressional Research Service, 2024; Global Affairs Canada, May 28, 2025; Government of British Columbia, Mar. 11, 2025 | conferido_primario | atribuido_imprensa 1; conferido_primario 4 |
| s59 | 2025 · 2026 · 2027 / UP TO 3 OPERATING YEARS · ENDS JULY 31, 2027 AT THE LATEST / AUTHORITY EXPIRES AUG. 31, 2027 · PUBLIC LAW 118-272 / S. 4949 WOULD MOVE IT TO 2029 · ON THE SENATE CALENDAR SINCE JULY 15, 2026 · AS OF NOV. 12, 2026 / COLUMBIA RIVER TREATY · IN FORCE | Source: US diplomatic note, Nov. 22, 2024; U.S. Public Law 118-272 · Source: U.S. Senate, S. 4949 (2026); govinfo | conferido_primario | conferido_primario 4 |
| s60 | ARROW LAKES, B.C. / 1,401.4 FT · FEB. 4, 2017 · BC HYDRO (opcional) | Source: BC Hydro, 2018 | atribuido_conferido | atribuido_conferido 1; conferido_primario 1 |
| s61 | (a data de cada cena do par; pontos de nível só se a tela quiser, medidos: 'MAY 31, 2017: 1,427.6 FT · JUNE 30, 2017: 1,440.1 FT') | Data: Environment and Climate Change Canada, Water Survey of Canada (station 08NE104), with BC Hydro. Contains information licensed under the Open Government Licence – Canada. | conferido_primario | conferido_primario 2 |
| s62 | (sem número) | Source: U.S. Public Law 118-272 | qualitativo_conferido | qualitativo_conferido 1 |
| s63 | SPRING 2027 | Source: US diplomatic note, Nov. 22, 2024 | conferido_primario | conferido_primario 3 |

## Tabelas e séries

- `out/rio-columbia/_dados/serie-picos-the-dalles-1879-2025.csv` (147 linhas): s37. USGS 14105700, picos anuais por ano hidrológico (1/out a 30/set), 1879–2025, 147 anos. Código 1 = 'Discharge is a Maximum Daily Average' (todos de 1961 a 2008, 48 anos); 6 = 'affected by Regulation or Diversion'. As linhas de 600,000, 450,000 e 650,000 cfs são as do CRS, nota 39.
- `out/rio-columbia/_dados/tabela-ano-do-rio-birchbank.csv` (12 linhas): s21, s47. WSC 08NE049 (Birchbank), média de cada mês sobre os anos completos: 30 (1938–1967) e 52 (1974–2025). cfs = m³/s ÷ 0.028316846592.
- `out/rio-columbia/_dados/tabela-ano-do-rio-the-dalles.csv` (12 linhas): s17 (DF-06), SÓ REFERÊNCIA: USGS 14105700, médias mensais (NWIS, baixado hoje). Maio–julho = 51.4 % do volume em 1879–1967 e 52.2 % em 1879–1940: estas barras NÃO vão sob o rótulo '≈ 60%' do CRS.
- `out/rio-columbia/_dados/serie-anual-birchbank-the-dalles-1938-2024.csv` (87 linhas): s19. As 87 séries anuais casadas: Birchbank (média das 12 médias mensais do WSC 08NE049, em cfs) e The Dalles (média anual do USGS 14105700). A razão das médias é 39.3 %.
- `out/rio-columbia/_dados/serie-nivel-arrow-mensal.csv` (12 linhas): s41, s50, s60 (opcional). Nível médio de cada mês do Arrow em Nakusp: 08NE104 (reservatório, Geodetic Survey of Canada, local 1970 adj.; contribuinte BC Hydro), 51 anos completos; 08NE045 (o lago antes da barragem, datum ARBITRÁRIO: só a forma, nunca a altitude), 25 anos completos de 1931 a 1967.
- `out/rio-columbia/_dados/serie-nivel-arrow-2017-diario.csv` (365 linhas): s61, s60, s50 (opcional). Arrow em Nakusp (WSC 08NE104), média diária de 2017: mínimo 427.217 m em 5/fev; máximo 439.520 m em 27/jul.
- `out/rio-columbia/_dados/tabela-parte-do-canada-2024-2044.csv` (7 linhas): s55. A parte do Canadá (Canadian Entitlement) no acordo em princípio de 2024. O −37 % do Departamento de Estado (25/11/2024) não sai de nenhuma coluna desta tabela.
- `out/rio-columbia/_dados/tabela-pagamentos-1964.csv` (4 linhas): s28. Dólares de 1964, correntes. Arrow = 80.9 % do total.
- `out/rio-columbia/_dados/tabela-tres-quantias.csv` (3 linhas): s42. As três quantias, cada uma com a sua unidade e o seu dono. Ver a divergência de s42.

## A rede (um pedido por vez, User-Agent do canal)

- waterservices.usgs.gov/robots.txt → 404 (sem robots.txt)
- waterservices.usgs.gov/nwis/stat (mensal, 14105700) → 200; 'retrieved: 2026-11-12 09:21:41 -05:00'
- api.weather.gc.ca, hydrometric-stations (bbox do Arrow) → 200
- api.weather.gc.ca, hydrometric-monthly-mean 08NE104 → 200 (680 meses)
- api.weather.gc.ca, hydrometric-monthly-mean 08NE045 → 200 (567 meses)
- api.weather.gc.ca, hydrometric-daily-mean 08NE104, 2017 → 200 (365 dias)
- www.bchydro.com/robots.txt → 200 (a página de níveis e a legal são permitidas)
- bchydro.com, previous-reservoir-elevations/columbia.html → 200 (aponta o wateroffice.gc.ca para os dados ampliados)
- bchydro.com/siteinfo/legal.html → 200 (a licença: uso não comercial, com permissão)
- news.gov.bc.ca/robots.txt → 200
- news.gov.bc.ca, newsletter CRT edição 8 → 404 com a casca do site: PAREI ali, não se tentou de novo (vai para a Sala)
- engage.gov.bc.ca/robots.txt → 200
- engage.gov.bc.ca/columbiarivertreaty/review/additional-information/ → 200 (a lista de documentos)
- engage.gov.bc.ca, US-Benefits-from-CRT-June-20-13-2.pdf → 200 (o estudo da BC de 25/06/2013)
- www.grantpud.org/robots.txt → 200
- www.grantpud.org/news → 200 (o acordo das PUDs não está na 1.ª página)
- www.grantpud.org/blog/?feed=rss2 → 200, mas HTML e não RSS: PAREI ali
- www.eia.gov/robots.txt → 200
- www.eia.gov/todayinenergy/detail.php?id=16891 → 200
