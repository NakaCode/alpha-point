# Base Landsat da cena de teste (out/prova-mapa/graphics/landsat-juneau.html), 25/09/2026.
#
# De onde vem: Landsat Collection 2 Level-2 (reflectância de superfície) da USGS, servido pela API de dados do
# Microsoft Planetary Computer (sem conta e sem chave), já recortado e reprojetado em Web Mercator (EPSG:3857).
# Duas cenas, porque nenhuma cobre a janela sozinha: a 058/019 do Landsat 9 (23/03/2024) por cima, e a 057/019
# do Landsat 8 (24/03/2024) fechando o canto sudeste. Escolhidas em 25/09/2026 pela limpeza (nuvem na janela de
# 0,02 %) e pelo relevo (sol a 31,6°). A de verão (06/08/2024) saiu enevoada a 30 m.
#
# Licença: domínio público (USGS: "may be used, transferred, or reproduced without copyright restriction",
# https://www.usgs.gov/centers/eros/data-citation). Identidade §7: sem crédito na tela; a descrição leva a linha
# que a USGS pede (abaixo, em CREDITO_DESCRICAO). Termos do Planetary Computer: https://planetarycomputer.microsoft.com/terms
#
#   python out/prova-mapa/_pesquisa/base-landsat.py        (cwd = raiz do canal; baixa 32 pedaços PNG, ~1–3 MB cada)
#
# Grava em out/prova-mapa/_media/base/ (fora do git): landsat-juneau.jpg, landsat-juneau.js (window.__BASE_CANAL,
# que a cena lê) e os pedaços em pecas/ (cache: rodar de novo não baixa outra vez). Site que recusar (403, 429,
# captcha) não se contorna: o script para.
import hashlib, http.client, io, json, math, os, sys, time, urllib.error, urllib.request

import numpy as np
from PIL import Image

for fluxo in (sys.stdout, sys.stderr):   # console do Windows em cp1252 não imprime ✓ nem acento
    fluxo.reconfigure(encoding="utf-8", errors="replace")
RAIZ = os.getcwd()
if not os.path.exists(os.path.join(RAIZ, "canal.json")):
    sys.exit("rode da raiz do canal (a pasta com canal.json)")
CONTATO = json.load(open(os.path.join(RAIZ, "canal.json"), encoding="utf-8")).get("contato", "")
SAIDA = os.path.join(RAIZ, "out", "prova-mapa", "_media", "base")
PECAS = os.path.join(SAIDA, "pecas")
os.makedirs(PECAS, exist_ok=True)

API = "https://planetarycomputer.microsoft.com/api/data/v1/item/bbox"
ITENS = ["LC08_L2SP_057019_20240324_02_T1",   # por baixo: fecha a faixa leste
         "LC09_L2SP_058019_20240323_02_T1"]   # por cima: ≈85 % da janela da câmera no início, 94 % no fim
# cor natural sem estourar a neve do campo de gelo (DN 7273 = reflectância 0; 62000 ≈ 1,5)
COR = ("assets=red&assets=green&assets=blue&nodata=0&rescale=7273,62000"
       "&color_formula=gamma%20RGB%202.2,%20saturation%201.2&resampling=bilinear&reproject=bilinear")
# grade em metros Web Mercator, alinhada a 65 m (≈ 34 m no chão a 58,5° N); 4 × 4 pedaços de 1500 × 985 px
XS = [-15184000, -15086500, -14989000, -14891500, -14794000]
YS = [8212900, 8148875, 8084850, 8020825, 7956800]   # de cima para baixo
PW, PH = 1500, 985
M = (YS[0] - YS[-1]) / (4 * PH)   # metros Web Mercator por pixel (65)
R = 6378137.0

def url(item, x0, y0, x1, y1):
    return (f"{API}/{x0},{y0},{x1},{y1}.png?collection=landsat-c2-l2&item={item}&{COR}"
            f"&coord_crs=epsg:3857&dst_crs=epsg:3857&width={PW}&height={PH}")

