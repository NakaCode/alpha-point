# Vídeo 2 (los-angeles): o que o Claude central conferiu no navegador do app

Regra: CLAUDE.md, "O navegador do app, sem o Lucas acompanhando" (devagar, só as páginas do item; verificação de robô, captcha,
"unusual traffic", login ou desafio do Cloudflare param o site pelo resto da tarefa, sem nova tentativa).

## 07/10/2026, 11:1x — o retrato de George H. Mendell (s16), que o `pesquisa-pessoas` não achou

| Site | O que se pediu | O que respondeu | Resultado |
|---|---|---|---|
| loc.gov | a busca `"George H. Mendell"`, só imagens | "Just a moment..." (desafio do Cloudflare) | parado; o loc.gov fica fora pelo resto da tarefa |
| calisphere.org | a busca `Mendell` | 107 itens; nenhum é o engenheiro (Mendel, Loren W. Mendell, a rua Mendell de São Francisco) | sem retrato |
| calisphere.org | a busca `"G. H. Mendell" OR "Colonel Mendell" OR "George H. Mendell"` | 403 Forbidden | parado; o Calisphere fica fora pelo resto da tarefa |

Conclusão: a s16 segue com o card só de nome e cargo ("Col. G. H. Mendell, Corps of Engineers"), como o `pesquisa-pessoas` propôs.
Não se abriram o fromthepage.com (403 ao script do pesquisador), a biblioteca digital do Corpo de Engenheiros, a Huntington nem a Bancroft.

## 07/10/2026, 12:1x — a licença do aéreo da s01 (o `downtown-los-angeles-aerial-dronalist-2022.webm`, reprovado pelo conferente)

O conferente reprovou o arquivo porque a revisão de licença do Commons estava pendente e a página de origem não mostrava a licença.
O Claude central abriu a página de origem no navegador do app: https://www.youtube.com/watch?v=FFRW43AVTQk ("Downtown Los Angeles at
Night", the Dronalist, 11 de jun. de 2022). A descrição, expandida, diz hoje (trechos literais):
- "Standard YouTube License: Watching and sharing the link is encouraged!"
- "No Creative Commons: This footage is NOT free for re-upload or "remixing.""
- "Content ID: We use automated rights management. Unauthorized use will be claimed and monetized by the creator."
- e oferece o master pago na Pond5.

Conclusão: o "CC BY 3.0" do Commons não se sustenta na origem de hoje, e o vídeo tem Content ID. O arquivo não vai à tela por
nenhum caminho; a abertura (s01) fica para a caça nos bancos pagos (`lista-de-caca.json`), que só roda quando o Lucas pedir.
