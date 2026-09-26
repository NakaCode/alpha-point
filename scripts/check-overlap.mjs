// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/check-overlap.mjs (linhas 1-494, commit 4afda12).
// O que mudou: o Chrome vem de lib/chrome.mjs (o instalado; sem o caminho do Mac/Linux cravado);
// as dicas de "rode em loop" deixaram o `for … do` do bash (o dono roda no PowerShell); o contrato
// quebrado (sem __renderAt, ou __renderAt que lança) virou reprovação EXPLÍCITA em vez de crash, e
// com isso todo o resto que morre — página que não abre, Chrome que cai — passa a sair 2 (não medi);
// o laudo diz quantos textos mediu, e zero texto com erro de JS na página é NÃO MEDIDO, nunca verde.
// Na integração da v1: o palco declarado vem da régua do render do motor (aspas simples e __native4k contam).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// Verificador AUTOMÁTICO de colisão de texto — varre TODOS os timestamps (passo fino) e acusa
// sobreposição de bounding-box entre elementos de texto VISÍVEIS (opacidade efetiva > limiar).
// Uso: node scripts/check-overlap.mjs <html> [passo=0.2] [minArea=140] [opMin=0.55]
//
// O `minArea` que você passa é SEMPRE em escala 1920 — o script converte pro palco real da cena.
// Ver "escala" abaixo.
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { PARA_OVERLAP } from "./qc-ornamento.mjs";
import { lancarChrome } from "./lib/chrome.mjs";
import { palcoDaCena } from "./lib/abrir-cena.mjs";
import { readFileSync } from "node:fs";
import { morrerComoNaoMedido, NAO_MEDIDO } from "./lib/nao-medido.mjs";
const [file, stepA, areaA, opA] = process.argv.slice(2);

// ── ARGUMENTO NÃO-NUMÉRICO MORRE AQUI, ALTO ─────────────────────────────────
// Este gate aceita UM html por vez. Rodado em glob (`check-overlap.mjs graphics/*.html`), o 2º
// arquivo cai em `stepA` e o 3º em `areaA` → MIN_AREA = NaN → `a <= NaN` é sempre false → a
// guarda nunca corta e TODA sobreposição de 0px² vira colisão. Medido em 03/ago: card01 acusou
// 3 pares com "área máx 0px²" e "limiar NaNpx²" — as três falsas.
// Silêncio aqui é caro: pela SIS-64 o portão (qc-cena.mjs) roda este gate por hash e o render
// PULA PARA SEMPRE a cena reprovada. Um glob distraído condena o lote inteiro sem ninguém ver.
// E o dano tem uma segunda cara, mais silenciosa: o gate mede só o PRIMEIRO arquivo e imprime
// "✓ SEM colisões", então quem passou 3 caminhos acha que mediu 3 cenas e mediu uma.
//
// ⚠️ PORTADO DE `video/galaxia-arco-flecha` (f82bbbd, 03/ago) em 08/ago — o conserto existia há
// cinco dias e nunca chegou ao `main`, onde vive o gate que a linha de produção realmente roda.
// Conferido no `main` antes de portar: 3 caminhos → "passo NaNs · limiar NaNpx²".
for (const [nome, v] of [["passo", stepA], ["minArea", areaA], ["opMin", opA]]) {
  if (v === undefined) continue;
  if (!Number.isFinite(parseFloat(v))) {
    // [porte Régie] a dica era um `for … do` de bash, que o PowerShell do dono não entende.
    const dica = /\.html?$/i.test(v) ? "\n  Este gate mede UM html por vez — rode um por cena, ou rode o portão inteiro:\n  node scripts/qc-cena.mjs out/<proj>   (roda este e os outros gates em todas as cenas)" : "";
    console.error(`✗ argumento '${nome}' não é número: ${JSON.stringify(v)}${dica}`);
    process.exit(2);
  }
}
const STEP = parseFloat(stepA || "0.2"), AREA_1920 = parseFloat(areaA || "140"), OP_MIN = parseFloat(opA || "0.55");

// ── [SIS-412] PASTA MORRE AQUI, E PELO MESMO MOTIVO DO GLOB ─────────────────
// A guarda acima só examina o 2º/3º/4º argumento, então `check-overlap.mjs graphics/` passa por ela
// inteira: é UM caminho, e não-numérico não se aplica a ele. O estrago aparece 20 s depois, dentro
// do Chrome — `file:///…/graphics/` renderiza a LISTAGEM DE DIRETÓRIO que o próprio navegador gera,
// que carrega sem erro nenhum e não tem `window.__renderAt`. A cena morre com
// `page.evaluate: TypeError: window.__renderAt is not a function`, que é exatamente a assinatura de
// um HTML de cena QUEBRADO. Medido em 18/ago/2026 na estação ARTE do `aceleradores-particulas`:
// a sessão leu isso como cena defeituosa e varreu os 28 arquivos um a um atrás do culpado — os 28
// passavam. Custou uma varredura inteira para descobrir que o defeito era o argumento.
// Errar alto custa uma linha; errar fundo manda alguém consertar uma cena que está certa.
try {
  const { statSync } = await import("node:fs");
  if (file && statSync(resolve(file)).isDirectory()) {
    console.error(`✗ '${file}' é uma PASTA — este gate mede UM html por vez.`);
    console.error(`  file:// de diretório abre a listagem do Chrome, que não tem o contrato da cena.`);
    // [porte Régie] sem o `for … do` do bash: o qc-cena é quem roda este gate em todas as cenas.
    console.error(`  Rode um por cena, ou o portão inteiro:  node scripts/qc-cena.mjs ${file.replace(/[\\/]+$/, "")}`);
    process.exit(2);
  }
} catch { /* inexistente cai no ERR_FILE_NOT_FOUND lá embaixo, que já é mensagem clara */ }

