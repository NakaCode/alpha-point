"""Lista os arquivos de uma resposta da API do Commons (generator=search, prop=imageinfo com extmetadata).

Uso: python -I -X utf8 -B p_commons_lista.py <resposta.json> [--min-w=N]

Imprime, por arquivo: largura x altura, licença, autor (sem HTML), data e o começo da descrição.
Só lê o arquivo local. Da pauta v1 do vídeo 7 (lesoto), 09/11/2026.
"""
import json
import re
import sys


def limpo(s, n=90):
    s = re.sub(r"<[^>]+>", "", s or "")
    s = re.sub(r"\s+", " ", s).strip()
    return s[:n]


def main():
    if len(sys.argv) < 2:
        print("uso: p_commons_lista.py <resposta.json> [--min-w=N]")
        sys.exit(2)
    min_w = 0
    for a in sys.argv[2:]:
        if a.startswith("--min-w="):
            min_w = int(a.split("=", 1)[1])
    with open(sys.argv[1], encoding="utf-8") as f:
        dados = json.load(f)
    paginas = (dados.get("query") or {}).get("pages") or {}
    linhas = []
    for p in paginas.values():
        ii = (p.get("imageinfo") or [{}])[0]
        md = ii.get("extmetadata") or {}
        w, h = ii.get("width", 0), ii.get("height", 0)
        if w < min_w:
            continue
        linhas.append((
            p.get("title", "?"), w, h,
            limpo((md.get("LicenseShortName") or {}).get("value"), 30),
            limpo((md.get("Artist") or {}).get("value"), 40),
            limpo((md.get("DateTimeOriginal") or {}).get("value"), 20),
            limpo((md.get("ImageDescription") or {}).get("value"), 90),
        ))
    linhas.sort(key=lambda x: -x[1])
    for t, w, h, lic, art, data, desc in linhas:
        print(f"{w}x{h} | {lic} | {art} | {data} | {t} | {desc}")
    print(f"total: {len(linhas)}")


if __name__ == "__main__":
    main()
