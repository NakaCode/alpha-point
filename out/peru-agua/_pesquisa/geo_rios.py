"""Os rios das duas vertentes, de dado real:
- rios-vertente-pacifico: as relations waterway=river do OSM no lado do Pacífico (Overpass, filtro pelo polígono da
  vertente simplificado), costuradas por linemerge, recortadas pela vertente-pacifico; só as que chegam a 3 km do mar
  (o rio que desce ao Pacífico); Douglas-Peucker 0,002°.
- rios-vertente-atlantico: os rios do Natural Earth 1:10m que cortam a vertente-atlantico, recortados pelo Peru.
- amazonas-ate-o-atlantico: Amazonas + Marañón + Ucayali do Natural Earth, inteiros, até a foz.
uso: python -P geo_rios.py <q11-rios-pacifico.json> <deriv-dir>"""
import json, os, sys, math
from shapely.geometry import shape, mapping, LineString, MultiLineString
from shapely.ops import linemerge, unary_union, transform
import numpy as np

q, d = sys.argv[1], sys.argv[2]
V = {k: shape(json.load(open(os.path.join(d, f"_fc-vertente-{k}.json")))["features"][0]["geometry"]) for k in ["pacifico", "atlantico"]}
peru = shape(json.load(open(os.path.join(d, "peru-ne.json")))["features"][0]["geometry"])
costa = peru.exterior if peru.geom_type == "Polygon" else max(peru.geoms, key=lambda g: g.area).exterior
from shapely.geometry import box
mar_ref = peru.boundary  # a costa e as fronteiras; o teste abaixo exige a ponta perto do mar, a oeste da vertente


def km(g):
    t = 0
    for ln in getattr(g, "geoms", [g]):
        c = list(ln.coords)
        for (x1, y1), (x2, y2) in zip(c, c[1:]):
            p1, p2 = math.radians(y1), math.radians(y2)
            h = math.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(math.radians(x2 - x1) / 2) ** 2
            t += 2 * 6371.0088 * math.asin(math.sqrt(h))
    return t


def r5(g):
    return transform(lambda x, y, z=None: (np.round(x, 5), np.round(y, 5)), g)


j = json.load(open(q, encoding="utf-8"))
# a costa do Pacífico = a parte do contorno do Peru que a vertente-pacifico toca e que não é fronteira terrestre:
# aproximação por dado: o contorno da vertente-pacifico menos o que ela divide com a vertente-atlantico/titicaca e
# menos as fronteiras (Equador e Chile), medidas como o contorno que fica a menos de 0,01° de outra vertente ou fora do mar.
mar = shape(json.load(open(os.path.join(os.environ["USERPROFILE"], ".regie", "geo", "natural-earth", "ne_10m_geography_marine_polys.geojson"), encoding="utf-8"))["features"][0]["geometry"]) if False else None
feats, fora = [], []
for e in j["elements"]:
    t = e.get("tags", {})
    ls = [LineString([(p["lon"], p["lat"]) for p in m["geometry"]]) for m in e.get("members", []) if m["type"] == "way" and m.get("geometry") and len(m["geometry"]) > 1 and m.get("role", "") in ("main_stream", "", "main")]
    if not ls:
        continue
    u = unary_union(ls)
    g = linemerge(u) if u.geom_type == "MultiLineString" else u
    gp = g.intersection(V["pacifico"])
    if gp.is_empty:
        fora.append((t.get("name"), "fora da vertente")); continue
    # chega ao mar? a ponta mais a oeste/baixo de algum trecho a < 3 km do contorno do Peru, do lado oeste
    toca = gp.distance(costa) * 111 < 3 if False else (gp.buffer(0.027).intersects(costa) and not gp.within(V["pacifico"].buffer(-0.027)))
    if not toca:
        fora.append((t.get("name"), "não chega ao mar")); continue
    if km(gp) < 30 or t.get("name") in ("Río Puyango", "Río Calvas", "Río Quilca"):
        fora.append((t.get("name"), "trecho curto na vertente (rio de fronteira ou trecho de outra relation)")); continue
    gs = gp.simplify(0.002, preserve_topology=False)
    if gs.is_empty:
        continue
    feats.append({"type": "Feature", "properties": {"name": t.get("name"), "rotulo": "short rivers", "osm": f"relation/{e['id']}", "km_na_vertente": round(km(gp), 1),
                  "license": "ODbL 1.0 — © OpenStreetMap contributors"}, "geometry": mapping(r5(gs))})
feats.sort(key=lambda f: -f["properties"]["km_na_vertente"])
json.dump({"type": "FeatureCollection", "features": feats}, open(os.path.join(d, "_fc-rios-vertente-pacifico.json"), "w", encoding="utf-8"), ensure_ascii=False)
print("pacífico:", len(feats), "rios;", "fora:", len(fora))
for f in feats:
    print("  ", f["properties"]["name"], f["properties"]["km_na_vertente"])
print("  fora:", fora)

ne = json.load(open(os.path.join(os.environ["USERPROFILE"], ".regie", "geo", "natural-earth", "ne_10m_rivers_lake_centerlines.geojson"), encoding="utf-8"))
fa, fam = [], []
for f in ne["features"]:
    g = shape(f["geometry"]); p = f["properties"]
    if p.get("name") in ("Amazonas", "Marañón", "Ucayali") and km(g) > 100:
        fam.append({"type": "Feature", "properties": {"name": p.get("name"), "rotulo": "the Atlantic", "name_en": p.get("name_en"), "ne_id": p.get("ne_id"), "km": round(km(g), 0),
                    "license": "Domínio público (Natural Earth)"}, "geometry": mapping(r5(g.simplify(0.005)))})
    if g.intersects(V["atlantico"]):
        gi = g.intersection(peru)
        if gi.is_empty:
            continue
        fa.append({"type": "Feature", "properties": {"name": p.get("name"), "rotulo": "the Amazon", "ne_id": p.get("ne_id"), "km_no_peru": round(km(gi), 0),
                   "license": "Domínio público (Natural Earth)"}, "geometry": mapping(r5(gi.simplify(0.002)))})
json.dump({"type": "FeatureCollection", "features": fa}, open(os.path.join(d, "_fc-rios-vertente-atlantico.json"), "w", encoding="utf-8"), ensure_ascii=False)
json.dump({"type": "FeatureCollection", "features": fam}, open(os.path.join(d, "_fc-amazonas-ate-o-atlantico.json"), "w", encoding="utf-8"), ensure_ascii=False)
print("atlântico (NE, no Peru):", [(f["properties"]["name"], f["properties"]["km_no_peru"]) for f in fa])
print("amazonas até o Atlântico:", [(f["properties"]["name"], f["properties"]["km"], [round(c, 2) for c in shape(f["geometry"]).bounds]) for f in fam])
