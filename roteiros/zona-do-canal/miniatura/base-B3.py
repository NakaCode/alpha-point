"""As duas bases da miniatura B3 do vídeo 3: o quadro, o relevo, o mar, o contorno e a sombra da B, sem mudança, com a Zona do
Canal num território só (o lago Madden ligado ao corpo). Uma base leva a Zona pintada com a bandeira dos EUA, como a B; a outra
a leva em --destaque, sem bandeira nenhuma.

    python -X utf8 roteiros/zona-do-canal/miniatura/base-B3.py        (da raiz do canal)

O PEDIDO (Lucas, 16/10/2026, no chat). A B ("IN PERPETUITY" com a Zona pintada com a bandeira) é a que ele gostou. Sobre ela:
"Juntar o pedaço solto (Recomendado)" (a parte do lago Madden, que na B aparece como uma ilha a nordeste do corpo) e "Texto
maior, em 2 linhas". A B2 fez isso com o título em 2 linhas, a Zona em --destaque e uma bandeira cravada num mastro, e a resposta
dele foi: "Não gostei do título em duas linhas, tão pouco da bandeira". A B3 volta à B, com o território num pedaço só e o título
maior numa linha só (miniatura-B3.html e miniatura-B3-sem.html, ao lado), em duas variantes: com a bandeira da B no território e
sem bandeira nenhuma.

O QUE É REAL AQUI, E DE ONDE VEM:
- o relevo e a costa: os Terrain Tiles da AWS Open Data (formato terrarium, zoom 10, ~150 m por pixel), que no Panamá vêm do
  SRTM, do GMTED e do ETOPO1 (domínio público), SÓ do cache das versões, out/zona-do-canal/_tmp/miniatura/terrario/. Este script
  não tem código de rede: se faltar um tile, ele para, diz qual e não pede nada (B3-pontos.json › pedidos_de_rede = 0). A costa
  é a linha de 2,5 m do próprio relevo. O quadro (1700 px por grau de longitude, oeste em -80,47, o topo da Zona em y 455), as
  cores do relevo e do mar, o sombreado, o contorno --tinta (~12 px), o filete --fundo e a sombra deslocada são os da
  base-B-bandeira.py, com os mesmos números;
- a Zona do Canal: out/zona-do-canal/_media/geo/zona-do-canal-1947.json (a divisa da folha do U.S. Army Map Service de 1947, LOC
  83694755, com os lagos Gatún e Madden e o vale do Chagres abaixo da represa até a cota de 100 pés; sem o mar de 3 milhas),
  recortada pela costa do relevo. NÃO é a faixa-esquema de 10 milhas. O buraco interno do polígono continua buraco;
- a bandeira (só na B3-mapa.png): a da B, em vetor, nas proporções oficiais (Executive Order 10834, de 21/08/1959, e 4 U.S.C.
  §1-2: A = 1,0; B = 1,9; cantão C = 7/13 por D = 0,76; 50 estrelas em 9 fileiras de 6 e 5, E = F = 0,054, G = H = 0,063,
  K = 0,0616; 13 listras), nas cores do Departamento de Estado (#B22234, #3C3B6E, branco), na mesma caixa e escala da B. A
  bandeira dos EUA não tem direito autoral;
- o --destaque (só na B3sem-mapa.png): #F5A524 com o relevo por baixo (0,78 + 0,30 × sombreado) e o contorno --tinta direto,
  sem filete, como a B2 pinta.
Nada é desenhado à mão nem por IA.

AS DUAS MUDANÇAS DE FORMA DA ZONA, AMBAS POR ALGORITMO (os números saem em B3-pontos.json):
1. A junção do Madden, a menor possível. O polígono tem duas peças: o corpo e o Madden, separadas por um vão de ~164 m na
   represa de Madden, que o próprio traçado registra como não fechado (o "aviso_rodada3" do geojson). A lógica é a da B2 (um
   fechamento morfológico), mas com o menor raio que junta as duas peças (procurado de 0,5 em 0,5 px; saiu ~129 m, contra os
   ~370 m da B2), e do que o fechamento acrescenta só fica o pedaço que encosta nas duas peças: ~0,07 km² na represa. Nenhuma
   outra reentrância muda.
2. A generalização da B, sem soltar pedaço. A B passava uma abertura morfológica de raio ~6 px (~0,4 km) que tira os braços do
   Gatún mais finos que ~0,8 km (a 168 px eles viram fiapos e enchem o contorno de manchas brancas). Ela também cortava o vale
   do Chagres abaixo da represa (mais fino que 0,8 km), e foi isso que soltou o Madden na B. Aqui a abertura é a mesma, mas o
   que ela corta volta quando é o caminho entre o corpo e o Madden: num grafo das peças que a abertura deixa e dos pedaços que
   ela corta, o caminho de menor área entre o corpo e o Madden volta inteiro (o vale do Chagres, ~6,7 km²), com as peças que
   encostam nele (um trecho mais largo do vale, que sem isso virava um buraco). As peças pequenas que a abertura soltou e que não
   estão nesse caminho saem, como os braços finos: a ponta norte do Madden (duas peças, ~2,9 km²) e três pontas de braço no corpo
   (~6,7 km²), ~9,6 km² ao todo, que na B apareciam como pontos soltos. A Zona fica com ~1.351 km² no palco.
Resultado: um território só no palco. Em 168 px, o vale fica abaixo de um pixel, e o Madden só se liga ao corpo pelo contorno
claro (como na B2); o laranja ou a bandeira sozinhos ainda deixam o Madden como uma mancha à parte.

AS REGRAS DA MARCA QUE CADA VARIANTE QUEBRA (o detalhe está no cabeçalho de cada HTML):
- com a bandeira (B3-mapa.png): as mesmas da B: "nada de vermelho contra azul" (embalagem §3; identidade §2); "--destaque só no
  protagonista" (o protagonista é a Zona com a bandeira, e o --destaque vai só na palavra da caixa); "Bandeira é asset oficial,
  não fonte de paleta: não pinte território com as cores da bandeira" (identidade §2); "País no mapa: o nome escrito, sem
  bandeira" (identidade; Lucas, 27/09/2026: "vale para todo mapa e para toda bandeira, a dos EUA também"); e o teto de 3 matizes
  (identidade §2);
- sem a bandeira (B3sem-mapa.png): nenhuma dessas. O --destaque volta ao protagonista, a Zona, com o contorno --tinta (embalagem
  §1.1 e §3; identidade §2). A palavra PERPETUITY em --destaque é a "palavra colorida" da receita da miniatura (embalagem §1.1 e
  §3.1), não um rótulo do protagonista: a identidade §2 pede --destaque em texto só nesse rótulo, e a embalagem abre a exceção.

Grava, em out/zona-do-canal/_tmp/miniatura/B3/: B3-mapa.png e B3sem-mapa.png (2560 × 1440, o palco da miniatura) e B3-pontos.json
(a caixa da Zona, Balboa, Colón, a junção, a generalização, as peças no palco e em 168 px, o canto da duração e os pedidos de rede).
"""
import heapq, json, math, os, sys
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFilter

