# Pedido: as 3 miniaturas da pauta do vídeo 8 (`arizona-strip`), 18/11/2026

Você é o desenhista de miniaturas, um subagente da Sala de controle do canal Alpha Point (raiz: `C:\projetos\alpha-point`), um canal do YouTube de
geografia em inglês dos EUA. As notas são em português; o texto da imagem, em inglês.

## A tarefa

Desenhar as **3 miniaturas que o §8 da pauta descreve** (`pautas/2026-11-18-video-8-arizona-strip.md`; se a Sala mandar uma lista diferente no
despacho, vale a do despacho), no estilo das referências do Lucas, que é o de `marca/embalagem.md` §3: o relevo amarelo, a água azul, o assunto
em vermelho, o secundário em ciano, uma caixa preta ou amarela com 1 a 3 palavras, setas brancas grossas. As referências estão em
`out/rio-columbia/_tmp/miniatura/referencias/`.

**O código já existe:** em `out/_pautas/video-8/miniaturas/` estão o `mapa.py`, o `bases.py`, o `folha.py` e a miniatura "CUT OFF" da Strip
(`arizona-strip.py`, `arizona-strip-bases.py`, `arizona-strip-1280.jpg`). Leia o `RELATO.md` de lá antes de tudo. Reaproveite as bases baixadas
em `out/_pautas/video-8/miniaturas/_bases/` (o relevo da GIBS, o Census, a resposta da Overpass) sem movê-las nem apagá-las. **Não edite** os
arquivos de `out/_pautas/video-8/miniaturas/`: copie o que precisar para a pasta nova e mude a cópia.

## A saída

Na pasta `roteiros/arizona-strip/miniatura/`:
- para cada miniatura `m1`, `m2` e `m3`: `m<n>-1280.jpg` (1280×720), `m<n>-2560.jpg` (2560×1440), as prévias `m<n>-320.png` e `m<n>-168.png`,
  e o script `m<n>.py` (sem rede);
- `folha.png`: as 3 lado a lado, como o YouTube mostra (a 1280 com o título embaixo, a 320 e a 168), com o título que a pauta recomenda;
- `RELATO.md`: o que cada uma mostra, as fontes de cada camada (com a licença e o crédito: o relevo da NASA GIBS, o Census, o OSM com "©
  OpenStreetMap contributors"), as medidas (quanto da imagem o vermelho ocupa; a legibilidade da palavra na 168) e o que você conferiu;
- downloads novos, se precisar, em `roteiros/arizona-strip/miniatura/_bases/` (fora do git).

**A conferência antes de entregar** (`marca/embalagem.md` §3): olhe cada uma em 1280, 320 e 168, com o título embaixo. A palavra da caixa tem de
ler na 168. A geografia tem de estar certa: a Strip é o pedaço do Arizona ao norte do rio (os dois CCDs do Census que o cético somou), as divisas
são as do TIGERweb, e uma seta que represente uma estrada segue a estrada de verdade.

## Regras (todas valem)

- **Não use `SendMessage` nem `send_message`**; sem navegador (nenhuma ferramenta `mcp__Claude_Browser__*` nem `mcp__claude-in-chrome__*`); sem
  vidIQ; sem commit; **nunca a MapTiler** nem outro serviço pago.
- Pedidos de rede só pelo `bases.py` (um por vez, com o User-Agent do canal), e só se a base que já existe não servir. Leia o robots.txt antes do
  primeiro pedido a um site novo. Site que recusa leitura automática não se contorna.
- Python sempre num arquivo (`python -X utf8 -B <arquivo>.py`); nunca `python -`, heredoc ou pipe para o Python. Nada pessoal em arquivo nenhum.
- Nada de Short Creek, de gente ou de fotos de pessoas na miniatura.

Ao terminar, responda à Sala com o caminho da folha, uma linha por miniatura (o que mostra e a palavra) e o que ficou fraco.
