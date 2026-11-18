---
name: escrever-textos-de-tela
description: >-
  Escreve as palavras de rótulo, número e legenda em inglês dos EUA, no formato do canal, sem repetir a fala nem
  contradizê-la (o hedge da voz fica no rótulo). Use quando falta o texto de uma cena, ou no passo screen_text. Pôr o texto
  na cena é editar-cena-html; o crédito de mídia, escrever-credito-na-tela.
argument-hint: "<proj>"
metadata:
  versao: "2"
  atualizada: "2026-11-18"
  origem: "canal; catálogo §2.1 (18) e etapas.md S29; mínima, criada na Onda 0 para as lições do vídeo 7, com as trocas do cético da Onda 0"
---

# Escrever os textos de tela

**Acima desta skill:** o `CLAUDE.md` ("O vídeo fala inglês"), o `setores/REGIMENTO.md` (quando roda num setor), a marca
(`marca/identidade.md` §3, §4.1 e §7; `marca/voz.md`; `marca/midia.md` §2.7), a roupa `marca/agentes/redator-de-tela.md` e o
ofício `.claude/agents/redator-de-tela.md`. Se a skill divergir de qualquer um deles, pare e diga no relato; até a resposta,
vale a regra mais restritiva, e a skill nunca vence nenhum deles.
**Quem roda:** a peça, o `redator-de-tela`, no passo `screen_text` e quando lhe devolvem um texto para mudar.
**Se você não é a peça:** a Sala e o setor não fazem esta etapa. O setor não usa a ferramenta `Skill` (`setores/REGIMENTO.md`,
"As ferramentas do setor"). Se esta skill carregou numa conversa de setor, não siga as etapas: despache a peça e ponha no
pedido o caminho `.claude/skills/escrever-textos-de-tela/SKILL.md` (e o do `licoes.md`).
**Esta skill é mínima** (Onda 0): as etapas apontam a roupa, sem copiá-la, e as lições do vídeo 7 estão no `licoes.md`. O
procedimento completo (o `etapas.md` S29 e o catálogo) entra na Onda 3.

## Pare se
- a grafia viria do `words.json` ou do `out/<proj>/roteiro.md` (a cópia para a voz, com aliases e números por extenso): a de tela sai de `roteiros/<proj>/roteiro-narrador.md` (roupa §2).
- o rótulo de lugar sobre mídia real nomearia um lugar mais específico que o `lugar_na_origem` do veredito `aprovado`, ou a mídia não tem veredito: vai ao relato, não à tela (roupa §4; `marca/midia.md` §2.7).
- um site recusa leitura automática (403, captcha, verificação de robô, login): pare naquele site, sem outro cliente nem cabeçalho trocado; nunca o navegador do Lucas nem o painel do app (roupa §1).
- o texto seria título de capítulo, card de tópico ou sumário: não vai à tela (Lucas, 26/09/2026: os capítulos ficam só na descrição).
- a forma curta de um nome próprio de 5 palavras ou mais, ou de um rótulo descritivo de 4, seria sua: é decisão do Lucas, vai ao relato (roupa §3).

## Antes de começar
- Leia a roupa `marca/agentes/redator-de-tela.md` inteira e o `licoes.md` desta skill.
- As entradas: o roteiro aprovado (`roteiros/<proj>/roteiro-narrador.md`), o espelho, a regência e o conceito do vídeo.

## Etapas
1. **De onde vem cada grafia:** roupa §2.
2. **A grafia de tela** (o formato dos EUA, o hedge da voz, o número com dono, o tamanho do texto, a regra da quebra):
   roupa §3 (identidade §7 e §4.1).
3. **O que cada tipo de texto leva** (lugar, card de pessoa, instituição, fronteira disputada, a pergunta da chamada):
   roupa §4; e a lição L1 do `licoes.md`, que nenhum portão mede.
4. **Os créditos na tela:** roupa §5 (o desenho é do `editor-de-arte`).
5. **Erratas e conserto da fala:** roupa §6.
6. **Os comandos e o report:** roupa §7 e §8 (`validar-contrato textos-tela`; o que vai ao `verificador-de-fatos`).
7. **Antes de entregar, as lições:** confira cada lição do `licoes.md` contra a lista de textos de cada cena e o espelho, e
   escreva no relato uma linha por lição.
   **Feito quando:** o `textos-tela.json` passa no `validar-contrato` e o relato traz a linha de cada lição.

## Saída
- `out/<proj>/textos-tela.json`, válido no contrato, e o report (o que foi ao relato em vez da tela).

## O que esta skill NÃO faz
- não desenha nem posiciona o texto (o `editor-de-arte` e o `mapista`), não decide o crédito pela licença
  (`escrever-credito-na-tela`), não dá veredito de fato (`verificar-fatos-do-video`, o `verificador-de-fatos`) nem muda
  a fala gravada. As que não existem ainda são do catálogo: até lá, vale a roupa.

## Decisões do Lucas que ela segue
- Sem títulos de capítulo na tela (26/09/2026, `CLAUDE.md`); o nome próprio de 4 palavras inteiro (07/10/2026, identidade
  §4.1); a forma do card de pessoa (identidade §5); a regra da quebra no "·" (decisão da Sala, roupa §3).
- "Os dois, após a cota (Recomendado)" (17/11/2026): as lições de julgamento do vídeo 7 nesta skill (catálogo, "A retomada").

## Lições (leia antes de entregar)
- `licoes.md`: o que a revisão de espectador achou nos textos de tela e nenhum portão mede.
