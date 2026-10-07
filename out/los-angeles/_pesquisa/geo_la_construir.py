# -*- coding: utf-8 -*-
"""A geometria do vídeo 2 (los-angeles), sem a camada do condado (pesquisa-geo, 07/10/2026).

Monta as FeatureCollections em out/los-angeles/_tmp/geo-final/<slug>.json e o manifesto de origem
(_tmp/geo-final/_origem.json) que o geo_la_gravar.mjs passa ao gravarGeo da pré-v1. Só lê arquivos já baixados
(_tmp/geo-fontes/) e as leituras das folhas (hamlin_vertices.json, _tmp/hamlin-vertices-refinados.json).
Nada aqui pede rede. A camada do condado (midia/los-angeles/fontes/geo/) entra só como CONFERÊNCIA no relatório
(_tmp/geo-final/_conferencia.json), nunca na geometria.

Uso (de dentro de out/los-angeles/_pesquisa):  python geo_la_construir.py
"""
import json, os, sys, hashlib, datetime, io, csv, zipfile
import numpy as np
import geo_shp, geo_hist as gh
import hamlin_conferir as hc, hamlin_epocas as he

sys.stdout.reconfigure(encoding='utf-8')
AQUI = os.path.dirname(os.path.abspath(__file__))
PROJ = os.path.normpath(os.path.join(AQUI, '..'))
FONTES = os.path.join(PROJ, '_tmp', 'geo-fontes')
SAIDA = os.path.join(PROJ, '_tmp', 'geo-final'); os.makedirs(SAIDA, exist_ok=True)
MIDIA = os.path.normpath(os.path.join(PROJ, '..', '..', 'midia', 'los-angeles', 'fontes', 'geo'))
mf = hc.mf
HOJE = datetime.date.today().isoformat()

def sha(p):
    return hashlib.sha256(open(p, 'rb').read()).hexdigest()

def r6(c):
    if isinstance(c, (list, tuple)) and c and isinstance(c[0], (int, float, np.floating)):
        return [round(float(c[0]), 6), round(float(c[1]), 6)]
    return [r6(x) for x in c]

def fc(feats, props=None):
    d = {'type': 'FeatureCollection', 'features': feats}
    if props: d['properties'] = props
    return d

def feat(geom, **p):
    geom = dict(geom); geom['coordinates'] = r6(geom['coordinates'])
    return {'type': 'Feature', 'properties': p, 'geometry': geom}

def simplificar_anel(a, tol_m):
    """Douglas-Peucker na TM local (m). Mantém o anel fechado."""
    a = np.asarray(a, float)
    if tol_m <= 0 or len(a) < 8: return a
    x, y = mf.tm(a[:, 0], a[:, 1]); P = np.column_stack([x, y])
    keep = np.zeros(len(P), bool); keep[0] = keep[-1] = True
    pilha = [(0, len(P) - 1)]
    while pilha:
        i, j = pilha.pop()
        if j <= i + 1: continue
        p, q = P[i], P[j]; d = q - p; L = np.hypot(*d)
        seg = P[i + 1:j]
        dist = np.abs(np.cross(d, seg - p)) / L if L > 0 else np.hypot(*(seg - p).T)
        k = int(np.argmax(dist))
        if dist[k] > tol_m:
            keep[i + 1 + k] = True; pilha += [(i, i + 1 + k), (i + 1 + k, j)]
    return a[keep]

def dentro(pt, anel):
    x, y = pt; d = False; a = anel
    for i in range(len(a)):
        xi, yi = a[i]; xk, yk = a[i - 1]
        if (yi > y) != (yk > y) and x < (xk - xi) * (y - yi) / (yk - yi) + xi: d = not d
    return d

def dentro_geom(pt, g):
    polys = [g['coordinates']] if g['type'] == 'Polygon' else g['coordinates']
    return any(dentro(pt, p[0]) and not any(dentro(pt, h) for h in p[1:]) for p in polys)

def area_geom(g):
    polys = [g['coordinates']] if g['type'] == 'Polygon' else g['coordinates']
    return sum(hc.area_mi2(np.array(p[0])) - sum(hc.area_mi2(np.array(h)) for h in p[1:]) for p in polys)

origem, conf, saidas = {}, {}, {}

def gravar(slug, colecao, o):
    json.dump(colecao, open(os.path.join(SAIDA, slug + '.json'), 'w', encoding='utf-8'), ensure_ascii=False)
    origem[slug] = o; saidas[slug] = colecao

# ------------------------------------------------------------------------------------------------ licenças
LIC_TIGER = ('Domínio público (U.S. Census Bureau, TIGER/Line Shapefiles 2025: "Copyright protection is not available for any work of the '
             'United States Government (Title 17 U.S.C., Section 105). Thus, you are free to reproduce census materials as you see fit. We would '
             'ask, however, that you cite the Census Bureau as the source." — TGRSHP2025_TechDoc_Ch1.pdf §1.2, lido em %s); citação pedida, sem crédito na tela' % HOJE)
LIC_USGS = ('Domínio público (USGS: "USGS-authored or produced data and information are considered to be in the U.S. Public Domain" — '
            'https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits, lido em %s); sem crédito obrigatório' % HOJE)
