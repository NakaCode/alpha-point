# Cético: `kiribati` ("Inside the Pacific's Most Spread-Out Country"), 18/11/2026

**Veredito: DERRUBADO (agora). Nota: 4,5 / 10.** A pauta é boa, mas a hora é ruim. Fica na reserva, para testar de novo em
março de 2027, e o ângulo da geopolítica (§7 e §9) já está pronto.

A pauta é a 1ª do top 4 de `out/_pautas/video-8/ilha-pais.md`. O Lucas pediu "algo sobre alguma ilha ou país", no formato
"Inside…" do Geoff. A régua é a nova do Lucas (18/11/2026):
- vídeo antigo, mesmo grande, não derruba: pesa na nota, e o nosso título e o nosso ângulo têm de ser outros;
- curto minúsculo (menos de 2 mil views) é ruído;
- **derruba a onda do momento**: um viral (100 mil ou mais) ou uma notícia quente sobre o ângulo nos últimos 2 meses, ou 3
  ou mais longos com público nas últimas 8 semanas;
- **derruba o título igual ou quase igual** nos últimos 12 meses;
- a curiosidade vale mais que a busca.

**Em seis linhas:**
- **O nosso gancho já viralizou, em espanhol, há 17 dias.** "Visitar a tu abuela en Kiribati requiere pasaporte 💀" (Hoxy, 275
  mil inscritos; 382.548 views; 01/11/2026; 59 s) conta Tarawa–Kiritimati (3.288 km), o voo por Fiji, o fuso e a linha da data
  (transcrição lida). O enxame inglês copiou em curtos minúsculos em 05, 08, 11 e 12/11 (§2).
- **Kiribati está no momento em inglês**, mas não no nosso ângulo. Nas últimas 8 semanas saíram 4 longos com público: viagem (2), clima
  e a 2ª Guerra, de 136 mil a 249 mil. Pela letra da régua, as duas condições derrubam.
- **O título é falso.** O Chile com a Ilha de Páscoa (4.644 km), a Nova Zelândia com Tokelau (5.160 km) e a Indonésia (5.358 km)
  são mais espalhados que Kiribati (4.568 km, medida nossa) (§5).
- **"Wider than the continental US" depende da régua.** É verdade de ponta a ponta, de oeste a leste (2.839 contra 2.701 mi). É
  falso contra a maior reta dos 48 (2.901 mi). Na miniatura em tamanho real, os EUA saem 3 % mais largos. A frase verdadeira é
  "as wide as the lower 48" (§5).
- **O ângulo vago é a geopolítica.** Até 1983 os EUA reivindicaram 14 ilhas de Kiribati, entre elas Kiritimati, que é quase metade
  da terra do país. O tratado de 1979 proíbe uso militar de terceiros nas instalações de Kanton sem o acordo dos EUA, e é em Kanton
  que a China quer refazer a pista. Ninguém fez esse vídeo (§3).
- **O ponto mais grave (K1): a onda.** O hook exato do vídeo estourou há 17 dias. A linha da data é o ângulo mais gasto, e volta todo
  fim de dezembro: a GeoGlobeTales teve 15,2 mi em 19/12/2025 e 7,4 mi em 30/12/2024. Publicado em dezembro, o vídeo cai na onda
  sazonal.

Lido entre ~02:55 e ~03:35 de 18/11/2026, hora de Brasília. Os scripts, as respostas e as saídas estão em
`out/_pautas/video-8/_trabalho/cetico-kiribati/`:
- o vidIQ:
  - `vidiq.tsv`: as 9 chamadas e o gasto;
  - `vidiq-bruto/`: as 2 respostas grandes, em JSON;
  - `vidiq-b2.txt`, `-b3`, `-b6` e `-b7`: uma linha por vídeo, pelo `vidiq_ler.py`;
- `watch.jsonl`: as 9 páginas `/watch`, lidas pelo `../yt_meta.py`, um pedido por vez;
- `medida.py` e `medida-saida.txt`: a largura, a terra e o mar, e o teste da miniatura (§5);
- `pdf_texto.py`: o texto dos PDFs, com o sha256 no topo de cada `.txt`;
- `fontes/`:
  - `census-atlas-2022.txt` (o NSO de Kiribati);
  - `faolex-bi-67019.txt` (o tratado de 1979);
  - `nauruair-ns26.txt` (a tabela de voos);
  - `tz-australasia.txt` (a base de fusos da IANA);
  - `marineregions-eez-kiribati.json` (a ZEE);
  - `census-gazetteer-2024-nyc.txt` (a linha de Nova York e o sha256 do arquivo inteiro);
- `commons.py` e `commons-saida.txt`: o Commons (a API, um pedido por vez, com o User-Agent do canal).

Ficaram em `midia/_pautas/video-8/cetico-kiribati/`, fora do git: o PDF do Census Atlas (8 MB), os 2 PDFs (o tratado e a
tabela), as páginas do NSO e os dois gazetteers inteiros.

## 1. Os fatos

