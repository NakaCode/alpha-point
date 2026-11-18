# Leitor C (vídeo 8, australia-animais). Baixa uma URL com o User-Agent do canal, um pedido por vez, depois de ler o robots.txt do host.
# Uso: python -X utf8 -B c_baixar.py <url> <nome-do-arquivo> [--robots-so]
# Grava em midia/australia-animais/fontes/c/<nome>; mostra status, tamanho e sha256; registra cada pedido (host, url, status) em fontes/c/_log-c.txt.
# Para em 403/418/429/503-captcha/Cloudflare, sem insistir (a regra do canal: site que recusa leitura automatica nao se contorna).
import sys, os, hashlib, time, urllib.request, urllib.error, urllib.parse, urllib.robotparser, datetime

UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\c'
LOG = os.path.join(RAIZ, '_log-c.txt')
url = sys.argv[1]
nome = sys.argv[2]
p = urllib.parse.urlparse(url)
robots_url = '%s://%s/robots.txt' % (p.scheme, p.netloc)
rob_path = os.path.join(RAIZ, '_robots-%s.txt' % p.netloc)


def log(tipo, u, status):
    with open(LOG, 'a', encoding='utf-8') as f:
        f.write('%s\t%s\t%s\t%s\t%s\n' % (datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'), tipo, p.netloc, status, u))


def pegar(u):
    req = urllib.request.Request(u, headers={'User-Agent': UA, 'Accept': '*/*'})
    with urllib.request.urlopen(req, timeout=int(os.environ.get('TIMEOUT', '45'))) as r:
        return r.status, r.read(), r.headers.get('Content-Type'), r.geturl()


if not os.path.exists(rob_path):
    try:
        st, corpo, ct, fim = pegar(robots_url)
        open(rob_path, 'wb').write(corpo)
        log('robots', robots_url, st)
        print('robots.txt lido (%s): %d bytes' % (p.netloc, len(corpo)))
        if corpo.lstrip()[:15].lower().startswith((b'<!doctype', b'<html')):
            print('ATENCAO: o robots.txt voltou como HTML (pagina, nao arquivo de regras):', corpo[:120])
    except urllib.error.HTTPError as e:
        log('robots', robots_url, e.code)
        open(rob_path, 'wb').write(('HTTP %d\n' % e.code).encode())
        print('robots.txt: HTTP', e.code, '(sem robots; segue)' if e.code in (404, 405, 410) else '(NAO segue)')
        if e.code not in (404, 405, 410):
            sys.exit(2)
    except Exception as e:
        log('robots', robots_url, 'ERRO ' + str(e)[:80])
        print('robots.txt erro:', e)
        sys.exit(2)
    time.sleep(1.5)
rob = open(rob_path, 'rb').read().decode('utf-8', 'replace')
if rob.startswith('HTTP') and not rob.split()[1] in ('404', '405', '410'):
    print('robots.txt deste host deu', rob.strip(), '(site recusou leitura automatica). Nao baixo.')
    sys.exit(2)
if rob.lstrip()[:15].lower().startswith(('<!doctype', '<html')):
    print('robots.txt deste host e uma pagina HTML (desafio/captcha ou erro). Nao baixo.')
    sys.exit(2)
if not rob.startswith('HTTP'):
    rp = urllib.robotparser.RobotFileParser()
    rp.parse(rob.splitlines())
    ok = rp.can_fetch('AlphaPoint-pauta', url) and rp.can_fetch('*', url)
    print('robots permite %s: %s' % (p.path[:70], ok))
    if not ok:
        print('BLOQUEADO PELO ROBOTS. Nao baixo.')
        sys.exit(3)
if '--robots-so' in sys.argv:
    sys.exit(0)
try:
    st, corpo, ct, fim = pegar(url)
except urllib.error.HTTPError as e:
    log('pagina', url, e.code)
    print('HTTP', e.code, url)
    sys.exit(4)
except Exception as e:
    log('pagina', url, 'ERRO ' + str(e)[:80])
    print('ERRO', e)
    sys.exit(5)
log('pagina', url, st)
dest = os.path.join(RAIZ, nome)
open(dest, 'wb').write(corpo)
print('OK', st, ct, len(corpo), 'bytes', dest)
if fim != url:
    print('URL final (redirecionou):', fim)
cab = corpo[:300].lower()
if b'just a moment' in corpo[:3000].lower() or b'cf_chl' in corpo[:6000].lower() or b'captcha' in corpo[:3000].lower():
    print('ATENCAO: parece desafio da Cloudflare/captcha. Nao contorno; anote e siga.')
print('sha256', hashlib.sha256(corpo).hexdigest())
time.sleep(1.5)
