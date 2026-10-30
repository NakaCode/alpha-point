# -*- coding: utf-8 -*-
"""Monta a proposta de divisão do CLAUDE.md enxuto (o caminho 2 da página "Dois caminhos para a cota").

Uso, da raiz do canal:
    python -X utf8 -B out/_modelos/md-enxuto/montar-rascunho.py

Só lê o CLAUDE.md. Grava, em out/_modelos/md-enxuto/:
  - mapa-de-linhas.json: cada bloco de linhas do CLAUDE.md de hoje, com o destino (o núcleo ou um arquivo da Sala),
    a seção de destino, o porquê e o sha1 do texto;
  - CLAUDE-nucleo-rascunho.md: o texto do núcleo, montado com as linhas originais, palavra por palavra, mais o texto
    novo (a nota do topo, os ponteiros e o índice), que fica listado no mapa como "novo";
  - as tabelas da proposta.md, entre os marcadores <!-- tabelas:inicio --> e <!-- tabelas:fim -->.

Não cria nada em sala/ nem mexe no CLAUDE.md: a divisão só vale com o ok do Lucas.
A conferência independente é o conferir-divisao.py, na mesma pasta.

Se o CLAUDE.md mudar antes do ok, as faixas de linhas daqui deixam de bater: o script para e diz onde. Ajuste a
PARTICAO (e o NUCLEO) à versão nova e rode de novo.
"""
import hashlib
import json
import os
import re
import sys
from datetime import datetime, timezone

RAIZ = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..'))
PASTA = os.path.join(RAIZ, 'out', '_modelos', 'md-enxuto')
ORIGEM = os.path.join(RAIZ, 'CLAUDE.md')
CHARS_POR_TOKEN = 2.2  # a razão da página "Dois caminhos para a cota" (razao-tokens.py deu uns 2,0 nas leituras)
ALVO_NUCLEO_TOKENS = 15000

# Conferência da versão: as faixas abaixo foram feitas sobre este CLAUDE.md.
SHA256_ESPERADO = '7dd31ffc7ad07b03d9134d1ec051bf7e6107c900ef271a6efb01e9c4fc4a69c5'  # o CLAUDE.md de 30/10/2026, depois do a508701

N = 'nucleo'
ARQUIVOS = {
    N: {
        'caminho_final': 'CLAUDE.md',
        'rascunho': 'out/_modelos/md-enxuto/CLAUDE-nucleo-rascunho.md',
        'papel': 'O núcleo: toda regra que um agente usa (especialista, setor e subagente da Sala), mais o índice de onde '
                 'está cada assunto. O app o põe em todo agente.',
    },
    'sala/motor-e-git.md': {
        'papel': 'A `main` sempre em dia e a cópia `pessoal`; como rodar e atualizar a Régie; a decisão de usar a peça do '
                 'motor; o `segredos.mjs` e o `doctor` da pré-v1; o XML do Premiere (item 8).',
        'forma': 'arquivo',
    },
    'sala/narracao.md': {
        'papel': 'A cadeia que produz o master e a narração inteira: a voz, o v3 e o v4, como se gera, a conferência, o '
                 'tratamento, o gasto da ElevenLabs; os itens 1, 2, 3 (o ouvido e os limites) e 9 da pré-v1.',
        'forma': 'arquivo; candidato a skill depois do teste (é procedimento: narrar, conferir, tratar, gerar o master)',
    },
    'sala/mapas-e-maptiler.md': {
        'papel': 'A liberação da MapTiler em cada vídeo (o `MapTiler liberado`), a base de satélite, o teste com Landsat, '
                 'a geometria do Juneau, o crédito a 56 px do vídeo 2 e o Juneau depois dos 56 px.',
        'forma': 'arquivo',
    },
    'sala/especialistas.md': {
        'papel': 'O que é só da Sala ou registro em "Os especialistas": o portão do `research`, o conferente como agente '
                 'geral, uma conversa por peça (até o Juneau), o `package.json`, o M11 e a limitação do portão (as regras '
                 'moram nas roupas e no regimento), "Mais mapa", "Mais ilustração" e "O gancho que prende" (as regras moram '
                 'na marca), o ilustrador conferido e o aceite artístico, e a conversa em Fable de 29/09.',
        'forma': 'arquivo',
    },
    'sala/modelos-e-esforco.md': {
        'papel': 'O roteiro em Fable, o levantamento dos modelos, o que a Sala decide sozinha, a Sala em máx, o '
                 'ultracode, a Sala que recomeça a cada etapa, o balanço depois do vídeo 3 e o teste da animação em Opus.',
        'forma': 'arquivo',
    },
    'sala/autonomia-e-espectador.md': {
        'papel': 'A autonomia do vídeo 2 em diante (as quatro respostas do Lucas) e a revisão de espectador, antes do Lucas.',
        'forma': 'arquivo; a revisão de espectador é candidata a skill depois do teste',
    },
    'sala/setores.md': {
        'papel': 'O pedido dos setores, as cinco conversas (a tabela com os sessionIds), como a Sala manda a tarefa, a '
                 'prova da trava do Python e o vídeo novo.',
        'forma': 'arquivo',
    },
    'sala/do-video-5-em-diante.md': {
        'papel': 'As decisões de 30/10/2026: o motor do Top10 sem data, o ritmo mais calmo, os vídeos mais longos e o '
                 'teste dos dois caminhos.',
        'forma': 'arquivo',
    },
    'sala/motor-sem-rosto.md': {
        'papel': 'O motor sem rosto do Top10: o piloto, o pacote `estudio/`, as respostas do Lucas e o que muda.',
        'forma': 'arquivo',
    },
    'sala/linha-do-tempo.md': {
        'papel': 'A linha do tempo pré-render: o pedido, a ferramenta, o Tailscale, o que se provou e o fluxo.',
        'forma': 'arquivo; candidato a skill depois do teste (é procedimento)',
    },
    'sala/caca.md': {
        'papel': 'Caça nos bancos pagos: as regras do canal que a skill `cacar-no-chrome` tem de seguir (o Brave, as contas, '
                 'a lista, os downloads, os tetos, o que fica de fora). A parte dos agentes ficou no núcleo.',
        'forma': 'arquivo, lido junto com a skill `cacar-no-chrome` (a skill não muda: o sha256 dela continua valendo)',
    },
    'sala/trilha.md': {
        'papel': 'A trilha do Epidemic Sound: a chave, o MCP, a ferramenta, o robots.txt, a licença e onde a faixa entra. '
                 'A música fora de IA ficou no núcleo.',
        'forma': 'arquivo; candidato a skill depois do teste (é procedimento)',
    },
    'sala/avisos.md': {
        'papel': 'Os avisos no Discord e no Telegram, desligados desde 29/10/2026.',
        'forma': 'arquivo',
    },
    'sala/fontes-e-navegador.md': {
        'papel': 'Como a Sala usa o navegador do app sem o Lucas acompanhando, e as fontes do Juneau lidas pela cópia '
                 'arquivada.',
        'forma': 'arquivo',
    },
}

