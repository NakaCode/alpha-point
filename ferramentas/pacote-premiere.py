"""Pacote do Premiere: o XML de pós-produção e todos os arquivos que ele usa, numa pasta só, para abrir
o projeto em OUTRO computador.

    python ferramentas/pacote-premiere.py <proj> --destino C:/Juneau-Premiere [--nome Juneau]

Lê out/<proj>/<proj>-POS.xml (o XML aprovado pelo finalizar.mjs da pré-v1), copia cada arquivo citado
nas <pathurl> para <destino>/midia/, reescreve as <pathurl> para lá e grava <destino>/<nome>.xml, o
LEIA-ME.txt e o manifesto.json (tamanho e sha256 de cada arquivo). No outro computador, a pasta vai para
o MESMO caminho (no Windows, C:/Juneau-Premiere), e o Premiere abre sem mídia offline. Se o caminho mudar,
o Premiere pede o primeiro arquivo, e os outros ele acha sozinho, porque estão todos na mesma pasta.

Confere no fim, sem perdoar: o XML novo é bem-formado, tem o mesmo número de referências do original,
cada referência existe no destino com o mesmo tamanho e o mesmo sha256 do original, e nada mais mudou
no XML além das <pathurl>. Falha = exit 1. Uso errado = exit 2.

Não toca no out/<proj>/: só lê. Copia (não move nem cria link), para o pacote não mudar se um render
reescrever um clipe depois.
"""
import argparse
import hashlib
import json
import os
import re
import shutil
import sys
import urllib.parse
import xml.etree.ElementTree as ET
from datetime import datetime

RE_URL = re.compile(r"<pathurl>(.*?)</pathurl>")


def caminho_de(url):
    """file://localhost/C%3a/a/b.mp4 -> C:/a/b.mp4 (o formato do src/lib/pathurl.mjs da pré-v1)."""
    if not url.startswith("file://localhost/"):
        raise ValueError(f"pathurl fora do formato file://localhost/: {url}")
    return urllib.parse.unquote(url[len("file://localhost/"):])


def url_de(caminho):
    """C:/a/b.mp4 -> file://localhost/C%3a/a/b.mp4, no mesmo formato do gerador."""
    p = caminho.replace("\\", "/")
    drive, resto = p[:2], p[2:]
    partes = [urllib.parse.quote(x, safe="") for x in resto.split("/")]
    return "file://localhost/" + drive[0] + "%3a" + "/".join(partes)


