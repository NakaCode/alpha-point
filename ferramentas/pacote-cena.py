#!/usr/bin/env python3
"""
ferramentas/pacote-cena.py · o pacote da cena (o 1º script do caminho 1 da página "Dois caminhos para a cota";
out/_modelos/esforco-2026-10-29/pagina-dois-caminhos.html, "O pacote da cena").

Por quê: hoje cada peça procura a própria cena nos arquivos grandes do vídeo, em várias voltas (grep na regência,
um trecho do espelho, os textos de tela, o veredito da mídia, o laudo, as exceções), e cada despejo fica na pilha
dela até o fim. Este script faz isso uma vez, antes do despacho, e grava um arquivo curto por cena.

USO (da raiz do canal; o Python sempre de um arquivo, como manda a trava do canal):
    python -X utf8 -B ferramentas/pacote-cena.py <proj> <cena> [<cena>…] [--saida=<pasta>] [--laudo-inteiro]
        [--notas-inteiras]
  - grava <saida>/<cena>.md, uma por cena; a pasta padrão é out/<proj>/_tmp/pacotes/ (fora do git);
  - a cena filha de uma fusão do diretor (espelho › _mergedInto) vira o pacote da mãe: o arquivo da cena é o da mãe;
  - --laudo-inteiro põe os problemas de todas as lentes do laudo (o padrão põe só os das lentes abaixo de 7, a
    nota de cada lente, as correções pedidas e o motivo);
  - --notas-inteiras não corta as notas laterais (o padrão corta cada uma em 1.200 caracteres, com o caminho dela
    no original).
  Saída: 0 = todos os pacotes gravados; 1 = alguma cena não existe no espelho (as outras são gravadas);
  2 = uso errado, fora da raiz do canal, ou sem words.json ou espelho.json.

O QUE LÊ (só lê; tudo em out/<proj>/):
  - words.json (a fala, com o tempo de cada palavra) e espelho.json (o segmento da cena e das filhas: a janela, os
    planos, os needs inteiros e todo outro campo pelo nome);
  - regencia.json (a entrada da cena em `cenas`, com os beats, e as notas laterais que citam a cena; se a janela
    dela não for a do espelho, o cabeçalho avisa: a regência pode ser de antes do espelho de hoje);
  - conceito-visual.json (`cenas.<id>` da cena e das filhas, e o `fluxo` que a contém);
  - textos-tela.json (`_textos_por_cena` da cena, também o que está com o id de uma filha, e as notas laterais que
    citam a cena);
  - _pesquisa/conferencia-midia.json (os `candidatos`: os vereditos de hoje) e os _PROCEDENCIA.json das pastas
    das mídias, para casar cada arquivo com o veredito pela regra do CLAUDE.md ("A regra da cena"): pelo sha256
    do arquivo, pelo sha256 do rascunho julgado (`medido.sha256`, `medido.medido_no_download.sha256`,
    `sha256_rascunho_julgado`), pelo `medido.sha256_do_baixado`, ou pela URL do item com `mesmo_item: true`. Do
    veredito da cena vem todo campo pelo nome (a `janela_no_clipe`, o `uso`, o `credito_na_descricao`…), menos os
    longos de registro (`criterios`, `o_que_viu`, `quadros`, `arquivos_olhados`…), nomeados na linha "no original";
    da exceção de portão também, menos o histórico dela (`sha1_anteriores`, `reconferencias`);
  - graphics/<cena>.html, se existir (o sha1, como o _portao.json e as exceções o guardam, e as mídias que cita);
  - qc/<cena>.laudo.json e qc/_excecoes-portao.json, se existirem.
  Cada parte do pacote traz a impressão digital da fonte (o caminho e o sha256 do arquivo) e o lugar dentro
  dela, para a peça abrir o original quando precisar.
  As notas laterais (fora da entrada da cena) vêm de cinco arquivos: o espelho (parte 2), a regência (3), o conceito
  (4), o textos-tela (5) e a conferência (6). E a parte 9 traz, em trecho, TODA frase desses cinco arquivos que cita a
  cena (ou uma filha) e que as partes 2 a 6 não trazem: a nota que a cita no meio do texto, a decisão do Lucas que a
  nomeia, a regra de série, a entrada de outra cena que fala dela. Nenhuma frase que cita a cena fica fora do pacote,
  menos o histórico (`_consertos` do textos-tela, `substituidos` da conferência), contado nas partes 5 e 6 (o cético
  de 30/10/2026 achou fora da 1.0 a decisão do Lucas "A IMAGEM DE s47", no `_decisoes_do_lucas` do espelho, e a exceção
  de borda do plano 4 da s47, no `_relogio` do espelho).

O QUE NÃO FAZ:
  - não julga nada: não diz se uma mídia pode ir à cena, se um texto está certo, se a exceção ainda vale. Copia o
    que é da cena e põe lado a lado fatos mecânicos (o sha1 do HTML de hoje ao lado do sha1 da exceção; "nenhum
    veredito casa com este arquivo");
  - não escreve fora da pasta de saída, não chama rede, não abre navegador, não pede tile, não lê chave;
  - não substitui o ofício, a roupa nem o pedido da peça: a peça lê os três como hoje, e o original quando o
    pacote não basta.

LIMITES:
  - as notas laterais se acham pelos campos de cena (`cena`, `cena_espelho`, `cena_da_lista`, `onde`, `cenas`,
    `_na_tela`), pela chave igual ao id da cena, ou pelo começo da frase ("s02 › beats[1] · …", "conceito › s16 ·
    …", "s39 (s40): …"), e vêm inteiras (cortadas em 1.200 caracteres). A frase que cita a cena só no meio do texto
    vem na parte 9, em trecho: o começo e o texto em volta de cada menção (o `_regras_de_serie` do textos-tela, lido
    inteiro, também vem assim). A cena se reconhece pelo id ("s47") e pela faixa da prosa ("s45–s48"); a faixa
    dentro de um nome de arquivo ("…-s10-s51.jpg") não conta. O histórico (`_consertos` do textos-tela) não entra:
    só a contagem. Numa nota lateral, o veredito copiado da conferência vira só a palavra (o inteiro está na parte 6);
  - as mídias da cena são as que o HTML cita por caminho literal (`_media/<tipo>/…<ext>`) e as do campo `midia`
    dos beats da regência. Caminho montado em JavaScript por partes não aparece pelo HTML;
  - os `substituidos` da conferência (vereditos superados) não entram: só a contagem;
  - o arquivo de mídia acima de 2 GB não tem o sha256 medido: casa só pela procedência;
  - os nomes de campo são os do vídeo 4 (atlantico-fundo, out/2026). Campo novo numa entrada da cena entra pelo
    nome dele; arquivo com outro formato sai com o aviso "formato que o script não conhece".
"""
import datetime
import hashlib
import json
import os
import re
import sys

