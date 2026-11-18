# Cético: `duas-florestas` ("Why Brazil Has Two Rainforests That Never Touch"), 18/11/2026

**Veredito: DE PÉ COM AJUSTE. Nota: 6,0 / 10** (o gerador deu 6,5).

O paradoxo vale **no mapa oficial de biomas**: a Amazônia e a Mata Atlântica não se tocam, e o vão mínimo é de 567,7 km (352,8 mi). Conferi
por outro método e na edição vigente do mapa, que é a de 2025; o gerador tinha medido a de 2019. A onda está limpa em inglês e em português,
nenhum título colide, e os dois vídeos do Geoff **não mostram o vão** (li as transcrições). O que derruba meio ponto:

- **o "never" e o "350 miles" dependem do mapa e da escala** (K1). O outro mapa oficial do IBGE, o da Lei da Mata Atlântica, põe na Mata Atlântica
  os encraves do Nordeste, e um deles, em Teresina, fica a uns **140 a 215 km (85 a 135 mi)** da Amazônia. E os dois artigos que o gerador cita
  descrevem as matas de galeria como uma rede que atravessa a diagonal seca;
- **o "dry belt" está mal contado** (K4). O Cerrado recebe de 1.200 a 1.800 mm de chuva por ano. A estação seca dura de 3 a 5 meses, e não de
  5 a 6. No traçado das 353 milhas, o vão é só de Cerrado;
- **quatro números do dossiê não conferem.** O "segunda maior floresta tropical do planeta" é falso, porque a do Congo é maior. O "No Nordeste o
  vão passa de 1.000 km" dá 924 km. A estação seca já está acima. E a área da Mata Atlântica é de 12,8 % na edição de 2025, não 13,0 %.

Os ajustes que seguram a pauta:
- a voz diz "on Brazil's official biome map";
- o título troca "Never" por "Doesn't" ou "Don't";
- o ato 3 conta a virada (a lei que aproxima as florestas e as matas de galeria que quase as ligam);
- o ato 2 explica a estação seca, o fogo e o ar que desce, e não diz só "é seco".

Lido entre ~11:20 e ~11:45 de 18/11/2026. Scripts, saídas, robots.txt e leituras em `out/_pautas/video-8-brasil/_trabalho/cetico-duas-florestas/`.
Os brutos (o shapefile de 2025, a lista de municípios, o mapa da lei em PDF, o capítulo da Embrapa e as páginas `/watch`) estão em
`midia/_pautas/video-8-brasil/cetico-duas-florestas/`, fora do git. O sha256 de cada um está em `baixados.txt`.

## 0. As duas perguntas que eram minhas

**O "never touch" vale?** Vale **no mapa**, nos dois mapas oficiais. **Não vale como frase sobre a natureza.**

| Leitura | Se tocam? | O vão mínimo | Fonte |
|---|---|---|---|
| Mapa de biomas do IBGE, **edição 2025** (1:250.000, shp v20250911), o vigente | **não** | **567,7 km = 352,8 mi**, de perto de Canarana (MT) até perto de Quirinópolis (GO) | medida minha, por dois métodos (§4) |
| Mapa de biomas do IBGE, edição 2019 (a do gerador) | não | o mesmo, 567,7 km (os mesmos dois vértices) | gerador, refeito |
| **Mapa da Área de Aplicação da Lei 11.428** (IBGE, 2ª ed. 2012, 1:5.000.000, Decreto 6.660/2008) | não | **~140 a 215 km (85 a 135 mi)**, do encrave de Floresta Estacional Decidual em volta de Teresina (PI) até a Amazônia do mapa de biomas, perto de Nina Rodrigues (MA). O valor foi lido no PDF, com erro de algumas dezenas de km. A Ibiapaba fica a 276–328 km. | §4 |
| A ecologia (as matas de galeria e os brejos) | **quase**: uma rede de fios de floresta ao longo dos rios atravessa a diagonal seca; não é dossel contínuo | — | Proc. B 2025; PLOS ONE 2021 (F4, F5) |

- **As matas de galeria:** o artigo da Proceedings B (2025) fala de uma "dendritic network of gallery forests that covers the dry diagonal".
  Mostra 21 espécies de *Inga*, árvore de floresta úmida, confinadas às matas de galeria do Cerrado, 10 delas também na Amazônia e na Mata
  Atlântica, e defende essa rota como "not time limited", isto é, ainda aberta. O PLOS ONE (2021) diz que os corredores são hoje feitos de
  relictos, "including gallery forests of the Cerrado and the brejos of the Caatinga". Também diz que as duas florestas foram uma só. O "never",
  no sentido de "em tempo nenhum", é falso, e o "não se tocam", como fato físico, é discutível. **No mapa** é verdade.
