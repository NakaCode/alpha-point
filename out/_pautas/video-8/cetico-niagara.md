# Cético: `niagara` — "Why Niagara Falls Is Turned Down Every Night" (17/11/2026)

**Veredito: DERRUBADO. Nota 3,5 / 10.**

- **O ponto mais grave (K1):** o título de trabalho já existe, palavra por palavra, publicado há 4 dias (Grand Works, 13/11/2026), e
  o ângulo do tratado de 1950 já tem **pelo menos 10 vídeos longos** desde 17/11/2025 (7 deles entre 04/10 e 13/11/2026) e mais de
  15 shorts. A `demanda.md` contou 1 longo e 2 shorts: a busca dela (c28) usou uma frase que não pegou o enxame.
- O enxame chegou em dias: depois dos dois shorts de ~240 mil views (21 e 25/10) vieram 4 longos em 3 semanas (28/10, 03/11, 11/11
  e 13/11), e todos os longos do ângulo têm a mesma espinha (1848, Tesla, o tratado, as 18 comportas, os túneis, o lago enchido à
  noite, 1969, os resgates). Nenhum desses longos passou de 337 views.
- O paradoxo existe, mas o "every night" é exagero: de novembro a março a cachoeira fica no mínimo noturno o dia inteiro (medido).
- Repete o esqueleto do vídeo 7, publicado hoje ("Why the U.S. Pays Canada to Keep Part of a Lake Empty"): tratado EUA–Canadá,
  hidrelétrica, algo reduzido de propósito.
- O que a pauta tem de melhor é nosso e é novo: o medidor da NOAA logo abaixo das quedas mostra o rio caindo **2,75 m (9 pés)
  em 212 das 214 noites da temporada de 2025**, às 22h em ponto (20h a partir de 16/09), e quase nada no inverno. Nas descrições
  dos 10 longos, nenhum cita dado medido hora a hora (os números deles são o tratado e contas sobre a média). Mas a medida não salva a história: ela entraria como o 11º vídeo do mesmo ângulo.

Pastas: o trabalho em `out/_pautas/video-8/_trabalho/cetico-niagara/` (`vidiq-colisao.tsv`, `noaa_noite.py`,
`ashland-2025-horario.csv`, `noaa-noite-resumo.md`, `pdf_texto.py`, `noaa_estacoes.py`).

## 1. Os fatos

Lidos em 17/11/2026. As contas marcadas "conta nossa" usam só os números das linhas citadas.

