# `sala/autonomia-e-espectador.md`, da Sala de controle

Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: `out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, `sala/CLAUDE-completo.md`.

A autonomia do vídeo 2 em diante (as quatro respostas do Lucas) e a revisão de espectador, antes do Lucas.

## A autonomia do vídeo 2 em diante (02/10/2026)

O Lucas perguntou (02/10/2026, 00:0x de Brasília): "o que conseguimos reduzir minha interferência? Digo, dar autonomia sem
mim". Antes das perguntas, o Claude central disse o que não sai dele, por ser regra de segurança e não do canal: o "sim" a
uma lista antes de baixar pelo navegador e nos bancos pagos (uma lista só por vídeo), e senha, código, verificação de
robô, termos e compra. As quatro respostas:
- **As peças.** A pergunta: "Para você não precisar abrir uma conversa para cada peça, eu posso rodar os especialistas
  daqui, cada um no modelo dele. Como seguimos do vídeo 2 em diante?" A resposta: "Eu rodo daqui (Recomendado)". A opção
  dizia: "Você não abre conversa nenhuma. Cada peça roda aqui dentro, no modelo dela (Fable, Opus, Sonnet), e você
  acompanha pelo #status no Discord e pelos relatos. Você perde a janela ao vivo de cada peça." Logo depois ele
  perguntou: "Cada novo vídeo eu terei que abrir todas às conversas?". Não terá.
  - Como: `Agent` com o `subagent_type` do especialista (o `id` de `.claude/agents/<id>.md`), sem passar modelo: o
    modelo vem do frontmatter ("Os modelos", acima). O pedido é o mesmo que ia para a conversa da peça: o `<proj>`, o
    passo, a tarefa, que ele lê o ofício e a roupa, e o fim (um relato, sem commit, sem `regie advance` e sem Discord ou
    Telegram). O resto de "Como se despacha" continua: o artefato vence o relato, os portões e os verificadores
    independentes rodam aqui, e o defeito volta à peça por um despacho novo (ou pelo `SendMessage`, se ela ainda estiver
    viva).
  - O `diretor-de-arte` e o `editor-de-arte` vêm em `fable`. **O subagente em `fable` sobe** (provado em 02/10/2026, nos
    ajustes da revisão do Juneau, workflow `wf_01523dca-775`): os transcripts dos 3 editores, do conserto da s02 e do
    diretor gravam `"model":"claude-fable-5-1"`. No `Workflow`, o despacho é `agent(…, {agentType: '<id>', model:
    '<o do frontmatter>'})`; no `Agent`, `subagent_type: '<id>'` (o modelo vem do frontmatter). Confira o modelo no
    transcript (`grep -o '"model":"[^"]*"'`) de vez em quando; se um dia não subir, pare, avise o Lucas e não edite o `.md`
    nem troque o modelo.
  - Até 29/10/2026, uma linha no `#status` do Discord a cada peça que começava e terminava. Os avisos estão desligados
    desde então ("Os avisos no Discord e no Telegram", abaixo).
- **O roteiro.** A pergunta: "Até onde você quer aprovar o texto do vídeo?" A resposta: "Pauta e roteiro (Recomendado)".
  Ele aprova o tema e lê o roteiro uma vez, como no Juneau.
- **O que o Claude central decide sozinho.** A pergunta: "O que eu posso decidir sozinho, registrando tudo para você ver
  depois?" Das três opções, ele marcou uma: "Crédito da voz até 15 mil". A opção dizia: "Até 15.000 créditos da
  ElevenLabs por vídeo sem pedir ok (a narração inteira do Juneau gastou 6.621; o resto foram testes). Acima disso,
  pergunto." As outras duas ficaram com ele: a reprovação de portão que a marca não tem continua indo a ele cena por
  cena, e os ajustes depois da revisão dele continuam indo como lista de opções.
  - O gasto se registra antes e depois de cada rodada (o saldo da conta e o recibo, como em
    `narracao-conferencia.md`) e se avisa no chat da Sala depois. A conta é por vídeo: a soma de testes, narração e
    parágrafos refeitos. O que passar de 15.000 no vídeo pede o ok antes da rodada que passaria.
  - O teste às cegas da voz do vídeo 2 (item 4 da narração, acima) entra nos 15.000.
  - No vídeo 2 (Los Angeles), o teto caiu: o Lucas, 07/10/2026, 04:2x, "Você pode usar mais que 15 mil." O registro e o aviso
    continuam. Do vídeo 3 em diante, volta o teto de 15.000, até ele dizer outra coisa.
- **Os bancos pagos.** A pergunta: "A caça nos bancos pagos é a parte que mais pede você: a janela à vista, os cliques na
  aba e a lista. Como fica no vídeo 2?" A resposta: "Como hoje". A opção dizia: "Caça sempre que a lista de mídia pedir."
  "Caça nos bancos pagos", abaixo, não muda.

**A revisão de espectador, antes do Lucas** (decisão do Claude central, 02/10/2026; `APRENDIZADOS.md`, item 61).
- **Por quê:** o `qc-visual` aprovou as 55 cenas do Juneau, e o Lucas achou no Premiere, num olhar só, oito defeitos de
  espectador: tela com informação demais (s01), crédito que pesa (s01), grifo sobre lacuna vazia (s02), começo que não
  se entende (s05), campo em branco antes do número (s23), mesa vazia por quase 3 s (s40), foto em tira fina (s56) e um
  fim pobre (s62 e s63).
