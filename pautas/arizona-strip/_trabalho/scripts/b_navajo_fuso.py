# b_navajo_fuso.py (leitor B, 18/11/2026): em que lado do rio, na Navajo Bridge, começa a Nação Navajo (que adota o horário de verão)?
# Pega o ponto do eixo do Colorado onde o US 89A o cruza (rio-medida.json, km 32.63) e pergunta ao TIGERweb (Census 2020, camada 34,
# reservas indígenas federais) em que reserva cai cada ponto, ao longo de uma linha leste-oeste de 3 km pela ponte. Um pedido por vez.
import json, time, urllib.parse, urllib.request
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'
m = json.load(open(PASTA + '/rio-medida.json')); L = m['linha']; C = m['cum_km']
i = min(range(len(C)), key=lambda k: abs(C[k] - 32.63)); lon0, lat0 = L[i]
print('eixo do rio sob a ponte: lon %.5f lat %.5f (km %.2f)' % (lon0, lat0, C[i]))
def reserva(lon, lat):
    q = {'geometry': '%.6f,%.6f' % (lon, lat), 'geometryType': 'esriGeometryPoint', 'inSR': '4326', 'spatialRel': 'esriSpatialRelIntersects',
         'outFields': 'NAME,GEOID', 'returnGeometry': 'false', 'f': 'json'}
    req = urllib.request.Request('https://tigerweb.geo.census.gov/arcgis/rest/services/Census2020/tigerWMS_Census2020/MapServer/34/query?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
    d = json.load(urllib.request.urlopen(req, timeout=120)); time.sleep(1.0)
    return [f['attributes']['NAME'] for f in d.get('features', [])]
for dx in (-0.030, -0.015, -0.008, -0.004, -0.002, 0.0, 0.002, 0.004, 0.008, 0.015, 0.030):
    lon = lon0 + dx
    print('  lon %.5f (%+.3f°, ~%+.0f m)  ->' % (lon, dx, dx * 89000), reserva(lon, lat0) or 'fora de reserva federal')
