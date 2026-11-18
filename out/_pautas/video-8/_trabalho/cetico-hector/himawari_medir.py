# A medida nossa: o relogio de Hector visto pelo Himawari-9 (banda 13, 10,4 um), dado aberto da NOAA/JMA no AWS, sem login.
# Le os cortes gravados pelo himawari_baixar.py e mede, em tres regioes de mesma forma:
#   TIWI  = as ilhas Tiwi (os poligonos do Natural Earth 10m admin-1, dominio publico);
#   MAR   = a mesma forma, deslocada 2,4 graus para oeste, sobre o mar de Timor (so pixels de mar);
#   TERRA = a mesma forma, deslocada para o continente, ao sul de Darwin (so pixels de terra).
# Topo frio de tempestade: temperatura de brilho < 210 K (-63 C). Nuvem alta: < 235 K.
# "Dia de tempestade" na regiao: em algum horario da tarde (14h a 18h em Darwin), >= LIM da area abaixo de 210 K,
# com a manha limpa (10h: < 10 % da area abaixo de 235 K), para contar a tempestade nascida ali naquele dia.
# Hora local de Darwin = UTC + 9:30 (o NT nao tem horario de verao; os artigos usam LST = UTC + 9,5).
# Uso: python -I -X utf8 -B himawari_medir.py <pasta_midia> <saida_png_opcional>
import sys, os, json, glob, datetime as dt
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import numpy as np, hsd
from shapely.geometry import shape
import shapely

pasta = sys.argv[1]
meta = json.load(open(os.path.join(pasta, "meta.json")))
r0, r1, k0, k1 = meta["janela_r0_r1_k0_k1"]
H, W = r1 - r0, k1 - k0

# lat/lon do centro de cada pixel do corte: inverte a projecao por busca numa grade fina (ida direta, ponto a ponto)
lats = np.arange(-10.80, -13.65, -0.004); lons = np.arange(127.2, 132.65, 0.004)
LA, LO = np.meshgrid(lats, lons, indexing="ij")
L, C = hsd.latlon_para_lc(meta, LA.ravel(), LO.ravel())
rr = np.rint(L).astype(int) - meta["lin1"] - r0
cc = np.rint(C).astype(int) - 1 - k0
ok = (rr >= 0) & (rr < H) & (cc >= 0) & (cc < W)
soma_la = np.zeros((H, W)); soma_lo = np.zeros((H, W)); n = np.zeros((H, W))
np.add.at(soma_la, (rr[ok], cc[ok]), LA.ravel()[ok]); np.add.at(soma_lo, (rr[ok], cc[ok]), LO.ravel()[ok]); np.add.at(n, (rr[ok], cc[ok]), 1)
with np.errstate(invalid="ignore"):
    PLAT = soma_la / n; PLON = soma_lo / n

NE = os.path.expanduser("~/.regie/geo/natural-earth/ne_10m_admin_1_states_provinces.geojson")
fc = json.load(open(NE, encoding="utf-8"))
nt = [shape(f["geometry"]) for f in fc["features"] if f["properties"].get("name") == "Northern Territory"][0]
partes = list(nt.geoms) if nt.geom_type == "MultiPolygon" else [nt]
tiwi_partes = [p for p in partes if -12.0 < p.representative_point().y < -11.0 and 129.8 < p.representative_point().x < 131.7 and p.area > 0.001]
tiwi = shapely.unary_union(tiwi_partes)
valido = np.isfinite(PLAT)
em_nt = np.zeros((H, W), bool); em_nt[valido] = shapely.contains_xy(nt, PLON[valido], PLAT[valido])
m_tiwi = np.zeros((H, W), bool); m_tiwi[valido] = shapely.contains_xy(tiwi, PLON[valido], PLAT[valido])

def deslocada(dlat, dlon, quer_terra):
    m = np.zeros((H, W), bool)
    la = PLAT[valido] - dlat; lo = PLON[valido] - dlon        # o pixel (la+dlat, lo+dlon) cai na forma das Tiwi se (la, lo) cai nas Tiwi
    dentro = shapely.contains_xy(tiwi, lo, la)
    m[valido] = dentro
    return m & (em_nt if quer_terra else ~em_nt)

