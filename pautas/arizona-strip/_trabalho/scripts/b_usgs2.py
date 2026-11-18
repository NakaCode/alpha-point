# b_usgs2.py (leitor B, 18/11/2026): vazão instantânea (USGS IV) de Bright Angel Creek (09403000) e do Colorado perto de Grand Canyon (09402500) em 28/08-02/09/2026
import json, time, urllib.parse, urllib.request
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
for site, a, b in (('09403000', '2026-08-28', '2026-09-02'), ('09403000', '2026-10-20', '2026-10-25'), ('09402500', '2026-08-28', '2026-09-02')):
    q = {'format': 'json', 'sites': site, 'parameterCd': '00060', 'startDT': a, 'endDT': b, 'siteStatus': 'all'}
    req = urllib.request.Request('https://waterservices.usgs.gov/nwis/iv/?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
    try:
        d = json.load(urllib.request.urlopen(req, timeout=180))
    except Exception as e:
        print(site, a, 'ERRO', e); time.sleep(2); continue
    ts = d['value']['timeSeries']
    if not ts: print(site, a, b, 'sem série'); time.sleep(1.5); continue
    for t in ts:
        pts = [(v['dateTime'][:16], float(v['value']), ','.join(v['qualifiers'])) for v in t['values'][0]['value'] if v['value'] not in ('', None) and float(v['value']) > -999]
        if not pts: print(site, a, b, t['sourceInfo']['siteName'], 'sem valores'); continue
        mx = max(pts, key=lambda p: p[1])
        print(site, t['sourceInfo']['siteName'], a, b, '| n', len(pts), '| primeiro', pts[0], '| MÁXIMO', mx, '| último', pts[-1])
    time.sleep(1.5)