VERSAO = "1.1 (30/10/2026)"
LIMITE_NOTA = 1200
LIMITE_HASH = 2 * 1024 ** 3
CAMPOS_DE_CENA = ("cena", "cena_espelho", "cena_da_lista", "onde", "cenas", "_na_tela")
LER_INTEIRO_TEXTOS = ("_regras_de_serie",)
# o que não é nota de ninguém: as impressões digitais das entradas, o "como ler", o nome do projeto e de quem gerou
PULAR_META = ("_entradas_sha256", "_entradas_conferidas", "_como_ler", "projeto", "gerado_em", "_quem", "_proj")
# o veredito da conferência na parte 6: os campos do cabeçalho do veredito, e os longos que ficam só no original (o
# caminho deles vai no pacote); todo o resto se copia pelo nome
VEREDITO_NO_CABECALHO = ("veredito", "id", "cena", "lote", "sha256", "frase_coberta", "fonte")
VEREDITO_SO_NO_ORIGINAL = ("criterios", "o_que_viu", "quadros", "arquivos_olhados", "conferido_no_navegador_do_app", "quem_entregou")
# a exceção de portão na parte 8: o histórico dela fica só no original
EXCECAO_SO_NO_ORIGINAL = ("sha1_anteriores", "reconferencias")
# a parte 9 (as outras menções): os arquivos, a lista das entradas por cena (a da cena fica nas partes 2 a 6) e o
# histórico que fica de fora (só a contagem, nas partes 5 e 6)
OUTRAS_FONTES = (
    ("espelho.json", "segmentos", "id", ()),
    ("regencia.json", "cenas", "id", ()),
    ("conceito-visual.json", "cenas", None, ()),
    ("textos-tela.json", "_textos_por_cena", "cena", ("_consertos",)),
    ("_pesquisa/conferencia-midia.json", "candidatos", "cena", ("substituidos",)),
)
TIPOS_CONFERIDOS = ("foto", "footage", "pessoa", "documento", "logo", "_caca")
EXT_MIDIA = r"(?:jpe?g|png|webp|gif|svg|tiff?|mp4|mov|webm|m4v|pdf)"
RE_MIDIA = re.compile(r"_media/(?:%s)/[^\s\"'`<>()\\,;|]+?\.%s(?![A-Za-z0-9])" % ("|".join(TIPOS_CONFERIDOS), EXT_MIDIA), re.I)
RE_GEO = re.compile(r"_media/(?:geo|base|_dados)/[^\s\"'`<>()\\,;|]+?\.(?:js|json|geojson|png|jpe?g|webp|tif)(?![A-Za-z0-9])", re.I)
RE_CENA = re.compile(r"(?<![A-Za-z0-9])s(\d{2,3})(?![0-9])")
# a faixa "s45–s48" da prosa; não a de um nome de arquivo ("iss1042-recortes-s10-s51.jpg", "s14-s56-janelas.jpg"), que
# punha a cena em toda nota que citasse o arquivo
RE_FAIXA = re.compile(r"(?<![A-Za-z0-9_/.-])s(\d{2,3})\s*[–-]\s*s(\d{2,3})(?![0-9A-Za-z_/]|-[A-Za-z0-9]|\.[A-Za-z0-9])")


# ---------------------------------------------------------------- utilidades

def sha256_arquivo(caminho, limite=None):
    h = hashlib.sha256()
    with open(caminho, "rb") as f:
        while True:
            b = f.read(8 * 1024 * 1024)
            if not b:
                break
            h.update(b)
    return h.hexdigest()


def q(s):
    """O texto exato, como string JSON (aspas e \\n escapados): a prova o lê de volta com json."""
    return json.dumps(s, ensure_ascii=False)


def prosa(s):
    if s is None:
        return "—"
    if not isinstance(s, str):
        return json.dumps(s, ensure_ascii=False)
    return re.sub(r"\s+", " ", s).strip()


def num(x):
    return "%.3f" % float(x)


def sim_nao(v):
    return "sim" if v is True else ("não" if v is False else prosa(v))


def cenas_em(texto):
    ids = set()
    if not isinstance(texto, str):
        return ids
    for m in RE_FAIXA.finditer(texto):
        a, b = int(m.group(1)), int(m.group(2))
        w = max(len(m.group(1)), 2)
        if 0 < b - a < 200:
            for n in range(a, b + 1):
                ids.add("s%0*d" % (w, n))
    for m in RE_CENA.finditer(texto):
        ids.add("s" + m.group(1))
    return ids


def cabeca(texto):
    """O começo da frase que diz de que cena ela é: 's02 › beats[1] (…) · …' → 's02 › beats[1] (…)'."""
    if not isinstance(texto, str):
        return None
    t = texto.lstrip()
    m = re.match(r"(?:(?:conceito|espelho|regência|regencia|textos-tela|textos)\s*›\s*)?s\d{2,3}(?![0-9])", t)
    if not m:
        return None
    corte = len(t)
    for sep in (" · ", ": ", " — ", "; "):
        i = t.find(sep)
        if 0 <= i < corte:
            corte = i
    return t[:min(corte, 80)]


def cita_pela_cabeca(texto, ids):
    c = cabeca(texto)
    return bool(c) and bool(cenas_em(c) & ids)


def campo_cita(o, ids):
    for campo in CAMPOS_DE_CENA:
        if campo in o:
            v = o[campo]
            if isinstance(v, list):
                v = " ".join(x for x in v if isinstance(x, str))
            if isinstance(v, str) and (cenas_em(v) & ids):
                return campo
    return None


def cortar(s, inteiro):
    if inteiro or len(s) <= LIMITE_NOTA:
        return s
    return s[:LIMITE_NOTA] + " … (+%d caracteres: no original)" % (len(s) - LIMITE_NOTA)


def notas_laterais(dados, ids, pular, ler_inteiro=()):
    """As notas de um arquivo que citam a cena, fora da entrada principal dela. Devolve [(caminho, valor)]."""
    achadas = []

    def walk(o, caminho, em_lista, topo):
        if isinstance(o, dict):
            if campo_cita(o, ids) and (em_lista or not topo):
                achadas.append((caminho, o))
                return
            if em_lista:
                for k, v in o.items():
                    if isinstance(v, str) and cita_pela_cabeca(v, ids):
                        achadas.append((caminho, o))
                        return
            for k, v in o.items():
                sub = "%s.%s" % (caminho, k) if caminho else k
                if not em_lista and k in ids:
                    achadas.append((sub, v))
                    continue
                walk(v, sub, False, False)
        elif isinstance(o, list):
            for i, v in enumerate(o):
                walk(v, "%s[%d]" % (caminho, i), True, False)
        elif isinstance(o, str):
            raiz = caminho.split(".")[0].split("[")[0]
            if raiz in ler_inteiro:
                if cenas_em(o) & ids:
                    achadas.append((caminho, o))
            elif cita_pela_cabeca(o, ids):
                achadas.append((caminho, o))

    for k, v in dados.items():
        if k in pular:
            continue
        if k in ids:
            achadas.append((k, v))
            continue
        walk(v, k, False, True)
    return achadas


def trecho_em_volta(texto, ids, inteiras):
    """Nota lida inteira (a regra de série que cita a cena no meio): o começo e o texto em volta de cada menção."""
    t = prosa(texto)
    if inteiras or len(t) <= 450:
        return t
    janelas = []
    for m in RE_CENA.finditer(t):
        if "s" + m.group(1) in ids:
            janelas.append([max(0, m.start() - 160), min(len(t), m.end() + 160)])
    for m in RE_FAIXA.finditer(t):
        if cenas_em(m.group(0)) & ids:
            janelas.append([max(0, m.start() - 160), min(len(t), m.end() + 160)])
    janelas.sort()
    juntas = [[0, min(len(t), 140)]]
    for a, b in janelas:
        if a <= juntas[-1][1] + 20:
            juntas[-1][1] = max(juntas[-1][1], b)
        else:
            juntas.append([a, b])
    partes = [t[a:b] for a, b in juntas]
    fim = "" if juntas[-1][1] >= len(t) else " …"
    return " … ".join(partes) + fim + " (trecho de %d caracteres: a nota inteira no original)" % len(t)


