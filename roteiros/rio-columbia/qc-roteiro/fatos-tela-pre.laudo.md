COBERTURA: 29 de 29

# Vídeo 7 (`rio-columbia`), screen_text: a pré-conferência dos fatos de tela

- **Data-base:** 13/11/2026 (as cópias locais lidas são de 09/11 e 12/11/2026; o que se leu na rede hoje leva a data no bloco).
- **Como a lista foi derivada:** à mão, dos 9 grupos de `out/rio-columbia/_tmp/verificar-tela/pedido-pre.md` (os itens 12, 54,
  52, 61, 55, 19, 70, 17/51 e 24 de `_tmp/verificar-espelho/para-passos-seguintes.json`, `8a6fd7f8…`). Cada número, data, nome
  ou frase que um grupo pede virou um fato; os limites que mudam a forma de tela viraram fatos próprios (P04, P17, P19, P23, P24,
  P26, P28). Não há extrator: o denominador é este, e ele não cobre o `textos-tela.json` (a passada inteira vem depois).
- **Placar:** 21 `confirmado` · 3 `corrigir` · 5 `NÃO CONFERIDO` · 0 `nada a checar`. CHECADO PARCIALMENTE não se aplica: os 29
  têm veredito. Os 5 `NÃO CONFERIDO` são fatos que a tela não deve afirmar (cada um tem a forma que fica de fora).
- **NOTA: 8/10.** As fontes primárias sustentam quase tudo o que a tela quer dizer; os riscos estão no rótulo (land, 1944, o
  crédito do 60 %), na moeda da BC Hydro e no que aconteceu na fronteira (o encontro, não a ratificação).
- **O que se escreveu:** este laudo; `out/rio-columbia/_tmp/verificar-tela/pre.json` (um objeto por fato); os scripts e saídas em
  `out/rio-columbia/_tmp/verificar-tela/` (`contas_pre.py` e `.txt`, `pdf_texto.py`, `montar_pre_json.py`, e a cópia do
  Backgrounder da BC relida hoje em `baixado/bc-backgrounder-2024/`, com os mesmos bytes da cópia local, sha256 `98607aa6…`).

## Os `corrigir`

| id | o quê | o conserto | URL |
|---|---|---|---|
| P04 | o rótulo de `_dados/s51.json`, "land inundated by the treaty dams and reservoirs (BC)" | a fonte diz "of Canadian ecosystems" (lagos e rios incluídos): `FLOODED` ou `ECOSYSTEMS FLOODED`, nunca `LAND` | https://engage.gov.bc.ca/columbiarivertreaty/about/ |
| P26 | o período de Donald em F020, "1944–2025" | o 1º ano completo é 1945: `1945–2025` | https://api.weather.gc.ca/collections/hydrometric-monthly-mean |
| P28 | o crédito do 60 % de s17 ao CRS (o `_dados/s17.json` e o espelho, com a voz antiga "the whole basin") | o crédito é o cálculo de Donald (P25); o CRS e as agências falam da bacia, que medida dá 51,4 % | https://www.osti.gov/servlets/purl/1132870 |

## Os `NÃO CONFERIDO`

| id | o quê | por quê | URL |
|---|---|---|---|
| P06 | os US$ 29,9 milhões das PUDs, como fato | só a APPA (o Star repete o texto); o comunicado das PUDs não se achou | https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments |
| P14 | a moeda dos 110–400 milhões da BC Hydro | a fonte põe o cifrão sem moeda; indício de CAD, sem prova | a cópia da Sala, `midia/rio-columbia/fontes/sala/bchydro-ops-update-2026-06-23.pdf` (URL não registrada) |
| P17 | o ano de entrada em serviço de cada barragem | USACE + BPA (1968, 1969, 1973) × governo da BC (1967, 1968, 1973) | https://www.osti.gov/servlets/purl/1132837 · https://engage.gov.bc.ca/columbiarivertreaty/treaty-highlights/ |
| P19 | Arrowhead "abandonada em 1964" | só o Commons; a BCGN diz "abandoned locality" sem ano, e o correio fechou em 1968 | https://apps.gov.bc.ca/pub/bcgnws/names/39855.html |
| P24 | a proclamação "Done at the International Peace Arch" | só a transcrição da CSG West; o American Presidency Project deu HTTP 504 duas vezes (servidor, não robô) | https://www.presidency.ucsb.edu/node/241532 |

Nenhum site recusou robô nesta tarefa (403, 405, captcha): o 504 do American Presidency Project é queda do servidor, e duas páginas
do boletim da BC deram 404. Nada foi contornado.

