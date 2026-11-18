# b_usgs.py: vazão instantânea (USGS Water Services, serviço IV) nas estações do Colorado / Little Colorado / Moenkopi, de 15/10 a 18/11/2026 (leitor B)
# Um pedido por vez, User-Agent do canal. Grava usgs-iv-<site>.json em midia/arizona-strip/fontes/b/ e imprime o pico e as datas.
import json, time, urllib.parse, urllib.request, os, sys
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'
SITES = sys.argv[1:] or ['09402500', '09380000', '09402000', '09401260']
for s in SITES:
    q = {'format': 'json', 'sites': s, 'parameterCd': '00060', 'startDT': '2026-10-01', 'endDT': '2026-11-18', 'siteStatus': 'all'}
    url = 'https://waterservices.usgs.gov/nwis/iv/?' + urllib.parse.urlencode(q)
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        d = json.load(urllib.request.urlopen(req, timeout=180))
    except Exception as e:
        print(s, 'ERRO', e); time.sleep(2); continue
    json.dump(d, open(os.path.join(PASTA, 'usgs-iv-%s.json' % s), 'w'))
    ts = d.get('value', {}).get('timeSeries', [])
    if not ts:
        print(s, 'sem série'); continue
    for t in ts:
        nome = t['sourceInfo']['siteName']
        vals = t['values'][0]['value']
        pts = [(v['dateTime'], float(v['value'])) for v in vals if v['value'] not in ('', None) and float(v['value']) > -999]
        if not pts:
            print(s, nome, 'sem valores'); continue
        mx = max(pts, key=lambda p: p[1])
        print(s, nome, '| n =', len(pts), '| primeiro', pts[0], '| último', pts[-1], '| MÁXIMO', mx)
        # máximos por dia (top 6 dias)
        dias = {}
        for dt, v in pts:
            dias[dt[:10]] = max(dias.get(dt[:10], 0), v)
        top = sorted(dias.items(), key=lambda p: -p[1])[:6]
        print('   dias com maior pico:', top)
    time.sleep(1.5)
