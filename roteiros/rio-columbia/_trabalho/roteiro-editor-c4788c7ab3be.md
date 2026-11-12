# Dossiê do roteiro · rio-columbia (vídeo 7)

Revisão do roteiro: `c4788c7ab3be`

> Escrito em 12/11/2026 por um subagente da Sala de controle, no papel do editor. A base é `roteiros/rio-columbia/roteiro-narrador.md`, o
> texto final: o r2 com as trocas C1 a C8 do cético, aplicadas pela Sala. O texto falado não muda aqui. Ele foi aprovado pelos conferentes,
> por decisão do Lucas (12/11/2026, ~01:2x, no chat da Sala: "Ou seja, dessa vez vamos ignorar a minha aprovação. Se os céticos aprovarem,
> pode prosseguir"; `decisoes-lucas.md`):
> - o verificador de fatos deu PASS, com 224 de 224 e nota 9,0 (`qc-roteiro/fatos.laudo.md`, "Revisão julgada: `c4788c7ab3be`");
> - o cético que leu no lugar do Lucas deu APROVA COM TROCAS, com 8,5 e nenhum GRAVE (`qc-roteiro/cetico-r2.laudo.md`, sobre o r2
>   `58991dc7d979`).
>
> As outras entradas:
> - a tabela do verificador (`qc-roteiro/fatos-tabela.json`, 224 linhas, todas "confirmada") e as medidas (`qc-roteiro/fatos-medidas.txt`
>   e `fatos-medidas-r2.txt`);
> - o laudo do ouvinte a frio do r1 (`qc-roteiro/ouvinte-r1.laudo.md`);
> - as notas do roteirista (`_trabalho/escrita-notas.md` e `escrita-notas-r2.md`) e a lista da Sala (`_trabalho/lista-r1.md`, seção D);
> - a pauta aprovada (`pautas/2026-11-09-video-7-rio-columbia.md`, sobretudo §5, §6, §7, §8 e §10) e as releituras
>   (`pautas/rio-columbia/_trabalho/fatos-c.md`, itens 8, 9a e 9b);
> - a narração já feita (`out/rio-columbia/narracao.json`, 44 trechos) e a conferência dela (`out/rio-columbia/_pesquisa/narracao-conferencia.md`).
>
> Nenhum fato novo entrou, e nada se pesquisou na web. O que vai à tela aqui é proposta para o `regente-de-imagem`, o `redator-de-tela`, o
> `mapista` e o `editor-de-arte`. Nada aqui passou pelo Lucas.
>
> **A medida do portão** (`node roteiros/rio-columbia/_ferramentas/gate.mjs`, 12/11/2026, exit 0, **PASSA**, sem problema):
> - sha256 do texto falado `c4788c7ab3be…`;
> - **2.696 palavras** (o teto é 2.700), 15,06 min de fala estimados a 179 palavras/min (15:34 com as pausas e a cauda, na conta do portão);
> - 44 parágrafos e 193 frases pelo portão. São **189 frases de verdade**, as numeradas abaixo, f1 a f189, na contagem do verificador, que
>   não parte decimais nem aspas;
> - média de 14 palavras por frase (teto 18), e a maior com 32 (teto 34);
> - o gancho com 170 palavras até a assinatura (no teto) e o "But" na palavra 48;
> - 50 números falados (o alerta é acima de 50).
>
> Os 11 alertas estão decididos (`escrita-notas.md` §3 e `escrita-notas-r2.md` §C):
> - "first" três vezes: "the first 30 years" e "First Nations" duas vezes;
> - `today` na citação da província, e `now` no "For now" do fecho;
> - a 1ª frase sem número;
> - `[estudo-bc]`, `[cbc]` e `[puds]`;
> - `[uma-vez-no-gancho]` duas vezes: o 15 e o 39 do eco, aceitos pela Sala na lista B1.
>
> O autoplágio está vazio.
>
> **O relógio de verdade** é o da narração (`out/rio-columbia/narracao.json`, eleven_v4, 12/11/2026). A fala dura **15:08,0**, e o vídeo,
> com a cauda de 20 s, **15:28,0** (927,95 s).
> - Os tempos deste arquivo saem dele. O começo e o fim de cada trecho (um parágrafo por pedido à voz) são os do `narracao.json`.
> - Dentro do trecho, cada frase leva uma parte do tempo proporcional aos caracteres dela na cópia para a voz. As 189 frases casam uma a uma
>   com as dos 44 trechos. A estimativa erra um ou dois segundos dentro do trecho.
> - O `words.json` ainda não existe (o `ingest` vem depois da escuta do Lucas). O regente recalcula tudo por ele.
> - A narração saiu um pouco mais rápida que a conta do portão (~180 palavras/min): a inscrição, que o portão punha em 6:16,9, cai em 6:05,1.
>
> **Os ids** são os da tabela do verificador (a coluna `id` de `qc-roteiro/fatos-tabela.json`).
> - Cada linha se casou pela frase e pelo parágrafo. As 224 linhas caem nas 189 frases, e nenhuma ficou solta.
> - Entre parênteses vem a fonte, como a tabela a escreve, com o código da pauta e da base (L, F, K, §). O trecho entre aspas é o da tabela,
>   relido pelo verificador na cópia local e cortado em ~200 caracteres.
> - As 9 linhas L (`inferencia: true`) são conclusões do canal, apoiadas em linhas confirmadas. Elas vêm com a nota do verificador.
> - Quando uma linha cobre duas frases (F179, F183, F091, F205–F208 e F211), ela aparece nas duas.
> - O script que partiu as frases, casou a tabela e tirou os tempos está fora do canal:
>   `C:\Users\zangp\AppData\Local\Temp\claude\6c506c6ee49e0179\61d17668-b4f8-44d3-baf2-a7c284d9aa7c\scratchpad\frases.mjs`.
>
> **O crédito da tela.** Na voz, o dono só aparece quando o fato é citação ou é contestável (a regra do vídeo 5 em diante, pelo "engessado"
> do Lucas).
> - Toda frase com fato cujo dono não é dito nela traz o "Crédito", no formato da identidade §7: `Source: <instituição>, <ano>`, e o de mídia
>   `<autor> / <acervo> · <licença>`.
> - Quem fecha o texto é o `redator-de-tela`, e o crédito vai na faixa de crédito, a 56 px (identidade §4).
> - Alguns números que a pauta queria na tela não têm linha na tabela final. Eles estão marcados "sem linha na tabela final" e passam pelo
>   verificador junto com o redator.

## A espinha

- **Pergunta (na fala):** "So why pay for empty space, when the United States can already call on Canada in a flood?" É a f8, aos ≈ 0:48
  (5 % do vídeo), a última frase antes da assinatura. Ela não volta no fecho.
- **Pergunta longa (a que o corpo paga, não dita):** por que os EUA pagam ao Canadá, desde a cheia de 2025, para manter vazia uma parte de um
  lago canadense, se o tratado de 1964 já obriga o Canadá a ajudar numa cheia grande quando os EUA pedirem?
- **Tese:**
  - **Por que o espaço fica no Canadá.** O rio é quase todo americano em terra: uns 15 % da bacia ficam no Canadá. Mesmo assim, uma parte
    grande da água desce pela Colúmbia Britânica (no medidor canadense já passam uns 39 % do que passa em The Dalles), quase toda num degelo
    de três meses. Os lugares de guardar uma cheia estão no Canadá.
  - **O que acabou em 2024.** Por 60 anos, de 1964 a setembro de 2024, os EUA pagaram por esse espaço de uma vez. A promessa que sobrou, a
    ajuda "on call", não diz de que tamanho é a cheia. Nos estudos da revisão, um lado espera a chamada entre 450 e 650 mil pés cúbicos por
    segundo, e o outro só a 600 mil. Desde 2009, o rio já parou seis primaveras nesse vão.
  - **O que a lei compra.** A lei de janeiro de 2025 paga por 3,6 milhões de acre-pés por ano atrás da barragem do Arrow, inclusive o que o
    Canadá pode não ser obrigado a dar. O tratado é a promessa, o acordo é o espaço, e o que se compra é certeza. Essa última frase é do
    canal e está pendente do Lucas.
  - **O que o Canadá tem na mão.** O Canadá não desliga o rio: os lagos do tratado guardam de semanas a meses dele. Mas decide, em acordo
    com os EUA, quando uma parte grande da água desce. O que ele tem é um calendário, e os EUA pagam para deixar uma página dele marcada.
  - **O custo e o relógio.** O espaço custou gente: 2.300 deslocados, a consulta que a própria província chama de inadequada, e os Sinixt.
    Cada lado faz a conta do outro de um jeito, e o relógio acaba na primavera de 2027.
- **O fio:** a água desce e o dinheiro sobe (o briefing). O espectador põe o dedo no mapa e segue o rio da nascente à fronteira (f10, f18).
  Depois lê dois medidores (f26–f33), olha o medidor sem linha (f85) e o ano do rio (f128–f131). No fim, fica na margem do lago no inverno
  (f137) e assiste a um ano dele (o fecho).
- **O que a tese não diz** (pauta §5; laudo de fatos; cético):
  - que o tratado acabou, expirou ou foi cancelado (ele continua em vigor), e Trump fica fora da voz e da tela;
  - que o Canadá controla a água dos EUA ou "produz" 39 % do rio: o 39 % é do medidor de Birchbank, que inclui água de Montana e Idaho;
  - que o gatilho do tratado é 600 mil, que é só a suposição do lado canadense nos estudos;
  - que o rio nunca passou de 600 mil desde 1974: o certo é "since 2009", porque de 1974 a 2008 o USGS só dá médias diárias;
  - que sem o pagamento Portland inundaria, ou que o rio passaria de 600 mil a cada dois anos;
  - que os EUA pagam por nada, que o Canadá cobra, ou que o Canadá se recusou a ajudar;
  - que as barragens achataram o rio por causa do pagamento de 2025, ou que os três lagos seguram o rio inteiro por seis semanas;
  - os 64,4 milhões ao lado dos 37,6 por ano sem a inflação, "half empty", o pagamento "em 1964" e "the US stopped paying";
  - que o tratado novo foi finalizado (ou que "nunca será"), que o pagamento vai até 2044, ou qualquer previsão;
  - "unfair", "bad deal", "overpays" e qualquer juízo de um lado;
  - que os Sinixt estão extintos, ou que a declaração de 1956 se liga às barragens;
  - "the treaty dams killed the salmon", imagem de casa queimando e trilha de suspense no ato 4.
- **Promessa (na fala):** o gancho promete cinco coisas, sem dizer por que se paga (K3):
  - o lago esvaziado de propósito e o pagamento por ele (f1–f2): o título se paga de 0:00 a 0:18, e a miniatura "$37.6M A YEAR", aos ≈ 0:14;
  - o paradoxo do mapa (f3–f4): o rio é quase todo americano, mas a água desce pela Colúmbia Britânica;
  - o relógio (f5–f6): o acordo acaba depois da primavera de 2027, e as conversas estão pausadas desde março de 2025;
  - a virada (f7): o tratado já promete a ajuda do Canadá;
  - a pergunta (f8).
- **Payoff (na fala):** o p3, de f84 a f114.
  - O tratado não diz de que tamanho é a cheia (f84–f85).
  - O vão entre os dois números (f88–f92), e o rio medido dentro dele (f94–f96).
  - A lei que paga pelo que o Canadá pode não ser obrigado a dar (f98–f101), e a garantia (f103).
  - A resposta, com o tratado e o acordo lado a lado: "The treaty is the promise. The deal is the room. What the United States is buying is
    certainty." (f112–f114, ≈ 9:07–9:14, 59 %).
  - A imagem: "What Canada has in its hands, then, is a calendar." (f134, ≈ 10:49, 70 %).
  - O fecho encena um ano do lago, sem repetir a pergunta nem responder em lista. A neve está parada e o lago, no ponto mais baixo; vem "The
    room is there, and the flood isn't." (f183), o degelo, a cheia que fica no vale (f186) e o relógio datado (f188–f189). O cético conferiu
    que ele não repete os fechos dos vídeos 5 e 6.

## Livro-razão da promessa

| Promessa | Onde se paga no texto |
|---|---|
| f1 "part of the Arrow Lakes Reservoir … is emptied on purpose" (o título) | p2, f64 (Arrow, "the lake at the start of this story"). p3, f99 (os 3,6 milhões de acre-pés atrás da barragem do Arrow) e f102–f103 (o lago baixa de qualquer jeito, e paga-se a garantia, "kept empty for the flood"). p4, f137–f140 (a faixa de chão, "Part of that strip is the room"). Fecho, f181 e f183. |
| f2 "the United States pays Canada for that empty space: 37.6 million dollars a year" (o título e a miniatura) | p3, f98 (a lei de janeiro de 2025), f99, f107–f108 (a escala) e f135 (a página do calendário). p5, f158 ("pay by the year") e f165 (o pagamento é federal). Fecho, f188. |
| f3–f4 "only about 15 percent of the land it drains lies in Canada. A much bigger share of its water comes down through British Columbia." | p1, f25–f33 (os dois medidores, os 39 %, o eco do 15 e do 39) e f36–f40 (a BC Hydro: a necessidade e o espaço). |
| f5 "a deal that runs out after the spring of 2027, unless both countries agree on something new" | p5, f175–f177 (até três cheias, a de 2027 é a terceira; a lei até o fim de agosto de 2027; o S. 4949). Fecho, f189. |
| f6 "Talks to update the treaty between them have been paused since March 2025." | p5, f169–f173 (o acordo em princípio, não finalizado; a pausa anunciada pela BC; ainda pausadas em agosto de 2026). |
| f7 "that treaty already promises Canada's help in a big flood, if the United States asks" | p3, f80–f83 (os 60 anos acabaram, a promessa não; "on call") e f109. |
| f8 "So why pay for empty space…?" | p3 inteiro, até f114 (a resposta) e f134–f135 (o calendário). Não se repete no fecho. |
| f9 "the lake that waits for the flood" (a assinatura) | Fecho, f183 ("The room is there, and the flood isn't.") e f188 ("pays to have that room waiting"). |
| f10 "Put your finger on the map where the Columbia River begins." | f13 (o Columbia Lake) e f18 ("Keep your finger moving…"). |
| f34–f35 "who holds the tap. Hold that thought; we'll measure it." | p3, f121–f126 (o que os lagos guardam; "So Canada can't turn the Columbia off."), f127–f131 (o ano do rio mudado de lugar) e f132–f135 (a operação acordada; o calendário). |
| f43 "And in 1948, it did." | p2, f44–f47. |
| f66 "The strange part starts when those 60 years run out." | p3, f80–f83. |
| f75 "Back to that empty space, then." | p3, f76–f103. |
| f115 "Certainty about what, exactly?" | f116–f135. |
| f136 "That room came from somewhere." | p4 inteiro. |
| f154 "What it's worth depends on who is counting." | p5, f155–f163 (o que cada lado cedeu; as duas contas). |
| f164 "it's fair to ask who that is" | f165–f167 (o pagamento federal; as três empresas). |
| f174 "That leaves the clock." | f175–f178. |

## As partes

Os tempos são os da narração (`narracao.json`), sem a vinheta, com a cauda de 20 s no fim; a porcentagem é sobre 15:28,0. O regente
recalcula pelo `words.json`. As palavras são contadas por espaço (a soma bate as 2.696 do portão; no gancho o portão conta 170, porque
parte o "37.6").

| Parte | Função | Frases | Palavras | Tempo (narração) | % do vídeo | O que o espectador entende ao fim |
|---|---|---|---:|---|---|---|
| gancho | os cinco tempos e a assinatura | f1–f9 | 169 | 0:00,0–0:59,2 | 0–6 % | Parte do Arrow é esvaziada todo ano antes do degelo, e os EUA pagam ao Canadá 37,6 milhões por ano por esse espaço desde a cheia de 2025. O rio é quase todo americano, mas muita água desce pela Colúmbia Britânica. O acordo é temporário (até depois da primavera de 2027), e as conversas sobre o tratado estão pausadas desde março de 2025. O tratado já promete a ajuda do Canadá numa cheia. Então, por que pagar? |
| p1 · The river that starts up north | o rio, a neve, a medida, a troca | f10–f43 | 456 | 0:59,4–3:24,4 | 6–22 % | O Columbia nasce num lago da Colúmbia Britânica, sobe ao noroeste, faz a curva (hoje debaixo de um lago) e desce. Um terço ou mais do caminho fica no Canadá. A parte canadense da bacia é montanha e neve, e uns 60 % do escoamento chegam de maio a julho. No medidor canadense já passam uns 39 % do que passa em The Dalles (conta do canal, 87 anos). A necessidade está nos EUA, e o espaço no Canadá. Antes das grandes barragens, junho levava umas dez vezes fevereiro, e em 1948 o rio inundou. |
| p2 · The flood and the bargain | a cheia e o trato de 60 anos | f44–f73 | 486 | 3:24,7–6:04,9 | 22–39 % | 1948: de Trail a Vanport; Vanport destruída em uma hora; pelo menos 51 mortos na cheia inteira. Pega-se a cheia rio acima, num vale com barragem, e os lugares ficavam no Canadá. Houve propostas opostas (Libby; o desvio) e depois o tratado de 1964: três barragens no Canadá e Libby nos EUA, com o lago entrando 42 milhas no Canadá. Os EUA pagaram 64,4 milhões de uma vez por 60 anos de espaço (metade do dano evitado), quase tudo por Arrow. Metade da energia a mais é do Canadá, em eletricidade, e a Colúmbia Britânica vendeu os primeiros 30 anos por ~254 milhões. Por 60 anos foi espaço por dinheiro e água guardada por energia. |
| a inscrição | a frase de inscrição e o re-gancho | f74–f75 | 16 | 6:05,1–6:10,7 | 39–40 % | Inscreva-se; de volta ao espaço vazio. |
| p3 · The trigger and the tap | o centro do vídeo: o vão, a lei, a certeza, o calendário | f76–f135 | 832 | 6:11,0–10:57,4 | 40–71 % | Não é só um seguro. Em setembro de 2024 os 60 anos pagos acabaram, mas a promessa não: o Canadá ajuda quando chamado, e os EUA pagam o custo. O tratado não diz de que tamanho é a cheia, e os estudos de cada lado divergem (450–650 mil contra 600 mil), deixando um vão. O rio antigo passou de 600 mil em 40 de 89 anos; desde 2009, nunca, e seis primaveras pararam no vão. A lei de janeiro de 2025 paga 3,6 milhões de acre-pés por ano em Keenleyside, inclusive o que o Canadá pode não ser obrigado a dar. O lago baixa de qualquer jeito, e o que se paga é a garantia. A alternativa custa 4–34 milhões por chamada, ou 40–150 milhões por ano. O tratado é a promessa, o acordo é o espaço, e compra-se certeza. O Canadá não desliga o rio: sair leva dez anos de aviso, e os três lagos guardam ~6 semanas do rio em The Dalles (~3,5 meses no medidor canadense). O ano do rio mudou de forma, não de tamanho, e a operação é acordada pelos dois. O Canadá tem um calendário, e os EUA pagam por uma página dele. |
| p4 · What the room was before | o custo do espaço | f136–f152 | 240 | 10:57,7–12:21,6 | 71–80 % | A faixa de chão exposta no inverno é, em parte, o espaço pago. Houve ~2.300 deslocados e mais de uma dúzia de comunidades alagadas: Edgewood e Burton foram mudadas, Renata não existe mais, e uma vila foi para debaixo do Kinbasket. A consulta foi, nas palavras da própria província, "inadequate to non-existent by today's standards". A banda dos Sinixt foi declarada extinta em 1956, e em 2021 a Suprema Corte do Canadá reconheceu uma sucessora deles, de Washington, como povo aborígine do Canadá. O Grand Coulee, de 1941, já tinha cortado o salmão no alto Columbia. |
| p5 · What each side puts on the scale | a balança, quem paga e o relógio | f153–f178 | 338 | 12:21,9–14:20,8 | 80–93 % | O Canadá aceitou uma parte menor (mais de um terço a menos), e os EUA, pagar por ano. Cada lado faz a conta do outro: as agências americanas dizem que o fim do tratado daria mais receita aos EUA; a Colúmbia Britânica, que o rio previsível vale mais que a parte que vai ao norte. O espaço é pago pelo governo federal; a parte do Canadá cai em parte sobre empresas, e três delas foram à Justiça e fizeram acordo em setembro de 2026. Há um acordo em princípio de um tratado novo, não finalizado, com três Primeiras Nações na equipe canadense. As conversas estão pausadas desde março de 2025 (ainda em agosto de 2026). O acordo cobre até três cheias, e a de 2027 é a terceira; a lei vai até o fim de agosto de 2027, e um projeto do Senado a levaria a 2029. O tratado continua em vigor. |
| fecho | uma volta do ano do lago | f179–f189 | 159 | 14:21,0–15:08,0 (a cauda até 15:28,0) | 93–100 % | A neve guarda a água; o lago espera no ponto mais baixo; o degelo o enche; uma parte da cheia que chegaria a Portland fica no vale. Por ora, os EUA pagam para o espaço esperar, e a primavera de 2027 é o limite deste acordo. |

Os 44 pedidos à voz vão de 5,4 s (o trecho 5, a assinatura, e o 36) a 43,4 s (o trecho 21, o vão). O ato mais longo é o p3, com 4:46 de
fala em 12 trechos.

## As chamadas (CTA), pela regra de `marca/cta.md`

- **Inscrição (falada, de 35 % a 60 %, nunca no 1º minuto).** Está no parágrafo 19, um parágrafo só dela, entre o ato 2 e o ato 3: "If
  you're enjoying the trip downriver, subscribe to Alpha Point. Back to that empty space, then."
  - **O tempo.** Na narração, o trecho 19 vai de **6:05,1 a 6:10,7**, a 39,3 % do vídeo (a janela é de 5:24,8 a 9:16,8). O portão estimava
    6:16,9 (40,3 %), e o pedido da Sala dizia "~6:15": vale o `narracao.json` e, depois, o `words.json`.
  - **A peça.** `inscricao.html` dura 4,5 s e entra quando f73 termina (`depois_de`: "caught part of it", ≈ 6:04,9). Ela sai ≈ 6:09,4,
    dentro do re-gancho.
  - **O que fica por baixo.** A cena de f73, calma: o corte do lago num ciclo lento com a câmera parada, ou o mapa dos quatro lagos em repouso
    (pauta §7, item 4). Nunca um número-herói, uma folha sendo lida ou a viagem de câmera (cta §5). A frase-chave do ato, "For 60 years,
    that was the bargain…" (f72), fica uma frase atrás.
  - O regente grava a peça em `regencia.json` › `_chamadas`.
- **Comentário (só de tela, perto do fim).** A proposta do roteirista (`escrita-notas.md` §2), no relógio da narração:
  - **O lugar.** Sobre f185, "Through May and June, the creeks fill, the river rises, and the lake climbs back up its shore until the bare
    ground is gone.", de ≈ 14:40,4 a 14:46,4 (6 s). A peça sai antes de f186 ("Part of a flood that would have reached Portland…", a partir
    de 14:47,5) e ≈ 21 s antes da cauda (15:08,0). O último fato novo é o relógio do ato 5 (f178, até 14:20,8), e a pergunta do título já
    foi respondida (f114).
  - **A pergunta.** O roteirista mediu três com o `_perguntas.mjs`, todas com corpo 176 e 2 linhas:
    - "Where does your nearest river begin?", 6 s, **com aviso** de quebra que parte um sintagma ("nearest / river");
    - "Where does the river nearest you begin?", 6 s, sem aviso;
    - "Which river would you follow to its source?", 6,5 s, sem aviso.

    As três se ligam ao "Put your finger on the map where the Columbia River begins" (f10). Nenhuma pede juízo sobre o acordo, e assim deve
    ficar: "who's right?" entre os dois países seria tomar partido (cta §7; voz §2). Quem fecha a pergunta é o `redator-de-tela`.
  - **O cuidado.** f185 traz a linha do nível subindo. O movimento tem de ser lento, e a peça vai `?lugar=cima` se a linha ocupar o terço de
    baixo (cta §5).
  - O ouvinte do r1 preferia a peça depois da última frase. Isso cai na cauda, e a tela final só se usa quando nenhum trecho antes dela
    cumpre o §5, o que volta ao Lucas (cta §6). Aqui há trecho.
