Gravado em 08/10/2026 pelo Claude central (escrivão), a partir da resposta do verificador-de-fatos (workflow texto-r4-los-angeles)

COBERTURA: 88 de 88. Laudo-delta sobre `out/los-angeles/textos-tela.json` (sha256 `19f98912…d8dd89`), comparado com o objeto do laudo de 07/10 (sha1 `ca26439056cc`, commit `cd765dd`).

**Como a lista foi feita.** Usei um script de leitura no scratchpad, que não gravou nada no canal. Ele compara as duas versões item a item, e a lista sai do diff. Entram:
- 54 T: todo texto novo ou mudado, inclusive nota, tempo, cena ou retirada (T034, T047, T049, T102, T103, T104, T129, T160, T173, T193–T204, T250, T266, T359, T360–T389);
- 21 D: D02, D03, D06, D07, D08, D21, D24, D29, D34, D40–D42, D49, D70, D71, D75, D82–D86;
- 6 N: N31–N36;
- 3 C: C1, C2 e C5 (só metadado);
- 1 V, a frase da voz na s47;
- 3 X, afirmações que só o desenho faz e o diff não pega: X05 e X06 (o eixo do medidor) e X07 (a decisão da s48).

Ficaram fora do denominador, como no laudo de 07/10, as `_regras_de_serie` (S09–S12, novas) e as `_instrucoes_para_a_arte`: só repetem afirmações que já estão na lista.

NOTA: 9.6/10. Todo literal novo bate letra a letra com a página, e os números novos herdam primários já lidos. O índice do Corpo de 1915 resolve o "westerly" repetido da p. 2124. Sobra um único NÃO ACHEI, e ele está na voz, não na tela.

Data-base: 08/10/2026, ~22h (Brasília).

## 1 · Respostas ao pedido

| # | pergunta | veredito |
|---|---|---|
| 1 | Literais T369, T373, T376, T379 e T380 | **Os cinco CONFIRMADOS na imagem ou no impresso.** Sobre o hífen de "deep-water" na p. 2123: na imagem a palavra quebra no fim da linha ("deep- / water"), e isso sozinho é ambíguo. Mas o mesmo relatório imprime "deep-water ships" no meio da linha duas vezes na p. 2122 (OCR l. 680 e l. 692), então o hífen é do composto. As reticências não mudam o sentido. Há uma ressalva LEVE em T379 (achado B3). |
| 2 | Qual braço tem 3.300 e qual tem 2.500 pés | **CONFIRMADA: 3.300 no oeste, 2.500 no leste.** A imagem `arce1888-p2124-arms.png` diz "westerly arm, 2,500 feet long" também para o segundo braço. O "westerly" repetido está no próprio impresso, não é erro do OCR (o erro do OCR é só o "2,100"). Duas fontes resolvem a dúvida: o cálculo de custo do mesmo relatório (p. 2125, "For the easterly arm") e o índice do Corpo de 1915, p. 1550: "a w. st. break'r 3,300' l. and an e. one 2,500' l.; … 88, 2125". |
| 3 | `breakwater, 1912` e os pontos das pílulas | **As três CONFIRMADAS.** O 1912 é a data que o Corpo dá (army.mil, 2026), e o índice de 1915 põe o trecho final no ano fiscal 1911–12. As pílulas caem nos pontos GNIS: San Pedro é o 1661392 (33.735852, −118.292293) e Santa Monica é o 1652792 (34.019454, −118.491191). |
| 4 | Linha de fonte da s07 e o `= 2 TEU` | **CONFIRMADAS.** A p. 2122 é a carta de Mendell de 08/11/1886, impressa no Annual Report de 1888: "a distance of 2 or 3 miles". O BTS 2026, p. A-3 (p. 57 do PDF), diz "Forty-foot Equivalent Units (2 TEUs)". |
| 5 | Leituras em cinza e os tiques | **Os textos estão CONFIRMADOS** (herdam D09, D15 e D41). O eixo é proporcional (y = base − pés × k) em s07, s12 e s14. Em s19, na s29 (ex-s31) e em s49 o desenho ainda vai mudar: X06. |
| 6 | A decisão da s48 | **CONFIRMADA, e a troca pelo TIGER não é melhor.** As 8,66 mi são medida do canal sobre o TIGER 2025 e sobre a camada de limites do condado (esc.num-29, `data_base`: "camada City Boundaries"). A linha do condado ao lado do número não atribui a quem não mediu. |
| 7 | Os tempos da fusão | **CONFIRMADOS.** Cada t0 bate com o beat da regência s29 (16,467 / 21,5 / 24,467 / 27,767 / 32,0). A primeira palavra de cada beat, no `words.json`, cai entre 10 e 30 ms depois do t0. E 433 quadros a 30 fps dão 14,433 s. |
| — | A frase da s47 na voz | **NÃO ACHEI** documento do Corpo de 1912 que declare a obra pronta (V1, achado B1). A substância se sustenta como atribuição; a forma diz mais que a fonte. |

