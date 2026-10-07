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
| 07/10, 15:01–15:02 | a revisão r3a do roteiro (título 5, gancho de hoje, "turned out", "the strip ran"; `narrar-3.log`): os trechos 2, 18 e 24, 1.488 caracteres pagos; os outros 29 do cache | 4.706.833 | 4.706.636 | **197** | 60 + 76 + 61 (`5943ddab…`, `c5c7ac37…`, `852dcd1b…`) |

**Soma do vídeo 2 até aqui:** 261 (teste) + 1.200 (narração) + 37 (trecho 10) + 197 (r3a) = **1.695 créditos**.

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

- **Rodada 3, a revisão r3a** (07/10, 15:0x). O roteiro oficial passou a ser o `_trabalho/roteiro-r3a.md` (gate PASSA, 2.063
  palavras, sha `feac8036…`), e o `preparar-voz.mjs` refez a cópia para a voz (32 parágrafos, 12.101 caracteres). Mudaram três
  trechos: o 2 (o gancho de hoje), o 18 ("turned out") e o 24 ("the strip ran"; "The towns that line it today"). Só eles se pediram.
  - **Um defeito dos conferidores, achado e consertado:** o `conferir-paragrafos.py`, o `conferir-fins.py` e o
    `conferir-recortes.py` escolhiam o áudio de cada trecho pelo número do trecho no recibo, e o cache guarda ao lado a geração
    antiga de um texto que mudou (e a refeita). A primeira conferência desta rodada ouviu o áudio ANTIGO dos trechos 2 e 24 (o
    gancho de 1906). Os três agora usam a geração que a `narracao.json` atual aponta (pelo `requestId`). Refeita: os trechos 2 e
    24 com 100 % das palavras, o 18 com o "turned out" certo e só a grafia do transcritor ("15,000", "26").
  - **O item novo do trecho 18** ("fifteen" ouvido "15,000"): no recorte isolado de 16,40 a 17,50 s do trecho, o Whisper ouve "15
    and 20", sem "thousand" no meio; a energia e o alinhamento da ElevenLabs ("fifteen" 16,56–16,96 s, "and" 17,04 s) não deixam
    lugar para uma palavra a mais. É expectativa do transcritor.
  - **Os fins:** "begins." 0,98, "years." 1,0, "yet." 0,99.
  - **O tratamento:** 732,55 → 752,55 s, sha `eff497ce28fa` → `7c7d971a27e9`.
  - **O relógio:** `words.json` APROVADO, 2.127 palavras, com os 20 itens de grafia do transcritor aceitos de novo (o aceite vale
    por áudio); o alinhamento da ElevenLabs dos trechos novos foi lido do histórico (só GET, saldo igual).
  - **A escuta do Lucas:** `out/los-angeles/_tmp/escuta/escuta-r3a.mp3` (1:44: os trechos 2, 18 e 24, o "eleven" do fim do
    trecho 8 e o "his" do trecho 10), mandado a ele no chat. O master espera essa escuta.
  - **Um rótulo velho que fica:** o cabeçalho de `out/los-angeles/roteiro.md` diz "gancho de 1906". É só o rótulo: o
    `preparar-voz.mjs` o escrevia assim sempre que rodava sem `--gancho=hoje`, e desde a r3a o gancho de hoje está no próprio
    `roteiro-narrador.md`. O texto falado é o da r3a. O arquivo fica como está porque a `narracao.json` › `fonte.sha256` sela o
    arquivo inteiro, cabeçalho incluído. A ferramenta e o `voz/trocas.md` foram corrigidos (07/10, 16:1x); a próxima rodada do
    `preparar-voz.mjs` já escreve "o do roteiro-narrador.md".

- **Um ponto que faltava à escuta: o "can" do trecho 1** (07/10, 20:3x, achado pelo `redator-de-tela`). O `conferir-paragrafos.py` da
  rodada 3 marcou REPETIU no trecho 1, aos 0:17 ("wrote that it can [[]] never"; o Whisper do parágrafo inteiro escreveu "can can"), e
  os recortes curtos desta rodada só ouviram o trecho 18. O trecho 1 é o da rodada 1 (`FWrBuc3sqLLeDumUVK6u`), nunca refeito.
  - **A medida aponta um "can" só:** em recorte curto (2,6, 1,4 e 4,5 s) o Whisper ouve "can never" uma vez, mas com p 0,27 a 0,33
    (0,83 no recorte que começa no "can"); a energia tem a pausa limpa da abertura das aspas (17,32–17,60 s) e voz contínua de 17,62
    a 18,26 s; do "can" ao "be" vão 0,65 s, contra 0,555 s no "can never be" do trecho 10 (189,17 s). Um "can" a mais pediria uns
    0,2 a 0,25 s que não existem ali.
  - **Quem decide é o ouvido** (a repetição é o que o Whisper erra; CLAUDE.md, ingest, "Limites do script"):
    `out/los-angeles/_tmp/escuta/escuta-trecho1-can.mp3` (7,2 s, de 13,5 a 20,7 s da `narracao.wav` `7c7d971a27e9`), mandado ao Lucas
    junto da `escuta-r3a.mp3`. Se ele ouvir "can can", o trecho 1 se refaz (uns 49 créditos), e o relógio e o espelho andam com ele.
