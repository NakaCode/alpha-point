# O cético: o Vale Imperial e o rio Colorado (`vale-imperial`), vídeo 8 (17/11/2026)

**Veredito: DERRUBADO. Nota: 4,0** (a do `estrutural.md` era 7,0).

**Por quê, em uma linha:** os fatos são primários e até mais fortes do que a pauta diz, mas o ângulo foi colhido neste outono. Depois da
decisão do Interior de 21/08/2026, pelo menos **nove vídeos longos** contaram "um vale da Califórnia tem mais água do Colorado que o Arizona",
com os nossos três atos na mesma ordem (1901, 1905, o canal, "first in time", por que o Arizona é cortado primeiro). Um deles fez **453 mil
views** em sete semanas ("Las Vegas Isn't the Real Lake Mead Problem — California Is", 26/09/2026). Os títulos do enxame quase repetem o
nosso. E o nome do lugar não é buscado ("imperial valley" < 750 buscas/mês).

- **O ponto mais grave (K1):** colisão de título e de ângulo. "1 California Valley Uses More Colorado River Water Than 2 ENTIRE States —
  Cuts Start In January" (The Build Paradox, 01/11/2026, 11:55) tem o roteiro do nosso vídeo nos capítulos. "500 Farm Families Control More
  Colorado River Water Than 40 Million People" (US Weather Alert, 11/08/2026) e "Why California Gets More Water Than Arizona (2026)"
  (Florida Guy, 06/11/2026) ficam a uma palavra do nosso título. Foi o que derrubou o vídeo do Atlântico.
- **O paradoxo como está escrito é fraco, e a virada é falsa (K3):** o vale não tem "quase tanto" quanto o Arizona; ele **usa mais que o
  Arizona inteiro**, em todos os anos medidos (2019, 2022 a 2025, e a previsão de 2026). A frase "se o corte não chegar ao IID, o vale passa o
  Arizona" está errada: já passou. E o "maior corte do Arizona" de 2027 deixa o Arizona com 2,04 milhões de acre-pés, **mais** do que ele de
  fato usou em 2025 (1,91).
- **O título que defendo, se a Sala insistir no assunto:** "The Colorado River Runs Downhill to California, Uphill to Phoenix" (65 car.),
  o ângulo da gravidade, que é o único pedaço que não achei no enxame. A colisão dele **não foi medida no vidIQ** (os 30 créditos acabaram
  antes); a busca da web não achou esse enquadramento, o que não prova que ele não existe. Seção 6.

Como foi feito: leituras de 17/11/2026, das 21:10 às 21:30 (hora de Brasília). Os scripts e os arquivos baixados estão em
`out/_pautas/video-8/_trabalho/cetico-vale-imperial/`. Python só em arquivo. Nenhum navegador, nenhum crédito pago fora do vidIQ. Fontes e
APIs abertas (Reclamation, USGS, Census, USDA, Commons), um pedido por vez, com o User-Agent do canal. **Recusaram e não foram contornados:**
calmatters.org (403), ppic.org (403), cap-az.com (503 com "Retry-After"). O iid.com já tinha dado 403 ao `estrutural.md` e não foi tentado.

---

