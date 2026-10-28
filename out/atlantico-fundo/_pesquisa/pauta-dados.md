# Pauta de dados — atlantico-fundo (vídeo 4), passo research

Gerada em 2026-10-28 pelo `pesquisa-dados` a partir do espelho (sha256 `8899a33be862…`): 63 cenas, 94 pedidos. Cada cena em `out/atlantico-fundo/_dados/<cena>.json`. Unidades de tela: pés primeiro, metros entre parênteses; milhas.

## Contagem

| Status | Pedidos |
|---|---|
| atribuido_conferido | 40 |
| conferido_primario | 30 |
| qualitativo_conferido | 13 |
| calculado_conferido | 11 |

## Divergências (para a Sala e o verificador; nenhuma muda a voz)

- **s58** — S&J 2019: 8.526 m (Tabela 1, §2.1.2) × 8.536 m (§3.2) para o número de Stewart & Jamieson 2018
- **s64** — Porto Rico → Meteor: 9.170 km (medido hoje) × 9.195 km (dossiê, F75); a tela ≈ 5,700 MI vale nos dois
- **s74** — NOAA "about 8,400 meters (28,000 feet)" × a voz "about 27,500 feet" (a conversão de 8.400 m): arredondamento, não dado

## Voláteis reconferidos hoje

- **s62** — GEBCO Gazetteer (API da NCEI) sem "Milwaukee" nem "Brownson": 2026-10-28 14:08 e 14:09 (controle "Meteor" às 14:12); totalItems 0 nos dois; o controle devolve 5.
- **s40, s41** — NCEI, evento 1458 (M 7.1, 6.1 m, mortos): 2026-10-28 14:11; idêntico byte a byte à cópia de 26/10.

## Por cena

