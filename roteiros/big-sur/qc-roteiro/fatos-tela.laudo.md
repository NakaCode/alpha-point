COBERTURA: 471 de 471

# Laudo de tela · verificador-de-fatos · big-sur (vídeo 5) · screen_text · tarefa big-sur-texto-2

- **Data-base:** 05/11/2026. Os voláteis da s53 foram relidos na origem hoje, por volta das 05:15 (Brasília): a página do Timber Fire
  no CAL FIRE ("Last updated 10/20/2026, 8:41 PM") e a página da SR 1 na Caltrans ("As of Thursday, November 5, 2026, at 12:16 AM").
- **O objeto:** `out/big-sur/textos-tela.json`, sha256 `2f5939b26eb11d19e350f05578d4e6cbc523add695b3a6e9095571a93e0bec97` (379 textos em
  51 cenas). A mídia contra o `conferencia-midia.json` vigente, `ead1a66a50381d0a9b3e2562d65a80af281f1c82a73c8744b11c732205743e1a`
  (35 aprovados).
- **Como a lista foi derivada (o denominador, 471):**
  - **379 por script:** `out/big-sur/_tmp/vf-bs-T/lista.py` numera todos os `_textos_por_cena`, na ordem do arquivo (VT-001 a VT-379),
    inclusive os créditos, os "nada", os condicionais e os marcadores da caça. Nenhum texto ficou fora.
  - **92 à mão:** o card de `cards_pessoa` (VT-380), os 55 `rotulos_dado` (VT-381 a VT-435), os 22 `_avisos_do_ano` (VT-436 a VT-457) e
    as 14 escalas e proporções que as notas declaram (VT-458 a VT-471). As escalas saíram de uma varredura por palavra-chave das 379 notas
    (`escalas.py`: pontos, células, quadrado, amostra, barra, proporção, contagem) e da leitura das 379 notas inteiras.
  - **O que o detector não pega, e como cobri:** a varredura de escala é por palavra. Por isso li as 379 notas (`casar.txt`). Os 56 itens do
    `glossario` não são texto de tela: a grafia deles vive nos textos, conferidos um a um. Os 41 de `nao_vai_para_tela` não são itens: uma
    varredura confirmou que nenhum deles aparece em texto nenhum (706, 700 ACRES, 1933, general manager, late 1800s, APRIL 9/10, drone,
    MID-OCTOBER, BAY AREA).
- **O que já tinha veredito se cita pelo id, sem refazer** (R… do laudo do roteiro; VP-A/VP-B do laudo-delta da pesquisa). Conferi que
  cada id citado nas notas existe (0 ids inexistentes) e que diz o que o texto diz (`casar.py`: 161 iguais à forma do laudo; 124 com
  diferença de forma, julgados um a um; 94 sem id na nota, ligados a mão ao id da série ou ao veredito de mídia).
- **O que conferi além do id:**
  - **Letra a letra:** as citações, as folhas recriadas e os grifos, contra as cópias locais (o plano no govinfo, as notas da Caltrans de
    14/01 e 15/05/2026) e o texto do PDF do questionário da ACS (`literal.py`, com e sem caixa). Todos estão na fonte. O único "não achado"
    automático (VT-212) é um defeito do OCR ("for. the beautiful country"), e a folha escreve certo.
  - **A mídia:** cada rótulo de lugar contra o `lugar_na_origem`, cada aviso contra o `data_na_origem` e o `aviso_de_ano`, e cada crédito
    contra o `credito_na_tela` (antes do parêntese), por script, no veredito vigente de cada cena. Os 22 avisos casam também pelo sha256.
  - **O formato da identidade §7:** as datas no AP (JAN., FEB., AUG., OCT., NOV. com dia; JUNE e o mês sem dia por extenso), as unidades
    imperiais (nenhuma fonte deste vídeo é métrica: nenhum parêntese métrico é devido) e o crédito "Source: <instituição>, <ano>".
  - **A aritmética** de toda razão, soma e cota da tela, e das escalas desenhadas.
  - **O adendo da Sala:** s57 (Hurricane Point de 698,767 a 702,4 s, dentro da 1ª frase; "Photo from 2025"; Joe Mabel), s27 (só o ano),
    Fred Moore em s12, s21 e s57 ("Highway 1, Big Sur", "Photo from 2012", CC BY 2.0), s42 (o DVIDS só nos planos 2 ou 5, nas
    instruções à arte; a Iliff com "Photo from 2013") e as datas de s20, s37, s48 e s53. Tudo aplicado.

NOTA: 9.5/10. Nenhum fato errado na tela: nenhuma citação diverge da fonte, a aritmética fecha e toda mídia casa com o veredito vigente. Os
4 "corrigir" são de formato (o crédito de dado sem o ano que a identidade §7 pede), cada um com o conserto de uma linha.

**Placar:** 453 confirmadas · 4 corrigir · 0 não conferidas · 14 nada a checar. Nenhuma REFUTADA e nenhuma DIVERGE de fato. O texto de tela
foi **CHECADO POR INTEIRO**. Os 14 "nada a checar" são 4 trechos declarados sem texto, a pergunta do comentário, os 3 títulos de painel da
s58, os 5 rótulos que dependem do veredito da caça (ainda não escritos) e o desenho das ~20 casas, que é declarado ilustrativo.

## A tabela

Legenda: CM[n] = `out/big-sur/_pesquisa/conferencia-midia.json` › `candidatos[n]` (o veredito vigente). "cópia, l. N" = a linha da cópia
local do plano, `midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm`.