| # | Fato | Fonte (URL) | Veredito |
|---|---|---|---|
| F1 | O mínimo sobre as cataratas: **100.000 cfs (2.832 m³/s)** das 8h às 22h de 01/04 a 15/09 e das 8h às 20h de 16/09 a 31/10; **50.000 cfs (1.416 m³/s)** "at any other time" (noite e o inverno inteiro); o mínimo de 50 mil sobe quando é preciso lavar gelo. O texto diz "E.S.T." | Tratado de 27/02/1950, Art. IV: https://www.treaty-accord.gc.ca/text-texte.aspx?id=100418 ; IJC, FAQ 2: https://www.ijc.org/en/nbc/watershed/faq/2 | CONFERE |
| F2 | A água além do mínimo vai à energia e se divide **igualmente** entre os dois países (Art. VI). Assinado em Washington em 27/02/1950; em vigor em 10/10/1950 (troca das ratificações, Art. X). | Mesmo texto do tratado | CONFERE |
| F3 | **O relógio é o de verão:** em julho de 2025 o rio abaixo das quedas começa a cair às 22h00 EDT e a subir às 8h00 EDT; de 16/09 em diante, às 20h. Uma troca de notas de 17/04/1973 interpreta o Art. IV com o horário de verão do Leste. | O medidor (F8). A troca de notas aparece no catálogo do governo dos EUA (mocat.library.unt.edu/catalog/952-05828) e na UNTS, vol. 912, que não abri | CONFERE pelo medidor; o texto de 1973, NÃO CONFERIDO |
| F4 | **Quem confere não é a INBC.** O tratado (Art. VII) manda cada governo designar um representante; os dois (a International Niagara Committee, INC) apuram a água e fazem **inspeções semanais**, e as violações vão ao relatório anual da INC aos governos. A INBC (criada por diretiva da IJC em 1953) regula o nível do Chippawa–Grass Island Pool (diretiva de 1993, média de longo prazo 171,16 m) e cuida da barreira de gelo. | Tratado, Art. VII; IJC FAQ 1: https://www.ijc.org/en/nbc/watershed/faq/1 ; FAQ 2; INBC, 143º relatório, §3 | CONFERE (corrige a pauta) |
| F5 | A **International Niagara Control Works**: 18 comportas, ~0,8 km acima da Horseshoe, da margem canadense até pouco além do meio do rio; operada pela OPG e pela NYPA, para garantir a vazão sobre as quedas e o nível do pool, lavar gelo e ajudar em emergências. | IJC FAQ 5: https://www.ijc.org/en/nbc/watershed/faq/5 | CONFERE. O ano da obra (1954–57, ampliada em 1963, por fonte secundária): NÃO CONFERIDO, a IJC não diz |
| F6 | **A vazão média do rio** em Queenston, 1900–2023: 5.993 m³/s de março a agosto e 5.689 m³/s de setembro a fevereiro, ou ~**5.840 m³/s (~206 mil cfs)** no ano (conta nossa, pesada pelos dias). | INBC, 143º relatório (mar–ago/2024), §7, Tab. 3; 144º (set/2024–fev/2025), §7: https://www.ijc.org/sites/default/files/INBC_semi_annual_143_final.pdf e `..._144_final.pdf` | CONFERE |
| F7 | **O que vai às usinas de fato:** mar–ago/2024, Sir Adam Beck I e II 1.830 m³/s + Robert Moses 2.169 = 3.999 de 6.558 m³/s (**61 %**); set/2024–fev/2025, 1.812 + 2.027 = 3.839 de 5.859 (**65,5 %**). Nos 12 meses, **~63 % do rio passou pelas turbinas e ~37 % pelas quedas** (conta nossa). À noite, o tratado deixa tirar até ~76 % do rio médio (1 − 1.416/5.840; teto, não medida). | INBC 143 e 144, §7 | CONFERE (a fração noturna real: NÃO MEDIDA, o dado horário das usinas não é público) |
| F8 | **A queda noturna, medida (a nossa medida, §4):** no medidor 9063007 da NOAA, em 2025, queda ≥ 1 m em 212 das 214 noites de 01/04 a 31/10 (mediana 2,75 m = 9,0 pés; a maior, 3,38 m) e em 16 das 151 noites fora disso (mediana 0,06 m). Em 01/04/2025 o rio subiu às 8h pela primeira vez no ano (96,1 → 98,8 m). | NOAA CO-OPS, `hourly_height`, estação 9063007 "Ashland Ave", IGLD, hora local: https://api.tidesandcurrents.noaa.gov/api/prod/datagetter (o medidor que a INBC usa para a vazão sobre as quedas, Fig. 9 dos relatórios) | CONFERE |
| F9 | **As comportas baixam a cachoeira para salvar gente:** o mínimo do tratado foi violado de propósito em resgates e buscas (22/05 e 11/07/2024; 01/09, 21/09, 23/10 — "All control works gates were closed" — e 29/10/2024), e uma vez por erro de operação (06/07/2024). | INBC 143, §5; 144, §5 | CONFERE |
| F10 | A NYPA: "up to 2.6 million kilowatts", primeira energia em 1961, um túnel com comportas sob a cidade leva a água a dois reservatórios; a usina fica 4,5 milhas abaixo das quedas. | https://www.nypa.gov/power/generation/niagara-power-project | CONFERE |
| F11 | A OPG: as capacidades de Sir Adam Beck e o 3º túnel (2013, ~500 m³/s). | opg.com respondeu **403**; não contornei. A IJC (FAQ 7: https://www.ijc.org/en/nbc/watershed/faq/7) confirma só que o 3º túnel entrou em operação em 2013 | NÃO CONFERIDO (o número) |

**"Turned down every night" é verdade?** Em parte. É verdade de 1º de abril a 31 de outubro (212 de 214 noites em 2025), e a hora é
exata. **De novembro a março não há virada noturna: a cachoeira fica no nível de noite o dia inteiro** (o nível de dia no inverno,
96,4–97,1 m, é o da noite de verão, 96,4–96,8 m). E "turned down" descreve o efeito, não a regra: o tratado fixa mínimos, e quem
tira a água são as usinas, até onde a capacidade deixa (na primavera, com o rio cheio, a noite cai só 1,7–1,95 m).
A frase verdadeira: **"Every night from April to October, Niagara Falls is turned down, and from November to March it is never
turned back up."** (O "never" ainda pede cuidado: 16 noites de inverno tiveram virada de 1 m ou mais, provavelmente gelo ou cheia.)

## 2. A colisão

vidIQ, 5 buscas (`vidiq_youtube_search`) e 1 `keyword_research`; as linhas brutas em `_trabalho/cetico-niagara/vidiq-colisao.tsv`.
Views e inscritos da hora da busca (17/11/2026, ~21h).

**Os 5 mais próximos** (todos longos, todos nos últimos 12 meses):

| Título | Canal | Inscritos | Views | Data | Duração |
|---|---|---|---|---|---|
| **Why Niagara Falls Is Turned Down Every Night** (idêntico; conferido na página /watch) | Grand Works | 1 | 0 | 13/11/2026 | 8:03 |
| Niagara Falls Is Turned Down Every Night. On Purpose. | The Unnoticed | 14 | 36 | 20/10/2026 | 9:57 |
| Who Turns Down Niagara Falls Every Night? | The Secret Switch | 11 | 197 | 28/10/2026 | 15:41 |
| Why Niagara Falls Is Turned Down at Night | Place Logic | 7 | 4 | 11/11/2026 | 9:16 |
| Niagara Falls Is Turned Off Every Night—And You Never Noticed | Psyche & Earth | 28 | 172 | 17/11/2025 | 12:59 |

Outros longos no mesmo ângulo: "Why North America's Most Powerful Waterfall Refuses to Run at Full Power" (BlueVoid, 04/10, 12:48,
47 views); "Niagara Falls Was Turned Off in 1969. It Was Turned Off Again Last Night." (Late Final, 16/10, 10:53, 31); "Why Niagara
Falls Barely Moves Anymore" (The Strange Terrain, 03/11, 18:48, 193; o tratado e os túneis como capítulo); "The Hidden Power System
Inside Niagara Falls" (Earth writ, 28/09, 19:39, 337); e dois em que o ângulo é capítulo ("The Economics of Niagara Falls", Iconomics,
09/08; The Canadian Wealth Architect, 16/09).

