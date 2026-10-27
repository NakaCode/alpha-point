# Laudo · verificador de fatos (independente, da Sala de controle) · rodada r2b, por diff · atlantico-fundo

Revisão julgada: `ffafacc2329b` · data-base 2026-10-26 (a bancada final da rodada 2 julgou `432dcb4041d4`, no `fatos-r2b.laudo.md`; depois, a Sala aplicou a `lista-r2b.json`, L67–L73)

COBERTURA: 288 de 289 linhas da tabela com veredito "confirmada"; a 289ª, a F041 ("about a decade earlier", §5), sai "corrigir" (achado A1). As 7 frases trocadas pela r2b foram CHECADAS POR INTEIRO nesta rodada (25 linhas: 18 refeitas e 7 novas); as outras 153 frases do texto falado são idênticas, palavra por palavra, às que a bancada anterior checou por inteiro, e as 264 linhas delas vêm de lá sem mudança, pelo diff. Nenhuma linha ficou sem veredito.

- **O que foi julgado:** o texto falado inteiro de `roteiros/atlantico-fundo/roteiro-narrador.md`, sha256 `ffafacc2329b4a537328100990204af8d1aa885d2e3290d8e36adad4d4f78b3a`. `node roteiros/atlantico-fundo/_ferramentas/gate.mjs`, rodado antes de tudo: PASSA, 2.029 palavras (≈ 11:02), 29 parágrafos, 160 frases, média 12,7, maior 28, gancho com 166 palavras até a assinatura e o "But" na 49ª, 0 problemas, autoplágio vazio. Os 8 alertas são os de antes, já decididos ("never" ×2, "first" ×2, "Milwaukee Deep" ×3 e o "still" do gancho), e nenhum cai numa frase trocada.
- **O diff, conferido por este verificador, não pelo relato:** `roteiros/atlantico-fundo/_trabalho/roteiro-r2b.antes.md` (sha256 do arquivo `7059fa34…`; texto falado `432dcb4041d4`, o que a bancada anterior julgou) contra o texto de hoje. Pela leitura do próprio portão (`paragrafosDe` e a regex de frases dele), mudaram 5 parágrafos (§5, §7, §11, §19 e §21) e, dentro deles, 7 frases; as outras **153 de 160 frases são idênticas**, caractere por caractere, e nenhum parágrafo entrou, saiu ou mudou de ordem. As 7 diferenças são exatamente as 7 do `_trabalho/aplicado-r2b.md` §3 (L67–L73). A tabela de antes (`_trabalho/fatos-tabela-r2b.antes.json`) é byte a byte a que estava em `qc-roteiro/fatos-tabela.json` antes desta rodada (o mesmo sha256, `8f217538…`).
- **Contra o quê:** o dossiê `pautas/atlantico-fundo/fundamento.json` (o F22 em disputa, com a afirmação e a nota novas; a C29; a N52; o F15, o F38 e o F44 com as "como_dizer" novas; a nota do C11; e, de antes, a C28, a N51 e a N32) como mapa, e a cópia local de cada fonte (`midia/atlantico-fundo/fontes/`, pelos índices `fontes-local-a.json`, `-b.json` e `-sala.json`) como prova. Cada `trecho` novo é literal da cópia (≥ 4 palavras, sem reticências), conferido com o `normTrecho`/`normFonte`/`acharNaFonte` do próprio portão antes de rodá-lo, e cada `frase` no parágrafo dela: 0 faltas nas 289 linhas. **Rede: não usei.** Nenhum site que recusa robô foi tocado.
- **A tabela:** `roteiros/atlantico-fundo/qc-roteiro/fatos-tabela.json`, 289 linhas (eram 282): **texto (229)**, **imprensa (14)** e **medição (46, `qc-roteiro/fatos-medidas.txt`)**. A F044 passou de medição a texto: a frase dela não tem mais número ("eight years" saiu), e o portão não aceita linha de medição em frase sem número; a prova do "far to the east" passou ao relatório de 1883.
- **O `fatos-medidas.txt`** não foi regravado: as linhas de medição das frases trocadas (V18, +1.300 m em §11; V06, 362 m em §19; V34, 57,3 km em §21) valem como estão; a V11 ("far to the east") fica citada na afirmação da F044, que agora é de texto; e a V09 ("1883 minus 1875 = 8 years") não sustenta mais nenhuma linha. O cabeçalho dele continua citando `432dcb4041d4`; ele não é laudo, e o `gate.mjs --derivados` não o confere.

