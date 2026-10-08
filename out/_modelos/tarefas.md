# Modelo por tarefa: o que cada papel exige, onde dá para trocar sem perder qualidade, e quanto economiza

Levantamento de 08/10/2026, 17:1x (Brasília), feito só lendo: os ofícios (`.claude/agents/`), as roupas (`marca/agentes/`),
o `APRENDIZADOS.md`, os relatos de revisão e os registros das duas sessões (`f42bc036` e `6abb9076`). Nada do canal foi
alterado. O consumo de tokens em detalhe está em `out/_modelos/consumo.md`; aqui o assunto é a **qualidade**, e os números
de peso servem só para dizer onde vale a pena mexer.

---

## 1. A resposta curta

1. **A premissa, corrigida.** Hoje rodam três modelos, e nenhum Haiku:
   - **Opus 5.5**: o Claude central e quase todos os agentes (os 13 especialistas de `model: opus` e todos os agentes
     gerais que o central lança: revisores, céticos, verificadores, consertos, leitores);
   - **Fable 5.1**: o `diretor-de-arte`, o `editor-de-arte` e a escrita do roteiro (decisões do Lucas de 26/09);
   - **Sonnet 5.5**: só o `qc-visual` (veio assim do motor).
2. **O que é mecânico já pesa pouco.** No ritmo do vídeo 2 (07 e 08/10), quem gasta é quem **olha**: a revisão de
   espectador (25 % do gasto dos agentes), o `editor-de-arte` (14 %, em Fable), os céticos (12 %) e o `qc-visual` (7 %).
   Rodar portões, preparar pacotes, ler levantamentos e aplicar consertos já decididos somam 2 a 3 %.
3. **Trocas seguras, que são escolha do central** (sem mexer em especialista): rodar portões e render, pacote de cena
   para o Lucas, leitores de levantamento, consertos de texto já decididos, a parte de contrato dos verificadores
   independentes, triagem de portão e a lista de trilha passam a **Sonnet 5.5**. Economia estimada: **uns 8 a 9 %** do
   gasto dos agentes no período inteiro (23/09 a 08/10), mas **só 2 a 3 %** no ritmo do vídeo 2.
4. **A economia grande está no espectador e nos céticos** (até uns 19 % do vídeo 2 se fossem para Sonnet). Mas é
   justamente o julgamento que, no Juneau, achou antes o que o Lucas marcou depois (§4.1). **Só com teste lado a lado**
   (§7), e o cético continua em Opus.
5. **Antes de trocar modelo, três consertos que não mexem na qualidade** (§6.3):
   - **26 % do gasto da revisão de espectador** foi em agentes que morreram sem resultado (limite e falhas);
   - os lotes do `qc-visual` chegaram a 550 mil tokens de contexto, e cada volta relê tudo;
   - um cético por achado relê o mesmo material várias vezes; um por cena basta.
6. **Os 16 especialistas: a proposta é manter todos como estão.** Nenhuma troca compensa o risco hoje, e a troca é
   decisão do Lucas (26/09: "os que vierem com fable devem continuar como fable, os que vierem opus como opus").
7. **Haiku 5.5** (lançado em 07/10/2026) só cabe, por ora, em rodar portões e em leitores, depois de um teste. Além do
   que o Sonnet já economiza ali, ele tira mais uns 1 %.

---

## 2. Os modelos de hoje (documentação da Anthropic, lida em 08/10/2026)

| Modelo | Entrada / saída por MTok | Leitura de cache | Para que a documentação o indica |
|---|---|---|---|
| Fable 5.1 | US$ 10 / US$ 50 | US$ 0,25 | "For demanding reasoning and long-horizon agentic work" |
| Opus 5.5 | US$ 4 / US$ 20 | US$ 0,20 | "For long-running agentic coding and knowledge work"; na tabela de escolha, inclui "vision-heavy workflows" |
| Sonnet 5.5 | US$ 2 / US$ 10 | **US$ 0,10** | "The best combination of speed and intelligence"; inclui "visual understanding, agentic tool use" |
| Haiku 5.5 | US$ 0,10 / US$ 0,50 até 100 mil tokens de prompt; US$ 0,50 / US$ 2,50 acima | US$ 0,01 / US$ 0,05 | "classification, routing, extraction, and subagent tasks" |

