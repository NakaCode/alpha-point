// SI model; pixels exist only in draw(). No clock, external state or random source.
export const meta = {
  id: 'dinamica-objetos', title: 'Peso, queda e impacto', duration: 8,
  summary: 'Duas esferas caem da mesma altura. A massa não altera a queda sem ar; a restituição altera o retorno depois do contato.',
  limitations: 'Modelo vertical idealizado, sem ar, rotação, deformação ou colisões entre esferas. Os coeficientes são escolhas de demonstração, não medições de borracha ou madeira reais.',
  controls: [
    {key: 'comparacao', label: 'Comparar', type: 'select', default: 'materiais', options: [{value: 'materiais', label: 'Materiais distintos'}, {value: 'massas', label: 'Massas distintas'}]},
    {key: 'material', label: 'Material na comparação de massa', type: 'select', default: 'borracha', options: [{value: 'borracha', label: 'Borracha idealizada'}, {value: 'madeira', label: 'Madeira idealizada'}]}
  ]
};

export const parameters = Object.freeze({
  gravity: 9.81, radius: 0.27, dropHeight: 2.6, restSpeed: 0.09,
  materials: Object.freeze({borracha: Object.freeze({restitution: 0.78}), madeira: Object.freeze({restitution: 0.34})}),
  units: Object.freeze({length: 'm', time: 's', mass: 'kg', velocity: 'm/s', energy: 'J'})
});

// Exact constant-acceleration arcs joined at their analytic contact instants.
// height = distance between the sphere's bottom and the horizontal plane.
export function ballAt(t, restitution, mass = 1) {
  if (!Number.isFinite(t) || !Number.isFinite(restitution) || restitution < 0 || restitution >= 1 || !Number.isFinite(mass) || mass <= 0) throw new RangeError('Tempo, massa ou restituição inválidos.');
  t = Math.max(0, t);
  const {gravity: g, dropHeight: h, radius, restSpeed} = parameters;
  const hit0 = Math.sqrt(2 * h / g), incoming0 = g * hit0;
  let start = 0, height = h, velocity = 0, bounce = 0, nextImpact = hit0;
  const events = [];
  if (t < hit0) {
    height = h - 0.5 * g * t * t;
    velocity = -g * t;
  } else {
    let incoming = incoming0, outgoing = incoming * restitution;
    start = hit0;
    while (true) {
      const resting = outgoing < restSpeed;
      events.push({time: start, incomingVelocity: -incoming, outgoingVelocity: resting ? 0 : outgoing, energyBefore: 0.5 * mass * incoming * incoming, energyAfter: resting ? 0 : 0.5 * mass * outgoing * outgoing, resting});
      bounce++;
      if (resting) {
        height = 0; velocity = 0; nextImpact = null;
        break;
      }
      const flight = 2 * outgoing / g;
      if (t < start + flight) {
        const tau = t - start;
        height = Math.max(0, outgoing * tau - 0.5 * g * tau * tau);
        velocity = outgoing - g * tau;
        nextImpact = start + flight;
        break;
      }
      start += flight; incoming = outgoing; outgoing *= restitution;
      if (bounce > 10000) throw new Error('Limite de eventos excedido.');
    }
  }
  return {height, centerHeight: radius + height, velocity, mass, radius, restitution, bounce, resting: nextImpact === null, nextImpact, events, energy: 0.5 * mass * velocity * velocity + mass * g * height};
}

export function sample(t, options = {}) {
  if (!Number.isFinite(t)) throw new RangeError('O tempo deve ser finito.');
  const comparacao = options.comparacao ?? 'materiais';
  const material = options.material ?? 'borracha';
  if (!['materiais', 'massas'].includes(comparacao) || !Object.hasOwn(parameters.materials, material)) throw new RangeError('Comparação ou material desconhecido.');
  const time = Math.max(0, t);
  const kinds = comparacao === 'massas' ? [material, material] : ['borracha', 'madeira'];
  const masses = comparacao === 'massas' ? [1, 5] : [1, 1];
  const balls = kinds.map((kind, i) => ({...ballAt(time, parameters.materials[kind].restitution, masses[i]), material: kind, id: i, x: i === 0 ? 306 : 654}));
  return {time, comparacao, material, gravity: parameters.gravity, balls, bounds: {x: 95, y: 86, width: 770, height: 369}, units: {...parameters.units}};
}

