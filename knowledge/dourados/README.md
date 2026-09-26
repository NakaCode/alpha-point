> **[porte Regie]** Origem: `top10-estudio/knowledge/dourados/README.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> **A régua deste canal:** a «régua vigente» `seed/examples/dourados/<Mxx>/` (16 cenas do Top10) não veio inteira. As 6 cenas que já nasceram 4K estão em `regua/<Mxx>/` — leia `regua/LEIA-ME.md` antes de copiar qualquer linha. O acervo `knowledge/dourados/eua-china/` citado abaixo não veio (aposentado como gosto em 22/jul, palco 1920, marca do Top10 cravada); o RIG dele vive, portado para 4K, em `<motor>/src/cena/_rig.js`.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# DOURADOS — o manual da edição dinâmica (destilado do eua-china, 11/jul/2026)

> ⚠️ **A RÉGUA MUDOU (22/jul/2026).** O Mateus **aposentou o `eua-china` como referência de arte**. A régua
> vigente do canal são **`lugar-mais-frio` e `3i-atlas`**, cujos exemplares vivem em
> `seed/examples/dourados/<Mxx>/` (16 cenas, escolhidas por DENSIDADE DE ANIMAÇÃO, com `.brief.json` ao lado).
> **Ao criar cena, olhe primeiro esses.** Este documento continua valendo como **manual do RIG e das TRAVAS**
> (a física da coisa não mudou); o que caducou é o `eua-china/` como padrão visual a imitar — ele fica só
> como acervo histórico das TÉCNICAS citadas abaixo.

O Mateus elogiou o **eua-china** ("várias técnicas novas excelentíssimas; a movimentação de dinâmica edição + narração casou muito bem") e mandou salvar pra replicar — **mantendo o Fable criativo**. Este é o catálogo. Os 41 HTMLs originais estão em `eua-china/` (referência viva; o vídeo foi arquivado no bucket).

⚠️ Isto é um **VOCABULÁRIO + RIG, não um template.** As TRAVAS abaixo são inegociáveis; a METÁFORA visual de cada cena é invenção livre do Fable (espelho de bronze, medidor de MAD, vórtice gravitacional, corredor de portas, faísca→incêndio, trança de comércio cortada por raio — nenhuma se repete, todas saíram da mesma caixa de ferramentas).

## A LEI-MÃE (o que o Mateus chamou de "dinâmica edição + narração")
**Montar NA VOZ, não ilustrar POR CIMA dela.** Duas coisas:
1. **Cada beat travado numa PALAVRA** da narração (word-lock): o elemento nasce/muda no timestamp exato em que a fala diz aquilo. O olho recebe no ritmo do som.
2. **Re-coreografar os MESMOS objetos** conforme a narração reinterpreta o assunto: um só conjunto de elementos conta a história inteira mudando de papel. (Ex. dourado: as 16 células de `dados-16-casos-12-guerra` nascem neutras → 12 pintam vermelho "terminou em guerra" → 4 acendem mármore "só quatro escaparam" → o grid recua e sobe o herói "75%" → **as mesmas células derivam pro centro formando um vórtice** "força gravitacional" → pulso de choque "conflito". Um palco, seis atos, zero elemento novo.)

## AS 7 TRAVAS INEGOCIÁVEIS (não são o desenho — são a física)
1. **Todo beat travado numa palavra.** Cada HTML abre com um bloco `Word-lock (−inSec): 0.9 história 3.0 aprende 5.01 medo…` cravando cada elemento num timestamp. Montar na voz.
2. **Nada estático, nunca.** Todo palco tem `#cam`/`#world` com push-in contínuo + micro-deriva senoidal; footage/foto com Ken Burns; blocos de dado "respiram" (`translateY(2.2*Math.sin(t*0.8+ph))`).
3. **Fundo = mídia REAL + scrim + gráfico por cima.** Explicação/dado lidera com footage ou imagem real; scrim/gradiente SÓ atrás do texto pra leitura. **Navy chapado é PROIBIDO**; se a cena for navy, ele tem que estar VIVO (câmera + starfield paraláctico + embers + glow que respira, como `dados-16-casos`/`gancho-12-de-16`). [ARTE-36]
4. **Texto = DADO ou DESTILAÇÃO, nunca a frase.** Filtro de texto abaixo. Anti-eco (não escrever a palavra que a voz diz naquele instante, salvo citação). [ARTE-37]
5. **Cor semântica contínua** entre cenas-irmãs (âmbar=ascendente, teal=dominante/escape, vermelho=guerra/ameaça, mármore=texto) — documentada no cabeçalho de cada arquivo.
6. **Tempo de leitura ≥~1,5s; ≤3 blocos por vez, cada um se aposenta** (carga visual dentro dos tetos, ARTE-27).
7. **Cards de navegação/CTA = overlay alpha compacto sobre o vídeo**, nunca full-frame de fundo sólido. [FIN-03]