RAIZ = os.getcwd()
BASE_TMP = os.path.join(RAIZ, "out", "zona-do-canal", "_tmp", "miniatura")
SAIDA = os.path.join(BASE_TMP, "B3")
CACHE = os.path.join(BASE_TMP, "terrario")
GEO_DIR = os.path.join(RAIZ, "out", "zona-do-canal", "_media", "geo")
Z = 10
W, H = 2560, 1440

# o quadro: o da B, sem mudança
PX_POR_GRAU = 1700.0
LON_ESQ = -80.47
Y_TOPO_ZONA, LAT_TOPO_ZONA = 455, 9.4028
CANTO_DURACAO = (W - 300, H - 160)  # onde o YouTube põe a duração (os últimos ~300 × 160 px do palco)


def merc(lon, lat, z=Z):
    n = 256 * 2 ** z
    x = (lon + 180) / 360 * n
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * n
    return x, y


escala = PX_POR_GRAU * 360 / (256 * 2 ** Z)  # pixels do palco por pixel z10
x0 = merc(LON_ESQ, 0)[0]
y0 = merc(0, LAT_TOPO_ZONA)[1] - Y_TOPO_ZONA / escala
x1, y1 = x0 + W / escala, y0 + H / escala


def palco(lon, lat):
    x, y = merc(lon, lat)
    return ((x - x0) * escala, (y - y0) * escala)


def ler_tile(p):
    a = np.asarray(Image.open(p).convert("RGB")).astype(np.float64)
    return a[..., 0] * 256 + a[..., 1] + a[..., 2] / 256 - 32768


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


