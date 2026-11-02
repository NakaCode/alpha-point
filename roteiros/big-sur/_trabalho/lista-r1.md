# Lista fechada · rodada 1 · big-sur (vídeo 5)

Revisão julgada: `c00a9cce37c4`

> O doutor de roteiro (subagente da Sala de controle), 02/11/2026, sobre os três laudos da bancada da r1, todos com "Revisão julgada:
> `c00a9cce37c4`": `qc-roteiro/fatos-r1.laudo.md` (13 achados, VF01–VF13), `qc-roteiro/roteiro-r1.laudo.md` (16 achados, 19 trocas, e a
> subtração S1–S8) e `qc-roteiro/ouvinte-r1.laudo.md` (19 achados, A1–A19), mais a seção "Para a bancada" do `roteiro-editor.md`. A lista
> que o aplicador lê é `lista-r1.json`; os pedidos, `pedidos-r1.json`. Nada foi aplicado ao roteiro. Os trechos do plano de 1986 citados
> abaixo foram relidos hoje na cópia local (`midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm`, pelo `plano_trecho.py`). Sem rede.

## O resultado

- **23 trocas** (L01–L23), na ordem do texto. Entram: o GRAVE do ouvinte (A1, na parte que cura o nó); os 13 achados de fatos (11 como
  troca, VF12 e VF13 como pedido); dos médios, os que têm troca segura; dos leves, os que não custam nada. A op do aplicador fica em `op`;
  a da lente, em `op_lente`; o porquê inteiro de cada item, em `porque`.
- **4 pedidos** (`pedidos-r1.json`): P01 (VF13 + A18: a Sala lê o §301 no navegador do app, com as duas saídas escritas), P02 (VF12: a
  imagem do mirante sem casa, à regência e ao conferente), P03 (A5 + A9: uma fala de gente com nome, data e dono, no p7) e P04 (A10 a:
  se a regra de 1986 vale hoje, à pesquisa).
- **Os cortes da subtração (S1–S8) não entram**: ficam para o teste do ritmo.
- **`node ferramentas/aplicar-lista.mjs big-sur --lista=roteiros/big-sur/_trabalho/lista-r1.json --seco`: exit 0** (SECO_OK). 23 itens,
  21 diferenças, nenhuma frase sem item, 0 recusas, 0 avisos. As provas (a) aspas, (b) numerais (saem um "half", na L12, e um "1986", na
  L20, os dois declarados), (c) parágrafos e (d) REDIZER passam, e os 35 pares do editor casam uma vez cada. Texto falado `c00a9cce37c4` →
  `a280be45a53a`; o portão, rodado pelo aplicador antes e depois, PASSA nas duas.
- **O portão na cópia** (`_trabalho/_tmp-lista-r1.md`, as mesmas trocas aplicadas por troca de texto simples, sem o aplicador, pelo script
  `C:\Users\zangp\AppData\Local\Temp\claude\C--projetos-alpha-point\b375663d-aa56-4ef7-91a0-2424b9ea0483\scratchpad\lista-r1-aplicar-copia.mjs`):
  `node roteiros/big-sur/_ferramentas/gate.mjs roteiros/big-sur/_trabalho/_tmp-lista-r1.md` sai **0, PASSA**, sha `a280be45a53a` (o mesmo
  do aplicador). **2.357 palavras** (−39; ≈ 12:49 a 184 palavras/min), 34 parágrafos, 190 frases pelo portão, média 12,4, maior 23;
  gancho com 141 palavras até a assinatura (teto 170), "But" na palavra 19, a pergunta antes da assinatura. 0 problemas; os mesmos 4
  alertas de antes ("nobody", "never", "first" e a 1ª frase sem número, já decididos em `escrita-notas.md` §4); autoplágio vazio; taxas
  abaixo dos tetos. Os pedidos à voz ficam de 43 a 107 palavras, fora o 1º do gancho (35, de propósito): o 2º do gancho vai de 99 a
  106, e o 3º de p6, de 102 a 107 (a regra é 40 a 110).
