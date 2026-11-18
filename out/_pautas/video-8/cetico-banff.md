# O cético: Banff (`banff`), vídeo 8 (17/11/2026)

**Veredito: DE PÉ COM AJUSTE. Nota: 6,0** (a do `estrutural.md` era 6,5).

**Por quê, em uma linha:** o paradoxo é verdadeiro e se prova na letra da lei (a terra não se vende, a casa sim, e só mora quem trabalha
no parque), a busca de "banff" é grande mesmo tirando o Vietnã, e o vídeo longo com esse eixo não existe. Mas o título de trabalho já
foi usado (um curto de outubro, quase palavra por palavra), o mesmo canal que tomou Jackson Hole já fez um Banff de 38 min com a ferrovia
e a crise da moradia, e a prova de interesse no ângulo é fraca. O porquê do "não pode morar" é lei. A geografia explica o "não pode
crescer": a cidade está nos 3 % do parque que são fundo de vale, e é por esse fundo de vale que a fauna passa.

- **Título que defendo:** "Why You Can Buy a House in Banff but Can't Live in It" (53 car.). Colisão medida: nenhuma com esse título nem
  com esse ângulo (seção 2). Detalhe na seção 6.
- **O ponto mais grave (K1):** o título de trabalho morreu. "Living in Banff | Why You Can't Just Move Into This Canadian Town" (Horizon
  Ledger, 0 inscritos, **14/10/2026**, curto de 55 s, 25 views) é o mesmo título e o mesmo ângulo, um mês atrás. É o enxame: um canal
  de banco de imagens já achou a pauta. Não ocupa a busca, mas o título tem de mudar. Logo atrás (K2): "Why Nobody Wants to Visit
  Banff, Canada Anymore" (Paul McAllister, 126 mil inscritos, 25/08/2026, 38 min, **56.909 views**), com a ferrovia de 1885, o recorde
  de 4,5 milhões e um capítulo de 4,5 min, "The housing and labor crisis". Se esse capítulo explica o "eligible resident" como eixo,
  a nota cai para ~5: a transcrição não foi lida (os 30 créditos acabaram).

Como foi feito: leituras de 17/11/2026, das 21:34 às 21:48 (hora de Brasília). Os scripts e as fontes baixadas estão em
`out/_pautas/video-8/_trabalho/cetico-banff/`. Python só em arquivo. Nenhum navegador, nenhum crédito pago fora do vidIQ. Fontes e
APIs abertas, um pedido por vez, com o User-Agent do canal.

**Recusaram leitura automática, e não foram contornados:** a Statistics Canada (www12 e www150: 403 até no robots.txt), o open.alberta.ca
(403 no robots.txt, na página e no arquivo da lista de população de 2025), o codepublishing.com (403; é onde está o regulamento de
crescimento comercial da cidade), o publications.gc.ca (HTTP 202 sem corpo, que é desafio de robô: o PDF do plano de 2022 foi lido na
versão HTML da Parks Canada). O banff.ca não respondeu (tempo esgotado, duas URLs), como em 01/11 e no `estrutural.md`.

---

