# medir-espectador.py — mede, nas transcrições de um workflow, o que a revisão de espectador gastou e se caiu no laço das
# imagens (M10, opção 1: o teste do vídeo 3).
# Uso (da raiz do canal): python -X utf8 -B ferramentas/medir-espectador.py <pasta do workflow> [<outra pasta>…]
#                         [--lotes=<lotes.json da rodada>] [--rotulo=espectador:L] [--teto=25] [--mb=17.6] [--json]
#   A pasta do workflow é a que o Workflow devolve como "Transcript dir" (…/subagents/workflows/wf_…). Entram só os agentes
#   cujo rótulo (o `label` do agent(), gravado como `description` no .meta.json) começa com --rotulo. Com --lotes, o revisor
#   `espectador:L<n>` tem de ter aberto todas as folhas do lote n do lotes.json do folhas-espectador.py.
# O que mede, por revisor:
#   - as imagens que voltaram a ele (todo resultado de ferramenta com imagem; na prática, o Read) e quantas repetem um
#     arquivo que ele já tinha aberto;
#   - as regravações da conversa: o anexo `thinking_drop` por mudança de prefixo, separado em "imagens tiradas" (o
#     Claude Code tirou imagens antigas: o laço do vídeo 2, em que o revisor reabria o que sumiu) e "outra mudança"
#     (prompt de sistema ou ferramentas); e a queda do cache sem anexo (a conversa regravada sem pausa, sem compactação);
#   - o volume de imagem (MB de base64) até a primeira regravação; se foi cortado (mensagem `<synthetic>`, ex.: limite);
#   - o custo a preço de tabela: entrada, saída, escrita de cache de 5 min e leitura (a régua do auditoria-tokens.html).
# O esperado: nenhuma regravação, até 5 % de repetidas, ninguém acima de --teto imagens nem de --mb, ninguém cortado e,
#   com --lotes, toda folha do lote aberta. O custo não decide a saída: vai no relatório, para comparar com o previsto.
# Só lê as transcrições e o lotes.json: não lê chave, não abre imagem, nada sai da máquina.
# Saída: 0 = medido, dentro do esperado · 1 = medido, fora do esperado · 2 = não mediu (sem revisor com esse rótulo,
#        argumento errado).
import glob, json, os, re, sys, datetime

# US$ por milhão de tokens: entrada, saída, escrita de cache de 5 min, leitura de cache (platform.claude.com, 13 e 14/10/2026).
PRECO = {'claude-opus-5-5': (4, 20, 5, 0.20), 'claude-sonnet-5-5': (2, 10, 2.5, 0.10), 'claude-fable-5-1': (10, 50, 12.5, 0.25)}
USO = ('uso: python -X utf8 -B ferramentas/medir-espectador.py <pasta do workflow> [--lotes=<lotes.json>] '
       '[--rotulo=espectador:L] [--teto=25] [--mb=17.6] [--json]')


def args():
    a = {'pastas': [], 'rotulo': 'espectador:L', 'teto': 25, 'mb': 17.6, 'json': False, 'lotes': None}
    try:
        for x in sys.argv[1:]:
            if x.startswith('--rotulo='):
                a['rotulo'] = x[9:]
            elif x.startswith('--teto='):
                a['teto'] = int(x[7:])
            elif x.startswith('--mb='):
                a['mb'] = float(x[5:])
            elif x.startswith('--lotes='):
                a['lotes'] = x[8:]
            elif x == '--json':
                a['json'] = True
            elif not x.startswith('--'):
                a['pastas'].append(x)
            else:
                raise ValueError(x)
    except ValueError as e:
        print('✗ argumento errado:', e, '\n' + USO)
        sys.exit(2)
    if not a['pastas']:
        print(USO)
        sys.exit(2)
    return a


def chave_folha(p):
    # As 3 últimas partes do caminho (…/espectador-rN/folhas/sNN-NN.png): casa caminho absoluto e relativo.
    return '/'.join(str(p).replace(chr(92), '/').lower().split('/')[-3:])


def ts(s):
    return datetime.datetime.fromisoformat(s.replace('Z', '+00:00')) if s else None


