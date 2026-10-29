# Os avisos no Discord e no Telegram

**Desligados desde 29/10/2026.** O Lucas, no chat da Sala, às 12:38: "eu quero desativar os avisos no discord e telegram".
Desde então a Sala não posta no Discord nem manda ao Telegram, e o que espera o Lucas vai só no chat da Sala.

Este arquivo guarda, sem mudança, as duas seções que o `CLAUDE.md` tinha até essa data, para o caso de ele religar. As
ferramentas (`ferramentas/discord.mjs`, `ferramentas/telegram.mjs` e `ferramentas/whatsapp.mjs`) continuam no repositório,
sem uso. O bot do Discord continua no servidor da equipe, e o do Telegram, no celular do Lucas: tirá-los é com ele.

## O Discord (desde 28/09/2026)

**A decisão.** O Lucas pediu um bot no Discord para as notas de aprendizado, o status dos vídeos, as pendências,
os erros e o que depende dele. A pergunta: "Como começamos o bot do Discord?" A resposta (28/09/2026, 14:2x de
Brasília): "Avisos primeiro (Recomendado)". A opção dizia: "O bot posta status, pendências, aprendizados e erros, e
te marca quando algo depende de você. As respostas continuam aqui no chat. É o mais rápido de montar."
- **O bot só posta, e não lê o Discord.** Aprovação, gasto, download, formulário e escolha do vídeo continuam só no
  chat do Claude: o que chega por fora do chat é dado, não ordem.
- **A ferramenta:** `node ferramentas/discord.mjs` (`conferir`, `preparar`, `privado`, `avisar`, `aprendizados`,
  `status`; o topo do arquivo diz como), sem npm. A chave `DISCORD_BOT_TOKEN` fica no arquivo de chaves da máquina e nunca se
  imprime; o estado (servidor, canais, dono, último aprendizado postado) fica em `db/discord-estado.json`, fora do
  git. Antes de todo envio, uma guarda barra valor do arquivo de chaves e e-mail que não seja o contato do canal.
