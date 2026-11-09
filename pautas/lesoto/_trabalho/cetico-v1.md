# Vídeo 7 (`lesoto`): o cético da pauta v1 · 09/11/2026

Julga `pautas/2026-11-09-video-7-lesoto.md` (a pauta v1). Não a reescreve: diz o que cai e o que muda.

**O que li** (09/11/2026, ~00:35 a ~01:00 de Brasília, um pedido por vez):
- **do disco:** a pauta v1 inteira; o resumo da base (`pautas/2026-11-09-video-7-lesoto-fatos.md`), `fatos-a.md`, `fatos-b.md` e
  `concorrencia.md`; o cético do Cassino (o molde); `marca/voz.md`, `marca/embalagem.md` e a memória `feedback-titulo-unico.md`;
- **das cópias locais** (`midia/lesoto/fontes/b/`, só lidas, com `python -I`):
  - o tratado na FAO (`fao-tratado-lhwp-1986.txt`): o Art. 1 (as definições), o 5 e o 12 inteiro;
  - o Mail & Guardian de 17/03/2000 (`mg-2000-katse-massacre-coverup.txt`), inteiro;
  - o comunicado da SANDF de 22/09/1998 (`pmg-6710-…`) e a ata de 02/11/1998 (`pmg-6712-…`), nos trechos de Katse;
  - Likoti, 2007 (`likoti-1998-military-intervention.pdf`), pp. 253, 257 e 258;
  - Mwangi, 2021 (`daedalus-mwangi-2021.pdf`), pp. 183 e 185;
  - o discurso do orçamento de 2026/27 (`lesotho-budget-speech-2026-27.pdf`): os §§ 29, 30 e 52 e o Anexo I;
  - o AllSales da LHDA (`lhda-royalties-allsales-2026-10-01.pdf`), **todos os anos**, e não só de 2022 em diante;
