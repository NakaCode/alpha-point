# A area da "Gray Zone" de Machias Seal pela definicao oficial do Maine (DMR, Chapter 25, 25.02 D, adotada em 2019),
# lida em out/_pautas/video-8/_trabalho/cetico-machias-seal/fontes/maine-dmr-ch25.txt.
# O poligono: a fronteira leste (pontos 1 a 12) e a oeste (pontos 42 a 1, ao contrario). Os dois lados se encontram no ponto 1
# (o fim da fronteira terrestre, no canal de Grand Manan) e no ponto 12 = 42 (o ponto A da Corte de Haia, 1984). Dali para o sul
# (pontos 13-15 e 43-45) as duas linhas sao a mesma linha da Corte, e a area entre elas e zero.
# A area e calculada na esfera autalica do WGS84 (area igual a do elipsoide), com lados em circulo maximo; a diferenca para a
# geodesica do elipsoide e desprezivel num poligono de ~70 km.
# Uso: python -X utf8 -B area_zona_cinzenta.py
import math
from shapely.geometry import Polygon, Point

def dms(d, m, s):
    return d + m / 60 + s / 3600

LESTE = [
    (44, 46, 35.346, 66, 54, 11.253), (44, 44, 41, 66, 56, 17), (44, 43, 56, 66, 56, 26), (44, 39, 13, 66, 57, 29),
    (44, 36, 58, 67, 0, 36), (44, 33, 27, 67, 2, 57), (44, 30, 38, 67, 2, 38), (44, 29, 3, 67, 3, 42),
    (44, 25, 27, 67, 2, 16), (44, 21, 43, 67, 2, 33), (44, 14, 6, 67, 8, 38), (44, 11, 12, 67, 16, 46),
]
OESTE = [
    (44, 46, 35.346, 66, 54, 11.253), (44, 45, 44, 66, 55, 4), (44, 45, 21, 66, 55, 35), (44, 45, 17, 66, 55, 40),
    (44, 45, 5, 66, 56, 2), (44, 44, 30, 66, 56, 36), (44, 44, 23, 66, 56, 41), (44, 44, 7, 66, 56, 54),
    (44, 44, 3, 66, 56, 57), (44, 43, 38, 66, 57, 14), (44, 43, 22, 66, 57, 27), (44, 42, 58, 66, 57, 48),
    (44, 42, 39, 66, 58, 3), (44, 42, 17, 66, 58, 26), (44, 41, 57, 66, 58, 55), (44, 41, 43, 66, 59, 16),
    (44, 40, 38, 67, 0, 12), (44, 40, 33, 67, 0, 17), (44, 40, 14, 67, 0, 26), (44, 39, 44, 67, 0, 44),
    (44, 39, 36, 67, 0, 47), (44, 39, 11, 67, 1, 10), (44, 38, 31, 67, 1, 42), (44, 38, 11, 67, 1, 55),
    (44, 37, 46, 67, 2, 14), (44, 37, 27, 67, 2, 22), (44, 36, 23, 67, 6, 26), (44, 36, 2, 67, 7, 9),
    (44, 34, 57, 67, 9, 27), (44, 33, 8, 67, 11, 22), (44, 32, 57, 67, 11, 31), (44, 32, 34, 67, 11, 47),
    (44, 30, 47, 67, 13, 57), (44, 29, 49, 67, 15, 9), (44, 29, 47, 67, 15, 11), (44, 28, 10, 67, 16, 1),
    (44, 23, 56, 67, 18, 6), (44, 23, 36, 67, 18, 16), (44, 22, 36, 67, 18, 15), (44, 20, 50, 67, 18, 2),
    (44, 12, 6, 67, 16, 56), (44, 11, 12, 67, 16, 46),
]

def ll(p):
    return (dms(p[0], p[1], p[2]), -dms(p[3], p[4], p[5]))  # (lat, lon)

leste = [ll(p) for p in LESTE]
oeste = [ll(p) for p in OESTE]
assert leste[0] == oeste[0] and leste[-1] == oeste[-1]
anel = leste + oeste[::-1][1:-1]  # leste 1..12, depois oeste 41..2

# WGS84 e a esfera autalica
A = 6378137.0
F = 1 / 298.257223563
E2 = F * (2 - F)
E = math.sqrt(E2)
def q(phi):
    s = math.sin(phi)
    return (1 - E2) * (s / (1 - E2 * s * s) - (1 / (2 * E)) * math.log((1 - E * s) / (1 + E * s)))
