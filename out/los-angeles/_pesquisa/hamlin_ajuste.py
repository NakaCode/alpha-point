# -*- coding: utf-8 -*-
"""Ajuste pixel -> (lon, lat) da folha de Hamlin (1916), por polinômio de 1ª ou 2ª ordem na TM local
(a mesma de medir_faixa.py: WGS84, meridiano -118,28, origem 33,85). Imprime o resíduo de cada ponto e o
resíduo de validação cruzada (deixa um de fora)."""
import json, os, sys, math, importlib.util
import numpy as np
AQUI = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('mf', os.path.join(AQUI, '..', '..', '..', 'midia', 'los-angeles', 'fontes', 'geo', 'medir_faixa.py'))
mf = importlib.util.module_from_spec(spec); spec.loader.exec_module(mf)

def termos(px, py, ordem):
    x, y = (np.asarray(px) - 5200) / 1000.0, (np.asarray(py) - 6500) / 1000.0
    T = [np.ones_like(x), x, y]
    if ordem >= 2: T += [x * x, x * y, y * y]
    return np.column_stack(T)

def ajustar(G, ordem):
    P = np.array([g['px'] for g in G]); L = np.array([g['lonlat'] for g in G])
    X, Y = mf.tm(L[:, 0], L[:, 1])
    A = termos(P[:, 0], P[:, 1], ordem)
    cx = np.linalg.lstsq(A, X, rcond=None)[0]; cy = np.linalg.lstsq(A, Y, rcond=None)[0]
    return cx, cy

def aplicar(c, px, py, ordem):
    cx, cy = c
    A = termos(px, py, ordem)
    X, Y = A @ cx, A @ cy
    lon, lat = zip(*[mf.tm_inv(float(a), float(b)) for a, b in zip(X, Y)])
    return np.array(lon), np.array(lat), X, Y

def carregar():
    return json.load(open(os.path.join(AQUI, 'hamlin_gcp.json'), encoding='utf-8'))['pontos']

def relatorio(ordem):
    G = carregar()
    c = ajustar(G, ordem)
    P = np.array([g['px'] for g in G]); L = np.array([g['lonlat'] for g in G])
    X, Y = mf.tm(L[:, 0], L[:, 1])
    _, _, Xp, Yp = aplicar(c, P[:, 0], P[:, 1], ordem)
    res = np.hypot(Xp - X, Yp - Y)
    loo = []
    for i in range(len(G)):
        ci = ajustar(G[:i] + G[i + 1:], ordem)
        _, _, a, b = aplicar(ci, P[i:i + 1, 0], P[i:i + 1, 1], ordem)
        loo.append(float(np.hypot(a[0] - X[i], b[0] - Y[i])))
    return G, res, np.array(loo), c

if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    for ordem in (1, 2):
        G, res, loo, c = relatorio(ordem)
        print('ordem', ordem, 'RMS %.1f m, max %.1f m; validação cruzada RMS %.1f m, max %.1f m' % (math.sqrt((res**2).mean()), res.max(), math.sqrt((loo**2).mean()), loo.max()))
        for g, r, l in zip(G, res, loo):
            print('   %-24s resid %6.1f m   deixa-fora %6.1f m' % (g['id'], r, l))
        # escala
        cx, cy = c
        print('   escala ~ %.2f m/px' % math.hypot(cx[1], cy[1]) if True else '', '(por 1000 px: %.0f m)' % math.hypot(cx[1], cy[1]))
