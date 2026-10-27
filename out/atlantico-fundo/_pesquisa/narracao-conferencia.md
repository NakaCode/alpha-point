# A voz do vídeo 5 (atlantico-fundo): o gasto e a conferência

O registro do que se gastou na ElevenLabs no vídeo 5 e de como cada rodada foi conferida, como o dos vídeos 3 e 4
(`out/peru-agua/_pesquisa/narracao-conferencia.md`). O vídeo 5 é narrado pelo motor sem rosto, com a conta do Top10; o que está
aqui é o que a Sala gastou na conta do canal antes do portão "roteiro" do motor. O saldo se lê antes e depois de cada rodada
(o `amostra-voz.mjs` o lê sozinho, só GET; a chave nunca se imprime).

## A autonomia

- Lucas, 02/10/2026: até 15.000 créditos por vídeo sem pedir ok, do vídeo 2 em diante; do vídeo 3 em diante, de novo com esse teto
  (CLAUDE.md, "A autonomia do vídeo 2 em diante").
- A amostra antes do portão é da Sala: "O gasto e a rodada são da Sala de controle" (`roteiros/atlantico-fundo/pronuncia.md`, "A
  amostra que esta folha pede").

## O gasto

| Quando (Brasília) | Rodada | Saldo antes | Saldo depois | Gasto pelo saldo | Recibos |
|---|---|---|---|---|---|
| 27/10, 00:04–00:06 | a amostra antes do portão, revisão `7b965eecdb7c`: os 14 pedidos de nomes da `pronuncia.md` (12 das frases deles têm algarismo) e as outras 44 frases com algarismo do roteiro (23 pedidos, um por parágrafo), 37 pedidos, 5.856 caracteres, na grafia do roteiro (com algarismos), com os parâmetros do narrador do motor (`estudio/canal-motor.json` › `narracao`: eleven_v4, a voz `829pig94w9GefZ9jJQYl`, stability 0,5, similarity 0,75, `language_code` "en", `pcm_44100`, `/with-timestamps`, sem seed) | 5.396.399 | 5.394.660 | 1.739 | 37 recibos, 2.820 créditos, em `out/atlantico-fundo/_tmp/amostra-voz/recibos.jsonl` |

O v4 cobrou 0,48 crédito por caractere (2.820 por 5.856), como nos vídeos 3 e 4. O contador do saldo anda com atraso (a conta é
compartilhada com outros canais), e a conta do vídeo segue pelos recibos.

**Soma do vídeo 5 até aqui:** 2.820 créditos (teto de 15.000).

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
