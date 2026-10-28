"""O perfil do fundo para a tela final do vídeo 4 (atlantico-fundo), cena s75, "A · A descida" (pesquisa-geo, 28/10/2026).

O Lucas escolheu a tela final "A · A descida (Recomendado)" (roteiros/atlantico-fundo/decisoes-lucas.md, "A tela final", 28/10/2026,
14:5x): a s75 vira um corte vertical do mar, a costa de Aguadilla à esquerda e o norte à direita, e a câmera desce até o anel. Este
script dá o fundo REAL desse corte: a GEBCO_2026 (15") amostrada ao longo da geodésica WGS84 das 83 mi, da costa de Aguadilla
(F04: 18,5130°N, 67,1145°W) ao anel (F10: 19,712°N, 67,311°W, o ponto do sonar da Five Deeps), a cada ~0,5 km; mais uma continuação
declarada ao norte, na mesma geodésica, além do anel (40 km), e um recuo curto em terra ao sul da costa (3 km), também declarado.

Cada amostra leva o valor CRU da célula da grade que contém o ponto (a grade é registrada no centro da célula): nada se interpola nem se
suaviza. Só a POSIÇÃO de um cruzamento de isóbata entre duas amostras se acha por interpolação linear da distância (dito no resumo).

Sem rede: lê a grade e a TID da cesta da GEBCO já baixada na parte B (_tmp/pesquisa-geo/baixado/gebco-cesta-1/), de novo, do .asc (não do
cache .npy, que só se compara), e as isóbatas de 7.000 e 8.000 m dos mapas (_tmp/pesquisa-geo/fc/, as mesmas bytes de _media/geo/).
NÃO escreve nada em _media/.

uso (da raiz do canal):
  python -X utf8 -B out/atlantico-fundo/_pesquisa/geo_perfil_s75.py            # mede e grava _dados/perfil-aguadilla-anel.{json,csv} e a prévia
  python -X utf8 -B out/atlantico-fundo/_pesquisa/geo_perfil_s75.py --pauta [--visto] [--need=<id>]
        # registra o item na pauta-geo.json/.md (lê o .json gravado; não mede de novo). --visto: a prévia foi olhada.
        # --need=<id>: o id do needs.geo da s75, quando o montador o puser no espelho.
"""
import os, sys, json, math, hashlib, csv, datetime, statistics

AQUI = os.path.dirname(os.path.abspath(__file__))
PROJ = os.path.normpath(os.path.join(AQUI, ".."))
sys.path.insert(0, AQUI)
import numpy as np
from geo_gebco import GEBCO_CITACAO, GEBCO_LICENCA, GEBCO_TERMOS_URL, GEBCO_TERMOS_COPIA, GEBCO_DOI
from geo_util import vincenty, vincenty_direto, A_WGS, B_WGS, F_WGS

REL = lambda p: os.path.relpath(p, PROJ).replace("\\", "/")
CESTA = os.path.join(PROJ, "_tmp", "pesquisa-geo", "baixado", "gebco-cesta-1")
ZIP = os.path.join(CESTA, "GEBCO_28_Oct_2026_c78af7c17e66.zip")
ASC = os.path.join(CESTA, "x", "gebco_2026_n26.0_s14.0_w-75.0_e-58.0_ascii.asc")
ASC_TID = os.path.join(CESTA, "x", "gebco_2026_tid_n26.0_s14.0_w-75.0_e-58.0_ascii.asc")
CACHE = os.path.join(PROJ, "_tmp", "pesquisa-geo", "grade")
FC = os.path.join(PROJ, "_tmp", "pesquisa-geo", "fc")
SAIDA = os.path.join(PROJ, "_dados")
BASE = "perfil-aguadilla-anel"
PREVIA = os.path.join(PROJ, "_tmp", "pesquisa-geo", "perfil", "previa-perfil.png")
PAUTA_JSON = os.path.join(PROJ, "_pesquisa", "pauta-geo.json")
PAUTA_MD = os.path.join(PROJ, "_pesquisa", "pauta-geo.md")

# o que a parte B registrou (a procedência de _media/base/gebco-caribe.png.json e o pauta-geo.json): conferido aqui, byte a byte
SHA_ASC_ESPERADO = "8cd9cbbbda0518519cb1db686bcbb013874df30aa6a8443ccec897afc8abb096"
SHA_TID_ESPERADO = "ce3a3c7cb8a5c6ff7398940edea522acbc40e4d943523119f219ff2f55ac1251"
SHA_ZIP_PREFIXO = "ab97d2ae9ce0d3e8"   # _tmp/pesquisa-geo/http-pedidos.log, linha do download da cesta
ISOBATAS = {7000: ("fossa-porto-rico", "c7ab743f5be68185a8f49092a5a7b3766665e725ee73ce209a8f2685a2eb9eaa"),
            8000: ("fossa-porto-rico-trecho-mais-fundo", "fe65ab325dc9afd8783c436d722f3ead36c014397135755b224235b9bc392180")}

COSTA = {"nome": "a costa de Aguadilla (o ponto das 83 mi)", "lat": 18.5130, "lon": -67.1145,
         "fonte": "F04 (S01, S55): o ponto da costa do Census 1:500.000 mais perto do anel; conferido no cb_2025 (2,7 m) na parte B",
         "onde_esta": "out/atlantico-fundo/_pesquisa/pauta-dados.md e pauta-geo.json (_media/geo/aguadilla-costa-ponto.json)"}
ANEL = {"nome": "o anel: o ponto mais fundo do Atlântico (o sonar da Five Deeps, 19/12/2018)", "lat": 19.712, "lon": -67.311,
        "fonte": "F10 (S01, Stewart & Jamieson 2021, Tabela 1)", "profundidade_publicada_m": 8378, "profundidade_publicada_ft": 27487,
        "onde_esta": "_media/geo/ponto-mais-fundo-atlantico.json (pauta-geo.json)"}
PASSO_ALVO_M = 500.0
CONTINUACAO_M = 40000.0
RECUO_TERRA_M = 3000.0
FT = 0.3048
MI = 1609.344
SONAR_M = 8378
LIMIAR_GEBCO_PR = 8383      # o limiar da parte B: "810 células mais fundas que 8.383 m" na fossa
FAIXA_PEIXES_M = (8200, 8400)   # F70: ~26,900–27,560 FT (8,200–8,400 M) · FISH LIMIT (NOAA ESTIMATE)
SPIKE_M = 50                # célula mais funda (ou mais rasa) que TODOS os 8 vizinhos por mais que isto = suspeita de ruído
CORREDOR_M = 1000.0
RUIDO_CONHECIDO = (19.877, -65.235, 8824)   # parte B: a célula mais funda da fossa, ruído de linha de sonar
TID_NOMES = {0: "terra", 10: "monofeixe", 11: "multifeixe", 12: "sísmica", 13: "sondagem isolada", 14: "sondagem de carta (ENC)",
             15: "lidar", 16: "sensor óptico", 17: "combinação de medidas diretas", 40: "previsto pela gravimetria de satélite",
             41: "interpolado por algoritmo", 42: "curvas de carta", 43: "curvas de ENC", 44: "grade mista (medido + gravimetria)",
             45: "gravimetria aérea", 70: "grade pré-gerada", 71: "origem desconhecida", 72: "pontos de controle"}


