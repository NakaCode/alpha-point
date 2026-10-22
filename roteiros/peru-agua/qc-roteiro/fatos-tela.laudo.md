# Laudo de fatos do texto de tela: `peru-agua` (vídeo 4)

**Gravado pelo setor Texto e fatos**, na tarefa `peru-agua-texto-1`, em 22/10/2026.
- O `verificador-de-fatos` não tem `Write`. Cada lote gravou o laudo em `%TEMP%/claude/vf-peru-tela-<A|B>/laudo.md` pelo `Bash`.
- O setor o copiou para cá sem mudar uma letra e conferiu o sha256 contra o que o verificador informou:
  - lote A: `675d1d6b…3fbab` na rodada 1 e `e4436b4b…7c8c0` com a reconferência 1;
  - lote B: `e5dcd327…c5ce9` na rodada 1 e `2671abd4…38739` com a reconferência 1.
- **O objeto conferido:** `out/peru-agua/textos-tela.json` `d9769347…` (a 1ª entrega do redator) e, na reconferência 1 de cada lote, o
  `344396a4…`, depois dos 11 consertos.
- **Os lotes:** A (s01–s27, ids `TA…`) e B (s28–s53 e as seções gerais, ids `TB…`). Os dois rodaram em Opus (`claude-opus-5-5` em todas as
  linhas do transcript), com 0 imagens.

## A soma da rodada 1

| lote | cobertura | DIVERGE | REFUTADA | NÃO FOI CHECADO | nota | veredito |
|---|---|---|---|---|---|---|
| A (s01–s27) | 270 de 285 | 2 (periféricos) | 0 | 15 (rótulos de lugar da caça, sem veredito do conferente) | 8.5 | RESSALVA |
| B (s28–s53, gerais) | 328 de 345 | 0 | 0 | 17 (12 rótulos da caça; 5 primárias do gob.pe, atribuídas na tela) | 9 | RESSALVA |
| **total** | **598 de 630** | 2 | 0 | 32 | | **RESSALVA** |

- **Divergência da voz:** nenhuma. Nada a regravar.
## Depois dos consertos (`344396a4…`)

- **Os consertos:** 11, em uma volta, pelo redator vivo.
- **A reconferência 1:**
  - lote A, 20 de 20;
  - lote B, 20 de 20.
  - Nada mais pede conserto no texto.

| lote | cobertura | DIVERGE | REFUTADA | NÃO FOI CHECADO | nota | veredito |
|---|---|---|---|---|---|---|
| A | 271 de 286 | 0 | 0 | 15 (rótulos de lugar da caça) | 9 | RESSALVA |
| B | 329 de 346 | 0 | 0 | 17 (12 da caça; 5 primárias do gob.pe) | 10 | RESSALVA |
| **total** | **600 de 632** | 0 | 0 | 32 | | **RESSALVA** |

- **O que segura a RESSALVA:** só os 32 NÃO FOI CHECADO. O laudo vira PASS quando os rótulos da caça forem conferidos contra o veredito dos
  clipes. As 5 primárias do gob.pe ficam atribuídas na tela a quem as publicou.
- **A reconferência de cada lote** está no fim do texto dele, abaixo.

---

# Lote A (s01–s27), como o verificador gravou

COBERTURA: 270 de 285. CHECADO PARCIALMENTE: os 15 que faltam são os rótulos de lugar que esperam a caça (NÃO FOI CHECADO). A lista foi derivada por script sobre o JSON, como se diz abaixo.

# Laudo de fatos · texto de tela · lote A (s01–s27) · `peru-agua` · tarefa `peru-agua-texto-1`

- **Data-base da verificação:** 22/10/2026.
- **O objeto:** `out/peru-agua/textos-tela.json`, sha256 `d976934775d11d524f038ec73e04a57b6b245bb0762e86c48e624f6baea070fd`.
- **Como a lista foi derivada.** Um script lê o JSON e devolve cada entrada que toca as cenas de s01 a s27, sem escolha:
  - 195 entradas de `_textos_por_cena`;
  - 28 de `rotulos_dado`;
  - 1 de `cards_pessoa` (s26);
  - 1 de `_avisos_do_ano` (s26);
  - 62 do `glossario` com alguma cena de s01 a s27 no `_na_tela`.
  - São 287. Saem do denominador as 2 entradas `nada` (TA033 e TA146), declaradas como NADA A CHECAR. **M = 285.**
- **O limite do extrator.** Ele lê o que o JSON escreve, não o que a tela sugere quando junta texto, voz e imagem. Por isso acrescentei à mão quatro leituras de sentido, e elas estão nos achados e nas observações:
  - a legenda da s19 sobre a barra de Lima (achado 1);
  - a base dos 50 % da s20 (O1);
  - o ponto de Piura sobre a imagem de 1998 (O2);
  - o lado da estação de Vilca (O3).
- **Contra o quê se conferiu:**
  - as cópias locais em `midia/peru-agua/fontes/`, com a linha de cada trecho na tabela;
  - 6 páginas de arquivo do Commons, lidas hoje (`/wiki/File:`, uma a uma);
  - 1 busca na web, sem resultado útil;
  - um teste de ponto nas camadas do canal (`out/peru-agua/_media/geo/`).
- **O que já estava confirmado.** O laudo-delta (`PA…`) e o laudo do roteiro (`F…`) entram pelo id quando a forma de tela é a mesma. Refiz toda conversão, abreviação, tradução e todo "ABOUT".
- **O que não se tocou:** nenhum site do gob.pe, nenhum web.archive.org, nenhum navegador. Nenhuma imagem foi aberta. Nada foi gravado no canal.
- **O placar dos 285:**
  - CONFIRMADA: 266;
  - DIVERGE: 4 linhas, que são 2 afirmações periféricas, cada uma em dois lugares do contrato;
  - NÃO ACHEI: 0;
  - REFUTADA: 0;
  - NÃO FOI CHECADO: 15, todos por esperar a caça;
  - NADA A CHECAR: 2, fora do M.

**NOTA: 8.5/10.** Todos os números, datas, citações, traduções e créditos de foto do lote batem com a fonte, e as contas fecham. Ficam dois rótulos periféricos que dizem mais que a fonte, nenhum na tese:
- a legenda "MOSTLY DECEMBER–MARCH" solta num gráfico que inclui Lima;
- "Sea temperature" sem o "surface" da origem.

Há também três créditos da UNESCO sem ano. Sem regressão contra o lote A da pesquisa (8/10): os achados de lá (PA014, PA024, PA043, PA044, PA013 e PA011) estão consertados na tela.

## As perguntas da tarefa, uma a uma

- **As proporções em silhueta.**
  - **s02 (na mãe s01), TA011:** 5 de 8 dá 62,5 %, e a fonte diz 62,53 % (Cuadro 2.3, «Pacífico … 62,53»). O desenho é fiel, a 0,03 ponto, e o rótulo diz o mesmo número.
  - **A s34 e a s31** são do lote B, e não as julguei aqui.
- **A marca "Translated from Spanish".** São quatro lugares, e em todos a tradução é fiel e a marca cobre todo o tempo do texto traduzido:
  - **s12 (TA075):** "paradójicamente" vira PARADOXICALLY. A marca fica de 2,666 a 4,0 s, com o rótulo.
  - **s13 (TA079):** «es el causante principal de la aridez de la Costa peruana» vira "the main cause of the aridity of the Peruvian coast". A marca fica de 1,5 a 5,166 s, o tempo da citação.
  - **s17 (TA107):** «una de las ciudades más grandes del mundo ubicada en un desierto» vira "one of the largest cities in the world located in a desert". A marca fica de 6,666 a 10,133 s.
  - **s27 (TA195):** a marca vai de 1,634 a 10,867 s e cobre as três traduções sem buraco: 1,634–3,267, 3,267–6,234 e 6,234–10,867.
  - Os achados PA014 e PA024 estão consertados.
- **s16.** O que está na tela:
  - só "Satellite image · June 1998" (TA097, Landsat 5 de 03/06/1998, PA019);
  - Piura só como o ponto da cidade (TA098);
  - "EL NIÑO 1997–98" como o nome do evento (TA095, PA023).
  - Não há "Piura flooded", nem tamanho ou nome da lagoa, nem "floodwater". O único defeito da cena é o "Sea temperature" (achado 2). A leitura que a imagem pode sugerir vai na O2.
- **s18.** Os dois números conferem:
  - "UP TO ABOUT 16,000 FT (5,000 m)" (TA113) traduz «hasta los 5 000 m s. n. m. aproximadamente, las cordilleras … bloquean … el flujo del aire húmedo». É a altura até onde o ar é barrado, e a nota prende o número às nuvens, nunca à crista. A conta: 5.000 m = 16.404 ft.
  - "MORE THAN 6 FT (2,013 mm)" (TA118): a normal da OMM de 1991–2020 dá «Sum … 2013» para Satipo (81201). A conta: 2.013 ÷ 304,8 = 6,60 ft. O crédito "WMO / SENAMHI" é fiel (TA120, nota).
- **s19.** A tela não diz de que lado da divisória fica Vilca:
  - Vilca aparece só no gráfico, sem distrito e sem altitude (TA127, TA216, TA262).
  - **A barra de Vilca não foi tirada no arquivo julgado.** O sha256 `d9769347…` ainda tem:
    - a barra (TA127, com `_condicao`);
    - o crédito "(Lima, Vilca)" (TA128);
    - "3 barras" nas notas de TA125 a TA127;
    - o R20 (TA216) e a G54 (TA262).
  - E agora há prova do lado. A tabela do SENAMHI 2016 dá a estação «VILCA -12.12 -75.83», que cai na vertente do Pacífico, a 9,6 km da divisória (O3). A barra pode ficar, e a decisão é da Sala.
  - O defeito da cena é outro: a legenda "MOSTLY DECEMBER–MARCH" (achado 1).
- **s20.** "OF THE FLOOD WATER FROM THE WETTER PART OF THE PACIFIC SIDE" (TA136) segue a frase da ANA de 2009, l. 2802–2811:
  - «En la cuenca húmeda de la vertiente del Pacífico … un exceso en las disponibilidades hídricas en el período de avenidas … desperdiciándose alrededor del 50% (17 542 MMC) que retornan directamente al mar»;
  - «wetter part of the Pacific side» é «cuenca húmeda de la vertiente del Pacífico», e «flood water» é o excesso do «período de avenidas». Bate com a voz.
  - Há uma ambiguidade da própria fonte sobre a base dos 50 % (O1).
- **s26.** Tudo confere:
  - o card "FRANCISCO PIZARRO · Spanish conquistador" (TA182, TA183, TA224), sem ano de nascimento (PA039);
  - "Painting, 1835" (TA180, TA225; PA037);
  - "LATE 1534" (TA181; PA040).
- **s27.** "JAUJA TOWN COUNCIL, NOVEMBER 1534 · IN BERNABÉ COBO (1639; 1882 ED.)" (TA188):
  - o arquivo diz "NOVEMBER", não "NOV.", e as duas formas servem. Pelo AP, mês sem dia vai por extenso;
  - "1539" não aparece em nenhum texto do lote;
  - os três grifos estão letra a letra na cópia OCR da p. 10 (Cobo, l. 2437–2445): «fria y de muchas nieves», «cua-/renta leguas de la mar y el camino muy despoblado», «por / cargarlos han sido muchos de ellos muertos» (TA189, TA191, TA193). As traduções são fiéis (TA190, TA192, TA194).
- **Os créditos e o "©".**
  - As 24 faixas de mapa do lote dizem `© MapTiler © OpenStreetMap contributors`, como manda a identidade §6.
  - Os 5 créditos de foto batem com a página de origem, lida hoje: o autor e a CC BY-SA 4.0. Delso pede «Diego Delso, delso.photo, License CC BY-SA», e a tela leva "Diego Delso, delso.photo".
  - Os créditos de dado levam instituição e ano ou período. Há duas exceções:
    - os três créditos da UNESCO (achado 3);
    - a régua "measured by Alpha Point", que é medida do canal, não dado de fonte.
  - O crédito de 2016 do "single tunnel" pede a Defensoría de 2025 ao lado (achado 4).

## A tabela (uma linha por item da lista; o id é o do script)

### A · `_textos_por_cena` (s01–s27), na ordem do arquivo

