Gravado pelo escrivão da rodada r4b (o texto abaixo é do verificador-de-fatos, sem mudança)

COBERTURA: 44 de 44. Laudo-delta sobre `out/los-angeles/textos-tela.json` (sha256 `4fe715fb…74d5c`), comparado com `HEAD:out/los-angeles/textos-tela.json` (commit `0d5b3eb`, sha256 `19f98912…d8dd89`, o objeto do laudo de 08/10).

**Como a lista foi feita.** Um script de leitura no scratchpad (`%TEMP%/claude/vf2/diff.py`) comparou as duas versões item a item, em todas as listas e chaves de topo. Ele não gravou nada no canal. A lista sai do diff:
- 29 T: T003, T004, T005, T006, T013, T040, T044, T057–T061, T090, T102, T103, T265, T266, T309, T319–T324, T371, T372, T390–T392;
- 2 D: D21 e D55;
- 4 N: N37–N40;
- 1 G: G32;
- 2 S (`_regras_de_serie`): S06 e S12. Ao contrário do laudo de 08/10, entram aqui, porque o texto delas mudou;
- 1 I (`_instrucoes_para_a_arte`): I09;
- 2 metadados: `_quem` e `_como_ler`.

Acrescentei à mão 3 X, afirmações que só a montagem faz e que o diff não pega:
- X08: a s24 juntando o grifo e a voz;
- X09: qual "Santa Monica Bay" da página;
- X10: a s48 sem a linha do condado.

O diff dá 41 itens, mais os 3 X, total 44. O laudo não tem menos itens que o diff.

NOTA: 9.5/10. Os três textos novos conferem com a fonte primária, letra a letra no caso do grifo. Os quatro nomes da s48 herdam a medida da r3. Fica um único achado de montagem na s24, que não é erro de fato.

Data-base: 09/10/2026 (Brasília).

## 1 · Respostas ao pedido

| # | pergunta | veredito |
|---|---|---|
| 1 | T390 `San Pedro Bay` na s15 | **CONFIRMADA.** O desenho de 1888 é o do relatório "SURVEY OF SAN PEDRO BAY, CALIFORNIA", San Francisco, 13 de fevereiro de 1888, p. 2124. Ele propõe "an outer breakwater" na baía de San Pedro, com o braço oeste "at a point inside of Point Fermin". O endosso de Mendell, na p. 2125, abre com "San Pedro Bay is partially covered…". A grafia é a do G30. |
| 2 | T391, o grifo `Santa Monica Bay` na p. 213 da s24 | **CONFIRMADA, letra a letra.** No scan `stat29-1896-p213.jpg` se lê "Angeles, in Santa Monica Bay, California, or at San Pedro, in said", a 2ª linha do item. O texto da govinfo bate (`stat29-p213-214.txt`, l. 624). O nome aparece **duas vezes** na página, e só a 1ª é a certa (X09). A montagem com a voz tem uma ressalva (achado C1, X08). |
| 3 | T392 `Terminal Island` na s46 | **CONFIRMADA.** A voz diz "had taken in part of Terminal Island" (o "Terminal" em 4,13). O LB0005 e a camada 21 dão 0,97 mi² de Terminal Island a Long Beach, valendo desde 13/08/1909 (F127). A grafia é a do G36 e do T196. |
| 4 | Os nomes da s48 (T319–T322) | **CONFIRMADOS.** Torrance, Gardena, Lomita e Carson são as cidades incorporadas que encostam hoje no trecho fino, e **só elas**. A medida é a do R3-06: TIGER 2025, 250 cortes, mais a camada 21 do condado. Long Beach não encosta (3,35 km). O resto da borda é CDP ou terra do condado, o que casa com "between other cities and county land". **Volátil.** |
| — | T324 retirado (fora da lista do pedido) | **De acordo.** Sem os anos, a linha atribuía números que não estão mais na tela. Nenhum número da s48 perde dono por causa disso (X10). |

## 2 · A tabela