def coberto_por(caminho, ja):
    """O caminho já está no pacote: é um dos caminhos `ja` ou fica dentro de um deles."""
    for c in ja:
        if caminho == c or caminho.startswith(c + ".") or caminho.startswith(c + "["):
            return True
    return False


def mencoes_restantes(dados, ids, pular, proprias, ja):
    """Toda folha de texto que cita a cena e que o pacote ainda não traz: fora das entradas da cena (`proprias`),
    fora das notas já listadas (`ja`) e das chaves puladas. Devolve [(caminho, texto)], na ordem do arquivo."""
    achadas = []

    def walk(o, cam):
        if cam in proprias or coberto_por(cam, ja):
            return
        if isinstance(o, dict):
            for k, v in o.items():
                walk(v, "%s.%s" % (cam, k) if cam else k)
        elif isinstance(o, list):
            for i, v in enumerate(o):
                walk(v, "%s[%d]" % (cam, i))
        elif isinstance(o, str) and (cenas_em(o) & ids):
            achadas.append((cam, o))

    for k, v in dados.items():
        if k in pular:
            continue
        walk(v, k)
    return achadas


def resumir_vereditos(v):
    """Numa nota lateral, o veredito copiado da conferência vira só a palavra: o inteiro está na parte 6."""
    if isinstance(v, dict):
        out = {}
        for k, x in v.items():
            if k in ("veredito", "fallback_veredito") and isinstance(x, dict) and "veredito" in x:
                out[k] = "%s (o inteiro: conferencia-midia.json, parte 6)" % x.get("veredito")
            else:
                out[k] = resumir_vereditos(x)
        return out
    if isinstance(v, list):
        return [resumir_vereditos(x) for x in v]
    return v


def bloco_notas(titulo, notas, ids, inteiras):
    """As notas laterais de um arquivo, no formato das da regência: um título e uma linha por nota, sem repetir."""
    if not notas:
        return []
    linhas = ["", "### %s (%d)" % (titulo, len(notas))]
    vistos = set()
    for caminho, v in notas:
        r = render_nota(caminho, v, ids, inteiras)
        if r not in vistos:
            vistos.add(r)
            linhas.append(r)
    return linhas


def render_nota(caminho, valor, ids, inteiras, inteira_na_fonte=False):
    if isinstance(valor, str):
        if valor.strip() in ids:
            return "- `%s`: a cena está nesta lista" % re.sub(r"\[\d+\]$", "", caminho)
        if inteira_na_fonte:
            return "- `%s`: %s" % (caminho, trecho_em_volta(valor, ids, inteiras))
        return "- `%s`: %s" % (caminho, cortar(prosa(valor), inteiras))
    return "- `%s`: %s" % (caminho, cortar(json.dumps(resumir_vereditos(valor), ensure_ascii=False), inteiras))


# ---------------------------------------------------------------- as fontes

class Fontes:
    def __init__(self, proj):
        self.proj = proj
        self.base = "out/%s" % proj
        self._json = {}
        self._sha = {}

    def caminho(self, rel):
        return "%s/%s" % (self.base, rel)

    def existe(self, rel):
        return os.path.isfile(self.caminho(rel))

    def json(self, rel):
        if rel not in self._json:
            c = self.caminho(rel)
            if not os.path.isfile(c):
                self._json[rel] = None
            else:
                with open(c, encoding="utf-8") as f:
                    self._json[rel] = json.load(f)
        return self._json[rel]

    def sha(self, rel):
        c = self.caminho(rel)
        if c not in self._sha:
            self._sha[c] = sha256_arquivo(c) if os.path.isfile(c) else None
        return self._sha[c]

    def fonte(self, rel, onde=None):
        s = self.sha(rel)
        if s is None:
            return "Fonte: `%s` · não existe" % self.caminho(rel)
        t = "Fonte: `%s` · sha256 `%s`" % (self.caminho(rel), s)
        if onde:
            t += " · %s" % onde
        return t


# ---------------------------------------------------------------- as partes

def parte_cabecalho(F, cena, mae, filhos, seg, pedido_como, avisos):
    fim = seg["inSec"] + seg["dur"]
    html = F.caminho("graphics/%s.html" % mae)
    linhas = ["# Pacote da cena %s · %s" % (mae, F.proj), ""]
    linhas.append("Gerado por `ferramentas/pacote-cena.py` %s em %s. Não julga nada: copia o que é da cena, com a impressão "
                  "digital de cada fonte. A peça continua lendo o ofício, a roupa e o pedido; abre o original quando o pacote não "
                  "basta." % (VERSAO, datetime.datetime.now().astimezone().isoformat(timespec="seconds")))
    linhas.append("")
    if pedido_como != mae:
        linhas.append("- **Pedido como %s**: %s é filha da fusão do diretor (espelho › `_mergedInto`), e o arquivo da cena é o "
                      "da mãe, %s." % (pedido_como, pedido_como, mae))
    linhas.append("- **A janela:** %s → %s s (%s s), no relógio do `words.json`; os tempos \"na cena\" contam do início dela."
                  % (num(seg["inSec"]), num(fim), num(seg["dur"])))
    if filhos:
        linhas.append("- **A fusão:** %s é a mãe; %s no mesmo arquivo." % (
            mae, "a filha %s está" % filhos[0] if len(filhos) == 1 else "as filhas %s estão" % ", ".join(filhos)))
    if os.path.isfile(html):
        sha1 = hashlib.sha1(open(html, "rb").read()).hexdigest()
        mp4 = html[:-5] + ".mp4"
        carimbo = mp4 + ".de-html"
        extra = ""
        if os.path.isfile(carimbo):
            extra = " · o carimbo do clipe: `%s`" % prosa(open(carimbo, encoding="utf-8", errors="replace").read())[:160]
        linhas.append("- **O HTML de hoje:** `%s` · sha1 `%s` · clipe %s%s" % (html, sha1, "existe" if os.path.isfile(mp4) else "não existe", extra))
    else:
        linhas.append("- **O HTML:** `%s` ainda não existe." % html)
    for a in avisos:
        linhas.append("- **Aviso:** %s" % a)
    return linhas


def parte_fala(F, segs_da_cena, seg):
    words = F.json("words.json")
    ini, fim = seg["inSec"], seg["inSec"] + seg["dur"]
    idx = [i for i, w in enumerate(words) if w["start"] >= ini - 1e-6 and w["start"] < fim - 1e-6]
    linhas = ["## 1. A fala", F.fonte("words.json", "a janela de `espelho.json` › segmentos[id=%s]: %s → %s s" % (seg["id"], num(ini), num(fim))), ""]
    if not idx:
        linhas.append("Sem fala: nenhuma palavra do `words.json` começa nesta janela (%s → %s s)." % (num(ini), num(fim)))
        return linhas
    linhas.append("- **%d palavras**, de %d a %d (índices do `words.json`)." % (len(idx), idx[0], idx[-1]))
    linhas.append("- **O texto:** %s" % " ".join(words[i]["w"] for i in idx))
    aprov = [s.get("_texto_aprovado") for s in segs_da_cena if s.get("_texto_aprovado")]
    if aprov:
        linhas.append("- **O texto aprovado** (a grafia de tela; espelho › `_texto_aprovado`): %s" % prosa(" ".join(aprov)))
    linhas.append("")
    linhas.append("Uma palavra por linha: índice, palavra, início e fim no vídeo, e o início na cena.")
    linhas.append("```")
    inicios = {s["id"]: s["inSec"] for s in segs_da_cena[1:]}
    marcadas = set()
    for i in idx:
        w = words[i]
        for sid, t in inicios.items():
            if sid not in marcadas and w["start"] >= t - 1e-6:
                linhas.append("— %s começa em %s s (na cena %s) —" % (sid, num(t), num(t - ini)))
                marcadas.add(sid)
        linhas.append("%d\t%s\t%s\t%s\t+%s" % (i, w["w"], num(w["start"]), num(w["end"]), num(w["start"] - ini)))
    linhas.append("```")
    return linhas


