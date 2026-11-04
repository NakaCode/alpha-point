# Big Sur (`big-sur`, o vídeo 5): a narração e a conferência

## A narração (03/11/2026)

- **A decisão:** o Lucas, no teste às cegas do ritmo da voz, escolheu o ritmo de hoje ("Amostra 2"), e, à pergunta sobre a cota do
  Claude em 97 %, mandou narrar no mesmo dia ("Agora"). As falas estão em `roteiros/big-sur/decisoes-lucas.md`.
- **O texto:** a cópia para a voz `roteiros/big-sur/voz/texto-para-voz.md` (sha256 `5586198c9b99`, 13.007 caracteres, 35 parágrafos)
  do roteiro aprovado `50c2c56aaefc`, feita por `roteiros/big-sur/_ferramentas/preparar-voz.mjs` (48 trocas de grafia, nenhum alias;
  `gate.mjs --derivados` sai 0). O `out/big-sur/roteiro.md` é a mesma cópia, que o `narrar.mjs` lê.
- **A rodada:** `node C:/projetos/regie-v1/src/ferramentas/narrar.mjs big-sur`, depois do `--simular`; um pedido por parágrafo,
  `canal.json` › `narracao` (eleven_v4, a voz `829pig94w9GefZ9jJQYl`, stability 0,5, similarity 0,75, pausa 0,25 s).
- **O gasto:** 6.231 créditos (a soma do `character-cost` dos 35 pedidos, em `out/big-sur/narracao.json` › `custo`), para 12.939
  caracteres: 0,48 crédito por caractere. Com o teste do ritmo (1.126), o vídeo gastou 7.357 dos 15.000 que a autonomia dá.
- **O tratamento:** `python -X utf8 -B out/juneau/_pesquisa/tratar-narracao.py big-sur`: 35 trechos esmaecidos, nenhum som solto,
  a cauda de 20 s da tela final (767,78 → 787,78 s). A `out/big-sur/narracao.wav` tratada tem sha256 `14c53e752758`. A fala dura
  12:48, a ~177 palavras/min (2.260 palavras, com as pausas).

## A conferência (o ouvido da máquina)

`python -X utf8 -B out/juneau/_pesquisa/conferir-paragrafos.py big-sur` (faster-whisper large-v3 local, trecho por trecho;
o laudo em `out/big-sur/_narracao/conferencia-paragrafos.json`, fora do git). **Nenhum parágrafo parou antes do fim**, nenhuma
palavra foi pulada de fato, e a cobertura vai de 96,6 % a 100 %. O silêncio mediano dos trechos é 0,04 s no começo e 0,17 s no fim.
Os 7 trechos marcados "CONFERIR" e as outras diferenças se explicam assim:

| Trecho | O que o Whisper marcou | O que é |
|---|---|---|
| 1, 8, 35 | PULOU "thousand" | o Whisper escreveu "1 ,500" e "5 ,200", com um espaço antes da vírgula, e a comparação não leu o número; a palavra está lá |
| 4, 11, 14, 33, 34 | "it's" → "its" | grafia do Whisper |
| 14, 23, 28 | "tanbark", "earthmoving", "backcountry" partidos em dois | grafia do Whisper |
| 26 | "regent's" → "regents" | o apóstrofo |
| 14, 27 | "Pfeiffers" → "Pfeifers"; "Gafill" → "Gaffel" | a grafia que o Whisper deu ao nome ouvido; a pronúncia fica para a escuta do Lucas (`roteiros/big-sur/pronuncia.md`) |
| 27 | "fourteenth" → "fourteen" | o Whisper escreve "January 14" para os dois; não se decide pelo ouvido da máquina |
| 21 | "in sight of" → "inside of" | **a frase soa ambígua**: "Everything in sight of those places got a name" pode ser ouvida como "inside of" também por quem assiste. Vai à escuta do Lucas, no minuto 7:45; se ele ouvir "inside", a troca sugerida é "Everything you could see from those places got a name" (o texto aprovado muda, e o parágrafo 21 se refaz com `--refazer=21`, uns 200 créditos) |

