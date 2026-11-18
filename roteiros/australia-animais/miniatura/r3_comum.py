"""O que as miniaturas da rodada 3 da Austrália (`r3-`, 18/11/2026) dividem. A rodada 3 conserta só a leitura em 168 px que os leitores apontaram na
rodada 2 (o pedido: pautas/australia-animais/_trabalho/pedido-miniaturas-r3.md); a ideia de cada uma não muda. Não faz pedido de rede.

Os r3-n*.py importam este módulo, o r2_comum.py, o mapa.py e o australia.py desta pasta, que NÃO foram editados. Aqui ficam só:
- montar(): o mapa comum (australia.montar), com um cache opcional SÓ para os ensaios (MINI_R3_CACHE=1), gravado em _bases/_tmp/r3-cache-*.npz (o
  cache do australia.py, MINI_CACHE, grava sem o prefixo r3; não o uso). As finais rodam sem cache;
- pilula() e pilula_tamanho(): a pílula preta do nome de lugar, com uma ou duas linhas (a do r2_comum só tem uma); a r3-n1;
- estradas(): as rodovias do NE, como r2_comum.estradas() (o mesmo arquivo, conferido pelo mesmo sha256), com o corte pelo scalerank do próprio NE;
  a r3-n2;
- caixa_barra_no_meio(): a caixa de M.caixa_texto(), com o sublinhado embaixo de uma linha do meio e com tamanhos diferentes na mesma linha; a r3-n3;
- maiusculas_168(): a altura da maiúscula de cada linha na 168, como no r2-conferir.py ((y1 - y0) · 168 / 2560, com a caixa da linha medida pela
  maiúscula "H" da fonte).

O nome tem sublinhado, e não hífen, porque o Python não importa módulo com hífen.
"""
import hashlib, json, os, sys
import numpy as np
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M
import australia as AU
import r2_comum as C

# o quadro comum das três (o da rodada 2: 47 S a 9,4 S, centrado em 127,3 E; a Nova Zelândia fica fora por 3,7 px)
QUADRO = (-47.0, -9.4, 127.3)
# os espaços largos da Inter (conferidos na fonte, sem tinta): U+2004 (1/3 de eme) e U+2005 (1/4 de eme). O espaço comum da Inter Black tem 0,184 eme
ESPACO_TERCO = " "
ESPACO_QUARTO = " "


def montar(quadro=QUADRO):
    """o mapa comum (australia.montar, bases "asia", sem divisas, mar 0,92: o da rodada 2). Com MINI_R3_CACHE=1 (só nos ensaios), o relevo e a
    imagem vêm de _bases/_tmp/r3-cache-<chave>.npz, se houver"""
    chave = hashlib.sha256(json.dumps([quadro, {k: v for k, v in sorted(os.environ.items()) if k.startswith(("MINI_LAT_", "MINI_LON_C", "MINI_SIMPL",
                                       "MINI_SOMB_", "MINI_REL_", "MINI_APROFUNDAR", "MINI_MAR_"))}]).encode()
                           + open(AU.__file__, "rb").read() + open(M.__file__, "rb").read()).hexdigest()[:16]
    cache = os.path.join(M.BASES_NOVAS, "_tmp", "r3-cache-%s.npz" % chave)
    usar = os.environ.get("MINI_R3_CACHE") == "1"
    if usar and os.path.exists(cache):
        z = np.load(cache, allow_pickle=True)
        # a geometria (barata) vem de novo; o relevo e a imagem (caros) vêm do cache
        A = _geometria(quadro)
        rel = M.Relevo.__new__(M.Relevo)
        rel.n, rel.rug, rel.piv = z["rel_n"], z["rel_rug"], float(z["rel_piv"])
        A.update(img=z["img"], rel=rel, medidas=json.loads(str(z["medidas"])))
        print("(cache do mapa do ensaio: %s)" % os.path.basename(cache))
        return A
    A = AU.montar(quadro, bases="asia", divisas=False, mar_a=0.92)
    if usar:
        os.makedirs(os.path.dirname(cache), exist_ok=True)
        np.savez(cache, img=A["img"].astype(np.float32), rel_n=A["rel"].n, rel_rug=A["rel"].rug, rel_piv=A["rel"].piv,
                 medidas=json.dumps(A["medidas"]))
    return A