## O RIG (o toolkit que todo HTML do eua-china compartilha — reusar)
```js
// easing
const clamp=(v,a,b)=>v<a?a:v>b?b:v;
const seg=(t,a,d)=>clamp((t-a)/d,0,1);              // rampa 0→1 a partir de a, duração d
const eo=p=>1-Math.pow(1-p,3);                       // ease-out cúbico
const eb=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;     // ease-in-out
const win=(t,s,di,e,do_)=>Math.min(seg(t,s,di),1-seg(t,e,do_)); // janela: entra em s, sai em e
// câmera (nada congela)
cam.style.transform=`scale(${1.02+0.0024*t}) translate(${3*Math.sin(t*0.23)}px,${2.4*Math.sin(t*0.17)}px)`;
// entrada progressiva NA palavra (o gesto assinatura) — blocos anteriores PERSISTEM
BL.forEach(([id,tw])=>{const p=eb(seg(t,tw,0.62)); el.style.opacity=p; el.style.transform=`translateY(${(1-p)*26}px)`;});
// grifo na palavra-pivô
hg.style.opacity=eb(seg(t,5.01,0.5)); hlL.style.transform=`scaleX(${eo(seg(t,5.01,0.55))})`; // âmbar acende + sublinhado varre
// count-up cravado na fala do número
E('n').textContent=Math.round(2688*eo(seg(t,2.9,1.6)));
// motor de FOOTAGE (N <video> do mesmo clipe = takes, trocados por opacity; seek f(t), NUNCA play())
function seekTo(v,tt){ if(window.__PREVIEW)return Promise.resolve(); return new Promise(r=>{v.addEventListener('seeked',r,{once:1}); v.currentTime=tt;}); }
window.__renderAt=async t=>{ await Promise.all(jobs.map(j=>seekTo(j.v,j.f(t)))); draw(t); };
window.__fotosProntas=Promise.all([...document.images].map(im=>im.complete?0:new Promise(r=>im.addEventListener('load',r))));
```
**Kit de acabamento "cinema"**: `#scrim` (gradiente de leitura **só onde há texto**) · `#vig` (vinheta box-shadow inset) · `#grain` (ruído canvas determinístico `mulberry32`, `mix-blend-mode:overlay`, deriva por frame — anti-banding, REND-01) · `#intro` (preto que some nos 0.5s iniciais) · **véu de corte** entre atos (`cut.style.opacity=Math.sin(PI*p)*.72` — piscada escura no ponto de montagem).

> 🚫 **O KIT NÃO VAI SOBRE MÍDIA REAL (ARTE-72).** `#vig`, `#grain` e o véu de corte são acabamento de
> **fundo desenhado** — cenário, gradiente, palco sólido. Sobre footage ou foto real eles **enterram o
> conteúdo**, e o conteúdo é justamente o que o espectador veio ver. Esta linha dizia "em toda cena
> boa" e essa frase, sendo leitura obrigatória ANTES de criar (`ROUPA-CENA` §topo), venceu na prática
> a proibição que mora noutro arquivo — o Mateus (26/jul): *"eu não gosto de cenas com muito
> sombreamento… não dá pra ver nitidamente o footage do fundo, que é o que verdadeiramente importa"*.
> **Sobre mídia real vale só o `#scrim`, e ele é LOCAL:** um gradiente que parte de **opacidade zero**
> e escurece apenas a faixa onde o texto pousa. Lavagem sobre o quadro inteiro — do tipo
> `linear-gradient(205deg, navy .30)` cobrindo tudo, ou um `rgba(0,0,0,.55)` de corpo inteiro — é
> **reprovação**, por mais bonita que fique.