- **Como:** antes de o XML ir ao Lucas, um revisor olha o vídeo como ele, sem ler cabeçalho nem conceito. Ele vê os
  quadros dos clipes em 1080p a cada 0,5 s, com a fala do `words.json` ao lado, e só pergunta o que um espectador
  perguntaria:
  - dá para entender o que a cena mostra no primeiro segundo?
  - quantas coisas há para ler de uma vez?
  - há marca, campo ou moldura sem conteúdo?
  - há mais de 2 s sem nada que acompanhe a fala?
  - algum texto ou foto pequeno demais para o celular?
  - a imagem fica a mesma por tempo demais, mesmo acompanhando a fala? (esta e a seguinte desde 24/10/2026, do balanço: foi o
    que o Lucas mais achou depois da revisão nos vídeos 3 e 4)
  - a câmera anda rápido ou bruscamente demais?
- **Em lotes curtos, mantida no balanço de 24/10/2026** (Lucas, 14/10/2026, sobre a M10 da auditoria de tokens, `auditoria-tokens.html`:
  "Vamos seguir apenas com a opção 1, ela é reversível certo? Testaremos ela no vídeo 3 e caso não funcione bem, pensaremos
  novamente na solução").
  - **Por quê:** quando as imagens de uma conversa passam de uns 25 MB, o Claude Code tira as mais antigas, e a conversa
    inteira se regrava (code.claude.com/docs/en/prompt-caching, "Accumulating many images", que não dá o número; os 25 MB,
    ou 24 MiB, são o medido nas transcrições do vídeo 2, umas 40 folhas). O revisor reabre o que sumiu, e o laço recomeça. No
    vídeo 2, com lotes de 21 a 56 folhas, 80 % das imagens abertas foram reabertas, e as regravações custaram US$ 751 dos cerca
    de US$ 1.280 da revisão, a preço de tabela. O revisor que ficou abaixo dos 25 MB custou de US$ 1 a 3.
  - **As folhas:** com os quadros do verbo `quadros` da linha do tempo (rodou nas duas revisões do vídeo 2, em 08 e 09/10),
    `python -X utf8 -B ferramentas/folhas-espectador.py <proj> [--cenas=…]` faz as folhas no formato da r4 do vídeo 2 (quatro
    quadros por folha, reduzidos a 960×540, um a cada 0,5 s, com a fala embaixo) e os lotes de até 20 folhas, na ordem do
    vídeo, numa pasta nova a cada rodada (`out/<proj>/_tmp/espectador-r<N>/lotes.json`), cada lote com a fala só das cenas
    dele e, do 2º lote em diante, a folha de passagem (a última do lote anterior, para ver a troca de cena na fronteira). Ela
    recusa quadro mais velho que a cena: rode antes o `quadros` das cenas da rodada.
  - **Um revisor por lote,** em Sonnet, com o rótulo `espectador:L<n>` e o pedido de `ferramentas/espectador-pedido.md` (o da
    r4, com o lote, a passagem e o orçamento). Ele abre a passagem e cada folha do lote uma vez e, para olhar de perto, o quadro
    1080p, sem nunca passar de 25 imagens no total, contando as reabertas. Grava o achado, entrega e termina. O cético continua
    em Opus.
  - **A régua de qualidade** (teste de 14/10/2026, nas folhas da r4 do vídeo 2, sem ver o resultado antigo; o detalhe na ficha
    da M10): os revisores curtos acharam 20 dos 22 achados médios e altos que o cético tinha mantido em 09/10 (um 21º em parte),
    mais 6 médios novos que o cético manteve, sem nenhuma regravação e a US$ 19 contra US$ 389. A falta foi um salto entre
    cenas de lotes diferentes; com a folha de passagem, os dois revisores do teste viram a troca (um a apontou como leve).
  - **Como se mede, a cada rodada:** `python -X utf8 -B ferramentas/medir-espectador.py <a pasta do workflow>
    --lotes=<o lotes.json da rodada>` tem de sair 0: nenhuma regravação nem compactação, até 5 % de imagens reabertas,
    ninguém acima de 25 imagens, ninguém cortado e toda folha do lote aberta. O custo que ele imprime vai à ficha da M10,
    contra o previsto.
  - **Se não funcionar** (o medidor fora de 0 depois de um ajuste, ou o Lucas achando na linha do tempo o que a revisão deixou
    passar), o Claude central avisa o Lucas, volta o método de antes (esta seção e a linha dos lotes em "O levantamento dos
    modelos" como estavam no commit `632c844`) e o Lucas decide de novo.
- **O que faz com o achado:** um cético tenta derrubar cada um. O que sobra vai ao `editor-de-arte` ou ao `mapista`
  como defeito, ou ao Lucas, se mexer em regra da marca.
- **O crédito a 56 px não é achado** (do vídeo 2 em diante): é decisão do Lucas, de 07/10/2026 ("Quero reduzir para 56px"). No
  celular deitado, em tela cheia, ele fica com uns 10 pt (a Apple recomenda 11 no mínimo); a conta foi dita ao Lucas no chat em 07/10/2026, e a decisão é dele.
  Crédito menor que 56, ou sem contraste, continua achado.
