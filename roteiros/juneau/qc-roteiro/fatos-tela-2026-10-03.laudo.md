COBERTURA: 44 de 44, com o denominador tirado do confronto entre `out/juneau/textos-tela.json` (sha256 `115bf1d0…e673e`) e a cópia de antes, `out/juneau/_tmp/textos-tela-antes-5a-leva.json` (sha256 `01e4c763…94b2`): toda entrada nova ou mudada que vai à tela (42), mais 2 afirmações sem texto próprio, lidas à mão nas notas

<!-- Laudo do verificador-de-fatos (subagente do Claude central, 03/10/2026, 02:3x de Brasília), sobre a 5ª leva do
redator-de-tela. Gravado pelo próprio verificador, a pedido do despacho. Os laudos anteriores continuam em
fatos-tela.laudo.md (28/09) e fatos-tela-2026-10-01.laudo.md (01/10). -->

NOTA: 9.5/10. Todas as 44 conferem com a fonte que citam, inclusive o literal novo de s18, conferido letra a letra na imagem da página. Não há REFUTADA nem DIVERGE. O meio ponto a menos é por três pendências que não são da verdade do texto: a janela do clipe de s01, que cresceu e espera reconferência; a geometria dos três territórios de s42, que ainda não existe; e o s01.html, que ainda é o da 4ª leva.

# Laudo de fatos da tela: Juneau, 5ª leva (`screen_text`), 03/10/2026

- **A data-base:** 03/10/2026, entre 02:1x e 02:3x de Brasília.
- **O objeto:** as entradas novas ou mudadas de `out/juneau/textos-tela.json` (gravado às 02:26), contra a cópia de antes da 5ª leva (02:12).
- **A régua:** `out/juneau/regencia.json` (sha256 `d422dc22…`), `out/juneau/conceito-visual.json` (`715af3e5…`), `out/juneau/words.json` (`a8d5ec77…`) e `out/juneau/_pesquisa/conferencia-midia.json` (`d79f10c8…`).
- **As ferramentas:** Bash (Python e PyMuPDF, só leitura), Read, WebFetch (TIGERweb e a página do arquivo no Commons). Nenhum site recusou. Nenhum `mcp__claude-in-chrome__*` nem `mcp__Claude_Browser__*`.

## Como a lista foi derivada

O canal não tem extrator para texto de tela. A lista saiu de um confronto em Python, só leitura, entre o arquivo novo e a cópia de antes. Cada objeto das quatro listas que vão à tela (`cards_pessoa`, `rotulos_dado`, `_creditos` e `_avisos_de_ano`) foi comparado byte a byte com os de antes. O que não tinha par idêntico entrou como **novo** (sem par pela chave cena + texto) ou **mudado** (com par, e o campo que mudou dito na linha). Depois, à mão, entraram as afirmações novas que vão à tela sem texto próprio.

| parte | iguais | mudados | novos | saíram |
|---|---|---|---|---|
| cards (2 textos cada) | 12 cards | 1 card (Rae: o cargo mudou de texto, e o nome mudou só na nota): 2 textos | 0 | 0 |
| rótulos | 250 | 18 (só `_nota`, `_tempo`, `fonte`, `_beat`, `_plano` ou `por_que_diverge`; o `na_tela` igual) | 15 (entre eles o 2º `Willow` de s15, papel novo) | 6 (s01 `Juneau, Alaska` do p1 e `Alaska State Capitol`; s18, o cartão da fala; s31 `ALASKA ECONOMIC TRENDS · 1990`; s60, as duas linhas com `·`) |
| créditos | 78 | 4 (só `cobre` e `_nota`) | 2 | 1 (s01 Gillfoto) |
| avisos de ano | 15 | 0 | 1 | 2 (s01, ca. 1987 e 2017) |
| **textos que vão à tela** | | **24** | **18** | |
| afirmações sem texto próprio (X), lidas à mão | | | 2 | |
| **denominador** | | | **44** | |

