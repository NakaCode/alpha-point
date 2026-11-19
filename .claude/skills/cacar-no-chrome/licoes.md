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
