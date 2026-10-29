# Laudo-delta · verificador de fatos · o conserto 4 do texto de tela · atlantico-fundo (vídeo 4) · 29/10/2026

Setor Texto e fatos, tarefa `atlantico-fundo-texto-2`, passo `art` (conserto a montante pedido pela qualidade-1), data-base 29/10/2026.

**O que foi julgado:** toda entrada que mudou no `out/atlantico-fundo/textos-tela.json` entre `b034414f…` (o fim da `atlantico-fundo-texto-1`)
e `346782374f116d528a8f025418a8756a740842563c5c3c6626a57b5f46042e78` (o fim desta tarefa), por cobertura, num `verificador-de-fatos` (o do
lote A da texto-1, retomado). As outras seções do arquivo também entraram, porque registram o porquê de cada mudança.

**As duas rodadas:**
- **a 1ª** sobre o conserto 4 do `redator-de-tela` (`39190cfc…`): 55 de 55, RESSALVA, nota 9,2. Na tela, 30 de 30 limpos. Duas REFUTADA fora
  da tela (TC2-041, TC2-052): a frase "o Bongiovanni não dá a ponta do Pacífico".
  - **A frase era do pedido do setor**, não do redator. O setor a conferiu depois no arquivo do Bongiovanni (`midia/atlantico-fundo/fontes/
    02-bongiovanni-2021-gdj3.122.txt`, l. 321, 415–416, 452–457 e 484–488): ele dá as duas pontas da conta de 9.488 mi. O pedido literal da
    Sala ("a mesma da s02") estava certo.
- **a reconferência 1** sobre o conserto 4b (`34678237…`): a fonte da s04 passou a "Source: Bongiovanni et al., 2021", a frase errada saiu de
  `_espera_a_sala` e foi corrigida no `_consertos`.

**O laudo do verificador vai abaixo como ele o gravou,** copiado sem mudar uma letra: `%TEMP%/claude/vf-atl-A/laudo-texto-2.md`, sha256
`ff928971d6f0986822b740099b2b3e79fbda32abc95c1d76b0df1061877db014`. Os primeiros 26.923 bytes são a 1ª rodada (`0102d21c…`); a reconferência está no fim.

---

# Laudo-delta da texto-2 (conserto 4): verificador de fatos, lote A

COBERTURA: 55 de 55. São 30 de 30 entradas mudadas ou novas em `_textos_por_cena` e `rotulos_dado`, mais 25 de 25 itens mudados ou novos nas outras seções do arquivo.

- **Tarefa:** `atlantico-fundo-texto-2` (setor Texto e fatos, a mando da Sala de controle). O verificador é o `verificador-de-fatos` (claude-opus-5-5), sem navegador e sem nenhuma imagem aberta.
- **Data-base:** 29/10/2026, 11:47, hora de Brasília (`date` sem TZ).
- **O objeto:** `out/atlantico-fundo/textos-tela.json`, sha256 `39190cfc9c46fabc3f9929e09d8b5d21a566ef048b4dfe8965659c783e88c4fd`. A base é a cópia de antes, `out/atlantico-fundo/_tmp/redator/antes-texto-2/textos-tela.json`, sha256 `b034414f…`. As duas foram conferidas no disco antes do diff.
- **Como a lista foi derivada: por diff, não por escolha.**
  - Os scripts são `vf-atl-A/t2diff.py` e `t2diff2.py`, com as saídas em `t2-diff.txt` e `t2-diff2.txt`.
  - Cada seção dos dois arquivos foi serializada entrada a entrada (JSON canônico) e comparada pelo difflib.
  - O denominador é **toda** entrada que mudou ou nasceu:
    - em `_textos_por_cena`, 409 → 410 entradas. Há 24 mudadas: 18 com o texto mudado e 6 só no tempo (s02 ×2, s56 ×4). Há também 1 nova, a s04, e 1 só com a nota, o "MORE THAN 5 MI" da s02. A conta do setor confere: 24 + 1 + a nota;
    - em `rotulos_dado`, 59 → 59, com 4 mudadas (s04, s39/s41, s62, s75);
    - `cards_pessoa` (5), `glossario` (90), `nao_vai_para_tela` (47) e `_avisos_do_ano` (7) não mudaram;
    - nas outras seções, 25 itens: `_escolhas` 2, `_regras_de_serie` 4, `_instrucoes_para_a_arte` 2, `_pedidos_a_montante` 1, `_espera_a_sala` 3 novos, `_diverge_do_laudo_atendido` 1, `_ritmo_max` 2, `_quem` 1 e `_consertos` 9 novos.
