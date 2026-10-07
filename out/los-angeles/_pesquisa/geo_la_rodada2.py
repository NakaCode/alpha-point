# -*- coding: utf-8 -*-
"""A geometria do vídeo 2 (los-angeles), 2ª rodada (pesquisa-geo, 07/10/2026, passo research).

As camadas que o espelho pede e o disco não tinha (espelho.json › _despacho_research.pesquisa_geo):
  california-cb500k                     ← a-pedir-california
  catalina-tiger                        ← a-pedir-catalina
  lugares-costa-gnis                    ← a-pedir-sf, a-pedir-sd, a-pedir-point-fermin (e o ponto de Playa del Rey)
  praia-aberta-mais-proxima-tiger       ← a-pedir-playa-del-rey (o ponto medido da costa aberta mais próxima da Plaza)
  main-channel-usace-ncf                ← a-pedir-main-channel
  portos-la-long-beach-tiger            ← a-pedir-port-long-beach
  divisa-la-lb-terminal-island-usgs1923 ← a-pedir-long-beach-terminal-island-1909 (só a divisa; o polígono não existe)

Tudo em domínio público (Census, USGS, USACE). Nada do OpenStreetMap nem da camada do condado.
Monta as FeatureCollections em out/los-angeles/_tmp/geo-final-2/ e o _origem.json que o geo_la_gravar2.mjs passa ao
gravarGeo da pré-v1. Só lê arquivos já baixados; nada aqui pede rede.

Fontes baixadas nesta rodada (07/10/2026, User-Agent do canal):
  _tmp/geo-fontes/cb_2025_us_state_500k.zip   https://www2.census.gov/geo/tiger/GENZ2025/shp/cb_2025_us_state_500k.zip
  _tmp/pesquisa-geo/ncf-lac3.geojson          USACE National Channel Framework, FeatureServer/2, CESPL_LA_02_LAC_3

Uso (de dentro de out/los-angeles/_pesquisa):  python geo_la_rodada2.py
"""
import json, os, sys, hashlib, math, zipfile, io, csv, datetime
import numpy as np
import geo_shp, geo_hist as gh

sys.stdout.reconfigure(encoding='utf-8')
AQUI = os.path.dirname(os.path.abspath(__file__))
PROJ = os.path.normpath(os.path.join(AQUI, '..'))
FONTES = os.path.join(PROJ, '_tmp', 'geo-fontes')
RASC = os.path.join(PROJ, '_tmp', 'pesquisa-geo')
SAIDA = os.path.join(PROJ, '_tmp', 'geo-final-2'); os.makedirs(SAIDA, exist_ok=True)
MIDIA = os.path.normpath(os.path.join(PROJ, '..', '..', 'midia', 'los-angeles', 'fontes', 'geo'))
GEO = os.path.join(PROJ, '_media', 'geo')
MI = 1609.344


def sha(p):
    return hashlib.sha256(open(p, 'rb').read()).hexdigest()


def r6(c):
    if isinstance(c, (list, tuple)) and c and isinstance(c[0], (int, float, np.floating)):
        return [round(float(c[0]), 6), round(float(c[1]), 6)]
    return [r6(x) for x in c]


def fc(feats):
    return {'type': 'FeatureCollection', 'features': feats}


def feat(geom, **p):
    geom = dict(geom); geom['coordinates'] = r6(geom['coordinates'])
    return {'type': 'Feature', 'properties': p, 'geometry': geom}


