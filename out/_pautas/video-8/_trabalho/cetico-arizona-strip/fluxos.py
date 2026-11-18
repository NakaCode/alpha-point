# Cético arizona-strip (17/11/2026): os fluxos de trabalho (ACS 2016-2020, Census, "commuting flows", table1.xlsx)
# que saem dos condados de Mohave (04 015) e Coconino (04 005) para fora do Arizona.
# O xlsx é lido como zip + XML (sem openpyxl). Uso: python -I -X utf8 -B fluxos.py <caminho do table1.xlsx>
import sys, zipfile, re
import xml.etree.ElementTree as ET

arq = sys.argv[1]
ns = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
z = zipfile.ZipFile(arq)
ss = []
with z.open('xl/sharedStrings.xml') as f:
    for ev, el in ET.iterparse(f):
        if el.tag.endswith('}si'):
            ss.append(''.join(t.text or '' for t in el.iter() if t.tag.endswith('}t')))
            el.clear()
nomes = [n for n in z.namelist() if n.startswith('xl/worksheets/sheet')]
def col(ref):
    return re.match(r'[A-Z]+', ref).group(0)
alvo = {('04', '015'), ('04', '005')}
cab = None
saida = []
with z.open(nomes[0]) as f:
    for ev, el in ET.iterparse(f):
        if el.tag.endswith('}row'):
            vals = {}
            for c in el:
                if not c.tag.endswith('}c'):
                    continue
                v = c.find('m:v', ns)
                if v is None:
                    continue
                x = v.text
                if c.get('t') == 's':
                    x = ss[int(x)]
                vals[col(c.get('r'))] = x
            el.clear()
            linha = [vals.get(k, '') for k in sorted(vals, key=lambda s: (len(s), s))]
            if cab is None and any('Residence' in str(x) for x in linha):
                cab = linha
                print('CAB', cab)
                continue
            if any("Mohave County" == str(x) or "Coconino County" == str(x) for x in linha[:5]):
                saida.append(linha)
for l in saida:
    # residência: estado, condado; trabalho: estado, condado
    if l[6] not in ('04',) or l[0] != l[6]:
        print(l)
print('linhas de Mohave/Coconino:', len(saida))
for l in saida:
    if l[6] == '04' and l[7] in ('015', '005'):
        print('dentro', l)
