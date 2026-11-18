# Leitor C (vídeo 8, australia-animais). Mostra a Tabela 1 do eLife (Suraweera et al. 2020), do XML ja baixado: mortes por picada de cobra na Índia, ano a ano.
# Nao faz pedido de rede. Uso: python -X utf8 -B c_india_tabela.py
import xml.etree.ElementTree as ET, os
RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\c'
r = ET.parse(os.path.join(RAIZ, 'suraweera2020-fulltext.xml')).getroot()
for tw in r.iter('table-wrap'):
    lab = ''.join(tw.find('label').itertext()) if tw.find('label') is not None else ''
    cap = ' '.join(''.join(tw.find('caption').itertext()).split()) if tw.find('caption') is not None else ''
    print('==', lab, cap[:160])
    if lab.strip().startswith(('Table 1', 'Table 4')):
        for tr in tw.iter('tr'):
            cels = [' '.join(''.join(c.itertext()).split()) for c in tr if c.tag in ('td', 'th')]
            print(' | '.join(cels))
        for fn in tw.iter('fn'):
            print('NOTA:', ' '.join(''.join(fn.itertext()).split())[:300])
