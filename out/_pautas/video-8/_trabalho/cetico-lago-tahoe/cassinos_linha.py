# Distância de cada cassino do OSM (Stateline e Crystal Bay) à linha Califórnia–Nevada do decreto de 1982.
# Um pedido só ao Overpass (API pública do OSM), guardado em ./dados/overpass-cassinos.json.
# A linha: o canto do decreto em NAD83(2011) (NCAT/NGS) e os rumos do decreto (S 0°09'15" W ao norte; S 48°46'03" E ao sul).
# Uso: python -X utf8 -B cassinos_linha.py
import os, json, math, urllib.request, urllib.parse
AQUI = os.path.dirname(os.path.abspath(__file__))
ARQ = os.path.join(AQUI, "dados", "overpass-cassinos.json")
Q = """[out:json][timeout:60];
(
  nwr["amenity"="casino"](38.94,-119.97,38.98,-119.92);
  nwr["amenity"="casino"](39.22,-120.02,39.25,-119.99);
);
out center tags;"""
if not os.path.exists(ARQ):
    dados = urllib.parse.urlencode({"data": Q}).encode()
    req = urllib.request.Request("https://overpass-api.de/api/interpreter", data=dados,
                                 headers={"User-Agent": "alpha-point-pesquisa/1.0 (pesquisa de pauta; um pedido)"})
    with urllib.request.urlopen(req, timeout=120) as r:
        open(ARQ, "wb").write(r.read())
els = json.load(open(ARQ, encoding="utf-8"))["elements"]
LAT0 = 39.0
KY = 111030.0
KX = 111320.0 * math.cos(math.radians(LAT0))
canto = (39.0033979261, -120.0064763677)

def xy(lat, lon):
    return ((lon - canto[1]) * KX, (lat - canto[0]) * KY)

az_s = math.radians(180 - (48 + 46 / 60 + 3 / 3600))  # oblíqua, para sudeste
az_n = math.radians(9 / 60 + 15 / 3600)               # Von Schmidt, para o norte
u_s = (math.sin(az_s), math.cos(az_s)); u_n = (math.sin(az_n), math.cos(az_n))

def dist_linha(p, u):
    # distância perpendicular (com sinal: + = lado de Nevada, a leste/nordeste)
    return p[0] * u[1] - p[1] * u[0]

for e in els:
    t = e.get("tags", {})
    c = e.get("center") or {"lat": e.get("lat"), "lon": e.get("lon")}
    p = xy(c["lat"], c["lon"])
    u = u_n if c["lat"] > 39.1 else u_s
    d = dist_linha(p, u)
    print(f"{t.get('name','(sem nome)'):40s} {c['lat']:.5f},{c['lon']:.5f}  {d:+7.0f} m = {d/0.3048:+7,.0f} pés da linha (centro do objeto OSM)")
