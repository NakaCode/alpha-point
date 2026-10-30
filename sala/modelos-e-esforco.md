# `sala/modelos-e-esforco.md`, da Sala de controle

Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: `out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, `sala/CLAUDE-completo.md`.

O roteiro em Fable, o levantamento dos modelos, o que a Sala decide sozinha, a Sala em máx, o ultracode, a Sala que recomeça a cada etapa, o balanço depois do vídeo 3 e o teste da animação em Opus.


## Os especialistas (desde 26/09/2026) (do CLAUDE.md)

**Os modelos** estão no frontmatter, e **cada especialista roda no modelo com que vem do motor** (decisão do
Lucas, 26/09/2026: "os que vierem com fable devem continuar como fable, os que vierem opus como opus"). Não passe
outro modelo no despacho, fora a exceção da animação desenhada (abaixo):
- `diretor-de-arte` e `editor-de-arte` usam `fable` (o plano do Lucas é o Max);
- `qc-visual` usa `sonnet`;
- os outros usam `opus`.
- **A exceção: a animação desenhada em Opus** (Lucas, 14/10/2026, ao pedir mais ilustração: "Mas as ilustrações podem
  serem feitas no Opus"). Do vídeo 3 em diante, a cena `desenho` com `ANIMAÇÃO` no `porque` da regência (identidade §5,
  "Animação para explicar" e "Mais ilustração") o `editor-de-arte` constrói e conserta em Opus: no `Agent`, `subagent_type:
  'editor-de-arte'` com `model: 'opus'`; no `Workflow`, `agentType: 'editor-de-arte', model: 'opus'`. As outras cenas dele
  (a prancha, o documento e o mapa, mesmo com uma peça feita pelo método do ilustrador) continuam em `fable`, e o
  `diretor-de-arte` também. Confira no transcript que subiu `claude-opus-5-5`.
  - **Fica em Opus**, decidido no balanço de 24/10/2026 ("Fica tudo"): 9 cenas em Opus no vídeo 3 e 10 no vídeo 4. As 5
    ilustrações de Los Angeles que o Lucas aprovou tinham sido feitas em Fable.
  - Antes do vídeo 3, o teste: a s52 de Los Angeles (o TEU) refeita em Opus com o mesmo pedido, ao lado da de Fable (Lucas,
    14/10/2026: "Sim, refazer a s52 (Recomendado)"), em `out/prova-opus/`, fora do git. **Feito no mesmo dia**: o editor em Opus
    (conferido no transcript) fez a cena às cegas, com as entradas da 1ª versão (commit `9f8aaef`), e o `qc-cena` saiu 0 na primeira
    entrega. Vistas às cegas (A = a 1ª versão em Fable, B = a de Opus, sorteadas), a resposta do Lucas: "Ambas servem muito bem,
    apenas mudou o ângulo do elemento".

**O roteiro** dos próximos vídeos é escrito aqui, em **Fable 5.1** (Lucas, 26/09: "pode ser por aqui sim"), e não
no claude.ai: o navegador gasta do mesmo limite da assinatura Max (`C:/projetos/regie-v1/docs/CONTAS.md`, "Uma cota
para tudo") e não tem as fontes locais nem a bancada do canal.

**O levantamento dos modelos** (08/10/2026; `out/_modelos/relatorio.md`, com o cético em `cetico.md`). O vídeo 2 gastou uns 125
pontos do limite semanal até 08/10, 17h; o Fable pesa ~4,6× o Opus pelo mesmo trabalho, e o Sonnet ~¾ do Opus. As respostas do Lucas
(08/10, 17:5x):
- consertos do `editor-de-arte` em Opus em vez de Fable? **"Não, manter Fable"**: o editor continua todo em Fable (menos a
  animação desenhada, desde 14/10/2026: "Os modelos", acima);
- testar a revisão de espectador em Sonnet, lado a lado com a de Opus, num lote pequeno da próxima revisão? **"Sim, testar
  (Recomendado)"**. O teste rodou na conferência da arte r4 (09/10, dois lotes): o Sonnet achou 11 dos 14 achados que o cético
  manteve, e o Opus 9. A pergunta "Passo a revisão de espectador ao Sonnet?" teve a resposta **"Sim, Sonnet revisa
  (Recomendado)"**: o revisor de espectador roda em Sonnet; o cético continua em Opus;
- do vídeo 3 em diante, as partes mecânicas do roteiro (cópia para a voz, trocas de pronúncia, conferências) fora do Fable?
  **"Sim, só a escrita em Fable (Recomendado)"**: a escrita, o gancho e a voz em Fable; o resto em Opus ou Sonnet.
  - No vídeo 3, a Sala pôs também os três planos e o juiz em Fable, repetindo o vídeo 2; a barra semanal do Fable foi de 0 a 24 %
    numa manhã, com 7 agentes. O Lucas, 14/10/2026: "eu acredito que somente a etapa de ESCRITA deva estar em Fable, as outras
    em Opus, não?". Do vídeo 4 em diante: os planos e o juiz em Opus; o Fable só na escrita do texto (com o gancho) e nas
    reescritas que a bancada pede.
- **O que o Claude central decide sozinho** (os agentes dele, não os especialistas): leitores, montagem de lista e as conferências
  mecânicas da linha (ingest, cut_detect, mirror) em `model: 'sonnet'`; todo agente com `effort: 'xhigh'` (desde 24/10/2026,
  "O esforço em extra", abaixo; antes, `'high'`); conferência que julga licença, procedência ou texto de tela fica em Opus; revisão de
  espectador em lotes de até 20 folhas e 25 imagens por revisor (desde 14/10/2026, mantida no balanço de 24/10/2026: "A revisão de espectador,
  antes do Lucas"), e todo agente grava o resultado no disco ao terminar. Haiku em nada que pede julgamento; o `qc-visual`
  continua em Sonnet.
- **O esforço em extra, e o ultracode só quando necessário** (Lucas, 24/10/2026, 16:0x, no chat da Sala, depois de publicar o Peru:
  "Quero que você (o orquestrador) rode em extra (ultracode só quando necessário) e todos os outros chats, agentes e etc rodem em
  EXTRA").
  - A Sala roda em `max`: o Lucas a pôs ele mesmo, no mesmo dia ("Já mudei esta conversa para Máx"). Os cinco setores foram
    postos em `xhigh` pela Sala (`set_session_effort`).
  - Todo agente roda em `xhigh`: no `Agent`, `effort: 'xhigh'`; no `Workflow`, `agent(…, {effort: 'xhigh'})`. Vale para os
    especialistas despachados pela Sala e pelos setores (o modelo continua o do frontmatter, e o `effort` vai no despacho, porque o
    `.md` do motor não se edita) e para os agentes da Sala (leitores, céticos, verificadores, revisores de espectador).
  - **Três peças voltam ao alto** (Lucas, 29/10/2026, 12:56, no chat da Sala: "Quero o retorno dos agentes que você sugeriu ao
    High"). A sugestão era a opção B do documento "Scripts no lugar das voltas mecânicas"
    (https://claude.ai/artifact/HRasnQysVLoDBNNpbY88zE): "Alto só no mapista, no qc-visual e no verificador, os três que mais subiram
    com o extra". Na medida do documento, o mapista subiu 81 % por cena, o qc-visual 49 %, e o verificador custou 2,7 vezes por
    item. Desde então, o `mapista`, o `qc-visual` e o `verificador-de-fatos` vão com `effort: 'high'`, despachados pela Sala ou
    pelos setores. As outras peças e os agentes da Sala continuam em `xhigh`.
  - O ultracode continua ligado na sessão (a chave é do Lucas, e a Sala não a muda), mas a Sala só monta equipe de agentes, com
    `Workflow`, quando a tarefa pede: várias frentes independentes, conferência adversarial de algo que vai ao ar ou à marca, ou
    volume que uma conversa não aguenta. Tarefa curta, conversa, conserto pontual e conta de disco, a Sala faz sozinha.
  - Isto decide o item "O ultracode ligado" do balanço depois do vídeo 3 (abaixo).
- **A Sala recomeça a cada etapa** (Lucas, 29/10/2026, 09:5x, no chat da Sala).
  - O contexto da Sala chegou a ~480 mil tokens, relidos a cada resposta, e uma semana inteira já não cobre um vídeo. À ideia de
    recomeçar a Sala, ele respondeu: "se isso ajudar no consumo sem reduzir a qualidade do resultado eu também quero que faça".
  - **Como:** num ponto calmo, sem desafio de setor no meio e de preferência depois de um `regie advance`, a Sala grava a passagem de
    turno na memória do vídeo e se limpa (`clear_session` com `"self"`). A passagem diz os ids abertos, o que cada setor espera, o
    próximo passo e as decisões ainda não registradas.
  - A sessão continua a mesma, e os setores seguem conferindo o `from`. Sem a passagem gravada, a Sala não se limpa.
  - Os agentes e os setores rodavam em "alto" (`high`) antes de 24/10. A Sala, o Lucas pôs em "máx".
- **O ultracode, de 14/10 a 24/10/2026** (Lucas, 14/10/2026, 14:1x: "Manter ligado", às opções de desligá-lo com cético só no que
  importa ou de vez). Ele é a chave do Claude Code que faz a Sala montar equipe de agentes, com conferência, em quase toda
  tarefa (code.claude.com/docs/en/workflows). O dia que embasou a resposta, de 13/10, 23h, a 14/10, 14h, a preço de tabela: uns
  US$ 600, dos quais US$ 95 em céticos e verificadores e US$ 74 em versões alternativas; e o que a conferência pegou nesse dia
  (os 9 consertos do cético da M11, os 7 detalhes que o verificador do relatório de economia derrubou, a versão da vinheta
  descartada). A medida: `ferramentas/medir-espectador.py <pasta do workflow> --rotulo= --json`.

**O balanço depois do vídeo 3** (Lucas, 14/10/2026, 14:2x: "após a finalização do vídeo 3 veremos se essas mudanças de hoje
continuam ou retrocedem ao que eram antes"). Com o vídeo 3 entregue, o Claude central leva ao Lucas, uma por uma, as mudanças de
14/10 abaixo, cada uma com o que se mediu no vídeo e o que seria voltar. Ele decide se cada uma fica ou volta; até lá, todas
valem. Voltar é refazer o texto como estava antes do commit dela, num commit novo (nunca reescrever o histórico).
**Decidido em 24/10/2026, tudo fica**, depois de publicar o Peru, com as medidas dos vídeos 3 e 4 mostradas no chat da Sala:
- M10: "Fica, com 2 perguntas (Recomendado)" (o revisor pergunta também pela imagem parada tempo demais e pela câmera brusca);
- M11 e M6: "Ficam as duas (Recomendado)";
- a ilustração e o Opus: "Fica tudo, mas acredito que as animações não tenham aumentado substituindo, acontece que agora há
  também animações sobre o mapa (o que é o correto e deveria ocorrer mais)" (identidade §5, "Sobre o mapa, mais vezes");
- a vinheta: "Fica"; o ultracode: só quando necessário ("O esforço em extra", acima).

A lista do que se ia medir, como registro:
- **M10**, a revisão de espectador em lotes de até 20 folhas (`5fc4d58`): o `medir-espectador.py --lotes=` de cada rodada e o
  que o Lucas achou na linha do tempo que a revisão deixou passar. Voltar: o texto do commit `632c844`.
- **M11**, o orçamento de imagens do `qc-visual` (`d484140`): o `medir-espectador.py --rotulo=qc-visual:L --teto=25` de cada
  rodada. Voltar: a roupa, o regimento e o item de "Os portões medem" de antes de `d484140` (o conserto do medidor fica).
- **Mais ilustração** (`92cfe4c`): quantas cenas `desenho` o vídeo 3 teve, a régua de mundo real (≥ 60 %) e o olhar do Lucas na
  linha do tempo. Voltar: a identidade §5 e as roupas do montador, do diretor-de-arte e do regente de antes de `92cfe4c`.
- **A animação desenhada em Opus** (`92cfe4c` e `aa6e92e`): o olhar do Lucas sobre as cenas feitas em Opus. Voltar: o
  `editor-de-arte` todo em Fable ("Os modelos", acima).
- **A vinheta de apresentação** (`43f7098`): como ela ficou no vídeo montado. Voltar: sem vinheta, e a marca d'água do começo
  ao fim (identidade §8, roupa do regente e `xml-chamadas.py` de antes de `43f7098`).
- **O ultracode ligado** (`f158d2f`): o custo dos céticos e verificadores no vídeo 3 contra o que eles pegaram. "Voltar", aqui,
  é desligá-lo, a escolha que ele não fez em 14/10. **Decidido em 24/10/2026**: "ultracode só quando necessário" ("O esforço em
  extra", acima).
- **M6**, a medida de margens e fitas antes de entregar, se for aplicada: a "Como validar" da ficha (rodadas de `qc` por cena ≤
  metade das do vídeo 2). Voltar: tirar a linha das roupas.
- Ficam fora do balanço, por não se medirem no vídeo 3: os planos e o juiz do roteiro em Opus (`066f63d`, do vídeo 4 em diante) e
  o público que fala inglês em qualquer país (`795970b`, decisão de marca, não teste).
