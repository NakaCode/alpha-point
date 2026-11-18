# Vídeo 8 (`australia-animais`): a base de fatos · 18/11/2026 (o resumo, atualizado para a pauta v2)

**Na v2 (18/11/2026, depois do cético da v1):** o cético (`pautas/australia-animais/_trabalho/cetico-v1.md`, nota 5,5, K1–K10) trouxe uma fonte nova (a
*Live Science*, com Michael Lee e Kevin Arbuckle), refez as contas do ABS e derrubou a comparação com os EUA. O que mudou nesta página está marcado
**(v2)**; o resto é o resumo da v1, que continua valendo.

**A decisão.** O Lucas, no chat da Sala, em 18/11/2026, ~09:2x, à pergunta do título do Grand Canyon, não escolheu e escreveu "Por que a austrália tem
tantos animais perigosos", com um resumo colado de uma busca do Google (Gondwana, os elapídeos, o endemismo, "Perigo real vs. reputação"); e logo depois:
"Quero fazer isso desconsiderando a concorrência." O Grand Canyon e as duas florestas do Brasil ficam de reserva (`roteiros/australia-animais/decisoes-lucas.md`;
`pautas/2026-11-18-video-8-australia.md`).

**O método.**
- Dois leitores Sonnet, em paralelo, sem crédito, um pedido por vez, com o User-Agent do canal e o robots.txt lido antes do primeiro pedido a cada site:
  - A, o porquê (a deriva, as cobras, o mar e o norte, as aranhas, o endemismo): `pautas/australia-animais/_trabalho/fatos-a.md` (A1–A9, B1–B7, C1–C5,
    D1–D4, E1–E3). Não usou o WebFetch; os resumos vieram da API da Europe PMC, e os textos abertos (CC BY) foram lidos inteiros;
  - B, o perigo em números (o ABS, os estudos de mortes, os soros, a medida nossa, os voláteis): `fatos-b.md` (os itens 1–17 e as seções §1–§6), com a
    tabela `medida-b.csv`. Marcou [S] o que só veio de busca ou de segunda mão, e [R] o que leu só no resumo do artigo.
- **As ressalvas de método, ditas pelos próprios leitores:** o A usou `python -c` umas sete vezes para imprimir arquivo local (sem rede, sem gravar); um
  script dele pediu uma página do Australian Museum depois do 403 do robots.txt (consertado); o B fez um pedido ao `eutils.ncbi.nlm.nih.gov` antes de ler o
  robots.txt (`Disallow: /`) e parou ali. Nada disso mudou um fato.
- A Sala leu o NCIS no navegador do app (S1, em "As leituras da Sala" de `pautas/2026-11-18-video-8-australia.md`): o site abre sem verificação, mas a
  ficha dos animais (FS24-09) não apareceu na busca do site nem no Google; a `node/296` que o leitor apontou é outra ficha (drogas).
- A pauta v1 releu nas cópias locais (P1 a P9, no §1 dela): o parque das funnel-web, o estudo das fazendas, o ASP-20, o resumo dos EUA, o PNAS, a ficha
  da taipan, o *MJA* da funnel-web, a AP dos tubarões e o TGA.
- **(v2) O cético da v1** (~13h15 a ~13h50) leu a pauta, a base e as cópias; foi à web só no Europe PMC (3 consultas sobre as mortes por abelha e vespa,
  12 s entre elas, com o robots.txt relido) e na *Live Science* (o robots.txt não veta o caminho); fez duas buscas para achar endereços, marcadas [S].
  Refez o ABS do xlsx, com o rótulo de cada linha (`cetico_contas.py`). Nada recusou, nada se contornou. Os baixados dele estão em
  `midia/australia-animais/fontes/c/`.
- **(v2) A pauta v2** releu, sem pedido à web, a *Live Science* (P10), o Jackson 2016 (P11: "the most toxic snakes of all") e a página do parque (P1: os
  confinamentos de 2020 e o "significantly more potent").
- Os baixados ficam em `midia/australia-animais/fontes/a|b|c/`, fora do git. Nenhum site que recusou foi contornado, e a cópia arquivada (web.archive.org)
  não se usou.
- **Esta página é o resumo da pauta.** Os trechos, as URLs e as datas estão nos arquivos de `_trabalho/`, e as tabelas com o grau de cada fato, no §4 da
  pauta v2 (`pautas/2026-11-18-video-8-australia-pauta.md`). Os códigos: `fa` é o `fatos-a.md`; `fb`, o `fatos-b.md`; K1–K10, o cético; P1–P11, as
  releituras da pauta.

