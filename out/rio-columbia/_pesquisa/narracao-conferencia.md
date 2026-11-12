# Rio Columbia (`rio-columbia`, o vídeo 7): a narração e a conferência

Feita pela Sala de controle na noite de 11 para 12/11/2026, depois de o roteiro ser aprovado pelos conferentes, por decisão do Lucas
(12/11/2026, ~01:2x: "Ou seja, dessa vez vamos ignorar a minha aprovação. Se os céticos aprovarem, pode prosseguir";
`roteiros/rio-columbia/decisoes-lucas.md`).

## Sem amostra de pronúncia

Não houve amostra antes da narração. Pela política de `marca/pronuncias.md`, um nome só ganha grafia de apoio (alias) depois de o Lucas o
ouvir errado, e esta noite ele não podia ouvir. A narração foi **sem alias**, como no Cassino, e a escuta dele vem depois, com a lista
abaixo. Parágrafo que soar errado se refaz sozinho (`narrar.mjs rio-columbia --refazer=N`), a custo baixo.

## A narração (12/11/2026)

- **O texto:** a cópia para a voz `out/rio-columbia/roteiro.md` (44 parágrafos, 15.406 caracteres, sem alias), feita por
  `roteiros/rio-columbia/_ferramentas/preparar-voz.mjs` sobre o roteiro aprovado `c4788c7ab3be` (`gate.mjs --derivados` sai 0).
- **A rodada:** `node C:/projetos/regie-v1/src/ferramentas/narrar.mjs rio-columbia`, depois do `--simular`. Foi um pedido por parágrafo,
  com o `canal.json` › `narracao` (eleven_v4, a voz `829pig94w9GefZ9jJQYl`, pcm_44100). O log está em `out/rio-columbia/_tmp/narrar-1.log`.
- **O gasto:** **7.417 créditos**, a soma do `character-cost` dos 44 pedidos (`out/rio-columbia/narracao.json` › `custo`), para 15.406
  caracteres: 0,48 crédito por caractere, o preço de 03/11. É o gasto inteiro do vídeo até aqui, dentro dos 15.000 que a autonomia dá.
- **O tratamento:** `python -X utf8 -B out/juneau/_pesquisa/tratar-narracao.py rio-columbia`:
  - 44 trechos esmaecidos e nenhum som solto;
  - a cauda de 20 s da tela final (907,95 → 927,95 s);
  - sha256 `91a489d89d9b` → `a42b283a7504`.

  A fala dura 15:08, e o vídeo, com a cauda, 15:28.

## A conferência (o ouvido da máquina)

`python -X utf8 -B out/juneau/_pesquisa/conferir-paragrafos.py rio-columbia` usa o faster-whisper large-v3 local, trecho por trecho. O
laudo está em `out/rio-columbia/_narracao/conferencia-paragrafos.json`, fora do git, e o log em `_tmp/conferir-1.log`.

- **Nenhum parágrafo parou antes do fim**, e nenhuma palavra foi pulada.
- A cobertura vai de 94,1 % a 100 % (34 dos 44 trechos com 100 %).
- O silêncio mediano dos trechos é 0,04 s no começo e 0,17 s no fim.

Os 5 trechos marcados "CONFERIR" e as outras diferenças:

| Trecho | O que o Whisper marcou | O que é |
|---|---|---|
| 6, 20, 32, 36, 39 | "it's" → "its" | grafia do Whisper |
| 13; 14 | "sites" → "sights"; "service's" → "services" | grafia do Whisper |
| 21 | "thousand" → "zero" (5 vezes) | o Whisper escreveu 450,000, 650,000 e 600,000 em algarismo; a palavra está lá |
| 25 | "dollars" a mais (3 vezes) | o Whisper escreveu "$4 to $34 million" e afins; a normalização do "$" soma a palavra |
| 33 | "thousand" pulado | o Whisper escreveu "2,300" em algarismo |
| **34** | **"Sinixt" → "cynicst" (2 vezes)** | **a voz deve ter dito "SIN-ikst"; a referência é "sin-AYKST" (`pronuncia.md`). É o ponto para o ouvido do Lucas** |

## A escuta do Lucas: onde cada nome de risco cai

O minuto é estimado pela posição do nome no trecho (`out/rio-columbia/_pesquisa/lista-escuta.py`), e erra por alguns segundos.

