"""As bases novas das miniaturas das duas florestas (vídeo 8, Brasil; 18/11/2026). Pedidos de rede à NASA GIBS, um por vez, com o User-Agent
do canal (bases.py, a cópia desta pasta); os arquivos vão para out/_pautas/video-8-brasil/miniaturas/_bases/ (fora do git), com o .json ao lado.

    python -X utf8 -B -P out/_pautas/video-8-brasil/miniaturas/florestas-bases.py      (da raiz do canal)

Por que foram precisos: nenhuma base do disco cobre o leste do Brasil na escala da miniatura (o quadro tem ~27° de largura em 2560 px, ~1,2 km
de Mercator por px). As do vídeo 8 são do Arizona, de Banff e da Nova Zelândia; as do Columbia, do noroeste dos EUA; a GEBCO do Atlântico
(out/atlantico-fundo/_media/base/) cobre o Brasil, mas a ~21 px por grau (~570 px para o quadro inteiro), grossa demais para 2560.
O que já existe e serve, sem pedido: a geometria dos biomas (IBGE 2025, que o cético baixou em midia/_pautas/video-8-brasil/), os países do
Natural Earth (a cópia da pré-v1) e o colormap do ASTER GDEM (out/_pautas/video-8/miniaturas/_bases/).
A GIBS não é site novo: o robots.txt dela deu 404 na leitura do vídeo 7 (17/11/2026).

O recorte (63 a 31 O, 5 a 26 S) é o do quadro (~61,3 a ~32,7 O, 8 a 23,4 S) com folga para acertar o enquadramento sem pedir de novo.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bases as B

LON0, LAT0, LON1, LAT1, LARG = -63.0, -26.0, -31.0, -5.0, 5600
B.gibs_relevo("florestas-aster-relevo", LON0, LAT0, LON1, LAT1, LARG)
B.gibs_elevacao("florestas-aster-altitude", LON0, LAT0, LON1, LAT1, LARG)
B.gibs_bluemarble("florestas-bluemarble", LON0, LAT0, LON1, LAT1, LARG)