## A escuta do Lucas (04/11/2026)

"Todos os audios estão corretos", à mensagem com o MP3 da narração inteira (`out/big-sur/_tmp/narracao-big-sur.mp3`, fora do git), os
minutos dos nomes (`roteiros/big-sur/pronuncia.md`) e o 7:45. Nenhum trecho refeito, nenhum alias; o parágrafo 21 fica como está.

## O master (04/11/2026)

`node out/juneau/_pesquisa/gerar-master.mjs big-sur`: `out/big-sur/_media/_master.mp4` (fora do git), preto 3840×2160 a 30 fps com a
narração, 787,78 s (conferido pelo `ffprobe`).

## O relógio de palavras (ingest, 04/11/2026)

- **1ª rodada** (`_tmp/ingest-1.log`): o `alinhamento-elevenlabs.mjs big-sur` caiu por tempo de conexão (`UND_ERR_CONNECT_TIMEOUT`), e o
  ingest parou sem o alinhamento. Na 2ª tentativa o alinhamento baixou (só GET, sem gasto; `_tmp/alinhamento-1.log`).
- **2ª rodada** (`_tmp/ingest-2.log`, 1.231 s): REPROVADO em dois portões, e o `words.json` não foi gravado. Passaram palavras, duração,
  fora das falas, idioma e cobertura (0,974 a 1,035).
  - `conteudo`: 9 itens, os mesmos da conferência acima (o "1 ,500", "5 ,200" e "1 ,000" do Whisper nos trechos 1, 2, 8 e 35;
    "Pfeiffers", "Gafill", "fourteenth", "category:" e o "in sight" do 21). A escuta do Lucas os cobre: aceitar com
    `--aceitar=1,2,8,14,21,27,31,35`, com `--aceite-por` e `--aceite-como` ("ouvido pelo Lucas, 04/11/2026").
  - os 4 vãos com voz sem vale (171,49; 542,61; 599,35; 717,49): conferir a borda pela energia do som e aceitar com `--aceitar-vaos`,
    `--aceite-por`, `--aceite-como` e a evidência.
  - `relogio`: a pausa 260,66–260,82 s (trecho 13, "Mud Creek wasn't the end of it. Caltrans, California's highway department…") ficou
    indecidida, e aqui a regra ("it. | Caltrans,") e a ElevenLabs ("Caltrans, | California's") **discordam**. O `--aceitar-fronteiras` só
    aceita a proposta comum das duas, então o script não tem aceite para este caso. Próximo passo: medir a energia do som em quadros
    de 20 ms (como no vídeo 3, 18/10/2026), decidir a fronteira e dar ao `ingest-local.py` um aceite para a fronteira em que as duas
    discordam, com prova negativa (ou o caminho que a medida mostrar).
