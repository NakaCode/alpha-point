# mesa-satelite.py — o still da mesa do vídeo 2 em diante: uma imagem de satélite PÚBLICA, escurecida e desfocada.
# A regra é a de marca/identidade.md §5, "A mesa do vídeo 2 em diante: satélite sob a luz" (Lucas, 07/10/2026), e a
# cadeia do ffmpeg é a do token --mesa-satelite-tratamento, lida de marca/tokens.css: o tratamento é um só no canal.
#
# Uso (cwd na raiz do canal):
#   python ferramentas/mesa-satelite.py <imagem> <saida.png> --fonte="<quem>" --licenca="<licença>" --url=<origem>
#        [--seco]      mede e diz se passa, sem gravar nada
# Entrada: só imagem de domínio público (Landsat/USGS, NASA). Copernicus Sentinel, MapTiler, OpenStreetMap e quadro de
# render de mapa pedem crédito na tela e NÃO servem à mesa: a ferramenta não tem como saber de onde veio a imagem, e
# quem a chama responde por --fonte e --licenca, que vão para a procedência.
# Saída: <saida.png> (3840×2160) e <saida.png>.json (a procedência: a entrada e o sha256, a cadeia, as medidas, a fonte).
# A conta do crédito: o crédito (--sec, a --tinta a 80 %) fica sobre a faixa x 200–1720, y 1880–2160. A ferramenta
# mede o pixel MAIS CLARO dessa faixa no still e calcula o contraste do --sec sobre ele (WCAG). Recusa abaixo de 6:1:
# o véu da luz e o feltro ainda clareiam um pouco a mesa na cena, e o piso de texto é 4,5:1 (identidade §2). A medida
# final do crédito é a do portão (portao-mapa rodape), na cena; esta é a guarda de antes.
# Saída: 0 = gravado (ou, com --seco, passaria) · 1 = recusado pela medida · 2 = não rodou (uso, ffmpeg, arquivo).
import hashlib, json, re, subprocess, sys, tempfile, os
from datetime import datetime
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
FAIXA = (200, 1880, 1720, 2160)       # x0, y0, x1, y1 da faixa do crédito no palco 4K (--credito-x, --faixa-credito-y)
PISO = 6.0

def sair(cod, msg):
    print(msg, file=sys.stderr if cod else sys.stdout)
    sys.exit(cod)

def sha256(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()

def cadeia():
    css = (RAIZ / "marca" / "tokens.css").read_text(encoding="utf-8")
    m = re.search(r'--mesa-satelite-tratamento:\s*"([^"]+)"', css)
    if not m:
        sair(2, "não achei --mesa-satelite-tratamento em marca/tokens.css")
    return m.group(1)

def hex_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))

def lin(c):
    c = c / 255.0
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4

def lum(rgb):
    return 0.2126 * lin(rgb[0]) + 0.7152 * lin(rgb[1]) + 0.0722 * lin(rgb[2])

def contraste(a, b):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)

def medir(png):
    import numpy as np
    from PIL import Image
    im = Image.open(png).convert("RGB")
    if im.size != (3840, 2160):
        sair(2, f"o still saiu {im.size[0]}×{im.size[1]}, não 3840×2160")
    a = np.asarray(im).astype(float)
    y = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
    x0, y0, x1, y1 = FAIXA
    fa, fy = a[y0:y1, x0:x1], y[y0:y1, x0:x1]
    lin_ = np.where(fa / 255 <= 0.04045, fa / 255 / 12.92, ((fa / 255 + 0.055) / 1.055) ** 2.4)
    rl = 0.2126 * lin_[..., 0] + 0.7152 * lin_[..., 1] + 0.0722 * lin_[..., 2]
    i, j = np.unravel_index(np.argmax(rl), rl.shape)
    pior = tuple(float(v) for v in fa[i, j])
    css = (RAIZ / "marca" / "tokens.css").read_text(encoding="utf-8")
    tinta = hex_rgb(re.search(r"--tinta:\s*(#[0-9A-Fa-f]{6})", css).group(1))
    sec = tuple(0.8 * t + 0.2 * f for t, f in zip(tinta, pior))     # --sec = --tinta a 80 % sobre o pixel de trás
    return {
        "luma_media": round(float(y.mean()), 1),
        "luma_max": round(float(y.max())),
        "luma_p95": round(float(np.percentile(y, 95))),
        "faixa_credito_luma_max": round(float(fy.max())),
        "contraste_credito_pior": round(float(contraste(sec, pior)), 2),
        "piso": PISO,
    }

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    opts = dict((a[2:].split("=", 1) + [True])[:2] for a in sys.argv[1:] if a.startswith("--"))
    if len(args) != 2:
        sair(2, "uso: python ferramentas/mesa-satelite.py <imagem> <saida.png> --fonte=… --licenca=… --url=… [--seco]")
    entrada, saida = Path(args[0]), Path(args[1])
    if not entrada.is_file():
        sair(2, f"não encontrado: {entrada}")
    if not opts.get("seco") and not all(isinstance(opts.get(k), str) and opts.get(k) for k in ("fonte", "licenca", "url")):
        sair(2, "faltam --fonte, --licenca e --url: a procedência do still é obrigatória")
    vf = cadeia()
    with tempfile.TemporaryDirectory() as tmp:
        alvo = Path(tmp) / "still.png"
        r = subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(entrada), "-vf", vf, "-frames:v", "1", str(alvo)],
                           capture_output=True, text=True)
        if r.returncode or not alvo.is_file():
            sair(2, "o ffmpeg falhou: " + (r.stderr or "").strip()[-400:])
        m = medir(alvo)
        passa = bool(m["contraste_credito_pior"] >= PISO)
        print(json.dumps({"medidas": m, "passa": passa}, ensure_ascii=False))
        if opts.get("seco"):
            sys.exit(0 if passa else 1)
        if not passa:
            sair(1, f"recusado: o crédito daria {m['contraste_credito_pior']}:1 no pixel mais claro da faixa (piso {PISO}:1). "
                    "Escolha outra cena (menos neve ou areia clara na faixa de baixo) ou outro recorte.")
        saida.parent.mkdir(parents=True, exist_ok=True)
        saida.write_bytes(alvo.read_bytes())
    proc = {
        "ferramenta": "ferramentas/mesa-satelite.py",
        "regra": "marca/identidade.md §5, 'A mesa do vídeo 2 em diante: satélite sob a luz' (Lucas, 07/10/2026)",
        "feito_em": datetime.now().astimezone().isoformat(timespec="seconds"),
        "entrada": {"arquivo": entrada.as_posix(), "sha256": sha256(entrada)},
        "saida": {"arquivo": saida.as_posix(), "sha256": sha256(saida)},
        "cadeia_ffmpeg": vf,
        "fonte": opts["fonte"], "licenca": opts["licenca"], "url": opts["url"],
        "credito_na_tela": None,
        "medidas": m,
    }
    Path(str(saida) + ".json").write_text(json.dumps(proc, ensure_ascii=False, indent=1) + "\n", encoding="utf-8", newline="\n")
    print(f"gravado: {saida.as_posix()} (+ .json)")

if __name__ == "__main__":
    main()