- O roteiro não foi tocado (sha256 do arquivo `3ea39ae514d7…`, o mesmo antes e depois).

## Os itens

Cada item com a troca, as lentes e o porquê curto (o longo está no `porque` do JSON). Palavras pelo portão.

| id | parte | op (lente) | lentes | troca | palavras |
|---|---|---|---|---|---|
| L01 | gancho | DA-FONTE (REDIZER) | ouvinte A1 GRAVE; fatos VF06 / roteiro 5 (a escala do 1986) | "Monterey County's 1986 plan for this coast, the rulebook for building on it, calls the climate mild." | +6 |
| L02 | gancho | REDIZER | fatos VF03; editor (A CONFERIR f9); roteiro NÃO TOCAR, vencido | "So why did so few follow?" | +1 |
| L03 | p1 | REDIZER (CORTAR) | roteiro 7a; ouvinte NÃO TOCAR (conflito) | "The census district and the plan don't cover the same ground." | −1 |
| L04 | p2 | ESTREITAR | fatos VF04; roteiro 9 | "At Cone Peak, in the southern part of the coast, they reach about 5,200 feet." | +1 |
| L05 | p2 | CORTAR | roteiro 8a; ouvinte A6.1 | "…bounded by sheer cliffs, and beaches are few." (sai "the plan adds") | −3 |
| L06 | p2 | REDIZER (CORTAR) | ouvinte A6.2 | "Highway 1 is the basic route into the area. In 1986, the plan counted just one other road from inland." | −2 |
| L07 | p2 | DA-FONTE | fatos VF05; roteiro 14 | "…calls the water resources relatively small and seasonal…" | +1 |
| L08 | p3 | CORTAR | roteiro 8b; ouvinte A6.4 | "It's federal land, owned by the U.S. Forest Service." (sai "the plan notes") | −3 |
| L09 | p3 | REDIZER | roteiro 7b | "Two of them are called Paul's Slide and Regent's Slide." | −4 |
| L10 | p5 | DA-FONTE | fatos VF02; roteiro 1; ouvinte A14 (em parte) | "It sums up the change in one line: a way of life had ended, and a new era began." | +5 |
| L11 | p6 | ESTREITAR | fatos VF06; roteiro NÃO TOCAR das pontes, vencido | "The county's answer took final form in 1986, in the plan this video keeps quoting." | +2 |
| L12 | p6 | ENFRAQUECER | roteiro 6 (ESCALA); ouvinte A11 | "By then, much of this coast was already public land, the plan says." | −1 |
| L13 | p6 | ESTREITAR | fatos VF01; roteiro 2; editor (SEM APOIO 3) | "After the Pfeiffer sale, other families gave land for parks, and the plan credits their generosity." | −1 |
| L14 | p6 | REDIZER | roteiro 10 | "One of them is the turnout beside the bridge at Bixby Creek." | −6 |
| L15 | p6 | CORTAR | roteiro 8c; ouvinte A6.5 | "If a new building would show, it had to be moved…" (sai "the plan says") | −3 |
| L16 | p6 | ESTREITAR | fatos VF07; roteiro 13 | "…capacity for recreation, visitors and a few other priority uses." | +5 |
| L17 | p7 | ENFRAQUECER | fatos VF08; roteiro 11; editor (SEM APOIO 4) | "…a wildfire started in the backcountry above the coast." | −1 |
| L18 | p7 | ESTREITAR | fatos VF09; roteiro 12; ouvinte A19 (em parte) | "…the fire came only months after the long closures of the slides." | +1 |
| L19 | p8 | DA-FONTE | fatos VF10; roteiro 15; ouvinte A6.7, vencido | "…homes like these in rural clusters…" | 0 |
| L20 | p8 | CORTAR | roteiro 4; ouvinte A5 (a reserva), vencido | sai "The same 1986 plan described a serious housing shortage… Some, it said, had camped out, lived in cars, or moved in with friends." | −36 |
| L21 | p8 | ENFRAQUECER | roteiro 16 | "Many come for the view the 1986 plan set out to protect." | 0 |
| L22 | p9 | ESTREITAR | fatos VF11; roteiro NÃO TOCAR de p9, vencido | "It's one of the viewpoints named in the county's rule." | −2 |
| L23 | p9 | ESTREITAR | roteiro 5; fatos VF06 (a mesma raiz); ouvinte NÃO TOCAR, vencido | "In its 1986 plan, the county wrote that whatever came next should stay out of this view." | +2 |

