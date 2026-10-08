# O cético: conferência do relatório de modelos (08/10/2026)

Conferência de `relatorio.md`, `consumo.md`, `peso.md` e `tarefas.md`, feita só lendo. Refiz as somas direto dos registros
com um extrator meu (não reaproveitei a base nem os scripts dos levantamentos), reli na origem as páginas da Anthropic que
o relatório cita e procurei, nos registros e nos roteiros dos workflows, a prova de cada recomendação. Nada do canal mudou,
fora este arquivo e as correções no `relatorio.md` (§7). Nada foi gasto. As horas são de Brasília, salvo quando têm "Z" (UTC).

---

## Veredito em poucas linhas

1. **As somas estão certas.** Refiz seis somas dos registros, e todas batem com o relatório em até 0,5 % (§1).
2. **Os preços citados estão certos**, e a frase do Fable na central de ajuda também (§2).
3. **A leitura de cache foi tratada como barata**, pelo preço de tabela (US$ 0,20 contra US$ 5 da regravação no Opus). Que o
   plano pese cada tipo de token pelo preço é suposição, e o relatório diz isso. Testei outras maneiras de pesar: a conclusão
   sobre o Fable quase não muda (§3.4).
4. **Erros que mudam números:**
   - a "conferência" de que a conta dá 124 pontos e o painel mostrou 125 é circular (§3.2);
   - "o peso do Sonnet não dá para medir" está errado: a hora que faltava está no registro, e a mesma conta que dá o Fable a
     2,1 vezes o preço dá o Sonnet a 1,5 vez, uns três quartos do Opus. O cenário ousado usa o Sonnet pelo preço, a metade do
     Opus, junto com o Fable a 2,1: a combinação mais favorável, que nenhuma das duas réguas sustenta (§3.3). Corrigido, o
     ousado cai de 30 para 23 a 28 pontos (só o central) e de 43 para 33 a 36 (com as decisões do Lucas) (§6);
   - o item 7 do ousado conta o raciocínio do espectador, que o próprio relatório manda manter em `xhigh` (§5);
   - "Só US$ 420 viraram resultado entregue, uns 56 %" não se reproduz pelos registros (§5).
5. **Recomendações que trocam qualidade por economia sem dizer** (§4): a conferência de passo não é "quase só mecânica" no
   vídeo 2 (julga licença, procedência e texto de tela que escapou do verificador); os "leitores" incluem o curador de pautas
   e a lente de pronúncia; a "parte de contrato dos verificadores" não existiu no vídeo 2; e "lotes menores" não cortam as
   regravações do jeito que o relatório diz. Fazer isso de verdade pede menos quadros por revisor, e isso muda o que ele vê.
   Nenhuma recomendação põe Haiku em julgamento visual ou em checagem de fato. A exceção era o ousado, que punha o curador e
   a pronúncia no Haiku.
6. **Promete mais do que mede, em parte.** Dos 7,9 pontos que o central economizaria sozinho no conservador, 5,8 vêm de não
   perder rodada no limite. Essa economia só existe se o próximo vídeo bater no limite no meio de um workflow de novo. A parte
   estrutural fica em uns 1,3 a 1,6 ponto por vídeo. E o item 10 ("conservador", 6,4) depende inteiro do peso do Fable tirado de
   um evento só: pelo preço, seriam 2,1 pontos.

---

## 1. As somas refeitas

Método: um extrator próprio leu os 1.727 registros (as duas conversas centrais, os 1.723 agentes e as outras duas conversas do
projeto mexidas desde 06/10). Contei uma vez por `message.id`, com o maior `output_tokens`, e deixei de fora o `<synthetic>`.
Nenhum `message.id` aparece em dois arquivos (0 de 80.761): não há conta em dobro entre o central e os agentes. Os preços são
os da tabela de hoje (§2).