AGE = 'agentes'    # regra que um agente usa: fica no núcleo
SALA = 'sala'      # trabalho só da Sala de controle
REG = 'registro'   # decisão, prova ou histórico; a regra, quando há, mora no núcleo, na marca, numa roupa ou no regimento
JUN = 'juneau'     # só do Juneau, arquivado sem publicar

# A partição: faixas contíguas que cobrem o CLAUDE.md inteiro, de 1 à última linha.
# (início, fim, destino, categoria, porquê)
PARTICAO = [
    (1, 7, N, AGE, 'O que é esta pasta e onde está o motor: todo agente.'),
    (8, 13, N, AGE, 'Quem é o Lucas e como falar com ele: todo agente.'),
    (14, 33, N, AGE, 'A numeração dos vídeos: todo agente que escreve registro ou relato.'),
    (34, 44, N, AGE, 'O que se pode e o que não se pode nesta pasta, e o APRENDIZADOS.md: todo agente.'),
    (45, 58, 'sala/motor-e-git.md', SALA, 'Commit, push e os dois remotes: só a Sala commita.'),
    (59, 60, N, AGE, 'Nada pessoal vai ao git, e só a Sala commita: regra para os setores e os subagentes.'),
    (61, 63, 'sala/motor-e-git.md', REG, 'O push de 16/10: registro.'),
    (64, 74, 'sala/motor-e-git.md', SALA, 'Os verbos da Régie: só a Sala roda `regie`.'),
    (75, 77, N, AGE, 'O `npm.cmd` e a política do PowerShell: vale para quem roda comando.'),
    (78, 96, 'sala/motor-e-git.md', SALA, 'Atualizar o motor: só a Sala, com o Lucas.'),
    (97, 103, N, AGE, 'O que a Régie faz e não faz: todo agente.'),
    (104, 112, 'sala/narracao.md', SALA, 'A cadeia que produz o master (pauta, pesquisa, roteiro, narração): trabalho da Sala.'),
    (113, 156, 'sala/narracao.md', SALA, 'A voz, o modelo e como se gera: a narração é só da Sala.'),
    (157, 158, N, AGE, 'Sem títulos de capítulo na tela: o montador, o editor, o designer e o redator usam.'),
    (159, 163, 'sala/narracao.md', SALA, 'O resto da narração e a conta compartilhada da ElevenLabs: Sala.'),
    (164, 168, N, AGE, 'O arquivo de chaves: nunca imprima nem leia os valores, e o `onde()` para saber a origem: todo agente.'),
    (169, 190, 'sala/narracao.md', SALA, 'O gasto da ElevenLabs, o download pelo navegador, o master e a transcrição local: Sala.'),
    (191, 197, N, AGE, 'A pré-v1: o clone que não se edita.'),
    (198, 201, 'sala/motor-e-git.md', SALA, 'Usar a peça do motor e aposentar a caseira: decisão de ferramenta, da Sala.'),
    (202, 205, N, AGE, '`out/<slug>/` e o bloco de binários do `.gitignore`: todo agente que grava.'),
    (206, 210, 'sala/motor-e-git.md', SALA, 'O `segredos.mjs` antes do commit e o `doctor` da pré-v1: Sala.'),
    (211, 214, N, AGE, 'Importar módulo do clone pelo `file:///`: quem escreve script.'),
    (215, 239, 'sala/narracao.md', JUN, 'Itens 1 e 2: a narração e o master do Juneau.'),
    (240, 246, N, AGE, 'Item 3: as palavras e o tempo do `words.json` (o montador e o redator usam).'),
    (247, 263, 'sala/narracao.md', SALA, 'Item 3: o ouvido, os aceites e os limites do script do relógio, que a Sala roda.'),
    (264, 267, N, AGE, 'Itens 4 e 5: o espelho (o montador) e o `buscar-midia` (a pesquisa).'),
    (268, 278, 'sala/mapas-e-maptiler.md', JUN, 'Item 6: a geometria, os rios e as cidades do Juneau.'),
    # cético, 30/10/2026: o crédito do OSM ficava em `sala/` com o porquê "mora em `marca/identidade.md` §6", e o §6 só
    # tem o OSM dentro da linha da MapTiler. Sete roupas (redator, regente, montador, designer, editor, mapista e
    # pesquisa-geo) apontam "CLAUDE.md, pré-v1 item 6" para esta regra: ela fica no núcleo, onde o ponteiro cai.
    (279, 283, N, AGE, 'Item 6: o crédito do OSM na tela e na descrição, que sete roupas citam como "pré-v1 item 6", com o '
                       'Taku refeito pelo `geo-osm-rota`.'),
    (284, 293, 'sala/mapas-e-maptiler.md', JUN, 'Item 6: a estrada e Cascade Point do Juneau; o tropeço do `geo-osm-rota` está '
                                                 'também no APRENDIZADOS.md, item 17, achado 23, e o ponteiro do item 6 no núcleo '
                                                 'diz onde.'),
    (294, 299, N, AGE, 'Item 6: os cuidados da geometria (a pesquisa-geo e o mapista).'),
    (300, 305, N, AGE, 'Item 7: as fontes, o `tokens.css` e o `RIG.paleta` (o editor e o mapista).'),
    (306, 319, 'sala/mapas-e-maptiler.md', REG, 'Item 7: a base MapTiler e o teste com Landsat; a regra da base e do crédito mora no §6 '
                                                 'da identidade e em "Os marcadores".'),
    (320, 323, N, AGE, 'Item 7: o `quadro.mjs` não fotografa satélite sem a pré-carga (o mapista).'),
    (324, 345, 'sala/mapas-e-maptiler.md', REG, 'Item 7: o Landsat, a base do Juneau, o crédito a 56 px do vídeo 2 (a regra mora em '
                                                 '`marca/identidade.md` §4.1) e o Juneau depois dos 56 px.'),
    (346, 347, 'sala/motor-e-git.md', SALA, 'Item 8: o XML do Premiere é só da Sala.'),
    (348, 349, 'sala/narracao.md', SALA, 'Item 9: a narração pela API.'),
    (350, 355, 'sala/motor-e-git.md', SALA, 'O que fica fora da pré-v1 (`regie atualizar`, rotinas, CI, `gerar-imagem`, '
                                            '`marca gerar`): decisões de ferramenta da Sala; nenhuma peça os usa.'),
    (356, 412, N, AGE, 'Os especialistas, os passos e o conferente: o contrato de toda mídia que entra em cena.'),
    (413, 418, 'sala/especialistas.md', SALA, 'O `regie advance` do `research`: portão da Sala.'),
    (419, 423, N, AGE, 'Um despacho do conferente por vez, e o conferente que se edita aqui.'),
    (424, 429, 'sala/especialistas.md', SALA, 'Despachar o conferente como agente geral antes da sessão nova: Sala.'),
    (430, 445, N, AGE, 'Os passos que faltam e "Como se despacha" (o artefato vence o relato; NÃO MEDIDO).'),
    (446, 482, 'sala/especialistas.md', REG, 'Uma conversa por peça: a regra do Juneau, superada no vídeo 2.'),
    (483, 494, 'sala/modelos-e-esforco.md', REG, 'Os modelos e a animação desenhada em Opus: quem despacha é a Sala ou o setor; '
                                                  'para o setor, a regra mora no regimento, e o modelo de cada peça, no frontmatter.'),
    (495, 506, 'sala/modelos-e-esforco.md', REG, 'O Opus que fica, o teste da s52 e o roteiro em Fable: registro e Sala.'),
    (507, 527, 'sala/modelos-e-esforco.md', SALA, 'O levantamento dos modelos e o que a Sala decide sozinha.'),
    (528, 541, 'sala/modelos-e-esforco.md', REG, 'O esforço em extra, a Sala em `max` e as três peças em `high`: quem despacha '
                                                  'é a Sala ou o setor; para o setor, a regra mora no regimento.'),
    (542, 560, 'sala/modelos-e-esforco.md', SALA, 'O ultracode, a Sala que recomeça e o ultracode de 14 a 24/10.'),
    (561, 590, 'sala/modelos-e-esforco.md', REG, 'O balanço depois do vídeo 3: decidido em 24/10, tudo fica.'),
    (591, 611, 'sala/especialistas.md', REG, 'Mais mapa, mais ilustração e o gancho: as regras moram em `marca/identidade.md` §5 '
                                             'e `marca/voz.md`, e as roupas apontam para lá.'),
    (612, 616, N, AGE, 'O ilustrador, com a física: a regra e a resposta do Lucas, que viaja com ela.'),
    (617, 622, N, AGE, 'O ilustrador é método do editor, e a cópia em `ilustracao/` não se edita.'),
    (623, 640, 'sala/especialistas.md', REG, 'O ilustrador conferido e o aceite artístico (a decisão mora na roupa do editor, §5); '
                                             'a conversa em Fable de 29/09.'),
    (641, 681, N, AGE, 'A roupa, os marcadores e o `<tile-source>`: toda peça.'),
    (682, 698, 'sala/mapas-e-maptiler.md', SALA, 'A MapTiler liberada em cada vídeo: a Sala cita a mensagem no `MapTiler liberado`.'),
    (699, 718, N, AGE, 'Os scripts do canal, com o alvo e o `REGIE_MOTOR`: toda peça que roda portão.'),
    (719, 725, N, AGE, 'Os portões medem: a regra e a resposta do Lucas ("Instalar o npm"), que viaja com ela.'),
    (726, 727, 'sala/especialistas.md', SALA, 'O `package.json` e o `npm.cmd install`: a instalação, feita pela Sala.'),
    (728, 767, N, AGE, 'O que os portões medem, a margem, a pré-carga e quem roda: o editor, o mapista e o qc-visual.'),
    (768, 788, 'sala/especialistas.md', REG, 'O M11 (a regra mora na roupa do qc-visual, §2.1, e no regimento) e a limitação do '
                                             'portão (o processo é da Sala; a parte do qc-visual e do editor mora nas roupas).'),
    (789, 864, N, AGE, 'Não se rodam, e os tropeços conhecidos do apoio: as roupas apontam para cá.'),
    (865, 957, 'sala/autonomia-e-espectador.md', SALA, 'A autonomia e a revisão de espectador: trabalho da Sala.'),
    (958, 959, N, AGE, 'Os setores: o título.'),
    (960, 966, 'sala/setores.md', REG, 'O pedido do Lucas de 12/10: registro.'),
    (967, 977, 'sala/setores.md', SALA, 'As cinco conversas e os sessionIds: a Sala manda (o regimento tem a tabela).'),
    (978, 980, N, AGE, 'A Sala de controle e o sessionId que os setores conferem.'),
    (981, 982, 'sala/setores.md', SALA, 'Como a Sala manda a tarefa: o `send_message`.'),
    (983, 986, N, AGE, 'O que só a Sala faz, e o gasto de crédito: nenhum agente faz.'),
    (987, 989, 'sala/setores.md', REG, 'A raiz da autorização: a regra mora no regimento, que o setor lê inteiro a cada tarefa.'),
    (990, 991, N, AGE, 'Só a conversa principal da Sala manda mensagem a setor: nenhum subagente usa `SendMessage`.'),
    (992, 1002, 'sala/setores.md', REG, 'As duas provas do remetente e a trava escrita: a regra mora no regimento.'),
    (1003, 1013, N, AGE, 'A trava do Python: vale para a Sala, os setores, as peças e todo subagente.'),
    (1014, 1016, 'sala/setores.md', SALA, 'A prova da trava do Python: manutenção da Sala.'),
    (1017, 1017, N, AGE, 'A trava do Python: se atrapalhar, conserta-se o verificador.'),
    (1018, 1031, 'sala/setores.md', REG, 'A peça como subagente, a máquina, o Lucas no setor e o fim da tarefa: a regra mora no '
                                         'regimento, que o setor lê inteiro.'),
    (1032, 1034, 'sala/setores.md', SALA, 'Vídeo novo: a Sala avisa e renomeia.'),
    (1035, 1036, N, AGE, 'Onde está o regimento.'),
    (1037, 1061, 'sala/do-video-5-em-diante.md', SALA, 'As decisões de 30/10 (ritmo, duração, o teste): a Sala planeja.'),
    (1062, 1159, 'sala/motor-sem-rosto.md', SALA, 'O motor sem rosto do Top10: só a Sala.'),
    (1160, 1229, 'sala/linha-do-tempo.md', SALA, 'A linha do tempo pré-render: só a Sala.'),
    (1230, 1399, 'sala/caca.md', SALA, 'A caça nos bancos pagos: só a Sala opera.'),
    (1400, 1405, N, AGE, 'Nada pessoal no git: o conferente e a pesquisa gravam esses arquivos.'),
    (1406, 1417, N, AGE, 'Quem faz o quê na caça: o pesquisa-imagens, o conferente e os subagentes sem navegador.'),
    (1418, 1424, 'sala/caca.md', SALA, 'O que o Lucas faz na caça.'),
    (1425, 1560, 'sala/caca.md', SALA, 'As janelas, a lista, os downloads e os tetos: só a Sala.'),
    # cético, 30/10/2026: "Nunca se mata navegador por nome" só existia aqui (nem no regimento, nem nas roupas), e vale
    # para toda peça que abre o Chrome (render, portões, `quadro.mjs`). A "Convivência" fica inteira no núcleo.
    (1561, 1567, N, AGE, 'A convivência: nunca se mata navegador por nome (toda peça que abre o Chrome: render, portões, '
                         '`quadro.mjs`), e o render, a caça e o `_caca/` não andam juntos.'),
    (1568, 1585, 'sala/caca.md', SALA, 'O que fica de fora da caça, e por quê: só a Sala.'),
    (1586, 1625, 'sala/trilha.md', SALA, 'A trilha: só a Sala busca e baixa.'),
    (1626, 1628, N, AGE, 'A música nunca entra em ferramenta de IA: todo agente.'),
    (1629, 1639, 'sala/trilha.md', SALA, 'O resto da licença e onde a faixa entra.'),
    (1640, 1651, 'sala/avisos.md', SALA, 'Os avisos desligados: só a Sala postava.'),
    (1652, 1684, N, AGE, 'A marca, o site que recusa robô e o navegador do app que só a Sala opera.'),
    (1685, 1693, 'sala/fontes-e-navegador.md', SALA, 'Como a Sala usa o navegador do app.'),
    (1694, 1717, N, AGE, 'A cópia arquivada do Alasca e a de outros sites: a pesquisa e o verificador.'),
    (1718, 1724, 'sala/fontes-e-navegador.md', JUN, 'As fontes do Juneau lidas pela cópia arquivada.'),
    (1725, None, N, AGE, 'O vídeo fala inglês, e as regras do canal: todo agente.'),
]