## TRANSIÇÃO CONTÍNUA — o padrão Kurzgesagt (ARTE-40, a espinha do motion design)
A meta do modo `desenho` é **Kurzgesagt**: o vídeo é UM mundo espacial e a câmera VIAJA por ele; as cenas se integram (a câmera se move, os elementos se reconstroem virando a próxima explicação) SEM parecer troca de cena. Hard cut é a **exceção** (viradas de ato), não a regra. Duas formas, ambas determinísticas:
- **(a) ⛔ APOSENTADA (22/jul) — "continuidade de fronteira" entre 2 HTMLs.** Era: a pose-de-saída(N) = pose-de-entrada(N+1), cravada nos campos `transicao_entrada`/`transicao_saida` do conceito-visual. **Não funciona, e a medição provou:** o editor-de-arte é invocado **cena a cena, em sessão headless isolada** (`claude -p "execute a cena X e SÓ dela"`), sem memória entre invocações — quem executa não tem como saber onde a vizinha terminou. Os dois morphs mais ambiciosos do acervo viraram os **piores cortes do conjunto** (DIF 174,7 e 155,1 contra baseline aleatório de 30,7). Os campos foram REMOVIDOS do conceito-visual; não os reintroduza sob outro nome.
- **(b) ⭐ Sequência / plano-sequência — AGORA É O ÚNICO CAMINHO da continuidade:** UM HTML cobre um RUN de 3–4 falas (15–25s) com uma viagem de câmera contínua; a próxima explicação já está pré-montada FORA do quadro e a câmera chega nela enquanto os elementos morfam (o container-pai `#mundo` translada/escala = a "câmera"; os filhos entram/saem/transformam por `t`, word-locked). A continuidade deixa de ser promessa entre arquivos e passa a ser **garantida por construção, dentro de um arquivo só**. O diretor-de-arte marca o run com `fundir:true` no `fluxo`; muda o mapeamento espelho→XML (uma cena, janela longa) — o editor-chefe valida no `timeline-xml`. Fora de um run fundido, cena abre e fecha limpa, sem culpa: hard cut é o padrão honesto.
- **Morphing**: preferir transformar um objeto no próximo (o rótulo vira a coluna, a curva vira o rio) a apagar-e-desenhar — SVG `path` interpolado, `transform` contínuo, opacidade cruzada. É o que faz "os elementos se reconstruírem".
- **Base ALTA:** câmera viva + elementos que se remontam é a linha de base de TODA cena de desenho — **padrão da casa, não um campo por cena** (o antigo `motion:"kurzgesagt"/"sobrio"` foi cortado do conceito-visual em 22/jul justamente por ser sempre o mesmo valor). O conectivo real (apresentador, dado simples) é sóbrio por natureza. Não-showpiece ≠ morno.
**Glow SEM filter animado (REND-03):** stroke duplicado translúcido largo atrás do stroke fino — nunca `feGaussianBlur` num nó com transform.
**Setas ancoradas (nunca flutuam):** cabeça na ponta já desenhada via `getPointAtLength`+`atan2`; nós na curva por De Casteljau.