# 1 · o mosaico do relevo, só do cache (sem código de rede), recortado no quadro e levado ao palco
tx0, tx1 = int(x0 // 256), int(x1 // 256)
ty0, ty1 = int(y0 // 256), int(y1 // 256)
tiles = [(tx, ty, os.path.join(CACHE, f"{Z}-{tx}-{ty}.png")) for ty in range(ty0, ty1 + 1) for tx in range(tx0, tx1 + 1)]
faltam = [os.path.basename(p) for _, _, p in tiles if not os.path.isfile(p)]
if faltam:
    print("PAROU: faltam estes tiles no cache", CACHE, "(nada foi pedido à rede):", ", ".join(faltam))
    sys.exit(2)
mos = np.zeros(((ty1 - ty0 + 1) * 256, (tx1 - tx0 + 1) * 256))
for tx, ty, p in tiles:
    mos[(ty - ty0) * 256:(ty - ty0 + 1) * 256, (tx - tx0) * 256:(tx - tx0 + 1) * 256] = ler_tile(p)
print(f"relevo: {len(tiles)} tiles z{Z}, todos do cache; 0 pedidos de rede")
cx0, cy0 = x0 - tx0 * 256, y0 - ty0 * 256
img_el = Image.fromarray(mos.astype(np.float32), mode="F")
el = np.asarray(img_el.transform((W, H), Image.AFFINE, (1 / escala, 0, cx0, 0, 1 / escala, cy0), resample=Image.BICUBIC))

# 2 · o sombreado da B (dois sóis, noroeste e oeste, relevo exagerado 2,2×)
m_px = 156543.03 * math.cos(math.radians(9.1)) / 2 ** Z / escala
gy, gx = np.gradient(el * 2.2, m_px)
inc = np.arctan(np.hypot(gx, gy))
asp = np.arctan2(-gx, gy)


def sombra(az, altd):
    az, alt_ = math.radians(az), math.radians(altd)
    return np.clip(np.sin(alt_) * np.cos(inc) + np.cos(alt_) * np.sin(inc) * np.cos(az - asp), 0, 1)


hs = 0.65 * sombra(315, 40) + 0.35 * sombra(270, 50)

# 3 · as cores da B: o relevo em tons naturais, o mar em azul-marinho
TINTA_TERRA = [(0, (122, 158, 92)), (120, (114, 150, 84)), (350, (134, 142, 80)), (750, (164, 140, 92)),
               (1300, (190, 166, 128)), (2200, (220, 210, 190))]


def rampa(v, pares):
    xs = [p[0] for p in pares]
    return np.stack([np.interp(v, xs, [p[1][i] for p in pares]) for i in range(3)], axis=-1)


terra = rampa(el, TINTA_TERRA) * (0.40 + 0.75 * hs)[..., None]
eh_terra = borrar(el > 2.5, 4) > 0.62
m_terra = borrar(eh_terra, 1.2)
perto = borrar(eh_terra, 45)
mar = np.array((14, 25, 44), dtype=float) * (1 - perto[..., None]) + np.array((30, 52, 82), dtype=float) * perto[..., None]
base = mar * (1 - m_terra[..., None]) + terra * m_terra[..., None]

# 4 · a Zona: o polígono de 1947 em 2× (supersample), com o buraco interno
SS = 2
gj = json.load(open(os.path.join(GEO_DIR, "zona-do-canal-1947.json"), encoding="utf-8"))
z_img = Image.new("L", (W * SS, H * SS), 0)
b_img = Image.new("L", (W * SS, H * SS), 0)
dz, dbur = ImageDraw.Draw(z_img), ImageDraw.Draw(b_img)
xs_z, ys_z, exteriores = [], [], []
for f in gj["features"]:
    g = f["geometry"]
    for poli in ([g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]):
        ext, *buracos = poli
        pts = [palco(*p) for p in ext]
        exteriores.append(np.array(pts))
        xs_z += [p[0] for p in pts]
        ys_z += [p[1] for p in pts]
        dz.polygon([(x * SS, y * SS) for x, y in pts], fill=255)
        for b in buracos:
            pb = [tuple(c * SS for c in palco(*p)) for p in b]
            dz.polygon(pb, fill=0)
            dbur.polygon(pb, fill=255)
caixa = (min(xs_z), min(ys_z), max(xs_z), max(ys_z))  # a caixa da B (a dos vértices): dá a posição e a escala da bandeira
bruta = (np.asarray(z_img) > 127).astype(np.uint8)
buraco = np.asarray(b_img) > 127
n0, lab0, st0, _ = cv2.connectedComponentsWithStats(bruta, connectivity=8)
grandes = sorted((i for i in range(1, n0) if st0[i, 4] > 1000), key=lambda i: -st0[i, 4])
assert len(grandes) == 2, ("esperava duas peças: o corpo e o Madden", sorted((int(s[4]) for s in st0[1:]), reverse=True))
CORPO_SS, MADDEN_SS = grandes
vao = min(float(np.hypot(exteriores[0][:, 0] - p[0], exteriores[0][:, 1] - p[1]).min()) for p in exteriores[1])

# 4a · a junção do Madden: o menor raio de fechamento que junta as duas peças; do que ele acrescenta, só o pedaço que encosta
#      nas duas (o resto do fechamento se descarta: nenhuma outra reentrância muda)
for r_ss in range(1, 40):
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * r_ss + 1, 2 * r_ss + 1))
    fz = cv2.morphologyEx(bruta, cv2.MORPH_CLOSE, k) & (~buraco).astype(np.uint8)
    _, labf, _, _ = cv2.connectedComponentsWithStats(fz, connectivity=8)
    if int(labf[lab0 == CORPO_SS][0]) == int(labf[lab0 == MADDEN_SS][0]):
        break