| Cena | Tela sugerida | Crédito sugerido | Status |
|---|---|---|---|
| s02 | 27,487 FT · MORE THAN 5 MI / ≈ 83 MI · AGUADILLA | Source: Bongiovanni et al., 2021 | calculado_conferido |
| s03 | ≈ 1,500 FT | Source: China & Nepal survey, 2020; Bongiovanni et al., 2021 | calculado_conferido |
| s04 | ≈ 9,500 MI | (medição do canal: sem crédito de fonte; a base do mapa leva o crédito dela) | calculado_conferido |
| s05 | REPORTED · 1964 | Source: Jamieson et al., 2020 | atribuido_conferido |
| s06 | NONE OF THOSE FISH | Source: Jamieson et al., 2020 | atribuido_conferido |
| s07 | DEC. 2018 | Source: Popular Science, 2018 | atribuido_conferido |
| s08 | MILWAUKEE DEEP · 28,675 FT (8,740 M) · GEBCO GAZETTEER (UNTIL AT LEAST 2019) | Source: Stewart & Jamieson, 2019 (Table 1) | atribuido_conferido |
| s09 | MORE THAN 1,000 FT | Source: Stewart & Jamieson, 2019; Bongiovanni et al., 2021 | calculado_conferido |
| s12 | JAN. 27, 1883 · U.S. COAST AND GEODETIC SURVEY | Source: U.S. Coast and Geodetic Survey, 1883 | conferido_primario |
| s14 | W. H. BROWNSON · LIEUTENANT-COMMANDER, U.S. NAVY · IN COMMAND OF THE BLAKE SINCE OCT. 1882 | Source: U.S. Coast and Geodetic Survey, 1883 | conferido_primario |
| s15 | 27,366 FT · 4,561 FATHOMS · 1883 · ≈ 60 MI EAST | Source: U.S. Coast and Geodetic Survey, 1883 | conferido_primario |
| s16 | "BROWN OOZE" · 1883 | Source: U.S. Coast and Geodetic Survey, 1883 | qualitativo_conferido |
| s17 | (sem número; sem o ano) |  | qualitativo_conferido |
| s18 | 23,250 FT · 3,875 FATHOMS | Source: International Hydrographic Review, 1936 | conferido_primario |
| s20 | MORE THAN 28,000 FT · REPORTED, 1939 | Source: U.S. Navy; National Geographic Society, 1939 | atribuido_conferido |
| s21 | 28,680 FT · NEWSPAPERS, 1939 | Source: National Geographic Society bulletin, 1939 | atribuido_conferido |
| s25 | MORE THAN 4 MI · 1964 | Source: Jamieson et al., 2020; Five Deeps Expedition, 2018 | atribuido_conferido |
| s26 | ~24,000 FT · REPORTED 1964, PUBLISHED 1965 / ~200 · ALONG ~1 MI | Source: Jamieson et al., 2020 | atribuido_conferido |
| s27 | SNAILFISH (LIPARIDAE) | Source: Jamieson et al., 2020 | atribuido_conferido |
| s28 | 1970 · THE NET · ~27,460 FT (8,370 M) | Source: NOAA Ocean Exploration | atribuido_conferido |
| s29 | ~8 IN / AUSTRALIAN MUSEUM · PUERTO RICO TRENCH · 27,455 FT (8,370 M) | Source: Australian Museum, 2020 | atribuido_conferido |
| s30 | ~27,460 FT (8,370 M) · THE NET, 1970 · SOURCE: NOAA | Source: NOAA | atribuido_conferido |
| s31 | USGS · 3 CRUISES · 2002–2003 | Source: U.S. Geological Survey | conferido_primario |
| s33 | ~27,300 FT (8,300–8,340 M) · USGS, 2002–2003 | Source: U.S. Geological Survey, 2003 | calculado_conferido |
| s34 | (sem número) |  | qualitativo_conferido |
| s35 | ≈ ¾ IN/YR (20 MM) / −380 mGal · USGS | Source: DeMets et al., 2010 (via Stewart & Jamieson, 2019); USGS, 2006 | atribuido_conferido |
| s36 | MORE THAN +4,000 FT / ~−13,000 FT (+1,300 M / −4,000 M) · USGS | Source: U.S. Geological Survey | atribuido_conferido |
| s37 | (sem número) |  | qualitativo_conferido |
| s38 | (sem número) |  | qualitativo_conferido |
| s39 | (sem número) |  | qualitativo_conferido |
| s40 | 1918 · MONA PASSAGE · NOT IN THE TRENCH / M 7.1 · NOAA NCEI | Source: NOAA NCEI | conferido_primario |
| s41 | UP TO 20 FT (6.1 M) · NOAA NCEI / MORE THAN 100 | Source: NOAA NCEI | atribuido_conferido |
| s44 | (sem número: "far inland") |  | qualitativo_conferido |
| s45 | LESS THAN 80 MI SOUTH OF THE TRENCH / 1381–1391 · U-TH DATING · KILBOURNE ET AL. 2025 / 1492 · COLUMBUS / M 8+ · COMPUTER MODELS | Source: Kilbourne et al., 2025; Wei et al., 2024 | atribuido_conferido |
| s46 | (sem número) | Source: Kilbourne et al., 2025 | atribuido_conferido |
| s47 | SOUTH WALL DIVE · ~19,700 FT (6,000 M) · FAR EAST OF THE DEEPEST POINT · 2015 | Source: NOAA Ocean Exploration, 2015 | conferido_primario |
| s48 | SURVEYED DEC. 18–19, 2018 | Source: Five Deeps Expedition / BGS NGDC | atribuido_conferido |
| s49 | (sem número) |  | qualitativo_conferido |
| s50 | 27,487 ± 16 FT (8,378 ± 5 M) · BONGIOVANNI ET AL. 2021 / 19.712°N 67.311°W / ≈ 83 MI · AGUADILLA / INSIDE THE U.S. EXCLUSIVE ECONOMIC ZONE | Source: Bongiovanni et al., 2021 | calculado_conferido |
| s51 | (sem número; se o redator quiser um: MORE THAN 3 MILLION) | Source: U.S. Census Bureau | conferido_primario |
| s52 | WEDNESDAY, DECEMBER 19, 2018 | Source: Popular Science, 2018 | atribuido_conferido |
| s53 | ≈ 2 H 30 MIN | Source: Five Deeps Expedition, 2018 | atribuido_conferido |
| s54 | "ONE DOWN!" | Source: Popular Science, 2018 | atribuido_conferido |
| s55 | SUB GAUGES · WITHIN ~7 FT OF THE SONAR | Source: Bongiovanni et al., 2021 | conferido_primario |
| s56 | ~28,675 FT (8,740 M) · GEBCO GAZETTEER · UNTIL AT LEAST 2019 / 28,680 FT · NEWSPAPERS, 1939 | Source: Stewart & Jamieson, 2019; National Geographic Society, 1939 | atribuido_conferido |
| s57 | ≈ 1,200 FT | Source: Stewart & Jamieson, 2019; Bongiovanni et al., 2021 | calculado_conferido |
| s58 | THE LIST: 28,675 → 24,442 FT / LYMAN 1954: 28,576 → 27,461 FT / STEWART & JAMIESON 2018: 27,972 → 27,231 FT | Source: Stewart & Jamieson, 2019 (Table 1) | atribuido_conferido |
| s59 | "PROPAGATED UNCORRECTED" | Source: Stewart & Jamieson, 2019 | atribuido_conferido |
| s60 | ~24,442 FT (7,450 M) · A RIDGE · STEWART & JAMIESON 2019 / 27,585 FT (8,408 M) · 2019 ESTIMATE / ≈ 36 MI | Source: Stewart & Jamieson, 2019 | atribuido_conferido |
| s61 | ≈ 100 MI / EXCLUSIVE ECONOMIC ZONE · UP TO ~230 MI (200 NMI) · NOAA | Source: NOAA | calculado_conferido |
| s62 | GEBCO GAZETTEER · SEARCHED OCT. 2026 · "MILWAUKEE": NO RESULT | Source: GEBCO Gazetteer (NOAA NCEI), Oct. 2026 | conferido_primario |
| s63 | (sem número; a forma é do redator) | Source: Bongiovanni et al., 2021 | atribuido_conferido |
| s64 | ≈ 3 IN / YEAR (65–78 MM) / ≈ 5,700 MI | Source: Smalley et al., 2007 (via Stewart & Jamieson, 2019) | atribuido_conferido |
| s65 | (sem número; se quiser: A CHAIN ~220 MI LONG) |  | atribuido_conferido |
| s66 | AUG. 2026 · LANDSAT |  | conferido_primario |
| s67 | 27,651 FT (8,428 M) · MOST PUBLISHED · STEWART & JAMIESON 2019 / 27,116 ± 43 FT (8,265 ± 13 M) · METEOR DEEP · BONGIOVANNI ET AL. 2021 / 371 FT (113 M) SHALLOWER | Source: Bongiovanni et al., 2021; Stewart & Jamieson, 2019 | atribuido_conferido |
| s68 | 60°S · SOUTHERN OCEAN (IHO, 2023) / ~330 MI NORTH OF 60°S | Source: International Hydrographic Organization, 2023 | calculado_conferido |
| s69 | (sem número) | Source: International Hydrographic Organization, 2023 | atribuido_conferido |
| s70 | (sem número) |  | qualitativo_conferido |
| s71 | ~200 · 1964 (REPORTED) → NO SNAILFISH SEEN · 2019 | Source: Jamieson et al., 2020 | atribuido_conferido |
| s72 | COLOR · TEXTURE · SHAPE | Source: Jamieson et al., 2020 | atribuido_conferido |
| s73 | JAMIESON, LINLEY, STEWART, NARGEOLET & VESCOVO · DEEP-SEA RESEARCH I, 2020 | Source: Deep-Sea Research I, 2020 | atribuido_conferido |
| s74 | ~26,900–27,560 FT (8,200–8,400 M) · FISH LIMIT (NOAA ESTIMATE) | Source: NOAA Ocean Exploration | atribuido_conferido |
