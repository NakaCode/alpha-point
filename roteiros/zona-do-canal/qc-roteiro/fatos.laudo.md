# Laudo · verificador de fatos (independente, da Sala de controle) · conferência da rodada 2, posta em dia na rodada 3 (o delta) · zona-do-canal

Revisão julgada: `58db12762030` · data-base 2026-10-14

COBERTURA: 218 de 218 linhas da tabela com veredito "confirmada" (afirmações checáveis em 122 das 139 frases do texto falado de `58db12762030`; as outras 17 frases não afirmam nada checável e estão listadas abaixo). CHECADO POR INTEIRO.

- **O que foi julgado:** o texto falado inteiro de `roteiros/zona-do-canal/roteiro-narrador.md`, sha256 `d98d50f9c55c95fb2e2522baf3b29564beaa8759a701e37357559d20e5193871`. `node roteiros/zona-do-canal/_ferramentas/gate.mjs`: exit 0, PASSA, 2.150 palavras (o teto), 28 parágrafos, 154 frases pelo portão, média 14, maior 32, gancho 166 palavras com o "But" na 49ª, 0 problemas, 22 alertas de palavra (os mesmos de `69bb7fb13954`), autoplágio vazio.
- **Como a lista foi derivada: à mão.** O canal não tem extrator de afirmações. Parti o texto falado em 140 frases (sem partir "U.S." nem "$158.46"; o portão conta 154 porque parte os dois) e li cada uma. Para as frases que não mudaram desde `4c93f1712cf2`, parti da tabela da rodada anterior; as mudanças, conferidas por `git diff --no-index --word-diff` entre `_trabalho/roteiro-r2.antes.md` e o texto de hoje, são exatamente as 15 de `_trabalho/aplicado-r2.md` (L01–L17) e o P01 de `_trabalho/pedidos-r2-feito.md` (o 25º parágrafo). Fora delas, o texto é idêntico. As frases mudadas e as vizinhas delas foram relidas contra a cópia da fonte, não contra o laudo anterior.
- **O denominador cresceu de 146 para 218 linhas** porque a tabela agora passa no portão de fatos do canal (`ferramentas/portao-fatos.mjs`), que exige, em cada frase com linha, todo número que ela diz (ano do documento, "two", "four", "third", "fifteen", "seventy-five", "1960s") dentro de um trecho confirmado daquela frase. Cada ano de relatório ganhou uma linha com o trecho que traz a data do próprio documento; cada número derivado ganhou uma linha de medição.
- **Contra o quê:** o dossiê (`pautas/zona-do-canal/fundamento.json` e `.md`, inclusive "O que não se diz", as decisões da Sala e as regras de pauta) como mapa, e a cópia local de cada fonte (`midia/zona-do-canal/fontes/`) como prova. Rede: não usei; tudo fechou nas cópias locais.
- **Três tipos de linha, declarados:**
  - **texto (187 linhas):** o trecho é literal da cópia `.txt` da fonte, como ela está, com o OCR ("Emits", "JanuarylO", "4th of July Avenue"), e o portão o acha na cópia.
  - **conferido na imagem (17 linhas):** os números do Census de 1950, 1960 e 1970, cujos PDFs são só imagem. Abri e li nesta tarefa cada imagem citada: a Table 28 de 1960 (`mecanismo/census1960-p57-33-table28.png`, p. 57-33: Balboa 3,139 / 1,580 / 1,041; Paraíso 3,113 / 7; Rainbow City 3,688 / 3), as Tables 7, 8, 12 e 1 de 1970 (`escala_humana/img/c1970-t7-top.png`, `c1970-t8-top.png`, `c1970-idx22-lo.png` p. 57-26, `c1970-p57-5-t12.png`) e a Table 19 de 1950 (`c1950-tab19-zoom.png`: Silver City, Cristobal, 5,726). O trecho dessas linhas é a minha transcrição da imagem; o `arquivo_local` é o dossiê (que transcreve as mesmas tabelas com reticências, por isso o trecho não está nele), e `conferido_na_imagem` diz o arquivo e a página. O portão as passa com aviso: quem conferiu a imagem responde por elas, e sou eu.
  - **medição (13 linhas):** `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt`, gravado nesta tarefa com `datetime` do Python, uma linha por conta ou contagem, cada uma com a fonte de cada termo: M01 os 15 dias (03→18/11/1903); M02 os 75 anos e 4 meses (04/05/1904→01/10/1979, 27.543 dias); M03 os 2 dias (07→09/01/1964); M04 os 4 dias (9 a 12/01/1964, contados inclusive); M05 as duas palavras do plano de 1914; M06 Balboa e mais 4 cidades (e La Boca e mais 4) nos clubes de 1920; M07 ARTICLE III = o terceiro artigo; M08 os relatórios de 1965 e 1968 = "the 1960s"; M09 o "$158. 46" do OCR = $158.46; M10 1.580/3.139 = 50,3 %; M11 23.559/44.198 = 53,3 %; M12 1.041 > 1.000; M13 30 meses de 01/10/1979 = 31/03/1982; M14 o "December 30,1963" do OCR = 30/12/1963.
  - Uma linha **L** (inferência, `F099L`): o que o ouvinte conclui de "The division was still there.", apoiada em F092 e F094–F096.
- **Uma linha do dossiê como cópia:** F008 ("from 1920 to 1970, no census … published how many of its residents were citizens") cita `esc.afi-01` no `fundamento.json`, a afirmação verificada do dossiê ("1940 e 1970 reabertos na verificação; 1920, 1930, 1950 e 1960 pela conferência de 09/10"), e F008b a Table 8 de 1970 na imagem ("Citizenship Status … of the Foreign Born"). Não reabri os censos de 1920, 1930, 1950 e 1960 para este universal: ele vale pela conferência do dossiê, declarada.
- **Citações aspadas:** as 49 de antes, menos nenhuma, mais as duas do P01 ("terminates and supersedes", conferida letra a letra no Art. I(1) da cópia UNTS; "in perpetuity", no Art. II de 1903). Nenhuma com reticências na voz. As de antes não mudaram de letra (as trocas da lista-r2 só mexeram fora das aspas, menos "U.S.-rate", que virou "U.S." rates, a forma do relatório de 1950: "paid at U.S. rates").
- **Aritmética refeita:** 1.580/3.139 = 50,3 % ("about half"); 23.559/44.198 = 53,3 % ("more than half"); 1.041 > 1.000; 03/11→18/11/1903 = 15 dias; 04/05/1904→01/10/1979 = 75 anos e 4 meses; 01/10/1979 + 30 meses = 31/03/1982; 3.988 → "almost four thousand"; 07→09/01/1964 = 2 dias; 9–12/01/1964 = 4 dias. Tudo fecha.

NOTA: 9.6/10 · todas as afirmações da revisão `d98d50f9c55c` têm fonte local conferida, os dois DIVERGE da rodada anterior saíram, a linha do presente ganhou data, e nada do que a lista-r2 e o P01 mudaram quebrou fato em volta. A nota não chega a 10 porque 17 linhas dependem da minha leitura de imagem e uma (F008) do universal conferido pelo dossiê.

## A rodada 3 (o delta): o que se conferiu sobre `58db12762030`

A Sala aplicou, com `ferramentas/aplicar-lista.mjs`, as três trocas de `_trabalho/lista-r3.json` (saída em `_trabalho/aplicado-r3.saida.txt`). `node roteiros/zona-do-canal/_ferramentas/gate.mjs`: PASSA, sha256 `58db12762030ccaf4d5c63ad4a6d81a5449d5dbf3a2daae1795fd7c5bcd50c36`, 2.129 palavras, 28 parágrafos, 153 frases pelo portão, média 14, maior 32, gancho 166 com o "But" na 49ª, 0 problemas, 20 alertas de palavra (saíram o `citizens` da frase antiga da F074, "they were citizens if a parent…", e o `citizenship` da L09; as duas deram lugar à frase da R3-02), autoplágio vazio. O `diff` entre `_trabalho/roteiro-r3.antes.md` e o roteiro de hoje mostra só as três frases (parágrafos 6, 12 e 16); o resto do texto é idêntico, e a checagem da rodada 2, abaixo, continua valendo para ele. As frases novas foram relidas contra a cópia local da fonte, não contra o laudo anterior:

