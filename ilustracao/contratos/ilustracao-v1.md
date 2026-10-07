# Contrato de ilustração v1 — adição experimental

Este contrato é aditivo; não substitui contratos do consumidor. A implementação do perfil é `ferramentas/ilustracao/validar.py`. Exemplos mínimos executáveis são construídos em `laboratorio/testes/test_ilustracao.py`, sem depender de identidade de canal.

## Pedido externo

`versao_contrato: 1`, `projeto`, `cena`, `consumidor`, `entradas` (caminho e SHA-256), `objetivo`, `regime_midia`, `pecas` e `limites`. Cada peça pede `id`, `objeto`, `funcao`, `viewBox`, `acoes`, `areas_texto` e referências permitidas. A ação descreve capacidade necessária; seus tempos pertencem à regência/editor. As instruções de um caso não entram no ofício do agente.

## Manifesto da entrega

Campos obrigatórios: `versao_contrato`, `projeto`, `cena`, `versao`, `estado`, `midia`, `pedido_sha256`, `tokens_permitidos`, `pecas`, `verificacoes`.

Cada peça: `id`, `arquivo` (arquivo relativo ao manifesto, sem sair da pasta), `sha256`, `viewBox`, `partes` e `areas_texto`. Cada parte: `id` de um `<g>` já presente no SVG, `pivot: [x,y]`, `bounds: [x,y,w,h]`, `animavel` e `transformacoes` (subconjunto de `translate`, `rotate`, `scale`, `opacity`, `visibility`). O ponto de pivô e os limites usam o sistema local declarado. Bounds são a declaração do produtor, não uma medição automática do contorno.

## Perfil SVG v1

Vetores estáticos, sem texto editorial, scripts, CSS embutido, referências externas, filtros, máscaras, imagens ou animação autônoma. Tags do perfil: svg, g, defs, path, rect, circle, ellipse, line, polyline, polygon, pattern, use e title/desc. Paint usa `var(--token)` da lista permitida, `none`, `currentColor`, `transparent`, `inherit` ou `url(#id-local)`. IDs começam pelo prefixo da peça. Referências internas precisam resolver. Não é um sanitizador para SVG hostil: é um perfil restrito para entregas produzidas neste fluxo.

Arquivos com recursos fora do perfil pedem nova versão do contrato e testes concretos; não remova silenciosamente efeitos para passar no validador. O manifesto congela a geometria em SHA-256. O consumidor insere o SVG inline; fica responsável pelos wrappers de composição e pelos atributos permitidos dos grupos animáveis. Não edita paths para “adaptar”. Se precisar mudar geometria, devolve ao ilustrador.

## Prova de consumo

O teste de integração compara a árvore SVG fonte com a árvore inline de cada arquivo, ignorando apenas `transform`, `opacity` e `visibility` nos grupos declarados animáveis e atributos de apresentação no `<svg>` raiz. Verifica cada ID e referência. Testa a mesma cena com seeks fora de ordem, em página nova, e com a narração existente. Isso demonstra fidelidade estrutural e captura determinística; ainda exige revisão visual e QC independente.

## Versionamento e estados

Cada mudança após consumo recebe pasta `v002`, `v003` etc. Nunca sobrescreva uma entrega que outro consumidor já referenciou. As verificações registram arquivo/evidência e estado `passou`, `falhou`, `nao_medido` ou `nao_aplicavel`. `aprovado` só com laudo independente. Um SVG que passou no parser continua `preparado` até ser visto no contexto.