# Texto novo do núcleo (não existe no CLAUDE.md de hoje): a nota do topo, os ponteiros e o índice.
NOTA_TOPO = """**Este é o núcleo do `CLAUDE.md`** (o caminho 2 de "Dois caminhos para a cota", em teste do vídeo 5 em diante): toda regra
que um agente usa (especialista, setor e subagente da Sala). O resto mudou de lugar, palavra por palavra, para `sala/`, e o
índice, no fim, diz onde está cada assunto. Os arquivos de `sala/` são trabalho da Sala: um agente lê só o trecho que o pedido
ou o índice apontar, e nada ali o autoriza a fazer o trabalho da Sala. A Sala lê o arquivo do assunto antes de fazer o trabalho
dele: o commit e o push (`sala/motor-e-git.md`), a narração, a caça, a trilha, a linha do tempo, o despacho aos setores."""

P_REGIE = """A cadeia que produz o master e a narração inteira estão em `sala/narracao.md`. Daí, para as peças:"""

P_ITENS = """(Os itens 1, 2, 8 e 9, e o que se fez no Juneau nos itens 6 e 7, estão em `sala/`: o índice, no fim, diz onde.)"""

P_ITEM6 = """6. **Geometria real dos mapas**, pela pré-v1. O que se fez no Juneau, com os rios que o NE 1:10M não tem e a rota que o
   `geo-osm-rota` não costurou sozinho, está em `sala/mapas-e-maptiler.md`, e o detalhe desses tropeços, no `APRENDIZADOS.md`,
   item 17 (achados 22 e 23)."""

