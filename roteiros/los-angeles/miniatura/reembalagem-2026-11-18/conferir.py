"""A conferência das 2 miniaturas novas da reembalagem do vídeo 1 (`los-angeles`, 18/11/2026), sem rede. Grava conferencia.json.

    python -X utf8 -B -P roteiros/los-angeles/miniatura/reembalagem-2026-11-18/conferir.py        (da raiz; depois do n1.py e do n2.py)

O que confere:
1. a cota da n1: as pontas (33,9232 e 33,7976 N) contra o trecho fino medido de novo no TIGER, numa varredura de 0,0002° de latitude (o trecho
   fino é onde o pedaço de Los Angeles que passa pela faixa tem menos de 3 km; o alargamento de 2,5 km em 33,85–33,87 N fica dentro);
2. a faixa de hoje contra uma fonte independente: a camada de limites de cidade do condado de LA (City Boundaries, layer 19, a feição "Land"),
   que a pesquisa-geo do vídeo baixou em 07/10 (midia/los-angeles/fontes/geo/; só conferência, não se desenha: a licença dela é ambígua,
   pauta-geo.md, "A licença do condado");
3. os vizinhos da n1 encostam em Los Angeles (a distância de cada um ao contorno de hoje);
4. a ponta da faixa de 1906 encosta em Wilmington e na divisa de San Pedro (E-RELATO.md: 0 m);
5. as licenças das fontes, nas cópias locais: o TechDoc do TIGER 2025 (a frase do domínio público) e os metadados do Commons do mapa de Hamlin;
6. os pedidos de rede desta pasta (o _bases/pedidos.jsonl) e as medidas das duas miniaturas (do -pontos.json de cada uma).
"""
import json, math, os, sys
import numpy as np
from shapely.geometry import LineString, shape, Point
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import la as L

PASTA = M.PASTA
conf = {}
KM = lambda dlon, lat: dlon * 111.32 * math.cos(math.radians(lat))

# ── 1 e 2: o trecho fino ──
la_f, reg_la = L.ler_geo("la-hoje-tiger")
la_g = la_f[0][1]
CONDADO = os.path.join(M.RAIZ, "midia", "los-angeles", "fontes", "geo", "la-hoje-city-boundaries.geojson")
fc = json.load(open(CONDADO, encoding="utf-8"))
cond = unary_union([shape(f["geometry"]).buffer(0) for f in fc["features"] if f["properties"].get("FEAT_TYPE") == "Land"])


def corte(g, lat, lon0=-118.33, lon1=-118.265):
    i = g.intersection(LineString([(lon0, lat), (lon1, lat)]))
    partes = [p for p in getattr(i, "geoms", [i]) if not p.is_empty and p.length > 0]
    if not partes:
        return 0.0, None, None
    return sum(KM(p.length, lat) for p in partes), min(p.bounds[0] for p in partes), max(p.bounds[2] for p in partes)


def peca_da_faixa(g, lat, lon0=-118.45, lon1=-118.15):
    """a largura (km) do pedaço de g, na latitude, que passa pela faixa (o que contém -118,295, ou o mais perto dele)"""
    i = g.intersection(LineString([(lon0, lat), (lon1, lat)]))
    partes = [p for p in getattr(i, "geoms", [i]) if not p.is_empty and p.length > 0]
    if not partes:
        return 0.0
    eixo = Point(-118.295, lat)
    p = min(partes, key=lambda p: p.distance(eixo))
    return KM(p.length, lat)


def trecho_fino(g, lat_meio=33.86, limite_km=3.0, passo=0.0002):
    ends = {}
    for sentido, nome in ((1, "norte"), (-1, "sul")):
        lat = lat_meio
        while True:
            w = peca_da_faixa(g, lat + sentido * passo)
            if w >= limite_km or w == 0:
                break
            lat += sentido * passo
        ends[nome] = round(lat, 4)
    return ends


