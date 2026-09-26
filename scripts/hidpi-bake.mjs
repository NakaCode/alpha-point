// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/hidpi-bake.mjs (linhas 1-57, commit 4afda12).
// O que mudou: cena 4K nativa (data-render="4k-native") é PULADA — o original reescrevia todo canvas ≤1920 dela; e o argumento aceita "out/<proj>" e "\". O bake existe para cena legada em 1920.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// HiDPI-BAKE (REND-11) — crava o fix HiDPI DIRETO no HTML (permanente, não runtime). Transforma cada <canvas>
// de backing 1080p → backing 4K nativo + setTransform(2,0,0,2,0,0), mantendo o CSS em 1080p. O código de
// desenho da cena NÃO muda (segue em coords 1080p). O arquivo fica correto standalone — não depende de patch.
// Uso: node scripts/hidpi-bake.mjs <proj>  (ou <arquivo.html>). Idempotente. Só toca cenas EM PRODUÇÃO (o
// chamador escolhe o proj — NUNCA rodar em vídeo postado).
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const R = 2;
function bake(html){
  let changed = false;
  // [porte Régie] A cena 4K nativa já desenha em 3840×2160: um <canvas width="1600"> nela é PARCIAL
  // de propósito (o editor-de-arte manda fazer assim), não backing 1080p. O original não olhava o
  // marcador, dobrava esse canvas e injetava setTransform(2) — a cena passava a desenhar em 2×,
  // cortada, e nenhum gate portado olha pixel. O contrato do editor-de-arte diz "pulado na cena
  // 4K-nativa"; agora o código diz o mesmo. O teste de "nativa" é o MESMO do render do motor
  // (src/ferramentas/renderizar.mjs): se os dois discordassem, uma cena seria nativa para um e legada para o outro.
  if (/data-render=["']4k-native["']|__native4k\s*=\s*true/i.test(html)) return { html, changed: false, nativa: true };
  // remove patch runtime antigo (o injetor `hidpi-canvas.mjs`, hoje em
  // `arquivo-morto/2026-08-15-capacidade-orfa/`) se existir — o bake substitui.
  // ⚠ ESTA LIMPEZA NÃO DEPENDE DAQUELE ARQUIVO: o regex abaixo é cópia literal e autossuficiente, e
  //   foi por isso que ele pôde ser encaixotado. Medido em 15/ago/2026: 0 de 511 HTMLs do disco ainda
  //   carregam o marcador — mas HTML herdado pode aparecer, e por isso a limpeza fica.
  // ⚠ a string "lei 115" abaixo é o MARCADOR LITERAL já gravado em HTMLs no disco (numeração pré-22/jul):
  //   NÃO renumerar pra REND-11, senão o bake para de limpar as cenas antigas. Ver seed/DE-PARA-LEIS.md.
  html = html.replace(/<script>\/\* HiDPI-CANVAS \(lei 115\)[\s\S]*?<\/script>\n?/g, () => { changed = true; return ""; });

  // 1) <canvas ... width="W" height="H" ...> com W<=1920 e SEM style width → backing 2× + style CSS original
  html = html.replace(/<canvas\b([^>]*?)\bwidth="(\d+)"([^>]*?)\bheight="(\d+)"([^>]*?)>/g, (m, a, w, b, h, c) => {
    const W = +w, H = +h;
    if (W > 1920 || /style="[^"]*width/i.test(m)) return m;   // já 4K ou já tem style → deixa
    changed = true;
    const rest = (a + b + c).replace(/\s+/g, " ").trim();
    return `<canvas ${rest} width="${W*R}" height="${H*R}" style="width:${W}px;height:${H}px;" data-hidpi="1">`;
  });

  // 2) todo ctx 2d desenha em coords 1080p mas num backing 4K → precisa de setTransform(2,..). Em vez de casar
  //    N formas de obter o ctx (var x=..., cv?cv.getContext():null, this.ctx=..., getContext inline), fazemos o
  //    jeito ROBUSTO: sobrescrever getContext no <head> pra QUALQUER canvas com data-hidpi já devolver o ctx
  //    escalado. É cravado no arquivo (1 <script> no topo), não injetado em runtime pelo render — permanente e
  //    standalone. Só age em canvas data-hidpi="1" (os que o passo 1 marcou) → não afeta buffers offscreen.
  if(/data-hidpi="1"/.test(html) && !/HiDPI-BAKE head/.test(html)){
    const head = `<script>/* HiDPI-BAKE head (REND-11) — canvas data-hidpi rende em backing 2× já escalado; desenho segue em coords 1080p. */
(function(){var R=${R},G=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(t){var c=G.apply(this,arguments);
 if(t==='2d'&&this.dataset&&this.dataset.hidpi&&!this.__hs){this.__hs=1;try{c.setTransform(R,0,0,R,0,0);}catch(e){}}return c;};})();</script>`;
    html = html.replace(/(<head[^>]*>)/i, `$1\n${head}`);
    if(!/<head/i.test(html)) html = head + html;  // fallback sem <head>
    changed = true;
  }

  return { html, changed };
}

const arg = process.argv[2];
if(!arg){ console.error("uso: hidpi-bake.mjs <proj|arquivo.html>"); process.exit(2); }
let files = [];
if(arg.endsWith(".html")) files=[arg];
else { const projN=arg.replace(/\\/g,"/").replace(/\/+$/,"").replace(/^out\//,"");   // [porte Régie] aceita out/<proj> e "\"
  const dir=join("out",projN,"graphics"); if(!existsSync(dir)){console.error(`✗ ${dir} não existe`);process.exit(2);}
  files=readdirSync(dir).filter(f=>f.endsWith(".html")&&!f.includes("-4k")).map(f=>join(dir,f)); }

let baked=0, skip=0, nativas=0;
for(const f of files){ const src=readFileSync(f,"utf8"); const {html,changed,nativa}=bake(src);
  if(nativa){ nativas++; continue; }
  if(changed){ writeFileSync(f,html); baked++; } else skip++; }
console.log(`HiDPI-bake: ${baked} cena(s) cravada(s) · ${skip} sem mudança · ${nativas} pulada(s) (4K nativa) · total ${files.length}`);
