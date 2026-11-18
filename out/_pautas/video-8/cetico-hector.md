# Cético: `hector` (a tempestade das ilhas Tiwi, "Hector the Convector"), 18/11/2026

**Veredito: DE PÉ COM AJUSTE. Nota: 5,5 / 10** (a do `estrutural-r3` era 5,5, caindo na leitura literal; pela régua nova, não cai).

A régua é a nova do Lucas, no chat da Sala, em 18/11/2026: "Eu preciso arriscar em algo mesmo que já exista... Desde que não seja atual"; "Algo
chamativo, não necessariamente que vá ganhar em pesquisa, mas em curiosidade". Vídeo antigo, mesmo grande, não derruba; curto com menos de 2 mil
views é ruído; derrubam a onda do momento (viral de 100 mil ou mais, ou notícia quente, nos últimos 2 meses; ou 3 ou mais longos com público nas
últimas 8 semanas) e o título igual ou quase igual nos últimos 12 meses.

**Pela régua nova, a pauta não cai.** Não há onda: nenhum viral, nenhuma notícia quente e um só longo nas últimas 8 semanas (4:32, 14 views). Os
~30 curtos de 2026 são ruído, e os antigos não passam de 16,7 mil. **O que cai é o título:** a família "3 PM / every day / clockwork" tem pelo
menos 12 títulos iguais ou quase iguais em 12 meses, entre eles o próprio título de trabalho do `estrutural-r3` (§2).

**A lenda é meio falsa, e o dado conserta:**
- Não é todo dia. Na fonte primária, Hector aparece em 70 % dos dias antes da monção (1990–91). Na nossa medida, em 67 % das tardes de novembro.
- Não começa em setembro: 0 de 30 dias em setembro de 2024 (§4).
- As ilhas não são pirâmides: o ponto mais alto tem 120 m.
- As brisas do mar quase nunca se chocam no meio: em ~80 % dos casos, quem arma o gigante é a frente fria das primeiras chuvas (F7).
- **O "3 p.m." se segura.** Nos 52 dias de tempestade, os primeiros topos abaixo de −63 °C aparecem às 15h (mediana), e o pico vem às 16h.

**A medida é nossa e é a melhor cena:** em três novembros de satélite Himawari (dado aberto, sem login), as ilhas tiveram a tempestade em 67 % das
tardes. Uma área de mar do mesmo tamanho e da mesma forma, ~260 km a oeste, teve em 6 %. As ilhas fazem a própria tempestade (§4).

**O ajuste:**
1. **Título do contraste, sem a palavra do enxame: "Why These Australian Islands Make Their Own Thunderstorms"** (57).
2. Um roteiro que conta a lenda e a testa.
3. O ato 3 fora da ilha (a Flórida, a mesma máquina), para chegar a 13–16 min.

**O ponto mais grave (K1):** em 15 anos, nenhum vídeo do assunto passou de 16,7 mil views. O ABC, com 2,64 mi de inscritos, fez 12,7 mil. A
curiosidade é a melhor da lista no papel, e ainda não tem um clique que a prove.

Lido entre ~01:17 e ~01:47 de 18/11/2026 (hora de Brasília). Os scripts, as respostas e as saídas estão em
`out/_pautas/video-8/_trabalho/cetico-hector/`:
- `vidiq.tsv`: as 6 chamadas (30 créditos, no teto) e as linhas que importam;
- `watch.jsonl`: as 6 páginas `/watch` lidas pelo `../yt_meta.py`;
- `hsd.py` (o leitor do formato da JMA), `teste_hsd.py`, `himawari_baixar.py`, `himawari_baixar_h8.py`, `himawari-log.txt` (os 404),
  `himawari_medir.py`, `himawari-saida.txt`, `topo_frio.py` e `topo-frio-saida.txt`: a medida (§4). Os scripts que leem a biblioteca `shapely`
  rodam com `python -P -X utf8 -B` (o `-I` esconde os pacotes do usuário), sempre de dentro da pasta dos scripts, longe dos dados baixados;
- `commons.py` e `commons-saida.txt`: o Commons (API, um pedido por vez, User-Agent do canal);
- `crossref.py` e `crossref-saida.txt`: os resumos dos artigos pela API pública da Crossref (a OpenAlex deu 429 no primeiro pedido e não foi
  repetida: `openalex.py` ficou sem saída);
- `pdf_texto.py`, `pdf_pagina.py` e `fontes/`: o texto extraído dos 7 PDFs, com o sha256 de cada um no topo do `.txt`.

Ficaram em `midia/_pautas/video-8/cetico-hector/`, fora do git: os 7 PDFs (o de Crook é © AMS; os outros, CC BY ou do governo americano), as
páginas rasterizadas (`png/`, com a `prova-dia.png`), o `meta.json` da projeção e os 1.387 cortes do Himawari (`cortes/`, 97 MB). O bruto do satélite (~4 GB) foi apagado arquivo a arquivo,
depois de cortado.

