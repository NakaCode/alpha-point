# Vídeo 8 · O Brasil: o gerador de pautas (18/11/2026)

Subagente da Sala. O pedido está em `out/_pautas/video-8-brasil/pedido-gerador.md`; valem o `out/_pautas/video-8/pedido-estrutural.md` e a régua nova do
`out/_pautas/video-8/pedido-estrutural-r3.md` ("pode já existir; não pode ser atual"; curiosidade primeiro).

O pedido do Lucas (18/11/2026, chat da Sala): ""Por que o Brasil se tornou tão grande?" "Por que o Brasil é tão rico em biomas" algo assim, sobre o
Brasil"; e "Brasil no lugar".

## O resumo

| # | Pauta | Título de trabalho (caracteres) | Nota | A concorrência, em uma linha |
|---|---|---|---|---|
| 1 | **As duas florestas que não se tocam** (semente 2) | Why Brazil Has Two Rainforests That Never Touch (47) | **6,5** | nenhum vídeo em inglês no ângulo; vizinhos gerais (Geoff, 673 mil, 14/11/2025) |
| 2 | **O plano americano de invadir o Brasil** (o cotovelo de Natal) | Why the U.S. Planned to Invade Brazil in 1941 (45) | **6,0** | inglês quase vazio; em português é tema conhecido (317 mil em 2024) e saiu matéria em 02/11/2026 |
| 3 | **O Acre comprado com uma ferrovia** (a semente 1 com ângulo nosso) | The Railroad Brazil Built to Pay for a Piece of the Amazon (58) | **5,5** | nada em inglês; em português, o Canal H1 (316 mil, 03/02/2026) e o Canal Top10 (51 mil, 09/08/2026) |
| 4 | **Trindade, a ilha que dá ao Brasil um mar maior que a Califórnia** | The Tiny Island That Gives Brazil a Sea Bigger Than California (62) | **5,5** | nada em inglês no ângulo; em português, o Documento Band (1,04 mi, 2020) |
| 5 | **O país da maior água doce que secou** | Why the Country With the Most Fresh Water Keeps Running Dry (59) | **5,0** | notícias de 2014–15 e os "rios voadores"; fatos ainda frágeis |
| 6 | **A linha de 1494 e as duas metades** (a semente 1 clássica) | Most of Brazil Was Supposed to Be Spanish (41) | **4,5 · DERRUBADA pela onda** | o "Why Is Brazil So Big" está na onda agora (abaixo) |

A escala é a das rodadas de 17 e 18/11: as que ficaram de pé nos céticos tiveram 5,5 a 6,5. "Na dúvida, derrube" vale.

## O achado que muda a semente 1: o tamanho do Brasil está na onda agora

O "por que o Brasil ficou tão grande" é clássico, e a régua deixa o antigo passar. O que derruba é o atual, e ele está aí, lido na página `/watch` e na página
`/videos` dos canais em 18/11/2026:

- **O molde do momento é o do contraste, e um canal pequeno estourou com ele há 7 semanas:** "Why Did The US Unite as 1 Country But Spanish America Became 18?"
  (BecauseGeography, 6,2 mil inscritos, **252.416 views, 30/09/2026**, 32 min). O mesmo canal segue em série: "Russia Started as a Tiny Forest Kingdom. How
  Did It Get This Big?" (31 mil, há 3 semanas), "Why Is The US So Much Richer Than Brazil?" (14 mil, há 13 dias), "Why Did Turkey Unite as 1 Country But the
  Balkans Became 10?" (36 mil, há 1 mês). O Brasil é o alvo óbvio do próximo.
- "Why didn't the Spanish Colonies become 1 SINGLE country?" (Knowledgia, 148.546, 11/08/2026).
- O enxame que a Sala viu: três vídeos minúsculos em 4 dias ("How Did Brazil Get So Big?", "Why Is Brazil So Ridiculously Big", "Why Is Brazil So Big? (It
  Was Supposed to Be a Slice)").
- Em espanhol, o pedaço da arbitragem americana viralizou: "Misiones casi mide el doble… hasta que un presidente de EE. UU. decidió" (Planeta Wow, 11,9 mil
  inscritos, **553.088 views, 03/11/2026**).
