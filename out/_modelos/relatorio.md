# Modelos: onde dá para economizar sem perder qualidade

Para o Lucas, 08/10/2026. Só li registros e arquivos: nada do canal foi mudado e nada foi gasto. Junta os três levantamentos
desta pasta (`consumo.md`, `peso.md` e `tarefas.md`) e acrescenta contas e conferências que fiz no disco. As horas são de
Brasília.

> **Revisto pelo cético em 08/10** (`cetico.md`). As somas foram refeitas dos registros e batem. Mudaram: o peso do Sonnet (que
> dá para medir, e dá uns três quartos do Opus), a estimativa ousada (de 43 para 33 a 36 pontos), três recomendações que mexiam
> em licença, fato na tela e pauta, e a explicação das regravações. O que mudou está no §7 do `cetico.md`.

**Duas palavras que aparecem no texto todo.**
- **Ponto:** 1 % da barra "Weekly · all models" do seu painel. Um limite semanal inteiro tem 100 pontos.
- **Preço de tabela:** o preço da Anthropic para quem paga por uso. O plano Max não cobra por token, mas o preço serve de
  régua para comparar o peso de cada modelo.

---

## Em poucas linhas

1. **A premissa, quase certa.** Quase tudo roda em Opus 5.5. O `editor-de-arte`, o `diretor-de-arte` e a escrita do roteiro
   rodam em Fable 5.1. O `qc-visual` já roda em Sonnet 5.5. Nada roda em Haiku.
2. **Um vídeo como o 2 gastou, até agora, cerca de 125 pontos: um limite semanal inteiro e mais um quarto.** O painel bateu
   100 % às 04:08 de 08/10, e depois subiu de 2 % para 27 % das 12:30 às 16:51. O vídeo ainda não acabou: faltam os consertos
   depois da revisão de espectador, a sua revisão na linha do tempo, o render e o XML.
3. **O grosso não está na conversa central (7 %).** Está nos agentes que ela lança (52 %), sobretudo a revisão de espectador e
   os céticos, e nos especialistas (41 %), sobretudo o `editor-de-arte`.
4. **O Fable pesa mais do que parece.** Ele foi 5 % dos tokens do vídeo 2, e entre um quinto (pelo preço) e um terço (pela conta
   do painel) dos pontos. A Anthropic diz que o Fable gasta o limite "faster than other Claude models", sem dar o número. A conta
   com o seu painel dá uns 2 vezes o preço de tabela dele, umas 4 vezes o Opus pelo mesmo trabalho. É a estimativa de um evento só,
   sem folga para conferir. A mesma conta diz que o Sonnet também pesa acima do preço: uns três quartos do Opus, e não a metade.
5. **As trocas de modelo e de esforço que eu posso fazer sozinho, com risco pequeno à qualidade, economizam pouco no vídeo 2:
   1 a 2 pontos, quase tudo do esforço.** O que pesa é julgamento visual, e isso não se troca sem teste.
6. **Há economia maior sem trocar modelo nenhum.** Cerca de um terço do gasto da revisão de espectador do vídeo 2 foi em
   agentes que pararam no limite sem entregar resultado. Metade do custo dela foi regravar o contexto: depois das primeiras ~50
   imagens, o revisor regrava tudo a cada ~20 imagens novas, e um revisor chegou a receber mais de mil imagens.
7. **Estimativa por vídeo:**
   - conservadora: uns 7 pontos com o que eu faço sozinho, e 10 a 16 com as suas decisões. Dos 7, uns 6 só existem se o vídeo
     voltar a bater no limite no meio de uma revisão;
   - ousada: 23 a 28 pontos sozinho, e 33 a 36 com as suas decisões.

   Mesmo no cenário ousado, um vídeo gasta uns 90 pontos, perto de uma semana inteira de limite.

---

## 1. Como é hoje

### 1.1 Quanto o vídeo 2 gastou

O período vai de 07/10, 00:00, a 08/10, 17:02. Ficaram de fora a conferência do XML do Juneau (07/10, 00:46) e esta medição. A
contagem tem 310 agentes (11 deles sem nenhuma resposta) e a conversa central, que se dividiu em duas sessões: `6abb9076`, até 08/10 às 04:08, e `f42bc036`.

| | tokens | preço de tabela | pontos pela régua do preço | pontos com o peso do painel |
|---|---:|---:|---:|---:|
| Conversa central (Opus) | 671 M | US$ 223 | 9,0 | 9,0 (7 %) |
| Agentes que o central lança (revisores, céticos, verificadores, leitores, listas) | 2.471 M | US$ 1.415 | 57,3 | 64,3 (52 %) |
| Especialistas (os 15 da pré-v1 e o `conferente-de-midia`) | 1.449 M | US$ 856 | 34,6 | 51,0 (41 %) |
| **Total do vídeo 2 até agora** | **4.591 M** | **US$ 2.493** | **100,9** | **124,4** |

