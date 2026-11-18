# Onde a linha do rio (OSM main_stream) tem buracos: as pontas das partes depois do linemerge.
import json, os, math
from shapely.geometry import LineString, Point
from shapely.ops import linemerge
AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", ".."))
j = json.load(open(os.path.join(RAIZ, "midia/_pautas/video-8/cetico-mississippi-divisas/rio-main-stream.json"), encoding="utf-8"))
vias = [LineString([(p["lon"], p["lat"]) for p in e["geometry"]]) for e in j["elements"] if e["tags"].get("waterway") == "river"]
rio = linemerge(vias)
for g in rio.geoms:
    c = list(g.coords)
    print("parte: início %.4f,%.4f  fim %.4f,%.4f  nós %d" % (c[0][1], c[0][0], c[-1][1], c[-1][0], len(c)))
canal = [e for e in j["elements"] if e["tags"].get("waterway") != "river"][0]
g = canal["geometry"]
print("canal", canal["id"], canal["tags"], "de %.4f,%.4f a %.4f,%.4f" % (g[0]["lat"], g[0]["lon"], g[-1]["lat"], g[-1]["lon"]))