# ---- geodésia: Vincenty inverso (WGS84), como o medir_faixa.py do dossiê ----
def vincenty(lat1, lon1, lat2, lon2):
    a, f = 6378137.0, 1 / 298.257223563; b = (1 - f) * a
    L = math.radians(lon2 - lon1)
    U1 = math.atan((1 - f) * math.tan(math.radians(lat1))); U2 = math.atan((1 - f) * math.tan(math.radians(lat2)))
    sU1, cU1, sU2, cU2 = math.sin(U1), math.cos(U1), math.sin(U2), math.cos(U2)
    lam = L
    for _ in range(200):
        sl, cl = math.sin(lam), math.cos(lam)
        ss = math.hypot(cU2 * sl, cU1 * sU2 - sU1 * cU2 * cl)
        if ss == 0: return 0.0
        cs = sU1 * sU2 + cU1 * cU2 * cl; sig = math.atan2(ss, cs)
        sa = cU1 * cU2 * sl / ss; c2a = 1 - sa * sa
        c2sm = cs - 2 * sU1 * sU2 / c2a if c2a else 0.0
        C = f / 16 * c2a * (4 + f * (4 - 3 * c2a))
        lp = lam
        lam = L + (1 - C) * f * sa * (sig + C * ss * (c2sm + C * cs * (-1 + 2 * c2sm * c2sm)))
        if abs(lam - lp) < 1e-12: break
    u2 = c2a * (a * a - b * b) / (b * b)
    A = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)))
    B = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)))
    ds = B * ss * (c2sm + B / 4 * (cs * (-1 + 2 * c2sm * c2sm) - B / 6 * c2sm * (-3 + 4 * ss * ss) * (-3 + 4 * c2sm * c2sm)))
    return b * A * (sig - ds)


# ---- plano local para simplificar e medir área (equiretangular na latitude do objeto; basta para DP e áreas pequenas) ----
def plano(a, lat0):
    a = np.asarray(a, float)
    return np.column_stack([a[:, 0] * 111320 * math.cos(math.radians(lat0)), a[:, 1] * 110950])


def dp(a, tol_m, lat0):
    """Douglas-Peucker em metros. Mantém as pontas (anel fechado continua fechado)."""
    a = np.asarray(a, float)
    if tol_m <= 0 or len(a) < 8: return a
    P = plano(a, lat0)
    keep = np.zeros(len(P), bool); keep[0] = keep[-1] = True
    pilha = [(0, len(P) - 1)]
    while pilha:
        i, j = pilha.pop()
        if j <= i + 1: continue
        p, q = P[i], P[j]; d = q - p; L = np.hypot(*d)
        seg = P[i + 1:j]
        dist = np.abs(d[0] * (seg[:, 1] - p[1]) - d[1] * (seg[:, 0] - p[0])) / L if L > 0 else np.hypot(*(seg - p).T)
        k = int(np.argmax(dist))
        if dist[k] > tol_m:
            keep[i + 1 + k] = True; pilha += [(i, i + 1 + k), (i + 1 + k, j)]
    return a[keep]


def area_km2(anel, lat0):
    P = plano(anel, lat0); x, y = P[:, 0], P[:, 1]
    return abs(np.dot(x, np.roll(y, -1)) - np.dot(y, np.roll(x, -1))) / 2 / 1e6


def dentro(pt, a):
    x, y = pt; d = False
    for i in range(len(a)):
        xi, yi = a[i]; xk, yk = a[i - 1]
        if (yi > y) != (yk > y) and x < (xk - xi) * (y - yi) / (yk - yi) + xi: d = not d
    return d


def dentro_geom(pt, g):
    ps = [g['coordinates']] if g['type'] == 'Polygon' else g['coordinates']
    return any(dentro(pt, p[0]) and not any(dentro(pt, h) for h in p[1:]) for p in ps)


def aneis(g):
    ps = [g['coordinates']] if g['type'] == 'Polygon' else g['coordinates']
    return [a for p in ps for a in p]


origem, conf = {}, {}


def gravar(slug, colecao, o):
    json.dump(colecao, open(os.path.join(SAIDA, slug + '.json'), 'w', encoding='utf-8'), ensure_ascii=False)
    origem[slug] = o


LIC_TIGER = ('Domínio público (U.S. Census Bureau: "Copyright protection is not available for any work of the United States '
             'Government (Title 17 U.S.C., Section 105). Thus, you are free to reproduce census materials as you see fit. We would '
             'ask, however, that you cite the Census Bureau as the source." — TGRSHP2025_TechDoc_Ch1.pdf §1.2, lido em 2026-10-07); '
             'citação pedida, sem crédito na tela')
LIC_GNIS = 'Domínio público (USGS GNIS, Domestic Names, Califórnia; obra federal, 17 U.S.C. §105)'
LIC_USGS = ('Domínio público (USGS: "USGS-authored or produced data and information are considered to be in the U.S. Public Domain" — '
            'https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits, lido em 2026-10-07); sem crédito obrigatório')