| Nome | Risco | Onde (trecho, minuto aproximado) |
|---|---|---|
| Sinixt | alto (o Whisper ouviu "cynicst") | 34 (11:51), 34 (12:03) |
| The Dalles | alto (o certo é "DALZ") | 9 (2:25), 9 (2:41), 21 (6:50), 22 (7:30), 28 (9:52) |
| Renata | médio | 33 (11:29) |
| Grand Coulee | médio | 35 (12:11) |
| Oregon | baixo a médio | 7 (1:19), 9 (2:27), 12 (3:34) |
| acre-foot / acre-feet | baixo a médio | 23 (7:57), 23 (8:01) |
| U.S. | baixo | 12 (3:42), 14 (4:20), 21 (7:13) |
| Vanport | baixo | 12 (3:31), 12 (3:34) |

**Se o Lucas ouvir um nome errado:** o alias entra em `roteiros/rio-columbia/_ferramentas/preparar-voz.mjs` (`ALIASES`, com o motivo e a
fala dele). Depois, refaz-se a cópia, roda-se `gate.mjs --derivados` e `narrar.mjs rio-columbia --refazer=<trechos>`, e então o tratamento e
a conferência. Só o trecho 34 custa uns 160 créditos.

**Com o "tudo certo" dele** vêm o master (`node out/juneau/_pesquisa/gerar-master.mjs rio-columbia`), o ingest
(`python out/juneau/_pesquisa/ingest-local.py rio-columbia`) e `regie open rio-columbia "Why the U.S. Pays Canada to Keep Part of a Lake
Empty"`. A escuta antes do master é obrigatória (`sala/narracao.md`: a repetição da voz só o ouvido humano pega).

## A escuta do Lucas (12/11/2026)

- Às ~07:4x, ele pediu: "Me mande os áudios aqui". A Sala mandou o MP3 inteiro (`_tmp/narracao-rio-columbia.mp3`) e 7 trechos curtos,
  cortados da `narracao.wav` sem gasto (`_tmp/escuta/`, fora do git), cada um com o parágrafo inteiro de um nome de risco: Sinixt
  (trecho 34), The Dalles (9, 21, 22 e 28), Renata (33) e Grand Coulee (35).
- Às ~07:5x, a resposta dele: **"Tudo correto"**. A narração está aprovada de ouvido, sem alias. O "cynicst" do trecho 34 é a grafia
  do Whisper, e o Lucas ouviu o trecho.
- Logo depois, ele respondeu às três perguntas da Sala (`roteiros/rio-columbia/decisoes-lucas.md`): o MapTiler com o relevo 3D, a
  lista de caça e a frase "What the United States is buying is certainty." (trecho 26), que fica.
- Em seguida: o master, o `ingest` (o `words.json`) e o `regie open`.

## O relógio de palavras (ingest, 12/11/2026)

- **O alinhamento da ElevenLabs.** A 1ª rodada do ingest (`_tmp/ingest-1.log`) parou sem ele. Rodou-se
  `node out/juneau/_pesquisa/alinhamento-elevenlabs.mjs rio-columbia`, só GET no histórico, sem gasto (`_tmp/alinhamento-1.log`):
  - os 44 itens casados pelo `request_id`;
  - o texto do alinhamento igual ao aprovado nos 44;
  - 2.746 palavras.

  O alinhamento mede 0,08 s a mais que o PCM em cada trecho, e a ponta foi limitada ao fim do segmento.
- **2ª rodada** (`_tmp/ingest-2.log`, 1.264 s): REPROVADO em dois portões, sem `words.json`. Passaram palavras, duração, fora das
  falas, idioma e cobertura (1,000 a 1,036).
  - `conteudo`: 12 itens nos trechos 1, 21, 25, 33 e 34. São o "–" no lugar dos dois-pontos (t1), os números em algarismo (t21, t25
    e t33) e o "Cynicst" (t34).
  - `relogio`: 4 vãos com voz sem vale (19,97, 272,26, 373,75 e 669,15), todos fechados na borda de início.
- **3ª rodada** (`_tmp/ingest-3.log`): `--aceitar=1,21,25,33,34`, por Lucas Rosa (a escuta) e pela Sala (a leitura do laudo).
  - O Lucas ouviu os trechos 21, 33 e 34 nos clipes 3, 6 e 1, e recebeu também o MP3 inteiro.
  - t1 e t25 são grafia do Whisper, e o recorte curto ouviu o roteiro.
