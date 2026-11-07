"""Lê o .dbf de um shapefile dentro de um .zip (só a biblioteca padrão): os campos e as linhas que casam com um padrão.

Uso: python -I -X utf8 -B dbf_ler.py <arquivo.zip> <regex>
"""
import re
import struct
import sys
import zipfile


def main():
    if len(sys.argv) < 3:
        print("uso: dbf_ler.py <arquivo.zip> <regex>")
        sys.exit(2)
    arq, padrao = sys.argv[1], re.compile(sys.argv[2], re.I)
    with zipfile.ZipFile(arq) as z:
        nome = next(n for n in z.namelist() if n.lower().endswith(".dbf"))
        dados = z.read(nome)
        cpg = next((z.read(n).decode().strip() for n in z.namelist() if n.lower().endswith(".cpg")), "latin-1")
    n_reg, tam_cab, tam_reg = struct.unpack("<IHH", dados[4:12])
    campos = []
    pos = 32
    while dados[pos] != 0x0D:
        nome_c = dados[pos:pos + 11].split(b"\x00")[0].decode("ascii")
        tipo = chr(dados[pos + 11])
        tam = dados[pos + 16]
        campos.append((nome_c, tipo, tam))
        pos += 32
    print(f"{nome}: {n_reg} registros; campos: " + ", ".join(f"{c}({t}{n})" for c, t, n in campos))
    for i in range(n_reg):
        ini = tam_cab + i * tam_reg
        reg = dados[ini:ini + tam_reg]
        if reg[:1] == b"*":
            continue
        p = 1
        valores = []
        for c, t, n in campos:
            valores.append(reg[p:p + n].decode(cpg, errors="replace").strip())
            p += n
        linha = " | ".join(valores)
        if padrao.search(linha):
            print(linha)


if __name__ == "__main__":
    main()