## 1 · Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 17/11/2026) | Veredito |
|---|---|---|---|
| F1 | **Quem pode morar.** "eligible resident, in respect of a park, means (a) an individual whose primary employment is in the park, (b) an individual who operates a business in the park and whose presence at the place of business is necessary for the day-to-day operation of the business", (c) o aposentado que trabalhou 5 anos seguidos no parque, (d) o aposentado que morava lá em 30/07/1981, (e) o estudante de escola dentro do parque, (f) o arrendatário anterior a 19/05/1911 e seus descendentes, (g) cônjuge e dependentes de (a) a (f). | National Parks of Canada Lease and Licence of Occupation Regulations, SOR/92-25, s. 2(1) ("current to 2026-10-29", última emenda em 04/12/2024): https://laws-lois.justice.gc.ca/eng/regulations/SOR-92-25/FullText.html | **CONFERE** |
| F2 | **A cláusula do arrendamento.** O arrendamento residencial na cidade de Banff "shall include a term providing that if the leased public lands are at any time occupied by any person who is not an eligible resident, the Minister may terminate the lease" (s. 4(1)(b)); e o arrendatário prova, a pedido, "by way of affidavit or solemn declaration that each occupant of the leased public lands is an eligible resident" (s. 4(2)). | SOR/92-25, s. 4 (mesma URL) | **CONFERE** |
| F3 | **A casa se compra, a terra não, e o dono não pode morar nela.** "You cannot buy land in Banff National Park. Land is leased from Parks Canada. Non-residents may own leasehold properties without living in Banff. However, leasing property does not make you eligible to live in the park." "Leasehold properties cannot be used as secondary homes or vacation homes." E: "If your job or business is based outside Banff National Park, you are not an eligible resident" (o trabalho remoto não vale), e "Home Occupations … and Bed & Breakfasts do not meet residency requirements". | Parks Canada, "Eligible residency – Banff National Park" (modificada em 22/06/2026): https://parks.canada.ca/pn-np/ab/banff/info/serviceimmobilier-realty/resident-residency | **CONFERE.** É o coração do gancho, e é mais forte que o do `estrutural.md`: o trabalhador remoto, com a casa paga, não pode morar nela. |
| F4 | **"Need to reside".** O acordo de incorporação da cidade (1989/1990) a manda "provide a comfortable living community for those persons who need to reside in the townsite in order to achieve its primary function". E o plano: "Housing for eligible residents is a challenge in both communities. While it is not anticipated that all of the housing requirements will be addressed within the two communities…" | Banff National Park Management Plan, 2022 (versão HTML, modificada em 18/09/2023): https://parks.canada.ca/pn-np/ab/banff/info/gestion-management/involved/plan/plan-2022 | **CONFERE** (o texto do acordo de incorporação não foi lido na íntegra: está citado no plano) |
| F5 | **O limite da cidade é lei federal, e o comércio tem teto.** Anexo 4 da Lei dos Parques Nacionais: Banff, "Plan 88090" (a comunidade), "Plan 88091" (as zonas comerciais), **área comercial máxima 361.390 m²**. A s. 33(4) diz que o que entra no Anexo 4 "is not subject to amendment by the Governor in Council" (só o Parlamento muda); a s. 33(5) proíbe arrendamento ou licença comercial que passe do teto. O plano de 2022: "each community's boundaries and its maximum commercial floor space are specified in Schedule 4". | Canada National Parks Act, S.C. 2000, c. 32 ("current to 2026-10-29"): https://laws-lois.justice.gc.ca/eng/acts/n-14.01/FullText.html; plano de 2022 (F4) | **CONFERE.** Comparação, no mesmo anexo: Jasper 118.222 m², Lake Louise 96.848, Field 5.055. |
| F6 | **O parque tem 6.641 km²** ("containing an area of approximately 6641 square kilometres"). | Mesma lei, Anexo 1, Parte 2 (Alberta), (1) Banff National Park of Canada | **CONFERE** (= 2.564 mi², um pouco maior que Delaware inteiro, 2.488,8 mi² com a água: Census Gazetteer 2024, `delaware.py`) |
| F7 | **O recorde.** "In 2025, the park welcomed a record 4,515,168 visitors." Na mesma página: o Canada Strong Pass deu entrada grátis nos parques "during the peak summer and winter periods"; o ônibus Roam teve "record ridership of 2,294,048 passengers within Banff National Park". | Parks Canada, Banff National Park of Canada, Annual Report 2025 (modificada em 14/05/2026): https://parks.canada.ca/pn-np/ab/banff/info/gestion-management/involved/plan/2025 | **CONFERE**, com um cuidado: o recorde de 2025 teve a ajuda da entrada grátis (K6). |
| F8 | **A geografia que aperta.** "The montane zone is the smallest ecoregion in Banff National Park making up only 3% of the total area of the park", entre 1.350 e 1.500 m (até 1.650 nas encostas sul). O alpino é 44 %, e 38 % do parque é rocha, gelo e água sem vegetação. | Parks Canada, "Ecosystems and habitat" (modificada em 22/04/2024): https://parks.canada.ca/pn-np/ab/banff/nature/environnement-environment/ecosystemes-ecosystems | **CONFERE.** 3 % de 6.641 km² ≈ 199 km². |
| F9 | **A fauna passa pelo mesmo fundo de vale.** "the Town of Banff, Trans Canada Highway and Canadian Pacific Railway, along with ever increasing human use, severely restricts wildlife from travelling through the area"; "In the Banff area, corridors are typically narrow, funnel-shaped tracts of land between the developed areas and the steep mountain slopes." Para restaurar o corredor do Cascade, saíram "the bison paddock, horse pasture and stables, and the cadet camp", e o uso da pista de pouso foi restrito; acima de Middle Springs, "A 500 metre wide band of forest … is legally closed to people to protect part of the Sulphur Mountain corridor", "a pinch point … around the town of Banff". | Parks Canada, "Wildlife corridors – a 'moving' story" (modificada em 22/04/2024): https://parks.canada.ca/pn-np/ab/banff/nature/conservation/transport/corridors | **CONFERE.** É o ato que faz a geografia explicar o limite da cidade. |
| F10 | **A origem: fontes quentes e ferrovia.** "Shortly after the creation of the original 26-square-kilometre Hot Springs Reserve in 1885, the Canadian government and the Canadian Pacific Railway began working to develop the hot springs as a tourist destination to increase traffic on the railway." "the community of Banff was established in 1886 as a transportation and service centre for visitors." "Banff National Park was established around the Sulphur Mountain Hot Springs in 1885, as part of a young nation's efforts to connect the country by rail." | Plano de 2022 (F4) | **CONFERE.** A descoberta das fontes por trabalhadores da ferrovia em 1883 fica **a confirmar** (só fontes secundárias). |
| F11 | **População: 8.305 no censo de 2021**; área de terra 4,08 km². O censo municipal de 2017 deu 8.875. | Wikipedia ("Banff, Alberta", pela API do MediaWiki), que cita o perfil do censo de 2021 da StatCan (`wiki_banff.py`). A StatCan recusou (403), e a lista de população de Alberta também (403). | **CONFERE EM FONTE SECUNDÁRIA.** O censo de 2026 ainda não saiu: a 1ª divulgação (população e domicílios) está marcada para **10/02/2027** (anúncio da StatCan de 14/09/2026, pelo resumo da busca; não lido na origem). |
| F12 | **O vale de fora: Canmore.** No censo municipal de Canmore de 2014, **807 adultos (9,41 %)** da população permanente trabalhavam em Banff; 675 deles iam de carro, 35 de ônibus. Canmore fica fora do parque, sem a regra. | Town of Canmore, 2014 Municipal Census (publicado em 24/02/2015), p. 7: https://canmore.ca/public/download/files/231706 | **CONFERE**, mas o dado é de 2014. Um número de hoje (o censo de 2021 da StatCan, de deslocamento) não foi lido (403). |
| F13 | Preço da moradia, aluguel, vacância (a CMHC citada por guias: 1,8 % em outubro de 2025) e o déficit de 700 a 1.000 casas (o prefeito, pela imprensa) | CMHC e Town of Banff | **NÃO CONFERIDO** (o banff.ca não respondeu; a CMHC não foi tentada; só imprensa e sites comerciais nos resumos de busca) |
| F14 | O teto de crescimento comercial de 1998 (~350.000 pés², ou 32.516 m² novos) e quanto falta para esgotar | Regulamento da cidade (codepublishing.com, 403); imprensa de 2017 a 2019 diz que o teto está quase esgotado | **NÃO CONFERIDO** (o 361.390 m² do Anexo 4, F5, é o que vale na tela) |
| F15 | A meta de ~10.000 moradores do estudo do Bow Valley (1996) e a de 8.000 do plano de 1997 | Hodgins et al., USDA Forest Service Proceedings RMRS-P-15-VOL-2 (2000), lido: fala em "almost 10,000 year-round residents" nas duas comunidades e que "stricter limits to growth than those already in place must be imposed", mas não dá a meta: https://www.wilderness.net/NWPS/documents/science1999/Volume2/Hodgins_2-36.pdf | **NÃO CONFERIDO** (a meta em número só em resumo de busca) |