def sha256(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def ler_asc(caminho):
    """Lê o Esri ASCII inteiro, do arquivo (sem cache). Devolve (grade int32, cabeçalho)."""
    with open(caminho, "r", encoding="ascii") as f:
        hdr, resto = {}, ""
        while True:
            linha = f.readline()
            partes = linha.split()
            if len(partes) == 2 and partes[0][0].isalpha():
                hdr[partes[0].lower()] = float(partes[1])
            else:
                resto = linha
                break
        dados = np.fromstring(resto + " " + f.read(), dtype=np.float64, sep=" ")
    nr, nc = int(hdr["nrows"]), int(hdr["ncols"])
    if dados.size != nr * nc:
        raise SystemExit(f"{caminho}: {dados.size} valores, esperado {nr}x{nc}")
    return dados.reshape(nr, nc).astype(np.int32), hdr


def celula(hdr, lon, lat):
    c = hdr["cellsize"]
    j = int(math.floor((lon - hdr["xllcorner"]) / c))
    i = int(hdr["nrows"]) - 1 - int(math.floor((lat - hdr["yllcorner"]) / c))
    return i, j


def centro(hdr, i, j):
    c = hdr["cellsize"]
    return (hdr["yllcorner"] + (int(hdr["nrows"]) - i - 0.5) * c, hdr["xllcorner"] + (j + 0.5) * c)


def vincenty_inversa(lon1, lat1, lon2, lat2):
    """Vincenty (1975) inversa no WGS84: (distância m, azimute em 1, azimute de chegada em 2), graus a partir do norte."""
    L = math.radians(lon2 - lon1)
    U1 = math.atan((1 - F_WGS) * math.tan(math.radians(lat1)))
    U2 = math.atan((1 - F_WGS) * math.tan(math.radians(lat2)))
    sU1, cU1, sU2, cU2 = math.sin(U1), math.cos(U1), math.sin(U2), math.cos(U2)
    lam = L
    for _ in range(200):
        sl, cl = math.sin(lam), math.cos(lam)
        ss = math.hypot(cU2 * sl, cU1 * sU2 - sU1 * cU2 * cl)
        cs = sU1 * sU2 + cU1 * cU2 * cl
        sig = math.atan2(ss, cs)
        sa = cU1 * cU2 * sl / ss
        c2a = 1 - sa * sa
        c2sm = cs - 2 * sU1 * sU2 / c2a if c2a else 0.0
        C = F_WGS / 16 * c2a * (4 + F_WGS * (4 - 3 * c2a))
        lp = lam
        lam = L + (1 - C) * F_WGS * sa * (sig + C * ss * (c2sm + C * cs * (-1 + 2 * c2sm * c2sm)))
        if abs(lam - lp) < 1e-13:
            break
    u2 = c2a * (A_WGS ** 2 - B_WGS ** 2) / B_WGS ** 2
    Ak = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)))
    Bk = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)))
    ds = Bk * ss * (c2sm + Bk / 4 * (cs * (-1 + 2 * c2sm * c2sm) - Bk / 6 * c2sm * (-3 + 4 * ss * ss) * (-3 + 4 * c2sm * c2sm)))
    s = B_WGS * Ak * (sig - ds)
    sl, cl = math.sin(lam), math.cos(lam)
    a1 = math.degrees(math.atan2(cU2 * sl, cU1 * sU2 - sU1 * cU2 * cl))
    a2 = math.degrees(math.atan2(cU1 * sl, -sU1 * cU2 + cU1 * sU2 * cl))
    return s, a1, a2


def fmt_br(v, casas=0):
    s = f"{v:,.{casas}f}"
    return s.replace(",", "X").replace(".", ",").replace("X", ".")


