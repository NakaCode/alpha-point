> **[porte Regie]** Origem: `top10-estudio/knowledge/referencias/edicao-johnny-harris.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador. As comparações com «o Bôco em estúdio» descrevem o Top10. A medição foi feita com ferramentas do Top10 (`~/www/analista-de-videos`) que não vieram; os números valem como referência externa medida. Os demais estudos da pasta (BBC, DW, Vox, atribuição) não vieram. E-mails de conta e caminhos pessoais do Top10 viraram `<e-mail>` e `<usuário>`.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# DOSSIÊ — A EDIÇÃO (E O ROTEIRO) DE JOHNNY HARRIS

> **Corpus:** os 15 vídeos individuais mais recentes de `@johnnyharris` (out/2025 → jul/2026),
> listados em `knowledge/referencias/corpus-johnny-harris.json`. Compilados excluídos e justificados
> lá, um a um.
> **Medição:** `~/www/analista-de-videos`, runs `jh-*` — PySceneDetect, OpenCV, Demucs, librosa,
> PANNs, CLAP, ElevenLabs Scribe, e três módulos escritos para esta pergunta
> (`pipeline/rajadas.py`, `pipeline/sincronia.py`, `pipeline/limpa_cortes.py`).
> **Data da dissecação:** 31/jul/2026.
>
> **Pedido do Mateus, literal:** *"ele utiliza técnicas de edição de vídeos muito rápidos, de cerca
> de dois segundos por cada vídeo, mas não é em todo o vídeo, é em alguns momentos que são
> apropriados, pra casarem justamente com os efeitos sonoros, com a música, com arco narrativo, as
> pausas que ele dá."*
>
> **O veredito curto, antes de qualquer tabela:** a intuição está **certa na estrutura e errada no
> número**. A rajada existe, é localizada e casa com o som — mas o plano médio dos 15 vídeos
> recentes **não é de 2 s**, e a peça que ele imaginou como gatilho (a **pausa** antes da rajada)
> **não sobrevive à medição**. Onde a medição contraria a impressão, está marcado com **⚠️ CONTRARIA**.

---

## O PLACAR DA HIPÓTESE

| o que o Mateus disse | veredito | o número |
|---|---|---|
| *"vídeos muito rápidos, cerca de **2 s** por plano"* | ⚠️ **errado para o vídeo** | plano mediano **2,50 s**, média **3,76 s**; por vídeo vai de **1,86 s a 12,63 s** (variação de 6,8× dentro do mesmo canal) |
| *"…"* (o mesmo, mas dentro da rajada) | ✅ **certo, e ele é mais rápido ainda** | dentro da rajada o plano médio é **1,28 s**, e o mais curto de cada rajada tem mediana **0,70 s** |
| *"**não é em todo o vídeo**, é em alguns momentos"* | ✅ **confirmado** | 386 rajadas = **11,1 % do tempo** (mediana **8,4 %** por vídeo), mas **34,7 % dos planos** |
| *"casam com os **efeitos sonoros**"* | ✅ **confirmado — como ACENTO** | corte↔transiente acima do acaso em **15/15** (+10,8 pp) e **+13,7 pp maior dentro da rajada** (45,2 % × 33,3 %) |
| *"…"* (mas como **contagem** de efeitos) | ⚠️ **não confirmado** | efeitos/min **1,33 dentro × 1,41 fora**; só 6/15 têm mais efeito na rajada |
| *"casam com a **música**"* | ✅ **na cobertura** · ⚠️ **não na batida** | **+8,2 pp** de música dentro da rajada (12/15). Mas corte↔batida fica em **+2,4 pp** sobre o acaso: **ele não corta no metrônomo** |
| *"casam com o **arco narrativo**"* | ⚠️ **não na virada de ato** · ✅ **sim na abertura** | 3,5 % das rajadas caem na virada de ato — **o acaso dá 3,5 %**. Mas o 1º décimo tem **21,8 %** do tempo em rajada (2,2× os outros) e o **1º minuto, 37,4 %** |
| *"casam com as **pausas** que ele dá"* | ⚠️ **não confirmado** | pausa antes da rajada: **0,36 s × 0,37 s de acaso**. Só 7,3 % das rajadas têm pausa acima do p90 do acaso (o acaso daria 10 %) |
| — (não estava na hipótese) | 🔑 **achado novo** | **a narração DESACELERA na rajada**: 159 WPM dentro × 169 fora, em **12 dos 15** vídeos |

---

## §0 · O CORPUS — e por que 5 vídeos ficaram de fora

15 vídeos, out/2025 → jul/2026. O detalhe de cada exclusão está no JSON do corpus; o resumo:

| excluído | dur | por quê |
|---|---|---|
| `T0oqR_IimvA` The American war machine | 3 h 13 | **compilado** — os 7 capítulos são títulos de outros vídeos do canal. É exatamente o que o Mateus mandou não analisar. |
| `bLOEhycMG78` The Modern Middle East | 3 h 06 | **compilado** — 9 capítulos = 9 vídeos anteriores |
| `Pc6sCGS6Jfc` The Real Story Behind the Mormon Church | 2 h 10 | **compilado** — a descrição começa com *"Compilation: episodes 1-3"* |
| `vmGm8xn_1Ro` Talking news and media with Max Fisher | 43 min | **fora de formato** — conversa de divulgação de outro canal, sem capítulos, sem edição documental. 177 mil views contra 2–7 milhões do resto: é o outlier de audiência do canal. Incluí-lo empurraria a ASL para cima e sujaria justamente o que se quer medir. |
| `23owsv-R0fs` Mormon Church $293 Billion | 70 min | acima do teto de ~60 min — mas é documentário individual legítimo, e é o **21º** mais recente: ficaria fora dos 15 de qualquer jeito. |

**Um caso de fronteira, assumido:** `GV8KGcFqeLc` *Is Fascism Back?* tem **61,8 min**, 1,8 min acima
do teto. **Foi incluído**: os 9 capítulos são atos narrativos (Intro → Mussolini → Interwar Germany →
The list → The big question), não títulos de outros vídeos. Não é compilado. E é o vídeo **mais
visto** do corpus (7,4 mi) — descartá-lo por 1,8 min tiraria a melhor amostra do canal.

**Não há Shorts:** a aba `/videos` do canal não os lista, e nenhum item do corpus tem menos de 13 min.

---

## §1 · MÉTODO — e o artefato que quase estragou o dossiê

### 1.1 · O que roda em cada vídeo

Pipeline completo (**os 15**, sem cobertura parcial): proxy 720p → PySceneDetect (`AdaptiveDetector`,
`min_scene_len` 0,3 s) → thumbs por plano → **ElevenLabs Scribe** (transcrição com timestamp por
palavra + diarização) → ritmo de fala → estatística de cor/contraste/movimento → **Demucs** (separa
narração da trilha) → **librosa** (cobertura musical, BPM, troca de trilha) → **PANNs** no stem
instrumental (efeitos sonoros) → `rajadas` → `sincronia`.

### 1.2 · A definição operacional de RAJADA

> **RAJADA = sequência maximal de ≥ 4 planos consecutivos, cada um com menos de 2,5 s.**

**Por que 2,5 s:** porque é exatamente a **mediana de plano do corpus** (2,50 s, §3). O limiar
separa a metade rápida da metade lenta do próprio material dele — não é um número escolhido a dedo.

**E a definição muda o resultado, então aqui está a sensibilidade completa**, medida nos 15:

| critério | rajadas | % do tempo | plano médio na rajada | 1º décimo em rajada |
|---|---|---|---|---|
| ≥ 3 planos < 2,0 s | 425 | 7,8 % | 1,12 s | 15,9 % |
| ≥ 4 planos < 2,0 s | 295 | 6,4 % | 1,07 s | 13,3 % |
| **≥ 4 planos < 2,5 s** (adotado) | **386** | **11,1 %** | **1,28 s** | **19,4 %** |
| ≥ 4 planos < 3,0 s | 443 | 15,9 % | 1,49 s | 27,6 % |
| ≥ 5 planos < 2,5 s | 297 | 9,5 % | 1,23 s | 18,4 % |

O que **não** muda com o critério é a conclusão: em todos os cinco cortes o plano dentro da rajada
fica **entre 1,07 s e 1,49 s** (nunca 2 s), e o **primeiro décimo do vídeo sempre concentra rajada**
bem acima da média do vídeo. As conclusões deste dossiê não dependem da escolha do limiar.

### 1.3 · ⚠️ O ARTEFATO: luz piscando contada como corte

Este é o achado de método mais importante do dossiê, e ele quase inverteu uma conclusão.

Ao conferir **à vista** o maior pico de rajada de `jh-deportations` (26:06–26:12, "18 planos em 6 s"),
os frames mostraram **um único plano contínuo**: uma multidão sentada numa estrada sob o giroflex
azul/vermelho de uma viatura. O `AdaptiveDetector` estava contando **cada piscada da luz como um
corte**. Um "pico de montagem" inteiro era lâmpada.

O conserto está em `pipeline/limpa_cortes.py`. A discriminação: **corte de verdade muda a estrutura
da imagem; pisca-pisca muda só brilho e cor**. Comparando os thumbs em cinza normalizado (média 0,
desvio 1 — o que remove brilho e contraste), no **miolo** do quadro:

| | correlação medida |
|---|---|
| corte real | **−0,18 a +0,44** |
| falso (pisca-pisca) | **+0,93 a +0,98** |

Só se funde uma **corrida de ≥ 3 juntas** acima de 0,85, para que um jump cut isolado no talking head
sobreviva. E há uma armadilha dentro da armadilha, que também foi medida: **na primeira versão eu
comparei o quadro INTEIRO, e o filtro passou a engolir corte real.** Numa sequência de gravuras
diferentes exibidas sobre o mesmo cartão (`jh-internet` @00:17), a moldura constante domina o quadro:
o quadro inteiro dá 0,70–0,92 (falso alarme) e o miolo dá 0,02–0,44 (correto). A conferência visual
dos dois casos está registrada — sem ela eu teria trocado um viés por outro.

Efeito da limpeza: **0 % a 2,4 % dos cortes** por vídeo, com impacto pequeno na ASL global e grande
onde importava — os três maiores "picos de rajada" do corpus eram, os três, artefato:

| vídeo | trecho | o que era de verdade |
|---|---|---|
| `jh-deportations` | 26:06, 18 planos em 6,4 s | giroflex de viatura sobre multidão parada |
| `jh-billionaires-elections` | 44:07, 14 planos em 10,2 s | **cartão de créditos finais** com elemento animado |
| `jh-oligarchy` | 32:49, 6 planos em 2,8 s | **uma gravura** com granulação de filme animada por cima |

Os refs BBC/DW e o baseline `nationalism` deram **0 cortes falsos** — o artefato é específico de
material de arquivo com granulação e de cena com luz estroboscópica, que é justamente o repertório
do Johnny Harris. **Todos os números deste dossiê são pós-limpeza.**

### 1.4 · O que a medição NÃO enxerga (limites declarados)

1. **Piso de 0,3 s.** O `min_scene_len` funde planos abaixo disso. Um flash de 6 frames existe no
   material e **não** é contado — os números de rajada são, portanto, um **piso**, não um teto.
2. **Dissolve e whip pan** entram como corte (o detector é de conteúdo, não de tipo de transição).
3. **A CLASSE do efeito sonoro do PANNs não é confiável.** O modelo devolve "Bee, wasp", "Mosquito",
   "Meow" para o que é whoosh, riser e drone. **A contagem e o instante são úteis; o rótulo não é** —
   nenhuma afirmação deste dossiê depende do nome da classe.
4. **Diarização ≠ identidade.** "10 locutores" num vídeo quase sempre é arquivo de TV, não convidado.

---

## §2 · A RÉGUA EXTERNA — e onde nós estamos nela

Antes de julgar o Johnny Harris é preciso saber o que é "rápido". Três réguas medidas com **o mesmo
instrumento**:

| régua | dur | planos | cortes/min | ASL | mediana | p90 | % do tempo em rajada |
|---|---|---|---|---|---|---|---|
| **BBC + DW** (6 vídeos, jul/2026) | 65,9 min | 933 | **14,2** | **4,24 s** | 2,3–3,3 s | 6–25 s | 0,4 % – 11,6 % (mediana 7,3 %) |
| **JH `nationalism`** (2024, baseline antigo) | 26,7 min | 705 | **26,4** | **2,27 s** | 1,17 s | 5,35 s | **17,6 %** |
| **NÓS** (904 cenas de 15 produções) | 192,9 min | 904 | **4,7** | **12,81 s** | 11,31 s | 22,4 s | **1,2 %** das cenas têm < 2,5 s |

Os detalhes dos 6 refs:

| run | dur | planos | cortes/min | ASL | mediana | rajadas | % tempo em rajada |
|---|---|---|---|---|---|---|---|
| `ref-bbc-LWFOA4WJnzs` | 11,8 | 163 | 13,8 | 4,35 | 2,92 | 5 | 4,8 % |
| `ref-bbc-Z9a9lXfC7k8` | 7,1 | 43 | 6,1 | 9,87 | 3,20 | 1 | 2,2 % |
| `ref-bbc-fjwNJpyAxHk` | 11,9 | 193 | 16,2 | 3,69 | 2,60 | 9 | 9,8 % |
| `ref-dw-ESAXuqRpoxU` | 15,4 | 199 | 12,9 | 4,65 | 3,32 | 1 | 0,4 % |
| `ref-dw-MK3oVq9pBDQ` | 13,5 | 237 | 17,5 | 3,42 | 2,60 | 11 | 11,4 % |
| `ref-dw-oV4fCTc3I2c` | 6,2 | 98 | 15,7 | 3,82 | 2,32 | 5 | 11,6 % |

**Duas leituras imediatas.**

**(a) A régua "4,3–4,7 s / 12–14 cortes/min" da `marcas/top10/agentes/regente-de-imagem.md` está
confirmada** por medição independente: BBC+DW juntos dão **4,24 s e 14,2 cortes/min**. Não precisa
mudar.

**(b) A distância que importa não é para o Johnny Harris — é para todo mundo.** Nossa cena mediana
dura **11,31 s**; a das referências europeias, **2,3–3,3 s**. Nós trocamos a imagem **3 a 5 vezes
menos** que a BBC e a DW, e **~6 vezes menos** que o Johnny Harris de 2024. Isso não é uma opinião
sobre estilo: é a medida do defeito que a ARTE-89 nomeou em 31/jul (*"fica rodando o mesmo vídeo por
muito tempo"*).

> **Nota de honestidade sobre o nosso número.** Nossa unidade é a **cena** do espelho, e uma cena não
> é um corte: ela é um gráfico animado contínuo. Conferi os HTMLs de uma produção recente
> (`out/publi-opera`) e cada cena carrega **um** `<video>` — ou seja, hoje a cena realmente equivale a
> uma troca de imagem. A ARTE-89 (destilada em 31/jul, o mesmo dia desta medição) muda isso daqui
> para a frente; o número acima é o retrato de **antes** dela.

---

## §3 · A DISTRIBUIÇÃO DE PLANO — a resposta ao "cerca de dois segundos"

**Corpus: 15 vídeos, 9,24 h, 8.852 planos.** ASL do corpus **3,76 s** · **16,0 cortes/min**.

| # | vídeo | data | dur | planos | cortes/min | **ASL** | **mediana** | p10 | p90 | p99 | <1 s | >8 s |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | The REAL reason the US can't beat Iran | 07/26 | 39,5 | 372 | 9,4 | 6,37 | 2,04 | 0,33 | 19,04 | 66,35 | 22 % | 16 % |
| 2 | Oligarchy is worse than you think | 06/26 | 48,8 | 684 | 14,0 | 4,28 | 2,71 | 0,80 | 9,88 | 23,43 | 15 % | 14 % |
| 3 | China's Dirty Money Problem | 04/26 | 33,3 | 524 | 15,7 | 3,81 | 2,59 | 1,08 | 7,26 | 21,51 | 7 % | 8 % |
| 4 | Is Fascism Back? | 02/26 | 61,8 | 1.059 | 17,1 | 3,50 | 2,54 | 0,79 | 7,18 | 18,78 | 15 % | 8 % |
| 5 | The Internet Didn't Fail. It Was Taken. | 02/26 | 13,0 | 420 | 32,2 | **1,86** | 1,21 | 0,33 | 3,84 | 9,81 | 38 % | 3 % |
| 6 | India vs China, Explained | 12/25 | 31,6 | 374 | 11,8 | 5,07 | 2,50 | 0,67 | 12,26 | 44,72 | 18 % | 16 % |
| 7 | Why This Island Could Trigger WW3 | 12/25 | 29,0 | 138 | 4,8 | **12,63** | 2,17 | 0,32 | 32,16 | **133,57** | 25 % | 25 % |
| 8 | How Switzerland Engineered the Perfect Country | 12/25 | 43,1 | 1.184 | 27,5 | **2,18** | 1,52 | 0,60 | 4,23 | 9,69 | 25 % | 2 % |
| 9 | Why USA 1.0 failed | 12/25 | 32,7 | 481 | 14,7 | 4,08 | 2,71 | 0,83 | 8,18 | 23,31 | 13 % | 11 % |
| 10 | How billionaires buy American elections | 11/25 | 44,3 | 557 | 12,6 | 4,77 | 3,29 | 1,08 | 10,18 | 25,91 | 8 % | 15 % |
| 11 | What Being a BILLIONAIRE Really Looks Like | 11/25 | 36,5 | 440 | 12,1 | 4,97 | 3,38 | 1,04 | 9,97 | 27,20 | 9 % | 15 % |
| 12 | The Prison Break That Embarrassed a Country | 11/25 | 31,7 | 717 | 22,6 | 2,66 | 1,96 | 0,79 | 5,34 | 12,27 | 17 % | 3 % |
| 13 | What's really happening in the ocean's dark zones | 11/25 | 31,2 | 648 | 20,8 | 2,89 | 2,25 | 0,83 | 5,76 | 10,73 | 14 % | 4 % |
| 14 | Why the US is deporting so many people | 10/25 | 45,4 | 692 | 15,2 | 3,94 | 2,50 | 0,88 | 7,75 | 24,69 | 13 % | 10 % |
| 15 | Gold Explained, Finally | 10/25 | 32,3 | 562 | 17,4 | 3,44 | 2,17 | 0,51 | 7,55 | 21,23 | 20 % | 9 % |

Histograma do corpus inteiro (8.852 planos):

| < 0,5 s | 0,5–1 s | 1–1,5 s | 1,5–2,5 s | 2,5–4 s | 4–8 s | 8–15 s | > 15 s |
|---|---|---|---|---|---|---|---|
| 5,2 % | 11,7 % | 15,0 % | 23,0 % | 18,3 % | 17,9 % | 6,2 % | 2,8 % |

### ⚠️ CONTRARIA · "cerca de dois segundos por plano" está errado para o VÍDEO

O plano **mediano** do corpus é de **2,50 s** e a **média é 3,76 s**. A ASL por vídeo vai de
**1,86 s** (`The Internet Didn't Fail`) a **12,63 s** (`Why This Island Could Trigger WW3`) —
uma variação de **6,8×** dentro do mesmo canal, no mesmo ano. **Não existe "o ritmo do Johnny
Harris".** Quem responder "ele corta a cada 2 s" está descrevendo um vídeo, não o canal.