**O paradoxo, na frase verdadeira.** O do `estrutural.md` ("a lei federal não deixa ninguém morar lá sem provar que precisa") está
certo, mas pede três ajustes de palavra:
- **"permission" / "PERMIT ONLY"**: não existe licença de morar. Existe a condição de "eligible resident", provada por declaração
  juramentada nas transações e cobrada pelo arrendatário. A miniatura B do estrutural ("PERMIT ONLY") está errada.
- **"only workers"**: são 7 categorias (aposentados que trabalharam lá, estudantes, herdeiros de 1911, famílias). A Parks Canada
  escreve "For most people, eligibility means being employed in a job that requires you to work in the national park". Na fala:
  "unless you work inside the park", e no corpo do vídeo, as exceções.
- **"buy a home"**: compra-se a casa e o arrendamento; a terra é da Coroa. Isso é o melhor do paradoxo, não um defeito: dito assim,
  ele fica mais estranho e mais verdadeiro.

A frase que se sustenta: *"In Banff, you can't buy the land, but you can buy the house. You just can't live in it unless you work
inside the national park, and that includes working remotely for a company somewhere else."*

---

## 2 · A colisão (vidIQ)

**O gasto:** 6 chamadas × 5 = **30 créditos**, o teto (2 de `keyword_research`, 4 de `youtube_search`; uma das buscas voltou vazia e
cobrou). O saldo foi de 5.486 (21:34) a 5.411; a diferença de 75 inclui outros agentes rodando ao mesmo tempo. Conferi dois vídeos na
página pública `/watch`, um pedido por vez (`watch1.jsonl`), e os capítulos do McAllister (`yt_capitulos.py`).

