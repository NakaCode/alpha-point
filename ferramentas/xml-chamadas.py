"""As chamadas e a marca d'água dentro do XML do Premiere, do vídeo 3 em diante.

    python ferramentas/xml-chamadas.py <proj> [--sem-marca] [--seco]      (da raiz do canal, DEPOIS do finalizar.mjs)

Decisões do Lucas (09/10/2026): "Neste eu farei manual, mas nos próximos quero que já venham no XML" (as chamadas) e a marca
d'água "Gravada no vídeo, pelo XML", com 100 px e 30 % de opacidade (marca/identidade.md §8; marca/cta.md, "O que falta").
O alfa dos .mov foi conferido no Premiere no vídeo 2: "Saiu sim transparente".

O que faz, sem tocar no motor:
- guarda o XML do finalizar em out/<proj>/<proj>-POS.motor.xml (na 1ª vez; se o finalizar rodar de novo, o XML novo vira a base);
- põe na V3 cada chamada de out/<proj>/regencia.json › _chamadas: o arquivo out/<proj>/cta/<peca>-<lugar>.mov, a partir do quadro
  round(inSec × 30), com o comprimento do próprio .mov (a peça não se corta nem se estica, cta.md §8);
- põe na V4 a marca d'água (marca/logo/agulha/marca-dagua-4k.png: o quadro 3840 × 2160 transparente com o disco de 100 px a 30 %,
  no canto de cima à direita), do quadro 0 ao fim da sequência. --sem-marca a deixa de fora;
- a vinheta de apresentação (Lucas, 14/10/2026; marca/vinheta/vinheta.html, identidade §8) é uma chamada como as outras, com
  "peca": "vinheta" e "lugar": "centro" (out/<proj>/cta/vinheta-centro.mov). Com ela, a marca d'água começa no último quadro da
  vinheta, que é o mesmo desenho, e não no quadro 0;
- confere: o .mov em 3840 × 2160 a 30 fps, com os quadros que a regência diz (dur × 30, ±1); a peça dentro da sequência; as chamadas
  sem se sobrepor; a V3 e a V4 vazias no XML do motor; o XML de saída bem-formado; e nada mudou fora da V3 e da V4.
--seco mostra o plano e não grava. Saída: 0 ok; 1 conferência falhou; 2 uso errado ou arquivo faltando.
O pacote (ferramentas/pacote-premiere.py) leva os .mov e o PNG como qualquer referência do XML.
"""
import argparse, json, os, re, shutil, subprocess, sys, urllib.parse
import xml.etree.ElementTree as ET

FPS = 30
MARCA = os.path.join("marca", "logo", "agulha", "marca-dagua-4k.png")
ID = "chamada-"


def url_de(caminho):
    c = os.path.abspath(caminho).replace("\\", "/")
    u = urllib.parse.quote(c, safe="/")
    return "file://localhost/" + (u[0].upper() + "%3a" + u[4:] if re.match(r"^[A-Za-z]%3A", u) else u)   # C%3a, como o motor


def quadros_do_mov(p):
    r = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-count_packets", "-show_entries",
                        "stream=width,height,r_frame_rate,nb_read_packets", "-of", "json", p], capture_output=True, text=True)
    s = json.loads(r.stdout)["streams"][0]
    return int(s["width"]), int(s["height"]), s["r_frame_rate"], int(s["nb_read_packets"])


def rate():
    return f"<rate><timebase>{FPS}</timebase><ntsc>FALSE</ntsc></rate>"


