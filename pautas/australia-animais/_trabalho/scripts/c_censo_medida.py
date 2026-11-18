# Medida do Censo (vídeo 8, australia-animais): quanta gente vive no Channel Country (IBRA 7.1, CHC), contra os três estados da cobra-marrom e a Grande Sydney.
# Sem rede: lê só o que c_censo_baixar.py gravou (os sha256 conferidos) e as bases da miniatura (só leitura).
#   - o polígono CHC (IBRA 7.1, DCCEEW), a área conferida contra os HECTARES oficiais pela Albers escrita à mão (c_censo_geo.py);
#   - os 316 mesh blocks do ASGS 2021 que tocam o retângulo do CHC (geo.abs.gov.au, ASGS2021/MB/MapServer/0, filtro espacial por envelope);
#   - as contagens de moradores habituais por mesh block do Censo 2021 ("Mesh Block Counts, 2021", ABS; via mb-counts-2021.csv, tirado do xlsx por c_censo_mb_ler.py);
#   - as localidades (SAL 2021, geo.abs.gov.au, ASGS2021/SAL/MapServer/0, mesmo envelope);
#   - os estados (STE 2021) e a Grande Sydney (GCCSA 2021), shapefiles do ABS em _bases/, com AREASQKM21;
#   - os totais oficiais do QuickStats 2021 (NSW, Vic, Qld, Grande Sydney), lidos das páginas gravadas.
# Grava midia/australia-animais/fontes/c/censo/medida-censo.json e mb-chc.csv. Imprime o relatório.
# Uso (da raiz): python -X utf8 -B -I pautas/australia-animais/_trabalho/scripts/c_censo_medida.py
import sys, os, json, csv, math, re, html
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import c_censo_geo as G
import shapely
from shapely.geometry import shape, Point
from shapely.validation import make_valid
from shapely.ops import nearest_points, unary_union
from shapely.strtree import STRtree

ARQ = {
    'mb_geo': ('geo-mb2021-retangulo-chc.geojson', '0fdd525e8100f4b9cfd98f9e18caa06b8bdf1eff018ae3c3aa1002df78877087'),
    'mb_contagem': ('geo-mb2021-contagem-retangulo.json', 'cb753a48e4bc9ea2c6e70e9804411ca0aa87123117a43c1913ed527107edcdec'),
    'sal_geo': ('geo-sal2021-retangulo-chc.geojson', '08400cca1be2270fe4b641e11f20906b8f57d7d47bdfabdba924b109138dba07'),
    'mb_csv': ('mb-counts-2021.csv', '696f7c57415e78a364c0fbbd5427d4b707ad14be1e8df6c7eb7a1dc7e06ad5f8'),
    'mb_xlsx': ('abs-mesh-block-counts-2021.xlsx', '1ab520c2ff0e07ca88729258c30ee9f7a7133df113a81bac94812582f3b540a3'),
    'qs_nsw': ('abs-quickstats-2021-1-nsw.html', '8230c909d2383354681a6249fd4765af6dac63796b2956fd188f8cf0b979d1f8'),
    'qs_vic': ('abs-quickstats-2021-2-vic.html', '638ce8c57d18c25f4d8af0c461536be625089516e127bae9089d50a99a8f799a'),
    'qs_qld': ('abs-quickstats-2021-3-qld.html', 'f3b6029142b9a676535410d2b4ba4ef492b1325d0c0b0507c3e912a3ea8a63a5'),
    'qs_gsyd': ('abs-quickstats-2021-1GSYD-gsyd.html', '18729cb3403b6aa8d4e953bd158c9aa5e5019724491752460aaa11f712017937'),
    'erp': ('abs-erp-estados-ultima.html', 'd4666bba3cdd93cc0f8ff31b10b6a398db2b2827dbadd45c6da4726f681923e7'),
}
P = {k: os.path.join(G.CENSO, v[0]) for k, v in ARQ.items()}
for k, (nome, sha) in ARQ.items():
    G.conferir_sha(P[k], sha)