## 2 · A tabela

Chaves das URLs (as do laudo de 07/10 continuam valendo):
- [ARCE] https://www.govinfo.gov/content/pkg/SERIALSET-02631_00_00-002-0001-0002/pdf/SERIALSET-02631_00_00-002-0001-0002.pdf
- [HED41] https://www.govinfo.gov/content/pkg/SERIALSET-03103_00_00-035-0041-0000/pdf/SERIALSET-03103_00_00-035-0041-0000.pdf
- [S29] https://www.govinfo.gov/content/pkg/STATUTE-29/pdf/STATUTE-29-Pg202.pdf
- [CA89] https://clerk.assembly.ca.gov/sites/clerk.assembly.ca.gov/files/archive/Statutes/1889/1889.PDF
- [CA09] https://clerk.assembly.ca.gov/sites/clerk.assembly.ca.gov/files/archive/Statutes/1907_09/1909.pdf
- [R92] https://archive.org/details/annualreportsec20unkngoog
- [R02] https://archive.org/details/micro_IA40386009_0264
- [R05] https://archive.org/details/annualreportswa104deptgoog
- [ARMY] https://www.army.mil/article/294312
- [IDX15] https://archive.org/details/cu31924032521571, pp. 1549–1550 (local: `midia/los-angeles/fontes/mecanismo-verificacao/idx1915-p1550-n1559.jpg`)
- [BTS] https://rosap.ntl.bts.gov/view/dot/88517 (local: `midia/los-angeles/fontes/evento/bts-ppfs-2026-annual-report.pdf`)
- [GNIS] USGS GNIS 1661392 e 1652792, gravados em `out/los-angeles/_media/geo/lugares-gnis-nrhp.json`
- [L21] https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/21
- [LA8] https://pwgis.blob.core.windows.net/smpm/SMPM_AnnexationCity/LA0008.pdf
- [TIG] https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html
- [T20] https://archive.org/details/sim_los-angeles-times_the-los-angeles-times_1906-11-20
- [WIL] https://archive.org/details/freeharborcontes00willrich
- [SD18] https://www.govinfo.gov/content/pkg/SERIALSET-03560_00_00-001-0018-0000/pdf/SERIALSET-03560_00_00-001-0018-0000.pdf
- [MT] https://www.maptiler.com/copyright/
- [REG] `out/los-angeles/regencia.json` e `out/los-angeles/words.json` (locais)
- [HTML] `out/los-angeles/graphics/<cena>.html`, só lido

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| T034 | nota: a linha do condado sai antes de "ABOUT 14 MILES" (s05) | CONFIRMADA | s05.html: `credFonte` 3,385–5,83; `rot14` entra em 8,54 e `rot19` em 12,70 | [HTML] |
| T047 | sandbar (schematic) (s08) | CONFIRMADA | a voz diz "the sandbar at the mouth"; no s07.html a barra é "hachura curta… não afirma forma" | [R92][HTML] |
| T049 | nota: "at low tide" volta em s12 e s32 | CONFIRMADA | a voz s12: "By 1881, the bar had ten feet at low tide"; a voz s32: "twenty-one feet at low tide" | [R92][R02] |
| T102 | o aviso do esboço fica até o corte | CONFIRMADA | o texto não mudou (herda o laudo de 07/10) | [ARCE] |
| T103 | 3,300 FT (braço oeste) | CONFIRMADA | p. 2124: "westerly arm… 3,300 feet"; índice de 1915: "a w. st. break'r 3,300' l." | [ARCE][IDX15] |
| T104 | (retirado) | NADA A CHECAR | não vai à tela; a voz diz o mesmo (N34) | — |
| T129 | Southern Pacific pier | CONFIRMADA | SD18 descreve o píer; sem data, o NÃO ACHEI de 07/10 (A2) deixa de existir | [SD18] |
| T160 | (retirado) | NADA A CHECAR | não vai à tela | — |
| T173 | (retirado) | NADA A CHECAR | não vai à tela | — |
| T193 | APRIL 1, 1905 → s29 em 16,467 | CONFIRMADA | beat 16,467; "On" em 16,477 | [R05][REG] |
| T194 | federal dredge (schematic) → 16,467 | CONFIRMADA | idem | [R05][REG] |
| T195 | dredged channel (schematic) → 21,5 | CONFIRMADA | beat 21,5; "What" em 21,517 | [R02][REG] |
| T196 | Terminal Island → 24,467 | CONFIRMADA | beat 24,467; "the" em 24,487 | [R02][REG] |
| T197 | the old Rattlesnake Island → 24,467 | CONFIRMADA | idem | [R02][REG] |
| T198 | MADE LAND → 24,467 | CONFIRMADA | idem | [R02][REG] |
| T199 | (schematic) → 24,467 | SEM AFIRMAÇÃO | declaração de esquema; o tempo confere | [REG] |
| T200 | 21 FT (1906) → 27,767 | CONFIRMADA | beat 27,767; "By" em 27,777 | [R02][REG] |
| T201 | ABOUT 14 FT (1892) → 27,767 | CONFIRMADA | idem | [HED41][REG] |
| T202 | tide → 32,0 | CONFIRMADA | beat 32,0; "The" em 32,027 | [WIL][REG] |
| T203 | dredge → 32,0 | CONFIRMADA | idem | [R02][REG] |
| T204 | (retirado; duplicava T192) | NADA A CHECAR | T192 cobre o arquivo s29 inteiro | [MT] |
| T250 | official count | CONFIRMADA | Times de 20/11/1906: "213 are for annexation and 203 are against"; o dono continua em T247 e T251 | [T20] |
| T266 | nota: a linha do condado entra com as pílulas (s40) | CONFIRMADA | s40.html: `crFonte` entra em 20,10 e `cotaComp` sai em 20,50, os 0,4 s juntos que o redator mediu; vai ao mapista | [HTML] |
| T359 | Which bay would you pick? | SEM AFIRMAÇÃO | pressupõe as duas baías (G30 e G34, CONFIRMADAS) | — |
| T360 | Wilmington's limits of 1909 (s03) | CONFIRMADA | o polígono é o de 28/08/1909 (LA0008, X01); a s03 o carrega | [LA8][HTML] |
| T361 | idem (s33, até o fim do antigo trecho s34) | CONFIRMADA | inclui o Lote 3 de 04/11/1907 (LA0008) | [LA8] |
| T362 | idem (s37) | CONFIRMADA | o polígono está na s37.html | [LA8][HTML] |
| T363 | idem (s40) | CONFIRMADA | idem | [LA8][HTML] |
| T364 | idem (s42) | CONFIRMADA | idem | [LA8][HTML] |
| T365 | idem (s55, até "voted itself onto the coast") | CONFIRMADA | idem | [LA8][HTML] |
| T366 | sandbar (schematic) (s12) | CONFIRMADA | s12.html: "A vazante, os rasos e a barra são esquema"; a barra é só um ponto | [R92][HTML] |
| T367 | LESS THAN 2 FT (BEFORE 1871), em cinza (s12) | CONFIRMADA | o texto de T048: "less than 2 feet… at mean low tide" | [R92] |
| T368 | at low tide (s12) | CONFIRMADA | a voz diz "ten feet at low tide" | [R92] |
| T369 | can never be made a harbor for deep-water ships | CONFIRMADA | p. 2123, na imagem: "can never be made a harbor for deep-/water ships"; o hífen do composto está no meio da linha na p. 2122 | [ARCE] |
| T370 | 11 FT (1888), em cinza (s14) | CONFIRMADA | p. 2124: "increased… to 11 feet" (D15) | [ARCE] |
| T371 | GAP 1,000 FT | CONFIRMADA | p. 2124: "A gap of 1,000 feet is then left" | [ARCE] |
| T372 | 2,500 FT (braço leste) | CONFIRMADA | na imagem, "2,500 feet long, running north 75 degrees east"; índice de 1915: "an e. one 2,500' l."; p. 2125: "For the easterly arm" | [ARCE][IDX15] |
| T373 | "would go to the wall" | CONFIRMADA | H. Ex. Doc. 41, quem fala é Mr. Hood (l. 3800 a 3902): "…on San Pedro would go to the wall." | [HED41] |
| T374 | Santa Monica (pílula, s21) | CONFIRMADA | GNIS 1652792, Populated Place; grafia G33 | [GNIS] |
| T375 | San Pedro (pílula, s23) | CONFIRMADA | GNIS 1661392, Populated Place; grafia G29 | [GNIS] |
| T376 | the decision of a majority … shall be final as to the location | CONFIRMADA | 29 Stat. 213: "the decision of a majority of which shall be final as to the location of said harbor"; a reticência só tira "of which" | [S29] |
| T377 | 11 FT (1888), em cinza (trecho s32 na s29) | CONFIRMADA | o mesmo de D15 | [ARCE] |
| T378 | at low tide (trecho s32 na s29) | CONFIRMADA | a voz diz "twenty-one feet at low tide"; a fonte diz "mean lower low water" | [R02] |
| T379 | No territory which … forms any part of any … city, shall be annexed | CONFIRMADA, com nota (B3) | Stats. 1889, p. 360, na imagem: "No territory which at the time such petition for such proposed annexation is presented to such legislative body, forms any part of any incorporated town or city, shall be annexed under the provisions of this Act." | [CA89] |
| T380 | each one of which is contiguous to the other | CONFIRMADA | Stats. 1909, ch. 184, p. 282, na imagem: "each one of which is contiguous to the other, or to one of the others" | [CA09] |
| T381 | breakwater, 1912 (s48) | CONFIRMADA | o Corpo: "Completed in 1912 by Army engineers"; índice de 1915: "1911–12. 114,207 t. st. placed in break'r extension, 12, 2753". A linha desenhada é a de hoje (OSM), a mesma obra | [ARMY][IDX15] |
| T382 | 21 FT (1906), em cinza (s49) | CONFIRMADA | "21 feet at mean lower low water" (D41) | [R02] |
| T383 | Source: Annual Report of the Chief of Engineers, U.S. Army, 1888 (s07) | CONFIRMADA | p. 2122 (PDF 754), na carta assinada por G. H. Mendell (p. 2123): "a distance of 2 or 3 miles"; a grafia é a de G25, T088 e T106 | [ARCE] |
| T384 | 10 20 30 40 50 60 (trecho s08) | CONFIRMADA | s07.html: `max 60, cadaNumero 10`, y = base − pés × k | [HTML] |
| T385 | idem (s12) | CONFIRMADA | s12.html: idem | [HTML] |
| T386 | idem (s14) | CONFIRMADA | s14.html: idem; as marcas 18, 20 e 30 na mesma régua | [HTML] |
| T387 | idem (s19) | CONFIRMADA (texto); o desenho fica com X06 | hoje `max 40`, proporcional (k 12); passa a 60 | [HTML] |
| T388 | idem (trecho s32 na s29) | CONFIRMADA (texto); o desenho fica com X06 | o s31.html tem uma régua de 40 pés, sem números | [HTML] |
| T389 | idem (s49) | CONFIRMADA (texto); o desenho fica com X06 | hoje `topo 60, pxPe 15`, proporcional, sem números | [HTML] |
| D02 | ABOUT HALF A MILE (s03), `_volatil` | CONFIRMADA | a marca está no arquivo (A3 aplicado) | [TIG] |
| D03 | ABOUT 9 MILES (TODAY) (s03), `_volatil` | CONFIRMADA | idem | [TIG] |
| D06 | `_fonte_na_tela` do 14 MILES | CONFIRMADA | medida do canal; a linha do condado sai antes (T034) | [L21][HTML] |
| D07 | `_fonte_na_tela` do 19 MILES | CONFIRMADA | idem | [L21][HTML] |
| D08 | a fonte de "2 OR 3 MILES EACH WAY" | CONFIRMADA | OCR l. 694, p. 2122 | [ARCE] |
| D21 | as três cotas | CONFIRMADA; metadado com erro LEVE (B2) | ver T103, T371 e T372 | [ARCE][IDX15] |
| D24 | `_regra` da cota 4,300 FT | CONFIRMADA | é o A4/X02 de 07/10 | [SD18] |
| D29 | `_retirado_r4` | CONFIRMADA | o valor continua certo (29 Stat. 213) e não vai à tela | [S29] |
| D34 | `_retirado_r4` | CONFIRMADA | não vai à tela | [L21] |
| D40 | cena → s29 | CONFIRMADA | o mesmo valor, beat 16,467 | [R05][REG] |
| D41 | cena → s29 | CONFIRMADA | o mesmo valor, beat 27,767 | [R02][REG] |
| D42 | cena → s29 | CONFIRMADA | idem | [HED41][REG] |
| D49 | `_legenda` "official count" | CONFIRMADA | ver T250 | [T20] |
| D70 | ABOUT HALF A MILE (s48), `_volatil` | CONFIRMADA | a marca está no arquivo | [TIG] |
| D71 | ABOUT 9 MILES (TODAY) (s48), `_volatil` | CONFIRMADA | a marca está no arquivo | [TIG][L21] |
| D75 | a fonte de 20 FT / 1 TEU / 40 FT / = 2 TEU | CONFIRMADA | BTS 2026, p. A-3: "each nominally equal to one 20-ft container… Forty-foot Equivalent Units (2 TEUs)" | [BTS] |
| D82 | breakwater, 1912 | CONFIRMADA | ver T381 | [ARMY][IDX15] |
| D83 | LESS THAN 2 FT (BEFORE 1871) | CONFIRMADA | o mesmo de D09 | [R92] |
| D84 | 11 FT (1888) | CONFIRMADA | o mesmo de D15 | [ARCE] |
| D85 | 11 FT (1888) | CONFIRMADA | o mesmo de D15 | [ARCE] |
| D86 | 21 FT (1906), em MLLW | CONFIRMADA | "21 feet at mean lower low water"; 2013 também em MLLW (P13) | [R02] |
| N31 | $2.9 MILLION fora da tela | CONFIRMADA | a voz não diz o número; o teto está impresso na p. 213 | [S29] |
| N32 | MORE THAN 20 MILES fora da tela | CONFIRMADA | a régua fica sem número | [L21] |
| N33 | a data do píer fora da tela | CONFIRMADA | só Willard a dá; a voz s18 diz "In 1891… by the account of Charles Willard" | [WIL] |
| N34 | a legenda do quebra-mar fora da tela | CONFIRMADA | a voz s15: "a breakwater, a wall out in the bay to block the swell" | — |
| N35 | "per the Los Angeles Times…" fora da legenda | CONFIRMADA | o dono continua em T247 e T251 | [T20] |
| N36 | "at low tide" fora de s14 e s49 | CONFIRMADA | a voz não diz a maré nessas cenas; T094 declara "AT HIGH WATER" | [ARCE] |
| C1 | `_palavras_no_nome` | NADA A CHECAR | metadado; decisão do Lucas de 07/10 | — |
| C2 | `_sem_retrato` | NADA A CHECAR | metadado | — |
| C5 | `_sem_retrato` e `_nota` | NADA A CHECAR | metadado | — |
| V1 | voz s47: "in 1912, the Corps of Engineers called the breakwater finished" | **NÃO ACHEI** (B1) | ver abaixo da tabela | [ARMY][IDX15] |
| X05 | o eixo de 0 a 60 com a leitura no tique certo (s07, s12, s14) | CONFIRMADA | código proporcional; o nível da s07 e da s12 começa em 1,5, abaixo dos 2; o 11 fica no 11 | [HTML] |
| X06 | o mesmo eixo em s19, na s29 (ex-s31) e em s49 | CONFIRMADA hoje; o desenho novo vai ao `qc-visual` | hoje as três são proporcionais com outro topo; a régua única pede refazer o desenho. As leituras cinza ficam assim: o "LESS THAN 2" abaixo do tique de 2 pés (como os 1,5 de hoje), o 11 no 11 e o 21 no 21 | [HTML] |
| X07 | s48: a linha do condado junto de "ABOUT 9 MILES (TODAY)" | CONFIRMADA | as 8,66 mi foram medidas pelo canal sobre o TIGER e sobre os limites do condado (esc.num-29, esc-09); a linha não atribui o número a quem não o mediu | [TIG][L21] |

