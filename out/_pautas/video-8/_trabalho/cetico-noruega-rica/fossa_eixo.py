# O eixo da fossa norueguesa (Norskerenna) entre 57,75 N e 62,25 N, pela batimetria aberta da EMODnet
# (REST depth_profile, CC BY 4.0), um pedido por vez, com o User-Agent do canal.
# Para cada latitude: perfil de 1,5 E a 7,5 E; o eixo e o ponto mais fundo a leste de 2,5 E;
# a borda oeste e o ultimo ponto mais raso que 200 m a oeste do eixo (a "beira" do que a convencao
# de 1958 chamava de plataforma, pelo criterio dos 200 m).
# Saida: dados/fossa_eixo.csv (lat, lon_borda_oeste_200m, lon_eixo, prof_eixo_m)
# Uso: python -X utf8 -B fossa_eixo.py
import json, time, urllib.request, csv, os

UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
AQUI = os.path.dirname(os.path.abspath(__file__))
SAIDA = os.path.join(AQUI, "dados", "fossa_eixo.csv")
CACHE = os.path.join(AQUI, "dados", "fossa_perfis.json")

LON0, LON1 = 1.5, 7.5
lats = [round(57.75 + 0.25 * i, 2) for i in range(19)]  # 57,75 ... 62,25

cache = {}
if os.path.exists(CACHE):
    cache = json.load(open(CACHE, encoding="utf-8"))

for lat in lats:
    k = str(lat)
    if k in cache:
        continue
    url = ("https://rest.emodnet-bathymetry.eu/depth_profile?geom=LINESTRING(%s%%20%s,%s%%20%s)"
           % (LON0, lat, LON1, lat))
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        cache[k] = json.loads(r.read().decode("utf-8"))
    json.dump(cache, open(CACHE, "w", encoding="utf-8"))
    time.sleep(1.2)

linhas = []
for lat in lats:
    prof = cache[str(lat)]
    n = len(prof)
    lons = [LON0 + (LON1 - LON0) * i / (n - 1) for i in range(n)]
    # terra ou sem dado: None ou valor >= 0
    # so o mar aberto: de 2,5 E para leste ate a primeira terra (sem dado ou >= 0), sem entrar nos fiordes
    cand = []
    for lo, p in zip(lons, prof):
        if lo < 2.5:
            continue
        if p is None or p >= 0:
            break
        cand.append((lo, p))
    pts = [(lo, p) for lo, p in zip(lons, prof) if p is not None and p < 0 and lo <= (cand[-1][0] if cand else LON0)]
    if not cand:
        continue
    lo_eixo, p_eixo = min(cand, key=lambda t: t[1])  # mais fundo
    # borda oeste: ultimo ponto com profundidade menor que 200 m a oeste do eixo
    oeste = [(lo, p) for lo, p in pts if lo < lo_eixo and p > -200]
    lo_borda = max(oeste)[0] if oeste else None
    linhas.append([lat, None if lo_borda is None else round(lo_borda, 3), round(lo_eixo, 3), round(-p_eixo, 1)])
    print(lat, "borda200 oeste:", linhas[-1][1], "| eixo:", linhas[-1][2], "| prof eixo (m):", linhas[-1][3], "| pontos:", n)

with open(SAIDA, "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["lat", "lon_borda_oeste_200m", "lon_eixo", "prof_eixo_m"])
    w.writerows(linhas)
print("gravado", SAIDA)