## O que se sustenta

- **O registro (o paradoxo; ABS, *Causes of Death, Australia, 2025*, lançado em 27/10/2026, CC BY 4.0).** Por causa básica e data de registro, com 2025
  preliminar:
  - de 2016 a 2025, os animais e plantas venenosos (CID-10 X20–X29) mataram **85 pessoas**, 8,5 por ano; **6 em 2025**;
  - **as aranhas (X21): zero em cada um dos dez anos**; os escorpiões, zero;
  - as cobras (X20, com os lagartos): **35** (3,5 por ano; 9 só em 2018); **as abelhas, vespas e marimbondos (X23): 42**, mais que as cobras;
  - os animais **sem** veneno (W53–W59): **154** (o cão 42, outros mamíferos 63, animal marinho 32, crocodilo 13); o cavaleiro e a carroça (V80): 64;
  - para comparar: queda envolvendo cama (W06), **118 só em 2025**; calor natural excessivo (X30), **202** em dez anos; afogamento em água natural (W69),
    **1.010**; afogamento em geral, 2.077; acidentes de veículo a motor, **1.276 só em 2025** (preliminar);
  - os cubos por estado sorteiam os números pequenos: **não há medida por estado** a partir do ABS.
  - **(v2)** o cético refez a série do xlsx, com o rótulo de cada linha: X21 "Contact with venomous spiders" existe, com zero em todos os dez anos (não é
    ausência); a cama (W06) tem média de 86 por ano, e o 118 de 2025 é o pico da série, preliminar.
- **A medida nossa** (fb 15; `b_medida.py`; refeita em `p_contas.py` e no cético): 85 mortes ÷ 257,9 milhões de pessoas-ano (a ERP do ABS) = **1 em 3,03
  milhões por ano** (0,033 por 100.000); numa vida de 80 anos, como ilustração, 1 em ~37.900. Só as cobras: 1 em 7,4 milhões por ano.
- **(v2) A âncora da estrada** (K5; `cetico_contas.py`, `p_contas.py`): a estrada matou 1.276 em 2025 (preliminar), **106,3 por mês** em média; os 85 mortos
  por animal venenoso em dez anos são **~24 dias** dela. É a âncora do gancho da v2, no lugar da cama.
- **(v2) As cobras venenosas, contadas** (*Live Science*, Spivack, 26/11/2023, P10): "Of Australia's 220 snake species, 145 are venomous, Lee told Live
  Science via email" (Michael Lee, South Australian Museum e Flinders, o Lee de Lee et al. 2016); a frase seguinte é da jornalista: "65% … though only about
  15% of the world's snakes are venomous". Bate com a base (~100 elapídeas terrestres e ~30 marinhas, mais as colubrídeas de presa traseira). **EM PARTE**:
  imprensa, com o dono, **a conferir** no Reptile Database ou no AFD.
- **(v2) A fama, segundo um especialista** (P10): Kevin Arbuckle (Swansea): a imagem da Austrália como "the home of highly venomous animals" é, "for the most
  part", "overstated"; a diversidade venenosa dela "is not unusual at all for a largely tropical area"; as caixas-medusas vivem em "tropical and subtropical
  waters, not just those Down Under"; os cefalópodes venenosos existem há até 300 milhões de anos; a jornalista: "Aside from snakes, however, Arbuckle argued
  Australia's venomous fauna are actually well within typical range". E uma hipótese dele: "He wondered if part of this belief stems from the continent's
  "scientific capital" and "excellent infrastructure" for public health and medical care."
- **As internações** (Welton, Williams e Liew, *Intern Med J* 2017, pela tabela do comunicado da University of Melbourne; o resumo [R] bate nos
  percentuais): 2001–2013, **aranhas 11.994 internações e nenhuma morte**; cobras 6.123 e 27; abelhas e vespas 12.351 e 27; o total, 39.424 e 64. A
  anafilaxia lidera as mortes, e só 44 % dos que morreram dela chegaram ao médico antes.
- **Quem mata entre as cobras** (Johnston et al., *MJA* 2017, ASP-20, [R]): 2005–2015, 23 mortes, **17 da cobra-marrom**, 4 da tigre e 2 de cobra
  desconhecida; 10 depois de parada cardíaca fora do hospital; a mediana até o primeiro soro, 4,3 horas, sem mudança. As contagens por cobra: 4 por ano
  (1992–94), 2,2 (2000–2016), mediana de 2 (2005–2015), 3,5 (ABS, 2016–2025): **"two or three a year"**.
