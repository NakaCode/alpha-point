<!-- Roupa do Alpha Point para o designer-de-navegacao. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Agente: .claude/agents/designer-de-navegacao.md (projeção do commit 7ab9543 da pré-v1,
     Source-SHA256 d3cc81a0bb…). Molde de formato: template/marca/agentes/designer-de-navegacao.md da pré-v1,
     que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Fontes: CLAUDE.md, canal.json,
     marca/identidade.md, marca/voz.md, marca/tokens.css. Se o Lucas mudar a decisão do §1, esta roupa se
     reescreve nesse dia. -->

# ROUPA ALPHA POINT — designer-de-navegacao

> Só o que é do canal. O ofício (o sistema de orientação na tela, a matemática do relógio) está em
> `.claude/agents/designer-de-navegacao.md`. Neste canal ele **não tem trabalho**, pelo motivo do §1.

## 1 · O Alpha Point não põe navegação na tela

**Decisão do Lucas, 26/09/2026** (CLAUDE.md, "O que a Régie faz" e "Os especialistas"): os capítulos vão só
na descrição do YouTube. Não há na tela:
- card de título de tópico;
- card de progresso ("onde você está", "a seguir");
- sumário;
- abertura ou título de compilado (hoje o canal não tem compilado).

O roteiro não tem linha `**Título**`, e nenhuma se acrescenta (CLAUDE.md).

## 2 · Se você for chamado

- Responda "não se aplica neste canal: sem títulos de capítulo na tela (Lucas, 26/09/2026)" e devolva ao
  Claude central.
- Não desenhe template nem instância.
- Não rode `scripts/navegacao/gerar.mjs`: não há navegação na tela, e o estado dele está nos tropeços do apoio
  (CLAUDE.md, "Os especialistas").
- Não use `templates-cena/navegacao/*.html` nem `knowledge/TITULOS-TOPICOS.md`. Vieram do molde com
  `lang="pt-BR"`, rótulos em português e a cor e a logo de outro canal.
- **Nunca rode** `narrar.mjs` (é ele que poria ~3 s de silêncio no lugar de um `**Título**`, gastando crédito
  da ElevenLabs e refazendo o relógio) nem `transcrever.mjs`. Gasto só com o ok do Lucas (CLAUDE.md).
- Os 20 s finais sem voz (`canal.json` › `narracao.cauda_tela_final_s`) são da tela final do YouTube. Não são
  navegação e não são seus: quem os cobre é o `editor-de-arte`.
- As outras decisões do Lucas que valem para todo especialista, também aqui:
  - **mapa = MapTiler** (`canal.json` › `mapa.perfil`), com `© MapTiler © OpenStreetMap contributors` na tela
    durante todo o mapa, e o que vem do OSM com o crédito do OSM (identidade.md §6; CLAUDE.md, pré-v1 item 6).
    O gasto de pedidos na MapTiler ainda não foi liberado: nenhum quadro ou render de mapa sem o ok dele;
  - **documento do governo do Estado do Alasca e imprensa** (ADN, KTOO) não estão no domínio público que a
    identidade.md §7 isenta de crédito, e nos EUA a obra do governo federal é domínio público por lei
    (17 U.S.C. §105), e a estadual não tem essa regra geral: confira peça a peça. DECISÃO DO LUCAS PENDENTE: a regra de uso deles na tela; até lá, só entram com a
    licença conferida e gravada na procedência (midia.md §1);
  - **banco pago** (midia.md §1, §2): evento real nunca vem dele; B-roll genérico vem, na ordem Envato
    Elements → Motion Array → Storyblocks → Shutterstock, baixado só pelo Lucas, à mão, na conta dele
    (§2.3; robô e script proibidos, §2.5). Você entrega a lista do que procurar, nunca baixa nem abre o banco;
  - o `npm install` não foi autorizado: portão de navegador sai NÃO MEDIDO (CLAUDE.md, "Os especialistas").

## 3 · O que valeria, se o Lucas mudar a decisão

Nada disto se aplica hoje. É o ponto de partida para reescrever esta roupa com ele, a partir da marca:
- **Faceless** (identidade.md §0 e §5), palco 3840×2160, `<html lang="en-US" data-render="4k-native">`.
- **Texto de tela em inglês dos EUA**, AP Stylebook, no formato da identidade.md §7: `ALMOST 3,000×`, `28.0×`,
  `22.2 ft (6.76 m)`, `MAY 1, 1994`, `$265 billion`.
  ⚠️ Os exemplos do ofício e do molde estão em português ou no formato brasileiro e não se copiam:
  - a capitalização de frase do português;
  - os kickers "você está em", "a seguir" e "NESTE COMPILADO".
- **Público**: norte-americano de 25 a 60 anos, que não acompanha geopolítica (identidade.md §0; voz.md §1).
  O "35+" do ofício não é deste canal.
- **Tipo**: Inter e Barlow Condensed, pelos tokens (identidade.md §3).
- **Cor**: pelos papéis da identidade.md §2. O `--destaque` é de uma entidade só, e o anel é a única exceção:
  a cor do relógio é decisão a tomar com o Lucas. Sem degradê (`--degrade: none`).
- **Espaço**: a pílula `--rotulo` para texto sobre imagem (identidade.md §4.1). Nenhuma logo do canal. O canto
  inferior direito de 400 × 400 px livre (identidade.md §4.2).
- **Vocabulário de máquina não se traduz**: `modo` (`titulo-topico`, `navegacao`), chaves de JSON, `data-qc-*`
  (CLAUDE.md, "O vídeo fala inglês").
- **Este ofício não vai à rede.** Se um dia for: site que recusa leitura automática (403, captcha, verificação
  de robô) não se contorna por meio nenhum; pare e diga no report (CLAUDE.md, "A marca").
