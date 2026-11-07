"""O cético (07/11/2026): baixa uma URL para a pasta do cético (fora do canal), com o User-Agent do canal, um pedido por vez.

Uso: python -I -X utf8 -B cetico_baixar.py <url> <nome-do-arquivo> [--max-mb=N]

- Grava em <BAIXADOS>/<nome-do-arquivo> e imprime o status, o Content-Type, o tamanho e o sha256.
- Se a resposta for 401/403/429 ou uma página de verificação, para e diz isso: não tenta de outro jeito.
"""
import hashlib
import os
import sys
import urllib.error
import urllib.request

BAIXADOS = r"C:\Users\zangp\AppData\Local\Temp\claude\6c506c6ee49e0179\027c3692-035f-4c98-b412-5015d73fe949\scratchpad\cassino-cetico\baixados"
UA = "AlphaPoint-pauta/1.0 (canal Alpha Point; contato.naka@hotmail.com)"


def main():
    if len(sys.argv) < 3:
        print("uso: cetico_baixar.py <url> <nome> [--max-mb=N]")
        sys.exit(2)
    url, nome = sys.argv[1], sys.argv[2]
    max_mb = 15.0
    for a in sys.argv[3:]:
        if a.startswith("--max-mb="):
            max_mb = float(a.split("=", 1)[1])
    os.makedirs(BAIXADOS, exist_ok=True)
    destino = os.path.join(BAIXADOS, nome)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            status = r.status
            ctype = r.headers.get("Content-Type")
            final = r.geturl()
            limite = int(max_mb * 1024 * 1024)
            corpo = r.read(limite + 1)
    except urllib.error.HTTPError as e:
        print(f"HTTP {e.code} em {url}: parei (não se contorna).")
        sys.exit(1)
    except Exception as e:  # noqa: BLE001
        print(f"falhou: {type(e).__name__}: {e}")
        sys.exit(1)
    if len(corpo) > limite:
        print(f"maior que {max_mb} MB: não gravei. status={status} tipo={ctype}")
        sys.exit(1)
    with open(destino, "wb") as f:
        f.write(corpo)
    sha = hashlib.sha256(corpo).hexdigest()
    print(f"status={status} tipo={ctype} bytes={len(corpo)} sha256={sha}")
    print(f"final={final}")
    print(f"gravado={destino}")
    baixo = corpo[:4000].lower()
    for marca in (b"captcha", b"verify you are human", b"cf-challenge", b"access denied"):
        if marca in baixo:
            print(f"AVISO: a resposta contém '{marca.decode()}': tratar como recusa e parar.")


if __name__ == "__main__":
    main()