Chaves das URLs (as dos laudos de 07 e 08/10 continuam valendo):
- [ARCE] https://www.govinfo.gov/content/pkg/SERIALSET-02631_00_00-002-0001-0002/pdf/SERIALSET-02631_00_00-002-0001-0002.pdf (local: `midia/los-angeles/fontes/documento/arce1888-pp2110-2128.txt`, PDF p. 756–757)
- [S29] https://www.govinfo.gov/content/pkg/STATUTE-29/pdf/STATUTE-29-Pg202.pdf (local: `out/los-angeles/_media/documento/stat29-1896-p213.jpg`; `midia/los-angeles/fontes/documento-verificacao/stat29-p213-214.txt`)
- [L21] https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/21
- [TIG] https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html
- [LB5] https://pwgis.blob.core.windows.net/smpm/SMPM_AnnexationCity/LB0005.pdf
- [LAA] https://www.laalmanac.com/geography/ge06a.php (Terminal Island, Los Angeles County)
- [REG] `out/los-angeles/regencia.json` e `out/los-angeles/words.json`
- [HTML] `out/los-angeles/graphics/<cena>.html` (só lido)
- [GEO] `out/los-angeles/_pesquisa/pauta-geo.md`

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| T003 | Port of Los Angeles: t0 de 4,633 para 6,90 | NADA A CHECAR | só o tempo; o texto não mudou | — |
| T004 | 2000–2024: t0 de 8,9 para 9,84, e a nota | NADA A CHECAR | só o tempo ("two" em 9,84) | — |
| T005 | a legenda da conta do porto: t0 para 7,20 | NADA A CHECAR | só o tempo | — |
| T006 | Source: Port of Los Angeles, 2024: t0 para 7,20 | NADA A CHECAR | só o tempo | — |
| T013 | 1906: t0 para 10,40 | NADA A CHECAR | só o tempo | — |
| T040 | o crédito de Dana (1895 edition): t0 para 2,567 | NADA A CHECAR | só o tempo; o texto não mudou | — |
| T044 | "1890s outline (schematic)" (s07): retirado | NADA A CHECAR | não vai à tela | — |
| T057 | 1850: t0 para 2,35 | NADA A CHECAR | só o tempo | — |
| T058 | ABOUT 19 MILES: t0 para 5,467 | NADA A CHECAR | só o tempo | — |
| T059 | San Pedro Bay (s10): t0 para 7,072 | NADA A CHECAR | só o tempo | — |
| T060 | Wilmington estuary: t0 para 9,387 | NADA A CHECAR | só o tempo | — |
| T061 | "1890s outline (schematic)" (s10): retirado | NADA A CHECAR | não vai à tela | — |
| T090 | "1890s outline (schematic)" (s14): retirado | NADA A CHECAR | não vai à tela | — |
| T102 | sketch of the 1888 design | CONFIRMADA | p. 2124: "SURVEY OF SAN PEDRO BAY… February 13, 1888… it is proposed to construct a breakwater"; o desenho é do canal, e a legenda diz "sketch" | [ARCE] |
| T103 | 3,300 FT: retirado | NADA A CHECAR | não vai à tela; a medida continua impressa na p. 2124 | — |
| T265 | year each became a city (s40): t0 para 21,82 | NADA A CHECAR | só o tempo | — |
| T266 | Source: LA County annexation records (s40): t0 para 21,82 | NADA A CHECAR | só o tempo; continua junto dos anos | — |
| T309 | 1912: só a nota de tempo | NADA A CHECAR | só o tempo | — |
| T319 | Torrance (s48) | CONFIRMADA | encosta no trecho fino (113 cortes a oeste, TIGER 2025); incorporada em 12/05/1921 (TOR0001) | [TIG][L21] |
| T320 | Gardena (s48) | CONFIRMADA | encosta (113 a oeste, 10 a leste); GAR0001 | [TIG][L21] |
| T321 | Lomita (s48) | CONFIRMADA | encosta (9 a oeste); LOM0001 | [TIG][L21] |
| T322 | Carson (s48) | CONFIRMADA | encosta (11 a oeste, 52 a leste); CAR0001 | [TIG][L21] |
| T323 | year each became a city (s48): retirado | NADA A CHECAR | não vai à tela | — |
| T324 | Source: LA County annexation records (s48): retirado | NADA A CHECAR | não vai à tela; a consequência está em X10 | — |
| T371 | GAP 1,000 FT: retirado | NADA A CHECAR | não vai à tela | — |
| T372 | 2,500 FT: retirado | NADA A CHECAR | não vai à tela | — |
| T390 | San Pedro Bay (s15, em "bay" 5,40) | CONFIRMADA | p. 2124: "survey of San Pedro Bay, with a view to establishing an outer breakwater"; p. 2125: "San Pedro Bay is partially covered…"; "bay" em 5,40 no words.json | [ARCE][REG] |
| T391 | Santa Monica Bay (grifo, p. 213, s24) | CONFIRMADA (literal); a montagem fica em X08 | 29 Stat. 213: "…at Port Los Angeles, in Santa Monica Bay, California, or at San Pedro, in said State…"; "Santa" em 6,16 | [S29][REG] |
| T392 | Terminal Island (s46, em "Terminal" 4,13) | CONFIRMADA | Long Beach anexou 0,97 mi² de Terminal Island, valendo desde 13/08/1909; Terminal Island fica no condado de LA, entre San Pedro/Wilmington e Long Beach | [LB5][L21][LAA][REG] |
| D21 | `_retirado_r4b` (as três cotas) | NADA A CHECAR | sai da tela. O `_r4` continua com o "westerly" tratado como erro do OCR (B2 de 08/10), o que não importa mais, porque o item saiu | — |
| D55 | `_serie`: s40 com os anos, a legenda e a linha; s48 só com os nomes | CONFIRMADA | bate com T261–T266 e T319–T324 do arquivo | — |
| N37 | as três cotas fora da tela, com as medidas impressas na p. 2124, que está na mesa | CONFIRMADA | na p. 2124: "3,300 feet", "A gap of 1,000 feet" e (na imagem) "2,500 feet long"; a regência põe a p. 2124 na s15 | [ARCE][REG] |
| N38 | os anos e a legenda fora da s48; a voz diz "between other cities and county land"; os anos ficam na s40 ("weren't cities yet") | CONFIRMADA | as duas frases batem com o words.json (s48 17,77–19,21; s40 22,02–22,74). Do t0 das pílulas ao corte vão 2,40 s (a nota diz "~2,3") | [REG] |
| N39 | "1890s outline" fora; não há geometria do estuário de época | CONFIRMADA | pauta-geo.md l. 108: "A carta da USC&GS de cerca de 1888 não foi obtida"; os s07, s10 e s14.html dizem "NÃO DESENHADO" | [GEO][HTML] |
| N40 | a linha do condado fora da s48 e mantida na s40 (21,82–23,60) | CONFIRMADA | T266 em 21,82; ver X10 | — |
| G32 | a `_nota` de Wilmington estuary: com guia, sem contorno de época | CONFIRMADA | o mesmo que N39 | [GEO] |
| S06 | a série das pílulas: s40 com os anos e s48 só com os nomes | CONFIRMADA | bate com o arquivo | — |
| S12 | a linha do condado na s40 em 21,82, e fora da s48 | CONFIRMADA | bate com T266 e T324 | — |
| I09 | a lista para a arte da r4b | CONFIRMADA | as listas de sai, muda, novo e t0 batem uma a uma com o diff | — |
| `_quem` | o registro da r4b | NADA A CHECAR | metadado | — |
| `_como_ler` | a convenção da r4b | NADA A CHECAR | metadado | — |
| X08 | s24: o grifo "Santa Monica Bay" na lei, aceso enquanto a voz diz "A House bill would have put the money at Santa Monica" | CONFIRMADA, com achado C1 [MÉDIO] | a página é a lei de 1896, que nomeia as duas baías ("…in Santa Monica Bay, California, or at San Pedro…"). O recorte do grifo tira o "or at San Pedro", e a voz fala do projeto da Câmara. Não há afirmação falsa, mas a tela pode ser lida como a lei, ou o projeto, mandando o dinheiro a Santa Monica | [S29][REG] |
| X09 | o grifo cai na 1ª ocorrência | CONFIRMADA (instrução ao `qc-visual`) | a p. 213 traz "Santa Monica Bay" também em "a wharf or pier in Santa Monica Bay may". O certo é a 2ª linha do item "For a deep water harbor". A nota diz "sete linhas acima" da cláusula: a cláusula começa 6 linhas abaixo ("the decision of a", l. 8 do item) e termina 7 linhas abaixo. É metadado e não muda nada | [S29] |
| X10 | s48 sem T324: nenhum número fica sem dono | CONFIRMADA | o 469 SQ MI continua com T316 ("Source: Los Angeles County, 2026"). O "ABOUT 9 MILES (TODAY)" é medida do canal, declarada pelo "ABOUT" e pelo "(TODAY)" como em s03, s42 e s55 (X07 e S12, aceitos em 08/10), e nunca foi atribuído à linha do condado. Os nomes de cidade não pedem crédito | — |

