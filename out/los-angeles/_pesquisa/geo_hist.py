# -*- coding: utf-8 -*-
"""Georreferência das folhas históricas do USGS (pesquisa-geo, vídeo 2 los-angeles, 07/10/2026).

As GeoTIFF da coleção HistoricalTopo do USGS (prd-tnm.s3.amazonaws.com/StagedProducts/Maps/HistoricalTopo/GeoTIFF)
vêm georreferenciadas pelo próprio USGS: projeção policônica (GeoKey ProjCoordTrans = 22, CT_Polyconic) no elipsoide
de Clarke 1866, datum NAD27, origem no centro da folha, em metros. Este módulo lê essa georreferência das tags e
converte pixel <-> (lon, lat) WGS84:
  pixel -> metros (ModelTiepoint 33922 e ModelPixelScale 33550)
  metros -> lat/lon NAD27 (policônica de Snyder, USGS Professional Paper 1395, cap. 18, inversa por Newton sobre a direta)
  NAD27 -> WGS84 (Molodensky em ECEF, parâmetros médios NAD27 CONUS da NGA TR8350.2: dx=-8, dy=+160, dz=+176 m;
                  incerteza declarada pela NGA de +-5 m em cada eixo)
Só biblioteca padrão + numpy + PIL. Nenhum desenho: só conversão de coordenadas."""
import math
import numpy as np
from PIL import Image

Image.MAX_IMAGE_PIXELS = None

CLARKE_A, CLARKE_IF = 6378206.4, 294.9786982
WGS_A, WGS_IF = 6378137.0, 298.257223563
DX, DY, DZ = -8.0, 160.0, 176.0


def _e2(inv_f):
    f = 1 / inv_f
    return f * (2 - f)


def _M(phi, a, e2):
    e4, e6 = e2 * e2, e2 ** 3
    return a * ((1 - e2 / 4 - 3 * e4 / 64 - 5 * e6 / 256) * phi - (3 * e2 / 8 + 3 * e4 / 32 + 45 * e6 / 1024) * math.sin(2 * phi)
                + (15 * e4 / 256 + 45 * e6 / 1024) * math.sin(4 * phi) - (35 * e6 / 3072) * math.sin(6 * phi))


class Policonica:
    def __init__(self, lat0, lon0, a=CLARKE_A, inv_f=CLARKE_IF, fe=0.0, fn=0.0):
        self.a, self.e2 = a, _e2(inv_f)
        self.p0, self.l0 = math.radians(lat0), math.radians(lon0)
        self.M0 = _M(self.p0, a, self.e2)
        self.fe, self.fn = fe, fn

    def direta(self, lon, lat):
        p, l = math.radians(lat), math.radians(lon)
        if abs(p) < 1e-12:
            return self.fe + self.a * (l - self.l0), self.fn - self.M0
        N = self.a / math.sqrt(1 - self.e2 * math.sin(p) ** 2)
        E = (l - self.l0) * math.sin(p)
        x = N / math.tan(p) * math.sin(E)
        y = _M(p, self.a, self.e2) - self.M0 + N / math.tan(p) * (1 - math.cos(E))
        return x + self.fe, y + self.fn

    def inversa(self, x, y):
        lon, lat = math.degrees(self.l0), math.degrees(self.p0) + (y - self.fn) / 110900.0
        for _ in range(30):
            fx, fy = self.direta(lon, lat)
            h = 1e-6
            ax, ay = self.direta(lon + h, lat); bx, by = self.direta(lon, lat + h)
            J = np.array([[(ax - fx) / h, (bx - fx) / h], [(ay - fy) / h, (by - fy) / h]])
            d = np.linalg.solve(J, np.array([x - fx, y - fy]))
            lon += d[0]; lat += d[1]
            if abs(d[0]) < 1e-11 and abs(d[1]) < 1e-11:
                break
        return lon, lat


