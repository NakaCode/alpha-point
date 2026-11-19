# Os bichos venenosos da Austrália (`australia-animais`, o vídeo 8): a narração e a conferência

Feita pela Sala de controle na noite de 18/11/2026, depois do sim do Lucas ao roteiro (~21:2x, à pergunta do roteiro: "Pode seguir
(Recomendado)"; a opção dizia: "Faço a cópia para a voz e as pronúncias e narro na ElevenLabs (uns 7.500 créditos, dentro dos 15 mil
por vídeo que você liberou). Depois sigo a linha até a próxima coisa que é sua."; `roteiros/australia-animais/decisoes-lucas.md`).

## Sem amostra de pronúncia

Não houve amostra antes da narração. A folha (`roteiros/australia-animais/pronuncia.md`) propõe uma de 10 linhas (uns 760 créditos), e
ela não foi gerada. Pela política de `marca/pronuncias.md`, um nome só ganha grafia de apoio (alias) depois de o Lucas o ouvir errado. A
narração foi **sem alias**, como nos vídeos 6 e 7: ela mesma é a amostra, e a escuta do Lucas vem com a lista abaixo. Parágrafo que soar
errado se refaz sozinho (`narrar.mjs australia-animais --refazer=N`), a custo baixo (de 40 a 300 créditos por trecho).

## A narração (18/11/2026)

- **O texto:** a cópia para a voz `out/australia-animais/roteiro.md` (60 parágrafos, 15.917 caracteres nos pedidos, sem alias), feita por
  `roteiros/australia-animais/_ferramentas/preparar-voz.mjs` sobre o roteiro aprovado `bfd94a54b442` (`26c384b`; `gate.mjs --derivados`
  sai 0).
- **A rodada:** `node C:/projetos/regie-v1/src/ferramentas/narrar.mjs australia-animais`, depois do `--simular` (60 pedidos, 15.917
  caracteres), das 21:40 às 21:45. Foi um pedido por parágrafo, com o `canal.json` › `narracao` (eleven_v4, a voz `829pig94w9GefZ9jJQYl`,
  pcm_44100). O log está em `out/australia-animais/_tmp/narrar-1.log`.
- **O trecho 20 refeito** (21:59, log `_tmp/narrar-2.log`; abaixo, em "A conferência"): `--refazer=20`, 256 caracteres.
- **O gasto:** **7.786 créditos** no vídeo inteiro até aqui: 7.663 na rodada inteira (a soma do `character-cost` dos 60 pedidos, 0,48
  crédito por caractere, o preço de 03/11) e 123 no trecho 20 refeito (o recibo `278ca9afc93adb4d25e2.json`). O `narracao.json` › `custo`
  soma só os recibos em uso (7.663, com o 20 novo no lugar do antigo); o pago de fato é a soma das duas rodadas. Dentro dos 15.000 da
  autonomia.
- **O tratamento:** `python -X utf8 -B out/juneau/_pesquisa/tratar-narracao.py australia-animais`, depois de cada rodada:
  - 60 trechos esmaecidos e nenhum som solto;
  - a cauda de 20 s da tela final (961,87 → 981,87 s);
  - sha256 da narração final `ae9fc3249930` (a do narrar, `3202d7db4b22`).

  A fala dura **16:02** (2.711 palavras: ~169 palavras/min contando as pausas entre parágrafos; o portão estima 15,15 min a 179), e o
  vídeo, com a cauda, **16:22**.

## A conferência (o ouvido da máquina)

`python -X utf8 -B out/juneau/_pesquisa/conferir-paragrafos.py australia-animais` usa o faster-whisper large-v3 local, trecho por trecho.
O laudo está em `out/australia-animais/_narracao/conferencia-paragrafos.json`, fora do git.

**A 1ª conferência** (21:45–21:56, log `_tmp/conferir-1.log`, sobre a 1ª rodada): nenhum parágrafo parou antes do fim, e nenhuma palavra
foi pulada. Dez trechos saíram "CONFERIR"; quase tudo era grafia do Whisper (tabela abaixo). **Um ponto era da voz: os dois "elapids" do
trecho 20** ("by the same count, elapids and vipers…", "In Australia, elapids alone…") saíram "the lapids", e o recorte curto
(`out/australia-animais/_pesquisa/recorte-elapids.py`: o trecho com o tempo de cada palavra e um recorte de ~3,5 s em volta) ouviu "the
lapids" de novo, com 0,68 e 0,98 de probabilidade. Nos trechos 17 e 19, os três "elapids" saem "elapids" (0,84 a 0,96). A voz leu a
mesma palavra de dois jeitos (o certo é "EL-uh-pidz"; no 20, ela parece ter apagado o "e" do começo, "uh-LAP-idz").

A Sala refez só o trecho 20, sem mudar a grafia (não é alias; a v4 lê de novo, com outra semente), e guardou o antigo em
`out/australia-animais/_tmp/refazer-20/antes/` (o recibo, o PCM, a `narracao.json` e a `narracao.wav` tratada de antes). No trecho novo, o
recorte curto ouve **"elapids" nos dois lugares** (0,87 e 1,00), no trecho inteiro e no recorte.

**A 2ª conferência** (sobre a narração final, 22:01–22:12, log `_tmp/conferir-2.log`):
- **nenhum parágrafo parou antes do fim**, e nenhuma palavra foi pulada; o trecho 20 saiu com 100 %;
- a cobertura vai de 91,1 % (o 26, só grafia: "won"/"one", "LD50", "taipans") a 100 % (45 dos 60 trechos);
- o silêncio mediano dos trechos é 0,04 s no começo e 0,18 s no fim;
- os 9 trechos "CONFERIR" que ficam (9, 10, 24, 26, 29, 34, 38, 43 e 50) e as outras diferenças são do Whisper, não da voz:

| Trecho | O que o Whisper marcou | O que é |
|---|---|---|
| 10, 28, 29, 33, 43, 50, 56, 57 | "it's" → "its" | grafia do Whisper |
| 9, 29, 34, 37 | "thousand" → "zero"; "a thousand" → "one zero"; "one" a mais | o Whisper escreveu 12,000, 117,000, 58,000 e "1,000" em algarismo; a palavra está lá |
| 24 | "plains" → "planes" | homófono |
| 26 | "won" → "one"; "LD fifty" → "LD50"; "taipan's" → "taipans" | homófono; grafia (a voz disse as letras e o número); grafia |
| 38 | "antivenom" → "anti venom"; "a" → "one" | grafia; o Whisper escreveu "fewer than 100" em algarismo |
| 43 | "antivenom" → "anti venom" | grafia |
| 52 | "coroners" → "coroner's" | grafia |
| 20 (1ª rodada) | **"elapids" → "the lapids" (2 vezes)** | **da voz: refeito** (acima) |

## A escuta do Lucas: onde cada nome de risco cai

O minuto é estimado pela posição do nome no trecho (`out/australia-animais/_pesquisa/lista-escuta.py`), e erra por alguns segundos. Os
nomes e o risco vêm da folha de pronúncia.

| Nome | Risco | Onde (trecho, minuto aproximado) |
|---|---|---|
| Diamantina | alto (a referência é "dye-uh-man-TEE-nuh", de uma fonte indireta) | 24 (5:38) |
| elapids | alto (o 20 foi refeito; o 19 a 4:16, "Elapids seem…", o recorte curto ouviu "Dilapid": conferir de ouvido) | 17 (3:52), 19 (4:16), 19 (4:30), 20 (4:41), 20 (4:48) |
| taipan / taipans | médio a alto ("TY-pan") | 1 (0:04), 1 (0:11), 19 (4:35), 24 (5:46), 25 (5:57), 26 (6:26), 28 (7:00), 32 (7:40), 32 (7:46), 36 (8:38) |
| LD fifty (LD50) | médio (as letras e o número) | 26 (6:21) |
| Swansea | médio ("SWON-zee") | 11 (2:34) |
| Gondwana | médio ("gond-WAH-nuh") | 14 (3:21) |
| anemones | médio ("uh-NEM-uh-neez") | 8 (1:50) |
| anaphylaxis | baixo a médio | 50 (12:39) |
| Arbuckle | baixo | 11 (2:31), 43 (10:30), 56 (14:21) |
| Channel Country | baixo (o peso de nome) | 29 (7:09), 34 (8:20) |
| Newcastle | baixo | 58 (15:27), 60 (15:49) |
| funnel-web | baixo | 45 (10:47), 47 (11:36), 57 (15:00), 57 (15:03), 58 (15:28), 59 (15:46), 60 (15:50) |

## Depois da escuta

- **Se um nome soar errado:** o alias entra em `roteiros/australia-animais/_ferramentas/preparar-voz.mjs` (`ALIASES`, com a fala do
  Lucas), a cópia sai de novo, o `gate.mjs --derivados`, `narrar.mjs australia-animais --refazer=<trechos>`, o tratamento e a conferência.
- **Com o "tudo certo":** `node out/juneau/_pesquisa/gerar-master.mjs australia-animais`; `node out/juneau/_pesquisa/alinhamento-elevenlabs.mjs
  australia-animais` (só GET); `python -X utf8 -B out/juneau/_pesquisa/ingest-local.py australia-animais`; o `regie open` com o título; e a
  linha segue (o dossiê `roteiros/australia-animais/roteiro-editor.md`, "Para a Sala, antes da regência", diz o que se decide antes: a
  MapTiler deste vídeo pede o ok do Lucas antes da primeira cena de mapa).
- O áudio para a escuta: `out/australia-animais/_tmp/narracao-australia-animais.mp3` (MP3 de 128 kbps da narração tratada, 16:22).
