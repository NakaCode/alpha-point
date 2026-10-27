# Laudo · verificador de fatos (independente, da Sala de controle) · rodada r2c, por diff · atlantico-fundo

Revisão julgada: `b064eb75cb8c` · data-base 2026-10-26 (a conferência anterior, `fatos-r2c.laudo.md`, julgou `ffafacc2329b`; depois, a Sala aplicou a `lista-r2c.json`, L74)

COBERTURA: 289 de 289 linhas da tabela com veredito "confirmada". A frase trocada pela r2c (§5, a do Challenger) foi CHECADA POR INTEIRO nesta rodada, com as suas 6 linhas (F040, F041, F042, F042a, F043, F044); as outras 159 frases do texto falado são idênticas, caractere por caractere, às que as rodadas anteriores checaram por inteiro (`fatos-r2b.laudo.md` e `fatos-r2c.laudo.md`), e as 283 linhas delas vêm de lá sem mudança, pelo diff. Nenhuma linha ficou sem veredito. CHECADO POR INTEIRO (a frase nova nesta rodada; o resto pelas rodadas anteriores, declarado abaixo).

- **O que foi julgado:** o texto falado inteiro de `roteiros/atlantico-fundo/roteiro-narrador.md`, sha256 `b064eb75cb8ccfd1f4373650be4f9a67cc1bd4588ad5775b77eb948ba7497345`. `node roteiros/atlantico-fundo/_ferramentas/gate.mjs`, rodado antes de tudo: PASSA, 2.030 palavras (≈ 11:02), 29 parágrafos, 160 frases, média 12,7, maior 28, gancho com 166 palavras até a assinatura e o "But" na 49ª, 0 problemas, autoplágio vazio. Os 8 alertas são os de antes, já decididos pelas rodadas anteriores ("never" ×2, "first" ×2, "Milwaukee Deep" ×3 e o "still" do gancho), e nenhum cai na frase trocada.
- **Como a lista foi derivada: à mão, por diff.** O canal não tem extrator de afirmações. A lista é a das rodadas anteriores (as 160 frases do portão, lidas uma a uma sobre `432dcb4041d4` na bancada final e sobre `ffafacc2329b` na r2b), posta em dia pelo diff: a frase que mudou foi lida de novo, inteira, contra a cópia local de cada fonte; as outras ficam com o veredito da rodada que as checou.
- **O diff, conferido por este verificador, não pelo relato:** `roteiros/atlantico-fundo/_trabalho/roteiro-r2c.antes.md` (sha256 do arquivo `3b89f71d…`; texto falado `ffafacc2329b`, pelo próprio `gate.mjs` rodado sobre ele: 2.029 palavras, 160 frases) contra o texto de hoje. O `diff` dá uma linha só (§5), e nela uma frase só: "about a decade earlier" → "less than a decade earlier" (+1 palavra, 2.029 → 2.030). As outras **159 de 160 frases são idênticas**, e nenhum parágrafo entrou, saiu ou mudou de ordem. A diferença é exatamente a do `_trabalho/aplicado-r2c.md` (L74 da `_trabalho/lista-r2c.json`, ENFRAQUECER, a troca exata do A1 da conferência anterior). A tabela de antes (`_trabalho/fatos-tabela-r2c.antes.json`) é byte a byte a que estava em `qc-roteiro/fatos-tabela.json` antes desta rodada (o mesmo sha256, `67f68d3e…`).
- **Contra o quê:** o dossiê `pautas/atlantico-fundo/fundamento.json` (o F22 em disputa, com a "como_dizer" e a nota postas em dia pela Sala com o O9; a C29; a N52; a C11) como mapa, e a cópia local de cada fonte (`midia/atlantico-fundo/fontes/`, pelos índices `fontes-local-a.json`, `-b.json` e `-sala.json`) como prova. **Rede: não usei.** Nenhum site que recusa robô foi tocado.
- **A tabela:** `roteiros/atlantico-fundo/qc-roteiro/fatos-tabela.json`, 289 linhas (as mesmas de antes): **texto (229)**, **imprensa (14)** e **medição (46, `qc-roteiro/fatos-medidas.txt`)**. Mudaram só as 6 linhas da frase do Challenger: a `frase` das seis passou ao texto de agora, e a F041 ganhou a afirmação nova, o veredito "confirmada" e o trecho do IHR que a sustenta. As outras 283 linhas ficam byte a byte como estavam.