Fontes: platform.claude.com, páginas *Models overview*, *Pricing*, *Choosing a model* e *Claude Haiku 5.5*.
- **O Sonnet 5.5 custa exatamente a metade do Opus 5.5 em tudo**, inclusive na leitura de cache (US$ 0,10 contra
  US$ 0,20). A tabela guardada na skill `claude-api` (de 25/09) dizia US$ 0,20 para os dois, e o `infra/modelos.json` do
  motor nem lista o Sonnet 5.5 nem o Haiku 5.5. Vale a página de preço de hoje.
- **Todos os quatro aceitam imagem** e têm janela de 1 milhão de tokens. O Haiku 4.5, que tinha 200 mil, ficou para
  trás: com ele, de 50 a 100 % dos agentes de cada papel de julgamento não caberiam (o pico de contexto mediano vai de
  160 mil a 330 mil tokens).
- **O Haiku 5.5 cobra 5 vezes mais acima de 100 mil tokens de prompt.** Todo agente do canal carrega o `CLAUDE.md`
  (125 KB), e a maioria passa de 100 mil logo nas primeiras voltas: para nós, vale o preço de cima, que ainda é 1/8 do
  Opus na entrada e na saída, e 1/4 na leitura de cache.
- **O plano Max não cobra por token**: os limites são de 5 horas e semanais, com "a separate weekly limit for Fable"
  (support.claude.com). A página de limites diz que o uso depende de "which Claude model you're chatting with, and the
  effort level you've selected", mas não diz quanto cada modelo pesa. Por isso o preço de lista aqui é **peso relativo**,
  não conta do plano.
- **A própria documentação sugere outra alavanca antes de trocar de modelo:** "Tuning effort is often a better lever than
  switching models" (*Choosing a model*). O Opus 5.5 tem esforço padrão `medium`; os especialistas declaram `high` no
  cabeçalho.

---

## 3. Como se mediu

- **Os agentes:** os 1.712 registros `agent-*.jsonl` das duas sessões, de 23/09 a 08/10 (os 3 a mais que no
  `consumo.md` são os agentes desta própria medição). Cada resposta contada uma vez por `message.id`, com o maior
  `output_tokens` visto.
- **O papel de cada agente** saiu do tipo (`agentType`, quando é especialista) ou da descrição que o central deu
  (`espectador:lote6`, `cetico:s44@25.8`, `verificar:r11`, `preparo:s07`, `conferir:g1`, `triar:tamanho`…), conferida
  pelo pedido de amostras de cada grupo. A regra está no fim (§9).
- **O peso** é o preço de lista de cada modelo (§2) sobre entrada, escrita de cache (preço de 5 minutos), leitura de
  cache e saída. Não inclui a conversa do central, que fica em Opus de qualquer jeito.
- **A qualidade** saiu do disco: o veredito de cada cético nos `journal.jsonl` dos workflows, os laudos, as marcas do
  Lucas em `out/_feedback-queue.jsonl`, os relatos em `out/juneau/_tmp/` e `out/los-angeles/_tmp/`, e o `APRENDIZADOS.md`.

---

## 4. O que o histórico diz sobre qualidade

### 4.1 A revisão de espectador em Opus acertou o que o Lucas marcou depois
- **s35 do Juneau.** O revisor `espectador:r7` (02/10, 20:02–23:31) escreveu: o cartão "já entra no tamanho final, com 2/3
  de baixo vazios", e "de 9,3 a 12,9 s nada muda". Às 00:49 de 03/10, o Lucas marcou a mesma cena no instante 11,4 s:
  "Demora para entrar informações dando a sensação de vazio".
- **s63 do Juneau.** O `espectador:r1` (02/10, 11:54–12:55): "20 s do mesmo quadro sem fala, que só escurece". O Lucas, às
  00:59 de 03/10: "Tela final um pouco vazia, parada".
- **s31 do Juneau.** O `espectador:r8` (03/10) leu o círculo vazio como "uma foto que não carregou", e o Lucas confirmou
  que o defeito era esse ("Cada um no centro").
- Antes, a conferência por regra não tinha visto nada disso (§4.3). **É o papel mais valioso do canal, e o mais caro**: a
  versão de cada clipe não foi conferida nos dois casos (só a cena e o trecho), mas são dois acertos independentes, e
  antes da marca.

