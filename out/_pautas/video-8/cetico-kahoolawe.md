# Cético: `kahoolawe` ("Why Kahoolawe Is the Hawaiian Island Nobody Can Live On"), 17/11/2026

**Veredito: DERRUBADO. Nota: 3,0 / 10.**

Os fatos de lei e de limpeza se seguram, mas o lugar vago que dava a nota 6,0 não existe:
- **O vídeo longo já foi feito, e o mesmo título saiu ontem.**
  - "This Forbidden Hawaiian Island is Quietly Coming Back to Life" (Park Vibes, 33,8 mil inscritos, 16/07/2026, **86.288 views**,
    16:09) conta a história inteira: as cabras de 1793, a colônia penal, as bombas, os Nove de 1976, George Helm, a limpeza "completa"
    com um quarto da ilha ainda perigoso.
  - "Why Nobody Is Allowed on the Hawaiian Island the Navy Bombed for 49 Years" (Restricted Earth, 62 inscritos, **16/11/2026**, 240
    views, 17:48) é o nosso título e o nosso ângulo, com capítulos "the bombs are still in the ground" e "the land itself was broken".
  - Por cima, "How Native Hawaiians fought the US Navy, and won" (Vox, **1.009.517 views**, 2021, 17:33) ocupa a busca pelo nome.
  - O `inabitavel.md` disse "nenhum explicador longo; nenhum em 2026". Estava errado: a busca da web não achou o que o vidIQ achou.
- **O nome quase não é buscado:** "kahoolawe" fica abaixo de 750 buscas por mês no vidIQ (volume 0, concorrência 39). O "big sur", que
  deu ao canal as views de pesquisa, tem 13,3 mil.
- **A nossa medida já está na tela de outro:** "less than 10 percent of the subsurface below four feet has been cleared" está num vídeo
  de 16/07/2026 (Hidden Hawaii). E o "um quarto ainda perigoso" está nos dois de cima.
- **A geografia não explica o "ninguém mora".** A ilha teve gente:
  - lavouras e santuários antes do contato, uma escola de missão (1825–1838), o exílio de condenados (1829–1853) e ranchos até 1941;
  - Lānaʻi, com chuva média parecida (21,8 contra 15,7 polegadas por ano, a nossa conta), tem 3.367 moradores.
  - O que impede morar hoje é a lei estadual (só quatro usos, "in perpetuity") e as bombas. O porquê é militar e legal, e isso já foi
    contado.

**O que sobra de nosso** é a chuva: na média de 1978–2007, Kahoʻolawe recebe ~16 polegadas por ano. O pico de Puʻu Kukui, a 24 milhas,
recebe 366, ou seja, 23 vezes mais (a grade aberta do Rainfall Atlas of Hawaiʻi, §4). E há a "ponte de nuvens" Nāulu, que a KIRC diz que
trazia chuva de Maui. É um ângulo de geografia que ninguém titulou, mas não salva a pauta: o nome continua sem busca, e a história
militar, que é o motor do vídeo, está tomada. Fica como nota de rodapé, não como reserva (§6).

Lido entre ~22:33 e ~22:50 de 17/11/2026 (hora de Brasília). Os scripts, as respostas e as saídas estão em
`out/_pautas/video-8/_trabalho/cetico-kahoolawe/`:
- `vidiq.tsv`: as 6 chamadas (30 créditos) e as linhas que importam;
- `watch.jsonl`: as 5 páginas `/watch` lidas, pelo `../yt_meta.py`;
- `chuva.py` e `chuva-saida.txt`: a chuva sobre Kahoʻolawe, Maui e Lānaʻi, e o corte NE → SW pelo Haleakalā;
- `medidas.py` e `medidas-saida.txt`: as frações da limpeza e da erosão sobre a área oficial, e a contagem dos títulos;
- `commons.py` e `commons-saida.txt`: as categorias do Commons (API, um pedido por vez, User-Agent do canal);
- `pdf_texto.py` e `fontes/`: os PDFs oficiais lidos (a cópia da KIRC do HRS cap. 6K, as tabelas 5.10 e 1.05 do Data Book do Havaí, a
  ficha do projeto Nāulu da KIRC) e o texto extraído deles, com o do ensaio da NPS.

