# b_nhd_lacuna.py: olha todos os nomes de trecho na lacuna entre as duas componentes "Colorado River" (leitor B)
import json, urllib.parse, urllib.request, collections
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
BASE = 'https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/6/query'
ENV = (-113.80, 35.90, -113.30, 36.25)
q = {'where': '1=1', 'geometry': '%s,%s,%s,%s' % ENV, 'geometryType': 'esriGeometryEnvelope', 'inSR': '4326', 'outSR': '4326',
     'spatialRel': 'esriSpatialRelIntersects', 'outFields': 'OBJECTID,gnis_name,lengthkm,ftype,fcode,flowdir,wbarea_permanent_identifier',
     'returnGeometry': 'false', 'resultRecordCount': '2000', 'f': 'json'}
req = urllib.request.Request(BASE + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
d = json.load(urllib.request.urlopen(req, timeout=180))
fs = d['features']
print(len(fs), d.get('exceededTransferLimit'))
c = collections.Counter((f['attributes']['gnis_name'], f['attributes']['ftype'], f['attributes']['fcode']) for f in fs)
for k, v in c.most_common(25):
    km = sum(f['attributes']['lengthkm'] or 0 for f in fs if (f['attributes']['gnis_name'], f['attributes']['ftype'], f['attributes']['fcode']) == k)
    print(k, v, round(km, 1))