## 1. Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 18/11/2026) | Veredito |
|---|---|---|---|
| F1 | "Hector is the name given to a thunderstorm complex that develops regularly over the Tiwi Islands just north of mainland Australia during the transition season (Nov–Dec, Feb–Mar)." As duas ilhas, "relatively flat", "Melville in the east, Bathurst in the west", somam ~150 km de leste a oeste e 50 km de norte a sul. "The storms, which are easily visible from Darwin 100 km to the south, are among the world's tallest often reaching a height of 20 km." | Crook, N. A. (2001), "Understanding Hector: The Dynamics of Island Thunderstorms", *Monthly Weather Review* 129: 1550–1563, cópia no Zenodo: https://zenodo.org/records/1234729 | **CONFERE**. A estação que ele dá é **nov–dez e fev–mar**, não "setembro a dezembro" (F4). |
| F2 | **A frequência, na fonte primária:** "During the pre-monsoon period of 1990 and 1991 Hectors were observed on **70% of days**" (climatologia de satélite). "Strong locally forced thunderstorms that form over the Tiwi Islands [...] on **∼80% of days**" (citando Keenan et al. 1989, 2000). "Hector systems over the Tiwi Islands are detected on **at least 2/3 of the days**" em nov–dez. Na campanha SCOUT-O3, a Fig. 8 marca Hector às 16h em **13 dos 18 dias** de 16/11 a 03/12/2005 (a contagem é nossa, na figura). | Beringer, Tapper e Keenan (2001), *Int. J. Climatol.* 21: 1021–1036, doi:10.1002/joc.622 (o resumo, pela API da Crossref); May et al. (2009), *Atmos. Chem. Phys.* 9: 15–24, https://acp.copernicus.org/articles/9/15/2009/; Huntrieser et al. (2009), *ACP* 9: 8377–8412, https://acp.copernicus.org/articles/9/8377/2009/; Brunner et al. (2009), *ACP* 9: 93–117, Fig. 8, https://acp.copernicus.org/articles/9/93/2009/ | **"Quase todo dia" NÃO CONFERE ao pé da letra.** A frase verdadeira: "on roughly two of every three afternoons in the weeks before the monsoon". A nossa medida (§4) dá **52 de 78 tardes de novembro (67 %)**, contra 6 % no mar do lado. |
| F3 | **A hora:** em 44 casos de Hector (nov/2005 a fev/2006, radar C-Pol), a hora média da maior altura do eco de 40 dBZ foi **15:26 e 15:35** (alto e baixo CAPE), e a da maior área de chuva, 15:32 e 16:44. "The peaks in radar coverage have not been observed before 02:00 UTC" (11h30 locais). Nos 12 casos de Gentile e Ferretti, o máximo das células ficou **entre 13:10 e 17:10**. No radar de 1998–2017, a chuva sobre as ilhas "continues to increase in magnitude until 15:00 h LT". | May et al. (2009), Fig. 5 (lida na página rasterizada, `png/may2009-p6.png`); Gentile e Ferretti (2016), *Nat. Hazards Earth Syst. Sci.* 16: 431–447, https://nhess.copernicus.org/articles/16/431/2016/; Bergemann et al. (2022), *Q. J. R. Meteorol. Soc.*, doi:10.1002/qj.4360 (cópia aberta no repositório da Univ. de Melbourne) | **"Por volta das 15h" CONFERE** como meio da tarde, com o pico perto das 15h30. **"Promptly at 3 p.m." NÃO CONFERE**: a hora varia de 13h a 17h. A hora local é UTC+9h30 (os artigos: "UTC + 9.5"; o Território do Norte não tem horário de verão). |
| F4 | **A estação:** "transition season (Nov–Dec, Feb–Mar)" (Crook); "transition and monsoon break periods (November–March)" (Huntrieser); "monsoon transition season (October–December, March–April)" (Bergemann). | Crook 2001; Huntrieser 2009; Bergemann 2022 | **"September to March" (Wikipedia, CNN, Weather Network e quase todos os curtos) NÃO CONFERE** em nenhum dos artigos lidos: nenhum cita setembro. A nossa medida por mês (§4) dá **0 de 30 dias em setembro de 2024**, 6 de 27 em outubro e 18 de 29 em novembro. |
| F5 | **A altura:** "Common features of Hector squall lines are radar echo tops up to **16–17 km**"; nas tempestades da região de Darwin, "overshooting tops reaching up to 20 km". Hector "overshot into the stratosphere on 30 November 2005", e as "percées nuageuses [...] avaient été observées à son sommet à **18 km** d'altitude". O avião M55 Geophysica, de teto ~21 km, foi usado "to probe anvil tops and overshoots". | Huntrieser 2009, p. 8380–8381; Dauhut et al. (2016), *J. Atmos. Sci.*, doi:10.1175/JAS-D-16-0083.1 (resumo pela Crossref) e a tese de Dauhut (resumo, doi:10.70675/2a415187zbef4z48a9zb8c8zb0cdddae82b4); Brunner 2009, p. 103 | **"Up to 20 km (12 mi)" CONFERE COM AJUSTE.** O comum é 16–17 km (10–11 mi); 18–20 km é o topo que fura a tropopausa. Na tela: "often 10 miles high, sometimes punching into the stratosphere". O topo mais frio que medimos nas tardes de Hector (§4): −77 °C na mediana, −88 °C no extremo. |
| F6 | **As ilhas são planas:** "The maximum island height is **120 m**." O artigo do MCTEX se chama "Tropical Island Convection in the **Absence of Significant Topography**". | Huntrieser 2009, p. 8380; Carbone, Wilson, Keenan e Hacker (2000), *MWR* 128: 3459, doi:10.1175/1520-0493(2000)128<3459:TICITA>2.0.CO;2 (título pela Crossref) | **CONFERE**. Derruba a explicação popular das "ilhas em forma de pirâmide" (a descrição do vídeo da ABC de 2018, feito com o BOM: "They are roughly shaped like pyramids, where the sides converge"; e a The Weather Network: "collide above the 'pyramid's point'"). |
| F7 | **O mecanismo, corrigido pela ciência:** "Prior to MCTEX, it was theorized that Hector or the largest thunderstorms were produced only after the collision of sea-breeze fronts from the north and south coasts. [...] it was learned that **the sea breezes seldom collided**." No modo mais comum (tipo B, "approximately 80% of Hectors"), a tempestade nasce do encontro de uma brisa do mar com a frente de rajada fria de chuvas anteriores; no tipo A (~20 %, mais fraco), do choque das brisas do norte e do sul. E "one of the reasons the Hector convective system is so strong is that it develops over an island where the land–sea circulation **from all coastlines** can contribute." | Crook 2001, p. 1550–1551; Huntrieser 2009, p. 8381 (tipo A 20 %, tipo B 80 %, citando Carbone et al. 2000) | **CONFERE**, e muda o gancho: **"as brisas se chocam no meio" é o caso minoritário**. A frase verdadeira: "sea breezes from every coast feed it, but the giant is usually set off when a breeze runs into the cold outflow of the island's first showers". |
| F8 | Melville tem **5.786 km²**, a 1ª da lista de maiores ilhas da Geoscience Australia (que não inclui a Tasmânia, um estado); Bathurst, **1.693 km²**, a 4ª. | Geoscience Australia, *Islands* (página atualizada em 04/11/2026): https://www.ga.gov.au/scientific-topics/national-location-information/landforms/islands | **CONFERE** |
| F9 | As campanhas: ITEX (1988), MCTEX (1995, 28 dias em nov–dez), SCOUT-O3/ACTIVE (nov–dez/2005, com o M55 Geophysica e o Falcon do DLR) e TWP-ICE (início de 2006, na monção). "The high predictability of the Hector system was a major motivation for conducting the SCOUT-O3 campaign in Darwin." | Crook 2001; Gentile e Ferretti 2016; Brunner 2009, p. 95; Huntrieser 2009 | **CONFERE** |
| F10 | Os raios: entre as tempestades medidas na campanha, "the highest average stroke rate [...] was observed in the Hector system with 0.2 strokes s−1" (só descargas ≥ 10 kA, rede LINET). | Huntrieser 2009, resumo | **CONFERE** (dado de uma campanha, não climatologia). |
| F11 | "Hector was named by pilots during World War 2 who used it for navigation." | Weatherzone (Ben Domensino, 23/10/2024), atribuindo ao BOM; o BOM, direto, deu **403** (`bom.gov.au/nt/sevwx/hector.shtml`) | **NÃO CONFERIDO** na fonte primária. Nenhum artigo lido traz a origem do nome. Na tela, só como "the story goes", ou fora. |
| F12 | O Bureau of Meteorology sobre Hector ("Meet the locals", a página do NT). | bom.gov.au: **403** | **NÃO CONFERIDO** (site recusou; sem contorno). A CNN (2022) deu **451**. |
| F13 | A Flórida, para o ato 3: "Florida has been labeled the 'lightning capital'"; os máximos de raios no centro da península vêm da colisão das brisas do mar do leste e do oeste; "The highest elevations, only 60–90 m". | Hodanish, Sharp, Collins, Paxton e Orville (1997), *A 10-yr Monthly Lightning Climatology of Florida: 1986–95*, NWS Melbourne: https://www.weather.gov/media/mlb/research/ho_sharp97.pdf | **CONFERE**. É a mesma máquina numa península plana que o público americano conhece. |