NOTA: 9.0/10 · as 7 frases trocadas foram conferidas por inteiro, cada número com a conta à vista, e 6 delas estão mais exatas que antes ("the report" é a palavra da fonte; o alcance dos blocos girados é o do USGS; "the expedition's sonar" e "the Dominican Republic's waters" tiram duas ambiguidades). Desce de 9.5 para 9.0 porque a 7ª, a troca do Challenger, ficou menos sustentada pelas cópias do que a forma que substituiu: "about a decade" vale só para a data que nenhuma cópia dá (A1). É regressão pequena, de uma palavra, com conserto pronto.

## A r2b, frase a frase (checada por inteiro)

| item | § | a frase de hoje | veredito | o que eu conferi (cópia local) |
|---|---|---|---|---|
| L69 · ENFRAQUECER | 5 | "The trench itself had been found about a decade earlier, by the British research ship HMS Challenger, under Captain Nares, far to the east." | **CORRIGIR** no intervalo (F041); o resto CONFIRMADO (F040, F042, F042a, F043, F044) | a descoberta: "Discovered by the HMS Challenger Expedition in 1875" (Endeavour 2020, S07); o navio e o comandante: "H.M.S. Challenger, Captain Sir George S." e "Nares Deep from the name of the commander of H.M.S. Challenger" (IHR 1936, S12); a pesquisa: "Report of the Scientific Results of the Voyage of H.M.S. Challenger" (a bibliografia de Stewart & Jamieson 2019, S02); "far to the east": "seventy-one miles west of the Challenger's greatest depth" (o relatório de 1883, S11, sobre o Blake, que ficou ~60 mi a leste do ponto mais fundo, §3; V11: 142,95 mi). O intervalo: "## O F22", abaixo |
| L71 · REDIZER | 7 | "The sources disagree on exactly how deep it got." | CONFIRMADA (F062, F063) | "dive to 7300 m in the Puerto Rico trench" (o título do artigo de 2020, S06) contra "previously explored to approximately 8,300 meters by the French submersible Archimede in 1964" (o release da Five Deeps, S04). O "it" é o Archimède da frase de antes ("It went more than four miles down."). O "it got" não acrescenta fato: é a profundidade do mergulho, que é o que as duas fontes dão |
| L67 · ESTREITAR | 7 | "The report, published the next year, described them as snailfish, a family of fish." | CONFIRMADA (F069, F070, F070a) | "was reported in 1965" (S06): 1965 − 1964 = 1, "the next year"; "The most striking part of the report from was an account of observing 200 snailfish (Liparidae)" (S06: "the report" é a palavra da própria fonte, sem autor, como a N52 pede); "the Liparidae family" (Jamieson et al. 2021, DSR II, S36): "a family of fish". O [relato-de-quem] do portão passa |
| L70 · REDIZER | 11 | "By the agency's reconstruction, a tilted layer of limestone starts more than 4,000 feet above sea level." | CONFIRMADA (F095, F095a, F096) | "a tilted carbonate platform between (reconstructed) elevations of +1300 m and -4000 m" (USGS, S28); +1.300 m ÷ 0,3048 = 4.265,1 ft, "more than 4,000 feet" (V18, linha F096). "limestone" para a rocha da plataforma: o relatório do EX1502 (S33) dá as formações da sequência de plataforma de Porto Rico como "Late and Middle Miocene Ayamon and Los Puertos Limestones" (O7). "layer" no lugar de "slab": não muda o fato (C29, F44) |
| L72 · ESTREITAR | 11 | "Under the trench's deepest part, rotated blocks of rock indicate a sinking floor." | CONFIRMADA (F100, F100a, F100b) | "The western part includes the deepest sector of the trench" … "Seismic profiles show it to be underlain by rotated blocks of the NOAM plate that indicate trench subsidence" (o "it" é esse setor, 8.300–8.340 m); e, na parte leste, "but the descending blocks are not rotated" (S28). O alcance novo é o da fonte, e "indicate" é o verbo dela. Antes, "Under the trench" estendia os blocos girados à fossa inteira |
| L68 · REDIZER | 19 | "The floor the expedition's sonar found is about 1,200 feet shallower." | CONFIRMADA (F182, F182a, F183) | "The deepest point was identified as 8,378 ± 5 m uncertainty" e "Puerto Rico Trench multibeam bathymetry data gridded at 75 m acquired on-board the DSSV Pressure Drop" (Bongiovanni et al. 2021, S01): o sonar é o da Five Deeps, "the expedition" de §16. 8.740 − 8.378 = 362 m ÷ 0,3048 = 1.187,7 ft, "about 1,200 feet" (1,0 %); pelo submersível, 8.740 − 8.376 = 364 m = 1.194,2 ft, o mesmo "about 1,200". É a régua da C28 e da N51: o 1.200 é do sonar da expedição, e o estudo de 2019 (1.089 ft) fica no gancho, com "more than 1,000" |
| L73 · REDIZER | 21 | "Using public data from eight older surveys, it placed that point about 36 miles west of the sonar's spot, in the Dominican Republic's waters." | CONFIRMADA (F195, F195a, F196, F197, F198) | "the best resolution bathymetric datasets currently available from public repositories" e "from eight surveys between 1996 and 2015" (S02: mais velhos que o sonar de dezembro de 2018); "within the Exclusive Economic Zone (EEZ) of Norway, Dominican Republic" (S02) e a camada eez da Marine Regions no ponto do estudo: "Dominican (Republic) Exclusive Economic Zone", `pol_type: 200NM`, `sovereign2: null` (S16): zona sem reivindicação sobreposta, e "claimed by" saiu com razão. 57,3 km ÷ 1,609344 = 35,6 mi, "about 36 miles" (milha terrestre; seriam 30,9 milhas náuticas). "waters" é a zona econômica, como as "U.S. waters" da frase seguinte, que a fala define; nunca "territorial waters" (N32) |