/**
 * ⚠️ O CHROME QUE NÃO SOBE NÃO É COLISÃO DE TEXTO (05/ago/2026, achado nº 2 da auditoria de código).
 *
 * Sem este `catch`, a falha de LANÇAMENTO do navegador — que ACONTECE, e é ambiental: na VM sem GPU o
 * Chrome morre com `ContextResult::kTransientFailure: Failed to send GpuControl` — sai **1**, que na
 * convenção da casa é "MEDI e reprovei". Foi assim que 9 cenas boas do `el-nino` foram carimbadas
 * reprovadas sem nunca terem sido medidas, e o vídeo travou 2h20 num defeito inexistente.
 *
 * ⚠️ E POR QUE SÓ O LANÇAMENTO, e não um `try` em volta do arquivo inteiro. O laudo é explícito:
 * *"basta o `check-overlap` ganhar um try/catch para o frame preto atravessar o portão inteiro"* —
 * hoje a cena de script morto (`__renderAt is not a function`) é barrada porque este gate ESTOURA no
 * meio da medição, e esse acidente é rede de segurança. O `pageerror` virou veredito em `qc-carga`,
 * `qc-fora-do-quadro` e `qc-tamanho` no mesmo dia, então a rede não é mais a única — mas trocá-la por
 * silêncio seria pagar um defeito para consertar outro. Aqui se separa só o que é da MÁQUINA.
 */
let b;
try {
  b = await lancarChrome();
} catch (e) {
  // [porte Régie] causa da máquina (sem Chrome, sem npm install) sai com a mensagem inteira: ela é o conserto.
  console.error(`⚠ check-overlap: NÃO MEDIDO — o Chrome não subiu: ${e.code ? e.message : String(e.message || e).replace(/\s+/g, " ").slice(0, 200)}`);
  console.error("  (exit 2 = não medi. Isto NÃO é reprovação da cena.)");
  process.exit(NAO_MEDIDO);
}
/**
 * [porte Régie] O RESTO DO QUE MORRE TAMBÉM É "NÃO MEDI" — e agora pode ser, sem perder a rede.
 *
 * O estúdio deixava o arquivo sem rede de propósito (ver o bloco acima): a cena de script morto
 * (`__renderAt is not a function`) só era barrada porque este gate ESTOURAVA com 1. Aqui essa
 * reprovação ficou EXPLÍCITA — o contrato é conferido antes do laço e o `__renderAt` que lança vira
 * `✗` com o instante —, então o crash deixou de ser a rede de segurança. O que sobra para morrer é
 * da máquina ou do caminho (arquivo que não abre, Chrome que cai no meio), e isso é exit 2.
 */
morrerComoNaoMedido("check-overlap");
const errosJS = [];
// viewport provisório só pra abrir; o definitivo sai do palco real medido abaixo
const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
p.on("pageerror", (e) => errosJS.push(String(e.message || e).replace(/\s+/g, " ").slice(0, 120)));
// `pathToFileURL` resolve relativo E absoluto. A concatenação anterior ("file://" + cwd + "/" + f)
// transformava um caminho absoluto em file:///Users/…/Users/… e o Chrome abria página em branco —
// que o gate lia como "nenhum texto, nenhuma colisão": verde por não ter visto nada.
await p.goto(pathToFileURL(resolve(file)).href);
await p.waitForTimeout(300);

