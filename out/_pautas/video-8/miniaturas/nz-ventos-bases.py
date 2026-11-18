"""As bases da miniatura de `nz-ventos` (vídeo 8, esboço; 18/11/2026). Pedidos de rede, um por vez, com o User-Agent do canal:
1. NASA GIBS, o relevo ASTER GDEM em cinza, do centro da Nova Zelândia (o sul da Ilha Norte e o norte da Ilha Sul, com margem);
2. NASA GIBS, o índice de cor da altitude do ASTER GDEM, no mesmo recorte e tamanho (o colormap já está no disco): o volume do relevo e
   a terra (o ASTER marca o mar como sem dado);
3. NASA GIBS, a Blue Marble com relevo e batimetria, no mesmo recorte e tamanho: a textura do mar (como no vídeo 7);
4. Overpass (OSM): os limites das cidades da região de Wellington (Wellington City, Porirua, Hutt City, Upper Hutt) e da região.
O estreito de Cook vem do Natural Earth (ne_10m_geography_marine_polys, "Cook Strait", domínio público), do cache da máquina: sem pedido.

    python -X utf8 -B -P out/_pautas/video-8/miniaturas/nz-ventos-bases.py      (da raiz do canal)
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bases as B

LON0, LAT0, LON1, LAT1, LARG = 171.8, -43.0, 177.8, -39.8, 5000
B.gibs_relevo("nz-ventos-aster-relevo", LON0, LAT0, LON1, LAT1, LARG)
B.gibs_colormap("ASTER_GDEM_Color_Index")
B.gibs_elevacao("nz-ventos-aster-altitude", LON0, LAT0, LON1, LAT1, LARG)
B.gibs_bluemarble("nz-ventos-bluemarble", LON0, LAT0, LON1, LAT1, LARG)
B.overpass("nz-ventos-osm", """[out:json][timeout:300];
(
  relation["boundary"="administrative"]["admin_level"~"^(4|6)$"]["name"~"Wellington|Hutt|Porirua"](-41.6,174.5,-40.7,176.0);
  node["place"="city"]["name"="Wellington"](-41.5,174.6,-41.1,175.0);
);
out geom;""", "OSM: os limites administrativos de Wellington City, Porirua, Hutt City, Upper Hutt e da região de Wellington (níveis 4 e 6), "
              "e o nó da cidade de Wellington")
