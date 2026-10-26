# Laudo · crítico de roteiro · rodada 1

Revisão julgada: `4694e58092c2` · data-base 2026-10-26
(sha256 do texto falado pelo `gate.mjs`: `4694e58092c24ffe94b23e8fd1ec5ce56907d6163906f39874adc836571a594d`; o portão PASSA, 2.089
palavras, ≈11:21 a 184 palavras/min, 30 parágrafos, 166 frases, média 12,6, maior 29; gancho com 159 palavras até a assinatura e o
"But" na palavra 49; nenhum problema; 8 alertas da lista de conferência ("never" ×2, "first" ×2, "Milwaukee Deep" ×3, "anomaly" ×1);
taxas todas abaixo do teto; autoplágio literal vazio.)

Rubrica lida nesta sessão: o ofício da pré-v1 (`crafts/critico-de-roteiro/OFICIO.md`, `CONTRATO.md`, `SPEC.md`), `marca/voz.md` (§1,
"Os números da fala" e "Como ele fecha"; §2), `marca/embalagem.md` §1, §1.1 e §2, `marca/cta.md` §1–§3, §5 e §6, `marca/identidade.md`
§5 ("O gancho que prende"), o topo do `gate.mjs` (o NAO_SE_DIZ, os ALERTA e o que ele deixa ao verificador), o topo do
`ferramentas/aplicar-lista.mjs` (a lista fechada) e o item 1 e o item 3 de `out/_analises/estudo-roteiro/cetico.md`. Contra o quê:
`roteiro-editor.md` (a espinha, o livro-razão, o destino das cifras e "De onde vem cada frase" existem e foram usados),
`pautas/atlantico-fundo/fundamento.md` (os F, os N, as C, os A e as R) e as leituras 01 e 09, `_trabalho/plano-final.json` pelas pontes,
`_trabalho/juiz.md` e `_trabalho/escrita-notas.md`. Sem rede: o spot-check foi nas cópias em texto de `midia/atlantico-fundo/fontes/`.
Não li os outros laudos desta rodada. O juiz aprovou as pontes, e o dossiê fixou os "como dizer": esta lente não defere a nenhum dos
dois quando a fonte diz menos (achados 2, 4 e 5).

VEREDITO: FAIL
(REPROVADO pela escala do CONTRATO §3: cinco erros de fato, nenhum estrutural, cada um consertável numa frase ou num parágrafo. Os
dois primeiros vão ao ar no gancho. "gave that point a number about 1,200 feet too deep" põe o número da lista no ponto do sonar,
quando a lista apontava outro lugar, onde p6 diz que há uma crista a ~24.400 ft. "It found no fish at all" diz mais que a fonte ("No
snailfish were observed"). Os outros três:
- o laço do F91, colado a "The scientists who went back", faz Vescovo voltar em 2019, o que o dossiê veta;
- a laje de calcário que "starts more than 4,000 feet above sea level" é uma cota reconstruída pelo USGS, não uma laje achada;
- "That quake wasn't behind the deadly tsunami of 1918" troca a fonte (nenhuma das duas fontes possíveis explica 1918, nem outro
  tsunami em cinco séculos) por um anacronismo que todo ouvinte percebe.
A espinha das visitas, o gancho de cinco tempos, a ordem das partes, o fecho e as decisões da Sala de 26/10 estão certos e não se
mexem.)

NOTAS: Sotaque de máquina 7,5/10 · Storytelling e retenção 7,5/10 · Voz alta 8/10 · Factual e atribuição 5,5/10 · Embalagem e promessa 8,5/10

**Destes 23 achados, valem 14** (os 5 graves e os 9 médios); os 9 leves são polimento, aplicáveis em lote. As 28 trocas (nenhum
PEDIR) foram aplicadas juntas numa cópia fora do repositório (scratchpad) e casam uma vez cada.
- O `node ferramentas/aplicar-lista.mjs atlantico-fundo --seco` sai SECO_OK: as aspas, os numerais declarados item a item, nenhuma
  frase do diff sem item. O texto falado vai de `4694e58092c2` a `12377e74451b`.
- O `gate.mjs` PASSA: 2.059 palavras (≈11:11, acima do piso de 1.950), 160 frases, média 12,9, maior 29, o gancho com 160 palavras e
  o "But" na 49, os mesmos 8 alertas e nenhum novo, autoplágio vazio.
- Os pedidos à voz ficam entre 47 e 105 palavras. Só os achados 1 e 2 encostam no gancho (+1 palavra).

ACHADOS:

1. [GRAVE · Factual (régua trocada: o ponto do gazetteer × o ponto mais fundo) + ESCALA · ESTREITAR] `the official list of undersea features gave that point a number about 1,200 feet too deep`
   → "That point" é o ponto da frase anterior, "the deepest point itself", o que Vescovo alcançou (19,712°N, 67,311°W). A lista não
   dava número a esse ponto. O "Milwaukee Deep" do gazetteer ficava em 19°35'N, 66°30'W (Stewart & Jamieson 2019, Tabela 1; leitura 01,
   c), uns 60 mi a leste. Ali, os dados de hoje dão 7.450 m, uma crista: a ~4.200 ft do número da lista, não a 1.200.
   → O 1.200 é a diferença entre o máximo que a lista dava ao Atlântico (8.740 m) e o máximo que o sonar achou (8.378 m), em lugares
   diferentes. O F09 diz "gave the deepest point of the Atlantic a number…": o conceito, não o lugar.
   → O próprio roteiro mostra a diferença em p6 ("At the spot the old listing pointed to, their study found about 24,400 feet"). Quem
   liga o gancho a p6 ouve duas contas para o mesmo "ponto". A troca diz a profundidade, não o lugar, e ecoa a assinatura.
   → TROCA: `the official list of undersea features put the bottom of the Atlantic about 1,200 feet too deep`
   → Sinal ao verificador, não achado: "for decades" ligado a "the official list" é a forma do F09 (firme). A lista lida só prova "until
   at least 2019", e nenhuma fonte diz desde quando o gazetteer trazia o 8.740 m. O "for decades" se sustenta mais no número (1939 →
   2019, F29) que na lista.
   → RAIZ: CADEIA REFERENCIAL DO GANCHO