- **O relato do redator bate com o arquivo:** cada mudança que ele descreve está no diff, e o diff não tem nenhuma que ele não descreva.
- **Fora do denominador**, porque não vão à tela: `nao_vai_para_tela` (+11, −5), `glossario` (+13, −7), `_formas_de_serie`, `_creditos_regras`, `_avisos_regras`, `_sem_texto`, `_entradas` e `_revisao_2026_10_03`. Li os novos e mudados de cada um. Nenhum contradiz o que a tela afirma, e os que citam fonte citam as mesmas que conferi abaixo.
- **Os que saíram** não têm veredito: não vão mais à tela. Conferi que cada saída tem motivo em `nao_vai_para_tela` e que a regência de 03/10 tira a mídia que eles cobriam: s01 tira as duas fotos de Gillfoto; s18 põe a frase grifada no literal.
- **Os 367 textos iguais** (12 cards, ou 24 textos; 250 rótulos; 78 créditos; 15 avisos) herdam o veredito dos laudos de 28/09 e 01/10.

## A tabela

Os ids: **N** é novo, **M** é mudado e **X** é afirmação sem texto próprio. O número entre colchetes é a posição no arquivo novo (R = `rotulos_dado`, K = `_creditos`, A = `_avisos_de_ano`, C = `cards_pessoa`).

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| N01 | s01 R[3] `Juneau` (ponto de mapa, 0–6,567, antes da voz) | CONFIRMADA | `cidades-ne.json`: name `Juneau`, ponto −134.400712, 58.303386 (Natural Earth populated places). A voz diz `Juneau.` em 5,484 s (words.json), e a nota declara 5,484 s antes da voz: a conta fecha | https://www.naturalearthdata.com/about/terms-of-use/ |
| N02 | s15 R[68] `Willow` (o nome do local na pílula do 56,219) | CONFIRMADA | Boletim de 1976, p. viii (vi a imagem da p. 10 do PDF): `Capital Site Selection Ballot Measure … Willow 56,219`. Na cédula: `WILLOW ( )` (oep76.ocr.txt, PAGE 1). O folheto, p. 48: "The town of Willow is five miles to the west of the site", e a âncora fica 5 milhas a leste | https://web.archive.org/web/20170102052855/https://www.elections.alaska.gov/Core/Archive/76GENR/76genr.pdf |
| N03 | s15 R[69] `Larson Lake` | CONFIRMADA | A mesma página: `Larson Lake 33,170`. Na cédula: `LARSON LAKE ( )`. GNIS: `larson-lake-gnis.json`, name `Larson Lake` | idem |
| N04 | s15 R[70] `Mount Yenlo` | CONFIRMADA | A mesma página: `Mount Yenlo 16,169`. A cédula abrevia, `MT. YENLO ( )`, e a tela segue o boletim. GNIS: `mount-yenlo-gnis.json`, name `Mount Yenlo` | idem |
| N05 | s18 R[89], o literal na folha: `Anyone who favors moving the capital to Willow and reducing costs to Alaskan taxpayers should vote “NO”! — against Initiative No. 6. It has confused the public as to the real cost of relocation to the taxpayers. Its true purpose is to prohibit the move to Willow which the voters have authorized.`, com o grifo em `Its true purpose is to prohibit the move to Willow` | CONFIRMADA | Conferido letra a letra na imagem de `oep78.pdf` (PDF p. 6, impressa 49), que eu mesmo rasterizei a 400 dpi, sem usar os recortes do redator. É o 1º parágrafo de "STATEMENT AGAINST BALLOT PROPOSITION NO. 3", coluna da esquerda, e bate palavra a palavra: "Alaskan", `"NO"!`, o traço com espaço dos dois lados antes de "against", "Initiative No. 6.", nenhuma vírgula antes de "which" e o parágrafo acabando em "authorized.". Sem reticências: o corte cai no fim do parágrafo. A assinatura (FRANK HARRIS, Chairman, Taxpayers Capital Relocation Committee) fica fora. O grifo é igual à fala da voz (`"Its true purpose is to prohibit the move to Willow,"`, 188,84–191,46 s). A forma das aspas e do travessão é tipografia da casa, não letra | https://web.archive.org/web/20161230104800/http://www.elections.alaska.gov/doc/oep/1978/1978-Ballot-Prop-Bond-Prop.pdf |
| N06 | s31 R[140] `ALASKA ECONOMIC TRENDS` (o cabeçalho do cartão, agora sem o ano) | CONFIRMADA | jun90art1.pdf (PyMuPDF): rodapé `Alaska Economic Trends June 1990` nas págs. 1, 2, 4, 5 e 6 | https://laborstats.alaska.gov/trends/jun90art1.pdf |
| N07 | s31 R[141] `1990` (o rótulo de data no centro, 10,433–12,7) | CONFIRMADA | O rodapé diz June 1990, e a voz diz `In nineteen ninety` (`nineteen` em 321,124 s; o rótulo entra em 321,133). Conferi a conta: 310,7 + 10,433 = 321,133, e o rótulo fica no ar 2,267 s | idem |
| N08 | s42 R[190] `JUNEAU` (o território) | CONFIRMADA | TIGERweb, Counties 500K, GEOID 02110: NAME `Juneau City and Borough`, BASENAME `Juneau`. Consulta aberta por mim em 03/10 | https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_ACS2025/State_County/MapServer/11/query?where=GEOID+IN+('02110','02100','02230')&outFields=GEOID,NAME,BASENAME,LSADC&returnGeometry=false&f=json |
| N09 | s42 R[191] `HAINES` (o território) | CONFIRMADA | GEOID 02100: NAME `Haines Borough`, BASENAME `Haines` | idem |
| N10 | s42 R[192] `SKAGWAY` (o território) | CONFIRMADA | GEOID 02230: NAME `Skagway Municipality`, BASENAME `Skagway` | idem |
| N11 | s42 R[193] `BRITISH COLUMBIA` (o território) | CONFIRMADA | `out/juneau/_media/geo/british-columbia.json`, em disco: name `British Columbia`, type_en `Province`, iso `CA-BC` (Natural Earth Admin 1) | https://www.naturalearthdata.com/about/terms-of-use/ |
| N12 | s60 R[268] `1978` | CONFIRMADA | Eleição geral de 7/11/1978: o folheto de 1978, p. 63, traz a proposição de bonds desse pleito, e o boletim de 1978 (`_dados/s20.json`) traz o resultado | https://web.archive.org/web/20161230084012/https://www.elections.alaska.gov/Core/Archive/78GENR/78genr.pdf |
| N13 | s60 R[269] `UP TO $966 MILLION` | CONFIRMADA | oep78.ocr.txt, PAGE 20: "general obligation bonds in the principal amount of not more than $966,000,000". "Up to" é a forma de s19 e a palavra da voz | https://web.archive.org/web/20161230104800/http://www.elections.alaska.gov/doc/oep/1978/1978-Ballot-Prop-Bond-Prop.pdf |
| N14 | s60 R[270] `1982` | CONFIRMADA | A eleição geral de 2/11/1982: Ballot Measure No. 8 (oep82, p. 88) e o boletim de 1982 (`_dados/s29.json`) | https://web.archive.org/web/20161231052618/https://www.elections.alaska.gov/Core/Archive/82GENR/82genr.pdf |
| N15 | s60 R[271] `ABOUT $2.8 BILLION` | CONFIRMADA | oep82.ocr.txt: "(estimated to total $2,843,147,000)" e "TOTAL $2,843,147,000". Arredonda para 2.8, com o "about" da voz | https://web.archive.org/web/20170218020400/http://www.elections.alaska.gov/doc/oep/1982/1982-Bonding-Prop-Ballot-Measures.pdf |
| N16 | s01 K[0] `© MapTiler © OpenStreetMap contributors` (o voo, 0–6,567) | CONFIRMADA | `canal.json` › `mapa.perfil: "maptiler"`, e a regência s01#1 descreve o voo em satellite-v2 + terrain-rgb-v2. É a linha que a identidade §6 manda pôr em toda cena de mapa da MapTiler | (arquivo do canal: `marca/identidade.md` §6) |
| N17 | s15 K[20] `TERRYMCDERMOTT / Wikimedia Commons · CC BY-SA 4.0` | CONFIRMADA | A página do arquivo, aberta por mim em 03/10: Author `TERRYMCDERMOTT`, Source `Own work`, licença CC BY-SA 4.0. O veredito de `candidatos[51]` está aprovado, com o mesmo `credito_na_tela`, e o sha256 `3a03357d…7c70` é o do arquivo entregue em `_media/foto/s15/` (medi com sha256sum) | https://commons.wikimedia.org/wiki/File:Mt._Denali_from_Willow,_Alaska.jpg |
| N18 | s15 A[7] `Photo from 2014` | CONFIRMADA | A página do arquivo diz "Taken on January 14, 2014", e o veredito traz `aviso_de_ano: true`. O fato da frase é de 1976 | idem |
| M01 | s31 C[8], o cargo de Rae: `Labor economist, Alaska Department of Labor (1990)` | CONFIRMADA | jun90art1.pdf, p. 1: "Brian Rae is a labor economist employed with the Research & Analysis Section, Administrative Services Division, Alaska Department of Labor"; o texto é de junho de 1990. O "(1990)" segue a regra do ano dos cards, porque o card fica 2,67 s sem data ao lado: conferi `Brian` em 323,387 = 310,7 + 12,687 e `finally` em 326,04 = 310,7 + 15,34 | https://laborstats.alaska.gov/trends/jun90art1.pdf |
| M02 | s31 C[8], o nome `BRIAN RAE` (mudou só a nota) | CONFIRMADA | "by Brian N. Rae", p. 1. O texto do nome é o mesmo de antes | idem |
| M03 | s01 R[0] `AUG. 27, 1974` (só `_tempo`) | CONFIRMADA | Texto e horas iguais (0,2; sai em 3,567–3,867). Vem do boletim da primária de 27/8/1974, já conferido em 28/09 | https://web.archive.org/web/20230413124151/https://www.elections.alaska.gov/Core/Archive/74PRIM/74prim.pdf |
| M04 | s01 R[1] `YES` (só `_nota`) | CONFIRMADA | A nota diz onde o carimbo bate (`approved`, 3,553 s, na voz), e o que ele afirma não muda | idem |
| M05 | s01 R[4] `Juneau, Alaska` (era o do p3; agora sobre o clipe do Envato no p2, 6,567–13,6) | CONFIRMADA | `conferencia-midia.json`, candidatos[35]: aprovado, com `lugar_na_origem` "Juneau Alaska aerial push in". O rótulo não passa disso. ⚠️ O veredito foi dado para a janela de 9,8 a 13,6 (frase "So what happened…"), e ela cresceu para 6,567–13,6, cobrindo "Half a century later, the capital is still in Juneau." A regência já manda reconferir (abaixo, P1) | (Envato: a prova é o `conferencia-midia.json`, candidatos[35]) |
| M06 | s15 R[67] `56,219` (o tempo, e a pílula agora com o nome) | CONFIRMADA | Boletim de 1976, p. viii: `Willow 56,219`. `three` em 147,943 (a nota diz 147,967); `lay` em 151,63, e 143,4 + 8,233 = 151,633 | https://web.archive.org/web/20170102052855/https://www.elections.alaska.gov/Core/Archive/76GENR/76genr.pdf |
| M07 | s15 R[71] `33,170` | CONFIRMADA | `Larson Lake 33,170` | idem |
| M08 | s15 R[72] `16,169` | CONFIRMADA | `Mount Yenlo 16,169` | idem |
| M09 | s15 R[73] `Willow` (o ponto da vila: o tempo, o beat e a nota da miniatura) | CONFIRMADA | Texto e fonte iguais (OSM node/150916708). Entra em `Willow,` (152,427 s; 143,4 + 9,033 = 152,433) e fica até 160,067, como dizem o aviso e o crédito | https://www.openstreetmap.org/node/150916708 |
| M10 | s18 R[88] `STATEMENT AGAINST BALLOT PROPOSITION NO. 3 · 1978` (só `_nota`) | CONFIRMADA | É o título literal da p. 49, que vi na imagem | https://web.archive.org/web/20161230104800/http://www.elections.alaska.gov/doc/oep/1978/1978-Ballot-Prop-Bond-Prop.pdf |
| M11 | s31 R[139] `not that heavily` (só `_nota`: 3,8 s no ar) | CONFIRMADA | As palavras são da voz (`didn’t think the price tag weighed that heavily`). A conta: 8,892 → 12,7 = 3,808 s | (roteiro-narrador.md, p. 50) |
| M12 | s35 R[160] `$` (só `_nota`) | NADA A CHECAR | O `$` gráfico, como em 01/10. A nota descreve a cédula que cresce e não afirma fato | — |
| M13 | s35 R[162] `RIGHT TO KNOW, VOTE - MOVE COSTS` (agora entra em `second`) | CONFIRMADA | O texto é o mesmo, conferido em 01/10 na imagem da cédula de 1994. A palavra `second` está em 374,399 s (363,1 + 11,3), na frase "a second initiative: the right to know the cost first": a palavra convoca a medida certa | (cédula de 1994; laudo de 01/10) |
| M14 | s60 R[265] `1974` (agora fica até o corte) | CONFIRMADA | Texto igual. `nineteen` em 617,276 s (615,7 + 1,6 ≈ 617,3); 17,367 − 1,6 = 15,767 s no ar | https://web.archive.org/web/20230413124151/https://www.elections.alaska.gov/Core/Archive/74PRIM/74prim.pdf |
| M15 | s60 R[272] `NO` (um carimbo sobre o valor de cada estação) | CONFIRMADA | 1978: bonds com 31,491 sim e 88,783 não (`_dados/s20.json`). 1982: Ballot Measure No. 8 com 91,049 sim e 102,083 não (`_dados/s29.json`). `no,` em 630,145 s (615,7 + 14,445; a nota diz 14,467) | boletins de 1978 e 1982 (acima) |
| M16 | s62 R[278] `1978 · UP TO $966 MILLION` (só `por_que_diverge`) | CONFIRMADA | Texto igual; o valor, como em N13 | oep78 (acima) |
| M17 | s62 R[279] `1982 · ABOUT $2.8 BILLION` (só `por_que_diverge`) | CONFIRMADA | Texto igual; o valor, como em N15 | oep82 (acima) |
| M18 | s63 R[280] `YES` (só `_nota`: a aproximação de 1,00 a 1,06) | CONFIRMADA | Texto igual; a nota descreve movimento, não fato | — |
| M19 | s63 R[281] `1978 · UP TO $966 MILLION` | CONFIRMADA | Igual a M16 | oep78 |
| M20 | s63 R[282] `1982 · ABOUT $2.8 BILLION` | CONFIRMADA | Igual a M17 | oep82 |
| M21 | s01 K[1] `Source: Alaska Division of Elections, 1974` (cobre o placar, 3,967–6,567) | CONFIRMADA | O placar é do boletim de 1974 | 74prim (acima) |
| M22 | s15 K[18] `Source: Alaska Division of Elections, 1976` (agora cobre também os três nomes) | CONFIRMADA | Os nomes e as contagens estão todos na p. viii do boletim de 1976 | 76genr (acima) |
| M23 | s18 K[25] `Source: Alaska Division of Elections, 1978` (cobre a folha e o literal) | CONFIRMADA | O folheto oficial de 1978 é da Divisão de Eleições. A folha é recriada com o texto fiel (N05), como o midia.md §7.1 pede | oep78 (acima) |
| M24 | s31 K[43] `Source: Alaska Department of Labor, 1990` (agora entra com o 1990) | CONFIRMADA | O Trends de junho de 1990 é do Alaska Department of Labor (rodapé, "Research and Analysis Section") | jun90art1 (acima) |
| X01 | s15: cada contagem presa ao seu local (Larson Lake no ponto do lago, Mount Yenlo no cume, Willow na âncora 5 mi a leste da vila) | CONFIRMADA | Folheto de 1976: "The Larson Lake site … west side of Larson Lake"; "The Mt. Yenlo site is located in the southerly foothills of Mt. Yenlo"; "The town of Willow is five miles to the west of the site". A pílula fica no acidente geográfico que dá nome ao local. É aproximação de escala de mapa, sem desenhar limite de sítio, e por isso não repete o F1 de 01/10 | https://web.archive.org/web/20161230104844/http://www.elections.alaska.gov/doc/oep/1976/1976-Ballot-Prop-Bond-Prop.pdf |
| X02 | s60: a linha do tempo 1974 (YES) → 1978 (NO) → 1982 (NO), na frase "Both times a price went on the ballot, voters said no" | CONFIRMADA | 1974: sim (boletim da primária). 1978: bonds rejeitados por 88,783 a 31,491. 1982: rejeitado por 102,083 a 91,049. A ordem e os dois "não" fecham | boletins de 1974, 1978 e 1982 (acima) |