P_SETORES = """O protocolo dos setores (o pedido, as conversas, as provas, a trava escrita, a peça como subagente, a máquina, o fim de uma
tarefa) está em `setores/REGIMENTO.md`, que o setor lê inteiro, e em `sala/setores.md`. Para todo agente:"""

P_CACA = """## Caça nos bancos pagos: a parte dos agentes

A caça é só da Sala (`sala/caca.md` e a skill `cacar-no-chrome`). Para os agentes:"""

P_TRILHA = """## A trilha (Epidemic Sound): a parte dos agentes

A trilha é só da Sala (`sala/trilha.md`). Da licença, para todo agente:"""

INDICE = """## Onde está cada assunto

"Aqui" é este núcleo; o resto está em `sala/`. Os nomes são os que as roupas, os ofícios, o regimento e as skills citam.

| Assunto | Onde |
|---|---|
| "A `main` do GitHub sempre em dia"; "Como rodar o motor"; "Versão do motor, e como atualizar"; da pré-v1, o `segredos.mjs`, o `doctor`, o item 8 e "Fora, por ora" | `sala/motor-e-git.md` |
| A cadeia do master e a narração ("Como se gera", a voz, o v4, o gasto da ElevenLabs); "Peças da pré-v1 em uso", itens 1, 2, 3 (o ouvido e os limites) e 9 | `sala/narracao.md` |
| "Peças da pré-v1 em uso", itens 6 e 7 (o Juneau, a estrada e Cascade Point, a base MapTiler, o Landsat, o crédito a 56 px; o crédito do OSM e os cuidados ficaram aqui); a MapTiler liberada em cada vídeo | `sala/mapas-e-maptiler.md` |
| O portão do `research`; o conferente como agente geral; "Uma conversa por peça"; o `package.json`; "O orçamento de imagens do `qc-visual`" e "A limitação do portão vai ao Lucas" (as regras moram nas roupas e no regimento); "Mais mapa", "Mais ilustração" e "O gancho que prende" (as regras moram em `marca/identidade.md` §5); o aceite do ilustrador | `sala/especialistas.md` |
| "Os modelos", "O esforço em extra" e "Três peças voltam ao alto" (as regras dos setores moram no regimento); "O roteiro" em Fable; "O levantamento dos modelos"; "A Sala recomeça a cada etapa"; o ultracode; "O balanço depois do vídeo 3" | `sala/modelos-e-esforco.md` |
| "A autonomia do vídeo 2 em diante"; "A revisão de espectador, antes do Lucas" | `sala/autonomia-e-espectador.md` |
| "Os setores": o pedido, as cinco conversas, as provas, a trava escrita, a peça como subagente, a máquina, o Lucas no setor, o fim de uma tarefa e o vídeo novo | `sala/setores.md` e `setores/REGIMENTO.md` |
| "Do vídeo 5 em diante: mais calmo, mais longo, e o teste dos dois caminhos" | `sala/do-video-5-em-diante.md` |
| "O motor sem rosto do Top10" | `sala/motor-sem-rosto.md` |
| "A linha do tempo pré-render" | `sala/linha-do-tempo.md` |
| "Caça nos bancos pagos" ("O navegador da caça", "Ficam de fora", os tetos; a "Convivência" ficou aqui, na parte dos agentes) | `sala/caca.md` |
| "A trilha: Epidemic Sound" | `sala/trilha.md` |
| "Os avisos no Discord e no Telegram: desligados" | `sala/avisos.md` |
| Como a Sala usa o navegador do app; as fontes do Juneau | `sala/fontes-e-navegador.md` |
| O `CLAUDE.md` completo de antes da divisão | `sala/CLAUDE-completo.md` |"""

