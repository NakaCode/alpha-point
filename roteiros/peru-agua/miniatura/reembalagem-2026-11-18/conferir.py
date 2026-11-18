"""A conferência da geografia das 2 miniaturas novas da reembalagem do vídeo 3 (`peru-agua`, 18/11/2026). CÓPIA de
roteiros/australia-animais/miniatura/conferir.py (que não foi editado nem rodado), refeita para o Peru. Sem rede; grava conferencia.json.

    python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/conferir.py      (da raiz; depois do n1.py e do n2.py)

1. os lados (HydroBASINS, as camadas do vídeo): o do Pacífico, o da Amazônia e o do Titicaca cobrem o Peru sem se sobrepor (as áreas, numa
   projeção de área igual, contra as do arquivo e as da ANA no PNRH, Cuadro 2.1, que o laudo de fatos do vídeo já conferiu, PA003 e PA004);
2. os pontos: Lima (Campo de Marte) no lado do Pacífico e a estação de Marcapomacocha no lado da Amazônia, e a distância de cada um à
   divisória (km);
3. a n1: a ponta da seta no lado do Pacífico, e a quantos km de Lima; o "97%" sobre o lado da Amazônia;
4. a n2: o quadro só tem Peru e mar (nenhum vizinho); a seta começa no lado da Amazônia, cruza a divisória e acaba no do Pacífico;
5. os números das caixas contra o laudo de fatos do vídeo.
"""
import json, math, os, sys
from shapely.geometry import Point, LineString
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import peru as PE

out = {"gerado_em": "18/11/2026", "pedidos_de_rede": 0}
peru, _ = PE.uniao("peru")
pac, _ = PE.uniao("pac")
atl, _ = PE.uniao("atl")
tit, _ = PE.uniao("tit")
div = unary_union([g for p, g in PE.camada("div")[0] if p.get("entre") == "pacifico-atlantico"])
props = {k: PE.camada(k)[0][0][0] for k in ("pac", "atl", "tit")}


def area_km2(g):
    """a área numa projeção cilíndrica de área igual de Lambert (esfera autálica, R = 6371007,2 m); basta para conferir de 0,5 % em 0,5 %"""
    import numpy as np
    import shapely
    R = 6371007.2
    f = lambda c: np.column_stack([np.radians(c[:, 0]) * R, R * np.sin(np.radians(c[:, 1]))])
    return shapely.transform(g, f).area / 1e6


def km(a, b):
    R = 6371.0088
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def km_ate_linha(p, linha):
    """a distância de um ponto a uma linha, amostrando a linha a cada ~0,0005° (~50 m)"""
    melhor = (1e9, None)
    for parte in getattr(linha, "geoms", [linha]):
        n = max(2, int(parte.length / 0.0005))
        for i in range(n + 1):
            q_ = parte.interpolate(i / n, normalized=True)
            d = km((p.x, p.y), (q_.x, q_.y))
            if d < melhor[0]:
                melhor = (d, (round(q_.x, 4), round(q_.y, 4)))
    return round(melhor[0], 2), melhor[1]


# 1. os lados
ANA = {"pac": 278483, "atl": 957822, "tit": 48910}      # PNRH, Cuadro 2.1 (laudo fatos-pesquisa-2026-10-22, PA004)
lados = {}
for k, g in (("pac", pac), ("atl", atl), ("tit", tit)):
    a = area_km2(g)
    lados[k] = {"area_km2_medida": round(a), "area_km2_no_arquivo": props[k].get("area_km2"), "area_km2_ana_pnrh": ANA[k],
                "diferenca_contra_a_ana": "%+.1f %%" % (100 * (a - ANA[k]) / ANA[k])}
sobre = (pac.intersection(atl).area + pac.intersection(tit).area + atl.intersection(tit).area)
uniao = unary_union([pac, atl, tit])
out["lados"] = dict(lados, sobreposicao_entre_lados_km2=round(area_km2(pac.intersection(atl)) + area_km2(pac.intersection(tit))
                                                                + area_km2(atl.intersection(tit)), 1),
                    peru_fora_dos_tres_lados_fracao=round(peru.difference(uniao).area / peru.area, 5),
                    lados_fora_do_peru_fracao=round(uniao.difference(peru).area / uniao.area, 5))

# 2. os pontos
pts = {p["id"]: (p, g) for p, g in PE.camada("pontos")[0]}
reg_pts = {}
for id_, lado_esperado in (("campo-de-marte", "pac"), ("estacao-marcapomacocha", "atl")):
    p, g = pts[id_]
    d, onde = km_ate_linha(g, div)
    reg_pts[id_] = {"lonlat": [g.x, g.y], "fonte": p["fonte"], "no_lado_do_pacifico": bool(pac.contains(g)), "no_lado_da_amazonia": bool(atl.contains(g)),
                    "lado_esperado": lado_esperado, "confere": bool((pac if lado_esperado == "pac" else atl).contains(g)),
                    "km_ate_a_divisoria": d, "ponto_mais_perto_da_divisoria": onde}