def medir(arq):
    r = {'arquivo': os.path.basename(arq), 'modelo': None, 'chamadas': 0, 'imagens': 0, 'repetidas': 0,
         'imagens_tiradas': 0, 'outra_mudanca': 0, 'queda_sem_anexo': 0, 'mb_ate_1a_regravacao': 0.0, 'cortado': False,
         'usd': 0.0, 'abertas': []}
    uso, ordem, caminho_de, vistos_tu, caminhos = {}, [], {}, set(), set()
    b64, regravou, anexo_pendente, compactou = 0, False, False, False
    prev = None  # (instante, contexto) da chamada anterior
    for linha in open(arq, encoding='utf-8', errors='replace'):
        try:
            j = json.loads(linha)
        except json.JSONDecodeError:
            continue
        if 'compact_boundary' in (str(j.get('subtype')), str(j.get('type'))):
            compactou = True
        anexo = j.get('attachment') or {}
        if anexo.get('type') == 'thinking_drop' and (anexo.get('newlyDropped') or {}).get('reason') == 'prefix_mismatch':
            kinds = str((anexo.get('clientChange') or {}).get('kinds', ''))
            if 'systemPromptChanged' in kinds or 'toolSchemasChanged' in kinds:
                r['outra_mudanca'] += 1
            else:
                r['imagens_tiradas'] += 1
            anexo_pendente = regravou = True
        m = j.get('message') or {}
        if j.get('type') == 'assistant' and m.get('id'):
            if m.get('model') == '<synthetic>':
                r['cortado'] = True
                continue
            for b in m.get('content') or []:
                if isinstance(b, dict) and b.get('type') == 'tool_use':
                    caminho_de[b['id']] = str((b.get('input') or {}).get('file_path', ''))
            u = m.get('usage') or {}
            if m['id'] not in uso:
                uso[m['id']] = dict(u, modelo=m.get('model'))
                ordem.append(m['id'])
                ctx = (u.get('input_tokens') or 0) + (u.get('cache_creation_input_tokens') or 0) + (u.get('cache_read_input_tokens') or 0)
                agora = ts(j.get('timestamp'))
                if prev and not anexo_pendente and not compactou and prev[1] > 60000 \
                        and (u.get('cache_read_input_tokens') or 0) < 0.5 * prev[1] \
                        and (u.get('cache_creation_input_tokens') or 0) > 40000 \
                        and agora and prev[0] and (agora - prev[0]).total_seconds() < 300:
                    r['queda_sem_anexo'] += 1
                    regravou = True
                prev, anexo_pendente, compactou = (agora, ctx), False, False
            else:
                # A saída final da mensagem vem na última linha dela: guarda o maior valor.
                uso[m['id']]['output_tokens'] = max(uso[m['id']].get('output_tokens') or 0, u.get('output_tokens') or 0)
        elif j.get('type') == 'user' and isinstance(m.get('content'), list):
            for b in m['content']:
                if not (isinstance(b, dict) and b.get('type') == 'tool_result' and isinstance(b.get('content'), list)):
                    continue
                imgs = [x for x in b['content'] if isinstance(x, dict) and x.get('type') == 'image']
                if not imgs or b.get('tool_use_id') in vistos_tu:
                    continue
                vistos_tu.add(b.get('tool_use_id'))
                r['imagens'] += len(imgs)
                c = caminho_de.get(b.get('tool_use_id'))
                if c:
                    k = chave_folha(c)
                    if k in caminhos:
                        r['repetidas'] += len(imgs)
                    caminhos.add(k)
                    r['abertas'].append(k)
                if not regravou:
                    b64 += sum(len((x.get('source') or {}).get('data', '') or '') for x in imgs)
    for mid in ordem:
        u = uso[mid]
        p = PRECO.get(u.get('modelo'), PRECO['claude-opus-5-5'])
        r['modelo'] = r['modelo'] or u.get('modelo')
        r['usd'] += ((u.get('input_tokens') or 0) * p[0] + (u.get('output_tokens') or 0) * p[1]
                     + (u.get('cache_creation_input_tokens') or 0) * p[2] + (u.get('cache_read_input_tokens') or 0) * p[3]) / 1e6
    r['chamadas'] = len(ordem)
    r['mb_ate_1a_regravacao'] = round(b64 / 1e6, 2)
    r['usd'] = round(r['usd'], 2)
    return r