**O que a fonte diz sobre V1:**
- O Corpo de Engenheiros, em 31/07/2026: "Completed in 1912 by Army engineers". É a data dada pelo Corpo, não uma declaração de 1912.
- O índice oficial do Corpo, publicado em 1915, diz que em 1910–11 "completing constr. of break'r. Work on extension commenced" e que em 1911–12 "114,207 t. st. placed in break'r extension, 12, 2753". Não diz "completed" em 1912.
- O relatório de 1912 (app. QQ) não foi aberto: duas buscas não o acharam em texto.

**Resultado: CHECADO POR INTEIRO.**
- 77 CONFIRMADAS. Em uma delas (D21) o metadado precisa de conserto (B2), sem mudar a tela.
- 1 NÃO ACHEI: V1, na voz.
- 2 SEM AFIRMAÇÃO: T199 e T359.
- 8 NADA A CHECAR: T104, T160, T173, T204, C1, C2 e C5 retirados ou só metadado, mais T049 contado como nota.

  (77 + 1 + 2 + 8 = 88.)
- Nenhum DIVERGE e nenhuma REFUTADA.
- Os cinco literais (T369, T373, T376, T379, T380) conferem letra a letra.

**Aritmética interna:**
- 3.300 + 1.000 + 2.500 = 6.800 pés.
- 433 quadros ÷ 30 = 14,433 s, e cada t0 velho mais 14,433 dá o novo, com no máximo 1 ms de arredondamento.
- Os números do eixo, de 10 a 60 a cada 10, fecham com `cadaNumero 10`.
- As leituras 2, 11 e 21 ficam abaixo de 60.