**As palavras fortes demais:**
- **"every day" / "every single afternoon"**: falso. Na fonte, 70 % dos dias (1990–91), "at least 2/3", "~80 %"; na nossa medida, 67 % das tardes de novembro (de 31 % a 81 %, conforme o limiar). A frase verdadeira: "on most afternoons before the monsoon".
- **"at 3 p.m. sharp" / "promptly at 3 p.m."**: falso. O pico médio do radar foi 15h26–15h35 em 44 casos, com a hora variando de 13h a 17h (F3); na nossa medida, o nascimento às 15h e o pico às 16h (medianas), com o nascimento entre 11h e 17h. A frase verdadeira: "it tends to peak around three or four in the afternoon".
- **"from September to March"**: não aparece em nenhum artigo (F4). A frase verdadeira: "in the build-up to the monsoon, roughly November and December, and again in the monsoon's breaks".
- **"pyramid-shaped islands"**: falso. O ponto mais alto tem 120 m (F6).
- **"the sea breezes collide in the middle"**: é o caso de ~20 % (F7). A frase verdadeira está em F7.
- **"12 miles high"**: é o máximo, não o comum (F5).

## 2. A colisão (vidIQ: 30 créditos, no teto)

Seis chamadas, 5 créditos cada pelo campo `_credits.used` (`vidiq.tsv`). O saldo foi de 5.061 a 4.976: a diferença de 85 inclui chamadas de
outros agentes que rodavam ao mesmo tempo. As views das 6 primeiras linhas são das páginas `/watch`, lidas às ~01:30.

