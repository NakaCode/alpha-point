# Gatilhos: escrever-textos-de-tela

O teste de disparo de mesa (catálogo §1.4 e §1.7; cético §5): pedidos que **devem** levar a esta skill e pedidos vizinhos
que **não devem**, com a skill para onde vão. Refaça o teste quando a descrição mudar.

## Devem acordar
- "Escreve os textos de tela do vídeo 8."
- "Que rótulo vai na pílula do número de mortes na s20?"
- "A régua da s58 volta sem nome; escreve a cota da ponta."

## Não devem acordar
- "Que crédito vai na foto da Smithsonian, e o que vai para a descrição?" → `escrever-credito-na-tela`
- "Confere se 85 mortes em dez anos está certo antes de ir à tela." → `verificar-fatos-do-video`
- "Escreve o roteiro do vídeo 8." → `gerar-roteiro-geografia`
- "Põe o rótulo na cena e confere a margem sob a câmera." → `editar-cena-html`

## O resultado do teste de mesa
- 18/11/2026, rodada 1 (um leitor em Sonnet, às cegas, 30 pedidos; `out/_skills/onda-0/disparo-mesa/`): devem 3/3; não devem 3/4. "Põe o rótulo na cena e confere a margem" veio para cá (a descrição dizia "quando uma cena precisa de texto na tela"). A descrição passou a dizer "as palavras", "quando falta o texto de uma cena" e "pôr o texto na cena é editar-cena-html".
- Rodada 2 (outro leitor, 14 pedidos, a descrição nova): devem 3/3; não devem 4/4, todos no vizinho previsto.
- Rodada 4 (18/11/2026, depois do cético da Onda 0, C9 e C16; a lista real, com as skills de fora do canal, e a descrição nova, "sem repetir a fala nem contradizê-la"; 33 pedidos): devem 3/3; não devem 4/4.
