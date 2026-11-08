# Praia do Cassino (`praia-do-cassino`, o vídeo 6): a narração e a conferência

## A amostra de pronúncia (08/11/2026)

- `out/praia-do-cassino/_pesquisa/teste-pronuncia.mjs` e o recibo `teste-pronuncia.json`: 13 linhas, um pedido por linha, com o corpo de
  produção. As 7 linhas da proposta de `roteiros/praia-do-cassino/pronuncia.md` foram conferidas frase a frase contra a cópia para a voz
  e iam sem alias; depois de cada uma, uma linha com a grafia de apoio. **1.086 créditos** pelos cabeçalhos (2.256 caracteres; o saldo
  mostrou 652, com atraso).
- O Lucas: "Ele fala duas vezes Esta é a Praia do Cassino, na segunda vez está errado". A grafia de apoio "Pry-uh do Cassino" foi
  recusada, e a normal fica. Nenhum outro nome foi apontado, e a narração foi sem alias (`roteiros/praia-do-cassino/decisoes-lucas.md`).

## A narração (08/11/2026)

- **O texto:** a cópia para a voz `out/praia-do-cassino/roteiro.md` (21 parágrafos, 13.477 caracteres, sem alias), feita por
  `roteiros/praia-do-cassino/_ferramentas/preparar-voz.mjs` sobre o roteiro aprovado `3348a7b2cc5d` (`gate.mjs --derivados` sai 0).
- **A rodada:** `node C:/projetos/regie-v1/src/ferramentas/narrar.mjs praia-do-cassino`, depois do `--simular`; um pedido por parágrafo,
  com o `canal.json` › `narracao` (eleven_v4, a voz `829pig94w9GefZ9jJQYl`, stability 0,5, similarity 0,75, pausa 0,25 s). O log está
  em `out/praia-do-cassino/_tmp/narrar-1.log`.
- **O gasto:** **6.489 créditos**, a soma do `character-cost` dos 21 pedidos (`out/praia-do-cassino/narracao.json` › `custo`), para
  13.477 caracteres: 0,48 crédito por caractere. Com a amostra, o vídeo gastou **7.575** dos 15.000 que a autonomia dá.
- **O tratamento:** `python -X utf8 -B out/juneau/_pesquisa/tratar-narracao.py praia-do-cassino`:
  - 21 trechos esmaecidos e nenhum som solto;
  - a cauda de 20 s da tela final (812,2 → 832,2 s);
  - sha256 `b8e2d6e570a0` → `0dbd4bd23191`.

  A fala dura 13:32.

## A conferência (o ouvido da máquina)

`python -X utf8 -B out/juneau/_pesquisa/conferir-paragrafos.py praia-do-cassino` usa o faster-whisper large-v3 local, trecho por trecho.
O laudo está em `out/praia-do-cassino/_narracao/conferencia-paragrafos.json`, fora do git, e o log em `_tmp/conferir-1.log`.

- **Nenhum parágrafo parou antes do fim**, e nenhuma palavra foi pulada.
- A cobertura vai de 95,3 % a 100 %.
- O silêncio mediano dos trechos é 0,04 s no começo e 0,16 s no fim.

Os 6 trechos marcados "CONFERIR" e as outras diferenças se explicam assim:

| Trecho | O que o Whisper marcou | O que é |
|---|---|---|
| 5, 9, 11, 19 | "G one" → "g1" (no 11, "one G one" → "1g1") | o Whisper reconheceu o nome do site: a voz disse "G one" |
| 15, 16 | "thousand" → "zero" | o Whisper escreveu "5 ,000", com espaço antes da vírgula (como no Big Sur); a palavra está lá |
| 6, 8, 11, 12, 14, 15, 17 | "it's" → "its" | grafia do Whisper |
| 4; 7; 15 | "recognised" → "recognized"; "Bazar" → "bazaar"; "geologists" → "geologist's" | grafia do Whisper |
| 9, 16, 20 | "Cassino" → "casino" | a forma que a folha de pronúncia espera (a do dicionário para esta grafia) |
| 9; 18 | "Vitória" → "Vittoria"; "Albardão" → "Albardao" | a grafia que o Whisper deu ao nome ouvido; a pronúncia fica para a escuta do Lucas |
| **8, 11, 21** | **"Chuí" → "Chuy" (8) e "chewy" (11, 21)** | **sinal de que a voz diz o "ch" do inglês ("CHOO-ee"), e não o "sh" do português (shoo-EE).** É o risco alto da folha de pronúncia. Vai à escuta do Lucas, com a grafia de apoio da amostra ("Shoo-EE", em 0:56) para comparar |
| 6 | REPETIU "could" ("we could could find") | **do transcritor.** No recorte curto, a voz diz "we could find", uma vez |
| 10 | "we" → "we've" | **do transcritor.** O recorte curto ouve "we found", como no texto |
| 15 | ACRESCENTOU "Sunday" depois de "the channel at Rio Grande" | **do transcritor.** O recorte curto ouve "the channel at Rio Grande, which the freshwater…", sem nada a mais |
| 6, 14 | silêncio do fim 0,00 s | **não há corte.** A energia cai a −85 dBFS de 100 a 140 ms antes do fim, como nos trechos 10 e 15 (comparação). A última palavra sai com probabilidade alta: "beach." (0,98) e "did." (1,00) |

Os recortes curtos são de `out/praia-do-cassino/_pesquisa/conferir-pontos.py`: 7 s em volta de cada ponto, ou os últimos 3,5 s de cada
trecho, com a energia dos últimos 200 ms em quadros de 20 ms. Ninguém ouviu: é medida, não escuta.

## Os minutos dos nomes na narração

`node out/praia-do-cassino/_pesquisa/minutos-nomes.mjs` estima, pela fração de caracteres dentro de cada trecho, onde cada nome cai na
`narracao.wav`. O erro é de poucos segundos.

| Nome | Vezes | Onde (§trecho, minuto) |
|---|---|---|
| Praia do Cassino | 2 | §1 0:00; §4 1:02 |
| Cassino (sozinho) | 5 | §9 4:12, 4:32 e 4:43; §16 10:08; §20 12:29 |
| Rio Grande (a cidade) | 7 | §5 1:30; §8 3:31; §9 4:10 e 4:39; §15 9:23; §19 12:07; §20 12:28 |
| Rio Grande do Sul | 3 | §13 7:19 e 7:32; §18 11:16 |
| Chuí | 3 | §8 3:52; §11 6:04; §21 12:57 |
| Barra do Chuí | 1 | §9 4:44 |
| Albardão | 1 | §18 11:04 |
| Santa Vitória do Palmar | 1 | §9 4:25 |
| Lagoa dos Patos | 2 | §8 3:38; §15 9:05 |
| Lagoa Mirim | 1 | §15 9:06 |
| G one | 5 | §5 1:19 e 1:27; §9 4:16; §11 5:22; §19 11:56 |
| Padre Island | 1 | §7 3:05 |
| Cox's Bazar | 1 | §7 3:13 |
