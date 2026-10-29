#!/usr/bin/env python3
"""
Extrai, de TODAS as transcricoes do canal (sessoes, setores, subagentes, workflows), uma linha por
resposta do modelo, com o esforco gravado nela. So leitura.

Uso: python -X utf8 -B extrair-esforco.py <pasta-de-saida>

Conta uma vez por message.id (o maior output_tokens visto), como o out/_modelos/medir-consumo.py.
Grava:
  arquivos.json  um registro por .jsonl (tipo, sessao, agente, meta, workflow, 1a fala do usuario)
  msgs.csv       uma linha por resposta: arq, ts, modelo, effort, perTurnEffort, thinking_ms,
                 entrada, escrita_5m, escrita_1h, leitura, saida, pensamento_tokens
"""
import sys, os, re, json, glob, time, datetime, csv
from multiprocessing import Pool

BASE = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point'


def primeira_fala(d):
    m = d.get('message') or {}
    c = m.get('content')
    if isinstance(c, str):
        return c[:300]
    if isinstance(c, list):
        for b in c:
            if isinstance(b, dict) and b.get('type') == 'text':
                return (b.get('text') or '')[:300]
    return None


def ler(args):
    idx, path, corte, principal = args
    msgs = {}
    first = last = None
    fala = None
    titulos = []
    with open(path, 'rb') as fh:
        for line in fh:
            eh_assist = b'"type":"assistant"' in line
            if principal and fala is None and b'"type":"user"' in line and not eh_assist:
                try:
                    d = json.loads(line)
                    if d.get('type') == 'user' and not d.get('isMeta'):
                        f = primeira_fala(d)
                        if f and not f.startswith('<'):
                            fala = f
                except Exception:
                    pass
            if principal and (b'"type":"custom-title"' in line or b'"type":"summary"' in line) and len(titulos) < 5:
                try:
                    d = json.loads(line)
                    titulos.append(d.get('customTitle') or d.get('summary'))
                except Exception:
                    pass
            if not eh_assist:
                continue
            try:
                d = json.loads(line)
            except Exception:
                continue
            if d.get('type') != 'assistant':
                continue
            msg = d.get('message') or {}
            u = msg.get('usage')
            model = msg.get('model')
            ts = d.get('timestamp')
            if not u or not model or model == '<synthetic>':
                continue
            if corte and ts and ts > corte:
                continue
            mid = msg.get('id') or d.get('requestId') or d.get('uuid')
            cc = u.get('cache_creation') or {}
            e1h = cc.get('ephemeral_1h_input_tokens') or 0
            ccit = u.get('cache_creation_input_tokens') or 0
            e5m = cc.get('ephemeral_5m_input_tokens')
            if e5m is None:
                e5m = max(0, ccit - e1h)
            rec = [
                ts, model, d.get('effort') or '', str(d.get('perTurnEffort') or ''),
                d.get('thinkingDurationMs') or 0,
                u.get('input_tokens') or 0, e5m, e1h,
                u.get('cache_read_input_tokens') or 0,
                u.get('output_tokens') or 0,
                (u.get('output_tokens_details') or {}).get('thinking_tokens') or 0,
            ]
            old = msgs.get(mid)
            if old is None or rec[9] >= old[9]:
                if old is not None and (old[4] or 0) > (rec[4] or 0):
                    rec[4] = old[4]
                msgs[mid] = rec
            if ts:
                if first is None or ts < first:
                    first = ts
                if last is None or ts > last:
                    last = ts
    return idx, first, last, list(msgs.values()), fala, titulos


def main():
    out = sys.argv[1]
    os.makedirs(out, exist_ok=True)
    corte = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%dT%H:%M:%S.000Z')
    arquivos = []
    for p in glob.glob(BASE + '/**/*.jsonl', recursive=True):
        p = p.replace(chr(92), '/')
        rel = p[len(BASE) + 1:]
        partes = rel.split('/')
        reg = {'caminho': rel, 'tamanho': os.path.getsize(p)}
        if len(partes) == 1:
            reg['tipo'] = 'principal'
            reg['sessao'] = partes[0][:-6]
        else:
            reg['sessao'] = partes[0]
            nome = partes[-1]
            reg['tipo'] = 'agente' if nome.startswith('agent-') else 'outro'
            if nome.startswith('agent-'):
                reg['agent_id'] = nome[6:-6]
            mp = p[:-6] + '.meta.json'
            if os.path.exists(mp):
                try:
                    reg['meta'] = json.load(open(mp, encoding='utf-8'))
                except Exception:
                    pass
            mm = re.search(r'/(wf_[0-9a-f]+-[0-9a-f]+)/', p)
            if mm:
                reg['wf'] = mm.group(1)
        arquivos.append(reg)
    # nomes dos workflows
    wfn = {}
    for f in glob.glob(BASE + '/*/workflows/wf_*.json'):
        try:
            d = json.load(open(f, encoding='utf-8'))
            wfn[d.get('runId')] = d.get('workflowName')
        except Exception:
            pass
    for f in glob.glob(BASE + '/*/workflows/scripts/*-wf_*.js'):
        b = os.path.basename(f)
        m = re.match(r'(.*)-(wf_[0-9a-f]+-[0-9a-f]+)\.js$', b)
        if m and m.group(2) not in wfn:
            wfn[m.group(2)] = m.group(1)
    for r in arquivos:
        if r.get('wf'):
            r['wf_nome'] = wfn.get(r['wf'])
    print('corte (UTC):', corte, '| arquivos:', len(arquivos), flush=True)
    ordem = sorted(range(len(arquivos)), key=lambda k: -arquivos[k]['tamanho'])
    tarefas = [(k, BASE + '/' + arquivos[k]['caminho'], corte, arquivos[k]['tipo'] == 'principal') for k in ordem]
    t0 = time.time()
    n_msgs = 0
    with open(out + '/msgs.csv', 'w', newline='', encoding='utf-8') as fh, Pool(6) as pool:
        w = csv.writer(fh)
        w.writerow(['arq', 'ts', 'modelo', 'effort', 'per_turn', 'thinking_ms', 'entrada', 'escrita_5m',
                    'escrita_1h', 'leitura', 'saida', 'pensamento'])
        for n, (idx, first, last, msgs, fala, titulos) in enumerate(pool.imap_unordered(ler, tarefas, chunksize=1)):
            r = arquivos[idx]
            r['primeiro'] = first
            r['ultimo'] = last
            r['n_msgs'] = len(msgs)
            if fala:
                r['fala'] = fala
            if titulos:
                r['titulos'] = titulos
            for m in msgs:
                w.writerow([idx] + m)
            n_msgs += len(msgs)
            if n % 300 == 0:
                print(f'{n}/{len(arquivos)}  {time.time()-t0:.0f}s  msgs={n_msgs}', flush=True)
    with open(out + '/arquivos.json', 'w', encoding='utf-8') as fh:
        json.dump({'corte': corte, 'arquivos': arquivos}, fh, ensure_ascii=False)
    print('feito', f'{time.time()-t0:.0f}s', 'msgs', n_msgs)


if __name__ == '__main__':
    main()