## O F22: "about a decade earlier" se sustenta?

**Não nas duas datas; só na que nenhuma cópia local dá.** A conta, com o dia da sondagem do Blake (27/01/1883, relatório de 1883 e IHR 1936):

| data da sondagem do Challenger | de onde vem | intervalo até 27/01/1883 | distância de "a decade" |
|---|---|---|---|
| 26/03/1875 | as duas cópias que dão um ano a esta sondagem: o IHR 1936 ("On 26th March 1875") e o resumo da Endeavour 2020 ("Discovered by the HMS Challenger Expedition in 1875"); o IHR diz ainda, com todas as letras, "depth obtained eight years previously by the Challenger" (a Tabela 1 de Stewart & Jamieson 2019 não é uma terceira: o "HMS Challenger 1875" dela é a sondagem da Fossa das Marianas, O9) | 2.864 dias = **7,84 anos** (7 anos, 10 meses e 1 dia) | 27,5 % do exato |
| março de 1873 | a travessia "between St. Thomas, Virgin Islands and the Bermudas" que o mesmo IHR descreve; a data dessa travessia **não está em nenhuma cópia local** (o Narrative da expedição não foi lido: dossiê, F22) | 3.594 dias = **9,84 anos** (para 26/03/1873) | 1,6 % |

- A régua da casa para "about" é a do portão de fatos (regra [numeros]): o número dito fica a até 10 % do exato. Pela data das cópias, uma década fica a 27,5 % de 7,84 anos; pela de 1873, a 1,6 %. "About a decade" só vale para 1873. A nota do F22 diz que a forma "vale para os dois anos": pela régua da casa, não vale para 1875.
- O que as cópias sustentam com todas as letras é "eight years", que a N52 tira da voz porque o ano está em disputa. A forma de hoje troca uma afirmação que as cópias sustentam (e que a história provavelmente desmente) por uma que só a data de fora das cópias sustenta.
- **A troca exata (ENFRAQUECER), que vale para as duas datas:** "The trench itself had been found about a decade earlier, by the British research ship HMS Challenger, under Captain Nares, far to the east." → "The trench itself had been found **less than a decade earlier**, by the British research ship HMS Challenger, under Captain Nares, far to the east." 7,84 e 9,84 anos são, os dois, menos de uma década, e o "eight years previously" do IHR também. Pela régua do portão para "less than", o exato fica abaixo e o dito é o teto (10). Não põe ano, nem "eight years", nem número na voz: a regra [challenger-ano] do `gate.mjs` passa, e a N52 também. Na tela, continua sem o ano.
- **O outro caminho, se a Sala preferir o "about a decade":** abrir no navegador do app o *Narrative* da expedição (Thomson & Murray, Report of the Scientific Results of the Voyage of H.M.S. Challenger, Narrative, vol. I) ou outra fonte primária que date a sondagem de 3.875 braças a norte de St. Thomas, e gravar a cópia. Se ela der 26/03/1873, o "about a decade" passa a se confirmar, e a disputa do F22 se fecha (a N52 continua tirando o ano da voz). Até lá, é NÃO CONFERIDO.
- Se a Sala aplicar a troca, mudam com ela: a "como_dizer" do F22, o "fica" da C29, o porquê da N52 (que cita "about a decade earlier") e os pares do editor (o alfinete, a tela e o marcador do Challenger, que a r2b já tirou do ano).

