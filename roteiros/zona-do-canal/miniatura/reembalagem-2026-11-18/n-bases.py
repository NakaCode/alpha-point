"""As bases das 2 miniaturas novas da reembalagem do vídeo 2 (`zona-do-canal`, 18/11/2026): n1 "BORN HERE?" e n2 "GOLD / SILVER". CÓPIA de
roteiros/australia-animais/miniatura/m-bases.py (que não foi editado nem rodado), com os pedidos trocados pelos do Panamá. Pedidos de rede, um
por vez, com o User-Agent do canal (bases.py, a cópia desta pasta); os arquivos vão para roteiros/zona-do-canal/miniatura/reembalagem-2026-11-18/
_bases/ (fora do git, .gitignore linha 108), com o .json ao lado, e cada pedido vai ao _bases/pedidos.jsonl. Nada que já está no disco se pede
de novo.

    python -X utf8 -B -P roteiros/zona-do-canal/miniatura/reembalagem-2026-11-18/n-bases.py        (da raiz do canal)

O que já estava no disco e serve (sem pedido; lido no lugar, sem copiar nem mover):
- a Zona: out/zona-do-canal/_media/geo/zona-do-canal-1947.json (a folha AMS de 1947, LOC 83694755; domínio público);
- Balboa: out/zona-do-canal/_media/geo/lugares-1936.json (o Balboa Clubhouse, da folha de 1936, NARA 192812325; domínio público);
- Silver City: out/zona-do-canal/_media/geo/lugares-1947.json (a folha AMS de 1947; domínio público);
- o mar: out/zona-do-canal/_media/geo/agua-osm-zona.json (os water polygons do OSM, ODbL) e o Panamá do Natural Earth (panama-ne.json, domínio
  público), para conferir a costa;
- o colormap do ASTER_GDEM_Color_Index (out/_pautas/video-8/miniaturas/_bases/, lido sem mover).

O que falta, e se pede à GIBS (a mesma porta do Grand Canyon, das florestas, da Austrália e do Peru): o relevo do ASTER GDEM em cinza, o índice de
cor da altitude e a Blue Marble com batimetria, num recorte em volta do istmo: de 80,9 a 78,3 O e de 8,4 a 10,0 N (o quadro da B3 vai de 80,47 a
78,96 O e de ~8,83 a ~9,67 N; a folga é para alargar o quadro até onde a caixa pedir). Nenhuma base da GIBS no disco cobre o Panamá (as do Peru
vão até 0,8 N). A GIBS não é site novo para o canal (o robots.txt dela deu 404 em 17/11 e em 24/10); mesmo assim, bases.robots() o lê e grava
antes do 1º pedido desta pasta.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bases as B

ETAPA = os.environ.get("MINI_ETAPA", "tudo")
LON0, LAT0, LON1, LAT1 = -80.9, 8.4, -78.3, 10.0

if ETAPA in ("tudo", "gibs"):
    B.robots("gibs.earthdata.nasa.gov", "/wms/epsg3857/best/wms.cgi")
    B.gibs_relevo("panama-aster-relevo", LON0, LAT0, LON1, LAT1, 5600)
    B.gibs_elevacao("panama-aster-altitude", LON0, LAT0, LON1, LAT1, 5600)
    # a Blue Marble é de 500 m: 2800 px (~103 m de Mercator por px) já passam do que ela tem
    B.gibs_bluemarble("panama-bluemarble", LON0, LAT0, LON1, LAT1, 2800)
