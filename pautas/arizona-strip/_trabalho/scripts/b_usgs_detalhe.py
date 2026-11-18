# b_usgs_detalhe.py: olha em volta do pico de 22/10/2026 nas séries IV já baixadas (leitor B)
import json
PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'
for s, ini, fim in (('09402500', '2026-10-22T18', '2026-10-24T03'), ('09402000', '2026-10-22T10', '2026-10-22T20'), ('09401260', '2026-10-22T09', '2026-10-22T15')):
    d = json.load(open('%s/usgs-iv-%s.json' % (PASTA, s)))
    t = d['value']['timeSeries'][0]
    print('==', s, t['sourceInfo']['siteName'], '| unidade', t['variable']['unit']['unitCode'], '| qualificadores:', set(q for v in t['values'][0]['value'] for q in v['qualifiers']))
    print('   método(s):', [m.get('methodDescription') for m in t['values'][0].get('method', [])])
    for v in t['values'][0]['value']:
        if ini <= v['dateTime'][:13] <= fim and (v['dateTime'][14:16] in ('00', '30') or float(v['value']) > 25000):
            print('  ', v['dateTime'][:16], v['value'], v['qualifiers'])
