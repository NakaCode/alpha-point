"""As bases novas da m3 ("UTAH WANTED IT"; pauta do vídeo 8, §8; 18/11/2026). Pedidos de rede, um por vez, com o User-Agent do canal
(bases.py, a cópia desta pasta); os arquivos vão para roteiros/arizona-strip/miniatura/_bases/ (fora do git), com o .json ao lado.

    python -X utf8 -B -P roteiros/arizona-strip/miniatura/m3-bases.py      (da raiz do canal)

Por que a m3 pediu base nova (a m1 e a m2 usam só as de out/_pautas/video-8/miniaturas/_bases/):
- a base da busca vai de 115,8 a 109,8 O e de 34,7 a 38,0 N. A m3 mostra o sul de Utah em cima e leva uma caixa de duas linhas ("UTAH" /
  "WANTED IT") que tem de ler no 168: com "WANTED IT" a 180 px, a caixa tem ~1.120 px de largura e ~470 de altura no palco;
- no quadro que mostra o sul de Utah, a caixa não cabe entre o Grand Canyon e a borda de baixo (o rio desce a 35,77 N no Diamond Creek),
  e, à esquerda, sobre Nevada, a base da busca deixa só ~740 px entre a borda dela e a divisa de 114,05 O;
- com a base até 117,0 O, o quadro da m3 (de ~116,5 a ~111,3 O) deixa ~1.200 px de Nevada à esquerda para a caixa, sem cobrir Utah nem a
  Strip, e vai até 37,85 N.
O recorte é o da busca alargado a oeste e ao norte, na mesma resolução (~124 m de Mercator por px). O colormap da GIBS já está no disco
(out/_pautas/video-8/miniaturas/_bases/), e a água (OSM) e o Census servem como estão: nada mais se pede.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bases as B

B.gibs_relevo("m3-aster-relevo", -117.0, 35.1, -110.8, 38.25, 5580)
B.gibs_elevacao("m3-aster-altitude", -117.0, 35.1, -110.8, 38.25, 5580)
