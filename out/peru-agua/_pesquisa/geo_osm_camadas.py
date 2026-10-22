"""Monta as camadas do OSM do vídeo 4 a partir dos dumps do Overpass (_tmp/pesquisa-geo/osm/q*.json), sem rede.
Polígono de relation: as ways de papel outer/inner, poligonizadas (shapely.ops.polygonize), outer menos inner.
Polígono de way fechada: o anel. Ponto de área: o representative_point do polígono (cai dentro dele).
Cada camada sai em _tmp/pesquisa-geo/deriv/_fc-<slug>.json e _orig-<slug>.json (para o geo-gravar.mjs).
uso: python -P geo_osm_camadas.py <pasta-osm> <saida-dir>"""
import json, os, sys, glob, math
from shapely.geometry import LineString, Polygon, MultiPolygon, Point, mapping, shape
from shapely.ops import polygonize, unary_union, transform
import numpy as np

A, F = 6378137.0, 1 / 298.257223563
E2 = F * (2 - F); E = math.sqrt(E2)


def cea(x, y, z=None):
    lam = np.radians(np.asarray(x)); s = np.sin(np.radians(np.asarray(y)))
    q = (1 - E2) * (s / (1 - E2 * s * s) - (1 / (2 * E)) * np.log((1 - E * s) / (1 + E * s)))
    return A * lam, A * q / 2


def km2(g):
    return round(transform(cea, g).area / 1e6, 3)


osm, out = sys.argv[1], sys.argv[2]
EL = {}
for f in sorted(glob.glob(os.path.join(osm, "q*.json"))):
    if f.endswith(".meta.json"):
        continue
    for e in json.load(open(f, encoding="utf-8"))["elements"]:
        k = (e["type"], e["id"])
        if k not in EL or (e.get("geometry") or e.get("members") and any(m.get("geometry") for m in e["members"])):
            EL[k] = e


def geom(tipo, i):
    e = EL[(tipo, i)]
    if tipo == "node":
        return Point(e["lon"], e["lat"]), e.get("tags", {})
    if tipo == "way" and not e.get("geometry") and e.get("center"):
        return Point(e["center"]["lon"], e["center"]["lat"]), e.get("tags", {})
    if tipo == "way":
        c = [(p["lon"], p["lat"]) for p in e["geometry"]]
        return (Polygon(c) if c[0] == c[-1] and len(c) > 3 else LineString(c)), e.get("tags", {})
    outer, inner = [], []
    for m in e["members"]:
        if m["type"] != "way" or not m.get("geometry"):
            continue
        ls = LineString([(p["lon"], p["lat"]) for p in m["geometry"]])
        (inner if m.get("role") == "inner" else outer).append(ls)
    po = unary_union(list(polygonize(unary_union(outer))))
    pi = unary_union(list(polygonize(unary_union(inner)))) if inner else None
    g = po.difference(pi) if pi is not None else po
    return g, e.get("tags", {})


def r6(g):
    return transform(lambda x, y, z=None: (np.round(x, 6), np.round(y, 6)), g)


