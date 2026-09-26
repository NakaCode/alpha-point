/* RIG DE CENA DA RÉGIE — o kit que toda cena repete, num objeto só: window.RIG.
   Portado de top10-estudio/knowledge/dourados/README.md:28-49 (commit 4afda124) e do gancho de
   prontidão de agent-core/agentes/editor-de-arte/CONTRATO.md:120-129.
   ONDE MORA: no motor, src/cena/_rig.js; no canal, templates-cena/_rig.js (o create-regie copia).
   COMO ENTRA NA CENA (out/<proj>/graphics/<id>.html): o editor-de-arte COPIA este arquivo inteiro
   num <script> antes do script da cena: ela fica autossuficiente, e o carimbo do render (sha1 do
   HTML) muda quando o rig muda. Marca: <link rel="stylesheet" href="../../../marca/tokens.css">.
   Do estúdio mudou: (1) tudo em RIG (uma cena com o próprio `const seg` quebraria com "already
   been declared"); (2) câmera 4K, 6/4,8 px; (3) a prontidão espera as faces "Marca"/"MarcaSec" e
   o tokens.css; o que faltar vai para window.__fontesFaltando, que o render reprova.
   Uso: const {clamp,seg,eo,eb,win,camera,seekTo,laco,grao}=RIG; window.__fotosProntas=RIG.prontas();
   Lei: a cena é função pura de t. Nada aqui lê relógio, sorteia ou anda sozinho. */
(function () {
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const seg = (t, a, d) => clamp((t - a) / d, 0, 1);                       // rampa 0→1 a partir de a, duração d
  const eo = (p) => 1 - Math.pow(1 - p, 3);                                 // ease-out cúbico
  const eb = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2); // ease-in-out
  const win = (t, s, di, e, dout) => Math.min(seg(t, s, di), 1 - seg(t, e, dout)); // entra em s, sai em e
  const laco = (t, dur) => (dur > 0 ? ((t % dur) + dur) % dur : 0);         // clipe curto em laço, por t
  // Câmera: push-in contínuo + deriva senoidal. Nada congela.
  function camera(el, t, o) {
    if (!el) return; o = o || {};
    const s = (o.base ?? 1.02) + (o.zoom ?? 0.0024) * t;
    const x = (o.ax ?? 6) * Math.sin(t * 0.23), y = (o.ay ?? 4.8) * Math.sin(t * 0.17);
    el.style.transform = "scale(" + s.toFixed(5) + ") translate(" + x.toFixed(2) + "px," + y.toFixed(2) + "px)";
  }
  // Vídeo por f(t): posiciona e espera o "seeked". Na galeria (__PREVIEW) não mexe.
  function seekTo(v, tt) {
    if (!v || window.__PREVIEW || v.readyState < 1) return Promise.resolve();
    const d = v.duration; if (d > 0 && isFinite(d)) tt = clamp(tt, 0, Math.max(0, d - 0.001));
    if (Math.abs(v.currentTime - tt) < 1e-4 && !v.seeking) return Promise.resolve();
    return new Promise((r) => { v.addEventListener("seeked", r, { once: true }); v.addEventListener("error", r, { once: true }); v.currentTime = tt; });
  }
  // Grão: ruído de semente fixa por quadro (mulberry32). Mesmo t, mesmo grão.
  function mulberry32(a) { return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let x = Math.imul(a ^ (a >>> 15), 1 | a); x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x; return ((x ^ (x >>> 14)) >>> 0) / 4294967296; }; }
  function grao(cv, t, o) {
    if (!cv || !cv.getContext) return; o = o || {};
    const ctx = cv.getContext("2d"), w = cv.width, h = cv.height;
    const sorte = mulberry32((o.semente ?? 7) * 100003 + Math.round(t * (o.fps ?? 30)));
    const img = ctx.createImageData(w, h), d = img.data, a = o.alfa ?? 22;
    for (let i = 0; i < d.length; i += 4) { const v = (sorte() * 255) | 0; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = a; }
    ctx.putImageData(img, 0, 0);
  }
  // Paleta por vídeo: OBJETO de papéis {acento:"#…"}, montado pelo editor-de-arte. O espelho.paleta é
  // PROSA e não se aplica; o que não serve vai para window.__avisos, em vez de sumir calado.
  function aviso(m) { (window.__avisos = window.__avisos || []).push("RIG.paleta: " + m); }
  function cor(v) { return typeof CSS !== "undefined" && CSS.supports ? CSS.supports("color", v) : /^#[0-9a-f]{3,8}$|^(rgb|hsl)a?\(/i.test(v); }
  function paleta(p) {
    if (p == null) return;
    if (typeof p !== "object" || Array.isArray(p)) return aviso("esperava um objeto {papel:cor}; veio " + (typeof p === "string" ? "texto (a prosa do espelho?)" : typeof p) + " e nada foi aplicado");
    for (const k in p) {
      if (!/^[a-z][a-z0-9-]*$/.test(k)) aviso("papel \"" + k + "\" ignorado (nome inválido)");
      else if (!cor(String(p[k]))) aviso("--" + k + " ignorado: \"" + p[k] + "\" não é cor");
      else document.documentElement.style.setProperty("--" + k, String(p[k]));
    }
  }
  // Prontidão: <img>, <image> de SVG e TODAS as faces "Marca"/"MarcaSec". Nunca rejeita: o que falhou
  // vai para window.__fontesFaltando, que o render lê e reprova.
  function prontas(familia) {
    familia = familia || "Marca";
    const falta = (window.__fontesFaltando = []);
    // complete=true já basta: imagem quebrada também fica "complete", o evento dela já passou, e
    // esperá-lo segurava a prontidão até o teto do render. Quem reprova imagem quebrada é o gate de mídia.
    const imgs = [].slice.call(document.images).map((im) => im.complete ? 0
      : new Promise((r) => { im.addEventListener("load", r); im.addEventListener("error", r); }));
    // <image> de SVG não tem .complete: uma Image() com o mesmo endereço sai do cache e o decode()
    // diz quando está pronta — sem teto de relógio (o M11 do estúdio usava um).
    const svgs = [].slice.call(document.querySelectorAll("svg image")).map((el) => {
      const h = el.getAttribute("href") || el.getAttribute("xlink:href"); if (!h) return 0;
      const im = new Image(); im.src = new URL(h, document.baseURI).href; return im.decode().then(() => 0, () => 0);
    });
    const faces = [];
    if (document.fonts) document.fonts.forEach((f) => { const n = f.family.replace(/["']/g, ""); if (n === familia || n === familia + "Sec") faces.push(f); });
    // tokens.css ausente cai AQUI: no file:// o <link> que falhou ainda tem .sheet, e só a falta de face o denuncia
    if (!faces.length) falta.push(familia + ": nenhuma @font-face — o marca/tokens.css não carregou ou não foi ligado");
    const fontes = faces.map((f) => f.load().then(() => 0, () => { falta.push(f.family.replace(/["']/g, "") + " " + f.weight); }));
    return Promise.all(imgs.concat(svgs, fontes)).then(() => true);
  }
  window.RIG = Object.freeze({ clamp, seg, eo, eb, win, laco, camera, seekTo, mulberry32, grao, paleta, prontas });
})();
