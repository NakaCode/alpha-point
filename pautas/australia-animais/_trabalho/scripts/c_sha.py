# Leitor C (vídeo 8, australia-animais). Lista o sha256 e o tamanho de cada arquivo baixado em midia/australia-animais/fontes/c/ (sem os robots, os logs e a subpasta censo/, que e de outro agente)
# e resume o log de pedidos (_log-c.txt) por host. Nao faz pedido de rede. Uso: python -X utf8 -B c_sha.py
import os, hashlib, collections
RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\c'
for nome in sorted(os.listdir(RAIZ)):
    p = os.path.join(RAIZ, nome)
    if os.path.isdir(p) or nome.startswith('_') or nome.startswith('robots-') or nome.endswith('.txt'):
        continue
    d = open(p, 'rb').read()
    print('%s  %9d  %s' % (hashlib.sha256(d).hexdigest()[:16], len(d), nome))
print()
log = os.path.join(RAIZ, '_log-c.txt')
cont = collections.OrderedDict()
tot = 0
for lin in open(log, encoding='utf-8'):
    c = lin.rstrip('\n').split('\t')
    if len(c) < 5:
        continue
    tot += 1
    k = (c[2], c[1])
    cont.setdefault(k, []).append(c[3])
print('pedidos registrados em _log-c.txt (so os deste leitor, a partir de 16:0x):', tot)
for (h, t), st in cont.items():
    print('  %-38s %-7s %2d pedidos  status: %s' % (h, t, len(st), ','.join(st)))