LIC_HAMLIN = ('Domínio público: mapa publicado em 1916 pela cidade de Los Angeles (Homer Hamlin, City Engineer), antes de 1931 — o prazo de '
              'proteção nos EUA expirou; o Wikimedia Commons o marca "Public domain" (PD-old-100-expired, PD-Art), "Copyrighted: False", '
              '"AttributionRequired: false" (API do Commons lida em %s), cópia digital da Library of Congress (g4364l.ct001800). '
              'Sem crédito obrigatório; citável como "Homer Hamlin, City Engineer, 1916"' % HOJE)
LIC_GNIS = 'Domínio público (USGS GNIS, Domestic Names, Califórnia; obra federal)'
LIC_NRHP = 'Domínio público (National Park Service, National Register of Historic Places Points; obra federal)'

URL_TIGER_PLACE = 'https://www2.census.gov/geo/tiger/TIGER2025/PLACE/tl_2025_06_place.zip'
URL_TIGER_WATER = 'https://www2.census.gov/geo/tiger/TIGER2025/AREAWATER/tl_2025_06037_areawater.zip'
URL_TIGER_COAST = 'https://www2.census.gov/geo/tiger/TIGER2025/COASTLINE/tl_2025_us_coastline.zip'
URL_CB_COUNTY = 'https://www2.census.gov/geo/tiger/GENZ2025/shp/cb_2025_us_county_500k.zip'
URL_HAMLIN = 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Map_showing_territory_annexed_to_the_city_of_Los_Angeles%2C_California_LOC_2006627663.jpg'
PAG_HAMLIN = 'https://commons.wikimedia.org/wiki/File:Map_showing_territory_annexed_to_the_city_of_Los_Angeles,_California_LOC_2006627663.jpg'
S3 = 'https://prd-tnm.s3.amazonaws.com/StagedProducts/Maps/HistoricalTopo/GeoTIFF/CA/'

# ------------------------------------------------------------------------------------------------ hoje (TIGER)
ALVOS = {'0644000': ('Los Angeles', 'LOS ANGELES'), '0628168': ('Gardena', 'GARDENA'), '0680000': ('Torrance', 'TORRANCE'),
         '0611530': ('Carson', 'CARSON'), '0642468': ('Lomita', 'LOMITA'), '0643000': ('Long Beach', 'LONG BEACH')}
fs, prj = geo_shp.features(os.path.join(FONTES, 'tl_2025_06_place.zip'), lambda r: r['GEOID'] in ALVOS)
assert 'North_American_1983' in prj
P = {f['properties']['GEOID']: f for f in fs}
def feat_place(geoid, papel):
    f = P[geoid]; p = f['properties']
    return feat(f['geometry'], name=ALVOS[geoid][0], name_pt=ALVOS[geoid][0], rotulo=ALVOS[geoid][1], papel=papel, GEOID=geoid,
                NAMELSAD=p['NAMELSAD'], ALAND_m2=int(p['ALAND']), AWATER_m2=int(p['AWATER']),
                ALAND_mi2=round(int(p['ALAND']) / 2589988.11, 2), AWATER_mi2=round(int(p['AWATER']) / 2589988.11, 2), vigencia='limites de 1º de janeiro de 2025 (TIGER/Line 2025)')
la = feat_place('0644000', 'protagonista')
gravar('la-hoje-tiger', fc([la]), {'fonte': 'U.S. Census Bureau — TIGER/Line Shapefiles 2025, Places, California (tl_2025_06_place), GEOID 0644000 (Los Angeles city)',
       'licenca': LIC_TIGER, 'url': URL_TIGER_PLACE, 'sha256_fonte': sha(os.path.join(FONTES, 'tl_2025_06_place.zip')),
       'datum': 'NAD83 (EPSG:4269), graus, sem reprojeção (NAD83 x WGS84 ~1-2 m em LA)', 'simplificacao': 'nenhuma (vértices do TIGER)',
       'incerteza': 'a do TIGER (limite estatístico, "does not constitute a determination of jurisdictional authority"); a faixa fina medida aqui bate com a do condado: 8,66 mi, 33,7976 a 33,9232 N, largura inscrita mediana 0,54 mi',
       'cena': None})
viz = [feat_place(g, 'vizinho') for g in ('0628168', '0680000', '0611530', '0642468', '0643000')]
gravar('vizinhos-faixa-tiger', fc(viz), {'fonte': 'U.S. Census Bureau — TIGER/Line Shapefiles 2025, Places, California (tl_2025_06_place): Gardena 0628168, Torrance 0680000, Carson 0611530, Lomita 0642468, Long Beach 0643000',
       'licenca': LIC_TIGER, 'url': URL_TIGER_PLACE, 'sha256_fonte': sha(os.path.join(FONTES, 'tl_2025_06_place.zip')),
       'datum': 'NAD83 (EPSG:4269)', 'simplificacao': 'nenhuma', 'incerteza': 'a do TIGER; as terras do condado sem cidade (os "pockets") são o que fica fora destes 5 e de LA', 'cena': None})