2. [GRAVE · Factual (universal além da fonte) · ESTREITAR] `It found no fish at all.`
   → O resumo do DSR I 2020 (cópia local `fa-nora-528113-dsr1-2020.txt`, l. 7) diz "No snailfish were observed", e o F38 (o fato) diz
   "nenhum peixe-caracol". O "como dizer" do F38 ("It found no fish at all") passa do próprio F38: se a volta de 2019 viu outro peixe, o
   resumo não diz, e o artigo não foi lido.
   → É o universal do gancho, e p8 o repete ("Where the French had counted about 200 fish, it found none"). A troca diz o que a fonte
   diz, sem nome novo no gancho: o "snailfish" só se define em p2.
   → TROCA: `It found none of those fish.`
   → TROCA (p8): `Where the French had counted about 200 fish, it found none.` → `Where the French had counted about 200 snailfish, it found none.` ("counted" segura o alerta [200-peixes].)
   → RAIZ: O COMO DIZER DO DOSSIÊ ALÉM DO FATO

3. [GRAVE · Factual (composição que afirma o que o dossiê veta; pessoa real) · ESTREITAR] `The scientists who went back concluded that the "fish" of 1964 were sea cucumbers.`
   → Lidas juntas, "The scientists who went back concluded…" e, duas frases depois, "The paper that reported it came out in 2020, with
   five authors. One of them was Vescovo." dizem, por lógica e não só por sugestão, que Vescovo foi um dos que voltaram ao sítio em 2019.
   → O F91 veta exatamente isso ("nunca 'Vescovo went back' nem 'Vescovo piloted'"; A02: quem estava no submersível na volta não está
   em fonte lida), e o `escrita-notas.md` §7, item 1, o aponta como o ponto mais frágil.
   → "Who went back" também põe os autores no sítio, e o resumo não diz isso: "In 2019 the submersible DSV Limiting Factor revisited…";
   "It is concluded that…".
   → A troca refaz o 2º parágrafo de p8 sem "went back". Ficam os mesmos fatos (2020, cinco autores, Vescovo entre eles) e a mesma
   ressalva, com 7 palavras a menos.
   → TROCA (o parágrafo inteiro, de "The scientists who went back…" a "…One of them was Vescovo."): `In a 2020 paper on that return visit, five authors concluded that the "fish" of 1964 were sea cucumbers. It's a conclusion drawn from the count and the look, and the animals the French saw that day can't be checked again. One of the five was Vescovo.`
   → Para o aplicador: o "de" é o parágrafo inteiro; "five" entra 2 vezes e sai 1 (`numerais_permitidos: ["five"]`).
   → RAIZ: COMPOSIÇÃO (F38 × F91)

