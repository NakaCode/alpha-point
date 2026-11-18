# Le varias paginas do mesmo site respeitando o Crawl-delay: chama ler.py para cada URL, com <espera> segundos entre elas.
# Uso: python -X utf8 -B ler_lento.py <espera_s> <url1>,<url2>,... <padrao1> [<padrao2> ...]
import sys, time, subprocess, os
AQUI = os.path.dirname(os.path.abspath(__file__))
esp = float(sys.argv[1]); urls = sys.argv[2].split(","); pads = sys.argv[3:]
for i, u in enumerate(urls):
    if i: time.sleep(esp)
    print("\n==========", u)
    subprocess.run([sys.executable, "-X", "utf8", "-B", os.path.join(AQUI, "ler.py"), u] + pads)
