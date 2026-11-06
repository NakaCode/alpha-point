COBERTURA: 22 de 22

# Laudo-delta dos rótulos encurtados · verificador-de-fatos · big-sur (vídeo 5) · tarefa big-sur-texto-4

- **Data-base:** 06/11/2026, das 02:0x às 02:3x (Brasília). As origens foram relidas hoje pela rede (DVIDS, Commons, Caltrans e Envato).
  O Motion Array respondeu 403 e não foi contornado. Nenhum volátil novo: nenhum rótulo do T8 traz número, data ou situação que muda.
- **O objeto:** `out/big-sur/textos-tela.json`, sha256 `59ab5f9f96ec5b9388eec4277fe4e0226368ac75f9097f62c8c7dad493042b60` (380 textos),
  contra o de antes, `590a70e4363d3ce9308cfeae6a5720c4efe01e14cafa874428006c386badccfe` (`out/big-sur/_tmp/redator/t4-antes/`).
  - A mídia foi julgada contra o `conferencia-midia.json` `470095dc159999582beb777f5ed22e35769715010b2c60000904280cea545bb1`.
  - Os 16 HTML foram lidos como texto: s05 `ff60f572…`, s09 `a95ab577…`, s12 `434ee3c9…`, s13 `d02c3833…`, s15 `cd1f1837…`, s18 `ebb18233…`,
    s20 `6ad063c8…`, s21 `99936df8…`, s25 `9fffe079…`, s30 `6dc2b44e…`, s31 `28e4b842…`, s42 `88bbc0c8…`, s48 `be2827d4…`, s50 `d485ab7a…`,
    s53 `2f40611c…` e s57 `b3634f62…`.
  - Nada foi editado fora de `out/big-sur/_tmp/vf-bs-E/` e deste laudo.
- **O que foi lido:**
  - o ofício (`.claude/agents/verificador-de-fatos.md`) e a roupa (`marca/agentes/verificador-de-fatos.md`), que existe;
  - `marca/identidade.md` §4.1 e `marca/midia.md` §2.7;
  - a decisão "1. A" (`roteiros/big-sur/decisoes-lucas.md`) e a tabela (`out/big-sur/_tmp/sala/rotulos-longos.md`);
  - o relato do redator (`out/big-sur/_tmp/redator/texto-4-relato.md`);
  - os quatro laudos de antes.
- **Como a lista foi derivada (o denominador, 22):** por script. O `diff.py` compara as 380 entradas de `_textos_por_cena` do arquivo de
  antes com as do de agora, campo a campo.
  - Mudaram 22, só em `texto`, `nota` e, na [55], `_quebra`; nenhum t0, t1 ou `_abs` (`diff.txt`). São os 22 do pedido.
  - Os índices `[n]` são os de `_textos_por_cena`.
  - O que o script não pega é o sentido. Cada rótulo foi lido contra a mídia ou a camada que ele nomeia, na cena, e contra a voz no mesmo
    instante (`voz_s25.py`, sobre o `words.json`).
- **Como se casou a mídia** (`casar2.py`): todo arquivo de `_media/footage/` e `_media/foto/` que as 12 cenas com registro real citam foi
  casado com o veredito que o `conferencia-midia.json` dá a ele.
  - No acervo aberto, o casamento é pelo sha256 do rascunho julgado; no banco pago, pelo sha256 do arquivo baixado (`medido.sha256_do_baixado`),
    e o veredito tem `mesmo_item: true`.
  - **Cada arquivo citado tem um `aprovado` da mesma cena.** O veredito julgado é esse, e a tabela o cita pelo índice de `candidatos`.

## O resultado

| | quantos |
|---|---|
| confirmada | **19** |
| corrigir | **1**: o [96], s20 |
| nao_conferida | **0** |
| nada a checar | **2**: o [42] e o [228], que não vão à tela |
| **total** | **22 de 22** |