def _geometria(quadro):
    """a parte barata do australia.montar (o quadro, as máscaras e as geometrias), para o ensaio com cache"""
    from shapely.ops import unary_union
    q = M.Quadro(M.env("MINI_LAT_S", quadro[0]), M.env("MINI_LAT_N", quadro[1]), M.env("MINI_LON_C", quadro[2]))
    caixa = q.caixa_geo(1.0)
    estados = {r["STE_NAME21"]: g for r, g in M.ler_shp_zip(AU.STE_ZIP)}
    australia = unary_union(list(estados.values())).simplify(AU.SIMPL, preserve_topology=True)
    paises, _ = M.ler_geojson(AU.NE_PAISES, lambda p: p.get("ADM0_A3") != "AUS", AU.NE_SHA)
    vizinhos = [(p, g) for p, g in paises if g.intersects(caixa)]
    viz = unary_union([g for p, g in vizinhos])
    m_au = q.mascara(australia)
    m_viz = q.mascara(viz)
    terra = np.clip(m_au + m_viz * (1 - m_au), 0, 1)
    return {"q": q, "terra": terra, "mar": 1 - terra, "m_au": m_au, "estados": estados, "australia": australia, "vizinhos": vizinhos}


def pilula_tamanho(linhas, entre=None):
    """a largura e a altura que pilula() daria (com o padding), sem desenhar"""
    ls = [(t, px, peso, M.BRANCO) for t, px, peso in linhas]
    entre = entre if entre is not None else [round(0.22 * ls[i][1]) for i in range(1, len(ls))]
    larg, alt = M.medir_texto(ls, entre)
    px0 = max(px for _, px, _ in linhas)
    return larg + 2 * round(0.36 * px0), alt + 2 * round(0.30 * px0)


def pilula(img, x, y, linhas, ancora="mm", entre=None, raio=12):
    """a pílula preta do nome (embalagem.md §3: "nome de lugar … mesma pílula"), com uma ou mais linhas [(texto, px, peso)], brancas, alinhadas à
    esquerda; centrada em (x, y) ('mm'), encostada à esquerda ('lm') ou à direita ('rm'). Devolve a imagem, a caixa, as linhas e o alfa"""
    ls = [(t, px, peso, M.BRANCO) for t, px, peso in linhas]
    entre = entre if entre is not None else [round(0.22 * ls[i][1]) for i in range(1, len(ls))]
    larg, alt = M.medir_texto(ls, entre)
    px0 = max(px for _, px, _ in linhas)
    pad_x, pad_y = round(0.36 * px0), round(0.30 * px0)
    w, h = larg + 2 * pad_x, alt + 2 * pad_y
    x0 = {"mm": x - w / 2, "lm": x, "rm": x - w}[ancora]
    y0 = y - h / 2
    return M.caixa_texto(img, round(x0), round(y0), ls, pad_x, pad_y, entre, raio=raio)


def estradas(australia, tipos=("Major Highway",), rank_max=None):
    """as rodovias do NE 1:10m na Austrália, como em r2_comum.estradas() (o mesmo arquivo, conferido pelo mesmo sha256; continent 'Oceania'; os
    tipos pedidos; cortadas na terra do ABS com 0,02° de folga), e, se rank_max for dado, só as de scalerank <= rank_max (a hierarquia do próprio
    NE: 3 é a mais importante que ele dá na Austrália). Devolve {scalerank: geometria} e o registro"""
    from shapely.geometry import shape, box
    from shapely.ops import unary_union
    s = M.sha256(C.ESTRADAS)
    if s != C.ESTRADAS_SHA:
        sys.exit("o ne_10m_roads do cache não é o do Juneau: parei")
    fc = json.load(open(C.ESTRADAS, encoding="utf-8"))
    corte = australia.buffer(0.02)
    caixa = box(*corte.bounds)
    por_rank, n, km = {}, {}, {}
    for f in fc["features"]:
        p = f["properties"]
        if p.get("continent") != "Oceania" or p.get("type") not in tipos:
            continue
        if rank_max is not None and int(p.get("scalerank") or 99) > rank_max:
            continue
        g = shape(f["geometry"])
        if not g.intersects(caixa):
            continue
        g = g.intersection(corte)
        if g.is_empty:
            continue
        r = int(p.get("scalerank") or 99)
        por_rank.setdefault(r, []).append(g)
        chave = "%s, scalerank %d" % (p["type"], r)
        n[chave] = n.get(chave, 0) + 1
        km[chave] = km.get(chave, 0) + float(p.get("length_km") or 0)
    out = {k: unary_union(v) for k, v in por_rank.items()}
    return out, {"arquivo": C.ESTRADAS.replace("\\", "/"), "sha256": s, "commit": "ca96624a (nvkelso/natural-earth-vector), o do Juneau",
                 "tipos": list(tipos), "scalerank_max": rank_max, "trechos": n, "length_km_do_ne": {k: round(v) for k, v in km.items()},
                 "corte": "a terra do ABS (STE 2021) com 0,02° de folga", "licenca": C.LIC_NE}


