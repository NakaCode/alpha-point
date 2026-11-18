"""As bases das 2 miniaturas novas da reembalagem do vídeo 3 (`peru-agua`, 18/11/2026): n1 "ONLY 2%" e n2 "AMAZON SIDE". CÓPIA de
roteiros/australia-animais/miniatura/m-bases.py (que não foi editado nem rodado), com os pedidos trocados pelos do Peru. Pedidos de rede, um
por vez, com o User-Agent do canal (bases.py, a cópia desta pasta); os arquivos vão para roteiros/peru-agua/miniatura/reembalagem-2026-11-18/
_bases/ (fora do git, .gitignore linha 108), com o .json ao lado, e cada pedido vai ao _bases/pedidos.jsonl. Nada que já está no disco se pede
de novo.

    python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/n-bases.py        (da raiz do canal)

O que já estava no disco e serve (sem pedido):
- as camadas do vídeo (out/peru-agua/_media/geo/: as vertentes e a divisória do HydroBASINS, o Peru e os rios do Natural Earth, os pontos);
  lidas no lugar, sem copiar;
- os vizinhos: o Natural Earth 1:10m Admin 0 da pré-v1 (C:/projetos/regie-v1/acervo/geojson/, com o sha256 do manifest.json); o lago
  Titicaca: o ne_10m_lakes do cache da máquina (~/.regie/geo/natural-earth/); lidos no lugar;
- o colormap do ASTER_GDEM_Color_Index (out/_pautas/video-8/miniaturas/_bases/, lido sem mover);
- o mar: a Blue Marble com relevo e batimetria que a miniatura A baixou da GIBS em 24/10 (out/peru-agua/_tmp/miniatura/A/_base/, a janela da
  A3), copiada para _bases por bases.copiar_raster(), sem pedido. Serve às duas: na n2, ela é só a textura do mar, ampliada e borrada.

O que falta, e se pede à GIBS (a mesma porta do Grand Canyon, das florestas e da Austrália): o relevo do ASTER GDEM em cinza e o índice de
cor da altitude, em dois recortes:
- "peru" (n1): de 100,0 a 63,5 O e de 19,3 S a 1,3 N, com folga em volta da janela da A3 (99,50 a 63,94 O; 18,88 S a 0,80 N);
- "centro" (n2): de 80,2 a 73,6 O e de 14,3 a 10,0 S, o Peru central (Lima, a divisória e o alto Mantaro), com folga para acertar o quadro.
A GIBS não é site novo para o canal (o robots.txt dela deu 404 em 17/11 e em 24/10); mesmo assim, bases.robots() o lê e grava antes do 1º
pedido desta pasta.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bases as B

ETAPA = os.environ.get("MINI_ETAPA", "tudo")

# 1. o mar: a Blue Marble da A (24/10), copiada sem pedido
A_BM = os.path.join(B.RAIZ, "out", "peru-agua", "_tmp", "miniatura", "A", "_base", "bmng-relevo-batimetria-5120-w99.jpg")
if ETAPA in ("tudo", "copia"):
    B.copiar_raster(A_BM, "peru-bluemarble", "NASA Blue Marble com relevo sombreado e batimetria (GIBS, BlueMarble_ShadedRelief_Bathymetry), a "
                    "base da miniatura A do vídeo (24/10/2026), na janela da A3", "domínio público (NASA); " + B.GIBS_LICENCA,
                    B.GIBS_RECONHECIMENTO + " Blue Marble: NASA Earth Observatory.")

# 2. o robots.txt da GIBS (gravado em _bases) e o relevo nos dois recortes
if ETAPA in ("tudo", "gibs"):
    B.robots("gibs.earthdata.nasa.gov", "/wms/epsg3857/best/wms.cgi")
    B.gibs_relevo("peru-aster-relevo", -100.0, -19.3, -63.5, 1.3, 5600)
    B.gibs_elevacao("peru-aster-altitude", -100.0, -19.3, -63.5, 1.3, 5600)
    B.gibs_relevo("centro-aster-relevo", -80.2, -14.3, -73.6, -10.0, 5600)
    B.gibs_elevacao("centro-aster-altitude", -80.2, -14.3, -73.6, -10.0, 5600)