NOTA: 9.5/10 · a única regressão da r2b (o A1) foi consertada com a troca exata do laudo anterior, e a frase de agora vale para as duas datas em disputa, sem pôr ano nem número na voz. Volta à nota da bancada final da rodada 2: não chega a 10 pelos mesmos apoios de composição, leves e declarados, de antes (O1–O8, abaixo), nenhum deles um defeito que peça troca.

## A rodada r2c: o que foi checado agora e o que veio pelo diff

- **Checado nesta rodada, por inteiro:** a frase de §5, "The trench itself had been found less than a decade earlier, by the British research ship HMS Challenger, under Captain Nares, far to the east.", com as 6 linhas dela. A F041 foi refeita (de "corrigir" a "confirmada"); as F040, F042, F042a, F043 e F044 foram conferidas de novo contra a cópia, com a frase nova, e ficam com a afirmação, o trecho e o veredito de antes.
- **Veio da rodada anterior, pelo diff:** as outras 159 frases (idênticas, caractere por caractere) e as 283 linhas delas, com o veredito "confirmada" que `fatos-r2b.laudo.md` (as 153 frases que não mudaram na r2b) e `fatos-r2c.laudo.md` (as 7 trocadas pela r2b, menos a F041) deram. Não as refiz.
- **O dossiê:** o F22 ("como_dizer" com "less than a decade earlier"; a nota com o O9: Stewart & Jamieson 2019 não dão ano à sondagem de Porto Rico, e o "HMS Challenger 1875" da Tabela 1 deles é a das Marianas) e a C29 ("fica": "less than a decade earlier") estão em dia, conferidos no `fundamento.json`. Sobra uma nota velha, fora da voz (O10, abaixo).

### A frase de §5, elemento por elemento

| elemento | linha | veredito | o que a cópia local diz |
|---|---|---|---|
| "The trench itself had been found … by … HMS Challenger" | F040 | CONFIRMADA | "Discovered by the HMS Challenger Expedition in 1875" (resumo da Endeavour 2020, S07, `fa-nora-528111-endeavour-2020.txt`); o IHR 1936 (S12): "H.M.S. Challenger, Captain Sir George S. N a r e s , while cruising between St. Thomas, Virgin Islands and the Bermudas, found a maximum depth of 3,875 fathoms". O ano, a voz não diz (N52) |
| "less than a decade earlier" | F041 | CONFIRMADA (era "corrigir", A1) | o IHR 1936 (S12): "On 26th March 1875" e, sobre a sondagem do Blake de "27th January 1883", "depth obtained eight years previously by the Challenger". A conta abaixo |
| "British" | F042 | CONFIRMADA | "H.M.S. Challenger, Captain Sir George S." (S12): navio de Sua Majestade, sob um capitão com título de cavaleiro; o relatório da viagem saiu pelo "HM Stationary Office" (a bibliografia de Stewart & Jamieson 2019, S02) |
| "research ship" | F042a | CONFIRMADA | "Report of the Scientific Results of the Voyage of H.M.S. Challenger" (S02, bibliografia) |
| "under Captain Nares" | F043 | CONFIRMADA | "Nares Deep from the name of the commander of H.M.S. Challenger" (S12) |
| "far to the east" | F044 | CONFIRMADA | o relatório de 1883 (S11, `04-uscgs-relatorio-1883-CSC-0082.txt`): a sondagem do Blake fica "seventy-one miles west of the Challenger's greatest depth", e o Blake ficou a uns 60 mi a leste do ponto mais fundo (§3); pela medida V11, a sondagem do Challenger (19°42'N, 65°07'W) fica a 142,95 mi a leste do ponto mais fundo |

**A conta do "less than a decade"** (o "earlier" é antes da sondagem do Blake, 27/01/1883, que §3 diz):

