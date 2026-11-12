# Rio Columbia (`rio-columbia`, o vídeo 7): a narração e a conferência

Feita pela Sala de controle na noite de 11 para 12/11/2026, depois de o roteiro ser aprovado pelos conferentes, por decisão do Lucas
(12/11/2026, ~01:2x: "Ou seja, dessa vez vamos ignorar a minha aprovação. Se os céticos aprovarem, pode prosseguir";
`roteiros/rio-columbia/decisoes-lucas.md`).

## Sem amostra de pronúncia

Não houve amostra antes da narração. Pela política de `marca/pronuncias.md`, um nome só ganha grafia de apoio (alias) depois de o Lucas o
ouvir errado, e esta noite ele não podia ouvir. A narração foi **sem alias**, como no Cassino, e a escuta dele vem depois, com a lista
abaixo. Parágrafo que soar errado se refaz sozinho (`narrar.mjs rio-columbia --refazer=N`), a custo baixo.

## A narração (12/11/2026)

- **O texto:** a cópia para a voz `out/rio-columbia/roteiro.md` (44 parágrafos, 15.406 caracteres, sem alias), feita por
  `roteiros/rio-columbia/_ferramentas/preparar-voz.mjs` sobre o roteiro aprovado `c4788c7ab3be` (`gate.mjs --derivados` sai 0).
- **A rodada:** `node C:/projetos/regie-v1/src/ferramentas/narrar.mjs rio-columbia`, depois do `--simular`. Foi um pedido por parágrafo,
  com o `canal.json` › `narracao` (eleven_v4, a voz `829pig94w9GefZ9jJQYl`, pcm_44100). O log está em `out/rio-columbia/_tmp/narrar-1.log`.
- **O gasto:** **7.417 créditos**, a soma do `character-cost` dos 44 pedidos (`out/rio-columbia/narracao.json` › `custo`), para 15.406
  caracteres: 0,48 crédito por caractere, o preço de 03/11. É o gasto inteiro do vídeo até aqui, dentro dos 15.000 que a autonomia dá.
- **O tratamento:** `python -X utf8 -B out/juneau/_pesquisa/tratar-narracao.py rio-columbia`:
  - 44 trechos esmaecidos e nenhum som solto;
  - a cauda de 20 s da tela final (907,95 → 927,95 s);
  - sha256 `91a489d89d9b` → `a42b283a7504`.

  A fala dura 15:08, e o vídeo, com a cauda, 15:28.

## A conferência (o ouvido da máquina)

`python -X utf8 -B out/juneau/_pesquisa/conferir-paragrafos.py rio-columbia` usa o faster-whisper large-v3 local, trecho por trecho. O
laudo está em `out/rio-columbia/_narracao/conferencia-paragrafos.json`, fora do git, e o log em `_tmp/conferir-1.log`.

- **Nenhum parágrafo parou antes do fim**, e nenhuma palavra foi pulada.
- A cobertura vai de 94,1 % a 100 % (34 dos 44 trechos com 100 %).
- O silêncio mediano dos trechos é 0,04 s no começo e 0,17 s no fim.

Os 5 trechos marcados "CONFERIR" e as outras diferenças:

| Trecho | O que o Whisper marcou | O que é |
|---|---|---|
| 6, 20, 32, 36, 39 | "it's" → "its" | grafia do Whisper |
| 13; 14 | "sites" → "sights"; "service's" → "services" | grafia do Whisper |
| 21 | "thousand" → "zero" (5 vezes) | o Whisper escreveu 450,000, 650,000 e 600,000 em algarismo; a palavra está lá |
| 25 | "dollars" a mais (3 vezes) | o Whisper escreveu "$4 to $34 million" e afins; a normalização do "$" soma a palavra |
| 33 | "thousand" pulado | o Whisper escreveu "2,300" em algarismo |
| **34** | **"Sinixt" → "cynicst" (2 vezes)** | **a voz deve ter dito "SIN-ikst"; a referência é "sin-AYKST" (`pronuncia.md`). É o ponto para o ouvido do Lucas** |

## A escuta do Lucas: onde cada nome de risco cai

O minuto é estimado pela posição do nome no trecho (`out/rio-columbia/_pesquisa/lista-escuta.py`), e erra por alguns segundos.

| Nome | Risco | Onde (trecho, minuto aproximado) |
|---|---|---|
| Sinixt | alto (o Whisper ouviu "cynicst") | 34 (11:51), 34 (12:03) |
| The Dalles | alto (o certo é "DALZ") | 9 (2:25), 9 (2:41), 21 (6:50), 22 (7:30), 28 (9:52) |
| Renata | médio | 33 (11:29) |
| Grand Coulee | médio | 35 (12:11) |
| Oregon | baixo a médio | 7 (1:19), 9 (2:27), 12 (3:34) |
| acre-foot / acre-feet | baixo a médio | 23 (7:57), 23 (8:01) |
| U.S. | baixo | 12 (3:42), 14 (4:20), 21 (7:13) |
| Vanport | baixo | 12 (3:31), 12 (3:34) |

**Se o Lucas ouvir um nome errado:** o alias entra em `roteiros/rio-columbia/_ferramentas/preparar-voz.mjs` (`ALIASES`, com o motivo e a
fala dele). Depois, refaz-se a cópia, roda-se `gate.mjs --derivados` e `narrar.mjs rio-columbia --refazer=<trechos>`, e então o tratamento e
a conferência. Só o trecho 34 custa uns 160 créditos.

**Com o "tudo certo" dele** vêm o master (`node out/juneau/_pesquisa/gerar-master.mjs rio-columbia`), o ingest
(`python out/juneau/_pesquisa/ingest-local.py rio-columbia`) e `regie open rio-columbia "Why the U.S. Pays Canada to Keep Part of a Lake
Empty"`. A escuta antes do master é obrigatória (`sala/narracao.md`: a repetição da voz só o ouvido humano pega).
