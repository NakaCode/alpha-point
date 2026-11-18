"""As bases da miniatura de `arizona-strip` (vídeo 8, esboço; 17/11/2026). Pedidos de rede, um por vez, com o User-Agent do canal:
1. U.S. Census, Cartographic Boundary 2025, county subdivisions do Arizona (1:500k): os dois CCDs da Strip (Kaibab Plateau e North
   Mohave), como o cético os usou (out/_pautas/video-8/cetico-arizona-strip.md, F4);
2. NASA GIBS, o relevo ASTER GDEM em cinza, do sul de Nevada a Lake Powell (com margem para ajustar o quadro);
3. Overpass (OSM): o rio Colorado e os lagos Mead, Powell e Mohave.
Os estados (cb_2025_us_state_500k) já estão no disco (baixados para o vídeo 7): copia, sem pedido. Sem Blue Marble: o quadro não tem mar.

    python -X utf8 -B -P out/_pautas/video-8/miniaturas/arizona-strip-bases.py      (da raiz do canal)
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bases as B

CENSUS_LIC = ("domínio público: obra do governo dos EUA (U.S. Census Bureau, Cartographic Boundary Files), sem restrição de uso; o "
              "canal já a registrou assim nos vídeos 5 e 7 (out/rio-columbia/_pesquisa/pauta-geo.json). Crédito de cortesia: U.S. Census Bureau")

B.copiar_do_disco(os.path.join(B.RAIZ, "out", "rio-columbia", "_tmp", "pesquisa-geo", "baixado", "census", "cb_2025_us_state_500k.zip"),
                  "U.S. Census Bureau, Cartographic Boundary Files 2025, states 1:500,000", CENSUS_LIC,
                  "https://www2.census.gov/geo/tiger/GENZ2025/shp/cb_2025_us_state_500k.zip")
B.baixar_arquivo("https://www2.census.gov/geo/tiger/GENZ2025/shp/cb_2025_04_cousub_500k.zip", CENSUS_LIC,
                 "U.S. Census Bureau, Cartographic Boundary Files 2025, county subdivisions do Arizona 1:500,000 (os CCDs)")
B.gibs_relevo("arizona-strip-aster-relevo", -115.8, 34.7, -109.8, 38.0, 5400)
B.overpass("arizona-strip-osm-agua", """[out:json][timeout:300];
(
  way["waterway"="river"]["name"="Colorado River"](34.9,-115.6,37.9,-110.0);
  relation["natural"="water"]["name"~"^Lake (Mead|Powell|Mohave)$"](34.9,-115.6,37.9,-110.0);
  way["natural"="water"]["name"~"^Lake (Mead|Powell|Mohave)$"](34.9,-115.6,37.9,-110.0);
);
out geom;""", "OSM: o rio Colorado (waterway=river) e os lagos Mead, Powell e Mohave (natural=water), do sul de Nevada a Lake Powell")
# 4 e 5 (17/11, 2ª rodada): a altitude do ASTER GDEM (o índice de cor e o colormap da GIBS), no mesmo recorte e tamanho do relevo,
# para o Grand Canyon se marcar pela profundidade de verdade (o cinza sombreado sozinho deixava o cânion como textura)
B.gibs_colormap("ASTER_GDEM_Color_Index")
B.gibs_elevacao("arizona-strip-aster-altitude", -115.8, 34.7, -109.8, 38.0, 5400)
