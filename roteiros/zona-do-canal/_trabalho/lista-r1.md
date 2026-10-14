# Lista fechada · rodada 1 · zona-do-canal

Revisão julgada: `6917e62a2155`

> O doutor de roteiro, 14/10/2026, sobre os cinco laudos da bancada da r1 (`qc-roteiro/roteiro-r1`, `clareza-r1`, `locucao-r1`,
> `fatos-r1`, `subtracao-r1`; todos com "Revisão julgada: `6917e62a2155`"). A lista que o aplicador lê é `lista-r1.json`; os
> pedidos ao escritor, `pedidos-r1.json`. Nada foi aplicado ao roteiro.

## O resultado

- **29 trocas** (L01–L29), de 60 achados das cinco lentes (roteiro 22, clareza 10, locução 10, fatos 13, subtração 3 cortes + 2 suspeitas).
  Entram os 6 GRAVE (roteiro 1–4, clareza 1 na parte do corpo, locução A1 nas duas partes) e os 13 de fatos (A1–A6 e L1–L7),
  menos o que um NÃO TOCAR ou o sagrado segura (abaixo, com o motivo). Ops do aplicador: QUALIFICAR → ESTREITAR, DATAR e
  CORRIGIR → DA-FONTE (com o número ou o nome da fonte) ou ESTREITAR; a op da lente fica em `op_lente`.
- **2 pedidos ao escritor** (`pedidos-r1.json`): P01 (clareza:4, p4, a lei de 1937 sem dizer o que mudou) e P02 (clareza:10, p6, o
  porquê de 30/12/1963). O PEDIR do roteiro (achado 5) ficou fora: ver "Conflitos".
- **`aplicar-lista.mjs zona-do-canal --lista=roteiros/zona-do-canal/_trabalho/lista-r1.json --seco`: exit 0** (SECO_OK), 29 itens, 26
  diferenças, nenhuma frase sem item, nenhum aviso, provas do editor todas casando uma vez; texto falado `6917e62a2155` →
  `d49183e2342d`.
- **O portão na cópia** (`_trabalho/_tmp-lista-r1.md`, as mesmas trocas aplicadas por script): **PASSA**, sha `d49183e2342d` (o mesmo
  do aplicador), 2.106 palavras (≈11:27), 28 parágrafos, 150 frases, média 14,1, maior 33; gancho com 166 palavras até a assinatura
  (+1: "where" → "the hillside"), "But" na palavra 49; 20 alertas de palavra (eram 22; saíram os dois "citizens" cortados); taxas
  todas abaixo do teto; autoplágio vazio. Parágrafos de 43 a 106 palavras (a regra é 40 a 110). Os dois pedidos podem somar ou
  tirar umas 20 palavras: a faixa (1.950–2.150) aguenta.

## As trocas

### L01 · REDIZER (lente: REDIZER) · locucao:A1(a) GRAVE, subtracao:SUSP-01

- SAI: "This is Balboa, the town below Balboa Heights, where the Panama Canal Zone was run from."
- ENTRA: "This is Balboa, the town below Balboa Heights, the hillside the Panama Canal Zone was run from."
- Por quê: Dito, o 'where' pode prender-se à cidade (a sede que a Sala vetou, T06) na 1ª frase do vídeo; 'the hillside' é a forma de I03. Mesmo número de palavras: o gancho fica com 165.
- editor: 3 par(es)

### L02 · ESTREITAR (lente: QUALIFICAR) · roteiro:14

- SAI: "five on each side of the canal, to build"
- ENTRA: "five on each side of the planned canal, to build"
- Por quê: Em 1903 o canal não existia: o Art. II mede da linha da rota do canal 'to be constructed' (doc.afi-03). 'planned' em vez de 'the canal's route' para o 'it' de 'to build, run and protect it' continuar no canal.
- editor: 1 par(es)

### L03 · DA-PAUTA (lente: REDIZER) · roteiro:11, locucao:A8(a)

