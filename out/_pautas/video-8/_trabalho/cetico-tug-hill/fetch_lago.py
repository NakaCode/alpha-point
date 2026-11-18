# Quanto lago Ontario o vento atravessa antes de chegar a Tug Hill, por direcao (Natural Earth 1:10m, lakes, do cache da maquina).
# Projecao local equirretangular centrada em 43,6 N (erro < 0,5 % nesta janela). Raio de 1 km.
# Uso: python -X utf8 -B -I fetch_lago.py <ne_10m_lakes.geojson>
import json, math, sys
from shapely.geometry import shape, LineString, Point
from shapely.ops import transform

R = 6371.0088
LAT0 = math.radians(43.6)
def proj(lon, lat, z=None):
    return (R * math.cos(LAT0) * math.radians(lon), R * math.radians(lat))

g = json.load(open(sys.argv[1], encoding="utf-8"))
ont = [f for f in g["features"] if (f["properties"].get("name") or "") == "Lake Ontario"]
print("feicoes 'Lake Ontario':", len(ont))
lago = transform(proj, shape(ont[0]["geometry"]))
print(f"area do poligono: {lago.area:,.0f} km2 (a EPA da 7.340 mi2 = 19.010 km2 de superficie)")
# diametro (maior distancia entre vertices)
pts = list(lago.exterior.coords) if lago.geom_type == "Polygon" else [c for p in lago.geoms for c in p.exterior.coords]
pts = pts[::2]
best = (0, None, None)
for i in range(len(pts)):
    xi, yi = pts[i]
    for j in range(i + 1, len(pts)):
        d = math.hypot(pts[j][0] - xi, pts[j][1] - yi)
        if d > best[0]:
            best = (d, pts[i], pts[j])
print(f"maior distancia entre dois pontos da margem: {best[0]:.1f} km = {best[0]/1.609344:.1f} mi")
ang = math.degrees(math.atan2(best[2][0] - best[1][0], best[2][1] - best[1][1])) % 180
print(f"  eixo do lago (azimute): {ang:.0f} / {ang+180:.0f} graus")

estacoes = {"Hooker 12 NNW": (-75.7158, 43.8525), "Highmarket 2W": (-75.5545, 43.6053), "Boonville 4 SSW": (-75.3700, 43.4360),
            "Lowville (vale do Black)": (-75.4830, 43.7930), "Oswego (margem)": (-76.5370, 43.4500), "Watertown": (-75.8750, 43.9760)}
for nome, (lon, lat) in estacoes.items():
    x0, y0 = proj(lon, lat)
    print(f"\n== {nome}: agua atravessada pelo vento que vem de cada direcao (km / mi)")
    linha = []
    for b in range(230, 305, 5):
        br = math.radians(b)
        x1, y1 = x0 + 600 * math.sin(br), y0 + 600 * math.cos(br)
        ray = LineString([(x0, y0), (x1, y1)])
        inter = ray.intersection(lago)
        km = inter.length
        # distancia da estacao ate a margem mais proxima nessa direcao
        dmar = Point(x0, y0).distance(inter) if km > 0 else float("nan")
        linha.append((b, km, dmar))
    for b, km, dmar in linha:
        print(f"  de {b:>3} graus: {km:6.1f} km = {km/1.609344:6.1f} mi de lago; a margem fica a {dmar:5.1f} km")
