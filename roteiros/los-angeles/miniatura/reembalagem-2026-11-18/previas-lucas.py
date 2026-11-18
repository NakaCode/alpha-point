"""As prévias das miniaturas do Lucas que o cético listou (out/_reembalagem/2026-11-18/los-angeles/cetico.md, §1.2), para os leitores a frio:
de cada uma, a partir do JPG de 1280 que já existe em roteiros/los-angeles/miniatura/, sem mudar nada no desenho:
- l-<id>-1280.jpg: a cópia, byte a byte (o sha256 se confere);
- l-<id>-320.png e l-<id>-168.png: a redução (Lanczos), como o feed mostra.

    python -X utf8 -B -P roteiros/los-angeles/miniatura/reembalagem-2026-11-18/previas-lucas.py        (da raiz do canal; sem rede)

Os <id> são os do laudo: E (a que está no ar), D, B e original (o arquivo de origem desta não tem letra: miniatura-1280.jpg).
"""
import hashlib, json, os, shutil
from PIL import Image

RAIZ = os.getcwd()
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"
ORIGEM = os.path.join(RAIZ, "roteiros", "los-angeles", "miniatura")
PASTA = os.path.join(ORIGEM, "reembalagem-2026-11-18")
LUCAS = [("E", "miniatura-E-1280.jpg", "no ar: o contorno de 1906 sobre o Landsat, 'SO CLOSE'"),
         ("D", "miniatura-D-1280.jpg", "a do Test & Compare de outubro: o contorno de hoje sobre o relevo verde, 'HALF A MILE WIDE'"),
         ("B", "miniatura-B-1280.jpg", "a D sobre terra lisa cinza"),
         ("original", "miniatura-1280.jpg", "a da estreia (09/10): Los Angeles inteira sobre o relevo, 'FOR A PORT'")]


def sha(p):
    return hashlib.sha256(open(p, "rb").read()).hexdigest()


registro = []
for ident, arq, nota in LUCAS:
    src = os.path.join(ORIGEM, arq)
    dst = os.path.join(PASTA, "l-%s-1280.jpg" % ident)
    shutil.copyfile(src, dst)
    assert sha(src) == sha(dst)
    im = Image.open(src).convert("RGB")
    assert im.size == (1280, 720), (arq, im.size)
    im.resize((320, 180), Image.LANCZOS).save(os.path.join(PASTA, "l-%s-320.png" % ident))
    im.resize((168, 94), Image.LANCZOS).save(os.path.join(PASTA, "l-%s-168.png" % ident))
    registro.append({"id": ident, "origem": os.path.relpath(src, RAIZ).replace("\\", "/"), "sha256": sha(src), "tamanho": list(im.size),
                     "nota": nota, "saidas": ["l-%s-1280.jpg" % ident, "l-%s-320.png" % ident, "l-%s-168.png" % ident]})
json.dump(registro, open(os.path.join(PASTA, "previas-lucas.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(registro, ensure_ascii=False, indent=1))