def parte_espelho(F, segs_da_cena, idx_seg, notas, ids, inteiras):
    linhas = ["## 2. O espelho", F.fonte("espelho.json", "segmentos[%s]" % ", ".join("%d (id %s)" % (idx_seg[s["id"]], s["id"]) for s in segs_da_cena)), ""]
    mostrados = {"id", "inSec", "dur", "anima", "modo", "titulo", "tese", "ancora", "midia", "_texto_aprovado",
                 "_quadros", "_planos", "_grafias", "needs", "_mergedInto", "_fusao", "_borda"}
    for s in segs_da_cena:
        q_ = s.get("_quadros") or {}
        linhas.append("### %s · %s → %s s (%s s)%s" % (s["id"], num(s["inSec"]), num(s["inSec"] + s["dur"]), num(s["dur"]),
                                                       " · filha de %s" % s["_mergedInto"] if s.get("_mergedInto") else ""))
        linhas.append("- modo %s · midia %s · anima %s · quadros %s–%s a %s fps" % (
            s.get("modo"), s.get("midia"), sim_nao(s.get("anima")), q_.get("in"), q_.get("out"), q_.get("fps")))
        for k in ("titulo", "tese", "ancora"):
            if s.get(k):
                linhas.append("- %s: %s" % (k, prosa(s[k])))
        for p in s.get("_planos") or []:
            linhas.append("- plano %s–%s s · %s · objeto: %s · convocado_por: %s" % (
                num(p.get("de", 0)), num(p.get("ate", 0)), p.get("regime"), prosa(p.get("objeto")), q(p.get("convocado_por"))))
        if s.get("_grafias"):
            linhas.append("- _grafias: %s" % json.dumps(s["_grafias"], ensure_ascii=False))
        needs = s.get("needs") or {}
        # os pedidos de geometria e os dados da cena, inteiros (os dados trazem o número exato e a grafia de tela)
        for g in needs.get("geo") or []:
            linhas.append("- needs.geo: %s" % (json.dumps(g, ensure_ascii=False) if not isinstance(g, str) else prosa(g)))
        for d_ in needs.get("dados") or []:
            linhas.append("- needs.dados: %s" % (prosa(d_) if isinstance(d_, str) else json.dumps(d_, ensure_ascii=False)))
        for k in sorted(k for k in needs if k not in ("geo", "dados")):
            linhas.append("- needs.%s: %s" % (k, prosa(needs[k]) if isinstance(needs[k], str) else json.dumps(needs[k], ensure_ascii=False)))
        # e todo outro campo do segmento, pelo nome: o motivo, a necessidade de mídia, a licença, o relevo, a inscrição, a
        # tela final… (a 1.0 só os nomeava, e a peça abria o espelho por eles: o `_licenca` da s63 traz o crédito na tela)
        for k in sorted(k for k in s.keys() if k not in mostrados):
            v = s[k]
            if v in (None, [], "", {}):
                continue
            linhas.append("- %s: %s" % (k, prosa(v) if isinstance(v, str) else json.dumps(v, ensure_ascii=False)))
    if notas:
        linhas.append("")
        linhas.append("### Notas do espelho que citam a cena (%d)" % len(notas))
        vistos = set()
        for caminho, v in notas:
            r = render_nota(caminho, v, ids, inteiras)
            if r not in vistos:
                vistos.add(r)
                linhas.append(r)
    return linhas


def parte_regencia(F, mae, ids, inteiras, notas):
    reg = F.json("regencia.json")
    if reg is None:
        return ["## 3. A regência", "`%s` ainda não existe." % F.caminho("regencia.json")]
    cenas = reg.get("cenas")
    if not isinstance(cenas, list):
        return ["## 3. A regência", F.fonte("regencia.json"), "", "Aviso: formato que o script não conhece (sem a lista `cenas`)."]
    pos = next((i for i, c in enumerate(cenas) if c.get("id") == mae), None)
    linhas = ["## 3. A regência", F.fonte("regencia.json", "cenas[%s] (id %s); t0 e t1 relativos à cena" % (pos, mae) if pos is not None else "sem a cena"), ""]
    if pos is None:
        linhas.append("A regência não tem a cena %s." % mae)
    else:
        c = cenas[pos]
        linhas.append("- modo %s · regime %s · showpiece %s%s" % (c.get("modo"), c.get("regime"), sim_nao(c.get("showpiece")),
                                                               " · funde %s" % ", ".join(c["funde"]) if c.get("funde") else ""))
        if c.get("regime_porque"):
            linhas.append("- regime_porque: %s" % prosa(c["regime_porque"]))
        extra_c = sorted(k for k in c.keys() if k not in ("id", "inSec", "dur", "modo", "showpiece", "regime", "regime_porque", "beats", "funde"))
        for k in extra_c:
            linhas.append("- %s: %s" % (k, prosa(c[k])))
        ini = c.get("inSec", 0.0)
        for i, b in enumerate(c.get("beats") or []):
            linhas.append("")
            linhas.append("### b%d · %s–%s s na cena (%s–%s no vídeo) · %s · %s%s" % (
                i, num(b.get("t0", 0)), num(b.get("t1", 0)), num(ini + b.get("t0", 0)), num(ini + b.get("t1", 0)),
                b.get("tipo"), b.get("forca"), " · cena_espelho %s" % b["cena_espelho"] if b.get("cena_espelho") else ""))
            linhas.append("- palavras: %s" % q(b.get("palavras")))
            for k in ("exige", "porque"):
                if k in b:
                    linhas.append("- %s: %s" % (k, prosa(b[k])))
            for k in sorted(b.keys()):
                if k in ("t0", "t1", "tipo", "forca", "cena_espelho", "palavras", "exige", "porque"):
                    continue
                v = b[k]
                linhas.append("- %s: %s" % (k, prosa(v) if isinstance(v, str) else json.dumps(v, ensure_ascii=False)))
    if notas:
        linhas.append("")
        linhas.append("### Notas da regência que citam a cena (%d)" % len(notas))
        vistos = set()
        for caminho, v in notas:
            r = render_nota(caminho, v, ids, inteiras)
            if r not in vistos:
                vistos.add(r)
                linhas.append(r)
    return linhas


