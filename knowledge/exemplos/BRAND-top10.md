> **[porte Regie]** EXEMPLO, não regra. Origem: `top10-estudio/knowledge/BRAND.md`, commit `4afda12`, copiado sem
> mudança abaixo desta nota. É a marca do Canal Top10: nenhum valor dela (logo, Neue Haas, hex, selo «TOP 10», Reuters)
> vale para este canal. A marca deste canal mora em `marca/` (ver `knowledge/BRAND.md`).

# BRAND — Estúdio Top10 (estado 07/jul/2026, pós-decisões do Mateus)

> **A LOGO NÃO MUDA.** O rebrand proposto em 07/jul foi DESCARTADO pelo Mateus ("já tenho uma logo").
> O que vale: a logo oficial existente ("TOP" com O-play), **recriada em VETOR de alta qualidade** a partir do
> arquivo-fonte dele (`~/Documents/Posição-logo-em-4K---Canal-Top10-(BRANCO).png`, overlay 4K).
> Este arquivo é a fonte única do sistema visual de MARCA; o sistema visual de CENA continua em `ROUPA-CENA.md` + leis.

## 1 · Logo oficial (recriada 07/jul — aguardando aprovação para entrar no render)
- **Master vetorial:** `assets/brand/logo-top.svg` (traçado potrace fiel do original; branco).
- **Raster HQ:** `assets/brand/logo-branca-hq.png` (2064px, transparente).
- **Overlay de posição 4K recriado:** `assets/brand/posicao-logo-branca-4k-RECRIADA.png` — MESMA posição do
  original (bbox 3478,112 · 258×181 no frame 3840×2160, canto superior direito).
- ⚠️ O render segue usando `assets/logo-branca.png` (o atual) até o Mateus aprovar a troca na galeria
  (`out/brand-2026/graphics/logo-recriada-aprovacao.html`). Ao aprovar: substituir o PNG do render pelo
  derivado do SVG (mesmas dimensões/posição) e re-validar 1 cena com `shot.mjs`.
- Regra permanente: logo BRANCA default; azul só em fundo claro (opt-in `<!--logo:azul-->`). Nunca aplicar
  efeito/sombra/gradiente sobre a logo. Canto superior direito das cenas fica LIVRE (a logo entra no render).

## 2 · Tokens visuais de CENA (mantidos — são do padrão v5, não do rebrand)
`assets/brand/tokens.css` continua como fonte executável dos valores de cena: navy #05101F base + profundidade
obrigatória; tinta #F5F5F5/#9FB0C8; acentos com significado fixo (laranja #E94F37 destaque · âmbar #E0A33A dado ·
teal #1B998B geo · verde positivo · #C0392B alerta · grifo citação #F4D03F imutável); Neue Haas (Black 900 para
caps/heróis — gotcha Ã/Õ do Bold); escala de tela alvo/piso (herói 240/130 · título 160/130 · rótulo 76/52 ·
eixo 46/36 · crédito 40/36); safe area 64/56px; motion da casa (ease entrada `cubic-bezier(.22,.9,.24,1)`,
durações 240/600/800ms, nada congela, bloco se aposenta, máx 3 vivos).

## 3 · GC broadcast — o que ficou das propostas
- ✅ **M26 · lower-third de ENTREVISTA** (`out/brand-2026/graphics/gc-lower-third.html`) — APROVADO pelo Mateus
  (07/jul: "pra entrevistas de pessoas faça um molde, nome + cargo"). Uso: pessoa REAL falando em footage
  (entrevista Reuters, declaração, especialista) → faixa inferior esquerda com nome (Black) + cargo/lugar,
  entrada por máscara 600ms, vive ≥3s, se aposenta. Variação locator para LUGAR. Não substitui o modo
  `citacao` (card cheio com foto — segue para citação narrada sem footage da pessoa).
- ⏳ **M27 · cartela-dados-broadcast** — proposta pendente de avaliação (`out/brand-2026/graphics/cartela-de-dados.html`, cena própria; a demo dupla antiga com o stinger foi descartada).
- ❌ **M28 · stinger padronizado de capítulo** — DESCARTADO. Decisão do Mateus (07/jul): os títulos de tópico
  são **CRIATIVOS E ÚNICOS POR TEMA**, como os da Anomalia do Atlântico Sul (escudo-do-mundo) que ele gostou —
  cada vídeo ganha title cards desenhados no clima do tema (gerador `scripts/gerar-cards-titulo.mjs` + arte
  por tema), NUNCA um stinger genérico de marca.

## 4 · Regras herdadas intocadas
Selo "TOP 10 · NICHO" só no card de tese da abertura (ARTE-24) · crédito/fonte apenas quando exigido (lente 8) ·
footage full-bleed sem sombra · leis numeradas vencem tudo (a mais nova manda).
