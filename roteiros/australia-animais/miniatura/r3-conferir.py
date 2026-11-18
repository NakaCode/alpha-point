"""A conferência da rodada 3 das miniaturas da Austrália (r3-n1, r3-n2, r3-n3; 18/11/2026; o pedido: pautas/australia-animais/_trabalho/
pedido-miniaturas-r3.md). Sem rede; grava r3-conferencia.json.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/r3-conferir.py       (da raiz; depois dos três r3-n*.py)

1. o quadro comum: a Nova Zelândia fica fora (o NE 1:10m contra a caixa do quadro), e quais vizinhos entram;
2. r3-n1: o Channel Country do IBRA dentro da terra do ABS, por estado, e os rios da ficha da taipan dentro dele (como na r2); a pílula nova; e que o
   resto da imagem é o da r2-n1 (a diferença de pixel fora das duas pílulas);
3. r3-n2: as rodovias de agora (Major Highway, scalerank até 4) em cada estado e território (a rede é do país todo), contra as da r2; a estrada em
   que a seta cai, pelos campos do NE;
4. r3-n3: o vermelho é a Austrália (a terra do ABS contra a do NE, além de 3 px da costa) e a conta da caixa, lida na tabela da base
   (pautas/australia-animais/_trabalho/fatos-b.md, a série do ABS por código): 35 + 42 + 8 = 85;
5. as caixas contra a pauta v2 e a base (os números e as contas);
6. as palavras das caixas e das pílulas contra as dos três títulos do Test & Compare;
7. a leitura na 168: a altura da maiúscula de cada linha (a do -pontos.json, (y1 - y0) · 168 / 2560, como no r2-conferir.py), lado a lado com a da
   rodada 2, e uma medida independente na própria 168: as linhas de pixel com amarelo dentro da caixa (a palavra amarela);
8. o canto da duração e a luminância.
"""
import json, math, os, re, sys
import numpy as np
import cv2
from PIL import Image
from shapely.geometry import Point, shape, box
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU
import r2_comum as C
import r3_comum as R

q = M.Quadro(*R.QUADRO)
out = {"gerado_em": "18/11/2026", "pedidos_de_rede": 0, "quadro_comum": list(R.QUADRO)}
P = lambda n: json.load(open(os.path.join(M.PASTA, n + "-pontos.json"), encoding="utf-8"))
p = {n: P(n) for n in ("r2-n1", "r2-n2", "r2-n3", "r3-n1", "r3-n2", "r3-n3")}

ste_cheio = {r["STE_NAME21"]: g for r, g in M.ler_shp_zip(AU.STE_ZIP)}
ste = {k: g.simplify(0.005, preserve_topology=True) for k, g in ste_cheio.items()}     # as frações por estado (a 0,005°, ~0,5 km)
au_abs = unary_union(list(ste_cheio.values()))
paises, _ = M.ler_geojson(AU.NE_PAISES, lambda pr: True, AU.NE_SHA)
por_a3 = {pr["ADM0_A3"]: g for pr, g in paises}

# 1. o quadro
cx = q.caixa_geo(0.0)
nz_oeste = por_a3["NZL"].intersection(box(150, q.lat_s, 180, q.lat_n)).bounds[0]
out["1_quadro"] = {"lon": [round(q.lon0, 3), round(q.lon1, 3)], "lat": [q.lat_s, q.lat_n],
                   "nova_zelandia_no_quadro": bool(por_a3["NZL"].intersects(cx)),
                   "nz_mais_a_oeste_na_faixa_de_lat_do_quadro_lon": round(nz_oeste, 3),
                   "folga_da_borda_direita_px": round((nz_oeste - q.lon1) * M.W / (q.lon1 - q.lon0), 1),
                   "vizinhos_no_quadro": sorted(pr["NAME"] for pr, g in paises if pr["ADM0_A3"] != "AUS" and g.intersects(cx))}

