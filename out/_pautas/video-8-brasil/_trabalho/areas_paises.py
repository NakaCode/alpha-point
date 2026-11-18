# As duas metades da America do Sul: a area do Brasil contra a dos 9 paises de lingua espanhola, e o Brasil contra os EUA contiguos.
# Dado: Natural Earth 1:10m admin-0 (dominio publico), copia do motor em C:/projetos/regie-v1/acervo/geojson/ (sha256 no manifest).
# Uso: python -X utf8 -B areas_paises.py
import json, sys, os
from shapely.geometry import shape
from shapely import make_valid
sys.path.insert(0, os.path.dirname(__file__))
from geo_util import Albers, area_km2

NE = "C:/projetos/regie-v1/acervo/geojson/ne10m-admin0-countries.json"
d = json.load(open(NE, encoding="utf-8"))
sa = Albers(-2, -22, -12, -54)          # America do Sul (equal-area em toda parte; so a forma distorce)
us = Albers(29.5, 45.5, 23, -96)        # EUA contiguos (parametros do USGS)
SQMI = 2.589988110336

def geom(admin):
    for f in d["features"]:
        if f["properties"]["ADMIN"] == admin:
            return make_valid(shape(f["geometry"]))
    raise SystemExit("sem " + admin)

esp = ["Argentina", "Bolivia", "Chile", "Colombia", "Ecuador", "Paraguay", "Peru", "Uruguay", "Venezuela"]
tot_esp = 0
for p in esp:
    a = area_km2(geom(p), sa)
    tot_esp += a
    print(f"{p}: {a:,.0f} km2")
gelo = area_km2(geom("Southern Patagonian Ice Field"), sa)
print(f"Campo de Gelo Patagonico Sul (disputado AR/CL): {gelo:,.0f} km2")
br = area_km2(geom("Brazil"), sa)
print(f"\nBrasil (NE): {br:,.0f} km2 = {br/SQMI:,.0f} sq mi")
print(f"9 paises de lingua espanhola (NE): {tot_esp:,.0f} km2 = {tot_esp/SQMI:,.0f} sq mi; com o campo de gelo: {tot_esp+gelo:,.0f}")
print(f"razao espanhol/Brasil: {tot_esp/br:.3f}")
outros = ["Guyana", "Suriname", "France"]
g_fr = geom("France")
# so a Guiana Francesa: partes do poligono da Franca na America do Sul
gf = [p for p in getattr(g_fr, "geoms", [g_fr]) if p.centroid.x < -40 and p.centroid.y > 0 and p.centroid.y < 10]
from shapely.ops import unary_union
gf_a = area_km2(unary_union(gf), sa) if gf else 0
gy, su = area_km2(geom("Guyana"), sa), area_km2(geom("Suriname"), sa)
fk = area_km2(geom("Falkland Islands"), sa)
cont = br + tot_esp + gelo + gy + su + gf_a + fk
print(f"Guiana {gy:,.0f}; Suriname {su:,.0f}; Guiana Francesa {gf_a:,.0f}; Malvinas {fk:,.0f}")
print(f"America do Sul (soma NE): {cont:,.0f} km2; Brasil = {100*br/cont:.1f}%; os 9 espanhois = {100*(tot_esp+gelo)/cont:.1f}%")

g_us = geom("United States of America")
partes = [p for p in getattr(g_us, "geoms", [g_us]) if p.centroid.y < 49.5 and p.centroid.y > 24 and p.centroid.x > -125 and p.centroid.x < -66]
# a Flórida Keys ficam abaixo de 24.6; incluir ilhas da costa com centroide a partir de 24.0
c48 = unary_union(partes)
a48 = area_km2(c48, us)
print(f"\nEUA contiguos (NE, terra): {a48:,.0f} km2 = {a48/SQMI:,.0f} sq mi | Brasil/EUA48 = {br/a48:.3f}")
