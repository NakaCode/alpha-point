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

## 07/10/2026, 16:3x — as seis páginas do Los Angeles Times (s28, s38, s45), na 2ª rodada do `pesquisa-documentos`

O Lucas escolheu "Outra cópia, senão recriar" (12:03). O pesquisador achou fora do Internet Archive as quatro páginas de livro
(Commons e govinfo) e deixou para o navegador do app a pergunta das seis do Times: o jornal está no CDNC ou no Chronicling America?

| Site | O que se pediu | O que respondeu | Resultado |
|---|---|---|---|
| cdnc.ucr.edu | a lista de títulos (`?a=cl&cl=CL1`), uma página | "Executando verificação de segurança" (verificação contra bots) | parado; o CDNC fica fora pelo resto da tarefa |
| loc.gov (Chronicling America) | — | não aberto | às 11:1x de hoje o loc.gov já respondeu com o desafio do Cloudflare; com o CDNC também recusando, não se insistiu |

Conclusão: NÃO CONFERIDO se o Times de 1899–1909 está no CDNC ou no Chronicling America. O pesquisador registra que a coleção do
Times dessa época é da ProQuest (paga). Vale a recriação que o Lucas escolheu como segundo caminho: o trecho literal no visual do
canal, com a linha de fonte (`pauta-documentos.json` › `rodada_2.recriacao`).

## 07/10/2026, 19:0x — os retratos de Willard (s18) e Hood (s20), que o `pesquisa-pessoas` não achou por programa

| Site | O que se pediu | O que respondeu | Resultado |
|---|---|---|---|
| content.cdlib.org | o ark do Wikisource (`ark:/13030/tf0b69n7s8/`) | redirecionou à página inicial do Calisphere, sem bloqueio | o link antigo caiu |
| calisphere.org | a busca `"Charles Dwight Willard"`, e dois dos 5 itens | abriu, sem verificação (às 11:1x o mesmo site tinha dado 403 a outra busca) | ver abaixo |
| archive.dartmouthalumnimagazine.com | o artigo "WILLIAM HOOD '67" (mar. 1919) e as páginas dele | abriu, sem verificação (o robots.txt veta robôs; o navegador do app é a porta da regra do canal) | ver abaixo |

- **Willard, item `ark:/13030/tf0b69n7s8` (Bancroft, "California Faces"):** "Charles Dwight Willard, Johnson and Chester Rowell from
  Stanford U", foto de grupo (Graham Photo Co., Los Angeles), **sem data**. Pela regra do aviso do ano, não entra.
- **Willard, item `calisphere.org/item/8c87b9ac5dab14a8cc077704642f100c/` (California Historical Society, via USC):** "Collection of
  individual portraits of Sunset Club members set around a written history of the founding of the club, 1895". A descrição do
  acervo nomeia, no oval de retratos, em sentido horário a partir do topo: "… H. B. Wing, Charles Dwight Willard and Frank Wiggins".
  Direitos, na página: "Public Domain. Release under the CC BY Attribution license … Credit both "University of Southern California.
  Libraries" and "California Historical Society" as the source." É o mesmo quadro que o pesquisador viu no Commons, cuja legenda lá não
  trazia o nome. Caminho: a cópia do Commons, pela API, com o recorte do busto pela posição que a descrição dá (sem o navegador).
- **Hood, Dartmouth Alumni Magazine, março de 1919, pp. 220–222** ("William Hood '67, Chief Engineer of the Southern Pacific Railroad
  Lines", por Robert Fletcher): a p. 221 traz um retrato dele, sentado, com a legenda "William Hood '67 / Chief Engineer of the Southern
  Pacific Railway System". Publicado em 1919: domínio público nos EUA pela data. Baixar só pelo navegador do app, com o "sim" do Lucas
  a uma lista (o tamanho o site não mostra), e o aviso "Photo from 1919" na tela (a audiência é de 1892).
- **O download do Hood**, depois do "sim" do Lucas (19:1x: "Sim, baixe a linha 1"): o visualizador da revista não tem botão de
  download, só "Print this article". O navegador do app não salva imagem sem botão (o mesmo do Juneau,
  `out/juneau/_pesquisa/navegador-relato.md`), e baixar por script contornaria o `Disallow: /` do site. Nada foi baixado. Caminho que
  sobra: o Lucas salva a imagem no navegador dele e a manda no chat; sem isso, a s20 fica com o cartão de nome e cargo.