m_mar = deslocada(0.0, -2.4, False)
m_terra = deslocada(-1.45, +0.75, True)
regioes = {"TIWI": m_tiwi, "MAR": m_mar, "TERRA": m_terra}
area_px = 4.5  # km2 por pixel, aproximado, a 12 S (2 km no nadir)
print("# pixels por regiao:", {k: int(v.sum()) for k, v in regioes.items()}, "| area aprox. km2:", {k: int(v.sum() * area_px) for k, v in regioes.items()})
print("# area do poligono das Tiwi no Natural Earth (graus2 -> km2 aprox.):", round(tiwi.area * 111.32 * 111.32 * np.cos(np.radians(11.6))))

# le os cortes
arqs = sorted(glob.glob(os.path.join(pasta, "cortes", "*.npz")))
dados = {}   # (data_local, hora_local) -> dict regiao -> (frac<210, frac<235, min)
for a in arqs:
    nome = os.path.basename(a)[:-4]
    d = dt.datetime.strptime(nome, "%Y%m%d_%H%M")
    loc = d + dt.timedelta(hours=9, minutes=30)
    T = np.load(a)["T"]
    reg = {}
    for k, m in regioes.items():
        v = T[m]; v = v[np.isfinite(v)]
        if v.size < 0.9 * m.sum():
            reg = None; break
        reg[k] = ((v < 210).mean(), (v < 235).mean(), float(v.min()))
    if reg:
        dados[(loc.date(), loc.hour)] = reg

def dias_com(horas):
    return sorted({d for (d, h) in dados} )

def dia_tempestade(d, reg, lim, tarde_horas, exigir_manha=True, col=0):
    if exigir_manha:
        m = dados.get((d, 10))
        if m is None or bool(m[reg][1] >= 0.10):
            return None if m is None else "manha_nublada"
    fr = [dados[(d, h)][reg][col] for h in tarde_horas if (d, h) in dados]
    if len(fr) < len(tarde_horas) - (1 if len(tarde_horas) >= 5 else 0):   # na serie horaria, tolera 1 arquivo faltando (404 na NOAA)
        return None
    return bool(max(fr) >= lim)

# 1) Novembros, de hora em hora
print("\n## 1. Novembro de 2023, 2024 e 2025, de hora em hora (10h a 21h em Darwin)")
TARDE_H = [14, 15, 16, 17, 18]
for ano in (2023, 2024, 2025):
    ds = [d for d in sorted({d for (d, h) in dados}) if d.year == ano and d.month == 11]
    linha = []
    for reg in regioes:
        for lim in (0.05, 0.10, 0.20):
            res = [dia_tempestade(d, reg, lim, TARDE_H) for d in ds]
            sim = sum(r is True for r in res); nao = sum(r is False for r in res); nub = sum(r == "manha_nublada" for r in res); falta = sum(r is None for r in res)
            linha.append(f"{reg} lim{int(lim*100)}%: {sim}/{sim+nao} dias (manha nublada {nub}, sem dado {falta})")
    print(f"- {ano}: " + " | ".join(linha))

# total dos 3 novembros, e sem a condicao da manha
for exigir in (True, False):
    print(f"\n# Total dos 3 novembros, limiar 10 %, {'com' if exigir else 'SEM'} a manha limpa:")
    for reg in regioes:
        ds = [d for d in sorted({d for (d, h) in dados}) if d.month == 11]
        res = [dia_tempestade(d, reg, 0.10, TARDE_H, exigir) for d in ds]
        sim = sum(r is True for r in res); nao = sum(r is False for r in res)
        print(f"  {reg}: {sim} de {sim+nao} dias ({100*sim/max(sim+nao,1):.0f} %); manha nublada {sum(r=='manha_nublada' for r in res)}")