**O placar:** 43 CONFIRMADA, 1 NADA A CHECAR (M12, o `$` gráfico), 0 NÃO ACHEI, 0 DIVERGE, 0 REFUTADA. A lista inteira tem veredito, e o resultado é **CHECADO E LIMPO** nas 44.

## Os achados acionáveis

Nenhum de fato. Ficam três pendências, de outras lentes, que tocam o que a tela afirma:

- **P1 [LEVE] → s01, `Juneau, Alaska` sobre o clipe do Envato: reconferir a janela.**
  - O problema: o veredito do `conferente-de-midia` (candidatos[35]) julgou a janela de 9,8 a 13,6, contra a frase "So what happened…". Agora o clipe vai de 6,567 a 13,6 e cobre também "Half a century later, the capital is still in Juneau."
  - O texto do rótulo continua dentro do `lugar_na_origem`, e por isso ele está CONFIRMADO.
  - **CONFERIR:** o conferente refaz o veredito para a janela nova, o que a regência já pede (auditoria › midia_entregue › janelas_a_reconferir). A tela não muda.
  - **RAIZ:** PONTUAL.
- **P2 [LEVE] → s42, a geometria dos três territórios: conferir os limites quando chegar.**
  - O problema: `juneau-borough`, `haines-borough` e `skagway-municipality` não existem em `out/juneau/_media/geo/` (conferido em 03/10).
  - Os nomes estão CONFIRMADOS (N08–N10), mas o contorno pintado não pode ser checado antes de existir.
  - **CONFERIR:** o `pesquisa-geo` baixa a geometria do mesmo TIGERweb, Counties 500K, GEOID 02110, 02100 e 02230 (a mesma fonte dos nomes), e o mapista declara a fonte.
  - **RAIZ:** PONTUAL.
