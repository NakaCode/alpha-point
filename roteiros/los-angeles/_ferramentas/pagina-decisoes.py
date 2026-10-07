# pagina-decisoes.py — a página do vídeo 2 para o Lucas: o título (5 finalistas), o roteiro inteiro com a narração, e as
# outras perguntas que esperam por ele. Lê o roteiro-narrador.md e a variante do gancho, e grava
# out/los-angeles/_tmp/pagina/video2-roteiro.html (fora do git). A resposta dele vem pelo chat, nunca pela página.
#   python roteiros/los-angeles/_ferramentas/pagina-decisoes.py [--audio=narracao.mp3]
import html, re, sys, hashlib
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[3]
audio = next((a.split("=", 1)[1] for a in sys.argv[1:] if a.startswith("--audio=")), None)


def partes(arq):
    out, atual = [], None
    texto = (RAIZ / arq).read_text(encoding="utf-8").replace("\r\n", "\n")
    for bloco in re.split(r"\n\s*\n", texto):
        b = bloco.strip()
        if not b or b.startswith("#") or b.startswith(">"):
            continue
        m = re.match(r"<!--\s*(.+?)\s*-->$", b, re.S)
        if m:
            atual = {"titulo": m.group(1), "pars": []}
            out.append(atual)
            continue
        b = re.sub(r"<!--.*?-->", "", b, flags=re.S).strip()
        if b:
            if atual is None:
                atual = {"titulo": "", "pars": []}
                out.append(atual)
            atual["pars"].append(" ".join(l.strip() for l in b.split("\n")))
    return out


rot = partes("roteiros/los-angeles/roteiro-narrador.md")
var = partes("roteiros/los-angeles/variantes/gancho-hoje.md")
falado = "\n\n".join(p for s in rot for p in s["pars"])
palavras = len(re.findall(r"[A-Za-z0-9][A-Za-z0-9'’.,$%-]*", falado))
sha = hashlib.sha256(falado.encode("utf-8")).hexdigest()[:12]


def nome_parte(t):
    t = re.sub(r"^(p\d+)\s*·\s*", "", t)
    t = re.sub(r"^gancho\s*·\s*", "Gancho · ", t)
    return t


E = html.escape
blocos = []
for s in rot:
    pars = "".join(f"<p>{E(p)}</p>" for p in s["pars"])
    blocos.append(f'<section class="parte"><h4>{E(nome_parte(s["titulo"]))}</h4>{pars}</section>')
var_pars = "".join(f"<p>{E(p)}</p>" for s in var for p in s["pars"])

TITULOS = [
    ("1", "Why Los Angeles Drew a 15-Mile Strip in 1906 (It Had No Coast)", "o de 1906 (o roteiro como está)",
     "A opção 1 da pauta, com “Grew” trocado por “Drew”, a palavra que a voz usa. Foi o mais firme nas duas provas: nada caiu na refutação, e os três leitores a frio deram a maior nota (7,7 de 10). A faixa de 15 milhas aparece na tela desde o começo.",
     "Recomendado"),
    ("2", "Why Los Angeles Had NO Coastline Until 1909", "qualquer um",
     "Molde do vídeo do Geoff que você mandou, com a palavra da virada em caixa alta (seria o primeiro título do canal assim). O júri preferiu “Los Angeles Had No Coastline Until 1909. It Voted One In.”, mas os leitores a frio gostaram mais desta forma, e ela não tem a ressalva do “it voted” (foram três cidades votando).",
     ""),
    ("3", "Why Los Angeles Narrows to Half a Mile for Nine Miles", "o de hoje (a variante do começo)",
     "O número que surpreende hoje no mapa. A forma do júri era “Is Only Half a Mile Wide”, que, lida rápido, parece dizer que a cidade inteira tem meia milha; “Narrows to” evita isso. Pede a variante do começo e uma rodada pequena de texto.",
     ""),
    ("4", "Why Los Angeles Drew a Strip in 1906 to TOUCH Two Harbor Towns", "o de 1906",
     "A tese do vídeo no título: a lei só deixava juntar cidades que se tocassem. A forma do júri (“to TOUCH Its Port”) caiu na refutação, porque a faixa não chegou ao porto: parou na divisa das duas cidades. Esta é a forma corrigida.",
     ""),
    ("5", "Why Is Los Angeles Shaped Like This?", "o de hoje (a variante do começo)",
     "O que você pediu para estar na disputa. É a pergunta que a voz faz aos 36 s. Risco: promete a forma inteira, e o vídeo explica a faixa; a miniatura teria de apontar a faixa. Com o parêntese, “Why Is Los Angeles Shaped Like This? (No Coast Until 1909)”, ficou mais firme na refutação.",
     ""),
]
cards = "".join(
    f'<article class="titulo"><div class="t-cab"><span class="num">{n}</span>'
    + (f'<span class="selo">{E(sel)}</span>' if sel else "")
    + f'</div><p class="t-en" lang="en">{E(t)}</p><p class="t-meta">{len(t)} caracteres · mapa do começo: {E(c)}</p><p>{E(d)}</p></article>'
    for n, t, c, d, sel in TITULOS
)

