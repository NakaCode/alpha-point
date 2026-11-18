"""A conferência da geografia das 3 miniaturas da pauta do vídeo 8 (18/11/2026), sem rede. Grava conferencia.json nesta pasta.

    python -X utf8 -B -P roteiros/arizona-strip/miniatura/conferir.py      (da raiz do canal)

O que mede (as distâncias em km, numa projeção plana em torno de 36,5 N, e em px do palco de cada miniatura):
1. a Strip das miniaturas (os dois CCDs do Census, Cartographic Boundary 2025, 1:500k) contra a do TIGERweb que o cético somou
   (tigerWMS_Census2020, camada 20; out/_pautas/video-8/_trabalho/cetico-arizona-strip/ccdgeom.json): a área de cada uma, a diferença
   simétrica e a maior distância entre os contornos (Hausdorff);
2. as divisas desenhadas (cb_2025_us_state_500k) contra as do TIGERweb (camada 80; estados-geom.json, do cético), no recorte das
   miniaturas: a maior distância entre as linhas, estado por estado;
3. o limite de baixo da Strip contra o rio que as miniaturas pintam (o OSM), de Lees Ferry ao lago Mead: a distância de cada vértice do
   rio ao contorno da Strip (mediana, p95, máximo);
4. o ponto de Colorado City (a ponta da seta da m2, do cético) contra o centróide do TIGERweb (places26.json);
5. a arte da m1 contra a da busca (out/_pautas/video-8/miniaturas/arizona-strip-2560.jpg, só lida), fora do que mudou de propósito.
"""
import json, math, os, sys
import numpy as np
from shapely.geometry import shape, box, Point, Polygon, MultiPolygon, LineString
from shapely.ops import unary_union
import shapely
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

CETICO = os.path.join(M.RAIZ, "out", "_pautas", "video-8", "_trabalho", "cetico-arizona-strip")
KX, KY = 111.32 * math.cos(math.radians(36.5)), 110.95          # km por grau, em torno de 36,5 N


def km(g):
    return shapely.transform(g, lambda c: c * np.array([KX, KY]))


def esri(caminho, nome_campo):
    d = json.load(open(caminho, encoding="utf-8"))
    out = {}
    for f in d["features"]:
        aneis = [Polygon(r).buffer(0) for r in f["geometry"]["rings"]]
        # anéis do ESRI: os de fora no sentido horário, os buracos no anti-horário; o par-ímpar resolve
        g = Polygon()
        for a in aneis:
            g = g.symmetric_difference(a)
        out[f["attributes"][nome_campo]] = g
    return out


RECORTE = box(-116.7, 34.9, -110.2, 38.0)            # cobre as três miniaturas
PX_M = {"m1": 143.0, "m2": 183.2, "m3": None}       # metros de chão por px do palco (dos -pontos.json; a m3 se lê abaixo)
for n in PX_M:
    p = os.path.join(M.PASTA, "%s-pontos.json" % n)
    if os.path.exists(p):
        PX_M[n] = json.load(open(p, encoding="utf-8"))["relevo"]["px_chao_m"]


def em_px(v_km):
    return {n: round(v_km * 1000 / m, 1) for n, m in PX_M.items() if m}


res = {"recorte_lonlat": list(RECORTE.bounds), "px_chao_m": PX_M}

# 1. a Strip
ccd = M.ler_shp_zip(M.base_em("cb_2025_04_cousub_500k.zip"), lambda r: r["STATEFP"] == "04" and r["NAME"] in ("Kaibab Plateau", "North Mohave"))
strip_cb = unary_union([g for r, g in ccd])
tw = esri(os.path.join(CETICO, "ccdgeom.json"), "NAME")
strip_tw_cru = unary_union([tw["Kaibab Plateau CCD"], tw["North Mohave CCD"]])
# a união dos dois CCDs do TIGERweb (coordenadas com 4 casas) deixa frestas finas ao longo da linha entre os condados (o Kanab Creek, em
# ~112,64 O): são buracos internos, não o contorno. A comparação é a dos contornos de fora
frestas = sum(len(p.interiors) for p in getattr(strip_tw_cru, "geoms", [strip_tw_cru]))
frestas_km2 = sum(km(Polygon(b)).area for p in getattr(strip_tw_cru, "geoms", [strip_tw_cru]) for b in p.interiors)
strip_tw = unary_union([Polygon(p.exterior) for p in getattr(strip_tw_cru, "geoms", [strip_tw_cru])])
a_cb, a_tw = km(strip_cb).area, km(strip_tw).area
dif = km(strip_cb.symmetric_difference(strip_tw)).area
h = km(strip_cb.boundary).hausdorff_distance(km(strip_tw.boundary))
res["strip"] = {"frestas_internas_do_tigerweb": {"buracos": frestas, "km2": round(frestas_km2, 3), "tratamento": "fechadas (só o contorno de fora conta)"},"area_cb500k_km2": round(a_cb, 1), "area_tigerweb_km2": round(a_tw, 1),
                "area_census_arealand_mais_areawater_km2": round((7851.22 + 21.53) * 2.589988, 1),
                "diferenca_simetrica_km2": round(dif, 1), "diferenca_simetrica_fracao": round(dif / a_tw, 4),
                "hausdorff_contornos_km": round(h, 2), "hausdorff_em_px": em_px(h)}