def medir():
    t0 = datetime.datetime.now().astimezone()
    print("conferindo a cesta da GEBCO …")
    sha_zip = sha256(ZIP)
    if not sha_zip.startswith(SHA_ZIP_PREFIXO):
        raise SystemExit(f"o zip mudou: {sha_zip}")
    sha_asc, sha_tid = sha256(ASC), sha256(ASC_TID)
    if sha_asc != SHA_ASC_ESPERADO or sha_tid != SHA_TID_ESPERADO:
        raise SystemExit(f"a grade não é a da parte B: {sha_asc} / {sha_tid}")
    print("lendo a grade e a TID do .asc (sem cache) …")
    z, hz = ler_asc(ASC)
    tid, ht = ler_asc(ASC_TID)
    for k in ("ncols", "nrows", "xllcorner", "yllcorner", "cellsize"):
        if abs(hz[k] - ht[k]) > 1e-9:
            raise SystemExit("a TID não casa com a grade: " + k)
    cache_igual = None
    npy = os.path.join(CACHE, "gebco_2026_n26.0_s14.0_w-75.0_e-58.0_ascii.npy")
    if os.path.exists(npy):
        cache_igual = bool(np.array_equal(np.load(npy).astype(np.int32), z))

    # a geodésica
    s, az1, az2 = vincenty_inversa(COSTA["lon"], COSTA["lat"], ANEL["lon"], ANEL["lat"])
    s_util = vincenty(COSTA["lon"], COSTA["lat"], ANEL["lon"], ANEL["lat"])
    N = round(s / PASSO_ALVO_M)
    passo = s / N
    fim = vincenty_direto(COSTA["lon"], COSTA["lat"], az1, s)
    erro_fim = vincenty(fim[0], fim[1], ANEL["lon"], ANEL["lat"])
    M = round(CONTINUACAO_M / passo)
    R = round(RECUO_TERRA_M / passo)
    # a continuação sai do anel com o azimute de chegada: é a mesma geodésica. Confere-se contra o direto a partir da costa.
    cont_teste = vincenty_direto(ANEL["lon"], ANEL["lat"], az2, M * passo)
    cont_ref = vincenty_direto(COSTA["lon"], COSTA["lat"], az1, s + M * passo)
    erro_cont = vincenty(*cont_teste, *cont_ref)
    print(f"geodésica: {s:.3f} m (geo_util: {s_util:.3f}), az {az1:.6f}° → {az2:.6f}°, {N} passos de {passo:.3f} m; fim a {erro_fim * 1000:.3f} mm do anel")

    def amostra(trecho, k, lon, lat, d_costa):
        i, j = celula(hz, lon, lat)
        v = int(z[i, j])
        t = int(tid[i, j])
        viz = [int(z[i + di, j + dj]) for di in (-1, 0, 1) for dj in (-1, 0, 1) if (di, dj) != (0, 0)]
        med = statistics.median(viz)
        prof = -v
        marcas = []
        if v >= 0:
            marcas.append("terra")
        if prof > SONAR_M:
            marcas.append("mais_funda_que_o_sonar_8378")
        if v < min(viz) - SPIKE_M or v > max(viz) + SPIKE_M:
            marcas.append("ruido_suspeito")
        return {"n": k, "trecho": trecho, "dist_km": round(d_costa / 1000, 4), "dist_mi": round(d_costa / MI, 4),
                "lat": round(lat, 6), "lon": round(lon, 6), "celula": [i, j],
                "celula_centro": [round(x, 6) for x in centro(hz, i, j)],
                "elevacao_m": v, "profundidade_m": prof, "profundidade_ft": int(round(prof / FT)),
                "tid": t, "tid_tipo": TID_NOMES.get(t, "?"), "desvio_dos_vizinhos_m": int(round(-(v - med))),
                "marcas": marcas}

    linha = []
    for k in range(N + 1):
        if k == N:
            lon, lat = ANEL["lon"], ANEL["lat"]
        elif k == 0:
            lon, lat = COSTA["lon"], COSTA["lat"]
        else:
            lon, lat = vincenty_direto(COSTA["lon"], COSTA["lat"], az1, k * passo)
        a = amostra("linha_83mi", k, lon, lat, k * passo)
        if k == 0:
            a["marcas"].append("costa_F04")
        if k == N:
            a["marcas"].append("anel_F10")
        linha.append(a)
    cont = []
    for k in range(1, M + 1):
        lon, lat = vincenty_direto(ANEL["lon"], ANEL["lat"], az2, k * passo)
        a = amostra("continuacao_norte", N + k, lon, lat, s + k * passo)
        a["dist_do_anel_km"] = round(k * passo / 1000, 4)
        cont.append(a)
    terra = []
    for k in range(R, 0, -1):
        lon, lat = vincenty_direto(COSTA["lon"], COSTA["lat"], (az1 + 180) % 360, k * passo)
        terra.append(amostra("recuo_em_terra_sul", -k, lon, lat, -k * passo))

    tudo = terra + linha + cont

    # o anel e a vizinhança
    ia, ja = linha[-1]["celula"]
    viz3 = z[ia - 1:ia + 2, ja - 1:ja + 2]
    viz5 = z[ia - 2:ia + 3, ja - 2:ja + 3]
    anel_res = {"celula": [ia, ja], "celula_centro": linha[-1]["celula_centro"], "tid": linha[-1]["tid"],
                "grade_m": linha[-1]["profundidade_m"], "grade_ft": linha[-1]["profundidade_ft"],
                "publicado_m": SONAR_M, "publicado_ft": 27487, "diferenca_m": linha[-1]["profundidade_m"] - SONAR_M,
                "vizinhanca_3x3_m": [int(-viz3.max()), int(-viz3.min())], "vizinhanca_5x5_m": [int(-viz5.max()), int(-viz5.min())],
                "nota": "a grade de 15\" é a média de uma célula de ~460 × 440 m: não é a sondagem do ponto. O número de tela é o publicado (8.378 m = 27.487 ft), nunca o da grade."}

    def mais_funda(lista):
        mar = [a for a in lista if a["elevacao_m"] < 0]
        a = max(mar, key=lambda x: x["profundidade_m"])
        return {"n": a["n"], "dist_km": a["dist_km"], "dist_mi": a["dist_mi"], "lat": a["lat"], "lon": a["lon"],
                "profundidade_m": a["profundidade_m"], "profundidade_ft": a["profundidade_ft"], "tid": a["tid"],
                "contra_o_sonar_m": a["profundidade_m"] - SONAR_M}

    # cruzamentos de isóbata pelo próprio perfil (posição por interpolação linear da distância entre as duas amostras)
    def cruzamentos_perfil(lista, prof):
        out = []
        for a, b in zip(lista[:-1], lista[1:]):
            pa, pb = a["profundidade_m"], b["profundidade_m"]
            if (pa < prof) != (pb < prof):
                f = (prof - pa) / (pb - pa)
                d = a["dist_km"] + f * (b["dist_km"] - a["dist_km"])
                out.append({"dist_km": round(d, 3), "dist_mi": round(d * 1000 / MI, 3), "entre_amostras": [a["n"], b["n"]],
                            "sentido": "descendo" if pb > pa else "subindo"})
        return out

    # cruzamentos com os polígonos das isóbatas dos mapas
    from shapely.geometry import LineString, Point, shape
    from shapely.ops import unary_union
    coords = [(a["lon"], a["lat"]) for a in linha + cont]
    ls = LineString(coords)
    iso = {}
    for prof, (slug, sha_esp) in ISOBATAS.items():
        p = os.path.join(FC, slug + ".json")
        sh = sha256(p)
        if sh != sha_esp:
            raise SystemExit(f"{slug}: não é o arquivo dos mapas ({sh})")
        g = unary_union([shape(f["geometry"]) for f in json.load(open(p, encoding="utf-8"))["features"]])
        inter = ls.intersection(g.boundary)
        pts = [inter] if inter.geom_type == "Point" else list(getattr(inter, "geoms", []))
        lst = []
        for q in pts:
            d = vincenty(COSTA["lon"], COSTA["lat"], q.x, q.y)
            # o ponto está no prolongamento? (a continuação começa no anel; a distância da costa ao longo da geodésica é a de Vincenty)
            dd = 1.0 / 111000 * 50   # 50 m adiante, ao longo da linha
            frac = ls.project(q)
            depois = ls.interpolate(frac + dd)
            lst.append({"dist_km": round(d / 1000, 3), "dist_mi": round(d / MI, 3), "lat": round(q.y, 6), "lon": round(q.x, 6),
                        "sentido": "entra (mais fundo adiante)" if g.contains(depois) else "sai (mais raso adiante)",
                        "trecho": "linha_83mi" if d <= s + 1 else "continuacao_norte"})
        lst.sort(key=lambda x: x["dist_km"])
        iso[str(prof)] = {"poligono": f"_media/geo/{slug}.json", "sha256": sh,
                          "metodo_do_poligono": "marching squares nos centros das células, furos preenchidos, simplificado a 0,002° (~200 m) (parte B, geo_fundo.py)",
                          "cruza_o_poligono_dos_mapas": lst,
                          "cruza_no_perfil_cru": cruzamentos_perfil(linha + cont, prof),
                          "ft": int(round(prof / FT))}

    # a faixa dos peixes no perfil
    def trechos(lista, cond):
        out, ini = [], None
        for a in lista:
            if cond(a) and ini is None:
                ini = a
            if not cond(a) and ini is not None:
                out.append([ini["dist_km"], ant["dist_km"]])
                ini = None
            ant = a
        if ini is not None:
            out.append([ini["dist_km"], ant["dist_km"]])
        return out

    faixa = {"faixa_m": list(FAIXA_PEIXES_M), "faixa_ft": [26903, 27559],
             "trechos_com_fundo_na_faixa_km": trechos(linha + cont, lambda a: FAIXA_PEIXES_M[0] <= a["profundidade_m"] <= FAIXA_PEIXES_M[1]),
             "trechos_com_fundo_abaixo_de_8400_km": trechos(linha + cont, lambda a: a["profundidade_m"] > FAIXA_PEIXES_M[1]),
             "fonte_da_faixa": "F70 (NOAA Ocean Exploration), _dados/s74.json"}

    # relevos notáveis (proeminência 1D sobre os valores crus)
    def proeminentes(lista, minimo=150):
        v = [a["profundidade_m"] for a in lista]
        out = []
        for sinal, nome in ((1, "fundo local"), (-1, "alto local")):
            e = [sinal * x for x in v]
            for i in range(1, len(e) - 1):
                if not (e[i] >= e[i - 1] and e[i] > e[i + 1]):
                    continue
                esq = e[:i][::-1]
                dir_ = e[i + 1:]
                def base(lado):
                    # o mínimo do lado até o primeiro ponto mais alto (ou até a ponta): a definição usual de proeminência
                    m = e[i]
                    for x in lado:
                        if x > e[i]:
                            break
                        m = min(m, x)
                    return m
                prom = e[i] - max(base(esq), base(dir_))
                if prom >= minimo:
                    a = lista[i]
                    out.append({"tipo": nome, "dist_km": a["dist_km"], "dist_mi": a["dist_mi"], "profundidade_m": a["profundidade_m"],
                                "profundidade_ft": a["profundidade_ft"], "proeminencia_m": int(prom), "trecho": a["trecho"]})
        return sorted(out, key=lambda x: x["dist_km"])

    # declives
    def declives(lista):
        ang1 = []
        for a, b in zip(lista[:-1], lista[1:]):
            dz = b["profundidade_m"] - a["profundidade_m"]
            dx = (b["dist_km"] - a["dist_km"]) * 1000
            ang1.append((math.degrees(math.atan(abs(dz) / dx)), a, b))
        mx = max(ang1, key=lambda x: x[0])
        ang4 = []
        for a, b in zip(lista[:-4], lista[4:]):
            dz = b["profundidade_m"] - a["profundidade_m"]
            dx = (b["dist_km"] - a["dist_km"]) * 1000
            ang4.append((math.degrees(math.atan(abs(dz) / dx)), a, b))
        mx4 = max(ang4, key=lambda x: x[0])
        return {"mais_ingreme_entre_2_amostras": {"graus": round(mx[0], 1), "de_km": mx[1]["dist_km"], "a_km": mx[2]["dist_km"],
                                                  "de_m": mx[1]["profundidade_m"], "a_m": mx[2]["profundidade_m"]},
                "mais_ingreme_em_2_km": {"graus": round(mx4[0], 1), "de_km": mx4[1]["dist_km"], "a_km": mx4[2]["dist_km"],
                                         "de_m": mx4[1]["profundidade_m"], "a_m": mx4[2]["profundidade_m"]}}

    def graus_com_exagero(g, ve):
        return round(math.degrees(math.atan(ve * math.tan(math.radians(g)))), 1)

    # o corredor de ±1 km em volta da linha (linha + continuação): o ruído da grade perto do corte
    lat0 = (COSTA["lat"] + ANEL["lat"]) / 2
    kx, ky = 111320 * math.cos(math.radians(lat0)), 110574
    lats = [a["lat"] for a in linha + cont]
    lons = [a["lon"] for a in linha + cont]
    i_min, j_min = celula(hz, min(lons) - 0.02, max(lats) + 0.02)
    i_max, j_max = celula(hz, max(lons) + 0.02, min(lats) - 0.02)
    sub = z[i_min:i_max + 1, j_min:j_max + 1]
    ii, jj = np.mgrid[i_min:i_max + 1, j_min:j_max + 1]
    clat = hz["yllcorner"] + (int(hz["nrows"]) - ii - 0.5) * hz["cellsize"]
    clon = hz["xllcorner"] + (jj + 0.5) * hz["cellsize"]
    X, Y = (clon - COSTA["lon"]) * kx, (clat - COSTA["lat"]) * ky
    P = np.array([((lo - COSTA["lon"]) * kx, (la - COSTA["lat"]) * ky) for lo, la in zip(lons, lats)])
    dmin = np.full(X.shape, np.inf)
    for (x1, y1), (x2, y2) in zip(P[:-1], P[1:]):
        vx, vy = x2 - x1, y2 - y1
        t = np.clip(((X - x1) * vx + (Y - y1) * vy) / (vx * vx + vy * vy), 0, 1)
        dmin = np.minimum(dmin, np.hypot(X - (x1 + t * vx), Y - (y1 + t * vy)))
    no = dmin <= CORREDOR_M
    prof_c = -sub[no]
    imx = int(np.argmax(prof_c))
    loc = (float(clat[no][imx]), float(clon[no][imx]))
    # picos de uma célula no corredor
    pad = np.pad(z.astype(np.int64), 1, mode="edge")[i_min:i_max + 3, j_min:j_max + 3]
    vizs = [pad[1 + di:1 + di + sub.shape[0], 1 + dj:1 + dj + sub.shape[1]] for di in (-1, 0, 1) for dj in (-1, 0, 1) if (di, dj) != (0, 0)]
    vmin, vmax = np.min(vizs, axis=0), np.max(vizs, axis=0)
    pico = ((sub < vmin - SPIKE_M) | (sub > vmax + SPIKE_M)) & no
    picos = [{"lat": round(float(clat[p]), 5), "lon": round(float(clon[p]), 5), "profundidade_m": int(-sub[p]),
              "tid": int(tid[i_min + p[0], j_min + p[1]])} for p in zip(*np.nonzero(pico))]
    d_ruido = min(vincenty(RUIDO_CONHECIDO[1], RUIDO_CONHECIDO[0], a["lon"], a["lat"]) for a in linha + cont)
    corredor = {"largura": "±1 km em volta da linha das 83 mi e da continuação (centros de célula)", "celulas": int(no.sum()),
                "mais_funda_m": int(prof_c[imx]), "mais_funda_em": [round(loc[0], 5), round(loc[1], 5)],
                "celulas_mais_fundas_que_8378": int((prof_c > SONAR_M).sum()),
                "celulas_mais_fundas_que_8383": int((prof_c > LIMIAR_GEBCO_PR).sum()),
                "picos_de_uma_celula": picos, "regra_do_pico": f"célula mais funda ou mais rasa que todos os 8 vizinhos por mais de {SPIKE_M} m",
                "ruido_conhecido_8824m": {"lat": RUIDO_CONHECIDO[0], "lon": RUIDO_CONHECIDO[1],
                                         "distancia_minima_da_linha_km": round(d_ruido / 1000, 1)}}

    linhas_atravessadas = linha[0]["celula"][0] - linha[-1]["celula"][0] + 1
    linhas_amostradas = len({a["celula"][0] for a in linha})
    celulas_distintas = len({tuple(a["celula"]) for a in linha})
    # TID ao longo da linha
    cont_tid = {}
    for a in linha:
        cont_tid[a["tid"]] = cont_tid.get(a["tid"], 0) + 1
    primeiro_nao_multi = [a["dist_km"] for a in linha if a["tid"] != 11]

    # exagero vertical para um corte 16:9
    def ve(larg_px, alt_px, comp_m, fundo_m):
        return (alt_px / fundo_m) / (larg_px / comp_m)
    fundo = max(a["profundidade_m"] for a in linha + cont)
    comp_l, comp_lc = s, s + M * passo
    casos = [
        ("quadro inteiro 3840 × 2160, da costa ao anel", 3840, 2160, comp_l),
        ("quadro inteiro 3840 × 2160, da costa ao fim da continuação", 3840, 2160, comp_lc),
        ("área segura 3440 × 1720 (x 200–3640, y 160–1880; identidade §4.2), da costa ao anel", 3440, 1720, comp_l),
        ("área segura 3440 × 1720, da costa ao fim da continuação", 3440, 1720, comp_lc),
        ("metade esquerda da área segura, 1720 × 1720 (a direita é da tela final do YouTube), da costa ao anel", 1720, 1720, comp_l),
    ]
    ve_casos = [{"caso": c, "largura_px": w, "altura_px": h, "comprimento_km": round(L / 1000, 2), "fundo_m": fundo,
                 "exagero": round(ve(w, h, L, fundo), 2)} for c, w, h, L in casos]
    ve_sugerido = 10
    px_km_h = 3440 / (comp_lc / 1000)
    exagero = {"formula": "exagero = (altura_px / fundo_m) ÷ (largura_px / comprimento_m): a escala vertical dividida pela horizontal",
               "fundo_usado_m": fundo, "casos": ve_casos,
               "sugestao": {"exagero": ve_sugerido,
                            "por_que": (f"×{ve_sugerido} põe a costa, o anel e a continuação inteiros na largura da área segura "
                                        f"({fmt_br(px_km_h, 1)} px/km na horizontal, {fmt_br(px_km_h * ve_sugerido)} px/km na vertical: os {fmt_br(fundo)} m dão "
                                        f"{fmt_br(fundo / 1000 * px_km_h * ve_sugerido)} px de altura, dentro dos 1.720), e é número redondo para a legenda. "
                                        "A câmera que se aproxima escala os dois eixos juntos e não muda o exagero; esticar só um eixo muda, e a legenda "
                                        "teria de mudar junto."),
                            "texto": "a legenda é do redator-de-tela; o número é o do desenho que o editor-de-arte fizer, qualquer que seja"},
               "nota_regra": "a proposta A cita 'como a identidade pede para o relevo real', mas marca/ não tem regra escrita de exagero (procurei 'exager'/'exagge' em marca/: nada); declará-lo é o que o ofício de honestidade do corte pede"}

    dec = {"linha": declives(linha), "continuacao": declives(cont)}
    for parte in dec.values():
        for k2 in parte.values():
            k2["graus_com_exagero_x10"] = graus_com_exagero(k2["graus"], 10)

    resumo = {
        "geodesica": {"elipsoide": "WGS84", "metodo": "Vincenty (1975) inversa e direta", "distancia_m": round(s, 3),
                      "distancia_km": round(s / 1000, 3), "distancia_mi": round(s / MI, 3), "conferida_por_geo_util_m": round(s_util, 3),
                      "azimute_na_costa_graus": round(az1, 6), "azimute_no_anel_graus": round(az2, 6),
                      "passo_m": round(passo, 3), "amostras_linha": N + 1, "amostras_continuacao": M, "amostras_recuo_em_terra": R,
                      "comprimento_continuacao_km": round(M * passo / 1000, 3), "comprimento_recuo_km": round(R * passo / 1000, 3),
                      "erro_do_ultimo_ponto_no_anel_mm": round(erro_fim * 1000, 4),
                      "erro_da_continuacao_contra_o_direto_da_costa_mm": round(erro_cont * 1000, 4),
                      "celulas_distintas_na_linha": len({tuple(a["celula"]) for a in linha}),
                      "linhas_da_grade_atravessadas": linhas_atravessadas,
                      "nota_amostragem": (f"a célula de 15\" mede ~463 m (N–S) × ~439 m (L–O) aqui, e a linha corre quase N–S (azimute {fmt_br(az1 % 360, 1)}°): "
                                          f"o passo de {fmt_br(passo, 1)} m dá no máximo uma amostra por célula ({celulas_distintas} células distintas em {N + 1} amostras) "
                                          f"e deixa de fora {linhas_atravessadas - linhas_amostradas} das {linhas_atravessadas} linhas da grade que a linha atravessa. "
                                          "O corredor de ±1 km (resumo.ruido.corredor) confere as células de fora.")},
        "anel": anel_res,
        "mais_funda_na_linha_83mi": mais_funda(linha),
        "mais_funda_na_continuacao": mais_funda(cont),
        "isobatas": iso,
        "faixa_dos_peixes": faixa,
        "relevos_notaveis": proeminentes(linha + cont),
        "declives": dec,
        "ruido": {"amostras_marcadas": [{"n": a["n"], "dist_km": a["dist_km"], "profundidade_m": a["profundidade_m"], "marcas": a["marcas"]}
                                        for a in tudo if set(a["marcas"]) & {"ruido_suspeito", "mais_funda_que_o_sonar_8378"}],
                  "corredor": corredor},
        "tid_na_linha": {f"{k} ({TID_NOMES.get(k, '?')})": v for k, v in sorted(cont_tid.items())},
        "tid_nota": (f"da linha das 83 mi, {cont_tid.get(11, 0)} de {len(linha)} amostras são multifeixe (TID 11); "
                     f"as outras são TID 17 e ficam até {fmt_br(max(primeiro_nao_multi) if primeiro_nao_multi else 0, 2)} km da costa"),
        "exagero_vertical": exagero,
        "costa": {"celula_da_costa_m": linha[0]["elevacao_m"], "tid": linha[0]["tid"],
                  "nota": "o ponto do Census cai numa célula de mar da GEBCO (elevação negativa): a costa da grade e a do Census concordam no ponto"},
    }

    geojson = {"type": "FeatureCollection", "features": [
        {"type": "Feature", "properties": {"nome": "linha das 83 mi (costa de Aguadilla → anel)", "trecho": "linha_83mi"},
         "geometry": {"type": "LineString", "coordinates": [[a["lon"], a["lat"]] for a in linha]}},
        {"type": "Feature", "properties": {"nome": "continuação ao norte, além do anel (declarada)", "trecho": "continuacao_norte"},
         "geometry": {"type": "LineString", "coordinates": [[linha[-1]["lon"], linha[-1]["lat"]]] + [[a["lon"], a["lat"]] for a in cont]}},
        {"type": "Feature", "properties": {"nome": "recuo em terra ao sul da costa (declarado)", "trecho": "recuo_em_terra_sul"},
         "geometry": {"type": "LineString", "coordinates": [[a["lon"], a["lat"]] for a in terra] + [[linha[0]["lon"], linha[0]["lat"]]]}}]}

    colunas = ["n", "trecho", "dist_km", "dist_mi", "lat", "lon", "elevacao_m", "profundidade_m", "profundidade_ft", "tid", "tid_tipo",
               "desvio_dos_vizinhos_m", "marcas"]
    doc = {
        "_o_que_e": ("O perfil REAL do fundo para a tela final do vídeo 4 (s75, 'A · A descida'): a GEBCO_2026 ao longo da geodésica WGS84 das 83 mi, "
                     "da costa de Aguadilla ao anel, a cada ~0,5 km, com o valor cru da célula (sem interpolar nem suavizar). Mais duas partes "
                     "DECLARADAS, gravadas à parte: a continuação ao norte, além do anel, na mesma geodésica (40 km), e um recuo curto em terra, "
                     "ao sul da costa (3 km). Quem desenha é o editor-de-arte; o exagero vertical vai declarado na legenda."),
        "proj": "atlantico-fundo", "cena": "s75", "agente": "pesquisa-geo",
        "decisao_lucas": {"pergunta": "Qual tela final fecha o vídeo 4? As quatro mantêm o pedido de comentário à esquerda nos primeiros segundos.",
                          "resposta": "A · A descida (Recomendado)", "quando": "28/10/2026, 14:5x, no chat da Sala, na conta reserva",
                          "onde": "roteiros/atlantico-fundo/decisoes-lucas.md, 'A tela final'; a proposta em out/atlantico-fundo/_tmp/tela-final/propostas.md"},
        "pedido": "a Sala, 28/10/2026, 15:1x: o perfil da GEBCO 2026 ao longo da linha das 83 mi, ~0,5 km, mais a continuação ao norte, gravada à parte",
        "needs_geo": {"id": None, "nota": "o needs.geo da s75 ainda não existe no espelho: o montador o acrescenta no re-espelho; o id se liga com --pauta --need=<id>"},
        "pontos": {"costa": COSTA, "anel": ANEL},
        "procedencia": {
            "dado": "GEBCO_2026 Grid (15 arc-second), publicada em abril de 2026 (date_created 2026-04-17); a TID 2026 ao lado",
            "como_veio": "app oficial de recorte download.gebco.net, cesta GEBCO_28_Oct_2026_c78af7c17e66, baixada na parte B (28/10/2026, 14:17)",
            "zip": {"arquivo": REL(ZIP), "bytes": os.path.getsize(ZIP), "sha256": sha_zip},
            "grade": {"arquivo": REL(ASC), "sha256": sha_asc, "formato": "Esri ASCII, registrada no centro da célula, WGS84 (lon, lat), metros, negativo = abaixo do nível do mar",
                      "ncols": int(hz["ncols"]), "nrows": int(hz["nrows"]), "xllcorner": hz["xllcorner"], "yllcorner": hz["yllcorner"], "cellsize": hz["cellsize"],
                      "mesma_do_cache_npy_da_parte_B": cache_igual},
            "tid": {"arquivo": REL(ASC_TID), "sha256": sha_tid},
            "terra": "em terra, a GEBCO_2026 vem do SRTM15+ V2.8 (GEBCO_Grid_documentation, §2.1, 'Land Data')",
            "isobatas_dos_mapas": {k: {"arquivo": v["poligono"], "sha256": v["sha256"]} for k, v in iso.items()},
            "citacao": GEBCO_CITACAO, "doi": "https://doi.org/" + GEBCO_DOI,
            "credito_tela": "GEBCO Compilation Group (2026) GEBCO 2026 Grid",
            "credito_descricao": GEBCO_CITACAO,
            "licenca": GEBCO_LICENCA, "termos": GEBCO_TERMOS_URL, "termos_copia": GEBCO_TERMOS_COPIA,
            "nao_serve_para_navegacao": True,
            "metodo": ("geodésica WGS84 da costa (F04) ao anel (F10) por Vincenty inversa; N = round(s/500) passos iguais; cada ponto por Vincenty "
                       "direta a k·passo da costa, com o azimute inicial; o último ponto é o anel. A continuação: Vincenty direta a partir do anel, "
                       "com o azimute de chegada (a mesma geodésica, conferida contra o direto a partir da costa). O recuo: o azimute inicial + 180°. "
                       "Em cada ponto, o valor da célula que o contém (vizinho mais perto; sem interpolação nem suavização). "
                       "Pés internacionais (0,3048 m); milhas terrestres (1.609,344 m)."),
            "script": {"arquivo": REL(os.path.abspath(__file__)), "sha256": sha256(os.path.abspath(__file__)),
                       "uso": "python -X utf8 -B out/atlantico-fundo/_pesquisa/geo_perfil_s75.py (da raiz do canal)",
                       "depende_de": ["out/atlantico-fundo/_pesquisa/geo_util.py", "out/atlantico-fundo/_pesquisa/geo_gebco.py (só as constantes de citação e licença)"]},
            "rede": "nenhuma: só arquivos locais",
            "gerado_em": t0.isoformat(timespec="seconds"),
        },
        "colunas": {"n": "índice (negativo: recuo em terra; 0: a costa; N: o anel; > N: a continuação)",
                    "dist_km / dist_mi": "distância geodésica desde a costa (F04), ao longo da linha; negativa em terra",
                    "lat / lon": "o ponto da amostra (WGS84, graus decimais)", "celula / celula_centro": "linha e coluna da grade; o centro da célula (lat, lon)",
                    "elevacao_m": "o valor cru da GEBCO (negativo = fundo)", "profundidade_m / profundidade_ft": "−elevacao (positiva para baixo); pés arredondados",
                    "tid / tid_tipo": "o tipo de dado da célula (TID 2026)", "desvio_dos_vizinhos_m": "a profundidade menos a mediana dos 8 vizinhos (+ = mais funda)",
                    "marcas": "terra, costa_F04, anel_F10, mais_funda_que_o_sonar_8378, ruido_suspeito"},
        "resumo": resumo,
        "perfil": linha,
        "continuacao_norte": {"_declaracao": ("CONTINUAÇÃO DECLARADA, não faz parte da linha das 83 mi: a mesma geodésica prolongada ao norte além do anel, "
                                              f"{M} amostras ({M * passo / 1000:.2f} km), para o desenho mostrar o fundo e a parede norte. dist_km continua contado da costa; "
                                              "dist_do_anel_km, do anel."), "amostras": cont},
        "recuo_em_terra_sul": {"_declaracao": ("RECUO DECLARADO, fora do pedido, opcional: a mesma geodésica prolongada para dentro da ilha, "
                                               f"{R} amostras ({R * passo / 1000:.2f} km) ao sul da costa, para a costa de Aguadilla à esquerda não ser desenhada à mão. "
                                               "Os valores em terra são do SRTM15+ V2.8 dentro da GEBCO."), "amostras": terra},
        "linha_geojson": geojson,
    }

    os.makedirs(SAIDA, exist_ok=True)
    pj = os.path.join(SAIDA, BASE + ".json")
    with open(pj, "w", encoding="utf-8") as f:
        json.dump(doc, f, ensure_ascii=False, indent=1)
        f.write("\n")
    for nome, lista in ((BASE, linha), (BASE + "-continuacao-norte", cont), (BASE + "-recuo-em-terra", terra)):
        with open(os.path.join(SAIDA, nome + ".csv"), "w", encoding="utf-8", newline="") as f:
            w = csv.writer(f)
            w.writerow(colunas + (["dist_do_anel_km"] if nome.endswith("norte") else []))
            for a in lista:
                w.writerow([a[c] if c != "marcas" else ";".join(a["marcas"]) for c in colunas] + ([a["dist_do_anel_km"]] if nome.endswith("norte") else []))
    previa(doc)
    print(json.dumps(resumo, ensure_ascii=False, indent=1)[:12000])
    print("gravado:", REL(pj))