- Os grandes antigos: "Why Didn't Spanish America Unite Like Brazil?" (Icebulb, 1.788.975, 21/06/2024, 31 min); "How did Brazil get so big?" (History Matters,
  1.137.234, 03/04/2024); "Why is Brazil a Country?" (Knowledgia, 1.017.418, 24/12/2022); "Why Didn't the Spanish Colonies Unify Like the USA?" (SideQuest,
  987.987, 2020); o curto "How did Brazil's territory change over time?" (Mapper Maniac, 2.559.934, 29/04/2026); e o Geoff duas vezes no Brasil ("Why Brazil's
  Geography Is Unlike Any Other Country", 673.120, 14/11/2025; "The Real Reason Why Most of Brazil is Empty", 540.197, 28/04/2026).

**A minha leitura:** a semente 1 no ângulo de todo mundo (a fatia de 1494, o "como ficou tão grande", o contraste com a América espanhola) está na onda; a
pauta 6 fica derrubada, com as medidas guardadas. **O ângulo nosso da semente 1 é o Acre** (pauta 3): a última peça grande do Brasil foi comprada, em 1903,
com dinheiro e com uma ferrovia na selva. A medida da linha de 1494 entra como o ato 1 dele.

**E a América do Sul inteira está quente em canal de natureza e engenharia:** a PBS Terra fez o furacão Catarina ("This Hurricane Should NEVER Have Happened…",
1.685.302, 06/10/2026) e os Lençóis (5.989.376, 28/10/2025); um canal de 1,3 mil inscritos fez Sete Quedas e Itaipu em espanhol ("Itaipú: la represa que se
tragó la cascada más poderosa del mundo", 436.518, 17/10/2026). Os três caíram aqui por isso.

## As medidas nossas (feitas hoje, com dado aberto)

Os scripts e as saídas estão em `out/_pautas/video-8-brasil/_trabalho/`; os brutos grandes, em `midia/_pautas/video-8-brasil/` (fora do git). As áreas são no
Albers de área igual (GRS80, os parâmetros do IBGE) escrito à mão em `geo_util.py`: a área do Brasil saiu **8.510.418 km²**, igual à oficial do IBGE
(8.510.417,771 no próprio arquivo), o que prova a conta.

1. **As duas florestas** (`biomas_medida.py` → `biomas-medida-saida.txt`; IBGE, Biomas do Brasil 1:250.000, 2019; o diretório do IBGE diz "Todos os arquivos aqui
   disponíveis são públicos"; zip com sha256 `1d8a4d86…`):
   - **a Amazônia e a Mata Atlântica não se tocam** no mapa oficial (teste na resolução cheia);
   - **a menor distância entre elas é de 568 km (353 mi)**, entre um ponto da Amazônia em Mato Grosso (52,25° O, 13,41° S) e um da Mata Atlântica no sul de
     Goiás (50,71° O, 18,32° S). No Nordeste o vão passa de 1.000 km;
   - o Cerrado toca as duas; a Caatinga toca só a Mata Atlântica; o Pantanal, só a Amazônia;
   - **o miolo seco (Cerrado + Caatinga) tem 2.847.194 km² (1,10 milhão de sq mi)**: maior que a Argentina (2.782.897 km² no Natural Earth), 33,4 % do Brasil;
   - as áreas: Amazônia 49,5 %, Cerrado 23,3 %, Mata Atlântica 13,0 %, Caatinga 10,1 %, Pampa 2,3 %, Pantanal 1,8 %.
2. **Quem mora em cada bioma** (`pop_bioma.py`; IBGE Censo 2022, população total por município, e a sede municipal das Localidades 2022):
   **a Mata Atlântica, com 13 % da terra, tem 58,1 % dos brasileiros (118 milhões)**; a Amazônia, com 49,5 %, tem 10,2 % (20,7 milhões); a Caatinga tem
   27,0 milhões, mais gente que a Amazônia inteira. (A conta põe o município inteiro no bioma da sede: é aproximada.)
3. **A linha de 1494** (`tordesilhas_medida.py`; IBGE BR_Pais_2022 + Censo 2022 + Localidades 2022; as nove leituras da longitude da linha, de 42°25′ a 49°45′ O,
   da en.wikipedia "Treaty of Tordesillas"):
   - **de 64 % a 88 % do Brasil fica a oeste da linha, conforme a leitura**: é "a maior parte" em todas elas;
   - na leitura castelhana de Badajoz (1524, 46°36′ O), **75,1 % da terra fica do lado espanhol e 55,7 % dos brasileiros moram do lado português**; a linha
     passa a 2 km da sede de São Paulo; Brasília fica do lado espanhol em 8 das 9 leituras;
   - Brasília, Goiânia, Curitiba, Belém e Florianópolis só ficam do lado português na leitura de Diogo Ribeiro (49°45′); Manaus e Porto Alegre, em nenhuma.
4. **As duas metades** (`areas_paises.py`; Natural Earth 1:10m, domínio público, a cópia do motor com sha256 no manifesto): os nove países de língua espanhola
   somam **8.776.225 km²**; o Brasil, **8.472.664 km²** (no Natural Earth). São **49,6 % e 47,9 % da América do Sul**. O Brasil é **6,7 % maior que os EUA
   contíguos** (7.942.046 km² de terra no mesmo arquivo).
5. **O mar de Trindade** (`trindade_zee.py`; Natural Earth; a zona de 200 milhas náuticas da Convenção de 1982, como círculo em torno das ilhas, numa projeção
   azimutal de área igual): **468.813 km² = 181.010 sq mi, 1,11 vez a Califórnia** (163.696 sq mi). As ilhas têm 10,4 km² (4,0 sq mi): o mar é ~45 mil vezes a
   terra. A costa mais próxima fica a 1.079 km (671 mi); Vitória, a 1.147 km (713 mi).
6. **O estreito do Atlântico** (`atlantico_estreito.py`; Natural Earth): **2.836 km (1.762 mi)** do litoral perto de Touros (RN) ao Cabo Roxo, na divisa do
   Senegal com a Guiné-Bissau. Natal–Dakar 2.996 km (1.862 mi); Natal–Norfolk (Virgínia) 6.365 km (3.955 mi): **Dakar fica a 0,47 da distância de Norfolk**;
   Natal–Colón (Canal do Panamá) 3.252 mi.
7. **O preço do Acre** (`acre_conta.py`, conta nominal sobre números lidos): 191.000 km² = 47,2 milhões de acres; £2 milhões a US$ 4,86 = US$ 9,72 milhões =
   **US$ 0,206 por acre, 10,7 vezes o Alasca** (US$ 0,0192 em 1867); com a ferrovia (US$ 33 milhões) e o sindicato (£110 mil), **US$ 0,92 por acre, 48 vezes**.
   O território de 1903 é **8 % maior que o Uruguai** (177.342 km² no Natural Earth).

---

## 1. As duas florestas que não se tocam · 6,5 (a semente 2)

- **Título:** "Why Brazil Has Two Rainforests That Never Touch" (47).
  - Variantes: "Why South America Has Two Rainforests Instead of One" (52); "The Dry Belt That Split South America's Rainforest in Two" (57).
  - Se o cético achar o "never" forte demais (as matas de galeria cruzam o Cerrado em fios), cai para "Don't Touch".
- **O chamariz:** todo mundo conhece a Amazônia; quase ninguém sabe que há uma segunda floresta tropical no litoral, e que um cinturão seco do tamanho da
  Argentina separa as duas.
- **O paradoxo:** o país da maior floresta tropical tem, no meio, um miolo de savana e semiárido maior que a Argentina; as duas florestas ficam a pelo menos
  353 milhas uma da outra, e a mesma cobra vive nas duas sem viver no meio.
- **O gancho** (37 palavras): "South America has two great rainforests: the Amazon, and a second one along Brazil's Atlantic coast. On Brazil's official map,
  they never touch. At their closest, about 350 miles of savanna and dry scrub keep them apart."
- **Os fatos** (lidos em 18/11/2026):
  1. "The Mata Atlântica and Amazônia are separated by an approximately 1000 km wide 'dry diagonal' comprising the woodlands of the chaco, the cerrado savannas
     and the caatinga dry forests of Brazil", que nasceu "when South American climates started to dry in the early Miocene". Proceedings B / PMC,
     https://pmc.ncbi.nlm.nih.gov/articles/PMC11750371/.
  2. A diagonal seca "is suggested to have acted as a dispersal barrier for terrestrial organisms by fragmenting a single large forest that existed in South
     America into the present Atlantic and Amazon forests"; a jararaca *Bothrops bilineatus* "currently has a disjunct distribution in both the Atlantic and
     Amazon forests". PLOS ONE (2021) / PMC, https://pmc.ncbi.nlm.nih.gov/articles/PMC8448354/.
  3. A Mata Atlântica tinha "1,000,000–1,500,000 km²" e era "the second largest rainforest on the planet, only behind the Amazon"; nas glaciações do Pleistoceno
     encolheu a refúgios "separated by areas of dry forest or semi-deserts known as caatingas". en.wikipedia, https://en.wikipedia.org/wiki/Atlantic_Forest.
  4. A Caatinga: chuva de "20–80 cm (7.9–31.5 in) on average", "home to 26 million people", e o nome vem do tupi "white forest". en.wikipedia,
     https://en.wikipedia.org/wiki/Caatinga.
  5. A divisão oficial em seis biomas e as áreas: o arquivo do IBGE (medida 1 acima),
     https://geoftp.ibge.gov.br/informacoes_ambientais/estudos_ambientais/biomas/vetores/Biomas_250mil.zip.
  6. Por que o Nordeste chove menos que a Amazônia estando nos trópicos (PMC2887855): **NÃO CONFERIDO (site recusou: o PMC respondeu com reCAPTCHA)**. O porquê do
     clima (o ar que desce, a zona de convergência que só passa em março–abril) fica a ler numa fonte de climatologia.
- **A medida nossa:** as medidas 1 e 2 (IBGE, público): não se tocam; 353 mi no ponto mais perto; o miolo seco maior que a Argentina; a Mata Atlântica com 13 %
  da terra e 58 % das pessoas.
- **Os atos** (13 a 15 min):
  1. O mapa: as duas florestas, o vão de 353 milhas entre Mato Grosso e Goiás, o miolo seco maior que a Argentina, e a Caatinga onde mora mais gente que na Amazônia.
  2. Por que o meio é seco: a estação seca de 5 a 6 meses do Cerrado, o semiárido do sertão com 8 a 31 polegadas de chuva, o ar que desce e a chuva que não chega (a ler).
  3. Elas já se tocaram: a cobra das duas florestas, as matas de galeria como pontes, o Mioceno; e o fecho na floresta menor, onde vivem 6 em cada 10 brasileiros.
- **A miniatura:** relevo amarelo do Brasil tropical, do Amapá ao Paraná; **as duas florestas em vermelho**, com contorno branco; o vão de 353 mi como uma barra
  **ciano** entre os dois pontos mais próximos, com duas setas brancas grossas nas pontas; oceano e rios em azul; caixa preta **"350 MILES"** (não repete o
  título; alternativa "THE GAP").
- **A concorrência:**
  - nenhum vídeo em inglês no ângulo (4 buscas no youtube.com pelo buscador da web: "two rainforests", "dry diagonal", "Atlantic Forest Amazon", "Brazil
    biomes");
  - os vizinhos: o Geoff, "Why Brazil's Geography Is Unlike Any Other Country" (673.120, 14/11/2025; os resumos falam dos biomas em geral; **não sei se ele
    mostra o vão**); "The Real Reason Why Most of Brazil is Empty" (540.197, 28/04/2026);
  - curtos minúsculos de biomas ("Brazilian biomes", 3.248, 2022; "Biomes of Brazil", 220, 03/03/2026) e vídeos de conservação da Mata Atlântica (FRANCE 24,
    a PBS "Brazil's Other Rainforest": não lidos);
  - a PBS Terra anda pela floresta latino-americana (Costa Rica, 767.170, 20/08/2026; o Panamá, 695.131, 01/10/2026): é quem pode fazer a Mata Atlântica antes.
- **Os riscos:**
  - o "never touch" vale no mapa oficial; a ciência fala de matas de galeria cruzando o Cerrado e de pontes antigas. A voz diz "on Brazil's official map" e o
    ato 3 conta as pontes;
  - o desmatamento (mais de 85 % da Mata Atlântica se foi) puxa para o tema do momento: o vídeo fica na geografia;
  - o porquê do clima está por ler (a fonte do PMC recusou);
  - o material é forte: mapas com geometria real, MapBiomas e MODIS para a cobertura, fotos de acervo livre das duas florestas e da Caatinga.
- **A nota: 6,5.** A curiosidade é alta, o lugar se reconhece, a medida é nossa e a onda está limpa até onde eu vi. Não sobe de 6,5 porque o "never" pode
  cair no cético e porque o Geoff pode ter mostrado o vão em um minuto.

## 2. O plano americano de invadir o Brasil · 6,0

- **Título:** "Why the U.S. Planned to Invade Brazil in 1941" (45; a data é obrigatória pela `marca/embalagem.md` §2).
  - Variantes: "Why the U.S. Drew Up a Plan to Invade Brazil" (44); "The Corner of Brazil the U.S. Was Ready to Invade" (49).
- **O chamariz:** os EUA, que viraram aliados do Brasil, aprovaram um plano de desembarque nas praias de Natal; quase ninguém fora do Brasil sabe disso, e o
  motivo é um mapa.
- **O paradoxo:** um país neutro e amigo virou alvo porque o cotovelo do Brasil é o ponto da América mais perto da África: Dakar fica a menos da metade da
  distância de Natal a Norfolk.
- **O gancho** (38 palavras): "In December 1941, American war planners drew up a plan to land Marines on the beaches of Natal, Brazil. Brazil was neutral,
  and friendly. What made this one corner of South America worth invading wasn't anything on the ground." ("drew up", e não "approved": a fonte lida diz
  "dated 21 December 1941"; a aprovação só aparece na matéria brasileira.)
- **Os fatos** (lidos em 18/11/2026):
  1. "Plan Rubber was the amphibious component of the Joint Basic Plan for the Occupation of Northeast Brazil, J. B., Serial 737, dated 21 December 1941", pelas
     praias de Natal; "never carried out due to successful diplomatic initiatives"; 2.902 baixas americanas previstas; desembarques também em Belém, Salvador e
     Fernando de Noronha; Dakar ficava a menos da metade da distância Natal–Norfolk; a história do Exército de 1960 não achou prova de plano alemão de invadir o
     Brasil; Parnamirim "became one of the busiest American air bases in the war". en.wikipedia, https://en.wikipedia.org/wiki/Plan_Rubber.
  2. O "Atlantic Belt, the narrowest stretch between South America and Africa", "the 1,700-mile route from Natal to Dakar", chamado de "Northeast Ridge"; o
     Brasil declarou guerra em 22/08/1942, depois de seis navios afundados em dois dias. en.wikipedia, https://en.wikipedia.org/wiki/Brazil_in_World_War_II.
  3. Roosevelt e Vargas se encontraram em Natal, a bordo do USS Humboldt, em 28 e 29/01/1943, na volta de Casablanca. en.wikipedia,
     https://en.wikipedia.org/wiki/Potenji_River_Conference.
  4. Parnamirim é o "Trampolim da Vitória"; os americanos devolveram a base à FAB em outubro de 1946. en.wikipedia, https://en.wikipedia.org/wiki/Parnamirim.
  5. De 1943 a 1945 a base serviu à FAB, ao Exército e à Marinha dos EUA, à RAF e às companhias aéreas. en.wikipedia,
     https://en.wikipedia.org/wiki/Natal_Air_Force_Base.
  6. A fonte primária moderna (Michael Gannon, USNI Proceedings, "Invade Brazil", 1999): **NÃO CONFERIDO (site recusou: 403)**. A história oficial do Exército
     (Conn e Fairchild, *The Framework of Hemisphere Defense*, 1960) está no HyperWar (ibiblio): a ler.
- **A medida nossa:** a medida 6 (Natural Earth): o estreito de 1.762 mi; Natal–Dakar 1.862 mi contra Natal–Norfolk 3.955 mi (0,47); Natal–Canal do Panamá
  3.252 mi. O "1,700-mile" da Wikipedia fica abaixo da nossa medida de Natal a Dakar: a tela usa a nossa.
- **Os atos:**
  1. O plano: a página de 21/12/1941, os fuzileiros nas praias de Natal, as 2.902 baixas previstas e as outras cidades.
  2. O mapa explica: o cotovelo, o estreito de 1.762 milhas, Dakar mais perto que a Virgínia, o medo pelo Canal do Panamá e a rota aérea para a África.
  3. A troca pela diplomacia: as bases cedidas, a guerra declarada em 1942, Parnamirim cheia de aviões, Roosevelt em Natal, a devolução em 1946, e a dúvida de 1960.
- **A miniatura:** relevo amarelo do Atlântico tropical com o Brasil e a África; **o cotovelo do Nordeste em vermelho**; **a África Ocidental em ciano**; a
  linha branca tracejada de Natal a Dakar; uma seta branca grossa descendo do canto de cima à esquerda (os EUA) até Natal; caixa preta **"PLAN RUBBER"**.
- **A concorrência:**
  - em inglês: "Why did Brazil Join World War 2?" (History Matters, 1.947.814, 28/09/2021, 3 min); "Brazil during World War II: from Neutral Ally to Active
    Participant" (History Hustle, 105.472, 12/10/2024); "What If The United States and Brazil Went To War?" (AdizzPro, 47.583, 08/10/2025, hipotético); "The
    Nazi Plan for South America" (91 views, 21/02/2026). **Nenhum vídeo em inglês sobre o Plan Rubber achado**;
  - em português é conhecido: "1941: o dia que o Brasil foi invadido pelos EUA" (Fatos Desconhecidos, 317.065, 14/01/2024); "PLANO BORRACHA" (Sala de Guerra,
    68.532, 16/02/2025); "O plano INSANO dos EUA para invadir o Brasil" (36.380, 2023); os curtos do Viagem na História sobre Natal (221.783, 09/09/2024);
    "E se os EUA decidissem invadir o Brasil?" (Canal Top10, 88.763, 31/03/2026, hipotético);
  - em espanhol: "Proyecto Rubber" (TRUFAULT, 33.805, 2020);
  - **a notícia:** a Revista Sociedade Militar publicou em **02/11/2026** "Documentos militares revelam que os EUA planejaram ocupar o Nordeste brasileiro com
    até 100 mil soldados" (https://www.sociedademilitar.com.br/2026/11/documentos-militares-revelam-que-os-eua-planejaram-ocupar-o-nordeste-brasileiro-com-ate-100-mil-soldados-cvl.html).
- **Os riscos:**
  - a matéria de 02/11 mostra o tema circulando no Brasil agora: a Sala confere se ele pulou para o inglês;
  - o plano nunca foi executado: o título diz "Planned", nunca "Invaded" (os vídeos brasileiros dizem "invadido"; o desembarque de fuzileiros em Natal em
    dezembro de 1941 que alguns contam **não está confirmado**);
  - é guerra, mas de 1941: tom de arquivo, e cada lado nos próprios termos (o Estado Novo de Vargas, os oficiais simpáticos ao Eixo);
  - material: fotos do Exército e da Marinha dos EUA em domínio público (NARA), mapas, Parnamirim.
- **A nota: 6,0.** A curiosidade é a mais alta da lista para quem fala inglês, e a geografia explica o poder. Fica abaixo das florestas pela notícia de 02/11 e
  pelo tema conhecido em português.

## 3. O Acre comprado com uma ferrovia · 5,5 (a semente 1, com ângulo nosso)

- **Título:** "The Railroad Brazil Built to Pay for a Piece of the Amazon" (58).
  - Variantes: "How Brazil Bought a Piece of the Amazon Bigger Than Uruguay" (59); "Why Brazil Paid for Part of the Amazon With a Railroad" (54).
- **O chamariz:** um país que comprou um território maior que o Uruguai e pagou parte com uma ferrovia na selva, contra um sindicato de Nova York.
- **O paradoxo:** o Brasil pagou por acre 10 vezes o que os EUA pagaram pelo Alasca, e a ferrovia prometida custou mais que o dinheiro; tudo porque as
  corredeiras do rio Madeira fechavam a saída da borracha boliviana.
- **O gancho** (38 palavras): "In 1903, Brazil paid Bolivia two million pounds for a piece of the Amazon bigger than Uruguay. The money wasn't the whole price.
  Brazil also promised a railroad through the jungle, and thousands of men died building it."
- **Os fatos** (lidos em 18/11/2026):
  1. O Tratado de Petrópolis, assinado em 17/11/1903, deu ao Brasil o Acre (191.000 km²) em troca de mais de 3.000 km², de "two million British pounds, paid in
     two installments", e da promessa de uma ferrovia "which would bypass the rapids on the Madeira"; Percival Farquhar, americano, construiu de agosto de 1907
     a 15/07/1912, por US$ 33 milhões; "At least 3,600 men died building the 367 km of track". en.wikipedia, https://en.wikipedia.org/wiki/Treaty_of_Petr%C3%B3polis.
  2. Em 11/06/1901 a Bolívia arrendou o Acre ao "Bolivian Syndicate of New York City", sediado em Jersey City, com acionistas como "the king of Belgium and
     relatives of William McKinley"; o sindicato foi indenizado com £110 mil. en.wikipedia, https://en.wikipedia.org/wiki/Acre_War.
  3. Em 1851 o governo dos EUA mandou o tenente Lardner Gibbon estudar a ferrovia ao longo das corredeiras do Madeira; nos anos 1870 o americano George Earl Church
     tentou duas vezes; em 1972 a BR-364 tornou a ferrovia inútil, e ela foi abandonada. A página dá 30/04/1912 para a inauguração do último trecho (diverge do
     15/07/1912 da página do tratado). en.wikipedia, https://en.wikipedia.org/wiki/Madeira-Mamor%C3%A9_Railroad.
  4. "Until the beginning of the twentieth century, Brazil conquered territories, while Hispanic America was marked by a process of territorial disaggregation";
     a América hispânica virou 18 países. Pesquisa FAPESP, nº 318, ago/2022, https://revistapesquisa.fapesp.br/en/the-foundations-of-a-nation/.
  5. O Alasca: US$ 7,2 milhões, 586.412 sq mi, "$0.02 per acre", https://en.wikipedia.org/wiki/Alaska_Purchase; a paridade de antes de 1914, US$ 4,86 por libra,
     https://en.wikipedia.org/wiki/Gold_standard.
- **A medida nossa:** a medida 7 (o preço por acre, 10,7 vezes o Alasca; 48 vezes com a ferrovia; o Acre de 1903 8 % maior que o Uruguai) e a medida 3 no ato 1
  (de 64 % a 88 % do Brasil a oeste da linha de 1494).
- **Os atos:**
  1. O Brasil que não coube na linha: 1494, a maior parte do Brasil do lado espanhol (a nossa medida), Madri em 1750 e o "cada um fica com o que tem".
  2. A borracha e o rio fechado: seringueiros brasileiros em terra boliviana, as corredeiras do Madeira, o sindicato de Nova York em 1901 e a revolta do Acre.
  3. O preço: as £2 milhões, a ferrovia de Farquhar e os mortos, a borracha que despencou logo depois, o abandono em 1972, e o acre contra o Alasca.
- **A miniatura:** relevo amarelo da Amazônia ocidental; **o Acre de 1903 em vermelho**; **a Bolívia em ciano**; a ferrovia como linha branca grossa ao longo
  do Madeira, de Porto Velho a Guajará-Mirim, com uma seta branca da ferrovia ao Acre; caixa preta **"FOR SALE"**.
- **A concorrência:**
  - em inglês: **nada achado** no ângulo (duas buscas no youtube.com);
  - em português o tema anda bem em 2026: "Por que a Bolívia teve que vender o ACRE para o Brasil?" (Canal H1, 316.468, 03/02/2026); "Acre: O único estado que o
    Brasil comprou de outro país" (Canal Top10, 51.159, 09/08/2026); "Tratado de Petrópolis" (Professor Baglini, 19.847, 2020);
  - em espanhol: "¿Cómo Brasil se quedó con el Acre?" (Vestigios Eternos, 69.072, 24/12/2025, 41 min);
  - um "trailer" de 2025 diz "2026 Netflix Release" sobre a Madeira-Mamoré (3.783 views, canal de 134 inscritos): parece falso, mas a Sala confere se há filme.
- **Os riscos:**
  - "bought" simplifica: foi troca, dinheiro e ferrovia, depois de uma revolta armada; a voz conta os três;
  - o número de mortos é discutido (o "um morto por dormente" é lenda): a tela usa o "at least 3,600";
  - a conta por acre é nominal, com 36 anos de diferença (os preços nos EUA caíram de 1867 a 1903, então a diferença real seria maior: a confirmar);
  - o Acre de 1903 não é o estado de hoje (o tratado com o Peru, de 1909, mexeu no desenho): a área do estado está a ler no IBGE;
  - em português o tema está aquecido; em inglês, não (o enxame pode traduzir);
  - é história; a geografia mora nas corredeiras e na borracha, e o roteiro volta ao mapa em cada ato.
- **A nota: 5,5.** É a resposta mais nossa à pergunta do Lucas ("por que o Brasil ficou tão grande") sem entrar na onda do "So Big". Fica abaixo das duas
  primeiras porque o lugar não se reconhece de fora e porque é mais história que geografia.

## 4. Trindade, a ilha que dá ao Brasil um mar maior que a Califórnia · 5,5

- **Título:** "The Tiny Island That Gives Brazil a Sea Bigger Than California" (62).
  - Variantes: "Why Brazil Guards a 4-Square-Mile Island 700 Miles Out to Sea" (61); "The Island Britain Took From Brazil in 1895" (43).
- **O chamariz:** 4 milhas quadradas de vulcão dão ao Brasil um mar maior que a Califórnia, e por isso Halley a reclamou, um americano se coroou príncipe dela e a
  Inglaterra a tomou.
- **O paradoxo:** uma ilha sem moradores permanentes, a 700 milhas da costa, valeu uma disputa entre impérios e hoje vale 181 mil milhas quadradas de mar.
- **O gancho** (37 palavras): "Seven hundred miles off Brazil's coast sits a volcanic island of about four square miles, with no permanent residents. Britain took
  it in 1895, and an American once crowned himself its prince. Today Brazil's navy keeps a base there." (O "year-round" ficou fora: a presença
  contínua está por confirmar na Marinha.)
- **Os fatos** (lidos em 18/11/2026; en.wikipedia, https://en.wikipedia.org/wiki/Trindade_and_Martim_Vaz, salvo o 5):
  1. O arquipélago fica a "about 1,100 kilometres (680 miles)" do Espírito Santo, tem "10.4 square kilometres (4.0 square miles)" e "a navy-supported research
     station of up to eight people"; Trindade tem 10,1 km²; descoberto em 1502.
  2. Edmund Halley "took possession of the island on behalf of the British Monarchy in 1700"; cabras e porcos soltos por ele ainda estavam lá em 1939.
  3. James Harden-Hickey se declarou "James I, Prince of Trinidad", fez selos e bandeira e abriu "a consular office at 217 West 36th Street in New York City".
  4. "In July 1895, the British again tried to take possession", para uma estação de cabo; o Brasil a recuperou pela diplomacia, com a ajuda de Portugal; em 1910
     o Terra Nova, de Scott, parou na ilha a caminho da Antártida.
  5. "The exclusive economic zone shall not extend beyond 200 nautical miles from the baselines" (Convenção da ONU sobre o Direito do Mar, art. 57),
     https://www.un.org/depts/los/convention_agreements/texts/unclos/part5.htm.
  6. A página da Marinha sobre a ilha e a Amazônia Azul: **NÃO CONFERIDO (site recusou: verificação da Cloudflare já no robots.txt)**.
- **A medida nossa:** a medida 5: 181.010 sq mi (1,11 vez a Califórnia), ~45 mil vezes a terra; a refazer com a linha de base oficial (o Marine Regions, CC BY
  4.0), porque o círculo puro ignora as linhas de base.
- **Os atos:**
  1. A ilha e o círculo: 4 milhas quadradas de vulcão, a estação da Marinha, e o mar de 200 milhas maior que a Califórnia.
  2. Por que todos a quiseram: Halley e as cabras, o "príncipe" com consulado em Nova York, a Inglaterra de 1895 e o cabo, a volta com Portugal em 1896.
  3. O mar de hoje: a regra das 200 milhas, a plataforma que o Brasil pediu à ONU (a ler), e os marinheiros que se revezam lá.
- **A miniatura:** mar azul-escuro com o litoral do Espírito Santo à esquerda em relevo amarelo; **o círculo de 200 milhas em vermelho**; **a silhueta da
  Califórnia em ciano, na mesma escala**, ao lado; a ilha como ponto branco com seta grossa; caixa preta **"4 SQ MILES"**.
- **A concorrência:** em inglês, **nada no ângulo achado** (o que aparece é a foto de OVNI de 1958 e as ilhas remotas em geral); em português, "Documento Band:
  Ilha da Trindade" (1.044.624, 18/03/2020, 19 min), "Esse é o lugar mais isolado do Brasil" (2.112, 2023) e "Este é o local brasileiro mais afastado do
  continente" (1.049, 2023).
- **Os riscos:** o lugar não se reconhece (o título precisa de "Brazil" e da Califórnia); a busca de "Trindade island" traz o OVNI de 1958 (colisão de termo:
  fora do título); o "sea" é zona de direitos, não soberania: a voz diz "rights over"; as fotos da Marinha precisam da licença lida no navegador; 14 minutos
  pedem os três atos cheios.
- **A nota: 5,5.** A medida é a melhor da lista para miniatura, e a onda está limpa; o lugar desconhecido segura a nota.

## 5. O país da maior água doce que secou · 5,0

- **Título:** "Why the Country With the Most Fresh Water Keeps Running Dry" (59).
  - Variantes: "Why Brazil's Biggest City Ran Short of Water in 2014" (52); "Brazil Has the Most Fresh Water on Earth. Its Biggest City Ran Dry." (67, passa do teto).
- **O chamariz:** "o país com mais água do mundo ficou sem água" se entende em 2 segundos.
- **O paradoxo:** a água do Brasil está onde os brasileiros não estão.
- **O gancho** (36 palavras): "No country on Earth has more fresh water than Brazil. Yet in 2014, the reservoirs that supply its biggest city ran so low that
  engineers had to pump water from below the floodgates. The water hadn't disappeared." (É o "volume morto" da ANA, abaixo das comportas.)
- **Os fatos:**
  1. Recursos hídricos renováveis totais: Brasil 8.647 km³/ano; a Rússia, segunda, 4.525 (a tabela da FAO AQUASTAT na en.wikipedia, lida em 18/11/2026),
     https://en.wikipedia.org/wiki/List_of_countries_by_total_renewable_water_resources.
  2. O Cantareira, que abastece São Paulo, a 6 % em fevereiro de 2015 e a 12 % em outubro; o governo federal decretou "calamidade pública" mais de 6.200 vezes
     entre 2012 e 2015. en.wikipedia, https://en.wikipedia.org/wiki/2014%E2%80%932017_Brazilian_drought (lida em 18/11/2026).
  3. A ANA: "A partir de maio de 2014 foi necessária a utilização da primeira etapa e de parte da segunda etapa do volume morto desse Sistema"; o volume morto é
     "cerca de 33% da capacidade", e a primeira etapa usou 182,5 bilhões de litros; as regiões Amazônica, Tocantins-Araguaia e Paraguai têm demanda "bem
     inferior". ANA, Encarte Especial – Crise Hídrica (2014), pp. 6 e 16, https://www.snirh.gov.br/portal/centrais-de-conteudos/conjuntura-dos-recursos-hidricos/crisehidrica2014.pdf (lido em 18/11/2026).
  4. A parte da água do Brasil na Amazônia: "cerca de 80 %" (o Conjuntura 2018, citado por um jornal) ou "mais de 70 %" (um técnico da ANA, citado pelo Canal
     Rural): **a confirmar** (só no resumo da busca; os relatórios da ANA têm 74 a 204 MB).
  5. O rio Negro em Manaus a 12,66 m em 04/10/2024, o menor desde o começo das medições: **a confirmar** (só no resumo da busca; a página da AP deu 404).
- **A medida nossa:** a medida 2 (a Amazônia com 49,5 % da terra e 10,2 % das pessoas; a Mata Atlântica com 13 % e 58 %); a feita direito seria a Divisão
  Hidrográfica Nacional da ANA cruzada com o Censo 2022.
- **Os atos:** (1) o país de mais água e a torneira seca de 2014; (2) onde a água está e onde as pessoas estão, no mapa; (3) a mesma conta ao contrário, com a
  Amazônia de 2024 sem água no rio.
- **A miniatura:** relevo do Brasil; **a bacia amazônica em ciano** (a água); **São Paulo em vermelho**; seta branca grossa da água à cidade, quebrada no meio;
  caixa preta **"RAN DRY"**.
- **A concorrência:** reportagens de 2014–15 ("Brazil's largest city faces water shortage") e a família dos "rios voadores" (vários, ligados ao desmatamento);
  nenhum título com o paradoxo achado.
- **Os riscos:** a seca da Amazônia e o desmatamento são temas do momento todo ano (de agosto a novembro); os fatos fortes são de 2014–15; dois fatos estão a
  confirmar; São Paulo já foi pauta (aqui o ângulo é a água, não o rio).
- **A nota: 5,0.**

## 6. A linha de 1494 e as duas metades · 4,5, DERRUBADA pela onda (a semente 1 clássica)

- **Título:** "Most of Brazil Was Supposed to Be Spanish" (41).
  - Variantes: "Spain's Half Became 9 Countries. Portugal's Half Is Brazil." (59); "Why Spain's Half of South America Split Into 9 Countries" (56).
  - O "Three-Quarters" só vale numa leitura da linha; "Most" vale em todas.
- **O chamariz:** a linha que deu a Portugal uma fatia, e o Brasil que hoje tem a maior parte do lado espanhol.
- **O paradoxo:** a metade espanhola da América do Sul (49,6 %) virou nove países; a portuguesa (47,9 %) ficou um, e cresceu por cima da linha.
- **O gancho** (39 palavras): "In 1494, a line on a map gave Portugal a thin slice of South America. Today most of Brazil lies on what was supposed to be Spain's
  side. And Spain's half broke into nine countries, while Brazil stayed one."
- **Os fatos** (lidos em 18/11/2026):
  1. A linha "370 leagues (c. 2,100 km or 1,300 mi) west of the Cape Verde islands", que deu a Portugal "the eastern quarter of Brazil"; as leituras vão de
     42°25′ O (Ferrer, na esfera dele) a 49°45′ O (Diogo Ribeiro, 1529). https://en.wikipedia.org/wiki/Treaty_of_Tordesillas.
  2. O Tratado de Madri (1750) se baseou no "Uti possidetis, ita possideatis" ("each party must stay with what it now holds").
     https://en.wikipedia.org/wiki/Treaty_of_Madrid_(13_January_1750).
  3. A corte portuguesa no Rio de 1808 a 1821: "For thirteen years, Rio de Janeiro functioned as the capital of the United Kingdom of Portugal, Brazil and the
     Algarves", uma "metropolitan reversal". https://en.wikipedia.org/wiki/Transfer_of_the_Portuguese_court_to_Brazil.
  4. A América hispânica "eventually resulted in the formation of 18 countries". Pesquisa FAPESP, ago/2022 (fato 4 da pauta 3).
  5. A área oficial do Brasil: 8.510.417,771 km² (o atributo do arquivo BR_Pais_2022 do IBGE).
- **A medida nossa:** as medidas 3 e 4.
- **Os atos:** (1) a linha e a fatia, com a nossa medida; (2) os bandeirantes, Madri e o "fica com o que tem"; (3) a corte no Rio e o Brasil que não se partiu.
- **A miniatura:** a América do Sul em relevo amarelo; **o Brasil em vermelho**; **os nove países espanhóis em ciano**, com divisas brancas; a linha de 1494
  como traço branco grosso; caixa preta **"1 VS 9"**.
- **A concorrência:** a onda inteira do começo deste arquivo.
- **Por que caiu:** o molde do contraste estourou há 7 semanas num canal pequeno (252 mil) que faz série de "How Did X Get This Big?"; o enxame está no "So Big"
  há 4 dias; a arbitragem viralizou em espanhol há 15 dias. **Reserva para fevereiro ou março de 2027**, se a onda passar; as medidas ficam guardadas e a da
  linha vai ao ato 1 do Acre.

---

## Os 20 candidatos

| # | Candidato | Destino | Por quê |
|---|---|---|---|
| 1 | As duas florestas que não se tocam (semente 2) | **desenvolvido, 6,5** | paradoxo novo em inglês, medida nossa do IBGE |
| 2 | O plano americano de invadir o Brasil (Natal) | **desenvolvido, 6,0** | o mapa explica o poder; inglês quase vazio |
| 3 | O Acre comprado com uma ferrovia (semente 1) | **desenvolvido, 5,5** | o ângulo nosso do "tão grande" |
| 4 | Trindade e o mar maior que a Califórnia | **desenvolvido, 5,5** | a melhor medida para miniatura; lugar desconhecido |
| 5 | O país da maior água doce que secou | **desenvolvido, 5,0** | bom paradoxo; fatos e medida incompletos; tema do momento todo ano |
| 6 | A linha de 1494 e as duas metades (semente 1) | **desenvolvido, 4,5, derrubado** | a onda do "So Big" e do contraste (252 mil em 30/09) |
| 7 | As fronteiras ganhas no tribunal (Rio Branco; Cleveland e Misiones; o Amapá com a Suíça) | caiu | viral em espanhol: 553 mil em 03/11/2026 |
| 8 | O semiárido ao lado da Amazônia (o sertão) | entrou na pauta 1 | é o ato 2 das florestas |
| 9 | O furacão que não devia existir (Catarina, 2004) | caiu | PBS Terra, 1,69 mi em 06/10/2026 |
| 10 | Os Lençóis Maranhenses (o "deserto" de lagoas) | caiu | PBS Terra, 5,99 mi (28/10/2025) e muitos curtos |
| 11 | Sete Quedas, afogada por Itaipu (a divisa resolvida debaixo d'água) | caiu | viral em espanhol: 437 mil em 17/10/2026 |
| 12 | Os rios voadores (a chuva da Amazônia em São Paulo) | caiu | antigo e preso ao desmatamento do momento |
| 13 | O Pantanal, o maior alagado tropical | caiu | o fogo vira notícia todo ano; a geografia é rasa para 14 min |
| 14 | O Cerrado que virou celeiro (a soja) | caiu | lotado (John Deere, FRANCE 24) e preso ao desmatamento |
| 15 | O Rio de Janeiro, capital de um império europeu (1808–1821) | reserva | história conhecida; cabe na pauta 6 |
| 16 | A Floresta da Tijuca, replantada para salvar a água do Rio (1861) | reserva | concorrência mínima (203 views em 2026), mas o "por quê" é pequeno |
| 17 | Brasília no meio do nada | caiu | saturado (KhAnubis 272 mil; Sideprojects 177 mil; muitos) |
| 18 | O Brasil de costas para o interior ("caranguejos na praia") | caiu | o Geoff, 540 mil em 28/04/2026 |
| 19 | O Uruguai, o país-tampão | caiu | curto de 34,6 mil em 29/10/2026 e Outer Side (88 mil, 2025) |
| 20 | Marajó, a ilha do tamanho da Suíça | caiu | o "por quê" é fraco; os búfalos da polícia já viralizaram |

Ficaram fora, como o pedido mandou: a Praia do Cassino, São Paulo e a Serra do Mar e Manaus sem estrada. A pauta 5 encosta em São Paulo pela água, não pelo rio
nem pela serra.

## O top 3, e o que a Sala confere na onda

**1. As duas florestas que não se tocam · 6,5** · "Why Brazil Has Two Rainforests That Never Touch".
- O chamariz: a segunda floresta tropical que ninguém conhece, e um vão de 353 milhas que o mapa oficial mostra.
- A concorrência: nenhum vídeo em inglês no ângulo; os vizinhos são os dois do Geoff sobre o Brasil (673 mil em 14/11/2025; 540 mil em 28/04/2026) e a PBS Terra
  nas florestas latino-americanas.
- **Termos a conferir (desde 23/09/2026):** "two rainforests", "Brazil two rainforests", "Atlantic Forest", "Mata Atlantica", "Atlantic Forest Amazon", "dry
  diagonal", "Brazil biomes", "Caatinga", "Cerrado", "Brazil desert", "why Brazil is so biodiverse"; e o título exato, sem data. Vale abrir o vídeo do Geoff de
  14/11/2025 e ver se ele mostra o vão.

**2. O plano americano de invadir o Brasil · 6,0** · "Why the U.S. Planned to Invade Brazil in 1941".
- O chamariz: os EUA quase invadiram um país amigo, por causa de um cotovelo no mapa (Dakar a menos da metade da distância de Norfolk).
- A concorrência: inglês quase vazio (History Matters, 1,95 mi em 2021, conta a entrada do Brasil na guerra); em português é conhecido (317 mil em 2024) e a
  Revista Sociedade Militar publicou em 02/11/2026.
- **Termos a conferir:** "Plan Rubber", "invade Brazil", "US invasion of Brazil", "America planned to invade Brazil", "Brazil World War 2", "Natal World War
  2", "Parnamirim Field", "Trampoline to Victory", "Atlantic Narrows"; em português "Plano Rubber", "Plano Borracha", "EUA invadir o Brasil", "Trampolim da
  Vitória"; em espanhol "Plan Rubber Brasil", "Estados Unidos invadir Brasil".

**3. O Acre comprado com uma ferrovia · 5,5** · "The Railroad Brazil Built to Pay for a Piece of the Amazon".
- O chamariz: um território maior que o Uruguai, pago com £2 milhões e uma ferrovia na selva, a 10 vezes o preço por acre do Alasca.
- A concorrência: nada em inglês; em português, Canal H1 (316 mil, 03/02/2026) e Canal Top10 (51 mil, 09/08/2026); em espanhol, 69 mil (24/12/2025).
- **Termos a conferir:** "Acre Brazil Bolivia", "Brazil bought Acre", "Treaty of Petropolis", "Madeira-Mamore", "Devil's Railroad", "Bolivian Syndicate",
  "Brazil bought land"; em português "Brasil comprou o Acre", "Ferrovia do Diabo"; em espanhol "Brasil compró el Acre", "Bolivia vendió el Acre". E se existe
  mesmo um filme da Netflix sobre a Madeira-Mamoré em 2026.

Trindade (5,5) empata com o Acre; o Acre fica à frente por responder à pergunta do Lucas. Termos dela, se a Sala quiser: "Trindade island", "Trindade and Martim
Vaz", "South Trinidad", "Principality of Trinidad", "Brazil island Atlantic", "Blue Amazon"; em português "Ilha da Trindade".

**Para fechar a semente 1** (a pauta 6), os termos que confirmam a onda: "Why Is Brazil So Big", "How Did Brazil Get So Big", "Brazil supposed to be a slice",
"Spanish America 18 countries", "why didn't Brazil split", "Treaty of Tordesillas Brazil", e a página `/videos` da BecauseGeography.

## Como foi feito, e o que recusou

- **As buscas:** cerca de 54 buscas no buscador da web (a maioria com o filtro `youtube.com`, para achar os títulos); nenhuma página `/results`. As views e as
  datas vêm da página `/watch`, um pedido a cada 1,5 s, pelo `out/_pautas/video-8/_trabalho/yt_meta.py` (71 vídeos; as saídas em `_trabalho/watch-*.jsonl`), e a
  descrição longa pelo `_trabalho/yt_desc.py`. As listas de canal (PBS Terra, Geoff, BecauseGeography) vêm da página `/videos` (`_trabalho/yt_canal.py`), que o
  robots.txt do YouTube permite.
- **As leituras:** 25 páginas lidas na origem pelo `_trabalho/ler.py` (um pedido por vez, com o User-Agent do canal), com o texto guardado em
  `_trabalho/leituras/`. Os robots.txt lidos estão em `_trabalho/robots/`. O WebFetch foi usado uma vez (a página de Tordesilhas) e tudo o que veio dele foi
  conferido no texto cru; nenhum fato leva [W]. O que veio só do resumo da busca está marcado "a confirmar".
- **Recusaram, e parei:**
  - o PMC (`pmc.ncbi.nlm.nih.gov`) respondeu com reCAPTCHA no terceiro artigo (PMC2887855): NÃO CONFERIDO, e não voltei ao PMC;
  - o USNI Proceedings ("Invade Brazil", 1999): 403;
  - `www.marinha.mil.br`: verificação da Cloudflare já no robots.txt; não pedi nada;
  - `servicodados.ibge.gov.br` e `www.planalto.gov.br` não responderam ao robots.txt; não usei;
  - `naciscdn.org` (o Natural Earth) deu AccessDenied no robots.txt; usei a cópia do motor (`C:/projetos/regie-v1/acervo/geojson/`, sha256 no manifesto);
  - a matéria da AP sobre o rio Negro deu 404 em dois endereços; ficou a confirmar.
  - A Pesquisa FAPESP pede `Crawl-delay: 150`: um pedido só.
- **Os dados brutos** (fora do git, em `midia/_pautas/video-8-brasil/`, 110 MB): IBGE Biomas 1:250.000 (`Biomas_250mil.zip`, sha256 `1d8a4d86…ca0c5`), IBGE
  Localidades 2022 (`1c0bec39…2ca9`), IBGE BR_Pais_2022 (`2e085f71…7a26`), ANA crise hídrica 2014 (`30c77ebe…dd9b`). O Censo 2022 por município (324 KB) está em
  `_trabalho/dados/`.
- **Sem vidIQ, sem navegador, sem `SendMessage`, sem commit, sem crédito pago.** O Python rodou sempre de arquivo.
