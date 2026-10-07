# -*- coding: utf-8 -*-
"""Cruzamentos de ruas no TIGER/Line 2025 (Census, domínio público), para os pontos de controle da folha de 1916.
Uso: python tiger_cruzamentos.py "<regex rua A>" "<regex rua B>" [lon lat aproximados]"""
import sys, re, json, os, pickle
import numpy as np
import geo_shp
AQUI = os.path.dirname(os.path.abspath(__file__))
ZIP = os.path.join(AQUI, '..', '_tmp', 'geo-fontes', 'tl_2025_06037_roads.zip')
CACHE = os.path.join(AQUI, '..', '_tmp', 'geo-fontes', 'roads-cache.pkl')
BB = (-118.50, 33.68, -118.10, 34.20)

def carregar():
    if os.path.exists(CACHE):
        return pickle.load(open(CACHE, 'rb'))
    fs, _ = geo_shp.features(ZIP)
    out = []
    for f in fs:
        g = f['geometry']
        if not g: continue
        for ln in g['coordinates']:
            a = np.array(ln)
            if a[:, 0].max() < BB[0] or a[:, 0].min() > BB[2] or a[:, 1].max() < BB[1] or a[:, 1].min() > BB[3]: continue
            out.append((f['properties']['FULLNAME'], a))
    pickle.dump(out, open(CACHE, 'wb'))
    return out

def cruz(rs, ra, rb, perto=None, raio=0.02):
    A = [a for n, a in rs if re.search(ra, n or '', re.I)]
    B = [a for n, a in rs if re.search(rb, n or '', re.I)]
    pts = []
    for a in A:
        if perto and np.min(np.hypot(a[:, 0] - perto[0], a[:, 1] - perto[1])) > raio: continue
        for b in B:
            if perto and np.min(np.hypot(b[:, 0] - perto[0], b[:, 1] - perto[1])) > raio: continue
            for i in range(len(a) - 1):
                p, r = a[i], a[i + 1] - a[i]
                for j in range(len(b) - 1):
                    q, s = b[j], b[j + 1] - b[j]
                    den = r[0] * s[1] - r[1] * s[0]
                    if abs(den) < 1e-15: continue
                    t = ((q - p)[0] * s[1] - (q - p)[1] * s[0]) / den
                    u = ((q - p)[0] * r[1] - (q - p)[1] * r[0]) / den
                    if -1e-9 <= t <= 1 + 1e-9 and -1e-9 <= u <= 1 + 1e-9:
                        pts.append(tuple(p + t * r))
    # funde pontos a menos de ~40 m (pistas duplas)
    pts = sorted(set((round(x, 6), round(y, 6)) for x, y in pts))
    return pts

if __name__ == '__main__':
    rs = carregar()
    perto = (float(sys.argv[3]), float(sys.argv[4])) if len(sys.argv) > 4 else None
    for p in cruz(rs, sys.argv[1], sys.argv[2], perto):
        print('%.6f %.6f' % p)