**Os 5 mais próximos do ângulo:**

| # | Título | Canal | Inscritos | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|---|
| 1 | Hector: The Thunderstorm That Returns Every Single Day | The Observable | 52 | 991 | 09/06/2026 | 8:44 | **É o único longo explicador** (Crook, MCTEX, ITEX, ACTIVE; foto do Commons, Landsat, Pexels). Repete a lenda ("nearly every single afternoon"). Pela régua nova, um longo minúsculo de 5 meses atrás pesa na nota, não derruba. Fez 19 vezes os inscritos: é a melhor prova de interesse do assunto em 2026. |
| 2 | The Thunderstorm That Keeps a 3 PM Appointment? | A Brighter Look | 0 | 97 | 27/10/2026 | 2:41 | **O ângulo cético, em pequeno:** "does it really arrive every day at 3 PM? [...] why its famous schedule isn't quite as reliable as it sounds", com a figura de Huntrieser 2009 e as fotos do Commons. Sem medida. Está nas últimas 8 semanas, mas tem 2:41 e 97 views: não é "longo com público". |
| 3 | Meet Hector, the Storm You Can Set Your Watch By | Pretty Weird Science | 2 | 14 | 06/11/2026 | 4:32 | Explicador curto com fontes primárias (Crook, Beringer, Brunner, Vaughan, Gentile) e o ato 3 da Morning Glory e do Catatumbo. "He isn't perfect. He sometimes misses a day." Últimas 8 semanas, sem público. |
| 4 | How to tell the time using a thunderstorm \| Weird Weather | ABC News (Australia) | 2,64 mi | 12.678 | 23/03/2018 | 3:16 | Antigo, feito com o BOM; é a fonte da "pirâmide". Não derruba. |
| 5 | Meet Hector the Convector and the morning glory - two #clouds unique to Australia | Bureau of Meteorology | 122 mil | 9.245 | 21/01/2025 | 0:51 | O órgão oficial, num curto de 22 meses atrás. Não derruba. |

**Também perto:** "The Top Ten Hectors of HECTIME" (YouStorm, 4,57 mil inscritos, 03/03/2025, 702 views, 20:06: time-lapse de um caçador de
tempestades, não explicador) e "Hector Thunderstorm Project" (2011, 16.683 views, 10:43): o vídeo mais visto do assunto em 15 anos.

**O enxame do "3 PM":** em 2026, a busca achou **~30 curtos** sobre Hector, quase todos de canais de IA com menos de 700 inscritos, e nenhum passou de
1.285 views (Facts Unlocked, 03/09). Eles se concentram no começo da estação (agosto a novembro). **Os títulos quase iguais nos últimos 12 meses:**
- "⛈️ The Thunderstorm That Shows Up at 3 PM Every Day!" (Hey,LookAtThis!, 10/09/2026, 42 views): é o título de trabalho do `estrutural-r3` sem o
  "Almost";
- "This Storm Arrives at 3 PM Every Day Like Clockwork" (17/09) e "A Storm That Shows Up at 3PM EVERY DAY!" (17/09);
- "This Thunderstorm Arrives Almost Every Day at 3 PM!" (03/09) e "Australia Has a Thunderstorm That Arrives Almost Every Day!" (03/11);
- "The Bizarre Storm That Arrives EVERY Day at 3 PM" (21/07, 3:00), "Meet Hector: The thunderstorm that arrives at 3pm everyday!" (14/10);
- "This Thunderstorm Is So Punctual You Could Set a Watch By It" (09/11), "Hector the Convector: The Clockwork Storm" (12/07), "The Giant
  Thunderstorm That's Never Late" (19/04).