### ✅ CONFIRMA (e melhora) · dentro da rajada ele é MAIS rápido que 2 s

Nas **386 rajadas** medidas, o plano médio é de **1,28 s** (p10 0,79 s · p90 1,82 s), e o plano
mais curto de cada rajada tem mediana de **0,70 s**. Quando ele resolve acelerar, ele vai a
**1,3 s por imagem**, não a 2. A impressão do Mateus subestimou o pico e superestimou a média —
o que faz sentido: o que fica na memória é a rajada.

### O achado que mata a pergunta "qual é o ritmo dele": há DOIS regimes, e o FORMATO decide

| regime | vídeos | ASL | o que são |
|---|---|---|---|
| **rápido** | `internet` 1,86 · `switzerland` 2,18 · `prison-break` 2,66 · `dark-zones` 2,89 | 1,9–2,9 s | ensaio pessoal, **viagem gravada por ele**, crime/perseguição, investigação com material de campo |
| **médio** | `gold` 3,44 · `fascism` 3,50 · `china-money` 3,81 · `deportations` 3,94 · `usa1` 4,08 · `oligarchy` 4,28 · `billionaires-elections` 4,77 · `billionaire-life` 4,97 | 3,4–5,0 s | explicador com arquivo + gráfico + convidado |
| **lento** | `india-china` 5,07 · `iran` 6,37 · `island-ww3` 12,63 | 5–13 s | **história geopolítica contada sobre MAPA ANIMADO** |