## 1 · Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 17/11/2026) | Veredito |
|---|---|---|---|
| F1 | A Bacia Baixa reparte 7,5 milhões de acre-pés (MAF) por ano: "4.4 MAF per year to California, 2.8 MAF to Arizona, and 300,000 acre-feet (AF) to Nevada". | CRS R45546, "Management of the Colorado River: Water Allocations, Drought, and the Federal Role", atualizado em 01/10/2026: https://www.everycrsreport.com/files/2026-10-01_R45546_8ab2e2c8fe7b6c010a24bd44490d22952a440b0f.pdf (cópia em `_trabalho/cetico-vale-imperial/crs-R45546-2026-10-01.pdf`) | **CONFERE** |
| F2 | "California's rights include Imperial Irrigation District rights to 2.6 MAF (priority date of 1901)". É um *present perfected right* do decreto da Suprema Corte (Arizona v. California, 547 U.S. 150, 2006), contado em **desvio**, não em uso consuntivo. | O mesmo CRS, nota 43 | **CONFERE** no CRS. A letra do decreto (que, de memória, diz "2,6 MAF ou a água de 424.145 acres, o que for menor") **não foi lida**: NÃO CONFERIDO esse detalhe. |
| F3 | **O uso real (uso consuntivo, acre-pés).** 2025: **IID 2.187.165**; Arizona 1.910.524; Nevada 197.570; Califórnia 3.646.992. O IID desviou 2.189.521 em Imperial Dam. | Reclamation, "Colorado River Accounting and Water Use Report: Arizona, California, and Nevada, Calendar Year 2025", Table 1 (p. 11 do PDF) e Table 5 (p. 28): https://www.usbr.gov/lc/region/g4000/4200Rpts/DecreeRpt/2025/2025.pdf | **CONFERE** |
| F3b | A série do mesmo relatório: IID / Arizona = 2.558.136 / 2.491.707 (2019); 2.577.164 / 2.014.176 (2022); 2.417.024 / 1.889.517 (2023); 2.311.905 / 1.934.518 (2024). Previsão de fim de 2026, publicada hoje: **IID 2.180.326; Arizona 1.913.462**; Nevada 224.384. | Os relatórios de 2019, 2022, 2023 e 2024 (mesmo endereço, trocando o ano) e a previsão: https://www.usbr.gov/lc/region/g4000/hourly/forecast.pdf (gerada em "Nov 17, 2026 10:41:48 AM") | **CONFERE** (a previsão é provisória) |
| F4 | A lei da prioridade: "the party that first appropriates water and puts it to beneficial use thereby acquires a vested right to continue to divert and use that quantity of water against claimants junior in time". E o acordo de 1968: o Congresso autorizou o canal do Arizona (CAP) "on the condition that California's and Nevada's water deliveries receive priority over Arizona's during times of drought". | O mesmo CRS (seções "Arizona v. California" e "Colorado River Basin Project Act of 1968"; 43 U.S.C. §1521) | **CONFERE** |
| F5 | A decisão do Interior, de 21/08/2026: a Bacia Baixa perde 1,25 MAF por ano em 2027 e 2028 ("Arizona: 760,000 acre-feet", "California: 440,000 acre-feet", "Nevada: 50,000 acre-feet"), **se** os estados aplicarem o acordo que propuseram. Nas regras: "2.04 maf shall be apportioned for use in Arizona, 3.96 maf … California and 250,000 acre-feet (af) … Nevada". | DOI: https://www.doi.gov/pressreleases/interior-department-finalizes-plans-2027-2028-colorado-river-operations ; Reclamation, news release 5392 (mesma data): https://www.usbr.gov/newsroom/news-release/5392 ; "Operating Guidelines … Operating Years 2027 and 2028", ago/2026, §5.3.A: https://www.usbr.gov/ColoradoRiverBasin/post2026/decision-doc/2027-2028OperatingGuidelines_Final.pdf | **CONFERE**. **Estado em 17/11/2026:** as regras valem para 2027 e 2028; o acordo de execução entre os estados aparece como "proposto" na nota da Reclamation. **Como a Califórnia reparte os 440 mil por dentro (quanto cai no IID): NÃO CONFERIDO**, nenhum documento primário achado; a CalMatters e o PPIC, que tratam disso, recusaram (403). |
| F5b | Nevada processou o Interior em 24/08/2026, na Justiça Federal do distrito de Nevada (o Estado, a Colorado River Commission e a SNWA), pedindo a anulação da decisão de 21/08 e das regras de 2027-2028. | Western Water (Water Education Foundation), 25/08/2026: https://www.western-water.com/2026/08/25/nevada-takes-colorado-river-fight-to-federal-court/ | **CONFERE** na imprensa especializada; a petição não foi lida. Sem decisão achada. |
| F6 | O Salton Sea de 1905: "Today's Sea originated in 1905 when Colorado River floodwater breached an irrigation canal and flowed uncontrolled into the basin for 18 months." Na história da Reclamation: a superfície subiu "from 275 feet below sea level to 201 feet below sea level", e o lago cobriu "an additional 298,240 acres". | California Water Boards, "Salton Sea FAQ" (2024): https://www.waterboards.ca.gov/saltonsea/docs/2024/salton-sea-faq.pdf ; Eric A. Stene, "All-American Canal: Boulder Canyon Project", Reclamation, 1995, reeditado em 2009: https://www.usbr.gov/projects/pdf.php?id=80 | **CONFERE** |
| F7 | O canal: "The All-American Canal travels west from Imperial Dam about eighty miles to a point ten miles past Calexico"; "Official water delivery through the All-American Canal started in October 1940". Antes dele, a água vinha pelo "IID's Mexican canal system". | Stene (Reclamation), acima | **CONFERE** |
| F8 | O vale abaixo do mar (cota do terreno no 3DEP): Imperial Dam **+181 pés**; Calexico +5; El Centro **−42**; Brawley −114; Calipatria **−180**; margem sul do Salton Sea −216. | USGS, The National Map, serviço EPQS (3DEP), consultado em 17/11/2026 (`cotas.json`) | **CONFERE** (medida nossa) |
| F9 | O Arizona bombeia: "From Lake Havasu to the end of the aqueduct, the water is lifted nearly 2,900 feet in elevation"; o aqueduto chegou a Phoenix em 1985 e a Tucson em 1992. No 3DEP: Lake Havasu +450 pés, Phoenix +1.088, Tucson +2.371. | Reclamation, página de Parker Dam: https://www.usbr.gov/lc/hooverdam/parkerdam.html ; EPQS, acima | **CONFERE** |
| F10 | Moradores (Census, safra 2025): condado de Imperial 181.411; Arizona 7.623.818; Nevada 3.282.188. | https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/counties/totals/co-est2025-alldata.csv (cópia local do `estrutural.md`) | **CONFERE** |
| F11 | O Lake Mead estava em 1.040,86 pés em 13/11/2026, subindo desde 1.038,93 em 01/11. | Reclamation, "Accumulations for November 2026": https://www.usbr.gov/lc/region/g4000/hourly/levels.html | **CONFERE** (provisório) |
| F12 | O "teto de 3,1 MAF" do IID no acordo de 2003 (QSA) e a área irrigada oficial do IID. | iid.com recusou (403) ao `estrutural.md` | **NÃO CONFERIDO** |