// ── ESCALA: o palco manda, não o 1920 histórico ──────────────────────────────
// Cena 4K-nativa (REND-13/REND-15) tem stage de 3840px. Medir num viewport de 1920 já foi
// problema por dois motivos, e os dois somem aqui:
//   1. `minArea` é ÁREA: cresce com o QUADRADO da escala. O limiar de 140 calibrado em 1920
//      equivale a 560 em 4K — mantê-lo em 140 deixava o gate 4× mais sensível, gerando alarme
//      em sobreposição que ninguém vê.
//   2. cena que use unidades relativas (vw/vh) faz layout DIFERENTE num viewport menor, e aí a
//      medição não é da cena que vai ao ar.
// ⚠️ O PALCO SE LÊ NA DECLARAÇÃO, NÃO NO DOM (19/ago/2026). A detecção antiga era
// `getElementById("stage") || document.body`, e o `|| body` acertava POR ACIDENTE:
// só funciona quando o CSS da cena declara largura no próprio body. Medido no
// `especies-humanas`: 121 de 122 cenas declaram `body{width:3840px}` e mediam certo;
// a `n003-gente-de-outra-especie` não declara, então o body assumiu a largura do
// viewport (1920) e o gate derivou os pisos PELA METADE (130/52/36 em vez de
// 260/104/72) — e ainda imprimiu `✓ TAMANHOS ok`, que é verde vazio.
// O contrato da casa já resolve isso de forma declarativa: `data-render="4k-native"`
// no <html> (as 122 cenas do projeto o declaram) é a MESMA leitura que o `qc-carga`
// faz — e é por isso que ele acertava a cena em que estes dois gates erravam.
// ⚠️ Não use `querySelector('[data-render="4k-native"]')`: o atributo mora no <html>,
//    cuja caixa é a do viewport — mediria 1920 outra vez, com cara de conserto.
// [porte Régie] a declaração se lê pela régua do RENDER do motor (lib/abrir-cena.mjs › palcoDaCena):
// aspas simples e window.__native4k=true também são 4K — o `getAttribute` não via o segundo.
let texto4k = ""; try { texto4k = readFileSync(resolve(file), "utf8"); } catch { /* o goto acima já abriu ou falhou */ }
const declarado = await palcoDaCena(texto4k);
const palco = declarado.nativo ? { w: declarado.w, h: declarado.h } : await p.evaluate(() => {
  if (document.documentElement.getAttribute("data-render") === "4k-native") {
    return { w: 3840, h: 2160 };
  }
  const s = document.getElementById("stage") || document.getElementById("palco") || document.body;
  const r = s.getBoundingClientRect();
  return { w: Math.round(r.width) || 1920, h: Math.round(r.height) || 1080 };
});
if (palco.w !== 1920) await p.setViewportSize({ width: palco.w, height: palco.h });
const ESCALA = palco.w / 1920;
const MIN_AREA = AREA_1920 * ESCALA * ESCALA;

await p.evaluate(() => window.__prepararCaptura && window.__prepararCaptura());

// ⚠ ESPERAR O MAPA ASSENTAR ANTES DE MEDIR — a mesma espera que o `maprender.mjs` faz.
// Sem isto, em cena de mapa os rótulos são posicionados por `map.project()` com o estado INICIAL da
// câmera (tudo colapsado perto do mesmo ponto) e o gate acusa colisão que não existe: medido em
// `crimeia-corredor-terrestre`, "CRIMEIA ✕ TRANSNÍSTRIA" com 5.968px² enquanto os frames reais em
// t=17 e t=22,5 mostram os dois rótulos a ~1.500px de distância. Verde falso já era ruim; alarme
// falso é igualmente ruim, porque ensina a ignorar o gate.
await p.evaluate(() => (window.__ready ? Promise.race([window.__ready, new Promise(r => setTimeout(r, 8000))]) : Promise.resolve())).catch(() => {});
await p.evaluate(() => (typeof window.__aguardarMapa === 'function'
  ? Promise.race([window.__aguardarMapa(), new Promise(r => setTimeout(r, 8000))]) : Promise.resolve())).catch(() => {});

const DUR = await p.evaluate(() => window.__duracao || 18);

// [porte Régie] CONTRATO ANTES DO LAÇO: cena sem `__renderAt` não tem tempo para varrer. No estúdio
// isto era um TypeError no meio da medição (exit 1 por acidente); aqui é reprovação dita com o nome.
if (!(await p.evaluate(() => typeof window.__renderAt === "function"))) {
  console.log(`✗ ${file}: a cena não expõe window.__renderAt — contrato de cena quebrado ou script morto${errosJS.length ? ` (erro de JS: ${errosJS[0]})` : ""}`);
  await b.close();
  process.exit(1);
}