# 2. r3-n1
cc, reg_cc = C.channel_country()
por_estado = {k: round(cc.intersection(g).area / cc.area, 3) for k, g in ste.items() if cc.intersects(g)}
rios = json.load(open(C.RIOS, encoding="utf-8"))
dentro_rios = {}
for nome in ("Cooper", "Diamantina", "Warburton"):
    gs = unary_union([shape(f["geometry"]) for f in rios["features"] if (f["properties"].get("name") or "").startswith(nome)])
    dentro_rios[nome] = round(gs.intersection(cc).length / gs.length, 3)
# o resto da imagem é o da r2-n1: a diferença fora das duas pílulas (com 60 px de folga para a sombra)
a2 = np.asarray(Image.open(os.path.join(M.PASTA, "r2-n1-2560.jpg")).convert("RGB")).astype(np.int16)
a3 = np.asarray(Image.open(os.path.join(M.PASTA, "r3-n1-2560.jpg")).convert("RGB")).astype(np.int16)
fora = np.ones(a2.shape[:2], bool)
for n in ("r2-n1", "r3-n1"):
    x0, y0, x1, y1 = p[n]["pilula"]["caixa_palco"]
    fora[max(0, y0 - 60):y1 + 60, max(0, x0 - 60):x1 + 60] = False
dif = np.abs(a2 - a3).max(axis=2)
pil3 = p["r3-n1"]["pilula"]
out["2_r3_n1"] = {"channel_country": {"sha256": reg_cc["sha256"], "dentro_da_terra_do_abs": round(cc.intersection(au_abs).area / cc.area, 4),
                                      "por_estado": por_estado},
                  "rios_da_ficha_da_taipan_fracao_dentro": dentro_rios,
                  "o_vermelho_e": "a biorregião (IBRA 7.1, CHC), não a área de ocorrência da cobra (que não foi lida)",
                  "pilula": {"r2": "INLAND TAIPAN, 84 px", "r3": " / ".join(l for l in pil3["linhas"]), "fonte_px": pil3["fonte_px"],
                             "maiusculas_no_168_px": pil3["maiusculas_no_168_px"], "folga_ao_vermelho_px": pil3["folga_ao_vermelho_px"],
                             "fracao_sobre_o_vermelho": pil3["fracao_sobre_o_vermelho"], "caixa_palco": pil3["caixa_palco"]},
                  "fora_das_pilulas_igual_a_r2": {"px_comparados": int(fora.sum()), "dif_media": round(float(dif[fora].mean()), 4),
                                                  "px_com_dif_acima_de_8": int((dif[fora] > 8).sum()),
                                                  "nota": "as duas são JPG de qualidade 92: dif até uns poucos níveis é a compressão"}}

# 3. r3-n2
rede3, reg3 = R.estradas(au_abs.simplify(AU.SIMPL, preserve_topology=True), tipos=("Major Highway",), rank_max=4)
rede2, reg2 = C.estradas(au_abs.simplify(AU.SIMPL, preserve_topology=True))
todas3 = unary_union(list(rede3.values()))
todas2 = unary_union(list(rede2.values()))
por_estado_graus = {}
for k, g in ste.items():
    if k == "Other Territories":
        continue
    gb = g.buffer(0.02)
    por_estado_graus[k] = {"r3": round(todas3.intersection(gb).length, 2), "r2": round(todas2.intersection(gb).length, 2)}
alvo = Point(*p["r3-n2"]["seta"]["alvo_na_rede_lonlat"])
fc = json.load(open(C.ESTRADAS, encoding="utf-8"))
perto = []
for f in fc["features"]:
    pr = f["properties"]
    if pr.get("continent") != "Oceania":
        continue
    d = shape(f["geometry"]).distance(alvo)
    if d < 0.05:
        perto.append({k: pr.get(k) for k in ("type", "scalerank", "name", "label", "length_km")} | {"distancia_graus": round(d, 4)})