def previa(doc):
    """Só para conferir no olho (fora do git, em _tmp): o perfil em escala real e com exagero ×10."""
    from PIL import Image, ImageDraw
    pts = doc["recuo_em_terra_sul"]["amostras"] + doc["perfil"] + doc["continuacao_norte"]["amostras"]
    W, H = 2400, 1500
    img = Image.new("RGB", (W, H), (14, 23, 38))
    d = ImageDraw.Draw(img)
    x0, x1 = pts[0]["dist_km"], pts[-1]["dist_km"]
    def painel(top, alt, ve, titulo):
        sx = (W - 160) / (x1 - x0)
        sy = sx * ve / 1000.0   # px por metro
        X = lambda km: 80 + (km - x0) * sx
        Y = lambda m: top + 40 + m * sy
        d.text((80, top + 5), titulo, fill=(230, 230, 230))
        d.line([(X(x0), Y(0)), (X(x1), Y(0))], fill=(120, 160, 200), width=2)
        for p in (7000, 8000):
            d.line([(X(x0), Y(p)), (X(x1), Y(p))], fill=(90, 90, 120), width=1)
            d.text((X(x1) - 60, Y(p) - 14), f"{p} m", fill=(150, 150, 180))
        f0, f1 = doc["resumo"]["faixa_dos_peixes"]["faixa_m"]
        d.rectangle([X(x0), Y(f0), X(x1), Y(f1)], outline=(180, 140, 60))
        poly = [(X(a["dist_km"]), Y(max(a["profundidade_m"], -300))) for a in pts]
        d.polygon(poly + [(X(x1), top + alt), (X(x0), top + alt)], fill=(70, 60, 50))
        d.line(poly, fill=(240, 220, 180), width=2)
        an = doc["perfil"][-1]
        d.ellipse([X(an["dist_km"]) - 8, Y(an["profundidade_m"]) - 8, X(an["dist_km"]) + 8, Y(an["profundidade_m"]) + 8], outline=(255, 90, 60), width=3)
        d.line([(X(an["dist_km"]), Y(0)), (X(an["dist_km"]), Y(an["profundidade_m"]))], fill=(255, 90, 60), width=1)
        for a in pts:
            if "ruido_suspeito" in a["marcas"] or "mais_funda_que_o_sonar_8378" in a["marcas"]:
                d.ellipse([X(a["dist_km"]) - 5, Y(a["profundidade_m"]) - 5, X(a["dist_km"]) + 5, Y(a["profundidade_m"]) + 5], outline=(255, 0, 255), width=2)
        for k in range(0, int(x1) + 1, 10):
            if k >= x0:
                d.line([(X(k), Y(0) - 6), (X(k), Y(0))], fill=(200, 200, 200))
                d.text((X(k) - 8, Y(0) - 22), str(k), fill=(200, 200, 200))
    painel(10, 220, 1, "escala real (x1): km desde a costa de Aguadilla; o anel em laranja; a faixa dos peixes 8.200-8.400 m; magenta = marcada")
    painel(250, 1240, 10, "exagero vertical x10")
    os.makedirs(os.path.dirname(PREVIA), exist_ok=True)
    img.save(PREVIA)
    print("prévia:", REL(PREVIA))


