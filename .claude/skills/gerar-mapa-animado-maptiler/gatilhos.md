# Gatilhos: gerar-mapa-animado-maptiler

O teste de disparo de mesa (catálogo §1.4 e §1.7; cético §1 e §5): pedidos que **devem** levar a esta skill e pedidos
vizinhos que **não devem**, com a skill para onde vão. Os vizinhos que o cético apontou (a 30 × a 48, a 44 × a 45) estão
entre eles. Refaça o teste quando a descrição mudar.

## Devem acordar
- "Faz a cena s19 do vídeo 8: o mapa da Austrália com a área da taipan pintada."
- "Monta a animação do rio subindo até as barragens, sobre o satélite."
- "Cria a cena de mapa com a câmera voando de Sydney até o Channel Country."

## Não devem acordar
- "O espectador devolveu 5 consertos nas cenas de mapa. Aplica." → `consertar-cena` (lista de consertos; o cético tirou o "consertar" desta)
- "Baixa a geometria do rio Columbia no OSM, com a licença." → `gerar-geometria-de-mapa`
- "Quanto já gastamos de MapTiler neste vídeo? E o relevo 3D na s44, liga?" → `base-e-gasto-maptiler`
- "Renderiza a s19 em 4K para a entrega." → `renderizar-cena-4k`
- "Faz a cena da folha da lei sobre a mesa, com o grifo." → `editar-cena-html`
- "Desenha o mapa da Austrália em vermelho para a miniatura." → `titulo-e-miniatura` (catálogo; o cético da Onda 0, C9)

## O resultado do teste de mesa
- 18/11/2026, rodada 1 (um leitor em Sonnet, às cegas, com as 66 descrições e 30 pedidos embaralhados; `out/_skills/onda-0/disparo-mesa/`): devem 3/3; não devem 5/5, todos no vizinho previsto. Na rodada 3, "Faz o mapa da bacia com a câmera recuando" veio para cá, com `gerar-geometria-de-mapa` em segundo.
- Rodada 4 (18/11/2026, depois do cético da Onda 0, C9; a lista real, com as skills de fora do canal, e o vizinho novo da miniatura; 33 pedidos): devem 3/3; não devem 6/6. A animação do rio sobre o satélite não foi ao `higgsfield-generate`, nem em segundo.