A grade da chuva (`MauiNuiASCIIGrids_inches.zip`, 3,1 MB, sha256 `0c47d7db…e0ef`, e o anual extraído, 1,8 MB) ficou em
`midia/_pautas/video-8/cetico-kahoolawe/chuva/`, fora do git.

## 1. Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 17/11/2026) | Veredito |
|---|---|---|---|
| F1 | "After the attack on Pearl Harbor, the U.S. declares martial law, leading to the use of Kahoʻolawe as a bombing range." A NPS dá mais: a Marinha subarrendou do rancheiro em **maio de 1941** e já atirava antes de Pearl Harbor; no dia seguinte ao ataque, o controle passou à Marinha, e o fogo real seguiu "through October 22, 1990". | KIRC, History: https://kahoolawe.hawaii.gov/history.shtml; NPS, AAPI National Historic Landmarks Theme Study, ensaio 9, p. 194: https://www.nps.gov/articles/upload/09-Essay-9-Resistance-to-Imperialism.pdf | **CONFERE**. "From 1941 to 1990" vale; "50 years" é arredondado (são 49, como diz o título do Restricted Earth). |
| F2 | 1953: Eisenhower passa o título à Marinha "with the provision that it be returned in a condition suitable for habitation". | KIRC, History (a mesma) | **CONFERE na KIRC**. O texto da Ordem Executiva 10436 ficou **NÃO CONFERIDO**: a presidency.ucsb.edu deu 404 e depois 504; a cópia da UH (eVols) pediu verificação do Cloudflare, e parei. O Restricted Earth avisa que as fontes divergem na redação. O gancho não põe aspas nessa frase até a EO ser lida. |
| F3 | 1990, Bush manda parar as bombas; 1993, o Congresso "authorizes $400 million for ordnance removal"; 1994, a Marinha passa a escritura ao Estado; 2003, o controle do acesso volta ao Estado. | KIRC, History | **CONFERE** |
| F4 | A limpeza, ao fim (2004): "approximately 75% of the island is surface-cleared"; "10% of the island, or 2,647 acres, is additionally cleared to a depth of four feet"; "The remaining 25%, or 6,692 acres, is not cleared and remains unsafe for unescorted access." | KIRC, History | **CONFERE** como número da KIRC. Sobre a área oficial (F9), são **9,3 %** e **23,4 %**: a KIRC usa uma ilha de ~26.500 acres, e o Data Book, 28.544. Na tela: "fewer than 1 acre in 10" e "almost a quarter". |
| F5 | "Access is permitted only with authorization from KIRC for specific purposes such as restoration, education, and culture." "Unexploded ordnance hazards remain throughout the Kahoʻolawe Island Reserve, including in cleared areas", e no mar em volta. A reserva é a ilha e o mar "within two nautical miles of the shoreline". | KIRC, FAQ: https://www.kahoolawe.hawaii.gov/faq.shtml | **CONFERE**. A lei (F6) diz "two miles", sem "nautical": a divergência é da própria KIRC. |
| F6 | A lei: a reserva "shall be used solely and exclusively" para 4 fins (o exercício dos direitos tradicionais havaianos, a preservação dos sítios e do ambiente, a restauração, a educação); "The island shall be reserved in perpetuity for the uses enumerated in subsection (a). Commercial uses shall be strictly prohibited." Quem entra sem permissão comete "petty misdemeanor" (até US$ 1.000 ou 30 dias, por dia). | HRS §6K-3 e §6K-8, na cópia da KIRC (texto de 2013, PDF de 2017): https://www.kahoolawe.hawaii.gov/rules/CHAPTER%206K%202013.pdf | **CONFERE**. A moradia não está entre os usos: o "can't live" é verdade **por lei**. A versão vigente no site do Legislativo ficou **NÃO CONFERIDA**: o data.capitol.hawaii.gov recusou a conexão, e o capitol.hawaii.gov já tinha dado 403. A cópia anota que uma lei de 2014 "purports to amend this chapter". |
| F7 | A lei manda passar a ilha "to the sovereign native Hawaiian entity upon its recognition by the United States and the State of Hawaii". | HRS §6K-9, na mesma cópia | **CONFERE**. É o fato mais forte e menos contado, e também o mais delicado (K5). |
| F8 | Ninguém mora lá: na tabela dos censos de 1970 a 2020, Kahoʻolawe tem "-" em todas as colunas; Niʻihau, 84 em 2020. | Hawaii DBEDT, State of Hawaii Data Book 2023, tabela 1.05: https://files.hawaii.gov/dbedt/economic/databook/2023-individual/01/010523.pdf | **CONFERE**: é a única das oito ilhas principais sem morador. |
| F9 | A área: **44,6 mi²** (115,5 km²), a menor das oito. | Data Book 2020, tabela 5.10 (Censo 2010): https://files.hawaii.gov/dbedt/economic/databook/2020-individual/05/051020.pdf | **CONFERE**. A Wikipedia (44,97) e os números da KIRC (~41,6) divergem: usar o Data Book. |
| F10 | A chuva: a média anual (1978–2007) sobre a ilha é de **15,7 polegadas** (de 12,1 a 20,6). No plano de 1998, a KIRC escreve: "Approximately twenty-five inches of rain falls annually on Kahoʻolawe's summits, and less than ten inches along the coast." | Rainfall Atlas of Hawaiʻi (Giambelluca et al. 2013), grade de Maui Nui em polegadas: https://rainfall.geography.hawaii.edu/downloads; KIRC, plano de restauração (maio de 1998): https://kahoolawe.hawaii.gov/plans/restoration_plan.html | **CONFERE** na ordem de grandeza. Os números divergem nas pontas: a grade de 250 m suaviza o cume e a costa. Na tela, usar a grade, com o período. |
| F11 | A erosão: "An estimated 1,880,000 tons of soil continues to be lost each year" e "Severely eroded landscapes now cover approximately one-third of the island" (1998). Hoje: "Only about 820 acres of the 12,800 most severely eroded acres can currently be replanted"; "As of 2026, more than 450,000 native plants have been reintroduced." | KIRC, plano de 1998 (o mesmo); KIRC, Core Programs: https://www.kahoolawe.hawaii.gov/coreprograms.shtml | **CONFERE**. A frase "six to ten feet of soil" é da Environment Hawaiʻi (2003), um jornal, e os "over 15 feet" de um boletim da KIRC só apareceram na busca: **NÃO CONFERIDO** em fonte primária. O relatório da USGS (WRI 89-4209) recusou (403). |
| F12 | O vento e a sombra: "Northeast trade winds blow most of the year"; "Kahoʻolawe lies at the apex of a natural wind tunnel, with Haleakalā and the peaks of the Island of Hawaiʻi forming the base." | KIRC, plano de 1998 | **CONFERE**. O plano fala de túnel de vento, não de "sombra de chuva". A sombra é a nossa leitura da grade (o corte do §4), e a da Environment Hawaiʻi. |
| F13 | A ilha teve gente: "Native Hawaiians who first encountered its rugged shores farmed the land"; um centro de treino de navegadores; "A mission school was established on the island from 1825 through 1838"; o exílio como pena "from 1829 to 1853"; ranchos de ovelhas e gado de 1858 a 1941. As cabras de Vancouver (1793): "By 1884, there were more than 9,000 goats", e 12.000 ovelhas. | NPS, ensaio 9, p. 193–194 | **CONFERE**. Derruba o "inabitável por natureza" (K4). As ~50 mil cabras do `inabitavel.md` não vieram na minha leitura da página da KIRC: **NÃO CONFERIDO** aqui. |
| F14 | "George Helm and Kimo Mitchell, were lost at sea while protesting the U.S. naval bombardment of the island." O teste de 1965: "the U.S. Navy detonated 500 tons of TNT". | NPS, ensaio 9, p. 194–195 | **CONFERE**. O mês e o ano (março de 1977) só vieram de documentos da KIRC e do condado vistos na busca, sem leitura. |
| F15 | A ponte de nuvens: "The Nāulu cloud bridge brought rain to Kahoʻolawe. Human activity and modification of these ecosystems have severely reduced the frequency of the Nāulu rains." Projeto de US$ 500 mil do condado de Maui, dado à KIRC em junho de 2026; "The Notice to Proceed is pending." | KIRC, pauta da reunião de setembro de 2026: https://www.kahoolawe.hawaii.gov/agendas/IVB4_Naulu%20Sept%202026.pdf | **CONFERE** |
| F16 | Os 6.692 acres nunca limpos são "46 % de Manhattan". | Census QuickFacts | **NÃO CONFERIDO**: o census.gov deu 403. A conta do lado de cá (10,46 mi²) está certa. |

