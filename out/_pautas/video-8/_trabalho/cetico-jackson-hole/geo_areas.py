# Quanto do condado de Teton (WY) e parque nacional: interseccao dos limites do NPS (YELL, GRTE, JODR) com o condado (TIGERweb).
# Areas na projecao conica equivalente de Albers (parametros do EPSG:5070, elipsoide GRS80; formulas de Snyder, 1987).
import json, math
import numpy as np
from shapely.geometry import shape
from shapely.ops import transform, unary_union  # (aviso de obsolescencia do shapely 2.1: inofensivo)
a, f = 6378137.0, 1 / 298.257222101
e2 = 2 * f - f * f; e = math.sqrt(e2)
def q(phi):
    s = np.sin(phi)
    return (1 - e2) * (s / (1 - e2 * s * s) - (1 / (2 * e)) * np.log((1 - e * s) / (1 + e * s)))
def m(phi):
    s = np.sin(phi); return np.cos(phi) / np.sqrt(1 - e2 * s * s)
p1, p2, p0, l0 = map(math.radians, (29.5, 45.5, 23.0, -96.0))
n = (m(p1) ** 2 - m(p2) ** 2) / (q(p2) - q(p1)); C = m(p1) ** 2 + n * q(p1)
rho0 = a * math.sqrt(C - n * q(p0)) / n
def albers(x, y, z=None):
    lon, lat = np.radians(np.asarray(x)), np.radians(np.asarray(y))
    rho = a * np.sqrt(C - n * q(lat)) / n; th = n * (lon - l0)
    return rho * np.sin(th), rho0 - rho * np.cos(th)
MI2 = 2589988.110336
cty = transform(albers, shape(json.load(open("teton_condado.geojson", encoding="utf-8"))["features"][0]["geometry"]))
print(f"condado de Teton (TIGERweb, terra + agua): {cty.area / MI2:,.1f} mi2")
parques = {}
for ft in json.load(open("nps_limites.geojson", encoding="utf-8"))["features"]:
    g = transform(albers, shape(ft["geometry"])).buffer(0)
    parques[ft["properties"]["UNIT_CODE"]] = g
    i = g.intersection(cty).area / MI2
    print(f"  {ft['properties']['UNIT_CODE']}: area total {g.area / MI2:,.1f} mi2 ({g.area / 4046.8564224:,.0f} acres); no condado {i:,.1f} mi2 = {i / (cty.area / MI2):.1%} do condado")
uni = unary_union(list(parques.values())).intersection(cty).area / MI2
print(f"  os tres juntos no condado: {uni:,.1f} mi2 = {uni / (cty.area / MI2):.1%}")