- **P3 [LEVE] → `out/juneau/graphics/s01.html` ainda é o da 4ª leva.**
  - O que está lá: as duas fotos de Gillfoto e o crédito `Gillfoto / Wikimedia Commons · CC BY-SA 4.0`.
  - Hoje está certo, porque as fotos estão de fato na cena. Mas o textos-tela novo tira as duas.
  - **CONFERIR:** quando o `editor-de-arte` refizer s01, o qc confere que as fotos e o crédito saíram juntos, e que entraram o ponto `Juneau` e a linha da MapTiler.
  - **RAIZ:** PONTUAL.

Fora desta lente, sem veredito meu:
- **O relevo em s01.** A regência de 03/10 põe terrain-rgb-v2 no voo de s01. O CLAUDE.md registra a liberação do Juneau "com o relevo 3D só em s44" (Lucas, 28/09/2026). A própria regência leva o relevo ao relato como "ponto a confirmar" (auditoria › relevo). Não é fato da tela: é decisão do Lucas, para o Claude central.
- **O tempo de s18.** A nota diz "s18 + 5,633; 188,84 s", mas 183,233 + 5,633 = 188,866, e `Its` está em 188,84 (s18 + 5,607). A diferença é de 0,026 s, menos de um quadro: é o quadro arredondado da regência, e não muda nada na tela.

