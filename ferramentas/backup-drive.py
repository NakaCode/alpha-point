"""Backup de um pacote de entrega (o do Premiere) no Google Drive do Lucas, pelo rclone.

    python -X utf8 -B ferramentas/backup-drive.py <pasta do pacote> --numero=<N> [--nome=<nome>] [--destino=<caminho>] [--seco]

A subpasta leva o número do vídeo com quatro dígitos e o nome (Lucas, 30/10/2026: "Ele pode numerar? Exemplo, 0004 - AtlânticoFundo"):
"Alpha-Point/Pacotes Premiere/0004 - AtlânticoFundo". O número é o da numeração nova (CLAUDE.md, "A numeração dos vídeos"); o nome, se
não vier, é o da pasta sem o "-Premiere". --destino passa por cima dos dois.

O pedido: o Lucas, 30/10/2026, no chat da Sala: "A gente consegue automatizar o envio do pacote XML para o drive? Apenas para fins
de backup, não tenho como ficar guardando no computador por falta de espaço"; o jeito: "Ferramenta de linha de comando (rclone)".

O que faz, nesta ordem:
1. `rclone copy <pasta> gdrive-total:<destino> --checksum`: envia o que falta ou mudou (rodar de novo retoma de onde parou);
2. `rclone check <pasta> gdrive-total:<destino> --one-way`: confere cada arquivo local no Drive, pelo tamanho e pelo MD5;
3. grava o registro em out/_maquina/backup-drive/<nome>-<carimbo>.log (fora do git) e imprime um resumo curto.
Sai 0 só com a conferência limpa. NUNCA apaga nada, nem no PC nem no Drive: apagar a cópia local é decisão do Lucas, depois do 0.

O destino é a pasta do Lucas, Meu Drive › Alpha-Point › Pacotes Premiere › <nome> ("esse caminho ... já está perfeito"; e, porque a
pasta Alpha-Point já existia, "Usar a minha pasta (Recomendado)"). Por isso o remote é o `gdrive-total` (scope drive, o Drive inteiro,
pelo 2º login do Lucas em 30/10/2026); o `gdrive` (drive.file) do 1º login criou uma "Alpha Point" à parte, que ficou vazia. O token
mora no rclone.conf dele: nunca se imprime. Só vão ao Drive as entregas (CLAUDE.md, regra 2): nunca a
pasta do canal, a midia/ nem o banco. O client_id compartilhado do rclone pode parar de valer em 2026; se o rclone recusar o login,
o caminho é o Lucas criar um client_id próprio (https://rclone.org/drive/#making-your-own-client-id). No 1º envio (30/10/2026), o Google
recusou um arquivo por excesso de pedidos por minuto nesse client_id (403 "Quota exceeded ... Requests per minute"), e a 2ª tentativa do
próprio rclone passou; se o 403 voltar sempre, é o mesmo caminho.
"""
import os
import shutil
import subprocess
import sys
from datetime import datetime

RAIZ = os.getcwd()
WINGET = os.path.join(os.environ.get("LOCALAPPDATA", ""), "Microsoft", "WinGet", "Packages",
                      "Rclone.Rclone_Microsoft.Winget.Source_8wekyb3d8bbwe", "rclone-v1.75.1-windows-amd64", "rclone.exe")
PROIBIDAS = [os.path.normcase(os.path.abspath(RAIZ))]  # a pasta do canal nunca vai à nuvem (CLAUDE.md, regra 2)


def achar_rclone():
    for c in (os.environ.get("RCLONE"), shutil.which("rclone"), WINGET):
        if c and os.path.exists(c):
            return c
    sys.exit("rclone não encontrado (nem RCLONE, nem no PATH, nem na pasta do winget): parei")


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    opts = dict(a[2:].split("=", 1) if "=" in a else (a[2:], "1") for a in sys.argv[1:] if a.startswith("--"))
    if len(args) != 1:
        sys.exit(__doc__)
    pasta = os.path.abspath(args[0])
    if not os.path.isdir(pasta):
        sys.exit(f"não é pasta: {pasta}")
    if any(os.path.normcase(pasta).startswith(p) for p in PROIBIDAS):
        sys.exit("a pasta do canal nunca vai à nuvem (CLAUDE.md, regra 2): parei")
    nome = os.path.basename(pasta.rstrip("\\/"))
    if "destino" in opts:
        sub = opts["destino"]
    elif opts.get("numero", "").isdigit():
        rotulo = opts.get("nome") or (nome[:-len("-Premiere")] if nome.endswith("-Premiere") else nome)
        sub = f"Alpha-Point/Pacotes Premiere/{int(opts['numero']):04d} - {rotulo}"
    else:
        sys.exit("falta --numero=<N> (o número do vídeo, na numeração nova) ou --destino=<caminho>")
    destino = os.environ.get("RCLONE_REMOTE", "gdrive-total") + ":" + sub
    rc = achar_rclone()
    logs = os.path.join(RAIZ, "out", "_maquina", "backup-drive")
    os.makedirs(logs, exist_ok=True)
    log = os.path.join(logs, f"{nome}-{datetime.now():%Y%m%d-%H%M%S}.log")

    arqs = [os.path.join(d, f) for d, _, fs in os.walk(pasta) for f in fs]
    total = sum(os.path.getsize(a) for a in arqs)
    print(f"pacote: {pasta} · {len(arqs)} arquivos · {total / 1e9:.2f} GB → {destino}")
    if "seco" in opts:
        print("--seco: nada enviado")
        return 0

    with open(log, "w", encoding="utf-8") as f:
        f.write(f"pacote {pasta}\ndestino {destino}\narquivos {len(arqs)} · bytes {total}\n\n")
        f.flush()
        cp = subprocess.run([rc, "copy", pasta, destino, "--checksum", "--transfers", "4", "--stats", "60s",
                             "--stats-one-line", "-v"], stdout=f, stderr=subprocess.STDOUT, stdin=subprocess.DEVNULL)
        f.write(f"\n[copy] exit {cp.returncode}\n\n")
        f.flush()
        ck = subprocess.run([rc, "check", pasta, destino, "--one-way"], stdout=f, stderr=subprocess.STDOUT,
                            stdin=subprocess.DEVNULL)
        f.write(f"\n[check] exit {ck.returncode}\n")
    texto = open(log, encoding="utf-8", errors="replace").read()
    resumo = [l for l in texto.splitlines() if "differences found" in l or "matching files" in l or "ERROR" in l][-6:]
    print("\n".join(resumo) or "(sem linhas de resumo)")
    print(f"copy {cp.returncode} · check {ck.returncode} · registro: {log}")
    if cp.returncode == 0 and ck.returncode == 0:
        print(f"OK: os {len(arqs)} arquivos estão no Drive e batem (tamanho e MD5). A cópia local pode ser apagada pelo Lucas.")
        return 0
    print("FALHOU: rode de novo (o copy retoma) e leia o registro.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