# 1b) a regua de definicoes, do frouxo ao estrito, nos 3 novembros juntos (com a manha limpa)
print("\n## 1b. A regua: dias de tempestade nos 3 novembros, por definicao (manha limpa as 10h)")
DEFS = [("A: >= 2 % da area com topo < 235 K (-38 C)", 0.02, 1), ("B: >= 5 % < 235 K", 0.05, 1), ("C: >= 2 % < 210 K (-63 C)", 0.02, 0),
        ("D: >= 5 % < 210 K", 0.05, 0), ("E: >= 10 % < 210 K", 0.10, 0), ("F: >= 20 % < 210 K", 0.20, 0)]
dsn = [d for d in sorted({d for (d, h) in dados}) if d.month == 11]
for nome, lim, col in DEFS:
    partes = []
    for reg in regioes:
        res = [dia_tempestade(d, reg, lim, TARDE_H, True, col) for d in dsn]
        sim = sum(r is True for r in res); nao = sum(r is False for r in res)
        partes.append(f"{reg} {sim}/{sim+nao} ({100*sim/max(sim+nao,1):.0f} %)")
    print(f"- {nome}: " + " | ".join(partes))
for ano in (2023, 2024, 2025):
    ds = [d for d in dsn if d.year == ano]
    partes = []
    for nome, lim, col in DEFS:
        res = [dia_tempestade(d, "TIWI", lim, TARDE_H, True, col) for d in ds]
        sim = sum(r is True for r in res); nao = sum(r is False for r in res)
        partes.append(f"{nome[0]} {sim}/{sim+nao}")
    print(f"  TIWI {ano}: " + " | ".join(partes))

# 2) curva do dia: media da fracao < 210 K por hora local, nos 3 novembros
print("\n## 2. A curva do dia nos 3 novembros: fracao media da area com topo < 210 K, por hora local")
print("hora | " + " | ".join(regioes))
for h in range(10, 22):
    vals = []
    for reg in regioes:
        v = [dados[(d, hh)][reg][0] for (d, hh) in dados if hh == h and d.month == 11]
        vals.append(f"{100*np.mean(v):5.1f} % (n={len(v)})")
    print(f"{h:02d}h | " + " | ".join(vals))

# 3) a hora: nos dias de tempestade em TIWI (lim 10 %, manha limpa), a primeira hora com >= 2 % < 210 K e a hora do maximo
from collections import Counter
for rot, lim in (("C (>= 2 % < 210 K)", 0.02), ("E (>= 10 % < 210 K)", 0.10)):
    print(f"\n## 3. A hora, nos dias de tempestade nas Tiwi (novembros, definicao {rot}, manha limpa)")
    prim = []; pico = []; tmin = []; dias = 0
    for d in sorted({d for (d, h) in dados if d.month == 11}):
        if dia_tempestade(d, "TIWI", lim, TARDE_H) is True:
            dias += 1
            serie = [(h, dados[(d, h)]["TIWI"][0], dados[(d, h)]["TIWI"][2]) for h in range(10, 22) if (d, h) in dados]
            if serie and serie[0][0] == 10 and serie[0][1] < 0.02:
                prim.append(next((h for h, f, _ in serie if f >= 0.02), None))
            mx = max(serie, key=lambda x: x[1])
            pico.append(mx[0]); tmin.append(min(t for h, _, t in serie if 13 <= h <= 18))   # so a tarde: a noite pode trazer outro sistema
    pv = [p for p in prim if p is not None]
    print(f"dias: {dias}; nascimento (1a hora com >= 2 % da area < 210 K, com < 2 % as 10h): {sorted(Counter(pv).items())} | mediana {np.median(pv)} | entre 14h e 16h: {sum(14 <= p <= 16 for p in pv)} de {len(pv)}")
    print(f"hora da maior area < 210 K: {sorted(Counter(pico).items())} | mediana {np.median(pico)} | entre 15h e 16h: {sum(15 <= p <= 16 for p in pico)} de {len(pico)}")
    tmin = np.array(tmin)
    print(f"topo mais frio do dia (K): mediana {np.median(tmin):.1f} ({np.median(tmin)-273.15:.1f} C); min {tmin.min():.1f} ({tmin.min()-273.15:.1f} C); "
          f"dias abaixo de 195 K (-78 C): {(tmin<195).sum()} de {len(tmin)}; abaixo de 190 K (-83 C): {(tmin<190).sum()}")

