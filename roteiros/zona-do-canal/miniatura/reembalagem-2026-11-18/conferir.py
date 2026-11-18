"""A conferência da geografia da n1 e da n2 (reembalagem do vídeo 2, `zona-do-canal`, 18/11/2026). Sem rede. Grava conferencia.json.

    python -X utf8 -B -P roteiros/zona-do-canal/miniatura/reembalagem-2026-11-18/conferir.py      (da raiz; depois do n1.py e do n2.py)

O que confere:
- o vermelho contra o polígono de 1947 cru (sem a junção, a generalização e o recorte), no quadro final: o que o vermelho tem a mais e a menos,
  além de 2 px da borda;
- Balboa e Silver City dentro do polígono de 1947 cru (shapely, em lon/lat) e a distância de cada um à borda; Silver City contra o Monte
  Esperanza (Mount Hope) de hoje, do OSM que o vídeo já tem (pontos-osm-atlantico.json), a referência independente mais perto;
- a costa (o mar do OSM contra o do ASTER e o do Natural Earth), lida do -pontos.json;
- as peças: a caixa sem cobrir a Zona, as setas com 400 px ou mais e com a ponta no ponto, o canto da duração livre, a maiúscula no 168.
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.geometry import shape, Point
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import zona as Z
import desenho as D

q = M.Quadro(*D.QUADRO_N)
gj = json.load(open(Z.ZONA_JSON, encoding="utf-8"))
zona_g = unary_union([shape(f["geometry"]) for f in gj["features"]])
mar_g = unary_union([shape(f["geometry"]) for f in json.load(open(Z.MAR_JSON, encoding="utf-8"))["features"]])
mar = q.mascara(mar_g.intersection(q.caixa_geo(0.5)))
terra = 1 - mar
zona_final, reg = Z.mascara_zona(q, terra)
crua = q.mascara(zona_g) > 0.5
fin = zona_final > 0.5
d_borda = cv2.distanceTransform((M.borda_de(crua.astype(np.float32), 1) < 0.3).astype(np.uint8), cv2.DIST_L2, 5)
longe = d_borda > 2
km2 = (q.MP * math.cos(math.radians(9.15))) ** 2 / 1e6
a_mais = fin & ~crua & longe
a_menos = crua & ~fin & longe
out = {"quadro": q.medidas(),
       "vermelho_contra_o_poligono_cru": {
           "poligono_cru_px": int(crua.sum()), "vermelho_px": int(fin.sum()),
           "a_mais_alem_de_2px_px": int(a_mais.sum()), "a_mais_km2": round(float(a_mais.sum()) * km2, 2),
           "a_menos_alem_de_2px_px": int(a_menos.sum()), "a_menos_km2": round(float(a_menos.sum()) * km2, 2),
           "a_menos_sobre_o_mar_do_osm_px": int((a_menos & (mar > 0.5)).sum()),
           "por_que": "a mais: a ponte da represa de Madden e o alargamento do vale (largura_minima_do_vale_px); a menos: os braços finos que a "
                      "generalização da B tira e o que cai no mar do OSM",
           "registro_da_zona": reg}}

ll_b, _ = Z.lugar(Z.L1936, "balboa-clubhouse-1936")
ll_s, _ = Z.lugar(Z.L1947, "silver-city-1947")
mh = [f for f in json.load(open(os.path.join(Z.GEO, "pontos-osm-atlantico.json"), encoding="utf-8"))["features"]
      if f["properties"].get("slug") == "mount-hope-hoje"][0]["geometry"]["coordinates"]


def metros(a, b):
    R = 6371008.8
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def dist_borda_m(ll):
    p = Point(ll)
    c = zona_g.boundary.interpolate(zona_g.boundary.project(p))
    return round(metros(ll, (c.x, c.y)))


out["lugares"] = {
    "balboa_clubhouse_1936": {"lonlat": list(ll_b), "dentro_do_poligono_de_1947": bool(zona_g.contains(Point(ll_b))),
                              "distancia_a_borda_m": dist_borda_m(ll_b),
                              "no_vermelho_final": bool(fin[int(round(q.palco(*ll_b)[1])), int(round(q.palco(*ll_b)[0]))])},
    "silver_city_1947": {"lonlat": list(ll_s), "dentro_do_poligono_de_1947": bool(zona_g.contains(Point(ll_s))),
                         "distancia_a_borda_m": dist_borda_m(ll_s),
                         "no_vermelho_final": bool(fin[int(round(q.palco(*ll_s)[1])), int(round(q.palco(*ll_s)[0]))]),
                         "ate_o_monte_esperanza_do_osm_m": round(metros(ll_s, mh)),
                         "nota": "o roteiro (l. 58) e a pauta-geo (nota_rainbow_city) tratam Silver City e Rainbow City como a mesma cidade; o "
                                 "ponto é o centróide da mancha da folha de 1947 (±150–250 m). O Monte Esperanza (Mount Hope) do OSM é o bairro de "
                                 "hoje mais perto que o vídeo tem; não há ponto independente de Rainbow City/Arco Iris no disco"}}

pecas = {}
for nome in ("n1", "n2"):
    p = json.load(open(os.path.join(M.PASTA, nome + "-pontos.json"), encoding="utf-8"))
    pecas[nome] = {"texto": p["texto"], "maiusculas_no_168_px": p["caixa"]["maiusculas_no_168_px"],
                   "caixa_px_sobre_a_zona": p["caixa"]["px_da_zona_sob_a_caixa"], "caixa_distancia_a_zona_px": p["caixa"]["distancia_a_zona_px"],
                   "setas": [{"comprimento_px": s["comprimento_px"], "ponta_ao_centro_px": s["da_ponta_ao_centro_do_ponto_px"],
                              "raio_do_ponto_px": s["raio_do_ponto_px"], "pelo_menos_400": s["comprimento_px"] >= 400} for s in p["setas"]],
                   "canto_duracao_alfa_max": p["canto_duracao_320"]["alfa_max_pecas"], "vermelho_fracao": p["vermelho_zona"]["fracao_da_imagem"],
                   "luminancia_media": p["luminancia_media_final"], "costa": p["costa_conferida"]}
out["pecas"] = pecas
json.dump(out, open(os.path.join(M.PASTA, "conferencia.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(out, ensure_ascii=False, indent=1)[:6000])