def parte_conceito(F, segs_da_cena, ids, notas, inteiras):
    con = F.json("conceito-visual.json")
    if con is None:
        return ["## 4. O conceito", "`%s` ainda não existe." % F.caminho("conceito-visual.json")]
    cenas = con.get("cenas") if isinstance(con.get("cenas"), dict) else {}
    linhas = ["## 4. O conceito", F.fonte("conceito-visual.json", "cenas.%s" % ", cenas.".join(s["id"] for s in segs_da_cena)), ""]
    for s in segs_da_cena:
        e = cenas.get(s["id"])
        linhas.append("### %s" % s["id"])
        if e is None:
            linhas.append("- o conceito não tem a cena")
            continue
        for k in ("metafora", "tecnica", "midia_ancora"):
            if k in e:
                linhas.append("- %s: %s" % (k, prosa(e[k])))
        if "showpiece" in e:
            linhas.append("- showpiece: %s" % sim_nao(e["showpiece"]))
        for k in sorted(e.keys()):
            if k not in ("metafora", "tecnica", "midia_ancora", "showpiece"):
                v = e[k]
                linhas.append("- %s: %s" % (k, prosa(v) if isinstance(v, str) else json.dumps(v, ensure_ascii=False)))
    fl = con.get("fluxo") if isinstance(con.get("fluxo"), list) else []
    for i, f in enumerate(fl):
        run = f.get("run") if isinstance(f, dict) else None
        if isinstance(run, list) and set(run) & ids:
            linhas.append("- fluxo[%d]: run %s · fundir %s · nota: %s" % (i, "+".join(run), sim_nao(f.get("fundir")), prosa(f.get("nota"))))
    if con.get("arco"):
        linhas.append("- o `arco` do vídeo (%d caracteres) fica no original" % len(con["arco"]))
    linhas.extend(bloco_notas("Notas do conceito que citam a cena", notas, ids, inteiras))
    return linhas


def parte_textos(F, mae, ids, inteiras, notas):
    tt = F.json("textos-tela.json")
    if tt is None:
        return ["## 5. Os textos de tela", "`%s` ainda não existe." % F.caminho("textos-tela.json")]
    lista = tt.get("_textos_por_cena")
    if not isinstance(lista, list):
        return ["## 5. Os textos de tela", F.fonte("textos-tela.json"), "", "Aviso: formato que o script não conhece (sem `_textos_por_cena`)."]
    # o texto de uma filha (`cena` = o id da filha, como um da s31 em Los Angeles) também é desta cena
    meus = [(i, x) for i, x in enumerate(lista) if isinstance(x, dict) and x.get("cena") in ids]
    meus.sort(key=lambda p: (p[1].get("t0", 0), p[0]))
    linhas = ["## 5. Os textos de tela (%d)" % len(meus),
              F.fonte("textos-tela.json", "_textos_por_cena[cena=%s]; t0 e t1 relativos à cena-mãe" % "|".join(sorted(ids))), ""]
    if not meus:
        linhas.append("Nenhum texto com `cena` = %s." % mae)
    for i, x in meus:
        linhas.append("- [%d] %s–%s s · %s · %s" % (i, num(x.get("t0", 0)), num(x.get("t1", 0)), x.get("papel"), q(x.get("texto"))))
        if x.get("cena") != mae:
            linhas.append("  - cena: %s (o texto está com o id da filha: confira de que cena contam o t0 e o t1)" % x.get("cena"))
        for k in sorted(x.keys()):
            if k in ("cena", "t0", "t1", "papel", "texto", "nota"):
                continue
            v = x[k]
            linhas.append("  - %s: %s" % (k, prosa(v) if isinstance(v, str) else json.dumps(v, ensure_ascii=False)))
        if x.get("nota"):
            linhas.append("  - nota: %s" % prosa(x["nota"]))
    if notas:
        linhas.append("")
        linhas.append("### Notas do textos-tela que citam a cena (%d)" % len(notas))
        vistos = set()
        for caminho, v in notas:
            raiz = caminho.split(".")[0].split("[")[0]
            r = render_nota(caminho, v, ids, inteiras, inteira_na_fonte=raiz in LER_INTEIRO_TEXTOS)
            if r not in vistos:
                vistos.add(r)
                linhas.append(r)
    cons = tt.get("_consertos")
    if isinstance(cons, list):
        n = sum(1 for c in cons if isinstance(c, dict) and cenas_em(str(c.get("cena", ""))) & ids)
        if n:
            linhas.append("- `_consertos`: %d conserto(s) citam a cena; o histórico fica no original" % n)
    return linhas


def procedencia(F, rel_midia):
    pasta, nome = os.path.split(rel_midia)
    rel_proc = "%s/_PROCEDENCIA.json" % pasta
    d = F.json(rel_proc)
    if not isinstance(d, dict):
        return None, None
    for it in d.get("itens") or []:
        if isinstance(it, dict) and it.get("arquivo") == nome:
            return rel_proc, it
    return rel_proc, None


def chaves_do_arquivo(F, rel_midia):
    """[(sha256, de onde)] e a URL do item, pela regra do CLAUDE.md."""
    chaves = []
    c = F.caminho(rel_midia)
    info = {"existe": os.path.isfile(c), "bytes": None, "sha256": None}
    if info["existe"]:
        info["bytes"] = os.path.getsize(c)
        if info["bytes"] <= LIMITE_HASH:
            info["sha256"] = F.sha(rel_midia)
            chaves.append((info["sha256"], "sha256 do arquivo"))
    rel_proc, it = procedencia(F, rel_midia)
    url = None
    if it:
        med = it.get("medido") or {}
        for v, de in ((med.get("sha256"), "medido.sha256 (procedência)"),
                      ((med.get("medido_no_download") or {}).get("sha256"), "o rascunho julgado: medido.medido_no_download.sha256 (procedência)"),
                      (it.get("sha256_rascunho_julgado"), "o rascunho julgado: sha256_rascunho_julgado (procedência)"),
                      (med.get("sha256_do_baixado"), "o baixado: medido.sha256_do_baixado (procedência)")):
            if v and v not in [k for k, _ in chaves]:
                chaves.append((v, de))
        url = it.get("url")
    return info, chaves, url, rel_proc, it


