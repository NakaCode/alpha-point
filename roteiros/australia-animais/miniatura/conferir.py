"""A conferência da geografia das miniaturas da pauta do vídeo 8, a Austrália (`australia-animais`, 18/11/2026). Sem rede; grava conferencia.json.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/conferir.py       (da raiz; depois do m1.py, do m2.py e do reserva-aranhas.py)

1. o vermelho da m1 e da m2 é a Austrália: a terra do ABS (STE 2021, todos os estados e territórios) contra a Austrália do Natural Earth 1:10m
   (uma fonte independente), na escala do palco de cada quadro: a diferença simétrica, em px e em fração, além de 3 px da costa;
2. a Nova Zelândia não entra em nenhum dos quadros (a geometria do NE contra a caixa de cada quadro);
3. a m2: a Nova Guiné inteira fica fora do ciano (a ilha = a Papua-Nova Guiné + as províncias Papua e Papua Barat, no NE); a seta começa na
   Indonésia (Bornéu) e acaba na Austrália (o Território do Norte, no ABS); quais países são o ciano;
4. o número e a palavra das caixas contra a base de fatos (fb 15 e fa B2), com o desvio do arredondamento;
5. a reserva: a Grande Sydney fica dentro da NSW, e o ACT e o Jervis Bay ficam fora do vermelho.
"""
import json, os, sys
import numpy as np
import cv2
from shapely.geometry import Point, shape
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU

out = {"gerado_em": "18/11/2026", "pedidos_de_rede": 0}
ste = {r["STE_NAME21"]: g for r, g in M.ler_shp_zip(AU.STE_ZIP)}
au_abs = unary_union(list(ste.values()))
paises, _ = M.ler_geojson(AU.NE_PAISES, lambda p: True, AU.NE_SHA)
por_a3 = {p["ADM0_A3"]: g for p, g in paises}
au_ne = unary_union([por_a3[k] for k in ("AUS", "IOA", "NFK", "ATC", "CSI") if k in por_a3])

QUADROS = {"m1": (-47.0, -7.5, 125.2), "m2": (-44.5, 3.5, 120.4), "reserva-aranhas": AU.QUADRO_CONTINENTE}
for nome, qd in QUADROS.items():
    q = M.Quadro(*qd)
    a = q.mascara(au_abs.simplify(AU.SIMPL, preserve_topology=True)) > 0.5
    b = q.mascara(au_ne) > 0.5
    borda = cv2.distanceTransform((~a).astype(np.uint8), cv2.DIST_L2, 3)                # distância até o vermelho, por fora
    dentro = cv2.distanceTransform(a.astype(np.uint8), cv2.DIST_L2, 3)                  # distância até a costa, por dentro
    d_costa = np.where(a, dentro, borda)
    longe = d_costa > 3
    dif = (a != b) & longe
    reg = {"quadro": list(qd), "px_vermelho_abs": int(a.sum()), "px_australia_ne": int(b.sum()),
           "diferenca_alem_de_3px_da_costa_px": int(dif.sum()),
           "diferenca_alem_de_3px_fracao_do_vermelho": round(float(dif.sum() / a.sum()), 5)}
    if dif.any():
        yy, xx = np.unravel_index(np.argmax(np.where(dif, d_costa, -1)), d_costa.shape)
        reg["a_mais_longe_px"] = round(float(d_costa[yy, xx]), 1)
        reg["a_mais_longe_lonlat"] = [round(v, 3) for v in M.lonlat(q, float(xx), float(yy))]
        reg["a_mais_longe_e"] = "ABS sem NE" if a[yy, xx] else "NE sem ABS"
    reg["nova_zelandia_no_quadro"] = bool(por_a3["NZL"].intersects(q.caixa_geo(0.0)))
    out[nome] = {"vermelho_contra_o_natural_earth": reg}

# 3. a m2
q2 = M.Quadro(*QUADROS["m2"])
viz = [(p, g) for p, g in paises if p.get("ADM0_A3") != "AUS" and g.intersects(q2.caixa_geo(0.0))]
g_asia, reg_asia = AU.asia(viz, sem_nova_guine=True)
fc = json.load(open(AU.NE_ADM1, encoding="utf-8"))
papua = unary_union([shape(f["geometry"]) for f in fc["features"]
                     if f["properties"].get("adm0_a3") == "IDN" and f["properties"].get("iso_3166_2") in ("ID-PA", "ID-PB")])
ilha_ng = unary_union([por_a3["PNG"], papua])
m_asia = q2.mascara(g_asia.simplify(AU.SIMPL, preserve_topology=True)) > 0.5
m_ng = q2.mascara(ilha_ng) > 0.5
pt = json.load(open(os.path.join(M.PASTA, "m2-pontos.json"), encoding="utf-8"))
s0, s3 = pt["seta"]["pontas_lonlat"]
out["m2"]["ciano"] = {"paises": reg_asia["paises_no_recorte"], "criterio": reg_asia["criterio"], "sem_a_nova_guine": reg_asia["sem_a_nova_guine"],
                      "px_de_ciano_sobre_a_nova_guine": int((m_asia & m_ng).sum()),
                      "px_da_nova_guine_no_quadro": int(m_ng.sum())}
out["m2"]["seta"] = {"comeca_em": s0, "comeca_na_indonesia_borneu": bool(por_a3["IDN"].contains(Point(*s0))),
                     "acaba_em": s3, "acaba_no_territorio_do_norte_abs": bool(ste["Northern Territory"].contains(Point(*s3))),
                     "tipo": pt["seta"]["tipo"]}

# 4. os números e as palavras
out["fatos"] = {
    "m1_1_IN_3_MILLION": {"medido": "85 mortes / 257.890.800 pessoas-ano (ABS, Causes of Death 2016–2025, e a ERP do ABS) = 1 em 3.034.009 por ano",
                          "fonte": "fatos-b.md, item 15 e §4 (b_medida.py); refeito na pauta (p_contas.py) e conferido pelo cético (cetico-v1.md, a seção 'O que passou', com o cetico_contas.py)",
                          "arredondamento": "3 MILLION fica %.1f %% abaixo do medido; a voz diz 'about one in three million a year'" % (100 * (3034009 - 3e6) / 3034009)},
    "m2_NO_VIPERS": {"fonte": "Jackson et al. 2016: 'viperid snakes are absent' (fatos-a.md, B2, CONFIRMADO como afirmação do artigo)",
                     "a_conferir": "a lista oficial (o AFD, biodiversity.org.au) recusou o leitor A (405): NÃO CONFERIDO 4"},
}

# 5. a reserva
syd = M.ler_shp_zip(AU.GCC_ZIP, lambda r: r["GCC_CODE21"] == "1GSYD")[0][1]
out["reserva-aranhas"]["sydney_dentro_da_nsw"] = round(float(syd.intersection(ste["New South Wales"]).area / syd.area), 5)
out["reserva-aranhas"]["act_fora_da_nsw"] = round(float(1 - ste["Australian Capital Territory"].intersection(ste["New South Wales"]).area
                                                       / ste["Australian Capital Territory"].area), 5)

json.dump(out, open(os.path.join(M.PASTA, "conferencia.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(out, ensure_ascii=False, indent=1))
