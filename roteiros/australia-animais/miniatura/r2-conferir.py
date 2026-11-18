"""A conferência da rodada 2 das miniaturas da Austrália (r2-n1, r2-n2, r2-n3; 18/11/2026). Sem rede; grava r2-conferencia.json.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/r2-conferir.py       (da raiz; depois dos três r2-n*.py)

1. o quadro comum: a Nova Zelândia fica fora (o NE 1:10m contra a caixa do quadro), e quais vizinhos entram;
2. r2-n1: o Channel Country do IBRA dentro da terra do ABS, por estado; o Cooper e o Diamantina do NE (os rios da ficha da taipan) dentro dele, em
   fração do comprimento; a área do IBRA (hectares) contra a área medida; a limpeza do contorno (do -pontos.json);
3. r2-n2: as estradas dentro da terra do ABS; o comprimento em cada estado e território (a rede é do país todo, não de um estado); a estrada em que a
   seta cai, pelos campos do NE;
4. r2-n3: o vermelho é a Austrália (a terra do ABS contra a do NE, além de 3 px da costa, como a conferir.py da rodada 1);
5. as caixas contra a pauta v2 e a base (os números e as contas);
6. as palavras das caixas e das pílulas contra as dos três títulos do Test & Compare (o pedido: "sem repetir as palavras dele").
"""
import json, math, os, re, sys
import numpy as np
import cv2
from shapely.geometry import Point, shape, box
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU
import r2_comum as C

QUADRO = (-47.0, -9.4, 127.3)
q = M.Quadro(*QUADRO)
out = {"gerado_em": "18/11/2026", "pedidos_de_rede": 0, "quadro_comum": list(QUADRO)}

ste = {r["STE_NAME21"]: g for r, g in M.ler_shp_zip(AU.STE_ZIP)}
au_abs = unary_union(list(ste.values()))
paises, _ = M.ler_geojson(AU.NE_PAISES, lambda p: True, AU.NE_SHA)
por_a3 = {p["ADM0_A3"]: g for p, g in paises}

# 1. o quadro
cx = q.caixa_geo(0.0)
out["1_quadro"] = {"lon": [round(q.lon0, 3), round(q.lon1, 3)], "lat": [q.lat_s, q.lat_n],
                   "nova_zelandia_no_quadro": bool(por_a3["NZL"].intersects(cx)),
                   "nz_mais_a_oeste_na_faixa_de_lat_do_quadro_lon": round(por_a3["NZL"].intersection(box(150, q.lat_s, 180, q.lat_n)).bounds[0], 3),
                   "folga_da_borda_direita_px": round((por_a3["NZL"].intersection(box(150, q.lat_s, 180, q.lat_n)).bounds[0] - q.lon1) * M.W / (q.lon1 - q.lon0), 1),
                   "vizinhos_no_quadro": sorted(p["NAME"] for p, g in paises if p["ADM0_A3"] != "AUS" and g.intersects(cx))}


def km2(g):
    """a área em km² numa equivalente simples (a de Albers do ABS não está aqui): o sinusoidal pelo centro, que basta para conferir ordem de grandeza"""
    from shapely.ops import transform
    f = lambda x, y, z=None: (np.radians(x) * 6371.0088 * np.cos(np.radians(y)), np.radians(y) * 6371.0088)
    return transform(f, g).area


# 2. r2-n1
cc, reg_cc = C.channel_country()
por_estado = {k: round(cc.intersection(g).area / cc.area, 4) for k, g in ste.items() if cc.intersects(g)}
rios = json.load(open(C.RIOS, encoding="utf-8"))
dentro_rios = {}
for nome in ("Cooper", "Diamantina", "Warburton"):
    gs = unary_union([shape(f["geometry"]) for f in rios["features"] if (f["properties"].get("name") or "").startswith(nome)])
    dentro_rios[nome] = {"comprimento_graus": round(gs.length, 2), "fracao_dentro_do_channel_country": round(gs.intersection(cc).length / gs.length, 3)}