## ACHADOS

- **A1 · LEVE · ENFRAQUECER** · §5, F041 · "The trench itself had been found about a decade earlier, by the British research ship HMS Challenger, under Captain Nares, far to the east." → **CONSERTO:** "The trench itself had been found less than a decade earlier, by the British research ship HMS Challenger, under Captain Nares, far to the east." · O porquê: "about a decade" fica a 27,5 % dos 7,84 anos das cópias (o IHR: "eight years previously"), fora da régua de 10 % do "about"; só a data de 1873, que nenhuma cópia dá, a sustenta. "less than a decade" vale para as duas. Periférico: não toca a tese (o ponto mais fundo, a distância, a profundidade). · RAIZ: INSTRUÇÃO (a nota do F22 e o `aplicado-r2b.md` §2 dizem que a forma "vale para os dois anos"; a régua do "about" não foi aplicada a "a decade", porque "decade" não é numeral para o portão e escapa da regra [numeros]).

Nenhum outro achado. As outras 6 frases trocadas não pedem CORTAR, ESTREITAR, ENFRAQUECER, ATRIBUIR, REORDENAR, DO-DOSSIE, DA-FONTE, REDIZER nem PEDIR.

## Observações (não são achados: ficam registradas para a Sala)

- **O1–O6**, da bancada anterior, continuam como estavam (a O6 na frase de §11 que não mudou: "That, the agency suggests, is why the trench is so deep.", agora logo depois do alcance certo dos blocos girados, que a deixa mais firme).
- **O7 · "limestone" (§11, F095a), nova.** O USGS diz "carbonate platform", não "limestone". A palavra se apoia no relatório do EX1502 (NOAA), que dá formações da sequência de plataforma de Porto Rico como calcários ("Ayamon and Los Puertos Limestones") e fala em "a wide variety of carbonate rocks"; o trecho é de um mergulho no rifte de Mona, não da plataforma inclinada ao norte, que é a mesma sequência (Oligoceno a Plioceno) que mergulha para o norte. Leve: "limestone" é a tradução para o ouvido que o dossiê já registrou (F44).
- **O8 · "The report" (§7, F070), nova.** O "report" é a palavra do resumo de 2020 ("The most striking part of the report from was an account…", com o "from" sem complemento, como está na fonte). A frase não diz quem escreveu nem que foi um relatório oficial; fica no alcance da N52.
- **O9 · a nota do F22 no dossiê (não a voz).** A nota diz que "Stewart & Jamieson (S02), com Jamieson como autor, repetem 1875". Na cópia (`01-04-stewart-jamieson-2019-earscirev.txt`, Tabela 1), o único "HMS Challenger 1875" é a linha da Fossa das Marianas: "11.400° N", "143.267° E", "8184", "Thomson and Murray (1895)", "HMS Challenger 1875" (as 4.475 braças do Pacífico); o artigo não dá data nem ano à sondagem de Porto Rico. Quem repete 1875 para Porto Rico, nas cópias, é só o resumo da Endeavour 2020. E a linha da tabela vai no sentido da disputa: põe o Challenger sondando as Marianas em 1875 (o ano, sem o mês). Não muda a voz nem o A1; é conserto da nota, para a Sala.