O extremo do regime lento é literal: em `Why This Island Could Trigger WW3` há **um único plano de
250 segundos** (@17:33) — 4 min 10 s sem corte, um mapa animado onde os elementos entram enquanto a
narração corre. Em `The REAL reason the US can't beat Iran`, o plano mais longo tem **117 s**
(@01:52) e os três maiores somam 5 min 37 s.

**A leitura útil para nós:** o mapa/diagrama animado dele **não é um plano longo parado** — é uma
cena que continua contando. É exatamente o que a nossa cena de mapa (M03/M16) e a de dados (M09–M11)
já fazem. Nossa cena de 11–25 s **não é longa demais**: as dele, no mesmo papel, são mais longas.
O que falta em nós é o **outro extremo**.

---

## §4 · ONDE A RAJADA CAI

**386 rajadas · 11,1 % do TEMPO do corpus · 34,7 % dos PLANOS.**
Por vídeo: **2,4 % a 37,3 %** do tempo, mediana **8,4 %**.

| vídeo | nº rajadas | % do TEMPO | % dos PLANOS | maior rajada | plano médio na rajada | décimo de pico |
|---|---|---|---|---|---|---|
| Iran | 18 | 7,1 % | 42,5 % | 22,8 s | 1,17 s | **1º** (25 %) |
| Oligarchy | 29 | 7,4 % | 28,5 % | 17,3 s | 1,17 s | 7º (17 %) |
| China's Dirty Money | 24 | 10,6 % | 27,7 % | 14,9 s | 1,53 s | **1º** (35 %) |
| Is Fascism Back? | 35 | 8,7 % | 25,0 % | 29,4 s | 1,27 s | **1º** (19 %) |
| The Internet Didn't Fail | 23 | **37,3 %** | 69,8 % | **51,3 s** | 1,12 s | **1º** (75 %) |
| India vs China | 20 | 8,4 % | 37,7 % | 21,7 s | 1,17 s | 4º (34 %) |
| Island / WW3 | 5 | 2,6 % | 35,5 % | 15,1 s | 0,93 s | 9º (9 %) |
| Switzerland | 80 | **34,8 %** | 61,6 % | 38,0 s | 1,32 s | 7º (55 %) |
| USA 1.0 | 18 | 6,9 % | 21,4 % | 14,7 s | 1,41 s | 8º (14 %) |
| Billionaires buy elections | 8 | **2,4 %** | 9,9 % | 13,6 s | 1,29 s | **1º** (18 %) |
| Being a BILLIONAIRE | 9 | 3,5 % | 14,8 % | 16,6 s | 1,25 s | **1º** (15 %) |
| Prison Break | 41 | 21,3 % | 44,4 % | 32,0 s | 1,34 s | **1º** (40 %) |
| Ocean's dark zones | 29 | 14,1 % | 30,7 % | 29,1 s | 1,35 s | 10º (26 %) |
| Deportations | 23 | 8,1 % | 24,7 % | 17,6 s | 1,32 s | **1º** (20 %) |
| Gold | 24 | 10,5 % | 33,6 % | 16,2 s | 1,22 s | **1º** (27 %) |

### ✅ CONFIRMA · a rajada é do COMEÇO

Dividindo cada vídeo em dez fatias iguais e medindo quanto de cada fatia está em regime de rajada:

| décimo | 1º | 2º | 3º | 4º | 5º | 6º | 7º | 8º | 9º | 10º |
|---|---|---|---|---|---|---|---|---|---|---|
| % em rajada | **21,8 %** | 9,9 % | 10,7 % | 12,8 % | 9,8 % | 9,2 % | 12,9 % | 8,0 % | 7,8 % | 7,9 % |

O primeiro décimo tem **2,2×** a taxa dos outros nove (21,8 % contra 9,9 % de média). E
**9 dos 15 vídeos** têm o pico de rajada exatamente no 1º décimo. Estreitando para os **primeiros
60 segundos**, a mediana sobe para **37,4 % do tempo em rajada** — **3,4×** a taxa do vídeo inteiro.

**A abertura é o lugar da rajada.** Não é impressão: é o número.

### ⚠️ CONTRARIA · a rajada NÃO cai na virada de ato

Testei contra os **capítulos declarados pelo próprio autor** (14 dos 15 vídeos os têm; só o ensaio de
13 min não). Com tolerância de 8 s e 500 sorteios de acaso por vídeo:

- **8 de 229 rajadas (3,5 %)** começam a ≤ 8 s de uma virada de ato — **o acaso daria 3,5 %**.
- **13 de 47 viradas (27,7 %)** são cobertas por alguma rajada — o acaso daria **22,1 %**.

Ou seja: **zero efeito.** A parte "casa com o arco narrativo" da hipótese, se lida como *"a rajada
marca a passagem de ato"*, **não se sustenta**. O que se sustenta é a versão mais forte e mais
simples: ela marca **a entrada** do vídeo.

### As 6 maiores rajadas do corpus — e o que a narração está fazendo em cada uma

| vídeo | quando | tamanho | o que a fala diz |
|---|---|---|---|
| Internet Didn't Fail | @00:09 (1 % do vídeo) | **62 planos em 51,3 s** (média 0,83 s, mais curto **0,21 s**) | *"For a lot of history, information was controlled by the king, the emperor, the church…"* — **comprime séculos** |
| Prison Break | @11:43 (37 %) | 36 planos em 32,0 s | *"He had at least three private jets. He had a private zoo."* — **acumula evidência de riqueza** |
| Is Fascism Back? | @01:03 (2 %) | 34 planos em 29,4 s | *"This took us deeper than expected… into books and documents and speeches, deep into the research"* — **mostra o trabalho de pesquisa** |
| Switzerland | @28:41 (67 %) | 34 planos em 36,4 s | *"I'm gonna pop off and then get back on this exact train… Uh-oh, there's a problem."* — **comprime a jornada** |
| Switzerland | @00:26 (1 %) | 32 planos em 32,8 s | *"I asked the people who run Switzerland's trains if they would let me spend a week…"* — **monta a premissa** |
| Iran | @01:11 (3 %) | 24 planos em 12,2 s (média **0,51 s**) | *"empires rise and fall, and this empire eventually was in decline"* — **comprime 2.000 anos** |

