# BRAND — a marca DESTE canal mora em `marca/`

> **[porte Regie]** No estúdio do Top10 este arquivo (`top10-estudio/knowledge/BRAND.md`, commit `4afda12`) era a fonte
> do sistema visual de marca. Num canal da Régie a marca é decidida no onboarding com o dono e mora em `marca/`.
> Este arquivo continua existindo só para que nenhum agente que o cite improvise uma marca.

## Onde está cada coisa

| O que | Onde, neste canal |
|---|---|
| identidade: âncora, paleta com papel, tipografia e licença, alvos, contraste, recusas | `marca/identidade.md` |
| tokens executáveis de cena (cor por papel, `--fonte`, pesos, `--fs-*`, `--piso-*`) | `marca/tokens.css` (a cena liga com `<link rel="stylesheet" href="../../../marca/tokens.css">`) |
| voz e tom | `marca/voz.md` |
| superfícies (thumbnail, banner, cards) | `marca/superficies.md` |
| logo, transições, CTA, trilha da finalização | `marca/finalizacao.json` e `marca/logo/` (quando o onboarding os criar) |
| o piso neutro, se a marca ainda não foi decidida | `marca/_neutra/` e os tokens neutros do motor: `<motor>/src/cena/marca-padrao/tokens.css` |

## Se `marca/identidade.md` ainda está em branco

A marca não foi decidida. Não invente cor nem fonte: use os tokens neutros (`var(--fundo)`, `var(--acento)`,
`var(--fonte)`...) e avise o dono que o `arquiteto-de-marca` precisa rodar antes da produção.

## O exemplo de uma marca completa

`knowledge/exemplos/BRAND-top10.md` é o BRAND.md do Top10, como estava no estúdio. Serve para ver o **nível de
decisão** que uma marca pronta tem (logo e posição, tokens, escala alvo/piso, o que foi aprovado e descartado).
**Nenhum valor dele vale aqui**: a Neue Haas é proprietária, e o navy, o âmbar e o laranja são a identidade do Top10.
