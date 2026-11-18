"""As bases das 2 miniaturas novas da reembalagem do vídeo 1 (`los-angeles`, 18/11/2026): n1 "9 MILES" e n2 "NOT LA / YET". Pedidos de rede, um
por vez, com o User-Agent do canal (bases.py, a cópia desta pasta); os arquivos vão para
roteiros/los-angeles/miniatura/reembalagem-2026-11-18/_bases/ (fora do git), com o .json ao lado, e cada pedido vai ao _bases/pedidos.jsonl. Nada
que já está no disco se pede de novo.

    python -X utf8 -B -P roteiros/los-angeles/miniatura/reembalagem-2026-11-18/n-bases.py        (da raiz do canal)

Por que se pede algo, se a geometria do vídeo está em out/los-angeles/_media/geo/:
- a costa do vídeo (costa-hoje-tiger.json) é o TIGER 2025 Coastline RECORTADO em -118,62 a -118,05 (geo_la_construir.py, BB_COSTA). O quadro das
  miniaturas vai de ~-118,75 a ~-117,80: no canto de cima à esquerda entra Malibu (a terra acima de ~34,03 N) e no de baixo à direita, Seal Beach.
  Sem a costa ali, a terra viraria mar. Pede-se o MESMO arquivo nacional de que o recorte saiu (tl_2025_us_coastline.zip), sem recorte;
- a água do porto do vídeo (agua-porto-hoje-tiger.json) é o TIGER 2025 Area Water do condado de LA filtrado a uma caixa do porto. Pede-se o
  mesmo arquivo do condado (tl_2025_06037_areawater.zip) e o do condado de Orange (06059), para as baías e marinas do quadro fora dessa caixa
  (Marina del Rey, Alamitos Bay, Anaheim Bay, Huntington Harbour);
- o relevo é o da NASA GIBS (ASTER GDEM), num recorte novo de Los Angeles, como o cético pediu (a GIBS não é site novo: o robots.txt dela deu
  404 em 17/11/2026). O colormap da altitude já está em out/_pautas/video-8/miniaturas/_bases/ (só leitura).
O robots.txt de www2.census.gov se lê antes do primeiro pedido a ele (bases.robots(), dentro de baixar_arquivo()).
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bases as B

ETAPA = os.environ.get("MINI_ETAPA", "tudo")

LIC_TIGER = ("domínio público (U.S. Census Bureau, TIGER/Line Shapefiles 2025: 'Copyright protection is not available for any work of the United "
             "States Government (Title 17 U.S.C., Section 105). Thus, you are free to reproduce census materials as you see fit. We would ask, "
             "however, that you cite the Census Bureau as the source.' — TGRSHP2025_TechDoc_Ch1.pdf §1.2, a cópia lida pela pesquisa-geo em "
             "07/10/2026, out/los-angeles/_tmp/licencas/). Citação pedida, sem crédito na tela")
TIGER = "https://www2.census.gov/geo/tiger/TIGER2025/"

if ETAPA in ("tudo", "census"):
    B.baixar_arquivo(TIGER + "COASTLINE/tl_2025_us_coastline.zip", LIC_TIGER,
                     "TIGER/Line 2025, Coastline (nacional; o arquivo de que saiu out/los-angeles/_media/geo/costa-hoje-tiger.json)")
    B.baixar_arquivo(TIGER + "AREAWATER/tl_2025_06037_areawater.zip", LIC_TIGER,
                     "TIGER/Line 2025, Area Hydrography, Los Angeles County (o arquivo de que saiu agua-porto-hoje-tiger.json)")
    B.baixar_arquivo(TIGER + "AREAWATER/tl_2025_06059_areawater.zip", LIC_TIGER, "TIGER/Line 2025, Area Hydrography, Orange County")

# o relevo, a altitude e o mar: de -118,95 a -117,60 e de 33,55 a 34,25 N, a ~30 m de Mercator por px (o ASTER GDEM da GIBS vai ao nível 12, ~38 m
# de Mercator por px; o palco das miniaturas fica em ~33 a ~37 m)
LON0, LAT0, LON1, LAT1, LARG = -118.95, 33.55, -117.60, 34.25, 5000
if ETAPA in ("tudo", "gibs"):
    B.gibs_relevo("la-aster-relevo", LON0, LAT0, LON1, LAT1, LARG)
    B.gibs_elevacao("la-aster-altitude", LON0, LAT0, LON1, LAT1, LARG)
    B.gibs_bluemarble("la-bluemarble", LON0, LAT0, LON1, LAT1, LARG)
