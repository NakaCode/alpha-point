# Laudo · verificador de fatos (independente, da Sala de controle) · rodada final · zona-do-canal

Revisão julgada: `4c93f1712cf2` · data-base 2026-10-14

COBERTURA: 146 de 146 afirmações checáveis com veredito (em 115 das 138 frases do texto falado; as outras 23 frases não afirmam nada checável e estão listadas abaixo). CHECADO POR INTEIRO.

- **Como a lista foi derivada: à mão.** O canal não tem extrator de afirmações para este vídeo. Rodei primeiro `node roteiros/zona-do-canal/_ferramentas/gate.mjs`: exit 0, PASSA, sha256 do texto falado `4c93f1712cf2740389d980922c5223386cd739bf33077af169835204a5dd5b3d`, 2.148 palavras, 28 parágrafos, 152 frases pelo portão, 0 problemas, 21 alertas de palavra, autoplágio vazio; com `--derivados`, `roteiro-editor.md` e `pronuncia.md` citam `4c93f1712cf2`. Depois parti o texto falado (sem título, linhas `>` e comentários) em 138 frases, F001 a F138, sem partir "U.S." nem os decimais (o portão conta 152 porque parte "U.S." e "$158.46"). Li cada frase e tirei dela toda afirmação de número, data, citação, atribuição, universal, mecanismo e lugar; frase com duas provas ganhou linha b/c. O denominador inclui o que a forma não denuncia (o "only", o "never", o "nobody", o "more than half", as pontes de reordenação).
- **Contra o quê:** o dossiê (`pautas/zona-do-canal/fundamento.json` e `.md`, inclusive "nomes", "regras_de_pauta", "O que não se diz" e as correções da síntese) como mapa, e a **cópia local de cada fonte** como prova: cada linha da tabela `qc-roteiro/fatos-tabela.json` traz o trecho literal do `arquivo_local`. Conferi por script que os 131 trechos de texto estão, letra a letra, nos arquivos (0 falhas). Exceções declaradas: 12 linhas com números do Census de 1950, 1960 e 1970, cujos PDFs são só imagem (nenhuma camada de texto): li cada número na imagem (`mecanismo/census1960-p57-33-table28.png`, `escala_humana/img/c1970-t7-top.png`, `escala_humana/img/c1950-tab19-zoom.png`) e o trecho dessas linhas é a minha transcrição, marcada `conferencia_do_trecho: "transcrito da imagem"`; e 3 linhas cujo `arquivo_local` é o PDF do Census de 1940, com o trecho tirado da camada de texto do PDF (PyMuPDF). Um conferidor que só lê `.txt` não as acha: não é falha do trecho.
- **Rede:** não usei. Tudo fechou nas cópias locais. Nenhum site foi tocado.
- **Citações aspadas:** 49 de 49 trechos entre aspas conferidos letra a letra na cópia (as citações de frase e os termos de época, como "gold", "silver", "U.S.-rate", "white", "colored", "commy"; o portão de aplicação também conta 49). As de frase: o Art. III em duas partes, "in perpetuity", "from among the citizens of the United States", "the permanent gold site at Balboa", "the permanent silver settlement", "the permanent boundary line between the City of Panama and the Canal Zone", "gold roll"/"silver roll", "with a few exceptions, citizens of the United States", "a considerable number", "white"/"colored", "lived in rented quarters", "commy", "was never considered part of the United States", "if it were the sovereign" ×2, "concerning racial discrimination in the Canal Zone", "the complete abolition of any segregation in the Canal Zone", "a matter of long custom in tropical countries", "U.S." e "local" rates, "U.S. citizen schools", "Latin American schools", "in defiance of the Governor's orders", "in the spirit of the Joint Declaration of April 3, 1964", "a proud day", "is not abandoning them", "territorial sovereign". Nenhuma com reticências na voz. Duas são molduradas com sujeito parafraseado, sem mudar o sentido: F080 ("wanted" por "will not be completely satisfied with anything less than") e F126 ("the United States" fora das aspas por "the U.S.").
- **Aritmética refeita:** 1.580/3.139 = 50,3 % ("about half"); 23.559/44.198 = 53,3 % ("more than half"); 23.638/51.827 = 45,6 % ("nearly half"); 1.041 > 1.000 ("more than a thousand", "the thousand or so"); 03/11 → 18/11/1903 = 15 dias; 04/05/1904 → 01/10/1979 = 75 anos e 4 meses ("seventy-five years"); 01/10/1979 + 30 meses = 31/03/1982; 3.988 → "almost four thousand". Tudo fecha.

NOTA: 9.3/10 · a tese, os números de tela, as datas de documento e as 49 aspas estão sustentados no primário. A nota cai por dois universais que a fonte não sustenta por inteiro, ambos periféricos e com troca de uma frase pronta (A1, A2).

VEREDITO DA LENTE: RESSALVA. Zero REFUTADA; dois DIVERGE em afirmação periférica (F087, o "only" dos comissários; F132, o "never changed" da regra de nascimento), cada um com troca de uma frase que cabe no teto de palavras. Nenhuma afirmação de tese diverge.

## O que mudou desde a rodada 1, e o que é idêntico

A bancada 1 julgou `6917e62a2155` (`_trabalho/roteiro-r1.antes.md`). Comparei por `git diff --no-index --word-diff` o texto de então com o de agora: as diferenças são exatamente as 26 da lista aplicada (`_trabalho/aplicado-r1.md`, L01–L29) e os dois parágrafos reescritos pelos pedidos (`_trabalho/pedidos-r1-feito.md`, P01 no 15º parágrafo e P02 no 21º). Fora delas, o texto é idêntico palavra por palavra. **As frases mudadas foram verificadas por inteiro contra a cópia da fonte** (F001, F014, F015, F024, F027, F029, F035–F037, F039, F041, F051, F053, F061, F068–F070, F074, F079–F081, F083, F085, F087, F088, F093, F096, F097, F102, F103, F110, F111, F121–F123, F130–F132). As idênticas também receberam veredito, cada uma com o seu trecho literal: a tabela cobre o texto inteiro de hoje, não só o diff.