| data da sondagem do Challenger | de onde vem | intervalo até 27/01/1883 | "less than a decade"? |
|---|---|---|---|
| 26/03/1875 | as cópias: o IHR 1936 ("On 26th March 1875"; "eight years previously") e o resumo da Endeavour 2020 ("in 1875") | 2.864 dias = **7,84 anos** | sim: 7,84 < 10 |
| 26/03/1873 | a travessia de St. Thomas às Bermudas que o mesmo IHR descreve; a data dessa travessia não está em nenhuma cópia local (F22, em disputa) | 3.594 dias = **9,84 anos** | sim: 9,84 < 10 |

- A régua da casa para "less than" (portão de fatos, regra [numeros]): o exato fica abaixo, e o dito é o teto. Vale para as duas datas, e também para o "eight years previously" do IHR. O A1 da conferência anterior se fecha sem precisar ler o *Narrative* da expedição.
- O IHR põe a expedição em "1873-76" ("the track and soundings of H .M .S. Challenger 1873-76", com o espaçamento do OCR da cópia), e o dia da sondagem é 26 de março nas duas leituras: nenhuma data possível pela cópia passa de uma década.
- A frase não diz o ano, nem "eight years", nem número nenhum: a regra [challenger-ano] do `gate.mjs` passa, e a N52 também. "Decade" não é numeral para o portão de fatos (o padrão 1 do laudo anterior); a conta foi feita à mão, acima.

## ACHADOS

Nenhum. A frase trocada não pede CORTAR, ESTREITAR, ENFRAQUECER, ATRIBUIR, REORDENAR, DA-PAUTA, DO-DOSSIE, DA-FONTE, REDIZER nem PEDIR. O A1 da conferência anterior está consertado, com a troca exata que ela deu.

## Observações (não são achados: ficam registradas para a Sala)

- **O1–O9**, das rodadas anteriores, continuam como estavam, em frases que não mudaram (a O9, a nota do F22, já foi posta em dia pela Sala).
- **O10 · a nota de "HMS Challenger" na lista de nomes do dossiê (não a voz).** Em `pautas/atlantico-fundo/fundamento.json` › `nomes` (forma_roteiro "HMS Challenger") e na tabela de nomes do `fundamento.md`, a nota ainda diz "A expedição de 1875 (F22).", como se o ano fosse firme. O F22 está em disputa (1875 nas cópias, 1873 pela travessia que o IHR descreve), e a N52 tira o ano da voz e da tela. Não toca a voz; é conserto de uma nota, para a Sala (por exemplo: "A expedição de 1873–76; a sondagem de Porto Rico, com o ano em disputa (F22).").

## As decisões da Sala, conferidas na voz

- **C29 e F22:** a frase está como a C29 fixa ("less than a decade earlier", sem o ano, na fala), e o F22 continua em disputa sem que a voz dependa da disputa.
- **N52:** nenhum ano do Challenger (1873 ou 1875) e nenhum "eight years" na voz; o `gate.mjs` passa na regra [challenger-ano].
- As outras decisões da Sala (o Oceano Austral, os três milhões, o tsunami medieval, o Meteor e o Factorian, a data de Vescovo, a GEBCO e o USGS no mapa, o Mount Michael, o Archimède, o 8.740 m, os nomes) ficam como as rodadas anteriores as conferiram, em frases que não mudaram.

## As armadilhas de fato, na frase trocada

- **Universal e superlativo:** nenhum ("found" é o "Discovered by" da fonte, e não "the first").
- **Ano derivado:** "less than a decade earlier" é derivado das datas; a conta está acima, para as duas datas em disputa.
- **Composição:** "British" junta o "H.M.S." e o "Sir" do IHR com o "HM Stationary Office" de S02 (leve, a mesma leitura de antes); nada mais.
- **Período:** o "earlier" se mede contra o Blake de 1883, a sondagem que §3 data; a frase não toca 1939, 1964 nem os anos de depois.
- **Réguas:** a sondagem do Challenger (19°42'N, 65°07'W, muito a leste) e não o ponto mais fundo; a fossa achada, não o ponto mais fundo achado (a frase seguinte, "Its sounding there", fica "there", no lugar da sondagem).
- **Conversão:** nenhuma nesta frase (o "about 23,000 feet" é da frase seguinte, idêntica, F045–F046).