**O veredito da colisão:**
- **Derruba o título, não a pauta.** Todo título na família "3 PM / every day / same time / clockwork / set your watch / never late" é igual ou
  quase igual a pelo menos um vídeo dos últimos 12 meses. Caem o título do `estrutural-r3` ("The Thunderstorm That Shows Up at 3 PM Almost Every
  Day") e o exemplo da Sala ("Why a Thunderstorm Hits This Island at the Same Time Every Day", a mesma promessa do "Shows Up at 3 PM Every Day").
- **A onda das últimas 8 semanas não derruba:** nenhum viral (o maior de 12 meses tem 991 views), nenhuma notícia quente (a busca na web por
  "Hector the Convector" 2026 não achou nada; as notícias anuais da Weatherzone, de "a primeira aparição da estação", são de 06/10/2023 e de
  23/10/2024) e um só longo, sem público (o de 4:32, com 14 views).
- **Os antigos não derrubam:** o maior tem 16,7 mil (2011).

## 3. O potencial real, pela régua

| # | Critério | `hector` |
|---|---|---|
| 1 | O nome é buscado | **Não.** "hector the convector" fica abaixo de 750 buscas/mês (volume 0, concorrência 20); "tiwi islands", "tiwi islands storm", "hector storm" e "daily thunderstorm", também. Pela régua nova, a busca pesa menos; o título nomeia a Austrália, que é buscada. |
| 2 | Prova recente de interesse | **Fraca.** Em 15 anos, nenhum vídeo do assunto passou de 16,7 mil views. O ABC, com 2,64 mi de inscritos, fez 12,7 mil; o BOM, com 122 mil, 9,2 mil. Os ~30 curtos de 2026 com o gancho do "3 PM" ficaram todos abaixo de 1,3 mil. A única luz: o longo da The Observable fez 991 com 52 inscritos (19 vezes). Na imprensa, o assunto é perene (CNN 2022, The Weather Network 2019/2024, AccuWeather, Weatherzone 2023 e 2024, Science Times 2024). |
| 3 | O vídeo longo bem feito não existe | **Não existe.** O único longo explicador tem 8:44 e banco genérico, e repete a lenda. Ninguém mediu o relógio. |
| 4 | O paradoxo em 3 frases, visível no mapa | **Sim:** duas ilhas planas (120 m no ponto mais alto) fazem, na maioria das tardes antes da monção, uma tempestade de 16 a 18 km, enquanto o mar do lado fica limpo. No mapa: as ilhas em vermelho, as setas da brisa entrando de todas as costas, o topo frio em ciano. |
| 5 | A geografia explica o porquê | **Sim, com física.** A ilha como fogão (plana, grande o bastante para criar a própria brisa, estreita o bastante para a brisa de toda costa chegar ao meio de tarde), o ar úmido e o vento fraco da estação de transição, a monção que a desliga, e a correção do MCTEX (F7). Não é geopolítica. |
| 6 | Uma medida nossa, de dado aberto | **Sim** (§4): três novembros do Himawari, hora a hora, sem login, contra o mar e o continente vizinhos. |

- **O enxame:** já chegou com o gancho fácil (os curtos do "3 PM"), mas sem tração e sem longo. O assunto volta a cada estação: o próximo pico de
  curtos será em set–nov de 2027. Não há outlier para copiar agora.
- **13 a 16 min, em 3 atos, sem linguiça:** dá, se o ato 3 sair da ilha.
  1. **A lenda e o relógio.** O que se repete (3 p.m., todo dia, setembro a março, a pirâmide, os pilotos da Segunda Guerra), e o que três novembros de
     satélite mostram (§4).
  2. **Por que ali.** Duas ilhas planas como fogão; a brisa de todas as costas; a correção do MCTEX (as brisas quase nunca se chocam: a
     primeira chuva é quem arma o gigante); por que o pico vem às 15h–16h; por que só antes da monção e por que a monção o desliga; por que tão
     alto (a estratosfera, o avião a 20 km sobre ele).
  3. **A mesma máquina em outro lugar.** A península plana da Flórida, onde as brisas do leste e do oeste se encontram e fazem a "capital dos
     raios" (F13); a Morning Glory de Cape York; e por que uma tempestade previsível virou laboratório do clima (a água que ela joga na
     estratosfera).
  - Sem o ato 3, Hector sozinho dá 9 a 11 minutos honestos (K4).

## 4. A nossa versão: a medida (conta feita)

**O dado:** o Himawari (banda 13, 10,4 µm, 2 km, o "Full Disk"), no balde aberto da NOAA no AWS, sem login: "NOAA and JMA request attribution
for the use or dissemination of unaltered data" (https://registry.opendata.aws/noaa-himawari/, lido em 18/11/2026). O `hsd.py` lê o formato
da JMA, calibra a temperatura de brilho e acha cada pixel pela projeção do próprio arquivo (conferido no 1º quadro: Melville quente e limpa,
Bathurst com uma bigorna fria às 15h de 15/11/2024).
- **A amostra:** de hora em hora, das 10h às 21h de Darwin (UTC+9h30), em novembro de 2023, 2024 e 2025 (90 dias, 1.076 quadros); e 4 vezes
  ao dia (10h, 14h, 16h e 18h) em setembro, outubro e 1º a 17 de dezembro de 2024. O Himawari-9 cobre até meados de setembro de 2025; novembro
  de 2025 está no balde do Himawari-8, que voltou a ser o operacional nesse intervalo (a troca de balde está no `himawari_baixar_h8.py`).
  - Faltaram 4 quadros de novembro (404 na NOAA).
  - **Janeiro a março de 2025 ficaram NÃO MEDIDOS:** às 01h41 a conexão caiu para 64 kB/s, e os ~400 quadros que faltavam levariam horas: parei a baixa.
    O "a monção desliga Hector" fica com a literatura (F2, F4).
- **As regiões, todas com a mesma forma e área (~7.900 km²):** TIWI, as próprias ilhas (Natural Earth 10m); MAR, a mesma forma ~260 km (160 mi)
  a oeste, sobre o mar de Timor; TERRA, a mesma forma ~180 km ao sul-sudeste das ilhas, no continente ao sul de Darwin (só os pixels de terra).
