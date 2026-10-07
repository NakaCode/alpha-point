# -*- coding: utf-8 -*-
"""Antes e depois da correção do sudeste de Hamlin (hamlin_sudeste.py): resíduos, deixa-um-fora dos pontos novos, o ponto de teste
fora do ajuste e as duas réguas independentes (a divisa LA–Long Beach de 1923 em Terminal Island e o limite de LA de hoje no TIGER, no
lado leste de Wilmington). Uso (de dentro de out/los-angeles/_pesquisa):  python hamlin_sudeste_conferir.py  (grava o resultado em
../_tmp/pesquisa-geo/hamlin-sudeste-conferencia.json)"""
import json, os, sys, math
import numpy as np
import hamlin_ajuste as ha, hamlin_conferir as hc, hamlin_sudeste as hs
sys.stdout.reconfigure(encoding='utf-8')
AQUI = os.path.dirname(os.path.abspath(__file__)); P = os.path.normpath(os.path.join(AQUI, '..'))
mf = ha.mf
ref = json.load(open(os.path.join(P, '_tmp', 'hamlin-vertices-refinados.json'), encoding='utf-8'))
TI_PX = [(5796.2, 9524.0), (5847.0, 9624.0)]   # o trecho da divisa de San Pedro (1909) que cruza Terminal Island, na folha
L23 = json.load(open(os.path.join(P, '_media', 'geo', 'divisa-la-lb-terminal-island-usgs1923.json'), encoding='utf-8'))['features'][0]['geometry']['coordinates']
la = json.load(open(os.path.join(P, '_media', 'geo', 'la-hoje-tiger.json'), encoding='utf-8'))['features'][0]['geometry']
tm = lambda ll: np.column_stack(mf.tm(np.array([p[0] for p in ll]), np.array([p[1] for p in ll])))
L23t = tm(L23)
segs = []
for poly in ([la['coordinates']] if la['type'] == 'Polygon' else la['coordinates']):
    for anel in poly:
        a = np.array(anel); m = (a[:, 1] > 33.74) & (a[:, 1] < 33.82) & (a[:, 0] > -118.26) & (a[:, 0] < -118.20)
        if m.any():
            t = tm(a); segs += [(t[i], t[i + 1]) for i in range(len(t) - 1) if m[i] or m[i + 1]]
S0 = np.array([s for s, _ in segs]); S1 = np.array([e for _, e in segs])


def dist_la(p):
    d = S1 - S0; L2 = (d ** 2).sum(1); L2[L2 == 0] = 1e-9
    t = np.clip(((p - S0) * d).sum(1) / L2, 0, 1); return float(np.min(np.hypot(*(S0 + d * t[:, None] - p).T)))


def dseg(p, s, t):
    d = t - s; L = d @ d; u = 0 if L == 0 else max(0, min(1, (p - s) @ d / L)); return float(np.linalg.norm(p - s - u * d))


def medir(nome, f):
    out = {}
    _, ti = f(TI_PX); out['terminal_island_a_1923_m'] = [round(dseg(p, L23t[0], L23t[1])) for p in ti]
    out['terminal_island_ao_tiger_m'] = [round(dist_la(p)) for p in ti]
    # o lado leste de Wilmington: os vértices 1 (esquina NE), 2 (esquina E) e 3 (o canal, em Terminal Island) da peça, densificados a ~5 px
    W = np.array([v[:2] for v in ref['p1909-wilmington']])
    dens = np.vstack([np.linspace(W[i], W[i + 1], max(2, int(np.linalg.norm(W[i + 1] - W[i]) / 5)), endpoint=False) for i in (1, 2)] + [W[3:4]])
    _, xy = f(dens); d = np.array([dist_la(p) for p in xy])
    out['wilmington_leste_ao_limite_de_LA_hoje_m'] = {'mediana': round(float(np.median(d))), 'p90': round(float(np.percentile(d, 90))), 'max': round(float(d.max())), 'n': len(d)}
    _, xyc = f(W[1:4]); out['wilmington_esquinas_ao_limite_de_LA_hoje_m'] = {'NE': round(dist_la(xyc[0])), 'E': round(dist_la(xyc[1])), 'canal': round(dist_la(xyc[2]))}
    W = np.vstack([W, W[:1]])
    wl, _ = f(W[:-1]); t = tm(np.vstack([wl, wl[:1]]))
    out['wilmington_area_mi2'] = round(abs(0.5 * float(np.sum(t[:, 0] * np.roll(t[:, 1], -1) - np.roll(t[:, 0], -1) * t[:, 1]))) / mf.MI ** 2, 2)
    pts = hs.pontos_novos() + [hs.ponto_teste_trilho()]
    _, xy = f([g['px'] for g in pts])
    out['erro_nos_pontos_de_1923_m'] = {g['id']: round(float(np.hypot(*(xy[i] - tm([g['lonlat']])[0])))) for i, g in enumerate(pts)}
    return out


antes = hc.transformador(sudeste=False)
fa = lambda P: (antes(P), tm(antes(P)))
fd, mod = hs.modelo()
R = {'antes': medir('antes', fa), 'depois': medir('depois', fd)}
# resíduos: os 15 pontos da 1ª rodada (a correção é 0 neles) e o deixa-um-fora dos pontos novos
base = mod['base']; Px = np.array([g['px'] for g in base]); Lx = tm([g['lonlat'] for g in base])
for k, f in (('antes', fa), ('depois', fd)):
    r = np.hypot(*(f(Px)[1] - Lx).T); R[k]['residuo_15_pontos_m'] = {'rms': round(float(np.sqrt((r ** 2).mean())), 1), 'max': round(float(r.max()), 1)}
novos = hs.pontos_novos(); loo = {}
for i, g in enumerate(novos):
    fi, _ = hs.modelo(novos[:i] + novos[i + 1:]); loo[g['id']] = round(float(np.hypot(*(fi([g['px']])[1][0] - tm([g['lonlat']])[0]))))
R['depois']['deixa_um_fora_pontos_novos_m'] = loo
# o quanto 1850, a faixa e o resto se movem
for pid in ['p1850-cidade-original', 'p1906-shoestring', 'p1909-wilmington']:
    v = [p[:2] for p in ref[pid]]; d = np.hypot(*(fd(v)[1] - fa(v)[1]).T)
    R.setdefault('deslocamento_m', {})[pid] = {'mediana': round(float(np.median(d)), 1), 'max': round(float(d.max()), 1)}
json.dump(R, open(os.path.join(P, '_tmp', 'pesquisa-geo', 'hamlin-sudeste-conferencia.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(json.dumps(R, ensure_ascii=False, indent=1))