## As decisões da Sala (14/10/2026), conferidas na voz

- **Balboa (T06):** F001 "the town below Balboa Heights, the hillside the Panama Canal Zone was run from" e F024 "Balboa, the town at the foot of Balboa Heights, the hillside the Canal Zone was run from" (forma da Sala com o ajuste I03, "hillside": o relatório de 1914 põe Balboa Heights "on the southwesterly slope of Ancon Hill"). Nunca "the seat of government". Os 3.139 e os 1.580 são da cidade (Table 28, coluna Places, Balboa), não do distrito (15.543 nascidos nos EUA, coluna Court districts) nem de Balboa Heights. Conforme.
- **A Zona inteira (T10):** a voz não diz 23.559 nem 44.198; diz "More than half of its residents had been born in the United States" (53,3 %), com a ressalva no mesmo trecho: "Many of the others inside the line were soldiers", "nearly half of the Zone's residents lived in military areas" (1940) e "the count took in the bases along with the towns", fechando em "So the number for the whole Zone says less than it seems." A cidade americana se conta por Balboa (F002, F094). Conforme.
- **1964 (T03):** F112–F113 "Four U.S. soldiers and 24 Panamanians were killed, according to the U.S. National Archives. Other counts differ." Literal à forma da Sala; a NARA diz "four U.S. soldiers and twenty-four Panamanians were killed"; a CIJ registra "three U.S. soldiers had been killed" (outra conta, que sustenta o "differ"). Conforme.
- **McCain:** fora do roteiro. Conforme.
- **O presente (2025–26):** nenhuma linha política; só F136, "Today, the Panama Canal Authority gives its address as the Administration Building, in Balboa." (a forma de N14, sem "the same building"), com a fonte na voz, sem adjetivo, lida em 14/10/2026 na cópia local da página da ACP. A linha não traz data na voz; a regra N14 do dossiê a aceita assim, com reconferência na véspera. Se a Sala ler a linha da ACP como "a linha do presente" da decisão (que pede data), a forma datada que cabe no orçamento é trocar "Today," por "In 2026," (+1 palavra) e "gives" por "gave"; não abro achado, porque a ACP não é o "presente" político que a decisão mira. DECISÃO DA SALA, se quiser.

## O "O que não se diz", conferido

Nenhuma ocorrência na voz de: "as if it were the sovereign"; "76 years"; total do censo como "Americans"; "citizens" no lugar de "born in the United States"; "born in the Zone, so American"; "seat of government"; "next door" em 1960; "Zonians"; "ratified" para o Senado; "racial segregation" na voz do narrador ("segregation" só dentro da citação atribuída ao governador; "white" e "colored" só como palavras do relatório de 1920); "U.S. territory", "annexed", "owned"; "the riots forced"; quem atirou primeiro; Hull–Alfaro; "only Americans could live there" (F048 diz o contrário: "The test was service, not citizenship"); "1936 com efeito em 1936" (F043: "signed in 1936, in force from 1939"); 1964 hasteado em 09/01 (F106: 07/01). O "because" entre o censo e o tratado (I05) não aparece: F002 liga as duas orações por "and".

## As armadilhas de fato, uma a uma

- **Universais** ("nobody", "never", "only", "first", "last", "every"): F049 "Nobody lived in the Zone just because they wanted to" (confirmada: "No person who is not comprised within the following classes shall be entitled to reside", a partir de 1939, que a frase anterior data); F039 "only if the family lived inside" (confirmada, 1940: "only when such employees reside on the Canal Zone"); F105 "only indoors" (confirmada, CIJ §19); F130 "only those who worked or served there, and their families" (confirmada: as seis classes de 1939 são todas de serviço ou família); F059 "the last American census" (confirmada: 1970); F012 "The first rule" (moldura, não primazia); F021 "every acre" (confirmada: "all land and land under water"); F071 "something the treaty never did" (confirmada: li o tratado inteiro, que não trata de nacionalidade). **Dois não passam: F087 "sold only to its own employees and soldiers" (A1) e F132 "never changed" (A2).**
- **Ano derivado:** "fifteen days" (03→18/11/1903), "seventy-five years" (04/05/1904→01/10/1979), "thirty months" (Art. XI), "Two days later" (07→09/01/1964), "Four days" (09–12/01/1964): todos fecham.
- **Afirmação nova sobre grupo / divisão por grupo:** "silver roll" como força antilhana em 1920 e 1930 (o relatório de 1920: "labor force of West Indians (known as silver roll force)"; o de 1930: "a huge percentage of the silver employees are West Indian"); "gold roll" com poucas exceções cidadãos (1940, literal); mais de 60 % dos "silver" fora (1930, literal); os "silver" queriam o fim da segregação (na voz do governador, atribuída); os não cidadãos que moravam no Panamá perderam o comissário (Dulles 1956, mesma divisão). Cada grupo e o fato estão no mesmo trecho.
- **Composição e justaposição:** F002 (o censo de 1960 e o tratado de 1903 na mesma frase, ligados por "and", sem nexo causal: aceito, I05). F021 junta a lei de 1912 e as casas de 1915 numa frase, sem "so" (a ordem de 05/12/1912 é o elo, descrito pelo relatório). F116 a Declaração de 1964 e o preâmbulo de 1977 (o elo é documental: o tratado a cita). Nenhuma conclusão por justaposição.
- **Período:** 1936 × 1939 (F043, certo); 1977 × 1979 (F118 assinatura, F120 vigência, certo); 1979 × 1999 (F123, a Commission até o fim de 1999, certo); 1903 × 1904 (F068 "the day the 1903 treaty took effect", 26/02/1904, certo); 1912 × 1914 (lei de 1912, ordem de 1914, certo); 1948 (nomes) × 1950 (relatório) × 1955/1958 (salário), certo.
- **Mecanismo:** F070 (a regra geral exigia residência prévia do pai ou da mãe; a lei de 1937 a dispensou para o nascido na Zona de 1904 em diante): o FAM diz isso nas duas pontas ("shall not descend to children whose fathers never resided in the United States prior to the birth"; "acquired U.S. citizenship at birth even if the citizen parent had never previously resided … Under the act of 1937 … between 1904 and October 1, 1979"). Confirmado, atribuído ao manual ("the manual adds").
- **Fonte não aberta:** nenhuma. A EO 1885 é transcrição (T2) e entra como a ordem diz; a ordem de 05/12/1912 não entra na voz.

