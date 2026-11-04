# Pauta de dados — big-sur (vídeo 5), passo research

Gerada em 2026-11-04 pelo `pesquisa-dados` a partir do espelho r2 (sha256 `6e787c20d492…`): 54 cenas, 54 pedidos. Cada cena em `out/big-sur/_dados/<cena>.json`; as tabelas no fim. Unidades de tela: milhas, milhas quadradas, pés, acres.

## Contagem

| Status | Pedidos |
|---|---|
| conferido_primario | 21 |
| qualitativo_conferido | 18 |
| atribuido_conferido | 12 |
| calculado_conferido | 3 |

## Divergências (para a Sala, o verificador e o redator; nenhuma muda a voz)

- **s04, s16** — Wyoming 2020: dossiê 576,872 (base das estimativas) × censo 576,851 (contagem); a densidade fica 5.94 nos dois
- **s14** — R028 (espelho s14): 'Ventana Double Cone cai dentro' — com as coordenadas do GNIS ele cai no Carmel Valley CCD, na divisa (~0,01 mi); a frase 'and the mountains behind it' continua de pé por outros cumes. Para o mapista: não rotular o Double Cone como dentro do distrito
- **s14** — L1 do dossiê: 'a terra vai … a ~35,99 N na costa, onde a divisa com San Ardo chega ao mar (35.9921 N, 121.5010 W)'. A terra do distrito toca a costa só até ~36.011 N: ali a divisa desce pelo meridiano 121.5257 W até a costa, logo ao norte da foz do Limekiln Creek; de 36.008 a 35.992 N ela corre 0,1–0,2 mi mar adentro (a faixa de terra é de San Ardo, a água é do distrito), e o 35.9921 N é onde ela sai em linha reta para o mar (divisa_costa.py). Não muda o 'roughly two-thirds' (0,63–0,64); vale para o mapista e o pesquisa-geo
- **s19** — Cone Peak: o plano (1986) dá 5,200 ft; o USGS 3DEP dá 5,140 ft no ponto do cume do GNIS. A voz tem 'about'; a tela precisa do ≈
- **s38** — 706 acres são a venda de 1934 (o núcleo); o parque tem 822 acres no plano. A tela do espelho pode ler como o tamanho do parque
- **s50** — A Caltrans diz 'Over 4,600'; a tela do espelho diz '4,600 STEEL BARS' sem o 'over'. Sugiro '4,600+' ou 'OVER 4,600'

## Voláteis

- **s54** — Caltrans, Highway Information SR 1: relido 2026-11-04 18:16 (Brasília); 'as of Wednesday, November 4th, 2026 at 01:16 PM'; sem fechamento total em Big Sur; as mesmas três mãos únicas de 01/11 (Mud Creek até 13/11; Point Sur–norte de Big Sur até 31/12; Rocky Creek até 30/11).
- **s53** — CAL FIRE, Timber Fire (acres, contenção, estruturas): NÃO RELIDO hoje (www.fire.ca.gov recusa leitura automática (robots.txt 403); a Sala relê no navegador do app antes da publicação).

## Por cena

