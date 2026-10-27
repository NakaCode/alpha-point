# Laudo · verificador de fatos (independente, da Sala de controle) · rodada r3b, por diff · atlantico-fundo

Revisão julgada: `7b965eecdb7c` · data-base 2026-10-26 (a conferência anterior, `fatos-r3b.laudo.md`, julgou `286ff3abf7c7`; depois, a Sala aplicou a `lista-r3b.json`, L81, a troca DO-DOSSIE do único achado do crítico de roteiro da bancada curta)

COBERTURA: 285 de 285 linhas da tabela com veredito "confirmada" (afirmações checáveis em 145 das 154 frases do texto falado; as outras 9 não afirmam nada checável, as mesmas da rodada anterior, declaradas abaixo). A única frase mudada (a L81, §25) foi CHECADA POR INTEIRO nesta rodada, com 9 linhas (F283–F289, F289a e F290); as frases vizinhas dela (o §25 inteiro) foram relidas no contexto novo. As outras 153 frases são idênticas, caractere por caractere, às que a rodada anterior julgou, e as linhas delas vêm de lá pelo diff, byte a byte. Entrou 1 linha (a F289a): 284 + 1 = 285. Nenhuma linha ficou sem veredito.

- **O que foi julgado:** o texto falado inteiro de `roteiros/atlantico-fundo/roteiro-narrador.md` (arquivo `61f500f3e810…`), sha256 do texto falado `7b965eecdb7c976c7246dfd0928134e80f85353299befb4ca996f2d4ca81343e`. `node roteiros/atlantico-fundo/_ferramentas/gate.mjs`, rodado antes de tudo: exit 0, PASSA, 1.953 palavras (≈ 10,61 min a 184/min; o piso é 1.950), 28 parágrafos, 154 frases, média 12,7, maior 28, gancho com 166 palavras até a assinatura e o "But" na 49ª, 0 problemas, autoplágio vazio, todas as taxas abaixo do teto. Os 8 alertas são os de antes, já decididos pelas rodadas anteriores ("never" ×2, "first" ×2, "Milwaukee Deep" ×3 e o "still" do gancho); nenhum cai na frase mudada.
- **O diff, conferido por este verificador, não pelo relato:** `roteiros/atlantico-fundo/_trabalho/roteiro-r3b.antes.md` (arquivo `42b914c663ae…`, o mesmo que a rodada anterior julgou; texto falado `286ff3abf7c7`, recalculado aqui com o `falado()` do portão de fatos) contra o texto de hoje (`7b965eecdb7c`), parágrafo a parágrafo e frase a frase:
  - `diff` dos dois arquivos: uma linha só muda (a 74, o 25º parágrafo falado);
  - nela, uma frase só: "With the line or without it, the deepest point in the Atlantic lies at the other end of the ocean." virou "With the line or without it, the deepest point in the Atlantic lies north of the equator.";
  - os outros 27 parágrafos são idênticos, e no 25º as outras frases também; o número de parágrafos (28) e de frases não muda.
  - É exatamente a L81 da `lista-r3b.json` (op DO-DOSSIE, `de` → `para`), e nada mais.
- **A tabela de antes:** `roteiros/atlantico-fundo/_trabalho/fatos-tabela-r3b.antes.json` é byte a byte a que estava em `qc-roteiro/fatos-tabela.json` antes desta rodada (sha256 `ab9264c1d08a…` nos dois).
- **Contra o quê:** o dossiê `pautas/atlantico-fundo/fundamento.json` (F02, F03, F74, F81, F82, F83; N14, N48; C03) como mapa, e a cópia local de cada fonte como prova: o artigo da expedição (Bongiovanni et al. 2021, S01, `midia/atlantico-fundo/fontes/02-bongiovanni-2021-gdj3.122.txt`) e a M-3 da IHO, edição de 2026 (S20, `midia/atlantico-fundo/fontes/09-iho-M3-E-2026.txt`). **Rede: não usei.** Nenhum site que recusa robô foi tocado.