## A varredura "estado do mundo", na frase trocada

A frase está toda no passado ("had been found"). Nada volta como volátil.

## As frases sem afirmação checável (NADA A CHECAR, declarado)

As 9 das rodadas anteriores, nenhuma delas trocada: a pergunta e a assinatura do gancho, "A sound could give a number.", "It couldn't show anyone what was down there.", "Keep those fish in mind.", as três pontes de p2 para p3 e "Why is the trench so deep?".

## Não conferido

Nada na voz. A data de 26/03/1873 da sondagem do Challenger continua fora das cópias locais (o F22, em disputa), mas a frase de agora não depende dela: "less than a decade" vale com ela e sem ela.

## VOLÁTEIS na fala (reconferir na véspera da gravação)

Os mesmos das rodadas anteriores, em frases que não mudaram:
- "As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep." (a API do gazetteer, `totalItems: 0` em 26/10/2026): refazer o GET antes de gravar; se o mês da gravação mudar, o "October 2026" muda junto.
- "More than three million people live in Puerto Rico." (Censo 2020, 3.285.874; estimativa de 01/07/2025, 3.184.835): só muda se uma estimativa nova cair abaixo de três milhões.
- "Argentina, for one, disagrees." e "not every country uses it." (a M-3 de 2026): reconferir se sair edição nova da M-3.

## LISTA DE NOMES (anônimo → pessoa nomeável)

Sem mudança: nenhuma pessoa anônima que devesse ter nome. A frase trocada nomeia o capitão (Nares) e o navio (HMS Challenger), como antes.

## DECISÃO DO LUCAS / DA SALA PENDENTE que tocou esta checagem

- O10: a nota de "HMS Challenger" na lista de nomes do dossiê (da Sala; não toca a voz).
- A pergunta do ritmo, do ouvinte a frio (`aplicado-r2b.md` §6), não toca fato.

## PADRÕES

1. A hedge que vale para os dois lados de uma disputa ("less than a decade", para 7,84 e 9,84 anos) fecha o achado sem esperar a fonte que decide a disputa: o tipo de troca que o ENFRAQUECER existe para fazer.
2. A hedge sem número ("a decade") escapa da regra [numeros] do portão; a conta se faz à mão, com a mesma régua, e fica escrita na linha da tabela (F041).

## O portão de fatos

`node ferramentas/portao-fatos.mjs atlantico-fundo` (da raiz do canal), rodado sobre esta tabela e este laudo:

```
portão de fatos — atlantico-fundo: PASSA
  sha12 do texto falado: b064eb75cb8c (igual ao do gate.mjs) · 29 parágrafos
  laudo: Revisão julgada b064eb75cb8c · COBERTURA 289 de 289 · VEREDITO PASS
  tabela: 289 confirmada(s) de 289
```

Saída 0 (exit 0), na primeira rodada, sem conserto na tabela. O portão confere a estrutura (o sha, a cobertura, as frases inteiras, os trechos literais, as medições e os números), não a verdade: a verdade da F041 é a conta acima.

```
node roteiros/atlantico-fundo/_ferramentas/gate.mjs --derivados
veredito PASSA, exit 0, problemas []
derivados: qc-roteiro/fatos.laudo.md cita b064eb75cb8c (ok); roteiro-editor.md cita b064eb75cb8c (ok); pronuncia.md cita b064eb75cb8c (ok)
```

Os laudos com sufixo de rodada (`-r1`, `-r2`, `-r2b`, `-r2c`) ficam fora do `--derivados`, como o portão manda: julgaram o texto de antes.

## A tabela