# 4) os meses: set/2024 a mar/2025, nas horas comuns (10h, 14h, 16h, 18h)
print("\n## 4. Os meses, de set/2024 a mar/2025 (10h, 14h, 16h e 18h em Darwin; limiar 10 %)")
TARDE_4 = [14, 16, 18]
meses = [(2024, 9), (2024, 10), (2024, 11), (2024, 12), (2025, 1), (2025, 2), (2025, 3)]
for (a, m) in meses:
    ds = sorted({d for (d, h) in dados if d.year == a and d.month == m})
    linha = []
    for reg in regioes:
        res = [dia_tempestade(d, reg, 0.10, TARDE_4) for d in ds]
        sim = sum(r is True for r in res); nao = sum(r is False for r in res); nub = sum(r == "manha_nublada" for r in res); falta = sum(r is None for r in res)
        res2 = [dia_tempestade(d, reg, 0.10, TARDE_4, False) for d in ds]
        sim2 = sum(r is True for r in res2); tot2 = sum(r in (True, False) for r in res2)
        resB = [dia_tempestade(d, reg, 0.05, TARDE_4, True, 1) for d in ds]
        simB = sum(r is True for r in resB); totB = sum(r in (True, False) for r in resB)
        resC = [dia_tempestade(d, reg, 0.02, TARDE_4, True, 0) for d in ds]
        simC = sum(r is True for r in resC); totC = sum(r in (True, False) for r in resC)
        linha.append(f"{reg} C {simC}/{totC}, E {sim}/{sim+nao}, B {simB}/{totB} (manha nublada {nub}; E sem exigir manha: {sim2}/{tot2})")
    print(f"- {a}-{m:02d} ({len(ds)} dias): " + " | ".join(linha))

# 5) prova visual opcional: um dia tipico, as Tiwi as 10h, 13h, 15h, 17h
if len(sys.argv) > 2:
    from PIL import Image, ImageDraw
    alvo = None
    for d in sorted({d for (d, h) in dados if d.month == 11 and d.year == 2024}):
        if dia_tempestade(d, "TIWI", 0.20, TARDE_H) is True and all((d, h) in dados for h in (10, 13, 15, 17)):
            if dados[(d, 15)]["MAR"][0] < 0.01:
                alvo = d; break
    if alvo:
        quadros = []
        for h in (10, 13, 15, 17):
            utc = dt.datetime.combine(alvo, dt.time(h)) - dt.timedelta(hours=9, minutes=30)
            T = np.load(os.path.join(pasta, "cortes", f"{utc:%Y%m%d_%H%M}.npz"))["T"]
            g = np.clip((310 - np.nan_to_num(T, nan=310)) / (310 - 190), 0, 1)
            rgb = np.stack([g * 255] * 3, -1).astype(np.uint8)
            frio = T < 210; rgb[frio] = [220, 40, 30]
            for mm, cor in ((m_tiwi, [40, 200, 255]), (m_mar, [60, 120, 255]), (m_terra, [255, 200, 0])):
                borda = mm & ~np.roll(mm, 1, 0) | mm & ~np.roll(mm, 1, 1)
                rgb[borda] = cor
            im = Image.fromarray(rgb).resize((W * 3, H * 3), Image.NEAREST)
            ImageDraw.Draw(im).text((8, 8), f"{alvo:%d/%m/%Y} {h:02d}:00 (Darwin)", fill=(255, 255, 0))
            quadros.append(im)
        folha = Image.new("RGB", (W * 3 * 2, H * 3 * 2))
        for i, q in enumerate(quadros):
            folha.paste(q, ((i % 2) * W * 3, (i // 2) * H * 3))
        folha.save(sys.argv[2]); print("\n# prova visual:", sys.argv[2], "dia", alvo)