4. [GRAVE · Factual (cota reconstruída dita como achada) · ESTREITAR] `The agency found a tilted slab of limestone that starts more than 4,000 feet above sea level. It ends about 13,000 feet below the surface.`
   → A página do USGS (S28, cópia local `fb-usgs-seafloor-map.txt`, l. 57) diz "a tilted carbonate platform between (reconstructed)
   elevations of +1300 m and -4000 m". As cotas são de uma reconstrução. O roteiro diz que o USGS "found" uma laje que "starts" a mais de
   4.000 ft acima do mar, no presente.
   → O F44 perdeu o "(reconstructed)". O juiz já o anotara como achado do "lugar" fora do dossiê (`juiz.md`, "O que fica aberto": "a
   laje 'reconstructed'").
   → Corte puro deixaria o 3º parágrafo de p3 com menos de 40 palavras, um pedido à voz curto demais. A troca atribui à reconstrução e
   passa os verbos ao condicional, com as mesmas duas medidas em duas frases.
   → TROCA: `By the agency's reconstruction, a tilted slab of limestone would start more than 4,000 feet above sea level. It would end about 13,000 feet below the surface.`
   → RAIZ: O DOSSIÊ (F44) SEM A RESSALVA DA FONTE

5. [GRAVE · Factual (leitura errada da fonte: frase do período errado) · DA-FONTE + REORDENAR] `That quake wasn't behind the deadly tsunami of 1918, either.`
   → Kilbourne et al. 2025 (cópia local `03-kilbourne-2025-grl-hal-05463233.txt`, l. 133–139): as simulações apontam "either of two
   tsunami sources", e "Neither source accounts for the deadly 1918 tsunami in western Puerto Rico, nor for any other tsunami in the five
   centuries of Caribbean written history". "Source" é o tipo de ruptura, não o terremoto do século XIV.
   → Dita como está, a frase afirma que um terremoto de 1381–1391 não causou um tsunami de 1918, o que qualquer ouvinte sabe. O
   "either" ainda a cola em "It wasn't in the trench", que está no 1º parágrafo.
   → Perde-se o que acalma de verdade: nada assim em cinco séculos de registro escrito. O `escrita-notas.md` (§2, p4) trocou o "it" do
   F57 por "That quake", achando que o "it" apontava para o sinal. O problema era a leitura do F57, não o pronome.
   → A troca põe antes a frase de calma ("They think…"), para o "They" continuar sendo os cientistas, e fecha p4 em prosa comum (achado
   12).
   → TROCA (as duas últimas frases do 3º parágrafo de p4, antes do corte do achado 12): `That quake wasn't behind the deadly tsunami of 1918, either. They think quakes like that come thousands of years apart.` → `They think quakes like that come thousands of years apart. Neither of the two kinds of quake the models point to explains the deadly tsunami of 1918, or any other in five centuries of the Caribbean's written history.`
   → A frase nova não tem "trench" (o [1918-fossa] não dispara). A reserva da inscrição (cta) passa para a pausa depois de "…written
   history.".
   → RAIZ: LEITURA DA FONTE (F57)

6. [MÉDIO · Factual (frase do período errado na atribuição) · REORDENAR] `The depth most often published for its deepest point, the same 2019 study found, was deeper than the sonar's number for Puerto Rico.`
   → O "the same 2019 study found" governa a frase inteira. O estudo de 2019 teria achado que o número mais publicado do Meteor passava
   "the sonar's number for Puerto Rico", que só saiu em 2021. O próprio roteiro disse, em p6: "Their study came out before the
   expedition's own results."
   → O estudo diz só "The most commonly reported depth for the Meteor Deep is 8428 m" (S02, p. 11). A comparação com o sonar é a conta do
   dossiê (F77). A troca limita a atribuição ao que o estudo diz.
   → TROCA: `The same 2019 study noted the depth most often published for its deepest point. It was deeper than the sonar's number for Puerto Rico.`
   → RAIZ: O ESCOPO DA ATRIBUIÇÃO

7. [MÉDIO · Factual (o mecanismo; a conclusão por justaposição) + Storytelling (a pergunta sem resposta) · DA-FONTE] `Along the trench, the North American plate and the Caribbean plate mostly slide past each other, with only a little of one sinking under the other.`
   → "Why is the trench so deep?" pede uma causa, e esta frase, logo depois da definição de placas, é ouvida como a resposta: as placas
   deslizam. Na fonte é o contrário. O USGS (S27, `fa-usgs-ofr2006-1210-introduction.txt`, l. 13) põe o deslize como contraste:
   "Trenches in the Pacific are located in places where one tectonic plate subducts… The Puerto Rico trench, in contrast, is located at a
   boundary between two plates that slide past each other".
   → O sinal da causa está na frase da gravidade: "the most negative free-air gravity anomaly on earth, -380 mGal, which indicates the
   presence of an active downward force". O roteiro deixa a anomalia sem o que ela indica: vira trivia, e a pergunta da parte fica sem
   resposta até os "rotated blocks".
   → Duas trocas DA-FONTE, sem número nem nome novo além do Pacífico, que já está no gancho (o N41 fala da Marianas, não do oceano).
   → TROCA: `In the Pacific, deep trenches lie where one plate sinks under another. Along this trench, the North American plate and the Caribbean plate mostly slide past each other, with only a little of one sinking under the other.`
   → TROCA: `Gravity there falls further below normal than anywhere else.` → `Gravity there falls further below normal than anywhere else, which the agency reads as a sign of a force actively pulling down on the area.`
   → Com o achado 4, o 3º parágrafo de p3 ainda não diz para que serve a laje: o USGS sugere "large vertical movements … 3.3 m.y. ago"
   (F44, cortado pelo plano). Fica como está: com a gravidade e os blocos girados, a pergunta já tem resposta atribuída.
   → RAIZ: MECANISMO

8. [MÉDIO · Factual (mecanismo que a fonte não diz) · ESTREITAR] `To get the sonar right, the ship lowered instruments to measure how fast sound travels at every depth, from the surface to the floor.`
   → Bongiovanni et al. 2021 (`02-bongiovanni-2021-gdj3.122.txt`, l. 236–275): o navio lançou XBTs até 1.800 m. O perfil até o fundo
   veio dos CTDs do Limiting Factor e de três landers, "during both the descent and ascent", e "Full-ocean depth sound velocity profiles
   were determined after the deep submersible dives and applied during post-processing". Nenhum instrumento foi baixado pelo navio da
   superfície ao fundo.
   → O F12 ("corrected for the speed of sound at every depth") não tem o "lowered": ele é do roteirista. A troca diz o que se mediu, sem
   dizer quem baixou o quê (dizer que o submersível calibrou o sonar encostaria no N34).
   → TROCA: `To get the sonar right, the team measured how fast sound travels at every depth, from the surface to the floor.`
   → RAIZ: PONTUAL

9. [MÉDIO · Factual (conclusão por justaposição; verbo mais forte que a fonte) · CORTAR] `The two scientists had asked for that name to fall out of use.`
   → Colada a "As of October 2026, the … list … no longer includes the Milwaukee Deep.", a frase faz o ouvido concluir que o nome saiu
   porque os dois pediram. Quando e por que saiu não está conferido (A03; F28).
   → E o artigo não "pede": diz que o local "requires correction, or rather the name simply falls into abeyance" (S02, l. 1095–1099).
   É o 3º corte do plano.
   → TROCA: cortar a frase.
   → RAIZ: JUSTAPOSIÇÃO

10. [MÉDIO · Factual (atribuição com número que a fonte não escreve; simetria) · DA-FONTE] `By NOAA's estimate, no fish lives much deeper than about 27,500 feet.`
    → A página da NOAA (`fb-noaa-oer-deepest-fish.txt`, l. 23 e 31, publicada em 14/01/2026) escreve "likely that no fish lives deeper
    than about 8,400 meters (28,000 feet)" e "a boundary between 8,200 and 8,400 meters deep (27,000 to 28,000 feet)".
    → "About 27,500" não é número da NOAA: é a conversão de 8.400 m (27.559 ft) arredondada para baixo, até coincidir com o "about
    27,500 feet down" do ponto mais fundo (p5). É a rima de números do OFÍCIO §4.4 ("o número que fecha o poema é o que mais merece
    dúvida"). Aqui ela se sustenta (8.378 m cabe na faixa), mas a voz põe na boca da NOAA um número que a página não tem.
    → A troca usa a faixa da própria NOAA, com o "may be" dela, e o "that edge" da última frase passa a ser essa linha.
    → TROCA: `NOAA cites research suggesting that no fish can live below a line somewhere between 27,000 and 28,000 feet down.`
    → O comentário (cta) continua sobre esta frase e a seguinte.
    → RAIZ: SIMETRIA

11. [MÉDIO · Sotaque de máquina (promessa de espera) + Storytelling (laço já aberto) · CORTAR] `Keep those fish in mind.`
    → É o narrador apontando para a própria informação antes de entregá-la (OFÍCIO §4.1, "promessa de espera"). E não promete nada
    novo: aos 0:35, o gancho já disse que a volta de 2019 não achou os peixes. O laço se paga pela ponte de p7 ("the French crew's fish
    were waiting for a second look") e por p8, que ficam.
    → TROCA: cortar a frase.
    → RAIZ: METRÔNOMO

12. [MÉDIO · Sotaque de máquina (o metrônomo: toda parte fecha numa ponte-promessa) · CORTAR + REDIZER] `On the trench's walls, its maps showed something else.`
    → As sete partes, de p1 a p7, terminam numa frase que anuncia a seguinte:
    - "It couldn't show anyone what was down there.";
    - "That took a different kind of sonar.";
    - "On the trench's walls, its maps showed something else.";
    - "To see the trench's walls, you need a camera down there.";
    - "That number was not the one in the official list.";
    - "The expedition also took its sonar, and its sub, to the other end of the Atlantic.";
    - "…were waiting for a second look.".
    → A taxa é de 100 % (OFÍCIO §4.1), e por volta de 4:10 quem ouve já antecipa a virada. As duas que devem acabar em prosa comum são
    p3 e p4. p3 termina melhor nos blocos que afundam. p4 termina melhor na calma ("They think quakes like that come thousands of years
    apart." e, com o achado 5, os cinco séculos), que a ponte de p4 quebrava com um "you need a camera" sem dono.
    → As aberturas das partes seguintes fazem a ponte sozinhas. O que p3 acabou de estabelecer (o USGS e a fossa que afunda) sustenta
    "The agency says the walls…". p4 falou da parte leste e das paredes, e p5 abre no robô que filmou a parede sul na parte leste.
    → TROCA (p3): cortar a frase.
    → TROCA (p4, a abertura, porque "those walls" perde o antecedente): `The USGS says those walls show` → `The agency says the walls show`. A frase fica sem "trench": com "tsunami", o [1918-fossa] dispararia. E "The agency" evita "The USGS" em duas frases seguidas.
    → TROCA (p4): `To see the trench's walls, you need a camera down there.` → cortar a frase.
    → As outras cinco pontes ficam (NÃO TOCAR).
    → RAIZ: METRÔNOMO

13. [MÉDIO · Voz alta (cadeia de pronomes) · REDIZER + DA-FONTE] `The earthquake behind it struck`
    → No 3º parágrafo de p4, o pronome muda de dono a cada frase:
    - "The earthquake behind it": a frase anterior é a do coral morto no verão (ou, com o achado 21, a de Colombo);
    - "Computer models put it": o terremoto;
    - "call it the only known sign": o tsunami, ou o terremoto;
    - "can do that": o quê?
    → Em voz alta, sem a página, o ouvinte perde quem é quem no trecho que mais precisa de clareza, o do risco. "Wave" evita a palavra
    "tsunami" numa frase que tem "trench" (o [1918-fossa]).
    → TROCA: `The earthquake behind it struck` → `The earthquake behind that wave struck`
    → TROCA: `call it the only known sign that this stretch of the trench can do that.` → `call the wave the only known sign that this stretch of the trench has produced a quake that big.` (DA-FONTE: "the only reported sign that the eastern Puerto Rico Trench has produced a great earthquake", Kilbourne et al. 2025, resumo, l. 54–55.)
    → RAIZ: PONTUAL

14. [MÉDIO · Storytelling (carga numérica) · CORTAR] `The scientists give that margin with 95 percent confidence. They built their map as a grid of squares about 250 feet across.`
    → O 3º parágrafo de p5 (≈6:10) põe sete números em 76 palavras: 27,500, 16, 95, 250, 2021, 83 e três milhões. Dois são de método (o
    nível de confiança e o tamanho da grade), e o ouvinte não os usa depois. A tela os leva (8,378 ± 5 M · 95% CONFIDENCE).
    → São o 1º corte do plano em p5. Fica "Give or take about 16 feet.", e o parágrafo passa a 54 palavras.
    → TROCA: cortar as duas frases.
    → RAIZ: CARGA

15. [LEVE · Voz alta (sintaxe que trava) + Factual (a ressalva repetida no mesmo molde) · REDIZER] `Exactly how deep, the sources disagree.`
    → Com o complemento na frente, a frase lê mal em voz alta. E repete o molde de "How deep the fish was when it swam in, no one
    knows.", 40 s depois, na mesma parte: duas ressalvas de rigor com o mesmo esqueleto (OFÍCIO §4.4: "a segunda muda de forma"). A
    troca muda a forma da primeira e deixa a segunda, que é a da R13.
    → TROCA: `The sources disagree on exactly how deep.`

16. [LEVE · Factual (a fonte diz mais estreito) · DA-FONTE] `At the time, that was believed to be the greatest depth a sample had ever been brought up from.`
    → O relatório de 1883 (S11, `04-uscgs-relatorio-1883-CSC-0082.txt`, l. 3516–3518): "No record is known of any sounding from which
    bottom specimen and temperature have been obtained at a depth equaling this." O recorde é da amostra e da temperatura juntas, e o F23
    também diz as duas. Só da amostra, é mais do que a fonte afirma.
    → TROCA: `At the time, no sounding was known to have brought back a sample and a temperature from that deep.`

17. [LEVE · Factual (régua trocada: densidade × contagem) · ESTREITAR] `It found sea cucumbers instead, about as many as the fish the French had counted.`
    → O resumo diz "a large number of the holothurian Peniagone sp. were seen in a density similar to that reported originally for the
    snailfish". O transecto de 2019 não tem tamanho em fonte lida (A02): "about as many" é uma contagem que a fonte não dá.
    → TROCA: `It found sea cucumbers instead, spread about as thickly as the fish the French had counted.`

18. [LEVE · Sotaque de máquina (tríade anafórica) · REDIZER] `similar color, similar texture, similar shape.`
    → O mesmo molde três vezes ("similar X"), no fim do parágrafo: é a tríade que esta lente caça. A fonte diz "a similar exterior
    colour, texture and morphology".
    → TROCA: `From the outside, the two look a lot alike: similar color, similar texture, similar shape.` → `From the outside, the two look a lot alike, in color, texture and shape.`

19. [LEVE · Voz alta (uma coisa, dois nomes) · REDIZER] `the international list of undersea feature names no longer includes`
    → O gancho, p5 e p6 chamam o gazetteer de "the official list (of undersea features)". Na 4ª menção ele vira "the international list
    of undersea feature names", e o ouvinte pode achar que é outra lista.
    → TROCA: `the official list no longer includes`

20. [LEVE · Factual (a independência que a fala sugere; rosto humano) · DA-FONTE] `Those were published in 2021, and they placed the deepest point in U.S. waters off Puerto Rico, about 100 miles from the Dominican Republic.`
    → p6 conta Stewart e Jamieson (2019) e "the expedition's own results" (2021) como dois atores, e o ouvido ouve a expedição corrigindo
    os dois. O artigo de 2021 é deles também: S01 é de Bongiovanni, Stewart e Jamieson, e Jamieson era o "leader of the Five Deeps
    science team" (Popular Science, S05, `fb-popsci-2018-12-21-vescovo.txt`, l. 51).
    → Dizer isso não muda número nenhum, e troca uma rivalidade que não houve por gente que refinou o próprio trabalho com dado melhor.
    → TROCA: `Those were published in 2021, with the same two scientists among the authors. They placed the deepest point in U.S. waters off Puerto Rico, about 100 miles from the Dominican Republic.`

21. [LEVE · Storytelling (trivia marginal) · CORTAR] `The authors suspect the coral died in summer or fall.`
    → A estação não volta no fio, e a frase separa a data (1381–1391, Colombo) do terremoto. É o 1º corte do plano em p4. A atribuição
    está certa ("likely occurred during summer or fall", Kilbourne, resumo).
    → TROCA: cortar a frase.

22. [LEVE · Storytelling (o sag de nomes, ≈10:05) · CORTAR] `Its neighbor, about 20 miles away, got the other half of the name: Limiting Deep.`
    → p7 é a parte mais longa (324 palavras) e a mais cheia de nomes. O Limiting Deep é o 2º corte do plano e não volta. O "odd name" do
    Factorian continua explicado pela frase anterior.
    → TROCA: cortar a frase. Se p7 ainda pesar na revisão de espectador, o próximo corte é o Pressure Deep (−17).

23. [LEVE · Factual (estado do mundo; a fonte diz mais estreito) · ESTREITAR] `with no one living on them`
    → A NASA (S39, `fb-nasa-eo-149160-mount-michael-2021.txt`, l. 50) diz "there are no permanent human residents nearby" (2021). "No one
    living" é o universal, e "no permanent residents" é o que a fonte sustenta.
    → TROCA: `with no permanent residents`


RISCO DE ABANDONO:
- **≈3:35–4:15** (p3, 2º e 3º parágrafos). "Why is the trench so deep?" entra no terreno dos dois concorrentes, a aula de placas
  (leitura 06). Como está, não responde: o deslize soa como a causa, a anomalia como recorde e a laje como duas cotas.
  - Os achados 4 e 7 dão a tensão: no Pacífico, as fossas fundas ficam onde uma placa mergulha, e nesta as placas deslizam.
  - E dão a resposta atribuída: uma força puxando para baixo, e os blocos que afundam.
- **≈7:50–8:40** (p6, 3º e 4º parágrafos). O pagamento da 2ª virada chega por volta de 7:15 ("about 1,200 feet shallower", e o USGS
  desde 2003). Depois vêm uns 12 números e datas em 50 s, já com a resposta dada: oito levantamentos, 36 mi, as águas da República
  Dominicana, a ordem das datas, 2021, 100 mi, a zona econômica com 230 mi, outubro de 2026, o nome e o Seabed 2030.
  - Os achados 9 e 19 aliviam.
  - Se a revisão de espectador ainda achar o trecho pesado, o próximo corte é a frase do Seabed 2030 (o 1º corte do plano em p6, −22).
    A ponte "The expedition also took its sonar…" fica de pé sem ela.
  - A definição da zona econômica fica: sem ela, "U.S. waters" se ouve como território (N32).
- **≈9:35–10:20** (p7, 3º a 5º parágrafos). O vídeo sai de Porto Rico por 1:45, com nove nomes em fila: Meteor, Pressure Deep, Pressure
  Drop, a IHO, 60°S, Argentina, Factorian, Limiting Factor e Limiting Deep. O achado 22 tira um, e a ponte de volta ("Off Puerto
  Rico…") segura.

VARREDURA "ESTADO DO MUNDO" (toda frase no presente, ou que diz que algo continua):
- Gancho: "lies the deepest point in the Atlantic Ocean" e "It's more than five miles down" (confirmadas: Bongiovanni 2021, 8.378 ± 5
  m; nenhum levantamento posterior nas fontes); "you think Mariana… that's the Pacific" (geografia).
- p1: "The Survey's report … describes" (presente de documento); "The trench runs for hundreds of miles" (geografia; o F20 está em
  disputa, e a voz não dá número).
- p2: "NOAA … records that in 1970" (página de 14/01/2026: confirmada); "The Australian Museum lists the same catch" (lida em
  26/10/2026, "currently holds the depth record": confirmada); "no one knows" (a NOAA de 2026, "hard to know for sure": confirmada).
- p3: "the trench has the most negative gravity anomaly on Earth" (atribuída). O número é do OFR 2006-1210, e a página do USGS repete
  "extremely low gravity anomaly", mas nenhuma leitura posterior a 2006 confirma o recorde: confirmada como atribuída, sem data. O
  verificador decide se pede o ano na voz. "The Caribbean plate moves east" (DeMets 2010, por S&J 2019) é regime físico.
- p4: "The USGS says those walls show" (a página do USGS: confirmada); "Hundreds of coral boulders lie far inland" (Kilbourne 2025:
  confirmada para 2025); "call it the only known sign" e "They think quakes like that come thousands of years apart" (2025: confirmadas
  como do artigo).
- p5: "the deepest point of the Atlantic is about 27,500 feet down" (confirmada, 2021); "That point lies about 83 miles" (conta do
  cético; geografia); "More than three million people live in Puerto Rico" (o Censo de 2020 e a estimativa de 01/07/2025: confirmada, e
  dispensa a data).
- p6: "The floor the sonar found is about 1,200 feet shallower" (conta); "As of October 2026, … no longer includes the Milwaukee Deep"
  (datada: a API da NCEI em 26/10/2026; a Sala relê na semana da gravação); "The expedition's scientists write" (presente de documento,
  2021).
- p7:
  - "has one other contender": a moldura do F77;
  - "with no one living on them": achado 23, ESTREITAR;
  - "Both Britain and Argentina claim them": Marine Regions, 2026, confirmada;
  - "it has officially belonged": o gazetteer consultado em 26/10/2026, confirmada;
  - "The organization says…" e "Argentina … disagrees": o M-3 de setembro de 2026, com o apêndice de 2023, confirmadas; o "disagrees"
    é a objeção registrada em 2023, no texto em vigor;
  - "is in the Atlantic": pela linha, que a frase diz;
  - "lies the deepest point of the Southern Ocean": o gazetteer de 2026, confirmada.
- p8: "the two look a lot alike" (presente genérico; o resumo de 2020); "can't be checked again" (lógico); "By NOAA's estimate, no fish
  lives" (achado 10, DA-FONTE; a página é de 14/01/2026); "sits right at that edge" (geografia contra a faixa da NOAA).
- Os voláteis na voz são dois, os dois datados na própria frase: o gazetteer (outubro de 2026) e o lago de lava (agosto de 2026).

SPOT-CHECK (cópias em texto de `midia/atlantico-fundo/fontes/`, sem rede):
- O resumo do DSR I 2020 (`fa-nora-528113-dsr1-2020.txt`): "No snailfish were observed"; "in a density similar"; "a similar exterior
  colour, texture and morphology"; "It is concluded that…". CORRIGE A VOZ (achados 2, 3, 17 e 18).
- Kilbourne et al. 2025 (`03-kilbourne-2025-grl-hal-05463233.txt`): "between 1381 and 1391 CE, and likely occurred during summer or
  fall"; "the only reported sign that the eastern Puerto Rico Trench has produced a great earthquake"; "parent earthquake magnitudes of
  8.0 or more"; "probably spans thousands of years"; "Neither source accounts for the deadly 1918 tsunami…"; "hundreds of meters
  inland"; "almost exactly one century before Columbus". CORRIGE A VOZ (achados 5 e 13); o resto confirma.
- O USGS, a página do mapa do fundo (`fb-usgs-seafloor-map.txt`): "three cruises in 2002 and 2003", "NOAA ship Ron Brown",
  "8300-8340 m", "rotated blocks of the NOAM plate that indicate trench subsidence" e "Tsunami hazard … from submarine slope failures
  appears to be high" confirmam. "(reconstructed) elevations of +1300 m and -4000 m" CORRIGE A VOZ (achado 4). A página diz também que
  partes da fossa já tinham multifeixe antes de 2002; o roteiro não diz o contrário.
- O USGS, OFR 2006-1210 (`fa-usgs-ofr2006-1210-introduction.txt`): "in contrast … slide past each other with only a small component
  of subduction"; "which indicates the presence of an active downward force"; "4 million U.S. citizens" (de 2006, fora da voz, como
  manda o N12). CORRIGE A VOZ (achado 7).
- A NOAA, "What is the deepest-living fish?" (`fb-noaa-oer-deepest-fish.txt`, 14/01/2026): "about 8,400 meters (28,000 feet)"; "between
  8,200 and 8,400 meters deep (27,000 to 28,000 feet)"; a rede de 1970 a "8,370 meters (27,460 feet)", "hard to know for sure".
  CORRIGE A VOZ (achado 10); a rede confirma.
- Bongiovanni et al. 2021 (`02-bongiovanni-2021-gdj3.122.txt`): "8,378 ± 5 m uncertainty at 19.712°N/67.311°W"; "verified … as 8,376 ±
  5 m"; "These uncertainties represent a 95% confidence"; os CTDs no submersível e nos landers, e o perfil "determined after the deep
  submersible dives"; os dados ao Seabed 2030 em outubro de 2020. CORRIGE A VOZ (achado 8); o resto confirma.
- Stewart & Jamieson 2019 (`01-04-stewart-jamieson-2019-earscirev.txt`): "consistently shallower than those published with the
  deepest of those being 8740 m"; "7450 m for that coincident location, a median ridge"; "requires correction, or rather the name simply
  falls into abeyance"; "approximately 40 km east of the Lyman (1954) position". Confirma p6 e CORRIGE o pedido (achado 9).
- O relatório do USC&GS de 1883 (`04-uscgs-relatorio-1883-CSC-0082.txt`, l. 3514–3518): "four thousand five hundred and sixty-one
  fathoms about seventy-five miles to the northward of Porto Rico"; "brown ooze"; "bottom specimen and temperature". Confirma, com o
  achado 16.
- O NCEI, evento 1458 (`fa-ncei-tsunami-evento-1458.txt`): M 7,1; 6,1 m; "western and northern coasts"; 116 oficiais, 144 no banco,
  "greater than 200". Confirma "magnitude 7.1", "20 feet" e "more than 100 people".
- A Popular Science e o release da Five Deeps (`fb-popsci-2018-12-21-vescovo.txt`, `fb-fivedeeps-release-2018-12-21.txt`): "Wednesday,
  December 19"; "an approximate two-and-a-half hour" descida; o Archimède a "8,300 meters … but it did not reach the" ponto mais fundo;
  "First Human Reaches the Deepest Point in the Atlantic Ocean". Confirmam.
- A NASA, de 07/09/2026 e de 2021: o Landsat 8 em 24/08/2026 e o "persistent lava lake in its summit crater" (confirmam);
  "no permanent human residents nearby" (achado 23).
- The Sun, 28/07/1939 (`fb-thesun-1939-07-28-p3-ocr.txt`): "28,680 feet), north of Puerto Rico and Hispaniola"; "has been named the
  Milwaukee Deep, from the United States cruiser". Confirma p1 e p6.
- O blog da Five Deeps (`fb-fivedeeps-southern-live.txt`): "We are going to propose naming this new point the 'Pressure Deep'".
  Confirma o "had wanted".
- As conversões, todas certas:
  - 8.378 m = 27.487 ft = 5,21 mi;
  - 470,86 m = 1.545 ft;
  - 134,3 km = 83,45 mi;
  - 7.450 m = 24.442 ft;
  - 362 m = 1.188 ft;
  - 113 m = 370,7 ft;
  - 4.561 braças = 27.366 ft;
  - 3.875 braças = 23.250 ft;
  - 5.999,7 m = 19.684 ft;
  - 20 mm = 0,79 in;
  - 2 m = 6,6 ft;
  - 5 m = 16,4 ft;
  - 200 mi náuticas = 230,2 mi.

A ESCALA (o mesmo fato igual em todo lugar):
- "about 83 miles": gancho, p5 ("from the nearest coast of Puerto Rico, off Aguadilla") e p8. Igual, a mesma conta (F04).
- "more than five miles": o ponto (gancho) e o arame de 1883 (p1). As duas medidas estão certas (5,21 e 5,18 mi), e p1 diz logo depois
  que o lugar era outro (N22).
- "about 27,500 feet": o sonar (p5) e a NOAA (p8). A 2ª é o achado 10.
- "about 1,200 feet": o gancho e p6. É a mesma conta (8.740 − 8.378 m), mas o gancho errava o lugar (achado 1).
- "a crowd of fish", "Some 200 of them", "about 200 fish": iguais. "no fish at all" e "none" são o achado 2.
- "more than 28,000 feet": 1939 (p1) e 2011 (p6). Cada um com a fonte, os dois certos.
- "more than four miles down" e "About 24,000 feet down": coerentes (7.300 m = 4,5 mi).
- A rede: "nearly as deep as the deepest point" (p2) e "nearly that far" (p8). Coerentes.
- O gazetteer com dois nomes: achado 19. O estudo de 2019 e o de 2021: achados 6 e 20.

DECISÕES SOBRE OS ALERTAS DO PORTÃO:
- **"never" ×2, aceitos.** "It never reached the deepest point, though.": o release de 2018 diz que o Archimède "did not reach" o
  ponto mais fundo (`fb-fivedeeps-release-2018-12-21.txt`, l. 19). "about nine-tenths of it had never been mapped": é o F78, uma
  fração, não um universal.
- **"first" ×2, aceitos.** O release diz "First Human Reaches the Deepest Point in the Atlantic Ocean", e a Popular Science, "the first
  person to reach the absolute nadir of the Atlantic Ocean". Nenhuma das duas frases tem "bottom" nem "floor".
- **"Milwaukee Deep" ×3, aceitos,** como o nome de 1939 e o da lista antiga; a 3ª ocorrência com o achado 19.
- **"anomaly" ×1, aceito:** é o F43, atribuído, e o achado 7 mexe na frase seguinte.
- Taxas, autoplágio e fecho: nenhum alerta. O fecho (a borda da vida e as 83 mi) não repete a pergunta e não é lista. Também não usa o
  molde dos quatro anteriores, o par curto aforístico ou o "X did not." (conferido à mão contra os quatro `roteiro-narrador.md`).

O QUE ESTÁ FORTE:
- **O gancho cumpre a regra nova e paga os dois títulos numa frase só.** "About 83 miles off Puerto Rico, a U.S. island, lies the
  deepest point in the Atlantic Ocean." tem o lugar da foto, o número e a marca dos EUA.
  - Os cinco tempos estão lá: o Everest com o topo de fora, a Marianas na forma honesta com o "But" na 49, e três laços concretos (os
    peixes, a primeira pessoa, a lista).
  - O corpo paga os três, na ordem das visitas, e a pergunta não volta no fim.
- **A disciplina de dono nas partes perigosas.** No risco (p4), 1918 está na Passagem de Mona ("It wasn't in the trench."), com a
  magnitude na boca do banco da NOAA e "more than 100 people"; Anegada é britânica e "far from its deepest point", a magnitude é "Computer
  models" e o fim é "thousands of years apart". Também:
  - o Archimède, com "more than four miles down" e "never reached the deepest point";
  - o 1939, com "more than 28,000 feet";
  - "That's almost exactly what the newspapers reported in 1939.", lado a lado, sem dizer cópia (N23);
  - a 2ª virada como o número da lista e não "we measured it wrong" (N04).
- **A espinha das visitas e o fecho.** Cada parte é uma visita que corrige a anterior: o arame, o eco, a tripulação, a rede, o
  multifeixe, o robô, o sonar e o mergulho, a conferência, a outra fossa, a volta. O fecho termina num lugar e numa borda, com a
  última frase no título ("The deepest point in the Atlantic, about 83 miles off Puerto Rico, sits right at that edge."), e é outro
  molde que o dos quatro vídeos anteriores.

NÃO TOCAR:
- O gancho inteiro, fora as trocas dos achados 1 e 2: a 1ª frase, "It's more than five miles down.", "Stand Mount Everest on the bottom,
  and its top 1,500 feet would stick out of the water.", "When you think "deepest ocean," you think Mariana. But that's the Pacific,
  about 9,500 miles away.", "In 1964, a French crew dove into the Puerto Rico Trench and reported a crowd of fish.", "In 2019, a
  submersible went back to the exact same spot.", "The first person to reach the deepest point itself got there only in December
  2018.", a pergunta e a assinatura ("You're at Alpha Point, and this is where the story of the bottom of the Atlantic begins.").
- As pontes que ficam: "A sound could give a number. It couldn't show anyone what was down there." (p1), "Neither could map the floor.
  That took a different kind of sonar." (p2), "That number was not the one in the official list." (p5), "The expedition also took its
  sonar, and its sub, to the other end of the Atlantic." (p6) e "Off Puerto Rico, the French crew's fish were waiting for a second
  look." (p7).
- p1: "The Survey's report for that year describes the bottom as brown ooze." e "That was about 60 miles east of the deepest point the
  sonar would later find." (a forma da R21).
- p2: "It went more than four miles down.", "It never reached the deepest point, though.", "About 24,000 feet down, the French crew
  reported a crowd of fish." e "How deep the fish was when it swam in, no one knows." (a R13).
- p3: "That was 15 years before anyone reached the deepest point." e "By the USGS's measure, the trench has the most negative gravity
  anomaly on Earth."
- p4: "In October 1918, an earthquake struck the Mona Passage, west of Puerto Rico. It wasn't in the trench.", "NOAA's tsunami database
  puts it at magnitude 7.1." (o decimal fica: atribuído, e a cópia para a voz o escreve por extenso), "The quake and its tsunami killed
  more than 100 people.", "Computer models put it at magnitude 8 or more." e "They think quakes like that come thousands of years
  apart.".
- p5: a frase da inscrição, "Soon after, a problem with the robot cut this one short.", sem número e sem "here"; o parágrafo de Vescovo
  inteiro (quarta-feira, 19/12/2018; sozinho; ≈2 h 30; "He was the first person to reach the deepest point of the Atlantic."; "within
  about 7 feet").
- p6: "That's almost exactly what the newspapers reported in 1939.", "And the USGS sonar had shown a shallower floor since 2003.", a
  frase da ordem das datas ("Their study came out before the expedition's own results.", a R31) e a definição da zona econômica (sem
  ela, a N32).
- p7: "Both Britain and Argentina claim them.", as frases da IHO ("In 2023, the International Hydrographic Organization recognized the
  Southern Ocean. It begins at 60 degrees south. The organization says the line carries no political meaning, and not every country uses
  it. Argentina, for one, disagrees."), "By that line, the Meteor Deep, well to the north, is in the Atlantic." e "The expedition mapped
  it but didn't dive there.".
- p8: a última frase, "The deepest point in the Atlantic, about 83 miles off Puerto Rico, sits right at that edge.".

Nota para a casa (não é achado):
- **Sugestão fora da rubrica: Aguadilla em 1918.** O NCEI (S29, `fa-ncei-tsunami-evento-1458.txt`, os comentários) diz que o tsunami de
  1918 "lashed the northwest coast at Aguadilla", a mesma costa de onde se medem as 83 mi. O laço daria a p4 um lugar do título sem
  alarme. Não está no dossiê como F (o juiz o deixou à Sala, "O que fica aberto"), e por isso não é troca: a Sala decide se o grava.
- **Sugestão fora da rubrica, com cuidado: os invertebrados.** A mesma página da NOAA diz que, abaixo da faixa dos peixes, "all animals
  discovered so far have been invertebrates without bony skeletons like sea cucumbers and isopods". Fecharia o laço dos pepinos-do-mar
  com a borda do fecho. Só serve se a fala não sugerir que o sítio de 1964 (7.300 m) ficava abaixo da faixa (8.200–8.400 m); não está
  no F70.
- **Para a rodada 2:** conferir primeiro o 2º parágrafo de p8 (achado 3) e o fim de p4 (achados 5, 12, 13 e 21), que mudaram de forma,
  e as duas frases do gancho (achados 1 e 2). Os 5 graves são os que mudam o que vai ao ar; os médios 6 a 14 mudam o que o ouvido
  entende; o resto é dose. Depois desta rodada, a lista tende a criar resíduo, e a próxima deve medir se a cadeia "that wave / the
  wave" de p4 e a abertura nova de p4 ("The agency says the walls…") soam naturais em voz alta antes de pedir mais.
