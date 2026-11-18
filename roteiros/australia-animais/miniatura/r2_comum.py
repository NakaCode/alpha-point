"""O que as 3 miniaturas novas da Austrália (a rodada 2, `r2-`, 18/11/2026) dividem: as camadas novas, lidas do disco e conferidas pelo sha256, e
duas peças de desenho. Não faz pedido de rede. Os scripts de cada uma (r2-n1.py, r2-n2.py, r2-n3.py) importam este módulo, o mapa.py e o
australia.py desta pasta, que NÃO foram editados (a rodada 1 continua a mesma; o pedido: pautas/australia-animais/_trabalho/pedido-miniaturas-r2.md).

O nome tem sublinhado (r2_comum) e não hífen porque o Python não importa módulo com hífen.

As camadas (nada desenhado à mão nem por IA):
- o Channel Country: o IBRA 7.1 do DCCEEW (CC BY; "Users must attribute the Australian Government Department of Climate Change, Energy, the
  Environment and Water as the data provider", nos metadados, _bases/ibra7-metadados.xml), baixado na rodada 1 e não usado nela;
- os rios do Channel Country (o Cooper, o Diamantina e o Warburton, que liga o Diamantina ao lago Eyre): o Natural Earth 1:10m, o suplemento da
  Austrália (domínio público), baixado na rodada 1 e não usado nela;
- o lago Eyre (norte e sul): o Natural Earth 1:10m lakes, o cache da máquina (sha256 igual ao da lista de camadas da pré-v1,
  src/geo/obter-natural-earth.mjs);
- as estradas: o Natural Earth 1:10m roads, o cache da máquina (sha256 66a0c7b4…, o mesmo que o Juneau registrou, do commit ca96624 do
  nvkelso/natural-earth-vector: out/juneau/_pesquisa/pauta-geo.json); domínio público;
- as capitais (as Greater Capital City Statistical Areas): o GCCSA 2021 do ABS (CC BY 4.0), baixado na rodada 1.
"""
import json, os, sys
import numpy as np
import cv2
from shapely.geometry import shape, box
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU

IBRA = M.base_em("ibra7-channel-country.geojson")
RIOS = M.base_em("ne_10m_rivers_australia.geojson")
LAGOS = os.path.join(M.NE, "ne_10m_lakes.geojson")
LAGOS_SHA = "2d036f53dedec578001c5c30c2959ee7d4eebc1306900fa4367c49929ec8f2d9"      # a lista de camadas da pré-v1
ESTRADAS = os.path.join(M.NE, "ne_10m_roads.geojson")
ESTRADAS_SHA = "66a0c7b438e92fd124822cc5921cfa11042f48c294ade5e0f03f2c6640fd0248"   # o do Juneau (out/juneau/_pesquisa/pauta-geo.json)
CAPITAIS = {"1GSYD": "Greater Sydney", "2GMEL": "Greater Melbourne", "3GBRI": "Greater Brisbane", "4GADE": "Greater Adelaide",
            "5GPER": "Greater Perth", "6GHOB": "Greater Hobart", "7GDAR": "Greater Darwin", "8ACTE": "Australian Capital Territory"}
AMARELO_CAIXA = (255, 196, 46)
LIC_IBRA = ("CC BY: 'CC - Attribution (CC BY)' e 'Users must attribute the Australian Government Department of Climate Change, Energy, the "
            "Environment and Water as the data provider' (metadados da camada, _bases/ibra7-metadados.xml, lidos em 18/11/2026)")
LIC_NE = ("domínio público: 'All versions of Natural Earth raster + vector map data found on this website are in the public domain' "
          "(_bases/naturalearth-terms-of-use.html, lida em 18/11/2026)")


def conferir_json(p):
    """o sha256 de uma base de _bases/, contra o .json de procedência do download"""
    meta = json.load(open(p + ".json", encoding="utf-8"))
    s = M.sha256(p)
    if s != meta["sha256"]:
        sys.exit("%s não confere com o sha256 do .json: parei" % os.path.basename(p))
    return {"arquivo": os.path.relpath(p, M.RAIZ).replace("\\", "/"), "sha256": s, "url": meta["procedencia"]["url"],
            "baixado_em": meta["procedencia"]["baixado_em"]}


def channel_country():
    reg = conferir_json(IBRA)
    fc = json.load(open(IBRA, encoding="utf-8"))
    feats = [f for f in fc["features"] if f["properties"].get("REG_NAME_7") == "Channel Country"]
    assert len(feats) == 1, len(feats)
    g = shape(feats[0]["geometry"])
    g = g if g.is_valid else g.buffer(0)
    reg.update(edicao="IBRA 7.1 (DCCEEW), região CHC 'Channel Country'", hectares=feats[0]["properties"].get("HECTARES"),
               licenca=LIC_IBRA, credito="Department of Climate Change, Energy, the Environment and Water (IBRA 7.1)")
    return g, reg