### 4.2 O revisor não é estável, e o cético é quem dá a precisão
- **No vídeo 2, o lote 8 rodou duas vezes sobre o mesmo material** e deu 7 e 8 achados, com gravidades trocadas
  (`out/los-angeles/_tmp/retomada-2026-10-08.md`, §5). Isso em Opus. **Toda comparação entre modelos precisa de pelo
  menos duas rodadas de cada um**, ou mede o acaso.
- **De 35 % a 59 % dos achados da primeira passada caem no cético** (contado nos `journal.jsonl`):
  - espectador do vídeo 2 (`_tmp/espectador/resultados/cetico-*.json`): 115 julgados, 75 ficam, 40 caem (35 %);
  - conferência independente dos clipes do Juneau (01 a 05/10): 278 julgados, 161 caem (58 %);
  - outros céticos com `real`: 161 julgados, 95 caem (59 %).
- Ou seja: **a primeira passada procura, o cético filtra**. Uma primeira passada mais barata é aceitável se não perder o
  que importa (o achado que sobrevive), porque o cético continua tirando o falso.

### 4.3 Os 8 defeitos do Juneau escaparam ao Sonnet e ao Opus: foi o método, não o modelo
- O `qc-visual` (Sonnet) aprovou as 55 cenas, e o Lucas achou 8 defeitos de espectador no Premiere (`APRENDIZADOS.md`,
  item 61).
- Mas a conferência independente dos clipes, **em Opus**, no mesmo dia (7 conferentes e 7 céticos, 1.054 quadros), também
  não os viu: confirmou 34 defeitos de margem, canto e tempo, e dos 8 do Lucas só tocou de lado a s02 (o tempo do grifo),
  a s05 e a s40 (margem) (`out/juneau/_tmp/verificacao-render-2026-10-01.json`).
- Os dois julgavam pela régua da marca, e a régua deixava passar. **Quem resolveu foi a revisão de espectador, não um
  modelo maior.** Isso tira o argumento de que o Sonnet do `qc-visual` "falhou por ser Sonnet".

### 4.4 O `qc-visual` em Sonnet: bom olho, régua inconstante
- **Acertos:** viu sobre o satélite o quebra-mar de 1923 correndo 55–70 m ao norte do muro de verdade, o que levou a medir
  o erro das folhas antigas do USGS (item 77). Os laudos do vídeo 2 são detalhados e medem por quadro.
- **Inconstância:** na verificação da 5ª leva do Juneau, um verificador em Opus achou laudos com réguas diferentes para o
  mesmo caso: s55 e s63 aprovadas, s35, s60 e s62 reprovadas, no mesmo estado do crédito
  (`out/juneau/_tmp/art/revisao-lucas-workflow-5d.json`, `verif`).
- **Brandura:** no vídeo 2, ele aprovou cenas e deixou "para o Claude central decidir" violações de regra que o central
  depois mandou consertar (o número antes da voz na s10 e na s12; `out/los-angeles/qc/_decisoes-central.md`, Q10). Dos
  itens que o central decidiu nos lotes Q1 a Q10, pouco mais da metade virou defeito (contagem à mão, 24 de uns 44).
- **O que ele não pega, nenhum modelo pega a olho:** a varredura de margens achou 17 casos que os portões e o `qc-visual`
  deixaram passar (item 78). Medida de borda é de script.

### 4.5 Regra de robô e licença falhou até em Opus
- Dois pesquisadores leram pela API um servidor que tinha recusado outros dois (item 66), e o `pesquisa-pessoas` baixou dois
  retratos de um host que veta robô antes de ler o robots.txt inteiro (item 67). Ambos em Opus.
- No Top10, o QA visual em Haiku (o antigo) deixou passar mídia do assunto errado: "5 'fotos' do escudo vieram TODAS uma
  foto de comida grega" (`seed/regras/PESQ.md`, PESQ-13). A regra de lá ficou: validação de visão forte, "não Haiku".
- O `conferente-de-midia` em Opus viu, no arquivo 4K, o letreiro "LBCT" do porto vizinho num clipe cujo título dizia Port of
  Los Angeles (item 73).
- **Conclusão:** onde mora regra de robô, licença ou identidade de mídia, o modelo não desce.

### 4.6 O conserto cria o defeito ao lado, em qualquer modelo
- No Juneau, cada rodada de conserto (Fable e Opus) confirmou o conserto pedido e criou outro ao lado (item 59). E um
  "reescreva tudo" no roteiro criou dois erros factuais (item 13).
