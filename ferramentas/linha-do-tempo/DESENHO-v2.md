# A linha do tempo nova (v2): o desenho

Este é o desenho da segunda versão da linha do tempo pré-render (`ferramentas/linha-do-tempo.mjs` e esta pasta). Ele não
substitui o `DESENHO.md`: o relógio, os dois palcos que se revezam, o visto, a aprovação pelo "sim" no chat, os mapas, a
legenda em português e o Tailscale continuam como lá e no `LEIA-ME.md`. O que muda é a cara da página, a marca de onde foi
cada comentário, o destaque dos consertos propostos e as chamadas na barra.

Escrito em 20/11/2026 por um subagente da Sala, só lendo: o `DESENHO.md`, o `LEIA-ME.md`, o código desta pasta, a fila do
molde (`scripts/galeria/fila.mjs`), os rascunhos (`out/_tmp/linha-do-tempo-v2/rascunhos.html`, publicados em
https://claude.ai/artifact/2HZW2BJVJX8zf3zmaeE79g) e os dados do vídeo 8 em disco. Nada foi rodado nem medido. O que
depende de medida diz "medir".

**Leia a seção 13 antes do resto.** As respostas às perguntas do construtor (20/11/2026, 14:0x) mudam o 6.1 (os blocos das
cenas), o 6.3 (N, P e os cliques), o 7.6 (a `/api/linha`), o 8 e o 10 (onde se constrói e quando se troca) e o 9.2 (o
navegador sem janela e o alvo).

---

## 1. A intenção e o porquê

O Lucas revisa cada vídeo inteiro nesta página antes do render final. À pergunta "o que mais te incomoda?", ele respondeu no
chat da Sala, em 20/11/2026: "É a cara da página mesmo e talvez a sinalização de onde foi feito o comentário e talvez
destacar o que já vem pra mim com sugestão de melhoria/conserto". Depois: "pode preparar a linha já para esse vídeo". Ele
queria rever o vídeo 8 (`australia-animais`, 65 cenas, 16:21.9) já na página nova, no computador de casa. Às 13:58, sabendo que
a construção leva horas e que ele já tinha visto da s01 à s30 na página de hoje, ele escolheu "Continuar na de hoje
(Recomendado)": o vídeo 8 se revê na página de hoje, e a nova entra na revisão dos consertos (a r2) e nos próximos vídeos
(§13.3).

Os três incômodos, lidos contra a página de hoje:

- **A cara.** Hoje é uma coluna só: o palco, uma linha de botões, a fala, uma faixa de blocos cinza, verde e laranja, e a
  lista de comentários lá embaixo. Funciona, mas não parece uma mesa de revisão, e o que pede a atenção dele se perde.
- **Onde foi o comentário.** Hoje o comentário só deixa a cena laranja na faixa e uma linha na lista ("s39 @1.4s …"). Não
  há marca no instante, na barra, nem no lugar da imagem que ele queria apontar.
- **O que já vem com sugestão.** A Sala chega à revisão do Lucas com consertos prontos: os achados que os céticos
  mantiveram na revisão de espectador e as reprovações do `qc-visual`. Hoje eles só aparecem no chat. Na página, nada.

A ideia da v2: a mesa de edição. O vídeo grande à esquerda, os consertos propostos e os comentários dele sempre à vista
à direita, e embaixo uma barra larga com as cenas e uma faixa de marcas para cada coisa (chamadas, consertos, comentários).
Ele continua assistindo ao vídeo inteiro e apertando C, porque a aprovação do render pede cada cena vista nesta versão.

---

## 2. Objetivos, não-objetivos e o que seria fracasso

### Objetivos

1. **A cara da mesa de edição** (a direção A dos rascunhos): o vídeo à esquerda, o painel à direita, a barra embaixo, no
   sistema visual dos rascunhos: fundo escuro de estúdio, âmbar para o que é dele, verde-azulado para o conserto proposto.
2. **Onde foi cada comentário**, em três lugares: um anel no instante, na faixa "Seus comentários" da barra; um anel no
   ponto da imagem, se ele clicou nela; e o cartão do comentário no painel, com um desenho 16:9 do quadro e o anel no lugar.
3. **O destaque dos consertos propostos**, também em três lugares: um losango no instante, na faixa "Consertos" da barra; o
   cartão "Aqui, agora" no painel, com o que se vê, o conserto e os botões; e, enquanto o vídeo passa pelo trecho, um selo
   sobre a imagem (e, se a Sala souber, o retângulo do lugar que o conserto mexe). Mais um número no topo: quantos esperam
   por ele.
4. **Os botões que registram**: "Concordo" e "Quero outro conserto" em cada conserto que espera resposta. O clique é
   registro. A Sala lê, junta e confirma no chat antes de mandar consertar.
5. **A tecla N** leva ao próximo ponto marcado na barra.
6. **As chamadas** (vinheta, inscrição, pergunta do fim) na barra, só como lugar e duração.
7. **Serve a qualquer vídeo.** Sem consertos, sem chamadas ou sem legenda, a página mostra o que houver, sem erro.
8. **Tudo o que existe continua**: o relógio preso à narração, o visto (90 % dos quadros), as medidas, a legenda em
   português (tecla L), o comentário (tecla C), "só o que mudou", o plano B pela URL (`?proxy=`, `?pausa=`, `?atraso=`,
   `?t=`), os mapas por proxy ou rascunho, o Tailscale só para o aparelho de casa.

### Não-objetivos

- **Miniaturas de verdade na barra.** O Lucas escolheu "Desenhos simples": blocos com o número da cena.
- **As chamadas desenhadas sobre o vídeo.** Só na barra (decisão da Sala).
- **Decidir na página.** Nenhum botão aprova cena, render ou conserto. O `aprovar` e o `conferir` não mudam.
- **A página lendo os arquivos técnicos** (`mantidos.json`, os laudos): ela lê a lista que a Sala escreve para o Lucas.
- **Editar a cena na página**, trocar o formato da fila do molde, mexer no motor, pacote npm novo, falar com a MapTiler.
- **Celular e tema claro.** A página é para o computador de casa, numa mesa escura de revisão.

### O que seria fracasso, mesmo com tudo funcionando

- **Perder a prova.** O `provar.mjs` deixa de passar, perde checagens, ou uma checagem velha muda de sentido para passar.
- **Abrir o servidor a mais arquivos ou aparelhos.** Um caminho novo na lista fechada; o `mantidos.json`, um laudo, a
  `regencia.json` ou os arquivos de consertos servidos como arquivo; ouvir fora de `127.0.0.1`; afrouxar a trava do
  Tailscale; a página baixando qualquer coisa de fora (as fontes do Google dos rascunhos, por exemplo).
- **Quebrar a legenda, o comentário ou o visto.** Mudar a conta da versão da cena faria todos os vistos que já existem no
  vídeo 8 virarem "nova versão" (o `vistos.jsonl` dele tinha 25 linhas em 20/11, à tarde: são do Lucas, a sessão do Chrome
  dele das 13:09:44, que viu de s01 a s30 entre 13:10 e 13:34). Mudar o texto do comentário de
  um jeito que o `quebrarEmMarcas` do molde leia errado. A legenda sumir ou trocar fora da voz.
- **O clique virar ordem.** A Sala mandar consertar por um clique, sem a confirmação no chat. Ou a página dizendo
  "aprovado", "feito" ou "combinado" para algo que o Lucas não decidiu no chat.
- **O Lucas ler linguagem de máquina.** Caminho de arquivo, nome de função, "lente cadencia" ou "P2" num cartão.
- **A troca atrapalhar a revisão em curso.** A página nova chegando ao servidor velho (ou o contrário) no meio do trabalho,
  com comentário ou visto perdido. Um teste da Sala gravando visto ou resposta no vídeo 8.
- **A página pesar no vídeo.** Os quadros por segundo das cenas ao vivo caindo, porque a mesa redesenha o painel ou a
  barra a cada quadro. Régua: medir a mesma cena, no mesmo PC, antes e depois; queda acima de 10 % é fracasso.
- **O conserto se perder na mesa.** Um conserto que espera o Lucas tem de estar à vista o tempo todo: no topo (o número), na
  barra (o losango) e no painel (a lista).

---

## 3. As restrições

- **As travas do servidor ficam todas**, e valem para as rotas novas: o Host (421), o `Origin` (403), o
  `application/json` (415), o token da sessão (403), o método (405), o corpo até 64 KB (413), o `X-Frame-Options` e o
  `frame-ancestors 'self'`. A trava do Host e a do Tailscale vêm antes de qualquer rota: uma rota nova herda as duas.
- **A lista fechada não ganha nenhum caminho.** O `caminhoPermitido` de `linha.mjs` fica como está. Os consertos e as
  chamadas chegam à página por rotas `/api`, que leem arquivos fixos no servidor e devolvem só os campos que a página usa.
- **O Tailscale continua só para o aparelho "lucasrosa-casa"**, do mesmo dono, com o IP e o login dele, pelo Serve em HTTP.
  Nada muda no `--tailscale`. As checagens `[remoto]` ganham a rota nova de POST.
- **O `provar.mjs` continua passando inteiro e ganha as checagens novas** (seção 9). As checagens `[legenda]` e as das
  travas continuam com o mesmo sentido: onde a v2 troca o nome de um arquivo, a checagem só troca o nome que lê.
- **A página serve a qualquer vídeo.** O Juneau (sem `_chamadas` na regência, sem consertos) tem de abrir sem erro.
- **O servidor do vídeo 8 está no ar agora e só se reinicia na troca** (seção 10). Atenção: o servidor de hoje lê o
  `pagina.html`, o `pagina.js` e o `pagina.css` do disco **a cada pedido**. Se o construtor gravar por cima desses três, o
  Lucas, ao recarregar, recebe a página nova falando com o servidor velho. Por isso a página nova nasce com outros nomes
  (seção 8), e o servidor novo passa a ler a página uma vez, na partida.
- **A conta da versão de cada cena não muda** (`versao` em `lerLinha`, o `registroAtual`, o `vistos.jsonl`): os vistos de
  antes da troca continuam valendo depois dela.
- **As rotas de hoje continuam compatíveis**: `/api/linha`, `/api/versao`, `/api/comentarios`, `/api/comentar`,
  `/api/visto` e `/api/medida` ganham campos e não perdem nenhum. Uma aba velha aberta durante a troca continua funcionando
  até recarregar.
- **O molde e o motor não se editam.** A fila de comentários continua a do molde (`out/_feedback-queue.jsonl`, pelo
  `gravarComentario`), e o sha256 do molde e do motor continua conferido na partida.
- **Nada de fora.** Sem CDN e sem Google Fonts. As fontes da marca já estão na lista fechada (`marca/fontes/`).
- **A decisão continua só no chat.** O clique é dado, não ordem. A página não tem a palavra "aprovar" no HTML (a prova
  confere isso).
- **Subagente e setor não usam navegador.** As provas no navegador são da Sala, e nunca no vídeo 8 antes da troca.

---

## 4. As abordagens

### 4.1 A cara: as três direções dos rascunhos

Nos rascunhos, as três têm os mesmos sinais (o anel âmbar do comentário, o losango verde-azulado do conserto, a barrinha de
estado da cena) e o mesmo vídeo 8 de exemplo.

- **A · Mesa de edição.** O vídeo com dois terços da largura, à esquerda; à direita, o painel com os consertos e os
  comentários; embaixo, a barra larga com as cenas e as faixas de marcas. *Ganha:* tudo o que ele pediu na mesma tela, sem
  mudar o jeito de rever (assistir inteiro e apertar C). *Custa:* o vídeo fica menor (968 px numa tela de 1440, contra 1440
  na B), e é a tela mais cheia das três.
- **B · Cinema.** O vídeo ocupa a tela; os consertos e os comentários ficam numa gaveta (tecla D) que cobre parte do vídeo.
  *Ganha:* o maior vídeo, o mais parecido com o YouTube. *Custa:* guarda numa gaveta justamente os consertos que ele quer
  ver em destaque, e a barra fica fina.
- **C · Revisão guiada.** Uma lista numerada de pontos (consertos e comentários) leva o vídeo até cada um, 3 s antes, com N
  e P. *Ganha:* responder fica rápido. *Custa:* o vídeo inteiro vira segundo plano, e ele ainda teria de assisti-lo uma vez
  para o visto; o defeito vizinho, que ninguém marcou, passa batido.

**A escolhida: a A, com a tecla N da C.** A Sala recomendou, e o Lucas escolheu "A, mesa de edição (Recomendado)". O porquê:
é a única que mostra as três coisas pedidas ao mesmo tempo sem tirar o vídeo inteiro do centro, e o vídeo inteiro é o
caminho da aprovação. Da C vem só o atalho de pular de ponto em ponto.

### 4.2 De onde a página lê os consertos

- **Ler o `mantidos.json` e os laudos direto.** Recusada. São textos para os agentes, com caminho de arquivo, código e
  medidas ("function idade(t)", "lente cadencia"); o laudo não diz o instante; e o servidor teria de abrir `_tmp/espectador-*`
  e `qc/` (a lista fechada cresceria).
- **Pôr os consertos na fila de comentários.** Recusada. A fila é do molde e é a voz do Lucas; misturar a voz da Sala nela,
  com os status de comentário, confunde as duas, e a fila vai ao git.
- **A escolhida: uma lista que a Sala escreve em português simples, conferida contra o disco.** A Sala grava
  `consertos.entrada.json`; um script (`consertos.mjs montar`) confere cada item (a cena está na linha, o instante cabe nela,
  a origem existe mesmo no `mantidos.json` ou no laudo) e só então grava `consertos.json`, que o servidor lê. É o mesmo
  desenho da legenda em português (`legenda-pt.traducao.json` → `montar` → `legenda-pt.json`), que já deu certo.

### 4.3 Onde guardar o clique

- **Na fila, como comentário.** Recusada: o tipo `aprovacao` do molde nasce com status "aprovada", o sentido errado.
- **A escolhida: um arquivo próprio, só de acréscimo**, `out/<proj>/_tmp/linha-do-tempo/respostas.jsonl`, como os vistos.
  Fica fora do git: o registro formal da decisão continua sendo o chat e o `roteiros/<proj>/decisoes-lucas.md`.

### 4.4 Onde guardar o ponto da imagem

- **Num arquivo à parte, ligado ao id da fila.** Recusada: dois lugares para o mesmo comentário.
- **A escolhida: no colchete do próprio texto do comentário**, onde hoje já vão o instante no vídeo e a versão
  (`[vídeo 07:19.1 · versão 09f1808a · ponto x=50% y=50%]`). A fila não muda de formato, a Sala lê o ponto no `--fila`, e o
  ponto vai ao git com o comentário.

---

## 5. As partes decididas

**Pelo Lucas**, em 20/11/2026, às 13:38, aos rascunhos, e às 13:58, sobre quando usar a página nova (gravados nas duas
últimas linhas de `roteiros/australia-animais/decisoes-lucas.md`):

- **"A, mesa de edição (Recomendado)".** A opção dizia: "Vídeo grande à esquerda; à direita, os consertos propostos e os
  seus comentários; embaixo, a barra com as cenas e as marcas dos consertos e dos comentários. Eu somo a tecla N da C, para
  pular de um ponto marcado ao próximo."
- **"Botões que registram (Recomendado)".** A opção dizia: "Você clica na página; eu leio, junto tudo e te confirmo no chat
  antes de mandar consertar. Menos digitação para você." A regra de hoje continua: decisão só no chat.
- **"Desenhos simples".** A opção dizia: "A barra mostra só blocos coloridos com o número da cena." (A outra era a miniatura
  de verdade, com uma foto de cada cena a cada versão.)
- **"Continuar na de hoje (Recomendado)"** (13:58). A opção dizia: "Você termina o vídeo 8 na página de hoje, que já tem a
  legenda; o que você viu continua valendo. Eu te mostro aqui no chat a lista dos consertos propostos. A nova eu construo em
  paralelo, e ela entra na revisão dos consertos e nos próximos vídeos."
- E, antes: o vídeo 8 revisto "Antes dos consertos (Recomendado)" e "No PC de casa (Recomendado)", com os comentários dele
  entrando no mesmo lote dos consertos.

**Pela Sala:**

- **As chamadas** (a vinheta, a inscrição e o pedido de comentário) aparecem na barra só como lugar e duração. Nada sobre o
  vídeo.
- **Os consertos propostos** vêm do que já existe em disco por vídeo (os mantidos da revisão de espectador e os laudos do
  `qc-visual`) e do que a Sala decidir, numa lista que a Sala grava.

**Das decisões antigas, que não se reabrem:** "Neste PC (Recomendado)" e "Sim, antes do render (Recomendado)" (02/10); o
Tailscale "Só o meu aparelho (Recomendado)", aparelho "lucasrosa-casa" (16/10); a legenda "Sobre o vídeo (Recomendado)"
(22/10).

---

## 6. O que a página nova faz, pedido por pedido

### 6.1 A cara

**A tela**, de cima para baixo (o desenho de referência é a aba A dos rascunhos):

- **O topo** (uma faixa de 48 px): "Linha do tempo", o projeto (`australia-animais`) e quatro números em pílulas: as cenas e a
  duração; "N de M vistas nesta versão"; o anel âmbar com "X comentários abertos"; o losango verde-azulado com "Y consertos
  esperam você". À direita, "só o que mudou" (o filtro de hoje).
- **À esquerda, o vídeo**, o maior que couber na coluna e na altura da janela, com a legenda em português por cima, como hoje.
  Embaixo dele, os controles: tocar ou pausar, o relógio, a cena e o segundo dentro dela, "Próximo ponto (N)", "Legenda PT",
  "Comentar aqui (C)" (o botão de destaque, em âmbar) e a tela cheia (F). Embaixo, a fala em inglês com a palavra acesa.
- **À direita, o painel**, com duas abas: "Consertos propostos (n)" e "Seus comentários (n)" (6.2 e 6.3).
- **Embaixo, a barra**, na largura toda, com os nomes das faixas à esquerda: "Chamadas" (só se o vídeo tiver), "Consertos",
  "Seus comentários", "Cenas" e a régua dos minutos. A agulha atravessa todas as faixas, com o tempo escrito em cima.
- **No pé**, a legenda dos estados e os atalhos: Espaço, ← →, C, L, N, P, F.

**As cores e as letras** são as dos rascunhos: o chão quase preto azulado, a tinta clara, o âmbar (`#F5A524`) para o que é
dele, o verde-azulado (`#2EC4B6`) para o conserto, o verde (`#52B07F`) para "vista", o vermelho (`#E4572E`) para "não abriu",
o cinza para "fica como está". As letras são as da marca, servidas pelo próprio servidor: a Inter
(`/marca/fontes/inter/Inter-VF.ttf`) no texto e a Barlow Condensed (`/marca/fontes/barlowcondensed/BarlowCondensed-ExtraBold.ttf`)
nos títulos e números grandes. A página declara as faces com nomes próprios dela (não "Marca": as cenas são outro documento,
mas nomes diferentes evitam confusão na leitura).

**Os blocos das cenas** ("Desenhos simples"; **mudou: o corpo é o desenho do tipo e o estado vai numa tira, §13.7**): um
bloco por cena, da largura da duração, pintado pelo estado, como hoje:
cinza (não vista nesta versão), verde (vista), âmbar (comentário aberto), listrado (mapa sem satélite), vermelho (não abriu).
O ponto branco no canto é "nova versão para ver"; o contorno claro marca a cena do momento. Dentro do bloco, o número da cena
quando cabe ("s39"; mais estreito, "39"; mais estreito ainda, nada, e o número fica no texto que aparece ao passar o mouse).
Com "só o que mudou", o que não pede olho fica apagado, como hoje.

**As chamadas** ficam na faixa de cima: uma barrinha clara do início ao fim de cada uma, com o nome ao lado ("Vinheta",
"Inscrição", "Pergunta"). No vídeo 8: a vinheta em 0:49.8 (4,7 s), a inscrição em 7:32.8 (4,5 s) e a pergunta em 15:46.7
(6 s). Elas vêm de `out/<proj>/regencia.json › _chamadas` (`peca`, `inSec`, `dur`), o mesmo lugar de onde o
`ferramentas/xml-chamadas.py` as põe no XML; a barra usa o mesmo quadro de início, `round(inSec × 30)`. Vídeo sem `_chamadas`
(o Juneau, por exemplo) não mostra a faixa.

**O tamanho.** Numa tela de 1920 × 1080, o vídeo fica perto de 1280 × 720; numa de 1440 × 900, perto de 968 × 544 (medir).
O painel rola por dentro. Abaixo de uns 1100 px de largura, o painel desce para baixo do vídeo. F põe o palco (o vídeo, a
legenda e as marcas da imagem) em tela cheia.

**O que não muda na tela:** o aviso embaixo do vídeo ("carregando a próxima cena…", o erro da cena), o selo do mapa em
rascunho, a legenda em português (o mesmo elemento, o mesmo relógio, o mesmo tamanho calculado pelo palco).

### 6.2 Onde foi o comentário

**Comentar** continua com C, ou com "Comentar aqui": pausa e abre a caixa com a cena e o instante. O que muda:

- **A caixa abre no painel, ao lado do vídeo, sem cobrir nada** (um `<dialog>` aberto sem bloquear a página, em vez do de
  hoje, que escurece tudo). Assim ele pode clicar na imagem com a caixa aberta.
- **Clicar na imagem** pausa (se estiver tocando), abre a caixa (se estiver fechada) e põe um anel âmbar no ponto do clique.
  Outro clique muda o anel de lugar; clicar no anel o tira. A caixa diz "Você clicou na imagem: o anel marca o lugar" ou
  "Se quiser, clique na imagem para marcar o lugar".
- **O ponto** é a posição do clique no quadro 16:9, em porcentagem inteira da largura e da altura (0 a 100). Funciona igual
  na cena ao vivo e no proxy de mapa, porque o clique é no palco (o iframe já não recebe clique: `pointer-events: none`).
- Enter envia; Shift+Enter quebra a linha; Esc fecha sem enviar.

**Depois de enviado, o comentário aparece:**

- **Na barra**, na faixa "Seus comentários": um anel âmbar no instante do vídeo, com um traço fino descendo até o bloco da
  cena. Com ponto na imagem, o anel tem o miolo cheio. Comentário resolvido fica com o anel apagado. Anéis a menos de 10 px um
  do outro viram um só, com o número de quantos são.
- **Na imagem**, quando o vídeo passa pelo instante (de 1 s antes a 3 s depois, dentro da mesma cena) ou quando ele vai até o
  comentário: o anel no ponto, com "Seu comentário · 7:19.1".
- **No painel**, aba "Seus comentários", na ordem do vídeo: um cartão com um desenho 16:9 do quadro (um retângulo escuro com
  uma grade leve) e o anel no ponto, ou "sem clique na imagem"; o texto dele, sem o colchete técnico; a cena e o instante; o
  estado ("aberto", "o Claude está vendo", "resolvido", "fica como está") e a nota do Claude ("Claude: …"), como hoje.
- Clicar no anel da barra ou no cartão leva o vídeo até lá (6.3, "Andar de ponto em ponto").

O bloco da cena continua âmbar enquanto houver comentário aberto, como hoje.

### 6.3 O destaque dos consertos propostos

**Cada conserto** que a Sala pôs na lista tem: a cena e o instante (e, se a Sala souber, o fim do trecho); uma frase curta;
"O que se vê" (o defeito, em palavras dele); "O conserto" (o que muda); de onde veio, em palavras simples ("da revisão de
qualidade", "da revisão de espectador", "das duas", "da Sala", "de um comentário seu"); e o estado:

| Estado (na lista da Sala) | O que a página mostra | Os botões |
|---|---|---|
| `responder` | "espera você" | "Concordo", "Quero outro conserto", "Ver de novo, 3 s antes" |
| `combinado` | "combinado", com a frase da Sala ("Você confirmou no chat em 20/11: …") | só "Ver de novo" |
| `feito` | "refeito: veja de novo", com a frase da Sala | só "Ver de novo" |
| `fica` | "fica como está", com a frase da Sala ("Você decidiu em 20/11: fica como está.") | só "Ver de novo" |

**Onde ele os vê:**

- **No topo:** "Y consertos esperam você" (os `responder` ainda sem resposta dele).
- **Na barra**, faixa "Consertos": um losango no instante. Cheio em verde-azulado: espera você. Vazado em verde-azulado:
  combinado ou refeito. Vazado em cinza: fica como está. Losangos a menos de 10 px viram um só, com o número; o estado
  mostrado é o que mais pede (espera você > combinado > fica). Um traço fino desce até o bloco da cena.
- **No painel**, aba "Consertos propostos": em cima, "Aqui, agora", o cartão do conserto do trecho em que o vídeo está, com
  tudo (o que se vê, o conserto, a origem, as escolhas, os botões) e, logo embaixo, os comentários dele a até 3 s dali na
  mesma cena. Fora de qualquer trecho, "Nada proposto neste trecho. O próximo: s63 · 12:59.5 (N)". Embaixo, a lista de todos,
  na ordem do vídeo, uma linha por conserto (o losango, o tempo, a cena, a frase curta, o estado), com "N esperam você".
- **Sobre a imagem**, enquanto o vídeo está no trecho (de 0,5 s antes do instante até o fim que a Sala deu, ou 4 s depois):
  o selo "Conserto proposto aqui · s39 · 7:19.1 · detalhes ao lado", em cima, à esquerda. Se a Sala deu o lugar na imagem, um
  retângulo tracejado verde-azulado com "o conserto mexe aqui". O selo do mapa em rascunho, quando houver, fica embaixo dele.

**Os botões que registram:**

- **"Concordo"** grava a resposta e fica marcado. Embaixo: "Registrado. A Sala confirma com você no chat antes de mandar
  consertar." Se o conserto tem escolhas (no vídeo 8, o instante do crédito da s67), elas aparecem como opções, já na
  sugerida, e a escolhida vai junto.
- **"Quero outro conserto"** grava a resposta e abre a caixa de comentário já no instante do conserto, com o título "O que
  você prefere? (opcional)". O que ele escrever vai à fila de comentários como qualquer comentário, ligado ao conserto. Fechar
  a caixa sem escrever não desfaz a resposta.
- **Clicar de novo no botão marcado** retira a resposta (volta a "espera você").
- A resposta vale para o texto que ele viu. Se a Sala mudar o texto do conserto depois, a resposta cai, e o cartão diz "o
  conserto mudou depois da sua resposta: responda de novo".
- O clique não muda o estado do conserto. Quem muda para "combinado", "feito" ou "fica" é a Sala, na lista dela, depois do
  chat.

**Andar de ponto em ponto:**

- **N** leva ao próximo ponto marcado na barra (conserto de qualquer estado ou comentário), na ordem do vídeo, a partir da
  agulha; **P**, ao anterior. "Próximo ponto (N)" faz o mesmo que N.
- Ir a um ponto (N, P, clicar num losango ou num anel da barra, numa linha da lista ou num cartão, "Ver de novo") sempre faz a
  mesma coisa: põe o vídeo 3 s antes do ponto (nunca antes de 0) e toca. O cartão "Aqui, agora" passa a ser o desse ponto.
- Depois do último ponto, N avisa "Não há mais pontos daqui em diante" e não anda.
- Com "só o que mudou" ligado, o filtro não tira o vídeo da cena para onde ele acabou de ir: ele só pula as cenas seguintes.

### 6.4 O que continua igual

O relógio, a preparação das cenas, os dois palcos, o vídeo pelo setter de `currentTime`, o plano B, o visto e as recusas dele,
as medidas (a linha `tipo: "sessao"` ganha `pagina: "mesa"`, para separar as sessões da v2), a pergunta da versão a cada 2 s,
a recarga sozinha da cena que mudou, a legenda em português inteira (o código dela se copia como está), Espaço, ← →, C e L.

---

## 7. Os dados: o que a página lê e o que grava

Todos os arquivos novos ficam em `out/<proj>/_tmp/linha-do-tempo/`, fora do git, e **nenhum é servido como arquivo**.

### 7.1 A lista da Sala: `consertos.entrada.json`

A Sala escreve, em UTF-8, a partir do `mantidos.json` da revisão de espectador, dos laudos do `qc-visual` e das decisões dela e
do Lucas. É texto para o Lucas: português simples, frases curtas, sem caminho, sem código, sem jargão de agente.

```
{ "proj": "australia-animais", "formato": 1,
  "consertos": [
    { "id": "c01",                    // [a-z0-9-], até 24, único na lista
      "cena": "s16", "t": 5.067,       // a cena da linha e o segundo dentro dela (0 ≤ t < duração da cena)
      "ate": 12.333,                   // opcional: o fim do trecho, t < ate ≤ duração da cena
      "estado": "responder",           // responder | combinado | feito | fica
      "curto": "A foto da aranha fica parada 7 s",            // até 70 caracteres
      "problema": "A foto da aranha fica parada na mesa por 7 segundos, sem nada se mexer.",   // "O que se vê", até 400
      "conserto": "A câmera da mesa chega devagar até a aranha durante esses 7 segundos.",     // até 400; obrigatório, menos em "fica"
      "escolhas": [ { "id": "a", "texto": "Em 4,3 s, junto de “HE HAS WONDERED”", "sugerida": true },
                    { "id": "b", "texto": "Em 2,3 s, junto do cartão" } ],                      // opcional: 2 a 4, uma sugerida
      "decisao": "Você decidiu em 20/11: fica como está.",   // obrigatório em combinado, feito e fica; até 200
      "area": { "x": 4.4, "y": 85.9, "w": 30.8, "h": 4.2 }, // opcional: o lugar na imagem, em % do quadro
      "origem": [ { "de": "espectador", "arquivo": "out/australia-animais/_tmp/espectador-r1/mantidos.json", "indice": 0 },
                  { "de": "qc", "cena": "s16", "lente": "cadencia" },
                  { "de": "comentario", "id": "<id da fila>" },
                  { "de": "sala", "nota": "…" } ] } ] }
```

### 7.2 A conferência: `consertos.mjs montar <proj>`

Lê a entrada e o projeto, confere **tudo**, e só se tudo passar grava `consertos.json` (por arquivo temporário e renomeação,
como a legenda). Recusa, com o item e o motivo, sem tocar o montado:

- o `proj` de outro projeto; `id` repetido ou fora do padrão; cena fora da linha; `t` ou `ate` fora da cena; estado
  desconhecido;
- texto vazio, longo demais, com quebra de linha ou caractere de controle (as mesmas regras de texto da legenda);
- `conserto` faltando em `responder`, `combinado` ou `feito`; `decisao` faltando em `combinado`, `feito` ou `fica`;
- escolhas fora de 2 a 4, com id repetido, ou sem exatamente uma sugerida; `area` fora de 0 a 100;
- conserto sem origem, ou com origem que o disco não confirma:
  - `espectador`: o arquivo tem de casar com `out/<proj>/_tmp/espectador-<rodada>/mantidos.json` (nada de `..`), e o item
    do índice tem de existir, com `mantido: true` e a mesma cena;
  - `qc`: `out/<proj>/qc/<cena>.laudo.json` tem de existir, com aquela lente e algum problema ou correção nela;
  - `comentario`: o id tem de estar na fila, do mesmo projeto;
  - `sala`: a nota não pode ser vazia.

O montado leva o que a página usa, mais `montado_em`, o `entrada_sha256` e, em cada item, o `texto_sha`: os 16 primeiros do
sha256 da frase curta, do problema, do conserto e das escolhas. Saídas: 0 gravado; 1 problemas, nada gravado; 2 uso errado.

`consertos.mjs conferir <proj>` só lê: 0 em dia; 1 se a entrada mudou depois do montar, se uma cena saiu da linha ou se uma
origem deixou de existir (e diz qual); 2 uso errado.

### 7.3 O que o servidor entrega: `GET /api/consertos`

`{ estado: "em-dia" | "sem", itens: [...] }`. Cada item traz os campos do montado, mais o instante no vídeo (calculado na hora
pela linha de agora, nunca guardado) e a resposta dele que vale (a última, se o `texto_sha` dela é o de agora; senão nenhuma, e
`respostaVelha: true`). A origem vai como rótulo simples ("qc", "espectador", "comentario", "sala"), sem o caminho. Item de cena
que saiu da linha não vai. Sem montado, ou montado ilegível ou de outro projeto: `estado: "sem"`, sem erro 500.

### 7.4 O clique: `POST /api/responder` e `respostas.jsonl`

O corpo: `{ id, resposta: "concordo" | "outro" | "retirar", escolha?, texto_sha }`. O servidor recusa: id fora da lista (404);
resposta fora das três (400); escolha que falta, sobra ou não existe (400); conserto que não está em `responder` (422, "este
conserto já foi decidido no chat"); `texto_sha` diferente do de agora (409, "o conserto mudou: a página se atualiza"). Com
tudo certo, acrescenta uma linha:

```
{ "proj", "id", "resposta", "escolha", "texto_sha", "cena", "quando", "via": "local" | "tailscale" }
```

O `via` diz se o clique veio deste PC ou do aparelho de casa: um teste da Sala, feito aqui, não se confunde com o Lucas. O
servidor escreve uma linha no console a cada resposta, como já faz com o comentário, para a Sala ver no log.

### 7.5 O comentário com ponto: `POST /api/comentar`

Ganha dois campos opcionais: `ponto: {x, y}` (números de 0 a 100, que viram inteiros) e `sobre` (o id de um conserto da
lista montada). Fora disso, 400. Os dois entram no colchete do fim do texto, depois do que já vai lá:

```
@1.4s O pontinho quase não aparece [vídeo 07:19.1 · versão 09f1808a · ponto x=50% y=50% · sobre o conserto c03]
```

Sem ponto e sem `sobre`, o texto sai **byte a byte igual ao de hoje**. O colchete não leva "@", para o `quebrarEmMarcas` do
molde não ver marca nova nele.

`GET /api/comentarios` ganha, por item, o que o servidor lê desse colchete (`tVideo`, `versao`, `ponto`, `sobre`) e o texto
limpo, sem o colchete, para o cartão. Se o Lucas escreveu "@3s" no meio (duas marcas), o colchete está no campo `comentario`
de todas as linhas do grupo: o servidor o lê dali.

### 7.6 As chamadas: na `/api/linha`

`chamadas: [{ peca, nome, ini, n }]`, em quadros, lidas no servidor de `out/<proj>/regencia.json › _chamadas` (só `peca`,
`inSec` e `dur`; o resto da regência não sai). `nome`: vinheta → "Vinheta", inscricao → "Inscrição", comentario → "Pergunta",
outra → a própria `peca`. Chamada fora da narração ou com número torto fica de fora. Sem regência, sem `_chamadas` ou regência
ilegível: lista vazia, sem erro. O servidor guarda a leitura pelo tamanho e pela data do arquivo (a pergunta da versão vem a
cada 2 s).

---

## 8. O que muda em cada arquivo

| Arquivo | O que muda |
|---|---|
| `mesa.html` (novo; substitui `pagina.html`) | A estrutura da seção 6: o topo, a coluna do vídeo, o painel, a barra, o pé. Ficam os ids que a legenda e a prova usam: `palco`, `slotA`, `slotB`, `legendaPt` (dentro do palco, depois de `slotB`, antes de `controles`), `selo`, `aviso`, `controles`, `legendaBtn` (com o texto exato "Legenda PT"; a dica da tecla L vai fora do texto do botão), `faixa` (com `blocos` e `agulha`), `soMudou`, `caixa`, `formComentario`, `texto`, `narracao`. Uma camada nova dentro do palco para o anel, o retângulo e o selo do conserto. Os marcadores `__TOKEN__` e `__PROJ__`. Nenhuma ocorrência da palavra "aprovar". |
| `mesa.css` (novo; substitui `pagina.css`) | O sistema visual dos rascunhos (as cores da seção 6.1 como variáveis no `:root`), as faces das fontes por `/marca/fontes/…`, a grade da mesa e a regra de empilhar abaixo de ~1100 px, a barra e as faixas, os losangos e os anéis por estado, os cartões, os botões e as pílulas. As regras da legenda em português (`#legendaPt`) ficam como estão hoje. Nenhum endereço de fora. |
| `mesa.js` (novo; substitui `pagina.js`) | Parte do `pagina.js` sem mudar uma linha: o relógio, os palcos, a preparação, o setter do vídeo, as medidas, o visto e a legenda (as funções que a prova extrai continuam com o mesmo nome, a mesma assinatura e o mesmo recuo de 2 espaços dentro da função de fora). Muda: o desenho da barra (blocos e faixas de marcas, refeitos só quando os dados mudam); o `atualizarUI` (a agulha anda a cada quadro, mas o "Aqui, agora", o anel e o selo só se redesenham quando o ponto do momento muda); os comentários (cartões, anéis, a caixa sem bloquear, o clique na imagem); os consertos (pede `/api/consertos` a cada 4 s, como os comentários, e só redesenha se a resposta mudou); os botões; N, P e F no mesmo tratador de teclas, depois do filtro de hoje (caixa aberta, foco em campo de texto). Funções puras, com estes nomes, para a prova testar fora do navegador: `agruparMarcas`, `marcaSeguinte`, `pontoDoClique`, `consertoAqui`. Todo texto que vem do servidor entra por `textContent` ou pelo `esc()`. O `localStorage` continua só o da legenda. |
| `pagina.html`, `pagina.css`, `pagina.js` | Ficam intocados até a troca (o servidor de hoje os lê a cada pedido). Saem no commit da v2, depois da troca (seção 10); o git os guarda. **Mudou (§13.1):** toda a v1 fica intocada até a troca, e esta tabela vale para a cópia em `ferramentas/linha-do-tempo-v2/`. |
| `servidor.mjs` | Lê `mesa.html`, `mesa.js` e `mesa.css` **uma vez**, ao criar o servidor (mudar a página passa a pedir reinício; nunca mais um arquivo editado chega a um servidor no ar). Serve `/lt/mesa.js` e `/lt/mesa.css`; `/lt/pagina.*` passa a dar 404. Rotas novas: `GET /api/consertos` e `POST /api/responder` (no mesmo bloco de travas do POST de hoje). `POST /api/comentar` repassa `ponto` e `sobre`. `paraPagina` ganha `chamadas`. Uma linha de log por resposta. O cabeçalho do arquivo lista as rotas novas. A lista fechada não muda. |
| `linha.mjs` | `textoDoComentario` ganha `ponto` e `sobre` (no colchete, na ordem da seção 7.5; sem eles, o texto de hoje). `registrarComentario` confere os dois. `comentariosDoProjeto` devolve o que leu do colchete, por uma função pura nova, `lerColchete(texto)`. Função nova `chamadasDoProjeto(raiz, proj, totalQuadros)`. **Não mudam:** `caminhoPermitido`, `PASTAS_MIDIA`, a `versao` da cena, `registrarVisto`, `estadoDoProjeto`, `aprovar`, `conferir`, a conferência do motor e do molde. |
| `consertos.mjs` (novo) | Como o `legenda.mjs`: a linha de comando (`montar`, `conferir`, `respostas`) e as funções que o servidor usa (`consertosDoProjeto`, `registrarResposta`). O formato da seção 7 no topo do arquivo, com o pedido do Lucas citado. Lê o montado e as respostas com `readFileSync`, guardados pelo tamanho e pela data (nada de arquivo aberto por stream: no Windows, o `montar` renomeia por cima). O `respostas <proj>` imprime, por conserto, a resposta dele que vale, as que caíram porque o texto mudou, os comentários ligados (`sobre`), e uma frase pronta para a Sala adaptar no chat, por exemplo: "Na linha do tempo você marcou Concordo em 5 consertos (s16, s22, s39, s63 e s67, com o crédito em 4,3 s) e Quero outro conserto em 1 (s65; você escreveu: "…"). Mando consertar os 5 como estão?". |
| `linha-do-tempo.mjs` | O `estado` ganha uma linha: quantos consertos, quantos esperam o Lucas, quantas respostas dele esperam a confirmação no chat (e "rode `consertos.mjs respostas`"), e o aviso dos `combinado` ainda não marcados como `feito`. O `servir` imprime na partida se a legenda está em dia, quantos consertos e quantas chamadas carregou. O `USO` cita o `consertos.mjs`. Os verbos e as saídas não mudam. |
| `legenda.mjs`, `mapa.mjs` | Nada. (O `consertos.mjs` tem as próprias regras de texto, iguais às da legenda, em vez de importar as dela: a legenda provada fica intocada.) |
| `provar.mjs` | A seção 9 deste desenho. As checagens que leem `pagina.*` passam a ler `mesa.*`, com o mesmo sentido. |
| `LEIA-ME.md` | Como usar a v2: a mesa, os consertos (o `montar`, o `conferir`, o `respostas`), os botões, o ponto na imagem, as chamadas, o que a página grava (`respostas.jsonl`), as rotas novas em "A segurança", "mudar a página pede reiniciar o servidor", e o que está provado e o que não está. |
| `DESENHO.md` | Na lista das decisões do Lucas, um item que aponta para este arquivo, como o da legenda. |
| `.claude/launch.json` | Nada: `linha-do-tempo-australia-animais-casa` já existe. |
| `sala/linha-do-tempo.md` | (Da Sala, no commit.) O fluxo ganha: a lista de consertos montada antes do aviso ao Lucas; durante a revisão, o log; ao fim, o `respostas` e o `--fila`, a confirmação no chat, a lista atualizada. |

---

## 9. A prova

### 9.1 No `provar.mjs` (sem navegador)

Antes de mexer, o construtor roda o `provar.mjs` e anota quantas checagens passam hoje (eram 309 de 309 em 22/10/2026). No
fim, todas essas passam, e as novas, marcadas `[v2]`, também. Como hoje, tudo o que escreve vai para a cópia do Juneau
(`out/juneau/_tmp/linha-do-tempo/prova-raiz/`), e a guarda do fim confere que o projeto de verdade não mudou: a fila,
`qc/`, `graphics/`, os vistos, as medidas, e agora também nenhum `consertos*.json` nem `respostas.jsonl` de projeto real.

As checagens novas:

- **A lista fechada não cresceu.** `caminhoPermitido` recusa, e o servidor dá 404 (ou 403 na travessia) para:
  `consertos.json`, `consertos.entrada.json`, `respostas.jsonl` (também em maiúsculas), `out/<p>/regencia.json`,
  `out/<p>/_tmp/espectador-r1/mantidos.json`, `out/<p>/qc/s01.laudo.json`, e as mesmas por `%2e%2e` e `%5c`.
- **A versão das cenas não mudou.** Uma assinatura de todas as `versao` do Juneau real, anotada pelo construtor antes de
  mexer e escrita como constante na prova, continua igual.
- **As chamadas.** Com uma `regencia.json` de mentira na cópia: `/api/linha` traz as chamadas, com `ini = round(inSec × 30)` e
  os nomes certos. Sem regência, sem `_chamadas` e com regência ilegível: lista vazia e status 200.
- **O `montar`.** A entrada válida sai 0 e grava. Cada caso da seção 7.2 sai 1, diz o item e o motivo, e não toca o montado
  (o mesmo retrato de bytes de antes). O `conferir` sai 0 em dia, 1 depois de a entrada mudar, 1 com uma cena fora da linha.
- **A `/api/consertos`.** "sem" sem montado, com montado ilegível e com montado de outro projeto; "em-dia" com os itens na
  ordem do vídeo e o instante calculado pela linha.
- **O `/api/responder`.** As travas (sem token, outro Origin, `text/plain`, corpo acima de 64 KB, GET); cada recusa da
  seção 7.4 com o status certo; a resposta válida acrescenta uma linha (e só uma) no `respostas.jsonl` da cópia, com
  `via: "local"`; vale a última; "retirar" volta a nenhuma; depois de a entrada mudar o texto e o `montar` rodar, a resposta
  antiga aparece como `respostaVelha`, e o `responder` com o `texto_sha` velho dá 409.
- **O `respostas`.** Imprime as que valem, separa as que caíram, sai 0.
- **O comentário.** Sem ponto e sem `sobre`: o texto na fila da cópia é byte a byte o de hoje (a mesma entrada, o mesmo
  texto esperado, escrito na prova). Com ponto: o colchete leva "ponto x=58% y=44%", e o `quebrarEmMarcas` ainda dá uma marca
  só, com o mesmo `t`. Ponto fora de 0 a 100, ou que não é número: 400. `sobre` desconhecido: 400. `/api/comentarios` devolve
  `ponto`, `sobre` e o texto limpo. `lerColchete` com casos tortos (colchete escrito pelo Lucas no meio, sem colchete, colchete
  pela metade).
- **O `[remoto]`.** O `POST /api/responder` do aparelho, com o IP e o login dele, passa e grava `via: "tailscale"`; com outro
  IP, 403; com o Host do tailnet e sem a opção, 421.
- **A página, fora do navegador** (com o código do próprio `mesa.js`, num `vm`, como a legenda já se prova):
  `agruparMarcas` (junta abaixo de 10 px, mantém a ordem, o estado do grupo é o que mais pede), `marcaSeguinte` (N e P a
  partir de um instante, empate, nenhum depois do último), `pontoDoClique` (os cantos dão 0 e 100, o arredondamento),
  `consertoAqui` (a janela de 0,5 s antes até `ate` ou 4 s depois, nunca fora da cena).
- **A página, pelo texto.** Nenhum endereço de fora no `mesa.*`; nenhum "aprovar" no `mesa.html`; as faces de fonte apontam
  para `/marca/fontes/`; o `localStorage` continua com 2 usos, os da legenda; toda montagem de cartão com texto do servidor
  passa pelo `esc(`; as checagens `[legenda]` de hoje passam lendo `mesa.*`.
- **O servidor lê a página uma vez.** Com o servidor de prova no ar, mudar o `mesa.js` no disco não muda o que o
  `/lt/mesa.js` entrega (a prova faz isso numa cópia da pasta do código, nunca na de verdade). `/lt/pagina.js` dá 404.

### 9.2 O que só o navegador prova (a Sala, no painel do app)

Num servidor à parte, na porta 8791, com um vídeo já publicado (o `rio-columbia` ou o Juneau) e uma lista de consertos de
teste no `_tmp` dele. Nunca no vídeo 8 antes da troca. Ao fim, os arquivos de teste desse vídeo (`vistos.jsonl`,
`medidas.jsonl`, `respostas.jsonl`, `consertos*.json`) se renomeiam para `*.teste-claude-<data>` (nunca se apagam), e o
`estado` dele volta a mostrar as vistas de antes, como manda o `LEIA-ME.md`.

- a mesa em 1920 × 1080 e em 1440 × 900, e empilhada abaixo de ~1100 px;
- os quadros por segundo de duas cenas ao vivo, contra os da v1 nas mesmas cenas (a régua da seção 2);
- a agulha, o "Aqui, agora", o selo e o anel trocando com o vídeo tocando;
- o clique na imagem com a caixa fechada e com ela aberta; N, P, F, C, L, Espaço;
- os botões, a resposta caindo quando o texto muda, a caixa do "Quero outro conserto";
- a legenda desenhada como antes;
- nenhum pedido para fora de 127.0.0.1 no painel de rede, e as fontes vindo de `/marca/fontes/`.

---

## 10. A troca no vídeo 8

**Mudou (§13.1 e §13.3):** a v2 se constrói numa pasta irmã, sem tocar a v1, e a troca é uma só, depois de o Lucas terminar a
revisão do vídeo 8 na página de hoje e antes da r2. Os passos abaixo continuam, com a lista de consertos da r2.

O servidor do vídeo 8 está no ar (a configuração `linha-do-tempo-australia-animais-casa`, porta 8790, com o Tailscale Serve
apontando para `127.0.0.1:8790`). Ele só se reinicia aqui, e quem faz é a Sala.

**Durante a construção**, o construtor não toca o servidor no ar nem o Tailscale; não roda `servir australia-animais`; não
grava `pagina.*`; não para nenhum processo pelo nome; e não escreve nada em `out/australia-animais/`. O `servidor.mjs` e o
`linha.mjs` podem mudar no disco: o processo no ar já os carregou e não os relê.

**A troca, pela Sala:**

1. O `provar.mjs` passa inteiro; um revisor independente leu o código e a prova; a seção 9.2 passou.
2. A Sala escreve `out/australia-animais/_tmp/linha-do-tempo/consertos.entrada.json` em português simples, a partir do
   `mantidos.json` (9 mantidos), dos 3 laudos reprovados (s16 cadência, s51 cobertura, s67 fonte) e de
   `decisoes-lucas.md`. Pelos rascunhos, são 10 consertos: s16, s22 (dois mantidos, uma marca), s39, s51 (`combinado`: a
   caixa-medusa da universidade, recortada e ampliada, 20/11), s53 e s69 (`fica`: as emendas do satélite, "Aceitar como está",
   20/11), s63, s65, s67 (o crédito, com as duas escolhas de instante) e s67 (o papel em branco). Os textos dos rascunhos
   servem de primeiro rascunho, conferidos contra a fonte. Roda `consertos.mjs montar australia-animais` (0) e `conferir` (0).
3. Anota o `estado australia-animais` (as vistas desta versão): é o "antes".
4. Para o servidor de hoje pelo id dele (`preview_stop`) e sobe a mesma configuração (`preview_start`
   `linha-do-tempo-australia-animais-casa`). O Serve do Tailscale não muda (ele aponta para a porta, que é a mesma). Confere
   as linhas da partida: legenda em dia, 10 consertos, 3 chamadas.
5. Roda o `estado` de novo: as vistas são as mesmas do "antes".
6. Abre a página do vídeo 8 no painel do app **sem tocar e sem clicar em botão** (sem tocar, não há visto; sem clique, não há
   resposta): o painel com os 10, a barra com as 3 chamadas, a legenda ligada.
7. Avisa o Lucas no chat: o endereço é o mesmo, é só recarregar.
8. Depois que a primeira sessão dele funcionar: o commit da v2, com a saída dos `pagina.*`, o `LEIA-ME.md` e o
   `sala/linha-do-tempo.md`. E o aprendizado "o servidor lia a página do disco a cada pedido" vai à
   `registrar-aprendizado-como-skill`.

**Se der errado depois da troca:** a Sala para o servidor novo, guarda o trabalho da v2 (pelas regras de git dela), põe de volta
os arquivos da v1 e sobe de novo. Os vistos, a fila e a legenda continuam valendo, porque nenhum formato deles mudou.

---

## 11. O que fica para o construtor

- Os tamanhos, os espaçamentos e os tons finos dentro da paleta da seção 6.1, conferidos contra a aba A dos rascunhos.
- A divisão do `mesa.js` em partes e os nomes internos, fora das funções que a prova extrai e das quatro funções puras da
  seção 8.
- O texto exato dos rótulos pequenos (em português simples, sem jargão), dos avisos e das mensagens de erro.
- O cache das leituras no servidor (a regência, o montado, as respostas), sempre pelo tamanho e pela data do arquivo.
- O estado de carregando e de erro do painel ("não consegui ler os consertos; tento de novo").
- O relato, com o antes e o depois do `provar.mjs`, os quadros por segundo que a Sala mediu, o que ficou não provado, e as
  quatro linhas de cada erro resolvido (o regimento).
- Não decide sozinho, e pergunta à Sala: qualquer caminho novo na lista fechada, qualquer mudança no `aprovar`, no
  `conferir` ou na versão da cena, e qualquer checagem velha que precise mudar de sentido.

---

## 12. As escolhas que fiz sozinho

1. Os consertos chegam por uma lista que a Sala escreve em português simples, conferida por `consertos.mjs montar` contra o
   `mantidos.json`, os laudos e a fila, e não pela leitura direta desses arquivos.
2. Consertos, respostas e chamadas saem por rotas `/api`, e a lista fechada não ganha nenhum caminho.
3. O clique fica em `respostas.jsonl`, fora do git; a resposta cai se o texto do conserto mudar (`texto_sha`), e registra
   `via` (este PC ou o aparelho de casa).
4. O ponto na imagem vai no colchete do texto do comentário, em porcentagem inteira; sem ponto, o texto fica igual ao de hoje.
5. A caixa de comentário abre no painel sem bloquear a página, para dar para clicar na imagem com ela aberta.
6. N anda por todas as marcas da barra, e somei P para voltar; ir a qualquer ponto põe o vídeo 3 s antes e toca.
7. ~~Os blocos são pintados pelo estado (como hoje), não pelo tipo de cena; o número aparece quando cabe.~~ Substituída pela
   escolha do Lucas, lida nos rascunhos (§13.7): o desenho do tipo, com a tira do estado.
8. As janelas: o conserto "aqui" de 0,5 s antes até o fim dado ou 4 s depois; o anel na imagem de 1 s antes a 3 s depois.
9. Os campos opcionais `area` (o retângulo "o conserto mexe aqui") e `escolhas` no conserto.
10. A página nova nasce como `mesa.*`, e o servidor passa a ler a página uma vez, na partida.
11. As fontes da marca vêm de `/marca/fontes/` (os rascunhos usavam o Google Fonts); só o tema escuro.
12. O `aprovar` e o `conferir` não olham os consertos; o `estado` só avisa dos combinados ainda não feitos.
13. O nome "Pergunta" para a chamada de comentário, como nos rascunhos; o topo mostra o nome do projeto, sem o número do vídeo
    (nenhum arquivo de máquina guarda o número).
14. As provas no navegador num vídeo publicado, nunca no vídeo 8; na troca, o vídeo 8 só se abre sem tocar e sem clicar.

---

## 13. As respostas às perguntas do construtor (20/11/2026, 14:0x)

Um leitor que não viu a conversa (a checagem do construtor, só leitura) leu este desenho, o código da v1, a fila do molde, os
rascunhos e os arquivos do vídeo 8, e deixou sete perguntas. As respostas abaixo **valem sobre as seções que tocam**. A 13.3 e a
13.7 vêm do Lucas (a conversa e os rascunhos); as outras são da Sala, e o Lucas pode corrigir.

### 13.1 Onde se constrói: numa pasta irmã, sem tocar a v1 (da Sala)

O Lucas revê o vídeo 8 na página de hoje (13.3), então a v1 fica em uso por horas, e o processo dela pode subir de novo a
qualquer queda (o PC, o Tailscale, um reinício). Por isso:

- a v2 nasce em `ferramentas/linha-do-tempo-v2/` (a mesma profundidade, para o `RAIZ_CANAL` de `../..` valer), com a linha de
  comando própria, `ferramentas/linha-do-tempo-v2.mjs`;
- nenhum arquivo da v1 (`ferramentas/linha-do-tempo.mjs` e `ferramentas/linha-do-tempo/`) muda até a troca, nem o
  `servidor.mjs`, nem o `linha.mjs` (isto substitui, no §10, "o `servidor.mjs` e o `linha.mjs` podem mudar no disco");
- o `provar.mjs` da v2 mora na pasta dela e prova a pasta dela (o `PASTA_CODIGO` aponta para lá), e continua escrevendo só na
  cópia do Juneau da prova;
- na troca, a Sala move a v2 para o lugar da v1 com `git mv` (a v1 fica no histórico do git), ajusta o que apontar para
  `linha-do-tempo-v2` e roda o `provar.mjs` de novo, no lugar novo, antes de subir o servidor.

### 13.2 O navegador do construtor: o Chrome sem janela, num servidor de prova (da Sala, pelas regras do canal)

- O construtor (subagente) nunca usa o painel de navegador do app, o Chrome do Lucas nem nenhuma ferramenta de navegador da
  Claude. O Chrome sem janela por script (`playwright-core`, como os portões `shot` e `qc-cena`, que as peças já rodam) vale,
  só contra um servidor de prova da v2 numa porta de prova (8791 em diante), com a cópia do Juneau da prova ou um vídeo já
  publicado, e nunca o vídeo 8 nem a porta 8790. Os arquivos de teste desse vídeo se renomeiam no fim, como no §9.2.
- **Um ponto de olhar, cedo:** a mesa parada (o topo, o vídeo, o painel com uma lista de consertos de teste, a barra), em
  quadros do Chrome sem janela nos tamanhos abaixo, entregue à Sala antes do resto da página. A Sala olha e devolve os
  defeitos antes de o construtor seguir.
- **O alvo é a janela do Lucas**, medida na sessão dele de 20/11 (`medidas.jsonl` do vídeo 8: o Chrome dele, `dpr` 1, o palco
  da v1 com 1086 px; pela regra da v1, `min(100%, (100vh − 300px) × 16/9)`, isso dá uma janela de ~1920 × 911 px por dentro,
  uma tela de 1920 × 1080 com o Chrome maximizado). Também 1440 × 900, e o empilhar abaixo de ~1100 px.
- **O vídeo não encolhe demais:** na janela do Lucas, o vídeo da v2 não fica abaixo de 960 px de largura (a v1 dava 1086). Se o
  topo, os controles, a fala e a barra não deixarem, a barra e a fala ficam mais baixas que nos rascunhos (o §6.1 dizia "perto
  de 1280 × 720" numa tela de 1920 × 1080, e isso contava com mais altura do que a janela dele tem).

### 13.3 O prazo e a troca: uma só, depois da revisão do vídeo 8 (do Lucas)

O Lucas, às 13:58, à pergunta "Construir a linha nova leva umas 4 a 5 horas […] Como seguimos?": **"Continuar na de hoje
(Recomendado)"**. Então não há pressa de vídeo 8, e não há corte em fatias: o desenho inteiro, uma troca só. Ela acontece
quando o Lucas terminar a revisão do vídeo 8 na página de hoje e a Sala tiver juntado os comentários dele, antes de a revisão
dos consertos (a r2, só as cenas que mudarem) abrir. Os passos 2 a 7 do §10 continuam, com a lista de consertos da r2 (os
consertos feitos aparecem como "refeito: veja de novo"), que a Sala escreve então. A Sala avisa o Lucas no chat antes de
trocar.

### 13.4 A tecla N, o "Aqui, agora" e o filtro (da Sala)

- **N** vai ao primeiro ponto depois do mais à frente entre a agulha e o último ponto visitado (o alvo do último salto); **P**,
  ao último antes do mais atrás entre os dois. Assim, N repetido anda de ponto em ponto mesmo com o vídeo parado 3 s antes do
  ponto. Voltar o vídeo com ← ou clicando na barra apaga o "último ponto visitado". O `marcaSeguinte` recebe os dois instantes.
- **O "Aqui, agora"** é o conserto cuja janela (§6.3) contém a agulha. Se duas se sobrepõem (na s67, 0,5 s e 4,5 s), fica em
  cima o de instante mais recente que a agulha já passou, e o outro logo embaixo, inteiro; antes do primeiro instante, o
  primeiro. O `consertoAqui` devolve a lista nessa ordem.
- **O losango agrupado** leva ao primeiro ponto do grupo, e o painel mostra o grupo inteiro.
- **"Só o que mudou":** a cena com conserto que espera o Lucas, ou com comentário aberto, conta como "precisa de olho" e nunca
  se pula, mesmo vista.
- **O cartão "O próximo"** fala de qualquer ponto, com o tipo escrito ("O próximo: conserto proposto · s63 · 12:59.5 (N)" ou
  "O próximo: seu comentário · …").

### 13.5 O conserto depois do clique (da Sala)

A resposta dele muda o aspecto, nunca o estado. Um aspecto novo, "respondido, espera o chat": o losango meio cheio (a metade de
baixo) em verde-azulado e, no cartão e na lista, "Você respondeu: Concordo" (ou "Quero outro conserto") e "A Sala confirma com
você no chat". O número do topo conta só os que esperam resposta. No grupo, a ordem do que mais pede: espera você > respondido >
combinado ou refeito > fica. "Retirar" volta a "espera você".

### 13.6 "Quero outro conserto": o quadro do comentário (da Sala)

O botão para o vídeo exatamente no instante do conserto (não 3 s antes; se estiver tocando, pausa primeiro) e só então abre a
caixa. O comentário leva esse instante, e o anel, se ele clicar na imagem, marca esse quadro.

### 13.7 Os blocos das cenas: o desenho do tipo, com a tira do estado (do Lucas, pelos rascunhos)

A pergunta a ele dizia "A barra da linha nova pode mostrar uma miniatura de verdade de cada cena, em vez de desenhos", e a
página dos rascunhos explicava: "Nos rascunhos, cada cena tem um desenho pelo tipo (mapa, vídeo, dado, documento)". Ele
escolheu **"Desenhos simples"**: os desenhos dos rascunhos, e não o bloco pintado pelo estado. Então:

- o corpo do bloco é o desenho do tipo, como na aba A (os gradientes `.m-*` dos rascunhos, refeitos no `mesa.css`), e o estado
  vai numa tira de 4 px embaixo (cinza, verde, âmbar, listrada, vermelha), com o ponto branco de "nova versão" e o contorno da
  cena do momento como no §6.1; o número da cena por cima, quando cabe; com "só o que mudou", o bloco apagado, como hoje;
- o tipo vem de `out/<proj>/regencia.json › cenas[].modo` (no vídeo 8: `aereo-real`, `mapa3d`, `footage`, `mapa`, `dados`,
  `documento`, `citacao`, `desenho`), lido no servidor junto das chamadas (§7.6, com o mesmo cuidado: só o `id` e o `modo`
  saem, guardados pelo tamanho e pela data), e entregue na `/api/linha` como `desenho` em cada cena;
- tipo desconhecido, ou vídeo sem regência ou sem `modo` (o Juneau): o desenho sai do `tipo` da linha (`mapa` → mapa,
  `video` → footage, `dom` → desenho);
- a prova (`[v2]`) ganha: o `desenho` certo com uma regência de mentira, o recuo para o `tipo` sem ela, e nenhum outro campo
  da regência na resposta.

### 13.8 Os quadros por segundo: o antes e o depois (da Sala)

O "antes" de referência já existe: as medidas da v1 no PC do Lucas, no vídeo 8 (o `medidas.jsonl` de 20/11; por exemplo, a s30
ao vivo a 30,0 quadros por segundo). Na prova, o construtor mede a v1 e a v2 no Chrome sem janela, na mesma cena de um vídeo
publicado, com a v1 servida da pasta de hoje (intocada, 13.1) numa porta e a v2 noutra. Depois da troca, a sessão do Lucas na r2
dá o "depois" no PC dele, contra o "antes" das mesmas cenas. A régua do §2 (queda acima de 10 % é fracasso) vale para as duas.