print('sha256 conferido: %d arquivos do censo + o polígono do IBRA + STE + GCCSA' % len(ARQ))

ESTADOS = {'1': 'New South Wales', '2': 'Victoria', '3': 'Queensland', '4': 'South Australia', '5': 'Western Australia', '6': 'Tasmania',
           '7': 'Northern Territory', '8': 'Australian Capital Territory', '9': 'Other Territories'}
KM2MI2 = G.KM2_POR_MI2
R_TERRA = 6371.0088  # raio médio (IUGG), para a distância geodésica aproximada


def hav(lon1, lat1, lon2, lat2):
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp, dl = p2 - p1, math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R_TERRA * math.asin(math.sqrt(a))


def valida(g):
    return g if g.is_valid else make_valid(g)


# --- 1. o polígono ---
chc_ll, chc = G.carregar_channel_country()
chc_km2 = chc.area / 1e6
chc_ibra_km2 = G.HECTARES_IBRA / 100
chc_borda = chc.boundary
shapely.prepare(chc)
print('\n== O Channel Country (IBRA 7.1, CHC)')
print('área (Albers, à mão) %.1f km² | IBRA %.1f km² | %.0f mi²' % (chc_km2, chc_ibra_km2, chc_ibra_km2 / KM2MI2))

# --- 2. os mesh blocks do retângulo ---
d = json.load(open(P['mb_geo'], encoding='utf-8'))
n_esperado = json.load(open(P['mb_contagem'], encoding='utf-8'))['count']
assert not d.get('exceededTransferLimit') and not d.get('properties', {}).get('exceededTransferLimit'), 'a consulta foi cortada'
feats = d['features']
assert len(feats) == n_esperado, 'veio %d de %d' % (len(feats), n_esperado)
contagens = {}
with open(P['mb_csv'], encoding='utf-8') as f:
    for r in csv.DictReader(f):
        contagens[r['MB_CODE_2021']] = r
mbs = []
for ft in feats:
    pr = ft['properties']
    g = valida(shape(ft['geometry']))
    ga = valida(G.geom_albers(g))
    cod = pr['mb_code_2021']
    c = contagens.get(cod)
    assert c is not None, 'MB sem contagem: %s' % cod
    mbs.append({'cod': cod, 'cat': pr['mb_category_2021'], 'sa1': pr['sa1_code_2021'], 'sa2': pr['sa2_name_2021'], 'sa2_cod': pr['sa2_code_2021'],
                'estado': pr['state_code_2021'], 'area_abs': float(pr['area_albers_sqkm']), 'area_csv': float(c['AREA_ALBERS_SQKM']),
                'pessoas': int(round(float(c['Person']))), 'domicilios': int(round(float(c['Dwelling']))), 'g': g, 'ga': ga})
# conferência da geometria contra a área do ABS
dif = []
for m in mbs:
    a = m['ga'].area / 1e6
    m['area_calc'] = a
    if m['area_abs'] >= 1:
        dif.append(abs(a / m['area_abs'] - 1))
