# O que só o Lucão faz, uma vez

O motor novo produz o Alpha Point no PC do escritório (`lucasrosa-escritorio`), no seu mesmo usuário do Windows, para
você ver tudo o que ele faz, sem conversa aberta. Ele trabalha na pasta `C:\estudio\` e numa distro do WSL só dele
(`estudio-alpha-point`), sem mexer na pasta `C:\projetos\alpha-point`, nas suas sessões do app nem nas distros que você
já usa. O jeito de hoje continua até você aprovar o vídeo piloto (o vídeo 5); o Peru você termina no jeito atual, depois
de 22/10.

O que fica com você, sempre: escolher a pauta entre opções, aprovar o roteiro, escolher título e capa, ver o vídeo pronto
e publicar. O resto roda sozinho. Os portões do motor só se aprovam com a sua palavra: o Mateus entra como operador e
só aprova citando uma mensagem sua, com a data (você decidiu em 24/10/2026: «Só com a sua palavra»).

Para isso, cada serviço precisa ser **seu**: a conta Claude e a autorização do YouTube. Nenhuma credencial passa por chat, e-mail ou mensagem. Você digita no próprio PC, num script que
não mostra o que você digita, e manda para a Top10 só a **linha verde** que ele imprime no fim.

**Comece só quando a Top10 avisar que a pasta `C:\estudio\maquina\` existe no PC do escritório.** Todos os passos são
nesse PC, sentado nele ou pelo acesso remoto.

## Como abrir o PowerShell certo

- **Como administrador** (passos 1 a 4): menu Iniciar → digite `PowerShell` → botão direito em «Windows PowerShell» →
  «Executar como administrador». O prompt mostra `PS C:\Windows\system32>`.
- **Normal** (só o `claude setup-token` do passo 4): menu Iniciar → `PowerShell` → Enter. O prompt mostra
  `PS C:\Users\zangp>`.

## 1 · As pastas da produção (se a Top10 ainda não fez com você)

Entre no Windows com o seu usuário de sempre. No PowerShell como administrador:

```
powershell -NoProfile -ExecutionPolicy Bypass -File C:\estudio\maquina\preparar-maquina-producao.ps1 -Canal alpha-point -Ligado24h
```

Ele não cria usuário nem pede senha: anota que a produção é do seu usuário e cria `C:\estudio\`. O `-Ligado24h` fica: você
decidiu que este PC fica ligado 24 horas, sem suspender, para o motor trabalhar sozinho (24/10/2026: «Sim, 24 h»). Mande à
Top10 a linha verde `PRONTO …` (ela deve dizer `modo=mesmo-usuario`).

## 2 · Cloudflare: nada a fazer

Os vídeos e o backup do canal ficam num bucket só do Alpha Point (`qint-alpha-point`), na conta Cloudflare da Top10
(a Holding o criou em 22/out/2026, depois de o Mateus preferir um bucket ao Google Drive). A Top10 criou o bucket e põe a credencial no cofre do PC; você não cria conta nem paga
nada.

## 3 · ElevenLabs: nada a fazer

O canal continua na conta da ElevenLabs da Top10, com uma chave só do Alpha Point (decisão do Mateus, 22/out/2026), e a
voz de hoje fica a mesma (`Alpha Point - Narrator`, `829pig94w9GefZ9jJQYl`). A Top10 cria a chave e a põe no cofre do PC;
você não cria conta nem escolhe voz nova. Se um dia quiser trocar a voz, a mesma chave permite desenhar uma.

## 3b · As outras chaves do canal (MapTiler, Epidemic e acervos)

A MapTiler (plano Flex) e a Epidemic Sound (plano Creator) já são contas suas: copie a chave de cada painel. A da
Epidemic é a que o motor usa para escolher e baixar a trilha de cada vídeo sozinho (você decidiu a trilha automática em
24/10/2026). As chaves dos acervos abertos que o canal usa (DVIDS, NARA e Smithsonian) estão hoje no seu arquivo de
chaves, e o canal não registrou quem as criou: se foi você, use as mesmas. Se não foi, você não precisa criar conta: o
Mateus liberou aos sócios, em 24/10/2026, o MapTiler e as chaves de acervo do Top10, e a Top10 as põe no cofre do PC
pelo nome da variável, se você preferir (escolha sua, como a MapTiler Flex que já é sua). ⚰️ *Até 24/10 este passo
dizia «se vieram de outra pessoa, crie as suas no cadastro de cada site».* Para cada uma, no PowerShell como administrador, troque o último nome pelo serviço:

```
powershell -NoProfile -ExecutionPolicy Bypass -File C:\estudio\maquina\guardar-segredo-no-cofre.ps1 -Canal alpha-point -Segredo maptiler
```

Os nomes são `maptiler`, `epidemic`, `dvids`, `nara` e `smithsonian`. Cada um imprime a sua linha verde.

**Pexels, Pixabay e Europeana não vão ao cofre.** Você os tirou dos acervos do canal em 26/09/2026 ("só acervos
oficiais": `marca/midia.md` §7.3 e `marca/midia.json` › `fontes_desligadas`). A roupa do `pesquisa-imagens` os proíbe,
mas o código do motor não lê a roupa para isso: com a chave no cofre, a pesquisa do motor poderia usá-los. Sem a chave,
não usa. As chaves continuam no seu arquivo de chaves deste PC, para o jeito de hoje.

## 4 · Claude (a sua conta Max)

1. No PowerShell **normal**: `claude setup-token`. Ele abre o navegador: entre com a sua conta Claude Max e autorize. No
   fim, o PowerShell mostra um token que começa com `sk-ant-oat`. Não feche.
2. No PowerShell **como administrador**:

   ```
   powershell -NoProfile -ExecutionPolicy Bypass -File C:\estudio\maquina\guardar-segredo-no-cofre.ps1 -Canal alpha-point -Segredo claude -Porta 1
   ```

   Cole o token (ele não aparece na tela). Mande à Top10 a linha verde.
3. **A segunda conta, com `-Porta 2`.** Você decidiu que o motor usa as duas contas, a principal e a de reserva: quando
   uma bate no limite, ele passa para a outra (24/10/2026: «As duas»). Repita os itens 1 e 2 com a outra conta Claude e,
   no fim do comando do item 2, `-Porta 2` no lugar de `-Porta 1`. Mande à Top10 as duas linhas verdes. Sem a segunda, a
   conferência da máquina não passa: o pacote declara 2 contas.

Se o comando `claude` não existir nesse PowerShell, avise a Top10, que instala antes.

## 5 · YouTube (autorizar o envio)

Quando a Top10 mandar o link de autorização, abra-o e entre com a conta Google **dona do canal Alpha Point**. Autorize o
envio de vídeos. O vídeo sobe sempre **privado**: quem publica é você, no Studio.

Confira também que o canal está numa conta Google e num AdSense **seus**, sem ligação com o Top10.

## 6 · Sete respostas (pode ser pelo chat, numeradas)

Você já respondeu todas no chat da Sala, em 24 e 25/10/2026, e cada uma está marcada com a sua resposta. Nenhuma falta.

1. ~~**Juneau**: o vídeo 1 tem XML pronto desde 07/10 e não foi publicado. Publica, arquiva ou descarta?~~ **Respondida em
   24/10/2026**: à pergunta «O Juneau tem o XML pronto desde 07/10 e nunca foi publicado. O que fazemos com ele?», «Arquivar».
   Ele fica guardado como está, neste PC, sem publicar, e não entra no motor.
2. ~~**Este PC** pode ficar ligado 24 h? (decide o `-Ligado24h` do passo 1)~~ **Respondida em 24/10/2026**: à pergunta
   «Este PC pode ficar ligado 24 horas, sem suspender, para o motor trabalhar sozinho?», «Sim, 24 h (Recomendado)». O
   passo 1 vai com `-Ligado24h`.
3. ~~**Contas Claude**: quantas você tem, e de qual plano (Max 5x ou 20x)?~~ **Respondida em 24/10/2026**: à pergunta
   «Quais contas Claude o motor pode usar?», «As duas» — a principal e a de reserva; quando uma bate no limite, o motor
   passa para a outra (o passo 4, item 3, vale). **O plano**, à pergunta «Suas duas contas Claude são de qual plano?»:
   «As duas Max 20x» (24/10/2026).
4. ~~**Crédito de tela**: você decidiu 56 px (07/10). O motor tem piso de 72 px, porque abaixo disso não se lê numa TV.
   Sobe para 72 px, ou fica 56 px com exceção permanente no motor?~~ (O piso do motor é 60 px, não 72, para todo crédito,
   o de mapa inclusive.) **Respondida em 24/10/2026**: à pergunta «O crédito de fonte na tela: o motor exige hoje no
   mínimo 60 px, e você tinha decidido 56 px (07/10). Qual fica?», «60 px (Recomendado)».
5. ~~**YouTube**: os dois vídeos saíram na categoria Pessoas e blogs, que é o padrão do YouTube: fica assim ou passa
   para Educação? Há e-mail de contato profissional para a descrição (ou nenhum)? O canal já está no programa de
   parcerias? E o que você marca em «conteúdo alterado ou sintético» (o motor marca «sim», por ser voz de IA, até você dizer)?~~
   **Respondida em 24 e 25/10/2026:** a categoria, «Educação (Recomendado)» (a 27, a de 4 dos 5 canais de referência);
   o conteúdo sintético, «Deixar desmarcado (Recomendado)» (você não marcava: «Não marquei»); o e-mail, à pergunta «A
   descrição dos vídeos leva um e-mail de contato?», «Nenhum, como hoje»; as parcerias, à pergunta «O Alpha Point já está no
   Programa de Parcerias do YouTube (com anúncios)?», «Ainda não» (a monetização fica «desligada» até você dizer que entrou).
   Tudo está em `marcas/alpha-point/publicacao-youtube.json`.
6. ~~**Imagens genéricas**: os quatro bancos de hoje (Envato, Motion Array, Storyblocks e Shutterstock, assinaturas da
   Top10) continuam, sempre pelo navegador e depois do acervo aberto, da fonte oficial, do mapa e da ilustração
   (decisão do Mateus, 22/out). No motor novo, o agente deixa a busca escrita e a imagem é baixada pelo navegador:
   quem baixa, você ou a Top10?~~ **Respondida em 24/10/2026**: à pergunta «E o B-roll dos bancos pagos?», «Sem banco no
   piloto (Recomendado)». No vídeo 5, nenhum banco pago: o B-roll vem só de acervo aberto ou oficial, e a cena que só
   teria footage de banco sai em «versão pronta», que você vê nomeada antes de publicar.
7. ~~**A trilha automática**: a regra do canal diz que a trilha nunca passa por ferramenta de IA nem de reconhecimento de
   música. No motor novo, um agente lê o ROTEIRO e escreve o clima de cada trecho em texto (por exemplo «misterioso,
   ambiente, calmo»); a faixa sai de um ranking dos dados da própria Epidemic contra esse texto, e a prévia é medida pelo
   volume. Nenhum modelo escuta a música. Isso está dentro da sua regra? Se não estiver, o canal usa um clima fixo,
   sem agente nenhum: os climas das 12 faixas que você aprovou nos vídeos 1 a 3 (misterioso, tranquilo, sonhador; ambiente
   e drone; de 66 a 104 BPM, todas sem voz), que estão em `estudio/musica/paleta.json`.~~ **Respondida em 24/10/2026**: à
   pergunta «No piloto (vídeo 5), como sai a trilha?», «Automática, pelo roteiro». A opção dizia: «Um agente lê o roteiro
   e escreve o clima de cada trecho; o motor escolhe pela ficha da Epidemic e baixa da sua conta, sem lista. Nenhuma IA
   escuta a música.» A paleta de `estudio/musica/paleta.json` vai junto. **O veto**, em 25/10/2026, à pergunta «Há algum
   clima de música que o motor nunca deve escolher?»: «Vetar festivos e agitados (Recomendado)». A opção dizia: «Nunca
   alegre, eufórico, excêntrico, brincalhão, glamoroso, romântico, raivoso, de perseguição ou frenético. Os climas tensos
   (suspense, sombrio) continuam, para os trechos de risco.» Está em `moods_evitar` da paleta.