| id | cena | texto | veredito | fonte ou id citado (e o que conferi) | conserto |
|---|---|---|---|---|---|
| VT-001 | s01 | Big Sur, California | confirmada | VP-B-040; conferencia-midia.json candidatos[0] — menos específico que o lugar_na_origem; lugar_na_origem: Bixby Bridge (descrição do arquivo: 'Bixby Bridge'; categoria Bixby Creek Bridge); o rótulo não passa dele | — |
| VT-002 | s01 | Photo from 2023 | confirmada | VP-B-041; conferencia-midia.json candidatos[0] — data_na_origem 2023-06-24 (EXIF DateTimeOriginal 2023-0; aviso_de_ano true | — |
| VT-003 | s01 | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | confirmada | VP-B-042; conferencia-midia.json candidatos[0] — igual ao credito_na_tela, antes do parêntese | — |
| VT-004 | s02 | Photo from 2023 | confirmada | conferencia-midia.json candidatos[37] — data_na_origem 2023-06-24 (EXIF DateTimeOriginal 2023-0; aviso_de_ano true | — |
| VT-005 | s02 | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | confirmada | conferencia-midia.json candidatos[37] — igual ao credito_na_tela, antes do parêntese | — |
| VT-006 | s02 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-007 | s02 | LOS ANGELES | confirmada | VP-A-296, VP-A-331 | — |
| VT-008 | s02 | SAN FRANCISCO | confirmada | VP-A-296 | — |
| VT-009 | s02 | 17 MILLION+ | confirmada | VP-A-001 — 12,844,441 + 4,630,041 = 17,474,482 (2025) | — |
| VT-010 | s02 | Source: U.S. Census Bureau, 2025 estimates | confirmada | VP-A-002 | — |
| VT-011 | s03 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-012 | s03 | LOS ANGELES | confirmada | VP-A-296 — a mesma forma de s02 | — |
| VT-013 | s03 | SAN FRANCISCO | confirmada | VP-A-296 — a mesma forma de s02 | — |
| VT-014 | s03 | 17 MILLION+ | confirmada | VP-A-001 — a mesma forma de s02 | — |
| VT-015 | s03 | 1,474 · CENSUS DISTRICT · 2020 | confirmada | VP-A-008, R004, R013, R032 — constante publicada; a voz diz fewer than 1,500 | — |
| VT-016 | s03 | Bixby Creek Bridge | confirmada | VP-A-282 | — |
| VT-017 | s03 | Source: U.S. Census Bureau, 2025 estimates | confirmada | VP-A-002 — o dono do 17 MILLION+ | — |
| VT-018 | s03 | Source: U.S. Census Bureau, 2020 Census | confirmada | VP-A-009 | — |
| VT-019 | s04 | CENSUS DISTRICT | confirmada | VP-A-012 | — |
| VT-020 | s04 | WYOMING | confirmada | VP-A-330 | — |
| VT-021 | s04 | People per square mile of land, 2020 | confirmada | VP-A-014 — a legenda do laudo, sem o ponto final | — |
| VT-022 | s04 | Source: U.S. Census Bureau, 2020 Census | confirmada | VP-A-013 | — |
| VT-023 | s05 | Big Sur coast, California | confirmada | VP-B-043; conferencia-midia.json candidatos[2] — lugar_na_origem: Central Californian coastline looking south, with the McWay Rocks (with arch) in the foreground, and McWay Cov; o rótulo não passa dele | — |
| VT-024 | s05 | Photo from 2013 | confirmada | VP-B-044; conferencia-midia.json candidatos[2] — data_na_origem May 2013 (no título do arquivo; o EXIF n; aviso_de_ano true | — |
| VT-025 | s05 | David Iliff / Wikimedia Commons · CC BY-SA 3.0 | confirmada | VP-B-045; conferencia-midia.json candidatos[2] — igual ao credito_na_tela, antes do parêntese | — |
| VT-026 | s06 | BIG SUR COAST LAND USE PLAN | confirmada | VP-B-038, VP-B-003, VP-B-013 — literal da capa e da folha de rosto (cópia local, l. 155–157) | — |
| VT-027 | s06 | The climate in Big Sur is mild. Although the winters bring some of the heaviest rainfall in California, the summers are long and dry. | confirmada | VP-B-001, VP-B-002 — literal (cópia local, PDF p. 7, 1º parágrafo) | — |
| VT-028 | s06 | mild | confirmada | VP-B-001, R010 — literal | — |
| VT-029 | s06 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-019, VP-B-004 | — |
| VT-030 | s07 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-031 | s07 | Carmel | confirmada | VP-A-292 | — |
| VT-032 | s07 | SAN LUIS OBISPO COUNTY | confirmada | VP-A-298 | — |
| VT-033 | s07 | Illustrative | confirmada | regência (desenho declarado) — o desenho é declarado como ilustrativo | — |
| VT-034 | s07 | NEARLY 1,000 PEOPLE · 1880s · MONTEREY COUNTY PLAN (1986) | confirmada | VP-A-021, R012, R022, R092 | — |
| VT-035 | s07 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-022 | — |
| VT-036 | s08 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-037 | s08 | So why didn’t it fill up? | confirmada | R013 — a pergunta da voz, inteira; pressupõe que a costa não encheu (R013 confirmada) | — |
| VT-038 | s08 | SANTA LUCIA MOUNTAINS | confirmada | VP-A-291 | — |
| VT-039 | s08 | Vertical exaggeration 1.5× | confirmada | regência s08 (1.5× declarado) — o fator que a regência declara; o qc-visual confere no render | — |
| VT-040 | s09 | Highway 1, Big Sur | confirmada | VP-B-084; conferencia-midia.json candidatos[38] — lugar_na_origem: Regent's Slide (alt: 'Photo showing extent of Regent's Slide', na 'Regent's Slide Media Gallery' da Caltrans D; o rótulo não passa dele | — |
| VT-041 | s09 | Photo from 2024 | confirmada | VP-B-085; conferencia-midia.json candidatos[38] — data_na_origem EXIF 2024-02-12 13:43; o nome do arquivo; aviso_de_ano true | — |
| VT-042 | s09 | Caltrans | confirmada | VP-B-086, VP-B-123; conferencia-midia.json candidatos[38] — igual ao credito_na_tela, antes do parêntese | — |
| VT-043 | s09 | Mud Creek, Big Sur | confirmada | VP-B-064, VP-B-066; conferencia-midia.json candidatos[39] — lugar_na_origem: Mud Creek landslide (título da página do USGS; etiquetas Big Sur, California); o rótulo não passa dele | — |
| VT-044 | s09 | Photo from 2017 | confirmada | VP-B-065; conferencia-midia.json candidatos[39] — data_na_origem May 27, 2017; aviso_de_ano true | — |
| VT-045 | s10 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-046 | s10 | Illustrative | confirmada | VP-A-025 | — |
| VT-047 | s10 | Illustrative · vertical exaggeration 1.5× | confirmada | regência (_condicao: só com o relevo exagerado) — condicional: só vai se o mapista exagerar o relevo, com o fator que usar (outro fator volta ao redator) | — |
| VT-048 | s11 | 2020 CENSUS | confirmada | VP-A-028 | — |
| VT-049 | s11 | Source: U.S. Census Bureau, 2020 Census | confirmada | VP-A-029 | — |
| VT-050 | s12 | (nada no centro: x 1316–2556, y 640–1552, nem no corredor da queda, nem na diagonal até o canto) | nada a checar | — — trecho declarado sem texto | — |
| VT-051 | s12 | Highway 1, Big Sur | confirmada | VP-B-046; conferencia-midia.json candidatos[4] — lugar_na_origem: Highway 1 in Big Sur, California, on the coastal cliffs (descrição do arquivo; título 'Highway 1 Big Sur Calif; o rótulo não passa dele | — |
| VT-052 | s12 | Photo from 2012 | confirmada | VP-B-047; conferencia-midia.json candidatos[4] — data_na_origem 2012-07-29; aviso_de_ano true | — |
| VT-053 | s12 | Fred Moore / Wikimedia Commons · CC BY 2.0 | confirmada | VP-B-048; conferencia-midia.json candidatos[4] — igual ao credito_na_tela, antes do parêntese | — |
| VT-054 | s13 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-055 | s13 | CENSUS DISTRICT | confirmada | VP-A-035 | — |
| VT-056 | s13 | BIG SUR CCD · MONTEREY COUNTY | confirmada | VP-A-035, VP-A-262, VP-A-332 | — |
| VT-057 | s13 | MONTEREY COUNTY | confirmada | VP-A-035 — o condado do distrito (BIG SUR CCD · MONTEREY COUNTY) | — |
| VT-058 | s13 | CCD: census county division, a statistical area with no government of its own. | confirmada | VP-A-037, VP-A-333 | — |
| VT-059 | s13 | Carmel | confirmada | VP-A-292 — Carmel-by-the-Sea, rótulo CARMEL | — |
| VT-060 | s13 | ANOTHER CENSUS DISTRICT | confirmada | VP-A-038, VP-A-265 | — |
| VT-061 | s13 | Source: U.S. Census Bureau | corrigir | VP-A-036, VP-A-039 — crédito de dado sem ano (identidade §7; a regra CRÉDITOS do próprio arquivo pede Source: <instituição>, <ano ou data>). O distrito e as CCDs são a geografia do Censo de 2020 (TIGER 2020, PL 94-171; VP-A-036). O laudo-delta confirmou a forma sem medir o §7 | Source: U.S. Census Bureau, 2020 Census |
| VT-062 | s15 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-063 | s15 | 1,474 · CENSUS DISTRICT · 2020 | confirmada | VP-A-047 | — |
| VT-064 | s15 | 251.4 SQ MI OF LAND | confirmada | VP-A-048, R033 — ALAND 251.36 → 251.4 | — |
| VT-065 | s15 | ≈ 6 PEOPLE / SQ MI · 2020 | confirmada | VP-A-049 — 5.86 → ≈ 6 | — |
| VT-066 | s15 | CENSUS DISTRICT | confirmada | VP-A-049 — a marca do 1º quadrado da régua (5.86) | — |
| VT-067 | s15 | WYOMING | confirmada | VP-A-297 | — |
| VT-068 | s15 | WYOMING | confirmada | VP-A-056 — a marca do 2º quadrado (5.9) | — |
| VT-069 | s15 | ALASKA | confirmada | VP-A-061 | — |
| VT-070 | s15 | WYOMING 5.9 · CALIFORNIA 253.7 / SQ MI · 2020 | confirmada | VP-A-056 — 5.94 → 5.9; 253.7 | — |
| VT-071 | s15 | CALIFORNIA | confirmada | VP-A-056 — a marca do 3º quadrado (253.7) | — |
| VT-072 | s15 | MORE THAN 40× | confirmada | VP-A-065 — aritmética: 253.7 ÷ 5.86 = 43.3; com os números da tela, 253.7 ÷ 5.9 = 43.0: MORE THAN 40× fecha | — |
| VT-073 | s15 | Source: U.S. Census Bureau, 2020 Census | confirmada | VP-A-050, VP-A-057 | — |
| VT-074 | s15 | Carmel | confirmada | VP-A-292 — Carmel-by-the-Sea, rótulo CARMEL | — |
| VT-075 | s15 | SAN LUIS OBISPO COUNTY | confirmada | VP-A-298 | — |
| VT-076 | s15 | MORE THAN 70 MI · MONTEREY COUNTY PLAN (1986) | confirmada | VP-A-066, VP-A-070, VP-A-276 — o plano: over seventy miles; a estrada mede 72.3–73.7 mi | — |
| VT-077 | s15 | CENSUS DISTRICT | confirmada | VP-A-035, VP-A-262 — o contorno do distrito | — |
| VT-078 | s15 | BIG SUR COAST · 1986 PLAN | confirmada | VP-A-268 | — |
| VT-079 | s15 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-067 | — |
| VT-080 | s18 | Big Sur coast, California | confirmada | VP-B-043; conferencia-midia.json candidatos[40] — lugar_na_origem: Central Californian coastline looking south, with the McWay Rocks (with arch) in the foreground, and McWay Cov; o rótulo não passa dele | — |
| VT-081 | s18 | Photo from 2013 | confirmada | VP-B-044; conferencia-midia.json candidatos[40] — data_na_origem May 2013 (no título do arquivo; o EXIF n; aviso_de_ano true | — |
| VT-082 | s18 | David Iliff / Wikimedia Commons · CC BY-SA 3.0 | confirmada | VP-B-045; conferencia-midia.json candidatos[40] — igual ao credito_na_tela, antes do parêntese | — |
| VT-083 | s19 | Illustrative · vertical scale exaggerated | confirmada | regência (desenho declarado) — o perfil da encosta, exagero vertical declarado | — |
| VT-084 | s19 | Highway 1 | confirmada | VP-A-080 — a estrada no perfil | — |
| VT-085 | s19 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-086 | s19 | Vertical exaggeration 1.5× | confirmada | regência s19 (1.5× declarado) — o fator que a regência declara; o qc-visual confere no render | — |
| VT-087 | s19 | SANTA LUCIA MOUNTAINS | confirmada | VP-A-291 | — |
| VT-088 | s19 | Cone Peak | confirmada | VP-A-290, VP-B-055; conferencia-midia.json candidatos[9] — lugar_na_origem: Cone Peak (center), visto da Vicente Flat Trail (descrição do arquivo); o rótulo não passa dele | — |
| VT-089 | s19 | Cone Peak · ≈ 5,200 FT | confirmada | VP-A-072 — o plano: an elevation of 5,200 feet at Cone Peak (cópia, l. 362–363); o USGS dá 5,140 ft: o ≈ cobre | — |
| VT-090 | s19 | Photo from 2022 | confirmada | VP-B-056; conferencia-midia.json candidatos[9] — data_na_origem 2022-11-12; aviso_de_ano true | — |
| VT-091 | s19 | Natecation / Wikimedia Commons · CC BY-SA 4.0 | confirmada | VP-B-057; conferencia-midia.json candidatos[9] — igual ao credito_na_tela, antes do parêntese | — |
| VT-092 | s19 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-074 | — |
| VT-093 | s19 | Illustrative · vertical scale exaggerated | confirmada | regência (desenho declarado) — o perfil da encosta, exagero vertical declarado | — |
| VT-094 | s19 | Highway 1 | confirmada | VP-A-080 — a estrada no perfil | — |
| VT-095 | s19 | ≈ 5,200 FT | confirmada | VP-A-072 — idem VT-089 | — |
| VT-096 | s19 | “DROP PRECIPITOUSLY TO THE SEA” · MONTEREY COUNTY PLAN (1986) | confirmada | VP-A-073 — literal: drop precipitously to the sea (cópia, l. 363) | — |
| VT-097 | s20 | Coast near Big Sur, California | confirmada | VP-B-058, VP-B-059, VP-B-060, VP-B-121; conferencia-midia.json candidatos[10] — lugar_na_origem: central California's coastline near Big Sur, California (legenda); BIG SUR, CALIFORNIA, US (local da página); ; o rótulo não passa dele; aviso_de_ano false: sem aviso, certo | — |
| VT-098 | s20 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-099 | s20 | Vertical exaggeration 1.5× | confirmada | regência (_condicao: só com o relevo exagerado) — condicional: só vai se o mapista exagerar o relevo, com o fator que usar (outro fator volta ao redator) | — |
| VT-100 | s21 | Highway 1, Big Sur | confirmada | VP-B-046; conferencia-midia.json candidatos[41] — lugar_na_origem: Highway 1 in Big Sur, California, clings to the coastal cliffs over much of its distance. This view looking so; o rótulo não passa dele | — |
| VT-101 | s21 | Photo from 2012 | confirmada | VP-B-047; conferencia-midia.json candidatos[41] — data_na_origem 2012-07-29 (DateTimeOriginal 2012-07-29 ; aviso_de_ano true | — |
| VT-102 | s21 | Fred Moore / Wikimedia Commons · CC BY 2.0 | confirmada | VP-B-048; conferencia-midia.json candidatos[41] — igual ao credito_na_tela, antes do parêntese | — |
| VT-103 | s21 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-104 | s21 | Highway 1 | confirmada | VP-A-080 | — |
| VT-105 | s21 | Nacimiento-Fergusson Road | confirmada | VP-A-081, VP-A-277 — o plano escreve The Nacimiento-Fergusson Road, com hífen | — |
| VT-106 | s21 | HUNTER-LIGGETT MILITARY RESERVATION · 1986 PLAN | confirmada | VP-A-274, VP-A-328 | — |
| VT-107 | s21 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-083, VP-A-086 | — |
| VT-108 | s21 | NEARLY 50 STREAMS | confirmada | VP-A-085, VP-A-287 — o plano: Nearly fifty separate streams | — |
| VT-109 | s21 | WINTER | confirmada | VP-B-002 — o plano: the winters bring some of the heaviest rainfall in California | — |
| VT-110 | s21 | SUMMER | confirmada | VP-B-002 — o plano: the summers are long and dry | — |
| VT-111 | s21 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-B-002 | — |
| VT-112 | s23 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-113 | s23 | WATER | confirmada | VP-A-089 | — |
| VT-114 | s23 | DIFFICULT ACCESS | confirmada | VP-A-089 — a lista do plano: DIFFICULT ACCESS | — |
| VT-115 | s23 | UNSTABLE SOILS | confirmada | VP-A-089 — a lista do plano: UNSTABLE SOILS (ON STEEP SLOPES fica na voz) | — |
| VT-116 | s23 | FIRE AND FLOOD | confirmada | VP-A-089 — a lista do plano: FIRE e FLOOD, juntos | — |
| VT-117 | s23 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-091 | — |
| VT-118 | s23 | Illustrative · vertical scale exaggerated | confirmada | regência (desenho declarado) — o perfil da encosta, exagero vertical declarado | — |
| VT-119 | s23 | Highway 1 | confirmada | VP-A-080 — a estrada no perfil | — |
| VT-120 | s24 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-121 | s24 | PUBLIC LAND | confirmada | VP-A-269 | — |
| VT-122 | s24 | ≈ HALF FEDERAL LAND · MONTEREY COUNTY PLAN (1986) | confirmada | VP-A-093, VP-A-270 — o plano: approximately half | — |
| VT-123 | s24 | LOS PADRES NATIONAL FOREST | confirmada | VP-A-270 | — |
| VT-124 | s24 | VENTANA WILDERNESS | confirmada | VP-A-275 | — |
| VT-125 | s24 | U.S. Forest Service | confirmada | VP-A-094, VP-A-318 | — |
| VT-126 | s24 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-095 | — |
| VT-127 | s25 | Ventana Wilderness | confirmada | VP-B-061; conferencia-midia.json candidatos[12] — lugar_na_origem: Bottchers Gap, Big Sur, California (descrição); título: 'Ventana wilderness'; o rótulo não passa dele | — |
| VT-128 | s25 | Photo from 2012 | confirmada | VP-B-062; conferencia-midia.json candidatos[12] — data_na_origem 2012-06-21; aviso_de_ano true | — |
| VT-129 | s25 | S. Rae / Wikimedia Commons · CC BY 2.0 | confirmada | VP-B-063; conferencia-midia.json candidatos[12] — igual ao credito_na_tela, antes do parêntese | — |
| VT-130 | s25 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-131 | s25 | STATE PARKS | confirmada | VP-A-101, VP-A-102 | — |
| VT-132 | s25 | WHAT’S LEFT | confirmada | VP-A-271 | — |
| VT-133 | s25 | Vertical exaggeration 1.5× | confirmada | regência (_condicao: só com o relevo exagerado) — condicional: só vai se o mapista exagerar o relevo, com o fator que usar (outro fator volta ao redator) | — |
| VT-134 | s25 | Mud Creek · 2017 | confirmada | VP-A-103, VP-A-293, VP-B-065, VP-B-066; conferencia-midia.json candidatos[13] — a miniatura do USGS de 27/05/2017 (CM13, aviso_de_ano false: do ano do fato): sem aviso e sem crédito, certo | — |
| VT-135 | s25 | OUTSIDE THE CENSUS DISTRICT | confirmada | VP-A-104 | — |
| VT-136 | s27 | Mud Creek · 2017 | confirmada | VP-A-107; conferencia-midia.json candidatos[42] — adendo da Sala cumprido: só o ano, nunca drone; lugar_na_origem: Mud Creek landslide (título da página do USGS; etiquetas Big Sur, California); o rótulo não passa dele; aviso_de_ano false: sem aviso, certo | — |
| VT-137 | s27 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-138 | s27 | Vertical exaggeration 1.5× | confirmada | regência (_condicao: só com o relevo exagerado) — condicional: só vai se o mapista exagerar o relevo, com o fator que usar (outro fator volta ao redator) | — |
| VT-139 | s28 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-140 | s28 | Mud Creek | confirmada | VP-A-293 | — |
| VT-141 | s28 | Paul’s Slide | confirmada | VP-A-109, VP-A-281 | — |
| VT-142 | s28 | Regent’s Slide | confirmada | VP-A-110 | — |
| VT-143 | s28 | Source: Caltrans, 2026 | confirmada | VP-A-111 | — |
| VT-144 | s29 | Illustrative · vertical scale exaggerated | confirmada | regência (desenho declarado) — o perfil da encosta, exagero vertical declarado | — |
| VT-145 | s29 | Highway 1 | confirmada | VP-A-080 — a estrada no perfil | — |
| VT-146 | s29 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-147 | s30 | John Pfeiffer’s cabin | confirmada | VP-B-067, VP-B-070; conferencia-midia.json candidatos[19] — VP-B-070 (NÃO CONFERIDO) citado só para dizer o que fica fora da tela; lugar_na_origem: John Pfeiffer's cabin located in Pfeiffer Big Sur State Park, Monterey County, California (descrição); 'This c; o rótulo não passa dele | — |
| VT-148 | s30 | Photo from 2023 | confirmada | VP-B-068; conferencia-midia.json candidatos[19] — data_na_origem 7-11-2023 (o campo Date; a descrição: 'P; aviso_de_ano true | — |
| VT-149 | s30 | Marty Aligata / Wikimedia Commons · CC BY-SA 4.0 | confirmada | VP-B-069, VP-B-077; conferencia-midia.json candidatos[19], [43] — igual ao credito_na_tela, antes do parêntese | — |
| VT-150 | s30 | Coast redwood, Big Sur | confirmada | VP-B-075; conferencia-midia.json candidatos[43] — lugar_na_origem: Coast Redwood near Redwood Deck Loop, Pfeiffer Big Sur State Park, CA (título e descrição do arquivo); o rótulo não passa dele | — |
| VT-151 | s30 | Photo from 2023 | confirmada | VP-B-076; conferencia-midia.json candidatos[43] — data_na_origem 2023-07-13 (o título diz 'July 2023'); aviso_de_ano true | — |
| VT-152 | s30 | Tanbark: bark used to make tannic acid. | confirmada | VP-A-118 — a forma do conserto VP-A-118 | — |
| VT-153 | s30 | Lime kilns, Big Sur | confirmada | VP-B-071; conferencia-midia.json candidatos[20] — RG-10 cumprido: sem nome de parque; lugar_na_origem: Four Lime Kilns, 63025 Highway 1, Big Sur, Monterey County, CA (HABS CA-2734); o rótulo não passa dele | — |
| VT-154 | s30 | Photo from 2002 | confirmada | VP-B-072, VP-B-073; conferencia-midia.json candidatos[20] — data_na_origem 2002 (HABS; na procedência); aviso_de_ano true | — |
| VT-155 | s31 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-156 | s31 | Illustrative | confirmada | regência (desenho declarado) — o desenho é declarado como ilustrativo | — |
| VT-157 | s31 | NEARLY 1,000 PEOPLE · 1880s · MONTEREY COUNTY PLAN (1986) | confirmada | VP-A-119 | — |
| VT-158 | s31 | BIG SUR COAST · 1986 PLAN | confirmada | VP-A-268 — a dupla de s15 | — |
| VT-159 | s31 | CENSUS DISTRICT | confirmada | VP-A-035, VP-A-262 — o contorno do distrito | — |
| VT-160 | s31 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-122 | — |
| VT-161 | s31 | PFEIFFER BIG SUR STATE PARK | confirmada | VP-A-120, VP-A-273 | — |
| VT-162 | s31 | Bixby Creek | confirmada | VP-A-121 | — |
| VT-163 | s31 | Photo from 2023 | confirmada | VP-B-041; conferencia-midia.json candidatos[44] — data_na_origem 2023-06-24 (EXIF DateTimeOriginal 2023-0; aviso_de_ano true | — |
| VT-164 | s31 | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | confirmada | conferencia-midia.json candidatos[44] — igual ao credito_na_tela, antes do parêntese | — |
| VT-165 | s32 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-166 | s32 | Vertical exaggeration 1.5× | confirmada | regência (_condicao: só com o relevo exagerado) — condicional: só vai se o mapista exagerar o relevo, com o fator que usar (outro fator volta ao redator) | — |
| VT-167 | s32 | LANDINGS | confirmada | VP-A-285 | — |
| VT-168 | s32 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-285 — os desembarcadouros são os do plano | — |
| VT-169 | s33 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-170 | s33 | Illustrative | confirmada | VP-A-302 | — |
| VT-171 | s33 | “THE HAZARDOUS ROAD” · CLOSED PART OF THE YEAR | confirmada | VP-A-126 — literal: the hazardous road that had to be closed part of the year (cópia, l. 4293–4294); só the hazardous road entre aspas | — |
| VT-172 | s33 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-127 | — |
| VT-173 | s33 | Monterey | confirmada | VP-A-292 | — |
| VT-174 | s33 | Big Sur Valley | confirmada | VP-A-292 | — |
| VT-175 | s33 | Photo from 2023 | confirmada | VP-B-076; conferencia-midia.json candidatos[22] — data_na_origem 2023-07-13 (o título diz 'July 2023'); aviso_de_ano true | — |
| VT-176 | s33 | Marty Aligata / Wikimedia Commons · CC BY-SA 4.0 | confirmada | VP-B-077; conferencia-midia.json candidatos[22] — igual ao credito_na_tela, antes do parêntese | — |
| VT-177 | s33 | (nada novo enquanto a peça da inscrição está no ar: 336,79–341,29 s, embaixo à direita, caixa x 2029–3626, y 1457–1746) | nada a checar | — — trecho declarado sem texto | — |
| VT-178 | s33 | 1880s | confirmada | VP-A-021 — os anos 1880 do plano | — |
| VT-179 | s33 | 1919 · FHWA | confirmada | VP-A-128, VP-A-337 — FHWA: Construction on Highway One began in 1919 | — |
| VT-180 | s33 | NEARLY TWO DECADES | confirmada | VP-A-133 — aritmética: 1919 → 1937 = 18 anos | — |
| VT-181 | s33 | Source: Federal Highway Administration | corrigir | VP-A-129 — crédito de dado sem ano (identidade §7). A página da FHWA diz Updated: 06/27/2017 (cópia local fhwa-back0403-2026-11-02.htm) | Source: Federal Highway Administration, 2017 |
| VT-182 | s33 | Vertical exaggeration 1.5× | confirmada | regência (_condicao: só com o relevo exagerado) — condicional: só vai se o mapista exagerar o relevo, com o fator que usar (outro fator volta ao redator) | — |
| VT-183 | s35 | Bixby Creek Bridge | confirmada | VP-B-078, VP-A-135; conferencia-midia.json candidatos[24] — lugar_na_origem: Bixby Bridge, Big Sur (título; descrição: 'Drone shot of Bixby Bridge'); o rótulo não passa dele | — |
| VT-184 | s35 | Photo from 2025 | confirmada | VP-B-079; conferencia-midia.json candidatos[24] — data_na_origem 2025-02-28; aviso_de_ano true | — |
| VT-185 | s35 | Jav72 / Wikimedia Commons · CC BY-SA 4.0 | confirmada | VP-B-080; conferencia-midia.json candidatos[24] — igual ao credito_na_tela, antes do parêntese | — |
| VT-186 | s36 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-187 | s36 | San Quentin · 3 TEMPORARY CAMPS | confirmada | VP-A-286, VP-A-136, VP-A-323 — FHWA: San Quentin Prison set up three temporary prison camps | — |
| VT-188 | s36 | 35 CENTS A DAY | confirmada | VP-A-136, VP-A-140 — FHWA: Inmates were paid 35 cents per day | — |
| VT-189 | s36 | Source: Federal Highway Administration | corrigir | VP-A-137 — idem VT-181 | Source: Federal Highway Administration, 2017 |
| VT-190 | s37 | Bixby Creek Bridge, 1931–32 | confirmada | VP-B-081, VP-B-082, VP-B-120, VP-B-083; conferencia-midia.json candidatos[27] — a obra, 24/08/1931–15/10/1932 (VP-B-120); sem aviso (aviso_de_ano false); lugar_na_origem: Bixby Canyon Bridge under construction on California Coast Highway 1 (descrição do arquivo, a legenda da NOAA); o rótulo não passa dele; aviso_de_ano false: sem aviso, certo | — |
| VT-191 | s37 | Illustrative · vertical scale exaggerated | confirmada | regência (desenho declarado) — o perfil da encosta, exagero vertical declarado | — |
| VT-192 | s37 | Highway 1 | confirmada | VP-A-080 — a estrada no perfil | — |
| VT-193 | s37 | “ENRAGED” · MONTEREY COUNTY PLAN (1986) | confirmada | VP-A-141 — literal: Many of the original settlers were enraged by the devastation (cópia, l. 4298) | — |
| VT-194 | s37 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-142 | — |
| VT-195 | s38 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-196 | s38 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-197 | s38 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-198 | s38 | 1880s · 1919 | confirmada | VP-A-021, VP-A-128 — as marcas de antes | — |
| VT-199 | s38 | 1934 | confirmada | VP-A-311 — literal do plano: initiated by John Pfeiffer in 1934 when he sold 706 acres to the State (cópia, l. 4307–4308); a marca só aparece com a pílula que a prende ao plano. O ano em si continua NÃO CONFERIDO (VP-A-311: 1933 na Wikipedia) e está com o Lucas | — |
| VT-200 | s38 | 1934 | confirmada | VP-A-143, VP-A-311 — idem VT-199 (caminho sem a caça); literal do plano (cópia, l. 4307); a marca só existe com a pílula; o ano em si continua NÃO CONFERIDO (VP-A-311), com o Lucas | — |
| VT-201 | s38 | PFEIFFER BIG SUR STATE PARK | confirmada | VP-A-143 | — |
| VT-202 | s38 | PFEIFFER BIG SUR STATE PARK | confirmada | VP-A-143, VP-A-273 — idem VT-201 | — |
| VT-203 | s38 | 1934 · SOLD TO THE STATE · MONTEREY COUNTY PLAN (1986) | confirmada | VP-A-143, VP-A-312, VP-A-146 — literal do plano (cópia, l. 4307); sem a área (VP-A-146, NÃO CONFERIDO, fora da tela); VP-A-146 (NÃO CONFERIDO) citado só para dizer o que fica fora da tela | — |
| VT-204 | s38 | 1934 · SOLD TO THE STATE · MONTEREY COUNTY PLAN (1986) | confirmada | VP-A-143, VP-A-312 — idem VT-203; literal do plano | — |
| VT-205 | s38 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-145 | — |
| VT-206 | s38 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-145 | — |
| VT-207 | s38 | Pfeiffer Big Sur State Park | nada a checar | — — condicional da caça: só se o lugar_na_origem do clipe nomear o parque; volta a este laudo com o veredito | — |
| VT-208 | s38 | FINISHED JUNE 27, 1937 | confirmada | VP-A-144 — o plano: On June 27,1937, the highway was completed (cópia, l. 4301) | — |
| VT-209 | s38 | 1937 | confirmada | VP-A-144 — June 27, 1937 | — |
| VT-210 | s38 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-145 | — |
| VT-211 | s39 | BIG SUR COAST LAND USE PLAN | confirmada | VP-B-038, VP-B-003 | — |
| VT-212 | s39 | …the highway was completed at a cost of approximately $8,000,000. A way of life had ended, and a new era began for the beautiful country. | confirmada | VP-B-005, VP-B-007, VP-B-008 — literal (cópia, l. 4302–4304); o for. do OCR é defeito de leitura, a folha escreve for the beautiful country. | — |
| VT-213 | s39 | approximately $8,000,000 | confirmada | VP-B-005 — literal | — |
| VT-214 | s39 | ≈ $8 MILLION · MONTEREY COUNTY PLAN (1986) | confirmada | VP-A-149, VP-B-006, VP-A-338 — o plano: approximately $8,000,000 (nominal de 1937) | — |
| VT-215 | s39 | In the dollars of the time. | confirmada | VP-A-151 | — |
| VT-216 | s39 | A way of life had ended, and a new era began | confirmada | VP-B-007, VP-B-008 — literal; o grifo cobre só o que a voz diz | — |
| VT-217 | s39 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-150 | — |
| VT-218 | s40 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-219 | s40 | SAN FRANCISCO | confirmada | VP-A-296 | — |
| VT-220 | s40 | LOS ANGELES | confirmada | VP-A-296 — a região de LA | — |
| VT-221 | s40 | LESS THAN A DAY’S DRIVE · 1986 PLAN | confirmada | VP-A-153 — o plano: are less than a day's drive from Big Sur | — |
| VT-222 | s40 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-154 | — |
| VT-223 | s41 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-224 | s41 | 1880s · 1919 · 1937 · 1965 | confirmada | VP-A-021, VP-A-128, VP-A-144, VP-A-155 — as marcas, sem rótulo em 1934 | — |
| VT-225 | s41 | FIRST STATE SCENIC HIGHWAY · 1965 | confirmada | VP-A-155, VP-A-335 — designação nº 1, 07/06/1965 (planilha da Caltrans, out. 2025) | — |
| VT-226 | s41 | PEAK SUMMER: 95% RECREATIONAL TRIPS · 1986 PLAN | confirmada | VP-A-156 — o plano: Recreational traffic is estimated to comprise 95% of all trips during the peak summer months | — |
| VT-227 | s41 | Source: Caltrans; Monterey County, Big Sur Coast Land Use Plan, 1986 | corrigir | VP-A-157 — a parte da Caltrans sem ano (identidade §7). A designação de 1965 sai da planilha da Caltrans de outubro de 2025 (scenic_highway_data_oct-2025.xlsx; VP-A-155, VP-A-335) | Source: Caltrans, 2025; Monterey County, Big Sur Coast Land Use Plan, 1986 |
| VT-228 | s42 | Coast near Big Sur, California | confirmada | VP-B-058; conferencia-midia.json candidatos[45] — lugar_na_origem: central California's coastline near Big Sur, California (legenda); BIG SUR, CALIFORNIA, US (local da página); ; o rótulo não passa dele; aviso_de_ano false: sem aviso, certo | — |
| VT-229 | s42 | Big Sur coast, California | confirmada | conferencia-midia.json candidatos[46] — lugar_na_origem: Central Californian coastline looking south, with the McWay Rocks (with arch) in the foreground, and McWay Cov; o rótulo não passa dele | — |
| VT-230 | s42 | Photo from 2013 | confirmada | conferencia-midia.json candidatos[46] — data_na_origem May 2013 (no título do arquivo; o EXIF n; aviso_de_ano true | — |
| VT-231 | s42 | David Iliff / Wikimedia Commons · CC BY-SA 3.0 | confirmada | conferencia-midia.json candidatos[46] — igual ao credito_na_tela, antes do parêntese | — |
| VT-232 | s42 | (o rótulo do clipe da caça, pelo lugar_na_origem do veredito dele) | nada a checar | — — texto ainda não escrito: sai do lugar_na_origem do veredito do clipe da caça; volta a este laudo quando escrito | — |
| VT-233 | s43 | BIG SUR COAST LAND USE PLAN | confirmada | VP-B-003, VP-B-010, VP-B-009 — a capa recriada sem ano (o 1986 do OCR é a cota do acervo, VP-B-009) | — |
| VT-234 | s43 | LOCAL COASTAL PROGRAM · MONTEREY COUNTY, CALIFORNIA | confirmada | VP-B-010, VP-B-012, VP-B-013 — literal da capa, sem ano; VP-B-012 (NÃO CONFERIDO) citado só para dizer o que fica fora da tela | — |
| VT-235 | s43 | 1880s · 1919 · 1937 · 1965 · 1986 | confirmada | VP-A-164, VP-B-013 | — |
| VT-236 | s43 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-166 | — |
| VT-237 | s43 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-238 | s43 | ≈ HALF THE COASTAL ZONE PUBLIC · 1986 | confirmada | VP-A-165, VP-B-021 — o plano: Approximately half of the Big Sur coastal zone is in public ownership | — |
| VT-239 | s43 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-166 | — |
| VT-240 | s43 | Public land, 2025 | confirmada | VP-A-269, VP-A-306 — condicional (_condicao): o PAD-US 4.1 é de março de 2025 (VP-A-306); só vai se a camada de hoje acender sob a pílula de 1986 | — |
| VT-241 | s44 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-242 | s44 | Vertical exaggeration 1.5× | confirmada | regência s44 (1.5× declarado) — o fator que a regência declara; o qc-visual confere no render | — |
| VT-243 | s44 | Illustrative · vertical exaggeration 1.5× | confirmada | VP-A-169; regência s44 (1.5× declarado) — o fator que a regência declara; o qc-visual confere no render | — |
| VT-244 | s44 | “to prohibit all future public or private development visible from Highway 1” | confirmada | VP-B-020, R141 — literal, 12 palavras, letra a letra: to prohibit all future public or private development visible from Highway 1 (cópia, l. 1023–1024, §3.2.1; também l. 764–765). O original continua and major public viewing areas (the critical viewshed): a citação parcial não muda o sentido | — |
| VT-245 | s44 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-170, VP-A-174 | — |
| VT-246 | s44 | “THE CRITICAL VIEWSHED” · MONTEREY COUNTY PLAN (1986) | confirmada | VP-A-168 — literal: (the critical viewshed) (cópia, l. 1025) | — |
| VT-247 | s44 | Bixby Creek Turnout | confirmada | VP-A-172, VP-A-283, VP-A-284 | — |
| VT-248 | s44 | Bixby Creek Bridge | confirmada | VP-B-040; conferencia-midia.json candidatos[47] — lugar_na_origem: Bixby Bridge (descrição do arquivo: 'Bixby Bridge'; categoria Bixby Creek Bridge); o rótulo não passa dele | — |
| VT-249 | s44 | Photo from 2023 | confirmada | VP-B-041; conferencia-midia.json candidatos[47] — data_na_origem 2023-06-24 (EXIF DateTimeOriginal 2023-0; aviso_de_ano true | — |
| VT-250 | s44 | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | confirmada | VP-B-042; conferencia-midia.json candidatos[47] — igual ao credito_na_tela, antes do parêntese | — |
| VT-251 | s44 | BIG SUR COAST LAND USE PLAN | confirmada | VP-B-038 | — |
| VT-252 | s44 | Visibility will be considered in terms of normal, unaided vision in any direction for any amount of time at any season. | confirmada | VP-B-018, R145 — literal (cópia, p. 13, §3.2.3 B.1), com a pontuação da fonte | — |
| VT-253 | s44 | normal, unaided vision in any direction for any amount of time at any season | confirmada | VP-A-173 — literal | — |
| VT-254 | s44 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-174 | — |
| VT-255 | s46 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-256 | s46 | Illustrative | confirmada | regência (desenho declarado) — o desenho é declarado como ilustrativo | — |
| VT-257 | s46 | Illustrative · vertical exaggeration 1.5× | confirmada | regência (_condicao: só com o relevo exagerado) — condicional: só vai se o mapista exagerar o relevo, com o fator que usar (outro fator volta ao redator) | — |
| VT-258 | s46 | Illustrative · vertical scale exaggerated | confirmada | regência (desenho declarado) — o perfil da encosta, exagero vertical declarado | — |
| VT-259 | s47 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-260 | s47 | ≈ 2.9 MILLION A YEAR · 1986 | confirmada | VP-A-176, R156 — o plano: an estimated 2.9 million people visit the Big Sur coast annually | — |
| VT-261 | s47 | EXPECTED TO DOUBLE IN 20–25 YEARS | confirmada | VP-A-177 — o plano: demand is predicted to double over the next 20 to 25 years | — |
| VT-262 | s47 | 85% FOR RECREATION, VISITORS & OTHER PRIORITY USES · 1986 PLAN | confirmada | VP-A-178 | — |
| VT-263 | s47 | NEW HOMES · 1986 PLAN | confirmada | VP-A-179 — o plano: not more than 15 percent of highway capacity at buildout | — |
| VT-264 | s47 | NEW HOMES ≤ 15% · 1986 PLAN | confirmada | VP-A-179 — o plano: not more than 15 percent of highway capacity at buildout | — |
| VT-265 | s47 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-180 | — |
| VT-266 | s48 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-267 | s48 | Illustrative | confirmada | regência (desenho declarado) — o desenho é declarado como ilustrativo | — |
| VT-268 | s48 | 1880s · 1919 · 1937 · 1965 · 1986 | confirmada | VP-A-021, VP-A-128, VP-A-144, VP-A-155, VP-A-164 — as marcas de s43 | — |
| VT-269 | s48 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-270 | s48 | Illustrative | confirmada | regência (desenho declarado) — o desenho é declarado como ilustrativo | — |
| VT-271 | s48 | (o rótulo do clipe da caça, pelo lugar_na_origem do veredito dele) | nada a checar | — — texto ainda não escrito: sai do lugar_na_origem do veredito do clipe da caça; volta a este laudo quando escrito | — |
| VT-272 | s48 | Regent’s Slide, Highway 1 | confirmada | VP-B-084, VP-B-085; conferencia-midia.json candidatos[28] — lugar_na_origem: Regent's Slide (alt: 'Photo showing extent of Regent's Slide', na 'Regent's Slide Media Gallery' da Caltrans D; o rótulo não passa dele; aviso_de_ano false: sem aviso, certo | — |
| VT-273 | s48 | Caltrans | confirmada | VP-B-086, VP-B-123; conferencia-midia.json candidatos[28] — igual ao credito_na_tela, antes do parêntese | — |
| VT-274 | s49 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-275 | s49 | Paul’s Slide · JAN. 14, 2023 | confirmada | VP-A-189 — AP: JAN. com dia | — |
| VT-276 | s49 | Paul’s Slide · JAN. 14, 2023 – JUNE 23, 2024 | confirmada | VP-A-189, VP-B-118 — AP: JUNE por extenso | — |
| VT-277 | s49 | Regent’s Slide · FEB. 9, 2024 | confirmada | VP-A-190, VP-B-119 — AP: FEB. com dia | — |
| VT-278 | s49 | 6 MI | confirmada | VP-A-281 — PM 21.7 a 27.8 = 6.1 mi pela estrada | — |
| VT-279 | s49 | 2023 · 2024 · 2025 · 2026 | confirmada | VP-A-189, VP-A-190, VP-A-199 — os anos dos deslizamentos e da reabertura | — |
| VT-280 | s49 | ALMOST THREE YEARS | confirmada | VP-A-191 — Caltrans: for the first time in almost three years (R174). Observação: de 14/01/2023 a 14/01/2026 são 1,096 dias, três anos exatos; o almost é da Caltrans e da voz | — |
| VT-281 | s49 | Source: Caltrans, 2026 | confirmada | VP-A-192 | — |
| VT-282 | s50 | Illustrative · vertical scale exaggerated | confirmada | regência (desenho declarado) — o perfil da encosta, exagero vertical declarado | — |
| VT-283 | s50 | Highway 1 | confirmada | VP-A-080 — a estrada no perfil | — |
| VT-284 | s50 | 4,600+ STEEL BARS · UP TO 60 FT · CALTRANS | confirmada | VP-A-198, R175 — Caltrans: Over 4,600 steel bars, up to 60 feet long | — |
| VT-285 | s50 | Source: Caltrans, 2026 | confirmada | VP-A-200 | — |
| VT-286 | s50 | Highway 1, Big Sur | confirmada | VP-B-087, VP-B-088; conferencia-midia.json candidatos[29] — lugar_na_origem: Highway 1 in Big Sur (alt: 'Photo showing first cars driving through the newly re-opened highway 1 in Big Sur'; o rótulo não passa dele; aviso_de_ano false: sem aviso, certo | — |
| VT-287 | s50 | REOPENED JAN. 14, 2026 · NOON | confirmada | VP-A-199, VP-B-027, VP-B-088, VP-B-026 — Caltrans: starting at noon on Wednesday, January 14 | — |
| VT-288 | s50 | Caltrans | confirmada | VP-B-089, VP-B-092; conferencia-midia.json candidatos[29], [30] — igual ao credito_na_tela, antes do parêntese | — |
| VT-289 | s50 | Regent’s Slide, Highway 1 | confirmada | VP-B-090, VP-B-091; conferencia-midia.json candidatos[30] — lugar_na_origem: Highway 1 next to Regent's Slide (alt: 'Photo showing reopened Highway 1 next to Regent's slide.'), na 'Regent; o rótulo não passa dele; aviso_de_ano false: sem aviso, certo | — |
| VT-290 | s51 | Highway 1 to Reopen Today at Regent’s Slide · January 14, 2026 | confirmada | VP-B-037, VP-B-023 — literal: título e data da nota (cópia local) | — |
| VT-291 | s51 | …this estimated $82.6 million project… / Over the next months, travelers on Highway 1 at Regent’s Slide and other locations may encounter occasional full closures while crews remove debris following seasonal weather events and intermittent delays due to ongoing construction. | confirmada | VP-B-022, VP-B-024 — literal, os dois trechos (cópia local) | — |
| VT-292 | s51 | $82.6 million | confirmada | VP-B-022 — literal na cópia da Caltrans: this estimated $82.6 million project | — |
| VT-293 | s51 | $82.6 MILLION (EST.) · CALTRANS | confirmada | VP-A-206, R178 | — |
| VT-294 | s51 | may encounter occasional full closures while crews remove debris | confirmada | VP-B-025 — literal, com o may | — |
| VT-295 | s51 | Source: Caltrans, Jan. 14, 2026 | confirmada | VP-A-207, VP-B-023 — a nota da Caltrans é de 14/01/2026 | — |
| VT-296 | s52 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-297 | s52 | Nepenthe | confirmada | VP-A-294, VP-A-326 | — |
| VT-298 | s52 | KIRK GAFILL | confirmada | VP-A-307, R180 | — |
| VT-299 | s52 | Owner, Nepenthe (2026) | confirmada | VP-A-308, VP-A-209, VP-A-309 — Caltrans, 15/05/2026: said Kirk Gafill, owner of Nepenthe restaurant in Big Sur; VP-A-309 (NÃO CONFERIDO) citado só para dizer o que fica fora da tela | — |
| VT-300 | s52 | Tourism on Big Sur is Surging Since Reopening of Highway 1 · May 15, 2026 | confirmada | VP-B-028, VP-B-037 — literal: título e data (cópia local) | — |
| VT-301 | s52 | “The robust and sustained increase in visitation is allowing our business, employees, and larger community to recover rapidly from the three-year closure,” said Kirk Gafill, owner of Nepenthe restaurant in Big Sur. | confirmada | VP-B-029, R181, VP-B-039 — literal, a frase inteira com as aspas da fonte (cópia local) | — |
| VT-302 | s52 | allowing our business, employees, and larger community to recover | confirmada | VP-B-030 — literal | — |
| VT-303 | s52 | Source: Caltrans, May 15, 2026 | confirmada | VP-A-210 | — |
| VT-304 | s53 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-305 | s53 | Vertical exaggeration 1.5× | confirmada | regência (_condicao: só com o relevo exagerado) — condicional: só vai se o mapista exagerar o relevo, com o fator que usar (outro fator volta ao redator) | — |
| VT-306 | s53 | TIMBER FIRE · STARTED AUG. 8, 2026 · 25,352 ACRES | confirmada | VP-A-295, VP-A-212, VP-A-217 — VOLÁTIL, relido hoje: Date and time started 08/08/2026, 8:35 PM; 25,352 Acres (CAL FIRE) | — |
| VT-307 | s53 | Source: CAL FIRE incident page, updated Oct. 20, 2026 · Los Padres National Forest fire | confirmada | VP-A-214 — relido hoje: Last updated 10/20/2026, 8:41 PM; Not a CAL FIRE Incident; jurisdição: Los Padres National Forest | — |
| VT-308 | s53 | Timber Fire, near Big Sur | confirmada | VP-B-093, VP-B-094, VP-B-095; conferencia-midia.json candidatos[34] — lugar_na_origem: near Big Sur, California (legenda); BIG SUR, CALIFORNIA, US (local da página); a serra exata não é dada; o rótulo não passa dele; aviso_de_ano false: sem aviso, certo | — |
| VT-309 | s53 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-310 | s53 | 661 STRUCTURES THREATENED · LISTED BY CAL FIRE | confirmada | VP-A-213, VP-A-219 — VOLÁTIL, relido hoje: a atualização de 09/15/2026 6:23 AM diz 661 structures remain listed as threatened; o quadro-resumo que lemos hoje não mostra o campo | — |
| VT-311 | s53 | 97% CONTAINED · OCT. 14, 2026 | confirmada | VP-A-220 — VOLÁTIL, relido hoje: a atualização de 10/14/2026 5:33 PM diz The Timber Fire remains at 25,352 acres with 97% containment; o resumo de hoje: 97% Contained | — |
| VT-312 | s53 | Source: CAL FIRE incident page, updated Oct. 20, 2026 · Los Padres National Forest fire | confirmada | VP-A-214 — idem VT-307 | — |
| VT-313 | s53 | CLOSED · AUGUST 2026 · CALTRANS | confirmada | VP-A-221, VP-A-278 — Caltrans, 11/08/2026: PM 37.5 a 47; AP: AUGUST por extenso, sem dia | — |
| VT-314 | s53 | PLASKETT FIRE | confirmada | VP-A-279 | — |
| VT-315 | s53 | Source: Caltrans, 2026 | confirmada | VP-A-223 | — |
| VT-316 | s53 | JANUARY 2023 · JAN. 14, 2026 · AUGUST 2026 | confirmada | VP-A-113, VP-A-199, VP-A-216 — 14/01/2023 (Paul's Slide), 14/01/2026 (a reabertura), agosto de 2026 (o fogo) | — |
| VT-317 | s53 | MONTHS | confirmada | VP-A-199, VP-A-216 — de 14/01/2026 a 08/08/2026: 206 dias, uns 7 meses (only months after) | — |
| VT-318 | s53 | NOV. 4, 2026: OPEN · ONE-WAY AT WORK ZONES · CALTRANS | confirmada | VP-A-222, VP-A-228, VP-A-229 — VOLÁTIL, relido hoje (As of Thursday, November 5, 2026, at 12:16 AM): nenhum fechamento total no condado de Monterey e três mãos únicas (Mud Creek; Point Sur Lighthouse a 8.4 mi ao norte de Big Sur; Rocky Creek Bridge). NOV. 4, 2026 continua verdadeiro (a leitura de 04/11, 10:22 PM, VP-A-222); hoje se poderia escrever NOV. 5, 2026 | — |
| VT-319 | s55 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-320 | s55 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-321 | s55 | (o rótulo do clipe da caça, pelo lugar_na_origem do veredito dele) | nada a checar | — — texto ainda não escrito: sai do lugar_na_origem do veredito do clipe da caça; volta a este laudo quando escrito | — |
| VT-322 | s55 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-323 | s55 | 887 HOMES · 2020 CENSUS | confirmada | VP-A-230, R020, R201, R202 — constante publicada; a voz diz a little under 900 | — |
| VT-324 | s55 | 345 EMPTY ON CENSUS DAY · 2020 CENSUS | confirmada | VP-A-231 — 345 ÷ 887 = 38.9 % | — |
| VT-325 | s55 | Source: U.S. Census Bureau, 2020 Census | confirmada | VP-A-232 | — |
| VT-326 | s55 | ACS QUESTIONNAIRE · 2024 | confirmada | VP-B-035, VP-B-097; conferencia-midia.json candidatos[35], [36] — lugar_na_origem: None; o rótulo não passa dele | — |
| VT-327 | s55 | The American Community Survey is conducted by the U.S. Census Bureau. | confirmada | VP-B-032, VP-B-033; conferencia-midia.json candidatos[35] — literal no texto do PDF local quest24.pdf, p. 1 (Your response is required by law. The American Community Survey is conducted by the U.S. Census Bureau.); ongoing e year after year não estão no formulário | — |
| VT-328 | s55 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-329 | s55 | SEASONAL, RECREATIONAL OR OCCASIONAL USE · ACS 2020–2024 | confirmada | VP-A-237 | — |
| VT-330 | s55 | Source: U.S. Census Bureau, American Community Survey, 2020–2024 | confirmada | VP-A-240 | — |
| VT-331 | s55 | CENSUS DISTRICT ≈ 93% (WIDE MARGINS) | confirmada | VP-A-238, VP-A-340 — 93.0 %, margem de 90 % ±11.3 pontos | — |
| VT-332 | s55 | CALIFORNIA | confirmada | VP-A-239 — a barra da Califórnia | — |
| VT-333 | s55 | CALIFORNIA ≈ 33% | confirmada | VP-A-239 — 32.6 % → ≈ 33% | — |
| VT-334 | s55 | ACS 2020–2024 | confirmada | VP-A-239 | — |
| VT-335 | s57 | Highway 1, Big Sur | confirmada | VP-B-046; conferencia-midia.json candidatos[48] — lugar_na_origem: Highway 1 in Big Sur, California, clings to the coastal cliffs over much of its distance. This view looking so; o rótulo não passa dele | — |
| VT-336 | s57 | Photo from 2012 | confirmada | VP-B-047; conferencia-midia.json candidatos[48] — data_na_origem 2012-07-29 (DateTimeOriginal 2012-07-29 ; aviso_de_ano true | — |
| VT-337 | s57 | Fred Moore / Wikimedia Commons · CC BY 2.0 | confirmada | VP-B-048; conferencia-midia.json candidatos[48] — igual ao credito_na_tela, antes do parêntese | — |
| VT-338 | s57 | Tourism on Big Sur is Surging Since Reopening of Highway 1 · May 15, 2026 | confirmada | VP-B-028 | — |
| VT-339 | s57 | …tourists are returning in considerable numbers from Carmel to Cambria—fueling a revitalized regional economy in the months after Caltrans fully reopened the iconic corridor. | confirmada | VP-B-031, R211 — literal (cópia local) | — |
| VT-340 | s57 | tourists are returning in considerable numbers | confirmada | VP-A-249 — literal | — |
| VT-341 | s57 | Source: Caltrans, May 15, 2026 | confirmada | VP-A-250 | — |
| VT-342 | s57 | View from Hurricane Point, Big Sur | confirmada | VP-A-284; conferencia-midia.json candidatos[51] — adendo da Sala cumprido: de 698.767 a 702.4 s, dentro de 698.6–702.433 (a 1ª frase); não passa de Hurricane Point Vista Point, Big Sur; lugar_na_origem: Hurricane Point Vista Point, Big Sur, looking toward Bixby Creek Bridge (descrição do arquivo); o rótulo não passa dele | — |
| VT-343 | s57 | Photo from 2025 | confirmada | conferencia-midia.json candidatos[51] — data_na_origem 2025-03-11; aviso_de_ano true | — |
| VT-344 | s57 | Joe Mabel / Wikimedia Commons · CC BY-SA 4.0 | confirmada | conferencia-midia.json candidatos[51] — igual ao credito_na_tela, antes do parêntese | — |
| VT-345 | s57 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-346 | s57 | (o rótulo do clipe da caça, pelo lugar_na_origem do veredito dele) | nada a checar | — — texto ainda não escrito: sai do lugar_na_origem do veredito do clipe da caça; volta a este laudo quando escrito | — |
| VT-347 | s57 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-348 | s58 | PEOPLE | nada a checar | — — título de painel, sem afirmação | — |
| VT-349 | s58 | HOMES | nada a checar | — — título de painel, sem afirmação | — |
| VT-350 | s58 | VISITORS | nada a checar | — — título de painel, sem afirmação | — |
| VT-351 | s58 | As empty as Wyoming | confirmada | VP-A-252 — 5.86 (distrito) × 5.94 (Wyoming) | — |
| VT-352 | s58 | Kept by people who live somewhere else | confirmada | R220, R221 — as casas de uso ocasional: quem as usa mora noutro lugar (residência habitual) | — |
| VT-353 | s58 | 85% · 1986 PLAN | confirmada | VP-A-178 — o mesmo 85 % de s47 | — |
| VT-354 | s58 | Source: U.S. Census Bureau, 2020 Census and American Community Survey, 2020–2024 | confirmada | VP-A-232, VP-A-240 — a régua (2020 Census) e as casas (2020 Census; ACS 2020–2024) | — |
| VT-355 | s58 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-180 | — |
| VT-356 | s59 | Bixby Creek Bridge | confirmada | VP-B-040; conferencia-midia.json candidatos[49] — lugar_na_origem: Bixby Bridge (descrição do arquivo: 'Bixby Bridge'; categoria Bixby Creek Bridge); o rótulo não passa dele | — |
| VT-357 | s59 | Photo from 2023 | confirmada | VP-B-041; conferencia-midia.json candidatos[49] — data_na_origem 2023-06-24 (EXIF DateTimeOriginal 2023-0; aviso_de_ano true | — |
| VT-358 | s59 | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | confirmada | VP-B-042; conferencia-midia.json candidatos[49] — igual ao credito_na_tela, antes do parêntese | — |
| VT-359 | s59 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-360 | s59 | Illustrative | confirmada | regência (desenho declarado) — o desenho é declarado como ilustrativo | — |
| VT-361 | s59 | Illustrative · vertical exaggeration 1.5× | confirmada | regência (_condicao: só com o relevo exagerado) — condicional: só vai se o mapista exagerar o relevo, com o fator que usar (outro fator volta ao redator) | — |
| VT-362 | s59 | Bixby Creek Turnout · NAMED IN THE 1986 PLAN | confirmada | VP-A-254, VP-B-019 — o plano nomeia Bixby Creek Turnout na definição do critical viewshed (§3.2.2) | — |
| VT-363 | s59 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-255 | — |
| VT-364 | s59 | Bixby Creek | confirmada | VP-A-121 — a mesma forma de s31 | — |
| VT-365 | s60 | Big Sur, California | confirmada | VP-B-078; conferencia-midia.json candidatos[50] — lugar_na_origem: Bixby Bridge, Big Sur (título; descrição: 'Drone shot of Bixby Bridge'); o rótulo não passa dele | — |
| VT-366 | s60 | Photo from 2025 | confirmada | VP-B-079; conferencia-midia.json candidatos[50] — data_na_origem 2025-02-28; aviso_de_ano true | — |
| VT-367 | s60 | Jav72 / Wikimedia Commons · CC BY-SA 4.0 | confirmada | VP-B-080; conferencia-midia.json candidatos[50] — igual ao credito_na_tela, antes do parêntese | — |
| VT-368 | s60 | © MapTiler © OpenStreetMap contributors | confirmada | VP-A-303; identidade §6 — crédito da base e das camadas do OSM | — |
| VT-369 | s60 | Illustrative | confirmada | regência (desenho declarado) — o desenho é declarado como ilustrativo | — |
| VT-370 | s60 | Vertical exaggeration 1.5× | confirmada | regência (_condicao: só com o relevo exagerado) — condicional: só vai se o mapista exagerar o relevo, com o fator que usar (outro fator volta ao redator) | — |
| VT-371 | s60 | LOS ANGELES | confirmada | VP-A-296 — a região de LA | — |
| VT-372 | s60 | SAN FRANCISCO | confirmada | VP-A-296 — a região de SF | — |
| VT-373 | s60 | 17 MILLION+ | confirmada | VP-A-256 — a mesma forma de s02 | — |
| VT-374 | s60 | 1,474 · CENSUS DISTRICT · 2020 | confirmada | VP-A-257 — a mesma forma de s03 | — |
| VT-375 | s60 | Source: U.S. Census Bureau, 2020 Census and 2025 estimates | confirmada | VP-A-258 | — |
| VT-376 | s60 | (nenhum texto, pílula, rótulo ou luz no quadro; a 80 px ou mais da caixa do comentário, x 212–1903, y 965–1746) | nada a checar | — — trecho declarado sem texto | — |
| VT-377 | s60 | Would you live on this coast? / Answer in the comments | nada a checar | — — pergunta, sem fato (marca/cta.md §7); Answer in the comments é fixo da peça | — |
| VT-378 | s60 | (as três contas sem palavra; o último quadro sem texto) | nada a checar | — — trecho declarado sem texto | — |
| VT-379 | s60 | Image(s) and/or video used under license from Shutterstock.com | confirmada | identidade §7; midia §3.4 — a linha literal da identidade §7; condicional: só se algum clipe da caça vier da Shutterstock | — |
| VT-380 | s52 | KIRK GAFILL · Owner, Nepenthe (2026) · vínculo Nepenthe restaurant, Big Sur · cargo de 2026-05 | confirmada | VP-A-209, VP-A-307, VP-A-308; midia/big-sur/fontes/web/caltrans-d5-news-5-15-2026-2-lida-2026-11-02.htm (https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-5-15-2026-2) — nome, cargo e vínculo saem da mesma frase da nota de 15/05/2026 (literal na cópia local: said Kirk Gafill, owner of Nepenthe restaurant in Big Sur.); sem retrato; VP-A-309 (general manager) fora | — |
| VT-381 | s02 | 17 MILLION+ ← 17,474,482 (2025) (July 1, 2025) | confirmada | VP-A-001 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-382 | s03 | 17 MILLION+ ← 17,474,482 (2025) (July 1, 2025) | confirmada | VP-A-001 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-383 | s03 | 1,474 · CENSUS DISTRICT · 2020 ← 1,474 (April 1, 2020) | confirmada | VP-A-008, VP-A-047, VP-A-257 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-384 | s07 | NEARLY 1,000 PEOPLE · 1880s · MONTEREY COUNTY PLAN (1986) ← nearly 1000 (1880s (dito em 1986)) | confirmada | VP-A-021, VP-A-119 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-385 | s15 | 1,474 · CENSUS DISTRICT · 2020 ← 1,474 (April 1, 2020) | confirmada | VP-A-008, VP-A-047, VP-A-257 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-386 | s15 | 251.4 SQ MI OF LAND ← 251.36 sq mi (ALAND) (2020) | confirmada | VP-A-048 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-387 | s15 | ≈ 6 PEOPLE / SQ MI · 2020 ← 5.86 (2020) | confirmada | VP-A-049 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-388 | s15 | WYOMING 5.9 · CALIFORNIA 253.7 / SQ MI · 2020 ← 5.94 e 253.7 (2020) | confirmada | VP-A-056 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-389 | s15 | MORE THAN 40× ← 43.3× (2020) | confirmada | VP-A-065 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-390 | s15 | MORE THAN 70 MI · MONTEREY COUNTY PLAN (1986) ← over seventy miles (o plano); 72.3–73.7 mi pela estrada (1986) | confirmada | VP-A-066, VP-A-070, VP-A-276 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-391 | s19 | Cone Peak · ≈ 5,200 FT ← 5,200 ft (o plano); 5,140 ft no ponto do GNIS (USGS 3DEP) (1986) | confirmada | VP-A-072 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-392 | s19 | ≈ 5,200 FT ← 5,200 ft (1986) | confirmada | VP-A-072 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-393 | s21 | NEARLY 50 STREAMS ← Nearly fifty separate streams (1986) | confirmada | VP-A-085 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-394 | s24 | ≈ HALF FEDERAL LAND · MONTEREY COUNTY PLAN (1986) ← Approximately half (75,000 de 150,000 acres) (1986) | confirmada | VP-A-093 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-395 | s25 | Mud Creek · 2017 ← 2017-05-20 (2017) | confirmada | VP-A-103, VP-A-105, VP-A-107 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-396 | s27 | Mud Creek · 2017 ← 2017-05-20 (2017) | confirmada | VP-A-103, VP-A-105, VP-A-107 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-397 | s31 | NEARLY 1,000 PEOPLE · 1880s · MONTEREY COUNTY PLAN (1986) ← nearly 1000 (1880s (dito em 1986)) | confirmada | VP-A-021, VP-A-119 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-398 | s33 | 1919 · FHWA ← 1919 (1919) | confirmada | VP-A-128 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-399 | s33 | NEARLY TWO DECADES ← 18 anos (1919–1937) (1919–1937) | confirmada | VP-A-131, VP-A-133 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-400 | s36 | San Quentin · 3 TEMPORARY CAMPS ← 3 (1919–1937) | confirmada | VP-A-136, VP-A-139 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-401 | s36 | 35 CENTS A DAY ← 35 cents per day (nominal) (1919–1937) | confirmada | VP-A-136, VP-A-140 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-402 | s38 | 1934 · SOLD TO THE STATE · MONTEREY COUNTY PLAN (1986) ← 1934 (o plano); 1933 na Wikipedia e no folheto da State Parks (cópia de terceiro, que não vale) (1934 (dito em 1986)) | confirmada | VP-A-143, VP-A-312 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-403 | s38 | 1934 · SOLD TO THE STATE · MONTEREY COUNTY PLAN (1986) ← 1934 (o plano); 1933 na Wikipedia e no folheto da State Parks (cópia de terceiro, que não vale) (1934 (dito em 1986)) | confirmada | VP-A-143, VP-A-312 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-404 | s38 | FINISHED JUNE 27, 1937 ← June 27, 1937 (1937) | confirmada | VP-A-144 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-405 | s39 | ≈ $8 MILLION · MONTEREY COUNTY PLAN (1986) ← approximately $8,000,000 (nominal, 1937) (1937) | confirmada | VP-A-149, VP-B-005 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-406 | s40 | LESS THAN A DAY’S DRIVE · 1986 PLAN ← less than a day’s drive (1986) | confirmada | VP-A-153 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-407 | s41 | FIRST STATE SCENIC HIGHWAY · 1965 ← designação nº 1, June 7, 1965 (1965) | confirmada | VP-A-155, VP-A-335 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-408 | s41 | PEAK SUMMER: 95% RECREATIONAL TRIPS · 1986 PLAN ← 95% (1980s) | confirmada | VP-A-156 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-409 | s43 | ≈ HALF THE COASTAL ZONE PUBLIC · 1986 ← Approximately half (1986) | confirmada | VP-A-165, VP-B-021 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-410 | s47 | ≈ 2.9 MILLION A YEAR · 1986 ← an estimated 2.9 million (1986) | confirmada | VP-A-176 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-411 | s47 | EXPECTED TO DOUBLE IN 20–25 YEARS ← 20 to 25 years (1986) | confirmada | VP-A-177 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-412 | s47 | 85% FOR RECREATION, VISITORS & OTHER PRIORITY USES · 1986 PLAN ← 85 percent (1986) | confirmada | VP-A-178 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-413 | s47 | NEW HOMES ≤ 15% · 1986 PLAN ← not more than 15 percent (1986) | confirmada | VP-A-179 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-414 | s49 | Paul’s Slide · JAN. 14, 2023 ← January 14, 2023 (2023) | confirmada | VP-A-189 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-415 | s49 | Paul’s Slide · JAN. 14, 2023 – JUNE 23, 2024 ← January 14, 2023 – June 23, 2024 (2023–2024) | confirmada | VP-A-189, VP-B-118 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-416 | s49 | Regent’s Slide · FEB. 9, 2024 ← February 9, 2024 (2024) | confirmada | VP-A-190, VP-B-119 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-417 | s49 | 6 MI ← 6.1 mi pela estrada (PM 21.7 a 27.8) (2024) | confirmada | VP-A-196, VP-A-281 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-418 | s49 | ALMOST THREE YEARS ← 1,096 dias (2023–2026) | confirmada | VP-A-191, VP-A-197 — o valor_exato diz 1,096 dias, que são três anos exatos; o almost é da Caltrans (R174), atribuído pelo crédito | — |
| VT-419 | s50 | 4,600+ STEEL BARS · UP TO 60 FT · CALTRANS ← Over 4,600 steel bars, up to 60 feet long (Jan. 14, 2026) | confirmada | VP-A-198 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-420 | s50 | REOPENED JAN. 14, 2026 · NOON ← January 14, 2026, at noon (Jan. 14, 2026) | confirmada | VP-A-199, VP-B-027 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-421 | s51 | $82.6 MILLION (EST.) · CALTRANS ← $82.6 million (estimated) (Jan. 14, 2026) | confirmada | VP-A-206 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-422 | s53 | TIMBER FIRE · STARTED AUG. 8, 2026 · 25,352 ACRES ← started 08/08/2026 8:35 PM; 25,352 acres (Oct. 20, 2026 (última atualização; relida em 05/11/2026)) | confirmada | VP-A-212, VP-A-216, VP-A-217 — VOLÁTIL; relido hoje: igual | — |
| VT-423 | s53 | 661 STRUCTURES THREATENED · LISTED BY CAL FIRE ← 661 (Oct. 20, 2026 (relida em 05/11/2026)) | confirmada | VP-A-213, VP-A-219 — VOLÁTIL; relido hoje: a atualização de 15/09 diz 661 remain listed as threatened; a data do campo (Oct. 20) é a da página, não a do número | — |
| VT-424 | s53 | 97% CONTAINED · OCT. 14, 2026 ← 97% (desde 14/10; ainda 97% em 20/10) (Oct. 14, 2026) | confirmada | VP-A-220 — VOLÁTIL; relido hoje: a atualização de 14/10 está na página | — |
| VT-425 | s53 | CLOSED · AUGUST 2026 · CALTRANS ← PM 37.5 a 47, desde 11/08/2026 14h (August 2026) | confirmada | VP-A-221 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-426 | s53 | NOV. 4, 2026: OPEN · ONE-WAY AT WORK ZONES · CALTRANS ← 0 fechamentos totais; 3 mãos únicas (Nov. 4, 2026 (a Sala relê antes de publicar)) | confirmada | VP-A-222, VP-A-228, VP-A-229 — VOLÁTIL; relido hoje (Nov. 5, 12:16 AM): continua verdadeiro | — |
| VT-427 | s55 | 887 HOMES · 2020 CENSUS ← 887 (April 1, 2020) | confirmada | VP-A-230 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-428 | s55 | 345 EMPTY ON CENSUS DAY · 2020 CENSUS ← 345 (38.9%) (April 1, 2020) | confirmada | VP-A-231 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-429 | s55 | SEASONAL, RECREATIONAL OR OCCASIONAL USE · ACS 2020–2024 ← 265 de 285 vagas (2020–2024) | confirmada | VP-A-237 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-430 | s55 | CENSUS DISTRICT ≈ 93% (WIDE MARGINS) ← 93.0% (margem de 90%: ±11.3 pontos) (2020–2024) | confirmada | VP-A-238 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-431 | s55 | CALIFORNIA ≈ 33% ← 32.6% (±0.8) (2020–2024) | confirmada | VP-A-239 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-432 | s58 | 85% · 1986 PLAN ← 85 percent (1986) | confirmada | VP-A-178 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-433 | s59 | Bixby Creek Turnout · NAMED IN THE 1986 PLAN ← o plano de 1986 nomeia o mirante (1986) | confirmada | VP-A-254 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-434 | s60 | 17 MILLION+ ← 17,474,482 (2025) (July 1, 2025) | confirmada | VP-A-001 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-435 | s60 | 1,474 · CENSUS DISTRICT · 2020 ← 1,474 (April 1, 2020) | confirmada | VP-A-008, VP-A-047, VP-A-257 — o valor exato e a data casam com a forma de tela e com o id | — |
| VT-436 | s01 | Photo from 2023 (s01-bixby-bridge-aerial-2023-06-24-mavic-of-steel-commons) | confirmada | conferencia-midia.json candidatos[0]; VP-B-041 — data_na_origem 2023-06-24 (EXIF DateTimeOriginal 2023-06-24 ; aviso_de_ano true; sha256 12ff1597… igual ao julgado | — |
| VT-437 | s02 | Photo from 2023 (s01-bixby-bridge-aerial-2023-06-24-mavic-of-steel-commons) | confirmada | conferencia-midia.json candidatos[37]; VP-B-041 — data_na_origem 2023-06-24 (EXIF DateTimeOriginal 2023-06-24 ; aviso_de_ano true; sha256 12ff1597… igual ao julgado | — |
| VT-438 | s05 | Photo from 2013 (s05-big-sur-coast-mcway-cove-sunny-2013-05-diliff-commons) | confirmada | conferencia-midia.json candidatos[2]; VP-B-044 — data_na_origem May 2013 (no título do arquivo; o EXIF na pág; aviso_de_ano true; sha256 b399bc52… igual ao julgado | — |
| VT-439 | s09 | Photo from 2024 (s48-s28-regents-slide-highway-1-closed-aerial-2024-02-10-caltrans) | confirmada | conferencia-midia.json candidatos[38]; VP-B-085; veredito novo de s09, lote 3 — data_na_origem EXIF 2024-02-12 13:43; o nome do arquivo diz ; aviso_de_ano true; sha256 0762aa51… igual ao julgado | — |
| VT-440 | s09 | Photo from 2017 (s26-mud-creek-landslide-air-photo-2017-05-27-usgs) | confirmada | conferencia-midia.json candidatos[39]; VP-B-065; veredito novo de s09, lote 3 (2ª opção) — data_na_origem May 27, 2017; aviso_de_ano true; sha256 0a38ca1b… igual ao julgado | — |
| VT-441 | s12 | Photo from 2012 (s12-highway-1-big-sur-cliffs-2012-07-29-fred-moore-commons) | confirmada | conferencia-midia.json candidatos[4]; VP-B-047 — data_na_origem 2012-07-29; aviso_de_ano true; sha256 d9ebc3bf… igual ao julgado | — |
| VT-442 | s18 | Photo from 2013 (s05-big-sur-coast-mcway-cove-sunny-2013-05-diliff-commons) | confirmada | conferencia-midia.json candidatos[40]; VP-B-044 — data_na_origem May 2013 (no título do arquivo; o EXIF na pág; aviso_de_ano true; sha256 b399bc52… igual ao julgado | — |
| VT-443 | s19 | Photo from 2022 (s19-cone-peak-from-vicente-flat-trail-2022-11-12-natecation-commons) | confirmada | conferencia-midia.json candidatos[9]; VP-B-056 — data_na_origem 2022-11-12; aviso_de_ano true; sha256 77be8deb… igual ao julgado | — |
| VT-444 | s21 | Photo from 2012 (s12-highway-1-big-sur-cliffs-2012-07-29-fred-moore-commons) | confirmada | conferencia-midia.json candidatos[41]; VP-B-047 — data_na_origem 2012-07-29 (DateTimeOriginal 2012-07-29 11:58; aviso_de_ano true; sha256 d9ebc3bf… igual ao julgado | — |
| VT-445 | s25 | Photo from 2012 (s25-ventana-wilderness-bottchers-gap-2012-06-21-s-rae-commons) | confirmada | conferencia-midia.json candidatos[12]; VP-B-062 — data_na_origem 2012-06-21; aviso_de_ano true; sha256 10319897… igual ao julgado | — |
| VT-446 | s30 | Photo from 2023 (s30-john-pfeiffer-homestead-cabin-2023-07-11-aligata-commons) | confirmada | conferencia-midia.json candidatos[19]; VP-B-068 — data_na_origem 7-11-2023 (o campo Date; a descrição: 'Photog; aviso_de_ano true; sha256 6b670c13… igual ao julgado | — |
| VT-447 | s30 | Photo from 2023 (s33-pfeiffer-big-sur-sp-coast-redwood-2023-07-13-aligata-commons) | confirmada | conferencia-midia.json candidatos[43]; VP-B-076 — data_na_origem 2023-07-13 (o título diz 'July 2023'); aviso_de_ano true; sha256 86d7cc28… igual ao julgado | — |
| VT-448 | s30 | Photo from 2002 (s30-limekiln-kilns-1-2-habs-ca-2734-10-2002-rosenthal) | confirmada | conferencia-midia.json candidatos[20]; VP-B-072 — data_na_origem 2002 (HABS; na procedência); aviso_de_ano true; sha256 9536b673… igual ao julgado | — |
| VT-449 | s31 | Photo from 2023 (s01-bixby-bridge-aerial-2023-06-24-mavic-of-steel-commons) | confirmada | conferencia-midia.json candidatos[44]; VP-B-041 — data_na_origem 2023-06-24 (EXIF DateTimeOriginal 2023-06-24 ; aviso_de_ano true; sha256 12ff1597… igual ao julgado | — |
| VT-450 | s33 | Photo from 2023 (s33-pfeiffer-big-sur-sp-coast-redwood-2023-07-13-aligata-commons) | confirmada | conferencia-midia.json candidatos[22]; VP-B-076 — data_na_origem 2023-07-13 (o título diz 'July 2023'); aviso_de_ano true; sha256 86d7cc28… igual ao julgado | — |
| VT-451 | s35 | Photo from 2025 (s35-bixby-bridge-side-arch-canyon-drone-2025-02-28-jav72-commons) | confirmada | conferencia-midia.json candidatos[24]; VP-B-079 — data_na_origem 2025-02-28; aviso_de_ano true; sha256 2e9283ab… igual ao julgado | — |
| VT-452 | s42 | Photo from 2013 (s05-big-sur-coast-mcway-cove-sunny-2013-05-diliff-commons) | confirmada | conferencia-midia.json candidatos[46]; VP-B-044 — data_na_origem May 2013 (no título do arquivo; o EXIF na pág; aviso_de_ano true; sha256 b399bc52… igual ao julgado | — |
| VT-453 | s44 | Photo from 2023 (s01-bixby-bridge-aerial-2023-06-24-mavic-of-steel-commons) | confirmada | conferencia-midia.json candidatos[47]; VP-B-041 — data_na_origem 2023-06-24 (EXIF DateTimeOriginal 2023-06-24 ; aviso_de_ano true; sha256 12ff1597… igual ao julgado | — |
| VT-454 | s57 | Photo from 2012 (s12-highway-1-big-sur-cliffs-2012-07-29-fred-moore-commons) | confirmada | conferencia-midia.json candidatos[48]; VP-B-047 — data_na_origem 2012-07-29 (DateTimeOriginal 2012-07-29 11:58; aviso_de_ano true; sha256 d9ebc3bf… igual ao julgado | — |
| VT-455 | s57 | Photo from 2025 (s57-big-sur-coast-from-hurricane-point-2025-03-11-joe-mabel-commons) | confirmada | conferencia-midia.json candidatos[51]; veredito novo de s57 › beats[2], lote 3 (candidatos[51]) — data_na_origem 2025-03-11; aviso_de_ano true; sha256 a93bb924… igual ao julgado | — |
| VT-456 | s59 | Photo from 2023 (s01-bixby-bridge-aerial-2023-06-24-mavic-of-steel-commons) | confirmada | conferencia-midia.json candidatos[49]; VP-B-041 — data_na_origem 2023-06-24 (EXIF DateTimeOriginal 2023-06-24 ; aviso_de_ano true; sha256 12ff1597… igual ao julgado | — |
| VT-457 | s60 | Photo from 2025 (s35-bixby-bridge-side-arch-canyon-drone-2025-02-28-jav72-commons) | confirmada | conferencia-midia.json candidatos[50]; VP-B-079 — data_na_origem 2025-02-28; aviso_de_ano true; sha256 2e9283ab… igual ao julgado | — |
| VT-458 | s04 | os dois quadrados com 6 pontos cada (distrito e Wyoming) | confirmada | VP-A-012, VP-A-013 — 5.86 e 5.94 pessoas por mi² arredondam a 6 pontos | — |
| VT-459 | s15 | A RÉGUA: três quadrados com 6, 6 e ~254 pontos | confirmada | VP-A-049, VP-A-056, VP-A-065 — 5.86, 5.94 e 253.7; razão 43.3, que o MORE THAN 40× cobre | — |
| VT-460 | s11 | as casas na proporção 887 : 345 | confirmada | VP-A-029 — 887 casas, 345 vagas no dia do censo (2020) | — |
| VT-461 | s55 | 887 casas, 345 viram contorno | confirmada | VP-A-230, VP-A-231 — 345 ÷ 887 = 38.9 % | — |
| VT-462 | s55 | o calendário em ≈ 93 % dos 345 contornos (uns 320) | confirmada | VP-A-237, VP-A-238 — 93.0 % da ACS 2020–2024 (265 de 285 vagas) aplicado como proporção aos 345 do censo: é o quase todos da direção. O 320 nunca se escreve (VC-01): a régua da ACS e a do censo são outras | — |
| VT-463 | s55 | as duas barras, ≈ 93 % (distrito) e ≈ 33 % (Califórnia) | confirmada | VP-A-238, VP-A-239, VP-A-340 — 93.0 % (±11.3) e 32.6 % (±0.8); o (WIDE MARGINS) acompanha a do distrito | — |
| VT-464 | s58 | a amostra de 90 quadradinhos na razão 887 : 345 | confirmada | VP-A-230, VP-A-231 — 90 × 345 ÷ 887 = 35.0 vazios; declarada como representação | — |
| VT-465 | s47 | a faixa de 100 células: 85 de usos prioritários e 15 casinhas | confirmada | VP-A-178, VP-A-179 — 85 + 15 = 100; o plano: 85 % reservado e no máximo 15 % às casas novas | — |
| VT-466 | s58 | a faixa de 85 células | confirmada | VP-A-178 — o mesmo 85 % de s47 | — |
| VT-467 | s07, s31, s48 | as ~20 casas de colono em traço | nada a checar | regência s07 › beats[1] — posição e número ilustrativos, com a legenda Illustrative; não representam os quase 1.000 em escala, e nenhum texto diz que representam | — |
| VT-468 | s36 | os 3 pontos dos acampamentos | confirmada | VP-A-136, VP-A-286 — três, como a FHWA (three temporary prison camps); nas fozes do GNIS, declaradas, sem rótulo de lugar | — |
| VT-469 | s32 | os pontos dos 5 desembarcadouros | confirmada | VP-A-285 — os 5 do plano; Rockland declarado na foz do Limekiln Creek; sem nomes na tela | — |
| VT-470 | s49 | a cota 6 MI entre os marcadores de Paul's Slide e Regent's Slide | confirmada | VP-A-281 — PM 21.7 a 27.8 = 6.1 mi pela estrada (5.2 mi em linha reta); a Caltrans: six miles to the south | — |
| VT-471 | s53 | a cota MONTHS entre a reabertura e o fogo, na linha do tempo | confirmada | VP-A-199, VP-A-216 — de 14/01/2026 a 08/08/2026: 206 dias | — |

## Os achados acionáveis (os 4 "corrigir", todos de formato)

Nenhum é erro de fato: o número, o nome e a fonte estão certos. Falta o ano que a identidade §7 põe em todo crédito de dado
("Source: <instituição>, <ano>"), e que a regra CRÉDITOS do próprio `textos-tela.json` repete ("Source: <instituição>, <ano ou data>").

1. **[LEVE] VT-061 (s13)** "Source: U.S. Census Bureau" → **CONSERTO:** `Source: U.S. Census Bureau, 2020 Census`. O distrito e as CCDs
   da cena são a geografia do Censo de 2020 (TIGER 2020, PL 94-171; VP-A-036). → RAIZ: INSTRUÇÃO. O laudo-delta confirmou a forma
   (VP-A-036) sem medir o §7.
2. **[LEVE] VT-181 (s33)** "Source: Federal Highway Administration" → **CONSERTO:** `Source: Federal Highway Administration, 2017`. A
   página da FHWA diz "Updated: 06/27/2017" (cópia local `midia/big-sur/fontes/web/fhwa-back0403-2026-11-02.htm`). → RAIZ: INSTRUÇÃO.
3. **[LEVE] VT-189 (s36)**, o mesmo crédito → **CONSERTO:** `Source: Federal Highway Administration, 2017`. → RAIZ: INSTRUÇÃO.
4. **[LEVE] VT-227 (s41)** "Source: Caltrans; Monterey County, Big Sur Coast Land Use Plan, 1986" → **CONSERTO:**
   `Source: Caltrans, 2025; Monterey County, Big Sur Coast Land Use Plan, 1986`. A designação de 1965 sai da planilha das rodovias
   cênicas da Caltrans de outubro de 2025 (`scenic_highway_data_oct-2025.xlsx`; VP-A-155, VP-A-335). → RAIZ: INSTRUÇÃO.

O conserto não muda tempo, posição nem contagem de textos vivos: cada um é o mesmo crédito com o ano. Se a faixa não couber numa linha, ela
quebra em duas sem encolher (identidade §4.1), como as outras.

## As formas que o redator pediu que eu olhasse

- **s53, a estrada:** "NOV. 4, 2026: OPEN · ONE-WAY AT WORK ZONES · CALTRANS" (VT-318). **Confirmada, volátil.** Relida hoje, ~05:15 de
  Brasília: a Caltrans dá "As of Thursday, November 5, 2026, at 12:16 AM", nenhum fechamento total no condado de Monterey e três mãos únicas
  (Mud Creek, nos dias úteis até 13/11; de Point Sur Lighthouse a 8,4 mi ao norte de Big Sur, até 31/12; Rocky Creek Bridge, até 30/11). O
  "NOV. 4" continua verdadeiro (a leitura de 04/11, 10:22 PM, VP-A-222), e hoje se poderia escrever "NOV. 5". A Sala relê antes de
  publicar e põe a data da releitura. Fonte: https://roads.dot.ca.gov/roadscell.php?roadnumber=1
- **s53, o fogo:** "97% CONTAINED · OCT. 14, 2026" (VT-311). **Confirmada, volátil.** A atualização de 10/14/2026, 5:33 PM: "The Timber
  Fire remains at 25,352 acres with 97% containment". O resumo de hoje: "97% Contained", "25,352 Acres", "Last updated 10/20/2026, 8:41
  PM", "Not a CAL FIRE Incident", jurisdição da Los Padres National Forest. Os 661 (VT-310) estão na atualização de 09/15/2026, 6:23 AM
  ("661 structures remain listed as threatened"); o campo do resumo que o R189 citou não apareceu na minha leitura de hoje (a página
  tem 158 mil caracteres e parte vem por script). O "LISTED BY CAL FIRE" no passado continua certo. Fonte:
  https://www.fire.ca.gov/incidents/2026/8/8/timber-fire
- **s44, a regra em 12 palavras** (VT-244): **confirmada, letra a letra**: "to prohibit all future public or private development visible from
  Highway 1" está no plano duas vezes (cópia, l. 764–765, e l. 1023–1024, §3.2.1 Key Policy). O original continua "and major public
  viewing areas (the critical viewshed)": a citação para antes, sem reticências no fim, como o AP aceita na citação parcial, e não muda
  o sentido. Nenhum "viewpoints" vai entre aspas.
- **s38, o 1934 preso ao plano** (VT-199, VT-200, VT-203, VT-204): **confirmada como atribuição.** O plano diz "initiated by John Pfeiffer
  in 1934 when he sold 706 acres to the State" (cópia, l. 4307–4308). A pílula diz "· MONTEREY COUNTY PLAN (1986)", e a marca "1934" da
  linha do tempo só existe enquanto a pílula está na tela. O ano em si continua NÃO CONFERIDO (VP-A-311: o dono do parque e a Wikipedia
  dizem 1933) e está com o Lucas; a área (706 acres, VP-A-146) não vai à tela.
- **A pergunta do comentário** "Would you live on this coast?" (VT-377): **NADA A CHECAR.** É pergunta, não afirma fato; "this coast" é o
  assunto do vídeo. "Answer in the comments" é fixo da peça.

## Os 6 NÃO CONFERIDOS do laudo-delta: nenhum na tela

| id | o que | na tela | a fonte que faltou |
|---|---|---|---|
| VP-A-146 | os 706 acres que John Pfeiffer vendeu | ausente (s38 sem área) | parks.ca.gov recusou a conexão (ECONNREFUSED, 05/11/2026); só o plano e a Wikipedia |
| VP-A-300 | a ponta norte da estrada no PM 73,9 | ausente | a cópia local dos post miles está truncada (`exceededTransferLimit`) |
| VP-A-309 | "general manager" e a Chamber (Kirk Gafill) | ausente (o card diz "Owner, Nepenthe (2026)") | a página da Chamber recusou robô (HTTP 403, ALTCHA); só resumos de busca |
| VP-A-311 | 1934 contra 1933 | só preso ao plano (acima) | parks.ca.gov (ECONNREFUSED); o folheto só numa cópia de terceiro, que não vale |
| VP-B-012 | o dia da certificação (10 riscado, 9 escrito) | ausente (a capa da s43 sem a linha) | só na imagem da página, que o teto 0 não deixa abrir |
| VP-B-070 | a cabana "built in the late 1800s" | ausente (o rótulo sem ano de construção) | https://www.parks.ca.gov/pages/570/files/PfeifferBigSurSPFinalWebLayout012016.pdf (ECONNREFUSED) |

Nesta tarefa não abri nenhuma URL que recusasse robô: as duas lidas (CAL FIRE e Caltrans) responderam. **Nenhum NÃO CONFERIDO novo.**

## PARA A SALA

1. **Os 4 consertos de crédito** (VT-061, VT-181, VT-189, VT-227) vão ao redator pelo setor. Depois dele, a reconferência é só dessas
   quatro linhas.
2. **O apoio do laudo do roteiro, feito** (a parte 2): R028, R008, R137 e R138 trocados por script (`out/big-sur/_tmp/vf-bs-T/apoio_r2.py`),
   sem mexer em frase nem veredito, com uma nota datada no laudo e uma `nota_apoio` em cada linha. `node ferramentas/portao-fatos.mjs
   big-sur` continua PASSA (exit 0; 231 de 232; RESSALVA).
   - `fatos.laudo.md`: `4ea910e8…` → `196d5335cb0da72d47f0d27348b7b225ee33c355a34f197f2abd86d419250d73`
   - `fatos-tabela.json`: `21944840…` → `ebfb57b64ee28356e0878082cdf3e637a896d03a20ab4782000f15689cf5d9c7`
3. **O mesmo defeito de apoio em mais 7 linhas do laudo do roteiro, que NÃO troquei** (o pedido limitou a troca a quatro): R040, R053,
   R155, R163, R213, R222 e R231 também dão "P (capa)" com o trecho "LOCAL COASTAL PROGRAM 1986 MONTEREY COUNTY, CALIFORNIA", que é a cota
   do acervo, e não o ano do plano (VP-B-009). O 1986 delas é verdadeiro: a frase da voz não muda. O conserto é o mesmo da R008 (fonte "P
   (folha de rosto, PDF p. 3)" e o trecho "the California Coastal commission on April I-Cr, 1986"). Se a Sala quiser, é um despacho
   curto, pelo mesmo script.
4. **O ponto M10 do Ventana Double Cone** em `roteiros/big-sur/qc-roteiro/fatos-medidas.txt` (36.2930, −121.7210) não é o do GNIS. O arquivo
   é saída de script e não se editou: a nota datada do laudo do roteiro o registra.
5. **Os voláteis da s53** (VT-306, VT-307, VT-310, VT-311, VT-312, VT-318): relidos hoje e iguais. A Sala relê os dois antes de publicar.
   A estrada pode passar a "NOV. 5, 2026" ou à data da releitura. Um fechamento total novo torna falsa a frase da voz (VP-A-342).
6. **O "ALMOST THREE YEARS"** (VT-280): é a frase da Caltrans e da voz (R174), atribuída pelo crédito. Observação, sem conserto: de
   14/01/2023 a 14/01/2026 são 1,096 dias, três anos exatos (o `valor_exato` do próprio rótulo).
7. **Os textos que voltam a este laudo quando forem escritos ou ativados:** os 5 da caça (VT-207, VT-232, VT-271, VT-321, VT-346),
   os 10 de relevo condicional (VT-047, VT-099, VT-133, VT-138, VT-166, VT-182, VT-257, VT-305, VT-361, VT-370: só com o fator que o
   mapista usar), o "Public land, 2025" da s43 (VT-240: só se a camada de hoje acender sob a pílula de 1986) e a linha da Shutterstock
   (VT-379).
8. **O 1934 da voz** (VP-A-311) continua com o Lucas. Se ele regravar, a pílula e a marca da s38 mudam com a voz (`_espera_o_lucas`).
9. **Uma cópia fora do git:** o grifo da ACS (VT-327) foi conferido no texto do PDF `out/big-sur/_tmp/pesquisa-documentos/baixado/acs/quest24.pdf`,
   que fica em `_tmp`. A fonte pública é https://www2.census.gov/programs-surveys/acs/methodology/questionnaires/2024/quest24.pdf.

## A lista de nomes

Nenhuma atribuição anônima na tela. Toda pílula e todo crédito nomeiam a instituição (U.S. Census Bureau, Monterey County, Caltrans,
Federal Highway Administration, CAL FIRE, Los Padres National Forest), e a única pessoa citada, Kirk Gafill, vem com nome, cargo e a
fonte datada. **A lista fica vazia, e está declarada.**

## Os 2 padrões mais vistos

1. **O crédito sem ano quando a instituição é a fonte inteira** (Census, FHWA, Caltrans na dupla): o ano some justo quando a fonte é uma
   página sem data no nome. O laudo-delta confirmou as formas pela fonte e não mediu o §7. Quem escreve crédito confere o ano no fim.
2. **O apoio que viaja de linha em linha:** 10 linhas do laudo do roteiro davam "P (capa)", 8 delas com o "1986" da cota do acervo no
   trecho, e o VP-B-125 só nomeou 3 (R008, R137, R138). Quando um apoio se mostra errado, procure todas as linhas que o citam, não só as que o laudo listou.

## Os voláteis que ficam na tela

- O Timber Fire (VT-306, VT-310, VT-311; o crédito VT-307/VT-312): cresce se o fogo voltar a queimar ou a página mudar a área; zera se a
  página trocar a contagem de estruturas ou a contenção. A tela já data a página ("updated Oct. 20, 2026").
- A estrada (VT-318): fica falsa com qualquer fechamento total novo entre Carmel e a divisa; a data na pílula prende a leitura.
- O card de Kirk Gafill (VT-299, "(2026)"): só muda se o restaurante mudar de dono.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- O "In 1934" da voz (VP-A-311): manter ou regravar. A tela segue a voz.
- Onde gravar os laudos de fatos dos próximos vídeos: segui o pedido (`roteiros/big-sur/qc-roteiro/`).

## Os arquivos

- Este laudo: `roteiros/big-sur/qc-roteiro/fatos-tela.laudo.md`.
- Os itens, um por linha da tabela, no formato do laudo-delta: `out/big-sur/_tmp/vf-bs-T/laudo-tela.json`.
- Os scripts: `out/big-sur/_tmp/vf-bs-T/` (`lista.py`, `casar.py`, `literal.py`, `literal_caixa.py`, `escalas.py`, `semano.py`, `acs.py`,
  `laudo_tela.py` com `laudo_tela_dados.py`, e `apoio_r2.py` da parte 2).

NOTA: 9.5/10

VEREDITO: RESSALVA


## Reconferência dos consertos (05/11/2026)

O objeto agora é `out/big-sur/textos-tela.json` sha256 `71405fb4c7b14bb7304763e8e79940a9d8053654e6c91fc0f327b56f4cef4e53` (era `2f5939b2…`). Comparei, por script
(`out/big-sur/_tmp/vf-bs-T/reconf.py`), contra a versão julgada (`out/big-sur/_tmp/redator/v1-entregue/textos-tela.json`, `2f5939b2…`):
mudaram só o `texto` e a `nota` destas 4 linhas, mais `_consertos_do_laudo` e `_entradas_sha256`. Os outros 375 textos, o card, os
`rotulos_dado`, os `_avisos_do_ano`, o `glossario` e o `nao_vai_para_tela` são os mesmos. Cada texto novo é o conserto deste laudo, letra a
letra. As notas novas citam a mesma fonte e o mesmo ano, relidos hoje nas cópias locais: a página da FHWA diz "Updated: 06/27/2017", e a
planilha das rodovias cênicas é a de outubro de 2025.

| id | cena | antes | agora | veredito | fonte |
|---|---|---|---|---|---|
| VT-061 | s13 | Source: U.S. Census Bureau | Source: U.S. Census Bureau, 2020 Census | confirmada | VP-A-036; TIGER 2020 e PL 94-171 (a geografia do Censo de 2020) |
| VT-181 | s33 | Source: Federal Highway Administration | Source: Federal Highway Administration, 2017 | confirmada | VP-A-129; midia/big-sur/fontes/web/fhwa-back0403-2026-11-02.htm (Updated: 06/27/2017) |
| VT-189 | s36 | Source: Federal Highway Administration | Source: Federal Highway Administration, 2017 | confirmada | VP-A-137; midia/big-sur/fontes/web/fhwa-back0403-2026-11-02.htm (Updated: 06/27/2017) |
| VT-227 | s41 | Source: Caltrans; Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Caltrans, 2025; Monterey County, Big Sur Coast Land Use Plan, 1986 | confirmada | VP-A-155, VP-A-157, VP-A-335; scenic_highway_data_oct-2025.xlsx (Caltrans, outubro de 2025) |

COBERTURA final: 471 de 471. A conta nova: 457 confirmadas · 0 corrigir · 0 não conferidas · 14 nada a checar.
O texto de tela foi CHECADO POR INTEIRO e está LIMPO. Os voláteis da s53, os textos condicionais e os da caça seguem como diz a seção PARA A
SALA acima.

NOTA final: 10/10

VEREDITO: PASS