**Resultado: CHECADO POR INTEIRO.**
- 20 CONFIRMADAS. Em uma delas (X08) há o achado C1, de montagem.
- 24 NADA A CHECAR: 13 itens só de tempo, 8 retirados, D21 e os 2 metadados.
- (20 + 24 = 44.)
- Nenhum DIVERGE, nenhuma REFUTADA, nenhum NÃO ACHEI, nenhum NÃO FOI CHECADO.

**Aritmética e tempos:**
- s15: "bay" em 5,40;
- s24: "Santa" em 6,16;
- s46: "Terminal" em 4,13;
- s48: as pílulas em 17,533, e do t0 ao corte vão 19,933 − 17,533 = 2,40 s.

Os três tempos novos batem com o words.json ao centésimo.

## 3 · O que segura

**Na tela, nada segura.** Não há DIVERGE nem REFUTADA, e nenhum item ficou sem veredito.

## 4 · Os achados

**C1 · [MÉDIO] · T391 / X08, s24.**
O grifo literal "Santa Monica Bay" acende na página da **lei** no instante em que a voz fala do **projeto da Câmara** ("A House bill would have put the money at Santa Monica"). O recorte tira o "or at San Pedro" da mesma linha impressa, e é exatamente essa parte que separa a lei do projeto. Um espectador pode ler a página como o documento que punha o dinheiro em Santa Monica. A citação é fiel; o que pesa é o recorte junto com a voz.
- **CONSERTO** (texto novo do T391, com o mesmo t0 6,16, papel e crédito): `in Santa Monica Bay, California, or at San Pedro`. São 8 palavras, abaixo do teto de 12, e todas estão na mesma linha impressa da p. 213. O grifo continua a âncora do "Santa Monica" da voz e mostra o "or" que a frase seguinte explica ("the law that passed handed the choice", 7,34).
- Se se mantiver `Santa Monica Bay`, não é erro de fato. Nesse caso o grifo precisa cair na 1ª ocorrência (X09).
- **RAIZ: PONTUAL.**