## A varredura "estado do mundo"

- F136 "Today, the Panama Canal Authority gives its address as the Administration Building, in Balboa." **Confirmada** em 14/10/2026 (cópia local do rodapé da ACP: "Administration Building. Balboa, Ancon. Republic of Panama."). Volátil: reconferir na véspera.
- F137 "The town stayed where it was, below the hillside." **Confirmada** (Balboa é setor do corregimiento de Ancón, MINSA 2015, T2; e o endereço da ACP). Volátil baixo.
- F069, F070, F072 "the State Department's manual says / adds / it says": presente sobre documento vivo. **Confirmadas** na versão lida (8 FAM 302.4, CT:CITZ-135, 01-09-2026).
- F122 "still covered" e F104/F105: passado histórico, não presente. F061 "says less than it seems" e F117 "is where the Zone ends": presente narrativo, sem estado do mundo.
- Nenhuma frase diz que algo "continua", "remains" ou "now is" fora dessas.

## ACHADOS

**A1 · [LEVE] F087, 19º parágrafo (p5) · o "only" dos comissários exclui gente que o tratado deixava comprar.** DIVERGE (periférica). A frase: "From 1939, the Zone's commissaries sold only to its own employees and soldiers, with their families." O tratado de 1936 (53 Stat. 1811, Art. III, 1) limita as vendas às classes (a) e (b) e **também** vende às classes (c), (d) e (e) e às famílias delas quando moram na Zona: "with regard to the persons included in classes (c), (d) and (e) of the said Section and members of their families, the sales above mentioned shall be made only when such persons actually reside in the Canal Zone" (`mecanismo/statute-53-pg1807.txt`). Empreiteiros, empregados das empresas autorizadas e quem fazia trabalho religioso, de caridade, educacional ou científico compravam, se morassem dentro. O resto da frase está certo (as classes (a) e (b) compravam morando dentro ou fora, o que prepara F088).
- OP: QUALIFICAR.
- TROCA: "From 1939, the Zone's commissaries sold only to its own employees and soldiers, with their families." → "From 1939, the Zone's commissaries sold only to its employees and soldiers, their families, and certain residents."
- Orçamento: 16 → 17 palavras; o total vai a 2.149 (teto 2.150). Sem número, data, nome ou grupo novo além do que o tratado nomeia ("certain residents" = as classes (c)–(e) residentes).
- RAIZ: PONTUAL (a L20 da rodada 1 acrescentou as famílias e deixou o "only").

**A2 · [LEVE] F132, 27º parágrafo (p7) · "never changed" contradiz o que o 15º parágrafo acabou de dizer.** DIVERGE (periférica). A frase: "The rule about being born there never changed." O 15º parágrafo diz, com o FAM, que até 1937 o nascido na Zona caía na regra geral, que exigia residência prévia do pai ou da mãe, e que a lei de 1937 dispensou essa condição ("a condition the 1937 law dropped"): a regra mudou em 1937, e de novo de forma em 1940 e 1952 (NA 203, INA 303, pelo FAM). O que nunca mudou, de 1904 a 1979, é o princípio que a frase quer fechar: nascer ali, por si só, não fazia ninguém cidadão (8 FAM 302.4-2 c, d e h; 8 U.S.C. § 1403). O ouvinte que guardou o 15º parágrafo ouve uma contradição; a frase também é o universal "never" que a fonte não sustenta ao pé da letra.
- OP: REDIZER (a mesma afirmação de F004/F066, sem número, data, nome ou grupo novo).
- TROCA: "The rule about being born there never changed." → "Being born there was never enough by itself."
- Orçamento: 8 → 8 palavras.
- RAIZ: PONTUAL. A colisão nasceu do pedido P01 (`pedidos-r1-feito.md`): a oração nova do 15º parágrafo tornou explícito que a lei de 1937 mudou a regra, e o "never changed" do fecho, que a L29 deixou, passou a contradizê-la.

Com A1 e A2 aplicados juntos, o total fica em 2.149 palavras. Provado numa cópia fora do canal (`gate.mjs` sobre o texto com as duas trocas): PASSA, 2.149 palavras, 152 frases, média 14,2, 0 problemas, nenhuma taxa em alerta, autoplágio vazio. Depois da troca, os derivados pedem o carimbo novo.

Não abro outra frente. Observação sem achado: F002 diz "under a 1903 treaty its police, courts and schools answered to Washington"; a polícia e as escolas vêm da EO 1885 (1914) e o tribunal da lei de 1912, sob o regime do tratado. Com "and" e sem "because", a frase não afirma que o tratado criou as instituições (I05); fica como está, como a bancada 1 a deixou.

## As 23 frases sem afirmação checável (NADA A CHECAR, declarado)

F010 e F127 (a pergunta do ângulo), F011 (assinatura), F026, F034, F042, F050, F054, F055, F056, F061, F062, F064, F075, F076, F086, F090, F093, F098, F099, F100, F115, F133: transições, perguntas, sínteses do que a frase vizinha já afirma (com veredito na vizinha) ou leitura editorial sem fato novo (F061 resume F057–F060; F075–F076 resumem F067 e F041; F098–F099 resumem F083–F092; F115 resume a passagem do 1948 a 1964). F036 e F077, que pareciam transição, afirmam fato e estão na tabela.

## LISTA DE NOMES (anônimo → pessoa nomeável)