NOTA: 9.6/10 · sem regressão: a frase nova diz menos que a de antes, e tudo o que diz está na Tabela 1 do artigo (19.712°N, "North Atlantic"); o "with the line or without it" continua fechando nos três limites que as fontes dão, com a mesma conta. Some a O11 (o "other end" que punha Porto Rico na ponta norte do oceano). Não chega a 10 pelos mesmos apoios de composição, leves e declarados, das rodadas anteriores (O1–O4, O6–O8) e pela O12, que continua.

## O que foi checado nesta rodada, e o que veio da anterior pelo diff

| | o quê | como |
|---|---|---|
| checado agora | a frase da L81 ("…lies north of the equator."), elemento por elemento | contra a cópia local de S01 e S20 (abaixo); 9 linhas, todas confirmadas |
| relido agora | o §25 inteiro, com a frase nova no lugar: o bloco da linha de 60°S antes dela (F240–F248, F244, F246a) e a ponte depois ("Off Puerto Rico, the 1964 crew's fish were waiting for a second look.", F255, F256) | leitura no contexto novo; nenhuma linha precisou mudar |
| relido agora | o §22 ("…to the other end of the Atlantic.", F209–F211), porque a L81 tirou o eco dele | a frase continua certa (O12, abaixo); nenhuma linha precisou mudar |
| veio da anterior pelo diff | as outras 153 frases e as 276 linhas delas (F001–F282, F042a, F070a, F246a e as outras com sufixo), sem nenhuma mudança | identidade caractere por caractere do texto (acima) e byte a byte da tabela de antes; o julgamento delas é o de `fatos-r3b.laudo.md` e das rodadas anteriores |

## A frase nova (L81), elemento por elemento

"With the line or without it, the deepest point in the Atlantic lies north of the equator."

| elemento | linha | veredito | o que a cópia local diz (S01 salvo dito) |
|---|---|---|---|
| "With the line": pela linha de 60°S, o mais fundo do Atlântico é o de Porto Rico | F283 | CONFIRMADA | o resumo: "The deepest place in each ocean were identified as the Brownson Deep, Puerto Rico Trench in the Atlantic Ocean"; o artigo usa a linha da IHO (F244) |
| a régua: o ponto de Porto Rico, pelo sonar | F284 | CONFIRMADA | §3.1: "The deepest point was identified as 8,378 ± 5 m uncertainty" |
| "or without it", 1: a fossa inteira das Sandwich do Sul, de qualquer lado de qualquer linha | F285 | CONFIRMADA | §3.2: "with the deepest point in the entire trench observed in Meteor Deep as 8,265 ± 13 m" (113 m mais raso) |
| "or without it", 2: tudo o que a linha separa do Atlântico | F286 | CONFIRMADA | §3.2: "The deepest point of the Southern Ocean was identified as 7,432 ± 13 m" (946 m mais raso) |
| o caso "without it" existe | F287 | CONFIRMADA | S20, a M-3, apêndice 1, a posição da Argentina: "which corresponds to the southern zones of the Indian, South Atlantic and South Pacific Oceans" |
| o outro limite que as fontes dão | F288 | CONFIRMADA | S20: "uses the parallel of Latitude 55°S as the Northern limit of the Southern Ocean" (o comentário britânico da S-23 de 1953, largado em 2023) |
| **"lies north of the equator"**: o ponto fica a 19,712°N | **F289** | **CONFIRMADA** | §3.1: "The deepest point was identified as 8,378 ± 5 m uncertainty at 19.712°N/67.311°W"; e a conclusão do artigo repete "(8,378 ± 5 m, 19.712°N/67.311°W)". Latitude norte é, por definição, ao norte do equador: a 19,712° dele (≈ 2.180 km, ≈ 1.355 mi pelo meridiano; contexto, fora da voz) |
| o artigo põe o ponto no Atlântico Norte | **F289a** (nova) | **CONFIRMADA** | a Tabela 1: "North Atlantic / Puerto Rico Trench/Brownson Deep / 19.712°N / 67.311°W" (o F02 do dossiê) |
| a outra candidata fica ao sul do equador, e não é a mais funda | **F290** | **CONFIRMADA** | a Tabela 1: "South Atlantic / South Sandwich Trench/Meteor Deep / 55.230°S / 26.173°W"; 113 m mais raso (F285) |