- **A medida no som** (04/11/2026; `_tmp/relogio/conferir-som.py`, log em `_tmp/relogio/conferir-som-1.log`). O método é o dos vídeos 3
  (`peru-agua`) e 4 (`atlantico-fundo`):
  - a energia da `narracao.wav` em quadros de 20 ms, com a razão entre a banda de 3 a 10 kHz e a de menos de 1 kHz;
  - a varredura de corte com o Whisper local (large-v3, `language="en"`, só do cache), em que o recorte que COMEÇA no ponto é o que
    discrimina;
  - recortes fixos de cada lado da borda.

  Ninguém ouviu os vãos nem a pausa: é medida, não escuta.
  - **171,49 ("military | reservation.", fechado em 171,49): certo.**
    - Um vale leve em 171,47 (−24,3 dBFS) separa o "-ry" do /r/. O /z/ de "reser-" está em 171,59–171,63, e o /ʃ/ de "-tion", em
      171,89–171,95.
    - O recorte que começa em 171,49 ouve "reservation."; o que começa em 171,64 já não ouve nada dele.
    - O que termina em 171,44 ouve "military."; o que termina em 171,59 ouve "military reservoir".
    - A troca fica entre 171,44 e 171,49: a borda erra no máximo 0,05 s.
  - **542,61 ("the | road,", fechado em 542,915): errado.**
    - O "the" está em 542,51–542,57 (−20 a −23 dBFS). A voz sobe em 542,59 e fica forte até 542,87 (−13 a −18 dBFS): é a vogal do
      "road". A oclusão do /d/ está em 542,89–542,91, a soltura em 542,93, e o silêncio começa em 542,99.
    - O recorte que começa em 542,61 ouve "road"; o que começa em 542,66 já o perdeu ("and who").
    - O recorte 542,61–543,01 ouve "road."; o de 542,915 a 543,01 ouve "God bless you", uma invenção do Whisper. O que termina em
      542,915 já ouve "from the road".
    - Fechado em 542,915, o "road," fica com 0,075 s, e uns 0,3 s dele vão para o "the". A borda certa é o começo do vão, 542,61
      (erro de até 0,02 s). **Não aceitei este vão.**
  - **599,35 ("the | community", fechado em 599,35): certo.**
    - O "the" termina em 599,27. A oclusão do /k/ está em 599,29–599,31 (−40 dBFS), e a explosão, em 599,33–599,37 (razão de bandas
      de +9 a +12 dB).
    - O recorte que começa em 599,30 ouve "community."; o que começa em 599,45 já não.
    - O que termina em 599,35 ouve só "and the"; o que termina em 599,40 já ouve "the community".
    - A borda erra no máximo 0,05 s.
  - **717,49 ("the | homes,", fechado em 717,49): certo.**
    - O "the" está em 717,35–717,45. A voz sobe em 717,47; o /m/ está em 717,69, e o /z/, em 717,83–717,95 (razão de bandas até
      +28 dB). O silêncio começa em 717,97.
    - O recorte que começa em 717,49 ouve "Holmes", a grafia do Whisper para "homes"; o que começa em 717,69 já não.
    - O que termina em 717,44 ouve "Count the"; o que termina em 717,49 já ouve "homing".
    - A borda erra no máximo 0,05 s.
  - **A pausa 260,66–260,82 (trecho 13): o som confirma a ElevenLabs, "Caltrans, | California's".**
    - O "it." termina com o /t/ em 259,44–259,48. Vem o silêncio da âncora já decidida, 259,50–259,96 (−54 a −88 dBFS).
    - O /k/ de "Caltrans" explode em 259,98–260,02; o /tr/ está em 260,20–260,26, e o /s/ final, em 260,54–260,64.
    - Vem o silêncio da pausa em disputa, 260,68–260,78 (−68 a −87 dBFS), e o /k/ de "California's" explode em 260,80.
    - O recorte só do som entre as duas pausas (259,97–260,68) ouve "Caltrans". O de 260,78 a 261,60 ouve "California's high".
    - A proposta da regra, "it. | Caltrans,", é a mesma fronteira da âncora 259,49–259,99, e deixaria o "Caltrans" sem palavra.
    - A regra errou porque o Whisper põe o "Caltrans" em 260,38–260,86, por cima da pausa.