**A palavra forte demais:**
- **"Nobody Can Live On"** é verdade pela lei (F6) e pelo censo (F8), mas o "can" sugere que a ilha não sustenta gente, e ela sustentou
  (F13). A frase verdadeira: "Nobody is allowed to live on Kahoʻolawe, and nobody has been counted there in any census since 1970."
- **"50 years"** são 49 (de 1941 a 22/10/1990).
- **"1 acre in 10"** é a conta da KIRC. Sobre a área oficial, é "fewer than 1 in 10" (9,3 %).
- **"the rain shadow of Haleakalā"** é leitura, não frase de órgão oficial: a KIRC fala de túnel de vento, e a ilha é seca também por
  ser baixa. A altitude (~1.480 pés no Puʻu Moaʻulanui) ficou **NÃO CONFERIDA**: só a Wikipedia e cópias dela.

## 2. A colisão (vidIQ: 30 créditos, no teto)

Saldo 5.286 → 5.256. Quatro buscas no YouTube e duas de palavra-chave (`vidiq.tsv`). Views das páginas `/watch` às ~22:40.

**Os 5 mais próximos:**

| # | Título | Canal | Inscritos | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|---|
| 1 | Why Nobody Is Allowed on the Hawaiian Island the Navy Bombed for 49 Years | Restricted Earth | 62 | 240 | 16/11/2026 | 17:48 | **Sim, título e ângulo**: "Why" + "nobody" + "Hawaiian island" + "Navy bombed". Capítulos: "Reason one: the bombs are still in the ground", "Reason two: the land itself was broken", "Reason three: it isn't anyone's to visit". |
| 2 | This Forbidden Hawaiian Island is Quietly Coming Back to Life | Park Vibes | 33,8 mil | **86.288** | 16/07/2026 | 16:09 | **Sim, ângulo**: é o explicador longo da mesma história, num canal médio, há 4 meses. Ocupa a busca e a recomendação de "kahoolawe". |
| 3 | How Native Hawaiians fought the US Navy, and won | Vox | 12,7 mi | **1.009.517** | 24/05/2021 | 17:33 | **Pesa**: é o primeiro de "kahoolawe" por views, com o movimento e a soberania. Não colide no título. |
| 4 | Why You're Really Banned From 90% of Hawaii | Map Pack | 444 mil | 255.834 | 13/02/2026 | 17:50 | **Em parte**: capítulo "A Sacred Land Used for Bombing" (4:35–5:24), dentro do molde "Why… Hawaii". |
| 5 | 10 Hawaiian Places So Dangerous the Government Won't Let You In | Hidden Hawaii | 3,09 mil | 703 | 16/07/2026 | 18:02 | **Na medida**: "less than 10 percent of the subsurface below four feet has been cleared". |