**Quatro funções, e só quatro**, em todo o corpus: **comprimir tempo**, **acumular evidência**,
**mostrar o trabalho**, **montar a premissa da abertura**. Nenhuma rajada existe "para dar ritmo".

---

## §5 · O QUE O ÁUDIO FAZ NA RAJADA — a hipótese central

Esta é a seção que responde ao *"pra casarem justamente com os efeitos sonoros, com a música, com o
arco narrativo, as pausas que ele dá"*. Cada medição vem com **modelo de acaso**: sem ele, "45 % dos
cortes caem perto de um som" não quer dizer nada — pode ser o que qualquer edição aleatória produz.

O instrumento é `pipeline/sincronia.py`, rodando sobre o **stem sem voz** (Demucs), porque a narração
polui a detecção de transiente. Para cada corte mede-se a distância ao **transiente** (onset) mais
próximo e à **batida** (beat tracking) mais próxima, e compara-se com 200 sorteios de cortes em
instantes aleatórios do mesmo vídeo.

| vídeo | casa-transiente (todos) | acaso | **DENTRO** rajada | **FORA** rajada | casa-batida | acaso batida |
|---|---|---|---|---|---|---|
| Iran | 56,1 % | 34 % | **75,0 %** | 41,7 % | 42,9 % | 35 % |
| Oligarchy | 33,4 % | 17 % | **43,9 %** | 29,2 % | 40,6 % | 39 % |
| China's Dirty Money | 39,8 % | 33 % | 39,3 % | 39,9 % | 32,5 % | 32 % |
| Is Fascism Back? | 25,8 % | 13 % | **39,1 %** | 21,6 % | 50,7 % | 45 % |
| Internet Didn't Fail | 55,6 % | 41 % | **62,1 %** | 39,7 % | 40,6 % | 41 % |
| India vs China | 38,1 % | 24 % | **46,5 %** | 32,8 % | 37,0 % | 36 % |
| Island / WW3 | 36,5 % | 34 % | **42,0 %** | 33,3 % | 42,3 % | 39 % |
| Switzerland | 40,2 % | 31 % | **45,2 %** | 32,3 % | 48,4 % | 43 % |
| USA 1.0 | 32,3 % | 28 % | **45,7 %** | 28,5 % | 41,5 % | 39 % |
| Billionaires buy elections | 38,1 % | 27 % | **61,8 %** | 35,5 % | 43,2 % | 41 % |
| Being a BILLIONAIRE | 54,7 % | 39 % | **67,2 %** | 52,5 % | 38,5 % | 33 % |
| Prison Break | 32,1 % | 30 % | 29,3 % | 34,3 % | 41,5 % | 39 % |
| Ocean's dark zones | 26,4 % | 18 % | 26,0 % | 26,6 % | 41,7 % | 39 % |
| Deportations | 23,2 % | 19 % | **28,2 %** | 21,6 % | 39,2 % | 37 % |
| Gold | 53,5 % | 35 % | **59,1 %** | 50,5 % | 51,2 % | 48 % |

### ✅ CONFIRMA · o corte casa com o SOM — e casa MAIS dentro da rajada

- **15 de 15** vídeos têm alinhamento corte↔transiente **acima do acaso**. Mediana observada
  **38,1 %** contra **30 %** de acaso — **+10,8 pontos**, e nenhum vídeo abaixo da linha.
- **12 de 15** têm alinhamento **maior dentro da rajada** que fora. Mediana **45,2 % dentro contra
  33,3 % fora — +13,7 pontos**. Nos casos fortes o efeito é enorme: Iran 75 % × 42 %,
  Billionaires 62 % × 36 %, Internet 62 % × 40 %.

**Esta é a peça da hipótese do Mateus que a medição sustenta com folga.** A rajada não é picotamento:
cada troca de imagem dela está grudada num acento do som.

### ⚠️ CONTRARIA · ele NÃO corta na batida da música

O alinhamento corte↔**batida** fica em **+2,4 pontos** sobre o acaso (mediana 41,5 % contra 39 %) —
dentro do ruído, e em 1 dos 15 até abaixo. **Ele não edita no metrônomo.** O que ele persegue é o
**acento** (o impacto, o whoosh, o riser, a virada do naipe), que pode ou não coincidir com a batida.

A distinção é prática, não acadêmica: quem tentar reproduzir isso cortando "no tempo da música" vai
produzir uma coisa diferente e pior — mecânica em vez de dramática.

### ⚠️ CONTRARIA · NÃO há mais efeito sonoro dentro da rajada

| | mediana dentro | mediana fora | vídeos com "dentro > fora" |
|---|---|---|---|
| **efeitos sonoros / min** | 1,33 | 1,41 | **6 de 15** |

Nenhum efeito. E a densidade absoluta é baixa em todo o corpus (0,4 a 3,8 eventos por minuto — um
efeito a cada 15 a 150 segundos). **Ele não empilha whoosh na rajada.** A sensação de "cheio de
efeito" vem da própria trilha percussiva, que é o que o alinhamento com transiente está capturando.
*(Lembrete do §1.4: a classe que o PANNs devolve é ruim; a contagem e o instante são confiáveis.)*

### ✅ CONFIRMA · há MAIS MÚSICA dentro da rajada

| | mediana dentro | mediana fora | vídeos com "dentro > fora" |
|---|---|---|---|
| **cobertura musical %** | 66,0 % | 54,7 % | **12 de 15** (+8,2 pontos na mediana) |

Os casos extremos dizem o mecanismo: `Is Fascism Back?` tem 78,2 % de música dentro da rajada contra
46,3 % fora; `Being a BILLIONAIRE`, 84,1 % contra 41,4 %. **A trilha entra para segurar a rajada** —
e sai quando o vídeo volta a explicar.

### 🔑 ACHADO NÃO PREVISTO · a NARRAÇÃO DESACELERA quando a imagem acelera

| | mediana dentro | mediana fora | vídeos com "dentro > fora" |
|---|---|---|---|
| **palavras por minuto** | 159 | 169 | **3 de 15** — ou seja, ela é **MENOR** em 12 |

Mediana da diferença: **−12 WPM**. E os casos fortes são de −30 a −45: `Is Fascism Back?` 121 dentro
contra 151 fora; `Billionaires buy elections` 124 × 169; `Being a BILLIONAIRE` 144 × 184;
`India vs China` 134 × 165.

Isto não estava na hipótese e é, na prática, a regra mais acionável do dossiê: **a rajada não é o
trecho em que ele fala mais rápido — é o trecho em que ele fala MENOS.** As imagens entram nos
intervalos entre as palavras de uma enumeração. É o oposto de "acelerar tudo ao mesmo tempo".

### ⚠️ CONTRARIA · não existe a pausa antes da rajada

| | mediana | acaso (mesma janela de 5 s, 300 sorteios) |
|---|---|---|
| maior pausa nos 5 s **antes** da rajada | **0,36 s** | **0,37 s** |
| % de rajadas com pausa antes acima do p90 do acaso | **7,3 %** | 10 % por definição |

**Zero efeito — e, se algo, ligeiramente abaixo do acaso.** Apenas 6 dos 15 vídeos têm pausa
mediana antes da rajada maior que o acaso, e a diferença mediana é de **−0,02 s**.

A parte *"as pausas que ele dá"* da hipótese **não se confirma** na forma "ele silencia e então
dispara a rajada". A pausa dramática existe no material dele — mas ela **não é o gatilho da rajada**.
O gatilho medido é outro: **a abertura do vídeo (§4) e o acento do som (acima)**.

---

## §6 · O QUE ELE MOSTRA DENTRO DA RAJADA

Em vez de classificar as ~8.850 cenas do corpus por visão (caro e desnecessário), montei uma **folha
de contato dirigida** por vídeo (`pipeline/contato.py`): 30 planos amostrados uniformemente **de
dentro das rajadas**, e os 12 planos mais longos. Li as folhas de 6 vídeos escolhidos por diversidade
de formato. O resultado é homogêneo o bastante para ser regra:

| vídeo | o que compõe a rajada |
|---|---|
| `Is Fascism Back?` (@00:04–49:01) | foto e filme de arquivo P&B, **capas e lombadas de livro sobre a mesa**, mãos virando página, documento de época, recorte de jornal, clipe de TV, mapa, print de rede social. **Quase nenhum talking head.** |
| `Oligarchy` (@00:26–35:09) | clipe de telejornal (CBS, MSNBC, Fox), gravura do século XIX, documento jurídico, print de reportagem, retrato de magnata, cartaz de protesto, gráfico rápido |
| `Deportations` (@00:00–43:10) | filmagem de operação policial, body cam, telejornal, C-SPAN, multidão, **e beats curtos do próprio apresentador reagindo** |
| `The Internet Didn't Fail` (@00:11–08:43) | iluminura medieval, gravura de prensa, nota de dólar em macro, **captura de tela de site dos anos 90**, clipe de TV antiga, mapa antigo |
| `Switzerland` (@00:00–40:44) | **material que ele mesmo filmou**: drone, POV de trem, estação, paisagem, mais foto histórica, cartaz de época e o card animado de progresso ("3/26 cantons visited") |
| `China's Dirty Money` (@00:00–16:54) | *undercover footage* rotulado na tela, drone, macro de mãos e dinheiro, mapa animado de fluxo, aérea de porto/contêiner, arte chinesa histórica |

