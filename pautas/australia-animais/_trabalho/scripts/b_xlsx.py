"""b_xlsx.py: leitor minimo de .xlsx (so a biblioteca padrao: zipfile + xml).
uso: python -X utf8 -B b_xlsx.py <arquivo.xlsx> --folhas            lista as folhas
     python -X utf8 -B b_xlsx.py <arquivo.xlsx> <folha> [termo ...]  imprime as linhas da folha (todas, ou so as com algum termo)
Importavel: from b_xlsx import ler_folha"""
import zipfile, re, sys, xml.etree.ElementTree as ET

NS = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
      'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}

def col_idx(ref):
    letras = re.match(r'[A-Z]+', ref).group(0)
    n = 0
    for c in letras:
        n = n * 26 + ord(c) - 64
    return n - 1

def folhas(z):
    wb = ET.fromstring(z.read('xl/workbook.xml'))
    rels = ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
    alvo = {r.get('Id'): r.get('Target') for r in rels}
    out = []
    for s in wb.find('m:sheets', NS):
        rid = s.get('{%s}id' % NS['r'])
        t = alvo[rid]
        t = t if t.startswith('xl/') else 'xl/' + t.lstrip('/')
        out.append((s.get('name'), t))
    return out

def strings(z):
    if 'xl/sharedStrings.xml' not in z.namelist():
        return []
    root = ET.fromstring(z.read('xl/sharedStrings.xml'))
    return [''.join(t.text or '' for t in si.iter('{%s}t' % NS['m'])) for si in root.findall('m:si', NS)]

def ler_folha(caminho, nome):
    z = zipfile.ZipFile(caminho)
    ss = strings(z)
    alvo = dict(folhas(z))[nome]
    root = ET.fromstring(z.read(alvo))
    linhas = []
    for row in root.iter('{%s}row' % NS['m']):
        cels = {}
        for c in row.findall('m:c', NS):
            v = c.find('m:v', NS)
            if c.get('t') == 's' and v is not None:
                val = ss[int(v.text)]
            elif c.get('t') == 'inlineStr':
                val = ''.join(t.text or '' for t in c.iter('{%s}t' % NS['m']))
            else:
                val = v.text if v is not None else None
            cels[col_idx(c.get('r'))] = val
        if cels:
            n = max(cels) + 1
            linhas.append([cels.get(i) for i in range(n)])
    return linhas

def main():
    a = sys.argv[1:]
    z = zipfile.ZipFile(a[0])
    if a[1] == '--folhas':
        for n, t in folhas(z):
            print(n, t)
        return
    linhas = ler_folha(a[0], a[1])
    termos = [t.lower() for t in a[2:]]
    for i, l in enumerate(linhas):
        s = ' | '.join('' if x is None else str(x) for x in l)
        if not termos or any(t in s.lower() for t in termos):
            print(i, s[:400])

if __name__ == '__main__':
    main()
