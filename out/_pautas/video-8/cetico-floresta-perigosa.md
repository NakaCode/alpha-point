# Cético: `floresta-perigosa` ("Por dentro da floresta mais perigosa do mundo"), 18/11/2026

**Veredito: DERRUBADO. Nota: 4,0 / 10** (a pauta é boa, e a hora é a pior: fica como reserva, a testar de novo em fevereiro ou março de 2027).

A pauta é do Lucas, no chat da Sala, em 18/11/2026, ~02h: "Talvez um outro ângulo "Por dentro da floresta mais perigosa do mundo"". O
adendo da Sala pediu também o teste do título no molde do Geoff ("Inside Earth's Most [adjetivo] [Forest/Jungle]") e da miniatura no molde
dele (a caixa amarela com letra preta, ao lado da preta). A régua é a nova do Lucas (18/11/2026: "Eu preciso arriscar em algo mesmo que já
exista... Desde que não seja atual"; "Algo chamativo, não necessariamente que vá ganhar em pesquisa, mas em curiosidade"): vídeo antigo não
derruba; derrubam a onda do momento e o título igual ou quase igual em 12 meses.

**Em seis linhas:**
- **A floresta que se sustenta, com fonte, é o Darién**, e só num sentido: é perigosa **para quem atravessa a pé**, e mais pela gente (o Clan
  del Golfo, o roubo, a violência sexual) que pelos bichos. A fonte boa diz "one of the most dangerous routes in the world" (UNICEF), não "the
  most dangerous forest". "Deadliest" é falso: em 2022 a OIM contou 141 mortes no Darién e 686 na fronteira EUA–México (§1).
- **A Daintree e o Congo não seguram o superlativo:** a Daintree é "a mais antiga" (Guinness), não a mais perigosa; o Congo não tem fonte (§1).
- **A onda derruba as três.** Em 8 semanas, o Darién teve pelo menos 4 longos em inglês com público (227 mil, 101 mil, 34 mil, 25 mil), 12
  longos em outras línguas com 16 mil a 646 mil, e curtos de 260 mil e 338 mil sobre "a estrada que para". O Congo teve 6,9 mi
  (31/10) e 3,0 mi (25/09); a Daintree, "…Deadlier Than the Amazon" (115 mil, 20/10) (§2).
- **O título no molde do Geoff colide.** "Inside Earth's Most Dangerous Jungle" tem 6 quase iguais em 12 meses, um deles sobre o próprio Darién,
  há um mês ("The Missing Link: Inside the World's Most Dangerous Jungle", 18/10). "Deadliest" também colide. "Impassable" não colidiu (§3).
- **O que ninguém mostrou é a nossa medida:** a série oficial do Panamá de 2010 a out./2026 (1.323.822 travessias; 520.085 só em 2023; 136 em
  out./2026) e o perfil da brecha (105,7 km em linha reta, uma crista de 1.762 m e um terço do caminho abaixo de 20 m) (§5).
- **O ponto mais grave (K1):** o assunto é a onda do momento no YouTube, e não por notícia: a migração quase parou (675 travessias em 2026). O
  formato "Why We Can't Truly Explore…" e os documentários em espanhol levaram a selva ao topo agora.

Lido entre ~02:00 e ~02:45 de 18/11/2026 (hora de Brasília). Os scripts, as respostas e as saídas estão em
`out/_pautas/video-8/_trabalho/cetico-floresta-perigosa/`:
- `vidiq-bruto/` (as 5 respostas grandes do `vidiq_youtube_search`, em JSON), `vidiq-b2.txt` … `vidiq-b8.txt` (uma linha por vídeo, pelo
  `vidiq_ler.py`) e `vidiq.tsv` (as 8 chamadas e o gasto);
- `watch.jsonl`: as 13 páginas `/watch` lidas pelo `../yt_meta.py`, um pedido por vez;
- `snm_texto.py`, `snm_serie.py`, `snm-serie-saida.txt` e `fontes/snm/` (o texto dos 8 PDFs do Serviço Nacional de Migração, com o sha256 no
  topo de cada `.txt`): a série (§5);
- `ne_estradas.py`, `perfil_brecha.py` e `perfil-brecha-saida.txt`: o perfil da brecha (§5). O `perfil_brecha.py` lê a biblioteca `shapely` e
  roda com `python -P -X utf8 -B`, de dentro da pasta dos scripts;
- `commons.py` e `commons-saida.txt`: o Commons (API, um pedido por vez, User-Agent do canal).

Ficaram em `midia/_pautas/video-8/cetico-floresta-perigosa/`, fora do git: os 8 PDFs do SNM (`snm/`, 4 MB) e os 12 ladrilhos de altitude
(`terrarium/`).

## 1. A verdade: qual floresta é "a mais perigosa", e em que sentido

| # | Fato | Fonte (lida em 18/11/2026) | Veredito |
|---|---|---|---|
| F1 | "The Darien jungle, between Colombia and Panama, is one of the most dangerous routes in the world" (o resto da frase cita o relevo, a fauna, os insetos e o crime organizado). | UNICEF, press release de 29/03/2021: https://www.unicef.org/press-releases/fifteen-times-more-children-crossing-panama-jungle-towards-usa-last-four-years | **CONFERE**, como "one of". **"The most dangerous forest/jungle in the world" NÃO CONFERE**: nenhuma fonte primária lida diz isso; quem diz são os títulos do YouTube e a descrição do Bald and Bankrupt ("known as the world's most dangerous jungle"). |
| F2 | **"Deadliest" é falso pela conta:** a OIM documentou **141 mortes de migrantes no Darién em 2022** e **686 na fronteira EUA–México**, "the deadliest land route for migrants worldwide on record". Em 17/01/2023, com a conta incompleta, a mesma OIM tinha dado 36 para o Darién, e avisa que o número real é maior (corpos que ninguém acha). | OIM, 12/09/2023: https://www.iom.int/news/us-mexico-border-worlds-deadliest-migration-land-route; OIM, 17/01/2023: https://www.iom.int/news/number-migrants-who-embarked-dangerous-darien-gap-route-nearly-doubled-2022 | **CONFERE.** Na tela, nunca "deadliest". Por travessia, o mínimo documentado de 2022 dá **1 morte a cada ~1.760 travessias** (141 ÷ 248.284). Para 2024, a OIM teria contado **174, um recorde** (só pela imprensa, AP): **NÃO CONFERIDO** na fonte primária. |
| F3 | **O perigo é sobretudo humano:** do lado colombiano, "the Gulf Clan, an armed group involved in drug trafficking, which controls the movement of migrants and asylum seekers" e "regulates the routes". A MSF atendeu **328** pessoas que relataram violência sexual na travessia (abr.–dez. de 2021), **232** em 2022 e **676** em 2023, "214 only in December". | Human Rights Watch, *Neglected in the Jungle*, 03/04/2024 (citando a MSF): https://www.hrw.org/report/2024/04/03/neglected-jungle/inadequate-protection-and-assistance-migrants-and-asylum-seekers | **CONFERE** (os números da MSF, pela HRW; o relatório da MSF não foi lido). |
| F4 | **As travessias, ano a ano** (o "tránsito irregular por Darién"): 559 em 2010; 29.289 em 2015; 22.102 em 2019; **133.726** em 2021; **248.284** em 2022; **520.085** em 2023 (113.180 menores, 22 %); **302.203** em 2024; **3.091** em 2025; **675** de janeiro a outubro de 2026. O maior mês: **agosto de 2023, 81.946** (~2.640 por dia). | Servicio Nacional de Migración do Panamá, os 8 PDFs da página de estatísticas (https://www.migracion.gob.pa/inicio/estadisticas, lida e baixada às ~02:20; o robots.txt só veta `/wp-admin/`). A La Prensa (02/11/2026) repete os números: https://www.prensa.com/sociedad/ciudadanos-de-estas-nacionalidades-siguen-desafiando-la-travesia-de-cruzar-el-tapon-de-darien/ | **CONFERE** (a soma dos meses bate com o total em todos os anos; `snm_serie.py`). |
| F5 | **A brecha mede 66 milhas:** de Yaviza (onde a estrada acaba no Panamá) a Turbo (onde ela volta na Colômbia), **105,7 km = 65,7 mi** em linha reta. | **Medida nossa** (§5): as pontas das estradas do Natural Earth 10m (domínio público) e a distância pela fórmula de haversine | **CONFERE** com o "106 km (66 mi)" que circula. É linha reta; a estrada de verdade seria mais longa (o projeto de 1978 tinha 250 milhas, de Tocumen ao Río León, F6). |
| F6 | **Por que a estrada parou: a febre aftosa.** Pelos acordos de 06/05/1971, os EUA pagariam dois terços de uma estrada pavimentada de 250 milhas, "with termini at Tocumen, Panama, and Rio Leon, Colombia". Ambientalistas processaram em 27/06/1975; em **17/10/1975** a Justiça federal suspendeu a ajuda americana; em 23/09/1976 manteve a suspensão por três falhas do estudo ambiental (o controle da aftosa, as rotas alternativas e o efeito sobre os índios Cuna e Chocó). Em **14/03/1978** a corte de apelação derrubou a suspensão, mas exigiu um certificado do USDA sobre a aftosa na Colômbia antes de qualquer obra lá. O tribunal resume o medo: "the Darien Gap has served as an effective natural land barrier to the spread of the disease". | *Sierra Club v. Adams*, 578 F.2d 389 (D.C. Cir. 1978): https://law.resource.org/pub/us/case/reporter/F2/578/578.F2d.389.76-2158.html | **CONFERE.** **O que veio depois de 1978** (por que a obra nunca recomeçou) ficou **NÃO CONFERIDO** na fonte primária: o Geoff (08/10/2026) resume em três fases, sem fonte: primeiro a logística da selva, depois o medo da aftosa e, hoje, a política contra a migração. |
| F7 | **O relevo e o pântano:** na linha reta de Yaviza a Turbo, o terreno sobe de 47 m a **1.762 m (5.781 ft)** no km 43, na crista da Serranía del Darién, 6 km antes da fronteira; depois cai, e **37 km (35 %) ficam abaixo de 20 m**: as baixadas do Atrato e o golfo de Urabá. | **Medida nossa** (§5): Terrain Tiles da AWS (dado aberto) e Natural Earth 10m | **CONFERE** como medida. O nome "pântanos do Atrato" é do roteiro; a cobertura do solo (pântano ou mata) não foi medida. |
| F8 | **A volta:** em 2025, a migração inverteu (do norte para o sul, de barco pelo Caribe panamenho até a fronteira colombiana); um jornal, citando o SNM, dá **22.833 pessoas em "flujo inverso" em 2025**; a Defensoría colombiana, 17.987 de 1º/01 a 15/10/2025. | Imprensa (resumo da busca, 18/11/2026; os comunicados oficiais não foram lidos) | **NÃO CONFERIDO** na fonte primária. |
| F9 | O Parque Nacional Darién é Patrimônio Mundial da UNESCO (1981). | whc.unesco.org/en/list/159: **403** | **NÃO CONFERIDO** (o site recusou; sem contorno). |
| F10 | **A Daintree:** o superlativo dela é "a floresta tropical mais antiga" (Guinness, "as old as 180 million years"); a idade e a comparação com a Amazônia variam de fonte para fonte, e nenhuma fonte boa a chama de a mais perigosa. Os perigos (casuar, crocodilo, a árvore *gympie-gympie*) são de turismo. | Resumo da busca (Guinness, Wikipedia, sites de turismo); a página da Wet Tropics Management Authority não apareceu | **"Most dangerous" NÃO CONFERE.** |
| F11 | **O Congo:** nenhuma fonte lida o chama de a floresta mais perigosa. O perigo do leste do Congo é a guerra e o ebola, não a floresta. O Geoff o chamou de "Africa's Largest Rainforest" (20/08/2026). | — | **"Most dangerous" NÃO CONFERE** (não se buscou fonte primária: a onda já o derrubou, §2). |

**A forma verdadeira do superlativo:**
- **"Earth's most dangerous jungle":** falso como fato. A frase verdadeira: "one of the most dangerous routes in the world" (UNICEF; na fala, "migration routes"),
  ou, sem superlativo nenhum, "the only gap in a road from Alaska to Argentina" (o "Alaska a Argentina" está **NÃO CONFERIDO**; K6).
- **"The deadliest crossing":** falso (F2). Nem "in the Americas": a fronteira EUA–México teve quase cinco vezes mais mortes documentadas em 2022 (686 contra 141).
- **"Impassable":** verdadeiro para estrada e falso para gente: 1,32 milhão de travessias desde 2010 (F4). Entre aspas, vira o paradoxo (§7).
- **Perigosa para quem:** para quem atravessa a pé, e sobretudo pela gente que controla a rota (F3). Não para os animais, não para as plantas.

## 2. A onda: as três florestas estão no momento

vidIQ: 1 `vidiq_keyword_research` e 7 `vidiq_youtube_search`, **40 créditos, no teto** (5 por chamada; o saldo foi de 4.976 a 4.936). As views
abaixo são as do vidIQ, e as das linhas marcadas com `/watch` foram conferidas nas páginas públicas às ~02:20.

### O Darién: a onda do momento, nas três réguas

A busca "darien gap" nos últimos 2 meses (desde 18/09), por views, devolveu 50 vídeos; **46 são das últimas 8 semanas**.

**Longos em inglês com público, nas últimas 8 semanas** (a régua pede 3; são 4):

| Título | Canal (inscritos) | Views | Data | Duração |
|---|---|---|---|---|
| Why We Can't Truly Explore The Darien Gap (`/watch`) | BeyondTheGreen (77,7 mil) | 227.612 | 07/11/2026 | 28:50 |
| Why We Can't Truly Explore the Darién Gap (`/watch`) | CrowLab (5,6 mil) | 100.665 | 14/10/2026 | 30:06 |
| Into Panama and the Darién Gap \| EP4 \| Walking The Americas With Levison Wood (uma série de TV, subida de novo) | TravelTV (8 mil) | 33.656 | 23/10/2026 | 47:33 |
| Why the Darien Gap Is Harder to Survive Than the Amazon (`/watch`) | IntoTheGreen (2,7 mil) | 24.667 | 12/11/2026 | 17:16 |

**Virais (100 mil ou mais) nos últimos 2 meses, sobre o ângulo:**
- "EL TAPÓN DEL DARIÉN: La Selva Más Peligrosa de la Tierra que Miles Intentan Cruzar" (Planeta Remoto, 61 mil inscritos; **645.660**, 07/11,
  24:12, `/watch`): é o título do Lucas, em espanhol;
- "EL TAPÓN DEL DARIÉN | Un Viaje Completo por la Selva Más Peligrosa de América" (Jornadas Documentales, 4 mil; 312.900, 08/10, 72:34);
- "DARIÉN | La Selva Más Oculta y Peligrosa de América (Aquí se CORTA la Panamericana)" (El Mapa Habitado, 4,8 mil; 274.532, 19/10, 67:08);
- "The Darién Gap: where the world's longest road breaks." (Maptica, 63 mil; **260.510**, 14/11, curto, `/watch`): o nosso ângulo da estrada,
  em 1 minuto, há 4 dias;
- "Perché non si può andare in auto dall'Alaska all'Argentina?" (GeoStorie; 337.594, 06/11, curto); "World's Longest Highway | Pan American
  Highway" (361.613, 30/10, curto);
- e mais: o depoimento de migrante do pepe&chema (750 mil, 22/09), o Transit bites em tâmil (193 mil, 16/10), o La Vida en el Gabacho (110
  mil, 28/10). Na faixa de 16 mil a 42 mil, mais 7 longos (português, 2; francês; alemão; cingalês; espanhol, 2), e uns 20 curtos: são **12
  longos em outras línguas nas 8 semanas**.

**Notícia quente: não.** A migração quase parou (675 travessias em 2026, F4), e a notícia mais recente achada é uma nota de estatística (La
Prensa, 02/11). **A onda é do YouTube, não do noticiário:** o formato "Why We Can't Truly Explore X" da BeyondTheGreen (a Amazônia profunda,
2,17 mi, 06/08; o Congo, 2,47 mi, 14/09) chegou ao Darién pela CrowLab (14/10) antes da própria BeyondTheGreen (07/11), e os documentários
longos em espanhol fizeram o resto.

**O Geoff também passou por aqui:** "Why Everyone Misunderstands Panama" (08/10/2026, 486 mil) tem o fato 4 sobre o Darién, de 2:44 a 3:30: a
única falha da Pan-Americana e por que nunca houve estrada ("logistical problems… then worries about… foot and mouth disease. And now
today, for political reasons aimed at stemming migration flows north"; `out/_analises/geography-by-geoff/transcricoes/gqug5t8gqrg.txt`). É o
nosso ângulo em 45 segundos, num vídeo de 486 mil, há 41 dias.

### O Congo e a Daintree: também no momento

- **O Congo:** "The Congo Is Hiding Something Worse Than the Amazon" (Gaurav Katare, 2 mi de inscritos; **6.914.885**, 31/10, 15:08, `/watch`); "Why
  The Congo Basin is More Dangerous Than The Amazon" (SupremeSpecies, 11,5 mil; **3.014.088**, 25/09, 27:05); "Why We Can't Truly Explore the Deep
  Congo Jungle" (BeyondTheGreen; 2.466.590, 14/09); "CONGO | La Selva Más Salvaje y Peligrosa…" (3,49 mi, 11/09); e o Geoff (1,41 mi, 20/08).
  **DERRUBADO** pela onda, com folga.
- **A Daintree:** "Why Australia's Daintree Rainforest Is Deadlier Than the Amazon" (Snoozy Science, 19,2 mil; **114.659**, 20/10, 2h19, `/watch`) e
  um curto de 2,16 mi (08/11). É o ângulo "perigosa", e o superlativo nem se segura (F10). **DERRUBADO.**
- **O gênero inteiro está quente:** a busca "most dangerous jungle in the world" dos últimos 12 meses, por views, traz o MrBeast, a Amazônia em
  dezenas de versões, o "Inside Africa's Most Dangerous Jungle" (1,47 mi), o "UNSEEN AMAZON: Inside the World's Most Dangerous Rainforest" (2,6
  mi), o "28 Days Inside Earth's Deadliest Jungle" (975 mil) e o "Las 10 Selvas Más Peligrosas del Mundo" (951 mil).

**Fora da lista do pedido, testei duas por uma busca cada:**
- **Os Sundarbans** (o mangue onde o tigre caça gente, entre a Índia e Bangladesh): o ângulo do tigre teve "Sundarbans Fishermen Wear Backward
  Tiger Masks" (NonStopHistoryTV, **2.343.885**, 13/10, curto em inglês, `/watch`) e um curto em malaiala de 2,1 mi (27/09). Pela régua, a onda
  derruba o ângulo do tigre. O resto da busca são desenhos e vlogs em bengali, de outro público.
- **Białowieża** (a floresta primária da fronteira Polônia–Belarus, com o muro de 2022 e as mortes de migrantes): nenhum vídeo em inglês sobre o
  muro na floresta nos 12 meses (por views); o mais perto é "The Forgotten Corner of Europe That Went Back to the Wild" (EuroFault, 246.649,
  19/09, sobre a natureza de Belarus, `/watch`). É **pista, não pauta testada** (§10).

## 3. A colisão do título (o adendo: o molde "Inside Earth's Most…")

**Os títulos quase iguais em 12 meses** (desde 17/11/2025):

| Título | Canal (inscritos) | Views | Data | Duração | O que é |
|---|---|---|---|---|---|
| The Missing Link: Inside the World's Most Dangerous Jungle (`/watch`) | Curiolab (76) | 619 | 18/10/2026 | 24:45 | **o Darién e a estrada**, há um mês |
| Inside the Darién Gap: The World's Most Dangerous Jungle | Comatozze (3) | 999 | 06/01/2026 | 1:01 | o Darién |
| 28 Days Inside Earth's Deadliest Jungle (Honduras Green Hell…) | Show Me the World (1,52 mi) | 975.337 | 01/07/2026 | 1:09:06 | a Mosquitia |
| Inside the World's Deadliest Jungle: Snakes, Tigers & Survival | Raj Shamani (22,6 mi) | 5.008.564 | 23/04/2026 | 2:34:40 | podcast |
| UNSEEN AMAZON: Inside the World's Most Dangerous Rainforest | TRUE GLOBE (160 mil) | 2.595.922 | 24/05/2026 | 54:27 | a Amazônia |
| Inside Africa's Most Dangerous Jungle Where Survival Is Brutal | Wild Realms Studio (27,6 mil) | 1.467.873 | 20/03/2026 | 59:44 | a África |

**O veredito, adjetivo por adjetivo:**
- **"Inside Earth's Most Dangerous Jungle" (ou Forest): DERRUBA.** Seis quase iguais em 12 meses, dois sobre o Darién; e o superlativo é falso (F1).
- **"…Deadliest Jungle": DERRUBA.** Falso pela conta (F2), e quase igual ao da Mosquitia (975 mil, jul./2026) e ao do Raj Shamani (5,0 mi, abr./2026).
- **"Inside Earth's Most 'Impassable' Jungle":** a busca por relevância de 12 meses ("inside earth's most impassable jungle") **não achou
  nenhum título com "Impassable Jungle"**. É verdadeiro com as aspas (nenhuma estrada, 1,32 milhão de travessias). É o único do molde que eu
  manteria, e só para a reserva.
- **"Inside Earth's Most Complicated Jungle": NÃO MEDIDO** (o teto acabou). O Geoff usou "Most Complicated" em dois títulos de 2 meses atrás
  (a Irlanda e a Drake, os dois prints do Lucas): ao lado deles, o nosso leria como cópia do Geoff (K4).

**Os antigos grandes** (não derrubam; ocupam a busca, e o nosso ângulo tem de ser outro):
- **"Why the Americas Still Aren't Connected by a Road"** (RealLifeLore, 31/03/2023, 4.908.745, 21:23, `/watch`): **é exatamente o ângulo "por que a
  estrada nunca foi feita"**;
- "Why it's Almost Impossible to Cross this Area" (Gaurav Thakur, 7,4 mi de inscritos; 26/09/2025, 2.530.155, 25:03, `/watch`): a brecha, as
  expedições, os planos da era Nixon, a doença, os indígenas, a geopolítica do tráfico. Tem 14 meses: fora da janela de 12, por pouco;
- "A Journey Through The Darién Gap: The World's Deadliest Jungle" (Cogito, 20/06/2024, 3,25 mi, 43:45);
- "I Was Trafficked Through The World's Deadliest Jungle" (bald and bankrupt, 11/11/2023, 6,13 mi) e a continuação do Timmy Karter (5,59 mi);
- o curto "The Darien Gap 🌍 The Most Dangerous Places on Earth" (GeoGlobeTales, 10/2024, **48,3 mi**), copiado por pelo menos 4 canais em 2026.

**Os 5 mais próximos do ângulo nosso (a estrada, a geografia e a migração):** o RealLifeLore (2023), o Gaurav Thakur (2025), o Curiolab
(18/10/2026), a CrowLab (14/10/2026) e a BeyondTheGreen (07/11/2026). Os três últimos estão nas últimas 8 semanas.

## 4. O potencial real, pela régua

| # | Critério | `floresta-perigosa` (o Darién) |
|---|---|---|
| 1 | O nome é buscado | **Sim, muito.** "darien gap": **87.957 buscas/mês** (volume 74, concorrência 66, nota geral 58; 6,6 vezes o "big sur"); os mercados do topo: Grécia, Paquistão e EUA, 13 % cada. |
| 2 | Prova recente de interesse | **Sobra**: é a prova de que o assunto é do momento (§2). |
| 3 | O longo bem feito não existe | **Existe, e de canal grande:** RealLifeLore (4,9 mi, 2023), Gaurav Thakur (2,5 mi, 2025), Cogito (3,2 mi, 2024). Na janela de 8 semanas, mais 4 em inglês. |
| 4 | O paradoxo em 3 frases, visível no mapa | **Sim:** a estrada de duas Américas para numa selva de 66 milhas; nenhuma estrada a cruza; 1,32 milhão de travessias registradas desde 2010, e agora quase nenhuma. No mapa: a brecha em vermelho, a estrada em branco que para. |
| 5 | A geografia explica o porquê | **Sim, e a geopolítica também:** a crista e o pântano (F7), a aftosa e os acordos (F6), a fronteira, o Clan del Golfo, a virada de 2025. |
| 6 | Uma medida nossa | **Sim** (§5): a série do SNM inteira (2010–2026) e o perfil da brecha. |

- **O enxame:** já chegou, em 5 línguas. O nono vídeo do ângulo não anda (a lição das 3 rodadas), e nós seríamos o vigésimo.
- **13 a 16 min, em 3 atos, sem virar lista:** dá, com folga.
  1. **A brecha.** O istmo, a Serranía, o Atrato, a chuva; o perfil de 66 milhas; o Esquema de Darién (1698) e a expedição Strain (1854; a conferir) como
     prova de que a selva sempre ganhou.
  2. **A estrada que não veio.** 1903 e o canal (o elo com o nosso vídeo da Zona do Canal), os acordos de 1971, os dois terços americanos, a
     aftosa e o processo de 1975 a 1978 (F6), os Guna e os Emberá, os parques.
  3. **A rota.** De 559 pessoas em 2010 a 81.946 num só mês de 2023, e de volta a 136 em outubro de 2026 (§5); quem controla a trilha (F3); a
     volta para o sul em 2025.

## 5. A nossa versão: as medidas (feitas)

**A série oficial inteira** (`snm-serie-saida.txt`; os 8 PDFs do SNM, com o sha256 no topo dos `.txt`):

| Ano | Travessias | O maior mês |
|---|---|---|
| 2010 | 559 | — |
| 2015 | 29.289 | — |
| 2019 | 22.102 | — |
| 2020 | 6.465 | fev. (1.825) |
| 2021 | 133.726 | out. (25.904) |
| 2022 | 248.284 | out. (59.773) |
| 2023 | **520.085** | **ago. (81.946)** |
| 2024 | 302.203 | fev. (37.166) |
| 2025 | 3.091 | jan. (2.229) |
| 2026 (jan.–out.) | 675 | ago. (148) |

- **1.323.822 travessias de 2010 a outubro de 2026; 91 % delas em quatro anos (2021 a 2024).**
- **Outubro de 2026 teve 136: 0,17 % de agosto de 2023.** Em 2025, o ano inteiro foi 0,59 % de 2023.
- Ninguém nas buscas mostrou a curva inteira, de 2010 a hoje, com a queda de 2025–2026 (os vídeos da onda ainda falam de "milhares que tentam
  cruzar").

**O perfil da brecha** (`perfil-brecha-saida.txt`): a linha reta entre as pontas das estradas do Natural Earth 10m (Yaviza, no Panamá; Turbo, na
Colômbia), com a altitude dos Terrain Tiles da AWS (dado aberto, sem login; Mapzen/Tilezen, de SRTM e outras fontes; zoom 12, ~38 m por pixel),
800 pontos:
- **105,7 km (65,7 mi)**: o "106 km / 66 mi" que circula é a linha reta Yaviza–Turbo;
- **a crista:** 1.762 m (5.781 ft) no km 43, 6 km antes da fronteira (a fronteira cruza a linha no km 49, pelo admin-1 do Natural Earth);
- **o pântano e o mar:** 37 km (35 %) abaixo de 20 m, do km ~68 ao fim: as baixadas do Atrato e o golfo de Urabá (Turbo fica do outro lado do
  golfo); 40 km (38 %) acima de 200 m.
- **A frase que a medida dá:** "In a straight line, the gap is 66 miles. The first half climbs a ridge more than a mile high; the second half is
  swamp and sea, barely above sea level." (1.762 m = 5.781 ft, acima da milha de 5.280 ft.)
- **Os limites:** é linha reta, não o traçado de estrada nem a trilha dos migrantes (que vai de Acandí e Capurganá, no Caribe, a Bajo Chiquito e
  Lajas Blancas, mais ao norte: não se mediu); a altitude perto da água sai 0 ou negativa; o Natural Earth 1:10m simplifica a fronteira.

**Outra medida possível, não feita:** a perda de floresta (Hansen/Global Forest Watch, CC BY 4.0) que termina onde a estrada termina, em Yaviza.
Daria a frase "the forest is cut right up to the last mile of road".

## 6. O material

- **Mapa com geometria real:** a fronteira, as províncias (Natural Earth 10m), a estrada (Natural Earth roads; a OSM tem o traçado fino,
  com o crédito "© OpenStreetMap contributors"), o relevo amarelo da miniatura pelo caminho do vídeo 7.
- **Satélite aberto:** Landsat (USGS/NASA) e Sentinel-2 (Copernicus), as duas pontas de estrada e o verde fechado entre elas. O Commons não tem
  Landsat do Darién (0 arquivos na busca).
- **Commons** (`commons-saida.txt`): "Darién Gap", 125 arquivos (com as subcategorias "Migrants crossing Darién Gap" e "Maps of Darién Gap");
  "Darién Province", 349; "Pan-American Highway in Panama", 94; "Atrato River", 33; "Yaviza", 17; "Darién National Park", 16; "Los Katíos
  National Park", 5; "Satellite pictures of Panama", 68. As fotos do Exército americano no fim da estrada em Yaviza (2013, DVIDS; obra do
  governo americano) e as fotos da expedição de Erland Nordenskiöld ao rio Sambú, nos anos 1920 (Museu Etnográfico Sueco, SMVK), servem às cenas. Os relatórios das
  explorações do Atrato para um canal (século XIX, Internet Archive) servem ao ato 1. A licença, arquivo a arquivo, é do conferente.
- **Gente:** foto de migrante identificável só com licença clara e sem expor rosto de criança (§8). Os vídeos da onda usam banco e IA; a nossa
  versão pode viver de mapa, satélite, documento e gráfico.
- **Dá para 13 a 16 min:** sim.

## 7. O título, o gancho e a miniatura (para a reserva)

**O título que eu defendo, se a pauta voltar em 2027:** **"Why No Road Crosses the Darién Gap, but 1.3 Million People Did"** (62 caracteres).
- O contraste entre duas coisas verdadeiras e medidas (F4, F5), no molde que estoura em canal pequeno agora (a lição da 3ª rodada); com o nome
  buscado (88 mil/mês).
- **NÃO MEDIDO no vidIQ** (o teto acabou). Os parecidos achados: "Why the Americas Still Aren't Connected by a Road" (2023) e "Why Is There No Road
  Between North and South America?" (curto, 14/11/2026, 39 mil). O "1,3 milhão" é nosso.
- "People" é a contagem de registros do SNM; uma pessoa que cruzou duas vezes conta duas. Na tela, "1.3 million crossings".

**Alternativas:**
- **No molde do Geoff (o adendo): "Inside Earth's Most 'Impassable' Jungle"** (40). Sem colisão na busca (§3). As aspas são a ironia: nenhuma
  estrada passa, e houve 1,32 milhão de travessias registradas. Sem o nome do lugar, como o Lucas pediu para a Nova Zelândia.
- "The 66 Miles Where the Americas Don't Connect" (46): a medida como promessa. Perto de "The 66 Miles No One Can Drive" (Edge of the Map, curto,
  06/11/2026, 20,9 mil): **colide**, e cai.

**Gancho** (3 frases, 43 palavras, sem a resposta): "The Pan-American Highway runs from Alaska to the tip of South America, except for a 66-mile gap of jungle between
Panama and Colombia. No road has ever been built across it. Yet in 2023 alone, more than half a million people came through."
- O "Alaska to the tip of South America" está **NÃO CONFERIDO** (K6).

**A miniatura, nos dois moldes** (o istmo é o protagonista: a América Central no alto à esquerda, a América do Sul embaixo à direita):
- **A (a nossa, caixa preta):** o relevo **amarelo**, o mar **azul**; a selva da brecha (de Yaviza a Turbo, a Serranía e as baixadas do Atrato)
  em **vermelho**; a Pan-Americana em **branco grosso**, que desce da América Central e **para** em Yaviza e volta em Turbo; em **ciano**, a linha
  reta de 66 milhas entre as duas pontas; na caixa preta, **"NO ROAD"**; uma seta branca grossa para a brecha.
- **B (o molde do Geoff, caixa amarela com letra preta):** o mesmo mapa; a trilha dos migrantes em **vermelho tracejado** atravessando a brecha
  (como a linha da Drake no print dele); a estrada em branco que para; na caixa amarela, **"1.3 MILLION CROSSED"** (ou "NO ROAD", se o teste
  pedir uma palavra só); a seta branca curva, como a da Irlanda.
- **Nunca** "DEADLIEST", "MOST DANGEROUS" nem caveira.

## 8. O tema sensível: como tratar

- **O sujeito é gente.** 22 % das travessias de 2023 eram de menores (113.180, F4). Na tela, nenhum corpo, nenhum rosto de criança, nenhuma cena
  de violência; a violência entra pelo número, com a fonte (HRW e MSF, F3).
- **As palavras:** "irregular", como o SNM ("tránsito irregular"), nunca "illegal aliens"; "people", "families", não "hordes" nem "waves". Sem o
  vocabulário de sobrevivência dos vídeos da onda ("hell", "nightmare", "1,001 demons"), que a voz do canal veta (`marca/voz.md` §2).
- **As mortes:** sempre "at least" e "documented" (a OIM avisa que o número real é maior; F2), com a fonte na tela.
- **Por que atravessam** (Venezuela, Haiti, Equador; F4, a tabela por país) entra em uma frase, sem juízo; a geopolítica do momento (o acordo
  EUA–Panamá de 2024, a política de 2025) se conta pelos números, sem arbitrar (`marca/voz.md` §1 e §2, "Notícia do dia").
- **O lado de quem mora lá:** os Guna e os Emberá não são cenário; F6 mostra que entraram até no processo de 1975.

## 9. Os pontos

- **K1 · GRAVE · O Darién é a onda do momento, nas três réguas.** Pelo menos 4 longos em inglês com público em 8 semanas (227 mil, 101 mil, 34 mil,
  25 mil); virais de 100 mil ou mais nos últimos 2 meses, entre eles o título do Lucas em espanhol (646 mil, 07/11) e o nosso ângulo da estrada
  num curto em inglês (261 mil, 14/11). A onda vem do YouTube, não da notícia. **Derruba.**
- **K2 · GRAVE · O superlativo não se segura.** "The most dangerous forest" não está em nenhuma fonte primária; "deadliest" é falso pela conta
  da OIM (141 contra 686 em 2022). A forma verdadeira é "one of the most dangerous routes in the world" (UNICEF), e o perigo é humano.
- **K3 · GRAVE · O título do molde do Geoff colide.** "Inside Earth's Most Dangerous Jungle" tem 6 quase iguais em 12 meses, um sobre o próprio
  Darién há um mês; "Deadliest" também. Só "'Impassable'" passou na busca.
- **K4 · MÉDIO · O ângulo da estrada é o mais feito do assunto.** O RealLifeLore fez exatamente esse vídeo (4,9 mi, 2023), o Gaurav Thakur outro
  (2,5 mi, 2025), e o Geoff o resumiu em 45 s há 41 dias (486 mil). "Most Complicated" leria como cópia do Geoff, que o usou duas vezes nos
  últimos 2 meses (a Irlanda e a Drake, de 17/09). A nossa versão só se distingue pela medida (a curva inteira e o perfil) e pelo contraste do título.
- **K5 · MÉDIO · O Congo e a Daintree caem também.** O Congo pela onda (6,9 mi em 31/10; 3,0 mi em 25/09); a Daintree pela onda (115 mil em 20/10,
  com o ângulo "deadlier") e pelo superlativo, que é "a mais antiga". Os Sundarbans caem no ângulo do tigre (2,3 mi em 13/10).
- **K6 · LEVE · Fatos que faltam conferir antes de um roteiro:** por que a obra não recomeçou depois de 1978 (F6); os 174 mortos de 2024 (F2); a
  volta de 2025 (F8); a UNESCO (F9, 403); o "Alaska to the tip of South America" do gancho.
- **K7 · LEVE · As medidas têm limites** (§5): a linha reta não é a trilha; os números do SNM são registros, não pessoas únicas.

**Por que 4,0:**
- é, no papel, uma das melhores pautas da busca: um dos nomes mais buscados da rodada (88 mil/mês; só o "grand canyon", com 90,9 mil, passa), geografia e geopolítica de verdade, o elo com o
  vídeo da Zona do Canal, um paradoxo que cabe no mapa e duas medidas nossas, feitas em uma hora;
- e é a pior hora: a onda está no auge (K1), o título que o Lucas pediu é falso e colide (K2, K3), e o ângulo da estrada já tem um clássico de 4,9
  mi (K4). Fica acima das derrubadas por enxame curto (Machias Seal, 3,0) porque a onda passa e a pauta fica; abaixo do Tug Hill (4,5) porque
  a saturação antiga é muito maior.

## 10. Para a Sala

- **O Darién vai para a reserva**, com as medidas prontas. Testar a onda de novo em **fevereiro ou março de 2027**: volta a ficar de pé se nas 8
  semanas anteriores não houver longo em inglês com público nem curto de 100 mil sobre a estrada. O título do contraste (§7) precisa da busca no
  vidIQ antes.
- **Se o Lucas quiser o molde "Inside Earth's Most…" com floresta agora,** nenhuma das três serve. O jeito honesto é trocar o superlativo de perigo
  por um de geografia que a fonte segure e que não esteja na onda. A pista que achei, **sem teste completo** (uma busca só): **Białowieża**, "a
  última floresta primária das planícies da Europa", cortada desde 2022 por um muro de aço na fronteira com Belarus. É geografia e geopolítica, tem
  título de contraste ("Why Europe Built a Wall Through Its Last Primeval Forest") e, na busca de 12 meses, nada em inglês sobre o muro. Precisa de
  cético próprio (os fatos, a notícia das últimas 8 semanas na fronteira, a colisão do título).
- **O vidIQ:** 40 créditos (1 `keyword_research` e 7 `youtube_search`), 4.976 → 4.936.