| item | a frase de hoje | veredito | o que eu conferi |
|---|---|---|---|
| R3-03 (6º parágrafo, CORTAR "So") | "When Balboa was planned as a permanent town, the plan already had two words in it: "gold" and "silver."" | CONFIRMADA (F027, F027m) | os fatos não mudaram ("Planning of the permanent town of Balboa" e "the permanent gold site at Balboa" / "the permanent silver settlement", relatório de 1914). O corte tira a ponte causal que a frase não tinha: Balboa foi planejada a partir de 1913 e o relatório de 1914 (ano fiscal até 30/06/1914) é anterior à Convenção de 02/09/1914 da frase de antes. Sem o "So", nada sai da Convenção; o "already" fica preso ao próprio plano |
| R3-01 (12º parágrafo, REDIZER) | "The Zone's 1950 report says its employees on "U.S." rates had to be assigned family quarters before their families got permission to come at all." | CONFIRMADA (F051, F051b, F051c) | "employees on U.S. rates" é o grupo da seção "For U. S.-rate employees" (p. 43), sob a qual está "employees are required to have an assignment to family quarters before permission is granted for their families to come to the Canal Zone"; o mesmo relatório chama o grupo "Employees Paid at U.S. Rates" (Table 48). Nenhum número, data ou grupo novo; as aspas de "U.S." ficam, e o ano 1950 está em F051c |
| R3-02 (16º parágrafo, REDIZER, duas frases em uma) | "So for the thousand or so residents of Balboa born in the Zone, the answer came from their parents, not from where they were born." | CONFIRMADA (F074, F074m, F075) | "the thousand or so" = 1.041 nascidos na Zona, de 3.139, Balboa, 1960 (Table 28; medição M12). "the answer came from their parents": 8 U.S.C. § 1403(a), "whose father or mother or both at the time of the birth of such person was or is a citizen of the United States, is declared to be a citizen" (F074); o grupo (os nascidos na Zona) e o fato estão no mesmo trecho. "not from where they were born": o 8 FAM 302.4-2 a., a Zona "was never considered part of the United States or designated as an outlying possession for purposes of section 201" NA / INA 301, a regra do nascimento no território (F075, agora com a fonte do manual; a linha de antes, da frase L09, saiu com ela). Para quem nasceu na Zona, o lugar é o mesmo para todos, e o que decide é o pai ou a mãe: a frase é verdadeira dentro do grupo que ela nomeia. Antes de 1937 a regra geral (R.S. 1993) também ia pelos pais (F069, F070): o "came from their parents" não depende da data de nascimento. "the answer" é a resposta à pergunta de p3 ("in the eyes of American law"), retomada por "The answer is one sentence of law" no 14º parágrafo: a frase fala da lei americana, não da panamenha |

Em volta: o "So" novo de p4 resume, não repete nem contradiz a regra dita no 14º parágrafo ("didn't, by itself" ali; aqui, dentro do grupo dos nascidos na Zona, o que decide são os pais). "The sorting was done elsewhere: on the payroll." continua presa: "elsewhere" contrasta com pais e lugar de nascimento, a régua da lei de cidadania. Nenhuma armadilha nova: nenhum universal novo além do "not from where they were born", sustentado acima; nenhum ano derivado; nenhum presente. A tabela mudou só nas linhas dessas três frases (F027, F027m, F051, F051b, F051c, F074, F074m, F075: a frase nova; F051b, F074 e F075, a afirmação; F074 e F075, o trecho; F075, a fonte), e continua com 218 linhas, todas confirmadas. `node ferramentas/portao-fatos.mjs zona-do-canal`: exit 0.

## O que mudou, frase a frase, e o que a mudança tocou em volta

| item | o que mudou | veredito | o que eu conferi em volta |
|---|---|---|---|
| L12 (gancho) | vírgulas em "and, under a 1903 treaty, its police, courts and schools answered to Washington" | CONFIRMADA (F002, F002b–d) | nenhuma palavra mudou; o "and" sem "because" continua sem afirmar que o tratado criou as instituições (I05) |
| L13 (p1) | a frase de 1912 e de 1915 partida em duas | CONFIRMADA (F021, F021b–e) | a justaposição agora sugere que a declaração da lei de 1912 levou às demolições: é o que houve (a ordem de 05/12/1912 sob o Sec. 3 da lei, e o relatório de 1915 conta 3.988 casas "destroyed or removed"); não é ponte inventada |
| L08 (p2) | "…recruited largely from the United States, had been paid in gold." | CONFIRMADA (F030) | "the latter group being recruited largely from the United States" é o grupo pago em ouro: o sujeito está certo |
| L14 (p3) | "its employees paid at "U.S." rates … permission to come at all." (na r3, R3-01: "its employees on "U.S." rates") | CONFIRMADA (F051, F051b) | a regra está sob "For U. S.-rate employees" e diz "employees are required to have an assignment to family quarters before permission is granted for their families to come to the Canal Zone"; "at all" não acrescenta fato |
| L10 (p3) | "They wrote in the Panama Canal Review, …: everyone "lived in rented quarters"…" | CONFIRMADA (F053, F053b, F053c) | a edição é a de 01/10/1979 ("The October 1 edition will be the last time the Review will appear as an official"); os Knapp eram professores ("teachers in the Canal Zone schools") |
| L17 (p3) | sai "In 1940, nearly half of the Zone's residents lived in military areas." | — | "Many of the others inside the line were soldiers." perdeu o apoio de 1940 que vinha logo depois; reapoiei-a no próprio ano do parágrafo: em 1970, 8.494 homens e 75 mulheres de 16 anos ou mais nas Forças Armadas (Table 12, p. 57-26), sem as famílias, de 44.198 moradores (F057). A ressalva da Sala (T10) continua dita: "Many of the others … were soldiers", "the count took in the bases along with the towns" (8.484 dos 8.494 homens fardados no rural da Zona, F060b) e "says less than it seems". Nenhum número da Zona inteira vai à voz |
| L04, L05 (p4) | "Until 1937, …"; "…a condition the 1937 law dropped, back to 1904." | CONFIRMADA (F069, F069b, F070, F070b, F070c) | o FAM: "Until August 4, 1937, there was no special law…"; "this Act was retroactive to February 26, 1904"; a residência prévia dispensada para o nascido na Zona "between 1904 and October 1, 1979". "back to 1904" é a retroatividade, certa |
| L09 (p4) | "So the law that ran the ground left citizenship to the parents." (saiu na r3, R3-02; a F075 passou à frase nova) | CONFIRMADA (F075) | resume o 8 U.S.C. § 1403 ("whose father or mother or both at the time of the birth … was or is a citizen"); não troca "born in the United States" por "citizens" nem nomeia grupo |
| L11 (p5) | "In 1955, a new treaty promised the same base pay…" / "A 1958 law set it." | CONFIRMADA (F085, F085b–f) | o Memorando de 25/01/1955, anexo ao tratado: "Legislation will be sought…", princípio (a) "The basic wage … will be the same … without regard to whether he is a citizen of the United States or of the Republic of Panama"; a Public Law 85-550, "Approved July 25, 1958", manda cada órgão seguir esses princípios. O "promised" é a obrigação do item 1, como a própria lei a chama ("obligations set forth in item 1") |
| L15, L02 (p5) | "The store sorted its customers, too." / "…sold only to its employees and soldiers, their families, and certain residents." | CONFIRMADA (F086, F087, F087b, F087c) | o tratado de 1936 (em vigor em 27/07/1939), Art. III(1): venda às classes (a) e (b) e, "only when such persons actually reside in the Canal Zone", às classes (c), (d) e (e) e às famílias delas. O "only" agora fecha com o tratado |
| L07 (p5) | "A State Department memo says Panama had insisted on that, calling…" | CONFIRMADA (F089) | a atribuição passou para o começo; o memorando de Dulles: "at the insistence of the Government of Panama which argued that the privilege … constituted an unjust and unfair competition with the economy of Panama" |
| L16 (p5) | "The payroll had lost its old names." / "The division was still there." / "And the next fight was about a flag." | CONFIRMADA (F098, F099, F099L, F100) | 1948: "the terms "gold roll" and "silver roll" have been eliminated from the new salary and wage schedules"; a divisão nos anos 1960: "The Canal Zone school system is divided between the U.S. citizen schools and Latin American schools" (1968), e a Table 28 de 1960; a briga seguinte: o ICJ diz que a bandeira já fora "one of the main causes of the violent disturbances in Panama of November 1959", e o vídeo segue para 1960–1964. Sem "the line" na voz, nada de universal novo |
| L06 (p7) | o par dos 30 meses e da Commission vai para o fim do 26º parágrafo | CONFIRMADA (F122, F122b, F123, F123b) | os fatos não mudaram; ver a observação O1 |
| L01 (p7) | "Being born there, by itself, was never enough." | CONFIRMADA (F132, F132b) | o "never" agora é o do princípio, que o FAM sustenta de 1904 a 1979: a Zona "was never considered part of the United States" para a lei de nacionalidade, e o filho de pais estrangeiros ali nascido "do not thereby acquire American nationality". Não contradiz mais o 15º parágrafo |
| L03 (p7) | "The Panama Canal Authority, in 2026, gives its address as the Administration Building, in Balboa." | CONFIRMADA (F136, F136b) | a cópia de 14/10/2026 da página da ACP: "Administration Building. Balboa, Ancon. Republic of Panama." e "© 2026. Panama Canal Authority." A linha do presente tem data, fonte e nenhum adjetivo (decisão da Sala) |
| P01 (p7, 25º) | "It took effect on October 1, 1979." / "Its first article "terminates and supersedes" the 1903 treaty, which had granted the band "in perpetuity" to build, run and protect the canal." | CONFIRMADA (F120, F120b, F120c, F120d) | a UNTS: "Came into force on 1 October 1979"; o Art. I ("ABROGATION OF PRIOR TREATIES…"), parágrafo 1: "Upon its entry into force, this Treaty terminates and supersedes: (a) The Isthmian Canal Convention … signed at Washington, November 18, 1903". O sujeito do verbo, no documento, é "this Treaty", e a voz o põe no artigo, onde o verbo está: moldura fiel, aspas literais. O Art. II de 1903: "grants to the United States in perpetuity the use, occupation and control of a zone … for the construction, maintenance, operation, sanitation and protection of said Canal". Os tratados de 1936 e 1955, que o mesmo artigo revoga em (b), saíram da voz: nada ficou dito errado. "That day" continua sendo 01/10/1979 |

