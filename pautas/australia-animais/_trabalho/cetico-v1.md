# Vídeo 8 (`australia-animais`): o cético da pauta v1 · 18/11/2026

Este arquivo julga `pautas/2026-11-18-video-8-australia-pauta.md` (a pauta v1) e o resumo `…-australia-fatos.md`, contra `fatos-a.md`, `fatos-b.md`
e "As leituras da Sala" (S1, o NCIS) no fim de `pautas/2026-11-18-video-8-australia.md`, e a colisão que a Sala buscou no YouTube (mensagem da Sala,
18/11, ~11h). Ele não reescreve a pauta: diz o que cai e o que muda, do mais grave ao menos. A concorrência não derruba (o Lucas: "Quero fazer isso
desconsiderando a concorrência"); o título igual ou quase igual continua proibido (`feedback-titulo-unico`).

**O que li** (18/11/2026, ~13h15 a ~13h50 pelo relógio da máquina, um pedido por vez):
- **no disco:** a pauta v1 inteira, o resumo, `fatos-a.md`, `fatos-b.md`, o registro da troca (com S1), `decisoes-lucas.md`, os pedidos da pauta e dos
  fatos; o cético do Grand Canyon e o pedido dele (o molde); `marca/embalagem.md` §2; a lista de palavras de `marca/voz.md`;
- **nas cópias locais** (`midia/australia-animais/fontes/a|b/`, só lidas): o resumo de Forrester 2018 (`epmc-us-venomous.json`), o de Welton 2017
  (`epmc-welton.json`), Jackson 2016 (`jackson2016-fulltext.txt`: "lab rodents", "unique to", "most toxic snakes of all", "retaliation"), Lee 2016
  (`lee2016-fulltext.txt`: "30 and 25", "first clade", "surprising"), Ainsworth 2026 ("do not reflect"), Herzig/PNAS 2020 (`herzig2020-pmc.txt`:
  "we propose", "insecticidal", "originated"), a ficha da Austrália do Sul (`sa-inland-taipan.pdf`, de 2009), o parque (`rp-covid.html`, 13/01/2026), o
  TGA (`tga-1.html`) e a página do Taronga (`taronga-resources.html`, a licença);
- **as contas, refeitas:** `p_contas.py --pauta=…` (rodei de novo; os títulos e os blocos conferem) e dois scripts novos, sem rede (abaixo);
- **na web** (cada site com o robots.txt lido antes; nada recusou; nada contornado; nenhuma cópia arquivada):
  - **o Europe PMC** (`www.ebi.ac.uk/robots.txt` relido hoje: só `Crawl-Delay: 10`, e o caminho da API não é vetado): 3 consultas, 12 s antes de cada
    uma, sobre as mortes por abelha e vespa na Austrália (`fontes/c/epmc-abelhas*.json`). Deram os resumos de Harvey et al. 1984 (*MJA*, "Bee-sting
    mortality in Australia"), McGain et al. 2000 (*MJA*, "Wasp sting mortality in Australia") e Mullins et al. 2016 (anafilaxia fatal, 1997–2013);
  - **a Live Science** (`livescience.com/robots.txt` não veta o caminho): "Why does Australia have so many venomous animals?", Elana Spivack,
    26/11/2023, `fontes/c/livescience-why-venomous.html`, sha256 `cbc43221…`. É imprensa, mas as frases decisivas são de dois pesquisadores, ditas a
    ela por e-mail, com nome: Michael Lee (South Australian Museum e Flinders; o Lee de Lee et al. 2016) e Kevin Arbuckle (Swansea);
  - **2 buscas** (WebSearch), só para achar endereços e medir se o ângulo existe; o que veio só delas está marcado [S].
- **O YouTube:** não li nenhuma `/watch`. A colisão é a que a Sala buscou e me mandou (K2).

Não usei o navegador, o vidIQ, banco pago, `SendMessage` nem o git. Os baixados estão em `midia/australia-animais/fontes/c/`, fora do git.

**Os scripts novos** estão em `pautas/australia-animais/_trabalho/scripts/`, da raiz do canal:
- `cetico_contas.py` (`python -I -X utf8 -B …`, sem rede): a série do ABS refeita do xlsx (com o rótulo de cada linha), a medida nossa, a âncora da
  estrada, os EUA pelo resumo de Forrester e onde ele não fecha, e o período de Welton;
- `cetico_titulos.py` (sem rede): os caracteres dos títulos propostos e o tempo das frases de troca;
- `cetico_epmc.py <nome> "<consulta>"`: a consulta ao Europe PMC, um pedido por vez.

---

## Os achados, do mais grave ao menos

### [K1] A premissa da pergunta ("so many venomous animals") só se sustenta para as cobras, e a base não a mede; um especialista diz que o resto é fama (grave; muda o §3, a pergunta do gancho, os atos 2 a 4 e abre um título novo)

**O problema.** O gancho pergunta "So why does one continent have so many venomous animals…?", e metade do vídeo (atos 2, 3 e 4) responde a isso. Nenhum
fato da base diz que a Austrália **tem mais** animais venenosos que outros lugares quentes. A base tem a cobra mais potente no camundongo, a funnel-web, a
vespa-do-mar e o crocodilo (que nem venenoso é): exemplos, não contagem. A pauta herdou a premissa da pergunta do Lucas sem medi-la.

**O que a Live Science (26/11/2023) traz, nas palavras de dois pesquisadores:**
- **as cobras sim, e com número:** "Of Australia's 220 snake species, 145 are venomous, Lee told Live Science via email. These deadly serpents account for
  65% of Australia's snake population, though only about 15% of the world's snakes are venomous." (Michael Lee, o autor de Lee et al. 2016, a fonte da
  pauta para as elapídeas.) Bate com a base: Jackson dá ~100 elapídeas terrestres e ~30 marinhas (fa B3), mais as colubrídeas de presa traseira;
- **o resto não:** Kevin Arbuckle, "Contrary to popular belief, Australia isn't particularly abundant or diverse in venomous invertebrates"; "Australia
  has a remarkably enduring and prominent image as the home of highly venomous animals, yet for the most part this is overstated"; "Its venomous animal
  diversity is not unusual at all for a largely tropical area";
- **a água e as aranhas são mais velhas que o continente:** as caixas-medusas são um "not particularly Australian phenomenon" (Arbuckle); os cefalópodes
  venenosos "have existed for up to 300 million years"; as funnel-web são as únicas aranhas exclusivamente australianas que podem matar gente, e os
  ancestrais das redback "predate Australia as a separate continent". O PNAS da pauta diz o mesmo da funnel-web (150 a 200 milhões de anos, P5);
- **e uma hipótese que fecha o vídeo inteiro:** Arbuckle "wondered if part of this belief stems from the continent's 'scientific capital' and 'excellent
  infrastructure' for public health and medical care". A fama viria, em parte, de a Austrália estudar e tratar tão bem o próprio veneno: a mesma coisa que
  faz pouca gente morrer. É hipótese ("wondered"), e vai à voz como tal, ou não vai.

**O que isso muda:**
- **a pergunta do gancho** troca "so many venomous animals" por uma que a base paga, sem generalizar:
  > So why are so many of Australia's snakes venomous, and why do so few people die?

  ou, se o roteiro quiser manter "animals", com a fama posta como fama: "So why does Australia have this reputation, and why do so few people die?";
- **o número que mede a premissa vai à voz uma vez** (ato 2 ou 3), com dono, depois da conferência da contagem (abaixo):
  > Of Australia's roughly 220 kinds of snakes, about 145 are venomous, the evolutionary biologist Michael Lee told Live Science. Worldwide, it's about
  > 15 percent.
- **o ato 2 deixa de prometer "por que tanto veneno" em geral** e vira "por que tanta cobra venenosa" (a deriva e a Ásia continuam: é a resposta das
  cobras). A aranha e a água entram como o contrário: mais velhas que o continente, ou comuns aos mares quentes. Isso é justo com a Austrália e é uma
  virada que o enxame não tem (o enxame inteiro promete "so many deadly animals");
- **a conferir antes da voz:** a contagem de 145 de 220 e os ~15 % do mundo, no Reptile Database ou no Australian Faunal Directory (o AFD deu 405 ao
  leitor A: a Sala, no navegador do app). Até lá, a frase vai com o dono ("Lee told Live Science") e sem arredondar para "two in three";
- **fica fora:** o "60 million years ago … an accident of history" e o "the first snakes colonized" da mesma matéria (é paráfrase da jornalista, e
  "the first snakes" contradiz as pítons e as cobras-cegas; a pauta fica com Lee 2016, que diz "first clade of venomous snakes"); e o "about 100 million
  years ago" de Arbuckle para a separação (a pauta fica com a GA: o rifte da Antártida, 85–80).

### [K2] A colisão: os três títulos e as duas miniaturas do teste caem ou ficam fracos; o que é nosso é o mapa das cobras, a medida e o endereço (grave para a embalagem; muda o "Lado a lado", o §2, o §8 e o §9)

**O que a Sala achou** (YouTube, 18/11, ~11h, mensagem à v1):
- **o título 3** (*Why Australia's Spiders Stopped Killing People*) é quase igual a *Why Australia's Deadliest Spider Stopped Killing People* (Veil Works,
  1.531 views, há 2 semanas). **Cai.**
- **a miniatura "SPIDER DEATHS: ZERO"** é o fato de um curto: *In 21 Years, Australia's Spiders Killed No One. Not One* (1.316, há 1 mês). **Cai como a
  primeira do teste.** O zero das aranhas continua o melhor fato do gancho; só não é nosso na embalagem;
- **o título 1** (*Why So Few People Die From Australia's Deadly Animals*) faz a mesma promessa, com outras palavras, de *Why Australia's Deadliest Animals
  Almost Never Kill Anyone* (BeyondTheBush, 291, há 1 mês), e encosta em *The 12 Deadliest Animals in Australia (And Why You're Wrong About Them)* (Venom
  Atlas, 80, há 7 dias). A própria pauta já tinha derrubado *Why Australia's Deadliest Animals Kill Almost No One*, quase palavra por palavra o do BeyondTheBush. **Cai** (a
  alternativa "…Venomous Animals" é a mesma promessa e cai junto);
- **o título 2** (*Australia Has the World's Most Venomous Snake. It Rarely Kills.*) encosta em *Australia Has 20 of the World's 25 Most Venomous Snakes
  Here's Why That's Fine* (Deadly Down Under, 3.743, há 4 semanas) e nos dois da taipan "que nunca matou ninguém" (*The Deadliest Snake on Earth That Has
  Never Killed Anyone*; *The Most Venomous Snake Alive Has Never Killed Anyone…*, 1.238, há 2 semanas). **Cai.** E "It Rarely Kills" diz que ela mata às
  vezes: a base não tem morte nenhuma lida por taipan-do-interior (fa B5; o "nenhuma" do AVRU é NÃO CONFERIDO);
- **a miniatura "NOT THE KILLER"** é a virada desses dois vídeos da taipan. **Fica fraca.**

**O que ninguém tem, pelo que a Sala viu** (a confirmar nas `/watch`, "Para a Sala ler", item 2):
1. **o mapa das cobras:** dois terços das cobras da Austrália são venenosas contra ~15 % no mundo (K1), e o porquê é de mapa (as elapídeas vindas da
   Ásia para um continente sem víboras). O enxame promete "so many deadly animals"; ninguém promete "so many venomous snakes";
2. **a medida nossa e o livro oficial de 2016–2025** (o ABS saiu em 27/10/2026: nenhum vídeo anterior tem a série). O curto das aranhas usa o NCIS de
   2001–2021 [S];
3. **o endereço** (K3): as duas cobras do topo do mesmo teste, uma que quase não pica ninguém e outra que mata 17 de 23. A diferença é onde cada uma vive,
   e isso é mapa. Os vídeos da taipan param no "nunca matou"; nenhum, pelos títulos, põe a marrom ao lado.

**Os títulos que eu levaria ao teste** (contados em `cetico_titulos.py`; a Sala busca a colisão de cada um antes):

| # | Título | Caract. | O que é literal | O risco |
|---|---|---:|---|---|
| **1 (o principal)** | **Australia Has the Venom. Why Doesn't It Have the Deaths?** | 56 | "the venom": a cobra mais potente no camundongo e dois terços das cobras venenosas (K1, com a contagem conferida); "the deaths": 85 em dez anos, 1 em 3 milhões por ano | o molde "fato. pergunta." é do Geography Effect; "the Venom" é vago sem a miniatura; paga aos ~25 s se o gancho levar a medida (K4) |
| 2 | Why Most of Australia's Snakes Are Venomous | 43 | 145 de 220 (Lee, a conferir na lista) | promete só a metade do porquê (as cobras); o paradoxo das mortes fica de virada dentro do vídeo. "Venomous" não é "perigosa": o vídeo paga isso, e é a graça |
| 3 | Australia's Deadliest Snake Isn't Its Most Venomous One | 55 | a marrom mata 17 de 23 (ASP-20); a taipan é a do topo do teste (1979). "Deadliest" está certo aqui: é a que mais mata | encosta na família da taipan; depende da fonte do endereço da marrom (K3). Se a Sala achar colisão, sai |

O "Why" do 1 promete uma resposta que o vídeo dá em partes (a pauta já diz, §12): é o mesmo risco do título 1 da v1, sem a colisão.

**As miniaturas:**
- **"1 IN 3 MILLION" sobe a primeira, com o título 1.** É a única que vende a medida nossa, e com o título 1 o número ganha objeto (a pauta só a deixou de
  reserva porque pagava aos 2:30: com o K4, paga no gancho). O continente inteiro em vermelho, como a pauta descreve;
- **com o título 2, uma nova: o mapa com a Ásia no alto e a seta grossa da Ásia para o continente**, as elapídeas; caixa **"NO VIPERS"** (a virada sem
  dar a resposta; Jackson, "viperid snakes are absent", fa B2; a lista oficial do AFD ainda é NÃO CONFERIDA). Não repete o título;
- **"SPIDER DEATHS: ZERO"** fica de reserva, só se a Sala não achar mais curtos com o zero das aranhas; **"NOT THE KILLER"** sai.

**O que eu levaria ao teste:** o título 1 com "1 IN 3 MILLION", contra o título 2 com "NO VIPERS"; na rodada de títulos, o 1, o 2 e o 3.

### [K3] A virada do camundongo, como está, não explica o paradoxo: a marrom está no mesmo topo do teste, e mata; a diferença é o endereço (grave; muda o §4.3, o §4.6, os atos 3 e 6 e o §10.1, item 8)

**O problema.** O ato 3 vira em "But mice aren't people" e no Ainsworth de 2026 ("do not reflect the actual circumstances of snakebite envenoming"). A
frase de Ainsworth é uma crítica ética e de método ao ensaio (o parágrafo fala de dor, de sofrimento e dos 3Rs), não uma prova de que a taipan é fraca em
gente. E a base mesma desmente a leitura que o espectador vai fazer ("então o veneno não é tão forte"):
- Jackson 2016, lido: o complexo da protrombinase inteiro "is unique to the clade comprised of Oxyuranus and Pseudonaja [1, 5], the most toxic snakes of
  all [21]", e a ref. 21 é o próprio Broad, Sutherland e Coulter de 1979. **A marrom (*Pseudonaja*) está no mesmo grupo do topo do teste;**
- e é ela que mata: 17 das 23 mortes de 2005–2015 (ASP-20, P3).

Logo, o que separa a taipan (quase sem picada documentada) da marrom (a que mata) não é o camundongo: é **onde cada uma vive e quantas vezes encontra gente**.
A taipan vive nas planícies de barro rachado do Cooper e do Diamantina (P6), e é "usually quite shy"; a marrom, pelo que a pauta não leu, vive onde há gente
(fazendas, periferias). Isso é a geografia que o canal promete, e a pauta já a pediu como medida (§10.1, item 8).

**O que muda:**
- **o laboratório fica, mas sem "But mice aren't people" como fecho:** o 1979 e o LD50 entram; o Ainsworth sai da voz (ou fica com o que ele diz:
  "a test that researchers now criticize, partly because it doesn't reflect a real bite"). O que vira o ato é a marrom (EN, depois das leituras):
  > The test that crowned the inland taipan put another Australian snake near the top, too: the brown snake. Both carry a toxin no other snakes have. One
  > lives out on these empty floodplains and is usually quite shy. The other lives where people farm and build. Guess which one kills.
- **a ponte de "o veneno" para "o endereço" passa a ser o fio do vídeo**, nos atos 3, 5 e 6: a taipan (o vazio), a funnel-web (no meio de 5 milhões, e o
  soro de 1981), a vespa-do-mar (o norte, a temporada), a marrom (as fazendas);
- **a conferir antes da voz:** (a) o lugar da marrom no teste de 1979 (a lista do AVRU, NÃO CONFERIDO 2; só "near the top", nunca "second", até a leitura);
  (b) o habitat da marrom perto de gente, por fonte oficial (o Australian Museum, 403: a Sala; ou um museu estadual); (c) a medida do §10.1, item 8 (a gente
  no Channel Country contra a de NSW e do sul de Queensland), que a pauta pôs "a fazer" e que agora vira a medida principal do vídeo;
- **a frase da toxina** se ajusta à fonte: o que "partially underwrites the extreme toxicity … to lab rodents" é o fXa, comum a quase todas as elapídeas
  australianas; o que é "unique" à taipan e à marrom é o complexo inteiro. A frase da pauta ("a toxin … no other snakes have. It's part of what makes their
  venom so extreme on lab rodents") junta as duas coisas. Fica: "Brown snakes and taipans share a toxin no other snakes have" e, se quiser, "a toxin
  weapon that, one study says, likely helps drop prey extremely fast" ("likely contributes to the extremely rapid collapse of envenomed prey").

### [K4] A comparação com os EUA cai: o resumo de Forrester não fecha consigo mesmo, e a comparação certa para este vídeo (só os venenosos) daria o contrário do que a frase sugere (médio-grave; muda o §4.6, o §10.1, item 5, e o ato 6)

**A conta** (`cetico_contas.py`, com a população de 2011 do Banco Mundial, como o resumo):
- o resumo diz 1.610 mortes (W53–W59 + X20–X29) e "4.8 deaths per 10 million persons annually" nos **não** venenosos: são ~1.197 mortes, e sobram **~413
  venenosas** (1,65 por 10 milhões por ano);
- o mesmo resumo diz que os himenópteros são "29.7% of the overall animal-related fatalities": **~478 mortes**, mais que todas as venenosas que sobram.
  As duas frases não podem ser verdadeiras juntas. O leitor B viu que não fechava; a conta mostra que é impossível, não só imprecisa;
- **e o mais importante:** a frase segura soma tudo ("Count every animal, venomous or not … about one and a half times") e diz que as abelhas "kill at almost
  the same rate". Só nos venenosos, o assunto do vídeo, a Austrália dá 3,30 por 10 milhões por ano (ABS), e os EUA, entre 1,65 e 1,92 pelo resumo: **a
  Austrália mataria por veneno 1,7 a 2,1 vezes mais por pessoa**. A frase, como está, leva o espectador a "é quase igual", o contrário do que os
  venenosos dizem. Não é desonesta na letra, mas escolhe o recorte que encolhe a diferença.

**O que muda:** a frase dos EUA sai da voz e da tela, e a nota da §12 deixa de depender dela. Se o Lucas quiser os EUA, a comparação é só dos venenosos, com a
tabela do artigo (assinatura) ou do CDC WONDER (o aceite dos termos é do Lucas), e a frase diz o que der ("about twice", se der). O orçamento ganha um número.

### [K5] O "85" do gancho está ancorado na cama: o tropo do enxame, e o ano de pico preliminar; a âncora nossa é a estrada ou a medida (médio; muda o §8 e o §4.1)

**O problema.**
- A comparação "mais gente morre caindo da cama que de [bicho]" é o tropo mais gasto do gênero "not as dangerous as you think" (a pauta já teme o tom, teste
  D). No gancho, ela é a âncora do "85": sem ela, o espectador não tem com que medir;
- **118 é o pico da série, e é preliminar.** A série W06 (refeita, Table 1.2): 73, 83, 84, 66, 73, 84, 93, 89, 101, **118**; média de 86 por ano. "118 num ano
  contra 85 em dez" usa o ano mais alto, que ainda muda. A forma honesta seria "in an average year … about as many as venomous animals in a decade", e aí
  a frase fica mais fraca e continua tropo.

**O que muda (EN), a âncora do gancho, sem a cama** (`cetico_contas.py`: a estrada de 2025, 1.276, dá 106 por mês em média, e os 85 de dez anos são 24 dias
dela):
> From 2016 to 2025, every venomous animal in Australia combined killed 85 people. Spiders killed none. That's fewer than Australia's roads killed in an
> average month of 2025. Put next to the population, it's about one in three million a year.

(41 palavras, 13,7 s. Paga a miniatura "1 IN 3 MILLION" no gancho, K2. "Average month" é conta nossa sobre o ABS, Table 15.4, preliminar; na tela, "Alpha
Point calculation".) A cama vai ao ato 6, se for, com a média, ao lado do calor e da água; ou sai.

### [K6] A cronologia dos atos 2 e 3 tropeça, e o "So" das elapídeas é nosso (médio; muda o §4.2, o §4.3 e as pontes do §7)

- **A ponte do ato 2 para o 3** ("A continent on its own, drying out, with almost nothing arriving from outside. And then, from Asia, came the snakes.") põe
  as cobras **depois** da secura (15 milhões; os desertos, 1–4) e da colisão (Mioceno inicial). A janela das elapídeas é 30–25 milhões (fa B1), antes das
  duas. É o K8 do Grand Canyon de novo: a ponte cria uma ordem que a base desmente. A frase segura das elapídeas ("Somewhere along that journey north") está
  certa; a ponte não. **No lugar (EN):** "But before Australia ever reached Asia, something had already made the crossing." E a secura passa para depois
  das cobras, onde ela serve à taipan (o barro rachado).
- **"In Australia, they found an open field … So the elapids moved into most of the ways a snake can make a living"**: o "So" é nosso. Jackson diz que as
  elapídeas ocupam "the majority of terrestrial snake niches" e que não há víboras; Lee 2016, a outra fonte, diz o contrário do que o "open field" sugere:
  "it is surprising that the colonization of Australasia by elapids did not result in sharply increased rates of speciation". **No lugar (EN):** "There
  were no vipers here, and none of the other modern snake families had arrived. Today, elapids fill most of the roles a snake can play on land, and some
  live in the sea." Os fatos lado a lado, sem a causa.
- **"Around 45 million years ago, Australia started moving north, and deep ocean opened up behind it"** junta 45 e 33,5 milhões numa frase: "and, over the
  next ten million years or so, deep ocean opened up behind it".
- **"roughly 20 million years ago"** para a colisão: o resumo de Hall diz "By the Early Miocene" (23–16). "Some 20 million years ago" passa; o verificador
  confere, como a pauta já diz.

### [K7] O ato 4 é a lista que o enxame faz, e a fonte do K1 tira dele o porquê; o ato 6 é a fila de números (médio; muda o §7 e a duração)

- **O ato 4** (vespa-do-mar, crocodilo, polvo, cone, tubarão) não responde a nenhuma das duas perguntas: a pauta mesma diz que as fontes dão o habitat, não
  a causa (fa C1), e Arbuckle diz que as caixas-medusas e os cefalópodes não são um fenômeno australiano (K1). É onde o espectador cansa. **Fica a vespa-do-mar**
  (o norte, os riachos de maré, a temporada: é mapa, e a única morte em 225 picadas vai à tela) **e o crocodilo** (a lei de 1971: um bicho que voltou por
  política). O polvo e o cone saem da voz (vão à tela num mapa só, ou a lugar nenhum); o tubarão vai ao ato 6, em uma oração (K9).
- **O ato 6** tem 11 números. Com os EUA fora (K4) e a cama fora do gancho (K5), ficam a marrom (23, 17), a abelha (sem número além do "more than snakes"
  do ato 1), os sem veneno (154), o calor, a água e a estrada. O 202, o "more than a thousand" e o 1.276 já cumprem o papel; a estrada aparece no gancho
  (K5), e aqui pode sair.
- **A duração:** a pauta orça 15,9 min e diz que o material segura 15,5 a 16. Com o ato 4 encurtado, os EUA fora e a cama fora, **14,5 a 15 min** se
  sustentam; 16, não. A abertura para as cobras (K1) e o endereço (K3) devolvem parte do tempo, com fato novo e não com lista.

### [K8] A funnel-web: a pauta erra o "para quem o veneno nasceu" no resumo, e deixa de fora a melhor ligação com o fecho (médio-leve; muda o "Em uma linha" e o §4.5)

- **O "Em uma linha"** diz que o veneno "nasceu contra lagartos, aves e bandicoots". O PNAS diz outra coisa: "we propose that the δ-HXTXs were repurposed
  from an initial insecticidal predatory function to a role in defending against nonhuman vertebrate predators **by male spiders**". Nasceu para caçar
  insetos e foi reaproveitada pelos machos para a defesa. A frase segura do §4.5 ("it causes pain in mice and kills insects. Their explanation: it evolved
  to fend off the spiders' predators") está quase certa; ganha com o verbo da fonte: "it started as a weapon for catching insects, and, the team proposes,
  the males turned it into a defense against animals like bandicoots, birds and lizards".
- **A ligação que falta:** o PNAS diz que a toxina é mais expressa nos machos adultos ("the increased expression of δ-HXTXs in mature male spiders"); a pauta
  já diz que quem pica são os machos que saem da toca (D1); e o parque diz por que só ordenha machos: "their venom is significantly more potent" (P1, lido
  hoje). **É o mesmo bicho em três frases:** o macho que sai de casa no verão é o que pica, o que tem o veneno mais forte e o que vira soro. A frase do
  parque entra no fecho.
- "in the mating season" é acréscimo: a fonte diz "in search of females" e "between November and March". Fica "when they wander out looking for females,
  mostly from November to March".
- "the antivenom completely reversed the bite in almost every case": a fonte diz "a complete response in 97%". "worked completely in almost every case".

### [K9] Os números que vão à voz: o que é de segunda mão, o que está mais forte que a fonte (médio-leve; muda o §4.1, o §4.3, o §4.4 e o §4.6)

- **As internações de Welton** ("Over 13 years, spider bites put Australians in the hospital about 12,000 times"): o resumo do artigo [R] diz "Hospital
  admission rates of 199 per 100 000 persons **over the 11 years**", e 199 por 100.000 sobre ~21 milhões dá ~41.800 (`cetico_contas.py`): é o "almost
  42,000" do comunicado, não os 39.424 da tabela dele. O "about 12,000" das aranhas sobrevive às duas leituras (30 %); **o "13 years" não**. Até o AIHW:
  "Over a little more than a decade, spider bites put Australians in the hospital about 12,000 times", com a tela "Welton et al., 2017".
- **A dúzia da taipan** é a contagem de Weinstein **em 2017**, num resumo [R]. "By 2017, doctors had written up only about a dozen cases…", ou "One 2017
  report counted…". O ASP-25 (fb, item 4 dos 5 fatos) achou cinco picadas de taipan-do-interior no projeto; não se sabe se estão entre as onze.
- **A ficha da taipan** é uma ficha escolar de 2009 de um conselho regional do governo da Austrália do Sul (o PDF diz "South Australian Arid Lands Natural
  Resources Management Board"). Serve, com o dono certo na tela ("Government of South Australia, SA Arid Lands NRM Board, 2009"). A voz diz "a South
  Australian government fact sheet": passa.
- **As 4,3 horas** são a mediana de todos os 835 envenenados do ASP-20, não das 23 mortes. Na voz, logo depois das mortes, o espectador entende que os mortos
  esperaram quatro horas. E o "relógio sobre o mapa" do ato 6 (a distância do interior até o hospital) sugere uma causa que o resumo não dá. Fica: "Across
  everyone envenomed in that study, the typical wait for a first dose of antivenom was more than four hours", sem o mapa da distância; e o fato mais forte do
  mesmo resumo vai à voz no lugar: dez das 23 mortes vieram depois de uma parada cardíaca fora do hospital.
- **O soro da cobra-preta:** o TGA diz também "Healthcare professionals to consider alternative treatment options". A frase da pauta ("listed black snake
  antivenom as unavailable from February to December 2026") sem isso soa como "não há tratamento". Fica com as duas metades, ou sai: é volátil, é notícia, e o
  fim ("31 Dec 2026") pode cair na semana da publicação.
- **O tubarão e a licença do Taronga.** A página diz "Any use of this information in any publication must contain appropriate accreditation … and cannot be
  used for commercial purposes without express permission from Taronga". A pauta tira a tabela e o gráfico e credita a AP, mas o "two to three a year" da AP
  é a mesma informação do Taronga. O caminho limpo: **o ABS** (W56, "contact with marine animal", 32 em dez anos, CC BY) com as palavras dele ("animals in the
  sea, sharks among them"), ou o tubarão sai da voz. Nenhum número do Taronga na tela nem no crédito, sem a permissão (pedir é mandar mensagem: é do Lucas).
- **O endemismo** ("According to Australia's statistics bureau, about nine in ten…"): é uma página arquivada de 2002, com a tabela do WRI, e o ABS não é a
  autoridade de biodiversidade; a mesma tabela dá 85,7 % dos répteis. Não serve a nenhuma das perguntas (K1). Sai da voz, ou espera o SoE 2021.
- **"Bees and wasps … no antivenom treats it"**: a base não tem a fonte (é o leitor B). Fica "and there's no antivenom for an allergy" só com fonte; ou "it's
  treated with adrenaline, not antivenom", com fonte.

### [K10] Os pequenos, cada um no seu lugar

- **As palavras proibidas no título** ("Nobody", "Never", "Deadliest"…) a pauta atribui à `voz.md` §2; a lista da `voz.md` é outra ("shocking", "insane",
  "crazy"…). As da pauta são regra dela, e "Deadliest" serve onde é literal (a marrom, K2, título 3).
- **"the world's first antivenoms for sea creatures: one for the stonefish"**: o peixe-pedra entra na voz só nesta frase. "Australia went on to make the
  world's first antivenom for a jellyfish, in 1970" basta (e a eficácia do soro da vespa-do-mar não está na base: sem "and it works").
- **"The animals Australians actually run into live somewhere else"** (a ponte para a inscrição) leva à água, onde quase ninguém morre (X26: 2 em dez anos).
  Com o K3, a ponte certa aponta para o endereço: "The snake that actually kills Australians lives somewhere else."
- **"In January 2026, the park said it was down to about half its usual number of spiders"**: a fonte diz "around half of its usual funnel-web spider
  capacity". "About half its usual supply of spiders" é fiel. E o porquê do parque (a geração que faltou nos confinamentos de 2020) é uma boa frase de
  fecho, com o dono.
- **O pedido do parque à gente de Sydney** ("catch the funnel-webs they find, safely, and bring them in") vai com o dono e o "safely", como está: é um
  público de qualquer país.
- **A abelha que veio de fora** (pista, não fato): os resumos de Harvey et al. 1984 (25 mortes por abelha em 1960–1981, ABS) e McGain et al. 2000 (7 por
  vespa em 1979–1998) contam as mortes, mas não dizem a espécie. Se uma fonte disser que quase todas são da abelha europeia, trazida no século XIX (a data
  também a ler), o animal venenoso que mais mata na Austrália "não é australiano": é uma virada forte e de mapa. Até ler, nada na voz.

---

## O que passou

- **O ABS confere inteiro** (`cetico_contas.py`, do xlsx, com o rótulo de cada linha): X20–X29 = 85 (4, 10, 19, 6, 9, 6, 6, 8, 11, 6); X21 "Contact with
  venomous spiders" = 0 em todos os dez anos (a linha existe, com zeros; não é ausência); X20 = 35; X23 = 42; W53–W59 = 154; W06 = 864 e 118 em 2025; X30 =
  202; W69 = 1.010; W65–W74 = 2.077; estrada (Table 15.4) = 1.276 em 2025.
- **A medida nossa confere:** 257.890.800 pessoas-ano, **1 em 3.034.009 por ano**; só as cobras, 1 em 7,4 milhões. O denominador é honesto (a ERP de 30 de
  junho de cada ano).
- **Lido de novo e confere:** "the most potent venom of any land snake on earth, but fortunately it is usually quite shy" e o pica-e-solta (ficha da
  Austrália do Sul); o "probably an adaptation for avoiding the risk of retaliation" (Jackson); o "first clade of venomous snakes to reach the continent" e a
  janela 30–25 para todos os continentes (Lee); o "do not reflect the actual circumstances" (Ainsworth); o "primates were not present 150 to 200 million y ago"
  e o "unfortunate evolutionary coincidence" (PNAS); o parque (13/01/2026: "sole supplier", "around half", "approximately 150 individual venom milkings",
  "Only adult male", "not a single person has died", com "credited to antivenom and rapid medical treatment"); o TGA (cobra-preta, 23/02 a 31/12/2026,
  "Manufacturing").
- **"Most venomous" e "isolated" estão ditos com a cautela certa** no gancho e nas frases seguras: "the land snake with the most potent venom on Earth, as
  measured on lab mice", e "for tens of millions of years", nunca "isolated for 50 million years". O §5 é rigoroso e quase tudo nele fica.
- **A hipótese dita como hipótese**: o "probably" de Jackson e o "we propose" do PNAS chegam à voz com dono ("think", "their explanation").
- **Justo com a Austrália:** nem "tudo mata" nem "é mito"; os médicos, o ABS, o governo e o parque falam nos próprios termos; nenhum humor perto das mortes;
  as crianças da funnel-web fora da voz.
- **Fora, e bem fora:** o NCIS (cavalos e cangurus) até a ficha; o valor do LD50; o "never killed" da taipan; a Índia como "300×"; o "isolated for 50
  million years"; o "fastest continent"; o "since 1956".
- **O que o Lucas pediu para os roteiros** a pauta prepara: a segunda pessoa, uma pergunta por ato, a fonte na tela e uma vez na voz, as palavras definidas
  (elapids, LD50, anaphylaxis, Gondwana, stinger season), só milhas (e polegadas), a inscrição aos ~51 % numa pausa, sem citação colada.

## O que falta ler antes do roteiro, em ordem de risco

1. **A colisão dos títulos novos** (K2) e as `/watch` dos cinco vídeos que a Sala achou: se algum põe a marrom ao lado da taipan, usa o ABS de 2016–2025 ou
   a fração das cobras venenosas.
2. **A contagem das cobras** (K1): 145 de ~220 venenosas e os ~15 % do mundo, no Reptile Database ou no AFD (405 para robô).
3. **O endereço da marrom** (K3): o habitat perto de gente, por fonte oficial (o Australian Museum, 403; um museu estadual), e o lugar dela no teste de 1979
   (a lista das 25 do AVRU, 403). Decide o título 3 e a virada do ato 3.
4. **A medida do §10.1, item 8** (a gente no Channel Country contra a de NSW e do sul de Queensland, Censo 2021): passa de "a fazer" a medida principal.
5. **O AIHW** (internações, K9) e o resto do §11 da pauta (o AVRU, o Australian Museum, o NCIS, o SoE, o AFD, o redback, os voláteis), sem mudança.
6. **Forrester** só se o Lucas quiser os EUA, e só os venenosos (K4).
7. **A abelha europeia** (K10, pista): a espécie das mortes por abelha e o ano da chegada, por fonte lida.

## Para a Sala ler no navegador do app

Nada aqui foi contornado: nenhuma destas páginas foi tentada por mim.
1. **O YouTube:** a busca dos três títulos do K2 (por relevância e por data) e as `/watch` (descrição e capítulos) de Veil Works, BeyondTheBush, Venom Atlas,
   Deadly Down Under e dos dois vídeos da taipan.
2. **O AVRU** (`biomedicalsciences.unimelb.edu.au`): a taipan, a marrom e a lista das 25 de menor LD50.
3. **O Australian Museum** (`australian.museum`): a taipan, a marrom (o habitat) e a funnel-web.
4. **O Reptile Database** ou **o AFD** (`biodiversity.org.au/afd/taxa/Elapidae`): a contagem das cobras (K1), e "não há víboras" pela lista.
5. O resto da lista da pauta (o NCIS, o AIHW, o SoE, o TGA, o redback), sem mudança.

---

## A nota: 5,5 · DE PÉ COM AJUSTE

O miolo é forte e é nosso: o livro do ABS de 2016–2025 refeito e conferido, a medida de 1 em 3 milhões, o *MJA* e o PNAS lidos na origem, a ficha da taipan
e o parque. A pauta é cuidadosa onde mais importa (o camundongo, o "isolated", a hipótese como hipótese, o NCIS fora).

Desço meio ponto da nota da pauta (6,0) por quatro coisas, todas consertáveis:
- **a embalagem inteira colide** (K2): os três títulos e as duas miniaturas do teste caem ou ficam fracos;
- **a premissa da pergunta não é medida e um especialista a chama de exagerada** (K1), salvo nas cobras, onde ela vira o melhor fato do vídeo;
- **a virada do camundongo não explica o paradoxo** (K3): a marrom está no mesmo topo do teste e mata; a resposta é o endereço, e ainda não está lida;
- **a comparação com os EUA não fecha e escolhe o recorte que encolhe a diferença** (K4).

- **Para subir a 6,0–6,5:**
  - a contagem das cobras conferida (K1) e o endereço da marrom lido (K3), com a medida do Censo mostrando o vazio da taipan contra a gente da marrom e da
    funnel-web;
  - os títulos novos limpos na busca, e o título 1 com "1 IN 3 MILLION" lido pelos leitores como curiosidade (não como "mito desmentido");
  - as `/watch` da colisão sem a marrom ao lado da taipan e sem a série do ABS.
- **Para cair a 5,0 (RESSALVA):**
  - se um vídeo achado já contar o par taipan–marrom pelo endereço, ou a fração das cobras com o mapa da Ásia;
  - se a contagem das cobras não confirmar a maioria venenosa (aí a pergunta do "porquê" fica só com a fama, K1);
  - se o endereço da marrom não tiver fonte oficial lida (aí o ato 3 volta a depender do "mice aren't people").
