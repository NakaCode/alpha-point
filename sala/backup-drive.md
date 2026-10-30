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