- **A mudança no script** (`out/juneau/_pesquisa/ingest-local.py`, sha256 `090458f014d9`; a cópia de antes, `2fea9a956c23`, está em
  `ingest-local.py.antes-fronteira-divergente-2026-11-04`).
  - A opção nova é `--aceitar-fronteira-divergente=<início>:<lado>`, com o lado `regra` ou `elevenlabs` (ex.: `260.66:elevenlabs`).
    Ela só vale na pausa indecidida em que as duas propostas discordam e o ouvido não desempatou.
  - A disciplina é a do `--aceitar-fronteiras`:
    - a pausa tem de estar indecidida, idêntica, no laudo anterior do mesmo áudio;
    - `--aceite-por` e `--aceite-como` são obrigatórios;
    - o aceite vai ao `aceites_fronteiras`, com o lado e as duas propostas, e é herdado pela pausa idêntica.
  - A fronteira aceita é a proposta do lado nomeado, nunca uma terceira. Ela ainda passa pela montagem: se cair na fronteira da pausa
    anterior, o aceite sai recusado.
  - No portão `relogio`, ela sai "aceita", contada à parte das aceitas pela proposta comum. O topo do script documenta a opção.
  - **Ela só soma.** Sem a opção, o script novo e o antigo, rodados do mesmo cache, dão o mesmo laudo, campo a campo, e o mesmo
    `transcript.txt` (`_tmp/relogio/eq-antigo/` e `eq-novo/`, comparados por `_tmp/relogio/comparar-laudos.py`). A única diferença é
    uma dica nova na linha do portão `relogio`: o comando, quando a pausa indecidida tem duas propostas diferentes. O antigo, rodado
    agora, também reproduz a 2ª rodada: fora os caminhos do script e da saída, nenhuma diferença.
