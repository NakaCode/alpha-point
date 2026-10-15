"""Georreferencia da folha AMS 'Canal Zone and Vicinity' (1947, 1:100.000; LOC 83694755, via Commons) pela graticula
da propria folha (linhas de 5' achadas por scripts/graticula.py; ajuste reta a reta, rms < 1,1 px).
pixel -> lon/lat por interpolacao entre as linhas vizinhas (exato nas linhas desenhadas pela AMS); lon/lat -> pixel por Newton.
Uso como modulo: from geo_ams1947 import Folha; f = Folha(<gcp-graticula.json>, <linhas.json>)"""
import json, numpy as np
class Folha:
    def __init__(self, linhas_json, dx_m=0.0, dy_m=0.0):
        L = json.load(open(linhas_json))
        self.lat = sorted([(float(k), v) for k, v in L["lat"].items()])   # (lat, [a, b]) com y = a x + b
        self.lon = sorted([(float(k), v) for k, v in L["lon"].items()])   # (lon, [c, d]) com x = c y + d
        self.dlon = dx_m / (111320*np.cos(np.radians(9.1))); self.dlat = dy_m / 110600   # correcao de datum (m), se medida
    @staticmethod
    def _interp(val, nos):
        # nos: lista (graus, posicao) ordenada pela posicao; interp linear com extrapolacao pelos dois mais proximos
        nos = sorted(nos, key=lambda t: t[1])
        ps = [p for _, p in nos]; gs = [g for g, _ in nos]
        i = int(np.searchsorted(ps, val)); i = min(max(i, 1), len(ps)-1)
        p0, p1, g0, g1 = ps[i-1], ps[i], gs[i-1], gs[i]
        return g0 + (g1-g0) * (val-p0) / (p1-p0)
    def px2ll(self, x, y):
        lat = self._interp(y, [(g, a*x + b) for g, (a, b) in self.lat])
        lon = self._interp(x, [(g, c*y + d) for g, (c, d) in self.lon])
        return lon + self.dlon, lat + self.dlat
    def ll2px(self, lon, lat):
        x, y = 5800.0, 4100.0
        for _ in range(30):
            l0, a0 = self.px2ll(x, y)
            lx, ax = self.px2ll(x+1, y); ly, ay = self.px2ll(x, y+1)
            J = np.array([[lx-l0, ly-l0], [ax-a0, ay-a0]])
            dx, dy = np.linalg.solve(J, [lon-l0, lat-a0])
            x += dx; y += dy
            if abs(dx) < 1e-3 and abs(dy) < 1e-3: break
        return x, y