**A regra que sai daí:** a rajada é **material REAL de prova** — arquivo, documento, telejornal,
captura de tela, foto histórica, footage de campo. **Não é motion graphics.** Gráfico e diagrama
aparecem dentro da rajada só de passagem, e nunca são o que a rajada é feita de.

Isso é o oposto do reflexo natural de um estúdio como o nosso, onde "acelerar" costuma virar
"animar mais". Para ele, acelerar é **empilhar prova**.

---

## §7 · O PLANO LONGO — onde mora a ideia

Os planos mais longos de cada vídeo, com o que está sendo dito neles:

| vídeo | plano | dur | o que a narração faz ali |
|---|---|---|---|
| Island / WW3 | @17:33 | **250,3 s** | mapa animado: China entra na ONU, Taiwan sai, Nixon vai à China |
| Iran | @01:52 | **117,1 s** | mapa animado: a geografia que explica os impérios sobre o Irã |
| Island / WW3 | @04:42 | 137,6 s | mapa animado: o perímetro de defesa americano muda |
| Iran | @20:50 | 102,5 s | mapa animado: **como** a CIA derrubou Mossadegh, passo a passo |
| India vs China | @23:42 | 76,9 s | mapa: os pontos de estrangulamento no Índico |
| Switzerland | @23:17 | 73,4 s | diagrama animado: **como** o relógio da malha ferroviária pulsa |
| Being a BILLIONAIRE | @34:42 | 72,2 s | apresentador em câmera: a conclusão do vídeo |
| USA 1.0 | @17:02 | 42,8 s | diagrama: por que o sistema não funcionava e o que Madison fez |
| Billionaires buy elections | @31:43 | 41,0 s | diagrama animado: **como** o dinheiro passa pelo intermediário |
| Oligarchy | @37:41 | 33,3 s | diagrama: Congresso × presidente × cortes federais |
| China's Dirty Money | @11:22 | 32,2 s | diagrama: **como** o código e o dinheiro trocam de mão |
| Deportations | @06:53 | 54,5 s | diagrama: as categorias de status migratório |

**A hipótese do plano longo se confirma, e com uma precisão maior do que a formulada.** O plano longo
não é "onde mora a ideia" em geral — é **onde o MECANISMO é explicado**. A palavra que aparece na
narração de quase todos eles é *"how"*: como o dinheiro anda, como o trem pulsa, como o golpe foi
dado, como o Congresso se divide. Enquanto isso, a **evidência** (o arquivo, a manchete, a foto) vive
na rajada, a 0,7–1,3 s por imagem.

> **A frase que resume a gramática dele:**
> **prova é rápida; mecanismo é lento.** A imagem que *comprova* passa em 1 segundo; a imagem que
> *explica* fica 30, 60, 250.

### 7.1 · O mapa dele não é uma cena — é um PALCO que fica de pé

Este é o achado visual mais transportável do dossiê, e ele só apareceu ao abrir a folha de contato
dos planos longos de `Why This Island Could Trigger WW3`: **os 12 planos mais longos do vídeo são o
MESMO mapa** — a mesma base cartográfica estilizada do Leste Asiático, onde os atores entram e saem
como crachás (`PEOPLE'S REPUBLIC OF CHINA`, `USA`, `TRUMAN`, `ZHOU ENLAI`, `EISENHOWER`,
`SOVIET UNION`), com documentos de época aparecendo por cima. As durações vão de **37,3 s a 250,3 s**.

Não são 12 cenas de mapa. É **um palco** que fica de pé pela metade do vídeo, e a montagem acontece
*dentro* dele. Por isso a ASL desse vídeo é 12,63 s sem que ele pareça parado: o quadro não corta,
mas nunca está parado.

Isso importa porque **nós fazemos o contrário**: cada cena de mapa nossa (M03/M16) é um HTML novo,
com sua própria base, sua própria entrada e sua própria saída — e cada uma custa inferência. Um palco
único reaproveitado por cinco beats seguidos seria **mais barato e mais legível** que cinco cenas de
mapa independentes.

Duas notas honestas sobre esta tabela:

1. **O gráfico de dados é o segundo dono do plano longo.** Em `Deportations`, **9 dos 12** planos
   mais longos são gráfico de linha, gráfico de barras, pictograma ou diagrama de ícones — de
   21,6 s a 54,5 s cada (conferido plano a plano na folha de contato). Um gráfico dele fica no ar
   **duas a três vezes** mais do que uma cena nossa de dados.
2. **O merchan também é plano longo.** Em `China's Dirty Money` (@05:00, 31,2 s) e em `Oligarchy`
   (@20:14, 36,8 s) o plano mais longo do vídeo é a **leitura do patrocinador**. É informação útil
   sobre o formato, não sobre o ofício.

---

## §8 · O ROTEIRO

Base: 15 transcrições Scribe, **92.846 palavras**, 9,24 h. Todas conferidas contra truncamento
silencioso (primeira palavra entre 0,1 s e 7,3 s; última entre 8 s e 40 s do fim — o resto é
crédito/trilha).

### 8.1 · A abertura — 15 de 15 abrem num OBJETO ou numa IMAGEM que está na tela

Nenhum abre com pergunta. Nenhum abre com definição. Nenhum abre com "imagine que". A primeira frase
literal dos 15:

| vídeo | primeira frase | molde |
|---|---|---|
| `deportations` | *"I think we should look at this chart."* | **objeto** (um gráfico!) |
| `billionaire-life` | *"This is what $100 million looks like. $100 million $1 bills."* | **objeto + escala física** |
| `gold` | *"If we took all of the gold that has ever been mined… it would look like this."* | **objeto + escala física** |
| `usa1` | *"Look at this map. I, I mean, old document."* (…e ele acha um **erro de digitação** na Declaração) | **objeto + anomalia** |
| `china-money` | *"These people are ghosts. […] Inside of this bag is $100,000. What should I spend it on?"* | **objeto + jogo** |
| `india-china` | *"This is the most rugged border on Earth."* | **dêixis + superlativo** |
| `prison-break` | *"This moment in a tunnel in Mexico."* | **dêixis** |
| `switzerland` | *"I'm traveling through a tunnel right now on a train that's going 200 kilometers an hour."* | **apresentador dentro do lugar + número** |
| `iran` | *"When you think of Iran, you probably think of this."* (+ montagem de telejornal) | **correção de premissa** |
| `fascism` | *"I keep hearing this word fascism."* (+ 12 vozes dizendo a palavra) → *"I have a confession to make: I don't totally understand it. I feel kind of naive."* | **confissão de ignorância** |
| `billionaires-elections` | *"I've been looking for a video that has almost entirely disappeared from the internet. But I finally got a copy."* | **investigação/mistério** |
| `oligarchy` | *"I wanna tell you a story. Miami, 1973."* | **in medias res** |
| `island-ww3` | *"It's the 1940s and China is ripping itself apart."* | **in medias res histórico** |
| `internet` | *"Information is power, which is why information has always been stuck in a tug of war…"* | **afirmação universal** |
| `dark-zones` | *"Most of our world is hidden in darkness."* | **afirmação universal** |

