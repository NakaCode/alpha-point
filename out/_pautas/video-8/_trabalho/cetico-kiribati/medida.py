# A medida do cetico de Kiribati: a largura (a maior distancia entre dois pontos de terra) de Kiribati, dos EUA contiguos
# e dos outros candidatos a "mais espalhado"; a fracao de terra na ZEE; e o teste da miniatura (os EUA "em tamanho real"
# levados ao equador, contra o mapa de Mercator ingenuo).
# Fontes: Natural Earth 10m admin-1 (dominio publico, cache da maquina), Marine Regions (ZEE, lida pelo WFS em 18/11/2026,
# fontes/marineregions-eez-kiribati.json), Kiribati Census Atlas 2022 (terra: 811 km2 oficial; 730 km2 do censo).
# Uso: python -X utf8 -B medida.py > medida-saida.txt
import json, os, math
import numpy as np

NE = os.path.expanduser("~/.regie/geo/natural-earth/ne_10m_admin_1_states_provinces.geojson")
d = json.load(open(NE, encoding="utf-8"))

def coords(geom):
    t = geom["type"]
    if t == "Polygon":
        for anel in geom["coordinates"]:
            for c in anel:
                yield c
    elif t == "MultiPolygon":
        for poli in geom["coordinates"]:
            for anel in poli:
                for c in anel:
                    yield c

def pontos(filtro):
    out = []
    for f in d["features"]:
        p = f["properties"]
        if filtro(p):
            out.extend((c[0], c[1]) for c in coords(f["geometry"]))
    return out

# ---------- Vincenty (WGS84), inverso ----------
A, F = 6378137.0, 1 / 298.257223563
B = A * (1 - F)
def vincenty(lat1, lon1, lat2, lon2):
    L = math.radians(lon2 - lon1)
    U1 = math.atan((1 - F) * math.tan(math.radians(lat1)))
    U2 = math.atan((1 - F) * math.tan(math.radians(lat2)))
    sU1, cU1, sU2, cU2 = math.sin(U1), math.cos(U1), math.sin(U2), math.cos(U2)
    lam = L
    for _ in range(200):
        sl, cl = math.sin(lam), math.cos(lam)
        ss = math.sqrt((cU2 * sl) ** 2 + (cU1 * sU2 - sU1 * cU2 * cl) ** 2)
        if ss == 0:
            return 0.0
        cs = sU1 * sU2 + cU1 * cU2 * cl
        sig = math.atan2(ss, cs)
        sa = cU1 * cU2 * sl / ss
        c2a = 1 - sa * sa
        c2sm = cs - 2 * sU1 * sU2 / c2a if c2a else 0.0
        C = F / 16 * c2a * (4 + F * (4 - 3 * c2a))
        lp = lam
        lam = L + (1 - C) * F * sa * (sig + C * ss * (c2sm + C * cs * (-1 + 2 * c2sm * c2sm)))
        if abs(lam - lp) < 1e-12:
            break
    u2 = c2a * (A * A - B * B) / (B * B)
    AA = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)))
    BB = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)))
    ds = BB * ss * (c2sm + BB / 4 * (cs * (-1 + 2 * c2sm * c2sm) - BB / 6 * c2sm * (-3 + 4 * ss * ss) * (-3 + 4 * c2sm * c2sm)))
    return B * AA * (sig - ds) / 1000.0

def km_mi(km):
    return "%.0f km = %.0f mi" % (km, km / 1.609344)

def diametro(pts, maxn=2500):
    """Maior distancia entre dois pontos: busca na esfera (numpy) sobre uma amostra, refinada por Vincenty."""
    arr = np.array(pts, dtype=float)
    arr = np.unique(np.round(arr, 4), axis=0)
    if len(arr) > maxn:
        idx = np.linspace(0, len(arr) - 1, maxn).astype(int)
        arr = arr[idx]
    lon, lat = np.radians(arr[:, 0]), np.radians(arr[:, 1])
    xyz = np.stack([np.cos(lat) * np.cos(lon), np.cos(lat) * np.sin(lon), np.sin(lat)], axis=1)
    dots = xyz @ xyz.T
    i, j = np.unravel_index(np.argmin(dots), dots.shape)
    p, q = arr[i], arr[j]
    return vincenty(p[1], p[0], q[1], q[0]), (round(p[1], 3), round(p[0], 3)), (round(q[1], 3), round(q[0], 3)), len(arr)

def leste_oeste(pts, shift=False):
    """Pontos mais a oeste e mais a leste (com longitude 0..360 se cruza o antimeridiano) e a distancia entre eles."""
    def lon360(x):
        return x % 360 if shift else x
    w = min(pts, key=lambda c: lon360(c[0]))
    e = max(pts, key=lambda c: lon360(c[0]))
    span = lon360(e[0]) - lon360(w[0])
    return w, e, span, vincenty(w[1], w[0], e[1], e[0])

