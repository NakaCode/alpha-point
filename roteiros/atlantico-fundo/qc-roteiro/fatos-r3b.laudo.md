# Laudo · verificador de fatos (independente, da Sala de controle) · rodada r3, a bancada curta, por diff · atlantico-fundo

Revisão julgada: `286ff3abf7c7` · data-base 2026-10-26 (a conferência anterior, `fatos-r3.laudo.md`, julgou `b064eb75cb8c`; depois, o Lucas leu o roteiro e decidiu "Enxugar o Atlântico Sul (Recomendado)", e a Sala aplicou a `lista-r3.json`, L75–L80)

COBERTURA: 284 de 284 linhas da tabela com veredito "confirmada" (afirmações checáveis em 145 das 154 frases do texto falado; as outras 9 não afirmam nada checável, declaradas abaixo). A frase nova da r3 (a L80) foi CHECADA POR INTEIRO nesta rodada, com 8 linhas (F283–F290); a frase que mudou de lugar (a L79) foi lida de novo no lugar novo (F248); as frases em volta de cada corte foram relidas no contexto novo (o fim do §22, o §23, o §24, o §25 inteiro e o começo do §26), e duas linhas foram postas em dia por isso (a F211 e a F246a, nova). As outras frases são idênticas, caractere por caractere, às que as rodadas anteriores checaram por inteiro, e as linhas delas vêm de lá pelo diff. Saíram 14 linhas (as das 7 frases cortadas); entraram 9 (as 8 da L80 e a F246a): 289 − 14 + 9 = 284. Nenhuma linha ficou sem veredito. CHECADO POR INTEIRO.

- **O que foi julgado:** o texto falado inteiro de `roteiros/atlantico-fundo/roteiro-narrador.md` (arquivo `42b914c663ae…`), sha256 do texto falado `286ff3abf7c7b32cbd05c747be80c575ff971da60e6515c3390cd67f68a00ad9`. `node roteiros/atlantico-fundo/_ferramentas/gate.mjs`, rodado antes de tudo: exit 0, PASSA, 1.956 palavras (≈ 10,63 min a 184/min), 28 parágrafos, 154 frases, média 12,8, maior 28, gancho com 166 palavras até a assinatura e o "But" na 49ª, 0 problemas, autoplágio vazio, todas as taxas abaixo do teto. Os 8 alertas são os de antes, já decididos pelas rodadas anteriores ("never" ×2, "first" ×2, "Milwaukee Deep" ×3 e o "still" do gancho); nenhum cai em frase mudada nesta rodada.
- **Como a lista foi derivada: à mão, por diff.** O canal não tem extrator de afirmações. A lista é a das rodadas anteriores (as frases do portão, lidas uma a uma sobre `432dcb4041d4`, `ffafacc2329b` e `b064eb75cb8c`), posta em dia pelo diff: a frase nova foi lida inteira contra a cópia local de cada fonte, a frase que mudou de lugar foi relida no lugar novo, e as frases vizinhas de cada corte foram relidas para ver se o corte lhes tirou apoio ou antecedente. Uma conferência por script (`frasesDe` do portão de fatos, frase a frase contra a tabela) dá as mesmas 9 frases sem linha das rodadas anteriores, e nenhuma outra.
- **O diff, conferido por este verificador, não pelo relato:** `roteiros/atlantico-fundo/_trabalho/roteiro-r3.antes.md` (arquivo `ad9a6adff88a…`; texto falado `b064eb75cb8c`, 160 frases) contra o texto de hoje (154 frases), frase a frase, pela leitura do portão de fatos:
  - **saem 7 frases:** "Both Britain and Argentina claim them." (L75); "The name Meteor Deep is old, taken from a German research ship." e "Since 2021, that name has officially marked the spot the sonar found, about 30 miles from where older sources put it." (L76); "Argentina, for one, disagrees." (L77); "Just south of the line lies the deepest point of the Southern Ocean, the Factorian Deep.", "The expedition's sub, the Limiting Factor, reached the bottom there in 2019, and that's where the odd name comes from." e "Its neighbor, about 20 miles away, got the other half of the name: Limiting Deep." (L78);
  - **entra 1:** "With the line or without it, the deepest point in the Atlantic lies at the other end of the ocean." (L80);
  - **as outras 153 são idênticas**, e entre elas a L79 ("The trench's southern tip crosses the line."), que só subiu duas frases, para logo depois de "It begins at 60 degrees south.";
  - o 25º e o 26º parágrafos de antes viraram o 25º, e os três de depois descem um número (26º a 28º).
  - É exatamente o diff do `_trabalho/aplicado-r3.md` (§4), e cada mudança é a que a decisão do Lucas pede: saem a Argentina (as duas frases), a história do nome Meteor e os nomes Factorian e Limiting; ficam a outra candidata, a resposta (o estudo de 2019, "The sonar settled that.", os ~370 pés, "didn't dive there") e o bloco da linha de 60°S. A tabela de antes (`_trabalho/fatos-tabela-r3.antes.json`, `5ee3c9a1…`) é byte a byte a que estava em `qc-roteiro/fatos-tabela.json` antes desta rodada (`cmp`).
- **Contra o quê:** o dossiê `pautas/atlantico-fundo/fundamento.json` (F02, F74, F79, F82, F83; N08, N14, N20, N21, N48; C01, C03, C16; R08, R27) como mapa, e a cópia local de cada fonte (`midia/atlantico-fundo/fontes/`, pelos índices `fontes-local-a.json`, `-b.json` e `-sala.json`) como prova: o artigo da expedição (Bongiovanni et al. 2021, S01, `02-bongiovanni-2021-gdj3.122.txt`), a M-3 da IHO, edição de 2026 (S20, `09-iho-M3-E-2026.txt`) e a página da BGS de 11/05/2021 (S03). **Rede: não usei.** Nenhum site que recusa robô foi tocado.
- **A tabela:** `roteiros/atlantico-fundo/qc-roteiro/fatos-tabela.json`, 284 linhas: **texto (226)**, **imprensa (14)** e **medição (44, `qc-roteiro/fatos-medidas.txt`)**. Saíram 12 de texto e 2 de medição (as ~30 mi do nome Meteor e as ~20 mi do Limiting Deep); entraram 9 de texto. Mudaram o parágrafo de 29 linhas (F248, F255, F256 e as F257–F282) e a afirmação da F211; a F248 passou a vir depois da F243, na ordem da voz. As outras linhas ficam byte a byte como estavam.

NOTA: 9.5/10 · sem regressão: os cortes do Lucas tiraram 14 linhas sem deixar frase que fica sem apoio (o "not every country uses it" perdeu o exemplo dito na voz, a Argentina, e ganhou na tabela a F246a, com o mesmo fato), e a frase nova é uma dedução que fecha nos três limites que as fontes dão. Não chega a 10 pelos mesmos apoios de composição, leves e declarados, de antes (O1–O4, O6–O8), e pelas duas novas, leves (O11, "the other end of the ocean", e O12, o submersível do §22 sem o mergulho dito), nenhuma delas um defeito que peça troca.

## A rodada r3: o que saiu, o que mudou de lugar, o que entrou

### As frases cortadas e as linhas delas

| frase cortada (lista-r3) | linhas que saíram da tabela | o fato, depois do corte |
|---|---|---|
| "Both Britain and Argentina claim them." (L75) | F219 | fora da voz; a regra [sandwich-soberania] não tem mais o que pegar |
| "The name Meteor Deep is old, taken from a German research ship." (L76) | F234, F235 | fora da voz; "the Meteor Deep" fica só como nome do ponto (F230, F231) |
| "Since 2021, that name has officially marked the spot the sonar found, about 30 miles from where older sources put it." (L76) | F236, F237, F238, F239 | fora da voz, com as ~30 mi e a questão do ponto do gazetteer × ponto mais fundo (C03) |
| "Argentina, for one, disagrees." (L77) | F247 | o trecho dela ("Argentina considers that there are no technical grounds to support a separate reference") passa à F246a, em apoio do "not every country uses it", que fica |
| "Just south of the line lies the deepest point of the Southern Ocean, the Factorian Deep." (L78) | F249, F250 | fora da voz; o número do Oceano Austral (7.432 m) volta só como prova da L80 (F286), sem ir à fala |
| "The expedition's sub, the Limiting Factor, reached the bottom there in 2019, and that's where the odd name comes from." (L78) | F251, F252 | fora da voz; o mergulho continua apoiando a F211 (§22), que não o diz (O12) |
| "Its neighbor, about 20 miles away, got the other half of the name: Limiting Deep." (L78) | F253, F254 | fora da voz |

### A frase que mudou de lugar (L79)

