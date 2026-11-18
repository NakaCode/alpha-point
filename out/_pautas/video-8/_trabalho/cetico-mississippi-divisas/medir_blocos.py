# Cético mississippi-divisas (17/11/2026): a terra e a gente de cada pedaço.
# Para cada face >= 0,5 km2 do medir_pedacos.py (a 1ª rodada chegou até ~0,7 km2 com o corte em 0,25; o corte subiu para 0,5 por tempo), pede ao TIGERweb (Census 2020, camada 10, Census Blocks) os blocos do
# estado dono dentro do retângulo da face (sem geometria), e soma os que têm o ponto interno (INTPTLAT/LON) dentro da face:
# AREALAND (terra, m2), AREAWATER, POP100 (gente) e HU100 (moradias). Um pedido por vez, User-Agent do canal.
# Saída: blocos-faces.jsonl (uma linha por face e estado; retoma de onde parou).
import json, os, time, urllib.request, urllib.parse
import warnings; warnings.filterwarnings("ignore")
from shapely import wkt as W
from shapely.geometry import Point
from shapely.prepared import prep
AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", ".."))
BRUTO = os.path.join(RAIZ, "midia", "_pautas", "video-8", "cetico-mississippi-divisas")
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/10/query"
FIPS = {"MN": "27", "WI": "55", "IA": "19", "IL": "17", "MO": "29", "KY": "21", "TN": "47", "AR": "05", "MS": "28", "LA": "22"}
ped = {d["i"]: d for d in json.load(open(os.path.join(AQUI, "pedacos.json"), encoding="utf-8"))}
geo = {d["i"]: W.loads(d["wkt"]) for d in json.load(open(os.path.join(BRUTO, "faces-wkt.json"), encoding="utf-8"))}
saida = os.path.join(AQUI, "blocos-faces.jsonl")
feitos = set()
if os.path.exists(saida):
    for l in open(saida, encoding="utf-8"):
        d = json.loads(l); feitos.add((d["i"], d["uf"]))
alvo = sorted([d for d in ped.values() if d["area_km2"] >= 0.5], key=lambda d: -d["area_km2"])
print(len(alvo), "faces")
with open(saida, "a", encoding="utf-8") as out:
    for d in alvo:
        f = geo[d["i"]]; pf = prep(f)
        x0, y0, x1, y1 = f.bounds
        for uf, a in d["estados"].items():
            if a < 0.05 or (d["i"], uf) in feitos:
                continue
            p = {"where": f"STATE='{FIPS[uf]}'", "geometry": f"{x0},{y0},{x1},{y1}", "geometryType": "esriGeometryEnvelope",
                 "inSR": "4326", "spatialRel": "esriSpatialRelIntersects",
                 "outFields": "GEOID,AREALAND,AREAWATER,POP100,HU100,INTPTLAT,INTPTLON", "returnGeometry": "false", "f": "json"}
            for tent in range(3):
                try:
                    req = urllib.request.Request(URL, data=urllib.parse.urlencode(p).encode(), headers=UA)
                    with urllib.request.urlopen(req, timeout=45) as r:
                        q = json.loads(r.read())
                    break
                except Exception as e:
                    print("erro", d["i"], uf, e); time.sleep(5)
            else:
                continue
            terra = agua = pop = hu = n = 0; povoados = []
            for b in q.get("features", []):
                at = b["attributes"]
                if pf.contains(Point(float(at["INTPTLON"]), float(at["INTPTLAT"]))):
                    n += 1; terra += at["AREALAND"] or 0; agua += at["AREAWATER"] or 0; pop += at["POP100"] or 0; hu += at["HU100"] or 0
                    if at["POP100"]:
                        povoados.append([at["GEOID"], at["POP100"]])
            linha = {"i": d["i"], "uf": uf, "area_face_km2": a, "blocos": n, "terra_km2": round(terra / 1e6, 4), "agua_km2": round(agua / 1e6, 4),
                     "pop2020": pop, "moradias2020": hu, "blocos_com_gente": povoados, "lat": d["lat"], "lon": d["lon"],
                     "limite_excedido": q.get("exceededTransferLimit"), "erro": q.get("error")}
            out.write(json.dumps(linha, ensure_ascii=False) + "\n"); out.flush()
            print(d["i"], uf, "face %.2f km2 -> terra %.2f, água %.2f, pop %d (%d blocos)" % (a, terra / 1e6, agua / 1e6, pop, n))
            time.sleep(0.7)