- **A régua do preço** converte US$ 24,70 de preço de tabela em 1 ponto. Esse valor foi medido em 08/10: o painel subiu 25
  pontos com US$ 618 de Opus puro (`peso.md`, §4).
- **O peso do painel** é a mesma régua, com o Fable contado a 2,1 vezes o preço dele (§3.1). Com esse peso, a conta dá 124
  pontos, e o painel mostrou uns 125 (100 até o limite de 08/10 às 04:08, mais 25 à tarde). Isso não confere nada: o peso do
  Fable foi tirado desse mesmo limite, então a conta bate por construção. Com o Sonnet pesado como a mesma conta pede (§3.1),
  dariam 127. Com a régua do preço pura, daria 101 pontos, abaixo do que o painel marcou.
- **Uns US$ 150 a 200 (6 a 8 %) não voltam no próximo vídeo.** Foram preparo de marca e testes: o crédito e o movimento do
  mapa antigo, as 7 pendências da marca, o piloto do ilustrador e as amostras de movimento.

**Por modelo, no vídeo 2:**

| modelo | tokens | preço de tabela | pontos (peso do painel) |
|---|---:|---:|---:|
| Opus 5.5 (central e agentes) | 3.807 M (83 %) | US$ 1.810 | 73,3 (59 %) |
| Fable 5.1 | 236 M (5 %) | US$ 527 | 44,8 (36 %) |
| Sonnet 5.5 (`qc-visual`) | 548 M (12 %) | US$ 157 | 6,3 (5 %) |

### 1.2 Por tipo de trabalho, no vídeo 2

| trabalho | modelo | tokens | preço de tabela | pontos (preço) | pontos (painel) |
|---|---|---:|---:|---:|---:|
| Revisão de espectador | Opus | 842 M | US$ 590 | 23,9 | 23,9 |
| `editor-de-arte` (as cenas) | Fable | 170 M | US$ 322 | 13,0 | **27,4** |
| Céticos (tentam derrubar cada achado) | Opus | 598 M | US$ 283 | 11,4 | 11,4 |
| Roteiro: escrita, pautas, ganchos e títulos | Fable e Opus | 106 M | US$ 133 | 5,4 | 9,7 |
| Pesquisa de mídia e fatos: os 6 `pesquisa-*`, o `conferente-de-midia` e o `verificador-de-fatos` | Opus | 413 M | US$ 165 | 6,7 | 6,7 |
| `qc-visual` | Sonnet | 548 M | US$ 157 | 6,3 | 6,3 |
| Leitores e pesquisa do dossiê | Opus (e pouco Fable) | 345 M | US$ 129 | 5,2 | 5,5 |
| `mapista` | Opus | 215 M | US$ 119 | 4,8 | 4,8 |
| Listas e consertos: trilha, marca, ilustrador e "aplicar" do roteiro | Opus e Fable | 97 M | US$ 72 | 2,9 | 4,6 |
| `diretor-de-arte` | Fable | 18 M | US$ 48 | 1,9 | 4,1 |
| Verificadores independentes | Opus | 267 M | US$ 90 | 3,7 | 3,7 |
| Bancada do roteiro e sínteses | Opus e Fable | 102 M | US$ 75 | 3,0 | 3,7 |
| `montador`, `regente-de-imagem` e `redator-de-tela` | Opus | 86 M | US$ 46 | 1,9 | 1,9 |
| Conferência de cada passo antes do `regie advance` | Opus | 114 M | US$ 43 | 1,7 | 1,7 |

**Onde está o grosso: a revisão de espectador, o `editor-de-arte` e os céticos são 50 % dos pontos do vídeo.**

- **Revisão de espectador:** rodou três vezes no vídeo 2. Em 08/10:
  - a rodada da madrugada (02:52 a 04:08) parou nos limites: o de 5 horas às 03:05, e o semanal às 04:08;
  - a do meio-dia perdeu um lote no limite de 5 horas, às 13:58;
  - a da tarde ainda estava rodando às 17:02.
  - Dos US$ 747 da revisão (revisores e céticos), pelo estado que cada workflow gravou até as 17:02:
    - US$ 238 (32 %) foram de agentes que terminaram com erro: os da madrugada (US$ 138) e o lote 4 do meio-dia (US$ 99,5);
    - US$ 28 (4 %) eram dos lotes 5 e 6, relançados às 16:51 embora já tivessem resultado desde as 13:19 e as 13:21;
    - US$ 481 (64 %) eram de agentes com resultado, parte dele refeita depois.
  - O roteiro da rodada do meio-dia já mandava cada revisor gravar o resultado no disco antes de responder. O lote 4 perdeu US$
    99,5 mesmo assim, porque a gravação vinha no fim.
