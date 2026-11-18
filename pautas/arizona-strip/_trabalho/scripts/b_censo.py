# b_censo.py: relê no TIGERweb (Census 2020, tigerWMS_Census2020) os números do cético (F4 a F6) e os lugares cortados pela divisa (leitor B, 18/11/2026)
# Um pedido por vez, User-Agent do canal. Não usa a API do Censo (que pede chave).
import json, time, urllib.parse, urllib.request
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
BASE = 'https://tigerweb.geo.census.gov/arcgis/rest/services/Census2020/tigerWMS_Census2020/MapServer/%d/query'
M2_MI2 = 2589988.110336

def consulta(camada, where, campos='NAME,STATE,GEOID,POP100,AREALAND,AREAWATER'):
    q = {'where': where, 'outFields': campos, 'returnGeometry': 'false', 'f': 'json', 'resultRecordCount': '200'}
    req = urllib.request.Request(BASE % camada + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
    d = json.load(urllib.request.urlopen(req, timeout=120))
    time.sleep(1.2)
    if 'error' in d: print('ERRO DA API', d['error'])
    return d

print('lido em', time.strftime('%Y-%m-%d %H:%M'))
print('--- CCDs (camada 20)')
d = consulta(20, "GEOID IN ('0400591838','0401592340')")
tot_pop = tot_land = tot_agua = 0
for f in d.get('features', []):
    a = f['attributes']
    print(a['NAME'], a['GEOID'], 'POP100', a['POP100'], 'AREALAND', a['AREALAND'], '=> %.2f mi2' % (a['AREALAND'] / M2_MI2), 'AREAWATER %.2f mi2' % (a['AREAWATER'] / M2_MI2))
    tot_pop += a['POP100']; tot_land += a['AREALAND']; tot_agua += a['AREAWATER']
print('soma: pop', tot_pop, 'terra %.2f mi2' % (tot_land / M2_MI2), 'agua %.2f mi2' % (tot_agua / M2_MI2), 'densidade %.2f /mi2' % (tot_pop / (tot_land / M2_MI2)))
print('--- estados (camada 80)')
d = consulta(80, "NAME IN ('Arizona','New Jersey','Massachusetts','Utah','Nevada')")
est = {}
for f in d.get('features', []):
    a = f['attributes']; est[a['NAME']] = a
    print(a['NAME'], 'POP100', a['POP100'], 'AREALAND %.1f mi2' % (a['AREALAND'] / M2_MI2), 'densidade %.1f' % (a['POP100'] / (a['AREALAND'] / M2_MI2)))
if 'Arizona' in est and 'New Jersey' in est:
    s = tot_land / M2_MI2; nj = est['New Jersey']['AREALAND'] / M2_MI2; az = est['Arizona']['AREALAND'] / M2_MI2
    print('Strip / Nova Jersey = %.4f (%.1f%% maior)' % (s / nj, (s / nj - 1) * 100), '| Strip / Arizona (terra) = %.2f%%' % (s / az * 100),
          '| pop Strip / pop AZ = %.3f%%' % (tot_pop / est['Arizona']['POP100'] * 100), '| NJ pop / Strip pop = %.0f' % (est['New Jersey']['POP100'] / tot_pop))
print('--- lugares incorporados (camada 26) e CDPs (camada 28)')
for camada, where in ((26, "NAME IN ('Colorado City town','Hildale city','Fredonia town','Kanab city','St. George city','Kingman city','Flagstaff city','Page city','Hurricane city')"),
                      (28, "NAME IN ('Centennial Park CDP','Cane Beds CDP','Beaver Dam CDP','Scenic CDP','Littlefield CDP','Marble Canyon CDP','Kaibab CDP','Moccasin CDP','Greenehaven CDP')")):
    d = consulta(camada, where)
    for f in d.get('features', []):
        a = f['attributes']
        print(camada, a['NAME'], a['STATE'], 'POP100', a['POP100'], 'AREALAND %.2f mi2' % (a['AREALAND'] / M2_MI2))