def baixar(item, i, j):
    u = url(item, XS[j], YS[i + 1], XS[j + 1], YS[i])
    # o nome do pedaço leva o hash do URL (cor, grade, tamanho): mudou a receita, o cache antigo não serve
    arq = os.path.join(PECAS, f"{item}_r{i}c{j}_{hashlib.sha1(u.encode()).hexdigest()[:12]}.png")
    if os.path.exists(arq):
        im = Image.open(arq).convert("RGBA")
        if im.size != (PW, PH):
            sys.exit(f"pedaço em cache {arq} tem {im.size}, esperado {(PW, PH)}: apague-o e rode de novo")
        return im
    esperas = [0, 5, 15, 30]
    for k, e in enumerate(esperas):
        time.sleep(e)
        try:
            req = urllib.request.Request(u, headers={"User-Agent": f"regie alpha-point ({CONTATO})"})
            with urllib.request.urlopen(req, timeout=60) as r:
                tipo = r.headers.get("Content-Type", "")
                corpo = r.read()
            if not tipo.startswith("image/png"):
                # página de verificação, login ou erro com status 200: é recusa, e recusa não se contorna
                sys.exit(f"o Planetary Computer respondeu {tipo or 'sem tipo'} em vez de PNG ({item} r{i}c{j}). "
                         "Não se contorna: pare e avise.")
            im = Image.open(io.BytesIO(corpo)).convert("RGBA")
            if im.size != (PW, PH):
                sys.exit(f"pedaço {item} r{i}c{j} veio com {im.size}, esperado {(PW, PH)}")
            open(arq, "wb").write(corpo)
            print(f"  ✓ {item} r{i}c{j} ({len(corpo) // 1024} KB)", flush=True)
            return im
        except urllib.error.HTTPError as x:
            if x.code in (401, 403, 429):
                sys.exit(f"o Planetary Computer recusou (HTTP {x.code}). Não se contorna: pare e avise.")
            if x.code < 500 and x.code != 408:
                sys.exit(f"HTTP {x.code} em {item} r{i}c{j}: resposta definitiva, confira o URL")
            if k == len(esperas) - 1:
                sys.exit(f"HTTP {x.code} em {item} r{i}c{j} depois de {len(esperas)} tentativas")
            print(f"  … HTTP {x.code} em {item} r{i}c{j}; tento de novo", flush=True)
        except (urllib.error.URLError, TimeoutError, http.client.HTTPException, ConnectionError, OSError) as x:
            # rede, leitura cortada (IncompleteRead) ou PNG que não abre: passageiro, tenta de novo
            if k == len(esperas) - 1:
                sys.exit(f"falhou em {item} r{i}c{j} depois de {len(esperas)} tentativas: {x}")
            print(f"  … falhou em {item} r{i}c{j} ({type(x).__name__}); tento de novo", flush=True)

def montar(item):
    tela = Image.new("RGBA", (PW * 4, PH * 4), (0, 0, 0, 0))
    for i in range(4):
        for j in range(4):
            tela.paste(baixar(item, i, j), (j * PW, i * PH))
    return tela

print("baixando do Planetary Computer (Landsat C2 L2, USGS):")
camadas = [montar(it) for it in ITENS]
img = camadas[0]
for c in camadas[1:]:
    img = Image.alpha_composite(img, c)