**As chamadas:**
1. `keyword_research` "banff", research, com relacionadas (o Vietnã, seção 3);
2. `keyword_research` "banff", `country_search` VN (o que o Vietnã procura);
3. `youtube_search` "why you can't live in banff", desde 17/11/2025, por relevância, 20;
4. `youtube_search` "can you live in banff town inside a national park need to reside housing", sem data, por views, 20 (2 resultados);
5. `youtube_search` "you can't live in banff unless you work there", sem data, por views (**vazia**, cobrou 5);
6. `youtube_search` "living in banff", sem data, por views, 25 (`vidiq-living-in-banff.json`).

**Os 5 mais próximos:**

| # | Título | Canal (inscritos) | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|
| 1 | Living in Banff \| Why You Can't Just Move Into This Canadian Town | Horizon Ledger (0) | 25 (`/watch`, 17/11) | **14/10/2026** | 0:55 | **No título e no ângulo, inteiro.** A descrição: "To live there you need an eligible reason, like a job in the park, a business or school, and the land itself is leased, not sold. Around eight thousand residents share it with over four million visitors a year." Imagens de banco (Motion Array). É o enxame, e o título de trabalho ("Why You Can't Just Move to Banff") é quase o dele. |
| 2 | Why Nobody Wants to Visit Banff, Canada Anymore | Paul McAllister (126 mil) | **56.909** (`/watch`, 17/11) | 25/08/2026 | 38:17 | **Nos atos 1 e 3.** Capítulos: "Railroad-led development", "Luxury for the elite", "Exclusion and urban design", "The ghost town of Bankhead", "Highway impact and mitigation", "Railroad dangers to wildlife", "Overtourism crisis", **"The housing and labor crisis" (28:43–33:23)**. A descrição: "the town of 8,000 residents is running out of room", "Workers who keep the hotels running can't afford housing". Não cita "eligible resident" nem "need to reside" na descrição; o capítulo não foi lido. É o canal que tomou Jackson Hole (460 mil). |
| 3 | Banff Residency Requirements \| Real Estate | Vincent & Wright, corretores (421) | 2.915 | 25/08/2021 | 4:06 | No assunto (a regra), com moldura de corretor. Ocupa "can you live in banff". |
| 4 | Buying a home in Banff Alberta 2023 – (MUST KNOW: Need to Reside) | Jamie Robinson, corretor (25) | 388 | 14/08/2023 | 2:44 | No paradoxo do título que defendo ("ALMOST ANYONE CAN BUY REAL ESTATE IN BANFF", e só o morador precisa ser elegível), com 388 views. Não colide no título. |
| 5 | Don't Visit Banff Until You Know These 7 Logistical Nightmares | WIT Travel (227) | 31.045 | 19/07/2026 | 11:07 | Não colide. É a prova de que "os problemas de Banff" rendem em canal minúsculo em 2026 (outlier 74 no vidIQ). |

**Os outros que ocupam a busca de "living in banff"** (por views, sem data): só viagem e hotel, com números grandes e antigos: "Staying In
Canada's Famous Mountain Hotel – Fairmont Banff Springs" (Bright Sun Travels, 4,05 milhões, 2023), "3 Days in Banff, Canada" (Through My
Lens, 881 mil, 09/2025), "DOES BANFF LIVE UP TO THE HYPE?" (Kara and Nate, 558 mil, 2018). E "The Hidden Mysteries of Banff National
Park" (Hammerson Peters, 167 mil inscritos, 18.814, 23/08/2026). **Nenhum explicador da regra de residência com views, em nenhuma data.**