`§` é o parágrafo falado (de 1 a 29, a numeração do portão); a frase inteira e o trecho literal de cada linha estão na `fatos-tabela.json`. As linhas que esta rodada pôs em dia: F040, F041, F042, F042a, F043 e F044 (a `frase` das seis; a afirmação, o veredito e o trecho da F041).

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
| F211 | 22 | O submersível mergulhou lá (no Factorian, ao sul de 60°S, como p7 diz). | confirmada | S37 | texto |
| F212 | 23 | A fossa tem a maior profundidade publicada do Sul, no Meteor Deep (8.428 m, a mais publicada: passaria a de Porto Rico). | confirmada | S02 | texto |
| F213 | 23 | A placa Sul-Americana mergulha sob a das Sandwich do Sul a 65–78 mm por ano. | confirmada | S02 | texto |
| F214 | 23 | 65–78 mm = 2,559–3,071 in; o meio, 2,815 in: cerca de três polegadas. | confirmada | medicao | medicao |
| F215 | 23 | Porto Rico: ~20 mm por ano. | confirmada | S02 | texto |
| F216 | 23 | 65/20 = 3,25 e 78/20 = 3,90. | confirmada | medicao | medicao |
| F217 | 23 | Uma fileira de pequenos picos vulcânicos de ~350 km. | confirmada | S40 | texto |
| F218 | 23 | Sem moradores permanentes (a NASA o diz da ilha Saunders e arredores). | confirmada | S39 | texto |
| F219 | 23 | Reivindicação sobreposta, Reino Unido e Argentina (nunca 'British islands', N15). | confirmada | S16 | texto |
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
| F234 | 24 | O nome vem do navio de pesquisa alemão Meteor. | confirmada | S15 | texto |
| F235 | 24 | O Meteor Deep foi descoberto em 1926. | confirmada | S01 | texto |
| F236 | 24 | A SCUFN aceitou o nome Meteor Deep na reunião de 07/06/2021; o gazetteer foi atualizado em 16/06/2021. | confirmada | S14 | texto |
| F237 | 24 | O ponto do gazetteer é o ponto mais fundo do sonar (55,23069°S, 26,17294°W). | confirmada | S15 | texto |
| F238 | 24 | A posição antiga (Zhivago 2002). | confirmada | S02 | texto |
| F239 | 24 | 51,2 km = 31,8 mi (Zhivago) e 31,98 mi (Allaby): cerca de 30 mi. | confirmada | medicao | medicao |
| F240 | 25 | A Resolução 02/2023 (A-3). | confirmada | S20 | texto |
| F241 | 25 | 'the IHO recognizes the Southern Ocean' (nunca 'not ratified' nem 'for the first time', N20). | confirmada | S20 | texto |
| F242 | 25 | A 3ª Assembleia a aprovou (decisão 19). | confirmada | S21 | texto |
| F243 | 25 | O limite norte no paralelo de 60°S. | confirmada | S20 | texto |
| F244 | 25 | O Meteor Deep fica em águas do Atlântico, não do Oceano Austral (a ~330 mi ao norte de 60°S, V43). | confirmada | S01 | texto |
| F245 | 25 | Sem significado político; os serviços hidrográficos podem manter os limites deles. | confirmada | S20 | texto |
| F246 | 25 | A Austrália usa os limites próprios. | confirmada | S20 | texto |
| F247 | 25 | A Argentina não vê base técnica para um Oceano Austral separado. | confirmada | S20 | texto |
| F248 | 26 | A fossa vai até 60°40'S, cruzando 60°S. | confirmada | S01 | texto |
| F249 | 26 | O Factorian Deep, o ponto mais fundo do Oceano Austral (nunca 'in the Atlantic', N48). | confirmada | S15 | texto |
| F250 | 26 | Em 60,479°S (53,4 km = 33,2 mi ao sul de 60°S, V44). | confirmada | S03 | texto |
| F251 | 26 | O nome vem do submersível Limiting Factor, que chegou ao fundo do Factorian. | confirmada | S15 | texto |
| F252 | 26 | Em 2019 (a missão do Oceano Austral, fevereiro de 2019). | confirmada | S37 | texto |
| F253 | 26 | O Limiting Deep, também nomeado pelo Limiting Factor, o segundo mais fundo do Oceano Austral. | confirmada | S15 | texto |
| F254 | 26 | 33,5 km = 20,85 mi entre os dois pontos do gazetteer. | confirmada | medicao | medicao |
| F255 | 26 | Os peixes do relato do mergulho de 1964. | confirmada | S06 | texto |
| F256 | 26 | A segunda olhada veio em 2019. | confirmada | S06 | texto |
| F257 | 27 | O Limiting Factor revisitou o mesmo sítio em 2019 (sem profundidade nem dia, A02). | confirmada | S06 | texto |
| F258 | 27 | O Limiting Factor levou Vescovo ao ponto mais fundo em dezembro de 2018. | confirmada | S04 | texto |
| F259 | 27 | O release de dezembro de 2018. | confirmada | S04 | texto |
| F260 | 27 | 200 peixes-caracol no relato do mergulho de 1964. | confirmada | S06 | texto |
| F261 | 27 | O mergulho é de 1964. | confirmada | S06 | texto |
| F262 | 27 | 'No snailfish were observed.' | confirmada | S06 | texto |
| F263 | 27 | Muitos holotúrios Peniagone sp., numa densidade parecida com a relatada para os peixes. | confirmada | S06 | texto |
| F264 | 27 | O Peniagone é um holotúrio elasipodídeo. | confirmada | S06 | texto |
| F265 | 27 | Os elasipodídeos são pepinos-do-mar (sea cucumbers). | confirmada | S33 | texto |
| F266 | 27 | 'The holothurian has a similar exterior colour, texture and morphology to the snailfish.' | confirmada | S06 | texto |
| F267 | 27 | Os dois animais comparados. | confirmada | medicao | medicao |
| F268 | 28 | O artigo de 2020, com os cinco autores, sobre o mergulho de 1964. | confirmada | S06 | texto |
| F269 | 28 | A conclusão dos autores (nunca 'it was proven', N45). | confirmada | S06 | texto |
| F270 | 28 | Cinco autores. | confirmada | medicao | medicao |
| F271 | 28 | A base: a densidade parecida ('the count'). | confirmada | S06 | texto |
| F272 | 28 | E a aparência parecida ('the look'). | confirmada | S06 | texto |
| F273 | 28 | Os animais de 1964 (ninguém os viu de novo, F38). | confirmada | S06 | texto |
| F274 | 28 | Vescovo é um dos cinco autores (F91; nunca 'Vescovo went back', A02). | confirmada | S06 | texto |
| F275 | 28 | Cinco autores. | confirmada | medicao | medicao |
| F276 | 29 | A NOAA: provavelmente nenhum peixe vive abaixo de uns 8.400 m (atribuído). | confirmada | S31 | texto |
| F277 | 29 | 8.400 m = 27.559,1 ft: cerca de 27.500 ft (a NOAA arredonda para 28.000; R32). | confirmada | medicao | medicao |
| F278 | 29 | A rede de 1970 desceu a 8.370 m (27.460 ft). | confirmada | S31 | texto |
| F279 | 29 | 27.460 contra cerca de 27.500 ft: quase. | confirmada | medicao | medicao |
| F280 | 29 | A fronteira da NOAA: entre 8.200 e 8.400 m. | confirmada | S31 | texto |
| F281 | 29 | O ponto mais fundo, 8.378 m, cai dentro dela. | confirmada | S01 | texto |
| F282 | 29 | A cerca de 83 milhas de Porto Rico. | confirmada | medicao | medicao |

## Comparação com a rodada anterior (`fatos-r2c.laudo.md`, sobre `ffafacc2329b`)

A conferência da r2b deu RESSALVA, nota 9.0, COBERTURA 288 de 289, com um achado só, o A1 ("about a decade earlier" a 27,5 % dos 7,84 anos das cópias). A Sala aplicou a troca exata dele (L74), e nada mais mudou no texto falado.

| linha | antes (`ffafacc2329b`) | agora (`b064eb75cb8c`) |
|---|---|---|
| F040, F042, F042a, F043, F044 | a frase com "about a decade earlier" | a frase com "less than a decade earlier"; afirmação, trecho e veredito ("confirmada") de antes |
| F041 | "about a decade earlier": **corrigir** (A1) | "less than a decade earlier": **confirmada**, com o trecho do IHR ("depth obtained eight years previously by the Challenger") e a conta das duas datas |

A nota volta de 9.0 para 9.5, e o veredito, de RESSALVA para PASS, só pela F041: zero DIVERGE e zero REFUTADA, e toda linha da tabela confirmada.

VEREDITO: PASS
