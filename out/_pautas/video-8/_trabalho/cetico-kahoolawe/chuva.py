# A sombra de chuva de Kaho'olawe, medida na grade aberta do Rainfall Atlas of Hawai'i
# (Giambelluca et al. 2013; media anual 1978-2007, 250 m; MauiNuiASCIIGrids_inches.zip,
# baixado em 17/11/2026 de atlas.uhtapis.org, sha256 0c47d7db...e0ef; fica em midia/, fora do git).
# Uso: python -I -X utf8 -B chuva.py <rfgrid_inches_mauinui_ann.txt>
import sys, math

arq = sys.argv[1]
hdr = {}
with open(arq, encoding="ascii") as f:
    for _ in range(6):
        k, v = f.readline().split()
        hdr[k.lower()] = float(v)
    nc, nr = int(hdr["ncols"]), int(hdr["nrows"])
    x0, y0, cs, nd = hdr["xllcorner"], hdr["yllcorner"], hdr["cellsize"], hdr["nodata_value"]
    linhas = [list(map(float, f.readline().split())) for _ in range(nr)]

def centro(i, j):
    # i = linha (0 no topo), j = coluna
    lon = x0 + (j + 0.5) * cs
    lat = y0 + (nr - i - 0.5) * cs
    return lat, lon

def milhas(a, b):
    R = 3958.8
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def celulas(lat_min, lat_max, lon_min, lon_max):
    out = []
    for i in range(nr):
        for j in range(nc):
            v = linhas[i][j]
            if v == nd:
                continue
            la, lo = centro(i, j)
            if lat_min <= la <= lat_max and lon_min <= lo <= lon_max:
                out.append((v, la, lo))
    return out

def area_mi2(cels):
    # area de cada celula de 0,00225 grau, pela latitude
    tot = 0.0
    for _, la, _ in cels:
        dy = cs * 69.05
        dx = cs * 69.17 * math.cos(math.radians(la))
        tot += dx * dy
    return tot

def resumo(nome, cels):
    vs = sorted(c[0] for c in cels)
    n = len(vs)
    media = sum(vs) / n
    mx = max(cels)
    mn = min(cels)
    print(f"{nome}: {n} celulas (~{area_mi2(cels):.1f} mi2); media {media:.1f} in/ano; mediana {vs[n//2]:.1f}; "
          f"min {mn[0]:.1f} ({mn[1]:.4f}, {mn[2]:.4f}); max {mx[0]:.1f} ({mx[1]:.4f}, {mx[2]:.4f})")
    return media, mx

# Kaho'olawe: a caixa exclui Molokini (20,633 N; 156,496 W) e o sul de Maui.
kaho = celulas(20.48, 20.615, -156.72, -156.52)
m_k, max_k = resumo("Kahoolawe", kaho)

# Maui Oeste (Pu'u Kukui) e Maui Leste (Haleakala), separados pelo istmo em ~ -156.45
maui_w = celulas(20.75, 21.05, -156.70, -156.47)
m_w, max_w = resumo("Maui Oeste", maui_w)
maui_e = celulas(20.57, 21.00, -156.45, -155.95)
m_e, max_e = resumo("Maui Leste", maui_e)
lanai = celulas(20.70, 20.95, -157.08, -156.79)
m_l, _ = resumo("Lanai", lanai)

pk = (20.8906, -156.5867)      # Pu'u Kukui (GNIS, aproximado)
hal = (20.7097, -156.2533)     # cume do Haleakala, Pu'u 'Ula'ula (aproximado)
ck = (sum(c[1] for c in kaho) / len(kaho), sum(c[2] for c in kaho) / len(kaho))
print(f"centro de Kahoolawe pela grade: {ck[0]:.4f}, {ck[1]:.4f}")
print(f"distancia centro Kahoolawe -> Pu'u Kukui: {milhas(ck, pk):.1f} mi")
print(f"distancia centro Kahoolawe -> cume do Haleakala: {milhas(ck, hal):.1f} mi")
print(f"distancia celula mais umida de Maui Oeste -> centro de Kahoolawe: {milhas((max_w[1], max_w[2]), ck):.1f} mi")
print(f"distancia celula mais umida de Maui Leste -> centro de Kahoolawe: {milhas((max_e[1], max_e[2]), ck):.1f} mi")
print(f"razao: mais umida de Maui Oeste / media de Kahoolawe = {max_w[0] / m_k:.1f}x")
print(f"razao: mais umida de Maui Leste / media de Kahoolawe = {max_e[0] / m_k:.1f}x")
print(f"fracao de Kahoolawe abaixo de 20 in: {sum(1 for c in kaho if c[0] < 20) / len(kaho) * 100:.0f} %")
print(f"fracao de Kahoolawe abaixo de 25 in: {sum(1 for c in kaho if c[0] < 25) / len(kaho) * 100:.0f} %")

# O corte do vento: do lado de barlavento do Haleakala (NE) ate Kahoolawe (SW), passando pelo cume
print("\ncorte NE -> SW (passo ~1 mi), do mar de barlavento ao centro de Kahoolawe pelo cume do Haleakala:")
ini = (20.86, -156.05)
pts = [ini, hal, ck]
def amostra(lat, lon):
    j = int((lon - x0) / cs)
    i = nr - 1 - int((lat - y0) / cs)
    if 0 <= i < nr and 0 <= j < nc:
        v = linhas[i][j]
        return None if v == nd else v
    return None
dist_acum = 0.0
for a, b in ((pts[0], pts[1]), (pts[1], pts[2])):
    d = milhas(a, b)
    n = max(1, int(d))
    for k in range(n):
        t = k / n
        la = a[0] + (b[0] - a[0]) * t
        lo = a[1] + (b[1] - a[1]) * t
        v = amostra(la, lo)
        print(f"  {dist_acum + d * t:5.1f} mi  ({la:.4f}, {lo:.4f})  {'mar' if v is None else f'{v:6.1f} in'}")
    dist_acum += d
v = amostra(*ck)
print(f"  {dist_acum:5.1f} mi  centro de Kahoolawe  {v:6.1f} in")