| id | ref | cena | papel | texto de tela [caminho] | veredito | o que a fonte diz (trecho literal) | fonte |
|---|---|---|---|---|---|---|---|
| TA001 | `_textos_por_cena[0]` | s01 | rotulo | (lugar_na_origem do s01-a) [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA002 | `_textos_por_cena[1]` | s01 | credito | © MapTiler © OpenStreetMap contributors [caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA003 | `_textos_por_cena[2]` | s01 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA004 | `_textos_por_cena[3]` | s01 | rotulo | PERU | CONFIRMADA | o mapa é o Peru inteiro (F001) | fatos.laudo.md F001; peru-ne.json |
| TA005 | `_textos_por_cena[4]` | s01 | rotulo | AMAZON SIDE | CONFIRMADA | Cuadro 2.3, «Amazonas … 74,53»; o polígono é a vertente-atlantico do HydroBASINS (PA003) | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA006 | `_textos_por_cena[5]` | s01 | cota | 74.5% OF THE LAND | CONFIRMADA | «Amazonas 957,82 74,53»: 74,53 → 74.5 (PA004, F003) | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA007 | `_textos_por_cena[6]` | s01 | credito | Source: ANA (Peru), National Water Resources Plan, 2012 data | CONFIRMADA | «SITUACIÓN ACTUAL (2012)»; «Como año base se consideró el 2012» (PA002); título «PLAN NACIONAL DE RECURSOS HÍDRICOS» (l. 18) | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA008 | `_textos_por_cena[7]` | s01 | cota | 97.9% OF THE WATER | CONFIRMADA | «97,91» → 97.9 (F003); a voz, «more than 97 percent», bate | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA009 | `_textos_por_cena[8]` | s01 | rotulo | PACIFIC SIDE | CONFIRMADA | a vertente-pacifico do HydroBASINS (PA003) | out/peru-agua/_media/geo/vertente-pacifico.json |
| TA010 | `_textos_por_cena[9]` | s01 | cota | 1.8% OF THE WATER | CONFIRMADA | «Pacífico … 34 136 1,76» → 1.8 (F006); a voz, «about 2 percent», bate | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA011 | `_textos_por_cena[10]` | s01 | cota | 62.5% OF THE PEOPLE (2012) | CONFIRMADA | «Pacífico … 18 801 417 62,53» → 62.5 (F008, F011). As 8 silhuetas com 5 acesas dão 62,5 %, a 0,03 ponto da fonte: o desenho é fiel | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA012 | `_textos_por_cena[11]` | s03 | rotulo | PERU [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA013 | `_textos_por_cena[12]` | s03 | rotulo | PERU [sem_caca] | CONFIRMADA | fallback: satélite da costa ao sul de Lima; nada mais específico que o país | nota da entrada; pontos-fontes.json |
| TA014 | `_textos_por_cena[13]` | s03 | rotulo | Lima [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA015 | `_textos_por_cena[14]` | s03 | rotulo | Lima [sem_caca] | CONFIRMADA | fallback: o ponto de Lima (Campo de Marte) no satélite | out/peru-agua/_media/geo/pontos-fontes.json |
| TA016 | `_textos_por_cena[15]` | s03 | cota | 0.3 INCHES (8 mm) | CONFIRMADA | «Lima … donde al año solo precipita 8 mm en forma de lloviznas»; 8 ÷ 25,4 = 0,315 → 0.3 (F013, F014) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 3276–3279 |
| TA017 | `_textos_por_cena[16]` | s03 | legenda | OF RAIN A YEAR | CONFIRMADA | «al año solo precipita 8 mm» | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 3277–3279 |
| TA018 | `_textos_por_cena[17]` | s03 | credito | Source: SENAMHI (Peru), 1981–2010 average | CONFIRMADA | «Se utilizaron 30 años consecutivos de datos meteorológicos, comprendidos en el periodo 1981 – 2010» | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 94–97 |
| TA019 | `_textos_por_cena[18]` | s03 | rotulo | Callao [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA020 | `_textos_por_cena[19]` | s03 | rotulo | Callao [sem_caca] | CONFIRMADA | fallback: a baía do Callao no satélite (F018) | fatos.laudo.md F018 |
| TA021 | `_textos_por_cena[20]` | s03 | cota | LIMA 9.6 M + CALLAO 1.0 M = 10.6 M | CONFIRMADA | «Lima Metropolitana 8 574 974 9 600 724» e «Callao 994 494 1 042 857» (2017, 2025); 9,6 + 1,0 = 10,6, e 9.600.724 + 1.042.857 = 10.643.581 → 10.6 (F015–F017) | midia/peru-agua/fontes/documento/inei-2026-censo2025-presentacion-resultados.txt l. 740–766 |
| TA022 | `_textos_por_cena[21]` | s03 | credito | Source: INEI (Peru), 2025 census | CONFIRMADA | «Fuente: Instituto Nacional de Estadística e Informática-Censos Nacionales de Población y Vivienda, 2017 y 2025» | midia/peru-agua/fontes/documento/inei-2026-censo2025-presentacion-resultados.txt l. 743 |
| TA023 | `_textos_por_cena[22]` | s03 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA024 | `_textos_por_cena[23]` | s04 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA025 | `_textos_por_cena[24]` | s04 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA026 | `_textos_por_cena[25]` | s04 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA027 | `_textos_por_cena[26]` | s04 | rotulo | Lima | CONFIRMADA | o ponto de Lima | pontos-fontes.json |
| TA028 | `_textos_por_cena[27]` | s04 | legenda | STORAGE CAPACITY FOR LIMA (2007) | CONFIRMADA | «Cuencas de Almacenamiento de Agua para Lima y Callao»; «CAPACIDAD TOTAL DE ALMACENAMIENTO 282 MMC»; «A Febrero 2007». O CAPACITY do PA044 está na tela | midia/peru-agua/fontes/mecanismo/jica-sedapal-2007-lamina.txt p. 3 |
| TA029 | `_textos_por_cena[28]` | s04 | heroi | MORE THAN HALF · AMAZON SIDE | CONFIRMADA | «157 MM3 CUENCA MARCAPOMACOCHA» sob «VERTIENTES DEL ATLANTICO», de 282: 55,7 % → «more than half» (F019, F020) | midia/peru-agua/fontes/mecanismo/jica-sedapal-2007-lamina.txt p. 3 |
| TA030 | `_textos_por_cena[29]` | s04 | credito | Source: SEDAPAL, 2007 | CONFIRMADA | a lâmina é da SEDAPAL («SEDAPAL HOY Y PERSPECTIVAS»), «A Febrero 2007» | midia/peru-agua/fontes/mecanismo/jica-sedapal-2007-lamina.txt p. 1–3 |
| TA031 | `_textos_por_cena[30]` | s04 | heroi | A SINGLE TUNNEL · EARLY 1960s | CONFIRMADA | «la primera fue ejecutada entre los años 1958 y 1962, tiempo en el cual se construyo el túnel trasandino (Cuevas - Milloc)»; o 2º (Marca II) «hasta la actualidad no se ejecuta» (SENAMHI 2016). Hoje: «dependiendo de un solo túnel trasandino» (Defensoría 2025). F022–F025. VOLÁTIL | midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt l. 3865–3866, 3919; midia/peru-agua/fontes/agua-de-lima/defensoria-informe-defensorial-239-2025.txt l. 4542 |
| TA032 | `_textos_por_cena[31]` | s04 | credito | Source: SENAMHI (Peru), 2016 | CONFIRMADA (nota LEVE: achado 4) | o SENAMHI 2016 sustenta 1958–1962 e o túnel único em 2016; o «single» de hoje é da Defensoría 2025 | midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt l. 302, 3866 |
| TA033 | `_textos_por_cena[32]` | s04 | nada | (nenhum texto) | NADA A CHECAR | o trecho declarado sem texto | — |
| TA034 | `_textos_por_cena[33]` | s06 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA035 | `_textos_por_cena[34]` | s06 | rotulo | CONTINENTAL DIVIDE | CONFIRMADA | «divortium acuarium o línea divisoria mayor de las aguas» (F027); a linha do HydroBASINS | fatos.laudo.md F027 |
| TA036 | `_textos_por_cena[35]` | s06 | rotulo | PACIFIC | CONFIRMADA | os rios do lado ocidental descem ao Pacífico (F028) | fatos.laudo.md F028 |
| TA037 | `_textos_por_cena[36]` | s06 | rotulo | Amazon | CONFIRMADA | o rio, em caixa normal, sobre o traço amazonas-ate-o-atlantico (F029) | fatos.laudo.md F029 |
| TA038 | `_textos_por_cena[37]` | s06 | rotulo | ATLANTIC | CONFIRMADA | drenam ao Atlântico pelo Amazonas (F029) | fatos.laudo.md F029 |
| TA039 | `_textos_por_cena[38]` | s06 | rotulo | LAKE TITICACA BASIN | CONFIRMADA | «Titicaca 48,91 3,81»; a vertente-titicaca (F030, PA003) | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA040 | `_textos_por_cena[39]` | s06 | rotulo | Lake Titicaca (Puno) | CONFIRMADA | Description: «View of Puno and the Titicaca lake, Peru»; 1 August 2015 (PA005; sem aviso, a fala é atemporal) | Commons, página do arquivo, lida hoje: https://commons.wikimedia.org/wiki/File:Vista_de_Puno_y_el_Titicaca,_Per%C3%BA,_2015-08-01,_DD_63.JPG |
| TA041 | `_textos_por_cena[40]` | s06 | credito | Diego Delso, delso.photo / Wikimedia Commons · CC BY-SA 4.0 | CONFIRMADA | Author «Diego Delso»; license «CC BY-SA 4.0»; o autor pede «Diego Delso, delso.photo, License CC BY-SA» | Commons, página do arquivo, lida hoje: idem |
| TA042 | `_textos_por_cena[41]` | s06 | rotulo | LIMA REGION | CONFIRMADA | o polígono é o departamento de Lima; a divisória corre dentro dele (PA007) | out/peru-agua/_media/geo/departamento-lima.json |
| TA043 | `_textos_por_cena[42]` | s06 | rotulo | Lima | CONFIRMADA | o ponto do centro (Campo de Marte) | pontos-fontes.json |
| TA044 | `_textos_por_cena[43]` | s06 | cota | LESS THAN 70 MILES | CONFIRMADA | medida do canal: 95,77 km = 59,51 mi até a divisória (PA006; F036: 66,92 mi até Marcapomacocha) | laudo-delta PA006 |
| TA045 | `_textos_por_cena[44]` | s06 | credito | Straight line, measured by Alpha Point | CONFIRMADA | a régua é medida do canal, em linha reta (PA006) | laudo-delta PA006 |
| TA046 | `_textos_por_cena[45]` | s06 | rotulo | Rímac | CONFIRMADA | o Rímac é um dos rios que desembocam no Pacífico (F039) | fatos.laudo.md F039 |
| TA047 | `_textos_por_cena[46]` | s08 | rotulo | Rímac [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA048 | `_textos_por_cena[47]` | s08 | rotulo | Rímac [sem_caca] | CONFIRMADA | fallback: o Rímac aceso no satélite | out/peru-agua/_media/geo/rio-rimac.json |
| TA049 | `_textos_por_cena[48]` | s08 | cota | ABOUT 90 MILES LONG (145 km) | CONFIRMADA | «Longitud de Río principal 145 km. aproximadamente»; 145 ÷ 1,609344 = 90,1 (PA008) | midia/peru-agua/fontes/documento/ana-2014-primer-monitoreo-rimac.txt l. 298–299 |
| TA050 | `_textos_por_cena[49]` | s08 | credito | Source: ANA (Peru), 2014 | CONFIRMADA | Informe Técnico da ANA de 2014 (PA008) | midia/peru-agua/fontes/documento/ana-2014-primer-monitoreo-rimac.txt |
| TA051 | `_textos_por_cena[50]` | s08 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA052 | `_textos_por_cena[51]` | s09 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA053 | `_textos_por_cena[52]` | s09 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA054 | `_textos_por_cena[53]` | s09 | rotulo | LORETO | CONFIRMADA | o departamento de Loreto (F042) | fatos.laudo.md F042 |
| TA055 | `_textos_por_cena[54]` | s09 | cota | ABOUT 6 PEOPLE PER SQ MI | CONFIRMADA | «Loreto (2,4 hab./km2)»; 2,4 × 2,58999 = 6,2 → «about 6» (PA010) | midia/peru-agua/fontes/documento/inei-2017-lib1539-cap01.txt l. 1912 |
| TA056 | `_textos_por_cena[55]` | s09 | legenda | 2.4 per km² · 2017 | CONFIRMADA | «Loreto (2,4 hab./km2)», densidade de 2017 | midia/peru-agua/fontes/documento/inei-2017-lib1539-cap01.txt l. 1745, 1912 |
| TA057 | `_textos_por_cena[56]` | s09 | credito | Source: INEI (Peru), 2017 census | CONFIRMADA | «Fuente: INEI - Censos Nacionales 2017: XII de Población y VII de Vivienda» | midia/peru-agua/fontes/documento/inei-2017-lib1539-cap01.txt l. 549 |
| TA058 | `_textos_por_cena[57]` | s09 | rotulo | Iquitos [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA059 | `_textos_por_cena[58]` | s09 | rotulo | Iquitos [sem_caca] | CONFIRMADA | fallback: o ponto de Iquitos, capital de Loreto (F045) | cidades-peru-ne.json; F045 |
| TA060 | `_textos_por_cena[59]` | s09 | credito | Source: Harvard Growth Lab, 2023 | CONFIRMADA | «April 2023, Paper: … Iquitos can only be reached by air or river» | midia/peru-agua/fontes/gente/hks-growthlab-loreto-remoteness.txt l. 86 |
| TA061 | `_textos_por_cena[60]` | s10 | folha_cabecalho | ANA (PERU) · PLAN NACIONAL DE RECURSOS HÍDRICOS · MEMORIA FINAL · P. 38 | CONFIRMADA | «PLAN NACIONAL DE RECURSOS HÍDRICOS» (rosto) e «Plan Nacional de Recursos Hídricos – Memoria Final» (cabeçalho); a página é a 38 (a seguinte imprime «39») | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 18, 43, 2041–2044 |
| TA062 | `_textos_por_cena[61]` | s10 | folha_texto | CUADRO 2.3. Distribución de los recursos hídricos en el territorio peruano / REGIÓN HIDROGRÁFICA ¦ SUPERFICIE (10³ KM²) ¦ (%) ¦ POBLACIÓN (HAB) ¦ (%) … (inteiro conferido) | CONFIRMADA | o título, as três linhas, o TOTAL e o «Fuente: Elaboración propia a partir de datos propios (2013) y de la ANA (2009).» letra a letra. O cabeçalho das colunas não sai no texto do PDF (é desenho): vale a leitura da pauta-documentos, e as unidades se provam pela conta (34.136 hm3 / 278.480 km2 = 0,12; 34.136 milhões de m3 / 18.801.417 hab = 1.815,6 m3/hab; as somas fecham: 30.067.181 hab, 1.935.621 hm3, 1.285,21 mil km2) | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF); out/peru-agua/_pesquisa/pauta-documentos.json l. 781 |
| TA063 | `_textos_por_cena[62]` | s10 | grifo_na_pagina | 21,67 | CONFIRMADA | «Pacífico 278,48 21,67» | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA064 | `_textos_por_cena[63]` | s10 | legenda | PACIFIC SIDE · 21.7% OF THE LAND | CONFIRMADA | «21,67» → 21.7 (F048) | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA065 | `_textos_por_cena[64]` | s10 | credito | Source: ANA (Peru), National Water Resources Plan, 2012 data | CONFIRMADA | idem PA002 | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA066 | `_textos_por_cena[65]` | s11 | legenda | WATER PER PERSON | CONFIRMADA | a coluna m3/hab/año: «1 815,61» e «189 167,18» | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA067 | `_textos_por_cena[66]` | s11 | rotulo | PACIFIC SIDE | CONFIRMADA | Pacífico (PA003) | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA068 | `_textos_por_cena[67]` | s11 | rotulo | AMAZON SIDE | CONFIRMADA | Amazonas (PA003) | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA069 | `_textos_por_cena[68]` | s11 | heroi | ABOUT 100× | CONFIRMADA | 189.167,18 / 1.815,61 = 104,2 → «about 100×» (F050) | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA070 | `_textos_por_cena[69]` | s11 | credito | Source: ANA (Peru), National Water Resources Plan, 2012 data | CONFIRMADA | idem PA002 | midia/peru-agua/fontes/documento/ana-pnrh-1416.txt l. 1988–2040 (PDF p. 38, conferido também pelo PyMuPDF) |
| TA071 | `_textos_por_cena[70]` | s12 | folha_cabecalho | ANA (PERU) · POLÍTICA Y ESTRATEGIA NACIONAL DE RECURSOS HÍDRICOS DEL PERÚ · 2009 | CONFIRMADA | capa: «Autoridad Nacional del Agua», «2009», «24/04/2009», «Política y Estrategia Nacional de Recursos Hídricos del Perú» | midia/peru-agua/fontes/documento/ana-2009-politica-estrategia-1073.txt l. 1–27 |
| TA072 | `_textos_por_cena[71]` | s12 | folha_texto | …el 1.8% restante se encuentra en la vertiente del Pacífico, en donde paradójicamente se concentra… | CONFIRMADA | «el 1.8% restante se encuentra en la vertiente del Pacífico, en donde paradójicamente se concentra el 65% …»: o trecho com reticências é letra a letra (PA013) | midia/peru-agua/fontes/documento/ana-2009-politica-estrategia-1073.txt l. 916–921 |
| TA073 | `_textos_por_cena[72]` | s12 | grifo_na_pagina | paradójicamente | CONFIRMADA | «paradójicamente» | midia/peru-agua/fontes/documento/ana-2009-politica-estrategia-1073.txt l. 920 |
| TA074 | `_textos_por_cena[73]` | s12 | rotulo | “PARADÓJICAMENTE” (PARADOXICALLY) | CONFIRMADA | o original entre aspas, letra a letra (em caixa alta); «paradoxically» é tradução fiel | midia/peru-agua/fontes/documento/ana-2009-politica-estrategia-1073.txt l. 920 |
| TA075 | `_textos_por_cena[74]` | s12 | legenda | Translated from Spanish | CONFIRMADA | a marca entra e sai com o rótulo (2,666–4,0 s) | a própria entrada |
| TA076 | `_textos_por_cena[75]` | s12 | credito | Source: ANA (Peru), 2009 | CONFIRMADA | o documento é de 24/04/2009 | midia/peru-agua/fontes/documento/ana-2009-politica-estrategia-1073.txt l. 24 |
| TA077 | `_textos_por_cena[76]` | s13 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA078 | `_textos_por_cena[77]` | s13 | citacao | “the main cause of the aridity of the Peruvian coast” | CONFIRMADA | «el Anticiclón … es el causante principal de la aridez de la Costa peruana»: tradução fiel, com a marca de tradução (o PA014 foi consertado) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 828–832 |
| TA079 | `_textos_por_cena[78]` | s13 | legenda | Translated from Spanish | CONFIRMADA | a marca cobre 1,5–5,166 s, todo o tempo da citação | a própria entrada |
| TA080 | `_textos_por_cena[79]` | s13 | credito | Source: SENAMHI (Peru), 2021 | CONFIRMADA | «Primera edición: Agosto de 2021» | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 57 |
| TA081 | `_textos_por_cena[80]` | s13 | rotulo | SOUTH PACIFIC HIGH | CONFIRMADA | «Su centro anticiclónico … (25ºS 90ºO)»: o anticiclone do Pacífico Sul (PA015) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 812–822 |
| TA082 | `_textos_por_cena[81]` | s13 | rotulo | HUMBOLDT CURRENT | CONFIRMADA | «la corriente de Humboldt» (PA015) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 822 |
| TA083 | `_textos_por_cena[82]` | s13 | legenda | Schematic | CONFIRMADA | as setas não têm geometria: o esquema se declara (PA015) | a própria entrada |
| TA084 | `_textos_por_cena[83]` | s13 | legenda | Satellite image · June 2018 | CONFIRMADA | «Date Acquired: 6/20/2018» (PA016) | https://modis.gsfc.nasa.gov/gallery/individual.php?db_date=2018-06-24 (PA016) |
| TA085 | `_textos_por_cena[84]` | s14 | rotulo | COLD SEA | CONFIRMADA | «la superficie fría del mar»; o mar «anómalamente baja» (F055, F058) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 983, 820–822 |
| TA086 | `_textos_por_cena[85]` | s14 | rotulo | WARM LID | CONFIRMADA | «El mar frío, la subsidencia … y la inversión térmica producida, limitan el ascenso del aire para formar nubes productoras de lluvias» (F059, F060) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 985–989 |
| TA087 | `_textos_por_cena[86]` | s14 | credito | Source: SENAMHI (Peru), 2021 | CONFIRMADA | o mecanismo é o do SENAMHI 2021 | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 985–989 |
| TA088 | `_textos_por_cena[87]` | s15 | rotulo | (lugar_na_origem do s15-a) [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA089 | `_textos_por_cena[88]` | s15 | rotulo | (lugar_na_origem do s15-b) [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA090 | `_textos_por_cena[89]` | s15 | legenda | Satellite image · June 2015 [sem_caca] | CONFIRMADA | «Date Acquired: 6/7/2015» (PA017) | https://modis.gsfc.nasa.gov/gallery/individual.php?db_date=2015-06-18 (PA017) |
| TA091 | `_textos_por_cena[90]` | s15 | rotulo | Lima [sem_caca] | CONFIRMADA | fallback 2: o ponto de Lima, sem afirmar a neblina | pontos-fontes.json |
| TA092 | `_textos_por_cena[91]` | s15 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA093 | `_textos_por_cena[92]` | s16 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA094 | `_textos_por_cena[93]` | s16 | rotulo | EL NIÑO | CONFIRMADA | no El Niño o anticiclone se debilita (F063) | fatos.laudo.md F063 |
| TA095 | `_textos_por_cena[94]` | s16 | rotulo | EL NIÑO 1997–98 | CONFIRMADA | NOAA PMEL: «Two of the largest El Niño events on record occurred in 1982-1983 and in 1997-1998» (PA023); é o nome do evento, não legenda da água | midia/peru-agua/fontes/mecanismo/noaa-pmel-what-is-el-nino.txt (PA023) |
| TA096 | `_textos_por_cena[95]` | s16 | legenda | Sea temperature anomalies, March–August 1997 | DIVERGE (periférica) | o título da origem: «Sea surface temperature anomalies from March to August 1997 showing evolution of major El Nino». A tela tira o «surface»: o mapa mede a superfície do mar, não o mar | https://commons.wikimedia.org/wiki/File:Sea_surface_temperature_anomalies_from_March_to_August_1997_showing_evolution_of_major_El_Nino_(2268-446).jpg (PA018) |
| TA097 | `_textos_por_cena[96]` | s16 | legenda | Satellite image · June 1998 | CONFIRMADA | datetime «1998-06-03T15:11:49Z», landsat-5 (PA019) | https://planetarycomputer.microsoft.com/api/stac/v1/collections/landsat-c2-l2/items/LT05_L2SP_011064_19980603_02_T1 (PA019) |
| TA098 | `_textos_por_cena[97]` | s16 | rotulo | Piura | CONFIRMADA | só o ponto do NE, dentro do recorte (PA020); nenhum texto liga a cidade à água (a forma do PA021 não está na tela) | cidades-peru-ne.json (PA020) |
| TA099 | `_textos_por_cena[98]` | s17 | rotulo | Lima | CONFIRMADA | o título do pluviômetro | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 3276 |
| TA100 | `_textos_por_cena[99]` | s17 | cota | 0.3 INCHES (8 mm) | CONFIRMADA | 8 mm → 0.3 in (F013, F014) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 3276–3279 |
| TA101 | `_textos_por_cena[100]` | s17 | legenda | OF RAIN A YEAR | CONFIRMADA | «al año» | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 3277 |
| TA102 | `_textos_por_cena[101]` | s17 | legenda | ALMOST ALL OF IT DRIZZLE | CONFIRMADA | «solo precipita 8 mm en forma de lloviznas»: a fonte diz «todo»; «almost all» é a voz e fica aquém da fonte | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 3278–3279 |
| TA103 | `_textos_por_cena[102]` | s17 | credito | Source: SENAMHI (Peru), 1981–2010 average | CONFIRMADA | período 1981–2010 | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 94–97 |
| TA104 | `_textos_por_cena[103]` | s17 | rotulo | Lima [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA105 | `_textos_por_cena[104]` | s17 | rotulo | Lima [sem_caca] | CONFIRMADA | fallback: o satélite sobre Lima | pontos-fontes.json |
| TA106 | `_textos_por_cena[105]` | s17 | citacao | “one of the largest cities in the world located in a desert” | CONFIRMADA | «es una de las ciudades más grandes del mundo ubicada en un desierto»: tradução fiel, com a marca (o PA024 foi consertado) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 3276–3277 |
| TA107 | `_textos_por_cena[106]` | s17 | legenda | Translated from Spanish | CONFIRMADA | a marca cobre 6,666–10,133 s, todo o tempo da citação | a própria entrada |
| TA108 | `_textos_por_cena[107]` | s17 | credito | Source: SENAMHI (Peru), 2021 | CONFIRMADA | «Primera edición: Agosto de 2021» | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 57 |
| TA109 | `_textos_por_cena[108]` | s17 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA110 | `_textos_por_cena[109]` | s18 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA111 | `_textos_por_cena[110]` | s18 | rotulo | ANDES | CONFIRMADA | as cordilheiras do centro e do sul (F071) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 1078–1082 |
| TA112 | `_textos_por_cena[111]` | s18 | legenda | Schematic | CONFIRMADA | a forma não está no disco: o esquema se declara | a própria entrada |
| TA113 | `_textos_por_cena[112]` | s18 | cota | UP TO ABOUT 16,000 FT (5,000 m) | CONFIRMADA | «hasta los 5 000 m s. n. m. aproximadamente, las cordilleras del centro y del sur del Perú bloquean en gran medida el flujo del aire húmedo e inestable amazónico»: é a altura até onde o ar é barrado, e a nota prende o número às nuvens, nunca à crista. 5.000 m = 16.404 ft → «about 16,000» (F071, F072) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 1077–1083 |
| TA114 | `_textos_por_cena[113]` | s18 | credito | Source: SENAMHI (Peru), 2021 | CONFIRMADA | SENAMHI 2021, §1.3.3.1 | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 1075–1077 |
| TA115 | `_textos_por_cena[114]` | s18 | rotulo | EASTERN SLOPES | CONFIRMADA | as vertentes favorecem as nuvens de chuva orográfica (F073, F073b) | fatos.laudo.md F073 |
| TA116 | `_textos_por_cena[115]` | s18 | rotulo | Satipo | CONFIRMADA | Description: «An aerial photo of Satipo City taken from the perspective of the local radio station»; 24 March 2018 (PA026) | Commons, página do arquivo, lida hoje: https://commons.wikimedia.org/wiki/File:Satipo_Aerial.jpg |
| TA117 | `_textos_por_cena[116]` | s18 | credito | Mr AndrewHolmes / Wikimedia Commons · CC BY-SA 4.0 | CONFIRMADA | Author «Mr AndrewHolmes»; «Creative Commons Attribution-Share Alike 4.0 International» | Commons, página do arquivo, lida hoje: idem |
| TA118 | `_textos_por_cena[117]` | s18 | cota | MORE THAN 6 FT (2,013 mm) | CONFIRMADA | «81201,1,Sum,… 2013»; 2.013 mm / 304,8 = 6,60 ft → «more than 6 ft» (F074–F076). O ponto: a estação fica a uns 3,5 km da cidade (PA025) | midia/peru-agua/fontes/mecanismo/wmo-normals-9120/Satipo_81201.csv l. 1, 9, 23 |
| TA119 | `_textos_por_cena[118]` | s18 | legenda | OF RAIN A YEAR | CONFIRMADA | «Precipitation_Total», soma anual | midia/peru-agua/fontes/mecanismo/wmo-normals-9120/Satipo_81201.csv l. 20–23 |
| TA120 | `_textos_por_cena[119]` | s18 | credito | Source: WMO / SENAMHI (Peru), 1991–2020 average | CONFIRMADA (nota) | «World Meteorological Organization Climate Normals for 1991-2020», «Country_Name,PERU». O arquivo não nomeia o SENAMHI, o serviço peruano que manda as normais à OMM: «WMO / SENAMHI» se lê como a OMM com os dados do SENAMHI, e é fiel | midia/peru-agua/fontes/mecanismo/wmo-normals-9120/Satipo_81201.csv l. 1, 6 |
| TA121 | `_textos_por_cena[120]` | s19 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA122 | `_textos_por_cena[121]` | s19 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA123 | `_textos_por_cena[122]` | s19 | rotulo | Lima | CONFIRMADA | o ponto de Lima | pontos-fontes.json |
| TA124 | `_textos_por_cena[123]` | s19 | rotulo | Matucana | CONFIRMADA | a estação 74402, «11¦50¦21¦S,76¦22¦41¦W,2417», na vertente do Pacífico (PA003, PA027) | midia/peru-agua/fontes/mecanismo/wmo-normals-9120/Matucana_74402.csv l. 9 |
| TA125 | `_textos_por_cena[124]` | s19 | cota | LIMA · 0.3 INCHES (8 mm) | CONFIRMADA | 8 mm (F013) | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 3278 |
| TA126 | `_textos_por_cena[125]` | s19 | cota | MATUCANA · 12 INCHES (312 mm) | CONFIRMADA | «74402,1,Sum,… 311.6» → 312 mm; 311,6 / 25,4 = 12,3 in → 12 (PA027) | midia/peru-agua/fontes/mecanismo/wmo-normals-9120/Matucana_74402.csv l. 23 |
| TA127 | `_textos_por_cena[126]` | s19 | cota | VILCA · 38 INCHES (963 mm) | CONFIRMADA | «se ubica la estación meteorológica de Vilca …, donde las lluvias anuales bordean los 963 mm»; 963 / 25,4 = 37,9 → 38 (PA028). O LADO, prova nova: a tabela do SENAMHI 2016 dá «VILCA -12.12 -75.83», que cai na vertente do Pacífico, a 9,6 km da divisória (teste de ponto nas camadas do canal). A tela não diz o lado; a dúvida do PA030 se resolve | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 3316–3320; midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt l. 8505 (p. 69) |
| TA128 | `_textos_por_cena[127]` | s19 | credito | Sources: SENAMHI (Peru), 1981–2010 average (Lima, Vilca); WMO, 1991–2020 average (Matucana) | CONFIRMADA | cada barra com o seu dono e período: SENAMHI 1981–2010 (l. 94–97), OMM 1991–2020 | midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt; wmo-normals-9120/ |
| TA129 | `_textos_por_cena[128]` | s19 | legenda | MOSTLY DECEMBER–MARCH | DIVERGE (periférica, recorte) | Matucana: dez.–mar. = 261,3 de 311,6 mm (83,9 %); Vilca: «máximos acumulados en el verano con un pico de 178 mm en enero». Mas Lima, a 1ª barra do mesmo gráfico: «8 mm en forma de lloviznas, con un máximo de 1 a 2 mm entre julio y setiembre». Solta no gráfico, a legenda diz de Lima o contrário da fonte | midia/peru-agua/fontes/mecanismo/wmo-normals-9120/Matucana_74402.csv l. 23; midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt l. 3278–3280, 3320–3322 |
| TA130 | `_textos_por_cena[129]` | s19 | rotulo | (lugar_na_origem do s19-a) [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA131 | `_textos_por_cena[130]` | s19 | rotulo | (lugar_na_origem do s19-b) [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA132 | `_textos_por_cena[131]` | s20 | rotulo | (lugar_na_origem do s20-a) [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA133 | `_textos_por_cena[132]` | s20 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA134 | `_textos_por_cena[133]` | s20 | credito | Source: ANA (Peru), 2009 | CONFIRMADA | o documento é de 24/04/2009 | midia/peru-agua/fontes/documento/ana-2009-politica-estrategia-1073.txt l. 24 |
| TA135 | `_textos_por_cena[134]` | s20 | heroi | ABOUT HALF | CONFIRMADA (observação O1) | «desperdiciándose alrededor del 50% (17 542 MMC) que retornan directamente al mar» (F081) | midia/peru-agua/fontes/documento/ana-2009-politica-estrategia-1073.txt l. 2809–2811 |
| TA136 | `_textos_por_cena[135]` | s20 | legenda | OF THE FLOOD WATER FROM THE WETTER PART OF THE PACIFIC SIDE | CONFIRMADA (observação O1) | «En la cuenca húmeda de la vertiente del Pacífico, alrededor del 80% de las precipitaciones se presentan entre los meses de diciembre a marzo, generando un exceso en las disponibilidades hídricas en el período de avenidas … desperdiciándose alrededor del 50%». «wetter part of the Pacific side» = «cuenca húmeda de la vertiente del Pacífico»; «flood water» = o excesso do «período de avenidas». A tela é a frase da voz, palavra por palavra | midia/peru-agua/fontes/documento/ana-2009-politica-estrategia-1073.txt l. 2802–2811 |
| TA137 | `_textos_por_cena[136]` | s20 | legenda | RUNS BACK TO THE SEA UNUSED | CONFIRMADA | «que retornan directamente al mar por la escasa regulación»; «desperdiciándose» → «unused» | midia/peru-agua/fontes/documento/ana-2009-politica-estrategia-1073.txt l. 2809–2811 |
| TA138 | `_textos_por_cena[137]` | s21 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA139 | `_textos_por_cena[138]` | s21 | rotulo | COASTAL DESERT | CONFIRMADA | «DESIERTO COSTERO» | midia/peru-agua/fontes/mecanismo/minam-2019-mapa-ecosistemas.txt l. 302 |
| TA140 | `_textos_por_cena[139]` | s21 | cota | ABOUT 27,000 SQ MI (71,000 km²) | CONFIRMADA | «DESIERTO COSTERO … 7,107,338.20» ha = 71.073 km2 → 71,000; = 27.442 sq mi → «about 27,000» (PA031) | midia/peru-agua/fontes/mecanismo/minam-2019-mapa-ecosistemas.txt l. 302–310 |
| TA141 | `_textos_por_cena[140]` | s21 | legenda | Mapped natural desert; farms, cities and mines not counted | CONFIRMADA | «no se consideran los espacios ya transformados, como las zonas agrícolas, urbanas, mineras, entre otros» | midia/peru-agua/fontes/mecanismo/minam-2019-mapa-ecosistemas.txt l. 259–261 |
| TA142 | `_textos_por_cena[141]` | s21 | credito | Source: MINAM (Peru), 2019 | CONFIRMADA | «Primera edición, noviembre de 2019» | midia/peru-agua/fontes/mecanismo/minam-2019-mapa-ecosistemas.txt l. 29 |
| TA143 | `_textos_por_cena[142]` | s21 | rotulo | Piura | CONFIRMADA | o deserto costeiro vai de Piura a Tacna (F085) | fatos.laudo.md F085 |
| TA144 | `_textos_por_cena[143]` | s21 | rotulo | Tacna | CONFIRMADA | idem (F085, F086) | fatos.laudo.md F085 |
| TA145 | `_textos_por_cena[144]` | s21 | rotulo | CHILE | CONFIRMADA | Tacna é o departamento da fronteira com o Chile (F086, composição declarada no laudo do roteiro) | fatos.laudo.md F086 |
| TA146 | `_textos_por_cena[145]` | s21 | nada | (nenhum texto) | NADA A CHECAR | o trecho declarado sem texto | — |
| TA147 | `_textos_por_cena[146]` | s22 | rotulo | Caral [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA148 | `_textos_por_cena[147]` | s22 | rotulo | Caral [sem_caca] | CONFIRMADA | fallback 1: «Caral- Pirámide Mayor» (veredito da reserva; a conferência nova desta janela é condição da entrada); fallback 2: o ponto de Caral | conferencia-midia.json (s22, reserva) |
| TA149 | `_textos_por_cena[148]` | s22 | cota | 3000–1800 B.C. | CONFIRMADA | «between the years 3000 to 1800 B.C.» (PA032) | midia/peru-agua/fontes/gente/unesco-1269-caral.txt l. 231 |
| TA150 | `_textos_por_cena[149]` | s22 | legenda | ABOUT 90 MILES NORTH OF LIMA | CONFIRMADA | 87,65 mi, rumo 338° (PA033, F091) | laudo-delta PA033 |
| TA151 | `_textos_por_cena[150]` | s22 | credito | Sources: UNESCO; distance measured by Alpha Point (straight line) | CONFIRMADA (nota LEVE: achado 3) | as datas são da UNESCO e a distância é medida do canal; o crédito não tem ano | midia/peru-agua/fontes/gente/unesco-1269-caral.txt l. 231, 244 |
| TA152 | `_textos_por_cena[151]` | s22 | credito | Soto Caldaa Cesar / Wikimedia Commons · CC BY-SA 4.0 [sem_caca] | CONFIRMADA | Author «Soto Caldaa Cesar»; «Creative Commons Attribution-Share Alike 4.0 International»; 27 November 2022 | Commons, página do arquivo, lida hoje: https://commons.wikimedia.org/wiki/File:Pir%C3%A1mide_Mayor_-_Caral.jpg |
| TA153 | `_textos_por_cena[152]` | s22 | rotulo | Pirámide Mayor, Caral | CONFIRMADA | o arquivo se chama «Vista frontal de la imponente Pirámide Mayor de la Ciudad Sagrada de Caral»; caption «Fotografía del frontis del Edificio Piramidal Mayor» (PA034) | Commons, página do arquivo, lida hoje: https://commons.wikimedia.org/wiki/File:Vista_frontal_de_la_imponente_Pir%C3%A1mide_Mayor_de_la_Ciudad_Sagrada_de_Caral.jpg |
| TA154 | `_textos_por_cena[153]` | s22 | citacao | “the oldest centre of civilization in the Americas” | CONFIRMADA | «… is the oldest centre of civilization in the Americas»: letra a letra, com o «centre» da fonte (F092) | midia/peru-agua/fontes/gente/unesco-1269-caral.txt l. 198 |
| TA155 | `_textos_por_cena[154]` | s22 | credito | Source: UNESCO | CONFIRMADA (nota LEVE: achado 3) | a página é da UNESCO; sem ano no crédito | midia/peru-agua/fontes/gente/unesco-1269-caral.txt l. 244 |
| TA156 | `_textos_por_cena[155]` | s22 | credito | JOSE MORALES CIENCIA POLITICA UNMSM / Wikimedia Commons · CC BY-SA 4.0 | CONFIRMADA | Author «JOSE MORALES CIENCIA POLITICA UNMSM»; «Creative Commons Attribution-Share Alike 4.0 International»; 27 November 2022 | Commons, página do arquivo, lida hoje: a mesma da frontal |
| TA157 | `_textos_por_cena[156]` | s23 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA158 | `_textos_por_cena[157]` | s23 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA159 | `_textos_por_cena[158]` | s23 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA160 | `_textos_por_cena[159]` | s23 | credito | © MapTiler © OpenStreetMap contributors [sem_caca] | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA161 | `_textos_por_cena[160]` | s23 | rotulo | Supe River | CONFIRMADA | «overlooking the green valley of the Supe river» (F089) | midia/peru-agua/fontes/gente/unesco-1269-caral.txt l. 198 |
| TA162 | `_textos_por_cena[161]` | s23 | rotulo | Moche Valley | CONFIRMADA | «the once fertile river valley of Moche» (F095) | midia/peru-agua/fontes/gente/unesco-366-chanchan.txt l. 236 |
| TA163 | `_textos_por_cena[162]` | s23 | rotulo | Chan Chan [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA164 | `_textos_por_cena[163]` | s23 | rotulo | Chan Chan [sem_caca] | CONFIRMADA | fallback: o ponto de Chan Chan (F097) | fatos.laudo.md F097 |
| TA165 | `_textos_por_cena[164]` | s23 | legenda | Chimú capital | CONFIRMADA | «Its capital Chan Chan»; «the former Chimú capital» | midia/peru-agua/fontes/gente/unesco-366-chanchan.txt l. 236, 247 |
| TA166 | `_textos_por_cena[165]` | s23 | citacao | “the largest earthen city of pre-Columbian America” | CONFIRMADA | «The planning of the largest earthen city of pre-Columbian America is an absolute masterpiece»: letra a letra (F097) | midia/peru-agua/fontes/gente/unesco-366-chanchan.txt l. 240 |
| TA167 | `_textos_por_cena[166]` | s23 | credito | Source: UNESCO | CONFIRMADA (nota LEVE: achado 3) | a página é da UNESCO; sem ano no crédito | midia/peru-agua/fontes/gente/unesco-366-chanchan.txt l. 275 |
| TA168 | `_textos_por_cena[167]` | s23 | rotulo | Chicama Valley | CONFIRMADA | «The Moche and Chicama rivers once supplied an intricate irrigation system via an approximately 80 kilometre long canal» (PA035) | midia/peru-agua/fontes/gente/unesco-366-chanchan.txt l. 239 |
| TA169 | `_textos_por_cena[168]` | s23 | rotulo | Chan Chan | CONFIRMADA | o ponto de chegada do traço | midia/peru-agua/fontes/gente/unesco-366-chanchan.txt l. 239 |
| TA170 | `_textos_por_cena[169]` | s23 | legenda | Approximate route | CONFIRMADA | o traço é esquema e se declara | a própria entrada |
| TA171 | `_textos_por_cena[170]` | s23 | cota | CANAL · ABOUT 50 MILES (80 km) | CONFIRMADA | «an approximately 80 kilometre long canal»; 80 km = 49,7 mi → «about 50» (F099, F100) | midia/peru-agua/fontes/gente/unesco-366-chanchan.txt l. 239 |
| TA172 | `_textos_por_cena[171]` | s23 | credito | Source: UNESCO | CONFIRMADA (nota LEVE: achado 3) | o número é da UNESCO; o crédito não tem ano | midia/peru-agua/fontes/gente/unesco-366-chanchan.txt l. 239, 275 |
| TA173 | `_textos_por_cena[172]` | s23 | rotulo | Nazca | CONFIRMADA | a grafia do roteiro («near Nazca») | roteiros/peru-agua/roteiro-narrador.md l. 36 |
| TA174 | `_textos_por_cena[173]` | s23 | credito | Source: Lasaponara & Masini, 2012 | CONFIRMADA | «R. Lasaponara … N. Masini … DOI 10.1007/978-90-481-8801-7_12, © Springer Science+Business Media B.V. 2012»: os dois assinam o capítulo (PA036) | midia/peru-agua/fontes/gente/lasaponara-masini-puquios-cap12.txt l. 27–37 |
| TA175 | `_textos_por_cena[174]` | s23 | rotulo | Cantalloc, Nazca | CONFIRMADA | Description: «Cantalloc subterranean aqueducts, Nazca, Peru», nas duas fotos (DD 01 e DD 04), 29 July 2015 | Commons, página do arquivo, lida hoje: https://commons.wikimedia.org/wiki/File:Acueductos_subterr%C3%A1neos_de_Cantalloc,_Nazca,_Per%C3%BA,_2015-07-29,_DD_01.JPG e _DD_04.JPG |
| TA176 | `_textos_por_cena[175]` | s23 | legenda | *puquios* | CONFIRMADA | «an underground aqueducts called puquios» | midia/peru-agua/fontes/gente/lasaponara-masini-puquios-cap12.txt l. 22 |
| TA177 | `_textos_por_cena[176]` | s23 | credito | Diego Delso, delso.photo / Wikimedia Commons · CC BY-SA 4.0 | CONFIRMADA | Author «Diego Delso»; CC BY-SA 4.0; o autor pede «Diego Delso, delso.photo, License CC BY-SA» (DD 01 e DD 04) | Commons, página do arquivo, lida hoje: idem |
| TA178 | `_textos_por_cena[177]` | s23 | rotulo | Cantalloc [caca] | NÃO FOI CHECADO — espera a caça | o texto sai do `lugar_na_origem` do veredito do item da caça, que ainda não existe (a caça é de manhã, com o Lucas) | conferencia-midia.json (sem o item) |
| TA179 | `_textos_por_cena[178]` | s23 | rotulo | Cantalloc [sem_caca] | CONFIRMADA (nota) | fallback: o ponto do OSM, «Acueductos de Cantayoq» (PA036): Cantayoq e Cantalloc são grafias do mesmo lugar; a tela segue a do Commons | out/peru-agua/_media/geo/pontos-osm.json |
| TA180 | `_textos_por_cena[179]` | s26 | aviso_ano | Painting, 1835 | CONFIRMADA | POP/Joconde: «Millésime de création : 1835» (PA037); é pintura (Coutan, Versailles, MV 3168) | https://www.pop.culture.gouv.fr/notice/joconde/000PE006202 (PA037) |
| TA181 | `_textos_por_cena[180]` | s26 | cota | LATE 1534 | CONFIRMADA | «En la ciudad Jauja á 28 dias del mes de Noviembre de 1534» e a nota 3: «El MS. que poseemos dice 1539; pero indudablemente es error del copista, pues la verdadera fecha es 1534» (PA040). Na tela: nunca 1539, nunca o dia | midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt l. 2391, 2410–2412 |
| TA182 | `_textos_por_cena[181]` | s26 | card_nome | FRANCISCO PIZARRO | CONFIRMADA | «al muy magnífico señor Gobernador Francisco Pizarro» | midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt l. 2397 |
| TA183 | `_textos_por_cena[182]` | s26 | card_cargo | Spanish conquistador | CONFIRMADA | UNESCO: «founded by Spanish conqueror Francisco Pizarro in January 1535» (PA038). Sem ano de nascimento (PA039) | midia/peru-agua/fontes/gente/unesco-500-lima.txt l. 235 |
| TA184 | `_textos_por_cena[183]` | s26 | credito | Source: Jauja town council, November 1534, in Bernabé Cobo (1639; 1882 ed.) | CONFIRMADA | o auto de 28/11/1534, copiado por Cobo («año de 1639»), na edição de «MAYO, 1882» (PA042) | midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt l. 2391; PB001 |
| TA185 | `_textos_por_cena[184]` | s26 | credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6: «O crédito na tela: `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa…»; a janela é de mapa da MapTiler | marca/identidade.md l. 863 |
| TA186 | `_textos_por_cena[185]` | s26 | rotulo | Jauja | CONFIRMADA | o ponto do NE e o do OSM, na vertente do Atlântico (PA041) | cidades-peru-ne.json; pontos-osm.json |
| TA187 | `_textos_por_cena[186]` | s26 | legenda | Approximate route | CONFIRMADA | a seta é esquema e se declara | a própria entrada |
| TA188 | `_textos_por_cena[187]` | s27 | legenda | JAUJA TOWN COUNCIL, NOVEMBER 1534 · IN BERNABÉ COBO (1639; 1882 ED.) | CONFIRMADA | idem PA042: «Noviembre de 1534», «año de 1639», «1882»; nunca 1539 | midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt l. 2391 |
| TA189 | `_textos_por_cena[188]` | s27 | grifo_na_pagina | fria y de muchas nieves | CONFIRMADA | «asi por ser fria y de muchas nieves»: letra a letra (pela cópia OCR da página; 0 imagens) | midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt l. 2437 |
| TA190 | `_textos_por_cena[189]` | s27 | traducao | cold, with much snow | CONFIRMADA | «fria y de muchas nieves» = «cold, with much snow»: fiel | midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt l. 2437 |
| TA191 | `_textos_por_cena[190]` | s27 | grifo_na_pagina | cuarenta leguas de la mar y el camino muy despoblado | CONFIRMADA | «por estar cua-/renta leguas de la mar y el camino muy despoblado»: letra a letra (a palavra quebra na linha) | midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt l. 2438–2439 |
| TA192 | `_textos_por_cena[191]` | s27 | traducao | forty leagues from the sea, and the road very deserted | CONFIRMADA | «despoblado» = «deserted» (sem gente): fiel | midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt l. 2438–2439 |
| TA193 | `_textos_por_cena[192]` | s27 | grifo_na_pagina | por cargarlos han sido muchos de ellos muertos | CONFIRMADA | «que por / cargarlos han sido muchos de ellos muertos»: letra a letra | midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt l. 2444–2445 |
| TA194 | `_textos_por_cena[193]` | s27 | traducao | from being loaded with burdens, many of them have died | CONFIRMADA | o «cargarlos» retoma «traerlos cargados con bastimentos» (l. 2443): «loaded with burdens» é fiel; «have died» = «han sido … muertos» | midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt l. 2442–2445 |
| TA195 | `_textos_por_cena[194]` | s27 | legenda | Translated from Spanish | CONFIRMADA | a marca cobre 1,634–10,867 s: as três traduções (1,634–3,267; 3,267–6,234; 6,234–10,867), sem buraco | a própria entrada |

### B · `rotulos_dado` das cenas s01–s27

| id | ref | cena | na_tela | veredito | o que a fonte diz / a linha da tabela A |
|---|---|---|---|---|---|
| TA196 | `rotulos_dado[0]` | s01 (s02) | 74.5% OF THE LAND | CONFIRMADA | valor_exato: 74,53 % · PA004, F003; = TA006 |
| TA197 | `rotulos_dado[1]` | s01 (s02) | 97.9% OF THE WATER | CONFIRMADA | valor_exato: 97,91 % · F003; = TA008 |
| TA198 | `rotulos_dado[2]` | s01 (s02), s51 | 1.8% OF THE WATER | CONFIRMADA | valor_exato: 1,76 % · F006; = TA010 (a s51 é do lote B) |
| TA199 | `rotulos_dado[3]` | s01 (s02) | 62.5% OF THE PEOPLE (2012) | CONFIRMADA | valor_exato: 62,53 % · F008, F011; 5 de 8 = 62,5 %; = TA011 |
| TA200 | `rotulos_dado[4]` | s03, s17 | 0.3 INCHES (8 mm) | CONFIRMADA | valor_exato: 8 mm = 0,315 in · F013, F014; = TA016, TA100 |
| TA201 | `rotulos_dado[5]` | s03, s34 | LIMA 9.6 M + CALLAO 1.0 M = 10.6 M | CONFIRMADA | valor_exato: 10.643.581 · F015–F017; = TA021 (a s34 é do lote B) |
| TA202 | `rotulos_dado[6]` | s04, s39 | MORE THAN HALF · AMAZON SIDE | CONFIRMADA | valor_exato: 157 de 282 hm³ = 55,7 % · F019, F020, PA044; = TA028, TA029 (a s39 é do lote B) |
| TA203 | `rotulos_dado[7]` | s04 | A SINGLE TUNNEL · EARLY 1960s | CONFIRMADA | valor_exato: 1958–1962 · F022–F025; = TA031 (volátil) |
| TA204 | `rotulos_dado[8]` | s06 (s07) | LESS THAN 70 MILES | CONFIRMADA | valor_exato: 59,5 mi · PA006; = TA044 |
| TA205 | `rotulos_dado[9]` | s08 | ABOUT 90 MILES LONG (145 km) | CONFIRMADA | valor_exato: 145 km = 90,1 mi · PA008; = TA049 |
| TA206 | `rotulos_dado[10]` | s09 | ABOUT 6 PEOPLE PER SQ MI | CONFIRMADA | valor_exato: 2,4 hab./km² = 6,2/sq mi · PA010; = TA055 |
| TA207 | `rotulos_dado[11]` | s10 | PACIFIC SIDE · 21.7% OF THE LAND | CONFIRMADA | valor_exato: 21,67 % · F048; = TA064 |
| TA208 | `rotulos_dado[12]` | s11 | ABOUT 100× | CONFIRMADA | valor_exato: 189.167,18 ÷ 1.815,61 = 104,2× · F050; = TA069 |
| TA209 | `rotulos_dado[13]` | s16 | EL NIÑO 1997–98 | CONFIRMADA | valor_exato: — · PA023; = TA095 |
| TA210 | `rotulos_dado[14]` | s16 | Sea temperature anomalies, March–August 1997 | DIVERGE (periférica) | valor_exato: — · a origem diz «Sea surface temperature anomalies»; = TA096 (achado 2) |
| TA211 | `rotulos_dado[15]` | s13, s15, s16 | Satellite image · June 2018 / June 2015 / June 1998 | CONFIRMADA | valor_exato: — · PA016, PA017, PA019; = TA084, TA090, TA097 |
| TA212 | `rotulos_dado[16]` | s18 | UP TO ABOUT 16,000 FT (5,000 m) | CONFIRMADA | valor_exato: 5.000 m = 16.404 ft · F071, F072; preso às nuvens; = TA113 |
| TA213 | `rotulos_dado[17]` | s18 | MORE THAN 6 FT (2,013 mm) | CONFIRMADA | valor_exato: 2.013 mm = 79,25 in = 6,6 ft · F074–F076; = TA118 |
| TA214 | `rotulos_dado[18]` | s19 | LIMA · 0.3 INCHES (8 mm) | CONFIRMADA | valor_exato: 8 mm · F013; = TA125 |
| TA215 | `rotulos_dado[19]` | s19 | MATUCANA · 12 INCHES (312 mm) | CONFIRMADA | valor_exato: 311,6 mm = 12,3 in · PA027; = TA126 |
| TA216 | `rotulos_dado[20]` | s19 | VILCA · 38 INCHES (963 mm) | CONFIRMADA | valor_exato: 963 mm = 37,9 in · PA028; o lado: SENAMHI 2016, «VILCA -12.12 -75.83», vertente do Pacífico; o `_condicao` pode cair (Para a Sala); = TA127 |
| TA217 | `rotulos_dado[21]` | s19 | MOSTLY DECEMBER–MARCH | DIVERGE (periférica, recorte) | valor_exato: — · vale para Matucana e Vilca, não para Lima (máximo de julho a setembro); = TA129 (achado 1) |
| TA218 | `rotulos_dado[22]` | s20 | ABOUT HALF | CONFIRMADA | valor_exato: alrededor del 50 % · F081; = TA135 (observação O1) |
| TA219 | `rotulos_dado[23]` | s21 | ABOUT 27,000 SQ MI (71,000 km²) | CONFIRMADA | valor_exato: 71.073 km² = 27.442 sq mi · PA031; = TA140 |
| TA220 | `rotulos_dado[24]` | s22 | 3000–1800 B.C. | CONFIRMADA | valor_exato: — · PA032; = TA149 |
| TA221 | `rotulos_dado[25]` | s22 | ABOUT 90 MILES NORTH OF LIMA | CONFIRMADA | valor_exato: 87,65 mi · PA033; = TA150 |
| TA222 | `rotulos_dado[26]` | s23 (s24) | CANAL · ABOUT 50 MILES (80 km) | CONFIRMADA | valor_exato: 80 km = 49,7 mi · F099, F100; = TA171 |
| TA223 | `rotulos_dado[27]` | s26 | LATE 1534 | CONFIRMADA | valor_exato: November 28, 1534 · PA040; = TA181 |

### C · `cards_pessoa` e `_avisos_do_ano`

| id | ref | cena | na tela | veredito | o que a fonte diz |
|---|---|---|---|---|---|
| TA224 | `cards_pessoa[0]` | s26 | FRANCISCO PIZARRO · Spanish conquistador · Painting, 1835 | CONFIRMADA | Cobo l. 2397 («Gobernador Francisco Pizarro»); UNESCO 500 l. 235 («Spanish conqueror Francisco Pizarro»); POP «1835»; sem ano de nascimento (PA039); = TA182, TA183, TA180 |
| TA225 | `_avisos_do_ano[0]` | s26 | Painting, 1835 (data_na_origem 1835; sha256 33663e70…) | CONFIRMADA | POP: «Millésime de création : 1835» (PA037); o sha256 casa com o `aprovado` do conferente (33663e70…) |

### D · `glossario` (as entradas com cena de s01 a s27 no `_na_tela`)

| id | ref | referente | grafia | veredito | o que se conferiu |
|---|---|---|---|---|---|
| TA226 | `glossario[0]` | Francisco Pizarro | Francisco Pizarro | CONFIRMADA | a grafia bate com a voz ou com a origem (Cobo l. 2397; UNESCO 500 l. 235) |
| TA227 | `glossario[5]` | Bernabé Cobo | Bernabé Cobo | CONFIRMADA | a grafia bate com a voz ou com a origem (Cobo, «Padre Bernabé Cobo … año de 1639», PB001) |
| TA228 | `glossario[6]` | R. Lasaponara e N. Masini | Lasaponara & Masini | CONFIRMADA | a grafia bate com a voz ou com a origem (cap. 12, l. 27–37) |
| TA229 | `glossario[8]` | Diego Delso (foto) | Diego Delso, delso.photo | CONFIRMADA | a grafia bate com a voz ou com a origem (Commons, lido hoje: Puno, DD 01, DD 04) |
| TA230 | `glossario[9]` | Mr AndrewHolmes (foto) | Mr AndrewHolmes | CONFIRMADA | a grafia bate com a voz ou com a origem (Commons, lido hoje: Satipo_Aerial) |
| TA231 | `glossario[10]` | JOSE MORALES CIENCIA POLITICA UNMSM (foto) | JOSE MORALES CIENCIA POLITICA UNMSM | CONFIRMADA | a grafia bate com a voz ou com a origem (Commons, lido hoje) |
| TA232 | `glossario[11]` | Soto Caldaa Cesar (foto de reserva) | Soto Caldaa Cesar | CONFIRMADA | a grafia bate com a voz ou com a origem (Commons, lido hoje) |
| TA233 | `glossario[15]` | Autoridad Nacional del Agua | ANA (Peru) | CONFIRMADA | a grafia bate com a voz ou com a origem (ANA 2009, capa) |
| TA234 | `glossario[16]` | Servicio Nacional de Meteorología e Hidrología del Perú | SENAMHI (Peru) | CONFIRMADA | a grafia bate com a voz ou com a origem (SENAMHI 2021, ficha) |
| TA235 | `glossario[17]` | Instituto Nacional de Estadística e Informática | INEI (Peru) | CONFIRMADA | a grafia bate com a voz ou com a origem (INEI 2017 e 2026) |
| TA236 | `glossario[18]` | Ministerio del Ambiente | MINAM (Peru) | CONFIRMADA | a grafia bate com a voz ou com a origem (MINAM 2019, l. 29) |
| TA237 | `glossario[19]` | Servicio de Agua Potable y Alcantarillado de Lima | SEDAPAL | CONFIRMADA | a grafia bate com a voz ou com a origem (lâmina SEDAPAL 2007) |
| TA238 | `glossario[23]` | UNESCO | UNESCO | CONFIRMADA | a grafia bate com a voz ou com a origem (UNESCO 1269 e 366) |
| TA239 | `glossario[24]` | Growth Lab, Harvard | Harvard Growth Lab | CONFIRMADA | a grafia bate com a voz ou com a origem (HKS l. 86) |
| TA240 | `glossario[25]` | Japan International Cooperation Agency | JICA | CONFIRMADA (nota LEVE) | a grafia está certa, mas o `_na_tela` lista a s12, onde nenhum texto diz JICA (achado 5); a grafia bate com a voz ou com a origem (PB073) |
| TA241 | `glossario[26]` | World Meteorological Organization | WMO | CONFIRMADA | a grafia bate com a voz ou com a origem (os CSV da OMM) |
| TA242 | `glossario[33]` | MapTiler / OpenStreetMap | © MapTiler © OpenStreetMap contributors | CONFIRMADA | a grafia bate com a voz ou com a origem (identidade §6) |
| TA243 | `glossario[34]` | Wikimedia Commons | Wikimedia Commons | CONFIRMADA | a grafia bate com a voz ou com a origem (o credito_na_tela dos vereditos) |
| TA244 | `glossario[35]` | Peru | PERU | CONFIRMADA (nota LEVE) | no lote A, «PERU» só em s01 e s03; nas outras cenas é o «(Peru)» dos créditos (achado 5); a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA245 | `glossario[36]` | Andes | ANDES | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA246 | `glossario[37]` | a vertente do Pacífico | PACIFIC SIDE | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA247 | `glossario[38]` | a vertente do Atlântico (Amazonas) | AMAZON SIDE | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA248 | `glossario[39]` | a vertente do Titicaca | LAKE TITICACA BASIN | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA249 | `glossario[40]` | Lago Titicaca (a miniatura de Puno) | Lake Titicaca (Puno) | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA250 | `glossario[41]` | o Pacífico | PACIFIC | CONFIRMADA (nota LEVE) | o `_na_tela` lista s01, s10, s11 e s20: lá só há «PACIFIC SIDE» (a G37), na s20 dentro da legenda (achado 5); a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA251 | `glossario[42]` | o Atlântico | ATLANTIC | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA252 | `glossario[43]` | o rio Amazonas | Amazon | CONFIRMADA (nota LEVE) | o `_na_tela` lista s01, s04, s10 e s11: lá só há «AMAZON SIDE» (a G38) (achado 5); a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA253 | `glossario[44]` | a divisória continental | CONTINENTAL DIVIDE | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA254 | `glossario[45]` | Lima | Lima | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA255 | `glossario[46]` | Callao | Callao | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA256 | `glossario[47]` | o departamento de Lima | LIMA REGION | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA257 | `glossario[49]` | rio Rímac | Rímac | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA258 | `glossario[50]` | Loreto | LORETO | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA259 | `glossario[51]` | Iquitos | Iquitos | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA260 | `glossario[52]` | Satipo | Satipo | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA261 | `glossario[53]` | Matucana | Matucana | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA262 | `glossario[54]` | Vilca (a estação do SENAMHI) | VILCA | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA263 | `glossario[55]` | Piura | Piura | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA264 | `glossario[56]` | Tacna | Tacna | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA265 | `glossario[57]` | Chile | CHILE | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA266 | `glossario[58]` | o deserto costeiro | COASTAL DESERT | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA267 | `glossario[59]` | Caral | Caral | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA268 | `glossario[60]` | Pirámide Mayor de Caral | Pirámide Mayor, Caral | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA269 | `glossario[61]` | rio Supe | Supe River | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA270 | `glossario[62]` | vale do Moche | Moche Valley | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA271 | `glossario[63]` | vale do Chicama | Chicama Valley | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA272 | `glossario[64]` | Chan Chan | Chan Chan | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA273 | `glossario[65]` | Nazca | Nazca | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA274 | `glossario[66]` | Cantalloc | Cantalloc, Nazca | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA275 | `glossario[67]` | Jauja | Jauja | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA276 | `glossario[83]` | a Costa (região do censo) | COAST | CONFIRMADA (nota LEVE) | a grafia está certa, mas o `_na_tela` lista s13 e s21, onde nenhum texto diz COAST (a s21 diz COASTAL DESERT, que é a G58) (achado 5); a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA277 | `glossario[87]` | o anticiclone do Pacífico Sul | SOUTH PACIFIC HIGH | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA278 | `glossario[88]` | a corrente de Humboldt | HUMBOLDT CURRENT | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA279 | `glossario[89]` | El Niño | EL NIÑO | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA280 | `glossario[90]` | a cultura Chimú | Chimú | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA281 | `glossario[91]` | puquios | *puquios* | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA282 | `glossario[93]` | o canal (Alpha Point) | Alpha Point | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA283 | `glossario[94]` | milha | MILES | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA284 | `glossario[95]` | milha quadrada | SQ MI | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA285 | `glossario[96]` | pé | FT | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA286 | `glossario[97]` | polegada | INCHES | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |
| TA287 | `glossario[100]` | antes de Cristo | B.C. | CONFIRMADA | a grafia bate com a voz ou com a origem (roteiro-narrador.md ou a origem da entrada) |

## Achados acionáveis

1. **[MÉDIO] s19 · TA129 (`_textos_por_cena[128]`) e TA217 (`rotulos_dado[21]`) · "MOSTLY DECEMBER–MARCH" solta num gráfico com Lima.**
   - **O problema:** a legenda vale para Matucana (dez.–mar. = 83,9 %) e para Vilca («máximos … en el verano … 178 mm en enero»). Mas a 1ª barra é Lima, e dela o SENAMHI 2021 diz: «8 mm en forma de lloviznas, con un máximo de 1 a 2 mm entre julio y setiembre» (`midia/peru-agua/fontes/mecanismo/senamhi-2021-climas-del-peru.txt` l. 3278–3280). Ao lado das três barras, a legenda diz de Lima o contrário da fonte.
   - **O conserto:** `HIGH UP: MOSTLY DECEMBER–MARCH`, presa às barras de Matucana e de Vilca e nunca sob a de Lima. É a palavra da voz: «mostly high up, and most of it from December to March». Se a Sala tirar Vilca: `MATUCANA: MOSTLY DECEMBER–MARCH`. O R21 muda junto.
   - **RAIZ:** PONTUAL.
2. **[LEVE] s16 · TA096 (`_textos_por_cena[95]`) e TA210 (`rotulos_dado[14]`) · "Sea temperature anomalies, March–August 1997".**
   - **O problema:** a origem diz «Sea surface temperature anomalies from March to August 1997…» (https://commons.wikimedia.org/wiki/File:Sea_surface_temperature_anomalies_from_March_to_August_1997_showing_evolution_of_major_El_Nino_(2268-446).jpg, PA018). O mapa mede a superfície.
   - **O conserto:** `Sea surface temperature anomalies, March–August 1997`.
   - **RAIZ:** PONTUAL.
3. **[LEVE] s22 e s23 · TA151, TA155, TA167, TA172 · os créditos da UNESCO sem ano.**
   - **O problema:** a casa pede instituição e ano em todo número (roupa §4), e o "CANAL · ABOUT 50 MILES (80 km)" vai com "Source: UNESCO" e nada mais. As páginas são vivas, mas trazem «Date of Inscription: 2009» (Caral, `unesco-1269-caral.txt` l. 244) e «Date of Inscription: 1986» (Chan Chan, `unesco-366-chanchan.txt` l. 275).
   - **O conserto:**
     - s22, TA151: `Sources: UNESCO (World Heritage List, 2009); distance measured by Alpha Point (straight line)`;
     - s22, TA155: `Source: UNESCO (World Heritage List, 2009)`;
     - s23, TA167 e TA172: `Source: UNESCO (World Heritage List, 1986)`.
     - O ano é o da inscrição do sítio. Não é a data do texto citado, que a página não carimba.
   - **RAIZ:** INSTRUÇÃO. A regra do ano vale também para fonte que é página viva, e o redator não a aplicou a nenhuma das três.
4. **[LEVE] s04 · TA032 (`_textos_por_cena[31]`) · o "A SINGLE TUNNEL" de hoje com o crédito de 2016.**
   - **O problema:** o SENAMHI 2016 sustenta o 1958–1962 e o túnel único em 2016 («hasta la actualidad no se ejecuta», o túnel da Marca II, l. 3919). Mas o "single" é presente, e quem o diz hoje é a Defensoría de 2025: «dependiendo de un solo túnel trasandino» (`agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4542; F023).
   - **O conserto:** `Sources: SENAMHI (Peru), 2016; Defensoría del Pueblo (Peru), 2025`, a mesma linha da s41.
   - **RAIZ:** PONTUAL.
5. **[LEVE, não é fato] glossário · o índice `_na_tela` aponta cenas onde a grafia não está.**
   - TA240 (G25, JICA): tirar a s12.
   - TA276 (G83, COAST): tirar s13 e s21.
   - TA250 (G41, PACIFIC): em s01, s10, s11 e s20 o texto é «PACIFIC SIDE».
   - TA252 (G43, Amazon): em s01, s04, s10 e s11 o texto é «AMAZON SIDE».
   - TA244 (G35, PERU): fora de s01 e s03, é o «(Peru)» dos créditos.
   - Nenhuma grafia está errada. O índice é que engana quem procura a palavra na cena.
   - **RAIZ:** PONTUAL.

## Observações (sem troca pedida)

- **O1 · s20 (TA135, TA136, TA218) e a voz (p2, §9): a base dos 50 %.**
  - A frase da ANA de 2009 prende o «alrededor del 50% (17 542 MMC)» ao excesso do «período de avenidas» na «cuenca húmeda». Nessa leitura, a tela e a voz estão certas, e foi a leitura do F081 e do F006.
  - Mas o mesmo documento dá à vertente do Pacífico uma disponibilidade total de «37 363» MMC por ano (quadro "DISPONIBILIDAD DE AGUA SUPERFICIAL", `ana-2009-politica-estrategia-1073.txt` l. 2015–2031). E 17.542 ÷ 37.363 = 47 %. Os 50 % podem então ser de toda a água do lado, perdida na cheia, e não da água da cheia: nessa leitura, a cheia teria de somar uns 94 % do ano.
  - A fonte não diz a base. Não é DIVERGE, porque a frase sustenta a forma de hoje. Não proponho troca: a voz já diz isso, e mudar só a tela a separaria da voz. Fica registrado para a Sala.
- **O2 · s16: Piura sobre a imagem de junho de 1998.** O texto está limpo: Piura é só o ponto (PA020), e a forma do PA021 não entrou. Mas a voz diz «heavy rain and floods, mostly in the north» sobre uma imagem com água longe da cidade. O ponto não pode encostar na água (PA021). É cuidado de arte, não de texto.
- **O3 · s19: o lado da estação de Vilca, resolvido.**
  - O SENAMHI de 2016 (`midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt` l. 8505, p. 69) lista «VILCA -12.12 -75.83».
  - No teste de ponto contra `out/peru-agua/_media/geo/vertente-pacifico.json`, o ponto está dentro da vertente do Pacífico e fora da do Atlântico, a 9,6 km da divisória. O povoado do OSM fica a 8,9 km. Os 0,005° de arredondamento da tabela (~0,55 km) não mudam o lado.
  - É a mesma estação do SENAMHI 2021: o mesmo nome, a mesma zona e a mesma rede, e o resumo de busca do PA030 dava −12,1146; −75,8262. A tela não afirma o lado, mas, se a barra ficar, o lado que o contexto sugere (o "dry side" da voz) está agora sustentado.
  - O que pode cair: a `_condicao` (TA127, TA216), o `_nao_conferido[0]` e o `_espera_a_sala[0]`. A Sala decide.

## A lista de nomes

No lote A não há atribuição anônima ("experts say", "a researcher"). Quem a tela nomeia, e quem fica fora dela:
- **Na tela:**
  - **Diego Delso:** fotógrafo, autor das fotos de Puno e de Cantalloc (Commons, lido hoje; ele pede «Diego Delso, delso.photo, License CC BY-SA»).
  - **Mr AndrewHolmes:** usuário do Commons, autor de `File:Satipo_Aerial.jpg`.
  - **JOSE MORALES CIENCIA POLITICA UNMSM** e **Soto Caldaa Cesar:** usuários do Commons, autores das duas fotos da Pirámide Mayor (27/11/2022).
  - **R. Lasaponara** (CNR-IMAA) e **N. Masini** (CNR-IBAM): autores do cap. 12 de *Satellite Remote Sensing*, Springer, 2012 (`lasaponara-masini-puquios-cap12.txt` l. 27–37).
  - **Bernabé Cobo:** jesuíta, autor da *Historia de la fundación de Lima*, 1639.
  - **Francisco Pizarro:** «Gobernador» no auto de 1534.
- **Fora da tela, nomeáveis:**
  - Amable-Paul Coutan, o pintor do retrato de 1835 (POP, PA037);
  - Manuel González de la Rosa, o editor de 1882 (PA042);
  - Jeff Schmaltz, do MODIS Land Rapid Response Team, NASA GSFC, as duas imagens MODIS (PA016, PA017).

## Voláteis na tela (reconferir na véspera de publicar)

- **"A SINGLE TUNNEL · EARLY 1960s"** (s04, TA031, TA203).
  - **O que o mantém:** a Defensoría em 2025 e a Gestión de 30/08/2026, sem data de obra do 2º túnel (F023; lote B, s49 e s50).
  - **O que o zera:** a obra do 2º túnel começar, ou outro trasvase entrar em serviço.
- O resto do lote é datado: normais climáticas, censos com ano, documentos com data e história. Nada mais envelhece.

## Os 2 padrões mais vistos

1. **Rótulo que vale para parte do quadro e cai sobre o todo:** "MOSTLY DECEMBER–MARCH" sob três barras, uma delas de Lima; "Sea temperature" para um mapa da superfície.
2. **Crédito que não carrega o ano do fato que sustenta:** a UNESCO sem ano (três créditos) e o 2016 do "single tunnel" de hoje.

## Para o redator-de-tela

- **s19 (achado 1):** `MOSTLY DECEMBER–MARCH` → `HIGH UP: MOSTLY DECEMBER–MARCH`, junto das barras de Matucana e de Vilca, nunca da de Lima. O `rotulos_dado[21]` muda junto. Sem Vilca: `MATUCANA: MOSTLY DECEMBER–MARCH`.
- **s16 (achado 2):** `Sea temperature anomalies, March–August 1997` → `Sea surface temperature anomalies, March–August 1997`, também no `rotulos_dado[14]`.
- **s22 e s23 (achado 3):** os créditos da UNESCO com o ano da lista: `(World Heritage List, 2009)` para Caral e `(World Heritage List, 1986)` para Chan Chan, com as formas inteiras dadas no achado.
- **s04 (achado 4):** `Source: SENAMHI (Peru), 2016` → `Sources: SENAMHI (Peru), 2016; Defensoría del Pueblo (Peru), 2025`.
- **O glossário (achado 5):** acertar o `_na_tela` de G25, G35, G41, G43 e G83.
- **A s19 e Vilca:** se a Sala deixar a barra, tirar a `_condicao` do TA127 e do R20, porque o lado está provado (O3).
- **Como está, e certo:**
  - s01 e s02, com as silhuetas de 5 em 8;
  - s03, s06 a s15, s17 e s18;
  - s20 (com a O1), s21 e s22 (fora o ano);
  - s23 a s25 (fora o ano), s26 e s27.
- **Os 15 rótulos que esperam a caça** voltam ao redator com os vereditos. Depois, voltam a este laudo.

## Para a Sala

- **NÃO FOI CHECADO, por esperar insumo, e não por recusa de site.** Os 15 rótulos de lugar da caça:
  - TA001 (s01, s01-a); TA012, TA014 e TA019 (s03: s03-a, s03-b, s03-c);
  - TA047 (s08, s08-a); TA058 (s09, s09-a);
  - TA088 e TA089 (s15: s15-a, s15-b); TA104 (s17, s17-a);
  - TA130 e TA131 (s19: s19-a, s19-b); TA132 (s20, s20-a);
  - TA147 (s22, s22-a); TA163 (s23, s24-a); TA178 (s23, s25-b).
  - Não há URL, porque não há veredito do conferente. Com a caça feita, o texto de cada um sai do `lugar_na_origem` e volta a este laudo.
- **Nenhum site recusou robô neste lote.** O gob.pe não foi tocado, nem o web.archive.org.
- **A barra de Vilca:** a tarefa diz que ela foi tirada, mas o arquivo julgado (`d9769347…`) ainda a tem (TA127, TA128, TA216, TA262). E o lado agora está provado (O3).
  - Se a Sala já a tirou numa versão mais nova, estes itens ficam sem objeto, e o resto do laudo vale.
  - Se ela fica, a `_condicao`, o `_nao_conferido[0]` e o `_espera_a_sala[0]` podem cair.
- **Divergência da voz:** nenhuma DIVERGE nas frases da voz que o lote A toca. A O1 também toca a voz (p2, §9), mas é ambiguidade da fonte, não erro: a forma de hoje é a leitura literal da frase. Nada a regravar.
- **DECISÃO DO LUCAS PENDENTE que tocou esta checagem:** nenhuma. O `_espera_o_lucas` está vazio.
- **As fontes da web consultadas hoje:**
  - [Commons: Puno e Titicaca, Delso, 2015](https://commons.wikimedia.org/wiki/File:Vista_de_Puno_y_el_Titicaca,_Per%C3%BA,_2015-08-01,_DD_63.JPG)
  - [Commons: Satipo_Aerial.jpg](https://commons.wikimedia.org/wiki/File:Satipo_Aerial.jpg)
  - [Commons: Pirámide Mayor, vista frontal](https://commons.wikimedia.org/wiki/File:Vista_frontal_de_la_imponente_Pir%C3%A1mide_Mayor_de_la_Ciudad_Sagrada_de_Caral.jpg)
  - [Commons: Pirámide Mayor - Caral](https://commons.wikimedia.org/wiki/File:Pir%C3%A1mide_Mayor_-_Caral.jpg)
  - [Commons: Cantalloc DD 01](https://commons.wikimedia.org/wiki/File:Acueductos_subterr%C3%A1neos_de_Cantalloc,_Nazca,_Per%C3%BA,_2015-07-29,_DD_01.JPG)
  - [Commons: Cantalloc DD 04](https://commons.wikimedia.org/wiki/File:Acueductos_subterr%C3%A1neos_de_Cantalloc,_Nazca,_Per%C3%BA,_2015-07-29,_DD_04.JPG)
  - Uma busca na web pela estação Vilca, sem resultado útil. Os resultados que apontavam para senamhi.gob.pe e cdn.www.gob.pe não foram abertos.

---

COBERTURA: 270 de 285. A lista saiu por script de todas as entradas do `textos-tela.json` que tocam s01–s27: 287, menos 2 NADA A CHECAR. Os 15 sem veredito esperam a caça. Situação: CHECADO PARCIALMENTE.

NOTA: 8.5/10

VEREDITO: RESSALVA

## Reconferência 1 (sobre 344396a4…)

- **Data-base:** 22/10/2026.
- **O objeto:** `out/peru-agua/textos-tela.json`, sha256 `344396a415cbce476018180bb130afaaf7451d34a58d67fc007325ff6710bd32`.
- **A base de comparação:** a cópia de antes, `out/peru-agua/_tmp/redator/antes-consertos-1/textos-tela.json.d9769347`, sha256 `d976934775d1…`, o mesmo arquivo julgado acima.
- **Como a lista foi derivada:** por script, comparando entrada a entrada as duas versões nas partes do lote A (`_textos_por_cena` de s01 a s27, `rotulos_dado`, `cards_pessoa`, `_avisos_do_ano` e o `glossario` com cena do lote), mais o `_fechados`, o `_nao_conferido`, o `_espera_a_sala` e as `_instrucoes_para_a_arte` da s19.
  - Mudaram 9 textos de cena, 4 rótulos de dado e 9 entradas do glossário. Entre estas, há uma entrada que entrou no lote: a Defensoría, que passou a listar a s04.
  - Nada mais mudou no lote: os 195 textos têm a mesma ordem e o mesmo número, e `cards_pessoa` e `_avisos_do_ano` estão idênticos.
  - Para o glossário, contam os 5 índices do achado 5 e a entrada nova. As outras mudanças de `_na_tela` (Lima, Callao, ANA) só tocam cenas do lote B.
- **Imagens: 0.** Nenhum navegador, nenhum site; tudo pelas cópias locais.

| id | cena | o texto de agora | veredito | o que a fonte diz |
|---|---|---|---|---|
| TA032 | s04 | `Sources: SENAMHI (Peru), 2016; Defensoría del Pueblo (Peru), 2025` | CONFIRMADA | SENAMHI 2016: «la primera fue ejecutada entre los años 1958 y 1962, tiempo en el cual se construyo el túnel trasandino» (`agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt` l. 3865–3866). Defensoría 2025: «dependiendo de un solo túnel trasandino» (`agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4542). A mesma forma da s41. O achado 4 está fechado |
| TA203 | s04 | `rotulos_dado[7]`, a `fonte` com a Defensoría | CONFIRMADA | idem; o `na_tela` não mudou |
| TA096 | s16 | `Sea surface temperature anomalies, March–August 1997` | CONFIRMADA | o título da origem: «Sea surface temperature anomalies from March to August 1997 showing evolution of major El Nino» (PA018). O achado 2 está fechado |
| TA210 | s16 | `rotulos_dado[14]`, o mesmo texto | CONFIRMADA | idem |
| TA129 | s19 | `HIGH UP: MOSTLY DECEMBER–MARCH` | CONFIRMADA | Matucana: dez.–mar. = 261,3 de 311,6 mm, 83,9 % (`wmo-normals-9120/Matucana_74402.csv` l. 23). Vilca: «máximos acumulados en el verano con un pico de 178 mm en enero» (SENAMHI 2021, l. 3320–3322). É a palavra da voz («mostly high up, and most of it from December to March»). A nota da entrada e a instrução à arte da s19 dizem: ao lado das barras de Matucana e de Vilca, nunca sob a de Lima (pico de julho a setembro, l. 3278–3280). O achado 1 está fechado, **desde que a arte siga a instrução**: o `qc-visual` confere o lugar da legenda no quadro |
| TA217 | s19 | `rotulos_dado[21]`, o mesmo texto, com Lima declarada como o contrário | CONFIRMADA | idem |
| TA127 | s19 | `VILCA · 38 INCHES (963 mm)`, sem `_condicao` | CONFIRMADA | 963 mm (SENAMHI 2021, l. 3316–3320; PA028); 37,9 in → 38. A nota cita a prova certa: SENAMHI 2016, l. 8505–8507, que são, uma linha cada, «VILCA», «-12.12», «-75.83», conferidas agora. O ponto está dentro da vertente do Pacífico, a 9,6 km da divisória (O3) |
| TA128 | s19 | `Sources: SENAMHI (Peru), 1981–2010 average (Lima, Vilca); WMO, 1991–2020 average (Matucana)` | CONFIRMADA | o texto é o mesmo de antes; continua certo com a barra |
| TA216 | s19 | `rotulos_dado[20]`, com `_lado` no lugar de `_condicao` | CONFIRMADA | o `_lado` cita SENAMHI 2016, l. 8505–8507, e o teste de ponto: é a prova certa e diz só o que ela sustenta |
| TA262 | s19 | `glossario[54]`, VILCA | CONFIRMADA | a grafia é a mesma; a fonte acrescenta a mesma prova. Nunca «Vilca District», nunca altitude |
| TA151 | s22 | `Sources: UNESCO (World Heritage List, 2009); distance measured by Alpha Point (straight line)` | CONFIRMADA | «Date of Inscription: 2009» (`gente/unesco-1269-caral.txt` l. 244, conferido agora). O achado 3 está fechado na s22 |
| TA155 | s22 | `Source: UNESCO (World Heritage List, 2009)` | CONFIRMADA | idem |
| TA167 | s23 | `Source: UNESCO (World Heritage List, 1986)` | CONFIRMADA | «Date of Inscription: 1986» (`gente/unesco-366-chanchan.txt` l. 275, conferido agora). O achado 3 está fechado na s23 |
| TA172 | s23 | `Source: UNESCO (World Heritage List, 1986)` | CONFIRMADA | idem |
| TA240 | — | G25, JICA: `_na_tela` = s39 | CONFIRMADA | a s12 saiu do índice (achado 5) |
| TA244 | — | G35, PERU: `_na_tela` = s01, s03, s34 | CONFIRMADA | o índice bate com os textos do lote A (achado 5) |
| TA250 | — | G41, PACIFIC: `_na_tela` = s06 | CONFIRMADA | idem |
| TA252 | — | G43, Amazon: `_na_tela` = s06 | CONFIRMADA | idem |
| TA276 | — | G83, COAST: `_na_tela` = s30 | CONFIRMADA | s13 e s21 saíram do índice. O achado 5 está fechado |
| TA288 | s04 | G «Defensoría del Pueblo», grafia `Defensoría del Pueblo (Peru)`, agora com a s04 | CONFIRMADA | Informe Defensorial n.° 239 (2025), a cópia local; a grafia é a mesma do crédito da TA032. Item novo do lote A |

**Sobre o fechamento de Vilca.**
- O `_fechados[0]` cita «VILCA -12.12 -75.83» em `midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt`, l. 8505–8507, e essas três linhas são exatamente o nome e as duas coordenadas. A prova é a certa.
- O `_nao_conferido` e o `_espera_a_sala` não têm mais a entrada de Vilca.
- **Nenhum texto de tela diz o lado.** Na s19, "VILCA" aparece só na barra e no crédito, sem "Pacific", sem distrito e sem altitude. Só o contexto da voz («The dry side gets real rain too») sugere o lado, e a prova agora o sustenta.

**O lote A depois da reconferência.**
- Os quatro achados de fato (1 a 4) e o achado 5 do glossário estão fechados. **Não sobra DIVERGE nem REFUTADA.**
- O placar do lote passa a 286 itens, com a entrada nova da Defensoría:
  - CONFIRMADA: 271;
  - NÃO FOI CHECADO: 15, os rótulos de lugar que esperam a caça, sem mudança (TA001, TA012, TA014, TA019, TA047, TA058, TA088, TA089, TA104, TA130, TA131, TA132, TA147, TA163, TA178);
  - NADA A CHECAR: 2, fora do M.
- As observações O1 (a base dos 50 % da s20) e O2 (Piura na s16) ficam como estavam: registro, sem troca.
- **O veredito fica em RESSALVA só pela cobertura parcial**, e não por defeito. Pelo ofício (§6), laudo com cobertura parcial não passa. Com os 15 rótulos da caça conferidos e limpos, o lote A vira PASS.

COBERTURA (reconferência 1): 20 de 20.

COBERTURA (lote A, depois da reconferência): 271 de 286. Situação: CHECADO PARCIALMENTE (os 15 da caça).

NOTA: 9/10

VEREDITO: RESSALVA

---

# Lote B (s28–s53 e gerais), como o verificador gravou

COBERTURA: 328 de 345 (lista derivada à mão, por script de leitura do `textos-tela.json`; 17 itens NÃO FOI CHECADO: 12 esperam a caça e 5 são primárias no gob.pe; 3 itens NADA A CHECAR fora da conta). Situação: CHECADO PARCIALMENTE.

# Laudo de fatos do texto de tela · `peru-agua` (vídeo 4) · lote B (s28–s53 e as seções gerais)

- **Tarefa:** `peru-agua-texto-1`, passo `screen_text`, setor Texto e fatos (a pedido da Sala de controle).
- **Data-base da verificação:** 22/10/2026.
- **O objeto:** `out/peru-agua/textos-tela.json`, sha256 `d976934775d11d524f038ec73e04a57b6b245bb0762e86c48e624f6baea070fd` (o `d9769347…` do pedido).
- **A voz contra a qual se conferiu a grafia:** `roteiros/peru-agua/roteiro-narrador.md`.
- **O apoio citado pelo id, sem refazer a busca:** `roteiros/peru-agua/qc-roteiro/fatos.laudo.md` (ids `F…`) e `roteiros/peru-agua/qc-roteiro/fatos-pesquisa-2026-10-22.laudo.md` (ids `PA…`, `PB…`). O que mudou de forma (conversão, tradução, "ABOUT", grafia de crédito) foi conferido de novo nas cópias locais em `midia/peru-agua/fontes/`.
- **A mídia:** `out/peru-agua/_pesquisa/conferencia-midia.json`, sha256 `0b544ca0de4a5c13e3ac3354f6252ae7b11f70b18084a7082b4e3bd2d9279d91` (a versão com o reuso da s51).
- **Imagens abertas: 0.** Nenhum navegador, nenhum site do gob.pe, nenhum web.archive.org. Rede: 2 buscas (o título do Perfil de 2017 e o volátil da s50). Nada foi gravado no canal.

## Como a lista foi derivada (o denominador)

O canal não tem extrator de afirmações para o texto de tela. Um script de leitura (`C:/Users/zangp/AppData/Local/Temp/claude/vf-peru-tela-B/scripts/`) tirou do `textos-tela.json`, sem julgamento, **todo** item destas seções que toca as cenas s28 a s53, e cada um virou uma linha:

| seção | itens | ids |
|---|---|---|
| `_textos_por_cena`, cenas s28–s52 (as filhas s31, s40, s43 e s50 vêm nas mães s30, s39, s42 e s49; a s53 não tem item próprio) | 238 | TB001–TB238 |
| `rotulos_dado` com cena do lote (inclusive os compartilhados s01/s51, s03/s34 e s04/s39) | 39 | TB239–TB277 |
| `cards_pessoa` (s42, s46, s48, s49; o da s26 é do lote A) | 4 | TB278–TB281 |
| `_avisos_do_ano` (s36, s51; o da s26 é do lote A) | 2 | TB282–TB283 |
| `_nao_conferido` do lote (o de Vilca, s19, é do lote A) | 5 | TB284–TB288 |
| `glossario` com cena do lote em `_na_tela` | 59 | TB289–TB347 |
| `_pergunta_cta` | 1 | TB348 |
| **total** | **348** | |

- **Fora da conta, declarados NADA A CHECAR (3):** os dois trechos `nada` (s51 b4 e s52 b2) e a pergunta do comentário, que não afirma fato.
- **O limite do script:** ele pega todo texto que a tela escreve, mas não o que o desenho afirma sem texto (a fração das silhuetas, a escala de volumes, colunas e canos). Esses li à mão nas `nota` de cada item e julguei na linha do texto que acompanha o desenho (s30, s34, s36, s38, s39, s44).
- **Cada item tem duas verificações:** o fato contra a fonte e a grafia contra a voz.

**NOTA: 9/10.** Os números, citações, traduções, cards e créditos do lote batem com as fontes, e as formas que o lote B anterior pediu (PB009, PB014, PB025, PB026, PB037, PB044, PB055 e a marca de tradução) entraram todas. Nenhum DIVERGE, nenhuma REFUTADA, nenhuma divergência da voz. Sobram 4 achados LEVES de forma (A1 a A4) e 17 itens que não se podem checar hoje (12 esperam a caça; 5 são primárias atrás do gob.pe, já atribuídas na tela a quem as publicou).

**O placar:** CONFIRMADA 328 · DIVERGE 0 · NÃO ACHEI 0 · REFUTADA 0 · NÃO FOI CHECADO 17 · NADA A CHECAR 3.


## Tabela 1 · o texto de tela, cena a cena (TB001–TB238)

| id | cena | texto de tela | papel | fonte (arquivo ou URL, e o trecho literal) | veredito | conserto |
|---|---|---|---|---|---|---|
| TB001 | s28 | © MapTiler © OpenStreetMap contributors (0.0–6.133 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB002 | s28 | Callao (0.0–6.133 s) | rotulo | PB002/F114: o porto da ordem é o do Callao (Cobo, cap. XXXI: "Del pueblo y puerto del Callao", `midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt` l. 8122–8129); OSM para o ponto | CONFIRMADA | — |
| TB003 | s28 | JANUARY 1535 (0.167–6.133 s) | cota | F111/PB004: "fecho en Pachacamac á 6 de Enero de 1535" (`midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt` l. 2648–2649, p. 15) | CONFIRMADA | — |
| TB004 | s28 | “MUY BUEN PUERTO” (A VERY GOOD PORT) (4.233–6.133 s) | rotulo | F110/F243: "y por estar como está junto á él muy buen puerto" (`midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt` l. 2615); "a very good port" é tradução fiel de "muy buen puerto" | CONFIRMADA | — |
| TB005 | s28 | Translated from Spanish (4.233–6.133 s) | legenda | cobre o rótulo bilíngue todo o tempo dele (4,233–6,133 s = 4,233–6,133 s) | CONFIRMADA | — |
| TB006 | s28 | Source: Bernabé Cobo, 1639 (1882 ed.) (4.233–6.133 s) | credito | PB001: "Padre Bernabé Cobo de la Compañia de Jesús. año de 1639" (l. 1832); "IMPRENTA LIBERAL… MAYO, 1882" | CONFIRMADA | — |
| TB007 | s28 | PIZARRO'S ORDER, JANUARY 1535 · IN BERNABÉ COBO (1639; 1882 ED.) (6.133–12.167 s) | legenda | PB004 e F111: a ordem é de Pizarro, assinada "Francisco Pizarro" e datada de 6/01/1535 (l. 2648–2650); a página mostrada é a p. 14 (o trecho está antes do cabeçalho "POR EL P. BERNABÉ COBo. 15", l. 2638); o rótulo não afirma que a data está nessa página | CONFIRMADA | — |
| TB008 | s28 | comedio de tierra (7.033–10.333 s) | grifo_na_pagina | "porque me pareció que está en comedio de tierra donde los dichos indios…" (l. 2613–2614), p. 14: letra a letra | CONFIRMADA | — |
| TB009 | s28 | in the middle of the land (7.033–10.333 s) | traducao | "en comedio de tierra" = "in the middle of the land" ("comedio": meio, centro); fiel; F112 | CONFIRMADA | — |
| TB010 | s28 | puedan servir con poco trabajo (10.333–12.167 s) | grifo_na_pagina | "donde los dichos indios puedan servir con poco trabajo" (l. 2614), p. 14: letra a letra | CONFIRMADA | — |
| TB011 | s28 | could serve with little work (10.333–12.167 s) | traducao | "puedan servir con poco trabajo" = "could serve with little work"; fiel; F112 | CONFIRMADA | — |
| TB012 | s28 | Translated from Spanish (7.033–12.167 s) | legenda | cobre as duas traduções todo o tempo delas (7,033–10,333 e 10,333–12,167 dentro de 7,033–12,167) | CONFIRMADA | — |
| TB013 | s29 | © MapTiler © OpenStreetMap contributors (0.0–5.566 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB014 | s29 | © MapTiler © OpenStreetMap contributors (5.566–13.333 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB015 | s29 | Lima (0.0–5.566 s) | rotulo | F113/F117: Lima no vale do Rímac, lado do Pacífico (`unesco-500-lima.txt` l. 235: "located in the Rimac valley") | CONFIRMADA | — |
| TB016 | s29 | Callao (0.0–5.566 s) | rotulo | F114 (o porto vizinho de Lima) | CONFIRMADA | — |
| TB017 | s29 | Rímac (0.0–5.566 s) | rotulo | F113: "located in the Rimac valley" (UNESCO 500, l. 235); a grafia "Rímac" é a da voz | CONFIRMADA | — |
| TB018 | s29 | Lima (5.566–13.333 s) | rotulo [caca] | espera o veredito da caça do item s29-a (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB019 | s29 | Lima (5.566–13.333 s) | rotulo [sem_caca] | F113 (o mapa sobre o centro de Lima; rótulo de cidade, sem distrito) | CONFIRMADA | — |
| TB020 | s29 | UNTIL THE MID-1700s (5.566–13.333 s) | legenda | F115/F116: "until the middle of the 18th century" (`unesco-500-lima.txt` l. 198) = mid-1700s | CONFIRMADA | — |
| TB021 | s29 | “most important city of the Spanish dominions in South America” (9.6–13.333 s) | citacao | `unesco-500-lima.txt` l. 198: "…the capital and most important city of the Spanish dominions in South America"; as 10 palavras são contíguas e literais (também na l. 235) | CONFIRMADA | — |
| TB022 | s29 | Source: UNESCO (5.566–13.333 s) | credito | PB072: "Historic Centre of Lima - UNESCO World Heritage Centre"; a página não tem ano de texto (só "Date of Inscription: 1988", l. 274) | CONFIRMADA | opcional, ver "Para o redator": sem ano, como a s22 do lote A |
| TB023 | s30 | © MapTiler © OpenStreetMap contributors (0.0–22.0 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB024 | s30 | © MapTiler © OpenStreetMap contributors (37.167–42.733 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB025 | s30 | Lima (0.0–3.067 s) | rotulo | F117 (o ponto de Lima) | CONFIRMADA | — |
| TB026 | s30 | HIGHLANDS (9.233–22.0 s) | rotulo | F119; `midia/peru-agua/fontes/documento/inei-2026-censo2025-presentacion-resultados.txt` (PDF p. 12), "Distribución porcentual 28.3 65.0 6.7 · 39.0 52.3 8.7 · 46.1 44.0 9.9 · 49.8 39.7 10.6 · 52.4 34.8 12.8 · 54.6 32.0 13.4 · 58.0 28.1 13.9 · 58.7 26.7 14.6"; "Fuente: INEI - Censos Nacionales de Población y Vivienda 1940, 1961, 1972, 1981, 1993, 2007, 2017 y 2025": "Sierra" = a região natural do censo, "definidas en base a distrito" | CONFIRMADA | — |
| TB027 | s30 | 65.0% (1940) (9.233–12.2 s) | cota | F119/PB005: Sierra 1940 = "65.0" (`midia/peru-agua/fontes/documento/inei-2026-censo2025-presentacion-resultados.txt` (PDF p. 12), "Distribución porcentual 28.3 65.0 6.7 · 39.0 52.3 8.7 · 46.1 44.0 9.9 · 49.8 39.7 10.6 · 52.4 34.8 12.8 · 54.6 32.0 13.4 · 58.0 28.1 13.9 · 58.7 26.7 14.6"; "Fuente: INEI - Censos Nacionales de Población y Vivienda 1940, 1961, 1972, 1981, 1993, 2007, 2017 y 2025") | CONFIRMADA | — |
| TB028 | s30 | Source: INEI (Peru), censuses 1940–2025 (9.233–22.0 s) | credito | PB007: "Fuente: INEI - Censos Nacionales de Población y Vivienda 1940, 1961, 1972, 1981, 1993, 2007, 2017 y 2025" | CONFIRMADA | — |
| TB029 | s30 | COAST (15.5–22.0 s) | rotulo | F121/F129b: a Costa do censo ("Región natural: Comprende las regiones Costa, Sierra y Selva, definidas en base a distrito") | CONFIRMADA | — |
| TB030 | s30 | As Peru's census draws it: only part of the dry side (15.5–22.0 s) | legenda | F123: a Costa do censo vai só até os contrafortes, parte do lado seco; a voz: "which covers only part of the dry side" | CONFIRMADA | — |
| TB031 | s30 | 28.3% (1940) (15.5–22.0 s) | cota | F121/PB005: Costa 1940 = "28.3"; a figura: 2,83 de 10 = 2 silhuetas cheias e a 3ª em ~83 %, nunca 3 cheias (seria "three in ten", contra o "fewer than" da voz); só a porcentagem também é fiel | CONFIRMADA | — |
| TB032 | s30 | COAST (22.0–37.167 s) | rotulo | PB005 (a série Costa) | CONFIRMADA | — |
| TB033 | s30 | HIGHLANDS (22.0–37.167 s) | rotulo | PB005 (a série Sierra) | CONFIRMADA | — |
| TB034 | s30 | 1940 · 1961 · 1972 · 1981 · 1993 · 2007 · 2017 · 2025 (22.0–37.167 s) | eixo | "1940, 1961, 1972, 1981, 1993, 2007, 2017 y 2025" (o pé da tabela, PB007): os 8 censos, na ordem | CONFIRMADA | — |
| TB035 | s30 | 52.4% (1993) (28.833–37.167 s) | cota | F127/PB005: Costa 1993 = "52.4"; a voz "more than half" | CONFIRMADA | — |
| TB036 | s30 | 58.7% (2025) (33.1–37.167 s) | cota | F129/F130/PB005: Costa 2025 = "58.7" (19.185.930 ÷ 32.706.028 = 58,66 %); a voz "nearly six in ten" | CONFIRMADA | — |
| TB037 | s30 | RAINFOREST (39.1–42.733 s) | rotulo | PB006: Selva = a região natural do censo | CONFIRMADA | — |
| TB038 | s30 | 6.7% → 14.6% (41.333–42.733 s) | cota | PB006: Selva "6.7" (1940) e "14.6" (2025); 14,6 ÷ 6,7 = 2,18, "more than doubled" | CONFIRMADA | — |
| TB039 | s30 | 1940 → 2025 (41.333–42.733 s) | legenda | PB006 (os anos da série) | CONFIRMADA | — |
| TB040 | s30 | Source: INEI (Peru), censuses 1940–2025 (37.167–42.733 s) | credito | PB007 | CONFIRMADA | — |
| TB041 | s32 | INEI (PERU) · PERÚ: PERFIL SOCIODEMOGRÁFICO · CENSOS NACIONALES 2017 · CAPÍTULO I (0.0–8.067 s) | folha_cabecalho | "Capítulo I: Características de la Población" (`midia/peru-agua/fontes/gente/inei-lib1539-cap01.txt` l. 18–19). O título "Perú: Perfil Sociodemográfico" do Lib1539 e o "Censos Nacionales 2017" não estão na cópia local do capítulo (nem nos metadados do PDF); vêm da citação da Wikipedia ao libro.pdf do INEI e do resumo da nota de imprensa 155-2018 (https://en.wikipedia.org/wiki/2017_Peruvian_census ; https://m.inei.gob.pe/media/MenuRecursivo/noticias/nota-de-prensa-n-155-2018-inei_1.pdf, só no índice da busca, não aberta: inei.gob.pe recusa robô, PB017). A NP 108/2018 confirma o nome previsto: "se podrá elaborar el Perfil Sociodemográfico del Perú" (`documento/inei-2018-nota-108.txt` l. 124) | CONFIRMADA (o título, por segunda via) | nenhum; a Sala pode abrir a capa do libro.pdf no navegador do app, se quiser a primária |
| TB042 | s32 | …es decir, la población de ser predominantemente andina ha pasado a ser mayoritariamente costeña. (0.0–8.067 s) | folha_texto | `gente/inei-lib1539-cap01.txt` l. 363–364: "…es decir, la población de ser predominantemente andina ha pasado a ser mayoritariamente costeña." Letra a letra (PB008, F133) | CONFIRMADA | — |
| TB043 | s32 | predominantemente andina (4.367–8.067 s) | grifo_na_pagina | idem, l. 363 (texto impresso) | CONFIRMADA | — |
| TB044 | s32 | mayoritariamente costeña (6.334–8.067 s) | grifo_na_pagina | idem, l. 364 (texto impresso) | CONFIRMADA | — |
| TB045 | s32 | “predominantly Andean” (4.367–8.067 s) | citacao | "predominantemente andina" = "predominantly Andean"; fiel (PB008); igual à voz | CONFIRMADA | — |
| TB046 | s32 | “mostly coastal” (6.334–8.067 s) | citacao | "mayoritariamente costeña" = "mostly coastal"; fiel (PB008); igual à voz | CONFIRMADA | — |
| TB047 | s32 | Translated from Spanish (4.367–8.067 s) | legenda | cobre as duas citações todo o tempo delas (4,367–8,067 e 6,334–8,067 dentro de 4,367–8,067) | CONFIRMADA | — |
| TB048 | s32 | Source: INEI (Peru), 2017 census profile (0.0–8.067 s) | credito | o perfil é do censo de 2017 (cap. 1: "en el año 2017", l. 363); sem o ano de publicação, como pediu PB009 | CONFIRMADA | — |
| TB049 | s33 | (lugar_na_origem do s33-a) (0.3–9.2 s) | rotulo [caca] | espera o veredito da caça do item s33-a (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB050 | s33 | PERUVIAN HIGHLANDS (0.3–9.2 s) | rotulo [sem_caca] | regência › s33 › fallback; o vale do Mantaro fica na Sierra (F176/F177). Rótulo genérico, nada mais específico | CONFIRMADA | — |
| TB051 | s33 | © MapTiler © OpenStreetMap contributors (0.0–9.2 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB052 | s33 | Source: INEI (Peru), 1995 study (1.1–9.2 s) | credito | F136: "Lima, Setiembre de 1995" (`gente/inei-lib0018-presenta.txt` l. 31); F134/F135 | CONFIRMADA | — |
| TB053 | s33 | COMISIÓN DE LA VERDAD Y RECONCILIACIÓN · INFORME FINAL · TOMO VI · P. 627 (9.2–20.367 s) | folha_cabecalho | PB012: o trecho está na página de rodapé "627" (`midia/peru-agua/fontes/gente/cvr-tomo6-1.9-desplazamiento.txt` l. 44); Tomo VI, cap. 1.9 (o PDF da CVR, URL em PB012) | CONFIRMADA | — |
| TB054 | s33 | No existen estimados absolutamente fiables, pero la mejor aproximación permite suponer que alrededor de medio millón de personas abandonaron sus localidades y emprendieron la búsqueda de refugio por temor a ser víctimas directas de la violencia. (9.2–20.367 s) | folha_texto | `midia/peru-agua/fontes/gente/cvr-tomo6-1.9-desplazamiento.txt` l. 13–16: "No existen estimados absolutamente fiables, pero la mejor aproximación permite suponer que alrededor de medio millón de personas abandonaron sus localidades y emprendieron la búsqueda de refugio por temor a ser víctimas directas de la violencia." Letra a letra | CONFIRMADA | — |
| TB055 | s33 | alrededor de medio millón de personas abandonaron sus localidades (16.3–20.367 s) | grifo_na_pagina | idem, l. 14–15: "alrededor de medio millón de personas abandonaron sus / localidades" (texto impresso) | CONFIRMADA | — |
| TB056 | s33 | ABOUT 500,000 DISPLACED (16.3–20.367 s) | heroi | F139/F141/PB011: "alrededor de medio millón" = about 500,000; "abandonaron sus localidades" = displaced | CONFIRMADA | — |
| TB057 | s33 | 1980–2000 · ESTIMATE (16.3–20.367 s) | legenda | PB011; "durante el período 1980-2000" (`midia/peru-agua/fontes/gente/cvr-tomo6-1.9-desplazamiento.txt` l. 355) e "No existen estimados absolutamente fiables" (l. 13) | CONFIRMADA | — |
| TB058 | s33 | Source: Peru's Truth and Reconciliation Commission (CVR), 2003 (9.2–20.367 s) | credito | PB010 (o informe entregue em 28/08/2003, Andina) e PB071 | CONFIRMADA | — |
| TB059 | s34 | © MapTiler © OpenStreetMap contributors (0.0–20.066 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB060 | s34 | Lima and Callao (0.0–11.3 s) | rotulo | PB018/F143: "Comprende la Provincia de Lima y la Provincia del Callao" | CONFIRMADA | — |
| TB061 | s34 | ABOUT 650,000 (1940) (1.166–6.533 s) | cota | F142/F144: "LIMA METROPOLITANA 645,172" (censo de 1940; `gente/inei-lib0018-cap31003-litorizacion.txt` l. 32) | CONFIRMADA | — |
| TB062 | s34 | ABOUT 1 IN 10 PERUVIANS (4.733–6.533 s) | legenda | F146: 645.172 ÷ 6.207.967 ("TOTAL 6,207,967", l. 30) = 10,4 %. A figura: 1 de 10 silhuetas acesa = 10 %, fiel | CONFIRMADA | — |
| TB063 | s34 | LIMA 9.6 M + CALLAO 1.0 M = 10.6 M (8.266–11.3 s) | cota | F145/F145b/F145c: 9.600.724 + 1.042.857 = 10.643.581; 9,6 + 1,0 = 10,6 (a conta da tela fecha); a mesma forma da s03 (lote A) | CONFIRMADA | — |
| TB064 | s34 | ABOUT 1 IN 3 PERUVIANS (10.0–11.3 s) | legenda | F147: 10.643.581 ÷ 32.706.028 = 32,5 %. Em 10 silhuetas, 32,5 % = 3,25 de 10. Três cheias mostram 30 % ("3 in 10"): dentro do "about", mas a figura diz outra fração que o rótulo "1 IN 3" | CONFIRMADA (o rótulo); a figura pede ajuste | achado A1: 3 silhuetas cheias e a 4ª em ~1/4 (3,25 de 10), ou a figura passa a 3 silhuetas com 1 acesa |
| TB065 | s34 | Source: INEI (Peru), censuses 1940 and 2025 (0.0–11.3 s) | credito | PB014 consertado: os números são do censo de 1940 (tabulado pelo INEI em 1995) e do de 2025 | CONFIRMADA | — |
| TB066 | s34 | LIMA REGION + CALLAO (12.733–20.066 s) | rotulo | PB013/F151: "Lima con 41,9%"; "a) Lima incluye la Provincia Constitucional del Callao" (`documento/inei-lib1940-parte01.txt` l. 213, 1416) | CONFIRMADA | — |
| TB067 | s34 | 41.9% OF PERU'S GDP (15.366–20.066 s) | cota | F149/F152: "El departamento que tuvo mayor participación fue Lima con 41,9%" (idem l. 213) | CONFIRMADA | — |
| TB068 | s34 | 2022 ESTIMATE (15.366–20.066 s) | legenda | F150: "2022E/" (idem l. 298, 706) | CONFIRMADA | — |
| TB069 | s34 | Source: INEI (Peru), 2022 GDP estimate (11.3–20.066 s) | credito | PB013 (INEI, PIB por departamentos, 2022E) | CONFIRMADA | — |
| TB070 | s35 | (lugar_na_origem do s35-a) (0.3–4.734 s) | rotulo [caca] | espera o veredito da caça do item s35-a (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB071 | s35 | © MapTiler © OpenStreetMap contributors (4.734–18.467 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB072 | s35 | © MapTiler © OpenStreetMap contributors (0.0–4.734 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB073 | s35 | © MapTiler © OpenStreetMap contributors (18.467–21.234 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB074 | s35 | Pamplona (4.734–11.034 s) | rotulo | PB016: "en la zona denominada Pamplona" (`midia/peru-agua/fontes/gente/pucp-debates-6875.txt` l. 28); o ponto do OSM é aproximado e declarado | CONFIRMADA | — |
| TB075 | s35 | Approximate location (4.734–11.034 s) | legenda | PB016 (a fonte não dá coordenada; o ponto é aproximado) | CONFIRMADA | — |
| TB076 | s35 | 1971 · 180 FAMILIES (4.934–11.034 s) | cota | F156/F157: "invasiones de terrenos eriazos acaecidas en el año 1971, en la zona denominada Pamplona"; "la invasión de 180 familias" (`midia/peru-agua/fontes/gente/pucp-debates-6875.txt` l. 27–32) | CONFIRMADA | — |
| TB077 | s35 | ABOUT 7,000 FAMILIES TO RESETTLE (13.234–18.467 s) | cota | F158: "Se trato, entonces de ubicar alrededor de 7,000 familias" (`midia/peru-agua/fontes/gente/pucp-debates-6875.txt` l. 63); a zona: "un extenso arenal semi-de- cértico ubicado a 50 Km. al sur de Lima" (l. 56–57) | CONFIRMADA | — |
| TB078 | s35 | Source: Medina García, PUCP, 1982 (4.934–18.467 s) | credito | PB015: Debates en Sociología, núm. 7 (1982), PUCP (https://revistas.pucp.edu.pe/index.php/debatesensociologia/article/view/6875) | CONFIRMADA | — |
| TB079 | s35 | Villa El Salvador (19.5–21.234 s) | rotulo [caca] | espera o veredito da caça do item s35-b (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB080 | s35 | Villa El Salvador (19.5–21.234 s) | rotulo [sem_caca] | F160: "el nacimiento del pueblo joven Villa El Salvador ocurrió en mayo de 1971" (PUCP l. 199, OCR); o polígono do distrito | CONFIRMADA | — |
| TB081 | s36 | © MapTiler © OpenStreetMap contributors (0.0–7.633 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB082 | s36 | Lima and Callao (0.0–7.633 s) | rotulo | PB018: a tabela é de "Lima Metropolitana" (Lima + Callao); nenhum distrito | CONFIRMADA | — |
| TB083 | s36 | 1981 · ABOUT 1 IN 4 (3.166–7.633 s) | cota | F161/F163: a tabela "1981 4'608,010 1'171,800 25.5" (`midia/peru-agua/fontes/gente/cvr-tomo4-1.5-lima-metropolitana.txt` l. 96–119); 4 casas com 1 acesa = 25 %, fiel. Aviso: na mesma página, a prosa da CVR diz "Para 1981, casi un tercio de la población limeña vivía en ellos" (l. 91–92); a tela segue a tabela atribuída | CONFIRMADA | — |
| TB084 | s36 | OF LIMA'S PEOPLE IN INFORMAL SETTLEMENTS (3.166–7.633 s) | legenda | F161/F164: "Población de PPJJ" (as barriadas, "rebautizadas como «pueblos jóvenes»", l. 86–87) = assentamentos informais; "Lima's people" = Lima Metropolitana | CONFIRMADA | — |
| TB085 | s36 | Source: INEI (Peru), 1996, cited by the CVR (3.166–7.633 s) | credito | F162: "Fuente: INEI, Lima Metropolitana, perfil sociodemográfico, 1996" na tabela da CVR (PB017). A primária fica NÃO FOI CHECADO (TB284) | CONFIRMADA | — |
| TB086 | s36 | Lima (8.333–10.166 s) | rotulo | PB019: lugar_na_origem "Pueblo Joven, picture was taken in southern part of Lima, in 1997." (`out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); "Lima" é menos específico, sem distrito | CONFIRMADA | — |
| TB087 | s36 | Photo from 1997 (8.333–10.166 s) | aviso_ano | PB020: data_na_origem "April 1997", aviso_de_ano true (`out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…), sha256 98b393c6…) | CONFIRMADA | — |
| TB088 | s36 | *barriadas* (8.9–10.166 s) | legenda | F164: "Las anteriormente denominadas barriadas" (CVR, l. 86); a voz: "Peruvians call them barriadas" | CONFIRMADA | — |
| TB089 | s36 | Håkan Svensson / Wikimedia Commons · CC BY 2.5 (7.633–10.166 s) | credito | PB021: Author "Håkan Svensson [Xauxa]", licença tripla com CC BY 2.5; o credito_na_tela é idêntico em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…) | CONFIRMADA | — |
| TB090 | s37 | Rímac (0.3–5.367 s) | rotulo [caca] | espera o veredito da caça do item s37-a (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB091 | s37 | Rímac (0.3–5.367 s) | rotulo [sem_caca] | F165 (o Rímac sobre Lima; o rótulo não afirma o rio baixo) | CONFIRMADA | — |
| TB092 | s37 | © MapTiler © OpenStreetMap contributors (0.0–5.367 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB093 | s37 | MAY–NOVEMBER (3.267–5.367 s) | legenda | F165/F166: "en períodos de estiaje (de mayo a noviembre)" (`midia/peru-agua/fontes/agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4601–4602) | CONFIRMADA | — |
| TB094 | s37 | Source: Defensoría del Pueblo (Peru), 2025 (3.267–5.367 s) | credito | F231/PB070: Informe Defensorial n.° 239, 2025 | CONFIRMADA | — |
| TB095 | s38 | Rímac (0.3–3.267 s) | rotulo [caca] | espera o veredito da caça do item s38-a (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB096 | s38 | Rímac (0.3–3.267 s) | rotulo [sem_caca] | F167 (o Rímac, sem afirmar a cheia na imagem) | CONFIRMADA | — |
| TB097 | s38 | © MapTiler © OpenStreetMap contributors (0.0–3.267 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB098 | s38 | DECEMBER–APRIL (0.233–3.267 s) | legenda | F167: "el período de avenida solo dura 5 meses al año (de diciembre a abril)" (`midia/peru-agua/fontes/agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4599–4600) | CONFIRMADA | — |
| TB099 | s38 | RÍMAC NATURAL FLOW (3.267–9.4 s) | legenda | F167/F168: "un caudal natural que alcanza los 30 m3/s"; "el cauce natural alcanza solo los 7.8 m3/s" | CONFIRMADA | — |
| TB100 | s38 | DECEMBER–APRIL (3.267–9.4 s) | rotulo | F167 | CONFIRMADA | — |
| TB101 | s38 | MAY–NOVEMBER (3.533–9.4 s) | rotulo | F168 | CONFIRMADA | — |
| TB102 | s38 | ABOUT A QUARTER (7.9–9.4 s) | heroi | PB022: 7,8 ÷ 30 = 0,26 (`midia/peru-agua/fontes/agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4601–4602); a coluna que cai a ~26 % é fiel | CONFIRMADA | — |
| TB103 | s38 | Source: Defensoría del Pueblo (Peru), 2025 (3.267–9.4 s) | credito | F231/PB070 | CONFIRMADA | — |
| TB104 | s38 | (lugar_na_origem do s38-b) (9.7–17.1 s) | rotulo [caca] | espera o veredito da caça do item s38-b (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB105 | s38 | Laguna Marcapomacocha (9.7–17.1 s) | rotulo [sem_caca] | PB059/PB027: "Laguna Marcapomacocha en el departamento de Junín"; a lagoa do Marca I (SENAMHI 2016: "cinco lagunas: Marcapomacocha, Antacoto, Marcacocha, Pucrococha … y Tucto", l. 3869–3870) | CONFIRMADA | — |
| TB106 | s38 | SEDAPAL · Lima's water utility (10.5–17.1 s) | legenda | PB068: "SERVICIO DE AGUA POTABLE Y ALCANTARILLADO DE LIMA - SEDAPAL"; F169 | CONFIRMADA | — |
| TB107 | s38 | © MapTiler © OpenStreetMap contributors (9.4–17.1 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB108 | s39 | © MapTiler © OpenStreetMap contributors (0.0–30.867 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB109 | s39 | STORAGE CAPACITY FOR LIMA (2007) (2.033–7.0 s) | legenda | PA044/PB023: "Cuencas de Almacenamiento de Agua para Lima y Callao"; "CAPACIDAD TOTAL DE ALMACENAMIENTO 282 MMC"; "A Febrero 2007" (`midia/peru-agua/fontes/mecanismo/jica-sedapal-2007-lamina.txt` (p. 3)). Idêntico à s04 (lote A, 0,566–5,7 s) | CONFIRMADA | — |
| TB110 | s39 | MORE THAN HALF · AMAZON SIDE (2.033–7.0 s) | heroi | F171/PB023: "157 MM3 CUENCA MARCAPOMACOCHA" de "282 MMC" = 55,7 %, sob "VERTIENTES DEL ATLANTICO" (`midia/peru-agua/fontes/mecanismo/jica-sedapal-2007-lamina.txt` (p. 3)); os volumes 157 contra 125 em escala, sem número, são fiéis. Idêntico à s04 | CONFIRMADA | — |
| TB111 | s39 | Source: SEDAPAL, 2007 (2.033–7.0 s) | credito | F172: "A Febrero 2007"; a lâmina é da SEDAPAL ("SEDAPAL 資料", p. 1) | CONFIRMADA | — |
| TB112 | s39 | NEARLY 15,000 FT (8.767–14.133 s) | cota | F173–F175/PB025: "REPRESA ANTACOTO 4,445 msnm" (`midia/peru-agua/fontes/mecanismo/jica-sedapal-2007-lamina.txt` (p. 3)) = 14.583 ft; Marca I "sobre los 4,500 m.s.n.m." (`midia/peru-agua/fontes/agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4661) = 14.764 ft; o MVCS dá 4.600 m (15.092 ft). "Nearly 15,000" vale nas três; sem o métrico e sem nome de represa | CONFIRMADA | — |
| TB113 | s39 | Source: SEDAPAL, 2007 (8.767–14.133 s) | credito | F174: "REPRESA ANTACOTO 4,445 msnm" (`midia/peru-agua/fontes/mecanismo/jica-sedapal-2007-lamina.txt` (p. 3)) | CONFIRMADA | — |
| TB114 | s39 | upper Mantaro basin (10.667–14.133 s) | rotulo | F177/PB026: "PARTE ALTA DEL MANTARO" (o título do SENAMHI 2016, l. 340–341); só no norte, sobre as lagoas | CONFIRMADA | — |
| TB115 | s39 | ABOUT 14 MILES (15.233–18.733 s) | cota | F178/F179/PB028: "the 11.9 km long Marcapomacocha-Cuevas canal and the 10.1 km long Cuevas-Milloc tunnel" (`midia/peru-agua/fontes/agua-de-lima/jica-11679578_27-canete-vol3-H.txt` l. 1669–1676); 22,0 km = 13,7 mi | CONFIRMADA | — |
| TB116 | s39 | CANAL 7.4 MILES + TUNNEL 6.3 MILES (15.233–18.733 s) | legenda | PB028: 11,9 km = 7,39 mi → 7.4; 10,1 km = 6,28 mi → 6.3; 7,4 + 6,3 = 13,7 → "ABOUT 14" (a conta da tela fecha) | CONFIRMADA | — |
| TB117 | s39 | Source: JICA, 2002 (15.233–18.733 s) | credito | PB028: o catálogo dá "2002.1" (`agua-de-lima/jica-11679578-catalogo.txt` l. 14) | CONFIRMADA | — |
| TB118 | s39 | Santa Eulalia River (21.233–23.5 s) | rotulo | PB032/F180: lugar_na_origem "Río Santa Eulalia" (`out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); foto de 2021 sob fala no presente, sem aviso | CONFIRMADA | — |
| TB119 | s39 | Johnattan Rupire / Wikimedia Commons · CC BY-SA 4.0 (21.233–23.5 s) | credito | PB033: Author "Johnattan Rupire", CC BY-SA 4.0; credito_na_tela idêntico | CONFIRMADA | — |
| TB120 | s39 | Rímac (22.667–25.8 s) | rotulo | F180 | CONFIRMADA | — |
| TB121 | s39 | La Atarjea (23.5–25.8 s) | rotulo | F181/PB030: "Planta La Atarjea N° 1 y N° 2" | CONFIRMADA | — |
| TB122 | s39 | 70% OF SEDAPAL'S WATER PRODUCTION (2023) (23.5–25.8 s) | legenda | PB030/F182: "La producción anual referida al año 2023 … Planta La Atarjea N° 1 y N° 2 70%" (`midia/peru-agua/fontes/agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4857–4865) | CONFIRMADA | — |
| TB123 | s39 | Source: Defensoría del Pueblo (Peru), 2025 (23.5–25.8 s) | credito | PB030 | CONFIRMADA | — |
| TB124 | s39 | TUNNEL CAPACITY (25.8–30.867 s) | rotulo | PB029/F183: "The capacity of both the Cuevas canal and the Cuevas-Milloc tunnel is 14 m3/sec" (`midia/peru-agua/fontes/agua-de-lima/jica-11679578_27-canete-vol3-H.txt` l. 1669–1676) | CONFIRMADA | — |
| TB125 | s39 | RÍMAC, DRY SEASON (25.8–30.867 s) | rotulo | F168: "en períodos de estiaje … alcanza solo los 7.8 m3/s" | CONFIRMADA | — |
| TB126 | s39 | NEARLY 2× (27.567–30.867 s) | heroi | PB029: 14 ÷ 7,8 = 1,79; a voz "nearly twice"; os dois canos em escala real dão a razão exata | CONFIRMADA | — |
| TB127 | s39 | Sources: JICA, 2002; Defensoría del Pueblo (Peru), 2025 (27.567–30.867 s) | credito | PB028/PB029/F231 | CONFIRMADA | — |
| TB128 | s41 | BUILT 1958–1962 (SENAMHI) (1.333–6.9 s) | rotulo | F184: "la primera fue ejecutada entre los años 1958 y 1962, tiempo en el cual se construyo el túnel trasandino" (`midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt` l. 3865–3866) | CONFIRMADA | — |
| TB129 | s41 | IN SERVICE SINCE 1963 (DEFENSORÍA) (5.3–6.9 s) | rotulo | F185: "El subsistema Marca I entró en operación en el año 1963" (`midia/peru-agua/fontes/agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4661) | CONFIRMADA | — |
| TB130 | s41 | Sources: SENAMHI (Peru), 2016; Defensoría del Pueblo (Peru), 2025 (1.333–6.9 s) | credito | PB069 (SENAMHI 2016) e F231 (Defensoría, fev. 2025) | CONFIRMADA | — |
| TB131 | s41 | SENAMHI · VULNERABILIDAD CLIMÁTICA DE LOS RECURSOS HÍDRICOS EN LAS CUENCAS DE LOS RÍOS CHILLÓN-RÍMAC-LURÍN Y PARTE ALTA DEL MANTARO · 2016 (6.9–14.5 s) | folha_cabecalho | o título corrido "VULNERABILIDAD CLIMÁTICA DE LOS RECURSOS HÍDRICOS EN LAS CUENCAS DE LOS RÍOS CHILLÓN-RÍMAC-LURÍN Y PARTE ALTA DEL MANTARO" (`midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt` l. 340–341); "SERVICIO NACIONAL DE METEOROLOGÍA E HIDROLOGÍA DEL PERÚ (2016)" (l. 302) | CONFIRMADA | — |
| TB132 | s41 | La finalidad del proyecto fue cubrir la demanda del servicio eléctrico en la ciudad de Lima, […] además de afianzar el caudal de río Rímac aguas abajo. (6.9–14.5 s) | folha_texto | PB034: "La finalidad del proyecto fue cubrir la demanda del servicio eléctrico en la ciudad de Lima, pues con el aporte … (OSINERGMING 2012), además de afianzar el caudal de río Rímac aguas abajo." (`midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt` l. 3875–3878). Letra a letra, com "[…]" no lugar do trecho cortado | CONFIRMADA | — |
| TB133 | s41 | cubrir la demanda del servicio eléctrico en la ciudad de Lima (9.266–14.5 s) | grifo_na_pagina | idem, l. 3875 (texto impresso) | CONFIRMADA | — |
| TB134 | s41 | to meet the demand for electricity in the city of Lima (9.266–14.5 s) | traducao | "cubrir la demanda del servicio eléctrico en la ciudad de Lima" = "to meet the demand for electricity in the city of Lima"; fiel (F186) | CONFIRMADA | — |
| TB135 | s41 | además de afianzar el caudal de río Rímac (11.033–14.5 s) | grifo_na_pagina | idem, l. 3878 (texto impresso) | CONFIRMADA | — |
| TB136 | s41 | and also to steady the flow of the Rímac River downstream (11.033–14.5 s) | traducao | "además de afianzar el caudal de río Rímac aguas abajo" (l. 3878): "downstream" traduz "aguas abajo", que está na folha mas FORA do grifo "además de afianzar el caudal de río Rímac" (a linha anterior). F186: "steady the flow" verte "afianzar el caudal" | CONFIRMADA (fiel à frase); "downstream" não está no grifo | achado A2: o grifo passa a "además de afianzar el caudal de río Rímac aguas abajo" (contíguo na folha), ou a tradução perde o "downstream" |
| TB137 | s41 | Translated from Spanish (9.266–14.5 s) | legenda | cobre as duas traduções todo o tempo delas (9,266–14,5 e 11,033–14,5 dentro de 9,266–14,5) | CONFIRMADA | — |
| TB138 | s41 | Source: SENAMHI (Peru), 2016 (6.9–14.5 s) | credito | PB069 | CONFIRMADA | — |
| TB139 | s41 | HUINCO POWER PLANT · 1964 (15.533–18.333 s) | rotulo | F188/PB035: Tabla 3-2, "Huinco … 247.3 … 1964" (coluna "AÑO DE INICIO", `midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt` l. 2685–2700) | CONFIRMADA | — |
| TB140 | s41 | Source: SENAMHI (Peru), 2016 (15.533–18.333 s) | credito | F188 | CONFIRMADA | — |
| TB141 | s42 | SEDAPAL · FEBRUARY 2021 (0.0–4.633 s) | folha_cabecalho | PB037: "17/02/2021"; "Sedapal informa que el miércoles 17 de febrero…" (`midia/peru-agua/fontes/agua-de-lima/proactivo-sedapal-ariana-2021-02.txt` l. 24, 27, 29); sem o dia | CONFIRMADA | — |
| TB142 | s42 | El túnel transandino es el único medio de trasvase del agua almacenada en el sistema de lagunas de la cuenca del Atlántico hacia la cuenca del Pacífico […] (0.0–4.633 s) | folha_texto | PB039: "El túnel transandino es el único medio de trasvase del agua almacenada en el sistema de lagunas de la cuenca del Atlántico hacia la cuenca del Pacífico y representa el 62%…" (`midia/peru-agua/fontes/agua-de-lima/proactivo-sedapal-ariana-2021-02.txt` l. 24, 27, 29). Letra a letra, com "[…]"; "transandino" como a fonte escreve nesta frase | CONFIRMADA | — |
| TB143 | s42 | el único medio de trasvase del agua almacenada (1.633–4.633 s) | grifo_na_pagina | idem (texto impresso) | CONFIRMADA | — |
| TB144 | s42 | “the only means of transfer” (1.633–4.633 s) | citacao | PB036/F189: "el único medio de trasvase" = "the only means of transfer"; fiel. O grifo é mais longo ("…del agua almacenada") que o trecho traduzido entre aspas | CONFIRMADA | opcional (achado A3): o grifo em "el único medio de trasvase", ou a citação “the only means of transferring the stored water” |
| TB145 | s42 | Translated from Spanish (1.633–4.633 s) | legenda | cobre a citação todo o tempo dela (1,633–4,633) | CONFIRMADA | — |
| TB146 | s42 | Source: SEDAPAL (via ProActivo), February 2021 (0.0–4.633 s) | credito | PB037/PB038: a ProActivo, 17/02/2021; a primária no gob.pe fica NÃO FOI CHECADO | CONFIRMADA | — |
| TB147 | s42 | © MapTiler © OpenStreetMap contributors (4.633–10.167 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB148 | s42 | Chillón (7.167–10.167 s) | rotulo | F190/F192: Chillón, Lurín e Rímac dão água a Lima (Defensoría 239) | CONFIRMADA | — |
| TB149 | s42 | Lurín (8.067–10.167 s) | rotulo | F190/F192 | CONFIRMADA | — |
| TB150 | s42 | Rímac (4.633–10.167 s) | rotulo | F190 | CONFIRMADA | — |
| TB151 | s42 | AND WELLS (9.167–10.167 s) | legenda | F191: "442 pozos (4,84 m3/s)" (`midia/peru-agua/fontes/agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4855); a voz "and on wells" | CONFIRMADA | — |
| TB152 | s42 | DRY-SEASON RELEASES (10.167–13.9 s) | legenda | F195: "es el período de descarga" (`midia/peru-agua/fontes/gente/infobae-2024-09-05-tunel-trasandino.txt` l. 49) | CONFIRMADA | — |
| TB153 | s42 | MAY 1 – NOV. 30 (11.9–13.9 s) | cota | F195: "Del 1 de mayo al 30 de noviembre es el período de descarga" (`midia/peru-agua/fontes/gente/infobae-2024-09-05-tunel-trasandino.txt` l. 49); AP: May sem abreviar, Nov. com o dia | CONFIRMADA | — |
| TB154 | s42 | RÓMULO CÁRHUAZ (13.9–20.967 s) | card_nome | F193: "El ingeniero Rómulo Cárhuaz" (`midia/peru-agua/fontes/gente/infobae-2024-09-05-tunel-trasandino.txt` l. 49); a mesma grafia da voz | CONFIRMADA | — |
| TB155 | s42 | Watershed management analyst, SEDAPAL (2024) (14.033–20.967 s) | card_cargo | F193: "analista de Manejo de Cuencas en Sedapal" (`midia/peru-agua/fontes/gente/infobae-2024-09-05-tunel-trasandino.txt` l. 49); "Watershed management analyst" é fiel. A voz diz "a watershed analyst": o card é mais literal, não diverge | CONFIRMADA | — |
| TB156 | s42 | Source: SEDAPAL interview, reported by Infobae, September 2024 (11.9–25.833 s) | credito | F194/F196: "durante una entrevista realizada por el área de Comunicaciones de Sedapal"; a página: "06 Sep, 2024" (l. 32). A primária fica NÃO FOI CHECADO | CONFIRMADA | — |
| TB157 | s42 | © MapTiler © OpenStreetMap contributors (20.967–28.067 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB158 | s42 | © MapTiler © OpenStreetMap contributors (28.067–32.233 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB159 | s42 | Antacoto (21.267–25.833 s) | rotulo | PB040/F197: "tres grandes represas: Antacoto, Huascacocha y Yuracmayo" (`midia/peru-agua/fontes/gente/infobae-2024-09-05-tunel-trasandino.txt` l. 49); Antacoto do lado amazônico ("VERTIENTES DEL ATLANTICO … REPRESA ANTACOTO", `midia/peru-agua/fontes/mecanismo/jica-sedapal-2007-lamina.txt` (p. 3)) | CONFIRMADA | — |
| TB160 | s42 | Huascacocha (21.267–25.833 s) | rotulo | PB040/PB062 (lado amazônico, pelo teste de ponto) | CONFIRMADA | — |
| TB161 | s42 | Yuracmayo (21.267–25.833 s) | rotulo | PB040: Yuracmayo cai do lado do Pacífico; a lâmina da SEDAPAL de 2007 o confirma por conta própria: "VERTIENTES DEL PACIFICO … REPRESA YURACMAYO 4,300 msnm" (`midia/peru-agua/fontes/mecanismo/jica-sedapal-2007-lamina.txt` (p. 3)) | CONFIRMADA | — |
| TB162 | s42 | 19 LAKES · 3 LARGE RESERVOIRS (22.133–25.833 s) | cota | F197/F198: "un total de 19 lagunas reguladas y tres grandes represas" (`midia/peru-agua/fontes/gente/infobae-2024-09-05-tunel-trasandino.txt` l. 49); volátil, atribuído e datado na faixa | CONFIRMADA | — |
| TB163 | s42 | Lima (28.067–32.233 s) | rotulo [caca] | espera o veredito da caça do item s43-a (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB164 | s42 | Lima (28.067–32.233 s) | rotulo [sem_caca] | PB042 (o mapa dos morros de Lima, sem distrito) | CONFIRMADA | — |
| TB165 | s44 | © MapTiler © OpenStreetMap contributors (0.0–10.234 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB166 | s44 | © MapTiler © OpenStreetMap contributors (10.234–15.7 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB167 | s44 | Lima and Callao (0.0–10.234 s) | rotulo | PB047/PB018: nenhum distrito; "16 distritos del ámbito periurbano" sem lista | CONFIRMADA | — |
| TB168 | s44 | MORE THAN 700,000 PEOPLE (4.967–10.234 s) | heroi | F200/F201/F203: "En Lima y Callao, más de 700 mil personas no cuentan con conexión a la red" (`midia/peru-agua/fontes/agua-de-lima/gestion-sunass-cisternas-2026.txt` l. 87); volátil, datado | CONFIRMADA | — |
| TB169 | s44 | WITHOUT A CONNECTION TO THE WATER NETWORK (4.967–10.234 s) | legenda | idem: "no cuentan con conexión a la red" | CONFIRMADA | — |
| TB170 | s44 | Source: Sunass, Peru's water and sanitation regulator (via Gestión), March 2026 (0.0–10.234 s) | credito | PB046/F202: "Superintendencia Nacional de Servicios de Saneamiento (Sunass)" (`midia/peru-agua/fontes/agua-de-lima/gestion-sunass-cisternas-2026.txt` l. 74); matéria de "25/03/2026" (l. 73) | CONFIRMADA | — |
| TB171 | s44 | (lugar_na_origem do s44-a) (10.534–15.7 s) | rotulo [caca] | espera o veredito da caça do item s44-a (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB172 | s44 | PIPED WATER (15.7–18.567 s) | rotulo | F206: "un usuario conectado" | CONFIRMADA | — |
| TB173 | s44 | TRUCKED WATER (15.7–18.567 s) | rotulo | F204/F204b: "en 2025, esta cifra alcanza el 94.7%" dos lares sem conexão abastecidos por caminhão-pipa (`midia/peru-agua/fontes/agua-de-lima/gestion-sunass-cisternas-2026.txt` l. 80) | CONFIRMADA | — |
| TB174 | s44 | ABOUT 6× THE PRICE (16.2–18.567 s) | heroi | PB044/F206: "paga, en promedio, seis veces más por el agua que un usuario conectado" (`midia/peru-agua/fontes/agua-de-lima/gestion-sunass-cisternas-2026.txt` l. 74); 6 marcas = o "seis veces" da fonte; sem os dois preços (a conta deles dá 6,9) | CONFIRMADA | — |
| TB175 | s44 | Source: Sunass, 2025 study (via Gestión, March 2026) (15.7–18.567 s) | credito | PB045: "luego de 10 años de una primera medición efectuada en 2015"; "en 2025, esta cifra…"; 25/03/2026 | CONFIRMADA | — |
| TB176 | s45 | © MapTiler © OpenStreetMap contributors (0.0–2.833 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB177 | s45 | San Juan de Miraflores (0.233–2.833 s) | rotulo | F207: "a 59-year-old resident of San Juan de Miraflores" (`midia/peru-agua/fontes/gente/enca-afp-lima-running-water-dream.txt` l. 41); "south of the city" (l. 39) | CONFIRMADA | — |
| TB178 | s46 | CATALINA NAUPA, 59 (0.0–11.1 s) | card_nome | F207: "said Catalina Naupa, a 59-year-old resident of San Juan de Miraflores" (`midia/peru-agua/fontes/gente/enca-afp-lima-running-water-dream.txt` l. 41), 20/03/2025 (l. 34). Nome e idade conferem | CONFIRMADA | — |
| TB179 | s46 | Resident, San Juan de Miraflores (2025) (0.133–11.1 s) | card_cargo | idem | CONFIRMADA | — |
| TB180 | s46 | Source: AFP, March 2025 (0.0–11.1 s) | credito | PB074/F209: "Thursday 20 March 2025" (l. 34); a matéria é da AFP | CONFIRMADA | — |
| TB181 | s46 | “There are worms in the bottom of the tank.” (7.9–11.1 s) | citacao | F210: "There are worms in the bottom of the tank," said Catalina Naupa (`midia/peru-agua/fontes/gente/enca-afp-lima-running-water-dream.txt` l. 41). Letra a letra (a vírgula vira ponto no fim da citação). É o inglês publicado pela AFP | CONFIRMADA | — |
| TB182 | s47 | (lugar_na_origem do s47-a) (0.3–5.1 s) | rotulo [caca] | espera o veredito da caça do item s47-a (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB183 | s47 | © MapTiler © OpenStreetMap contributors (0.0–17.234 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB184 | s47 | ABOUT 260 GALLONS (1 m³) (8.467–14.134 s) | cota | F212/PB048: "it brings in a cubic meter (260 gallons) of water per family per week" (`midia/peru-agua/fontes/gente/enca-afp-lima-running-water-dream.txt` l. 44); 1 m³ = 264,17 gal, "ABOUT 260" fiel à AFP e à conta | CONFIRMADA | — |
| TB185 | s47 | A WEEK PER FAMILY (8.467–14.134 s) | legenda | idem: "per family per week" | CONFIRMADA | — |
| TB186 | s47 | Source: SEDAPAL, to AFP, March 2025 (8.467–14.134 s) | credito | PB048: "Nicolas Reyes, who works for the city's water utility Sedapal, says…" (AFP, 03/2025) | CONFIRMADA | — |
| TB187 | s47 | FREE (15.6–17.234 s) | heroi | F214: "Blue tanker trucks bring water for free once a week" (`midia/peru-agua/fontes/gente/enca-afp-lima-running-water-dream.txt` l. 39) | CONFIRMADA | — |
| TB188 | s47 | Source: AFP, March 2025 (14.134–17.234 s) | credito | F209/PB074 | CONFIRMADA | — |
| TB189 | s48 | © MapTiler © OpenStreetMap contributors (0.0–7.7 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB190 | s48 | © MapTiler © OpenStreetMap contributors (14.933–19.566 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB191 | s48 | Puente Piedra (1.566–7.7 s) | rotulo | F215: "the hills of the Puente Piedra district north of Lima" (`midia/peru-agua/fontes/gente/kulturaustausch-2024-thirsty-metropolis-lima.txt` l. 56) | CONFIRMADA | — |
| TB192 | s48 | Source: Kulturaustausch (ifa), January 2024 (2.833–19.566 s) | credito | PB049/F215/F216: "01/26/2024" (l. 46); "Published by ifa – Institute for Foreign Cultural Relations" (l. 144) | CONFIRMADA | — |
| TB193 | s48 | VIRGINIA MARTÍNEZ MORALES, 30 (7.7–14.933 s) | card_nome | F221: "Virginia Martínez Morales is 30 years old and has lived in the area with her three children for six years" (`midia/peru-agua/fontes/gente/kulturaustausch-2024-thirsty-metropolis-lima.txt` l. 61). Nome, acentos e idade conferem | CONFIRMADA | — |
| TB194 | s48 | Resident, Puente Piedra (2024) (7.833–14.933 s) | card_cargo | F215: a matéria abre nos morros do distrito de Puente Piedra (l. 56–57) e segue para a cooperativa dela (l. 58); o "(2024)" data a idade | CONFIRMADA | — |
| TB195 | s48 | (lugar_na_origem do s48-a) (15.233–19.566 s) | rotulo [caca] | espera o veredito da caça do item s48-a (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB196 | s48 | Puente Piedra (15.233–19.566 s) | rotulo [sem_caca] | F215 (o polígono do distrito) | CONFIRMADA | — |
| TB197 | s49 | (lugar_na_origem do s49-a) (0.3–6.767 s) | rotulo [caca] | espera o veredito da caça do item s49-a (nenhum clipe com veredito em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); o texto final depende do `lugar_na_origem` | NÃO FOI CHECADO | nenhum agora; reconferir quando o texto voltar ao redator com o veredito |
| TB198 | s49 | © MapTiler © OpenStreetMap contributors (0.0–6.767 s) | credito [sem_caca] | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB199 | s49 | Source: Kulturaustausch (ifa), January 2024 (0.0–11.067 s) | credito | PB049 | CONFIRMADA | — |
| TB200 | s49 | TULA TINOCO ESPINOZA (7.634–11.067 s) | card_nome | F226/PB050: "Tula Tinoco Espinoza, who now has to carry several buckets" (`midia/peru-agua/fontes/gente/kulturaustausch-2024-thirsty-metropolis-lima.txt` l. 72). Grafia confere; sem idade (a fonte não dá) | CONFIRMADA | — |
| TB201 | s49 | Resident, Puente Piedra (2024) (7.767–11.067 s) | card_cargo | PB050: "on the slopes of Puente Piedra … This is where the Los Condes housing co-operative is located" (l. 66–67) | CONFIRMADA | — |
| TB202 | s49 | © MapTiler © OpenStreetMap contributors (11.067–21.934 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB203 | s49 | Puente Piedra (11.067–17.134 s) | rotulo | F215 | CONFIRMADA | — |
| TB204 | s49 | ANDEAN REGIONS (14.7–17.134 s) | rotulo | F227: "most have moved from the Andean regions in search of better work" (`midia/peru-agua/fontes/gente/kulturaustausch-2024-thirsty-metropolis-lima.txt` l. 67) | CONFIRMADA | — |
| TB205 | s49 | Source: Kulturaustausch (ifa), January 2024 (11.067–17.134 s) | credito | PB049 | CONFIRMADA | — |
| TB206 | s49 | DEFENSORÍA DEL PUEBLO · INFORME DEFENSORIAL N.° 239 · 2025 · P. 74 (21.934–31.334 s) | folha_cabecalho | PB053: o trecho está na página de cabeçalho "74"; "Informe Defensorial n.° 239" (`midia/peru-agua/fontes/agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 15) e "n.º 239" (l. 26); 2025 (F231) | CONFIRMADA | — |
| TB207 | s49 | …dependiendo de un solo túnel trasandino con un potencial riesgo de colapso ante sismos de alta intensidad, situación que pone en riesgo la provisión de agua (SEDAPAL 2019: 9). (21.934–31.334 s) | folha_texto | PB053: "…dependiendo de un solo túnel trasandino con un potencial riesgo de colapso ante sismos de alta intensidad, situación que pone en riesgo la provisión de agua (SEDAPAL 2019: 9)." (`midia/peru-agua/fontes/agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4542–4544). Letra a letra | CONFIRMADA | — |
| TB208 | s49 | dependiendo de un solo túnel trasandino (27.3–31.334 s) | grifo_na_pagina | idem, l. 4542 (texto impresso) | CONFIRMADA | — |
| TB209 | s49 | “depending on a single trans-Andean tunnel” (27.3–31.334 s) | citacao | PB051: "dependiendo de un solo túnel trasandino" = "depending on a single trans-Andean tunnel"; fiel ao gerúndio | CONFIRMADA | — |
| TB210 | s49 | potencial riesgo de colapso ante sismos de alta intensidad (28.867–31.334 s) | grifo_na_pagina | idem, l. 4543 (texto impresso) | CONFIRMADA | — |
| TB211 | s49 | “potential risk of collapse in high-intensity earthquakes” (28.867–31.334 s) | citacao | PB052: "potencial riesgo de colapso ante sismos de alta intensidad" = "potential risk of collapse in high-intensity earthquakes"; fiel; risco, não previsão | CONFIRMADA | — |
| TB212 | s49 | Translated from Spanish (27.3–31.334 s) | legenda | cobre as duas citações todo o tempo delas (27,3–31,334 e 28,867–31,334 dentro de 27,3–31,334) | CONFIRMADA | — |
| TB213 | s49 | Source: Defensoría del Pueblo (Peru), 2025, citing SEDAPAL (2019) (21.934–31.334 s) | credito | F229/F230: "(SEDAPAL 2019: 9)"; a primária fica NÃO FOI CHECADO (PB054) | CONFIRMADA | — |
| TB214 | s49 | SECOND TUNNEL (31.334–39.767 s) | legenda | PB056: "nuevo túnel trasandino denomindado Pomacocha – río Blanco" (`midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt` l. 3920–3925); Gestión 30/08/2026: "un túnel trasandino de 10 kilómetros" na Fase 2 (`midia/peru-agua/fontes/agua-de-lima/gestion-obras-cabecera-2026-08-30.txt` l. 89) | CONFIRMADA | — |
| TB215 | s49 | 1990s (33.534–39.767 s) | rotulo | F232/F233: o estudo definitivo de 1996 = desde os anos 1990 | CONFIRMADA | — |
| TB216 | s49 | DEFINITIVE STUDY, 1996 (33.534–39.767 s) | rotulo | PB055 consertado: "el estudio defintivo … el cual fue ejecutado en 1996" (`midia/peru-agua/fontes/agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.txt` l. 3918–3919) | CONFIRMADA | — |
| TB217 | s49 | NO CONSTRUCTION DATE AS OF LATE AUGUST 2026 (35.434–39.767 s) | rotulo | F234/F235/PB057: "la oportunidad de la convocatoria de la Fase 2 … depende de la planificación…" (`midia/peru-agua/fontes/agua-de-lima/gestion-obras-cabecera-2026-08-30.txt` l. 99), "30/08/2026" (l. 76). Busca de 22/10/2026: nada posterior com data (o resultado mais novo é a mesma matéria, https://gestion.pe/economia/megaproyecto-para-traer-mas-agua-para-lima-recien-se-adjudicaria-en-el-verano-2027-sus-fases-y-presupuesto-noticia/). Volátil | CONFIRMADA | reler na véspera de publicar (a Sala) |
| TB218 | s49 | Sources: SENAMHI (Peru), 2016; Gestión, Aug. 30, 2026 (31.334–39.767 s) | credito | PB069 e F236 ("30/08/2026"); "Aug. 30, 2026" na forma AP | CONFIRMADA | — |
| TB219 | s51 | © MapTiler © OpenStreetMap contributors (0.0–38.133 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB220 | s51 | 1.8% OF THE WATER (3.733–5.733 s) | cota | PA001/F239: ANA, PNRH, Cuadro 2.3, 1,76 % (2012), a mesma forma da s01. Na s51 a cota fica 2 s no ar sem crédito além do MapTiler, e a voz ("Not because that side has the water") não a atribui: número sem instituição nem ano (voz.md §2; roupa §4) | CONFIRMADA (o número); falta o dono na cena | achado A4: o crédito "Source: ANA (Peru), 2012 data" de 3,733 a 5,733 s, ou a cota sai |
| TB221 | s51 | Caral (6.9–11.8 s) | rotulo | F240; "Caral" é menos específico que o lugar_na_origem ("Pirámide Mayor de la Ciudad Sagrada de Caral") | CONFIRMADA | — |
| TB222 | s51 | Photo from 2022 (7.6–11.8 s) | aviso_ano | o veredito s51 em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…): sha256 040d35aa…, data_na_origem "27 November 2022, 14:17:55", aviso_de_ano true | CONFIRMADA | — |
| TB223 | s51 | ABOUT 3000 B.C. (7.867–11.8 s) | cota | PB058/F240/F241: "between the years 3000 to 1800 B.C." (`gente/unesco-1269-caral.txt` l. 231); 3000 B.C. ≈ 5.000 anos atrás. "B.C." com pontos, como a s22 ("3000–1800 B.C.") | CONFIRMADA | — |
| TB224 | s51 | JOSE MORALES CIENCIA POLITICA UNMSM / Wikimedia Commons · CC BY-SA 4.0 (6.9–11.8 s) | credito | credito_na_tela do veredito s51 em `out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…): "JOSE MORALES CIENCIA POLITICA UNMSM / Wikimedia Commons · CC BY-SA 4.0" | CONFIRMADA | — |
| TB225 | s51 | Source: UNESCO (7.867–11.8 s) | credito | PB058/PB072; a página só traz "Date of Inscription: 2009" (l. 244), não ano de texto | CONFIRMADA | opcional, ver "Para o redator" |
| TB226 | s51 | Callao (12.4–17.6 s) | rotulo | F242/PB002: o porto de Lima é o Callao (Cobo) | CONFIRMADA | — |
| TB227 | s51 | 1535 (13.433–17.6 s) | cota | F242/F113 | CONFIRMADA | — |
| TB228 | s51 | Lima (15.533–17.6 s) | rotulo | F113 | CONFIRMADA | — |
| TB229 | s51 | 20TH CENTURY (19.433–28.5 s) | cota | F244/F245: a série do INEI de 1940 a 2025 | CONFIRMADA | — |
| TB230 | s51 | (nenhum texto novo) (37.333–38.133 s) | nada | o trecho declarado sem texto | NADA A CHECAR | — |
| TB231 | s52 | Laguna Marcapomacocha (0.0–7.567 s) | rotulo | PB059: lugar_na_origem "Laguna Marcapomacocha en el departamento de Junín, Perú" (`out/peru-agua/_pesquisa/conferencia-midia.json` (sha256 0b544ca0…)); foto de 2018 sob fala atemporal, sem aviso | CONFIRMADA | — |
| TB232 | s52 | Sichuancay / Wikimedia Commons · CC BY-SA 4.0 (0.0–5.234 s) | credito | PB060: Author "Sichuancay", CC BY-SA 4.0 | CONFIRMADA | — |
| TB233 | s52 | Sichuancay / Wikimedia Commons · CC BY-SA 4.0 (5.234–7.567 s) | credito | PB060 | CONFIRMADA | — |
| TB234 | s52 | EVERY MAY 1 (0.367–7.567 s) | legenda | F250: "Del 1 de mayo al 30 de noviembre es el período de descarga" (`midia/peru-agua/fontes/gente/infobae-2024-09-05-tunel-trasandino.txt` l. 49); generaliza a fala de 2024, atribuída na faixa | CONFIRMADA | — |
| TB235 | s52 | Source: SEDAPAL interview, reported by Infobae, September 2024 (0.367–7.567 s) | credito | F193/F194/F196 | CONFIRMADA | — |
| TB236 | s52 | © MapTiler © OpenStreetMap contributors (5.234–33.834 s) | credito | identidade §6 (mapa da MapTiler) e PB063: "“© OpenStreetMap contributors” or “© OpenStreetMap”" (https://osmfoundation.org/wiki/Licence/Attribution_Guidelines) | CONFIRMADA | — |
| TB237 | s52 | Rímac (6.267–7.567 s) | rotulo | F251 | CONFIRMADA | — |
| TB238 | s52 | (nenhum texto novo) (7.567–33.834 s) | nada | o trecho declarado sem texto | NADA A CHECAR | — |

## Tabela 2 · as entradas do contrato (rotulos_dado, cards_pessoa, _avisos_do_ano, _nao_conferido)

| id | cena | texto de tela | papel | fonte (arquivo ou URL, e o trecho literal) | veredito | conserto |
|---|---|---|---|---|---|---|
| TB239 | s01 (s02), s51 | 1.8% OF THE WATER | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: ANA (Peru), Plan Nacional de Recursos Hídricos, Cuadro 2.3, p. 38 (ana-pnrh-1416.txt; PA001, PA011); valor exato "1,76 %" refeito pelo verificador | CONFIRMADA (na s51 falta o crédito, ver A4) | achado A4 (s51) |
| TB240 | s03, s34 | LIMA 9.6 M + CALLAO 1.0 M = 10.6 M | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: INEI, Censo 2025, Presentación de resultados, p. 14 (9.600.724 + 1.042.857 = 10.643.581; doc.num-33); valor exato "10.643.581" refeito pelo verificador | CONFIRMADA | — |
| TB241 | s04, s39 | MORE THAN HALF · AMAZON SIDE | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: SEDAPAL, lâmina "Cuencas de Almacenamiento de Agua para Lima y Callao", fev. 2007 (jica-sedapal-2007-lamina.txt; PA044, PB023); valor exato "157 de 282 hm³ = 55,7 %" refeito pelo verificador | CONFIRMADA | — |
| TB242 | s28 | JANUARY 1535 | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: a ordem de Pizarro, "fecho en Pachacamac á 6 de Enero de 1535" (Cobo, p. 15; PB004); valor exato "January 6, 1535" refeito pelo verificador | CONFIRMADA | — |
| TB243 | s30 (s31) | 65.0% (1940) | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: INEI, Censo 2025, Presentación de resultados, p. 12 (a série de 1940 a 2025; PB005) | CONFIRMADA | — |
| TB244 | s30 (s31) | 28.3% (1940) | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: idem (PB005) | CONFIRMADA | — |
| TB245 | s30 (s31) | 52.4% (1993) | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: idem (PB005) | CONFIRMADA | — |
| TB246 | s30 (s31) | 58.7% (2025) | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: idem (PB005) | CONFIRMADA | — |
| TB247 | s30 (s31) | 6.7% → 14.6% | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: idem (PB006); valor exato "2,18×" refeito pelo verificador | CONFIRMADA | — |
| TB248 | s33 | ABOUT 500,000 DISPLACED | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: CVR, Informe Final, t. VI, p. 627: "alrededor de medio millón de personas abandonaron sus localidades" (PB011, PB012); valor exato "alrededor de medio millón" refeito pelo verificador | CONFIRMADA | — |
| TB249 | s34 | ABOUT 650,000 (1940) | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: INEI 1995, Cuadro 3.7: "LIMA METROPOLITANA 645,172" (censo de 1940; PB014); valor exato "645.172" refeito pelo verificador | CONFIRMADA | — |
| TB250 | s34 | ABOUT 1 IN 10 PERUVIANS | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: INEI 1995: 645.172 ÷ 6.207.967 = 10,4 %; valor exato "10,4 %" refeito pelo verificador | CONFIRMADA | — |
| TB251 | s34 | ABOUT 1 IN 3 PERUVIANS | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: INEI 2026: 10.643.581 ÷ 32.706.028 = 32,5 %; valor exato "32,5 %" refeito pelo verificador | CONFIRMADA (a conta); a figura, ver A1 | achado A1 |
| TB252 | s34 | 41.9% OF PERU'S GDP | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: INEI, PIB por departamentos: "Lima con 41,9%"; "Lima incluye la Provincia Constitucional del Callao" (PB013); valor exato "41,9 %" refeito pelo verificador | CONFIRMADA | — |
| TB253 | s35 | 1971 · 180 FAMILIES | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Medina García, PUCP, 1982: "la invasión de 180 familias" (PB015) | CONFIRMADA | — |
| TB254 | s35 | ABOUT 7,000 FAMILIES TO RESETTLE | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Medina García 1982: "alrededor de 7,000 familias" | CONFIRMADA | — |
| TB255 | s36 | 1981 · ABOUT 1 IN 4 | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: INEI (1996) pela tabela da CVR, t. IV, 1.5: "1981 4'608,010 1'171,800 25.5" (PB017; a primária não foi aberta); valor exato "25,5 %" refeito pelo verificador | CONFIRMADA | — |
| TB256 | s37 | MAY–NOVEMBER | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Defensoría 239: "en períodos de estiaje (de mayo a noviembre)" | CONFIRMADA | — |
| TB257 | s38 | ABOUT A QUARTER | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Defensoría 239, PDF p. 76: "30 m3/s en promedio … solo los 7.8 m3/s" (PB022); valor exato "7,8 ÷ 30 = 0,26" refeito pelo verificador | CONFIRMADA | — |
| TB258 | s39 | NEARLY 15,000 FT | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: SEDAPAL 2007: "REPRESA ANTACOTO 4,445 msnm" (14.583 ft); Defensoría: o Marca I "sobre los 4,500 m.s.n.m."; valor exato "4.445 m = 14.583 ft" refeito pelo verificador | CONFIRMADA | — |
| TB259 | s39 (s40) | ABOUT 14 MILES | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: JICA 2002: "the 11.9 km long … canal and the 10.1 km long Cuevas-Milloc tunnel" (PB028); valor exato "22,0 km = 13,7 mi" refeito pelo verificador | CONFIRMADA | — |
| TB260 | s39 (s40) | 70% OF SEDAPAL'S WATER PRODUCTION (2023) | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Defensoría 239: "La producción anual referida al año 2023 … Planta La Atarjea N° 1 y N° 2 70%" (PB030); valor exato "70 %" refeito pelo verificador | CONFIRMADA | — |
| TB261 | s39 (s40) | NEARLY 2× | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: JICA 2002 ("14 m3/sec") e Defensoría 2025 (7,8 m³/s) (PB029); valor exato "14 ÷ 7,8 = 1,79" refeito pelo verificador | CONFIRMADA | — |
| TB262 | s41 | BUILT 1958–1962 (SENAMHI) | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: SENAMHI 2016: "la primera fue ejecutada entre los años 1958 y 1962" | CONFIRMADA | — |
| TB263 | s41 | IN SERVICE SINCE 1963 (DEFENSORÍA) | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Defensoría 239: "Marca I entró en operación en el año 1963" | CONFIRMADA | — |
| TB264 | s41 | HUINCO POWER PLANT · 1964 | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: SENAMHI 2016, Tabla 3-2 (PB035) | CONFIRMADA | — |
| TB265 | s42 | MAY 1 – NOV. 30 | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Cárhuaz à SEDAPAL, pela Infobae: "Del 1 de mayo al 30 de noviembre es el período de descarga" | CONFIRMADA | — |
| TB266 | s42 | 19 LAKES · 3 LARGE RESERVOIRS | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: idem: "19 lagunas reguladas y tres grandes represas: Antacoto, Huascacocha y Yuracmayo" (PB040) | CONFIRMADA | — |
| TB267 | s44 | MORE THAN 700,000 PEOPLE | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Sunass, pela Gestión de 25/03/2026: "más de 700 mil personas" sem conexão em Lima e Callao (PB043, atribuído) | CONFIRMADA | — |
| TB268 | s44 | ABOUT 6× THE PRICE | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Sunass, estudo de 2025, pela Gestión: "seis veces más" (PB044); valor exato "S/ 22,11 ÷ S/ 3,20 = 6,9" refeito pelo verificador | CONFIRMADA | — |
| TB269 | s46 | CATALINA NAUPA, 59 | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: AFP, 20/03/2025 | CONFIRMADA | — |
| TB270 | s47 | ABOUT 260 GALLONS (1 m³) | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: SEDAPAL (Nicolas Reyes) à AFP: "a cubic meter (260 gallons) of water per family per week" (PB048); valor exato "1 m³ = 264,17 gal" refeito pelo verificador | CONFIRMADA | — |
| TB271 | s48 | VIRGINIA MARTÍNEZ MORALES, 30 | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Kulturaustausch, 26/01/2024 | CONFIRMADA | — |
| TB272 | s49 (s50) | DEFINITIVE STUDY, 1996 | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: SENAMHI 2016: "el estudio defintivo … fue ejecutado en 1996" (PB055) | CONFIRMADA | — |
| TB273 | s49 (s50) | NO CONSTRUCTION DATE AS OF LATE AUGUST 2026 | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Gestión, 30/08/2026 (PB057; a busca de 22/10/2026 não achou data posterior) | CONFIRMADA | — |
| TB274 | s51 | ABOUT 3000 B.C. | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: UNESCO 1269 (PB058) | CONFIRMADA | — |
| TB275 | s51 | 1535 | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: UNESCO 500; Cobo | CONFIRMADA | — |
| TB276 | s51 | 20TH CENTURY | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: INEI (a série de 1940 a 2025) | CONFIRMADA | — |
| TB277 | s52 | EVERY MAY 1 | rotulos_dado | o mesmo que o texto de tela da cena (ver a tabela 1); a fonte do contrato: Cárhuaz à SEDAPAL, pela Infobae (a mesma fala da s42) | CONFIRMADA | — |
| TB278 | s42 | RÓMULO CÁRHUAZ · Watershed management analyst, SEDAPAL (2024) | cards_pessoa | Infobae, 05/09/2024: "El ingeniero Rómulo Cárhuaz, analista de Manejo de Cuencas en Sedapal … durante una entrevista realizada por el área de Comunicaciones de Sedapal" (midia/peru-agua/fontes/gente/infobae-2024-09-05-tunel-trasandino.txt, l. 49); a entrevista primária (gob.pe) não foi aberta (PB041) | CONFIRMADA | — |
| TB279 | s46 | CATALINA NAUPA, 59 · Resident, San Juan de Miraflores (2025) | cards_pessoa | AFP, 20/03/2025, pela eNCA: "said Catalina Naupa, a 59-year-old resident of San Juan de Miraflores" (midia/peru-agua/fontes/gente/enca-afp-lima-running-water-dream.txt, l. 41) | CONFIRMADA | — |
| TB280 | s48 | VIRGINIA MARTÍNEZ MORALES, 30 · Resident, Puente Piedra (2024) | cards_pessoa | Kulturaustausch (ifa), 26/01/2024: "the hills of the Puente Piedra district north of Lima" e "Virginia Martínez Morales is 30 years old and has lived in the area with her three children for six years" (midia/peru-agua/fontes/gente/kulturaustausch-2024-thirsty-metropolis-lima.txt, l. 56 e 61) | CONFIRMADA | — |
| TB281 | s49 | TULA TINOCO ESPINOZA · Resident, Puente Piedra (2024) | cards_pessoa | Kulturaustausch (ifa), 26/01/2024: "on the slopes of Puente Piedra … This is where the Los Condes housing co-operative is located" e "Tula Tinoco Espinoza, who now has to carry several buckets" (mesma cópia, l. 66–67 e 72; PB050) | CONFIRMADA | — |
| TB282 | s36 | Photo from 1997 | _avisos_do_ano | conferencia-midia.json (0b544ca0…), sha256 98b393c6…, data_na_origem "April 1997", aviso_de_ano true | CONFIRMADA | — |
| TB283 | s51 | Photo from 2022 | _avisos_do_ano | conferencia-midia.json (0b544ca0…), sha256 040d35aa…, data_na_origem "27 November 2022, 14:17:55", aviso_de_ano true | CONFIRMADA | — |
| TB284 | s36 | 1981 · ABOUT 1 IN 4 na fonte primária | _nao_conferido | PB017; a tela atribui a quem publicou (confirmado nesta tabela) | NÃO FOI CHECADO — o site recusou robô (https://www.inei.gob.pe/biblioineipub/bancopub/Est/Lib0002/cap0101.htm, 418) | nenhum na tela; a Sala, no navegador do app, se quiser a primária |
| TB285 | s42 | "the only means of transfer" na nota da SEDAPAL | _nao_conferido | PB038; a tela atribui a quem publicou (confirmado nesta tabela) | NÃO FOI CHECADO — o site recusou robô (www.gob.pe (a nota da SEDAPAL de 17/02/2021), 418) | nenhum na tela; a Sala, no navegador do app, se quiser a primária |
| TB286 | s42 | o card de Cárhuaz na entrevista primária | _nao_conferido | PB041; a tela atribui a quem publicou (confirmado nesta tabela) | NÃO FOI CHECADO — o site recusou robô (gob.pe (a entrevista da área de Comunicações da SEDAPAL), 418) | nenhum na tela; a Sala, no navegador do app, se quiser a primária |
| TB287 | s44 | os 700,000 e o "6×" no estudo da Sunass | _nao_conferido | PB043; a tela atribui a quem publicou (confirmado nesta tabela) | NÃO FOI CHECADO — o site recusou robô (https://www.sunass.gob.pe/ → www.gob.pe, 418) | nenhum na tela; a Sala, no navegador do app, se quiser a primária |
| TB288 | s49 (s50) | o plano da SEDAPAL de 2019 citado pela Defensoría | _nao_conferido | PB054; a tela atribui a quem publicou (confirmado nesta tabela) | NÃO FOI CHECADO — o site recusou robô (https://www.gob.pe/institucion/sunass/informes-publicaciones/5878970-pmo-sedapal-2020, 418) | nenhum na tela; a Sala, no navegador do app, se quiser a primária |

## Tabela 3 · o glossário do lote e a pergunta do comentário

| id | cena | texto de tela | papel | fonte (arquivo ou URL, e o trecho literal) | veredito | conserto |
|---|---|---|---|---|---|---|
| TB289 | s42 | Rómulo Cárhuaz | glossario (pessoa) | Infobae, 05/09/2024: "El ingeniero Rómulo Cárhuaz, analista de Manejo de Cuencas en Sedapal" (midia/peru-agua/fontes/gente/infobae-2024-09-05-tunel-trasandino.txt, l. 49); roteiro-narrador.md — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB290 | s46 | Catalina Naupa | glossario (pessoa) | AFP, 20/03/2025, pela eNCA: "said Catalina Naupa, a 59-year-old resident of San Juan de Miraflores" (midia/peru-agua/fontes/gente/enca-afp-lima-running-water-dream.txt, l. 41) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB291 | s48 | Virginia Martínez Morales | glossario (pessoa) | Kulturaustausch (ifa), 26/01/2024: "Virginia Martínez Morales is 30 years old and has lived in the area with her three children" (midia/peru-agua/fontes/gente/kulturaustausch-2024-thirsty-metropolis-lima.txt, l. 61) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB292 | s49 | Tula Tinoco Espinoza | glossario (pessoa) | Kulturaustausch (ifa), 26/01/2024: "Tula Tinoco Espinoza, who now has to carry several buckets" (mesma cópia, l. 72) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB293 | s28 | Bernabé Cobo | glossario (pessoa) | Historia de la fundación de Lima, ed. 1882: "Padre Bernabé Cobo de la Compañia de Jesús. año de 1639" (midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt; PB001) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB294 | s35 | Medina García | glossario (pessoa) | Debates en Sociología, núm. 7 (1982), PUCP (https://revistas.pucp.edu.pe/index.php/debatesensociologia/article/view/6875; PB015, lido pelo verificador) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB295 | s51 | JOSE MORALES CIENCIA POLITICA UNMSM | glossario (pessoa) | conferencia-midia.json › credito_na_tela (s22 e o reuso da s51): o nome de autor como o Commons o escreve — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB296 | s36 | Håkan Svensson | glossario (pessoa) | Commons, File:Lima_PuebloJov_4.jpg: Author "Håkan Svensson [Xauxa]" (PB021) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB297 | s39 | Johnattan Rupire | glossario (pessoa) | Commons, File:Río_Santa_Eulalia.jpg (PB033) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB298 | s52 | Sichuancay | glossario (pessoa) | Commons, File:Laguna_Marcapomacocha.jpg (PB060) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB299 | s41, s49 | SENAMHI (Peru) | glossario (instituicao) | PB069; a voz: "Peru's weather service" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB300 | s30, s32, s33, s34, s36 | INEI (Peru) | glossario (instituicao) | PB067; a voz: "Peru's statistics institute" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB301 | s38, s39, s42, s47, s49, s52 | SEDAPAL | glossario (empresa) | "SERVICIO DE AGUA POTABLE Y ALCANTARILLADO DE LIMA - SEDAPAL" (Defensoría 239, bibliografia; PB068); a voz: "Lima's water utility", "the utility" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB302 | s44 | Sunass | glossario (instituicao) | Gestión, 25/03/2026: "Superintendencia Nacional de Servicios de Saneamiento (Sunass)" (PB046); a voz: "Peru's water regulator"; em linha de caixa alta, SUNASS (a mesma grafia) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB303 | s37, s38, s39, s41, s49 | Defensoría del Pueblo (Peru) | glossario (instituicao) | Informe Defensorial n.° 239 (2025), cópia local; PB070; a voz: "Peru's ombudsman" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB304 | s33 | Peru's Truth and Reconciliation Commission (CVR) | glossario (instituicao) | PB071; a voz diz o nome em inglês — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB305 | s29, s51 | UNESCO | glossario (instituicao) | PB072; a voz diz "UNESCO" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB306 | s39 | JICA | glossario (instituicao) | PB073 (o catálogo do relatório de 2002) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB307 | s35 | PUCP | glossario (instituicao) | Pontificia Universidad Católica del Perú, revista Debates en Sociología (PB015) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB308 | s46, s47 | AFP | glossario (veiculo) | PB074; a voz diz "AFP" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB309 | s48, s49 | Kulturaustausch (ifa) | glossario (veiculo) | "Published by ifa – Institute for Foreign Cultural Relations" (PB049); a voz: "a German magazine"; o "ifa" em minúsculas, como o instituto escreve — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB310 | s42, s52 | Infobae | glossario (veiculo) | Infobae, 05/09/2024: "…megaobra - Infobae" (cópia local, l. 1; PB075) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB311 | s44, s49 | Gestión | glossario (veiculo) | Gestión: "… \| PERU \| GESTIÓN" (cópia local gestion-sunass, l. 1; PB076) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB312 | s42 | ProActivo | glossario (veiculo) | proactivo.com.pe, 17/02/2021 (PB037) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB313 | s28, s29, s30, s33, s34, s35, s36, s37, s38, s39, s42, s44, s45, s47, s48, s49, s51, s52 | © MapTiler © OpenStreetMap contributors | glossario (outro) | identidade §6; a 56 px (identidade §4.1) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB314 | s36, s39, s51, s52 | Wikimedia Commons | glossario (outro) | o acervo dos créditos de foto (credito_na_tela dos vereditos) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB315 | s30, s32, s33, s34, s36, s37, s38, s39, s41, s44, s49 | PERU | glossario (lugar) | AP Stylebook: Peru (sem acento); país em caixa alta (identidade §3) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB316 | s39 | AMAZON SIDE | glossario (lugar) | ANA, PNRH ("Amazonas"); a camada vertente-atlantico (nunca ATLANTIC SIDE como rótulo) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB317 | s39 | Amazon | glossario (lugar) | roteiro-narrador.md; rio em caixa normal (identidade §3) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB318 | s29, s30, s34, s36, s38, s39, s41, s42, s44, s51 | Lima | glossario (lugar) | roteiro-narrador.md; AP — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB319 | s28, s29, s34, s36, s44, s51 | Callao | glossario (lugar) | roteiro-narrador.md — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB320 | s34 | LIMA REGION | glossario (lugar) | roteiro-narrador.md ("the Lima region"); a camada departamento-lima (PA007) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB321 | s34, s36, s44 | Lima and Callao | glossario (lugar) | roteiro-narrador.md; INEI: "Comprende la Provincia de Lima y la Provincia del Callao" (PB018) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB322 | s29, s37, s38, s39, s41, s42, s52 | Rímac | glossario (lugar) | roteiro-narrador.md; ANA 2014 — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB323 | s51 | Caral | glossario (lugar) | roteiro-narrador.md; UNESCO 1269 — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB324 | s38, s52 | Laguna Marcapomacocha | glossario (lugar) | lugar_na_origem do veredito s52: "Laguna Marcapomacocha en el departamento de Junín, Perú" (PB059) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB325 | s39 | upper Mantaro basin | glossario (lugar) | roteiro-narrador.md ("the upper Mantaro basin"); "PARTE ALTA DEL MANTARO" (F177); só no norte, sobre as lagoas (PB026) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB326 | s39 | Santa Eulalia River | glossario (lugar) | roteiro-narrador.md; lugar_na_origem do veredito s40 ("Río Santa Eulalia") — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB327 | s39 | La Atarjea | glossario (lugar) | Defensoría 239: "Planta La Atarjea N° 1 y N° 2 70%" (PB030) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB328 | s41 | Huinco | glossario (lugar) | roteiro-narrador.md; SENAMHI 2016, Tabla 3-2 (PB035) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB329 | s42 | Antacoto | glossario (lugar) | Infobae, 2024: "tres grandes represas: Antacoto, Huascacocha y Yuracmayo" (PB040) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB330 | s42 | Huascacocha | glossario (lugar) | idem (PB040) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB331 | s42 | Yuracmayo | glossario (lugar) | idem (PB040; do lado do Pacífico) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB332 | s41, s42 | Chillón | glossario (lugar) | roteiro-narrador.md — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB333 | s41, s42 | Lurín | glossario (lugar) | roteiro-narrador.md — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB334 | s35 | Pamplona | glossario (lugar) | Medina García 1982: "en la zona denominada Pamplona" (PB016); nunca "Pamplona Alta" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB335 | s35 | Villa El Salvador | glossario (lugar) | roteiro-narrador.md — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB336 | s45, s46 | San Juan de Miraflores | glossario (lugar) | roteiro-narrador.md; AFP (nome próprio de 4 palavras: vai inteiro) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB337 | s48, s49 | Puente Piedra | glossario (lugar) | roteiro-narrador.md; Kulturaustausch: "the Puente Piedra district north of Lima" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB338 | s30, s33 | HIGHLANDS | glossario (lugar) | INEI, regiões naturais do censo (Sierra); roteiro: "the highlands" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB339 | s30, s32 | COAST | glossario (lugar) | INEI (Costa); roteiro: "the region the census calls the coast"; sempre com a legenda que diz que é a do censo — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB340 | s30 | RAINFOREST | glossario (lugar) | INEI (Selva); roteiro: "the rainforest" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB341 | s49 | ANDEAN REGIONS | glossario (lugar) | roteiro-narrador.md; Kulturaustausch: "from the Andean regions" — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB342 | s33 | PERUVIAN HIGHLANDS | glossario (lugar) | regência › s33 › beats[0] › fallback ("sem rótulo de lugar mais preciso que 'Peruvian highlands'") — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB343 | s36 | *barriadas* | glossario (outro) | roteiro-narrador.md; em itálico na tela — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB344 | s39 | MILES | glossario (unidade) | a casa (vídeos 2 e 3: "ABOUT 14 MILES", "5 MILES"); por extenso em caixa alta — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB345 | s39 | FT | glossario (unidade) | a casa (vídeo 2: "ABOUT 15,000 FT") — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB346 | s47 | GALLONS | glossario (unidade) | por extenso (AP não abrevia); "a cubic meter (260 gallons)" (AFP) — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB347 | s51 | B.C. | glossario (outro) | AP Stylebook (com pontos), como a UNESCO escreve ("3000 to 1800 B.C.") — a grafia confere com a fonte e aparece no texto de tela de cada cena do lote listada (conferido por script) | CONFIRMADA | — |
| TB348 | s52 (s53) | Which side of the Andes would you live on? (reserva: Which side would you live on?) | pergunta | não afirma fato | NADA A CHECAR | — |

## Os achados acionáveis

1. **[LEVE] A1 · s34, a figura de "ABOUT 1 IN 3 PERUVIANS" (TB064).**
   - **O problema:** 10.643.581 ÷ 32.706.028 = 32,5 %, ou seja, 3,25 de 10 silhuetas. Com 3 cheias, a figura mostra 30 %: cabe no "about", mas diz "3 em 10" ao lado de um rótulo que diz "1 em 3".
   - **A de 1940 está certa** (TB062): 1 de 10 acesa para 10,4 %.
   - **CONSERTO:** na `nota` de TB064, "a figura: 3 silhuetas cheias e a 4ª preenchida em 1/4 (3,25 de 10)". A outra saída é uma figura própria de 3 silhuetas com 1 acesa. O rótulo fica.
   - **RAIZ:** PONTUAL (o redator deixou a figura ao verificador).
2. **[LEVE] A2 · s41, "downstream" fora do grifo (TB135, TB136).**
   - **O problema:** a tradução "and also to steady the flow of the Rímac River downstream" verte "además de afianzar el caudal de río Rímac aguas abajo", mas o grifo para em "…río Rímac". A tradução é fiel à frase, e o grifo não mostra o "aguas abajo" que ela traduz.
   - **CONSERTO:** o texto de TB135 passa a `además de afianzar el caudal de río Rímac aguas abajo`, contíguo na folha (`senamhi-2016…txt` l. 3878). A outra saída: TB136 sem o "downstream".
   - **RAIZ:** PONTUAL.
3. **[LEVE, opcional] A3 · s42, o grifo mais longo que a citação (TB143, TB144).**
   - **O problema:** o grifo é "el único medio de trasvase del agua almacenada", e a citação traduz só "el único medio de trasvase", como “the only means of transfer”. A tradução é fiel; o par fica desigual.
   - **CONSERTO:** o grifo `el único medio de trasvase`. A outra saída é a citação `“the only means of transferring the stored water”`, que pede de novo o tempo no ar.
   - **RAIZ:** PONTUAL.
4. **[LEVE] A4 · s51, "1.8% OF THE WATER" sem dono na cena (TB220).**
   - **O problema:** a cota fica 2 s no ar (3,733–5,733 s), e na cena só corre o crédito do MapTiler. A voz ("Not because that side has the water") não atribui o número. É número sem instituição nem ano (`marca/voz.md` §2; a roupa, §4). Na s01, a mesma cota leva "Source: ANA (Peru), National Water Resources Plan, 2012 data".
   - **CONSERTO:** um item novo `{"cena": "s51", "t0": 3.733, "t1": 5.733, "papel": "credito", "texto": "Source: ANA (Peru), 2012 data"}`, ou a forma inteira da s01. O crédito não conta no teto de 4 textos. A outra saída é a cota sair.
   - **RAIZ:** PONTUAL. A `nota` diz "a mesma forma da s01", e o crédito não veio junto.

Nenhum achado GRAVE ou MÉDIO. Nenhuma citação aspada diverge do original. A aritmética interna fecha em todas as contas da tela:
- 9,6 + 1,0 = 10,6;
- 7,4 + 6,3 = 13,7 ≈ 14;
- 14 ÷ 7,8 = 1,79;
- 7,8 ÷ 30 = 0,26;
- 157 ÷ 282 = 55,7 %;
- 6,7 → 14,6 = 2,18×;
- 645.172 ÷ 6.207.967 = 10,4 %;
- 1.171.800 ÷ 4.608.010 = 25,4 % (a tabela imprime 25,5);
- 4.445 m = 14.583 ft;
- 1 m³ = 264,2 gal.

## As respostas aos pontos "em especial" do pedido

- **As silhuetas.**
  - s34: a de 1940 é fiel (1 de 10 para 10,4 %); a de 2025 pede 3,25 de 10 (A1).
  - s31 (na s30, TB031): 28,3 % = 2,83 de 10. A `nota` já proíbe 3 cheias. Fiel com só a porcentagem, ou com 2 cheias e a 3ª em ~83 %.
  - s36 (TB083): 4 casas com 1 acesa = 25 %, fiel aos 25,5 %.
  - Nenhum outro bloco de silhuetas tem contagem (s33 e s44, "sem contagem").
- **A marca "Translated from Spanish"** cobre cada tradução todo o tempo dela, e cada tradução é fiel: s28 (TB005, TB012), s32 (TB047), s41 (TB137), s42 (TB145), s49/s50 (TB212). Os dois reparos de alinhamento grifo/tradução são A2 e A3. A citação da AFP na s46 (TB181) não leva a marca, e está certo: é o inglês publicado pela AFP.
- **A s36:**
  - "Photo from 1997" confere com o `data_na_origem` "April 1997" (TB087);
  - o rótulo "Lima" é menos específico que o "southern part of Lima" da origem, sem distrito (TB086);
  - "1981 · ABOUT 1 IN 4" é a tabela 25.5 (TB083);
  - "Source: INEI (Peru), 1996, cited by the CVR" (TB085) diz o mesmo que "INEI (1996), CITED BY THE CVR", e a primária fica NÃO FOI CHECADO.
- **As s39 e s04:** "STORAGE CAPACITY FOR LIMA (2007)", "MORE THAN HALF · AMAZON SIDE" e "Source: SEDAPAL, 2007" são **idênticos** nas duas cenas (TB109–TB111; a s04 nos 0,566–5,7 s). "upper Mantaro basin" fica só no norte (TB114). "NEARLY 15,000 FT" vai sem número de represa e sem métrico (TB112).
- **A s42:**
  - o card "RÓMULO CÁRHUAZ · Watershed management analyst, SEDAPAL (2024)" (TB154, TB155);
  - "SEDAPAL · FEBRUARY 2021" (TB141);
  - Yuracmayo do lado do Pacífico (TB161), agora com uma segunda fonte, a lâmina da SEDAPAL de 2007: "VERTIENTES DEL PACIFICO … REPRESA YURACMAYO".
- **A s44:** sem distrito (TB167); "ABOUT 6× THE PRICE" sem os dois preços (TB174); a linha da Sunass (TB170).
- **As pessoas:** "CATALINA NAUPA, 59" (TB178), "VIRGINIA MARTÍNEZ MORALES, 30" (TB193) e "TULA TINOCO ESPINOZA" (TB200) conferem em nome, acento e idade. "ABOUT 260 GALLONS (1 m³)" é a conversão da própria AFP (TB184).
- **A s50:** "DEFINITIVE STUDY, 1996" (TB216) e "NO CONSTRUCTION DATE AS OF LATE AUGUST 2026" (TB217).
- **A s51:**
  - "Photo from 2022" (TB222) é o veredito do reuso no `conferencia-midia.json` `0b544ca0…`: arquivo `040d35aa…`, data_na_origem "27 November 2022, 14:17:55", aviso_de_ano true;
  - "ABOUT 3000 B.C." usa a mesma forma "B.C." da s22 ("3000–1800 B.C.") (TB223).
- **Os créditos:**
  - **O "©":** só o do MapTiler/OSM. Os créditos de foto do Commons seguem o `credito_na_tela` de cada veredito.
  - **Com ano:** as instituições e os veículos levam ano, ou mês e ano (SEDAPAL 2007, JICA 2002, SENAMHI 2016, Defensoría 2025, INEI 1995/1996/2022/2017/censos, CVR 2003, PUCP 1982, AFP março 2025, Kulturaustausch janeiro 2024, Infobae setembro 2024, Gestión março e 30 de agosto de 2026, Cobo 1639/1882).
  - **Sem ano:** "Source: UNESCO" (s29 e s51, como a s22 do lote A). A página não traz ano de texto, só as datas de inscrição (Lima 1988; Caral 2009). Ver "Para o redator".

## A lista de nomes (anônimo → pessoa ou instituição nomeável)

- **"An official at the utility"** (s47; a tela diz "SEDAPAL, to AFP"): Nicolas Reyes, "who works for the city's water utility Sedapal". O cargo não é dado. AFP, 20/03/2025, https://www.enca.com/opinion/poor-areas-perus-capital-running-water-dream. O card dele ficou fora, porque a voz não diz o nome.
- **"the news agency AFP"** (s46–s47): a matéria de Carlos Mandujano e Lena Cloarec, fotos de Ernesto Benavides (PB074); mesma URL.
- **"a German magazine"** (s48–s49): KULTURAUSTAUSCH, do ifa (Institute for Foreign Cultural Relations), reportagem de Elizabeth Salazar Vega, 26/01/2024. https://www.kulturaustausch.de/en/issues/issue-i-2024/translate-to-english-lima-die-durstige-metropole/
- **"Census figures cited by Peru's truth commission"** (s36): INEI, "Lima Metropolitana, perfil sociodemográfico", 1996, pela tabela da CVR, t. IV, 1.5 (PB017).
- **"Peru's water regulator"** (s44): Sunass, pela Gestión de 25/03/2026 (PB046).

## Os 2 padrões mais vistos

1. **O desenho e o grifo um passo fora do texto:** a figura que mostra outra fração que o rótulo (A1); o grifo menor ou maior que a tradução ao lado (A2, A3).
2. **A forma copiada de outra cena sem o crédito que a sustentava ali** (A4). As formas repetidas (s04/s39, s03/s34, s01/s51, s22/s51) conferem letra a letra, mas a da s51 perdeu a linha de fonte.

## Voláteis na tela (data-base 22/10/2026)

- **s44, "MORE THAN 700,000 PEOPLE … (via Gestión), March 2026"** (TB168, TB170):
  - muda com um número novo da Sunass ou da SEDAPAL;
  - zera com a ligação das áreas periurbanas;
  - a tela já leva a data.
- **s50, "NO CONSTRUCTION DATE AS OF LATE AUGUST 2026"** (TB217):
  - cai no dia em que a ProInversión, a SEDAPAL ou o MVCS derem data à Fase 2;
  - a busca de hoje não achou nada depois de 30/08/2026;
  - reler na véspera de publicar.
- **s42, "19 LAKES · 3 LARGE RESERVOIRS"** (fala de 2024, TB162): muda com uma represa nova. A tela leva a atribuição e o ano.
- **s47, "FREE"** (AFP, 03/2025, TB187): a atribuição e a data na faixa o protegem.

## Para o redator-de-tela

- **Mudar** (os quatro LEVES):
  - A1: a `nota` de TB064, a figura com 3,25 de 10;
  - A2: o grifo de TB135 com "aguas abajo";
  - A3 (opcional): o grifo de TB143 em "el único medio de trasvase";
  - A4: o crédito da ANA na s51, 3,733–5,733 s.
- **Fica como está:** todo o resto do lote, inclusive as formas que a tarefa listou "em especial".
- **"Source: UNESCO" sem ano (s29, s51 e a s22 do lote A).**
  - A página não dá ano ao texto. O ano de inscrição (1988 em Lima, 2009 em Caral) não é o ano da frase citada, e pô-lo no crédito seria inventar uma data de texto.
  - **A minha leitura:** fica "Source: UNESCO", igual nas três cenas.
  - Se a régua de crédito pedir mais, a forma segura é "Source: UNESCO World Heritage Centre", sem ano.
- **A citação da AFP (s46)** é o inglês que a AFP publicou da fala em espanhol. Está literal e atribuída. Não leva "Translated from Spanish", porque a tradução não é do canal.
- **Os rótulos que esperam a caça** (12 itens, abaixo): quando voltarem com o `lugar_na_origem`, passam por esta lente de novo. Entre eles está o texto fixo "Lima", "Rímac" ou "Villa El Salvador" do caminho `caca`: ele só vale se a origem do clipe nomear o lugar.

## Para a Sala

**NÃO FOI CHECADO, item a item:**

- TB018 (s29, rotulo [caca]): Lima (5.566–13.333 s) — NÃO FOI CHECADO: espera o veredito da caça do item s29-a (nenhum clipe com veredito ainda)
- TB049 (s33, rotulo [caca]): (lugar_na_origem do s33-a) (0.3–9.2 s) — NÃO FOI CHECADO: espera o veredito da caça do item s33-a (nenhum clipe com veredito ainda)
- TB070 (s35, rotulo [caca]): (lugar_na_origem do s35-a) (0.3–4.734 s) — NÃO FOI CHECADO: espera o veredito da caça do item s35-a (nenhum clipe com veredito ainda)
- TB079 (s35, rotulo [caca]): Villa El Salvador (19.5–21.234 s) — NÃO FOI CHECADO: espera o veredito da caça do item s35-b (nenhum clipe com veredito ainda)
- TB090 (s37, rotulo [caca]): Rímac (0.3–5.367 s) — NÃO FOI CHECADO: espera o veredito da caça do item s37-a (nenhum clipe com veredito ainda)
- TB095 (s38, rotulo [caca]): Rímac (0.3–3.267 s) — NÃO FOI CHECADO: espera o veredito da caça do item s38-a (nenhum clipe com veredito ainda)
- TB104 (s38, rotulo [caca]): (lugar_na_origem do s38-b) (9.7–17.1 s) — NÃO FOI CHECADO: espera o veredito da caça do item s38-b (nenhum clipe com veredito ainda)
- TB163 (s42, rotulo [caca]): Lima (28.067–32.233 s) — NÃO FOI CHECADO: espera o veredito da caça do item s43-a (nenhum clipe com veredito ainda)
- TB171 (s44, rotulo [caca]): (lugar_na_origem do s44-a) (10.534–15.7 s) — NÃO FOI CHECADO: espera o veredito da caça do item s44-a (nenhum clipe com veredito ainda)
- TB182 (s47, rotulo [caca]): (lugar_na_origem do s47-a) (0.3–5.1 s) — NÃO FOI CHECADO: espera o veredito da caça do item s47-a (nenhum clipe com veredito ainda)
- TB195 (s48, rotulo [caca]): (lugar_na_origem do s48-a) (15.233–19.566 s) — NÃO FOI CHECADO: espera o veredito da caça do item s48-a (nenhum clipe com veredito ainda)
- TB197 (s49, rotulo [caca]): (lugar_na_origem do s49-a) (0.3–6.767 s) — NÃO FOI CHECADO: espera o veredito da caça do item s49-a (nenhum clipe com veredito ainda)
- TB284 (s36, _nao_conferido): 1981 · ABOUT 1 IN 4 na fonte primária — NÃO FOI CHECADO — o site recusou robô (https://www.inei.gob.pe/biblioineipub/bancopub/Est/Lib0002/cap0101.htm, 418)
- TB285 (s42, _nao_conferido): "the only means of transfer" na nota da SEDAPAL — NÃO FOI CHECADO — o site recusou robô (www.gob.pe (a nota da SEDAPAL de 17/02/2021), 418)
- TB286 (s42, _nao_conferido): o card de Cárhuaz na entrevista primária — NÃO FOI CHECADO — o site recusou robô (gob.pe (a entrevista da área de Comunicações da SEDAPAL), 418)
- TB287 (s44, _nao_conferido): os 700,000 e o "6×" no estudo da Sunass — NÃO FOI CHECADO — o site recusou robô (https://www.sunass.gob.pe/ → www.gob.pe, 418)
- TB288 (s49 (s50), _nao_conferido): o plano da SEDAPAL de 2019 citado pela Defensoría — NÃO FOI CHECADO — o site recusou robô (https://www.gob.pe/institucion/sunass/informes-publicaciones/5878970-pmo-sedapal-2020, 418)

- Nenhuma URL do gob.pe foi tentada nesta tarefa. O 418 é o registrado pela pesquisa e pelo laudo PB, e a regra do pedido proíbe tentar de novo.
- **Opcional, no navegador do app:** a capa do Perfil de 2017 (https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf). Ela confirma na primária o título "Perú: Perfil Sociodemográfico" da folha da s32 (TB041), que aqui só tem segunda via (Wikipedia e o índice da busca) e a nota de imprensa 108/2018.

**Divergências da voz:** nenhuma. A grafia de tela bate com o `roteiro-narrador.md` em todos os nomes do lote: Rómulo Cárhuaz, Catalina Naupa, Virginia Martínez Morales, Tula Tinoco Espinoza, Rímac, Chillón, Lurín, Santa Eulalia, Huinco, Villa El Salvador, San Juan de Miraflores, Puente Piedra, Callao, *barriadas*, Caral. Nada a regravar.
- **O card da s42** diz "Watershed management analyst", e a voz, "a watershed analyst". O card é a forma literal da Infobae ("analista de Manejo de Cuencas"); a voz encurta, e as duas são verdadeiras.
- **A voz da s39** ("more than half of the water Lima stores for the dry season") se apoia, além da capacidade de 2007, nas reservas: "representa el 62% del volumen total de la reserva de agua de Sedapal" (ProActivo, 2021) e "más del 60% de las reservas de agua" (Defensoría, 2025).

**Avisos, sem mudar nada:**
- **s36:** na mesma página da tabela, a prosa da CVR diz "Para 1981, casi un tercio de la población limeña vivía en ellos". A tela segue a tabela atribuída ao INEI (25,5 %), e está certa.
- **s44:** os dois preços da Gestión dão 6,9, não 6. A tela fica no "seis veces" da fonte, sem os preços.

**DECISÃO DO LUCAS PENDENTE que tocou esta checagem:** nenhuma.

---

COBERTURA: 328 de 345. A lista foi derivada à mão, por script de leitura do `textos-tela.json`: todo item do lote, sem amostra. 17 itens ficaram NÃO FOI CHECADO: 12 esperam o veredito da caça, e 5 são as primárias do gob.pe, que a tela já atribui a quem as publicou. 3 itens NADA A CHECAR ficaram fora da conta. Laudo CHECADO PARCIALMENTE.
NOTA: 9/10
VEREDITO: RESSALVA

## Reconferência 1 (sobre 344396a4…)

- **Data-base:** 22/10/2026.
- **O objeto:** `out/peru-agua/textos-tela.json`, sha256 `344396a415cbce476018180bb130afaaf7451d34a58d67fc007325ff6710bd32`.
- **Comparado com:** a cópia de antes, `out/peru-agua/_tmp/redator/antes-consertos-1/textos-tela.json.d9769347`, que confere com o sha256 `d976934775d1…`.
- **Como se fez:** um script tirou o diff do lote B e das seções gerais. Fora o que se lista abaixo, os 233 textos de cena do lote, os `cards_pessoa`, os `_avisos_do_ano` e a `_pergunta_cta` estão byte a byte iguais.
- **Limites:** 0 imagens, nenhum navegador, nenhum gob.pe; nada foi gravado no canal.

| id | cena / seção | o que mudou | fonte (trecho literal) | veredito |
|---|---|---|---|---|
| RB01 | s34, TB064 (nota) | a figura passa a 3 silhuetas cheias e a 4ª em 1/4, ou 3,25 de 10; o rótulo fica | 10.643.581 ÷ 32.706.028 = 32,5 % = 3,25 de 10 (F147) | CONFIRMADA; A1 fechado |
| RB02 | s34, `rotulos_dado` (TB251) | o `por_que_diverge` traz a mesma figura | idem | CONFIRMADA |
| RB03 | s34, `_instrucoes_para_a_arte` | "3 silhuetas cheias e a 4ª preenchida em 1/4 … nunca só 3 cheias; a de 1940 fica com 1 de 10" | idem; 1940: 10,4 % (F146) | CONFIRMADA |
| RB04 | s41, TB135 (grifo) | `además de afianzar el caudal de río Rímac aguas abajo` | "(OSINERGMING 2012), además de afianzar el caudal de río Rímac aguas abajo." (`senamhi-2016-vulnerabilidad-chirilu-mantaro.txt` l. 3878): letra a letra e contíguo na folha; agora casa com o "downstream" de TB136 | CONFIRMADA; A2 fechado |
| RB05 | s42, TB143 (grifo) | `el único medio de trasvase` | "El túnel transandino es el único medio de trasvase del agua almacenada…" (`proactivo-sedapal-ariana-2021-02.txt` l. 29): letra a letra; casa com “the only means of transfer” | CONFIRMADA; A3 fechado |
| RB06 | s51, TB220 (a cota "1.8% OF THE WATER") | a cota ganhou dono na cena | ver RB07 | CONFIRMADA; A4 fechado |
| RB07 | s51, crédito novo de 3,733 a 5,733 s | `Source: ANA (Peru), National Water Resources Plan, 2012 data` | PA001/PA002: Cuadro 2.3, "Amazonas … Pacífico", "SITUACIÓN ACTUAL (2012)", "Como año base se consideró el 2012" (`ana-pnrh-1416.txt` p. 33–38). É a forma da s01, igual letra a letra, e não cruza com o crédito da UNESCO (7,867 s) | CONFIRMADA |
| RB08 | s29, crédito | `Source: UNESCO (World Heritage List, 1988)` | "Date of Inscription: 1988"; "Significant modifications to the boundaries : 1991" (`unesco-500-lima.txt` l. 274–275) | CONFIRMADA: o ano é o que a página dá à inscrição. A nota, sem conserto obrigatório, vem abaixo da tabela |
| RB09 | s51, crédito | `Source: UNESCO (World Heritage List, 2009)` | "Date of Inscription: 2009"; "Cities of Caral-Supe (Peru) … added to UNESCO's World Heritage List · 28 June 2009" (`unesco-1269-caral.txt` l. 240–244) | CONFIRMADA |
| RB10 | `_regras_de_serie` | a forma única da UNESCO, "o ano da inscrição do sítio" | s29 = 1988 e s51 = 2009, como em RB08 e RB09. A regra diz que o texto da página não é datado, o que é verdade. As linhas da s22 e da s23 são do lote A | CONFIRMADA (no lote B) |
| RB11 | glossário, ANA (Peru) | ganhou a s51 | o crédito novo de RB07 | CONFIRMADA |
| RB12 | glossário, Lima | perdeu a s44 | na s44, "Lima" só aparece dentro de "Lima and Callao", verbete que segue com s34, s36 e s44 | CONFIRMADA |
| RB13 | glossário, Callao | perdeu a s36 e a s44 | idem | CONFIRMADA |
| RB14 | glossário, a Sierra (HIGHLANDS) | perdeu a s33 | a s33 tem "PERUVIAN HIGHLANDS", verbete próprio, que segue com a s33 | CONFIRMADA |
| RB15 | glossário, a Costa (COAST) | perdeu a s32 | na s32, "coastal" está só dentro da citação "mostly coastal"; não há rótulo COAST | CONFIRMADA |
| RB16 | glossário, Peru | ficou só com s01, s03 e s34 | nas outras cenas do lote, "Peru" está só dentro de "INEI (Peru)", "SENAMHI (Peru)" e similares; a s34 mantém "PERU'S GDP" e "PERUVIANS" | CONFIRMADA |
| RB17 | `_fechados` (Vilca, s19) | a barra fica | a linha existe na cópia local: "VILCA / -12.12 / -75.83" (`senamhi-2016…txt` l. 8505–8507). O teste de ponto é do lote A e não foi refeito aqui | CONFIRMADA (a coordenada) |
| RB18 | `_nao_conferido` | saiu Vilca; os 5 do lote B ficam iguais | a tela continua a atribuí-los (TB284–TB288) | CONFIRMADA: nada afirma mais |
| RB19 | `_espera_a_sala` | saiu Vilca; os outros 3 itens ficam iguais | — | CONFIRMADA: nada afirma mais |
| RB20 | o que não mudou no lote B | cards, avisos do ano, pergunta e 233 textos de cena | o diff | CONFIRMADA: idênticos ao que já foi julgado |

**A nota de RB08.**
- A UNESCO inscreveu em 1988 o Convento de San Francisco ("The 'Convent Ensemble of San Francisco de Lima', which was previously inscribed…", l. 253). O "Historic Centre of Lima" veio com a mudança de limites de 1991.
- "World Heritage List, 1988" é a data que a página dá ao bem, e por isso fica.
- Se a Sala preferir a data do centro histórico como tal, a forma é "(World Heritage List, 1988; extended 1991)". É opção, não erro.

**Fora do lote B e não reconferidos aqui:** as trocas da s04, s16, s19, s22 e s23 (lote A), e as linhas de `rotulos_dado`, glossário (JICA, Defensoría s04, Pacífico, Amazonas) e `_regras_de_serie` que tocam só essas cenas.

**Continuam NÃO FOI CHECADO, sem mudança:** os 12 rótulos que esperam a caça (TB018, TB049, TB070, TB079, TB090, TB095, TB104, TB163, TB171, TB182, TB195 e TB197) e as 5 primárias do gob.pe (TB284 a TB288).

**O lote B inteiro depois desta rodada:**
- os 4 achados (A1 a A4) estão fechados;
- nenhum DIVERGE, nenhuma REFUTADA, nenhuma divergência da voz;
- a cobertura do lote passa a 329 de 346, com o crédito novo da s51. Continuam 17 NÃO FOI CHECADO e 3 NADA A CHECAR, e o laudo segue CHECADO PARCIALMENTE.

COBERTURA: 20 de 20 (esta reconferência: todo item que mudou no lote B e nas seções gerais, tirado por diff)
NOTA: 10/10
VEREDITO: RESSALVA

## Reconferência 2 (texto-3, fase 1, sobre db0c89f8…)

- **Data-base:** 22/10/2026.
- **O objeto:** `out/peru-agua/textos-tela.json`, sha256 `db0c89f8d63c8719128be469078788b90f30d77bbc28076f11ff670da02ac5d8`.
- **Comparado com:** a cópia de antes, `out/peru-agua/_tmp/redator/antes-consertos-3/textos-tela.json.f588540e` (sha256 `f588540e7e9f…`).
- **O que o diff mostra:**
  - só 8 itens de `_textos_por_cena` mudaram, todos na s13 e na s28, e só em `t0`/`t1` e `nota`; o texto continua byte a byte igual;
  - mudaram também 3 linhas novas em `_instrucoes_para_a_arte`, 1 em `_pedidos_a_montante`, o `_consertos` e o campo novo `_entradas_congeladas_porque`.
- **Os tempos** foram conferidos contra `out/peru-agua/words.json`:
  - s13 começa em 117,094 s absolutos: "and" está em 135,96 s, que dá 18,866, e "blanket" em 136,18 s, que dá 19,086;
  - s28 começa em 290,718 s: "had" está em 294,76 s, que dá 4,04, e "people" em 300,64 s, que dá 9,92.
  - O beat 3 da s13 em `out/peru-agua/regencia.json` (foto_real, MODIS) começa em 18,867.
- **Limites:** 0 imagens, nenhum navegador, nenhum site que recuse robô; nada foi gravado no canal.

| id | cena | item (texto inalterado, veredito de texto de antes) | tempos novos | o que se conferiu | veredito |
|---|---|---|---|---|---|
| RB21 | s13 | "Satellite image · June 2018" (lote A, PA016: "Date Acquired: 6/20/2018") | 18,866–20,966 (2,1 s) | Entra em "and", junto com o beat 3 (foto_real, 18,867). O crédito do MapTiler sai em 18,866, de modo que a data aparece só com a imagem de 2018 na tela. **Condição:** o `exige` do beat 3 na regência ainda diz "at 'blanket' the real NASA MODIS image … enters". O `_pedidos_a_montante` da s13 pede "and", e a instrução à arte também. Enquanto a regência não mudar o `exige`, a arte segue a instrução, e a legenda nunca entra antes da imagem | CONFIRMADA (com a condição) |
| RB22 | s13 | `_instrucoes_para_a_arte`: a MODIS e a legenda entram juntas em "and", e a legenda fica presa à moldura | — | o mesmo tempo de RB21; "nunca a legenda antes da imagem" | CONFIRMADA |
| RB23 | s13 | `_pedidos_a_montante`: a regência › s13 › beats[3], "and" (18,866) e não "blanket" (19,11) | — | os dois tempos batem com o `words.json` (19,086 ≈ 19,11 na grade da regência) | CONFIRMADA |
| RB24 | s28 | “MUY BUEN PUERTO” (A VERY GOOD PORT), ainda como `rotulo` (TB004) | 4,033–6,133 (2,1 s) | entra em "had" ("it had a very good port nearby"), antes de "very" e na fala do porto; sai no corte para a mesa | CONFIRMADA |
| RB25 | s28 | "Translated from Spanish" (TB005) | 4,033–6,133 | cobre o rótulo bilíngue o tempo todo (as mesmas bordas) | CONFIRMADA |
| RB26 | s28 | "Source: Bernabé Cobo, 1639 (1882 ed.)" (TB006) | 4,033–6,133 | cobre a citação o tempo todo; da mesa em diante, a legenda da página (TB007, 6,133–12,167) atribui o mesmo documento | CONFIRMADA |
| RB27 | s28 | o grifo "comedio de tierra" (TB008) | 7,033–9,933 | fica no ar junto com a tradução dele (RB28), nas mesmas bordas | CONFIRMADA |
| RB28 | s28 | "in the middle of the land" (TB009) | 7,033–9,933 | a voz diz "in the middle of the land" antes de "people" (300,64 s); sai quando entra a tradução 2 | CONFIRMADA |
| RB29 | s28 | o grifo "puedan servir con poco trabajo" (TB010) | 9,933–12,167 | junto com a tradução dele (RB30), nas mesmas bordas, até o fim da cena | CONFIRMADA |
| RB30 | s28 | "could serve with little work" (TB011) | 9,933–12,167 (2,23 s) | entra em "people", logo antes de "could serve" (301,04 s), e cobre a fala inteira; as duas traduções não se sobrepõem | CONFIRMADA |
| RB31 | s28 | "Translated from Spanish" sob as traduções (TB012) | 7,033–12,167 (sem mudança) | segue cobrindo as duas traduções o tempo todo | CONFIRMADA |
| RB32 | s28 | `_instrucoes_para_a_arte` (os dois itens novos da s28) | — | repetem os tempos de RB24 a RB30 e "nada muda na forma" até a decisão | CONFIRMADA |
| RB33 | s28, forma (a) | `citacao`: “MUY BUEN PUERTO” (A VERY GOOD PORT) | — | "y por estar como está junto á él muy buen puerto" (`cobo-1639-historia-fundacion-lima_djvu.txt` l. 2615, p. 14). As aspas trazem o literal, e a tradução, entre parênteses e com a marca, é fiel. Sete palavras | FIEL (à fonte e à voz) |
| RB34 | s28, forma (b) | rótulo `VERY GOOD PORT`, sem aspas nem tradução | — | são as palavras da voz ("it had a very good port nearby") e a tradução exata de "muy buen puerto"; sem aspas, não se apresenta como citação, e sair a marca de tradução está certo. O crédito do Cobo pode ficar | FIEL (à fonte e à voz) |
| RB35 | s28, forma (c) | rótulo `GOOD PORT` | — | não afirma mais que a fonte, mas perde o "muy" da fonte e o "very" da voz: mais fraco que as duas | fiel, mas incompleta: não recomendada |
| RB36 | s28, forma (d) | rótulo `PIZARRO'S PORT` | — | a fonte diz que o sítio escolhido tinha "junto á él muy buen puerto": um porto perto do lugar, não um porto de Pizarro. O possessivo atribui a ele o porto, coisa que nem a ordem nem a voz dizem, e omite "very good", que é a razão citada | **NÃO FIEL**: se for à tela, é DIVERGE; nunca use |

**Outra observação, fora das 8 trocas** (o texto não mudou; o item é do lote A):
- Na s13, "HUMBOLDT CURRENT" e "Schematic" ficam até 20,966, os 2,1 s em que a foto real MODIS também está na tela.
- A `nota` de "Schematic" diz "fica enquanto elas [as setas] estão na tela". Se a MODIS cobrir o mar onde estão as setas, as setas e o "Schematic" precisam sair em 18,866. Se não saírem, "Schematic" fica sobre uma imagem real.
- Isso vai à Sala e ao `qc-visual`. Não é achado de fato.

**Fora desta fase, não julgado:** o `_entradas_congeladas_porque` registra que a regência › s41 › beats[2] virou mapa (Huinco no satélite, 14,5–18,333 s), e o `textos-tela.json` ainda não tem o crédito do mapa nem o texto revisto dessa cena. É a fase 2, e a s41 é do lote B: quando o texto chegar, passa por esta lente.

**O lote B depois desta rodada:**
- nada de texto mudou; os vereditos de antes ficam;
- os 12 rótulos que esperam a caça e as 5 primárias do gob.pe continuam NÃO FOI CHECADO, e o laudo segue CHECADO PARCIALMENTE (329 de 346);
- nenhum DIVERGE nem REFUTADA na tela. A forma (d) só seria DIVERGE se fosse adotada.

COBERTURA: 16 de 16 (esta reconferência: as 8 trocas, as 3 instruções e o pedido a montante tirados do diff, e as 4 formas da nota da s28)
NOTA: 10/10
VEREDITO: RESSALVA

## Reconferência 3 (texto-3, fase 2: as silhuetas da s30)

- **Data-base:** 22/10/2026.
- **Fonte:** a do TB026 e de PB005, sem pesquisa nova: `midia/peru-agua/fontes/documento/inei-2026-censo2025-presentacion-resultados.txt` (PDF p. 12), em números absolutos e em "Distribución porcentual".
- **Leitura:** o `textos-tela.json` não foi lido nesta fase, como pediu a Sala.
- **Limites:** 0 imagens, nenhum navegador; nada foi gravado no canal.

**Os números da fonte** (Costa · Sierra · Selva · Total):
- **1940:** 1 759 573 · 4 033 952 · 414 452 · 6 207 967. A soma das três regiões dá 6 207 977, 10 a mais que o total impresso: é diferença da própria tabela, e nada muda à escala de 10. Os percentuais publicados são 28.3 · 65.0 · 6.7.
- **2025:** 19 185 930 · 8 733 585 · 4 786 513 · 32 706 028. Os percentuais publicados são 58.7 · 26.7 · 14.6.

| id | o quê | conta (de 10 silhuetas) | veredito |
|---|---|---|---|
| RB37 | 1940, costa | 1 759 573 ÷ 6 207 977 × 10 = **2,83** (28,3 %) | 2 cheias e a 3ª preenchida em 5/6 (0,83) |
| RB38 | 1940, serra | 4 033 952 ÷ 6 207 977 × 10 = **6,50** (65,0 %) | 6 cheias e a 7ª preenchida em 1/2 (0,50) |
| RB39 | 1940, selva | 414 452 ÷ 6 207 977 × 10 = **0,67** (6,7 %) | 0 cheias e 1 preenchida em 2/3 (0,67): **declarada**, desenhada (ver RB43) |
| RB40 | 2025, costa | 19 185 930 ÷ 32 706 028 × 10 = **5,87** (58,7 %) | 5 cheias e a 6ª preenchida em 7/8 (0,87) |
| RB41 | 2025, serra | 8 733 585 ÷ 32 706 028 × 10 = **2,67** (26,7 %) | 2 cheias e a 3ª preenchida em 2/3 (0,67) |
| RB42 | 2025, selva | 4 786 513 ÷ 32 706 028 × 10 = **1,46** (14,6 %) | 1 cheia e a 2ª preenchida em ~1/2 (0,46, um pouco menos que a metade) |
| RB43 | a selva de 1940: declarada ou ausente | Sem ela, as 10 silhuetas ficariam só com a costa e a serra, e uma das duas ganharia os 0,67: a serra iria a 7,17 (72 %) ou a costa a 3,50 (35 %). Deixar o vão em branco esconde 6,7 % dos peruanos | **Fiel: declarada**, como fração de 2/3 de silhueta, num tom que não seja nem o da serra nem o da costa. Não precisa de rótulo novo (o "RAINFOREST" entra em 39,1 s). **Ausente, ou somada a outra região: NÃO FIEL** |
| RB44 | a fileira única, se o desenho for uma fileira de 10 em ordem costa · serra · selva | 1940: as divisas caem em 2,83 e 9,33, ou seja, dentro da 3ª silhueta (0,83 costa / 0,17 serra) e da 10ª (0,33 serra / 0,67 selva). 2025: caem em 5,87 e 8,54, dentro da 6ª (0,87 costa / 0,13 serra) e da 9ª (0,54 serra / 0,46 selva) | fiel nas duas formas. Por região, cada uma é "N cheias + a última em fração" (RB37–RB42). Na fileira única, a silhueta da divisa fica partida na fração da conta |
| RB45 | "6 descem, 4 ficam" (a leitura de hoje) | Em 2025 a serra é 2,67 de 10, não 4; de 1940 a 2025 a serra perde 3,83 de 10, a costa ganha 3,03 e a selva 0,80. A fileira toda em HIGHLANDS ao lado de "65.0% (1940)" também não é fiel: a serra de 1940 é 6,5 de 10, não 10 | **NÃO FIEL**, as duas. A fileira mostra as três regiões nas frações de RB37–RB42 |
| RB46 | o estado final num censo nomeado | 2025 está na tela ("58.7% (2025)", TB036, 33,1 s), e o eixo nomeia os 8 censos. O "censo em que a balança vira" fica entre 1961 (costa 39,0, serra 52,3) e 1972 (costa 46,1, serra 44,0), e não é um censo só | 2025: **FIEL**. "O censo em que a balança vira": não usar |

**As formas para o redator copiar:**
- **1940** (com "65.0% (1940)" e "28.3% (1940)"): serra com 6 silhuetas cheias e a 7ª em 1/2 (6,5); costa com 2 cheias e a 3ª em 5/6 (2,83); selva com 1 silhueta em 2/3 (0,67), num tom neutro. Total: 10.
- **2025** (com "58.7% (2025)"): costa com 5 cheias e a 6ª em 7/8 (5,87); serra com 2 cheias e a 3ª em 2/3 (2,67); selva com 1 cheia e a 2ª em ~1/2 (1,46). Total: 10.
- Nenhum grupo declarado que se possa contar, nenhuma silhueta inteira para uma fração, e nenhuma região de fora.

COBERTURA: 10 de 10 (esta reconferência: as 6 frações, a selva de 1940, a fileira única, a leitura de hoje e o censo nomeado)
NOTA: 10/10
VEREDITO: RESSALVA. O lote B fica como estava: as 2 formas de hoje (RB45) vão à arte como conserto, e os 17 NÃO FOI CHECADO continuam.

## Reconferência 4 (texto-3, fase 2, sobre 0c588d53…)

- **Data-base:** 22/10/2026.
- **O objeto:** `out/peru-agua/textos-tela.json`, sha256 `0c588d5357f70811bb01c5d08a744d78b910d6ba8f5c32858354af5b3065a10d`.
- **Comparado com:** a cópia de antes, `out/peru-agua/_tmp/redator/antes-consertos-4/textos-tela.json.db0c89f8`, que confere com o sha256 `db0c89f8…`.
- **Como se fez:** um script tirou o diff; todo texto novo ou mudado, e toda seção mudada, tem uma linha abaixo.
- **Os tempos** foram conferidos contra `out/peru-agua/words.json` pela distância entre a âncora velha e a nova, todas certas até 0,02 s:
  - s12 "imbalance": 1,8;
  - s21 "border": 7,034;
  - s32 "to": 5,934;
  - s34 "about": 4,333;
  - s16 "floods": 9,567, porque "the desert coast" está em 7,767 e "floods" vem 1,80 s depois;
  - s27 "road": 3,914;
  - s41 "service": 4,613 e "Huinco": 15,533, a partir de "fifty-eight" = 1,333;
  - s30: o começo da cena é 316,227 s absolutos.
- **O `s16.html`** foi lido como texto, sem rodar nada.
- **Limites:** 0 imagens, nenhum navegador; nada foi gravado no canal.

**A s28 vem primeiro, porque é a que a Arte espera.**

| id | cena | item | tempos | o que se conferiu | veredito |
|---|---|---|---|---|---|
| RB47 | s28 | `citacao` “muy buen puerto” | 4,033–6,133 | "y por estar como está junto á él muy buen puerto" (`cobo-1639-historia-fundacion-lima_djvu.txt` l. 2615, p. 14): letra a letra, em caixa baixa como na fonte, entre aspas, 3 palavras; entra em "had" | CONFIRMADA |
| RB48 | s28 | a legenda `A very good port` | 4,033–6,133 | "muy buen puerto" = "a very good port": tradução fiel, sem aspas (não se apresenta como citação), igual à voz ("it had a very good port nearby") | CONFIRMADA |
| RB49 | s28 | "Translated from Spanish" | 4,033–6,133 | cobre a tradução todo o tempo, nas mesmas bordas | CONFIRMADA |
| RB50 | s28 | "Source: Bernabé Cobo, 1639 (1882 ed.)" | 4,033–6,133 | cobre a citação e a tradução todo o tempo (PB001) | CONFIRMADA |
| RB51 | s28 | `JANUARY 1535` sai em 4,033 | 0,167–4,033 | 3,87 s no ar; o mês da ordem continua dito pela legenda da página (TB007, de 6,133 em diante); nada se perde | CONFIRMADA |
| RB52 | s28 | `_instrucoes_para_a_arte` | — | repete RB47–RB51 | CONFIRMADA |
| RB53 | s27 (lote A) | a tradução 1 e o grifo 1 até 3,9 | 1,634–3,9 | "road" está em 3,914; cada tradução fica com o seu grifo, e os dois pares se sobrepõem 0,63 s, cada um preso ao seu grifo | CONFIRMADA |
| RB54 | s27 (lote A) | `[…] from the sea, and the road very deserted` | 3,267–6,234 | "…[cua]renta leguas de la mar y el camino muy despoblado" (Cobo, l. 2438–2439). O "[…]" marca a omissão de "cuarenta leguas", e o resto é tradução fiel ("de la mar" = "from the sea"; "muy despoblado" = "very deserted"). O sentido fica, e a voz diz "the long road to the coast". **O corte é fiel.** Nota opcional: o grifo da página continua "cuarenta leguas de la mar…", e um grifo em "de la mar y el camino muy despoblado" casaria melhor com o "[…]" | CONFIRMADA |
| RB55 | `nao_vai_para_tela` | as 40 léguas e uma conversão | — | a légua castelhana não tem valor fixo, e a conversão daria uma precisão que a fonte não tem: é verdade, e deixar de fora não afirma nada | CONFIRMADA |
| RB56 | s30 | `SHARE OF PERUVIANS`, sob o gráfico | 22,0–37,167 | as duas séries são "Distribución porcentual" da "población censada" por "Región natural" (INEI, PDF p. 12): a parte dos peruanos recenseados em cada região. É fiel ao referente das cotas 52.4 e 58.7, e é a palavra da voz | CONFIRMADA |
| RB57 | s30 | `SHARE OF PERUVIANS`, sob a cota da selva | 40,367–42,733 | a Selva 6.7 → 14.6 é a mesma distribuição percentual; a voz: "whose share of Peruvians more than doubled" | CONFIRMADA |
| RB58 | s30 | crédito do INEI | 9,233–42,733, sem interrupção | cobre todo número da cena, do 65.0 ao 14.6 (PB007) | CONFIRMADA |
| RB59 | s30 | "52.4% (1993)" sai em 33,1 | 28,833–33,1 | sai quando entra "58.7% (2025)"; nada fica sem dono | CONFIRMADA |
| RB60 | s30 | "6.7% → 14.6%" e "1940 → 2025" | 40,367–42,733 | entram em "share" (40,363), 1 s antes de "more than doubled"; os números e os anos são os do PB006 | CONFIRMADA |
| RB61 | s30 | `_regras_de_serie`, as silhuetas | — | iguais às RB37–RB46: 1940 = 6,5 / 2,83 / 0,67; 2025 = 5,87 / 2,67 / 1,46; a selva desenhada; nunca "6 descem, 4 ficam" | CONFIRMADA |
| RB62 | s30 | `_instrucoes_para_a_arte`, a fileira: "2025, o fim da caminhada (18,567–22,0 s)" | 18,567–22,0 | As frações conferem com RB44 (#9 = 0,545 serra / 0,455 selva). **Mas o tempo não:** de 18,567 a 22,0, a fileira chega ao estado de 2025, e na tela continuam "28.3% (1940)" (15,5–22,0), "HIGHLANDS" e "COAST". Nenhum texto nomeia 2025 antes de 33,1, e a voz diz só "Then, census by census, the balance tipped". A figura mostra a costa com 5,87 de 10 ao lado de uma cota que diz 28,3 %. Ver o achado R4-1 | **DIVERGE** (periférica: figura contra cota) |
| RB63 | s30 | `_instrucoes_para_a_arte`, o gráfico | — | repete RB56–RB59 | CONFIRMADA |
| RB64 | s30 | as notas de "HIGHLANDS" e de "28.3% (1940)", com a figura de 1940 | 9,233–22,0 | iguais às RB37–RB39 e RB43 | CONFIRMADA |
| RB65 | s41 | `© MapTiler © OpenStreetMap contributors` | 14,5–18,333 | o beat 2 virou satélite da MapTiler, e o ponto da usina é do OSM (way/864802081, PB035): os dois créditos são devidos, do 1º quadro do mapa ao fim | CONFIRMADA |
| RB66 | s41 | "HUINCO POWER PLANT · 1964", agora ao lado do ponto no satélite | 15,533–18,333 | o ponto do OSM é a usina (PB035); 1964 = "AÑO DE INICIO" (Tabla 3-2, F188); o crédito do SENAMHI cobre o ano na mesma janela | CONFIRMADA |
| RB67 | s41 | "IN SERVICE SINCE 1963 (DEFENSORÍA)" | 4,633–6,9 | entra em "service" (4,613); "El subsistema Marca I entró en operación en el año 1963" (F185) | CONFIRMADA |
| RB68 | s41, forma curta | `BUILT 1958–1962` | — | "la primera fue ejecutada entre los años 1958 y 1962, tiempo en el cual se construyo el túnel" (F184); "built" é a palavra da voz | FIEL (recomendada) |
| RB69 | s41, forma curta | `1958–1962` | — | o número é fiel, mas não diz o que a data é | fiel, não recomendada |
| RB70 | s41, forma curta | `IN SERVICE, 1963` | — | "entró en operación en el año 1963" = "entered service in 1963" | FIEL (recomendada) |
| RB71 | s41, forma curta | `SINCE 1963` | — | não afirma mais que a fonte, mas não diz desde quando o quê | fiel, não recomendada |
| RB72 | s41, forma curta | `IN SERVICE SINCE 1963` | — | fiel; o "since" (em serviço ainda hoje) é o que a Defensoría de 2025 descreve | FIEL |
| RB73 | s41, forma curta | `HUINCO · 1964` | — | o nome e o "AÑO DE INICIO"; sobre o ponto da usina, com a voz "The power plant, at Huinco, opened in 1964" | FIEL (recomendada) |
| RB74 | s41, forma curta | `HUINCO PLANT · 1964` | — | idem | FIEL |
| RB75 | s41, forma curta | a pílula "Huinco" e a cota `OPENED 1964` | — | "AÑO DE INICIO 1964" = o ano em que começou a operar; "opened" é a palavra da voz | FIEL |
| RB76 | s12 (lote A), forma | ficar como está, “PARADÓJICAMENTE” (PARADOXICALLY) | — | literal da folha (PA013) com a tradução | FIEL (recomendada) |
| RB77 | s12, forma | `PARADOXICALLY` como `traducao` do grifo | — | tradução fiel de "paradójicamente" | FIEL |
| RB78 | s12, forma | “paradójicamente” em `citacao`, com a tradução em legenda | — | literal e em caixa baixa, como na folha; é a forma da s28 | FIEL |
| RB79 | s06 (lote A) | a pílula "Lima" | 21,1–29,1 | entra em "Lima," (74,19 s absolutos), em "From downtown Lima"; é um rótulo de lugar e não afirma nada | CONFIRMADA |
| RB80 | s12 (lote A) | o grifo, o rótulo e a marca de tradução | 1,8–4,0 | entram em "imbalance" (0,85 s antes de "paradox"), juntos, e a marca cobre o rótulo todo o tempo | CONFIRMADA |
| RB81 | s16 (lote A) | "Satellite image · June 1998" | 9,567–11,767 | no `textos-tela.json`, a data entra em "floods", com o Landsat inteiro (o `s16.html`: `landsat: {… entra: 8.1, dur: 1.0}`, inteiro em 9,1), e assim a data só aparece com o recorte de 1998. **Mas o `out/peru-agua/graphics/s16.html` de hoje ainda põe `{ id: "legLandsat", … entra: 7.767 }`:** na cena construída, a legenda entra 0,33 s antes de o Landsat começar e 1,33 s antes de ele estar inteiro. Ver o achado R4-2 | CONFIRMADA no texto; a cena construída está pendente |
| RB82 | s21 (lote A) | Piura, Tacna e CHILE até 9,234; CHILE em 7,034 | 4,867/6,167/7,034–9,234 | "border" está em 219,89 s absolutos (7,034); são rótulos de lugar e não afirmam nada | CONFIRMADA |
| RB83 | s32 | “mostly coastal” e o grifo em 5,934 | 5,934–8,067 | entram em "to", junto da seta e do grifo dela; a marca (4,367–8,067) cobre | CONFIRMADA |
| RB84 | s34 | "ABOUT 1 IN 10" em 4,333; "ABOUT 1 IN 3" até 12,733; os créditos trocam em 12,733 | — | "about" está em 4,333; o crédito do censo cobre as duas legendas todo o tempo (0–12,733), e o do PIB entra com "LIMA REGION + CALLAO" (12,733), antes da cota 41.9% (15,366) | CONFIRMADA |
| RB85 | `_pergunta_cta` | a janela de 6 para 7 s | — | não afirma fato | NADA A CHECAR (fora da conta) |
| RB86 | as seções de máquina (`_entradas_sha256`, `_entradas_conferidas`, `_entradas_congeladas_porque`, `_textos_vivos_max`, `_consertos`, os 2 `_pedidos_a_montante` da s21 e da s34) | — | — | não afirmam fato de tela; os tempos dos pedidos são os de RB82 e RB84 | CONFIRMADA |

**Os achados:**

1. **[MÉDIO] R4-1 · s30, a fileira chega a 2025 sob uma cota de 1940 (RB62).**
   - **O problema:** de 18,567 a 22,0, as silhuetas andam até o estado de 2025 (costa 5,87, serra 2,67, selva 1,46). Enquanto isso, "28.3% (1940)", "HIGHLANDS" e "COAST" seguem na tela, e nenhum texto nomeia 2025 (o 2025 só entra no gráfico, em 33,1). O espectador lê a costa com quase 6 de 10 ao lado de "28.3%".
   - **CONSERTO:** "28.3% (1940)" sai em "Then," (18,567), e entra a legenda `1940 → 2025` sob a fileira, de 18,567 a 22,0. São 4 textos: HIGHLANDS, COAST, a legenda do censo e esta. As frações não mudam.
   - **A outra saída:** a caminhada para numa posição sem número (o "balance tipped", sem fração), e o estado de 2025 só se desenha no gráfico, em 33,1.
   - **RAIZ:** INSTRUÇÃO. "O estado final num censo nomeado na tela" (RB46) quer dizer nomeado enquanto a figura está nele.
2. **[LEVE] R4-2 · s16, a cena construída ainda adianta a data (RB81).**
   - **O problema:** o `s16.html` tem `legLandsat … entra: 7.767`, e o texto e a instrução à arte pedem 9,567.
   - **CONSERTO:** na cena, `{ id: "legLandsat", … entra: 9.567, sai: null }`. É trabalho da Arte, e o texto já está certo.
   - **RAIZ:** PONTUAL. A cena é anterior ao conserto 4.
3. **[LEVE, opcional] s27, o grifo das léguas (RB54):** o grifo pode passar a "de la mar y el camino muy despoblado", para casar com o "[…]". O corte da tradução já é fiel como está.

**Continuam NÃO FOI CHECADO, sem mudança:** os 12 rótulos da caça e as 5 primárias do gob.pe.

COBERTURA: 39 de 39 (esta reconferência: as 40 linhas de RB47 a RB86, menos RB85, NADA A CHECAR; todo texto ou seção que o diff mostrou mudado, e as 11 formas curtas)
NOTA: 9/10
VEREDITO: RESSALVA. O lote B tem um DIVERGE periférico (R4-1, figura contra cota), com o conserto de uma linha pronto; nenhum DIVERGE em afirmação de tese, nenhuma REFUTADA; os 17 NÃO FOI CHECADO continuam.

## Reconferência 5 (texto-3, sobre a0b58f31…)

- **Data-base:** 22/10/2026.
- **O objeto:** `out/peru-agua/textos-tela.json`, sha256 `a0b58f31863960419bfc2fe077a64cb08d613785dc7a56bbe594545a1237aa1f`.
- **Comparado com:** a cópia de antes, `out/peru-agua/_tmp/redator/antes-consertos-4b/textos-tela.json.0c588d53`, que confere com o sha256 `0c588d53…`.
- **O que o diff mostra:**
  - mudaram só 3 textos de cena (abaixo) e 1 linha de `_instrucoes_para_a_arte`;
  - o `_consertos` e o `_entradas_sha256` são de máquina e não afirmam nada.
- **Limites:** 0 imagens, nenhum navegador; nada foi gravado no canal.

| id | cena | item | tempos | o que se conferiu | veredito |
|---|---|---|---|---|---|
| RB87 | s30 | "28.3% (1940)" sai em "Then," | 15,5–18,567 | "Then," está em 18,553 (316,227 + 18,553 s); a cota fica 3,07 s no ar, toda com a figura de 1940 (costa 2,83) | CONFIRMADA |
| RB88 | s30 | a legenda `1940 → 2025`, sob a fileira | 18,567–22,0 | os anos são os do PB005/PB006 e do eixo; é a mesma forma da legenda da selva. No ar, de 18,567 a 22,0, ficam só HIGHLANDS, COAST, a legenda do censo, `1940 → 2025` e os créditos: **nenhum número de 1940 fica sobre a figura de 2025, e a tela agora nomeia 2025 enquanto as silhuetas o mostram.** R4-1 está fechado | CONFIRMADA |
| RB89 | s30 | `_instrucoes_para_a_arte` (conserto 4b) | — | repete RB87 e RB88 | CONFIRMADA |
| RB90 | s27 (lote A) | o grifo `de la mar y el camino muy despoblado` | 3,267–6,234 | "cua- / renta leguas de la mar y el camino muy despoblado" (`cobo-1639-historia-fundacion-lima_djvu.txt` l. 2438–2439, p. 10): o trecho é contíguo e letra a letra no impresso, e casa com a tradução "[…] from the sea, and the road very deserted" | CONFIRMADA |

**Pendente fora do texto, sem mudança:** R4-2. O `s16.html` ainda tem `legLandsat entra: 7.767`, e o texto pede 9,567. Quem conserta é a Arte.

**Continuam NÃO FOI CHECADO:** os 12 rótulos da caça e as 5 primárias do gob.pe.

COBERTURA: 4 de 4 (esta reconferência: todo texto e toda instrução que o diff mostrou mudados)
NOTA: 10/10
VEREDITO: RESSALVA. No texto de tela do lote B não há DIVERGE nem REFUTADA. Seguram a RESSALVA os 17 NÃO FOI CHECADO e a cena construída da s16 (R4-2), que é trabalho da Arte.

## Reconferência 6 (texto-4, sobre da7c651d…)

- **Data-base:** 22/10/2026.
- **O objeto:** `out/peru-agua/textos-tela.json`, sha256 `da7c651db345f93135393e1b57fbf01805287300c86660933a76fcec8dd0b3e8`.
- **Comparado com:** a cópia de antes, `out/peru-agua/_tmp/redator/antes-consertos-5/textos-tela.json.a0b58f31`, que confere com o sha256 `a0b58f31…`.
- **O diff, item a item na mesma posição:**
  - 33 itens de `_textos_por_cena` mudaram: 31 textos, a pílula da caça da s01 e a linha "nada" da s52;
  - em todos mudaram só `t0` ou `t1` e a `nota`. O `texto` e o `papel` estão iguais byte a byte nos 33;
  - mudaram também `_instrucoes_para_a_arte` (6 linhas novas) e `_pedidos_a_montante` (2 linhas novas);
  - há duas seções novas, `_conflitos_para_a_sala` e `_ficou_como_estava_texto4`;
  - `_consertos` e `_entradas_sha256` são de máquina.
- **Os tempos:** a voz vem de `out/peru-agua/words.json` (`w`, `start`). O tempo relativo é `start − inSec` do `espelho.json` › `segmentos`: s04 34,067; s06 53,067; s18 176,0; s19 190,833; s36 428,667; s52 689,933; as outras pelo mesmo cálculo.
- **A antecipação** é o tempo entre o `t0` e o começo da palavra da voz que diz o que o texto diz.
- **Os fatos citados** foram conferidos contra `out/peru-agua/regencia.json` e, como texto, contra `out/peru-agua/graphics/s36.html` e `s06.html`.
- **Limites:** 0 imagens, nenhum navegador, nenhuma busca; nada foi gravado no canal.
- **A fonte dos números e rótulos não se reabriu, porque o texto não mudou:** cita-se o id em que ela foi confirmada (TB… deste lote; PA… e F… para o lote A).

**Os 33 itens mudados**

| id | cena | texto (igual) · papel | antes → agora | a voz na janela nova | antecipação | fonte já confirmada | veredito |
|---|---|---|---|---|---|---|---|
| RB91 | s01 | (lugar_na_origem do s01-a) · rotulo [caca] | 0,3–1,867 → 0,3–3,2 | "A line runs along the Andes and divides Peru." Sai antes de "East" (3,23), no fim do aéreo (o regime aereo-real vai de 0 a 3,2 s, no `espelho.json`) | — (o texto espera a caça) | — | o tempo: CONFIRMADA; o texto: NÃO FOI CHECADO (espera a caça), como antes |
| RB92 | s03 | 0.3 INCHES (8 mm) · cota | 5,266 → 4,866 | "about a third of an inch of rain a year" (about 4,873) | 0,01 s | lote A (o 8 mm do SENAMHI; F069) | CONFIRMADA |
| RB93 | s03 | OF RAIN A YEAR · legenda | 5,266 → 4,866 | idem | 0,01 s ("about") | idem | CONFIRMADA |
| RB94 | s03 | Source: SENAMHI (Peru), 1981–2010 average · credito | 5,266 → 4,866 | idem | cobre a cota todo o tempo | idem | CONFIRMADA |
| RB95 | s03 | LIMA 9.6 M + CALLAO 1.0 M = 10.6 M · cota | 10,0 → 9,6 | "home to more than ten million people" (more 9,633) | 0,03 s | F145 (= TB063) | CONFIRMADA |
| RB96 | s03 | Source: INEI (Peru), 2025 census · credito | 10,0 → 9,6 | idem | cobre a cota todo o tempo | F145 | CONFIRMADA |
| RB97 | s04 | A SINGLE TUNNEL · EARLY 1960s · heroi | t1 10,533 → 10,867 | "built in the early nineteen sixties" (early 8,873); depois, "So why…" (10,553), que não contradiz | 0,01 s | F247 (lote A) | CONFIRMADA. O recuo vai de 10,533 a 14,067, e a regência (s04 › beats[2]) diz "the labels leave before the pull-back ends (300 ms); by 48.1 s nothing in the vignette area". Sair em 10,867, com o fade até 11,167, fica antes do fim do recuo e antes de 48,1 s absolutos (14,03 relativo) |
| RB98 | s04 | Sources: SENAMHI (Peru), 2016; Defensoría del Pueblo (Peru), 2025 · credito | t1 → 10,867 | idem | cobre o herói todo o tempo | F247 e Defensoría (TA032) | CONFIRMADA |
| RB99 | s06 | ATLANTIC · rotulo | t1 11,066 → 12,266 | "A small part of the south drains…" (11,073–12,283): é rótulo do oceano, e a voz já passou ao Titicaca, sem contradizer | — (o nome entrou em "Atlantic.", 10,048) | lote A (PA003) | CONFIRMADA. A instrução prende o rótulo ao mapa e o tira se o oceano sair do quadro |
| RB100 | s06 | LAKE TITICACA BASIN · rotulo | 12,833 → 12,8 | "drains into Lake Titicaca" (Lake 12,843) | 0,04 s | PA003 | CONFIRMADA |
| RB101 | s06 | Lake Titicaca (Puno) · rotulo | 12,833 → 12,8 | idem | 0,04 s | PA005 | CONFIRMADA |
| RB102 | s06 | Diego Delso, delso.photo / Wikimedia Commons · CC BY-SA 4.0 · credito | 12,833 → 12,8 | — | cobre a miniatura | PA005 | CONFIRMADA |
| RB103 | s06 | LIMA REGION · rotulo | 18,733 → 18,433 | "through the Lima region itself" (through 18,463; Lima 18,763) | 0,33 s até "Lima" | PA007 | CONFIRMADA |
| RB104 | s08 | ABOUT 90 MILES LONG (145 km) · cota | 1,3 → 1,1 | "Lima's own river, the Rímac, is one of them." **A voz não diz o número**; conferido: nenhuma palavra de comprimento de 0 a 3,1 s. A entrada fica em "the Rímac" (1,138) | a voz não diz | PA008 | CONFIRMADA |
| RB105 | s08 | Source: ANA (Peru), 2014 · credito | 1,3 → 1,1 | idem | cobre a cota | PA008 | CONFIRMADA |
| RB106 | s09 | ABOUT 6 PEOPLE PER SQ MI · cota | 8,4 → 7,866 | "is also one of its most thinly populated". **A voz não diz o número**; o que ela diz em palavras é "thinly" (8,413) | a voz não diz o número; 0,55 s até "thinly" | PA010 | CONFIRMADA |
| RB107 | s09 | 2.4 per km² · 2017 · legenda | 8,4 → 7,866 | idem | idem | PA010 | CONFIRMADA |
| RB108 | s09 | Source: INEI (Peru), 2017 census · credito | 8,4 → 7,866 | idem | cobre a cota | PA010 | CONFIRMADA |
| RB109 | s09 | Source: Harvard Growth Lab, 2023 · credito | 14,333 → 14,0 | "as Harvard's Growth Lab puts it" (as 14,013; Harvard's 14,333) | 0,33 s até "Harvard's" | PA010 | CONFIRMADA |
| RB110 | s17 | ALMOST ALL OF IT DRIZZLE · legenda | 3,166 → 2,966 | "rain, almost all of it drizzle" (almost 3,183) | 0,22 s | lote A (SENAMHI 2021: "en forma de lloviznas", F069) | CONFIRMADA |
| RB111 | s19 | Lima · rotulo | 0,967 → 0,634 | "The dry side gets real rain too". **A voz não diz "Lima"**; conferido: só "dry side", "real rain" de 0 a 2,8 s. São os pontos das estações que a frase introduz (real 0,967) | a voz não diz; 0,33 s até "real" | PA027 e PA028 | CONFIRMADA |
| RB112 | s19 | Matucana · rotulo | 0,967 → 0,634 | idem; **a voz não diz "Matucana"** | idem | PA027 | CONFIRMADA |
| RB113 | s19 | HIGH UP: MOSTLY DECEMBER–MARCH · legenda | 4,1 → 3,434 | "mostly high up, and most of it from December to March" (most 3,447; December 4,112). "high up" já foi dito em 2,647 | 0,01 s até "most"; 0,68 s até "December" | PA027 (83,9 % dez.–mar.) | CONFIRMADA |
| RB114 | s22 | ABOUT 90 MILES NORTH OF LIMA · legenda | 5,6 → 5,2 | "about ninety miles north of Lima" (about 5,22) | 0,02 s | PA033 | CONFIRMADA |
| RB115 | s35 | Villa El Salvador · rotulo [caca] | 19,5 → 19,234 | "That ground became Villa El Salvador" (Villa 19,502) | 0,27 s | — (espera a caça, TB079) | o tempo: CONFIRMADA; o texto: NÃO FOI CHECADO, como antes |
| RB116 | s35 | Villa El Salvador · rotulo [sem_caca] | 19,5 → 19,234 | idem | 0,27 s | F160 (TB080) | CONFIRMADA |
| RB117 | s36 | Photo from 1997 · aviso_ano | 8,333 → 8,166 | "Peruvians call them barriadas." A voz não fala do ano: o aviso é da foto | — (preso à foto, não à voz) | PB020 (TB087) | CONFIRMADA no texto. Ver RB133 sobre o `s36.html` |
| RB118 | s36 | \*barriadas\* · legenda | 8,9 → 8,666 | "call them barriadas" (barriadas 8,903) | 0,24 s | F164 (TB088) | CONFIRMADA |
| RB119 | s38 | ABOUT A QUARTER · heroi | 7,9 → 7,4 | "falls to about a quarter of that" (falls 7,46; about 7,925) | 0,53 s | PB022 (TB102) | CONFIRMADA. Nada na janela contradiz, e a coluna cai na mesma frase; a forma vai em conflito à Sala (RB124) |
| RB120 | s42 | AND WELLS · legenda | 9,167 → 8,167 | "the Chillón and the Lurín, and on wells" (Lurín 8,07; and 8,69; wells 9,19) | 1,02 s até "wells" | F191 (TB151) | CONFIRMADA. Não contradiz: entra no fim de "Lurín", na mesma frase. A antecipação de 1 s é o conflito que vai à Sala (RB125) |
| RB121 | s47 | FREE · heroi | 15,6 → 15,234 | "AFP reported that those deliveries were free." (that 15,277; deliveries 15,602; free 16,412) | 1,18 s até "free"; 0,37 s até "deliveries" | F214 (TB187) | CONFIRMADA. Não contradiz, e o crédito da AFP (14,134–17,234) atribui. A antecipação vai em conflito à Sala (RB126) |
| RB122 | s52 | Rímac · rotulo | t1 7,567 → 8,034 | "toward the Rímac." (6,617); fica 0,43 s em "Peru lives…" (Peru 7,597; lives 8,057), sem contradizer | — (o nome entrou em 6,267, 0,35 s antes de "Rímac") | F251 (TB237) | CONFIRMADA |
| RB123 | s52 | (nenhum texto novo) · nada | 7,567 → 8,034 | começa em "lives" (8,057) | — | TB238 | NADA A CHECAR (fora da conta) |

**`_conflitos_para_a_sala`**

| id | cena | o que se conferiu | veredito |
|---|---|---|---|
| RB124 | s38, ABOUT A QUARTER | "about" está em 7,925: o número de hoje entra 0,525 ≈ 0,53 s antes. A opção 2 ("about" + 2,0) dá 9,925 ≈ 9,93. A opção 3 (7,9–9,4) dá 1,5 s. O corte para o footage em 9,4 é o beat da regência (s38 › beats[1], 3,267–9,4) | os números conferem; as três opções são fiéis ao texto, e a escolha é da Sala |
| RB125 | s42, AND WELLS | "wells" está em 9,19 (9,167 na grade): 1,02 s de antecipação. A opção 2 dá 9,167 + 2,0 = 11,167 ≈ 11,17. A opção 3 dá 1,0 s. A razão da opção 4 ("nenhum lugar de poço foi lido") é o que a própria regência diz: "the wells only as words … (no well location was read, so no point)" (s42 › beats[1]); a Defensoría dá só "442 pozos (4,84 m3/s)", sem lugar (F191) | os números e a razão conferem |
| RB126 | s47, FREE | "free" está em 16,412: 1,18 s de antecipação. A opção 2 ("deliveries", 15,6): 17,234 − 15,6 = 1,634 ≈ 1,63 s, que é a escolha da regência ("'FREE' at 'deliveries' (15.6 s)", s47 › beats[3]). A razão da opção 3 ("a voz fecha a frase sozinha, com o crédito da AFP") é verdade: a voz diz "AFP reported that those deliveries were free.", e o crédito "Source: AFP, March 2025" fica de 14,134 a 17,234 | os números e a razão conferem |

**`_ficou_como_estava_texto4`, contra o arquivo**

| id | cena | o que a seção diz | o arquivo | veredito |
|---|---|---|---|---|
| RB127 | s18 | MORE THAN 6 FT (2,013 mm), cota, 1,77 s | 13,067–14,833 = 1,766 s, cota | CONFIRMADA |
| RB128 | s18 | OF RAIN A YEAR, legenda, 1,77 s | 13,067–14,833 = 1,766 s, legenda | CONFIRMADA |
| RB129 | s18 | ANDES, Schematic, UP TO ABOUT 16,000 FT, EASTERN SLOPES, Satipo, de 2,1 a 13,3 s | 8,7 · 13,333 · 2,1 · 4,167 · 2,933 s; os papéis batem | CONFIRMADA |
| RB130 | s36 | Lima, rotulo, 1,83 s, "150 ms depois do assentamento" | 8,333–10,166 = 1,833 s; o assentamento é 7,633 + 0,55 = 8,183 (s36.html, `pouso: CORTE`, `eo(u / 0.55)`), e 8,183 + 0,15 = 8,333 | CONFIRMADA |
| RB131 | s36 | Lima and Callao, a cota e a legenda de 1981, de 4,5 a 7,6 s | 7,633 · 4,467 · 4,467 s; os papéis batem | CONFIRMADA |
| RB132 | s52 | Laguna Marcapomacocha e EVERY MAY 1, de 7,2 a 7,6 s | 7,567 · 7,2 s; rotulo e legenda | CONFIRMADA |

**As afirmações novas nas instruções à Arte e nos pedidos a montante**

| id | o quê | o que se conferiu | veredito |
|---|---|---|---|
| RB133 | s36: "Photo from 1997" em 8,166, com o fade começando enquanto a foto assenta (8,183); "Lima" em 8,333; "\*barriadas\*" em 8,666. A nota diz que a foto pousa no corte (7,633) e assenta em 0,55 s, com queda de −240 px, escala de 0,72 a 1,03 e −2° a −1,5° | `s36.html`: `var CORTE = 7.633`; `pouso: CORTE, rot: -1.5`; `quedaEm…: -240 * (1 - A.eo(u / 0.55))`; "escala 0,72 → 1,03 até 0,33 s e assenta em 1,00 até 0,55 s"; `r = -2 + (rot + 2) * a`. Os fatos citados conferem. **Mas a cena construída ainda está nos tempos de antes:** `aviso … A.seg(t, 8.333, 0.3)` (l. 279) e `legBarr … entra: 8.9` (l. 185). Achado R6-1 | CONFIRMADA no texto; a cena construída está pendente |
| RB134 | s06: a miniatura de Puno pousa em ~12,1 e assenta até ~12,65, para o rótulo entrar em 12,8 | 12,1 + 0,55 = 12,65, e 12,65 + 0,15 = 12,8: a conta fecha. **Duas ressalvas, achado R6-2:** (1) na `s06.html`, a miniatura não tem pouso: `aplicarMini` só a mostra com a opacidade da pílula `rotPuno` (`entra: 12.833`), e o pouso é trabalho novo da Arte; (2) a câmera volta ao sul de 11,07 a 13,07 (`s06.html` l. 38), e a miniatura pousaria com a câmera ainda andando | CONFIRMADA (a conta); a Arte e o `qc` olham o pouso |
| RB135 | s06: ATLANTIC até 12,266, "durante a volta da câmera para o sul" | a volta vai de 11,07 a 13,07 (`s06.html` l. 38) | CONFIRMADA |
| RB136 | s04: o rótulo e o crédito de "early" (8,866) a 10,867, "0,33 s dentro do recuo, como a regência deixa" | a regência: "the labels leave before the pull-back ends (300 ms)", e o recuo acaba em 14,067; 10,867 − 10,533 = 0,334 | CONFIRMADA |
| RB137 | s19: os pontos de Lima e Matucana acendem em 0,634, com os nomes (a regência tinha "real", 0,967); "HIGH UP" em "most" (3,434), 0,8 s depois do gráfico (2,634) | a regência, s19 › beats[0]: "at 'real rain too' the points of Lima and Matucana … light"; "real" está em 0,967; 3,434 − 2,634 = 0,8 | CONFIRMADA |
| RB138 | s52: a pílula do Rímac até "lives" (8,034), 0,47 s no beat do fecho | "lives" está em 8,057; 8,034 − 7,567 = 0,467 | CONFIRMADA |
| RB139 | pedido, s06 › beats[3]: "a miniatura de Puno pousa em ~12,1 … (era 'Lake', 12,833)" | a regência, s06 › beats[3] (11,067–14,8), **não nomeia "Lake"**: diz só "the real lake thumbnail … lands next to the label". O 12,833 em "Lake" está no `s06.html` (l. 38, `rotPuno entra: 12.833`) e no texto de antes. O pedido atribui à regência um tempo que é da cena (R6-2) | CONFIRMADA (a conta); o "era" aponta a fonte errada |
| RB140 | pedido, s19 › beats[0]: os pontos em 0,634 (era "real", 0,967) | idem RB137 | CONFIRMADA |

**Os achados:**
1. **[LEVE] R6-1 · s36, a cena construída está atrás do texto.** O `s36.html` põe o aviso em 8,333 (l. 279) e "barriadas" em 8,9 (l. 185); o texto pede 8,166 e 8,666. É trabalho da Arte, como o R4-2 da s16.
2. **[LEVE] R6-2 · s06, o pouso da miniatura.**
   - O pedido diz "era 'Lake', 12,833" como se fosse a regência, e o tempo é da cena e do texto de antes.
   - A miniatura da `s06.html` não tem pouso nenhum: aparece com a pílula. O pouso em ~12,1–12,65 é trabalho novo, com a câmera ainda voltando ao sul (até 13,07).
   - A conta dos 150 ms fecha.
3. **Antecipações acima de 0,5 s, sem contradição de fato:**
   - s09: 0,55 s até "thinly" (a voz não diz o número);
   - s38: 0,53 s;
   - s42: 1,02 s;
   - s47: 1,18 s.
   - As três últimas estão em `_conflitos_para_a_sala`, e a decisão é da Sala.

**Não reconferido aqui:** o R4-2 (`s16.html`, `legLandsat entra: 7.767`). Esta tarefa não o trouxe.

**Continuam NÃO FOI CHECADO:** os 12 rótulos da caça (os textos de RB91 e RB115 entre eles) e as 5 primárias do gob.pe.

COBERTURA: 49 de 49 (esta reconferência: os 33 itens mudados, menos o "nada" da s52, que é NADA A CHECAR, mais 3 conflitos, 6 entradas de `_ficou_como_estava_texto4`, 6 instruções e 2 pedidos)
NOTA: 9/10
VEREDITO: RESSALVA. No texto de tela não há DIVERGE nem REFUTADA. Os textos, os números e as fontes ficam como estavam, e nada do que a voz diz nas janelas novas contradiz a tela. Seguram a RESSALVA os 17 NÃO FOI CHECADO e as duas cenas construídas atrás do texto (R6-1, s36; R4-2, s16).

**Corrigido na Reconferência 6, a pedido do setor** (o texto acima fica como estava, para registro):
- **O que o setor apontou:** a regência nomeia "Lake" na s06. Conferi a linha em `out/peru-agua/regencia.json`, l. 403–409, s06 › beats[3] (11,067–14,8), no campo `entra`: `{"t": 12.833, "palavra": "Lake", "o_que": "the lake thumbnail lands"}`.
- **De onde veio o meu engano:** li só o `exige` do beat, e não o `entra`.
- **RB139, o veredito corrigido:** **CONFIRMADA.** O "era 'Lake', 12,833" do pedido aponta a fonte certa, a regência › s06 › beats[3] › `entra`. Fica sem efeito a frase "a regência … não nomeia 'Lake' … o 'era' aponta a fonte errada".
- **R6-2, 1º ponto, corrigido:** fica sem efeito. O pedido não atribui à regência um tempo que seria da cena. O resto do R6-2 continua valendo:
  - a miniatura da `s06.html` não tem pouso (aparece com a pílula `rotPuno`, `entra: 12.833`);
  - pousar em ~12,1–12,65 é trabalho novo da Arte, com a câmera voltando ao sul até 13,07.
  - O pedido muda o `entra` da regência de "Lake" (12,833) para ~12,1. A conta dos 150 ms fecha.
- **Os itens que se apoiam na regência, reconferidos agora também pelo `entra`:**
  - **RB134:** não se apoiou no engano. Ele cita o `s06.html` (sem pouso, a câmera até 13,07) e a conta 12,1 + 0,55 + 0,15 = 12,8. Fica CONFIRMADA (a conta).
  - **RB97 e RB136 (s04):** o `entra` dá `{"t": 8.867, "palavra": "early", "o_que": "A SINGLE TUNNEL · EARLY 1960s"}`, de acordo com o que se conferiu.
  - **RB111, RB112, RB137 e RB140 (s19):** o `entra` dá `"real"` 0,967 para os pontos e `"December"` 4,1 para "HIGH UP", de acordo com o "era" dos pedidos.
  - **RB124 (s38):** o `entra` dá `"about"` 7,9, de acordo.
  - **RB125 (s42):** o `entra` dá `"wells."` 9,167, a base dos ~11,17, de acordo.
  - **RB126 (s47):** o `entra` dá `"deliveries"` 15,6, de acordo.
  - **RB122 (s52):** o `entra` dá `"toward"` 6,267, de acordo.
  - Nenhum outro item se apoiou no engano.

COBERTURA: 49 de 49 (sem mudança)
NOTA: 9/10
VEREDITO: RESSALVA. Sem mudança: o R6-2 fica LEVE, só pelo pouso que falta na `s06.html`; o R6-1, os 17 NÃO FOI CHECADO e o R4-2 continuam.

---

## Fecho do setor

Os dois lotes terminam em RESSALVA, só pelos NÃO FOI CHECADO. O veredito do laudo é o da soma, no topo.

**A reconferência 2 (texto-3, fase 1, sobre `db0c89f8…`)**, no fim do lote B (RB21–RB36), foi feita pelo verificador do lote B. Os tempos novos da s13 e da s28 conferem: 16 de 16, e nada pede conserto. O lote B, com ela, ficou com o sha256 `6b82cfe1…47543`.

**As reconferências 3 e 4 (texto-3, fase 2)** estão no fim do lote B:
- RB37–RB46: as frações das silhuetas da s30;
- RB47 em diante: as mudanças sobre `0c588d53…`, com 39 de 39 e RESSALVA.

**A reconferência 5** está sobre `a0b58f31…` (a s30 e a s27), com 4 de 4. Com ela, o lote B ficou com o sha256 `95dc2469…`.

**A reconferência 6 (texto-4, sobre `da7c651d…`)** está no fim do lote B (RB91–RB140), com 49 de 49. Ela cobre os tempos de 31 textos e da linha "nada" da s52, que vão a ≥ 2,0 s nas cenas da caça e na s06, e a ≥ 1,5 s nas prontas. Cobre também as notas, as instruções à Arte, os pedidos a montante, os conflitos e o que ficou como estava.
- Nenhum texto mudou de letra ou de papel, e nada que a voz diz nas janelas novas contradiz a tela.
- O verificador do lote B também conferiu os itens das cenas do lote A (s01–s27) que a tarefa mudou.
- O setor achou e mandou corrigir um engano: o RB139 dizia que a regência não nomeia "Lake" na s06, e ela nomeia, no `entra`. A correção está em nota no fim, sem apagar o texto antigo.
- **Os achados, todos para fora do texto:**
  - R6-1, LEVE: o `s36.html` ainda está nos tempos antigos;
  - R6-2, LEVE: o pouso da miniatura de Puno, que falta no `s06.html`;
  - as antecipações acima de 0,5 s (s09, s38, s42 e s47), que são escolha da Sala.
- Com ela, o lote B ficou com o sha256 `da44c05e…61460`.

O texto de tela não tem DIVERGE nem REFUTADA. A RESSALVA é só pelos NÃO FOI CHECADO: os rótulos da caça e as primárias do gob.pe.

COBERTURA: 600 de 632
VEREDITO: RESSALVA