eyre, _ = C.lago_eyre()
p1 = json.load(open(os.path.join(M.PASTA, "r2-n1-pontos.json"), encoding="utf-8"))
out["2_r2_n1"] = {"channel_country": {"sha256": reg_cc["sha256"], "dentro_da_terra_do_abs": round(cc.intersection(au_abs).area / cc.area, 4),
                                      "por_estado": por_estado, "hectares_do_ibra": reg_cc.get("hectares"),
                                      "km2_medidos_sinusoidal": round(km2(cc)), "km2_do_ibra": round((reg_cc.get("hectares") or 0) / 100)},
                  "rios_da_ficha_da_taipan": dentro_rios,
                  "lago_eyre_toca_o_channel_country": bool(eyre.intersects(cc)),
                  "limpeza_do_contorno": p1["vermelho_channel_country"].get("limpeza_do_contorno"),
                  "o_vermelho_e": "a biorregião (IBRA 7.1, CHC), não a área de ocorrência da cobra (que não foi lida)"}

# 3. r2-n2
rede, reg_rede = C.estradas(au_abs.simplify(AU.SIMPL, preserve_topology=True))
todas = unary_union(list(rede.values()))
por_estado_km = {}
for k, g in ste.items():
    if k == "Other Territories":
        continue
    L = todas.intersection(g.buffer(0.02)).length
    por_estado_km[k] = round(L, 2)
p2 = json.load(open(os.path.join(M.PASTA, "r2-n2-pontos.json"), encoding="utf-8"))
alvo = Point(*p2["seta"]["alvo_na_rede_lonlat"])
fc = json.load(open(C.ESTRADAS, encoding="utf-8"))
perto = []
for f in fc["features"]:
    p = f["properties"]
    if p.get("continent") != "Oceania":
        continue
    g = shape(f["geometry"])
    d = g.distance(alvo)
    if d < 0.05:
        perto.append({k: p.get(k) for k in ("type", "name", "label", "routeraw", "namealt", "length_km", "uident")} | {"distancia_graus": round(d, 4)})
perto.sort(key=lambda r: r["distancia_graus"])
estado_alvo = [k for k, g in ste.items() if g.contains(alvo)]
out["3_r2_n2"] = {"estradas": {k: v for k, v in reg_rede.items() if k != "licenca"},
                  "comprimento_em_graus_por_estado": por_estado_km,
                  "estados_sem_estrada": [k for k, v in por_estado_km.items() if v == 0],
                  "a_seta_cai_em": {"lonlat": [round(alvo.x, 3), round(alvo.y, 3)], "estado_no_abs": estado_alvo, "trechos_do_ne_a_menos_de_0_05_grau": perto[:3]}}

# 4. r2-n3: o vermelho contra o Natural Earth
au_ne = unary_union([por_a3[k] for k in ("AUS", "IOA", "NFK", "ATC", "CSI") if k in por_a3])
a = q.mascara(au_abs.simplify(AU.SIMPL, preserve_topology=True)) > 0.5
b = q.mascara(au_ne) > 0.5
fora = cv2.distanceTransform((~a).astype(np.uint8), cv2.DIST_L2, 3)
dentro = cv2.distanceTransform(a.astype(np.uint8), cv2.DIST_L2, 3)
d_costa = np.where(a, dentro, fora)
dif = (a != b) & (d_costa > 3)
reg4 = {"px_vermelho_abs": int(a.sum()), "px_australia_ne": int(b.sum()), "diferenca_alem_de_3px_px": int(dif.sum()),
        "diferenca_alem_de_3px_fracao": round(float(dif.sum() / a.sum()), 5)}
if dif.any():
    yy, xx = np.unravel_index(np.argmax(np.where(dif, d_costa, -1)), d_costa.shape)
    reg4["a_mais_longe_px"] = round(float(d_costa[yy, xx]), 1)
    reg4["a_mais_longe_lonlat"] = [round(v, 3) for v in M.lonlat(q, float(xx), float(yy))]
    reg4["a_mais_longe_e"] = "ABS sem NE" if a[yy, xx] else "NE sem ABS"
