# Leitor minimo de .xlsx (sem openpyxl): devolve as linhas de uma planilha como listas de strings.
import zipfile, re
import xml.etree.ElementTree as ET

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}


def _col(ref):
    letras = re.match(r"[A-Z]+", ref).group(0)
    n = 0
    for ch in letras:
        n = n * 26 + (ord(ch) - 64)
    return n - 1


def linhas(caminho, folha=1):
    z = zipfile.ZipFile(caminho)
    ss = []
    if "xl/sharedStrings.xml" in z.namelist():
        root = ET.fromstring(z.read("xl/sharedStrings.xml"))
        for si in root.findall("m:si", NS):
            ss.append("".join(t.text or "" for t in si.iter("{%s}t" % NS["m"])))
    root = ET.fromstring(z.read(f"xl/worksheets/sheet{folha}.xml"))
    out = []
    for row in root.iter("{%s}row" % NS["m"]):
        vals = {}
        for c in row.findall("m:c", NS):
            t = c.get("t")
            v = c.find("m:v", NS)
            if v is None:
                isel = c.find("m:is", NS)
                txt = "".join(x.text or "" for x in isel.iter("{%s}t" % NS["m"])) if isel is not None else ""
            else:
                txt = ss[int(v.text)] if t == "s" else v.text
            vals[_col(c.get("r"))] = txt
        if vals:
            n = max(vals) + 1
            out.append([vals.get(i, "") for i in range(n)])
    return out


if __name__ == "__main__":
    import sys
    for f in (1, 2):
        try:
            ls = linhas(sys.argv[1], f)
        except KeyError:
            continue
        print("folha", f, len(ls))
        for l in ls[:8]:
            print(l)