**A frase verdadeira.** O título de trabalho ("Holds Nearly as Much … as Arizona") compara um direito em desvio de 1979-2006 (2,6) com uma cota
em uso consuntivo de 1928 (2,8): duas réguas, e uma palavra fraca ("holds" lê-se como "guarda", de reservatório). A frase que os dados seguram,
e que é mais forte: **"In 2025, one irrigation district in California used more Colorado River water than the entire state of Arizona"**
(2.187.165 contra 1.910.524 acre-pés, Reclamation). "More than Arizona and Nevada combined" também vale em 2022-2025 e na previsão de 2026,
mas por pouco em 2026 (42 mil acre-pés) e **não** em 2019: só com o ano ao lado.

**A virada de 2027, corrigida.** O Arizona fica com 2,04 MAF em 2027, 129 mil acre-pés **acima** do que ele usou em 2025 (a cota de 2026 já
vinha cortada: 1.969.749 aprovados). O "corte de 760 mil" é contra o papel de 1928, não contra o uso de hoje. O mesmo vale para a Califórnia
(3,96 contra 3,65 usados em 2025). O roteiro não pode dizer "o Arizona perde 760 mil acre-pés em janeiro".

## 2 · A colisão (vidIQ, 6 chamadas, 30 créditos)

As buscas: (1) "Imperial Valley Colorado River water rights Arizona", desde 17/11/2025, por relevância; (2) "Imperial Valley water Colorado
River", sem data, por views; (3) o título de trabalho, sem data, por relevância; (4) "Colorado River water California Arizona Imperial
Valley", desde 17/11/2025, por views, 4 a 20 min (`_trabalho/cetico-vale-imperial/v4-colorado-12m-views.tsv`); (5) a busca do nome
(keyword research); (6) "Salton Sea why", desde 17/11/2025, por views. As views das linhas 1, 2 e 4 foram conferidas na página pública
`/watch` (`watch.jsonl`).

