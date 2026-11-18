# cetico_texto.py (cético da pauta v1, 18/11/2026): tira o texto visível de um HTML baixado e, se pedido, mostra só as linhas com um termo.
# Uso: python -I -X utf8 -B cetico_texto.py <arquivo.html> [termo1,termo2,...] [--ctx=N]
# Sem rede. Lê o arquivo como dado (baixados ficam em midia/arizona-strip/fontes/c/, fora do git).
import html
import re
import sys


def texto(caminho):
    bruto = open(caminho, encoding="utf-8", errors="replace").read()
    bruto = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", bruto)
    bruto = re.sub(r"(?i)<br\s*/?>|</p>|</h\d>|</li>|</div>|</tr>", "\n", bruto)
    bruto = re.sub(r"<[^>]+>", " ", bruto)
    bruto = html.unescape(bruto)
    linhas = [re.sub(r"[ \t ]+", " ", l).strip() for l in bruto.splitlines()]
    return [l for l in linhas if l]


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    ctx = 0
    for a in sys.argv[1:]:
        if a.startswith("--ctx="):
            ctx = int(a.split("=", 1)[1])
    linhas = texto(args[0])
    if len(args) < 2:
        print("\n".join(linhas))
        return
    termos = [t.lower() for t in args[1].split(",") if t]
    for i, l in enumerate(linhas):
        if any(t in l.lower() for t in termos):
            ini, fim = max(0, i - ctx), min(len(linhas), i + ctx + 1)
            print(f"--- linha {i}")
            print("\n".join(linhas[ini:fim]))


if __name__ == "__main__":
    main()