## As decisões da Sala (14/10/2026), conferidas na voz

- **Balboa (T06):** F001 e F024 ("the town below / at the foot of Balboa Heights, the hillside the … Zone was run from"); nunca "the seat of government". Os 3.139, 1.580 e 1.041 são da cidade (Table 28, coluna "Places of 2,500 or more", Balboa), não do distrito (30.623) nem de Balboa Heights. Conforme.
- **A Zona inteira (T10):** a voz não diz 23.559 nem 44.198; diz "More than half" (53,3 %) com a ressalva dos soldados e das bases no mesmo parágrafo, apoiada agora nos números de 1970 (a ressalva de 1940 saiu com a L17). Conforme.
- **1964 (T03):** F112–F113, literal à forma da Sala, com a atribuição à NARA e "Other counts differ" (a CIJ registra três soldados americanos mortos). Conforme.
- **McCain:** fora. Conforme.
- **O presente (2025–26):** uma linha, F136, com "in 2026", a fonte na voz e sem adjetivo. Conforme (a DECISÃO DA SALA pendente da rodada anterior foi resolvida pela L03).

## O "O que não se diz", conferido

Nenhuma ocorrência na voz de: "as if it were the sovereign"; "76 years"; total do censo como "Americans"; "citizens" no lugar de "born in the United States" (os 22 alertas de `citizen*` do portão são todos lei, tratado, escolas ou cidadania como tal; o "citizenship" da L09 falava da lei e saiu na r3; hoje são 20 alertas); "born in the Zone, so American"; "seat of government"; "next door" em 1960 (Paraíso "up the canal", Rainbow City "on the Atlantic side"); "U.S. territory", "annexed", "owned"; "the riots forced"; quem atirou; "only Americans could live there" (F048 diz o contrário). "Segregation" só na citação atribuída ao governador; "white" e "colored" só como palavras do relatório de 1920.

## As armadilhas de fato, uma a uma

- **Universais:** "Nobody lived in the Zone just because they wanted to" (o Art. II(2) de 1936, a partir de 1939); "only if the family lived inside" (1940); "only indoors" (CIJ §19); "sold only to … and certain residents" (o Art. III(1), agora fechado); "only those who worked or served there, and their families" (as classes de 1936 são todas de serviço, família ou criados); "the last American census" (a série do Census acaba em 1970); "every acre" ("all land and land under water"); "something the treaty never did" (o tratado de 1903 não trata de nacionalidade); "was never enough" (o princípio, 1904–1979); "no census … from 1920 to 1970" (o dossiê, `esc.afi-01`, declarado acima). Nenhum passa da fonte.
- **Ano derivado:** "fifteen days", "seventy-five years", "thirty months" (o próprio Art. XI: "thirty calendar months"), "Two days later", "Four days", "after those four days": todos no `fatos-medidas.txt`, todos fecham.
- **Grupo e divisão por grupo:** "silver roll" como força antilhana (1920: "labor force of West Indians (known as silver roll force)"; 1930); "gold roll" com poucas exceções cidadãos (1940); mais de 60 % dos "silver" fora (1930); os "silver" queriam o fim da segregação (atribuído ao governador); os não cidadãos que moravam no Panamá perderam o comissário (Dulles, 1956); os "certain residents" (as classes (c)–(e) residentes, mesmo trecho). Cada grupo e o fato estão no mesmo trecho.
- **Composição e justaposição:** F002 (censo de 1960 e tratado de 1903, ligados por "and", sem nexo causal, como antes); a frase de 1912 partida (o elo é documental); F120b (dois artigos de dois tratados, ligados pelo próprio Art. I(1)(a), que nomeia a Convenção de 18/11/1903); "The division was still there" (a linha L). Nenhuma conclusão sem fonte.
- **Período:** 1936 × 1939; 1977 × 1979 (assinatura, Senado em 1978, vigência); 1979 × 1999; 1903 × 1904 (o 26/02/1904 é a vigência; o 04/05/1904 é a posse); 1912 × 1914; 1948 × 1950 × 1955/1958; 1937 × 1904. Certos.
- **Mecanismo:** a regra geral de antes de 1937 e a dispensa retroativa (FAM, nas duas pontas); a lei de 1958 como implementação do item 1. Confirmados.
- **Ponte inventada numa reordenação:** as quatro reordenações (L07, L11, L13, P01) não acrescentam nexo; ver O1 para a L06.
- **Citação cortada com reticências:** nenhuma.
- **Fonte não aberta:** nenhuma; o universal de 1920–1970 vale pela conferência do dossiê, declarada.

## A varredura "estado do mundo"

- F136 "The Panama Canal Authority, in 2026, gives its address…": **confirmada e datada** (cópia de 14/10/2026). Volátil: reconferir na véspera.
- F137 "The town stayed where it was, below the hillside.": confirmada (Balboa é setor do corregimiento de Ancón, MINSA; o endereço da ACP). Volátil baixo.
- F069–F072 "the State Department's manual says / adds / it says": presente sobre documento vivo, confirmado na versão lida (8 FAM 302.4, CT:CITZ-135, 01-09-2026).
- F116 "The 1977 treaty opens…" e F120b "Its first article "terminates and supersedes"…": presente de documento, não estado do mundo.
- "still covered" (F122) e "was still there" (F099): passado histórico. Nenhum "today", "now is", "remains" ou "continues" sobre o presente.

## ACHADOS

**Nenhum achado.** CHECADO E LIMPO: toda afirmação checável da revisão `d98d50f9c55c`, e, na rodada 3, as três frases que mudaram para `58db12762030`, tem veredito "confirmada" com trecho da cópia local, leitura de imagem declarada ou conta gravada. Nenhum DIVERGE, nenhuma REFUTADA, nenhum NÃO ACHEI.

