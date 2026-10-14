# A narração do vídeo 3 (zona-do-canal): o gasto e a conferência

O registro do que se gastou na ElevenLabs e de como cada rodada da narração foi conferida, como o do vídeo 2
(`out/los-angeles/_pesquisa/narracao-conferencia.md`). O saldo se lê antes e depois de cada rodada com
`node out/los-angeles/_pesquisa/saldo-elevenlabs.mjs` (só GET, sem gasto; a chave nunca se imprime).

## A autonomia

- Lucas, 02/10/2026: até 15.000 créditos por vídeo sem pedir ok, do vídeo 2 em diante. O "sem teto" de 07/10 valeu só para o vídeo 2.
- Lucas, 14/10/2026, antes de descansar: "Acredito que com nossa cota atual consigamos finalizar o roteiro e talvez narração" e
  "avance o que for possível sem mim".

## O gasto

| Quando (Brasília) | Rodada | Saldo antes | Saldo depois | Gasto pelo saldo | Recibos |
|---|---|---|---|---|---|
| 14/10, 08:31–08:34 | a narração inteira, revisão `58db12762030` (28 parágrafos, 13.339 caracteres pagos; `narrar-1.log`), sem a amostra de nomes que a `pronuncia.md` propunha: a narração inteira serve de amostra, e o nome que o Lucas ouvir errado se refaz por parágrafo | 4.595.329 | 4.590.535 | 4.794 | soma do `characterCost` dos 28 recibos: **6.427** |

O v4 cobrou cerca de 0,48 crédito por caractere nesta rodada (6.427 por 13.339), contra ~0,1 no vídeo 2 (07/10). A conta é
compartilhada com outros canais, e o contador do saldo anda com atraso: a conta do vídeo segue pelos recibos.

**Soma do vídeo 3 até aqui:** 6.427 créditos (teto de 15.000).

## A conferência

- **A narração:** `out/zona-do-canal/narracao.wav`, 807,5 s (13:28) de fala, 44,1 kHz mono, 28 trechos. A voz falou a ~158
  palavras/min (2.129 palavras), abaixo dos ~184 medidos no vídeo 2.
- **Parágrafo a parágrafo** (`python out/juneau/_pesquisa/conferir-paragrafos.py zona-do-canal` →
  `out/zona-do-canal/_narracao/conferencia-paragrafos.json`; o log em `out/zona-do-canal/_tmp/conferir-1.log`): 18 de 28 trechos
  entre 98 e 100 %; 10 marcados para conferir. Quase tudo é o transcritor, como no vídeo 2: o "thousand" que ele engole na
  normalização, os ordinais escritos como números ("November 18"), os acentos tirados (Paraíso, Gatún, Cristóbal).
- **Os recortes** (`conferir-recortes.py zona-do-canal --trechos=3,8,9` → `conferencia-recortes.json`): no trecho 3, o "thank you"
  que o parágrafo inteiro ouviu não existe (o recorte ouve "and the same article left them out."), e "Bunau-Varilla" sai
  "Philippe Bonneau-Varilla" (p 0,55 a 0,64); no trecho 8, "describe" está certo; no trecho 9, os US$ 158,46 por extenso o
  Whisper escreve "$158.46". Nenhuma palavra pulada nem trocada pela voz.
- **Os fins** (`conferir-fins.py`): os 28 terminam com a última palavra a p ≥ 0,97.
- **O tratamento** (`tratar-narracao.py`): 28 trechos esmaecidos, cauda de 20 s; 807,47 → 827,47 s; sha `41d0c11f7abc` → `a618bc3caa01`.
- **A escuta do Lucas** (antes do master): a narração inteira, sem a cauda, em `out/zona-do-canal/_tmp/escuta/narracao-zona-do-canal.mp3`,
  e a primeira ocorrência de 13 nomes em `escuta-nomes.mp3` (índice em `escuta-nomes.json`). Os pontos de dúvida:
  "Bunau-Varilla" (1:15; o transcritor ouve "Buenavaria"), "commy" (5:24; ouve "come"), Colón (1:31), Torrijos (11:22),
  Paraíso, Gatún e Cristóbal. Nome que ele ouvir errado ganha o alias de reserva da `roteiros/zona-do-canal/pronuncia.md`
  na cópia para a voz, e só aquele trecho se refaz (`narrar.mjs zona-do-canal --refazer=N`, depois `tratar-narracao.py` de novo).