**NOTA: 9/10.** Os 20 rótulos que vão à tela ficam dentro da origem, e nenhum ficou mais específico que ela. Um, o da s20, diz "perto de
Big Sur" sobre um clipe que a origem põe *em* Big Sur. O conserto é de uma palavra e usa a forma que o Lucas já aprovou.

## A tabela

| [n] | cena | antes → depois | veredito | a fonte (o veredito da mídia ou o arquivo de dados) | URL |
|---|---|---|---|---|---|
| [22] | s05 | `Big Sur coast, California` → `Big Sur coast` | confirmada | conferencia-midia.json 470095dc › candidatos[53] (s05, lote 4, aprovado, mesmo_item true), casado pelo sha256 (_media/footage/s05/_PROCEDENCIA.json): "Drone view of sandy beach and Pacific Ocean waves crashing in big sur California" (título); "the breathtaking Big Sur coastline" (descrição). Relido hoje: o mesmo título e a mesma descrição. | https://app.envato.com/search/stock-video/1f008962-1067-4b99-9098-8120fd214e06 |
| [39] | s09 | `Highway 1, Big Sur` → `Highway 1` | confirmada | conferencia-midia.json 470095dc › candidatos[38] (s09, aprovado), casado pelo sha256 0762aa51…: lugar_na_origem "Regent's Slide"; no o_que_viu, a pista some sob a terra. A galeria é a do projeto de emergência de Regent's Slide na Highway 1 (alt de hoje: "…officially opening highway 1 in Big Sur"). "Highway 1" é a estrada da foto e é menos específico que o deslizamento. Já tinha veredito: VT-040 (VP-B-084). | https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery |
| [42] | s09 | `Mud Creek, Big Sur` → `Mud Creek` | nada a checar | _vai_a_tela false (o caminho "usgs", a 2ª opção); a s09.html só cita a forma num comentário (l. 14). Se o caminho voltar, a forma fica dentro do VP-B-064 ("Mud Creek landslide"). | https://www.usgs.gov/media/images/usgs-air-photo-mud-creek-landslide-taken-may-27-2017 |
| [50] | s12 | `Highway 1, Big Sur` → `Highway 1` | confirmada | conferencia-midia.json 470095dc › candidatos[54] (s12, lote 4, aprovado, mesmo_item true), casado pelo sha256: "Experience the Stunning Aerial View of Big Sur Along Highway 1 By the Beautiful California Coast" (título). Relido hoje: o mesmo título. | https://app.envato.com/search/stock-video/4c7608ca-5b39-4f43-af70-32533eb7c99a |
| [55] | s13 | `BIG SUR CCD⏎MONTEREY COUNTY` → `BIG SUR CCD` | confirmada | O nome oficial do distrito: ccd-big-sur.js (TIGER/Line 2020, GEOID 0605390235, "Big Sur CCD"); VP-A-035, VP-A-262 e VP-A-332 (PL 94-171). O que saiu, "Monterey County", a voz diz no mesmo instante ("This one, in Monterey County, carries the name Big Sur", words.json 69,1–70,5 s), e o [56] o mostra até a entrada do rótulo. Já tinha veredito: VT-056. | https://www2.census.gov/geo/tiger/TIGER2020/COUSUB/tl_2020_06_cousub.zip |
| [77] | s15 | `BIG SUR COAST · 1986 PLAN` → `1986 PLAN AREA` | confirmada | O polígono sob o rótulo é o costa-do-plano-1986 (name_pt "Big Sur coast, 1986 plan area (coastal zone)", 146.534 acres; IoU 0,988 com a camada do condado: VP-A-268). O plano chama essa área de "the planning area" ("the planning area's 150,000 acres") e de "the Plan area" (cópia local do govinfo). A voz diz: "it's a number for that bigger coast". | https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm |
| [79] | s18 | `Big Sur coast, California` → `Big Sur coast` | confirmada | conferencia-midia.json 470095dc › candidatos[61] (s18, lote 4, aprovado, mesmo_item true), casado pelo sha256: "Big Sur Coastline" (título; sem descrição). A releitura de hoje deu HTTP 403 e não foi contornada. O título está também na URL do item (big-sur-coastline-914470). | https://motionarray.com/stock-video/big-sur-coastline-914470/ |
| [96] | s20 | `Coast near Big Sur, California` → `Near Big Sur` | **corrigir** | conferencia-midia.json 470095dc › candidatos[55] (s20, lote 4, aprovado, mesmo_item true), casado pelo sha256 (_media/footage/s20/big-sur-falesias-enseada-aerea.mp4): "Beautiful Aerial View of Big Sur Coastline" (título) e "a gorgeous cove nestled among the rugged cliffs of Big Sur, California" (descrição), relidos hoje. A origem põe a enseada EM Big Sur, e o rótulo diz "perto". O "near" é a palavra da legenda do DVIDS (candidatos[10], VP-B-058), que saiu da s20 com a caça. CONSERTO: "Big Sur coast", a forma da tabela do Lucas para a costa de Big Sur. | https://app.envato.com/search/stock-video/04f8f43b-d0ca-4366-9ccc-8c4f31e2e459 |
| [99] | s21 | `Highway 1, Big Sur` → `Highway 1` | confirmada | conferencia-midia.json 470095dc › candidatos[56] (s21, lote 4, aprovado, mesmo_item true), casado pelo sha256: "Coastal Highway Winds Along Big Sur Cliffs"; "a winding coastal highway carved into majestic cliffs along the Big Sur coastline". As etiquetas do item, relidas hoje, dizem "Highway 1" e "Hwy 1". O plano de 1986 chama a Highway 1 de "the sole transportation and emergency route up and down the coast". A voz, no mesmo instante: "Mostly, that means Highway 1". | https://app.envato.com/search/stock-video/e1ae4a55-ccb0-4399-9619-21863b03491d |
| [134] | s25 | `OUTSIDE THE CENSUS DISTRICT` → `OUTSIDE THE DISTRICT` | confirmada | Mud Creek (35,8655 N, 121,4305 W; mud-creek.js, ccd_2020 "San Ardo CCD") fica FORA do ccd-big-sur e DENTRO da área do plano de 1986 (pip.py). Em 15,9 s, o único distrito na tela é o ccd-big-sur, que sobe de 30 a 70 %: o tracejado do plano sai em 9,133–9,433 s (s25.html l. 169 e 573). A voz diz "outside the census district" (words.json 243,1–244,8 s). Já tinha veredito: VP-A-104. | https://www2.census.gov/geo/tiger/TIGER2020/COUSUB/tl_2020_06_cousub.zip |
| [149] | s30 | `Coast redwood, Big Sur` → `Coast redwood` | confirmada | conferencia-midia.json 470095dc › candidatos[43] (s30, aprovado), casado pelo sha256 86d7cc28…: "Coast Redwood near Redwood Deck Loop, Pfeiffer Big Sur State Park, CA". Relido hoje: "a large Coast Redwood tree (Sequoia sempervirens)". O rótulo nomeia a espécie e nenhum lugar (VP-B-075). | https://commons.wikimedia.org/wiki/File:Coast_Redwood_near_Redwood_Deck_Loop,_Pfeiffer_Big_Sur_State_Park,_CA_-_July_2023.jpg |
| [152] | s30 | `Lime kilns, Big Sur` → `Lime kilns` | confirmada | conferencia-midia.json 470095dc › candidatos[20] (s30, aprovado), casado pelo sha256 9536b673…: "Four Lime Kilns, 63025 Highway 1, Big Sur, Monterey County, CA (HABS CA-2734)". O rótulo não nomeia parque (RG-10; VP-B-071). Na página de hoje, "Limekiln State Park" só aparece na categoria do Commons, nem no título nem no resumo. | https://commons.wikimedia.org/wiki/File:Perspective_view_of_kilns_-_1_and_-2_from_north-east_(replication_of_historic_view)._-_Four_Lime_Kilns,_63025_Highway_1,_Big_Sur,_Monterey_County,_CA_HABS_CA-2734-10.tif |
| [157] | s31 | `BIG SUR COAST · 1986 PLAN` → `1986 PLAN AREA` | confirmada | O mesmo polígono e a mesma fonte da [77] (VP-A-268; o plano diz "the planning area" e "the Plan area"). A voz diz: "it's a count for the whole coast, not just the census district". O dono do número está na cota da cena (VT-157). | https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm |
| [227] | s42 | `Coast near Big Sur, California` → `Near Big Sur` | confirmada | conferencia-midia.json 470095dc › candidatos[45] (s42, aprovado), casado pelo sha256 e3beee1c…: "central California's coastline near Big Sur, California" (legenda) e "BIG SUR, CALIFORNIA, US" (local). A página de hoje diz o mesmo. O rótulo é a palavra da origem e não passa dela (VP-B-058, VT-228). | https://www.dvidshub.net/video/1019795 |
| [228] | s42 | `Big Sur coast, California` → `Big Sur coast` | nada a checar | _vai_a_tela false (o caminho "sem_caca_2", a foto de Iliff); a s42.html só cita a forma num comentário (l. 50). Se o caminho voltar, a forma fica dentro do candidatos[46] (título "Big Sur"). | https://commons.wikimedia.org/wiki/File:Central_Californian_Coastline,_Big_Sur_-_May_2013.jpg |
| [270] | s48 | `Big Sur coast, California` → `Big Sur coast` | confirmada | conferencia-midia.json 470095dc › candidatos[58] (s48, lote 4, aprovado, mesmo_item true), casado pelo sha256: "Scenic coastal drive along California's Big Sur coastline". Relido hoje: o mesmo. Já tinha veredito: VT-271, que previa esta forma curta. | https://app.envato.com/search/stock-video/39739042-fb1d-44c3-9dc8-1cbaf425e00c |
| [271] | s48 | `Regent’s Slide, Highway 1` → `Regent’s Slide` | confirmada | conferencia-midia.json 470095dc › candidatos[28] (s48, aprovado), casado pelo sha256 0762aa51…: "Regent's Slide" (alt "Photo showing extent of Regent's Slide", relido hoje). O rótulo é igual à origem (VP-B-084). | https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery |
| [285] | s50 | `Highway 1, Big Sur` → `Highway 1` | confirmada | conferencia-midia.json 470095dc › candidatos[29] (s50, aprovado), casado pelo sha256 627a5b08…: "Highway 1 in Big Sur" (alt "…the newly re-opened highway 1 in Big Sur", relido hoje). O rótulo é menos específico que a origem (VP-B-087). | https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery |
| [288] | s50 | `Regent’s Slide, Highway 1` → `Regent’s Slide` | confirmada | conferencia-midia.json 470095dc › candidatos[30] (s50, aprovado), casado pelo sha256 8ad9cfa2…: "Highway 1 next to Regent's Slide" (alt relido hoje). A origem nomeia o deslizamento, e o o_que_viu do veredito o mostra (a encosta de terra nua à direita). O rótulo fica no mesmo nível e é o mesmo da s48 (VP-B-090). | https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery |
| [307] | s53 | `Timber Fire, near Big Sur` → `Timber Fire` | confirmada | conferencia-midia.json 470095dc › candidatos[34] (s53, aprovado), casado pelo sha256 cf17fd4f…: título "Timber Fire Operations"; "suppression operations on the Timber Fire near Big Sur". Relidos hoje o título e o local (BIG SUR, CALIFORNIA, US). O rótulo nomeia o fogo que a origem nomeia (VP-B-093). | https://www.dvidshub.net/video/1019831 |
| [334] | s57 | `Highway 1, Big Sur` → `Highway 1` | confirmada | conferencia-midia.json 470095dc › candidatos[59] (s57, lote 4, aprovado, mesmo_item true), casado pelo sha256: "Aerial View of Scenic Big Sur Coastline and Bixby Creek Bridge"; "vehicles … along the road". No o_que_viu do veredito, "a estrada sai da ponte de Bixby". A ponte de Bixby leva a SR 1 (o Commons: "along California State Route 1"; a Wikipedia, Bixby Bridge: "Carries SR 1"). As etiquetas do item, relidas hoje, dizem "Pacific coast highway". | https://commons.wikimedia.org/wiki/File:View_toward_Bixby_Creek_Bridge_from_Hurricane_Point_Vista_Point_02.jpg |
| [341] | s57 | `View from Hurricane Point, Big Sur` → `From Hurricane Point` | confirmada | conferencia-midia.json 470095dc › candidatos[51] (s57, aprovado), casado pelo sha256 a93bb924…: "Hurricane Point Vista Point, Big Sur, looking toward Bixby Creek Bridge". Relido hoje: "Looking toward Bixby Creek Bridge from Hurricane Point Vista Point along California State Route 1 in Big Sur." O "From" guarda o ponto de vista, e a grafia é a do VP-A-284 (VT-342). | https://commons.wikimedia.org/wiki/File:View_toward_Bixby_Creek_Bridge_from_Hurricane_Point_Vista_Point_02.jpg |

