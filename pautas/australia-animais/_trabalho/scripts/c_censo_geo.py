# Medida do Censo (vídeo 8). Geometria sem pyproj: a Albers de área igual da Austrália (GDA94/GDA2020 Australian Albers, EPSG:3577/9473: paralelos-padrão
# 18° S e 36° S, meridiano central 132° E, origem 0, GRS80), escrita à mão pelas fórmulas de Snyder (USGS PP 1395, 1987, eq. 14-1 a 14-6 e 3-12, elipsoide);
# a leitura do polígono do Channel Country (IBRA 7.1, CHC), com o sha256 conferido; um leitor mínimo de .xlsx (zipfile + xml, sem openpyxl).
# Importado pelos outros c_censo_*.py. Rodado sozinho, confere a projeção e a área do IBRA.
# Uso (da raiz do canal): python -X utf8 -B -I pautas/australia-animais/_trabalho/scripts/c_censo_geo.py
# Com -I o Python não lê a pasta do script nem o site do usuário; as bibliotecas (shapely, numpy, pyshp) estão no site do usuário, que se põe à mão.
import sys, site, math, json, hashlib, os, re, zipfile
import xml.etree.ElementTree as ET

if site.getusersitepackages() not in sys.path:
    sys.path.append(site.getusersitepackages())
import numpy as np

A = 6378137.0
F = 1 / 298.257222101
E2 = F * (2 - F)
E = math.sqrt(E2)
PHI1, PHI2, PHI0, LAM0 = math.radians(-18.0), math.radians(-36.0), 0.0, math.radians(132.0)

CANAL = r'C:\projetos\alpha-point'
BASES = os.path.join(CANAL, r'roteiros\australia-animais\miniatura\_bases')
CENSO = os.path.join(CANAL, r'midia\australia-animais\fontes\c\censo')
POLIGONO = os.path.join(BASES, 'ibra7-channel-country.geojson')
POLIGONO_SHA = '815fc5b53d5fe30248e5f88a439051045f7c8e3fce16778f130e676bdccc9683'
STE_ZIP = os.path.join(BASES, 'STE_2021_AUST_SHP_GDA2020.zip')
STE_SHA = 'd9b7f735de6085b37414faf011f796dda3c7f768c55e9dce01f96e790f399a21'
GCCSA_ZIP = os.path.join(BASES, 'GCCSA_2021_AUST_SHP_GDA2020.zip')
GCCSA_SHA = 'cc48b928d33ccd90cebd556e2cce696b132ac86519b7416588e011394e4518e7'
HECTARES_IBRA = 30409436.976
KM2_POR_MI2 = 2.58999


def _q(phi):
    s = np.sin(phi)
    return (1 - E2) * (s / (1 - E2 * s * s) - (1 / (2 * E)) * np.log((1 - E * s) / (1 + E * s)))


def _m(phi):
    s = math.sin(phi)
    return math.cos(phi) / math.sqrt(1 - E2 * s * s)


_m1, _m2 = _m(PHI1), _m(PHI2)
_q0, _q1, _q2 = float(_q(PHI0)), float(_q(PHI1)), float(_q(PHI2))
N = (_m1 ** 2 - _m2 ** 2) / (_q2 - _q1)
C = _m1 ** 2 + N * _q1
RHO0 = A * math.sqrt(C - N * _q0) / N


def albers_xy(lon, lat):
    """lon/lat em graus (arrays ou números) -> x, y em metros na Australian Albers (área igual)."""
    phi, lam = np.radians(lat), np.radians(lon)
    rho = A * np.sqrt(C - N * _q(phi)) / N
    theta = N * (lam - LAM0)
    return rho * np.sin(theta), RHO0 - rho * np.cos(theta)


def albers_inv(x, y):
    """inversa iterativa (Snyder eq. 14-8 a 14-10 e 3-16), para devolver a lon/lat o centroide calculado em Albers."""
    rho = math.hypot(x, RHO0 - y)
    theta = math.atan2(x, RHO0 - y)
    if N < 0:
        rho, theta = -rho, math.atan2(-x, -(RHO0 - y))
    q = (C - (rho * N / A) ** 2) / N
    phi = math.asin(max(-1.0, min(1.0, q / 2)))
    for _ in range(50):
        s = math.sin(phi)
        d = ((1 - E2 * s * s) ** 2 / (2 * math.cos(phi))) * (
            q / (1 - E2) - s / (1 - E2 * s * s) + (1 / (2 * E)) * math.log((1 - E * s) / (1 + E * s)))
        phi += d
        if abs(d) < 1e-13:
            break
    return math.degrees(LAM0 + theta / N), math.degrees(phi)


def geom_albers(geom):
    """shapely geometry em lon/lat -> a mesma em Albers (metros)."""
    import shapely

    def f(xy):
        x, y = albers_xy(xy[:, 0], xy[:, 1])
        return np.column_stack([x, y])
    return shapely.transform(geom, f)


def sha256(caminho):
    h = hashlib.sha256()
    with open(caminho, 'rb') as fh:
        for bloco in iter(lambda: fh.read(1 << 20), b''):
            h.update(bloco)
    return h.hexdigest()


def conferir_sha(caminho, esperado):
    s = sha256(caminho)
    if s != esperado:
        raise SystemExit('sha256 NAO confere: %s (%s)' % (caminho, s))
    return s