- **A taipan-do-interior.** "The most potent venom of any land snake on earth, but fortunately it is usually quite shy" (o governo da Austrália do Sul);
  "considered the most venomous snake in the world" (Paz 2025). **O posto é do LD50 em camundongo** (Broad, Sutherland e Coulter, 1979), e os testes em
  camundongo "do not reflect the actual circumstances of snakebite envenoming" (Ainsworth 2026). Caça roedores, pica uma vez, recua e volta quando o bicho
  morreu; vive no barro rachado das planícies do Cooper e do Diamantina. **12 envenenamentos bem documentados, 3 por cobra selvagem** (Weinstein 2017 [R]).
  **(v2, K3)** O complexo inteiro da protrombinase como toxina "is unique to the clade comprised of Oxyuranus and Pseudonaja [1, 5], the most toxic snakes
  of all [21]" (Jackson 2016, relido; a ref. 21 é Broad 1979): **a marrom está no mesmo topo do teste**, e é ela que mata. O que "partially underwrites" a
  toxicidade no camundongo é o fXa, comum a quase todas as elapídeas australianas (a v1 juntava as duas coisas). A crítica de Ainsworth (2026) aos testes em
  camundongo é de método e de ética, não prova de que a taipan é fraca em gente. A ficha da taipan é uma ficha escolar de 2009 do South Australian Arid Lands
  Natural Resources Management Board (K9). A dúzia de casos é a contagem de Weinstein **em 2017**.
- **A deriva** (Geoscience Australia; Hall 2013 [R]; Scher 2015 [R]; Byrne 2008 [R]):
  - o rifte com a Antártida começou há **85–80 milhões de anos**, "the last major geological event in the breakup of the supercontinent of Gondwana";
  - a Austrália começou a ir para o norte há **~45 milhões**; o mar fundo do portão da Tasmânia abriu há **33,5 ± 1,5 milhões**; ela ainda anda ~7 cm por
    ano;
  - a GA: "an isolated continent between about 55 and 10 million years ago";
  - no **Mioceno inicial** (23 a 16 milhões), começou a colisão com o Sudeste Asiático, que formou a Wallacea;
  - a secura começou há ~15 milhões; os desertos plenos do centro, há 1 a 4 milhões.
- **O que cruzou** (Skeels et al., *Science* 2023): entre os mamíferos terrestres, só roedores e morcegos foram trocados com sucesso entre a Ásia e a
  Austrália; as linhagens da Sahul evoluíram no seco. A Sahul recebeu os roedores murinos duas vezes (Rowe 2019). O ABS (2002): "Hooved animals, cats,
  canids (foxes and Dingos) […] are not found naturally here".
- **O endemismo** (ABS, 2002, arquivado, "approximate"): "About 90% of our reptiles and frog species are endemic, and about 80% of our mammals"; a tabela da
  mesma página dá 79,2 % dos mamíferos e 85,7 % dos répteis.
- **As elapídeas** (Lee et al. 2016; Jackson et al. 2016, CC BY): linhagens de base asiáticas; a janela da colonização dos continentes, **30 a 25 milhões de
  anos** (relógio molecular, estimativa); "the first clade of venomous snakes to reach the continent"; a Austrália "lacking other advanced snakes"; **sem
  víboras**, e as colubrídeas chegaram depois; as elapídeas ficaram com "the majority of terrestrial snake niches and even invading the oceans"; ~100
  espécies terrestres e ~30 marinhas; o núcleo, com menos de 10–12 milhões de anos.
- **O mar e o norte:**
  - a vespa-do-mar: ~70 mortes atribuídas em águas tropicais da Austrália (até 2005); pólipos nos riachos de maré; a temporada de 1º de outubro a 1º de
    junho; no Território do Norte (1991–2004), 1 morte em 225 picadas confirmadas (*MJA* 2005);
  - os primeiros soros do mar no mundo: o do peixe-pedra (1956) e o da vespa-do-mar (1970) (Winkel 2006 [R]);
  - o crocodilo-de-água-salgada vai do Sri Lanka ao norte da Austrália; protegido no Território do Norte em 1971, depois de 26 anos de caça comercial, e
    recuperado [R]; o ABS, 13 mortes em dez anos;
  - o polvo-de-anéis-azuis também vive na costa sul (de Fremantle a Stanley, na Tasmânia); a tetrodotoxina é feita por bactérias [R];
  - o cone: uma só morte registrada na Austrália, na ilha Hayman, em 1935 (Healy 2022, "as of that study"); no mundo, 36 em 139 casos (Kohn 2016 [R]);
  - o tubarão: "between two and three fatal shark attacks a year since 2000, according to the Australian Shark Incident Database" (AP, 18/09/2026); a média
    subiu por década (1,4; 2,1; 3,8), pelo resumo do Taronga.