- **A medida no som** (`_tmp/relogio/conferir-som.py`, derivado do do Big Sur, com os vãos lidos do laudo; o log está em
  `_tmp/relogio/conferir-som-1.log`). O método junta a energia em quadros de 20 ms, com a razão entre as bandas, e a varredura de
  corte com o Whisper local. Ninguém ouviu os vãos: é medida, não escuta.
  - **19,97 ("mostly | American:"): certo.**
    - O chiado de 19,73–19,81 é o /s/ de "mostly", e a queda em 19,83 é o /t/. O "-ly" vai até 19,97.
    - O recorte que termina em 19,97 ouve só "mostly.", e o que termina em 20,02 já ouve "mostly a".
    - A troca de palavra fica entre 19,97 e 20,02.
  - **272,26 ("countries' | leaders"): certo.**
    - A energia cai em 272,18–272,24 (−21 a −27 dBFS), entre o fim de "countries'" e a voz do vão.
    - O recorte que termina em 272,26 ouve só "countries". O que começa em 272,31 ainda ouve "leaders", e o que começa em 272,36
      já não.
  - **373,75 ("It's | insurance."): certo.**
    - O /s/ de "It's" está em 373,69–373,71, o "in-" começa em 373,73, e o /ʃ/ fica em 373,83–373,91.
    - O recorte que começa em 373,65 ouve "its insurance", e o que começa em 373,70 ouve só "insurance".
  - **669,15 ("By | summer,"): certo para o vão, com 0,1 s a mais no "By".**
    - O "By" está em 668,93–669,03. O /s/ de "summer" começa em 669,05 (a razão de bandas fica em +21 a +29 dB até 669,15), e a voz
      do vão é o "-ummer".
    - O vão é todo do "summer", e fechá-lo no começo está certo.
    - O fim do "By" no relógio (669,15) leva o /s/, uns 0,10 s, dentro da tolerância de 0,25 s do consumidor.
- **4ª rodada** (`_tmp/ingest-4.log`): `--aceitar-vaos=19.97,272.26,373.75,669.15`, pela Sala, com a medida acima. Os 12 itens de
  conteúdo foram herdados da 3ª. **APROVADO, 7 de 7 portões.**
  - O `words.json` tem 2.746 palavras (sha256 `04692a8f…`), e o laudo é o `transcricao.json` (sha256 `755a8def…`).
  - A última palavra termina em 907,76 s, e a cauda vai até 927,95 s.
  - O `mapa-limpo --conferir` sai 0.

## A regravação dos trechos 8, 25 e 33 (12/11/2026, depois do research)

- **Por quê:** a pesquisa leu as fontes originais, e o verificador de fatos achou três frases que elas não sustentavam: o p8 ("the whole
  basin": a medida dá ~51 % na bacia toda e ~59–60 % na parte canadense), o p25 ("a year" e "which is per year": o estudo da BC de
  25/06/2013, p. 11, diz "(in a Called Upon year)") e o p33 ("a town": sob o lago do tratado ficou Boat Encampment, um povoado). Os laudos
  são `roteiros/rio-columbia/qc-roteiro/divergencias-research-antigo.laudo.md` e `mica-koocanusa-antigo.laudo.md`. O Lucas, no chat da
  Sala: "Regravar os dois (Recomendado)" (~12:1x) e "Regravar com "settlement" (Recomendado)" (~12:2x). O roteiro passou a `955d5210c444`.
- **A rodada:** `narrar.mjs rio-columbia`, depois do `--simular`: 3 pedidos (os trechos 8, 25 e 33), 1.453 caracteres, **700 créditos**
  (197 + 248 + 255, o `characterCost` de cada um no `narracao.json`). Os outros 41 trechos vieram do cache, iguais byte a byte. O vídeo
  soma **8.117 créditos** da ElevenLabs, dentro dos 15.000 da autonomia. O log está em `_tmp/narrar-2.log`.
- **O tratamento:** `tratar-narracao.py` de novo (`_tmp/tratar-2.log`): a `narracao.wav` passou a `cfbb7c8e33ae`, com 909,95 s de fala e
  929,95 s com a cauda (2,0 s a mais que a de manhã). O p8 ficou com a mesma duração (25,68 s); o p25 e o p33 cresceram.