**Os 5 mais próximos:**

| # | Título | Canal (inscritos) | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|
| 1 | Las Vegas Isn't the Real Lake Mead Problem — California Is | US Weather Alert (a página `/watch` não mostrou os inscritos; o canal desse nome no vidIQ tem ~21 mil) | **453.132** | 26/09/2026 | 22:57 | **Ângulo, sim**: "follows the water from Lake Mead and Hoover Dam to the Imperial Valley, the All-American Canal, California farms, and international hay markets" |
| 2 | 1 California Valley Uses More Colorado River Water Than 2 ENTIRE States — Cuts Start In January | The Build Paradox (45) | 19 | 01/11/2026 | 11:55 | **Título e roteiro, sim**: capítulos "A Canal Through Mexico", "1905: The River Turns", "First in Time, First in Right", "The Seven Party Agreement", "Why Arizona Gets Cut First", "The Cuts That Start in January" |
| 3 | 500 Farm Families Control More Colorado River Water Than 40 Million People | US Weather Alert (~21 mil) | 6.466 | 11/08/2026 | 15:15 | **Paradoxo, sim**: "a stronger legal claim to that water than the entire state of Arizona" |
| 4 | Lake Powell Crisis: Why California Gets More Water Than Arizona (2026) | Florida Guy (7) | 6 | 06/11/2026 | 22:01 | **Título quase igual** |
| 5 | Its Been Obvious for 100 Years. Today We Pay. | Eric Hanson (166 mil) | **804.821** | 30/08/2026 | 20:27 | **Provável** (o uso da água do Colorado; o curto da mesma viagem, de 04/09, é no Vale Imperial: "Why Farmers Are Not Allowed to Conserve Colorado River Water", 34.937). O vídeo não foi visto. |

**O resto do enxame no mesmo ângulo (agosto a novembro de 2026):** "One Farm District Holds 10 Times Nevada's River Water" (Walter Briggs, 15
inscritos, 340 views, 07/10, 14:51; confere o papel contra o uso de 2025, que é a nossa medida); "Imperial Valley Will Survive. Tucson Won't.
The Brutal Math Explained" (US Weather Alert, 5.012, 27/08, 18:21); "Why Farmers in America Waste Water on Purpose" (Environomics, 4
inscritos, 887, 21/10, 7:02: "its farms still use more Colorado River water than Arizona and Nevada combined"); "California Isn't the Real
Lake Mead Problem — Arizona Is" (Canadian Weather Alert, 16 mil, 3.022, 02/10); "Las Vegas Isn't Emptying Lake Mead — California Is" (US
Weather Alert, 10.560, 29/09); "The River That Decides Who Dries Up First" (Farming Systems, curto, 23/10); "Colorado River: Who Gets the
Water After 2026?" (Forward or Backwards, 34, 30/09). Os guarda-chuvas que ocupam a busca "colorado river": Bloomberg, "What the Colorado
River Crisis Means for the American West" (**1.739.160**, 23/08/2026); PBS Terra, "Who Killed the Colorado River?" (3.870.982, 17/10/2024);
PBS, "How Do You Share a Shrinking River Fairly?" (58.414, 10/09/2026; "the Imperial Valley is ground zero"); GoDocs, "How America Supplies
Water to 40 Million People in the Desert" (976.500, 28/10/2026, do `demanda.md`).

