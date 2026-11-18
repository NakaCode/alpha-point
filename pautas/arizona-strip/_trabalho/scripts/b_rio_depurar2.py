# b_rio_depurar2.py: as pontas do "Colorado River" nomeado de cada lado da lacuna (leitor B)
import json, os, math
PASTA = r'C:\projetos\alpha-point\midia\arizona-strip\fontes\b'
feats = {}
for nome in ('nhd-colorado.json', 'nhd-lacuna.json', 'nhd-glen.json'):
    for f in json.load(open(os.path.join(PASTA, nome), encoding='utf-8'))['features']:
        feats[f['attributes']['permanent_identifier']] = f
nm = [f for f in feats.values() if f['attributes']['gnis_name'] == 'Colorado River']
print('nomeados', len(nm))
def ext(f):
    p = [q for pa in f['geometry']['paths'] for q in pa]
    return p[0], p[-1]
# ordena por longitude do ponto médio
ords = sorted(nm, key=lambda f: ext(f)[0][0])
for f in ords:
    a, b = ext(f)
    if -113.9 < a[0] < -113.2:
        print('%.5f,%.5f -> %.5f,%.5f %s %s %.3f' % (a[0], a[1], b[0], b[1], f['attributes']['ftype'], f['attributes']['fcode'], f['attributes']['lengthkm']))
