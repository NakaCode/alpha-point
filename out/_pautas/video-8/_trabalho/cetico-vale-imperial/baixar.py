# Baixa arquivos abertos (Reclamation e outros orgaos), um pedido por vez, com o User-Agent do canal.
# Uso: python -X utf8 -B baixar.py <pasta-destino> <url> [<url> ...]
# O nome do arquivo e o caminho da URL com "/" trocado por "_". Nao contorna recusa: 403 ou captcha ficam registrados e o script segue.
import sys, os, time, urllib.request, urllib.error

UA = "regie/0.1 (canal alpha-point; pesquisa geografica para video; contato.naka@hotmail.com)"
dest = sys.argv[1]
os.makedirs(dest, exist_ok=True)
for url in sys.argv[2:]:
    nome = url.split("://", 1)[1].split("/", 1)[1].replace("/", "_")
    for c in '?&=:*"<>|':
        nome = nome.replace(c, "_")
    alvo = os.path.join(dest, nome)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=120) as r:
            dados = r.read()
            tipo = r.headers.get("Content-Type")
        with open(alvo, "wb") as f:
            f.write(dados)
        print("ok", len(dados), tipo, url, "->", alvo)
    except urllib.error.HTTPError as e:
        print("HTTP", e.code, url)
    except Exception as e:
        print("erro", type(e).__name__, e, url)
    time.sleep(1.5)