**O Salton Sea (o ato 2 da pauta)** está ainda mais cheio: o curto "How the Colorado River took a wrong turn and filled a California desert with
a sea" (MechDisk, **7.916.902**, 09/10/2026); "Why This Toxic Lake Is Suddenly Worth Trillions" (1.943.253, 01/07/2026); "Why Is There a Sea in
the Middle of California?" (Park Vibes, 1.285.261, 25/10/2025); "The California Resort City Built for 40,000 People… That Never Came" (725.115,
23/03/2026); "The Salton Sea: America's Most Toxic Lake" (Places, 308.374, 28/09/2026); "How a 50-Foot Ditch Accidentally Broke the Colorado
River" (Carl Bowe, 1,99 mil inscritos, 80.994, 25/08/2026, 42 min).

**Conclusão da colisão: colide.** O título é quase o de três vídeos de 2026, e o ângulo tem um longo de 453 mil e outro de 805 mil de dois a
três meses atrás. Não há "lugar vago no vídeo longo".

## 3 · O potencial, pela régua

| Critério | Medida | Passa? |
|---|---|---|
| (1) O nome do lugar é buscado | "imperial valley" **< 750/mês** (concorrência 22; vidIQ, 17/11/2026). O título se apoia em "colorado river" (≈ 24,3 mil, concorrência 51, +86,7 %), uma busca de notícia dominada por Bloomberg, PBS, Eric Hanson e o enxame de alerta do Lake Mead e do Lake Powell (11 vídeos entre 27/10 e 14/11, `demanda.md` §3). "salton sea" ≈ 39,0 mil (56, −51,3 %), "bombay beach" ≈ 15,7 mil, "el centro" ≈ 3,8 mil. | **Não** (o lugar não é buscado; a palavra que é buscada está tomada) |
| (2) Prova recente de interesse | Sim, e forte: 453 mil (canal de ~21 mil, 26/09), 805 mil (30/08), o curto de 7,9 milhões do Salton Sea (09/10). | **Sim** |
| (3) O vídeo longo bem feito ainda não existe | Existe, com 453 mil e 805 mil, e mais sete cópias pequenas em 12 semanas. | **Não** |
| (4) O paradoxo em 3 frases, visível no mapa | Sim, e mais forte que o da pauta (F3). O vale verde contra o deserto, na fronteira com Mexicali, é imagem de satélite famosa. | **Sim** |
| (5) A geografia explica o porquê | Em parte. A pauta explica pela lei (1901, "first in time"). O porquê geográfico de verdade é a gravidade: a água desce sozinha de Imperial Dam (+181 pés) ao vale (−42 a −180), e sobe quase 2.900 pés até o fim do aqueduto do Arizona. Quem podia regar por gravidade chegou primeiro (1901), e a lei congelou a fila; o Arizona só levou a água às cidades em 1985-1992, e em 1968 aceitou ficar atrás. | **Em parte** (só com o ajuste da gravidade) |
| (6) Uma medida nossa | A série 2019-2026 da Reclamation é aberta e rápida, mas um canal de 15 inscritos já fez a conta de 2025. O perfil de cota (gravidade contra bombeamento) eu não achei no enxame. | **Em parte** |

**O enxame:** chegou em dias. A decisão saiu em 21/08; o primeiro longo do ângulo é de 11/08 (antes dela, com a proposta), e o de 453 mil é
de 26/09. Em 12 semanas, nove longos.

**13 a 16 min sem encher:** sustenta. Há material de sobra (1901, 1905-1907, 1928, 1931, 1940, 1968, 2003, 2026), e os concorrentes
fazem 12 a 23 min. O problema não é o fôlego; é que o espectador que procura isso já viu.

