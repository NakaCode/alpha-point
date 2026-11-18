# Cético: `noruega-rica` — "Why Is Norway So Rich", pelo ângulo da fossa norueguesa e da linha mediana (17/11/2026)

**Veredito: DERRUBADO. Nota 3,0 / 10.**

- **O ponto mais grave (K1):** o ângulo que seria nosso já foi feito, e foi feito agora. Entre 18/10 e 15/11/2026 saíram **7 vídeos
  longos e 1 curto** que contam exatamente a fossa norueguesa e a linha de 1965 ("The Trench That Wasn't a Border", "The Line Britain
  Didn't Fight For", "The Norwegian Trench: Britain's card", "What is the Norwegian Trench and why didn't it block Norway's claim?"),
  todos em canais de 0 a 432 inscritos, com 15 a 782 views. Um deles fez "own calculation" com as coordenadas do tratado, outro deu
  a fatia de Statfjord. O nosso seria o 9º, com a mesma espinha (a carta de 1958, Groningen, o decreto de 1963, a linha de 1965,
  Ekofisk, Statfjord, o fundo, a Grã-Bretanha).
- **O genérico é dos gigantes, e o enxame já chegou nele (K2):** "why is norway so rich" tem **9.644 buscas/mês, concorrência 37**
  (quase a régua do Big Sur), mas a busca é de RealLifeLore (8,0 mi), Casual Scholar (3,0 mi), Economics Explained (2,7 mi) e 2 and 20
  (1,0 mi). E o outlier recente, "How Norway Got Rich (It Wasn't Oil)" (Wait, Why?, 873 inscritos, 54 mil views em 10 dias), já
  puxou **ao menos 13 longos e 8 curtos em 10 dias** (08 a 17/11), inclusive um com a perna da hidrelétrica ("The Water Came Before
  the Oil", 13/11).
- **O paradoxo é verdadeiro, com dois ajustes:** a fossa era um risco que o próprio governo norueguês temia (a Noruega não assinou
  a convenção de 1958 por causa dos 200 m, e o decreto de 1963 evitou a palavra "plataforma continental" por causa da fossa: Store
  norske leksikon). Mas **quem propôs a linha mediana foi o Reino Unido**, em 15/02/1964, com pressa, e a Noruega aceitou na hora: o
  "Britain didn't fight" do enxame é enquadramento, não fato.
- **A nossa medida existe e é nova no número (não no ângulo):** pelos dados abertos do Sodir e pela batimetria da EMODnet, **~77 %
  de todo o petróleo e gás dos campos da Noruega (produzido + restante) está no Mar do Norte do outro lado do eixo da fossa**; ~54 %
  na plataforma rasa (< 200 m) claramente "do lado de lá"; Troll, sozinho 16 %, fica na própria fossa, na encosta oeste, a 300–330 m;
  do lado da costa, só 0,8 % (Gjøa e Duva). Nenhuma descrição dos 8 vídeos traz esse número.
- **A geografia explica o petróleo, não a riqueza (K3):** a pergunta "por que a Noruega é tão rica" diante da Grã-Bretanha, no mesmo
  mar, se responde com o fundo e as regras de 1971; o nosso ângulo responde "por que a Noruega tem o petróleo", que tem outra busca.

Pastas: o trabalho em `out/_pautas/video-8/_trabalho/cetico-noruega-rica/` (`vidiq-colisao.tsv`, `watch-meta.jsonl`, `fossa_eixo.py`,
`medida_fossa.py`, `medida-fossa-campos.csv`, `dados/` com as tabelas do Sodir e os perfis da EMODnet, `fontes/` com a convenção de 1958).

## 1. Os fatos

Lidos em 17/11/2026. "Conta nossa" usa só os números das linhas citadas.

| # | Fato | Fonte (URL) | Veredito |
|---|---|---|---|
| F1 | A Convenção de Genebra sobre a Plataforma Continental (29/04/1958, em vigor em 10/06/1964), Art. 1: a plataforma é o leito "adjacent to the coast (...) to a depth of 200 metres or, beyond that limit, to where the depth of the superjacent waters admits of the exploitation"; Art. 6: entre costas opostas, por acordo, e na falta dele, "unless another boundary line is justified by special circumstances", a linha mediana. | https://legal.un.org/ilc/texts/instruments/english/conventions/8_1_1958_continental_shelf.pdf (texto extraído pelo PyMuPDF; cópia em `fontes/`) | CONFERE |
| F2 | **A Noruega temia a fossa:** não assinou a convenção de 1958 "på grunn av 200-metersgrensen"; temia que os vizinhos dissessem que a Norskerenna fechava a plataforma norueguesa, que então seria pequena no Skagerrak e no Mar do Norte. O decreto real de 31/05/1963 pôs o leito sob soberania norueguesa "så langt havets dybde tillater utnyttelse", até a linha mediana, e "bevisst" evitou o termo "kontinentalsokkel", "nettopp på grunn av den usikkerheten Norskerenna skapte". | Store norske leksikon, "Forhandlingene om Norges kontinentalsokkel" (Helge Ryggvik e Marie Smith-Solbakken, atualizado em 12/12/2019): https://snl.no/Forhandlingene_om_Norges_kontinentalsokkel | CONFERE (como risco que o governo temia, não como resultado jurídico certo). O texto do decreto de 1963: NÃO LIDO |
| F3 | **Quem pediu a linha mediana foi o Reino Unido:** em 15/02/1964 pediu negociação rápida com base na linha mediana, em acordo separado ("Storbritannia ønsket en separat avtale med Norge uten å måtte vente på hva som skjedde i de øvrige" [disputas]); a Noruega aceitou na hora; os dois tinham pressa porque as petroleiras queriam perfurar. **Jens Evensen**, no Ministério das Relações Exteriores, "ledet (...) arbeidet for en endelig avklaring". | SNL, mesmo verbete | CONFERE (corrige a pauta: não foi o Reino Unido "aceitando"; foi o Reino Unido propondo) |
| F4 | O acordo Reino Unido–Noruega de 10/03/1965 (Londres) adotou a linha mediana; o Reino Unido aceitou medir a partir das rochas mais externas da costa norueguesa; o Art. 4 trata de estrutura que cruza a linha (o caso de Frigg). Acordo com a Dinamarca em 08/12/1965. | Norsk Oljemuseum, "UK-Norwegian boundary treaty" (Trude Meland, 24/10/2017, atualizado em 19/10/2020): https://frigg.industriminne.no/en/2017/10/24/uk-norwegian-boundary-treaty | CONFERE pelo museu. O texto do acordo (UN DOALOS, `www.un.org/.../GBR-NOR1965CS.PDF`) deu **403**, não contornei: NÃO LIDO. A entrada em vigor (29/06/1965) só apareceu num resumo de busca: NÃO CONFERIDO |
| F5 | A CIJ, no caso da Plataforma do Mar do Norte (20/02/1969), §45: as áreas separadas da costa norueguesa pela fossa não seriam "adjacentes" em sentido físico, e as linhas medianas só puderam ser traçadas ignorando a fossa (é a fonte jurídica mais forte do ângulo, citada de memória). | icj-cij.org e refworld.org deram **403**; o espelho `api.icj-cij.org` redireciona ao site que recusou; não contornei | NÃO CONFERIDO (vale ler no navegador do app antes de ir à tela) |
| F6 | Ekofisk: descoberto em 1969 (poço 2/4-2, concluído em 24/12/1969), lâmina d'água 70 m, produção desde 1971–72. Statfjord: 1974, lâmina 150 m, na fronteira, **parte norueguesa 85,47 %** (o "almost 90%" de um concorrente é exagero). Troll: 1979, **lâmina 300–330 m**, produção desde 1995. Johan Sverdrup: poço 16/2-6, concluído em 20/09/2010. | Sodir FactPages, tabelas `field`, `field_description` e `wellbore_exploration_all` (CSV, licença NLOD), baixadas em 17/11/2026: https://factpages.sodir.no | CONFERE |
| F7 | Reservas em 31/12/2025: Mar do Norte 1.522, Mar da Noruega 379, Mar de Barents 264 milhões Sm³ o.e.; não descobertos: 545, 760 e **2.190**. (A soma das reservas por campo da nossa conta bate: 1.521, 379 e 264.) | Norsk Petroleum (Sodir e Ministério da Energia): https://www.norskpetroleum.no/en/petroleum-resources/resources-per-sea-area/ | CONFERE |
| F8 | **Hidrelétrica:** 1.791 usinas dão "approximately 88 percent" da produção anual normal; produção recorde de 157,2 TWh em 2024. | Energifakta Norge (Ministério da Energia): https://energifaktanorge.no/en/norsk-energiforsyning/kraftproduksjon/ | CONFERE (o "~90 %" da pauta vira 88 %) |
| F9 | **Pescado:** exportação de 2,8 mi t e **NOK 181,5 bi** em 2025 (recorde); salmão 1.414.909 t e **NOK 124,7 bi**. Petróleo e gás são "well over 60 per cent" das exportações. | Norwegian Seafood Council, 06/01/2026: https://seafood.mynewsdesk.com/pressreleases/price-growth-for-wild-fish-and-increased-salmon-volume-resulted-in-record-value-for-norwegian-seafood-exports-in-2025-3423570 ; SSB, "Norway's external trade in goods" (24/06/2026): https://www.ssb.no/en/utenriksokonomi/utenrikshandel/artikler/norway-s-external-trade-in-goods | CONFERE. "O 2º produto de exportação": NÃO CONFERIDO (com gás e petróleo contados à parte, o pescado seria o 3º; a SSB não ranqueia no texto) |
| F10 | O tratado de Barents com a Rússia (assinado em 15/09/2010 em Murmansk; ~175 mil km² de área disputada divididos ao meio). | regjeringen.no deu **403**, não contornei | NÃO CONFERIDO |
| F11 | **A fossa, medida (conta nossa, §4):** ao longo da costa oeste, de 58,75° a 61,25° N, o eixo da Norskerenna fica a 280–410 m de profundidade e a 3,9–4,8° E; a borda oeste dos 200 m, a 2,1–3,6° E. | EMODnet Bathymetry, REST `depth_profile` (CC BY 4.0), 19 perfis leste–oeste, um pedido por vez: https://rest.emodnet-bathymetry.eu | CONFERE (os ~700 m do Skagerrak, citados por um concorrente: NÃO MEDIDO) |

**A fossa, a linha e a pauta: verdade ou lenda?** Verdade no essencial, com dois ajustes. (1) É verdade que a fossa ameaçava a plataforma
norueguesa pelo critério dos 200 m, e que o governo agiu para contorná-la (F2). (2) Mas não é verdade que o Reino Unido "deixou de jogar a
carta": o Reino Unido propôs a linha mediana, por pressa e para não esperar a briga mais ao sul (F3); e o contrafactual jurídico era
discutível (o Art. 1 de 1958 também estende a plataforma até onde a exploração for possível, F1). Quem conta a história com força é a
historiografia norueguesa (o SNL, o Norsk Oljemuseum) e o papel de Jens Evensen; a frase forte da CIJ (F5) não pude ler.
A frase verdadeira: **"Off Norway's coast runs a trench more than 1,000 feet deep. Under the 1958 rules, Norway's own officials feared it
could shrink their seabed to a coastal strip. Britain asked for a quick deal down the middle, and Norway said yes at once."** (O SNL diz
que a Noruega aceitou de imediato; a data da resposta não li.)

## 2. A colisão

vidIQ: 2 `keyword_research` (`includeRelated: false`) e 6 `youtube_search` = **40 créditos**. As linhas em
`_trabalho/cetico-noruega-rica/vidiq-colisao.tsv`; 5 páginas `/watch` lidas, uma por vez (`watch-meta.jsonl`, que confere data e views).

**A busca:** "why is norway so rich" = **9.644 buscas/mês**, volume 59, **concorrência 37**, crescimento nulo (variação < ±30 %); "norway" =
472.177/mês, concorrência 58, +33,9 %, Vietnã 23 %, EUA 20 %, Bangladesh 14 % (busca de viagem e de tudo).

**O ângulo (fossa + linha de 1965): os 5 mais próximos** (todos longos, todos nos últimos 30 dias):

| Título | Canal | Inscritos | Views | Data | Duração |
|---|---|---|---|---|---|
| Why Norway Got Rich: The Line in the North Sea (capítulo "The Trench That Wasn't a Border"; "own calculation from field coordinates and treaty points") | Rich by Geography | 0 | 15 | 28–29/10/2026 | 11:40 |
| Why Did Norway Get Rich From the North Sea But Britain Never Did? ("The Line Britain Didn't Fight For"; o tratado de 1965 e a fossa) | Geography Unlocked | 432 | 782 | 10/11/2026 | 11:21 |
| Britain and Norway Found Oil in the Same Sea. Why Did Only Norway Get Rich? ("The Norwegian Trench: Britain's card"; o contorno de 200 m da fossa no mapa) | Stickman Time Machine | 240 | 149 | 15/11/2026 | 7:10 |
| Same Oil, Same Sea: Why Norway Got Rich and Scotland Didn't ("the deep trench Britain could have used to argue for more") | Logic of Nations | 45 | 263 | 24/10/2026 | 12:39 |
| Why Norway's North Sea Border Struck Oil (Denmark's Didn't) ("What is the Norwegian Trench and why didn't it block Norway's claim?") | High Ground Maps | 29 | 97 | 23/10/2026 | 11:04 |

Mais três no ângulo: "Why Norway Got Rich From Oil and Venezuela Didn't" (Mapitalism, 26/10, 12:33, 22 views; "a 700-metre trench" e a linha
de 1965), "How a Few Rocks Won Norway Billions" (Where & Why, 18/10, 2:41, 27 views; "the trench that could have cost Norway everything",
Statfjord) e o curto "The Oil Find That Made a Fishing Country Wealthy" (Back Then 24, 25/10, 1:34, 1.280 views; "despite a deep trench off
its coast", com um longo "Why Is Norway So Rich?" no canal). **Colide:** sim. Nenhum título é igual a um que eu proporia, mas a história
inteira já está nas descrições, e o "same sea, why only Norway" está em 4 títulos.

**O gatilho provável:** "Britain Struck the Biggest Oil Fortune in Europe — So Why Is Norway Rich and Britain Broke?" (The Managed Decline,
1.230 inscritos, **374 mil views**, 15/09/2026, 14:35). Um mês depois começou o enxame da fossa.

**O título genérico ("Why Is Norway So Rich" e variantes):**

| Título | Canal | Inscritos | Views | Data | Duração |
|---|---|---|---|---|---|
| Why Norway is Becoming the World's Richest Country | RealLifeLore | 7,93 mi | 8,02 mi | 07/02/2024 | 44:29 |
| How Norway Got So Insanely Rich | Casual Scholar | 481 mil | 3,02 mi | 05/07/2022 | 16:14 |
| Norway: Is It The Perfect Economy? | Economics Explained | 2,89 mi | 2,68 mi | 26/06/2019 | 11:53 |
| Why Norway is Too Rich for Their Own Good | 2 and 20 | 312 mil | 1,01 mi | 30/08/2025 | 16:50 |
| How Norway Got Rich (It Wasn't Oil) | Wait, Why? | 873 | 54 mil | 07/11/2026 | 38:36 |

Também ocupam a busca: The Infographics Show (705 mil, 2025), AltSimplified "What Happened To The UK's Oil Wealth? Norway's Opposite"
(532 mil, 2021), TLDR News EU (262 mil, 2025), hoser (240 mil, 2022), Economics Help "Why Norway Became Rich From Oil But The UK Lost Out"
(187 mil, 2023). **"Why Is Norway So Rich?" literal nos últimos 12 meses:** Money Atlas (30/09/2026, 8:10, 56 views; água, peixe,
petróleo), The Economy Audit (12/11, 13:17, "Why Is Norway So Rich? (The Oil Fund Isn't What You Think)"), World Map Animation (12/11,
curto), Market in Motion (16/11, curto), English-Fabule (17/10) e English Verbit (03/12/2025), estes dois de ensino de inglês.

**O enxame do genérico, depois do outlier da Wait, Why? (07/11):** na busca por data de "how norway got rich" (só os 25 primeiros), 13 longos
entre 08 e 16/11 (Nation Ledger, Nations Ledger, BorderAtlas, Half Hour Economics, Ondrelia, Map Empire, The Economy Audit, Hidden Earth
Chronicles "How Norway Got Rich: The Water Came Before the Oil", Tales from the Fjords, Inkwise, Why Nations Earn, Paper Capital, Cashflow
Safari) e 8 curtos, mais dois da própria Wait, Why? (Canadá 16/11, Venezuela 17/11). A Wait, Why? já conta as quedas d'água (as "panic
laws" de 1909) e o salmão; a Hidden Earth Chronicles, a hidrelétrica antes do petróleo.

**Pegamos "why is norway so rich" sem colidir?** Não. Com a frase literal, entramos numa pilha de 6 títulos iguais em 12 meses, abaixo de 4
vídeos de 1 a 8 milhões; sem a frase, a busca não nos acha. O caminho do Big Sur (a busca de um lugar sem dono) não existe aqui.

## 3. O potencial real

| Régua | Aqui | Passa? |
|---|---|---|
| 1. O nome é buscado | "norway" 472 mil/mês; "why is norway so rich" 9.644/mês, concorrência 37 | Sim |
| 2. Prova recente de interesse | Forte: The Managed Decline 374 mil (1.230 inscritos, 15/09); Wait, Why? 54 mil em 10 dias (873 inscritos, outlier 313); IMI Daily "Norway's Wealth Exodus" 939 mil (29/09) | Sim |
| 3. O longo do ângulo não existe, ou está com canal minúsculo | Existe 7 vezes, em canais minúsculos, em 4 semanas: é o enxame, como no Niágara | Não, na prática |
| 4. Paradoxo em 3 frases e no mapa | Sim: a fossa em ciano, os campos em vermelho do outro lado | Sim |
| 5. A geografia explica o porquê | Explica por que a Noruega tem o petróleo (a fossa, o graben, a linha), não por que ficou rica (o fundo, o imposto de 78 %, a Statoil) | Parcial |
| 6. Uma medida nossa | Sim, e nova no número (§4); não muda a história | Parcial |

**O enxame:** chega em dias. O ângulo da fossa teve 8 vídeos em 4 semanas depois de um outlier de 374 mil; o genérico, 21 em 10 dias
depois de um de 54 mil. Até publicarmos (2 a 3 semanas de linha), haverá mais nos dois.

**Sustenta 13 a 16 min calmos?** Sobra assunto (a carta do serviço geológico de 1958, Groningen 1959, o decreto de 1963, a linha de 1965,
Ekofisk no Natal de 1969, Statfjord cortado pela linha, Troll dentro da fossa, Barents 2010, a hidrelétrica e o alumínio, o salmão). Mas é
a espinha dos 8 vídeos, capítulo por capítulo. **Sem o fundo e as regras de 1971**, o ângulo se sustenta como "por que a Noruega tem o
petróleo", não como "por que a Noruega é rica": a comparação inevitável (a Grã-Bretanha, no mesmo mar) só se responde com o fundo.

## 4. A nossa medida

**Possível com dado aberto, e feita (preliminar).** `fossa_eixo.py` tirou 19 perfis leste–oeste da batimetria da EMODnet (57,75° a 62,25° N,
de 1,5° a 7,5° E, parando na primeira terra para não entrar nos fiordes) e achou, em cada latitude, o eixo da fossa (o ponto mais fundo) e a
borda oeste dos 200 m. `medida_fossa.py` pegou os 141 campos do Sodir com a versão de 2025 (o recuperável original = produzido + restante,
em milhões Sm³ o.e.; ficaram fora Sindre, Vega Sør e Ærfugl, com versão velha, fundidos a outros campos), pôs cada um no poço descobridor
(coordenadas e lâmina d'água do Sodir) e classificou:

| Onde | Campos | Recuperável original | % | Restante | % |
|---|---|---|---|---|---|
| Mar do Norte, a oeste do eixo, lâmina < 200 m (a plataforma "do outro lado") | 86 | 5.994 | 53,8 % | 797 | 36,8 % |
| Mar do Norte, a oeste do eixo, lâmina ≥ 200 m (Troll, Snorre, Visund, Fram, Vega…) | 14 | 2.593 | 23,3 % | 717 | 33,1 % |
| Mar do Norte, a leste do eixo (lado da costa: Gjøa, Duva) | 2 | 91 | 0,8 % | 7 | 0,3 % |
| Mar do Norte, sem posição (Murchison, Enoch, Islay, Tambar Øst, Troll Brent B) | 5 | 17 | 0,1 % | 0 | 0 % |
| Mar da Noruega | 31 | 2.050 | 18,4 % | 379 | 17,5 % |
| Mar de Barents | 3 | 397 | 3,6 % | 264 | 12,2 % |
| **Total** | 141 | **11.141** | | **2.165** | |

- **~77 % de todo o petróleo e gás dos campos da Noruega está no Mar do Norte do outro lado do eixo da fossa**, o lado que um vizinho podia
  ter reivindicado se a fossa fechasse a plataforma; **~54 %** na parte rasa, sem discussão. Do restante (o futuro), 70 %.
- **Troll** (1.816 Mm³ o.e., 16 % do total, a maior parte gás) fica **dentro da fossa**, na encosta oeste, a 300–330 m (eixo a ~4,4° E naquela
  latitude; Troll a 3,55° E). Snorre e Visund, a 2,2–2,4° E, estão fundos porque o Mar do Norte afunda no norte, não por estarem na fossa.
- Só 0,8 % está entre o eixo e a costa. A conta bate com o oficial: as reservas por área dão exatamente as da F7 (1.522, 379, 264), e o produzido
  (11.141 − 2.165 = 8.976 Mm³ o.e.) bate com os ~8,9 bi Sm³ o.e. vendidos que o Norsk Petroleum dá.
- **O que a medida não diz:** só campos (sem descobertas não desenvolvidas nem o não descoberto; no Barents há 2.190 Mm³ não descobertos, e a
  fatia do Mar do Norte no futuro cai); a fronteira é o eixo (com a borda dos 200 m, Troll sai e o número cai para "mais da metade"); o poço
  descobridor é um ponto, não o polígono do campo (o FactMaps do Sodir tem os polígonos); e o contrafactual (quem levaria o quê) é hipótese.
- Nos 8 vídeos do ângulo, ninguém dá essa fatia: um calcula distâncias de Ekofisk à linha, outro dá Statfjord ("almost 90%", o Sodir diz 85,47 %).

## 5. O material

- **Mapa com geometria real:** sim, e farto. Os polígonos dos campos e das licenças no FactMaps do Sodir (NLOD); a batimetria da EMODnet (CC BY
  4.0) ou da GEBCO para a fossa; a linha de 1965 pelo Maritime Boundaries Geodatabase do VLIZ (CC BY 4.0) ou pelos pontos do tratado (o texto
  da UN deu 403); a costa e as fronteiras no Natural Earth.
- **Satélite aberto:** Landsat e Sentinel-2 da costa oeste, de Mongstad, Kårstø, Kollsnes; a Blue Marble da NASA para o Mar do Norte.
- **Foto e vídeo de acervo livre:** muitas fotos (no Commons, Ekofisk, Frigg e Statfjord do Norsk Oljemuseum / DEXTRA sob CC BY 4.0, Troll A e
  Troll B sob CC BY-SA e CC BY, Farouk Al-Kasim sob CC BY 3.0, todas já usadas pelos concorrentes); vídeo livre de plataforma é pouco (Pexels).
  O acervo do Norsk Oljemuseum (industriminne) tem foto histórica, com licença a conferir uma a uma.
- **Dado:** o Sodir (NLOD), a EMODnet, o Norsk Petroleum, a SSB, a NBIM.

Dá para 13 a 16 min sem esticar; o problema não é o material.

## 6. O título e o gancho que eu defendo (se a Sala quiser salvar a pauta)

O único pedaço nosso é o número, então o título é o número:

- **Título:** **Three Quarters of Norway's Oil Is on the Far Side of a Trench** (61 caracteres). Verdadeiro pela conta preliminar (~77 % do
  recuperável dos campos, a oeste do eixo), desde que a narração diga "oil and gas" e "fields". Não achei título igual nem parecido; a história,
  sim (§2).
- Alternativa 1: **Why Is Norway So Rich? Look on the Other Side of the Trench** (59) — tenta a busca, mas entra na pilha do "Why Is Norway So
  Rich?" e promete a riqueza que a fossa não explica sozinha (K3).
- Alternativa 2: **The Trench Off Norway That Could Have Cost It the North Sea** (59) — o "could have" é o que o SNL sustenta (F2); o "Britain's
  card" do enxame fica de fora.
- **Gancho** (42 palavras, sem a resposta): "Off Norway's coast, the seabed drops into a trench about a thousand feet deep. In 1958, the new rules
  measured a country's seabed to about 650 feet. Three quarters of the oil and gas in Norway's fields lies on the far side."
- **Miniatura:** o Mar do Norte com a terra em relevo amarelo e a água azul; **em ciano, a fossa** (o contorno de 200 m da EMODnet, abraçando a
  costa da Noruega); **em vermelho, os campos noruegueses** do outro lado (os polígonos do Sodir), com Troll na beira da fossa; a palavra na caixa
  preta: **"77%"**; uma seta branca grossa saindo da costa, cruzando a fossa até os campos. A linha de 1965 fina, branca.

Nenhum dos três salva a pauta: o título é nosso, a história não (K1), e a busca grande não vem (K2).

## 7. Os K

- **K1 — GRAVE. O ângulo já foi feito, agora.** 7 longos e 1 curto entre 18/10 e 15/11/2026 contam a fossa e a linha de 1965 (Rich by
  Geography, Geography Unlocked, Stickman Time Machine, Logic of Nations, High Ground Maps, Mapitalism, Where & Why; o curto da Back Then 24),
  com a mesma espinha e as mesmas fontes (o Norsk Oljemuseum, o SNL, o Sodir). Canais minúsculos, voz sintética declarada em vários: o enxame
  que a régua descreve, no ângulo exato da pauta. A medida (77 %) seria o único dado novo do 9º vídeo.
- **K2 — GRAVE. A busca do genérico tem dono, e o enxame chegou nela.** "why is norway so rich" (9.644/mês, concorrência 37) é de RealLifeLore
  (8,0 mi), Casual Scholar (3,0 mi), Economics Explained (2,7 mi) e 2 and 20 (1,0 mi); 6 títulos "Why Is Norway So Rich?" literais em 12 meses;
  e 21 vídeos (13 longos) em 10 dias depois do outlier da Wait, Why?, que já leva as quedas d'água e o salmão.
- **K3 — MÉDIO. A geografia explica o petróleo, não a riqueza.** A pergunta do Lucas ("por que a Noruega é tão rica") se responde, diante da
  Grã-Bretanha no mesmo mar, com o fundo, o imposto de 78 % e a Statoil, o que todo mundo conta. O nosso ângulo responde "por que a Noruega
  tem o petróleo", e não se sustenta como "why so rich" sem depender do fundo.
- **K4 — MÉDIO. "O Reino Unido aceitou a linha mediana" está ao contrário.** O Reino Unido a propôs em 15/02/1964, com pressa (F3); o "Britain
  didn't fight / Britain's card" é enquadramento. E o contrafactual jurídico é discutível (o critério da explorabilidade de 1958, F1). Na tela:
  "Norway feared", nunca "Britain could have taken".
- **K5 — MÉDIO. A medida depende da linha.** Com o eixo, ~77 %; com a borda dos 200 m, ~54 % (Troll, 16 %, fica na fossa). Só campos; o não
  descoberto do Barents (2.190 Mm³) muda o futuro. "Three quarters" precisa de nota na tela.
- **K6 — LEVE. Repete o esqueleto do vídeo 7.** Uma linha negociada entre dois países decide quem fica com o recurso, logo depois do tratado do
  Columbia.
- **K7 — LEVE. Fontes primárias não lidas.** O texto do acordo de 1965 (un.org, 403), o §45 da CIJ (icj-cij.org e refworld, 403) e o tratado de
  Barents (regjeringen.no, 403): NÃO CONFERIDOS, nenhum contornado. "O salmão é o 2º produto de exportação": NÃO CONFERIDO (provavelmente o 3º).
- **K8 — LEVE. Números da pauta a corrigir.** A hidrelétrica é 88 %, não ~90 % (F8); Statfjord é 85,47 % norueguês, não "quase 90 %" (F6).

## 8. Créditos e limites

- **vidIQ: 40 créditos** (2 `keyword_research` × 5 e 6 `youtube_search` × 5). Saldo antes 5.386, depois 5.321; a diferença maior vem de outros
  agentes rodando ao mesmo tempo.
- **Lido:** a convenção de 1958 (legal.un.org, PDF), o SNL, o Norsk Oljemuseum, o Sodir (FactPages, 4 tabelas CSV, uma por vez, com o
  User-Agent do canal; factpages.sodir.no não tem robots.txt), a EMODnet (19 perfis, um por vez), o Norsk Petroleum, a Energifakta Norge, o
  Norwegian Seafood Council, a SSB e 5 páginas /watch. **Recusaram (403) e ficaram NÃO CONFERIDOS:** www.un.org, icj-cij.org (e o espelho que
  redireciona a ele), refworld.org, regjeringen.no; o treaties.fcdo.gov.uk deu 504. Nenhum navegador, nenhum outro crédito pago.
- Os dados brutos em `_trabalho/cetico-noruega-rica/dados/` somam ~2,4 MB (o maior, `wellbore_exploration_all.csv`, 1,7 MB): abaixo dos 5 MB.