function disk(ctx, x, y, r, fill) {ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = fill; ctx.fill();}
function withAlpha(ctx, alpha, fn) {ctx.save(); ctx.globalAlpha *= alpha; fn(); ctx.restore();}

export function draw(ctx, state, theme, debug = false) {
  const {superficie, papel, tinta, contorno, protagonista, contraparte, risco} = theme;
  const ground = 428, scale = 109, floorX = 108, floorW = 744;
  ctx.save();
  // A single shallow plinth establishes an unambiguous contact surface.
  ctx.fillStyle = superficie; ctx.fillRect(floorX, ground + 2, floorW, 24);
  ctx.fillStyle = contorno; ctx.fillRect(floorX, ground, floorW, 3);
  withAlpha(ctx, 0.18, () => {ctx.fillStyle = papel; ctx.fillRect(floorX, ground, floorW, 1);});
  for (const b of state.balls) {
    const x = b.x, y = ground - b.centerHeight * scale, r = b.radius * scale;
    const accent = b.id === 0 ? protagonista : contraparte;
    const altitude = Math.min(1, b.height / parameters.dropHeight);
    // The contact shadow tightens as the physical object approaches the plane.
    withAlpha(ctx, 0.16 + 0.26 * (1 - altitude), () => {
      ctx.fillStyle = tinta; ctx.beginPath(); ctx.ellipse(x, ground - 1, r * (0.86 + altitude * 0.65), 4 + altitude * 4, 0, 0, Math.PI * 2); ctx.fill();
    });
    ctx.save();
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.clip();
    disk(ctx, x, y, r, accent);
    withAlpha(ctx, 0.24, () => disk(ctx, x + r * 0.35, y + r * 0.40, r * 1.04, tinta));
    withAlpha(ctx, 0.20, () => {
      ctx.beginPath(); ctx.ellipse(x - r * 0.28, y - r * 0.32, r * 0.50, r * 0.29, -0.65, 0, Math.PI * 2); ctx.fillStyle = papel; ctx.fill();
    });
    ctx.strokeStyle = papel; ctx.lineWidth = 1.7;
    withAlpha(ctx, b.material === 'borracha' ? 0.32 : 0.25, () => {
      if (b.material === 'borracha') {
        ctx.beginPath(); ctx.ellipse(x, y, r * 0.40, r * 1.03, -0.35, 0, Math.PI * 2); ctx.stroke();
      } else {
        // Sparse grain is bound to the material's local coordinates.
        for (const offset of [-0.31, 0.12, 0.44]) {
          ctx.beginPath(); ctx.moveTo(x - r, y + r * offset); ctx.bezierCurveTo(x - r * 0.30, y + r * (offset - 0.22), x + r * 0.20, y + r * (offset + 0.12), x + r, y + r * (offset - 0.05)); ctx.stroke();
        }
      }
    });
    ctx.restore();
    ctx.strokeStyle = contorno; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
    if (debug) {
      withAlpha(ctx, 0.44, () => {ctx.setLineDash([3, 6]); ctx.strokeStyle = contorno; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x, 90); ctx.lineTo(x, ground); ctx.stroke();});
      disk(ctx, x, y, 2.2, risco);
      ctx.strokeStyle = risco; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x + r + 15, y); ctx.lineTo(x + r + 15, y - b.velocity * 9); ctx.stroke();
      withAlpha(ctx, 0.7, () => {ctx.strokeStyle = papel; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x - 9, ground); ctx.lineTo(x + 9, ground); ctx.stroke();});
    }
  }
  ctx.restore();
}