Os shorts do ângulo: Greenmark Geo (10 mil inscritos) **240,7 mil** (21/10); The Last Postcard (556) **235,2 mil** (25/10, 2:58);
Nobody Checked The Map 3,5 mil (14/11); Open Data Canada 3,2 mil (20/10); Not How It Works 2,3 mil (30/08); The Big Takeaway 2,1 mil
(16/08); The Query 1,1 mil (23/10); e mais 7 abaixo de 310 views (de 22/09 a 16/11).

Sem data, antes de 17/11/2025: no ângulo da noite, só um short de 2023 com 512 views. O que ocupa a busca de "Niagara" + "turned off"
é o 1969 e o "drenaram": Miniminuteman 8,9 mi (short, 2025), Infographics Show 4,1 mi (short, 2022) e 1,25 mi (7:41, 2022), Facts Verse
3,1 mi (5:42, 2020), AccuWeather 2,5 mi (short, 2025), History Explained 12,5 mi (short, 12/2025) e o longo da IT'S HISTORY, 669 mil.

**Colide?** Sim, no título e no ângulo. O título é idêntico a um de 4 dias atrás e quase idêntico a mais 4. As descrições desses
vídeos já usam as mesmas peças que nós usaríamos: a troca de notas de 1973 sobre o relógio (The Unnoticed), "more than half through
the turbines" em 2015 (The Unnoticed), "three-quarters at night" (The Query, Psyche & Earth), as 18 comportas, o lago enchido à noite
(Grand Works), os resgates (Grand Works, The Unnoticed). Até a frase "Niagara Falls had business hours" já foi usada (Nobody Checked The Map).

## 3. O potencial, pela régua

| Régua | Leitura | Nota |
|---|---|---|
| 1. O nome é buscado | "niagara falls" ≈ 107,8 mil/mês (concorrência 44, +36,7 %); "niagara falls canada" ≈ 14,7 mil (22) (`demanda.md`, k04). Mas a busca é de turismo (BR 15 %, US 15 %, IN 15 %), e o ângulo não tem busca própria: "niagara falls turned off at night" voltou sem dado no `keyword_research` | Forte no nome, fraca no ângulo |
| 2. Prova recente de interesse | Sim: os shorts de 240,7 mil e 235,2 mil (outubro de 2026) e o 1969 com 12,5 mi | Sim |
| 3. O longo bem feito ainda não existe | Nenhum dos 10 longos é de canal médio nem passou de 337 views; mas são 10, um com o nosso título | Não: o lugar está ocupado, ainda que por minúsculos |
| 4. O paradoxo em 3 frases e no mapa | Em frases, sim. No mapa, médio: o paradoxo é de relógio (dia e noite), e o mapa mostra só o desvio (os túneis em volta das quedas) | Médio |
| 5. A geografia explica o porquê | Em parte: a escarpa do Niágara (o rio desce ~99 m entre o Erie e o Ontário, e as usinas no pé da escarpa usam o desnível todo, que as quedas usam só em parte; número a conferir) explica por que a água vale mais nos túneis. O "à noite" é horário de turista e tratado | Parcial |
| 6. Uma medida nossa | Sim, e nova (§4) | Sim |

