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

## `pagina-de-decisoes/`

É o gerador da página em que o dono marcou as pendências (24/09/2026):
- `itens.mjs`: os itens e as trocas;
- `montar-dados.mjs`: confere as trocas contra o texto e faz a prévia palavra por palavra;
- `montar-pagina.mjs` + `pagina.template.html`: a página publicada.

As marcações ficaram guardadas na própria página, e `roteiros/juneau/aprovacao.md` resume o que foi
decidido.
