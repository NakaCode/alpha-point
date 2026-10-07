"""Valida os três perfis JSON locais e suas referências. Python padrão; sem rede.
Não executa a cena e não substitui revisão de movimento, pixels ou QC independente.
"""
from pathlib import Path
import argparse, hashlib, json, math, re

KINDS={'roupa':'roupa-ilustrador','pedido':'pedido-cena-ilustrada','entrega':'entrega-cena-ilustrada'}
SUPPORTED={'$schema','title','type','properties','required','additionalProperties','items','minItems','maxItems','minLength','pattern','enum','const','minimum','exclusiveMinimum'}
def check(ok,message):
    if not ok:raise ValueError(message)
def schema_check(value,s,path='$'):
    check(not set(s)-SUPPORTED,f'Keyword de schema nao suportada: {set(s)-SUPPORTED}')
    t=s.get('type')
    valid={'object':isinstance(value,dict),'array':isinstance(value,list),'string':isinstance(value,str),'integer':type(value) is int,'number':type(value) in (int,float) and math.isfinite(value)}
    check(t in valid and valid[t],f'{path}: tipo esperado {t}')
    if 'const' in s:check(value==s['const'],f'{path}: constante divergente')
    if 'enum' in s:check(value in s['enum'],f'{path}: valor nao permitido')
    if t=='object':
        check(set(s.get('required',[]))<=set(value),f'{path}: campos obrigatorios ausentes')
        check(s.get('additionalProperties') is False,f'{path}: perfil precisa fechar as propriedades')
        check(set(value)<=set(s['properties']),f'{path}: campo desconhecido')
        for k,v in value.items():schema_check(v,s['properties'][k],path+'.'+k)
    elif t=='array':
        check(len(value)>=s.get('minItems',0) and len(value)<=s.get('maxItems',float('inf')),f'{path}: tamanho de lista invalido')
        for i,v in enumerate(value):schema_check(v,s['items'],path+f'[{i}]')
    elif t=='string':
        check(len(value)>=s.get('minLength',0),f'{path}: string vazia')
        if 'pattern' in s:check(re.search(s['pattern'],value) is not None,f'{path}: formato invalido')
    else:
        if 'minimum' in s:check(value>=s['minimum'],f'{path}: abaixo do minimo')
        if 'exclusiveMinimum' in s:check(value>s['exclusiveMinimum'],f'{path}: precisa exceder o minimo')
def resolve(root,name):
    check(not Path(name).is_absolute() and not Path(name).drive,f'Caminho absoluto: {name}')
    p=(root/name).resolve();check(p.is_relative_to(root) and p!=root,f'Caminho fora da raiz: {name}');return p
def read(root,name):return json.loads(resolve(root,name).read_text(encoding='utf-8'))
def hash_ref(root,ref):
    p=resolve(root,ref['arquivo']);check(p.is_file(),f'Arquivo ausente: {ref["arquivo"]}')
    check(hashlib.sha256(p.read_bytes()).hexdigest()==ref['sha256'],f'Hash divergente: {ref["arquivo"]}')
def bounds(box,stage):
    x,y,w,h=box;return x>=0 and y>=0 and w>0 and h>0 and x+w<=stage[0] and y+h<=stage[1]
def validate(kind,name,root):
    root=Path(root).resolve();data=read(root,name)
    contract=Path(__file__).resolve().parents[2]/'contratos'/(KINDS[kind]+'.schema.json')
    schema_check(data,json.loads(contract.read_text(encoding='utf-8')))
    if kind=='roupa':
        check(all(x>0 for x in data['palco']),'Palco invalido')
        for box in [data['areas']['conteudo'],data['areas']['credito'],*data['areas']['reservadas']]:check(bounds(box,data['palco']),'Area fora do palco ou vazia')
        for ref in [data['tokens_css'],*data['documentos']]:hash_ref(root,ref)
        css=resolve(root,data['tokens_css']['arquivo']).read_text(encoding='utf-8')
        tokens=list(data['papeis_cor'].values())
        for role in data['tipografia'].values():
            check(role['piso']<=role['alvo']<=role['teto'],'Hierarquia tipografica invalida')
            tokens.extend(role[k] for k in ('familia_token','peso_token','tamanho_token'))
        for token in tokens:check(re.fullmatch(r'--[a-z][a-z0-9-]*',token) and re.search(re.escape(token)+r'\s*:',css),f'Token ausente: {token}')
    elif kind=='pedido':
        for ref in [data['roupa'],*data['entradas']]:hash_ref(root,ref)
        garment=validate('roupa',data['roupa']['arquivo'],root)
        check(data['palco']==garment['palco'],'Palco do pedido diverge da roupa')
        check(bounds(data['area_destino'],data['palco']),'Area de destino invalida')
        x,y,w,h=data['area_destino'];sx,sy,sw,sh=garment['areas']['conteudo']
        check(x>=sx and y>=sy and x+w<=sx+sw and y+h<=sy+sh,'Destino fora da area segura de conteudo')
        for rx,ry,rw,rh in garment['areas']['reservadas']:
            check(not (x<rx+rw and x+w>rx and y<ry+rh and y+h>ry),'Destino invade area reservada')
        duration=data['tempo']['quadros']/data['tempo']['fps'];ids=set()
        for e in data['eventos']:
            check(e['em']<duration,'Evento fora da duracao');check(e['id'] not in ids,'Evento duplicado');ids.add(e['id'])
        ids=set()
        for t in data['textos']:
            check(t['em']<t['ate']<=duration+1e-6,'Janela de texto invalida');check(t['id'] not in ids,'Texto duplicado');ids.add(t['id'])
    else:
        for ref in [data['pedido'],data['roupa'],*data['arquivos']]:hash_ref(root,ref)
        request=validate('pedido',data['pedido']['arquivo'],root)
        check(data['roupa']==request['roupa'],'Troca de roupa sem novo pedido')
        check(data['projeto']==request['projeto'] and data['cena']==request['cena'],'Identidade da cena divergente')
        a=data['animacao'];check(a['executor']==request['executor'],'Executor divergente')
        check(a['fps']==request['tempo']['fps'] and a['quadros']==request['tempo']['quadros'],'Tempo divergente')
        check(abs(a['duracao']-a['quadros']/a['fps'])<1e-6,'Duracao nao corresponde aos quadros')
        check(a['hook_tempo']==request['consumidor']['hook_tempo'],'Hook divergente do consumidor')
        check(any(x['arquivo']==a['entrada'] and x['funcao']=='cena' for x in data['arquivos']),'Entrada sem hash de cena')
        reports={v['tipo']:v for v in data['verificacoes']}
        expected={'estrutura','determinismo','movimento','areas_seguras','identidade','texto_credito','audio','qc_independente'}
        check(set(reports)==expected and len(data['verificacoes'])==len(expected),'Verificacoes incompletas ou duplicadas')
        if data['estado']=='aprovado':
            check(reports['qc_independente']['estado']=='passou','Aprovacao exige QC independente')
            check(not data['pendencias'] and all(v['estado'] in ('passou','nao_aplicavel') for v in reports.values()),'Aprovacao com pendencias')
    return data
if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('tipo',choices=KINDS);p.add_argument('arquivo');p.add_argument('--raiz',default='.');a=p.parse_args()
    try:
        d=validate(a.tipo,a.arquivo,a.raiz);print(json.dumps({'estado':'passou','perfil':a.tipo,'limite':'estrutura, referencias, hashes e coerencia temporal; sem execucao de HTML ou juizo artistico'},ensure_ascii=False))
    except (ValueError,OSError,KeyError) as e:p.exit(1,str(e)+'\n')