cfs, _ = geo_shp.features(os.path.join(FONTES, 'cb_2025_us_county_500k.zip'), lambda r: r['GEOID'] == '06037')
cty = cfs[0]
gravar('condado-la-cb500k', fc([feat(cty['geometry'], name='Los Angeles County', name_pt='Los Angeles County', rotulo='LOS ANGELES COUNTY', papel='contexto', GEOID='06037')]),
       {'fonte': 'U.S. Census Bureau — Cartographic Boundary Files 2025, counties 1:500,000 (cb_2025_us_county_500k), GEOID 06037', 'licenca': LIC_TIGER, 'url': URL_CB_COUNTY,
        'sha256_fonte': sha(os.path.join(FONTES, 'cb_2025_us_county_500k.zip')), 'datum': 'NAD83 (EPSG:4269)', 'simplificacao': 'a do próprio arquivo (1:500.000, recortado na costa)',
        'incerteza': 'generalizado a 1:500.000: serve de contexto em câmera larga, não para o porto de perto', 'cena': None})

# costa de hoje (TIGER coastline), recortada
BB_COSTA = (-118.62, 33.68, -118.05, 34.12)
cos, _ = geo_shp.features(os.path.join(FONTES, 'tl_2025_us_coastline.zip'))
linhas = []
for f in cos:
    for ln in f['geometry']['coordinates']:
        a = np.array(ln); m = (a[:, 0] >= BB_COSTA[0]) & (a[:, 0] <= BB_COSTA[2]) & (a[:, 1] >= BB_COSTA[1]) & (a[:, 1] <= BB_COSTA[3])
        if not m.any(): continue
        # trechos contínuos dentro da caixa
        idx = np.where(m)[0]; quebras = np.where(np.diff(idx) > 1)[0]
        for parte in np.split(idx, quebras + 1):
            if len(parte) >= 2: linhas.append(a[parte].tolist())
gravar('costa-hoje-tiger', fc([feat({'type': 'MultiLineString', 'coordinates': linhas}, name='Coastline (2025)', name_pt='Coastline', papel='costa')]),
       {'fonte': 'U.S. Census Bureau — TIGER/Line Shapefiles 2025, Coastline (tl_2025_us_coastline), recortada em %s' % (BB_COSTA,), 'licenca': LIC_TIGER, 'url': URL_TIGER_COAST,
        'sha256_fonte': sha(os.path.join(FONTES, 'tl_2025_us_coastline.zip')), 'datum': 'NAD83 (EPSG:4269)', 'simplificacao': 'nenhuma',
        'incerteza': 'linha de costa do TIGER (inclui o contorno dos molhes e do aterro do porto como estão hoje)', 'cena': None})

# água do porto hoje (TIGER areawater)
BB_PORTO = (-118.31, 33.70, -118.15, 33.80)
aw, _ = geo_shp.features(os.path.join(FONTES, 'tl_2025_06037_areawater.zip'))
feats_agua = []
for f in aw:
    g = f['geometry']
    if not g: continue
    A = np.array([p for poly in g['coordinates'] for p in poly[0]])
    if A[:, 0].max() < BB_PORTO[0] or A[:, 0].min() > BB_PORTO[2] or A[:, 1].max() < BB_PORTO[1] or A[:, 1].min() > BB_PORTO[3]: continue
    if int(f['properties']['AWATER']) < 20000: continue
    if f['properties']['MTFCC'] in ('H3010', 'H2053'): continue   # rios (o LA River sobe até o vale) e o oceano aberto até 3 mn ficam fora
    feats_agua.append(feat(g, name=f['properties']['FULLNAME'] or '', MTFCC=f['properties']['MTFCC'], HYDROID=f['properties']['HYDROID'], AWATER_m2=int(f['properties']['AWATER']), papel='agua'))
gravar('agua-porto-hoje-tiger', fc(feats_agua), {'fonte': 'U.S. Census Bureau — TIGER/Line Shapefiles 2025, Area Hydrography, Los Angeles County (tl_2025_06037_areawater), corpos com mais de 20.000 m² que tocam %s, sem rios (H3010) e sem o oceano aberto (H2053)' % (BB_PORTO,),
       'licenca': LIC_TIGER, 'url': URL_TIGER_WATER, 'sha256_fonte': sha(os.path.join(FONTES, 'tl_2025_06037_areawater.zip')), 'datum': 'NAD83 (EPSG:4269)', 'simplificacao': 'nenhuma',
       'incerteza': 'a água do porto como o TIGER a desenha hoje (baía de San Pedro dentro dos quebra-mares, canais, bacias, lagoas); o mar aberto e os rios ficaram fora', 'cena': None})

