# Pauta de pessoas: vídeo 5 (`big-sur`), passo `research`

O `pesquisa-pessoas`, em 04/11/2026, às 18:2x de Brasília. A fonte dos dados é `pauta-pessoas.json`, ao lado.
O contrato `pauta-pesquisa` saiu 0 e o `qc-procedencia big-sur` saiu PASS.

## O pedido

O espelho r2 (`out/big-sur/espelho.json`, sha256 `6e787c20…`) pede dois retratos:

| Cena | Pessoa | O que a cena pede | Sem retrato |
|---|---|---|---|
| s52 P1 (591,07–594,33 s) | Kirk Gafill | o card na mesa, ao lado da foto do Nepenthe | nome e cargo |
| s38 P1 (389,33–395,13 s) | John Pfeiffer | a miniatura junto do parque no mapa, opcional | só o nome |

## O resultado

**Nenhum retrato entregue.** Nada foi gravado em `_media/pessoa/`, e não há arquivo para o `conferente-de-midia` julgar.

| Pessoa | Ano do fato | Retrato | Na tela |
|---|---|---|---|
| Kirk Gafill | 2026 (a nota da Caltrans de 15/05/2026) | nenhum em fonte autorizada que se pôde ler | o card só com nome e cargo: `KIRK GAFILL` e `Owner, Nepenthe` (a fonte diz "owner of Nepenthe restaurant in Big Sur"; a forma final é do redator) |
| John Pfeiffer | 1934 (o plano de 1986, P [1235]) | nenhum em acervo aprovado | o P1 fica no mapa com o nome, como o espelho prevê |

### Kirk Gafill: onde se procurou

- **Commons:** nenhum arquivo dele, e nenhum retrato em `Category:Nepenthe`.
- **nepenthe.com**, o site da empresa (o robots.txt libera as páginas):
  - o nome dele aparece uma vez, numa citação na página inicial, sem foto;
  - nenhuma imagem do sitemap é dele;
  - `/media-photos` pede senha (HTTP 401), então não é pública.
- **A Big Sur Chamber of Commerce** (`bigsurcalifornia.org/chamber-of-commerce/`) respondeu 403 com uma verificação de robô. Parei ali.
- **As notas da Caltrans:** a de 15/05/2026 tem uma foto de grupo sem nenhum nome na legenda. Recortar alguém dela seria chutar.
- **A imprensa:** só reportagens com foto. Foto de jornal como retrato pede licença conferida (midia §7.2), e nenhuma oferece.

### John Pfeiffer: onde se procurou

- **Commons e Wikidata:** só homônimos. A foto da família no Commons é "Kate Pfeiffer … circa 1900", outra pessoa.
- **A NARA (API v2):** nenhum retrato.
- **Os verbetes da Wikipedia em inglês:** nenhum retrato.
- **O site da California State Parks:** não respondeu (timeout duas vezes). Também não é fonte aprovada da marca.
- **Calisphere, as bibliotecas do condado e a Big Sur Historical Society:** não são fontes aprovadas (espelho s38). Não se buscou nelas.

## O que a Sala poderia ler no navegador do app (opcional, chance baixa)

1. A página da Big Sur Chamber of Commerce, que recusou o script. Ela pode mostrar um retrato de Kirk Gafill.
2. A Library of Congress, por um retrato de John Pfeiffer.

Mesmo achado, o retrato só entra **com a data lida na origem** (midia §7.2). Foto de diretoria e de LinkedIn costuma não ter data. As duas cenas funcionam sem o rosto.

## Divergências para o `verificador-de-fatos`

- **s38, a venda:** o plano de 1986 diz 1934 e 706 acres. A Wikipedia em inglês diz "700 acres … in 1933". A tela segue o plano até ele decidir.
- **s52, o cargo:** reportagens antigas (só vistas em resumo de busca, não lidas na origem) o chamam de "general manager" do Nepenthe e de presidente da Câmara de Comércio. O card usa o cargo da fonte de 2026.

## Fora do pedido

- **Charlie Bixby (s31)** é nomeado pela voz, mas o espelho não pede o rosto dele. O Commons não tem retrato dele.
- **Colin Trohig** está na mesma nota da Caltrans, mas não é nomeado pela voz.
