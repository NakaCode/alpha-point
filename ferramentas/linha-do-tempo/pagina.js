// pagina.js — a linha do tempo pré-render no navegador (ferramentas/linha-do-tempo/DESENHO.md, A.1 e A.4–A.6).
//
// O mestre do tempo é o <audio> da narração. A página não tem botão de aprovar: a aprovação é o "sim" do Lucas no chat.
// O que ela grava pelo servidor: o comentário (fila da galeria), o "visto" (90 % dos quadros da cena tocados nesta
// versão) e as medidas (quadros por segundo, deriva, erros), que são para o Claude ler, não para a tela.
//
// Plano B por cena, pela URL (quando as medidas mostrarem engasgo): ?proxy=s01,s23 toca a cópia leve do clipe (se o
// verbo proxies a fez), ?pausa=s23 posiciona a cena só na pausa. ?atraso=<ms> compensa o atraso de saída do áudio
// (0 por padrão; não medido).
(function () {
  "use strict";
  const FPS = 30;
  const TOKEN = document.querySelector('meta[name="lt-token"]').content;
  const $ = (id) => document.getElementById(id);
  const qs = new URLSearchParams(location.search);
  const lista = (k) => new Set((qs.get(k) || "").split(",").map((s) => s.trim()).filter(Boolean));
  const PLANO_PROXY = lista("proxy"), PLANO_PAUSA = lista("pausa");
  const ATRASO = (Number(qs.get("atraso")) || 0) / 1000;
  // As 5 faces do marca/tokens.css (linhas 38-56), carregadas antes de tocar, como o render.
  const FACES = ['400 1em "Marca"', '800 1em "MarcaSec"', '400 1em "MarcaAlt"', '400 1em "MarcaDoc"', '700 1em "MarcaDoc"'];
  const PRAZO = Symbol("prazo");
  const comPrazo = (p, ms) => Promise.race([Promise.resolve(p), new Promise((r) => setTimeout(() => r(PRAZO), ms))]);
  const espera = (ms) => new Promise((r) => setTimeout(r, ms));
  const mmss = (s) => { s = Math.max(0, s); const m = Math.floor(s / 60); return m + ":" + (s - m * 60).toFixed(1).padStart(4, "0"); };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let L = null;               // a linha (/api/linha)
  let palavras = [];          // words.json
  const audio = $("narracao");

  // ─── o relógio ───────────────────────────────────────────────────────────────────────────────
  // performance.now() a partir de uma âncora, refeita quando a diferença para audio.currentTime passa de 50 ms.
  const R = { tocando: false, esperando: false, tPausa: 0, ancA: 0, ancP: 0, reancoras: 0, pulo: 0 };
  function ancorar() { R.ancA = audio.currentTime; R.ancP = performance.now(); }
  function agora() {
    if (!R.tocando) return R.tPausa;
    const ta = audio.currentTime;
    if (R.esperando) return Math.max(0, ta - ATRASO);
    const now = performance.now();
    let tp = R.ancA + (now - R.ancP) / 1000;
    if (Math.abs(tp - ta) > 0.05) { R.ancA = ta; R.ancP = now; R.reancoras++; tp = ta; }
    return Math.max(0, tp - ATRASO);
  }
  /** A cena do quadro F: busca binária pelo início; -1 fora de toda cena. */
  function acharIdx(F) {
    const cs = L.cenas;
    let lo = 0, hi = cs.length - 1, r = -1;
    while (lo <= hi) { const mid = (lo + hi) >> 1; if (cs[mid].ini <= F) { r = mid; lo = mid + 1; } else hi = mid - 1; }
    return r >= 0 && F < cs[r].fim ? r : -1;
  }

  // ─── os dois palcos que se revezam ───────────────────────────────────────────────────────────
  function novoSlot(el) {
    return { el, iframe: el.querySelector("iframe"), video: el.querySelector("video"), idx: -1, sha1: null, versao: null, estado: "vazio",
      errosCarga: [],
      erro: null, win: null, geracao: 0, modo: null, promessa: Promise.resolve(false), pendente: false, pendenteDesde: 0,
      nPend: 0, ultimoF: null, ultimaRessinc: 0, med: null, duracao: 0 };
  }
  const S = [novoSlot($("slotA")), novoSlot($("slotB"))];
  let atual = S[0], outra = S[1];

  function modoDe(c) {
    if (c.tipo === "mapa" && c.modoMapa === "proxy" && c.proxy) return "proxy";
    if (PLANO_PROXY.has(c.id) && c.proxy) return "proxy";
    if (PLANO_PAUSA.has(c.id)) return "pausa";
    return "iframe";
  }

  function limparSlot(s) {
    s.geracao++;
    s.iframe.onload = null;
    if (s.win) { try { s.win.__LT_TOCANDO = false; } catch (e) {} }
    s.win = null;
    s.iframe.src = "about:blank";   // nunca mais de 2 contextos WebGL vivos
    try { s.video.pause(); s.video.removeAttribute("src"); s.video.load(); } catch (e) {}
    s.idx = -1; s.sha1 = null; s.versao = null; s.errosCarga = []; s.estado = "vazio"; s.erro = null; s.modo = null; s.pendente = false; s.ultimoF = null;
    s.promessa = Promise.resolve(false);
    s.el.classList.remove("proxy");
  }

  function escalar(s) {
    const c = s.idx >= 0 ? L.cenas[s.idx] : null;
    const W = (c && c.palco && c.palco.W) || 3840, H = (c && c.palco && c.palco.H) || 2160;
    const larg = $("palco").clientWidth;
    s.iframe.style.width = W + "px"; s.iframe.style.height = H + "px";
    s.iframe.style.transform = "scale(" + (larg / W) + ")";
  }

  /** O que a cena declarou sobre si (o ESTADO_CENA do render): o erro, as faces que falharam, os avisos. */
  function estadoCena(w) {
    const f = [];
    try { w.document.fonts.forEach((x) => { if (x.status === "error") f.push(x.family.replace(/["']/g, "") + " " + x.weight); }); } catch (e) {}
    for (const x of (w.__fontesFaltando || [])) f.push(String(x));
    return { erro: w.__erroCena ? String(w.__erroCena) : null, fontes: [...new Set(f)] };
  }

  /**
   * O setter de currentTime, trocado por fora no iframe (mesma origem), como a galeria faz. Tocando: alvo andando e a
   * até 2 quadros do quadro real → sem seek, "seeked" sintético (a Promise do RIG.seekTo resolve) e o vídeo segue por
   * play() (mudo); diferença maior → seek de verdade e volta a tocar; alvo parado → o vídeo pausa naquele quadro.
   * Pausado (ou preparando): seek de verdade, como no render. Vídeo parado, como o quadro aéreo da s03, passa direto.
   */
  function instalarSetter(w, s) {
    const P = w.HTMLMediaElement && w.HTMLMediaElement.prototype;
    if (!P || P.__ltSetter) return;
    const d = Object.getOwnPropertyDescriptor(P, "currentTime");
    if (!d || !d.set) return;
    const sintetico = (v) => Promise.resolve().then(() => v.dispatchEvent(new w.Event("seeked")));
    const estado = (v) => v.__lt || (v.__lt = { alvo: null, ouvindo: false, retomar: false, chamada: 0 });
    Object.defineProperty(P, "currentTime", {
      configurable: true,
      // Ler o currentTime também é a cena cuidar do vídeo: o RIG.seekTo lê e não escreve quando ele já está no alvo.
      get: function () { estado(this).chamada = w.__LT_CHAMADA || 0; return d.get.call(this); },
      set: function (x) {
        const v = this, st = estado(v);
        const ant = st.alvo; st.alvo = x; st.chamada = w.__LT_CHAMADA || 0;
        if (!w.__LT_TOCANDO) { st.retomar = false; if (!v.paused) v.pause(); return d.set.call(v, x); }
        if (!st.ouvindo) {
          st.ouvindo = true;
          v.addEventListener("seeked", () => { if (st.retomar && w.__LT_TOCANDO) { st.retomar = false; v.play().catch(() => {}); } });
        }
        const med = s.med, dif = Math.abs(d.get.call(v) - x);
        const anda = ant != null && x > ant + 1e-4;
        if (!anda) {
          st.retomar = false;
          if (!v.paused) v.pause();
          if (dif > 0.5 / FPS) { if (med) med.seeksReais++; return d.set.call(v, x); }
          if (med) med.sinteticos++;
          return sintetico(v);
        }
        if (!v.seeking && dif <= 2 / FPS) { if (v.paused) v.play().catch(() => {}); if (med) med.sinteticos++; return sintetico(v); }
        st.retomar = true; if (med) med.seeksReais++;
        d.set.call(v, x);
      },
    });
    P.__ltSetter = true;
  }

  /**
   * O vídeo que a cena deixou de posicionar (o clipe1 da s53 depois do corte) pausa: senão segue tocando escondido,
   * decodificando 4K à toa, e a deriva dele parece engasgo. Roda ANTES de cada __renderAt: o vídeo que a cena não tocou
   * desde a chamada anterior (escrita ou leitura do currentTime) para. Uma chamada de folga cobre o __renderAt assíncrono.
   */
  function pausarNaoPosicionados(w) {
    const n = w.__LT_CHAMADA || 0;
    w.document.querySelectorAll("video").forEach((v) => {
      const st = v.__lt;
      if (st && st.alvo != null && !v.paused && n - (st.chamada || 0) >= 1) { st.retomar = false; try { v.pause(); } catch (e) {} }
    });
  }

  /** A deriva do vídeo dentro da cena: o quadro apresentado contra o quadro que a cena pediu nesta chamada. */
  function observarVideo(s, w, v) {
    if (!v.requestVideoFrameCallback) return;
    const cb = (now, meta) => {
      if (s.win !== w) return;
      if (w.__LT_TOCANDO && !v.paused && v.__lt && v.__lt.alvo != null && s.med && (w.__LT_CHAMADA || 0) - (v.__lt.chamada || 0) <= 1) {
        s.med.derivaVideo.push(Math.floor(meta.mediaTime * FPS + 1e-6) - Math.floor(v.__lt.alvo * FPS + 1e-6));
      }
      v.requestVideoFrameCallback(cb);
    };
    v.requestVideoFrameCallback(cb);
  }

  /**
   * Os erros da carga, como o render os vê (Runtime.exceptionThrown e Network.loadingFailed): o erro de JS, a promessa
   * rejeitada sem tratamento e o elemento que não carregou (script, folha, img, vídeo). A página não injeta nada no
   * HTML, então os ouvintes entram no documento novo assim que ele aparece (vigia a cada volta do laço de eventos):
   * o erro de um script que roda ANTES disso não se vê aqui, e só o render o pega.
   */
  function vigiarCarga(s, fr, alvo, g) {
    const docVelho = fr.contentDocument;
    let vigiado = null, ativo = true;
    const ouvir = () => {
      if (!ativo || g !== s.geracao) return;
      let d = null, w = null;
      try { d = fr.contentDocument; w = fr.contentWindow; if (!d || d === docVelho || w.location.pathname !== alvo) d = null; } catch (e) { d = null; }
      if (d && d !== vigiado) {
        vigiado = d;
        const lista = s.errosCarga;
        w.addEventListener("error", (ev) => {
          if (ev instanceof w.ErrorEvent) { lista.push("erro de JS: " + String(ev.message || ev.error || "sem descrição").slice(0, 200)); return; }
          const el = ev.target, u = el && (el.currentSrc || el.src || el.href);
          if (u) lista.push((el.tagName || "elemento").toLowerCase() + " não carregou: " + decodeURIComponent(String(u).split(/[?#]/)[0].split("/").pop()));
        }, true);
        w.addEventListener("unhandledrejection", (ev) => lista.push("promessa rejeitada: " + String((ev.reason && ev.reason.message) || ev.reason).slice(0, 200)));
      }
      setTimeout(ouvir, 0);
    };
    ouvir();
    return () => { ouvir(); ativo = false; };
  }

  async function prepararIframe(s, c, g) {
    const fr = s.iframe, alvo = new URL(c.url, location.href).pathname;
    s.errosCarga = [];
    let pararVigia = () => {};
    await new Promise((ok, falha) => {
      const to = setTimeout(() => falha(new Error("a cena não carregou em 60 s")), 60000);
      fr.onload = () => {
        let p = ""; try { p = fr.contentWindow.location.pathname; } catch (e) {}
        if (p !== alvo) return;   // o about:blank da limpeza, não a cena
        clearTimeout(to); ok();
      };
      escalar(s);
      pararVigia = vigiarCarga(s, fr, alvo, g);
      fr.src = c.url;
    });
    pararVigia();   // os ouvintes continuam no documento: o erro durante o toque também entra em s.errosCarga
    if (g !== s.geracao) return;
    const w = fr.contentWindow, d = w.document;
    s.win = w; w.__LT_TOCANDO = false;
    // O "visto" lê os arquivos da cena pelo resource timing; o buffer padrão (250) enche com tiles do rascunho.
    try { w.performance.setResourceTimingBufferSize(5000); } catch (e) {}
    // A preparação é a do render (renderizar.mjs:452-475): a folha sem camada, as fontes, __ready, os ganchos e o
    // __prepararCaptura. __PREVIEW fica indefinido: a cena de mapa não liga o laço próprio, e o RIG.seekTo posiciona.
    const folha = d.createElement("style"); folha.textContent = "*,*::before,*::after{will-change:auto!important}";
    (d.head || d.documentElement).appendChild(folha);
    instalarSetter(w, s);
    await comPrazo(Promise.all(FACES.map((f) => d.fonts.load(f).catch(() => null))), 15000);
    await comPrazo(d.fonts.ready, 15000);
    if (typeof w.__ready !== "undefined") await comPrazo(Promise.resolve(w.__ready).then(() => 1, () => 1), 20000);
    for (const k of ["__fotosProntas", "__videoPronto", "__logoPronta"]) {
      const v = w[k];
      if (v && typeof v.then === "function") { await comPrazo(Promise.resolve(v).catch(() => {}), 12000); try { w[k] = Promise.resolve(true); } catch (e) {} }
    }
    const fim = performance.now() + 15000;
    while (performance.now() < fim && (w.__logoPronta === false || w.__fotosProntas === false || w.__videoPronto === false)) await espera(100);
    if (g !== s.geracao) return;
    if (typeof w.__prepararCaptura === "function") {
      const r = await comPrazo(Promise.resolve().then(() => w.__prepararCaptura()).then(() => 1), 90000);
      if (r === PRAZO) throw new Error("window.__prepararCaptura() não terminou em 90 s");
    }
    const e = estadoCena(w);
    if (e.erro) throw new Error("a cena declarou erro: " + e.erro);
    // As recusas do render (renderizar.mjs:478-483): a mídia que não carregou, pelo verificarMidias do motor (a página
    // o recebe em /lt/motor.js), e o arquivo que voltou em erro (o resource timing guarda o status HTTP).
    const quebradas = [];
    if (typeof window.__LT_verificarMidias === "function") {
      const r = await comPrazo(window.__LT_verificarMidias({ document: d, Image: w.Image }).catch((x) => ["verificarMidias falhou: " + x]), 15000);
      if (r === PRAZO) quebradas.push("a varredura de mídia não terminou em 15 s");
      else quebradas.push(...(r || []));
    } else quebradas.push("a varredura de mídia do render (/lt/motor.js) não carregou");
    try {
      for (const x of w.performance.getEntriesByType("resource")) {
        if (x.responseStatus >= 400) quebradas.push(decodeURIComponent(x.name.split(/[?#]/)[0].split("/").pop()) + " voltou com HTTP " + x.responseStatus);
      }
    } catch (x) {}
    if (s.errosCarga.length) throw new Error("erro na carga da cena: " + [...new Set(s.errosCarga)].join("; "));
    if (quebradas.length) throw new Error("mídia que não carregou: " + [...new Set(quebradas)].join("; "));
    if (e.fontes.length) throw new Error("fonte que não carregou: " + e.fontes.join("; "));
    if (typeof w.__renderAt !== "function") throw new Error("contrato: window.__renderAt não é uma função");
    if (!(typeof w.__duracao === "number" && w.__duracao > 0)) throw new Error("contrato: window.__duracao não é um número > 0");
    s.duracao = w.__duracao;
    d.querySelectorAll("video").forEach((v) => observarVideo(s, w, v));
  }

  async function prepararProxy(s, c) {
    const v = s.video;
    s.el.classList.add("proxy");
    await new Promise((ok, falha) => {
      const to = setTimeout(() => falha(new Error("o proxy do clipe não carregou em 30 s")), 30000);
      v.addEventListener("loadeddata", () => { clearTimeout(to); ok(); }, { once: true });
      v.addEventListener("error", () => { clearTimeout(to); falha(new Error("o proxy do clipe não carregou")); }, { once: true });
      v.muted = true; v.src = c.proxy; v.load();
    });
    s.duracao = v.duration;
  }

  /** Prepara a cena idx no palco s. A promessa resolve true quando ele pode entrar (pronto, ou com o erro à vista). */
  function prepararSlot(s, idx) {
    limparSlot(s);
    const c = L.cenas[idx], g = s.geracao;
    s.idx = idx; s.sha1 = c.sha1; s.versao = c.versao; s.estado = "carregando"; s.modo = modoDe(c);
    const t0 = performance.now();
    desenharFaixa();
    s.promessa = (async () => {
      try {
        // A cena que o servidor já sabe quebrada (contrato do render, arquivo citado que não existe) nem carrega.
        if (c.tipo === "falta" || !c.url || c.erro) throw new Error(c.erro || "a cena não tem HTML");
        if (s.modo === "proxy") await prepararProxy(s, c);
        else await prepararIframe(s, c, g);
        if (g !== s.geracao) return false;
        s.estado = "pronto"; s.prontoMs = performance.now() - t0;
      } catch (e) {
        if (g !== s.geracao) return false;
        s.estado = "erro"; s.erro = String((e && e.message) || e);
        erros.set(c.id, s.erro);
        mandarMedida({ cena: c.id, sha1: c.sha1, tipo: "erro", modo: s.modo, erro: s.erro });
      }
      desenharFaixa();
      return true;
    })();
    return s.promessa;
  }

  /** O quadro exato na pausa: o mesmo t e o mesmo estado do render (quadroJS, renderizar.mjs:339-346). */
  async function posicionarExato(s, tc) {
    if (s.estado !== "pronto") return;
    if (s.modo === "proxy") {
      const v = s.video; v.pause();
      const alvo = Math.min((Math.floor(tc * FPS + 1e-6) + 0.5) / FPS, Math.max(0, (v.duration || 0) - 0.5 / FPS));
      if (Math.abs(v.currentTime - alvo) > 0.25 / FPS) await comPrazo(new Promise((r) => { v.addEventListener("seeked", r, { once: true }); v.currentTime = alvo; }), 2000);
      return;
    }
    const w = s.win; if (!w) return;
    w.__LT_TOCANDO = false;
    w.document.querySelectorAll("video").forEach((v) => { try { v.pause(); } catch (e) {} });
    try { await comPrazo(Promise.resolve(w.__renderAt(tc)), 5000); } catch (e) {}
    if (typeof w.__ready !== "undefined" && typeof w.__aguardarMapa === "function") await comPrazo(Promise.resolve(w.__aguardarMapa()).catch(() => {}), 8000);
    await new Promise((res) => {
      const vids = [...w.document.querySelectorAll("video")].filter((v) => v.readyState > 0);
      if (!vids.length) return res();
      let n = vids.length; const um = () => { if (--n <= 0) res(); };
      for (const v of vids) { if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(um); else um(); }
      setTimeout(res, 400);
    });
    await comPrazo(w.document.fonts.ready, 5000);
    await new Promise((r) => w.requestAnimationFrame(() => w.requestAnimationFrame(() => r())));
    s.ultimoF = null;
  }

  function mostrar(s) {
    for (const x of S) x.el.classList.toggle("visivel", x === s);
    const c = s.idx >= 0 ? L.cenas[s.idx] : null;
    const selo = $("selo");
    let txt = "";
    if (c && c.tipo === "mapa" && s.modo !== "proxy") txt = "mapa sem satélite (rascunho)" + (c.avisoRelevo ? " · relevo plano: anel e rótulos fora do lugar" : "");
    else if (c && s.modo === "proxy") txt = c.tipo === "mapa" ? "" : "plano B: cópia do clipe";
    else if (c && s.modo === "pausa") txt = "plano B: esta cena só se posiciona na pausa";
    selo.textContent = txt; selo.hidden = !txt;
    if (s.estado === "erro") aviso("A cena " + c.id + " não abriu: " + s.erro, true);
    else if (!R.esperando) aviso("");
  }
  function aviso(txt, erro) { const a = $("aviso"); a.textContent = txt || ""; a.hidden = !txt; a.classList.toggle("erro", !!erro); }

  // ─── as medidas (vão para out/<proj>/_tmp/linha-do-tempo/medidas.jsonl) ────────────────────────────
  const erros = new Map();
  function novaMedida(s, troca) {
    if (s.idx < 0) return null;
    const c = L.cenas[s.idx];
    s.med = { cena: c.id, sha1: c.sha1, versao: c.versao, modo: s.modo, inicio: performance.now(), ticks: 0, desenhados: 0, pulos: 0,
      renderMs: [], deriva: [], derivaVideo: [], ressinc: 0, seeksReais: 0, sinteticos: 0, reancoras0: R.reancoras,
      prontoMs: s.prontoMs || null, troca: troca || null, erros: [] };
    return s.med;
  }
  function estat(a) {
    if (!a.length) return null;
    const o = a.slice().sort((x, y) => x - y), abs = a.map(Math.abs);
    return { n: a.length, media: a.reduce((p, x) => p + x, 0) / a.length, mediaAbs: abs.reduce((p, x) => p + x, 0) / a.length,
      max: Math.max(...abs), p95: o[Math.min(o.length - 1, Math.floor(o.length * 0.95))] };
  }
  function fecharMedida(s) {
    const m = s.med; s.med = null;
    if (!m || !m.ticks) return;
    const seg = (performance.now() - m.inicio) / 1000;
    mandarMedida({ cena: m.cena, sha1: m.sha1, tipo: "toque", modo: m.modo, segundos: seg, ticks: m.ticks,
      rafPorSegundo: m.ticks / seg, quadrosPorSegundo: m.desenhados / seg, pulos: m.pulos,
      renderMs: estat(m.renderMs), derivaQuadros: estat(m.deriva), derivaVideoQuadros: estat(m.derivaVideo),
      ressinc: m.ressinc, seeksReais: m.seeksReais, sinteticos: m.sinteticos, reancoras: R.reancoras - m.reancoras0,
      prontoMs: m.prontoMs, troca: m.troca, erros: m.erros, dpr: devicePixelRatio, palcoPx: $("palco").clientWidth });
  }
  function mandarMedida(d) { postar("/api/medida", d).catch(() => {}); }

  async function postar(rota, corpo) {
    const r = await fetch(rota, { method: "POST", headers: { "content-type": "application/json", "x-lt-token": TOKEN }, body: JSON.stringify(corpo) });
    let j = null; try { j = await r.json(); } catch (e) {}
    return { ok: r.ok, status: r.status, corpo: j };
  }

  // ─── o visto: 90 % dos quadros da cena tocados nesta versão ─────────────────────────────────────
  const cobertura = new Map();
  let covUltimo = { idx: -1, F: -1 };
  function marcarCobertura(idx, F) {
    if (idx < 0) return;   // fora de toda cena (preto antes da primeira): nada a marcar
    const c = L.cenas[idx];
    // No plano B "pausa" a cena fica parada: tocar a narração por cima não é ver a cena.
    if (atual.modo === "pausa") return;
    let k = cobertura.get(c.id);
    if (!k || k.versao !== c.versao) { k = { sha1: c.sha1, versao: c.versao, marcas: new Uint8Array(c.n), total: 0, enviado: false, proxima: 0 }; cobertura.set(c.id, k); }
    const de = covUltimo.idx === idx && F >= covUltimo.F && F - covUltimo.F <= 15 ? covUltimo.F : F;
    for (let f = de; f <= F; f++) { const i = f - c.ini; if (i >= 0 && i < c.n && !k.marcas[i]) { k.marcas[i] = 1; k.total++; } }
    covUltimo = { idx, F };
    // Cena que não abriu (bloco vermelho) não vira "vista": o Lucas viu o aviso de erro, não a cena.
    if (!k.enviado && performance.now() >= k.proxima && k.total >= 0.9 * c.n && atual.idx === idx && atual.versao === c.versao &&
        atual.estado === "pronto" && !erros.has(c.id) && !(atual.errosCarga && atual.errosCarga.length)) {
      k.enviado = true; mandarVisto(c, atual, k);
    }
  }
  /**
   * Os arquivos que a cena carregou, com o instante em que cada um terminou de chegar (ms desde 1970): o servidor
   * recusa o visto se o arquivo mudou depois disso. Os que o HTML cita o servidor já lê do próprio HTML; esta lista
   * soma o que a cena pediu por conta própria. No proxy, o servidor põe o clipe de origem.
   */
  function arquivosDaCena(s) {
    if (s.modo === "proxy" || !s.win) return [];
    try {
      const t0 = s.win.performance.timeOrigin;
      return s.win.performance.getEntriesByType("resource").map((e) => {
        try { const u = new URL(e.name); return u.origin === location.origin ? { u: u.pathname, t: Math.ceil(t0 + e.responseEnd) } : null; } catch (x) { return null; }
      }).filter(Boolean);
    } catch (e) { return []; }
  }
  async function mandarVisto(c, s, k) {
    const r = await postar("/api/visto", { cena: c.id, sha1: k.sha1, versao: k.versao, modo: s.modo, arquivos: arquivosDaCena(s), cobertura: Math.min(1, k.total / c.n) }).catch(() => null);
    if (r && r.ok) { c.visto = "atual"; desenharFaixa(); return; }
    // Recusado: nada de mandar de novo a cada quadro. 409 = versão velha (a página se atualiza); 422 = a cena não pode
    // ser vista assim (erro, plano B "pausa").
    k.enviado = false; k.proxima = performance.now() + 3000;
    if (r && r.status === 409) verificarVersao();
    else if (r && r.status === 422) { erros.set(c.id, (r.corpo && r.corpo.erro) || "recusada"); desenharFaixa(); }
  }

  // ─── o laço ──────────────────────────────────────────────────────────────────────────────────
  function precisaOlho(c) { return c.visto !== "atual" || c.abertos > 0; }
  function proximaIdx(i) {
    for (let j = i + 1; j < L.cenas.length; j++) if (!$("soMudou").checked || precisaOlho(L.cenas[j])) return j;
    return -1;
  }

  function desenhar(s, F) {
    const c = L.cenas[s.idx], m = s.med, now = performance.now();
    if (!m) return;
    m.ticks++;
    if (s.estado !== "pronto" || s.modo === "pausa") return;
    if (s.modo === "proxy") {
      const v = s.video, i = F - c.ini;
      if (v.currentTime < (v.duration || 0) - 1 / FPS) {
        if (v.paused && !v.seeking) v.play().catch(() => {});
        const dq = Math.floor(v.currentTime * FPS + 1e-6) - i;
        m.deriva.push(dq);
        if (Math.abs(dq) > 1 && !v.seeking && now - s.ultimaRessinc > 300) { v.currentTime = (i + 0.5) / FPS; m.ressinc++; s.ultimaRessinc = now; }
      }
      m.desenhados++;
      return;
    }
    const w = s.win;
    if (!w) return;
    if (s.pendente && now - s.pendenteDesde < 500) { m.pulos++; m.deriva.push(F - (s.ultimoF == null ? F : s.ultimoF)); return; }
    if (s.ultimoF === F) return;
    pausarNaoPosicionados(w);
    w.__LT_CHAMADA = (w.__LT_CHAMADA || 0) + 1;
    const t0 = performance.now();
    let r;
    // O erro do __renderAt é o mesmo que o render recusaria ("erro de JS na cena no quadro N"): bloco vermelho, sem visto.
    const errou = (e) => {
      const msg = String((e && e.message) || e).slice(0, 200);
      if (!m.erros.includes(msg)) m.erros.push(msg);
      if (!erros.has(c.id)) { erros.set(c.id, "erro de JS no __renderAt: " + msg); aviso("A cena " + c.id + " deu erro de JS: " + msg, true); desenharFaixa(); }
    };
    try { r = w.__renderAt((F - c.ini) / FPS); }
    catch (e) { errou(e); }
    m.renderMs.push(performance.now() - t0);
    m.deriva.push(s.ultimoF == null ? 0 : Math.max(0, F - s.ultimoF - 1));
    s.ultimoF = F; m.desenhados++;
    if (r && typeof r.then === "function") {
      const marca = ++s.nPend; s.pendente = true; s.pendenteDesde = now;
      const fim = () => { if (s.nPend === marca) s.pendente = false; };
      r.then(fim, (e) => { fim(); errou(e); });
    }
    if (s.errosCarga.length && !erros.has(c.id)) { erros.set(c.id, s.errosCarga[0]); aviso("A cena " + c.id + ": " + s.errosCarga[0], true); desenharFaixa(); }
    if (w.__erroCena && !m.erros.includes("__erroCena")) { m.erros.push("__erroCena"); erros.set(c.id, String(w.__erroCena)); aviso("A cena " + c.id + " declarou erro: " + w.__erroCena, true); desenharFaixa(); }
  }

  function trocar(F, esperaMs) {
    fecharMedida(atual);
    const velha = atual; atual = outra; outra = velha;
    limparSlot(velha);
    mostrar(atual);
    const c = L.cenas[atual.idx];
    novaMedida(atual, { quadroAudio: F, quadroEsperado: c.ini, esperaMs: esperaMs || 0 });
    if (atual.win) atual.win.__LT_TOCANDO = R.tocando;
    atual.ultimoF = null;
    // A próxima se prepara meio segundo depois da troca: a cena nova pinta primeiro (mesma origem = mesma thread).
    const meu = atual.idx;
    setTimeout(() => { if (atual.idx === meu) prepararProxima(); }, 500);
  }
  function prepararProxima() {
    const j = proximaIdx(atual.idx);
    if (j < 0) return;
    if (outra.idx === j && outra.versao === L.cenas[j].versao && outra.modo === modoDe(L.cenas[j]) && outra.estado !== "vazio") return;
    prepararSlot(outra, j);
  }

  function esperarCena(idx, F) {
    if (R.esperando) return;
    R.esperando = true;
    audio.pause();
    aviso("carregando a próxima cena…");
    const t0 = performance.now();
    if (!(outra.idx === idx && outra.versao === L.cenas[idx].versao && outra.estado !== "vazio")) prepararSlot(outra, idx);
    const s = outra, pulo = R.pulo;
    s.promessa.then(async (ok) => {
      if (pulo !== R.pulo || !R.tocando) return;
      // A preparação foi trocada no meio (versão nova, outro pulo): recomeça daqui, sem deixar a narração parada.
      if (!ok || s !== outra || s.idx !== idx) { R.esperando = false; irPara(F / FPS, { tocarDepois: true }); return; }
      await posicionarExato(s, (F - L.cenas[idx].ini) / FPS);
      if (pulo !== R.pulo || !R.tocando) return;
      R.esperando = false;
      trocar(F, performance.now() - t0);
      aviso("");
      if (atual.win) atual.win.__LT_TOCANDO = true;
      audio.play().then(ancorar).catch(() => {});
    });
  }

  function laco() {
    if (!R.tocando) return;
    requestAnimationFrame(laco);
    const t = agora();
    if (t >= L.duracao - 0.5 / FPS) { pausar(); return; }
    const F = Math.floor(t * FPS + 1e-6);
    atualizarUI(t, F);
    if (R.esperando) return;
    let idx = acharIdx(F);
    if (idx >= 0 && $("soMudou").checked && !precisaOlho(L.cenas[idx])) {
      const j = proximaIdx(idx);
      if (j < 0) { pausar(); return; }
      irPara(L.cenas[j].ini / FPS, { tocarDepois: true });
      return;
    }
    if (idx !== atual.idx) {
      if (idx < 0) { fecharMedida(atual); limparSlot(atual); mostrar(atual); return; }
      if (outra.idx === idx && outra.versao === L.cenas[idx].versao && outra.estado !== "carregando" && outra.estado !== "vazio") trocar(F, 0);
      else { esperarCena(idx, F); return; }
    }
    if (!atual.med) novaMedida(atual);
    desenhar(atual, F);
    marcarCobertura(idx, F);
  }

  // ─── tocar, pausar e pular ────────────────────────────────────────────────────────────────────
  function pararRelogio() {
    if (R.tocando) R.tPausa = agora();
    audio.pause();
    R.tocando = false; R.esperando = false;
    for (const s of S) {
      if (s.win) { try { s.win.__LT_TOCANDO = false; s.win.document.querySelectorAll("video").forEach((v) => v.pause()); } catch (e) {} }
      try { s.video.pause(); } catch (e) {}
    }
    fecharMedida(atual);
    covUltimo = { idx: -1, F: -1 };
    $("tocar").textContent = "▶";
  }
  function pausar() {
    pararRelogio();
    aviso("");
    const F = Math.floor(R.tPausa * FPS + 1e-6);
    atualizarUI(R.tPausa, F);
    if (atual.idx >= 0 && L.cenas[atual.idx].ini <= F && F < L.cenas[atual.idx].fim) posicionarExato(atual, (F - L.cenas[atual.idx].ini) / FPS);
  }

  /** Pular para um ponto prepara aquela cena antes de tocar. */
  async function irPara(t, { tocarDepois = false } = {}) {
    const continuar = tocarDepois || R.tocando;
    pararRelogio();
    t = Math.min(Math.max(0, t), Math.max(0, L.duracao - 1 / FPS));
    R.tPausa = t;
    const pulo = ++R.pulo;
    const F = Math.floor(t * FPS + 1e-6);
    atualizarUI(t, F);
    const idx = acharIdx(F);
    if (idx < 0) { for (const s of S) limparSlot(s); aviso(""); return; }
    const c = L.cenas[idx];
    const serve = (s) => s.idx === idx && s.versao === c.versao && s.modo === modoDe(c) && s.estado !== "vazio";
    if (!serve(atual)) {
      if (!serve(outra)) prepararSlot(outra, idx);
      const s = outra;
      aviso("preparando a cena " + c.id + "…");
      await s.promessa;
      if (pulo !== R.pulo) return;
      outra = atual; atual = s;
      limparSlot(outra);
    } else await atual.promessa;
    if (pulo !== R.pulo) return;
    mostrar(atual);
    await posicionarExato(atual, (F - c.ini) / FPS);
    if (pulo !== R.pulo) return;
    if (!R.esperando && atual.estado !== "erro") aviso("");
    prepararProxima();
    if (continuar) await iniciar(pulo);
  }

  async function iniciar(pulo) {
    if (!L || R.tocando) return;
    const F = Math.floor(R.tPausa * FPS + 1e-6), idx = acharIdx(F);
    if (idx >= 0 && atual.idx !== idx) return irPara(R.tPausa, { tocarDepois: true });
    audio.currentTime = R.tPausa + ATRASO;
    try { await audio.play(); }
    catch (e) { aviso("O navegador não deixou tocar o som: clique em ▶ de novo."); return; }
    if (pulo !== undefined && pulo !== R.pulo) { audio.pause(); return; }
    ancorar();
    R.tocando = true; R.esperando = false;
    if (atual.win) atual.win.__LT_TOCANDO = true;
    atual.ultimoF = null;
    novaMedida(atual);
    $("tocar").textContent = "❚❚";
    requestAnimationFrame(laco);
  }
  audio.addEventListener("playing", () => { if (R.tocando && !R.esperando) ancorar(); });
  audio.addEventListener("ended", () => { if (R.tocando) pausar(); });

  // ─── a interface ──────────────────────────────────────────────────────────────────────────────
  let ultimaPalavra = -2;
  function atualizarUI(t, F) {
    $("agulha").style.left = (100 * t / L.duracao) + "%";
    $("relogio").textContent = mmss(t) + " / " + mmss(L.duracao);
    const idx = acharIdx(F);
    $("cenaAtual").textContent = idx >= 0 ? L.cenas[idx].id + " · " + ((F - L.cenas[idx].ini) / FPS).toFixed(1) + " s da cena" : "—";
    // a fala: a palavra do momento acesa
    let lo = 0, hi = palavras.length - 1, i = -1;
    while (lo <= hi) { const mid = (lo + hi) >> 1; if (palavras[mid].start <= t) { i = mid; lo = mid + 1; } else hi = mid - 1; }
    if (i === ultimaPalavra) return;
    ultimaPalavra = i;
    const de = Math.max(0, i - 12), ate = Math.min(palavras.length, i + 14);
    $("fala").innerHTML = palavras.slice(de, ate).map((p, k) => (de + k === i && t <= p.end + 0.25 ? "<mark>" + esc(p.w) + "</mark>" : esc(p.w))).join(" ");
  }

  function desenharFaixa() {
    if (!L) return;
    const caixa = $("blocos"), filtro = $("soMudou").checked;
    if (caixa.children.length !== L.cenas.length) {
      caixa.innerHTML = L.cenas.map((c, i) => '<div class="bloco" data-i="' + i + '" style="left:' + (100 * c.ini / L.totalQuadros) +
        "%;width:" + (100 * c.n / L.totalQuadros) + '%"><span>' + esc(c.id) + "</span></div>").join("");
    }
    L.cenas.forEach((c, i) => {
      const el = caixa.children[i];
      const carregando = S.some((s) => s.idx === i && s.estado === "carregando");
      const errou = erros.has(c.id) || c.tipo === "falta" || !!c.erro;
      el.className = "bloco" + (c.visto === "atual" ? " vista" : "") + (c.abertos > 0 ? " comentada" : "") +
        (c.tipo === "mapa" && modoDe(c) !== "proxy" ? " rascunho" : "") + (errou ? " erro" : "") +
        (c.visto === "velho" ? " nova" : "") + (carregando ? " carregando" : "") + (filtro && !precisaOlho(c) ? " apagado" : "");
      el.title = c.id + " · " + mmss(c.ini / FPS) + "–" + mmss(c.fim / FPS) + " · " +
        (c.visto === "atual" ? "vista nesta versão" : c.visto === "velho" ? "nova versão para ver" : "não vista") +
        (c.abertos ? " · " + c.abertos + " comentário(s) aberto(s)" : "") +
        (c.tipo === "mapa" && modoDe(c) !== "proxy" ? " · mapa sem satélite" + (c.avisoRelevo ? " (relevo plano: anel e rótulos fora do lugar)" : "") : "") +
        (errou ? " · " + (erros.get(c.id) || c.erro) : "");
    });
    const r = L.resumo || {};
    const vistas = L.cenas.filter((c) => c.visto === "atual").length, abertos = L.cenas.reduce((p, c) => p + (c.abertos || 0), 0);
    $("resumo").textContent = L.cenas.length + " cenas · " + mmss(L.duracao) + " · vistas nesta versão: " + vistas +
      " · comentários abertos: " + abertos + (r.mapaRascunho ? " · " + r.mapaRascunho + " mapa(s) sem satélite" : "");
  }

  $("faixa").addEventListener("click", (e) => {
    const r = $("faixa").getBoundingClientRect();
    irPara(((e.clientX - r.left) / r.width) * L.duracao);
  });
  $("tocar").addEventListener("click", () => { if (R.tocando) pausar(); else iniciar(); });
  $("soMudou").addEventListener("change", desenharFaixa);
  window.addEventListener("resize", () => S.forEach(escalar));

  // ─── comentar (C) ─────────────────────────────────────────────────────────────────────────────
  let alvoComentario = null;
  function abrirCaixa() {
    if (!L) return;
    if (R.tocando) pausar();
    const t = R.tPausa, F = Math.floor(t * FPS + 1e-6), idx = acharIdx(F);
    if (idx < 0) { aviso("Aqui não há cena para comentar."); return; }
    const c = L.cenas[idx], tc = (F - c.ini) / FPS;
    alvoComentario = { cena: c.id, t: Math.round(tc * 10) / 10, tVideo: t, sha1: c.sha1 };
    $("ondeComentario").textContent = c.id + " · " + tc.toFixed(1) + " s da cena · vídeo " + mmss(t);
    $("estadoEnvio").textContent = "";
    $("caixa").showModal();
    $("texto").focus();
  }
  async function enviarComentario() {
    const txt = $("texto").value.trim();
    if (!txt || !alvoComentario) return;
    $("enviar").disabled = true; $("estadoEnvio").textContent = "enviando…";
    const r = await postar("/api/comentar", { ...alvoComentario, texto: txt }).catch(() => null);
    $("enviar").disabled = false;
    if (r && r.ok) { $("texto").value = ""; $("caixa").close(); aviso("Comentário na fila. O Claude responde aqui embaixo."); setTimeout(() => aviso(""), 3000); carregarComentarios(); verificarVersao(); }
    else $("estadoEnvio").textContent = "✗ " + ((r && r.corpo && r.corpo.erro) || "sem conexão com a linha do tempo; o texto continua aqui, tente de novo");
  }
  $("comentar").addEventListener("click", abrirCaixa);
  $("formComentario").addEventListener("submit", (e) => { e.preventDefault(); enviarComentario(); });
  $("cancelar").addEventListener("click", () => $("caixa").close());
  $("texto").addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); enviarComentario(); } });

  document.addEventListener("keydown", (e) => {
    if ($("caixa").open || e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === "TEXTAREA" || tag === "INPUT") return;
    if (e.key === "c" || e.key === "C") { e.preventDefault(); abrirCaixa(); }
    else if (e.key === " " && tag !== "BUTTON") { e.preventDefault(); if (R.tocando) pausar(); else iniciar(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); irPara(agora() + 5); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); irPara(agora() - 5); }
  });

  // ─── as respostas do Claude ────────────────────────────────────────────────────────────────────
  let ultimaLista = "";
  async function carregarComentarios() {
    try {
      const r = await fetch("/api/comentarios", { cache: "no-store" });
      if (!r.ok) return;
      const txt = await r.text();
      if (txt === ultimaLista) return;
      ultimaLista = txt;
      const itens = JSON.parse(txt).slice().reverse();
      $("lista").innerHTML = itens.length ? itens.map((x) => '<li data-cena="' + esc(x.cena) + '" data-t="' + (x.t == null ? 0 : x.t) + '"><span class="st' +
        (x.aberta ? "" : " fechada") + '">' + esc(x.status) + "</span><b>" + esc(x.cena) + (x.t == null ? "" : " @" + Number(x.t).toFixed(1) + "s") + "</b> " +
        esc(x.texto) + (x.nota ? '<span class="nota">' + esc(x.nota) + "</span>" : "") + "</li>").join("")
        : '<li class="vazia">Nenhum comentário ainda. Aperte C em qualquer ponto do vídeo.</li>';
    } catch (e) {}
  }
  $("lista").addEventListener("click", (e) => {
    const li = e.target.closest("li[data-cena]"); if (!li || !L) return;
    const c = L.cenas.find((x) => x.id === li.dataset.cena); if (!c) return;
    irPara(c.ini / FPS + Number(li.dataset.t || 0));
  });

  // ─── a versão: a página pergunta a cada 2 s ────────────────────────────────────────────────────
  async function verificarVersao() {
    let v;
    try { const r = await fetch("/api/versao", { cache: "no-store" }); if (!r.ok) return; v = await r.json(); } catch (e) { return; }
    if (v.assinatura !== L.assinatura) {
      // O espelho mudou (cenas, janelas): a página inteira se refaz.
      if (R.tocando) pausar();
      aviso("O espelho mudou: recarregando a linha do tempo…");
      setTimeout(() => location.reload(), 800);
      return;
    }
    const porId = new Map(v.cenas.map((c) => [c.id, c]));
    let mudouAtual = false, mudouOutra = false;
    L.cenas.forEach((c, i) => {
      const n = porId.get(c.id); if (!n) return;
      // A versão do servidor muda com o HTML, com um arquivo citado (a foto trocada com a cena já carregada), com o modo
      // do mapa e com o clipe do proxy: a cena se recarrega e a contagem do visto recomeça.
      const versao = c.versao !== n.versao || c.sha1 !== n.sha1 || c.proxy !== n.proxy || c.modoMapa !== n.modoMapa;
      if (versao) { erros.delete(c.id); cobertura.delete(c.id); }
      Object.assign(c, n);
      if (versao && atual.idx === i) mudouAtual = true;
      if (versao && outra.idx === i) mudouOutra = true;
    });
    L.resumo = v.resumo;
    desenharFaixa();
    if (mudouOutra) prepararSlot(outra, outra.idx);
    if (mudouAtual) irPara(agora(), { tocarDepois: R.tocando });   // a cena atual se recarrega sozinha
  }

  // ─── partida ─────────────────────────────────────────────────────────────────────────────────
  async function partida() {
    try {
      const r = await fetch("/api/linha", { cache: "no-store" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      L = await r.json();
    } catch (e) { aviso("Não consegui ler a linha do projeto (" + e.message + "). O servidor está aberto?", true); return; }
    if (L.words) { try { palavras = await (await fetch(L.words)).json(); if (!Array.isArray(palavras)) palavras = palavras.words || []; } catch (e) { palavras = []; } }
    audio.src = L.narracao;
    desenharFaixa();
    atualizarUI(0, 0);
    mandarMedida({ tipo: "sessao", dpr: devicePixelRatio, palcoPx: $("palco").clientWidth, atrasoMs: ATRASO * 1000,
      planoProxy: [...PLANO_PROXY], planoPausa: [...PLANO_PAUSA], navegador: navigator.userAgent.slice(0, 200) });
    carregarComentarios();
    setInterval(carregarComentarios, 4000);
    setInterval(verificarVersao, 2000);
    const ini = Number(qs.get("t"));
    irPara(Number.isFinite(ini) && ini > 0 ? ini : 0);
  }
  partida();
})();