- **As aranhas:**
  - a funnel-web: a família tem 150 a 200 milhões de anos, antes dos primatas; a toxina dói em camundongo e mata insetos, e os autores propõem que ela
    evoluiu contra predadores vertebrados ("bandicoots, birds, and lizards"), e que matar gente é "an unfortunate evolutionary coincidence"; cães e gatos
    são "insensitive" (Herzig et al., *PNAS* 2020); quem pica são sobretudo os machos que saem da toca para procurar fêmeas;
  - **pelo menos 13 mortes, todas antes do soro de 1981, sete delas de crianças; nenhuma morte confirmada depois** (a revisão do *MJA* 2005, até 2004; uma
    revisão de 2025 [R] repete); o soro reverteu o quadro em 97 % dos casos com a aranha identificada; os casos graves, só em NSW e no sul de Queensland;
  - o redback: "at least 14 deaths" antes do soro (1955 ou 1956); nenhuma confirmada depois (uma "presumed" em 2004, sem soro); o ensaio RAVE-II (2014): o
    soro "did not significantly improve pain or systemic effects".
- **Os soros** (Winkel, Mirtschin e Pearn 2006 [R]): o primeiro comercial, o da cobra-tigre, em **1930**; taipan 1955; marrom 1956; naja-da-morte 1958;
  polivalente 1962; peixe-pedra 1956; vespa-do-mar 1970; funnel-web 1980 (liberação) e 1981 (uso clínico).
- **As fazendas** (Peachey e Lower 2023 [R], NCIS, 2001–2020): média de 6,5 mortes por ano por animal em fazenda; "The majority of incidents (81%) involved
  horses ( n = 75) and cattle ( n = 31)".
- **Os EUA** (Forrester et al. 2018 [R], CDC WONDER, 2008–2015): 1.610 mortes por animal (W53–W59 + X20–X29); a maior fatia, "other mammals," largely
  composed of horses and cattle"; os himenópteros, 29,7 %. **(v2, K4) O resumo não fecha consigo mesmo:** os 4,8 por 10 milhões dos não venenosos (~1.197
  mortes) deixam ~413 venenosas, e os 29,7 % de himenópteros são ~478, mais que todas as venenosas. Só nos venenosos, a Austrália dá 3,30 por 10 milhões por
  ano e os EUA, 1,65 a 1,92: a Austrália mataria por veneno **1,7 a 2,1 vezes** mais por pessoa, o contrário do "quase igual" que a frase da v1 sugeria.
  **Fora da v2.**
- **(v2) As abelhas e vespas no passado** (o cético, Europe PMC, resumos [R]): Harvey et al. 1984 (*MJA*): 25 mortes por abelha em 1960–1981; McGain et al.
  2000 (*MJA*): 7 por vespa em 1979–1998; Mullins et al. 2016 (anafilaxia fatal, 1997–2013). Nenhum resumo diz a espécie da abelha: a abelha europeia (trazida
  de fora) é **pista**, não fato.
- **O hoje** (lido em 18/11/2026, volátil): o soro da cobra-preta "Unavailable" de 23/02 a 31/12/2026, por fabricação (TGA); o Australian Reptile Park, a
  única fonte do veneno de funnel-web para o soro, com cerca de metade das aranhas de sempre (13/01/2026), ~150 ordenhas por frasco, só machos adultos, a
  doação de aranhas pelo público (15 pontos entre Sydney e Newcastle), e "not a single person has died" desde o começo do programa, há mais de 40 anos (o
  parque, parte interessada).

## O que não se afirma

- **"The inland taipan is the deadliest snake"**: é a de veneno mais potente medido em camundongo; quem mata é a marrom.
- **"The inland taipan has never killed anyone"**: o "not a single recorded human fatality" do AVRU é NÃO CONFERIDO. O que vale: "only about a dozen
  well-documented cases".