## 1 · Item 12: os seis números sem linha na tabela final

**P01 · Vanport, 30/05/1948 (s23) — `confirmado`.**
- Fonte: USGS, Water-Supply Paper 1080, *Floods of May-June 1948 in Columbia River Basin* (1949), p. 9 (PDF p. 19), cópia local
  sha256 `1fce9a46…`; https://pubs.usgs.gov/wsp/1080/report.pdf.
- Trecho: "The greatest single disaster of the flood occurred at Vanport, Oreg., when a railroad fill serving as a dike broke at
  4:15 p.m. on Sunday, May 30."
- Forma de tela: `VANPORT · MAY 30, 1948`.
- Limite: o ano vem do título e do cabeçalho de cada página; 30/05/1948 foi domingo. É a data do rompimento, não a do pico do rio
  (31/05, em The Dalles).

**P02 · US$ 253.929.534,25 × US$ 254.400.000 × "≈ $254 MILLION" (s30) — `confirmado`.**
- Fonte: UNTS vol. 542, No. 7894 (o texto registrado na ONU):
  https://treaties.un.org/doc/Publication/UNTS/Volume%20542/volume-542-I-7894-English.pdf.
- O que cada número é:
  - **$254,400,000** é o preço da venda, "in United States funds as of October 1, 1964" (notas de 22/01/1964, Anexo, 3(a), PDF
    p. 32; o Purchase Agreement, Section 3, PDF p. 42–43).
  - **$253,929,534.25** é o que a CSPE pagou ao Canadá em 16/09/1964: "being the equivalent of the sum of $254,400,000 in United
    States funds as of October 1, 1964 adjusted to September 16, 1964 at a discount rate of 4 1/2 percent per annum" (nota do
    Canadá de 16/09/1964, (5), PDF p. 37). A conta fecha ao centavo: 254.400.000 × (1 − 0,045 × 15/365) = 253.929.534,25
    (`contas_pre.txt`).
  - **"$254 million"** é o arredondamento de F056 (USACE + BPA).
- Forma de tela: `≈ $254 MILLION · SEPT. 16, 1964` (as duas cifras arredondam para ele). A exata, se for à tela:
  `$253,929,534.25 PAID SEPT. 16, 1964`. Nunca `$254,000,000` (a cópia CSG West erra).
- Limite: os "30 years" não contam de 1964. São três fatias, de 01/04/1968 (Duncan), 01/04/1969 (Arrow) e 01/04/1973 (Mica), que
  acabam até 31/03/2003 (UNTS, Anexo 1(a)–(b)): nunca `1964–1994`. O OCR da ONU troca o cifrão por "f" e o "4 1/2" por "4 %".

**P03 · Os 110.000 ha (s51) — `confirmado`.**
- Fonte: governo da Colúmbia Britânica, "About the Columbia River Treaty" (modified_time 2022-04-20), lida pelo
  pesquisa-documentos em 12/11/2026: https://engage.gov.bc.ca/columbiarivertreaty/about/.
- Trecho: "The Treaty dams and reservoirs inundated 110,000 hectares (270,000 acres) of Canadian ecosystems, displaced more than
  two thousand residents as well as First Nations, communities and infrastructure".
- Forma de tela (imperial primeiro): `270,000 ACRES (110,000 HA) FLOODED · GOVT. OF BRITISH COLUMBIA`.
- Limite: são "ecosystems", com os lagos e rios que já existiam. Na Tabela 1 da BC Review de 2012, os cinco lagos somam 119.353
  ha, e 107.902 sem Revelstoke (≈ 110.000), dos quais 51.407 eram lagos e rios antes. O número inclui a parte canadense do
  Koocanusa (Libby). Não é "land" nem "valley land": para "valley land", a BC Review dá ~60.000 ha, com Revelstoke.

**P04 · O rótulo "land" de `_dados/s51.json` — `corrigir`.** Ver a tabela do topo. Conserto: `FLOODED` ou `ECOSYSTEMS FLOODED`.

**P05 · 1.141 → 550 MW (s55) — `confirmado`.**
- Fonte: governo da BC, *Backgrounder* de 11/07/2024, relido online hoje (os mesmos bytes da cópia local):
  https://engage.gov.bc.ca/app/uploads/sites/6/2024/07/Backgrounder_ColumbiaRiverTreaty_July11_2024.pdf. Também a tabela do
  Departamento de Estado de 26/07/2024, lida pela Sala (`navegador-sala.md`).