Também em 2026:
- "Hawaii Is Sitting On Something Nobody Talks About" (geography wine, 700 inscritos, 26/10, 1.819 views, 19:54), com o capítulo
  "#7 Kahoʻolawe: The Island the Navy Bombed";
- "The Secret History of Kahoolawe" (America Unearthed, curto, 12/11);
- os 50 anos do primeiro desembarque (janeiro de 2026), com quatro reportagens da Hawaii News Now (de 427 a 4.744 views) e um podcast de
  1h45 com Walter Ritte (12/11, 6.025 views);
- "Nāulu Love Song", da Protect Kahoʻolawe ʻOhana (13/08, 10.407 views), sobre a chuva que sumiu (F15).

Sem data, por views, a busca de "kahoolawe" é do Vox (1,0 mi), da música havaiana (de 12 a 115 mil), dos arquivos do movimento (61 mil e
35 mil) e da série da Hawaii News Now de 2018 (40.735 e 17.096).

**Niʻihau, a "Forbidden Island": a confusão atrapalha.**
- "Forbidden hawaiian island" é de Niʻihau, e com muita view: Park Vibes (10/03/2026, **1.306.887**), Edge Tales (14/08/2026, 295.845),
  Planet Of Wonders (01/12/2025, 70.955), e mais 7 sobre Niʻihau em 2026, na mesma busca.
