"""CÓPIA de roteiros/australia-animais/miniatura/bases.py (que não foi editado) para as 2 miniaturas novas da reembalagem do vídeo 1
(`los-angeles`, 18/11/2026). Só mudaram a pasta de destino, que passou a ser roteiros/los-angeles/miniatura/reembalagem-2026-11-18/_bases/
(fora do git, .gitignore linha 108), e o gerado_por.

O texto abaixo é o da cópia da Austrália:

CÓPIA de out/_pautas/video-8-brasil/miniaturas/bases.py (que não foi editado) para as 2 miniaturas da pauta do vídeo 8, a Austrália
(`australia-animais`, 18/11/2026). O que mudou:
- a pasta de destino passou a ser roteiros/australia-animais/miniatura/_bases/ (fora do git, .gitignore linha 105), e o gerado_por;
- novo: robots() lê e grava o robots.txt de um host antes do primeiro pedido a ele (e diz se o caminho pedido está vetado para '*');
  pagina() grava uma página HTML como veio (a página de downloads, a da licença); baixar_arquivo() aceita o nome do arquivo de destino e
  confere o robots.txt do host antes de pedir;
- pedir() devolve o erro HTTP sem parar quando o chamador pede (o 404 de um robots.txt ausente).

O texto abaixo é o da cópia das duas florestas:

CÓPIA de roteiros/arizona-strip/miniatura/bases.py (que não foi editado) para as 2 miniaturas das duas florestas (vídeo 8, Brasil;
18/11/2026): só mudou a pasta de destino, que passou a ser out/_pautas/video-8-brasil/miniaturas/_bases/ (fora do git), e o gerado_por.

O texto abaixo é o da cópia da Strip:

CÓPIA de out/_pautas/video-8/miniaturas/bases.py (que não foi editado) para as 3 miniaturas da pauta do vídeo 8 (18/11/2026): só mudou a pasta
de destino, que passou a ser roteiros/arizona-strip/miniatura/_bases/ (fora do git), e o gerado_por. O texto abaixo é o do original.

As bases das miniaturas do vídeo 8 (esboços para a escolha da pauta, 17/11/2026): os pedidos de rede, um por vez, com o User-Agent do
canal. Cada arquivo baixado vai para out/_pautas/video-8/miniaturas/_bases/ com um .json ao lado (a URL, a data, o sha256, a licença).

Não roda sozinho: o <slug>-bases.py de cada finalista chama estas funções. Nenhuma pede de novo o que já está no disco.
- gibs_relevo(): o relevo ASTER GDEM em cinza (NASA GIBS, WMS EPSG:3857), num recorte em graus;
- gibs_bluemarble(): a Blue Marble com relevo e batimetria (GIBS), para quem tem mar no quadro;
- baixar_arquivo(): um arquivo aberto (os Cartographic Boundary Files do U.S. Census);
- overpass(): uma consulta à API Overpass do OSM (rios, lagos, canais), gravada como veio (JSON).
Site que recusa (403, captcha, verificação de robô) para o script: nada se contorna.
"""
import datetime, hashlib, json, math, os, sys, time, urllib.parse, urllib.request

RAIZ = os.getcwd()
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"
CONTATO = json.load(open(os.path.join(RAIZ, "canal.json"), encoding="utf-8"))["contato"]
UA = "regie/0.1 (canal alpha-point; pesquisa geografica para video; %s)" % CONTATO
BASES = os.path.join(RAIZ, "roteiros", "los-angeles", "miniatura", "reembalagem-2026-11-18", "_bases")     # fora do git (.gitignore, linha 108)
os.makedirs(BASES, exist_ok=True)
R = 6378137.0
GIBS_WMS = "https://gibs.earthdata.nasa.gov/wms/epsg3857/best/wms.cgi"
OVERPASS = "https://overpass-api.de/api/interpreter"
# a licença da GIBS foi lida em 17/11/2026 para o vídeo 7 (as cópias estão no disco; não se pede de novo)
GIBS_LICENCA = ("aberta, sem restrição declarada: o GetCapabilities do WMS da GIBS diz 'Fees: none' e 'AccessConstraints: none' "
                "(out/rio-columbia/_tmp/miniatura/gibs/capabilities-3857.xml, lido em 17/11/2026), e a documentação da GIBS diz 'NASA "
                "promotes full and open sharing of data' (out/rio-columbia/_tmp/miniatura/gibs/docs-index.html, 17/11/2026)")
GIBS_RECONHECIMENTO = ("We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of "
                       "NASA's Earth Science Data and Information System (ESDIS).")


def agora():
    return datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def sha256_bytes(b):
    return hashlib.sha256(b).hexdigest()


def merc(lon, lat):
    return (math.radians(lon) * R, R * math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))


