
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