Contagem: **9/15 abrem em dêixis sobre coisa concreta** ("this chart", "this bag", "this map", "this
border", "this moment"), 2 em afirmação universal, 2 in medias res, 2 em confissão/investigação.
E **11 dos 15 usam "eu" nos primeiros 32 segundos**.

**O contrato (a "assinatura" dele).** Em 5 dos 15 aparece, no primeiro minuto, uma frase que declara
o que o vídeo vai entregar, sempre em primeira pessoa e sempre como *desejo*, não como índice:
*"I wanna show you a different Iran"* · *"I wanna show you the lifestyles of people worth this much"*
· *"I wanna tell you a story"* · *"I think we should look at this chart"* · *"That's the first thing
I wanna find out"*. É o equivalente funcional da assinatura da BBC (*"nesse vídeo eu te explico…"*),
**sem anunciar o índice** — e portanto sem disparar a nossa ROT-11.

### 8.2 · A arquitetura de atos — capítulos do próprio autor

14 dos 15 têm capítulos declarados (só o ensaio de 13 min não tem). Mediana de **6,5 capítulos**.
Títulos de **1 a 4 palavras**, substantivos concretos, **nenhum em forma de pergunta**:
*The Briefcase · Defense · The Maze · The Army · The Pyramid · The Gilded Age · Source Code · Now What*
(`oligarchy`) · *Origins · Gold as Money · The Gold Standard · The Fed · Gold Strikes Back*
(`gold`) · *The Rise of El Chapo · The Escape · The Capture · The Escape (Again…)* (`prison-break`).

Duas regularidades fortes:

- **O primeiro ato acaba entre 3 % e 20 % do vídeo** (mediana **~7 %**; em minutos, 1:10 a 8:57,
  mediana 2:59). Isso **não** contradiz a nossa ROT-03 (intro de 20–30 s): o "Intro" dele é o
  **primeiro ATO** (gancho + premissa + montagem de contexto), não o cold open. O cold open dele,
  a primeira ideia até nomear o tema, cabe em 20–35 s como o nosso.
- **O último ato começa entre 58 % e 93 %** (mediana ~80 %) e **nunca é resumo**: é a virada de
  "e daí" — *Now What* · *The big question* · *Lessons* · *Corruption* · *Global Politics* ·
  *Xi's China* · *Conclusion*.

### 8.3 · A voz — contagens

| vídeo | palavras | WPM falando | respiro (áudio) | eu/1k | você/1k | nós/1k | fonte/1k | incerteza/1k | perguntas/min | pal/frase |
|---|---|---|---|---|---|---|---|---|---|---|
| Iran | 6.128 | 225 | 4,0 % | 7,3 | 7,7 | 7,2 | 1,1 | 1,3 | 0,23 | 16,7 |
| Oligarchy | 8.619 | 250 | 3,7 % | 10,0 | 15,1 | 20,2 | 1,7 | 2,6 | 1,00 | 14,9 |
| China's Dirty Money | 5.220 | 223 | 7,3 % | 15,9 | 10,3 | 10,3 | 1,0 | 2,9 | 0,21 | 17,5 |
| Is Fascism Back? | 9.146 | 221 | 9,0 % | 8,1 | 7,5 | 11,9 | 0,9 | 2,5 | 0,34 | 17,0 |
| Internet Didn't Fail | 2.442 | 254 | 3,2 % | 20,1 | 15,2 | 25,4 | 0,4 | 1,6 | 0,31 | 17,1 |
| India vs China | 5.128 | 229 | 3,2 % | 6,6 | 10,7 | 6,0 | 1,2 | 2,9 | 0,13 | 17,3 |
| Island / WW3 | 4.841 | 233 | 6,0 % | 4,8 | 4,3 | 15,5 | 0,4 | 1,7 | 0,17 | 18,6 |
| Switzerland | 6.188 | 255 | **17,0 %** | **44,9** | 8,1 | 17,8 | 0,6 | 1,9 | 0,67 | **9,3** |
| USA 1.0 | 5.911 | 251 | 3,3 % | 10,5 | 10,5 | 13,4 | 3,0 | 0,3 | 0,92 | 14,7 |
| Billionaires buy elections | 7.458 | 244 | 3,6 % | 25,5 | 14,5 | 10,6 | 1,6 | 1,3 | 1,06 | 13,5 |
| Being a BILLIONAIRE | 6.668 | 254 | 3,2 % | **73,6** | 6,6 | 7,0 | 0,6 | 2,4 | 1,07 | 13,3 |
| Prison Break | 5.989 | 261 | 6,3 % | 12,5 | 10,5 | 8,2 | 0,8 | 2,0 | 0,72 | 13,7 |
| Ocean's dark zones | 5.564 | 260 | 8,3 % | 12,8 | 16,2 | 17,1 | **5,6** | 3,6 | 0,61 | 13,1 |
| Deportations | 7.574 | 223 | 2,1 % | 17,0 | 9,9 | 10,8 | 2,1 | 2,9 | 0,48 | 14,6 |
| Gold | 5.970 | 262 | 5,6 % | 9,7 | 12,4 | 18,9 | 0,3 | 2,2 | 0,53 | 16,6 |
| **MEDIANA** | **5.989** | **250** | **4,0 %** | **12,5** | **10,5** | **11,9** | **1,0** | **2,2** | **0,50** | **14,9** |

O que esses números dizem, em prosa:

- **Ele fala rápido e quase não para: 250 WPM e 4 % de respiro de áudio.** (Cuidado: este "respiro" é
  *silêncio de narração*, não o respiro VISUAL de que fala a régua do `regente-de-imagem` — são
  coisas diferentes e não devem ser comparadas.) O respiro vem de **trocar de voz**, não de calar:
  **13 dos 15 têm mais de uma voz**, e a voz que não é a dele ocupa de 1 % a **52 %** do tempo
  falado (mediana 11 %). Os dois extremos são reveladores: `Oligarchy` divide 48/52 com o próprio
  produtor e um especialista, e `Ocean's dark zones` 57/43. Os únicos dois vídeos de voz única
  (`internet`, `island-ww3`) são justamente o ensaio pessoal e o mapa-narrado.
- **A primeira pessoa é o eixo, e ela escala com o formato.** Mediana 12,5 por mil, mas
  **73,6** em `Being a BILLIONAIRE` e **44,9** em `Switzerland` — os dois vídeos em que ele é o
  personagem. Nos explicadores históricos cai para 4,8–8,1. Ele **liga e desliga o "eu"** conforme o
  vídeo é uma experiência dele ou uma explicação do mundo.
- **Pergunta retórica é rara: mediana 0,5 por minuto** — uma a cada dois minutos. Não é o motor de
  transição dele.
- **Frase de 14,9 palavras** na mediana, e cai para **9,3** no vídeo em que ele está andando e
  narrando ao vivo.
- **Atribuição explícita é baixíssima** (mediana 1,0 marcador de fonte por mil palavras, contra a
  BBC/DW que atribuem antes de afirmar). Ele **mostra** a fonte em vez de citá-la: o livro na mão, o
  documento grifado, o print do paper, o especialista com crachá na tela — foi o que as folhas de
  contato mostraram. É credibilidade **visual**, não verbal. Para nós, que narramos sobre gráfico,
  isso é um alerta: copiar a baixa atribuição verbal dele **sem** copiar a atribuição visual dele
  produziria um roteiro que afirma sem provar.

### 8.4 · O fecho

Nenhum dos 15 recapitula. Quatro moldes observados:
1. **A frase-tese seca** — `fascism`: *"It's to recognize the patterns, to point them out, and to do
   something about it while we still have options."*
2. **A consequência humana** — `deportations`: *"…people are not viewing the United States as the
   beacon of freedom that they once did."*
3. **A pergunta que fica aberta** — `dark-zones`: *"…have to be something else."*
4. **O convite ao projeto dele** (New Press / comunidade) — `internet`, `iran`, `usa1`.

E há um detalhe de monetização que vale registrar porque contraria o padrão do gênero: em
`oligarchy`, o **último plano do vídeo é o patrocinador** (Ground News, os 45 s finais). Ele não
protege o fecho.

---

## §9 · O QUE ADOTAMOS

Redigido no formato de lei da casa (o que fazer · por quê · como se verifica). Os IDs propostos
seguem o próximo livre de cada domínio em 31/jul/2026 (ARTE-90, ROT-52 são os últimos existentes).
**Eu não editei `seed/regras/*` nem nenhum agente — a destilação é do editor-chefe.**

---

### ✅ ARTE-91 (proposta) · A RAJADA TEM DOSE, PISO E ENDEREÇO

**O que fazer.** Rajada é uma sequência de **4 a 13 imagens** (mediana **6**; p10 = 4, p90 = 13),
com **plano médio de 0,8 s a 1,8 s** (mediana **1,28 s**), formando um bloco de **4,7 s a 15,6 s**
(mediana **7,8 s**). **Piso de 0,7 s por imagem** — é a mediana da imagem mais curta de cada uma das
386 rajadas medidas; abaixo disso o espectador registra o corte e não a imagem. **Teto de dose:
≤ 12 % do tempo do vídeo**, e a rajada tem endereço preferencial: **a abertura**.

*(Todos os percentis são os medidos nas 386 rajadas: duração p10 4,68 s · mediana 7,76 s · p90
15,56 s · máximo 51,34 s; planos p90 13 · máximo 62; plano médio da rajada p10 0,79 s · p90 1,82 s;
plano mais curto p10 0,25 s · mediana 0,70 s · p90 1,24 s.)*

**Por quê.** Medido em 15 vídeos, 9,24 h, 8.852 planos: 386 rajadas = **11,1 % do tempo** e 34,7 %
dos planos; mediana de **8,4 %** por vídeo. O primeiro décimo do vídeo tem **21,8 %** do tempo em
rajada contra 9,9 % de média nos outros nove — **2,2×**; nos primeiros 60 s a mediana chega a
**37,4 %** (§4). O teto de ≤ 12 % que a `marcas/top10/agentes/regente-de-imagem.md` já tinha
**está confirmado** — mantenha-o.

**A ressalva honesta:** dois vídeos do corpus estouram muito esse teto (`Switzerland` 34,8 %,
`Internet` 37,3 %). Os dois são formatos que **nós não fazemos** — diário de viagem filmado pelo
próprio autor e ensaio pessoal de 13 min. Para explicador com apresentador, o teto vale.

**Como se verifica.** `python -m pipeline.rajadas <run>` sobre o composto entregue, ou contando no
espelho as sequências de ≥ 4 trechos com < 2,5 s. O gate reprova: `tempo_em_rajada_pct` > 12, ou
plano médio da rajada fora da faixa 0,8–1,8 s. **O piso de 0,7 s é alvo, não veto** — nas rajadas
dele o p10 do plano mais curto é 0,25 s, ou seja, ele *usa* o flash abaixo do piso; o que a lei
protege é a MÉDIA da rajada, não o plano isolado.

---

### ✅ ARTE-92 (proposta) · A RAJADA SE FAZ DE PROVA, E MORA DENTRO DE UMA CENA

**O que fazer.** O conteúdo de uma rajada é **registro real**: arquivo, documento, foto histórica,
recorte/reportagem, captura de tela, footage de campo. **Não é motion graphics.** E ela é executada
como **UMA cena do espelho** com N mídias trocando no `__renderAt`, **nunca** como N cenas.

**Por quê.** Duas razões, uma de linguagem e uma de dinheiro.
De linguagem: nas 6 folhas de contato lidas (§6), a rajada é sempre feita de prova — gráfico e
diagrama aparecem só de passagem. Para ele, acelerar é **empilhar evidência**, não animar mais.
De dinheiro: **a nossa unidade de custo é a CENA (inferência), a dele é o CORTE (trabalho de editor
humano).** Uma rajada de 12 imagens montada como 12 cenas custaria 12 unidades de inferência para
produzir 16 segundos de vídeo — inviável, e quebraria retomada e QC, que tratam cena. Montada como
uma cena com 12 mídias, custa **1 unidade de inferência + 12 downloads de stock (grátis)**.

**O modelo já existe:** o **M25** (split de footage word-locked) já faz exatamente esse contrato —
`__fotosProntas`, `video.currentTime = f(t)`, nunca `play()`. O que falta é a variante
**SEQUENCIAL de tela cheia** em vez de painéis simultâneos. É o menor delta de catálogo que entrega
o maior efeito deste dossiê.

**Como se verifica.** O HTML da cena de rajada tem ≥ 4 fontes de mídia distintas e nenhuma repetida
(ARTE-13); `shot.mjs` em 3 instantes dentro do bloco devolve 3 imagens diferentes.

---

### ✅ ARTE-93 (proposta) · O CORTE CAI NO ACENTO DO SOM, NUNCA NO METRÔNOMO

**O que fazer.** Cada troca de imagem da rajada é posicionada num **acento** da trilha (impacto,
whoosh, riser, virada de naipe). **Não** se alinha ao pulso/BPM.

**Por quê.** Medido com modelo de acaso em todos os 15: alinhamento corte↔**transiente** está acima
do acaso em **15/15** (mediana 38,1 % contra 30 %) e é **+13,7 pontos maior dentro da rajada**
(45,2 % × 33,3 %). Já o alinhamento corte↔**batida** fica em **+2,4 pontos** — indistinguível do
acaso (§5). Editar "no tempo da música" produz o efeito mecânico, não o dramático.

**Como se verifica.** `python -m pipeline.sincronia <run>` sobre o composto: `pct_casa_onset` do
grupo *dentro da rajada* tem de ficar acima do `acaso_media` **e** acima do grupo *fora*.

---

### ✅ ARTE-94 / ROT-53 (proposta, atravessa os dois domínios) · A FALA DESACELERA ONDE A IMAGEM ACELERA

**O que fazer.** O trecho de roteiro que vai virar rajada é escrito como **enumeração com respiro**
— itens curtos separados por pausa —, não como parágrafo corrido. Na montagem, cada imagem entra
**no intervalo entre os itens**.

**Por quê.** Achado que **não estava na hipótese** e é o mais acionável do dossiê: em **12 dos 15**
vídeos a narração é **mais lenta dentro da rajada** (mediana 159 WPM dentro contra 169 fora,
−12 WPM; casos fortes de −30 a −45). A prova textual está nas próprias rajadas: *"He had at least
three private jets. He had a private zoo."* (`Prison Break` @11:43, 36 planos em 32 s) — três
sintagmas curtos, três blocos de imagem. **A rajada não é o trecho em que ele fala mais rápido; é o
trecho em que ele fala menos.**

**Como se verifica.** No espelho, o WPM do trecho marcado como rajada tem de ser **menor** que o WPM
médio do vídeo. Se for maior, ou o trecho não é rajada, ou o texto precisa ser cortado.

---

### ✅ ARTE-95 (proposta) · O PLANO LONGO É O MECANISMO — e ele merece um PALCO, não uma cena

**O que fazer.** Onde a narração explica **como** algo funciona, a tela **não corta**: fica num
palco que continua animando (mapa com atores entrando, diagrama que se constrói, gráfico que se
desenha). E o mesmo palco atende **vários beats seguidos** em vez de virar N cenas independentes.

**Por quê.** Os planos mais longos de todo o corpus são mapa, diagrama e gráfico, e a palavra que
domina a narração deles é *"how"* (§7). O caso extremo é literal: em `Why This Island Could Trigger
WW3`, **os 12 planos mais longos são o MESMO mapa** — a mesma base do Leste Asiático com crachás de
ator entrando e saindo — durando de **37,3 s a 250,3 s**. Não são 12 cenas de mapa: é um palco de pé.

**A consequência que corrige uma suposição nossa:** nossa cena de dados/mapa (11–25 s) **não é longa
demais**. As dele, no mesmo papel, são **maiores**. O nosso defeito não é lentidão no mecanismo — é
**ausência do outro extremo** (§2, §3). E reaproveitar um palco por 5 beats é **mais barato** que
gerar 5 cenas de mapa.

**Como se verifica.** Numa produção com ≥ 3 cenas consecutivas do mesmo modelo de mapa/diagrama sobre
o mesmo assunto, o `diretor-de-arte` marca fusão em palco único no `conceito-visual.json`.

---

### ✅ ROT-54 (proposta) · O GANCHO ABRE NUM OBJETO QUE ESTÁ NA TELA

**O que fazer.** A primeira frase aponta para uma coisa concreta que o espectador está vendo —
*"esse gráfico aqui"*, *"essa mala"*, *"esse mapa"*. Nunca pergunta, nunca definição, nunca
"imagine que". Nos primeiros 60 s, uma frase de **contrato em 1ª pessoa** (*"eu quero te mostrar…"*)
que promete o que o vídeo entrega **sem anunciar o índice**.

**Por quê.** **15 de 15** abrem em objeto ou imagem presente na tela; **9 de 15** em dêixis literal
("this chart", "this bag", "this map", "this border", "this moment"); **11 de 15** usam "eu" nos
primeiros 32 s (§8.1). Isso **converge com a DW** (15/15 abrem num objeto concreto, dossiê de
30/jul) — três canais independentes, mesma regra. E o contrato em 1ª pessoa cumpre a função da
assinatura da BBC **sem** disparar a nossa ROT-11, porque promete um resultado, não um sumário.

**Como se verifica.** O validador de roteiro já checa a intro; acrescentar: a 1ª frase contém um
demonstrativo ou um substantivo concreto nomeado, e não contém "?" nem "imagine".

---

### ⛔ O QUE **NÃO** SE TRANSPORTA — e por quê

**1 · O arquivo de telejornal.** Boa parte das rajadas dele é clipe de CBS, MSNBC, Fox, C-SPAN e
filme de arquivo, sob *fair use* americano. Nós trabalhamos com stock licenciado (Shutterstock,
Storyblocks) e **não temos essa biblioteca nem esse amparo jurídico**. O substituto honesto que já
está no nosso pipeline: **documento/reportagem real recriado** (`pesquisa-documentos`, modo M05),
**foto histórica de acervo** (M12/M16) e **footage de stock on-tema**. Copiar o *efeito* é possível;
copiar o *material* não é.

**1b · O CORPO DELE NA CENA — a ressalva do Mateus (31/jul/2026), e é a que mais limita.**
Palavras dele: *"o Johnny Harris não é uma referência total de edição, pois ele aparece muito com
ele mostrando um mapa na vida real com a câmera dele, e o nosso caso nós só temos o apresentador
falando com uma câmera apenas."*

Isto é diferente do item 2 (b-roll de viagem) e mais estrutural: boa parte do dinamismo dele vem de
**ele manipular fisicamente o objeto que explica** — a mão que corre sobre o mapa impresso, o dedo
que aponta a fronteira, o papel que ele vira para a câmera, o objeto que ele levanta. Isso resolve
três problemas de uma vez, de graça: dá movimento sem corte, dá escala (a mão dá a medida), e
**funde apresentador e material no mesmo plano** — a informação e quem a apresenta ocupam a mesma
imagem.

**Nós não temos nada disso.** O Bôco grava em estúdio, sentado, uma câmera, sem objeto na mão e sem
possibilidade de reshoot direcionado por cena. Toda a nossa camada de informação vive **por cima**
dele ou **no lugar** dele, nunca *com* ele.

Consequência para quem for aplicar este dossiê: **o número da rajada dele já inclui os planos do
corpo dele**, que nós não temos como produzir. Perseguir o número bruto com material gráfico
significa criar mais cena — mais inferência — para simular algo que, na origem, não custou nenhuma.
Antes de copiar uma cadência, verifique **do que ela é feita**: se metade dos planos daquele trecho
são a mão dele sobre o mapa, o alvo real para nós é a outra metade.

*(O caminho que resta, e que já é nosso: a cena de mapa que se comporta como palco — §7 mostra que
os planos mais longos dele são exatamente isso, o mesmo mapa por até 250 s com elementos entrando.
Ali não há corpo nenhum, e é transportável 1:1.)*

**2 · O b-roll que ele mesmo filma.** `Switzerland`, o segundo vídeo mais rápido do corpus
(ASL 2,18 s, 1.184 planos), só existe porque ele passou uma semana dentro de trens com câmera. Nosso
apresentador grava em estúdio. **Não dá para copiar densidade de material próprio sem ter material
próprio** — e perseguir esse número com stock produziria repetição, que a ARTE-13 proíbe.

**3 · O especialista por chamada de vídeo.** Ele terceiriza a tese dura e o respiro de voz para um
convidado: em `Oligarchy`, **52 %** do tempo falado não é dele; em `Ocean's dark zones`, 43 %.
Isso sustenta a **baixíssima atribuição verbal** dele (mediana 1,0 marcador de fonte por mil
palavras, contra a BBC que atribui antes de afirmar). Nosso roteiro é **100 % narração do Bôco**.
⚠️ **Copiar a atribuição baixa dele sem ter a voz do especialista produz um roteiro que afirma sem
provar.** Onde ele mostra a fonte (o livro na mão, o paper grifado, o crachá do convidado), nós
temos de **dizer** a fonte — ou mostrá-la com a mesma força na tela.

**4 · A ASL como meta.** Perseguir "16 cortes/min" criando 16 cenas por minuto quebra a cota de
inferência e a linha de produção inteira. A tradução correta da métrica dele para o nosso custo é a
ARTE-92: **mesma sensação, com as trocas acontecendo DENTRO da cena.**

**5 · O plano de 250 segundos.** Ele só funciona porque o mapa é um palco com atores. Uma cena nossa
de 250 s hoje seria uma imagem quase parada — o que é pior, não melhor. **Primeiro se constrói o
palco (ARTE-95); só depois se estica a duração.**

**6 · O patrocinador no último plano.** Em `Oligarchy` os 45 s finais do vídeo são o merchan. É
informação sobre o mercado dele, não recomendação — nosso fecho é do conteúdo.

---

### O que muda na tabela do `regente-de-imagem`

A tabela de `marcas/top10/agentes/regente-de-imagem.md` §2 tem hoje uma nota dizendo que "os
parâmetros de rajada estão sendo medidos" e que "2 s por plano é a hipótese do Mateus, não número
nosso". Com este dossiê, os valores medidos são:

| régua | valor ANTES | valor MEDIDO | fonte |
|---|---|---|---|
| piso de um beat | 0,7 s (suposto) | **0,7 s** ✅ mantém | mediana do plano mais curto das 386 rajadas |
| teto de footage sem trocar | 8 s | **8 s** ✅ mantém | BBC/DW; no JH só **9,0 %** dos planos passam de 8 s |
| plano médio das referências | 4,3–4,7 s (12–14 cortes/min) | **4,24 s / 14,2 cortes/min** ✅ confirmado | BBC+DW, 933 planos |
| **plano médio do Johnny Harris** | — (era "~2 s", hipótese) | **3,76 s no corpus · 1,86 a 12,63 s por vídeo** ⚠️ corrige | 15 vídeos, 8.852 planos |
| **plano DENTRO da rajada** | — | **1,28 s** (p10 0,79 · p90 1,82) | 386 rajadas |
| **tamanho da rajada** | — | **4 a 13 planos** (mediana 6), **4,7 a 15,6 s** (mediana 7,8 s) | 386 rajadas |
| teto de rajada | ≤ 12 % do tempo | **11,1 % no corpus, mediana 8,4 %/vídeo** ✅ confirmado | §4 |
| **endereço da rajada** | — | **abertura**: 1º décimo = 21,8 % (2,2× os demais); 1º minuto = 37,4 % | §4 |

---

## ANEXO · As provas, re-consultáveis

**Os runs** (um por vídeo, com `data/*.json`, `frames/thumbs/`, folhas de contato):

```
/Users/<usuário>/www/analista-de-videos/runs/jh-iran/
/Users/<usuário>/www/analista-de-videos/runs/jh-oligarchy/
/Users/<usuário>/www/analista-de-videos/runs/jh-china-money/
/Users/<usuário>/www/analista-de-videos/runs/jh-fascism/
/Users/<usuário>/www/analista-de-videos/runs/jh-internet/
/Users/<usuário>/www/analista-de-videos/runs/jh-india-china/
/Users/<usuário>/www/analista-de-videos/runs/jh-island-ww3/
/Users/<usuário>/www/analista-de-videos/runs/jh-switzerland/
/Users/<usuário>/www/analista-de-videos/runs/jh-usa1/
/Users/<usuário>/www/analista-de-videos/runs/jh-billionaires-elections/
/Users/<usuário>/www/analista-de-videos/runs/jh-billionaire-life/
/Users/<usuário>/www/analista-de-videos/runs/jh-prison-break/
/Users/<usuário>/www/analista-de-videos/runs/jh-dark-zones/
/Users/<usuário>/www/analista-de-videos/runs/jh-deportations/
/Users/<usuário>/www/analista-de-videos/runs/jh-gold/
```

Agregado do corpus: `/Users/<usuário>/www/analista-de-videos/runs/_agregado-johnny-harris.json`
Réguas externas: `runs/ref-bbc-*` · `runs/ref-dw-*` · `runs/nationalism` (baseline JH de 2024).

**Por run, os arquivos que sustentam cada seção:**

| arquivo | o que contém | seção |
|---|---|---|
| `data/scenes.json` | planos pós-limpeza + ASL/mediana/histograma | §2 §3 |
| `data/scenes_bruto.json` | a detecção **antes** da limpeza de corte falso | §1.3 |
| `data/limpeza_cortes.json` | quantos cortes falsos, onde, e o laudo | §1.3 |
| `data/rajadas.json` | as rajadas com posição, tamanho, áudio, texto falado, planos mais longos, nulo da pausa | §4 §5 §7 |
| `data/sincronia.json` | corte × transiente × batida, com modelo de acaso | §5 |
| `data/transcript.json` · `speech.json` | transcrição Scribe com timestamp por palavra, WPM, pausas, locutores | §8 |
| `data/music.json` · `sfx.json` | cobertura musical, BPM, troca de trilha, eventos sonoros | §5 |
| `frames/contato_rajada.jpg` | 30 planos amostrados de dentro das rajadas | §6 |
| `frames/contato_longos.jpg` | os 12 planos mais longos | §7 |

**Os módulos escritos para este dossiê** (no repo `analista-de-videos`, reutilizáveis em qualquer
concorrente):

- `pipeline/rajadas.py` — encontra e mede a rajada; nulo da pausa embutido.
- `pipeline/sincronia.py` — corte × transiente × batida, com 200 sorteios de acaso por vídeo.
- `pipeline/limpa_cortes.py` — remove o corte falso de pisca-pisca (§1.3).
- `pipeline/contato.py` — folha de contato dirigida (rajada e planos longos) a partir dos thumbs.

**Como refazer tudo:**

```bash
cd ~/www/analista-de-videos
.venv/bin/python analyze.py "<video.mkv>" --slug jh-<nome> --skip-llm
.venv/bin/python -m pipeline.limpa_cortes runs/jh-<nome> --aplicar
.venv/bin/python -m pipeline.rajadas    runs/jh-<nome>
.venv/bin/python -m pipeline.sincronia  runs/jh-<nome>
.venv/bin/python -m pipeline.contato    runs/jh-<nome> 30
```

**Conferência desta rodada (31/jul/2026):** os 15 vídeos passaram no gate arquivo a arquivo —
duração detectada × duração do YouTube dentro de 0,4 s, WAV completo, transcrição sem truncamento
(primeira palavra ≤ 7,3 s, última a 8–40 s do fim), e `sfx`/`music`/`sincronia` presentes nos 15.
Nenhuma cobertura parcial.

**Os vídeos brutos foram apagados** depois da medição (disco enxuto, REND-18). Re-obter:
`yt-dlp -f "bv*[height<=1080]+ba/b[height<=1080]" --merge-output-format mkv -- <id>` com os IDs de
`corpus-johnny-harris.json`.