PEDIDOS = os.path.join(BASES, "pedidos.jsonl")     # nesta cópia: um registro por pedido de rede (a hora, a URL, o status)


def _registrar(url, status, n):
    with open(PEDIDOS, "a", encoding="utf-8") as f:
        f.write(json.dumps({"quando": agora(), "url": url, "status": status, "bytes": n}, ensure_ascii=False) + "\n")


def pedir(url, dados=None, timeout=300, aceitar=()):
    """um pedido, com o User-Agent do canal; 403, 418, 429 e captcha param o script (nada se contorna). Nesta cópia: os códigos em
    `aceitar` (o 404 de um robots.txt ausente) voltam como (None, código), sem parar; todo pedido vai ao pedidos.jsonl"""
    req = urllib.request.Request(url, data=dados, headers={"User-Agent": UA})
    try:
        r = urllib.request.urlopen(req, timeout=timeout)
    except urllib.error.HTTPError as e:
        _registrar(url, e.code, 0)
        if e.code in aceitar:
            return None, e.code
        sys.exit("HTTP %s em %s: parei (não se contorna)" % (e.code, url.split("?")[0]))
    b = r.read()
    _registrar(url, r.status, len(b))
    if b[:200].lower().find(b"captcha") >= 0:
        sys.exit("a resposta pede verificação: parei")
    return r, b


def robots(host, caminho="/"):
    """nesta cópia: o robots.txt de um host, lido antes do primeiro pedido a ele e gravado em _bases/robots-<host>.txt; se já está no disco
    (lido hoje), não pede de novo. Para o script se o caminho estiver vetado para '*' (a leitura simples: Disallow com prefixo)"""
    dest = os.path.join(BASES, "robots-%s.txt" % host)
    if not os.path.exists(dest):
        r, b = pedir("https://%s/robots.txt" % host, aceitar=(404, 410))
        if r is None:
            open(dest, "w", encoding="utf-8").write("# sem robots.txt: HTTP %s em %s\n" % (b, agora()))
            print("robots.txt de", host, "->", b, "(sem regras)")
            time.sleep(2)
            return
        open(dest, "wb").write(b)
        print("robots.txt de", host, "lido:", len(b), "bytes")
        time.sleep(2)
    texto = open(dest, encoding="utf-8", errors="replace").read()
    if texto.startswith("# sem robots.txt"):
        return
    # as regras do grupo '*', com '*' e '$' (RFC 9309): vale a regra mais longa que casa; no empate, Allow
    import re
    grupo, regras = False, []
    for linha in texto.splitlines():
        l = linha.split("#")[0].strip()
        if not l or ":" not in l:
            continue
        k, v = (s.strip() for s in l.split(":", 1))
        if k.lower() == "user-agent":
            grupo = (v == "*")
        elif grupo and k.lower() in ("allow", "disallow") and v:
            regras.append((k.lower(), v))
    casam = []
    for k, v in regras:
        rx = "".join(".*" if c == "*" else ("$" if (c == "$" and i == len(v) - 1) else re.escape(c)) for i, c in enumerate(v))
        if re.match(rx, caminho):
            casam.append((len(v), k == "allow", k, v))
    if casam:
        _, _, k, v = max(casam)
        if k == "disallow":
            sys.exit("o robots.txt de %s veta %s (Disallow: %s): parei" % (host, caminho, v))


def pagina(url, nome):
    """nesta cópia: uma página (HTML, JSON) gravada como veio, com o .json de procedência; confere o robots.txt antes"""
    dest = os.path.join(BASES, nome)
    if os.path.exists(dest):
        print("já no disco:", os.path.relpath(dest, RAIZ))
        return dest
    p = urllib.parse.urlparse(url)
    robots(p.netloc, p.path)
    quando = agora()
    r, b = pedir(url)
    print("página", r.status, r.headers.get("Content-Type"), len(b))
    open(dest, "wb").write(b)
    gravar_json(dest, {"nome": nome, "sha256": sha256_bytes(b), "bytes": len(b),
                       "procedencia": {"url": url, "resposta": {"status": r.status, "content_type": r.headers.get("Content-Type")},
                                       "user_agent": "o do canal (contato do canal.json)", "baixado_em": quando,
                                       "gerado_por": "roteiros/los-angeles/miniatura/reembalagem-2026-11-18/bases.py"}})
    time.sleep(3)
    return dest


def gravar_json(destino, reg):
    json.dump(reg, open(destino + ".json", "w", encoding="utf-8"), indent=1, ensure_ascii=False)