Observações sem achado (não são defeito de fato; ficam para quem julga clareza e escuta):

- **O1 · o "more" dos 30 meses (26º parágrafo, L06).** "For thirty months more, American police and courts still covered…" agora vem depois da frase de agosto de 1979 (Vance), e não logo depois de "ceased to exist". O fato não muda (Art. XI, de 01/10/1979 a 31/03/1982), e "still" e "more" continuam presos ao fim da Zona, duas frases antes; um ouvinte distraído pode contar os 30 meses a partir de agosto. Não abro achado: a frase é verdadeira e o parágrafo começa por "ceased to exist".
- **O2 · "its employees" dos comissários (19º parágrafo).** A classe (a) do tratado é "in the service or employ of the United States of America, the Panama Canal or the Panama Railroad Company": inclui empregados de outros órgãos americanos na Zona, que "its employees" (da Zona) estreita um pouco. Os soldados, as famílias e os "certain residents" estão certos. Não abro achado: é simplificação de escopo sem número, data ou grupo novo, e o governo da Zona era o governo americano ali.
- **O3 · o "promised" de 1955 (18º parágrafo).** O Memorando prometeu buscar a lei ("Legislation will be sought") para o princípio do salário-base único, e a lei de 1958 o fixou; a voz comprime isso em "promised the same base pay" / "A 1958 law set it.", o que a própria lei chama de "obligations". Fiel; fica registrado porque a frase foi partida nesta rodada.

## As 17 frases sem afirmação checável (NADA A CHECAR, declarado)

"So what made Balboa American, if being born there didn't?" (2º e 27º parágrafos, a pergunta do ângulo); a assinatura; "From now on, that is the line."; "The division ran through the map." (resume F035); "The next rule decided who could live inside the line at all."; "The house came from the canal." (resume F051); "The job came first." "Then the house." "Then the family." (resumem F051); "So the number for the whole Zone says less than it seems." (resume F057–F060); "Now go back to Balboa."; "So what was a child born in Balboa, in the eyes of American law?"; "The sorting was done elsewhere: on the payroll." (resume F041 e F075); "Then there were the schools."; "The question of who belonged had moved from the payroll to the flagpole."; "The treaties said the rest in their own words.".

## LISTA DE NOMES (anônimo → pessoa nomeável)

- "the U.S. National Archives" (F112) → Patrice Brown, Senior Archivist, National Declassification Center (NARA), "100 Years of the Panama Canal: The Age of Transition, 1964-73", NDC Blog, 03/11/2014 (`evento/nara-declass-blog-2014-11-03.txt`). O nome não vai à voz.
- "An international commission of jurists" (F108) → International Commission of Jurists (Genebra), comitê de A. D. Belinfante, Gustaf Petren e Navroz Vakil, "Report on the Events in Panama, January 9–12, 1964" (`experiencia/icj-1964-panama.txt`).
- "the State Department's manual" (F069–F072) → 8 FAM 302.4, Bureau of Consular Affairs, U.S. Department of State, CT:CITZ-135 de 01/09/2026 (`documento/fam-8-302-4.txt`).
- "A State Department memo" (F089) → John Foster Dulles, Secretário de Estado, memorando ao Presidente, 28/09/1956, FRUS 1955–1957, vol. VII, doc. 161 (`mecanismo/frus1955-57v07-d161.txt`).
- "The Zone's governor" (F079–F081) → Gen. J. C. Mehaffey, carta ao embaixador Frank T. Hines, 18/09/1946, FRUS 1946, vol. XI, doc. 931.
- "the Secretary of State" (F126) → Cyrus Vance, memorando ao Vice-Presidente Mondale, 14/08/1979, FRUS 1977–1980, vol. XXIX, doc. 239.
- "the Zone's governor" (F104) → em 1963, Robert J. Fleming Jr. (CIJ §24).
- "The Zone's own 1940 report" → Annual Report of the Governor of the Panama Canal, FY 1940, gov. Glen E. Edgerton.
- "Mary and Herbert Knapp" (F052) já nomeados na voz ("Looking Backward", The Panama Canal Review, 01/10/1979).

## VOLÁTEIS na fala (reconferir na véspera da gravação)

- F136 o endereço da ACP: cresce se a ACP mudar de sede ou de rodapé; zera se a página continuar dizendo "Administration Building. Balboa, Ancon." A frase já diz "in 2026": se o vídeo sair em 2027, o ano fica certo (a leitura foi em 2026), mas vale reler.
- F069–F072 a letra do 8 FAM 302.4 (versão de 01/09/2026): reconferir a citação "was never considered part of the United States" antes da gravação.
- F137 Balboa como lugar: estável.

## DECISÃO DO LUCAS / DA SALA PENDENTE que tocou esta checagem

- Nenhuma nova. A linha do presente, que era a pendência da rodada anterior, foi datada pela L03.
- O `fatos-medidas.txt` (as contas que a tabela cita como medição) foi gravado ao lado da tabela, em `roteiros/zona-do-canal/qc-roteiro/`, para o portão achar o arquivo num clone; se a Sala preferir que as contas morem fora do git, a tabela muda de `arquivo_local` e o portão roda de novo.

## PADRÕES

1. **As trocas desta rodada consertaram o universal inteiro**, não metade: a L02 fechou o "only" com o tratado, e a L01 trocou o "never changed" pelo "never enough" do princípio. O padrão da rodada anterior (o universal que sobra de uma troca) não se repetiu.
2. **O corte de uma frase de apoio deixa a vizinha sem prova.** A L17 tirou o dado de 1940 que sustentava "Many of the others … were soldiers"; a frase continua certa, mas só porque o Census de 1970 tem a contagem de fardados. Corte que tira número pede a releitura da frase de antes.

## A tabela (uma linha por afirmação)

A tabela completa, com a frase inteira e o trecho literal de cada linha, está em `roteiros/zona-do-canal/qc-roteiro/fatos-tabela.json` (218 linhas). Abaixo, a forma curta. `fontes/` = `midia/zona-do-canal/fontes/`.

