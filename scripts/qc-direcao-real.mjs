#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-direcao-real.mjs (linhas 1-323, commit 4afda12).
// O que mudou: o argumento aceita "\" do Windows. O alerta de "tese vertical sem M04" fala do mapa 3D, que está fora da v1 (exige GPU e chave de tiles).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-direcao-real.mjs — a DIREÇÃO manda pôr o mundo real na tela, ou manda desenhar o mundo?
 *
 * ⚠️ IRMÃO, NÃO CLONE: `qc-midia-real.mjs` (PESQ-29) mede o que a ARTE ENTREGOU (varre os HTMLs de
 * `graphics/` e cobra `<video>/<img>` vivo contra o `needs.midia` do espelho). Este aqui mede o que a
 * DIREÇÃO PEDIU — lê `espelho.json` + `conceito-visual.json` e roda **antes** de a arte existir, que é
 * onde o conserto ainda é barato. Um pega a promessa quebrada; o outro pega a promessa nunca feita.
 *
 * ══ O CASO QUE O CRIOU (02/ago/2026, `paises-baixos-mar`) ══
 *
 * Mateus, sobre o vídeo pronto: *"o vídeo também ficou inteiramente desenhos praticamente…
 * pouquíssimos footages de vídeos (quase nada)… Tampouco mostrou o país de lado na água com a terra
 * (visão drone) pra mostrar essa descompensação de altura, poderia ter usado mapas animados do
 * MapTiler em 3D com elevação de terreno (nós pagamos a API paga do MapTiler)."*
 *
 * O vídeo é sobre um país que vive ABAIXO do nível do mar — a tese é topográfica — e não há um único
 * corte de elevação real. O M04 (`mapa3d`) está no catálogo, o `mapista` sabe fazer, a chave MapTiler
 * é paga e responde. A capacidade existia e não foi usada.
 *
 * ══ O QUE EU MEDI ANTES DE CALIBRAR — e a régua NÃO é a que parece ══
 *
 * A suspeita óbvia ("92,8% desenho") **não discrimina**. Proporção de desenho nas cenas de cobertura,
 * medida nos 15 espelhos do disco em 02/ago: **54,3% (senna) a 82,2% (oceano-700km)**, com
 * `paises-baixos-mar` em 76,9% — dentro da faixa, não fora dela. Gate nesse eixo reprovaria o acervo
 * inteiro ou nada. *Desenho ser maioria é o normal da casa; não é o defeito.*
 *
 * O que DESABOU foi a **âncora de mídia do `conceito-visual.json`** — a fração de cenas cuja direção
 * aponta um asset REAL como protagonista/fundo/inset em vez de `"construída"`. Nos 6 conceitos do disco:
 *
 *     simpsons-copa 68,3% · avioes-pequenos 59,7% · senna 53,3% · oceano-700km 41,4%
 *     planetas-algodao-doce 10,7% · paises-baixos-mar 4,1%   ← o condenado
 *
 * Há uma banda VAZIA entre 10,7% e 41,4%. O piso de **25%** mora nela: não é número redondo, é o meio
 * do vão que separa os quatro sadios dos dois baixos.
 *
 * ⚠️ E 10,7% NÃO É DEFEITO. `planetas-algodao-doce` é sobre exoplanetas: não existe registro real de um
 * planeta de algodão-doce, e ali o desenho **é** a verdade. Reprová-lo seria o alarme falso que a
 * [ARTE-77] proíbe. Por isso o alerta de âncora só dispara onde o PRÓPRIO PLANO declarou lugar real:
 * **≥5 cenas com `needs.geo`**. Com esse filtro, medido no acervo, ele acende em **exatamente um** dos
 * 6 projetos com conceito — o condenado. planetas tem geo 0; senna 21 (53,3%); simpsons 11 (68,3%);
 * avioes 8 (59,7%). Nenhum acende.
 *
 * ⚠️ E A ÂNCORA MENTE SE NINGUÉM CONFERIR O DISCO. Em `paises-baixos-mar` a `_media/` inteira do vídeo
 * é 2 PNGs de documento, 1 bandeira, o master e a trilha — **zero footage, zero foto** —, e mesmo assim
 * a direção ancorou o showpiece do clímax numa foto da enchente de 1953 que **não existe**.
 * *Declarar o asset não é ter o asset.*
 *
 * ⚠️⚠️ MAS "ARQUIVO AUSENTE" SOZINHO É ALARME FALSO, e eu o produzi DUAS VEZES calibrando isto. Mídia
 * bruta sai do disco de propósito depois da entrega (REND-18): na v1, `senna` (20 âncoras) e
 * `oceano-700km` (13) acenderam vermelho por FAXINA. Na v2 tentei desempatar por "`_media/` está
 * vazia?" e o `oceano-700km` escapou pela fresta — a pasta tinha **um** arquivo, de 13 citados, e o
 * gate acusou 12 buracos que são faxina.
 *
 * O desempate certo é PROPORCIONAL: *ausência PONTUADA é buraco; ausência em ATACADO é faxina, ou uma
 * estação que nunca rodou.* Abaixo de **um terço** dos assets citados presentes no disco, o sumiço é do
 * lote inteiro e daqui eu não sei a causa — digo isso em voz alta em vez de chutar, e quem desempata
 * pelo HTML (src vivo × só comentário) é o `qc-midia-real.mjs`. Medido: `paises-baixos-mar` 2 de 4
 * presentes (50% ⇒ acusa) · `oceano-700km` 1 de 13 (7,7% ⇒ indeterminado) · `senna` 0 de 20 (⇒
 * indeterminado).
 *
 * ══ O M04 É CAPACIDADE MORTA — medido ══
 *
 * `mapa3d` aparece **3 vezes em 918 segmentos de 15 produções** (avioes-pequenos 2, lugar-mais-profundo
 * 1): 0,3%. Doze projetos nunca o usaram. Daí a terceira medida — cenas cuja tese carrega argumento
 * VERTICAL (altitude, profundidade, relevo, "abaixo do nível do mar") num vídeo sem nenhuma cena
 * `mapa3d`. Com o vocabulário desta versão, acende em **2 dos 15**: `paises-baixos-mar` (8 cenas) e
 * `oceano-700km` (9) — os dois positivos de verdade, porque profundidade de oceano é exatamente o que
 * DEM e batimetria existem para mostrar. `lugar-mais-profundo` tem 3 cenas verticais **e uma cena
 * mapa3d**: passa, como tem de passar. `el-nino` fica em 2 e não acende.
 *
 * ══ SEVERIDADE ══
 *   ✗ FALHA  → âncora do conceito aponta arquivo ausente, com a ausência PONTUAL (≥⅓ dos citados no disco)
 *   ▲ ALERTA → âncora real < piso num projeto com ≥5 cenas declarando `needs.geo`
 *   ▲ ALERTA → ≥4 cenas de tese vertical e ZERO `mapa3d`
 *   ○ INFO   → composição de modos e geo declarado × mapa entregue, contra a faixa medida do acervo
 *
 * Os dois alertas são EDITORIAIS, não contratuais: informam e saem 0. `--duro` os promove a
 * reprovação. Gate que nasce vermelho e fica semanas assim é gate que alguém desliga.
 *
 * Uso: node scripts/qc-direcao-real.mjs <proj> [--duro] [--piso=25] [--json]
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const argv = process.argv.slice(2);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
const JSON_OUT = argv.includes("--json");
const DURO = argv.includes("--duro");
const PISO = +opt("piso", "25");
const proj = argv.find((a) => !a.startsWith("--"));
if (!proj) { console.error("uso: qc-direcao-real.mjs <proj> [--duro] [--piso=25] [--json]"); process.exit(2); }
// [porte Régie] a barra invertida do Windows vira "/" antes do teste: "out\meu-video" é o mesmo
// projeto que "out/meu-video", e sem isto virava out/out\meu-video — "nenhum espelho", exit 2.
const projN = proj.replace(/\\/g, "/");
const D = projN.startsWith("out/") ? join(RAIZ, projN) : join(RAIZ, "out", projN);