| soma | relatório e levantamentos | refeita | diferença |
|---|---|---|---|
| Janela de calibração, 08/10 15:30:31Z a 19:51:38Z | 4.449 mensagens; 1.035.389.970 tokens; US$ 618,08 | 4.448; 1.035.004.473; US$ 615,29 | uma mensagem do central às 19:51:38,xxx (a própria leitura do painel, com 345.895 tokens de escrita de cache de 1 hora) cai fora da minha comparação de horário; com ela, US$ 618,07 |
| Semanal até o limite, 07/10 01:00Z a 08/10 07:08:25Z | Opus US$ 1.125,6; Fable 527,1; Sonnet 160,7 | 1.125,55; 527,13; 160,74 (13.014 mensagens) | nenhuma |
| Limite de 5 horas, 08/10 02:00Z a 06:05:20Z | Opus 205,0; Fable 100,9; Sonnet 151,2 | 205,00; 100,86; 151,16 | nenhuma |
| Vídeo 2 (07/10 03:00Z a 08/10 20:02:58Z, pela regra do `v2.py`) | 4.591 M; US$ 2.493; Opus 3.807 M / US$ 1.810; Fable 236 / 527; Sonnet 548 / 157; central 671 M / US$ 223 | 4.590,2 M; US$ 2.493,2; 3.807 / 1.809,8; 236 / 527,0; 547 / 156,5; 671,1 / 223,1 | arredondamento |
| Famílias do vídeo 2 | espectador 842 M / US$ 590; `editor-de-arte` 170 / 322; céticos 598 / 283; workflows do espectador US$ 747 | 841,6 / 589,4; 170,2 / 321,7; 598,2 / 282,5; 746,6 | arredondamento |
| Período inteiro (23/09 a 08/10, sem a medição) | 18.680,0 M; 79.335 chamadas | 18.679,4 M; 79.333 | 2 mensagens na borda do corte |

Também conferi que nenhuma outra conversa do Claude Code nesta máquina (lado Windows) teve uso nas janelas de limite: as duas
outras mexidas depois de 06/10 (`8775ef82` e `89efa900`) têm a última resposta em 29/09. **Não conferi** um Claude Code dentro do
WSL (o WSL não está rodando, e eu não o liguei) nem o uso fora deste PC (claude.ai, celular, o painel lateral da extensão).

---

## 2. O peso de cada modelo: as fontes