**A conta do "with the line or without it"**, posta em dia: a da rodada anterior, limite a limite, vale sem mudança, porque o ponto que ela dá é o mesmo nos três casos, e é dele que a frase nova diz a latitude.

| o limite | o mais fundo do Atlântico | onde ele fica |
|---|---|---|
| 60°S, a Res. 02/2023 da IHO (F81, F83) | Porto Rico, 8.378 ± 5 m (o Meteor, no Atlântico, é 113 m mais raso) | 19,712°N: ao norte do equador |
| 55°S, o comentário britânico da S-23 de 1953, largado em 2023 (F83) | Porto Rico (o Meteor, a 55,230°S, e a ponta sul da fossa caem no Oceano Austral) | 19,712°N |
| sem Oceano Austral separado (a posição da Argentina, F82) | Porto Rico (o Meteor, 113 m mais raso; o mais fundo ao sul de 60°S, 946 m mais raso) | 19,712°N |

- Com as margens no pior caso (8.378 − 5 = 8.373 contra 8.265 + 13 = 8.278), a diferença ainda é de 95 m: as margens não a fecham (a nota do F74). Todas as profundidades da conta são as do sonar, a mesma régua.
- **O que a frase de antes dizia a mais, e esta não diz:** "at the other end of the ocean" punha Porto Rico numa ponta do Atlântico; a fonte o põe no Atlântico Norte, a 19,712°N, longe da ponta norte do oceano (a O11 da rodada anterior). "North of the equator" é exatamente o que a coordenada e o "North Atlantic" da Tabela 1 sustentam, nem mais nem menos. É um ESTREITAR de fato, embora a lista o rotule DO-DOSSIE: o dossiê sustenta a frase pelo F02 ("Tabela 1: 'North Atlantic, Puerto Rico Trench/Brownson Deep'"); o F03 que a lista também cita não traz a coordenada, e a prova dela é a cópia local de S01 (F289).
- **Composição, declarada:** nenhuma fonte diz a frase com estas palavras; ela junta a conta dos três limites (S01 e S20, a mesma da rodada anterior) com a coordenada do ponto (S01). A dedução fecha pelos números e pela definição de latitude, não por justaposição.
- **O "não se diz":** a frase não diz que o Atlântico tem dois pontos mais fundos (N14; ao contrário, ela aponta um só lugar, ao norte, e a outra candidata está a 55°S); não põe o Meteor no Oceano Austral pela linha de 60°S nem o Factorian no Atlântico (N48); não nega o reconhecimento de 2023 nem diz "every country agrees" (N20). O `gate.mjs` passa nela: sem "still", "here", "this line" nem número.

## O §25 relido com a frase nova

- "By that line, the Meteor Deep, well to the north, is in the Atlantic." (F244) e, duas frases depois, "…lies north of the equator.": os dois "north" têm referentes diferentes (ao norte de 60°S; ao norte do equador), e a frase nova diz o dela por inteiro ("of the equator"). Não há troca de régua: o Meteor está ao norte da linha e ao sul do equador, e as duas coisas são certas (55,230°S).
- A ponte "Off Puerto Rico, the 1964 crew's fish were waiting for a second look." (F255, F256) continua certa e lê bem: da latitude, ao lugar que a tem.

## ACHADOS

Nenhum. Nenhuma frase do texto de hoje pede CORTAR, ESTREITAR, ENFRAQUECER, ATRIBUIR, REORDENAR, DA-PAUTA, DO-DOSSIE, DA-FONTE, REDIZER nem PEDIR por fato. A frase nova é verdadeira nos três limites das fontes e diz menos que a de antes.