def _gibs(nome, camada, lon0, lat0, lon1, lat1, largura, rotulo, licenca, reconhecimento):
    dest = os.path.join(BASES, nome + ".png")
    if os.path.exists(dest):
        print("já no disco:", os.path.relpath(dest, RAIZ))
        return dest
    x0, y0 = merc(lon0, lat0)
    x1, y1 = merc(lon1, lat1)
    alt = int(round(largura * (y1 - y0) / (x1 - x0)))
    q = {"SERVICE": "WMS", "VERSION": "1.1.1", "REQUEST": "GetMap", "LAYERS": camada, "STYLES": "", "SRS": "EPSG:3857",
         "BBOX": "%.3f,%.3f,%.3f,%.3f" % (x0, y0, x1, y1), "WIDTH": str(largura), "HEIGHT": str(alt), "FORMAT": "image/png",
         "TRANSPARENT": "FALSE"}
    url = GIBS_WMS + "?" + urllib.parse.urlencode(q)
    quando = agora()
    r, b = pedir(url)
    ct = r.headers.get("Content-Type", "")
    print("GIBS", camada, r.status, ct, len(b))
    if not ct.startswith("image/png") or b[:8] != b"\x89PNG\r\n\x1a\n":
        open(dest + ".resposta-nao-png.bin", "wb").write(b)
        sys.exit("a resposta não é PNG: parei")
    open(dest, "wb").write(b)
    from PIL import Image
    im = Image.open(dest)
    gravar_json(dest, {
        "nome": nome, "tipo": "raster", "rotulo": rotulo,
        "imagem": {"arquivo": os.path.basename(dest), "coordinates": [[lon0, lat1], [lon1, lat1], [lon1, lat0], [lon0, lat0]],
                   "largura": im.size[0], "altura": im.size[1], "modo": im.mode, "sha256": sha256_bytes(b)},
        "janela_3857": [round(x0, 3), round(y0, 3), round(x1, 3), round(y1, 3)],
        "metros_mercator_por_px": round((x1 - x0) / im.size[0], 3),
        "projecao": "Web Mercator (EPSG:3857), pedida assim ao WMS, norte para cima",
        "licenca": licenca,
        "atribuicao": {"exigida": "reconhecimento pedido pela GIBS (não é condição de licença)", "tela": None, "descricao": reconhecimento},
        "procedencia": {"fonte": "WMS oficial da NASA GIBS, %s, camada %s" % (GIBS_WMS, camada), "url": url,
                        "resposta": {"status": r.status, "content_type": ct, "bytes": len(b)}, "user_agent": "o do canal (contato do canal.json)",
                        "baixado_em": quando, "tratamento": "nenhum: o PNG como veio do WMS",
                        "gerado_por": "roteiros/los-angeles/miniatura/reembalagem-2026-11-18/bases.py"},
    })
    time.sleep(3)
    return dest


def gibs_relevo(nome, lon0, lat0, lon1, lat1, largura):
    return _gibs(nome, "ASTER_GDEM_Greyscale_Shaded_Relief", lon0, lat0, lon1, lat1, largura,
                 "ASTER GDEM, relevo sombreado em cinza (GIBS, ASTER_GDEM_Greyscale_Shaded_Relief)",
                 GIBS_LICENCA + ". O ASTER GDEM é um produto da NASA e do METI do Japão; os metadados da camada não têm campo de licença "
                 "nem de atribuição (out/rio-columbia/_tmp/miniatura/gibs/metadata-aster-greyscale.xml)",
                 GIBS_RECONHECIMENTO + " Elevation: ASTER GDEM (NASA/METI).")


def gibs_bluemarble(nome, lon0, lat0, lon1, lat1, largura):
    return _gibs(nome, "BlueMarble_ShadedRelief_Bathymetry", lon0, lat0, lon1, lat1, largura,
                 "NASA Blue Marble com relevo sombreado e batimetria (GIBS, BlueMarble_ShadedRelief_Bathymetry)",
                 "domínio público (NASA); " + GIBS_LICENCA, GIBS_RECONHECIMENTO + " Blue Marble: NASA Earth Observatory.")


def baixar_arquivo(url, licenca, rotulo, nome=None):
    dest = os.path.join(BASES, nome or url.split("?")[0].rsplit("/", 1)[1])
    if os.path.exists(dest):
        print("já no disco:", os.path.relpath(dest, RAIZ))
        return dest
    p = urllib.parse.urlparse(url)
    robots(p.netloc, p.path)
    quando = agora()
    r, b = pedir(url)
    print("arquivo", r.status, r.headers.get("Content-Type"), len(b))
    open(dest, "wb").write(b)
    gravar_json(dest, {"nome": os.path.basename(dest), "rotulo": rotulo, "sha256": sha256_bytes(b), "bytes": len(b), "licenca": licenca,
                       "procedencia": {"url": url, "resposta": {"status": r.status, "content_type": r.headers.get("Content-Type")},
                                       "user_agent": "o do canal (contato do canal.json)", "baixado_em": quando,
                                       "gerado_por": "roteiros/los-angeles/miniatura/reembalagem-2026-11-18/bases.py"}})
    time.sleep(3)
    return dest


