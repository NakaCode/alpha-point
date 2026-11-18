# Gatilhos: registrar-aprendizado-como-skill

O teste de disparo de mesa (catálogo §1.4 e §1.7; cético §5): pedidos que **devem** levar a esta skill e pedidos vizinhos
que **não devem**, com a skill para onde vão. Refaça o teste quando a descrição mudar (etapa 7 da skill).

## Devem acordar
- "Isso não pode se repetir no próximo vídeo: transforma em skill."
- "O espectador achou de novo uma peça sem nome no mapa. Registra a lição onde ela vale."
- "O Overpass deu 504 e a gente resolveu dividindo a relation. Anota o aprendizado para não tropeçar de novo."
- "Errei o formato da data na tela e o Lucas corrigiu. Registra para não errar de novo."

## Não devem acordar
- "O Lucas escolheu o Lesoto para o próximo vídeo. Registra a decisão." → `registrar-decisao-do-dono` (decisão sem erro; catálogo, ainda não criada)
- "Conserta o '·' solto na s19." → `consertar-cena` (o conserto, não o registro; catálogo)
- "Roda o portão de margens na s41." → `medir-margens-da-cena` (catálogo; hoje, `ferramentas/portao-margens.mjs`)
- "Commita os aprendizados do vídeo 7." → `commitar-no-canal` (catálogo)

## O resultado do teste de mesa
- 18/11/2026, rodada 1 (um leitor em Sonnet, às cegas, com as 66 descrições e 30 pedidos embaralhados; `out/_skills/onda-0/disparo-mesa/`): devem 4/4; não devem 4/4. O "Roda o portão de margens" foi para `medir-margens-da-cena`, e não para `rodar-portoes-de-cena`: o vizinho previsto mudou para ele.
- Rodada 4 (18/11/2026, depois do cético da Onda 0, C9; outro leitor em Sonnet, às cegas, com a lista que a conversa da Sala vê de verdade, 96 skills, 33 só com o nome, e as 61 do catálogo à parte; 33 pedidos): devem 4/4; não devem 4/4, todos no vizinho previsto.
