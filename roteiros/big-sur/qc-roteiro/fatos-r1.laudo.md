# Laudo · verificador de fatos (independente, da Sala de controle) · rodada 1 · big-sur

Revisão julgada: `c00a9cce37c4` · data-base 2026-11-02

VEREDITO: RESSALVA

COBERTURA: 235 de 248 linhas da tabela com veredito "confirmada". As outras 13 são os achados abaixo: 10 "corrigir", 1 "datar" e 2 "nao_conferida". As 248 linhas cobrem as afirmações checáveis de 178 das 187 frases do texto falado de `c00a9cce37c4`. As 9 restantes não afirmam nada checável (NADA A CHECAR, declaradas uma a uma abaixo). O texto foi CHECADO POR INTEIRO; dois itens ficaram NÃO CONFERIDOS (VF12, imagem; VF13, site que pediu verificação de robô).

NOTA: 8.0/10 · Nenhum número dito está errado, e o esqueleto da tese está de pé, conferido contra a cópia e com a conta à mostra: o 1.474 do distrito (PL 94-171, relido hoje no arquivo do censo), as 5,86 e 5,94 por mi² no mesmo ano, só o Alasca abaixo do Wyoming, os 17,47 milhões das duas regiões metropolitanas, os dois terços da costa (0,64 pela latitude), os quase mil dos anos 1880 ditos da costa do plano, 1919 com a FHWA, junho de 1937 e os US$ 8 milhões com o plano, os três acampamentos e os 35 centavos, a regra do critical viewshed e os 15 %, as datas da Caltrans (2023, 2024, 14/01/2026, US$ 82,6 milhões), o Timber Fire com o CAL FIRE e as casas (345 de 887 vagas; 93 % de uso ocasional na ACS). O que tira pontos são onze formulações periféricas que dizem um pouco mais (ou outra coisa) que a fonte, a mais séria a de f116 (os Pfeiffer como doadores; John Pfeiffer vendeu) e a citação cortada de f107, e dois itens que nenhuma cópia sustenta (f182, que depende da imagem, e f185).

- **O que foi julgado:** o texto falado inteiro de `roteiros/big-sur/roteiro-narrador.md`, sha256 `c00a9cce37c4b89a738e92fa37bcf261ff96ce39d3105ba26722e8326b1c1277`.
  - `node roteiros/big-sur/_ferramentas/gate.mjs` (rodado primeiro): 2.396 palavras, 34 parágrafos, 193 frases pela regex (187 reais: o "U.S." parte três), média 12,4, maior 23, gancho de 134 palavras, "But" na palavra 19, PASSA, 0 problemas e 4 alertas. Os alertas, julgados como fato:
    - "nobody" (f7): negação ("it isn't that nobody came"), com o plano dizendo quase mil nos anos 1880. Passa;
    - "never" (f13, a assinatura): a costa nunca encheu (cerca de mil nos anos 1880, 5,86 por mi² em 2020). Passa;
    - "first" (f111): "the first State scenic Highway in California", 1965, letra do plano, atribuído. Passa;
    - a 1ª frase sem número: questão de voz, não de fato; o lugar ("Big Sur, between Los Angeles and San Francisco") confere (o plano: "The Big Sur coast of Central California").
- **Como a lista foi derivada: à mão.** O canal não tem extrator de afirmações. As frases são as do `frasesDe` do portão de fatos, juntadas as partições falsas do "U.S.". Cada frase foi lida inteira e partida em afirmações (número, data, nome, atribuição, citação, causa, universal, presente, definição), e cada afirmação ganhou pelo menos uma linha na tabela, com o trecho literal da cópia. O `roteiro-editor.md` serviu de mapa (os P [n]); o dossiê, de mapa das decisões. Nenhum veredito do editor nem do cético foi herdado: cada trecho foi relido.
- **Contra o quê:** a pauta inteira (`pautas/2026-11-01-video-5-big-sur.md`, com "Depois do sim" e "O cético"), as decisões da Sala de 02/11/2026 (o `pedido-base.md`) e as cópias locais:
  - `midia/big-sur/fontes/` (o plano de 1986 pelo `plano_trecho.py`; as estimativas, o Gazetteer, a ACS, o TIGER; as leituras da Sala de 02/11);
  - o PL 94-171 da Califórnia (`cageo2020.pl` e `ca000022020.pl`, na área de rascunho da sessão; ~700 MB, fora do canal), lido por script;
  - e as cópias cruas que li hoje na rede, gravadas em `midia/big-sur/fontes/web/` (abaixo).
