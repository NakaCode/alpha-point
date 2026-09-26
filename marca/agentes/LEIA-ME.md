<!-- Adaptado para o Alpha Point em 26/09/2026 a partir de template/marca/agentes/LEIA-ME.md da pré-v1
     (commit 7ab9543). Mudaram "Quem escreve", "As roupas deste canal" (no molde, "As roupas que já vêm no
     molde", que falava das roupas do Top10) e um item de "O que NÃO entra aqui". O resto é o do molde. -->

# A roupa de cada agente

Cada agente em `.claude/agents/<id>.md` termina com uma seção **ROUPA**, que manda ler
`marca/agentes/<id>.md`. É aqui que mora o que muda **de canal para canal** para aquele ofício:
paleta em uso, alvos de tamanho, grafia de tela, persona quando o agente escreve texto.

## Por que é separado do agente

O agente (o ofício) é o mesmo em qualquer canal e vem pronto do motor: ele é gerado a partir do
agent-core e **não se edita à mão**, porque a próxima atualização do motor apaga a edição. A marca é
só deste canal. Separar as duas coisas é o que deixa o motor atualizar o ofício sem pisar no gosto
do canal, e o canal mudar de gosto sem mexer no ofício.

## Quem escreve

Neste canal, o Claude central, com o Lucas decidindo. O `arquiteto-de-marca` da pré-v1 não está
instalado aqui. Cada roupa lê `marca/identidade.md`, `marca/voz.md`, `marca/midia.md` e o piso
`marca/_neutra/`, e cita a fonte de cada valor.

A régua de cada linha: **se ela continuaria verdadeira num canal de culinária, ela não é roupa.** É
ofício, e está no lugar errado: vai divergir da fonte na primeira atualização do motor.

## As roupas deste canal

As 15 roupas desta pasta foram escritas para o Alpha Point em 26/09/2026, uma por especialista
instalado (CLAUDE.md, "Os especialistas"). Nenhum valor do Top10 ficou nelas: o "Top10" só aparece
como procedência ou como aviso de que algo de lá não vale aqui. Onde o canal ainda não decidiu, a
linha diz **DECISÃO DO LUCAS PENDENTE** e o que se faz até lá.

Todo caminho que uma roupa manda rodar ou ler existe no canal ou na pré-v1 (`<motor>`); o que o
ofício cita e este canal não tem vem dito na própria frase. **Não há teste automático disso no
canal**: o `testes/roupas.test.mjs` da pré-v1 só lê as roupas do molde. Ao editar uma roupa, confira
à mão, no disco, cada caminho que ela cita.

## Quando o arquivo não existe

Até a roupa ser escrita, `marca/agentes/<id>.md` não existe, e isso é um estado válido: o agente
trabalha sobre o piso de `marca/_neutra/` (palco 3840×2160, pisos de texto, paleta neutra, voz sem
persona). O agente não inventa a marca que falta; ele declara que usou a neutra.

## O que NÃO entra aqui

- Chave de API, senha ou token: segredo nunca mora em arquivo do canal.
- Caminho de máquina (`C:\Users\…`, `/home/…`): o canal roda na máquina de outra pessoa.
- Regra de ofício ("cena sem fonte não vai ao ar"): isso já está no agente, e vale em todo canal.
- Estado de ferramenta do motor (o que cai nesta máquina, o que sai NÃO MEDIDO e por quê): mora no
  `CLAUDE.md` ("Os especialistas" e "Peças da pré-v1 em uso") e no `APRENDIZADOS.md`, que mudam junto
  com o motor. A roupa diz o que fazer aqui e aponta para lá.
