# Imprime o texto de paginas de um PDF, com as linhas de numero juntadas em sequencia para ficar legivel.
# Uso: python -X utf8 -B pagina.py <pdf> <pagina1> [<pagina2> ...]   (paginas contadas a partir de 1)
import sys, fitz
doc = fitz.open(sys.argv[1])
for n in sys.argv[2:]:
    t = doc[int(n) - 1].get_text()
    print(f"\n==================== p.{n}")
    buf = []
    for l in t.splitlines():
        l = l.strip()
        if not l:
            continue
        if l.replace(",", "").replace("-", "").replace("(", "").replace(")", "").replace(".", "").isdigit():
            buf.append(l)
        else:
            if buf:
                print("   ", " | ".join(buf))
                buf = []
            print(l)
    if buf:
        print("   ", " | ".join(buf))