**O que a busca da web (restrita a youtube.com) somou:** nenhum vídeo com "need to reside", "eligible resident" ou "can't live in Banff"
além dos dois corretores. A busca da web não prova ausência.

**Veredito da colisão:** o título de trabalho colide (K1). O ângulo, no vídeo longo, está meio livre: o McAllister tem a ferrovia e a
crise da moradia sob a moldura do excesso de turistas; ninguém fez "a casa que você compra e não pode morar" nem "a cidade espremida nos
3 % do parque". O título que defendo não colide com nada achado.

---

## 3 · O potencial real, pela régua

1. **O nome é buscado: SIM, mas menos do que parece.** "banff" ≈ 43.156 buscas/mês (concorrência 42, +89,2 %), com VN 54 %, US 31 %, CA
   15 %. **A busca vietnamita é sobre a cidade, mas não sobre a história dela:** no Vietnã, "banff 4k" tem 34.673, "banff" 24.661 e
   "banff autumn 4k" 18.631 por mês. É vídeo de paisagem em 4K (de fundo, para TV), não documentário, e em outro idioma; o +89 % vem
   daí ("banff 4k" no geral: 46.231, VN 73 %). **O que sobra nos EUA e no Canadá: ≈ 19.900/mês** (46 % de 43.156), quase tudo de
   viagem ("banff national park" 25.171, "banff canada" 14.361 e caindo 54,9 %, "banff hikes" 4.475). É 1,5 vez o Big Sur (13,3 mil),
   e o Big Sur também vivia de busca de viagem. As caudas do ângulo ("living in banff", "banff housing") não aparecem com volume (< 750
   ou fora da lista).
2. **Prova recente de interesse: FRACA.** No assunto largo, sim: o McAllister fez 56.909 com Banff e o WIT Travel 31.045 com 227
   inscritos, ambos de 2026. **Mas o mesmo McAllister fez 460 mil com Jackson Hole no mesmo mês**: Banff rendeu 8 vezes menos no mesmo
   molde. No ângulo exato, nada estourou; o curto do enxame tem 25 views.
3. **O vídeo longo sobre o ângulo: MEIO LIVRE.** Ver a seção 2. O risco é o capítulo de 4,5 min do McAllister (K2).
4. **O paradoxo em 3 frases e no mapa: SIM.** As 3 frases estão no gancho (seção 6). No mapa: um ponto vermelho de 4,9 km² dentro de
   um parque de 6.641 km² (1 em 1.361), no único fundo de vale.
5. **A geografia explica: EM PARTE.** A regra de quem mora é lei (1911, 1981, 1992, 2000). A geografia explica o resto, e é o que dá o
   vídeo: a ferrovia passou pelo vale do Bow e achou as fontes (F10); o fundo do vale é 3 % do parque (F8); a fauna atravessa as
   Rochosas por esse mesmo fundo, em funis entre a cidade e as encostas (F9); por isso o limite é fixo em lei (F5) e a moradia é
   racionada (F1–F3); e o excesso vai para Canmore, logo fora da porteira (F12). É mais geografia que o Tahoe, menos que o Columbia.
6. **A medida nossa: MODESTA** (seção 4).

**O enxame:** já chegou (o curto de 14/10). Se o nosso estourar, a cópia vem em dias, como sempre. O consolo é que o ângulo depende de
lei e mapa, que o canal de banco de imagens não faz bem.

**Os 13 a 16 min:** sustentam, sem encher, com a história da ferrovia e do vale. Ato 1 (o vale): por que a ferrovia passou ali, as
fontes de 1883-1885, a reserva de 26 km², a cidade de 1886. Ato 2 (a lei e o mapa): as concessões perpétuas (Hodgins et al., F15), o Bankhead que sumiu,
a lei dos parques de 1930 (a confirmar) e a de 2000, o limite no Anexo 4, o teto comercial, o fundo de vale de 3 % e os corredores (o curral dos bisões removido).
Ato 3 (hoje): o recorde de 4,5 milhões, a casa que se compra e não se mora, o trabalhador remoto de fora, a fila de moradia, Canmore.
O lugar é pequeno, então o vídeo tem de ser de mapa, como o Columbia.

---

## 4 · A nossa versão (a medida)