- SAI: "The cities of Panama and Colón sat inside those limits"
- ENTRA: "Panama City, the capital, and Colón sat inside those limits"
- Por quê: Dito, 'the cities of Panama' soa 'as cidades do país'. 1ª menção da capital: a regra de nomes pede 'Panama City, the capital'. DA-PAUTA porque o nome entra pela regra de nomes do dossiê (o aplicador barra nome novo em REDIZER).
- editor: 1 par(es)

### L04 · REDIZER (lente: REDIZER) · clareza:3, locucao:A1(b) GRAVE

- SAI: "That is the town you saw first: Balboa,"
- ENTRA: "The town you saw first is Balboa,"
- Por quê: O 'That' prende-se ao prédio de Balboa Heights da frase anterior. Some o 'That'; a forma da Sala (Balboa, the town at the foot of Balboa Heights, the hillside...) fica literal, como pedem os NÃO TOCAR de roteiro e subtração.
- editor: 2 par(es)

### L05 · ESTREITAR (lente: QUALIFICAR) · roteiro:2 GRAVE, fatos:A3

- SAI: "So before anyone was born in Balboa, the plan for it already had two words in it:"
- ENTRA: "So when Balboa was planned as a permanent town, the plan already had two words in it:"
- Por quê: Universal desmentido pelo dossiê (1.146 moradores em 1912, mec-08). É a ponte_saida de p1: a ponte nova vai na mesma troca, com 'the plan … two words' e 'gold'/'silver' intactos.
- editor: 1 par(es)

### L06 · REDIZER (lente: CORTAR) · subtracao:SUB-03

- SAI: "The Zone paid its people from two payrolls, which its government called the"
- ENTRA: "The Zone's government called them the"
- Por quê: Repete 'payrolls' logo depois da ponte 'Those two words were payrolls.' e diz 'its people' para o que eram empregados (a mesma afirmação que roteiro:4 e roteiro:22 estreitam). −7 palavras.
- numerais que saem: two · editor: 1 par(es)

### L07 · DA-FONTE (lente: REDIZER) · clareza:8, locucao:A4, roteiro:18

- SAI: "lists "gold" clubhouses at Balboa, Ancón, Pedro Miguel, Gatún and Cristóbal, and "silver" clubhouses at La Boca, Red Tank, Paraíso, Gatún and Cristóbal."
- ENTRA: "lists "gold" clubhouses at Balboa and four other towns, and "silver" clubhouses at La Boca and four others. Gatún and Cristóbal had both."
- Por quê: Dez topônimos em ~10 s; o que importa (Gatún e Cristóbal nos dois lados) passava por engano da voz. Os nomes vão ao mapa. 'four' x2 vem da própria lista de 1920 (cinco de cada lado): DA-FONTE, não REDIZER.
- numerais novos: four, four · editor: 1 par(es)

### L08 · REORDENAR (lente: REORDENAR) · locucao:A5

- SAI: "and prints what it paid their teachers: $158.46 a month, on average, in the first, and $76.00 in the second."
- ENTRA: "and prints what it paid their teachers on average: in the first, $158.46 a month; in the second, $76.00."
- Por quê: Dito, 'a month, on average, in the first' soa 'no primeiro mês'. A ordem nova cola cada escola ao salário dela.
- editor: 1 par(es)

### L09 · DA-FONTE (lente: DATAR) · roteiro:10, fatos:L2

- SAI: "The Zone's free schools took their children only if the family lived inside."
- ENTRA: "By 1940, the Zone's free schools took their children only if the family lived inside."
- Por quê: Logo depois de 'In 1930', o ouvido data a regra em 1930; ela é do relatório de 1940, p. 92 (mec-11, mec.afi-21). I07: não encadear 1930 e 1940.
- numerais novos: 1940 · editor: 1 par(es)

### L10 · ESTREITAR (lente: QUALIFICAR) · fatos:A4, roteiro:22

- SAI: "So the Zone sorted its people by payroll, not by passport."
- ENTRA: "So the Zone sorted its workers by payroll."
- Por quê: O relatório de 1940, citado dois parágrafos antes, diz que a folha 'gold' era 'with a few exceptions, citizens of the United States' (mec-11): 'not by passport' é contradito. E a folha separava empregados, não 'its people' (os soldados estavam fora dela). É a ponte_saida de p2: a ponte nova vai inteira na troca, e 'The next rule decided who could live inside the line at all.' fica.
- editor: 1 par(es)