- **A tabela:** `roteiros/big-sur/qc-roteiro/fatos-tabela.json`, 248 linhas (F001–F248): 230 de classe texto e 18 de medição (as que trazem o número da frase). Nenhuma de imprensa: o roteiro não se apoia em jornal.
- **As contas:** `roteiros/big-sur/qc-roteiro/fatos-medidas.py`, sem rede, sobre as cópias; a saída é `roteiros/big-sur/qc-roteiro/fatos-medidas.txt` (M01–M20). Três linhas existem só porque o portão lê o `.htm` cru: M17 (o "27,1937" do plano, sem espaço, imprime-se "June 27, 1937"), M18 (a década do plano) e M20 (a data de cada nota da Caltrans, que no HTML fica partida por tag).
- **Citações:** f35 ("drop precipitously to the sea") e f122 ("normal, unaided vision … at any season") são letra a letra (só vírgulas do roteiro em f122). f107 é literal mas cortada (VF04).

## A rede (02/11/2026, ~03:38–03:50 de Brasília, um pedido por vez, robots.txt lido antes de cada site novo)

Cada cópia tem a URL e a data na 1ª linha, sem edição abaixo dela:
- FHWA, https://www.fhwa.dot.gov/infrastructure/back0403.cfm (robots: `/infrastructure/` livre; 1 s entre pedidos) → `web/fhwa-back0403-2026-11-02.htm`;
- Caltrans (dot.ca.gov e roads.dot.ca.gov sem robots.txt, 404): as notas de 14/01/2026, 15/05/2026, 11/08/2026 e 02/09/2026 → `web/caltrans-d5-news-*.htm`; a informação de estrada da SR 1, "as of Sunday, November 1st, 2026 at 10:40 PM" → `web/caltrans-roads-sr1-lida-2026-11-02.htm` (mais nova que a da Sala, de 20:31);
- USGS (robots livre para `/news/`) → `web/usgs-news-mud-creek-drones-lida-2026-11-02.htm`;
- govinfo, 16 U.S.C. cap. 23 (a Wilderness Act), edição 2023 → `web/govinfo-uscode-2023-title16-chap23-wilderness-lida-2026-11-02.htm`;
- census.gov (robots só veta `/search-results.html` para todos; a página trouxe o conteúdo, sem desafio): sobre a ACS, o glossário de geografia, a regra de residência de 2020 → `web/census-*.htm`; e o www2.census.gov, as Table Shells da ACS 2020–2024 → `web/census-acs20245yr-table-shells-lida-2026-11-02.txt`;
- uma busca na web (a URL da regra de residência; dois endereços adivinhados deram 404).
- **NÃO FOI CHECADO — o site recusou robô (https://leginfo.legislature.ca.gov/robots.txt, 403 com desafio Cloudflare "Just a moment...")**: o Streets and Highways Code §301 (o traçado da Route 1), para f185. Parei no primeiro pedido.
- Não tentei os que a base lista como recusados (api.census.gov, data.census.gov, www.fire.ca.gov, inciweb, noaa.gov/media). Nenhum crédito gasto.

## ACHADOS

São 2 MÉDIOS e 11 LEVES, nenhum GRAVE. Nenhuma afirmação é REFUTADA; nenhuma toca o número que sustenta a tese. Cada uma tem conserto de uma frase pronto; as operações são da lista fechada do `ferramentas/aplicar-lista.mjs`.

**VF01 [MÉDIO] · P21 (p6) · F149 · ESTREITAR**
- **A frase:** "Other families, after the Pfeiffers, had given land for parks too, and the plan credits their generosity."
- **O problema:** "after the Pfeiffers … too" faz dos Pfeiffer doadores. O plano diz que John Pfeiffer **vendeu** os 706 acres ao Estado ("when he sold 706 acres to the State", P [1235]; o próprio f103 diz "sold"), e que o Julia Pfeiffer Burns foi doado pelos Lathrop Brown (P [1236]). Os outros doaram (Livermore, P [1237]) ou puseram em fideicomisso (Molera, P [1239]); a generosidade é das "pioneering families" (P [1240]).
- **CONSERTO:** "Other families later gave land for parks, and the plan credits their generosity."
- **RAIZ:** PONTUAL. **Fonte:** o plano, https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm.

**VF02 [MÉDIO] · P19 (p5) · F137 · DA-FONTE**
- **A frase:** "A way of life had ended."
- **O problema:** a citação é literal, mas cortada. A linha do plano é "A way of life had ended, and a new era began for the beautiful country" (P [1233]–[1234]); f106 a apresenta como a frase que "sums up the change in one line". Cortada no "ended", depois dos colonos furiosos e do entulho, ela vira só perda, e o plano diz perda e começo.
- **CONSERTO:** "A way of life had ended, and a new era began." (f108, "The new road put the coast within easy reach.", segue sem mudança).
- **RAIZ:** PONTUAL. **Fonte:** o plano (URL acima).

**VF03 [LEVE] · P2 (gancho) · F012 · REDIZER**
- **A frase:** "So why didn't more follow?"
- **O problema:** logo depois dos quase mil dos anos 1880, a pergunta pressupõe que mais não vieram, e o ouvinte pode ouvir "não cresceu" (a Sala: nunca "it hasn't grown"). Vieram poucos: 1.474 só no distrito, que é dois terços da costa (M01, M13). A troca do roteirista ("didn't more people move in?") tem a mesma pressuposição.
- **CONSERTO:** "So why did so few follow?"
- **RAIZ:** PONTUAL. **Fonte:** plano P [1481]; PL 94-171 (M01).

**VF04 [LEVE] · P6 (p2) · F042 · ESTREITAR**
- **A frase:** "At Cone Peak, near the southern end of the coast, they reach 5,200 feet."
- **O problema:** pela latitude, o Cone Peak fica a 0,66 do caminho de Carmel à divisa do condado (M14), no terço sul, não perto da ponta (Mud Creek, a 0,90, é que está). O 5.200 é o do plano (P [53]) e fica.
- **CONSERTO:** "At Cone Peak, in the southern part of the coast, they reach 5,200 feet."
- **RAIZ:** PONTUAL. **Fonte:** TIGER/Line 2020 (M10, M14); plano P [53].

**VF05 [LEVE] · P8 (p2) · F054 · DA-FONTE**
- **A frase:** "Yet it calls the water resources small and seasonal, shared by the animals, the plants and the people."
- **O problema:** o plano diz "The relatively small seasonal water resources" (P [188]). "calls … small" deixa o "relatively" cair e diz mais que o trecho.
- **CONSERTO:** "Yet it calls the water resources relatively small and seasonal, shared by the animals, the plants and the people."
- **RAIZ:** PONTUAL. **Fonte:** o plano.

**VF06 [LEVE] · P21 (p6) · F146 · ESTREITAR (veredito: datar)**
- **A frase:** "The county's answer came in 1986, in the plan this video keeps quoting."
- **O problema:** a capa da cópia diz "Adopted by the Monterey County Planning Commission 2/11/81", "Adopted by the Monterey County Board of Supervisors 11/5/85" e "Certification Acknowledged by the California Coastal commission on April …, 1986". A resposta do condado veio em 1981–1985; 1986 é o carimbo final. O rótulo "the county's 1986 plan" (Sala) fica certo; "came in 1986" data a decisão pelo carimbo.
- **CONSERTO:** "The county's answer took final form in 1986, in the plan this video keeps quoting."
- **Também:** f129 ("In 1986, it estimated…"), f160, f184 ("In 1986, the county wrote…") têm a mesma raiz: os "at present" do plano foram escritos entre 1981 e 1985. Pela decisão da Sala ("os 2,9 milhões por ano de 1986, com o ano"), ficam; o laudo só registra.
- **RAIZ:** INSTRUÇÃO (o "1986" das decisões da Sala vale como nome do plano, não como data de cada número dele). **Fonte:** o plano, a capa.

**VF07 [LEVE] · P23 (p6) · F170 · ESTREITAR**
- **A frase:** "So it reserved most of the highway's capacity for recreation and visitors."
- **O problema:** os 85 % do plano são para "recreational travel, service trips to public and private recreation and visitor-serving facilities, use by military vehicles, and coastal-dependent agriculture", e a reserva vem das prioridades do Coastal Act (P [1428]). O "So" tem apoio (P [1341]: a demanda vai passar da capacidade); a lista de usos, não.
- **CONSERTO:** "So it reserved most of the highway's capacity for recreation, visitors and a few other priority uses."
- **RAIZ:** PONTUAL. **Fonte:** o plano.

**VF08 [LEVE] · P27 (p7) · F192 · ENFRAQUECER**
- **A frase:** "In August 2026, a wildfire started in the national forest above the coast."
- **O problema:** a página do CAL FIRE (cópia da Sala) dá "Agency Having Jurisdiction Los Padres National Forest" e o ponto [36.224857,-121.72983] (no distrito, na serra acima do vale de Big Sur: M10), não diz que o fogo começou dentro da floresta; o limite da floresta não foi lido (pauta §11, item 7). A data (08/08/2026) confere.
- **CONSERTO:** "In August 2026, a wildfire broke out in the mountains above this coast."
- **RAIZ:** PONTUAL. **Fonte:** CAL FIRE, https://www.fire.ca.gov/incidents/2026/8/8/timber-fire (cópia em `midia/big-sur/fontes/leituras-sala-2026-11-02.md` §1).

**VF09 [LEVE] · P28 (p7) · F203 · ESTREITAR**
- **A frase:** "For the people who live along this road, the fire came right after the long closures of the slides."
- **O problema:** a estrada reabriu em 14/01/2026 (Caltrans) e o fogo começou em 08/08/2026 (CAL FIRE): quase sete meses.
- **CONSERTO:** "For the people who live along this road, the fire came only months after the long closures of the slides."
- **RAIZ:** PONTUAL. **Fontes:** https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-1-14-26 e o CAL FIRE.

**VF10 [LEVE] · P29 (p8) · F211 · DA-FONTE**
- **A frase:** "Back in 1986, the county's plan had found homes like these in small clusters, or scattered along Highway 1."
- **O problema:** o plano diz "rural residential clusters" (P [1493]); o "small" não está nele.
- **CONSERTO:** "Back in 1986, the county's plan had found homes like these in rural clusters, or scattered along Highway 1."
- **RAIZ:** PONTUAL. **Fonte:** o plano.

**VF11 [LEVE] · P33 (p9) · F236 · ESTREITAR**
- **A frase:** "It's one of the viewpoints the county's rule was written to protect."
- **O problema:** a regra protege a vista a partir dos mirantes ("everything within sight of Highway 1 and major public viewing areas", P [230]), não o mirante. O Bixby Creek Turnout é nomeado nela.
- **CONSERTO:** "It's one of the viewpoints named in the county's rule."
- **RAIZ:** PONTUAL. **Fonte:** o plano.

**VF12 [LEVE] · P34 (p9) · F239 · PEDIR (veredito: nao_conferida)**
- **A frase:** "Hardly a house is in sight."
- **O problema:** nenhuma fonte descreve a vista do mirante; o plano lista Bixby Canyon entre as áreas residenciais (P [1536], [1712]). A frase é verdadeira só se a imagem sob ela não mostrar casa.
- **CONSERTO:** pedir à regência e ao `conferente-de-midia` a imagem do mirante sem casa à vista. Se a imagem escolhida mostrar casa, a troca do roteirista: "From this turnout, the slopes look almost untouched." (que também depende da imagem).
- **RAIZ:** PONTUAL.

**VF13 [LEVE] · P34 (p9) · F244 · PEDIR (veredito: nao_conferida)**
- **A frase:** "That highway runs all the way from one metro area to the other."
- **O problema:** verdadeiro por conhecimento geral, mas nenhuma cópia o sustenta: a Caltrans lista a SR 1 no condado de Orange (região de Los Angeles: "Irvine Cove to State School Park /in Laguna Beach/ (Orange Co)"), nada a põe em San Francisco; a FHWA só diz "from Baja to the top of the Olympic Peninsula", que é solto demais para confirmar; o plano a leva da península de Monterey ao Hearst Castle (P [1292]). **NÃO FOI CHECADO — o site recusou robô (https://leginfo.legislature.ca.gov/robots.txt, 403, Cloudflare)**: o Streets and Highways Code §301.
- **CONSERTO:** a Sala lê o §301 no navegador do app; se não der, CORTAR f185 e f186 vira "Together, Los Angeles and San Francisco hold more than 17 million people." (f187, "In between, …", segue).
- **RAIZ:** PONTUAL.

## Confirmadas com observação (não pedem troca)

- **f2 e f186** ("hold"): o presente é a safra 2025 (17.474.482); na base de 2020, 17.958.344. Vale nos dois anos (K2).
- **f25 e f26:** o Wyoming é a base das estimativas de 2020 (576.872), não a contagem do censo (K7, não lida); a densidade é 5,94 nos dois, e a ordem (Alasca 1,28; Wyoming 5,94; Montana 7,45) não muda.
- **f53 e f54:** a definição está na lei: 16 U.S.C. 1131(c) ("without permanent improvements or human habitation", "a visitor who does not remain") e 1133(c) ("no permanent road", "no structure or installation"), "subject to existing private rights" e com as exceções de administração. A forma fraca do editor não é preciso.
- **f62:** "the road simply disappears" depende do trecho do vídeo do USGS (a página diz "buried and unburied parts of Highway 1").
- **f74 e f180:** o plano diz que o nome de Charlie Bixby está num acidente conhecido de Big Sur (P [1203]) e lista Bixby Creek (P [576]); a FHWA chama a ponte de "Bixby Rainbow Bridge". Que o riacho homenageia Charlie Bixby é inferência forte, declarada.
- **f94:** "the road had to get across each one" é leitura do traçado costeiro; a FHWA dá 33 pontes na Highway One.
- **f112** ("By the 1980s") e **f137** ("In the 2020s"): anos derivados (M18, M19), certos.
- **f144:** a Caltrans dá a reabertura "at noon on Wednesday, January 14" (a nota de 15/05 cita a Visit California com "Jan. 15"; vale a nota oficial).
- **f164 e f176:** a ACS tem margens largas (265 ± 94 de 285 ± 95); "nearly all" e "many" ficam nelas. f176 junta a ACS e o censo só como ordem de grandeza (M16).
- **f181:** "a road that prisoners helped cut" vale como a estrada inteira (FHWA); os acampamentos não estão em Bixby.
- **A varredura "estado do mundo":** f153 ("By mid-October, it was almost fully contained") e f157 ("By November 2026, the road was open…") estão datados e conferem: 97 % em 14, 16 e 18/10 (CAL FIRE); e a Caltrans de 01/11/2026, 22:40, só lista mão única em Mud Creek, de Point Sur a Big Sur e na ponte de Rocky Creek, nenhum fechamento (o do Plaskett, ao sul, já caiu). f40, f47, f52, f171, f172 e f178 estão no presente, sobre coisa que não muda no prazo do vídeo (a estrada é a via de acesso; o clima; a floresta federal; os visitantes). Nenhuma frase diz que a regra de 1986 vale hoje.

## As decisões da Sala, conferidas

O 1.500 sempre com "the census district" e sem milhagem na frase (f3, f187); "about six people per square mile" e o Wyoming 2020 com 2020 (f24, f25); as metrópoles pelo nome, sem "largest" (f1, f2, f186); os anos 1880 atribuídos ao plano e ditos da costa (f8, f71, f72), sem "same as today"; 1919 com a FHWA (f92), 1937 e US$ 8 milhões com o plano (f105), os presos com a medida (f96–f99); a regra no passado, sem "still", "today" ou "since 1986"; metade da zona costeira pública (f115); os 15 % (f133); Paul's, Regent's, a reabertura e os US$ 82,6 milhões (f139–f145); o fogo em palavras, sem "destroyed" e sem número na voz, o Plaskett só pelo nome; as casas em duas réguas, cada uma com o dono, sem margem na voz; os 2,9 milhões com o ano e "the visitors came back" sem número; nada de preço, mansões, Esselen, falha, neblina, "strictest", "emptiest" ou "the only road" (f41 diz "just one other road", datado em 1986). Todas cumpridas.

## O que a tese não diz, conferido

f134–f135 dizem que a regra não esvaziou a costa; nada diz que a população não cresceu (com VF03); construir não é dito proibido (f125: "new homes were possible, with conditions"); a estrada não é a única causa nem a única estrada; o fogo não destruiu casas na fala; nenhum visitante de hoje tem número.

## NADA A CHECAR (9 frases, declaradas)

f4 "Why?"; f31 "To see why the census number is so low, start with the ground itself."; f32 "So what makes this ground so hard to live on?"; f39 "Take access."; f43 "Then there's water, which sounds like the odd one out."; f50 "The other reasons have more to do with who owns the land, and what happened on it."; f138 "So what happens to a coast like this when its road breaks?"; f169 "The visitors are the other side of the count."; f174 "So how empty this coast looks depends on what you count." (perguntas, pontes e enquadramentos, sem fato).

## Voláteis que ficaram na fala

- **f157** (a estrada aberta, mão única em obras): relê-se na Caltrans (roads.dot.ca.gov) antes da publicação. Cresce com um fechamento novo (chuva, deslizamento); zera se as obras acabarem (as três restrições vão até 13/11, 30/11 e 31/12/2026). A frase está datada ("By November 2026") e continua verdadeira.
- **f153** (quase todo contido em meados de outubro): datada; não muda com 100 %.
- **f2 e f186** (mais de 17 milhões): a safra 2026 das estimativas sai em 2027; o número só cai abaixo de 17 milhões com perda de ~475 mil.

## A lista de nomes

O roteiro não tem fonte anônima. Os nomes, com a credencial da fonte: Shawn Harrison ("USGS Mendenhall researcher", página do USGS de 06/11/2017); Doctor John Roberts ("the founder of the City of Seaside", plano P [1228]; "John L.D. Roberts, M.D.", FHWA); John Pfeiffer (P [1235]); Charlie Bixby, Jim Anderson e os Pfeiffer (P [1203]); Bill Post (P [1218]).

## Os 2 padrões mais vistos

1. **A paráfrase que diz um pouco mais que o trecho** (VF01, VF04, VF05, VF07, VF10, VF11): uma palavra do roteiro ("too", "near the southern end", "small", "for recreation and visitors", "small clusters", "to protect") que o plano não tem.
2. **A data e a distância derivadas** (VF06, VF09, e as observações de f112, f129, f137, f184): o carimbo de 1986 tomado como data de cada decisão, e "right after" para sete meses.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Onde gravar os laudos de fatos dos próximos vídeos: segui o Juneau e a tarefa (`roteiros/<proj>/qc-roteiro/`).

## O portão de fatos

`node ferramentas/portao-fatos.mjs big-sur` lê `qc-roteiro/fatos.laudo.md`, que esta tarefa não grava (o laudo é `fatos-r1.laudo.md`). Rodei-o numa cópia (`--raiz` na área de rascunho, com este laudo copiado como `fatos.laudo.md`, o roteiro, a tabela, a medida, o `gate.mjs` e as cópias), em 02/11/2026: `portão de fatos — big-sur: PASSA` · sha12 `c00a9cce37c4` (igual ao do gate.mjs) · 34 parágrafos · COBERTURA 235 de 248 · VEREDITO RESSALVA · exit 0. O portão prova que cada trecho existe na cópia e que os números das frases confirmadas estão nos trechos; que o trecho sustenta a frase é o que este laudo julga.

VEREDITO: RESSALVA