print("# A largura (a maior distancia entre dois pontos de terra; Vincenty, WGS84; Natural Earth 10m admin-1)\n")
kir = pontos(lambda p: p.get("adm0_a3") == "KIR")
us48 = pontos(lambda p: p.get("adm0_a3") == "USA" and p.get("name") not in ("Alaska", "Hawaii"))
dk = diametro(kir); du = diametro(us48)
print("KIRIBATI diametro:", km_mi(dk[0]), "entre", dk[1], "e", dk[2], "| pontos", dk[3])
print("EUA CONTIGUOS diametro:", km_mi(du[0]), "entre", du[1], "e", du[2], "| pontos", du[3])
w, e, span, dist = leste_oeste(kir, shift=True)
print("KIRIBATI oeste-leste: de", (round(w[1], 3), round(w[0], 3)), "a", (round(e[1], 3), round(e[0], 3)), "| %.2f graus de longitude |" % span, km_mi(dist))
w2, e2, span2, dist2 = leste_oeste(us48)
print("EUA CONTIGUOS oeste-leste: de", (round(w2[1], 3), round(w2[0], 3)), "a", (round(e2[1], 3), round(e2[0], 3)), "| %.2f graus de longitude |" % span2, km_mi(dist2))
print("Conferencia, pontos extremos classicos: Cape Alava (48.1653,-124.7328) a West Quoddy Head (44.8153,-66.9497):", km_mi(vincenty(48.1653, -124.7328, 44.8153, -66.9497)))
print("Conferencia: Cape Flattery (48.3830,-124.7150) a Key West (24.5465,-81.7975):", km_mi(vincenty(48.3830, -124.7150, 24.5465, -81.7975)))
print("Conferencia: Point Arena (38.954,-123.740) a West Quoddy Head:", km_mi(vincenty(38.954, -123.740, 44.8153, -66.9497)))

print("\n# Os outros candidatos a 'mais espalhado' (diametro de toda a terra do pais, com os territorios quando dito)\n")
outros = [
    ("Indonesia", lambda p: p.get("adm0_a3") == "IDN", []),
    ("Micronesia (FSM)", lambda p: p.get("adm0_a3") == "FSM", []),
    ("Ilhas Marshall", lambda p: p.get("adm0_a3") == "MHL", []),
    ("Ilhas Salomao", lambda p: p.get("adm0_a3") == "SLB", []),
    ("Papua-Nova Guine", lambda p: p.get("adm0_a3") == "PNG", []),
    ("Fiji", lambda p: p.get("adm0_a3") == "FJI", []),
    ("Tuvalu", lambda p: p.get("adm0_a3") == "TUV", []),
    ("Chile (com a Ilha de Pascoa)", lambda p: p.get("adm0_a3") == "CHL", []),
    ("Nova Zelandia propria (sem Tokelau, Cook, Niue)", lambda p: p.get("adm0_a3") == "NZL", []),
    ("Nova Zelandia com Tokelau (Fakaofo e Atafu, a mao)", lambda p: p.get("adm0_a3") == "NZL", [(-171.21, -9.37), (-172.50, -8.54)]),
    ("Australia com Norfolk", lambda p: p.get("adm0_a3") in ("AUS", "NFK"), []),
    ("Filipinas", lambda p: p.get("adm0_a3") == "PHL", []),
    ("Japao", lambda p: p.get("adm0_a3") == "JPN", []),
]
for nome, filt, extra in outros:
    pts = pontos(filt) + extra
    if not pts:
        print(nome, ": sem pontos"); continue
    r = diametro(pts)
    print("%-52s %s  (%s a %s)" % (nome, km_mi(r[0]), r[1], r[2]))

print("\n# A terra e o mar\n")
z = json.load(open(os.path.join(os.path.dirname(__file__), "fontes", "marineregions-eez-kiribati.json"), encoding="utf-8"))
zee = {f["properties"]["territory1"]: f["properties"]["area_km2"] for f in z["features"]}
tot = sum(zee.values())
for k, v in zee.items():
    print("ZEE %-16s %10d km2 = %8.0f mi2 (%.1f %%)" % (k, v, v / 2.589988, 100 * v / tot))
print("ZEE total %16d km2 = %.0f mi2" % (tot, tot / 2.589988))
for nome, terra in (("oficial (GoK 2018)", 811), ("do censo (KINSO 2012)", 730)):
    print("terra %-22s %d km2 = %.0f mi2 | terra/ZEE = %.4f %% | 1 km2 de terra para %.0f km2 de mar" % (nome, terra, terra / 2.589988, 100 * terra / tot, tot / terra))
