"""TENTATIVA REJEITADA (22/10/2026): nada deste script foi gravado em _media/geo/. Três critérios (maior cota por Viterbi,
borda leste >= 4.000 m, caminho de cumeada de menor custo) deram três linhas diferentes: a serra entre os dois cumes é
cortada pelos vales de Tarma e do Chanchamayo, e o caminho mais alto cai na puna de Junín. Fica só como registro; o
relato (_tmp/pesquisa-geo/relato.md) diz por quê.

A crista da Cordilheira Oriental (Huaguruncho -> Huaytapallana) e a faixa da encosta leste, derivadas do relevo real:
Copernicus DEM GLO-90 (AWS, copernicus-dem-90m), 8 folhas de 1° (S11–S13, W077–W075). Nada desenhado.
Método:
  1. eixo reto do cume do Huaguruncho (o pixel mais alto a <= 3 km do glaciar do OSM, way/236629812) ao do
     Huaytapallana (idem, do pico do OSM, node/2671072151); 141 estações ao longo do eixo (~1,2 km entre elas);
  2. em cada estação, um transecto perpendicular de -30 a +60 km (leste positivo) (passo 0,3 km), cota bilinear suavizada (janela 1,5 km);
  3. a crista é o caminho de menor custo entre os dois cumes (Dijkstra numa grade de ~360 m, custo = comprimento x
     exp(-(cota-5000)/400)): a linha de cumeada que fica o mais alta possível; a linha entregue é esse caminho (DP 0,002°);
  4. a encosta leste: em cada transecto, da crista para o leste até a primeira cota < LIMITE (1.000 m) ou 60 km;
     o polígono é a crista mais essa linha, fechados; média móvel de 5 estações na borda leste.
uso: python -P geo_crista.py <pasta-cop90> <saida-dir> [limite_m=1000]"""
import sys, os, json, math
import numpy as np
from PIL import Image
from shapely.geometry import LineString, Polygon, Point, mapping

pasta, out = sys.argv[1], sys.argv[2]
LIM = float(sys.argv[3]) if len(sys.argv) > 3 else 1000.0
R = 1 / 1200.0
X0, Y1 = -77.0, -10.0  # canto noroeste do mosaico
W, Hh = 3 * 1200, 3 * 1200
Z = np.full((Hh, W), np.nan, dtype=np.float32)
folhas = []
for lat in (11, 12, 13):
    for lon in (77, 76, 75):
        n = f"Copernicus_DSM_COG_30_S{lat}_00_W{lon:03d}_00_DEM"
        f = os.path.join(pasta, n + ".tif")
        if not os.path.exists(f):
            continue
        im = Image.open(f); a = np.array(im, dtype=np.float32)
        tp = im.tag_v2[33922]; x0, y0 = tp[3], tp[4]
        c = int(round((x0 - X0) / R)); r = int(round((Y1 - y0) / R))
        Z[r:r + a.shape[0], c:c + a.shape[1]] = a[:Hh - r, :W - c]
        folhas.append(n)


def cota(lon, lat):
    fx = (np.asarray(lon) - X0) / R - 0.5; fy = (Y1 - np.asarray(lat)) / R - 0.5
    x0 = np.floor(fx).astype(int); y0 = np.floor(fy).astype(int)
    dx, dy = fx - x0, fy - y0
    x0 = np.clip(x0, 0, W - 2); y0 = np.clip(y0, 0, Hh - 2)
    z = (Z[y0, x0] * (1 - dx) * (1 - dy) + Z[y0, x0 + 1] * dx * (1 - dy) + Z[y0 + 1, x0] * (1 - dx) * dy + Z[y0 + 1, x0 + 1] * dx * dy)
    return z


def cume(lon, lat, raio_km=3.0):
    r = int(raio_km / 0.09)
    c = int((lon - X0) / R); rr = int((Y1 - lat) / R)
    sub = Z[rr - r:rr + r, c - r:c + r]
    i = np.nanargmax(sub); y, x = divmod(i, sub.shape[1])
    return X0 + (c - r + x + 0.5) * R, Y1 - (rr - r + y + 0.5) * R, float(sub[y, x])


