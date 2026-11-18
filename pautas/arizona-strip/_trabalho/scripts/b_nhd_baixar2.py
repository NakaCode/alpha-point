# b_nhd_baixar2.py: baixa do NHD (camada 6) TODOS os caminhos artificiais (fcode 55800, o eixo que o NHD põe dentro dos
# rios largos e dos reservatórios) na faixa onde o "Colorado River" nomeado tem lacuna (leitor B, 18/11/2026).
# Um pedido por vez, User-Agent do canal. Grava midia/arizona-strip/fontes/b/nhd-lacuna.json
import json, time, urllib.parse, urllib.request
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
BASE = 'https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/6/query'
SAIDA = r'C:\projetos\alpha-point\midia\arizona-strip\fontes\b\nhd-lacuna.json'
ENV = (-114.80, 35.55, -113.15, 36.30)
feats = []; off = 0
while True:
    q = {'where': 'fcode=55800', 'geometry': '%s,%s,%s,%s' % ENV, 'geometryType': 'esriGeometryEnvelope', 'inSR': '4326', 'outSR': '4326',
         'spatialRel': 'esriSpatialRelIntersects',
         'outFields': 'OBJECTID,permanent_identifier,gnis_name,lengthkm,reachcode,ftype,fcode,flowdir',
         'returnGeometry': 'true', 'resultOffset': str(off), 'resultRecordCount': '1000', 'f': 'json'}
    req = urllib.request.Request(BASE + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=240) as r:
        d = json.load(r)
    if 'error' in d:
        print('ERRO', d['error']); break
    fs = d.get('features', []); feats += fs
    print('offset', off, 'trouxe', len(fs), 'excedeu', d.get('exceededTransferLimit'))
    if not d.get('exceededTransferLimit') or not fs:
        break
    off += len(fs); time.sleep(1.5)
json.dump({'_lido_em': time.strftime('%Y-%m-%d %H:%M:%S'), '_envelope': ENV, 'features': feats}, open(SAIDA, 'w', encoding='utf-8'))
print('gravado', len(feats))
