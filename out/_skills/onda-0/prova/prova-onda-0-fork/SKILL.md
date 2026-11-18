---
name: prova-onda-0-fork
description: Skill de mentira da prova da Onda 0 que roda dentro do qc-visual e só lê um arquivo. Use somente quando o pedido citar esta skill pelo nome, para a prova; em nenhum outro pedido.
context: fork
agent: qc-visual
background: false
metadata:
  versao: "0"
  atualizada: "2026-11-18"
  origem: "prova da Onda 0 (out/_skills/onda-0/); apagar no fim da prova"
---

# Prova da Onda 0: a skill dentro do especialista (skill de mentira)

Tarefa só de leitura, para a prova da Onda 0 das skills do canal. Não grave nem edite nenhum arquivo, não rode portão, render,
`regie` nem nada que gaste; não use `SendMessage` nem `send_message`; não use nenhuma ferramenta de navegador
(`mcp__claude-in-chrome__*`, `mcp__Claude_Browser__*`). Não leia a sua roupa nem o seu ofício: esta tarefa não é de julgar cena.

1. Leia o arquivo `canal.json`, na raiz do canal, e diga o valor do campo `slug`.
2. Diga, numa linha, o nome do modelo que você é, como o seu prompt de sistema o dá, e o tipo de agente que você é, se souber.
3. Diga se você tem a ferramenta `Skill` e se vê uma lista de skills no seu contexto (sim ou não, para cada uma).
4. Termine com a palavra combinada, exatamente assim: **PEIXE-BOI-MERIDIANO-73**