## Observações (não são achados: ficam registradas para a Sala)

- **O1–O4 e O6–O8**, das rodadas anteriores, continuam como estavam, em frases que não mudaram (o texto delas está em `fatos-r3b.laudo.md`).
- **O11 · resolvida.** O "lies at the other end of the ocean" saiu da voz com a L81. A troca que a Sala fez não é a que esta conferência tinha proposto ("lies far to the north"), e é melhor que ela pelo fato: "north of the equator" é a medida da Tabela 1 dita sem figura.
- **O12 · continua, leve.** "The expedition also took its sonar, and its sub, to the other end of the Atlantic." (§22, F209–F211) está certa: a expedição levou o sonar e o submersível à Fossa das Sandwich do Sul, no extremo sul do Atlântico, e o submersível mergulhou na ponta sul dela em fevereiro de 2019 (F211). A L81 tirou o eco que o §25 fazia dessa frase ("the other end"), sem mudar o fato dela; o "and its sub" sem o mergulho dito continua sendo clareza, já dada à Sala (`aplicado-r3.md` §9).
- **O13 · a nota do editor ficou para trás (fora da voz, da Sala).** `roteiros/atlantico-fundo/roteiro-editor.md`, linha 110 (a tabela das pontes, a de p6), ainda diz "A emenda L80 ('the other end of the ocean') devolve o eco da ponte." Depois da L81 não há mais eco: a linha 821 do mesmo arquivo já diz a frase nova. Não toca fato nem voz; é a nota do editor a pôr em dia, se a Sala quiser.

## As decisões da Sala (26/10/2026), conferidas na voz

- **O Oceano Austral:** o bloco do §25 continua na forma da R08 e da N20 ("In 2023, the International Hydrographic Organization recognized the Southern Ocean.", "It begins at 60 degrees south.", "By that line, the Meteor Deep, well to the north, is in the Atlantic.", "The organization says the line carries no political meaning, and not every country uses it."). Nunca "not ratified", "official border", "every country agrees" nem "for the first time". A frase nova não depende da linha (vale com ela e sem ela).
- **O Meteor Deep:** o ponto mais fundo dele, 55,230°S, 26,173°W (Tabela 1), não o do gazetteer, é o que a F290 usa; o ponto do gazetteer (55,323°S) também fica ao sul do equador, então a frase vale para os dois.
- **As outras decisões** (a gente de Porto Rico, o tsunami medieval, a data de Vescovo, a GEBCO e o USGS no mapa, o Mount Michael, o Archimède, o 8.740 m, os nomes) ficam como as rodadas anteriores as conferiram, em frases que não mudaram.

## As armadilhas de fato, na frase nova

- **Universal:** "With the line or without it" é um universal sobre os limites: conferido limite a limite, nos três que as fontes dão, e pela conta que vale para qualquer outro que deixe Porto Rico no Atlântico (o mais fundo da fossa das Sandwich e o mais fundo ao sul de 60°S ficam abaixo de 8.378 m).
- **Ano derivado, período:** nenhum na frase nova.
- **Composição de trechos, conclusão por justaposição:** declarada acima; o "north" sai da coordenada da mesma linha da Tabela 1 que dá o "deepest", não da vizinhança.
- **Réguas trocadas:** o ponto do sonar (19,712°N, 67,311°W) e o do submersível são o mesmo lugar ("verified by the subsequent submersible dive to the location", §3.1); o Brownson Deep e a Fossa de Porto Rico inteira ficam os dois ao norte do equador, então a frase não depende de qual se entende; o "north" da F244 (de 60°S) e o desta frase (do equador) foram separados acima.
- **Conversão:** nenhuma na voz; a distância ao equador (≈ 2.180 km, ≈ 1.355 mi: 111.132,954 × 19,712 − 16.038,509 × sen 39,424° + 16,833 × sen 78,848° ≈ 2.180.485 m, o arco do meridiano no WGS84; ÷ 1.609,344 = 1.354,9 mi) é contexto da F289, fora da fala.
- **Mecanismo, citação, fonte "não aberta":** nenhum; as duas fontes da frase foram abertas na cópia local em texto.