LIC_USACE = ('Domínio público (obra do U.S. Army Corps of Engineers, governo federal: 17 U.S.C. §105). Item 9227967a2748410983352b501c0c7b39 '
             '(dono eHydroPublisher), accessInformation "US Army Corps of Engineers"; o licenseInfo é só um aviso de isenção de '
             'responsabilidade ("compiled for government use ... disclaims any liability"), sem restrição de uso. Lido em 2026-10-07.')
URL_CB_STATE = 'https://www2.census.gov/geo/tiger/GENZ2025/shp/cb_2025_us_state_500k.zip'
URL_COAST = 'https://www2.census.gov/geo/tiger/TIGER2025/COASTLINE/tl_2025_us_coastline.zip'
URL_PLACE = 'https://www2.census.gov/geo/tiger/TIGER2025/PLACE/tl_2025_06_place.zip'
URL_WATER = 'https://www2.census.gov/geo/tiger/TIGER2025/AREAWATER/tl_2025_06037_areawater.zip'
URL_GNIS = 'https://prd-tnm.s3.amazonaws.com/StagedProducts/GeographicNames/DomesticNames/DomesticNames_CA_Text.zip'
URL_NCF = ("https://services7.arcgis.com/n1YM8pTrFmm7L4hs/arcgis/rest/services/National_Channel_Framework/FeatureServer/2/query"
           "?where=channelreachidpk%3D%27CESPL_LA_02_LAC_3%27&outFields=*&returnGeometry=true&outSR=4326&f=geojson")
URL_WILM = 'https://prd-tnm.s3.amazonaws.com/StagedProducts/Maps/HistoricalTopo/GeoTIFF/CA/CA_Wilmington_295811_1923_24000_geo.tif'
NA_TELA_PD = 'domínio público: sem crédito obrigatório; nada vem do OSM nem da camada do condado'

# ================= 1 · a Califórnia (Census CB 2025, 1:500.000) =================
st, _ = geo_shp.features(os.path.join(FONTES, 'cb_2025_us_state_500k.zip'), lambda r: r['STATEFP'] == '06')
assert len(st) == 1 and st[0]['properties']['NAME'] == 'California', st
g = st[0]['geometry']
polys, n_antes, n_depois = [], 0, 0
for p in g['coordinates']:
    ext = np.array(p[0]); n_antes += len(ext)
    if area_km2(ext, 36) < 0.5: continue          # rochedos menores que 0,5 km² somem na câmera larga
    s = dp(ext, 120, 36); n_depois += len(s)
    polys.append([s.tolist()])
gravar('california-cb500k', fc([feat({'type': 'MultiPolygon', 'coordinates': polys}, name='California', name_pt='CALIFORNIA',
                                     rotulo='CALIFORNIA', papel='estado', GEOID='06')]),
       {'fonte': 'U.S. Census Bureau — Cartographic Boundary Files 2025, states 1:500,000 (cb_2025_us_state_500k), GEOID 06 (California)',
        'licenca': LIC_TIGER, 'url': URL_CB_STATE, 'sha256_fonte': sha(os.path.join(FONTES, 'cb_2025_us_state_500k.zip')),
        'datum': 'NAD83 (EPSG:4269), graus, sem reprojeção', 'na_tela': NA_TELA_PD,
        'simplificacao': 'Douglas-Peucker 120 m; fora as ilhas com menos de 0,5 km²; %d → %d vértices, %d polígonos' % (n_antes, n_depois, len(polys)),
        'incerteza': 'generalizado (1:500.000) e simplificado a 120 m: só para a câmera larga (a costa da Califórnia inteira); perto de LA vale a costa-hoje-tiger'})
conf['california_poligonos'] = len(polys)

# ================= 2 · Santa Catalina Island (TIGER 2025 Coastline, o anel fechado) =================
cos, _ = geo_shp.features(os.path.join(FONTES, 'tl_2025_us_coastline.zip'))
anel_cat = None
for f in cos:
    gg = f['geometry']; ls = gg['coordinates'] if gg['type'] == 'MultiLineString' else [gg['coordinates']]
    for l in ls:
        xs = [q[0] for q in l]; ys = [q[1] for q in l]
        if min(xs) > -118.65 and max(xs) < -118.28 and min(ys) > 33.28 and max(ys) < 33.49 and len(l) > 1000:
            assert anel_cat is None; anel_cat = np.array(l)