# A ordem do núcleo: ('o', início) é o bloco da partição que começa nessa linha; ('n', texto) é texto novo;
# ('o', início, k) tira k espaços do começo de cada linha do bloco (o recuo muda; as palavras, não).
NUCLEO = [
    ('o', 1), ('n', NOTA_TOPO),
    ('o', 8), ('o', 14), ('o', 34), ('o', 59, 2), ('o', 164, 3), ('o', 75),
    ('o', 97), ('n', P_REGIE), ('o', 157, 5),
    ('o', 191), ('o', 202), ('o', 211), ('n', P_ITENS), ('o', 240), ('o', 264),
    ('n', P_ITEM6), ('o', 279), ('o', 294), ('o', 300), ('o', 320),
    ('o', 356), ('o', 419), ('o', 430),
    ('o', 612), ('o', 617),
    ('o', 641),
    ('o', 699), ('o', 719), ('o', 728), ('o', 789),
    ('o', 958), ('n', P_SETORES), ('o', 978), ('o', 983), ('o', 990), ('o', 1003), ('o', 1017), ('o', 1035),
    ('n', P_CACA), ('o', 1400), ('o', 1406), ('o', 1561),
    ('n', P_TRILHA), ('o', 1626, 2),
    ('o', 1652), ('o', 1694),
    ('o', 1725),
    ('n', INDICE),
]


