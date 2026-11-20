---
name: editar-cena-html
description: >-
  Cria uma cena HTML 4K do canal: o contrato da cena, as cores por papel, o tipo, as margens sob a câmera, o movimento e o
  que validar nesta máquina. Use para montar uma cena nova: folha ou foto na mesa, card de pessoa, gráfico de dado. A de
  mapa é gerar-mapa-animado-maptiler; para consertar, consertar-cena; a miniatura, titulo-e-miniatura.
argument-hint: "<proj> --cena=<id>"
disable-model-invocation: true
metadata:
  versao: "2"
  atualizada: "2026-11-20"
  origem: "canal; catálogo §2.1 (20, com o cético) e etapas.md S31; mínima, criada na Onda 0 para as lições do vídeo 7, com as trocas do cético da Onda 0"
---

# Editar a cena HTML 4K

**Acima desta skill:** o `CLAUDE.md`, o `setores/REGIMENTO.md` (quando roda num setor), a marca (`marca/identidade.md` §2 a §5
e §7; `marca/tokens.css`; `marca/midia.md`), a roupa `marca/agentes/editor-de-arte.md` e o ofício
`.claude/agents/editor-de-arte.md`. Se a skill divergir de qualquer um deles, pare e diga no relato; até a resposta, vale a
regra mais restritiva, e a skill nunca vence nenhum deles.
**Quem roda:** a peça, o `editor-de-arte`; a cena de mapa que lhe passarem (o setor ou a Sala) segue também a `gerar-mapa-animado-maptiler`.
Nunca o navegador do Lucas nem o painel do app.
**Se você não é a peça:** a Sala e o setor não fazem esta etapa. O setor não usa a ferramenta `Skill` (`setores/REGIMENTO.md`,
"As ferramentas do setor"). Se esta skill carregou numa conversa de setor, não siga as etapas: despache a peça e ponha no
pedido o caminho `.claude/skills/editar-cena-html/SKILL.md` (e o do `licoes.md`).
**Esta skill é mínima** (Onda 0): as etapas apontam a roupa, sem copiá-la, e as lições do vídeo 7 estão no `licoes.md`. O
procedimento completo (o `etapas.md` S31 e o catálogo) entra na Onda 3.

## Pare se
- a cena citaria um arquivo de `out/<proj>/_media/` sem `aprovado` no `conferencia-midia.json`, ou outro veredito que não casa com ele: ele não entra (`CLAUDE.md`, "A regra da cena").
- o texto da tela não está no `textos-tela.json`, ou a grafia viria do `words.json` ou do `out/<proj>/roteiro.md` (a cópia para a voz): a grafia é a do `textos-tela.json`; o que falta vai ao relato (roupa §0 e §8).
- a cena tem mapa da MapTiler e o pedido não traz o ok de tiles do vídeo: nada de quadro nem render de mapa (roupa §11).
- um script sai com `MOTOR_SEM_ARQUIVO`: falta o `REGIE_MOTOR` na mesma chamada; nunca mexa no motor, no apoio, no `ilustracao/` nem no `canal.json`.
- o conceito diverge da regência ou dos textos de tela na cena: não desenhe; devolva a quem te despachou (o setor ou a Sala).

## Antes de começar
- Leia a roupa `marca/agentes/editor-de-arte.md` inteira e o `licoes.md` desta skill.
- As entradas da cena: `textos-tela.json` (o que vai à tela, e a grafia), `regencia.json` (o tempo) e `conceito-visual.json`
  (a direção).

## Etapas
1. **A cena HTML do canal:** roupa §1 (`<html lang="en-US" data-render="4k-native">`, o quadro que enche o palco).
2. **Cor, tipo, tamanho e espaço:** roupa §2, §3 e §4 (identidade §2, §3, §4.1 e §4.2).
3. **Tempo e movimento:** roupa §5 (identidade §4.3 e §4.4, "A mão que arruma"; o ilustrador com a física) e as lições do
   `licoes.md`, que nenhum portão mede.
4. **O modelo da cena e a tela final:** roupa §6 e §7.
5. **A tela em inglês, o crédito e a mídia:** roupa §8, §9 e §10.
6. **Validar nesta máquina:** roupa §11 (os portões com `REGIE_MOTOR`, o `portao-margens` até sair 0, o portão de movimento
   quando a Sala o puser no canal; render só com `--4k` e a pré-carga, e o carimbo `2160p`). Comando que passe de 5 minutos
   não roda dentro de você: vai ao relato, com o comando exato (roupa §0, a regra dos 5 minutos).
7. **Antes de entregar, as lições:** confira cada lição do `licoes.md` em dois lugares:
   - nos quadros que você já tira para provar a cena: `python -X utf8 -B ferramentas/folhas-cena.py <proj> <id>`, do clipe 4K
     com o carimbo `2160p` (roupa §11);
   - nos instantes que cada lição aponta: a troca de destaque, a entrada da peça que volta, quadro a quadro a 30 fps quando
     a lição pede, com o `ffmpeg -nostdin`.

   Não faça folhas a cada 0,5 s: elas são da revisão de espectador, da Sala. Sem clipe (sem o ok de tiles na cena com mapa,
   ou com render de mais de 5 minutos), escreva no relato "L<n>: não conferida nos quadros" e o porquê; a Sala a confere
   depois do render.
   **Feito quando:** o relato traz a saída de cada portão e uma linha por lição, com o instante olhado ou o porquê de não ter
   olhado.

## Saída
- `out/<proj>/graphics/<id>.html` (rascunhos e quadros em `out/<proj>/_tmp/`, nunca em `graphics/`);
- o relato: a saída de cada portão e a linha de cada lição.

## O que esta skill NÃO faz
- não decide a lista de consertos (`consertar-cena`, do catálogo, ainda não criada). Até ela existir, num conserto vale o
  pedido para o que mudar, e esta skill para o resto: o "Pare se", a etapa 6 (os portões) e a etapa 7 (as lições), que a cena
  consertada também passa;
- não faz a cena de mapa sozinha (`gerar-mapa-animado-maptiler`), não monta a mesa de satélite (`montar-mesa-de-satelite`),
  não decide o crédito (`escrever-credito-na-tela`), não julga a cena (`julgar-cena-qc`) nem faz a miniatura
  (`titulo-e-miniatura`). As que não existem ainda são do catálogo: até lá, vale a roupa.

## Decisões do Lucas que ela segue
- `marca/identidade.md` §4.4 ("A mão que arruma", o texto parado enquanto se lê, "O ilustrador, com a física") e §5 ("A
  regra que fica": campo em branco esperando a voz não vai à tela; "Espaço vazio esperando a voz incomoda").
- "Os dois, após a cota (Recomendado)" (17/11/2026): as lições de julgamento do vídeo 7 nesta skill (catálogo, "A retomada").

## Lições (leia antes de entregar)
- `licoes.md`: o que a revisão de espectador achou nas cenas de mesa e de dado e nenhum portão mede.