def copiar_do_disco(origem, rotulo, licenca, url_original):
    """um arquivo que o canal já baixou para outro vídeo: copia para _bases, sem pedido, e confere o sha256"""
    dest = os.path.join(BASES, os.path.basename(origem))
    if not os.path.exists(dest):
        b = open(origem, "rb").read()
        open(dest, "wb").write(b)
    b = open(dest, "rb").read()
    gravar_json(dest, {"nome": os.path.basename(dest), "rotulo": rotulo, "sha256": sha256_bytes(b), "bytes": len(b), "licenca": licenca,
                       "procedencia": {"url": url_original, "copiado_de": os.path.relpath(origem, RAIZ).replace("\\", "/"),
                                       "sha256_da_origem": sha256_bytes(open(origem, "rb").read()), "pedidos_de_rede": 0,
                                       "gerado_por": "roteiros/los-angeles/miniatura/reembalagem-2026-11-18/bases.py"}})
    return dest


def overpass(nome, consulta, rotulo):
    dest = os.path.join(BASES, nome + ".json")
    if os.path.exists(dest):
        print("já no disco:", os.path.relpath(dest, RAIZ))
        return dest
    quando = agora()
    r, b = pedir(OVERPASS, urllib.parse.urlencode({"data": consulta}).encode("utf-8"), timeout=400)
    ct = r.headers.get("Content-Type", "")
    print("Overpass", r.status, ct, len(b))
    if not ct.startswith("application/json"):
        open(dest + ".resposta-nao-json.bin", "wb").write(b)
        sys.exit("a Overpass não devolveu JSON: parei (use o Natural Earth)")
    d = json.loads(b)
    if d.get("remark"):
        print("observação da Overpass:", d["remark"])
    open(dest, "wb").write(b)
    gravar_json(dest, {"nome": nome + ".json", "rotulo": rotulo, "sha256": sha256_bytes(b), "bytes": len(b),
                       "elementos": len(d.get("elements", [])), "remark": d.get("remark"),
                       "osm_base": d.get("osm3s", {}).get("timestamp_osm_base"),
                       "licenca": "ODbL 1.0 (OpenStreetMap). Crédito: '© OpenStreetMap contributors', com openstreetmap.org/copyright na "
                                  "descrição do vídeo (CLAUDE.md do canal, 'Peças da pré-v1 em uso', item 6)",
                       "procedencia": {"url": OVERPASS, "metodo": "POST", "consulta": consulta, "user_agent": "o do canal (contato do canal.json)",
                                       "baixado_em": quando, "gerado_por": "roteiros/los-angeles/miniatura/reembalagem-2026-11-18/bases.py"}})
    time.sleep(10)
    return dest


def gibs_colormap(camada):
    """o mapa de cores de uma camada da GIBS (XML, v1.3), gravado como veio"""
    dest = os.path.join(BASES, "gibs-colormap-%s.xml" % camada)
    if os.path.exists(dest):
        print("já no disco:", os.path.relpath(dest, RAIZ))
        return dest
    url = "https://gibs.earthdata.nasa.gov/colormaps/v1.3/%s.xml" % camada
    quando = agora()
    r, b = pedir(url)
    print("colormap", r.status, r.headers.get("Content-Type"), len(b))
    open(dest, "wb").write(b)
    gravar_json(dest, {"nome": os.path.basename(dest), "sha256": sha256_bytes(b), "bytes": len(b), "licenca": GIBS_LICENCA,
                       "procedencia": {"url": url, "user_agent": "o do canal (contato do canal.json)", "baixado_em": quando,
                                       "gerado_por": "roteiros/los-angeles/miniatura/reembalagem-2026-11-18/bases.py"}})
    time.sleep(3)
    return dest


def gibs_elevacao(nome, lon0, lat0, lon1, lat1, largura):
    """o ASTER GDEM como índice de cor (ASTER_GDEM_Color_Index): com o colormap, vira altitude (a profundidade de um cânion)"""
    return _gibs(nome, "ASTER_GDEM_Color_Index", lon0, lat0, lon1, lat1, largura,
                 "ASTER GDEM, índice de cor da altitude (GIBS, ASTER_GDEM_Color_Index); a altitude se lê pelo colormap da GIBS",
                 GIBS_LICENCA + ". O ASTER GDEM é um produto da NASA e do METI do Japão",
                 GIBS_RECONHECIMENTO + " Elevation: ASTER GDEM (NASA/METI).")