assert anel_cat is not None and tuple(anel_cat[0]) == tuple(anel_cat[-1]), 'o anel de Catalina não fechou'
if np.sum((np.roll(anel_cat[:, 0], -1) - anel_cat[:, 0]) * (np.roll(anel_cat[:, 1], -1) + anel_cat[:, 1])) > 0:
    anel_cat = anel_cat[::-1]                          # RFC 7946: exterior anti-horário
cat_s = dp(anel_cat, 15, 33.39)
a_cat = area_km2(anel_cat, 33.39)
gravar('catalina-tiger', fc([feat({'type': 'Polygon', 'coordinates': [cat_s.tolist()]}, name='Santa Catalina Island', name_pt='Santa Catalina Island',
                                  rotulo='Santa Catalina Island', papel='ilha')]),
       {'fonte': 'U.S. Census Bureau — TIGER/Line Shapefiles 2025, Coastline (tl_2025_us_coastline), o anel fechado de Santa Catalina Island (Pacific, L4150)',
        'licenca': LIC_TIGER, 'url': URL_COAST, 'sha256_fonte': sha(os.path.join(FONTES, 'tl_2025_us_coastline.zip')),
        'datum': 'NAD83 (EPSG:4269), graus', 'na_tela': NA_TELA_PD,
        'simplificacao': 'Douglas-Peucker 15 m; %d → %d vértices; o ilhéu de 30 vértices ao largo de Two Harbors (Bird Rock) fica fora' % (len(anel_cat), len(cat_s)),
        'incerteza': 'a da costa do TIGER; a pedreira de onde saía a pedra não tem ponto: o dossiê não dá o lugar, e nada foi inventado'})
conf['catalina_area_km2'] = round(a_cat, 2); conf['catalina_area_mi2'] = round(a_cat / 2.589988, 2)
conf['catalina_contem_gnis_249050'] = dentro((-118.4175764, 33.3833613), anel_cat.tolist())
conf['catalina_contem_avalon_gnis_1660283'] = dentro((-118.3278506, 33.3428065), anel_cat.tolist())

# ================= 3 · os pontos do GNIS =================
z = zipfile.ZipFile(os.path.join(MIDIA, 'gnis-DomesticNames_CA_Text.zip'))
rd = csv.DictReader(io.StringIO(z.read('Text/DomesticNames_CA.txt').decode('utf-8-sig')), delimiter='|')
QUER = {'277593': ('San Francisco', 'San Francisco', 'cidade'), '1661377': ('San Diego', 'San Diego', 'cidade'),
        '1664805': ('Point Fermin', 'Point Fermin', 'ponto'), '247603': ('Playa del Rey', 'Playa del Rey', 'ponto'),
        '245395': ('Main Channel', 'Main Channel', 'ponto')}
achou = {}
for r in rd:
    if r['feature_id'] in QUER: achou[r['feature_id']] = r
assert set(achou) == set(QUER), set(QUER) - set(achou)
pts = []
for fid in ['277593', '1661377', '1664805', '247603', '245395']:
    r = achou[fid]; nome, rot, papel = QUER[fid]
    assert r['feature_name'] == nome, (fid, r['feature_name'])
    pts.append(feat({'type': 'Point', 'coordinates': [float(r['prim_long_dec']), float(r['prim_lat_dec'])]}, name=nome, name_pt=rot, rotulo=rot,
                    papel=papel, fonte_ponto='USGS GNIS %s (%s, condado %s, mapa %s)' % (fid, r['feature_class'], r['county_name'], r['map_name'])))
gravar('lugares-costa-gnis', fc(pts),
       {'fonte': 'USGS GNIS Domestic Names (CA, o mesmo arquivo da 1ª rodada): San Francisco 277593, San Diego 1661377, Point Fermin 1664805 (Cape), Playa del Rey 247603 e Main Channel 245395 (Channel)',
        'licenca': LIC_GNIS, 'url': URL_GNIS, 'sha256_fonte': sha(os.path.join(MIDIA, 'gnis-DomesticNames_CA_Text.zip')),
        'datum': 'NAD83 (GNIS), graus', 'simplificacao': 'nenhuma', 'na_tela': NA_TELA_PD,
        'incerteza': 'ponto nominal do GNIS (o centro do lugar povoado, a ponta do cabo); não é divisa nem a praia: o ponto da praia aberta é a praia-aberta-mais-proxima-tiger'})

