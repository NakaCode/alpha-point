# b_ccd_rio.py (leitor B, 18/11/2026): o limite sul dos dois CCDs (Kaibab Plateau e North Mohave, Census 2020) segue o rio?
# Para cada vértice do eixo do Colorado (NHD) entre Lees Ferry e o ponto de 278 mi, mede a distância ao contorno dos dois CCDs.
import json, math
CET = r'C:/projetos/alpha-point/out/_pautas/video-8/_trabalho/cetico-arizona-strip'
PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'
MI = 1.609344
g = json.load(open(CET + '/ccdgeom.json', encoding='utf-8'))
alvo = {}
for f in g['features']:
    nm = f['attributes']['NAME']
    if nm in ('Kaibab Plateau CCD', 'North Mohave CCD'):
        alvo[nm] = f['geometry']['rings']
print('CCDs achados:', list(alvo))
segs = []
for nm, rings in alvo.items():
    for r in rings:
        for i in range(len(r) - 1):
            segs.append((r[i], r[i + 1]))
print('segmentos de contorno', len(segs))
m = json.load(open(PASTA + '/rio-medida.json')); L = m['linha']; C = m['cum_km']
LF = 25.62
def kmxy(p, lat0=36.0):
    return (p[0] * 111.32 * math.cos(math.radians(lat0)), p[1] * 110.57)
S = [(kmxy(a), kmxy(b)) for a, b in segs]
def dist_pt_seg(p, a, b):
    ax, ay = a; bx, by = b; px, py = p
    dx, dy = bx - ax, by - ay
    if dx == 0 and dy == 0: return math.hypot(px - ax, py - ay)
    t = max(0, min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
    return math.hypot(px - (ax + t * dx), py - (ay + t * dy))
ds = []
for i, p in enumerate(L):
    if C[i] < LF or C[i] > LF + 278 * MI: continue
    q = kmxy(p)
    # prefiltro por caixa
    d = min(dist_pt_seg(q, a, b) for a, b in S if min(a[0], b[0]) - 3 < q[0] < max(a[0], b[0]) + 3 and min(a[1], b[1]) - 3 < q[1] < max(a[1], b[1]) + 3) if True else 0
    ds.append(d)
ds.sort()
n = len(ds)
print('vértices do rio entre Lees Ferry e a mi 278:', n)
print('distância do rio ao contorno dos 2 CCDs (km): mediana %.3f, p75 %.3f, p90 %.3f, p95 %.3f, máx %.3f' % (ds[n // 2], ds[int(n * .75)], ds[int(n * .9)], ds[int(n * .95)], ds[-1]))
print('fração dos vértices a menos de 100 m do contorno: %.1f%%; a menos de 500 m: %.1f%%; a menos de 2 km: %.1f%%' % (
    100 * sum(1 for d in ds if d < .1) / n, 100 * sum(1 for d in ds if d < .5) / n, 100 * sum(1 for d in ds if d < 2) / n))
