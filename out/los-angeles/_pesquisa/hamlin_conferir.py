# -*- coding: utf-8 -*-
"""Converte os polígonos lidos na folha de Hamlin para lon/lat (hamlin_ajuste, ordem 2, sem o ponto de Alameda) e
compara cada um com: a área do próprio quadro de Hamlin (acres) e, SÓ COMO CONFERÊNCIA, o polígono do condado
(midia/los-angeles/fontes/geo/anexacoes-la-1850-1909.geojson), que não vai à tela."""
import json, os, sys, math, datetime
import numpy as np
import hamlin_ajuste as ha
AQUI = os.path.dirname(os.path.abspath(__file__))
mf = ha.mf
EXCLUIR = {'alameda-slauson'}

def transformador(ordem=2, sudeste=True):
    # desde 07/10/2026 (2ª rodada): o ajuste de 2ª ordem + a correção local do sudeste com pontos de 1923 (hamlin_sudeste.py).
    # sudeste=False devolve o ajuste da 1ª rodada, para comparar.
    if sudeste and ordem == 2:
        import hamlin_sudeste
        return hamlin_sudeste.transformador()
    G = [g for g in ha.carregar() if g['id'] not in EXCLUIR]
    c = ha.ajustar(G, ordem)
    def f(P):
        P = np.asarray(P, float)
        lon, lat, X, Y = ha.aplicar(c, P[:, 0], P[:, 1], ordem)
        return np.column_stack([lon, lat])
    return f

def area_mi2(anel_lonlat):
    a = np.asarray(anel_lonlat)
    x, y = mf.tm(a[:, 0], a[:, 1])
    return abs(0.5 * float(np.sum(x * np.roll(y, -1) - np.roll(x, -1) * y))) / mf.MI ** 2

def dist_contorno(A, B):
    """distância (m) de cada vértice densificado de A ao contorno de B (anel), na TM"""
    def dens(a, passo=20.0):
        x, y = mf.tm(a[:, 0], a[:, 1]); P = np.column_stack([x, y]); out = []
        for i in range(len(P)):
            p, q = P[i], P[(i + 1) % len(P)]; n = max(1, int(np.linalg.norm(q - p) / passo))
            for k in range(n): out.append(p + (q - p) * k / n)
        return np.array(out)
    PA = dens(np.asarray(A)); xb, yb = mf.tm(np.asarray(B)[:, 0], np.asarray(B)[:, 1]); PB = np.column_stack([xb, yb])
    S0, S1 = PB, np.roll(PB, -1, axis=0); d = S1 - S0; L2 = (d ** 2).sum(1); L2[L2 == 0] = 1e-9
    out = []
    for p in PA:
        t = np.clip(((p - S0) * d).sum(1) / L2, 0, 1); q = S0 + d * t[:, None]
        out.append(np.min(np.hypot(*(q - p).T)))
    return np.array(out)

if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    f = transformador()
    ref = json.load(open(os.path.join(AQUI, '..', '_tmp', 'hamlin-vertices-refinados.json'), encoding='utf-8'))
    for k, v in ref.items():
        ll = f([p[:2] for p in v])
        print(k, 'área %.2f mi²' % area_mi2(ll))