## 4 · A medida (conta preliminar)

Script: `_trabalho/cetico-vale-imperial/medida.py` (saída em `medida-saida.txt`). Os números saem dos relatórios da Reclamation, do 3DEP e do
Census.

| Ano | IID (acre-pés) | Arizona | IID − Arizona | IID / Arizona | IID > Arizona + Nevada? |
|---|---|---|---|---|---|
| 2019 | 2.558.136 | 2.491.707 | +66.429 | 1,03 | não (−167.567) |
| 2022 | 2.577.164 | 2.014.176 | +562.988 | 1,28 | sim (+339.318) |
| 2023 | 2.417.024 | 1.889.517 | +527.507 | 1,28 | sim (+340.663) |
| 2024 | 2.311.905 | 1.934.518 | +377.387 | 1,20 | sim (+164.959) |
| 2025 | 2.187.165 | 1.910.524 | +276.641 | 1,14 | sim (+79.071) |
| 2026 (previsão) | 2.180.326 | 1.913.462 | +266.864 | 1,14 | sim (+42.480) |

- **O número:** em 2025, o IID usou **14 % mais** água do Colorado que o Arizona inteiro, e **11 vezes** a de Nevada; foi **60 %** de toda a
  água do Colorado usada na Califórnia. O uso do IID cai desde 2022 (−15 % até 2025), e a distância para o Arizona encolhe.
- **A gravidade (a medida que não achei no enxame):** de Imperial Dam (+181 pés) a El Centro (−42) a água cai **222 pés**; a Calipatria (−180),
  **361 pés**, sem bomba. Do Lake Havasu (+450) a Tucson (+2.371) o terreno sobe **1.921 pés**, e a Reclamation diz que a água é erguida
  "nearly 2,900 feet" até o fim do aqueduto.
- **O que a terra planta:** no Cropland Data Layer de 2025 do USDA (`cdl_conta.py`), o condado de Imperial tem 415.886 acres cultivados (sem
  pousio); **alfafa 146.602 + outro feno 60.149 = 206.750 acres, 49,7 %**. Hortaliças e folhas, ~84.700 acres (20 %). Ressalva: é o condado,
  não a área do IID, e o CDL erra classe; serve de ordem de grandeza, não de número de tela sem a ressalva.
- **A medida por morador da pauta (14,3 acre-pés por pessoa) deve sair.** Com o uso real dá 12,1, mas a conta é enganosa: a água do vale vira
  comida e feno vendidos fora do condado. É convite a comentário de "pegadinha" (K6).

## 5 · O material

- **Mapa com geometria real:** sim. O rio e os canais (All-American, Coachella e o aqueduto do Arizona) no OSM e no NHD do USGS; os limites no
  Census; as cotas no 3DEP (já medidas). O limite oficial do IID não foi procurado (o site recusa).
- **Satélite aberto:** sim, farto. Landsat e Sentinel-2 mostram o retângulo verde contra o deserto, a linha da fronteira com o vale de Mexicali e
  o Salton Sea encolhendo (os concorrentes já usam o HLS da NASA, o que também é sinal de repetição).
- **Fotos de acervo livre:** sim. No Commons (API, 17/11/2026), "Category:All-American Canal" tem 32 arquivos, entre eles fotos da NARA
  (DOCUMERICA, 1972: "ALL-AMERICAN CANAL FEEDING THIRSTY IMPERIAL VALLEY WITH WATER FROM THE COLORADO RIVER. MEXICO ON LEFT - NARA - 548896");
  "Category:Imperial Valley" passa de 100, com "Print of section of photograph, Imperial Valley, 1901 - NARA - 296427". A Reclamation tem a obra de
  1934-1940 em domínio público. As fotos da brecha de 1905-1907 estão num documento do Senado de 1907 (citado por um concorrente; não aberto). As
  licenças de cada arquivo ficam para o conferente.