**O enxame:** o ângulo já tinha longos esparsos (17/11/2025, 09/08, 16/09, 28/09) e shorts de ~2 mil views em agosto; depois dos
shorts de 240 mil (21–25/10), vieram longos em 28/10, 03/11, 11/11 e 13/11, de 3 a 19 dias depois. Até nós publicarmos (a linha leva
2 a 3 semanas), haverá mais.

**Sustenta 13 a 16 min calmos?** Sim, sobra assunto (a escarpa e a erosão, 1848, Adams e Tesla, a queda da Schoellkopf em 1956, o
tratado e o relógio, as comportas, os túneis e os reservatórios, o medidor, os resgates, 1969, a erosão mais lenta). Mas é
exatamente a espinha que os 10 já usaram, capítulo por capítulo.

## 4. A nossa medida

**Possível com dado aberto, e feita:** `_trabalho/cetico-niagara/noaa_noite.py` baixou as 8.758 horas de 2025 do medidor 9063007 da
NOAA (Ashland Ave, no rio logo abaixo das quedas e acima da volta das usinas; o mesmo ponto que a INBC usa para a vazão sobre as
cataratas), um pedido por mês, um por vez. O resumo está em `noaa-noite-resumo.md`.

- **Na temporada (01/04–31/10/2025): o rio abaixo das quedas caiu 1 m ou mais em 212 de 214 noites; a queda mediana foi 2,75 m
  (9,0 pés), e chegou a 3,38 m.** Junho, julho e agosto: 92 de 92 noites.
- A descida começa às 22h (até 15/09) e às 20h (de 16/09 a 31/10), hora local; em julho, o rio cai ~2,1 m na primeira hora
  (99,71 → 97,62 m, de 22h a 23h em 01/07). De manhã, a subida começa às 8h.
- Fora da temporada: 16 de 151 noites, queda mediana 0,06 m. O nível de dia no inverno é o da noite no verão.
- Somada aos relatórios da INBC (F7): de março de 2024 a fevereiro de 2025, **~63 % do rio Niágara passou pelas turbinas, não pelas
  quedas**.

O que a medida não diz: a vazão em m³/s hora a hora (o nível não tem curva de conversão pública) nem a fração exata que as usinas
tiram à noite.

## 5. O material

- **Mapa com geometria real:** sim. O rio, as quedas, o pool, a INCW, as tomadas d'água e os reservatórios estão no OSM; os lagos no
  Natural Earth; o relevo da escarpa no Copernicus DEM ou no SRTM. A rota dos túneis no OSM: NÃO CONFERIDA (os concorrentes a
  desenharam "schematic").
- **Satélite aberto:** Landsat e Sentinel-2; as fotos da ISS da NASA (domínio público; uma concorrente cita ISS002-E-5325,
  ISS034-E-065124 e ISS064-E-53177).
- **Foto e vídeo de acervo livre:** muito. No Commons, vídeo das quedas sob CC BY e BY-SA (a The Query lista 6 arquivos), fotos de
  Sir Adam Beck, da Robert Moses e do Niagara Tunnel; na NARA, a Robert Moses (NARA 549486, domínio público); o desaguamento de 1969
  pelo Corpo de Engenheiros (DVIDS, domínio público). Falta o par de fotos da mesma vista com vazão de dia e de noite: as noites são
  iluminadas, e a prova visual da virada seria o nosso gráfico do medidor.
- **Dado:** a NOAA (domínio público), os relatórios da INBC e o medidor da USGS em Buffalo.

Dá para 13 a 16 min sem esticar.

## 6. O título e o gancho que eu defendo (se a Sala quiser salvar a pauta)

O título de trabalho está queimado (idêntico ao da Grand Works). O único caminho é o da medida:

