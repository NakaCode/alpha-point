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