def parte_midias(F, mae, ids, regencia_midias, inteiras, notas):
    con = F.json("_pesquisa/conferencia-midia.json")
    html_rel = "graphics/%s.html" % mae
    html_cita, geo_cita = [], []
    if F.existe(html_rel):
        h = open(F.caminho(html_rel), encoding="utf-8", errors="replace").read()
        for m in RE_MIDIA.findall(h):
            if m not in html_cita:
                html_cita.append(m)
        for m in RE_GEO.findall(h):
            if m not in geo_cita:
                geo_cita.append(m)
    todas = list(html_cita)
    for m in regencia_midias:
        if m["arquivo"] not in todas:
            todas.append(m["arquivo"])
    titulo = "## 6. As mídias e os vereditos (%d)" % len(todas)
    if con is None:
        linhas = [titulo, "`%s` não existe: nenhum veredito." % F.caminho("_pesquisa/conferencia-midia.json"), ""]
        cands = []
    else:
        cands = con.get("candidatos") if isinstance(con.get("candidatos"), list) else []
        linhas = [titulo, F.fonte("_pesquisa/conferencia-midia.json", "candidatos (os vereditos de hoje)"),
                  "As mídias: as que o HTML da cena cita (`%s`) e as do campo `midia` dos beats da regência. Casa pela regra do "
                  "CLAUDE.md (\"A regra da cena\"): o sha256 do arquivo, o do rascunho julgado ou o do baixado (pela procedência), ou "
                  "a URL do item com `mesmo_item: true`." % F.caminho(html_rel), ""]
    por_sha, por_url = {}, {}
    for i, c in enumerate(cands):
        if not isinstance(c, dict):
            continue
        if c.get("sha256"):
            por_sha.setdefault(c["sha256"], []).append(i)
        u = (c.get("fonte") or {}).get("url") if isinstance(c.get("fonte"), dict) else None
        if u:
            por_url.setdefault(u, []).append(i)
    usados = set()
    for rel in todas:
        linhas.append("### `%s`" % rel)
        de_onde = []
        if rel in html_cita:
            de_onde.append("o HTML")
        for m in regencia_midias:
            if m["arquivo"] == rel:
                de_onde.append("regência b%d (%s, %s)" % (m["beat"], m.get("papel") or "?", m.get("estado") or "?"))
        linhas.append("- citado por: %s" % "; ".join(de_onde))
        info, chaves, url, rel_proc, it = chaves_do_arquivo(F, rel)
        if not info["existe"]:
            linhas.append("- o arquivo não existe em `%s`" % F.caminho(rel))
        else:
            linhas.append("- o arquivo: %s bytes · sha256 %s" % (format(info["bytes"], ",").replace(",", "."),
                                                                 "`%s`" % info["sha256"] if info["sha256"] else "não medido (acima de 2 GB)"))
        if rel_proc and it:
            linhas.append("- procedência: `%s` · sha256 `%s` · fonte %s · url %s" % (
                F.caminho(rel_proc), F.sha(rel_proc), prosa(it.get("fonte")), it.get("url")))
        achados = []
        for chave, de in chaves:
            for i in por_sha.get(chave, []):
                achados.append((i, de + " = `%s`" % chave))
        if url:
            for i in por_url.get(url, []):
                if cands[i].get("mesmo_item") is True:
                    achados.append((i, "a URL do item, com mesmo_item true"))
        visto_i = {}
        for i, de in achados:
            visto_i.setdefault(i, []).append(de)
        da_cena = [i for i in visto_i if cands[i].get("cena") in ids]
        outras = [i for i in visto_i if cands[i].get("cena") not in ids]
        if not visto_i:
            linhas.append("- **nenhum veredito casa com este arquivo** em `candidatos`")
        for i in da_cena:
            usados.add(i)
            c = cands[i]
            linhas.append("- veredito desta cena: **%s** · candidatos[%d] · id `%s` · cena %s · lote %s" % (
                c.get("veredito"), i, c.get("id"), c.get("cena"), c.get("lote", "—")))
            linhas.append("  - casa por: %s" % "; ".join(visto_i[i]))
            fc = c.get("frase_coberta") if isinstance(c.get("frase_coberta"), dict) else None
            if fc:
                linhas.append("  - frase coberta: %s · %s–%s s · janela_provisoria %s" % (
                    q(fc.get("texto")), fc.get("t0"), fc.get("t1"), sim_nao(fc.get("janela_provisoria"))))
            primeiros = ("lugar_na_origem", "data_na_origem", "aviso_de_ano", "credito_na_tela", "motivo", "condicao",
                         "mesmo_item", "pendente", "excecao_lucas", "trocar_por", "preferencia")
            # e todo outro campo do veredito, pelo nome (a janela no clipe, o uso, o crédito na descrição, a regra do
            # aviso do ano…): a 1.0 os calava, e a s72 do vídeo 4 perdia a janela_no_clipe [28.9, 33.4]
            for k in list(primeiros) + sorted(k for k in c if k not in primeiros and k not in VEREDITO_NO_CABECALHO and k not in VEREDITO_SO_NO_ORIGINAL):
                if k in c and c[k] not in (None, [], ""):
                    v = c[k]
                    linhas.append("  - %s: %s" % (k, sim_nao(v) if isinstance(v, bool) else (prosa(v) if isinstance(v, str) else json.dumps(v, ensure_ascii=False))))
            f = c.get("fonte") if isinstance(c.get("fonte"), dict) else {}
            if f:
                linhas.append("  - fonte: %s · %s · %s" % (f.get("origem"), f.get("url"), prosa(f.get("autor") or f.get("artista") or "—")))
                resto = {k: v for k, v in f.items() if k not in ("origem", "url", "autor", "artista")}
                if resto:
                    linhas.append("  - fonte, o resto: %s" % json.dumps(resto, ensure_ascii=False))
            so_no_original = [k for k in VEREDITO_SO_NO_ORIGINAL if c.get(k) not in (None, [], "", {})]
            if so_no_original:
                linhas.append("  - no original, sem copiar: %s" % ", ".join("`%s`" % k for k in so_no_original))
        if outras:
            linhas.append("- o mesmo arquivo noutras cenas: %s" % "; ".join(
                "%s **%s** (candidatos[%d], lote %s)" % (cands[i].get("cena"), cands[i].get("veredito"), i, cands[i].get("lote", "—")) for i in outras))
    resto = [i for i, c in enumerate(cands) if isinstance(c, dict) and c.get("cena") in ids and i not in usados]
    if resto:
        linhas.append("")
        linhas.append("### Outros vereditos desta cena (arquivos que a cena não cita)")
        for i in resto:
            c = cands[i]
            linhas.append("- candidatos[%d] · `%s` · cena %s · **%s** · lote %s" % (i, c.get("id"), c.get("cena"), c.get("veredito"), c.get("lote", "—")))
    if con is not None and isinstance(con.get("substituidos"), list):
        n = sum(1 for c in con["substituidos"] if isinstance(c, dict) and c.get("cena") in ids)
        if n:
            linhas.append("- `substituidos`: %d veredito(s) superado(s) desta cena, só no original" % n)
    if geo_cita:
        linhas.append("")
        linhas.append("### Geometria, base e dados que o HTML cita (fora do conferente)")
        linhas.append("- " + "; ".join("`%s`" % g for g in geo_cita))
    linhas.extend(bloco_notas("Notas da conferência que citam a cena", notas, ids, inteiras))
    return linhas


def parte_laudo(F, mae, inteiro):
    rel = "qc/%s.laudo.json" % mae
    d = F.json(rel)
    if d is None:
        return ["## 7. O laudo", "`%s` não existe (a cena ainda não foi julgada)." % F.caminho(rel)]
    linhas = ["## 7. O laudo", F.fonte(rel), ""]
    if not isinstance(d, dict):
        return linhas + ["Aviso: formato que o script não conhece."]
    linhas.append("- aprovado: %s · gatesDuros: %s" % (sim_nao(d.get("aprovado")), json.dumps(d.get("gatesDuros"), ensure_ascii=False)))
    for k in ("motivo", "julgamento"):
        if d.get(k):
            linhas.append("- %s: %s" % (k, prosa(d[k]) if isinstance(d[k], str) else json.dumps(d[k], ensure_ascii=False)))
    lentes = d.get("lentes") if isinstance(d.get("lentes"), list) else []
    if lentes:
        linhas.append("- as notas: %s" % " · ".join("%s %s" % (l.get("lente"), l.get("nota")) for l in lentes))
        for l in lentes:
            for c in l.get("correcoes") or []:
                linhas.append("- correção pedida (%s): %s" % (l.get("lente"), prosa(c)))
        for l in lentes:
            nota = l.get("nota")
            baixa = isinstance(nota, (int, float)) and nota < 7
            if inteiro or baixa:
                for p in l.get("problemas") or []:
                    linhas.append("- problema (%s, nota %s): %s" % (l.get("lente"), nota, prosa(p)))
        if not inteiro:
            n = sum(len(l.get("problemas") or []) for l in lentes if not (isinstance(l.get("nota"), (int, float)) and l["nota"] < 7))
            if n:
                linhas.append("- os outros %d problemas (das lentes com nota ≥ 7) ficam no original (`--laudo-inteiro` os traz)" % n)
    outros = sorted(k for k in d.keys() if k not in ("cena", "aprovado", "gatesDuros", "motivo", "julgamento", "lentes"))
    if outros:
        linhas.append("- no original, sem copiar: %s" % ", ".join("`%s`" % k for k in outros))
    return linhas