- **A prova negativa**, em pastas de teste (`_tmp/relogio/teste-*`; logs `prova-negativa-bc.log`, `prova-negativa-a.log` e
  `prova-heranca.log`):
  - (a) a pausa não estava pendente no laudo anterior:
    - sem laudo anterior (`teste-a1`): recusado, "a fronteira nasceu ou mudou nesta rodada";
    - com o laudo anterior de outro áudio (o sha256 trocado numa cópia, `teste-a2`): recusado, com o mesmo motivo;
    - numa pausa que não estava indecidida (23,32, "conferida", `teste-a3`): um aviso, e nada aceito.
  - (b) o lado não existe: `260.66:whisper`, `260.66:ouvido`, a pausa sem lado, dois lados na mesma pausa, e a mesma pausa também
    em `--aceitar-fronteiras`. Os cinco saem com código 2, sem gravar nada.
  - (c) falta `--aceite-por`, ou `--aceite-como`, ou o `--aceite-por` vem em branco: código 2, sem gravar nada.
  - (d) o lado `regra` nesta pausa (`teste-d`): passa pela pendência, mas a montagem o recusa ("o lado regra põe esta pausa em 'it. |
    Caltrans,', que a montagem recusa").
  - O controle (`teste-ok`): o lado `elevenlabs`, com o laudo da 2ª rodada, sai "aceita". Rodado de novo sem a opção, ele vem herdado.
  - Depois dos testes, o cache do Whisper (`_narracao/whisper.json`) voltou ao da 2ª rodada (sha256 `39ed2e5fc3a2`).
- **3ª rodada** (`_tmp/ingest-3.log`, 6 s, tudo do cache): o conteúdo, aceito em nome do Lucas, com `--aceitar=1,2,8,14,21,27,31,35
  --aceite-por="Lucas Rosa, de ouvido (o aceite rodado pela Sala)"` e a frase dele no `--aceite-como`. O portão `conteudo` passou,
  com os 9 itens aceitos um a um. O `relogio` continuou reprovado.
- **4ª rodada** (`_tmp/ingest-4.log`, 3 s): o aceite da Sala, pela medida no som. A opção foi `--aceitar-vaos=171.49,599.35,717.49
  --aceitar-fronteira-divergente=260.66:elevenlabs`, com `--aceite-por`, `--aceite-como` e `--aceite-evidencia` (o log da medida e
  este relato). Os 9 itens de conteúdo vieram herdados, e os 3 vãos e a fronteira saíram aceitos. Foram duas rodadas para que o laudo
  diga quem aceitou o quê: o Lucas, o conteúdo; a Sala, os vãos e a fronteira.
- **O resultado: REPROVADO, 6 de 7 portões, e o `words.json` não foi gravado.** Falta só o vão 542,61, cuja borda o som desmente. O
  `mapa-limpo --conferir` não rodou, porque não há `words.json`.
- **O que falta decidir: o vão 542,61.**
  - Por que ele fechou no lugar errado:
    - O script só aceita um vão na borda em que ele fechou, e aqui essa borda está errada.
    - O ouvido não escolheu a borda porque o recorte curto ouviu "the road" duas vezes ("from the road and who the road was for"), e o
      `julgar_vao_pelo_ouvido` pede o par uma vez só.
    - Por isso o vão fechou no quadro mais quieto, que é a oclusão do /d/ do próprio "road".
  - Dois caminhos:
    1. Um aceite que feche o vão numa das duas bordas, nunca noutro ponto (por exemplo, `--aceitar-vao-na-borda=542.61:inicio`), com
       a mesma disciplina e prova negativa. A rodada seguinte leva segundos e herda os outros 13 aceites.
    2. Ensinar o ouvido a escolher o par mais perto do vão. Isso muda um caminho de hoje e pede refazer a comparação de laudos dos
       vídeos anteriores.
- Depois do `words.json`: o `regie open big-sur`.
- **A decisão da Sala (04/11/2026): o caminho 1.** O `regie open big-sur` a Sala já fez.
- **A mudança no script** (`out/juneau/_pesquisa/ingest-local.py`, sha256 `e542512e3613`; a cópia de antes, `090458f014d9`, está em
  `ingest-local.py.antes-vao-na-borda-2026-11-04`).
  - A opção nova é `--aceitar-vao-na-borda=<início do vão>:<inicio|fim>`. Ela fecha o vão pendente numa das duas pontas dele:
    `inicio` (v0: a voz do vão é da 2ª palavra) ou `fim` (v1: é da 1ª). Nunca noutro ponto.
  - O vão se reconhece pelo fechamento de hoje, a chave que o laudo anterior mostrava pendente. Só depois ele fecha na borda escolhida.
  - A disciplina é a dos outros aceites:
    - só vale para o vão idêntico que o laudo anterior do mesmo áudio mostrava pendente;
    - `--aceite-por` e `--aceite-como` são obrigatórios;
    - o aceite vai ao `aceites_vaos`, com a `borda` e o `fechado_antes_em`, e é herdado pelo vão idêntico.
  - Mais duas travas:
    - a borda que deixaria uma das duas palavras com duração ≤ 0, ou abaixo do piso de 0,02 s da montagem, é recusada
      (`fechar_vao_na_borda`, função pura);
    - um aceite de `--aceitar-vaos` nunca herda um aceite na borda, porque daria por certo o fechamento que o som desmentiu.
  - O topo do script documenta a opção.
  - **Ela só soma.** Sem a opção, o script de antes e o novo dão o mesmo laudo, campo a campo, e o mesmo `transcript.txt`, em dois
    cenários: sem laudo anterior e com o laudo da 4ª rodada (as heranças de conteúdo, vãos e fronteira). Mudam só o caminho e o sha256
    do script e o caminho da saída. A saída do terminal também é idêntica (`_tmp/relogio/eq2-*`).
- **A prova negativa** (`_tmp/relogio/prova-borda.log`, `prova-borda-duracao.log`; pastas `_tmp/relogio/teste-b-*`):
  - **Um vão que não estava pendente:**
    - sem laudo anterior (`teste-b-a1`): recusado, "o vão nasceu ou mudou nesta rodada";
    - com o laudo da 4ª rodada, o 171,49, já aceito no fechamento de hoje (`teste-b-a2`): recusado do mesmo jeito, e o aceite antigo
      dele continua valendo;
    - o 52,55, que tem vale no som e não pede aceite (`teste-b-a3`): um aviso, e nada aceito.
  - **Uma borda inexistente:** `542.61:meio`, `542.61:v0` e a borda em branco saem com código 2, sem gravar nada. Saem também duas
    bordas no mesmo vão e o mesmo vão em `--aceitar-vaos`.
  - **Sem `--aceite-por`:** código 2. Também sem `--aceite-como`, e com o `--aceite-por` em branco.
  - **A borda que deixaria palavra com duração ≤ 0:**
    - pela função pura (`_tmp/relogio/testar-borda.py`), 8 de 8 casos certos: recusa a duração 0, a negativa e os 0,01 s, e aceita
      os 0,02 s do piso e as duas bordas do vão de verdade;
    - numa rodada inteira (`testar-borda-fluxo.py`, `teste-b-dur`), com a função recebendo a 1ª palavra no próprio início do vão:
      recusado, o vão continua pendente, e o laudo sai REPROVADO;
    - na montagem de hoje o caso não acontece: o piso de 0,02 s já vale antes do fechamento, e as duas pontas do vão não encolhem as
      palavras. A trava é defensiva.
  - **O controle e a herança** (`teste-b-ok`): com o laudo da 4ª rodada, `542.61:inicio` sai APROVADO. Rodado de novo sem nenhuma
    opção, sai APROVADO com o vão herdado.
  - Depois dos testes, o cache do Whisper voltou ao da 4ª rodada.
- **5ª rodada** (`_tmp/ingest-5.log`, 3 s): `--aceitar-vao-na-borda=542.61:inicio --aceite-por="a Sala, pela energia em 20 ms e pelo
  recorte do faster-whisper"`, com a medida no `--aceite-como` e a evidência em `_tmp/relogio/conferir-som-1.log`.
  - Vieram herdados os 13 aceites de antes: 9 de conteúdo, 3 vãos e a fronteira 260,66.
  - **APROVADO, 7 de 7:** palavras, duração, fora das falas, idioma, cobertura, conteúdo e relógio.
- **O resultado, no disco:**
  - `out/big-sur/words.json`: 2.300 palavras (o `contarPalavras` dá 2.300), sha256 `f6055f41300dec2b4d5d948597b578ff872af9a921ed9f645066c3681a02eb4e`;
  - o laudo `out/big-sur/transcricao.json` APROVADO, sha256 `53e5eb55572f`;
  - a `narracao.wav` intocada (`14c53e752758`);
  - contra a 4ª rodada, só mudaram duas palavras: o "the" passou de 542,53–542,915 a 542,53–542,61, e o "road," de 542,915–542,99
    (0,075 s) a 542,61–542,99 (0,38 s);
  - o "Caltrans," está em 259,99–260,66 e o "California's" em 260,82–261,45.
- **O `mapa-limpo --conferir`** (`REGIE_MOTOR=C:/projetos/regie-v1 node scripts/mapa-limpo.mjs big-sur --conferir`,
  `_tmp/mapa-limpo-1.log`): sai 0.
  - O `words.json` é deste `narracao.wav` (o sha256 confere).
  - O fim da fala (767,57 s) casa com o fim do áudio (787,78 s).
  - A densidade é uniforme: nenhuma janela de 20 s tem menos de 12 palavras.
- **Uma observação, fora deste vão:** no trecho 33, o "coast" ficou com 0,02 s (710,31–710,33).
  - O relógio ali é o da ElevenLabs puro, sem âncora até 712,25. Ela dá 0,02 s ao "coast", 0,04 s ao "is" (710,33–710,37) e
    0,78 s ao "depends" (710,45–711,23).
  - O Whisper ouve "coast" em 710,28–710,56, "is" em 710,56–710,84 e "depends" em 710,84–711,16.
  - Os portões aprovam (o maior desvio ali é 0,39 s, abaixo do teto de 1,0 s), e já era assim nas rodadas de antes.
  - Não medi no som. Só importa se uma cena se prender a uma palavra de "how empty this coast is depends" (709,4–711,2 s).