def _ecef(lon, lat, a, e2, h=0.0):
    p, l = math.radians(lat), math.radians(lon)
    N = a / math.sqrt(1 - e2 * math.sin(p) ** 2)
    return ((N + h) * math.cos(p) * math.cos(l), (N + h) * math.cos(p) * math.sin(l), (N * (1 - e2) + h) * math.sin(p))


def _geod(X, Y, Z, a, e2):
    l = math.atan2(Y, X); pr = math.hypot(X, Y)
    p = math.atan2(Z, pr * (1 - e2))
    for _ in range(10):
        N = a / math.sqrt(1 - e2 * math.sin(p) ** 2)
        h = pr / math.cos(p) - N
        p = math.atan2(Z, pr * (1 - e2 * N / (N + h)))
    return math.degrees(l), math.degrees(p)


def nad27_para_wgs84(lon, lat):
    X, Y, Z = _ecef(lon, lat, CLARKE_A, _e2(CLARKE_IF))
    return _geod(X + DX, Y + DY, Z + DZ, WGS_A, _e2(WGS_IF))


def wgs84_para_nad27(lon, lat):
    X, Y, Z = _ecef(lon, lat, WGS_A, _e2(WGS_IF))
    return _geod(X - DX, Y - DY, Z - DZ, CLARKE_A, _e2(CLARKE_IF))


class Folha:
    """Uma GeoTIFF histórica do USGS, com a georreferência lida das tags."""

    def __init__(self, caminho):
        self.caminho = caminho
        self.im = Image.open(caminho)
        t = self.im.tag_v2
        tie, esc = t[33922], t[33550]
        self.x0, self.y0, self.sx, self.sy = tie[3], tie[4], esc[0], esc[1]
        geok = t[34735]; dbl = t[34736]
        chaves = {geok[4 + 4 * i]: geok[4 + 4 * i: 8 + 4 * i] for i in range(geok[3])}
        val = lambda k: (dbl[chaves[k][3]] if chaves[k][1] == 34736 else chaves[k][3])
        if val(3075) != 22:
            raise ValueError('a folha não é policônica (CT %s)' % val(3075))
        if 'NAD27' not in str(t.get(34737, '')):
            raise ValueError('a folha não declara NAD27')
        # origem: 3088/3089 (ProjCenterLong/Lat) ou 3080/3081 (NatOrigin)
        lon0 = val(3088) if 3088 in chaves else val(3080)
        lat0 = val(3089) if 3089 in chaves else val(3081)
        fe = val(3082) if 3082 in chaves else 0.0
        fn = val(3083) if 3083 in chaves else 0.0
        self.proj = Policonica(lat0, lon0, fe=fe, fn=fn)
        self.origem = (lat0, lon0, fe, fn)

    def px_para_lonlat(self, col, lin):
        x, y = self.x0 + col * self.sx, self.y0 - lin * self.sy
        lon27, lat27 = self.proj.inversa(x, y)
        return nad27_para_wgs84(lon27, lat27)

    def lonlat_para_px(self, lon, lat):
        lon27, lat27 = wgs84_para_nad27(lon, lat)
        x, y = self.proj.direta(lon27, lat27)
        return (x - self.x0) / self.sx, (self.y0 - y) / self.sy

    def recorte(self, lonw, lone, lats, latn, escala=1.0):
        cs = [self.lonlat_para_px(lo, la) for lo in (lonw, lone) for la in (lats, latn)]
        c0, c1 = int(min(c[0] for c in cs)), int(max(c[0] for c in cs)) + 1
        l0, l1 = int(min(c[1] for c in cs)), int(max(c[1] for c in cs)) + 1
        c0, l0 = max(c0, 0), max(l0, 0)
        c1, l1 = min(c1, self.im.size[0]), min(l1, self.im.size[1])
        r = self.im.crop((c0, l0, c1, l1))
        if escala != 1.0:
            r = r.resize((int(r.size[0] * escala), int(r.size[1] * escala)), Image.LANCZOS)
        return r, (c0, l0)
