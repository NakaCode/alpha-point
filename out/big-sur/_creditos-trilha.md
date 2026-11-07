# Big Sur: os créditos da trilha para a descrição do YouTube

A licença do Epidemic Sound (plano Creator, canal pessoal do Lucas) pede o crédito na descrição, no formato
"<Artista> / <Música> / courtesy of Epidemic Sound", com o link do site (`out/juneau/_tmp/trilha/epidemic-licenca.md`).
As quatro faixas foram baixadas em 06/11/2026, às 22:44, com o "sim" do Lucas à lista de assinatura `6a0466d98826` (cópia em
`_pesquisa/lista-trilha-6a0466d98826.json`, sha256 `567df0a1…`, a mesma que o `baixar` registrou). A escolha, no chat, às 22:4x:
"Aprovo às 4 preferidas". O `baixar` do canal leu a mensagem como só a linha 4, e a Sala confirmou os números: à pergunta "Para baixar a
trilha do Big Sur, a ferramenta precisa dos números no seu "sim": ela leu "Aprovo às 4 preferidas" como só a linha 4. As preferidas são as
linhas 1 (As Life Decides), 2 (The Lost Forest), 3 (Familiar Patterns) e 4 (Just Another State of Mind). Confirma?": "Sim, 1, 2, 3 e 4
(Recomendado)". A ordem é a do vídeo.

**Cuidado:** o `trilha.mjs <proj> --conferir` da pré-v1 apaga este arquivo quando nenhuma faixa do plano é CC BY (ele guarda ali só o
crédito CC BY). Ele foi gravado depois do conferir de 06/11/2026, 22:49 (exit 0, as 4 com licença válida para o canal). Se o conferir rodar
outra vez, grave-o de novo.

Para colar:

```
Music:
Spirits Of Our Dreams / As Life Decides / courtesy of Epidemic Sound
DEX 1200 / The Lost Forest / courtesy of Epidemic Sound
Hanna Lindgren / Familiar Patterns / courtesy of Epidemic Sound
Colors of Illusion / Just Another State of Mind / courtesy of Epidemic Sound
https://www.epidemicsound.com
```

| Trecho | De … a … | Faixa | Arquivo |
|---|---|---|---|
| 1 · gancho + p1 (s01–s18) | 0:00 a 2:13 | Spirits Of Our Dreams, "As Life Decides" (4:08), linha 1 | `es_d69e2e84_as-life-decides.mp3` |
| 2 · p2 + p3 (s19–s33) | 2:13 a 5:45 | DEX 1200, "The Lost Forest" (4:07), linha 2 | `es_9bc6436c_the-lost-forest.mp3` |
| 3 · p4 + p5 (s34–s48) | 5:45 a 9:09 | Hanna Lindgren, "Familiar Patterns" (3:59), linha 3 | `es_faa96597_familiar-patterns.mp3` |
| 4 · p6 + p7 + tela final (s49–s60) | 9:09 a 13:08 | Colors of Illusion, "Just Another State of Mind" (4:07), linha 4 | `es_8e906abe_just-another-state-of-mind.mp3` |

A lista dizia "s33–s48" no trecho 3. O capítulo p4 começa na s34 (345,31 s, `espelho.json` › `_capitulos`): o tempo da lista estava certo, e
só o rótulo da cena saiu errado. O plano usa o tempo.

**O volume:** como em Los Angeles, na Zona, no Peru e no Atlântico, a música entra no XML 35 dB abaixo do volume dela, com 1 s de fade na
entrada e na saída de cada faixa, e o Lucas sobe a voz no Premiere. A lista que ele aprovou dizia isso ("a música baixa sob a voz, e a voz
sobe no Premiere. Se quiser diferente, diga"), e ele não pediu outro. A narração mede −19,7 LUFS (`ebur128` do ffmpeg, só na
`narracao.wav`, sem música).

A música nunca entra em ferramenta de IA nem de reconhecimento de música (licença Creator): nem o Whisper, nem a ElevenLabs,
nem o vidIQ, nem o Claude, com a trilha ou com o vídeo mixado.