# o canto sudoeste (a oeste de -136,10° e ao sul de 58,01°) não tem dado em NENHUMA das duas cenas. Fica fora de
# tudo que a câmera da cena mostra (a sul, ela vai até 58,036°), então se corta a faixa de baixo inteira (196 px:
# até a linha 3744, onde o canto acaba), sem inventar pixel. O sul da base fica em 58,0106°.
CORTE_BAIXO = 196
img = img.crop((0, 0, img.width, img.height - CORTE_BAIXO))
a = np.asarray(img)
furo = a[..., 3] < 255
n_furo = int(furo.sum())
rgb = a[..., :3].copy()
if n_furo:   # onde caem os furos, em blocos de 500 px (para conferir que nenhum cai no meio da cena)
    blocos = {}
    for y, x in zip(*np.nonzero(furo)):
        blocos[(y // 500 * 500, x // 500 * 500)] = blocos.get((y // 500 * 500, x // 500 * 500), 0) + 1
    print("  furos por bloco (y, x): " + ", ".join(f"{k}: {v}" for k, v in sorted(blocos.items())))

def caixa(m, r):
    """soma de cada janela (2r+1)² — por soma acumulada, em float64."""
    p = np.pad(m, ((r + 1, r), (r + 1, r)))
    c = p.cumsum(0).cumsum(1)
    k = 2 * r + 1
    return c[k:, k:] - c[:-k, k:] - c[k:, :-k] + c[:-k, :-k]

# furo que sobrar (pixel sem dado das duas cenas): média dos vizinhos válidos numa janela que cresce até
# 32 px. Furo maior que isso não se inventa: o script para e diz onde está.
raio_usado = 0
if n_furo:
    ys, xs = np.nonzero(furo)
    print(f"  pixels sem dado: {n_furo} (caixa y {ys.min()}–{ys.max()}, x {xs.min()}–{xs.max()})")
    y0, y1 = max(0, ys.min() - 40), min(furo.shape[0], ys.max() + 41)
    x0, x1 = max(0, xs.min() - 40), min(furo.shape[1], xs.max() + 41)
    val = (~furo[y0:y1, x0:x1]).astype(np.float64)
    falta = furo[y0:y1, x0:x1].copy()
    for r in (2, 4, 8, 16, 32):
        cont = caixa(val, r)
        pega = falta & (cont > 0)
        for ch in range(3):
            s = caixa(rgb[y0:y1, x0:x1, ch].astype(np.float64) * val, r)
            bloco = rgb[y0:y1, x0:x1, ch]
            bloco[pega] = np.clip(s[pega] / cont[pega] + 0.5, 0, 255).astype(np.uint8)
        falta &= ~pega
        raio_usado = r
        if not falta.any():
            break
    if falta.any():
        fy, fx = np.nonzero(falta)
        sys.exit(f"furo grande sem dado ({int(falta.sum())} px, y {fy.min() + y0}–{fy.max() + y0}, "
                 f"x {fx.min() + x0}–{fx.max() + x0}): confira a cobertura das cenas")
final = Image.fromarray(rgb, "RGB")
jpg = os.path.join(SAIDA, "landsat-juneau.jpg")
final.save(jpg, quality=92, subsampling=0)
sha = hashlib.sha256(open(jpg, "rb").read()).hexdigest()

lon = lambda x: x / R * 180 / math.pi
lat = lambda y: (2 * math.atan(math.exp(y / R)) - math.pi / 2) * 180 / math.pi
W, E, N, S = lon(XS[0]), lon(XS[-1]), lat(YS[0]), lat(YS[-1] + CORTE_BAIXO * M)
CREDITO_DESCRICAO = ("Satellite imagery: Landsat 9 (LC09_L2SP_058019_20240323_02_T1) and Landsat 8 "
    "(LC08_L2SP_057019_20240324_02_T1), Collection 2 Level-2 surface reflectance, March 23–24, 2024. Landsat 8 and "
    "Landsat 9 images courtesy of the U.S. Geological Survey. USGS/NASA Landsat Program. "
    "https://doi.org/10.5066/P9OGBGM6 — accessed via Microsoft Planetary Computer.")
base = {
    "nome": "landsat-juneau", "tipo": "raster",
    "rotulo": "Landsat 8 e 9 (USGS), Collection 2 Level-2, 23–24/03/2024 — domínio público",
    "imagem": {"arquivo": "../_media/base/landsat-juneau.jpg",
               "coordinates": [[W, N], [E, N], [E, S], [W, S]],
               "largura": final.width, "altura": final.height, "sha256": sha},
    "dem": None, "credencial": None,
    "atribuicao": {"exigida": False, "descricao": CREDITO_DESCRICAO},
    "tratamento": {"brilho": 0.65, "saturacao": 0.70},
    "procedencia": {
        "fonte": "Landsat Collection 2 Level-2 (USGS) via Microsoft Planetary Computer, API de dados item/bbox",
        "itens": ITENS, "cor": COR, "grade_3857": {"xs": XS, "ys": YS, "peca": [PW, PH]},
        "licenca": "domínio público (USGS)", "url_licenca": "https://www.usgs.gov/centers/eros/data-citation",
        "termos_servico": "https://planetarycomputer.microsoft.com/terms",
        "furos_preenchidos_px": n_furo, "corte_baixo_px": CORTE_BAIXO, "gerado_por": "out/prova-mapa/_pesquisa/base-landsat.py",
    },
}
# a procedência vai também para _pesquisa/ (no git), com o bloco da DESCRIÇÃO do vídeo. O _creditos-mapa.md que o
# preparar-cena da pré-v1 grava não serve a esta cena: ele só conhece os perfis dele e escreveria o crédito da EOX.
open(os.path.join(RAIZ, "out", "prova-mapa", "_pesquisa", "base-landsat.json"), "w", encoding="utf-8").write(
    json.dumps({**base, "descricao_do_video": [CREDITO_DESCRICAO,
        "Map data: © OpenStreetMap contributors — Open Database License (https://www.openstreetmap.org/copyright)"],
        "tela": "© OpenStreetMap contributors (a estrada e Cascade Point; Landsat e Natural Earth: sem linha, identidade §7)"},
        ensure_ascii=False, indent=2) + "\n")
# e por cima do _creditos-mapa.md que o preparar-cena da pré-v1 grava (ele escreveria o crédito da EOX, que esta
# cena não usa). Rodou o preparar-cena de novo? Rode este script depois.
open(os.path.join(RAIZ, "out", "prova-mapa", "_creditos-mapa.md"), "w", encoding="utf-8").write(
    "# Créditos de mapa — prova-mapa\n\n"
    "> Gravado pelo CANAL (out/prova-mapa/_pesquisa/base-landsat.py), não pela pré-v1: a base desta cena é a do\n"
    "> canal (Landsat), que o preparar-cena não conhece. Se o preparar-cena regravar este arquivo com o crédito da\n"
    "> EOX, rode o base-landsat.py de novo. Cole o bloco abaixo na DESCRIÇÃO do vídeo.\n\n"
    "```text\nCréditos de mapa:\n" + CREDITO_DESCRICAO + "\n"
    "Map data: © OpenStreetMap contributors — Open Database License (https://www.openstreetmap.org/copyright)\n```\n\n"
    "Na tela: só \"© OpenStreetMap contributors\" (a estrada e Cascade Point). Landsat e Natural Earth são domínio\n"
    "público: sem linha na tela (marca/identidade.md §7).\n")
open(os.path.join(SAIDA, "landsat-juneau.js"), "w", encoding="utf-8").write(
    "// Base do canal (Landsat), gravada por out/prova-mapa/_pesquisa/base-landsat.py. A cena lê window.__BASE_CANAL.\n"
    "window.__BASE_CANAL = " + json.dumps(base, ensure_ascii=False) + ";\n")
print(f"✓ {jpg} ({final.width}×{final.height}, {os.path.getsize(jpg) // 1024} KB, sha256 {sha[:12]}…)")
print(f"  janela lon {W:.4f} a {E:.4f}, lat {S:.4f} a {N:.4f} · furos preenchidos: {n_furo} px (vizinhança de até {raio_usado} px)")