# ------------------------------------------------------------------------------------------------ Hamlin 1916
T = hc.transformador()
gcp = [g for g in hc.ha.carregar() if g['id'] not in hc.EXCLUIR]
_c = hc.ha.ajustar(gcp, 2); _P = np.array([g['px'] for g in gcp]); _L = np.array([g['lonlat'] for g in gcp]); _X, _Y = mf.tm(_L[:, 0], _L[:, 1])
_, _, _a, _b = hc.ha.aplicar(_c, _P[:, 0], _P[:, 1], 2); res2 = np.hypot(_a - _X, _b - _Y)
loo2 = []
for _i in range(len(gcp)):
    _ci = hc.ha.ajustar(gcp[:_i] + gcp[_i + 1:], 2); _, _, _x, _y = hc.ha.aplicar(_ci, _P[_i:_i + 1, 0], _P[_i:_i + 1, 1], 2)
    loo2.append(float(np.hypot(_x[0] - _X[_i], _y[0] - _Y[_i])))
loo2 = np.array(loo2)
_sud = json.load(open(os.path.join(PROJ, '_tmp', 'pesquisa-geo', 'hamlin-sudeste-conferencia.json'), encoding='utf-8'))
_d = _sud['depois']
INC_HAMLIN = ('georreferência da folha em duas partes. (1) Polinômio de 2ª ordem sobre %d pontos de controle (8 cruzamentos de rua do TIGER 2025, 6 cantos de township/seção do PLSS do BLM e o farol do quebra-mar lido na folha USGS de 1923): '
              'resíduo RMS %.0f m (máx. %.0f m); validação cruzada (deixa um de fora) RMS %.0f m, máx. %.0f m (o farol). (2) Desde 07/10/2026 (2ª rodada), correção local do sudeste (hamlin_sudeste.py): thin-plate spline sobre 4 pontos novos '
              '(2 cantos do PLSS no degrau de T4S/T5S, Deadman’s Island e a ponta de Point Fermin, os dois últimos na folha USGS Wilmington 1923), nula nos 15 pontos de antes e atenuada a zero ao norte de ~33,92 N; o norte não muda. '
              'Deixa-um-fora dos pontos novos: %s m. Testes fora do ajuste: o trilho x divisa norte de Wilmington (USGS Compton 1924) cai a %d m; a divisa de San Pedro em Terminal Island fica a %s m da divisa LA-Long Beach de 1923; o lado leste de Wilmington fica a %d m (mediana; máx. %d m) do limite de LA de hoje (TIGER). '
              'A divisa é o traço impresso, lido lado a lado (hamlin_tracar.py); o traço tem uns 25 m de largura no terreno (escala ~1:85.000). '
              'Leitura: ±50 m ao norte de 33,86 N (a faixa de 1906 fica a 18–46 m do TIGER de hoje); ao sul de 33,86 N, ±150 a ±200 m (a precisão da correção do sudeste: deixa-um-fora de 57 a 363 m, testes independentes de 1 a 169 m). '
              'Antes da correção, o sudeste errava ~0,5 km (Wilmington leste e Terminal Island): versões antigas em _tmp/pesquisa-geo/*-antes-gcp1923.json.') % (
              len(gcp), float(np.sqrt((res2 ** 2).mean())), float(res2.max()), float(np.sqrt((loo2 ** 2).mean())), float(loo2.max()),
              ', '.join('%s %d' % kv for kv in _d['deixa_um_fora_pontos_novos_m'].items()), _d['erro_nos_pontos_de_1923_m']['trilho-weston-1924'],
              ' e '.join(str(x) for x in _d['terminal_island_a_1923_m']), _d['wilmington_leste_ao_limite_de_LA_hoje_m']['mediana'], _d['wilmington_leste_ao_limite_de_LA_hoje_m']['max'])
ref = json.load(open(os.path.join(PROJ, '_tmp', 'hamlin-vertices-refinados.json'), encoding='utf-8'))
O_HAMLIN = {'licenca': LIC_HAMLIN, 'url': URL_HAMLIN, 'pagina': PAG_HAMLIN, 'sha256_fonte': sha(os.path.join(FONTES, 'hamlin1916', 'hamlin-1916-LOC-2006627663.jpg')),
            'datum': 'WGS84 pelo ajuste (os pontos de controle são NAD83/WGS84)', 'simplificacao': 'contorno da união no raster da folha, Douglas-Peucker 0,75 px (~5 m)', 'incerteza': INC_HAMLIN}
ACRES = {'1850': 17924, '1899': 17924 + 766 + 904 + 6517 + 440 + 1134, '1906': 17924 + 766 + 904 + 6517 + 440 + 1134 + 11931, '1909-sem-san-pedro': 17924 + 766 + 904 + 6517 + 440 + 1134 + 11931 + 6358}
ROT = {'1850': ('Los Angeles, 1850', 'LOS ANGELES 1850', 'incorporada em 4 de abril de 1850 (Original City, "4 sq. Spanish leagues")'),
       '1899': ('Los Angeles, 1899–1906', 'LOS ANGELES 1906', 'o contorno de 12/06/1899 (Garvanza e University) até 26/12/1906, antes da faixa'),
       '1906': ('Los Angeles, 1906', 'LOS ANGELES 1906', 'com a Shoestring Addition, em vigor em 26/12/1906; vale até 28/08/1909'),
       '1909-sem-san-pedro': ('Los Angeles, 1909 (sem San Pedro)', 'LOS ANGELES 1909', 'o contorno de 28/08/1909 com Wilmington; San Pedro vai à parte, como divisa aberta (la-1909-hamlin)')}
