"""As bases da miniatura de `banff` (vídeo 8, esboço; 17/11/2026). Pedidos de rede, um por vez, com o User-Agent do canal:
1. NASA GIBS, o relevo ASTER GDEM em cinza, do vale do Bow (de Lake Louise a Canmore, com margem para ajustar o quadro);
2. NASA GIBS, o índice de cor da altitude do ASTER GDEM, no mesmo recorte e tamanho (o colormap já está no disco, da arizona-strip):
   o volume do relevo e o fundo de vale plano saem dele;
3. Overpass (OSM): o limite da cidade de Banff (a relação 8452792, a que o cético mediu), o de Canmore, o do parque nacional de Banff,
   o rio Bow e os lagos com nome do recorte.
O limite do parque vem do OSM (a Sala deixou escolher entre ele e os dados abertos da Parks Canada): sai no mesmo pedido da cidade.
Sem Blue Marble (não há mar no quadro) e sem Census (é o Canadá).

    python -X utf8 -B -P out/_pautas/video-8/miniaturas/banff-bases.py      (da raiz do canal)
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bases as B

LON0, LAT0, LON1, LAT1, LARG = -116.2, 50.95, -115.0, 51.45, 4400
B.gibs_relevo("banff-aster-relevo", LON0, LAT0, LON1, LAT1, LARG)
B.gibs_colormap("ASTER_GDEM_Color_Index")
B.gibs_elevacao("banff-aster-altitude", LON0, LAT0, LON1, LAT1, LARG)
B.overpass("banff-osm", """[out:json][timeout:300];
(
  relation(8452792);
  relation["boundary"="administrative"]["name"~"^(Town of )?Canmore$"](50.9,-115.6,51.2,-115.1);
  relation["boundary"~"^(national_park|protected_area)$"]["name"="Banff National Park"];
  way["waterway"="river"]["name"="Bow River"](50.95,-116.2,51.45,-115.0);
  way["natural"="water"]["name"](50.95,-116.2,51.45,-115.0);
  relation["natural"="water"]["name"](50.95,-116.2,51.45,-115.0);
);
out geom;""", "OSM: os limites da cidade de Banff (relação 8452792), de Canmore e do parque nacional de Banff; o rio Bow; os lagos com nome "
              "do vale do Bow, de Lake Louise a Canmore")