def parte_excecoes(F, mae, ids):
    rel = "qc/_excecoes-portao.json"
    d = F.json(rel)
    if d is None:
        return ["## 8. As exceções de portão", "`%s` não existe." % F.caminho(rel)]
    lista = d.get("excecoes") if isinstance(d, dict) and isinstance(d.get("excecoes"), list) else []
    minhas = [(i, e) for i, e in enumerate(lista) if isinstance(e, dict) and e.get("cena") in ids]
    linhas = ["## 8. As exceções de portão (%d)" % len(minhas), F.fonte(rel, "excecoes[cena=%s]" % mae), ""]
    html = F.caminho("graphics/%s.html" % mae)
    sha1 = hashlib.sha1(open(html, "rb").read()).hexdigest() if os.path.isfile(html) else None
    if not minhas:
        linhas.append("Nenhuma exceção com `cena` = %s." % mae)
    for i, e in minhas:
        s1 = e.get("sha1_html")
        cmp_ = "" if not sha1 else (" (= o HTML de hoje)" if s1 == sha1 else " (≠ o HTML de hoje, `%s`)" % sha1[:12])
        linhas.append("- excecoes[%d] · %s · sha1_html `%s`%s" % (i, e.get("portao"), s1, cmp_))
        linhas.append("  - reprovacao: %s" % q(e.get("reprovacao")))
        for k in ("classe", "classe_da_triagem"):
            if e.get(k):
                linhas.append("  - %s: %s" % (k, prosa(e[k])))
        dl = e.get("decisao_lucas") if isinstance(e.get("decisao_lucas"), dict) else {}
        if dl:
            linhas.append("  - a decisão do Lucas: %s · %s" % (q(dl.get("mensagem")), prosa(dl.get("quando"))))
            for k in sorted(dl):
                if k not in ("mensagem", "quando") and dl[k] not in (None, [], ""):
                    linhas.append("    - %s: %s" % (k, prosa(dl[k]) if isinstance(dl[k], str) else json.dumps(dl[k], ensure_ascii=False)))
        if e.get("vale_para"):
            linhas.append("  - vale_para: %s" % prosa(e["vale_para"]))
        # e todo outro campo da exceção, pelo nome (falha_no_portao, medido_em, observacao…); o histórico só no original
        ja_ditos = {"cena", "portao", "sha1_html", "reprovacao", "classe", "classe_da_triagem", "decisao_lucas", "vale_para"}
        for k in ["triagem", "trecho_mostrado", "nota"] + sorted(k for k in e if k not in ja_ditos and k not in ("triagem", "trecho_mostrado", "nota") and k not in EXCECAO_SO_NO_ORIGINAL):
            if e.get(k) not in (None, [], ""):
                linhas.append("  - %s: %s" % (k, prosa(e[k]) if isinstance(e[k], str) else json.dumps(e[k], ensure_ascii=False)))
        hist = [k for k in EXCECAO_SO_NO_ORIGINAL if e.get(k) not in (None, [], "")]
        if hist:
            linhas.append("  - no original, sem copiar: %s" % ", ".join("`%s`" % k for k in hist))
    sup = d.get("superadas") if isinstance(d, dict) else None
    if isinstance(sup, list):
        n = sum(1 for e in sup if isinstance(e, dict) and e.get("cena") in ids)
        if n:
            linhas.append("- `superadas`: %d exceção(ões) antiga(s) desta cena, só no original" % n)
    return linhas


def parte_outras(F, mae, ids, ja_por_arquivo, inteiras):
    """Toda frase que cita a cena e que as partes 2 a 8 não trazem (a nota que a cita no meio do texto, uma decisão do
    Lucas que a nomeia, a entrada de outra cena que fala dela), em trecho, com o arquivo e o caminho. Sem isto, a regra
    que cita a cena no meio da frase sumia do pacote sem aviso (a página "Dois caminhos para a cota": "Nenhuma regra, portão ou
    peça sai"). A regência só mostra a entrada da mãe (parte 3): a entrada de uma filha, se houver, vem aqui."""
    linhas = ["## 9. As outras menções à cena",
              "Cada frase destes arquivos que cita a cena%s fora do que as partes 2 a 6 já trazem: a nota que a cita no meio do "
              "texto, a lista, a decisão que a nomeia e a entrada de outra cena que fala dela (\"da sNN\"). Vem em trecho (o começo "
              "e o texto em volta de cada menção), com o caminho no arquivo; a frase inteira está no original. Só o histórico "
              "fica de fora (`_consertos` do textos-tela, `substituidos` da conferência), contado nas partes 5 e 6."
              % (" ou uma filha" if len(ids) > 1 else ""), ""]
    total = 0
    for rel, lista_nome, chave, historico in OUTRAS_FONTES:
        d = F.json(rel)
        if not isinstance(d, dict):
            continue
        proprias, de_quem = set(), {}
        lista = d.get(lista_nome)
        if isinstance(lista, list):
            for i, e in enumerate(lista):
                if not isinstance(e, dict):
                    continue
                cam = "%s[%d]" % (lista_nome, i)
                dono = e.get(chave)
                if (dono == mae if rel == "regencia.json" else dono in ids) or (rel == "espelho.json" and e.get("_mergedInto") in ids):
                    proprias.add(cam)
                elif isinstance(dono, str):
                    de_quem[cam] = dono
        elif isinstance(lista, dict) and chave is None:
            for k in lista:
                cam = "%s.%s" % (lista_nome, k)
                if k in ids:
                    proprias.add(cam)
                else:
                    de_quem[cam] = k
        achadas = mencoes_restantes(d, ids, set(PULAR_META) | set(historico), proprias, ja_por_arquivo.get(rel, []))
        if not achadas:
            continue
        linhas.append("### `%s` (%d)" % (F.caminho(rel), len(achadas)))
        vistos = set()
        for cam, txt in achadas:
            dono = next((de_quem[p] for p in de_quem if cam == p or cam.startswith(p + ".") or cam.startswith(p + "[")), None)
            if txt.strip() in ids and re.search(r"\[\d+\]$", cam):
                r = "- `%s › %s`%s: a cena está nesta lista" % (rel, re.sub(r"\[\d+\]$", "", cam), " (da %s)" % dono if dono else "")
            elif txt.strip() in ids:
                r = "- `%s › %s`%s: %s" % (rel, cam, " (da %s)" % dono if dono else "", txt.strip())
            else:
                r = "- `%s › %s`%s: %s" % (rel, cam, " (da %s)" % dono if dono else "", trecho_em_volta(txt, ids, inteiras))
            if r not in vistos:
                vistos.add(r)
                linhas.append(r)
                total += 1
    if total == 0:
        linhas.append("Nenhuma: tudo que cita a cena já está nas partes 2 a 6.")
    return linhas


# ---------------------------------------------------------------- o pacote