## TÉCNICAS (agrupadas — cada uma tem um dourado que a exemplifica)
- **Transição de estado / re-significação:** `dados-16-casos-12-guerra` (células→vórtice), `dados-nuclear-freio` (agulha empurra pra GUERRA e REVERTE pra FREIO em "funcionou ao contrário"), `dados-saida-economia` (pictograma run→$ na palavra "dinheiro"; trança de comércio cortada por raio em "guerra").
- **Footage real + gráfico por cima (modelo da diretriz #1):** `dados-china-ascensao` (curva de PIB sobre vilarejo→fábrica→Pudong), `dados-chips-ia` (92%/TAIWAN sobre fábrica de wafer), `dados-saida-economia` (US$584bi sobre o porto de Yangshan real), `desenho-mecanismo-medo` (diagrama causal magro sobre footage das potências).
- **⭐ INSET DE PROVA REAL — o Mateus AMOU ("peso absurdo"):** numa cena DESENHADA/conceitual (diagrama, mecanismo, mapa), abrir um INSET de footage REAL do fenômeno num canto (picture-in-picture) ancora a explicação na realidade — o desenho explica o mecanismo, o vídeo real PROVA que aconteceu. Exemplar: `seed/examples/dourados/M02/fisica-reentrada.html` (diagrama da reentrada em camadas + `#inset{position:absolute;left:120px;top:600px;width:760px;height:418px}` com `<video>` real da reentrada no canto inf-esquerdo, entrando word-locked na hora certa). Sempre que houver footage/foto REAL do que se explica, considere um inset de prova — vale para NASA/ESA/USGS/arquivo. É a PESQ-17/ARTE-36 numa forma de composição: o real como EVIDÊNCIA dentro do conceito.
- **Word-lock + grifo:** `citacao-tucidides-frase` (frase em 3 blocos que persistem, "medo" acende âmbar), `citacao-graham-allison` (régua varre 1500→2000 em "vasculharam").
- **Câmera multi-ato + match-cut:** `cinematico-4-escaparam` (câmera piecewise por ato), `split-esparta-atenas`→`citacao-tucidides-frase` (termina no busto de Tucídides, a próxima continua nele), `bridge-voltar-no-tempo` (streaks radiais + odômetro de ano que quase-para em cada época).
- **Split que vira trio:** `split-esparta-atenas` (divisor diagonal se parte e abre coluna central).
- **Card de título CERTO (não é CTA):** `titulo-topico-1-raiz-do-medo` (footage full-bleed + scrim radial + manchete curta "A RAIZ DO MEDO" + kicker "PARTE 1"). ARTE-34/ARTE-29.

## O FILTRO DE TEXTO — quando pôr, quando NÃO
**Regra:** texto na tela = o DADO ou a DESTILAÇÃO editorial. **Nunca a frase que a voz está dizendo.**
**GANHA tela:** números-herói/count-up (`12 EM 16`, `75%`, `US$584bi`) · nome próprio+cargo (`TUCÍDIDES · historiador grego`) · lugar/entidade (`ESTREITO DE TAIWAN`, chips de bandeira) · data/período (`1991`, `2.500 ANOS`) · a TESE em 2–4 palavras (`O MEDO`, `NÃO TERMINOU.`) · citação verbatim (modo M06, com grifo no pivô).
**NÃO ganha tela:** artigos/preposições/verbos/conectivos/frases da narração · a palavra exata que o narrador diz naquele instante (anti-eco) · legenda do que a imagem já mostra (vê barco + ouve "barco" = cortar).
**Teste:** apague a palavra da tela; se voz+imagem já entregam, corte. "O público não é burro."

## ANTI-PADRÕES (o que o Mateus reprova — arquivos no ponto-nemo)
1. **Navy chapado** (`ponto-nemo/graphics/cronologia-mergulho-final.html`): fundo 100% navy sintético, zero mídia real, cena parafusada na tela (sem `#cam`), lista de bullets. A slide retrógrada arquetípica.
2. **Slide/gráfico parafusado** (`compromissos-diplomaticos.html`): barras PowerPoint, a camada de conteúdo nunca se move como um todo. (Também mata o footage com `opacity:.55`+scrim `.92` → lê como navy.)
3. **CTA/navegação full-frame** (`cta-voce-assiste`, `bumper-voce-assiste-2/3/4`, `cta-membro` — os que EU fiz errado): fundo vinho sólido cobrindo a tela. Devem ser overlay alpha compacto.
4. **Texto redundante** (`abertura-barco-pacifico.html`): revela "UM"·"BARCO"·"NO"·"VAZIO" palavra-a-palavra — artigos/preposições como texto-herói, legendando o óbvio. Contraste: aberturas do eua-china destilam a TESE ("A PARTE ESQUECIDA / É A MAIS IMPORTANTE"), não transcrevem.

## PRINCÍPIO — repertório forte, Fable livre
Entrega-se ao Fable o RIG (easing + word-lock + motor de footage + kit de acabamento + cor semântica + setas ancoradas) e as 7 TRAVAS. A INVENÇÃO — qual metáfora visual cada cena vira — continua dele. A "dinâmica edição+narração" não vem de layout fixo; vem de (1) travar cada estado numa palavra e (2) re-coreografar os mesmos objetos conforme a narração os reinterpreta. Essa é a lei-mãe; o resto é liberdade.
