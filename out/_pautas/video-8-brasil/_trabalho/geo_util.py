# Utilidades geodesicas sem pyproj: Albers de area igual (GRS80) e distancia de Vincenty/haversine.
import math
import numpy as np
from shapely.ops import transform

A = 6378137.0
F = 1 / 298.257222101
E2 = F * (2 - F)
E = math.sqrt(E2)


def _q(phi):
    s = np.sin(phi)
    return (1 - E2) * (s / (1 - E2 * s * s) - (1 / (2 * E)) * np.log((1 - E * s) / (1 + E * s)))


def _m(phi):
    s = np.sin(phi)
    return np.cos(phi) / np.sqrt(1 - E2 * s * s)


class Albers:
    """Albers conica de area igual (Snyder 1987, eq. 14-1 a 14-12), elipsoide GRS80."""

    def __init__(self, lat1=-2.0, lat2=-22.0, lat0=-12.0, lon0=-54.0):
        p1, p2, p0 = map(math.radians, (lat1, lat2, lat0))
        self.lon0 = math.radians(lon0)
        m1, m2 = _m(p1), _m(p2)
        q1, q2, q0 = _q(p1), _q(p2), _q(p0)
        self.n = (m1 * m1 - m2 * m2) / (q2 - q1)
        self.C = m1 * m1 + self.n * q1
        self.rho0 = A * math.sqrt(self.C - self.n * q0) / self.n

    def fwd(self, lon, lat, z=None):
        lon = np.radians(np.asarray(lon, dtype=float))
        lat = np.radians(np.asarray(lat, dtype=float))
        rho = A * np.sqrt(self.C - self.n * _q(lat)) / self.n
        th = self.n * (lon - self.lon0)
        x = rho * np.sin(th)
        y = self.rho0 - rho * np.cos(th)
        return x, y

    def project(self, geom):
        return transform(lambda x, y, z=None: self.fwd(x, y), geom)


def area_km2(geom, alb=None):
    alb = alb or Albers()
    return alb.project(geom).area / 1e6


def haversine_km(lon1, lat1, lon2, lat2, r=6371.0088):
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = p2 - p1
    dl = math.radians(lon2 - lon1)
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(h))


def vincenty_km(lon1, lat1, lon2, lat2):
    """Distancia geodesica no elipsoide GRS80 (Vincenty inverso)."""
    b = A * (1 - F)
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
        c2sm = cs - 2 * sU1 * sU2 / c2a if c2a else 0
        C = F / 16 * c2a * (4 + F * (4 - 3 * c2a))
        lp = lam
        lam = L + (1 - C) * F * sa * (sig + C * ss * (c2sm + C * cs * (-1 + 2 * c2sm * c2sm)))
        if abs(lam - lp) < 1e-12:
            break
    u2 = c2a * (A * A - b * b) / (b * b)
    Ak = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)))
    Bk = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)))
    ds = Bk * ss * (c2sm + Bk / 4 * (cs * (-1 + 2 * c2sm * c2sm) - Bk / 6 * c2sm * (-3 + 4 * ss * ss) * (-3 + 4 * c2sm * c2sm)))
    return b * Ak * (sig - ds) / 1000.0
