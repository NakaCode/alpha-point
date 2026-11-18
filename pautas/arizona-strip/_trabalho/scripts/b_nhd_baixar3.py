# b_nhd_baixar3.py: o trecho do "Colorado River" entre a barragem Glen Canyon (lon -111.48) e o limite leste da 1ª baixada (leitor B, 18/11/2026)
import json, time, urllib.parse, urllib.request
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
BASE = 'https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/6/query'
SAIDA = r'C:\projetos\alpha-point\midia\arizona-strip\fontes\b\nhd-glen.json'
ENV = (-111.60, 36.80, -111.40, 37.02)
q = {'where': "gnis_name='Colorado River'", 'geometry': '%s,%s,%s,%s' % ENV, 'geometryType': 'esriGeometryEnvelope', 'inSR': '4326', 'outSR': '4326',
     'spatialRel': 'esriSpatialRelIntersects',
     'outFields': 'OBJECTID,permanent_identifier,gnis_name,lengthkm,reachcode,ftype,fcode,flowdir',
     'returnGeometry': 'true', 'resultRecordCount': '2000', 'f': 'json'}
req = urllib.request.Request(BASE + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
d = json.load(urllib.request.urlopen(req, timeout=240))
fs = d.get('features', [])
print(len(fs), d.get('exceededTransferLimit'))
json.dump({'_lido_em': time.strftime('%Y-%m-%d %H:%M:%S'), '_envelope': ENV, 'features': fs}, open(SAIDA, 'w', encoding='utf-8'))
xs = [p for f in fs for path in f['geometry']['paths'] for p in path]
if xs: print('lon', min(p[0] for p in xs), max(p[0] for p in xs), 'lat', min(p[1] for p in xs), max(p[1] for p in xs))