def carregar_channel_country():
    """(polígono em lon/lat, o mesmo em Albers), com o sha256 conferido."""
    from shapely.geometry import shape
    from shapely.validation import make_valid
    conferir_sha(POLIGONO, POLIGONO_SHA)
    d = json.load(open(POLIGONO, encoding='utf-8'))
    feats = d['features']
    assert len(feats) == 1 and feats[0]['properties']['REG_CODE_7'] == 'CHC', 'esperava 1 feição CHC'
    g = shape(feats[0]['geometry'])
    if not g.is_valid:
        g = make_valid(g)
    return g, geom_albers(g)


def ler_shp_zip(caminho_zip, esperado_sha):
    """Lê um shapefile do ABS de dentro do zip (pyshp), sem extrair. Devolve [(atributos, geometria shapely em lon/lat)]."""
    import io
    import shapefile
    from shapely.geometry import shape
    conferir_sha(caminho_zip, esperado_sha)
    z = zipfile.ZipFile(caminho_zip)
    nomes = z.namelist()
    base = [n[:-4] for n in nomes if n.lower().endswith('.shp')][0]
    r = shapefile.Reader(shp=io.BytesIO(z.read(base + '.shp')), shx=io.BytesIO(z.read(base + '.shx')),
                         dbf=io.BytesIO(z.read(base + '.dbf')), encoding='utf-8')
    campos = [f[0] for f in r.fields[1:]]
    saida = []
    for sr in r.iterShapeRecords():
        atr = dict(zip(campos, sr.record))
        g = None
        if sr.shape.shapeType != 0 and sr.shape.points:
            g = shape(sr.shape.__geo_interface__)
        saida.append((atr, g))
    return saida


# --- xlsx mínimo (só a biblioteca padrão) ---
_NS = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
       'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}


def _col(ref):
    n = 0
    for c in re.match(r'[A-Z]+', ref).group(0):
        n = n * 26 + ord(c) - 64
    return n - 1


def xlsx_folhas(caminho):
    z = zipfile.ZipFile(caminho)
    wb = ET.fromstring(z.read('xl/workbook.xml'))
    rels = ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
    alvo = {r.get('Id'): r.get('Target') for r in rels}
    out = []
    for s in wb.find('m:sheets', _NS):
        t = alvo[s.get('{%s}id' % _NS['r'])]
        t = t.lstrip('/') if t.lstrip('/').startswith('xl/') else 'xl/' + t
        out.append((s.get('name'), t))
    return out


def xlsx_linhas(caminho, folha):
    """Gera as linhas (listas de valores; números como float) de uma folha, em ordem, por iterparse (folhas grandes)."""
    z = zipfile.ZipFile(caminho)
    ss = []
    if 'xl/sharedStrings.xml' in z.namelist():
        root = ET.fromstring(z.read('xl/sharedStrings.xml'))
        ss = [''.join(t.text or '' for t in si.iter('{%s}t' % _NS['m'])) for si in root.findall('m:si', _NS)]
    alvo = dict(xlsx_folhas(caminho))[folha]
    m = '{%s}' % _NS['m']
    with z.open(alvo) as fh:
        for ev, el in ET.iterparse(fh, events=('end',)):
            if el.tag != m + 'row':
                continue
            linha = {}
            for c in el.findall(m + 'c'):
                t = c.get('t')
                v = c.find(m + 'v')
                if t == 'inlineStr':
                    val = ''.join(x.text or '' for x in c.iter(m + 't'))
                elif v is None:
                    val = None
                elif t == 's':
                    val = ss[int(v.text)]
                elif t in ('str', 'e'):
                    val = v.text
                elif t == 'b':
                    val = v.text == '1'
                else:
                    try:
                        val = float(v.text)
                    except (TypeError, ValueError):
                        val = v.text
                linha[_col(c.get('r'))] = val
            el.clear()
            if linha:
                n = max(linha) + 1
                yield [linha.get(i) for i in range(n)]
            else:
                yield []


if __name__ == '__main__':
    from shapely.geometry import box
    print('Albers(132 E, 0) =', tuple(float(v) for v in albers_xy(132.0, 0.0)), '(0, 0 por definição)')
    x, y = (float(v) for v in albers_xy(140.0, -26.0))
    print('Albers(140 E, 26 S) = (%.3f, %.3f); a inversa volta a (%.9f, %.9f)' % ((x, y) + albers_inv(x, y)))
    # a área de um quadrilátero lat/lon pequeno contra a área elipsoidal exata (A²/2 · Δλ · [q(φ2) − q(φ1)]): a projeção tem de ser de área igual
    for lon0, lat0 in ((140.0, -26.0), (151.0, -33.8), (115.0, -12.0)):
        d = 0.05
        q_alb = geom_albers(box(lon0, lat0, lon0 + d, lat0 + d)).area
        exata = (A ** 2 / 2) * math.radians(d) * abs(float(_q(math.radians(lat0 + d))) - float(_q(math.radians(lat0))))
        print('  quadrado de 0,05° em (%.1f, %.1f): Albers %.2f m², elipsoide %.2f m², diferença %.2e %%' % (lon0, lat0, q_alb, exata, 100 * (q_alb / exata - 1)))
    g, ga = carregar_channel_country()
    km2 = ga.area / 1e6
    print('Channel Country: sha256 confere; %d parte(s); bbox lon/lat = %s' % (len(getattr(g, 'geoms', [g])), tuple(round(v, 4) for v in g.bounds)))
    print('  área na Albers = %.1f km²; HECTARES do IBRA = %.1f km²; diferença %.4f %%' % (km2, HECTARES_IBRA / 100, 100 * (km2 / (HECTARES_IBRA / 100) - 1)))
    print('  = %.0f mi² (pela área do IBRA: %.0f mi²)' % (km2 / KM2_POR_MI2, HECTARES_IBRA / 100 / KM2_POR_MI2))