## A varredura "estado do mundo", na frase mudada

- **"…the deepest point in the Atlantic lies north of the equator."**: presente, de lugar, pela medida do sonar (2018–2019, publicada em 2021); só mudaria com medida nova que achasse no Atlântico Sul um ponto mais fundo que 8.378 m, o que a Tabela 1 e o §3.2 hoje excluem. Não depende da linha, então uma edição nova da M-3 não a envelhece. Confirmada, sem data.

## As frases sem afirmação checável (NADA A CHECAR, declarado)

As 9 das rodadas anteriores, nenhuma delas mudada: a pergunta e a assinatura do gancho; "A sound could give a number."; "It couldn't show anyone what was down there."; "Keep those fish in mind."; as três frases-ponte do §8 ("A crew could see only a small patch of the trench, and a net could only bring something up.", "Neither could map the floor." e "That took a different kind of sonar."); e "Why is the trench so deep?".

## Não conferido

Nada na voz. A frase nova se apoia só em cópias locais em texto (S01, S20); nenhuma afirmação dela depende de fonte que recusou leitura ou que só existe como PDF, resumo ou imagem.

## VOLÁTEIS na fala (reconferir na véspera da gravação)

Sem mudança desta rodada:
- "As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep." (a API do gazetteer, `totalItems: 0` em 26/10/2026): refazer o GET antes de gravar; se o mês da gravação mudar, o "October 2026" muda junto.
- "More than three million people live in Puerto Rico." (Censo 2020, 3.285.874; estimativa de 01/07/2025, 3.184.835): só muda se uma estimativa nova cair abaixo de três milhões.
- "not every country uses it" (a M-3 de 2026, apêndice 1: a Argentina e a Austrália): reconferir se sair edição nova da M-3.

## LISTA DE NOMES (anônimo → pessoa nomeável)

Sem mudança: a L81 não tira nem põe nome.

## DECISÃO DO LUCAS / DA SALA PENDENTE que tocou esta checagem

- O12 (da Sala, clareza, já no `aplicado-r3.md` §9): o "and its sub" do §22 sem o mergulho dito.
- O13 (da Sala, nota do editor): a linha 110 do `roteiro-editor.md`.

## PADRÕES

1. **A figura de lugar que a fonte não mede.** "At the other end of the ocean" era figura; "north of the equator" é a medida da fonte dita em palavras. Quando a emenda de uma frase de lugar pode trocar a figura pela coordenada que a fonte dá, ela fica mais curta, mais certa e não pede número na voz.

## O portão de fatos

`node ferramentas/portao-fatos.mjs atlantico-fundo` (da raiz do canal), rodado sobre esta tabela e este laudo:

```
portão de fatos — atlantico-fundo: PASSA
  sha12 do texto falado: 7b965eecdb7c (igual ao do gate.mjs) · 28 parágrafos
  laudo: Revisão julgada 7b965eecdb7c · COBERTURA 285 de 285 · VEREDITO PASS
  tabela: 285 confirmada(s) de 285
```

Saída 0 (exit 0), sem problema nem aviso (`--json`: `problemas: []`, `avisos: []`), na primeira rodada sobre a tabela posta em dia: nenhum conserto de trecho, frase, número, piso ou cobertura foi preciso. O portão confere a estrutura (o sha, a cobertura, as frases inteiras, os trechos literais, as medições e os números), não a verdade: a verdade da L81 é a coordenada e a conta acima.