- A Park Vibes usou o rótulo de Niʻihau para Kahoʻolawe quatro meses depois e tirou 15 vezes menos (86 mil contra 1,3 mi). A palavra puxa
  o clique de quem quer Niʻihau, e a história de Kahoʻolawe não segura esse público.
- Para nós, "forbidden" colide com os dois títulos da Park Vibes e manda o espectador ao lugar errado. Fica fora do título, como o
  `inabitavel.md` já dizia.

**A busca:**
- "kahoolawe": volume 0, concorrência 39, **< 750 buscas/mês**;
- "hawaii island": 4.143/mês (volume 54, concorrência 39). É a frase de viagem, e a "Hawaiʻi Island" é também o nome oficial da Ilha
  Grande: não é demanda por Kahoʻolawe.

## 3. O potencial real, pela régua

| # | Critério | Kahoʻolawe |
|---|---|---|
| 1 | O nome é buscado | **Não**: < 750/mês, contra 13,3 mil do "big sur". O Big Sur deu views de pesquisa porque o nome é buscado; aqui não há busca a pegar. |
| 2 | Prova recente de interesse | **Sim**, mas é a prova de que o lugar foi ocupado: a Park Vibes (86 mil, julho), o Map Pack (256 mil, fevereiro) e os 50 anos do movimento. |
| 3 | O vídeo longo bem feito não existe | **Não**: existe, a Park Vibes, 16 min, há 4 meses. E o mesmo ângulo saiu ontem, no Restricted Earth. |
| 4 | O paradoxo em 3 frases, visível no mapa | **Sim**: a ilha vazia a poucas milhas de Maui, a única das oito sem morador, cabe na miniatura. |
| 5 | A geografia explica o porquê | **Em parte**. A geografia explica a erosão e a falta de água (F10–F12). O "ninguém pode morar" vem da lei e das bombas (F4–F6), e a ilha teve gente (F13). Lānaʻi, quase tão seca, tem 3.367 moradores. |
| 6 | Uma medida nossa, de dado aberto | **Fraca**: o "1 em 10" e o "um quarto" já estão em vídeo (K3). A chuva da grade é nossa, mas é coadjuvante no ângulo pedido. |

- **O enxame:** já chegou.
  - Um canal de 62 inscritos publicou o nosso título ontem.
  - Em 2026, dois canais fizeram o vídeo longo só de Kahoʻolawe (a Park Vibes e o Restricted Earth), e outros três a puseram como
    capítulo (o Map Pack, o Hidden Hawaii e o geography wine).
  - O Havaí está na moda dos "nobody talks about". Se o Restricted Earth pegar, vêm mais em dias.
- **13 a 16 min:** a história sustenta (os concorrentes têm de 16 a 18 min, em 3 atos naturais: a ilha e as cabras, as bombas e o
  movimento, a limpeza e a lei). O problema não é linguiça. É que é a mesma história, e na mesma ordem.

## 4. A nossa versão: a medida (conta preliminar, feita)

**A chuva, na grade aberta** (`chuva.py`; Rainfall Atlas of Hawaiʻi, média anual 1978–2007, 250 m):

| Recorte | Média anual | Máximo |
|---|---|---|
| Kahoʻolawe | **15,7 in** | 20,6 in |
| Lānaʻi | 21,8 in | 35,8 in |
| Maui Oeste | 67,4 in | **366,0 in** (Puʻu Kukui, a 23,8 mi do centro de Kahoʻolawe) |
| Maui Leste | 85,3 in | **404,4 in** (a barlavento do Haleakalā, a 35,7 mi) |