Conta preliminar, com dado aberto (`area_cidade.py`, sobre o limite do OSM, relação 8452792, baixado pela Overpass API):
- **A cidade tem 4,88 km² (1,88 mi²)** no limite do OSM (o censo dá 4,08 km² de terra; a diferença é o rio Bow e o traçado, a conferir
  contra o Plan 88090 das Canada Lands Surveys).
- **É 0,07 % do parque: cabe 1.361 vezes nele.** E 2,4 % do fundo de vale montano (3 % de 6.641 km² ≈ 199 km²).
- **544 visitantes por morador por ano** (4.515.168 ÷ 8.305).
- **O teto comercial**: 361.390 m² = 3,89 milhões de pés² = 7,4 % da área da cidade.

O que daria uma medida forte, e não foi feito (cabe no `research`): com um DEM aberto (o CDEM da NRCan ou o Copernicus GLO-30), medir o
fundo de vale plano e baixo (abaixo de ~1.500 m, declive < 10°) a 15 km da cidade, e quanto dele é cidade, rodovia, ferrovia, campo de
golfe e pista de pouso (OSM), e quanto sobra para os corredores. O número esperado é que a gente ocupa uma fatia grande do pouco chão
plano que existe. Isso não foi mostrado por ninguém.

---

## 5 · O material

- **Mapa com geometria real: SIM.** O parque (o Anexo 1 da lei, ou o limite legal da Parks Canada em dados abertos, licença OGL-Canada,
  a confirmar o conjunto), a cidade (OSM e o Plan 88090), a ferrovia e a Trans-Canada (OSM), o rio Bow e os lagos Vermilion (OSM e
  Natural Earth), o relevo (CDEM ou ASTER GDEM, abertos). **Os corredores de fauna não têm geometria aberta achada**: seria redesenho do
  mapa da Parks Canada, com crédito (a confirmar).
- **Satélite aberto: SIM.** Landsat e Sentinel-2 do vale do Bow; a NASA GIBS para a miniatura, como no Columbia.
- **Fotos de acervo livre: SIM, fartas.** No Commons: "Banff, Alberta" (375 arquivos e 16 subcategorias), "Banff National Park" (665 e
  53), "Bankhead, Alberta" (82), "Banff Avenue" (43), "History of Banff, Alberta" (14) (`commons_cats.py`). Fotos antigas da ferrovia e
  do hotel: Library and Archives Canada e o arquivo Glenbow (licenças a conferir uma a uma). **As fotos da Parks Canada são de direito
  autoral da Coroa e não são livres.** O B-roll genérico da cidade e da Banff Avenue vem da caça.

---

## 6 · O título e o gancho que defendo

**Título:** **"Why You Can Buy a House in Banff but Can't Live in It"** (53 car.). Tem o nome buscado, o paradoxo inteiro e é verdadeiro
na letra da Parks Canada (F3). Não colide com nada achado.
- Alternativa 1: "Why Remote Workers Can't Live in Banff" (38). Verdadeira (F3), atual e estranha; mais estreita.
- Alternativa 2: "Why Banff Can't Grow" (20). É a da geografia (o vale de 3 %, os corredores, o limite em lei); perde a pessoa.
- **Não usar:** "Why You Can't Just Move to Banff" (colide, K1) nem "…Won't Let You Live in Banff" (perto demais do curto).

**O gancho** (36 palavras, sem a resposta):
> "Banff had a record four and a half million visitors last year. You can buy a house in town. But unless you work inside the national
> park, the law says you can't live in it. Why?"

**A miniatura:** o mapa protagonista, com as Rochosas em relevo amarelo e o rio Bow em azul; o parque com contorno branco fino; **a
cidade em vermelho**, minúscula de propósito (1 em 1.361); **o fundo de vale montano em ciano** (a faixa estreita onde cabem a cidade, a
estrada, a ferrovia e a fauna); Canmore como um ponto cinza logo fora do limite, com **uma seta branca grossa** de Canmore para Banff (o
trabalhador que vem de fora). Na caixa preta: **"WORKERS ONLY"** (A). Para o teste: **"0.07%"** (B), a nossa medida. Nada de "PERMIT
ONLY": não existe licença de morar.

---

## 7 · Os pontos (K)

- **K1 · GRAVE: o título de trabalho colide.** "Living in Banff | Why You Can't Just Move Into This Canadian Town" (Horizon Ledger,
  14/10/2026). O canal é minúsculo e o curto não ocupa a busca, mas é título quase igual, no mesmo ângulo, há um mês: pela régua do canal
  (o Atlântico), o título tem de morrer. **O conserto existe** (seção 6), por isso não derruba a pauta.