def sha256(caminho):
    h = hashlib.sha256()
    with open(caminho, "rb") as f:
        for bloco in iter(lambda: f.read(8 << 20), b""):
            h.update(bloco)
    return h.hexdigest()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("proj")
    ap.add_argument("--destino", required=True)
    ap.add_argument("--nome", default=None)
    a = ap.parse_args()

    raiz = os.getcwd()
    origem_xml = os.path.join(raiz, "out", a.proj, f"{a.proj}-POS.xml")
    if not os.path.isfile(origem_xml):
        print(f"uso: rode da raiz do canal; nao achei {origem_xml} (finalize antes)", file=sys.stderr)
        sys.exit(2)
    destino = os.path.abspath(a.destino).replace("\\", "/")
    if "onedrive" in destino.lower() or "/desktop" in destino.lower() or "area de trabalho" in destino.lower():
        print("o destino nao pode ficar em pasta sincronizada (OneDrive, Area de Trabalho)", file=sys.stderr)
        sys.exit(2)
    nome = a.nome or a.proj.capitalize()
    midia = os.path.join(destino, "midia")
    os.makedirs(midia, exist_ok=True)

    xml = open(origem_xml, encoding="utf-8").read()
    urls = sorted(set(RE_URL.findall(xml)))
    nomes = {}
    for u in urls:
        p = caminho_de(u)
        b = os.path.basename(p)
        if b in nomes and nomes[b] != p:
            print(f"dois arquivos com o mesmo nome ({b}): {nomes[b]} e {p}", file=sys.stderr)
            sys.exit(1)
        nomes[b] = p

    manifesto = {"proj": a.proj, "xml_de_origem": origem_xml.replace("\\", "/"), "destino": destino,
                 "feito_em": datetime.now().isoformat(timespec="seconds"), "arquivos": []}
    troca = {}
    total = 0
    for i, (b, p) in enumerate(sorted(nomes.items()), 1):
        alvo = os.path.join(midia, b)
        tam = os.path.getsize(p)
        if not (os.path.isfile(alvo) and os.path.getsize(alvo) == tam):
            shutil.copy2(p, alvo)
        h_or, h_al = sha256(p), sha256(alvo)
        if h_or != h_al:
            print(f"a copia de {b} nao confere com o original (sha256)", file=sys.stderr)
            sys.exit(1)
        total += tam
        manifesto["arquivos"].append({"nome": b, "origem": p, "bytes": tam, "sha256": h_or})
        troca[url_de(p)] = url_de(alvo)
        print(f"  [{i:2d}/{len(nomes)}] {b} ({tam / 1e6:.1f} MB) ok")

    novo = RE_URL.sub(lambda m: "<pathurl>" + troca.get(m.group(1), m.group(1)) + "</pathurl>", xml)
    faltou = [u for u in urls if u not in troca]
    if faltou:
        print(f"{len(faltou)} pathurl(s) sem troca (formato inesperado): {faltou[:3]}", file=sys.stderr)
        sys.exit(1)

    # a conferência: bem-formado, mesmas referências, todas no destino, nada mais mudou
    ET.fromstring(novo.encode("utf-8"))
    urls_novas = RE_URL.findall(novo)
    if len(urls_novas) != len(RE_URL.findall(xml)):
        print("o numero de referencias mudou", file=sys.stderr)
        sys.exit(1)
    for u in set(urls_novas):
        p = caminho_de(u)
        if not os.path.isfile(p) or not os.path.normpath(p).lower().startswith(os.path.normpath(midia).lower()):
            print(f"referencia fora do pacote ou ausente: {p}", file=sys.stderr)
            sys.exit(1)
    if RE_URL.sub("<pathurl/>", novo) != RE_URL.sub("<pathurl/>", xml):
        print("o XML mudou alem das pathurl", file=sys.stderr)
        sys.exit(1)

    saida_xml = os.path.join(destino, f"{nome}.xml")
    with open(saida_xml, "w", encoding="utf-8", newline="\n") as f:
        f.write(novo)
    manifesto["xml"] = saida_xml.replace("\\", "/")
    manifesto["total_bytes"] = total
    with open(os.path.join(destino, "manifesto.json"), "w", encoding="utf-8") as f:
        json.dump(manifesto, f, ensure_ascii=False, indent=1)
    destino_win = destino.replace("/", "\\")
    leia = f"""{nome}: o projeto do Premiere
{"=" * (len(nome) + 23)}

O que tem aqui
- {nome}.xml: a montagem (o XML do Premiere).
- midia\\: os {len(nomes)} arquivos que a montagem usa ({total / 1e9:.2f} GB).
- manifesto.json: o tamanho e a impressao digital (sha256) de cada arquivo, para conferir a copia.

Como abrir no outro computador (Windows)
1. Copie esta pasta inteira para {destino_win}, com esse nome e nesse lugar.
2. No Premiere: Arquivo > Importar > {nome}.xml.
3. Se o Premiere disser que a midia esta offline (a pasta foi para outro lugar), clique em
   "Localizar", aponte o primeiro arquivo que ele pedir dentro de midia\\, e deixe marcado
   "Reconectar os outros automaticamente": ele acha o resto sozinho.

O que esperar
- Uma sequencia 3840x2160 a 30 fps.
- V1: o master (tela preta com a narracao).
- V2: as cenas, uma depois da outra, sem vao.
- V3, V4 e V5: vazias.
- A1: a narracao.
- A2 e A3: vazias. A musica ainda nao entrou.
- A narracao entra como faixa mono: confira se ela toca nos dois lados do fone.
"""
    with open(os.path.join(destino, "LEIA-ME.txt"), "w", encoding="utf-8", newline="\r\n") as f:
        f.write(leia)
    print(f"\nok {saida_xml} | {len(nomes)} arquivos, {total / 1e9:.2f} GB, todos com o mesmo sha256 do original")


if __name__ == "__main__":
    main()