- 97 % das células de Kahoʻolawe ficam abaixo de 20 polegadas por ano, e 100 % abaixo de 25.
- **O corte do vento** (NE → SW, um ponto por milha, do mar de barlavento ao centro de Kahoʻolawe, pelo cume do Haleakalā): 250 in na
  encosta de barlavento, 41 in no cume, ~30 in na descida de sotavento, 15 in na costa de Mākena e 17 a 20 in em Kahoʻolawe. O desenho da
  sombra está na grade, e cabe numa cena de mapa.
- A frase: "Kahoʻolawe gets about 16 inches of rain a year; the peak of West Maui, 24 miles away, gets about 366."

**A limpeza e a erosão, sobre a área oficial** (`medidas.py`; 44,6 mi² = 28.544 acres):
- limpo até 4 pés: 2.647 acres, 4,1 mi², **9,3 %** da ilha (1 acre a cada 10,8);
- nunca limpo: 6.692 acres, 10,5 mi², **23,4 %**;
- erosão severa: 12.800 acres, **44,8 %** da ilha; replantável hoje, 820 acres (**6,4 %** dela, 2,9 % da ilha).

Os números da limpeza já foram ditos por outros (K3). O que ninguém mostrou, até onde a busca viu, é a chuva medida e o "44,8 % severamente
erodido, 6 % disso replantável". Nenhum dos dois é o número do gancho do formato pedido ("por que é inabitável").

## 5. O material

- **Mapa com geometria real:** o Natural Earth e o OSM têm a costa; o 3DEP do USGS cobre o Havaí (relevo para Maui e o Haleakalā); a
  grade da chuva (UH) dá a camada de chuva. Os termos de uso do Rainfall Atlas não foram lidos: o link "Conditions of Use" da página aponta
  para `#`. Lê-los antes de usar a grade na tela.
- **Satélite aberto:** Landsat e Sentinel-2 (a ilha é pequena e seca, e sai bem em cor natural); o "hardpan" vermelho se vê.
- **Acervo livre:** no Commons, a categoria "Kahoolawe" tem 179 arquivos e 21 subcategorias (fotos aéreas, imagens de satélite,
  história, mapas, os sítios Hakioawa, Kealaikahiki e Puʻu Moaʻulanui); "Operation Sailor Hat" tem 8 (Marinha, domínio público). A NARA não
  foi consultada (a API pede a chave do canal). As fotos da KIRC e da ʻOhana pedem licença (não lida).
- **Dá para 13 a 16 min**, como os concorrentes mostraram. O material não é o problema.

## 6. O título e o gancho que eu defendo (se a Sala ainda quiser Kahoʻolawe)

O único ângulo que não está tomado é o da chuva. Ele foge do formato pedido ("por que é inabitável") e continua sem busca pelo nome.

- **Título:** "Why Kahoolawe Is So Dry Next to One of America's Wettest Peaks" (62).
- **Alternativas:**
  - "Why Kahoolawe's Rain Used to Come From Maui" (43; a ponte Nāulu, F15);
  - "Why Kahoolawe Is the Hawaiian Island Nobody Can Live On" (55; o de trabalho). Colide em sentido com o Restricted Earth de ontem, e o
    "can" pede a ressalva de §1.
- **Gancho** (3 frases, 32 palavras): "Twenty-four miles from this island, a mountaintop gets about 366 inches of rain a year. Kahoʻolawe gets about
  16. Nobody lives here now, and the bombs are not the whole reason."
- **Miniatura:**
  - Maui Nui em relevo amarelo, com o Haleakalā e Maui Oeste;
  - **Kahoʻolawe em vermelho**;
  - **em ciano**, as manchas de mais de 200 polegadas da grade (Puʻu Kukui e a encosta de barlavento do Haleakalā), a chuva que não
    atravessa;
  - uma seta branca grossa do vento NE, que passa o cume e chega seca;
  - na caixa preta, **"RAIN SHADOW"**; a B, "366 vs 16".
  - **Não "UNLIVABLE"** (K5).