- **Preços** (https://platform.claude.com/docs/en/about-claude/pricing, lida de novo em 08/10). Por milhão de tokens, na ordem
  entrada / escrita de 5 minutos / escrita de 1 hora / leitura de cache / saída:
  - Fable 5.1: 10 / 12,50 / 20 / 0,25 / 50;
  - Opus 5.5: 4 / 5 / 8 / 0,20 / 20;
  - Sonnet 5.5: 2 / 2,50 / 4 / 0,10 / 10;
  - Haiku 5.5 até 100 mil tokens de prompt: 0,10 / 0,125 / 0,20 / 0,01 / 0,50; acima: 0,50 / 0,625 / 1 / 0,05 / 2,50;
  - Haiku 4.5: 1 / 1,25 / 2 / 0,10 / 5.

  Notas 1 e 2 da tabela: a leitura de cache é 0,025 vez a entrada no Fable 5.1 e 0,05 vez no Opus 5.5 e no Sonnet 5.5. **Bate
  com o `peso.md` e com os scripts.**
- **Janela de contexto** (https://platform.claude.com/docs/en/build-with-claude/context-windows): o Haiku 5.5 tem 1 milhão, e
  "prompts over 100,000 tokens cost more"; o Haiku 4.5 tem 200 mil. **Bate.** A mesma página diz que um pedido leva até 600
  imagens. Não é isso que encolhe o contexto do espectador (§4.4).
- **O Fable no plano** (support.claude.com, artigo 15424964, de 02/09/2026): no Max, ele sai do limite semanal regular, gasta
  "faster than other Claude models", sem número, e pode usar até 50 % do semanal. **Bate.**
- **O peso de Opus, Sonnet e Haiku no plano:** não é publicado. O relatório diz isso.
- **O peso do Fable (2,1 vezes o preço)** não tem fonte publicada. É medido neste PC, num evento só. O relatório o põe em "Não
  publicado" e em §3.1, mas o resumo do começo o apresentava sem a ressalva.
- **"O próprio motor separa conserto de arte"** (`infra/modelos.json`): **confere.** O papel `conserto` é Opus 5.5, `effort:
  high`, "Não inclui recriação visual", e escala para `arte` (Fable) quando o achado exige inventar imagem. Hoje o `quem_usa`
  dele está vazio: nenhum agente usa esse papel. Todos os papéis do motor usam `effort: high`, o que apoia o item 7.

---

## 3. A conta do peso no painel: o que se sustenta e o que não

### 3.1 A semana começou mesmo em 06/10, às 22:00? Sim, com mais prova do que o relatório deu

- 05/10, 16:28Z: "You've hit your weekly limit · resets Oct 7, 11pm".
- Nenhuma resposta do modelo, em registro nenhum, de 05/10 16:29Z até 07/10 01:01:31Z. O uso volta minuto e meio depois das
  22:00 de 06/10, um dia antes do reinício anunciado.
- 08/10, 07:08:25Z: "You've hit your weekly limit · resets Oct 13, 10pm". Sete dias antes disso dá 06/10, 22:00.
- Houve, então, um reinício fora do ciclo em 06/10, às 22:00, e outro entre 07:08Z e 14:50Z de 08/10 (o uso volta às 14:55Z). Às 12:30, o painel mostrou
  2 %, com reinício em 15/10 às 02:00Z, que é o ciclo antigo das 23:00. A conta supõe que cada reinício zerou o contador. É o
  mais provável, mas não há leitura do painel logo depois de nenhum dos dois.

### 3.2 "A conta dá 124 pontos, e o painel mostrou uns 125" não confere nada

O peso do Fable foi calculado para que a janela de 07/10 01:00Z a 08/10 07:08Z desse exatamente 100 pontos. A régua do Opus foi
calculada para que a tarde de 08/10 desse 25. O vídeo 2 é quase exatamente essas duas janelas. Logo, 100 + 25 ≈ 124 por
construção. Ainda: com o Sonnet pesado como a mesma conta pede (§3.3), a base daria 127, não 124.

### 3.3 O peso do Sonnet dá para medir, com a mesma fragilidade do Fable

O relatório diz (§3.1) que o limite de 5 horas das 03:05 "muda de 'impossível' a '1,4 vez o Opus' conforme a hora em que aquela
janela começou, e essa hora não está registrada". **Está registrada.** A mensagem das 06:05:40Z diz "You've hit your session
limit · resets 4am (America/Sao_Paulo)". A outra mensagem de 5 horas do dia diz "resets 4:50pm", então o horário vem com os
minutos, e "4am" é 04:00. A janela foi de 02:00Z a 07:00Z, a mesma que o `peso.md` somou.

Com as duas equações (o limite de 5 horas e o semanal), sobre as réguas medidas à tarde (US$ 641 por sessão de 5 horas e US$
24,7 por ponto do semanal), saem **Fable a 2,09 vezes o preço e Sonnet a 1,52 vez**. O script do relatório usa exatamente isso:
o `cenarios.py` tem `fF,fS=2.10,1.48`, com o comentário "conta com os 2 eventos". O texto, porém, diz que o Sonnet não se mede, e
o cenário ousado o põe pelo preço.

Sonnet a 1,5 vez o preço é **uns três quartos do Opus pelo mesmo trabalho**: trocar Opus por Sonnet economiza uns 25 %, não 50
%. Se a conta vale para tirar o peso do Fable, vale também para o Sonnet. Se não vale, nem um nem outro.

### 3.4 Pesando cada tipo de token de outro jeito

O plano não publica quanto pesa cada tipo de token. Refiz as duas equações com cinco maneiras de pesar, calibrando cada uma de
novo nas mesmas janelas:

| como o plano pesaria | 1 ponto do semanal | semanal sem peso extra | limite de 5 h sem peso extra | Fable (só o semanal, Sonnet pelo preço) | as duas equações: Fable / Sonnet |
|---|---:|---:|---:|---:|---:|
| A. pelo preço de tabela (o do relatório) | US$ 24,7 | 73 pontos | 71 % | 2,25 | 2,09 / 1,52 |
| B. leitura de cache a 0,1 vez a entrada (o dobro) | 32,4 | 78 | 72 % | 2,03 | 1,85 / 1,59 |
| C. leitura de cache não conta | 17,0 | 70 | 75 % | 2,07 | 2,02 / 1,22 |
| D. todo token igual, pelo preço de entrada | 165,7 | 86 | 70 % | 2,01 | 1,57 / 1,94 |
| E. só a saída conta | 3,2 | 117 | 62 % | 0,63 | 0,31 / 3,47 |

- Nas quatro primeiras, o Fable fica entre 1,6 e 2,1 vezes o preço, e o Sonnet entre 1,2 e 1,9. **O Fable acima do preço é
  robusto à maneira de pesar o cache. O Sonnet pela metade do Opus não aparece em nenhuma delas.**
- A "E" vira tudo de cabeça para baixo, mas contraria a central de ajuda, que diz que o conteúdo em cache conta, só que menos.

### 3.5 O que derrubaria o peso do Fable

A frase "a diferença só se explica com o Fable pesando acima do preço" é exagero. A mesma diferença também se fecharia com uso
fora destes registros: uns US$ 650 ao preço de tabela, ou uns 27 pontos em 30 horas (claude.ai, celular, o painel da extensão,
um Claude Code no WSL). É pouco provável, mas não está excluído. E o limite de 5 horas, sozinho, já pede peso extra no Sonnet ou
no Fable. Duas equações para dois pesos não deixam folga para conferir nada: qualquer erro de premissa (a hora da janela, o
contador zerado no reinício, uso fora dos registros) vai inteiro para os dois pesos. A faixa de 1,9 a 2,5 do relatório só cobre o
arredondamento dos 25 pontos.

**Conclusão:** há duas réguas coerentes. **"Pelo preço"** (Fable e Sonnet pelo preço) dá 101 pontos ao vídeo 2, abaixo dos uns
125 que o painel marcou. **"Pela conta do painel"** (Fable a 2,1, Sonnet a 1,5) dá uns 127. O conservador do relatório usa a
segunda, e está coerente. O ousado mistura o Fable da segunda com o Sonnet da primeira.

---

## 4. Recomendações que trocam qualidade por economia sem dizer

### 4.1 A conferência de passo não é "quase só mecânica" (item 3)

No vídeo 2, a "conferência de passo" é o workflow `linha-los-angeles-conferir` (mais três conferências únicas). Pelo roteiro do
workflow:
- `conferir:research` liga cada arquivo de `_media/` ao veredito do conferente, pelo casamento de licença (URL do item, `sha256`
  do rascunho) e pelo uso por cena, e decide o que fazer com dois arquivos com `trocar` num uso;
- `conferir:requisitions` confere a procedência, o `mesmo_item` e a linha L da caça;
- `conferir:screen_text` procura texto que as cenas mostram e que não passou pelo `verificador-de-fatos`;
- `conferir:art_direction` e `conferir:conducting` julgam se as cenas seguem o conceito e se as FALTA estão declaradas.

É regra de licença, de procedência e de fato na tela, onde o próprio `tarefas.md` (§4.5) conclui que "o modelo não desce". Só o
`conferir:ingest-cut_detect` e o `conferir:mirror` (US$ 7,9 de US$ 43,1) são validação de contrato e de `sha256`. O cético em
Opus ajuda, mas ele só julga o que o conferente lhe mostra: um texto não verificado que o conferente não listou não chega a ele.
A economia em jogo é de 0,4 a 0,9 ponto, e passa a 0,1 a 0,2 se só esses dois forem para o Sonnet.

### 4.2 Os "leitores" incluem quem julga (item 1)

Os US$ 28,3 do item 1 são:
- `ler:*` (retomada do estado), US$ 11,6: esses, sim, só leem;
- `agua:*`, US$ 11,0: levantamento único, que não volta no próximo vídeo;
- `pronuncia`, US$ 3,9: a lente de pronúncia da bancada do roteiro, cujo laudo vai para a voz;
- `curador`, US$ 1,8: escolhe pautas para o vídeo novo, o que é decisão editorial.

O ousado punha os quatro no Haiku 5.5, e o relatório descrevia o grupo como "catalogar e ler não é julgar".

### 4.3 A "parte de contrato dos verificadores" não existiu no vídeo 2 (item 4)

O item supõe que 30 % do gasto dos verificadores (US$ 27,6 de US$ 90,2) é conferência de contrato. No vídeo 2:
- US$ 59,2 foram a verificação dos fatos do dossiê;
- US$ 3,3, a clareza do roteiro;
- o resto foram conferências únicas: dos consertos da marca (inclusive ler código de portão) e do piloto do ilustrador.

Nenhum verificador foi só de contrato. O `tarefas.md` (§8) admite que a divisão é estimativa, e o relatório não a listava como
suposição. Num vídeo como o 2, essa economia é perto de zero. A recomendação certa continua: o que é contrato vai primeiro para
script.

### 4.4 "Lotes menores" não cortam as regravações do jeito que o relatório diz (item 6)

O registro mostra o mecanismo. Toda regravação do espectador (363 de 363) e do `qc-visual` (75 de 75) traz em
`input_transformations` a marca `thinking_dropped`, com o motivo `prefix_binding_mismatch`: o raciocínio guardado das voltas antigas
deixa de casar com o começo da conversa e é descartado, e o cache se perde. Nenhuma volta sem regravação traz essa marca.

Nos lotes 1, 3 e 4 da rodada do meio-dia, a primeira regravação veio depois de 46 a 50 imagens, e as seguintes a cada 17 a 21
imagens novas:

| lote | imagens | regravações |
|---|---:|---:|
| 1 | 1.045 | 51 |
| 3 | 564 | 25 |
| 4 | 1.020 | 46 |

A conta é, mais ou menos, (imagens − 50) ÷ 20 por revisor: o número de regravações segue o total de imagens vistas, não o
tamanho do lote. Dividir os mesmos quadros entre o dobro de revisores poupa só umas 2,5 regravações por revisor a mais. Para
cortar metade é preciso mostrar metade das imagens: um quadro por segundo em vez de dois, ou mais quadros por folha. Isso muda o
que o revisor vê, e um defeito que dura meio segundo pode escapar. É troca de qualidade, e pede teste.

(O relatório dizia "umas 600 imagens" por revisor; nesses três lotes foram de 564 a 1.045.) No `mapista` e no `editor-de-arte`, a
mesma marca aparece em 32 das 35 e em 20 das 37 regravações, e 30 e 20 delas vieram depois de pausas de mais de 5 minutos. As
duas causas andam juntas, e só o registro não separa uma da outra.

### 4.5 Esforço `high` nos céticos "sem teste" (item 7)

O motor usa `high` em todo papel de julgamento (`infra/modelos.json`), o que apoia a troca. Mas os céticos são o filtro de
precisão, e não há medida nenhuma da qualidade deles em `high`: no Juneau, só 5 dos 146 céticos rodaram assim, e no vídeo 2,
nenhum. O risco é pequeno, mas não é zero. Vale acompanhar a taxa de achados derrubados antes e depois da troca.

### 4.6 O teste do espectador em Sonnet (§4 do relatório)

- **Falta a comparação do Opus com ele mesmo.** O lote 8 rodou duas vezes em Opus e deu 7 e 8 achados, com gravidades trocadas.
  Os 90 % exigidos do Sonnet precisam ser medidos contra quanto uma rodada do Opus acerta da outra, ou o teste pode reprovar o
  Sonnet por uma instabilidade que é do próprio Opus.
- **A barra de 5 horas mede o peso do Sonnet com mais precisão que a semanal.** Um ponto do semanal vale uns 3,8 pontos da
  sessão, e as duas barras andam em números inteiros.
- **O custo do teste:** se o Sonnet pesa três quartos do Opus, as quatro rodadas e o cético custam uns 5 a 8 pontos, não 4 a 6.

---

## 5. Onde o relatório promete mais do que mede

- **"Só US$ 420 viraram resultado entregue, uns 56 %."** Não se reproduz. Pelo estado que cada workflow gravou no `journal.jsonl`,
  até as 17:02:58, dos US$ 746,6 da revisão:
  - **US$ 237,7 (32 %)** foram de agentes que terminaram com erro:
    - na madrugada, US$ 138,2: 13 revisores (US$ 125,6) e 14 céticos (US$ 12,6), nos limites das 03:05 e das 04:08;
    - ao meio-dia, o lote 4, US$ 99,5, no limite das 13:58;
  - **US$ 27,6 (4 %)** eram dos lotes 5 e 6, relançados às 16:51 com a mesma chave (`v2:e3bd2cb8eb9…` e `v2:9ddec41d4c7…`),
    embora já tivessem resultado desde as 13:19 e as 13:21. É desperdício, mas não erro, e não sei dizer se foi de propósito;
  - **US$ 481,4 (64 %)** eram de agentes com resultado. Parte desse resultado foi refeita depois: na madrugada, o s52–s55 (com
    resultado às 03:03) e o s43–s49 (às 03:05) foram relançados às 04:02, por US$ 3,1 e US$ 6,8.

  Os "US$ 144 com erro + US$ 116 sem registro" do relatório somam US$ 260, perto de erro mais em andamento (US$ 265).
- **O item 5 (não perder rodada) já estava em parte no roteiro.** O workflow do meio-dia (`espectador-los-angeles-r3`) já mandava
  cada revisor "grave o mesmo JSON da sua resposta … antes de responder, para que ele não se perca se a sessão parar". O lote 4
  perdeu US$ 99,5 mesmo assim, porque a gravação vem no fim. O conserto que faltava é gravar cena a cena, durante o trabalho, e não
  relançar o lote que já tem resultado (os lotes 5 e 6; o s52–s55 e o s43–s49).
- **O item 5 é 5,8 dos 7,9 pontos** do conservador do central. Ele só existe se o próximo vídeo voltar a bater no limite no meio
  de um workflow. Sem ele, o que o central economiza sozinho, de forma estrutural, fica em uns 1,3 a 1,6 ponto por vídeo,
  quase tudo do esforço.
- **O item 7 do ousado (1,9 ponto)** é 40 % de todo o raciocínio do Opus nos agentes do central (5,8 M tokens), inclusive o 1,5 M do
  espectador (26 %). O relatório mantém o espectador em `xhigh` até o teste: sem ele, são 1,4 ponto. Os 40 % são um palpite.
  O esforço também muda o número de voltas. No Juneau, os verificadores em `high` deram 16 voltas por agente, contra 46 em `xhigh`,
  mas as tarefas eram outras. Não está medido, nem para mais economia nem para mais risco.
- **O item 10 no conservador (6,4 pontos)** depende inteiro do Fable a 2,1 vezes o preço. Pela régua do preço, são 2,1 pontos (30
  % do editor) ou 3,4 (50 %). O relatório dava os dois números no texto, mas a coluna "conservadora" usava o mais favorável.
- **"O Fable foi 5 % dos tokens e cerca de um terço dos pontos":** um terço pela conta do painel, e 21 % pelo preço.
- **"No Juneau, achou antes de você o vazio da s35 e a tela parada da s63":** o `tarefas.md` (§4.1 e §8) avisa que a versão do clipe
  não foi conferida, só a cena e o trecho. O relatório pôs as marcas em "Medido no disco" sem essa ressalva. Não reli isso.
- **Os scripts** das contas ficam no rascunho da sessão, que é apagado. Quem quiser refazer as contas depende do que está descrito
  nestes arquivos.

---

## 6. A estimativa refeita, por vídeo como o 2

Fiz duas contas coerentes. Na primeira, tudo pesa pelo preço. Na segunda, pela conta do painel: Fable a 2,09 e Sonnet a 1,52 vez
o preço. Nos itens com o meu ajuste:
- o 1 fica só com os `ler:*`;
- o 3, no conservador, só com o ingest e o mirror;
- o 4 vai a zero;
- o 7 do ousado deixa de fora o raciocínio do espectador.

Os outros itens ficam como no relatório. O total de cada régua é a soma dela, e não a soma dos extremos das faixas.

| # | o que muda | conservadora (preço / painel) | ousada (preço / painel) |
|---|---|---:|---:|
| 1 | só os leitores que leem (`ler:*`) para Sonnet (Haiku 5.5 no ousado) | 0,2 / 0,1 | 0,4 / 0,4 |
| 2 | lista da trilha para Sonnet | 0,1 / 0,1 | 0,1 / 0,1 |
| 3 | conferência de passo para Sonnet (no conservador, só ingest, cut_detect e mirror) | 0,2 / 0,1 | 0,9 / 0,4 |
| 4 | parte de contrato dos verificadores | 0 / 0 | 0 / 0 |
| 5 | não perder rodada (só se o vídeo bater limite de novo) | 5,8 / 5,8 | 10,5 / 10,5 |
| 6 | menos imagens por revisor (com teste: muda o que ele vê) | 0 / 0 | 5,9 / 5,9 |
| 7 | esforço `high` nos agentes do central, fora o espectador | 1,0 / 1,0 | 1,4 / 1,4 |
| 8 | espectador para Sonnet, com teste | 0 / 0 | 3,9 / 1,9 |
| 9 | céticos para Sonnet, com teste | 0 / 0 | 5,4 / 2,6 |
| 10 | consertos do `editor-de-arte` em Opus (30 % e 50 %) | 2,1 / 6,3 | 3,4 / 10,5 |
| 11 | lista e "aplicar" do roteiro fora do Fable | 0,7 / 2,1 | 1,0 / 2,2 |
| | **só o central** | **7,4 / 7,1** | **28,4 / 23,1** |
| | **com as decisões do Lucas** | **10,1 / 15,5** | **32,9 / 35,8** |

Base de cada régua: 101 pontos pelo preço e 127 pela conta do painel (o painel marcou uns 125). No relatório, o conservador era
7,9 e 16,4, e o ousado era 30,0 e 43,1. **Mesmo no ousado, um vídeo como o 2 fica em uns 90 pontos do semanal**, não 80.

Sem os itens 5 a 7, só a troca de modelo dá de 3 a 9 pontos no conservador e uns 22 a 23 no ousado (com o espectador inteiro em
Sonnet).

---

## 7. O que mudei no `relatorio.md`

- **Uma nota no topo** que aponta para este arquivo.
- **"Em poucas linhas":**
  - no item 4, o peso do Fable passa a ser estimativa de um evento só, o Sonnet aparece a uns três quartos do Opus, e o Fable
    fica entre um quinto (preço) e um terço (painel) dos pontos;
  - no item 5, a economia sem risco passa a "1 a 2 pontos, quase tudo do esforço";
  - no item 6, o mecanismo das regravações;
  - no item 7, as estimativas novas e o "uns 90 pontos".
- **§1.1:** a conta de 124 contra 125 aparece como calibração, não como conferência.
- **§1.2:**
  - o desperdício do espectador pelos `journal.jsonl` (32 % com erro, 4 % relançado, 64 % com resultado), no lugar dos "US$ 420,
    56 %";
  - a gravação no fim, que o roteiro do meio-dia já pedia;
  - o mecanismo das regravações (a marca `thinking_dropped`, a cada ~20 imagens) e o número real de imagens;
  - quantos agentes do Juneau rodaram em `high`.
- **§2.1:**
  - a conferência de passo vai para o Sonnet só no ingest, no cut_detect e no mirror;
  - os leitores, só os que leem;
  - os verificadores, com o aviso de que no vídeo 2 nenhum foi só de contrato.
- **§1.2, "No período inteiro":** a ressalva de que os 8,6 % supõem metade dos verificadores e dos consertos mecânica.
- **§2.1, revisão de espectador:** "lotes menores" vira "menos imagens por revisor, no teste", e entra a ressalva da versão do
  clipe.
- **§2.2:** a frase do `editor-de-arte` passa a ser condicional ao peso do Fable.
- **§2.3:** a ressalva de que o Haiku pode pesar acima do preço, como o Sonnet.
- **§3.1:**
  - o peso do Sonnet, com a hora da janela que está no registro;
  - o "só se explica" trocado pelas alternativas;
  - a faixa do Fable com o cache pesado de outros jeitos (1,6 a 2,3);
  - a prova do começo da semana (o uso volta às 22:01 de 06/10);
  - a razão de preço Fable contra Opus na mistura do canal: 2,1, e não 2,2.
- **§3.2:**
  - a tabela, refeita com as duas réguas;
  - o "Como ler";
  - os tokens que mudam de modelo;
  - as semanas (uns 1,1 e 0,9).
- **§3.3:** a hora da janela de 5 horas passa a "medido"; a divisão dos verificadores, o efeito do lote menor e a ressalva da
  versão dos clipes passam a "suposto".
- **§4:**
  - no passo 1, só as trocas que sobraram, e o esforço `high` nos céticos com acompanhamento;
  - no passo 2, a comparação do Opus com ele mesmo, a barra de 5 horas e o custo de 5 a 8 pontos.
- **§5:** as listas e a frase final, com os números novos.

## 8. O que não conferi

- O uso fora deste PC e um Claude Code dentro do WSL.
- A classificação de cada agente em família (usei a do `consumo.csv`; conferi à mão as famílias que o relatório propõe trocar).
- As afirmações de qualidade herdadas do `tarefas.md` (s35 e s63 do Juneau, PESQ-13 do Top10, o "LBCT"): não reli as fontes.
- Se o relançamento dos lotes 5 e 6 às 16:51 foi de propósito.
- O que dispara o `prefix_binding_mismatch`. A hipótese de o Claude Code tirar imagens antigas do contexto combina com o ritmo de
  ~20 imagens, mas não está provada.

Meus scripts de leitura ficaram no rascunho da sessão (`scratchpad/cetico/`: `extrai.py`, `base.py`, `wfmap.py`), fora do canal.