### L11 · ESTREITAR (lente: QUALIFICAR) · fatos:A5

- SAI: "says an employee had to be assigned family quarters before his family got permission"
- ENTRA: "says its "U.S.-rate" employees had to be assigned family quarters before their families got permission"
- Por quê: Escopo de grupo: a regra está na seção 'For U.S.-rate employees' do relatório de 1950 (p. 43, mec-12), não vale para todo empregado. O trecho traz o grupo e o fato juntos.
- aspas novas: U.S.-rate · editor: 1 par(es)

### L12 · DA-FONTE (lente: DATAR) · clareza:9

- SAI: "In 1979 they wrote, in the Panama Canal Review, the Zone's own magazine, that everyone"
- ENTRA: "In the Panama Canal Review, the Zone's own magazine, in its issue dated the day the Zone ended, they wrote that everyone"
- Por quê: A primeira voz com nome chega a 41 % sem hora: o ensaio saiu na Review de 01/10/1979 (exp-10, data_publicacao 1979-10-01), o dia do 'Until' do gancho. Vira re-gancho perto da chamada de inscrição. 'In 1979' sai; nenhum 'last official Review' (I18).
- numerais que saem: 1979 · editor: 1 par(es)

### L13 · REORDENAR (lente: REORDENAR) · clareza:2, roteiro:6, subtracao:nao_tocar

- SAI: "That is why the number for the whole Zone says less than it seems. In 1970, the last American census of the Zone counted birthplaces, not citizens. More than half of its residents had been born in the United States, and the count took in the bases along with the towns."
- ENTRA: "In 1970, the last American census of the Zone counted birthplaces, not citizens. More than half of its residents had been born in the United States, and the count took in the bases along with the towns. So the number for the whole Zone says less than it seems."
- Por quê: Catáfora ('the number for the whole Zone' antes de qualquer número) e um 'That is why' que fazia do dado de 1940 a causa do de 1970. A frase fica (NÃO TOCAR da subtração), depois do número, com 'So'. Mesmos numerais, na mesma ordem.
- editor: 2 par(es)

### L14 · CORTAR (lente: CORTAR) · roteiro:7, clareza:1 (parte do corpo), subtracao:SUB-02

- SAI: "seems.¶¶Now go back to Balboa. More than a thousand of its 3,139 residents in 1960 had been born in the Zone itself. The census recorded only where they were born, not whether they were citizens. So what"
- ENTRA: "seems. Now go back to Balboa. More than a thousand of its 3,139 residents in 1960 had been born in the Zone itself. So what"
- Por quê: 3ª volta da ressalva do censo (gancho; a de 1970, 17 s antes): três lentes concordam. Sem ela, o parágrafo 'Now go back to Balboa.' fica com 35 palavras, abaixo do piso de 40 por pedido à voz (escrita-notas, item 5): junta-se ao anterior (SUB-02), sem mudar palavra.
- editor: 3 par(es)

### L15 · DA-FONTE (lente: CORRIGIR) · fatos:L3, roteiro:13, locucao:A9(a)

- SAI: "Congress passed it on August 4, 1937, and made it reach back to February 26, 1904, the day the treaty took effect."
- ENTRA: "Congress enacted it on August 4, 1937, and made it reach back to February 26, 1904, the day the 1903 treaty took effect."
- Por quê: 04/08/1937 é a sanção ('Approved, August 4, 1937.', 50 Stat. 558); 'enacted' é a palavra do FAM. E o último tratado ouvido é o de 1936: 'the 1903 treaty' tira a dúvida sobre 1904.
- numerais novos: 1903 · editor: 1 par(es)

### L16 · CORTAR (lente: CORTAR) · locucao:A7, roteiro:8 (parte), clareza:1 (parte do corpo), subtracao:SUB-01 (parte)

