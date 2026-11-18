---
name: registrar-aprendizado-como-skill
description: >-
  Decide se um erro resolvido vira lição na skill da etapa, skill própria, trava automática, regra no CLAUDE.md ou aviso
  ao motor, e o escreve lá. Use quando um erro, um tropeço, um achado de revisão ou uma correção do Lucas ensinou algo
  que não pode se repetir. Não use para uma decisão nova do Lucas sem erro.
argument-hint: "<o erro, em uma frase> [<proj>]"
metadata:
  versao: "2"
  atualizada: "2026-11-18"
  origem: "canal; out/_skills/catalogo.md §1.5 (com o c' do cético) e etapas.md S60; Onda 0, com as trocas do cético da Onda 0"
---

# Registrar um aprendizado como skill

**Acima desta skill:** o `CLAUDE.md` (o núcleo e o índice de `sala/`), o `setores/REGIMENTO.md`, o catálogo
(`out/_skills/catalogo.md` §1) e a marca (`marca/`). Se divergirem, pare e avise o Lucas; até a resposta, vale a regra mais
restritiva, e a skill nunca vence o `CLAUDE.md` nem o regimento.
**Quem roda:** a Sala (o Claude central), que grava em `.claude/skills/`, no `APRENDIZADOS.md` e no `CLAUDE.md`, e commita.
Setor, especialista ou subagente que achar o erro escreve as quatro linhas (etapa 1) no relato dele, e a Sala registra. Só grava
aqui o subagente da Sala, com um pedido que diga onde. O setor e a peça nunca gravam aqui (`setores/REGIMENTO.md`, "O que nunca
sai da Sala"), e o setor não usa a ferramenta `Skill` ("As ferramentas do setor").
**Custo:** nenhum crédito. Cada teste de mesa custa um leitor em Sonnet (~100 mil tokens de contexto, quase tudo a carga
inicial; `out/_skills/onda-0/RELATO.md` §5), e o cético, mais um agente. Nunca os scripts de avaliação do `skill-creator`
(`run_eval`, `run_loop`), que abrem centenas de `claude -p`, sem o ok do Lucas.

## Pare se
- a lição afrouxa uma regra de segurança, do regimento ou uma decisão do Lucas (download sem o "sim", site que recusa robô, chave, gasto acima do teto, música em IA, motor, navegador do Lucas): pergunte a ele no chat; a skill nunca passa por cima do `CLAUDE.md`, do regimento nem da marca.
- o destino pede configuração (hook, `.claude/settings.json`, `permissions`) ou um campo que pede o ok do Lucas (`allowed-tools`, `hooks`, a injeção de comando no corpo, `disable-model-invocation`, `context: fork` com `agent`, `model`/`effort` num `fork`; catálogo §1.2): a decisão é dele, por pergunta no chat.
- a skill nova, ou a descrição ou o passo novo de uma que já vale, iria direto a `.claude/skills/`: o que está lá vale em segundos em toda conversa aberta, setores inclusive. Monte em `out/_skills/rascunhos/<nome>/`, e só mova depois do cético (etapas 4 e 8).
- a lição mexe no motor (`C:/projetos/regie`, `C:/projetos/regie-v1`), no apoio copiado do molde (`scripts/`, `contratos/`, `regua/`, os 15 de `.claude/agents/`) ou no `ilustracao/`: não se editam; vai ao `APRENDIZADOS.md` e ao Lucas (destino d).
- a mensagem literal do sintoma traz e-mail, nome de usuário, ID de conta ou outro dado pessoal (de banco, de PDF de licença, de mensagem): tire-o antes de gravar. O `licoes.md` e o `APRENDIZADOS.md` vão ao git (`CLAUDE.md`, "Caça nos bancos pagos").
- você é setor ou peça, ou subagente sem um pedido que diga onde gravar: escreva as quatro linhas no relato e pare.

## Antes de começar
- Leia o erro onde ele foi resolvido (o relato, o laudo, o `mantidos.json`, a conversa) e confira no disco que o conserto
  existe: o artefato vence o relato. Erro que não foi resolvido nem medido não vira lição: fica como pergunta no relato.
- Tenha à mão as skills que existem (os `SKILL.md` de `.claude/skills/` e o `INDICE.md`), o catálogo §2 (os 66 nomes, com as
  correções do cético) e o fim do `APRENDIZADOS.md` (o último número).

## Etapas
1. **Escreva o erro em quatro linhas**, mais a origem, no formato do `licoes.md` (abaixo): **Sintoma** (o que se viu, com a
   mensagem literal entre aspas, sem dado pessoal, ou a cena, o tempo e o quadro); **Causa** (a medida, não o palpite);
   **O que resolveu** (o conserto, com o arquivo); **Como evitar** (o que fazer da próxima vez, de preferência uma
   conferência que se rode antes de entregar); **Origem** (onde está a prova, o vídeo e a data).
   **Feito quando:** as cinco linhas existem, e cada uma se confere no disco.
2. **Ache a skill da etapa em que o erro nasceu** (não a etapa em que ele foi achado): pelos `SKILL.md` de `.claude/skills/` e
   pelo catálogo §2 (`grep -i "<palavra do sintoma>" .claude/skills/*/SKILL.md out/_skills/catalogo.md`). O achado da revisão
   de espectador numa cena de mapa nasceu na `gerar-mapa-animado-maptiler`, não na `revisar-espectador`.
   **Feito quando:** você tem o nome do catálogo e sabe se a pasta existe.
3. **Escolha o destino, nesta ordem** (catálogo §1.5); fica a primeira que servir, e c' e d somam-se a ela:
   - **a) lição na skill da etapa:** um bloco no `licoes.md`; se a lição muda um passo, o passo muda junto. É o caso comum.
   - **b) skill própria de problema:** só com gatilho próprio, que aparece fora da etapa (uma mensagem, um sintoma: "55 de 55
     cenas reprovaram com a mesma mensagem"). O nome leva o sintoma (catálogo §1.1).
   - **c) trava automática:** quando o erro não pode acontecer nunca e se mede: um portão (script que sai diferente de 0, no
     molde do `ferramentas/portao-margens.mjs`) ou um hook. Portão novo é trabalho da Sala, com prova; hook é configuração,
     com o ok do Lucas. Só aponte um portão que existe e mede aquilo: leia o cabeçalho dele, inclusive o que ele diz que
     não é dele. O que nenhum portão mede é lição (a), não "fica com o portão" (`licoes.md`, L3 e L7).
   - **c') regra de segurança:** se o erro tocou numa regra de segurança do canal, ela fica **também** no núcleo do
     `CLAUDE.md`, que todo agente lê, e não só na skill nem só em `sala/`. Mudar o `CLAUDE.md` é da Sala, no mesmo dia, sem
     especialista rodando (catálogo §3.4); depois, ela manda os setores relerem (`setores/REGIMENTO.md`, "Entre um vídeo e
     outro").
   - **d) aviso ao motor:** se um canal de culinária também sofreria o erro, ele é do motor: item no `APRENDIZADOS.md` com
     "Por que serve a outros canais" e o aviso ao Lucas no chat, para ele ver com o Mateus, além da lição.
   **Feito quando:** o destino está escrito, com o porquê de não ser o anterior da lista.