## As decisões da Sala, conferidas na voz

- **C29:** as quatro trocas que ela fixa estão no texto (F22 sem o ano e sem "eight years"; "in the Dominican Republic's waters"; "the fish the crew had reported", §27, que não mudou nesta lista e já estava assim; "a tilted layer of limestone"). A do F22, com o achado A1.
- **N52:** nenhum ano do Challenger (1873 ou 1875) na voz; nenhum "eight years"; nenhum "their account" nem "the crew's report". O `gate.mjs` passa nas regras [challenger-ano] e [relato-de-quem].
- **F22 em disputa:** a voz não diz o ano; o "about a decade" é o A1.
- **N51 e C28**, de antes: o "about 1,200 feet" de §19 é a régua do sonar da expedição, agora dita ("the expedition's sonar"), e o estudo de 2019 fica com o "more than 1,000" do gancho.

## As armadilhas de fato, nas 7 frases

- **Universal e superlativo:** "the trench's deepest part" é o "deepest sector" do USGS, não o ponto mais fundo; nenhum "first", "only", "never" ou "all" entrou.
- **Ano derivado:** "about a decade earlier" (A1); "the next year" (1965 − 1964 = 1, S06).
- **Composição:** "snailfish, a family of fish" junta o resumo de 2020 (Liparidae) e o manuscrito de 2021 ("the Liparidae family"): definição, sem fato novo. "limestone" (O7).
- **Período:** "eight older surveys" (1996–2015) contra o sonar de dezembro de 2018; "the report, published the next year" (1965), não 1964 (C29).
- **Réguas:** o sonar (8.378) e não o submersível (8.376), com a conta das duas; metros a pés com a conta à vista; milha terrestre (35,6) e não náutica (30,9); a zona econômica e não as águas territoriais; o setor mais fundo (oeste) e não a fossa inteira (o leste não tem blocos girados).
- **Conversões, com a conta:** +1.300 m ÷ 0,3048 = 4.265,1 ft ("more than 4,000"); 362 m ÷ 0,3048 = 1.187,7 ft ("about 1,200"); 57,3 km ÷ 1,609344 = 35,6 mi ("about 36"); 2.864 e 3.594 dias entre as datas do Challenger e a do Blake.
- **Mecanismo:** "indicate a sinking floor" é o "indicate trench subsidence" da fonte, com o verbo dela.

## A varredura "estado do mundo", nas 7 frases