- **K2 · MÉDIO (sobe para GRAVE se a transcrição confirmar): o McAllister já fez Banff.** 38 min, 56.909 views, 25/08/2026, com a
  ferrovia, o Bankhead, o recorde e "The housing and labor crisis" (4,5 min). É o padrão que derrubou Jackson Hole, mas aqui com 8 vezes
  menos views e moldura de excesso de turistas. **A Sala pode gastar 5 créditos** (`vidiq_video_transcript`, IqD879kcYyU) e ler de 28:43
  a 33:23: se ele explica o "eligible resident" e a casa que não se mora, a nota vai a ~5.
- **K3 · MÉDIO: o porquê do "não pode morar" é lei.** A geografia explica o "não pode crescer" (F8, F9). O roteiro tem de pôr o vale na
  frente: se a resposta do vídeo for "porque o regulamento diz", é o Tahoe de novo.
- **K4 · MÉDIO: a prova de interesse no ângulo é fraca.** Nada estourou com a regra de residência em nenhuma data; o Banff do McAllister
  rendeu 8 vezes menos que o Jackson Hole dele. A pauta vive da busca de "banff" e da miniatura, não de uma onda provada.
- **K5 · LEVE: a busca de "banff" é metade outra coisa.** O Vietnã (54 %) procura paisagem em 4K; o +89 % vem daí. Nos EUA e no Canadá
  sobram ≈ 19.900/mês, de viagem. Ainda é mais que o Big Sur.
- **K6 · LEVE: o recorde de 2025 teve entrada grátis.** O Canada Strong Pass abriu os parques de graça nos picos de 2025 (F7); a fala
  e a tela dizem "record", com essa ressalva no corpo do vídeo.
- **K7 · LEVE: a população é de 2021 e não foi lida na StatCan** (403; lida na Wikipedia, que cita a StatCan). O censo de 2026 sai em
  10/02/2027: se o vídeo for ao ar depois, o número muda.
- **K8 · LEVE: palavras fortes.** "only", "permission", "permit": a regra tem 7 categorias e nenhuma licença. Na tela: "eligible
  resident"; na fala: "unless you work inside the park" e "for most people".
- **K9 · LEVE: "You can buy a house" para quem não é canadense.** O Canadá proíbe a compra de imóvel residencial por estrangeiros (a lei
  de 2023; o prazo em vigor e o alcance, de memória, a confirmar) em áreas urbanas definidas; **se Banff entra nessa proibição fica a
  confirmar**. O título vale para o comprador
  canadense e para o arrendamento, e o vídeo precisa dizer isso se a proibição pegar Banff.
- **K10 · LEVE: o que não foi lido.** Moradia (preço, aluguel, vacância, déficit), o teto comercial de 1998 e quanto falta, a meta de
  moradores dos anos 1990 e o deslocamento de hoje para Canmore ficaram NÃO CONFERIDO (F12 a F15): banff.ca fora do ar, StatCan,
  open.alberta.ca e codepublishing.com com 403.

---

## Os arquivos de trabalho

Em `out/_pautas/video-8/_trabalho/cetico-banff/` (2 MB no total, nada acima de 5 MB):
- `baixar.py` (um pedido, User-Agent do canal) e `grep_html.py` (trechos de HTML); `fontes/`: a lei (`cnpa.html`), o regulamento
  (`sor-92-25.html`), as páginas da Parks Canada (`pc-*.html`), o artigo de Hodgins et al. (`hodgins.pdf`), o censo de Canmore de 2014
  (`canmore-231706.pdf`) e os robots.txt lidos.
- `area_banff.py` (a área do parque no Anexo 1), `area_cidade.py` (a área da cidade e as razões), `osm_banff.py` (a Overpass; deu 502
  uma vez e respondeu na segunda), `delaware.py`, `wiki_banff.py`, `commons_cats.py`, `titulos.py`.
- `dados/osm_banff.json`, `dados/banff_cidade_osm.geojson` (o limite da cidade), `dados/wiki_banff.txt`.
- `vidiq-living-in-banff.json` e `resumo_busca.py` (a busca 6), `yt_meta_longo.py`, `watch1.jsonl` e `yt_capitulos.py` (as páginas `/watch`).