def main():
    a = args()
    lotes = None
    if a['lotes']:
        try:
            lotes = {x['lote']: x['folhas'] for x in json.load(open(a['lotes'], encoding='utf-8'))['lotes']}
        except (OSError, json.JSONDecodeError, KeyError) as e:
            print('✗ lotes.json ilegível:', e)
            return 2
    revisores, sem_meta = [], 0
    for pasta in a['pastas']:
        for arq in sorted(glob.glob(os.path.join(pasta, 'agent-*.jsonl'))):
            try:
                meta = json.load(open(arq[:-6] + '.meta.json', encoding='utf-8'))
            except (OSError, json.JSONDecodeError):
                sem_meta += 1
                continue
            rot = meta.get('description') or ''
            if not rot.startswith(a['rotulo']):
                continue
            r = dict(medir(arq), rotulo=rot)
            if lotes is not None:
                m = re.match(r'espectador:L(\d+)', rot)
                devidas = lotes.get(int(m.group(1))) if m else None
                if devidas is None:
                    r['faltaram'] = ['(rótulo sem lote no lotes.json)']
                else:
                    abertas = set(r['abertas'])
                    r['faltaram'] = [f for f in devidas if chave_folha(f) not in abertas]
                r['folhas_do_lote'] = len(devidas or [])
            r.pop('abertas')
            revisores.append(r)
    if sem_meta:
        print(f'! {sem_meta} transcrição(ões) sem .meta.json, fora da conta')
    if not revisores:
        print(f"✗ nenhum agente com rótulo começando em '{a['rotulo']}' em", ', '.join(a['pastas']))
        return 2
    soma = lambda k: sum(r[k] for r in revisores)  # noqa: E731
    tot = {k: soma(k) for k in ('chamadas', 'imagens', 'repetidas', 'imagens_tiradas', 'outra_mudanca', 'queda_sem_anexo')}
    tot['usd'] = round(soma('usd'), 2)
    regravacoes = tot['imagens_tiradas'] + tot['outra_mudanca'] + tot['queda_sem_anexo']
    pct = 100 * tot['repetidas'] / max(tot['imagens'], 1)
    acima = sorted({r['rotulo'] for r in revisores if r['imagens'] > a['teto'] or r['mb_ate_1a_regravacao'] > a['mb']})
    cortados = sorted({r['rotulo'] for r in revisores if r['cortado']})
    incompletos = sorted({r['rotulo'] for r in revisores if r.get('faltaram')})
    folhas = sum(r.get('folhas_do_lote', 0) for r in revisores)
    ok = regravacoes == 0 and pct <= 5 and not acima and not cortados and not incompletos
    if a['json']:
        print(json.dumps({'revisores': revisores, 'total': tot, 'regravacoes': regravacoes, 'repetidas_pct': round(pct, 1),
                          'acima_do_teto': acima, 'cortados': cortados, 'incompletos': incompletos,
                          'usd_por_folha': round(tot['usd'] / folhas, 3) if folhas else None,
                          'dentro_do_esperado': ok}, ensure_ascii=False, indent=1))
    else:
        for r in sorted(revisores, key=lambda r: (r['rotulo'], r['arquivo'])):
            falta = f"  faltaram {len(r['faltaram'])}" if r.get('faltaram') else ''
            print(f"{r['rotulo']:<22} {r['arquivo'][:16]:<16} {str(r['modelo'])[7:]:<10} imagens {r['imagens']:>4}  "
                  f"repetidas {r['repetidas']:>4}  regravações {r['imagens_tiradas'] + r['outra_mudanca'] + r['queda_sem_anexo']:>3}  "
                  f"MB {r['mb_ate_1a_regravacao']:>6}  US$ {r['usd']:>7.2f}{'  CORTADO' if r['cortado'] else ''}{falta}")
        print(f"\n{len(revisores)} revisores · {tot['imagens']} imagens, {tot['repetidas']} repetidas ({pct:.1f} %) · "
              f"{regravacoes} regravações ({tot['imagens_tiradas']} por imagens tiradas, {tot['outra_mudanca']} por outra mudança, "
              f"{tot['queda_sem_anexo']} sem anexo) · US$ {tot['usd']:.2f} a preço de tabela"
              + (f" · US$ {tot['usd'] / folhas:.3f} por folha" if folhas else ''))
        print(f"acima de {a['teto']} imagens ou {a['mb']} MB: {', '.join(acima) or 'nenhum'} · cortados: {', '.join(cortados) or 'nenhum'}"
              + (f" · com folha do lote não aberta: {', '.join(incompletos) or 'nenhum'}" if lotes is not None else ''))
        print('✓ dentro do esperado' if ok else '✗ fora do esperado')
    return 0 if ok else 1


if __name__ == '__main__':
    sys.exit(main())