for ep, slug in (('1850', 'la-1850-hamlin'), ('1899', 'la-1899-antes-da-faixa-hamlin'), ('1906', 'la-1906-hamlin')):
    g = json.load(open(os.path.join(PROJ, '_tmp', 'geo-hist', 'la-%s-hamlin.json' % ep)))['features'][0]['geometry']
    area = area_geom(g)
    f = feat(g, name=ROT[ep][0], name_pt=ROT[ep][0], rotulo=ROT[ep][1], papel='protagonista', epoca=ep, vigencia=ROT[ep][2],
             area_mi2_medida=round(area, 2), area_mi2_hamlin=round(ACRES[ep] / 640, 2), acres_hamlin=ACRES[ep], pecas=he.EPOCAS[ep])
    gravar(slug, fc([f]), dict(O_HAMLIN, fonte='Homer Hamlin, City Engineer — "Map showing territory annexed to the City of Los Angeles, California" (1916), cópia digital da Library of Congress (2006627663) no Wikimedia Commons; contorno de %s digitalizado pela pesquisa-geo' % ep, cena=None))

# faixa sozinha, Wilmington, e San Pedro como divisa aberta
ll = T([v[:2] for v in ref['p1906-shoestring']]); ll = np.vstack([ll, ll[:1]])
gravar('faixa-1906-hamlin', fc([feat({'type': 'Polygon', 'coordinates': [ll.tolist()]}, name='Shoestring Addition (1906)', name_pt='Shoestring Addition', rotulo='THE STRIP', papel='protagonista',
       vigencia='Ordinance 13447 (N.S.), em vigor em 26/12/1906', area_mi2_medida=round(hc.area_mi2(ll), 2), area_mi2_hamlin=round(11931 / 640, 2), acres_hamlin=11931)]),
       dict(O_HAMLIN, fonte='Homer Hamlin (1916), a peça "Shoestring Addition, Ord. 13447 (N.S.), Dec. 26, 1906, 11931 Acres", digitalizada pela pesquisa-geo', simplificacao='vértices lidos lado a lado, sem simplificação', cena=None))
llw = T([v[:2] for v in ref['p1909-wilmington']]); llw = np.vstack([llw, llw[:1]])
wil = feat({'type': 'Polygon', 'coordinates': [llw.tolist()]}, name='City of Wilmington (consolidated 1909)', name_pt='Wilmington', rotulo='WILMINGTON', papel='consolidacao',
           vigencia='Ord. 18374 (N.S.), 28/08/1909', area_mi2_medida=round(hc.area_mi2(llw), 2), area_mi2_hamlin=round(6358 / 640, 2), acres_hamlin=6358)
SP = {'oeste_e_norte_com_a_faixa': [(5190, 9688), (5224, 9739), (5224, 9817), (5200, 9817), (5200, 9831), (5177, 9831), (5177, 9860), (5112, 9859), (5110, 10102), (5049, 10102), (5049, 10265), (5163, 10228), (5165, 10506)],
      'com_wilmington': [(5201.9, 9694.8), (5332.0, 9712.0), (5437.4, 9732.7), (5456.0, 9700.0), (5496.2, 9611.2), (5561.3, 9546.3), (5709.0, 9406.0)],
      'leste_terminal_island': [(5709.0, 9406.0), (5796.2, 9524.0), (5847.0, 9624.0), (5744.0, 9667.0), (5744.0, 9858.0)]}
sp_lin = {'type': 'MultiLineString', 'coordinates': [T(v).tolist() for v in SP.values()]}
sp = feat(sp_lin, name='City of San Pedro (consolidated 1909) — boundary as drawn', name_pt='San Pedro', rotulo='SAN PEDRO', papel='consolidacao_divisa_aberta',
          vigencia='Ord. 18414 (N.S.), 28/08/1909, 2948 acres (4,61 mi²) pelo quadro da folha', trechos=list(SP.keys()),
          nota='A folha de 1916 desenha a divisa de San Pedro por terra e até a água, mas não fecha o lado do mar: o polígono não se fecha sem inventar a linha. A linha oeste termina na costa de Point Fermin; a leste termina em 33,72 N, dentro da água, ao sul de Terminal Island.')
gravar('wilmington-1909-hamlin', fc([wil]), dict(O_HAMLIN, fonte='Homer Hamlin (1916), a peça "City of Wilmington, Ord. 18374 (N.S.), Aug. 28, 1909, 6358 Ac.", digitalizada pela pesquisa-geo', simplificacao='vértices lidos lado a lado', cena=None))
gravar('san-pedro-1909-divisa-hamlin', fc([sp]), dict(O_HAMLIN, fonte='Homer Hamlin (1916), a divisa da "City of San Pedro, Ord. 18414 (N.S.), Aug. 28, 1909, 2948 Ac.", digitalizada pela pesquisa-geo (linha aberta)', simplificacao='vértices lidos a olho em recorte ampliado (_tmp/hamlin-zoom/sp-*.png)', cena=None))
g09 = json.load(open(os.path.join(PROJ, '_tmp', 'geo-hist', 'la-1909-sem-san-pedro-hamlin.json')))['features'][0]['geometry']
f09 = feat(g09, name=ROT['1909-sem-san-pedro'][0], name_pt='Los Angeles, 1909', rotulo='LOS ANGELES 1909', papel='protagonista', epoca='1909', vigencia=ROT['1909-sem-san-pedro'][2],
           area_mi2_medida=round(area_geom(g09), 2), area_mi2_hamlin_sem_san_pedro=round(ACRES['1909-sem-san-pedro'] / 640, 2), area_mi2_hamlin_com_san_pedro=round((ACRES['1909-sem-san-pedro'] + 2948) / 640, 2))