## 3 · O que segura (REPROVADA ou NÃO CONFERIDA)

**Na tela, nada segura.** Nenhum item ficou REPROVADO (DIVERGE ou REFUTADA) nem NÃO CONFERIDO.

**Na voz, um NÃO ACHEI (V1)**, que não é refutação. A regravação é decisão e gasto do Lucas (roupa §6), e o laudo não a faz.

## 4 · Os achados

**B1 · [LEVE] · V1, voz da s47.**
"in 1912, the Corps of Engineers called the breakwater finished" dá a entender uma declaração feita em 1912. O que se tem é o Corpo em 2026 datando a obra em 1912, e o índice de 1915 só registra pedra posta na extensão em 1911–12. A substância se sustenta, e a tela já está na medida da fonte: T309 "1912" e T310 "breakwater completed, per the Corps of Engineers".
- **CONSERTO**, só se o Lucas mandar regravar o parágrafo: `And the Corps of Engineers dates the breakwater's completion to 1912: just over two miles of rock.` A outra saída é abrir o relatório anual de 1912, app. QQ, p. 2753, e procurar a palavra "completed".
- Nota ao lado: "almost three years before the wall was done" (s48) só se mantém se a obra acabou antes de 28/08/1912. O ano fiscal 1911–12 termina em 30/06/1912, o que é coerente, mas não prova a data.
- **RAIZ: PONTUAL.**

