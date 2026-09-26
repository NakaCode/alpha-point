// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/serve-galeria.mjs (linhas 308-459, commit 4afda12).
// O que mudou:
//   · a lista não cita bucket, gcloud nem estudio.db: canal da Régie é PC local; [porte Régie]
//   · o player navega DENTRO do projeto (o estúdio atravessava todos) e a URL da cena é relativa à
//     raiz do canal (/out/<proj>/graphics/<id>.html), nunca o caminho absoluto da máquina; [porte Régie]
//   · saíram os botões Re-render 4K, Trocar fundo, Tirar fundo, Reverter e Meu arquivo: eram
//     atalhos para o fluxo do estúdio (fila de render remoto, upload para _media/cenas). O dono
//     escreve o pedido na marca e o Claude do canal executa. Ficou o Aprovar; [porte Régie]
//   · o histórico e as respostas do Claude vêm da MESMA fila (/api/marcas): o status e a nota que o
//     Claude grava com `--marcar` aparecem embaixo de cada marca. Sai o out/_claude-resp.jsonl; [porte Régie]
//   · o áudio da narração é o arquivo inteiro com Range, tocado só na janela da cena por JS — o
//     estúdio fatiava com ffmpeg num cache out/<proj>/_audio-cenas/, e o canal não precisa de
//     ffmpeg só para revisar; [porte Régie]
//   · window.__PREVIEW não é mais ligado no onload do iframe (tarde demais para a cena que lê a
//     flag ao carregar): o servidor o injeta no <head> da cena servida (ver serve-galeria.mjs).
//     Pausar e arrastar desligam a prévia (__PREVIEW=false) e posicionam por __renderAt(t), o
//     caminho do render: com a prévia ligada o RIG.seekTo não mexe no vídeo, e o quadro pausado
//     (o que o dono marca) seria outro que o do render; [porte Régie]
//   · o atalho T não deixa a letra cair na caixa de texto, e as setas na agulha movem a agulha;
//   · cena que declara window.__erroCena (mapa com base paga, sem chave na galeria) mostra o motivo
//     no aviso do player, em vez de só aparecer quebrada; [porte Régie]
//   · cores e fonte daqui são da FERRAMENTA (a moldura escura da galeria), não da marca do canal: a
//     cena, dentro do iframe, usa o marca/tokens.css do canal como no render.
// Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────

export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
/** JSON seguro dentro de <script>: "</script>" num texto não fecha a tag. */
const js = (v) => JSON.stringify(v).replace(/</g, "\\u003c").replace(/[\u2028\u2029]/g, (c) => "\\u" + c.charCodeAt(0).toString(16));
const u = encodeURIComponent;

const MOLDURA = `*{box-sizing:border-box}body{background:#0b0f1a;color:#e8eefc;font-family:system-ui,"Segoe UI",Helvetica,Arial,sans-serif;margin:0}`;

/**
 * A home: projetos revisáveis e as cenas de cada um, na ordem do roteiro.
 * @param {{projs:Array, cenasPor:(slug)=>string[], marcasPorCena:Map<string,{total:number,abertas:number}>, soProj?:string}} d
 */