O que a tabela não mostra:
- Nos 20 que vão à tela, nenhum rótulo é mais específico que o `lugar_na_origem` (midia §2.7): encurtar só tirou lugar.
- Os sete clipes da caça (s05, s12, s18, s20, s21, s48 e s57 [334]) foram julgados aqui contra o veredito do clipe que a cena cita hoje.
- Todas as formas novas têm até 3 palavras (identidade §4.1).

## O `corrigir`, com o conserto

**[96] · s20 · `Near Big Sur` → `Big Sur coast`** · [LEVE] · DIVERGE em rótulo periférico.
- **A divergência:** a s20 cita `_media/footage/s20/big-sur-falesias-enseada-aerea.mp4`, o clipe da caça (envato 04f8f43b). O veredito
  que casa com ele, `candidatos[55]` (s20, lote 4, aprovado, `mesmo_item: true`), dá:
  - o título "Beautiful Aerial View of Big Sur Coastline";
  - a descrição "An aerial shot captures a gorgeous cove nestled among the rugged cliffs of Big Sur, California".
  A página de hoje diz o mesmo. A origem põe a enseada *em* Big Sur, e o `o_que_viu` do conferente acha que é a de McWay, que fica dentro
  de Big Sur. "Near Big Sur" não passa da origem em especificidade, mas diz o que ela não diz: que o lugar fica perto, isto é, fora. O
  espectador lê "isto não é Big Sur" no meio de uma frase sobre a costa de Big Sur ("Much of the shoreline is sheer cliff, and beaches are few").
