# O canto da fronteira Califórnia–Nevada no lago Tahoe, pelos números do decreto da Suprema Corte
# (California v. Nevada, 456 U.S. 867, 01/06/1982; NAD27). Conta preliminar, em plano local.
# Uso: python -X utf8 -B canto_decreto.py
import math

def dms(g, m, s):
    return g + m / 60 + s / 3600

R = 6378206.4  # Clarke 1866 (NAD27), semi-eixo maior
F = 1 / 294.978698214
E2 = F * (2 - F)

def raios(lat):
    p = math.radians(lat)
    w = math.sqrt(1 - E2 * math.sin(p) ** 2)
    M = R * (1 - E2) / w ** 3  # meridiano
    N = R / w                  # primeiro vertical
    return M, N

# Pontos do decreto (NAD27)
VS120 = (dms(38, 53, 51.59866), -dms(120, 0, 20.93116))
EAGLE = (dms(39, 6, 33.17268), -dms(120, 9, 38.06504))
LAT0 = 39.0
M, N = raios(LAT0)

def para_xy(p, origem):
    lat, lon = p
    return ((lon - origem[1]) * math.pi / 180 * N * math.cos(math.radians(LAT0)),
            (lat - origem[0]) * math.pi / 180 * M)

def para_ll(x, y, origem):
    return (origem[0] + y / M * 180 / math.pi,
            origem[1] + x / (N * math.cos(math.radians(LAT0))) * 180 / math.pi)

ORIG = (39.0, -120.0)  # a interseção "verdadeira" do paralelo 39 com o meridiano 120 (NAD27)
a = para_xy(VS120, ORIG)
b = para_xy(EAGLE, ORIG)
# Linha 1: de VS120 para o norte, azimute N 0°09'15.21" E (o rumo do decreto é S 0°09'15.21" W, indo para VS120)
az1 = math.radians(dms(0, 9, 15.21))
d1 = (math.sin(az1), math.cos(az1))
# Linha 2: de Eagle Rock para sudeste; do canto ao Monumento 1 o rumo é S 48°46'02.80" E (azimute 131°13'57.2")
# Corrige a convergência de meridianos entre Eagle Rock e o canto (~ dlon * sin(lat)), de forma iterativa.
az2_canto = 180 - dms(48, 46, 2.80)
canto = None
for _ in range(5):
    if canto is None:
        conv = 0.0
    else:
        conv = (EAGLE[1] - canto[1]) * math.sin(math.radians(LAT0))  # em graus
    az2 = math.radians(az2_canto + conv)
    d2 = (math.sin(az2), math.cos(az2))
    # a + t*d1 = b + s*d2
    det = d1[0] * (-d2[1]) - d1[1] * (-d2[0])
    rx, ry = b[0] - a[0], b[1] - a[1]
    t = (rx * (-d2[1]) - ry * (-d2[0])) / det
    x, y = a[0] + t * d1[0], a[1] + t * d1[1]
    canto = para_ll(x, y, ORIG)

def fmt(v, eixo):
    s = "N" if (eixo == "lat" and v >= 0) else ("S" if eixo == "lat" else ("W" if v < 0 else "E"))
    v = abs(v)
    g = int(v); m = int((v - g) * 60); sec = ((v - g) * 60 - m) * 60
    return f"{g}°{m:02d}'{sec:05.2f}\"{s}"

print("Canto calculado (NAD27):", fmt(canto[0], "lat"), fmt(canto[1], "lon"), f"({canto[0]:.6f}, {canto[1]:.6f})")
print(f"  distância de VS120 ao canto: {t:,.1f} m")
dx, dy = x, y
print(f"  em relação à interseção 39°N x 120°W (NAD27): {dy:+.0f} m norte, {dx:+.0f} m leste; distância {math.hypot(dx, dy):.0f} m ({math.hypot(dx, dy)/0.3048:,.0f} pés)")
# Monumento 1 (Initial 1894): 21.568,48 pés do canto, rumo S 48°46'02.80" E
dist = 21568.48 * 0.3048
az = math.radians(az2_canto)
mx, my = x + dist * math.sin(az), y + dist * math.cos(az)
m1 = para_ll(mx, my, ORIG)
print("Monumento 1 (Initial 1894), calculado (NAD27):", fmt(m1[0], "lat"), fmt(m1[1], "lon"), f"({m1[0]:.5f}, {m1[1]:.5f})")
# A linha de Von Schmidt em relação ao meridiano 120 (NAD27), no marco VS120 e no canto
for nome, p in (("VS120 (marco de 1981 na linha de Von Schmidt)", VS120), ("canto no lago", canto)):
    off = (p[1] + 120) * math.pi / 180 * raios(p[0])[1] * math.cos(math.radians(p[0]))
    print(f"  {nome}: {off:+.0f} m do meridiano 120 W (NAD27) = {off/0.3048:+,.0f} pés (negativo = a oeste)")
