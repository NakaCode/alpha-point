# Censo 2020 (TIGERweb, um pedido por vez): Kaskaskia (lugar incorporado, IL) e o CCD Kentucky Bend (Fulton, KY),
# com população (POP100), terra e água. E a área do anel do Kentucky Bend no polígono do KY (inclui água até o meio do rio).
import json, os, math, time, urllib.request, urllib.parse
import warnings; warnings.filterwarnings("ignore")
from shapely.geometry import Polygon
from shapely.ops import transform
AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", ".."))
BRUTO = os.path.join(RAIZ, "midia", "_pautas", "video-8", "cetico-mississippi-divisas")
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
BASE = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/%d/query"
def q(layer, where):
    p = {"where": where, "outFields": "NAME,STATE,COUNTY,GEOID,POP100,HU100,AREALAND,AREAWATER,CENTLAT,CENTLON", "returnGeometry": "false", "f": "json"}
    with urllib.request.urlopen(urllib.request.Request(BASE % layer, data=urllib.parse.urlencode(p).encode(), headers=UA), timeout=120) as r:
        return [f["attributes"] for f in json.loads(r.read()).get("features", [])]
res = {}
res["kaskaskia_lugar"] = q(26, "STATE='17' AND NAME LIKE 'Kaskaskia%'"); time.sleep(1)
res["kentucky_bend_ccd"] = q(20, "STATE='21' AND NAME LIKE 'Kentucky Bend%'"); time.sleep(1)
res["kaskaskia_ccd"] = q(20, "STATE='17' AND NAME LIKE 'Kaskaskia%'")
for k, v in res.items():
    for a in v:
        a["terra_mi2"] = round(a["AREALAND"] / 2589988.11, 2); a["agua_mi2"] = round(a["AREAWATER"] / 2589988.11, 2)
    print(k, v)
# o anel do Kentucky Bend no polígono do KY
j = json.load(open(os.path.join(BRUTO, "estados-KY.json"), encoding="utf-8"))
R = 6371.007; F0 = math.radians(38.0)
def proj(x, y, z=None):
    import numpy as np
    return (R * np.radians(np.asarray(x)) * math.cos(F0), R * np.sin(np.radians(np.asarray(y))) / math.cos(F0))
for a in j["features"][0]["geometry"]["rings"]:
    p = Polygon(a)
    if p.bounds[0] < -89.3 and p.bounds[3] < 36.7:
        km2 = transform(proj, p).area
        print("anel do Kentucky Bend: %.2f km2 = %.2f mi2; bbox %s" % (km2, km2 / 2.589988, [round(b, 4) for b in p.bounds]))
        res["anel_kentucky_bend_km2"] = round(km2, 3)
json.dump(res, open(os.path.join(AQUI, "censo-lugares.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