else:
    raise SystemExit("o fechamento não juntou o Madden ao corpo")
acresc = (fz > 0) & (bruta == 0)
na, laba, _, _ = cv2.connectedComponentsWithStats(acresc.astype(np.uint8), connectivity=8)
encosta = [cv2.dilate((lab0 == i).astype(np.uint8), np.ones((3, 3), np.uint8)) > 0 for i in (CORPO_SS, MADDEN_SS)]
ponte = np.zeros_like(acresc)
for j in range(1, na):
    m = laba == j
    if all((m & e).any() for e in encosta):
        ponte |= m
assert ponte.any(), "nenhum pedaço do fechamento encosta nas duas peças"
unida = ((bruta > 0) | ponte).astype(np.uint8)
py_, px_ = np.nonzero(ponte)
juncao = {
    "vao_entre_as_pecas_m": round(vao * m_px),
    "raio_do_fechamento_px_palco": r_ss / SS,
    "raio_do_fechamento_m": round(r_ss / SS * m_px),
    "ponte_area_km2": round(float(ponte.sum()) / SS / SS * m_px * m_px / 1e6, 4),
    "ponte_caixa_palco": [float(px_.min()) / SS, float(py_.min()) / SS, float(px_.max()) / SS, float(py_.max()) / SS],
    "b2_para_comparar": "fechamento de 5 px a 13,65 px/km (~370 m), em todo o contorno",
}
print("junção:", juncao)

# 4b · ao palco (1×), como a B
z1 = np.asarray(Image.fromarray(unida * 255).resize((W, H), Image.LANCZOS)) / 255.0
madden_1x = cv2.resize((lab0 == MADDEN_SS).astype(np.float32), (W, H), interpolation=cv2.INTER_AREA) > 0.5

# 4c · a generalização da B (a mesma abertura: erosão e dilatação por borrão e corte, raio ~6 px), sem soltar o Madden: o que
#      ela corta volta quando está no caminho de menor área entre o corpo e o Madden
bin_z = z1 >= 0.5
erodida = borrar(bin_z, 5) > 0.82
aberta = (borrar(erodida, 5) > 0.18) & bin_z
residuo = bin_z & ~aberta
nA, labA, stA, _ = cv2.connectedComponentsWithStats(aberta.astype(np.uint8), connectivity=8)
nR, labR, stR, _ = cv2.connectedComponentsWithStats(residuo.astype(np.uint8), connectivity=8)
viz = {("A", i): set() for i in range(1, nA)}
for j in range(1, nR):
    x_, y_, w_, h_ = stR[j, :4]
    sl = (slice(max(y_ - 2, 0), y_ + h_ + 2), slice(max(x_ - 2, 0), x_ + w_ + 2))
    m = cv2.dilate((labR[sl] == j).astype(np.uint8), np.ones((3, 3), np.uint8)) > 0
    toca = {int(v) for v in np.unique(labA[sl][m]) if v > 0}
    if len(toca) >= 2:
        viz[("R", j)] = {("A", i) for i in toca}
        for i in toca:
            viz[("A", i)].add(("R", j))
corpo = 1 + int(np.argmax(stA[1:, 4]))
cont = np.bincount(labA[madden_1x], minlength=nA)
cont[0] = 0
madden = int(np.argmax(cont))
assert madden != corpo


