# Laudo · crítico de roteiro · rodada 1

Revisão julgada: `6917e62a2155` · data-base 2026-10-14
(sha256 do texto falado pelo `gate.mjs`: `6917e62a2155b91ef7b654397975b18fb78d86419d441948ccd0187ec6a58635`; o portão PASSA, 2.097
palavras, ≈11:24 a 184 palavras/min, 145 frases, média 14,5, maior 33, gancho com 165 palavras e o "But" na palavra 48; 22 alertas de
palavra, todos de citação ou da palavra do fato; taxas todas abaixo do teto; autoplágio literal vazio.)

Rubrica lida nesta sessão: o ofício da pré-v1 (`crafts/critico-de-roteiro/OFICIO.md`, `CONTRATO.md`, `SPEC.md`), `marca/voz.md`,
`marca/embalagem.md` §1–§2, `marca/cta.md` §1–§3, as operações e as armadilhas de `out/_analises/estudo-roteiro/` (L5 e o item 1 e
o item 3 do `cetico.md`). Contra o quê: `roteiro-editor.md` (a lista "De onde vem cada frase" e o livro-razão existem e foram usados),
`pautas/zona-do-canal/fundamento.md` inteiro (com "O que não se diz", os riscos, o que ficou aberto e "Nomes e regras de pauta") e o
`fundamento.json` consultado pelos ids, `_trabalho/plano-final.json` (as `ponte_saida` e a `troca_pronta_I05`) e as decisões da Sala
de 14/10/2026. Sem rede: o spot-check foi no JSON e nas cópias locais de `midia/zona-do-canal/fontes/`. Não li os outros laudos da
rodada (`locucao-r1`, `subtracao-r1`): esta lente não defere a crítica anterior.

VEREDITO: FAIL
(REPROVADO pela escala do CONTRATO §3: há erros de fato do tipo "universal" e uma regra de pauta quebrada, nenhum deles estrutural. O
pior é o par gancho × p7: o gancho diz que polícia e tribunais respondiam a Washington "until October 1, 1979", e o dossiê avisa,
nesta forma exata, que para os americanos eles seguiram até 1982 (`doc.afi-36`); o p7 não diz isso ao ouvido. Os quatro graves se
consertam com uma oração cada. A espinha, o gancho e a ordem das partes estão certos e não se mexem.)

NOTAS: Sotaque de máquina 7/10 · Storytelling e retenção 7.5/10 · Voz alta 8/10 · Factual e atribuição 6/10 · Embalagem e promessa 8/10

**Destes 22 achados, valem 12** (os 4 graves e os 8 médios); os 10 leves são polimento, aplicáveis em lote. As 21 trocas com redação
(todas menos o PEDIR do achado 5), aplicadas juntas numa cópia fora do repositório (scratchpad), casam uma vez cada e passam no
`gate.mjs`: 2.045 palavras (≈11:07, acima do piso de 1.950), média 14,7, maior frase 33, gancho intacto (165 palavras, "But" na
palavra 48), autoplágio vazio. Nenhuma troca encosta no gancho.

ACHADOS:

