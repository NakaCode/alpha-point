# `sala/trilha.md`, da Sala de controle

Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: `out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, `sala/CLAUDE-completo.md`.

A trilha do Epidemic Sound: a chave, o MCP, a ferramenta, o robots.txt, a licença e onde a faixa entra. A música fora de IA ficou no núcleo.

## A trilha: Epidemic Sound (desde 05/10/2026)

**A chave.** O Lucas, no chat, em 05/10/2026: "estou com a chave do Epidemic Sund". A pergunta: "De quem é a conta do Epidemic
Sound dessa chave?" A resposta: "Minha, canal conectado" (a conta é dele, e o Alpha Point está conectado nela). Ele pôs a chave
no arquivo de chaves da máquina pelo Bloco de Notas, como `EPIDEMIC_SOUND_API_KEY` (a cópia de antes ficou em
`chaves.env.antes-epidemic-2026-10-05`, na mesma pasta). Nunca se imprime nem se lê o valor.
- **O que ela abre:** o servidor MCP oficial do Epidemic Sound (`https://www.epidemicsound.com/a/mcp-service/mcp`, com a chave
  como `Authorization: Bearer`; a documentação é https://developers.epidemicsound.com/docs/mcp/). Testado em 05/10/2026 só com
  `initialize` e `tools/list`, sem baixar nada: 200, 16 ferramentas (busca de música e de efeito, faixas parecidas, edição de
  duração, download, e voz).
- **A chave vale um ano** a partir da criação, pela documentação. A data de criação está na conta do Lucas.
- **A chave foi trocada em 06/10/2026** (o Lucas, no chat: "nossa key do epidemic mudou"). Ele colou a nova no Bloco de Notas;
  a cópia de antes ficou em `chaves.env.antes-troca-epidemic-2026-10-06`. Testada no mesmo dia sem baixar nada: `conferir` ok, 16
  ferramentas, e a lista do Juneau conferida de novo contra o servidor, com a mesma assinatura (`1dc658a211e9`).
- **O que se usa:** a busca (`SearchRecordings`, `SearchSimilarToRecording`) para montar a lista de faixas, e o download
  (`DownloadRecording`) só com o "sim" do Lucas a uma lista no chat, com a faixa, o artista, a duração e o trecho de cada linha. A edição
  de duração (`EditRecording`) a ferramenta ainda não faz: o que ela entrega não foi medido, e ela pede verbo e prova próprios, além do
  "sim" dele.
- **O que não se usa:** a voz do Epidemic (`GenerateVoiceover` e as outras de voz). A voz do canal é a da ElevenLabs. Nem o download de efeito.
- **A ferramenta do canal** (05/10/2026): `node ferramentas/epidemic.mjs` (`conferir`, `buscar`, `parecidas`, `lista`, `baixar`; o topo do
  arquivo diz como). A prova, sem rede e sem a chave de verdade: `node ferramentas/epidemic-provar.mjs` (109 de 109 em 05/10).
  - `lista --lista=<arquivo> --conferir` confere cada linha contra o servidor e imprime a assinatura da lista (o conteúdo das linhas, menos
    o "aprovado"). Só a lista que sai 0 vai ao Lucas, com a assinatura.
  - Com o "sim": o Claude central marca `"aprovado": true` só nas linhas que ele cobriu e roda `baixar --lista=<arquivo> --linhas=<as do
    sim> --mensagem="<o sim literal>" --hora="<a hora>" --assinatura=<a da lista> --seco`, e depois sem `--seco`. Lista mudada depois do
    chat sai 2, sem pedir nada ao Epidemic.
  - Um download por vez, 15 s entre pedidos, no máximo 8 em 30 min (`db/epidemic-estado.json`, fora do git). No teto, sai 3. Só o Claude
    central baixa.
- **O robots.txt** do Epidemic veta `/a/*` (onde fica o MCP) e o `audiocdn` veta tudo. Decisão do Claude central (05/10/2026), como a da
  NARA e a do Commons: o MCP, com a chave da conta do Lucas, é a porta que o Epidemic abre para programas, e o arquivo que o
  `DownloadRecording` devolve é a entrega dela. As prévias nenhum programa do canal pede: o Lucas ouve na página da faixa
  (`https://www.epidemicsound.com/music/tracks/<id>/`), no navegador dele. **A exceção é o motor sem rosto** (Lucas, 24/10/2026: "Pode
  (Recomendado)"). A trilha automática dele usa a mesma API, o servidor MCP da Epidemic, com a chave do Lucas no cofre do motor
  (`scripts/sem-rosto/epidemic.mjs` do `top10-estudio`). Ela baixa a prévia de cada candidata pelo link que a própria busca devolve
  (`lqmp3Url`, um MP3 de baixa qualidade), só para medir o volume com o ffmpeg ("O motor sem rosto do Top10").
- **A licença**, lida pelo Claude central no navegador do app em 05/10/2026 (`out/juneau/_tmp/trilha/epidemic-licenca.md`, §8 e §9):
  - o plano do Lucas é o Creator, e o Alpha Point é canal pessoal dele ("Pessoal, meu"), na *Safelist* da conta. O Creator cobre só canal
    pessoal e um usuário;
  - "No broadcast type content" (cita filme, programa de TV e "documentaries") e o tema político ("promotion, advertisement or endorsement"
    de partido ou candidato): o Lucas escolheu "Seguir: é vídeo de YouTube", com o risco registrado como decisão dele;
  - só cortar, repetir, fazer fade e usar stems; nada mais;
  - o crédito na descrição: "<Artista> / <Música> / courtesy of Epidemic Sound", com o link de www.epidemicsound.com;
  - o que se publicou durante a assinatura fica licenciado para sempre; depois dela, nada novo com a música.
- **Onde a faixa entra:** no acervo da trilha da pré-v1 (`acervo/trilha/` e `biblioteca.json`, com a licença `assinatura`,
  `fonte: epidemic`, o titular "conta Epidemic do Lucas Rosa" e `canal_liberado: ["alpha-point"]`), que o `trilha.mjs` confere
  antes de escolher. O mp3 da Top10 (`catalogo-top10.json`) nunca: a assinatura dela não cobre o Alpha Point.
- **Os trechos:** o `trilha.mjs` da pré-v1 só divide por card de título, e o canal não tem card. O plano de trilha do Juneau se monta à mão a
  partir de `espelho.json` › `_capitulos` e se confere com `trilha.mjs <proj> --conferir`.
- **Ainda não feito:** a regra de mood da trilha na marca e a linha do Epidemic na tabela de Content ID do `marca/midia.md` §5 (proposta em
  `epidemic-licenca.md` §6).
