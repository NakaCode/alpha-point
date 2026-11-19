// As peças comuns aos banners de pontos (D, E e F; 19/11/2026): a marca (a agulha, o nome e a frase, como em
// marca/logo/agulha/banner.html), a projeção ortográfica, o grão e os lugares dos vídeos publicados.
window.BANNER = (() => {
  const NORTE = "0,-560 171.78,-79.02 80.98,-59.72 0,-286.46 -94.28,-22.47 -200,0";
  const SUL = "200,0 0,340 -155.55,75.57";
  const H = 900, CY = -110, RAZAO = 0.4444444444444444;
  const NS = "http://www.w3.org/2000/svg";

  // A marca no <svg id="marca">. alinhar "meio": x é o centro do conjunto; "esquerda": x é o começo da agulha.
  // Espera as duas fontes carregarem antes de medir: medida com a fonte de reserva tira o conjunto do centro.
  async function marca({ x, y, nome = 180, frase = 50, alinhar = "meio", opFrase = 0.86 }) {
    await Promise.all([document.fonts.load(`800 ${nome}px "MarcaSec"`), document.fonts.load(`500 ${frase}px "Marca"`)]);
    const svg = document.getElementById("marca");
    const cv = document.createElement("canvas").getContext("2d");
    cv.font = `800 ${nome}px "MarcaSec"`;
    const capN = cv.measureText("H").actualBoundingBoxAscent;
    cv.font = `500 ${frase}px "Marca"`;
    const capF = cv.measureText("H").actualBoundingBoxAscent;
    const entre = 0.42 * capN, bloco = capN + entre + capF, yTopo = y - bloco / 2;
    const ybN = yTopo + capN, ybF = ybN + entre + capF;
    const altAg = 1.3 * bloco, largAg = altAg * RAZAO, vao = 0.75 * capN;
    const g = document.createElementNS(NS, "g");
    g.setAttribute("filter", "url(#sombra)");
    const s = altAg / H;
    g.innerHTML =
      `<g transform="translate(${largAg / 2} ${y}) scale(${s}) translate(0 ${-CY})"><polygon points="${NORTE}" fill="#F5A524"/>` +
      `<polygon points="${SUL}" fill="#F4F1EA"/></g>` +
      `<text x="${largAg + vao}" y="${ybN}" fill="#F4F1EA" style="font-family:'MarcaSec';font-weight:800;font-size:${nome}px;letter-spacing:-0.01em">ALPHA POINT</text>` +
      `<text x="${largAg + vao}" y="${ybF}" fill="#F4F1EA" fill-opacity="${opFrase}" style="font-family:'Marca';font-weight:500;font-size:${frase}px">Geography and geopolitics, on the map.</text>`;
    svg.appendChild(g);
    const [tn, tf] = g.querySelectorAll("text");
    const total = largAg + vao + Math.max(tn.getComputedTextLength(), tf.getComputedTextLength());
    const x0 = alinhar === "meio" ? x - total / 2 : x;
    g.setAttribute("transform", `translate(${x0.toFixed(2)} 0)`);
    return { x0, x1: x0 + total, y0: y - altAg / 2, y1: y + altAg / 2, total };
  }

  function aleatorio(semente) {
    let s = semente >>> 0;
    return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  }

  // grão fino sobre o canvas (o texto, no SVG, fica limpo)
  function grao(ctx, w, h, forca = 0.035, semente = 7) {
    const img = ctx.getImageData(0, 0, w, h), d = img.data, r = aleatorio(semente);
    for (let i = 0; i < d.length; i += 4) {
      const n = (r() - 0.5) * 255 * forca * 2;
      d[i] += n; d[i + 1] += n; d[i + 2] += n;
    }
    ctx.putImageData(img, 0, 0);
  }

  // ortográfica: o centro da vista em (l0, f0); devolve x, y no círculo unitário (y para cima) e o cosseno até o centro
  function orto(l0, f0) {
    const r = Math.PI / 180, sf0 = Math.sin(f0 * r), cf0 = Math.cos(f0 * r);
    return (lon, lat) => {
      const l = (lon - l0) * r, f = lat * r, cf = Math.cos(f), sf = Math.sin(f), cl = Math.cos(l);
      return { x: cf * Math.sin(l), y: cf0 * sf - sf0 * cf * cl, cosc: sf0 * sf + cf0 * cf * cl };
    };
  }

  // os lugares dos vídeos publicados (o Juneau foi arquivado; o Cassino parou antes de publicar)
  const LUGARES = [
    { video: "los-angeles", lon: -118.24, lat: 34.05 },
    { video: "zona-do-canal", lon: -79.68, lat: 9.08 },
    { video: "peru-agua", lon: -77.04, lat: -12.05 },
    { video: "atlantico-fundo", lon: -66.5, lat: 19.7 },
    { video: "big-sur", lon: -121.81, lat: 36.27 },
    { video: "rio-columbia", lon: -117.9, lat: 49.8 },
  ];

  // um lugar aceso: o miolo creme, o halo e um anel fino
  function lugar(ctx, X, Y, k = 1) {
    const halo = ctx.createRadialGradient(X, Y, 0, X, Y, 30 * k);
    halo.addColorStop(0, "rgba(244,241,234,0.55)");
    halo.addColorStop(0.35, "rgba(175,216,246,0.22)");
    halo.addColorStop(1, "rgba(175,216,246,0)");
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(X, Y, 30 * k, 0, 2 * Math.PI); ctx.fill();
    ctx.strokeStyle = "rgba(175,216,246,0.55)";
    ctx.lineWidth = 1.6 * k;
    ctx.beginPath(); ctx.arc(X, Y, 13 * k, 0, 2 * Math.PI); ctx.stroke();
    ctx.fillStyle = "#F4F1EA";
    ctx.beginPath(); ctx.arc(X, Y, 4.2 * k, 0, 2 * Math.PI); ctx.fill();
  }

  return { marca, aleatorio, grao, orto, LUGARES, lugar };
})();