- Por isso o conserto barato só vale **com a lista fechada do que mudar e a prova por diff** de que nada mais mudou.

---

## 5. Papel por papel

Legenda do que a tarefa exige: **V** = julgamento visual fino (olhar quadros e decidir o que o espectador sente);
**F** = checagem factual contra fonte; **E** = escrita para a tela ou para o Lucas; **C** = código de cena (HTML,
animação, MapLibre) ou de ferramenta; **M** = mecânico (rodar script, contar, comparar sha, copiar campo, aplicar conserto
já decidido). O peso é a parte do gasto dos agentes: no período inteiro / só no vídeo 2 (07–08/10).

### 5.1 Os especialistas (trocar o modelo é decisão do Lucas)

Os 15 da pré-v1 não se editam (o `.md` veio byte a byte do motor, com sha256 conferido). Se o Lucas aprovar uma troca, ela
se faz no despacho, passando `model` (`agent(…, {agentType, model})`), e a regra "Não passe outro modelo no despacho" do
`CLAUDE.md` muda junto. O `conferente-de-midia` é do canal e se edita, mas é especialista: vale a mesma decisão.

| Papel | Hoje | Exige | Peso | Proposta |
|---|---|---|---|---|
| `diretor-de-arte` | Fable | V, E (concepção) | 3,7 % / 2,3 % | **manter** |
| `editor-de-arte` | Fable | C, V | 5,7 % / 13,9 % | **manter** (ver nota) |
| `mapista` | Opus | C, F (geometria real) | 3,3 % / 5,1 % | **manter** |
| `montador` | Opus | decisão + M | 2,4 % / 0,8 % | **manter** |
| `regente-de-imagem` | Opus | decisão + M | 1,7 % / 0,5 % | **manter** |
| `redator-de-tela` | Opus | E, F | 1,0 % / 0,7 % | **manter** |
| `verificador-de-fatos` | Opus | F | 0,6 % / 1,4 % | **manter** |
| `qc-visual` | Sonnet | V por rubrica | 3,5 % / 7,0 % | **manter Sonnet**; medir constância |
| `conferente-de-midia` | Opus | V, F (licença, fonte, contexto) | 2,3 % / 1,8 % | **manter** |
| `pesquisa-imagens`, `-documentos`, `-dados`, `-geo`, `-pessoas`, `-logos` | Opus | F + regra de robô + V | 4,3 % / 4,0 % | **manter** |
| `designer-de-navegacao` | Opus | — | 0 | sem trabalho no canal |

Por que, um a um:
- **`diretor-de-arte`.** Decide o arco visual do vídeo inteiro: metáfora, variedade, ritmo. Um modelo menor tende ao literal,
  e o ofício do `montador` dá "cena literal e tímida" como o defeito mensurável. Pesa pouco. *Medir, se um dia testar:* dois
  conceitos da mesma pauta, às cegas, para o Lucas escolher.
- **`editor-de-arte`.** Escreve o HTML de cada cena (RIG, câmera, física, tempo de leitura) e é o produto final. É o segundo
  maior gasto do vídeo 2. Duas observações:
  - o `infra/modelos.json` do motor separa **"conserto"** (reposicionar, reescalar, tempo, margem, sem inventar imagem) em Opus
    de **"arte"** (RECRIAR) em Fable. Os consertos cirúrgicos poderiam sair do Fable para o Opus sem contrariar o motor;
  - mas isso tira uso do semanal do Fable e põe no semanal geral, que é o limite que aperta hoje (27 % em 08/10). Se o uso do
    Fable também conta no semanal geral, a troca piora o que importa; a documentação não diz. **Só vale se o semanal do Fable
    passar a ser o que acaba.** *Medir:* a taxa de defeito novo ao lado do conserto (item 59) na reconferência, Opus contra Fable.
- **`mapista`.** Código de MapLibre com geometria real, câmera e rótulos; erro de mapa é erro factual, e cada render de prova
  gasta MapTiler. O retrabalho custa dinheiro de verdade.
- **`montador` e `regente-de-imagem`.** Decidem o que entra em cada janela e em cada sintagma; o motor os põe no papel
  "decisão" porque "Erro neste papel propaga para as etapas seguintes". O espelho do Juneau teve 13 revisões. As rodadas de
  realinhamento depois de uma decisão são mecânicas, mas são o próprio especialista: não compensa separar.