- **na web:**
  - 2 leituras pelo WebFetch: a cópia de terceiros da transcrição do CaspianReport (https://rosetta.to/u/caspianreport/how-tiny-lesotho-turned-into-africa-s-water-tower)
    e o GroundUp de 05/11/2025 (https://groundup.news/article/the-real-cost-of-johannesburgs-water/). As duas leituras são resumo de
    modelo (†);
  - 3 buscas: o índice da Eskom no royalty, a colisão de "pumping that never happens" e "paid for gravity", e a transferência
    Thukela–Vaal.

Nada recusou a leitura, e nada se contornou. Não usei o vidIQ, o navegador, banco pago nem o git.

**Os scripts novos** estão em `pautas/lesoto/_trabalho/scripts/` e rodam com `python -I -X utf8 -B <script> <arquivo>`:
- `cetico_royalty_historia.py <AllSales.pdf>`: a parte de cada componente do royalty, ano a ano, de 2001 a 2026, e a tarifa da
  eletricidade por m³. Os anos de 1996 a 1999 saem sem sentido, e 2000 não é lido;
- `cetico_royalty_colunas.py <AllSales.pdf>`: todas as colunas de jan/2024 a jul/2025;
- `cetico_trecho.py <txt> <marcador> <n>`: imprime um trecho de um texto longo, a partir de um marcador.

---

## Os achados, do mais grave ao menos

### [K1] O título recomendado é quase o do enxame de 10 dias atrás, e o 2 é da mesma família (grave; muda o §2, o §8 e o "Lado a lado")

**O problema.** A pauta diz, na linha "A colisão" do título 1: "nenhum título no YouTube junta 'gravity' e o Lesoto". Isso é verdade, mas
não é a régua do canal. A régua (memória `feedback-titulo-unico`, 01/11/2026) é esta: "título igual ou quase igual nos últimos 12 meses, em
inglês" vai no topo.

**A prova:**
- **o enxame, lido pela Sala em 09/11:** "Why South Africa Pays Millions to the Country Trapped Inside It" (GEO INSIGHTS, 47 views, **10 dias**,
  15:34). Ele tem 8 das 9 palavras do título 1: só o "for Gravity" é diferente, e o "Trapped" a mais;
- "Lesotho's 'White Gold' - Why South Africa Pays Billions for Water" (172 views, 6 meses). Com ele, o "Why South Africa Pays … for …" já tem
  dois vídeos em 6 meses. O título 2 ("Why South Africa Pays a Mountain Kingdom for Gravity") cai na mesma família;
- as views deles são mínimas. O risco não é perder a busca para eles. O risco é o título do canal parecer o do enxame, que é o que o Lucas
  culpou no Atlântico ("Acredito ter influência do título repetido de outro canal"). E ainda não se sabe o que o GEO INSIGHTS conta (ver
  "Para a Sala ler", item 1).

**O "for gravity", lido a frio.**
- Ele lê como **paradoxo ou piada**, mais do que como mentira ou física. A voz o paga como figura, aos 40 s, com "in effect".
- Mas a figura comprime mais do que a pauta admite. Desde 2024, a parte fixa é de 33 % a 43 % do royalty (K3), e ela é a diferença de
  **investimento** entre os dois esquemas, não a eletricidade.
- E a piada do título fica longe do tom do ato 4 (19 mortos, K2): quem clicou pelo humor encontra uma operação militar no minuto 9.

**O que muda:**
- **os títulos 1 e 2 caem**;
- **o título que eu recomendo é "Why South Africa Is Billed for Pumping That Never Happens"** (57 caracteres):
  - **é literal:** a LHDA apresenta uma fatura todo mês, "on behalf of Lesotho" (Art. 12(22)). A maior linha dela, "Electricity", é a
    parte variável do royalty que representa "the difference in electricity costs attributable to pumping operations" (Art. 12(10)(b)).
    Essa água não é bombeada (fatos B 2g);
  - nomeia a África do Sul e guarda o Lesoto e o tratado;
  - mantém o "Why" e um paradoxo que se entende em 2 s;
  - mantém viva uma palavra do fio ("pump");
  - não usa "country inside", "pays" nem "white gold";
  - **o risco é ler como golpe** ("cobrada por um serviço que não acontece"). O teste dos leitores pergunta: "parece uma fraude?";
- **para o teste dos leitores**, junto dele:
  - "The Country That Gets Paid for Gravity" (38): a figura da gravidade, sem "Why" e sem lugar conhecido;
  - o 3 (1998), se o Lucas quiser o pacote de 1998;
- **a colisão do título novo** se confere no vidIQ (com `language: "en"`) e no YouTube antes do teste. Minha busca na web não achou
  "pumping that never happens", "billed for pumping" nem "paid for gravity", mas ela indexa mal o YouTube (a própria pauta diz isso).

### [K2] Em 1998, a pauta escolhe uma versão da ordem, chama a outra de erro e lê a ata ao contrário (grave; muda o "Três coisas", o §4.5, o §5, o §7 (ato 4) e o gancho B)

**O problema.** A pauta diz que Katse foi atacada "no mesmo horário" que Maseru. Também diz que o CaspianReport "já disse, errado, que Katse
foi o primeiro alvo". No §5, ela proíbe "a primary target", "contra a ata que põe Katse por último". **As fontes da própria base, lidas hoje,
dizem outra coisa:**
- **o Mail & Guardian (17/03/2000)** dá as duas coisas:
  - o pelotão "went for the Katse barracks, small and remote, immediately as the rest of the intervention force headed into the capital";
  - e, no mesmo texto: "The presentation confirmed Katse was a primary target". É a apresentação escrita da SANDF ao Parlamento, de
    novembro de 1998;
- **Likoti (2007), o estudioso que a pauta quer citar pelo título "Resource War?":**
  - "the SANDF went first to the northern part of the country to the strategic Katse Dam" (p. 253);
  - "The force then moved to Maseru" (p. 253);
  - "By first securing the Katse Dam" (p. 257);
- **Mwangi (2021, Daedalus; professor da Universidade Nacional do Lesoto):** "one of the SANDF's first objectives was to secure control of the
  strategic Katse Dam, an area not controlled by rebel forces" (p. 185). É uma terceira versão: ela contradiz o comunicado, que fala em
  "mutineers resisted" em Katse;
- **a ata de 02/11/1998 não põe Katse por último no tempo.** São "three priorities", e a terceira é "Lastly the aim was to secure the
  operational areas such as Maseru and the Katse dam as a whole". Ela inclui Maseru. É uma lista de prioridades, não uma cronologia;
- **o CaspianReport segue Likoti**, então não está "errado". A frase "the first area where south african troops were deployed was not the
  capital" está na transcrição (rosetta, †).

**As insinuações que sobram na pauta:**
- **"power and water supply facilities"**:
  - no comunicado, é o fim da lista genérica dos objetivos ("the Maseru Bridge Border post, the LDF Military Bases, The Radio Broadcasting
    Station, Embassies…, Royal Palace, Airports, Government Buildings, power and water supply facilities");
  - nada ali nomeia Katse;
  - o gancho B põe essa frase logo depois do pelotão em Katse, e o ato 4 a "grifa". Isso induz o espectador a ler "água = Katse";
- **"We don't know which it was. What the record shows is where the paratroopers went."** É uma piscadela para a tese da "resource war".
  `voz.md` §1: "A voz não arbitra quem tem razão";
- **o §3 enquadra o ato 4** como "o que a barragem vale, visto no dia em que vieram as tropas". Isso faz dos mortos a medida do valor da
  barragem, perto da "morte como espetáculo" (`voz.md` §2).

**Os mortos.** A pauta põe na voz "about half of all the Lesotho soldiers killed" e, logo depois, "29". O espectador faz a conta: 17 de 29 dá
59 %. O que o jornal escreveu foi outra coisa: "about half the total recorded LDF **casualties**", e "casualties" não quer dizer "killed".

**O que muda:**
- **a ordem, numa frase segura que todas as fontes sustentam:** "That same morning, a platoon of South African paratroopers, in helicopters,
  went for the small Lesotho army post at Katse." O comunicado do dia 22 já cita resistência em Katse, e Likoti diz "On the morning of the
  22 September". Sem "at the same hour" e sem "first";
- **ao Lucas:** sai "o CaspianReport disse, errado". Entra "as fontes divergem sobre a ordem; a voz diz 'that same morning'";
- **no §5:** "a primary target" sai da lista de proibidos. Fica proibido dizê-lo sem dono;
- **as duas versões, lado a lado (EN):**
  > South Africa's military said that day that "mutineers resisted" its force at two army bases and at Katse Dam. A lawyer for the
  > widow of one soldier killed there told the Mail & Guardian in 2000 that the soldiers at Katse were not rebels, and fired only after
  > they were attacked.
- **os mortos (EN):**
  > By the Mail & Guardian's count, 17 Lesotho soldiers died at Katse, and two South Africans, a doctor and a medic. South Africa's
  > parliament was told in November 1998 that Lesotho's army lost 29 soldiers in the whole operation.

  Sem "about half";
- **cortes:**
  - o grifo de "power and water supply facilities": se o comunicado for à tela, vai a lista inteira, sem grifo;
  - a frase "What the record shows…";
  - o enquadramento "o que a barragem vale". O ato 4 é "o que aconteceu na barragem em 1998";
- **o navegador não é preciso** para a frase segura. A apresentação escrita da SANDF (nov/1998) fica para a pesquisa (abaixo).

### [K3] "Most of that money is electricity" só vale desde 2010, e o porquê é o índice da Eskom, que a pauta não tem (grave para o ato 3; é também o melhor achado novo)

**O que o Art. 12 diz** (cópia local, lida hoje):
- (1): a África do Sul divide com o Lesoto "the net benefit", 56 % e 44 %;
- (2): o "net benefit" é a diferença entre o custo do "Optimal Scheme" e o do "alternative water project with a delivery capacity of seventy
  cubic metres per second, identified as the 'Least Cost Orange Vaal Transfer Scheme'". O "Optimal Scheme" **pode incluir** um "Follow-on
  Orange Vaal Transfer Scheme": a comparação é entre combinações, não entre "túnel e bombas";
- (9) e (10): o "net benefit" tem três partes, e o royalty, três componentes:
  - um fixo (o investimento);
  - um variável, "representing the difference in electricity costs attributable to pumping operations";
  - um variável de operação e manutenção;
- **(20)(b): "the variable component of the royalty relating to the electricity element of the net benefit shall be indexed to the Average
  Annual Electricity Price"**. O Art. 1 o define como "the average unit price of all electricity sold in any one year by ESCOM". O fixo e o
  de manutenção vão pelo índice de preços ao produtor ((20)(a)).

**A conta** (`cetico_royalty_historia.py`, AllSales inteiro):

| Ano | Parte "eletricidade" | Parte fixa | Eletricidade por m³ faturado |
|---|---:|---:|---:|
| 2001 | 39,2 % | 56,9 % | M0,117 |
| 2005 | 48,4 % | 46,8 % | M0,155 |
| 2008 | 46,7 % | 48,4 % | M0,195 |
| 2009 | 49,4 % | 45,8 % | M0,209 |
| 2010 | 58,8 % | 37,4 % | M0,331 |
| 2013 | 68,6 % | 28,5 % | M0,627 |
| 2021 | 73,1 % | 24,2 % | M1,038 |
| 2023 | 71,4 % | 25,9 % | M1,329 |
| 2024 | 53,9 % | 42,8 % | M2,685 |
| 2025 | 56,6 % | 40,6 % | M3,400 |

- **Até 2008, a parte fixa era a maior.** A eletricidade passou a ser a maior em 2009 e passou da metade em 2010. Desde então, ficou acima
  de 50 % em todos os anos.
- **De 2008 a 2023, a eletricidade por m³ subiu 6,8 vezes** (11,4 vezes desde 2001). A parte fixa por ano subiu só 2,4 vezes (de M157 para
  M375 milhões). Isso casa com o Art. 12(20): a eletricidade segue a Eskom, e o fixo segue a inflação.
- A série de preços da Eskom não foi lida. Uma busca trouxe um título, "South Africa's 927% electricity price pain" (dailyinvestor.com), que
  não li.
- **Em janeiro de 2024, as duas partes saltaram juntas** (o fixo 3,8 vezes; a eletricidade por m³, de 1,33 para 2,69). Isso foi um
  recálculo, não a Eskom (K4).

**O que muda:**
- "most of that money" precisa de "today" ou de "since 2010". Na tela: "Alpha Point calculation from LHDA sales reports, 2001–2026";
- **o ato 3 ganha o índice.** Ele é firme no texto do tratado e é novo contra o CaspianReport:
  - **já agora:** "And the treaty ties that slice to the price of South African electricity";
  - **só com a série da Eskom lida:** "As South Africa's power got more expensive, so did the pumping this water never needs";
- **"The cheapest scheme South Africa could have built instead"** exagera: "Least Cost Orange Vaal Transfer Scheme" é a versão mais barata de
  **uma** alternativa (uma transferência do Orange para o Vaal), não a mais barata de todas;
- **"would have needed pumps"** continua inferência:
  - pelo texto, a diferença de eletricidade é "attributable to pumping operations", e a LHWP não bombeia: a alternativa bombearia;
  - pela física, o Orange abaixo do Lesoto corre mais baixo que o lago do Vaal (de memória, *a ler*: Gariep a uns 1.260 m, o Vaal a uns
    1.480 m);
  - a inferência é forte, mas o Manual de Royalties continua sem leitura (§11, item 1).

**A frase segura** (a frase-chave da ironia):
- **PT:** pelo tratado de 1986, a África do Sul divide com o Lesoto o que o túnel lhe poupa, contra uma alternativa que ela nunca construiu, uma
  transferência do Orange para o Vaal. O Lesoto fica com 56 %. A maior fatia, todo ano desde 2010, é o que o tratado chama de diferença no
  custo da eletricidade "atribuível ao bombeamento", e essa água não é bombeada. O tratado ainda amarra essa fatia ao preço da eletricidade
  sul-africana;
- **EN, para o roteiro:**
  > Under the 1986 treaty, South Africa shares with Lesotho what this tunnel saves it, measured against an alternative it never built:
  > a transfer from the Orange River to the Vaal. Lesotho gets 56 percent of those savings. The biggest slice, every year since 2010, is
  > what the treaty calls the difference in electricity costs "attributable to pumping operations." This water isn't pumped at all. In
  > effect, part of what South Africa pays for is gravity.

### [K4] O gráfico central do ato 5 está errado de outubro a dezembro de 2024 (médio-grave; muda o §4.4, o §6 (ato 5) e o §7 (ato 5))

**O problema.** O §6 descreve a cena assim: "a água entregue por mês cai a zero de out/2024 a abr/2025 […] a [parte] da eletricidade some".
Pelo AllSales (`cetico_royalty_colunas.py`), não some.

**A prova** (M = maloti):

| Mês | Entregue (Mm³) | "Converted" (Mm³) | Eletricidade (M mi) |
|---|---:|---:|---:|
| out/2024 | 0 | 65,000 | 80,06 |
| nov/2024 | 0,06 | 47,786 | 58,59 |
| dez/2024 | 0 | 0 | **152,29** |
| jan a abr/2025 | 0 | 0 | 0 |

- O "Converted" de outubro e novembro soma **112,786 Mm³**. Isso é, ao milésimo, o excesso entregue de maio a setembro de 2024
  (23,108 + 20,775 + 28,606 + 24,976 + 15,321).
- **A água foi mandada antes de o túnel fechar e cobrada depois**, como o Art. 12(16) e (17) preveem para o excesso usado para cobrir a falta
  de outro mês.
- **Dezembro de 2024** cobra M152 milhões de eletricidade sem água entregue nem convertida. Isso não está explicado.

**O que muda:**
- **o gráfico** marca jan–abr/2025 como os meses vazios, out–nov/2024 como "água mandada antes", e dez/2024 fica fora até a leitura da LHDA;
- **a voz** do ato 5 ("In early 2025, for four months…") está certa e fica;
- **uma linha nova e firme** (conta nossa):
  > Before the tunnel closed in October 2024, the system sent about 113 million cubic meters ahead of time, and the October and November
  > bills were paid on that water.
- **o salto de jan/2024** segue sem o porquê na voz. A pista é um resumo de busca atribuído ao Lesotho Times, não lido: "recalculated […]
  after delivery quantities changed". Isso casaria com o recálculo do Art. 12(6).

### [K5] O gancho A responde à pergunta do título e depois a faz de novo (médio; muda o §8)

**O problema.**
- Aos 39,6 s, o gancho já disse como se calcula o pagamento: "The cheapest scheme… would have needed pumps… So South Africa shares what it
  saves… In effect, it pays for gravity".
- Aos 55 s, pergunta: "So why would a country so much bigger pay the small one inside it for water that runs downhill on its own?". Essa
  pergunta já foi respondida.
- É o K8 do Cassino. O quarto tempo do molde (a pergunta que o vídeo inteiro responde) virou uma pergunta retórica.
- O que fica de fato aberto para 14 minutos é a segunda pergunta ("why does so much water start up here at all?"), mais "por que lá em cima é
  outro país" e "o que cada lado ganhou".

**O que muda:**
- o gancho para no fato: o túnel sem bomba, a fatura todo mês, a maior linha posta na eletricidade de um bombeamento que não acontece, e os
  ~18 % com a ressalva do K6;
- **o mecanismo** (a alternativa nunca construída e os 56/44) vai para o ato 3, que é onde o "how" é o capítulo;
- **as frases 3 e 4 viram uma**, para o título novo se pagar até os ~20 s:
  > Yet every month, South Africa gets a bill for this water, and under a 1986 treaty, the biggest line on it is priced on electricity
  > for pumping that never happens.
- **a pergunta final** é uma que o gancho não responde:
  > So how do you put a price on pumping that never happens? And why does so much of South Africa's water start up here, in another
  > country?

### [K6] Os 18 % são um ano recorde, e a dependência corre mais para o outro lado (médio; muda o gancho A, o §4.4, o ato 5 e o "Em uma linha")

**A prova** (o orçamento de 2026/27, lido hoje):
- **§30:** "driven largely by exceptionally high-water royalties of M4.78 billion. This outcome is temporary and cyclical";
- **o Anexo I** (M milhões):

  | | Royalties da água | SACU | Receita total |
  |---|---:|---:|---:|
  | 2024/25 (real) | 2.897,7 (**10,5 %**) | 11.549,2 (41,7 %) | 27.696,6 |
  | 2025/26 (projeção) | 4.778,0 (**17,6 %**) | 9.180,2 (33,8 %) | 27.147,2 |

- **A receita da união aduaneira com a África do Sul** (a SACU) é de 2 a 4 vezes o royalty, conforme o ano. A frase "o gigante que depende
  do pequeno" (fatos §3) fica pela metade sem esse contrapeso. O Art. 12(11) ainda trata parte da cota do Lesoto como já paga pela SACU
  (10,69 % do custo da obra em valor presente). Isso fica no fundo.

**O que muda:**
- **a frase segura (EN):**
  > In the 2025–26 budget year, Lesotho expected these payments to bring in almost a fifth of government revenue, a year its finance
  > minister called exceptional. The year before, it was about a tenth.
- o ato 5 diz, numa frase e com o orçamento como dono, que a maior receita do governo do Lesoto vem da união aduaneira com a África do Sul;
- o "Em uma linha" e o "Três coisas" deixam de pôr os 18 % como medida normal.

### [K7] Contra o CaspianReport, a diferença é real, mas cabe em uns 5 dos 14,8 minutos (médio; muda o §1, o §7 e o §12)

**O que o CaspianReport já diz** (rosetta, †; o vídeo é de 26/07/2022, tem 16:00 e 367 mil views):
- "splitting the royalties 56-44 in lesotho's favor": **a divisão está lá**. A pauta diz que "ele não conta a fórmula do royalty". Ele conta a
  divisão, não o que se divide;
- "annual royalties equal 70 million dollars roughly 5 of state revenues";
- Katse em 1998, "the first area where south african troops were deployed";
- a tese de que o Lesoto "is now effectively subsidizing South Africa's water supply";
- não aparecem "gravity", "cheaper" nem "Eskom". "Pumping" só aparece na descrição da fase 4.

**O que o Alpha Point diz e ele não disse:**
- a base da divisão (a economia contra uma alternativa nunca construída) e a fatia da eletricidade de bombeamento (K3);
- o índice da Eskom (K3);
- o salto de 2024 e os meses de túnel fechado, com a água mandada antes (K4);
- 10 % a 18 % da receita hoje, contra os 5 % dele (K6);
- a fase 2 em 2026 e os 40 anos;
- o perfil e o ponto mais baixo medidos.

Tudo isso mora no ato 3, no ato 5 e em parte do 1. O ato 2 (o assunto de "Why Does Lesotho Exist?", 2,4 mi) e o ato 4 (1998, que o
CaspianReport também conta) são o que quem viu os outros "já viu". Juntos, somam uns 5 min.

**O que muda:**
- **o ato 2** vai de ~420 para ~280 palavras: a fortaleza, a anexação, a terra perdida a oeste do Caledon, 1910 e 1966;
- **o tempo que sobra** vai:
  - ao ato 3, com o índice;
  - ao ato 5, com a água mandada antes;
  - **ao fecho, com um contraste que a pauta não tem.** O Sterkfontein, uma das quatro barragens-chave da Rand Water (L5), é enchido com água
    do Thukela **bombeada** por cima do Drakensberg. O GroundUp de 05/11/2025 diz que o esquema "brings water up to the highveld from the
    foothills of the Drakensberg mountains" (†), e uma busca o confirma por outras fontes. É a bomba que a África do Sul construiu, ao lado
    da que ela paga para não precisar;
  - a altura da subida e o volume se leem na DWS antes de ir à voz (abaixo);
- **ao Lucas:** "o CaspianReport não conta a fórmula" vira "ele conta a divisão de 56/44, não o que se divide nem o índice".

### [K8] Fontes sem nome na voz, e a data do embargo (médio-leve; muda o §4.3, o §5 e o §7, ato 3)

**O problema:**
- **"Some academics call it a 'water coup'"** é o "some people believe" que a `voz.md` §2 proíbe ("sem nome, não entra");
- **"a newspaper reported"** não diz que jornal;
- **o mês do embargo diverge na base.** O Christian Science Monitor (27/01/1986) diz "this month's border restrictions" e "in the days before
  the coup". Mwangi (p. 183) diz "In December 1985, Pretoria ratcheted up the pressure, imposing an economic boycott". O "In January 1986"
  da pauta choca com o segundo.

**O que muda (EN):**
- > A political scientist at the National University of Lesotho writes that several scholars call it a South African-sponsored "water coup." Whether Pretoria planned it is still argued over.

  É Mwangi: "has led several scholars to conclude…", e "Whatever the case";
- > In the weeks before the coup, The Christian Science Monitor reported, South Africa all but stopped trucks and trains from entering Lesotho.
- O Likoti entra só pelo título do estudo. O mesmo texto repete as alegações de segunda mão do Sunday Independent, que o §5 já tira.

### [K9] A miniatura (leve; muda o §8)

- **"NO PUMPS"** repete o título novo ("Pumping"). Sozinha, ela lê como protesto, seca ou posto, como a pauta já diz. A lição de Los Angeles
  (`embalagem.md` §3.1) diz que o dado concreto prende mais que o texto sem objeto.
- **Para a banca:**
  - "6,700 FT UP": com "Pumping" no título, o "UP" ganha sentido;
  - ou "51 MILES DOWNHILL", que se paga aos 11 s, se o perfil confirmar a descida.
- **"ALL DOWNHILL" não:** é a expressão feita "it's all downhill" (`embalagem.md` §2: "Expressão feita com sentido próprio engana").
- **A lupa com a foto de Katse** (CC BY-SA 4.0) põe uma obra ShareAlike numa adaptação. O conferente vê isso antes. A própria `midia.md`
  §7.3 lista uma fonte CC BY-SA (o Bureau of Reclamation) entre as que "não servem". Sem a foto, a lupa pode levar a folha do Art. 12 ou o
  perfil medido, que são formas que existem em documento.
- A 3 ("Not one pump.", a escola calma) segue possível, mas também repete "pump".

### [K10] Os pequenos, cada um no seu lugar

- **O perfil do §10.1** é da superfície. O argumento é que a água passa **por baixo** do divisor, do lado do Senqu para o do Vaal: o perfil tem
  de mostrar a crista acima do túnel, não só os níveis dos lagos.
- **Do Ash ao Wilge:** a LHDA escreve "Wildge", e o mapa vai mostrar o Liebenbergsvlei entre os dois. A voz pode pular o rio do meio, mas o
  rótulo da tela segue a geometria.
- **"two army bases"** e não "two bases in Maseru": que o Ratjemose e o Makonyane (a grafia do comunicado) ficam em Maseru é de memória, *a
  conferir*.
- **De jan a abr/2025, a parte de manutenção não é zero ao pé da letra** (de M1 mil a M52 mil por mês). "Only the fixed part" passa; na tela,
  "≈ 0".
- **As contas da pauta conferem.** As que refiz:
  - 82 km = 51,0 mi;
  - 780 Mm³/ano = 24,7 m³/s = ~6.530 galões por segundo;
  - 35 % dos 70 m³/s;
  - 12,2 vezes por km²;
  - 298,30 ÷ 114,95 = 2,60;
  - 4.778,0 ÷ 27.147,2 = 17,6 %;
  - as cinco partes "eletricidade" de 2022 a 2026: 71,6, 71,4, 53,9, 56,6 e 63,7 %.

---

## O que passou

- **O Art. 12 na origem:** os 56/44, as três partes, o fixo mais as duas variáveis por m³, os 50 anos desde janeiro de 1995 e a revisão a
  cada 12 anos. A pauta cita tudo com a força certa. O que faltava é o índice da Eskom, no (20)(b).
- **O fato do fio é firme:** a água da fase 1 desce sem bomba (S3, S14, S18).
- **Jan–abr/2025 é real:** só a parte fixa, de M124,15 a 127,52 milhões, com a eletricidade em zero. A voz do ato 5 está certa.
- **As citações de 1998 conferem palavra por palavra nas cópias:**
  - "mutineers resisted the CTF at the Ratjemose and Makonyane military bases and Katse Dam";
  - os "198 South Africans";
  - o advogado ("denied the LDF soldiers at Katse were rebels and claimed they returned fire only after the South Africans attacked");
  - os 17 e os 2 de Katse;
  - os 29 e os 8 da ata.
- **O §5 é o melhor da pauta:** "invaded", "massacre", o fósforo, os ~113, os 60 % de Joanesburgo e "took the dam" estão todos lá. Saem dele
  só "a primary target" e "the first target" como proibição absoluta (K2).
- **O tom de 1998:** nenhuma imagem de combate, de soldado ou de corpo, sem trilha, com pausa e com o sim do Lucas antes.
- **O gancho A:** 194 palavras e 65 s a 179, um fio só, sem Joanesburgo. Ele passa na regra da primeira frase (Katse, com o enclave).
- **A duração:** há assunto para 14 a 15 minutos sem encher, desde que o tempo saia do ato 2 para os atos 3 e 5 e para o fecho (K7). O
  índice da Eskom, a água mandada antes e a bomba do Thukela são fatos novos, não enchimento.
- **O CaspianReport:** a data, a duração e as views conferem na cópia de terceiros (26/07/2022, 16:00, 367 mil, †). Ele não fala em
  gravidade nem em eletricidade de bombeamento.

## O que falta ler antes do roteiro, em ordem de risco

1. **O que o GEO INSIGHTS (10 dias) e o "White Gold – Why South Africa Pays Billions for Water" (6 meses) contam**, e a colisão do título
   novo. Isso é da Sala (abaixo, itens 1 a 3). Se um deles já explica a economia contra o bombeamento, o ângulo fica só no índice, na medida
   e nos números de 2024–26.
2. **O esquema alternativo** (o Manual de Royalties, o Protocolo I; a DWS; a pergunta NW3807 do PMG): de onde bombearia e a que altura. Ele
   decide o "would have needed pumps" (K3).
3. **A série do preço médio da Eskom, de 2001 a 2026** (os relatórios anuais da Eskom ou a NERSA). Ela decide a frase "as power got more
   expensive" (K3). Sem ela, fica só o texto do tratado e a conta da LHDA.
4. **A LHDA sobre dez/2024** (os M152 milhões sem água) e sobre o recálculo de jan/2024. Isso vem antes do gráfico do ato 5 (K4).
5. **1998:** a apresentação escrita da SANDF ao Parlamento (nov/1998; "a primary target") no PMG, a fonte da nota 19 de Likoti, e o Mail &
   Guardian de 25/09/1998, que só se leu em resumo. Não muda a frase segura do K2; dá o texto do roteiro.
6. **O Thukela–Vaal na DWS**: a subida até o Sterkfontein e o volume, para o fecho (K7).
7. O resto do §11 da pauta (itens 2, 5, 7 a 14), sem mudança.

## Para a Sala ler no navegador do app

Nada aqui foi contornado: nenhuma destas páginas foi tentada.
1. **"Why South Africa Pays Millions to the Country Trapped Inside It"** (GEO INSIGHTS, 15:34): a página, a miniatura e a transcrição. A
   pergunta é se ele explica a economia contra a alternativa, a eletricidade ou a gravidade.
2. **"Lesotho's 'White Gold' - Why South Africa Pays Billions for Water"** (172 views, 6 meses): o mesmo.
3. **A busca do YouTube**, ordenada por data, por "billed for pumping", "pumping that never happens", "paid for gravity" e pelo título novo
   exato. No vidIQ, com o teto do Lucas e `language: "en"`.
4. **O CaspianReport** (o item 1 da lista da pauta): conferir nas legendas reais o "56-44" e o "first area". A minha leitura veio da cópia de
   terceiros, †.
5. **A Eskom** (a tabela histórica de tarifas ou o relatório anual), só se o WebFetch recusar.
6. O resto da lista da pauta (itens 2 a 9), sem mudança.

---

## A nota: 6,0 · DE PÉ COM AJUSTE

O ângulo fica de pé, e mais forte do que a pauta sabia:
- o Art. 12 põe preço no bombeamento que não acontece;
- o próprio tratado amarra esse preço à eletricidade da Eskom;
- a série da LHDA mostra a fatia crescer de 39 % para mais de 70 %;
- as fontes de 1998 são primárias dos dois lados, e o §5 é rigoroso.

O que está errado se conserta sem pesquisa nova:
- **o título recomendado** é quase palavra por palavra um do enxame de 10 dias atrás (K1);
- **1998**: a pauta trata como erro a versão que a maioria das fontes da própria base sustenta, e lê a ata ao contrário (K2);
- **o gráfico central do ato 5** está errado em três meses (K4);
- **o gancho** responde à própria pergunta (K5);
- **os 18 %** são o ano que o próprio ministro chamou de excepcional (K6).

Desço meio ponto da nota da autora pelo K1 e pelo K2 juntos: o título volta à mesa, e o ato mais arriscado ganha frases novas.

- **Para subir a 7,0:**
  - o título novo, sem colisão no vidIQ, lido pelos leitores como geografia ou geopolítica e não como golpe;
  - o GEO INSIGHTS conferido, sem a conta do bombeamento evitado;
  - a série da Eskom lida e casando com a tarifa por m³;
  - o esquema alternativo lido como esquema que bombeia;
  - o ato 4 reescrito com "that same morning", as duas versões e sem insinuação.
- **Para cair a 5,0 (RESSALVA):**
  - se o GEO INSIGHTS ou o "White Gold" já contarem a economia contra o bombeamento. Aí o ângulo fica só no índice e na medida;
  - ou se o esquema alternativo não for de bombeamento. Aí caem o título novo, o "for gravity" e a frase-chave, e o vídeo volta à
    dependência, com a colisão de família.
