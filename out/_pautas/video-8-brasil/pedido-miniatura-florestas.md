# Pedido: a miniatura das duas florestas (vídeo 8, Brasil), 18/11/2026

Você é o desenhista de miniaturas da Sala de controle do canal Alpha Point (raiz: `C:\projetos\alpha-point`). Notas em português; o texto da imagem,
em inglês.

**A pauta:** "Why the Amazon Doesn't Touch Brazil's Other Rainforest" (o título que o cético defende). Leia o laudo
`out/_pautas/video-8-brasil/cetico-duas-florestas.md` (a geometria, o vão de 352,8 mi no mapa de biomas do IBGE, edição 2025, entre Canarana, MT, e o
sul de Goiás perto de Quirinópolis) e a seção 1 de `out/_pautas/video-8-brasil/gerador.md`.

**O estilo e o código:** os de `pautas/arizona-strip/_trabalho/pedido-miniaturas.md` (leia-o: o estilo das referências do Lucas, o código comum em
`out/_pautas/video-8/miniaturas/` e em `roteiros/arizona-strip/miniatura/`, a conferência em 1280, 320 e 168, as regras). Copie o que precisar;
não edite nada nessas pastas.

**As duas miniaturas:**
- **m1, "THE GAP":** o leste da América do Sul em relevo amarelo, o mar azul; a **Mata Atlântica em vermelho** e a **Amazônia em ciano**, pela
  geometria do mapa de biomas do IBGE 2025 (o cético a baixou; procure em `midia/_pautas/video-8-brasil/` antes de baixar de novo); no vão, uma
  seta branca grossa de duas pontas entre os dois pontos mais perto; a caixa preta "THE GAP".
- **m2, "350 MILES":** o mesmo mapa, com a caixa "350 MILES" sobre o vão (o número é do mapa de biomas; arredondado para baixo).
O título embaixo, na folha: "Why the Amazon Doesn't Touch Brazil's Other Rainforest".

**A saída:** em `out/_pautas/video-8-brasil/miniaturas/`: `florestas-m1-1280.jpg`, `florestas-m1-2560.jpg`, `florestas-m2-1280.jpg`,
`florestas-m2-2560.jpg`, as prévias 320 e 168 em PNG, os scripts, a `folha.png` e o `RELATO.md` (as fontes de cada camada com a licença e o
crédito, as medidas, o que ficou fraco). Downloads novos em `out/_pautas/video-8-brasil/miniaturas/_bases/` (fora do git).

**Regras:** não use `SendMessage` nem `send_message`; sem navegador (`mcp__Claude_Browser__*`, `mcp__claude-in-chrome__*`); sem vidIQ; sem commit;
nunca a MapTiler nem outro serviço pago; pedidos de rede um por vez, com o User-Agent do canal, e só se a base que já existe não servir; leia o
robots.txt antes do primeiro pedido a um site novo; site que recusa leitura automática não se contorna; Python só num arquivo
(`python -X utf8 -B <arquivo>.py`).

Ao terminar, responda à Sala com o caminho da folha, uma linha por miniatura e o que ficou fraco.
