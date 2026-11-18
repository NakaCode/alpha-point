# b_hpms_rota.py (leitor B, 18/11/2026): a rota Colorado City -> Kingman por MARCOS DE MILHA OFICIAIS (HPMS 2025, FHWA, dados enviados pelos DOTs de AZ, UT e NV).
# Cada rota (UF, assinatura, número) vem de hpms-<UF>-<sig>-<num>.json (baixado por b_hpms.py): seções com begin_point/end_point e geometria.
# Para cada ponto de junção, acha o marco de milha em cada rota (vértice mais próximo, com interpolação dentro da seção) e soma |dMP| por perna.
import json, math, os, sys, collections
PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'

def hav_mi(a, b):
    R = 3958.7613
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

class Rota:
    def __init__(self, uf, sig, num, route_id=None, filtro=None):
        d = json.load(open(os.path.join(PASTA, 'hpms-%s-%d-%s.json' % (uf, sig, num)), encoding='utf-8'))
        self.nome = '%s %s-%s' % (uf, {2: 'I', 3: 'US', 4: 'SR'}.get(sig, sig), num)
        self.pts = []   # (lon, lat, mp)
        for f in d['features']:
            a = f['attributes']
            if route_id and a['route_id'] != route_id: continue
            if filtro and not filtro(a): continue
            for p in f['geometry']['paths']:
                if len(p) < 2: continue
                seg = [hav_mi(p[i], p[i + 1]) for i in range(len(p) - 1)]
                L = sum(seg) or 1e-9
                acc = 0.0
                for i, q in enumerate(p):
                    mp = a['begin_point'] + (a['end_point'] - a['begin_point']) * (acc / L)
                    self.pts.append((q[0], q[1], mp))
                    if i < len(seg): acc += seg[i]
        self.n = len(self.pts)
    def mp_em(self, lon, lat):
        best = min(self.pts, key=lambda q: (q[0] - lon) ** 2 + (q[1] - lat) ** 2 if abs(q[0] - lon) < 0.2 and abs(q[1] - lat) < 0.2 else 1e9)
        return best[2], hav_mi((best[0], best[1]), (lon, lat)), (best[0], best[1])

def juncao(r1, r2):
    # par de vértices (um de cada rota) mais próximo; acelera com grade
    grade = collections.defaultdict(list)
    for q in r2.pts: grade[(round(q[0] * 50), round(q[1] * 50))].append(q)
    best = (1e9, None, None)
    for p in r1.pts:
        k = (round(p[0] * 50), round(p[1] * 50))
        for dx in (-1, 0, 1):
            for dy in (-1, 0, 1):
                for q in grade.get((k[0] + dx, k[1] + dy), ()):
                    d = hav_mi((p[0], p[1]), (q[0], q[1]))
                    if d < best[0]: best = (d, p, q)
    d, p, q = best
    return p[2], q[2], d, (p[0], p[1])