O porquê, item a item:

- **L01** (A1, GRAVE por posição). O "plan" abre o gancho e só no p6 o ouvinte sabe que é o plano que decide o que se constrói. A redação
  do ouvinte não entra inteira: "In 1986, Monterey County wrote" data o ato pelo carimbo (o defeito de VF06 e do roteiro 5: adotado em
  2/11/81 e 11/5/85, certificado em abril de 1986, P [3]–[7]); "here" é palavra que o portão alerta (cta §5); "It isn't the cold" mexe
  numa frase do NÃO TOCAR do gancho (A4, abaixo). Fica a aposição, apoiada no plano: "the Land Use Plan for the Big Sur Coast segment of
  Monterey County's Local Coastal Program" (P [43]) e "it will provide development standards to guide the actions of all State and local
  agencies" (P [45]). Sem verbo e sem tempo: nada diz que a regra vale hoje. Encurtei a 1ª versão ("for what could be built on it", +9)
  para o 2º pedido à voz do gancho não ir a 109.
- **L02** (VF03). "Why didn't more follow?" pressupõe que mais ninguém veio, e pode ser ouvido como "não cresceu", que a Sala veta. Vieram
  poucos. A pergunta antes da assinatura fica, com a mesma função.
- **L03** (conflito; abaixo). Sai o molde "Keep … in mind" do vídeo 4 e a promessa de espera; fica a régua dos dois contornos.
- **L04** (VF04 + roteiro 9). O Cone Peak fica no terço sul (0,66 do caminho de Carmel à divisa, M14). O "about" é o hedge da voz §1
  sobre o arredondamento do plano (P [53]).
- **L05, L08, L15** (roteiro 8 e ouvinte A6: as duas lentes pedem os mesmos três cortes). O metrônomo do "the plan says/adds/notes": sai
  a etiqueta onde a frase anterior já atribuiu e o fato não se contesta (falésias e praias; a floresta federal, que é definição; a regra
  do "mover ou redesenhar", logo depois de "in the plan's own words").
- **L06** (A6.2). O "it" de "In 1986, it counted just one other road" se ouvia como a Highway 1. A atribuição passa para a frase da
  contagem, que é a datada; "Highway 1 is the basic route" é geografia que segue verdadeira (P [1291]).
- **L07** (VF05 + roteiro 14). "relatively small seasonal" (P [188]).
- **L09** (roteiro 7b). "will matter later in this story" é anúncio antes da entrega; os dois deslizamentos se pagam em p7 sem aviso.
- **L10** (VF02 + roteiro 1 + A14). A linha inteira do plano (P [1233]–[1234]), sem "for the beautiful country" ("country" se ouve
  como nação). Os dois-pontos juntam a linha à frase que a anuncia e dão a pausa de citação (A14). O sujeito "The plan" de A14 não entra:
  a frase anterior termina em "the plan says", e "the plan says. The plan sums up" seria mais um compasso do metrônomo.