- **Limite do detector:** o diff acha toda mudança de forma. A mudança de sentido sem mudança de texto não existe aqui, porque o texto é o mesmo. As afirmações que as notas e os porquês do redator fazem foram lidas à mão, e as que têm fato entraram na tabela 2.
- **Fontes lidas** (cópias locais, mais uma leitura de rede):
  - `midia/atlantico-fundo/fontes/fa-ncei-tsunami-evento-1458.txt` (NCEI);
  - `fa-bgs-2021-05-11-deepest-points.txt` (BGS);
  - `02-bongiovanni-2021-gdj3.122.txt` (BON);
  - `fa-gazetteer-milwaukee.txt` (GAZ);
  - `roteiros/atlantico-fundo/qc-roteiro/fatos-medidas.txt` (V04);
  - `fatos.laudo.md` (as F);
  - `fatos-tela.laudo.md` (as TA e as TB);
  - `fatos-pesquisa-2026-10-29.laudo.md` (as PA e as PB);
  - a API do GEBCO Gazetteer, relida por mim hoje às 11:4x (https://www.ngdc.noaa.gov/gazetteer/api/v1/feature?nameContains=Milwaukee).

NOTA: 9,2/10. A tela e o `rotulos_dado` saem limpos: 18 CONFIRMADA e 12 NADA A CHECAR, sem nenhuma DIVERGE. Fora da tela, uma frase do redator, repetida em dois lugares do arquivo, diz que o Bongiovanni não dá a ponta do Pacífico, e a fonte diz o contrário. O redator recusou o item 8 da Sala com base nessa frase.

## Tabela 1: `_textos_por_cena` e `rotulos_dado` (uma linha por entrada mudada ou nova)

O nº é o índice da entrada no arquivo novo, contado de 1.

| id | cena | papel (nº) | texto novo | veredito | fonte e trecho |
|---|---|---|---|---|---|
| TC2-001 | s02 | credito (#2) | "© MapTiler © OpenStreetMap contributors" (t0 0 → 0,3; t1 5,033) | NADA A CHECAR | Mudou só o tempo; o texto é o de TA002 (CONFIRMADA). Os "quadro 8 / quadro 9" da nota são medida da arte, não fato de fonte |
| TC2-002 | s02 | credito (#3) | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" (t0 0 → 0,3) | NADA A CHECAR | Mudou só o tempo; TA003 (PA003, a citação pedida pela GEBCO) |
| TC2-003 | s02 | cota (#6) | "MORE THAN 5 MI" (mudou só a nota) | NADA A CHECAR | O texto e o tempo (3,467–5,033) são os mesmos de TA006 (F007): 8,378 m = 5.206 mi; a voz diz "It's more than five miles down". O "não cabe" da nota é medida de composição |
| TC2-004 | s04 | credito (#16, NOVA) | "Deepest points: British Geological Survey, 2021" (5,266–7,533) | CONFIRMADA | BGS l. 9: "11/05/2021 By BGS Press"; l. 37: "Challenger Deep / 10 924 / Pacific / Mariana / 11.369°N/142.587°E"; l. 39: "Brownson Deep / 8378 / Atlantic / Puerto Rico / 19.712°N/67.311°W"; l. 63: "British Geological Survey, Press Office". A página é de 2021 e do BGS, e dá os dois pontos; a distância é conta nossa (TC2-027). As duas formas estão no parecer, no fim |
| TC2-005 | s07 | cota (#29) | "DECEMBER 2018" (3,733–5,366) | CONFIRMADA | F160: "The survey was conducted over the course of two days – December 18-19, 2018"; F158: quarta-feira, 19 de dezembro (o mergulho); TA028 (F020). A voz diz "only in December 2018". É a forma do AP, com o mês por extenso e sem o dia |
| TC2-006 | s13 | rotulo (#54) | "1883 · Blake" | NADA A CHECAR | Mudou só a caixa (CAIXA; Sala, pergunta 7). O fato é o de TA053 (F034: "19° 40' 50" north, longitude 66° 23' 40" west"; F028: "the steamer Blake") |
| TC2-007 | s15 | rotulo (#60) | "1883 · Blake" | NADA A CHECAR | Igual a TC2-006; TA059 |
| TC2-008 | s18 | rotulo (#77) | "HMS Challenger" | NADA A CHECAR | Mudou só a caixa. TA076 (IHR p. 1, no OCR: "Lat. i9°42’ N., Long. 65007’ W.", isto é, 19°42'N 65°07'W); F042: "H.M.S. Challenger" |
| TC2-009 | s39 (s40) | cota (#174) | "OCTOBER 1918" (13,667–19,033) | CONFIRMADA | NCEI l. 3–6: year 1918, month 10, day 11; l. 31: "1918, October 11, 10:14 local time"; F108; TB009. A voz diz "October nineteen eighteen". Sem dia novo |
| TC2-010 | s39 (s40) | cota (#175) | "OCTOBER 1918 · NOT IN THE TRENCH" (19,033–24,533) | CONFIRMADA | Igual a TC2-009 na data; o "NOT IN THE TRENCH" é o de TB010 (epicentro 18.7°N, 67.189°W, na falha do Cânion de Mona; F109), que não mudou |
| TC2-011 | s39 (s41) | cota (#182) | "MORE THAN 100 DEATHS · NOAA NCEI" (30,533–32,4) | CONFIRMADA | NCEI l. 35: "The official death toll for this event was placed at 116. This total must have been earthquake fatalities only, since at Mayagiiez, "more than 100" deaths were reported"; "this would tally 144"; "the total fatalities for the disaster from both the earthquake and tsunami approaches a number greater than 200". NCEI l. 22: deaths 140; l. 26: deathsTotal 144; l. 45: "116 deaths, $29 m damage". F114. A unidade e o dono estão na nota "DEATHS e o NCEI", abaixo da tabela |
| TC2-012 | s47 (s48) | cota (#215) | "DECEMBER 2018 · FIVE DEEPS EXPEDITION" (20,467–26,567) | CONFIRMADA | TB048 (PB035; F144, F146); F160. A voz diz "December twenty eighteen" |
| TC2-013 | s50 | cota (#227) | "DECEMBER 2018 · SONAR · 27,487 FT" (3,6–15,233) | CONFIRMADA | F160: "December 18-19, 2018"; BON l. 452–457: "Puerto Rico Trench/Brownson Deep / 19.712°N / 67.311°W / 8,378 ± 5"; 8,378 m = 27,486.9 ft (F151); TB060 |
| TC2-014 | s55 | cota (#264) | "DECEMBER 2018 · SONAR · 27,487 FT" (0–7,433) | CONFIRMADA | Igual a TC2-013; TB095 |
| TC2-015 | s56 | card_cargo (#271) | "Marine geologist, British Geological Survey (2019)" (t0 1,633 → 2,133) | NADA A CHECAR | Mudou só o tempo; TB101 (BGS l. 55: "Heather Stewart, British Geological Survey marine geologist based at the Lyell Centre, Edinburgh") |
| TC2-016 | s56 | card_cargo (#273) | "Scientist, Newcastle University (2019)" (t0 1,9 → 2,233) | NADA A CHECAR | Mudou só o tempo; TB103 |
| TC2-017 | s56 | aviso_ano (#274) | "Photo from 2022" (0–4,433 → 1,067–4,867) | NADA A CHECAR | Mudou só o tempo; TB104 (Exif de 29/09/2022; o fato é de 2019). A janela nova vai do pouso do retrato até a saída dele, como a regra do aviso pede |
| TC2-018 | s56 | credito (#275) | "Gnangcomapp / Wikimedia Commons · CC BY-SA 4.0" (0–4,433 → 1,067–4,867) | NADA A CHECAR | Mudou só o tempo; TB105 (PB060) |
| TC2-019 | s57 | cota (#287) | "DECEMBER 2018 · SONAR · 27,487 FT" (0–8,966) | CONFIRMADA | Igual a TC2-013; TB117 |
| TC2-020 | s62 | cota (#318) | "AS OF OCTOBER 2026" (0,4–6,4) | CONFIRMADA (VOLÁTIL) | Relida por mim HOJE, 29/10/2026, às 11:4x: {"items":[],"page":1,"totalPages":0,"totalItems":0,"itemsPerPage":50}. A mesma resposta aparece na cópia local de 26/10 (GAZ l. 3–7) e em 28/10 e 29/10, às 03:3x e às 04:5x (TB148). **Reconferir antes de publicar** |
| TC2-021 | s62 | credito (#320) | "Source: GEBCO Gazetteer (NOAA NCEI), 2026" | CONFIRMADA | GAZ l. 1: "https://www.ngdc.noaa.gov/gazetteer/api/v1/feature?nameContains=Milwaukee, em 26/10/2026": a consulta é de 2026, num servidor do NCEI (ngdc.noaa.gov). O nome vem de SJ l. 496: "IHO-IOC GEBCO Gazetteer of Undersea Feature Names". TB150. Tirar o mês não muda a afirmação: o mês continua no TC2-020 |
| TC2-022 | s67 | cota (#349) | "DECEMBER 2018 · SONAR · 27,487 FT" (13,567–15,567) | CONFIRMADA | Igual a TC2-013; TB177 |
| TC2-023 | s71 | cota (#371) | "DECEMBER 2018" (7,533–9,567) | CONFIRMADA | TB199 (F258: o Limiting Factor levou Vescovo em dezembro de 2018); F158. A voz diz "the deepest point the year before" |
| TC2-024 | s74 | cota (#395) | "DECEMBER 2018 · SONAR · 27,487 FT" (0–10,7) | CONFIRMADA | Igual a TC2-013; TB223 |
| TC2-025 | s75 | cota (#405) | "HMS Challenger · 23,250 FT" (13,0–15,0) | NADA A CHECAR | Mudou só a caixa. O número é o de TB233 (F046: 3,875 fathoms × 6 = 23,250 ft; IHR 1936: "3,875 fathoms = 7,087 metres") |
| TC2-026 | s75 | cota (#409) | "DECEMBER 2018 · SONAR · 27,487 FT" (18,5–20,0) | CONFIRMADA | Igual a TC2-013; TB237 |
| TC2-027 | s04 | rotulos_dado #5 | na_tela "≈ 9,500 MI"; fonte: "conta nossa: Vincenty no WGS84 entre as duas posições da tabela do British Geological Survey, 2021 (… l. 37 … l. 39 …)"; valor_exato "15,269.6 km = 9,488 mi" | CONFIRMADA | Refiz a conta hoje (Vincenty, WGS84, `vf-atl-A/t2vinc.py`): de 19.712°N 67.311°W a 11.369°N 142.587°E dá 15,269.6 km = 9,488.06 mi. Bate com V04 (fatos-medidas.txt l. 8: "15,269.6 km = 9,488.06 mi, about 9,500 miles") e com F012 e F013. As duas linhas do BGS citadas (l. 37 e 39) estão literais no arquivo. As mesmas posições estão no BON, Tabela 1 (l. 452–457 e 484–488) |
| TC2-028 | s39 (s41) | rotulos_dado #28 | na_tela "MORE THAN 100 DEATHS · NOAA NCEI"; valor_exato "116 (o total oficial); 144 (deathsTotal); mais de 200 (a revisão citada pelo próprio NCEI)" | CONFIRMADA | Cada literal citado bate com o NCEI: l. 22 "deaths: 140"; l. 23 "deathsAmountOrder: 3" (no código do banco, de 101 a 1.000); l. 26 "deathsTotal: 144"; l. 35 "placed at 116" e "a number greater than 200 (ref #1492)"; l. 45 "116 deaths". F114 |
| TC2-029 | s62 | rotulos_dado #48 | na_tela "AS OF OCTOBER 2026 / NO RESULT"; data "outubro de 2026"; valor_exato "totalItems 0" | CONFIRMADA (VOLÁTIL) | TC2-020 e TC2-021 |
| TC2-030 | s75 | rotulos_dado #59 | na_tela "HMS Challenger · 23,250 FT" | NADA A CHECAR | Mudou só a caixa; o valor_exato "3,875 fathoms" e a fonte (IHR 1936) são os mesmos (F046, TB271) |

**A nota sobre "DEATHS" e o NCEI (TC2-011), que a Sala pediu:**

- **"DEATHS" é fiel.** É a palavra do próprio banco ("deaths", "deathsTotal", "116 deaths") e cobre todos os totais que ele dá: 116 (o oficial), 140, 144 e "greater than 200". Todos passam de 100, e o "more than 100" de F114 vale para todos.
- **O terremoto E o tsunami.** A voz diz "The quake and its tsunami killed more than 100 people". O NCEI explica que os 116 oficiais "must have been earthquake fatalities only", que com as mortes do tsunami "this would tally 144", e que os dois juntos chegam a "greater than 200". A cota não diz "do tsunami", e por isso não entra em choque com o "at least 91 people" de l. 37 (ref #1591), que é a conta do tsunami sozinho.
- **"· NOAA NCEI" é fiel.** O registro do evento 1458 é do banco do NCEI e reúne as referências (#1250, #1492 e #1591). É o mesmo dono das cotas "M 7.1 · NOAA NCEI" e "UP TO 20 FT (6.1 M) · NOAA NCEI" (TB).
- **Ao lado de "Mayagüez, Puerto Rico".** A cota fica no ar junto do rótulo da cidade (29,1–32,4 s). Mesmo lida como "mais de 100 mortes em Mayagüez", ela é verdadeira: l. 35 diz "at Mayagiiez, "more than 100" deaths were reported".

**As datas (item 6).**

- Nenhum dia entrou. Os 7 textos de tela com dia são os mesmos, letra a letra, antes e depois:
  - "JAN. 27, 1883" (s12);
  - "THE SUN (NEWBERRY, S.C.) · JULY 28, 1939" (s21 e s56);
  - "Surveyed Dec. 18–19, 2018" (s50);
  - "WEDNESDAY, DEC. 19, 2018" (s52);
  - "FIRST PERSON · DEC. 19, 2018" (s53);
  - "Landsat · Aug. 24, 2026" (s66).
  Estão todos na forma do AP: o mês abreviado com o dia, e "JULY" por extenso.
- Os 12 textos só com mês e ano estão agora na forma do AP: "OCTOBER 1918" ×2, "DECEMBER 2018" ×9 (s07, s47, s50, s55, s57, s67, s71, s74 e s75) e "AS OF OCTOBER 2026".
- Nenhum "DEC." nem "OCT." sobrou sem dia. O script da conferência é `vf-atl-A/t2datas.py`.
- "OCTOBER 1918" segue os confirmados de antes: TB009, TB010 e F108, de 11/10/1918.
- "DECEMBER 2018" segue os confirmados do lote A e do lote B: TA028 e TB048, TB060, TB095, TB117, TB177, TB199, TB223 e TB237. As fontes são F158 e F160 (18–19/12/2018).

**Os navios e os tempos (s02, s13, s15, s18, s56 e s75).** Além da forma, nada mudou:

- os rótulos de navio mudaram só de caixa;
- os seis itens de tempo (s02 ×2, s56 ×4) mudaram só o t0 ou o t1;
- os textos, os números ("23,250 FT") e os anos ("1883") são os mesmos.

## Tabela 2: as outras seções do arquivo (os itens mudados ou novos)

Estes itens não vão à tela. Entram porque estão no arquivo que a Sala, a arte e o qc leem, e porque alguns afirmam fato.

| id | seção | o que mudou | veredito | fonte e trecho |
|---|---|---|---|---|
| TC2-031 | `_escolhas` (o medidor: s09, s55, s57) | "DEC. 2018 · SONAR · 27,487 FT" → "DECEMBER 2018 · SONAR · 27,487 FT" | NADA A CHECAR | Só a forma; o fato é o de TC2-013 |
| TC2-032 | `_escolhas` (s62, a consulta) | "AS OF OCTOBER 2026", com a data uma vez só | NADA A CHECAR | Só a forma; TC2-020 |
| TC2-033 | `_regras_de_serie` (os marcadores do medidor) | a forma "DECEMBER 2018" na série | NADA A CHECAR | Só a forma |
| TC2-034 | `_regras_de_serie` (o crédito de mapa) | s02 a partir de 0,3 s | NADA A CHECAR | Regra de composição |
| TC2-035 | `_regras_de_serie` (no máximo 3 linhas de crédito) | a s04 entra na lista ("na P0 do fim") | NADA A CHECAR | Regra de composição |
| TC2-036 | `_regras_de_serie` (CAIXA) | o navio em caixa normal | NADA A CHECAR | Regra de forma (Sala, pergunta 7) |
| TC2-037 | `_instrucoes_para_a_arte` (s39/s40) | "OCTOBER 1918" no marcador do epicentro (18.7°N, 67.189°W) | NADA A CHECAR | Só a forma da data; o epicentro não mudou (TB391, PB008) |
| TC2-038 | `_instrucoes_para_a_arte` (s13) | o alfinete "1883 · Blake" | NADA A CHECAR | Só a caixa |
| TC2-039 | `_pedidos_a_montante` (s75 › b2) | "DECEMBER 2018 · SONAR · 27,487 FT" em 18,5 s | NADA A CHECAR | Só a forma; o pedido de tempo é o de antes |
| TC2-040 | `_espera_a_sala` (CAIXA, as sobras) | "≈ 83 MI · AGUADILLA" e as outras ficam para a Sala decidir | NADA A CHECAR | Decisão de forma; os textos não mudaram (TA004, TB063, TB227) |
| TC2-041 | `_espera_a_sala` (a fonte do "≈ 9,500 MI") | "… e o Bongiovanni não dá a ponta do Pacífico. Na tela vai "Deepest points: British Geological Survey, 2021" …" | **REFUTADA** (nessa frase; o resto da entrada está certo) | BON l. 415–416: "The maximum depth of the Mariana Trench located at 11.369°N, 142.587°E was verified by four submersible dives to the location as 10,925 ± 4 m." BON, Tabela 1, l. 484–488: "Mariana Trench/Challenger Deep / 11.369°N / 142.587°E / 10,924 ± 15"; l. 452–457: "Puerto Rico Trench/Brownson Deep / 19.712°N / 67.311°W / 8,378 ± 5". O Bongiovanni dá as duas pontas, com as mesmas coordenadas da tabela do BGS, que é o resumo do estudo (BGS l. 15: "Data published in Geoscience Data Journal"; l. 51: "Cassandra Bongiovanni … lead author of the study"). Estão certos: "o número é conta nossa", "o BGS dá os dois pontos, não a distância" e as larguras, que são medida de composição e não foram checadas aqui |
| TC2-042 | `_espera_a_sala` (o substantivo do "MORE THAN 5 MI") | não entrou: não cabe | NADA A CHECAR | Medida de composição; o texto ficou como estava (TC2-003) |
| TC2-043 | `_diverge_do_laudo_atendido[PA015]` | "1883 · BLAKE" → "1883 · Blake" | NADA A CHECAR | Só a caixa |
| TC2-044 | `_ritmo_max.estrito` | a nota da s56 (a conta do qc-carga) | NADA A CHECAR | Conta de portão, não fato de fonte |
| TC2-045 | `_ritmo_max.medido` | s04: 1 → 2 | NADA A CHECAR | A linha nova da s04; nenhuma outra cena mudou (`vf-atl-A/t2ritmo.py`) |
| TC2-046 | `_quem` | acrescenta o conserto 4 | NADA A CHECAR | Procedência interna |
| TC2-047 | `_consertos` (as entradas) | os sha256 da regência, do espelho, do conceito e das words | NADA A CHECAR | Procedência interna; não é afirmação de tela |
| TC2-048 | `_consertos` item 2 (s39/s41) | "MORE THAN 100 DEATHS · NOAA NCEI" e o literal do NCEI | CONFIRMADA | TC2-011 e TC2-028 |
| TC2-049 | `_consertos` item 6 (as datas no AP) | "Nenhuma data com o dia nova" e a lista do antes e do depois | CONFIRMADA | A conferência de datas acima (`t2datas.py`): os 7 textos com dia não mudaram; os 12 com mês e ano estão na forma nova; a lista de cenas do item bate com o diff |
| TC2-050 | `_consertos` item 6 (a fonte da s62) | "Source: GEBCO Gazetteer (NOAA NCEI), 2026" | CONFIRMADA | TC2-021 |
| TC2-051 | `_consertos` item 7 (os rótulos de navio) | a caixa | NADA A CHECAR | Só a forma |
| TC2-052 | `_consertos` item 8 (a fonte do "≈ 9,500 MI") | "… o Bongiovanni (o que a Sala escreveu) não dá a ponta do Pacífico, e o BGS não escreve a distância …" | **REFUTADA** (nessa frase) | Igual a TC2-041. A segunda metade ("o BGS não escreve a distância") está certa: a página do BGS não tem nenhuma distância entre os pontos |
| TC2-053 | `_consertos` item 9b (os créditos de mapa da s02) | 0 → 0,3 s | NADA A CHECAR | Medida da arte (o quadro em que o mapa aparece). A foto da s01 e a licença dela são do veredito do conferente, que não mudou |
| TC2-054 | `_consertos` item 9a (o substantivo da s02) | não mudou | NADA A CHECAR | TC2-042 |
| TC2-055 | `_consertos` (o ritmo da s56) | os t0 do aviso, do crédito e dos cargos | NADA A CHECAR | TC2-015 a TC2-018 |

## O que não podia sumir: nada sumiu

- **Pelo diff:** as 409 entradas antigas de `_textos_por_cena` têm cada uma o seu par no arquivo novo. O difflib só deu `replace` de 1 para 1 e um `insert`, a s04 (#16). Não há nenhum `delete`. O `rotulos_dado` continua com 59 entradas, e as 4 mudadas são as da tabela 1.
- **A s02** guarda tudo, com os mesmos tempos:
  - "≈ 83 MI · AGUADILLA" (1,733–5,033);
  - "27,487 FT" (2,8–5,033);
  - "MORE THAN 5 MI" (3,467–5,033);
  - "Source: Bongiovanni et al., 2021" (2,8–5,033);
  - os dois créditos de mapa, agora de 0,3 a 5,033.
- **A s56** guarda as 14 entradas (#269 a #282):
  - os dois cards: "HEATHER A. STEWART" com "Marine geologist, British Geological Survey (2019)", e "ALAN J. JAMIESON" com "Scientist, Newcastle University (2019)";
  - o aviso "Photo from 2022";
  - o crédito "Gnangcomapp / Wikimedia Commons · CC BY-SA 4.0";
  - a legenda "Earth-Science Reviews, 2019";
  - o crédito da página "Stewart & Jamieson / Earth-Science Reviews, 2019 · CC BY 4.0";
  - o grifo da Tabela 1 e "28,675 FT (8,740 M) · GEBCO GAZETTEER";
  - a folha do The Sun, o grifo dela e "28,680 FT · THE SUN, 1939".
  - Os textos não mudaram; só mudaram os t0 e t1 da tabela 1.
  - `cards_pessoa` e `_avisos_do_ano` da s56 não guardam tempo, e por isso não ficaram em desacordo com os t0 novos.
- **A s39** guarda o resto do bloco:
  - "M 7.1 · NOAA NCEI";
  - "UP TO 20 FT (6.1 M) · NOAA NCEI";
  - "Mona Passage", "DOMINICAN REPUBLIC" e "Mayagüez, Puerto Rico";
  - "“APPEARS TO BE HIGH” · USGS";
  - os créditos.
- **A s04** guarda "Mariana Trench", "PACIFIC", "≈ 9,500 MI" e os dois créditos de mapa. A linha nova da fonte é a única coisa que entrou.

## Achados acionáveis

- **[MÉDIO] TC2-041 e TC2-052: "o Bongiovanni não dá a ponta do Pacífico" (`_espera_a_sala` e `_consertos`, item 8).**
  - A frase é falsa. O estudo dá o Challenger Deep em 11.369°N, 142.587°E, no texto (BON l. 415–416) e na Tabela 1 (l. 484–488). As coordenadas são as mesmas que a tabela do BGS reproduz.
  - Ela não vai à tela nem à voz, e a linha da s04 que está no arquivo é verdadeira. Mas foi essa frase que justificou recusar o item 8 da Sala ("a mesma da s02 (Bongiovanni et al., 2021)").
  - A mesma frase está no relato do redator (`_tmp/redator/texto-2-relato.md`, item 8).
  - **CONSERTO**, nas duas entradas: trocar "e o Bongiovanni não dá a ponta do Pacífico" por "e o Bongiovanni dá as duas pontas (Tabela 1: Brownson Deep 19.712°N 67.311°W, Challenger Deep 11.369°N 142.587°E; BON l. 452–457 e 484–488), as mesmas da tabela do BGS".
  - A escolha da linha da s04 volta à Sala com a premissa certa (o parecer, abaixo).
  - **RAIZ: PONTUAL.** Uma negativa ("a fonte X não dá Y") foi afirmada sem a cópia local ter sido aberta. A cópia está no disco desde 26/10.
- **[LEVE, VOLÁTIL] TC2-020, TC2-021 e TC2-029 (s62).**
  - "AS OF OCTOBER 2026" e "NO RESULT" dependem de uma consulta que pode mudar. Hoje, às 11:4x, continua com 0 itens.
  - **CONSERTO:** nenhum no texto. Reconferir a mesma URL antes de publicar. Se o gazetteer passar a ter "Milwaukee", a s62 e a voz da cena mudam.
  - **RAIZ: PONTUAL.**

Não há DIVERGE nem NÃO ACHEI.

## Lista de nomes

NADA A CHECAR. O conserto 4 não pôs na tela nenhuma atribuição anônima ("analistas", "cientistas", "um pesquisador"). As atribuições novas são todas a instituições nomeadas:

- "NOAA NCEI" (s39/s41);
- "British Geological Survey, 2021" (s04);
- "GEBCO Gazetteer (NOAA NCEI), 2026" (s62).

## Os 2 padrões mais vistos

1. **A forma da data no AP, aplicada em série e sem tocar no fato.** São 12 textos de mês e ano mudados e nenhum dia novo. Os 7 textos com dia ficaram como estavam.
2. **A justificativa pela negativa não conferida.** "A fonte X não dá Y" é afirmação de fato como qualquer outra. Aqui ela decidiu a forma de uma linha de fonte. Era só abrir a cópia local, `02-bongiovanni-2021-gdj3.122.txt`, Tabela 1.

## Parecer: as duas formas da linha da s04 (e o Bongiovanni)

O "≈ 9,500 MI" é conta nossa: 9,488 mi pelo Vincenty, entre o Brownson Deep e o Challenger Deep (TC2-027). Nenhuma das fontes escreve essa distância: nem a página do BGS (a única distância nela é o "more than 4000 km long" da Fossa de Java, l. 27), nem o Bongiovanni.

1. **"Deepest points: British Geological Survey, 2021"** (a forma do redator). **É honesta.**
   - Diz exatamente o que a fonte dá, os pontos, e nada além disso.
   - A página é do British Geological Survey (bgs.ac.uk; l. 9 "By BGS Press"; l. 63 "British Geological Survey, Press Office") e de 2021 (l. 9: "11/05/2021").
   - **Contra:** sai da forma da série ("Source: <instituição>, <ano>", identidade §7 e a regra 11 do próprio redator). A série tem um precedente de forma qualificada, o "Fault model: Wei et al., 2024" da s45 (TB035), e por isso ela não é inédita.
   - Se a Sala quiser marcar que a distância é nossa, o coerente seria marcar também a s02 e a s09, que fazem a mesma coisa. Ninguém pediu isso.
2. **"Source: British Geological Survey, 2021"** (a forma da série). **É honesta**, pela convenção que a série já usa e que este lote confirmou:
   - "Source:" nomeia de onde vêm os dados do número, e não diz que a fonte escreveu o número;
   - a s02 põe "Source: Bongiovanni et al., 2021" junto do "≈ 83 MI · AGUADILLA", que é conta nossa até a costa (TA004, TA165);
   - a s09 põe "Sources: Stewart & Jamieson, 2019; Bongiovanni et al., 2021" no "MORE THAN 1,000 FT", que é conta nossa entre duas pontas (TA038).
   - Ela não diz nada que a fonte não diga. Quem abrir a página acha os dois pontos e refaz a conta, mas não acha "9,500". O mesmo vale para a s02 e a s09.
3. **O Bongiovanni et al., 2021, que a Sala pediu, sustenta a linha. SIM, ele dá a ponta do Pacífico.**
   - BON l. 415–416: "The maximum depth of the Mariana Trench located at 11.369°N, 142.587°E".
   - Tabela 1, l. 484–488: "Mariana Trench/Challenger Deep / 11.369°N / 142.587°E / 10,924 ± 15". A ponta do Atlântico está na l. 452–457: "Puerto Rico Trench/Brownson Deep / 19.712°N / 67.311°W / 8,378 ± 5".
   - São as mesmas coordenadas da tabela do BGS. A página do BGS é o comunicado do próprio estudo (l. 15: "Data published in Geoscience Data Journal"; l. 51: Bongiovanni, "lead author of the study"; l. 55: Stewart, "co-author"), e o Bongiovanni é a fonte primária.
   - O ano 2021 vale: "Accepted: 7 April 2021" e "© 2021" (BON l. 9 e 19). O fascículo é de 2022 (vol. 9, p. 108–123), e a série já usa 2021 (TB282).
   - "Source: Bongiovanni et al., 2021" tem 32 caracteres, menos que os 39 de "Source: British Geological Survey, 2021", que o redator mediu em ~1.040 px dentro da faixa. Deve caber, mas quem mede é a arte.

**A recomendação:** "Source: Bongiovanni et al., 2021".

- É o pedido literal da Sala (item 8), na forma da série.
- É a fonte primária.
- É a mesma linha que a s02 mostra segundos antes, sobre o mesmo ponto mais fundo, saído do mesmo estudo.
- A segunda escolha é "Source: British Geological Survey, 2021". A forma do redator também é verdadeira, só que fora da série.

## O placar e o veredito

- **COBERTURA: 55 de 55** (a lista inteira, derivada pelo diff; nenhum item ficou sem veredito):
  - na tela e no `rotulos_dado`, 30 de 30: 18 CONFIRMADA (2 delas VOLÁTEIS, a s62) e 12 NADA A CHECAR (só forma ou tempo). **CHECADO E LIMPO**: zero DIVERGE, zero REFUTADA, zero NÃO ACHEI;
  - nas outras seções, 25 de 25: 3 CONFIRMADA, 20 NADA A CHECAR e 2 REFUTADA. As duas REFUTADA são a mesma frase sobre o Bongiovanni, em `_espera_a_sala` e em `_consertos`, item 8.
  - **Soma: 21 CONFIRMADA, 32 NADA A CHECAR, 2 REFUTADA, 0 DIVERGE e 0 NÃO ACHEI.**
- **A aritmética interna fecha.** 15,269.6 km = 9,488.06 mi (refeita). 8,378 m = 27,486.9 ft, e 3,875 × 6 = 23,250 ft. Os quatro totais do NCEI passam de 100. A soma do diff dá 24 + 1 + 1 e 4.
- **Por que RESSALVA, e não PASS nem FAIL.**
  - Nada que vai à tela ou à voz diverge da fonte, e a s04, a s39/s41 e a s62 estão certas como estão.
  - As duas REFUTADA estão numa nota de trabalho do redator, não na tela nem na voz. São periféricas, e o conserto de uma frase está pronto (TC2-041). Elas importam porque sustentam a recusa do item 8 da Sala.
  - Se a Sala ler o contrato ao pé da letra (≥ 1 REFUTADA = FAIL), o veredito vira FAIL. Não o li assim porque a frase não é afirmação do texto publicado.
- **NOTA: 9,2/10**

VEREDITO: RESSALVA

## Reconferência 1 (conserto 4b)

COBERTURA DA RECONFERÊNCIA: 5 de 5 (todo item que mudou de 39190cfc para 34678237).

- **O objeto:** `out/atlantico-fundo/textos-tela.json`, sha256 `346782374f116d528a8f025418a8756a740842563c5c3c6626a57b5f46042e78`, conferido no disco.
- **Data-base:** 29/10/2026, 11:56, hora de Brasília (`date` sem TZ).
- **Como a lista foi derivada.** Não há cópia do 39190cfc no disco. Por isso refiz, com os mesmos scripts, o diff da cópia de antes (b034414f) contra o arquivo de agora (`vf-atl-A/t2b.py`, com as saídas em `t2b-diff.txt`, `t2b-diff2.txt` e `t2b-saida.txt`). Depois comparei, linha a linha, essa saída com a do diff que embasou a tabela acima (b034414f → 39190cfc).
  - As duas têm a mesma base, e por isso toda linha diferente entre elas é uma mudança de 39190cfc para 34678237.
  - Saíram só 5 diferenças, e são as da tabela abaixo.
  - O conjunto de chaves de topo que diferem de b034414f é o mesmo (11). Toda chave fora dele é igual em b034414f, em 39190cfc e em 34678237.
  - Em `_consertos`, as 37 entradas de b034414f continuam, iguais e na mesma ordem (`t2b2.py`). O arquivo vai de 46 a 47 entradas.
- **Na tela e no `rotulos_dado`, nada mais mudou.**
  - Em `_textos_por_cena`, só a entrada #16 (a s04) difere do 39190cfc. O "#15" do relato é o mesmo índice contado a partir de 0.
  - Em `rotulos_dado`, só o #5 (a s04) difere.
  - Os outros 409 textos, os tempos e os outros 58 rótulos são os que a tabela 1 conferiu.
  - `cards_pessoa`, `glossario`, `nao_vai_para_tela`, `_avisos_do_ano`, `_entradas_sha256`, `_ritmo_max`, `_quem`, `_escolhas`, `_regras_de_serie`, `_instrucoes_para_a_arte`, `_pedidos_a_montante` e `_diverge_do_laudo_atendido` não mudaram desde 39190cfc.

| id | seção | o que mudou (39190cfc → 34678237) | veredito | fonte e trecho |
|---|---|---|---|---|
| R1-01 | `_textos_por_cena` #16, s04, credito (5,266–7,533; os tempos são os mesmos) | "Deepest points: British Geological Survey, 2021" → **"Source: Bongiovanni et al., 2021"**, e a nota passa a citar as duas pontas no Bongiovanni | CONFIRMADA | BON l. 415–416: "The maximum depth of the Mariana Trench located at 11.369°N, 142.587°E was verified by four submersible dives". Tabela 1, l. 484–488: "Mariana Trench/Challenger Deep / 11.369°N / 142.587°E / 10,924 ± 15". l. 452–457: "Puerto Rico Trench/Brownson Deep / 19.712°N / 67.311°W / 8,378 ± 5". l. 321: "The deepest point was identified as 8,378 ± 5 m uncertainty at 19.712°N/67.311°W". O ano: BON l. 9, "Accepted: 7 April 2021", e l. 19, "© 2021" (TB282). O texto é igual, letra a letra, ao da s02 (#7, TA007 CONFIRMADA). A distância continua sendo conta nossa (V04; TC2-027), e "Source:" nomeia de onde vêm os pontos, como na s02 e na s09 (o parecer acima) |
| R1-02 | `rotulos_dado` #5, s04 | a `fonte` passa a citar as duas pontas no Bongiovanni (l. 484–488, 452–457 e 415–416) e o BGS como o mesmo par (l. 37 e 39). O `valor_exato` continua "15,269.6 km = 9,488 mi" | CONFIRMADA | As linhas citadas estão no BON e no BGS, com as mesmas coordenadas. A conta refeita (TC2-027) dá 15,269.6 km = 9,488.06 mi. O `na_tela` "≈ 9,500 MI" e o `por_que_diverge` não mudaram |
| R1-03 | `_espera_a_sala` | **saiu** a entrada da fonte da s04, a que trazia a frase refutada em TC2-041. As outras duas do conserto 4 (CAIXA e o substantivo da s02) continuam: de 13 entradas para 12 | NADA A CHECAR (a afirmação saiu do arquivo) | Com a linha da s04 no pedido da Sala, a divergência acabou. **TC2-041 está RESOLVIDA** |
| R1-04 | `_consertos`, item 8 (a fonte do ≈ 9,500 MI) | o `por_que` foi corrigido: "O Bongiovanni et al., 2021 dá as duas (l. 415–416 e a Tabela 1, l. 452–457 e 484–488), e o BGS de 2021 também (l. 37 e 39), com as mesmas coordenadas; o BGS não escreve a distância", com a nota de que a frase de antes estava errada. O `depois` guarda o que o conserto 4 fez e acrescenta "Trocada no conserto 4b por "Source: Bongiovanni et al., 2021"" | CONFIRMADA | BON e BGS, como em R1-01. A página do BGS não tem distância entre os pontos: a única distância nela é "more than 4000 km long", da Fossa de Java (BGS l. 27). A origem do erro ("veio do pedido do setor") é fato de processo, que a Sala confirmou na mensagem desta tarefa. **TC2-052 está RESOLVIDA** |
| R1-05 | `_consertos`, novo: "conserto 4b · a fonte do ≈ 9,500 MI" | o antes ("Deepest points…"), o depois ("Source: Bongiovanni et al., 2021", com os mesmos 5,266–7,533 s, o `rotulos_dado` e a saída de `_espera_a_sala`) e o porquê, com as linhas do BON | CONFIRMADA (as citações) | Todas as linhas citadas conferem (l. 415–416, 484–488, 452–457 e 321). "a mesma linha da s02" confere (#7). As larguras (~841 px contra ~1.251) são medida de composição, não fato de fonte, e não as medi |

**As duas REFUTADA do conserto 4 estão resolvidas.**

- **TC2-041:** a entrada saiu de `_espera_a_sala` (R1-03).
- **TC2-052:** o item 8 de `_consertos` diz agora o que a fonte diz (R1-04).
- A frase "o Bongiovanni não dá a ponta do Pacífico" não aparece mais como afirmação em nenhum lugar do arquivo. Ela só aparece citada como erro, no item 8 e no registro do 4b.
- O relato do redator, que não é objeto desta lente, também traz a correção, na seção "Conserto 4b".

**O que fica fora desta lente** e não foi conferido por mim:

- as larguras em px;
- a conta do qc-carga;
- o `validar-contrato` que o relato diz ter dado exit 0.

### O conserto 4 inteiro, agora sobre 34678237

- **COBERTURA: 55 de 55.** A lista é a mesma derivação do diff contra b034414f:
  - na tela e no `rotulos_dado`, 30 entradas: as 26 de `_textos_por_cena` e as 4 de `rotulos_dado`. TC2-004 e TC2-027 valem agora pelas R1-01 e R1-02;
  - nas outras seções, 25 itens:
    - `_espera_a_sala` tem agora 2 itens novos, e não 3: TC2-041 saiu;
    - `_consertos` tem agora 10: o item 8 corrigido, TC2-052 → R1-04, e o 4b, R1-05.
- **Na tela e no `rotulos_dado`:** 18 CONFIRMADA (2 delas VOLÁTEIS, a s62) e 12 NADA A CHECAR. **CHECADO E LIMPO.**
- **Nas outras seções:** 5 CONFIRMADA (TC2-048, TC2-049, TC2-050, R1-04 e R1-05) e 20 NADA A CHECAR.
- **Soma: 23 CONFIRMADA, 32 NADA A CHECAR, 0 DIVERGE, 0 REFUTADA e 0 NÃO ACHEI.**
- **A aritmética interna fecha.** 15,269.6 km = 9,488.06 mi; 8,378 m = 27,486.9 ft; 3,875 × 6 = 23,250 ft; e os quatro totais do NCEI (116, 140, 144 e mais de 200) passam de 100.
- **O que continua aberto: o VOLÁTIL.** "AS OF OCTOBER 2026" e "NO RESULT" (s62) devem ser reconferidos na mesma URL do gazetteer antes de publicar. Hoje, às 11:4x, a consulta deu 0 itens.
- **Os nomes:** nenhum anônimo novo. A atribuição nova da s04 é a um estudo nomeado, com autores e ano.
- **NOTA: 9,6/10.** A tela, o `rotulos_dado` e as notas do conserto estão limpos. O que impede o 10 é só a s62, que é volátil e pede uma leitura na véspera.

VEREDITO: PASS

---

## Fecho do setor

COBERTURA: 55 de 55 (a 1ª rodada sobre o conserto 4, mais a reconferência 1 do 4b: 5 de 5). 23 CONFIRMADA, 32 NADA A CHECAR, 0 DIVERGE, 0 NÃO ACHEI e 0 REFUTADA (as duas da 1ª rodada, TC2-041 e TC2-052, resolvidas no 4b). A s62 é VOLÁTIL: "NO RESULT" e "AS OF OCTOBER 2026" se reconferem antes de publicar, sobre o `textos-tela.json` `34678237…`.

VEREDITO: PASS
