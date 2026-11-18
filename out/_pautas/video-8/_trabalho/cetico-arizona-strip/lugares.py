# Cético arizona-strip (17/11/2026): os lugares do Censo 2020 dentro dos dois CCDs da Strip.
# Entrada: places26.json, places28.json e ccdgeom.json (TIGERweb, tigerWMS_Census2020, lidos nesta pasta).
import json, sys, os
aqui = os.path.dirname(os.path.abspath(__file__))
def carrega(n):
    with open(os.path.join(aqui, n), encoding='utf-8') as f:
        return json.load(f)

def dentro(x, y, aneis):
    # par-ímpar sobre todos os anéis (buracos inclusos)
    c = False
    for anel in aneis:
        n = len(anel)
        j = n - 1
        for i in range(n):
            xi, yi = anel[i]; xj, yj = anel[j]
            if ((yi > y) != (yj > y)) and (x < (xj - xi) * (y - yi) / (yj - yi + 1e-15) + xi):
                c = not c
            j = i
    return c

g = carrega('ccdgeom.json')
ccds = {f['attributes']['NAME']: f['geometry']['rings'] for f in g['features']}
linhas = []
for L, tipo in (('26', 'incorporado'), ('28', 'CDP')):
    for f in carrega('places%s.json' % L)['features']:
        a = f['attributes']
        x, y = float(a['CENTLON']), float(a['CENTLAT'])
        onde = [n for n, r in ccds.items() if dentro(x, y, r)]
        linhas.append((onde[0] if onde else '-', a['NAME'], tipo, a['POP100'], round(int(a['AREALAND']) / 2589988.11, 2), y, x))
linhas.sort(key=lambda t: (t[0], -t[3]))
tot = {}
for l in linhas:
    print('%-22s %-32s %-11s %6d %8.2f mi2  %.4f %.4f' % l)
    tot[l[0]] = tot.get(l[0], 0) + l[3]
print()
for k, v in tot.items():
    print('soma dos lugares em', k, '=', v)
# o ponto mais ao sul de cada CCD (para ver se passa do rio)
for n, r in ccds.items():
    ys = [p[1] for anel in r for p in anel]
    xs = [p[0] for anel in r for p in anel]
    print(n, 'lat min %.4f max %.4f, lon min %.4f max %.4f' % (min(ys), max(ys), min(xs), max(xs)))