def pauta(visto, need):
    pj = os.path.join(SAIDA, BASE + ".json")
    doc = json.load(open(pj, encoding="utf-8"))
    r = doc["resumo"]
    arqs = [BASE + ".json", BASE + ".csv", BASE + "-continuacao-norte.csv", BASE + "-recuo-em-terra.csv"]
    shas = {a: sha256(os.path.join(SAIDA, a)) for a in arqs}
    if need:
        doc["needs_geo"]["id"] = need
        with open(pj, "w", encoding="utf-8") as f:
            json.dump(doc, f, ensure_ascii=False, indent=1)
            f.write("\n")
        shas[BASE + ".json"] = sha256(pj)
    an, mf, mfc = r["anel"], r["mais_funda_na_linha_83mi"], r["mais_funda_na_continuacao"]
    i7, i8 = r["isobatas"]["7000"], r["isobatas"]["8000"]
    cruz = lambda lst: "; ".join(f"{fmt_br(c['dist_km'], 2)} km ({fmt_br(c['dist_mi'], 2)} mi), {c['sentido']}" for c in lst) or "nenhum"
    item = {
        "tipo": "perfil",
        "forma": "perfil batimétrico ao longo de uma geodésica: JSON tabular + 3 CSV (não é GeoJSON; a linha vai em linha_geojson, dentro do JSON)",
        "fonte": "GEBCO Compilation Group (2026) GEBCO 2026 Grid — app de recorte download.gebco.net (Esri ASCII, 15\"); grade gebco_2026_n26.0_s14.0_w-75.0_e-58.0_ascii (sha256 "
                 + doc["procedencia"]["grade"]["sha256"] + "), a mesma da parte B",
        "arquivo": "_dados/" + BASE + ".json",
        "arquivos_ao_lado": ["_dados/" + a for a in arqs[1:]],
        "licenca": "Domínio público (GEBCO Grid terms of use) — reconhecer a fonte; não sugerir aval do GEBCO/IHO/IOC; não serve para navegação",
        "url": doc["procedencia"]["doi"],
        "exige_credito": True,
        "credito_tela": "GEBCO Compilation Group (2026) GEBCO 2026 Grid — na tela; a citação com o DOI 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa na descrição",
        "sha256": shas[BASE + ".json"],
        "sha256_ao_lado": {"_dados/" + a: shas[a] for a in arqs[1:]},
        "needs_ids": [need] if need else [],
        "needs_id_pendente": None if need else "o needs.geo da s75 ainda não existe no espelho; o montador o acrescenta no re-espelho, e o id se liga com geo_perfil_s75.py --pauta --need=<id>",
        "cena": ["s75"],
        "decisao_lucas": "A tela final 'A · A descida (Recomendado)', 28/10/2026, 14:5x, no chat da Sala (roteiros/atlantico-fundo/decisoes-lucas.md, 'A tela final')",
        "data_do_dado": "GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026; amostrado em " + doc["procedencia"]["gerado_em"][:10],
        "fidelidade": (f"geodésica WGS84 de {fmt_br(r['geodesica']['distancia_km'], 2)} km ({fmt_br(r['geodesica']['distancia_mi'], 2)} mi), {r['geodesica']['amostras_linha']} amostras a "
                       f"{fmt_br(r['geodesica']['passo_m'], 1)} m, valor cru da célula de 15\"; continuação DECLARADA de {fmt_br(r['geodesica']['comprimento_continuacao_km'], 2)} km ao norte "
                       f"e recuo DECLARADO de {fmt_br(r['geodesica']['comprimento_recuo_km'], 2)} km em terra, gravados à parte. No anel a grade dá {fmt_br(an['grade_m'])} m "
                       f"({fmt_br(an['grade_ft'])} ft) contra os {fmt_br(an['publicado_m'])} m publicados; a mais funda da linha, {fmt_br(mf['profundidade_m'])} m em {fmt_br(mf['dist_km'], 2)} km; "
                       f"7.000 m (polígono dos mapas): {cruz(i7['cruza_o_poligono_dos_mapas'])}; 8.000 m: {cruz(i8['cruza_o_poligono_dos_mapas'])}. "
                       "Nenhum número de tela sai da grade."),
        "exagero_vertical": {"sugestao": r["exagero_vertical"]["sugestao"]["exagero"], "casos": [(c["caso"], c["exagero"]) for c in r["exagero_vertical"]["casos"]]},
        "derivado_por": "out/atlantico-fundo/_pesquisa/geo_perfil_s75.py (Vincenty no WGS84; valor da célula, sem interpolar)",
        "sistema": "WGS84, lon/lat em graus decimais; profundidade em metros (e pés) abaixo do nível médio do mar",
        "validado_por_visao": bool(visto),
        "validado_como": "prévia em escala real e ×10 (_tmp/pesquisa-geo/perfil/previa-perfil.png), conferida contra os números" if visto else "",
        "registrado": datetime.date.today().isoformat(),
    }
    p = json.load(open(PAUTA_JSON, encoding="utf-8"))
    p["itens"] = [i for i in p["itens"] if i.get("arquivo") != item["arquivo"]] + [item]
    if need:
        p["atendimento_needs"][need] = sorted(set(p["atendimento_needs"].get(need, [])) | {item["arquivo"]})
    with open(PAUTA_JSON, "w", encoding="utf-8") as f:
        json.dump(p, f, ensure_ascii=False, indent=2)
        f.write("\n")

    # o bloco do .md
    ve = r["exagero_vertical"]
    md = [
        "<!-- perfil-s75: início (geo_perfil_s75.py --pauta; não editar à mão) -->",
        "## O perfil do fundo da tela final (s75, \"A · A descida\")",
        "",
        "- **A decisão:** o Lucas escolheu \"A · A descida (Recomendado)\" (28/10/2026, 14:5x, no chat da Sala; `roteiros/atlantico-fundo/decisoes-lucas.md`, "
        "\"A tela final\"). A s75 vira um corte vertical: a costa de Aguadilla à esquerda, o norte à direita, a câmera descendo até o anel.",
        f"- **O arquivo:** `_dados/{BASE}.json` (sha256 `{shas[BASE + '.json'][:12]}…`), com a procedência inteira dentro, e os CSV "
        f"`{BASE}.csv`, `{BASE}-continuacao-norte.csv` e `{BASE}-recuo-em-terra.csv`. Fora de `_media/` (o conferente rodava). "
        f"O id do `needs.geo`: {('`' + need + '`') if need else 'ainda não existe; liga-se no re-espelho (`--pauta --need=<id>`)'}.",
        f"- **A linha:** a geodésica WGS84 da costa (F04, 18,5130°N, 67,1145°W) ao anel (F10, 19,712°N, 67,311°W): {fmt_br(r['geodesica']['distancia_km'], 2)} km "
        f"= {fmt_br(r['geodesica']['distancia_mi'], 2)} mi, azimute {fmt_br(r['geodesica']['azimute_na_costa_graus'] % 360, 2)}°; {r['geodesica']['amostras_linha']} amostras a "
        f"{fmt_br(r['geodesica']['passo_m'], 1)} m, cada uma com o valor CRU da célula de 15\" que a contém (sem interpolar nem suavizar). "
        f"Mais a **continuação declarada** ao norte ({fmt_br(r['geodesica']['comprimento_continuacao_km'], 2)} km) e um **recuo declarado** em terra "
        f"({fmt_br(r['geodesica']['comprimento_recuo_km'], 2)} km), à parte.",
        f"- **No anel**, a grade dá {fmt_br(an['grade_m'])} m ({fmt_br(an['grade_ft'])} ft; vizinhança 3×3: {fmt_br(an['vizinhanca_3x3_m'][0])}–{fmt_br(an['vizinhanca_3x3_m'][1])} m), "
        f"contra os {fmt_br(an['publicado_m'])} m ({fmt_br(an['publicado_ft'])} ft) do sonar de 2018. A mais funda da linha: {fmt_br(mf['profundidade_m'])} m em "
        f"{fmt_br(mf['dist_km'], 2)} km; na continuação, {fmt_br(mfc['profundidade_m'])} m a {fmt_br(mfc['dist_km'] - r['geodesica']['distancia_km'], 2)} km além do anel. "
        "O número de tela continua o publicado; nenhum sai da grade.",
        f"- **As isóbatas dos mapas** (os polígonos de `_media/geo/`): 7.000 m em {cruz(i7['cruza_o_poligono_dos_mapas'])}; 8.000 m em {cruz(i8['cruza_o_poligono_dos_mapas'])} "
        "(km desde a costa).",
        f"- **Ruído:** {len(r['ruido']['amostras_marcadas'])} amostra(s) marcada(s); no corredor de ±1 km, {r['ruido']['corredor']['celulas_mais_fundas_que_8378']} célula(s) "
        f"mais funda(s) que 8.378 m e {len(r['ruido']['corredor']['picos_de_uma_celula'])} pico(s) de uma célula; a célula de 8.824 m fica a "
        f"{fmt_br(r['ruido']['corredor']['ruido_conhecido_8824m']['distancia_minima_da_linha_km'])} km da linha.",
        f"- **O exagero vertical** de um corte 16:9: de ×{fmt_br(min(c['exagero'] for c in ve['casos']), 1)} a ×{fmt_br(max(c['exagero'] for c in ve['casos']), 1)}, "
        f"conforme o enquadramento; sugerido **×{ve['sugestao']['exagero']}**, declarado na legenda. O número é o do desenho que o editor-de-arte fizer.",
        "- **Crédito:** `GEBCO Compilation Group (2026) GEBCO 2026 Grid` na tela; a citação com o DOI na descrição. Domínio público; não serve para navegação.",
        "- **Como refazer:** `python -X utf8 -B out/atlantico-fundo/_pesquisa/geo_perfil_s75.py` e depois `… --pauta --visto` (da raiz do canal; sem rede). "
        "O `geo_pauta.py` da parte B preserva este item (o tipo é `perfil`).",
        "<!-- perfil-s75: fim -->",
    ]
    texto = open(PAUTA_MD, encoding="utf-8").read()
    ini, fim = "<!-- perfil-s75: início", "<!-- perfil-s75: fim -->"
    if ini in texto:
        a = texto.index(ini)
        b = texto.index(fim) + len(fim)
        texto = texto[:a].rstrip("\n") + "\n\n" + "\n".join(md) + texto[b:]
    else:
        texto = texto.rstrip("\n") + "\n\n" + "\n".join(md) + "\n"
    with open(PAUTA_MD, "w", encoding="utf-8") as f:
        f.write(texto)
    print("pauta:", REL(PAUTA_JSON), sha256(PAUTA_JSON))
    print("md:", REL(PAUTA_MD), sha256(PAUTA_MD))


if __name__ == "__main__":
    args = sys.argv[1:]
    if "--pauta" in args:
        need = next((a.split("=", 1)[1] for a in args if a.startswith("--need=")), None)
        pauta("--visto" in args, need)
    else:
        medir()