if audio:
    player = (f'<audio id="narracao" controls preload="metadata" src="{E(audio)}"></audio>'
              '<p class="nota">A narração inteira na voz do canal, no ElevenLabs v4, com o começo de 1906 (12 min 11 s; o vídeo '
              'tem mais 20 s de tela final). A conferência por transcrição achou todas as palavras do texto: as poucas diferenças eram do jeito de a transcrição escrever, conferidas em recortes curtos. Dois pontos a '
              'transcrição ouviu com menos certeza: o “eleven” no fim da frase em 2:50, e o “his” de “what his never measured” '
              'em 3:21 (ela ouviu “has”). Se algum soar errado, ou um nome soar errado (San Pedro, Mendell), aquele parágrafo '
              'se refaz sozinho.</p>')
else:
    player = '<p class="nota">A narração entra aqui quando ficar pronta.</p>'

CSS = """
  /* Layout: uma coluna de leitura sobre a mesa azul do canal; o roteiro numa folha de papel; as perguntas numeradas na
     ordem em que ele responde. Página só escura de propósito, como a das propostas de movimento. */
  :root {
    --mesa: #0E1726; --mesa-funda: #0A111C; --giz: #F4F1EA; --giz-2: rgba(244,241,234,.72); --giz-3: rgba(244,241,234,.16);
    --papel: #ECE8DF; --tinta-escura: #14181F; --tinta-2: rgba(20,24,31,.66); --ambar: #F5A524; --grifo: rgba(245,165,36,.35);
    --display: "Barlow Condensed", "Arial Narrow", Arial, sans-serif; --corpo: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
    --maquina: "Courier Prime", "Courier New", Courier, monospace; color-scheme: dark;
  }
  * { box-sizing: border-box; }
  body { background: var(--mesa); color: var(--giz); font: 400 1rem/1.6 var(--corpo); }
  .pagina { max-width: 980px; margin: 0 auto; padding-inline: 20px; padding-block: 40px 72px; display: grid; gap: 52px; }
  h1, h2, h3, h4 { font-family: var(--display); font-weight: 800; text-transform: uppercase; letter-spacing: .01em; line-height: 1.02; margin: 0; text-wrap: balance; }
  h1 { font-size: clamp(2.6rem, 7vw, 4.4rem); } h2 { font-size: clamp(1.7rem, 4vw, 2.4rem); }
  p { margin: 0; max-width: 68ch; }
  .rotulo { font: 700 .78rem/1 var(--corpo); letter-spacing: .14em; text-transform: uppercase; color: var(--giz-2); }
  .abertura, .q { display: grid; gap: 16px; }
  .lista { display: grid; gap: 8px; margin: 0; padding-left: 1.3em; }
  .lista li::marker { color: var(--ambar); font-weight: 700; }
  .titulos { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 14px; }
  .titulo { border: 1px solid var(--giz-3); background: var(--mesa-funda); padding: 18px; display: grid; gap: 10px; align-content: start; min-width: 0; }
  .t-cab { display: flex; gap: 10px; align-items: center; }
  .num { font: 800 2.2rem/1 var(--display); color: var(--ambar); }
  .selo { font: 700 .72rem/1 var(--corpo); letter-spacing: .1em; text-transform: uppercase; background: var(--ambar); color: var(--mesa); padding: 5px 8px; }
  .t-en { font: 700 1.2rem/1.3 var(--corpo); }
  .t-meta, .nota { color: var(--giz-2); font-size: .9rem; }
  .folha { background: var(--papel); color: var(--tinta-escura); padding: 28px clamp(18px, 4vw, 40px) 36px; display: grid; gap: 22px; box-shadow: 0 2px 4px rgba(0,0,0,.35), 0 18px 46px rgba(0,0,0,.45); }
  .folha .rotulo { color: var(--tinta-2); }
  .parte { display: grid; gap: 12px; }
  .parte h4 { font-size: 1.25rem; color: var(--tinta-escura); border-bottom: 1px solid rgba(20,24,31,.18); padding-bottom: 6px; }
  .parte p { font: 400 1.04rem/1.65 var(--maquina); }
  .variante { border-left: 4px solid var(--ambar); background: rgba(245,165,36,.12); padding: 14px 16px; display: grid; gap: 10px; }
  .variante p { font: 400 1rem/1.6 var(--maquina); }
  audio { width: 100%; }
  a { color: var(--ambar); }
  a:focus-visible, audio:focus-visible { outline: 3px solid var(--ambar); outline-offset: 3px; }
  .resposta { background: var(--papel); color: var(--tinta-escura); padding: 26px; display: grid; gap: 12px; }
  .resposta h2 { color: var(--tinta-escura); }
  .resposta code { font: 700 1rem var(--maquina); background: var(--grifo); padding: 0 4px; }
  .resposta .rotulo { color: var(--tinta-2); }
  @media (max-width: 640px) { .pagina { padding-inline: 16px; gap: 40px; } }
"""