- **Título:** **The River Below Niagara Falls Drops 9 Feet Every Summer Night** (61 caracteres). Verdadeiro em 2025: junho a agosto,
  92 de 92 noites, mediana de 9,0 pés na temporada. Não achei título igual nem parecido.
- Alternativa 1: **Why Most of the Niagara River Never Goes Over Niagara Falls** (59) — os ~63 % do F7. A The Unnoticed tem "more than
  half" na descrição, não no título.
- Alternativa 2: **Why Niagara Falls Stays Turned Down All Winter** (46) — o lado que ninguém fez, e a época certa para publicar
  (a temporada fechou em 31/10). Ainda carrega o "turned down" do enxame.
- **Gancho** (39 palavras, sem a resposta): "Every summer night at ten, the river at the foot of Niagara Falls starts to drop, about nine feet
  before dawn. At eight in the morning, it comes back. From November to March, it stays down, day and night."
- **Miniatura:** o mapa do rio entre os dois lagos, com o relevo amarelo da escarpa e a água azul; **em vermelho, os túneis e
  condutos** que contornam as quedas (da margem do pool até Queenston e Lewiston); **em ciano, a crista das quedas** num anel; a
  palavra na caixa preta: **"−9 FT"**; uma seta branca grossa descendo no desfiladeiro.

## 7. Os K

- **K1 — GRAVE. A colisão.** Título idêntico publicado em 13/11/2026 (Grand Works) e mais 4 quase idênticos; ao menos 10 longos no
  ângulo desde 17/11/2025, 7 deles entre 04/10 e 13/11/2026, e mais de 15 shorts. As peças da "nossa versão" (o relógio de 1973, as 18
  comportas, os túneis, o lago à noite, os resgates, 1969) já estão nas descrições deles. Trocar o título não troca a história.
- **K2 — GRAVE. Repete o vídeo 7.** "Why the U.S. Pays Canada to Keep Part of a Lake Empty" saiu hoje: tratado EUA–Canadá, hidrelétrica,
  algo reduzido de propósito. Dois seguidos com o mesmo esqueleto, antes de o Columbia mostrar se o esqueleto anda.
- **K3 — MÉDIO. A procura do ângulo não virou views em vídeo longo.** Depois dos shorts de ~240 mil, os 10 longos ficaram entre 0 e 337
  views. São canais minúsculos, de voz de IA, como a régua prevê; mas é a única prova que existe, e ela é negativa.
- **K4 — MÉDIO. "Every night" é exagero.** Vale de 01/04 a 31/10 (212 de 214 noites em 2025); de novembro a março não há virada
  (16 de 151 noites, mediana 0,06 m). Frase verdadeira no §1.
- **K5 — MÉDIO. A busca do nome é de turista.** As 107,8 mil buscas de "niagara falls" vêm de viagem (BR, US e IN, 15 % cada); o ângulo
  não tem busca medida, e o "turned off" da busca é tomado pelo 1969 (vídeos de 1 a 12,5 milhões).
- **K6 — LEVE. Quem fiscaliza.** Não é a INBC: é a International Niagara Committee (Art. VII), com inspeções semanais; a INBC regula o
  nível do pool e o gelo. Corrigir a pauta e o roteiro.
- **K7 — LEVE. A geografia explica só metade.** A escarpa explica por que a água vale mais nos túneis; o "à noite" é turismo e tratado
  (régua 5).
- **K8 — LEVE. Pendências de fonte.** opg.com deu 403 (as capacidades de Sir Adam Beck e o túnel de 2013, NÃO CONFERIDO); a data da
  INCW e o texto da troca de notas de 1973 não foram lidos na origem.

## 8. Créditos e limites

- **vidIQ:** 5 buscas de 5 créditos (25) e 1 `keyword_research` (até 5; voltou sem dado e talvez não tenha cobrado): **até 30 créditos**.
  Saldo antes 5.626, depois 5.496; a diferença maior vem de outros agentes rodando ao mesmo tempo.
- **Lido:** o tratado (treaty-accord.gc.ca), 4 páginas da IJC, os relatórios 143 e 144 da INBC (PDF, texto extraído pelo PyMuPDF), a
  página da NYPA, a página /watch de 1 vídeo (só o título) e a API da NOAA (14 pedidos, um por vez). opg.com deu 403 e ficou
  NÃO CONFERIDO. Nenhum navegador, nenhum crédito pago além do vidIQ.