- **O conserto:** `Big Sur coast`.
  - O redator troca o `texto` da [96] e atualiza a `nota`, que ainda cita o VP-B-058 do DVIDS e diz "Big Sur coast diria mais que a origem".
    Isso valia para o vídeo do DVIDS e não vale para o clipe.
  - A Arte troca o `#rLugar` da s20.html, l. 90. A cena já está no lote dela (instrução [27]), e não há render a mais.
  - A largura cabe: ≈ 863 px de pílula, contra ≈ 813 de "Near Big Sur" (`t4/medir.txt` do redator).
- **De onde vem a forma:** é a da tabela do Lucas (`rotulos-longos.md`, 1ª linha: "Big Sur coast, California" → "Big Sur coast"), a mesma
  da s05, da s18 e da s48. Ela casa letra a letra com o título da origem ("Big Sur Coastline"), e não é forma nova. Cabe à Sala dizer se
  conta ao Lucas numa linha: a linha "Near Big Sur" da tabela dizia "a origem diz near Big Sur", e isso vale para a s42, não para a s20.
- **RAIZ: PONTUAL.** A nota da [96] e a linha da tabela vinham do VP-B-058, o veredito do DVIDS, que saiu da s20 com a caça. O laudo da
  texto-3 deu o VT-097 como "só anotação da caça" contra o `candidatos[10]`, e não contra o `candidatos[55]`. O mesmo "near" já estava
  na forma longa ("Coast near Big Sur, California") desde a caça: o T8 não criou o defeito, só o deixou à vista.