**B2 · [LEVE, metadado] · D21 `_r4`, e o relato do redator.**
O texto diz que o OCR lê "westerly" de novo, mas o "westerly" repetido está no impresso; só o "2,100" é erro do OCR. A tela está certa.
- **CONSERTO** do `_r4` de D21: `…a p. 2124 imprime 'westerly' também no 2º braço (erro do impresso); o leste é o de 2,500 pelo rumo N 75° E, pela tabela de custo da p. 2125 ('For the easterly arm') e pelo índice do Corpo de 1915, p. 1550 ('a w. st. break'r 3,300' l. and an e. one 2,500' l.'); o OCR lê '2,100', e a imagem, 2,500`.
- **RAIZ: PONTUAL.**

**B3 · [LEVE, opcional] · T379.**
O trecho para em "shall be annexed" e larga "under the provisions of this Act", a ressalva que limita a proibição àquela lei. Sem ela, a frase parece mais absoluta. A voz ("its annexation law forbade…") e o grifo na página dão o escopo, então não segura nada.
- **CONSERTO**, se o editor quiser: `No territory which … forms any part of any … city, shall be annexed under the provisions of this Act` (13 palavras, passa do teto de 12). Ou manter como está.
- **RAIZ: PONTUAL.**

**Para a arte, já com o redator** (não são erro de fato):
- s40: a linha do condado entra em 20,10, com "ABOUT 15 MILES (1906)" no ar até 20,50.
- s19, s29 e s49: a régua passa a 0–60 com os números.
- O `qc-visual` confere as leituras cinza: o "LESS THAN 2 FT" abaixo do tique de 2 pés, o 11 no 11 e o 21 no 21.