"The trench's southern tip crosses the line." (§25, F248): **CONFIRMADA no lugar novo.** "The line" é o paralelo da frase de antes ("It begins at 60 degrees south."), e o artigo diz que a fossa "extends from a latitude of around 54°40′S to 60°40′S, technically spanning the 60°S boundary". "The trench's" é a Fossa das Sandwich do Sul, o assunto do §23 e do §24. A frase fica e não é órfã: é o degrau entre a linha e "By that line, the Meteor Deep, well to the north, is in the Atlantic." (por que a linha importa para esta fossa), como a lista argumentou; concordo, e por fato: sem ela, a voz diria que o Meteor fica "ao norte" de uma linha que a fossa não toca. O "well to the north" vale nas duas leituras: o Meteor (55,230°S) fica a 4,77° de latitude ao norte de 60°S, ≈ 530 km (≈ 330 mi; C03, V43), e muito ao norte da ponta da fossa (60°40'S).

### As frases vizinhas de cada corte, relidas no contexto novo

- **§23, depois de "The islands there are a chain of small volcanoes, with no permanent residents."**: a frase seguinte passa a ser a do Landsat ("…one of those volcanoes"), com o mesmo antecedente ("those volcanoes" = as ilhas da frase de antes). F217–F218 e F220–F222 sem mudança.
- **§24, que termina em "The expedition mapped it but didn't dive there."**: o "it" continua o Meteor Deep da frase de antes; o "N/A" da Tabela 1 (F233; R27, "não um universal").
- **§25, o bloco da linha:** "In 2023, the International Hydrographic Organization recognized the Southern Ocean." (F240–F242), "It begins at 60 degrees south." (F243), a L79 (F248), "By that line, the Meteor Deep, well to the north, is in the Atlantic." (F244), "The organization says the line carries no political meaning, and not every country uses it." (F245, F246 e a F246a nova), a L80 (F283–F290) e a ponte (F255, F256). Todas na forma da R08 e da N20: nenhum "not ratified", "official border", "every country agrees" nem "for the first time".
- **"not every country uses it" perdeu o exemplo dito na voz** (a Argentina, L77), mas não o apoio: a M-3 traz a Argentina ("no technical grounds to support a separate reference", F246a) e a Austrália, com os limites dela ("Australia's position on the limits of the Southern Ocean…", F246). A ressalva "not every" é ESTREITA o bastante para dois países com posição escrita; e a frase já atribui à organização a primeira metade ("The organization says…").
- **§25, a ponte "Off Puerto Rico, the 1964 crew's fish were waiting for a second look."** (F255, F256): lê bem depois do corte, e melhor que antes: vem de "the other end of the ocean" e abre com o lugar. O "second look" é o de 2019 (o §26 o diz logo depois, F257).
- **§26, "In 2019, the same sub went back to the spot where that crew had reported their fish."** (F257): o "same sub" perdeu o antecedente mais perto (a frase do Limiting Factor no Factorian saiu), mas a frase seguinte o identifica ("It was the craft that had carried Vescovo to the deepest point the year before.", F258–F259), e o §22 já dizia "its sub". Fato certo; é a dívida de clareza que o `aplicado-r3.md` §9 já deu à Sala.
- **§22, "The expedition also took its sonar, and its sub, to the other end of the Atlantic."** (F209–F211): continua certa (O12, abaixo). A afirmação da F211 foi refeita: o "como p7 diz" deixou de valer.

### A frase nova (L80), elemento por elemento

"With the line or without it, the deepest point in the Atlantic lies at the other end of the ocean."

| elemento | linha | veredito | o que a cópia local diz |
|---|---|---|---|
| "With the line": pela linha de 60°S, o mais fundo do Atlântico é o de Porto Rico | F283 | CONFIRMADA | o resumo de Bongiovanni et al. 2021 (S01): "The deepest place in each ocean were identified as the Brownson Deep, Puerto Rico Trench in the Atlantic Ocean"; o artigo usa a linha da IHO ("the Meteor Deep lies within the waters of the southernmost Atlantic Ocean and not the Southern Ocean", F244) |
| a régua: o ponto de Porto Rico | F284 | CONFIRMADA | "The deepest point was identified as 8,378 ± 5 m uncertainty" (S01, §3.1) |
| "or without it", 1: a fossa INTEIRA, dos dois lados de qualquer linha | F285 | CONFIRMADA | "with the deepest point in the entire trench observed in Meteor Deep as 8,265 ± 13 m" (S01, §3.2): 113 m mais raso (F232, F74) |
| "or without it", 2: tudo o que a linha separa do Atlântico | F286 | CONFIRMADA | "The deepest point of the Southern Ocean was identified as 7,432 ± 13 m" (S01, §3.2): 946 m mais raso |
| o caso "without it" existe, e é qual | F287 | CONFIRMADA | a M-3, apêndice 1 (S20), sobre a Argentina: o "Southern Ocean" é a área "which corresponds to the southern zones of the Indian, South Atlantic and South Pacific Oceans" |
| outro limite que as fontes dão | F288 | CONFIRMADA | a M-3 (S20): o comentário da S-23 de 1953, "The UK uses the parallel of Latitude 55°S as the Northern limit of the Southern Ocean", que o Reino Unido confirma que "does not apply anymore" (F83) |
| "lies at the other end of the ocean" | F289, F290 | CONFIRMADA (com a O11) | a Tabela 1 (S01): "North Atlantic / Puerto Rico Trench/Brownson Deep" × "South Atlantic / South Sandwich Trench/Meteor Deep"; e "the Meteor Deep lies within the waters of the southernmost Atlantic Ocean" |

**A conta do "with the line or without it"**, limite a limite (todas as profundidades pelo sonar, a mesma régua: a Tabela 1 dá o sonar nos três pontos, e o Meteor não tem número de submersível, "N/A"):

| o limite | onde cai o Meteor Deep (8.265 ± 13 m) | onde cai o mais fundo ao sul de 60°S (7.432 ± 13 m) | o mais fundo do Atlântico |
|---|---|---|---|
| 60°S, a Res. 02/2023 da IHO (F81, F83) | Atlântico | Oceano Austral | Porto Rico, 8.378 ± 5 m (113 m mais fundo que o Meteor) |
| 55°S, o comentário britânico da S-23 de 1953, largado em 2023 (F83) | Oceano Austral | Oceano Austral | Porto Rico (nenhum dos dois está no Atlântico) |
| sem Oceano Austral separado (a posição da Argentina, F82) | Atlântico | Atlântico Sul (a "southern zone" dele) | Porto Rico (113 m e 946 m mais fundo) |

- Nos três casos o resultado é o mesmo, e não por coincidência: o mais fundo da fossa inteira (8.265) e o mais fundo de todo o Oceano Austral (7.432) ficam abaixo de 8.378, então qualquer limite que deixe Porto Rico no Atlântico (todos os das fontes) dá Porto Rico como o mais fundo. Com as margens no pior caso (8.378 − 5 = 8.373 contra 8.265 + 13 = 8.278), a diferença ainda é de 95 m: as margens não a fecham (a nota do F74).
- **Composição, declarada:** nenhuma fonte diz a frase com estas palavras. Ela é uma dedução de quatro trechos do mesmo artigo e de dois da M-3, e a dedução fecha pelos números, não por justaposição. A lista a marcou DO-DOSSIE (F02, F74, F79, F82, F83), e o dossiê sustenta cada peça; as linhas dão o trecho literal de cada uma.
- **O número dos livros não a contradiz:** a profundidade mais publicada do Meteor (8.428 m, F226) passaria a de Porto Rico, mas o §24 diz, duas frases antes, "The sonar settled that.", e a L80 vem depois disso, com a régua do sonar.
- **O "não se diz":** a frase diz o contrário da N14 ("the Atlantic has two deepest points"); não toca a N48 (nenhum Factorian na voz) nem a N20 (nenhuma negação do reconhecimento, nenhum "every country agrees"). O `gate.mjs` passa nela: sem "still", "here", "this line" nem número.

## ACHADOS

Nenhum. Nenhuma frase do texto de hoje pede CORTAR, ESTREITAR, ENFRAQUECER, ATRIBUIR, REORDENAR, DA-PAUTA, DO-DOSSIE, DA-FONTE, REDIZER nem PEDIR por fato. Os cortes do Lucas não deixaram frase sem apoio, a frase que mudou de lugar continua certa no lugar novo, e a frase nova fecha nos três limites das fontes.

## Observações (não são achados: ficam registradas para a Sala)

- **O1–O4 e O6–O8**, das rodadas anteriores, continuam como estavam, em frases que não mudaram.
- **O5** (o "to the other end of the Atlantic" do §22) foi posta em dia: virou a O12, abaixo, porque o apoio que ela citava ("p7 inteiro diz isso com todas as letras") saiu da voz.
- **O9 e O10**, as notas do dossiê (não a voz): as duas já foram postas em dia pela Sala. Conferido no `fundamento.json` › `nomes` e no `fundamento.md` (tabela de nomes): a nota de "HMS Challenger" diz agora "A expedição de 1872–76; a sondagem de Porto Rico tem o ano em disputa, 1875 nas cópias e 1873 pela travessia que o IHR descreve (F22; …, O10)".
- **O11 · "lies at the other end of the ocean" (§25, F289–F290), nova, leve.** Pelas fontes, o ponto de Porto Rico fica no Atlântico Norte (Tabela 1, "North Atlantic") e o Meteor Deep, no "southernmost Atlantic Ocean": as duas metades do oceano, a 9.195 km (5.713 mi; C03) uma da outra. Mas Porto Rico (19,712°N) não fica na ponta norte do Atlântico, que vai muito mais ao norte; o "other end" é figura de fala, a mesma da ponte do §22 ("to the other end of the Atlantic"), que as rodadas r2b a r3 aceitaram (F210, a O5) e que não se reabre. Não é achado: não há número, e a leitura "a outra metade, o Norte" é a que a fonte sustenta. Se a Sala quiser a frase à prova do ouvinte que conhece o mapa, a troca de uma frase é um REDIZER sem fato novo: "With the line or without it, the deepest point in the Atlantic lies far to the north." (17 palavras; o texto ficaria com 1.953, acima do piso de 1.950); a ponte seguinte ("Off Puerto Rico, …") continua dizendo o lugar. Não segura o PASS.
- **O12 · "The expedition also took its sonar, and its sub, to the other end of the Atlantic." (§22, F209–F211), a O5 posta em dia, leve.** Continua certa: a expedição levou o sonar e o submersível à Fossa das Sandwich do Sul, no extremo sul do Atlântico, e o submersível mergulhou na ponta sul dela, logo ao sul de 60°S, em fevereiro de 2019 (F211, S37: "the first human to successfully dive to the deepest point in the Southern Ocean, in the South Sandwich Trench"). Depois da L78, a voz não diz mais onde ele mergulhou: diz só que não mergulhou no Meteor (§24). Nada no texto diz que ele não mergulhou, então não há afirmação falsa; o que sobra é a promessa do "and its sub" sem o pagamento dito, que é clareza, já dada à Sala pelo `aplicado-r3.md` §9 (o conserto, se houver, é no §22 ou no §26, fora desta lista).

## As decisões da Sala (26/10/2026), conferidas na voz

- **O Oceano Austral:** "In 2023, the International Hydrographic Organization recognized the Southern Ocean." e "It begins at 60 degrees south." (a R08, F240–F243); "By that line, the Meteor Deep, well to the north, is in the Atlantic." (o "by that line" que a decisão pede, F244); "The organization says the line carries no political meaning, and not every country uses it." (F245, F246, F246a). Nunca "not ratified", "official border", "every country agrees" nem "for the first time". O Factorian saiu da voz, então a metade "o Factorian, ao sul dela, no Oceano Austral" não precisa mais ser dita, e a N48 não tem mais onde cair.
- **O Meteor Deep:** "about 370 feet shallower" (113 m = 370,7 ft, F232) e "didn't dive there" (o "N/A", F233). O nome fica como nome do ponto mais fundo da fossa (F230, F231: "the deepest point of the trench is Meteor Deep at 8265 m"); a frase que tocava o ponto do gazetteer × o ponto mais fundo saiu com a L76, e com ela a C03 deixa de tocar a voz.
- **A soberania das Sandwich do Sul:** saiu da voz com a L75; nenhuma outra frase a diz.
- **As outras decisões** (a gente de Porto Rico, o tsunami medieval, a data de Vescovo, a GEBCO e o USGS no mapa, o Mount Michael, o Archimède, o 8.740 m, os nomes) ficam como as rodadas anteriores as conferiram, em frases que não mudaram. O Mount Michael continua sem altura na voz (F222).

## As armadilhas de fato, na frase nova e nas emendas

- **Universal:** "With the line or without it" é um universal sobre os limites: conferido limite a limite, acima, nos três que as fontes dão, e pela conta que vale para qualquer outro. "not every country uses it": dois países com posição escrita na M-3 (F246, F246a).
- **Ano derivado:** nenhum na frase nova; o "In 2023" do bloco é o da resolução (F240).
- **Composição de trechos:** a L80 junta trechos de duas fontes (S01 e S20); declarada acima, e a dedução fecha pelos números.
- **Conclusão por justaposição:** não; o "deepest" sai da comparação dos três números da mesma tabela, não da vizinhança das frases.
- **Ponte inventada numa reordenação:** a L79 subiu duas frases sem ganhar conectivo nem causa ("The trench's southern tip crosses the line." continua uma afirmação de geografia); a ponte "Off Puerto Rico, …" não liga a linha aos peixes por causa nenhuma.
- **Período:** nenhum fora do lugar (2019 do sonar no §24; 2023 da resolução; 1964 da ponte).
- **Réguas trocadas:** o sonar dos três lados da comparação (8.378, 8.265, 7.432), nenhum número de submersível misturado; o ponto mais fundo do Meteor (55,230°S) e não o ponto do gazetteer (a 12,9 km, C03), e os dois ficam ao norte de 60°S, então o "well to the north" vale para os dois.
- **Conversão:** nenhuma na frase nova; a única distância citada (9.195 km) é contexto da O11, fora da voz.
- **Mecanismo, citação, fonte "não aberta":** nenhum na frase nova; todas as fontes dela foram abertas na cópia local.

## A varredura "estado do mundo", nas frases mudadas e vizinhas

- **"…the deepest point in the Atlantic lies at the other end of the ocean."**: presente, do lugar, pela medida do sonar (2018–2019, publicada em 2021); só muda com medida nova, como a 1ª frase do vídeo. Não depende da linha (vale com ela e sem ela), então uma edição nova da M-3 não a envelhece. Confirmada, sem data.
- **"The trench's southern tip crosses the line."** e **"By that line, the Meteor Deep, well to the north, is in the Atlantic."**: presente de geografia e de definição; a definição é a da Res. 02/2023, dita duas frases antes com o ano. Confirmadas.
- **"not every country uses it"**: volátil (a M-3, edição de 2026), como antes.
- **"Argentina, for one, disagrees."** saiu da voz e sai da lista de voláteis.

## As frases sem afirmação checável (NADA A CHECAR, declarado)

As 9 das rodadas anteriores, nenhuma delas mudada: a pergunta e a assinatura do gancho; "A sound could give a number."; "It couldn't show anyone what was down there."; "Keep those fish in mind."; as três frases-ponte do §8 ("A crew could see only a small patch of the trench, and a net could only bring something up.", "Neither could map the floor." e "That took a different kind of sonar."); e "Why is the trench so deep?".

## Não conferido

Nada na voz. A frase nova se apoia só em cópias locais em texto (S01, S20), e nenhuma afirmação dela depende de fonte que recusou leitura ou que só existe como PDF, resumo ou imagem.

## VOLÁTEIS na fala (reconferir na véspera da gravação)

- "As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep." (a API do gazetteer, `totalItems: 0` em 26/10/2026): refazer o GET antes de gravar; se o mês da gravação mudar, o "October 2026" muda junto.
- "More than three million people live in Puerto Rico." (Censo 2020, 3.285.874; estimativa de 01/07/2025, 3.184.835): só muda se uma estimativa nova cair abaixo de três milhões.
- "not every country uses it" (a M-3 de 2026, apêndice 1: a Argentina e a Austrália): reconferir se sair edição nova da M-3. Cresce se mais países fizerem ressalva; zera só se a Argentina e a Austrália retirarem as delas.

## LISTA DE NOMES (anônimo → pessoa nomeável)

Sem mudança: nenhuma pessoa anônima que devesse ter nome. "The organization" do §25 é a International Hydrographic Organization, nomeada duas frases antes. A r3 tirou nomes da voz (Argentina, Britain, o navio alemão, o Factorian Deep, o Limiting Deep) e não pôs nenhum.

## DECISÃO DO LUCAS / DA SALA PENDENTE que tocou esta checagem

- O11 (opcional, da Sala): o "the other end of the ocean" da L80, com a troca de uma frase pronta; não segura nada.
- O12 (da Sala, clareza, já no `aplicado-r3.md` §9): o "and its sub" do §22 sem o mergulho dito.
- Fora do fato: as telas do Factorian e do Limiting Deep saíram do editor; o anel do Factorian só no mapa é decisão de tela do Lucas.

## PADRÕES

1. **O corte que tira o apoio de uma frase que fica.** A L77 tirou da voz a Argentina, que era também o exemplo do "not every country uses it" da frase de antes; a L78 tirou o mergulho que pagava o "and its sub" do §22. Nos dois casos a frase que fica continua certa, mas a tabela precisava dizer em que ela se apoia agora (a F246a, com o trecho da F247; a F211, com a afirmação refeita).
2. **A emenda de piso "sem fato novo" ainda afirma.** A L80 não traz número, data nem nome, mas "with the line or without it" é uma dedução sobre três limites. Ela só se confirma com a conta dos três (oito linhas e a tabela acima); o rótulo DO-DOSSIE não a dispensa de checagem.

## O portão de fatos

`node ferramentas/portao-fatos.mjs atlantico-fundo` (da raiz do canal), rodado sobre esta tabela e este laudo:

```
portão de fatos — atlantico-fundo: PASSA
  sha12 do texto falado: 286ff3abf7c7 (igual ao do gate.mjs) · 28 parágrafos
  laudo: Revisão julgada 286ff3abf7c7 · COBERTURA 284 de 284 · VEREDITO PASS
  tabela: 284 confirmada(s) de 284
```

Saída 0 (exit 0), sem problema nem aviso (`--json`: `problemas: []`, `avisos: []`), na primeira rodada sobre a tabela montada: nenhum conserto de trecho, frase, número, piso ou cobertura foi preciso. O portão confere a estrutura (o sha, a cobertura, as frases inteiras, os trechos literais, as medições e os números), não a verdade: a verdade da L80 é a conta acima.

```
node roteiros/atlantico-fundo/_ferramentas/gate.mjs --derivados
veredito PASSA, exit 0, problemas []
derivados: qc-roteiro/fatos.laudo.md cita 286ff3abf7c7 (ok); roteiro-editor.md cita 286ff3abf7c7 (ok); pronuncia.md cita 286ff3abf7c7 (ok)
```

Os laudos com sufixo de rodada (`-r1`, `-r2`, `-r2b`, `-r2c`, `-r3`) ficam fora do `--derivados`, como o portão manda: julgaram o texto de antes.

## A tabela

`§` é o parágrafo falado (de 1 a 28, a numeração do portão); a frase inteira e o trecho literal de cada linha estão na `fatos-tabela.json`. As linhas que esta rodada pôs em dia: F211 (a afirmação), F246a e F283–F290 (novas), F248 (o lugar: depois da F243) e o parágrafo das F248, F255, F256 e F257–F282. Saíram F219, F234–F239, F247 e F249–F254.

| id | § | afirmação | veredito | fonte | classe |
|---|---|---|---|---|---|
| F001 | 1 | O ponto mais fundo do Atlântico fica na Fossa de Porto Rico (Bongiovanni et al. 2021: o Brownson Deep, 8.378 ± 5 m pelo sonar da Five Deeps). | confirmada | S01 | texto |
| F002 | 1 | Porto Rico é uma ilha, e a fossa fica ao norte dela. | confirmada | S02 | texto |
| F003 | 1 | Porto Rico é dos EUA: o ponto cai na zona econômica exclusiva dos Estados Unidos (Porto Rico), pela Marine Regions. | confirmada | S16 | texto |
| F004 | 1 | O Censo dos EUA conta Porto Rico ao lado dos 50 estados e do Distrito de Colúmbia (território, nunca 'state'). | confirmada | S46 | texto |
| F005 | 1 | Do ponto do sonar à costa mais perto de Porto Rico: 134,3 km = 83,47 mi (Census, em Aguadilla) e 82,93 mi (Natural Earth): 'about 83 miles'. | confirmada | medicao | medicao |
| F006 | 1 | 8.378 ± 5 m pelo sonar da Five Deeps. | confirmada | S01 | texto |
| F007 | 1 | 8.378 m = 27.486,9 ft = 5,206 mi: mais de cinco milhas. | confirmada | medicao | medicao |
| F008 | 1 | O Everest tem 8.848,86 m (China e Nepal, 08/12/2020, pela AP). | confirmada | S26 | imprensa |
| F009 | 1 | 8.848,86 − 8.378 = 470,86 m = 1.544,8 ft fora d'água: o topo de 1.500 ft fica de fora (não 'deeper than Everest is tall', N02). | confirmada | medicao | medicao |
| F010 | 1 | O ponto mais fundo de todos os oceanos é o Challenger Deep, na Fossa das Marianas (NOAA). Sem crença do público sobre o Atlântico (N01). | confirmada | S25 | texto |
| F011 | 1 | A Fossa das Marianas fica no Pacífico ocidental (NOAA). | confirmada | S25 | texto |
| F012 | 1 | A posição do Challenger Deep usada na conta (BGS, 2021). | confirmada | S03 | texto |
| F013 | 1 | Do ponto mais fundo do Atlântico ao Challenger Deep: 15.269,6 km = 9.488 mi (Vincenty). | confirmada | medicao | medicao |
| F014 | 2 | Em 1964 o batiscafo Archimède mergulhou na Fossa de Porto Rico (o título do artigo de 2020). | confirmada | S06 | texto |
| F015 | 2 | O Archimède era francês ('the French submersible Archimede'); a tripulação vai sem nacionalidade (N51, A19). | confirmada | S04 | texto |
| F016 | 2 | O relato: 200 peixes-caracol num transecto de uma milha, densidade 'extraordinariamente alta' para a zona hadal ('a crowd of fish'). | confirmada | S06 | texto |
| F017 | 2 | Em 2019 o submersível Limiting Factor revisitou o mesmo sítio. | confirmada | S06 | texto |
| F018 | 2 | Nenhum peixe-caracol foi visto (a fonte diz 'snailfish', e 'those fish' são os peixes-caracol do relato, N50). | confirmada | S06 | texto |
| F019 | 2 | Vescovo, a primeira pessoa a chegar ao ponto mais fundo do Atlântico (nunca 'the first human at the bottom', N03). | confirmada | S05 | imprensa |
| F020 | 2 | O release da Five Deeps, de 21/12/2018, sobre o mergulho de 19/12/2018. | confirmada | S04 | texto |
| F021 | 2 | O estudo de 2019: Stewart & Jamieson, Earth-Science Reviews 197. | confirmada | S02 | texto |
| F022 | 2 | A lista oficial (o gazetteer IHO-IOC GEBCO de nomes de feições submarinas) dava 8.740 m ao Milwaukee Deep, pelo estudo (Tabela 1 e §2.1.2; o §5 do mesmo estudo se contradiz, e por isso a voz atribui ao estudo, C27). | confirmada | S02 | texto |
| F023 | 2 | Para o estudo, o Milwaukee Deep era tido como a parte mais funda do Atlântico ('had the Atlantic'). | confirmada | S02 | texto |
| F024 | 2 | Os dados de sonar públicos davam o fundo sempre mais raso que o publicado ('even after sonar showed otherwise'). | confirmada | S02 | texto |
| F025 | 2 | O sonar multifeixe do USGS dava 8.300–8.340 m desde 2002–2003. | confirmada | S28 | texto |
| F026 | 2 | 8.740 − 8.408 = 332 m = 1.089,2 ft (pelo número do próprio estudo); 8.740 − 8.378 = 362 m = 1.187,7 ft (pelo sonar da expedição): 'more than 1,000 feet' nas duas réguas (C28). | confirmada | medicao | medicao |
| F027 | 3 | A data: 27/01/1883, o navio Blake, do U.S. Coast and Geodetic Survey (o IHR de 1936 dá a data e o ano; ele atribui o comando a Sigsbee, e vale o relatório de 1883, C13). | confirmada | S12 | texto |
| F028 | 3 | O relatório do próprio Survey: o vapor (steamer) Blake. | confirmada | S11 | texto |
| F029 | 3 | Ao norte de Porto Rico. | confirmada | S11 | texto |
| F030 | 3 | A sondagem era por arame (a mesma viagem perdeu 'wire and thermometers'); 'weighted' é a forma da leitura 04. | confirmada | S11 | texto |
| F031 | 3 | Sob o comando do tenente-comandante W. H. Brownson, U. S. N. (Marinha dos EUA); sem 'named after him' (N09). | confirmada | S11 | texto |
| F032 | 3 | 4.561 braças. | confirmada | S11 | texto |
| F033 | 3 | 4.561 × 6 = 27.366 ft = 8.341,2 m = 5,183 mi: mais de cinco milhas. | confirmada | medicao | medicao |
| F034 | 3 | A posição da sondagem: 19°40'50"N, 66°23'40"W. | confirmada | S11 | texto |
| F035 | 3 | Da sondagem ao ponto do sonar: 96,2 km = 59,75 mi, a leste (outro lugar, N22). | confirmada | medicao | medicao |
| F036 | 4 | O arame trouxe amostra do fundo (lodo marrom) e a temperatura. | confirmada | S11 | texto |
| F037 | 4 | O relatório descreve o fundo como 'brown ooze'. | confirmada | S11 | texto |
| F038 | 4 | É o relatório do ano fiscal que terminou em 30/06/1883. | confirmada | S11 | texto |
| F039 | 4 | 'No record is known of any sounding from which bottom specimen and temperature have been obtained at a depth equaling this.' | confirmada | S11 | texto |
| F040 | 5 | A fossa foi descoberta pela expedição do HMS Challenger (o resumo da Endeavour 2020). O ano que o resumo dá, 1875, está em disputa (F22, C29), e a fala não o diz (N52). | confirmada | S07 | texto |
| F041 | 5 | 'less than a decade earlier': antes da sondagem do Blake, 27/01/1883 (§3). Pelas cópias, a sondagem do Challenger é de 26/03/1875 (o IHR 1936: 'On 26th March 1875' e 'eight years previously'; a Endeavour 2020: 'in 1875'): de 26/03/1875 a 27/01/1883 são 2.864 dias = 7,84 anos, menos de uma década. Pela travessia de St. Thomas às Bermudas que o mesmo IHR descreve (março de 1873, data que nenhuma cópia local dá; F22 em disputa): de 26/03/1873 a 27/01/1883 são 3.594 dias = 9,84 anos, também menos de uma década. O 'less than' é o teto, e o exato fica abaixo nas duas datas. A fala não diz o ano nem 'eight years' (N52; C29). Corrigida na r2c (L74), pelo A1 da conferência anterior. | confirmada | S12 | texto |
| F042 | 5 | O H.M.S. Challenger (navio de Sua Majestade: britânico), sob o capitão Sir George S. Nares, fez a sondagem. | confirmada | S12 | texto |
| F042a | 5 | Navio de pesquisa: a viagem do H.M.S. Challenger teve relatório oficial de resultados científicos (Thomson & Murray, na bibliografia de Stewart & Jamieson 2019). | confirmada | S02 | texto |
| F043 | 5 | Nares era o comandante do Challenger. | confirmada | S12 | texto |
| F044 | 5 | 'far to the east': o relatório de 1883 põe a sondagem do Blake 71 milhas a oeste da maior profundidade do Challenger, e o Blake ficou a uns 60 mi a leste do ponto mais fundo (§3); pela medida V11, a sondagem do Challenger (19°42'N, 65°07'W) fica a 142,95 mi a leste do ponto mais fundo. (Era linha de medição; a frase não tem mais número, e a prova passa à cópia do relatório.) | confirmada | S11 | texto |
| F045 | 5 | 3.875 braças = 7.087 m. | confirmada | S12 | texto |
| F046 | 5 | 3.875 × 6 = 23.250 ft: cerca de 23.000 ft. | confirmada | medicao | medicao |
| F047 | 5 | Uns 810 km (503 mi; o comprimento está em disputa, F20, e 'hundreds of miles' vale para as duas réguas), quase paralela à costa norte. | confirmada | S01 | texto |
| F048 | 6 | Em 1939, o cruzador Milwaukee, ao norte de Hispaniola e de Porto Rico (DANFS). | confirmada | S08 | texto |
| F049 | 6 | A sondagem era sônica (eco). | confirmada | S08 | texto |
| F050 | 6 | O jornal de 1939: novo recorde de 28.680 ft ao norte de Porto Rico. | confirmada | S09 | imprensa |
| F051 | 6 | A história da Marinha dá 30.246 ft, 'the greatest depth yet discovered in the Atlantic': em disputa (F26), e 'more than 28,000 feet' vale para os três números. | confirmada | S08 | texto |
| F052 | 6 | 'has been named the Milwaukee Deep, from the United States cruiser' (o nome de 1939, não oficial hoje, N08). | confirmada | S09 | imprensa |
| F053 | 6 | O boletim da National Geographic Society, distribuído pelo WNU Service (o sindicato de jornais) e impresso no The Sun. | confirmada | S09 | imprensa |
| F054 | 6 | A data: sexta, 28/07/1939 (verão no Norte). | confirmada | S09 | imprensa |
| F055 | 7 | O mergulho de 1964 do batiscafo Archimède na Fossa de Porto Rico. | confirmada | S06 | texto |
| F056 | 7 | Observação direta, de dentro do batiscafo ('the first direct observations'). | confirmada | S06 | texto |
| F057 | 7 | O Archimède, um batiscafo. | confirmada | S06 | texto |
| F058 | 7 | Francês (de quem era, não está em fonte: nunca 'French Navy', A19). | confirmada | S04 | texto |
| F059 | 7 | 7.300 m (o artigo de 2020). | confirmada | S06 | texto |
| F060 | 7 | ~8.300 m (o release da Five Deeps). | confirmada | S04 | texto |
| F061 | 7 | 7.300 m = 4,536 mi; 8.300 m = 5,157 mi: mais de quatro milhas pelas duas. | confirmada | medicao | medicao |
| F062 | 7 | 7.300 m no artigo de 2020 (o mergulho de 1964 do Archimède). | confirmada | S06 | texto |
| F063 | 7 | ~8.300 m no release de 2018: as fontes divergem sobre a profundidade a que ele chegou. | confirmada | S04 | texto |
| F064 | 7 | 'but it did not reach the deepest point' (o release; nunca 'landed on the bottom', C08). | confirmada | S04 | texto |
| F065 | 7 | O relato, de 7.300 m. | confirmada | S06 | texto |
| F066 | 7 | Uma densidade de peixes 'extraordinariamente alta'. | confirmada | S06 | texto |
| F067 | 7 | 7.300 m = 23.950,1 ft: cerca de 24.000 ft. | confirmada | medicao | medicao |
| F068 | 7 | 200 peixes-caracol num transecto de uma milha. | confirmada | S06 | texto |
| F069 | 7 | Publicado em 1965 ('reported in 1965'), o ano seguinte ao mergulho de 1964 (F055). | confirmada | S06 | texto |
| F070 | 7 | O relatório ('the report', a palavra da fonte, sem autor: N52) descreve os animais como peixes-caracol (Liparidae). | confirmada | S06 | texto |
| F070a | 7 | Liparidae, os peixes-caracol, é uma família de peixes. | confirmada | S36 | texto |
| F071 | 8 | A NOAA: em 1970, um cusk-eel pego numa rede que desceu a 8.370 m. | confirmada | S31 | texto |
| F072 | 8 | A NOAA é a National Oceanic and Atmospheric Administration. | confirmada | S28 | texto |
| F073 | 8 | Os cusk-eels têm aparência de enguia, mas não são enguias verdadeiras (S73, F93). | confirmada | S73 | texto |
| F074 | 8 | A família é a Ophidiidae, e o peixe tem 20 cm. | confirmada | S30 | texto |
| F075 | 8 | 20 cm = 7,874 in: cerca de oito polegadas. | confirmada | medicao | medicao |
| F076 | 8 | O Australian Museum: o cusk-eel Abyssobrotula galatheae, coletado na Fossa de Porto Rico a 8.370 m: a mesma profundidade da rede de 1970 da NOAA (a identidade é por ela). | confirmada | S30 | texto |
| F077 | 8 | A rede desceu a 8.370 m. | confirmada | S31 | texto |
| F078 | 8 | O ponto mais fundo: 8.378 m (8 m a mais). | confirmada | S01 | texto |
| F079 | 8 | A NOAA: 'it's hard to know for sure whether the cusk eel was caught at the trawl's deepest point' (a forma da R13). | confirmada | S31 | texto |
| F080 | 9 | O USGS mapeou a fossa inteira com multifeixe em três cruzeiros, em 2002 e 2003. | confirmada | S28 | texto |
| F081 | 9 | Batimetria em faixa ('swath') por sistema multifeixe do navio. | confirmada | S28 | texto |
| F082 | 9 | Três cruzeiros a bordo do navio Ronald H. Brown, da NOAA. | confirmada | S27 | texto |
| F083 | 9 | O setor mais fundo, a oeste: 8.300–8.340 m. | confirmada | S28 | texto |
| F084 | 9 | 8.300–8.340 m = 27.231–27.362 ft; o meio, 8.320 m = 27.296,6 ft: cerca de 27.300 ft. | confirmada | medicao | medicao |
| F085 | 9 | O último cruzeiro do USGS terminou em 04/09/2003. | confirmada | S27 | texto |
| F086 | 9 | 2018 − 2003 = 15 anos (o mergulho de 19/12/2018). | confirmada | medicao | medicao |
| F087 | 10 | A litosfera, a camada rígida de fora, está partida em placas que se movem e carregam continentes e oceanos (S72, F92). | confirmada | S72 | texto |
| F088 | 10 | 'Trenches in the Pacific are located in places where one tectonic plate subducts or slides under another one.' | confirmada | S27 | texto |
| F089 | 10 | As placas Norte-Americana e do Caribe. | confirmada | S02 | texto |
| F090 | 10 | Deslizam uma pela outra, com só um pouco de subducção (nunca a subducção típica, N39). | confirmada | S27 | texto |
| F091 | 10 | A placa do Caribe anda para leste ~20 mm/ano em relação à Norte-Americana. | confirmada | S02 | texto |
| F092 | 10 | 20 mm = 0,787 in: cerca de três quartos de polegada. | confirmada | medicao | medicao |
| F093 | 10 | 'the most negative free-air gravity anomaly on earth, -380 mGal' (atribuído; sem 'anomaly' na voz, C28). | confirmada | S27 | texto |
| F094 | 10 | 'which indicates the presence of an active downward force'. | confirmada | S27 | texto |
| F095 | 11 | Uma plataforma de carbonato inclinada (na fala, 'a tilted layer of limestone'; 'layer', não 'slab', que a fala usa para as placas: C29), entre cotas reconstruídas de +1.300 m e −4.000 m (USGS). | confirmada | S28 | texto |
| F095a | 11 | 'limestone' para a rocha da plataforma de carbonato de Porto Rico: o relatório do EX1502 (NOAA) dá formações da sequência de plataforma como calcários (Aymamón e Los Puertos). | confirmada | S33 | texto |
| F096 | 11 | +1.300 m = 4.265,1 ft: mais de 4.000 ft. | confirmada | medicao | medicao |
| F097 | 11 | A ponta baixa, −4.000 m (cota reconstruída). | confirmada | S28 | texto |
| F098 | 11 | −4.000 m = 13.123,4 ft abaixo do nível do mar: cerca de 13.000 ft. | confirmada | medicao | medicao |
| F099 | 11 | O USGS sugere que esses traços (a profundidade, a gravidade baixa e a plataforma inclinada) são manifestações de grandes movimentos verticais de um segmento da fossa, do antearco e da ilha. | confirmada | S28 | texto |
| F100 | 11 | Sob o setor mais fundo, os blocos girados da placa Norte-Americana indicam o afundamento da fossa ('indicate' é o verbo da fonte; o 'it' é o setor mais fundo, F100a). | confirmada | S28 | texto |
| F100a | 11 | O alcance: os blocos girados ficam sob o setor mais fundo, na parte oeste da fossa (8.300–8.340 m). | confirmada | S28 | texto |
| F100b | 11 | Na parte leste, os blocos que descem não são girados: 'Under the trench's deepest part' é o alcance certo. | confirmada | S28 | texto |
| F101 | 11 | A grande profundidade é um dos traços que o USGS lê como manifestação de movimento vertical ('we suggest'): o afundamento, dito com o verbo da fonte (N51). | confirmada | S28 | texto |
| F102 | 11 | 'we suggest that these features are manifestations of large vertical movements'. | confirmada | S28 | texto |
| F103 | 11 | Os blocos girados 'indicate trench subsidence' (o 'sinking floor' da frase anterior). | confirmada | S28 | texto |
| F104 | 11 | Os mapas multifeixe do USGS mostram deslizamentos nas encostas. | confirmada | S28 | texto |
| F105 | 12 | Muitos deslizamentos submarinos ('numerous retrograde slope failures') na borda da plataforma ao norte de Porto Rico, a parede da fossa. | confirmada | S28 | texto |
| F106 | 12 | Antigos: o desmoronamento contínuo ao longo do tempo e deslizamentos gigantes nas duas paredes. | confirmada | S27 | texto |
| F107 | 12 | O risco de tsunami por deslizamento 'appears to be high' (atribuído, sem data nem probabilidade, N11). | confirmada | S28 | texto |
| F108 | 12 | 11/10/1918, na Passagem de Mona, a oeste de Porto Rico (NCEI, evento 1458). | confirmada | S29 | texto |
| F109 | 12 | Numa falha normal do Cânion de Mona, não na fossa (N10). | confirmada | S29 | texto |
| F110 | 12 | O banco do NCEI (NOAA) dá M 7,1 (outra referência do mesmo banco, 7,5: por isso atribuído, N29). | confirmada | S29 | texto |
| F111 | 12 | Runup de até ~6 m nas costas oeste e norte de Porto Rico. | confirmada | S29 | texto |
| F112 | 12 | A altura máxima: 6,1 m. | confirmada | S29 | texto |
| F113 | 12 | 6,1 m = 20,0 ft. | confirmada | medicao | medicao |
| F114 | 12 | O total oficial: 116 (o banco também dá 144 e mais de 200: em disputa, e 'more than 100' vale para todos, F48). | confirmada | S29 | texto |
| F115 | 13 | O tsunami medieval de Anegada é 'the only known example of a tsunami caused by faulting in the Puerto Rico Trench'. | confirmada | S17 | texto |
| F116 | 13 | 'the low-lying island of Anegada'. | confirmada | S17 | texto |
| F117 | 13 | Anegada, Ilhas Virgens Britânicas (nunca 'U.S. island', N24). | confirmada | S17 | texto |
| F118 | 13 | Centenas de blocos de coral a centenas de metros para dentro ('far inland', R26). | confirmada | S17 | texto |
| F119 | 13 | Na costa norte, a que dá para a fossa. | confirmada | S17 | texto |
| F120 | 13 | Ao longo de quase 10 km (o trecho dos blocos datados). | confirmada | S17 | texto |
| F121 | 13 | Quase 10 km = 6,214 mi: 'roughly six miles'. | confirmada | medicao | medicao |
| F122 | 13 | A datação pelo urânio (série do urânio) dos blocos de coral. | confirmada | S17 | texto |
| F123 | 13 | Entre 1381 e 1391 (nunca 'in 1385', N24). | confirmada | S17 | texto |
| F124 | 13 | O artigo é de 2025 (Geophysical Research Letters 52). | confirmada | S17 | texto |
| F125 | 13 | 'almost exactly one century before Columbus' (1492 − 1391 = 101; V23). | confirmada | S17 | texto |
| F126 | 14 | Foi a parte leste da fossa (Kilbourne et al. 2025; nunca ligado ao ponto mais fundo, N24). | confirmada | S17 | texto |
| F127 | 14 | O ponto mais fundo fica na parte oeste da fossa (Anegada fica a ~201 mi dele, V22). | confirmada | S28 | texto |
| F128 | 14 | As simulações numéricas do tsunami. | confirmada | S17 | texto |
| F129 | 14 | 'they give parent earthquake magnitudes of 8.0 or more' (os autores não estimam uma, F54). | confirmada | S17 | texto |
| F130 | 14 | 'The tsunami is important as the only reported sign that the eastern Puerto Rico Trench has produced a great earthquake'. | confirmada | S17 | texto |
| F131 | 14 | 'The average recurrence interval in either case probably spans thousands of years'. | confirmada | S17 | texto |
| F132 | 15 | O ROV da NOAA mergulhou na parede sul da fossa, a 6.000 m. | confirmada | S32 | texto |
| F133 | 15 | Em 26/04/2015. | confirmada | S32 | texto |
| F134 | 15 | Com câmeras HD. | confirmada | S32 | texto |
| F135 | 15 | Profundidade máxima: 5.999,7 m. | confirmada | S32 | texto |
| F136 | 15 | 5.999,7 m = 19.684,1 ft: quase 20.000 ft (a parede, nunca o fundo, F68). | confirmada | medicao | medicao |
| F137 | 15 | A posição: 19°09,053'N, 65°24,430'W, a 130 mi a leste do ponto mais fundo (V25). | confirmada | S32 | texto |
| F138 | 15 | O ROV Deep Discoverer. | confirmada | S32 | texto |
| F139 | 15 | Do navio Okeanos Explorer. | confirmada | S32 | texto |
| F140 | 15 | Doze mergulhos na expedição EX1502 Leg 3. | confirmada | S33 | texto |
| F141 | 15 | O mergulho foi abortado logo depois, por um problema no compensador de óleo do D2. | confirmada | S32 | texto |
| F142 | 16 | O conjunto de dados da Five Deeps sobre a fossa. | confirmada | S53 | texto |
| F143 | 16 | Levantado com um Kongsberg EM 124 no DSSV Pressure Drop. | confirmada | S53 | texto |
| F144 | 16 | Em 18 e 19/12/2018. | confirmada | S53 | texto |
| F145 | 16 | Um multifeixe de última geração, de profundidade total. | confirmada | S01 | texto |
| F146 | 16 | A meta: levar o submersível ao ponto mais fundo de cada um dos cinco oceanos (a meta é da expedição, N20). | confirmada | S03 | texto |
| F147 | 16 | 'the first person to reach the lowest point in all five oceans'. | confirmada | S05 | imprensa |
| F148 | 16 | As profundidades corrigidas com dados de CTD da superfície ao fundo. | confirmada | S01 | texto |
| F149 | 16 | Os sensores do submersível e dos landers deram os perfis de velocidade do som até o fundo, por medida direta. | confirmada | S03 | texto |
| F150 | 17 | 8.378 ± 5 m, a 19,712°N, 67,311°W. | confirmada | S01 | texto |
| F151 | 17 | 8.378 m = 27.486,9 ft: cerca de 27.500 ft. | confirmada | medicao | medicao |
| F152 | 17 | A margem, ± 5 m, com 95 % de confiança. | confirmada | S01 | texto |
| F153 | 17 | 5 m = 16,4 ft: cerca de 16 ft. | confirmada | medicao | medicao |
| F154 | 17 | 134,3 km = 83,47 mi até a costa de Aguadilla, no noroeste (Census 2025; a de Isabela fica 7,4 m mais longe). | confirmada | medicao | medicao |
| F155 | 17 | 'about 83 miles', da costa mais perto, nunca de San Juan (N26, N35). | confirmada | medicao | medicao |
| F156 | 17 | Censo de 2020: 3.285.874 residentes (a estimativa de 01/07/2025, 3.184.835, também passa de três milhões: V28). | confirmada | S46 | texto |
| F157 | 17 | Mais de três milhões nas duas contagens. | confirmada | medicao | medicao |
| F158 | 18 | Quarta-feira, 19 de dezembro (a reportagem a bordo; nunca 21/12, a data do release, N06). | confirmada | S05 | imprensa |
| F159 | 18 | Vescovo, no submersível Limiting Factor, ao ponto mais fundo do Atlântico. | confirmada | S04 | texto |
| F160 | 18 | O sonar tinha levantado o lugar em 18–19/12/2018. | confirmada | S53 | texto |
| F161 | 18 | 19/12/2018 foi uma quarta-feira. | confirmada | medicao | medicao |
| F162 | 18 | Mergulho solo. | confirmada | S04 | texto |
| F163 | 18 | No submersível particular dele, o Limiting Factor. | confirmada | S04 | texto |
| F164 | 18 | Um veículo feito para chegar a qualquer ponto dos oceanos. | confirmada | S05 | imprensa |
| F165 | 18 | 'after an approximate two-and-a-half hour descent'. | confirmada | S04 | texto |
| F166 | 18 | 'the first person to reach the absolute nadir of the Atlantic Ocean' (R15). | confirmada | S05 | imprensa |
| F167 | 18 | O título do release: 'First Human Reaches the Deepest Point in the Atlantic Ocean'. | confirmada | S04 | texto |
| F168 | 18 | A citação, letra a letra: "One down!", ao sair pela escotilha (a reportagem a bordo). | confirmada | S05 | imprensa |
| F169 | 18 | O repórter estava no Pressure Drop. | confirmada | S05 | imprensa |
| F170 | 18 | O submersível confirmou: 8.376 ± 5 m (o sonar é o número; o submersível, a confirmação, N34). | confirmada | S01 | texto |
| F171 | 18 | Os sensores (CTD) do submersível. | confirmada | S01 | texto |
| F172 | 18 | 8.378 − 8.376 = 2 m = 6,56 ft: cerca de 7 ft. | confirmada | medicao | medicao |
| F173 | 18 | A lista dava 8.740 m, pelo estudo de 2019. | confirmada | S02 | texto |
| F174 | 19 | Stewart & Jamieson, 2019. | confirmada | S02 | texto |
| F175 | 19 | O Milwaukee Deep, 8.740 m, no GEBCO Gazetteer (Tabela 1). | confirmada | S02 | texto |
| F176 | 19 | '8740 m as published in the IHO-IOC GEBCO Gazetteer of Undersea Feature Names' (§2.1.2). | confirmada | S02 | texto |
| F177 | 19 | Dois autores. | confirmada | medicao | medicao |
| F178 | 19 | 8.740 m = 28.674,5 ft: cerca de 28.700 ft. | confirmada | medicao | medicao |
| F179 | 19 | O jornal de 1939: 28.680 ft (a comparação é fato; a cópia, não, N23). | confirmada | S09 | imprensa |
| F180 | 19 | A data do jornal, 1939. | confirmada | S09 | imprensa |
| F181 | 19 | 28.680 contra 28.674,5 ft: 5,5 ft de diferença. | confirmada | medicao | medicao |
| F182 | 19 | O sonar da expedição (a Five Deeps, de §16; publicado em 2021): 8.378 ± 5 m. | confirmada | S01 | texto |
| F182a | 19 | O sonar é o da Five Deeps, multifeixe a bordo do DSSV Pressure Drop. | confirmada | S01 | texto |
| F183 | 19 | 8.740 − 8.378 = 362 m = 1.187,7 ft: cerca de 1.200 ft (a régua do sonar da expedição, publicado em 2021, C28). | confirmada | medicao | medicao |
| F184 | 19 | O USGS, 2002 e 2003. | confirmada | S28 | texto |
| F185 | 19 | 8.300–8.340 m, mais raso que os 8.740 m da lista. | confirmada | S28 | texto |
| F186 | 20 | O estudo confere os dados batimétricos de repositórios públicos. | confirmada | S02 | texto |
| F187 | 20 | Os três pontos publicados em Porto Rico. | confirmada | S02 | texto |
| F188 | 20 | 'consistently shallower than those published'. | confirmada | S02 | texto |
| F189 | 20 | 'have propagated uncorrected through online sources and the scientific literature'. | confirmada | S02 | texto |
| F190 | 20 | 7.450 m no ponto da lista, uma crista no eixo da fossa. | confirmada | S02 | texto |
| F191 | 20 | 7.450 m = 24.442,3 ft: cerca de 24.400 ft. | confirmada | medicao | medicao |
| F192 | 21 | O estudo é de 2019. | confirmada | S02 | texto |
| F193 | 21 | Os resultados da expedição saíram em 2021 (aceito em 07/04/2021). | confirmada | S01 | texto |
| F194 | 21 | O ponto do estudo: 8.408 m, 19,613°N, 67,847°W. | confirmada | S02 | texto |
| F195 | 21 | Oito levantamentos, de 1996 a 2015, mais velhos que o sonar da expedição (dezembro de 2018). | confirmada | S02 | texto |
| F195a | 21 | Dados públicos: o estudo avalia os dados batimétricos disponíveis em repositórios públicos. | confirmada | S02 | texto |
| F196 | 21 | Na zona econômica exclusiva da República Dominicana ('the Dominican Republic's waters', o mesmo substantivo das 'U.S. waters'; nunca 'territorial waters', N32). | confirmada | S02 | texto |
| F197 | 21 | A camada eez da Marine Regions confirma a zona dominicana, sem reivindicação sobreposta (pol_type 200NM, sovereign2 null): o 'claimed by' saiu (C29). | confirmada | S16 | texto |
| F198 | 21 | 57,3 km = 35,58 mi, a oeste. | confirmada | medicao | medicao |
| F199 | 21 | O artigo da expedição, 2021. | confirmada | S01 | texto |
| F200 | 21 | Na zona econômica dos EUA (Porto Rico). | confirmada | S16 | texto |
| F201 | 21 | 160,4 km = 99,68 mi até a costa dominicana (La Altagracia). | confirmada | medicao | medicao |
| F202 | 21 | A zona: até 200 milhas náuticas da linha de base (nunca 'territorial waters', N32). | confirmada | S69 | texto |
| F203 | 21 | Os EUA têm direitos soberanos sobre os recursos. | confirmada | S69 | texto |
| F204 | 21 | Inclui Porto Rico. | confirmada | S69 | texto |
| F205 | 22 | A API do gazetteer, consultada em 26/10/2026: nenhum item com 'Milwaukee'. | confirmada | S15 | texto |
| F206 | 22 | Datado: outubro de 2026. | confirmada | medicao | medicao |
| F207 | 22 | 'All bathymetric data collected by Caladan Oceanic were submitted to Seabed 2030' (em outubro de 2020). | confirmada | S01 | texto |
| F208 | 22 | O Seabed 2030: o mapa definitivo do fundo do oceano até 2030 (nunca que o mapa já o mostra, N49). | confirmada | S01 | texto |
| F209 | 22 | O sonar do Pressure Drop levantou a Fossa das Sandwich do Sul. | confirmada | S53 | texto |
| F210 | 22 | A fossa vai de 54°40'S a 60°40'S: o extremo sul do Atlântico, cruzando 60°S. | confirmada | S01 | texto |
| F211 | 22 | O submersível foi levado à fossa do extremo sul e mergulhou lá: no Factorian Deep, na ponta sul dela, logo ao sul de 60°S, em fevereiro de 2019 (S37). Desde a r3 a voz não diz mais onde ele mergulhou (o Factorian saiu de p7, lista-r3 L78); a frase continua certa, e nada nela diz que ele não mergulhou (ver a O12 do laudo). | confirmada | S37 | texto |
| F212 | 23 | A fossa tem a maior profundidade publicada do Sul, no Meteor Deep (8.428 m, a mais publicada: passaria a de Porto Rico). | confirmada | S02 | texto |
| F213 | 23 | A placa Sul-Americana mergulha sob a das Sandwich do Sul a 65–78 mm por ano. | confirmada | S02 | texto |
| F214 | 23 | 65–78 mm = 2,559–3,071 in; o meio, 2,815 in: cerca de três polegadas. | confirmada | medicao | medicao |
| F215 | 23 | Porto Rico: ~20 mm por ano. | confirmada | S02 | texto |
| F216 | 23 | 65/20 = 3,25 e 78/20 = 3,90. | confirmada | medicao | medicao |
| F217 | 23 | Uma fileira de pequenos picos vulcânicos de ~350 km. | confirmada | S40 | texto |
| F218 | 23 | Sem moradores permanentes (a NASA o diz da ilha Saunders e arredores). | confirmada | S39 | texto |
| F220 | 23 | Landsat 8, 24/08/2026. | confirmada | S40 | texto |
| F221 | 23 | O calor do lago de lava na cratera do cume. | confirmada | S40 | texto |
| F222 | 23 | O Mount Michael fica na ilha Saunders, uma das Sandwich do Sul (sem altura, N30). | confirmada | S40 | texto |
| F223 | 24 | Levantada de 2 a 9/02/2019. | confirmada | S53 | texto |
| F224 | 24 | 'Prior to the FDE, around 91% of the trench was un-mapped'. | confirmada | S01 | texto |
| F225 | 24 | 91 % = 9,1 em 10: cerca de nove décimos. | confirmada | medicao | medicao |
| F226 | 24 | 'The most commonly reported depth for the Meteor Deep is 8428 m'. | confirmada | S02 | texto |
| F227 | 24 | 8.428 m (o número mais publicado do Meteor). | confirmada | S02 | texto |
| F228 | 24 | Contra 8.378 m do sonar de Porto Rico (50 m mais fundo; V40; a comparação é fora da atribuição, porque o sonar só saiu em 2021). | confirmada | S01 | texto |
| F229 | 24 | O sonar deu o Meteor Deep a 8.265 ± 13 m. | confirmada | S01 | texto |
| F230 | 24 | O Meteor Deep: 8.265 ± 13 m pelo sonar. | confirmada | S01 | texto |
| F231 | 24 | A BGS: o Meteor Deep, 8.265 m, é o ponto mais fundo da fossa. | confirmada | S03 | texto |
| F232 | 24 | 8.378 − 8.265 = 113 m = 370,7 ft: cerca de 370 ft (nunca 'deeper', N14). | confirmada | medicao | medicao |
| F233 | 24 | Tabela 1: 'N/A' na coluna do submersível para o Meteor Deep (nunca 'Vescovo dove the Meteor Deep', N21). | confirmada | S01 | texto |
| F240 | 25 | A Resolução 02/2023 (A-3). | confirmada | S20 | texto |
| F241 | 25 | 'the IHO recognizes the Southern Ocean' (nunca 'not ratified' nem 'for the first time', N20). | confirmada | S20 | texto |
| F242 | 25 | A 3ª Assembleia a aprovou (decisão 19). | confirmada | S21 | texto |
| F243 | 25 | O limite norte no paralelo de 60°S. | confirmada | S20 | texto |
| F248 | 25 | A fossa vai até 60°40'S, cruzando 60°S. | confirmada | S01 | texto |
| F244 | 25 | O Meteor Deep fica em águas do Atlântico, não do Oceano Austral (a ~330 mi ao norte de 60°S, V43). | confirmada | S01 | texto |
| F245 | 25 | Sem significado político; os serviços hidrográficos podem manter os limites deles. | confirmada | S20 | texto |
| F246 | 25 | A Austrália usa os limites próprios. | confirmada | S20 | texto |
| F246a | 25 | Nem todo país usa a linha: a Argentina não vê base técnica para um Oceano Austral separado (a M-3, apêndice 1). Era a F247, que apoiava a frase cortada "Argentina, for one, disagrees." (lista-r3 L77); o fato continua apoiando o "not every country uses it", que fica. | confirmada | S20 | texto |
| F283 | 25 | Com a linha de 60°S: o ponto mais fundo do Atlântico é o Brownson Deep, na Fossa de Porto Rico (o resumo do artigo, que usa a linha da IHO: o Meteor Deep fica no Atlântico, F244). | confirmada | S01 | texto |
| F284 | 25 | O ponto de Porto Rico: 8.378 ± 5 m pelo sonar (a régua de toda a comparação; a frase não diz número). | confirmada | S01 | texto |
| F285 | 25 | Sem a linha, de um lado ou do outro de 60°S: o ponto mais fundo da fossa INTEIRA das Sandwich do Sul é o Meteor Deep, 8.265 ± 13 m, 113 m (≈ 370 ft, F232) mais raso que o de Porto Rico; as margens (± 5 e ± 13 m) não fecham a diferença (F74). | confirmada | S01 | texto |
| F286 | 25 | Sem a linha, o que ela separa do Atlântico também é mais raso: o ponto mais fundo de todo o Oceano Austral (ao sul de 60°S) tem 7.432 ± 13 m (o Factorian Deep, F79), 946 m mais raso que o de Porto Rico. | confirmada | S01 | texto |
| F287 | 25 | O caso "without it" existe: para a Argentina, não há Oceano Austral separado, e a área é a parte sul do Índico, do Atlântico Sul e do Pacífico Sul (a M-3, apêndice 1). Nesse caso a fossa inteira seria Atlântico, e o mais fundo dela, o Meteor, continua mais raso (F285). | confirmada | S20 | texto |
| F288 | 25 | E o limite britânico de 55°S da S-23 de 1953 (que o Reino Unido largou com a resolução de 2023): por ele, o Meteor (55,230°S) cairia no Oceano Austral (F83), e Porto Rico continua o mais fundo do Atlântico. | confirmada | S20 | texto |
| F289 | 25 | "the other end of the ocean": o ponto de Porto Rico fica no Atlântico Norte (a Tabela 1 do artigo), a 19,712°N; o Meteor Deep, no Atlântico Sul (F290). São 9.195 km (5.713 mi) de um ao outro (C03 do dossiê; só contexto: a fala não diz número). É o "the other end of the Atlantic" da ponte de p6 (F210), dito de volta; ver a O11 do laudo. | confirmada | S01 | texto |
| F290 | 25 | O Meteor Deep fica no extremo sul do Atlântico ("the southernmost Atlantic Ocean"). | confirmada | S01 | texto |
| F255 | 25 | Os peixes do relato do mergulho de 1964. | confirmada | S06 | texto |
| F256 | 25 | A segunda olhada veio em 2019. | confirmada | S06 | texto |
| F257 | 26 | O Limiting Factor revisitou o mesmo sítio em 2019 (sem profundidade nem dia, A02). | confirmada | S06 | texto |
| F258 | 26 | O Limiting Factor levou Vescovo ao ponto mais fundo em dezembro de 2018. | confirmada | S04 | texto |
| F259 | 26 | O release de dezembro de 2018. | confirmada | S04 | texto |
| F260 | 26 | 200 peixes-caracol no relato do mergulho de 1964. | confirmada | S06 | texto |
| F261 | 26 | O mergulho é de 1964. | confirmada | S06 | texto |
| F262 | 26 | 'No snailfish were observed.' | confirmada | S06 | texto |
| F263 | 26 | Muitos holotúrios Peniagone sp., numa densidade parecida com a relatada para os peixes. | confirmada | S06 | texto |
| F264 | 26 | O Peniagone é um holotúrio elasipodídeo. | confirmada | S06 | texto |
| F265 | 26 | Os elasipodídeos são pepinos-do-mar (sea cucumbers). | confirmada | S33 | texto |
| F266 | 26 | 'The holothurian has a similar exterior colour, texture and morphology to the snailfish.' | confirmada | S06 | texto |
| F267 | 26 | Os dois animais comparados. | confirmada | medicao | medicao |
| F268 | 27 | O artigo de 2020, com os cinco autores, sobre o mergulho de 1964. | confirmada | S06 | texto |
| F269 | 27 | A conclusão dos autores (nunca 'it was proven', N45). | confirmada | S06 | texto |
| F270 | 27 | Cinco autores. | confirmada | medicao | medicao |
| F271 | 27 | A base: a densidade parecida ('the count'). | confirmada | S06 | texto |
| F272 | 27 | E a aparência parecida ('the look'). | confirmada | S06 | texto |
| F273 | 27 | Os animais de 1964 (ninguém os viu de novo, F38). | confirmada | S06 | texto |
| F274 | 27 | Vescovo é um dos cinco autores (F91; nunca 'Vescovo went back', A02). | confirmada | S06 | texto |
| F275 | 27 | Cinco autores. | confirmada | medicao | medicao |
| F276 | 28 | A NOAA: provavelmente nenhum peixe vive abaixo de uns 8.400 m (atribuído). | confirmada | S31 | texto |
| F277 | 28 | 8.400 m = 27.559,1 ft: cerca de 27.500 ft (a NOAA arredonda para 28.000; R32). | confirmada | medicao | medicao |
| F278 | 28 | A rede de 1970 desceu a 8.370 m (27.460 ft). | confirmada | S31 | texto |
| F279 | 28 | 27.460 contra cerca de 27.500 ft: quase. | confirmada | medicao | medicao |
| F280 | 28 | A fronteira da NOAA: entre 8.200 e 8.400 m. | confirmada | S31 | texto |
| F281 | 28 | O ponto mais fundo, 8.378 m, cai dentro dela. | confirmada | S01 | texto |
| F282 | 28 | A cerca de 83 milhas de Porto Rico. | confirmada | medicao | medicao |

## Comparação com a rodada anterior (`fatos-r3.laudo.md`, sobre `b064eb75cb8c`)

A conferência anterior deu PASS, nota 9.5, COBERTURA 289 de 289, sem achado. Depois, o Lucas leu o roteiro e mandou enxugar o Atlântico Sul; a Sala aplicou a `lista-r3.json` (L75–L80), e nada mais mudou no texto falado.

| linha | antes (`b064eb75cb8c`) | agora (`286ff3abf7c7`) |
|---|---|---|
| F219, F234–F239, F247, F249–F254 | as 7 frases do Atlântico Sul que o Lucas mandou tirar | fora da tabela (as frases saíram da voz) |
| F246a | (o trecho era da F247, na frase "Argentina, for one, disagrees.") | nova: o mesmo trecho, em apoio de "not every country uses it" |
| F248 | §26, depois de "…not every country uses it." | §25, logo depois de "It begins at 60 degrees south." (L79); afirmação, trecho e veredito de antes |
| F283–F290 | — | novas: a L80, "With the line or without it, …", confirmada pela conta dos três limites |
| F211 | "como p7 diz" | a afirmação refeita: o mergulho no Factorian continua o apoio, e a voz não o diz mais (O12) |
| F255, F256 e F257–F282 | §26 e §27–§29 | §25 e §26–§28 (o mesmo texto) |

A nota fica em 9.5, e o veredito, em PASS: zero DIVERGE e zero REFUTADA, e toda linha da tabela confirmada.

VEREDITO: PASS