- **Por que o espectador custa tanto, mesmo escrevendo pouco:** 49 % do custo dele é **regravação**.
  - A cada passo, o agente relê tudo o que já viu. Essa releitura é barata.
  - Quando o contexto encolhe, o agente precisa regravar tudo, e regravar custa 25 vezes mais que reler.
  - No vídeo 2, as regravações dos revisores aconteceram todas logo depois de o contexto encolher. Todas trazem no registro a
    marca `thinking_dropped` (`prefix_binding_mismatch`): o raciocínio guardado das voltas antigas deixa de casar com o começo da
    conversa e é descartado, e o cache se perde.
  - A primeira regravação vem depois de umas 46 a 50 imagens, e as seguintes a cada 17 a 21 imagens novas. Nos lotes 1, 3 e 4 do
    meio-dia foram 1.045, 564 e 1.020 imagens, e 51, 25 e 46 regravações. O número de regravações segue o total de imagens vistas,
    não o tamanho do lote.
  - O mais provável é o Claude Code tirar imagens antigas do contexto, o que muda o começo da conversa. Não está provado.
  - No `editor-de-arte` e no `mapista` também há regravações (43 % e 40 % do custo). Ali, a maioria veio depois de pausas de mais
    de 5 minutos, enquanto um render rodava, porque a memória rápida dos agentes dura 5 minutos. A mesma marca de raciocínio
    descartado aparece em 32 das 35 regravações do `mapista` e em 20 das 37 do editor.
- **Esforço:**
  - Os agentes que o central lança rodam todos no esforço mais alto (`xhigh`), herdado da sessão.
  - Os especialistas usam o esforço do cabeçalho deles: `high` ou `medium`.
  - Alguns workflows do Juneau passavam `effort: 'high'`, e os agentes obedeciam: medi isso nos registros. Foram poucos: 69 dos 339
    verificadores e 5 dos 146 céticos do Juneau. Os do vídeo 2 pararam de passar o esforço.

**No período inteiro** (23/09 a 08/10, Juneau e vídeo 2), foram 18,7 bilhões de tokens: 84 % nos agentes e 16 % na conversa
central (`consumo.md`). Na fase de fechar o Juneau, os maiores gastos eram os verificadores independentes e as conferências de
clipe. Por isso, as trocas seguras economizariam mais num vídeo de muita conferência: uns 8,6 % do gasto dos agentes no período
inteiro, contra 2,4 % no vídeo 2, pela régua do preço (`tarefas.md`, §6.2). Essa conta supõe que metade dos verificadores e dos
consertos é trabalho mecânico. No vídeo 2, essa metade não apareceu (§2.1).

---

## 2. A proposta, papel por papel

"Peso" é a parte dos pontos do vídeo 2, com o peso do painel.

### 2.1 Os agentes que o central lança (o modelo e o esforço são escolha minha)

| papel | peso no vídeo 2 | proposta | por quê | risco |
|---|---:|---|---|---|
| Revisão de espectador | 19 % | **Manter Opus por ora. Testar o Sonnet lado a lado (§4).** Antes disso, parar de perder rodadas. Testar junto menos imagens por revisor. | É o julgamento mais fino do canal. No Juneau, achou antes de você o vazio da s35 e a tela parada da s63, que você marcou depois (conferi as suas marcas na fila, mas não a versão do clipe que cada um viu). | Perder justamente o achado que você faria. Por isso, só com teste. |
| Céticos | 9 % | **Manter Opus. Passar o esforço para `high`.** Sonnet só depois do espectador, e com teste próprio. | São o filtro: de 35 a 59 % dos achados da primeira passada caem neles. | Um cético fraco deixa passar achado falso ou derruba o verdadeiro. Trocar os dois papéis ao mesmo tempo tiraria a rede de segurança. |
| Leitores que só leem (os `ler:*`, que levantam o estado do disco) | menos de 1 % | **Sonnet já.** Haiku 5.5 depois de um teste. O curador de pautas e a lente de pronúncia, que estavam nesta conta, ficam em Opus. | Catalogar e ler não é julgar. Escolher pauta é decisão editorial, e o laudo de pronúncia vai para a voz. | Baixo: um script confere cada `arquivo:linha` citado. |
| Pesquisa de dossiê na web (pauta, fontes, viabilidade) | 3 % | **Manter Opus.** | Vai à rede, onde as regras de robô já falharam até em Opus (itens 66 e 67 do `APRENDIZADOS.md`), e o que traz vira fato no roteiro. | — |
| Verificadores independentes | 3 % | **Dividir.** A conferência de contrato (sha256, campos, laudos) vai primeiro para script, e o que sobrar para o Sonnet. A checagem de fato e de regra da marca fica em Opus. | Foi um verificador em Opus que aplicou a regra do campo em branco ao vídeo inteiro e achou a s36. No vídeo 2, nenhum verificador foi só de contrato: dois terços foram a checagem dos fatos do dossiê. Num vídeo assim, a economia aqui é perto de zero. | Baixo na parte de contrato: o artefato prova. |
| Conferência de cada passo antes do `regie advance` | 1 % | **Sonnet só no ingest, no cut_detect e no mirror**, com o cético em Opus. As de research, requisitions, screen_text, art_direction e conducting ficam em Opus. | As três primeiras validam contrato e `sha256`. As outras julgam casamento de licença, procedência e texto de tela que escapou do verificador: onde mora licença ou fato, o modelo não desce (`tarefas.md`, §4.5). | Baixo nas três primeiras. O cético só julga o que o conferente lhe mostra. |
| Lista da trilha e consertos já decididos | menos de 1 % | **Sonnet, com prova por diff.** | Aplicar uma lista fechada. | O conserto que cria defeito ao lado (item 59). O diff mostra que só as linhas da lista mudaram. |
| Bancada do roteiro (lentes de clareza, locução, fatos) e sínteses | 3 % | **Manter.** | É escrita e checagem do texto que vai ao ar. | — |
| Construir ferramenta ou portão | 0 % no vídeo 2 | **Manter Opus.** | Um portão errado dá verde em mapa vazio (item 64). | — |
| A conversa central | 7 % | **Manter Opus.** | É onde se decide e se fala com você. | — |

