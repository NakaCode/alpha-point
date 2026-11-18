# A medida nossa de Trindade: a area de mar (200 milhas nauticas) que as ilhas de Trindade e Martim Vaz dao ao Brasil,
# contra a area das proprias ilhas. Geometria: Natural Earth 1:10m admin-0 (dominio publico), copia do motor.
# Martim Vaz, se faltar no NE, entra como ponto (coordenada da en.wikipedia "Trindade and Martim Vaz", lida em 18/11/2026).
# Uso: python -X utf8 -B trindade_zee.py
import json, math, sys, os
import numpy as np
from shapely.geometry import shape, Point
from shapely.ops import transform, unary_union
sys.path.insert(0, os.path.dirname(__file__))
from geo_util import vincenty_km

R = 6371007.2  # raio autalico GRS80
LON0, LAT0 = math.radians(-29.1), math.radians(-20.5)

def laea_fwd(lon, lat, z=None):
    lon = np.radians(np.asarray(lon, float)); lat = np.radians(np.asarray(lat, float))
    k = np.sqrt(2 / (1 + math.sin(LAT0) * np.sin(lat) + math.cos(LAT0) * np.cos(lat) * np.cos(lon - LON0)))
    x = R * k * np.cos(lat) * np.sin(lon - LON0)
    y = R * k * (math.cos(LAT0) * np.sin(lat) - math.sin(LAT0) * np.cos(lat) * np.cos(lon - LON0))
    return x, y

d = json.load(open("C:/projetos/regie-v1/acervo/geojson/ne10m-admin0-countries.json", encoding="utf-8"))
br = [f for f in d["features"] if f["properties"]["ADMIN"] == "Brazil"][0]
g = shape(br["geometry"])
ilhas = [p for p in g.geoms if -30.5 < p.centroid.x < -28 and -21.5 < p.centroid.y < -19.5]
print("poligonos do NE na regiao de Trindade:", [(round(p.centroid.x, 3), round(p.centroid.y, 3)) for p in ilhas])
proj = [transform(laea_fwd, p) for p in ilhas]
area_ilhas = sum(p.area for p in proj) / 1e6
print(f"area das ilhas no NE: {area_ilhas:.2f} km2 = {area_ilhas/2.589988:.2f} sq mi")
tem_mv = any(p.centroid.x > -29.0 for p in ilhas)
geos = list(proj)
if not tem_mv:
    # Martim Vaz: 20 30 S, 28 51 W (en.wikipedia), como ponto
    mv = Point(*laea_fwd(-28.85, -20.5))
    geos.append(mv)
    print("Martim Vaz entra como ponto (-28.85, -20.50)")
NM200 = 200 * 1852.0
zee = unary_union([x.buffer(NM200, 256) for x in geos])
a = zee.area / 1e6
print(f"zona de 200 milhas nauticas: {a:,.0f} km2 = {a/2.589988:,.0f} sq mi")
print(f"razao mar/terra: {a/area_ilhas:,.0f} vezes")
# distancia da costa: Trindade a Vitoria (ES) e ao ponto mais proximo do continente (amostra da costa do NE)
cont = max(g.geoms, key=lambda p: p.area)
xs, ys = np.array(cont.exterior.coords).T
dmin = min((vincenty_km(-29.32, -20.51, x, y), x, y) for x, y in zip(xs[::5], ys[::5]) if y < -15 and y > -25)
print(f"Trindade ao continente (costa mais proxima, amostra NE): {dmin[0]:,.0f} km = {dmin[0]/1.609344:,.0f} mi em ({dmin[1]:.2f}, {dmin[2]:.2f})")
print(f"Trindade a Vitoria (-40.31, -20.32): {vincenty_km(-29.32, -20.51, -40.31, -20.32):,.0f} km = {vincenty_km(-29.32, -20.51, -40.31, -20.32)/1.609344:,.0f} mi")