- **L11** (VF06, datar). A ponte de entrada de p6 deixa de datar a decisão pelo carimbo e continua a mesma ponte (responde à "harder
  question for the county" da saída de p5).
- **L12** (roteiro 6 + A11). As duas "metades" não fecham ao ouvido: p3 dá metade da área do plano à floresta (P [79]) e mais aos parques;
  p6 dava metade da zona costeira (P [1514]), outro denominador, com um termo sem definição. Redação do roteiro ("this coast"), não a do
  ouvinte ("the coastal zone", o termo sem definição). O número pode ir à tela, com a régua.
- **L13** (VF01 + roteiro 2). John Pfeiffer vendeu (P [1235]); os outros doaram ou puseram em fideicomisso (P [1236]–[1239]). Redação do
  roteiro: põe a venda e a doação lado a lado; a de VF01 ("Other families later gave land…") deixa o "Other" e o "later" sem âncora, um
  parágrafo depois de Pfeiffer. "After" se apoia em P [1235] e no "later donated" de P [1236].
- **L14** (roteiro 10). "this video" 4 vezes; a ponte já é conhecida aqui. A 3ª vez, na ponte de entrada de p9, fica.
- **L16** (VF07 + roteiro 13). Os 85 % (P [1428]) servem também a veículos militares e à agricultura costeira, as "coastal priority uses".
  Redação de VF07, que guarda a recreação e diz "priority"; a do roteiro tirava a recreação.
- **L17** (VF08 + roteiro 11). O CAL FIRE dá a agência com jurisdição, não o lugar de origem. Redação do roteiro: "backcountry" é a
  palavra do plano (P [1576]) e não repete "mountains", que vem na frase seguinte; a de VF08 repetiria.
- **L18** (VF09 + roteiro 12 + A19). Sete meses entre a reabertura e o fogo. Do A19 não entram "the fires" (poria o Plaskett, que vai só
  pelo nome, na mesma conta de meses, sem data lida) nem o "ended".
- **L19** (VF10 + roteiro 15). "rural residential clusters" (P [1493]).
- **L20** (conflito; abaixo).
- **L21** (roteiro 16). O trecho de 1986 fala de parte dos visitantes (P [1297]); "They", no presente, falava de todos os de 2026.
- **L22** (VF11). A regra protege a vista a partir dos mirantes (P [230]), não o mirante; o Bixby Creek Turnout é nomeado nela. Agora a
  frase ecoa "It even names some of those viewpoints", do p6: é o retorno que o p9 já faz.
- **L23** (roteiro 5; a escala de L11). O 1986 vira o nome do plano, como a Sala o fixou ("the county's 1986 plan").

## Os conflitos entre lentes, e como ficaram

1. **"Keep both outlines in mind…" (p1): roteiro 7a (CORTAR) × ouvinte (NÃO TOCAR).** O crítico corta: é o molde de "Keep those fish in
   mind." do vídeo 4 e promessa de espera. O ouvinte a guarda: é um dos quatro lembretes que o fizeram entender que o 1.500 é só parte da
   costa, o risco nº 1 dos leitores a frio. Decisão (L03): fica a régua, sai o molde. "The census district and the plan don't cover the
   same ground." diz o mesmo, sem "Keep … in mind" e sem pedir espera; "cover" ecoa "It covers the whole coast", da frase anterior.
2. **Os trabalhadores de 1986 (p8): roteiro 4 (CORTAR) × ouvinte A5 (guardar, com o "In 1986" na frente).** Colados às casas de uso
   ocasional da ACS 2020–2024, eles fazem o ouvido concluir que é assim hoje e que as casas de temporada tiram o teto de quem trabalha;
   nenhuma fonte lida diz isso de hoje, e o tom da pauta é "sem julgar quem mora lá". O próprio ouvinte ouviu ali "indignação por
   justaposição", que só "funciona" pela data. Decisão (L20): corta-se; o rosto humano que o ouvinte pede vai à pesquisa pelo caminho
   certo (P03: uma fala de gente com nome, data e dono, no p7).
3. **"So why didn't more follow?" (gancho): fatos VF03 × roteiro (NÃO TOCAR, "aceita").** Vence o fato (L02): a pressuposição é a que a
   Sala veta. O crítico aceitou a frase sem discutir a pressuposição; a pergunta antes da assinatura fica, com a mesma função.
4. **A ponte de entrada de p6 (L11): fatos VF06 × roteiro (NÃO TOCAR das pontes).** Todo achado de fatos entra. A ponte muda de forma e
   continua ponte: "The county's answer" responde à saída de p5, e "the plan this video keeps quoting" fica.
5. **O p9: fatos VF11 e roteiro 5 × os NÃO TOCAR do roteiro ("p9: tudo, fora a troca do achado 5") e do ouvinte ("o último parágrafo,
   salvo A18").** L22 entra porque é de fatos. L23 é o próprio achado 5 do roteiro, e o ouvinte fica vencido: a troca não muda o ritmo do
   fecho (+2 palavras numa frase de 15), não toca "Hardly a house is in sight", "part of it was a choice" nem a última frase, e deixa p6 e
   p9 dizendo o 1986 do mesmo jeito. VF06 tinha deixado esta frase "pela decisão da Sala" (o 1986 como nome do plano): a troca faz
   exatamente isso.
6. **"small clusters" (p8): fatos VF10 e roteiro 15 (DA-FONTE, 1 palavra) × ouvinte A6.7 (CORTAR a frase).** Vence a troca das duas lentes
   que leram a frase contra a fonte (L19): é a única frase que diz onde as casas ficam, a imagem sob o p8; cortá-la puxaria o "in 2020"
   da frase seguinte. É subtração: se o teste do ritmo a quiser, ela está no laudo do ouvinte.
7. **A definição de wilderness (p3): roteiro 3 (DA-FONTE, trocar) × fatos e ouvinte (NÃO TOCAR).** O crítico a trocava porque a definição
   não estava no dossiê. O verificador a conferiu na lei (16 U.S.C. 1131(c) e 1133(c), cópia do govinfo em `midia/big-sur/fontes/web/`,
   F061 e F062) e a pôs no NÃO TOCAR dele; o ouvinte também. A premissa do achado caiu: fica de fora. O editor ganha a nota (pares da L08).
8. **As redações duplas** (o mesmo achado com duas trocas): L13 com a do roteiro, L16 com a de VF07, L17 com a do roteiro, L12 com a do
   roteiro, L10 com a de fatos e roteiro mais os dois-pontos de A14, L04 com a de fatos mais o "about" do roteiro. O porquê de cada uma
   está acima.

## O que ficou de fora, e por quê

- **Subtração do crítico de roteiro (S1–S8, −124):** pela regra desta rodada, vai ao teste do ritmo. Depois da lista o texto tem 2.357
  palavras, 107 acima do piso de 2.250: nem todos cabem. O S7 corta a frase da L13 inteira (se entrar, a L13 fica sem objeto); o S2 é o
  mesmo corte do A7 (abaixo).
- **Roteiro 3** (a definição de wilderness): conflito 7.
- **Ouvinte A1, a parte "It isn't the cold" / "In 1986, Monterey County wrote" / "here":** ver L01.
- **A2** ("…fewer than 1,500 people, as empty as Wyoming, per square mile."): as três frases do título estão no NÃO TOCAR do crítico de
  roteiro, palavra por palavra; "per square mile" depois de "Wyoming" desfaz o eco do título ("as empty as Wyoming") na frase mais
  importante do vídeo. A medida vem na tela logo depois (a RÉGUA de f4, de ~12 a ~16 s: um quadrado de uma milha quadrada com seis
  pontinhos ao lado do Wyoming) e na fala no p1.
- **A3** ("didn't empty this coast by itself"): o "by itself" diria que a regra esvaziou parte da costa, afirmação causal que nenhuma
  fonte faz; a costa nunca encheu (o gancho diz por que não encheu; o p6, que a regra não a esvaziou). NÃO TOCAR do crítico de roteiro. A
  tensão que o ouvinte sentiu diminui com a L01 (o plano já se apresenta no gancho como a regra do que se constrói).
- **A4** ("The cold, remember, is not the problem."): NÃO TOCAR do crítico ("o único lembrete; paga o gancho"), e a metade do gancho
  ("It isn't the weather.") também. O próprio plano junta as duas coisas: "The climate in Big Sur is mild. Although the winters bring some
  of the heaviest rainfall in California, the summers are long and dry." (P [65]–[66]); "cold" seria uma palavra que o plano não usa.
- **A5** (a fala de gente): vai à pesquisa (P03). A troca de reserva (os trabalhadores com o "In 1986" na frente): conflito 2.
- **A6.3** (tirar "it says" das chuvas): "some of the heaviest rainfall in California" é comparação e guarda o dono (a própria regra do
  ouvinte: atribuir o contestável).
- **A6.6** (tirar "the plan says" dos engarrafamentos): a etiqueta é o antecedente de "It expected that number to double", na frase
  seguinte; sem ela, o "It" se ouviria como a Highway 1 (o defeito que a L06 tira do p2).
- **A6.7:** conflito 6.
- **A7** (cortar Jim Anderson e os Post): é subtração por ritmo (o motivo do ouvinte é o vale de 37 % a 47 %) e é o mesmo corte do S2 da
  subtração, mais "Jim Anderson": vai junto ao teste do ritmo. Lá vale lembrar o tropeço do ouvido em "the Posts" logo depois de "post
  office", que o corte tira.
- **A8** (cortar os três acampamentos): no NÃO TOCAR do verificador ("três acampamentos, Little Sur, Kirk e Anderson Creek… relidos na
  FHWA hoje") e no do crítico de roteiro (o parágrafo dos presos, de "Part of the labor…" a "…reduced.").
- **A9** (trocar a ponte de p7): é ponte do plano, sagrada, e está no NÃO TOCAR das pontes do crítico. Quem paga a pergunta é a fala de
  P03.
- **A10 (b)** (os quase mil dos anos 1880 ao lado dos menos de 1.500 de hoje): fica aberta. A minuta põe lado a lado 1.000 (a costa
  inteira, 1880) e 1.500 (dois terços dela, 2020), a montagem "não cresceu" que a Sala veta e que o portão manda o verificador vigiar; a
  L02 já tira a pressuposição do gancho. A parte (a) vai à pesquisa (P04).
- **A12** ("Farther north, … visitors could already come by stagecoach…"): troca "Big Sur Valley", o lugar que o plano nomeia e o
  verificador conferiu, por uma direção que nenhuma lente conferiu. Valor pequeno para o risco.
- **A13** (pronúncias): não é troca de texto. Vai à cópia para a voz (`roteiros/big-sur/voz/trocas.md`, a partir de
  `marca/pronuncias.md`), quando ela nascer: Santa Lucia, Los Padres, Ventana, Molera, Pfeiffer, Notley's, CAL FIRE, U.S., as décadas e as
  datas. A opção de texto ("In recent years…" no lugar de "In the 2020s") mexe na ponte de saída de p6, sagrada: não.
- **A14**, o sujeito "The plan": ver L10.
- **A15** (reordenar a frase do teste): NÃO TOCAR do crítico ("o teste da visão") e do verificador ("letra a letra").
- **A16** ("…to double in twenty to twenty-five years"): põe dois números no trecho mais denso de p6 (1986, três milhões, a Highway 1, o
  dobro, os 15 %), contra o ritmo calmo (um número por frase, e ar entre eles). "double" sem o prazo não é errado.
- **A17** ("Count the visitors…"): é a ponte de saída de p8, sagrada, e o tríptico está no NÃO TOCAR do crítico; o "rationing" foi
  confirmado pelo verificador (F233: 85 % reservados, no máximo 15 % às casas novas); e "reserved for them" desdiria a L16 (a reserva não
  é só dos visitantes).
- **A18:** vai junto com VF13 (P01): a troca só vale se o §301 for lido; como REDIZER não passaria (traz o "1" e o nome).
- **A19**, o plural e o "ended": ver L18.

## O sagrado, conferido

- **As pontes do plano** (`plano-final.json` › `partes[].ponte_entrada` / `ponte_saida`): todas no texto, palavra por palavra, menos a
  entrada de p6, que a L11 estreita e continua ponte. A saída de p1 ("To see why the census number is so low…") fica, com a L03 logo
  antes; a entrada de p7 ("So what happens…") e a saída de p8 ("Count the cars…") ficam, contra o A9 e o A17.
- **O título nas 3 primeiras frases**, intacto (Big Sur, Los Angeles e San Francisco, os 17 milhões, o distrito e o Wyoming).
- **O "But"** na palavra 19, intacto. **A pergunta antes da assinatura**: "Why?" e "So why did so few follow?" (L02).
- **A assinatura**, intacta, uma vez, no fim do gancho, que tem 141 palavras até ela, inclusive (teto 170).
- **As chamadas** (inscrição e comentário): as frases da inscrição ("A road you could count on in every season was decades away.") e do
  comentário (f180–f181) não mudam.

## A escala (o mesmo referente em todo o texto e no editor)

- **O 1986 como nome do plano, não como data da decisão:** L01 (gancho), L11 (p6) e L23 (p9) falam do mesmo jeito. Os outros "1986"
  (a contagem de estradas, os três milhões de visitantes, as casas em grupos, o "rationing" de p8, o "long before 1986" e o "the 1986
  plan set out to protect") ficam, pela decisão da Sala (VF06).
- **A metade pública:** fica só a de p3 (a área do plano, P [79]); a de p6 sai da voz (L12).
- **Pfeiffer:** "sold" em p5 e a venda em p6 (L13) agora dizem o mesmo.
- **O sul da costa:** o Cone Peak "in the southern part" (L04); Mud Creek continua "near the southern end" (0,90, M14).
- **A reserva da estrada:** L16 (os usos prioritários) e o "rationing" de p8 não se desdizem.
- **O editor:** 35 pares, todos casando uma vez: cada frase trocada ganha a forma nova e a nota "(r1, Lxx: …)"; as cortadas e a juntada
  ficam riscadas; o livro-razão (f9, f30, f65, a entrada de p6, os trabalhadores no p8) e a espinha (f9) acompanham; f52 a f54 recebem a
  conferência do verificador (a lei da wilderness). A linha "Revisão do roteiro" do editor continua `c00a9cce37c4`: quem aplica a lista a
  atualiza com o sha novo, para o `--derivados` do portão.

## A conferência

- `node ferramentas/aplicar-lista.mjs big-sur --lista=roteiros/big-sur/_trabalho/lista-r1.json --seco` → **exit 0**, SECO_OK,
  `c00a9cce37c4` → `a280be45a53a`, 0 recusas, 0 avisos, provas (a)–(e) passando.
- `node roteiros/big-sur/_ferramentas/gate.mjs roteiros/big-sur/_trabalho/_tmp-lista-r1.md` → **exit 0**, PASSA, sha `a280be45a53a`,
  2.357 palavras.
- Os scripts que montaram a lista, os pedidos e a cópia ficam fora do canal, na área de rascunho desta sessão:
  `C:\Users\zangp\AppData\Local\Temp\claude\C--projetos-alpha-point\b375663d-aa56-4ef7-91a0-2424b9ea0483\scratchpad\lista-r1-montar.mjs`,
  `…\pedidos-r1-montar.mjs` e `…\lista-r1-aplicar-copia.mjs`.