4. **A skill nova, ou a mudança de descrição ou de passo, nasce num rascunho, fora de `.claude/skills/`:**
   `out/_skills/rascunhos/<nome>/` (para mudar uma que já vale, copie a pasta dela para lá). Se a skill da etapa não existe,
   monte-a mínima: o nome e a descrição do catálogo §2 (com as correções do cético); "Acima desta skill", "Quem roda" e a
   linha "Se você não é a peça" (o modelo está nas três de etapa); o "Pare se" do grupo (catálogo §2.10); as etapas como
   **ponteiro** para a roupa e o ofício do especialista, sem copiar a roupa; a saída, o que não faz, as decisões por ponteiro
   e as lições; o `licoes.md` e o `gatilhos.md` (etapa 7). A forma está no catálogo §1.3; um modelo pronto é
   `.claude/skills/gerar-mapa-animado-maptiler/`.
   **Feito quando:** `node ferramentas/skills-conferir.mjs out/_skills/rascunhos/<nome>` sai 0.
5. **Grave a lição:** um bloco `### L<n> · <título curto>` no `licoes.md`, com as cinco linhas da etapa 1, no próximo número
   (ou a skill própria, em b). A lição que só acrescenta um bloco, sem mudar passo nem descrição, vai direto ao `licoes.md` de
   `.claude/skills/`; a que muda passo ou descrição vai ao rascunho. Suba `metadata.atualizada` (e a `versao`, se um passo
   mudou).
   **Feito quando:** o `skills-conferir` sai 0 na pasta onde a lição está.
6. **O `APRENDIZADOS.md`** (só a Sala grava): se já há um item sobre o erro, ele passa a terminar com `Skill: <nome>`, e a
   skill não repete a história. Item novo quando o destino é d), ou quando a história é longa demais para a origem da
   lição; senão a origem aponta a prova, e basta.
   **Feito quando:** o item termina com `Skill: <nome>`, ou a lição diz por que não há item.