### 2.2 Os especialistas (trocar é decisão sua; em 26/09 você mandou manter o modelo do motor)

| especialista | hoje | peso no vídeo 2 | proposta | por quê |
|---|---|---:|---|---|
| `editor-de-arte` | Fable | 22 % | **Pergunta para você:** os consertos cirúrgicos poderiam ir para o Opus, e a criação ficaria no Fable. | O próprio motor separa isso. No `infra/modelos.json`, o papel "conserto" (reposicionar, reescalar, tempo, margem, sem inventar imagem) é Opus, e só "recriar" sobe para o Fable. Se o Fable pesa umas 4 vezes o Opus no seu limite (a conta do §3.1, de um evento só), é a maior economia num papel só. Se ele pesar pelo preço, a economia cai a um terço. O risco: um conserto pior. Testar antes (§4). |
| Escrita do roteiro | Fable | 8 % | **Manter a escrita em Fable** (decisão sua, 26/09). **Pergunta:** a lista de consertos do roteiro e o "aplicar" podem sair do Fable? | São a parte mecânica do mesmo workflow (US$ 32, 2,7 pontos). |
| `diretor-de-arte` | Fable | 3 % | **Manter.** | Decide o arco visual do vídeo inteiro, e pesa pouco. |
| `qc-visual` | Sonnet | 5 % | **Manter Sonnet. Nunca Haiku.** | No Top10, um Haiku antigo deixou passar mídia do assunto errado (PESQ-13). Os 8 defeitos do Juneau escaparam também à conferência em Opus: a falha foi de método, não de modelo. |
| `mapista` | Opus | 4 % | **Manter.** | É código com geometria real, e cada refação gasta MapTiler. |
| `conferente-de-midia`, os 6 `pesquisa-*` e o `verificador-de-fatos` | Opus | 5 % | **Manter.** | Licença, procedência, regra de robô e fato publicado. Foi o conferente em Opus que viu o letreiro "LBCT" no porto vizinho. |
| `montador`, `regente-de-imagem` e `redator-de-tela` | Opus | 2 % | **Manter.** | Decisões que se propagam para o resto da linha, e pesam pouco. |

### 2.3 Haiku

- **O Haiku 4.5 não cabe.** A janela dele é de 200 mil tokens, e 68 % das mensagens medidas passam disso.
- **O Haiku 5.5 tem janela de 1 milhão, mas acima de 100 mil tokens custa 5 vezes mais.** Todo agente nosso passa de 100 mil
  logo no começo, porque carrega este `CLAUDE.md` e as instruções. Mesmo assim, ele sai a uns 16 % do Opus pelo preço. Se o
  plano pesar o Haiku acima do preço, como parece pesar o Sonnet (§3.1), ele sai mais caro que isso.
- **Só serve, por ora, para leitores e para rodar portões, depois de um teste.** No vídeo 2, isso dá menos de 1 ponto.
- **Nunca em julgamento visual.**
- Falta confirmar que o apelido `haiku` do Claude Code aponta para o Haiku 5.5: no teste, o registro tem de mostrar
  `claude-haiku-5-5`.

---

## 3. A estimativa de economia

### 3.1 A régua, com a conta aberta

A conta de cada linha:

> pontos = (tokens de cada tipo × preço de tabela do tipo no modelo) ÷ 24,70 × peso do modelo no painel

- **Por tipo de token:** reler o que já está no contexto é barato; escrever contexto novo e responder custam mais. No Opus,
  por milhão de tokens: reler US$ 0,20, regravar US$ 5 e responder US$ 20. O preço das tabelas vem dos tipos de token, por isso a
  conta parte dos tokens de cada tipo, e não do total.