## Os casos que o pedido mandou olhar

1. **s20 [96]:** é o `corrigir` acima.
2. **s42 [227] `Near Big Sur`, sobre o DVIDS 1019795: confirmada.**
   - O veredito que casa (`candidatos[45]`) dá "central California's coastline near Big Sur, California" (legenda) e o local "BIG SUR,
     CALIFORNIA, US". A página de hoje diz o mesmo.
   - Uma nuance, sem conserto: na legenda, o "near Big Sur" se liga ao "Timber Fire" ("…during the Timber Fire near Big Sur"), e o local
     da página diz Big Sur.
   - "Near Big Sur" é a palavra da própria origem e não passa dela. Esta forma já estava na tabela do Lucas.
3. **s21 [99] e s57 [334] `Highway 1`: confirmadas.**
   - Na s21, o título e a descrição dizem "coastal highway … along the Big Sur coastline". As etiquetas do item, relidas hoje, dizem
     "Highway 1" e "Hwy 1". O plano de 1986 chama a Highway 1 de "the sole transportation and emergency route up and down the coast". A
     voz diz "Mostly, that means Highway 1" no mesmo instante.
   - Na s57, a origem nomeia a ponte de Bixby, e o `o_que_viu` diz que "a estrada sai da ponte de Bixby". A ponte leva a SR 1: o Commons
     diz "along California State Route 1", e a Wikipedia, "Carries SR 1". As etiquetas dizem "Pacific coast highway".
   - Nos dois casos, o rótulo dá nome ao mesmo referente, sem diminuir o lugar (a decisão da Sala para a s12 e a s57,
     `sala-decisoes-qualidade-1.md` §4). O T8 tirou o "Big Sur", a parte que a origem diz por extenso, e o rótulo ficou menos específico.
   - As etiquetas são do autor e têm ruído: o item da s21 também marca "Bixby bridge" e "Rocky creek bridge". Por isso elas reforçam, mas
     não sustentam sozinhas, e a identificação se apoia no plano.