def sha1(txt):
    return hashlib.sha1(txt.encode('utf-8')).hexdigest()


def tok(chars):
    return round(chars / CHARS_POR_TOKEN)


def titulo(h):
    return re.sub(r'^#+\s*', '', h).strip()


def main():
    texto = open(ORIGEM, encoding='utf-8').read()
    linhas = texto.split('\n')
    if linhas and linhas[-1] == '':
        linhas = linhas[:-1]
    total = len(linhas)
    sha256 = hashlib.sha256(texto.encode('utf-8')).hexdigest()
    if sha256 != SHA256_ESPERADO and '--versao-nova' not in sys.argv:
        sys.exit(f'O CLAUDE.md mudou (sha256 {sha256[:12]}; a PARTICAO foi feita sobre {SHA256_ESPERADO[:12]}). As faixas de '
                 f'linhas podem ter andado: confira cada faixa contra o arquivo novo, ajuste a PARTICAO e o NUCLEO, troque o '
                 f'SHA256_ESPERADO e rode de novo (ou rode com --versao-nova depois de conferir).')

    # 1. a partição cobre tudo, sem buraco nem sobra
    blocos = []
    esperado = 1
    for i, (a, b, dest, cat, motivo) in enumerate(PARTICAO):
        b = total if b is None else b
        if a != esperado:
            sys.exit(f'PARTICAO: a faixa {a}-{b} devia começar em {esperado}')
        if b < a or b > total:
            sys.exit(f'PARTICAO: faixa {a}-{b} fora do arquivo ({total} linhas)')
        if dest not in ARQUIVOS:
            sys.exit(f'PARTICAO: destino desconhecido {dest}')
        esperado = b + 1
        blocos.append({'a': a, 'b': b, 'dest': dest, 'cat': cat, 'motivo': motivo})
    if esperado != total + 1:
        sys.exit(f'PARTICAO: termina em {esperado - 1}, e o CLAUDE.md tem {total} linhas')

    # a seção de origem de cada linha
    secao_de = []
    atual = '(antes do 1º título)'
    for l in linhas:
        if l.startswith('# ') or l.startswith('## '):
            atual = titulo(l)
        secao_de.append(atual)

    por_inicio = {}
    for k, bl in enumerate(blocos):
        bl['id'] = f'b{k + 1:03d}'
        bl['texto'] = '\n'.join(linhas[bl['a'] - 1:bl['b']])
        bl['chars'] = sum(len(linhas[i - 1]) + 1 for i in range(bl['a'], bl['b'] + 1))
        primeira = next((l for l in linhas[bl['a'] - 1:bl['b']] if l.strip()), '')
        bl['primeira'] = primeira.strip()[:120]
        bl['secao_origem'] = secao_de[bl['a'] - 1]
        if primeira.startswith('#'):
            bl['secao_origem'] = titulo(primeira)
        por_inicio[bl['a']] = bl

    # 2. o núcleo: cada bloco do núcleo entra uma vez, e só ele
    nuc_ids = [bl['a'] for bl in blocos if bl['dest'] == N]
    usados = [it[1] for it in NUCLEO if it[0] == 'o']
    if sorted(usados) != sorted(nuc_ids) or len(set(usados)) != len(usados):
        falta = sorted(set(nuc_ids) - set(usados))
        sobra = sorted(set(usados) - set(nuc_ids))
        sys.exit(f'NUCLEO: blocos do núcleo fora da ordem: faltam {falta}, sobram {sobra}')

    saida = []
    novos = []
    ordem = []
    secao_nuc = '(topo)'
    for it in NUCLEO:
        if it[0] == 'n':
            nid = f'novo{len(novos) + 1:02d}'
            novos.append({'id': nid, 'texto': it[1]})
            ordem.append(nid)
            if saida and saida[-1] != '':
                saida.append('')
            saida.extend(it[1].split('\n'))
            saida.append('')
            for l in it[1].split('\n'):
                if l.startswith('## '):
                    secao_nuc = titulo(l)
        else:
            bl = por_inicio[it[1]]
            recuo = it[2] if len(it) > 2 else 0
            ordem.append(bl['id'])
            bl['recuo_tirado'] = recuo
            bls = linhas[bl['a'] - 1:bl['b']]
            # a linha em branco entre blocos que se encostam: antes de título e de parágrafo, e antes de lista que
            # viria colada num parágrafo (o Markdown a leria como continuação dele)
            prim = next((l for l in bls if l.strip()), '')
            if recuo and prim.startswith(' ' * recuo):
                prim = prim[recuo:]
            ant = next((l for l in reversed(saida) if l != ''), '') if saida and saida[-1] != '' else ''
            eh_lista = re.match(r'^(- |\d+\. )', prim)
            ant_paragrafo = ant and not re.match(r'^(\s|- |\d+\. |\|)', ant)
            if saida and saida[-1] != '' and (prim.startswith('#') or not (prim.startswith(' ') or eh_lista)
                                              or (eh_lista and ant_paragrafo)):
                saida.append('')
            for l in bls:
                if recuo and l.startswith(' ' * recuo):
                    l = l[recuo:]
                saida.append(l)
                if l.startswith('# ') or l.startswith('## '):
                    secao_nuc = titulo(l)
            bl['secao_destino'] = secao_nuc
    # tira linhas em branco repetidas
    limpo = []
    for l in saida:
        if l == '' and limpo and limpo[-1] == '':
            continue
        limpo.append(l)
    while limpo and limpo[-1] == '':
        limpo.pop()
    nucleo_txt = '\n'.join(limpo) + '\n'
    for bl in blocos:
        if bl['dest'] != N:
            bl['secao_destino'] = bl['secao_origem']

    # 3. o mapa
    mapa = {
        'versao': 1,
        'gerado_em': datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ'),
        'gerado_por': 'out/_modelos/md-enxuto/montar-rascunho.py',
        'origem': {
            'arquivo': 'CLAUDE.md',
            'sha256': sha256,
            'linhas': total,
            'chars': len(texto),
            'tokens_estimados': tok(len(texto)),
        },
        'chars_por_token': CHARS_POR_TOKEN,
        'alvo_nucleo_tokens': ALVO_NUCLEO_TOKENS,
        'como_ler': 'Cada bloco é uma faixa de linhas do CLAUDE.md de hoje (as duas pontas incluídas). As faixas cobrem o '
                    'arquivo inteiro, sem buraco nem sobra. "destino" é "nucleo" (o CLAUDE.md enxuto) ou um arquivo da '
                    'Sala. O texto muda de lugar palavra por palavra; no núcleo, "recuo_tirado" diz quantos espaços saíram '
                    'do começo de cada linha. "nucleo_novo" é o texto que não existe no CLAUDE.md de hoje (a nota do topo, '
                    'os ponteiros e o índice), e "nucleo_ordem" é a ordem em que blocos e texto novo entram no rascunho.',
        'categorias': {
            AGE: 'regra que um agente usa (especialista, setor ou subagente da Sala): fica no núcleo',
            SALA: 'trabalho só da Sala de controle',
            REG: 'decisão, prova ou histórico; a regra, quando há, mora no núcleo, na marca, numa roupa ou no regimento',
            JUN: 'só do Juneau, arquivado sem publicar',
        },
        'arquivos': ARQUIVOS,
        'blocos': [{
            'id': bl['id'],
            'linhas': [bl['a'], bl['b']],
            'secao_origem': bl['secao_origem'],
            'destino': bl['dest'],
            'secao_destino': bl['secao_destino'],
            'categoria': bl['cat'],
            'porque': bl['motivo'],
            'chars': bl['chars'],
            'tokens': tok(bl['chars']),
            'recuo_tirado': bl.get('recuo_tirado', 0),
            'sha1': sha1(bl['texto']),
            'primeira_linha': bl['primeira'],
        } for bl in blocos],
        'nucleo_ordem': ordem,
        'nucleo_novo': novos,
    }
    with open(os.path.join(PASTA, 'mapa-de-linhas.json'), 'w', encoding='utf-8', newline='\n') as f:
        json.dump(mapa, f, ensure_ascii=False, indent=1)
        f.write('\n')
    with open(os.path.join(PASTA, 'CLAUDE-nucleo-rascunho.md'), 'w', encoding='utf-8', newline='\n') as f:
        f.write(nucleo_txt)

    # 4. as tabelas da proposta
    por_dest = {}
    for bl in blocos:
        por_dest[bl['dest']] = por_dest.get(bl['dest'], 0) + bl['chars']
    novos_chars = sum(len(nv['texto']) + 2 for nv in novos)
    nuc_chars = len(nucleo_txt)

    secoes = []
    for bl in blocos:
        s = bl['secao_origem']
        if not secoes or secoes[-1]['titulo'] != s:
            secoes.append({'titulo': s, 'chars': 0, 'nuc': 0, 'dest': {}, 'cats': set(), 'linhas': [bl['a'], bl['b']]})
        sec = secoes[-1]
        sec['chars'] += bl['chars']
        sec['linhas'][1] = bl['b']
        sec['cats'].add(bl['cat'])
        if bl['dest'] == N:
            sec['nuc'] += bl['chars']
        else:
            sec['dest'][bl['dest']] = sec['dest'].get(bl['dest'], 0) + bl['chars']

    quem = {AGE: 'agentes', SALA: 'Sala', REG: 'registro', JUN: 'Juneau'}
    t = []
    t.append('### As seções do CLAUDE.md de hoje e o destino de cada uma')
    t.append('')
    t.append(f'Em mil tokens, a {str(CHARS_POR_TOKEN).replace(".", ",")} caracteres por token, como na página. "Quem usa" '
             'diz as categorias dos blocos da seção (agentes = regra que um agente usa; Sala = só da Sala; registro = '
             'decisão, prova ou histórico; Juneau = só do Juneau). A linha de cada bloco está no `mapa-de-linhas.json`.')
    t.append('')
    t.append('| Seção (linhas) | Mil tokens | Quem usa | Fica no núcleo | Vai para |')
    t.append('|---|---:|---|---:|---|')
    for sec in secoes:
        dests = '; '.join(f'`{d}` ({tok(c) / 1000:.1f})' for d, c in sec['dest'].items()) or '—'
        cats = ', '.join(quem[c] for c in (AGE, SALA, REG, JUN) if c in sec['cats'])
        t.append(f"| {sec['titulo']} ({sec['linhas'][0]}–{sec['linhas'][1]}) | {tok(sec['chars']) / 1000:.1f} | {cats} | "
                 f"{tok(sec['nuc']) / 1000:.1f} | {dests} |")
    t.append('')
    t.append('### O tamanho de cada destino')
    t.append('')
    t.append('| Destino | Mil tokens | O que guarda | Forma |')
    t.append('|---|---:|---|---|')
    t.append(f'| núcleo (`CLAUDE.md`): as linhas de hoje | {tok(por_dest[N]) / 1000:.1f} | {ARQUIVOS[N]["papel"]} | o app o põe em '
             f'todo agente |')
    t.append(f'| núcleo: o texto novo (a nota, os ponteiros e o índice) | {tok(novos_chars) / 1000:.1f} | | |')
    t.append(f'| **núcleo inteiro** (o rascunho) | **{tok(nuc_chars) / 1000:.1f}** | | |')
    for d, info in ARQUIVOS.items():
        if d == N:
            continue
        t.append(f'| `{d}` | {tok(por_dest.get(d, 0)) / 1000:.1f} | {info["papel"]} | {info.get("forma", "")} |')
    t.append(f'| **CLAUDE.md de hoje** | **{tok(len(texto)) / 1000:.1f}** | {total} linhas | |')
    # vírgula decimal nos números da tabela
    tabela = re.sub(r'(\d)\.(\d)', r'\1,\2', '\n'.join(t))

    prop = os.path.join(PASTA, 'proposta.md')
    if os.path.exists(prop):
        p = open(prop, encoding='utf-8').read()
        ini, fim = '<!-- tabelas:inicio -->', '<!-- tabelas:fim -->'
        if ini in p and fim in p:
            p = p.split(ini)[0] + ini + '\n' + tabela + '\n' + fim + p.split(fim)[1]
            with open(prop, 'w', encoding='utf-8', newline='\n') as f:
                f.write(p)
            print('proposta.md: tabelas atualizadas')

    print(f'CLAUDE.md de hoje: {total} linhas, {len(texto)} caracteres, ~{tok(len(texto))} tokens (sha256 {sha256[:12]})')
    print(f'núcleo: {tok(por_dest[N])} tokens das linhas de hoje + {tok(novos_chars)} de texto novo = ~{tok(nuc_chars)} tokens '
          f'({nuc_chars} caracteres; alvo de uns {ALVO_NUCLEO_TOKENS})')
    for d in ARQUIVOS:
        if d != N:
            print(f'  {d}: ~{tok(por_dest.get(d, 0))} tokens')
    print(f'{len(blocos)} blocos, {len(novos)} trechos de texto novo')


if __name__ == '__main__':
    main()
