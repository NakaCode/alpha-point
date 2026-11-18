# Pedido: a 2ª rodada do gerador de pautas do vídeo 8 (17/11/2026)

Você é um subagente da Sala de controle do canal Alpha Point (raiz: `C:\projetos\alpha-point`). Notas em português; títulos, ganchos e buscas em
inglês dos EUA. Leia antes o `out/_pautas/video-8/pedido-estrutural.md` (o contexto do canal, o pedido do Lucas e as regras valem igual) e o
`out/_pautas/video-8/estrutural.md` (a 1ª rodada; os 35 candidatos já vistos).

## O que a 1ª rodada ensinou (17/11/2026)

Cinco céticos testaram os 5 melhores da 1ª rodada (os laudos: `out/_pautas/video-8/cetico-*.md`). Quatro caíram, e pelo mesmo motivo:
- **Niágara à noite** (3,5): o título exato saiu em 13/11, e 10 vídeos longos no ângulo, todos depois de dois curtos virais de outubro.
- **A fronteira do Lake Tahoe** (5,0): 6 longos em um mês, depois de um curto de 722 mil; e o porquê era agrimensura e lei, não geografia.
- **Jackson Hole** (4,0): um vídeo de 460 mil (agosto) com os mesmos 3 atos, e os grandes (Wendover, Bloomberg) cobrindo riqueza e moradia.
- **O Vale Imperial** (4,0): 9 longos depois da decisão do governo de agosto sobre o rio Colorado, um com 453 mil.

Ficou de pé (6,0) só **a Arizona Strip**: o Grand Canyon corta um pedaço do Arizona, e as cidades de lá vivem ligadas a Utah e Nevada. É uma
**esquisitice de geografia de um lugar famoso, que se vê no mapa, sem notícia nem curto viral por trás**. O enxame de canais pequenos reage a viral e a
notícia em dias; o que nenhum viral levantou ainda está livre. E o melhor vídeo do canal (Big Sur) veio da **busca** pelo nome do lugar.

## A tarefa

Gere **30 candidatos** desse tipo e entregue **10 desenvolvidos e com a concorrência checada**:
- lugar famoso e buscado pelo nome (EUA primeiro; também Canadá e lugares que todo mundo conhece);
- uma esquisitice que o mapa mostra (uma linha, uma forma, uma distância, um lugar do lado "errado"), explicada pela geografia (relevo, rio, costa,
  clima, geologia) e pela história da terra — não por uma lei solta nem por uma notícia;
- sem curto viral nem notícia quente sobre o ângulo nos últimos 3 meses;
- fora das famílias saturadas ("nobody lives", "no bridge", "most valuable land", "hiding something", "impossible to invade") e fora de tudo o que já se
  testou: Niágara, Lake Tahoe, Jackson Hole, Vale Imperial, Arizona Strip, Death Valley e Mount Whitney, Okeechobee, Banff, e os 35 do `estrutural.md`
  (a não ser num ângulo claramente outro). A lista do saturado está no `out/_pautas/video-8/demanda.md` §3.

**A concorrência de cada um dos 10** (sem vidIQ): a busca da web restrita a youtube.com, com 3 ou 4 frases do ângulo; leia a página pública `/watch`
dos vídeos mais próximos (data, views, canal), um pedido por vez (o `out/_pautas/video-8/_trabalho/yt_meta.py` da 1ª rodada faz isso). Liste os 3 mais
próximos de cada um. Derrube o candidato se houver vídeo com o mesmo ângulo e mais de 50 mil views, ou 3 ou mais vídeos no ângulo em 2026.

Para cada um dos 10: o título de trabalho (≤ 65 caracteres, com o nome buscado do lugar) e 2 variantes; o paradoxo em uma frase; o gancho em inglês
(3 frases, até ~45 palavras, sem resposta); 4 a 6 fatos com a URL lida na origem e a data; a medida nossa (dado aberto, a conta); 3 atos em uma linha
cada; a miniatura no estilo das referências (o que fica vermelho, o que fica ciano, a palavra da caixa); as buscas prováveis (marque "não medido no
vidIQ"); a concorrência; os riscos; a nota de 0 a 10 na escala dura. No fim, o seu top 5.

## Regras

As do `pedido-estrutural.md`, todas: sem vidIQ, sem navegador, sem `SendMessage`/`send_message`, sem commit, sem contornar site que recusa robô, Python
num arquivo, nada pessoal. Dados brutos grandes (mais de 5 MB) apague ao fim ou deixe em `midia/_pautas/video-8/` (fora do git), não em `out/`.

## A saída

`out/_pautas/video-8/estrutural-r2.md`. Ao terminar, responda à Sala com o caminho, o seu top 5 (título, nota e o vídeo mais próximo de cada um) e o que
ficou "a confirmar" de mais importante.
