# Vídeo 6 · Checagem da pauta · 24/10/2026

**A ideia** (Lucas, 22/10/2026; `pautas/2026-10-22-video-6-ideia-lucas.md`): a Passagem de Drake, entre o Cabo Horn e a Antártida, com dois
títulos de trabalho: *"The World's Most Dangerous Ocean Passage"* e *"Why This Place Is Sailors' Greatest Challenge"* (o segundo sem o nome,
pela regra de `marca/embalagem.md` §2).

**A checagem, em uma linha:** a demanda é a mais quente de todas as pautas até aqui (oito vídeos com mais de 1 milhão de visualizações em
2025–2026, dois deles do Scary Interesting, de 2,05 mi de inscritos, um com 3,43 mi em 6 semanas), mas o enquadramento "o mais perigoso" está
saturado, e o primeiro título do Lucas é quase o do Scary Interesting (*"The Most Dangerous Ocean Crossing on Earth"*, 11/09/2026). Os fatos
estão de pé em fonte primária, e há uma contradição concreta que só um título achado usa (88 visualizações): o mar que a prateleira diz que "nenhum navio cruza"
é hoje uma rota de cruzeiro (uns 115 mil passageiros de navio na temporada 2023–24, pela IAATO), e o que parou os veleiros foi a direção (o
*Bounty* lutou 30 dias contra o vento, em 1788, e desistiu). Há imagem real e livre do Cabo Horn. **Nota 6,5, de pé com ajuste** (§4).

**O combinado** (22/10/2026): "a concorrência com a data e as visualizações, os fatos principais e um cético". Este arquivo é o do
pesquisador; o cético vem depois, em outro agente.

---

## 0 · O método e os limites

- **O vidIQ não estava disponível** (o pedido da Sala já dizia). Créditos gastos: 0. Sem volume de busca, sem nota de concorrência, sem
  lista de Shorts.
- **No lugar dele**, a concorrência foi medida assim:
  - busca na web, só para achar os vídeos: 25 buscas restritas a youtube.com e 1 aberta (as buscas dos fatos são outras, e cada fonte está
    citada no §2);
  - a página pública `/watch` de cada vídeo, lida por script (`watch_lote.py`), **um pedido por vez, 4 s entre pedidos**, com o User-Agent
    `alpha-point-canal (contato.naka@hotmail.com)`. **88 páginas** em três lotes, na noite de 24/10/2026; 84 disponíveis. Delas saíram o
    título, o canal, os inscritos, as visualizações, a data, a duração, as palavras-chave e os primeiros 1.500 caracteres da descrição. O
    `robots.txt` do YouTube veta `/results` e `/api/` (onde fica a legenda): **nenhum dos dois foi usado**, e **nenhum vídeo foi assistido
    nem teve a legenda lida**.
  - **O que isso não pega:** a cobertura é a do buscador da web. Shorts, vídeos fora do inglês e o que o buscador não indexou ficam de fora.
    "Nenhum achado" quer dizer "nenhum nesta busca", e "nenhuma descrição conta" não quer dizer que o vídeo não conta.
- **O que é fato:** só o trecho lido na fonte. As conversões para pés e milhas, as distâncias, as profundidades medidas no ETOPO1 e as
  razões (vezes os rios, vezes a Corrente da Flórida) são **conta minha** sobre o número lido (scripts e dados no apêndice). Wikipedia só
  serviu para achar fonte.
- **Na fala e no esboço, só milhas e pés** (o público fala inglês, `marca/voz.md` §1). Toda conversão é minha: 1 ft = 0,3048 m; 1 mi =
  1,609344 km; 1 milha náutica = 1,852 km.
- **Sites que recusaram ou não abriram, sem contorno:**
  - Britannica (`britannica.com/place/Drake-Passage`): **403**. Os números dela (profundidade média de 3.400 m, até 4.800 m) chegaram só pelo
    resumo da busca: **não conferidos**;
  - Royal Museums Greenwich (`rmg.co.uk`, Drake): **403**;
  - Bartleby (Harvard Classics, Drake): **403**;
  - o PDF do Donohue et al. 2016 no repositório da URI: **403** (li o resumo na página do mesmo repositório e a nota da AGU, *Eos*);
  - o PDF do Young 1999 no Ifremer: **403** (li o resumo no repositório da ANU);
  - NOAA AOML (`aoml.noaa.gov`): conexão recusada (o número da Corrente da Flórida veio de um artigo no repositório da NOAA);
  - a cópia da IHO S-23 na AWI (`epic2-clone.awi.de`): conexão recusada (li a cópia da VLIZ);
  - o catálogo da State Library of NSW (o diário do *Bounty*): conexão interrompida (li o livro do próprio Bligh, de 1792);
  - o ERDDAP da NOAA CoastWatch: sem conexão; o THREDDS do NGDC: **vetado no `robots.txt`** (`/thredds/`), não usado;
  - a biografia de Francisco de Hoces na Real Academia de la Historia: a página abre sem o texto (montada por script); **não conferida**;
  - a biblioteca de fotos do programa antártico dos EUA (`photolibrary.usap.gov`): o domínio não resolveu (as regras dela, só pelo resumo
    da busca);
  - a IAATO, o relatório de navios de 2025–26 (ATCM48 IP200): 404;
  - a Library of Congress não foi tentada (o canal registra o 403 do Cloudflare a toda consulta por script, `marca/midia.md` §7.3).

---

## 1 · A concorrência

**A tabela** (lida em 24/10/2026; "views/mês" é a conta das visualizações pelos meses desde a publicação, até 24/10/2026). Só os 47 com 10
mil visualizações ou mais; os outros vão logo abaixo.