- **24,70:** medido em 08/10. Entre 12:30 e 16:51, o painel subiu 25 pontos (de 2 % para 27 %) com 1.035 M tokens de Opus,
  que valem US$ 618 ao preço de tabela (`peso.md`, §4).
- **O peso do Fable no painel, cerca de 2,1 vezes o preço dele.** Pelo arredondamento do painel, fica entre 1,9 e 2,5; pesando
  o cache de outros jeitos, entre 1,6 e 2,3.
  - Medi o limite semanal que bateu em 08/10 às 04:08 (07:08 UTC).
  - A semana começou em 06/10 às 22:00: a mensagem de limite dava o reinício para 13/10 às 22:00, e a semana tem 7 dias. Bate com
    o registro: depois do limite semanal de 05/10, o uso só voltou às 22:01 de 06/10, um dia antes do reinício anunciado.
  - Nesse intervalo, o canal gastou US$ 1.126 de Opus, US$ 527 de Fable e US$ 161 de Sonnet ao preço de tabela. Conferi que
    nenhuma outra conversa do Claude Code, em nenhum projeto deste PC (no lado Windows), teve uso nesse intervalo.
  - Pela régua do Opus, esse gasto daria uns 73 pontos, e o painel marcou 100. A diferença pede o Fable acima do preço. Somada ao
    limite de 5 horas, pede também o Sonnet acima do preço. Também a fecharia uso fora destes registros, uns US$ 650 ao preço de tabela (27
    pontos em 30 horas: claude.ai, celular, a extensão, um Claude Code no WSL), que eu não vejo daqui. É pouco provável, mas não está excluído.
  - Como o Fable custa 2,1 vezes o Opus no preço, na mistura de tokens do canal, ele pesa umas **4,4 vezes o Opus** pelo mesmo
    trabalho.
- **O peso do Sonnet: cerca de 1,5 vez o preço dele, uns três quartos do Opus.**
  - A hora em que a janela de 5 horas de 08/10 começou está no registro. A mensagem de limite das 03:05 diz "resets 4am", então a
    janela foi das 23:00 às 04:00.
  - Com ela e o limite semanal, as duas contas dão o Fable a 2,1 e o Sonnet a 1,5 vez o preço.
  - Pesando a leitura de cache de outros jeitos (o dobro, nada, ou igual aos outros tokens), o Fable fica entre 1,6 e 2,1, e o
    Sonnet entre 1,2 e 1,9 (`cetico.md`, §3.4).
  - São duas equações para dois pesos, sem folga para conferir: qualquer erro de premissa vai inteiro para os dois.
  - Pelo preço, o Sonnet pesaria a metade do Opus. Nenhuma das contas com o painel mostra isso.
  - Por isso, as estimativas da §3.2 saem em duas réguas: tudo pelo preço, e tudo pela conta do painel (Fable 2,1, Sonnet 1,5).
  - O pior caso é o Sonnet não economizar quase nada. Só o teste da §4 fecha isso.
- **Haiku 5.5:** sem nenhum dado de uso. Usei o preço, 16 % do Opus.

Exemplo, a revisão de espectador:
- hoje: 842 M tokens, que valem US$ 590 ao preço de tabela, ou seja, 23,9 pontos;
- em Sonnet, com os mesmos tokens: US$ 295, ou 11,9 pontos pelo preço (economia de 12), e uns 18 pela conta do painel
  (economia de 6).

### 3.2 Item por item, por vídeo como o 2

O peso de hoje é o do vídeo 2 até 08/10, 17:02. O painel marcou uns 125 pontos. Cada economia sai em duas réguas (§3.1):
- **pelo preço:** Fable e Sonnet pesam pelo preço de tabela, e a base é de 101 pontos;
- **pela conta do painel:** o Fable pesa 2,1 vezes o preço, o Sonnet 1,5, e a base é de uns 127 pontos.