- "rotated blocks of rock indicate a sinking floor": presente da interpretação do USGS, na página lida em 26/10/2026 (cópia `fb-usgs-seafloor-map.txt`). Confirmada.
- "in the Dominican Republic's waters": a zona econômica dominicana na camada da Marine Regions lida em 26/10/2026, sem reivindicação sobreposta. Confirmada; só muda com um tratado de limites novo.
- As outras 5 frases estão no passado.

## As frases sem afirmação checável (NADA A CHECAR, declarado)

As 9 da bancada anterior, nenhuma delas trocada: a pergunta e a assinatura do gancho, "A sound could give a number.", "It couldn't show anyone what was down there.", "Keep those fish in mind.", as três pontes de p2 para p3 e "Why is the trench so deep?".

## Não conferido

- A data de 26/03/1873 da sondagem do Challenger (o F22): fora das cópias locais. É o caminho para manter o "about a decade" (acima); a Sala abre no navegador do app, se quiser. Nada mais na voz depende de página que recusou leitura automática, de PDF sem cópia em texto ou de resumo.

## VOLÁTEIS na fala (reconferir na véspera da gravação)

Os mesmos da bancada anterior, em frases que não mudaram:
- "As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep." (a API do gazetteer, `totalItems: 0` em 26/10/2026): refazer o GET antes de gravar; se o mês da gravação mudar, o "October 2026" muda junto.
- "More than three million people live in Puerto Rico." (Censo 2020, 3.285.874; estimativa de 01/07/2025, 3.184.835): só muda se uma estimativa nova cair abaixo de três milhões.
- "Argentina, for one, disagrees." e "not every country uses it." (a M-3 de 2026): reconferir se sair edição nova da M-3.

## LISTA DE NOMES (anônimo → pessoa nomeável)

Sem mudança: nenhuma pessoa anônima que devesse ter nome. As 7 frases trocadas não trazem nome novo; "the report" (§7) fica sem autor, como a fonte o deixa (N52), e "the expedition" (§19) é a Five Deeps, nomeada em §16.

## DECISÃO DO LUCAS / DA SALA PENDENTE que tocou esta checagem

- A1: a troca do F22 ("less than a decade earlier") ou a leitura do *Narrative* para manter o "about a decade" (da Sala).
- A pergunta do ritmo, do ouvinte a frio (`aplicado-r2b.md` §6), não toca fato.

## PADRÕES

1. A hedge sem número escapa da régua: "a decade" não é numeral para o portão de fatos, e o "about" não foi medido contra o exato. Vale conferir "a decade", "a century", "a dozen" e afins à mão, com a mesma faixa de 10 %.
2. As trocas de REDIZER e ESTREITAR desta lista apertaram o alcance (o setor mais fundo, o sonar da expedição, a zona dominicana) e puseram a palavra da fonte ("report", "indicate"): o tipo de troca que sobe a exatidão sem fato novo.

## O portão de fatos

`node ferramentas/portao-fatos.mjs atlantico-fundo` (da raiz do canal), rodado sobre esta tabela e este laudo:

```
portão de fatos — atlantico-fundo: PASSA
  sha12 do texto falado: ffafacc2329b (igual ao do gate.mjs) · 29 parágrafos
  laudo: Revisão julgada ffafacc2329b · COBERTURA 288 de 289 · VEREDITO RESSALVA
  tabela: 288 confirmada(s) de 289
```

Saída 0 (exit 0). O VEREDITO do portão é PASSA: ele confere a estrutura (o sha, a cobertura, as frases inteiras, os trechos literais, as medições e os números), não a verdade; a linha "corrigir" (F041) é permitida com RESSALVA. Antes de rodá-lo, cada trecho foi procurado na cópia local com as funções do próprio portão, e cada frase no parágrafo dela: 0 faltas nas 289 linhas.

```
node roteiros/atlantico-fundo/_ferramentas/gate.mjs --derivados
veredito PASSA, exit 0, problemas []
derivados: qc-roteiro/fatos.laudo.md cita ffafacc2329b (ok); roteiro-editor.md cita ffafacc2329b (ok); pronuncia.md cita ffafacc2329b (ok)
```