4. **Os rótulos de mapa e de dado:**
   - **[55] `BIG SUR CCD`:** é o nome oficial (GEOID 0605390235). "Monterey County" sai do rótulo, e a voz o diz no mesmo instante.
   - **[134] `OUTSIDE THE DISTRICT`:** Mud Creek fica fora do Big Sur CCD (no San Ardo CCD) e **dentro** da área do plano de 1986
     (`pip.py`). Só por isso o "census" fazia falta. Em 15,9 s, porém, o tracejado do plano já saiu (9,133 + 0,3 s), o único distrito na
     tela é o ccd-big-sur, que sobe de 30 % a 70 % quando o rótulo entra, e a voz diz "outside the census district". O "THE DISTRICT" não
     se lê como a área do plano. É a condição que vai à Sala (abaixo).
   - **[77] e [157] `1986 PLAN AREA`:** os dois ficam sobre o `costa-do-plano-1986`, "a área do plano de 1986, DERIVADA e declarada"
     (IoU 0,988 com a camada do condado; VP-A-268). O plano chama essa área de "the planning area" e "the Plan area". Na s15 e na s31,
     o dono vem antes, na cota "MONTEREY COUNTY PLAN (1986)".
   - **[307] `Timber Fire`:** o título da origem é "Timber Fire Operations".
   - **[149] `Coast redwood` e [152] `Lime kilns`:** as duas nomeiam o objeto, nenhuma o lugar. A [152] continua sem parque (RG-10). A
     página do HABS tem "Limekiln State Park" só como categoria do Commons.
   - **[271] e [288] `Regent’s Slide`:** na s48, o rótulo é igual à origem. Na s50, a origem diz "Highway 1 next to Regent's Slide", e o
     veredito mostra a encosta do deslizamento na foto.
   - **[285] `Highway 1`:** a origem diz "highway 1 in Big Sur".
5. **Os ambíguos:** nenhum além do [96]. `Highway 1` sozinho não se confunde com outro lugar: a voz e as cenas vizinhas estão em Big Sur.
   `From Hurricane Point` lê-se como o ponto de vista, e é o que a origem diz.