MOV = "https://claude.ai/artifact/C19n5oEqq3KzrTt9oe1iYk"
pagina = f"""<title>Vídeo 2 · Los Angeles</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=Courier+Prime:wght@400;700&family=Inter:wght@400;500;600;700&display=swap">
<style>{CSS}</style>
<main class="pagina">
  <header class="abertura">
    <span class="rotulo">Alpha Point · vídeo 2 · 07/10/2026</span>
    <h1>Los Angeles: roteiro e título</h1>
    <p>O roteiro está pronto e revisado. Passou pelos quatro críticos e pela checagem de fatos, com tudo conferido no dossiê. São {palavras:,} palavras, cerca de {palavras / 184:.0f} minutos de fala. Abaixo, o que depende de você, na ordem.</p>
    <ol class="lista">
      <li><b>O título</b>, entre 5 finalistas. Ele decide também com que mapa o vídeo começa.</li>
      <li><b>O roteiro</b>: ler ou ouvir uma vez.</li>
      <li><b>O movimento</b> das páginas sobre a mesa: A, B ou C, <a href="{MOV}">na outra página</a>.</li>
      <li><b>O ilustrador</b>: um teste, sim ou não.</li>
      <li><b>O mapa antigo</b> como contorno na tela.</li>
      <li><b>O ritmo da voz</b>, depois de ouvir.</li>
    </ol>
  </header>

  <section class="q" aria-labelledby="q1">
    <span class="rotulo">1 · O título</span>
    <h2 id="q1">Qual título?</h2>
    <p>Cinco finalistas, de 30 escritos em cinco moldes. Cada um passou por um júri, por um refutador de fatos e por três leitores americanos lendo a frio. O título com “15 miles” pede o vídeo começando no mapa de 1906. Os marcados “de hoje” pedem o mapa de hoje no começo: a troca é de dois parágrafos.</p>
    <div class="titulos">{cards}</div>
  </section>

  <section class="q" aria-labelledby="q2">
    <span class="rotulo">2 · O roteiro</span>
    <h2 id="q2">O texto, para ler ou ouvir</h2>
    {player}
    <div class="folha" lang="en">
      <span class="rotulo">Narração · revisão {sha} · começo com o mapa de 1906</span>
      {"".join(blocos)}
      <div class="variante"><span class="rotulo">A variante do começo, com o mapa de hoje (títulos 3 e 5)</span>{var_pars}</div>
    </div>
  </section>

  <section class="q" aria-labelledby="q3">
    <span class="rotulo">3 · O movimento</span>
    <h2 id="q3">Mais movimento na mesa</h2>
    <p>As três propostas (A, B e C), lado a lado com o de hoje, estão em <a href="{MOV}">Movimento na mesa</a>. A escolha entra na fase das cenas, e nada para enquanto você decide.</p>
  </section>

  <section class="q" aria-labelledby="q4">
    <span class="rotulo">4 · O ilustrador</span>
    <h2 id="q4">Testar o ilustrador?</h2>
    <p>É um pacote que ensina o nosso editor-de-arte a desenhar animações técnicas com mais capricho: proporção, perspectiva, peças que se encaixam. Não entra nenhum agente novo. O teste seria numa cópia de uma cena do Juneau (a etiqueta de preço no fio), sem gastar crédito e sem mexer no vídeo entregue. Se ficar bom, ele entra no vídeo 2 só nas cenas que explicam um mecanismo, como o quebra-mar segurando as ondas ou a draga.</p>
  </section>

  <section class="q" aria-labelledby="q5">
    <span class="rotulo">5 · O mapa antigo</span>
    <h2 id="q5">O contorno de 1906 pode vir de um mapa da época?</h2>
    <p>Os mapas de 1850, 1906 e 1909 foram desenhados a partir do mapa oficial de anexações da cidade, de 1916, que é domínio público. Ele foi encaixado no terreno com precisão de 50 a 100 metros, e as medidas batem com o dossiê: a faixa de 1906 tem 14,84 milhas. A alternativa seria a camada do condado, que não tem licença aberta. Um mapa antigo digitalizado ainda não está na lista de fontes aprovadas em 27/09, por isso a pergunta.</p>
  </section>

  <section class="q" aria-labelledby="q6">
    <span class="rotulo">6 · O ritmo</span>
    <h2 id="q6">A voz está no ritmo certo?</h2>
    <p>No v4, a voz do canal fala a cerca de 184 palavras por minuto. No Juneau foram 171, e a marca pede de 150 a 160. O v4 não aceita ajuste de velocidade: para ir mais devagar, seria preciso uma voz nova, feita como a calma do Juneau, e narrar de novo (uns 2 mil créditos).</p>
  </section>

  <section class="resposta" aria-labelledby="q-resp">
    <span class="rotulo">Como responder</span>
    <h2 id="q-resp">No chat do Claude, numa mensagem só</h2>
    <p>Por exemplo: <code>título 1, roteiro ok, movimento B, ilustrador sim, mapa antigo sim, ritmo ok</code>. Pode responder só uma parte, e o resto espera.</p>
  </section>
</main>
"""
saida = RAIZ / "out/los-angeles/_tmp/pagina/video2-roteiro.html"
saida.parent.mkdir(parents=True, exist_ok=True)
saida.write_text(pagina, encoding="utf-8", newline="\n")
print(f"gravado: {saida.relative_to(RAIZ).as_posix()} · {palavras} palavras · revisão {sha} · áudio: {audio or 'nenhum'}")