| Título | Canal (inscritos) | Views | Publicado | Views/mês | Duração | ID |
|---|---|---:|---|---:|---:|---|
| Crossing The Drake Passage to ANTARCTICA 🇦🇶 (World’s Roughest Sea) *(vlog; as palavras-chave dizem "Antarctica vlog hindi")* | Travel with AK (2,1 mi) | 6.964.214 | 06/12/2025 | 658.302 | 47:13 | `Z0jQfo-x__g` |
| **Drake Passage: The Most Violent Waters on Earth** | **Epic Adventure Archives (95,9 mil)** | **6.916.042** | **16/03/2026** | **948.230** | 30:36 | `U9zUvCakjic` |
| Real Reason Ships Don't Pass Under South America (It's Not the Distance) | Map Pack (441 mil) | 4.377.338 | 02/01/2024 | 129.859 | 24:28 | `44321BJI-1E` |
| The Southern Ocean: The World’s Most Dangerous Ocean | Epic Adventure Archives (95,9 mil) | 3.552.286 | 12/12/2025 | 342.160 | 36:18 | `TPE4nBI_9jk` |
| **The Most Dangerous Ocean Crossing on Earth** *(é o Cabo Horn)* | **Scary Interesting (2,05 mi)** | **3.428.389** | **11/09/2026** | **2.426.781** | 26:44 | `Wal6HjCqn8s` |
| Drake Passage: World's DEADLIEST Stretch of Water | Everything Explained (110 mil) | 3.386.517 | 04/04/2025 | 181.474 | 11:37 | `8Tz6MtMlb0Q` |
| Cape Horn: The Ocean’s Most Dangerous Passage | Epic Adventure Archives (95,9 mil) | 2.795.212 | 05/10/2025 | 221.561 | 21:10 | `n-_C7jNn8WM` |
| The Most Dangerous Stretch of Water on Earth *(é a Drake)* | Scary Interesting (2,05 mi) | 2.655.626 | 04/02/2026 | 308.514 | 21:10 | `VUKE6x54MlU` |
| Cruise ship endures huge waves on voyage to Antarctica *(clipe de 13 s)* | ABC News (19,9 mi) | 1.954.778 | 01/04/2025 | 104.201 | 0:13 | `tIZt0857a_o` |
| The Last Cape Horners | garry Kerr (17,3 mil) | 1.868.639 | 17/05/2023 | 45.284 | 1:11:40 | `RCShq8cpai0` |
| Patrol Ship Hits Massive Waves Near Antarctica *(clipe de 59 s)* | NowThis Impact (5,26 mi) | 1.474.578 | 14/03/2021 | 21.894 | 0:59 | `q5fVfySupj4` |
| Video Shows 40-Foot Waves Crashing Into Cruise Ship in Drake Passage | Inside Edition (13,8 mi) | 991.019 | 03/04/2025 | 53.013 | 1:38 | `YXRfMqrxzTU` |
| What's It Like Crossing the Drake Passage? | In The Loop Travel (18,8 mil) | 981.418 | 22/01/2023 | 21.788 | 2:58 | `fDSy3sddQNA` |
| Watch: Cruise Ship Battered By Drake Passage Waves | The Weather Channel (1,39 mi) | 980.322 | 05/04/2025 | 52.625 | 0:29 | `yNBlTH0mhQ4` |
| Is the Drake Passage Really That Bad? | My Life's A Travel Movie (24,3 mil) | 722.270 | 16/08/2023 | 18.870 | 0:39 | `pp3xuZbF6KY` |
| Cruise Ship Hit By Monster Wave Near Antarctica | Beyond Facts (756 mil) | 691.077 | 01/05/2026 | 119.515 | 18:43 | `Nw0SogLhH3I` |
| Why Ships Can't Pass Under South America | Coggnize (545 mil) | 668.346 | 06/03/2024 | 21.146 | 8:57 | `Kqiwvz1aTPs` |
| We Survived the Most DANGEROUS Cruise on Earth | Cruise With Ben and David (342 mil) | 633.459 | 02/03/2025 | 32.081 | 37:10 | `l6omaIr7NiE` |
| Passengers aboard Antarctic ship speak out after 'rogue wave' incident l GMA | Good Morning America (5,51 mi) | 472.330 | 07/12/2022 | 10.146 | 3:52 | `pP_PCew9yLE` |
| Hidden Danger: Why Ships Can't Sail Under South America 🌊🚢? | Simulated by AI (2,15 mil) | 452.475 | 20/07/2024 | 16.673 | 1:01 | `PVSud9oCQRA` |
| 600 Miles Across the Most Feared Ocean on Earth | Gone with the Wynns (723 mil) | 398.681 | 24/05/2026 | 79.313 | 38:27 | `v2G1DMvlRHU` |
| Ghosts of Cape Horn | MaineiacNorth (1,29 mil) | 344.673 | 16/10/2020 | 4.771 | 53:44 | `nFFM5CvxDXs` |
| Why are the waves so BIG?! · The Southern Ocean | The Ocean Race (265 mil) | 336.588 | 25/03/2023 | 7.827 | 2:47 | `LskdMqB7Jyc` |
| What It’s Like Traveling Through Drake Passage | Inside Edition (13,8 mi) | 330.379 | 03/01/2024 | 9.811 | 1:33 | `9G_P8CZu5wo` |
| The World's Most Dangerous Sea Route - Bypassing Cape Horn and Crossing the Drake Passage | The Traveler (3,77 mil) | 291.966 | 18/01/2023 | 6.463 | 8:21 | `6xdrq325ihg` |
| Drake Passage: The World's Most Dangerous Sea Route | The Microcosm (20,7 mil) | 186.950 | 26/09/2024 | 7.507 | 4:29 | `q-yznJQJB-s` |
| Terrifying Real Footage from the Drake Passage – Caught in the World's Most Dangerous Sea | Dark Sea Mysteries (903) | 148.682 | 03/08/2025 | 10.124 | 5:05 | `pwrIpjkZrsM` |
| Massive waves rock cruise ship | ABC7 (2,98 mi) | 145.678 | 02/04/2025 | 7.779 | 1:00 | `iqlagv9wB5c` |
| ANTARCTICA cruise hit by 20 METER waves - Ultimate Drake Shake | GetLostWithDan (2,9 mil) | 126.454 | 12/02/2024 | 3.908 | 5:20 | `kQFC6yhLvBA` |
| The Furious Fifties · Volvo Ocean Race 2008-09 | The Ocean Race (265 mil) | 111.499 | 17/03/2009 | 528 | 3:43 | `Dl25m8TLNVc` |
| Cape Horn: The Most Dangerous Sea Passage on Earth | Epic Adventure Archives (95,9 mil) | 106.317 | 12/10/2026 | 212.634 | 33:54 | `VMSScutW8p0` |
| Huge Waves in the Drake Passage 😲 | In The Loop Travel (18,8 mil) | 89.781 | 25/01/2023 | 1.998 | 1:00 | `hqmru-dfs54` |
| Why Ships Don’t Navigate Under South America | BRIGHT SIDE (44,5 mi) | 89.449 | 27/09/2024 | 3.597 | 8:37 | `_WhjyWonJcY` |
| 1 dead, 4 injured after 'rogue wave' strikes cruise ship | ABC News (19,9 mi) | 74.593 | 02/12/2022 | 1.597 | 0:57 | `dHZNMwv3o4M` |
| Crossing the World’s Roughest Ocean to Reach Antarctica · Dodo Itineraries | The Dodo (18,8 mi) | 55.393 | 28/04/2026 | 9.419 | 2:11 | `k-qz8G0lY6k` |
| Drake Passage: World's Most Dangerous Stretch of Ocean *(em malaiala)* | 47 ARENA (600 mil) | 54.964 | 22/08/2025 | 3.909 | 12:54 | `hw8lXFwQ1rc` |
| We Learn Why Big Ships Don't Round Cape Horn and Instead Navigate The Strait of Magellan [Ep. 125] | Sailing Sweet Ruca (51,2 mil) | 44.485 | 24/09/2023 | 1.202 | 25:22 | `VJSi7iV-s_o` |
| "The Sailor's Everest" · What Makes Cape Horn So Incredible? · The Ocean Race · Eurosport | TNT Sports (1,19 mi) | 40.997 | 28/03/2023 | 955 | 4:47 | `6iFAOeKhVfc` |
| CAPE HORN · The Most Feared Sea Passage on Earth · 4K Documentary | Unreal Ocean Planet (1,79 mil) | 35.605 | 10/07/2026 | 10.224 | 3:12:03 | `UtQHT_IUiGk` |
| Video shows what it's like sailing through the Drake Passage | ABC 7 Chicago (1,31 mi) | 31.324 | 02/04/2025 | 1.673 | 1:00 | `F6jlp7xe7gU` |
| Drake Passage: Rough Seas to Antarctica | Chimu Adventures (1,06 mil) | 30.247 | 21/07/2016 | 246 | 1:41 | `x_MLhb2MNRE` |
| Rounding Cape Horn · The Southern Ocean | The Ocean Race (265 mil) | 21.595 | 25/03/2023 | 502 | 1:33 | `1c1ar4HXHmw` |
| The Roughest Seas You've Never Heard Of | What Lurks Below (132 mil) | 19.518 | 07/10/2020 | 269 | 8:37 | `xSWZ9_MHcvw` |
| Pasaje de Drake: el tramo de agua MÁS MORTAL del mundo *(em espanhol)* | La Cabra del Mapa (18,3 mil) | 15.584 | 17/04/2026 | 2.497 | 8:59 | `i9ha0bZvXLo` |
| Drake Passage. | Alternative View (327) | 15.490 | 21/12/2016 | 131 | 2:54 | `rE3CDwjkXL0` |
| Why Ships Never Pass Under South America | BRIGHT SIDE (44,5 mi) | 14.049 | 06/04/2026 | 2.127 | 17:42 | `IWHgHDHHbMA` |
| Cape Horn: Where the Pacific Meets the Atlantic (The World's Roughest Sea) | Bright Side Dark Secrets (43,5 mil) | 12.465 | 27/10/2025 | 1.048 | 1:06:57 | `yKy7u5Wa0bQ` |

**Abaixo de 10 mil** (lidos, fora da tabela): `tltg8EgonPI` ABC News Austrália, a corrente com "leak" (9.466, 11/2023); `jPUzfTLlDMQ` In The
Loop (6.787, 05/2026); `7kQdj4Pq5uU` GlobeHaven, "Why Ships Don't Pass Under South America" (5.736, 02/2024); `ofK4FVEzTQU` (5.035, 2013);
`00zvN_nWbuc` Universidade de Utrecht, a corrente (3.803, 2017); `uesPk9hV4bE` (3.370); `F62Db68MRXg` (3.149); `LfbqfAFM_tE` Beyond Discovery,
"BREAKING: The USA Just CLOSED DOWN the Drake Passage…" (3.097, 05/2025); `aW0HuVT7fuM` (2.756); `URINLX3WE5I` The National Weather Desk
(2.337); `PzerX6yjS4Y` Dark Waters, o *Viking Polaris* (2.241, 10/2025); `6d6aZMj7NKw` (1.995); `X0tgoZ42wcY` (1.600); `LokUyISimx8` Nauctis
(1.409, 07/2026); `9BwDnw2QIaI` (1.385); `c4NBWUC4Axk` The Secret (406 mil inscritos; 1.071, 10/2025); e 21 vídeos com menos de 1 mil, entre
eles **`IdVIy029CPU` The National Weather Desk, *"The Drake Passage: From Ship Graveyard to Influencer Destination"* (88, 16/12/2025)**, o
único título achado com o ângulo do turismo. Fora (indisponível ou pede login): `wW9zR7sRrG0`, `iqGn2U2LvKA`, `o9Lq-s6CxBA`, `xNXL3lXNOvI`.

**Há espaço para um vídeo novo?** Há demanda, e a prateleira do "mais perigoso" está lotada.
- **A demanda é a maior das pautas do canal.** Dos 31 achados com 100 mil ou mais, oito passaram de 1 milhão em 2025–2026. O Epic Adventure
  Archives, com 95,9 mil inscritos, fez 6,9 mi com a Drake em 7 meses: o tema puxa até canal pequeno. O vídeo mais quente da tabela é de 6
  semanas atrás (Scary Interesting, 2,4 mi por mês).
- **O enquadramento está saturado.** Dos 31 com 100 mil ou mais, 13 têm superlativo de perigo no título ("Most Dangerous", "Deadliest",
  "Most Violent", "Most Feared", "Roughest"); nos 84, são 29. Só o Epic Adventure Archives fez quatro vídeos do tema em um ano (o último em
  12/10/2026), e o Scary Interesting, dois em 2026.
- **A família "navios não passam sob a América do Sul"** tem 10 títulos, três acima de 100 mil: Map Pack (4,38 mi, 2024), Coggnize (668 mil,
  2024) e Simulated by AI (452 mil). A premissa deles é a que a nossa contradição desmente (§2.6).
- **Pela data, a regra do Lucas** ("medir o tempo em que foi postado pode validar ela também") pesa contra o título "mais perigoso" e a favor do
  tema: a demanda é atual, e os vídeos mais recentes repetem o mesmo enquadramento.

**Quem já fez, quando e com que resultado:**
- **Epic Adventure Archives** (95,9 mil): quatro documentários de 21 a 36 min, de 10/2025 a 10/2026, com 2,8 mi (Cabo Horn), 3,55 mi (Oceano
  Austral), 6,92 mi (Drake) e 106 mil em 12 dias (Cabo Horn, quatro naufrágios). As palavras-chave do de 12/10 citam Francis Drake, Francisco
  de Hoces, o Canal do Panamá, a corrida do ouro da Califórnia e o Estreito de Magalhães; a descrição da Drake cita Schouten, Le Maire e Hoces.
  **A história dos nomes e da rota já é deles.**
- **Scary Interesting** (2,05 mi): a Drake em 04/02/2026 (2,66 mi), com o ângulo de que, "despite thousands of lives lost, detailed accounts
  are hard to come by"; e o Cabo Horn em 11/09/2026 (3,43 mi), com tripulações "fighting storms for months" e "Hundreds of ships have been lost
  throughout the broader Cape Horn region". **Esse é o concorrente mais perigoso**: canal grande, recente, e quase o título do Lucas.
- **Everything Explained** (110 mil), 04/04/2025: 3,39 mi, com "10,000 sailors never made back" na descrição.
- **Map Pack** (441 mil), 02/01/2024: 4,38 mi, *"Real Reason Ships Don't Pass Under South America (It's Not the Distance)"*.
- **Beyond Facts** (756 mil), 01/05/2026: 691 mil, um navio de cruzeiro na travessia e a engenharia que o mantém de pé. A descrição dá "a
  current carrying 150 times more water than every river on Earth combined" e "roughly 800 ships across five centuries".
- **Os vlogs e os clipes de jornal**: Travel with AK (6,96 mi), In The Loop Travel (981 mil), Cruise With Ben and David (633 mil), Gone with
  the Wynns (399 mil, de veleiro); e as imagens de abril de 2025 de um cruzeiro na Drake, em ABC News (1,95 mi), Inside Edition (991 mil) e
  The Weather Channel (980 mil).
- **A The Ocean Race** explica as ondas em 2:47 (337 mil, 2023).
- **Dos canais de geografia de referência** (RealLifeLore, Geography by Geoff, Atlas Pro, Wendover, Half as Interesting), nenhum vídeo sobre o
  tema apareceu na busca.

**Como os títulos nomeiam ou escondem o lugar:**
- **A maioria nomeia** (63 dos 84 citam Drake, Cabo Horn, Oceano Austral, Antártida ou Magalhães). "Drake Passage" é o termo de busca.
- **Os que escondem o lugar estão entre os maiores:** os dois do Scary Interesting ("The Most Dangerous Stretch of Water on Earth", "The Most
  Dangerous Ocean Crossing on Earth"), a família "Under South America" (Map Pack, Coggnize) e "600 Miles Across the Most Feared Ocean on Earth"
  (Gone with the Wynns). **O molde do Lucas funciona, e já foi usado, com a mesma palavra ("most dangerous").**
- **Nomeiam pela América do Sul**, não pela Drake, os títulos "Under South America": o espectador conhece o continente, não o nome da
  passagem. É o que a regra da embalagem pede.

**O que nenhuma descrição lida conta** (procurado por script nos 84 títulos, descrições e palavras-chave; `termos.py`):
- **o *Bounty***: 0 menções ("Bounty" e "Bligh"). Ressalva: o Scary Interesting do Cabo Horn fala de tripulações lutando "for months", e
  nenhum vídeo foi assistido. **Não provado** que ninguém conta;
- **os números do turismo**: a IAATO aparece em uma descrição (um vlog de cruzeiro); "100,000" em nenhuma. O ângulo "de cemitério a destino"
  existe: o The National Weather Desk (9,1 mil inscritos) o usa em dois vídeos de 12/2025 ("Yet today, thousands of tourists…"), com 88 e 279
  visualizações. **O ângulo não é inédito; o que falta na prateleira é ele num canal que o venda**;
- **a linha da IHO no meridiano do Cabo Horn**, o anel sem terra a 60°S, as ilhas Diego Ramírez: 0;
- **a corrente em números** (sverdrup) e a comparação com a Corrente do Golfo: 0 (a comparação com os rios está no Beyond Facts);
- **o relatório oficial do *Viking Polaris*** (NSIA): 0; os clipes de jornal dizem "rogue wave".

---

## 2 · Os fatos principais

Legenda do status: **confirmado** (lido na fonte primária ou acadêmica); **em disputa** (fontes boas discordam); **não conferido** (não lido
na fonte primária, ou a fonte recusou); **confirmado como conta** (conta minha sobre dado lido; o cético deve refazer).

### 2.1 · Onde fica, a largura e a profundidade

| Fato | Valor | Fonte (URL) | Data da fonte | Status |
|---|---|---|---|---|
| A largura | "The passage has a width of roughly 800 km" (~497 mi); "the region of narrowest constriction of the ACC" | Meredith et al., "Sustained monitoring of the Southern Ocean at Drake Passage: past achievements and future priorities", *Reviews of Geophysics* 49, RG4005, DOI 10.1029/2010RG000348, §1, ¶[3], PDF no NORA: https://nora.nerc.ac.uk/id/eprint/16227 | 02/12/2011 | **confirmado** |
| A largura, de novo | "an 800-kilometer passage between Cape Horn and the South Shetland Islands of Antarctica" | E. Underwood, *Eos* 97, DOI 10.1029/2016EO064319: https://eos.org/research-spotlights/notorious-ocean-current-is-far-stronger-than-previously-thought | 27/12/2016 | **confirmado** (AGU) |
| A menor largura, medida | **813 km = 505 mi** (439 mi náuticas), entre (55,914°S, 67,090°W), nas ilhas ao lado do Horn, e (62,469°S, 60,802°W), a ilha Livingston, nas Shetland do Sul | conta minha: Vincenty no WGS84 sobre o Natural Earth 10m `admin_1` da máquina (`drake_geo.py`) | 24/10/2026 | **confirmado como conta**. O NE 10m não tem a ilha Hornos inteira nem as Diego Ramírez: da estação do Cabo de Hornos (abaixo) dá 812 km = 505 mi |
| O ponto da Antártida mais perto | uma ilha das **Shetland do Sul** (Livingston), não a península | a mesma conta | 24/10/2026 | **confirmado como conta** |
| O "600 miles" dos concorrentes | de Ushuaia até a terra antártica mais perto: **959 km = 596 mi**; a 12 nós, 43 h; a 15 nós, 35 h | conta minha (Ushuaia do NE `populated_places`) | 24/10/2026 | **confirmado como conta**. É a travessia do turista, não a largura |
| O Cabo Horn | estação "Cabo de Hornos" da Armada do Chile: **55,970°S, 67,288°W**, 214 m | Dirección Meteorológica de Chile, ficha 550002: https://climatologia.meteochile.gob.cl/application/informacion/fichaDeEstacion/550002 | lida em 24/10/2026 | **confirmado** (é a estação, perto do cabo, não a ponta do cabo) |
| O Horn não é o ponto mais ao sul da América do Sul | as ilhas **Diego Ramírez**, estação a **56,506°S, 68,729°W**: **107 km = 67 mi** a sudoeste da do Horn, e 493 mi da Antártida (mais perto que o Horn) | meteochile, ficha 560002: https://climatologia.meteochile.gob.cl/application/informacion/fichaDeEstacion/560002; contas minhas (`drake_dist.py`) | lida em 24/10/2026 | **confirmado**. E no continente a ponta é o Cabo Froward (a The Traveler, 292 mil, já diz isso) |
| A profundidade média | **~3.570 m = 11.700 ft** (mediana 3.727 m); 89 % mais fundo que 3.000 m, 22 % mais fundo que 4.000 m | conta minha: ETOPO1 (NOAA NCEI), grade de 0,25° numa caixa de 68°W a 57°W e 56°S a 61,5°S (1.035 pontos), pelo ImageServer público `gis.ngdc.noaa.gov` (`drake_grade.py`) | 24/10/2026 | **confirmado como conta**. A caixa é minha, não um limite oficial. A Britannica (não lida, 403) dá ~3.400 m |
| O mais fundo | **5.221 m = 17.100 ft**, a 61°S, 58,5°W (perto das Shetland do Sul); na linha da menor largura, **4.731 m = 15.500 ft** | a mesma conta (`drake_prof.py`, `drake_grade.py`) | 24/10/2026 | **confirmado como conta** (ETOPO1 é de 2009, a 1 minuto de arco; o GEBCO dá o número fino) |
| O degrau ao lado do Horn | a sudoeste do cabo, "the ocean floor rises sharply from 4,020 meters (13,200 feet) to 100 meters (330 feet)" em poucos quilômetros, e isso, com os ventos de oeste, "pushes up massive waves with frightening regularity" | NASA Earth Observatory, "Cape Horn: A Mariner’s Nightmare" (Adam Voiland; imagem Landsat 8 de 12/07/2014): https://science.nasa.gov/earth/earth-observatory/cape-horn-a-mariners-nightmare-91472/ | 24/12/2017 | **confirmado** (NASA) |
| A dorsal no meio | a Zona de Fratura Shackleton "occupies a central position in the Drake Passage" e "rises several hundreds to thousands of metres above the surrounding seafloor" | Bohoyo et al., *Bathymetry and Geological Setting of the Drake Passage*, BAS GEOMAP 2, folha 7 (BAS/IGME, 1:1.500.000), pela SCAR: https://scar.org/?p=3539 | 12/2016 | **confirmado** |

### 2.2 · A Corrente Circumpolar Antártica

| Fato | Valor | Fonte | Data | Status |
|---|---|---|---|---|
| O que ela é | "the only current to circumnavigate the globe"; "the largest current system in the world"; corre para leste ("the strong eastward flow of the ACC"), possível porque há "zonally unblocked latitudes in the Southern Ocean" | Meredith et al. 2011, §1, ¶[2] | 2011 | **confirmado** |
| O volume, a medida mais recente | **173,3 Sv** (45,6 ± 8,9 Sv da parte que não muda com a profundidade + 127,7 Sv), com fundeios de 2007 a 2011 (cDrake): "30% larger than the canonical value" | Donohue, Tracey, Watts, Chidichimo & Chereskin, *Geophysical Research Letters* 43(22):11760–11767, DOI 10.1002/2016GL070319, resumo no repositório da URI (CC BY-NC-ND 4.0): https://digitalcommons.uri.edu/gsofacpubs/1235 | 2016 | **confirmado** pelo resumo (o PDF deu 403) |
| O valor clássico | "A canonical value of 134 ± 11.2 Sv was quoted by Whitworth and Peterson [1985]" (ISOS) | Meredith et al. 2011, ¶[57], p. 13 | 2011 | **confirmado** |
| O outro programa | DRAKE: 141 Sv | pela busca (Xu et al. 2020, NORA; o PDF passou de 10 MB e não abriu) | 2020 | **não conferido** |
| **O volume, então** | **de 134 a 173 Sv**, conforme o programa | as três acima | 1985–2016 | **em disputa**: a fala diz "between about 130 and 170 million cubic meters a second" ou dá uma medida com o nome dela |
| A primeira medida | Clowes (1933), com os dados das expedições *Discovery* de 1929–1930: 110 Sv | Meredith et al. 2011, ¶[15] | 2011 | **confirmado** |
| Contra os rios do mundo | os rios despejam **37.288 ± 662 km³ por ano** = **1,18 Sv**; a corrente é **113 a 147 vezes** isso | Dai & Trenberth, *Journal of Hydrometeorology* 3(6):660–687, DOI 10.1175/1525-7541(2002)003<0660:EOFDFC>2.0.CO;2, resumo na UCAR: https://impacts.ucar.edu/en/publications/estimates-of-freshwater-discharge-from-continents-latitudinal-and/; a razão é conta minha | 2002 | **confirmado como conta**. "More than 100 times all the world's rivers" se sustenta nas três medidas |
| Contra a Corrente do Golfo | a Corrente da Flórida leva **32,1 ± 0,2 Sv** (Meinen et al. 2010); a do Golfo cresce para "about 94 Sv near Cape Hatteras" e "at least 150Sv near 60°W" | Heiderich & Todd, "Along-Stream Evolution of Gulf Stream Volume Transport", *J. Phys. Oceanogr.* 50(8):2251, DOI 10.1175/JPO-D-19-0303.1, no repositório da NOAA: https://repository.library.noaa.gov/view/noaa/27453 | 2020 | **confirmado**. A corrente austral é **4 a 5 vezes a da Flórida**, mas **do tamanho da do Golfo no auge** (0,9 a 1,2 vez): "five times the Gulf Stream" só vale contra a Flórida |
| A Frente Polar | "generally located between 58°S and 59°S" na Drake | Meredith et al. 2011, ¶[91] | 2011 | **confirmado** |
| A abertura da passagem | rasa no Eoceno Inferior (~50 milhões de anos), funda por volta de 34–30 milhões (Livermore et al. 2005); "The precise timing of the opening of Drake Passage remains controversial" | Meredith et al. 2011, ¶[3] | 2011 | **em disputa** |
| Se ela congelou a Antártida | a ideia antiga: a glaciação "has hitherto been thought to result from the tectonic opening of Southern Ocean gateways"; o modelo deles: "the opening of Southern Ocean gateways plays a secondary role", e o CO₂ que caiu é a causa | DeConto & Pollard, *Nature* 421:245–249, DOI 10.1038/nature01290, resumo na Penn State: https://pure.psu.edu/en/publications/rapid-cenozoic-glaciation-of-antarctica-induced-by-declining-atmo/ | 2003 | **em disputa**: o vídeo atribui as duas ideias, nunca "the Drake Passage froze Antarctica" |
| O anel sem terra | "The region around latitude 60 south is the only part of the Earth where the ocean can flow all the way around the world" sem obstrução de terra | NASA SVS 3881, "Thermohaline Circulation on a Flat Map": https://svs.gsfc.nasa.gov/3881/ | 09/12/2011 | **confirmado**. Na minha conta (NE 10m, passo 0,05°), de **59,5°S a 60,5°S** nenhuma terra cruza a volta inteira; as ilhas pequenas que o NE 10m não tem podem mudar a borda |

### 2.3 · As ondas e o vento, e por quê

| Fato | Valor | Fonte | Data | Status |
|---|---|---|---|---|
| O mar mais bravo do planeta | "the Southern Ocean is consistently the roughest ocean on earth" | Young, "Seasonal variability of the global ocean wind and wave climate", *Int. J. Climatology* 19(9):931–950, resumo na ANU: https://researchportalplus.anu.edu.au/en/publications/seasonal-variability-of-the-global-ocean-wind-and-wave-climate/ | 1999 | **confirmado** (o PDF deu 403) |
| **Por quê, segundo ele** | "this is mainly caused by consistent high wind speeds", "rather than the extended westerly fetch which exists" | o mesmo resumo | 1999 | **confirmado**. **Contraria a explicação popular** ("no land, so the waves grow forever"): a falta de terra explica a corrente e o vento sem obstáculo; a onda vem, sobretudo, do vento forte e constante |
| O vento e a onda medidos do espaço | "the strongest winds (over 15 meters per second…) are found in the Southern Ocean" e "the highest waves occur in the Southern Ocean, where waves over 6 meters in height" (≈ 34 mph; 20 ft) | NASA/JPL, TOPEX/Poseidon, dados de 3 a 12/10/1992: https://sealevel.jpl.nasa.gov/news/1125/wind-speeds-over-earths-oceans-wave-heights-in-earths-oceans | 01/06/1993 | **confirmado** (é um retrato de 10 dias, não uma média) |
| O recorde de onda | o maior "significant wave height" medido por boia: **19,0 m (62,3 ft)**, em 04/02/2013, no **Atlântico Norte** (59°07′N, 11°42′W) | WMO, Archive of Weather and Climate Extremes: https://wmo.int/asu-map?map=Wave_070 | lida em 24/10/2026 | **confirmado**. O recorde não é da Drake |
| A onda da Drake em número | **nenhuma estatística medida da Drake achada** em fonte primária. Os "60 ft", "65 ft" e "80 ft" dos concorrentes e dos sites de viagem não têm fonte | — | — | **não conferido** |
| O perigo que continua | no *Viking Polaris*, "a breaking wave" quebrou 7 janelas; 1 passageiro morreu e 8 se feriram; a NSIA diz que a Drake e áreas parecidas têm uma probabilidade de onda quebrando que "has to be taken into account" | NSIA (Noruega), Marine report 2023/06, "Report on marine casualty involving the cruise ship ‘Viking Polaris’ south-east of Cape Horn, 29 November 2022": https://nsia.no/Marine/Published-reports/2023-06 | 29/11/2023 (atualizado em 07/02/2024) | **confirmado**. O relatório diz "breaking wave", não "rogue wave" |

### 2.4 · A história

| Fato | Valor | Fonte | Data | Status |
|---|---|---|---|---|
| Hoces, 1525–1526 | a caravela *San Lesmes*, da expedição de Loaísa, teria sido levada ao sul por uma tempestade e visto o fim da terra; daí o nome espanhol "Mar de Hoces" | pela busca (Wikipedia; catálogo da Biblioteca Virtual de Defensa citando a RAH); a entrada da RAH não abriu | — | **não conferido**, e **em disputa** na própria historiografia espanhola (a busca achou uma fonte que diz que a passagem do Horn é "totalmente descartada") |
| Drake, 1578 | entrou no Pacífico em **6/9/1578**; no dia 7 "we were driven by a great storm"; depois "we were driven back to the southward of the Straits in 57 degrees and a tierce; in which height we came to an anchor among the islands" | Francis Pretty, *Sir Francis Drake's Famous Voyage Round the World* (na coleção de Hakluyt), Project Gutenberg #2991: https://www.gutenberg.org/cache/epub/2991/pg2991-images.html | 1589/1600; e-book atual | **confirmado**. **Drake não cruzou a passagem até a Antártida**: a tempestade o jogou para o sul, entre as ilhas, e ele inferiu o mar aberto. A latitude do texto (57°20′) fica ~94 mi ao sul da do Horn: os números de época erram |
| Schouten e Le Maire, 1616 | **29/01/1616**: "ending with a sharp point, which we called Cape Horn, it lieth under 57 degrees and 48. minutes"; no dia 30, "a strong stream that went westward, which assured us that we had an open way into the South sea" | *The Relation of a Wonderfull Voiage made by William Cornelison Schouten of Horne* (Londres, 1619), transcrição EarlyPrint/TCP A11585: https://distantreader.org/stacks/earlyprint/txt/A11585.txt | 1619 | **confirmado**. A latitude deles erra em ~127 mi (o cabo fica a 55°58′). Cuidado: a corrente que eles descrevem corre **para oeste**, ao contrário da circumpolar (Meredith 2011: "eastward flow"); pode ser corrente de costa ou maré. Não serve de prova da corrente |
| Por que "Horn" | o navio menor da viagem, o *Horn*, pegou fogo na limpeza do casco (o texto de 1619); o cabo leva o nome de Hoorn, a cidade de Schouten, que patrocinou a viagem | Schouten 1619 (o fogo); New Netherland Institute, Peter Douglas, "Cape Horn: How a Trading Monopoly…": https://newnetherlandinstitute.org/content/cape-horn-how-a-trading-monopoly-a-disenchanted-wealthy-merchant-and-two-dutch-explorers-put-it-on-the-map/ | 1619; sem data | **confirmado** o fogo; **em disputa leve** se o nome homenageia a cidade ou o navio (que tinha o nome da cidade): o vídeo diz "named after the Dutch town of Hoorn" |
| A linha entre os oceanos | "The Southern boundary line between the South Atlantic (32) and South Pacific (61) Oceans is the meridian of Cape Horn (67° 16’ W)", "from Tierra del Fuego to the Antarctic Continent"; e, numa nota, "These limits have not yet been officially accepted by Argentina and C[hile]" | IHO, *Limits of Oceans and Seas* (S-23), 3ª ed., cópia da VLIZ: https://www.vliz.be/imisdocs/publications/ocrd/76595.pdf | 1953 | **confirmado**. "Where the Atlantic meets the Pacific" é uma linha de convenção, que Chile e Argentina não aceitaram em 1953 |
| O Oceano Austral | o USBGN o reconhece "from the coast of Antarctica to the line of latitude at 60 degrees South"; proposto à IHO em 2000, "yet to be ratified" | NOAA Ocean Service, "How many oceans are there?": https://oceanservice.noaa.gov/facts/howmanyoceans.html | atualizada em 23/09/2026 | **confirmado**, e é **convenção**. Em 2023, a IHO pôs em votação o limite de 60°S (A3, PRO-3.3: "the Southern Ocean became an official ocean in 1937, but lost its official status in 1953"); **o resultado da votação não foi lido** |
| O *Bounty*, 1788 | "We had been thirty days in this tempestuous ocean"; "hard gales of westerly wind had continued without intermission"; em 21/4, a 58°31′S e 70°07′W, "near seven degrees to the eastward" do ponto mais a oeste que alcançara, em 9/4, "and hourly losing ground"; em **22/4/1788**, "I determined to bear away for the Cape of Good Hope" | William Bligh, *A Voyage to the South Sea* (Londres, 1792), Project Gutenberg #15411: https://www.gutenberg.org/files/15411/15411-h/15411-h.htm | 1792 | **confirmado** (fonte primária, do próprio comandante). Em 12 dias, o vento o empurrou ~248 mi para leste (conta minha, só a diferença de longitude que ele dá, medida na latitude de 21/4: o texto não dá a latitude de 9/4). **Em disputa fina**: a busca acha "about thirty days" numa carta de Bligh a Banks e "five Weeks" e "23 April" noutro texto dele; o livro diz 30 dias e 22/4 |
| O que o próprio Bligh dizia | "The passage round Cape Horn into the South Seas during the summer months has seldom been attended with difficulty"; "If we had been one month earlier… I doubt not but we should have effected our passage" | Bligh 1792 | 1792 | **confirmado**. O problema dele foi a **estação e a direção** (para oeste, contra o vento), não um mar intransponível |
| O Canal do Panamá | aberto em **15/08/1914**, com o *Ancon* | Autoridade do Canal do Panamá, "End Of The Construction": https://pancanal.com/en/end-of-the-construction/ | sem data | **confirmado** |
| O atalho, em milhas | Nova York–São Francisco: **13.135 milhas náuticas por Magalhães**, 5.262 pelo Panamá, **7.873 economizadas** (= 15.115, 6.055 e 9.060 mi) | Logan Marshall, *The Story of the Panama Canal* (1913), mapa "Trade Routes and Distances by Existing Lines and by the Panama Canal, 1913", na USF: https://etc.usf.edu/maps/pages/10400/10479/10479.htm | 1913 | **confirmado** como número de época; **não conferido** em órgão oficial (a ACP não dá esse número) |
| Os naufrágios | "Hundreds of ships have gone down near Cape Horn since Dutchman Willem Schouten" (1616) | NASA Earth Observatory, 24/12/2017 (acima) | 2017 | **confirmado** como frase da NASA, **sem contagem publicada** |
| "800 ships", "10,000 sailors", "20,000 sailors" | "800 ships" está em 5 descrições dos concorrentes (Beyond Facts, Bright Side, Infinite Insights, The Secret, Dark News); "10,000" marinheiros ou vidas, em 7 (Everything Explained, The National Weather Desk duas vezes, Beneath the Depths, Dark News, The Last Keeper, Kike Calvo); "20,000 sailors", em 3 (Bright Side, Infinite Insights, The Secret); e em sites de viagem, sem banco de dados nem autor | a busca não achou a origem | — | **não conferido**: **não usar** |

### 2.5 · A travessia de hoje

| Fato | Valor | Fonte | Data | Status |
|---|---|---|---|---|
| Quantos vão à Antártida | **122.072** visitantes na temporada 2023–24; **118.491** em 2024–25 ("Vessel and Deep Field") | IAATO, ATCM46 IP102 rev.1, apêndice 1: https://iaato.org/system/files/2025-01/ATCM46_ip102_rev1_e_IAATO-Overview-of-Antarctic-Vessel-Tourism-The-2023-24-Season-and-Preliminary-Estimates-for-2024-25.pdf; ATCM47 IP031: https://iaato.org/system/files?file=2025-07%2FATCM47_ip031_e.pdf | 2024; 2025 | **confirmado** |
| De navio, para a Península | 2023–24: 71.380 em 429 viagens (expedição) + 43.224 em 24 (cruzeiro sem desembarque) + 87 (iates) = **114.691**; mais 6.130 que voam numa perna (*air-cruise*, 91 viagens, 106 voos até a ilha Rei George) | IAATO, ATCM46 IP102, apêndice 1; a soma é minha | 2024 | **confirmado** (a soma, como conta) |
| De onde saem | "The vast majority of tourism voyages (98%) operate in the Antarctic Peninsula region" e "depart from Ushuaia, Argentina or, to a lesser extent, from other ports" | IAATO, ATCM46 IP102, §2.1 | 2024 | **confirmado** |
| **Quantos cruzam a Drake** | "a maioria dos 114.691" é inferência minha: a rota da Península sai de Ushuaia e atravessa a Drake; os cruzeiros sem desembarque também vão e voltam pelo sul do continente, mas a IAATO **não conta travessias** | inferência sobre a IAATO | — | **não conferido** como número: a fala diz "most of them across this water", nunca "115,000 people cross the Drake" |
| O voo que pula a Drake | "clients fly from Punta Arenas, Chile, to King George Island" (DAP) | IAATO, ATCM48 IP201: https://iaato.org/system/files?file=2026-05%2FATCM48_ip201_e.pdf | 04/05/2026 | **confirmado** |
| "Drake Shake" e "Drake Lake" | os apelidos do mar bravo e do calmo | os vlogs (`u7odHM27-1A`, `xTGdFhasFMY`) | — | gíria dos passageiros: o vídeo atribui ("passengers call it…") |

### 2.6 · A contradição que o vídeo pode vender

**O ângulo do canal** (`embalagem.md` §1.1): um lugar que todo mundo conhece e uma afirmação que contraria o que se pensa.

- **O que a prateleira diz:** "Ships Can't Pass Under South America" (Coggnize), "Why Ships Never Pass Under South America" (Bright Side), "Real
  Reason Ships Don't Pass Under South America" (Map Pack, 4,38 mi); "the deadliest open ocean a passenger ship is allowed to cross" (Beyond
  Facts).
- **O que as fontes dizem:**
  1. **Navios passam, e muitos:** uns 115 mil passageiros de navio na temporada 2023–24, em umas 470 viagens de navio (IAATO), quase todas
     pela ponta da América do Sul.
  2. **O que parou o veleiro foi a direção:** a corrente e o vento correm para leste (Meredith 2011; Bligh 1792). Quem ia para oeste, a vela,
     lutava contra os dois: o *Bounty* lutou 30 dias, perdeu ~248 mi em 12 dias e desistiu. O próprio Bligh escreveu que, no verão, a
     passagem "has seldom been attended with difficulty".
  3. **O mar não ficou mais calmo:** a NSIA, sobre 2022, diz que a onda que quebra é uma probabilidade na Drake. O motor, o casco e a previsão
     mudaram; o mar, não.
- **Se ela se sustenta:** **sim**, com três cuidados. (a) "Navios passam" é o turismo e a pesquisa, não o comércio: depois de 1914 o frete
  foi para o Panamá (o atalho de 1913, acima), e nenhuma fonte oficial lida diz que cargueiros voltaram ao Horn (a seca do Panamá de 2023
  desviou navios para Suez e o Cabo da Boa Esperança, pela EIA, não para o Horn). (b) A contradição não pode virar "é seguro": morreu gente em
  2022. (c) O *Bounty* é âncora, não o assunto: o motim é outro vídeo.
- **Mais duas viradas menores, para as camadas:** a onda é grande mais pelo vento constante que pela falta de terra (Young 1999); e "onde o
  Atlântico encontra o Pacífico" é uma linha de convenção (IHO 1953), que Chile e Argentina não aceitaram.

### 2.7 · O que NÃO afirmar

- **"The most dangerous passage in the world" como fato.** Nenhuma fonte primária ranqueia mares por perigo. Pode-se dizer "sailors have
  feared it for centuries" ou atribuir ("often called…"). E "most dangerous" está em 15 dos 84 títulos lidos.
- **"800 ships", "10,000 sailors", "20,000 sailors"** ou qualquer número de naufrágios e mortos: sem origem achada. A NASA diz "hundreds of
  ships" perto do Horn; é o máximo.
- **"60-foot waves" (ou 65, 80) como a onda da Drake.** Não há estatística da Drake lida. O recorde medido por boia é do Atlântico Norte (19 m,
  2013).
- **"Rogue wave" no *Viking Polaris*.** O relatório oficial diz "breaking wave".
- **"Drake discovered the Drake Passage" ou "Drake sailed through it".** A tempestade o empurrou para o sul, entre as ilhas; ele não cruzou até
  a Antártida. E Hoces (1525–1526) é reivindicação espanhola, não conferida.
- **"Cape Horn is the southern tip of South America".** É a ponta do arquipélago da Terra do Fogo, numa ilha. As Diego Ramírez ficam 67 mi mais
  ao sul, e no continente a ponta é o Cabo Froward.
- **"Where the Atlantic and the Pacific collide"** como fato do mar. É o meridiano de convenção da IHO (1953). O mar não muda ali.
- **"The ACC is five times the Gulf Stream".** Só contra a Corrente da Flórida (32 Sv); a do Golfo chega a 150 Sv ou mais perto de 60°W. E o
  volume da corrente austral está em disputa (134, 141 ou 173 Sv): a fala dá a faixa, ou uma medida com o nome.
- **"The Drake Passage froze Antarctica".** Está em disputa (DeConto & Pollard 2003 contra a ideia antiga).
- **"No ship can cross it" e "ships never pass under South America".** É o que o vídeo desmente.
- **"It's safe now".** É o que o vídeo não pode dizer.
- **"Antarctica is 600 miles away" como largura.** A menor largura é ~505 mi; os ~600 mi são de Ushuaia às Shetland do Sul.
- **"HMS Bounty"**: a Marinha a chamava "His Majesty's armed vessel Bounty" (as ordens no livro de Bligh). "The Bounty" é mais seguro.
- **"The first to round Cape Horn"** para Schouten e Le Maire sem a data: Drake esteve entre as ilhas em 1578, e Hoces é reivindicado.
  O que o texto de 1619 sustenta: eles deram o nome e acharam o caminho aberto em 29–30/01/1616.

---

## 3 · A imagem

**O gancho que prende** (`marca/identidade.md` §5): os primeiros 2–3 s na imagem real mais forte do lugar, em movimento (o voo do drone ou o
empurrão lento sobre a foto); o mapa logo depois, voando até o lugar; pelo menos duas imagens reais do lugar até a vinheta. **Aqui o lugar
tem rosto: o Cabo Horn**, um rochedo que se reconhece, fotografado em alta resolução. É a diferença para o vídeo 5.

| Fonte | O que tem | Licença, lida na origem | Resolução | Para o vídeo |
|---|---|---|---|---|
| **Wikimedia Commons**, categorias "Cape Horn" e "Drake Passage" (66 + 84 arquivos, pela API, 24/10/2026) | o cabo de perto e de longe, de navio: Liam Quinn, 27/01/2011 (`Cape Horn, Chile (6315565378).jpg`, `…(6315575532).jpg`); Jerzy Strzelecki, 2000 (`Cape Horn (js) 1.jpg`); amanderson2, 30/12/2019 (`Cape Horn Coral Princess.jpg`); Boris Kasimov, 15/03/2019 (`Cape horn (47369261772).jpg`) | **CC BY-SA 2.0** (Quinn), **CC BY 3.0** (Strzelecki), **CC BY 2.0** (amanderson2, Kasimov), pela `extmetadata` da API do Commons; **a página de cada arquivo não foi aberta**: o conferente relê | 5616×3744, 5557×3650, 5184×3888, 4032×2268 | **a abertura do gancho**: o empurrão lento sobre o Horn, com o crédito na tela. Acima de 4K na largura |
| Commons, foto da Marinha | o porta-aviões USS *Abraham Lincoln* "off Cape Horn, Chile, on 27 October 1990", de PH2 Dennis D. Taylor | **domínio público** (obra da Marinha dos EUA), pela API | 3000×2235 | "navios passam": um navio grande dobrando o Horn. Foto grande (1.600 px ou mais) que enche a tela 4K com 1,28 vez: tela cheia, pela régua da `identidade.md` §6 |
| Commons, foto da ISS | ISS011-E-12084, "View of the Drake Passage", 22/08/2005 | **domínio público** (ESRS/NASA JSC) | 3032×2008 | o mar da Drake visto do espaço; enche a tela com 1,27 vez |
| **NASA Earth Observatory** | "Cape Horn: A Mariner’s Nightmare": Landsat 8 OLI de 12/07/2014, o Horn e as ilhas Wollaston e Hermite | NASA: crédito "NASA Earth Observatory image by Jesse Allen, using Landsat data from the U.S. Geological Survey"; a NASA e o Landsat entram pelo `midia.md` §7.3 | JPEG de 11,53 MB (pixels não ditos) | o cabo de cima, para a passagem do real para o mapa |
| NASA Earth Observatory | "Tierra del Fuego and Cape Horn": ISS038-E-47389, 14/02/2014, Nikon D3, 80 mm | NASA JSC (ESRS), crédito da página | o JPEG da página tem 363 KB; o original da ISS não foi medido | a ponta do continente em dia limpo; o original se mede no `eol.jsc.nasa.gov` (que esgotou o tempo na checagem do vídeo 5) |
| NASA Earth Observatory | "Iceberg A-76A in the Drake Passage", Terra MODIS, 31/10/2022 | NASA (crédito da página) | não medida | o gelo que atravessa a passagem |
| **NASA SVS 30494**, "Simulated Sea Surface Speeds" | a simulação da velocidade da superfície do mar (MITgcm/ECCO), com um recorte da Drake | crédito pedido: "JPL"; NASA | o globo em **4096×2304**; o recorte da Drake, 1426×1426 | **a corrente em movimento**, em 4K: animação, não imagem real |
| NASA SVS 3881 | a circulação termohalina em mapa plano | crédito: "NASA/Goddard Space Flight Center Scientific Visualization Studio" | 2048×1024 | só a frase dos 60°S; o vídeo é pequeno |
| **B-roll de banco** (drone sobre o Cabo Horn; navio na Drake; mar bravo) | o voo de drone que a regra prefere | as licenças do `marca/midia.md` §2–3; caça só a pedido do Lucas | 4K | **o único caminho para o drone em 4K**. O rótulo diz "Cape Horn" só se a descrição do item disser (§2.7) |
| ZDF Terra X, no Commons | "Gefährliche Winde bei Kap Hoorn", 34 s | CC BY 4.0, pela API | 1920×1080 | **não entra**: é B-roll em HD, e o B-roll abaixo de 4K se recusa (`midia.md` §7.3), mesmo vindo do Commons |
| DVIDS | nenhum vídeo da Drake achado; há o USS *Tripoli* no Estreito de Magalhães (30/08/2020) | domínio público federal | não medida | só se o roteiro for a Magalhães |
| Programa antártico dos EUA (USAP Photo Library) | fotos dos navios de pesquisa na Drake | pelo resumo da busca: a maioria **CC BY-NC-ND 4.0** (não comercial, sem derivação); uma minoria em domínio público. **A página não abriu** (ENOTFOUND) | — | **não entra** a parte CC BY-NC-ND; a de domínio público, a conferir |
| NOAA Photo Library, AMLR (Cape Shirreff) | fotos do programa antártico da NOAA, com travessias da Drake nos relatórios | não lida item a item | — | a conferir, pela Sala |
| Five Deeps / outros documentários | — | não livres | — | não entram |
| **A base do mapa** | **GEBCO** (batimetria global, que inclui o IBCSO v2 ao sul de 50°S, pela documentação do GEBCO_2024, lida só pelo resumo da busca); o **IBCSO v2** sozinho, a 500 m | GEBCO: domínio público, citar a fonte, não navegar (termos lidos pela checagem do vídeo 5 em 24/10/2026; aceito em `identidade.md` §6). IBCSO v2: **CC BY 4.0** (PANGAEA, DOI 10.1594/PANGAEA.937574, lido em 24/10/2026), **fora da lista** da identidade | GEBCO 15″; IBCSO 500 m | o relevo do fundo: o degrau de 4.020 m a 100 m ao lado do Horn, a dorsal Shackleton, o fundo a 11.700 ft. **O relevo da MapTiler não tem o fundo do mar** (Sala, 24/10/2026). O IBCSO pede o ok do Lucas para entrar na lista |

**O que isto quer dizer para o gancho:**
- **Há imagem real e livre do lugar, acima de 4K na largura**: as fotos do Horn no Commons (CC BY e CC BY-SA, com crédito na tela) e o Landsat
  da NASA. Ela cumpre a regra pelo "empurrão lento sobre a foto".
- **O drone em 4K só vem de banco**, e pede a caça. A Sala pergunta ao Lucas qual abre o vídeo: a foto do Commons, com crédito, ou o drone de
  banco, se a caça achar o Horn descrito pelo nome.
- **O mapa é a explicação**: o globo, o anel de mar a 60°S, a passagem de ~505 mi demarcada entre o Horn e as Shetland do Sul, a linha da IHO
  no meridiano do Horn, a corrente correndo para leste e o *Bounty* empurrado para trás. A batimetria do GEBCO em relevo 3D **nunca foi
  provada no canal**: fica para o mapista, antes do roteiro.

---

## 4 · A avaliação

**Nota: 6,5. De pé com ajuste.** Na régua das pautas ("na dúvida, derrube"): acima do vídeo 5 (6,0 no pesquisador, 5,5 no cético) e abaixo do
Peru confirmado (7,5).

**Os pontos fortes:**
1. **A demanda é provada e atual**, como em nenhuma pauta anterior: oito vídeos acima de 1 mi em 2025–2026, e um canal de 96 mil inscritos
   com 6,9 mi.
2. **Os fatos do centro estão em fonte primária**: o livro do Bligh (1792), o relato de Schouten (1619), o de Pretty sobre Drake, a IHO de 1953,
   a NOAA sobre os 60°S, a IAATO, a NSIA, Meredith 2011 e Donohue 2016.
3. **A contradição é concreta e contraria o título de 4,4 mi**: "navios não passam" contra uns 115 mil passageiros de navio numa temporada.
   E tem personagem: o *Bounty*, 30 dias contra o vento.
4. **Há imagem real do lugar** (o Horn no Commons e na NASA) e um mapa que explica (o anel a 60°S, a linha da IHO, a corrente). Os
   concorrentes lidos não descrevem esse mapa.
5. **A ligação com o vídeo 3**: o Canal do Panamá, em 1914, tirou o frete do Horn.

**Os riscos:**
1. **A saturação.** O primeiro título do Lucas é quase o do Scary Interesting de 6 semanas atrás (3,43 mi), e o Epic Adventure Archives fez
   quatro vídeos do tema em um ano, com Drake, Hoces, Schouten e Le Maire nas descrições. A história da rota e dos nomes não é nossa.
2. **O ineditismo não está provado.** Nenhum vídeo foi assistido. O *Bounty* não aparece em nenhuma descrição, mas o Cabo Horn do Scary
   Interesting fala de "crews fighting storms for months". O cético deve procurar o *Bounty* nos concorrentes.
3. **A voz do canal tira o espetáculo**: sem "800 ships", sem "60-foot waves", sem "the most dangerous". O concorrente vende o medo; o canal
   vende o fato. Funciona se a contradição vier nos primeiros 15 s.
4. **A contradição tem fio**: "navios passam" é turismo e pesquisa, não comércio, e não pode virar "é seguro". O número de quem cruza a Drake
   é inferência sobre a IAATO.
5. **Disputas finas**: o volume da corrente (134 a 173 Sv), a abertura da passagem e a glaciação, Hoces, o nome do Horn, 22 ou 23/4/1788.

**O que o roteiro precisa provar:**
- o *Bounty* com o livro na voz ("Captain Bligh wrote…"), e a data de 22/4/1788 (ou só "in April 1788");
- a largura de ~505 mi como conta, entre o Horn e as Shetland do Sul (o cético refaz), e a diferença para os "600 mi" de Ushuaia;
- a IAATO com a temporada e o tipo de viagem, e a frase "most of them across this water" como inferência;
- a corrente pela faixa de medidas, com o nome de cada programa;
- a NSIA, com "breaking wave";
- **antes do roteiro, a ler**: o texto do Donohue 2016 e o do Young 1999 (os dois deram 403: pela Sala), o resultado da votação da IHO de 2023
  sobre o Oceano Austral, a fonte espanhola sobre Hoces, a página de cada foto do Commons, o tamanho do original da ISS038-E-47389; e **ver** o
  Cabo Horn do Scary Interesting (`Wal6HjCqn8s`) e a Drake do Epic Adventure Archives (`U9zUvCakjic`), para não repetir a estrutura.

**Títulos de trabalho** (para o redator e o teste de leitores, `embalagem.md` §2 e §4):
- *The World's Most Dangerous Ocean Passage* (40), o primeiro do Lucas: **colide** com *"The Most Dangerous Ocean Crossing on Earth"* (Scary
  Interesting, 11/09/2026, 3,43 mi) e com outros 14 títulos lidos que têm "most dangerous". E afirma um superlativo que nenhuma fonte sustenta. **Cai.**