gravar('la-1909-hamlin', fc([f09, dict(sp, properties=dict(sp['properties'], papel='consolidacao_divisa_aberta'))]),
       dict(O_HAMLIN, fonte='Homer Hamlin (1916): o contorno de 1906 unido a Wilmington (1909), mais a divisa aberta de San Pedro (1909); digitalizado pela pesquisa-geo', cena=None))

# ------------------------------------------------------------------------------------------------ folhas USGS (água e obras)
def folha(nome): return gh.Folha(os.path.join(FONTES, 'usgs', nome))
F96 = folha('CA_San_Pedro_298928_1896_62500_geo.tif'); F23 = folha('CA_Wilmington_295811_1923_24000_geo.tif'); F03 = folha('CA_Calabasas_465394_1903_62500_geo.tif')
conv = lambda F, pts: [list(F.px_para_lonlat(x, y)) for x, y in pts]
INC_USGS = lambda esc, m: 'georreferência do próprio USGS (policônica, NAD27 -> WGS84 por Molodensky, ±5 m); os cantos da folha caem no pixel previsto (conferido na Compton 1924); leitura do traço a olho em recorte com grade (±2 px = ±%d m); a folha é 1:%s' % (m, esc)
molhe = conv(F96, [(4190, 687), (4223, 720), (4247, 760), (4267, 800), (4280, 827), (4290, 847)])
gravar('molhe-1871-usgs1896', fc([feat({'type': 'LineString', 'coordinates': molhe}, name='Jetty, Rattlesnake Island to Deadman\'s Island (as surveyed in the 1890s)', name_pt='Jetty', rotulo='JETTY', papel='obra', ano_da_folha=1896)]),
       {'fonte': 'USGS 1:62.500, folha "San Pedro, Calif." de 1896 (HistoricalTopo, item 298928): o molhe entre a ponta sul de Rattlesnake Island e Deadman Island, digitalizado pela pesquisa-geo', 'licenca': LIC_USGS,
        'url': S3 + 'CA_San%20Pedro_298928_1896_62500_geo.tif', 'sha256_fonte': sha(os.path.join(FONTES, 'usgs', 'CA_San_Pedro_298928_1896_62500_geo.tif')), 'datum': 'NAD27 da folha convertido a WGS84',
        'simplificacao': '6 vértices lidos no traço', 'incerteza': INC_USGS('62.500', 11) + '. É o molhe como a folha de 1896 o mostra (levantamento dos anos 1890), não o projeto de 1871.', 'cena': None})
qm = conv(F23, [(1123, 5323), (1295, 5350), (1423, 5405), (1586, 5495), (1750, 5614), (1859, 5665), (1968, 5677), (2077, 5641), (2332, 5541), (2641, 5423)])
gravar('quebra-mar-usgs1923', fc([feat({'type': 'LineString', 'coordinates': qm}, name='San Pedro Breakwater (completed 1912; USGS 1923)', name_pt='Breakwater', rotulo='BREAKWATER', papel='obra', ano_da_folha=1923)]),
       {'fonte': 'USGS 1:24.000, folha "Wilmington, Calif." de 1923 (HistoricalTopo, item 295811, "Surveyed in 1923"): o quebra-mar de San Pedro, da costa ao farol, digitalizado pela pesquisa-geo', 'licenca': LIC_USGS,
        'url': S3 + 'CA_Wilmington_295811_1923_24000_geo.tif', 'sha256_fonte': sha(os.path.join(FONTES, 'usgs', 'CA_Wilmington_295811_1923_24000_geo.tif')), 'datum': 'NAD27 da folha convertido a WGS84',
        'simplificacao': '10 vértices lidos no eixo do traço duplo', 'incerteza': INC_USGS('24.000', 4) + '. O farol da folha cai a ~50 m do Angels Gate de hoje.', 'cena': None})
lw = conv(F03, [(4131.7, 4965), (4110, 5001.7), (4080, 5033), (4030, 5073), (3967, 5112)])
gravar('long-wharf-usgs1903', fc([feat({'type': 'LineString', 'coordinates': lw}, name='Long Wharf, Port Los Angeles (USGS 1903)', name_pt='Long Wharf', rotulo='LONG WHARF', papel='obra', ano_da_folha=1903)]),
       {'fonte': 'USGS 1:62.500, folha "Calabasas, Calif." de 1903 (HistoricalTopo, item 465394): o píer de "Port Los Angeles", da costa à cabeça, digitalizado pela pesquisa-geo', 'licenca': LIC_USGS,
        'url': S3 + 'CA_Calabasas_465394_1903_62500_geo.tif', 'sha256_fonte': sha(os.path.join(FONTES, 'usgs', 'CA_Calabasas_465394_1903_62500_geo.tif')), 'datum': 'NAD27 da folha convertido a WGS84',
        'simplificacao': '5 vértices lidos no traço', 'incerteza': INC_USGS('62.500', 11), 'cena': None})

