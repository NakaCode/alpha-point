# Leitor A (vídeo 8): corta uma região (frações 0-1) de uma imagem para leitura. Uso: python -X utf8 -B a_cortar.py <entrada.jpg> <saida.jpg> <x0> <y0> <x1> <y1> [largura_max]
import sys
from PIL import Image
im = Image.open(sys.argv[1])
w, h = im.size
x0, y0, x1, y1 = [float(v) for v in sys.argv[3:7]]
c = im.crop((int(x0 * w), int(y0 * h), int(x1 * w), int(y1 * h)))
if len(sys.argv) > 7:
    m = int(sys.argv[7])
    if c.size[0] > m:
        c = c.resize((m, int(c.size[1] * m / c.size[0])))
c.save(sys.argv[2], quality=85)
print(c.size)
