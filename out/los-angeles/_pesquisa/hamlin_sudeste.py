# -*- coding: utf-8 -*-
"""Correção do sudeste da folha de Hamlin (1916) com pontos de controle de 1923 (pesquisa-geo, 07/10/2026, decisão do Claude central).

O ajuste da 1ª rodada (polinômio de 2ª ordem, hamlin_ajuste/hamlin_conferir) segura bem o norte, mas no sudeste só tinha o farol, e lá
errava ~0,5 km (Terminal Island, o lado leste de Wilmington). Um polinômio global com pontos novos no sudeste piora o norte (resíduo RMS
de 23 para 84 m: a folha não é deformada por igual), por isso a correção é LOCAL:
  posição = ajuste de 2ª ordem da 1ª rodada + correção (thin-plate spline em metros da TM local)
  a correção vale 0 nos 15 pontos da 1ª rodada e o resíduo do ajuste antigo nos pontos novos, e é atenuada a 0 ao norte da linha
  py = 7000 da folha (~33,92 N), plena ao sul de py = 8000 (~33,86 N), com transição suave entre as duas.
Assim o 1850 e o contorno antes da faixa não mudam, e o norte da faixa também não.

Os pontos novos (nenhum é a divisa LA–Long Beach que serve de teste):
  plss-T4S-R13-R14-sw   canto comum de T4S R13W/R14W (BLM CadNSDI); na folha, o fim do traço da linha de range em T4S
  plss-T5S-R13-R14-nw   canto comum de T5S R13W/R14W (BLM), o "degrau" da linha de range na linha de township; na folha, o início
                        do traço "R.-14-W. | R.-13-W." em T5S. O degrau de ~460 m aparece nos dois.
  deadman-1923          Deadman's Island, centro, como a folha USGS Wilmington 1923 a desenha (pixel 1816, 4488)
  fermin-1923           a ponta de Point Fermin na costa da folha USGS Wilmington 1923 (pixel 739,5, 5624,5)
Fora do ajuste, como teste independente:
  trilho-weston-1924    o trilho oeste do Pacific Electric cruzando a divisa norte de Wilmington (Weston St), na folha USGS Compton
                        1924 (pixel 3157,5, 5621). Fica fora porque esse ponto também cai sobre a "Long Beach City Bdy" de 1924.
  a divisa LA–Long Beach de 1923 em Terminal Island e a de hoje (TIGER): nunca entram no ajuste.
"""
import os, json
import numpy as np
import hamlin_ajuste as ha
import geo_hist as gh

AQUI = os.path.dirname(os.path.abspath(__file__))
USGS = os.path.join(AQUI, '..', '_tmp', 'geo-fontes', 'usgs')
mf = ha.mf
EXCLUIR_BASE = {'alameda-slauson'}
PY_SEM, PY_PLENA = 7000.0, 8000.0


def _folhas():
    W = gh.Folha(os.path.join(USGS, 'CA_Wilmington_295811_1923_24000_geo.tif'))
    C = gh.Folha(os.path.join(USGS, 'CA_Compton_289448_1924_24000_geo.tif'))
    return W, C


def pontos_novos():
    W, C = _folhas()
    return [dict(id='plss-T4S-R13-R14-sw', px=[5170.6, 9368.4], lonlat=[-118.29201126, 33.77520509],
                 fonte='BLM PLSS (CadNSDI): canto comum de T4S R13W/R14W (vértice comum dos dois townships); na folha, o fim do traço da linha de range em T4S'),
            dict(id='plss-T5S-R13-R14-nw', px=[5244.4, 9369.0], lonlat=[-118.28706787, 33.7752135],
                 fonte='BLM PLSS (CadNSDI): canto comum de T5S R13W/R14W (o degrau da linha de range); na folha, o início do traço "R.-14-W. | R.-13-W." em T5S'),
            dict(id='deadman-1923', px=[5460.0, 10169.0], lonlat=list(W.px_para_lonlat(1816, 4488)),
                 fonte="Deadman's Island, centro, lido na folha USGS Wilmington 1923 (pixel 1816, 4488)"),
            dict(id='fermin-1923', px=[5102.5, 10537.5], lonlat=list(W.px_para_lonlat(739.5, 5624.5)),
                 fonte='a ponta de Point Fermin na costa da folha USGS Wilmington 1923 (pixel 739,5, 5624,5); o GNIS 1664805 fica a ~20 m')]


def ponto_teste_trilho():
    W, C = _folhas()
    return dict(id='trilho-weston-1924', px=[5884.2, 8950.8], lonlat=list(C.px_para_lonlat(3157.5, 5621)),
                fonte='trilho oeste do Pacific Electric x a divisa norte de Wilmington, folha USGS Compton 1924 (pixel 3157,5, 5621)')


def _tps_fit(P, V):
    n = len(P); r = np.hypot(*(P[:, None, :] - P[None, :, :]).transpose(2, 0, 1))
    K = np.where(r > 0, r * r * np.log(r + 1e-12), 0.0)
    Q = np.column_stack([np.ones(n), P]); A = np.zeros((n + 3, n + 3)); A[:n, :n] = K; A[:n, n:] = Q; A[n:, :n] = Q.T
    b = np.zeros((n + 3, V.shape[1])); b[:n] = V
    return P, np.linalg.solve(A, b)


def _tps_eval(m, X):
    P, w = m; n = len(P); r = np.hypot(*(X[:, None, :] - P[None, :, :]).transpose(2, 0, 1))
    K = np.where(r > 0, r * r * np.log(r + 1e-12), 0.0)
    return K @ w[:n] + np.column_stack([np.ones(len(X)), X]) @ w[n:]


def _peso(py):
    t = np.clip((np.asarray(py, float) - PY_SEM) / (PY_PLENA - PY_SEM), 0, 1)
    return t * t * (3 - 2 * t)


def modelo(novos=None):
    """devolve f(pixels) -> (lonlat, xy_tm) e o dicionário do modelo"""
    base = [g for g in ha.carregar() if g['id'] not in EXCLUIR_BASE]
    c0 = ha.ajustar(base, 2)
    novos = pontos_novos() if novos is None else novos
    G = base + novos
    Px = np.array([g['px'] for g in G], float)
    _, _, X, Y = ha.aplicar(c0, Px[:, 0], Px[:, 1], 2)
    Lx = np.column_stack(mf.tm(np.array([g['lonlat'][0] for g in G]), np.array([g['lonlat'][1] for g in G])))
    V = Lx - np.column_stack([X, Y]); V[:len(base)] = 0
    m = _tps_fit(Px / 1000.0, V)

    def f(pts):
        pts = np.asarray(pts, float)
        _, _, x, y = ha.aplicar(c0, pts[:, 0], pts[:, 1], 2)
        xy = np.column_stack([x, y]) + _tps_eval(m, pts / 1000.0) * _peso(pts[:, 1])[:, None]
        ll = np.array([mf.tm_inv(float(a), float(b)) for a, b in xy])
        return ll, xy
    return f, dict(base=base, novos=novos, c0=c0)


def transformador():
    f, _ = modelo()
    return lambda P: f(P)[0]