| # | o que muda | quem decide | tokens envolvidos | pontos hoje | economia conservadora (preço / painel) | economia ousada (preço / painel) |
|---|---|---|---:|---:|---:|---:|
| 1 | Leitores que só leem (`ler:*`) para Sonnet (Haiku 5.5 no ousado) | central | 29 M | 0,5 | 0,2 / 0,1 | 0,4 / 0,4 |
| 2 | Lista da trilha para Sonnet | central | 13 M | 0,3 | 0,1 / 0,1 | 0,1 / 0,1 |
| 3 | Conferência de passo para Sonnet, com o cético em Opus (no conservador, só ingest, cut_detect e mirror; no ousado, todas, com teste) | central | 20 M / 114 M | 1,7 | 0,2 / 0,1 | 0,9 / 0,4 |
| 4 | Parte de contrato dos verificadores para script e Sonnet (no vídeo 2, nenhum verificador foi só de contrato) | central | — | — | 0 / 0 | 0 / 0 |
| 5 | Não perder rodada do espectador: gravar cena a cena durante o trabalho, não relançar lote pronto e olhar o painel antes de lançar. Só economiza se o vídeo bater no limite de novo | central | 187 a 379 M deixam de existir | 5,8 a 10,5 | 5,8 / 5,8 | 10,5 / 10,5 |
| 6 | Menos imagens por revisor no total (um quadro por segundo, ou mais quadros por folha), para cortar metade das regravações. Muda o que o revisor vê | central, com teste | menos contexto relido | 11,7 (regravações) | 0 / 0 | 5,9 / 5,9 |
| 7 | Esforço `high` em vez de `xhigh` nos agentes do central, fora o espectador (que espera o teste) | central | uns 2 M de raciocínio | — | 1,0 / 1,0 | 1,4 / 1,4 |
| 8 | Revisão de espectador para Sonnet, se o teste passar | central, com teste | 842 M | 23,9 | 0 / 0 | 3,9 / 1,9 |
| 9 | Céticos para Sonnet, depois do espectador e com teste | central, com teste | 598 M | 11,4 | 0 / 0 | 5,4 / 2,6 |
| 10 | Consertos do `editor-de-arte` em Opus (supus 30 % do trabalho dele no conservador e 50 % no ousado) | **Lucas** | 51 a 85 M | 13,0 / 27,4 | 2,1 / 6,3 | 3,4 / 10,5 |
| 11 | Lista e "aplicar" do roteiro fora do Fable (Opus no conservador, Sonnet no ousado) | **Lucas** | 10 M | 1,3 / 2,7 | 0,7 / 2,1 | 1,0 / 2,2 |
| | **Só o que o central decide** | | | | **7,4 / 7,1** | **28,4 / 23,1** |
| | **Com as suas decisões** | | | | **10,1 / 15,5** | **32,9 / 35,8** |

O total de cada régua é a soma dela, não a dos extremos.

Como ler:
- **Os itens 8 e 9** do ousado foram calculados sobre o que sobra depois dos itens 5 a 7, para não contar a mesma economia duas
  vezes. Se nada de 5 a 7 for feito, o espectador em Sonnet tira 11,9 pontos pelo preço e 5,7 pela conta do painel.
- **O item 5 é quase todo o conservador do central.** Sem ele, o que eu economizo sozinho, de forma estrutural, fica em uns 1,3 a
  1,6 ponto por vídeo, quase tudo do esforço.
- **Só a troca de modelo, sem os itens 5 a 7:** de 3 a 9 pontos (conservador, com as suas decisões) a uns 22 a 23 (ousado).
- **No item 10**, cada 10 % do trabalho do editor que for conserto e passar para o Opus tira uns 2,1 pontos por vídeo pelo peso
  do painel, ou 0,7 ponto pela régua do preço.
- **Em tokens:**
  - as trocas de modelo não diminuem os tokens: o mesmo trabalho passa para um modelo que pesa menos;
  - o que tira tokens são os itens 5 e 6. No ousado, deixam de existir uns 400 a 600 M tokens por vídeo, uns 9 a 13 % do vídeo
    2;
  - no conservador, uns 60 M tokens passam do Opus para o Sonnet e uns 60 M do Fable para o Opus;
  - no ousado, passam uns 1,0 a 1,6 bilhão do Opus para o Sonnet e uns 95 M do Fable.
- **Em semanas:** hoje, um vídeo como o 2 custa cerca de 1,25 limite semanal, e o vídeo ainda não acabou. Com o conservador,
  ficaria em uns 1,1; com o ousado, em uns 0,9.

### 3.3 O que é medido, o que é suposto e o que não está publicado

**Medido no disco:**
- **Os tokens:** de cada agente, por tipo e por modelo. Dois métodos de contagem bateram em 27 de 27 casos sorteados
  (`consumo.md`).
- **O painel:**
  - a subida de 2 % para 27 % em 08/10, com Opus puro;
  - o limite semanal de 08/10 às 04:08, com a mistura de modelos, e o começo daquela semana: depois do limite de 05/10, o uso só
    voltou às 22:01 de 06/10, e a mensagem de 08/10 dá o reinício para 13/10, às 22:00;
  - a janela do limite de 5 horas de 08/10, das 23:00 às 04:00 ("resets 4am");
  - nenhuma outra conversa do Claude Code deste PC, no lado Windows, teve uso nesses intervalos.
- **O esforço** de cada mensagem: os agentes do central rodaram em `xhigh`, e os especialistas no esforço do cabeçalho. E também
  que o workflow obedece ao esforço pedido no script.
- **As regravações:**
  - no espectador e no `qc-visual`, todas logo depois de o contexto encolher e todas com a marca `thinking_dropped`. No
    espectador, uma a cada ~20 imagens, depois das primeiras ~50 (medido nos lotes 1, 3 e 4 do meio-dia);
  - no editor e no `mapista`, a maioria depois de pausas de mais de 5 minutos.