perto.sort(key=lambda r: r["distancia_graus"])
out["3_r3_n2"] = {"rede_r3": {k: v for k, v in reg3.items() if k != "licenca"}, "rede_r2_tipos": reg2["tipos"],
                  "comprimento_total_graus": {"r3": round(todas3.length, 1), "r2": round(todas2.length, 1)},
                  "comprimento_em_graus_por_estado": por_estado_graus,
                  "estados_sem_rodovia_na_r3": [k for k, v in por_estado_graus.items() if v["r3"] == 0],
                  "fracao_da_imagem": {"r3": p["r3-n2"]["estradas"]["fracao_da_imagem"], "r2": p["r2-n2"]["estradas"]["fracao_da_imagem"]},
                  "casco_sobre_a_australia_r3": p["r3-n2"]["estradas"]["fracao_do_casco_sobre_a_australia"],
                  "a_seta_cai_em": {"lonlat": [round(alvo.x, 3), round(alvo.y, 3)],
                                    "estado_no_abs": [k for k, g in ste_cheio.items() if g.contains(alvo)],
                                    "trechos_do_ne_a_menos_de_0_05_grau": perto[:3]}}

# 4. r3-n3: o vermelho contra o NE, e a conta da caixa lida na tabela da base
au_ne = unary_union([por_a3[k] for k in ("AUS", "IOA", "NFK", "ATC", "CSI") if k in por_a3])
a = q.mascara(au_abs.simplify(AU.SIMPL, preserve_topology=True)) > 0.5
b = q.mascara(au_ne) > 0.5
d_fora = cv2.distanceTransform((~a).astype(np.uint8), cv2.DIST_L2, 3)
d_dentro = cv2.distanceTransform(a.astype(np.uint8), cv2.DIST_L2, 3)
d_costa = np.where(a, d_dentro, d_fora)
difv = (a != b) & (d_costa > 3)
tab = {}
FATOS = os.path.join(M.RAIZ, "pautas", "australia-animais", "_trabalho", "fatos-b.md")
for linha in open(FATOS, encoding="utf-8"):
    mm = re.match(r"\|\s*\**(X2\d(?:–X29)?)[,\s]", linha)
    if mm and linha.count("|") >= 13:
        cel = [c.strip().strip("*") for c in linha.strip().strip("|").split("|")]
        tab[mm.group(1)] = {"anos_2016_2025": [int(c) for c in cel[1:11]], "soma": int(cel[11])}
conta = {k: v["soma"] for k, v in tab.items()}
out["4_r3_n3"] = {"vermelho_contra_o_ne": {"px_vermelho_abs": int(a.sum()), "diferenca_alem_de_3px_px": int(difv.sum()),
                                           "diferenca_alem_de_3px_fracao": round(float(difv.sum() / a.sum()), 5)},
                  "a_tabela_da_base": {"arquivo": "pautas/australia-animais/_trabalho/fatos-b.md (a série do ABS, tabela 1.2)", "soma_por_codigo": conta,
                                       "cada_soma_confere_com_os_dez_anos": all(sum(v["anos_2016_2025"]) == v["soma"] for v in tab.values())},
                  "a_caixa": {"SNAKES": 35, "BEES & WASPS": 42, "OTHERS": 8, "VENOM DEATHS (o total)": 85},
                  "confere": {"SNAKES = X20": conta.get("X20") == 35, "BEES & WASPS = X23": conta.get("X23") == 42,
                              "OTHERS = X25 + X26": conta.get("X25", 0) + conta.get("X26", 0) == 8,
                              "X21 (aranhas) e X22 (escorpiões) são 0": conta.get("X21") == 0 and conta.get("X22") == 0,
                              "35 + 42 + 8 = X20–X29": 35 + 42 + 8 == conta.get("X20–X29")}}