- **"Dia de tempestade" (a definição C):** numa tarde (14h a 18h), pelo menos 2 % da região (~160 km²) com topo de nuvem mais frio que −63 °C
  (210 K), depois de uma manhã limpa (às 10h, menos de 10 % da região com nuvem alta, abaixo de 235 K). A manhã limpa garante que a tempestade
  nasceu ali naquele dia, e não sobrou de um sistema da noite.

**Os resultados** (`himawari-saida.txt`):

| Medida | Ilhas Tiwi | Mar do lado (mesma forma) | Continente (mesma forma) |
|---|---|---|---|
| Dias de tempestade, novembros de 2023 a 2025 (definição C) | **52 de 78 (67 %)** | **5 de 82 (6 %)** | 32 de 79 (41 %) |
| Pela régua, do frouxo (A: 2 % abaixo de −38 °C) ao estrito (F: 20 % abaixo de −63 °C) | de 81 % a 31 % | de 26 % a 2 % | de 66 % a 29 % |
| A hora do pico da área de topo frio, na média dos 90 dias | **15h–16h** (11,2 % e 11,8 % da área) | não tem pico (1 % a 2,5 % o dia todo) | **18h** (11,0 %) |
| Setembro de 2024 (definição C) | **0 de 30** | 0 de 30 | 0 de 30 |
| Outubro de 2024 | 6 de 27 | 1 de 27 | 3 de 29 |
| Novembro de 2024 | 18 de 29 | 1 de 28 | 15 de 28 |
| 1º a 17 de dezembro de 2024 | 6 de 10 (7 manhãs nubladas) | 4 de 12 | 14 de 16 |

- **A frequência:** 59 % em novembro de 2023, 66 % em 2024 e 80 % em 2025 (com 10 manhãs nubladas fora da conta, no mês do ciclone Fina,
  que o Commons registra no MODIS de 20/11/2025). Bate com os 70 % de Beringer et al. para 1990–91 (F2). **"Two afternoons in three", não "every
  day".**
- **A hora:** nos 52 dias, os primeiros topos abaixo de −63 °C aparecem **às 15h (mediana)**, e em 36 dos 52, entre 14h e 16h. A maior área fria
  vem às **16h (mediana)**; em 37 dos 52, às 15h ou 16h. **O "3 p.m." da lenda é a hora típica do nascimento**; o que falha é o "todo dia".
- **O contraste, que é o paradoxo:** o mar do lado, do mesmo tamanho, quase nunca tem a tempestade (6 % das tardes); o continente tem, mas mais
  tarde (pico às 18h) e em menos dias. As ilhas fazem a própria tempestade e a desligam às 19h.
- **A estação:** **nenhum dia em setembro de 2024**, poucos em outubro, a maioria em novembro. De 1º a 17 de dezembro, 7 manhãs já amanheceram
  nubladas: é o sinal da monção chegando, que só a medida de janeiro confirmaria. Num ano só, o "September to March" já não se segura (F4);
  outro setembro medido fecharia a questão.
- **O topo:** nos 52 dias, o topo mais frio da tarde teve mediana de **−77 °C**; em 21 dias, abaixo de −78 °C, e o mais frio, −88 °C. A
  temperatura de brilho não dá a altura sem uma sondagem: a altura fica com a literatura (16–17 km, às vezes 18–20 km; F5).
- **A prova visual:** `midia/_pautas/video-8/cetico-hector/png/prova-dia.png`, as ilhas em 08/11/2024 às 10h, 13h, 15h e 17h: nada até as 13h,
  a bigorna sobre Bathurst às 15h, e às 17h um escudo de topo frio de ~150 km, com o mar e o continente limpos ao lado.

**As frases que a medida dá ao roteiro:**
- "In three Novembers of satellite images, a storm top colder than minus 80 Fahrenheit rose over the islands on two afternoons out of three. Over
  a patch of sea the same size, 160 miles west, it happened on about one in sixteen."
- "The first freezing tops usually show up at 3 p.m. The legend got the hour right. It got 'every day' wrong."
- "In September 2024, the storm did not form once."

**Os limites (K6):** a temperatura do topo é um indício, não o radar nem o raio; a amostra é de hora em hora; os números mudam com o limiar
(daí a régua de A a F); três novembros são pouco para chamar de clima; o Himawari-8 de 2025 e o -9 dos outros anos têm calibrações próprias,
lidas do cabeçalho de cada arquivo; e as regiões de comparação são escolha nossa.

## 5. O material

- **Mapa com geometria real:** as ilhas e a costa do Natural Earth 10m (domínio público, no cache da máquina), Apsley Strait, Darwin; o relevo
  amarelo da miniatura pelo caminho do vídeo 7 (ASTER GDEM pela GIBS). As ilhas têm 120 m no ponto mais alto: no relevo, aparecem quase lisas,
  o que é o próprio paradoxo.
