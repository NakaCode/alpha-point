# -*- coding: utf-8 -*-
"""Camadas corrigidas das folhas antigas do USGS (pesquisa-geo, 08/10/2026, pedido do Claude central).
Desloca as camadas digitalizadas pelo deslocamento local da folha medido contra o relevo de hoje (USGS 3DEP) com
geo_folha_deslocamento.py. Correção: posição_real = posição_na_folha - deslocamento. As camadas antigas não mudam.
Grava em out/los-angeles/_tmp/geo-corrigidas/ (o .mjs ao lado grava pelo gravarGeo). Uso, de dentro de _pesquisa/:
  python geo_folhas_corrigir.py"""
import json, math, os, copy
AQUI = os.path.dirname(os.path.abspath(__file__))
GEO = os.path.join(AQUI, '..', '_media', 'geo'); OUT = os.path.join(AQUI, '..', '_tmp', 'geo-corrigidas'); os.makedirs(OUT, exist_ok=True)
# deslocamento medido (leste, norte), em metros: onde a folha desenha o lugar de hoje
DESL = {'calabasas1903': (-180, -130), 'sanpedro1896': (-200, -185)}
def corrigir(p, d):
    kx = 111320 * math.cos(math.radians(p[1])); ky = 110950
    return [round(p[0] - d[0] / kx, 6), round(p[1] - d[1] / ky, 6)]
def lin(fc, d):
    fc = copy.deepcopy(fc)
    for f in fc['features']:
        g = f['geometry']
        g['coordinates'] = corrigir(g['coordinates'], d) if g['type'] == 'Point' else [corrigir(p, d) for p in g['coordinates']]
    return fc
ler = lambda s: json.load(open(os.path.join(GEO, s + '.json'), encoding='utf-8'))
out = {}
# 1 · o píer de 1903
fc = lin(ler('long-wharf-usgs1903'), DESL['calabasas1903'])
fc['features'][0]['properties'].update(name='Long Wharf, Port Los Angeles (USGS 1903, position corrected)', correcao_m=[180, 130], incerteza_m=50)
out['long-wharf-usgs1903-corrigido'] = fc
# 2 · o molhe de 1871 (folha de 1896)
fc = lin(ler('molhe-1871-usgs1896'), DESL['sanpedro1896'])
fc['features'][0]['properties'].update(name="Jetty, Rattlesnake Island to Deadman's Island (USGS 1896, position corrected)", correcao_m=[200, 185], incerteza_m=50)
out['molhe-1871-usgs1896-corrigido'] = fc
# 3 · os pontos, cada um pela sua folha
fc = copy.deepcopy(ler('pontos-historicos-usgs'))
osm_farol = [-118.251615, 33.708553]   # way/1312710274, centróide (quebra-mar-osm)
for f in fc['features']:
    n = f['properties']['name']; p = f['geometry']['coordinates']
    if n.startswith("Deadman") or n.startswith("Rattlesnake"):
        f['geometry']['coordinates'] = corrigir(p, DESL['sanpedro1896'])
        f['properties'].update(folha='San Pedro 1896', correcao_m=[200, 185], incerteza_m=50 if n.startswith('Deadman') else 60,
                               metodo='deslocamento da folha medido no relevo (3DEP) dos morros de San Pedro')
    elif n.startswith('Port Los Angeles'):
        f['geometry']['coordinates'] = corrigir(p, DESL['calabasas1903'])
        f['properties'].update(folha='Calabasas 1903', correcao_m=[180, 130], incerteza_m=50,
                               metodo='deslocamento da folha medido no relevo (3DEP) da janela do píer')
    elif n.startswith('Breakwater lighthouse'):
        f['geometry']['coordinates'] = osm_farol
        f['properties'].update(folha='Wilmington 1923', incerteza_m=5,
                               metodo='o farol de 1913 existe hoje: posição de hoje (OSM way/1312710274), no lugar da leitura da folha (a 48 m)')
    f['properties']['posicao_na_folha'] = p
out['pontos-historicos-usgs-corrigidos'] = fc
for s, f in out.items():
    json.dump(f, open(os.path.join(OUT, s + '.json'), 'w', encoding='utf-8'), ensure_ascii=False)
# conferências
dump = json.load(open(os.path.join(AQUI, '..', '_tmp', 'geo-quebra-mar', 'dump-cal.json'), encoding='utf-8'))
segs = []
for e in dump['elements']:
    if e['tags'].get('natural') == 'coastline':
        g = [(q['lon'], q['lat']) for q in e['geometry']]; segs += list(zip(g, g[1:]))
def dcosta(p):
    kx = 111320 * math.cos(math.radians(p[1])); ky = 110950; q = (p[0] * kx, p[1] * ky); best = 1e9
    for a, b in segs:
        a = (a[0] * kx, a[1] * ky); b = (b[0] * kx, b[1] * ky); dx, dy = b[0] - a[0], b[1] - a[1]; L = dx * dx + dy * dy
        t = 0 if L == 0 else max(0, min(1, ((q[0] - a[0]) * dx + (q[1] - a[1]) * dy) / L)); best = min(best, math.dist(q, (a[0] + t * dx, a[1] + t * dy)))
    return best
r0 = ler('long-wharf-usgs1903')['features'][0]['geometry']['coordinates'][0]; r1 = out['long-wharf-usgs1903-corrigido']['features'][0]['geometry']['coordinates'][0]
print('raiz do píer: antes %.0f m da costa OSM de hoje; corrigida %.0f m' % (dcosta(r0), dcosta(r1)))
for s, f in out.items(): print(s, len(f['features']), [ft['geometry']['coordinates'] if ft['geometry']['type'] == 'Point' else ft['geometry']['coordinates'][0] for ft in f['features']])