- "the U.S. National Archives" (F112) → Patrice Brown, Senior Archivist, National Declassification Center (NARA), "100 Years of the Panama Canal: The Age of Transition, 1964-73", NDC Blog, 03/11/2014 (`evento/nara-declass-blog-2014-11-03.txt`). O nome não vai à voz (regra de nomes).
- "An international commission of jurists" (F108) → International Commission of Jurists (Genebra), comitê de A. D. Belinfante, Gustaf Petren e Navroz Vakil, "Report on the Events in Panama, January 9–12, 1964" (`experiencia/icj-1964-panama.txt`).
- "the State Department's manual" (F069–F072) → 8 FAM 302.4, Bureau of Consular Affairs, U.S. Department of State, CT:CITZ-135 de 01/09/2026 (`documento/fam-8-302-4.txt`).
- "a State Department memo" (F089) → John Foster Dulles, Secretário de Estado, memorando ao Presidente sobre o memorando panamenho, FRUS 1955–1957, vol. VII, doc. 161 (`mecanismo/frus1955-57v07-d161.txt`).
- "The Zone's governor" (F079–F081) → Gen. J. C. Mehaffey, carta ao embaixador Frank T. Hines, Balboa Heights, 18/09/1946, FRUS 1946, vol. XI, doc. 931.
- "the Secretary of State" (F126) → Cyrus Vance, memorando ao Vice-Presidente Mondale, 14/08/1979, FRUS 1977–1980, vol. XXIX, doc. 239.
- "the Zone's governor" (F104, F106) → em 1963–64, Robert J. Fleming Jr. (o "Governor Fleming" dos cartazes, CIJ §24).
- "The Zone's own 1940 report" → Annual Report of the Governor of the Panama Canal, FY 1940, gov. Glen E. Edgerton.

## VOLÁTEIS na fala (reconferir na véspera da gravação)

- F136 o endereço da ACP: muda se a Autoridade mudar de sede ou de rodapé (página `pancanal.com`, lida na cópia de 14/10/2026). Zera: nada indica mudança.
- F137 Balboa como lugar: estável.
- F069–F072 a redação do 8 FAM 302.4: o manual é revisado (a versão lida é de 01/09/2026); a frase "was never considered part of the United States" e a residência prévia podem mudar de parágrafo, não de sentido. Reconferir a letra da citação F072 antes da gravação.

## DECISÃO DO LUCAS PENDENTE / DA SALA que tocou esta checagem

- A linha da ACP (F136) como "a linha do presente": a decisão da Sala pede data; a regra N14 do dossiê aceita sem data. Proposta, se a Sala quiser datar: "In 2026, the Panama Canal Authority gave its address as the Administration Building, in Balboa." (+1 palavra; não soma com A1 sem cortar 1 palavra no mesmo parágrafo).
- Onde gravar o laudo de fatos dos próximos vídeos: gravado em `roteiros/zona-do-canal/qc-roteiro/`, como no Juneau e em Los Angeles.

## PADRÕES

1. **O universal que sobra de uma troca:** as duas divergências nasceram de trocas da rodada 1 que consertaram metade da frase (L20 pôs as famílias e deixou o "only"; L29 cortou "still on the books" e deixou o "never changed"). Troca que mexe numa frase com universal pede a releitura do universal.
2. **A paráfrase de documento com moldura de quem fala:** F080 e F126 põem o verbo da voz ("wanted", "the United States") fora das aspas literais; ambas fiéis, mas é o lugar onde uma moldura pode virar sujeito trocado.

## Comparação com a rodada 1 (lida só depois de gravados os achados acima)

O laudo `qc-roteiro/fatos-r1.laudo.md` julgou `6917e62a2155` e deu RESSALVA com 13 achados (A1–A6, L1–L7). No texto de hoje:

| r1 | o achado | hoje |
|---|---|---|
| A1 | "never changed, and it is still on the books" (estado do mundo) | **Resolvido** o "still on the books" (L29 cortou). O "never changed" que ficou passou a colidir com a oração nova do P01: é o A2 deste laudo. |
| A2 | "Until October 1, 1979." colado a "police, courts and schools" no gancho | **Resolvido em parte.** O gancho não mudou; a lista escolheu resolver no corpo (L26): F122–F123 dizem os 30 meses de polícia e tribunais americanos e as escolas passadas à Defesa. Eu li o gancho sem o laudo e não abri achado: o fragmento data a Zona, e o corpo diz o que continuou. Se a Sala quiser fechar no próprio gancho, a troca do r1 continua de pé ("Until October 1, 1979, when the Canal Zone itself came to an end."; +7 palavras, pede corte). |
| A3 | "before anyone was born in Balboa" (universal) | **Resolvido** (L05: "when Balboa was planned as a permanent town"; confirmado no relatório de 1914, "Planning of the permanent town of Balboa"). |
| A4 | "not by passport" | **Resolvido** (L10: "So the Zone sorted its workers by payroll."). |
| A5 | regra da casa estendida a todo empregado | **Resolvido** (L11: "its "U.S.-rate" employees"). |
| A6 | "wreck the canal and the railroad" | **Resolvido** (L17: "the canal and railroad organizations", fiel a "the Panama Canal and Panama Railroad organizations"). |
| L1 | Paraíso sem o ano na frase | **Não aplicado.** O ano (1960) está na frase anterior do gancho e volta em F093; aceito, sem achado. |
| L2 | escolas gratuitas, 1930 × 1940 | **Resolvido** (L09: "By 1940"). |
| L3 | "passed" × "enacted" | **Resolvido** (L15). |
| L4 | o tratado de 1955 "set" o salário | **Resolvido** (L19: "promised … set"). |
| L5 | o "only" dos comissários | **Resolvido em parte** (L20 pôs as famílias); o "only" ainda exclui as classes (c)–(e) residentes: é o A1 deste laudo. |
| L6 | "The word on the sign was now "citizen."" | **Resolvido** (L22 cortou). |
| L7 | "those in the canal's service" | **Resolvido** (L27: "who worked or served there, and their families"). |