## 7. Os pontos

- **K1 · GRAVE · A colisão.** O mesmo ângulo e quase o mesmo título saíram ontem (Restricted Earth, 16/11/2026). O explicador longo da mesma
  história tem 86 mil views desde julho (Park Vibes, 33,8 mil inscritos). E o Vox tem 1,0 mi sobre a luta pela ilha. O "nenhum explicador
  longo; nenhum em 2026" do `inabitavel.md` é falso: a busca da web não viu o que o vidIQ viu.
- **K2 · GRAVE · A busca.** "kahoolawe" fica abaixo de 750 buscas por mês. O canal cresceu pela pesquisa (o Big Sur), e aqui a pesquisa é
  pequena e já tem dono (o Vox e a Park Vibes no topo).
- **K3 · MÉDIO · A medida não é nossa.**
  - O "less than 10 percent… below four feet" está no Hidden Hawaii (16/07/2026), e o "a quarter still dangerous", na Park Vibes e no
    Restricted Earth.
  - Os números são da KIRC, sobre uma ilha de ~26.500 acres. Sobre a área oficial, dão 9,3 % e 23,4 %.
- **K4 · MÉDIO · A geografia não explica o "inabitável".** A ilha teve lavouras, escola, presos e ranchos até 1941 (F13), e Lānaʻi, quase tão
  seca, tem 3.367 moradores. O porquê de hoje é a lei (F6) e as bombas (F4–F5). O critério 5 da régua cai pela metade, e o pedido do
  Lucas ("Por que X lugar é inabitável") fica respondido por "porque a Marinha bombardeou e a lei não deixa", que é o que todos já contaram.
- **K5 · MÉDIO · O tema sensível pesa na nota.**
  - A ilha é sagrada (Kanaloa), o movimento tem dois mortos no mar (F14), e a lei a guarda para uma entidade soberana havaiana que ainda
    não foi reconhecida (F7).
  - Um canal de fora, com voz sintética, chamando a ilha de "unlivable" contradiz a ʻOhana e a KIRC, que falam de cura e de volta. E a
    tela de "terra arrasada" seria o contrário do que a lei manda.
  - Dá para tratar com respeito: os nomes em havaiano com ʻokina, a KIRC e a ʻOhana citadas, a restauração mostrada, nada de "wasteland".
    Mas a moldura "inabitável" é a errada para esse lugar, e o Vox e a Park Vibes já contaram a história pelo lado certo.
- **K6 · MÉDIO · Niʻihau.** "Forbidden" é de Niʻihau (1,3 mi da Park Vibes) e já foi usado para Kahoʻolawe (Park Vibes). A confusão
  atrapalha: leva o espectador ao outro lugar, ou o rótulo colide.
- **K7 · LEVE · A promessa de 1953.** A frase "suitable for habitation" é da KIRC; o texto da Ordem Executiva 10436 não foi lido (a
  presidency.ucsb.edu caiu, e a cópia da UH pediu verificação de navegador). Sem aspas no gancho até ler.
- **K8 · LEVE · Os números que divergem.**
  - A área: 44,6 mi² no Data Book, contra 44,97 na Wikipedia e ~41,6 implícitos pela KIRC.
  - A chuva: 15,7 polegadas na grade, contra "~25 nos cumes, menos de 10 na costa" no plano da KIRC de 1998.
  - A faixa de mar: "two miles" na lei, contra "two nautical miles" no FAQ.
  - O solo perdido em pés só vem de fonte secundária.
- **K9 · LEVE · Manhattan.** A comparação dos 10,5 mi² com Manhattan não foi relida (o census.gov deu 403).

**Por que 3,0:**
- os fatos se seguram (F1–F9 conferem, e a lei é forte);
- a ilha cabe na miniatura;
- o material é bom.
Mas falham três dos seis critérios da régua (a busca, o lugar vago, a medida própria), e a geografia explica só metade. A nota 6,0 do
`inabitavel.md` dependia do lugar vago, e ele não existe: o enxame chegou ontem, em cima de um explicador de 86 mil views.