# ================= 4 · a praia aberta mais próxima da Plaza (TIGER Coastline), pelo método do esc-09 =================
PLAZA = (34.056621058000076, -118.23964062699997)    # NRHP 72000231, o mesmo de lugares-gnis-nrhp
dens = []
for f in cos:
    gg = f['geometry']; ls = gg['coordinates'] if gg['type'] == 'MultiLineString' else [gg['coordinates']]
    for l in ls:
        for (x1, y1), (x2, y2) in zip(l[:-1], l[1:]):
            if not (33.84 < y1 < 34.06 and -118.57 < x1 < -118.37): continue
            n = max(1, int(math.hypot((x2 - x1) * 92400, (y2 - y1) * 111000) / 10))
            t = np.linspace(0, 1, n, endpoint=False)
            dens.append(np.column_stack([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]))
V = np.vstack(dens)
V = V[(V[:, 1] > 33.85) & (V[:, 1] < 34.05) & (V[:, 0] > -118.56) & (V[:, 0] < -118.38)]
bins = {}
for lo, la in V:                                        # o vértice mais a oeste de cada faixa de 0,0005° de latitude:
    b = int(la / 0.0005)                                # tira a marina de Marina del Rey, o Ballona e a lagoa
    if b not in bins or lo < bins[b][0]: bins[b] = (lo, la)
costa = np.array(list(bins.values()))
d = np.array([vincenty(PLAZA[0], PLAZA[1], la, lo) for lo, la in costa]); i = int(np.argmin(d))
praia = (float(costa[i, 0]), float(costa[i, 1])); d_mi = float(d[i]) / MI
d_pdr = vincenty(praia[1], praia[0], 33.9489011, -118.4456331)
outras = {k: round(min(vincenty(la_, lo_, c[1], c[0]) for c in costa) / MI, 2) for k, (la_, lo_) in
          {'lms_el_pueblo_125_paseo_de_la_plaza': (34.05635746, -118.23823712), 'nrhp_78000689_plaza_substation': (34.057086409, -118.237974993)}.items()}
gravar('praia-aberta-mais-proxima-tiger', fc([feat({'type': 'Point', 'coordinates': [praia[0], praia[1]]}, name='Nearest open beach (Playa del Rey)',
                                                   name_pt='nearest open beach', rotulo='nearest open beach', papel='ponto',
                                                   dist_plaza_mi=round(d_mi, 2), plaza='NRHP 72000231')]),
       {'fonte': 'U.S. Census Bureau — TIGER/Line Shapefiles 2025, Coastline (tl_2025_us_coastline): o ponto da costa aberta da baía de Santa Monica mais próximo da Plaza (NRHP 72000231), pelo método do esc-09 do dossiê (vértice mais a oeste por faixa de 0,0005° de latitude, densificado a 10 m, Vincenty WGS84)',
        'licenca': LIC_TIGER, 'url': URL_COAST, 'sha256_fonte': sha(os.path.join(FONTES, 'tl_2025_us_coastline.zip')),
        'datum': 'NAD83 (EPSG:4269), graus', 'simplificacao': 'nenhuma (ponto medido)', 'na_tela': NA_TELA_PD,
        'incerteza': 'a da costa do TIGER (a linha d’água do levantamento, não a areia seca); o esc-09 mediu na camada do condado e deu 13,99 a 14,09 mi no ponto 33,95547 N, -118,45101'})
conf['praia'] = {'ponto': [round(praia[0], 5), round(praia[1], 5)], 'dist_plaza_nrhp_mi': round(d_mi, 2), 'outras_plazas_mi': outras,
                 'dist_ao_esc09_m': round(vincenty(praia[1], praia[0], 33.95547, -118.45101), 1), 'dist_ao_gnis_playa_del_rey_m': round(d_pdr, 0),
                 'vertices_costa_aberta': int(len(costa))}