- **Satélite aberto:**
  - **o Himawari, que já baixamos** (NOAA/JMA, atribuição pedida, sem login): a animação das ilhas "acendendo" à tarde, dia após dia, é a cena
    que nenhum vídeo tem. A banda visível (B03, 500 m) do mesmo balde dá a bigorna branca vista de cima, se a Sala quiser;
  - o Landsat 8 da NASA Earth Observatory, "Folklore and Science Meet at Tiwi" (Joshua Stevens, 27/12/2019), também no Commons;
  - 12 arquivos MODIS no Commons com as Tiwi (queimadas, poeira, o ciclone Fina de 20/11/2025); a categoria "Satellite pictures of the Northern
    Territory" tem 81 arquivos.
- **Fotos de Hector, de acervo livre: só duas**, ambas de Djambalawa, CC BY-SA 3.0, no Commons: "HectorCloud.jpg" (1280 × 925, 25/11/2010, do
  Stokes Hill Wharf) e "Hector cloud from Gunn Point.jpg" (1024 × 643, 29/12/2012). As duas estão abaixo do piso de 1.600 px do `buscar-midia` e
  já aparecem em quase todos os curtos (K3).
- **Figuras de artigo, com licença aberta:** o *ACP* publica em CC BY 3.0 ("This work is distributed under the Creative Commons Attribution 3.0
  License", Brunner 2009, p. 93):
  - a série de fotos de Hector crescendo em 30/11/2005, das 11h15 às 14h30 (Huntrieser 2009, Fig. 1);
  - o painel das 18 tardes da SCOUT-O3, às 16h, com Hector circulado (Brunner 2009, Fig. 8);
  - os esquemas do tipo B (Huntrieser 2009, Fig. 2, adaptado de Carbone et al. 2000).
  Brunner, Huntrieser e May (ACP, 2009) e Gentile (NHESS, 2016) trazem a CC BY 3.0 na 1ª página, e Bergemann (QJRMS, 2022) é "open access
  under the terms of the Creative Commons Attribution License". Figura por figura, quem confere é o conferente, antes da cena (uma foto dentro
  de um artigo pode ter outra licença).
- **O resto:** a categoria "Tiwi Islands" do Commons tem 21 arquivos (os postes pukamani, a carta do Almirantado de 1883, a foto da ISS
  "ISS052-E-53588"); "Darwin, Northern Territory", 373; "Thunderstorms in Australia", 46. A tempestade genérica (time-lapse de cumulonimbo, raios)
  vem do banco pago, na caça.
- **Dá para 13 a 16 min:** sim, com o Himawari como fio visual e o ato 3 na Flórida. Sem vídeo livre de Hector visto do chão, a tempestade se vê
  quase sempre de cima, em mapa e em satélite.

## 6. O título e o gancho que eu defendo

**O que o título não pode ter:** "3 PM", "every day", "same time", "clockwork", "set your watch", "never late", "appointment". Cada um repete um
título dos últimos 12 meses (§2). E a lenda inteira ("todo dia às 15h, de setembro a março, ilhas em pirâmide") é meio falsa (§1 e §4).

**O que é nosso:** as ilhas fazem a própria tempestade, e o mar do lado, do mesmo tamanho, não (67 % contra 6 % das tardes de novembro, §4).
Isso é o paradoxo, cabe no mapa e nenhum dos ~30 vídeos de 2026 mostrou.

- **Título:** **"Why These Australian Islands Make Their Own Thunderstorms"** (57 caracteres).
  - Nomeia a Austrália, que o espectador conhece; guarda as Tiwi, Hector e a hora (`marca/embalagem.md` §2).
  - É verdadeiro e medido, não usa palavra do enxame e se paga nas duas primeiras frases do gancho.
  - "make their own" não apareceu em nenhum título das 6 buscas, nem numa busca na web; **não foi medido no vidIQ** (o teto acabou).