fino_tiger = trecho_fino(la_g)
fino_cond = trecho_fino(cond)
difs_o, difs_l = [], []
lat = fino_tiger["sul"] + 0.001
while lat < fino_tiger["norte"] - 0.001:
    if not (33.845 <= lat <= 33.875):          # o alargamento perto de Gardena fica fora da comparação de bordas
        _, o1, l1 = corte(la_g, lat)
        _, o2, l2 = corte(cond, lat)
        if o1 is not None and o2 is not None:
            difs_o.append(abs(KM(o1 - o2, lat)) * 1000)
            difs_l.append(abs(KM(l1 - l2, lat)) * 1000)
    lat += 0.001
n1p = json.load(open(os.path.join(PASTA, "n1-pontos.json"), encoding="utf-8"))
conf["1_cota_n1"] = {"pontas_na_n1": [n1p["cota"]["de_lat"], n1p["cota"]["ate_lat"]],
                     "trecho_fino_no_tiger": fino_tiger, "trecho_fino_no_condado": fino_cond,
                     "diferenca_m": {"norte": round((n1p["cota"]["de_lat"] - fino_tiger["norte"]) * 111320),
                                     "sul": round((n1p["cota"]["ate_lat"] - fino_tiger["sul"]) * 111320)},
                     "milhas_norte_sul_tiger": round((fino_tiger["norte"] - fino_tiger["sul"]) * 69.05, 2),
                     "milhas_norte_sul_condado": round((fino_cond["norte"] - fino_cond["sul"]) * 69.05, 2),
                     "a_cota_toca_o_vermelho": n1p["cota"]["sobre_o_vermelho"] > 0,
                     "menor_distancia_ao_vermelho_px": n1p["cota"]["menor_distancia_ao_vermelho_px"],
                     "criterio": "trecho fino = o pedaço de Los Angeles que passa pela faixa (o mais perto de -118,295) com menos de 3 km de largura, varrido a 0,0002° (~22 m) de 33,86 N "
                                 "para o norte e para o sul"}
conf["2_faixa_tiger_contra_condado"] = {"camada": os.path.relpath(CONDADO, M.RAIZ).replace("\\", "/"), "sha256": M.sha256(CONDADO),
                                        "linhas_comparadas": len(difs_o),
                                        "borda_oeste_m": {"mediana": round(float(np.median(difs_o)), 1), "max": round(float(np.max(difs_o)), 1)},
                                        "borda_leste_m": {"mediana": round(float(np.median(difs_l)), 1), "max": round(float(np.max(difs_l)), 1)},
                                        "px_no_palco_da_n1": round(float(np.max(difs_o + difs_l)) / 1000 * n1p["px_por_km"], 1)}

# ── 3: os vizinhos ──
viz_f, _ = L.ler_geo("vizinhos-faixa-tiger")
conf["3_vizinhos_encostam_em_la_m"] = {p["name"]: round(g.distance(la_g) * 111320, 1) for p, g in viz_f}

# ── 4: a ponta de 1906 ──
f06, _ = L.ler_geo("la-1906-hamlin")
fwl, _ = L.ler_geo("wilmington-1909-hamlin")
fsp, _ = L.ler_geo("san-pedro-1909-divisa-hamlin")
g06 = f06[0][1]
ponta = min(g06.exterior.coords if g06.geom_type == "Polygon" else [c for p in g06.geoms for c in p.exterior.coords], key=lambda c: c[1])
conf["4_ponta_1906"] = {"ponta_sul_lonlat": [round(v, 5) for v in ponta],
                        "distancia_a_wilmington_m": round(g06.distance(fwl[0][1]) * 111320, 1),
                        "distancia_a_divisa_de_san_pedro_m": round(g06.distance(fsp[0][1]) * 111320, 1)}
n2p = json.load(open(os.path.join(PASTA, "n2-pontos.json"), encoding="utf-8"))
conf["4_ponta_1906"]["fecho_de_san_pedro"] = {k: v for k, v in n2p["ciano"]["san_pedro"]["fecho"].items() if k != "pontos_lonlat"}

