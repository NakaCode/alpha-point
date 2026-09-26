> **[porte Regie]** Origem: `top10-estudio/knowledge/MIDIA-REAL.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Neste canal só entra mídia com licença conferida e procedência registrada (`_PROCEDENCIA.json`).
> Trechos trocados no porte estão marcados `[porte Regie]`.

# MÍDIA REAL — footage 4K + fotos (PILAR OBRIGATÓRIO do pipeline)

> **PRECEDÊNCIA:** esta doc é OBRIGATÓRIA e vem logo após `ROUPA-CENA.md`. TODO agente (roteirista, caçadores, Diretor, críticos) DEVE cumprir. Regra do Mateus (03/jul/2026): *"o pipeline precisa prever fortemente a inserção de footages 4K e fotos reais, com curadoria e download, e prédios 3D estilo drone — de forma organizada pra não errar mais."*

## 0) NORTE = DOCUMENTÁRIO PROFISSIONAL · 4 PILARES
O alvo de cada vídeo é uma produção nível **BBC News Brasil / History Channel / Fantástico**. "Animação" = a EDIÇÃO inteira; ela se monta com **4 PILARES**, cada um usado SÓ onde é o certo (não força nenhum):

1. **MOTIONS DESENHADOS** (SVG/HTML/Canvas) — o padrão que o Mateus AMOU (tomada, NY). É a base para **conceito, mecanismo, metáfora, "como funciona", processo, antes→depois**. NUNCA abandonar — mas também não é a única ferramenta.
2. **MÍDIA REAL** (footage 4K + fotos) — quando a cena mostra o MUNDO real: **lugar/cidade** (aéreo/drone QUANDO cabe + **takes fechados de rua, do bairro, das pessoas**), **pessoa**, **evento**, **objeto**, e **histórico** (MÁXIMO de fotos de museu/arquivo — regra Colombo). É o que dá cara de documentário. NÃO desenhe o que dá pra mostrar real.
3. **MAPAS ANIMADOS** — **TODO assunto que fala de LUGAR/geografia/rota/deslocamento/fronteira DEVE ter mapa animado** (obrigatório): base satélite HD real na **base ÚNICA MapTiler `satellite-v2`** (PESQ-21; agente `mapista` — NUNCA desenhar mapa à mão, PESQ-01), câmera com movimento (push-in, viajar pela rota, revelar região), rótulos + bandeiras dos países citados. É a espinha visual de qualquer tema geográfico (foi o fio condutor do NY). `modo:"mapa"` (2D) ou `"mapa3d"` (câmera-drone sobre endereço).
4. **INFOGRÁFICOS** — gráfico/número na tela **SÓ quando a informação EXIGE**: comparação numérica, dado, ranking, série, proporção. Não usar infográfico pra o que não tem número.

Regra de mistura: o vídeo bom ALTERNA os 4 conforme a narração pede — explica com desenho, MOSTRA com mídia real, LOCALIZA com mapa animado, COMPARA com infográfico. E em **geografia/geopolítica**, quando um país/estado é citado, entra a **BANDEIRA REAL em SVG** (ver §5b), inclusive sobre o mapa.
⚠️ **Drone NÃO é obrigatório em todo vídeo** — só quando o assunto é lugar/bairros/cidade (ex.: NY). Muitas vezes o footage certo é o take fechado (rua, gente, cotidiano), não o aéreo. **Mas o MAPA ANIMADO é obrigatório sempre que há lugar.**

## 1) Decisão: desenhar ou mídia real? (o montador marca, o editor-de-arte executa)
| Se a cena é sobre… | tipo `midia` | fonte |
|---|---|---|
| conceito, mecanismo, metáfora, "como funciona", processo, antes→depois | `animacao` (motion desenhado) | — (padrão v5) |
| **DADO / número / comparação / ranking / série / proporção** | `animacao` (INFOGRÁFICO) | — SÓ quando a info EXIGE número/gráfico (senão não force infográfico) |
| cidade/bairros/paisagem — mostrar o LUGAR | `drone` (aéreo) **quando cabe** ou `footage` (rua) | stock — aéreo SÓ se o assunto pede; muitas vezes o certo é take fechado |
| ruas, cotidiano, cultura, **PESSOAS** do lugar | `footage` | stock — b-roll fechado de rua, gente, vida local (dá cara de documentário) |
| pessoa real específica (fala, retrato, ação) | `foto` ou `footage` | stock / Google Imagens / imprensa — Reuters não **[porte Regie]** |
| evento noticioso recente | `footage` | stock / acervo institucional — Reuters não **[porte Regie]** |
| **histórico / época antiga** | `foto` (MÁXIMO de fotos) | **museus e arquivos** (§4) — trazer o MÁXIMO |
| objeto/obra/documento real | `foto` | stock / Google Imagens / arquivo oficial |
| **país/estado CITADO (geografia/geopolítica)** | bandeira SVG | **bandeira REAL em SVG** (§5b) — sempre que o nome é dito |

Regra de ouro: **se existe no mundo real, priorize MOSTRAR o real** (footage/foto), desenhe só o que precisa explicar, e use infográfico só quando há número. Nunca fabricar rosto; validar identidade por visão. O alvo é sempre a mistura de documentário (BBC/History/Fantástico).

## 2) DUAS formas de inserir footage (as duas são obrigatórias no repertório)
**Modo A — footage DENTRO da animação (embutido na cena):**
- `<video>` dentro do HTML da cena; no `__renderAt(t)` fazer **`video.currentTime = f(t)`** (seek determinístico, NUNCA `play()` solto — congela no render frame-a-frame). Gate `window.__fotosProntas` no `loadeddata`.
- Usar quando o footage é **um elemento** da composição (ex.: split terra×voo; footage ao fundo com gráfico por cima; janela de vídeo dentro do cenário).

**Modo B — footage SOZINHO na timeline (reprodução normal):**
- O footage entra como **clipe próprio na V2** (no `inSec` planejado), tocando normal, **com texto/elemento por cima se convier** (uma cena-overlay separada, fundo transparente, posicionada no mesmo `inSec`).
- Usar quando o footage **é o plano** (ex.: 6s de imagem aérea da cidade; clipe histórico; b-roll temático). O editor vê o clipe puro + a camada de texto por cima.
- No `project.json` a cena de footage-standalone tem `midia:"footage"` + o caminho do mp4; o `timeline-xml` a posiciona na V2 (mesma lógica das cenas renderizadas).

**4K SEMPRE.** Baixar na maior resolução disponível (≥3840×2160). Se a fonte só tem HD, upscale local (Real-ESRGAN) só para FOTO; footage 4K real > footage HD upscalado.

## 3) Curadoria + download **[porte Regie]**
> **[porte Regie]** No Top10 esta seção mandava baixar das assinaturas do Mateus (Shutterstock, Storyblocks, Envato,
> Motion Array) com perfis de Chrome já logados e `scripts/stock/baixar.mjs`, no Mac ou na VM por túnel, e reusar **[porte Regie: não veio — `stock/baixar.mjs`]**
> clipe Reuters pago. Nada disso veio: as assinaturas e a licença são do Top10, e a automação depende da infra dele.
> Neste canal a busca é `node <motor>/src/ferramentas/buscar-midia.mjs <proj> buscar "<termos>" --cena=<id>`
> (Commons, Openverse, NASA, the Met, DVIDS, NARA, Smithsonian, Europeana, Pexels, Pixabay), que grava licença e procedência.

O ofício continua valendo em qualquer acervo: variedade (repetir footage empobrece o vídeo), curar 2-3 candidatos,
validar por visão qual casa com a cena, ficar com o melhor e deduplicar (dHash). Se o dono do canal assinar um
acervo pago, só o que a assinatura cobre; item avulso pago nunca sem o dono autorizar.

## 4) Google Imagens e ARQUIVOS/MUSEUS (histórico)
- **[porte Regie]** A Reuters Connect saiu desta seção: é licença e contrato do Top10, e este canal não pode usá-la. Evento noticioso recente vem de acervo institucional ou de stock com licença conferida.
- **Google Imagens (CSE)** — para FOTOS que as plataformas não têm (pessoas, objetos, prints). **[porte Regie]** Sem adaptador no motor v1 (`<motor>/src/midia/fontes.mjs` o tirou, e a chave do Top10 não veio): neste canal, a busca é a do `buscar-midia.mjs`. **[porte Regie]** Neste canal só entra imagem com licença conferida e procedência registrada (o Top10 caçava «ignorando direitos, claims depois», com o respaldo jurídico dele; aqui esse respaldo não existe). Priorizar PD/CC, validar identidade por visão, creditar.
- **HISTÓRICO = museus e arquivos, MÁXIMO de fotos:** Library of Congress, NYPL Digital Collections, Smithsonian Open Access, Europeana, Getty Open Content, National Archives (NARA), Rijksmuseum, David Rumsey (mapas antigos), Wikimedia Commons, arquivos nacionais do país do tema. Trazer o **MÁXIMO** de imagens de época (o vídeo histórico rico usa MUITAS fotos, não uma). Upscale local se pequenas. Creditar fonte+licença discreto.

## 5) Mostrar um LUGAR (drone NÃO é obrigatório — usar quando cabe)
- **Drone/aéreo** só quando o assunto é a cidade/os bairros/a paisagem (ex.: NY). `midia:"drone"` → footage aéreo/drone 4K real de stock ("aerial drone <cidade> 4k", "flying over <cidade>"). NÃO forçar em todo vídeo.
- **Take fechado (chão)** — muitas vezes o certo pra "mostrar o lugar/as pessoas" é o b-roll de RUA: gente andando, comércio, cotidiano, cultura do bairro. `midia:"footage"`, buscar "<bairro/cidade> street life", "people walking <cidade>", "<lugar> daily life 4k". É o que dá alma de documentário.
- Entra em Modo A (fundo com texto) ou Modo B (clipe puro). (Futuro: bridge do motor MAPAS ANIMADOS p/ drone procedural sobre endereço exato — quando o engine voltar.)

## 5b) BANDEIRAS REAIS em SVG (geografia / geopolítica)
Sempre que um **país ou estado é CITADO** numa cena de geografia/geopolítica, mostrar a **bandeira REAL em SVG** ao lado do nome/no mapa (não desenhar bandeira à mão, não usar emoji). Fonte: **Wikimedia Commons** tem TODAS as bandeiras nacionais e subnacionais em SVG (`Flag_of_<país>.svg`, `Flag_of_<estado>.svg`) — domínio público/CC. Baixar o SVG, embutir inline (escopar o CSS pra não explodir — regra da ROUPA). Casar a bandeira com o país no mapa/rótulo (o `pesquisa-imagens` baixa; o editor-de-arte posiciona). Vale pra rótulo de país no mapa, ranking entre países, aliança, rota entre nações, etc.

## 6) Como cada agente cumpre (o encadeamento)
1. **Roteirista** → marca em CADA segmento o campo `midia` (`animacao`/`footage`/`foto`/`drone`) + `midia_termos` (termos de busca) + `midia_necessidade` (o que precisa). Marcar mídia real SEMPRE que o assunto for real/histórico (não desenhar o que existe).
2. **Caçador de mídia (curador)** → para cada cena `footage`/`foto`/`drone`: cura+baixa 4K das plataformas (§3), Google Imagens (§4) e arquivos/museus (§4, histórico) (**[porte Regie]** sem Reuters). Salva em `out/<proj>/_media/footage/<cena>/` e valida por visão.
3. **Diretor / agente de cena** → embute (Modo A) ou monta a cena-overlay (Modo B); footage com seek determinístico; 4K.
4. **Críticos** → reprovam cena que DESENHOU algo que deveria ser mídia real (lugar/pessoa/evento/histórico) ou que ficou HD onde dava 4K.
5. **Entrega** → cenas de footage-standalone entram na V2 pelo `inSec` como qualquer cena renderizada.

## 7) Checklist anti-erro (o pipeline não pode mais errar nisto)
- [ ] Toda cena de lugar/pessoa/evento/histórico foi marcada como mídia real (não desenhada)?
- [ ] Footage 4K (≥2160p)? Foto na maior resolução (upscale se preciso)?
- [ ] Histórico trouxe o MÁXIMO de fotos de museu/arquivo (não só uma)?
- [ ] Drone/cidade previsto com footage aéreo real?
- [ ] **[porte Regie]** Licença e procedência de cada arquivo gravadas (`_PROCEDENCIA.json`)?
- [ ] Shutterstock: só ilimitado (zero compra)?
- [ ] Identidade validada por visão? Nunca fabricar rosto? Crédito discreto?
