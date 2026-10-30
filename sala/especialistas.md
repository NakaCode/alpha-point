# `sala/especialistas.md`, da Sala de controle

Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: `out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, `sala/CLAUDE-completo.md`.

O que é só da Sala ou registro em "Os especialistas": o portão do `research`, o conferente como agente geral, uma conversa por peça (até o Juneau), o `package.json`, o M11 e a limitação do portão (as regras moram nas roupas e no regimento), "Mais mapa", "Mais ilustração" e "O gancho que prende" (as regras moram na marca), o ilustrador conferido e o aceite artístico, e a conversa em Fable de 29/09.


## Os especialistas (desde 26/09/2026) (do CLAUDE.md)

  - **`regie advance` do `research` só com todo arquivo entregue em `out/<proj>/_media/<tipo>/<cena>/`,
    `_media/pessoa/`, `_media/logo/` e `_media/documento/` (menos os `-prova`) casado com um veredito do
    `conferencia-midia.json`, e sem `reprovado` nem `trocar` em arquivo que continua lá.** Arquivo entregue sem
    veredito, ou com esses vereditos, segura o passo; o `pendente_lucas` não segura, e continua fora da cena. A
    geometria (`_media/geo/`), o `_media/_vendor/` do mapa, os `_PROCEDENCIA.json` e o `_master.mp4` não são
    mídia de cena.
  - Agente novo só carrega numa **sessão nova** do app. Até lá, fora da caça, o Claude central o despacha como
    agente geral, no modelo dele (`opus`), mandando ler o arquivo inteiro e seguir o ofício. Na caça, não (skill,
    §2.5): o agente geral herdaria as ferramentas da extensão, com o Chrome do Lucas conectado, e o Claude pede
    ao Lucas uma sessão nova. Ele usa só as ferramentas do
    cabeçalho, do jeito que o contrato dele (§5) lista: nenhuma `mcp__claude-in-chrome__*` nem do painel de
    navegador do app, nenhum `Edit`, e nada fora da lista;
**Uma conversa por peça: só até o Juneau.** No vídeo 2, o Claude central rodou as peças daqui, e o Lucas não abriu
conversa nenhuma ("A autonomia do vídeo 2 em diante", abaixo). Do vídeo 3 em diante, as peças rodam nas cinco conversas
fixas dos setores ("Os setores", abaixo). O que segue é a regra do Juneau.

**Uma conversa por peça** (Lucas, 28/09/2026, para ver o que cada peça faz). A pergunta: "Como você quer acompanhar o
que cada peça está fazendo?" A resposta: "Uma conversa por peça no app". O Claude central não consegue abrir conversa
no app sozinho: o único caminho dele é o botão de tarefa, que abre a conversa numa cópia separada do projeto (worktree),
sem áudio, mídia nem banco. A segunda pergunta: "Uma conversa por peça eu não consigo abrir sozinho. Qual destes
caminhos você prefere?" A resposta: "Você abre as conversas". A opção dizia: "Para cada peça, você cria uma conversa
nova no app, na pasta do projeto (sem cópia separada), e cola um pedido que eu te passo. Eu acompanho e confiro daqui.
Dá mais trabalho para você a cada passo."
- **O pedido** é do Claude central, pronto para colar: quem a peça é (ela mesma lê o ofício, `.claude/agents/<id>.md`, e
  a roupa, `marca/agentes/<id>.md`, e faz o trabalho na própria conversa, não por subagente), o `<proj>`, o passo, a
  tarefa, as ferramentas que o cabeçalho do ofício lista (e só elas), e o fim: um relato, sem commit, sem `regie
  advance` e sem Discord ou Telegram.
- **O Lucas abre a conversa** na pasta `C:\projetos\alpha-point`, sem cópia separada, e escolhe **o modelo da peça**:
  Fable no `diretor-de-arte` e no `editor-de-arte`, Sonnet no `qc-visual`, Opus nos outros ("Os modelos", abaixo).
- **O Claude central acompanha** pela leitura da conversa (`list_events`), confere o que ela gravou no disco, roda os
  portões e os verificadores independentes (esses continuam aqui, e aparecem no painel de tarefas) e manda os
  defeitos de volta para a conversa da peça. Commit, `regie advance`, Discord e Telegram continuam só com ele.
- A conversa da peça confere, antes de trabalhar, que roda em `C:\projetos\alpha-point` (e não numa cópia): em
  outra pasta, ela para e avisa.
- **O nome da conversa** é `<Vídeo> · <peça>` (ex.: `Juneau · redator-de-tela`), e quem o dá é o Claude central
  (`set_session_title`), logo que acha a conversa. O vídeo muda a cada vídeo, e a peça, a cada passo.
- **Os grupos da barra lateral** (Lucas, 28/09/2026: "Você consegue criar grupos, nomear e agrupar as peças que
  fazem sentido serem do mesmo grupo?"). O Claude central põe cada conversa de peça no grupo dela
  (`move_sessions`), junto com o nome:
  - **Orquestrador** (criado pelo Lucas): a conversa do Claude central, "Sala de controle";
  - **Pesquisa e mídia**: os seis `pesquisa-*` e o `conferente-de-midia`;
  - **Direção**: o `montador`, o `diretor-de-arte` e o `regente-de-imagem`;
  - **Texto e fatos**: o `redator-de-tela` e o `verificador-de-fatos`;
  - **Arte**: o `editor-de-arte` e o `mapista`;
  - **Qualidade**: o `qc-visual`.
  Os grupos valem para todos os vídeos: quem diz o vídeo é o nome da conversa.
- **Na caça, não**: lá o conferente continua como subagente, aqui, sem as ferramentas do Chrome (skill, §2.5). Uma
  conversa nova teria a extensão ligada.

**Mais mapa** (Lucas, 27/09/2026: "nos próximos devemos usar mais mapas (mas claro que somente se o contexto
permitir"): do vídeo 2 em diante, a pauta e o roteiro preferem o ângulo espacial quando o assunto o tem, e fala de
lugar, rota, distância ou território vai a mapa antes de B-roll genérico. Nunca mapa forçado. O Juneau fica como
está. A regra mora em `marca/identidade.md` §5, e as roupas do montador, do diretor-de-arte e do regente apontam
para lá.

**Mais ilustração** (Lucas, 14/10/2026: "Quero aumentar a quantidade de ilustrações/animações por vídeo"): do vídeo 3 em
diante, sem número fixo, a animação desenhada entra também no lugar do B-roll genérico quando explica melhor ("B-roll nem
sempre, mas quando a ilustração parecer uma melhor alternativa"), na comparação de tamanho, quantidade ou proporção, e nas
etapas e linhas do tempo. O mapa e o registro real não se trocam por desenho, e a régua de mundo real fica em ≥ 60 %. A
regra mora em `marca/identidade.md` §5 ("Mais ilustração"), e as roupas do montador, do diretor-de-arte e do regente
apontam para lá. Quem constrói é o `editor-de-arte`, em Opus ("Os modelos", acima).

**O gancho que prende** (Lucas, 24/10/2026, depois de publicar o Peru: "Talvez nosso hook não seja "forte o suficiente" e o
início dos próximos deva ser mais atrativo visualmente, ou seja, mais interativo, com animações, imagens sobre o local e o uso do
mapa"; às quatro regras propostas, marcou as quatro): do vídeo 5 em diante, o gancho abre na imagem real mais forte do lugar, troca
de imagem a cada 3–6 s até a vinheta (sem fusão, nenhuma cena acima de ~8 s, três linguagens, duas imagens reais do lugar), o mapa
entra voando até o lugar com os números animados, e a primeira frase da fala é o fato mais surpreendente sobre o lugar que a imagem
mostra. As regras moram em `marca/identidade.md` §5 e `marca/voz.md` ("Os números da fala"); as roupas do montador, do
diretor-de-arte, do regente e do qc-visual apontam para lá. O portão do roteiro de cada vídeo cobra a primeira frase.

- Conferido em 07/10/2026: os testes dos validadores na cópia (47 de 47), as auditorias dos estudos (exit 0) e o
  `verificar-pacote.py --com-node` do pacote (22 de 22). Isso é integridade técnica, não aceite artístico.
- **O aceite artístico do Lucas** veio em 12/10/2026, depois das 5 cenas de Los Angeles (s13, s15, s16, s36 e s52): "com
  exceção da mão, acredito que as outras partes podem deixar de ser experimentais".
  - Os módulos de movimento e física são método aceito no canal.
  - A mão v003 continua experimental: nunca como padrão aprovado.
  - O pacote continua a chamá-los de experimentais, e a cópia em `ilustracao/` não se edita. A decisão mora na roupa do
    `editor-de-arte` (§5).
  - O vídeo da revisão está em `out/los-angeles/_tmp/rever-ilustrador/ilustrador-5-cenas.mp4`, fora do git. Depois de
    vê-lo, o Lucas confirmou: "Gostei bastante das ilustrações".

Uma conversa de peça em `fable` já rodou (29/09/2026, "Juneau · diretor-de-arte"): as respostas saíram como
`claude-fable-5-1`. Ela abriu no modelo padrão do app, o Opus. O Claude central confere o modelo logo que acha a
conversa (`get_session`); se não for o da peça, troca com `set_session_model`, que só vale da próxima volta. Com a
volta já correndo, interrompe (`stop_session`), confere no disco que nada foi gravado e manda recomeçar. O
subagente em `fable` subiu em 02/10/2026 (abaixo, "A autonomia do vídeo 2 em diante"). Agente novo em
`.claude/agents/` só carrega numa **sessão nova** do app.

- O `package.json` é o do molde (`C:/projetos/regie-v1/template/package.json`); o `npm.cmd install` pôs 9 pacotes em
  `node_modules/`, que fica fora do git. O `package-lock.json` vai ao git.
- **O orçamento de imagens do `qc-visual`** (M11, `auditoria-tokens.html`; Lucas, 14/10/2026: "Sim", para ver o texto final;
  e, ao texto final, "Aplicar, até 4 (Recomendado)", às 12:2x de Brasília): até 25 imagens por execução, os lotes pelo tipo (até 2 de mapa ou 4 sem mapa) e um passo curto
  nas emendas. O como está na roupa (`marca/agentes/qc-visual.md` §2.1) e no `setores/REGIMENTO.md` ("O `qc-visual`"); a
  medida, `ferramentas/medir-espectador.py <pasta> --rotulo=qc-visual:L --teto=25`. Mantido no balanço de
  24/10/2026 ("Ficam as duas", com a M6): nas rodadas medidas dos vídeos 3 e 4, nenhuma regravação; no vídeo 2, o laço custou
  US$ 116.
- **A limitação do portão vai ao Lucas, cena por cena** (01/10/2026).
  - **A pergunta:** em 7 cenas do Juneau, o portão reprova com uma régua do Top10 que a marca não tem, e não há
    declaração honesta que ele aceite. O código dele vem do motor e não se edita. "Como seguimos?"
  - **A resposta:** "3. Você vê cada uma antes. Eu te mando o trecho das 7, e você decide cena por cena". As outras
    opções eram a exceção registrada e mudar as cenas até o portão passar.
  - **O caminho:** reprovação de portão passa por triagem, com triador e cético (`out/<proj>/_tmp/triagem-portoes-*.json`).
    - O que sai **declarar** ou **defeito** vai ao editor ou ao mapista.
    - O que sai **limitação** vai ao Lucas, com o trecho da cena (1080p, com a narração e o ponto marcado) e o texto do
      que mudaria.
  - **Se ele manda manter:** a exceção vai a `out/<proj>/qc/_excecoes-portao.json`, com a cena, o portão, o sha1 do
    HTML, a mensagem literal e a hora dele. O `qc-visual` aprova a cena com aquele portão vermelho, citando a exceção, e
    só ele. A exceção vale para aquela reprovação. Se o HTML mudar, o Claude central confere que a reprovação continua a mesma
    (o mesmo texto, o mesmo par, o mesmo tempo) e grava o sha1 novo. Se ela mudou, volta ao Lucas.
  - **Se ele manda mudar:** é conserto, como qualquer outro.