export function paginaIndice({ projs, cenasPor, marcasPorCena, soProj }) {
  let h = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Revisão de cenas</title><style>${MOLDURA}
body{padding:28px 36px}
h1{font-size:24px;margin:0 0 6px}.sub{color:#8aa0c0;font-size:13px;margin-bottom:8px;line-height:1.5}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(215px,1fr));gap:9px;margin-top:13px}
a.card{background:#141c2e;border:1px solid #243049;border-radius:8px;padding:11px 13px;color:#cfe0f5;text-decoration:none;font-size:13px;position:relative;overflow-wrap:anywhere}
a.card:hover{background:#1e2a44;border-color:#7fb0ff}.idx{color:#5f7596;font-size:11px;margin-right:6px}
.dot{position:absolute;top:8px;right:8px;width:8px;height:8px;border-radius:50%;background:#3ad07a}
.dot.aberta{background:#ffb454}
details.proj{margin:24px 0 0}
details.proj>summary{font-size:18px;color:#7fb0ff;border-bottom:1px solid #243049;padding-bottom:8px;cursor:pointer;list-style:none;user-select:none}
details.proj>summary::-webkit-details-marker{display:none}
details.proj>summary::before{content:"▸ ";color:#5f7596}
details.proj[open]>summary::before{content:"▾ "}
.cnt{font-weight:400;color:#5f7596;font-size:13px}.cnt b{color:#ffb454}
code{background:#141c2e;padding:1px 5px;border-radius:4px}a{color:#7fb0ff}
@media (max-width:600px){body{padding:16px}}</style></head><body>
<h1>Revisão de cenas</h1>
<div class="sub">Clique numa cena: ela toca em laço, com o trecho exato da narração ao lado. Marque o instante (tecla T) e escreva, ex.: <code>@12.3s o texto some cedo</code>. A marca vai para <code>out/_feedback-queue.jsonl</code>, que o Claude do canal processa em ordem.<br>● verde = cena já tem marca · ● laranja = marca ainda aberta.</div>`;
  if (soProj) h += `<div class="sub">Mostrando só <b>${esc(soProj)}</b> · <a href="/">todos os projetos</a></div>`;
  else h += `<div class="sub">${projs.length} projeto(s) com cena no disco · a lista sai do disco a cada F5 (projeto novo aparece sozinho)</div>`;
  if (!projs.length) h += `<p style="color:#ffb454">Nenhuma cena em <code>out/&lt;projeto&gt;/graphics/*.html</code> ainda. A galeria mostra as cenas assim que o editor-de-arte gravar a primeira.</p>`;
  for (const p of projs) {
    const cenas = cenasPor(p.slug);
    if (!cenas.length) continue;
    const ab = p.abertas ? ` · <b>${p.abertas} marca(s) aberta(s)</b>` : "";
    h += `<details class="proj" open><summary>${esc(p.slug)} <span class="cnt">— ${cenas.length} cena(s)${ab}</span></summary><div class="grid">`;
    cenas.forEach((id, i) => {
      const m = marcasPorCena.get(`${p.slug}/${id}`);
      const dot = m ? `<span class="dot${m.abertas ? " aberta" : ""}" title="${m.total} marca(s), ${m.abertas} aberta(s)"></span>` : "";
      h += `<a class="card" href="/play?p=${u(p.slug)}&c=${u(id)}"><span class="idx">${String(i + 1).padStart(2, "0")}</span>${esc(id)}${dot}</a>`;
    });
    h += `</div></details>`;
  }
  return h + `</body></html>`;
}

/**
 * O player de UMA cena: o HTML ao vivo em laço, o trecho do roteiro, a narração da janela e a fila
 * de marcas daquela cena.
 */
export function paginaPlayer({ proj, id, anterior, proxima, palco, mtime, trecho, narracao, aviso, status }) {
  // A lista de status vem de galeria/fila.mjs (STATUS_FECHADOS), nunca escrita de novo aqui.
  const fechados = (status && status.fechados) || [];
  // `narracao` pode vir com ?v=<mtime> (serve-galeria.mjs): só o CAMINHO é codificado por segmento.
  const [narrCaminho, narrQuery] = String(narracao || "").split("?");
  const srcNarr = narracao ? "/" + narrCaminho.split("/").map(u).join("/") + (narrQuery ? "?" + narrQuery : "") : "";
  const { W, H } = palco;
  const tIn = trecho && trecho.inSec != null ? (+trecho.inSec).toFixed(1) : "?";
  const tOut = trecho && trecho.outSec != null ? (+trecho.outSec).toFixed(1) : "?";
  const tDur = trecho && trecho.inSec != null && trecho.outSec != null ? (trecho.outSec - trecho.inSec).toFixed(1) : "?";
  const srcCena = `/out/${u(proj)}/graphics/${u(id)}.html?v=${mtime}`;
  const audioHtml = narracao && trecho && trecho.outSec > trecho.inSec
    ? `<div class="nh">🔊 narração <span class="nrng">${tIn}s → ${tOut}s · ${tDur}s</span></div><audio id="na" class="na" controls preload="none" src="${esc(srcNarr)}"></audio>`
    : `<div class="nh dis">🔊 narração — ${narracao ? "cena sem janela no espelho" : "sem narracao.wav no projeto ainda"}</div>`;
  const hrefAnt = `/play?p=${u(proj)}&c=${u(anterior)}`, hrefProx = `/play?p=${u(proj)}&c=${u(proxima)}`;
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>${esc(id)} · revisão</title><style>${MOLDURA}
html,body{height:100%;overflow:hidden;background:#06090f}
#main{position:absolute;left:0;right:340px;top:0;bottom:54px;overflow:hidden}
#wrap{position:absolute;top:50%;left:50%;width:${W}px;height:${H}px;transform-origin:center center;box-shadow:0 0 60px rgba(0,0,0,.6)}
iframe{position:absolute;inset:0;width:${W}px;height:${H}px;border:0;background:#000}
#aviso[hidden]{display:none}#aviso{position:absolute;left:12px;top:12px;right:352px;background:#3a1d0b;border:1px solid #a4621f;color:#ffd7a8;border-radius:8px;padding:8px 12px;font-size:13px;z-index:2}
#chat{position:absolute;right:0;top:0;bottom:0;width:340px;background:#0d1422;border-left:1px solid #243049;display:flex;flex-direction:column}
#chead{padding:12px 14px;border-bottom:1px solid #243049;font-size:13px;color:#9fc4ff;font-weight:600}
#chead small{display:block;color:#5f7596;font-weight:400;margin-top:2px}
#roteiro{padding:11px 14px;border-bottom:1px solid #243049;background:#0a1018}
#roteiro .rh{font-size:11px;color:#f2b65a;font-weight:700;letter-spacing:.03em;margin-bottom:5px}
#roteiro .rtxt{font-size:13px;color:#c4d2e8;line-height:1.45;max-height:150px;overflow-y:auto}
#roteiro .rfonte{font-size:10.5px;color:#5f7596;margin-top:4px}
#roteiro .narr{margin-top:9px;border-top:1px solid #182338;padding-top:8px}
#roteiro .nh{font-size:11px;color:#7fe0c0;font-weight:700;letter-spacing:.02em;margin-bottom:6px}
#roteiro .nh.dis{color:#5f7596;font-weight:400}
#roteiro .nh .nrng{color:#5f7596;font-weight:400;margin-left:5px}
#roteiro .na{width:100%;height:34px;display:block}
#acoes{padding:10px 12px;border-bottom:1px solid #243049;display:flex;gap:6px}
.ac{background:#15452a;color:#bff0d0;border:1px solid #2f7a4e;border-radius:7px;padding:7px 10px;font-size:12.5px;cursor:pointer}
.ac:hover{background:#1c5a37}
#hist{flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:8px}
.msg{background:#15233c;border:1px solid #25395c;border-radius:8px;padding:8px 10px;font-size:13px;color:#dce8fb;white-space:pre-wrap}
.msg .when{display:block;color:#5f7596;font-size:11px;margin-top:4px}
.msg .st{display:inline-block;font-size:10.5px;font-weight:700;border-radius:4px;padding:1px 6px;margin-right:6px;background:#3a2a10;color:#ffb454}
.msg .st.fechada{background:#123a24;color:#7fe0a8}
.msg .nota{display:block;margin-top:6px;padding-top:6px;border-top:1px solid #25395c;color:#bcd6ff}
#compose{padding:10px;border-top:1px solid #243049;display:flex;flex-direction:column;gap:8px}
#tsrow{display:flex;gap:8px;align-items:center}
#tsbtn{background:#142036;color:#9fc4ff;border:1px solid #2f3f5e;border-radius:7px;padding:8px 12px;font-size:13px;font-weight:700;cursor:pointer;font-variant-numeric:tabular-nums;white-space:nowrap}
#tsbtn:hover{background:#1e2f4d;border-color:#7fb0ff}
#tshint{font-size:11px;color:#5f7596;line-height:1.3}
textarea{width:100%;height:78px;resize:none;background:#0a1120;color:#e8eefc;border:1px solid #2f3f5e;border-radius:8px;padding:9px;font-size:14px;font-family:inherit}
textarea:focus{outline:none;border-color:#7fb0ff}
#send{background:#1f6feb;color:#fff;border:0;border-radius:8px;padding:10px;font-size:14px;font-weight:600;cursor:pointer}
#send:hover{background:#388bfd}#send:disabled{opacity:.5;cursor:default}
#st{font-size:12px;color:#8aa0c0;min-height:16px}
#bar{position:absolute;left:0;right:340px;bottom:0;height:54px;background:#0d1422;border-top:1px solid #243049;display:flex;align-items:center;gap:12px;padding:0 14px;color:#cfe0f5;font-size:13px}
a.nav,button.ctl{background:#1b2740;color:#cfe0f5;border:1px solid #2f3f5e;border-radius:6px;padding:6px 11px;font-size:13px;cursor:pointer;text-decoration:none}
a.nav:hover,button.ctl:hover{background:#28395c}#seek{flex:1;accent-color:#7fb0ff}#nm{color:#9fc4ff;font-weight:600}#t{color:#8aa0c0;min-width:84px;text-align:right}</style></head><body>
<div id="main"><div id="aviso"${aviso ? "" : " hidden"}>${aviso ? "⚠ " + esc(aviso) : ""}</div><div id="wrap"><iframe id="f" src="${srcCena}"></iframe></div></div>
<div id="bar"><a class="nav" href="/?p=${u(proj)}" title="lista de cenas">≡</a><a class="nav" href="${hrefAnt}" title="cena anterior (←)">←</a><a class="nav" href="${hrefProx}" title="próxima cena (→)">→</a><span id="nm">${esc(id)}</span><button class="ctl" id="pp">⏸</button><input id="seek" type="range" min="0" max="1000" value="0"><span id="t">0.0s</span></div>
<div id="chat"><div id="roteiro"><div class="rh">📜 ROTEIRO · in ${tIn}s → out ${tOut}s · (${tDur}s)</div><div class="rtxt">${trecho && trecho.texto ? esc(trecho.texto) : "(trecho não encontrado — a cena não está no espelho)"}</div>${trecho && trecho.fonte ? `<div class="rfonte">fonte: ${esc(trecho.fonte)}</div>` : ""}<div class="narr">${audioHtml}</div></div>
<div id="acoes"><button class="ac" id="aprovar" title="grava na fila que o dono aprovou esta cena como está">✓ Aprovar a cena</button></div>
<div id="chead">💬 Marcas desta cena<small>${esc(proj)} / ${esc(id)}</small></div>
<div id="hist"></div>
<div id="compose"><div id="tsrow"><button id="tsbtn" title="insere o instante da agulha no texto (tecla T)">⏱ 0.0s</button><span id="tshint">insere o instante da agulha — pode marcar VÁRIOS no mesmo comentário (tecla T)</span></div><textarea id="ta" placeholder="Ex.: @12.3s o texto some cedo; @30.1s a barra some. Enter envia, Shift+Enter quebra linha."></textarea><button id="send">Enviar marca ▸</button><div id="st"></div></div></div>
<script>
const PROJ=${js(proj)},CENA=${js(id)},T_IN=${js(trecho && trecho.inSec != null ? +trecho.inSec : null)},T_OUT=${js(trecho && trecho.outSec != null ? +trecho.outSec : null)};
const HREF_ANT=${js(hrefAnt)},HREF_PROX=${js(hrefProx)},CHAVE_RASCUNHO="galeria_rascunho_"+PROJ+"/"+CENA;
const f=document.getElementById("f"),wrap=document.getElementById("wrap"),seek=document.getElementById("seek"),tlab=document.getElementById("t"),pp=document.getElementById("pp"),tsbtn=document.getElementById("tsbtn");
function fit(){const mw=innerWidth-340,mh=innerHeight-54;const s=Math.min(mw/${W},mh/${H})*0.97;wrap.style.transform="translate(-50%,-50%) scale("+s+")";}
addEventListener("resize",fit);fit();
let dur=10,t0=performance.now(),paused=false,raf=0,curT=0;
function mostrar(t){curT=t;tlab.textContent=t.toFixed(1)+"s / "+dur.toFixed(1)+"s";tsbtn.textContent="⏱ "+t.toFixed(1)+"s";}
function videos(w,fn){try{w.document.querySelectorAll("video").forEach(fn);}catch(e){}}
const avisoEl=document.getElementById("aviso");
function avisar(msg){if(avisoEl.textContent.indexOf(msg)>=0)return;avisoEl.textContent=(avisoEl.textContent?avisoEl.textContent+" · ":"⚠ ")+msg;avisoEl.hidden=false;}
let erroVisto=false;
/* A cena que declara erro (window.__erroCena, o mapa-base.html) aparece AQUI, com o motivo. A cena de
   mapa com base paga espera window.__chaves, que só o render injeta na memória da página: a galeria
   não recebe chave por HTTP, então essa cena só se confere no render. */
function conferirErro(w){if(erroVisto)return;let e=null,cred=null;try{e=w.__erroCena;cred=w.__REGIE_MAPA&&w.__REGIE_MAPA.credencial;}catch(x){return;}if(!e)return;erroVisto=true;
  if(cred)avisar("mapa com base paga (chave "+cred+"): a galeria não recebe chave, então esta cena só se confere no render — node <motor>/src/ferramentas/renderizar.mjs "+PROJ+" --cena="+CENA);
  else avisar("a cena declarou erro: "+String(e));}
/* PRÉVIA x POSIÇÃO. Rodando, a cena está em prévia: o servidor ligou window.__PREVIEW no <head>, antes
   do script dela, então o <video> toca por play() (fluido) e o seek por currentTime fica desligado —
   senão play e seek brigam e travam o player. PAUSAR ou ARRASTAR posiciona pelo MESMO caminho do
   render (src/ferramentas/renderizar.mjs): __PREVIEW=false e __renderAt(t). Só assim o RIG.seekTo,
   que não mexe no vídeo com __PREVIEW ligado (src/cena/_rig.js:29), leva o vídeo ao t — e o quadro
   pausado, que o dono marca, é o quadro que o render e o shot.mjs produzem. Retomar religa a prévia. */
function modoPrevia(w,ligada){try{w.__PREVIEW=ligada;w.__PREVIEW_PAUSED=!ligada;}catch(e){}}
function posicionar(t){const w=f.contentWindow;modoPrevia(w,false);videos(w,function(v){v.pause();});
  try{const p=w.__renderAt(t);if(p&&p.catch)p.catch(function(){});}catch(e){}mostrar(t);}
f.onload=function(){const w=f.contentWindow;erroVisto=false;modoPrevia(w,true);
  try{if(w.__prepararCaptura)w.__prepararCaptura();}catch(e){}
  videos(w,function(v){v.muted=true;v.loop=true;var p=v.play();if(p&&p.catch)p.catch(function(){});});
  dur=(w.__duracao&&isFinite(w.__duracao)&&w.__duracao>0)?w.__duracao:10;t0=performance.now();cancelAnimationFrame(raf);
  if(paused)posicionar(Math.min(curT,dur));
  (function loop(){conferirErro(w);if(!paused){const t=((performance.now()-t0)/1000)%dur;try{w.__renderAt(t);}catch(e){}seek.value=Math.round(t/dur*1000);mostrar(t);}raf=requestAnimationFrame(loop);})();};
pp.onclick=function(){paused=!paused;pp.textContent=paused?"▶":"⏸";const w=f.contentWindow;
  if(paused){posicionar(curT);return;}
  t0=performance.now()-(seek.value/1000*dur*1000);modoPrevia(w,true);
  videos(w,function(v){var p=v.play();if(p&&p.catch)p.catch(function(){});});};
seek.oninput=function(){paused=true;pp.textContent="▶";posicionar(seek.value/1000*dur);};
/* narração: o arquivo inteiro, tocado só na janela [T_IN, T_OUT) da cena */
const na=document.getElementById("na");
if(na&&T_IN!=null&&T_OUT!=null){na.addEventListener("play",function(){if(na.currentTime<T_IN-0.05||na.currentTime>=T_OUT)na.currentTime=T_IN;});
  na.addEventListener("timeupdate",function(){if(na.currentTime>=T_OUT){na.pause();na.currentTime=T_IN;}});}
/* marcas */
const ta=document.getElementById("ta"),send=document.getElementById("send"),st=document.getElementById("st"),histEl=document.getElementById("hist");
function escH(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
const FECHADOS=${js(fechados)};
function desenhar(arr){const perto=histEl.scrollHeight-histEl.scrollTop-histEl.clientHeight<40;histEl.innerHTML=arr.map(function(m){
  const t=m.t==null?"cena inteira":"@"+Number(m.t).toFixed(1)+"s";const q=m.quando?new Date(m.quando).toLocaleString("pt-BR"):"";
  return '<div class="msg"><span class="st'+(FECHADOS.indexOf(m.status)>=0?" fechada":"")+'">'+escH(m.status)+'</span><b>'+escH(t)+'</b> '+escH(m.texto)+(m.nota?'<span class="nota">🤖 '+escH(m.nota)+'</span>':"")+'<span class="when">'+escH(q)+'</span></div>';}).join("");
  if(perto)histEl.scrollTop=histEl.scrollHeight;}
let ultimo="";
async function atualizar(){try{const r=await fetch("/api/marcas?p="+encodeURIComponent(PROJ)+"&c="+encodeURIComponent(CENA),{cache:"no-store"});if(!r.ok)return;const txt=await r.text();if(txt!==ultimo){ultimo=txt;desenhar(JSON.parse(txt));}}catch(e){}}
setInterval(atualizar,3000);atualizar();
function rascunho(v){try{if(v==null)localStorage.removeItem(CHAVE_RASCUNHO);else localStorage.setItem(CHAVE_RASCUNHO,v);}catch(e){}}
tsbtn.onclick=function(){const v="@"+curT.toFixed(1)+"s ";const s=ta.selectionStart??ta.value.length,e2=ta.selectionEnd??s;ta.value=ta.value.slice(0,s)+v+ta.value.slice(e2);ta.focus();const p=s+v.length;ta.setSelectionRange(p,p);};
async function postar(corpo){for(let tent=1;tent<=5;tent++){try{const r=await fetch("/api/marca",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(corpo)});if(r.ok)return true;if(r.status>=400&&r.status<500){st.textContent="✗ recusado: "+(await r.text());return false;}}catch(e){}st.textContent="falha, tentando de novo ("+tent+")…";await new Promise(function(r){setTimeout(r,600*tent);});}return false;}
async function enviar(){const txt=ta.value.trim();if(!txt)return;send.disabled=true;st.textContent="enviando…";rascunho(txt);
  const ok=await postar({proj:PROJ,cena:CENA,texto:txt,tipo:"critica"});
  if(ok){ta.value="";rascunho(null);st.textContent="✓ na fila — o Claude processa em ordem";atualizar();}else if(!st.textContent.startsWith("✗")){st.textContent="✗ sem conexão com a galeria. O texto continua aqui, tente de novo.";}
  send.disabled=false;ta.focus();}
send.onclick=enviar;
document.getElementById("aprovar").onclick=async function(){st.textContent="enviando…";const ok=await postar({proj:PROJ,cena:CENA,tipo:"aprovacao"});st.textContent=ok?"✓ aprovação registrada":"✗ falha de conexão, tente de novo";if(ok)atualizar();};
ta.addEventListener("keydown",function(e){if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();enviar();}});
ta.addEventListener("input",function(){rascunho(ta.value);});
try{const bk=localStorage.getItem(CHAVE_RASCUNHO);if(bk)ta.value=bk;}catch(e){}
/* Atalhos da página. T: preventDefault ANTES de pôr o foco na caixa — senão a própria letra "t" cai
   dentro dela ("@1.3s t…") e a marca sai adulterada. Setas com o foco na agulha (#seek) movem a
   agulha, não trocam de cena. Espaço num botão é o clique do próprio botão. Ctrl/Alt/⌘ ficam com o
   navegador (Ctrl+T abre aba). */
addEventListener("keydown",function(e){const ae=document.activeElement,tag=ae&&ae.tagName;
  if(ae===ta||e.ctrlKey||e.metaKey||e.altKey)return;
  if((e.key==="ArrowRight"||e.key==="ArrowLeft")&&tag!=="INPUT"){e.preventDefault();location.href=e.key==="ArrowRight"?HREF_PROX:HREF_ANT;return;}
  if(e.key==="t"||e.key==="T"){e.preventDefault();tsbtn.onclick();return;}
  if(e.key===" "&&tag!=="BUTTON"&&tag!=="A"){e.preventDefault();pp.onclick();}});
</script></body></html>`;
}

/**
 * O que o servidor injeta no <head> da cena: window.__PREVIEW antes de qualquer script da cena, e o
 * seek por currentTime desligado enquanto a prévia corre (o estúdio fazia isto no onload do iframe,
 * serve-galeria.mjs:424-430 — depois que a cena já tinha lido a flag). O arquivo em disco NÃO muda:
 * o render continua recebendo a cena sem nada disto.
 */
export const SCRIPT_PREVIEW = `<script>/* galeria da Régie: prévia ao vivo, injetada pelo servidor — não existe no arquivo */window.__PREVIEW=true;window.__PREVIEW_PAUSED=false;(function(){var mp=window.HTMLMediaElement&&HTMLMediaElement.prototype,d=mp&&Object.getOwnPropertyDescriptor(mp,"currentTime");if(d&&d.set&&!mp.__ctPatched){mp.__ctPatched=true;Object.defineProperty(mp,"currentTime",{configurable:true,get:d.get,set:function(x){if(!window.__PREVIEW||window.__PREVIEW_PAUSED)d.set.call(this,x);}});}})();</script>`;

/** Põe o SCRIPT_PREVIEW logo depois de <head> (ou de <html>, ou no começo). Pura. */
export function injetarPreview(html) {
  const s = String(html);
  for (const re of [/<head\b[^>]*>/i, /<html\b[^>]*>/i]) {
    const m = re.exec(s);
    if (m) return s.slice(0, m.index + m[0].length) + SCRIPT_PREVIEW + s.slice(m.index + m[0].length);
  }
  const dt = /^\s*<!doctype[^>]*>/i.exec(s);
  return dt ? s.slice(0, dt[0].length) + SCRIPT_PREVIEW + s.slice(dt[0].length) : SCRIPT_PREVIEW + s;
}