- **Para 13 a 16 min:** sobra material. O material nunca foi o problema desta pauta.

## 6 · O título e o gancho que defendo (se a Sala ainda quiser o assunto)

A única versão que não achei contada é a da **gravidade**: o mesmo rio desce sozinho para um vale abaixo do mar na Califórnia e tem de ser
bombeado morro acima até as cidades do Arizona; quem regava por gravidade chegou primeiro, e a lei congelou essa fila.

- **Título:** "The Colorado River Runs Downhill to California, Uphill to Phoenix" (65 car.). Nomes buscados: "colorado river", "california",
  "phoenix". "Phoenix" e não "Arizona" porque Yuma, no Arizona, também rega por gravidade: "uphill to Arizona" seria palavra forte demais.
- **Alternativas:** "Why Phoenix Has to Pump the Colorado River Uphill" (49); "Why a Valley Below Sea Level Comes First on the Colorado River"
  (62). Evitar "Uses More … Than Arizona" no título: é o título do enxame (K1).
- **O gancho** (44 palavras): "In 2025, one California farm valley used more Colorado River water than all of Arizona. Arizona must pump its share
  uphill to reach Phoenix. So why does the river run downhill to a valley below sea level, and why does that valley drink first?"
- **A miniatura:** o Sudoeste em relevo amarelo; o vale irrigado pintado de **vermelho**; o rio e o All-American Canal em **ciano**, com uma seta
  branca grossa **descendo** ao vale e outra **subindo** até Phoenix; na caixa preta, "UPHILL?" (a B: "MORE THAN ARIZONA", que é o número de
  2025, com o ano pequeno).
- **O que falta medir antes de adotar:** a colisão de "uphill/downhill" e de "Phoenix pump Colorado River" no vidIQ (10 a 15 créditos). "Why
  Arizona Won't Run out of Water" (IT'S HISTORY, 895 mil inscritos, 117.583 views, 06/06/2026) já conta o bombeamento de "nearly 3,000 feet"
  do lado do Arizona; o vale não está nele, mas o pedaço do CAP está.

Mesmo com o ajuste, eu não passaria de **5,0**: o assunto continua o mesmo que o enxame contou (70 % do roteiro seria igual: 1901, 1905,
"first in time", 1968, 2027), e é água e acordo logo depois do Columbia.

## 7 · Os pontos