7. **Teste de disparo de mesa**, se a descrição nasceu ou mudou (catálogo §1.4 e §1.7): o `gatilhos.md` com 3 pedidos que
   devem acordar a skill e 2 vizinhos que não devem, cada um com a seta. Um agente que não escreveu a descrição (em Sonnet:
   é leitura) recebe a lista que a conversa vê de verdade, com as skills de fora do canal (o anexo `skill_listing` mais
   recente da transcrição da Sala), à parte as descrições do catálogo §2 das que ainda não existem, e os pedidos
   embaralhados, sem as respostas (`out/_skills/onda-0/disparo-mesa/preparar.mjs --lista-real=<transcrição>` monta os três).
   Errou: reescreva a descrição com as palavras do pedido e repita.
   **Feito quando:** o resultado está no fim do `gatilhos.md`, com a data e quantos de quantos.
8. **O cético, antes de valer** (catálogo §4): um agente que não escreveu a skill lê o rascunho contra o `CLAUDE.md`, o
   regimento, a marca, a roupa e o ofício do especialista, com as perguntas de `out/_skills/onda-0/cetico.md` (o pedido
   errado, a regra afrouxada, a lição mal resumida, o que piora o trabalho de quem segue a skill ao pé da letra). Só depois
   das trocas dele a pasta vai para `.claude/skills/<nome>/` e a linha entra no `INDICE.md`. Skill nova fora da ordem das
   ondas ganha uma linha ao Lucas no chat, ao registrar (catálogo: "Cada skill só nasce com o ok do Lucas para a onda dela").
   **Feito quando:** o laudo do cético está ao lado do rascunho, as GRAVES dele estão resolvidas, e
   `node ferramentas/skills-conferir.mjs` (todas, com o índice) sai 0.
9. **Procure a regra antiga** (catálogo §1.5, passo 7): `grep` da frase em `.claude/skills/`, `marca/agentes/`, `marca/`,
   `CLAUDE.md`, `sala/`, `setores/` e `.claude/agents/conferente-de-midia.md`. A decisão do Lucas mora num lugar só, e a
   lição aponta para ela (`APRENDIZADOS.md`, item 46). O que tiver de mudar na roupa, na marca, no regimento ou no
   `CLAUDE.md` vai à Sala (ou ao Lucas, se for decisão dele).
   **Feito quando:** a busca foi feita, e o relato diz o que achou.
10. **Diga onde ficou**, no relato ou no chat da Sala: uma linha por lição (a skill, o destino e o porquê). Os avisos fora do
    chat estão desligados (`sala/avisos.md`): o `#aprendizados` do catálogo §1.5, passo 6, não se usa.
11. **Quando vale:** a Claude Code vigia `.claude/skills/` e, em 15 a 30 s, avisa a lista nova a toda conversa aberta no canal,
    a principal da Sala inclusive; antes do aviso, a chamada sai "Unknown skill", o que não é erro de forma. A skill já usada
    numa conversa fica com o texto de quando foi usada. Pasta `skills` que não existia ao abrir a sessão pede `/reload-skills`
    (a documentação). A prova: `out/_skills/onda-0/RELATO.md`, §3 e §10.

## Saída
- o bloco no `licoes.md` (ou a skill nova), com o `metadata` e o `INDICE.md` em dia, e o `skills-conferir` em 0;
- o laudo do cético ao lado do rascunho, quando houve rascunho;
- o item do `APRENDIZADOS.md` terminado em `Skill: <nome>` (só a Sala);
- uma linha por lição no relato ou no chat da Sala. O commit é da Sala, com o `segredos.mjs --staged` antes.

## O que esta skill NÃO faz
- não registra decisão do Lucas sem erro: isso é a `registrar-decisao-do-dono` (catálogo §2.5; ainda não criada: até lá, a
  Sala registra no lugar único da decisão);
- não substitui a memória da Sala: a correção do Lucas ao jeito da Sala conversar com ele (a língua, o tamanho da mensagem,
  quando perguntar) continua na memória; o que ensina uma etapa da linha vem para cá;
- não conserta o erro (o conserto é da etapa, por quem a faz) nem escreve o portão (trabalho próprio da Sala, com prova);
- não edita roupa, marca, ofício, `CLAUDE.md`, `sala/`, regimento nem configuração: diz o que muda, e a Sala ou o Lucas aplica.

## Decisões do Lucas que ela segue
- "66, lições dentro (Recomendado)" (08/10/2026): a lição mora no `licoes.md` da skill da etapa, e skill própria só com
  gatilho próprio (catálogo, as decisões no topo).
- "Os dois, após a cota (Recomendado)" (17/11/2026): o portão de movimento e as lições de julgamento nas skills das etapas
  (catálogo, "A retomada").
- Os avisos fora do chat estão desligados (`sala/avisos.md`).

## Lições (leia quando a etapa pedir)
- `licoes.md`: os erros deste próprio registro.
