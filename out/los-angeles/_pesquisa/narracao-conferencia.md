# A narração do vídeo 2 (los-angeles): o gasto e a conferência

O registro do que se gastou na ElevenLabs e de como cada rodada da narração foi conferida, como o
`out/juneau/_pesquisa/narracao-conferencia.md` do Juneau. O saldo se lê antes e depois de cada rodada com
`node out/los-angeles/_pesquisa/saldo-elevenlabs.mjs` (só GET, sem gasto; a chave nunca se imprime).

## A autonomia

- Lucas, 02/10/2026: até 15.000 créditos por vídeo sem pedir ok, do vídeo 2 em diante.
- Lucas, 07/10/2026, 04:2x: "Você pode usar mais que 15 mil." O teto não vale para o vídeo 2; o gasto continua registrado
  antes e depois de cada rodada e avisado no `#status`.

## O gasto

| Quando (Brasília) | Rodada | Saldo antes | Saldo depois | Gasto pelo saldo | Recibos |
|---|---|---|---|---|---|
| 07/10, madrugada | teste da voz no v4 (`teste-voz-v4.mjs`: 5 pedidos, 1.973 caracteres) | ver `teste-voz-v4.json` | | | character-cost somado 261 |
| 07/10, 09:33–09:37 | a narração inteira, revisão `a7a8615a572a` (32 parágrafos, 11.999 caracteres pagos; `narrar-1.log`) | 4.708.460 | 4.707.260 | **1.200** | `out/los-angeles/_narracao/*.json` |

| 07/10, 10:15 | o trecho 10 refeito (280 caracteres; `narrar-2.log`), sem as aspas no "never" (abaixo) | 4.706.870 | 4.706.870 (o contador ainda não tinha andado) | — | character-cost **37** (recibo `0ea2081f8ffc…`) |

O v4 cobrou cerca de 0,1 crédito por caractere nesta conta (1.200 por 11.999), como no teste (~0,13). A conta da ElevenLabs é
compartilhada com outros canais: entre as 09:37 e as 10:15 o saldo caiu 390 sem rodada deste vídeo. A conta do vídeo segue pelos
recibos (`characterCost` de cada `out/los-angeles/_narracao/<chave>.json`).
**Soma do vídeo 2 até aqui:** 261 (teste) + 1.200 (narração) + 37 (trecho 10) = **1.498 créditos**.

## A conferência

- **Rodada 1** (07/10, 09:4x): `python out/juneau/_pesquisa/conferir-paragrafos.py los-angeles` → `out/los-angeles/_narracao/conferencia-paragrafos.json`
  (o log em `out/los-angeles/_tmp/conferir-1.log`). 32 trechos; 23 sem nada ou só grafia do transcritor ("Mendel", "deepwater",
  "its"); 9 marcados para conferir, todos ouvidos de perto em recorte curto (`conferir-recortes.py` →
  `out/los-angeles/_narracao/conferencia-recortes.json`): "open to" → "opened a" era do transcritor (o recorte ouve "one open to
  competition"); os "thousand" → "zero" são a normalização de "15,000"; os ordinais ("eighth", "twelfth", "sixth") o Whisper
  escreve em algarismo ("November 8"), e o recorte não distingue ordinal de cardinal: ficam para a escuta do Lucas.
- **Os fins de parágrafo** (`conferir-fins.py` → `conferencia-fins.json`): 31 de 32 com a última palavra a p ≥ 0,8. O "eleven" do
  trecho 8 (p 0,71 no recorte de 3,5 s, 0,90 no de 1,6 s; termina em 2:51) e, por cautela, o "thirty" do trecho 10 (0,81 no recorte
  de 3,5 s, 0,51 no de 1,8 s; termina em 3:37) vão à escuta do Lucas, como o "ferry" do Juneau.
- **O tratamento** (`tratar-narracao.py`): 32 trechos esmaecidos, cauda de 20 s; 731,67 → 751,67 s; sha `4c08d19e2f45` → `d9f6d5ea18d7`.
- **A escuta do Lucas antes do master**: a página https://claude.ai/artifact/GtjKEVW7WH512T7kt1nBxg tem a narração (sem a cauda).
- **Rodada 2** (07/10, 10:1x): o `ingest-local.py` recusou o relógio da rodada 1 ("vão com voz de 0,32 s entre "his" e "never"",
  201,17–201,49 s). O alinhamento da ElevenLabs pôs o `"never"` entre aspas uns 0,3 s depois do som (no áudio, o "never" vai de ~201,1
  a ~201,47 s). A voz não fala as aspas: elas saíram da cópia para a voz só ali (regra de grafia no `preparar-voz.mjs`), o trecho 10
  se refez, a narração se tratou de novo (730,95 → 750,95 s; sha `aff2d4a6e592`), e o relógio passou: **`words.json` APROVADO**,
  2.117 palavras em 32 trechos. O "thirty" do fim do trecho 10 agora tem confiança alta. O "his" do mesmo trecho a transcrição
  ouviu "has" (p 0,75): vai à escuta do Lucas (3:21), com o "eleven" de 2:50. Os itens de grafia do transcritor (Mendel, algarismos)
  foram aceitos com `--aceitar`, registrados no `transcricao.json`.