def caixa_barra_no_meio(img, x0, y0, linhas, pad_x, pad_y, entre, barra, barra_linha, depois_barra, raio=10):
    """a caixa de M.caixa_texto() (a mesma fonte, a mesma medida, o mesmo desenho e a mesma sombra), com o sublinhado vermelho embaixo da linha
    barra_linha (e não da última) e depois_barra px entre ele e a linha seguinte. Para a r3-n3: a amarela fica sublinhada e a linha da conta ("OTHERS
    8") vem embaixo dela, pequena. linhas: [(texto, px, peso, cor)]; entre: os vãos entre as linhas (o vão depois da barra_linha é trocado pela barra
    e por depois_barra); barra: (espessura, distância, cor)"""
    from PIL import Image, ImageDraw
    import cv2
    K = M.K
    med, larg, alt = [], 0, 0
    for i, lin in enumerate(linhas):
        # uma linha é (texto, px, peso, cor) ou, com tamanhos diferentes na mesma linha, [(texto, px, peso, cor), ...]: as maiúsculas de todos os
        # pedaços assentam na mesma linha de base, e cada pedaço começa no avanço do anterior
        pecas = lin if isinstance(lin, list) else [lin]
        ps, xa, h_ = [], 0.0, 0.0
        for s, px, peso, cor in pecas:
            f = M.fonte(px * K, peso, 32 if px > 80 else 14)
            bb, cap = f.getbbox(s), f.getbbox("H")
            ps.append((s, cor, f, bb, cap, xa))
            xa += f.getlength(s) / K
            h_ = max(h_, (cap[3] - cap[1]) / K)
        ult = ps[-1]
        w_ = ult[5] + (ult[3][2] - ult[3][0]) / K
        nome = "".join(p[0] for p in ps)
        med.append((nome, ps, w_, h_))
        larg = max(larg, w_)
    for i, m in enumerate(med):
        alt += m[3]
        if i < len(med) - 1:
            alt += (barra[1] + barra[0] + depois_barra) if i == barra_linha else entre[i]
    if img is None:          # só a medida: a altura da caixa inteira (com o padding), para posicionar antes de desenhar
        return alt + 2 * pad_y
    caixa = (x0, y0, x0 + larg + 2 * pad_x, y0 + alt + 2 * pad_y)
    cam = Image.new("RGBA", (M.W * K, M.H * K), (0, 0, 0, 0))
    d = ImageDraw.Draw(cam)
    d.rounded_rectangle([v * K for v in caixa], radius=raio * K, fill=M.PRETO + (250,))
    y = y0 + pad_y
    caixas_l = {}
    for i, (nome, ps, w_, h_) in enumerate(med):
        bb0 = ps[0][3][0]
        for s, cor, f, bb, cap, xa in ps:
            # a maiúscula do pedaço assenta na base da linha (y + h_); todos os pedaços andam com o recuo do primeiro (como em M.caixa_texto)
            topo = y + h_ - (cap[3] - cap[1]) / K
            d.text(((x0 + pad_x + xa) * K - bb0, topo * K - cap[1]), s, font=f, fill=cor + (255,))
            if len(ps) > 1:
                caixas_l[s.strip()] = [round(x0 + pad_x + xa), round(topo), round(x0 + pad_x + xa + f.getlength(s) / K), round(y + h_)]
        if len(ps) == 1:
            caixas_l[nome] = [round(x0 + pad_x), round(y), round(x0 + pad_x + w_), round(y + h_)]
        y += h_
        if i == barra_linha:
            y += barra[1]
            d.rectangle([(x0 + pad_x) * K, y * K, (x0 + pad_x + w_) * K, (y + barra[0]) * K], fill=barra[2] + (255,))
            caixas_l["_barra"] = [round(x0 + pad_x), round(y), round(x0 + pad_x + w_), round(y + barra[0])]
            y += barra[0] + depois_barra
        elif i < len(med) - 1:
            y += entre[i]
    camr = cam.resize((M.W, M.H), Image.LANCZOS)
    a = np.asarray(camr.split()[3]).astype(np.float32) / 255
    somb = np.roll(np.roll(cv2.GaussianBlur(a, (0, 0), 14), 12, 0), 9, 1)
    img = M.compor(img, M.PRETO, np.clip(somb * 0.6, 0, 0.6))
    rgb = np.asarray(camr.convert("RGB")).astype(np.float32)
    img = img * (1 - a[..., None]) + rgb * a[..., None]
    return img, [round(v) for v in caixa], caixas_l, a, alt


def maiusculas_168(caixas_l):
    return {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in caixas_l.items() if k != "_barra"}


def legivel(caixas_l):
    """o texto legível de cada linha (os espaços largos da Inter viram espaço comum), para o -pontos.json e a conferência"""
    return {k.replace(ESPACO_TERCO, " ").replace(ESPACO_QUARTO, " "): v for k, v in caixas_l.items()}