# ================= 5 · o Main Channel (USACE National Channel Framework) =================
ncf = json.load(open(os.path.join(RASC, 'ncf-lac3.geojson'), encoding='utf-8'))
assert len(ncf['features']) == 1
nf = ncf['features'][0]; pr = nf['properties']
assert pr['channelreachidpk'] == 'CESPL_LA_02_LAC_3' and pr['sdsfeaturedescription'] == 'MAIN CHANNEL' and pr['depthmaintained'] == 53
ng = nf['geometry']
gravar('main-channel-usace-ncf', fc([feat(ng, name='Main Channel', name_pt='Main Channel', rotulo='Main Channel', papel='canal',
                                          channelreachidpk=pr['channelreachidpk'], sdsfeaturename=pr['sdsfeaturename'],
                                          depthmaintained_ft=pr['depthmaintained'], depthauthorized_ft=pr['depthauthorized'],
                                          reportedlength_mi=pr['reportedlength'], widthfrom_ft=pr['widthfrom'], widthto_ft=pr['widthto'],
                                          dateuploaded='2022-04-26', mediaidfk=pr['mediaidfk'])]),
       {'fonte': 'U.S. Army Corps of Engineers (eHydro) — National Channel Framework, ChannelReach (FeatureServer/2), CESPL_LA_02_LAC_3 "MAIN CHANNEL" do "Los Angeles Channel" (53 ft mantidos e autorizados; NCF_CESPL_DIS_CALIFORNIA_V_20220426.ZIP)',
        'licenca': LIC_USACE, 'url': URL_NCF, 'sha256_fonte': sha(os.path.join(RASC, 'ncf-lac3.geojson')),
        'datum': 'WGS84 (outSR 4326; origem NAD83 State Plane CA V, pés)', 'simplificacao': 'nenhuma (%d vértices)' % sum(len(a) for a in aneis(ng)),
        'na_tela': NA_TELA_PD,
        'incerteza': 'é o pé do talude (TOE extents) do trecho de projeto, não a margem do cais; camada viva, trechos carregados em 26/04/2022'})
P = plano(np.array(aneis(ng)[0]), 33.73)
conf['main_channel'] = {'area_km2': round(area_km2(np.array(aneis(ng)[0]), 33.73), 3), 'area_ncf_pes2_em_km2': round(pr['projectedarea'] * 0.09290304 / 1e6, 3),
                        'contem_gnis_main_channel_245395': dentro_geom((-118.2759042, 33.7355744), ng),
                        'comprimento_eixo_maior_mi': round(float(np.max(np.hypot(*(P[:, None, :] - P[None, :, :]).transpose(2, 0, 1)))) / MI, 2)}

# ================= 6 · os dois portos: a água do porto de hoje dividida pela divisa das cidades (TIGER) =================
agua = json.load(open(os.path.join(GEO, 'agua-porto-hoje-tiger.json'), encoding='utf-8'))
la = json.load(open(os.path.join(GEO, 'la-hoje-tiger.json'), encoding='utf-8'))['features'][0]['geometry']
viz = json.load(open(os.path.join(GEO, 'vizinhos-faixa-tiger.json'), encoding='utf-8'))
lb = [x for x in viz['features'] if x['properties']['name'] == 'Long Beach'][0]['geometry']
lado = {'LA': [], 'LB': []}; lista = {'LA': [], 'LB': []}
# fora: as lagoas e os lagos de terra firme que a agua-porto-hoje-tiger traz (não são água do porto):
# Harbor Lake (Machado Lake) e o vizinho dele, dois tanques pequenos em Wilmington e a Rainbow Lagoon do centro de Long Beach
FORA = {'1101584238341': 'Harbor Lk (Machado Lake, terra firme, ao norte de 33,78)', '1101584241303': 'lago junto do Harbor Lk',
        '1101584240077': 'tanque de 0,02 km² em Wilmington (33,775 N)', '1101584240804': 'tanque de 0,02 km² em Wilmington (33,778 N)',
        '1101584238349': '"Lagoon" do centro de Long Beach (Rainbow Lagoon, parque em terra)'}
