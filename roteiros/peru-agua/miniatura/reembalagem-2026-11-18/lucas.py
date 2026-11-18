"""As prévias pequenas das miniaturas do Lucas que o cético da reembalagem listou (out/_reembalagem/2026-11-18/peru-agua/cetico.md, §1 e §4), para
os leitores: de cada uma, a cópia do JPG de 1280 que já existe (l-<id>-1280.jpg, byte a byte, com o sha256 conferido) e as prévias de 320 e de
168 feitas dele (l-<id>-320.png e l-<id>-168.png), sem mudar nada no desenho (só a redução, LANCZOS, como o salvar() do mapa.py). Sem rede.

    python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/lucas.py       (da raiz do canal)

As três (o id é o do arquivo de origem e do cético):
- A3, "NO WATER / HERE?": a que está no ar desde 30/10 e a do teste de títulos (roteiros/peru-agua/miniatura/miniatura-A3-1280.jpg);
- A2, "AND THE / WATER?": a publicada em 24/10 (roteiros/peru-agua/miniatura/miniatura-1280.jpg; o arquivo não tem o id no nome, e o
  A2-pontos.json ao lado é o dela);
- A, "AND THE WATER?": a escolhida em 24/10, 15:0x, e trocada pela A2 antes de publicar (out/peru-agua/_tmp/miniatura/A/miniatura-A-1280.jpg,
  fora do git).
A B ("ONE TUNNEL") não é do Lucas (oferecida e não escolhida): fica fora, como no cético.
"""
import hashlib, json, os, shutil
from PIL import Image

RAIZ = os.getcwd()
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"
PASTA = os.path.join(RAIZ, "roteiros", "peru-agua", "miniatura", "reembalagem-2026-11-18")
ORIGENS = [("A3", "roteiros/peru-agua/miniatura/miniatura-A3-1280.jpg", "NO WATER / HERE?", "no ar desde 30/10/2026; a do teste de títulos de 24/10–07/11"),
           ("A2", "roteiros/peru-agua/miniatura/miniatura-1280.jpg", "AND THE / WATER?", "a publicada em 24/10/2026"),
           ("A", "out/peru-agua/_tmp/miniatura/A/miniatura-A-1280.jpg", "AND THE WATER?", "escolhida em 24/10/2026, 15:0x, e trocada pela A2 antes de publicar")]


def sha(p):
    return hashlib.sha256(open(p, "rb").read()).hexdigest()


reg = []
for id_, origem, texto, papel in ORIGENS:
    src = os.path.join(RAIZ, origem)
    dst = os.path.join(PASTA, "l-%s-1280.jpg" % id_)
    shutil.copyfile(src, dst)
    assert sha(src) == sha(dst), id_
    im = Image.open(dst).convert("RGB")
    assert im.size == (1280, 720), (id_, im.size)
    im.resize((320, 180), Image.LANCZOS).save(os.path.join(PASTA, "l-%s-320.png" % id_))
    im.resize((168, 94), Image.LANCZOS).save(os.path.join(PASTA, "l-%s-168.png" % id_))
    reg.append({"id": id_, "texto": texto, "papel": papel, "origem": origem, "sha256": sha(src), "tamanho": list(im.size),
                "saidas": ["l-%s-1280.jpg" % id_, "l-%s-320.png" % id_, "l-%s-168.png" % id_],
                "tratamento": "a cópia byte a byte do JPG de 1280; as de 320 e 168 reduzidas dela (LANCZOS), sem nenhuma outra mudança"})
json.dump({"gerado_em": "18/11/2026", "pedidos_de_rede": 0, "miniaturas_do_lucas": reg},
          open(os.path.join(PASTA, "lucas.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
print(json.dumps(reg, ensure_ascii=False, indent=1))
