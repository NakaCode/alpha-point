# Cético mississippi-divisas (17/11/2026): os 20 maiores pedaços estão presos à outra margem, ou são ilhas?
# Para cada um, toma 15 pontos ao longo do trecho do contorno da face que é DIVISA (não rio), e pergunta ao TIGERweb
# (Census 2020, camada 10, um pedido por pedaço, multiponto) em que blocos eles caem: se a divisa corre por blocos de terra
# (AREALAND > 0) dos dois estados, o pedaço está grudado na margem de lá (a linha passa pelo campo); se corre por blocos
# só de água, a linha está num braço morto, num lago ou num canal secundário.
# Saída: linha-na-terra.tsv
import json, os, time, urllib.request, urllib.parse
import warnings; warnings.filterwarnings("ignore")
from shapely import wkt as W
from shapely.geometry import LineString, MultiLineString
from shapely.ops import unary_union, linemerge
AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", ".."))
BRUTO = os.path.join(RAIZ, "midia", "_pautas", "video-8", "cetico-mississippi-divisas")
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/10/query"
med = json.load(open(os.path.join(AQUI, "medida.json"), encoding="utf-8"))
geo = {d["i"]: W.loads(d["wkt"]) for d in json.load(open(os.path.join(BRUTO, "faces-wkt.json"), encoding="utf-8"))}
# a linha do rio, para separar o trecho de divisa do contorno
rio_j = json.load(open(os.path.join(BRUTO, "rio-main-stream.json"), encoding="utf-8"))
rio = unary_union([LineString([(p["lon"], p["lat"]) for p in e["geometry"]]) for e in rio_j["elements"]]).buffer(0.0003)  # ~30 m
linhas = ["i\tuf\tterra_km2\tpontos\tem_terra\tem_agua\tsem_bloco\tleitura"]
for p in med[:20]:
    f = geo[p["i"]]
    contorno = LineString(f.exterior.coords)
    div = contorno.difference(rio)
    if div.is_empty:
        linhas.append("%d\t%s\t%.1f\t0\t\t\t\tsem trecho de divisa fora do rio" % (p["i"], p["uf"], p["terra_km2"])); continue
    L = div.length
    pts = [div.interpolate(L * (k + 0.5) / 15) for k in range(15)]
    geom = {"points": [[q.x, q.y] for q in pts], "spatialReference": {"wkid": 4326}}
    par = {"geometry": json.dumps(geom), "geometryType": "esriGeometryMultipoint", "inSR": "4326", "spatialRel": "esriSpatialRelIntersects",
           "outFields": "GEOID,STATE,AREALAND,AREAWATER", "returnGeometry": "true", "outSR": "4326", "f": "json"}
    with urllib.request.urlopen(urllib.request.Request(URL, data=urllib.parse.urlencode(par).encode(), headers=UA), timeout=90) as r:
        fs = json.loads(r.read()).get("features", [])
    from shapely.geometry import Polygon, Point
    blocos = []
    for b in fs:
        try:
            pol = unary_union([Polygon(a) for a in b["geometry"]["rings"]])
        except Exception:
            continue
        blocos.append((pol.buffer(1e-7), b["attributes"]))
    terra = agua = nada = 0
    for q in pts:
        hit = [a for pol, a in blocos if pol.contains(q)]
        if not hit:
            nada += 1
        elif any((a["AREALAND"] or 0) > 0 for a in hit):
            terra += 1
        else:
            agua += 1
    leitura = "presa à outra margem" if terra >= 10 else ("na água (braço morto, lago ou canal)" if agua >= 10 else "misto")
    linhas.append("%d\t%s\t%.1f\t15\t%d\t%d\t%d\t%s" % (p["i"], p["uf"], p["terra_km2"], terra, agua, nada, leitura))
    print(linhas[-1])
    time.sleep(1)
open(os.path.join(AQUI, "linha-na-terra.tsv"), "w", encoding="utf-8").write("\n".join(linhas) + "\n")