- **Onde NÃO:**
  - o gancho e o 1º minuto;
  - o ato 1, f26–f33 (os medidores e a conta) e f41;
  - o ato 2, f44–f47 (a cheia), f55–f59 (o tratado e o mapa das barragens) e f62–f64 (a folha do pagamento);
  - o ato 3, de f84 a f114 (o medidor, os picos, a folha da lei, a balança, a resposta), f117–f119 (os cartões da CBC e do ministro) e
    f122–f131 (as réguas e o ano do rio);
  - o ato 4, f146 (a citação da província) e f147–f150 (os Sinixt e a Corte);
  - o ato 5, f157–f162 (a balança) e f175–f178 (o relógio);
  - o fecho, f186–f189.

## O destino das cifras

No máximo cinco cifras ficam para a memória, ditas e retomadas onde pagam. As outras são ditas uma vez, vão só para a tela com a fonte e o
ano, ou ficam fora. Datas e durações (os "60 years") não contam como cifra. Na voz, só milhas e pés cúbicos por segundo; os únicos decimais
da voz são 37.6, 64.4 e 3.6. O número exato vai à tela, e o arredondado com o hedge, à voz.

**Narradas, para a memória (5):**
1. **"37.6 million dollars a year, adjusted for inflation"** (o pagamento): f2 e f107 ("37.6 million a year"). F003, F004, F207. Na tela:
   "$37.6M A YEAR · STARTING VALUE, INDEXED TO INFLATION · SINCE THE 2025 FLOOD SEASON", com o crédito `Source: U.S. Public Law 118-272;
   BC Hydro`. É o número da miniatura.
2. **"about 15 percent"** (a bacia no Canadá): f3 e f33. F005, F192. Na tela: "≈ 15% OF THE BASIN", com `Source: USACE & BPA, 2013` (a
   fonte diz "only about 15 percent of the 259,500 square miles").
3. **"about 39 percent"** (o que passa em Birchbank do que passa em The Dalles, 87 anos): f31 e f33. F024, F193. Na tela: "≈ 39%"
   (39,3 %), com `Alpha Point calculation: Water Survey of Canada (station 08NE049), USGS (14105700)` e a linha da licença do WSC.
4. **"between 450,000 and 600,000"** (o vão): f88, f89 e f91. O 650,000 é dito uma vez, em f88. F072, F073, F202, F203. Na tela: o medidor,
   com "450,000–650,000 CFS · U.S. ENTITY STUDIES", "600,000 CFS · CANADIAN ENTITY ASSUMPTION" e "THE GAP", com `Source: Congressional
   Research Service, 2024`.
5. **"the spring of 2027"** (o relógio): f5, f175 e f189. F007, F162, F171. Na tela: "LAST FLOOD SEASON THE DEAL CAN COVER · SPRING 2027"
   e, com o dono, "ENDS JULY 31, 2027 AT THE LATEST".

**Narradas uma vez:**
- "a third or more" do caminho (f18; F018);
- "About 60 percent" em maio, junho e julho (f23; F020);
- "87 years" (f30; F023);
- "about ten times" (f41; F029);
- "at least 51" mortos e "tens of thousands" de desabrigados (f47; F036, F037);
- "42 miles" (f59; F046);
- "64.4 million dollars" (f62; F048);
- "half" do dano evitado (f63; F050) e "half of the extra power" (f69; F054);
- "the first 30 years" por "about 254 million dollars" (f70; F056);
- "40 of 89 years" (f94; F075, F204) e "six springs" (f96; F077);
- "3.6 million acre-feet" (f99; F079);
- "between 4 and 34 million dollars per request" (f105; F087) e "40 to 150 million dollars a year" (f106; F089);
- "ten years' written notice" (f120; F100);
- "about six weeks" e "closer to three and a half months" (f122–f123; F102, F105);
- "about twice" (f129; F109);
- "about 2,300" e "more than a dozen" (f142; F121);
- "more than a third" (f157; F220, F221);
- "Three of them" (f167; F224) e "three First Nations" (f171; F159);
- "up to three flood seasons" (f175; F162).

As datas: 2025 (a cheia), março de 2025 (f6, f118 e f172), 1948, setembro de 1964, setembro de 2024, de 1879 a 1967, 2009, janeiro de 2025,
1956, 1941, setembro de 2026, agosto de 2026, o fim de agosto de 2027, novembro de 2026 e 2029.

**Só na tela, decididas** (lista D; o laudo de fatos, "Para a tela"):
- **87 YEARS** (1938–2024), não 88 (f30);
- **−37%**, com `U.S. STATE DEPARTMENT, NOV. 25, 2024` (f157);
- **TYPICALLY $110–400 MILLION A YEAR**, da BC Hydro (06/2026), **sem "US$"** (f162);
- **$180–280 MILLION A YEAR**, da US Entity (junho de 2012), pelo CRS (f160);
- **1974–2008: DAILY AVERAGES** (f96);
- o 39 % como conta do canal (f31–f33);
- **LAKES TRIBE** (f150).

**Só na tela, propostas, com linha na tabela:**
- Birchbank "12 MI NORTH OF THE BORDER" (F021);
- 498 de 1.243 mi no Canadá (USGS, 1981; F018);
- 218 mi ao noroeste e 280 mi ao sul (F015, F016);
- junho 216,620 cfs e fevereiro 20,832 cfs (1938–1967), "≈ 2×" depois, a média de 2.026 → 2.001 m³/s, maio–julho de 58,8 % → 31,6 % e
  dezembro–fevereiro de 7,8 % → 25,8 % (F108–F112);
- 38,500 desabrigados, da Cruz Vermelha, no relatório do USGS (F037; um número só, com o dono);
- "SIGNED JAN. 17, 1961 · IN FORCE SEPT. 16, 1964" (F041) e o encontro em Blaine e Surrey (F042);
- 1951 na proposta de Libby (F039);
- mais de 200.000 quilowatts-ano por ano no Canadá (Protocolo, F047);
- Arrow com 52,1 dos 64,4 milhões (F051);
- 15,5 milhões de acre-pés (Art. II(1), F104: Mica 7,0, Arrow 7,1, Duncan 1,4, pela pauta §4.2) e 41,5 dias / 110 dias (F102, F105);
- "SEPT. 16, 2024" (F066);
- os seis picos no vão (2010, 2011, 2012, 2017, 2018 e 2020; o maior, 587,000 em 2012), 1948 (1,010,000) e 1894 (1,240,000)
  (`fatos-medidas.txt`);
- "APPROVED JAN. 4, 2025" (F078) e "3,600,000 ACRE-FEET" em Hugh Keenleyside (F079);
- a faixa licenciada do Arrow, de 1,377.9 a 1,444 pés (F117), e os níveis de 2017–18: 1,401.4 pés em 04/02/2017, 1,425 no fim de maio e
  1,442 no fim de junho (F116, F167, F168);
- "R. v. DESAUTEL · 2021 SCC 17 · APR. 23, 2021";
- 27,5 % e 25 % das PUDs (F152, F223) e as datas delas (junho de 2024, setembro de 2024, 25/09/2026);
- "AGREEMENT IN PRINCIPLE · JULY 11, 2024" (F154);
- Ktunaxa, Syilx-Okanagan e Secwépemc (F158);
- "TALKS PAUSED · MAR. 11, 2025" (F156) e "STILL PAUSED · AUG. 17, 2026" (F160);
- 31/07/2027 (F162), 31/08/2027 (F163) e o S. 4949 no calendário desde 15/07/2026 (F230).

**Só na tela, sem linha na tabela final** (da pauta ou de `fatos-c.md`; o verificador confere com o redator, ou ficam fora):
- 30/05/1948 em Vanport (fatos-c, item 8);
- US$ 253.929.534,25, a venda de 1964 (pauta §4.2 e §6);
- 1.141 → 550 MW, a curva da parte do Canadá (pauta §6, ato 5);
- 110.000 ha (pauta §4.4);
- US$ 29,9 milhões, o acordo das PUDs (pauta §4.5; alerta `[puds]`);
- 21 Sinixt em 1902 e uma em 1930, na folha do §6 (pauta §4.4; a F130 só traz os 21).

**Fora da voz e da tela:**
- o 38 % da USACE + BPA (F181, F194): a pauta (§4.1) o deixava ir à tela com o dono, mas os leitores pediram um número só para a água do
  Canadá. A proposta é deixá-lo fora; decide o redator, com a Sala;
- o 54,7 % do medidor da fronteira;
- os 15,5 MAF do desvio canadense (K7);
- o ano de conclusão de Libby;
- os 15 mortos de Vanport do The Hidden Provinces;
- os 44 % da hidrelétrica (EIA) e qualquer "40 %";
- os 4,0 MAF de flexibilidade do AIP, os 8,45 e 8,95 MAF e o 1/2 do espaço de Arrow;
- o "~US$ 120 mi" da página da BC;
- o "bargaining chip" (é paráfrase);
- a data do estudo da BC (não lida);
- Trump, Carney e Eby;
- os "26 years" do salmão.

## Os créditos da tela