- **O valor do LD50** (0,025 mg/kg, ou "enough to kill 100 men"): não lido.
- **"Isolated for 40 (ou 50) million years"**: o rifte começou há 85–80 milhões, o mar fundo abriu há ~33,5, e a GA dá "between about 55 and 10". O que vale:
  "for tens of millions of years".
- **"The fastest-moving continent"**: não está na GA.
- **"Elapids arrived 40 million years ago"**, **"their arrival set off an explosion of species"**, **"venom got stronger because of the isolation"**: sem
  fonte (a janela é 30–25 Ma, estimada; Lee 2016 não viu aceleração).
- **"Almost every snake in Australia is venomous"**: há pítons e cobras-cegas.
- **"The ocean current dried Australia out"**: inferência, não lida.
- **"80 % of Australia's animals are endemic"**: o número vale por grupo.
- **"Dogs and cats are immune"**: "insensitive", na fonte.
- **"No one has died from a spider since 1981"** (todas as aranhas), **"since 1956"**, **"the last spider death was in 2016"**: "no confirmed death", por
  espécie, com o ano de cada soro; o caso de 2016 nunca teve a causa confirmada, e o ABS tem zero em 2016.
- **"The redback antivenom saved lives"**: o RAVE-II não sustenta.
- **"The antivenom ended snake deaths"**: são duas a três por ano.
- **"Horses kill more Australians than snakes, spiders and sharks combined"**, **"kangaroos kill X a year"**: o NCIS é de segunda mão, e não há fonte
  nacional do canguru.
- **"Falling out of bed kills more than snakes"**: é "fall involving bed" (W06), e a comparação certa é 118 num ano contra 85 venenosos em dez; nunca a
  idade.
- **"Snakebite in India is 300 times worse"**: medidas diferentes; no máximo "hundreds of times".
- **"Australia is as safe as America"**: na v1, ~1,5 vez contando todos os animais; **(v2, K4)** o resumo dos EUA não fecha, e só nos venenosos a Austrália
  mataria 1,7 a 2,1 vezes mais por pessoa. Fora da v2.
- **"Shark deaths are falling"**: a média subiu. E a tabela do Taronga não vai à tela (sem uso comercial sem permissão).
- **"The blue-ringed octopus is a tropical killer"**, **"crocodiles are Australian animals"**, **"the box jellyfish is the most venomous animal on Earth"**:
  fora.
- **"About 42,000 hospitalisations"**: a tabela soma 39.424. **"12,000 spider bites"**: são internações.
- **As mortes por tubarão de 2026** e o resto do noticiário: fora.
- **(v2) Do cético:**
  - **"Australia has more venomous animals than anywhere"** como fato (K1): a base não mede, e Arbuckle diz que, fora as cobras, a fauna venenosa é comum
    para uma terra tropical. **"Two in three of Australia's snakes"** antes da contagem conferida;
  - **"Australia split from Gondwana 100 million years ago"** (Arbuckle) e **"the first snakes colonized Australia 60 million years ago"** (a jornalista): a
    pauta fica com a GA e com Lee 2016;
  - **"But mice aren't people"** como fecho da virada (K3): a crítica de Ainsworth é de método e de ética; a marrom, do mesmo topo do teste, mata. **"The
    brown snake is the second most venomous"**: o lugar na lista de 1979 não foi lido. **"The brown snake lives in backyards"** antes da leitura do habitat;
  - **"The snakes arrived after Australia hit Asia"**, **"they found an open field, so…"** (K6): a janela das elapídeas (30–25 Ma) vem antes da colisão, e
    Lee 2016 diz que a chegada não acelerou as espécies;
  - **qualquer comparação com os EUA** (K4); **a cama** como âncora (K5: tropo, e 118 é o ano de pico, preliminar);
  - **"Over 13 years … about 12,000"** (K9): o período não fecha; **"a dozen cases"** sem 2017; **as 4,3 horas** como a espera dos mortos (são todos os 835
    envenenados); **"no antivenom treats it"** (as abelhas) sem fonte; **qualquer número do Taronga**; **o endemismo** na voz;
  - **"the funnel-web's venom evolved against lizards"** (K8): nasceu para caçar insetos, e os machos o viraram defesa ("we propose");
  - **"the world's first antivenoms for sea creatures: … the stonefish"** (K10) e "and it works" do soro da vespa-do-mar;
  - **"Most bee deaths come from European honeybees"**: pista, não lida (K10).