| id | § | afirmação | veredito | fonte | cópia local |
|---|---|---|---|---|---|
| F001 | 1 | Balboa Heights, de onde a Zona era governada, é a encosta (sudoeste do morro de Ancón); Balboa é a cidade abaixo dela | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F002 | 1 | Balboa (cidade), 1960: 3.139 moradores, 1.580 nascidos nos EUA | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png`, p. 57-33 (Table 28, 1960) |
| F002m | 1 | a conta: 1.580/3.139 = 50,3 % ("about half") | CONFIRMADA · medição | esc-12 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F002b | 1 | sob o tratado de 1903, polícia, tribunais e escolas respondiam a Washington (o governo da Zona sob o governador, supervisionado pelo Secretário da Guerra) | CONFIRMADA | doc-04 | `fontes/documento/app-eo-1885.txt` |
| F002c | 1 | o tratado é de 1903 (18/11/1903) | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F002d | 1 | os tribunais: o tribunal distrital da lei de 1912, com jurados cidadãos dos EUA | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F003 | 1 | a Zona durou até 1º/10/1979 (o tratado de 1977 entrou em vigor nessa data) | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F004 | 1 | nascer em Balboa (na Zona) não fazia ninguém americano por si só: a lei exige pai ou mãe cidadão no nascimento | CONFIRMADA | doc-08 | `fontes/documento/govinfo-uscode-8-1403.txt` |
| F005 | 2 | a Zona era uma faixa de 10 milhas de largura, do Caribe ao Pacífico, atravessando o Panamá | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F005b | 2 | a faixa tinha 10 milhas de largura (Art. II) | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F006 | 2 | Paraíso, 1960: 7 nascidos nos EUA em 3.113 | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png`, p. 57-33 (Table 28, 1960) |
| F007 | 2 | Rainbow City, 1960: 3 nascidos nos EUA em 3.688 | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png`, p. 57-33 (Table 28, 1960) |
| F008 | 2 | de 1920 a 1970 nenhum censo dos EUA da Zona publicou total de cidadãos: a cidadania só foi tabulada para os nascidos fora (o dossiê, esc.afi-01, conferido nos censos de 1920 a 1970) | CONFIRMADA | esc.afi-01 | `pautas/zona-do-canal/fundamento.json` |
| F008b | 2 | em 1970 a cidadania só aparece na tabela dos nascidos fora (Table 8) | CONFIRMADA · lido na imagem | esc-13 | `fontes/escala_humana/img/c1970-t8-top.png`, p. Table 8, 1970 |
| F009 | 2 | o censo contava o lugar de nascimento (Country of birth, 1960) | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png`, p. 57-33 (Table 28, 1960) |
| F012 | 3 | o tratado foi escrito em Washington, 15 dias depois de o Panamá se separar da Colômbia (03/11 -> 18/11/1903) | CONFIRMADA | doc-18 | `fontes/documento/hsg-milestone-1899-1913-panama-canal.txt` |
| F012b | 3 | o tratado foi feito em Washington, em 18/11/1903 | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F012m | 3 | a conta: 03/11 -> 18/11/1903 = 15 dias | CONFIRMADA · medição | doc-18 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F013 | 3 | John Hay assinou pelos EUA; Philippe Bunau-Varilla assinou pelo Panamá, como seu plenipotenciário | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F013b | 3 | assinado em Washington em 18/11/1903 | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F013c | 3 | John Hay, Secretário de Estado, plenipotenciário dos EUA | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F014 | 3 | Art. II: "in perpetuity", faixa de 10 milhas, 5 de cada lado do eixo do canal a construir, para construir, operar e proteger | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F014b | 3 | dez milhas de largura, cinco de cada lado do eixo | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F015 | 3 | Panama City e Colón ficavam dentro dos limites e o mesmo artigo as excluiu da concessão | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F016 | 4 | Art. III, citação literal: "all the rights, power and authority" ... "would possess and exercise if it were the sovereign of the territory" | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F016b | 4 | Art. III, segunda parte da citação, letra a letra | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F016m | 4 | a contagem: ARTICLE III = o terceiro artigo | CONFIRMADA · medição | mec-01 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F017 | 4 | sobre a faixa, a lei americana montou um governo (a lei de 1912 "for the ... government of the Canal Zone") | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F018 | 4 | a lei de 1912 deu o nome "Canal Zone" | CONFIRMADA | mec-08 | `fontes/annualreportofis1912isth.txt` |
| F018b | 4 | a lei de 1912 deu um governador nomeado pelo presidente | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F018c | 4 | a lei é de 24/08/1912 | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F019 | 4 | a lei de 1912 criou um tribunal distrital (federal) com jurados "from among the citizens of the United States" (citação literal) | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F020 | 4 | a ordem executiva de 1914 (EO 1885) pôs polícia, escolas e correio sob o governo da Zona | CONFIRMADA | doc-04 | `fontes/documento/app-eo-1885.txt` |
| F020b | 4 | a ordem executiva é de 1914 (27/01/1914, em vigor em 01/04/1914) | CONFIRMADA | doc-04 | `fontes/documento/app-eo-1885.txt` |
| F021 | 5 | a lei de 1912 autorizou o presidente a declarar necessária ao canal toda a terra da Zona | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F021d | 5 | a lei é de 1912 | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F021b | 5 | até junho de 1915, 3.988 casas particulares destruídas ou removidas ("almost four thousand") | CONFIRMADA | doc-06 | `fontes/documento/annualreportofgo1915cana.txt` |
| F021c | 5 | as casas do despovoamento eram "privately owned" | CONFIRMADA | doc-06 | `fontes/documento/annualreportofgo1915cana.txt` |
| F021e | 5 | o ano do documento: a conta das casas (até 30/06/1915) é o relatório do ano fiscal de 1915 | CONFIRMADA | doc-06 | `fontes/documento/annualreportofgo1915cana.txt` |
| F022 | 5 | o relatório de 1914 chama o terreno de Balboa de "the permanent gold site at Balboa" (citação literal) | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F022b | 5 | e La Boca de "the permanent silver settlement" (citação literal) | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F022c | 5 | o ano do documento: o relatório que dá os nomes é o relatório do ano fiscal de 1914 | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F023 | 5 | em 1914 a administração mudou para o prédio novo em Balboa Heights | CONFIRMADA | doc-06 | `fontes/documento/annualreportofgo1915cana.txt` |
| F024 | 5 | Balboa é a cidade ao pé de Balboa Heights, a encosta de onde a Zona era governada (forma da Sala, T06/I03) | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F025 | 6 | convenção de setembro de 1914 fixou "the permanent boundary line between the City of Panama and the Canal Zone", marco a marco (citação literal) | CONFIRMADA | mec-02 | `fontes/mecanismo/frus1915-d1732.txt` |
| F025b | 6 | a convenção é de 02/09/1914 | CONFIRMADA | mec-02 | `fontes/mecanismo/frus1915-d1732.txt` |
| F027 | 6 | Balboa foi planejada como cidade permanente, e o plano já tinha "gold" e "silver" | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F027m | 6 | a contagem: as duas palavras do plano de 1914, gold e silver | CONFIRMADA · medição | evt-13 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F028 | 7 | as duas palavras eram folhas de pagamento (gold roll / silver roll) | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F028b | 7 | as duas palavras designavam as duas classes de empregados, em folhas separadas | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F029 | 7 | o governo da Zona as chamava "gold roll" e "silver roll" | CONFIRMADA | mec-19 | `fontes/mecanismo/frus1948v09-d490.txt` |
| F030 | 7 | o relatório de 1940 explica os nomes: na obra, peões pagos em moeda de prata; artesãos qualificados, recrutados sobretudo nos EUA, em ouro | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F030b | 7 | o ano do documento: o relatório que explica os nomes é o relatório do ano fiscal de 1940 | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F031 | 7 | em 1940 todos recebiam em dólar, e os nomes ficaram na moradia, no comissário e nos clubes | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F032 | 8 | 1920: o "silver roll" descrito como a força antilhana | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F032b | 8 | 1930: idem ("a huge percentage of the silver employees are West Indian") | CONFIRMADA | mec-10 | `fontes/annualreportofgo1930cana.txt` |
| F032c | 8 | o ano do documento: o relatório de 1920 é o relatório do ano fiscal de 1920 | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F032d | 8 | o ano do documento: o relatório de 1930 é o relatório do ano fiscal de 1930 | CONFIRMADA | mec-10 | `fontes/annualreportofgo1930cana.txt` |
| F033 | 8 | 1940: o "gold roll" era "with a few exceptions, citizens of the United States" e o "silver roll" tinha "a considerable number" de panamenhos (citações literais) | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F033b | 8 | 1940: "a considerable number" de panamenhos no silver (citação literal) | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F033c | 8 | o ano do documento: o relatório de 1940 é o relatório do ano fiscal de 1940 | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F035 | 9 | 1920: clubes "gold" em Balboa e mais quatro cidades; "silver" em La Boca e mais quatro; Gatún e Cristóbal com os dois (F036) | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F035b | 9 | o ano do documento: o relatório dos clubes é o relatório do ano fiscal de 1920 | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F035m | 9 | a contagem: Balboa e mais 4 cidades (gold); La Boca e mais 4 (silver) | CONFIRMADA · medição | mec-09 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F036 | 9 | Gatún e Cristóbal tinham clube gold e silver (1920) | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F037 | 9 | 1920: escolas "white" e "colored"; salário médio mensal do professor US$ 158,46 e US$ 76,00 (a tabela, p. 247; os valores na mesma tabela: "$158. 46" e "$76. 00") | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F037b | 9 | os dois valores da tabela de 1920, na ordem das linhas White e Colored | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F037m | 9 | a leitura do OCR: $158.46 e $76.00 | CONFIRMADA · medição | mec-09 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F038 | 10 | 1930: mais de 60 % dos empregados "silver" moravam fora, em Panamá e Colón | CONFIRMADA | mec-10 | `fontes/annualreportofgo1930cana.txt` |
| F038b | 10 | o ano do documento: o relatório dos 60 % é o relatório do ano fiscal de 1930 | CONFIRMADA | mec-10 | `fontes/annualreportofgo1930cana.txt` |
| F039 | 10 | em 1940, as escolas gratuitas recebiam os filhos dos "silver" só se o empregado morasse na Zona | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F039b | 10 | o ano do documento: o relatório das escolas gratuitas é o relatório do ano fiscal de 1940 | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F040 | 10 | Balboa, o "gold site", e La Boca, o "silver settlement", lado a lado na entrada do Pacífico (sítio de 1914) | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F041 | 10 | a Zona separava os trabalhadores por folha (duas classes em folhas separadas) | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F043 | 11 | tratado assinado em 1936, em vigor desde 1939 | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F043b | 11 | em vigor em 27/07/1939 | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F044 | 11 | a partir daí, uma lista fechada de quem podia morar na Zona | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F045 | 11 | empregados do governo dos EUA, do canal ou da ferrovia, com as famílias | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F046 | 11 | membros das Forças Armadas dos EUA, com as famílias | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F047 | 11 | empreiteiros, empresas autorizadas, trabalho religioso, de caridade, educacional e científico, e os empregados domésticos de todos | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F047b | 11 | as classes (c) a (e) do tratado de 1936 | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F048 | 11 | o critério era serviço, não cidadania (nenhuma classe do tratado fala de nacionalidade) | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F049 | 11 | ninguém morava na Zona só porque queria (a partir de 1939) | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F051 | 12 | relatório de 1950, sob "For U.S.-rate employees": a família só tinha permissão de vir com a casa de família designada | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F051b | 12 | a regra está sob "For U.S.-rate employees" no relatório de 1950 ("employees on U.S. rates" é o mesmo grupo: os U.S.-rate employees, que o mesmo relatório chama "Employees Paid at U.S. Rates") | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F051c | 12 | o ano do documento: o relatório da regra da casa é o relatório do ano fiscal de 1950 | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F052 | 12 | Mary e Herbert Knapp eram professores nas escolas da Zona | CONFIRMADA | exp-10 | `fontes/experiencia/panamacanalrevie1979pana.txt` |
| F053 | 12 | na Review de 01/10/1979, escreveram que todos "lived in rented quarters" e compravam no "commy" (citações literais) | CONFIRMADA | exp-10 | `fontes/experiencia/panamacanalrevie1979pana.txt` |
| F053b | 12 | o "commy" (citação literal) | CONFIRMADA | exp-10 | `fontes/experiencia/panamacanalrevie1979pana.txt` |
| F053c | 12 | a edição é a de 01/10/1979, o dia da implementação dos tratados, a última como publicação oficial | CONFIRMADA | exp-10 | `fontes/experiencia/panamacanalrevie1979pana.txt` |
| F057 | 13 | muitos dos outros moradores eram militares: em 1970, 8.494 homens e 75 mulheres de 16 anos ou mais nas Forças Armadas (8.569, sem as famílias), de 44.198 moradores | CONFIRMADA · lido na imagem | esc-13 | `fontes/escala_humana/img/c1970-idx22-lo.png`, p. 57-26 (Table 12, 1970) |
| F059 | 13 | o censo de 1970 contou o lugar de nascimento (Table 7, Place of birth) | CONFIRMADA · lido na imagem | esc-13 | `fontes/escala_humana/img/c1970-t7-top.png`, p. 57-16 (Table 7, 1970) |
| F059b | 13 | a cidadania só dos nascidos fora (Table 8) | CONFIRMADA · lido na imagem | esc-13 | `fontes/escala_humana/img/c1970-t8-top.png`, p. Table 8, 1970 |
| F059c | 13 | o último censo: a série do Census acaba em 1970 (a Zona deixou de existir em 1979) | CONFIRMADA · lido na imagem | esc-13 | `fontes/escala_humana/img/c1970-p57-5-t12.png`, p. Table 1 e Table 2, 1970 |
| F060 | 13 | 1970: 23.559 nascidos nos EUA em 44.198 moradores (53,3 %) | CONFIRMADA · lido na imagem | esc-13 | `fontes/escala_humana/img/c1970-t7-top.png`, p. 57-16 (Table 7, 1970) |
| F060b | 13 | a conta inclui as bases: dos 8.494 homens nas Forças Armadas, 8.484 no rural da Zona (fora de Balboa, o único lugar urbano) | CONFIRMADA · lido na imagem | esc-13 | `fontes/escala_humana/img/c1970-idx22-lo.png`, p. 57-26 (Table 12, 1970) |
| F063 | 13 | Balboa 1960: 1.041 dos 3.139 nascidos na própria Zona | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png`, p. 57-33 (Table 28, 1960) |
| F065 | 14 | a resposta é uma frase de lei escrita em 1937 (seção 1 da lei de 04/08/1937) | CONFIRMADA | doc-07 | `fontes/documento/stat-50-558.txt` |
| F066 | 14 | nascer na Zona não fazia, por si só, ninguém cidadão (o 8 FAM: filhos de pais estrangeiros nascidos na Zona não adquirem a nacionalidade) | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F067 | 14 | pela lei, cidadão se pai ou mãe fosse cidadão no momento do nascimento | CONFIRMADA | doc-08 | `fontes/documento/govinfo-uscode-8-1403.txt` |
| F068 | 14 | o Congresso a promulgou em 04/08/1937, retroativa a 26/02/1904, dia em que o tratado de 1903 entrou em vigor | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F068b | 14 | retroativa a 26/02/1904 | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F068c | 14 | o tratado de 1903 entrou em vigor em 26/02/1904 | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F068d | 14 | o tratado de 1903 entrou em vigor em 26/02/1904 | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F069 | 15 | até então, diz o manual, o nascido na Zona caía na regra geral dos nascimentos no exterior (Section 1993 RS) | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F069b | 15 | até 1937 não havia lei especial para o nascido no Panamá e na Zona | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F070 | 15 | a regra geral exigia que o pai/mãe cidadão tivesse morado nos EUA antes | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F070b | 15 | a lei de 1937 dispensou essa condição, de 1904 em diante | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F070c | 15 | a lei de 1937 vale para o nascido na Zona de 1904 em diante, sem a residência prévia | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F071 | 15 | o tratado de 1903 nunca disse que a Zona não era parte dos EUA para a nacionalidade (lido o texto inteiro: ele não trata de nacionalidade; só dá os poderes do Art. III) | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F072 | 15 | o manual diz que, para a lei de nacionalidade, a Zona "was never considered part of the United States" (citação literal; o qualificador "for purposes of section 201 NA or INA 301" vira "for citizenship law") | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F073 | 15 | o mesmo país tinha na Zona todo poder que teria "if it were the sovereign" (Art. III) | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F074 | 16 | para os nascidos na Zona (os ~1.041 moradores de Balboa), a cidadania americana vinha dos pais: cidadão se o pai ou a mãe o fosse no nascimento (8 U.S.C. 1403(a), a lei de 1937) | CONFIRMADA | doc-08 | `fontes/documento/govinfo-uscode-8-1403.txt` |
| F074m | 16 | a conta: 1.041 nascidos na Zona, "the thousand or so" | CONFIRMADA · medição | esc-12 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F075 | 16 | não do lugar de nascimento: para a regra do nascimento em território americano (seção 201 NA, INA 301), a Zona nunca foi considerada parte dos EUA; nascer nela, por si, não dava a cidadania | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F077 | 16 | em 1946, Washington perguntou sobre a divisão (a instrução de 21/02/1946) | CONFIRMADA | mec-17 | `fontes/mecanismo/frus1946v11-d927.txt` |
| F078 | 17 | em fevereiro de 1946 o Departamento de Estado mandou à embaixada no Panamá uma instrução "concerning racial discrimination in the Canal Zone" (citação literal) | CONFIRMADA | mec-17 | `fontes/mecanismo/frus1946v11-d927.txt` |
| F079 | 17 | o governador da Zona (Mehaffey) respondeu ao embaixador (Hines) | CONFIRMADA | mec-18 | `fontes/mecanismo/frus1946v11-d931.txt` |
| F080 | 17 | segundo ele, os "silver" queriam "the complete abolition of any segregation in the Canal Zone" (citação literal) | CONFIRMADA | mec-18 | `fontes/mecanismo/frus1946v11-d931.txt` |
| F081 | 17 | conceder isso logo, acrescentou, destruiria as organizações do canal e da ferrovia | CONFIRMADA | mec-18 | `fontes/mecanismo/frus1946v11-d931.txt` |
| F082 | 17 | o relatório de 1940 chamara a divisão "a matter of long custom in tropical countries" (citação literal) | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F082b | 17 | o ano do documento: o relatório do "long custom" é o relatório do ano fiscal de 1940 | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F083 | 18 | os nomes saíram das tabelas de salário em novembro de 1948 (anúncio de 20/11) | CONFIRMADA | mec-19 | `fontes/mecanismo/frus1948v09-d490.txt` |
| F083b | 18 | e das placas em locais públicos até dezembro (memorando de 08/12/1948: "recently removed") | CONFIRMADA | mec-19 | `fontes/mecanismo/frus1948v09-d490.txt` |
| F084 | 18 | em 1950, os relatórios dividem o salário em "U.S." rates e "local" rates | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F084b | 18 | idem, "U.S. rates" | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F084c | 18 | o ano do documento: o relatório dos "U.S." e "local" rates é o relatório do ano fiscal de 1950 | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F085 | 18 | o tratado de 1955 prometeu (Memorandum, item 1: "Legislation will be sought") e a lei de 1958 fixou o mesmo salário-base para o mesmo cargo, fosse o empregado cidadão dos EUA ou do Panamá | CONFIRMADA | mec-05 | `fontes/mecanismo/statute-72-pg405.txt` |
| F085b | 18 | a promessa de 1955 era buscar legislação (o item 1 do Memorandum) | CONFIRMADA | mec-05 | `fontes/mecanismo/statute-72-pg405.txt` |
| F085c | 18 | o tratado (e o Memorando anexo) é de 25/01/1955 | CONFIRMADA | mec-05 | `fontes/mecanismo/statute-72-pg405.txt` |
| F085d | 18 | a lei de 25/07/1958 implementa o item 1 do Memorando | CONFIRMADA | mec-05 | `fontes/mecanismo/statute-72-pg405.txt` |
| F085e | 18 | a lei é de 25/07/1958 | CONFIRMADA | mec-05 | `fontes/mecanismo/statute-72-pg405.txt` |
| F085f | 18 | a lei manda cada órgão conduzir os salários pelos princípios do item 1 | CONFIRMADA | mec-05 | `fontes/mecanismo/statute-72-pg405.txt` |
| F086 | 19 | o comissário escolhia a quem vendia: o tratado limita a venda a certas classes | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F087 | 19 | a partir de 1939, venda limitada às classes (a) [empregados do governo dos EUA, do canal e da ferrovia, com as famílias] e (b) [militares, com as famílias] | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F087b | 19 | e às classes (c), (d) e (e) e às famílias delas, só quando moravam na Zona: os "certain residents" | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F087c | 19 | o tratado de 1936 entrou em vigor em 27/07/1939 | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F088 | 19 | do fim de 1956, empregados não cidadãos dos EUA que moravam no Panamá perderam o acesso às lojas | CONFIRMADA | mec-20 | `fontes/mecanismo/frus1955-57v07-d161.txt` |
| F089 | 19 | o Panamá insistiu, diz o memorando, chamando o acesso antigo de concorrência desleal à sua economia | CONFIRMADA | mec-20 | `fontes/mecanismo/frus1955-57v07-d161.txt` |
| F091 | 20 | 1920: escolas "white" e "colored" no relatório | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F091b | 20 | o ano do documento: o relatório das escolas "white" e "colored" é o relatório do ano fiscal de 1920 | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F092 | 20 | anos 1960: "U.S. citizen schools" e "Latin American schools" nos relatórios (1965 e 1968) | CONFIRMADA | mec-15 | `fontes/pcc-1968_djvu.txt` |
| F092b | 20 | idem, relatório de 1965 | CONFIRMADA | mec-14 | `fontes/annualreportpana1965pana.txt` |
| F092m | 20 | a contagem: os relatórios de 1965 e 1968 são dos anos 1960 | CONFIRMADA · medição | mec-14 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F093 | 20 | o censo de 1960 dá os números cidade por cidade (Places of 2,500 or more) | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png`, p. 57-33 (Table 28, 1960) |
| F094 | 20 | Balboa 1960: 1.580 de 3.139 | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png`, p. 57-33 (Table 28, 1960) |
| F095 | 20 | Paraíso 1960: 7 de 3.113 | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png`, p. 57-33 (Table 28, 1960) |
| F096 | 20 | Rainbow City 1960: 3 de 3.688 | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png`, p. 57-33 (Table 28, 1960) |
| F097 | 20 | no censo de 1950, Silver City (distrito de Cristóbal, 5.726 moradores); Rainbow City é o nome posterior (o dossiê) | CONFIRMADA · lido na imagem | esc-11 | `fontes/escala_humana/img/c1950-tab19-zoom.png`, p. Table 19, 1950 |
| F098 | 20 | os termos "gold roll" e "silver roll" saíram das tabelas de salário (1948) | CONFIRMADA | mec-19 | `fontes/mecanismo/frus1948v09-d490.txt` |
| F099 | 20 | a divisão continuava: nos anos 1960, o sistema escolar dividido em escolas "U.S. citizen" e "Latin American" (1968) | CONFIRMADA | mec-15 | `fontes/pcc-1968_djvu.txt` |
| F099L | 20 | o ouvinte conclui que a divisão entre os dois grupos durou depois de 1948: escolas separadas nos anos 1960 (F092) e, em 1960, Balboa com metade nascida nos EUA e Paraíso e Rainbow City com 7 e 3 (F094 a F096) | CONFIRMADA · linha L | F092, F094, F095, F096 | apoio: F092, F094, F095, F096 |
| F100 | 20 | a briga seguinte foi a da bandeira (o ICJ: a questão da bandeira já fora causa dos distúrbios de novembro de 1959; e a de 1964) | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F101 | 21 | de 1960 em diante a bandeira do Panamá passou a tremular na Zona em lugares escolhidos | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F101b | 21 | a primeira, em 07/09/1960, na Shaler Triangle | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F102 | 21 | primeiro em Shaler Triangle, praça da Zona na Cidade do Panamá; depois na ponte e nos Administration Buildings | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F102b | 21 | a ponte (out/1962) e os Administration Buildings (fim de out/1962) | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F103 | 21 | acordo de janeiro de 1963 entre os dois governos: as duas bandeiras onde a autoridade civil hasteasse a americana | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F103b | 21 | a Comissão Mista, criada pelos dois governos, chegou ao acordo | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F103c | 21 | o acordo é de janeiro de 1963 (10/01/1963; o OCR lê "JanuarylO") | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F104 | 21 | em 30/12/1963 o governador tirou a bandeira americana fora dos lugares escolhidos | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F104m | 21 | a leitura do OCR: "December 30,1963" = 30/12/1963 | CONFIRMADA · medição | exp-15 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F105 | 21 | nas escolas, a bandeira ficaria só dentro do prédio | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F106 | 22 | em 07/01/1964, estudantes da Balboa High School hastearam a bandeira por conta própria, "in defiance of the Governor's orders" (citação literal do Bulletin) | CONFIRMADA | exp-14 | `fontes/experiencia/departmentofstat501964unit.txt` |
| F106b | 22 | a data: 07/01/1964 | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F107 | 22 | em 09/01, à tarde (cerca de 16h45), estudantes do Instituto Nacional foram à escola com a bandeira deles | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F107b | 22 | a tarde de 09/01/1964 | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F107m | 22 | a conta: 07 -> 09/01/1964 = 2 dias | CONFIRMADA · medição | exp-15 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F108 | 23 | uma comissão internacional de juristas, chamada pela Ordem dos Advogados do Panamá, reconstituiu as horas seguintes | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F109 | 23 | a polícia deixou uma delegação de cinco levar a bandeira até o mastro; houve empurra-empurra e a bandeira panamenha rasgou | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F109b | 23 | a bandeira rasgou no tumulto | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F110 | 23 | às 19h os estudantes tinham saído da Zona pela Fourth of July Avenue, diante do Instituto Nacional | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F110b | 23 | a avenida: 4th of July Avenue | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F111 | 23 | quatro dias de confronto (09 a 12/01/1964) | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F111m | 23 | a contagem: 9, 10, 11 e 12/01/1964 = 4 dias | CONFIRMADA · medição | exp-15 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F112 | 24 | 4 soldados americanos e 24 panamenhos mortos, segundo o Arquivo Nacional dos EUA (atribuído, decisão da Sala T03) | CONFIRMADA | evt-26 | `fontes/evento/nara-declass-blog-2014-11-03.txt` |
| F113 | 24 | outras contas diferem: a CIJ registra 3 soldados americanos mortos (e não fixa total panamenho) | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F114 | 24 | em 10/01/1964 o Panamá rompeu relações com os EUA | CONFIRMADA | evt-07 | `fontes/evento/hsg-countries-panama.txt` |
| F116 | 24 | o tratado de 1977 abre "in the spirit of the Joint Declaration of April 3, 1964" (citação literal), a que restabeleceu relações | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F116b | 24 | a Declaração Conjunta de 03/04/1964 restabeleceu as relações | CONFIRMADA | evt-07 | `fontes/evento/hsg-countries-panama.txt` |
| F116c | 24 | o tratado é de 07/09/1977 | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F116m | 24 | a contagem dos quatro dias (9 a 12/01/1964) | CONFIRMADA · medição | exp-15 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F117 | 24 | o tratado de 1977 é onde a Zona termina (o Panamá reassume a jurisdição sobre a "former Canal Zone") | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F118 | 25 | em 07/09/1977, em Washington, Carter e Torrijos assinaram dois tratados | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F118b | 25 | eram dois tratados, assinados por Carter e Torrijos em setembro de 1977 | CONFIRMADA | evt-31 | `fontes/evento/nara-treasures-congress-p25.txt` |
| F119 | 25 | em abril de 1978 o Senado aprovou o tratado do canal por 68 a 32 | CONFIRMADA | evt-31 | `fontes/evento/nara-treasures-congress-p25.txt` |
| F120 | 25 | o tratado entrou em vigor em 01/10/1979 | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F120b | 25 | o Art. I(1) do tratado de 1977 "terminates and supersedes" a Convenção de 18/11/1903 | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F120c | 25 | é o artigo I ("Abrogation of prior treaties") | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F120d | 25 | o tratado de 1903 (Art. II) concedera a faixa "in perpetuity" para construir, operar e proteger o canal | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F121 | 25 | 75 anos depois de os EUA tomarem posse das obras do canal (04/05/1904 -> 01/10/1979 = 75 anos e 4 meses) | CONFIRMADA | evt-10 | `fontes/evento/annualreportist00usgoog_djvu.txt` |
| F121b | 25 | o Panamá reassumiu a jurisdição plena sobre a antiga Zona | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F121m | 25 | a conta: 04/05/1904 -> 01/10/1979 = 75 anos e 4 meses | CONFIRMADA · medição | evt-10 | `roteiros/zona-do-canal/qc-roteiro/fatos-medidas.txt` |
| F124 | 26 | a Zona e o seu governo deixaram de existir (o 8 FAM: "ceased to exist"; o Canal Zone Government liquidado em 30/09/1979) | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F124b | 26 | liquidação do Canal Zone Government | CONFIRMADA | esc-08 | `fontes/escala_humana/pcc1980_djvu.txt` |
| F125 | 26 | em Albrook, Mondale chamou o dia de "a proud day" para os dois povos (citação literal) | CONFIRMADA | exp-19 | `fontes/experiencia/departmentofstatd7979unit.txt` |
| F125b | 26 | a cerimônia foi na Albrook Air Force Base | CONFIRMADA | exp-19 | `fontes/experiencia/departmentofstatd7979unit.txt` |
| F126 | 26 | em agosto (14/08/1979), o Secretário de Estado escreveu a Mondale que a visita tranquilizaria os empregados americanos de que os EUA "is not abandoning them" (citação literal) | CONFIRMADA | exp-20 | `fontes/experiencia/frus1977-80v29-d239.html` |
| F122 | 26 | por 30 meses, polícia e tribunais americanos seguiram cobrindo os empregados americanos do canal, os militares e as famílias, em certas áreas | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F122b | 26 | jurisdição criminal primária dos EUA sobre empregados cidadãos da Commission, militares e dependentes | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F123 | 26 | as escolas da Zona passaram ao Departamento de Defesa | CONFIRMADA | esc-08 | `fontes/escala_humana/pcc1980_djvu.txt` |
| F123b | 26 | uma agência americana, a Panama Canal Commission, operou o canal até o fim de 1999 | CONFIRMADA | evt-31 | `fontes/evento/nara-treasures-congress-p25.txt` |
| F128 | 27 | o tratado deu aos EUA "all the rights, power and authority" na faixa de 10 milhas (citação literal) | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F128b | 27 | a faixa de 10 milhas | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F129 | 27 | uma lei deu à Zona um governador e jurados cidadãos dos EUA | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F130 | 27 | um segundo tratado só deixava morar na Zona quem trabalhava ou servia ali, e as famílias | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F131 | 27 | a folha separava quem trabalhava para o canal: "gold"/"silver", depois "U.S."/"local" rates | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F131b | 27 | antes, "gold" e "silver" (as duas classes) | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F132 | 27 | nascer ali, por si só, nunca bastou: a Zona nunca foi parte dos EUA para a lei de cidadania (1904 a 1979) | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F132b | 27 | o filho de pais estrangeiros nascido na Zona não adquiria a nacionalidade (1927, citado pelo FAM) | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F134 | 28 | em 1903, eram os poderes que os EUA teriam "if it were the sovereign" (citação literal) | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F134b | 28 | o tratado é de 1903 | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F135 | 28 | em 1977, o tratado chamou o Panamá de "territorial sovereign" (citação literal) | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F135b | 28 | o tratado é de 1977 | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F136 | 28 | a ACP dá como endereço o Administration Building, em Balboa (lido na cópia de 14/10/2026; volátil) | CONFIRMADA | evt-33 | `fontes/evento/acp-en-history.txt` |
| F136b | 28 | a página é de 2026 (o rodapé) | CONFIRMADA | evt-33 | `fontes/evento/acp-en-history.txt` |
| F137 | 28 | a cidade continuou onde estava (Balboa é setor do corregimiento de Ancón, MINSA 2015) | CONFIRMADA | evt-37 | `fontes/evento/minsa-paraiso-asis-2009-2014.txt` |
| F138 | 28 | a Zona deixou de existir | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |

## Comparação com a rodada anterior (lida só depois de gravados os achados acima)

O laudo `qc-roteiro/fatos-r2-antigo.laudo.md` julgou `4c93f1712cf2` e deu RESSALVA (nota 9,3) com dois achados LEVE e uma decisão da Sala. No texto de hoje:

| r2-antigo | o achado | hoje |
|---|---|---|
| A1 · F087 | o "only" dos comissários excluía as classes (c)–(e) residentes | **Resolvido** pela L02, na forma que o laudo propôs ("…its employees and soldiers, their families, and certain residents"); confirmado no Art. III(1) de 1936 (F087, F087b). |
| A2 · F132 | "The rule about being born there never changed." contradizia o 15º parágrafo | **Resolvido** pela L01 ("Being born there, by itself, was never enough."), que diz o princípio; o 15º parágrafo (L04, L05) e o fecho não se contradizem mais (F132, F132b). |
| Decisão da Sala · F136 | a linha da ACP sem data | **Resolvida** pela L03 ("The Panama Canal Authority, in 2026, gives…"); o ano está no rodapé da cópia lida (F136b). |
| Observação · F002 | "under a 1903 treaty" com polícia e escolas da EO de 1914 | Sem mudança de fato (só vírgulas, L12); continua sem achado. |

Resultado: os 2 achados e a pendência da rodada anterior resolvidos; nenhum achado novo. A nota sobe de 9,3 para 9,6: não há regressão.

VEREDITO: PASS