- **Quanto da revisão de espectador terminou com erro** ou ficou sem resultado, pelo estado que cada workflow gravou.
- **As suas marcas da s35 e da s63 do Juneau** na fila de comentários. A versão do clipe que o revisor viu, contra a que você
  marcou, não foi conferida: só a cena e o trecho batem.

**Suposto:**
- **Que o mesmo trabalho em outro modelo usa os mesmos tokens.** O Sonnet pode dar mais voltas: o `qc-visual` chegou a 324
  voltas num lote.
- **Que dentro de um mesmo modelo o painel pesa cada tipo de token pelo preço.** A documentação diz que o conteúdo relido pesa
  menos, sem dar o número.
- **Os pesos do Fable e do Sonnet** (2,1 e 1,5 vez o preço): saem de duas equações para dois pesos, sem folga para conferir. Por
  isso, toda economia sai também pela régua do preço.
- **Que cada reinício fora do ciclo (06/10, às 22:00, e o de 08/10, entre 04:08 e 11:50) zerou o contador.**
- **Os números de alguns itens:**
  - a parte do editor que é conserto (30 % e 50 %);
  - os 40 % a menos de raciocínio com o esforço `high`, sem contar o efeito do esforço no número de voltas;
  - a metade das regravações cortada com metade das imagens. Só lotes menores, com as mesmas imagens, cortam pouco.
- **Que não houve uso fora dos registros** (claude.ai, o app em outro aparelho, a extensão, um Claude Code no WSL) nos intervalos
  medidos. Se houve, o Fable pesa menos do que calculei.
- **Que o vídeo 2 representa um vídeo.** Ele não acabou, e uns 6 a 8 % foram preparo que não se repete.

**Não publicado pela Anthropic:**
- quanto cada modelo pesa no limite do Max: Sonnet contra Opus, Opus contra Haiku, e o número exato do Fable;
- quanto pesa cada tipo de token;
- o tamanho do limite semanal, e se o seu plano é o Max 5x ou o 20x (o painel não diz).

**Publicado e conferido hoje:**
- **Os preços de tabela:** página de preços da Claude Platform, lida em 08/10.
- **O Fable conta no limite semanal geral e o gasta mais depressa:** central de ajuda, artigo "Claude Fable models on your
  plan", lido em 08/10.
  - Isso corrige a dúvida do `tarefas.md`: tirar trabalho do Fable alivia, sim, a barra "all models".
  - Também resolve outra dúvida dele: o workflow aceita esforço por agente.

---

## 4. Como testar antes de trocar de vez, sem pôr o vídeo em risco

A regra é **rodar ao lado, não no lugar**. No teste, o modelo novo roda em paralelo, sobre o mesmo material, e a produção usa só
o resultado do modelo de hoje. A troca só vale depois de duas rodadas que passam.

1. **Primeiro, sem teste (itens 1, 2, 3 no conservador, 5 e 7):**
   - as trocas mecânicas: os leitores que só leem, a lista da trilha e a conferência do ingest, do cut_detect e do mirror;
   - o esforço `high` nos verificadores, conferências e leitores, e também nos céticos (o motor usa `high` em todo papel de
     julgamento). Nos céticos, acompanho se a parte dos achados que eles derrubam muda, porque eles são o filtro;
   - não perder rodada.

   A prova é o artefato: o `_portao.json` e o relato batem, o diff mostra só as linhas pedidas, e um script confere cada citação
   dos leitores.
2. **Revisão de espectador em Sonnet (item 8), o teste que mais importa:**
   - **O material:** dois lotes do vídeo 2 já revistos em Opus, um com mapa e um sem. O lote 8 já rodou duas vezes em Opus e deu
     7 e 8 achados. Isso só vale se os quadros daquela versão ainda estiverem no disco.
   - **O Sonnet** revê cada lote duas vezes. Os quatro conjuntos de achados (Opus e Sonnet) vão, misturados e sem dizer de quem
     são, a um cético em Opus.
   - **A régua:** primeiro, quanto uma rodada do Opus traz dos achados da outra, porque o Opus também varia (o lote 8). O Sonnet
     passa se trouxer pelo menos tanto quanto o Opus traz de si mesmo, menos 10 pontos percentuais, sobre os achados que
     sobrevivem ao cético, e se não perder nenhum de gravidade alta. Depois, as suas marcas na linha do tempo são o gabarito
     final: achado que você marcar e só o Opus viu reprova a troca.
   - **Custo:** uns 5 a 8 pontos, uma vez (4 a 6 se o Sonnet pesar pelo preço). Melhor logo depois de o semanal reiniciar, e com
     nada mais rodando.
   - **O mesmo teste mede o peso do Sonnet:** leio o painel antes e depois das quatro rodadas em Sonnet, antes de o cético rodar.
     Leio também a barra de 5 horas, que é umas 4 vezes mais fina que a semanal. Essa é a única medida que fecha a incerteza do
     Sonnet (§3.1).
   - **O item 6** (menos imagens por revisor) pode entrar no mesmo teste: uma das rodadas do Opus com metade dos quadros.