out["4_r2_n3_vermelho_contra_o_natural_earth"] = reg4

# 5. as caixas contra a pauta v2 (§4.1) e a base
out["5_caixas_contra_a_base"] = {
    "r2-n1": {"texto": "NOT THE / KILLER; pílula INLAND TAIPAN",
              "fato": "ASP-20 (P3, Johnston et al., MJA 2017, [R]): 23 mortes por cobra em 2005–2015, 17 da marrom, 4 da tigre, 2 de cobra desconhecida; "
                      "'None was put down to the inland taipan' (17 + 4 + 2 = 23). A voz: o ato 4 (e o gancho A, se o título 3 ganhar: 'And it isn't even "
                      "the snake that kills the most Australians')",
              "o_que_a_caixa_nao_diz": "nem 'never' (o 'nenhuma morte' da taipan é NÃO CONFERIDO) nem 'nobody'/'empty' (A MEDIR)"},
    "r2-n2": {"texto": "10 YEARS OF VENOM / < 1 MONTH; pílula ROADS", "venenosos_2016_2025": 85, "estrada_2025": 1276,
              "estrada_por_mes": round(1276 / 12, 1), "venenosos_em_meses_de_estrada": round(85 / (1276 / 12), 2),
              "a_voz": "That's fewer than Australia's roads killed in an average month of 2025 (gancho A)",
              "nota": "'10 YEARS' é o 2016–2025 da voz; '1 MONTH' é 'an average month of 2025'; 2025 é preliminar (ABS)"},
    "r2-n3": {"texto": "DEATHS, 2016–2025 / SNAKES 35 / BEES & WASPS 42", "X20": 35, "X23": 42, "X23_maior_que_X20": 42 > 35,
              "a_voz": "Over that decade, venomous snakes killed 35 people. Bees and wasps killed 42, more than the snakes (ato 1)",
              "nota": "X20 é 'venomous snakes and lizards' (a tela do vídeo diz isso; a voz diz 'venomous snakes'); X23 junta 'hornets, wasps and bees'"}}

# 6. as palavras contra os títulos
TITULOS = {"T1 (do Lucas)": "Why Does Australia Have So Many Dangerous Animals?",
           "T2": "Why So Few People Die From Australia's Deadly Animals",
           "T3": "Australia's Deadliest Snake Isn't Its Most Venomous One"}
TEXTOS = {"r2-n1": "NOT THE KILLER INLAND TAIPAN", "r2-n2": "10 YEARS OF VENOM < 1 MONTH ROADS", "r2-n3": "DEATHS 2016–2025 SNAKES 35 BEES & WASPS 42"}
VAZIAS = {"the", "of", "a", "its", "from", "so", "why", "does", "have", "&"}


def raiz(w):
    w = w.lower().replace("'s", "")
    for suf in ("ous", "iest", "ly", "s", "es"):
        if w.endswith(suf) and len(w) - len(suf) >= 3:
            return w[:-len(suf)]
    return w


rep = {}
for n, t in TEXTOS.items():
    pal = [w for w in re.findall(r"[A-Za-z']+", t) if w.lower() not in VAZIAS]
    rep[n] = {}
    for tn, tt in TITULOS.items():
        tp = [w for w in re.findall(r"[A-Za-z']+", tt) if w.lower() not in VAZIAS]
        iguais = sorted({w for w in pal if w.lower() in {x.lower().replace("'s", "") for x in tp}})
        raizes = sorted({w for w in pal if raiz(w) in {raiz(x) for x in tp} or any(raiz(x).startswith(raiz(w)) or raiz(w).startswith(raiz(x)) for x in tp if len(raiz(x)) >= 3 and len(raiz(w)) >= 3)} - set(iguais))
        rep[n][tn] = {"a_mesma_palavra": iguais, "a_mesma_raiz": raizes}
out["6_palavras_contra_os_titulos"] = rep

json.dump(out, open(os.path.join(M.PASTA, "r2-conferencia.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(out, ensure_ascii=False, indent=1)[:6000])
