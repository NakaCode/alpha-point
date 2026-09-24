# Ferramentas do roteiro de Juneau

Os scripts que geraram `roteiro.json`, `roteiro-narrador.md`, `roteiro-editor.md`, os laudos de
`qc-roteiro/` e a folha de pronúncia. Estão aqui para que uma mudança futura no roteiro não precise
ser feita à mão, contra o aviso "gerado do `roteiro.json`; não edite aqui".

**Os dados de entrada não estão no git:** o ledger de afirmações (`ledger.json`), os resultados das
rodadas (`junto-*.json`, `r*-result.json`) e as partes de cada revisão (`r*-secoes.json`). Eles ficam em
`midia/juneau/roteiro/_execucao/`, só nesta máquina, porque trazem passagens das fontes (regra 3 do
canal: o bruto não viaja). Rode os scripts de dentro dessa pasta.

## O caminho de uma mudança no texto

1. As trocas exatas (`{de, para}`), aprovadas pelo dono, entram num `aplicar-*.mjs`. Cada troca tem de
   casar uma vez só. Os vínculos de cada frase com o ledger são refeitos, e o que não se refaz sozinho vai
   para um `*-manual.json`.
2. `preparar-*.mjs` roda o gate (tamanho, média de palavras por frase, palavras vetadas, a promessa
   literal, a regra do Willow) e gera a narração, a lista de afirmações e o dossiê interno, carimbados
   com o sha256 da narração.
3. `diff-*.mjs` prova quais frases mudaram. O verificador de fatos reconfere só essas, e as demais ficam
   idênticas byte a byte à revisão já verificada.
4. A bancada (crítico, clareza, locução, fatos) julga o texto exato e declara o sha no laudo.
5. `juntar-*.mjs` junta a rodada ao histórico, e `montar-roteiro.mjs <junto.json> <saída>` gera os arquivos.

`selecionar.mjs <ids>` mostra só as afirmações pedidas do ledger, com fonte e passagem.

`aplicar-pronuncias-ouvidas.mjs <junto.json>` grava na folha de pronúncia o que o dono confirmou de ouvido
(24/09/2026: Gladziszewski, Kiehl, KTOO e Mat-Su). Mexe só em `pronuncia`; depois, `montar-roteiro.mjs` regenera a
folha, e os demais arquivos saem idênticos byte a byte.

## A cópia para a voz

`preparar-voz.mjs` (sem argumentos; roda daqui mesmo, porque lê `../roteiro.json`, que está no git) gera
`roteiros/juneau/voz/`:
- `texto-para-voz.md`: o texto aprovado com a grafia ajustada para a ElevenLabs. Números, datas e dinheiro vão por
  extenso, e entram os aliases confirmados de ouvido (`marca/pronuncias.md`);
- `trocas.md`: cada troca, com o motivo;
- `amostra.md`: uns 700 caracteres de frases inteiras, para comparar as vozes.

O script recusa rodar se `roteiro.json` não for a revisão aprovada (`c8677c8e3318`). Antes de gravar, prova que
desfazer as trocas devolve o texto aprovado byte a byte e que não sobrou dígito, `$` nem `%`. Se o roteiro mudar,
atualize o sha no topo do script depois da nova aprovação.

## `pagina-de-decisoes/`

É o gerador da página em que o dono marcou as pendências (24/09/2026):
- `itens.mjs`: os itens e as trocas;
- `montar-dados.mjs`: confere as trocas contra o texto e faz a prévia palavra por palavra;
- `montar-pagina.mjs` + `pagina.template.html`: a página publicada.

As marcações ficaram guardadas na própria página, e `roteiros/juneau/aprovacao.md` resume o que foi
decidido.

## Rodada 7: o tom de conversa

O dono ouviu a narração do texto aprovado e pediu "um tom mais conversacional, como alguém contando algo/apresentando"
(24/09/2026). Três passadas, cada uma conferida contra as fontes do dossiê por um conferente cético:
1. a reescrita seção por seção, no registro da prova aprovada (`voz/teste-conversa.md`), revista por quatro lentes
   (persona, ouvido americano, leitura pela voz, costura) → `r7-result.json`;
2. o enxugamento, porque a reescrita passou do limite de 1.850 palavras → `r7-enxugar-result.json`;
3. o polimento dos trechos que a leitura final ainda achou lidos → `r7-polir-result.json`.

De dentro de `midia/juneau/roteiro/_execucao`:
- `juntar-r7.mjs` põe as três camadas uma sobre a outra (a seção que uma passada não aprovou fica como estava) →
  `r7-final-result.json`;
- `aplicar-r7.mjs r7-final-result.json [escolhas.json]` troca os parágrafos e leva cada afirmação ao trecho novo
  (tem de ser literal) → `r7-secoes.json`, `r7-trocas.json`, `r7-itens.json`. Sem escolhas, aplica todas as novas;
- `preparar-r7.mjs` é o portão (o da r6, mais a regra das datas em fila) e `diff-r6-r7.mjs` a prova de alcance.

`pagina-r7/` gera a página em que o dono escolhe, parágrafo por parágrafo, entre o texto de hoje e o novo:
`montar-dados.mjs <roteiro-narrador.md> r7-itens.json r7-final-result.json r6-secoes.json <dados.json>` e
`montar-pagina.mjs <dados.json> <saída.html>`.

O dono viu a página e decidiu ficar com o texto aprovado (24/09/2026; `aprovacao.md`). As ferramentas ficam para
uma próxima vez em que o tom precisar mudar sem mexer nos fatos.
