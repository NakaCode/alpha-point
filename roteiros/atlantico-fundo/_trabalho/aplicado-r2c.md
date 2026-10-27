# A lista r2c, aplicada (vídeo 5, `atlantico-fundo`)

Feita e aplicada pela Sala em 26/10/2026, à noite. Sem commit nesta etapa, sem rede no aplicador, sem crédito.

## Por quê

A conferência de fatos da lista r2b julgou `ffafacc2329b` e deu RESSALVA, nota 9,0, com 288 de 289 linhas confirmadas. O laudo foi
renomeado para `qc-roteiro/fatos-r2c.laudo.md`, porque é a entrada desta lista, e a tabela dele ficou em
`_trabalho/fatos-tabela-r2c.antes.json`.

O único achado foi o A1, LEVE:
- "about a decade earlier" fica a 27,5 % dos 7,84 anos que as cópias dão: de 26/03/1875 a 27/01/1883. O IHR diz "eight years
  previously";
- a régua do "about" é de 10 %, e só a data de março de 1873, que nenhuma cópia dá, sustentava a forma;
- a troca exata do laudo é "less than a decade earlier", que vale para as duas datas (7,84 e 9,84 anos).

O laudo também achou o O9, que corrige a nota do dossiê e não toca a voz. Stewart & Jamieson 2019 não dão ano à sondagem de Porto
Rico, e o "HMS Challenger 1875" da Tabela 1 deles é a das Marianas. O F22 foi posto em dia, com o C29.

## O item (`_trabalho/lista-r2c.json`)

**L74 · ENFRAQUECER:** "The trench itself had been found about a decade earlier," → "The trench itself had been found less than a
decade earlier,".

O editor recebeu 6 pares:
- a frase;
- a nota do Challenger;
- o destino das cifras;
- a tabela das partes;
- o bloco "A lista r2c da Sala".

## O aplicador e o portão

`node ferramentas/aplicar-lista.mjs atlantico-fundo --lista=roteiros/atlantico-fundo/_trabalho/lista-r2c.json`: SECO_OK e APLICADO,
exit 0, com 1 item e 1 diferença (p1). Não houve frase sem item, recusa, aviso nem pendente. Os 6 pares do editor casaram.

Texto falado: `ffafacc2329b4a537328100990204af8d1aa885d2e3290d8e36adad4d4f78b3a` →
`b064eb75cb8ccfd1f4373650be4f9a67cc1bd4588ad5775b77eb948ba7497345`.

As cópias de antes, conferidas pelo sha256:
- `_trabalho/roteiro-r2c.antes.md`;
- `_trabalho/roteiro-editor-r2c.antes.md`.

**`gate.mjs` PASSA:** 2.030 palavras e nenhum problema. Com `--derivados`, sai 0: o editor e a pronúncia citam `b064eb75cb8c`.

**A prova do portão:** 135 de 135. O caso que passa do [challenger-ano] agora usa "less than a decade earlier".

**A pronúncia:**
- o pedido 3 da amostra foi posto em dia;
- 14 de 14 linhas casam com o roteiro;
- a amostra tem 2.570 caracteres.

## O que falta

A conferência de fatos da frase trocada, com a linha F041 da tabela e o laudo de fatos no sha novo, e a leitura do Lucas.
