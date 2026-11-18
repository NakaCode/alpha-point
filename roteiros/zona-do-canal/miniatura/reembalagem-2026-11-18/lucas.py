"""As prévias da miniatura do Lucas que está no ar, a B3 ("IN PERPETUITY", com a bandeira; out/_reembalagem/2026-11-18/zona-do-canal/cetico.md
§1: só a B3 entra como "do Lucas"), para os leitores e para a folha. Nada muda no desenho: o JPG de 1280 que já existe é copiado byte a byte, e
a 320 e a 168 são reduções dele (LANCZOS), como mapa.salvar() faz com as novas.

    python -X utf8 -B -P roteiros/zona-do-canal/miniatura/reembalagem-2026-11-18/lucas.py       (da raiz; sem rede)

Grava l-B3-1280.jpg (cópia de roteiros/zona-do-canal/miniatura/miniatura-1280.jpg, que não foi editado), l-B3-320.png, l-B3-168.png e
l-B3-origem.json (o sha256 da origem e da cópia).
As outras que o Lucas viu (A, B, B2, B3-sem, C) não têm JPG no disco (o cético, §1) e ficam fora.
"""
import hashlib, json, os, shutil
from PIL import Image

RAIZ = os.getcwd()
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"
PASTA = os.path.join(RAIZ, "roteiros", "zona-do-canal", "miniatura", "reembalagem-2026-11-18")
ORIGEM = os.path.join(RAIZ, "roteiros", "zona-do-canal", "miniatura", "miniatura-1280.jpg")


def sha(p):
    return hashlib.sha256(open(p, "rb").read()).hexdigest()


dest = os.path.join(PASTA, "l-B3-1280.jpg")
shutil.copyfile(ORIGEM, dest)
assert sha(dest) == sha(ORIGEM)
im = Image.open(dest).convert("RGB")
assert im.size == (1280, 720), im.size
im.resize((320, 180), Image.LANCZOS).save(os.path.join(PASTA, "l-B3-320.png"))
im.resize((168, 94), Image.LANCZOS).save(os.path.join(PASTA, "l-B3-168.png"))
reg = {"id": "B3", "o_que_e": "a miniatura no ar desde 16/10/2026 ('B3 com bandeira'; roteiros/zona-do-canal/decisoes-lucas.md l. 89–98)",
       "origem": os.path.relpath(ORIGEM, RAIZ).replace("\\", "/"), "sha256_origem": sha(ORIGEM), "sha256_copia": sha(dest),
       "tamanho": list(im.size), "previas": "l-B3-320.png e l-B3-168.png, reduzidas da cópia por LANCZOS (como mapa.salvar)", "pedidos_de_rede": 0}
json.dump(reg, open(os.path.join(PASTA, "l-B3-origem.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(reg, ensure_ascii=False))