## A lista de nomes

Nenhuma atribuição anônima nas entradas novas ou mudadas. As duas pessoas que aparecem já têm nome e fonte:
- **Brian N. Rae:** labor economist, Research & Analysis Section, Alaska Department of Labor (1990) — https://laborstats.alaska.gov/trends/jun90art1.pdf;
- **o signatário da declaração de s18:** Frank Harris, Chairman, Taxpayers Capital Relocation Committee, 1978 (oep78, p. 49). A decisão do roteiro é não nomeá-lo, e ele fica fora da tela (`nao_vai_para_tela`).

## Os voláteis

Nenhum novo. As entradas desta leva são todas históricas (1974, 1976, 1978, 1982, 1990), ou nomes de lugar e de licença. Duas podem mudar com o tempo:
- o BASENAME do Census: ele muda se um borough mudar de forma, o que é raro. Conferido na vintage ACS2025;
- a licença do arquivo do Commons: lida hoje.

## Os 2 padrões mais vistos

1. **Nome de local copiado da fonte do número, e não da cédula impressa.** É o caso de `Mount Yenlo` (o boletim) contra `MT. YENLO` (a cédula). Está certo, e a escolha ficou registrada em `nao_vai_para_tela`.
2. **Mudança de tempo sem mudança de texto.** Das 24 entradas mudadas, só o cargo de Rae (M01) mudou de texto; as outras 23 mudaram a nota, o tempo, a fonte citada ou o `cobre`. Conferi cada hora contra o `words.json` e a `inSec` da regência, e todas fecham com até 1 quadro de folga.

## O que tocou esta checagem e é decisão do Lucas

- O relevo no voo de s01 (fora da lente; acima).
- Onde gravar o laudo de fatos dos próximos vídeos (CLAUDE.md, os marcadores). Este segue o do Juneau, em `roteiros/juneau/qc-roteiro/`.

VEREDITO: PASS
