# Pedido: as miniaturas da reembalagem, um desenhista por vídeo (18/11/2026)

**O estilo, o código e as regras são os do pedido das miniaturas do Grand Canyon, `pautas/arizona-strip/_trabalho/pedido-miniaturas.md` (leia-o
inteiro)**, com estas mudanças:

- **O que desenhar:** as 2 miniaturas novas do item 4 de `out/_reembalagem/2026-11-18/<proj>/cetico.md` (leia o laudo inteiro; o pedido do Lucas e
  as regras estão em `out/_reembalagem/2026-11-18/decisoes-lucas.md`). Na folha, o título embaixo é o mais clicável do cético.
- **O código:** comece do que o vídeo já tem (os `base-*.py` e os relatos de `roteiros/<proj>/miniatura/`) e do código de hoje
  (`roteiros/australia-animais/miniatura/`; `out/_pautas/video-8/miniaturas/`: `mapa.py`, `bases.py`, `folha.py`). Copie para a pasta nova e mude a
  cópia; não edite nenhum arquivo antigo.
- **As do Lucas, para os leitores:** de cada miniatura dele que o cético listou (a que está no ar e as que foram ao teste), faça a prévia de 320 e a
  de 168 a partir do JPG que já existe, sem mudar nada no desenho: `l-<id>-1280.jpg` (cópia), `l-<id>-320.png` e `l-<id>-168.png`, com o `<id>` do
  arquivo de origem (a E, a B3, a A3…).
- **A saída:** `roteiros/<proj>/miniatura/reembalagem-2026-11-18/`: `n1-2560.jpg`, `n1-1280.jpg`, `n1-320.png`, `n1-168.png`, o mesmo para `n2`, as
  prévias das do Lucas, a `folha.png` (todas lado a lado, as do Lucas primeiro, com o título embaixo) e o `RELATO.md` (de onde veio cada base, com a
  licença lida, e o que ficou fraco). Os downloads em `roteiros/<proj>/miniatura/reembalagem-2026-11-18/_bases/` (fica fora do git).

**Lembretes:** não use `SendMessage` nem `send_message`; sem navegador; sem vidIQ; sem commit; nunca a MapTiler; leia o robots.txt antes do
primeiro pedido a um site novo, e site que recusa leitura automática não se contorna; não grave nada fora da pasta nova; Python só num arquivo
(`python -X utf8 -B <arquivo>.py`), nunca `python -c`.

Ao terminar, responda à Sala com o caminho da folha, uma linha por miniatura e o que ficou fraco.
