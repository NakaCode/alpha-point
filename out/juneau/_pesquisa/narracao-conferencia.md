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

**Ouvido pelo Lucas (25/09):**
- 0:01: "twenty-seventh", certo;
- 7:07: "in the Yukon", certo;
- **3:09: "mudou bastante uma voz para a outra".** A emenda entre a 1b (site) e a parte da API não serve como
  está.

## Diagnóstico da troca de voz em 3:09 (25/09/2026)

Três investigações (medição do som, configuração enviada, documentação da ElevenLabs), sem gasto, e três
verificadores que refizeram as medidas por conta própria. Scripts e tabelas ficaram fora do canal, em
`C:\Users\zangp\AppData\Local\Temp\apmapa\diag\`.

**O que é igual dos dois lados da emenda:** texto (letra por letra), voz, modelo, estabilidade 0, tom (F0 no
mesmo texto: −0,2 Hz), velocidade (−0,05 palavra/s), formantes (a mesma voz: +0,7 %, igual à diferença entre duas
gerações do site). O MP3 do site não explica nada abaixo de 8 kHz (controle: a API regravada em MP3 128k muda o
centróide em 0,1 Hz).

**O que muda, medido:**
- **Timbre:** no mesmo texto, a API sai um pouco mais clara que o site em 11 ou 12 de 12 parágrafos (centróide
  +18 a +27 Hz, cerca de 5 %; +0,55 dB de 1 a 4 kHz). O mecanismo mais sustentado: toda geração abre mais clara e
  assenta em uns 20 s. Na abertura, site e API ficam iguais (+2 a +12 Hz); depois, o site assenta e a API não,
  porque cada parágrafo da API é uma abertura nova. A "deriva lenta por minuto" proposta primeiro **não se
  sustentou** (confundia tempo com texto).
- **Ritmo:** a pausa entre parágrafos **dobra** de 3:09 até o fim: 1b ≈ 0,14 s, API ≈ 0,28 s. É configuração:
  `pausa_paragrafo_s: 0.2` mais os ~0,06 s de silêncio que cada trecho da API já traz no começo. A nota de que
  0,2 "imitava a 1b" estava errada.
- **Documentação:** o recurso que mantém a leitura contínua entre pedidos ("request stitching") "is not
  available for the eleven_v3 model" (elevenlabs.io, guia de request stitching).

**Não provado:** que essas diferenças, todas pequenas, sejam o que o Lucas ouviu. Forma da entonação e estilo de
leitura não foram medidos. Por isso, antes de gastar, um teste de escuta às cegas: `out/juneau/_narracao/escuta/`
(fora do git), 6 trechos com a emenda no meio. O gabarito está em `escuta-gabarito.json`.

**Teste às cegas, respostas do Lucas (26/09):** "1, quase nada, 2 um pouco e as demais bem pouco também". Gabarito
e respostas em `escuta-gabarito.json`:

| trecho | o que era | ouviu |
|---|---|---|
| 1 | 1b → API, pausa 0,13 s | quase nada |
| 2 | 1b → site 2b (mesmo texto da API) | um pouco |
| 3 | a emenda de então (1b → API, pausa 0,28 s) | bem pouco |
| 4 | o 1, com agudo −0,8 dB na API | bem pouco |
| 5 | 1b → site 2a (mesmo texto da API) | bem pouco |
| 6 | dentro da API, parágrafo 21 → 22 | bem pouco |

Leitura: a pausa é o que mais pesa (1 contra 3). O EQ não ajudou (4). Refazer no site não resolve, porque a
leitura nova do site também abre diferente (2 e 5).

**Conserto, sem gasto (26/09):**
- `canal.json` › `narracao.pausa_paragrafo_s` passou de 0,2 para 0,07. Com os ~0,06 s que cada trecho da API
  já traz, dá os 0,14 s da 1b.
- O `narrar.mjs juneau-voz` rodou só do cache: 0 pedidos e 0 créditos, 362,1 s. Os 23 trechos são idênticos,
  amostra por amostra, ao áudio pago; o 8 continua o refeito.
- `montar-narracao.py` passou a dar à emenda o silêncio medido entre os parágrafos da API.

Resultado: `narracao-completa.wav`, 9:11. Silêncio de 0,15 s na emenda e de 0,14 s entre os parágrafos da API
(de 0,10 a 0,22 s), a mesma mediana das pausas dentro da 1b (0,14 s). Os 24 cortes terminam em silêncio.

**O Lucas ouviu a remontada (26/09):** "A mudança de voz é perceptível, mas nada muito incômodo." E levantou
outro ponto: "talvez esteja muito rápido e 9 minutos é pouco". Medido: **200 palavras por minuto**, igual no
bloco do site e na parte da API (1.836 palavras em 9,19 min). A marca pede **150–160** (`marca/voz.md`), e o
roteiro aprovado contava com ~11,4 min. No ritmo da marca, o mesmo texto daria uns 11,8 min. O texto não é o
problema; a voz é que corre. Próximo: versões de escuta mais lentas, sem gasto (pausas e Rubber Band), e o que
o v3 aceita para controlar velocidade.