conf['portos_fora'] = FORA
for f in agua['features']:
    if f['properties']['HYDROID'] in FORA: continue
    gg = f['geometry']; vs = [q for a in aneis(gg) for q in a]
    na, nb = sum(dentro_geom(q, la) for q in vs), sum(dentro_geom(q, lb) for q in vs)
    assert min(na, nb) <= 0.03 * len(vs), (f['properties'], na, nb)   # cada corpo d'água cai numa cidade só (fora os vértices sobre a divisa: até 3 %)
    k = 'LA' if na > nb else 'LB'
    ps = [gg['coordinates']] if gg['type'] == 'Polygon' else gg['coordinates']
    lado[k] += ps; lista[k].append((f['properties'].get('name') or '(sem nome)', f['properties']['HYDROID'], f['properties']['AWATER_m2'], 'vértices LA/LB %d/%d' % (na, nb)))
# a divisa LA–Long Beach: as arestas que os dois polígonos do TIGER têm em comum (mesmas coordenadas), na janela do porto
JAN = (-118.30, 33.70, -118.17, 33.79)
A = set()
for a in aneis(la):
    for p, q in zip(a[:-1], a[1:]): A.add((tuple(p), tuple(q))); A.add((tuple(q), tuple(p)))
ar = [(p, q) for a in aneis(lb) for p, q in zip(a[:-1], a[1:]) if (tuple(p), tuple(q)) in A]
ar = [(p, q) for p, q in ar if JAN[0] < p[0] < JAN[2] and JAN[1] < p[1] < JAN[3]]
# encadeia as arestas em linhas
linhas = []
resto = [list(map(tuple, e)) for e in ar]
while resto:
    l = list(resto.pop(0)); mudou = True
    while mudou:
        mudou = False
        for j, (p, q) in enumerate(resto):
            if p == l[-1]: l.append(q); resto.pop(j); mudou = True; break
            if q == l[0]: l.insert(0, p); resto.pop(j); mudou = True; break
            if q == l[-1]: l.append(p); resto.pop(j); mudou = True; break
            if p == l[0]: l.insert(0, q); resto.pop(j); mudou = True; break
    linhas.append([list(x) for x in l])
area = lambda ps: sum(area_km2(np.array(p[0]), 33.74) - sum(area_km2(np.array(h), 33.74) for h in p[1:]) for p in ps)
feats = [feat({'type': 'MultiPolygon', 'coordinates': lado['LB']}, name='Port of Long Beach', name_pt='Port of Long Beach', rotulo='Port of Long Beach',
              papel='agua_porto_long_beach', cidade='Long Beach (TIGER place 0643000)'),
         feat({'type': 'MultiPolygon', 'coordinates': lado['LA']}, name='Port of Los Angeles', name_pt='Port of Los Angeles', rotulo='Port of Los Angeles',
              papel='agua_porto_los_angeles', cidade='Los Angeles (TIGER place 0644000)'),
         feat({'type': 'MultiLineString', 'coordinates': linhas}, name='Los Angeles – Long Beach city line', name_pt='city line', rotulo='',
              papel='divisa_la_long_beach')]
gravar('portos-la-long-beach-tiger', fc(feats),
       {'fonte': 'U.S. Census Bureau — TIGER/Line Shapefiles 2025: a água do porto (tl_2025_06037_areawater, a mesma de agua-porto-hoje-tiger) dividida pela cidade em que cada corpo d’água cai (tl_2025_06_place, 0644000 Los Angeles e 0643000 Long Beach), e a divisa entre as duas cidades (as arestas comuns aos dois polígonos) na janela %s' % (JAN,),
        'licenca': LIC_TIGER, 'url': URL_WATER + ' ; ' + URL_PLACE, 'sha256_fonte': sha(os.path.join(FONTES, 'tl_2025_06037_areawater.zip')),
        'datum': 'NAD83 (EPSG:4269), graus', 'simplificacao': 'nenhuma', 'na_tela': NA_TELA_PD,
        'incerteza': 'é a água do porto dentro de cada cidade (sem os 5 lagos e tanques de terra firme), não o limite legal de cada Harbor District (o do Porto de Long Beach não se leu: o thehelm.polb.com recusou o robô, decisão T02); os cais e a terra feita não entram, só a água; o lado de Long Beach inclui a baía até Alamitos e as marinas do centro (Rainbow Harbor, Shoreline), que não são do porto'})