// coleta candidatos (elementos com TEXTO PRÓPRIO visível) A CADA FRAME; mede rect+opacidade.
// ⚠ RECOLETA POR FRAME, não uma vez antes do loop: cena que RECONSTRÓI o overlay a cada
// `__renderAt` (todo mapa deste rig redesenha o SVG) deixava os nós coletados órfãos — rect 0×0,
// filtrados pelo `width < 2`, `vis` vazio, e o gate cantava "✓ SEM colisões" em TODA cena de mapa
// do repo. Verde falso é pior que alarme falso: escondia colisão real (uma de 7.688 px² passou).
// Recoletar custa computação, que é barata; a correção do gate não é negociável.
const { colisoes, ornamentos, textosMedidos, motorLancou } = await p.evaluate(async ({ STEP, MIN_AREA, OP_MIN, DUR, ORN }) => {
  const stage = document.getElementById("stage") || document.body;
  // texto próprio: tem nó de texto direto não-vazio, ou é <text>/<tspan> do SVG
  const temTextoProprio = el => {
    const tag = el.tagName.toLowerCase();
    if (tag === "text" || tag === "tspan") return (el.textContent || "").trim().length > 0;
    return [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 0);
  };
  const coletar = () => [...stage.querySelectorAll("*")].filter(temTextoProprio);
  let cands = [];

  // ORNAMENTO TIPOGRÁFICO: glifo decorativo (aspa gigante) cujo BBOX é muito maior que a tinta que
  // desenha — line-height < 1 infla a caixa sem encher a tela, e ele acusava colisão com o texto
  // POR CIMA dele sem sobreposição visual nenhuma. Declarado (`data-qc-ornamento`) OU reconhecido
  // pela regra única de `scripts/qc-ornamento.mjs`: aqui só a ASPA isolada sai (o motivo do BBOX
  // inflado é o glifo GIGANTE; divisor é fino e do tamanho da tinta, tirá-lo esconderia "texto
  // sobre a linha divisória", que É defeito). Não é escapatória silenciosa: conta e reporta.
  const reAspa = new RegExp(ORN.aspa, "u");
  /**
   * ⚠️ ODÔMETRO: dígitos EMPILHADOS não colidem — eles se revezam (07/ago/2026).
   *
   * Um contador de rolagem é uma janela com `overflow:hidden` e os dez dígitos empilhados dentro,
   * deslocados por `transform`. Para este gate isso é um monte de "0" e "1" ocupando o mesmo
   * retângulo — e ele acusa colisão em cada par. Medido no `s49-2-milhoes-libras` do `o-acre`:
   * **8 pares de colisão, todos entre dígitos** (`"0 ✕ 0"`, `"0 ✕ ."`), numa cena impecável.
   *
   * O espectador vê UM dígito por casa: os outros estão fora da janela, recortados. *Sobreposição
   * dentro de uma máscara de revelação não é colisão — é o mecanismo.*
   *
   * Não é escapatória automática: a cena DECLARA (`data-qc-rolagem` no contêiner da janela), e a
   * declaração isenta apenas os descendentes dela. Texto que colide fora da máscara continua
   * acusado, na mesma cena.
   */
  const dentroDeRolagem = el => { for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) if (n.hasAttribute("data-qc-rolagem")) return true; return false; };
  const ehOrn = el => el.hasAttribute("data-qc-ornamento") || dentroDeRolagem(el) || reAspa.test((el.textContent || "").trim());
  const ornVistos = new Set();          // acumula os ornamentos de TODOS os frames (a recoleta muda o set)

  const effOpacity = el => { let o = 1, e = el; while (e && e !== document.body) { const s = getComputedStyle(e); if (s.display === "none" || s.visibility === "hidden") return 0; o *= parseFloat(s.opacity || "1"); e = e.parentElement; } return o; };

  /* ══ RECORTE POR `clip-path: inset(…)` — 14/ago/2026 ══════════════════════════════════════════
   *
   * `getBoundingClientRect` devolve a caixa do LAYOUT, e o layout não sabe que o pintor foi
   * proibido de pintar. Um título revelado por `clip-path: inset(0 100% 0 0)` — o wipe da casa,
   * usado em toda cena que escreve texto progressivamente — ocupa a caixa inteira desde o frame
   * zero, embora não haja um pixel na tela.
   *
   * Medido na `s08` do `cerebro-quando-sonha`: o gate acusou "ACORDADO ✕ SONO REM" em t=6–9,6s
   * com 49.082px², e o SONO REM só começa a ser revelado em t=16,05. A colisão nunca existiu.
   * O custo desse tipo de erro não é o alarme: é o portão marcar `ok:false` e o render PULAR PARA
   * SEMPRE uma cena que estava certa — e, pior, ensinar quem lê o laudo a não acreditar nele.
   *
   * O recorte é ACUMULADO pelos ancestrais (um wipe no pai corta o filho) e devolve a caixa que
   * de fato aparece — não um booleano visível/invisível. Assim o gate continua acusando quando a
   * PARTE REVELADA colide, que é o defeito de verdade. */
  const recorteClip = el => {
    let box = null, e = el;
    while (e && e !== document.body) {
      const cp = getComputedStyle(e).clipPath || "none";
      const m = /^inset\(\s*(.+?)\s*\)$/.exec(cp);
      if (m) {
        const er = e.getBoundingClientRect();
        let p = m[1].split(/\s+/).filter(s => s && !/^round$/i.test(s));
        const iR = p.findIndex(s => /^round$/i.test(s)); if (iR >= 0) p = p.slice(0, iR);
        if (p.length === 1) p = [p[0], p[0], p[0], p[0]];
        else if (p.length === 2) p = [p[0], p[1], p[0], p[1]];
        else if (p.length === 3) p = [p[0], p[1], p[2], p[1]];
        if (p.length >= 4) {
          const px = (s, base) => /%\s*$/.test(s) ? (parseFloat(s) || 0) / 100 * base : (parseFloat(s) || 0);
          const c = { top: er.top + px(p[0], er.height), right: er.right - px(p[1], er.width),
                      bottom: er.bottom - px(p[2], er.height), left: er.left + px(p[3], er.width) };
          box = box ? { top: Math.max(box.top, c.top), right: Math.min(box.right, c.right),
                        bottom: Math.min(box.bottom, c.bottom), left: Math.max(box.left, c.left) } : c;
        }
      }
      e = e.parentElement;
    }
    return box;
  };
  /** Interseca uma caixa da tinta com o recorte; devolve null quando nada sobra. */
  const aplicaClip = (r, c) => {
    if (!c) return r;
    const left = Math.max(r.left, c.left), right = Math.min(r.right, c.right);
    const top = Math.max(r.top, c.top), bottom = Math.min(r.bottom, c.bottom);
    if (right - left < 2 || bottom - top < 2) return null;
    return { left, right, top, bottom, width: right - left, height: bottom - top };
  };
  const label = el => (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40);
  const separaOrn = lista => { for (const el of lista.filter(ehOrn)) ornVistos.add(label(el)); return lista.filter(el => !ehOrn(el)); };

  // CAIXA DA TINTA, não do elemento. `line-height` maior que o `font-size` acolchoa a caixa acima e
  // abaixo dos glifos: dois textos EMPILHADOS (número-herói + sub-legenda, o padrão de rótulo deste
  // canal) tocam bbox sem a tinta se tocar. Medindo pela caixa crua, 6 de 17 mapas acusavam colisão
  // que não existe na tela — conferido à vista no `triangulo-do-litio`, onde herói e sub estão
  // separados por uma linha divisória visível. Desconta-se metade do excesso em cada borda.
  /**
   * ⚠️ O IRMÃO APERTADO: `line-height` MENOR que 1 (09/ago/2026).
   *
   * O desconto logo abaixo cobre o acolchoamento (`lh > fs`) e é CEGO para o contrário. Com
   * `Math.max(0, (lh - fs) / 2)`, um `line-height:.94` dá folga 0 e a caixa sobrevive inteira —
   * e a caixa que o Range devolve é o FONT BOX da fonte (ascent+descent das métricas), não os
   * glifos. Título grande com entrelinha apertada é o padrão tipográfico desta casa, então as
   * caixas de duas linhas empilhadas se sobrepõem por construção, em exatamente `fs - lh`:
   *   · `s40` do `especies-humanas` — "NÃO ACABARAM." / "FORAM ABSORVIDOS.", fs 276 e lh 270,48:
   *     276 − 270,48 = **5,52px**, e o gate acusava 12.642px² (2.298px de largura × 5,5).
   *   · `s41` — "39 MIL" / "ANOS", fs 284 e lh 266,96: 284 − 266,96 = **17,04px** → 13.794px².
   *   · `s38` — "A REDE" / "É O SEGURO" → 5.282px².
   * As três conferidas à vista em 4K: folga ampla, nada se toca. Três cenas presas no portão, uma
   * delas (`s38`) já renderizada — o gate teria mandado refazer um clipe de 769 MB sem defeito.
   *
   * A sobreposição vive onde NÃO HÁ TINTA: entre o descender vazio da linha de cima (texto em
   * caixa-alta não desce abaixo da base) e o espaço acima das maiúsculas da linha de baixo. Por
   * isso a régua certa não é métrica de fonte, é métrica de TEXTO: `actualBoundingBox*` mede o
   * que aqueles glifos ocupam, `fontBoundingBox*` mede o que a fonte reserva. A diferença entre
   * as duas é exatamente o vazio que o gate estava contando como colisão.
   *
   * Conservador de propósito: mede o `textContent` inteiro do elemento numa string só, então um
   * elemento de várias linhas herda o MAIOR ascender e o MAIOR descender do conjunto — recua de
   * menos, nunca de mais. Erra para o lado de acusar.
   */
  const _cvMed = document.createElement("canvas").getContext("2d");
  const _memoGlifo = new Map();
  const metricaDoTexto = (cs, texto) => {
    const font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const chave = `${font} ${texto}`;
    if (_memoGlifo.has(chave)) return _memoGlifo.get(chave);
    let out = null;
    try {
      _cvMed.font = font;
      const m = _cvMed.measureText(texto);
      const fa = m.fontBoundingBoxAscent, fd = m.fontBoundingBoxDescent;
      const aa = m.actualBoundingBoxAscent, ad = m.actualBoundingBoxDescent;
      if ([fa, fd, aa, ad].every(Number.isFinite) && fa + fd > 0) {
        out = { fontBox: fa + fd, topo: Math.max(0, fa - aa), base: Math.max(0, fd - ad) };
      }
    } catch { out = null; }
    _memoGlifo.set(chave, out);
    return out;
  };
  // Só para retângulo VINDO DO RANGE (a caixa é o font box por construção). Na caixa cheia de um
  // elemento que pinta fundo/borda, a caixa É tinta e nada se recua — ver `pintaAPropriaCaixa`.
  const recuoDosGlifos = (el, cs, r) => {
    const txt = (el.textContent || "").replace(/\s+/g, " ").trim();
    if (!txt) return r;
    const m = metricaDoTexto(cs, txt);
    if (!m || !(r.height > 0)) return r;
    const k = r.height / m.fontBox;                     // escala (cobre transform:scale e zoom)
    if (!(k > 0.5 && k < 2)) return r;                  // não reconheço esta caixa: não mexo
    const teto = r.height * 0.45;                       // nunca zerar a caixa
    const topo = Math.min(m.topo * k, teto), base = Math.min(m.base * k, teto);
    if (topo + base < 1) return r;
    return { left: r.left, right: r.right, top: r.top + topo, bottom: r.bottom - base,
             width: r.width, height: r.height - topo - base };
  };
  const caixaDaTinta = (el, r, doRange = false) => {
    const cs = getComputedStyle(el);
    const fs = parseFloat(cs.fontSize) || 0;
    const lh = cs.lineHeight === "normal" ? fs * 1.2 : (parseFloat(cs.lineHeight) || fs);
    const folga = Math.max(0, (lh - fs) / 2);
    let cx = r;
    if (folga && r.height > folga * 2 + 2) {
      cx = { left: r.left, right: r.right, top: r.top + folga, bottom: r.bottom - folga,
             width: r.width, height: r.height - folga * 2 };
    }
    return doRange ? recuoDosGlifos(el, cs, cx) : cx;
  };
  /**
   * ⚠️ BLOCO CENTRALIZADO: a caixa ocupa a LARGURA TODA, a tinta fica no meio (08/ago/2026).
   *
   * O irmão HORIZONTAL do acolchoamento de `line-height` acima — e o mais caro dos dois, porque a
   * diferença não é de dezenas de pixels, é de milhares. `<div style="width:3840px;text-align:center">`
   * é o padrão de número-herói desta casa: a caixa vai de 0 a 3840 e os glifos ocupam 1.694px no
   * centro. Qualquer rótulo no canto direito cai DENTRO da caixa sem chegar perto da tinta.
   *
   * Medido no `galaxia-arco-flecha` (08/ago), 2 dos 3 pares acusados no vídeo inteiro eram isto:
   *   · `s16` — "1.800.000" (caixa 0→3840, tinta 1073→2767) × chip "×18" (tinta 2912→3179).
   *     Acusava 69.555px². Folga real entre as tintas: **145px**.
   *   · `s19` — "Fundador do RAD@home" (caixa →1320, tinta →802) × o crédito de rodapé
   *     (caixa 1240→, tinta 1576→). Acusava 4.830px². Folga real: **774px**.
   * As duas cenas estavam impecáveis à vista. O terceiro par (`s60`) era colisão VERDADEIRA e segue
   * acusado depois deste conserto — é o teste que importa: a régua ficou fiel, não frouxa.
   *
   * O conserto mede o que o motor de layout DESENHOU (`Range.getClientRects()` sobre o conteúdo),
   * que já vem quebrado por linha — o mesmo remédio do grifo inline multi-linha, agora para
   * qualquer elemento, não só `display:inline`.
   *
   * ⚠️ E POR QUE NÃO SEMPRE: quando o elemento PINTA a própria caixa (fundo, imagem, borda,
   * sombra), a caixa não é espaço vazio — ela aparece na tela. Um chip âmbar sobre um rótulo é
   * colisão mesmo que os glifos não se cruzem. Nesses o gate segue medindo a caixa cheia. É a
   * diferença entre "a caixa é só onde a tinta pode cair" e "a caixa É tinta".
   */
  const CORTRANSP = /^rgba?\([^)]*,\s*0(\.0+)?\s*\)$/;
  const pintaAPropriaCaixa = (el) => {
    const cs = getComputedStyle(el);
    if (cs.backgroundImage && cs.backgroundImage !== "none") return true;
    const bg = cs.backgroundColor || "";
    if (bg && bg !== "transparent" && !CORTRANSP.test(bg)) return true;
    for (const lado of ["Top", "Right", "Bottom", "Left"]) {
      if (cs[`border${lado}Style`] !== "none" && parseFloat(cs[`border${lado}Width`]) > 0) return true;
    }
    if (cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0) return true;
    if (cs.boxShadow && cs.boxShadow !== "none") return true;
    return false;
  };
  // `null` = não sei medir a tinta aqui, use o caminho antigo. SVG fica de fora de propósito:
  // em `<text>`/`<tspan>` o bbox JÁ é a tinta, e o Range mede pior.
  const rectsDaTinta = (el) => {
    const tag = el.tagName.toLowerCase();
    if (tag === "text" || tag === "tspan") return null;
    if (pintaAPropriaCaixa(el)) return null;
    const rg = document.createRange();
    rg.selectNodeContents(el);
    const frs = [...rg.getClientRects()].filter((f) => f.width >= 2 && f.height >= 2);
    return frs.length ? frs : null;
  };
  const inter = (a, b) => { const x = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)); const y = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top)); return x * y; };
  // GRIFO INLINE MULTI-LINHA: um span inline quebrado em 2+ linhas tem getBoundingClientRect
  // RETANGULAR — a caixa engole o fim da linha de cima e o começo da de baixo, exatamente onde
  // vive o span vizinho do MESMO parágrafo. Medido no `nilo-nao-secou/42-documento` (28–31/jul):
  // dois pares de grifos word-lock adjacentes acusavam 184.727px² e 145.979px² com a tela
  // visualmente perfeita (lote D conferiu à vista), e o portão prendeu a cena sem defeito.
  // O conserto é medir o que o motor de layout DESENHOU: os fragmentos por linha
  // (getClientRects), interseção somada fragmento×fragmento. Sobreposição REAL de tinta
  // (position/transform tirando o span do fluxo) segue intersectando fragmentos — o gate só
  // deixa de acusar o espaço vazio entre linhas que nenhum glifo ocupa.
  const interSet = (A, B) => { let s = 0; for (const a of A) for (const b of B) s += inter(a, b); return s; };
  const areaSet = (A) => A.reduce((s, r) => s + r.width * r.height, 0);

  /**
   * ⚠️ PLACA TORTA: a caixa de uma linha INCLINADA engole o vizinho (08/ago/2026).
   *
   * O terceiro irmão do mesmo defeito — e o que mente com mais confiança, porque a área acusada é
   * ENORME e parece indiscutível. `getClientRects()` devolve retângulos ALINHADOS AOS EIXOS: a caixa
   * de um texto girado é o retângulo que CIRCUNSCREVE a diagonal, não a fita de glifos.
   *
   * Medido no `s60-nao-foi-supercomputador` do `galaxia-arco-flecha` (placa pendurada num prego,
   * `rotate(-13.2°)`): a linha "MONTA NA CABEÇA" tem 72px de altura real e a caixa dela reportava
   * **231px** — 3,2×. Contra a linha seguinte isso fabricava 521.430px² de "colisão" numa placa
   * onde os dois textos estão empilhados com **16px de folga** (medido neutralizando só o
   * `transform`, que não altera layout). O olho confirmou: nada se toca.
   *
   * Reconstruir o quadrilátero é aritmética fechada, não heurística. Para um retângulo w×h girado
   * de θ, a caixa alinhada mede W = w·|cos| + h·|sin| e H = w·|sin| + h·|cos| — duas equações, duas
   * incógnitas. O centro é o mesmo (rotação preserva o centro), então os 4 cantos saem exatos.
   * Perto de 45° o sistema degenera (`det`→0) e aí o gate volta à caixa cheia: prefere-se o alarme
   * falso à cegueira.
   */
  const anguloAcumulado = (el) => {
    let m = new DOMMatrix();
    for (let n = el; n && n !== document.body; n = n.parentElement) {
      const tr = getComputedStyle(n).transform;
      if (tr && tr !== "none") m = new DOMMatrix(tr).multiply(m);
    }
    return Math.atan2(m.b, m.a);
  };
  // AABB + ângulo → os 4 cantos reais. `null` quando o sistema degenera (perto de 45°).
  const quadDoRect = (r, th) => {
    const c = Math.abs(Math.cos(th)), s = Math.abs(Math.sin(th));
    const det = c * c - s * s;
    if (Math.abs(det) < 0.08) return null;
    const w = (r.width * c - r.height * s) / det, h = (r.height * c - r.width * s) / det;
    if (!(w > 0) || !(h > 0)) return null;
    const cx = (r.left + r.right) / 2, cy = (r.top + r.bottom) / 2;
    const C = Math.cos(th), S = Math.sin(th);
    return [[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2]]
      .map(([x, y]) => ({ x: cx + x * C - y * S, y: cy + x * S + y * C }));
  };
  const areaPoli = (P) => { let a = 0; for (let i = 0, n = P.length; i < n; i++) { const q = P[(i + 1) % n]; a += P[i].x * q.y - q.x * P[i].y; } return Math.abs(a) / 2; };
  // Sutherland–Hodgman: recorta o polígono A por cada aresta de B (ambos convexos) e mede o resto.
  const interPoli = (A, B) => {
    let saida = A;
    for (let i = 0, n = B.length; i < n && saida.length; i++) {
      const p = B[i], q = B[(i + 1) % n];
      const dentro = (v) => (q.x - p.x) * (v.y - p.y) - (q.y - p.y) * (v.x - p.x) >= 0;
      const corta = (v, w) => {
        const d1 = (q.x - p.x) * (v.y - p.y) - (q.y - p.y) * (v.x - p.x);
        const d2 = (q.x - p.x) * (w.y - p.y) - (q.y - p.y) * (w.x - p.x);
        const t = d1 / (d1 - d2);
        return { x: v.x + (w.x - v.x) * t, y: v.y + (w.y - v.y) * t };
      };
      const entra = saida; saida = [];
      for (let j = 0; j < entra.length; j++) {
        const v = entra[j], w = entra[(j + 1) % entra.length];
        const dv = dentro(v), dw = dentro(w);
        if (dv) saida.push(v);
        if (dv !== dw) saida.push(corta(v, w));
      }
    }
    return saida.length >= 3 ? areaPoli(saida) : 0;
  };
  const interQuadSet = (A, B) => { let s = 0; for (const a of A) for (const b of B) s += interPoli(a, b); return s; };
  const areaQuadSet = (A) => A.reduce((s, q) => s + areaPoli(q), 0);

  const out = [];
  const vistos = new Set();   // [porte Régie] textos distintos que chegaram a ser medidos (o laudo diz quantos)
  let motorLancou = null;
  for (let t = 0; t <= DUR + 0.001; t += STEP) {
    // [porte Régie] __renderAt que lança é defeito da CENA: registra o instante e para — reprovação
    // dita, não crash (que agora sairia 2, "não medi").
    try { await window.__renderAt(t); }
    catch (e) { motorLancou = { t: +t.toFixed(2), msg: String((e && e.message) || e).slice(0, 100) }; break; }
    cands = separaOrn(coletar());   // ← DEPOIS do renderAt: pega o DOM que ESTE frame desenhou
    const vis = [];
    for (const el of cands) {
      if (effOpacity(el) < OP_MIN) continue;
      const r0 = el.getBoundingClientRect();
      if (r0.width < 2 || r0.height < 2) continue;
      const tinta = rectsDaTinta(el);
      let rects = tinta ? tinta.map((f) => caixaDaTinta(el, f, true)) : [caixaDaTinta(el, r0)];
      if (!tinta && getComputedStyle(el).display === "inline") {
        const frs = [...el.getClientRects()].filter((f) => f.width >= 2 && f.height >= 2);
        if (frs.length > 1) rects = frs.map((f) => caixaDaTinta(el, f, true));
      }
      // o que o `clip-path` esconde não colide com nada — ver `recorteClip` acima
      const clip = recorteClip(el);
      if (clip) { rects = rects.map((r) => aplicaClip(r, clip)).filter(Boolean); if (!rects.length) continue; }
      // superfície girada: mede o quadrilátero real, não a caixa que circunscreve a diagonal.
      // O quad sai para TODO elemento (com θ≈0 ele É o retângulo), para que o par girado×reto
      // também seja medido no espaço certo — quem decide usá-lo é o `girado` do par.
      const th = anguloAcumulado(el);
      const girado = Math.abs(Math.sin(th)) > 0.01;
      const qs = rects.map((r) => quadDoRect(r, th));
      vis.push({ el, rects, quads: qs.every(Boolean) ? qs : null, girado, tx: label(el) });
      vistos.add(label(el));
    }
    for (let i = 0; i < vis.length; i++) for (let j = i + 1; j < vis.length; j++) {
      // ignora pares aninhados (um contém o outro)
      if (vis[i].el.contains(vis[j].el) || vis[j].el.contains(vis[i].el)) continue;
      // basta UM dos dois estar girado para a caixa alinhada mentir sobre o par
      const girado = (vis[i].girado || vis[j].girado) && vis[i].quads && vis[j].quads;
      const a = girado ? interQuadSet(vis[i].quads, vis[j].quads) : interSet(vis[i].rects, vis[j].rects);
      if (a <= MIN_AREA) continue;
      // HALO/CONTORNO: a mesma palavra desenhada 2× (stroke por baixo + fill por cima) é técnica
      // padrão de rótulo sobre satélite. São dois nós irmãos com texto IDÊNTICO e sobreposição
      // quase total — não é colisão, é UM rótulo. Sem esta regra a recoleta por frame acusa
      // "TAIWAN ✕ TAIWAN" em toda cena de mapa, e alarme falso ensina a ignorar o alarme.
      const menor = girado ? Math.min(areaQuadSet(vis[i].quads), areaQuadSet(vis[j].quads))
                           : Math.min(areaSet(vis[i].rects), areaSet(vis[j].rects));
      if (vis[i].tx === vis[j].tx && menor > 0 && a / menor >= 0.8) continue;
      out.push({ t: +t.toFixed(2), area: Math.round(a), a: vis[i].tx, b: vis[j].tx });
    }
  }
  return { colisoes: out, ornamentos: [...ornVistos], textosMedidos: vistos.size, motorLancou };
}, { STEP, MIN_AREA, OP_MIN, DUR, ORN: PARA_OVERLAP });