- *Why This Place Is Sailors' Greatest Challenge* (45), o segundo do Lucas: **sem colisão direta** na busca (o mais perto é *"The Sailor's
  Everest"*, da The Ocean Race, 41 mil, 2023). Esconde o lugar, como a regra pede, mas não nomeia nada que o espectador conhece (nem a América do
  Sul, nem o Horn): corre o risco do título vago (`embalagem.md` §1, "Os que falharam… são vagos"). "Greatest" é superlativo. O núcleo se paga
  nas 3 primeiras frases só se o gancho disser qual desafio.
- *Ships DO Pass Under South America. 100,000 People a Year* (56): "Fato. Virada.", contra a família de 4,4 mi. Nomeia o que se conhece (a
  América do Sul) e guarda o lugar (a Drake). **Sem colisão** na busca. Paga-se na frase 4 do esboço. Cuidado: "100,000 a year" é a soma da
  IAATO (118 a 122 mil visitantes por temporada; ~115 mil de navio em 2023–24), e "pass under" é a gíria dos concorrentes.
- *Why Cruise Ships Now Cross the Sea That Stopped the Bounty* (58): "Why + paradoxo concreto", com o *Bounty* como o nome que se conhece.
  **Sem colisão** na busca ("Bounty" não aparece em nenhum título achado). Risco: ler como vídeo do motim.

