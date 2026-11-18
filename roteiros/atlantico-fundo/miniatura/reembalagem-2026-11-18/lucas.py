"""As prévias das miniaturas do Lucas que o cético listou (out/_reembalagem/2026-11-18/atlantico-fundo/cetico.md, §4.1), para os leitores: a C
("NOT THE MARIANA TRENCH", a que está no ar) e a A2 ("RIGHT HERE?", a que foi ao teste). Nada muda no desenho: o JPG de 1280 que já existe em
roteiros/atlantico-fundo/miniatura/ (o tamanho que vai ao YouTube) é copiado byte a byte, e a 320 e a 168 saem dele por LANCZOS, como o salvar() do
mapa.py faz com as novas.

    python -X utf8 -B -P roteiros/atlantico-fundo/miniatura/reembalagem-2026-11-18/lucas.py          (da raiz do canal; sem rede)

Grava l-<id>-1280.jpg (a cópia, com o sha256 conferido), l-<id>-320.png, l-<id>-168.png e l-pontos.json.
"""
import json, os, shutil, sys
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

ORIGEM = os.path.join(M.RAIZ, "roteiros", "atlantico-fundo", "miniatura")
LUCAS = [("C", "miniatura-C-1280.jpg", "NOT THE MARIANA TRENCH", "no ar (o print do Studio de 18/11)"),
         ("A2", "miniatura-A2-1280.jpg", "RIGHT HERE?", "foi ao teste com a C (decisoes-lucas.md, l. 284–286)")]
reg = {}
for id_, arq, caixa, papel in LUCAS:
    src = os.path.join(ORIGEM, arq)
    dst = os.path.join(M.PASTA, "l-%s-1280.jpg" % id_)
    shutil.copyfile(src, dst)
    s_src, s_dst = M.sha256(src), M.sha256(dst)
    assert s_src == s_dst, "a cópia não confere"
    im = Image.open(dst).convert("RGB")
    assert im.size == (1280, 720), im.size
    im.resize((320, 180), Image.LANCZOS).save(os.path.join(M.PASTA, "l-%s-320.png" % id_))
    im.resize((168, 94), Image.LANCZOS).save(os.path.join(M.PASTA, "l-%s-168.png" % id_))
    reg[id_] = {"caixa": caixa, "papel": papel, "origem": os.path.relpath(src, M.RAIZ).replace("\\", "/"), "sha256": s_src,
                "copia_confere": s_src == s_dst, "tamanho": list(im.size), "previas": ["l-%s-320.png" % id_, "l-%s-168.png" % id_]}
json.dump(reg, open(os.path.join(M.PASTA, "l-pontos.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(reg, ensure_ascii=False))