- **Alternativas:**
  - "We Timed Australia's 'Clockwork' Thunderstorm From Space" (56): a medida como promessa. "Clockwork" está num curto de 11 s ("Hector the
    Convector: The Clockwork Storm", 12/07/2026, 898 views), mas a promessa é outra (o teste, não a lenda).
  - "Why Two Flat Islands Grow Storms Taller Than Airliners Fly" (58): o paradoxo da altura, verdadeiro (topo de 16–17 km contra o cruzeiro de
    10–12 km). Perde o nome do país.
- **Gancho** (3 frases, 45 palavras; a resposta não vem): "On most afternoons before the monsoon, two flat islands north of Darwin,
  Australia, grow a thunderstorm taller than airliners fly. A patch of sea the same size, 160 miles west, almost never does. Locals call
  it Hector, and say it shows up at 3 p.m."
  - O "locals call" tem fonte: "locally known as Hectors" (Beringer 2001) e "known colloquially as 'Hector'" (May 2009). O "say it shows up at 3
    p.m." é a lenda, dita como lenda; o vídeo mostra logo depois que a hora bate e o "todo dia", não.
- **Miniatura** (o estilo do vídeo 7):
  - as ilhas Tiwi em **vermelho**, quase lisas, sobre o mar **azul**; Darwin e a costa do continente em relevo **amarelo**, embaixo;
  - em **ciano**, o topo frio real de uma tarde medida (o contorno abaixo de −63 °C das 16h de 08/11/2024, do Himawari): é a tempestade, sem
    desenhar nuvem que não existe em documento;
  - **setas brancas grossas** entrando do mar pelas costas norte, sul e oeste: a brisa de todas as costas;
  - na caixa preta, **"3 PM?"** (a lenda posta em dúvida, sem dar a resposta); a B, **"MADE HERE"**, com uma seta curta para as ilhas;
  - **nunca "EVERY DAY"** nem "20 KM".

## 7. Os pontos

- **K1 · GRAVE · A prova de interesse é a mais fraca das pautas de pé.**
  - Em 15 anos, nenhum vídeo sobre Hector passou de 16,7 mil views (o do projeto de 2011).
  - O ABC, com 2,64 mi de inscritos, fez 12,7 mil em 2018; o BOM, com 122 mil, fez 9,2 mil em 2025.
  - Os ~30 curtos de 2026, com o gancho do "3 PM", ficaram todos abaixo de 1,3 mil. "hector the convector" e "tiwi islands" têm menos de 750
    buscas por mês.
  - A única luz é o longo da The Observable (991 views com 52 inscritos, 19 vezes).
  - **No papel, é a melhor curiosidade da lista; no YouTube, ainda não houve um clique que prove.** Pela régua nova, é o risco principal.
- **K2 · GRAVE · O gancho fácil está tomado, e é meio falso.**
  - A família "3 PM / every day / clockwork" tem pelo menos 12 títulos iguais ou quase iguais em 12 meses: caem o título do `estrutural-r3` e o
    exemplo da Sala (§2).
  - E a lenda não se segura: não é todo dia (67 % das tardes na nossa medida; 70 % em 1990–91), não há tempestade em setembro (0 de 30 em 2024),
    as ilhas não são pirâmides (120 m) e as brisas quase nunca se chocam (F7).
  - **Corrige-se** com o título do contraste (§6) e com um roteiro que conta a lenda e a testa. A hora ("3 p.m.") é o pedaço da lenda que se segura.
- **K3 · MÉDIO · Pouca imagem livre do protagonista.**
  - São duas fotos de Hector no Commons (CC BY-SA 3.0; 1280 e 1024 px de largura, abaixo do piso de 1.600 px), já usadas por quase todos.
  - Não há vídeo livre de Hector visto do chão.
  - O vídeo vive do Himawari (nosso), das figuras CC BY 3.0 dos artigos, do Landsat e do banco pago para a tempestade genérica, que a tela não
    pode chamar de Hector.
- **K4 · MÉDIO · 13 a 16 min só com o ato 3.** Hector sozinho dá 9 a 11 minutos honestos. A Flórida (a mesma máquina, F13) e a Morning Glory
  completam, mas o ato 3 tem de ser pesquisado como pauta própria (só a fonte da NWS foi lida).
- **K5 · MÉDIO · É física, não geopolítica.** A geografia explica (a ilha plana como fogão, o tamanho, a estação), mas não há fronteira, tratado nem
  dinheiro. O Big Sur também não tinha, e foi o melhor do canal.
- **K6 · MÉDIO · A medida tem limites** (§4): é temperatura de topo, não radar nem raio; de hora em hora; três novembros; muda com o limiar (de 31 % a
  81 %); janeiro a março não foram medidos. Na tela, sempre "by our count of satellite images", com o limiar dito em palavras ("storm tops colder
  than −80 °F").
- **K7 · LEVE · O nome e o BOM ficaram NÃO CONFERIDOS.** Os "pilotos da Segunda Guerra" só aparecem em imprensa (Weatherzone, The Weather Network);
  o bom.gov.au deu 403, e a CNN, 451. Na tela, "the story goes", ou fora.
- **K8 · LEVE · O ângulo cético já foi tocado, em pequeno.** "The Thunderstorm That Keeps a 3 PM Appointment?" (A Brighter Look, 27/10, 2:41,
  97 views) pergunta se é todo dia; "Meet Hector…" (Pretty Weird Science, 06/11, 4:32, 14 views) diz que "he sometimes misses a day". Nenhum
  mediu. A The Observable pode fazer a continuação do longo dela.
- **K9 · LEVE · A altura vem da literatura.** A nossa medida dá a temperatura (−77 °C na mediana, −88 °C no mais frio), não a altura. Na tela, "often
  10 miles high" (F5), nunca "12 miles" como regra.

**Por que 5,5:**
- os fatos se seguram com cinco frases trocadas, e as trocas viram o roteiro (a lenda contra o dado);
- a medida é nossa, limpa e visual: as ilhas contra o mar (67 % contra 6 %), o nascimento às 15h, setembro zerado;
- o lugar do longo bem feito está vago, sem onda e sem notícia;
- a geografia explica de verdade, e a miniatura cabe no estilo do vídeo 7.
Fica abaixo das de pé com 6,0 (Banff, o Arizona Strip, a Nova Zelândia) porque falta a prova de que o assunto faz clicar (K1), o título não pode
usar a palavra que mais clicaria (K2) e a duração depende de um ato 3 ainda não pesquisado (K4). **Cai para DERRUBADO** se a Sala exigir prova de
interesse em 2026 (um estouro de 10 mil ou mais no assunto), ou se o teste de leitores achar o título do contraste fraco sem o "3 PM".
