"""Perfil SVG estático do contrato ilustração-v1. Python padrão, sem rede."""
from pathlib import Path
import argparse, hashlib, json, math, re, sys
import xml.etree.ElementTree as ET

SVG = 'http://www.w3.org/2000/svg'
TAGS = {'svg', 'g', 'defs', 'path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon', 'pattern', 'use', 'title', 'desc'}
ATTRS = {'id', 'viewBox', 'width', 'height', 'x', 'y', 'x1', 'x2', 'y1', 'y2', 'cx', 'cy', 'r', 'rx', 'ry', 'd', 'points', 'transform', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-dasharray', 'stroke-dashoffset', 'opacity', 'fill-opacity', 'stroke-opacity', 'fill-rule', 'clip-rule', 'patternUnits', 'patternContentUnits', 'patternTransform', 'href', 'preserveAspectRatio', 'visibility', 'version'}
PAINT = {'fill', 'stroke'}
MUTABLE = {'transform', 'opacity', 'visibility'}
ROOT_PRESENTATION = {'class', 'width', 'height', 'aria-hidden', 'role', 'data-ilustracao', 'data-sha256'}

def sha(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()

def local(s):
    return s.rsplit('}', 1)[-1]

def check(ok, message):
    if not ok:
        raise ValueError(message)

def numbers(v, n, label):
    check(isinstance(v, list) and len(v) == n, f'{label}: esperado vetor de {n} números')
    check(all(type(x) in (int, float) and math.isfinite(x) for x in v), f'{label}: número não finito/inválido')

def parse_svg(text):
    check('<!DOCTYPE' not in text.upper() and '<!ENTITY' not in text.upper(), 'DTD/entidades não pertencem ao perfil')
    root = ET.fromstring(text)
    check(root.tag == '{' + SVG + '}svg', 'Raiz precisa ser SVG no namespace correto')
    return root

def inspect_svg(text, piece, tokens):
    root = parse_svg(text)
    box = [float(x) for x in root.get('viewBox', '').replace(',', ' ').split()]
    numbers(box, 4, 'viewBox')
    check(box == piece['viewBox'] and box[2] > 0 and box[3] > 0, 'viewBox divergente ou vazio')
    ids, refs = {}, []
    prefix = piece['id'] + '__'
    for el in root.iter():
        check(el.tag.startswith('{' + SVG + '}') and local(el.tag) in TAGS, f'Tag fora do perfil: {local(el.tag)}')
        ident = el.get('id')
        if ident:
            check(ident.startswith(prefix) and re.fullmatch(r'[A-Za-z_][\w.-]*', ident), f'ID sem prefixo/ inválido: {ident}')
            check(ident not in ids, f'ID duplicado: {ident}')
            ids[ident] = el
        for key, value in el.attrib.items():
            check('}' not in key and key in ATTRS, f'Atributo fora do perfil: {key}')
            if key == 'href':
                check(value.startswith('#') and len(value) > 1, 'Referência externa proibida')
                refs.append(value[1:])
            if key in PAINT:
                if value.startswith('var('):
                    match = re.fullmatch(r'var\((--[a-z][a-z0-9-]*)\)', value)
                    check(match is not None and match[1] in tokens, f'Token não permitido: {value}')
                elif value.startswith('url('):
                    match = re.fullmatch(r'url\(#([A-Za-z_][\w.-]*)\)', value)
                    check(match is not None, 'Referência de pintura externa/inválida')
                    refs.append(match[1])
                else:
                    check(value in {'none', 'currentColor', 'transparent', 'inherit'}, f'Cor literal fora do perfil: {value}')
        if local(el.tag) not in {'title', 'desc'}:
            check(not (el.text or '').strip(), 'Texto editorial não pertence ao asset')
        check(not (el.tail or '').strip(), 'Texto fora de nó descritivo')
    for ref in refs:
        check(ref in ids, f'Referência não resolvida: {ref}')
    seen_parts = set()
    for part in piece['partes']:
        ident = part['id']
        check(ident not in seen_parts, f'Parte duplicada: {ident}')
        seen_parts.add(ident)
        check(ident in ids and local(ids[ident].tag) == 'g', f'Parte precisa apontar para um grupo existente: {ident}')
        numbers(part['pivot'], 2, ident + '.pivot')
        numbers(part['bounds'], 4, ident + '.bounds')
        check(part['bounds'][2] > 0 and part['bounds'][3] > 0, f'Bounds vazios: {ident}')
        check(type(part['animavel']) is bool, f'animavel precisa ser booleano: {ident}')
        check(set(part['transformacoes']) <= {'translate', 'rotate', 'scale', 'opacity', 'visibility'}, f'Transformação inválida: {ident}')
        check(part['animavel'] or not part['transformacoes'], f'Parte fixa com transformações: {ident}')
    for zone in piece['areas_texto']:
        numbers(zone['bounds'], 4, 'área de texto')
        check(zone['bounds'][2] > 0 and zone['bounds'][3] > 0, 'Área de texto vazia')
    return root, set(ids)

def canonical_svg(root, piece, embedded=False):
    """Compara geometria; só grupos animáveis podem mudar atributos de movimento."""
    movable = {p['id'] for p in piece['partes'] if p['animavel']}
    def visit(el, first=False):
        attrs = dict(el.attrib)
        if el.get('id') in movable:
            attrs = {k: v for k, v in attrs.items() if k not in MUTABLE}
        if first:
            attrs = {k: v for k, v in attrs.items() if k not in ROOT_PRESENTATION}
        # HTML DOM pode normalizar prefixos; namespace SVG ainda é obrigatório no parser.
        return [local(el.tag), sorted(attrs.items()), (el.text or '').strip(), [visit(c) for c in el]]
    return visit(root, True)

def validate(manifest_path):
    file = Path(manifest_path).resolve()
    m = json.loads(file.read_text(encoding='utf-8'))
    for key in ('versao_contrato', 'projeto', 'cena', 'versao', 'estado', 'midia', 'pedido_sha256', 'tokens_permitidos', 'pecas', 'verificacoes'):
        check(key in m, f'Campo ausente: {key}')
    check(m['versao_contrato'] == 1, 'Versão de contrato não suportada')
    check(m['midia'] == 'construída', 'Este perfil exige mídia construída')
    check(m['estado'] in {'preparado', 'conferido', 'integrado', 'aprovado', 'bloqueado'}, 'Estado inválido')
    check(re.fullmatch('[a-f0-9]{64}', m['pedido_sha256']) is not None, 'Hash do pedido inválido')
    check(m['pecas'] and m['tokens_permitidos'], 'Entrega sem peças ou tokens')
    check(all(re.fullmatch(r'--[a-z][a-z0-9-]*', x) for x in m['tokens_permitidos']), 'Nome de token inválido')
    all_ids, pieces, files = set(), set(), set()
    for p in m['pecas']:
        check(re.fullmatch(r'[a-z][a-z0-9_-]*', p['id']) is not None, 'ID de peça inválido')
        check(p['id'] not in pieces, 'Peça duplicada')
        pieces.add(p['id'])
        asset = (file.parent / p['arquivo']).resolve()
        check(asset.is_relative_to(file.parent) and asset.suffix == '.svg', 'Caminho de asset fora da entrega/inválido')
        check(asset not in files, 'Mesmo arquivo usado duas vezes')
        files.add(asset)
        check(asset.is_file(), f'Asset ausente: {p["arquivo"]}')
        check(sha(asset) == p['sha256'], f'Hash divergente: {p["arquivo"]}')
        _, ids = inspect_svg(asset.read_text(encoding='utf-8'), p, set(m['tokens_permitidos']))
        check(not ids & all_ids, 'Colisão de IDs entre peças')
        all_ids |= ids
    for result in m['verificacoes']:
        check(result['estado'] in {'passou', 'falhou', 'nao_medido', 'nao_aplicavel'}, 'Estado de verificação inválido')
        check(bool(result.get('evidencia')), 'Verificação sem evidência')
    return {'estado': 'passou', 'pecas': len(pieces), 'ids': len(all_ids), 'limite': 'Estrutura/hash/perfil SVG. Não é aprovação visual, QC oficial ou teste nativo.'}

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('manifesto')
    args = parser.parse_args()
    try:
        print(json.dumps(validate(args.manifesto), ensure_ascii=False))
    except (ValueError, KeyError, TypeError, OSError, ET.ParseError) as e:
        print(json.dumps({'estado': 'falhou', 'erro': str(e)}, ensure_ascii=False))
        sys.exit(1)
