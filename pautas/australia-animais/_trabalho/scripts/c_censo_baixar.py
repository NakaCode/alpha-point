# Medida do Censo (vídeo 8, australia-animais). Baixa uma URL com o User-Agent do canal, um pedido por vez, depois de ler o robots.txt do host.
# Molde: a_baixar.py. Grava em midia/australia-animais/fontes/c/censo/<nome>; anota cada pedido (o do robots também) em _pedidos.jsonl, com o sha256.
# Uso: python -X utf8 -B -I c_censo_baixar.py <url> <nome-do-arquivo> [--robots-so] [--head]
#   --robots-so  só lê o robots.txt do host (uma vez) e diz se a URL é permitida
#   --head       faz só um HEAD (para saber o tamanho antes de baixar); anota o pedido, não grava corpo
# Para em 403/418/429, em captcha ou em página de verificação de robô, sem insistir e sem trocar cabeçalho.
import sys, os, json, hashlib, time, datetime, urllib.request, urllib.error, urllib.parse, urllib.robotparser

UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\c\censo'
LOG = os.path.join(RAIZ, '_pedidos.jsonl')
SINAIS_ROBO = (b'captcha', b'cf-chl', b'Just a moment', b'Attention Required', b'are you a robot', b'verify you are human')

os.makedirs(RAIZ, exist_ok=True)


def anotar(**kw):
    kw['quando'] = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
    with open(LOG, 'a', encoding='utf-8') as f:
        f.write(json.dumps(kw, ensure_ascii=False) + '\n')


def robots_permite(texto, url, agente='alphapoint-pauta'):
    """RFC 9309: o grupo do agente (ou o '*'); vence a regra de caminho mais longo; empate, Allow; '*' casa qualquer trecho; '$' ancora o fim.
    (O urllib.robotparser lê as regras em ordem e não entende '*' no meio: com 'Disallow: /' antes dos 'Allow', ele negaria tudo.)"""
    import re
    grupos, atual, lendo_agentes = [], None, False
    for linha in texto.splitlines():
        linha = linha.split('#', 1)[0].strip()
        if ':' not in linha:
            continue
        k, v = [x.strip() for x in linha.split(':', 1)]
        k = k.lower()
        if k == 'user-agent':
            if not lendo_agentes:
                atual = {'agentes': [], 'regras': []}
                grupos.append(atual)
            atual['agentes'].append(v.lower())
            lendo_agentes = True
        elif k in ('allow', 'disallow') and atual is not None:
            lendo_agentes = False
            if v:
                atual['regras'].append((k, v))
        else:
            lendo_agentes = False
    escolhido = [g for g in grupos if any(a != '*' and a in agente for a in g['agentes'])]
    if not escolhido:
        escolhido = [g for g in grupos if '*' in g['agentes']]
    regras = [r for g in escolhido for r in g['regras']]
    p = urllib.parse.urlparse(url)
    alvo = (p.path or '/') + (('?' + p.query) if p.query else '')
    melhor = None
    for tipo, padrao in regras:
        ancora = padrao.endswith('$')
        corpo = padrao[:-1] if ancora else padrao
        rx = '^' + '.*'.join(re.escape(urllib.parse.unquote(x)) for x in corpo.split('*')) + ('$' if ancora else '')
        if re.match(rx, urllib.parse.unquote(alvo)):
            chave = (len(padrao), tipo == 'allow')
            if melhor is None or chave > melhor[0]:
                melhor = (chave, tipo, padrao)
    if melhor is None:
        return True, '(nenhuma regra casa)'
    return melhor[1] == 'allow', '%s: %s' % (melhor[1], melhor[2])


def pegar(u, metodo='GET'):
    req = urllib.request.Request(u, headers={'User-Agent': UA, 'Accept': '*/*'}, method=metodo)
    with urllib.request.urlopen(req, timeout=int(os.environ.get('TIMEOUT', '90'))) as r:
        corpo = r.read() if metodo == 'GET' else b''
        return r.status, corpo, dict(r.headers)