def area(no):
    return int(stA[no[1], 4]) if no[0] == "A" else int(stR[no[1], 4])


dist, ant, fila = {("A", corpo): 0}, {}, [(0, ("A", corpo))]
while fila:
    d, no = heapq.heappop(fila)
    if no == ("A", madden):
        break
    if d > dist.get(no, 1e18):
        continue
    for v in viz.get(no, ()):
        nd = d + area(v)
        if nd < dist.get(v, 1e18):
            dist[v], ant[v] = nd, no
            heapq.heappush(fila, (nd, v))
assert ("A", madden) in ant, "não há caminho entre o corpo e o Madden"
caminho, no = [], ("A", madden)
while no in ant:
    caminho.append(no)
    no = ant[no]
caminho.append(("A", corpo))
# as peças que encostam no pedaço restaurado (os trechos mais largos do vale) voltam com ele: sem isso, viram buraco no vale
for t, i in list(caminho):
    if t == "R":
        caminho += [v for v in viz[("R", i)] if v not in caminho]
fica = np.zeros_like(bin_z)
for t, i in caminho:
    fica |= (labA == i) if t == "A" else (labR == i)
km2 = m_px * m_px / 1e6
fora = [i for i in range(1, nA) if ("A", i) not in caminho]
generalizacao = {
    "abertura": "a da B (borrar 5, > 0,82; borrar 5, > 0,18): tira o que é mais fino que ~0,8 km",
    "caminho_corpo_madden_e_o_que_encosta": [f"{t}{i}" for t, i in caminho],
    "pecas_soltas_que_sairam": [{"km2": round(int(stA[i, 4]) * km2, 3), "caixa_palco": [int(stA[i, 0]), int(stA[i, 1]),
                                 int(stA[i, 0] + stA[i, 2]), int(stA[i, 1] + stA[i, 3])],
                                 "onde": "Madden" if bool((madden_1x & (labA == i)).any()) else "corpo"} for i in fora],
    "restaurado_km2": round(sum(area(n_) for n_ in caminho if n_[0] == "R") * km2, 3),
    "tirado_no_total_km2": round(float((bin_z & ~fica).sum()) * km2, 2),
    "zona_depois_km2": round(float(fica.sum()) * km2, 1),
}
print("generalização:", generalizacao)
zona = np.minimum(z1, borrar(fica, 1.0))
costa = borrar(eh_terra, 6) > 0.30  # os lagos contam como terra (o relevo os tem acima de 2,5 m); o mar, não
zona = zona * borrar(costa, 1.0)
_, _, st1, _ = cv2.connectedComponentsWithStats((zona > 0.5).astype(np.uint8), connectivity=8)
pecas_palco = sorted((int(s[4]) for s in st1[1:]), reverse=True)
assert len(pecas_palco) == 1, ("a Zona saiu em mais de uma peça no palco", pecas_palco[:6])