def montar(F, pedido, args):
    esp = F.json("espelho.json")
    segs = esp.get("segmentos") if isinstance(esp, dict) else None
    if not isinstance(segs, list):
        raise SystemExit("formato do espelho que o script não conhece (sem `segmentos`)")
    por_id = {s.get("id"): s for s in segs if isinstance(s, dict)}
    idx_seg = {s.get("id"): i for i, s in enumerate(segs) if isinstance(s, dict)}
    if pedido not in por_id:
        return None, "a cena %s não existe em %s" % (pedido, F.caminho("espelho.json"))
    mae = por_id[pedido].get("_mergedInto") or pedido
    if mae not in por_id:
        return None, "a cena %s é filha de %s (`_mergedInto`), que não existe em %s" % (pedido, mae, F.caminho("espelho.json"))
    filhos = [s["id"] for s in segs if isinstance(s, dict) and s.get("_mergedInto") == mae]
    segs_da_cena = [por_id[mae]] + [por_id[f] for f in filhos]
    ids = {mae} | set(filhos)
    seg = por_id[mae]
    avisos = []
    fim_filhas = max((s["inSec"] + s["dur"] for s in segs_da_cena), default=0)
    if filhos and abs(fim_filhas - (seg["inSec"] + seg["dur"])) > 0.002:
        avisos.append("a dur da mãe (%s) não cobre a última filha (fim %s)" % (num(seg["dur"]), num(fim_filhas)))

    reg = F.json("regencia.json")
    regencia_midias = []
    if isinstance(reg, dict) and isinstance(reg.get("cenas"), list):
        for c in reg["cenas"]:
            if c.get("id") == mae:
                for bi, b in enumerate(c.get("beats") or []):
                    for m in b.get("midia") or []:
                        if isinstance(m, dict) and m.get("arquivo"):
                            a = m["arquivo"]
                            pre = "out/%s/" % F.proj
                            if a.startswith(pre):
                                a = a[len(pre):]
                            regencia_midias.append({"arquivo": a, "beat": bi, "papel": m.get("papel"), "estado": m.get("estado")})

    # as notas laterais de cada arquivo (as mesmas que as partes 2, 3 e 5 mostram; a parte 9 traz o resto)
    meta = set(PULAR_META)
    tt = F.json("textos-tela.json")
    notas_esp = notas_laterais(esp, ids, pular=meta | {"segmentos"})
    notas_reg = notas_laterais(reg, ids, pular=meta | {"cenas"}) if isinstance(reg, dict) else []
    notas_tt = (notas_laterais(tt, ids, pular=meta | {"_textos_por_cena", "_consertos"}, ler_inteiro=LER_INTEIRO_TEXTOS)
                if isinstance(tt, dict) and isinstance(tt.get("_textos_por_cena"), list) else [])
    con = F.json("conceito-visual.json")
    fluxo_mostrado = ["fluxo[%d]" % i for i, f in enumerate((con.get("fluxo") or []) if isinstance(con, dict) else [])
                      if isinstance(f, dict) and isinstance(f.get("run"), list) and set(f["run"]) & ids]
    notas_con = (notas_laterais(con, ids, pular=meta | {"cenas", "fluxo"})
                 if isinstance(con, dict) and isinstance(con.get("cenas"), dict) else [])
    cm = F.json("_pesquisa/conferencia-midia.json")
    notas_cm = (notas_laterais(cm, ids, pular=meta | {"candidatos", "substituidos"})
                if isinstance(cm, dict) and isinstance(cm.get("candidatos"), list) else [])
    if isinstance(reg, dict) and isinstance(reg.get("cenas"), list):
        rc = next((c for c in reg["cenas"] if isinstance(c, dict) and c.get("id") == mae), None)
        if rc and isinstance(rc.get("inSec"), (int, float)) and isinstance(rc.get("dur"), (int, float)) and (
                abs(rc["inSec"] - seg["inSec"]) > 0.05 or abs(rc["dur"] - seg["dur"]) > 0.05):
            avisos.append("a regência tem outra janela para a cena (%s → %s s; o espelho, %s → %s s): os beats podem estar fora de "
                          "lugar, e a regência pode ser de antes do espelho de hoje" % (
                              num(rc["inSec"]), num(rc["inSec"] + rc["dur"]), num(seg["inSec"]), num(seg["inSec"] + seg["dur"])))
    ja = {"espelho.json": [c for c, _ in notas_esp], "regencia.json": [c for c, _ in notas_reg],
          "textos-tela.json": [c for c, _ in notas_tt], "conceito-visual.json": fluxo_mostrado + [c for c, _ in notas_con],
          "_pesquisa/conferencia-midia.json": [c for c, _ in notas_cm]}

    linhas = parte_cabecalho(F, pedido, mae, filhos, seg, pedido, avisos)
    for parte in (parte_fala(F, segs_da_cena, seg),
                  parte_espelho(F, segs_da_cena, idx_seg, notas_esp, ids, args["notas_inteiras"]),
                  parte_regencia(F, mae, ids, args["notas_inteiras"], notas_reg),
                  parte_conceito(F, segs_da_cena, ids, notas_con, args["notas_inteiras"]),
                  parte_textos(F, mae, ids, args["notas_inteiras"], notas_tt),
                  parte_midias(F, mae, ids, regencia_midias, args["notas_inteiras"], notas_cm),
                  parte_laudo(F, mae, args["laudo_inteiro"]),
                  parte_excecoes(F, mae, ids),
                  parte_outras(F, mae, ids, ja, args["notas_inteiras"])):
        linhas.append("")
        linhas.extend(parte)
    return mae, "\n".join(linhas) + "\n"


def main(argv):
    pos, args = [], {"saida": None, "laudo_inteiro": False, "notas_inteiras": False}
    for a in argv:
        if a.startswith("--saida="):
            args["saida"] = a.split("=", 1)[1]
        elif a == "--laudo-inteiro":
            args["laudo_inteiro"] = True
        elif a == "--notas-inteiras":
            args["notas_inteiras"] = True
        elif a.startswith("--"):
            print("uso: python -X utf8 -B ferramentas/pacote-cena.py <proj> <cena> [<cena>…] [--saida=<pasta>] [--laudo-inteiro] [--notas-inteiras]"
                  "\n(opção desconhecida: %s)" % a, file=sys.stderr)
            return 2
        else:
            pos.append(a)
    if len(pos) < 2:
        print("uso: python -X utf8 -B ferramentas/pacote-cena.py <proj> <cena> [<cena>…] [--saida=<pasta>] [--laudo-inteiro] [--notas-inteiras]", file=sys.stderr)
        return 2
    if not os.path.isfile("canal.json") or not os.path.isdir("out"):
        print("rode da raiz do canal (onde estão canal.json e out/)", file=sys.stderr)
        return 2
    proj, cenas = pos[0], pos[1:]
    F = Fontes(proj)
    for rel in ("words.json", "espelho.json"):
        if not F.existe(rel):
            print("não existe %s: sem a fala e a janela não há pacote" % F.caminho(rel), file=sys.stderr)
            return 2
    saida = args["saida"] or "out/%s/_tmp/pacotes" % proj
    os.makedirs(saida, exist_ok=True)
    codigo = 0
    feitos = set()
    for cena in cenas:
        mae, texto = montar(F, cena, args)
        if mae is None:
            print("✗ %s" % texto, file=sys.stderr)
            codigo = 1
            continue
        destino = os.path.join(saida, "%s.md" % mae).replace("\\", "/")
        if mae in feitos:
            print("= %s → %s (já gravado nesta rodada)" % (cena, destino))
            continue
        with open(destino, "w", encoding="utf-8", newline="\n") as f:
            f.write(texto)
        feitos.add(mae)
        nota = "" if mae == cena else " (pedida como %s, filha de %s)" % (cena, mae)
        print("✓ %s%s → %s · %d caracteres" % (mae, nota, destino, len(texto)))
    return codigo


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
