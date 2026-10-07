# A voz do vídeo 2 no ElevenLabs v4: o teste (07/10/2026)

O Lucas pediu o vídeo 2 no v4 ("utilizando Elevenlabs v4", 07/10) e liberou a produção inteira ("Você pode criar o roteiro, prosseguir com o áudio na v4 e toda a produção"; "Você pode usar mais que 15 mil"). No Juneau ele tinha ouvido "diversas mudanças de tom" e "transição abrupta também na fala" (02/10). O teste mede o que muda isso, com a mesma voz do canal ("Alpha Point - Narrator (conversational, calm)", `829pig94w9GefZ9jJQYl`) e o mesmo texto: três parágrafos do gancho de Los Angeles (122 palavras).

## O que se pediu e quanto custou

| Variante | Como | Duração |
|---|---|---|
| A | um pedido por parágrafo, stability 0.5 (Natural) | 11.68 + 8.24 + 19.92 s |
| B | um pedido só para os três, stability 0.5 | 39.92 s |
| C | um pedido só, stability 0 (Criativo, o ajuste do Juneau) | 39.68 s |
| A+speed | o parágrafo 3 de A com `speed: 0.9` | 20.08 s (sem speed: 19.92 s) |

**Gasto:** 305 créditos pelo `character-cost` dos 6 pedidos (o saldo da conta, lido antes e depois, ainda não tinha mudado: 4.708.765 → 4.708.765). O v4 cobrou ~0,13 crédito por caractere nesta conta. Os request-id estão em `teste-voz-v4.json`.

## O que se mediu

O faster-whisper local (large-v3, `en`) ouviu as 122 palavras inteiras nas três variantes. Por parágrafo (`medir-voz-v4.py`, `medida-voz-v4.json`):

| | ritmo (palavras/min) | F0 mediana (Hz) | centróide espectral (Hz) | nível (dB) |
|---|---|---|---|---|
| A | 171.3 · 196.3 · 203.1 | 122.2 · 121.5 · 127.8 | 1585 · 1619 · 1596 (amplitude **34**) | amplitude 0.55 |
| B | 174.5 · 197.0 · 201.2 | 121.8 · 124.6 · 127.8 | 1638 · 1599 · 1567 (amplitude **71**) | amplitude 0.84 |
| C | 177.1 · 198.0 · 203.1 | 121.8 · 123.5 · 126.2 | 1611 · 1517 · 1532 (amplitude **94**) | amplitude 0.72 |

- **O timbre variou menos em A** (34 Hz de amplitude no centróide entre parágrafos), o dobro em B (71) e quase o triplo em C (94). O Criativo é o que mais muda o tom, como se suspeitava no Juneau. A F0 e o nível mudam pouco em todas.
- **O ritmo** é ~184 palavras/min na média (171 a 203 por parágrafo), mais rápido que os 171 do v3 no Juneau. **O v4 ignora `speed`**: com 0.9, o parágrafo durou o mesmo (20,08 × 19,92 s).
- **A pausa entre parágrafos** numa leitura corrida do v4 (B e C) tem de 0,25 a 0,70 s de silêncio contínuo. Os trechos de A trazem ~0,22 s de silêncio somados nas pontas (0,17–0,20 no fim, 0,03–0,05 no começo).
- **O alinhamento por caractere** fica no histórico também no v4 (`alignments` com `alignment` e `normalized_alignment`): o relógio do canal (`alinhamento-elevenlabs.mjs` e `ingest-local.py`) funciona igual.

## A decisão (Claude central, com a autonomia do Lucas)

`canal.json` › `narracao`: **eleven_v4**, a mesma voz, **stability 0.5**, um pedido por parágrafo (o `narrar.mjs` da pré-v1, sem mudança) e **pausa de 0,25 s**, que com as pontas dá ~0,47 s de silêncio, no meio do que o próprio v4 deixa numa leitura corrida. O princípio é o do Juneau (a pausa igual à da leitura contínua do modelo), medido de novo no v4.

**Para o roteiro:** a ~184 palavras/min, 10 minutos de fala pedem ~1.840 palavras. O alvo é **2.000 palavras** (~10,9 min), com os 20 s da tela final à parte.

**O que fica para o Lucas:** ouvir A, B e C às cegas (`out/los-angeles/_tmp/voz-v4/`, fora do git) quando puder. Se ele preferir outra, a narração se refaz barato no v4. E o ritmo: 184 palavras/min passa do alvo da `marca/voz.md` (150–160) e dos 171 que ele aceitou no Juneau; só uma voz nova (Remix) muda isso, e é decisão dele.