def main():
    url = sys.argv[1]
    nome = sys.argv[2]
    p = urllib.parse.urlparse(url)
    robots_url = '%s://%s/robots.txt' % (p.scheme, p.netloc)
    rob_path = os.path.join(RAIZ, '_robots-%s.txt' % p.netloc)
    if not os.path.exists(rob_path):
        try:
            st, corpo, h = pegar(robots_url)
            open(rob_path, 'wb').write(corpo)
            anotar(url=robots_url, status=st, bytes=len(corpo), sha256=hashlib.sha256(corpo).hexdigest())
            print('robots.txt lido (%s): %d bytes' % (p.netloc, len(corpo)))
        except urllib.error.HTTPError as e:
            open(rob_path, 'wb').write(('HTTP %d\n' % e.code).encode())
            anotar(url=robots_url, status=e.code, bytes=0)
            print('robots.txt: HTTP', e.code, '(sem robots; segue)' if e.code in (404, 405, 410) else '(NAO segue)')
            if e.code not in (404, 405, 410):
                sys.exit(2)
        except Exception as e:
            anotar(url=robots_url, status='erro', erro=str(e)[:200])
            print('robots.txt erro:', e)
            sys.exit(2)
        time.sleep(1.5)
    rob = open(rob_path, 'rb').read().decode('utf-8', 'replace')
    if rob.startswith('HTTP') and rob.split()[1] not in ('404', '405', '410'):
        print('robots.txt deste host deu', rob.strip(), '(site recusou leitura automatica). Nao baixo.')
        sys.exit(2)
    if not rob.startswith('HTTP'):
        sniff = rob.encode('utf-8', 'replace')
        if any(s.lower() in sniff.lower() for s in SINAIS_ROBO) or '<html' in rob[:500].lower():
            print('robots.txt veio como pagina HTML/verificacao: parar.')
            sys.exit(2)
        ok, regra = robots_permite(rob, url)
        print('robots permite %s: %s (%s)' % (p.path[:80], ok, regra))
        if not ok:
            print('BLOQUEADO PELO ROBOTS. Nao baixo.')
            sys.exit(3)
    if '--robots-so' in sys.argv:
        sys.exit(0)
    metodo = 'HEAD' if '--head' in sys.argv else 'GET'
    try:
        st, corpo, h = pegar(url, metodo)
    except urllib.error.HTTPError as e:
        anotar(url=url, metodo=metodo, status=e.code, bytes=0)
        print('HTTP', e.code, url)
        sys.exit(4)
    except Exception as e:
        anotar(url=url, metodo=metodo, status='erro', erro=str(e)[:200])
        print('ERRO', e)
        sys.exit(5)
    ct = h.get('Content-Type') or h.get('content-type')
    if metodo == 'HEAD':
        tam = h.get('Content-Length') or h.get('content-length')
        anotar(url=url, metodo='HEAD', status=st, content_type=ct, content_length=tam)
        print('HEAD', st, ct, 'Content-Length:', tam)
        time.sleep(1.5)
        return
    if any(s.lower() in corpo[:20000].lower() for s in SINAIS_ROBO) and (ct or '').startswith('text/html'):
        anotar(url=url, status=st, bytes=len(corpo), nota='pagina de verificacao de robo: parado')
        print('PAGINA DE VERIFICACAO DE ROBO. Nao gravo, nao insisto.')
        sys.exit(6)
    dest = os.path.join(RAIZ, nome)
    open(dest, 'wb').write(corpo)
    sha = hashlib.sha256(corpo).hexdigest()
    anotar(url=url, status=st, content_type=ct, bytes=len(corpo), sha256=sha, arquivo=nome)
    print('OK', st, ct, len(corpo), 'bytes', dest)
    print('sha256', sha)
    time.sleep(1.5)


if __name__ == '__main__':
    main()