const esp = ["espelho.json", "_espelho.json"].map((f) => join(D, f)).find(existsSync);
if (!esp) { console.error(`✗ nenhum espelho em ${D} — nada a medir`); process.exit(2); }
const segs = (() => { const j = JSON.parse(readFileSync(esp, "utf8")); return j.segmentos || j.cenas || (Array.isArray(j) ? j : []); })();
if (!segs.length) { console.error(`✗ espelho sem cenas: ${esp}`); process.exit(2); }

/* ── vocabulário ────────────────────────────────────────────────────────────────────────────────
 * REGISTRO = o modo põe o mundo real na tela por construção. `documento` entra (é o papel real da
 * fonte); `citacao` NÃO (é tipografia sobre a fala). O Bôco em câmera e a mobília de navegação ficam
 * fora do denominador: a "mídia real" deles é a própria gravação, e contá-los afoga a razão.        */
const MODO_REGISTRO = new Set(["footage", "foto", "drone", "mapa", "mapa3d", "split-footage", "documento"]);
const MODO_DESENHO = new Set(["desenho", "dados", "cinematico", "citacao", "split"]);
const MODO_FORA = new Set(["apresentador", "nenhum", "titulo-topico", "navegacao"]);

/* Argumento VERTICAL: a frase compara ALTURAS, profundidades ou relevo — é o gatilho do M04. A lista
 * é de vocabulário, não de tema: "7 metros abaixo do mar", "o ponto mais fundo", "o dique engorda
 * 100 m na base". Palavra solta ("mar", "montanha") ficou de fora de propósito, senão todo vídeo de
 * geografia acende.
 *
 * ⚠️ `encosta` É HOMÓGRAFO, e o verbo é MUITO mais comum que o substantivo (19/ago/2026). "a rocha
 * encosta no chão", "a mão encosta na parede" são o verbo `encostar` — nada a ver com vertente. Um
 * `\bencosta\b` cru sozinho acendia o alerta do `ultimo-dia-dinossauros`, vídeo do impacto de
 * Chicxulub, onde 3 das 4 cenas "verticais" eram coisas ENCOSTANDO no chão. Medido nos 19 espelhos
 * do disco: o verbo aparece em 9 projetos; exigir o substantivo (plural, ou precedido de
 * artigo/preposição) apaga o alerta só em 2 — `ultimo-dia-dinossauros` (4→1) e
 * `piramide-porta-secreta` (4→3) — e PRESERVA todos os positivos de verdade, inclusive o controle
 * perfeito `ate-que-altura-construir` (9→8, segue aceso), `orcas-nao-matam` (6→5) e `itaipu-afogou`
 * (5→4). Falso positivo em gate ensina a ignorar o gate. */