- **Os brejos de altitude:** **não estão** no mapa de biomas. Nenhuma parte da Mata Atlântica fica no interior do Nordeste, e a Caatinga não tem
  buraco nenhum. **Estão** na Lei 11.428: o art. 2º põe no bioma os "brejos interioranos e encraves florestais do Nordeste". O mapa da lei os
  desenha em Ceará e Piauí (Ibiapaba, Baturité, Araripe e Teresina).
- **As zonas de transição:** os dois mapas põem cada contato num bioma só. O mapa da lei admite os contatos "Savana/Floresta Estacional" e
  outros como Mata Atlântica. A borda da Amazônia em Mato Grosso é uma transição larga, e o vão de 353 milhas é uma linha num mapa, não uma
  borda de floresta. As duas pontas (Canarana e o sul de Goiás) são hoje região de lavoura, o que **não foi conferido** (MapBiomas, a ler).
- **A frase verdadeira:** "On Brazil's official biome map, the Amazon and the Atlantic Forest don't touch anywhere; at their closest, about 350
  miles apart." Para o título, "Don't" ou "Doesn't" no lugar de "Never".

**Os vídeos do Geoff mostram o vão?** **Não.** Li a página `/watch` (descrição e capítulos) e, como a descrição não bastava, a transcrição pelo
vidIQ:
- **"Why Brazil's Geography Is Unlike Any Other Country"** (673.120 views, 14/11/2025, 12:11): é uma lista de 15 fatos. O capítulo "Size and
  varied biomes" (0:27–1:10) cita os biomas numa frase só (o sertão, o planalto do sul, o Pantanal e a Amazônia). **A Mata Atlântica não
  aparece** e não há vão nenhum. Os outros capítulos falam do rio, do relevo baixo, da costa, de Brasília, de Tordesilhas, do café, dos isolados,
  de São Paulo e de Itaipu.