await b.close();

const ctx = `palco ${palco.w}×${palco.h}` + (ESCALA !== 1 ? ` · limiar ${Math.round(MIN_AREA)}px² (=${AREA_1920} em 1920)` : ` · limiar ${MIN_AREA}px²`);
if (ornamentos.length) console.log(`  ⊘ ${ornamentos.length} ornamento(s) fora da checagem: ${ornamentos.map(s => `"${s}"`).join(", ")}`);

// agrupa colisões contíguas do MESMO par num intervalo
const key = c => c.a + " ✕ " + c.b;
const groups = {};
for (const c of colisoes) { (groups[key(c)] ||= []).push(c); }
const keys = Object.keys(groups);
// [porte Régie] O VERDE DIZ O QUE MEDIU. "SEM colisões" sobre zero texto é verdade vazia: com erro de
// JS na página não dá para separar "cena sem texto" de "cena que não montou" — falha fechado (2).
if (motorLancou) {
  console.log(`✗ ${file}: o __renderAt da cena lança em t=${motorLancou.t}s — "${motorLancou.msg}" (a medição parou ali)`);
  process.exitCode = 1;
} else if (!keys.length && !textosMedidos && errosJS.length) {
  console.log(`⚠ NÃO MEDIDO — ${file}: nenhum texto visível em instante nenhum E a página tem erro de JS (${errosJS[0]}) — não dá para distinguir cena sem texto de cena que não montou`);
  process.exitCode = NAO_MEDIDO;
} else if (!keys.length) { console.log(`✓ SEM colisões de texto em ${file} (${textosMedidos} texto(s) medido(s) · passo ${STEP}s · 0–${DUR}s · ${ctx})`); }
else {
  console.log(`✗ ${keys.length} par(es) com colisão em ${file} (${ctx}):`);
  for (const k of keys) { const g = groups[k]; const ts = g.map(x => x.t); const maxA = Math.max(...g.map(x => x.area));
    console.log(`  • "${k}"  →  t=${Math.min(...ts)}–${Math.max(...ts)}s  (área máx ${maxA}px²)`); }
  process.exitCode = 1;
}