- **`redator-de-tela` e `verificador-de-fatos`.** Texto público e fato publicado; pesam 1 a 2 %. Não há economia que pague um
  nome errado na tela.
- **`qc-visual`.** Já é o barato. **Não descer para Haiku** (PESQ-13 do Top10). Também não subir para Opus sem prova: a
  falha do Juneau foi de método (§4.3), e o espectador e os scripts cobrem o que ele perde. O defeito que sobra é a
  inconstância (§4.4). *Medir:* julgar as mesmas 6 cenas duas vezes, em dias diferentes; se o "aprovado" mudar em mais de
  1 de cada 6, levar ao Lucas a troca para Opus, com o custo (o dobro).
- **`conferente-de-midia`.** Julga licença, fonte, lugar e marca de terceiro no quadro (o "LBCT", item 73). Erro dele vira
  Content ID, licença errada ou "mídia errada é pior que nenhuma" (PESQ-13).
- **Os `pesquisa-*`.** Vão à rede com as regras de robô, procedência, licença e homônimos. Os dois deslizes de robô do canal
  aconteceram em Opus (§4.5). Já rodam em esforço `medium`; pesam uns 4 %.

### 5.2 Os papéis do Claude central (o modelo é escolha do central)

Nos workflows, o modelo se passa no próprio script (`agent(…, {model: 'sonnet'})`). Hoje nenhum passa, e todos herdam o
Opus da sessão (a retomada de 08/10 já pedia "passar o modelo de forma explícita").

| Papel | Exige | Peso | Proposta |
|---|---|---|---|
| Revisor de espectador | V | 13,2 % / 25,5 % | **manter Opus**; testar Sonnet ao lado (§7) |
| Cético por achado | V + régua da marca | 9,1 % / 11,8 % | **manter Opus**; um cético por cena |
| Conferidor visual de clipe (Juneau, 01–05/10) | V + M | 6,9 % / 0 % | aposentado; se voltar, **Sonnet** com cético Opus |
| Verificador independente | M (contrato) + juízo de regra | 15,5 % / 6,1 % | dividir: contrato por script e **Sonnet**; regra da marca em **Opus** |
| Conserto de arquivo já decidido | M | 5,4 % / 1,0 % | **Sonnet** no texto e no JSON; código em Opus |
| Pesquisa na web (pauta, fontes, viabilidade) | F + regra de robô | 5,1 % / 5,9 % | **manter Opus** |
| Pacote de cena para o Lucas | M + E | 2,4 % / 0,2 % | **Sonnet** |
| Leitor de levantamento | M | 2,2 % / 0,8 % | **Sonnet**; Haiku 5.5 depois de teste |
| Bancada de roteiro (lentes, gancho, títulos) | E, F | 2,0 % / 4,2 % | **manter** (Fable no roteiro é do Lucas) |
| Lista de trilha do Epidemic | M + gosto | (dentro da bancada) | **Sonnet** |
| Construção de ferramenta e de portão | C | 2,0 % / 0 % | **manter Opus** |
| Consolidação e crítico transversal | juízo | 1,4 % / 3,1 % | crítico em **Opus**; junção de listas em **Sonnet** |
| Desenho e maquete (logo, chamada, maquete) | V, criação | 1,2 % / 0 % | **manter** |
| Triagem de portão | C (ler o portão) + régua | 0,8 % / 0 % | **Sonnet**, com o cético em Opus |
| Rodar portões e render | M | 0,8 % / 0 % | **Sonnet**; Haiku 5.5 depois de teste |
| Ajustar instrução (roupa, ofício do conferente) | E + regra | 0,4 % | **manter Opus** |
| O próprio central | decisão, conversa com o Lucas | (fora da conta) | **manter Opus** |

Por que, um a um:
- **Revisor de espectador.** Olha 10 mil folhas de quadros e decide o que um espectador sente no celular: é julgamento
  visual fino, o mais fino do canal, e o único que pega o que a régua deixa passar (§4.1). Pesa um quarto do vídeo 2. O risco
  de trocar é perder justamente o achado que o Lucas faria: tela vazia, leitura demais, começo que não se entende. **Fica em
  Opus até o teste da §7 mostrar o contrário.** Enquanto isso, a economia sem risco está no §6.3.