const VERT_A = /\b(?:abaixo|acima)\s+d[oa]\s+(?:n[ií]vel\s+d[oa]\s+)?mar\b|\bn[ií]vel\s+d[oa]\s+mar\b|\baltitude\b|\beleva[çc]/i;
const VERT_B = /\bmetros?\s+de\s+(?:altura|profundidade|fundura)\b|\bprofundidade\b|\brelevo\b|\bdesn[ií]vel|\bafunda(?:r|m|ndo)?\b|\bsubmers|\bponto\s+mais\s+(?:alto|baixo|fundo)\b|\bpico\s+mais\s+alto\b|\bencostas\b|\b(?:na|da|pela|numa|duma|uma|a|à)\s+encosta\b|\bcordilheira\b|\bplanalto\b/i;
const ehVertical = (t) => VERT_A.test(t) || VERT_B.test(t);

const cobertura = segs.filter((s) => !MODO_FORA.has(s.modo || ""));
const registro = cobertura.filter((s) => MODO_REGISTRO.has(s.modo || ""));
const desenho = cobertura.filter((s) => MODO_DESENHO.has(s.modo || ""));
const geoDecl = segs.filter((s) => Array.isArray(s?.needs?.geo) && s.needs.geo.length);
const mapas = segs.filter((s) => /^mapa/.test(s.modo || ""));
const mapa3d = segs.filter((s) => s.modo === "mapa3d");
const verticais = cobertura.filter((s) => ehVertical(`${s.tese || ""} ${s.ancora || ""}`));