print("Kiritimati 388 km2 = %.0f %% da terra do censo (730) e %.0f %% da oficial (811)" % (100 * 388 / 730, 100 * 388 / 811))
print("South Tarawa: 63.072 pessoas em 16 km2 = %.0f %% da populacao (119.438) em %.1f %% da terra (do censo)" % (100 * 63072 / 119438, 100 * 16 / 730))
print("EUA contiguos (area total, Census): ~3.119.885 mi2 = 8.080.464 km2 -> ZEE de Kiribati = %.0f %% disso" % (100 * tot / 8080464))

print("\n# A miniatura: os EUA contiguos 'em tamanho real' levados ao centro de Kiribati, norte para cima\n")
def xyz(lat, lon):
    la, lo = math.radians(lat), math.radians(lon)
    return np.array([math.cos(la) * math.cos(lo), math.cos(la) * math.sin(lo), math.sin(la)])
def latlon(v):
    return math.degrees(math.asin(max(-1, min(1, v[2])))), math.degrees(math.atan2(v[1], v[0]))
def rot(eixo, ang):
    eixo = eixo / np.linalg.norm(eixo)
    K = np.array([[0, -eixo[2], eixo[1]], [eixo[2], 0, -eixo[0]], [-eixo[1], eixo[0], 0]])
    return np.eye(3) + math.sin(ang) * K + (1 - math.cos(ang)) * K @ K
c_lat, c_lon = 39.8283, -98.5795          # centro geografico dos EUA contiguos (perto de Lebanon, Kansas)
w_k, e_k = w[0] % 360, e[0] % 360
alvo_lon = ((w_k + e_k) / 2 + 180) % 360 - 180
alvo_lat = -2.0
R1 = rot(np.array([0, 0, 1.0]), math.radians(alvo_lon - c_lon))                        # gira em longitude
eixo2 = xyz(0, alvo_lon + 90)                                                            # eixo no equador, perpendicular ao meridiano-alvo
R2 = rot(eixo2, math.radians(c_lat - alvo_lat))                                          # desce em latitude, norte para cima
arr = np.unique(np.round(np.array(us48), 3), axis=0)
lons = []
for lon, lat in arr[:: max(1, len(arr) // 20000)]:
    la2, lo2 = latlon(R2 @ (R1 @ xyz(lat, lon)))
    lons.append(lo2 % 360)
span_us_true = max(lons) - min(lons)
print("Kiribati: %.2f graus de longitude (de %.2f a %.2f, em 0..360)" % (span, w_k, e_k))
print("EUA contiguos no lugar (Mercator ingenuo): %.2f graus de longitude -> na miniatura, %.0f %% da largura de Kiribati" % (span2, 100 * span2 / span))
print("EUA contiguos em tamanho real, no equador: %.2f graus -> %.0f %% da largura de Kiribati" % (span_us_true, 100 * span_us_true / span))
print("Folga de Kiribati (oeste-leste, Vincenty): %.0f km = %.0f mi (%.1f %%)" % (dist - dist2, (dist - dist2) / 1.609344, 100 * (dist - dist2) / dist2))

print("\n# Distancias do roteiro (Vincenty)\n")
P = {"Banaba": (-0.8581, 169.5351), "Bairiki (Tarawa)": (1.3296, 172.9778), "London (Kiritimati)": (1.9836, -157.4762),
     "Kanton": (-2.8155, -171.6711), "Caroline": (-9.9594, -150.2054), "Honolulu": (21.3045, -157.8557), "Nadi (Fiji)": (-17.7553, 177.4434),
     "Nova York": (40.7127, -74.0060), "Los Angeles": (34.0537, -118.2428)}
for a, b in [("Bairiki (Tarawa)", "London (Kiritimati)"), ("Bairiki (Tarawa)", "Nadi (Fiji)"), ("Nadi (Fiji)", "London (Kiritimati)"),
             ("London (Kiritimati)", "Honolulu"), ("Kanton", "Honolulu"), ("Banaba", "Caroline"), ("Nova York", "Los Angeles"), ("Bairiki (Tarawa)", "Kanton")]:
    print("%-22s -> %-22s %s" % (a, b, km_mi(vincenty(*P[a], *P[b]))))
tn = vincenty(*P["Bairiki (Tarawa)"], *P["Nadi (Fiji)"]) + vincenty(*P["Nadi (Fiji)"], *P["London (Kiritimati)"])
print("Tarawa -> Nadi -> Kiritimati (soma das pernas):", km_mi(tn), "| contra o direto: +%.0f %%" % (100 * (tn / vincenty(*P["Bairiki (Tarawa)"], *P["London (Kiritimati)"]) - 1)))