print('\n== Os mesh blocks: %d (o servidor contou %d), todos com contagem no "Mesh Block Counts, 2021"' % (len(mbs), n_esperado))
print('área calculada contra AREA_ALBERS_SQKM do ABS (MBs >= 1 km², n=%d): diferença mediana %.4f %%, máxima %.4f %%' % (
    len(dif), 100 * sorted(dif)[len(dif) // 2], 100 * max(dif)))
print('AREA_ALBERS_SQKM do serviço = a do xlsx em todos: %s' % all(abs(m['area_abs'] - m['area_csv']) < 0.001 for m in mbs))
uniao = unary_union([m['ga'] for m in mbs])
falta = chc.difference(uniao).area / 1e6
print('o CHC fora da união dos MBs do retângulo: %.3f km² (tem de ser ~0: prova que nenhum MB que toca o CHC ficou de fora)' % falta)

# --- 3. centroide e fração dentro ---
for m in mbs:
    ga = m['ga']
    cen = ga.centroid
    m['cen'] = cen
    m['cen_ll'] = G.albers_inv(cen.x, cen.y)
    m['dentro_cen'] = bool(chc.contains(cen))
    inter = ga.intersection(chc).area if ga.intersects(chc) else 0.0
    m['frac'] = inter / ga.area if ga.area > 0 else 0.0
    m['km2_dentro'] = inter / 1e6

# localidade (SAL) de cada MB: a de maior interseção
ds = json.load(open(P['sal_geo'], encoding='utf-8'))
sals = []
for ft in ds['features']:
    pr = ft['properties']
    g = valida(shape(ft['geometry']))
    sals.append({'nome': pr.get('sal_name_2021') or pr.get('SAL_NAME_2021'), 'cod': pr.get('sal_code_2021') or pr.get('SAL_CODE_2021'),
                 'estado': pr.get('state_code_2021') or pr.get('STATE_CODE_2021'), 'g': g, 'ga': valida(G.geom_albers(g)),
                 'area_abs': pr.get('area_albers_sqkm')})
print('\n== As localidades (SAL 2021) do retângulo: %d; campos: %s' % (len(sals), sorted(ds['features'][0]['properties'].keys())))
arv = STRtree([s['ga'] for s in sals])
for m in mbs:
    melhor, area = None, 0
    for i in arv.query(m['ga']):
        s = sals[int(i)]
        a = m['ga'].intersection(s['ga']).area
        if a > area:
            melhor, area = s, a
    m['sal'] = melhor['nome'] if melhor else None
    m['sal_frac'] = area / m['ga'].area if melhor else 0

TOL = 0.001
pop_cen = sum(m['pessoas'] for m in mbs if m['dentro_cen'])
pop_area = sum(m['pessoas'] * m['frac'] for m in mbs)
pop_min = sum(m['pessoas'] for m in mbs if m['frac'] >= 1 - TOL)
pop_max = sum(m['pessoas'] for m in mbs if m['frac'] > TOL)
dom_cen = sum(m['domicilios'] for m in mbs if m['dentro_cen'])
n_cen = sum(1 for m in mbs if m['dentro_cen'])
n_pop_cen = sum(1 for m in mbs if m['dentro_cen'] and m['pessoas'] > 0)
borda = [m for m in mbs if TOL < m['frac'] < 1 - TOL]
print('\n== A gente do Channel Country (moradores habituais, Censo 2021, por mesh block)')
print('centroide dentro: %d pessoas, %d domicílios, em %d MBs (%d com gente)' % (pop_cen, dom_cen, n_cen, n_pop_cen))
print('ponderado pela área (cada MB conta a fração da área dentro): %.1f' % pop_area)
print('só os MBs inteiros dentro (fração >= %.3f): %d | todo MB que toca (fração > %.3f): %d' % (1 - TOL, pop_min, TOL, pop_max))
print('MBs que cortam a divisa: %d (%d com gente; %d pessoas neles no total)' % (
    len(borda), sum(1 for m in borda if m['pessoas'] > 0), sum(m['pessoas'] for m in borda)))
print('\n  os MBs da divisa com gente (fração dentro; centroide dentro?):')
for m in sorted(borda, key=lambda x: -x['pessoas']):
    if m['pessoas'] > 0:
        print('   %s %-20s %-32s %-24s %5d pessoas  %5.1f %% dentro  centroide %s  (%.0f km²)' % (
            m['cod'], m['cat'][:20], (m['sal'] or '')[:32], m['sa2'][:24], m['pessoas'], 100 * m['frac'], 'DENTRO' if m['dentro_cen'] else 'fora', m['area_calc']))

# por estado e por categoria
print('\n  por estado (centroide dentro):')
por_estado = {}
for m in mbs:
    if m['dentro_cen']:
        e = por_estado.setdefault(m['estado'], [0, 0.0])
        e[0] += m['pessoas']
for e in sorted(por_estado):
    print('   %-20s %6d pessoas' % (ESTADOS[e], por_estado[e][0]))
print('  por categoria do MB (centroide dentro):')
por_cat = {}
for m in mbs:
    if m['dentro_cen']:
        c = por_cat.setdefault(m['cat'], [0, 0])
        c[0] += m['pessoas']
        c[1] += 1
for k, v in sorted(por_cat.items(), key=lambda kv: -kv[1][0]):
    print('   %-22s %6d pessoas em %4d MBs' % (k, v[0], v[1]))

# --- 4. as localidades ---
KM2_CIDADE = 50.0  # a "cidade" de uma SAL: os MBs com gente e menos de 50 km² (no sertão, o MB da vila de Birdsville e o de Bedourie são
#                     "Primary Production", de 37 e 26 km²; o de Innamincka é "Other", de 1,3 km²); os MBs de estância têm milhares de km²
print('\n== As localidades: a vila de cada SAL (os MBs com gente e menos de %.0f km²), dentro ou fora do CHC' % KM2_CIDADE)
por_sal = {}
for m in mbs:
    s = por_sal.setdefault(m['sal'], {'res': [], 'todos': []})
    s['todos'].append(m)
    if m['area_calc'] < KM2_CIDADE and m['pessoas'] > 0:
        s['res'].append(m)
bbox = (135.70, -30.66, 143.86, -21.51)
linhas_loc = []
for nome, s in por_sal.items():
    sal = next((x for x in sals if x['nome'] == nome), None)
    parcial = sal is not None and not (sal['g'].bounds[0] >= bbox[0] and sal['g'].bounds[1] >= bbox[1] and sal['g'].bounds[2] <= bbox[2] and sal['g'].bounds[3] <= bbox[3])
    p_sal_dentro = sum(m['pessoas'] for m in s['todos'] if m['dentro_cen'])
    p_sal = sum(m['pessoas'] for m in s['todos'])
    if s['res']:
        pr = sum(m['pessoas'] for m in s['res'])
        x = sum(m['cen'].x * m['pessoas'] for m in s['res']) / pr
        y = sum(m['cen'].y * m['pessoas'] for m in s['res']) / pr
        pt = Point(x, y)
        dentro = bool(chc.contains(pt))
        a, b = nearest_points(pt, chc_borda)
        lon1, lat1 = G.albers_inv(a.x, a.y)
        lon2, lat2 = G.albers_inv(b.x, b.y)
        dist = hav(lon1, lat1, lon2, lat2)
        linhas_loc.append({'sal': nome, 'pessoas_vila': pr, 'n_mb_vila': len(s['res']), 'lon': round(lon1, 4), 'lat': round(lat1, 4), 'dentro': dentro,
                           'dist_divisa_km': round(dist, 1), 'pessoas_sal_no_retangulo': p_sal, 'pessoas_sal_dentro_chc': p_sal_dentro, 'sal_parcial': parcial})
linhas_loc.sort(key=lambda r: (not r['dentro'], r['dist_divisa_km'] if not r['dentro'] else -r['pessoas_vila']))
for r in linhas_loc:
    print('   %-26s %-6s %6.1f km da divisa | vila: %4d pessoas em %2d MBs | a SAL toda no retângulo: %5d (%5d dentro do CHC)%s  (%.3f, %.3f)' % (
        r['sal'], 'DENTRO' if r['dentro'] else 'fora', r['dist_divisa_km'], r['pessoas_vila'], r['n_mb_vila'], r['pessoas_sal_no_retangulo'],
        r['pessoas_sal_dentro_chc'], ' [SAL passa do retângulo]' if r['sal_parcial'] else '', r['lon'], r['lat']))
print('\n  as SALs com gente dentro do CHC (centroide), com ou sem casas de cidade:')
for nome, s in sorted(por_sal.items(), key=lambda kv: -sum(m['pessoas'] for m in kv[1]['todos'] if m['dentro_cen'])):
    p = sum(m['pessoas'] for m in s['todos'] if m['dentro_cen'])
    if p > 0:
        print('   %-30s %5d' % (nome, p))
NOMES = ['Birdsville', 'Bedourie', 'Windorah', 'Innamincka', 'Boulia', 'Jundah', 'Stonehenge', 'Betoota', 'Tibooburra', 'Marree', 'Moomba',
         'Thargomindah', 'Eromanga', 'Noccundra', 'Winton', 'Middleton', 'Urandangi', 'Dajarra', 'Oodnadatta', 'William Creek', 'Cameron Corner',
         'Durham Downs', 'Quilpie', 'Mount Isa', 'Lyndhurst', 'Leigh Creek', 'Packsaddle', 'Milparinka', 'Wanaaring']
print('\n  os nomes da pauta e os vizinhos, na lista de SALs do retângulo:')
nomes_sal = [x['nome'] for x in sals]
for n in NOMES:
    achou = [x for x in nomes_sal if x and re.match(re.escape(n) + r'\b', x)]
    print('   %-16s -> %s' % (n, achou if achou else 'nenhuma SAL com esse nome no retângulo'))

# --- 5. os estados e a Grande Sydney ---
def quickstats(caminho):
    t = open(caminho, encoding='utf-8').read()
    t = html.unescape(re.sub(r'<[^>]+>', ' ', t))
    t = re.sub(r'\s+', ' ', t)
    m = re.search(r'Area code (\S+) People ([\d,]+)', t)
    return m.group(1), int(m.group(2).replace(',', ''))


qs = {}
for k in ('qs_nsw', 'qs_vic', 'qs_qld', 'qs_gsyd'):
    cod, n = quickstats(P[k])
    qs[cod] = n
print('\n== QuickStats 2021 (moradores habituais, "People"): %s' % qs)
soma_mb_estado = {}
with open(P['mb_csv'], encoding='utf-8') as f:
    for r in csv.DictReader(f):
        e = r['State'].split('.')[0]
        soma_mb_estado[e] = soma_mb_estado.get(e, 0) + int(round(float(r['Person'])))
ste = G.ler_shp_zip(G.STE_ZIP, G.STE_SHA)
gcc = G.ler_shp_zip(G.GCCSA_ZIP, G.GCCSA_SHA)
print('campos STE: %s' % sorted(ste[0][0].keys()))
print('campos GCCSA: %s' % sorted(gcc[0][0].keys()))
est = {}
for atr, g in ste:
    cod = str(atr['STE_CODE21'])
    est[cod] = {'nome': atr['STE_NAME21'], 'km2': float(atr['AREASQKM21']) if atr['AREASQKM21'] else None, 'g': g}
for cod in ('1', '2', '3'):
    e = est[cod]
    e['km2_calc'] = G.geom_albers(valida(e['g'])).area / 1e6
    e['pop_qs'] = qs[cod]
    e['pop_mb'] = soma_mb_estado[cod]
    print('  %-16s área ABS %10.1f km² (calculada %10.1f; dif %.4f %%) | QuickStats %9d | soma dos MBs %9d (dif %+d)' % (
        e['nome'], e['km2'], e['km2_calc'], 100 * (e['km2_calc'] / e['km2'] - 1), e['pop_qs'], e['pop_mb'], e['pop_mb'] - e['pop_qs']))
# o CHC por estado (área)
print('  o CHC por estado (área):')
chc_por_estado = {}
for cod, e in est.items():
    if e['g'] is None:
        continue
    ea = G.geom_albers(valida(e['g']))
    if ea.intersects(chc):
        a = ea.intersection(chc).area / 1e6
        if a > 1:
            chc_por_estado[cod] = a
            print('   %-20s %9.1f km² (%.1f %%)' % (e['nome'], a, 100 * a / chc_km2))
area3 = sum(est[c]['km2'] for c in ('1', '2', '3'))
pop3 = sum(est[c]['pop_qs'] for c in ('1', '2', '3'))
dens3_km2 = pop3 / area3
dens3_mi2 = pop3 / (area3 / KM2MI2)
# sensibilidade: os três estados sem a parte deles que é CHC
area3_sem = area3 - sum(chc_por_estado.get(c, 0) for c in ('1', '2', '3'))
pop3_sem = pop3 - sum(por_estado.get(c, [0])[0] for c in ('1', '2', '3'))
dens3_sem_mi2 = pop3_sem / (area3_sem / KM2MI2)
for atr, g in gcc:
    if atr['GCC_CODE21'] == '1GSYD':
        gsyd_km2 = float(atr['AREASQKM21'])
        gsyd_km2_calc = G.geom_albers(valida(g)).area / 1e6
gsyd_pop = qs['1GSYD']

# --- 6. as razões ---
def bloco(nome, pop):
    km2 = chc_ibra_km2
    mi2 = km2 / KM2MI2
    return {'nome': nome, 'pessoas': pop, 'km2': km2, 'mi2': mi2, 'por_km2': pop / km2, 'por_mi2': pop / mi2,
            'mi2_por_pessoa': mi2 / pop, 'km2_por_pessoa': km2 / pop, 'razao_densidade_3estados': dens3_mi2 / (pop / mi2),
            'razao_densidade_3estados_sem_chc': dens3_sem_mi2 / (pop / mi2), 'razao_densidade_gsyd': (gsyd_pop / (gsyd_km2 / KM2MI2)) / (pop / mi2)}


# a vila a menos de 2 km da divisa (a exatidão do IBRA nos metadados: "Less than two kilometres in most areas of Australia"; "accurate to at least 1:250,000"):
# dentro dessa faixa, o lado da divisa em que a vila cai não se decide pelo traçado. Fora pelo centroide, ela entra inteira nesta variante; dentro, sai inteira.
vilas_beira = [r for r in linhas_loc if not r['dentro'] and r['dist_divisa_km'] < 2.0]
vilas_beira_dentro = [r for r in linhas_loc if r['dentro'] and r['dist_divisa_km'] < 2.0]
extra_beira = 0
for r in vilas_beira:
    extra_beira += sum(m['pessoas'] for m in por_sal[r['sal']]['res'] if not m['dentro_cen'])
vilas_dentro = [r for r in linhas_loc if r['dentro']]
p_vilas_dentro = sum(sum(m['pessoas'] for m in por_sal[r['sal']]['res'] if m['dentro_cen']) for r in vilas_dentro)
print('\n  nas vilas dentro do CHC (%s): %d pessoas de %d (%.0f %%); o resto, %d, nos MBs grandes (estâncias e terra de produção primária)' % (
    ', '.join(r['sal'] for r in vilas_dentro), p_vilas_dentro, pop_cen, 100 * p_vilas_dentro / pop_cen, pop_cen - p_vilas_dentro))
menos_beira = 0
for r in vilas_beira_dentro:
    menos_beira += sum(m['pessoas'] for m in por_sal[r['sal']]['res'] if m['dentro_cen'])
print('\n  as vilas a menos de 2 km da divisa: fora %s (+%d pessoas se entrassem inteiras); dentro %s (-%d se saíssem)' % (
    [(r['sal'], r['pessoas_vila'], r['dist_divisa_km']) for r in vilas_beira], extra_beira,
    [(r['sal'], r['pessoas_vila'], r['dist_divisa_km']) for r in vilas_beira_dentro], menos_beira))
cenarios = [bloco('centroide (a medida)', pop_cen), bloco('ponderado pela área', pop_area), bloco('centroide + vilas < 2 km', pop_cen + extra_beira),
            bloco('só MBs inteiros', pop_min), bloco('todo MB que toca', pop_max)]
print('\n== As densidades')
print('três estados (NSW + Vic + Qld): %d pessoas em %.0f km² (%.0f mi²) = %.2f /km² = %.1f /mi²' % (pop3, area3, area3 / KM2MI2, dens3_km2, dens3_mi2))
print('  sem a parte deles que é CHC: %d pessoas em %.0f mi² = %.2f /mi²' % (pop3_sem, area3_sem / KM2MI2, dens3_sem_mi2))
print('Grande Sydney: %d pessoas em %.1f km² (calc. %.1f) = %.0f mi² = %.0f /km² = %.0f /mi²' % (
    gsyd_pop, gsyd_km2, gsyd_km2_calc, gsyd_km2 / KM2MI2, gsyd_pop / gsyd_km2, gsyd_pop / (gsyd_km2 / KM2MI2)))
for c in cenarios:
    print('CHC, %-22s %7.0f pessoas | %.4f /km² | %.4f /mi² | 1 pessoa a cada %.0f mi² (%.0f km²) | 3 estados: %.0fx (sem CHC %.0fx) | Grande Sydney: %.0fx' % (
        c['nome'], c['pessoas'], c['por_km2'], c['por_mi2'], c['mi2_por_pessoa'], c['km2_por_pessoa'], c['razao_densidade_3estados'],
        c['razao_densidade_3estados_sem_chc'], c['razao_densidade_gsyd']))
print('Grande Sydney / CHC: área %.1fx menor; gente %.0fx mais' % (chc_ibra_km2 / gsyd_km2, gsyd_pop / pop_cen))
print('três estados / CHC: gente %.0fx mais' % (pop3 / pop_cen))

# a estimativa mais nova do ABS (ERP), só para os três estados (não há ERP por biorregião): dita como estimativa, com a data
t = open(P['erp'], encoding='utf-8').read()
t = re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', t)))
ref = re.search(r'Reference period (\w+ \d{4}) Released (\d\d/\d\d/\d{4})', t)
mt = re.search(r"Population at (\d+ \w+ \d{4}) \('000\).*?New South Wales ([\d.]+) [\d.-]+ [\d.-]+ Victoria ([\d.]+) [\d.-]+ [\d.-]+ Queensland ([\d.]+)", t)
erp = {'data': mt.group(1), 'periodo': ref.group(1), 'publicado': ref.group(2), 'New South Wales': round(float(mt.group(2)) * 1000),
       'Victoria': round(float(mt.group(3)) * 1000), 'Queensland': round(float(mt.group(4)) * 1000)}
erp3 = erp['New South Wales'] + erp['Victoria'] + erp['Queensland']
erp['soma'] = erp3
erp['por_mi2'] = erp3 / (area3 / KM2MI2)
print('ERP do ABS em %s (publicado em %s, em milhares na página): NSW %d, Vic %d, Qld %d = %d; %.1f /mi²' % (
    erp['data'], erp['publicado'], erp['New South Wales'], erp['Victoria'], erp['Queensland'], erp3, erp['por_mi2']))

# a parte da Austrália: a área (soma das STE 1 a 9 do ABS) e a gente (a coluna "Australia, 2021" do QuickStats de NSW: homens + mulheres)
area_au = sum(e['km2'] for c, e in est.items() if c in ESTADOS and e['km2'])
t = open(P['qs_nsw'], encoding='utf-8').read()
t = re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', t)))
mm = re.search(r'Male ([\d,]+) [\d.]+ ([\d,]+) [\d.]+ ([\d,]+) [\d.]+ Female ([\d,]+) [\d.]+ ([\d,]+) [\d.]+ ([\d,]+) [\d.]+', t)
pop_au = int(mm.group(3).replace(',', '')) + int(mm.group(6).replace(',', ''))
soma_mb_au = sum(soma_mb_estado.values())
print('Austrália: %.0f km² (%.0f mi²); %d pessoas (QuickStats, homens + mulheres; a soma dos MBs dá %d)' % (area_au, area_au / KM2MI2, pop_au, soma_mb_au))
parte = {'area_pct': 100 * chc_ibra_km2 / area_au, 'area_au_km2': area_au, 'pop_au': pop_au}
for c in cenarios:
    print('  CHC, %-24s %.2f %% da terra; %.4f %% da gente = 1 em %.0f australianos' % (c['nome'], parte['area_pct'], 100 * c['pessoas'] / pop_au, pop_au / c['pessoas']))
    c['um_em_n_australianos'] = pop_au / c['pessoas']

# --- 7. gravar ---
saida = {
    'gerado_por': 'pautas/australia-animais/_trabalho/scripts/c_censo_medida.py',
    'arquivos_sha256': {v[0]: v[1] for v in ARQ.values()},
    'poligono': {'arquivo': G.POLIGONO, 'sha256': G.POLIGONO_SHA, 'km2_ibra': chc_ibra_km2, 'km2_albers': chc_km2, 'mi2': chc_ibra_km2 / KM2MI2,
                 'por_estado_km2': {ESTADOS[k]: v for k, v in chc_por_estado.items()}},
    'mb': {'n': len(mbs), 'n_centroide_dentro': n_cen, 'n_com_gente_dentro': n_pop_cen, 'falta_cobertura_km2': falta,
           'pessoas_centroide': pop_cen, 'domicilios_centroide': dom_cen, 'pessoas_area': pop_area, 'pessoas_so_inteiros': pop_min, 'pessoas_todo_que_toca': pop_max,
           'n_borda': len(borda), 'pessoas_por_estado_centroide': {ESTADOS[k]: v[0] for k, v in por_estado.items()},
           'pessoas_por_categoria_centroide': {k: v[0] for k, v in por_cat.items()}},
    'localidades': linhas_loc,
    'tres_estados': {'pessoas_quickstats': pop3, 'km2': area3, 'mi2': area3 / KM2MI2, 'por_km2': dens3_km2, 'por_mi2': dens3_mi2,
                     'sem_chc': {'pessoas': pop3_sem, 'mi2': area3_sem / KM2MI2, 'por_mi2': dens3_sem_mi2},
                     'estados': {est[c]['nome']: {'pessoas_quickstats': est[c]['pop_qs'], 'pessoas_soma_mb': est[c]['pop_mb'], 'km2': est[c]['km2'],
                                                  'km2_calc': est[c]['km2_calc'], 'por_mi2': est[c]['pop_qs'] / (est[c]['km2'] / KM2MI2)} for c in ('1', '2', '3')}},
    'grande_sydney': {'pessoas_quickstats': gsyd_pop, 'km2': gsyd_km2, 'km2_calc': gsyd_km2_calc, 'mi2': gsyd_km2 / KM2MI2,
                      'por_km2': gsyd_pop / gsyd_km2, 'por_mi2': gsyd_pop / (gsyd_km2 / KM2MI2)},
    'cenarios_chc': cenarios,
    'vilas_a_menos_de_2km_fora': vilas_beira,
    'vilas_a_menos_de_2km_dentro': vilas_beira_dentro,
    'pessoas_nas_vilas_dentro': p_vilas_dentro,
    'erp_tres_estados': erp,
    'parte_da_australia': parte,
}
json.dump(saida, open(os.path.join(G.CENSO, 'medida-censo.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
with open(os.path.join(G.CENSO, 'mb-chc.csv'), 'w', newline='', encoding='utf-8') as f:
    w = csv.writer(f)
    w.writerow(['MB_CODE_2021', 'categoria', 'estado', 'SA2', 'SAL', 'pessoas', 'domicilios', 'km2', 'fracao_dentro_chc', 'centroide_dentro', 'centroide_lon', 'centroide_lat'])
    for m in sorted(mbs, key=lambda x: x['cod']):
        if m['frac'] > 0 or m['dentro_cen']:
            w.writerow([m['cod'], m['cat'], ESTADOS[m['estado']], m['sa2'], m['sal'], m['pessoas'], m['domicilios'], round(m['area_calc'], 3),
                        round(m['frac'], 5), m['dentro_cen'], round(m['cen_ll'][0], 5), round(m['cen_ll'][1], 5)])
print('\ngravados: medida-censo.json (sha256 %s) e mb-chc.csv (sha256 %s)' % (
    G.sha256(os.path.join(G.CENSO, 'medida-censo.json')), G.sha256(os.path.join(G.CENSO, 'mb-chc.csv'))))