const histo = {};
for (const s of segs) histo[s.modo || "?"] = (histo[s.modo || "?"] || 0) + 1;
const pct = (a, b) => (b ? +((a / b) * 100).toFixed(1) : 0);
const pctRegistro = pct(registro.length, cobertura.length);
const pctDesenho = pct(desenho.length, cobertura.length);

/* ── a âncora do conceito visual ────────────────────────────────────────────────────────────── */
const cvPath = join(D, "conceito-visual.json");
let cv = null;
const anc = { real: [], falta: [], construida: [], vazia: [] };
const mortos = [];
if (existsSync(cvPath)) { try { cv = JSON.parse(readFileSync(cvPath, "utf8")).cenas || null; } catch { cv = null; } }
/* ⚠️ O DESEMPATE ANTI-ALARME-FALSO — e a primeira versão dele estava errada.
 *
 * Mídia bruta sai do disco depois da entrega, de propósito (REND-18): "arquivo ausente" NÃO é falha
 * por si só. Tentei desempatar por "`_media/` vazia?" e `oceano-700km` escapou pela fresta — a pasta
 * tinha **um** arquivo (de 13 citados) e o gate acusou 12 buracos que são faxina.
 *
 * O desempate certo é PROPORCIONAL: *ausência PONTUADA é buraco; ausência ATACADO é faxina ou estação
 * que nunca rodou.* Se menos de um terço dos assets que a direção cita está no disco, o sumiço é do
 * lote inteiro e eu não tenho como saber a causa daqui — digo isso e não acuso. Medido: paises-baixos
 * 2 de 4 presentes (50% ⇒ acusa) · oceano-700km 1 de 13 (7,7% ⇒ indeterminado) · senna 0 de 20 (⇒
 * indeterminado). */