# 2. as divisas
est_cb = {r["STUSPS"]: g for r, g in M.ler_shp_zip(M.base_em("cb_2025_us_state_500k.zip"), lambda r: r["STUSPS"] in ("AZ", "NV", "UT", "CA"))}
est_tw_n = esri(os.path.join(CETICO, "estados-geom.json"), "NAME")
nomes = {"AZ": "Arizona", "NV": "Nevada", "UT": "Utah", "CA": "California"}
res["divisas"] = {}
for a, b in (("AZ", "UT"), ("AZ", "NV"), ("NV", "UT"), ("CA", "NV"), ("AZ", "CA")):
    if nomes[a] not in est_tw_n or nomes[b] not in est_tw_n:
        res["divisas"]["%s-%s" % (a, b)] = "sem a geometria do TIGERweb no arquivo do cético"
        continue
    l_cb = est_cb[a].boundary.intersection(est_cb[b].buffer(0.01)).intersection(RECORTE)
    l_tw = est_tw_n[nomes[a]].boundary.intersection(est_tw_n[nomes[b]].buffer(0.01)).intersection(RECORTE)
    if l_cb.is_empty or l_tw.is_empty:
        res["divisas"]["%s-%s" % (a, b)] = "fora do recorte"
        continue
    hd = km(l_cb).hausdorff_distance(km(l_tw))
    res["divisas"]["%s-%s" % (a, b)] = {"comprimento_no_recorte_km": round(km(l_cb).length, 1), "hausdorff_km": round(hd, 2), "em_px": em_px(hd)}

# 3. o limite de baixo da Strip contra o rio do OSM (de Lees Ferry ao lago Mead)
osm = M.ler_osm(M.base_em("arizona-strip-osm-agua.json"))
rio = unary_union([g for t, g in osm["linhas"] if t.get("waterway") == "river"]).intersection(box(-114.06, 35.70, -111.585, 36.87))
vert = [Point(x, y) for g in getattr(rio, "geoms", [rio]) for x, y in g.coords]
bd = km(strip_cb.boundary)
d = np.array([bd.distance(km(p)) for p in vert])
res["rio_osm_ao_contorno_da_strip"] = {"vertices": len(vert), "mediana_km": round(float(np.median(d)), 3), "p95_km": round(float(np.percentile(d, 95)), 3),
                                       "max_km": round(float(d.max()), 3), "max_em_px": em_px(float(d.max())),
                                       "fracao_a_menos_de_500_m": round(float((d < 0.5).mean()), 4)}

# 4. Colorado City
pl = json.load(open(os.path.join(CETICO, "places26.json"), encoding="utf-8"))
cc = [f["attributes"] for f in pl["features"] if f["attributes"]["NAME"] == "Colorado City town"][0]
p_tw = (float(cc["CENTLON"]), float(cc["CENTLAT"]))
p_ce = (-112.9758, 36.9906)
dk = math.hypot((p_tw[0] - p_ce[0]) * KX, (p_tw[1] - p_ce[1]) * KY)
res["colorado_city"] = {"ponto_da_seta": p_ce, "centroide_tigerweb": p_tw, "distancia_km": round(dk, 2), "em_px": em_px(dk),
                        "dentro_da_strip": {"ponto_da_seta": strip_cb.contains(Point(p_ce)), "centroide_tigerweb": strip_cb.contains(Point(p_tw))}}

# 5. a arte da m1 é a da busca: a m1 de 2560 contra out/_pautas/video-8/miniaturas/arizona-strip-2560.jpg (só lida), pixel a pixel, fora
# das três áreas que mudaram de propósito (a caixa velha do "CUT OFF", a caixa nova e o rótulo "GRAND CANYON", com 40 px de folga para as
# sombras). Os dois são JPG: conta como mudança o pixel com mais de 24 de diferença num canal, depois de um desfoque leve
from PIL import Image
import cv2
velha = os.path.join(M.RAIZ, "out", "_pautas", "video-8", "miniaturas", "arizona-strip-2560.jpg")
nova = os.path.join(M.PASTA, "m1-2560.jpg")
if os.path.exists(velha) and os.path.exists(nova):
    a = cv2.GaussianBlur(np.asarray(Image.open(velha).convert("RGB")).astype(np.float32), (0, 0), 1.0)
    b = cv2.GaussianBlur(np.asarray(Image.open(nova).convert("RGB")).astype(np.float32), (0, 0), 1.0)
    mudou = np.abs(a - b).max(axis=2) > 24
    p_velha = json.load(open(os.path.join(M.RAIZ, "out", "_pautas", "video-8", "miniaturas", "arizona-strip-pontos.json"), encoding="utf-8"))
    p_nova = json.load(open(os.path.join(M.PASTA, "m1-pontos.json"), encoding="utf-8"))
    zonas = np.zeros(mudou.shape, bool)
    for x0, y0, x1, y1 in (p_velha["caixa"]["caixa_palco"], p_nova["caixa"]["caixa_palco"], p_nova["rotulos"]["GRAND CANYON"]):
        zonas[max(0, y0 - 40):y1 + 40, max(0, x0 - 40):x1 + 40] = True
    res["m1_contra_a_da_busca"] = {"pixels_mudados_fora_das_zonas": int((mudou & ~zonas).sum()),
                                   "fracao_mudada_fora_das_zonas": round(float((mudou & ~zonas).sum() / (~zonas).sum()), 6),
                                   "fracao_mudada_dentro_das_zonas": round(float((mudou & zonas).sum() / zonas.sum()), 4)}

json.dump(res, open(os.path.join(M.PASTA, "conferencia.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(res, ensure_ascii=False, indent=1))