**C2 · [LEVE, metadado] · a nota do T391.**
A nota diz "sete linhas acima" da cláusula, mas a cláusula T159 começa 6 linhas abaixo e termina 7 abaixo.
- **CONSERTO**: `…seis linhas acima do começo da cláusula (T159, 'the decision of a', fim da l. 8 do item)…`. Não muda a tela.
- **RAIZ: PONTUAL.**

**Para a arte e o `qc-visual`** (não são erro de fato):
- s24: o grifo vai na 1ª ocorrência de "Santa Monica Bay" ("Angeles, in Santa Monica Bay, California, or at San Pedro"), nunca na do píer;
- s46: a pílula fica sobre Terminal Island, sem cobrir a divisa de 1923.

## 5 · A lista de nomes

Nenhum anônimo novo na tela. Os textos novos são nomes de lugar (San Pedro Bay, Terminal Island e as quatro cidades) e um literal de lei.

## 6 · Voláteis

T319–T322 dependem dos limites de hoje: mudam com anexação ou desanexação junto da faixa. A data-base é a mesma do R3-06 (TIGER 2025 e a camada 21, consultada em 07/10/2026). **Reconferir na véspera de publicar**, como diz a tabela de voláteis da r3. Os outros itens novos são fixos.

## 7 · DECISÃO DO LUCAS PENDENTE que tocou esta checagem

Nenhuma nova. O V1 de 08/10 (a voz da s47) continua com ele.

## 8 · Como medi, e a rede

**Local:**
- o diff `HEAD` × o disco, pelo script no scratchpad;
- o `arce1888-pp2110-2128.txt`, PDF p. 756–757;
- o scan `stat29-1896-p213.jpg`, lido como imagem, e o `stat29-p213-214.txt`, l. 623–624 e 663;
- o `regencia.json` e o `words.json` (s15, s24, s40, s46, s48);
- os s07, s10 e s14.html, só com grep;
- o `pauta-geo.md`;
- os laudos `fatos-final`, `fatos-r3` e `fatos-r3-final` (F127, R3-02d, R3-06).

**WebSearch**, uma busca sobre Terminal Island:
- [Los Angeles Almanac, geografia](https://www.laalmanac.com/geography/ge06a.php)
- [Terminal Island Freeway (gribblenation)](https://www.gribblenation.org/2022/03/the-terminal-island-freeway-california.html)

Ela não trouxe o ID do GNIS. A ilha e a anexação já estavam provadas pelo LB0005 e pela camada 21.

Nenhum site recusou leitura. Não usei ferramenta de navegador e não gravei nada no canal.

## 9 · Os 2 padrões mais vistos

1. **Grifo literal certo, posto no lugar errado da fala.** O texto confere letra a letra, mas o recorte junto com a voz muda qual documento parece dizer o quê (C1). A conferência do grifo precisa olhar também a frase que soa no mesmo instante.
2. **Tirar texto da tela também é afirmação.** A retirada do T324 só se sustenta porque foi conferido que nenhum número da s48 perde o dono (X10). Retirada de crédito pede essa conta, não só "NADA A CHECAR".

NOTA: 9.5/10

VEREDITO: PASS