| # | Fato | Fonte (lida em 18/11/2026) | Veredito |
|---|---|---|---|
| F1 | **A terra:** "32 atolls and reef islands and one raised coral island, Banaba" (33 ilhas). A área oficial é **811 km² (313 mi²)**: "The official total land area of all islands is 811 sq.km" (GoK 2018). A do censo é **730 km² (282 mi²)**: "The census derived total land area is 730 sq km". | Kiribati National Statistics Office, *Kiribati Census Atlas 2022*, p. 21 e p. 32–33 (Table 5): https://nso.gov.ki/download/117/other-reports/2022/kiribati-census-atlas-2022.pdf (sha256 `56b0461d…`) | **CONFERE**, com os dois números. O mesmo Atlas diz "spread across 3,700 kms": é menos que a nossa medida (4.568 km, §5), e não diz entre que pontos. Na tela, a nossa medida, com os pontos. |
| F2 | **Nova York:** a terra de New York city é **300,457 mi² (778 km²)**. Kiribati tem 104 % dela pela área oficial e 94 % pela do censo. | US Census Bureau, 2024 Gazetteer, places de NY: https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_36.txt | **CONFERE**: "about as much land as New York City". |
| F3 | **A ZEE:** **3.440.220 km²** (1,33 mi de mi²). Gilbert tem 1.053.245; Phoenix, 745.782; Line, 1.641.193. A terra oficial é **0,024 %** disso: **1 km² de terra para ~4.240 km² de mar**. | Marine Regions (Flanders Marine Institute), camada `eez`, pelo WFS: https://geo.vliz.be/geoserver/MarineRegions/wfs (CC BY 4.0) | **CONFERE.** O depósito de Kiribati na ONU (o regulamento dos limites da ZEE, de 2014) **não foi lido**. A conta é nossa (§5). |
| F4 | **A linha da data:** em **31/12/1994**, Kanton passou de UTC-11 a **UTC+13**, e Kiritimati de UTC-10 a **UTC+14**. Tarawa ficou em UTC+12. "December 31 was the day that was skipped, so that the transition would be from Friday December 30, 1994 to Sunday January 1, 1995". Antes, em outubro de 1979, Kanton tinha ido de -12 a -11, e Kiritimati de -10:40 a -10. | IANA tz database, arquivo `australasia` (as zonas Pacific/Tarawa, Kanton e Kiritimati, e o comentário de K. Shetline, que cita Bartky, *One Time Fits All*, 2007, p. 202): https://raw.githubusercontent.com/eggert/tz/main/australasia | **CONFERE.** A NOAA (página atualizada em 23/09/2026: https://oceanservice.noaa.gov/facts/international-date-line.html) diz que a linha "roughly follows" o 180°, que "zigzags around political borders such as eastern Russia and Alaska's Aleutian Islands" e que não tem status legal internacional. **Não cita Kiribati.** O desenho oficial da linha (Departamento de Estado, *Guidance Bulletin* nº 31, 2012) **não foi lido**. "Só 4 dias úteis em comum por semana" antes de 1995: **NÃO CONFERIDO**. |
| F5 | **O tratado de 1979:** os EUA "hitherto claimed sovereignty" sobre **14 ilhas**: Canton (Kanton), Enderbury, Hull (Orona), Birnie, Gardner (Nikumaroro), Phoenix (Rawaki), Sydney (Manra), McKean, **Christmas (Kiritimati)**, Caroline, Starbuck, Malden, Flint e Vostok. O art. 1 reconhece a soberania de Kiribati sobre elas. Pelo art. 3, as instalações americanas de Kanton, Enderbury e Hull "shall not be made available to third parties for military purposes except with the agreement of the Government of the United States". Assinado em Tarawa em **20/09/1979**, em vigor desde **20/09/1983**. | O texto do tratado na FAOLEX (FAO/ONU): https://faolex.fao.org/docs/pdf/bi-67019.pdf (sha256 `4f5e0f38…`). A PacLII recusou a conexão. | **CONFERE.** É o achado da pauta: Kiritimati, com quase metade da terra do país (F10), era reivindicada pelos EUA até 1983. |
| F6 | **China e Taiwan:** Kiribati e Pequim decidiram "resume diplomatic relations at the ambassadorial level", em comunicado assinado em **27/09/2019**, em Nova York. Kiribati "has switched diplomatic ties between China and Taiwan three times". Em 2026, uma emenda constitucional, que não cita Taiwan, tornaria muito mais difícil voltar a reconhecer Taiwan. Ficou pendente: faltaram dois terços em abril. | Ministério das Relações Exteriores da China: https://www.mfa.gov.cn/eng/zy/gb/202405/t20240531_11367396.html. Hawaiʻi Public Radio, 02/09/2026: https://www.hawaiipublicradio.org/text/pacific-news-minute/2026-09-02/pacific-news-minute-kiribati-could-change-how-it-recognizes-taiwan-again | A data de 2019: **CONFERE**. As 3 trocas e a emenda: **CONFERE** na imprensa, não na fonte primária. **O resultado da emenda: NÃO CONFERIDO**, e ela pode virar notícia durante a produção. |
| F7 | **Kanton e a pista:** "China says it is considering rebuilding the airfield for high-end niche tourism". Kanton tem "about two dozen people, caretakers who rotate in", e o censo de 2020 contou **41**. A pista "has not been built", e os EUA prometeram reformar o cais (Reuters, 2024, via `ilha-pais.md`). | O comentário de P. Eggert (27/05/2021) na base da IANA (acima); *Census Atlas*, Table 5 | **CONFERE** como fonte secundária. O estudo de viabilidade chinês de 2021 **não foi lido** no governo de Kiribati. |
| F8 | **A área protegida das Phoenix (PIPA):** 408.250 km², fechada à pesca comercial em 01/01/2015 e reaberta por nota da Presidência de 15/11/2021. A UNESCO registrou a volta da pesca por satélite desde março de 2023. | A página da UNESCO (https://whc.unesco.org/en/news/2370) **recusou (403)**. O que está à esquerda veio da busca, citando a UNESCO e o Guardian (16/11/2021) | **NÃO CONFERIDO** na fonte primária. |
| F9 | **As bombas:** os testes britânicos "at the Montebello Islands, Christmas Island, Malden Island and Maralinga & Emu Field … between 1952 and 1967". | GOV.UK, 21/11/2022: https://www.gov.uk/government/news/nuclear-test-veterans-to-receive-medal-as-event-remembers-their-service-70-years-on | **CONFERE**: Kiritimati e Malden foram ilhas de teste. As datas de cada teste da série Grapple (1957–58, com 23 ou 28/04/1958 para a Grapple Y): **NÃO CONFERIDO**, porque o catálogo do National Archives não foi aberto. |
| F10 | **Onde estão a terra e a gente** (censo de 2020): **119.438** habitantes. **South Tarawa: 63.072 pessoas em 16 km²** (3.942/km²), ou 53 % da gente em 2,2 % da terra. **Kiritimati: 388 km²** (53 % da terra do censo, 48 % da oficial) e **7.369 pessoas** (6,2 %). | *Census Atlas 2022*, p. 21, p. 25 e Table 5 | **CONFERE.** Na tela, "nearly half the land" e "half the people". |
| F11 | **O voo doméstico existe:** na temporada de 26/03 a 26/10/2026, o **ON123** sai de Tarawa às 08:00 de quarta e chega a Kiritimati às 14:30 de quarta. Volta como ON124 (Kiritimati 07:00 → Tarawa 09:30, quinta). É semanal, "AIR KIRIBATI SERVICES - OPERATED BY NAURU AIRLINES". | Nauru Airlines, tabela NS26 (publicada em 04/03/2026): https://www.nauruair.com/library/files/20260304ns26passengerflightschedule.pdf (o robots.txt não veta) | **CONFERE** na NS26. A tabela de agora (NW26, desde 27/10) **não foi lida**. **"Para viajar no próprio país, só por Fiji e com passaporte"**, que é o viral da Hoxy, **NÃO CONFERE** como regra. |
| F12 | **Banaba e a terra em Fiji:** o fosfato foi minerado de 1900 a 1979, e os banabanos foram levados a Rabi em 1945 (Brookings, 2013). Em 2014, Kiribati comprou terra em Vanua Levu: 2.210 ha pela RNZ; "55 sq kms" pelo *Census Atlas* (p. 25). | Via `ilha-pais.md`; *Census Atlas 2022* | **NÃO CONFERE**: as duas fontes divergem (22 km² contra 55 km²). Ler o anúncio do governo antes de pôr um número na tela. |
| F13 | **Os superlativos da pauta:** "the Pacific's most spread-out country" e "only country in all four hemispheres". | Medida nossa (§5) e `ilha-pais.md` | **NÃO CONFERE** nenhum dos dois, ao pé da letra (§5, K2 e K8). |

## 2. A onda: Kiribati está no momento, e o nosso gancho também

vidIQ: 1 `keyword_research`, 6 `youtube_search` e 1 `video_transcript`, **40 créditos, no teto** (5 por chamada). O saldo foi de
4.936 a 4.866. A diferença de 70 inclui 30 de outro agente que rodou ao mesmo tempo. As views marcadas com `/watch` foram
conferidas na página pública às ~03:25.

**O viral sobre o ângulo, nos últimos 2 meses** (busca "kiribati" desde 18/09, por views):
- **"Visitar a tu abuela en Kiribati requiere pasaporte 💀"**: Hoxy. (275 mil inscritos), **382.548** (`/watch`), **01/11/2026**,
  0:59, *outlier* 9,0.
  - A legenda veio numa faixa em árabe; o vídeo é em espanhol. Ela diz: Tarawa–Kiritimati 3.288 km, "como Madri–Moscou"; renovar o
    passaporte porque o voo sai uma vez por semana; ir por Nadi, em Fiji ("outro país"); 16 h 40 de viagem doméstica; 2 horas de
    fuso; e, se você perder a parada, o avião segue para Honolulu e você volta um dia no calendário.
  - **É o nosso gancho e a nossa miniatura em 1 minuto.** A parte do passaporte não é a regra (F11).
- Os outros acima de 100 mil não são o nosso ângulo: "Kiribati Citizenship 2026" (Documentary Border, em bengali; 255.296, 30/09,
  5:47) e a viagem polonesa de Podróże Wojownika (124.891, 15/10, 30:06; o ano-novo).

**Os longos em inglês com público, nas últimas 8 semanas (desde 23/09)**: a régua pede 3, e são 4. Nenhum é do nosso ângulo:

| Título | Canal (inscritos) | Views | Data | Duração | O que é |
|---|---|---|---|---|---|
| 3 Days Catching & Eating Local Food in Kiribati | Tsubasa Films (43,3 mil) | 248.870 | 21/09/2026 (hora do Pacífico) | 51:36 | viagem (fora da janela, por 2 dias; não conta) |
| I Lived With a Kiribati Family on a Remote Island (`/watch`) | Tsubasa Films (43,3 mil) | 233.586 | 05/10/2026 | 54:26 | viagem |
| HOW PEOPLE LIVE IN KIRIBATI \| THE FIRST NATION TO BE SWALLOWED BY THE OCEAN (`/watch`) | Eremic Travel (3,0 mil) | 163.257 | 24/09/2026 | 44:13 | clima e viagem; *outlier* 105 |
| I Survived 24 Hours on Uninhabited Island in Kiribati | Tsubasa Films (43,3 mil) | 149.280 | 29/09/2026 | 49:02 | viagem |
| They Tore Down a Building on Tarawa After 75 Years — 30 Marines Were Still Under It (`/watch`) | Still Inside (1,16 mil) | 136.701 | 14/11/2026 | 15:46 | a 2ª Guerra; 1.906 views por hora; 4 dias |

- Abaixo deles, "How People Live in Kiribati | The Most Remote Country on Earth…" (The Map, 55 mil inscritos; 12.854, 02/10, 1:02:22).
- A série da Tsubasa Films tem 7 longos sobre Kiribati de 25/08 a 06/10, de 117 mil a 429 mil cada. É o Kiribati da viagem em alta
  em 2026 ("life in kiribati": +66,9 % de busca).

**O enxame, nos curtos dos nossos ângulos** (a linha da data, os 4 hemisférios, a largura). Em inglês:
- Axiom Talks, 27.644 (12/10, o ano-novo);
- GLK, 22.138 (28/10, os hemisférios e a linha da data);
- TerraScope, 10.872 (26/10, os nomes London, Paris e Poland de Kiritimati);
- e os minúsculos, depois do viral da Hoxy:
  - "The Country That Bent the International Date Line" (05/11, 590);
  - "The Country That Lives Tomorrow First" (Map Mysteries, Drawn; 08/11, 669, com fontes);
  - **"This Tiny Nation Is Spread Across an Area as Wide as the US"** (MapMystery; 11/11, 676);
  - "This Country Moved the Date Line Around Itself" (12/11, 1.404).

Em outras línguas: "O País Onde Já Foi Segunda e Terça ao Mesmo Tempo" (Caosmetria, 36.994, 05/10; cita os 811 km²), Descobrindo o
Mundo (21.043, 04/11), FactId (26.717, 13/10) e Secretos del Mapa (11.043, 31/10). Cada um é ruído, mas o enxame chegou em
dias, como a régua avisa.

**Um longo minúsculo no nosso estilo, há 2 dias:** "Renting the Ocean: How Kiribati Pays Its Way" (Terrain Tally, 45 inscritos;
154 views; 16/11/2026; 9:43). Usa a ZEE da Marine Regions, o gazetteer de Nova York e fontes primárias. É ruído pela régua, e
é a prova de que a nossa medida da terra contra Nova York também já circula.

**Notícia quente: não.** Nos últimos 2 meses, só o resgate de 5 pessoas à deriva (04/11). O que veio antes está fora da janela e
é pequeno:
- a emenda constitucional sobre Taiwan (27/08 e 02/09, F6);
- Kiribati esnobada no fechamento do Fórum das Ilhas do Pacífico, em Palau (1News, 05/09/2026).
- **O risco:** a emenda pode ir a voto durante a produção.

**A onda que vem, todo dezembro:**
- "First & Last Places to Celebrate New Year — International Date Line" (GeoGlobeTales, 2,09 mi de inscritos; **15.166.063**,
  `/watch`; **19/12/2025**);
- "Who Celebrates New Year First. Kiribati vs American Samoa" (a mesma; **7.362.122**; **30/12/2024**);
- "¿Quién celebra el Año Nuevo primero?" (GeoCuentos; 1.553.129; 08/01/2025).
- Se o vídeo 8 sair em dezembro, a linha da data vira, de novo, o assunto do momento na semana dele.

## 3. A colisão

**O título "Inside the Pacific's Most Spread-Out Country" não colide.** A busca "most spread out country in the world" (12
meses, por relevância) só trouxe listas de população; nenhum título tem "spread-out country". O título cai por ser falso (K2),
não por colisão.

**Os 5 mais próximos do ângulo** (a largura, a linha da data e a geografia de Kiribati):

| Título | Canal (inscritos) | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|
| Visitar a tu abuela en Kiribati requiere pasaporte 💀 | Hoxy. (275 mil) | 382.548 | 01/11/2026 | 0:59 | **o ângulo, sim** (em espanhol, há 17 dias) |
| Kiribati 🇰🇮 is LARGER than USA 🇺🇸 (`/watch`) | GLOBAL NOBLE (10 mil) | 124.720 | 13/08/2026 | 0:39 | a ideia da miniatura; 97 dias, fora dos 2 meses; e é falso em área (a ZEE é 43 % dos 48) |
| Geography Now! Kiribati (`/watch`) | Geography Now (3,93 mi) | 1.351.734 | 29/11/2017 | 13:38 | o perfil longo do país, antigo: pesa |
| First & Last Places to Celebrate New Year — International Date Line | GeoGlobeTales (2,09 mi) | 15.166.063 | 19/12/2025 | 1:42 | a linha da data, dentro dos 12 meses: pesa muito |
| This Tiny Nation Is Spread Across an Area as Wide as the US (`/watch`) | MapMystery (25) | 676 | 11/11/2026 | 0:28 | quase o nosso título "as wide as", mas é ruído (menos de 2 mil) |

**Os antigos grandes** (não derrubam; ocupam a busca, e são de outros ângulos):
- "o primeiro país a afundar" (Joe HaTTab, em árabe; 19,9 mi; 2024);
- "Kiribati: a drowning paradise…" (DW, 13,6 mi; 2017), e a versão em espanhol (11,1 mi; 2018);
- "This Country Has 79 Years Left to Live" (Drew Binsky, 7,4 mi; 2019);
- "KIRIBATI: o país mais ALEATÓRIO do MUNDO" (Tinocando, 2,2 mi; 10/2025);
- "Unique Time Zones of Kiribati 🏝️ London & Paris in One Country" (GeoGlobeTales, 1,8 mi; 07/2024);
- a viagem do Travel with AK (1,66 mi; 08/2025).

**O ângulo vago:** a busca "why the US gave up 14 islands to Kiribati treaty of tarawa" (sem data) **não achou nenhum vídeo**
sobre o tratado, as reivindicações americanas nem o condomínio de Canton e Enderbury.

## 4. O potencial real, pela régua

| # | Critério | `kiribati` |
|---|---|---|
| 1 | O nome é buscado | **Sim, mas não pelo nosso público.** "kiribati": **46.406 buscas/mês** (volume 70, concorrência 61, nota 58; 3,5 vezes o "big sur"), com o **Vietnã (21 %), Bangladesh (14 %) e o Egito (14 %)** no topo. Em inglês, o que se busca é viagem e documentário: "living in kiribati" 14.532, "kiribati documentary" 11.892, "life in kiribati" 7.232 (+66,9 %), "tarawa" 13.170 (a batalha). |
| 2 | Prova recente de interesse | **Sobra** (§2): a série da Tsubasa, a Eremic, a Hoxy com 382 mil, o Still Inside com 136 mil em 4 dias. |
| 3 | O longo bem feito não existe | **Na geopolítica, não existe.** O tratado de 1979, Kanton, a China e os EUA. Na largura e na linha da data, os curtos gigantes cobrem, e o Geography Now (2017) faz o perfil. |
| 4 | O paradoxo em 3 frases, visível no mapa | **Sim:** a terra de Nova York, da largura dos 48; metade da gente em 2 % da terra; quase metade da terra numa ilha que os EUA reivindicavam até 1983. |
| 5 | A geografia explica o porquê | **Sim:** atóis, o guano, três peças coloniais costuradas, a ZEE como economia. |
| 6 | Uma medida nossa | **Sim** (§5): a largura medida, a terra contra o mar (1 : 4.240) e os EUA em tamanho real. |

- **O enxame:** chega em dias. O viral da Hoxy foi copiado em inglês 4, 7, 10 e 11 dias depois.
- **13 a 16 min, em 3 atos, sem encher linguiça: dá, com folga.**
  1. **O mapa impossível** (0 a 4 min): a terra de Nova York na largura dos 48 e as três ilhas Gilbert, Phoenix e Line. Metade
     da gente se espreme em South Tarawa (16 km²), e quase metade da terra é um atol de 6 % da gente (Kiritimati). O dente da linha
     da data e o 31/12/1994 que não houve ficam aqui, de passagem.
  2. **Como juntaram isso** (4 a 10 min):
     - as Gilbert britânicas;
     - as reivindicações americanas nas Phoenix e nas Line (o guano, a conferir) e o condomínio de Canton e Enderbury (a conferir);
     - a Batalha de Tarawa (1943);
     - as bombas H britânicas em Kiritimati e Malden (F9), numa ilha que os EUA também reivindicavam;
     - o fosfato de Banaba e os banabanos levados a Fiji (1945);
     - a independência e o tratado de 1979: os EUA largam 14 ilhas, e o art. 3 fica sobre Kanton (F5).
  3. **Hoje** (10 a 15 min):
     - o mar como economia (a ZEE, a pesca vendida por dia);
     - a PIPA fechada em 2015 e reaberta em 2021 (F8);
     - a China (1980, Taiwan em 2003, de volta em 2019, a emenda de 2026) e a pista de Kanton contra o art. 3;
     - o mar que sobe, no fim, nunca no gancho.

## 5. A nossa versão: as medidas (feitas)

As saídas estão em `medida-saida.txt`. As distâncias são de Vincenty, no elipsoide WGS84. A terra vem do Natural Earth 10m
admin-1 (domínio público, cache da máquina), e as pontas de Kiribati vêm das coordenadas do OSM/Nominatim do `ilha-pais`.

**A largura:**

| Medida | km | mi |
|---|---|---|
| **Kiribati, Banaba → Caroline** (as ilhas mais a oeste e mais a leste) | **4.568** | **2.839** |
| Kiribati pelo Natural Earth 10m (Banaba → Flint; **o NE não tem a ilha Caroline**) | 4.433 | 2.755 |
| **Os 48, oeste–leste** (Cape Alava → West Quoddy Head) | 4.347 | 2.701 |
| **Os 48, a maior reta** (a costa perto de Point Conception → West Quoddy Head) | **4.669** | **2.901** |
| Os 48, Point Arena → West Quoddy Head | 4.662 | 2.897 |
| Os 48, Cape Flattery → Key West | 4.579 | 2.846 |

- **A frase que a medida segura:** "Its farthest islands are 2,839 miles apart, about as wide as the lower 48." Kiribati é 5 % mais
  largo de ponta a ponta, de oeste a leste, e 2 % mais estreito que a maior reta dos 48. **"Wider than the continental US" não se
  segura** sem dizer qual régua.

**Os outros "mais espalhados"** (a maior distância entre duas terras do país, pelo Natural Earth 10m):

| País | km |
|---|---|
| Austrália com Norfolk | 5.443 |
| Indonésia | 5.358 |
| Nova Zelândia (o NE inclui Tokelau) | 5.160 |
| **Chile com a Ilha de Páscoa** | **4.644** |
| **Kiribati** | **4.568** |
| Japão | 3.143 |
| Micronésia (FSM) | 2.794 |
| Filipinas | 1.833 |
| Papua-Nova Guiné | 1.763 |
| Ilhas Salomão | 1.558 |
| Ilhas Marshall | 1.111 |
| Fiji | 1.055 |
| Tuvalu | 588 |

- Kiribati é o mais espalhado **dos Estados insulares do Pacífico sem territórios de ultramar**. Não é "the Pacific's most
  spread-out country": o Chile e a Nova Zelândia são países do Pacífico, e os EUA e a França, com os territórios, vão muito além.
- A Nova Zelândia sem Tokelau não foi medida. Mesmo assim, o Chile basta para derrubar o superlativo.

**A terra e o mar:**
- A ZEE tem 3.440.220 km² (F3). **A terra oficial é 0,024 % dela: 1 km² de terra para 4.242 km² de mar** (pela do censo, 1 : 4.713).
- A ZEE de Kiribati tem 43 % da área dos 48. Logo, **"LARGER than USA"**, do curto de 124 mil, **é falso em área**.

**A miniatura, testada:** os 48 foram girados sobre a esfera até o centro de Kiribati, com o norte para cima, como no "The True Size".
- Kiribati cobre **40,26° de longitude**, com Caroline.
- **No Mercator ingênuo**, os 48 cobrem 57,76°, ou **143 %** da largura de Kiribati: a miniatura mentiria contra nós.
- **Em tamanho real, no equador**, os 48 cobrem 41,39°, ou **103 %**.
- Logo: **"SAME WIDTH" é verdade na imagem, e "WIDER THAN USA" não é.**
- Em escala real, as ilhas somem (811 km² ao todo). Na miniatura, entram como pontos ou anéis aumentados, e isso se declara.

**As distâncias do roteiro:**

| Trecho | km | mi |
|---|---|---|
| Tarawa (Bairiki) → Kiritimati (London) | 3.288 | 2.043 |
| Kiritimati → Honolulu | 2.138 | 1.328 |
| Kanton → Honolulu | 3.064 | 1.904 |
| Tarawa → Kanton | 1.769 | 1.099 |
| Nova York → Los Angeles | 3.944 | 2.451 |

- Por Nadi (Fiji), Tarawa–Kiritimati fica em 5.679 km, 73 % a mais que o voo direto.

## 6. O material

- **Mapa com geometria real:**
  - Natural Earth 10m (falta a ilha Caroline: pegar as ilhas pequenas no OSM, com o crédito "© OpenStreetMap contributors");
  - a ZEE da Marine Regions, com o crédito exato da CC BY 4.0;
  - os fusos da IANA;
  - o relevo amarelo dos 48 em tamanho real, pelo caminho da miniatura do vídeo 7.
- **Satélite aberto:**
  - o Commons tem "Satellite pictures of Kiribati" (83 arquivos), com fotos da ISS e da NASA, Tarawa, Abaiang, Maiana e
    Kiritimati (ISS002, ISS009, ISS-53);
  - Landsat e Sentinel-2 cobrem todos os atóis.
- **Fotos de acervo** (`commons-saida.txt`):
  - "Battle of Tarawa", 238 arquivos (Marinha e Fuzileiros dos EUA);
  - "Kiritimati", 51;
  - "Kanton Island", 12, e "Canton Island Airport", 12;
  - as fotos da NARA da ilha Phoenix;
  - "Operation Grapple", 12 (do Ministério da Defesa britânico: a licença, arquivo a arquivo, é do conferente);
  - os recifes da PIPA (busca de 123 arquivos; licenças variadas);
  - "Maps of Kiribati", 9 arquivos e 16 subcategorias;
  - o mapa de Banaba de 1936.
  - A categoria "Banaba" veio vazia; o nome dela no Commons é outro.
- **Documentos:**
  - o tratado de 1979 (F5);
  - o *Census Atlas* (F1, F10);
  - a tabela da Nauru Airlines (F11);
  - o comunicado de 2019 (F6).
- **Dá para 13 a 16 min: sim**, sem depender da viagem nem do clima.

## 7. O título, o gancho e a miniatura (para a reserva)

**O título que eu defendo: "Inside Kiribati, the Country as Wide as the Lower 48"** (52 caracteres).
- Tem o formato "Inside" que o Lucas pediu, o nome buscado (46 mil/mês) e uma afirmação verdadeira pela medida ("as wide as";
  2.839 mi contra 2.701 a 2.901 mi).
- O paradoxo se entende em 2 segundos.
- **Colisão:** a busca "kiribati as wide as the united states" (12 meses) só achou o curto de 676 views (MapMystery,
  "…as Wide as the US"), que é ruído.
- "Lower 48" é dos EUA; a distribuição do canal é americana.

**Alternativas:**
- **No molde de contraste, o ângulo vago: "Why the US Gave Up 14 Islands to Kiribati"** (41).
  - Verdadeiro pelo tratado (F5): os EUA abriram mão das reivindicações sobre 14 ilhas.
  - Nenhum vídeo achado sobre isso, sem data.
  - É o título mais nosso, e o que menos depende da onda da largura e da linha da data.
- "Kiribati: New York's Land, as Wide as the Lower 48" (50). É o contraste puro da medida, mas é a ideia que o enxame está
  copiando agora.
- **Fora:**
  - "…Most Spread-Out Country": falso (K2);
  - "…Wider Than America/the US": depende da régua e, com "America", é falso, porque os EUA com o Alasca são muito mais largos;
  - "…Moved the International Date Line": o ângulo mais gasto (K4).

**O gancho** (3 frases, 41 palavras, sem dar a resposta):

> "Kiribati has about as much land as New York City, scattered across an ocean as wide as the lower 48. Nearly half that land is
> one island the United States claimed until 1983. Today, Washington and Beijing are both courting Kiribati."

- Os apoios: F1, F2, §5, F5, F10, F6 e F7. "Courting" é a palavra justa: a pista chinesa e o cais americano em Kanton, a embaixada
  prometida.
- A linha da data fica para o ato 1, não para o gancho.

**A miniatura** (o molde do canal: o mapa é o protagonista):
- o Pacífico **azul**;
- as 33 ilhas como pontos **vermelhos** aumentados, com as três ZEE em vermelho translúcido;
- os 48 **em tamanho real** (girados ao equador, nunca o Mercator), em **relevo amarelo** ou em contorno **ciano**, sobre as ilhas, com a
  mesma largura;
- uma barra **ciano** de Banaba a Caroline;
- uma seta branca grossa para um ponto vermelho, com a etiqueta "ALL ITS LAND = NYC";
- na caixa preta, **"SAME WIDTH"**. Para o teste A/B, a alternativa é **"14 ISLANDS"**, com as 14 ilhas do tratado em vermelho e uma
  bandeira dos EUA riscada.
- **Nunca** "WIDER THAN USA" (a imagem mostraria o contrário) nem "SINKING".

## 8. Os pontos

- **K1 · GRAVE · Kiribati é a onda do momento, nas duas condições da régua.**
  - O nosso gancho exato viralizou há 17 dias: Hoxy, 382.548 views, em espanhol. O enxame inglês já o copia.
  - Saíram 4 longos em inglês com público em 8 semanas (136 mil a 249 mil), de viagem, clima e da 2ª Guerra.
  - Nenhum longo é do nosso ângulo, e o viral não é em inglês. **Pela letra da régua, derruba.**
- **K2 · GRAVE · O título proposto é falso.** "The Pacific's most spread-out country" perde para o Chile com a Ilha de Páscoa (4.644
  km) e para a Nova Zelândia com Tokelau (5.160 km), e a Indonésia (5.358 km) vai além. Kiribati tem 4.568 km. O superlativo só
  vale com "entre os Estados insulares do Pacífico sem territórios", que não cabe num título.
- **K3 · MÉDIO · "Wider than the continental US" depende da régua.**
  - De ponta a ponta, de oeste a leste, é verdade (2.839 contra 2.701 mi).
  - Contra a maior reta dos 48, é falso (2.901 mi).
  - Na miniatura em tamanho real, os EUA saem 3 % mais largos; no Mercator ingênuo, 43 %.
  - A frase verdadeira é "as wide as the lower 48", e a caixa, "SAME WIDTH".
- **K4 · MÉDIO · A linha da data é o ângulo mais gasto, e tem estação.** A GeoGlobeTales teve 15,2 mi (19/12/2025) e 7,4 mi
  (30/12/2024), e mais 1,8 mi (2024) com os nomes London e Paris. Todo fim de dezembro a onda volta. Em dezembro, o vídeo cai dentro
  dela.
- **K5 · MÉDIO · A busca existe, mas não é a nossa.** As 46 mil buscas/mês vêm do Vietnã, de Bangladesh e do Egito. Em inglês, o que
  se busca é viagem e clima, ocupado por gigantes antigos (19,9 mi, 13,6 mi, 7,4 mi). O efeito Big Sur (a busca americana) não se
  repete aqui.
- **K6 · LEVE · O "passaporte por Fiji" do viral não é a regra.** A tabela NS26 da Nauru Airlines tem o voo doméstico semanal
  Tarawa–Kiritimati, operado para a Air Kiribati (F11). Não usar o mito; se entrar, é com a tabela vigente.
- **K7 · LEVE · Os fatos a conferir antes de um roteiro:**
  - a PIPA (a UNESCO recusou, 403);
  - os "4 dias úteis em comum" antes de 1995;
  - a fatia da pesca na receita;
  - a terra em Fiji (22 contra 55 km², F12);
  - o resultado da emenda de 2026;
  - as datas da Grapple;
  - as reivindicações americanas pelo guano e o condomínio de Canton e Enderbury, na fonte primária;
  - os "3,700 kms" do Atlas contra os nossos 4.568 km.
- **K8 · LEVE · O formato e as frases feitas.**
  - "Inside" é o formato mais fraco do Geoff (mediana de 515 mil, sem estouro; `ilha-pais.md`).
  - "The only country in all four hemispheres" é falso ao pé da letra: a França, os EUA e o Reino Unido também estão nos quatro,
    pelos territórios. A fala certa é "the only country whose own islands straddle both the equator and the 180th meridian".

**Por que 4,5:**
- **No papel, a pauta é forte.** O material é farto. Há três medidas nossas, feitas, e um achado de fonte primária que ninguém
  mostrou (o tratado de 1979 e Kanton). A busca é alta, e o paradoxo cabe no mapa.
- **A hora e o título derrubam.** O gancho viralizou há 17 dias (K1), o título é falso (K2), e a miniatura proposta mentiria (K3).
  Em dezembro vem a onda da linha da data (K4).
- **Na régua das outras pautas:** fica acima do Darién (4,0), cuja onda era maior e em inglês, com o título colidindo. Fica abaixo das
  que ficaram de pé (5,5 a 6,0), porque aqui a onda é o próprio gancho.

## 9. Para a Sala

- **Kiribati vai para a reserva**, com as medidas e as fontes prontas.
  - Testar de novo em **março de 2027**, depois da onda de dezembro e janeiro.
  - Fica de pé se, nas 8 semanas anteriores, não houver curto de 100 mil sobre a largura, a linha da data ou a viagem interna, nem
    3 longos em inglês com público sobre Kiribati.
- **Se a Sala ler a régua só para o inglês** (o viral é em espanhol, e os longos não são do ângulo) e o Lucas quiser Kiribati agora,
  eu daria **DE PÉ COM AJUSTE, 5,0**, com três condições:
  1. **O ângulo é a geopolítica e a largura:** o tratado de 1979, Kanton, a ZEE e a China. A linha da data fica só no ato 1, nunca
     no gancho nem na miniatura.
  2. **O título fica sem superlativo:** "Inside Kiribati, the Country as Wide as the Lower 48" ou "Why the US Gave Up 14 Islands to
     Kiribati". Este 2º é o mais nosso.
  3. **A data:** publicar **até ~10/12** (antes do curto anual da GeoGlobeTales, que saiu em 19/12 e 30/12) ou depois de
     fevereiro.
- **Antes de um roteiro**, ler na origem o que ficou em K7. O mais urgente é a reivindicação americana sobre Kiritimati, a
  origem dela e o porquê de o Reino Unido testar bombas ali.
- **O vidIQ:** 40 créditos (1 `keyword_research`, 6 `youtube_search` e 1 `video_transcript`).
  - O saldo foi de 4.936 a 4.866; 30 desses créditos são de outro agente que rodou ao mesmo tempo.
  - O teto acabou: o título "Why the US Gave Up 14 Islands to Kiribati" foi testado só por uma busca de relevância, sem data.
