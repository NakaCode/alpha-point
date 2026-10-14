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