QP = q(math.pi / 2)
RQ = A * math.sqrt(QP / 2)
def autalica(lat):
    return math.asin(q(math.radians(lat)) / QP)

def area_esfera(pts):
    # soma de excessos por trapezios (formula de Chamberlain & Duquette / L'Huilier simplificada), raio RQ
    tot = 0.0
    n = len(pts)
    for i in range(n):
        la1, lo1 = autalica(pts[i][0]), math.radians(pts[i][1])
        la2, lo2 = autalica(pts[(i + 1) % n][0]), math.radians(pts[(i + 1) % n][1])
        tot += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
    return abs(tot) * RQ * RQ / 2

# conferencia por projecao: Lambert azimutal de area igual na esfera autalica, centrada no poligono
def lambert(pts, lat0, lon0):
    b0 = autalica(lat0); l0 = math.radians(lon0)
    out = []
    for la, lo in pts:
        b = autalica(la); l = math.radians(lo)
        k = math.sqrt(2 / (1 + math.sin(b0) * math.sin(b) + math.cos(b0) * math.cos(b) * math.cos(l - l0)))
        x = RQ * k * math.cos(b) * math.sin(l - l0)
        y = RQ * k * (math.cos(b0) * math.sin(b) - math.sin(b0) * math.cos(b) * math.cos(l - l0))
        out.append((x, y))
    return out

lat0 = sum(p[0] for p in anel) / len(anel); lon0 = sum(p[1] for p in anel) / len(anel)
xy = lambert(anel, lat0, lon0)
poly = Polygon(xy)
a1 = area_esfera(anel)
a2 = poly.area
KM2_MI2 = 2.589988110336
KM2_NM2 = 1.852 ** 2
print(f"vertices do anel: {len(anel)}; valido: {poly.is_valid}")
print(f"area (excesso esferico, esfera autalica): {a1/1e6:.1f} km2 = {a1/1e6/KM2_MI2:.1f} mi2 (statute) = {a1/1e6/KM2_NM2:.1f} nmi2")
print(f"area (Lambert de area igual + shapely):    {a2/1e6:.1f} km2 = {a2/1e6/KM2_MI2:.1f} mi2 (statute) = {a2/1e6/KM2_NM2:.1f} nmi2")

# Machias Seal Island e North Rock (coordenadas da Wikipedia/GNIS, a conferir) dentro?
msi = (44.5017, -67.1014)
nr = (44.5297, -67.0863)
for nome, p in [("Machias Seal Island", msi), ("North Rock", nr)]:
    pxy = lambert([p], lat0, lon0)[0]
    print(f"{nome} {p}: dentro = {poly.contains(Point(pxy))}; distancia ate a borda = {poly.exterior.distance(Point(pxy))/1000:.1f} km")

# comprimento norte-sul e largura maxima aproximada
ys = [p[1] for p in xy]; xs = [p[0] for p in xy]
print(f"extensao norte-sul: {(max(ys)-min(ys))/1000:.1f} km = {(max(ys)-min(ys))/1852:.1f} nmi; leste-oeste: {(max(xs)-min(xs))/1000:.1f} km")
# Comparacoes com 1 milha nautica = 1852 m
for ref_nome, ref_mi2 in [("Maine DMR 2019, 'approximately 210 square miles'", 210), ("imprensa recente, 277", 277), ("imprensa 2014, ~70", 70), ("CSMonitor 2008, 110", 110)]:
    print(f"  {ref_nome}: {ref_mi2} mi2 = {ref_mi2*KM2_MI2:.0f} km2; razao nossa/ref = {a1/1e6/KM2_MI2/ref_mi2:.2f}")

# --- validade: onde o anel se cruza, e a area das partes (make_valid)
from shapely.validation import explain_validity, make_valid
print("validade:", explain_validity(poly))
mv = make_valid(poly)
partes = [g for g in getattr(mv, "geoms", [mv]) if g.geom_type == "Polygon"]
print(f"partes depois do make_valid: {len(partes)}; area somada = {sum(g.area for g in partes)/1e6:.1f} km2")
for g in partes:
    print(f"   parte: {g.area/1e6:.2f} km2")
from shapely.geometry import LineString
le = LineString(lambert(leste, lat0, lon0)); oe = LineString(lambert(oeste, lat0, lon0))
inter = le.intersection(oe)
print("intersecao leste x oeste:", inter.geom_type, [ (round(c[0]), round(c[1])) for c in (getattr(inter,'geoms',[inter]) and [pt.coords[0] for pt in getattr(inter,'geoms',[inter]) if pt.geom_type=='Point']) ])