A = cume(-75.9297, -10.5295); B = cume(-75.0540, -11.9085)
lat0 = (A[1] + B[1]) / 2; kx = 111.32 * math.cos(math.radians(lat0)); ky = 110.57
ax, ay = A[0] * kx, A[1] * ky; bx, by = B[0] * kx, B[1] * ky
L = math.hypot(bx - ax, by - ay); ux, uy = (bx - ax) / L, (by - ay) / L
ex, ey = uy, -ux  # perpendicular
if ex < 0:
    ex, ey = -ex, -ey  # aponta para leste
N = 141
offs = np.arange(-30, 60.0001, 0.3)
st = np.linspace(0, L, N)
P = np.zeros((N, len(offs)))
for i, s in enumerate(st):
    cx, cy = ax + ux * s, ay + uy * s
    lon = (cx + ex * offs) / kx; lat = (cy + ey * offs) / ky
    z = cota(lon, lat)
    k = 5; z = np.convolve(np.nan_to_num(z, nan=0), np.ones(k) / k, mode="same")
    P[i] = z
# a crista: o caminho de menor custo entre os dois cumes sobre o relevo (grade de 4 pixels, ~360 m, 8 vizinhos), custo
# por trecho = comprimento x exp(-(cota - 5000)/400): o caminho que fica o mais alto possível (linha de cumeada)
import heapq
DS = 4
bx0, bx1, by0, by1 = -76.3, -74.7, -12.15, -10.3
c0, c1 = int((bx0 - X0) / R), int((bx1 - X0) / R); r0, r1 = int((Y1 - by0) / R), int((Y1 - by1) / R)
sub = Z[r1:r0, c0:c1]
hh, ww = sub.shape[0] // DS, sub.shape[1] // DS
G = np.nanmax(sub[:hh * DS, :ww * DS].reshape(hh, DS, ww, DS), axis=(1, 3))
G = np.nan_to_num(G, nan=0)
def rc(lon, lat):
    return int((Y1 - lat) / R - r1) // DS, int((lon - X0) / R - c0) // DS
def ll(r, c):
    return X0 + (c0 + c * DS + DS / 2) * R, Y1 - (r1 + r * DS + DS / 2) * R
fator = np.exp(-(G - 5000.0) / 400.0)
pas = 0.09 * DS
s_rc, t_rc = rc(A[0], A[1]), rc(B[0], B[1])
dist = np.full(G.shape, np.inf); dist[s_rc] = 0; prev = {}
pq = [(0.0, s_rc)]
viz = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
while pq:
    d, (r, c) = heapq.heappop(pq)
    if (r, c) == t_rc:
        break
    if d > dist[r, c]:
        continue
    for dr, dc in viz:
        rr, cc = r + dr, c + dc
        if 0 <= rr < G.shape[0] and 0 <= cc < G.shape[1]:
            w = pas * (1.4142 if dr and dc else 1.0) * 0.5 * (fator[r, c] + fator[rr, cc])
            nd = d + w
            if nd < dist[rr, cc]:
                dist[rr, cc] = nd; prev[(rr, cc)] = (r, c); heapq.heappush(pq, (nd, (rr, cc)))
cam = [t_rc]
while cam[-1] != s_rc:
    cam.append(prev[cam[-1]])
cam = cam[::-1]
pts = [ll(r, c) for r, c in cam]
# o caminho em coordenadas do eixo: offset por estação (mediana dos pontos a +-0,6 km da estação)
pa = np.array([((x * kx - ax) * ux + (y * ky - ay) * uy, (x * kx - ax) * ex + (y * ky - ay) * ey) for x, y in pts])
o = []
for s_ in st:
    m = np.abs(pa[:, 0] - s_) < 0.9
    o.append(np.median(pa[m, 1]) if m.any() else np.nan)
o = np.array(o); falta = np.isnan(o)
if falta.any():
    o[falta] = np.interp(np.where(falta)[0], np.where(~falta)[0], o[~falta])