def rios_do_channel_country():
    """o Cooper, o Diamantina e o Warburton do NE (o suplemento da Austrália); devolve a geometria e o registro"""
    reg = conferir_json(RIOS)
    fc = json.load(open(RIOS, encoding="utf-8"))
    escolhidos, nomes = [], {}
    for f in fc["features"]:
        n = f["properties"].get("name") or ""
        if n.startswith(("Cooper", "Diamantina", "Warburton")):
            escolhidos.append(shape(f["geometry"]))
            nomes[n] = nomes.get(n, 0) + 1
    reg.update(nomes=nomes, licenca=LIC_NE)
    return unary_union(escolhidos), reg


def lago_eyre():
    s = M.sha256(LAGOS)
    if s != LAGOS_SHA:
        sys.exit("o ne_10m_lakes do cache mudou: parei")
    fc = json.load(open(LAGOS, encoding="utf-8"))
    gs = [shape(f["geometry"]) for f in fc["features"] if (f["properties"].get("name") or "").startswith("Lake Eyre")]
    assert len(gs) == 2, len(gs)
    return unary_union(gs).buffer(0), {"arquivo": LAGOS.replace("\\", "/"), "sha256": s, "nomes": ["Lake Eyre North", "Lake Eyre South"],
                                       "licenca": LIC_NE}


def estradas(australia, tipos=("Major Highway", "Secondary Highway")):
    """as estradas do NE 1:10m na Austrália: continent 'Oceania', os tipos pedidos, cortadas na terra do ABS (com 0,02° de folga: o NE e o ABS
    não têm a mesma costa). Devolve {tipo: geometria} e o registro"""
    s = M.sha256(ESTRADAS)
    if s != ESTRADAS_SHA:
        sys.exit("o ne_10m_roads do cache não é o do Juneau: parei")
    fc = json.load(open(ESTRADAS, encoding="utf-8"))
    corte = australia.buffer(0.02)
    caixa = box(*corte.bounds)
    por_tipo, n, km = {}, {}, {}
    for f in fc["features"]:
        p = f["properties"]
        if p.get("continent") != "Oceania" or p.get("type") not in tipos:
            continue
        g = shape(f["geometry"])
        if not g.intersects(caixa):
            continue
        g = g.intersection(corte)
        if g.is_empty:
            continue
        por_tipo.setdefault(p["type"], []).append(g)
        n[p["type"]] = n.get(p["type"], 0) + 1
        km[p["type"]] = km.get(p["type"], 0) + float(p.get("length_km") or 0)
    out = {k: unary_union(v) for k, v in por_tipo.items()}
    return out, {"arquivo": ESTRADAS.replace("\\", "/"), "sha256": s, "commit": "ca96624a (nvkelso/natural-earth-vector), o do Juneau",
                 "tipos": list(tipos), "trechos": n, "length_km_do_ne": {k: round(v) for k, v in km.items()},
                 "corte": "a terra do ABS (STE 2021) com 0,02° de folga", "licenca": LIC_NE}


def capitais():
    """as 8 GCCSA de capital do ABS (a ACT inteira faz o papel da 'Greater Canberra'); devolve {código: geometria} e o registro"""
    reg = AU.sha_zip(AU.GCC_ZIP)
    gs = {r["GCC_CODE21"]: g for r, g in M.ler_shp_zip(AU.GCC_ZIP, lambda r: r["GCC_CODE21"] in CAPITAIS)}
    assert set(gs) == set(CAPITAIS), sorted(gs)
    reg.update(edicao="ABS, ASGS Ed. 3, GCCSA 2021 (as 8 de capital)", codigos=CAPITAIS)
    return gs, reg


def pilula(img, x, y, texto, px=84, ancora="mm", peso=800):
    """o nome de lugar numa pílula preta (embalagem.md §3: 'nome de lugar … mesma pílula'), centrada em (x, y) (ancora 'mm'), à esquerda
    ('lm') ou à direita ('rm'). Devolve a imagem, a caixa e o alfa"""
    linhas = [(texto, px, peso, M.BRANCO)]
    larg, alt = M.medir_texto(linhas, [])
    pad_x, pad_y = round(0.36 * px), round(0.30 * px)
    w, h = larg + 2 * pad_x, alt + 2 * pad_y
    x0 = {"mm": x - w / 2, "lm": x, "rm": x - w}[ancora]
    y0 = y - h / 2
    return M.caixa_texto(img, round(x0), round(y0), linhas, pad_x, pad_y, [], raio=12)


def maiusculas_168(caixas_l):
    return {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in caixas_l.items() if k != "_barra"}


def ponta_ate(mascara, alvo, de, recuo):
    """a ponta da seta: anda do alvo (x, y) para trás, na direção de `de` (x, y), até sair da máscara, e recua `recuo` px (negativo: a
    ponta entra na máscara)"""
    import math
    ux, uy = de[0] - alvo[0], de[1] - alvo[1]
    n = math.hypot(ux, uy)
    ux, uy = ux / n, uy / n
    t = 0.0
    while 0 <= int(round(alvo[1] + uy * t)) < M.H and 0 <= int(round(alvo[0] + ux * t)) < M.W and \
            mascara[int(round(alvo[1] + uy * t)), int(round(alvo[0] + ux * t))] > 0.5:
        t += 1.0
    return (alvo[0] + ux * (t + recuo), alvo[1] + uy * (t + recuo))
