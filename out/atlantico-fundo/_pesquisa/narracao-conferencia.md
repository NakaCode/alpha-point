# A voz do vídeo 5 (atlantico-fundo): o gasto e a conferência

O registro do que se gastou na ElevenLabs no vídeo 5 e de como cada rodada foi conferida, como o dos vídeos 3 e 4
(`out/peru-agua/_pesquisa/narracao-conferencia.md`). O vídeo 5 é narrado pelo motor sem rosto, com a conta do Top10; o que está
aqui é o que a Sala gastou na conta do canal antes do portão "roteiro" do motor. O saldo se lê antes e depois de cada rodada
(o `amostra-voz.mjs` o lê sozinho, só GET; a chave nunca se imprime).

**28/10/2026: o vídeo sai no motor do canal, não no do Top10** (Lucas, 02:2x: "Vamos continuar esse vídeo com nosso motor. O
Top10 entra no próximo"). Desde 27/10 ele é o vídeo 4 (o Juneau não conta; CLAUDE.md, "A numeração dos vídeos"). A narração
inteira sai daqui, na conta do canal, pelo `narrar.mjs` da pré-v1, sobre a cópia para a voz com os números por extenso
(`out/atlantico-fundo/roteiro.md`), como nos vídeos 1 a 3. O saldo se lê com `out/atlantico-fundo/_pesquisa/saldo-elevenlabs.mjs`
(só GET), em `saldo-narracao.jsonl`.

## A autonomia

- Lucas, 02/10/2026: até 15.000 créditos por vídeo sem pedir ok, do vídeo 2 em diante; do vídeo 3 em diante, de novo com esse teto
  (CLAUDE.md, "A autonomia do vídeo 2 em diante").
- A amostra antes do portão é da Sala: "O gasto e a rodada são da Sala de controle" (`roteiros/atlantico-fundo/pronuncia.md`, "A
  amostra que esta folha pede").

## O gasto

| Quando (Brasília) | Rodada | Saldo antes | Saldo depois | Gasto pelo saldo | Recibos |
|---|---|---|---|---|---|
| 27/10, 00:04–00:06 | a amostra antes do portão, revisão `7b965eecdb7c`: os 14 pedidos de nomes da `pronuncia.md` (12 das frases deles têm algarismo) e as outras 44 frases com algarismo do roteiro (23 pedidos, um por parágrafo), 37 pedidos, 5.856 caracteres, na grafia do roteiro (com algarismos), com os parâmetros do narrador do motor (`estudio/canal-motor.json` › `narracao`: eleven_v4, a voz `829pig94w9GefZ9jJQYl`, stability 0,5, similarity 0,75, `language_code` "en", `pcm_44100`, `/with-timestamps`, sem seed) | 5.396.399 | 5.394.660 | 1.739 | 37 recibos, 2.820 créditos, em `out/atlantico-fundo/_tmp/amostra-voz/recibos.jsonl` |
| 28/10, 02:26–02:29 | a narração inteira, pelo `narrar.mjs` (`narrar-1.log`): a cópia por extenso da revisão `7b965eecdb7c`, 28 pedidos, um por parágrafo, 11.764 caracteres; 694,0 s | 5.388.729 | 5.383.343 | 5.386 | 5.665 (`narracao.json` › `custo.character_cost_total`) |

O v4 cobrou 0,48 crédito por caractere (2.820 por 5.856), como nos vídeos 3 e 4. O contador do saldo anda com atraso (a conta é
compartilhada com outros canais), e a conta do vídeo segue pelos recibos.

**Soma do vídeo até aqui:** 8.485 créditos pelos recibos (2.820 da amostra e 5.665 da narração; teto de 15.000).

## A amostra (27/10/2026)

**Por que na grafia do roteiro, e não na da cópia para a voz.** A folha de pronúncia propunha a amostra com os números já por
extenso. Mas o motor não tem cópia para a voz: o texto do portão é o que a voz lê e o que toda etapa lê como o roteiro
(`out/_maquina/motor-sem-rosto/requisitos.md` §5). A pergunta 12 de lá ("qual texto vai à voz") pedia saber se o v4 lê algarismo
certo, o que o canal nunca tinha provado. Por isso a amostra foi na grafia do roteiro, e cobriu, além dos 14 pedidos de nomes,
todas as frases com algarismo.

**Os arquivos** (fora do git): `out/atlantico-fundo/_tmp/amostra-voz/`, com `plano.json`, um `.wav` e um `.json` por pedido (o
texto, o recibo e os dois alinhamentos da API), `amostra-nomes.mp3` (A01–A14) e `amostra-numeros.mp3` (os B). Os scripts:
`amostra-voz.mjs` (gera), `amostra-voz-conferir.py` (os números) e `amostra-voz-palavras.py` (as palavras), nesta pasta.

**A API não reescreve o texto:** o `normalized_alignment` que ela devolve é igual ao texto pedido nos 37. Quem lê o algarismo é o
próprio v4.

## A conferência

- **Os números** (`amostra-voz-conferir.py`; o faster-whisper large-v3 local, com os tokens de algarismo suprimidos, escreve o
  número como a voz o disse). Na 1ª passada, 58 de 66 algarismos saíram numa leitura certa. Os 8 que faltaram eram meses com ano
  ("In October 1918", "In December 2018", "As of October 2026", "In August 2026"), "a 2025 study", "between 1381 and 1391" e
  "Seabed 2030". Ali o Whisper pulou o número que queria escrever em algarismo ("a a study", "between That's"). Recortado o áudio
  da palavra de antes à de depois, os 8 saíram certos: "nineteen eighteen", "twenty eighteen", "twenty twenty-six" (duas vezes),
  "twenty twenty-five", "twenty thirty" e **"thirteen eighty-one" e "thirteen ninety-one", lidos como anos, e não como
  quantidade**. Também "magnitude seven point one" e "the nineteen sixty-four crew". **66 de 66.**
- **As palavras** (`amostra-voz-palavras.py`, a transcrição normal): 1.034 de 1.041 palavras iguais ao texto (99,3 %). Nenhuma
  palavra pulada nem repetida. O "floor by by" e o "a a study" da 1ª conferência eram da supressão, não da voz. As 7 diferenças
  são do transcritor:
  - "rode" → "rowed" e "crew's" → "cruise" (homófonos; "the 1964 crew's fish" soa /kruːz/, e o contexto o paga);
  - "multibeam" → "multi beam" (2), e "cusk-eel" → "cusqueal";
  - "Anegada" → "Anagata": é o nome que o Lucas mais tem de ouvir.
  - "Archimède" o Whisper escreveu com o acento, à francesa.
- **O que só o ouvido do Lucas decide:** os nomes da folha (Archimède, Aguadilla, Vescovo, Okeanos, bathyscaphe, Anegada,
  Geodetic, NOAA, Puerto Rico, Caribbean) e Nares, numa sílaba ou em duas.
- **Limites.** Cada geração do v4 é nova, e a do motor não será esta. O ouvido do motor casa algarismo com algarismo
  (`ouvido.mjs`), e não pegaria um ano lido como quantidade. A amostra mostra a tendência do v4 nesta voz e nestes ajustes
  (66 de 66 numa rodada), não uma garantia por geração.

## A narração inteira (28/10/2026)

- **A narração:** `out/atlantico-fundo/narracao.wav`, 694,0 s (11:34) de fala, 44,1 kHz mono, 28 trechos, um por parágrafo da cópia
  para a voz (revisão `7b965eecdb7c`). A voz falou a ~175 palavras/min (2.028 palavras), como no vídeo 3 (`peru-agua`).
- **Parágrafo a parágrafo** (`python out/juneau/_pesquisa/conferir-paragrafos.py atlantico-fundo` → `_narracao/conferencia-paragrafos.json`;
  o log em `conferir-1.log`): 20 de 28 trechos entre 98 e 100 %; 8 marcados para conferir (1, 7, 9, 11, 17, 19, 20 e 28, de 94,4 a
  97,6 %). Tudo é o transcritor:
  - os milhares que ele escreve em algarismo com um espaço antes da vírgula ("1 ,500", "23 ,000", "27 ,300"): a comparação lê "one…
    five hundred" e dá o "thousand" como pulado ou trocado por "zero" (16 marcas, em 12 trechos). Todos os números batem com o texto;
  - as datas com ordinal, que ele escreve "January 27" e "December 19" (abaixo);
  - as grafias dele: "Archimede", "multi beam" (2), "Anagata", "Jamison" (2), "cruise" (o "crew's", homófono), "its" (2) e "cusqueal".
  - Nenhuma palavra pulada nem repetida.
- **Os recortes** (`out/los-angeles/_pesquisa/conferir-recortes.py atlantico-fundo --trechos=3,7,13,18,20,24,25,28` →
  `_narracao/conferencia-recortes.json`; `conferir-recortes-1.log`): 11 recortes. Os nomes saem como o esperado: "Archimede",
  "Onagata" (p 0,73; no parágrafo, "Anagata"), "Jamison" (p 0,75), "cruise" (p 0,43, o homófono) e "Kuskiel" (p 0,75). Os milhares
  dos recortes ("24 ,000", "24 ,400", "27 ,500") também batem.
- **As duas datas** (`ouvir-por-extenso.py`, desta pasta; `ouvir-por-extenso-1.log` e `-2.log`). "January 27" serve tanto para
  "twenty-seven" quanto para "twenty-seventh". Com os 3.431 tokens de algarismo suprimidos (o método da amostra de 27/10), o Whisper
  escreve o número como a voz o disse:
  - **3º parágrafo:** "On January, twenty-seventh, eighteen eighty-three" ("-seventh" a p 0,88). Certo.
  - **18º parágrafo:** "On Wednesday, December nineteenth, twenty-eighteen" ("nineteenth" a p 0,49). A dúvida se resolveu no espectro
    (`ffmpeg showspectrumpic`, 0 a 12 kHz; `_tmp/escuta/esp-nineteenth.png`, com `esp-seventh.png` como modelo). Depois do "n" de
    "-teen" vêm ~60 ms de ruído difuso (o /θ/), um silêncio curto e o estouro do "t" de "twenty". Em "seventh," o mesmo ruído dura
    ~120 ms, antes do silêncio da vírgula. Sem o "-th", o "n" iria direto ao silêncio do /t/. Certo.
  - Os controles do método saíram certos: "one thousand five hundred" (1º) e "twenty seven thousand five hundred" (17º).
- **Os fins** (`out/los-angeles/_pesquisa/conferir-fins.py atlantico-fundo`, `conferir-fins-1.log`): os 28 terminam com a última
  palavra a p ≥ 0,89 (a menor, "Atlantic." no 22º).
- **Nenhum trecho refeito.** A soma do vídeo continua em 8.485 créditos.
- **O tratamento** (`python out/juneau/_pesquisa/tratar-narracao.py atlantico-fundo`, `tratar-1.log`): 28 trechos esmaecidos, nenhum
  som solto, sem limitador, cauda de 20 s; 693,95 → 713,95 s; sha `0c55e7d29423` → `30cfff20a8ea`.
- **A escuta do Lucas** (antes do master), mandada em 28/10/2026, às 03:0x: a narração inteira, sem a cauda, em
  `out/atlantico-fundo/_tmp/escuta/narracao-atlantico-fundo.mp3` (693,95 s), e 31 recortes de nome em `escuta-nomes.mp3` (100,3 s;
  índice em `escuta-nomes.json`; `escuta-nomes.py`, desta pasta). Os nomes de toda vez em que a folha pede igualdade entre os pedidos
  (NOAA 5, Vescovo 3, Jamieson 3, Caribbean 2) e os outros na primeira vez. O `escuta-nomes.py` acha a palavra pela semelhança
  (difflib) perto da posição esperada: na 1ª rodada, pelo prefixo do molde do Peru, o recorte do Anegada caiu em "itself"
  (`escuta-nomes-1.log`; refeito no `-2.log`, "Anagata", 5:24). Os pontos de dúvida: Nares (1:43), Archimède (2:27), Anegada
  (5:24), Okeanos (6:18), Aguadilla (6:59), Vescovo (7:08, 10:42 e 11:16), Jamieson (7:41, 8:02 e 9:47) e NOAA (2:52 a 11:17).
  Nome que ele ouvir errado ganha o alias de reserva da `roteiros/atlantico-fundo/pronuncia.md` na cópia para a voz, e só aquele
  trecho se refaz (`narrar.mjs atlantico-fundo --refazer=N`, depois `tratar-narracao.py` de novo).