Os laudos com sufixo de rodada (`-r1`, `-r2`, `-r2b`) ficam fora do `--derivados`, como o portão manda: julgaram o texto de antes.

## A tabela

`§` é o parágrafo falado (de 1 a 29, a numeração do portão); a frase inteira e o trecho literal de cada linha estão na `fatos-tabela.json`. As linhas que esta rodada refez ou acrescentou: F040–F044, F042a, F062, F063, F069, F070, F070a, F095, F095a, F096, F100, F100a, F100b, F182, F182a, F183, F195, F195a, F196–F198.

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
| F041 | 5 | 'about a decade earlier' (antes da sondagem do Blake, 27/01/1883) não se sustenta nas duas datas. Pelas cópias (26/03/1875; o IHR: 'eight years previously'): 2.864 dias = 7,84 anos, 27,5 % abaixo de uma década, fora da faixa de 10 % do 'about' da casa (portao-fatos, [numeros]). Pela travessia de St. Thomas às Bermudas que o mesmo IHR descreve (março de 1873, data que nenhuma cópia local dá): 3.594 dias = 9,84 anos, 1,6 %. A forma vale só para 1873. Conserto, ENFRAQUECER: 'less than a decade earlier', que vale para as duas (7,84 e 9,84 < 10) e para o 'eight years previously' do IHR. | corrigir | S12 | texto |
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

## Comparação com a rodada anterior (`fatos-r2b.laudo.md`, sobre `432dcb4041d4`)

A bancada final da rodada 2 deu PASS, nota 9.5, COBERTURA 282 de 282, sem achado. A r2b trocou 7 frases, todas fora dos achados de fatos (vieram das lentes de roteiro, clareza e locução). Seis subiram a exatidão; uma, a do Challenger, trocou o "eight years" que as cópias sustentam pelo "about a decade" que só a data de fora delas sustenta (A1). As 264 linhas das 153 frases que não mudaram vêm de lá como estavam (os trechos re-achados nas cópias pelo portão, um a um); as 18 linhas das frases trocadas foram refeitas, e 7 entraram (F042a, F070a, F095a, F100a, F100b, F182a, F195a).

| linha | antes (`432dcb4041d4`) | agora (`ffafacc2329b`) |
|---|---|---|
| F040–F043 | a frase com "eight years earlier"; a F042 com a data de 26/03/1875 na afirmação | a frase nova; a data saiu das afirmações (a fala não a diz), e entrou a F042a ("research ship") |
| F041 | "eight years previously" (IHR): **confirmada** | "about a decade earlier": **corrigir** (A1), com o mesmo trecho do IHR como prova do que as cópias dizem |
| F044 | medição (V09 e V11) | texto: o relatório de 1883, "seventy-one miles west of the Challenger's greatest depth" (a frase não tem mais número) |
| F062, F063 | "how deep." | "how deep it got." |
| F069, F070 | "Their account" | "The report", com o trecho em que a fonte diz "the report"; F070a para "a family of fish" |
| F095, F096 | "slab" | "layer"; F095a para "limestone" |
| F100 | "Under the trench … point to" | "Under the trench's deepest part … indicate", com o trecho do setor; F100a e F100b para o alcance |
| F182, F183 | "the sonar" | "the expedition's sonar"; F182a para a Five Deeps |
| F195–F198 | "in waters claimed by the Dominican Republic" | "in the Dominican Republic's waters"; F195a para "public data"; a F197 registra o `pol_type: 200NM` sem `sovereign2` |

A nota desce de 9.5 para 9.0, e o veredito, de PASS para RESSALVA, só pelo A1. Com a troca do A1 aplicada (ou o *Narrative* lido e gravado com 26/03/1873), a F041 se confirma, e a lente volta a PASS sem outra mudança.

VEREDITO: RESSALVA
