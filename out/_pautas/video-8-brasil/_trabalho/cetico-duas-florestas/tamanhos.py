# Le o indice HTML dos diretorios de biomas do geoftp do IBGE (sem robots.txt: 404) e mostra nome, data e tamanho. Um pedido por vez.
# Uso: python -X utf8 -B tamanhos.py
import urllib.request, re, time

UA = "AlphaPointResearch/1.0 (contato.naka@hotmail.com)"
for d in ["vetores", "documentos", "mapas"]:
    u = "https://geoftp.ibge.gov.br/informacoes_ambientais/estudos_ambientais/biomas/" + d + "/"
    t = urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": UA}), timeout=60).read().decode("latin-1")
    for linha in t.splitlines():
        m = re.search(r'href="([^"?/][^"]*)"', linha)
        if m:
            resto = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", linha)).strip()
            print(d, "|", resto)
    time.sleep(2)