if __name__ == '__main__':
    CC = (-112.9758, 36.9906); KM = (-114.0516, 35.1908)
    ut59 = Rota('UT', 4, '59'); ut9 = Rota('UT', 4, '9'); az389 = Rota('AZ', 4, '389')
    i15ut = Rota('UT', 2, '15'); i15az = Rota('AZ', 2, '15'); i15nv = Rota('NV', 2, '15')
    print('Colorado City no AZ-389: MP %.2f (a %.2f mi do vértice)' % az389.mp_em(*CC)[:2])
    print('Colorado City no UT-59: MP %.2f (a %.2f mi do vértice)' % ut59.mp_em(*CC)[:2])
    j = juncao(az389, ut59); print('AZ-389 x UT-59 (linha de estado): MP AZ-389 %.3f, MP UT-59 %.3f, dist %.3f mi, em' % j[:3], j[3])
    j59_9 = juncao(ut59, ut9); print('UT-59 x UT-9: MP UT-59 %.3f, MP UT-9 %.3f, dist %.3f mi, em' % j59_9[:3], j59_9[3])
    j9_15 = juncao(ut9, i15ut); print('UT-9 x I-15 UT: MP UT-9 %.3f, MP I-15 %.3f, dist %.3f mi, em' % j9_15[:3], j9_15[3])

    # ---- da linha de estado de UT-59 à Strip e a Nevada: a rota "mais rápida" do cético, remontada pelos marcos
    us93nv = Rota('NV', 3, '93', route_id='10CL'); i215 = Rota('NV', 2, '215'); i11 = Rota('NV', 2, '11')
    us93az = Rota('AZ', 3, '93'); i40az = Rota('AZ', 2, '40')
    print('NV US-93 (10CL): vértices', us93nv.n, '| MP máx', max(q[2] for q in us93nv.pts))
    j_i15nv_us93 = juncao(i15nv, us93nv); print('NV I-15 x NV US-93: MP I-15 %.3f, MP US-93 %.3f, dist %.3f mi, em' % j_i15nv_us93[:3], j_i15nv_us93[3])
    j_i15nv_215 = juncao(i15nv, i215); print('NV I-15 x I-215: MP I-15 %.3f, MP I-215 %.3f, dist %.3f mi, em' % j_i15nv_215[:3], j_i15nv_215[3])
    j_215_11 = juncao(i215, i11); print('NV I-215 x I-11: MP I-215 %.3f, MP I-11 %.3f, dist %.3f mi, em' % j_215_11[:3], j_215_11[3])
    j_15_11 = juncao(i15nv, i11); print('NV I-15 x I-11: MP I-15 %.3f, MP I-11 %.3f, dist %.3f mi, em' % j_15_11[:3], j_15_11[3])
    print('NV I-11 MP 0 em', [q for q in i11.pts if q[2] < 0.02][:2])
    j_11_az = juncao(i11, us93az); print('NV I-11 x AZ US-93 (ponte/linha de estado): MP I-11 %.3f, MP AZ US-93 %.3f, dist %.3f mi, em' % j_11_az[:3], j_11_az[3])
    j_us93_i40 = juncao(us93az, i40az); print('AZ US-93 x I-40: MP US-93 %.3f, MP I-40 %.3f, dist %.3f mi, em' % j_us93_i40[:3], j_us93_i40[3])
    k = i40az.mp_em(*KM); print('Kingman (centro) na I-40: MP %.3f (a %.2f mi do vértice) em' % k[:2], k[2])
    k2 = us93az.mp_em(*KM); print('Kingman (centro) na US-93: MP %.3f (a %.2f mi do vértice) em' % k2[:2], k2[2])

    # ---- comprimento por GEOMETRIA (haversine entre vértices) de cada perna, para comparar com a diferença de marcos
    def geom(r, mpa, mpb):
        lo, hi = min(mpa, mpb), max(mpa, mpb)
        # HPMS tem uma linha por seção; ordena por marco e soma os vértices entre lo e hi
        P = sorted([q for q in r.pts if lo - 1e-9 <= q[2] <= hi + 1e-9], key=lambda q: q[2])
        return sum(hav_mi((P[i][0], P[i][1]), (P[i + 1][0], P[i + 1][1])) for i in range(len(P) - 1))
    pernas = [
        ('AZ-389 (centro de Colorado City -> linha de UT)', az389, 1.40, 0.0),
        ('UT-59 (linha de AZ -> UT-9 em Hurricane)', ut59, 0.0, 22.261),
        ('UT-9 (UT-59 -> I-15)', ut9, 9.782, 0.148),
        ('I-15 UT (saída 16 -> linha de AZ)', i15ut, 15.962, 0.0),
        ('I-15 AZ (linha de UT -> linha de NV)', i15az, 31.147, 0.0),
        ('I-15 NV (linha de AZ -> I-11/Spaghetti Bowl)', i15nv, 123.765, 42.882),
        ('I-11 NV (I-15 -> ponte da Hoover Dam)', i11, 37.258, 0.209),
        ('US-93 AZ (ponte -> Kingman)', us93az, 2.198, 72.168),
        ('I-15 NV (linha de AZ -> I-215)', i15nv, 123.765, 34.850),
        ('I-215 NV (I-15 -> I-11)', i215, 11.163, 0.0),
        ('I-11 NV (I-215 -> ponte)', i11, 22.829, 0.209),
    ]
    for nome, r, a, b in pernas:
        print('%-52s MP %.3f -> %.3f | por marcos %.3f mi | por geometria %.3f mi' % (nome, a, b, abs(a - b), geom(r, a, b)))

    # ---- rota "só pelo Arizona": Flagstaff (US-89 x I-40) até Kingman pela I-40, em marcos oficiais
    us89 = Rota('AZ', 3, '89')
    j89_40 = juncao(us89, i40az); print('AZ US-89 x I-40 (Flagstaff): MP US-89 %.3f, MP I-40 %.3f, dist %.3f mi, em' % j89_40[:3], j89_40[3])
    print('US-89 MP 0 em', [q for q in us89.pts if q[2] < 0.02][:1], '| MP máx em', max(us89.pts, key=lambda q: q[2]))
    fl = i40az.mp_em(-111.6477, 35.1993); print('Flagstaff (centro) na I-40: MP %.3f (a %.2f mi do vértice)' % fl[:2])
    print('I-40 Flagstaff(US-89) -> Kingman: %.3f mi por marcos, %.3f por geometria' % (abs(j89_40[1] - 49.102), geom(i40az, 49.102, j89_40[1])))

    # ---- TOTAL da rota Colorado City -> Kingman pelas rodovias numeradas (I-15 até o Spaghetti Bowl, I-11 até a ponte da Hoover Dam)
    legs = [('AZ-389 (centro de CC -> linha de UT)', az389, 1.40, 0.0), ('UT-59', ut59, 0.0, 22.261), ('UT-9', ut9, 9.782, 0.148), ('I-15 UT', i15ut, 15.962, 0.0),
            ('I-15 AZ', i15az, 31.147, 0.0), ('I-15 NV (linha de AZ -> I-11)', i15nv, 123.765, 42.882), ('I-11 NV (I-15 -> ponte)', i11, 37.258, 0.209), ('US-93 AZ (ponte -> Kingman)', us93az, 2.198, 72.168)]
    tot = 0; porest = collections.Counter()
    for nome, r, a, b in legs:
        g = geom(r, a, b); tot += g
        porest[{'AZ': 'Arizona', 'UT': 'Utah', 'NV': 'Nevada'}[r.nome[:2]]] += g
        print('  %-40s MP %.3f -> %.3f  %.2f mi (marcos %.2f)' % (nome, a, b, g, abs(a - b)))
    print('TOTAL pela geometria das seções do HPMS: %.2f mi; por marcos: %.2f mi' % (tot, sum(abs(a - b) for _, _, a, b in legs)))
    print('por estado:', {k: round(v, 1) for k, v in porest.items()}, '| Utah + Nevada: %.1f mi = %.0f%%' % (porest['Utah'] + porest['Nevada'], 100 * (porest['Utah'] + porest['Nevada']) / tot))
    print('mais os desvios do centro da cidade até a rodovia: Colorado City %.2f mi, Kingman %.2f mi' % (az389.mp_em(*CC)[1], us93az.mp_em(*KM)[1]))