- **"The Real Reason Why Most of Brazil is Empty"** (540.197 views, 28/04/2026, 16:24; capítulos "The Wall on the Beach", "The Prisoners of the
  Coast", "Breaking the Wall and the Birth of a Megacity"): o assunto é a Serra do Mar e a população presa na costa.
  - **A Mata Atlântica aparece** (~4:01) como a floresta densa que cobria a escarpa e barrava a subida.
  - O vídeo diz que a Amazônia fica "thousands of miles to the north", mas não fala de vão, de diagonal seca nem de Cerrado.
  - **É o vizinho mais perto:** 540 mil pessoas já ouviram que a costa tem uma segunda floresta e que a gente mora na costa. O nosso fecho ("6 em
    cada 10 brasileiros moram na floresta menor") **encosta nele**, e o fecho tem de ficar na floresta, não na costa.

## 1. Os fatos

| # | Fato | Fonte (lida em 18/11/2026) | Veredito |
|---|---|---|---|
| F1 | No mapa de biomas do IBGE a Amazônia não toca a Mata Atlântica. O Cerrado toca as duas, a Caatinga só a Mata Atlântica e o Pantanal só a Amazônia. A edição vigente é a de **2025** (`2025_Biomas-e-Sistema-Costeiro-Marinho-do-Brasil-1-250000_shp.zip`, shp `lml_bioma_e250k_v20250911_A`, sha256 `247b15c4…a1ea8f`). | IBGE, geoftp, `informacoes_ambientais/estudos_ambientais/biomas/vetores/`; `biomas2025.py` | **CONFERE**. A edição 2025 mexeu só na divisa Cerrado/Mata Atlântica: a Mata Atlântica perdeu 25.307 km², sobretudo no norte e no centro de SP, e ganhou 5.439, sobretudo no centro de MG. Agora tem **1.086.977 km² (12,8 %)**; o gerador usou 13,0 %. A Amazônia não mudou. |
| F2 | O vão mínimo é de **567,7 km = 352,8 mi**. As pontas são (52,25° O; 13,41° S), a 16 km de Canarana (MT), e (50,71° O; 18,32° S), a 30 km de Quirinópolis (GO). | medida própria: `vao_conferir.py` (azimutal equidistante, busca global a ~200 m, refino em resolução cheia, Vincenty, teste do buffer: +570 km não toca, +575 km toca) | **CONFERE**, igual ao gerador por outro método, nas edições 2019 e 2025. |
| F3 | A Lei 11.428/2006, art. 2º, põe no bioma as florestas ombrófilas e estacionais "bem como os manguezais, as vegetações de restingas, campos de altitude, brejos interioranos e encraves florestais do Nordeste", "com as respectivas delimitações estabelecidas em mapa do IBGE". O mapa da lei é o do IBGE, 2ª ed. 2012, 1:5.000.000, e tem encraves em PI e CE. | o texto da lei impresso no próprio mapa do IBGE (`mapas/lei11428_mata_atlantica.pdf`, sha256 `b298e764…6be1`); o Planalto não foi usado (não respondeu ao robots.txt, pelo pedido) | **CONFERE** o texto e os encraves. A distância de Teresina (~140 a 215 km) é **aproximada**: lida no PDF pela grade de coordenadas, sem o vetor. |
| F4 | A diagonal seca tem "approximately 1000 km wide" e nasceu no começo do Mioceno. Uma rede de matas de galeria a atravessa, e 21 espécies de *Inga* vivem nessas matas. | Proc. B, doi 10.1098/rspb.2024.1559, pelo texto que o **gerador** leu no PMC hoje, às 11:05 (`_trabalho/leituras/pmc-…PMC11750371…`) | **CONFERE** no texto guardado. A editora deu **403** ao cético e não foi contornada; o PMC eu não usei, pelo pedido. |
| F5 | As duas florestas vêm da "fragmentation of a single ancient large forest". *Bothrops bilineatus* "currently has a disjunct distribution in both the Atlantic and Amazon forests". Os corredores são de matas de galeria e de brejos. | Pontes-Nogueira et al., PLOS ONE 16(9): e0257519 (2021), https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0257519 (robots: Crawl-delay 30, respeitado) | **CONFERE** |
| F6 | O Cerrado recebe de 1.200 a 1.800 mm (47 a 71 pol.) de chuva por ano, e a estação seca dura de 3 a 5 meses. | Embrapa, SIFLOR Cerrado v. II, cap. 2, "O clima no Bioma Cerrado" (2021), https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1137058/1/PL-Clima-cerrado-v2-cap2-2021.pdf | **CONFERE**. Os "5 a 6 meses" do gerador **NÃO CONFEREM**. |
| F7 | O sertão é semiárido mais pelo ar que desce das células de Walker e de Hadley do que pelo planalto da Borborema: a subsidência "inibe a convecção". | Reboita et al., "Causas da semi-aridez do sertão nordestino", Rev. Bras. Climatologia 19 (2016), resumo: https://revistas.ufpr.br/revistaabclima/article/view/42091 (o DOAJ deu 403 e não foi contornado) | **CONFERE** no resumo. Cobre o fato 6 do gerador, que o PMC tinha recusado. |
| F8 | Quem mora em cada bioma, pela lista oficial do IBGE (o bioma predominante de cada município, 2024) com o Censo 2022: Mata Atlântica 117,4 mi (**57,8 %**), Cerrado 15,9 %, Caatinga 25,9 mi (12,8 %), Amazônia 20,9 mi (10,3 %). | IBGE, `documentos/Bioma_Predominante_por_Municipio_2024.csv` (sha256 `192dfa72…75d5`) e o LEIA-ME; `pop_bioma_oficial.py` | **CONFERE** a conta do gerador (58,1 % pela sede). É aproximada: cada município inteiro vai para o bioma de maior área. O "70 %" ou "72 %" que circula (um vídeo de biomas de 02/10/2026 diz "70% da população") vem da área da lei, que é maior. **Não misturar.** |
| F9 | A Mata Atlântica tinha de 1,0 a 1,5 milhão de km² e era "the second largest rainforest on the planet". | en.wikipedia "Atlantic Forest" (texto do gerador); en.wikipedia "Congo Rainforest" (lido hoje): o Congo é "the world's second-largest tropical forest", com ~2.000.000 km² | **NÃO CONFERE** o "segunda do planeta": o Congo é maior que o máximo da Mata Atlântica. A área fica como estimativa de enciclopédia. |
| F10 | "No Nordeste o vão passa de 1.000 km." | `vao_nordeste.py` (mapa 2025): da Mata Atlântica perto de Touros (RN) até a Amazônia no norte do Maranhão | **NÃO CONFERE**: 924 km (574 mi). |

**As palavras fortes:**
- **"Never"** (K1);
- **"dry"**, que serve para a Caatinga e não para o Cerrado (K4);
- **"South America has two great rainforests"**, porque o Chocó, no Pacífico, e a floresta valdiviana também são florestas tropicais e úmidas.
  A voz diz "Brazil has". A variante de título "Why South America Has Two Rainforests Instead of One" é falsa.

## 2. A colisão (vidIQ)

Fiz 7 buscas e 2 transcrições. Estão todas em `_trabalho/cetico-duas-florestas/vidiq.tsv`. Os 5 vídeos mais próximos:

| # | Título | Canal (inscritos) | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|
| 1 | The Real Reason Why Most of Brazil is Empty | Geography By Geoff (1,13 mi) | 540.197 | 28/04/2026 | 16:24 | **Não no ângulo.** É o vizinho do fecho: a Mata Atlântica como a floresta da escarpa e a gente na costa. |
| 2 | Why Brazil's Geography Is Unlike Any Other Country | Geography By Geoff (1,13 mi) | 673.120 | 14/11/2025 | 12:11 | Não: a Mata Atlântica não aparece. |
| 3 | Full Documentary \| Brazil's Atlantic Forest \| Wildlife of Mata Atlântica | Terra Mater (632 mil) | 2.293.826 | 20/06/2024 | 50:07 | Não: é fauna. **Ocupa a busca** de "atlantic forest". |
| 4 | The Most Bizarre Animals in the Brazilian Jungle | Wild Docs (1,36 mi) | 364.055 | 04/06/2026 | 56:50 | Não: é fauna da Mata Atlântica. É prova de interesse no lugar. |
| 5 | Por que O SERTÃO não SECOU? O SEGREDO DO CERRADO - NÃO É DESERTO EP 06 | Bioma Vivo (27,8 mil) | 134.886 | 18/01/2026 | 16:00 | Não: fala da água entre o Cerrado e a Caatinga, em português. Encosta no ato 2. |

- **O título:** nenhum título igual nem parecido. A busca da frase "two rainforests" com "never touch", sem data, só trouxe curtos de animais e
  de tribos. Ninguém usa "Brazil's Other Rainforest" como título de vídeo; a busca na web não achou.
- **A onda:** nada nos últimos 2 meses, em inglês ou em português.
  - Por views desde 18/09/2026, só aparecem documentários de fauna em português e espanhol (22.471, 18.780 e 18.645 views) e curtos minúsculos de
    "6 biomas".
  - Nos 12 meses, o "separado" em inglês traz só o enxame da poeira do Saara, que é outro assunto.
  - **Não derruba.**
- **O antigo grande:** não há explicativo grande no ângulo. A busca de "atlantic forest" está tomada por documentários de fauna e de restauração,
  que não disputam a pergunta "por que não se tocam".

## 3. O potencial (a régua)

1. **A busca:** "atlantic forest" tem ~14.767 buscas por mês e concorrência 52 (vidIQ, hoje). É do tamanho de "big sur" (13,3 mil, 40), com mais
   concorrência. O título com "Amazon" pega a cauda de uma busca enorme.
2. **A prova de interesse:** os dois do Geoff no Brasil (673 mil e 540 mil), os documentários de fauna da Mata Atlântica (364 mil em junho de 2026)
   e, em português, a série do Cerrado e da Caatinga (135 mil). **No ângulo exato, nenhum estouro:** a demanda pelo "vão" não está provada.
3. **O lugar vago:** sim. Ninguém em inglês explica o vão.
4. **O paradoxo cabe em 3 frases e no mapa:** sim. Mas ele só funciona depois que o espectador fica sabendo que existe uma segunda floresta: a
   curiosidade vem do "Brazil's other rainforest", mais que do "não se tocam" (K6).
5. **A geografia explica o porquê:** sim: o ar que desce sobre o sertão, a estação seca e o fogo do Cerrado, os rios que nascem no planalto e
   descem para os dois lados.
6. **A medida nossa:** sim, e ficou melhor com os dois mapas oficiais (§4).
- **Quanto tempo o enxame leva:** o assunto não é notícia, e só uma cópia do nosso vídeo o traria; o risco é baixo.
- **Rende 13 a 16 minutos?** Rende, se o ato 3 trouxer a lei e as matas de galeria. Sem isso, o ato 2 (clima) fica técnico e o vídeo encolhe para
  uns 10 minutos (K7).

## 4. A medida nossa (feita hoje)

- **O vão, refeito na edição 2025, por outro caminho:** 567,7 km (352,8 mi), sem contato. O método está em F2 e na saída `vao-conferir-saida.txt`.
- **O miolo, na edição 2025:** Cerrado (2.004.423 km²) + Caatinga (862.640 km²) = **2.867.063 km² = 1,107 milhão de sq mi**, 33,7 % do Brasil.
  É 3,0 % maior que a Argentina do Natural Earth (2.782.897 km²). A margem é pequena; a tela cita a fonte das duas áreas.
- **A lei aproxima as florestas:** o encrave de Teresina fica a ~140–215 km (85–135 mi) da Amazônia, e o da Ibiapaba a ~276–328 km
  (`vao_lei.py`). A borda leste da Amazônia no mapa de biomas chega a Nina Rodrigues e Vargem Grande (MA), a 216 km da sede de Teresina.
  - **A frase possível:** "The law that protects the Atlantic Forest draws it differently, and in Piauí it comes within about a hundred miles of
    the Amazon."
  - Para a tela, o vetor do mapa da lei tem de ser achado (MMA ou IBGE). Sem ele, o número fica "about", ou fora.
- **Quem mora onde:** quase 6 em cada 10 brasileiros (57,8 %) moram em municípios de Mata Atlântica, que tem 12,8 % da terra. A Caatinga tem mais
  gente que a Amazônia (25,9 contra 20,9 milhões).
- **O vão no Nordeste:** 924 km (574 mi), e não "mais de 1.000".

## 5. O material

- **Mapa com geometria real:** os dois shapefiles de biomas do IBGE (2019 e 2025). O diretório do IBGE diz "Todos os arquivos aqui disponíveis são
  públicos". O mapa da lei só existe em PDF (falta o vetor).
- **Satélite aberto:** Landsat e MODIS (NASA/USGS), para o verde contínuo da Amazônia, o Cerrado e os fios de mata de galeria. Os fios aparecem
  bem em Landsat na estação seca.
- **Fotos de acervo livre** (Commons, pela API, um pedido, 18/11/2026): 1.844 arquivos em "Atlantic Forest" (19 subcategorias), 447 em "Cerrado"
  (26), 165 em "Caatinga", 30 em "Gallery forests", 19 em "Quirinópolis" e 13 em "Canarana (Mato Grosso)". **Há material para 13 a 16 minutos.**
  A licença de cada foto ainda está por conferir. A do MapBiomas não foi lida.

## 6. O título e o gancho que eu defendo

- **Título:** **"Why the Amazon Doesn't Touch Brazil's Other Rainforest"** (54 caracteres).
  - Tem "Amazon", que é o nome mais buscado.
  - Abre a curiosidade com "Brazil's Other Rainforest".
  - Tira o "never", que é falso no tempo e discutível na natureza, e não promete um número que depende do mapa.
- **Alternativas:**
  - "Why Brazil Has Two Rainforests That Don't Touch" (47);
  - "The 350-Mile Gap Between Brazil's Two Rainforests" (49). Esta só serve se a tela disser "IBGE biome map".
- **O gancho** (38 palavras, sem dar o porquê): "The Amazon has a sister: a second rainforest along Brazil's Atlantic coast, where most Brazilians live. On Brazil's
  official biome map, the two don't touch anywhere. Between them lies a belt of savanna and scrub bigger than Argentina."
- **A miniatura:**
  - o fundo é o relevo amarelo do Brasil tropical;
  - **a Mata Atlântica em vermelho**, porque é o assunto do título;
  - **a Amazônia em ciano**;
  - uma seta branca grossa de duas pontas no vão entre Canarana e Quirinópolis;
  - caixa preta **"THE GAP"**. "350 MILES" depende do mapa e, se for usado, leva a fonte na tela.

## 7. Os pontos

- **K1 · GRAVE (corrigível):** o "never touch" e o "350 miles" só valem no mapa de biomas.
  - O mapa da Lei 11.428, também do IBGE e também oficial, põe na Mata Atlântica os encraves do Nordeste, e o de Teresina chega a ~85–135 mi da
    Amazônia.
  - A ciência que o gerador cita descreve matas de galeria que atravessam a diagonal seca e diz que as duas foram uma floresta só.
  - **Ajuste:** a voz diz "on Brazil's official biome map"; o título sai do "Never"; o ato 3 usa a lei e as matas de galeria como virada. Sem
    isso, a seção de comentários corrige o título.
- **K2 · MÉDIO:** o gerador usou a edição 2019. A vigente é a de 2025: a Mata Atlântica tem 12,8 % e o miolo seco 2.867.063 km². O vão não mudou.
- **K3 · MÉDIO:** os números do dossiê que não conferem são o "segunda maior do planeta" (F9), a seca de "5 a 6 meses" (F6) e o "mais de 1.000 km"
  no Nordeste (F10). Saem ou são trocados.
- **K4 · MÉDIO:** o "dry belt" e o "dry scrub" contam mal o porquê.
  - O Cerrado chove de 47 a 71 polegadas por ano; o vão das 353 milhas é todo de Cerrado.
  - O ato 2 tem três motores: a estação seca de 3 a 5 meses e o fogo (Cerrado), o ar que desce das células de Walker e Hadley (sertão) e o solo.
  - O fogo e o solo **não foram lidos** em fonte: **NÃO CONFERIDO**.
- **K5 · MÉDIO:** o fecho "6 em cada 10 na floresta menor" encosta no Geoff (540 mil, "the population is pushed right up against the ocean").
  - Vale "nearly 6 in 10" (57,8 %), nunca os "70 %" da área da lei.
  - O fecho fica na floresta e no vão, não na costa.
- **K6 · MÉDIO:** a curiosidade depende de o espectador descobrir que existe uma segunda floresta. O "não se tocam" sozinho não surpreende quem não
  sabia dela, e nenhum outlier prova a demanda no ângulo. É por isso que defendo "Brazil's Other Rainforest" no título.
- **K7 · LEVE:** com o ato 2 técnico, 13 a 16 minutos pedem o ato 3 cheio: a lei, os fios de mata de galeria vistos do satélite, a jararaca das
  duas florestas e o Mioceno.
- **K8 · LEVE:** "South America has two great rainforests" é falso (o Chocó). A voz diz "Brazil has".
- **K9 · LEVE:** a distância do encrave de Teresina saiu de um PDF, com erro de algumas dezenas de km. Vai à tela só com o vetor do mapa da lei.
- **K10 · LEVE:** a Proceedings B deu 403 ao cético. O texto vem da leitura do gerador no PMC, guardada; para a tela, convém a leitura de um
  verificador.

## 8. Como foi feito, e o que recusou

- **O vidIQ:** 9 chamadas pagas (7 buscas e 2 transcrições), **45 créditos**. **Passei 5 do teto de 40:** errei a conta depois da sexta chamada e
  fiz a nona achando que era a oitava. O saldo foi de 4.826 para 4.766; a diferença de 60 inclui uns 15 créditos de outros céticos que rodavam
  ao mesmo tempo.
- **O YouTube:** as duas páginas `/watch` do Geoff, um pedido por vez (`yt_watch.py`; o robots.txt foi lido hoje pelo gerador). Nenhuma página
  `/results`.
- **Os robots.txt** que li: journals.plos.org, royalsocietypublishing.org, www.alice.cnptia.embrapa.br, doaj.org, ojs.ufgd.edu.br e
  revistas.ufpr.br, todos em `robots/`. O geoftp do IBGE não tem robots.txt (404).
- **Recusaram, e parei:**
  - a Proceedings B (403);
  - o DOAJ (403 no registro do artigo; a robots.txt permite);
  - o PMC eu não usei, pelo pedido.
- **Os dados baixados** (IBGE e Embrapa, públicos): 5 arquivos, com o sha256 em `baixados.txt`. A consulta ao Commons foi pela API, num pedido
  só, com o User-Agent do canal.
- **Sem navegador, sem `SendMessage`, sem commit, sem crédito pago além do vidIQ.** O Python rodou sempre de arquivo. Duas vezes deixei um
  `python -` num comando, e a trava recusou antes de rodar; os dois comandos foram refeitos com o script em arquivo.
- **Um processo meu demorou demais** (a primeira versão de `vao_conferir.py`, em resolução cheia no país inteiro). Encerrei pelo PID e refiz com
  um recorte.