caminho_bruto = pts
o_s = np.convolve(np.pad(o, 2, mode="edge"), np.ones(5) / 5, mode="valid")
crista = []
for i, s in enumerate(st):
    cx, cy = ax + ux * s + ex * o_s[i], ay + uy * s + ey * o_s[i]
    crista.append((cx / kx, cy / ky))
zc = cota([p[0] for p in crista], [p[1] for p in crista])
# encosta leste
lim_e = []
fim_por = {"cota": 0, "60km": 0}
for i, s in enumerate(st):
    j0 = int(np.argmin(np.abs(offs - o_s[i])))
    prof = P[i][j0:]
    abaixo = np.where(prof < LIM)[0]
    if len(abaixo):
        d = offs[j0 + abaixo[0]]; fim_por["cota"] += 1
    else:
        d = offs[-1]; fim_por["60km"] += 1
    lim_e.append(d)
lim_e = np.convolve(np.pad(np.array(lim_e), 2, mode="edge"), np.ones(5) / 5, mode="valid")
borda = []
for i, s in enumerate(st):
    cx, cy = ax + ux * s + ex * lim_e[i], ay + uy * s + ey * lim_e[i]
    borda.append((cx / kx, cy / ky))
faixa = Polygon(crista + borda[::-1]).buffer(0)
larg = lim_e - o_s


def km_lin(c):
    t = 0
    for (x1, y1), (x2, y2) in zip(c, c[1:]):
        p1, p2 = math.radians(y1), math.radians(y2)
        h = math.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(math.radians(x2 - x1) / 2) ** 2
        t += 2 * 6371.0088 * math.asin(math.sqrt(h))
    return t


cr = LineString(caminho_bruto).simplify(0.002)
zc = cota([p[0] for p in caminho_bruto], [p[1] for p in caminho_bruto])
rel = {"folhas": folhas, "cume_A_huaguruncho": [round(A[0], 5), round(A[1], 5), round(A[2])], "cume_B_huaytapallana": [round(B[0], 5), round(B[1], 5), round(B[2])],
       "eixo_km": round(L, 1), "crista_km": round(km_lin(crista), 1), "cota_crista_m": {"min": int(np.nanmin(zc)), "mediana": int(np.nanmedian(zc)), "max": int(np.nanmax(zc))},
       "desvio_lateral_km": {"min": round(float(o_s.min()), 1), "max": round(float(o_s.max()), 1)},
       "faixa_leste_largura_km": {"min": round(float(larg.min()), 1), "mediana": round(float(np.median(larg)), 1), "max": round(float(larg.max()), 1)},
       "faixa_fim_por": fim_por, "limite_m": LIM}
comum = {"license": "Copernicus DEM GLO-90 (produced using Copernicus WorldDEM-90 © DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the European Union and ESA; all rights reserved)"}
json.dump({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"name": "Cordillera Oriental crest (Huaguruncho to Huaytapallana)", "rotulo": "ANDES",
           "metodo": "caminho de cumeada de menor custo entre os dois cumes (Dijkstra sobre o Copernicus DEM GLO-90, ~360 m)", "km": rel["crista_km"], **comum},
           "geometry": mapping(cr)}]}, open(os.path.join(out, "_fc-cordilheira-oriental-crista.json"), "w"))
json.dump({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"name": "Eastern slopes of the Cordillera Oriental (crest down to %d m)" % LIM,
           "rotulo": "EASTERN SLOPES", "limite_inferior_m": LIM, "largura_km_mediana": rel["faixa_leste_largura_km"]["mediana"], **comum},
           "geometry": mapping(faixa.simplify(0.002))}]}, open(os.path.join(out, "_fc-encosta-leste-andes.json"), "w"))
json.dump(rel, open(os.path.join(out, "_crista-relato.json"), "w"), indent=1)
print(json.dumps(rel, indent=1))
for i in range(0, N, 7):
    print(i, round(st[i],1), "off", round(float(o_s[i]),1), "z", int(zc[i]), "lim_e", round(float(lim_e[i]),1), [round(c,3) for c in crista[i]])
