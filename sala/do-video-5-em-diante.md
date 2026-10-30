# `sala/do-video-5-em-diante.md`, da Sala de controle

Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: `out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, `sala/CLAUDE-completo.md`.

As decisões de 30/10/2026: o motor do Top10 sem data, o ritmo mais calmo, os vídeos mais longos e o teste dos dois caminhos.

## Do vídeo 5 em diante: mais calmo, mais longo, e o teste dos dois caminhos (30/10/2026)

O Lucas, no chat da Sala, em 30/10/2026, de manhã, com o Atlântico já programado:
- **O motor do Top10 fica sem data:** "o motor top10 não tem previsão, então vamos seguir da forma que trabalhamos hoje até que ele chegue".
  O vídeo 5 (a Drake, com a virada do Magalhães 2026) sai no jeito de hoje: a narração pela API, o relógio, a linha da Régie, os setores, a
  linha do tempo e o Premiere. O que "O motor sem rosto do Top10", abaixo, diz do piloto vale quando o motor chegar.
- **O ritmo mais calmo:** "Uma observação para os próximos vídeos, quero um ritmo mais calmo, tive a impressão de nossa narrativa ser MUITO
  acelerada...". Hoje a voz fala a ~184 palavras/min no v4 (a marca pede 150–160; o v4 ignora velocidade), com 0,25 s entre parágrafos, e o
  gancho troca de imagem a cada 3–6 s. O caminho sai de um teste às cegas na narração da Drake, que o Lucas ouve antes de narrar o vídeo
  inteiro. A escrita também desacelera: frases mais curtas e mais espaço entre os fatos.
- **Vídeos mais longos, dentro da cota:** "Se possível estender os vídeos um pouco mais também, quanto maior, melhor... Mas precisamos estar
  dentro da nossa cota". A voz mais calma já estica o mesmo texto; o resto vem do roteiro. A conta é a barra semanal: o vídeo inteiro cabe
  numa semana.
- **O teste dos dois caminhos:** "Vamos testar neste próximo vídeo os trabalhos mecânicos com script e o .md enxuto, a depender do resultado,
  voltamos ao modo como funciona hoje". São os dois caminhos da página "Dois caminhos para a cota"
  (https://claude.ai/artifact/KchScGBo3Bq5rpM71QnKzf; cópia em `out/_modelos/esforco-2026-10-29/pagina-dois-caminhos.html`):
  - o caminho 1, os scripts (`ferramentas/pacote-cena.py`, `folhas-cena.py` e `portoes-cena.mjs`), montados e provados em cenas prontas
    do Atlântico, sem pedir mapa à MapTiler;
  - o caminho 2, o CLAUDE.md enxuto: o que é só da Sala vira skill ou arquivo que ela lê quando precisa, e um núcleo curto guarda toda
    regra que um agente usa, com um índice para o resto. Nenhum texto se apaga. **A divisão vai ao Lucas antes de valer**, e só vale com
    o ok dele no chat da Sala; a regra dos 5 minutos (nenhum agente parado mais de 5 minutos esperando um comando) entra nas roupas e no
    regimento;
  - a medida é a de 29/10 (`out/_modelos/esforco-2026-10-29/`), comparada com o Atlântico. Se o resultado não for bom, volta o jeito de
    hoje: o CLAUDE.md completo fica guardado para voltar inteiro.

## O CLAUDE.md enxuto aplicado, e a pauta da Drake (30/10/2026)

O Lucas, no chat da Sala, em 30/10/2026, respondeu a duas perguntas no mesmo momento:
- **A divisão do CLAUDE.md enxuto.** A pergunta: "O CLAUDE.md enxuto: qual divisão vale no teste?" A resposta: "Núcleo de 22 mil
  (Recomendado)". A opção dizia: "Guarda palavra por palavra toda regra que os agentes usam, e o resto vai para os arquivos da Sala.
  Economiza uns 9 % do total. Entra junto a regra dos 5 minutos: nenhum agente fica parado mais de 5 minutos esperando um comando."
  - Aplicada no mesmo dia, exatamente como a proposta (`out/_modelos/md-enxuto/`): o `CLAUDE.md` passou a ser o núcleo
    (`CLAUDE-nucleo-rascunho.md`, com uma frase a mais na nota do topo: o teste e a volta), o que era só da Sala foi, palavra por
    palavra, para os 14 arquivos de `sala/`, e o `CLAUDE.md` de antes ficou inteiro em `sala/CLAUDE-completo.md` (sha256 `7dd31ffc…`,
    o do commit `a508701`). A prova e os sha256: `out/_modelos/md-enxuto/aplicado.md`.
  - A regra dos 5 minutos ("nenhum agente fica parado mais de 5 minutos esperando um comando; o que é longo roda fora dele, pela Sala
    ou pelo setor, antes ou depois") entrou no `setores/REGIMENTO.md` ("A regra dos 5 minutos") e nas roupas do `editor-de-arte`, do
    `mapista` e do `qc-visual` (§0 de cada uma). A linha do topo do regimento passou a citar também `sala/setores.md`.
  - A volta é copiar `sala/CLAUDE-completo.md` de volta para o `CLAUDE.md`, num commit novo, com o que entrou durante o teste: decisão
    do Lucas.
- **A pauta da Drake.** A pergunta: "A pauta da Drake: como seguimos?" A resposta: "Versão honesta (Recomendado)". A opção dizia: "A
  Drake com o Magalhães contado como é: o canal ficou cheio, e o excedente foi para o sul. Eu refaço o título e o gancho, corto um terço
  dos números para o ritmo calmo e te trago a pauta para o sim."
