"""Medidas na Terra para a parte B da geo (vídeo 4, atlantico-fundo, 28/10/2026): Vincenty no WGS84 (inversa e direta),
área na esfera autálica (cilíndrica de Lambert, exata em área na esfera), comprimento de linha e o ponto de costa mais perto.
Só numpy e shapely."""
import math
import numpy as np

A_WGS = 6378137.0
F_WGS = 1 / 298.257223563
B_WGS = A_WGS * (1 - F_WGS)
R_AUTALICO = 6371007.181


def vincenty(lon1, lat1, lon2, lat2):
    """Distância geodésica (m) no WGS84, Vincenty (1975), inversa."""
    if (lon1, lat1) == (lon2, lat2):
        return 0.0
    L = math.radians(lon2 - lon1)
    U1 = math.atan((1 - F_WGS) * math.tan(math.radians(lat1)))
    U2 = math.atan((1 - F_WGS) * math.tan(math.radians(lat2)))
    sU1, cU1, sU2, cU2 = math.sin(U1), math.cos(U1), math.sin(U2), math.cos(U2)
    lam = L
    for _ in range(200):
        sl, cl = math.sin(lam), math.cos(lam)
        ss = math.hypot(cU2 * sl, cU1 * sU2 - sU1 * cU2 * cl)
        if ss == 0:
            return 0.0
        cs = sU1 * sU2 + cU1 * cU2 * cl
        sig = math.atan2(ss, cs)
        sa = cU1 * cU2 * sl / ss
        c2a = 1 - sa * sa
        c2sm = cs - 2 * sU1 * sU2 / c2a if c2a else 0.0
        C = F_WGS / 16 * c2a * (4 + F_WGS * (4 - 3 * c2a))
        lp = lam
        lam = L + (1 - C) * F_WGS * sa * (sig + C * ss * (c2sm + C * cs * (-1 + 2 * c2sm * c2sm)))
        if abs(lam - lp) < 1e-12:
            break
    u2 = c2a * (A_WGS ** 2 - B_WGS ** 2) / B_WGS ** 2
    Ak = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)))
    Bk = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)))
    ds = Bk * ss * (c2sm + Bk / 4 * (cs * (-1 + 2 * c2sm * c2sm) - Bk / 6 * c2sm * (-3 + 4 * ss * ss) * (-3 + 4 * c2sm * c2sm)))
    return B_WGS * Ak * (sig - ds)


def vincenty_direto(lon, lat, azimute, dist):
    """Ponto a `dist` metros de (lon, lat) no rumo `azimute` (graus, a partir do norte), Vincenty direta no WGS84."""
    a1 = math.radians(azimute)
    sa1, ca1 = math.sin(a1), math.cos(a1)
    tU1 = (1 - F_WGS) * math.tan(math.radians(lat))
    cU1 = 1 / math.sqrt(1 + tU1 * tU1); sU1 = tU1 * cU1
    s1 = math.atan2(tU1, ca1)
    sa = cU1 * sa1
    c2a = 1 - sa * sa
    u2 = c2a * (A_WGS ** 2 - B_WGS ** 2) / B_WGS ** 2
    Ak = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)))
    Bk = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)))
    sig = dist / (B_WGS * Ak)
    for _ in range(200):
        c2sm = math.cos(2 * s1 + sig); ss, cs = math.sin(sig), math.cos(sig)
        ds = Bk * ss * (c2sm + Bk / 4 * (cs * (-1 + 2 * c2sm * c2sm) - Bk / 6 * c2sm * (-3 + 4 * ss * ss) * (-3 + 4 * c2sm * c2sm)))
        sp = sig
        sig = dist / (B_WGS * Ak) + ds
        if abs(sig - sp) < 1e-12:
            break
    ss, cs = math.sin(sig), math.cos(sig); c2sm = math.cos(2 * s1 + sig)
    t = sU1 * ss - cU1 * cs * ca1
    lat2 = math.atan2(sU1 * cs + cU1 * ss * ca1, (1 - F_WGS) * math.hypot(sa, t))
    lam = math.atan2(ss * sa1, cU1 * cs - sU1 * ss * ca1)
    C = F_WGS / 16 * c2a * (4 + F_WGS * (4 - 3 * c2a))
    L = lam - (1 - C) * F_WGS * sa * (sig + C * ss * (c2sm + C * cs * (-1 + 2 * c2sm * c2sm)))
    return (lon + math.degrees(L), math.degrees(lat2))


def haversine_vet(lon1, lat1, lons, lats):
    p1, p2 = np.radians(lat1), np.radians(lats)
    dl = np.radians(lons - lon1)
    h = np.sin((p2 - p1) / 2) ** 2 + np.cos(p1) * np.cos(p2) * np.sin(dl / 2) ** 2
    return 2 * R_AUTALICO * np.arcsin(np.sqrt(h))


def area_km2(geom):
    """Área na esfera autálica (km²), pela cilíndrica equivalente de Lambert (x = R·λ, y = R·sen φ)."""
    from shapely.ops import transform
    g = transform(lambda x, y, z=None: (np.radians(x) * R_AUTALICO, np.sin(np.radians(y)) * R_AUTALICO), geom)
    return g.area / 1e6


def comprimento_km(geom):
    """Comprimento (km) de LineString/MultiLineString/anéis, somando Vincenty entre vértices consecutivos."""
    tot = 0.0
    linhas = []
    if geom.geom_type in ("LineString", "LinearRing"):
        linhas = [geom]
    elif geom.geom_type == "MultiLineString":
        linhas = list(geom.geoms)
    elif geom.geom_type == "Polygon":
        linhas = [geom.exterior]
    elif geom.geom_type == "MultiPolygon":
        linhas = [p.exterior for p in geom.geoms]
    for l in linhas:
        c = list(l.coords)
        for (x1, y1, *_), (x2, y2, *_) in zip(c[:-1], c[1:]):
            tot += vincenty(x1, y1, x2, y2)
    return tot / 1000


def ponto_mais_perto(lon, lat, geom, passo_graus=0.0003):
    """O ponto da borda de `geom` mais perto de (lon, lat), geodésico: a borda é densificada a ~30 m, os candidatos se
    ordenam por haversine e os 50 melhores se medem por Vincenty. Devolve (lon, lat, metros)."""
    import shapely
    b = shapely.segmentize(geom.boundary, passo_graus)
    coords = np.array(shapely.get_coordinates(b))
    d = haversine_vet(lon, lat, coords[:, 0], coords[:, 1])
    idx = np.argsort(d)[:50]
    melhor = min(((vincenty(lon, lat, coords[i, 0], coords[i, 1]), i) for i in idx))
    i = melhor[1]
    return float(coords[i, 0]), float(coords[i, 1]), melhor[0]


def dms(lat, lon):
    def f(v, pos, neg):
        s = pos if v >= 0 else neg; v = abs(v)
        d = int(v); m = (v - d) * 60
        return f"{d}°{m:06.3f}'{s}"
    return f(lat, "N", "S") + " " + f(lon, "E", "W")