- **K1 · GRAVE · Colisão e lugar ocupado.** Nove longos no ângulo entre 11/08 e 06/11/2026, um com 453.132 views (26/09) e um provável com
  804.821 (30/08); três títulos a uma palavra do nosso ("1 California Valley Uses More Colorado River Water Than 2 ENTIRE States", "500 Farm
  Families Control More Colorado River Water Than 40 Million People", "Why California Gets More Water Than Arizona (2026)"). O critério (3)
  cai, e é o risco que derrubou o Atlântico.
- **K2 · GRAVE · A porta da busca está fechada.** "imperial valley" < 750/mês; "colorado river" (≈ 24,3 mil, concorrência 51) é busca de
  notícia, com Bloomberg (1,7 milhão), PBS, GoDocs (976 mil) e o enxame de alerta do Lake Mead no topo. O caso do Big Sur (o nome do lugar
  buscado, concorrência 40, ângulo livre) não se repete aqui.
- **K3 · MÉDIO · O paradoxo e a virada estão errados na pauta.** "Nearly as much" compara duas réguas (desvio de 2,6 contra uso de 2,8); o
  dado real é "usa mais que o Arizona" (F3). "O vale vai passar o Arizona em 2027" é falso: já passa desde pelo menos 2019. E o Arizona fica
  com 2,04 MAF em 2027, acima dos 1,91 que usou em 2025: o "maior corte" é contra o papel, não contra o uso. Corrigível, mas mostra que a
  pauta foi montada sobre o direito, não sobre o uso.
- **K4 · MÉDIO · Água e acordo de novo.** Logo depois do tratado do Columbia (vídeo 7) e com o Peru e a água no histórico (vídeo 3), outro
  vídeo de "quem tem direito à água por lei" faz o canal parecer canal de água.
- **K5 · MÉDIO · Fato volátil.** A divisão interna dos 440 mil da Califórnia não foi publicada em fonte primária (NÃO CONFERIDO); o processo
  de Nevada (24/08/2026) está aberto; 2027 começa em seis semanas; o Lake Mead está em 1.040,86 pés e subindo (13/11/2026). Os números de
  tela podem mudar entre o roteiro e a publicação.
- **K6 · LEVE · A medida por morador.** Os 14,3 acre-pés por pessoa (ou 12,1 pelo uso real) comparam água de lavoura com população; sai do
  vídeo.
- **K7 · LEVE · Política e comentário.** Feno exportado (Arábia Saudita, China), o processo do centro de dados contra o IID, fazendeiro
  contra cidade: tudo com fonte, mas é briga de comentário.
- **K8 · LEVE · "Holds"** lê-se como "guarda" (reservatório), não como "tem direito".

**A favor (não salva a nota):** todos os fatos centrais são primários e conferidos hoje (Reclamation, CRS, DOI, USGS, Census); o material é
farto e de domínio público; a procura existe.

**Nota: 4,0. DERRUBADO.** Na dúvida, derrube; aqui não há dúvida: o espectador que procura "por que o Vale Imperial tem tanta água" já tem
o vídeo dele, com 453 mil views, e o nosso título seria o quarto quase igual do outono.

---

## Os créditos do vidIQ

Saldo antes: **5.581** (21:1x). Saldo depois: **5.496** (21:2x). **As minhas chamadas: 6 × 5 = 30 créditos** (o teto). A diferença maior no
saldo (85) vem dos outros céticos, que rodavam ao mesmo tempo.

| # | Ferramenta | Parâmetros | Créditos |
|---|---|---|---|
| v1 | youtube_search | "Imperial Valley Colorado River water rights Arizona", vídeo, desde 2025-11-17, relevância, 20 | 5 |
| v2 | youtube_search | "Imperial Valley water Colorado River", vídeo, sem data, por views, 20 | 5 |
| v3 | youtube_search | "why one valley gets more Colorado River water than Arizona", vídeo, sem data, relevância, 20 | 5 |
| v4 | youtube_search | "Colorado River water California Arizona Imperial Valley", vídeo, desde 2025-11-17, por views, 4-20 min, 25 | 5 |
| v5 | keyword_research | "imperial valley", research, 15 | 5 |
| v6 | youtube_search | "Salton Sea why", vídeo, desde 2025-11-17, por views, 20 | 5 |

## Os arquivos de trabalho (`out/_pautas/video-8/_trabalho/cetico-vale-imperial/`)

- `baixar.py` (download aberto, um pedido por vez, User-Agent do canal) e `usbr/` (os relatórios de 2019, 2022, 2023, 2024 e 2025, a previsão e o
  uso de 2026, as regras de 2027-2028, a página do Lake Mead, a história do All-American Canal).
- `decreto.py`, `pagina.py`, `achar.py`, `serie.py` (a leitura dos PDFs da Reclamation) e `medida.py` com `medida-saida.txt` (a conta).
- `cotas.py` e `cotas.json` (as cotas do 3DEP); `cdl/` e `cdl_conta.py` (o Cropland Data Layer de 2025); `commons_cat.py` (as categorias do
  Commons).
- `vidiq_tsv.py` e `v4-colorado-12m-views.json`/`.tsv` (a busca v4); `yt_desc.py` e `watch.jsonl` (as páginas `/watch`).
- `titulos.py` e `titulos2.py` (a contagem dos títulos e do gancho); `crs-R45546-2026-10-01.pdf` e `salton-sea-faq-2024.pdf`.