## O que muda o ângulo

O resumo que o Lucas colou dá a pergunta e o paradoxo; a base dá as duas metades da resposta, com fonte, e uma virada que o enxame não tem:
- **o veneno é um assunto de mapa:** a Austrália se soltou da Antártida (a última quebra de Gondwana), subiu sozinha, e quando encostou na Ásia quase nenhum
  mamífero cruzou. As cobras venenosas que chegaram da Ásia acharam um continente sem víboras e sem as outras cobras modernas, e ficaram com quase todos os
  nichos, até o mar. O interior secou, e no barro rachado uma delas caça ratos;
- **o "mais venenosa" é uma medida em camundongo**, e a taipan-do-interior caça roedores; quem mata é a cobra-marrom, que divide com ela a toxina que faz o
  veneno tão extremo no camundongo;
- **a aranha mais temida é mais velha que os primatas**, e o veneno dela (pela hipótese dos autores) nasceu contra bandicoots, aves e lagartos; o soro de 1981
  acabou com as mortes confirmadas, e o soro vem de aranhas que a gente de Sydney pega e entrega;
- **o registro:** os venenosos mataram 85 em dez anos; os sem veneno, 154; o calor, 202; a água, mais de mil; a estrada, 1.276 só em 2025. A chance de morrer
  por bicho venenoso é de 1 em 3 milhões por ano.

**(v2) O que o cético mudou no ângulo:**
- **a premissa só vale para as cobras** (K1): ~145 de ~220 venenosas, contra ~15 % no mundo (com o dono, a conferir); no resto, um especialista diz que a fama
  é, na maior parte, exagerada. A pergunta do gancho passa a ser "why are so many of Australia's snakes venomous, and why do so few people die?", que
  responde também ao título do Lucas ("Why Does Australia Have So Many Dangerous Animals?", no teste pela correção dele de 18/11, ~12h);
- **a resposta das poucas mortes é o endereço** (K3): a taipan, do topo do teste, vive no Channel Country, onde quase não há gente (a medir); a marrom, do mesmo
  topo e com a mesma toxina exclusiva, vive perto de gente (a ler) e faz a maioria das mortes; a funnel-web perto de Sydney parou de matar com o soro;
- **a ordem do mapa segue as fontes** (K6): o rifte, o norte, o mar fundo, as cobras (antes da colisão), a colisão, a secura;
- **o fecho fecha o bicho** (K8): o macho adulto que sai da toca é o que pica, o que tem o veneno mais forte e o que vira soro.

## Lido pela Sala no navegador do app (18/11/2026)

- **A concorrência** (~09:2x, no YouTube, sem crédito): 13 vídeos no mês com o título quase igual ao assunto, todos minúsculos ("Why Does Australia Have So
  Many Deadly Animals?", 40 views; "Why Is Australia Full of the Most Dangerous Animals on Earth?", 314; "Why Does Australia Have So Many Venomous Animals?",
  119); os grandes antigos (Veritasium, "Why Do Venomous Animals Live In Warm Climates?", 6,5 mi, há 13 anos; Casually Explained, 5,8 mi, há 6 anos; Moth
  Light Media, 667 mil, há 2 anos). Pela decisão do Lucas, não derruba.
- **O NCIS** (~10h, S1): o `ncis.org.au` recusou o leitor B (403), mas abre no navegador do app sem verificação de robô. A ficha "Animal-related deaths in
  Australia" (FS24-09) não apareceu. **Pendente.**
- **(v2) As buscas de títulos** (~11h e ~11:4x, no YouTube, sem crédito): os vizinhos dos títulos da v1 e do cético (Veil Works, BeyondTheBush, Venom Atlas,
  Deadly Down Under, os dois da taipan, um curto das aranhas, TheWildExplainer, Tyson Cung) e o maior recente do assunto, da Wilder Australia (116 mil em 2
  semanas, outro ângulo). **Pela correção do Lucas (18/11, ~12h), é informação, sem veto**: "Eu falei pra desconsiderar concorrentes? Única coisa que os
  céticos devem decidir é qual dos títulos é mais clicável e me sugerir outros, mas sem desconsiderar os meus." A lista está no §9 da pauta v2.

## O que falta (a Sala no navegador do app, ou fica fora)

