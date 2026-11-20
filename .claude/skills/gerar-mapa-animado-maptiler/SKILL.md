---
name: gerar-mapa-animado-maptiler
description: >-
  Cria uma cena de mapa animado sobre a base MapTiler: geometria conferida, tratamento da base, linhas, rótulos, câmera,
  crédito e a prova sem desperdiçar pedido pago. Use para fazer uma cena de mapa. Para uma lista de consertos,
  consertar-cena, que manda ler esta; a miniatura, titulo-e-miniatura.
argument-hint: "<proj> --cena=<id>"
disable-model-invocation: true
metadata:
  versao: "2"
  atualizada: "2026-11-20"
  origem: "canal; catálogo §2.2 (30, com o cético) e etapas.md S32; mínima, criada na Onda 0 para as lições do vídeo 7, com as trocas do cético da Onda 0"
---

# Gerar a cena de mapa animado (MapTiler)

**Acima desta skill:** o `CLAUDE.md`, o `setores/REGIMENTO.md` (quando roda num setor), a marca (`marca/identidade.md` §4.2,
§4.4, §5 e §6; `marca/tokens.css`), a roupa de quem roda (`marca/agentes/mapista.md`, ou a do `editor-de-arte`) e o ofício
(`.claude/agents/mapista.md`, ou o do `editor-de-arte`). Se a skill divergir de qualquer um deles, pare e diga no relato; até
a resposta, vale a regra mais restritiva, e a skill nunca vence nenhum deles.
**Quem roda:** a peça que faz a cena de mapa: o `mapista`, e o `editor-de-arte` quando lhe passam uma cena de mapa (o setor ou a Sala).
Nunca o navegador do Lucas nem o painel do app.
**Se você não é a peça:** a Sala e o setor não fazem esta etapa. O setor não usa a ferramenta `Skill` (`setores/REGIMENTO.md`,
"As ferramentas do setor"). Se esta skill carregou numa conversa de setor, não siga as etapas: despache a peça e ponha no
pedido o caminho `.claude/skills/gerar-mapa-animado-maptiler/SKILL.md` (e o do `licoes.md`).
**Custo:** tiles da MapTiler em todo quadro, render e portão com a pré-carga; só dentro do ok de tiles que o pedido traz,
citando o ok do Lucas para o vídeo (`CLAUDE.md`, "Os setores"; a roupa do `mapista` §1).
**Esta skill é mínima** (Onda 0): as etapas apontam a roupa, sem copiá-la, e as lições do vídeo 7 estão no `licoes.md`. O
procedimento completo (o `etapas.md` S32 e o catálogo) entra na Onda 1.

## Pare se
- o pedido não traz o ok de tiles da MapTiler para este vídeo: sem ele, só o que não pede tile (o `portao-margens`, que responde os tiles no próprio PC); a roupa do `mapista` §1 e §9.
- a chave teria de ir ao HTML, a uma URL ou a uma mensagem: ela só se lê pelo `src/lib/chaves.mjs` da pré-v1, e nunca se abre, lê nem imprime.
- a base, o relevo 3D ou o perfil do mapa mudariam (`canal.json` › `mapa.perfil`): é decisão do Lucas, por vídeo.
- o conceito diverge da regência ou dos textos de tela nesta cena (`regencia.json` › `_conflitos`): não desenhe; devolva a quem te despachou (o setor ou a Sala).
- a cena citaria um arquivo de `out/<proj>/_media/` sem `aprovado` no `conferencia-midia.json`: ele não entra (`CLAUDE.md`, "A regra da cena").
- um script sai com `MOTOR_SEM_ARQUIVO`: falta o `REGIE_MOTOR` na mesma chamada; nunca mexa no motor, no apoio nem no `canal.json`.

## Antes de começar
- Leia a sua roupa inteira e o `licoes.md` desta skill. O `editor-de-arte` lê também, da roupa do `mapista`, os §1, §3, §5, §6
  e §7 (o gasto, a base na tela, o crédito, a câmera e o espaço).
- As entradas da cena (a roupa do `mapista` §0): `out/<proj>/textos-tela.json` (o que vai à tela, e a grafia),
  `out/<proj>/regencia.json` (o tempo de cada texto) e `out/<proj>/conceito-visual.json` (a direção).