## PARA A SALA

1. **O [96], s20:** `Near Big Sur` → `Big Sur coast`. A troca vai ao redator (o texto e a nota) e à Arte (s20.html l. 90, no lote que já
   existe). A forma é da tabela do Lucas, e cabe à Sala dizer se conta a ele numa linha.
2. **O laudo da texto-3 julgou rótulos contra o veredito errado** (lacuna de cobertura, já fechada aqui para as formas novas).
   - Os VT-023, VT-051, VT-080, VT-097, VT-100 e VT-335 saíram "só anotação da caça" contra os vereditos do fallback: `candidatos[2]`
     (Iliff), `[4]`, `[41]` e `[48]` (Fred Moore), `[40]` (Iliff) e `[10]` (DVIDS).
   - As cenas citam os clipes da caça: `candidatos[53]`, `[54]`, `[61]`, `[55]`, `[56]` e `[59]`. Só o [270] tinha sido julgado contra o
     clipe (VT-271).
   - Este laudo julga os seis contra os vereditos certos, e é assim que o [96] apareceu. Não há outro defeito nesses seis.
3. **As notas velhas do `textos-tela.json`**, sem efeito na tela, ficam para o redator, numa linha cada:
   - a nota da [22] e a da [79] citam o VP-B-043 (a foto de Iliff);
   - a da [96] cita o VP-B-058 (o DVIDS);
   - a da [99] e a da [334] falam da "foto de Fred Moore" (a [334] fala também de Ragged Point e do "fora do distrito").
   O campo `_caca_1` de cada uma já tem o veredito certo. A esses se soma o motivo velho do `nao_vai_para_tela` [14] (relato do redator,
   §8.3).
4. **A condição da s25 [134], para a Arte e o `qc-visual`:** o `OUTSIDE THE DISTRICT` só vale enquanto o tracejado do plano estiver fora da
   tela em 15,9–20,6 s. Mud Creek fica dentro da área do plano, e com o tracejado à vista o rótulo poderia ser lido como "fora do plano".
   Na reforma da s25 (as duas linhas do relato §3), o `saem` da l. 169 não deve passar de 15,9 s.