## 5 · A lista de nomes

| quem a voz ou a tela não nomeia | quem é, e o que credencia | onde |
|---|---|---|
| "the Corps of Engineers" (V1, T310) | USACE Los Angeles District, texto de Stephen Baack (army.mil, 31/07/2026) | [ARMY] |

Nenhum anônimo novo na tela.

## 6 · Voláteis

D02, D03, D70 e D71 agora têm `_volatil: true`. Nenhum item novo é volátil: as leituras são datadas, e o "breakwater, 1912" é fixo. A tabela de voláteis de 07/10 (§5) continua valendo.

## 7 · DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- V1: regravar o parágrafo da s47 (gasta crédito e mexe no relógio) ou manter a frase.

## 8 · Como medi, e a rede

**Local:**
- `arce1888-pp2110-2128.txt` e as imagens `arce-p2123-never.png` e `arce1888-p2124-arms.png`;
- `hexdoc41-1892.txt`, l. 3798–3903, com o orador;
- `stat29-p213-214.txt`;
- `st1889-p357-362.ocr.txt` e `st1889-p360-clause.png` (a página impressa 360 = a página 416 do OCR);
- `st1909-p282-top.png`;
- `idx1915-p1550-n1559.jpg`;
- o PDF do BTS, p. 57, lido pelo PyMuPDF;
- `lugares-gnis-nrhp.json`;
- `regencia.json` e `words.json`;
- os HTML s05, s07, s12, s14, s19, s21, s23, s31, s40, s48 e s49, só com grep;
- o fundamento (evt-13, mec-ver-04, esc-09, esc.num-29).

**WebSearch**, duas buscas pelo relatório de 1912, sem achá-lo:
- https://www.dvidshub.net/news/printable/571301
- https://mocat.library.unt.edu/catalog/218-ch1241/citation
- https://homesteadmuseum.blog/2022/08/24/a-magnificent-roadstead-out-in-the-ocean-the-port-of-los-angeles-breakwater-in-scientific-american-magazine-24-august-1912/

Nenhum site recusou leitura. Não usei ferramenta de navegador nem gravei arquivo no canal: as cópias de comparação ficaram na pasta temporária do sistema (`%TEMP%/claude/vf/`), fora do canal.

## 9 · Os 2 padrões mais vistos

1. **Erro do impresso tomado por erro de OCR.** O "westerly" repetido da p. 2124 está no papel, e quem resolveu foi o índice do próprio Corpo. Erro tipográfico de fonte primária se confirma noutra primária, não na leitura da máquina.
2. **Data institucional virando ato datado.** "Completed in 1912" (o Corpo em 2026) virou "in 1912, the Corps called" na voz. A tela acertou a forma ("per the Corps of Engineers"); a voz foi além da fonte.

NOTA: 9.6/10

VEREDITO: PASS
