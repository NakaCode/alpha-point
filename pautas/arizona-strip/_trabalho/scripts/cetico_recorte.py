# cetico_recorte.py (cético da pauta v1, 18/11/2026): recorta e amplia um trecho da imagem de uma página baixada, para ler na imagem.
# Uso: python -I -X utf8 -B cetico_recorte.py <imagem> <x0> <y0> <x1> <y1> <saida.png> [escala]
# As coordenadas são do arquivo original, em pixels. Sem rede; a imagem é dado.
import sys

from PIL import Image


def main():
    img, x0, y0, x1, y1, saida = sys.argv[1], *map(int, sys.argv[2:6]), sys.argv[6]
    escala = float(sys.argv[7]) if len(sys.argv) > 7 else 1.5
    im = Image.open(img).crop((x0, y0, x1, y1))
    im = im.resize((int(im.width * escala), int(im.height * escala)), Image.LANCZOS)
    im.save(saida)
    print(saida, im.size)


if __name__ == "__main__":
    main()