- SAI: "For the thousand-odd residents of Balboa who had been born in the Zone, the rule was the same: citizens if a parent had been one at the time of the birth. The census never asked. So the law"
- ENTRA: "For the thousand or so residents of Balboa born in the Zone, the rule was the same: they were citizens if a parent had been one at the time of the birth. So the law"
- Por quê: 'The census never asked.' é a 4ª volta da ressalva do censo (três lentes). 'thousand-odd' dito soa 'os mil moradores esquisitos'; 'citizens if…' ficava sem verbo. A regra fica restada uma vez (degrau para 'the parents' papers'), e a ponte de saída de p4 fica inteira (sagrada; NÃO TOCAR de clareza e subtração).
- editor: 5 par(es)

### L17 · DA-FONTE (lente: CORRIGIR) · roteiro:9, fatos:A6, locucao:A6

- SAI: "The Zone's governor answered the ambassador that its "silver" workers wanted "the complete abolition of any segregation in the Canal Zone," and that granting it soon would wreck the canal and the railroad."
- ENTRA: "The Zone's governor answered the ambassador. The "silver" workers, he said, wanted "the complete abolition of any segregation in the Canal Zone." Granting that soon, he added, would wreck the canal and railroad organizations."
- Por quê: O governador escreveu 'without wrecking the Panama Canal and Panama Railroad organizations' (mec-18): as organizações, não o canal. E a frase de 33 palavras, com dois 'that' e o 'it' por cima da citação, vira três; o sujeito do pedido continua dito (R04).
- editor: 1 par(es)

### L18 · ESTREITAR (lente: QUALIFICAR) · roteiro:21

- SAI: "and off the signs by December."
- ENTRA: "and off the signs in public places by December."
- Por quê: A voz nunca disse onde estavam as placas: 'signs in public places' (mec.afi-23).
- editor: 1 par(es)

### L19 · ESTREITAR (lente: CORRIGIR) · fatos:L4

- SAI: "In 1955, a new treaty and a 1958 law set the same base pay"
- ENTRA: "In 1955, a new treaty promised, and a 1958 law set, the same base pay"
- Por quê: O Memorando de 1955 diz 'Legislation will be sought'; quem fixou o salário-base foi a PL 85-550 (1958).
- editor: 1 par(es)

### L20 · ESTREITAR (lente: QUALIFICAR) · roteiro:16, fatos:L5

- SAI: "sold only to its own employees and soldiers."
- ENTRA: "sold only to its own employees and soldiers, with their families."
- Por quê: O Art. III(1) de 1936 limita a venda às classes (a) e (b) do mesmo artigo, que incluem 'members of their families actually residing with them' (doc.afi-10, mec.afi-30). Com o 'only', a frase tirava as famílias. 'with their families' é a fórmula de p3.
- editor: 1 par(es)

### L21 · REDIZER (lente: REDIZER) · clareza:7, locucao:A3, roteiro:15

- SAI: "From the end of 1956, not even to employees who were not citizens of the United States and lived in Panama."
- ENTRA: "From the end of 1956, employees who lived in Panama and were not citizens of the United States could no longer shop there."
- Por quê: Fragmento sem verbo e com dupla negação: o ouvido perde quem perdeu o acesso. O grupo é o mesmo (mec.afi-30, Art. XII de 1955).
- editor: 1 par(es)

### L22 · CORTAR (lente: CORTAR + REDIZER) · roteiro:3 GRAVE, fatos:L6 (substituído)

- SAI: "The word on the sign was now "citizen." The 1960 census shows the map that went with it."
- ENTRA: "Now the 1960 census, town by town."
- Por quê: I06 proíbe dizer que um par de escolas virou o outro ('was now'); 'on the sign' diz mais que o fato ('U.S. citizen schools' é de relatório de 1965/1968; as placas do vídeo são as gold/silver tiradas em 1948); 'the map that went with it' cola a rede de escolas às cidades do censo (I15, N12). A troca da lente de fatos (L6, 'in the reports') ainda diria 'was now': fica a do roteiro.
- aspas que saem: citizen · editor: 2 par(es)

### L23 · ESTREITAR (lente: QUALIFICAR + REORDENAR) · locucao:A2, roteiro:17

- SAI: "Rainbow City, on the Atlantic side, Silver City until the early 1950s: 3 of 3,688."
- ENTRA: "Rainbow City, on the Atlantic side: 3 of 3,688. In the 1950 census, it was called Silver City."
- Por quê: Dito, 'Rainbow City, on the Atlantic side, Silver City' soa como duas cidades. E 'until the early 1950s' é ano derivado: lido é Silver City no censo de 1950 (esc.afi-07) e Rainbow City em 1954 (mec-16).
- numerais novos: 1950 · numerais que saem: 1950s · editor: 2 par(es)

### L24 · REDIZER (lente: REDIZER) · locucao:A8(b)

- SAI: "First at Shaler Triangle, a square in Panama City that was Zone ground, then on"
- ENTRA: "It flew first at Shaler Triangle, a plaza of Zone ground in Panama City, then on"
- Por quê: O 'that was Zone ground' prendia-se a 'Panama City' (a capital seria território da Zona, o contrário de p1), e 'Triangle, a square' soava contraditório; a frase não tinha verbo. A CIJ: 'Shaler Triangle, a square in Panama City, which forms part of the territory of the Zone' (exp.dat-05).
- editor: 1 par(es)

### L25 · DA-FONTE (lente: REDIZER) · clareza:6, roteiro:19, locucao:A9(b)

- SAI: "the street beside the line in front of their school, and four days of fighting had begun."
- ENTRA: "the street beside the line in front of the National Institute. Four days of fighting had begun."
- Por quê: 'their school' volta à Balboa High School, justo no único trecho em que a avenida vira linha (T09: diante do Instituto Nacional, CIJ). A frase de 32 palavras parte em duas.
- editor: 1 par(es)

### L26 · DA-FONTE (lente: QUALIFICAR) · roteiro:1 GRAVE, clareza:5, fatos:A2

- SAI: "1936 and 1955.¶¶That day, seventy-five years after the United States took possession of the canal works, Panama took back full jurisdiction over the former Zone. The transition ran thirty months, and an American agency, the Panama Canal Commission, ran the canal until the end of 1999."
- ENTRA: "1936 and 1955. That day, seventy-five years after the United States took possession of the canal works, Panama took back full jurisdiction over the former Zone.¶¶For thirty months more, American police and courts still covered the canal's American employees, the military and their families, in certain areas. The Zone's schools passed to the Department of Defense, and an American agency, the Panama Canal Commission, ran the canal until the end of 1999."
- Por quê: O gancho promete polícia, tribunais e escolas respondendo a Washington 'Until October 1, 1979.' O dossiê avisa nesta forma exata (doc.afi-36): para americanos, nas áreas cedidas, polícia e tribunais dos EUA seguiram até 31/03/1982; e as escolas passaram ao Departamento de Defesa (exp-13). O gancho fica (título, três NÃO TOCAR e o teto de 170 palavras); quem diz isso ao ouvido é o p7. A quebra de parágrafo passa a vir depois de 'over the former Zone.' (a frase vai ao fim do parágrafo dos tratados de 1977, que tinha 43 palavras): com a troca, o parágrafo ia a 122 palavras, acima do teto de 110 por pedido à voz (escrita-notas, item 5); assim ficam 68 e 97, e o novo abre no que continuou.
- editor: 2 par(es)

### L27 · ESTREITAR (lente: QUALIFICAR) · fatos:L7

- SAI: "A second treaty, which let only those in the canal's service live inside the line."
- ENTRA: "A second treaty, which let only those who worked or served there, and their families, live inside the line."
- Por quê: A lista de 1936 vai além do serviço do canal: governo dos EUA, Forças Armadas, contratistas, religiosos, criados e as famílias (doc.afi-10, que traz o grupo e o fato juntos). A cadência de quatro membros fica (NÃO TOCAR de clareza, locução e subtração).
- editor: 3 par(es)

### L28 · ESTREITAR (lente: QUALIFICAR) · roteiro:4 GRAVE

- SAI: "And a payroll, which sorted everyone inside it:"
- ENTRA: "And a payroll, which sorted the people who worked for the canal:"
- Por quê: 'Everyone inside it' é falso pelo próprio roteiro: os soldados (p3) não estavam em nenhuma das duas folhas, que eram dos empregados do canal e da ferrovia (mec.afi-16). É a resposta ao título. Mesma afirmação que a ponte de p2 estreita.
- editor: 2 par(es)

### L29 · CORTAR (lente: QUALIFICAR (forma mínima)) · fatos:A1

- SAI: "The rule about being born there never changed, and it is still on the books."
- ENTRA: "The rule about being born there never changed."
- Por quê: 'Still on the books' sugere que a regra ainda opera; o FAM diz que ela 'is not in effect because the Panama Canal Zone no longer exists' e que ninguém nascido ali depois de 01/10/1979 pode usá-la (doc-09). O 'never changed' a lente de fatos confirma (o texto de 1937 é o do § 1403(a) de 2024). A forma mínima da própria lente (CORTAR) em vez da longa: a longa poria 'U.S. Code' e uma data nova no fecho.
- editor: 3 par(es)

(¶ = quebra de parágrafo. L14 junta dois pedidos à voz; L26 muda a quebra de lugar.)

## Os conflitos entre lentes, e como ficaram

1. **"Until October 1, 1979." (gancho) × o p7.** Fatos (A2) queria qualificar o gancho ("…, when the Canal Zone itself came to an
   end"); roteiro (NÃO TOCAR), locução (NÃO TOCAR) e subtração (o gancho inteiro) o protegem, e o roteiro (achado 1, GRAVE) conserta
   no p7. Fica o p7 (L26): o título é do Lucas e o gancho o paga nas 3 primeiras frases; as 9 palavras a mais levariam o gancho a 175,
   acima do teto de 170 do portão. Para não deixar resto do achado de fatos, L26 diz também as escolas (ao Departamento de Defesa,
   `exp-13`, conferido no disco: "the transfer of organizations to the Department of Defense; e.g., schools, hospitals"), não só
   polícia e tribunais. Entre as duas redações do p7, a do roteiro (o grupo de `doc.afi-36`: empregados americanos, militares,
   famílias) em vez da da clareza ("some people in some areas"): mais exata, e o trecho do dossiê traz o grupo e o fato juntos.
2. **A ressalva do censo (clareza 1, GRAVE) × o gancho.** A clareza cortaria as duas frases do censo no gancho e as do corpo. Roteiro e
   subtração protegem o gancho e mantêm a dele como a origem. Pelo teste da única vez, fica a origem e saem os ecos: L14 ("The census
   recorded only…") e L16 ("The census never asked."); a de 1970 fica (paga S8–S9). A pausa da janela de abertura (0:36–0:44), o que
   sobra do GRAVE, fica para a Sala: só se resolve mexendo no texto do gancho do plano.
3. **S1, "where the Panama Canal Zone was run from" (locução A1, GRAVE; subtração SUSP-01) × roteiro e fatos (forma aceita).** O
   dossiê aceita "where the Canal Zone was run from" (Nomes, Balboa Heights), mas dito depois de "the town below Balboa Heights" o
   "where" pode prender-se à cidade, a sede que a Sala vetou (T06), na 1ª frase do vídeo. L01 usa a forma que I03 põe primeiro, "the
   hillside" (não "the hill", que a locução propôs e I03 veta). O resto do gancho não muda.
4. **"That is the town you saw first: …" (clareza 3, locução A1 b) × roteiro e subtração (NÃO TOCAR, a forma da Sala).** L04 tira só o
   "That", que se prendia ao prédio do morro; a forma da Sala ("Balboa, the town at the foot of Balboa Heights, the hillside the Canal
   Zone was run from") fica letra por letra. As duas reescritas maiores (clareza: "sits below it"; locução: a frase partida) ficaram
   de fora por mexerem na forma protegida.
5. **"So the Zone sorted its people by payroll, not by passport." (ponte de p2).** Fatos (A4) corta "not by passport" (o relatório de
   1940 diz que a folha "gold" era "with a few exceptions, citizens of the United States"); o roteiro (22) só estreita "people" →
   "workers"; a subtração protege as pontes. O fato vence: L10 faz as duas coisas, e a ponte nova vai inteira na troca ("The next
   rule…" fica).
6. **"The word on the sign was now "citizen."" (roteiro 3, GRAVE) × clareza (NÃO TOCAR) × fatos (L6, "in the reports").** A regra I06
   do dossiê proíbe dizer que um par de escolas virou o outro, e "was now" é isso, com "sign" ou com "reports". Fica o corte do
   roteiro (L22), que também tira "the map that went with it" (I15, N12). A "quarta resposta" do quadro das partes, no editor, muda
   junto.
7. **"That is why the number for the whole Zone…" (roteiro 6: cortar) × clareza 2 (reordenar) × subtração (NÃO TOCAR).** L13 reordena:
   a frase fica (subtração), vem depois do número (clareza) e perde o "That is why", que fazia de 1940 a causa de 1970 (o problema do
   roteiro).
8. **p4, "The census never asked. So the law that ran the ground…" (roteiro 8: cortar as duas) × clareza (NÃO TOCAR na segunda) ×
   subtração (SUB-01: cortar a regra restada e a primeira).** A segunda é a ponte de saída de p4 (sagrada) e fica. A regra restada
   também fica, com a fala da locução (A7): é o degrau de "the parents' papers", e sem ela a ponte dependeria de uma frase de 50 s antes
   (teste da dívida). Sai só "The census never asked." (L16).
9. **"The cities of Panama and Colón…" (roteiro 11, locução A8 a) × clareza (NÃO TOCAR).** O NÃO TOCAR da clareza protege o conteúdo
   (as duas cidades de fora), que fica; o ouvido ouvia "as cidades do país". L03, com "Panama City, the capital" (regra de nomes, 1ª
   menção).
10. **A resposta em quatro partes de p7.** O roteiro pede (achado 5, PEDIR) que ela seja reescrita sem a pergunta repetida e sem o
    molde paralelo, por repetir pela 3ª vez o fecho do Juneau e de Los Angeles. Clareza, locução e subtração a protegem (NÃO TOCAR), e o
    ofício do doutor (§5) põe o fio e o pagamento da promessa entre o que nunca se toca. **O PEDIR fica fora.** A cadência fica, e dois
    membros mudam só no fato (L27, `doc.afi-10`; L28, os soldados fora da folha). O "still on the books" sai (L29, fatos A1), o que tira
    metade do par "never"/"still" de que o roteiro reclamava. Se o molde do fecho vira pergunta ao Lucas para o vídeo 4, é decisão da
    Sala.
11. **Os clubes de 1920.** Roteiro (18): "Balboa and other towns … La Boca, Paraíso and others"; clareza (8) e locução (A4): "Balboa and
    four other towns … La Boca and four others. Gatún and Cristóbal had both." Ficam as duas lentes (L07): guarda o que importa (as
    duas cidades com clube dos dois lados), e Paraíso continua na voz, no gancho e em p5.
12. **1956.** Três redações (roteiro 15, clareza 7, locução A3); L21 usa o verbo da clareza ("could no longer shop there") na ordem da
    locução, e o grupo continua o do Art. XII (`mec.afi-30`).
13. **O governador de 1946.** Roteiro (9) e fatos (A6) corrigem o objeto ("organizations"); a locução (A6) parte a frase de 33 palavras.
    L17 faz as duas, com a paráfrase do roteiro ("canal and railroad organizations") em vez da citação nova da lente de fatos, para não
    pôr aspas novas na voz. O sujeito do pedido continua dito (R04). "The "silver" workers" em vez de "Its": depois do ponto, "Its"
    voltaria ao embaixador.
14. **Rainbow City.** A locução (A2) separa as duas cidades; o roteiro (17) corrige o ano derivado. L23 faz as duas: "In the 1950
    census, it was called Silver City." (sem "still": o nome antes de 1950 não foi lido).
15. **Art. II (roteiro 14).** A lente propôs "the canal's route"; L02 usa "the planned canal", para o "it" de "to build, run and protect
    it" continuar no canal (com "route", o ouvido o prenderia à rota).

## Os achados que ficaram de fora, e por quê

- **roteiro 5 (PEDIR, a resposta de p7):** conflito 10.
- **roteiro 12 ("The line had not." → "The line was still there."):** é a ponte de saída de p5 (sagrada), e clareza e locução a põem no
  NÃO TOCAR. O risco (gastar o esqueleto da coda) é de estilo, não de fato.
- **roteiro 20 (cortar "The question of who belonged had moved from the payroll to the flagpole."):** clareza e locução a põem no NÃO
  TOCAR.
- **clareza 1, na parte do gancho:** conflito 2.
- **clareza 4 e 10:** são PEDIR e foram a `pedidos-r1.json` (P01, P02).
- **fatos A2, na forma do gancho:** conflito 1 (o conserto vai no p7, L26).
- **fatos A1, na forma longa** ("still in the U.S. Code, but no child born there after October 1, 1979, can use it"): usou-se a mínima
  da própria lente (L29). A longa poria "U.S. Code" e uma data nova no fecho.
- **fatos L1 ("in the same census" em Paraíso, no gancho):** a clareza põe "Up the canal, Paraíso had seven…" no NÃO TOCAR, e o roteiro,
  o gancho inteiro. O "In 1960" está duas frases antes, e o cartão de Paraíso na tela leva o ano.
- **fatos L6:** substituído por L22 (conflito 6).
- **locução A9 (c) ("the one" → "the declaration"):** a frase é a ponte de saída de p6, que roteiro e subtração põem no NÃO TOCAR; o
  aposto já cola em "Joint Declaration", o nome mais próximo.
- **locução A10 (arredondar 3,113 e 3,688 no gancho):** LEVE e no gancho; a clareza protege a âncora dos números de 1960, e o exato
  volta em p5 e fica na tela.
- **subtração SUB-01, em parte:** a regra restada fica (conflito 8).
- **subtração SUSP-02 ("68 to 32" na voz, quando o plano o queria só na tela):** a cifra se sustenta (N01, duas chaves), e cifra está no
  sagrado do ofício (§5). A discordância é entre o texto e `escrita-notas.md` (§2, p7), que diz que o placar ficou só na tela: corrige-se
  a nota, não a voz.
- **Os 22 alertas de palavra do portão:** as lentes os julgaram um a um (citação atribuída ou palavra do fato); nenhum vira troca.

## O que a aplicação deixa por fazer (não é desta lista)

- **Os carimbos.** Depois do `aplicar-lista` sem `--seco`, o sha do texto falado passa a `d49183e2342d` (sem os pedidos). O
  `roteiro-editor.md` (a linha "Revisão do roteiro", a "medida do portão" e o quadro "As partes"), a `pronuncia.md` e a cópia para a
  voz continuam citando `6917e62a2155` até alguém os refazer; o `gate.mjs --derivados` vai apontá-los.
- **A folha de pronúncia.** Saem da voz Ancón, Pedro Miguel e Red Tank (L07); entram "Department of Defense" (L26), "U.S.-rate" (L11) e
  "Panama City, the capital" (L03). O item 2 da amostra da locução se refaz com o sha novo.
- **O comentário do gancho** no `roteiro-narrador.md` diz "o texto de plano-final.json › gancho.texto, palavra por palavra"; com L01, a
  1ª frase difere do plano por "the hillside". O título do gancho no editor já o diz (par do L01); o comentário e o `plano-final.json`
  não foram tocados (o aplicador só troca o texto falado e o editor).
- **`escrita-notas.md`:** a nota do "68 to 32" (SUSP-02), e a do "still on the books", que o editor também cita (fim de "As partes").
- **O editor** recebe 47 pares (nas provas do aplicador, todos casam uma vez). O quadro "As partes" (palavras e tempos por parte) não
  foi refeito: é medida, e se refaz com o portão depois da rodada.