# ------------------------------------------------------------------------------------------------ pontos
z = zipfile.ZipFile(os.path.join(MIDIA, 'gnis-DomesticNames_CA_Text.zip'))
gn = {r['feature_id']: r for r in csv.DictReader(io.TextIOWrapper(z.open('Text/DomesticNames_CA.txt'), encoding='utf-8-sig'), delimiter='|') if r['feature_id'] in ('1661392', '1661697', '1652747', '1652792')}
nr = json.load(open(os.path.join(MIDIA, 'nrhp-plaza-pontos.geojson'), encoding='utf-8'))
plaza = next(f for f in nr['features'] if '72000231' in json.dumps(f['properties']))
pts = [feat(plaza['geometry'], name='Los Angeles Plaza', name_pt='The Plaza', rotulo='Plaza', papel='ponto', fonte_ponto='NRHP 72000231 (Los Angeles Plaza Historic District), NPS; "Digitized", precisão "Unknown"')]
for fid, rot in (('1661392', 'San Pedro'), ('1661697', 'Wilmington'), ('1652747', 'Long Beach'), ('1652792', 'Santa Monica')):
    r = gn[fid]
    pts.append(feat({'type': 'Point', 'coordinates': [float(r['prim_long_dec']), float(r['prim_lat_dec'])]}, name=r['feature_name'], name_pt=rot, rotulo=rot, papel='ponto',
                    fonte_ponto='USGS GNIS %s (%s, mapa %s)' % (fid, r['feature_class'], r['map_name'])))
gravar('lugares-gnis-nrhp', fc(pts), {'fonte': 'USGS GNIS Domestic Names (CA, arquivo de 29/09/2026: San Pedro 1661392, Wilmington 1661697, Long Beach 1652747, Santa Monica 1652792) e NPS NRHP Points (Plaza, 72000231)',
       'licenca': LIC_GNIS + '; ' + LIC_NRHP, 'url': 'https://prd-tnm.s3.amazonaws.com/StagedProducts/GeographicNames/DomesticNames/DomesticNames_CA_Text.zip ; https://mapservices.nps.gov/arcgis/rest/services/cultural_resources/nrhp_locations/MapServer/0',
       'sha256_fonte': sha(os.path.join(MIDIA, 'gnis-DomesticNames_CA_Text.zip')), 'datum': 'NAD83 (GNIS) / WGS84 (NPS)', 'simplificacao': 'nenhuma',
       'incerteza': 'ponto do lugar povoado do GNIS (centro nominal, não divisa); a Plaza do NRHP é ponto digitalizado de precisão não declarada (fica a ~130 m do ponto do condado e a ~170 m do 78000689; dossiê, "A geometria")', 'cena': None})
hist = [feat({'type': 'Point', 'coordinates': list(F96.px_para_lonlat(4293, 850))}, name="Deadman's Island (removed 1928–1930)", name_pt="Deadman's Island", rotulo="Deadman's Island", papel='ponto_historico', fonte_ponto='USGS San Pedro 1896, o ilhéu na ponta do molhe'),
        feat({'type': 'Point', 'coordinates': list(F96.px_para_lonlat(4317, 403))}, name='Rattlesnake Island (Terminal Island today)', name_pt='Rattlesnake Island', rotulo='Rattlesnake Island', papel='ponto_historico', fonte_ponto='USGS San Pedro 1896, meio da restinga de areia rotulada "Rattlesnake Id."'),
        feat({'type': 'Point', 'coordinates': list(F03.px_para_lonlat(3967, 5112))}, name='Port Los Angeles (Long Wharf head)', name_pt='Port Los Angeles', rotulo='Port Los Angeles', papel='ponto_historico', fonte_ponto='USGS Calabasas 1903, a cabeça do píer rotulado "Port Los Angeles"'),
        feat({'type': 'Point', 'coordinates': list(F23.px_para_lonlat(2661.7, 5418.7))}, name='Breakwater lighthouse (USGS 1923)', name_pt='Lighthouse', rotulo='Lighthouse', papel='ponto_historico', fonte_ponto='USGS Wilmington 1923, o farol do fim do quebra-mar')]
