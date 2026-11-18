# Leitor A (vídeo 8, australia-animais). Baixa uma URL com o User-Agent do canal, um pedido por vez, depois de ler o robots.txt do host.
# Uso: python -X utf8 -B a_baixar.py <url> <nome-do-arquivo> [--robots-so]
# Grava em midia/australia-animais/fontes/a/<nome>; mostra status, tamanho e sha256. Para em 403/418/429/captcha, sem insistir.
import sys, os, hashlib, time, urllib.request, urllib.error, urllib.parse, urllib.robotparser

UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\a'
url = sys.argv[1]
nome = sys.argv[2]
p = urllib.parse.urlparse(url)
robots_url = '%s://%s/robots.txt' % (p.scheme, p.netloc)
rob_path = os.path.join(RAIZ, '_robots-%s.txt' % p.netloc)


def pegar(u, binario=True):
    req = urllib.request.Request(u, headers={'User-Agent': UA, 'Accept': '*/*'})
    with urllib.request.urlopen(req, timeout=int(os.environ.get('TIMEOUT', '45'))) as r:
        return r.status, r.read(), r.headers.get('Content-Type')


if not os.path.exists(rob_path):
    try:
        st, corpo, ct = pegar(robots_url)
        open(rob_path, 'wb').write(corpo)
        print('robots.txt lido (%s): %d bytes' % (p.netloc, len(corpo)))
    except urllib.error.HTTPError as e:
        open(rob_path, 'wb').write(('HTTP %d\n' % e.code).encode())
        print('robots.txt: HTTP', e.code, '(sem robots; segue)' if e.code in (404, 405, 410) else '(NAO segue)')
        if e.code not in (404, 405, 410):
            sys.exit(2)
    except Exception as e:
        print('robots.txt erro:', e)
        sys.exit(2)
    time.sleep(1.5)
rob = open(rob_path, 'rb').read().decode('utf-8', 'replace')
if rob.startswith('HTTP') and not rob.split()[1] in ('404', '405', '410'):
    print('robots.txt deste host deu', rob.strip(), '(site recusou leitura automatica). Nao baixo.')
    sys.exit(2)
if not rob.startswith('HTTP'):
    rp = urllib.robotparser.RobotFileParser()
    rp.parse(rob.splitlines())
    ok = rp.can_fetch('AlphaPoint-pauta', url) and rp.can_fetch('*', url)
    print('robots permite %s: %s' % (p.path[:60], ok))
    if not ok:
        print('BLOQUEADO PELO ROBOTS. Nao baixo.')
        sys.exit(3)
if '--robots-so' in sys.argv:
    sys.exit(0)
try:
    st, corpo, ct = pegar(url)
except urllib.error.HTTPError as e:
    print('HTTP', e.code, url)
    sys.exit(4)
except Exception as e:
    print('ERRO', e)
    sys.exit(5)
dest = os.path.join(RAIZ, nome)
open(dest, 'wb').write(corpo)
print('OK', st, ct, len(corpo), 'bytes', dest)
print('sha256', hashlib.sha256(corpo).hexdigest())
time.sleep(1.5)
