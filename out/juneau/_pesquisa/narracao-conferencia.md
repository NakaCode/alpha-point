# Conferência da narração do Juneau — 25/09/2026

As 6 gerações de 24/09/2026 (voz "Alpha Point - Narrator (conversational)", eleven_v3, "Criativo"), baixadas
do histórico da ElevenLabs sem gasto (`narracao-historico.mjs`, procedência em `narracao-historico.json`),
transcritas localmente (`transcrever-local.py`, faster-whisper large-v3 no processador) e comparadas palavra
a palavra com o texto aprovado (`comparar-narracao.py`). Cada ponto suspeito foi transcrito de novo num
recorte de ~7 s (`conferir-trechos.py`). Áudios, transcrições e relatórios ficam em
`out/juneau/_narracao/historico/` (fora do git).

| Versão | Duração | Palavras ditas / do texto | O que falta |
|---|---|---|---|
| **1a** | 2:55 | 90,3 % | para antes do fim: as últimas 61 palavras ("…the money to build up to nine hundred sixty-six million dollars in bonds…") |
| **1b** | 3:09 | **99,7 %** | nada. **É a única completa.** |
| 2a | 2:10 | 68,0 % | as últimas 199 palavras, de "The same ballot carried a second initiative…" em diante |
| 2b | 2:00 | 62,1 % | as últimas 234 palavras, de "…statement against it said, no price tag is attached" em diante |
| 3a | 1:23 | 48,2 % | as últimas 313 palavras, de "In two thousand nine, a federal court threw out…" em diante |
| 3b | 1:11 | 41,3 % | metade do fim, e termina com palavras fora do texto ("…79 votes ahead of a road. Highway officials.") |

- **A voz para no fim de uma frase.** No ouvido, soa como um final natural; por isso passou quando o
  Lucas ouviu no site.
- **A causa, pela documentação da ElevenLabs.** O histórico mostra que o site gerou pelo caminho de
  "diálogo" do v3, e a referência do Text to Dialogue pede até 2.000 caracteres por pedido "to ensure
  reliable generation and avoid premature termination" (elevenlabs.io/docs/api-reference/text-to-dialogue/convert).
  Os blocos tinham de 3.466 a 3.827 caracteres.

**O que NÃO é erro da voz**, conferido no recorte:
- as palavras repetidas na transcrição inteira ("the point. point.", "Willow itself. itself.", "Fairbanks.
  banks.", "price", "corridors", "highway"). No recorte curto elas aparecem uma vez só. É o transcritor
  duplicando a última palavra na emenda das janelas de 30 s;
- grafias do transcritor: "World War II", "$2.8 billion", "capitol", "Glen", "Brian Ray", "Fanny", "Mat-Su",
  "ice field".

**Da voz, de verdade (pequeno):**
- 2b, ~1:06: "fifty-two percent to forty-five **percent**". O texto diz o "percent" uma vez só.

**Fica para o ouvido:**
- 1a/1b, 0:01: "August twenty-seventh" ou "twenty-seven". O transcritor escreve data em algarismo ("27")
  e não decide.

## Blocos 2 e 3 refeitos pela API, e a narração inteira (25/09/2026)

O Lucas escolheu refazer os blocos 2 e 3 pela API, com o `narrar.mjs` da pré-v1. O projeto é `out/juneau-voz/`:
os parágrafos 14 a 36 do texto aprovado, **um pedido por parágrafo** (23 pedidos, de 3 a 26 s cada), com a voz,
o modelo e a estabilidade de `canal.json` › `narracao`.

- **Conferência por parágrafo** (`conferir-paragrafos.py juneau-voz`): os 23 vieram completos, sem nenhum corte.
  Uma troca de verdade: o parágrafo 8 dizia "nineteen **eighty**-four" no lugar de 1994, e os dois modelos do
  Whisper ouviram. Refeito com `--refazer=8` (229 créditos), agora diz 1994.
- **Custo:** 4.324 créditos nos 23 parágrafos, mais 229 no refeito, 4.553 no total. Os recibos batem com o
  contador da conta.
- **Montagem** (`montar-narracao.py`, procedência em `narracao-montagem.json`):
  - a 1b ganhou +0,70 dB para igualar os −14,3 LUFS da parte da API, e perdeu os 1,8 s de silêncio do fim;
  - 0,2 s de pausa entre as partes; os blocos 2 e 3 começam em 3:09,3;
  - esmaecimento de 5 ms no começo e 15 ms no fim de cada trecho falado, porque os trechos da API terminam
    "secos". Os 24 cortes terminam em silêncio total, sem estalo;
  - resultado: `out/juneau/_narracao/narracao-completa.wav`, 9:14, 44,1 kHz mono, com pico de 0,959.
- **Conferência do arquivo inteiro** contra os 36 parágrafos: **99,0 %, nenhuma palavra pulada**
  (`out/juneau/_narracao/conferencia-completa.json`). O que sobra é do transcritor, e se desfaz no recorte curto,
  nos dois modelos:
  - ecos na emenda das janelas: "million. million.", "quarters. orders.", "Brian Ryan Ray";
  - grafias: Juno, Fanny, Reimer, K2, "ice field", "outcross", Glatyshevsky;
  - "6-3" e "$2 .8": o comparador passou a entender essas duas escritas do Whisper.

**Fica para o ouvido:**
- 0:01, "August twenty-seventh" ou "twenty-seven" (a 1b, igual a antes);
- 7:07, "meet the Alaska Highway **in** the Yukon": o large-v3 ouve "and" e o medium ouve "in".