- **Cético.** Tira de novo o quadro do MP4, mede e lê a marca para derrubar o achado. É o filtro de precisão (§4.2). Um cético
  fraco erra para os dois lados: deixa passar achado falso (conserto e render à toa) ou derruba o verdadeiro (que o Lucas acha
  depois). Fica em Opus. A economia é juntar os achados de uma cena num cético só, com um veredito por achado (a retomada de
  08/10 já propôs): cada cético relê a cena e a marca inteiras.
- **Conferidor visual de clipe.** Foi o que conferiu os 35 primeiros renders do Juneau, antes do npm. Hoje os portões, o
  medidor de margens e o espectador fazem esse trabalho, e ele não rodou no vídeo 2. Se voltar, é primeira passada (procura),
  e o cético em Opus filtra: Sonnet basta.
- **Verificador independente.** O maior gasto do período inteiro. A maior parte é conferir contrato: o sha256 citado em
  `_fontes` bate com o arquivo? os campos de `textos-tela`, `regencia` e `conceito-visual` casam? todo laudo valida? toda cena
  tem veredito? Isso é **script primeiro** (o ofício do `qc-visual` diz o mesmo: "O que se mede, script mede") e Sonnet para o
  resto. Mas uma parte é juízo de regra: foi um verificador em Opus que aplicou a regra do campo em branco ao vídeo inteiro e
  achou a s36, e outro que achou os laudos inconstantes do `qc-visual`. Esse juízo fica em Opus.
- **Conserto de arquivo.** Aplicar uma lista já decidida (registrar decisões, corrigir roupas, a lista de trilha, o
  `textos-tela`) é mecânico. Vale Sonnet, **com a prova por diff** de que só as linhas da lista mudaram (§4.6). Conserto de
  código de portão e de ferramenta fica em Opus (ver "construção de ferramenta").
- **Pesquisa na web.** Pauta, viabilidade, fontes, vozes: vai à rede, onde a regra de robô já falhou em Opus (§4.5), e o que
  ela traz vira fato no roteiro. Fica.
- **Pacote de cena para o Lucas.** Recorta o trecho com o ffmpeg e escreve, em português claro, o que mudaria. É mecânico com um
  texto curto, que o central lê antes de mandar. Sonnet.
- **Leitor de levantamento.** Lê arquivos e cataloga com arquivo e linha, sem julgar. Sonnet já; Haiku 5.5 é candidato
  ("extraction" é o uso que a documentação dá a ele), depois de um teste de completude.
- **Bancada de roteiro.** O roteiro é aprovado pelo Lucas e escrito em Fable por decisão dele; as lentes (fatos, locução,
  clareza) são escrita e checagem. Fica. A lista de trilha é montar metadado (faixa, artista, trecho) com um pouco de gosto, e
  o Lucas ouve antes do "sim": Sonnet. (A música nunca entra em ferramenta de IA; a lista é só metadado.)
- **Construção de ferramenta e de portão.** O que ela escreve decide se uma cena passa (o `portao-mapa`, a pré-carga das
  chaves). Um portão errado dá verde em mapa vazio (item 64). Fica em Opus.
- **Consolidação e crítica.** O crítico transversal é quem juntou as pontas do contorno de robô em Long Beach (item 66): juízo,
  fica. Juntar listas já julgadas é mecânico: Sonnet.
- **Desenho e maquete.** Criação visual (o logo, a chamada, as maquetes para o Lucas decidir). Fica.
- **Triagem de portão.** Lê o código do portão e diz se a reprovação é defeito, declaração ou limitação; um cético em Opus
  confere. Pesa pouco; Sonnet com o cético em Opus.
- **Rodar portões e render.** Rodar comandos e relatar a saída. O risco é ler errado (NÃO MEDIDO como reprovação, esquecer o
  `REGIE_MOTOR` ou a pré-carga), e o `chaves-nos-portoes.mjs conferir` já pega a pré-carga esquecida e o verde sem prova.
  Sonnet; Haiku 5.5 depois de teste.
- **Ajustar instrução.** Escrever ofício, roupa ou regra muda tudo o que vem depois. Fica.

---

## 6. A estimativa

