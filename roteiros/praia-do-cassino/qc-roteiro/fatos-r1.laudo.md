# Laudo · verificador de fatos (independente, da Sala de controle) · roteiro r1 · praia-do-cassino (vídeo 6)

Revisão julgada: `e77cf10d671c` · data-base 2026-11-07 (leituras de ~19:35 a ~20:05 de Brasília)

COBERTURA: 211 de 221

As 221 linhas de `roteiros/praia-do-cassino/qc-roteiro/fatos-tabela.json` têm veredito: 211 "confirmada", 5 "corrigir" e 5
"nao_conferida" (o portão conta como N só as confirmadas). As linhas cobrem as afirmações checáveis de 130 das 156 frases do texto falado
(a contagem de frases é a do `gate.mjs`, e a minha divisão por script dá as mesmas 156); as outras 26 não afirmam nada checável e estão
declaradas uma a uma abaixo (NADA A CHECAR). **O texto foi CHECADO POR INTEIRO**: nenhuma frase com fato ficou sem linha. Cinco itens
ficaram NÃO ACHEI (nenhum por recusa de robô), e cinco pedem troca de uma frase.

NOTA: 8.5/10. Nenhum número dito está errado, e o esqueleto da tese está de pé, refeito nas cópias locais pelos scripts da pauta: a reta de
211,97 km (131,7 mi), a praia de 218,00 km no IBGE e 219,73 no OSM ("less than five miles longer": 3,7 e 4,8 mi), o arco de 18,21 km
(11,3 mi) para o mar, as réguas de 10 m a 50 km (134,1 a 136,3 mi, 1,7 %), os 254 km do turismo do Estado (relido hoje na origem, letra a
letra), os 223 da trilha, os 62,05 km de Rio Grande, o decreto (lido no texto oficial) e o PDL (texto e estado de hoje), a física da UFRGS
e o release da NASA. O que tira pontos são cinco formulações periféricas que dizem mais que a fonte (as mais visíveis: o "says it has no
plans" posto na boca da cidade de Long Beach e o "Padre Island" no lugar da National Seashore) e cinco frases que nenhuma leitura sustenta
(a mais séria, "Stone walls" no gancho: os molhes do Chuí podem não ser de pedra, ninguém leu).

## O que foi julgado, e como

- **O texto:** o texto falado inteiro de `roteiros/praia-do-cassino/roteiro-narrador.md`, sha256 do texto falado
  `e77cf10d671cdf3d908f8047e7749d2b658c26226c805e1bbc3258cf8b00d7b6` (o do pedido; o arquivo inteiro, com cabeçalho e marcas, dá
  `f187525a5ee5…`). `node roteiros/praia-do-cassino/_ferramentas/gate.mjs`: PASSA, exit 0, 0 problemas, 4 alertas (as perguntas, a 1ª
  frase sem número, `[guinness-atribuido]` e `[gemini]`; os dois últimos foram conferidos como fato: VF018 e VF207-VF208, confirmadas).
  2.348 palavras, 22 parágrafos, 156 frases.
- **O denominador, derivado à mão** (o canal não tem extrator de afirmações): li o texto frase a frase e dei a cada afirmação checável
  uma linha (número, data, aspas, atribuição, superlativo, causa, mecanismo, lugar, contagem). Depois um script
  (`…\scratchpad\vf-cassino\scripts\cobertura.py`) dividiu o texto em frases e casou cada uma com a tabela: as 26 que sobraram são as de
  NADA A CHECAR, e quatro que ele achou sem linha e que afirmavam algo (o "trick on a small scale", o "older than any single wave", o "The
  waves did" e o "it isn't finished") ganharam linha. Limite declarado: a divisão de frases e a escolha do que é afirmação são minhas; o
  portão confere estrutura, não sentido.
- **As medidas, refeitas** (sem rede, nas cópias de `midia/praia-do-cassino/fontes/`): `costa_ibge.py`, `desvio_corda.py` e
  `costa_osm.py` da pauta, mais três scripts meus (`decreto_costa.py`, `decreto_lado.py`, `contas_vf.py`, no scratchpad) para os pontos do
  decreto contra a costa do IBGE, as conversões, o arco e o horizonte. A saída inteira está em
  `roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt` (as linhas C01 a C24 são as contas). Tudo bate com a pauta (S1, S2, L11, L12)
  até o centésimo.
- **A rede** (07/11/2026, um pedido por vez, com o User-Agent do canal, por `…\scratchpad\vf-cassino\scripts\baixar_vf.py`, que para em
  401/403/405/429 e em página de verificação). As cópias ficam em `midia/praia-do-cassino/fontes/web/` (o bruto e o `.txt` ao lado, com a
  URL e o sha256 no cabeçalho) e as dos PDFs locais em `midia/praia-do-cassino/fontes/texto/`. Lidos na origem hoje: o turismo do RS
  (atrativo 4597), o WorldAtlas (30/05/2026), o Guinness (Largest pleasure beach), o Roadside America (Long Beach), o NPS (Padre Island), a
  autoridade de PPP de Bangladesh (Cox's Bazar), o Decreto 12.868 (Câmara, publicação original), o PDL 112/2026 (página do Senado, estado
  de hoje), o release 66-285 (NTRS), Clerot et al. 2003 (APRH 143), a Revista Marítima Brasileira (os molhes do norte), A Tarde
  (13/12/2025), Estado de Minas (04/08/2026), National Geographic Brasil (2024, não usada: não cita o Guinness) e o OSM (Overpass, os molhes
  do Chuí); a Wikipédia pela API do MediaWiki (a lista de praias, o Arroio Chuí e "Wind wave"). Já estavam no disco: o shapefile do IBGE,
  a costa do OSM, Dillenburg et al. 2003, Toldo et al. 2003 (cópia do cético) e o texto inicial do PDL.
- **O que não abriu, e o que fiz** (nada recusou por robô, nada foi contornado): o Planalto derrubou a conexão duas vezes (reset), e
  li o decreto na Câmara; o `normas.leg.br` deu timeout; o resumo da ABEQUA (146) e dois endereços chutados do turismo do RS deram 404; o
  HTML da Wikipédia disparou o meu próprio detector de verificação (status 200, a palavra "captcha" no script da página), e usei a API;
  dois registros do repositório da UFRGS vieram vazios. A página da Cultura do RS e a da Rede Brasileira de Trilhas não foram reabertas
  (as URLs não estão no disco): valem as leituras da Sala de hoje (pauta, S3 e S4). O g1 não abre para as ferramentas: vale a leitura da
  Sala no navegador do app (base de fatos, Adendo A.1 a A.7).

## ACHADOS (9 achados em 10 linhas: 5 "corrigir", 5 "nao_conferida"; nenhum REFUTADA)

Nenhum toca a tese (a reta, os números, a régua, a física). Todos têm a troca de uma frase pronta. O texto ainda não foi narrado: consertar
aqui não gasta crédito.

1. **[MÉDIO] VF007, p1 (gancho): "Stone walls mark its two ends…"** NÃO ACHEI o material dos molhes do SUL. Os do norte são de pedra
   (enrocamento; Revista Marítima Brasileira, 3º trim. 2001). Os do Chuí existem e são dois (OSM, vias 528148406 e 637283556; obra de
   1975 a 1978, pela busca), mas nenhuma fonte lida diz de quê, e o OSM não etiqueta o material.
   → CONSERTO: "Breakwaters mark its two ends, about 132 miles apart in a straight line." (ou a Sala confere numa foto dos molhes do Chuí
   e a frase fica) → RAIZ: PONTUAL.
2. **[MÉDIO] VF028, p5: "And it came out after the town to the south objected…"** NÃO ACHEI a letra do g1. O resumo da Sala diz que o
   trecho "estava no livro dos recordes em 1993, 1994 e 1995 […] e saiu depois de uma contestação de Santa Vitória do Palmar", e a pauta
   §7 leu "tirado depois que o vizinho do sul contestou". Em inglês, "it came out after" se ouve primeiro como "foi publicado depois", o
   contrário; e o "which makes a certain sense, because that town owns most of this beach" só faz sentido se o trecho foi tirado.
   → CONSERTO (se o g1 diz que foi retirado): "And it was dropped after the town to the south objected, which makes a certain sense,
   because that town owns most of this beach." → RAIZ: PONTUAL (a ambiguidade nasce do "saiu" do resumo).
3. **[MÉDIO] VF158 e VF161, p17: "The sand comes from the seafloor instead." e "…the sea has been shuffling old sand across it for a very
   long time."** NÃO ACHEI. Que a areia do Cassino venha da plataforma está só na base 3.10 (FRÁGIL, resumo de busca de Dillenburg et al.,
   *Pesquisas em Geociências*: "a deriva litorânea e a plataforma continental"); o resumo da ABEQUA que diria o mesmo deu 404 hoje. O que
   está lido: do continente vem "muito pouca areia" (Dillenburg et al. 2003) e a areia é "policíclica", retrabalhada (Clerot et al. 2003).
   → CONSERTO: "The sand is old sand instead, worked over by the sea again and again. The continental shelf off this coast is wide, up to
   about 120 miles, and shallow." (ou a Sala/pesquisa lê o artigo da *Pesquisas em Geociências* e as duas frases ficam) → RAIZ: INSTRUÇÃO
   (a regra "FRÁGIL não vira fato na voz" escapou numa frase de mecanismo, que não tem número para acender alerta).
4. **[LEVE] VF050, p7: "…and says it has no plans to correct the sign."** DIVERGE na atribuição. "There are no plans to correct the
   entrance sign" é a voz do Roadside America (página sem data), não uma declaração da cidade; o que é da cidade é o título novo ("Long
   Beach hedges officially by saying they are the 'World's Longest Continuous Peninsula Beach.'").
   → CONSERTO: "The city has since switched to a longer title, the world's longest continuous peninsula beach, and the travel guide Roadside
   America says there are no plans to correct the sign." → RAIZ: PONTUAL.
5. **[LEVE] VF051, p7: "Padre Island, in Texas, is the longest stretch of undeveloped barrier island in the world, in the words of the
   National Park Service."** DIVERGE no sujeito. O NPS diz isso da **Padre Island National Seashore** (o trecho protegido), não da ilha
   inteira, que tem South Padre e cidades ("Padre Island National Seashore is the longest stretch of undeveloped barrier island in the
   world", nps.gov/pais/learn/nature; as páginas novas do NPS dizem "one of the longest").
   → CONSERTO: "On Padre Island, in Texas, the national seashore is the longest stretch of undeveloped barrier island in the world, in the
   words of the National Park Service." → RAIZ: PONTUAL.
6. **[LEVE] VF110, p12: "Put a ruler the size of a town on this shore…: you get about 134 miles."** O número está certo, mas é o da régua
   de 50 km (31 mi), do tamanho de uma metrópole. Uma régua do tamanho de uma cidade (5 a 10 km) dá 135,4 a 135,2 mi, que se diria "about
   135". → CONSERTO: "Put a ruler 30 miles long on this shore and step it from wall to wall: you get about 134 miles." (ou "a ruler the
   size of a big city") → RAIZ: PONTUAL (a imagem ficou quando o número da régua saiu da voz).
7. **[LEVE] VF042, p6: "As for Guinness, the only beach record we could find on its own website is a different one."** Diz mais que a
   busca: no site do Guinness há recordes "de praia" de atividade ("Longest beach tennis rally", "Longest beach rugby try", a toalha de
   praia; base 1.5 e a busca de hoje). O único recorde DE UMA PRAIA achado é o da Virginia Beach.
   → CONSERTO: "As for Guinness, the only record for a beach itself that we could find on its own website is a different one." → RAIZ:
   PONTUAL.
8. **[LEVE] VF205, p21: "The release gives one reason for the place, and only one: …"** O release não dá razão nenhuma com "because": no
   parágrafo do lugar ele diz "It is very near the path of totality. The rockets will be fired over the ocean", e a segunda frase se lê
   como outra razão do lugar (o mar para os foguetes). O "very near the path" está confirmado (VF204); o "and only one" diz mais.
   → CONSERTO: "The release gives one reason for the place: the beach sat very near the path of the total eclipse." → RAIZ: PONTUAL.
9. **[LEVE] VF065, p9: "…with nothing in the sand to mark it."** NÃO ACHEI. A Fepam diz que não há critério técnico (no g1), o que não é o
   mesmo que nada marcar; e a base (2.5, FRÁGIL) diz que o Farol Sarita marcaria onde o Cassino acaba. O próprio escritor pôs a oração
   como removível (notas, §5, item 7).
   → CONSERTO: "Walk south along the water, and after a while the sand changes its name." → RAIZ: PONTUAL.

## As 23 dúvidas do escritor (`_trabalho/escrita-notas.md`, §5), uma a uma

1. "one of the top results puts Praia do Cassino at number one": CONFIRMADA na busca de hoje (o WorldAtlas é o 2º resultado, e põe o
   Cassino em 1º; VF016-VF017). Volátil: a ordem muda com o dia, o país e o buscador.
2. "year after year": CONFIRMADA com dois jornais datados de anos diferentes, A Tarde (13/12/2025) e Estado de Minas (04/08/2026), os dois
   com o Guinness (VF019-VF020).
3. "three editions of a book, in one country, in the mid-1990s": CONFIRMADA (g1, A.2; VF030-VF031).
4. "A ranking of published figures, then, more than of sand.": linha L, segue do método declarado do WorldAtlas (VF041). Passa.
5. "almost five times that long": 218,00 / 45,06 = 4,84 (IBGE); 4,88 (OSM). CONFIRMADA (VF048).
6. "the breakwater of the Rio Grande seaport, built in the 1910s": CONFIRMADA. O "seaport" é do WorldAtlas; a data deixa de ser FRÁGIL:
   a Revista Marítima Brasileira dá a obra em curso em 1912 e os dois molhes concluídos em 1915 (VF054-VF056).
7. "with nothing in the sand to mark it": NÃO ACHEI (achado 9).
8. "a touch above every coastline we measured": 223 km contra 219,73 (o maior) = 3,27 km acima. CONFIRMADA (VF099).
9. "the one g1 gives, and the encyclopedia, and the ranking website": CONFIRMADA para os três. O WorldAtlas tem uma seção "The Coastline
   Paradox: Why 'Longest' Is Tricky" e diz que as medidas variam "partly on the measurement standard"; o terceiro nome cabe (VF103-VF105).
10. "We tried the rulers in between, too": CONFIRMADA (20 m a 25 km no OSM: 217,14 a 219,10 km; IBGE de 50 m a 25 km dentro; VF113).
11. "a curve that wide and that slow adds almost nothing": CONFIRMADA com observação. Um arco de círculo com a corda de 211,97 km e a
    flecha de 18,21 km soma 4,15 km (2,6 mi, 2,0 %) à corda; o traçado do IBGE soma 6,03 km. O "almost nothing" vale contra os 132 mi,
    mas o arco é mais da metade dos "less than five miles" (VF121; C20).
12. "about 390 miles, gently curving, with hardly a wiggle": CONFIRMADA (625 km "gently undulating", Dillenburg; 630 km "uma pequena
    sinuosidade", Toldo; VF125-VF127).
13. "it's the waves, not the tides": CONFIRMADA ("francamente dominada por ondas", Clerot; "primariamente dominados pela ação da onda",
    Toldo; VF136).
14. "A crest comes in at a slant, swings around as it feels the bottom, and lands square": CONFIRMADA pela física da refração ("the crests
    tend to realign at a decreasing angle to the depth contours", en.wikipedia "Wind wave"). O "square" arredonda (VF140, VF142).
15. "Between the two walls, by that count, the barrier doesn't open once": linha L sobre Dillenburg (as duas descontinuidades são Rio
    Grande e Tramandaí), com o dono na frase. Passa (VF155).
16. "shuffling old sand across it for a very long time": NÃO ACHEI (achado 3).
17. "The bow near the middle is older than any single wave. It's the shape the high sea left behind, and it follows the seafloor":
    CONFIRMADA (Dillenburg, a configuração gerada no máximo transgressivo de 5 ka; côncava onde a plataforma é menos inclinada, convexa onde
    é mais; VF171, VF172, VF178).
18. "part of why the park exists on paper, and part of what the senator's bill would undo": CONFIRMADA (Art. 4º do decreto; Art. 1º do
    PDL; VF183-VF184).
19. "a total eclipse of the sun was due to cross southern Brazil": CONFIRMADA na letra do release ("crossing southern Peru, Bolivia,
    northern Argentina, the southern tip of Brazil and extending into the South Atlantic"; VF192). A troca para "pass just off this coast"
    não é necessária.
20. "The release gives one reason for the place, and only one": o "and only one" cai (achado 8).
21. "The rockets were American. The experiments came from scientists of both countries": CONFIRMADA na letra ("The rockets will be
    furnished by the U.S. participating agencies"; "will be provided by both U.S. and Brazilian scientists"; VF201-VF203).
22. "You can't see that far end from this one. The curve of the earth takes it long before any bend in the beach does.": CONFIRMADA por
    conta: o horizonte de um olho a 1,7 m está a 4,65 km; a 212 km a curvatura esconde tudo abaixo de ~3.373 m; e nos primeiros 5 km a
    partir do Chuí a praia não se afasta mais de 95 m de uma reta (C21, C22; VF217-VF218).
23. "The sea did, and it isn't finished.": CONFIRMADA (zonas de erosão e acresção medidas, Toldo; a barreira que recua no sul, Dillenburg;
    VF221).

## Confirmadas com observação (não pedem troca)

- **VF013, VF021 e VF023, o Guinness ao g1**: a frase literal do Guinness não vem; o que está lido é a paráfrase do g1 ("em resposta ao g1, a
  instituição informou que não monitora o título"). A voz diz "told … it doesn't monitor that title", sem aspas: está no tamanho certo.
- **VF018, o WorldAtlas**: "has been recognised by Guinness World Records since 1994 as the world's longest sea beach" é letra (grafia
  britânica). O alerta `[guinness-atribuido]` está atendido: o dono ("It says") está na frase.
- **VF052, Cox's Bazar**: a base dava FRÁGIL (sem fonte de Bangladesh). Fecha com a página da autoridade de PPP do governo de Bangladesh
  ("its 125 km long unbroken shore, which is believed to be world's longest natural sandy sea beach"). O "marketed as" é a palavra certa.
- **VF071, "the city limit is the only line anyone draws"**: a Fepam diz que "não há critério técnico ou ambiental formal sobre a divisão;
  vale o limite municipal". O "anyone" generaliza um pouco; como enquadramento atribuído ("That's how g1 and the state's environmental
  agency frame it"), passa.
- **VF074, o secretário de Turismo**: o "can only call itself the longest because" parafraseia o "porque ela pega a extensão até a Barra do
  Chuí". Passa, sem aspas.
- **VF077, VF080 e VF181, o parque e a areia**: pelos pontos do decreto, a APA começa na costa a lat -32,976 (ao sul do limite
  municipal, -32,629) e vai à foz do Chuí; o parque é quase todo marinho (o limite oeste corre ~1,85 km mar adentro), mas entre os pontos
  15 e 26 (de -33,55 a -33,20, o trecho do Albardão) ele entra 0,1 a 0,5 km para dentro da linha do IBGE. O "on this neighbor's coast" e o
  "this sand holds fossil sites" ficam de pé (decreto_costa e decreto_lado, em fatos-medidas.txt).
- **VF094, "Brazil's statistics agency maps the shore … at about 135 miles"**: o IBGE não publica um comprimento; os 218,00 km são a
  medida do traçado dele (feita pela Sala e refeita aqui), e o g1 atribui os 218 km ao IBGE. O "maps … at" é justo; a tela precisa do
  "Measure: Alpha Point, on IBGE (2024)…", como a pauta manda.
- **VF207, a Gemini 12**: o release nomeia a tripulação (James A. Lovell e Edwin E. Aldrin; OCR "Love11 and =win E. Aldrin"). A base dava
  os nomes como FRÁGIL (memória do agente); ficam FIRMES pelo release, mas não estão na voz, e o "were scheduled to watch" está certo.
- **VF186, o Altair "freighter"**: o WorldAtlas ("the Greek freighter SS Altair (grounded in 1976)") e o Estado de Minas ("um cargueiro
  encalhado desde 1976") dizem cargueiro. O "Greek" diverge da base (comandante brasileiro, pelo Seu Dinheiro) e não vai à fala: não pôr
  bandeira no navio na tela sem leitura.

## NADA A CHECAR (26 frases, declaradas)

Perguntas, instruções de cena, transições e juízos de narrador, sem fato que uma fonte confirme ou derrube:
- p1 "But how does a coast end up that straight?"; p2 "Even so, a shore like that should be easy to measure." (juízo; a medida vem no ato 2);
- p3 a assinatura ("You're at Alpha Point, and this is where the story of the beach between two walls begins.");
- p4 "So who decided this was the world's longest beach?"; "Try it yourself.";
- p5 "The fame does have a trail, though."; "You'll see how much in a minute.";
- p7 "Other beaches have found their own words."; "So let's measure this one.";
- p8 "So how long is it, really?"; "Stand on the northern wall.";
- p11 "Back to the ruler, then.";
- p12 "By that logic, the biggest number is just the most careful one." (a consequência do paradoxo, que a frase seguinte testa); "Let's test it.";
- p13 "So the strange thing about this beach isn't the number."; "It's the coast.";
- p14 "So what keeps a coast this long this straight?"; "Pull back, until the whole shore of Rio Grande do Sul fits on the screen.";
- p15 "No one drew this coast." (o "The waves did." seguinte tem linha, VF143);
- p16 "And very little comes along to spoil the work." (as frases seguintes têm linha);
- p19 "And what does a line of sand this long, this bare, keep?"; "Three things, held along the same straight line, and none of them
  explains the line." (estrutura; a contagem está em VF211);
- p20 "The second thing is a ship.";
- p22 "Go to the other wall."; "Turn around."; "No one drew this coast.".

## Voláteis que ficaram na fala (data-base 2026-11-07)

- **VF092, o PDL 112/2026** ("As of November 2026, the bill was waiting in a Senate committee"): na CMA desde 12/05/2026, aguardando relator;
  dados do Senado atualizados em 29/10/2026. Cresce se for designado relator ou votado; zera se for arquivado ou aprovado. Reler na véspera
  de publicar. Junto: o decreto vale enquanto o PDL não for aprovado nas duas Casas.
- **VF016, a busca** ("one of the top results"): a ordem muda com o dia, o país e o buscador. Reconferir antes de gravar.
- **VF017-VF018, VF039-VF040, o WorldAtlas** (reescrito em 30/05/2026): a página pode mudar o 1º lugar, o 254, a frase do Guinness ou o
  método.
- **VF011, VF033, VF100, o turismo do RS** (página sem data): o 254 e o "(Guinness Book)" podem sair.
- **VF050, a placa de Long Beach**: o Roadside America não tem data; a placa pode ter sido trocada.
- **VF185 e VF189, o Altair**: "has sat on this sand" e "within a few years the ship may be gone" (a FURG, em 2025). Zera se o casco sumir.

## A lista de nomes (anônimo na voz → pessoa ou órgão nomeável)

- "a local journalist" → **Willy César**, jornalista, autor de "A cidade do Rio Grande: do big bang a 2015" (pelo g1, 20/07/2025; o livro
  não foi lido).
- "Its tourism secretary" (Santa Vitória do Palmar) → o g1 não dá o nome no resumo da Sala; NÃO ACHEI o nome.
- "A senator from Rio Grande do Sul" → **Luis Carlos Heinze (PP/RS)**, autor do PDL 112/2026 (https://www25.senado.leg.br/web/atividade/materias/-/materia/173030).
- "Geologists at the state's federal university" → **Sérgio R. Dillenburg** e **Luiz J. Tomazelli** (D.Sc. em Geologia Marinha, CECO-IG-UFRGS)
  e **Luiz C. P. Clerot** (UFRGS), 2003 (https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf).
- "the federal university in Rio Grande" → **FURG**; o g1 (resumo) não dá o pesquisador.
- "the state's environmental agency" → **Fepam**; "Brazil's statistics agency" → **IBGE** (Municípios Defrontantes com o Mar, 2024);
  "a national trail network" → **Rede Brasileira de Trilhas**.
- "The website that put this beach at number one" → **WorldAtlas**, texto de **Emanuel Muyres**, 30/05/2026 (https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html).
- "Brazil's space commission" → **CNAE**, chefiada por **Fernando de Mendonça**; o gerente do eclipse pela CNAE, **C. E. Sobral Vieira**; pela
  NASA, **Cary P. Milliner** (Wallops) (release 66-285, p. 6).
- "the astronauts of Gemini 12" → **James A. Lovell** e **Edwin E. Aldrin** (release 66-285, p. 2).

## Os 2 padrões mais vistos

1. **A atribuição que diz um pouco mais que a fonte** (VF050, VF051, VF042, VF205): o guia vira a cidade, o National Seashore vira a ilha,
   "beach record" vira todo recorde de praia, "very near the path" vira "the only reason". Nenhum número errado; a palavra em volta dele
   cresce.
2. **A imagem que carrega um fato que ninguém leu** (VF007, VF065, VF110, VF158/VF161): "stone" nos dois molhes, "nothing in the sand", "a
   ruler the size of a town", "from the seafloor". Saem da cena, não da fonte, e não têm número para acender o portão.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Onde gravar os laudos de fatos dos próximos vídeos (CLAUDE.md, "Os marcadores"): gravado em `roteiros/praia-do-cassino/qc-roteiro/`, como
  no Big Sur.

## Para a Sala ler no navegador do app

Nada foi recusado por robô; estes ficam para o navegador porque a ferramenta não abre o g1, ou porque a URL não está no disco:
1. **O g1 de 20/07/2025** (https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml):
   a frase exata do livro de Willy César, para decidir VF028 (o trecho saiu do livro depois da contestação, ou foi publicado depois dela?).
   De passagem: o nome do secretário de Turismo de Santa Vitória.
2. **Uma foto dos molhes da Barra do Chuí** (Commons ou OSM), para decidir VF007: se forem de pedra, "Stone walls" fica.
3. **A areia vem da plataforma** (VF158, VF161): Dillenburg et al., *Pesquisas em Geociências* (https://seer.ufrgs.br/index.php/PesquisasemGeociencias/article/download/112719/85561/533857,
   grande demais para a ferramenta da base), ou outra fonte da UFRGS ou da FURG que diga de onde vem a areia do Cassino.
4. (Reconferência, não bloqueia) a página da **Cultura do RS** de 29/01/2016 e a da **Trilha Cassino x Barra do Chuí**, lidas pela Sala hoje
   (VF034, VF097).

## O portão de fatos

`node ferramentas/portao-fatos.mjs praia-do-cassino`, depois de gravar: **PASSA**, exit 0. "sha12 do texto falado: e77cf10d671c (igual ao do
gate.mjs) · 22 parágrafos"; "laudo: Revisão julgada e77cf10d671c · COBERTURA 211 de 221 · VEREDITO RESSALVA"; "tabela: 211 confirmada(s) de
221". Dois tropeços do portão, contornados na tabela e declarados aqui: ele lê "g1" como o número 1 (as frases que nomeiam o g1 ganharam uma
linha com o trecho do Adendo que nomeia o g1: VF032, VF076, VF190), e não junta a hifenização de fim de linha quando a letra junto do hífen
tem acento ("holocê-/nica", "proje-/ções"): os trechos do Dillenburg foram escolhidos fora dessas quebras. A cópia da Revista Marítima tinha
4 caracteres nulos do PyMuPDF, que o portão lê como binário: foram retirados, com a marca no cabeçalho da cópia.

VEREDITO: RESSALVA