- Trecho: "The CE for the current (2023-2024) operating year is 1,141 megawatts (MW) in hydropower generation capacity and 454
  average MW (aMW) of energy. The anticipated schedule that reduces the CE at the beginning of the 2024-2025 operating year
  (beginning Aug. 1, 2024), starts from 660 MW capacity and 305 aMW of energy, stabilizing in 2033-2034 at 550 MW of capacity and
  225 aMW of energy, and ending in 2044."
- Forma de tela: `−37% · SINCE AUG. 1, 2024 · U.S. STATE DEPARTMENT, NOV. 25, 2024`, como está. Se os MW forem à tela:
  `1,141 MW → 660 MW (AUG. 1, 2024) → 550 MW (2034–2044) · GOVT. OF B.C., JULY 2024`, numa linha que não seja a conta do −37%.
- Limite: as contas (`contas_pre.txt`) são estas:
  - 1.141 → 550 dá −51,8 % e só vale de 2033–34 em diante;
  - 1.141 → 660 dá −42,2 % (capacidade), e 454 → 305 dá −32,8 % (energia);
  - nenhuma é o 37 %, que é do próprio Departamento de Estado ("decreased by 37%").
  Nunca `1,141 → 550 MW` ao lado de `−37%`. O cronograma é "anticipated" e depende do tratado modernizado: é volátil.

**P06 · Os US$ 29,9 milhões das PUDs (s57) — `NÃO CONFERIDO`** na fonte primária.
- Fonte: só a APPA (Public Power Current, Paul Ciampoli, 25/09/2026); o The Star (30/09/2026) repete o texto palavra por palavra.
  O comunicado das três PUDs não apareceu (a busca de hoje; a Sala, em 12/11). URL:
  https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments.
- Trecho: "The PUDs also agreed to make a one-time payment totaling $29.9 million to cover the unpaid contributions dating back to
  September 2024 when payments were suspended during the dispute through May 2026."
