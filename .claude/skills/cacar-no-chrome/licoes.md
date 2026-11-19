# Lições: cacar-no-chrome

Os erros da caça, um bloco cada, registrados pela `registrar-aprendizado-como-skill` (catálogo §1.4 e §1.5). A skill é
anterior à forma (o `LEGADO` do `ferramentas/skills-conferir.mjs`), e o `SKILL.md` dela ainda não aponta para este arquivo: até a
reorganização da Onda 2, a Sala o acha pelo `sala/caca.md`. Leia antes do §4 (levar para a cena) e quando algo der errado.

### L1 · O `_instalar-lote` recusa o ProRes com a transferência de cor do quadro em branco
- **Sintoma:** o `_instalar-lote` sai 1 no clipe ProRes do Shutterstock, com o ffmpeg dizendo "Unsupported input (Error number -129
  occurred): fmt:yuv422p10le csp:bt709 prim:bt709 trc:(null) -> fmt:yuv420p" (s03 do vídeo 8, os dois clipes da taipan).
- **Causa:** o ProRes traz em branco o campo de transferência de cor do cabeçalho de cada quadro (o `ffprobe` diz
  `color_transfer=unknown`), e o ffmpeg 8.1 desta máquina não converte sem ele. Medido num teste de 0,5 s: com
  `setparams=color_trc=bt709`, converte. Um remux só do contêiner (`-c copy -color_trc bt709`) não basta: o decodificador lê o
  campo do quadro.
- **O que resolveu:** uma cópia sem recompressão, com o campo preenchido em cada quadro, `ffmpeg -i <baixado> -map 0 -c copy
  -bsf:v prores_metadata=color_trc=bt709 <cópia>`, em `_media/_caca/<cena>/<banco>/_cor-corrigida/`, com o mesmo nome do arquivo
  baixado (o `_instalar-lote` acha a linha do manifest pelo nome, uma pasta acima). A prova de que a imagem é a mesma: o md5 de
  cada quadro decodificado (`-f framemd5`) igual ao do original. Instalada com `--nota`, que diz a cópia, o sha256 do arquivo
  baixado e a prova.
- **Como evitar:** antes de instalar um ProRes (ou quando o conferente avisar `color_transfer` desconhecido), rode
  `ffprobe -v error -select_streams v:0 -show_entries stream=color_transfer <arquivo>`. Saiu `unknown`: faça a cópia acima antes
  do `_instalar-lote`, e nunca recomprima nem edite o molde para passar.
- **Origem:** `APRENDIZADOS.md`, item 111; `out/australia-animais/_pesquisa/caca-relato.md` (a instalação); 19/11/2026.

### L2 · O clipe instalado da cópia de cor saía "SEM VEREDITO" no `casar`
- **Sintoma:** no `requisitions` do vídeo 8, o `casar-midia-vereditos.py australia-animais` saiu 1 com "SEM VEREDITO
  footage/s03/taipan-do-interior.mp4", e o mesmo no `-2`: os dois ProRes da L1, que o conferente tinha aprovado com
  `mesmo_item: true`.
- **Causa:** o `_instalar-lote` recebeu a cópia de cor e gravou o sha256 dela como `medido.sha256_do_baixado` (`992d67b5…`), e
  não o do arquivo baixado que o conferente julgou (`d08876cc…`). O `casar` só casava por sha256, mas a regra do banco pago é a
  URL do item (`CLAUDE.md`, "A regra da cena").
- **O que resolveu:** o `casar` passou a casar pela URL do item, com `mesmo_item: true`, só quando nenhum sha256 casa. A prova é
  o `out/atlantico-fundo/_pesquisa/casar-midia-vereditos-provar.py`, e nos outros 7 vídeos a saída ficou igual.
- **Como evitar:** depois do `_instalar-lote` de uma cópia (L1), rode o `casar` no mesmo dia, antes de fechar o relato da caça.
  "SEM VEREDITO" num clipe de banco quer dizer que a procedência perdeu a `url` ou que o veredito não tem `mesmo_item: true`.
- **Origem:** `APRENDIZADOS.md`, item 112; `out/australia-animais/linha.md` (o `requisitions`); 19/11/2026.