# 5. as caixas contra a pauta v2 (§4.1) e a base
out["5_caixas_contra_a_base"] = {
    "r3-n1": {"texto": "NOT THE / KILLER; pílula INLAND TAIPAN / SNAKE",
              "fato": "ASP-20 (P3, Johnston et al., MJA 2017, [R]): 23 mortes por cobra em 2005–2015, 17 da marrom, 4 da tigre, 2 de cobra desconhecida; "
                      "nenhuma posta na conta da taipan (17 + 4 + 2 = 23). A taipan-do-interior: o veneno mais potente medido em camundongo (1979)",
              "o_que_a_caixa_nao_diz": "nem 'never' (o 'nunca matou' é NÃO CONFERIDO), nem 'nobody'/'empty' (A MEDIR), nem 'deadliest'",
              "a_palavra_nova": "SNAKE: a taipan-do-interior é uma cobra (Oxyuranus microlepidotus, Elapidae; a pauta v2 §4.3)"},
    "r3-n2": {"texto": "10 YEARS OF / VENOM DEATHS / < 1 MONTH; pílula ROADS", "venenosos_2016_2025": conta.get("X20–X29"), "estrada_2025": 1276,
              "estrada_por_mes": round(1276 / 12, 1), "venenosos_em_meses_de_estrada": round(conta.get("X20–X29", 0) / (1276 / 12), 2),
              "o_objeto_de_DEATHS": "VENOM DEATHS = as 85 mortes de 2016–2025 por todos os animais venenosos (X20–X29); '1 MONTH' = um mês médio de "
                                    "estrada em 2025 (1.276 ÷ 12, preliminar)",
              "a_voz": "From 2016 to 2025, every venomous animal in Australia combined killed 85 people … That's fewer than Australia's roads killed "
                       "in an average month of 2025 (gancho A)"},
    "r3-n3": {"texto": "VENOM DEATHS 2016–2025 / SNAKES 35 / BEES & WASPS 42 / OTHERS 8", "a_conta": "35 + 42 + 8 = 85 (a seção 4)",
              "a_voz": "Over that decade, venomous snakes killed 35 people. Bees and wasps killed 42, more than the snakes (ato 1); o roteiro diz "
                       "quem são os outros oito (o registro da pauta)",
              "nota": "X20 é 'venomous snakes and lizards'; X23 junta 'hornets, wasps and bees'; X25, outros artrópodes; X26, marinhos"}}

# 6. as palavras contra os títulos
TITULOS = {"T1 (do Lucas)": "Why Does Australia Have So Many Dangerous Animals?",
           "T2": "Why So Few People Die From Australia's Deadly Animals",
           "T3": "Australia's Deadliest Snake Isn't Its Most Venomous One"}
TEXTOS = {"r3-n1": "NOT THE KILLER INLAND TAIPAN SNAKE", "r3-n2": "10 YEARS OF VENOM DEATHS < 1 MONTH ROADS",
          "r3-n3": "VENOM DEATHS 2016–2025 SNAKES 35 BEES & WASPS 42 OTHERS 8"}
PARES = {"r3-n1": ["T3", "T1 (do Lucas)"], "r3-n2": ["T2"], "r3-n3": ["(reserva)"]}
VAZIAS = {"the", "of", "a", "its", "from", "so", "why", "does", "have", "&", "isn't", "one"}
PARENTES = {"death": "die", "deaths": "die", "dead": "die", "deadly": "die", "deadliest": "die"}   # a mesma raiz que o sufixo não pega


def raiz(w):
    w = w.lower().replace("'s", "")
    if w in PARENTES:
        return PARENTES[w]
    for suf in ("ous", "iest", "ly", "s", "es"):
        if w.endswith(suf) and len(w) - len(suf) >= 3:
            return w[:-len(suf)]
    return w