| Cena | Tela sugerida | Crédito sugerido | Status |
|---|---|---|---|
| s02 | 17 MILLION+ | Source: U.S. Census Bureau, 2025 estimates | conferido_primario |
| s03 | 1,474 · CENSUS DISTRICT · 2020 | Source: U.S. Census Bureau, 2020 Census | conferido_primario |
| s04 | (sem número; os dois quadrados com ~6 pontos) | Source: U.S. Census Bureau, 2020 Census | calculado_conferido |
| s06 | Big Sur Coast Land Use Plan · Monterey County · 1986 (a linha 'The climate in Big Sur is mild' grifada na folha) | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s07 | NEARLY 1,000 PEOPLE · 1880s · MONTEREY COUNTY PLAN (1986) | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | atribuido_conferido |
| s10 | (sem texto da regra aqui; a regra entra em s44) | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s11 | 2020 CENSUS | Source: U.S. Census Bureau, 2020 Census | conferido_primario |
| s13 | CENSUS DISTRICT · BIG SUR CCD · MONTEREY COUNTY | Source: U.S. Census Bureau | conferido_primario |
| s14 | (sem número; Carmel e ANOTHER CENSUS DISTRICT) | (medição do canal sobre geometria do Census: sem crédito de fonte; a base do mapa leva o dela) | calculado_conferido |
| s15 | 1,474 · CENSUS DISTRICT · 2020 / 251.4 SQ MI OF LAND / ≈ 6 PEOPLE / SQ MI · 2020 | Source: U.S. Census Bureau, 2020 Census | conferido_primario |
| s16 | WYOMING 5.9 · CALIFORNIA 253.7 / SQ MI · 2020 | Source: U.S. Census Bureau, 2020 Census | conferido_primario |
| s17 | MORE THAN 70 MI · MONTEREY COUNTY PLAN (1986) | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | atribuido_conferido |
| s19 | CONE PEAK · ≈ 5,200 FT / 'DROP PRECIPITOUSLY TO THE SEA' · MONTEREY COUNTY PLAN (1986) | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | atribuido_conferido |
| s20 | (sem número) | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s21 | HIGHWAY 1 / NACIMIENTO–FERGUSSON ROAD · 1986 / HUNTER LIGGETT | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s22 | NEARLY 50 STREAMS | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | atribuido_conferido |
| s23 | WATER · DIFFICULT ACCESS · UNSTABLE SOILS ON STEEP SLOPES · FIRE · FLOOD / MONTEREY COUNTY PLAN (1986) | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s24 | ≈ HALF FEDERAL LAND · MONTEREY COUNTY PLAN (1986) / U.S. FOREST SERVICE | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | atribuido_conferido |
| s25 | VENTANA WILDERNESS / STATE PARKS (sem número) |  | qualitativo_conferido |
| s26 | MUD CREEK · 2017 / OUTSIDE THE CENSUS DISTRICT |  | conferido_primario |
| s27 | MUD CREEK · JULY 19, 2017 |  | conferido_primario |
| s28 | PAUL'S SLIDE / REGENT'S SLIDE (as datas vão a s49) | Source: Caltrans, 2026 | conferido_primario |
| s29 | (sem número) |  | qualitativo_conferido |
| s30 | tanbark (sem número) |  | qualitativo_conferido |
| s31 | NEARLY 1,000 PEOPLE · 1880s · MONTEREY COUNTY PLAN (1986) / PFEIFFER / BIXBY CREEK | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | atribuido_conferido |
| s32 | (sem número) |  | qualitativo_conferido |
| s33 | 'THE HAZARDOUS ROAD' · CLOSED PART OF THE YEAR | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s34 | 1919 · FHWA | Source: Federal Highway Administration | atribuido_conferido |
| s35 | Bixby Creek (sem ano nem construtor) |  | qualitativo_conferido |
| s36 | SAN QUENTIN · 3 TEMPORARY CAMPS · 35¢ A DAY · SENTENCES REDUCED · FHWA | Source: Federal Highway Administration | atribuido_conferido |
| s37 | 'ENRAGED' · MONTEREY COUNTY PLAN (1986) | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s38 | 1934 · 706 ACRES SOLD TO THE STATE / FINISHED JUNE 27, 1937 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | atribuido_conferido |
| s39 | ≈ $8 MILLION · MONTEREY COUNTY PLAN (1986) | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | atribuido_conferido |
| s40 | LESS THAN A DAY'S DRIVE · 1986 PLAN | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s41 | FIRST STATE SCENIC HIGHWAY · 1965 / PEAK SUMMER: 95% RECREATIONAL TRIPS · 1986 PLAN | Source: Caltrans; Monterey County, Big Sur Coast Land Use Plan, 1986 | conferido_primario |
| s42 | (sem número) |  | qualitativo_conferido |
| s43 | 1986 / ≈ HALF THE COASTAL ZONE PUBLIC · 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | atribuido_conferido |
| s44 | 'THE CRITICAL VIEWSHED' · MONTEREY COUNTY PLAN (1986) / ILLUSTRATIVE | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s45 | BIXBY CREEK TURNOUT / 'normal, unaided vision in any direction for any amount of time at any season' | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s46 | (sem número) |  | qualitativo_conferido |
| s47 | ≈ 2.9 MILLION A YEAR · 1986 / EXPECTED TO DOUBLE IN 20–25 YEARS / 85% FOR RECREATION, VISITORS & OTHER PRIORITY USES · 1986 PLAN / NEW HOMES ≤ 15% · 1986 PLAN | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | conferido_primario |
| s48 | (sem número) |  | atribuido_conferido |
| s49 | PAUL'S SLIDE · JAN 14, 2023 – JUN 23, 2024 / REGENT'S SLIDE · FEB 9, 2024 · 6 MI NORTH / ALMOST THREE YEARS | Source: Caltrans, 2026 | conferido_primario |
| s50 | 4,600+ STEEL BARS · UP TO 60 FT · CALTRANS / REOPENED JAN 14, 2026 · NOON | Source: Caltrans, 2026 | conferido_primario |
| s51 | $82.6 MILLION (EST.) · CALTRANS | Source: Caltrans, 2026 | conferido_primario |
| s52 | KIRK GAFILL · OWNER, NEPENTHE · CALTRANS, MAY 15, 2026 | Source: Caltrans, May 15, 2026 | conferido_primario |
| s53 | TIMBER FIRE · STARTED AUG 8, 2026 · 25,352 ACRES · CAL FIRE / 661 STRUCTURES THREATENED · CAL FIRE | Source: CAL FIRE, 2026 | conferido_primario |
| s54 | CLOSED · AUG 2026 · CALTRANS / NOV 1, 2026: OPEN · ONE-WAY AT WORK ZONES · CALTRANS | Source: Caltrans, 2026 | conferido_primario |
| s55 | 887 HOMES · 2020 CENSUS / 345 EMPTY ON CENSUS DAY · 2020 CENSUS | Source: U.S. Census Bureau, 2020 Census | conferido_primario |
| s56 | SEASONAL, RECREATIONAL OR OCCASIONAL USE · ACS 2020–2024 / CENSUS DISTRICT ≈ 93% (WIDE MARGINS) / CALIFORNIA ≈ 33% · ACS 2020–2024 | Source: U.S. Census Bureau, American Community Survey, 2020–2024 | conferido_primario |
| s57 | 'TOURISTS ARE RETURNING IN CONSIDERABLE NUMBERS' · CALTRANS, MAY 15, 2026 | Source: Caltrans, May 15, 2026 | conferido_primario |
| s58 | WYOMING (sem número novo) |  | calculado_conferido |
| s59 | BIXBY CREEK TURNOUT · NAMED IN THE 1986 PLAN | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | qualitativo_conferido |
| s60 | 17 MILLION+ / 1,474 · CENSUS DISTRICT · 2020 | Source: U.S. Census Bureau, 2020 Census and 2025 estimates | conferido_primario |

## Tabelas e séries

- `out/big-sur/_dados/tabela-densidade-estados-2020.csv`
- `out/big-sur/_dados/tabela-metros-california-2025.csv`
- `out/big-sur/_dados/tabela-vagas-acs-2020-2024.csv`
- `out/big-sur/_dados/tabela-censo-2020-distritos.csv`
- `out/big-sur/_dados/tabela-rodovias-cenicas-caltrans.csv`
- `out/big-sur/_dados/costa-e-lugares.json`

Conferência: `out/big-sur/_tmp/pesquisa-dados/conferir.py` (log em `conferir.log`); 83 de 83 achadas nas cópias; falhas: 0.
