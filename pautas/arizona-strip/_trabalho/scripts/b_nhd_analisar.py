# b_nhd_analisar.py: olha os trechos baixados (estatística por tipo, ponta de cada trecho) antes de costurar
import json, collections, math
d = json.load(open(r'C:\projetos\alpha-point\midia\arizona-strip\fontes\b\nhd-colorado.json', encoding='utf-8'))
F = d['features']
print('trechos', len(F))
c = collections.Counter((f['attributes']['ftype'], f['attributes']['fcode'], f['attributes']['mainpath'], f['attributes']['flowdir']) for f in F)
for k, v in sorted(c.items(), key=lambda t: -t[1]):
    km = sum(f['attributes']['lengthkm'] or 0 for f in F if (f['attributes']['ftype'], f['attributes']['fcode'], f['attributes']['mainpath'], f['attributes']['flowdir']) == k)
    print(k, v, round(km, 1), 'km')
print('fdate/resolution', collections.Counter((f['attributes']['resolution'], f['attributes']['fdate']) for f in F).most_common(4))
xs = []
for f in F:
    for p in f['geometry']['paths']:
        xs += [q for q in p]
print('lon', min(x[0] for x in xs), max(x[0] for x in xs), 'lat', min(x[1] for x in xs), max(x[1] for x in xs))
# um amostra de ponta a ponta
f0 = F[0]
print(f0['attributes'], f0['geometry']['paths'][0][:2], f0['geometry']['paths'][0][-2:])
