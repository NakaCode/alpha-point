# b_nhd_baixar.py: baixa do NHD (USGS, The National Map, camada 6 "Flowline - Large Scale") os trechos "Colorado River"
# entre Lees Ferry e Hoover Dam, para medir a distância de rio (leitor B, 18/11/2026).
# Um pedido por vez, User-Agent do canal. Grava midia/arizona-strip/fontes/b/nhd-colorado.json
import json, os, time, urllib.parse, urllib.request

UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
BASE = 'https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/6/query'
SAIDA = r'C:\projetos\alpha-point\midia\arizona-strip\fontes\b\nhd-colorado.json'
# envelope: do oeste de Lees Ferry ao Hoover Dam, folgado
ENV = (-114.85, 35.55, -111.35, 37.02)
feats = []
off = 0
while True:
    q = {
        'where': "gnis_name='Colorado River'",
        'geometry': '%s,%s,%s,%s' % ENV,
        'geometryType': 'esriGeometryEnvelope',
        'inSR': '4326', 'outSR': '4326',
        'spatialRel': 'esriSpatialRelIntersects',
        'outFields': 'OBJECTID,permanent_identifier,gnis_name,lengthkm,reachcode,ftype,fcode,flowdir,mainpath,innetwork,fdate,resolution',
        'returnGeometry': 'true',
        'resultOffset': str(off), 'resultRecordCount': '1000',
        'f': 'json',
    }
    url = BASE + '?' + urllib.parse.urlencode(q)
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=180) as r:
        d = json.load(r)
    if 'error' in d:
        print('ERRO', d['error']); break
    fs = d.get('features', [])
    feats += fs
    print('offset', off, 'trouxe', len(fs), 'excedeu', d.get('exceededTransferLimit'))
    if not d.get('exceededTransferLimit') or not fs:
        break
    off += len(fs)
    time.sleep(1.5)
out = {'_url_base': BASE, '_lido_em': time.strftime('%Y-%m-%d %H:%M:%S'), '_envelope': ENV, 'features': feats}
with open(SAIDA, 'w', encoding='utf-8') as f:
    json.dump(out, f)
print('gravado', SAIDA, len(feats), 'trechos')
