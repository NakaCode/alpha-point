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

## O que falta

- **A escuta do Lucas**, obrigatória antes do master (`sala/narracao.md`: a repetição da voz e a pronúncia só o ouvido humano pega): o
  MP3 `out/big-sur/_tmp/narracao-big-sur.mp3` (128 kbps, fora do git), com os minutos dos nomes de `roteiros/big-sur/pronuncia.md` e o 7:45.
- Depois do sim dele: o relógio (`words.json`, pelo `ingest-local.py`), o master e o `regie open big-sur`.