5. **Um 403 não contornado:** a página do Motion Array (s18 [79], https://motionarray.com/stock-video/big-sur-coastline-914470/) recusou a
   leitura de hoje. O veredito vem do conferente, com o título que a caça leu, e não muda. Se a Sala quiser a releitura, é pelo navegador
   do app.
6. **DECISÃO DO LUCAS PENDENTE:** nenhuma toca este laudo. O L1 está aplicado, e a forma do conserto é da tabela dele.

## A lista de nomes

Nenhum anônimo: os 22 textos são rótulos de lugar ou de objeto, e nenhum atribui fala ou número a alguém.

## Os 2 padrões mais vistos

1. **O veredito que sobrevive à troca da mídia.** A caça trocou o arquivo da cena, a nota continuou citando o veredito do fallback, e as
   rodadas seguintes conferiram a nota em vez do arquivo. O casamento pelo sha256 do que a cena cita (`casar2.py`) pegou o caso.
2. **A palavra de uma fonte que passa a outra.** O "near" do DVIDS foi para o clipe da s20. Encurtar, desta vez, só tirou lugar, e por
   isso o resto ficou limpo.

## As provas (em `out/big-sur/_tmp/vf-bs-E/`)

- `diff.py` → `diff.txt`: os 22, campo a campo.
- `entradas.py` → `entradas.txt`: as 22 entradas de hoje, inteiras.
- `casar2.py` → `casar2.txt`: os arquivos citados pelas 12 cenas e o veredito de cada um.
- `antigos.py` → `antigos.txt`: os vereditos que o laudo da texto-3 citou.
- `pip.py` → `pip.txt`: Mud Creek contra o distrito e a área do plano.
- `voz_s25.py` → `voz.txt`: a voz sob cada rótulo.
- `plano_grep.py` → `plano_grep.txt`: o plano de 1986 (cópia local do govinfo), com "planning area", "Plan area" e "sole transportation".
- `itens.tsv` e `gravar_json.py` → `laudo-rotulos.json`: os 22 itens. O script confere o antes e o depois de cada um contra os dois
  arquivos.
- O que foi relido hoje pela rede: DVIDS 1019795 e 1019831; os Commons de Joe Mabel, de Aligata e do HABS; a galeria da Caltrans; os
  itens Envato 1f008962, 4c7608ca, 04f8f43b, e1ae4a55, 39739042 e c4f9a13e; e a Wikipedia, Bixby Bridge (https://en.wikipedia.org/wiki/Bixby_Bridge).
  O Motion Array 914470 deu 403.

NOTA: 9/10

VEREDITO: RESSALVA

## Reconferência (06/11/2026, 02:3x de Brasília): só o [96], s20

- **O objeto:** `out/big-sur/textos-tela.json` `d6e578108630635fc847e7e6355bd8be0beb23eef29e7bfd127eb999261508d8`, contra o que este laudo
  julgou acima, `59ab5f9f…`, guardado em `out/big-sur/_tmp/redator/t4-antes/textos-tela.59ab5f9f.json`.
- **O que mudou** (por script: `reconf.py` → `reconf.txt`, que compara todas as chaves do arquivo):
  - em `_textos_por_cena`, só a [96], no `texto` e na `nota`, com o t0 e o t1 iguais (0,167–3,8);
  - no topo, só o `_quem`, o `_entradas_sha256`, o `_regras_de_serie` [3], o `_instrucoes_para_a_arte` [27], o `glossario` [19] e o
    `_consertos_texto_4`.
  - É o que o setor disse.
- **[96] s20 `Big Sur coast`: CONFIRMADA.**
  - O veredito do clipe da caça é o `candidatos[55]` (s20, lote 4, aprovado, `mesmo_item: true`), casado pelo sha256 com
    `_media/footage/s20/big-sur-falesias-enseada-aerea.mp4`.
  - Ele dá "Beautiful Aerial View of Big Sur Coastline" e "the rugged cliffs of Big Sur, California", o que a página
    (https://app.envato.com/search/stock-video/04f8f43b-d0ca-4366-9ccc-8c4f31e2e459) dizia na releitura de hoje.
  - O rótulo diz o mesmo que a origem, sem lugar mais específico (midia §2.7), e é a forma da tabela do Lucas.
- **O glossário [19] e a regra de série [3]:** "Big Sur coast" na s05, s18, s20, s42 e s48, e "Near Big Sur" só na s42.
  - Nenhum veredito desmente isso. As quatro que vão à tela são confirmadas ([22], [79], [96], [270]).
  - A "s42" de "Big Sur coast" é a [228], que não vai à tela: o fallback `sem_caca_2`, dentro do `candidatos[46]`, cujo título é "Big
    Sur". O arquivo de antes também a listava.
  - "Near Big Sur" na s42 é a [227], confirmada sobre o DVIDS.
  - A instrução [27] diz "s20 l. 90 (#rLugar: "Big Sur coast")". É o conserto pedido.
- **Sem efeito na tela, para o redator (LEVE):**
  - a `nota` da [96] ainda começa pela frase velha ("lugar_na_origem … (VP-B-058): "Big Sur coast" diria mais que a origem"), e o
    conserto acrescentado a corrige logo depois;
  - o `_caca_1` da [96] ainda termina em ""Coast near Big Sur" fica".
- **Ainda falta a Arte:** a s20.html, l. 90, ainda diz "Coast near Big Sur, California". Ela muda no lote da Arte, como a instrução [27] manda,
  e quem confere na cena é o `qc-visual`.
- **A contagem final:** 22 de 22, com 20 confirmados, 0 `corrigir`, 0 `nao_conferida` e 2 nada a checar ([42] e [228]). Nenhuma
  afirmação diverge da fonte.

NOTA: 10/10

VEREDITO: PASS