gravar('pontos-historicos-usgs', fc(hist), {'fonte': "USGS HistoricalTopo: San Pedro 1896 (1:62.500; Deadman's Island, Rattlesnake Island), Calabasas 1903 (1:62.500; Port Los Angeles), Wilmington 1923 (1:24.000; farol do quebra-mar); pontos digitalizados pela pesquisa-geo",
       'licenca': LIC_USGS, 'url': S3 + 'CA_San%20Pedro_298928_1896_62500_geo.tif ; ' + S3 + 'CA_Calabasas_465394_1903_62500_geo.tif ; ' + S3 + 'CA_Wilmington_295811_1923_24000_geo.tif',
       'sha256_fonte': ';'.join(sha(os.path.join(FONTES, 'usgs', n)) for n in ('CA_San_Pedro_298928_1896_62500_geo.tif', 'CA_Calabasas_465394_1903_62500_geo.tif', 'CA_Wilmington_295811_1923_24000_geo.tif')),
       'datum': 'NAD27 das folhas convertido a WGS84', 'simplificacao': 'nenhuma', 'incerteza': 'ponto lido a olho (±2 px): ±11 m nas folhas 1:62.500, ±4 m na 1:24.000, mais a georreferência do USGS', 'cena': None})

# ------------------------------------------------------------------------------------------------ conferências
def ponto(slug, rot):
    return next(f for f in saidas[slug]['features'] if f['properties'].get('rotulo') == rot)['geometry']['coordinates']
g = lambda s: saidas[s]['features'][0]['geometry']
conf['dentro_fora'] = {
    'Plaza em LA 1850': dentro_geom(ponto('lugares-gnis-nrhp', 'Plaza'), g('la-1850-hamlin')),
    'Plaza em LA hoje': dentro_geom(ponto('lugares-gnis-nrhp', 'Plaza'), g('la-hoje-tiger')),
    'Wilmington (GNIS) em Wilmington 1909': dentro_geom(ponto('lugares-gnis-nrhp', 'Wilmington'), g('wilmington-1909-hamlin')),
    'Wilmington (GNIS) fora de LA 1906': not dentro_geom(ponto('lugares-gnis-nrhp', 'Wilmington'), g('la-1906-hamlin')),
    'Wilmington (GNIS) em LA hoje': dentro_geom(ponto('lugares-gnis-nrhp', 'Wilmington'), g('la-hoje-tiger')),
    'San Pedro (GNIS) em LA hoje': dentro_geom(ponto('lugares-gnis-nrhp', 'San Pedro'), g('la-hoje-tiger')),
    'Long Beach (GNIS) em Long Beach (TIGER)': dentro_geom(ponto('lugares-gnis-nrhp', 'Long Beach'), saidas['vizinhos-faixa-tiger']['features'][4]['geometry']),
    'Santa Monica (GNIS) fora de LA hoje': not dentro_geom(ponto('lugares-gnis-nrhp', 'Santa Monica'), g('la-hoje-tiger')),
}
# medidas da faixa nas duas épocas e áreas
r06 = mf.mede('hamlin1906', mf.aneis(g('la-1906-hamlin')))
rhj = mf.mede('tiger', mf.aneis(g('la-hoje-tiger')))
L = lambda pts: sum(float(np.hypot(*np.diff(np.column_stack(mf.tm(np.array(pts)[:, 0], np.array(pts)[:, 1])), axis=0).T).sum()) for _ in [0]) / mf.MI
conf['faixa'] = {
    '1906_hamlin': {k: r06[k] for k in ('lat_sul', 'lat_norte', 'extensao_norte_sul_mi', 'como_acaba_ao_sul')} | {'largura_inscrita_mi': r06['largura_inscrita_mi'], 'degrau': r06['degrau_perto_de_gardena']},
    '1906_condado_dossie': {'lat_sul': 33.7441, 'lat_norte': 33.9600, 'extensao_norte_sul_mi': 14.88},
    'hoje_tiger': {k: rhj[k] for k in ('lat_sul', 'lat_norte', 'extensao_norte_sul_mi')} | {'largura_inscrita_mi': rhj['largura_inscrita_mi'], 'degrau': rhj['degrau_perto_de_gardena']},
    'hoje_condado_dossie': {'lat_sul': 33.7976, 'lat_norte': 33.9232, 'extensao_norte_sul_mi': 8.66},
}
conf['areas_mi2'] = {s: {k: v for k, v in saidas[s]['features'][0]['properties'].items() if k.startswith('area') or k.startswith('ALAND') or k.startswith('AWATER')}
                     for s in ('la-1850-hamlin', 'la-1899-antes-da-faixa-hamlin', 'la-1906-hamlin', 'faixa-1906-hamlin', 'wilmington-1909-hamlin', 'la-1909-hamlin', 'la-hoje-tiger')}
conf['comprimentos_mi'] = {'quebra-mar 1923 (da costa ao farol)': round(L(qm), 2), 'molhe (folha 1896)': round(L(molhe), 2), 'long wharf (folha 1903)': round(L(lw), 2)}
json.dump({'gerado_em': HOJE, 'conferencia': conf}, open(os.path.join(SAIDA, '_conferencia.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1, default=float)
json.dump(origem, open(os.path.join(SAIDA, '_origem.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(json.dumps(conf, ensure_ascii=False, indent=1, default=float))
for s, c in saidas.items():
    print('%-34s %d feições  %6.0f KB' % (s, len(c['features']), os.path.getsize(os.path.join(SAIDA, s + '.json')) / 1024))
