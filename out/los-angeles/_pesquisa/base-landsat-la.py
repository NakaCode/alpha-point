# A imagem de satélite PÚBLICA da mesa do vídeo 2 (Los Angeles): Landsat Collection 2 Level-2 (USGS), pela API de dados
# do Microsoft Planetary Computer (sem conta, sem chave), como out/prova-mapa/_pesquisa/base-landsat.py fez para Juneau.
# A mesa é a de marca/identidade.md §5, "A mesa do vídeo 2 em diante: satélite sob a luz" (Lucas, 07/10/2026): a imagem
# só serve de textura escura e desfocada; quem a trata é ferramentas/mesa-satelite.py.
#
# Licença: domínio público (USGS: "may be used, transferred, or reproduced without copyright restriction",
# https://www.usgs.gov/centers/eros/data-citation). Sem crédito na tela (identidade §7).
# Janela: a bacia de Los Angeles, do centro antigo ao porto (-118,55 a -117,98 de longitude; 33,70 a 34,06 de latitude, que pega a Plaza),
# na proporção 16:9 em Web Mercator.
#
#   python out/los-angeles/_pesquisa/base-landsat-la.py [--item=<id>[,<id>…]]   (cwd = raiz do canal)
# Com mais de um item (cenas da MESMA passagem, linhas vizinhas do WRS-2), o primeiro fica por cima e os outros
# preenchem onde ele não tem dado: na mesma passagem a cor casa. Escolha de 07/10/2026: as duas cenas do Landsat 8 de
# 09/04/2024 (041036 por cima, 041037 por baixo), porque nenhuma cena sozinha cobre do centro antigo ao porto.
# 1. procura no catálogo STAC as cenas Landsat 8/9 de 2024 que cobrem a janela, com menos de 1 % de nuvem;
# 2. baixa UM recorte PNG de 2400 × 1350 da melhor (ou da --item), em cor natural;
# 3. grava out/los-angeles/_media/base/landsat-los-angeles.png e .json (a procedência). Site que recusar (403, 429,
#    captcha) não se contorna: o script para.
import json, math, os, sys, urllib.request, urllib.error, hashlib
from datetime import datetime
for f in (sys.stdout, sys.stderr): f.reconfigure(encoding="utf-8", errors="replace")
RAIZ = os.getcwd()
if not os.path.exists(os.path.join(RAIZ, "canal.json")): sys.exit("rode da raiz do canal")
CONTATO = json.load(open(os.path.join(RAIZ, "canal.json"), encoding="utf-8")).get("contato", "")
UA = {"User-Agent": f"AlphaPointBot/1.0 ({CONTATO})"}
SAIDA = os.path.join(RAIZ, "out", "los-angeles", "_media", "base"); os.makedirs(SAIDA, exist_ok=True)
LON0, LON1, LAT0, LAT1 = -118.55, -117.98, 33.70, 34.06
R = 6378137.0
mx = lambda lon: R * math.radians(lon)
my = lambda lat: R * math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))
X0, X1, Y0, Y1 = mx(LON0), mx(LON1), my(LAT0), my(LAT1)
# ajusta à proporção 16:9 pelo centro, sem encolher
w, h = X1 - X0, Y1 - Y0
if w / h < 16 / 9:
    c = (X0 + X1) / 2; w = h * 16 / 9; X0, X1 = c - w / 2, c + w / 2
else:
    c = (Y0 + Y1) / 2; h = w * 9 / 16; Y0, Y1 = c - h / 2, c + h / 2
PW, PH = 2400, 1350

def pedir(url, corpo=None):
    req = urllib.request.Request(url, data=json.dumps(corpo).encode() if corpo else None,
                                 headers={**UA, **({"Content-Type": "application/json"} if corpo else {})})
    try:
        with urllib.request.urlopen(req, timeout=180) as r: return r.read()
    except urllib.error.HTTPError as e:
        sys.exit(f"o servidor respondeu {e.code} em {url[:90]}… — parado (não se contorna)")

item = next((a.split("=", 1)[1] for a in sys.argv[1:] if a.startswith("--item=")), None)
if not item:
    busca = {"collections": ["landsat-c2-l2"], "bbox": [LON0, LAT0, LON1, LAT1], "datetime": "2024-01-01/2024-12-31",
             "query": {"eo:cloud_cover": {"lt": 1}, "platform": {"in": ["landsat-8", "landsat-9"]}}, "limit": 50}
    res = json.loads(pedir("https://planetarycomputer.microsoft.com/api/stac/v1/search", busca))
    cands = []
    for f in res.get("features", []):
        bb = f.get("bbox") or [0, 0, 0, 0]
        cobre = bb[0] <= LON0 and bb[2] >= LON1 and bb[1] <= LAT0 and bb[3] >= LAT1
        p = f["properties"]
        cands.append((cobre, -p.get("eo:cloud_cover", 99), p.get("view:sun_elevation", 0), f["id"], p.get("datetime", "")[:10], p.get("eo:cloud_cover")))
    cands.sort(reverse=True)
    for c in cands[:8]: print("candidata:", c)
    if not cands or not cands[0][0]: sys.exit("nenhuma cena limpa cobre a janela inteira; escolha com --item=")
    item = cands[0][3]
COR = ("assets=red&assets=green&assets=blue&nodata=0&rescale=7273,30000"
       "&color_formula=gamma%20RGB%202.2,%20saturation%201.1&resampling=bilinear&reproject=bilinear")
from io import BytesIO
from PIL import Image
itens = item.split(",")
base = None
urls = []
for it in itens:
    url = (f"https://planetarycomputer.microsoft.com/api/data/v1/item/bbox/{X0:.0f},{Y0:.0f},{X1:.0f},{Y1:.0f}.png"
           f"?collection=landsat-c2-l2&item={it}&{COR}&coord_crs=epsg:3857&dst_crs=epsg:3857&width={PW}&height={PH}")
    urls.append(url)
    im = Image.open(BytesIO(pedir(url))).convert("RGBA")
    base = im if base is None else Image.alpha_composite(im, base)   # o que já está (o de cima) cobre o novo
falta = base.getchannel("A").histogram()[0] / (PW * PH)
if falta > 0.001:
    sys.exit(f"sobrou {falta:.1%} sem dado na janela: acrescente uma cena da mesma passagem com --item=")
buf = BytesIO(); base.convert("RGB").save(buf, "PNG"); png = buf.getvalue()
arq = os.path.join(SAIDA, "landsat-los-angeles.png")
open(arq, "wb").write(png)
url = urls
meta = {"arquivo": "out/los-angeles/_media/base/landsat-los-angeles.png", "sha256": hashlib.sha256(png).hexdigest(),
        "itens": itens, "colecao": "landsat-c2-l2 (USGS Landsat Collection 2 Level-2)", "janela_lonlat": [LON0, LAT0, LON1, LAT1],
        "janela_3857": [round(X0), round(Y0), round(X1), round(Y1)], "tamanho": [PW, PH], "url": url,
        "licenca": "domínio público (USGS, https://www.usgs.gov/centers/eros/data-citation)", "credito_na_tela": None,
        "credito_descricao": f"Satellite imagery: {', '.join(itens)}, Landsat Collection 2 Level-2. Landsat imagery courtesy of the U.S. Geological Survey.",
        "baixado_em": datetime.now().astimezone().isoformat(timespec="seconds")}
json.dump(meta, open(arq + ".json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"gravado: {meta['arquivo']} ({len(png):,} bytes), itens {item}")