**Os de licença dos dados** (`pautas/rio-columbia/_trabalho/fatos-c.md`, itens 9a e 9b, lidos em 09/11/2026):
- **Water Survey of Canada (Birchbank, 08NE049), pela OGL–Canada.**
  - O crédito: "Data: Environment and Climate Change Canada, Water Survey of Canada (station 08NE049). Contains information licensed under
    the Open Government Licence – Canada."
  - O link da licença (https://open.canada.ca/en/open-government-licence-canada) vai na descrição.
  - O mesmo crédito atende a licença de uso final da ECCC (v2.1.1, de agosto de 2026).
  - O nome, o brasão ou o logo da ECCC não entram como aval ("official status").
  - Vale em toda cena com número de Birchbank: f28–f33, f41, f123 e f128–f131.
- **HydroSHEDS / HydroBASINS.**
  - Só entram na cena se a descrição levar o texto do Exhibit B: o "© World Wildlife Fund, Inc. (2006-2022)", o aviso de "no warranty" e a
    lista dos detentores.
  - A descrição leva também a citação científica: Lehner e Grill (2013) para o HydroBASINS, e Lehner, Verdin e Jarvis (2008).
  - O dado não se distribui sozinho.
  - A pauta (§10.1, item 1) prefere a bacia do Freshwater Atlas da BC (Open Government Licence – BC) e do Watershed Boundary Dataset do USGS
    (domínio público, a conferir). Quem escolhe é o `pesquisa-geo`.
- **USGS, The Dalles (14105700):** "USGS annual peak streamflow, The Dalles (14105700). 1974–2008: daily averages." (pauta §10.1).
- **O mapa:**
  - o crédito da MapTiler em toda cena de mapa (pauta §8);
  - "© OpenStreetMap contributors" na tela, e a URL openstreetmap.org/copyright na descrição, em toda cena com geometria do OSM (o
    Koocanusa, se vier de lá).

**Os da voz que a tela completa:**
- **o pagamento:** `Source: U.S. Public Law 118-272; BC Hydro`, com "starting value, indexed to inflation" (pauta §8; K9);
- **as datas do acordo:** `Source: US diplomatic note, Nov. 22, 2024; Government of British Columbia`;
- **a conta do canal:** `Alpha Point calculation: Water Survey of Canada (station 08NE049), USGS (14105700)` (a forma curta da lista é
  `Alpha Point calculation: Water Survey of Canada, USGS`);
- **o 37 %:** `U.S. STATE DEPARTMENT, NOV. 25, 2024`, como o CRS o resume;
- **as duas faixas do ato 5:** pelo CRS (a de 2012) e pela BC Hydro de junho de 2026 (a de 110–400, sem moeda).

**Os das imagens:** nenhuma foi buscada (pauta §6). Cada uma leva `<autor> / <acervo> · <licença>`, com o veredito do
`conferente-de-midia` antes da cena e o aviso do ano se a foto for de outro ano (identidade §6).

## Decisões de escrita

O que o r1 escolheu, e o que o r2 mudou, com o porquê, está em `_trabalho/escrita-notas.md` e `escrita-notas-r2.md`. As oito trocas do
cético estão em `qc-roteiro/cetico-r2.laudo.md`. As que mais importam a quem monta a cena:
1. **O gancho está no teto** (170 palavras pelo portão, com o "But" na palavra 48) e não ganha palavra até a assinatura.
   - O título se paga em f1–f2, e a miniatura, aos ≈ 0:14.
   - Nada no gancho diz por que se paga (K3).
   - As imagens trocam a cada 3–6 s até a vinheta, com três linguagens e o lugar em duas imagens reais (pauta §6).
2. **Um número só para a água do Canadá**: o 39 %, medido em Birchbank e dito como conta do canal (f30–f32), sempre com o lugar ("at the
   Canadian gauge", C2). O par do eco (f33) tem dois donos. O 38 % da USACE + BPA não vai à voz; a pauta (§4.1) e o briefing o deixavam ir à tela com o
   dono, e a proposta deste dossiê é deixá-lo fora, como pediram os leitores (um número só). Decide o redator, com a Sala.
3. **O tratado e o acordo têm nomes fixos**, e a tela usa os mesmos.
   - "the treaty": 1964, em vigor, a promessa "on call".
   - "the deal": o interino de 22/11/2024, até três cheias, sendo a de 2027 a última.
   - "the bargain": o trato de 60 anos, de 1964 a 2024. "the paid years": esses 60 anos.
   - "The treaty is the promise. The deal is the room." (f112–f113) põe os dois lado a lado.
4. **Os nomes que a voz dá**: "on call" (f83) e "the gap" (f92, o intervalo entre 450 e 600 mil). A tela os escreve iguais.
5. **A fonte na voz.** Ditos na voz:
   - a BC Hydro (f36, f133), o USGS (f46) e o CRS (f54, f90);
   - "the treaty's own count" (f59);
   - as agências americanas do tratado (f105, f160) e a Colúmbia Britânica (f106, f161);
   - a CBC News e o ministro de Energia da Colúmbia Britânica (f117–f119);
   - o governo da Colúmbia Britânica (f142, f146, f172);
   - a Suprema Corte do Canadá (f149) e o Congresso (f98, f165);
   - a Canadian Geographic (f173) e um projeto do Senado (f177);
   - o próprio canal ("That's our own calculation", f32; "So we looked at the river itself", f93).

   O resto vai ao crédito, frase por frase, abaixo.
6. **A inscrição tem um parágrafo só dela** (p19), depois da frase calma f73 e uma frase depois da frase-chave do ato (f72). O comentário é
   só de tela.

## De onde vem cada frase

"Mapa" diz o que a frase pede à tela quando a fala é espacial: a região falada sempre demarcada (identidade §5). O que não é espacial (o
tratado, a lei, o acórdão, as contas) vai como folha recriada, cartão, dado ou ilustração, nunca como mapa forçado. Quem constrói são o
`editor-de-arte` e o `mapista`. O ilustrador com a física é método do `editor-de-arte` (a roupa dele, §5). O `conferente-de-midia` julga
toda imagem antes da cena.

**O mapa é sempre o mesmo** (pauta §6):
- satélite, com relevo 3D só com o ok do Lucas para a MapTiler deste vídeo, que `sala/mapas-e-maptiler.md` ainda não registra;
- a bacia demarcada, com a parte canadense acesa em `--destaque`, e a fronteira;
- os países só com o nome escrito, **sem bandeira**;
- o rio em azul, correndo;
- os três lagos do tratado (Kinbasket, Arrow e Duncan) e o Koocanusa marcados;
- Birchbank e The Dalles como pinos de medida.

"Ilustração" é a animação desenhada no traço de engenheiro, de preferência sobre o mapa (identidade §5, "Sobre o mapa, mais vezes"). "Dado"
é o gráfico com a fonte e o ano. "Folha" é o documento recriado, com o dono.

**Os quatro fios que atravessam o vídeo:**
- **O CORTE DO LAGO** (a peça da pauta §6): o Arrow em corte, com a linha do nível que desce no inverno e sobe no verão, e a faixa de cima
  tracejada, que é o espaço reservado.
  - Aparece no gancho (f2, f8), no ato 2 (f48–f50, f65, f73), no ato 3 (f76, f99, f102–f103, f111, f135), no ato 4 (f138–f140), no ato 5
    (f175) e no fecho (f183, f185, f187–f188).
  - **A faixa nunca leva altura em pés nem fração do lago.** A altura do espaço pago não se leu (pauta §8, miniatura 2). Os 3,6 MAF são parte
    (51 %) dos 7,1 MAF do tratado em Arrow (F119), e por isso nada de "half".
  - Os níveis reais da BC Hydro podem dar a forma da linha: 1,401.4 pés em 04/02/2017, 1,425 no fim de maio e 1,442 no fim de junho, e a
    faixa licenciada de 1,377.9 a 1,444 pés. A série inteira do Arrow ainda está a medir (pauta §10.1, item 6), e a licença da BC Hydro,
    a ler.
- **O MEDIDOR E OS PICOS** (atos 1 e 3):
  - Birchbank e The Dalles como pinos, e a medida do canal (87 anos, ≈ 39 %);
  - o ano do rio antes e depois (1938–1967 contra 1974–2025);
  - o medidor de The Dalles, com a faixa de 450 a 650 mil, a linha de 600 mil e "the gap";
  - os picos de 1879 a 2025, um ponto por ano, com os de 1974–2008 em outra marca.
- **A RÉGUA DO TEMPO** (gancho e atos 2, 3 e 5):
  - os 60 anos, de 1964 a 2024;
  - o interino, de 22/11/2024 a no máximo 31/07/2027;
  - a linha do ato 5: jul/2024, set/2024, nov/2024, jan/2025, mar/2025, jun/2026, a primavera de 2027 e 31/08/2027.
- **A BALANÇA** (ato 3, f104–f108; ato 5, f154–f163): as contas lado a lado, cada uma com o dono, a data (ou "sem data", a da Colúmbia
  Britânica) e a unidade (por chamada, por ano), sem ponteiro que diga quem tem razão.

### Gancho (f1–f9 · 0:00–0:59 · 169 palavras)

- **f1** (p1.1 · 0:00–0:08) "Every year, before the spring snowmelt, part of the Arrow Lakes Reservoir, on the Columbia River in British Columbia, is emptied on purpose."
  - Ids: F001 (BC Hydro, Columbia River Operations Summary, 2018 (F15): "Since then, the reservoir has been drafting to meet Treaty flood control requirements."); F002 (BC, AIP Public Description, 30/08/2024 (L4): "Currently, Canada provides 8.95 million acre-feet (MAF) of dedicated, pre-planned FRM through all the Canadian CRT projects").
  - Imagem real (a abertura, 0–3 s): o Arrow baixo, com a margem larga exposta, de preferência no fim do inverno, em movimento. O drone 4K vem só pela caça, com o sim do Lucas à lista (pauta §6, imagem 1). Sem a caça, a foto do Arrow baixo (1-B: Nakusp ou Fauquier, no Commons, ou da BC Hydro com a licença lida), com o empurrão lento. O conferente julga antes da cena, e a foto de outro ano leva o aviso do ano (identidade §6).
  - Mapa (3–6 s): o globo voa até o noroeste do Pacífico, a fronteira aparece e o Arrow acende com o anel (pauta §8), com o rótulo "ARROW LAKES RESERVOIR · BRITISH COLUMBIA". O crédito `Source: BC Hydro, 2018` (o rebaixamento para a cheia do tratado) e o da foto.
  - O alerta do portão, a 1ª frase sem número, está decidido: a imagem é o lago esvaziado, e o número vem em f2 (`escrita-notas.md` §3).
- **f2** (p1.2 · 0:08–0:18) "And starting with the 2025 flood season, the United States pays Canada for that empty space: 37.6 million dollars a year, adjusted for inflation."
  - Ids: F003 (Public Law 118-272, sec. 1152 (L11): "there is authorized to be appropriated $37,600,000 for fiscal year 2025 and $37,600,000, adjusted for inflation"); F004 (PNWA, 08/05/2026 (L2): "The first payment started at $37.6 million in fiscal year 2025").
  - Ilustração (≈ 0:08–0:18): O CORTE DO LAGO, no traço de engenheiro. A linha d'água fica baixa, e a faixa de cima, tracejada, esvazia. "$37.6M A YEAR" conta junto com a voz (≈ 0:14), com "SINCE THE 2025 FLOOD SEASON" e "STARTING VALUE, INDEXED TO INFLATION", o crédito que a miniatura exige (K9). Crédito `Source: U.S. Public Law 118-272; BC Hydro`.
  - A faixa vai sem altura em pés e sem fração do lago: a altura do espaço pago não se leu (pauta §8, miniatura 2), e "half empty" está proibido (§5). Esta frase paga o título e a miniatura "$37.6M A YEAR".
- **f3** (p2.1 · 0:19–0:24) "But this river is mostly American: only about 15 percent of the land it drains lies in Canada."
  - Ids: F005 (USACE + BPA, History and 2014/2024 Review (F3, L5): "only about 15 percent of the 259,500 square miles of the Columbia River Basin is actually located in Canada").
  - Mapa: a bacia inteira demarcada, com a geometria do `pesquisa-geo` (pauta §10.1, item 1), e a fronteira. Os países levam só o nome escrito, sem bandeira. A parte canadense acende em `--destaque`, com "≈ 15% OF THE BASIN IN CANADA". Crédito `Source: U.S. Army Corps of Engineers & Bonneville Power Administration, 2013`.
  - "mostly American" é leitura do canal sobre os 15 % (F005: os outros ~85 % nos EUA). Se a tela quiser o outro lado, "≈ 85% IN THE U.S." Este é o "But" estrutural (palavra 48).
- **f4** (p2.2 · 0:24–0:28) "A much bigger share of its water comes down through British Columbia."
  - Ids: F006 (USACE + BPA (F3): "Yet the Canadian waters account for about 38 percent of the average annual volume").
  - Mapa: o rio em azul corre da Colúmbia Britânica até a fronteira, e a linha engrossa ao descer. **Sem número na tela**: o 39 % só se diz no ato 1 (f31), e a decisão está em "Para a Sala", item 3. A água vem "through British Columbia", nunca "from" (K3).
  - A pauta (§8, 20–28 s) punha aqui o medidor, "≈ 39%" e "88 YEARS OF GAUGES". O roteiro final levou o medidor ao ato 1 (o briefing e a lista B1).
- **f5** (p3.1 · 0:28–0:36) "The payment is temporary: part of a deal that runs out after the spring of 2027, unless both countries agree on something new."
  - Ids: F007 (Nota diplomática dos EUA, 22/11/2024 (L3): "The Interim FRM Period is defined to run until the earliest of the first July 31 following the entry into force of the Modernized Treaty, or July 31, 2027."); F172 (CRS R43287: "announced an agreement in principle between the two countries on the terms for modernization of the Treaty").
  - Imagem real (a 2ª do lugar, pauta §8): Hugh Keenleyside Dam (pauta §6, imagem 2: Commons ou BC Hydro, licença a ler), ou o lago de outro ângulo. Logo depois, a régua do tempo: "INTERIM DEAL" → "LAST FLOOD SEASON IT CAN COVER: SPRING 2027" (até três anos de operação, F162). Crédito `Source: US diplomatic note, Nov. 22, 2024; Government of British Columbia` (pauta §8).
  - Nunca "the deal ends by July 31, 2027, at the latest" na voz. A tela pode dar a data de 31/07/2027 com o dono (F007, F171).
- **f6** (p3.2 · 0:36–0:41) "Talks to update the treaty between them have been paused since March 2025."
  - Ids: F008 (BC News, 11/03/2025: "The U.S. has paused negotiations with Canada on an amended Columbia River Treaty."); F009 (BC News, 11/03/2025: "Victoria Tuesday, March 11, 2025"); F010 (Canadian Geographic, 17/08/2026: "At the time of writing, the negotiations are still paused").
  - A régua do tempo continua: "TALKS PAUSED · MARCH 2025". Crédito `Source: Government of British Columbia, Mar. 11, 2025`. É volátil e se relê antes do render ("Para a Sala").
- **f7** (p4.1 · 0:41–0:48) "And the strange part: that treaty already promises Canada's help in a big flood, if the United States asks."
  - Ids: F011 (Tratado, Art. IV(3) (F1): "Canada shall, when called upon by an entity designated by the United States of America for that purpose, operate within the limits of existing facilities any storage in the Columbia River basin in…").
  - Folha recriada (pauta §8, 36–46 s, em dois beats, a folha e a linha): o tratado, Art. IV(3). A linha "Canada shall, when called upon by an entity designated by the United States of America…" acende. Crédito `Source: Columbia River Treaty, Art. IV(3)`.
- **f8** (p4.2 · 0:48–0:53) "So why pay for empty space, when the United States can already call on Canada in a flood?"
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Ilustração: a câmera volta ao corte do lago, com a faixa vazia, para a pergunta (pauta §8, 46–52 s). É a pergunta do título, feita uma vez (≈ 0:48, 5 % do vídeo). Ela não volta no fecho.
- **f9** (p5.1 · 0:54–0:59) "You're at Alpha Point, and this is where the story of the lake that waits for the flood begins."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - A assinatura (`marca/embalagem.md` §2), uma vez. O portão conta 170 palavras até aqui, no teto. A vinheta (identidade §8) termina virando a marca d'água, e o corte do lago, com a faixa vazia, fica por baixo. A frase devolve o `<tema>`, "the lake that waits for the flood", que o fecho paga (f183, f188).

### p1 · The river that starts up north (f10–f43 · 0:59–3:24 · 456 palavras)

- **f10** (p6.1 · 0:59–1:03) "Put your finger on the map where the Columbia River begins."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Mapa: a bacia parada, com o Columbia em azul, e um anel que procura a nascente. É um dos 2 imperativos de mapa do texto (teto 2,45 por mil).
- **f11** (p6.2 · 1:03–1:09) "You may know its American end: this is the largest hydropower-producing river system in the United States."
  - Ids: F012 (CRS R43287, 03/12/2024 (L1): "The Columbia River is the largest hydropower-producing river system in the United States.").
  - Mapa: o baixo Columbia, das barragens americanas à foz (a "ponta americana"), com o rótulo "LARGEST HYDROPOWER-PRODUCING RIVER SYSTEM IN THE U.S." Crédito `Source: Congressional Research Service, 2024`. Nunca "40 % of U.S. hydropower" (pauta §5).
- **f12** (p6.3 · 1:09–1:11) "Its beginning is somewhere else."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Mapa: a câmera sobe o rio ao norte e passa a fronteira.
- **f13** (p6.4 · 1:11–1:15) "It's a lake in the mountains of British Columbia, called Columbia Lake."
  - Ids: F013 (USGS, River Basins: The Columbia, 1981 (F7): "The headwaters of the Columbia River is in Columbia Lake in British Columbia, between the Canadian Rockies and the Selkirk Mountains").
  - Mapa: o Columbia Lake acende com o anel, com "COLUMBIA LAKE · BRITISH COLUMBIA". As Rochosas canadenses e as Selkirk ficam em rótulo fino (F013: "between the Canadian Rockies and the Selkirk Mountains"). Crédito `Source: USGS, 1981`.
- **f14** (p7.1 · 1:15–1:19) "From there, the river does something odd for a river on its way to Oregon."
  - Ids: F014 (USGS SIR 2007-5186 (F8): "the Columbia River flows into the Pacific Ocean near Astoria, Oregon").
  - Mapa: a foz no Oregon pisca como destino ("OREGON"), e a câmera volta à nascente. Crédito `Source: USGS, 2007`.
- **f15** (p7.2 · 1:19–1:22) "It heads northwest, deeper into Canada."
  - Ids: F015 (USGS 1981 (F7): "The river flows northwest 218 miles; then south for 280 miles").
  - Mapa: o rio se desenha para o noroeste. "218 MI NORTHWEST" é opcional (F015). Crédito `Source: USGS, 1981`.
- **f16** (p7.3 · 1:22–1:30) "Then it swings around in a long hairpin, the river's big bend in British Columbia, and only after that does it turn south toward the border."
  - Ids: F016 (USGS 1981 (F7): "then south for 280 miles; it crosses the United States-Canadian border into northeastern Washington").
  - Mapa: a alça se fecha, e o rio desce ao sul até a fronteira ("280 MI SOUTH" é opcional, F016). Crédito `Source: USGS, 1981`. Sempre "the river's big bend in British Columbia", nunca "the Big Bend" sozinho (pauta §5).
- **f17** (p7.4 · 1:30–1:36) "That bend is underwater these days: it lies beneath a lake, behind one of the dams in this story."
  - Ids: F017 (BC Geographical Names, Mica Dam (F16): "Formerly the "Big Bend" area of the Columbia River, and named for the former town of Mica Creek, drowned under the pondage.").
  - Mapa: o Kinbasket (o lago de Mica) cobre a curva. O traçado do rio antigo por baixo só entra se vier de mapa antigo em domínio público (pauta §6, ato 1; §10.1, item 8). Sem ele, fica o contorno do lago e o rótulo "FORMER BIG BEND · UNDER KINBASKET LAKE". A imagem real de Mica e do Kinbasket é opcional (pauta §6, imagem 3). Crédito `Source: BC Geographical Names`.
- **f18** (p7.5 · 1:36–1:44) "Keep your finger moving, and by the time the Columbia crosses into the United States, it has made a third or more of its whole journey to the sea."
  - Ids: F018 (conta do verificador sobre F7 e F8: "664/1942 km = 34.2 % e 498/1243 mi = 40.1 %, os dois acima de 1/3 (33.3 %)").
  - Mapa: o rio inteiro, com o trecho canadense em `--destaque`. Na tela, em milhas: "498 OF 1,243 MI IN CANADA · USGS, 1981". A outra conta do USGS, de 2007 (664 de 1.942 km), dá 34 %: as duas passam de um terço (F018), e a de 2007 fica só na descrição. A linha do rio, medida contra as 498 mi, é do `pesquisa-geo` (pauta §10.1, item 8). Crédito `Source: USGS, 1981`.
- **f19** (p8.1 · 1:45–1:48) "So where does all that water come from, and when?"
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Mapa: a bacia canadense acende. É a pergunta do ato.
- **f20** (p8.2 · 1:48–1:56) "The Canadian part of the basin, the land that drains into the river, is mountain country, and what lands on it in winter is snow."
  - Ids: F019 (BC Hydro, Columbia Operations Update, 23/06/2026, p. 7 (L12): "The Canadian portion is mountainous with much snow.").
  - Mapa sobre a parte canadense, com neve: com relevo 3D só se houver o ok da MapTiler deste vídeo; sem ele, satélite plano. Imagem real alternativa: montanhas nevadas da bacia (pela caça, ou de acervo, com o conferente). Crédito `Source: BC Hydro, 2026`. A voz define "basin" ("the land that drains into the river"), e a tela pode escrever "BASIN" no contorno.
- **f21** (p8.3 · 1:56–1:58) "For months, the snow just sits there."
  - Ids: F179 (CRS R43287 (L1): "Approximately 60% of this runoff occurs in May, June, and July.") [a linha cobre f21 e f22].
  - Ilustração: a neve acumula no relevo, camada por camada, de dezembro a abril, sem número. A linha F179 cobre f21 e f22. Crédito `Source: Congressional Research Service, 2024`.
- **f22** (p8.4 · 1:58–2:01) "Then, late in the spring, it lets go."
  - Ids: F179 (CRS R43287 (L1): "Approximately 60% of this runoff occurs in May, June, and July.") [a linha cobre f21 e f22].
  - Ilustração: a neve escorre para os riachos, e o rio engrossa.
- **f23** (p8.5 · 2:01–2:07) "About 60 percent of the water that runs off the whole basin in a year comes down in May, June and July."
  - Ids: F020 (CRS R43287 (L1): "Approximately 60% of this runoff occurs in May, June, and July.").
  - Dado: o ano em 12 barras, com maio, junho e julho acesos e "≈ 60% OF THE YEAR'S RUNOFF IN MAY–JULY". É a bacia inteira, não Birchbank. Crédito `Source: Congressional Research Service, 2024`.
- **f24** (p8.6 · 2:07–2:10) "Most of the river's year arrives in one season."
  - Ids: F180 (CRS R43287 (L1): "Approximately 60% of this runoff occurs in May, June, and July.").
  - Dado: os três meses se juntam num bloco só. O crédito é o mesmo.
- **f25** (p9.1 · 2:11–2:13) "A large part of it arrives by way of Canada."
  - Ids: F181 (USACE + BPA (F3): "Yet the Canadian waters account for about 38 percent of the average annual volume").
  - Mapa: a fronteira, com o fluxo atravessando de norte a sul. A linha da tabela (F181) é o 38 % da USACE + BPA. A pauta (§4.1) o deixava ir à tela com o dono, mas a proposta é não mostrá-lo, para ficar um número só, o 39 % de f31, como pediram os leitores. Decide o redator, com a Sala ("O destino das cifras").
- **f26** (p9.2 · 2:13–2:15) "You can read that off two gauges."
  - Ids: F182 (contagem do verificador: "séries casadas (a_calc_fracoes.py): WSC 08NE049, do governo do Canadá, e USGS 14105700, do governo dos EUA = 2 séries, de 2 governos").
  - Mapa: aparecem os dois pinos de medida, Birchbank e The Dalles (pauta §6).
- **f27** (p9.3 · 2:15–2:19) "A gauge is just a station on the bank that records how much water is going past."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Ilustração: a estação na margem, no traço de engenheiro, com o rio passando e um contador girando, sem número.
- **f28** (p9.4 · 2:19–2:23) "One of them sits in British Columbia, a short way north of the border."
  - Ids: F021 (WSC 08NE049 (coordenadas da estação); conta do verificador: "latitude 49.1778 N, longitude -117.7177: 19.8 km (12.3 mi) ao norte do paralelo 49").
  - Mapa: o pino de Birchbank, "BIRCHBANK · WATER SURVEY OF CANADA 08NE049", a "12 MI NORTH OF THE BORDER" (F021: 19,8 km, 12,3 mi). Ele fica abaixo da confluência do Kootenay. O laço do Kootenay (Montana e Idaho) entra só com a geometria (pauta §6, ato 1): Birchbank inclui água que o Kootenai recolhe nos EUA (K3), e a tela não pinta o medidor como "a água do Canadá".
  - Crédito `Data: Environment and Climate Change Canada, Water Survey of Canada (station 08NE049). Contains information licensed under the Open Government Licence – Canada.` (fatos-c, item 9a), com a URL da licença na descrição.
- **f29** (p9.5 · 2:23–2:30) "The other is far downstream at The Dalles, a place on the river in Oregon where the United States government measures it."
  - Ids: F022 (USGS 14105700 (o arquivo de picos): "USGS 14105700 COLUMBIA RIVER AT THE DALLES, OR").
  - Mapa: o pino de The Dalles, "THE DALLES, OREGON · USGS 14105700". A imagem real de The Dalles Dam é opcional (pauta §6, imagem 9: USACE, o domínio público a conferir). Crédito `Source: USGS`. "The Dalles" é nome de risco na escuta ("DALZ"; `narracao-conferencia.md`).
- **f30** (p9.6 · 2:30–2:34) "We lined the two records up, year against year, for the 87 years they share."
  - Ids: F023 (a_calc_fracoes.py (WSC + USGS): "Birchbank/The Dalles 1938-2024 n=87: 71,191 / 181,213 cfs = 39.3 %"); F173 (contagem do verificador: "séries casadas (a_calc_fracoes.py): WSC 08NE049, do governo do Canadá, e USGS 14105700, do governo dos EUA = 2 séries, de 2 governos").
  - Dado: as duas séries anuais lado a lado, de 1938 a 2024, com "87 YEARS (1938–2024)". **Não 88**: os 88 são de Birchbank sozinha (lista D; laudo do r1). Crédito `Alpha Point calculation: Water Survey of Canada (station 08NE049), USGS (14105700)`.
- **f31** (p9.7 · 2:34–2:42) "On average, the river at the Canadian gauge is already carrying about 39 percent of the water that will pass The Dalles."
  - Ids: F024 (a_calc_fracoes.py (WSC + USGS): "Birchbank/The Dalles 1938-2024 n=87: 71,191 / 181,213 cfs = 39.3 %").
  - Dado: a barra de The Dalles cheia, e a de Birchbank enchendo até "≈ 39%" (39,3 % exato: 71,191 de 181,213 cfs, na média dos 87 anos), com o rótulo "MEASURED AT BIRCHBANK, B.C.". O crédito é o da conta, mais a linha da licença do WSC. Nunca "Canada produces 39 percent" (K3; pauta §5).
- **f32** (p9.8 · 2:42–2:45) "That's our own calculation, from the two governments' data."
  - Ids: F025 (WSC 08NE049: "Monthly Mean of Water Level or Discharge for COLUMBIA RIVER AT BIRCHBANK (08NE049)"); F174 (contagem do verificador: "séries casadas (a_calc_fracoes.py): WSC 08NE049, do governo do Canadá, e USGS 14105700, do governo dos EUA = 2 séries, de 2 governos").
  - Tela: o crédito por extenso, `Alpha Point calculation: Water Survey of Canada (station 08NE049), USGS (14105700)`, e a linha da licença do WSC (fatos-c, item 9a). Aqui a voz diz o dono da conta: o canal.
- **f33** (p9.9 · 2:45–2:50) "About 15 percent of the land, and at the Canadian gauge, about 39 percent of the water."
  - Ids: F192 (USACE + BPA, History and 2014/2024 Review (F3, L5): "only about 15 percent of the 259,500 square miles of the Columbia River Basin is actually located in Canada"); F193 (a_calc_fracoes.py (WSC + USGS): "Birchbank/The Dalles 1938-2024 n=87: 71,191 / 181,213 cfs = 39.3 %"); F194 (USACE + BPA (F3): "Yet the Canadian waters account for about 38 percent of the average annual volume").
  - Dado: o par do eco, lado a lado, cada número com o seu dono: "≈ 15% OF THE BASIN · USACE & BPA, 2013" e "≈ 39% OF THE WATER PASSING THE DALLES, MEASURED AT BIRCHBANK · ALPHA POINT CALCULATION". O 39 nunca se lê como "do Canadá" (C2 do cético; K3).
  - O portão alerta o 15 e o 39 repetidos (`[uma-vez-no-gancho]`). A Sala os aceitou (lista B1).
- **f34** (p10.1 · 2:51–2:54) "Numbers like those make you wonder who holds the tap."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Mapa: a fronteira em destaque. **Sem torneira desenhada**: a torneira é a imagem do "Canada controls" que a pauta §5 corrige, e a pergunta se fecha em f125.
- **f35** (p10.2 · 2:54–2:56) "Hold that thought; we'll measure it."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - É a promessa da medida, paga em f121–f126.
- **f36** (p10.3 · 2:56–3:02) "BC Hydro, the power company that runs Canada's side of the treaty, describes the river this way."
  - Ids: F026 (CRS R43287, nota 2: "the Canadian Entity (the British Columbia Hydro and Power Authority, or BC Hydro)").
  - Tela: "BC HYDRO · CANADIAN ENTITY", sem logo. Crédito `Source: Congressional Research Service, 2024` (a BC Hydro como Entidade Canadense, nota 2).
- **f37** (p10.4 · 3:02–3:07) "Most of the power, and most of the need to hold back floods, is in the United States."
  - Ids: F027 (BC Hydro 2026, p. 7 (L12): "Most hydropower production and need for flood control is in the USA.").
  - Mapa: o lado americano acende, com as barragens do baixo Columbia e Portland. Um cartão com a frase literal da BC Hydro é opcional ("Most hydropower production and need for flood control is in the USA.", F027): a voz parafraseia, e o cartão leva a letra. Crédito `Source: BC Hydro, 2026`.
- **f38** (p10.5 · 3:07–3:10) "The big sites for storing water are in Canada."
  - Ids: F028 (BC Hydro 2026, p. 7 (L12): "The major storage dam sites are in Canada.").
  - Mapa: os três lugares de armazenamento do tratado acendem no Canadá (Kinbasket, Arrow e Duncan, F043). Crédito `Source: BC Hydro, 2026`.
- **f39** (p10.6 · 3:10–3:11) "One country has the need."
  - Ids: F183 (BC Hydro 2026, p. 7 (L12): "Most hydropower production and need for flood control is in the USA. The major storage dam sites are in Canada.") [a linha cobre f39 e f40].
  - Mapa: o lado americano aceso. A linha F183 cobre f39 e f40.
- **f40** (p10.7 · 3:11–3:13) "The other has the room."
  - Ids: F183 (BC Hydro 2026, p. 7 (L12): "Most hydropower production and need for flood control is in the USA. The major storage dam sites are in Canada.") [a linha cobre f39 e f40].
  - Mapa: o lado canadense aceso. A palavra "room" começa aqui.
- **f41** (p11.1 · 3:13–3:21) "Before the big storage dams, the river at that Canadian gauge carried about ten times more water in June than in February."
  - Ids: F029 (p_contas.py (WSC 08NE049): "mês mais cheio: jun 6,134; mais baixo: fev 590; razão 10.4×").
  - Dado: o ano do rio em Birchbank, de 1938 a 1967, em 12 barras: junho com 216,620 cfs e fevereiro com 20,832 cfs (6.134 e 590 m³/s; na tela, cfs, a unidade que a voz usa no ato 3), e "JUNE ≈ 10× FEBRUARY · 1938–1967". Crédito `Alpha Point calculation: Water Survey of Canada (station 08NE049)`, mais a linha da licença.
  - A legenda é "before the big storage dams" (pauta §10.1, item 3), nunca "natural river". A regulação do lago Kootenay antes de 1938 não se leu (pauta §11, item 8).
- **f42** (p11.2 · 3:21–3:22) "A river like that floods."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Dado: a barra de junho passa da linha do gráfico, e a imagem corta para Vanport.
- **f43** (p11.3 · 3:22–3:24) "And in 1948, it did."
  - Ids: F030 (USGS Water-Supply Paper 1080 (1949): "the early part of June 1948 the Columbia River Basin in the United States and Canada was ravaged by a flood").
  - Imagem real: Vanport, 1948 (pauta §6, imagem 5: USACE, NARA ou Oregon Historical Society, licença a ler), com a data na tela. Crédito `Source: USGS, 1949`, mais o da foto.

### p2 · The flood and the bargain (f44–f73 · 3:25–6:05 · 486 palavras)

- **f44** (p12.1 · 3:25–3:34) "That spring, the river came up over its banks, and the damage ran from Trail, in British Columbia, all the way to Vanport, a town on the edge of Portland, Oregon."
  - Ids: F031 (USACE + BPA (F3, L5): "caused major damage from Trail, British Columbia, to Vanport, Ore."); F032 (USACE + BPA (F3): "communities such as Vanport, Ore., just north of Portland").
  - Mapa: a cheia corre de Trail a Vanport (pauta §6, ato 2). Trail e Vanport ficam marcados, e Portland ao lado. Crédito `Source: U.S. Army Corps of Engineers & Bonneville Power Administration, 2013`.
- **f45** (p12.2 · 3:34–3:38) "At Vanport, a railroad embankment was doing the work of a dike."
  - Ids: F033 (USGS WSP 1080, p. 9: "fill serving as a dike broke at 4:15 p.m. on Sunday, May 30").
  - Imagem real: Vanport (a mesma busca), ou uma ilustração do aterro ferroviário em corte, fazendo de dique. Crédito `Source: USGS, 1949`.
- **f46** (p12.3 · 3:38–3:46) "It broke on a Sunday afternoon, and within an hour, by the US Geological Survey's account, the town was completely destroyed."
  - Ids: F034 (USGS WSP 1080, p. 9: "The disaster occurred on a Sunday afternoon"); F035 (USGS WSP 1080, p. 9: "Within an hour the town was completely destroyed.").
  - Imagem real: Vanport depois do rompimento, com "VANPORT · MAY 30, 1948". A data vem de fatos-c, item 8 ("4:15 p.m. on Sunday, May 30"; USGS WSP 1080, p. 9) e não tem linha na tabela: o verificador a confere com o `redator-de-tela`. O USGS é dito na voz.
- **f47** (p12.4 · 3:46–3:53) "Across the whole flood, the same report counts at least 51 people dead, and tens of thousands out of their homes."
  - Ids: F036 (USGS WSP 1080, p. 13: "At least 51 lives were lost as a result of the flood."); F037 (USGS WSP 1080, p. 13: "38,500 persons made homeless").
  - Tela: "AT LEAST 51 DEAD · THE WHOLE 1948 FLOOD · USGS, 1949". Para os desabrigados, a voz diz "tens of thousands". O relatório dá 38,500 (Cruz Vermelha, no mesmo relatório, F037), e a pauta trazia 30.000 desalojados, pelas agências (L5). Na tela vai um número só, com o dono ("38,500 HOMELESS · RED CROSS, IN USGS 1949"), nunca os dois.
  - **Nunca o 51 sobre a foto de Vanport**: os mortos são da cheia inteira (pauta §5; cético, pergunta 4). Por baixo vai o mapa da cheia inteira.
- **f48** (p13.1 · 3:53–3:56) "What do you do with a river that arrives all at once?"
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Ilustração: O CORTE DO LAGO volta (a 2ª vez): um vale vazio, em corte. É a pergunta do ato.
- **f49** (p13.2 · 3:56–4:00) "You catch part of it upstream, and you let it down slowly."
  - Ids: F184 (Public Law 118-272, sec. 1152(d)(3): "the usable space in a reservoir that is set aside for impounding and releasing water for flood risk management").
  - Ilustração: no corte, a cheia entra, o lago a segura, e a saída é um fio. É a ideia geral (F184 só a apoia), e não leva crédito.
- **f50** (p13.3 · 4:00–4:05) "That takes room: a deep valley, a dam across it, and a long lake with space left to rise."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Ilustração: o corte desenha o vale, a barragem e o lago, com a faixa de cima tracejada e o rótulo do espaço reservado. O texto do rótulo é do redator, o mesmo em todo o vídeo.
- **f51** (p13.4 · 4:05–4:09) "On the Columbia, the big sites for that were north of the border."
  - Ids: F038 (BC Hydro 2026, p. 7: "The major storage dam sites are in Canada.").
  - Mapa: os vales canadenses acendem, com as três barragens futuras em contorno fraco. Crédito `Source: BC Hydro, 2026`.
- **f52** (p14.1 · 4:09–4:12) "The early ideas pulled in opposite directions."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Mapa: duas setas em sentidos opostos.
- **f53** (p14.2 · 4:12–4:18) "A few years after the flood, the United States proposed a dam of its own whose lake would back up into Canada."
  - Ids: F039 (CRS R43287 (L1): "the United States had proposed in 1951 to build Libby Dam in Montana (which would flood 42 miles into Canada)").
  - Mapa: Libby, em Montana, e a seta do lago entrando no Canadá (pauta §6, ato 2), com "LIBBY DAM · PROPOSED 1951". O ano está em F039 e fica fora da voz (pauta §7). Crédito `Source: Congressional Research Service, 2024`.
- **f54** (p14.3 · 4:18–4:26) "Canada answered, by the US Congressional Research Service's account, with a plan to divert much of the upper Columbia for its own use."
  - Ids: F040 (CRS R43287 (L1): "Canada was opposed to this solution, and as a response proposed to divert as much as 15.5 MAF from the Columbia River for its own purposes").
  - Mapa: uma seta sai do alto Columbia para fora da bacia, **sem número**. Os 15,5 MAF do desvio ficam fora até da tela, e com eles a cena do número que vira o do tratado (K7; pauta §5). O CRS é dito na voz.
- **f55** (p15.1 · 4:26–4:28) "Out of that argument came a treaty."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Folha recriada: a capa, "COLUMBIA RIVER TREATY", com "SIGNED JAN. 17, 1961 · IN FORCE SEPT. 16, 1964" (F041). Sem "signed in Ottawa" nem "ratified in 1961" (pauta §5).
- **f56** (p15.2 · 4:28–4:35) "It took effect in September 1964, and the two countries' leaders marked the day at the border itself."
  - Ids: F041 (Public Law 118-272 (L11): "signed at Washington January 17, 1961, and entered into force September 16, 1964"); F042 (USACE + BPA (F3): "meet on Sept. 16, 1964, at the International Boundary at Blaine, Wash., and Surrey, B.C."); F175 (contagem do verificador sobre F3: "líderes na fronteira em 16/09/1964 (USACE + BPA): Johnson, dos EUA; Pearson e Bennett, do Canadá = 2 países").
  - Imagem real: o encontro de 16/09/1964 na fronteira (pauta §6, imagem 6: NARA, LBJ Library ou Library and Archives Canada, licença a ler), com "SEPT. 16, 1964 · BLAINE, WASH. / SURREY, B.C." Os líderes, se a tela os nomear, são Johnson, Pearson e Bennett (F042). Crédito `Source: U.S. Public Law 118-272; USACE & BPA, 2013`, mais o da foto.
- **f57** (p15.3 · 4:35–4:37) "Canada would build three big storage dams."
  - Ids: F043 (BC Hydro 2026, p. 7: "Required to construct the Kinbasket, Arrow and Duncan storage reservoirs"); F044 (USACE + BPA (F3): "helped fund the construction of the three Treaty dams in Canada").
  - Mapa: as três barragens acendem: Mica (Kinbasket), Keenleyside (Arrow) e Duncan (F043). Aqui vão só os nomes. Os 15,5 milhões de acre-pés esperam f122, depois de o acre-pé ser definido (f100). As datas das barragens só vão à tela com a fonte de cada uma (pauta §4.2: firme é só o intervalo). Crédito `Source: BC Hydro, 2026; USACE & BPA, 2013`.
- **f58** (p15.4 · 4:37–4:41) "The United States would build the one it had asked for, Libby."
  - Ids: F045 (USACE + BPA (F3): "The Treaty also allowed the United States an option to build Libby Dam on the Kootenai River").
  - Mapa: Libby acende em Montana, "LIBBY DAM · MONTANA", sem o ano de conclusão (pauta §5). Imagem real: Libby e o Koocanusa (pauta §6, imagem 4: USACE, o domínio público a conferir). Crédito `Source: USACE & BPA, 2013`.
- **f59** (p15.5 · 4:41–4:48) "Its lake backs 42 miles into Canada, and by the treaty's own count, the water it regulates makes extra power there too."
  - Ids: F046 (USACE + BPA (F3): "whose reservoir Lake Koocanusa backs 42 miles into Canada"); F047 (Protocolo de 1964, V (F1): "more than 200,000 kilowatt years per annum of energy benefit downstream in Canada").
  - Mapa: o Koocanusa cortado pela fronteira, "LAKE KOOCANUSA · 42 MI INTO CANADA" (a medida 7 da pauta §10.1, ainda a medir; se a geometria vier do OSM, entra "© OpenStreetMap contributors"). Uma seta mostra a energia a mais rio abaixo, no Canadá. A tela pode citar o Protocolo: "MORE THAN 200,000 KILOWATT YEARS PER ANNUM… DOWNSTREAM IN CANADA" (F047). Crédito `Source: USACE & BPA, 2013; Columbia River Treaty Protocol, 1964`. A voz diz "the treaty's own count".
- **f60** (p16.1 · 4:49–4:52) "Then follow the money, because it runs the other way."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Ilustração: a seta do rio desce, e uma seta de dinheiro sobe. É o fio do briefing: a água desce, o dinheiro sobe.
- **f61** (p16.2 · 4:52–4:54) "Water comes down, and money goes up."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Ilustração: as duas setas sobre o mapa, em sentidos opostos.
- **f62** (p16.3 · 4:54–5:05) "For the room behind the Canadian dams, the United States paid 64.4 million dollars in lump sums, as each dam came into service, for 60 years of flood protection."
  - Ids: F048 (USACE + BPA (F3): "lump sum payments totaling $64.4 million when each of the three Canadian dams became operational"); F049 (Tratado, Art. IV(2) (F1): "For the purpose of flood control until the expiration of sixty years from the ratification date").
  - Folha recriada: o pagamento da cheia (o Art. VI, com os 52,1 milhões de Arrow; pauta §6, ato 2), com "$64.4 MILLION · LUMP SUMS AS EACH DAM CAME INTO SERVICE · 60 YEARS OF FLOOD CONTROL". Crédito `Source: USACE & BPA, 2013; Columbia River Treaty, Art. IV and VI`.
  - Sem "in 1964" (pauta §5), e nunca ao lado dos 37,6 sem a inflação (§5).
- **f63** (p16.4 · 5:05–5:10) "The price was half of what those dams were expected to save it in flood damage."
  - Ids: F050 (USACE + BPA (F3): "Canada was to be paid 50 percent of the estimated value of U.S.").
  - Tela: "50% OF THE EXPECTED U.S. FLOOD DAMAGE PREVENTED". Crédito `Source: USACE & BPA, 2013`.
- **f64** (p16.5 · 5:10–5:14) "Most of the money was for one lake: Arrow, the lake at the start of this story."
  - Ids: F051 (Tratado, Art. VI(1), pelo p_contas.py: "Pagamento de 1964 pela cheia: Arrow 52,1 de 64,4 = 80.9 %").
  - Mapa: o Arrow acende de novo, com o anel do gancho. Folha: "ARROW: $52.1M OF $64.4M" (Art. VI(1); 80,9 %). Crédito `Source: Columbia River Treaty, Art. VI(1)`. O lago do título volta aqui (A3 do ouvinte).
- **f65** (p16.6 · 5:14–5:18) "So paying Canada for room is as old as the treaty itself."
  - Ids: F052 (L, apoiada em F048; nota do verificador: "conclusão do canal sobre a linha do pagamento de 1964").
  - Ilustração: o corte do lago, com "1964" na faixa. É conclusão do canal (L, F052) e não leva crédito novo.
- **f66** (p16.7 · 5:18–5:21) "The strange part starts when those 60 years run out."
  - Ids: F195 (Tratado, Art. IV(2) (F1): "For the purpose of flood control until the expiration of sixty years from the ratification date").
  - Dado: a régua de 60 anos, de 1964 a 2024, com a ponta acendendo. Nada aqui antecipa o que muda: o ato 3 é que diz. Crédito `Source: Columbia River Treaty, Art. IV(2)`.
- **f67** (p17.1 · 5:21–5:24) "The other half of the bargain is power."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Mapa: as barragens americanas do baixo Columbia acendem, sem lista na voz.
- **f68** (p17.2 · 5:24–5:32) "Water stored in Canada and released on a schedule lets the American dams downstream make more electricity than they could on their own."
  - Ids: F053 (Tratado, Anexo A (F1): "For power generating purposes the 15,500,000 acre-feet of Canadian storage will be operated in accordance with operating plans designed to achieve optimum power generation downstream").
  - Ilustração sobre o mapa: a água sai dos lagos canadenses num ritmo marcado, e as turbinas americanas, rio abaixo, giram mais. Crédito `Source: Columbia River Treaty, Annex A`.
- **f69** (p17.3 · 5:32–5:39) "The treaty splits that gain down the middle: half of the extra power is Canada's share, and it arrives as electricity, not cash."
  - Ids: F054 (Tratado, Art. V(1) (F1): "Canada is entitled to one half the downstream power benefits determined under Article VII."); F055 (Tratado, Art. V(2) (F1): "The United States of America shall deliver to Canada at a point on the Canada-United States of America boundary near Oliver").
  - Ilustração: a energia a mais se parte ao meio, e uma metade volta pela linha até a fronteira, perto de Oliver (F055). Tela: "CANADIAN ENTITLEMENT · HALF · DELIVERED AS ELECTRICITY". Crédito `Source: Columbia River Treaty, Art. V`. "as electricity, not cash": nunca "paid in cash every year" (pauta §5).
- **f70** (p17.4 · 5:39–5:50) "British Columbia sold the first 30 years of that share up front, for about 254 million dollars, and that money, with the flood payment, helped build the three dams."
  - Ids: F056 (USACE + BPA (F3): "Canada initially sold its share of this additional power, called the Canadian Entitlement, for $254 million to a consortium of U.S. utilities for a period of 30 years."); F057 (USACE + BPA (F3): "helped fund the construction of the three Treaty dams in Canada"); F058 (Troca de notas de 16/09/1964 (F2): "entered into between the British Columbia Hydro and Power Authority and the Columbia Storage Power Exchange").
  - Tela: "≈ $254 MILLION · THE FIRST 30 YEARS, SOLD UP FRONT · SEPT. 16, 1964". O valor exato (US$ 253.929.534,25; pauta §4.2 e §6) não tem linha na tabela final: vai à tela só depois de o verificador o conferir. Crédito `Source: USACE & BPA, 2013; exchange of notes, Sept. 16, 1964`.
  - Nunca "starting in 1964" nem "from 1973 to 2003" (pauta §5).
- **f71** (p17.5 · 5:50–5:55) "So American money helped build Canada's dams, and water stored in Canada helped run America's."
  - Ids: F059 (L, apoiada em F054 e F056; nota do verificador: "resumo das linhas acima").
  - Ilustração: as duas setas de f61 fecham o laço sobre o mapa. É conclusão do canal (L, F059).
- **f72** (p18.1 · 5:55–6:01) "For 60 years, that was the bargain: room for money, and stored water for power."
  - Ids: F060 (Tratado, Art. IV(2) (F1): "For the purpose of flood control until the expiration of sixty years from the ratification date").
  - Dado: a régua de 1964 a 2024, com as duas trocas escritas. É a frase-chave do ato. A inscrição vem uma frase depois, nunca colada nela (voz §3). Crédito `Source: Columbia River Treaty, Art. IV(2)`.
- **f73** (p18.2 · 6:01–6:05) "Year after year, the snow melted, and the lakes caught part of it."
  - Ids: F196 (USACE + BPA (F3): "river ﬂ ows during the spring runoff (snowmelt season)"); F197 (BC Hydro, Columbia River Operations Summary, 2018 (F15): "434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June").
  - Ilustração: o corte do lago num ciclo lento, ano após ano (o lago sobe na primavera e desce), com a câmera parada e sem número. **É a cena calma que fica por baixo da inscrição** (pauta §7, item 4: ou o mapa dos quatro lagos em repouso).

### A inscrição falada (f74–f75 · 6:05–6:11 · 16 palavras)

- **f74** (p19.1 · 6:05–6:09) "If you're enjoying the trip downriver, subscribe to Alpha Point."
  - Ids: F064 (marca/cta.md: "subscribe to Alpha Point").
  - **A inscrição falada** (cta §1 e §5; voz §3). A peça `inscricao.html` (4,5 s) entra quando f73 termina ("…caught part of it.", ≈ 6:04,9 no `narracao.json`; o `inSec` sai do `words.json`). Por baixo fica a cena de f73, parada, com o canto livre. A peça cai a ≈ 39 % do vídeo (a janela vai de 5:24,8 a 9:16,8).
- **f75** (p19.2 · 6:09–6:11) "Back to that empty space, then."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - É o re-gancho, sobre a palavra do título: a faixa vazia do corte acende de novo. A peça sai ≈ 6:09,4.

### p3 · The trigger and the tap (f76–f135 · 6:11–10:57 · 832 palavras)

- **f76** (p20.1 · 6:11–6:14) "Maybe you've already decided what the payment is."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Ilustração: o corte do lago, com a faixa paga e "$37.6M A YEAR" voltando.
- **f77** (p20.2 · 6:14–6:15) "It's insurance."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Tela: o palpite do espectador como rótulo provisório, "INSURANCE?", que f79 risca.
- **f78** (p20.3 · 6:15–6:21) "The United States bought decades of cover, the cover ran out, and so it pays by the year instead."
  - Ids: F065 (USACE + BPA (F3): "Canada elected to receive lump sum payments totaling $64.4 million when each of the three Canadian dams became operational").
  - Dado: a régua de 60 anos acaba, e vêm blocos anuais (2025, 2026, 2027). Os 64,4 e os 37,6 nunca ficam lado a lado (pauta §5). Crédito `Source: USACE & BPA, 2013; U.S. Public Law 118-272`.
- **f79** (p20.4 · 6:21–6:23) "That's close, but it misses one thing."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - O rótulo "INSURANCE?" se apaga pela metade.
- **f80** (p20.5 · 6:23–6:28) "In September 2024, the 60 years the United States had paid for ran out."
  - Ids: F066 (BC, Treaty highlights (F5): "Assured Annual Flood Control expires automatically in 2024 and converts on 16 September 2024 to a Called Upon operation"); F198 (Tratado, Art. IV(2) (F1): "For the purpose of flood control until the expiration of sixty years from the ratification date"); F199 (USACE + BPA (F3): "lump sum payments totaling $64.4 million when each of the three Canadian dams became operational").
  - Dado: a régua chega a "SEPT. 16, 2024" (F066: "converts on 16 September 2024 to a Called Upon operation"). Crédito `Source: Government of British Columbia; Columbia River Treaty, Art. IV(2)`. Nunca "the treaty expired" (pauta §5).
- **f81** (p20.6 · 6:28–6:29) "The promise didn't."
  - Ids: F185 (BC, Treaty highlights (F5): "converts on 16 September 2024 to a Called Upon operation"); F200 (BC, Treaty highlights (F5): "Assured Annual Flood Control expires automatically in 2024 and converts on 16 September 2024 to a Called Upon operation"); F201 (Nota diplomática dos EUA, 22/11/2024 (L3): "recognizes that the scope of the Treaty, which remains in force").
  - Folha recriada: o Art. IV(3) de novo, a mesma folha de f7, com a linha "when called upon" acesa e "STILL IN FORCE". Crédito `Source: Government of British Columbia; US diplomatic note, Nov. 22, 2024`.
- **f82** (p20.7 · 6:29–6:37) "Under the treaty, Canada has to help in a big flood whenever the United States asks, and the United States covers what that help costs."
  - Ids: F067 (CRS R43287 (L15): "Canada would be responsible for making these changes. In exchange, the United States would pay for operating costs and economic losses in Canada due to the changed operation."); F068 (Protocolo de 1964, I(2) (F1): "only to control potential floods in the United States of America that could not be adequately controlled by all the related storage facilities in the United States of America").
  - Ilustração: um sinal sai dos EUA para o lago canadense, o lago responde, e uma conta volta. Tela: "CALLED-UPON FLOOD CONTROL". No rodapé cabe o limite do Protocolo I(2), em que a ajuda só vale para a cheia que o armazenamento dos EUA não controla (F068): "ONLY FOR FLOODS U.S. STORAGE CAN'T CONTROL · 1964 PROTOCOL". Crédito `Source: Congressional Research Service, 2024; Columbia River Treaty Protocol, 1964`.
- **f83** (p20.8 · 6:37–6:40) "That's what it means to have Canada on call."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Tela: "ON CALL", o nome que a voz define aqui e que se repete igual em toda a tela.
- **f84** (p21.1 · 6:40–6:43) "And the treaty doesn't say how big a flood that is."
  - Ids: F069 (CRS R43287, nota 39 (L15): "is not currently defined in the Treaty and is likely to be an important point in negotiations").
  - Folha: o Art. IV(3), com um espaço em branco onde estaria o número. Aqui começa o centro do vídeo (≈ 6:40, 43 %). Crédito `Source: Congressional Research Service, 2024` (nota 39: "not currently defined in the Treaty"). A voz diz "doesn't say", e nunca "never says".
- **f85** (p21.2 · 6:43–6:45) "No number, no line on a gauge."
  - Ids: F186 (CRS R43287, nota 39 (L15): "The actual trigger for called-upon flood control operations, as well as the cost for these operations, is not currently defined in the Treaty").
  - Ilustração: O MEDIDOR de The Dalles, sem nenhuma linha. Crédito `Source: Congressional Research Service, 2024`.
- **f86** (p21.3 · 6:45–6:51) "A flood on this river is measured in cubic feet per second: how much water goes past The Dalles every second."
  - Ids: F070 (CRS R43287, nota 39: "a range of peak flows at the Dalles (a large dam near the mouth of the Columbia River) from 450,000 cubic feet per second").
  - Ilustração: o medidor ganha a escala "CUBIC FEET PER SECOND (CFS)". A unidade se diz uma vez (B4a). Crédito `Source: Congressional Research Service, 2024`.
- **f87** (p21.4 · 6:51–6:56) "When the treaty came up for review, the two sides worked from different numbers."
  - Ids: F071 (USACE, 31/01/2013, p. 15 (L13): "Treaty Continues with 450 and 600 flood flow objectives"); F176 (CRS R43287, nota 39: "an important point in negotiations between the two countries").
  - Tela: "2014/2024 TREATY REVIEW", e o medidor ganha duas cores, uma para cada lado, na paleta da marca. Crédito `Source: U.S. Army Corps of Engineers, 2013` (F071: "Treaty Continues with 450 and 600 flood flow objectives").
- **f88** (p21.5 · 6:56–7:06) "American planners projected that Canadian storage would come into play once the river's peak landed somewhere between 450,000 and 650,000."
  - Ids: F072 (CRS R43287, nota 39: "from 450,000 cubic feet per second (cfs) to 650,000 cfs would activate available Canadian storage").
  - Dado, no medidor: a faixa "450,000–650,000 CFS · U.S. ENTITY STUDIES". "American planners" são a US Entity (a BPA e o Corps; laudo, "A lista de nomes"). O crédito `Source: Congressional Research Service, 2024` fica no medidor de f88 a f91, porque o CRS só é dito em f90.
- **f89** (p21.6 · 7:06–7:12) "The Canadian side assumed it would be called only at 600,000, a flood expected to be rare."
  - Ids: F073 (CRS R43287, nota 39: "the Canadian Entity has assumed that it would provide called-upon storage only once flows reach 600,000 cfs (which is expected to be rare)").
  - Dado: a linha "600,000 CFS · CANADIAN ENTITY ASSUMPTION". O "expected to be rare" vai sem dono, como no CRS (F073). **A tela nunca chama a linha de "trigger" do tratado**: o 600 mil é a suposição do lado canadense (pauta §5).
- **f90** (p21.7 · 7:12–7:16) "That's how the US Congressional Research Service describes those studies."
  - Ids: F074 (CRS R43287: "While the U.S. Entity has projected that a range of peak flows at the Dalles").
  - Tela: o crédito por extenso, `Source: Congressional Research Service, R43287, Dec. 2024`. O CRS é dito na voz.
- **f91** (p21.8 · 7:16–7:22) "Between 450,000 and 600,000, one side expects the call and the other doesn't."
  - Ids: F202 (CRS R43287, nota 39: "from 450,000 cubic feet per second (cfs) to 650,000 cfs would activate available Canadian storage"); F203 (CRS R43287, nota 39: "the Canadian Entity has assumed that it would provide called-upon storage only once flows reach 600,000 cfs").
  - Dado: a zona entre 450 e 600 mil acende (pauta §6, ato 3).
- **f92** (p21.9 · 7:22–7:24) "We'll call that the gap."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Tela: "THE GAP" sobre a zona acesa. É o nome que a voz dá, igual em toda a tela do ato.
- **f93** (p22.1 · 7:24–7:26) "So we looked at the river itself."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Dado: o medidor vira o gráfico dos picos. É o canal medindo.
- **f94** (p22.2 · 7:26–7:34) "From 1879 to 1967, the yearly peak at The Dalles passed the Canadian side's line in 40 of 89 years."
  - Ids: F075 (fatos-medidas-picos.py (USGS): "1879-1967: 89 anos; pico >= 600,000 cfs em 40 de 89 anos"); F204 (fatos-medidas-r2.py (USGS): "1879-1967: 89 anos; pico > 600,000 cfs em 40 de 89 anos; pico igual a 600,000 em 0").
  - Dado: OS PICOS MEDIDOS, um ponto por ano, de 1879 a 2025, contra as linhas de 450, 600 e 650 mil (pauta §6, ato 3). De 1879 a 1967 acendem os 40 acima de 600 mil, com "40 OF 89 YEARS". Os rótulos de 1948 (1,010,000) e de 1894 (1,240,000, o maior) são opcionais (`fatos-medidas.txt`). Crédito `USGS annual peak streamflow, The Dalles (14105700)`. A voz diz "passed" (F204: nenhum pico igual a 600 mil).
- **f95** (p22.3 · 7:34–7:37) "On the old river, that was no rare flood."
  - Ids: F076 (L, apoiada em F075; nota do verificador: "40 de 89 anos").
  - Dado: os 40 pontos pulsam. É conclusão do canal (L, F076).
- **f96** (p22.4 · 7:37–7:48) "Since 2009, with the space reserved upstream, it hasn't passed it once, and six springs have peaked in the gap: high enough for the American range, too low for the Canadian line."
  - Ids: F077 (fatos-medidas-picos.py (USGS): "2009-2025: 17 anos; pico >= 600,000 cfs em 0 de 17 anos; entre 450,000 e 600,000 em 6").
  - Dado: de 2009 a 2025, nenhum ponto passa de 600 mil, e os seis no vão acendem: 2010, 2011, 2012, 2017, 2018 e 2020; o maior é 587,000, em 2012 (`fatos-medidas.txt`, picos instantâneos). Os pontos de 1974 a 2008 vão com outra marca e o rótulo **"1974–2008: DAILY AVERAGES"** (lista D). Crédito `USGS annual peak streamflow, The Dalles (14105700). 1974–2008: daily averages.`
  - A conta não mede quantas vezes o "on call" teria sido preciso, nem o rio sem o espaço. A tela nunca diz "would have flooded" nem "since 1974" (pauta §5).
- **f97** (p23.1 · 7:48–7:50) "That gap is where the law comes in."
  - Ids: F083 (L, apoiada em F082 e F072; nota do verificador: "a ligação é da pauta; a lei diz 'including operations that the Government of Canada may not be obligated to provide'").
  - Transição: o vão acende e vira a folha da lei. É conclusão do canal (L, F083).
- **f98** (p23.2 · 7:50–7:54) "In January 2025, Congress authorized the payment."
  - Ids: F078 (Public Law 118-272 (L11): "Approved January 4, 2025.").
  - Folha recriada: a lei, "PUBLIC LAW 118-272 · APPROVED JAN. 4, 2025" (F078). Crédito `Source: U.S. Public Law 118-272`.
- **f99** (p23.3 · 7:54–8:01) "It pays for reserving 3.6 million acre-feet of room a year behind the dam that holds back the Arrow Lakes."
  - Ids: F079 (Public Law 118-272, sec. 1152 (L11): "reserving and operating 3,600,000 acre- feet of pre-planned flood storage per operating year at Hugh Keenleyside Dam"); F080 (BC Hydro 2026, p. 20: "Arrow Reservoir, impounded by Hugh Keenleyside Dam").
  - Imagem real: Hugh Keenleyside Dam (pauta §6, imagem 2), com "HUGH KEENLEYSIDE DAM". Depois, o corte do lago com a faixa reservada e "3,600,000 ACRE-FEET A YEAR · PRE-PLANNED FLOOD STORAGE" (F079). Nada de pés nem de fração do lago. Crédito `Source: U.S. Public Law 118-272; BC Hydro, 2026`.
- **f100** (p23.4 · 8:01–8:05) "An acre-foot is enough water to cover an acre of land one foot deep."
  - Ids: F081 (BC, AIP Public Description, glossário (L4): "1 MAF represents the volume of water covering an area of 1 acre to a depth of 1 foot, times a million").
  - Ilustração: um acre de terra com um bloco de água de um pé de altura por cima, sem outra comparação (as fontes só dão a definição). Crédito `Source: Government of British Columbia, 2024`.
- **f101** (p23.5 · 8:05–8:14) "The law spells out what that includes, in its own words: "operations that the Government of Canada may not be obligated to provide" under the treaty."
  - Ids: F082 (Public Law 118-272, sec. 1152 (L11): "including operations that the Government of Canada may not be obligated to provide under the Columbia River Treaty").
  - Folha recriada: a lei, sec. 1152, com a frase "including operations that the Government of Canada may not be obligated to provide under the Columbia River Treaty" sublinhada (pauta §6, ato 3). É citação sendo lida: nenhuma chamada aqui (cta §5). Crédito `Source: U.S. Public Law 118-272, sec. 1152`.
- **f102** (p24.1 · 8:14–8:19) "The lake drops every winter anyway, as water moves downstream to make power."
  - Ids: F084 (USACE, 31/01/2013, p. 22 (L13): "The limited number of Called Upon years had less impact than the power requirements."); F085 (CRS R43287: "reduced fall and winter drafts—also known as drawdowns—in Canadian reservoirs").
  - Ilustração: o corte do lago desce no inverno, e a água sai para as turbinas rio abaixo. Os pontos reais de 2017 são opcionais ("1,401.4 FT · FEB. 4, 2017 · BC HYDRO", F116). Crédito `Source: U.S. Army Corps of Engineers, 2013; Congressional Research Service, 2024`.
- **f103** (p24.2 · 8:19–8:28) "What the United States pays for is a guarantee: that much room kept empty for the flood, every year of the deal, whatever the treaty does or doesn't require."
  - Ids: F086 (Public Law 118-272, sec. 1152: "pre-planned flood storage per operating year at Hugh Keenleyside Dam, including operations that the Government of Canada may not be obligated to provide").
  - Ilustração: no corte, a faixa reservada fica marcada e vazia por cima do nível que desce, com "KEPT EMPTY · EVERY YEAR OF THE DEAL" e sem altura em pés. A palavra do título ("empty") volta aqui (C4 do cético). Crédito `Source: U.S. Public Law 118-272`.
- **f104** (p25.1 · 8:28–8:30) "The alternative has a price too."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - A BALANÇA (a 1ª vez): os pratos aparecem vazios.
- **f105** (p25.2 · 8:30–8:39) "The American agencies that run the treaty once estimated that a call on Canada would cost between 4 and 34 million dollars per request."
  - Ids: F087 (CRS R43287, nota 41: "the U.S. Entity has previously estimated costs of between $4 million and $34 million per request for called-upon flood control"); F088 (CRS R43287 (a faixa transcrita): "US Entity, custo por pedido (CRS R43287, nota 41): de 4 a 34 milhões de dólares, ou seja, 4 e 34").
  - Dado: "PER CALL: $4–34 MILLION · U.S. ENTITY", sem data (o CRS diz "previously estimated", F087). Crédito `Source: Congressional Research Service, 2024`.
- **f106** (p25.3 · 8:39–8:48) "British Columbia's estimate is that relying on those calls would cost the United States 40 to 150 million dollars a year in lost power."
  - Ids: F089 (CRS R43287, nota 40: "The Canadian Entity estimates that, for power production alone, called-upon operations would result in $40 million to $150 million per year in lost benefits to the United States"); F090 (CRS R43287 (a faixa transcrita): "Canadian Entity, perda por ano (CRS R43287, nota 40): de 40 a 150 milhões de dólares, ou seja, 40 e 150").
  - Dado: "PER YEAR: $40–150 MILLION IN LOST BENEFITS · CANADIAN ENTITY". **Sem data**: a data do "British Columbia U.S. Benefits Study" não se leu (pauta §11, item 2; alerta `[estudo-bc]`). Crédito `Source: Congressional Research Service, 2024`.
- **f107** (p25.4 · 8:48–8:53) "Beside the American figure, which is per call, 37.6 million a year looks steep."
  - Ids: F091 (CRS R43287, notas 40 e 41: "has previously estimated costs of between $4 million and $34 million per request") [a linha cobre f107 e f108]; F205 (CRS R43287, nota 41: "the U.S. Entity has previously estimated costs of between $4 million and $34 million per request for called-upon flood control") [a linha cobre f107 e f108]; F206 (CRS R43287, nota 40: "called-upon operations would result in $40 million to $150 million per year in lost benefits to the United States") [a linha cobre f107 e f108]; F207 (Public Law 118-272, sec. 1152 (L11): "there is authorized to be appropriated $37,600,000 for fiscal year 2025 and $37,600,000, adjusted for inflation") [a linha cobre f107 e f108]; F208 (fatos-medidas-r2.py: "pagamento por ano: 37.6 million; teto do custo por pedido (US Entity): 34") [a linha cobre f107 e f108].
  - Dado: a régua com as três quantias, cada uma com a sua unidade: "$4–34M PER CALL" | "$37.6M PER YEAR" | "$40–150M PER YEAR". O 37,6 fica acima do teto por chamada. As linhas F091 e F205–F208 cobrem f107 e f108. Crédito `Source: Congressional Research Service, 2024; U.S. Public Law 118-272`. A tela nunca diz "right between": as unidades são diferentes (B5).
- **f108** (p25.5 · 8:53–8:57) "Beside the Canadian one, which is per year, it looks cheap."
  - Ids: F091 (CRS R43287, notas 40 e 41: "has previously estimated costs of between $4 million and $34 million per request") [a linha cobre f107 e f108]; F205 (CRS R43287, nota 41: "the U.S. Entity has previously estimated costs of between $4 million and $34 million per request for called-upon flood control") [a linha cobre f107 e f108]; F206 (CRS R43287, nota 40: "called-upon operations would result in $40 million to $150 million per year in lost benefits to the United States") [a linha cobre f107 e f108]; F207 (Public Law 118-272, sec. 1152 (L11): "there is authorized to be appropriated $37,600,000 for fiscal year 2025 and $37,600,000, adjusted for inflation") [a linha cobre f107 e f108]; F208 (fatos-medidas-r2.py: "pagamento por ano: 37.6 million; teto do custo por pedido (US Entity): 34") [a linha cobre f107 e f108].
  - Dado: a mesma régua, com o 37,6 abaixo do piso por ano. "steep" e "cheap" falam dos dois lados, e a tela não julga (cético, pergunta 4).
- **f109** (p26.1 · 8:57–9:01) "So yes, the United States can call on Canada in a flood."
  - Ids: F092 (Tratado, Art. IV(3) (F1): "Canada shall, when called upon by an entity designated by the United States of America for that purpose").
  - Folha: o Art. IV(3) acende (a 3ª vez). Crédito `Source: Columbia River Treaty, Art. IV(3)`.
- **f110** (p26.2 · 9:01–9:03) "And no number says when."
  - Ids: F209 (CRS R43287, nota 39 (L15): "is not currently defined in the Treaty and is likely to be an important point in negotiations").
  - Ilustração: o medidor sem linha, como em f85. Crédito `Source: Congressional Research Service, 2024`.
- **f111** (p26.3 · 9:03–9:08) "Under the deal, it pays so the room is already there, call or no call."
  - Ids: F093 (Nota diplomática dos EUA, 22/11/2024 (L3): "pre-planned FRM operations under the Interim FRM Period Entity Agreement would be distinct from and in no way"); F210 (Public Law 118-272, sec. 1152 (L11): "pre-planned flood storage per operating year at Hugh Keenleyside Dam").
  - Ilustração: o corte do lago, com a faixa reservada já vazia antes do degelo, e "PRE-PLANNED" separado de "CALLED UPON". A nota de 22/11/2024 os separa (F093: "distinct from and in no way"). Crédito `Source: US diplomatic note, Nov. 22, 2024`.
- **f112** (p26.4 · 9:08–9:09) "The treaty is the promise."
  - Ids: F211 (L, apoiada em F092 e F093; nota do verificador: "conclusão do canal sobre o Art. IV(3) e a nota de 22/11/2024") [a linha cobre f112 e f113].
  - Tela: duas colunas, "TREATY · THE PROMISE (ON CALL)". É conclusão do canal (L, F211; a linha cobre f112 e f113).
- **f113** (p26.5 · 9:09–9:11) "The deal is the room."
  - Ids: F211 (L, apoiada em F092 e F093; nota do verificador: "conclusão do canal sobre o Art. IV(3) e a nota de 22/11/2024") [a linha cobre f112 e f113].
  - Tela: a segunda coluna, "DEAL · THE ROOM (RESERVED EVERY YEAR)".
- **f114** (p26.6 · 9:11–9:14) "What the United States is buying is certainty."
  - Ids: F094 (L, apoiada em F093 e F082; nota do verificador: "leitura do canal (a pauta a deixou para o Lucas decidir)").
  - A resposta do título (≈ 9:11, 59 %). A tela não põe nada novo: a frase respira sobre o corte do lago. É conclusão do canal (L, F094).
  - **DECISÃO DO LUCAS PENDENTE** (pauta §4.3 e §10; laudo de fatos): a frase do canal foi narrada no trecho 26. Se o Lucas a tirar, o trecho se refaz e o relógio muda dali em diante ("Para a Sala", item 4).
- **f115** (p27.1 · 9:14–9:16) "Certainty about what, exactly?"
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Abre a 2ª metade do ato.
- **f116** (p27.2 · 9:16–9:19) "Not about whether Canada could shut the river off."
  - Ids: F187 (L, apoiada em F102; nota do verificador: "a medida do p28 (semanas a meses de rio, não o ano)").
  - Mapa: o rio inteiro e a fronteira, sem torneira. É conclusão do canal (L, F187).
- **f117** (p27.3 · 9:19–9:26) "As a tariff fight between the two countries grew, CBC News asked whether ending this treaty could help Canada fight back."
  - Ids: F095 (CBC News, vídeo 'Could ending a water treaty help Canada fight U.S. tariffs?' (registro da Sala em concorrencia.md): "Could ending a water treaty help Canada fight U.S. tariffs?"); F212 (CFJC/Canadian Press, 25/03/2025: "Trade tensions between Canada and the United States have escalated rapidly since Trump took office"); F213 (contagem do verificador sobre a CFJC/CP: "Canada + United States = 2 países").
  - Cartão: "CBC NEWS" com o título do vídeo, "Could ending a water treaty help Canada fight U.S. tariffs?" (F095). Só o texto, sem o quadro do vídeo da CBC. **Sem data**: a data do vídeo não se leu (a cbc.ca dá 403, e o YouTube recusou a leitura automática; laudo, "O que ficou sem leitura"). A pauta (§6, ato 3) queria o cartão com o dono e a data, e a data só entra se a Sala a ler no navegador do app.
  - A briga de tarifas, se a tela a quiser, leva `Source: The Canadian Press (CFJC Today), Mar. 25, 2025` (F212). Trump fica fora da voz e da tela (K8).
- **f118** (p27.4 · 9:26–9:31) "In March 2025, British Columbia's energy minister addressed the idea."
  - Ids: F096 (BC, página do tratado (lida em 12/11/2026): "The session was hosted by Adrian Dix, Minister of Energy and Climate Solutions and Minister Responsible for the Columbia River Treaty"); F097 (CFJC/Canadian Press, 25/03/2025: "Dix says there has been speculation about how the treaty could potentially be used"); F214 (BC, página do tratado (lida em 12/11/2026): "The Province of B.C. hosted a virtual information session March 25, 2025, to share updates"); F215 (CFJC/Canadian Press, 25/03/2025: "This report by The Canadian Press was first published March 25, 2025.").
  - Cartão: "ADRIAN DIX · B.C. MINISTER OF ENERGY AND CLIMATE SOLUTIONS · MAR. 25, 2025" (F096). O cargo inteiro é "Minister of Energy and Climate Solutions and Minister Responsible for the Columbia River Treaty". O retrato só entra pelo `pesquisa-pessoas`, com licença e conferente; sem ele, o cartão vai sem foto. Crédito `Source: Government of British Columbia; The Canadian Press, Mar. 25, 2025`.
- **f119** (p27.5 · 9:31–9:37) ""Canadian action to terminate the treaty would have little effect on the current dispute," he said."
  - Ids: F098 (CFJC/Canadian Press, 25/03/2025: "Canadian action to terminate the treaty would have little effect on the current dispute."); F099 (OPB, 28/03/2025: "would have little effect on the current dispute and would obviously involve losses on all sides,” he said").
  - Cartão de citação com a fala literal (F098, F099), "ADRIAN DIX, MAR. 25, 2025". É citação sendo lida: nenhuma chamada. Crédito `Source: The Canadian Press (CFJC Today), Mar. 25, 2025; OPB, Mar. 28, 2025`. O "bargaining chip" fica fora: é paráfrase de repórter (fatos-c, 3b).
- **f120** (p27.6 · 9:37–9:44) "For one thing, leaving takes ten years' written notice, and nothing we've read says either side has given it."
  - Ids: F100 (Tratado, Art. XIX(2) (F1): "if it has delivered at least ten years written notice to the other of its intention to terminate the Treaty"); F101 (CRS R43287: "To date, neither country has given notice of termination").
  - Folha: o Art. XIX(2), com "at least ten years written notice" aceso, e "NO NOTICE GIVEN · CRS, DEC. 2024" (F101). Crédito `Source: Columbia River Treaty, Art. XIX; Congressional Research Service, 2024`. É volátil: nenhum aviso até 12/11/2026, e se relê antes do render.
- **f121** (p28.1 · 9:44–9:46) "For another, look at what the dams can hold."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Mapa: os três lagos do tratado acendem (Kinbasket, Arrow e Duncan).
- **f122** (p28.2 · 9:46–9:54) "Together, the three treaty lakes in Canada can store as much water as the whole river carries past The Dalles in about six weeks."
  - Ids: F102 (p_contas.py e fatos-medidas-contas.py: "The Dalles: 41.5 dias = 5.9 semanas (about 6)"); F103 (USACE + BPA (F3): "helped fund the construction of the three Treaty dams in Canada"); F104 (Tratado, Art. II(1) (F1): "Canada shall provide in the Columbia River basin in Canada 15,500,000 acre-feet of storage").
  - Dado: OS TRÊS LAGOS ENCHENDO, COM O CALENDÁRIO DE DIAS DE RIO (pauta §6, ato 3). A régua de The Dalles diz "15.5 MILLION ACRE-FEET ≈ 6 WEEKS OF AVERAGE FLOW AT THE DALLES" (41,5 dias; Art. II(1): Mica 7,0, Arrow 7,1, Duncan 1,4). "AVERAGE FLOW" vai escrito (K4). Crédito `Source: Columbia River Treaty, Art. II; Alpha Point calculation: USGS (14105700)`.
  - Nunca "hold back the whole river for six weeks" (pauta §5).
- **f123** (p28.3 · 9:54–10:01) "Measured against the river as it runs through British Columbia, near the border, that's closer to three and a half months."
  - Ids: F105 (p_contas.py e fatos-medidas-contas.py: "Birchbank: 110.0 dias = 3.61 meses (closer to 3.5 than to 4)").
  - Dado: a 2ª régua ao lado, "≈ 3.5 MONTHS AT BIRCHBANK" (110 dias, 3,61 meses). Os dois denominadores ficam juntos (K4). Crédito `Alpha Point calculation: Water Survey of Canada (station 08NE049), USGS (14105700)`, mais a linha da licença.
- **f124** (p28.4 · 10:01–10:04) "Then the lakes are full, and the rest of the river keeps coming."
  - Ids: F216 (L, apoiada em F102 e F105; nota do verificador: "conclusão do canal sobre as contas de semanas e meses").
  - Ilustração: os lagos cheios, e o rio continua passando por cima das réguas. É conclusão do canal (L, F216).
- **f125** (p28.5 · 10:04–10:07) "So Canada can't turn the Columbia off."
  - Ids: F106 (L, apoiada em F102; nota do verificador: "conclusão da medida").
  - Mapa: o rio inteiro correndo. A frase fecha o "who holds the tap" de f34. É conclusão do canal (L, F106).
- **f126** (p28.6 · 10:07–10:13) "What it can do, under plans agreed with the United States, is decide when a big share of that water comes down."
  - Ids: F107 (BC Hydro 2026, p. 7: "the operations of the Treaty reservoirs in B.C must be agreed to by both Canada and the U.S.").
  - Dado: aparece o calendário, a imagem que vira a de f134. Crédito `Source: BC Hydro, 2026`.
- **f127** (p29.1 · 10:13–10:15) "Remember that Canadian gauge?"
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Mapa: o pino de Birchbank acende de novo.
- **f128** (p29.2 · 10:15–10:21) "Before the big storage dams went in upstream, on both sides of the border, June dwarfed February there."
  - Ids: F108 (p_contas.py (WSC): "mês mais cheio: jun 6,134; mais baixo: fev 590; razão 10.4×").
  - Dado: O ANO DO RIO, ANTES E DEPOIS (pauta §6, ato 3). Primeiro, a curva de antes (1938–1967), com o pico de junho. A legenda é "before the big storage dams / after the last one": acima de Birchbank, as barragens incluem Libby (EUA), o não-tratado de Mica e o Revelstoke (pauta §10.1, item 3; K4: "on both sides of the border"). Crédito `Alpha Point calculation: Water Survey of Canada (station 08NE049)`, mais a linha da licença.
- **f129** (p29.3 · 10:21–10:30) "With all of them in place, the river's busiest month carries only about twice its quietest, and the total for the year has barely changed."
  - Ids: F109 (p_contas.py (WSC): "mês mais cheio: jul 2,753; mais baixo: abr 1,320; razão 2.1×"); F110 (p_contas.py (WSC): "depois (1974–2025): 52 anos; média 2,001 m3/s"); F111 (p_contas.py (WSC): "antes (1938–1967): 30 anos; média 2,026 m3/s").
  - Dado: a curva de depois (1974–2025) se sobrepõe, com "≈ 2×", e a média do ano fica quase igual (2.026 → 2.001 m³/s, −1,2 %; em cfs na tela). O crédito é o mesmo.
- **f130** (p29.4 · 10:30–10:31) "The water wasn't taken away."
  - Ids: F188 (p_contas.py (WSC): "depois (1974–2025): 52 anos; média 2,001 m3/s").
  - Dado: as áreas sob as duas curvas, iguais.
- **f131** (p29.5 · 10:31–10:37) "It was moved: into winter, to make power, and out of spring, to leave room for the flood."
  - Ids: F112 (p_contas.py (WSC): "mai–jul = 31.6 % do volume; dez–fev = 25.8 %"); F113 (BC Hydro 2026, p. 25: "drafted for winter and early spring energy and to ensure space for flood risk management prior to peak snow melt").
  - Dado: setas entre as curvas. Maio a julho vai de 58,8 % para 31,6 % do ano, e dezembro a fevereiro, de 7,8 % para 25,8 % (F112). Crédito `Alpha Point calculation: Water Survey of Canada; BC Hydro, 2026`. A tela não liga o achatamento ao pagamento de 2025 (K4; pauta §5).
- **f132** (p30.1 · 10:37–10:40) "And the timing isn't Canada's alone to set."
  - Ids: F189 (BC Hydro 2026, p. 7: "the operations of the Treaty reservoirs in B.C must be agreed to by both Canada and the U.S.").
  - Crédito `Source: BC Hydro, 2026`.
- **f133** (p30.2 · 10:40–10:49) "Canada did not turn over control of its reservoirs to the United States, BC Hydro says, and the two sides have to agree on how the treaty lakes are run."
  - Ids: F114 (BC Hydro 2026, p. 7 (L12): "Canada did not turn over control of its reservoirs to the U.S. Rather, the operations of the Treaty reservoirs in B.C must be agreed to by both Canada and the U.S."); F177 (contagem do verificador sobre a BC Hydro: "quem acerta a operação das barragens do tratado (BC Hydro 2026, p. 7): both Canada and the U.S. = 2 lados").
  - Cartão de citação (opcional) com a letra da BC Hydro (F114): "Canada did not turn over control of its reservoirs to the U.S. Rather, the operations of the Treaty reservoirs in B.C must be agreed to by both Canada and the U.S." É citação sendo lida: nenhuma chamada. Crédito `Source: BC Hydro, 2026`.
- **f134** (p31.1 · 10:49–10:52) "What Canada has in its hands, then, is a calendar."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Ilustração: o calendário do ano do rio, com as páginas dos meses. É a imagem da resposta (≈ 10:49, 70 %).
- **f135** (p31.2 · 10:52–10:57) "And for every spring of the deal, the United States pays to have one page of it settled in advance."
  - Ids: F115 (Public Law 118-272, sec. 1152: "pre-planned flood storage per operating year").
  - Ilustração: uma página do calendário, a primavera, fica fixada, e por trás aparece o corte do lago com a faixa reservada. Crédito `Source: U.S. Public Law 118-272` (o pagamento é por ano de operação).

### p4 · What the room was before (f136–f152 · 10:58–12:22 · 240 palavras)

- **f136** (p32.1 · 10:58–10:59) "That room came from somewhere."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Transição para o chão.
- **f137** (p32.2 · 10:59–11:05) "Stand on the shore of the Arrow Lakes in late winter, when the water is low, and it's in front of you."
  - Ids: F116 (BC Hydro 2018 (F15): "the reservoir reached its minimum level of 427.15 metres (1,401.4 feet) on February 4, 2017").
  - Imagem real: o Arrow baixo no fim do inverno, visto do chão, com a margem larga. É a mesma busca da abertura, de outro ângulo (Nakusp ou Fauquier, pauta §6, 1-B). A foto de outro ano leva o aviso do ano. Crédito `Source: BC Hydro, 2018` (o mínimo de fevereiro e março), mais o da foto.
- **f138** (p32.3 · 11:05–11:09) "There's a wide strip of bare ground between the lake and the trees."
  - Ids: F117 (BC Hydro 2026, p. 21: "for Arrow Lakes Reservoir is between 440.1 metres (1,444 feet) and 419.9 metres (1,377.9 feet)").
  - Imagem real: a mesma foto. Por cima, a ilustração marca a faixa entre a linha d'água e as árvores. A faixa licenciada (1,377.9 a 1,444 pés, F117; 66 pés de altura) só vai à tela se ajudar. Crédito `Source: BC Hydro, 2026`.
- **f139** (p32.4 · 11:09–11:11) "By summer, the water will cover it."
  - Ids: F118 (BC Hydro 2018 (F15): "434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June").
  - Ilustração: a linha do nível sobe até a mata, como no fim de junho (F118). Crédito `Source: BC Hydro, 2018`.
- **f140** (p32.5 · 11:11–11:14) "Part of that strip is the room, seen from the ground."
  - Ids: F119 (BC Hydro 2026, p. 21: "Arrow Lakes Reservoir provides 7.1 MAF of Treaty storage"); F217 (Public Law 118-272, sec. 1152 (L11): "reserving and operating 3,600,000 acre- feet of pre-planned flood storage per operating year at Hugh Keenleyside Dam").
  - Ilustração: dentro da faixa, a parte paga vai tracejada, sem altura em pés e sem fração. Os 3,6 MAF são parte dos 7,1 MAF do tratado em Arrow (51 %, F119), e a tela não diz "half". Crédito `Source: U.S. Public Law 118-272; BC Hydro, 2026`.
- **f141** (p32.6 · 11:14–11:18) "Before the treaty dams, people lived along these valleys."
  - Ids: F120 (BC, A Review of the Range of Impacts and Benefits, 2012 (F6): "Approximately 2,300 people were displaced and more than a dozen small communities were inundated primarily in the Arrow Lakes and Koocanusa Reservoirs").
  - Imagem real: as vilas antes da cheia (pauta §6, imagem 8: BC Archives ou museus locais, licença a ler), com o aviso do ano se a foto for de outro ano. **Sem casa queimando** (pauta §5). Crédito `Source: Government of British Columbia, 2012`, mais o da foto.
- **f142** (p33.1 · 11:18–11:27) "The government of British Columbia puts the count at about 2,300 people displaced, and more than a dozen small communities flooded."
  - Ids: F121 (BC, Review 2012 (F6): "Approximately 2,300 people were displaced and more than a dozen small communities were inundated").
  - Mapa: as vilas como pontos ao longo do Arrow, só com os nomes da fonte (Edgewood, Fauquier, Burton e Renata; F122, F123), e "≈ 2,300 PEOPLE DISPLACED · MORE THAN 12 COMMUNITIES FLOODED". Crédito `Source: Government of British Columbia, 2012`. Os 110.000 ha (pauta §4.4, só na tela) não têm linha na tabela final: entram só com o verificador.
- **f143** (p33.2 · 11:27–11:29) "Some, like Edgewood and Burton, were relocated."
  - Ids: F122 (BC, Review 2012 (F6): "Relocation of the communities of Edgewood, Fauquier and Burton").
  - Mapa: Edgewood e Burton com o rótulo "RELOCATED". A fonte dá também Fauquier (F122), e a tela pode mostrá-lo. Não há seta para o lugar novo, porque ele não se leu. Crédito `Source: Government of British Columbia, 2012`.
- **f144** (p33.3 · 11:29–11:31) "Renata no longer exists."
  - Ids: F123 (BC, Review 2012 (F6): "Some communities such as Renata, no longer exist").
  - Mapa: o ponto de Renata se apaga, em silêncio e sem trilha de suspense (pauta §5). Crédito `Source: Government of British Columbia, 2012`.
- **f145** (p33.4 · 11:31–11:38) "Farther north, the river's big bend in British Columbia went under another of the treaty's lakes, and a town went under with it."
  - Ids: F124 (BC Geographical Names (F16): "Formerly the "Big Bend" area of the Columbia River, and named for the former town of Mica Creek, drowned under the pondage.").
  - Mapa: o Kinbasket sobre a curva (o mesmo de f17), com "MICA CREEK (FORMER TOWN)" (F124). Crédito `Source: BC Geographical Names`.
- **f146** (p33.5 · 11:38–11:47) "As for how residents and First Nations were consulted, the province itself says that consultation "could be considered inadequate to non-existent by today's standards.""
  - Ids: F125 (BC, About the Columbia River Treaty (F5): "First Nations and public consultation and mitigation at the time could be considered inadequate to non-existent by today’s standards").
  - Cartão de citação, letra a letra e com o apóstrofo curvo (F125), com o dono, "GOVERNMENT OF BRITISH COLUMBIA". É citação sendo lida: nenhuma chamada. Crédito `Source: Government of British Columbia, "About the Columbia River Treaty"`.
- **f147** (p34.1 · 11:48–11:51) "The Arrow Lakes lie in the traditional territory of the Sinixt."
  - Ids: F130 (R. v. Desautel, 2021 SCC 17, §6 (F11): "only 21 Sinixt still lived on their traditional territory in Canada, in the Arrow Lakes Band reserve"); F131 (SCC, Case in Brief (F11): "The place where he shot the elk was within this territory.").
  - Mapa: os Arrow Lakes, com "SINIXT · TRADITIONAL TERRITORY" sobre o lago e **sem contorno de território**: nenhuma geometria se leu, e a fonte só diz que a região está dentro dele. Crédito `Source: Supreme Court of Canada, R. v. Desautel, 2021`. "Sinixt" é o nome de maior risco na escuta (o Whisper ouviu "cynicst"; `pronuncia.md`: "sin-AYKST").
- **f148** (p34.2 · 11:51–11:56) "In 1956, the government of Canada declared the Arrow Lakes Band extinct."
  - Ids: F132 (R. v. Desautel, §6 (F11): "after her death in 1956, the gov- ernment of Canada declared the Arrow Lakes Band extinct").
  - Folha recriada: o §6 do acórdão, com a linha "after her death in 1956, the government of Canada declared the Arrow Lakes Band extinct" acesa. O resto do §6 (21 em 1902, uma em 1930; pauta §4.4) fica na folha, com o dono. Crédito `Source: Supreme Court of Canada, R. v. Desautel, 2021 SCC 17, para. 6`.
  - Nunca "the Sinixt are extinct", nem "declared extinct, so no one was consulted". A ligação entre 1956 e as barragens fica fora: é inferência (pauta §4.4 e §5).
- **f149** (p34.3 · 11:56–12:01) "Decades later, the Supreme Court of Canada recounted that history in a ruling."
  - Ids: F133 (R. v. Desautel (F11): "R. v. DESAUTEL [2021] 1 S.C.R."); F218 (R. v. Desautel, 2021 SCC 17, §6: "after her death in 1956, the gov- ernment of Canada declared the Arrow Lakes Band extinct").
  - Tela: "R. v. DESAUTEL · 2021 SCC 17 · APR. 23, 2021" (laudo, "A lista de nomes"). A Corte é dita na voz.
- **f150** (p34.4 · 12:01–12:07) "It found that a successor group of the Sinixt, based in Washington State, is an Aboriginal people of Canada."
  - Ids: F134 (R. v. Desautel (F11): "Accordingly, the Lakes Tribe is an Aboriginal people of Canada."); F135 (R. v. Desautel (F11): "the Lakes Tribe are a modern successor of the Sinixt"); F136 (R. v. Desautel, §4 (F11): "Lakes Tribe of the Colville Confederated Tribes based in the State of Washington").
  - Tela: **"LAKES TRIBE OF THE COLVILLE CONFEDERATED TRIBES · WASHINGTON STATE"** (F136). O nome saiu da voz e vai à tela (lista D; laudo). A frase do acórdão, "the Lakes Tribe is an Aboriginal people of Canada" (F134), pode ir à folha. Depois, uma pausa, sem trilha de suspense (pauta §7, ato 4).
- **f151** (p35.1 · 12:07–12:11) "And the river had lost something even before the treaty dams."
  - Ids: F129 (p_contas.py: "1941 → 1967/1973 = 26/32"); F219 (Reclamation, Grand Coulee FAQ: "Grand Coulee Dam stopped the natural migratory runs of fish on the upper Columbia River.").
  - Mapa: a câmera desce o rio até o Grand Coulee, no estado de Washington.
- **f152** (p35.2 · 12:11–12:22) "Grand Coulee Dam, built by the United States far downstream and finished in 1941, stopped the natural migratory runs of fish, salmon among them, on the upper Columbia."
  - Ids: F126 (Bureau of Reclamation, Grand Coulee FAQ (F10): "the original dam structure and Left Powerhouse completed in 1941"); F127 (Bureau of Reclamation (F10): "Grand Coulee Dam stopped the natural migratory runs of fish on the upper Columbia River."); F128 (Bureau of Reclamation (F10): "This included the second most important salmon fishery on the Columbia River at Kettle Falls").
  - Imagem real: o Grand Coulee (pauta §6, imagem 7: Bureau of Reclamation, federal). Mapa: a seta do salmão sobe o rio e para no Grand Coulee em 1941 (pauta §6, ato 4), com "GRAND COULEE DAM · 1941". Kettle Falls entra se a tela quiser (F128: "the second most important salmon fishery on the Columbia River at Kettle Falls"). Crédito `Source: U.S. Bureau of Reclamation`.
  - Nunca "the treaty dams killed the salmon", nem "Grand Coulee, 1942" (pauta §5). Os "26 years" ficam fora (K6).

### p5 · What each side puts on the scale (f153–f178 · 12:22–14:21 · 338 palavras)

- **f153** (p36.1 · 12:22–12:24) "So that is the room, and what it cost."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Ilustração: o corte do lago, parado.
- **f154** (p36.2 · 12:24–12:27) "What it's worth depends on who is counting."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - A BALANÇA volta, com os dois pratos vazios (pauta §6, ato 5).
- **f155** (p37.1 · 12:28–12:31) "As the paid years ended, each side gave something up."
  - Ids: F190 (CRS R43287: "Beginning August 1, 2024, the Canadian Entitlement decreased by 37%.").
  - Dado: a régua do ato 5 começa (pauta §6, ato 5: jul/2024, set/2024, nov/2024, jan/2025, mar/2025, jun/2026, a primavera de 2027, 31/08/2027), com "AUG. 1, 2024" e "2025". Crédito `Source: Congressional Research Service, 2024`.
- **f156** (p37.2 · 12:31–12:34) "Canada agreed to a smaller share of the power."
  - Ids: F137 (CRS R43287 (o Departamento de Estado, 25/11/2024): "Beginning August 1, 2024, the Canadian Entitlement decreased by 37%.").
  - Dado: a curva da parte do Canadá. A pauta (§6, ato 5) a quer de 1.141 MW (2023) a 550 MW (2034–2044), em DADO, mas esses números não têm linha na tabela final: entram só com o verificador. Sem eles, vai só o "−37%" de f157.
- **f157** (p37.3 · 12:34–12:35) "The cut was more than a third."
  - Ids: F220 (CRS R43287: "Beginning August 1, 2024, the Canadian Entitlement decreased by 37%."); F221 (fatos-medidas-r2.py: "corte da parte do Canadá: 37 % contra 1/3 = 33.3 %: True (more than a third)").
  - Tela: **"−37% · SINCE AUG. 1, 2024 · U.S. STATE DEPARTMENT, NOV. 25, 2024"** (F137, F220; o laudo de fatos, "Para a tela"). A voz diz "more than a third", e o portão lê isso como "mais que 3" (limitação declarada no laudo).
- **f158** (p37.4 · 12:35–12:40) "The United States agreed to pay by the year for room it had once paid for up front."
  - Ids: F139 (BC, AIP Public Description (L4): "The United States is expected to compensate Canada for preplanned FRM by providing US$ 37.6 million per year, indexed to inflation"); F232 (Tratado, Art. VI(1) (F1): "52,100,000 dollars upon the commencement of operation of the storage referred to in").
  - Dado: dois blocos, "ONCE, UP FRONT · 1964 TREATY" (as parcelas de cada barragem) e "EVERY YEAR · SINCE THE 2025 FLOOD SEASON". **Sem os 64,4 e os 37,6 lado a lado** (pauta §5: o par só com a inflação; "Para a Sala", item 6). Crédito `Source: Government of British Columbia, 2024; Columbia River Treaty, Art. VI(1)`.
- **f159** (p38.1 · 12:41–12:44) "Each side has its own account of what the other gains."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - A BALANÇA: os dois pratos recebem um dono cada.
- **f160** (p38.2 · 12:44–12:52) "The American agencies that run the treaty once estimated that ending it would raise American power revenues, mostly by ending Canada's share."
  - Ids: F141 (CRS R43287, nota 26: "net annual revenues for the United States would increase by about $180 million to $280 million"); F142 (CRS R43287, nota 12: "Columbia River Treaty 2014/2024 Review: Recent Study Results,” June 2012"); F143 (CRS R43287: "largely due to the termination of the Canadian Entitlement"); F222 (CRS R43287, nota 44: "under a Treaty termination scenario, the United States would gain significant revenue").
  - Dado, no prato americano: **"$180–280 MILLION A YEAR · U.S. ENTITY, JUNE 2012"**, em dólar americano (lista D; o laudo, "Para a tela"). Crédito `Source: Congressional Research Service, 2024 (U.S. Entity study, June 2012)`. O estudo de 2012 não se leu no original: ele só existe numa cópia arquivada de site federal, que a regra do canal não deixa usar (pauta §11, item 14).
  - Nunca "the US loses money on the treaty", nem a estimativa sozinha como virada (pauta §5).
- **f161** (p38.3 · 12:52–12:54) "British Columbia disputed those assumptions."
  - Ids: F145 (CRS R43287: "It disputed several assumptions in the U.S. Entity’s review process."); F146 (CRS R43287: "the Canadian Entity (the Province of British Columbia)").
  - Tela: "DISPUTED BY BRITISH COLUMBIA (CANADIAN ENTITY)". Crédito `Source: Congressional Research Service, 2024`.
- **f162** (p38.4 · 12:54–13:03) "Its argument is that the treaty makes the river dependable, and that a dependable river is worth more to the United States than the share it sends north."
  - Ids: F147 (CRS R43287: "Canada has argued that the reliability of operations provided for under the Treaty allows for generation that is worth more to the United States than the Canadian Entitlement"); F148 (CRS R43287, nota 43: "To date, Canada has not produced estimates of the cost of this lack of reliability. British Columbia U.S. Benefits Study").
  - Dado, no prato canadense: **"CANADA'S SHARE: TYPICALLY $110–400 MILLION A YEAR · BC HYDRO, JUNE 2026"**, **sem "US$"** (o slide não diz a moeda) e com o "typically" da fonte (lista D; laudo do r1, item 3). Crédito `Source: Congressional Research Service, 2024; BC Hydro, 2026`.
  - A faixa é o valor da parte do Canadá, não da confiabilidade: o CRS diz que o Canadá não estimou o custo da falta dela (F148). A tela não põe número no "dependable river".
- **f163** (p38.5 · 13:03–13:06) "Two careful sums, and they don't land in the same place."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - A BALANÇA: os dois pratos lado a lado, cada um com o dono, a data e a unidade, sem ponteiro que diga quem tem razão (cético: "elogia as duas contas por igual").
- **f164** (p39.1 · 13:06–13:10) "When you hear that the United States pays, it's fair to ask who that is."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Mapa: os EUA, e a câmera aproxima o estado de Washington.
- **f165** (p39.2 · 13:10–13:14) "The payment for the room is federal: Congress authorized it."
  - Ids: F151 (Public Law 118-272, sec. 1152: "is authorized to compensate, and make arrangements with, the Government of Canada").
  - Tela: "FEDERAL · PUBLIC LAW 118-272". Crédito `Source: U.S. Public Law 118-272`.
- **f166** (p39.3 · 13:14–13:19) "Canada's share is power, and part of the bill for that power falls on utilities along the river."
  - Ids: F152 (APPA, 25/09/2026 (lida em 12/11/2026): "supplying the United States with 27.5% of the power the U.S. was obligated to return to Canada"); F223 (The Star (Grand Coulee), 30/09/2026: "the Mid-Columbia PUDs will pay for 25% of the reduced Canadian Entitlement (CE) obligations").
  - Mapa: o estado de Washington, com as três PUDs como pontos (Chelan, Grant e Douglas; pauta §10.1, "só como pontos"). "27.5%" é opcional (F152: a parte delas na energia devolvida ao Canadá). Crédito `Source: American Public Power Association, Sept. 25, 2026`. É volátil (`[puds]`) e se relê antes do render.
- **f167** (p39.4 · 13:19–13:28) "Three of them, in Washington State, went to court and stopped paying their part, and in September 2026 they settled with the federal government."
  - Ids: F153 (APPA, 25/09/2026: "The Mid-Columbia PUDs initiated litigation in June 2024"); F224 (APPA, Paul Ciampoli, 25/09/2026: "The three Mid-Columbia River public utility districts, Chelan, Grant and Douglas, approved a settlement agreement"); F225 (APPA, Paul Ciampoli, 25/09/2026: "the Mid-Columbia PUDs stopped contributing to the CE in September 2024"); F226 (APPA, Paul Ciampoli, 25/09/2026: "Ending Litigation Over Columbia River Treaty Payments September 25, 2026"); F227 (APPA, Paul Ciampoli, 25/09/2026: "resolve ongoing litigation with the U.S. government"); F228 (BPA, Record of Decision, 1999: "are owned and operated by three Washington state public utility").
  - Tela: a linha do tempo, "JUNE 2024: LAWSUIT · SEPT. 2024: STOPPED PAYING · SEPT. 25, 2026: SETTLEMENT" (F153, F225, F226), e "25% FROM NOW ON" (The Star, F223). O valor do acordo (US$ 29,9 milhões; pauta §4.5 e o alerta `[puds]`, "o valor fica na tela") não tem linha na tabela final: entra só depois de o verificador o reler. Crédito `Source: American Public Power Association, Sept. 25, 2026; The Star (Grand Coulee), Sept. 30, 2026`.
- **f168** (p40.1 · 13:28–13:31) "There is a longer plan, in outline."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - A régua do ato 5 continua.
- **f169** (p40.2 · 13:31–13:38) "Shortly before the paid years ended, the two governments announced an agreement in principle on a modernized treaty."
  - Ids: F154 (CRS R43287: "announced an agreement in principle on terms of modernization of the Treaty on July 11, 2024"); F178 (CRS R43287: "announced an agreement in principle between the two countries on the terms for modernization of the Treaty").
  - A régua: "AGREEMENT IN PRINCIPLE · JULY 11, 2024" (F154). Crédito `Source: Congressional Research Service, 2024`.
- **f170** (p40.3 · 13:38–13:39) "It has not been finalized."
  - Ids: F155 (BC Hydro 2026, p. 8: "Until a new Treaty is finalized, operations are subject to current Treaty requirements.").
  - Tela: "NOT FINALIZED · BC HYDRO, JUNE 2026" (F155). É volátil. Nunca "never finalized" (pauta §5).
- **f171** (p40.4 · 13:39–13:44) "Canada's negotiating team includes representatives of three First Nations."
  - Ids: F158 (Global Affairs Canada, Question Period Note, 28/05/2025: "The Canadian delegation is made up of federal, provincial and First Nation representatives from the Ktunaxa, the Syilx-Okanagan and the Secwépemc Nations"); F159 (contagem do verificador sobre a nota da GAC: "Ktunaxa, Syilx-Okanagan, Secwépemc = 3 nações").
  - Tela: "KTUNAXA · SYILX-OKANAGAN · SECWÉPEMC", na grafia da nota da GAC, com o acento (F158). Crédito `Source: Global Affairs Canada, May 28, 2025`. É volátil: vale o presente da nota mais nova.
- **f172** (p40.5 · 13:44–13:50) "In March 2025, British Columbia's government announced that the United States had paused the talks."
  - Ids: F156 (BC News, 11/03/2025: "The U.S. has paused negotiations with Canada on an amended Columbia River Treaty."); F157 (BC News, 11/03/2025: "Victoria Tuesday, March 11, 2025").
  - A régua: "TALKS PAUSED · MAR. 11, 2025" (F156, F157). O dono é dito na voz. Trump fica fora (K8): a Canadian Geographic atribui a pausa a ele, mas a voz e a tela ficam com o dono do anúncio.
- **f173** (p40.6 · 13:50–13:57) "As of August 2026, the magazine Canadian Geographic reported that the talks had not resumed."
  - Ids: F160 (Canadian Geographic, 17/08/2026: "At the time of writing, the negotiations are still paused"); F161 (Canadian Geographic, 17/08/2026: "in the age of Trump Aug 17, 2026").
  - A régua: "STILL PAUSED · CANADIAN GEOGRAPHIC, AUG. 17, 2026" (F160, F161). É volátil.
- **f174** (p41.1 · 13:57–13:58) "That leaves the clock."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - A régua corre até 2027.
- **f175** (p41.2 · 13:58–14:04) "The temporary deal can cover up to three flood seasons, and the spring of 2027 is the third."
  - Ids: F162 (Nota diplomática dos EUA, 22/11/2024 (L3): "operations for up to three consecutive operating years for which the U.S. Entity elects for the provision of those operations by compensating the Canadian Entity. The Interim FRM Period is defined to…").
  - A régua: três primaveras (2025, 2026 e 2027), cada uma com a faixa do corte do lago, e "UP TO 3 OPERATING YEARS · ENDS JULY 31, 2027 AT THE LATEST" (F162). A tela pode dar a data com o dono; a voz não. Crédito `Source: US diplomatic note, Nov. 22, 2024`.
- **f176** (p41.3 · 14:04–14:11) "The law that authorizes the payment expires at the end of August 2027, unless Congress extends it."
  - Ids: F163 (Public Law 118-272, sec. 1152(c)(3): "shall expire on August 31, 2027").
  - Tela: "AUTHORITY EXPIRES AUG. 31, 2027 · PUBLIC LAW 118-272" (F163).
- **f177** (p41.4 · 14:11–14:16) "As of November 2026, a Senate bill would move that date to 2029."
  - Ids: F164 (S. 4949 (RS), sec. 1367: "in paragraph (3), by striking ``2027'' and inserting ``2029''"); F229 (Public Law 118-272, sec. 1152 (L11): "subsection shall expire on August 31, 2027"); F230 (govinfo, BILLSTATUS do S. 4949 (lido em 12/11/2026): "Placed on Senate Legislative Calendar under General Orders. Calendar No. 457."); F231 (govinfo, BILLSTATUS do S. 4949 (lido em 12/11/2026): "lida em: 2026-11-12 (verificador de fatos, vídeo 7, User-Agent do canal, um pedido por vez)").
  - Tela: "S. 4949 WOULD MOVE IT TO 2029 · ON THE SENATE CALENDAR SINCE JULY 15, 2026 · AS OF NOV. 12, 2026" (F164, F230, F231). Crédito `Source: U.S. Senate, S. 4949 (2026); govinfo`. É o volátil da lei, e se relê antes do render e de novo antes da publicação.
- **f178** (p41.5 · 14:16–14:21) "The treaty itself remains in force, on-call promise, missing number and all."
  - Ids: F165 (Nota diplomática dos EUA, 22/11/2024 (L3): "recognizes that the scope of the Treaty, which remains in force").
  - Folha: o tratado inteiro, com "IN FORCE" (F165). Crédito `Source: US diplomatic note, Nov. 22, 2024`. É volátil: nenhum aviso de saída. É o último fato novo (≈ 14:16, 92 %).

### Fecho · uma volta do ano do lago (f179–f189 · 14:21–15:08; a cauda até 15:28 · 159 palavras)

- **f179** (p42.1 · 14:21–14:22) "It starts with snow."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Mapa ou imagem real: as montanhas sobre os Arrow Lakes, com neve. Com relevo 3D, só se houver o ok da MapTiler deste vídeo.
- **f180** (p42.2 · 14:22–14:29) "By the end of winter, the mountains above the Arrow Lakes are holding a large part of the year's water, and none of it has moved."
  - Ids: F166 (CRS R43287 (L1): "Approximately 60% of this runoff occurs in May, June, and July.").
  - A mesma imagem, parada. A frase repete a ideia de f23 e não pede número na tela.
- **f181** (p42.3 · 14:29–14:35) "Down in the valley, the lake is at its lowest point of the year, with that strip of bare ground showing."
  - Ids: F167 (BC Hydro 2018 (F15): "the reservoir reached its minimum level of 427.15 metres (1,401.4 feet) on February 4, 2017").
  - Imagem real: o Arrow no ponto mais baixo (fevereiro), com a margem larga (pauta §6, fecho; a mesma busca da abertura). O nível de 2017 vai só na tela, se quiser: "1,401.4 FT · FEB. 4, 2017 · BC HYDRO" (F167; K6). Crédito `Source: BC Hydro, 2018`, mais o da foto.
- **f182** (p42.4 · 14:35–14:37) "Nothing much is happening yet."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - A imagem parada (um respiro).
- **f183** (p42.5 · 14:37–14:39) "The room is there, and the flood isn't."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - Ilustração: o corte do lago, com a faixa vazia, a última vez antes do degelo. A frase ecoa a assinatura.
- **f184** (p43.1 · 14:39–14:40) "Then the melt comes."
  - Ids: — (NADA A CHECAR no laudo de fatos: pergunta, transição, imagem sem fato ou a assinatura).
  - O degelo começa nos riachos.
- **f185** (p43.2 · 14:40–14:48) "Through May and June, the creeks fill, the river rises, and the lake climbs back up its shore until the bare ground is gone."
  - Ids: F168 (BC Hydro 2018 (F15): "434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June").
  - Ilustração: a linha do nível sobe com o degelo até junho (pauta §6, fecho; os pontos da BC Hydro: 1,425 pés no fim de maio e 1,442 no fim de junho, F168), num movimento lento. Crédito `Source: BC Hydro, 2018`.
  - **A chamada de comentário** entra aqui, de ≈ 14:40,4 a 14:46,4 (6 s), e sai antes de f186 ("As chamadas").
- **f186** (p43.3 · 14:48–14:56) "Part of a flood that would have reached Portland stays up in the valley instead, behind a dam in British Columbia, and goes down later, a little at a time."
  - Ids: F169 (Public Law 118-272, sec. 1152: "to minimize the flood risk in the Columbia River Basin").
  - Mapa: o rio do Arrow até Portland (pauta §6, fecho), com a cheia parada no vale e descendo aos poucos. Crédito `Source: U.S. Public Law 118-272` (F169: o espaço em Keenleyside, "to minimize the flood risk in the Columbia River Basin"). A frase fala da barragem, não do pagamento: a tela nunca diz "without the payment, Portland would flood" (pauta §5; cético, pergunta 4).
- **f187** (p44.1 · 14:57–15:01) "Next winter, the lake will drop again, and the snow will come back."
  - Ids: F191 (BC Hydro 2018 (F15): "Since then, the reservoir has been drafting to meet Treaty flood control requirements.").
  - Ilustração: o ciclo do corte recomeça, o lago desce e a neve volta.
- **f188** (p44.2 · 15:01–15:04) "For now, the United States pays to have that room waiting."
  - Ids: F170 (BC Hydro 2026, p. 7: "required to pay Canada annual payments of USD").
  - Ilustração: o corte do lago, com a faixa vazia "à espera". É volátil (o pagamento em vigor; F170). O alerta `now` está decidido: é o presente datado, com 2027 na frase seguinte.
- **f189** (p44.3 · 15:04–15:08) "And the spring of 2027 is as far as this deal can reach."
  - Ids: F171 (Nota diplomática dos EUA (L3): "following the entry into force of the Modernized Treaty, or July 31, 2027.").
  - Mapa: recuo lento até a bacia inteira, com "SPRING 2027" na faixa. Depois, o mapa escurece para a cauda de 20 s (15:08,0 a 15:28,0; identidade §5, a tela final). Crédito `Source: US diplomatic note, Nov. 22, 2024`. Sem previsão, e nunca "at least on paper" (K8).

## Para a Sala, antes da regência

O laudo de fatos não pede troca: nenhuma linha DIVERGE, nenhuma é REFUTADA, e nenhuma ficou sem leitura. O cético não deu GRAVE. O que fica
aberto é de tela, de relógio e de decisão.

### O que a Sala decide

1. **A MapTiler deste vídeo, e o relevo 3D.** A pauta (§10) deixou essa pergunta para o Lucas, e `sala/mapas-e-maptiler.md` não registra o
   ok do vídeo 7.
   - O gancho (o voo do globo, f1), o ato 1 (o rio, a neve; f10–f20) e o fecho (as montanhas sobre o Arrow; f179) pedem satélite, e o
     relevo só vem com o ok.
   - Sem ele, nenhuma cena de mapa se renderiza nem passa pelos portões com a pré-carga.
   - Antes da primeira cena de mapa, o contador se anota (CLAUDE.md, "Os especialistas").
2. **A caça.** O drone 4K do Arrow baixo, para a abertura, e o do Kinbasket e do Columbia perto de Castlegar (pauta §6 e §10) só se caçam
   quando o Lucas pedir. Sem a caça, a abertura é a foto do Arrow baixo (1-B), com o empurrão lento, e o gancho perde o movimento de verdade
   dos 0–3 s.
3. **O 39 % no gancho, na tela?** A pauta (§8, 20–28 s) punha o medidor, "≈ 39%" e "88 YEARS OF GAUGES" no gancho. O roteiro final os levou
   ao ato 1 (o briefing e a lista B1: menos nomes antes do mapa, um número só), e a voz de f4 não tem número. **A proposta:** f4 sem número
   na tela (a linha azul engrossando pela Colúmbia Britânica), e o 39 % só a partir de f31, quando a voz o diz.
4. **"What the United States is buying is certainty."** (f114) é a DECISÃO DO LUCAS PENDENTE da pauta (§4.3 e §10) e do laudo de fatos.
   - A frase está narrada, no trecho 26.
   - Se o Lucas a tirar, o trecho se refaz sozinho e a custo baixo (`narrar.mjs rio-columbia --refazer=26`; `narracao-conferencia.md`), e o
     relógio muda dali em diante.
   - A regência espera a resposta, ou trata f114 e o que vem depois como móveis.
5. **A chamada de comentário** (acima, "As chamadas"). Falta decidir:
   - o lugar: f185, de 14:40,4 a 14:46,4, com `?lugar=cima` se a linha do nível ocupar o terço de baixo;
   - a pergunta, entre as três do roteirista. "Where does your nearest river begin?" tem aviso de quebra; a variante "Where does the river
     nearest you begin?" não tem.

   Fecham o regente (`regencia.json` › `_chamadas`) e o redator (`_perguntas.mjs`).
6. **Os 64,4 e os 37,6 milhões** (f158; também f78). A pauta §5 proíbe pôr os dois lado a lado sem a inflação. **A proposta:** a tela
   mostra só "ONCE, UP FRONT" contra "EVERY YEAR", sem os valores. O cético ofereceu "64.4 million dollars of the day" para a voz e não o
   pôs na lista; a voz já está gravada.
7. **Os números da pauta sem linha na tabela final**, que a pauta queria na tela:
   - 30/05/1948, em Vanport (f46);
   - os US$ 253.929.534,25 (f70);
   - os 110.000 ha (f142);
   - 1.141 → 550 MW (f156);
   - os US$ 29,9 milhões das PUDs (f167);
   - os 21 Sinixt de 1902 e a uma de 1930 (f148).

   Cada um vai à tela só depois de o verificador o conferir com o redator. Senão, fica fora.
8. **A escuta do Lucas vem antes do relógio.**
   - Os nomes de risco são "Sinixt" (o trecho 34, que o Whisper ouviu como "cynicst") e "The Dalles" (os trechos 9, 21, 22 e 28), em
     `narracao-conferencia.md`.
   - Um trecho refeito muda os tempos dele e os de depois. O `ingest` (o `words.json`) espera a escuta, e a regência espera o `words.json`.
   - Os tempos deste dossiê são do `narracao.json` de 12/11/2026.

### O que falta ler antes da arte

- **A data do vídeo da CBC** (f117) não se leu. A cbc.ca dá 403, e o YouTube recusou a leitura automática; só o título foi lido, pela Sala,
  no navegador do app, em 09/11/2026 (`concorrencia.md`). O cartão vai sem data, ou a Sala lê a data no navegador do app. O 403 nunca se
  contorna.
- **A data do estudo da Colúmbia Britânica** dos US$ 40–150 milhões (f106) também não se leu. É o "British Columbia U.S. Benefits Study",
  nota 40 do CRS (pauta §11, item 2). A tela não lhe dá data.
- **O estudo da US Entity de 2012 no original** (f160) só existe numa cópia arquivada de site federal, que a regra do canal não deixa usar.
  O crédito é o CRS.
- **A regulação do lago Kootenay antes de 1938** (Corra Linn; pauta §11, item 8) não aparece nos laudos do roteiro. A legenda do ano do rio
  (f41, f128–f131) diz "before the big storage dams", nunca "natural".
- **A série de níveis do Arrow** (BC Hydro, com a licença a ler; pauta §10.1, item 6, e §11, item 9) ainda não existe. Sem ela, o corte do
  lago usa os pontos de 2017–18 ou fica esquemático.
- **As imagens da pauta §6** não foram buscadas. Cada arquivo precisa da licença conferida e do veredito do `conferente-de-midia` antes da
  cena, e a foto de outro ano, do aviso do ano (identidade §6).
- **O retrato do Adrian Dix**, se o cartão o quiser (f118), só pelo `pesquisa-pessoas` e pelo conferente.
- **A geometria** (pauta §10.1, pelo `pesquisa-geo`):
  - a bacia cortada pela fronteira;
  - o rio da nascente à fronteira, contra as 498 mi do USGS;
  - o Koocanusa cortado pela fronteira, contra as 42 milhas;
  - o laço do Kootenay;
  - a curva antiga do rio, só de mapa antigo em domínio público;
  - as vilas, as três PUDs e os pinos de Birchbank e The Dalles.

### Os voláteis (relidos antes da gravação de tela e de novo antes da publicação)

A data-base é 12/11/2026 (laudo de fatos, "Os voláteis"). Cada um muda a voz ou a tela:

| Frase | O que se leu | O que o faz mudar |
|---|---|---|
| f6, f172–f173 (as conversas pausadas) | pausadas desde março de 2025; ainda em 17/08/2026 (Canadian Geographic); a página do tratado da BC, lida em 12/11/2026, não traz retomada | um anúncio de retomada (BC, GAC, Departamento de Estado) |
| f120, f178 (nenhum aviso de saída; o tratado em vigor) | "To date, neither country has given notice" (CRS, 12/2024); nada depois | um aviso de denúncia (Art. XIX.2) |
| f170 ("It has not been finalized.") | não finalizado (BC Hydro, 23/06/2026) | a assinatura ou a ratificação do tratado novo |
| f2, f165, f188 ("pays"); f175 (a de 2027 é a terceira) | o pagamento em vigor (BC Hydro, 23/06/2026) | os EUA deixarem de escolher o ano 2026–27; um tratado novo em vigor antes de 31/07/2027 |
| f166–f167 (as PUDs) | o acordo aprovado em 25/09/2026 (APPA; The Star, 30/09/2026) | o acordo não entrar em vigor |
| f171 (a equipe com três Primeiras Nações) | a nota da GAC de 28/05/2025 | uma nota mais nova |
| f176–f177 (a lei; o S. 4949) | a lei até 31/08/2027; o S. 4949 no calendário do Senado desde 15/07/2026; nenhuma votação achada em 12/11/2026 | o Senado votar o S. 4949, ou a WRDA 2026 sancionada mudar o fim. Aí muda também o fecho (f189): o acordo termina em 31/07/2027 de qualquer jeito, mas a lei passaria a ir além |

Uma mudança aqui refaz o trecho da voz (`--refazer=N`) e o texto de tela da frase, e passa pelo verificador.

### A escuta e a pronúncia

- A folha é `roteiros/rio-columbia/pronuncia.md` (com o carimbo deste roteiro). A narração foi sem alias, pela política de
  `marca/pronuncias.md`.
- A lista da escuta, com o minuto de cada nome, está em `out/rio-columbia/_pesquisa/narracao-conferencia.md`:
  - "Sinixt" (trecho 34, ≈ 11:51 e 12:03);
  - "The Dalles" (trechos 9, 21, 22 e 28);
  - "Renata" (trecho 33);
  - "Grand Coulee" (trecho 35);
  - "Oregon", "acre-foot" e "U.S.".
- A conferência da máquina (o faster-whisper, trecho a trecho) não achou parágrafo cortado nem palavra pulada.

### O que passou, conferido nesta rodada

- **A tabela do verificador cobre as 189 frases.** As 224 linhas caem em 149 frases, e nenhuma linha ficou solta. As outras 40 são as do
  NADA A CHECAR do laudo, uma a uma. As 9 linhas L estão nas frases de conclusão (f65, f71, f95, f97, f112–f114, f116, f124 e f125).
- **O portão** (`gate.mjs`) no texto final dá PASSA, com 0 problemas e 11 alertas decididos. O `gate.mjs --derivados` confere o carimbo deste
  arquivo (`c4788c7ab3be`), o do laudo de fatos, o da folha de pronúncia, o da tradução de leitura e o das cópias para a voz.
- **As decisões da Sala e do cético que a tela tem de seguir:**
  - o 15 % e o 39 % com donos diferentes, e o 39 % "at the Canadian gauge", como conta do canal;
  - "87 YEARS";
  - o 600 mil como suposição do lado canadense, nunca "trigger" do tratado;
  - "since 2009", com a ressalva de 1974–2008 na tela;
  - os mortos de 1948 da cheia inteira, nunca colados a Vanport;
  - "as electricity, not cash";
  - o desvio canadense sem número;
  - Libby sem ano de conclusão;
  - "more than a third" na voz e "−37%" com o dono na tela;
  - as duas faixas em dólar só na tela, a da BC Hydro sem "US$";
  - o ministro pelo cargo, com a fala e a data, e sem o "bargaining chip";
  - Trump fora;
  - "It has not been finalized" e "The treaty itself remains in force";
  - os Sinixt com o nome que a Corte usa, e o "Lakes Tribe" na tela;
  - o salmão "even before the treaty dams";
  - nenhuma casa queimando e nenhuma trilha de suspense no ato 4;
  - nenhuma previsão no fecho, e nada de "at least on paper".