- Forma de tela: fora da tela (recomendado); se entrar, a do P29.
- Limite: a APPA é a associação do setor das próprias PUDs. É volátil: o acordo ainda vai entrar em vigor ("until the agreement
  becomes effective").

**P07 · Os 21 Sinixt de 1902 (s53) — `confirmado`.**
- Fonte: Suprema Corte do Canadá, *R. v. Desautel*, 2021 SCC 17, [2021] 1 S.C.R., §6, p. 549 (cópia local de 09/11/2026, sha256
  `aecb46b9…`): https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do.
- Trecho: "By 1902, only 21 Sinixt still lived on their traditional territory in Canada, in the Arrow Lakes Band reserve."
- Forma de tela: `21 SINIXT · 1902 · ARROW LAKES BAND RESERVE`.
- Limite: a reserva da "Arrow Lakes Band" tinha também membros Ktunaxa e Secwepemc (o voto vencido, Côté J., §131). A Band não é
  "os Sinixt", e a morte de 1956 não é "a do último Sinixt".

**P08 · A uma pessoa de 1930 (s53) — `confirmado`.**
- Fonte: §6, p. 549. Trecho: "By 1930, only one person remained on the rolls of the Arrow Lakes Band".
- Forma de tela: `1 · 1930 · ON THE ARROW LAKES BAND ROLLS`.
- Limite: é o rol da Band, não a população Sinixt do Canadá.

## 2 · Item 54: a folha de s53 P2

**P09 · A frase de 1930, letra a letra — `confirmado`.**
- Fonte: *R. v. Desautel*, §6, p. 549. É UMA frase da Corte:
  "By 1930, only one person remained on the rolls of the Arrow Lakes Band, and after her death in 1956, the gov-ernment of Canada
  declared the Arrow Lakes Band extinct, and the reserve lands reverted to the provin-cial Crown."
- Forma de tela: `“By 1930, only one person remained on the rolls of the Arrow Lakes Band, and after her death in 1956, the
  government of Canada declared the Arrow Lakes Band extinct …”` · `R. v. DESAUTEL, 2021 SCC 17, PARA. 6`.
- Limite: a frase continua depois de "extinct" (", and the reserve lands reverted to the provincial Crown."): cortada ali, leva
  reticências. Os hifens de "gov-ernment" e "provin-cial" são quebra de linha do PDF, não do texto.

**P10 · A frase de 1956, letra a letra — `confirmado`.**
- Trecho: "and after her death in 1956, the gov-ernment of Canada declared the Arrow Lakes Band extinct".
- A cópia de `_dados/s53.json` ("after her death in 1956, the government of Canada declared the Arrow Lakes Band extinct")
  confere letra a letra. O "her" tem antecedente só com a de 1930 antes ("one person"). A folha pode ir à tela com as duas.

## 3 · Item 52

**P11 · `1948 · 1,010,000 CFS` (s37) — `confirmado`.**
- A estação e a série: USGS 14105700, Columbia River at The Dalles, OR, na série de picos anuais do NWIS (o pico instantâneo do
  ano), https://nwis.waterdata.usgs.gov/nwis/peak?site_no=14105700&agency_cd=USGS&format=rdb. O bruto local (sha256 `969fdcd8…`)
  tem `1948-05-31  1010000  6  154.56`. O CSV do canal confere.
- O WSP 1080 (p. 54, PDF p. 69) confirma: "Discharge, 1,010,000 second-feet 1:30 p.m., 3:00 p.m., and 6:30 p.m. May 31".
- Forma de tela: `1948 · 1,010,000 CFS (MAY 31) · USGS, THE DALLES`.
- Limite: o código 6 do USGS quer dizer vazão afetada por regulação ou desvio (o Grand Coulee já existia). É pico, não média
  diária. O WSP 1080 diz "near The Dalles"; o NWIS, "at The Dalles".

**P12 · `APR. 23, 2021` (s53) — `confirmado`.**
- Trecho: a folha de rosto de *Desautel*, "2020: October 8; 2021: April 23." (a audiência e o julgamento).
- Forma de tela: `R. v. DESAUTEL · 2021 SCC 17 · APR. 23, 2021`.

**P13 · `TYPICALLY 110–400 MILLION A YEAR` (s56) — `confirmado` (o número).**
- Fonte: BC Hydro, *2026 Operations Update: Columbia Basin*, 23/06/2026, p. 7. A URL não foi registrada: é a cópia da Sala,
  `midia/rio-columbia/fontes/sala/bchydro-ops-update-2026-06-23.pdf`, sha256 `df36339a…`.
- Trecho: "Required to deliver to Canada 50% of the increased power capability at downstream U.S. plants due to upstream
  regulation – this is called the ‘Downstream Benefit’ and is typically worth between $110 - $400 million per year."
- Forma de tela: `CANADA’S SHARE: TYPICALLY 110–400 MILLION A YEAR · BC HYDRO, JUNE 2026`, sem cifrão (P14).
- Limite: a fonte tem o cifrão, mas não diz a moeda; o mesmo slide escreve "USD $37.6M" para o pagamento americano.
  "Typically" é uma faixa de anos, sem os anos.

## 4 · Item 61: a moeda da BC Hydro

**P14 — `NÃO CONFERIDO`.**
- A fonte não diz a moeda. Há indícios de dólar canadense, sem prova:
  - o mesmo slide marca "USD" só no 37,6;
  - a parte do Canadá entra como receita da província;
  - a busca de hoje achou só imprensa ("C$400-million", Globe and Mail);
  - as páginas do boletim da BC sobre o valor deram 404.
- A cotação, se fosse CAD: o Banco do Canadá dá **1,4200 CAD por USD em 23/06/2026** (FXUSDCAD, "Daily average exchange rate of
  the US dollar in Canadian dollars"; 1,4162 em 22/06 e 1,4234 em 24/06),
  https://www.bankofcanada.ca/valet/observations/FXUSDCAD/json?start_date=2026-06-22&end_date=2026-06-24, lida hoje. Com ela,
  110–400 daria ≈ US$ 77–282 milhões.
- **Não recomendo converter.** A moeda não está confirmada, e "typically" cobre vários anos, que a cotação de um dia não representa.
- Forma de tela: a trena da BC Hydro num **eixo próprio**, sem cifrão, com o dono, e nunca na régua dos US$ 180–280 milhões.
  Alternativa na mesma moeda e da mesma fonte dos 180–280 (CRS, nota 26, que cita os estudos da U.S. Entity de junho de 2012):
  "Studies have estimated that the Canadian Entitlement is worth approximately $229 million-$335 million annually" →
  `$229–335 MILLION A YEAR · CANADA’S SHARE, U.S. ENTITY STUDIES (CRS, 2024)` (https://www.everycrsreport.com/reports/R43287.html).

## 5 · Item 55: as barragens de s28 P2

**P15 · A ordem — `confirmado`: DUNCAN → HUGH KEENLEYSIDE (ARROW) → MICA.**
- As três fontes concordam na ordem:
  - USACE + BPA (c. 2013), p. 4–5, https://www.osti.gov/servlets/purl/1132837: "Duncan (1968), Hugh Keenleyside (also referred
    to as Arrow) (1969) and Mica (1973)";
  - o governo da BC, "Treaty Highlights", https://engage.gov.bc.ca/columbiarivertreaty/treaty-highlights/: "Duncan (1967),
    Arrow/Hugh Keenleyside (1968) and Mica (1973)";
  - a UNTS 542, Purchase Agreement, Section 4(1): "(a) The Duncan Lake storage, April 1, 1968. (b) The Arrow Lakes storage,
    April 1, 1969. (c) The Mica Creek storage, April 1, 1973."
- Forma de tela: três levas, nesta ordem: `DUNCAN` → `HUGH KEENLEYSIDE · ARROW` → `MICA · KINBASKET`.

**P16 · Os nomes — `confirmado`.**
- A BC Hydro escreve "Hugh L. Keenleyside Dam" (Operations Summary, 2018, p. 3–4) e "Hugh Keenleyside Dam" (2026, p. 20), além de
  "Duncan Dam", "Mica Dam" e "The Kinbasket Reservoir, created by Mica Dam".
- Forma de tela: `DUNCAN DAM` · `HUGH KEENLEYSIDE DAM (ARROW)` · `MICA DAM (KINBASKET)`.
- Limite: o tratado não nomeia as barragens, só os lugares ("near Mica Creek", "near the outlet of Arrow Lakes", "near the
  outlet of Duncan Lake").

**P17 · O ano de cada uma — `NÃO CONFERIDO`.**
- Duas fontes oficiais divergem:
  - USACE + BPA: 1968, 1969, 1973;
  - governo da BC: 1967, 1968, 1973.
- As datas da ONU são o prazo do contrato para a operação plena, não a entrada em serviço.
- Forma de tela: **sem ano** (o nome e a ordem bastam; a voz, "as each dam came into service", não pede ano). Se um ano entrar,
  com o dono e o que ele mede: `IN TREATY OPERATION: 1968 · 1969 · 1973 · USACE & BPA`.

## 6 · Item 19: o ponto "Arrowhead" de s51 P2

**P18 · Arrowhead se perdeu com o lago do Arrow — `confirmado`.** Já não é só o Commons.
- Fonte: governo da BC, *A Review of the Range of Impacts and Benefits of the Columbia River Treaty* (2012), p. 26–27, na seção
  do Arrow Lakes Reservoir:
  https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf.
- Trechos: "The inundation resulted in the loss of all or significant portions of the communities of: […] Arrowhead […]" e "It
  included the lost communities of Arrowhead, Sidmouth and Mt. Cartier."
- Forma de tela: `ARROWHEAD · LOST TO THE RESERVOIR`, ou só `ARROWHEAD`, ao lado das outras vilas.
- Limite: "all or significant portions" não sustenta `FLOODED`, nem a vila inteira debaixo da água, e não dá ano.

**P19 · "Abandonada em 1964" — `NÃO CONFERIDO`.**
- O ano só está no Commons. A BC Geographical Names (39855, lida hoje, https://apps.gov.bc.ca/pub/bcgnws/names/39855.html) diz
  "Reinstated as an abandoned locality on October 18, 1979", sem ano de abandono e sem inundação, e que o correio "closed
  September 28, 1968".
- Forma de tela: sem ano; nunca `ABANDONED IN 1964`.

**P20 · O ponto e o rótulo — `confirmado`.**
- Fonte: o mesmo registro: "Locality […] North end of Upper Arrow Lake […] Approximate population centre at 50°42′39″N,
  117°55′19″W"; é o ponto JDBYA da CGNDB, a 84 m.
- Forma de tela: `ARROWHEAD`, sem `TOWN`.
- Limite: o ponto é o da localidade reintegrada, 2,0 km ao norte da margem de hoje (pauta-geo). Ele marca o nome; não prova onde
  ficava a rua da foto. Não deve "afundar" no lago.

## 7 · Item 70: "Peace Arch" em s26

**P21 · O encontro na fronteira, em 16/09/1964 — `confirmado`.**
- F042 (USACE + BPA): "meet on Sept. 16, 1964, at the International Boundary at Blaine, Wash., and Surrey, B.C."
- A página "History" do governo da BC (cópia local) diz o mesmo, com Johnson, Pearson e o premiê W.A.C. Bennett.

**P22 · O nome do lugar, Peace Arch — `confirmado`.** Duas fontes oficiais independentes:
- os slides de 30/01/2013 (do Corps, pela pauta-geo; cópia local `a__crt-overview-cad-2013`, p. 10): "Proclamation and Exchange
  of Diplomatic Notes at Peace Arch - 16 Sept. 1964";
- o comunicado do governo da BC de 16/09/2014, lido hoje (https://news.gov.bc.ca/releases/2014MEM0024-001355): "met at the
  International Peace Arch Boundary at Blaine Washington and Surrey, B.C."
- Forma de tela: `SEPT. 16, 1964 · PEACE ARCH · BLAINE, WASH. / SURREY, B.C.`. O ponto da camada fica na travessia da I-5, a 327 m
  do centro do Peace Arch Park: serve ao rótulo nessa escala.

**P23 · O que aconteceu ali, e com que documento — `confirmado`.**
- O tratado (assinado em Washington, em 17/01/1961) entrou em vigor em 16/09/1964 pela troca das ratificações, feita **em
  Ottawa**: "Came into force on 16 September 1964, upon exchange of the instruments of ratification at Ottawa" (UNTS 542, nota 1
  ao tratado, PDF p. 2). Os dois Protocols of Exchange dizem "Done at Ottawa this 16th day of September 1964".
- Na fronteira, os líderes marcaram o dia. Johnson proclamou o tratado ali, pela transcrição (P24).
- Forma de tela: `IN FORCE SEPT. 16, 1964` (sem lugar) e o encontro na fronteira.
- Limite: nunca `RATIFIED AT THE PEACE ARCH` nem `SIGNED HERE`. O comunicado de 2014 ("and ratified the Columbia River Treaty")
  e a página "History" ("to ratify") dizem isso de modo frouxo; a ONU desmente o lugar.

**P24 · "Done at the International Peace Arch, Blaine, Washington" — `NÃO CONFERIDO`** como atributo do documento.
- Só a transcrição da CSG West tem o texto (p. 41), e ela não é quem guarda o documento.
- O American Presidency Project (os Public Papers de 1964) respondeu HTTP 504 duas vezes:
  https://www.presidency.ucsb.edu/node/241532.
- Forma de tela: fora; o lugar vai pelo P22. Se a tela quiser `PROCLAIMED`, a Sala lê os Public Papers ou a coleção de tratados
  dos EUA (UST/TIAS) no navegador do app.

## 8 · Itens 17 e 51: o 60 % de s16 e s17, e o arredondamento de Birchbank

Refeito hoje do bruto do ECCC, com um script novo (`contas_pre.py`, a saída em `contas_pre.txt`):

| fonte | o que mede | a frase de tela que sustenta |
|---|---|---|
| **Donald, 08NB005** (F020): 79 anos completos, **1945–2025**, 60,12 % pelo volume (60,09 % com médias simples) | o alto Columbia, acima do Kinbasket, sem grande barragem acima | `≈ 60% OF THE YEAR’S RUNOFF IN MAY–JULY · COLUMBIA RIVER AT DONALD, B.C., 1945–2025` · crédito `Alpha Point calculation: Water Survey of Canada (station 08NB005). Contains information licensed under the Open Government Licence – Canada.` (P25). **É a que casa com a voz ("those mountains").** |
| **Birchbank, 08NE049** (F235): 1938–1967, 58,92 % pelo volume (58,85 % simples); 1974–2025, 31,78 % (31,61 %) | o Columbia perto da fronteira, antes das grandes barragens, com o alto Kootenai (Montana e Idaho) dentro | `≈ 59%` (P27), nunca `≈ 60%` com esse dono |
| **As três agências** (F236, *Inside Story*, 2001, p. 4) e o CRS (F179) | "about 60 percent of the natural runoff in the basin" / "Approximately 60% of this runoff" | só como frase atribuída e para a **bacia**; a bacia medida em The Dalles dá 51,4 % (1879–1967) (P28) |

- **P25 `confirmado`** · **P26 `corrigir`**: o período de F020, "1944–2025", é 1945–2025 (o bruto começa em 10/1944).
  **P27 `confirmado`** · **P28 `corrigir`**: o `_dados/s17.json` e o espelho ainda propõem o crédito ao CRS, com a voz antiga ("the
  whole basin"). Nunca as barras de The Dalles (51,4 %) sob o rótulo de 60 %.
- **O item 51:**
  - em s47, `MAY–JULY: 59% → 32%` e `DEC.–FEB.: 8% → 26%`: os inteiros valem pelos dois métodos;
  - com uma casa, o número muda com o método (58,8 ou 58,9; 31,6 ou 31,8);
  - se s17 usar Donald (recomendado), o `≈ 60%` e o `59% → 32%` são duas estações nomeadas, e não se contradizem;
  - se s17 usar Birchbank, `≈ 59%` nas duas.

## 9 · Item 24: os US$ 29,9 milhões, atribuídos à APPA

**P29 — `confirmado` como atribuição** (a APPA o diz; o fato fica `NÃO CONFERIDO`, P06).
- Forma de tela, se entrar: `$29.9 MILLION ONE-TIME PAYMENT · UNPAID SEPT. 2024–MAY 2026 · AMERICAN PUBLIC POWER ASSOCIATION,
  SEPT. 25, 2026`.
- Recomendo **fora da tela**: a voz não diz o número, e a fonte é a associação do setor das próprias PUDs. É volátil: reler antes
  do render e antes de publicar.

## A tabela

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| P01 | Vanport, 30/05/1948 | confirmado | "broke at 4:15 p.m. on Sunday, May 30" (1948 no título) | https://pubs.usgs.gov/wsp/1080/report.pdf |
| P02 | $253,929,534.25 pagos; $254,400,000 o preço; ≈ $254M | confirmado | pago em 16/09/1964 = 254,4 M em 01/10/1964, descontado | https://treaties.un.org/doc/Publication/UNTS/Volume%20542/volume-542-I-7894-English.pdf |
| P03 | 110.000 ha (270.000 acres) | confirmado | "of Canadian ecosystems" | https://engage.gov.bc.ca/columbiarivertreaty/about/ |
| P04 | rótulo "land inundated" | corrigir | "ecosystems", com lagos e rios | idem e a BC Review 2012 |
| P05 | 1.141 → 660 → 550 MW | confirmado | o cronograma da BC, 11/07/2024 | https://engage.gov.bc.ca/app/uploads/sites/6/2024/07/Backgrounder_ColumbiaRiverTreaty_July11_2024.pdf |
| P06 | US$ 29,9 mi das PUDs (o fato) | NÃO CONFERIDO | só a APPA (e o Star, cópia) | https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments |
| P07 | 21 Sinixt em 1902 | confirmado | §6 | https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do |
| P08 | 1 pessoa no rol em 1930 | confirmado | §6 | idem |
| P09 | a frase de 1930, literal | confirmado | §6, frase única até "Crown." | idem |
| P10 | a frase de 1956, literal | confirmado | §6 | idem |
| P11 | 1948 · 1,010,000 cfs | confirmado | USGS 14105700, pico de 31/05/1948, código 6 | https://nwis.waterdata.usgs.gov/nwis/peak?site_no=14105700&agency_cd=USGS&format=rdb |
| P12 | APR. 23, 2021 | confirmado | "2021: April 23" | https://decisions.scc-csc.ca/scc-csc/scc-csc/en/18836/1/document.do |
| P13 | typically 110–400 million a year | confirmado | "$110 - $400 million per year", sem moeda | cópia da Sala (URL não registrada) |
| P14 | a moeda dos 110–400 | NÃO CONFERIDO | não diz; 1,4200 CAD/USD em 23/06/2026, se fosse CAD | https://www.bankofcanada.ca/valet/observations/FXUSDCAD/json?start_date=2026-06-22&end_date=2026-06-24 |
| P15 | a ordem Duncan → Keenleyside → Mica | confirmado | três fontes, a mesma ordem | https://www.osti.gov/servlets/purl/1132837 |
| P16 | os nomes das barragens | confirmado | Hugh (L.) Keenleyside, Duncan, Mica Dam | https://engage.gov.bc.ca/columbiarivertreaty/treaty-highlights/ |
| P17 | o ano de cada barragem | NÃO CONFERIDO | 1968/1969/1973 × 1967/1968/1973 | https://www.osti.gov/servlets/purl/1132837 |
| P18 | Arrowhead perdida com o Arrow | confirmado | "lost communities of Arrowhead…" | https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/A-Review-of-the-Range-of-Impacts-and-Benefits-of-the-Columbia-River-Treaty6.pdf |
| P19 | abandonada em 1964 | NÃO CONFERIDO | "abandoned locality", sem ano; correio até 1968 | https://apps.gov.bc.ca/pub/bcgnws/names/39855.html |
| P20 | o ponto Arrowhead | confirmado | "North end of Upper Arrow Lake" | idem |
| P21 | encontro na fronteira, 16/09/1964 | confirmado | "at the International Boundary at Blaine, Wash., and Surrey, B.C." | https://www.osti.gov/servlets/purl/1132837 |
| P22 | o lugar: Peace Arch | confirmado | Corps 2013 e BC 2014 | https://news.gov.bc.ca/releases/2014MEM0024-001355 |
| P23 | ratificações trocadas em Ottawa | confirmado | "exchange of the instruments of ratification at Ottawa" | https://treaties.un.org/doc/Publication/UNTS/Volume%20542/volume-542-I-7894-English.pdf |
| P24 | proclamação "Done at the International Peace Arch" | NÃO CONFERIDO | só a transcrição CSG West; APP 504 | https://www.presidency.ucsb.edu/node/241532 |
| P25 | ≈ 60 % em Donald | confirmado | 60,12 %, 1945–2025 | https://api.weather.gc.ca/collections/hydrometric-monthly-mean |
| P26 | o período "1944–2025" | corrigir | 1945–2025 | idem |
| P27 | Birchbank 58,9 % → ≈ 59 % | confirmado | 58,92 / 58,85 %; depois 31,78 / 31,61 % | idem |
| P28 | crédito do 60 % ao CRS/agências | corrigir | eles falam da bacia (51,4 % medida) | https://www.osti.gov/servlets/purl/1132870 |
| P29 | US$ 29,9 mi atribuídos à APPA | confirmado | a APPA o diz | https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments |

## Os achados

- **[MÉDIO]** s26: a tela não diz que o tratado foi ratificado ou assinado no Peace Arch.
  - Conserto pronto: `SEPT. 16, 1964 · PEACE ARCH · BLAINE, WASH. / SURREY, B.C.` com `IN FORCE SEPT. 16, 1964`.
  - RAIZ: PONTUAL. As fontes da BC dizem "to ratify" ali, e a ONU diz Ottawa.
- **[MÉDIO]** s56: a trena da BC Hydro não divide a régua com os US$ 180–280 milhões.
  - Conserto pronto: um eixo próprio, sem cifrão, `CANADA’S SHARE: TYPICALLY 110–400 MILLION A YEAR · BC HYDRO, JUNE 2026`.
  - Ou, na mesma régua: `$229–335 MILLION A YEAR · CANADA’S SHARE, U.S. ENTITY STUDIES (CRS, 2024)`.
  - RAIZ: PONTUAL.
- **[MÉDIO]** s17: o crédito do `≈ 60%` vai para o cálculo de Donald (P25), não para o CRS.
  - RAIZ: INSTRUÇÃO. O `_dados/s17.json` ficou com a voz antiga.
- **[LEVE]** s51: `FLOODED`, não `LAND FLOODED` (P04). Sem ano de abandono em Arrowhead (P19), e o ponto não afunda (P20).
  - RAIZ: PONTUAL.
- **[LEVE]** s55: `−37%` sozinho com o dono. Os MW, se forem, numa linha à parte, nunca `1,141 → 550` como conta do 37 % (P05).
  - RAIZ: PONTUAL.
- **[LEVE]** s28 P2: nomes e ordem sim, ano não (P17). RAIZ: PONTUAL.
- **[LEVE]** s53 P2: a citação cortada depois de "extinct" leva reticências (P09). RAIZ: PONTUAL.

Nenhum achado toca a voz: a narração não diz nenhum destes números. Nada a regravar.

## A lista de nomes

| anônimo na fonte | pessoa nomeável | credencial | URL |
|---|---|---|---|
| "the PUDs … said in a joint statement" (APPA) | Kirk Hudson, Gary Ivory e John Mertlich | os gerentes-gerais do Chelan PUD, do Douglas PUD e do Grant PUD, na mesma matéria | https://www.publicpower.org/periodical/article/mid-columbia-puds-sign-settlement-ending-litigation-over-columbia-river-treaty-payments |
| a matéria da APPA | Paul Ciampoli | o autor, Public Power Current (APPA) | idem |
| "the leaders" (s26) | Lyndon B. Johnson, Lester B. Pearson e W.A.C. Bennett | presidente dos EUA, primeiro-ministro do Canadá e premiê da BC | https://news.gov.bc.ca/releases/2014MEM0024-001355 |

## Os dois padrões

1. **O número certo com o recorte errado.** Os 110.000 ha são "ecosystems" e não "land". O 60 % das agências é da bacia, não das
   montanhas. 1.141 → 550 não é o 37 %. O cifrão da BC Hydro não diz a moeda.
2. **Fonte secundária oficial frouxa sobre documento.** "To ratify" na fronteira (BC) contra "at Ottawa" (ONU). Os anos das
   barragens divergem entre USACE e BC, e o "1964" de Arrowhead só está no Commons. Atributo de documento só vale no próprio
   documento.

## Os voláteis

- **P05.** O cronograma dos MW é "anticipated" e depende do tratado modernizado. Cresce se o tratado entrar em vigor como anunciado;
  zera se a negociação mudar o cronograma.
- **P06 e P29.** O acordo das PUDs ainda vai entrar em vigor. Reler antes do render e antes de publicar.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Nenhuma nova. A licença da página da BC (s52) e a regra do documento na régua de mundo real não mudam nenhum veredito daqui.

VEREDITO: RESSALVA