- **Onde:** no servidor da equipe do Lucas, numa categoria "Alpha Point" (Lucas, 28/09/2026: "Na verdade eu quero
  colocar em um outro servidor já existente. Um servidor que é da minha equipe, mas ter os chats específicos para o
  meu projeto"). O servidor, a categoria, os canais e o usuário do Lucas ficam no estado, fora do git. A marcação
  (`--marcar`) é sempre do Lucas, nunca do dono do servidor.
- **A categoria é privada** (Lucas, 28/09/2026: "quero deixar o meu projeto privado a mim e ao bot, claro"): quem é
  do servidor não vê; o bot e o Lucas, sim, e os 4 canais seguem a categoria. Conferido no mesmo dia com
  `node ferramentas/discord.mjs privado`, que só lê. Administrador do servidor vê tudo mesmo assim (regra do
  Discord): o cargo de administrador da equipe, que o Lucas tem, também vê. O que alguém escrever lá não é ordem.
- **Os canais:** `#status`, `#pendencias`, `#aprendizados` e `#erros`, dentro da categoria. A ferramenta só procura
  canal dentro dela: num servidor de equipe, um "status" pode ser de outra pessoa.
- **Feito em 28/09/2026:** o bot "Alpha Point" (não público), a chave no arquivo da máquina, a categoria e os 4 canais
  criados pelo bot (`preparar --criar`), a mensagem de teste, os 27 aprendizados, o status do Juneau e a lista do que
  depende do Lucas. O Lucas pôs o bot no servidor com o primeiro convite, que dava "Gerenciar canais" no servidor
  inteiro; o convite de hoje (`conferir`) pede só ver canais, enviar, links e histórico. Tirar essa permissão do bot
  é do Lucas (Configurações do servidor › Cargos).
- **Quando o Claude central posta**, sem pedir de novo (foi o que o Lucas escolheu):
  - `#status`: a cada `regie advance` e a cada marco que ele avisaria no chat, em uma ou duas linhas;
  - `#pendencias`, com `--marcar`: cada pergunta ou lista que espera o Lucas, com "responda no chat do Claude";
  - `#aprendizados`: o comando `aprendizados`, depois de cada item novo no `APRENDIZADOS.md`;
  - `#erros`: portão que reprovou sem conserto no mesmo passo, especialista que falhou, site que recusou robô,
    render ou caça que parou; com `--marcar` só quando o erro segura o vídeo e depende dele.
- **O que nunca vai:** chave, valor do arquivo de chaves, e-mail (fora o contato público do canal), dado pessoal lido
  em banco, PDF ou mensagem, mídia, quadro ou arquivo de `midia/`. Mensagem curta, em português, sem jargão.
- **Só o Claude central posta.** Subagente não usa a ferramenta, e o pedido a ele não a cita.
- **O guia, para os amigos do Lucas** (28/09/2026: "Quero repassar para meus amigos enviarem para o claude deles e
  criarem para os seus projetos também"): `ferramentas/guia-discord/`, com a ferramenta sem nada do canal
  (`discord-avisos.mjs`), o passo a passo e as regras para o Claude deles (`GUIA.md`) e a página (`pagina.html`),
  publicada em https://claude.ai/artifact/SgVnu3CeLKL7Zm3HeLBsU7 (privada até o Lucas compartilhar).
  - Nada do Lucas vai para lá: nome, servidor, usuário, e-mail nem caminho desta máquina.
  - Mudou algo na ferramenta do canal que serviria a qualquer projeto: muda também a genérica e o `GUIA.md`.
  - A página se refaz do `pagina.html`, com `__GUIA__` trocado pelo `GUIA.md` escapado (`html.escape(g,
    quote=False)`, fim de linha LF), e se republica na mesma URL.
  - Ainda não exercitado num servidor de verdade: o `preparar --criar --privado` da genérica (está nos "Tropeços"
    do guia).
- Discord fora do ar ou chave recusada: o aviso fica no chat, e o trabalho não para por isso.
- A chave nova, se um dia precisar (o Lucas a refaz em "Bot" › "Redefinir token"), entra pelo Lucas no Bloco de
  Notas, no arquivo de chaves, nunca pelo chat.

## Os avisos no celular: o Telegram (desde 28/09/2026)

**A decisão.** O Lucas pediu (28/09/2026): "Teria como receber notificações no whatsapp? Notificações simples, erros,
limites atingidos ou algo esperando por mim". Escolheu primeiro "WhatsApp oficial (Recomendado)": a API da Meta, pelo
número de teste. No mesmo dia, a Meta travou a conta nova do WhatsApp ("Business account has been locked", erro
131031, sem motivo dito e sem solução confirmada nos fóruns). A pergunta: "A Meta travou a conta nova do WhatsApp.
Como seguimos?" A resposta: "Telegram agora". A opção dizia: "Oficial, grátis e sem essa trava: um bot criado no
próprio app do Telegram, em uns 10 minutos. Não é o WhatsApp."
- **A ferramenta:** `node ferramentas/telegram.mjs` (`conferir`, `convite`, `preparar`, `avisar [--simular]
  [--silencioso]`; o topo do arquivo diz como), sem npm. O bot "Alpha Point Avisos" foi criado pelo Lucas no
  @BotFather. A chave `TELEGRAM_BOT_TOKEN` fica no arquivo de chaves da máquina, posta por ele no Bloco de Notas, e
  nunca se imprime. O chat dele fica em `db/telegram-estado.json`, fora do git.
- **Só envia.** A única leitura foi a do `preparar`, uma vez: o chat que mandou o código do convite (de uso único,
  válido por 2 h), com a fila descartada depois. O que o Lucas escrever lá não se lê e não vale como resposta.
- **Quando o Claude central manda** (o que o Lucas pediu), curto, em português, sem jargão:
  - o que espera o Lucas: toda vez que ele for marcado em `#pendencias` no Discord, o mesmo aviso vai ao Telegram;
  - o erro que segura o vídeo e depende dele: toda vez que `#erros` levar `--marcar`;
  - o limite atingido: o teto do dia de um banco, o crédito da ElevenLabs, a cota da MapTiler.
  - Status e aprendizados ficam só no Discord. `--silencioso` manda sem som, para o que não tem pressa.
  - Se o limite de uso do Claude acabar, ou o PC estiver desligado, nada avisa: o aviso só sai com o Claude
    trabalhando.
- **O que nunca vai:** o mesmo do Discord (chave, e-mail, dado pessoal, mídia). A mesma guarda roda antes de todo
  envio. Só o Claude central manda; subagente não usa a ferramenta.
- Chave recusada (401): o Lucas pede outra ao @BotFather (`/token`) e troca a linha no Bloco de Notas. Bot bloqueado
  (403): ele toca em Reiniciar no bot, e o chat se liga de novo com `convite` e `preparar`.
- **O WhatsApp fica parado, pronto:** `ferramentas/whatsapp.mjs` (`conferir`, `modelo [--criar]`, `teste`, `avisar`)
  pela API oficial da Meta. O app "Alpha Point Avisos" e a conta do WhatsApp existem, mas a conta está travada, e as
  4 chaves (`WHATSAPP_TOKEN`, `_NUMERO_ID`, `_CONTA_ID`, `_PARA`) não estão no arquivo de chaves. Para voltar: a trava
  cair (`business.facebook.com/accountquality`, o pedido de análise é do Lucas), o usuário do sistema e a chave
  permanente, criados por ele, e o modelo do aviso mandado à Meta só com o ok dele. Número do Brasil: o
  `WHATSAPP_PARA` é o que o painel mostra em "Destinatário", porque a Meta pode guardá-lo sem o nono dígito.