# ── 5: as licenças, nas cópias locais ──
lic = {}
pdf = os.path.join(M.RAIZ, "out", "los-angeles", "_tmp", "licencas", "TGRSHP2025_TechDoc_Ch1.pdf")
try:
    import fitz
    txt = " ".join(pg.get_text() for pg in fitz.open(pdf))
    txt = " ".join(txt.split())
    frase = "Copyright protection is not available for any work of the United States Government"
    i = txt.find(frase)
    lic["tiger"] = {"arquivo": os.path.relpath(pdf, M.RAIZ).replace("\\", "/"), "sha256": M.sha256(pdf), "frase_achada": i >= 0,
                    "trecho": txt[i:i + 260] if i >= 0 else None}
except Exception as e:
    lic["tiger"] = {"arquivo": pdf, "erro": str(e)}
cm = os.path.join(M.RAIZ, "out", "los-angeles", "_tmp", "licencas", "commons-hamlin-1916-extmetadata.json")
try:
    d = json.load(open(cm, encoding="utf-8"))
    s = json.dumps(d, ensure_ascii=False)
    pega = {}
    for k in ("LicenseShortName", "Copyrighted", "AttributionRequired", "UsageTerms"):
        j = s.find('"%s"' % k)
        pega[k] = s[j:j + 120] if j >= 0 else None
    lic["hamlin"] = {"arquivo": os.path.relpath(cm, M.RAIZ).replace("\\", "/"), "sha256": M.sha256(cm), "campos": pega}
except Exception as e:
    lic["hamlin"] = {"arquivo": cm, "erro": str(e)}
conf["5_licencas"] = lic

# ── 6: a rede e as medidas ──
ped = [json.loads(l) for l in open(os.path.join(M.BASES_NOVAS, "pedidos.jsonl"), encoding="utf-8")]
conf["6_pedidos_de_rede"] = {"quantos": len(ped), "hosts": sorted(set(p["url"].split("/")[2] for p in ped)),
                             "status": sorted(set(p["status"] for p in ped)), "de": ped[0]["quando"], "ate": ped[-1]["quando"]}
for nome, p in (("n1", n1p), ("n2", n2p)):
    conf["6_" + nome] = {"texto": p["texto"], "maiusculas_no_168_px": p["caixa"]["maiusculas_no_168_px"],
                         "caixa_distancia_a_terra_px": p["caixa"]["distancia_a_terra_px"],
                         "canto_da_duracao_livre": p["canto_duracao_320"]["alfa_max_pecas"] == 0,
                         "pecas_sobre_o_vermelho": p["pecas_sobre_o_vermelho"], "luminancia_media": p["luminancia_media_final"],
                         "px_por_km": p["px_por_km"], "jpg_1280_kb": round(p["jpg_1280_bytes"] / 1024),
                         "costa_vetores_contra_aster": p["costa_vetores_contra_aster"]}
conf["6_n1"]["faixa_largura_px"] = n1p["vermelho_los_angeles_hoje"]["faixa_largura_px_vermelho"]
conf["6_n1"]["vermelho_fracao"] = n1p["vermelho_los_angeles_hoje"]["fracao_da_imagem"]
conf["6_n1"]["ciano_fracao"] = n1p["ciano_vizinhos"]["fracao_da_imagem"]
conf["6_n2"]["faixa_largura_px"] = n2p["vermelho_los_angeles_1906"]["faixa_largura_px_vermelho"]
conf["6_n2"]["vermelho_fracao"] = n2p["vermelho_los_angeles_1906"]["fracao_da_imagem"]
conf["6_n2"]["ciano_fracao"] = round(n2p["ciano"]["wilmington"]["fracao_da_imagem"] + n2p["ciano"]["san_pedro"]["fracao_da_imagem"], 4)
conf["6_n2"]["seta"] = {k: n2p["seta"][k] for k in ("ponta_no_ciano", "sobre_o_vermelho_px", "distancia_ao_vermelho_px", "comprimento_px")}
json.dump(conf, open(os.path.join(PASTA, "conferencia.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(conf, ensure_ascii=False, indent=1))
