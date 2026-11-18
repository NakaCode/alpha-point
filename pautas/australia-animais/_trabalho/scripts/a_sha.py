# Leitor A (vídeo 8, australia-animais). Lista o sha256 e o tamanho de cada arquivo baixado em midia/australia-animais/fontes/a/ (sem os robots e os logs).
import os, hashlib
RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\a'
for nome in sorted(os.listdir(RAIZ)):
    if nome.startswith('_') or nome.endswith('.txt'):
        continue
    d = open(os.path.join(RAIZ, nome), 'rb').read()
    print('%s  %9d  %s' % (hashlib.sha256(d).hexdigest()[:16], len(d), nome))