1. [GRAVE · Factual + Embalagem (a ressalva que não propagou) · QUALIFICAR] `The transition ran thirty months, and an American agency, the Panama Canal Commission, ran the canal until the end of 1999.`
   → O gancho promete, nas 3 primeiras frases: "its police, courts and schools answered to Washington. Until October 1, 1979." O
   dossiê marca esta frase como armadilha: "Cuidado com 'American police and courts until 1979': para americanos, em áreas do canal
   e das bases, eles seguiram até 1982" (`doc.afi-36`; Art. XI(4) do tratado de 1977, "the United States of America shall retain
   police authority and maintain a police force in the aforementioned areas"; PL 96-70 §2201(a), o tribunal distrital e os de
   magistrado "shall be continued"). O título é do Lucas e o gancho fica; quem paga a promessa com honestidade é o p7. Hoje ele diz
   só "The transition ran thirty months", e o ouvido não sabe transição de quê: a ressalva está na tela ("30 MONTHS · MARCH 31,
   1982") e não na voz. Pela régua da ESCALA, o hedge foi feito numa instância e cravado na outra.
   → TROCA: `For thirty months more, American police and courts still covered the canal's American employees, the military and their families, in certain areas. An American agency, the Panama Canal Commission, ran the canal until the end of 1999.`
   → RAIZ: RESSALVA NÃO PROPAGADA

2. [GRAVE · Factual (universal) · QUALIFICAR] `So before anyone was born in Balboa, the plan for it already had two words in it:`
   → "Before anyone was born in Balboa" é universal sem fonte, e o próprio dossiê o desmente: em 1912 a cidade de Balboa tinha 1.146
   moradores (`mec-08`, censo da comissão de 01/02/1912; fundamento, "O mapa", Balboa (town)). O que o relatório de 1914 (`evt-13`)
   sustenta é que o plano da cidade PERMANENTE, de 1913–1914, já nasceu com "gold" e "silver". É a `ponte_saida` do plano: a troca
   escreve a ponte nova no mesmo lugar, sem fato novo (R09: "In 1913, the canal's builders planned Balboa as a permanent town").
   → TROCA: `So when Balboa was planned as a permanent town, the plan already had two words in it:`
   → RAIZ: PONTE DO PLANO

3. [GRAVE · Factual (regra de pauta I06; conclusão por justaposição) · CORTAR + REDIZER] `The word on the sign was now "citizen." The 1960 census shows the map that went with it.`
   → Três faltas em duas frases. (1) I06 manda mostrar os dois pares de escola, cada um com o ano, e "não dizer que um virou o outro
   ('renamed', 'became') nem quando mudou". "The word … was now" é exatamente "virou". (2) "On the sign" é figura que diz mais que o
   fato: "U.S. citizen schools" é palavra de relatório (1965, 1968; `doc.afi-23`), não de placa; as placas que o vídeo nomeou são as
   de "gold" e "silver", tiradas em 1948, e o ouvido junta as duas. (3) "The map that went with it" cola a rede de escolas nas
   cidades do censo: rotula Balboa como a cidade "citizen" e Paraíso e Rainbow City como as outras, o que I15 e N12 proíbem (o
   relatório de 1965 conta "U.S. citizen communities" sem listar cidades). Os números de 1960 que seguem ficam: são o 3º toque de
   Balboa e o 2º de Paraíso e Rainbow City, e servem de mapa, desde que a voz não diga que eles são o retrato das escolas.
   → TROCA: `Now the 1960 census, town by town.`
   → RAIZ: FIGURA + JUSTAPOSIÇÃO

4. [GRAVE · Factual (universal no payoff) · QUALIFICAR] `And a payroll, which sorted everyone inside it:`
   → "Everyone inside it" ("it" é a linha) é falso pelo próprio roteiro: p3 diz que "many of the others inside the line were soldiers"
   e que em 1940 "nearly half of the Zone's residents lived in military areas" (`esc.num-14`). Soldado não estava no "gold roll" nem
   no "silver roll": as duas folhas eram dos empregados do canal e da ferrovia (`mec.afi-16`: "all employees are now paid…"). É a
   resposta à pergunta do título, a frase que o espectador leva. Vale também se o achado 5 for feito: a reescrita não pode devolver
   o "everyone".
   → TROCA: `And a payroll, which sorted the people who worked for the canal:`
   → RAIZ: PONTUAL

5. [MÉDIO · Sotaque de máquina (autoplágio de esqueleto; anáfora empilhada) + Storytelling (fecho que recapitula) · PEDIR] `A treaty, which granted the United States "all the rights, power and authority" within a band ten miles wide.`
   → O parágrafo inteiro de p7 que vai de "So what made Balboa American, if being born there didn't?" (a 2ª ocorrência, ≈10:27) até
   "…and it is still on the books." O laudo de Los Angeles deixou a observação para o vídeo 3: o fecho do Juneau e o de LA têm o
   mesmo esqueleto, "So" + a pergunta do gancho repetida + a recapitulação + um par curto com "never" ou "still", e "a terceira vira
   molde da casa". Este é o terceiro, com as quatro peças: "So what made…?", a lista, "never changed", "still on the books". O portão
   não pega porque é paráfrase (o `autoplagio` sai vazio); o ofício diz que paráfrase não escapa. Por dentro, a lista é anáfora
   retórica de quatro membros com o mesmo molde ("A treaty, which… A law, which… A second treaty, which… And a payroll, which…"),
   e cada membro repete quase palavra por palavra o que p1 e p3 já disseram ("all the rights, power and authority" e "ten miles
   wide" pela 3ª vez; os jurados cidadãos pela 2ª). Aos 10:27, quem ouviu o vídeo antecipa a lista na primeira oração.
   → O QUE FALTA (sem redação): a resposta chegar sem a pergunta do gancho repetida literalmente e sem a lista em molde paralelo; os
   quatro elementos podem ficar, mas ditos como consequência do que p7 acabou de contar (o último dia, Mondale e a carta de Vance
   aos empregados americanos), e não como recapitulação. O fecho do parágrafo não pode ser o par "never"/"still": se a regra do
   nascimento ficar, só com o que está lido (a mesma regra no U.S. Code, edição de 2024, `doc-08`), sem "never changed", que é
   universal sem uma fonte que compare as versões de 1937 a hoje. A reescrita mantém a correção do achado 4. O par dos tratados
   que vem depois ("In 1903… "if it were the sovereign."" / "In 1977… "territorial sovereign."") e a coda não entram no pedido.
   → RAIZ: MOLDE DA CASA

6. [MÉDIO · Storytelling (referência órfã; ponte causal entre períodos) · CORTAR] `That is why the number for the whole Zone says less than it seems.`
   → Três faltas numa frase de dobradiça. (1) "The number for the whole Zone": o ouvinte não ouviu nenhum número da Zona inteira até
   aqui (o gancho só deu Balboa, Paraíso e Rainbow City), e o artigo definido aponta para nada. (2) "That is why" faz do dado de
   1940 (área militar) a causa de um número de 1970: composição de dois períodos numa ponte causal, a armadilha da frase do período
   errado. (3) É anúncio do narrador sobre a própria informação. A ressalva T10 já está na frase seguinte, com o ano certo ("the
   count took in the bases along with the towns"), e é ela que paga a decisão da Sala.
   → TROCA: cortar a frase (nada a pôr no lugar).
   → RAIZ: DOBRADIÇA

7. [MÉDIO · Sotaque de máquina (metrônomo; auto-elogio de rigor) · CORTAR] `The census recorded only where they were born, not whether they were citizens.`
   → A ressalva "o censo contou nascimento, não cidadania" é dita quatro vezes: no gancho ("It counted where they were born."), em p3
   ("counted birthplaces, not citizens", ≈5:10), aqui (≈5:25) e em p4 ("The census never asked.", ≈6:30). Pelo ofício §4.4, a
   honestidade se diz uma vez; a segunda muda de forma, e a quarta já soa como o texto se elogiando. E é aqui que o molde "X, not
   citizens/citizenship/passport" fica audível: "by payroll, not by passport" (≈4:00), "service, not citizenship" (≈4:20),
   "birthplaces, not citizens" (≈5:10) e esta, a quarta em 85 s. Ficam a do gancho, a do 1970 (o livro-razão a usa para pagar
   S8–S9) e "The test was service, not citizenship." (a tese de p3).
   → TROCA: cortar a frase (o parágrafo segue "…born in the Zone itself. So what was a child born in Balboa, in the eyes of American law?").
   → RAIZ: MOLDE

8. [MÉDIO · Sotaque de máquina (metrônomo dos fechos; figura decorativa) + Factual (universal) · CORTAR] `The census never asked. So the law that ran the ground left the child to the parents' papers. `
   → Os fechos de parte abrem com "So" em p1 ("So before anyone…"), p2 ("So the Zone sorted…"), p3 ("So what was a child…") e aqui
   em p4 (≈6:32): no quarto, o ouvinte já antecipa a fórmula. A taxa de 100 % de fecho com soco é defeito (ofício §4.1); as duas
   partes que devem acabar em prosa comum são esta e p6 (achado 20). "The law that ran the ground" e "the parents' papers" não passam
   no teste de remoção: dita com a palavra comum, a frase é "a cidadania dependia da dos pais", que o próprio parágrafo acabou de
   dizer ("citizens if a parent had been one at the time of the birth"). "The census never asked" é a 4ª ressalva do achado 7 e um
   "never" que só vale para os nascidos nos EUA e na Zona, não para os nascidos fora (a cidadania deles foi tabulada, `esc.afi-01`).
   A ponte do plano continua no que fica: "The sorting was done elsewhere: on the payroll. And in 1946, Washington asked about it."
   → TROCA: cortar as duas frases (nada a pôr no lugar).
   → RAIZ: MOLDE

9. [MÉDIO · Factual (a citação que diz mais que a fonte) · CORRIGIR] `would wreck the canal and the railroad.`
   → O governador escreveu "without wrecking the Panama Canal and Panama Railroad organizations" (FRUS 1946, XI, doc. 931; `mec-18`,
   `mec.afi-22`). Ele falava das organizações (a agência se chamava "The Panama Canal"), não da hidrovia. "Wreck the canal" no
   ouvido americano é o canal parando, e põe na boca dele uma ameaça maior que a escrita. A frase é atribuída; por isso mesmo tem de
   ser fiel ao mecanismo.
   → TROCA: `would wreck the canal and railroad organizations.`
   → RAIZ: PONTUAL

10. [MÉDIO · Factual (composição de períodos) · DATAR] `The Zone's free schools took their children only if the family lived inside.`
   → Vem logo depois de "In 1930, more than 60 percent…", e o ouvido data a regra em 1930. Ela é do relatório de 1940, p. 92 ("Free
   school privileges are granted to children of silver employees … only when such employees reside on the Canal Zone"; `mec-11`,
   `mec.afi-21`). O roteiro-editor registra que "a frase não dá ano"; é exatamente o problema. I07 proíbe encadear 1930 e 1940.
   → TROCA: `By 1940, the Zone's free schools took their children only if the family lived inside.`
   → RAIZ: PONTUAL

11. [MÉDIO · Voz alta (colisão de sentido) + Nomes · REDIZER] `The cities of Panama and Colón sat inside those limits`
   → No ouvido, "the cities of Panama and Colón" se ouve como "as cidades panamenhas", e a primeira menção da capital na voz é esta.
   A regra de nomes da pauta: "Na 1ª menção, 'Panama City, the capital' (o público americano pode pensar na Panama City da
   Flórida). 'The city of Panama' só em citação do tratado de 1903." Aqui não é citação.
   → TROCA: `Panama City, the capital, and Colón sat inside those limits`
   → RAIZ: PONTUAL

12. [MÉDIO · Sotaque de máquina (tique intra-roteiro: a coda ensaiada) + Voz alta (subtexto) · REDIZER] `The payroll had lost its names. The line had not.`
   → É o mesmo esqueleto da coda ("The town stayed where it was, below the hillside. The Zone that made it American did not."):
   afirmação + frase curta com o sujeito novo e o verbo negado. Ensaiado em p5 (≈8:16), o molde chega gasto ao último segundo do
   vídeo, onde ele é o melhor fecho do texto. E, ao pé da letra, "the line had not [lost its names]" não diz nada: a linha nunca
   teve nome; o sentido ("a linha continuou") fica por subtexto. A ponte do plano continua.
   → TROCA: `The payroll had lost its names. The line was still there.`
   → RAIZ: MOLDE

13. [LEVE · Factual (data de outro ato) · CORRIGIR] `Congress passed it on August 4, 1937, and made it reach back to February 26, 1904,`
   → 04/08/1937 é a data da sanção: "Approved, August 4, 1937." (50 Stat. 558, cópia local `stat-50-558.txt`, l. 38). Quando o
   Congresso votou não foi lido. É a mesma família do "the Senate ratified" que a pauta veta.
   → TROCA: `It became law on August 4, 1937, and reached back to February 26, 1904,`
   → RAIZ: PONTUAL

14. [LEVE · Factual (anacronismo) · QUALIFICAR] `five on each side of the canal, to build`
   → Em 1903 o canal não existia; o Art. II mede "five miles on each side of the center line of the route of the Canal to be
   constructed" (`doc.afi-03`), e a própria frase termina em "to build".
   → TROCA: `five on each side of the canal's route, to build`
   → RAIZ: PONTUAL

15. [LEVE · Voz alta (dupla negação em fragmento) · REDIZER] `From the end of 1956, not even to employees who were not citizens of the United States and lived in Panama.`
   → "Not even to employees who were not" é dupla negação num fragmento que depende do verbo da frase anterior; na voz sintética, o
   ouvinte perde quem perdeu o acesso.
   → TROCA: `From the end of 1956, employees who were not citizens of the United States and lived in Panama lost that access.`
   → RAIZ: PONTUAL

16. [LEVE · Factual (escopo) · QUALIFICAR] `sold only to its own employees and soldiers.`
   → O Art. III(1) de 1936 limita a venda às classes (a) e (b), que são empregados e militares "and members of their families
   actually residing with them" (`mec.afi-30`, `doc.afi-10`). Com o "only", a frase tira as famílias da loja.
   → TROCA: `sold only to its own employees and soldiers, with their families.`
   → RAIZ: PONTUAL

17. [LEVE · Factual (ano derivado) · QUALIFICAR] `Silver City until the early 1950s:`
   → "Early 1950s" é ano derivado: o que está lido é Silver City no censo de 1950 (`esc.afi-07`) e Rainbow City na Review de
   06/08/1954 (`mec-16`; nomes: "renamed Rainbow City by 1954"). Se a troca foi em 1954, "early" erra.
   → TROCA: `called Silver City in 1950:`
   → RAIZ: PONTUAL

18. [LEVE · Voz alta (carga de nomes) · REDIZER] `lists "gold" clubhouses at Balboa, Ancón, Pedro Miguel, Gatún and Cristóbal, and "silver" clubhouses at La Boca, Red Tank, Paraíso, Gatún and Cristóbal.`
   → Dez topônimos num fôlego (≈3:18), dois deles repetidos, quatro com risco de pronúncia (folha do vídeo), e Red Tank, que não
   aparece em nenhum outro lugar do vídeo nem nos censos. O ouvido não segura; o mapa segura (o roteiro-editor já põe os pontos com
   "1920"). Ficam na voz os três nomes que o vídeo usa: Balboa, La Boca e Paraíso (este paga o gancho).
   → TROCA: `lists "gold" clubhouses at Balboa and other towns, and "silver" clubhouses at La Boca, Paraíso and others.`
   → RAIZ: PONTUAL

19. [LEVE · Voz alta (referência ambígua) · REDIZER] `in front of their school,`
   → A última escola nomeada é a Balboa High School ("walked to the school carrying their own flag"); "their school" pede ao ouvinte
   que descubra que é o National Institute. É também o único ponto em que a avenida vira linha, e a pauta só aceita esse trecho
   (T09): o nome tira a dúvida.
   → TROCA: `in front of the National Institute,`
   → RAIZ: PONTUAL

20. [LEVE · Storytelling (metrônomo: a segunda parte em prosa comum) · CORTAR] ` The question of who belonged had moved from the payroll to the flagpole.`
   → Fórmula de fecho por cima da ponte do plano, que vem logo depois ("The 1977 treaty opens…"). "Payroll → flagpole" é o resumo
   que o espectador acabou de viver; o ofício pede que duas partes terminem sem soco, e esta é a segunda (a primeira é p4, achado
   8). Sem ela, p6 vai de "Panama broke off relations" ao preâmbulo de 1977, que é fato e já é ponte.
   → TROCA: cortar a frase (nada a pôr no lugar).
   → RAIZ: MOLDE

21. [LEVE · Coesão (artigo definido sem antecedente) · QUALIFICAR] `and off the signs by December.`
   → A voz nunca disse que havia placas "gold" e "silver": p2 listou pagamento, casa, comissariado e clubes. A fonte diz onde elas
   estavam ("The last "gold" and "silver" signs in public places have been recently removed", `mec.afi-23`).
   → TROCA: `and off the signs in public places by December.`
   → RAIZ: PONTUAL

22. [LEVE · Factual (escala do achado 4) · QUALIFICAR] `So the Zone sorted its people by payroll, not by passport.`
   → A mesma afirmação do achado 4, um vídeo antes: "its people" são todos os da Zona, e a folha só sorteava empregados. Em p2 os
   soldados ainda não entraram, e por isso é leve; mas, se o fecho troca "everyone" por "the people who worked for the canal", a
   ponte de p2 tem de dizer o mesmo. É a `ponte_saida` do plano, mantida.
   → TROCA: `So the Zone sorted its workers by payroll, not by passport.`
   → RAIZ: ESCALA

RISCO DE ABANDONO (a 184 palavras/min, pela contagem do portão):
- O maior fica entre ≈1:30 e 2:10. Depois do gancho, p1 empilha documento sobre documento: o Art. II, o Art. III lido inteiro (25
  palavras de linguagem de tratado), a lei de 1912 duas vezes, a ordem executiva de 1914 e o relatório de 1914, sem pessoa e sem
  Balboa na voz desde 0:54. O resgate é "That is the town you saw first" (≈2:12). Não pede corte (cada documento é uma das quatro
  respostas); pede que a tela carregue: a mesa com a folha de cada ato e o anel de Balboa aceso enquanto a voz lê leis.
- O segundo, entre ≈3:18 e 3:40: os dez clubes e os dois salários com centavos em 20 s (achado 18).
- O terceiro, entre ≈5:10 e 6:35: a ressalva do censo três vezes em 80 s e o quarto fecho com "So" (achados 7 e 8).
- O quarto, ≈10:27: a pergunta do gancho repetida e a lista anuncia que o vídeo virou recapitulação, com 1 min de fala pela frente
  (achado 5). O par dos tratados e a coda seguram, mas chegam depois do aviso.

VARREDURA "ESTADO DO MUNDO" (toda frase no presente ou que diz que algo continua):
- `and it is still on the books`: CONFIRMADA e datada pela fonte: 8 U.S.C. § 1403(a), U.S. Code edição 2024 (`doc-08`), com o texto
  da lei de 1937 (`doc-07`). O "never changed" que vem antes é o problema (achado 5), não o "still".
- `Today, the Panama Canal Authority gives its address as the Administration Building, in Balboa.`: CONFIRMADA, volátil (`evt.A20`,
  `evt-33`, lida em 14/10/2026). Reconferir na véspera da gravação. Sem "the same building" (N14): está certo.
- `the State Department's manual says` / `For citizenship law, it says, the Zone "was never considered part of the United States."`:
  CONFIRMADA (8 FAM 302.4-2 a, `doc-09`, lida em 14/10/2026); o presente é o do manual em vigor.
- `The town stayed where it was, below the hillside.`: passado; não afirma o estado de hoje além do endereço da ACP. Confirmada.
- Os presentes de documento ("calls", "lists", "opens", "sort", "describe") são de texto histórico, não de estado do mundo.
- As trocas novas com "still" (achados 1 e 12) estão no passado ("still covered", 1979–1982; "was still there", 1950s).

SPOT-CHECK (JSON e cópias locais, sem rede):
- O fim em 1979 para polícia e tribunais: CORRIGE A VOZ. Art. XI(4) e PL 96-70 §2201(a) (`doc.afi-36`): polícia e tribunais dos EUA
  seguiram para os americanos nas áreas cedidas até 31/03/1982 (achado 1).
- Balboa antes de 1914: 1.146 moradores em 1912 (`mec-08`; fundamento, "O mapa"). O "before anyone was born" não se sustenta (achado 2).
- A carta do governador em 1946: "without wrecking the Panama Canal and Panama Railroad organizations" (`mec.afi-22`, doc. 931): as
  organizações, não o canal (achado 9).
- A lei de 1937: "Approved, August 4, 1937." (`midia/zona-do-canal/fontes/documento/stat-50-558.txt`, l. 38): sanção, não votação
  (achado 13).
- Os Knapp professores: CONFIRMADO. "Mary and Herbert Knapp are teachers in the Canal Zone schools." (nota da Review de 01/10/1979,
  `midia/zona-do-canal/fontes/experiencia/panamacanalrevie1979pana.txt`, l. 5024–5025).
- A bandeira tirada em 30/12/1963 "everywhere outside the chosen sites": CONFIRMADO como a CIJ conta ("In other places, where the
  United States flag hitherto used to be flown, it was taken down by the Governor's orders on December 30,1963", §19,
  `icj-1964-panama.txt`, l. 569–571), no quadro do acordo das bandeiras civis. Não é achado.
- A ESCALA de Balboa em 1960: as quatro instâncias batem com a Table 28 (`esc.num-35`): "about half of its 3,139" (gancho, p5),
  "more than a thousand … born in the Zone itself" (p3) e "the thousand-odd" (p4) = 1.580 e 1.041 de 3.139. Paraíso (7 de 3.113) e
  Rainbow City (3 de 3.688) iguais no gancho e em p5. "A band ten miles wide" igual nas três vezes. "Seventy-five years" (p7) de
  04/05/1904 a 01/10/1979: certo, e nunca 76.
- Os 1920 de clubes e salários: CONFIRMADOS no JSON (`mec.afi-20`, pp. 27–28; `mec.num-16`, p. 247 na imagem).
- O 1940 "with a few exceptions, citizens of the United States" e "a considerable number" de panamenhos: CONFIRMADOS (`mec.afi-17`,
  p. 63).

DECISÕES SOBRE OS ALERTAS DO PORTÃO: os 22 alertas de palavra (citizens ×13, citizenship ×2, white ×2, sovereign ×4, segregat ×1)
foram lidos um a um e são citação atribuída ou a palavra do fato; nenhum fica como achado por si. Os que pesam já estão acima por
outro motivo: "The census recorded only… not whether they were citizens" (achado 7) e o "citizen" do sinal (achado 3). As taxas estão
abaixo do teto; o metrônomo que o portão não conta (a família "X, not citizens/passport" e o fecho com "So") está nos achados 7, 8 e
20.

O QUE ESTÁ FORTE:
- **O gancho de cinco tempos paga o título nas 3 primeiras frases**, com a cidade de verdade, o que a fazia americana e o 1979, e
  vira com um "But" que é o próprio paradoxo do vídeo ("But being born in Balboa didn't, by itself, make you an American."). O
  contraste de Paraíso e Rainbow City sai do mapa, e a segunda virada ("no census of the Zone published how many of its residents
  were citizens") é fato documentado na forma exata de I14. A decisão da Sala para Balboa (T06) entra sem "seat of government".
- **O par de p4**: "For citizenship law, it says, the Zone "was never considered part of the United States."" seguido de "The same
  country held, inside that Zone, every power it would have "if it were the sovereign."" São duas frases do próprio governo
  americano, lado a lado, sem o narrador arbitrar (I01). É a revelação do vídeo, e ela volta no fecho com o "territorial sovereign"
  de 1977, uma citação por cartão.
- **A disciplina de atribuição nas partes mais delicadas**: 1946 com três donos (o Departamento de Estado, o governador, o relatório
  de 1940), "racial" uma vez e entre aspas; 1964 com o Bulletin, a comissão de juristas "called in by Panama's bar association", a
  bandeira que rasga sem agente e a contagem na forma literal da Sala; a lista de 1939 ("The test was service, not citizenship.").

NÃO TOCAR:
- O gancho inteiro, S1 a S10 e a assinatura, como está. "The town below Balboa Heights, where the Panama Canal Zone was run from"
  é a forma alternativa que o próprio I03 aceita; "Until October 1, 1979." fica (o achado 1 conserta no p7, não aqui); "under a
  1903 treaty" fica, porque "under" não diz que o tratado criou as instituições (I05) e o gancho tem de nomear o tratado.
  **A `troca_pronta_I05` do plano não deve ser usada**: o S5 dela ("a band … that a 1903 treaty had put in American hands") soa
  como posse, a família de "owned" que "O que não se diz" proíbe.
- "Up the canal" e "On the Atlantic side" (nunca "next door", T08); "born in the United States" em todo número de censo.
- O par de p4 (o FAM e o "if it were the sovereign") e o par dos tratados no fecho, cada citação no seu cartão.
- "The test was service, not citizenship." e "Nobody lived in the Zone just because they wanted to." (a reserva da inscrição).
- "The job came first. Then the house. Then the family." É a cama da inscrição (≈4:51, 42 %), sem "here" e sem número; a tríade é a
  única do texto e está no lugar certo.
- "Now go back to Balboa." e "That is the town you saw first: Balboa, the town at the foot of Balboa Heights, the hillside the Canal
  Zone was run from." (a forma inteira da Sala e o resgate do minuto 2).
- p6 de "On January 7, 1964" até "Other counts differ.", com o "in defiance of the Governor's orders" atribuído ao Bulletin, a data
  de 07/01 (T01) e a contagem na forma da Sala (T03).
- "Four days", nunca "riots"; "the Senate approved", nunca "ratified"; "took back full jurisdiction"; "ceased to exist" sem aspas.
- As pontes do plano que os achados mantêm: "Those two words were payrolls.", "The next rule decided who could live inside the line
  at all.", "So what was a child born in Balboa, in the eyes of American law?", "The sorting was done elsewhere: on the payroll. And
  in 1946, Washington asked about it.", "And the next fight over the line was about a flag." e "The 1977 treaty opens … That treaty
  is where the Zone ends."
- A coda "The town stayed where it was, below the hillside. The Zone that made it American did not." (sob a pergunta de
  comentário). O achado 12 existe para protegê-la.
- O McCain fora e o presente fora (só o endereço da ACP): as duas decisões da Sala estão cumpridas.

Nota para a rodada 2 (não é achado): se o PEDIR do achado 5 voltar com o fecho reescrito, o primeiro a medir é o esqueleto contra os
fechos do Juneau e de Los Angeles, à mão (o portão só pega 6 palavras iguais). Depois desta rodada, a lista de trocas tende a criar
resíduo: os achados 1, 2 e 4 são os que mudam o que vai ao ar; o resto é dose.
