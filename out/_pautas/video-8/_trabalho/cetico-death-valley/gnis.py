# Cético death-valley (17/11/2026): os pontos do GNIS (USGS, The National Map Gazetteer) e as distâncias em linha reta.
# Uso: python -X utf8 -B gnis.py   (cwd = esta pasta). Um pedido por vez ao serviço do USGS.
import json, math, time, urllib.parse, urllib.request

UA = "AlphaPoint-pauta/1.0"
BASE = "https://carto.nationalmap.gov/arcgis/rest/services/geonames/MapServer/{}/query"

NOMES = [
    (5, "Badwater Basin"), (5, "Mount Whitney"), (5, "Telescope Peak"), (5, "Death Valley"),
    (5, "Owens Valley"), (5, "Panamint Valley"), (5, "Inyo Mountains"), (5, "Panamint Range"),
    (5, "White Mountain Peak"), (5, "Dantes View"), (7, "Badwater Spring"), (7, "Badwater"), (12, "Badwater"), (3, "Badwater"), (3, "Stovepipe Wells"), (3, "Furnace Creek"),
    (2, "Furnace Creek"), (1, "Lone Pine"), (2, "Lone Pine"), (5, "Whitney Portal"), (3, "Whitney Portal"),
]

def consulta(layer, nome):
    q = {"where": f"gaz_name = '{nome}' AND state_alpha = 'CA'", "outFields": "gaz_id,gaz_name,gaz_featureclass,county_name",
         "returnGeometry": "true", "outSR": "4326", "f": "json"}
    url = BASE.format(layer) + "?" + urllib.parse.urlencode(q)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode("utf-8"))

def geodesica_mi(lat1, lon1, lat2, lon2):
    # Vincenty inverso no WGS84 (milhas terrestres)
    a = 6378137.0; f = 1 / 298.257223563; b = a * (1 - f)
    L = math.radians(lon2 - lon1)
    U1 = math.atan((1 - f) * math.tan(math.radians(lat1))); U2 = math.atan((1 - f) * math.tan(math.radians(lat2)))
    sinU1, cosU1, sinU2, cosU2 = math.sin(U1), math.cos(U1), math.sin(U2), math.cos(U2)
    lam = L
    for _ in range(200):
        sl, cl = math.sin(lam), math.cos(lam)
        ss = math.sqrt((cosU2 * sl) ** 2 + (cosU1 * sinU2 - sinU1 * cosU2 * cl) ** 2)
        cs = sinU1 * sinU2 + cosU1 * cosU2 * cl
        sg = math.atan2(ss, cs)
        sa = cosU1 * cosU2 * sl / ss
        c2a = 1 - sa * sa
        c2sm = cs - 2 * sinU1 * sinU2 / c2a if c2a else 0
        C = f / 16 * c2a * (4 + f * (4 - 3 * c2a))
        lp = lam
        lam = L + (1 - C) * f * sa * (sg + C * ss * (c2sm + C * cs * (-1 + 2 * c2sm * c2sm)))
        if abs(lam - lp) < 1e-12:
            break
    u2 = c2a * (a * a - b * b) / (b * b)
    A = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)))
    B = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)))
    ds = B * ss * (c2sm + B / 4 * (cs * (-1 + 2 * c2sm * c2sm) - B / 6 * c2sm * (-3 + 4 * ss * ss) * (-3 + 4 * c2sm * c2sm)))
    s = b * A * (sg - ds)
    return s / 1609.344

pontos = {}
for layer, nome in NOMES:
    try:
        d = consulta(layer, nome)
    except Exception as e:
        print("ERRO", layer, nome, e); time.sleep(1); continue
    for ft in d.get("features", []):
        at = ft["attributes"]; g = ft.get("geometry") or {}; pts = g.get("points") or [[g.get("x"), g.get("y")]]; g = {"x": pts[0][0], "y": pts[0][1]}
        print(layer, at.get("gaz_id"), at.get("gaz_name"), at.get("gaz_featureclass"), at.get("county_name"), round(g.get("y", 0), 5), round(g.get("x", 0), 5))
        pontos.setdefault(nome, []).append({"layer": layer, **at, "lat": g.get("y"), "lon": g.get("x")})
    time.sleep(1)

json.dump(pontos, open("gnis-pontos.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# NGS GT1811 (WHITNEY): 36 34 42.89133 N, 118 17 31.18182 W (NAD 83(1992)), lido em 17/11/2026
whitney_ngs = (36 + 34 / 60 + 42.89133 / 3600, -(118 + 17 / 60 + 31.18182 / 3600))
def p(nome):
    v = pontos.get(nome)
    v = [x for x in (v or []) if x.get("county_name") == "Inyo"] or v
    return (v[0]["lat"], v[0]["lon"]) if v else None
pares = [("Mount Whitney (NGS GT1811)", whitney_ngs, "Badwater Basin (GNIS)", p("Badwater Basin")),
         ("Mount Whitney (GNIS)", p("Mount Whitney"), "Badwater Basin (GNIS)", p("Badwater Basin")),
         ("Mount Whitney (NGS GT1811)", whitney_ngs, "Badwater Spring (GNIS)", p("Badwater")),
         ("Telescope Peak (GNIS)", p("Telescope Peak"), "Badwater Basin (GNIS)", p("Badwater Basin")),
         ("Telescope Peak (GNIS)", p("Telescope Peak"), "Badwater Spring (GNIS)", p("Badwater")),
         ("Mount Whitney (NGS GT1811)", whitney_ngs, "Telescope Peak (GNIS)", p("Telescope Peak")),
         ("Mount Whitney (NGS GT1811)", whitney_ngs, "Lone Pine (GNIS)", p("Lone Pine"))]
print()
for n1, a, n2, b in pares:
    if a and b:
        mi = geodesica_mi(a[0], a[1], b[0], b[1])
        print(f"{n1} -> {n2}: {mi:.2f} mi ({mi*1.609344:.1f} km)")
    else:
        print("faltou ponto:", n1, n2)