### 6.1 O que significa "peso" aqui
Preço de lista sobre os tokens que cada papel gastou, nas duas sessões. O plano Max não publica quanto cada modelo pesa no
limite (§2). Então os números dizem **onde está o gasto**, e a fração que cada troca economizaria se o limite seguisse o
preço. Como o Sonnet 5.5 custa a metade do Opus 5.5 em tudo, **cada papel que vai para Sonnet economiza a metade do que ele
gasta**, se ele usar o mesmo número de voltas. Ele pode usar mais: o esforço padrão do Sonnet é `high`, e os lotes do
`qc-visual` chegaram a 324 voltas. Por isso a conta certa é por tarefa concluída, não por token.

### 6.2 Os cenários
| Cenário | O que muda | Economia no período inteiro | No ritmo do vídeo 2 |
|---|---|---|---|
| **A. Seguro** (escolha do central) | rodar portões, pacote para o Lucas, leitores, triagem e a lista de trilha em Sonnet; metade dos consertos e dos verificadores (a parte mecânica) em Sonnet | **≈ 8,6 %** | **≈ 2,4 %** |
| **B. Com teste** | espectador e céticos em Sonnet, se o teste da §7 passar | + ≈ 11 % | + ≈ 18,7 % |
| **H. Haiku 5.5** | portões e leitores em Haiku em vez de Sonnet | + ≈ 1 % | + < 0,5 % |
| **Especialistas** | nenhuma troca proposta | 0 | 0 |

O período inteiro inclui o fim do Juneau, com muita verificação e conferência de clipe; o vídeo 2 já roda com portões,
medidor e espectador, e por isso o cenário A pesa menos nele.

### 6.3 O que economiza sem trocar modelo (e sem mexer na qualidade)
- **Não perder rodada.** Dos US$ 1.022 (lista) da revisão de espectador, US$ 264 (26 %) foram de agentes que morreram sem
  resultado: as duas rodadas de 08/10 pararam no limite, e a segunda relançou os 8 revisores, inclusive os 2 que tinham
  terminado. Cada agente gravando o resultado no disco e a conferência do uso antes de lançar já estão no plano da retomada.
  No total dos workflows, 6 % do gasto foi de agentes sem resultado.
- **Lotes menores.** Os lotes Q4 e Q5 do `qc-visual` chegaram a 536 e 553 mil tokens de contexto, com 324 e 283 voltas,
  e cada volta relê tudo: cada um custou mais que 5 lotes pequenos juntos. O revisor de espectador tem pico mediano de
  289 mil. Lote menor relê menos, e contexto menor costuma ajudar a atenção.
- **Um cético por cena**, não por achado (§5.2).
- **Script antes de modelo** nas conferências de contrato (§5.2, verificador).
- **Esforço.** Testar o Opus em esforço `low` ou `medium` nos papéis mecânicos antes de trocá-los de modelo: a documentação
  diz que é muitas vezes a alavanca melhor, e o uso do plano também depende do esforço. Falta conferir se o `Workflow` aceita
  esforço por agente.

---

## 7. Como medir se a qualidade caiu

**Regra geral: rodar ao lado, não no lugar.** No próximo vídeo, o modelo novo roda em paralelo com o de hoje, no mesmo
material, e só o de hoje vale para a produção. Troca-se depois de duas rodadas que passam.

1. **Revisor de espectador (o teste que mais importa).**
   - Dois lotes do próximo vídeo (um de mapa, um sem mapa), cada um revisto **duas vezes em Opus e duas em Sonnet** (§4.2:
     o próprio Opus varia).
   - Os quatro conjuntos de achados vão, misturados e sem dizer de quem são, ao mesmo cético em Opus.
   - **Passa** se o Sonnet trouxer pelo menos 90 % dos achados que sobrevivem ao cético na união das duas rodadas do Opus, e
     nenhum de gravidade alta a menos.
   - Depois, as marcas do Lucas na linha do tempo são o gabarito final: achado que ele marcar e só o Opus tinha visto reprova
     a troca.
   - Custo do teste: uns dois lotes a mais, em Sonnet.
2. **Cético.** Só depois do espectador, e só se a economia ainda fizer falta. Mesma ideia: os mesmos achados a um cético Opus e
   a um Sonnet; **passa** se discordarem em menos de 1 de cada 10, e nunca derrubando achado que o Lucas depois confirma.
3. **Verificador independente.** No próximo passo verificado (por exemplo o `screen_text`), Opus e Sonnet ao lado. **Passa** se
   o Sonnet achar todas as divergências altas que o Opus acha.