out["pontos"] = reg_pts

# 3. a n1
p1 = json.load(open(os.path.join(M.PASTA, "n1-pontos.json"), encoding="utf-8"))
ponta = Point(*p1["seta"]["ponta_lonlat"])
lima = pts["campo-de-marte"][1]
out["n1"] = {"quadro": p1["quadro"], "ponta_da_seta_lonlat": p1["seta"]["ponta_lonlat"],
             "ponta_no_lado_do_pacifico": bool(pac.contains(ponta)), "ponta_a_km_de_lima": round(km((ponta.x, ponta.y), (lima.x, lima.y)), 1),
             "numero_97_sobre_o_ciano_fracao": p1["numero_97"]["sobre_o_ciano"],
             "titicaca_no_quadro": p1["geometria"]["titicaca"]["no_quadro"],
             "vizinhos_no_quadro": p1["geometria"]["vizinhos"]["no_quadro"],
             "peru_inteiro_no_quadro": bool(peru.within(M.Quadro(p1["quadro"]["lat_baixo"], p1["quadro"]["lat_cima"],
                                                                  p1["quadro"]["lon_centro"]).caixa_geo(0.0)))}

# 4. a n2
p2 = json.load(open(os.path.join(M.PASTA, "n2-pontos.json"), encoding="utf-8"))
q2 = M.Quadro(p2["quadro"]["lat_baixo"], p2["quadro"]["lat_cima"], p2["quadro"]["lon_centro"])
cx = q2.caixa_geo(0.0)
paises, _ = M.ler_geojson(PE.NE_PAISES, lambda p: p.get("ADM0_A3") != "PER", PE.NE_SHA)
s = p2["seta"]
out["n2"] = {"quadro": p2["quadro"], "vizinhos_no_quadro": sorted(p["NAME"] for p, g in paises if g.intersects(cx)),
             "lima_e_os_lagos_no_quadro": bool(cx.contains(lima) and cx.contains(pts["estacao-marcapomacocha"][1])),
             "seta": {"comeca_lonlat": s["controles_lonlat"][0], "comeca_no_lado_da_amazonia": bool(atl.contains(Point(*s["controles_lonlat"][0]))),
                      "acaba_lonlat": s["controles_lonlat"][3], "acaba_no_lado_do_pacifico": bool(pac.contains(Point(*s["controles_lonlat"][3]))),
                      "cruza_a_divisoria_em": s.get("cruza_em_lonlat"),
                      "o_cruzamento_fica_a_km_da_divisoria": km_ate_linha(Point(*s["cruza_em_lonlat"]), div)[0] if s.get("cruza_em_lonlat") else None,
                      "tipo": s["tipo"]}}

# 5. os números das caixas
out["fatos"] = {
    "n1_ONLY_2%": {"medido": "1,76 % da água no lado do Pacífico (ANA, PNRH, Cuadro 2.3, ano-base 2012)",
                   "laudos": "roteiros/peru-agua/qc-roteiro/fatos-descricao.laudo.md, A10 ('about 2 percent': confirmada, 1,76 %) e T3; "
                             "fatos-r1.laudo.md ('1,76 % ≈ 2 %')",
                   "arredondamento": "o '2%%' arredonda 1,76 para cima (+%.0f %% do medido): o 'ONLY' não exagera" % (100 * (2 - 1.76) / 1.76)},
    "n1_97%": {"medido": "97,91 % da água no lado da Amazônia (Cuadro 2.3: 'Amazonas 957,82 74,53 10 018 789 33,32 1 895 226 97,91')",
               "laudos": "fatos-descricao.laudo.md, A9 ('more than 97 percent': confirmada, 97,91 %); fatos-pesquisa-2026-10-22.laudo.md, PA001",
               "nota": "na miniatura, '97%' arredonda para baixo; a voz diz 'more than 97 percent'"},
    "n2_AMAZON_SIDE": {"o_que_diz": "os lagos onde Lima guarda mais da metade da água da seca ficam no lado que escorre para a Amazônia",
                       "roteiro": "linha 12 ('more than half of the water Lima stores for the dry season sits in lakes on the other side of the "
                                  "line'), linha 54 (SEDAPAL, 2007) e linha 56 ('in the upper Mantaro basin, which drains toward the Amazon')",
                       "o_rotulo_do_video": "o vídeo usa o mesmo rótulo, 'AMAZON SIDE', sobre o mesmo polígono (vertente-atlantico.json › rotulo; "
                                            "laudo fatos-pesquisa, PA003: CONFIRMADA)"},
}
json.dump(out, open(os.path.join(M.PASTA, "conferencia.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(out, ensure_ascii=False, indent=1))
