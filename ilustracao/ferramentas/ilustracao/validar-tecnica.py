"""Contrato técnico aditivo: arquivos, autoridade recebida, áreas e controles.
Não executa assets, mede pixels ou concede aprovação artística/QC.
"""
from pathlib import Path, PureWindowsPath
import argparse
import importlib.util
import json

HERE = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location('contrato_narrativo_v1', HERE/'validar-cena.py')
base = importlib.util.module_from_spec(spec)
spec.loader.exec_module(base)
check, schema_check = base.check, base.schema_check
KINDS = {'pedido':'pedido-ilustracao-tecnica', 'entrega':'entrega-ilustracao-tecnica'}
DOMAINS = {'estrutura','integridade','areas_seguras','identidade','movimento','determinismo','qc_independente'}


def resolve(root, name):
    check(not PureWindowsPath(name).drive and '\\' not in name, 'Caminho precisa ser relativo portatil: '+name)
    return base.resolve(root, name)


def hash_ref(root, ref):
    resolve(root, ref['arquivo'])
    base.hash_ref(root, ref)


def unique(items, key, label):
    ids = [x[key] for x in items]
    check(len(set(ids)) == len(ids), label+' duplicado')


def timing(data):
    if 'tempo' in data:
        t = data['tempo']
        check(abs(t['duracao']-t['quadros']/t['fps']) < 1e-6, 'Duracao nao corresponde aos quadros/fps')


def control_value(control, value):
    if control['tipo'] == 'enum':
        check(set(value) == {'controle','opcao'}, 'Controle enum exige somente opcao')
        check(value['opcao'] in control['opcoes'], 'Opcao fora do dominio: '+control['id'])
    else:
        check(set(value) == {'controle','numero'}, 'Controle numerico exige somente numero')
        v = value['numero']
        check(control['minimo'] <= v <= control['maximo'], 'Valor fora do dominio: '+control['id'])
        if control['tipo'] == 'inteiro':
            check(v == int(v), 'Controle inteiro recebeu fracao: '+control['id'])


def controls(items):
    unique(items, 'id', 'Controle')
    for c in items:
        if c['tipo'] == 'enum':
            check(set(c) == {'id','tipo','opcoes','inicial_opcao'}, 'Dominio enum incompleto ou misturado')
            check(len(set(c['opcoes'])) == len(c['opcoes']), 'Opcoes duplicadas')
            control_value(c, {'controle':c['id'],'opcao':c['inicial_opcao']})
        else:
            check(set(c) == {'id','tipo','minimo','maximo','inicial_numero'}, 'Dominio numerico incompleto ou misturado')
            check(c['minimo'] < c['maximo'], 'Intervalo de controle vazio/invertido')
            if c['tipo'] == 'inteiro':
                check(all(c[k] == int(c[k]) for k in ('minimo','maximo','inicial_numero')), 'Dominio inteiro recebeu fracao')
            control_value(c, {'controle':c['id'],'numero':c['inicial_numero']})