Resultado: 10 resolvidos, 2 resolvidos em parte (viraram os A1 e A2 deste laudo, ambos LEVE), 1 não aplicado e aceito. A nota sobe de 8,4 para 9,3: não há regressão.

## A tabela (uma linha por afirmação)

A tabela completa, com o trecho literal de cada linha, está em `roteiros/zona-do-canal/qc-roteiro/fatos-tabela.json` (146 linhas). Abaixo, a forma curta.

| id | afirmação (frase) | veredito | fonte | arquivo local |
|---|---|---|---|---|
| F001 | Balboa Heights, de onde a Zona era governada, é a encosta (sudoeste do morro de Ancón); Balboa é a cidade abaixo dela | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F002 | Balboa (cidade), 1960: 3.139 moradores, 1.580 nascidos nos EUA ("about half": 50,3 %) | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png` |
| F002b | sob o tratado de 1903, polícia, tribunais e escolas respondiam a Washington (o governo da Zona sob o governador, supervisionado pelo Secretário da Guerra) | CONFIRMADA | doc-04 | `fontes/documento/app-eo-1885.txt` |
| F003 | a Zona durou até 1º/10/1979 (o tratado de 1977 entrou em vigor nessa data) | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F004 | nascer em Balboa (na Zona) não fazia ninguém americano por si só: a lei exige pai ou mãe cidadão no nascimento | CONFIRMADA | doc-08 | `fontes/documento/govinfo-uscode-8-1403.txt` |
| F005 | a Zona era uma faixa de 10 milhas de largura, do Caribe ao Pacífico, atravessando o Panamá | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F006 | Paraíso, 1960: 7 nascidos nos EUA em 3.113 moradores | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png` |
| F007 | Rainbow City, 1960: 3 nascidos nos EUA em 3.688 moradores (lado atlântico, distrito de Cristóbal) | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png` |
| F008 | de 1920 a 1970 nenhum censo da Zona publicou o total de cidadãos moradores: a cidadania só foi tabulada para os nascidos fora | CONFIRMADA | esc-10 | `fontes/census-1940-canal-zone.pdf` |
| F009 | o censo contava onde os moradores nasceram (coluna "Born in the United States") | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png` |
| F012 | o tratado foi escrito em Washington, 15 dias depois de o Panamá se separar da Colômbia (03/11 -> 18/11/1903) | CONFIRMADA | doc-18 | `fontes/documento/hsg-milestone-1899-1913-panama-canal.txt` |
| F012b | o tratado foi feito em Washington, em 18/11/1903 | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F013 | John Hay assinou pelos EUA; Philippe Bunau-Varilla assinou pelo Panamá, como seu plenipotenciário | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F014 | Art. II: "in perpetuity", faixa de 10 milhas, 5 de cada lado do eixo do canal a construir, para construir, operar e proteger | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F015 | Panama City e Colón ficavam dentro dos limites e o mesmo artigo as excluiu da concessão | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F016 | Art. III, citação literal: "all the rights, power and authority" ... "would possess and exercise if it were the sovereign of the territory" | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F016b | Art. III, segunda parte da citação, letra a letra | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F017 | sobre a faixa, a lei americana montou um governo (a lei de 1912 "for the ... government of the Canal Zone") | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F018 | a lei de 1912 deu o nome "Canal Zone" | CONFIRMADA | mec-08 | `fontes/annualreportofis1912isth.txt` |
| F018b | a lei de 1912 deu um governador nomeado pelo presidente | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F019 | a lei de 1912 criou um tribunal distrital (federal) com jurados "from among the citizens of the United States" (citação literal) | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F020 | a ordem executiva de 1914 (EO 1885) pôs polícia, escolas e correio sob o governo da Zona | CONFIRMADA | doc-04 | `fontes/documento/app-eo-1885.txt` |
| F021 | a lei de 1912 autorizou o presidente a declarar necessária ao canal toda a terra da Zona | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F021b | até junho de 1915, 3.988 casas particulares destruídas ou removidas ("almost four thousand") | CONFIRMADA | doc-06 | `fontes/documento/annualreportofgo1915cana.txt` |
| F021c | as casas do despovoamento eram "privately owned" | CONFIRMADA | doc-06 | `fontes/documento/annualreportofgo1915cana.txt` |
| F022 | o relatório de 1914 chama o terreno de Balboa de "the permanent gold site at Balboa" (citação literal) | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F022b | e La Boca de "the permanent silver settlement" (citação literal) | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F023 | em 1914 a administração mudou para o prédio novo em Balboa Heights | CONFIRMADA | doc-06 | `fontes/documento/annualreportofgo1915cana.txt` |
| F024 | Balboa é a cidade ao pé de Balboa Heights, a encosta de onde a Zona era governada (forma da Sala, T06/I03) | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F025 | convenção de setembro de 1914 fixou "the permanent boundary line between the City of Panama and the Canal Zone", marco a marco (citação literal) | CONFIRMADA | mec-02 | `fontes/mecanismo/frus1915-d1732.txt` |
| F025b | a convenção é de 02/09/1914 | CONFIRMADA | mec-02 | `fontes/mecanismo/frus1915-d1732.txt` |
| F027 | Balboa foi planejada como cidade permanente, e o plano já tinha "gold" e "silver" | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F028 | as duas palavras eram folhas de pagamento (gold roll / silver roll) | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F029 | o governo da Zona as chamava "gold roll" e "silver roll" | CONFIRMADA | mec-19 | `fontes/mecanismo/frus1948v09-d490.txt` |
| F030 | o relatório de 1940 explica os nomes: na obra, peões pagos em moeda de prata; artesãos qualificados, recrutados sobretudo nos EUA, em ouro | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F031 | em 1940 todos recebiam em dólar, e os nomes ficaram na moradia, no comissário e nos clubes | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F032 | 1920: o "silver roll" descrito como a força antilhana | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F032b | 1930: idem ("a huge percentage of the silver employees are West Indian") | CONFIRMADA | mec-10 | `fontes/annualreportofgo1930cana.txt` |
| F033 | 1940: o "gold roll" era "with a few exceptions, citizens of the United States" e o "silver roll" tinha "a considerable number" de panamenhos (citações literais) | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F033b | 1940: "a considerable number" de panamenhos no silver (citação literal) | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F035 | 1920: clubes "gold" em Balboa e mais quatro cidades; "silver" em La Boca e mais quatro; Gatún e Cristóbal com os dois (F036) | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F036 | Gatún e Cristóbal tinham clube gold e silver (1920) | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F037 | 1920: escolas "white" e "colored"; salário médio mensal do professor US$ 158,46 e US$ 76,00 (a tabela, p. 247; os valores na mesma tabela: "$158. 46" e "$76. 00") | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F037b | os dois valores da tabela de 1920, na ordem das linhas White e Colored | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F038 | 1930: mais de 60 % dos empregados "silver" moravam fora, em Panamá e Colón | CONFIRMADA | mec-10 | `fontes/annualreportofgo1930cana.txt` |
| F039 | em 1940, as escolas gratuitas recebiam os filhos dos "silver" só se o empregado morasse na Zona | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F040 | Balboa, o "gold site", e La Boca, o "silver settlement", lado a lado na entrada do Pacífico (sítio de 1914) | CONFIRMADA | evt-13 | `fontes/evento/annualreportofis1914isth_djvu.txt` |
| F041 | a Zona separava os trabalhadores por folha (duas classes em folhas separadas) | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F043 | tratado assinado em 1936, em vigor desde 1939 | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F043b | em vigor em 27/07/1939 | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F044 | a partir daí, uma lista fechada de quem podia morar na Zona | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F045 | empregados do governo dos EUA, do canal ou da ferrovia, com as famílias | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F046 | membros das Forças Armadas dos EUA, com as famílias | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F047 | empreiteiros, empresas autorizadas, trabalho religioso, de caridade, educacional e científico, e os empregados domésticos de todos | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F047b | as classes (c) a (e) do tratado de 1936 | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F048 | o critério era serviço, não cidadania (nenhuma classe do tratado fala de nacionalidade) | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F049 | ninguém morava na Zona só porque queria (a partir de 1939) | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F051 | relatório de 1950: empregados "U.S.-rate" precisavam de casa de família designada antes de a família ter permissão de vir | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F051b | a regra está sob "For U.S.-rate employees" no relatório de 1950 | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F052 | Mary e Herbert Knapp eram professores nas escolas da Zona | CONFIRMADA | exp-10 | `fontes/experiencia/panamacanalrevie1979pana.txt` |
| F053 | na Review de 01/10/1979, escreveram que todos "lived in rented quarters" e compravam no "commy" (citações literais) | CONFIRMADA | exp-10 | `fontes/experiencia/panamacanalrevie1979pana.txt` |
| F053b | o "commy" (citação literal) | CONFIRMADA | exp-10 | `fontes/experiencia/panamacanalrevie1979pana.txt` |
| F057 | muitos dos outros moradores eram militares (1940: 23.638 em área militar) | CONFIRMADA | esc-10 | `fontes/census-1940-canal-zone.pdf` |
| F058 | 1940: quase metade dos moradores em área militar (45,6 %) | CONFIRMADA | esc-10 | `fontes/census-1940-canal-zone.pdf` |
| F059 | 1970, o último censo americano da Zona, contou local de nascimento, não cidadania (cidadania só dos nascidos fora, Table 8) | CONFIRMADA · lido na imagem | esc-13 | `fontes/escala_humana/img/c1970-t7-top.png` |
| F060 | 1970: mais da metade nascida nos EUA (23.559 de 44.198, 53,3 %), e a conta inclui as bases (Canal Zone total, urbano 2.569 + rural 41.629) | CONFIRMADA · lido na imagem | esc-13 | `fontes/escala_humana/img/c1970-t7-top.png` |
| F063 | Balboa 1960: 1.041 dos 3.139 nascidos na própria Zona ("more than a thousand") | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png` |
| F065 | a resposta é uma frase de lei escrita em 1937 (seção 1 da lei de 04/08/1937) | CONFIRMADA | doc-07 | `fontes/documento/stat-50-558.txt` |
| F066 | nascer na Zona não fazia, por si só, ninguém cidadão (o 8 FAM: filhos de pais estrangeiros nascidos na Zona não adquirem a nacionalidade) | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F067 | pela lei, cidadão se pai ou mãe fosse cidadão no momento do nascimento | CONFIRMADA | doc-08 | `fontes/documento/govinfo-uscode-8-1403.txt` |
| F068 | o Congresso a promulgou em 04/08/1937, retroativa a 26/02/1904, dia em que o tratado de 1903 entrou em vigor | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F068b | retroativa a 26/02/1904 | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F068c | o tratado de 1903 entrou em vigor em 26/02/1904 | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F069 | até então, diz o manual, o nascido na Zona caía na regra geral dos nascimentos no exterior (Section 1993 RS) | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F070 | a regra geral exigia que o pai/mãe cidadão tivesse morado nos EUA antes | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F070b | a lei de 1937 dispensou essa condição, de 1904 em diante | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F071 | o tratado de 1903 nunca disse que a Zona não era parte dos EUA para a nacionalidade (lido o texto inteiro: ele não trata de nacionalidade; só dá os poderes do Art. III) | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F072 | o manual diz que, para a lei de nacionalidade, a Zona "was never considered part of the United States" (citação literal; o qualificador "for purposes of section 201 NA or INA 301" vira "for citizenship law") | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F073 | o mesmo país tinha na Zona todo poder que teria "if it were the sovereign" (Art. III) | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F074 | para os ~1.041 nascidos na Zona moradores de Balboa, a regra era a mesma: cidadãos se um dos pais fosse cidadão no nascimento | CONFIRMADA | doc-08 | `fontes/documento/govinfo-uscode-8-1403.txt` |
| F077 | em 1946, Washington perguntou sobre a divisão (a instrução de 21/02/1946) | CONFIRMADA | mec-17 | `fontes/mecanismo/frus1946v11-d927.txt` |
| F078 | em fevereiro de 1946 o Departamento de Estado mandou à embaixada no Panamá uma instrução "concerning racial discrimination in the Canal Zone" (citação literal) | CONFIRMADA | mec-17 | `fontes/mecanismo/frus1946v11-d927.txt` |
| F079 | o governador da Zona (Mehaffey) respondeu ao embaixador (Hines) | CONFIRMADA | mec-18 | `fontes/mecanismo/frus1946v11-d931.txt` |
| F080 | segundo ele, os "silver" queriam "the complete abolition of any segregation in the Canal Zone" (citação literal) | CONFIRMADA | mec-18 | `fontes/mecanismo/frus1946v11-d931.txt` |
| F081 | conceder isso logo, acrescentou, destruiria as organizações do canal e da ferrovia | CONFIRMADA | mec-18 | `fontes/mecanismo/frus1946v11-d931.txt` |
| F082 | o relatório de 1940 chamara a divisão "a matter of long custom in tropical countries" (citação literal) | CONFIRMADA | mec-11 | `fontes/annualreportofgo1940cana.txt` |
| F083 | os nomes saíram das tabelas de salário em novembro de 1948 (anúncio de 20/11) | CONFIRMADA | mec-19 | `fontes/mecanismo/frus1948v09-d490.txt` |
| F083b | e das placas em locais públicos até dezembro (memorando de 08/12/1948: "recently removed") | CONFIRMADA | mec-19 | `fontes/mecanismo/frus1948v09-d490.txt` |
| F084 | em 1950, os relatórios dividem o salário em "U.S." rates e "local" rates | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F084b | idem, "U.S. rates" | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F085 | o tratado de 1955 prometeu (Memorandum, item 1: "Legislation will be sought") e a lei de 1958 fixou o mesmo salário-base para o mesmo cargo, fosse o empregado cidadão dos EUA ou do Panamá | CONFIRMADA | mec-05 | `fontes/mecanismo/statute-72-pg405.txt` |
| F085b | a promessa de 1955 era buscar legislação (o item 1 do Memorandum) | CONFIRMADA | mec-05 | `fontes/mecanismo/statute-72-pg405.txt` |
| F087 | a partir de 1939, os comissários vendiam SÓ aos próprios empregados e militares, com as famílias. O tratado de 1936 limita as vendas às classes (a) e (b), mas também vende às classes (c), (d) e (e) [empreiteiros, empresas autorizadas, trabalho religioso, educacional etc.] e às famílias delas, quando residem na Zona: o "only" exclui gente que comprava | CORRIGIR (DIVERGE, A1) | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F088 | do fim de 1956, empregados não cidadãos dos EUA que moravam no Panamá perderam o acesso às lojas | CONFIRMADA | mec-20 | `fontes/mecanismo/frus1955-57v07-d161.txt` |
| F089 | o Panamá insistiu, diz o memorando, chamando o acesso antigo de concorrência desleal à sua economia | CONFIRMADA | mec-20 | `fontes/mecanismo/frus1955-57v07-d161.txt` |
| F091 | 1920: escolas "white" e "colored" no relatório | CONFIRMADA | mec-09 | `fontes/annualreportofgo1920cana.txt` |
| F092 | anos 1960: "U.S. citizen schools" e "Latin American schools" nos relatórios (1965 e 1968) | CONFIRMADA | mec-15 | `fontes/pcc-1968_djvu.txt` |
| F092b | idem, relatório de 1965 | CONFIRMADA | mec-14 | `fontes/annualreportpana1965pana.txt` |
| F094 | Balboa 1960: cerca de metade de 3.139 nascidos nos EUA (1.580) | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png` |
| F095 | Paraíso 1960: 7 de 3.113 | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png` |
| F096 | Rainbow City 1960: 3 de 3.688 | CONFIRMADA · lido na imagem | esc-12 | `fontes/mecanismo/census1960-p57-33-table28.png` |
| F097 | no censo de 1950, Rainbow City se chamava Silver City (5.726 moradores, distrito de Cristóbal) | CONFIRMADA · lido na imagem | esc-11 | `fontes/escala_humana/img/c1950-tab19-zoom.png` |
| F101 | de 1960 em diante a bandeira do Panamá passou a tremular na Zona em lugares escolhidos | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F102 | primeiro em Shaler Triangle, praça da Zona na Cidade do Panamá; depois na ponte e nos Administration Buildings | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F102b | a ponte (out/1962) e os Administration Buildings (fim de out/1962) | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F103 | acordo de janeiro de 1963 entre os dois governos: as duas bandeiras onde a autoridade civil hasteasse a americana | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F104 | em 30/12/1963 o governador tirou a bandeira americana fora dos lugares escolhidos | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F105 | nas escolas, a bandeira ficaria só dentro do prédio | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F106 | em 07/01/1964, estudantes da Balboa High School hastearam a bandeira por conta própria, "in defiance of the Governor's orders" (citação literal do Bulletin) | CONFIRMADA | exp-14 | `fontes/experiencia/departmentofstat501964unit.txt` |
| F107 | em 09/01, à tarde (cerca de 16h45), estudantes do Instituto Nacional foram à escola com a bandeira deles | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F108 | uma comissão internacional de juristas, chamada pela Ordem dos Advogados do Panamá, reconstituiu as horas seguintes | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F109 | a polícia deixou uma delegação de cinco levar a bandeira até o mastro; houve empurra-empurra e a bandeira panamenha rasgou | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F109b | a bandeira rasgou no tumulto | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F110 | às 19h os estudantes tinham saído da Zona pela Fourth of July Avenue, diante do Instituto Nacional | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F111 | quatro dias de confronto (09 a 12/01/1964) | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F112 | 4 soldados americanos e 24 panamenhos mortos, segundo o Arquivo Nacional dos EUA (atribuído, decisão da Sala T03) | CONFIRMADA | evt-26 | `fontes/evento/nara-declass-blog-2014-11-03.txt` |
| F113 | outras contas diferem: a CIJ registra 3 soldados americanos mortos (e não fixa total panamenho) | CONFIRMADA | exp-15 | `fontes/experiencia/icj-1964-panama.txt` |
| F114 | em 10/01/1964 o Panamá rompeu relações com os EUA | CONFIRMADA | evt-07 | `fontes/evento/hsg-countries-panama.txt` |
| F116 | o tratado de 1977 abre "in the spirit of the Joint Declaration of April 3, 1964" (citação literal), a que restabeleceu relações | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F116b | a Declaração Conjunta de 03/04/1964 restabeleceu as relações | CONFIRMADA | evt-07 | `fontes/evento/hsg-countries-panama.txt` |
| F117 | o tratado de 1977 é onde a Zona termina (o Panamá reassume a jurisdição sobre a "former Canal Zone") | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F118 | em 07/09/1977, em Washington, Carter e Torrijos assinaram dois tratados | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F118b | eram dois tratados, assinados por Carter e Torrijos em setembro de 1977 | CONFIRMADA | evt-31 | `fontes/evento/nara-treasures-congress-p25.txt` |
| F119 | em abril de 1978 o Senado aprovou o tratado do canal por 68 a 32 | CONFIRMADA | evt-31 | `fontes/evento/nara-treasures-congress-p25.txt` |
| F120 | entrou em vigor em 01/10/1979 e terminou os tratados de 1903, 1936 e 1955 | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F121 | 75 anos depois de os EUA tomarem posse das obras do canal (04/05/1904 -> 01/10/1979 = 75 anos e 4 meses) | CONFIRMADA | evt-10 | `fontes/evento/annualreportist00usgoog_djvu.txt` |
| F121b | o Panamá reassumiu a jurisdição plena sobre a antiga Zona | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F122 | por 30 meses, polícia e tribunais americanos seguiram cobrindo os empregados americanos do canal, os militares e as famílias, em certas áreas | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F122b | jurisdição criminal primária dos EUA sobre empregados cidadãos da Commission, militares e dependentes | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F123 | as escolas da Zona passaram ao Departamento de Defesa | CONFIRMADA | esc-08 | `fontes/escala_humana/pcc1980_djvu.txt` |
| F123b | uma agência americana, a Panama Canal Commission, operou o canal até o fim de 1999 | CONFIRMADA | evt-31 | `fontes/evento/nara-treasures-congress-p25.txt` |
| F124 | a Zona e o seu governo deixaram de existir (o 8 FAM: "ceased to exist"; o Canal Zone Government liquidado em 30/09/1979) | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F124b | liquidação do Canal Zone Government | CONFIRMADA | esc-08 | `fontes/escala_humana/pcc1980_djvu.txt` |
| F125 | em Albrook, Mondale chamou o dia de "a proud day" para os dois povos (citação literal) | CONFIRMADA | exp-19 | `fontes/experiencia/departmentofstatd7979unit.txt` |
| F125b | a cerimônia foi na Albrook Air Force Base | CONFIRMADA | exp-19 | `fontes/experiencia/departmentofstatd7979unit.txt` |
| F126 | em agosto (14/08/1979), o Secretário de Estado escreveu a Mondale que a visita tranquilizaria os empregados americanos de que os EUA "is not abandoning them" (citação literal) | CONFIRMADA | exp-20 | `fontes/experiencia/frus1977-80v29-d239.html` |
| F128 | o tratado deu aos EUA "all the rights, power and authority" na faixa de 10 milhas (citação literal) | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F129 | uma lei deu à Zona um governador e jurados cidadãos dos EUA | CONFIRMADA | mec-03 | `fontes/mecanismo/statute-37-pg560.txt` |
| F130 | um segundo tratado só deixava morar na Zona quem trabalhava ou servia ali, e as famílias | CONFIRMADA | mec-04 | `fontes/mecanismo/statute-53-pg1807.txt` |
| F131 | a folha separava quem trabalhava para o canal: "gold"/"silver", depois "U.S."/"local" rates | CONFIRMADA | mec-12 | `fontes/annualreportofgo1950cana.txt` |
| F132 | "The rule about being born there never changed." Universal: a regra para o nascido na Zona mudou em 1937 (a lei especial substituiu a regra geral e dispensou a residência prévia do pai ou da mãe, o que F070 acabou de dizer). O que nunca mudou foi o princípio: nascer ali, por si só, não bastava | CORRIGIR (DIVERGE, A2) | doc-09 | `fontes/documento/fam-8-302-4.txt` |
| F134 | em 1903, eram os poderes que os EUA teriam "if it were the sovereign" (citação literal) | CONFIRMADA | mec-01 | `fontes/mecanismo/avalon-pan001.txt` |
| F135 | em 1977, o tratado chamou o Panamá de "territorial sovereign" (citação literal) | CONFIRMADA | doc-14 | `fontes/documento/unts-1280-I-21086-en.txt` |
| F136 | hoje, a Autoridade do Canal do Panamá dá como endereço o Administration Building, em Balboa (volátil; lido em 14/10/2026; sem "the same building") | CONFIRMADA | evt-33 | `fontes/evento/acp-en-history.txt` |
| F137 | a cidade continuou onde estava (Balboa é setor do corregimiento de Ancón, MINSA 2015) | CONFIRMADA | evt-37 | `fontes/evento/minsa-paraiso-asis-2009-2014.txt` |
| F138 | a Zona deixou de existir | CONFIRMADA | doc-09 | `fontes/documento/fam-8-302-4.txt` |

`fontes/` = `midia/zona-do-canal/fontes/` (fora do git). O trecho literal de cada linha está na tabela JSON.

VEREDITO: RESSALVA