- **(v2) Antes do roteiro, primeiro:** a contagem das cobras (o Reptile Database ou o AFD); o habitat da marrom por fonte oficial (o Australian Museum ou um
  museu estadual); o lugar da marrom na lista de 1979 (o AVRU); a medida do Censo (abaixo); a espécie das mortes por abelha (a abelha europeia, pista). E as
  `/watch` dos vizinhos, só para informar o roteiro; a procura de "australia dangerous animals", se houver crédito.
- **A ler:** o AVRU (o "nenhuma morte" da taipan e a lista das 25 cobras de menor LD50); o Australian Museum (a taipan, a funnel-web); o NCIS (a ficha FS24-09:
  o cavalo e o canguru); o AIHW, *Injury in Australia* (as internações por mordida e picada, no lugar da tabela do comunicado); Forrester et al. 2018 (a
  tabela dos EUA, que decide a medida contra os EUA); o SoE 2021 (o endemismo de hoje); o AFD (as víboras e as colubrídeas); o ano do soro do redback
  (Museums Victoria; *Australian Prescriber* 2012). **(v2)** Forrester e o CDC WONDER só se o Lucas quiser os EUA, e só nos venenosos; o SoE 2021 já não faz
  falta (o endemismo saiu da voz).
- **A conferir no mapa (`pesquisa-geo`):** o Channel Country (IBRA 7) com o Cooper e o Diamantina da ficha da Austrália do Sul; NSW e o sul de Queensland; a
  costa sul do polvo; a ilha Hayman; Somersby e os pontos de entrega do parque; um modelo de placas com licença para a deriva (ou o esquema declarado).
- **A medir (`pesquisa-dados`):** quanta gente vive no Channel Country e em NSW + sul de Queensland (Censo 2021 do ABS): onde mora o veneno, e onde mora a
  gente. **(v2) É a medida principal do vídeo** (K3): decide a frase do vazio nos atos 3 e 4.
- **A conferir:** a data da colisão ("roughly 20 million years ago" contra o "Early Miocene" do resumo de Hall); a licença do comunicado da Pursuit, do Banco
  Mundial e dos resumos do Europe PMC; os voláteis do TGA (a cobra-preta; a marrom e a funnel-web, que deram erro 500) e do parque, no dia da narração.
- **Bloqueados (403, Cloudflare, verificação ou 405):** o `australian.museum`, o `biomedicalsciences.unimelb.edu.au` (o AVRU), o `museumsvictoria.com.au` e o
  `collections.museumsvictoria.com.au`, o `www.qld.gov.au`, o `www.health.nsw.gov.au`, o `nt.gov.au`, o `www.sciencedirect.com`, o `core.ac.uk`, o BioOne
  (Incapsula), o `biodiversity.org.au` (405), o `api.ala.org.au`, o `ncis.org.au` (para robô), o `www.aihw.gov.au`, o `witness.esrc.unimelb.edu.au`, o
  `lighthouse.mq.edu.au`, o `pubmed.ncbi.nlm.nih.gov` (cookies) e o `nla.gov.au` (prova de robô). **Sem resposta (timeout):** o `soe.dcceew.gov.au`, o
  `environment.gov.au` e o `safetyandquality.gov.au`. **Erro 500:** três páginas do TGA.
- **NÃO CONFERIDOS, e fora:** o valor do LD50; o "nenhuma morte" da taipan; o total de crocodilos no Território do Norte; os 16 mortos por crocodilo em
  Queensland; o NCIS (713, 222 cavalos, 53 cangurus, 541 da ficha de 2020); a morte de redback de 2016; o "25 Ma" da colisão; os roedores "no Plioceno"; a
  área "a 160 km de Sydney"; a origem do "cães e gatos" (a revisão de 2002); o porquê ecológico do polvo no norte; as mortes por polvo; as mortes por cobra e
  crocodilo em 2026; o canguru em colisão (sem fonte nacional); o endemismo do SoE 2021, do DCCEEW e de Chapman (2009).
- **NÃO ACHADOS:** uma fonte que diga que o veneno australiano é mais forte "por causa do isolamento"; a contagem de mortes por cobra antes e depois do soro de
  1930; a contagem da vespa-do-mar antes de 1970; uma fonte nacional das mortes por canguru.
- **Inferências, fora da voz:** a corrente circumpolar como causa da secura; o soro do redback como a razão do fim das mortes; a geografia (onde mora o
  veneno e onde mora a gente) como explicação do paradoxo, até a medida do Censo.