conf['portos'] = {'LB_corpos': lista['LB'], 'LA_corpos': lista['LA'], 'LB_km2': round(area(lado['LB']), 2), 'LA_km2': round(area(lado['LA']), 2),
                  'divisa_linhas': len(linhas), 'divisa_vertices': sum(len(l) for l in linhas),
                  'long_beach_gnis_em_lb': dentro_geom((-118.189235, 33.766962), lb)}

# ================= 7 · a divisa Los Angeles–Long Beach em Terminal Island, na folha do USGS de 1923 =================
# O traço "City Boundary" (tracejado) da folha Wilmington 1923 (1:24.000) cruza Terminal Island da margem sul do Cerritos
# Channel até a praia. As duas pontas foram lidas no raster (_tmp/pesquisa-geo/ti-end-a.jpg e ti-end-b.jpg, zoom 4×):
# pixel da folha (coluna, linha). O traço é reto entre elas (ti-z-raw.jpg).
W23 = gh.Folha(os.path.join(FONTES, 'usgs', 'CA_Wilmington_295811_1923_24000_geo.tif'))
PX = [(2661 + 286.3, 2189 + 216.3), (2661 + 483.8, 2189 + 512.5)]
lin = [list(W23.px_para_lonlat(c, l)) for c, l in PX]
gravar('divisa-la-lb-terminal-island-usgs1923', fc([feat({'type': 'LineString', 'coordinates': lin}, name='Los Angeles – Long Beach line on Terminal Island (1923)',
                                                          name_pt='city line, 1923', rotulo='', papel='divisa_terminal_island', epoca='1923')]),
       {'fonte': 'USGS, folha topográfica histórica Wilmington, Calif., 1:24.000, 1923 (CA_Wilmington_295811_1923_24000_geo.tif, georreferenciada pelo USGS): o traço "City Boundary" através de Terminal Island, lido nas duas pontas (pixel %s e %s)' % tuple(PX),
        'licenca': LIC_USGS, 'url': URL_WILM, 'sha256_fonte': sha(os.path.join(FONTES, 'usgs', 'CA_Wilmington_295811_1923_24000_geo.tif')),
        'datum': 'NAD27 da folha convertido a WGS84', 'simplificacao': 'nenhuma (2 vértices: o traço é reto)', 'na_tela': NA_TELA_PD,
        'incerteza': '±10 m de leitura (o traço tem ~4 px, ~8 m); é a divisa de 1923, não o polígono de 1909: a folha não mostra o resto do limite da anexação de Long Beach'})
# conferências: contra a divisa de hoje (TIGER) e contra a divisa de San Pedro lida em Hamlin (1916)
def dseg(p, s, t):
    k = math.cos(math.radians(33.76)) * 111320; m = 110950
    px_, py_ = p[0] * k, p[1] * m; sx, sy = s[0] * k, s[1] * m; tx, ty = t[0] * k, t[1] * m
    dx, dy = tx - sx, ty - sy; L = dx * dx + dy * dy; u = 0 if L == 0 else max(0, min(1, ((px_ - sx) * dx + (py_ - sy) * dy) / L))
    return math.hypot(px_ - sx - u * dx, py_ - sy - u * dy)
arT = [(p, q) for a in aneis(lb) for p, q in zip(a[:-1], a[1:]) if (tuple(p), tuple(q)) in A]
meio = [(lin[0][0] + lin[1][0]) / 2, (lin[0][1] + lin[1][1]) / 2]
hs = json.load(open(os.path.join(GEO, 'san-pedro-1909-divisa-hamlin.json'), encoding='utf-8'))['features'][0]['geometry']['coordinates']
conf['divisa_1923'] = {'linha': [[round(x, 6) for x in p] for p in lin], 'comprimento_m': round(vincenty(lin[0][1], lin[0][0], lin[1][1], lin[1][0]), 1),
                       'distancia_a_divisa_tiger_hoje_m': {n: round(min(dseg(p, s, t) for s, t in arT), 1) for n, p in (('norte', lin[0]), ('meio', meio), ('sul', lin[1]))},
                       'hamlin_trecho_da_ilha_a_linha_1923_m': [round(dseg(p, lin[0], lin[1]), 1) for p in hs[2][1:3]]}

json.dump(origem, open(os.path.join(SAIDA, '_origem.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
json.dump(conf, open(os.path.join(SAIDA, '_conferencia.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(json.dumps(conf, ensure_ascii=False, indent=1))
