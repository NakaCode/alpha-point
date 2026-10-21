# O que só o Lucão faz, uma vez

O motor novo produz o Alpha Point no PC do escritório (`lucasrosa-escritorio`), num usuário só dele (`alpha-prod`), sem
conversa aberta e sem mexer no seu usuário (`zangp`), na pasta `C:\projetos\alpha-point` nem nas sessões do app. O jeito
de hoje continua até você aprovar o vídeo piloto (o vídeo 5); o Peru você termina no jeito atual, depois de 22/10.

O que fica com você, sempre: escolher a pauta entre opções, aprovar o roteiro, escolher título e capa, ver o vídeo pronto
e publicar. O resto roda sozinho.

Para isso, cada serviço precisa ser **seu**: conta Claude, ElevenLabs, Cloudflare (onde ficam os arquivos do canal) e a
autorização do YouTube. Nenhuma credencial passa por chat, e-mail ou mensagem. Você digita no próprio PC, num script que
não mostra o que você digita, e manda para a Top10 só a **linha verde** que ele imprime no fim.

**Comece só quando a Top10 avisar que a pasta `C:\estudio\maquina\` existe no PC do escritório.** Todos os passos são
nesse PC, sentado nele ou pelo acesso remoto.

## Como abrir o PowerShell certo

- **Como administrador** (passos 1 a 4): menu Iniciar → digite `PowerShell` → botão direito em «Windows PowerShell» →
  «Executar como administrador». O prompt mostra `PS C:\Windows\system32>`.
- **Normal** (só o `claude setup-token` do passo 4): menu Iniciar → `PowerShell` → Enter. O prompt mostra
  `PS C:\Users\zangp>`.

## 1 · O usuário da produção (se a Top10 ainda não fez com você)

No PowerShell como administrador:

```
powershell -NoProfile -ExecutionPolicy Bypass -File C:\estudio\maquina\preparar-maquina-producao.ps1 -Canal alpha-point -Ligado24h
```

Ele pede uma senha para o usuário `alpha-prod`: crie uma forte e guarde com você (as rotinas não precisam dela). Tire o
`-Ligado24h` se este PC não puder ficar ligado o tempo todo. Mande à Top10 a linha verde `PRONTO …`.

## 2 · Cloudflare (onde ficam os vídeos e o backup do canal)

1. Em cloudflare.com, crie a conta do canal (ou use a sua). Se a Cloudflare pedir um cartão para ligar o R2, é o seu: o
   custo é do canal. Preço lido em 21/out/2026 na página oficial: US$ 0,015 por GB por mês, com 10 GB grátis, e baixar os
   arquivos não custa nada.
2. R2 → **Create bucket** → nome `alpha-point` → crie.
3. R2 → **Manage R2 API Tokens** → **Create API token** → permissão **Object Read & Write** → **Apply to specific buckets
   only** → `alpha-point` → crie. A tela mostra uma vez só o **Access Key ID** e o **Secret Access Key**: deixe a tela
   aberta. O **Account ID** aparece na página do R2.
4. No PowerShell como administrador:

   ```
   powershell -NoProfile -ExecutionPolicy Bypass -File C:\estudio\maquina\guardar-segredo-no-cofre.ps1 -Canal alpha-point -Segredo r2
   ```

   Ele pergunta o Account ID e o nome do bucket (Enter = `alpha-point`) e depois as duas chaves, sem mostrar na tela.
   Mande à Top10 a linha verde `GUARDADO …`.

## 3 · ElevenLabs própria (a voz do canal)

A voz de hoje foi criada numa conta da ElevenLabs que outros canais também usam, e a licença dela não deixa o seu canal
continuar ali. Ela também não pode ser levada para outra conta: a ElevenLabs só compartilha voz criada por Voice Design
dentro do mesmo workspace. Por isso a voz do canal nasce de novo, na sua conta, e **quem aprova é o seu ouvido**.

1. Crie a sua conta em elevenlabs.io no **plano Pro ou maior**. O canal grava a voz em PCM a 44,1 kHz, e a ElevenLabs só
   entrega esse formato do Pro para cima (documentação da API, lida em 21/out/2026). Um vídeo gastou cerca de 6 mil
   créditos (6.427 no da Zona do Canal, 5.678 no do Peru): confira na página de preços quantos créditos o plano dá por
   mês. O Pro custava US$ 99 por mês em 09/out/2026.
2. Recrie a voz pelo mesmo caminho da de hoje (as fichas estão em `marca/vozes.html`): **Voice Design** com a descrição
   do âncora de uns 35 anos, depois o **Remix** «conversational» e o «calm». Ouça as opções e escolha. Se preferir, a Top10
   prepara as opções e manda os áudios para você escolher.
3. Crie a chave de API (Profile → API Keys) com acesso a **Text to Speech**, **Voices** (leitura) e **History**
   (leitura). O History é o que deixa o relógio de palavras sair de graça.
4. No PowerShell como administrador:

   ```
   powershell -NoProfile -ExecutionPolicy Bypass -File C:\estudio\maquina\guardar-segredo-no-cofre.ps1 -Canal alpha-point -Segredo elevenlabs
   ```

   Mande à Top10 a linha verde e o **ID da voz escolhida** (o voice ID não é segredo; a chave é).

## 3b · As outras chaves do canal (MapTiler, Epidemic e acervos)

A MapTiler (plano Flex) e a Epidemic Sound (plano Creator) já são contas suas: copie a chave de cada painel. As chaves
dos acervos abertos (Pexels, Pixabay, DVIDS, NARA, Europeana e Smithsonian) estão hoje no seu arquivo de chaves, e o
canal não registrou quem as criou: se foi você, use as mesmas; se vieram de outra pessoa, crie as suas no cadastro de
cada site. Para cada uma, no PowerShell como administrador, troque o último nome pelo serviço:

```
powershell -NoProfile -ExecutionPolicy Bypass -File C:\estudio\maquina\guardar-segredo-no-cofre.ps1 -Canal alpha-point -Segredo maptiler
```

Os nomes são `maptiler`, `epidemic`, `pexels`, `pixabay`, `dvids`, `nara`, `europeana` e `smithsonian`. Cada um imprime
a sua linha verde.

## 4 · Claude (a sua conta Max)

1. No PowerShell **normal**: `claude setup-token`. Ele abre o navegador: entre com a sua conta Claude Max e autorize. No
   fim, o PowerShell mostra um token que começa com `sk-ant-oat`. Não feche.
2. No PowerShell **como administrador**:

   ```
   powershell -NoProfile -ExecutionPolicy Bypass -File C:\estudio\maquina\guardar-segredo-no-cofre.ps1 -Canal alpha-point -Segredo claude -Porta 1
   ```

   Cole o token (ele não aparece na tela). Mande à Top10 a linha verde.
3. Se você tiver uma segunda conta e combinar com o Mateus usá-la na produção, repita com ela e `-Porta 2`.

Se o comando `claude` não existir nesse PowerShell, avise a Top10, que instala antes.

## 5 · YouTube (autorizar o envio)

Quando a Top10 mandar o link de autorização, abra-o e entre com a conta Google **dona do canal Alpha Point**. Autorize o
envio de vídeos. O vídeo sobe sempre **privado**: quem publica é você, no Studio.

Confira também que o canal está numa conta Google e num AdSense **seus**, sem ligação com o Top10.

## 6 · Sete respostas (pode ser pelo chat, numeradas)

1. **Juneau**: o vídeo 1 tem XML pronto desde 07/10 e não foi publicado. Publica, arquiva ou descarta?
2. **Este PC** pode ficar ligado 24 h? (decide o `-Ligado24h` do passo 1)
3. **Contas Claude**: quantas você tem, e de qual plano (Max 5x ou 20x)?
4. **Crédito de tela**: você decidiu 56 px (07/10). O motor tem piso de 72 px, porque abaixo disso não se lê numa TV.
   Sobe para 72 px, ou fica 56 px com exceção permanente no motor?
5. **YouTube**: os dois vídeos saíram na categoria Pessoas e blogs, que é o padrão do YouTube: fica assim ou passa
   para Educação? Há e-mail de contato profissional para a descrição (ou nenhum)? O canal já está no programa de
   parcerias? E o que você marca em «conteúdo alterado ou sintético» (o motor marca «sim», por ser voz de IA, até você dizer)?
6. **Imagens genéricas**: sem o Storyblocks e o Envato da Top10, e sem caça por robô nos bancos (os termos deles
   proíbem), o canal vive de acervo aberto, fonte oficial, mapa e ilustração. Está bem assim?
7. **A trilha automática**: a regra do canal diz que a trilha nunca passa por ferramenta de IA nem de reconhecimento de
   música. No motor novo, um agente lê o ROTEIRO e escreve o clima de cada trecho em texto (por exemplo «misterioso,
   ambiente, calmo»); a faixa sai de um ranking dos dados da própria Epidemic contra esse texto, e a prévia é medida pelo
   volume. Nenhum modelo escuta a música. Isso está dentro da sua regra? Se não estiver, o canal usa um clima fixo,
   sem agente nenhum: os climas das 12 faixas que você aprovou nos vídeos 1 a 3 (misterioso, tranquilo, sonhador; ambiente
   e drone; de 66 a 104 BPM, todas sem voz), que estão em `estudio/musica/paleta.json`. E há algum clima que o canal
   nunca deve usar?