- **A conferência da máquina** (`conferir-paragrafos.py`, `_tmp/conferir-2.log`): os três trechos com as palavras novas certas ("those
  mountains", "in any year it calls", "for a single year of calls", "a settlement", "Renata"), cobertura de 100 %, 100 % e 98,8 %. As
  diferenças são grafia do Whisper: os "dollars" a mais do trecho 25 (ele escreve "$4") e o "thousand" do 33 (ele escreve "2,300").
- **A escuta do Lucas:** os 3 clipes, cortados sem gasto em `_tmp/escuta-2/` (fora do git), foram a ele às ~12:3x e de novo às ~14:0x
  (ele perguntou "Onde estão os áudios"). A resposta, às ~14:03: **"Tudo certo"**.
- **O master novo:** `node out/juneau/_pesquisa/gerar-master.mjs rio-columbia` (`_tmp/master-2.log`): `_media/_master.mp4`, preto
  3840×2160 a 30 fps com a narração, 929,95 s, o carimbo `cfbb7c8e33ae`.

## O relógio de palavras, de novo (12/11/2026, ~14:1x)

O narrar tirou do lugar o relógio da manhã (`words.json`, `transcricao.json` e `transcript.txt` em `*.obsoleto-20261112T152340Z`), e
os aceites da manhã não passam de um áudio a outro (o `ingest-local.py` só herda aceite do mesmo sha256). O relógio se refez assim:

- **O alinhamento da ElevenLabs** (`node out/juneau/_pesquisa/alinhamento-elevenlabs.mjs rio-columbia`, só GET; `_tmp/alinhamento-2.log`):
  44 de 44 itens casados pelo `request_id`, o texto igual ao aprovado nos 44, 2.750 palavras.
- **5ª rodada** (`_tmp/ingest-5.log`): REPROVADO, com os mesmos pendentes da manhã. Os 12 itens de conteúdo (t1, t21, t25, t33 e t34) e
  os 4 vãos com voz sem vale. Três vãos caem no mesmo lugar de manhã (19,97, 272,26 e 373,75), porque o p8 manteve a duração; o do
  trecho 32 andou de 669,15 para 670,91 (+1,76 s, o p25 mais longo).
- **6ª rodada** (`_tmp/ingest-6.log`): `--aceitar=1,21,25,33,34`, por Lucas Rosa (a escuta) e pela Sala (a leitura do laudo). O t25 e o
  t33 são os trechos novos, que o Lucas ouviu às ~14:03; o t1, o t21 e o t34 são os mesmos itens, no mesmo áudio, que ele ouviu de manhã.
  O t1, o t21, o t25 e o t33 são grafia do Whisper; o t34 é a pronúncia de "Sinixt" que ele aprovou.
- **A medida no som** (`_tmp/relogio/conferir-som.py`, o mesmo de manhã; o log está em `_tmp/relogio/conferir-som-2.log`). Ninguém ouviu
  os vãos: é medida, não escuta.
  - **19,97, 272,26 e 373,75:** a medida saiu idêntica, linha a linha, à da manhã (`conferir-som-1.log`): a energia em quadros de 20 ms e
    as transcrições dos recortes. Os trechos 2, 15 e 20 vieram do cache do narrar, iguais, e caem no mesmo lugar.
  - **670,91 ("By | summer,", o trecho 32):** é o vão de 669,15 da manhã, 1,76 s depois. Somados os 1,76 s aos tempos da manhã, 66 das 67
    linhas da medida saem iguais. A diferente é a transcrição do recorte que começa em 670,96: de manhã o Whisper ouviu só "summer.";
    agora, "summer," e mais quatro palavras grudadas no fim do recorte, com duração zero. A primeira palavra é a mesma, e é ela que decide:
    a voz do vão é do "summer", e fechá-lo no começo está certo, como de manhã (com os 0,1 s a mais no "By", dentro da tolerância).
- **7ª rodada** (`_tmp/ingest-7.log`): `--aceitar-vaos=19.97,272.26,373.75,670.91`, pela Sala, com a medida acima. Os 12 itens de
  conteúdo foram herdados da 6ª. **APROVADO, 7 de 7 portões.**
  - O `words.json` tem 2.750 palavras (sha256 `be4b6460…`), e o laudo é o `transcricao.json` (sha256 `1de6f515…`).
  - A última palavra termina em 909,76 s, e a cauda vai até 929,95 s.
  - O `mapa-limpo --conferir` sai 0 (`_tmp/mapa-limpo-2.txt`).