```
node roteiros/atlantico-fundo/_ferramentas/gate.mjs --derivados
veredito PASSA, exit 0, problemas []
derivados: qc-roteiro/fatos.laudo.md cita 7b965eecdb7c (ok); roteiro-editor.md cita 7b965eecdb7c (ok); pronuncia.md cita 7b965eecdb7c (ok)
```

Os laudos com sufixo de rodada (`fatos-r3b.laudo.md` e os de antes) ficam fora do `--derivados`, como o portão manda: julgaram o texto de antes.

## A tabela

As linhas que esta rodada pôs em dia (a frase inteira e o trecho literal de cada uma estão na `fatos-tabela.json`): a `frase` das F283–F290 (a de agora); a afirmação e o trecho da F289 e da F290; a F289a, nova. As outras 276 linhas ficam byte a byte como estavam (a listagem inteira, com a afirmação de cada uma, está em `fatos-r3b.laudo.md`, "A tabela").

| id | § | afirmação | veredito | fonte | classe |
|---|---|---|---|---|---|
| F283 | 25 | Com a linha de 60°S: o ponto mais fundo do Atlântico é o Brownson Deep, na Fossa de Porto Rico. | confirmada | S01 | texto |
| F284 | 25 | O ponto de Porto Rico: 8.378 ± 5 m pelo sonar (a régua; a frase não diz número). | confirmada | S01 | texto |
| F285 | 25 | Sem a linha: o mais fundo da fossa inteira das Sandwich do Sul é o Meteor Deep, 8.265 ± 13 m, 113 m mais raso. | confirmada | S01 | texto |
| F286 | 25 | Sem a linha: o mais fundo do Oceano Austral, 7.432 ± 13 m, 946 m mais raso. | confirmada | S01 | texto |
| F287 | 25 | O caso "without it" existe: a Argentina, sem Oceano Austral separado (M-3, apêndice 1). | confirmada | S20 | texto |
| F288 | 25 | O limite britânico de 55°S (S-23 de 1953, largado em 2023): o Meteor cairia no Oceano Austral, e Porto Rico continua o mais fundo. | confirmada | S20 | texto |
| F289 | 25 | "lies north of the equator": o ponto de Porto Rico fica a 19,712°N, 67,311°W (§3.1 e Tabela 1); latitude norte, ao norte do equador; vale nos três limites. | confirmada | S01 | texto |
| F289a | 25 | A Tabela 1 põe o ponto no "North Atlantic" (o F02 do dossiê). | confirmada | S01 | texto |
| F290 | 25 | A outra candidata, o Meteor Deep, fica a 55,230°S ("South Atlantic"), ao sul do equador, e é mais rasa (F285): a frase não diz dois pontos mais fundos (N14). | confirmada | S01 | texto |

## Comparação com a rodada anterior (`fatos-r3b.laudo.md`, sobre `286ff3abf7c7`)

A conferência anterior deu PASS, nota 9.5, COBERTURA 284 de 284, sem achado, com a O11 sobre esta frase. Depois, o crítico de roteiro da bancada curta deu um único achado LEVE, a mesma frase, e a Sala aplicou a `lista-r3b.json` (L81); nada mais mudou no texto falado.

| linha | antes (`286ff3abf7c7`) | agora (`7b965eecdb7c`) |
|---|---|---|
| F283–F288 | a frase "…lies at the other end of the ocean." | a frase "…lies north of the equator."; afirmação, trecho e veredito de antes |
| F289 | "the other end of the ocean": Atlântico Norte × Atlântico Sul, com a O11 | "north of the equator": 19,712°N (§3.1), com o trecho da coordenada |
| F289a | — | nova: o "North Atlantic" da Tabela 1, com a coordenada |
| F290 | o Meteor no "southernmost Atlantic Ocean" | o Meteor a 55,230°S, "South Atlantic" (Tabela 1): ao sul do equador |

A nota sobe de 9.5 a 9.6 (some a O11), e o veredito fica em PASS: zero DIVERGE e zero REFUTADA, e toda linha da tabela confirmada.

VEREDITO: PASS