rep = {}
for n, t in TEXTOS.items():
    pal = [w for w in re.findall(r"[A-Za-z']+", t) if w.lower() not in VAZIAS]
    rep[n] = {"vai_ao_ar_com": PARES[n]}
    for tn, tt in TITULOS.items():
        tp = [w for w in re.findall(r"[A-Za-z']+", tt) if w.lower() not in VAZIAS]
        iguais = sorted({w for w in pal if w.lower() in {x.lower().replace("'s", "") for x in tp}})
        raizes = sorted({w for w in pal if raiz(w) in {raiz(x) for x in tp} or any(raiz(x).startswith(raiz(w)) or raiz(w).startswith(raiz(x))
                                                                                   for x in tp if len(raiz(x)) >= 3 and len(raiz(w)) >= 3)} - set(iguais))
        rep[n][tn] = {"a_mesma_palavra": iguais, "a_mesma_raiz": raizes}
out["6_palavras_contra_os_titulos"] = rep


# 7. a leitura na 168
def amarelo_na_168(nome):
    """as linhas de pixel da 168 com amarelo (R > 120, G > 0,55 R, B < 0,45 G) dentro da caixa: a altura da palavra amarela, medida na imagem"""
    im = np.asarray(Image.open(os.path.join(M.PASTA, nome + "-168.png")).convert("RGB")).astype(float)
    x0, y0, x1, y1 = [v * 168 / M.W for v in p[nome]["caixa"]["caixa_palco"]]
    sub = im[int(y0):int(math.ceil(y1)), int(x0):int(math.ceil(x1))]
    r, g, bb = sub[..., 0], sub[..., 1], sub[..., 2]
    am = (r > 120) & (g > 0.55 * r) & (bb < 0.45 * g)
    linhas = np.nonzero(am.sum(axis=1) >= 2)[0]
    return {"linhas_de_pixel_com_amarelo": int(len(linhas)), "da_linha": int(linhas.min() + int(y0)) if len(linhas) else None,
            "ate_a_linha": int(linhas.max() + int(y0)) if len(linhas) else None}


fH = M.fonte(1000 * M.K, 800, 32).getbbox("H")
CAP_800 = (fH[3] - fH[1]) / (1000 * M.K)          # a maiúscula da Inter 800 (a da pílula), em fração do px da fonte
leitura = {}
for k in ("n1", "n2", "n3"):
    leitura[k] = {"r2": {"caixa": p["r2-" + k]["caixa"]["maiusculas_no_168_px"]}, "r3": {"caixa": p["r3-" + k]["caixa"]["maiusculas_no_168_px"]}}
    for rd in ("r2", "r3"):
        pil = p[rd + "-" + k].get("pilula") or {}
        if pil:
            m = pil.get("maiusculas_no_168_px") or pil.get("maiuscula_no_168_px")
            if not m:      # a r2 não gravava a medida da pílula: a conta da fonte
                m = {"(%d px, pela fonte)" % pil["fonte_px"]: round(pil["fonte_px"] * CAP_800 * 168 / M.W, 1)}
            leitura[k][rd]["pilula"] = m
        leitura[k][rd]["amarelo_medido_na_168"] = amarelo_na_168(rd + "-" + k)
out["7_leitura_na_168"] = leitura
out["7_nota"] = ("a maiúscula vem do -pontos.json (a caixa da linha é medida pela 'H' da fonte: (y1 - y0) · 168 / 2560); a pílula da r2 não gravava a "
                 "medida, e a dela é a conta da fonte (a maiúscula da Inter 800 é %.3f do px). O amarelo medido na 168 conta as linhas de pixel com "
                 "amarelo dentro da caixa: é a maiúscula mais o antisserrilhado de cima e de baixo" % CAP_800)

# 8. o canto da duração e a luminância
out["8_canto_e_luz"] = {n: {"canto_duracao_alfa_max": p[n]["canto_duracao_320"]["alfa_max_pecas"], "luminancia_media": p[n]["luminancia_media_final"],
                            "jpg_1280_kb": round(p[n]["jpg_1280_bytes"] / 1024)} for n in ("r3-n1", "r3-n2", "r3-n3")}

json.dump(out, open(os.path.join(M.PASTA, "r3-conferencia.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(out, ensure_ascii=False, indent=1)[:9000])
