# O backup dos pacotes no Google Drive (desde 30/10/2026)

**O pedido.** O Lucas, no chat da Sala, em 30/10/2026: "A gente consegue automatizar o envio do pacote XML para o drive? Apenas para
fins de backup, não tenho como ficar guardando no computador por falta de espaço". O jeito: "Ferramenta de linha de comando (rclone)";
a instalação: "Pode instalar (Recomendado)".

- **O rclone** 1.75.1 veio pelo winget, em `%LOCALAPPDATA%\Microsoft\WinGet\Packages\Rclone.Rclone_Microsoft.Winget.Source_8wekyb3d8bbwe\`.
- **O remote é o `gdrive-total`** (scope `drive`, o Drive inteiro), do 2º login do Lucas, em 30/10/2026. O `gdrive` (scope `drive.file`,
  o 1º login) só enxerga o que ele mesmo criou, e por isso criou uma pasta à parte, "Alpha Point", que ficou vazia: quem a apaga é o
  Lucas. O token mora no `rclone.conf` dele: nunca se imprime nem se lê.
- **O destino:** Meu Drive › Alpha-Point › Pacotes Premiere › uma subpasta numerada por vídeo.
  - A Alpha-Point é a pasta que o Lucas já tinha ("Pera, ele criou OUTRA alpha-point, já existia uma"; à pergunta, "Usar a minha
    pasta (Recomendado)").
  - A numeração: "Ele pode numerar? Exemplo, 0004 - AtlânticoFundo", e logo depois "Meu Drive › Alpha Point › Pacotes Premiere,
    com uma subpasta numerada por vídeo". O número é o da numeração nova (`CLAUDE.md`, "A numeração dos vídeos"), com quatro
    dígitos.
- **O comando:** `python -X utf8 -B ferramentas/backup-drive.py <pasta do pacote> --numero=<N> [--nome=<nome>] [--seco]`.
  - Ele envia (`rclone copy --checksum`), confere cada arquivo pelo tamanho e pelo MD5 (`rclone check --one-way`) e grava o registro
    em `out/_maquina/backup-drive/`, fora do git. Sai 0 só com a conferência limpa.
  - Nunca apaga nada, nem no PC nem no Drive: a cópia local, quem apaga é o Lucas, depois do OK.
  - Só as entregas vão ao Drive (regra 2 do `CLAUDE.md`): nunca a pasta do canal, a `midia/` nem o banco. O script recusa a pasta
    do canal.
- **O client_id compartilhado do rclone** "is being retired and will stop working during 2026". No 1º envio, o Google recusou um
  arquivo por excesso de pedidos por minuto (403 "Quota exceeded ... Requests per minute"), e a 2ª tentativa do próprio rclone
  passou. Se o login parar, ou o 403 voltar sempre, o Lucas cria um client_id próprio
  (https://rclone.org/drive/#making-your-own-client-id), e a Sala o guia.
- **Feito:**
  - o vídeo 4 (`atlantico-fundo`), em 30/10/2026: 79 arquivos e 10,88 GB de `C:\AtlanticoFundo-Premiere`, enviados pela pasta à parte
    e movidos, no próprio Drive e sem reenviar, para "0004 - AtlânticoFundo". O `rclone check` no lugar final, às 13:38: 0 diferenças,
    79 arquivos batem.
  - o vídeo 5 (`big-sur`), em 06–07/11/2026: 63 arquivos e 17,18 GB de `C:\BigSur-Premiere`, em "0005 - BigSur". O `rclone check`, às 00:51: 0
    diferenças, 63 arquivos batem.
  - o vídeo 3 (`peru-agua`), em 09/11/2026 (o Lucas: "Sim", à pergunta "Mando o do Peru para o Drive?"): 55 arquivos e 17,03 GB de
    `C:\PeruAgua-Premiere`, em "0003 - PeruAgua". O 403 voltou em dois arquivos, e a 2ª tentativa do próprio rclone passou. O `rclone check`, às
    16:41: 0 diferenças, 55 arquivos batem.
  - o vídeo 7 (`rio-columbia`), em 17/11/2026: 70 arquivos e 20,89 GB de `C:\RioColumbia-Premiere`, em "0007 - RioColumbia". O 403 voltou em
    dois arquivos (s09 e s06), e a 2ª tentativa do próprio rclone passou. O `rclone check`, às 15:35: 0 diferenças, 70 arquivos batem. O pacote
    no C: tirou o espaço da exportação do Lucas, que falhou duas vezes no último quadro (`APRENDIZADOS.md`, item 103).
    As miniaturas A e B (a 1280 e a 2560 de cada; `roteiros/rio-columbia/miniatura/`) foram em "0007 - RioColumbia/Miniaturas", a pedido do Lucas
    ("mandar as thumbs para o drive seria bom também"), pelo `rclone copy --checksum` direto (4 arquivos): o `rclone check --one-way`, às 20:00, 0 diferenças.
    A cópia local, `C:RioColumbia-Premiere` (19,45 GB), a Sala apagou em 20/11/2026, às 19:34, com o "Apagar o do vídeo 7 e exportar antes
    (Recomendado)" do Lucas (o C: estava com 11 GB livres antes do pacote do vídeo 8), depois de um `rclone check --one-way` às 19:17: 0 diferenças,
    70 arquivos no Drive. O C: foi a 30,6 GB livres.
  - o vídeo 8 (`australia-animais`), em 20/11/2026: 78 arquivos e 15,68 GB de `C:\AustraliaAnimais-Premiere`, em "0008 - AustraliaAnimais", das 22:22 às
    23:49.
    - O 403 de cota voltou num arquivo (s43), e a 2ª tentativa do próprio rclone passou.
    - O `rclone check`, às 23:49: 0 diferenças, 78 arquivos batem. O registro está em
      `out/_maquina/backup-drive/AustraliaAnimais-Premiere-20261120-222203.log`.
    - As miniaturas do teste, r3-n1 e r3-n2 (a 1280 e a 2560 de cada; `roteiros/australia-animais/miniatura/`), foram em
      "0008 - AustraliaAnimais/Miniaturas", como no vídeo 7, pelo `rclone copy --checksum` direto (4 arquivos). O `rclone check --one-way`, às 23:50:
      0 diferenças.
    - A cópia local, `C:\AustraliaAnimais-Premiere`, fica no PC até o Lucas decidir. O C: tem folga depois da limpeza abaixo.
- **A limpeza de `out/` dos vídeos passados** (20/11/2026). O Lucas perguntou, às 20:41: "Percebi que nesta pasta C:\projetos\alpha-point\out há vários
  arquivos de vídeos passados, eles servem para que? Estão ocupando bastante espaço". A `out/` tinha uns 290 GB. À pergunta "Apago arquivos dos vídeos antigos
  para liberar espaço no C:? O vídeo 8 não é tocado, e apagar não tem volta.", às 21:02: **"Apagar os 203 GB (Recomendado)"**, o texto da opção em
  `roteiros/australia-animais/decisoes-lucas.md`.
  - **O que saiu às 21:03:** 46.527 arquivos, 137,41 GB, nenhum pulado, de `los-angeles`, `zona-do-canal`, `peru-agua`, `atlantico-fundo`, `big-sur`,
    `rio-columbia` e `juneau`. Foram os binários de `_tmp/` (os quadros em PNG das revisões, as prévias da linha do tempo, os testes; o texto ficou) e os
    vídeos de `_media/_caca/` (os downloads originais dos bancos e dos acervos; a cópia instalada em `_media/footage/`, que as cenas usam, ficou).
    - Um ensaio contou cada classe antes.
    - No apagar, cada arquivo foi conferido de novo: existe, tem o mesmo tamanho, está fora do git e é de vídeo passado.
    - O C: foi de 24 a 152 GB livres, com a exportação do vídeo 8 em curso.
  - **O que saiu às 22:25, depois da exportação do vídeo 8:** o que o XML final cita nos vídeos 3, 4, 5 e 7 (os clipes das cenas, o master, a música e
    as chamadas): 251 arquivos, 65,98 GB.
    - Cada um saiu só porque o MD5 e o tamanho batiam com um arquivo do pacote daquele vídeo no Drive. A lista do Drive, com o MD5, foi relida na
      hora por `rclone lsjson -R --hash`: 0003 com 55 arquivos, 0004 com 79, 0005 com 63 e 0007 com 74.
    - Bateram os 251, e nenhum ficou.
    - O C: foi de 138 a 199 GB livres, já com o pacote do vídeo 8 montado.
    - Desses quatro vídeos, o Drive é agora a única cópia do que o Premiere abre. Para reabrir um deles, baixa-se a pasta do Drive para `C:\<Nome>-Premiere`.
  - **A soma das duas levas:** 46.778 arquivos, 203,39 GB.
  - **O que não sai:**
    - os textos (no git);
    - os PDFs de licença e os prints das páginas dos itens;
    - a `_media/footage/`;
    - os clipes finais do Juneau, que não tem pacote no Drive;
    - o vídeo 6 (`praia-do-cassino`, parado);
    - o vídeo 8;
    - as pastas `prova-*`.