# 5 · o contorno --tinta (a Zona dilatada ~12 px) e a sombra deslocada, os da B
a_z = Image.fromarray((np.clip(zona, 0, 1) * 255).astype(np.uint8))
dil = np.clip(np.asarray(a_z.filter(ImageFilter.GaussianBlur(9))) / 255.0 * 6.0, 0, 1)
somb = np.asarray(Image.fromarray((dil * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(18))) / 255.0
somb = np.roll(np.roll(somb, 12, axis=0), 7, axis=1)
TINTA = np.array((244, 241, 234), dtype=float)
FUNDO = np.array((14, 23, 38), dtype=float)
DEST = np.array((245, 165, 36), dtype=float)
contornada = base * (1 - 0.66 * somb[..., None])
contornada = contornada * (1 - dil[..., None]) + TINTA * dil[..., None]

# 6 · a bandeira da B, em vetor (supersample 3×): o hasteamento na altura da caixa da Zona, o canto do cantão no canto de cima
#     à esquerda dela (o lado do Caribe: Colón e o Gatún)
SSB = 3
FA = caixa[3] - caixa[1]
fx0, fy0 = caixa[0], caixa[1]
RED, BLUE, WHITE = (178, 34, 52), (60, 59, 110), (255, 255, 255)
band = Image.new("RGB", (W * SSB, H * SSB), WHITE)
db = ImageDraw.Draw(band)
L = FA / 13
for i in range(13):
    if i % 2 == 0:
        db.rectangle([fx0 * SSB, (fy0 + i * L) * SSB, (fx0 + 1.9 * FA) * SSB, (fy0 + (i + 1) * L) * SSB], fill=RED)
db.rectangle([fx0 * SSB, fy0 * SSB, (fx0 + 0.76 * FA) * SSB, (fy0 + 7 / 13 * FA) * SSB], fill=BLUE)
E = F = 0.054
G = Hh = 0.063
K = 0.0616


def estrela(cx, cy, r):
    pts = []
    for k in range(10):
        ang = -math.pi / 2 + k * math.pi / 5
        rr = r if k % 2 == 0 else r * 0.381966  # a razão do pentagrama (sin 18° / sin 54°)
        pts.append(((cx + rr * math.cos(ang)) * SSB, (cy + rr * math.sin(ang)) * SSB))
    return pts


n_est = 0
for fil in range(9):
    cy = fy0 + (E + fil * F) * FA
    cols = [Hh + j * 2 * G for j in range(6)] if fil % 2 == 0 else [Hh + G + j * 2 * G for j in range(5)]
    for cxr in cols:
        db.polygon(estrela(fx0 + cxr * FA, cy, K / 2 * FA), fill=WHITE)
        n_est += 1
assert n_est == 50, n_est
band = np.asarray(band.resize((W, H), Image.LANCZOS)).astype(float)
band = band * np.clip(0.80 + 0.28 * hs, 0, 1.08)[..., None]  # "pintada" sobre o relevo, para continuar lendo como terra

# 7 · as duas bases
# com a bandeira: como a B, com o filete --fundo (~5 px) entre a bandeira e o contorno (a listra branca não se funde ao --tinta)
filete = np.clip(np.asarray(a_z.filter(ImageFilter.GaussianBlur(3))) / 255.0 * 4.0, 0, 1)
com = contornada * (1 - filete[..., None]) + FUNDO * filete[..., None]
com = com * (1 - zona[..., None]) + band * zona[..., None]
# sem a bandeira: --destaque com o relevo por baixo e o contorno --tinta direto, como a B2
laranja = DEST * (0.78 + 0.30 * hs)[..., None]
sem = contornada * (1 - zona[..., None]) + laranja * zona[..., None]

os.makedirs(SAIDA, exist_ok=True)
Image.fromarray(np.clip(com, 0, 255).astype(np.uint8)).save(os.path.join(SAIDA, "B3-mapa.png"))
Image.fromarray(np.clip(sem, 0, 255).astype(np.uint8)).save(os.path.join(SAIDA, "B3sem-mapa.png"))

# 8 · conferências: as peças em 168 px (só a Zona e com o contorno) e o canto da duração
z168 = cv2.resize(zona.astype(np.float32), (168, 94), interpolation=cv2.INTER_AREA)
d168 = cv2.resize(dil.astype(np.float32), (168, 94), interpolation=cv2.INTER_AREA)
em168 = {}
for nome, m in (("zona_limiar_0.5", z168 > 0.5), ("zona_limiar_0.25", z168 > 0.25), ("com_contorno_limiar_0.5", d168 > 0.5)):
    _, _, st, _ = cv2.connectedComponentsWithStats(m.astype(np.uint8), connectivity=8)
    em168[nome] = sorted((int(s[4]) for s in st[1:]), reverse=True)
zy, zx = np.nonzero(dil > 0.3)
pontos = {
    "caixa_zona": caixa,
    "caixa_zona_com_contorno": [int(zx.min()), int(zy.min()), int(zx.max()), int(zy.max())],
    "balboa": palco(-79.5664, 8.9583),
    "colon": palco(-79.9005, 9.3592),
    "escala_px_por_km": 1000 / m_px,
    "quadro_lonlat": {"oeste": LON_ESQ, "leste": LON_ESQ + W / PX_POR_GRAU},
    "juncao_madden": juncao,
    "generalizacao": generalizacao,
    "pecas_no_palco_px": pecas_palco,
    "pecas_em_168_px": em168,
    "canto_duracao": {"caixa": [CANTO_DURACAO[0], CANTO_DURACAO[1], W, H],
                      "livre_da_zona_e_do_contorno": not bool(((zx >= CANTO_DURACAO[0]) & (zy >= CANTO_DURACAO[1])).any())},
    "tiles_do_cache": len(tiles),
    "pedidos_de_rede": 0,
}
json.dump(pontos, open(os.path.join(SAIDA, "B3-pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print("ok", SAIDA)
print(json.dumps(pontos, ensure_ascii=False))