def clipitem(cid, fid, nome, arquivo, inicio, fim, dur_arquivo):
    return (f'<clipitem id="{cid}"><name>{nome}</name><enabled>TRUE</enabled><duration>{dur_arquivo}</duration>{rate()}'
            f"<start>{inicio}</start><end>{fim}</end><in>0</in><out>{fim - inicio}</out>"
            f'<file id="{fid}"><name>{os.path.basename(arquivo)}</name><pathurl>{url_de(arquivo)}</pathurl>{rate()}'
            f"<duration>{dur_arquivo}</duration><media><video><samplecharacteristics><width>3840</width><height>2160</height>"
            f"<pixelaspectratio>square</pixelaspectratio>{rate()}</samplecharacteristics></video></media></file>"
            f"<compositemode>normal</compositemode></clipitem>")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("proj")
    ap.add_argument("--sem-marca", action="store_true")
    ap.add_argument("--seco", action="store_true")
    a = ap.parse_args()
    D = os.path.join("out", a.proj)
    xml_p, base_p = os.path.join(D, f"{a.proj}-POS.xml"), os.path.join(D, f"{a.proj}-POS.motor.xml")
    reg_p = os.path.join(D, "regencia.json")
    for p in (xml_p, reg_p):
        if not os.path.isfile(p):
            print(f"uso: rode da raiz do canal, depois do finalizar; nao achei {p}", file=sys.stderr)
            sys.exit(2)
    atual = open(xml_p, encoding="utf-8").read()
    if ID not in atual:
        base = atual                                   # o XML é o do finalizar: ele vira a base
    elif os.path.isfile(base_p):
        base = open(base_p, encoding="utf-8").read()   # já aplicado: refaz a partir da base guardada
    else:
        print(f"{xml_p} ja tem chamadas, e a base {base_p} sumiu: rode o finalizar de novo", file=sys.stderr)
        sys.exit(1)

    dur_seq = int(re.search(r"<sequence[^>]*>.*?<duration>(\d+)</duration>", base, re.S).group(1))
    fim_video = re.search(r"</video>\s*<audio>\s*<track", base).start()   # o fim das faixas de vídeo da sequência
    vazias = [m.start() for m in re.finditer(r"<track></track>", base[:fim_video])]
    if len(vazias) < 2:
        print(f"a V3 e a V4 nao estao vazias no XML do motor ({len(vazias)} faixa(s) vazia(s) de video)", file=sys.stderr)
        sys.exit(1)

    chamadas = json.load(open(reg_p, encoding="utf-8")).get("_chamadas") or []
    v3, plano, ocupado = [], [], []
    for i, c in enumerate(chamadas, 1):
        mov = os.path.join(D, "cta", f"{c['peca']}-{c['lugar']}.mov")
        if not os.path.isfile(mov):
            print(f"falta {mov} (grave a peca pelos comandos de marca/cta.md §8)", file=sys.stderr)
            sys.exit(2)
        w, h, fr, n = quadros_do_mov(mov)
        ini = round(float(c["inSec"]) * FPS)
        fim = ini + n
        erros = []
        if (w, h, fr) != (3840, 2160, "30/1"):
            erros.append(f"{w}x{h} a {fr}")
        if abs(n - round(float(c["dur"]) * FPS)) > 1:
            erros.append(f"{n} quadros, e a regencia diz {c['dur']} s")
        if fim > dur_seq:
            erros.append(f"termina no quadro {fim}, depois do fim da sequencia ({dur_seq})")
        if any(ini < b and a_ < fim for a_, b in ocupado):
            erros.append("sobrepoe outra chamada")
        if erros:
            print(f"{os.path.basename(mov)}: " + "; ".join(erros), file=sys.stderr)
            sys.exit(1)
        ocupado.append((ini, fim))
        v3.append((ini, clipitem(f"{ID}{i}", f"file-{ID}{i}", os.path.basename(mov)[:-4], mov, ini, fim, n)))
        plano.append(f"  V3  {os.path.basename(mov)}  quadros {ini}–{fim}  ({ini / FPS:.2f}–{fim / FPS:.2f} s)")
    v3 = "".join(x for _, x in sorted(v3))
    # a vinheta de apresentacao (marca/vinheta/vinheta.html; identidade §8) termina VIRANDO a marca d'agua: a V4 comeca no
    # ultimo quadro dela. Sem vinheta na regencia, a marca d'agua vai do quadro 0, como antes.
    vinhetas = [(ini, fim) for (ini, fim), c in zip(ocupado, chamadas) if c["peca"] == "vinheta"]
    if len(vinhetas) > 1:
        print("mais de uma vinheta em _chamadas", file=sys.stderr)
        sys.exit(1)
    ini_marca = vinhetas[0][1] - 1 if vinhetas else 0
    v4 = ""
    if not a.sem_marca:
        if not os.path.isfile(MARCA):
            print(f"falta {MARCA}", file=sys.stderr)
            sys.exit(2)
        v4 = clipitem(f"{ID}marca", f"file-{ID}marca", "marca-dagua", MARCA, ini_marca, dur_seq, dur_seq)
        plano.append(f"  V4  marca-dagua-4k.png  quadros {ini_marca}–{dur_seq}"
                     + (" (do ultimo quadro da vinheta ao fim)" if vinhetas else " (o video inteiro)"))
    print(f"{a.proj}: {len(chamadas)} chamada(s) na V3" + ("" if a.sem_marca else " e a marca d'agua na V4"))
    print("\n".join(plano))

    i3, i4 = vazias[0], vazias[1]
    novo = base[:i3] + f"<track>{v3}</track>" + base[i3 + 15:i4] + f"<track>{v4}</track>" + base[i4 + 15:]
    ET.fromstring(novo.encode("utf-8"))
    tira = lambda s: re.sub(r'<clipitem id="' + ID + r'[^"]*">.*?</clipitem>', "", s, flags=re.S)
    if tira(novo) != base:
        print("o XML mudou fora da V3 e da V4", file=sys.stderr)
        sys.exit(1)
    if a.seco:
        print("(seco: nada gravado)")
        return
    if ID not in atual:
        shutil.copy2(xml_p, base_p)
    open(xml_p, "w", encoding="utf-8", newline="\n").write(novo)
    print(f"ok {xml_p} (a base do finalizar em {base_p})")


if __name__ == "__main__":
    main()
