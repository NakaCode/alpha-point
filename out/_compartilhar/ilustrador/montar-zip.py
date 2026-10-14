# montar-zip.py — o ZIP do ilustrador (a habilidade ilustracao-narrativa v1.4.0) para levar a outro projeto.
# Uso (da raiz do canal): python -B out/_compartilhar/ilustrador/montar-zip.py
# O que faz:
#   1. monta numa pasta temporária: LEIA-ANTES.md e PEDIDO-PARA-O-CLAUDE.md (desta pasta) + o pacote v1.4.0 inteiro, byte a
#      byte, sem cache de Python;
#   2. roda o verificar-pacote.py --com-node do próprio pacote na cópia montada (tem de sair PASS);
#   3. grava COMPARTILHAMENTO.json (o sha256 de cada arquivo, o que o Alpha deixou fora do projeto e a verificação);
#   4. gera o ZIP e o confere de novo: extrai noutra pasta temporária, compara cada sha256 e roda o verificador outra vez.
# Não lê chave, não sai da máquina, não mexe no pacote original (o verificador dele confere que ele não mudou).
# Saída: 0 = ZIP feito e conferido · 1 = alguma conferência falhou (o ZIP não fica) · 2 = não rodou (falta o pacote).
import hashlib, json, shutil, subprocess, sys, tempfile, zipfile
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[3]
PACOTE = RAIZ / 'v1.4.0-ilustracao-narrativa' / 'ilustracao-narrativa-v1.4.0'
AQUI = Path(__file__).resolve().parent
NOME_PACOTE = 'ilustracao-narrativa-v1.4.0'
SAIDA = AQUI / 'ilustrador-ilustracao-narrativa-v1.4.0.zip'
DATA_ZIP = (2026, 10, 13, 0, 0, 0)
FORA = {'__pycache__', '.pytest_cache'}


def sha(p):
    h = hashlib.sha256()
    with open(p, 'rb') as f:
        for b in iter(lambda: f.read(1 << 20), b''):
            h.update(b)
    return h.hexdigest()


def arquivos(raiz):
    return sorted(p for p in raiz.rglob('*') if p.is_file() and not FORA.intersection(p.relative_to(raiz).parts)
                  and p.suffix not in {'.pyc', '.pyo'})


def verificar(pasta):
    r = subprocess.run([sys.executable, '-B', 'verificar-pacote.py', '--com-node'], cwd=pasta, capture_output=True,
                       text=True, encoding='utf-8', env={**__import__('os').environ, 'PYTHONIOENCODING': 'utf-8'})
    try:
        rel = json.loads(r.stdout)
    except json.JSONDecodeError:
        rel = {'status': 'FALHOU', 'erro': (r.stdout + r.stderr)[-800:]}
    return r.returncode, rel


def main():
    if not (PACOTE / 'MANIFESTO.json').is_file():
        print('✗ o pacote não está em', PACOTE.relative_to(RAIZ).as_posix())
        return 2
    manifesto = json.loads((PACOTE / 'MANIFESTO.json').read_text(encoding='utf-8'))
    origem = json.loads((RAIZ / 'ilustracao' / 'ORIGEM.json').read_text(encoding='utf-8'))
    with tempfile.TemporaryDirectory(prefix='zip-ilustrador-') as t:
        palco = Path(t) / 'palco'
        destino = palco / NOME_PACOTE
        shutil.copytree(PACOTE, destino, ignore=shutil.ignore_patterns(*FORA, '*.pyc', '*.pyo'))
        for nota in ('LEIA-ANTES.md', 'PEDIDO-PARA-O-CLAUDE.md'):
            shutil.copy2(AQUI / nota, palco / nota)
        codigo, rel = verificar(destino)
        n_pass = sum(1 for v in rel.get('verificacoes', []) if v.get('status') == 'PASS')
        print(f'verificação do pacote montado: {rel.get("status")} ({n_pass} de {len(rel.get("verificacoes", []))})')
        if codigo != 0 or rel.get('status') != 'PASS':
            print('✗ o pacote montado não passou:', rel.get('erro', ''))
            return 1
        lista = {p.relative_to(palco).as_posix(): sha(p) for p in arquivos(palco)}
        comp = {
            'o_que': 'a habilidade ilustracao-narrativa v1.4.0 (o "ilustrador" do editor de arte), isolada do canal Alpha Point',
            'pacote': manifesto['pacote'], 'versao': manifesto['versao'], 'data_do_pacote': manifesto['data'],
            'manifesto_sha256': sha(PACOTE / 'MANIFESTO.json'),
            'montado_em': '2026-10-13',
            'regra': 'a pasta do pacote vai byte a byte; o que é do Alpha (marca, cenas, mídia, chaves) não vem. '
                     'adaptadores/alpha-point/ fica só porque a verificação do pacote conta todos os arquivos: não se copia.',
            'verificacao': {'comando': 'python -B verificar-pacote.py --com-node (de dentro da pasta do pacote)',
                            'status': rel['status'], 'pass': n_pass, 'total': len(rel['verificacoes']),
                            'escopo': rel.get('escopo')},
            'alpha_deixou_fora_do_projeto': origem['deixados_no_pacote'],
            'arquivos': lista,
        }
        (palco / 'COMPARTILHAMENTO.json').write_text(json.dumps(comp, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        provisorio = Path(t) / SAIDA.name
        with zipfile.ZipFile(provisorio, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as z:
            for p in arquivos(palco):
                info = zipfile.ZipInfo(p.relative_to(palco).as_posix(), DATA_ZIP)
                info.compress_type = zipfile.ZIP_DEFLATED
                info.external_attr = 0o644 << 16
                z.writestr(info, p.read_bytes())
        # A conferência do ZIP pronto: extrai, compara os sha256 e verifica o pacote de novo.
        volta = Path(t) / 'volta'
        with zipfile.ZipFile(provisorio) as z:
            if z.testzip() is not None:
                print('✗ o ZIP tem entrada corrompida')
                return 1
            z.extractall(volta)
        extraidos = {p.relative_to(volta).as_posix(): sha(p) for p in arquivos(volta)}
        esperado = dict(lista, **{'COMPARTILHAMENTO.json': sha(palco / 'COMPARTILHAMENTO.json')})
        if extraidos != esperado:
            print('✗ o ZIP extraído difere do montado:', sorted(set(extraidos) ^ set(esperado))[:10])
            return 1
        codigo2, rel2 = verificar(volta / NOME_PACOTE)
        if codigo2 != 0 or rel2.get('status') != 'PASS':
            print('✗ o pacote extraído do ZIP não passou:', rel2.get('erro', ''))
            return 1
        shutil.copy2(provisorio, SAIDA)
    print(f'✓ {SAIDA.relative_to(RAIZ).as_posix()} · {len(esperado)} arquivos · {SAIDA.stat().st_size / 1e6:.2f} MB · '
          f'sha256 {sha(SAIDA)}')
    print('  extraído e conferido: sha256 de cada arquivo igual, verificador do pacote PASS')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
