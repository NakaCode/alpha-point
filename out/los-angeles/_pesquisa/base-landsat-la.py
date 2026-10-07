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
#   python out/los-angeles/_pesquisa/base-landsat-la.py [--item=<id>[,<id>…]] [--sangria=<px do still>]   (cwd = raiz do canal)
# --sangria (07/10/2026, para a mesa que a câmera percorre: out/juneau/_tmp/movimento/BRIEF.md, "O still de satélite e a
# sangria"): alarga a janela, por igual nos 4 lados, em <px do still> ÷ 1,6 pixels da origem (o still amplia a origem 1,6×),
# na MESMA grade de pixels do recorte de 2400 × 1350: o miolo é o mesmo recorte. Grava landsat-los-angeles-sangria<px>.png,
# sem tocar o landsat-los-angeles.png.
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
ESCALA = 1.6                                   # 2400 × 1350 → o still de 3840 × 2160
SANGRIA = next((int(a.split("=", 1)[1]) for a in sys.argv[1:] if a.startswith("--sangria=")), 0)
if SANGRIA:
    if (SANGRIA / ESCALA) != int(SANGRIA / ESCALA): sys.exit(f"--sangria={SANGRIA} não dá pixel inteiro da origem (÷ {ESCALA}): use múltiplo de 8")
    SP = int(SANGRIA / ESCALA); MPP = (X1 - X0) / PW
    X0, X1, Y0, Y1 = X0 - SP * MPP, X1 + SP * MPP, Y0 - SP * MPP, Y1 + SP * MPP
    PW, PH = PW + 2 * SP, PH + 2 * SP
NOME = f"landsat-los-angeles-sangria{SANGRIA}.png" if SANGRIA else "landsat-los-angeles.png"

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
def recorte(x0, y0, x1, y1, w, h):
    global base_t
    base_t = None
    for it in itens:
        url = (f"https://planetarycomputer.microsoft.com/api/data/v1/item/bbox/{x0:.0f},{y0:.0f},{x1:.0f},{y1:.0f}.png"
               f"?collection=landsat-c2-l2&item={it}&{COR}&coord_crs=epsg:3857&dst_crs=epsg:3857&width={w}&height={h}")
        urls.append(url)
        im = Image.open(BytesIO(pedir(url))).convert("RGBA")
        base_t = im if base_t is None else Image.alpha_composite(im, base_t)   # o que já está (o de cima) cobre o novo
    return base_t
if not SANGRIA:
    base = recorte(X0, Y0, X1, Y1, PW, PH)
else:
    # Com sangria, um pedido só de ~4000 px deu 504 no serviço (07/10/2026): o mesmo recorte sai em ladrilhos da MESMA grade
    # (cada um com a sua fatia exata de metros e de pixels), um pedido por vez, colados no lugar.
    import time
    MPP, BORDA = (X1 - X0) / PW, 16
    cortes = lambda n, k: [round(n * i / k) for i in range(k + 1)]
    xs, ys = cortes(PW, -(-PW // 1400)), cortes(PH, -(-PH // 1100))
    base = Image.new("RGBA", (PW, PH))
    for j in range(len(ys) - 1):
        for i in range(len(xs) - 1):
            w, h = xs[i + 1] - xs[i], ys[j + 1] - ys[j]
            # a imagem cresce para baixo; o Y do Mercator cresce para cima
            # cada ladrilho se pede com BORDA px a mais de cada lado e se apara: a borda de um pedido sai reamostrada diferente
            # do miolo (sem a borda, a costura aparecia como linha de até 66 níveis entre um ladrilho e outro)
            t = recorte(X0 + (xs[i] - BORDA) * MPP, Y1 - (ys[j + 1] + BORDA) * MPP, X0 + (xs[i + 1] + BORDA) * MPP,
                        Y1 - (ys[j] - BORDA) * MPP, w + 2 * BORDA, h + 2 * BORDA)
            base.paste(t.crop((BORDA, BORDA, BORDA + w, BORDA + h)), (xs[i], ys[j]))
            print(f"ladrilho {j * (len(xs) - 1) + i + 1}/{(len(xs) - 1) * (len(ys) - 1)}: {w}×{h} em ({xs[i]}, {ys[j]})", flush=True)
            time.sleep(1)
falta = base.getchannel("A").histogram()[0] / (PW * PH)
preenchido = None
if falta > 0.001 and SANGRIA:
    # Na sangria, o buraco é a borda da faixa do satélite (07/10/2026: uma cunha no canto de baixo à direita, longe do quadro
    # em repouso). Ele se preenche com o pixel válido mais perto NA MESMA LINHA; a mesa ainda passa pelo desfoque forte e pelo
    # escurecimento. O quadro em repouso (o recorte de 2400 × 1350 do miolo) não pode ter buraco: se tiver, para.
    import numpy as np
    a_ = np.asarray(base).copy(); vazio = a_[..., 3] == 0
    bb = base.getchannel("A").point(lambda v: 255 if v == 0 else 0).getbbox()
    if vazio[SP:SP + 1350, SP:SP + 2400].any(): sys.exit(f"há pixel sem dado dentro do quadro em repouso: {bb}")
    for y in np.nonzero(vazio.any(axis=1))[0]:
        ok = np.nonzero(~vazio[y])[0]
        if not len(ok): sys.exit(f"a linha {y} não tem nenhum pixel com dado")
        sem = np.nonzero(vazio[y])[0]
        perto = ok[np.clip(np.searchsorted(ok, sem), 0, len(ok) - 1)]
        antes = ok[np.clip(np.searchsorted(ok, sem) - 1, 0, len(ok) - 1)]
        perto = np.where(np.abs(antes - sem) < np.abs(perto - sem), antes, perto)
        a_[y, sem] = a_[y, perto]
    base = Image.fromarray(a_, "RGBA")
    preenchido = {"fracao": round(falta, 4), "retangulo_origem": list(bb), "como": "pixel válido mais perto na mesma linha"}
    print(f"AVISO: {falta:.2%} sem dado, dentro do retângulo {bb} (x0, y0, x1, y1 da origem de {PW} × {PH}): preenchido")
elif falta > 0.001:
    sys.exit(f"sobrou {falta:.1%} sem dado na janela: acrescente uma cena da mesma passagem com --item=")
buf = BytesIO(); base.convert("RGB").save(buf, "PNG"); png = buf.getvalue()
arq = os.path.join(SAIDA, NOME)
open(arq, "wb").write(png)
url = urls
meta = {"arquivo": f"out/los-angeles/_media/base/{NOME}", **({"sangria_still_px": SANGRIA, "sangria_origem_px": SP} if SANGRIA else {}), "sha256": hashlib.sha256(png).hexdigest(),
        "itens": itens, "colecao": "landsat-c2-l2 (USGS Landsat Collection 2 Level-2)", "janela_lonlat": [LON0, LAT0, LON1, LAT1],
        "janela_3857": [round(X0), round(Y0), round(X1), round(Y1)], "tamanho": [PW, PH], "url": url,
        "licenca": "domínio público (USGS, https://www.usgs.gov/centers/eros/data-citation)", "credito_na_tela": None,
        "credito_descricao": f"Satellite imagery: {', '.join(itens)}, Landsat Collection 2 Level-2. Landsat imagery courtesy of the U.S. Geological Survey.",
        **({"sem_dado_preenchido": preenchido} if preenchido else {}),
        "baixado_em": datetime.now().astimezone().isoformat(timespec="seconds")}
json.dump(meta, open(arq + ".json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"gravado: {meta['arquivo']} ({len(png):,} bytes), itens {item}")
