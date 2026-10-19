# A narração do vídeo 4 (peru-agua): o gasto e a conferência

O registro do que se gastou na ElevenLabs e de como cada rodada da narração foi conferida, como o do vídeo 3
(`out/zona-do-canal/_pesquisa/narracao-conferencia.md`). O saldo se lê antes e depois de cada rodada com
`node out/los-angeles/_pesquisa/saldo-elevenlabs.mjs` (só GET, sem gasto; a chave nunca se imprime).

## A autonomia

- Lucas, 02/10/2026: até 15.000 créditos por vídeo sem pedir ok, do vídeo 2 em diante; do vídeo 3 em diante, de novo com esse teto
  (CLAUDE.md, "A autonomia do vídeo 2 em diante").
- Lucas, 17/10/2026, sobre o roteiro: "Se os críticos aprovaram o roteiro, pode seguir" (`roteiros/peru-agua/decisoes-lucas.md`).

## O gasto

| Quando (Brasília) | Rodada | Saldo antes | Saldo depois | Gasto pelo saldo | Recibos |
|---|---|---|---|---|---|
| 17/10, 12:18–12:21 | a narração inteira, revisão `40905ef8ecdc` (27 parágrafos, 11.790 caracteres pagos; `narrar-1.log`; cópia para a voz `8045b0c277e6`, `roteiros/peru-agua/voz/`), sem a amostra de nomes que a `pronuncia.md` propunha: como no vídeo 3, a narração inteira serve de amostra, e o nome que o Lucas ouvir errado se refaz por parágrafo | 4.545.719 | 4.540.041 | 5.678 | 27 recibos em `out/peru-agua/_narracao/` |

O v4 cobrou cerca de 0,48 crédito por caractere (5.678 por 11.790), o mesmo do vídeo 3. A conta é compartilhada com outros canais,
e o contador do saldo anda com atraso: a conta do vídeo segue pelos recibos.

**Soma do vídeo 4 até aqui:** 5.678 créditos (teto de 15.000).

## A conferência

- **A narração:** `out/peru-agua/narracao.wav`, 703,8 s (11:44) de fala, 44,1 kHz mono, 27 trechos. A voz falou a ~175
  palavras/min (2.057 palavras).
- **Parágrafo a parágrafo** (`python out/juneau/_pesquisa/conferir-paragrafos.py peru-agua` → `out/peru-agua/_narracao/conferencia-paragrafos.json`;
  o log em `conferir-1.log`): 15 de 27 trechos entre 98 e 100 %; 12 marcados para conferir. Tudo é o transcritor: os acentos tirados
  (Rímac, Chillón, Lurín, Rómulo Cárhuaz, Martínez), os números que ele escreve em algarismos ("thousand" → "650,000", "and a half" →
  "10.5", "May first" → "May 1"), e as grafias dele (Karal, Chanchan, pukios, Calao, Espinosa, Vila). Nenhuma palavra pulada.
- **Os recortes** (`conferir-recortes.py peru-agua --trechos=10,11,13,16,21,24` → `conferencia-recortes.json`; `conferir-recortes-1.log`):
  "Supe" sai "Sup" e "soup" (p 0,33 a 0,70) nas duas vezes: é o ponto mais provável de pronúncia errada; "Caral" sai "Kerala" (p 0,55);
  "Chan Chan", "Chonchon" (p 0,63); "Callao" no 13º sai "Kalau" (p 0,69), mas no gancho (2º) sai "Callao" (p 0,97). O fim do recorte do
  24º ("Most of the family members were not able…", p 0,06 a 0,45) é invenção do Whisper num recorte que corta a frase: o parágrafo
  inteiro e o `conferir-fins` ouvem "…in search of better work." (p 1,0).
- **Os fins** (`conferir-fins.py peru-agua`, `conferir-fins-1.log`): os 27 terminam com a última palavra a p ≥ 0,95.
- **O tratamento** (`tratar-narracao.py`): 27 trechos esmaecidos, nenhum som solto, cauda de 20 s; 703,78 → 723,78 s; sha
  `8e0cddeda65a` → `d8f9da133b62`.
- **A escuta do Lucas** (antes do master): a narração inteira, sem a cauda, em `out/peru-agua/_tmp/escuta/narracao-peru-agua.mp3`, e a
  primeira ocorrência de 30 nomes em `escuta-nomes.mp3` (índice em `escuta-nomes.json`; `escuta-nomes.py`). Os pontos de dúvida: Supe
  (3:49), Caral (3:45), Chan Chan (4:10), Callao (0:30 e 4:5x), puquios (4:25), Jauja (4:35), Huinco (8:27), Cárhuaz (8:44). Nome que ele
  ouvir errado ganha o alias de reserva da `roteiros/peru-agua/pronuncia.md` na cópia para a voz, e só aquele trecho se refaz
  (`narrar.mjs peru-agua --refazer=N`, depois `tratar-narracao.py` de novo).
- **O ok do Lucas** (18/10/2026), depois de receber a narração e os nomes: **"A narração está ok"**. Nenhum trecho refeito.

## O relógio de palavras (ingest)

- **1ª rodada** (`ingest-1.log`): sem o alinhamento da ElevenLabs; `alinhamento-elevenlabs.mjs peru-agua` (só GET, sem gasto) o baixou.
- **2ª rodada** (`ingest-2.log`): REPROVADO em dois portões. `conteudo`: 31 itens em 17 trechos, todos do transcritor (acentos,
  algarismos, grafias; os mesmos da conferência acima). `relogio`: a pausa 149,79–149,96 s (trecho 6, "It stays as fog, low cloud and
  drizzle.") ficou indecidida: a regra e a ElevenLabs põem a fronteira em "cloud | and", e o ouvido (o Whisper em recorte curto) não
  confirmou, porque engoliu o "and" ("low cloud," / "drizzle. You can see").
- **A medida da Sala na pausa** (energia em quadros de 20 ms, 149,30–150,50 s): voz até 149,76 s (−29 dBFS), silêncio de 149,80 a 149,94
  s (−67 a −88 dBFS), uma sílaba curta de 149,96 a 150,08 s (−27 a −16 dBFS), um vale em 150,10–150,12 s (−26) e a palavra longa de
  150,14 a 150,40 s. A ElevenLabs dá "and" em 149,97–150,05 e "drizzle." em 150,13–150,69. O "and" vem DEPOIS da pausa: a fronteira é
  "cloud | and", a proposta comum.
- **O que faltava no script:** fronteira que o ouvido não decide não tinha aceite. A Sala acrescentou ao `ingest-local.py` o
  `--aceitar-fronteiras=<início>` (cópia de antes em `ingest-local.py.antes-fronteiras-2026-10-18`), com a disciplina do
  `--aceitar-vaos`: só a proposta comum da regra e da ElevenLabs, só a fronteira que o laudo anterior do mesmo áudio mostrava
  indecidida, idêntica, com quem e como no laudo (`aceites_fronteiras`), e a situação "aceita", nunca "conferida". Prova negativa
  (`_tmp/ingest-teste/`, sem laudo anterior): o aceite foi recusado ("a fronteira nasceu ou mudou nesta rodada").