def validate(kind, name, root):
    root = Path(root).resolve()
    data = json.loads(resolve(root, name).read_text(encoding='utf-8'))
    schema = json.loads((HERE.parents[1]/'contratos'/(KINDS[kind]+'.schema.json')).read_text(encoding='utf-8'))
    schema_check(data, schema)
    timing(data)
    if kind == 'pedido':
        for ref in [data['brief'], data['roupa'], *data['entradas']]:
            hash_ref(root, ref)
        garment = base.validate('roupa', data['roupa']['arquivo'], root)
        # Também exige referências portáteis nos documentos já validados pela roupa v1.
        for ref in [garment['tokens_css'], *garment['documentos']]:
            resolve(root, ref['arquivo'])
        check(data['palco'] == garment['palco'], 'Palco diverge da roupa')
        check(base.bounds(data['area_destino'], data['palco']), 'Area de destino invalida')
        x,y,w,h = data['area_destino']
        sx,sy,sw,sh = garment['areas']['conteudo']
        check(x >= sx and y >= sy and x+w <= sx+sw and y+h <= sy+sh, 'Destino fora da area segura')
        for rx,ry,rw,rh in garment['areas']['reservadas']:
            check(not (x < rx+rw and x+w > rx and y < ry+rh and y+h > ry), 'Destino invade area reservada')
        if data['modo'] == 'componente':
            check(data['autoridade']['composicao'] == 'consumidor', 'Componente nao recebe autoridade de composicao final')
        c = data['consumidor']
        controls(data['controles'])
        if c['interface'] == 'svg-estatico':
            check('tempo' not in data and 'hook' not in c and not data['controles'], 'SVG estatico nao declara tempo, hook ou controles procedurais')
        else:
            check('hook' in c, 'Interface procedural exige hook do consumidor')
            if c['interface'] == 'poses-js':
                check(bool(data['controles']), 'poses-js exige controles com dominios')
            else:
                check('tempo' in data, 'Animacao exige tempo')
        outputs = data['saidas_esperadas']
        check(len(set(outputs)) == len(outputs) and 'asset' in outputs, 'Saidas esperadas duplicadas ou sem asset')
    else:
        for ref in [data['pedido'], data['roupa'], *data['arquivos']]:
            hash_ref(root, ref)
        request = validate('pedido', data['pedido']['arquivo'], root)
        for field in ('projeto','id','modo','autoridade','roupa'):
            check(data[field] == request[field], 'Entrega altera '+field+' recebido no pedido')
        check(data.get('tempo') == request.get('tempo'), 'Entrega altera tempo recebido')
        api,c = data['api'],request['consumidor']
        check(api['interface'] == c['interface'] and api.get('hook') == c.get('hook'), 'API diverge do consumidor')
        resolve(root, api['entrada'])
        unique(data['arquivos'], 'arquivo', 'Arquivo')
        check(any(a['arquivo'] == api['entrada'] and a['funcao'] == 'asset' for a in data['arquivos']), 'Entrada da API sem asset com hash')
        check(set(request['saidas_esperadas']) <= {f['funcao'] for f in data['arquivos']}, 'Saida esperada ausente')
        unique(data['partes'], 'id', 'Parte')
        for part in data['partes']:
            if 'bounds' in part:
                b = part['bounds']
                check(len(b) in (4,6) and all(x > 0 for x in b[len(b)//2:]), 'Bounds de parte invalidos')
            if 'pivot' in part and 'bounds' in part:
                check(len(part['pivot'])*2 == len(part['bounds']), 'Dimensao de pivot e bounds divergente')
        unique(data['poses_exemplo'], 'id', 'Pose')
        requested_controls = {x['id']:x for x in request['controles']}
        if requested_controls:
            check(bool(data['poses_exemplo']), 'Controles exigem ao menos uma pose de exemplo')
        else:
            check(not data['poses_exemplo'], 'Pose sem controles solicitados')
        for pose in data['poses_exemplo']:
            unique(pose['valores'], 'controle', 'Valor de pose')
            check({v['controle'] for v in pose['valores']} == set(requested_controls), 'Pose incompleta ou controle desconhecido')
            for v in pose['valores']:
                control_value(requested_controls[v['controle']], v)
        unique(data['verificacoes'], 'tipo', 'Verificacao')
        checks = {v['tipo']:v for v in data['verificacoes']}
        check(set(checks) == DOMAINS, 'Dominios de verificacao incompletos')
        for v in checks.values():
            if 'evidencia' in v:
                hash_ref(root, v['evidencia'])
                check(any(f['arquivo'] == v['evidencia']['arquivo'] and f['sha256'] == v['evidencia']['sha256'] and f['funcao'] == 'evidencia' for f in data['arquivos']), 'Evidencia precisa constar nos arquivos da entrega')
            if v['estado'] == 'passou':
                check('evidencia' in v, 'Verificacao passou sem arquivo de evidencia')
            if v['estado'] == 'nao_aplicavel':
                check(api['interface'] == 'svg-estatico' and v['tipo'] in ('movimento','determinismo'), 'Dominio obrigatorio marcado nao_aplicavel')
        if data['estado'] == 'bloqueado':
            check(bool(data['pendencias']), 'Estado bloqueado exige pendencia concreta')
        if data['estado'] == 'aprovado':
            check(checks['qc_independente']['estado'] == 'passou', 'Aprovado exige registro de QC independente')
            check(not data['pendencias'] and all(v['estado'] in ('passou','nao_aplicavel') for v in checks.values()), 'Aprovado com pendencias ou verificacoes nao concluidas')
    return data


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('tipo', choices=KINDS)
    parser.add_argument('arquivo')
    parser.add_argument('--raiz', default='.')
    args = parser.parse_args()
    try:
        result = validate(args.tipo, args.arquivo, args.raiz)
        print(json.dumps({'estado':'passou','perfil':'ilustracao-tecnica-v1','tipo':args.tipo,'limite':'Estrutura, arquivos, hashes, autoridade declarada, dominios e coerencia de metadados. Nao executa arte nem comprova a veracidade de laudos.'}, ensure_ascii=False))
    except (ValueError, OSError, KeyError, TypeError) as e:
        print(json.dumps({'estado':'falhou','erro':str(e)}, ensure_ascii=False))
        raise SystemExit(1)