3. **Céticos em Sonnet (item 9):** só se o item 8 passar e ainda faltar economia. Os mesmos achados vão a um cético Opus e a um
   Sonnet. Passa se discordarem em menos de 1 de cada 10 e o Sonnet nunca derrubar achado que você depois confirma.
4. **Consertos do `editor-de-arte` em Opus (item 10, se você quiser testar):**
   - na próxima leva de consertos, metade das cenas vai ao `editor-de-arte` em Opus e metade em Fable;
   - os dois lados passam pelos mesmos portões, pelo `qc-visual` e pela revisão de espectador;
   - conto, nos dois lados, o defeito novo criado ao lado do conserto (o problema do item 59), e você vê as cenas na linha do
     tempo sem saber qual é qual.
5. **Haiku 5.5:** uma rodada curta de leitor, conferindo no registro que a resposta saiu como `claude-haiku-5-5`. Depois, como no
   passo 1.
6. **Constância do `qc-visual`:** as mesmas 6 cenas julgadas duas vezes, em dias diferentes. Se o "aprovado" mudar em mais de 1
   de cada 6, a questão volta a você, com o custo de subir para Opus.

Em todo teste, anoto o custo por tarefa concluída (voltas, tokens e retrabalho), não por token.

---

## 5. O que depende de você e o que eu posso mudar sozinho

**Posso mudar sozinho, e recomendo começar já, no que falta do vídeo 2:**
1. **Passar o modelo e o esforço explicitamente em cada workflow** (hoje nenhum passa):
   - Sonnet nos leitores que só leem, na lista da trilha e na conferência do ingest, do cut_detect e do mirror. A conferência de
     research, requisitions, screen_text, art_direction e conducting fica em Opus, e a parte de contrato dos verificadores vai
     primeiro para script;
   - esforço `high` nos céticos, verificadores, conferências e leitores;
   - o espectador continua em Opus `xhigh` até o teste.

   Não vou mudar o modelo-padrão de subagentes na configuração do Claude Code: isso pegaria tudo de uma vez e mexe na
   configuração.
2. **Não perder rodada:**
   - ler o painel antes de lançar um workflow grande;
   - cada revisor grava o resultado cena a cena, durante o trabalho (hoje ele já grava, mas só no fim, e o lote 4 perdeu tudo
     assim);
   - lote pronto não se relança.
3. **Menos imagens por revisor**, no teste do espectador (§4, passo 2). Só lotes menores, com as mesmas imagens, cortam pouco.
4. **Rodar o teste do espectador em Sonnet** (§4, passo 2) logo depois do próximo reinício do semanal. Aviso antes, porque gasta
   uns 5 a 8 pontos.

**Depende de você (os especialistas e o roteiro; decisão de 26/09):**
1. **Os consertos do `editor-de-arte` em Opus**, ficando a criação no Fable. Se o Fable pesa no painel o que a conta da §3.1
   diz, é o maior ganho num papel só (6 a 10 pontos). Pelo preço, seriam 2 a 3. O próprio motor separa assim. Recomendo testar
   na próxima leva de consertos (§4, passo 4) antes de decidir.
2. **A lista de consertos e o "aplicar" do roteiro fora do Fable**, ficando a escrita no Fable. Ganho pequeno, e risco pequeno.
3. **Os outros especialistas ficam como estão**, e o `qc-visual` continua em Sonnet. Não recomendo nenhuma troca ali.
4. **Gastar 5 a 8 pontos de uma semana no teste do espectador.**

**A minha recomendação, em uma frase:** a troca de modelo sozinha não resolve o limite. O que eu faço já (rodada não perdida,
esforço certo e as trocas mecânicas) tira uns 7 pontos num vídeo que bate no limite como o 2, e só 1 a 2 num vídeo que não bate.
O teste do espectador em Sonnet (com menos imagens por revisor) e os consertos do editor em Opus podem levar a economia a uns 33 a
36 pontos. Mesmo assim, um vídeo inteiro deve continuar perto de uma semana de limite.

---

## Como refazer as contas

- As contas por agente estão em `out/_modelos/consumo.csv` (de `medir-consumo.py`).
- Os scripts deste relatório ficaram no rascunho da sessão, fora do canal: `scratchpad/relatorio/v2.py` (o vídeo 2 por família
  e modelo), `cenarios.py` (os pontos e os cenários), `esforco.py` (esforço e central por hora), `reescritas.py` (a causa das
  regravações) e `outras.py` (o uso de todas as conversas nas janelas do painel).
- A conferência cética, com as somas refeitas por outro extrator, as duas réguas e o que mudou neste relatório, está em
  `out/_modelos/cetico.md`. Os scripts dela ficaram em `scratchpad/cetico/`.