**A miniatura** (`embalagem.md` §1.1 e §3): o mapa protagonista, o sul da América do Sul e a Península em satélite, a passagem acesa em
`--destaque` entre o Horn e as Shetland do Sul, uma seta curva do *Bounty* voltando para leste, e o texto curto na caixa escura: "SHIPS DO
PASS" (com o título 3) ou "30 DAYS. GAVE UP." (com o título 4). O número não briga com o título.

**O gancho** (esboço; 95 palavras com a assinatura, 77 sem ela; ~36 s a 160 palavras/min; a primeira frase pelo `voz.md`, sobre o lugar que a
imagem de abertura mostra, o Cabo Horn):

> In April 1788, the Bounty spent thirty days trying to sail west past Cape Horn, then gave up. *[Bligh, 1792: "thirty days", "bear away for
> the Cape of Good Hope", 22/4/1788]* South of this rock, about 500 miles of open ocean run to Antarctica, and no land stops the wind. *[813 km
> = 505 mi, conta minha sobre o Natural Earth; Meredith 2011, ~800 km; NASA SVS 3881, os 60°S]* But ships don't avoid it. In the 2023–24
> season, about 115,000 people sailed to Antarctica, most of them across this water. *[IAATO, ATCM46 IP102: 114.691 de navio na Península; "most
> of them across" é inferência minha]* In November 2022, one breaking wave here shattered seven cruise-ship windows and killed a passenger.
> *[NSIA 2023/06, 29/11/2022]* So what stopped the Bounty? You're at Alpha Point, and this is where the story of the sea below Cape Horn
> begins.

(Os números do gancho levam o dono no crédito da tela, como pede o `voz.md` ("Número sem dono"): "Source: IAATO, 2023–24 season", "Source:
Norwegian Safety Investigation Authority", "Bligh, *A Voyage to the South Sea*, 1792". A contradição cai por volta dos 14 s, na frase 3, dentro
dos 15 s do `voz.md`; a imagem: o Horn no Commons, o mapa voando até a passagem com os 505 mi contando, um navio de
cruzeiro de banco, o mar da NSIA sem imagem própria.)

**As camadas (10 a 15 min):**
- **onde:** o Horn numa ilha, as Diego Ramírez, os ~505 mi até as Shetland do Sul, o anel de mar a 60°S, a linha da IHO no meridiano do Horn;
- **por que o mar é assim:** o vento de oeste, constante (Young 1999), a corrente que corre para leste com 113 a 147 vezes os rios do mundo, o
  degrau de 4.020 m a 100 m ao lado do Horn, a Frente Polar;
- **quem passou:** Hoces (reivindicado), Drake jogado para o sul em 1578, Schouten e Le Maire batizando o Horn em 29/01/1616 (com a latitude
  errada em ~127 mi), o *Bounty* em 1788 e o que o próprio Bligh disse do verão;
- **o que mudou:** o Panamá em 1914 (o vídeo 3), o fim da vela, o motor;
- **hoje:** os ~115 mil de navio por temporada, Ushuaia a ~596 mi, a NSIA e o *Viking Polaris*;
- **o fecho** (`voz.md`, "Como ele fecha"): sem repetir a pergunta e sem lista; numa cena, por exemplo a ponte de um navio de cruzeiro passando
  o meridiano do Horn, a linha que só existe no mapa.

---

## Apêndice · As contas e as leituras

**Os scripts** (no rascunho da sessão, fora do repositório: `C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/f42bc036-0fdc-43ca-af3a-3895cd6017bd/scratchpad/v6/`):
- `watch_lote.py` (as páginas `/watch`, 4 s entre pedidos) → `watch.jsonl`; `tabela_pt.py`, `contagem.py` e `termos.py` (a tabela, as
  contagens dos títulos e os termos nas descrições);
- `drake_geo.py`: a menor largura (haversine em todos os pares de vértices do NE 10m `admin_1`, Chile e Argentina contra a Antártida, e Vincenty
  no WGS84 sobre o par refinado), a ponta sul do NE e as faixas de latitude sem terra de 50°S a 70°S (passo de 0,05°);
- `drake_dist.py`: Cabo de Hornos ↔ Diego Ramírez (as estações da meteochile) e Ushuaia, Horn e Diego Ramírez até a Antártida;
- `drake_prof.py` e `drake_grade.py`: o ETOPO1 (NOAA NCEI, 1 minuto de arco, domínio público) por `getSamples` no ImageServer
  `gis.ngdc.noaa.gov/arcgis/rest/services/DEM_mosaics/ETOPO1_bedrock` (o `robots.txt` do host veta só `/arcgiscache`, `/arcgisinput`,
  `/arcgisjobs` e `/arcgisoutput`); quatro pedidos, um por vez, 4 s entre eles: o perfil de 200 pontos na menor largura, a grade de 1.035 pontos
  e o meridiano do Horn de 56°S a 62°S (média de 3.000 m, mais fundo 4.362 m);
- `contas.py`: as conversões, as razões (rios, Flórida, Golfo), o terreno que o *Bounty* perdeu e o erro das latitudes de 1578 e 1616;
- `commons_cat.py` e `commons_info.py`: a API do MediaWiki, só metadados, com o User-Agent do canal;
- `pdf_grep.py`: o texto dos PDFs que o WebFetch guardou (Meredith 2011, IAATO, Heiderich & Todd 2020, IHO 1953 e 2023), por PyMuPDF.

**As fontes lidas** (todas citadas nas tabelas): Meredith et al. 2011 (texto inteiro); Donohue et al. 2016 (resumo); *Eos* 2016; Dai &
Trenberth 2002 (resumo); Heiderich & Todd 2020 (texto inteiro); Young 1999 (resumo); NASA/JPL 1993; NASA SVS 3881 e 30494; NASA Earth
Observatory (Cape Horn 2017, Tierra del Fuego 2014); DeConto & Pollard 2003 (resumo); BAS/SCAR, mapa da Drake 2016 (página); Pretty (Gutenberg
#2991, texto inteiro); Schouten 1619 (EarlyPrint A11585, texto inteiro); Bligh 1792 (Gutenberg #15411, texto inteiro); New Netherland
Institute; ACP; mapa de Marshall 1913 (USF); NSIA 2023/06; IAATO ATCM46 IP102, ATCM47 IP031 e ATCM48 IP201; NOAA Ocean Service (howmanyoceans);
IHO S-23 1953 (VLIZ) e IHO A3 2023 PRO-3.3; WMO (Wave_070); meteochile 550002 e 560002; PANGAEA (IBCSO v2); Commons (API).

---

## O cético (24/10/2026)

**Veredito: de pé com ajuste, nota 5,5** (a checagem deu 6,5). Os fatos de fonte primária ficam de pé, relidos um por um: o livro do
Bligh, a NSIA, a IAATO, Meredith 2011, Donohue 2016, a IHO de 1953 e a NASA; a largura, refeita com código meu, dá os mesmos **505 mi**.
Caem três coisas que a checagem vende:
- **o ponto forte 3**, a "contradição concreta que só um título achado usa": que navios cruzam a Drake é o assunto inteiro do Beyond Facts
  (01/05/2026, 691 mil) e capítulo de pelo menos cinco outros concorrentes; e dois dos três vídeos mais vistos do nicho são vlogs de
  cruzeiro;
- **o número do gancho**: a temporada mais recente da IAATO (2025–26) dá **98.806 de navio**, não 115 mil, e com ele cai o título 3;
- **o *Bounty* como furo**: fica de pé como fato, mas é história conhecida fora do YouTube, e não é o caso extremo.

A saturação é maior que a medida: **11 vídeos acima de 1 mi em 2025–26**, não 8; o Epic Adventure Archives tem **cinco** vídeos do tema, não
quatro; e as duas fotos do Horn que a checagem põe na abertura já estão no vídeo de 3,4 mi do Scary Interesting. **O achado que pode salvar a
pauta é de 3 semanas atrás**: em agosto e setembro de 2026, o tráfego no Estreito de Magalhães subiu mais de 70 % sobre 2025, com o Canal do
Panamá na seca (Bloomberg, com dados da Marinha do Chile). Os navios voltaram a passar sob a América do Sul, e pelo atalho que evita o Horn.

### O método e os limites

- WebSearch e WebFetch. Os textos das fontes (HTML e PDF, nenhuma mídia), baixados por script, um pedido por vez, com o User-Agent do
  canal: Gutenberg (Bligh, Pretty), EarlyPrint (Schouten), IAATO (ATCM46 IP102, ATCM47 IP031, ATCM48 IP200 e IP194), NSIA (o relatório do
  *Viking Polaris*, 91 páginas), NORA (Meredith 2011), VLIZ (IHO 1953) e IHO (as decisões da Assembleia de 2023).
- **37 páginas `/watch`** lidas por script (`watch_cetico.py`), **uma por vez, 4 s entre pedidos**, com o User-Agent do canal: 13 dos
  concorrentes que pesam na nota, relidos, e **24 que a checagem não tinha**. Nem `/results` nem `/api/`: **nenhum vídeo assistido, nenhuma
  legenda lida**, como na checagem. "Nenhuma descrição conta" continua não querendo dizer "nenhum vídeo conta".
- O Commons, só pela API do MediaWiki (metadados), 2 s entre pedidos; nada baixado.
- As contas, em scripts meus, no rascunho, fora do repositório
  (`C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/f42bc036-0fdc-43ca-af3a-3895cd6017bd/scratchpad/v6-cetico/`):
  `largura.py` (Vincenty no WGS84, escrito à parte do da checagem, sobre o Natural Earth 10m da máquina, com haversine para a triagem),
  `contas_cetico.py` (IAATO, rios, conversões, dias do Bligh), `termos_cetico.py` (os termos nas 107 descrições lidas pelos dois) e
  `commons_cetico.py`.
- **Nenhum site recusou nesta rodada.** O IP200 da ATCM48, que deu 404 à checagem, abre como `ATCM48_ip200_rev1_e.pdf`
  (https://iaato.org/system/files?file=2026-05/ATCM48_ip200_rev1_e.pdf), pelo link da página "Information papers archive" da IAATO.
- Não refiz o ETOPO1 (as profundidades), o Hoces, o mapa de Marshall (1913) nem a ACP: ficam como a checagem os deixou.

### 1 · Os fatos, um por um

| Fato da checagem | Veredito | Fonte (lida por mim em 24/10/2026) | O porquê |
|---|---|---|---|
| A largura, "roughly 800 km", e a menor, **505 mi** | **de pé** | Meredith et al. 2011, PDF do NORA, ¶[3]: "The passage has a width of roughly 800 km"; a conta minha (`largura.py`) | **813,0 km = 505,2 mi**, entre os mesmos dois pontos da checagem. Da ponta do Horn (55°58′48″S, 67°17′21″W), 504,1 mi; da estação da meteochile, 504,7 mi. O ponto antártico mais perto (62,469°S, 60,802°W) é a ponta noroeste da ilha Livingston, perto do Cabo Shirreff: "Antarctica", na fala, é a das ilhas, não a do continente |
| Ushuaia, 596 mi; Diego Ramírez, 67 mi e 493 mi | **de pé** | a mesma conta | 595,7 mi; 66,8 mi; 493,2 mi |
| A corrente: 134 a 173 Sv, e **113 a 147 vezes os rios** | **de pé** | Meredith 2011, ¶[57]: "A canonical value of 134 ± 11.2 Sv"; Donohue et al. 2016, resumo na URI: "a total transport through Drake Passage of 173.3 Sv", "30% larger than the canonical value"; Dai & Trenberth 2002, resumo na UCAR: "37 288 ± 662 km3 yr-1" | 37.288 km³/ano = 1,182 Sv; 134 Sv = 113×; 173,3 Sv = 147×. O Clowes de 1933 (110 Sv) daria 93×: "more than 100 times" vale nas medidas modernas. **E já é do Beyond Facts**: "a current carrying 150 times more water than every river on Earth combined" |
| Contra a Corrente do Golfo: 94 Sv em Hatteras, 150 Sv a 60°W | **ajustar** | Heiderich & Todd 2020, resumo no repositório da NOAA, e o texto que a checagem guardou | a medida **deles** (acima de 1.000 m) é 32,9 Sv na Flórida, 57,3 em Hatteras e 75,6 na Line W (68°W). Os 94 e os 150 Sv são da introdução, **citando** Leaman 1989 e Hogg 1992 (profundidade inteira, com recirculação). A razão vai de 1 a 5 vezes, conforme o lugar e o método: a Corrente do Golfo fica fora da fala |
| O mar mais bravo por causa do vento, não do *fetch* (Young 1999) | **de pé**, com ressalva | resumo na ANU: "the Southern Ocean is consistently the roughest ocean on earth"; "mainly caused by consistent high wind speeds, rather than the extended westerly fetch which exists" | é o Oceano Austral inteiro, de satélite, não a Drake. **E contraria um concorrente**: o Underwater Earth 4K (30/06/2026) diz "the long ocean fetch that builds massive waves". O texto (403 à checagem) continua a ler antes do roteiro |
| "Nenhuma estatística medida da onda da Drake" (§2.3) | **ajustar: há número oficial** | NSIA, relatório 2023/06, PDF, §1.4–1.5: pelo *Admiralty Sailing Directions, Antarctic Pilot* (9ª ed., 2019), a oeste do Horn as ondas ficam "mostly between 2.3 and 6.2 metres", e o mar calmo, de 0 a 2 % do tempo; vento de força 7 ou mais em 25–30 % do tempo em novembro, na área do acidente; "The wave data available for this area are very limited"; a ponte estimou a onda do *Viking Polaris* em "about 12–14 metres" | **8 a 20 ft** na maior parte do tempo, e **39 a 46 ft** na onda que matou, estimada pela ponte (a previsão daquela noite: 20 ft de altura significativa, máxima de 33 ft; vento medido a bordo de 60 a 87 mph). Contra os "60 ft" do Scary Interesting (`VUKE6x54MlU`) e os "80-foot waves" do Infographics Show, o número oficial é bem menor, e **nenhuma descrição lida o usa**. Com o dono na voz: "the Norwegian investigators, citing the British Admiralty" |
| O *Viking Polaris*: 7 janelas, 1 morto, 8 feridos, "breaking wave" | **de pé** | o mesmo relatório: "seven stateroom windows", "One passenger died and eight were injured" (o aviso inicial dizia quatro), "hit by a breaking wave just south-east of Cape Horn" enquanto "crossing the Drake Passage"; a posição, no anexo: S56°31,896′, W66°08,197′ | conta minha: **59 mi a sudeste** da estação do Horn, e a leste do meridiano do Horn (pela linha da IHO de 1953, no Atlântico Sul). O "here" do gancho, sobre a foto do Horn, passa |
| O *Bounty*: 30 dias, desistiu em 22/4/1788 | **de pé, com dois consertos** | Bligh 1792, Gutenberg #15411: em 23/3, "we discovered the coast of Tierra del Fuego"; em 21/4, "We had been thirty days in this tempestuous ocean"; em 22/4, "I determined to bear away for the Cape of Good Hope"; em 9/4, "at noon we were in latitude 59 degrees 31 minutes south and our longitude 76 degrees 58 minutes west, which is farther to the west than we had yet been" | (a) **o livro dá a latitude de 9/4** (a checagem diz que não): com as duas posições, o vento o levou **254 mi** para leste em 12 dias, não 248. (b) **O *Bounty* passou do Horn.** Em 9/4 estava 9,7° de longitude a oeste do meridiano do Horn (~341 mi), e em 21/4, quando desistiu, ainda 2,85° a oeste: o que faltou foi oeste bastante para subir ao Pacífico. "Trying to sail west past Cape Horn" erra o fato; o certo é "fighting to get around Cape Horn". E o lugar onde ele desistiu (58°31′S, 70°07′W) fica a sudoeste do cabo, no Pacífico da IHO: "the sea that stopped the Bounty" é o mar do Horn |
| O que o Bligh dizia do verão | **de pé** | o mesmo livro: "has seldom been attended with difficulty"; "If we had been one month earlier, or perhaps less" | — |
| **~115 mil de navio** na temporada 2023–24 | **ajustar: a temporada é velha** | IAATO, ATCM48 IP200 rev.1 (09/05/2026), apêndice 1, e IP194 rev.1: em 2025–26, 71.530 (tradicional, Península, 401 viagens) + 59 (iates) + 27.217 (cruzeiro sem desembarque, 15 viagens) = **98.806 de navio**; *air-cruise*, 11.764 (126 viagens); total, 113.518 | a checagem usou a temporada de dois anos atrás, a mais alta. De navio, caiu 14 % (o cruzeiro sem desembarque, −37 %); **o *air-cruise*, que voa por cima da Drake numa das pernas, quase dobrou (+92 %)**. A fala: "In the 2025–26 season, nearly 100,000 people sailed to the Antarctic Peninsula", com o dono; "most of them across this water" continua inferência. (O IP194 dá 73.372 de *seaborne*; o IP200 soma 73.288: 84 de diferença, sem efeito) |
| A linha da IHO no meridiano do Horn (1953) | **de pé** | IHO S-23, 3ª ed., cópia da VLIZ: "The Southern boundary line between the South Atlantic (32) and South Pacific (61) Oceans is the meridian of Cape Horn (67° 16’ W)" | a nota "(*) These limits have not yet been officially accepted by Argentina and Chile" fecha o item inteiro (o meridiano e a linha de Magalhães), não só o meridiano: a fala não diz que eles recusaram "a linha do Horn" |
| O Oceano Austral, "yet to be ratified" (NOAA) | **ajustar** | IHO, "Decisions of the 3rd Session of the Assembly" (2023), PRO 3.3: "a) approved the proposed IHO Resolution on the recognition of the Southern Ocean", "c) … without prejudice to or limitation of the views of … any IHO Member State" | a página da NOAA (atualizada em 23/09/2026) está atrás da IHO: **desde 2023 a IHO reconhece o Oceano Austral até 60°S**, com a ressalva dos Estados. A checagem do vídeo 5 segue a NOAA no mesmo ponto: a Sala confere lá também |
| Schouten (1616) e Drake (1578) | **de pé** | EarlyPrint A11585: "which we called Cape Horn, it lieth under 57 degrees and 48. minutes"; Gutenberg #2991: "driven back to the southward of the Straits in 57 degrees and a tierce" | — |
| NASA: o degrau, "hundreds of ships" | **de pé** | Earth Observatory, "Image of the Day for December 24, 2017": "the ocean floor rises sharply from 4,020 meters (13,200 feet) to 100 meters (330 feet)"; "Hundreds of ships have gone down near Cape Horn" | — |
| NASA SVS 3881 e 30494 | **de pé** | 3881 (09/12/2011): "the only part of the Earth where the ocean can flow all the way around the world"; 30494 (01/03/2014): crédito "JPL", globo em 4096×2304, a Drake em 1426×1426 | — |
| "Nenhuma fonte oficial lida diz que cargueiros voltaram ao Horn" (§2.6) | **ajustar: voltaram ao sul, por Magalhães** | gCaptain, 07/10/2026, com a Bloomberg: "Maritime traffic through the Strait of Magellan jumped more than 70% both in August and September from year-ago levels", com dados da Marinha do Chile (a Gobernación Marítima de Punta Arenas) pedidos pela Bloomberg; a alta começou em julho, com a seca do Panamá; nem o Horn nem a Drake aparecem | **os navios de carga voltaram a passar sob a América do Sul em 2026**, pelo estreito, que é o atalho que evita o Horn. Status: confirmado na imprensa; o dado da Marinha não foi lido, e a reportagem não diz se algum dobrou o Horn |

### 2 · O ineditismo: cai como furo

- **"Navios cruzam a Drake" já é a resposta dos concorrentes**, não a premissa deles. Lido nas descrições:
  - Beyond Facts (756 mil inscritos), 01/05/2026, 691 mil: o vídeo inteiro é um navio de expedição na travessia ("the deadliest open ocean a
    passenger ship is allowed to cross", "This is the only road to Antarctica");
  - BRIGHT SIDE, 06/04/2026, *"Why Ships Never Pass Under South America"*: "and why modern ships still risk the crossing";
  - The Infographics Show (**15,5 mi de inscritos**), 31/08/2025, 336 mil: "modern cruise ships still battling its fury";
  - Epic Adventure Archives: o capítulo "Tourist crossings" (12:25) da Drake de 1,62 mi e o "Modern Exploration and Tourism" (28:20) do
    Oceano Austral de 3,55 mi; e "Drake Lake vs Drake Shake" (28:15) na Drake de 6,92 mi;
  - Underwater Earth 4K: "Why even modern ships cross Drake Passage with humility";
  - The National Weather Desk (os dois de 12/2025, que a checagem achou).

  E dois dos três vídeos mais vistos do nicho são vlogs de cruzeiro do Travel with AK (6,96 mi, e 5,95 mi no segundo, que a checagem não
  achou); o outro é a Drake do Epic Adventure Archives (6,92 mi), com o capítulo "Drake Lake vs Drake Shake". O
  público do tema conhece o cruzeiro. "Navios não passam" é só o título dos Shorts e da família "Under South America"; a contradição do
  §2.6 nega o que esse público já viu.
- **O *Bounty*: de pé no nicho, conhecido fora dele.** Zero menções nas 107 descrições lidas pelos dois. Fora do YouTube, é a história de
  sempre: está no livro do próprio Bligh, e os naturalistas da Lindblad a contam a bordo, na travessia ("In 1788 Captain William Bligh tried
  unsuccessfully for 31 days straight to round the Horn", relatório diário do *National Geographic Explorer*, 06/02/2011,
  expeditions.com). **E não é o caso extremo:** o *Susanna*, de Hamburgo, ficou **99 dias** no Horn em 1905 (revista *Yacht*, Uwe Janßen,
  19/12/2011, pelos diários de bordo achados num arquivo de Hamburgo; não lido em fonte primária). O *Bounty* serve pelo nome, não pelo
  recorde.
- **A história da rota é deles**, e a ponte com o vídeo 3 também: a Drake de 6,92 mi tem capítulos de Hoces, Drake e Schouten & Le Maire, e
  o Cabo Horn de 2,8 mi tem "Early sightings and naming" e "Cape Horn after the Panama Canal and railroads".
- **O anel sem terra: a ideia já é deles.** A descrição da Drake de 6,92 mi: "It is the narrowest point where the Southern Ocean circles the
  globe without interruption". O "os concorrentes lidos não descrevem esse mapa" (§4, ponto forte 4) cai em parte: descrevem a ideia; se
  mostram o mapa, não se sabe. O Oceano Austral do mesmo canal cita a IHO (*Limits of Oceans and Seas*) entre as fontes.
- **O que continua sem dono, nas descrições lidas:** o *Bounty*; **os números oficiais do mar** (8 a 20 ft na maior parte do tempo; 39 a 46 ft
  na onda do *Viking Polaris*) contra os 60 e os 80 ft; o vento contra o *fetch* (Young 1999, que contraria o Underwater Earth); **o
  *air-cruise* que voa por cima da Drake** (+92 % em duas temporadas); o meridiano da IHO e a resolução de 2023; e **o Magalhães de 2026**.

### 3 · A concorrência: de pé, e mais saturada do que a checagem mediu

**As releituras batem** (24/10/2026, à noite): Scary Interesting do Horn, 3.428.807; Epic Adventure Archives da Drake, 6.916.546; Map
Pack, 4.377.338; Beyond Facts, 691.405. Nenhuma diferença que mude a tabela.

**Os que a checagem não achou** (os acima de 30 mil):

| Título | Canal (inscritos) | Views | Publicado | Duração | ID |
|---|---|---:|---|---:|---|
| The Final Chapter of Antarctica & Drake Passage Storm *(vlog)* | Travel with AK (2,1 mi) | 5.954.641 | 06/01/2026 | 41:15 | `kXE8qlvPK2o` |
| **Why No Ship Can Pass Below South America?** *(Short)* | The Parallel Truth (102 mil) | **5.214.802** | 13/11/2024 | 0:49 | `DJbXNkyYack` |
| **Drake Passage: The World’s Deadliest Stretch of Water** | **Epic Adventure Archives** (95,9 mil) | **1.622.889** | 26/04/2025 | 14:45 | `KfZO4PoSzc8` |
| **Cape Horn: The Deadliest Waters on Earth** | **The Drowned Archives (6,07 mil)** | **1.598.323** | 24/07/2025 | 6:18 | `58brh1wPYk8` |
| Crossing Drake Passage *(vlog)* | Hoosier Tim's Travel Videos (228 mil) | 922.685 | 15/03/2009 | 8:45 | `CZ1SAonjjjs` |
| Drake Passage: The Most Violent Waterway on Earth *(4K)* | Underwater Earth 4K (não diz) | 415.971 | 30/06/2026 | 3:00:49 | `FoiKIl7FLEw` |
| **Why Modern Navigation STILL Hasn’t Solved the Drake Passage Problem** | **The Infographics Show (15,5 mi)** | 336.315 | 31/08/2025 | 19:16 | `4obErLPLeK4` |
| Hidden Danger: Why Ships Can't Sail Under South America? *(Short)* | Travel Saga (3,92 mil) | 327.463 | 13/06/2024 | 0:54 | `n0XwRqA2WQ0` |
| What Is the Drake Passage & Why Is It So Rough? | Did You See This? (319 mil) | 157.584 | 29/03/2023 | 1:28 | `pyVt4RiUQQc` |
| **Surviving 50-Foot Waves at Earth's Deadliest Ocean Pinch Point** | **Blueprint (326 mil)** | 94.298 | **13/10/2026** | 22:37 | `y7pz9w0eX-0` |
| The Most Dangerous Sea Route on the Planet. Past Cape Horn through the Drake Passage! | Incredible Stories (285 mil) | 87.776 | 06/10/2023 | 5:45 | `TJAjbDXsMDw` |
| What is the Drake Passage? | Sea Shepherd (92 mil) | 48.115 | 14/01/2026 | 1:59 | `BYFATzwKBB8` |
| The Drake Passage 🌊 \| World’s Roughest Sea… *(Short)* | Mapnosis (20,9 mil) | 39.013 | 26/08/2025 | 0:36 | `txIfXPfqUbA` |

Abaixo de 30 mil (lidos): `lKdvIqtXXiA` TIMELINE (25.098, 09/2025); `E5meBDTP1fI` Everyday Sailing, *"The Storm Tactic One Sailor Proved Off
Cape Horn"* (14.677, **15/10/2026**); `nr8UGdi6UMk` (12.251); `byaQtKp2Sqk` Swoop (9.663); `DXhJoejLCUs` (8.998); `Z3BwF-iMYUc` Poseidon
Expeditions (6.913); `wp4cViEc7J4` BRIGHT SIDE, *"Real Reason Ships Avoid the Waters Below South America"* (6.700, 11/2025); `hjOD_SRRrAA`
(6.443); `7_a8TnAPWPE` (2.802, um cruzeiro da Holland America que dobra o Horn); `_MsEOETBWjM` (264); `82-QVKNf1dY` (22, cópia do título do
Map Pack).

**O que isso muda:**
- **Acima de 1 mi em 2025–26: 11**, não 8 (os 8 da checagem, mais `kXE8qlvPK2o`, `KfZO4PoSzc8` e `58brh1wPYk8`).
- **O maior da família "Under South America" é um Short de 49 s com 5,21 mi** (The Parallel Truth: "a part of the ocean that all Ships avoid
  passing through"), não o Map Pack.
- **O Epic Adventure Archives tem cinco vídeos do tema em 18 meses** (de 04/2025 a 10/2026), dois sobre a Drake, o último há 12 dias.
- **Nos últimos 6 meses:** Scary Interesting (09/2026, 3,43 mi), Epic Adventure Archives (12/10), Blueprint (13/10, um documentário da ITV
  de 2002, *Savage Planet*, sobre "the extreme nautical physics of Cape Horn"), Everyday Sailing (15/10), Underwater Earth (3 h em 4K, 06/2026),
  Gone with the Wynns (05/2026), Beyond Facts (05/2026) e BRIGHT SIDE (04/2026).
- **Canal grande já fez, e rendeu pouco para o tamanho:** o Infographics Show (15,5 mi) fez 336 mil; os três do BRIGHT SIDE (44,5 mi), 89 mil,
  14 mil e 7 mil. **Quem faz milhões aqui é o documentário longo de canal pequeno**: o Epic Adventure Archives (96 mil) com 6,9 mi; o The Drowned
  Archives (6 mil inscritos) com 1,6 mi em 6 min. É o sinal mais favorável ao Alpha Point em toda a pauta.
- **A foto da abertura já é do concorrente.** A descrição do Cabo Horn do Scary Interesting (`Wal6HjCqn8s`) credita "Jerzy Strzelecki,
  amanderson2": são os autores de `Cape Horn (js) 1.jpg` e `Cape Horn Coral Princess.jpg`, duas das cinco fotos que o §3 propõe para o gancho.
- **Os canais de geografia de referência:** a busca também não achou nada do RealLifeLore, do Wendover, do Half as Interesting nem do
  Geography by Geoff (de pé, como "nenhum nesta busca").

### 4 · Os títulos

- ***The World's Most Dangerous Ocean Passage***: **cai** (concordo). Colide também com o Infographics Show ("the most dangerous stretch of
  ocean on Earth", na descrição), com o Underwater Earth e com o The Drowned Archives.
- ***Why This Place Is Sailors' Greatest Challenge***: **de pé, o mais fraco dos vivos.** Sem colisão na busca (concordo). Mas é o clichê do
  "Sailor's Everest" (The Ocean Race, 2023) em outras palavras; "sailors" erra quem cruza hoje (passageiros, a virada que a pauta vende); e
  não nomeia nada que o espectador conhece. O núcleo se paga na frase 1, se ela disser o vento contra o veleiro.
- ***Ships DO Pass Under South America. 100,000 People a Year***: **cai por fato.**
  1. Quem vai à Antártida não passa "sob" a América do Sul: sai de Ushuaia, desce e volta. A IAATO conta visitantes, não travessias de um
     oceano ao outro.
  2. A temporada mais recente dá 98.806 de navio, e caindo.
  3. O que passa de fato sob a América do Sul é o cargueiro, pelo Estreito de Magalhães, e muito mais em 2026: é o vídeo do atalho que evita
     a Drake, não o da Drake.
- ***Why Cruise Ships Now Cross the Sea That Stopped the Bounty***: **de pé, com ajuste.** Sem colisão na busca (concordo; "Bounty" não aparece
  em título nenhum do nicho).
  - "Why cruise ships now cross" é a pergunta que o Beyond Facts responde há 5 meses (o casco, os estabilizadores).
  - O *Bounty* desistiu a sudoeste do cabo, a oeste do meridiano do Horn: "the sea that stopped the Bounty" vale como o mar do Horn, e a fala
    diz "the waters off Cape Horn".
  - "Bounty" puxa o motim, como a checagem diz.
  - O núcleo se paga nas 3 primeiras frases (o *Bounty* na 1, os navios na 3).
- **O caminho que nenhum título achado tem: o de 2026.** Algo na linha de "Ships Went Back Under South America This Summer", que nomeia o
  continente, guarda o lugar e a causa, e liga ao vídeo 3. É hipótese de trabalho: o "this summer" é o verão do norte (agosto–setembro), e o
  título passa pelo processo da `embalagem.md` §4, depois de lido o dado da Marinha do Chile.

### 5 · A imagem: de pé, com um achado contra

- **As licenças, relidas na API** (`extmetadata`, 24/10/2026), batem com o §3: as duas do Liam Quinn, **CC BY-SA 2.0**, 5616×3744
  ("At the southern tip of South America"); a do Jerzy Strzelecki, **CC BY 3.0**, 5557×3650; a do amanderson2, **CC BY 2.0**, 5184×3888 (tirada
  do *Coral Princess*, um navio de cruzeiro); a do Boris Kasimov, **CC BY 2.0**, 4032×2268. O *share-alike* das do Quinn pede o olhar do
  conferente.
- **A abertura não deve ser a do Scary Interesting.** Sobram as do Quinn e a do Kasimov (esta, só 5 % mais larga que 3840: pouca folga para o
  empurrão) e o Landsat da NASA, que nenhum crédito lido cita.
- **4K em movimento real do lugar: só o banco.** A busca do Commons por vídeo ("Cape Horn", "Kap Hoorn", "Cabo de Hornos", "Drake Passage")
  acha só o ZDF de 1080p, que não entra (concordo). O drone do Horn vem da caça, e é o mesmo poço do concorrente: o Scary Interesting credita
  o Shutterstock.
- **A regra do gancho se cumpre** (`identidade.md` §5): duas imagens reais do lugar (a foto e o Landsat, ou o drone de banco), o mapa voando
  até a passagem, e os números animados (os 505 mi, os ~99 mil).

### 6 · O gancho, frase a frase

| Frase do esboço | Veredito | O conserto |
|---|---|---|
| "In April 1788, the Bounty spent thirty days trying to sail west past Cape Horn, then gave up." | **ajustar** | o *Bounty* passou do meridiano do Horn em até ~340 mi: "spent thirty days fighting to get around Cape Horn, then gave up" |
| "South of this rock, about 500 miles of open ocean run to Antarctica, and no land stops the wind." | **de pé** | 505 mi até a ilha Livingston; "to the first Antarctic islands" é o mais exato |
| "But ships don't avoid it." | **de pé como fato, cai como virada** | §2: o público do tema já sabe. A virada precisa ser outra (o Magalhães de 2026, ou o mar medido contra o mito) |
| "In the 2023–24 season, about 115,000 people sailed to Antarctica, most of them across this water." | **ajustar** | "In the 2025–26 season, nearly 100,000 people sailed to the Antarctic Peninsula" (IAATO, 2026); "most of them across this water" segue inferência |
| "In November 2022, one breaking wave here shattered seven cruise-ship windows and killed a passenger." | **de pé** | NSIA, com o nome na tela |

### 7 · A nota: 5,5

Na régua das pautas: o vídeo 5 teve 5,5 no cético, e o Peru, 6,5 no cético e 7,5 depois da confirmação.

**O que pesa contra:**
1. **A virada que a checagem vende como forte já é dos concorrentes**: assunto inteiro do Beyond Facts, capítulo de outros cinco, e a
   matéria-prima de dois dos três vídeos mais vistos do nicho.
2. **O número do gancho e o título 3 caem**: a IAATO de 2025–26 dá 98.806 de navio, e "under South America" é o Estreito de Magalhães.
3. **A saturação é maior do que a medida**: 11 acima de 1 mi em 2025–26; o Epic Adventure Archives com cinco vídeos, o último há 12 dias; o
   Scary Interesting com dois em 2026, o último há 6 semanas, quase com o título do Lucas; o Underwater Earth com 3 h em 4K; o Blueprint há
   11 dias.
4. **O *Bounty* não é furo**: é a história que se conta a bordo, e o *Susanna* ficou 99 dias no Horn.
5. **A foto da abertura é a do Scary Interesting.**

**O que segura a pauta:**
- a maior demanda de todas as pautas, com a prova de que **canal pequeno chega a milhões aqui** (96 mil inscritos → 6,9 mi; 6 mil → 1,6 mi);
- os fatos do centro em fonte primária, todos relidos e de pé, e a largura refeita;
- as camadas sem dono nas descrições lidas: o mar medido pela NSIA e pelo Almirantado britânico contra o mito dos 60–80 ft, o vento contra o
  *fetch*, o *air-cruise* que voa por cima, a linha da IHO e a resolução de 2023;
- **o Magalhães de 2026**, que é notícia de 3 semanas, liga ao vídeo 3 e não aparece em vídeo nenhum achado.

**Por isso, 5,5:** de pé com ajuste, no fio. A demanda impede que caia mais; a falta de uma virada própria impede que suba.

**Para subir a 6,5:**
1. **A virada refeita sobre o que nenhum concorrente tem.** O caminho mais forte é o Magalhães de 2026: ler o dado da Marinha do Chile (a
   Gobernación Marítima de Punta Arenas) e saber se algum desses navios dobrou o Horn. O outro é o mar medido contra o mito (NSIA e o
   *Antarctic Pilot*).
2. **O gancho consertado**: a IAATO de 2025–26 e a frase do *Bounty*.
3. **O título refeito** pelo processo da `embalagem.md` §4, sem "most dangerous", sem "under South America" ligado à Antártida e sem
   "100,000".
4. **A abertura numa imagem que o Scary Interesting não usou** (o Quinn, o Kasimov, o Landsat, ou o drone de banco pela caça), com a resposta
   do Lucas.
5. **Alguém que possa assistir** (o Lucas) ver a Drake do Epic Adventure Archives (30 min) e o Cabo Horn do Scary Interesting (27 min), para
   não repetir a estrutura: o canal não lê legenda (`/api/` vetado).