OSM = "ODbL 1.0 — exige atribuição © OpenStreetMap contributors"
CAMADAS = {
    "lagoas-marcapomacocha-antacoto": {"rot": "high lakes", "tol": 0.00005, "itens": [
        ("way", 26966977, "Marcapomacocha", "lago"), ("relation", 16907593, "Antacoto reservoir (OSM: Antaquta / Antacota)", "represa"),
        ("relation", 16907595, "Marcacocha", "lago"), ("way", 26976126, "Tucto", "lago")]},
    "represas-antacoto-huascacocha-yuracmayo": {"rot": "3 large reservoirs", "tol": 0.00005, "itens": [
        ("relation", 16907593, "Antacoto (OSM: Antaquta)", "represa"), ("way", 26966700, "Huascacocha", "represa"),
        ("way", 26943485, "Yuracmayo", "represa")]},
    "segundo-tunel-pontas": {"rot": "PLANNED", "tol": 0.00005, "itens": [
        ("way", 26966553, "Pomacocha (Mantaro side)", "ponta-mantaro"), ("way", 26966527, "Huallacocha (Mantaro side)", "ponta-mantaro"),
        ("way", 293766958, "Río Blanco (Rímac side)", "ponta-rimac")]},
    "huinco": {"rot": "Huinco", "ponto": True, "itens": [("way", 864802081, "Huinco hydroelectric plant", "usina")]},
    "la-atarjea": {"rot": "La Atarjea", "tol": 0.00002, "com_ponto": True, "itens": [("way", 299519645, "La Atarjea (water treatment plant)", "planta")]},
    "villa-el-salvador": {"rot": "Villa El Salvador", "tol": 0.0001, "itens": [("relation", 1944858, "Villa El Salvador", "distrito")]},
    "san-juan-de-miraflores": {"rot": "San Juan de Miraflores", "tol": 0.0001, "itens": [("relation", 1944816, "San Juan de Miraflores", "distrito")]},
    "puente-piedra": {"rot": "Puente Piedra", "tol": 0.0001, "itens": [("relation", 1944788, "Puente Piedra", "distrito")]},
    "ilha-san-lorenzo": {"rot": "San Lorenzo Island", "tol": 0.00005, "itens": [("relation", 3285474, "San Lorenzo Island", "ilha")]},
    "lima-callao-metropolitana": {"rot": "Lima and Callao", "tol": 0.0002, "itens": [
        ("relation", 1944670, "Lima Province", "provincia"), ("relation", 1944657, "Callao", "provincia")]},
    "pontos-osm": {"rot": None, "ponto": True, "itens": [
        ("node", 9733606657, "Pamplona", "pamplona-1971"), ("way", 1390289421, "Cantalloc puquios (OSM: Acueductos de Cantayoq)", "puquios-cantalloc"),
        ("node", 2651665845, "Vilca (village)", "vilca"), ("node", 2440777665, "Matucana (town)", "matucana"),
        ("node", 2165108346, "Satipo (town)", "satipo"), ("node", 5326264643, "Jauja (town)", "jauja"),
        ("node", 2671057422, "Huaguruncho Norte (peak)", "pico"), ("way", 236629812, "Huaguruncho (glacier, 5,721 m)", "pico"),
        ("node", 2671072151, "Huaytapallana (peak, 5,557 m)", "pico"), ("node", 4020920101, "Milloc (hamlet)", "milloc"),
        ("way", 376894250, "Laguna Milloc", "milloc")]},
}
relato = {}
for slug, c in CAMADAS.items():
    feats, fontes = [], []
    for tipo, i, nome, papel in c["itens"]:
        g, t = geom(tipo, i)
        props = {"name": nome, "papel": papel, "osm": f"{tipo}/{i}", "osm_name": t.get("name"), "license": OSM}
        if isinstance(g, (Polygon, MultiPolygon)):
            props["area_km2"] = km2(g); props["area_sq_mi"] = round(props["area_km2"] / 2.589988, 3)
        if c.get("ponto") and not isinstance(g, Point):
            g = g.representative_point() if isinstance(g, (Polygon, MultiPolygon)) else g.interpolate(0.5, normalized=True)
            props["ponto_de"] = "representative_point do polígono do OSM (cai dentro dele)" if "area_km2" in props else "ponto do meio da linha do OSM"
            props["area_do_poligono_osm_km2"] = props.pop("area_km2", None); props.pop("area_sq_mi", None)
        elif c.get("tol") and not isinstance(g, Point):
            n0 = len(mapping(g)["coordinates"]) if False else None
            g = g.simplify(c["tol"], preserve_topology=True)
        if c.get("rot"):
            props["rotulo"] = c["rot"]
        feats.append({"type": "Feature", "properties": props, "geometry": mapping(r6(g))})
        if c.get("com_ponto"):
            p = shape(feats[-1]["geometry"]).representative_point()
            feats.append({"type": "Feature", "properties": {**{k: v for k, v in props.items() if not k.startswith("area")}, "papel": papel + "-ponto"}, "geometry": mapping(r6(p))})
        fontes.append(f"{tipo}/{i}")
    fc = {"type": "FeatureCollection", "features": feats}
    json.dump(fc, open(os.path.join(out, f"_fc-{slug}.json"), "w", encoding="utf-8"), ensure_ascii=False)
    orig = {"fonte": "OpenStreetMap via Overpass API (22/10/2026) — " + ", ".join(fontes), "licenca": OSM,
            "url": "https://www.openstreetmap.org/" + fontes[0], "exige_credito": True,
            "derivado_por": "out/peru-agua/_pesquisa/geo_osm_camadas.py (dumps do Overpass em _tmp/pesquisa-geo/osm/; polygonize das ways; simplify %s°)" % c.get("tol", 0)}
    json.dump(orig, open(os.path.join(out, f"_orig-{slug}.json"), "w", encoding="utf-8"), ensure_ascii=False)
    relato[slug] = [(f["properties"]["name"], f["geometry"]["type"], f["properties"].get("area_km2"),
                     [round(v, 4) for v in shape(f["geometry"]).centroid.coords[0]]) for f in feats]
print(json.dumps(relato, indent=1, ensure_ascii=False))