4. **Papéis mecânicos (cenário A).** Sem rodada dupla; a prova é o artefato, como sempre:
   - rodar portões: o `_portao.json` e o `conferir` saem iguais aos do Opus, e o relato bate com o JSON;
   - pacote para o Lucas: o central lê o texto antes de mandar, e conta quantos precisou reescrever;
   - leitor: um script conta os itens e confere cada `arquivo:linha` citado;
   - conserto decidido: o `git diff` mostra só as linhas da lista.
5. **Haiku 5.5.** Primeiro, uma rodada curta de portões e uma de leitor, conferindo no registro que a resposta saiu como
   `claude-haiku-5-5` (que o apelido `haiku` do Claude Code aponta para ele não está provado). Depois, como o item 4.
6. **`qc-visual` (constância).** As mesmas 6 cenas, duas vezes; anotar quantas mudam de "aprovado".
7. **Em todo teste:** anotar o custo por tarefa concluída (voltas, tokens, retrabalho), não por token.

---

## 8. O que não se provou

- **Quanto cada modelo pesa no limite do plano.** A documentação não diz; o preço de lista é aproximação. Também não diz se o uso
  do Fable entra no semanal geral além do semanal dele.
- **A versão dos clipes** que o espectador viu na s35 e na s63 do Juneau, contra a que o Lucas marcou: só a cena e o trecho batem.
- **Se o Workflow aceita esforço por agente**, e se o `haiku` do Claude Code já é o Haiku 5.5.
- **O Haiku 5.5 não tem nenhum uso no canal**, e saiu ontem. O Sonnet 5.5 só tem o histórico do `qc-visual`.
- **A escrita de cache** foi contada toda pelo preço de 5 minutos; parte dela é de 1 hora (o dobro), o que puxa um pouco para
  cima o peso dos papéis de contexto grande. O `consumo.md` tem a fração exata.
- **O cenário A divide ao meio** os verificadores e os consertos (a parte mecânica). A divisão é estimativa pela amostra dos
  pedidos, não medida.

---

## 9. A regra de classificação dos papéis (para refazer a conta)

Pela descrição que o central deu a cada agente (`description` do `.meta.json`), em minúsculas:
- especialista: o `agentType` do especialista, ou a descrição que começa pelo nome dele ("Montador: …", "Conferente: …",
  "Diretor de arte: …", "Fix the photo…" para o `pesquisa-imagens`);
- espectador: `espectador…`, `viewer review…`;
- cético: `cetico`, `cético`, `refutar`, `contestar`, `triagem-cetico`, `verificar:m<n>`, `verificar:r<n>`, `skeptic`;
- conferidor visual de clipe: `conferir:r<n>`, `conferir:m<n>`, `conferir:g<n>`, `conferir:n<n>`, `revisao:s<n>`, `julgar:`,
  `juiz:visib…`, `varredura`;
- pacote para o Lucas: `conferir:s<n>`, `preparo`, `preparar`, `refazer:s…`;
- rodar portões e render: `portoes`, `render`; triagem: `triagem`, `triar`, `triage`;
- verificador independente: `textos`, `regencia`, `conceito`, `fecho`, `final:`, `curto:`, `verificar…`, `verificador`,
  `rev:`, `conferencia`, `conferir…` (o resto), `roupa-vs-marca`, `verify`, `revisar`;
- pesquisa: `pesquisa`, `verifica:`, `viab`, `gerador`, `ideias`, `buscar`, `documenta…`, `entender`, `rota`, `agua`, e os
  acervos;
- leitor: `levantar`, `levanta`, `ler`, `oficios`, `mapa:`, `achar`, `linha`, `ponto-de-extensao`;
- consolidação: `sintese`, `síntese`, `cruzar`, `criticar`, `crítico`, `plano`;
- conserto: `consertar`, `conserto`, `consertador`, `corrigir`, `fechar`, `registrar`, `gravar`, `roupas`, `instalar`,
  `aplicar`, `refinar`, `ajustar`;
- ferramenta: `ferramentas`, `construtor`, `pre-carga`, `portao-mapa`, `construir`, `ferramenta`;
- desenho: `desenhar`, `maquete`; bancada: `b1`, `b2`, `r3`, `bancada`, `lente`, `revisao:<n>`, `lista`, `juiz`;
- o resto (176 agentes, 3 %): "outros".

Os scripts da conta ficaram no rascunho da sessão
(`…/scratchpad/qualidade/agg_q.py` e `classify.py`), fora do canal.