const LIMIAR_ATACADO = 1 / 3;
let citados = 0, presentes = 0;
if (cv) {
  for (const [id, v] of Object.entries(cv)) {
    const m = String(v?.midia_ancora ?? "").trim();
    if (!m) { anc.vazia.push(id); continue; }

    /* ⚠️ PONTO CEGO CORRIGIDO (03/ago, o-acre-o-estado-que-o): antes o `continue` do rótulo "FALTA —"
     * vinha ANTES da conferência, então uma âncora que começa com FALTA e TERMINA com uma lista de
     * arquivos — o formato que o passe-de-âncoras produz ao remendar um pedido antigo — nunca era
     * checada. Ali estavam os 16 paths que a limpeza de CC0 (PESQ-12) apagou, e o gate imprimiu PASS.
     * Agora o disco manda no rótulo: confere PRIMEIRO, classifica DEPOIS. */
    /* ⚠️ A pontuação da FRASE não é parte do caminho (12/ago, orcas-nao-matam). A âncora da `c25`
     * termina em "…+ assets/geojson/peninsula-valdes.json." — a classe negada aceita `.`, então o
     * ponto final entrava no path e o `existsSync` reprovava um arquivo que ESTÁ no disco. Pior que
     * o falso FAIL: a mesma frase caía no ramo do rótulo defasado, e o gate mandava reconciliar uma
     * âncora correta. Caminho de arquivo nunca termina em pontuação — apare antes de conferir. */
    /* ⚠️ PASTA DE DESTINO NÃO É CITAÇÃO DE ARQUIVO (15/ago, uruguai-despovoado). A âncora que a direção
     * escreve quando a mídia ainda NÃO existe cita o lugar onde ela deve cair — "FALTA — … (query: …;
     * destino: _media/footage/)". O regex abaixo casa esse destino, e `existsSync` de um DIRETÓRIO
     * devolve true: as 5 cenas sem um único arquivo no disco apareciam como "rótulo defasado", com o
     * gate mandando "reconcilie a âncora antes de despachar a arte". Obedecer isso é despachar arte
     * sobre o vazio — o dano exato da [ARTE-269]. No mesmo minuto o `aplicar-ancoras-pesquisa` (que
     * exige arquivo com tamanho > 0) dizia "0 promovidas"; quem discordava era este gate.
     * Destino se reconhece pela FORMA, não pelo disco: termina em "/" ou não tem extensão. Ele não é
     * entrega nem âncora morta — é só o endereço do pedido, e sai da conta dos dois lados. */
    const ehDestino = (p) => p.endsWith("/") || !/\.[a-z0-9]{2,5}$/i.test(p);
    /* ⚠️ PROVA DA CAÇA NÃO É A ENTREGA DA CAÇA (20/ago, ate-que-altura-construir). A mesma âncora
     * "FALTA — …" que cita o destino também cita, para quem for caçar depois, os PAPÉIS da caça: o
     * `_PENDENCIA.md` (que é o marcador de AUSÊNCIA) e o manifesto da rodada (o `…json` dentro de
     * uma pasta `_caca…`, que é a lista de CANDIDATOS ainda não baixados). Os dois são arquivos
     * com bytes — e o `…json` nem sequer é mídia —, então a
     * conferência acima os dava como "vivos" e a cena caía no ramo do rótulo defasado — o gate
     * mandava "reconcilie a âncora" sobre 2 cenas cujas pastas não têm um único arquivo de mídia.
     * É a [ARTE-269] outra vez, entrando pela porta do DOCUMENTO em vez da do diretório: obedecer
     * despacha arte sobre o vazio, e o pior é que converte uma FALTA honesta em âncora "real".
     * Papel da caça se reconhece pelo NOME, não pelo disco — e sai da conta dos dois lados, porque
     * ele nem é entrega (não é a mídia) nem é âncora morta (existe, e está certo que exista). */
    const ehProvaDaCaca = (p) => /(^|\/)_(PENDENCIA|PROCEDENCIA)\.[a-z]+$/i.test(p) || /(^|\/)_caca[^/]*\//i.test(p);
    const paths = [...m.matchAll(/((?:\.\.\/)?(?:_media|assets)\/[^\s,;()"'\]]+)/g)]
      .map(([, p]) => p.replace(/[.,;:!?]+$/, ""))
      .filter(Boolean)
      .filter((p) => !ehDestino(p) && !ehProvaDaCaca(p));
    /* E entrega é arquivo com BYTES: um `.mp4` de 0 byte é caça que morreu no meio, não mídia. */
    const entregue = (abs) => { try { const st = statSync(abs); return st.isFile() && st.size > 0; } catch { return false; } };
    const vivos = [];
    for (const p of paths) {
      const abs = p.startsWith("assets/") ? join(RAIZ, p) : join(D, p.replace(/^\.\.\//, ""));
      if (entregue(abs)) vivos.push(p); else mortos.push({ id, path: p });
    }
    citados += paths.length; presentes += vivos.length;

    if (/^FALTA/i.test(m)) {
      /* ⚠️ O RAMO DO "RÓTULO DEFASADO" FOI RETIRADO — ele não podia acertar, e mentia no número que o
       * próprio gate usa para reprovar (20/ago/2026, avioes-950). [ARTE-294]
       *
       * A premissa era: "FALTA que cita arquivo vivo ⟹ a pesquisa entregou e ninguém reconciliou".
       * Ela não se sustenta, porque a âncora é escrita NO MOMENTO da direção — quando a pesquisa ainda
       * não entregou, que é justamente por que ela diz FALTA. Todo path que o diretor põe ali é, por
       * construção, OUTRA COISA que ele já sabia existir: o `fallback pago` (avioes-950 s83 → foto da
       * s103; ate-que-altura s122 → foto da s27), o OUTRO PAINEL do split (piramide s96 pede o
       * esquerdo e cita o direito; uruguai s90b pede o DIR e cita o ESQ) ou OUTRA CAMADA da cena
       * (orcas c25: o geojson do mapa, quando o que falta é o footage). Medido nos 11 conceitos do
       * disco: **5 acusações, 5 falsas, 0 verdadeiras** — em toda a história do ramo.
       *
       * E o substituto óbvio também não serve, o que é o achado que fecha a questão: trocar a prosa
       * pelo DESTINO ("a pasta que o pedido nomeou ganhou mídia") acha outras 5 cenas, num conjunto
       * disjunto — e as 4 conferíveis são igualmente falsas, porque o que está na pasta é a parte
       * PRÉ-PAGA que a âncora já declarava (avioes-950 s07: só o painel A380, com 737 e 787 ainda
       * faltando; ate-que-altura s88: os painéis 1 e 2, faltando o 3) ou uma entrega PARCIAL
       * (brasil-portugues s93: 1 Debret de 4–5 vistas pedidas). Pasta não vazia não prova que chegou
       * o que se pediu. *Casar "o que a âncora pede" com "o que o disco tem" é julgamento de
       * conteúdo, não teste determinístico* — quem promove entrega em âncora é o
       * `aplicar-ancoras-pesquisa`, que exige arquivo com bytes e é o dono declarado desse ofício.
       *
       * O dano de manter era duplo. (1) A prescrição — "reconcilie a âncora antes de despachar a
       * arte" — convertia uma FALTA honesta em âncora "real" e mandava desenhar sobre um substituto:
       * a [ARTE-269] pela terceira porta, depois do diretório ([ARTE-269]) e do documento
       * ([ARTE-290]). (2) O silencioso, pior: a cena acusada ia para `anc.real` e INFLAVA o
       * "asset REAL: N = X%", que é a métrica do piso de 25% deste gate — `orcas` publicava 55,7%
       * onde o disco diz 55,0%. Um gate que erra a própria manchete pode carimbar PASS num vídeo
       * abaixo do piso. */
      anc.falta.push({ id, destino: (m.match(/destino:?\s+([^;\s)]+)/i) || [])[1] || null });
      continue;
    }
    if (/^constru/i.test(m) && !paths.length) { anc.construida.push(id); continue; }
    anc.real.push({ id, m });
  }
}
const indeterminado = citados === 0 || presentes / citados < LIMIAR_ATACADO;
const pctAncora = cv ? pct(anc.real.length, Object.keys(cv).length) : null;

/* ── vereditos ──────────────────────────────────────────────────────────────────────────────── */
const falhas = [];
if (mortos.length && !indeterminado) falhas.push({ tipo: "ancora-morta", n: mortos.length });
const alertas = [];
if (pctAncora !== null && geoDecl.length >= 5 && pctAncora < PISO)
  alertas.push({ tipo: "ancora-real-baixa", valor: pctAncora, piso: PISO, geo: geoDecl.length });
if (verticais.length >= 4 && mapa3d.length === 0)
  alertas.push({ tipo: "tese-vertical-sem-m04", valor: verticais.length });

if (JSON_OUT) {
  console.log(JSON.stringify({
    proj: basename(D), segmentos: segs.length, cobertura: cobertura.length,
    registro: registro.length, pctRegistro, desenho: desenho.length, pctDesenho, modos: histo,
    ancora: cv ? { dirigidas: Object.keys(cv).length, real: anc.real.length, falta: anc.falta.length, construida: anc.construida.length, semAncora: anc.vazia.length, pct: pctAncora } : null,
    ancorasMortas: mortos, assetsCitados: citados, assetsPresentes: presentes, indeterminado,
    geoDeclarado: geoDecl.length, mapas: mapas.length, mapa3d: mapa3d.length,
    teseVertical: verticais.map((s) => s.id), falhas, alertas, piso: PISO, duro: DURO,
  }, null, 1));
} else {
  console.log(`\n══ DIREÇÃO × MUNDO REAL · ${basename(D)} · ${segs.length} segmentos ══`);
  console.log(`  cobertura (fora master e mobília de navegação): ${cobertura.length} cenas`);
  console.log(`  REGISTRO real por modo: ${registro.length} = ${pctRegistro}%   ·   desenho: ${desenho.length} = ${pctDesenho}%`);
  console.log(`  faixa do acervo (15 espelhos, 02/ago): desenho 54,3% (senna) … 82,2% (oceano-700km) — maioria desenho é o NORMAL`);
  console.log(`  modos: ${Object.entries(histo).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
  console.log(`  lugar real declarado (needs.geo): ${geoDecl.length} cena(s)  →  mapas no plano: ${mapas.length}, dos quais 3D: ${mapa3d.length}`);

  if (cv) {
    const n = Object.keys(cv).length;
    console.log(`\n  ── âncora de mídia do conceito-visual (${n} cenas dirigidas) ──`);
    console.log(`  asset REAL: ${anc.real.length} = ${pctAncora}%  ·  construída: ${anc.construida.length}  ·  FALTA declarada: ${anc.falta.length}${anc.vazia.length ? `  ·  sem âncora: ${anc.vazia.length}` : ""}`);
    console.log(`  acervo: simpsons 68,3 · avioes 59,7 · senna 53,3 · oceano 41,4 │ planetas 10,7 · paises-baixos 4,1`);
  } else {
    console.log(`\n  (sem conceito-visual.json — a âncora só se mede depois da estação DIREÇÃO DE ARTE)`);
  }

  if (mortos.length) {
    console.log(indeterminado
      ? `\n  ℹ ${mortos.length} âncora(s) apontando arquivo ausente — mas só ${presentes} de ${citados} assets citados estão no disco: sumiço em ATACADO (faxina REND-18, ou a pesquisa nunca rodou).`
      : `\n  ✗ ${mortos.length} âncora(s) apontando arquivo que NÃO EXISTE (${presentes} de ${citados} assets citados estão no disco — a ausência é PONTUAL):`);
    for (const m of mortos.slice(0, 12)) console.log(`      ${m.id}  →  ${m.path}`);
    if (mortos.length > 12) console.log(`      … +${mortos.length - 12}`);
    console.log(indeterminado
      ? `      Daqui eu não desempato. Quem desempata pelo HTML (src vivo × só comentário) é \`qc-midia-real.mjs\`.`
      : `      Declarar o asset não é ter o asset. Ou a pesquisa entrega, ou a âncora vira "FALTA — …".`);
  }
  /* Aqui morava o alerta de "rótulo defasado". Ele saiu por não poder acertar — o porquê, com a
   * medição dos dois formatos, está no ramo da FALTA acima [ARTE-294]. A capacidade fica DECLARADA
   * como ausente, e não em silêncio: quem promove entrega de pesquisa em âncora é o
   * `aplicar-ancoras-pesquisa`, não este gate. */
  for (const a of alertas) {
    if (a.tipo === "ancora-real-baixa") {
      console.log(`\n  ▲ ÂNCORA REAL EM ${a.valor}% — abaixo do piso de ${a.piso}%, num vídeo que declara ${a.geo} cenas de LUGAR REAL.`);
      console.log(`      Onde existe lugar real, desenhar rebaixa a afirmação. Escale: footage/foto onde há registro,`);
      console.log(`      e MAPA (satélite vivo + DEM) onde há geografia — o mapa é mídia real que NÃO depende do stock.`);
    }
    if (a.tipo === "tese-vertical-sem-m04") {
      console.log(`\n  ▲ ${a.valor} cena(s) com argumento VERTICAL e ZERO cena \`mapa3d\` (M04):`);
      for (const s of verticais.slice(0, 8)) console.log(`      ${s.id} [${s.modo}]`);
      if (verticais.length > 8) console.log(`      … +${verticais.length - 8}`);
      console.log(`      Altura e profundidade se PROVAM com elevação real (MapTiler terrain-rgb-v2), não se desenham.`);
      console.log(`      No acervo o M04 aparece 3× em 918 segmentos de 15 produções — capacidade construída e não usada.`);
    }
  }

  const reprova = falhas.length || (DURO && alertas.length);
  console.log(reprova
    ? `\n✗ REPROVADO — ${falhas.length} falha(s)${DURO && alertas.length ? ` + ${alertas.length} alerta(s) sob --duro` : ""}.\n`
    : alertas.length
      ? `\n▲ PASSA COM ${alertas.length} ALERTA(S) — editoriais, não contratuais. \`--duro\` os torna reprovação.\n`
      : `\n✓ PASS — a direção põe o mundo real na tela onde ele existe.\n`);
}

process.exitCode = (falhas.length || (DURO && alertas.length)) ? 1 : 0;
