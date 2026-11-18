# Area do limite da cidade de Banff (OSM, relacao baixada por osm_banff.py), na conica equivalente de Albers do Canada
# (EPSG:3347 aprox.: paralelos 49 e 77, origem 63,390675 N / 91,866667 W; GRS80; formulas de Snyder, 1987).
import json, math
import numpy as np
from shapely.geometry import LineString, Polygon
from shapely.ops import polygonize, transform, unary_union
a, f = 6378137.0, 1 / 298.257222101
e2 = 2 * f - f * f; e = math.sqrt(e2)
def q(phi):
    s = np.sin(phi); return (1 - e2) * (s / (1 - e2 * s * s) - (1 / (2 * e)) * np.log((1 - e * s) / (1 + e * s)))
def m(phi):
    s = np.sin(phi); return np.cos(phi) / np.sqrt(1 - e2 * s * s)
p1, p2, p0, l0 = map(math.radians, (49.0, 77.0, 63.390675, -91.866667))
n = (m(p1) ** 2 - m(p2) ** 2) / (q(p2) - q(p1)); C = m(p1) ** 2 + n * q(p1); rho0 = a * math.sqrt(C - n * q(p0)) / n
def albers(x, y, z=None):
    lon, lat = np.radians(np.asarray(x)), np.radians(np.asarray(y))
    rho = a * np.sqrt(C - n * q(lat)) / n; th = n * (lon - l0)
    return rho * np.sin(th), rho0 - rho * np.cos(th)
d = json.load(open("dados/osm_banff.json", encoding="utf-8"))
for el in d["elements"]:
    print("tags:", el.get("tags"))
    linhas = [LineString([(p["lon"], p["lat"]) for p in mb["geometry"]]) for mb in el["members"] if mb["type"] == "way" and mb.get("role") in ("outer", "")]
    polys = list(polygonize(unary_union(linhas)))
    g = unary_union(polys)
    ga = transform(albers, g)
    km2 = ga.area / 1e6
    print(f"poligonos: {len(polys)} | area: {km2:.3f} km2 = {km2/2.589988:.3f} mi2 = {ga.area/4046.8564:.0f} acres | bbox {g.bounds}")
    PARQUE = 6641.0  # km2, Anexo 1 da Lei dos Parques Nacionais
    MONT = 0.03 * PARQUE  # 3% do parque e montano (Parks Canada)
    print(f"fracao do parque (6.641 km2): {km2/PARQUE:.4%} | 1 em {PARQUE/km2:,.0f}")
    print(f"fracao do montano (3% = {MONT:.0f} km2): {km2/MONT:.2%}")
    print(f"densidade com 8.305 hab.: {8305/km2:,.0f} hab/km2 | {8305/(km2/2.589988):,.0f} hab/mi2")
    print(f"visitas por morador: {4515168/8305:,.0f}")
    print(f"teto comercial: 361.390 m2 = {361390*10.7639:,.0f} pes2 = {361390/1e6/km2:.1%} da area da cidade")
    json.dump({"type": "Feature", "properties": el.get("tags"), "geometry": json.loads(json.dumps(g.__geo_interface__))}, open("dados/banff_cidade_osm.geojson", "w", encoding="utf-8"))