## Etapas
Os § abaixo são da roupa do `mapista`.
1. **O gasto, antes de qualquer quadro:** §1. Diga no relato quantas rodadas pediram tile (a Sala anota o contador).
2. **A base, a geometria e a rede:** §2, §3 e §10 (identidade §6). A geometria só de `out/<proj>/_media/geo/`, registrada na
   `pauta-geo.json`; se faltar, nunca desenhe: diga no relato, para a `pesquisa-geo`. Site que recusa robô não se contorna;
   429 e 504 se esperam.
3. **Os rótulos e o crédito:** §4 e §5. A linha `© MapTiler © OpenStreetMap contributors` já cobre a geometria do OSM (não
   repita); só a cena sem MapTiler leva o crédito do OSM à parte (§5; `CLAUDE.md`, "Peças da pré-v1 em uso", item 6).
4. **A câmera e o movimento:** §6 (identidade §4.4; §5, "Mapa nunca fica parado" e "Espaço vazio esperando a voz
   incomoda"), e as lições do `licoes.md`, que nenhum portão mede.
5. **O espaço:** §7 (identidade §4.2).
6. **O molde e a prova nesta máquina:** §8 e §9. O `portao-margens` antes do render de prova (ele não pede tile); o `qc-hex`
   e o `qc-src-existe`; o `qc-cena` em cena de mapa roda com a pré-carga `chaves-nos-portoes.mjs`, pede tiles e conta como
   rodada (`CLAUDE.md`, "Os portões medem"); o portão de movimento quando a Sala o puser no canal
   (`ferramentas/portao-movimento.mjs`); render só com `--4k` e a pré-carga, e o clipe só vale com o carimbo `2160p`
   (`CLAUDE.md`, "Tropeços conhecidos do apoio"). Comando que passe de 5 minutos (o render de prova longo, os portões de
   várias cenas) não roda dentro de você: vai ao relato, com o comando exato (§0, a regra dos 5 minutos).
7. **Antes de entregar, as lições:** confira cada lição do `licoes.md` em dois lugares:
   - nos quadros que você já tira para provar a cena: `python -X utf8 -B ferramentas/folhas-cena.py <proj> <id>`, do clipe 4K
     com o carimbo `2160p` (§9);
   - nos instantes que cada lição aponta: o cruzamento do par, a entrada da peça que volta, a troca de imagem da L4 quadro a
     quadro a 30 fps, com o `ffmpeg -nostdin`.

   Não faça folhas a cada 0,5 s: elas são da revisão de espectador, da Sala. Sem clipe (sem o ok de tiles, ou com render de
   mais de 5 minutos), escreva no relato "L<n>: não conferida nos quadros" e o porquê; a Sala a confere depois do render.
   **Feito quando:** o relato traz a saída de cada portão e uma linha por lição, com o instante olhado ou o porquê de não ter
   olhado.

## Saída
- `out/<proj>/graphics/<id>.html` e, se o pedido liberar, o clipe de prova com o carimbo `2160p`;
- o relato: a saída de cada portão, as rodadas que pediram tile e a linha de cada lição.

## O que esta skill NÃO faz
- não decide a lista de consertos (`consertar-cena`, do catálogo, ainda não criada). Até ela existir, num conserto vale o
  pedido para o que mudar, e esta skill para o resto: o "Pare se", a etapa 6 (os portões) e a etapa 7 (as lições), que a cena
  consertada também passa;
- não faz a geometria (`gerar-geometria-de-mapa`), não decide a base nem o gasto (`base-e-gasto-maptiler`), não julga a cena
  (`julgar-cena-qc`), não faz o render de entrega (`renderizar-cena-4k`, da Sala) nem a miniatura (`titulo-e-miniatura`). São
  do catálogo, ainda não criadas: até lá, vale a roupa.

## Decisões do Lucas que ela segue
- `marca/identidade.md` §4.4 (a viagem de mapa de 1,5 a 3 s), §5 ("Mapa nunca fica parado", "Espaço vazio esperando a voz
  incomoda", "Os territórios do contexto, cada um com uma cor", "Nome de lugar com a foto") e §6 (a base, o tratamento,
  "Estrada não se confunde com fronteira", "Nenhum rótulo sobre a divisa").
- "Os dois, após a cota (Recomendado)" (17/11/2026): as lições de julgamento do vídeo 7 nesta skill (catálogo, "A retomada").

## Lições (leia antes de entregar)
- `licoes.md`: o que a revisão de espectador achou nas cenas de mapa e nenhum portão mede.
