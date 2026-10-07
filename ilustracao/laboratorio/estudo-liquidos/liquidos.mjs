// Linear, constant-volume tank study. No internal clock, media or channel palette.
export const meta = {
  id: 'liquidos', title: 'Água, inércia e assentamento', duration: 18,
  summary: 'Um tanque acelera e freia; a superfície responde à aceleração e perde energia gradualmente.',
  limitations: 'Aproximação 2D linear de pequena amplitude, com três modos e amortecimento de bancada. Não simula derramamento, espuma, turbulência, capilaridade ou empuxo de objetos.',
  controls: [
    {key:'fill',label:'Enchimento da bancada',type:'range',min:0.35,max:0.70,step:0.05,default:0.55},
    {key:'damping',label:'Amortecimento da bancada',type:'range',min:0.12,max:0.55,step:0.01,default:0.23}
  ]
};

const G = 9.81, L = 3.4, H = 1.8, DEPTH = 0.5;
const N = [1,3,5], SCALE = 122, BOTTOM = 410;
const cache = new Map();
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));

function checked(value, fallback, lo, hi, name) {
  const v=value===undefined?fallback:Number(value);
  if(!Number.isFinite(v)||v<lo||v>hi) throw new RangeError(`${name}: esperado ${lo}…${hi}`);
  return v;
}

// Quintic translation has continuous position, velocity and acceleration.
function stroke(t,start,duration,displacement) {
  const u=clamp((t-start)/duration,0,1);
  const interior=t>start&&t<start+duration;
  return {
    x:displacement*(10*u**3-15*u**4+6*u**5),
    v:interior?displacement*(30*u**2-60*u**3+30*u**4)/duration:0,
    a:interior?displacement*(60*u-180*u**2+120*u**3)/duration**2:0
  };
}

export function drive(t) {
  const a=stroke(t,1.1,2.7,0.6), b=stroke(t,5.1,2.7,-0.3);
  return {x:-0.3+a.x+b.x,v:a.v+b.v,a:a.a+b.a};
}

function derivative(t,y,p) {
  const a=drive(t).a, out=[];
  for(let i=0;i<N.length;i++) {
    const n=N[i], k=n*Math.PI/L;
    const w2=G*k*Math.tanh(k*p.depth), w=Math.sqrt(w2);
    // Projection of hydrostatic eta=-a*x/g onto odd sine modes.
    const equilibrium=-4*L*a*Math.sin(n*Math.PI/2)/(G*n*n*Math.PI*Math.PI);
    out.push(y[2*i+1],w2*(equilibrium-y[2*i])-2*p.damping*w*y[2*i+1]);
  }
  return out;
}

function rk4(t,y,h,p) {
  const a=derivative(t,y,p);
  const b=derivative(t+h/2,y.map((v,i)=>v+h*a[i]/2),p);
  const c=derivative(t+h/2,y.map((v,i)=>v+h*b[i]/2),p);
  const d=derivative(t+h,y.map((v,i)=>v+h*c[i]),p);
  return y.map((v,i)=>v+h*(a[i]+2*b[i]+2*c[i]+d[i])/6);
}

function history(p) {
  const key=[p.fill,p.damping,p.step].join(':');
  if(cache.has(key)) return cache.get(key);
  const result=[Array(6).fill(0)], count=Math.ceil(meta.duration/p.step);
  for(let i=0;i<count;i++) result.push(rk4(i*p.step,result[i],p.step,p));
  if(cache.size>=8) cache.delete(cache.keys().next().value);
  cache.set(key,result);
  return result;
}

export function sample(t, options={}) {
  if(!Number.isFinite(t)) throw new TypeError('t precisa ser um número finito em segundos');
  const fill=checked(options.fill,0.55,0.35,0.70,'fill');
  const damping=checked(options.damping,0.23,0.12,0.55,'damping');
  const step=checked(options._step,1/240,1/960,1/60,'_step');
  const time=clamp(t,0,meta.duration), p={fill,damping,step,depth:H*fill};
  const frames=history(p), frame=Math.min(frames.length-1,Math.floor(time/step));
  const rest=time-frame*step;
  const modes=rest>1e-13?rk4(frame*step,frames[frame],rest,p):frames[frame].slice();
  const surface=Array.from({length:121},(_,i)=>{
    const x=-L/2+L*i/120;
    const eta=N.reduce((sum,n,j)=>sum+modes[2*j]*Math.sin(n*Math.PI*x/L),0);
    return {x,height:p.depth+eta};
  });
  const area=surface.slice(1).reduce((sum,s,i)=>sum+(s.x-surface[i].x)*(s.height+surface[i].height)/2,0);
  const kinematics=drive(time);
  const energy=modes.reduce((sum,v,i)=>{
    if(i%2) return sum;
    const n=N[i/2], k=n*Math.PI/L, w2=G*k*Math.tanh(k*p.depth);
    return sum+(modes[i+1]**2+w2*v*v)/2;
  },0);
  return {
    time,options:{fill,damping}, model:'linear-2d-3-modes',
    tank:{width:L,height:H,depth:DEPTH}, kinematics,
    modes, surface, area, volume:area*DEPTH, targetVolume:L*p.depth*DEPTH,
    meanHeight:p.depth, maxDisplacement:Math.max(...surface.map(s=>Math.abs(s.height-p.depth))),
    minHeight:Math.min(...surface.map(s=>s.height)),maxHeight:Math.max(...surface.map(s=>s.height)),
    energy,phase:time<1.1?'repouso':time<3.8?'deslocamento':time<5.1?'oscilação':time<7.8?'retorno':'assentamento'
  };
}

function polygon(ctx,points,color,alpha=1,stroke=null,width=1) {
  ctx.save();ctx.globalAlpha=alpha;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();
  if(color){ctx.fillStyle=color;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke();}ctx.restore();
}
function line(ctx,points,color,width=1,alpha=1) {
  ctx.save();ctx.globalAlpha=alpha;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineJoin='round';ctx.lineCap='round';ctx.stroke();ctx.restore();
}

export function draw(ctx,s,theme,debug=false) {
  const {papel,tinta,contorno,protagonista,contraparte,superficie}=theme;
  const x=480+s.kinematics.x*SCALE, w=L*SCALE,h=H*SCALE;
  const left=x-w/2,right=x+w/2,top=BOTTOM-h,dx=36,dy=-25;
  const front=s.surface.map(p=>[x+p.x*SCALE,BOTTOM-p.height*SCALE]);
  const back=front.map(p=>[p[0]+dx,p[1]+dy]);
  ctx.save();
  // One floor and a small mobile cradle make tank motion legible.
  line(ctx,[[102,446],[872,446]],contorno,1.5,0.36);
  ctx.save();ctx.fillStyle=tinta;ctx.globalAlpha=0.17;ctx.beginPath();ctx.ellipse(x+18,439,239,9,0,0,Math.PI*2);ctx.fill();ctx.restore();
  for(const offset of [-145,145]) {
    ctx.fillStyle=contorno;ctx.beginPath();ctx.arc(x+offset,438,8,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=superficie;ctx.beginPath();ctx.arc(x+offset,438,3,0,Math.PI*2);ctx.fill();
  }
  polygon(ctx,[[left-14,BOTTOM+5],[right+14,BOTTOM+5],[right+50,BOTTOM-20],[left+22,BOTTOM-20]],contraparte,1);
  polygon(ctx,[[left-14,BOTTOM+5],[right+14,BOTTOM+5],[right+14,BOTTOM+15],[left-14,BOTTOM+15]],contorno,1);
  // Far pane is low contrast; the water is one volume extruded through constant depth.
  polygon(ctx,[[left+dx,top+dy],[right+dx,top+dy],[right+dx,BOTTOM+dy],[left+dx,BOTTOM+dy]],papel,0.045,contorno,1);
  polygon(ctx,[[right,top],[right+dx,top+dy],[right+dx,BOTTOM+dy],[right,BOTTOM]],papel,0.065);
  line(ctx,[[left+dx,top+dy],[left+dx,BOTTOM+dy],[right+dx,BOTTOM+dy]],contorno,1.2,0.42);
  polygon(ctx,[front[120],back[120],[right+dx,BOTTOM+dy],[right,BOTTOM]],protagonista,0.67);
  polygon(ctx,[...front,[right,BOTTOM],[left,BOTTOM]],protagonista,0.82);
  polygon(ctx,[...front,...back.slice().reverse()],protagonista,1);
  polygon(ctx,[...front,...back.slice().reverse()],papel,0.16);
  // Near bottom band clarifies thickness without decorative stripes or bubbles.
  polygon(ctx,[[left,BOTTOM-7],[right,BOTTOM-7],[right,BOTTOM],[left,BOTTOM]],tinta,0.08);
  line(ctx,back,papel,1.1,0.38);
  line(ctx,front,papel,2.1,0.88);
  polygon(ctx,[[left,top],[right,top],[right,BOTTOM],[left,BOTTOM]],papel,0.025);
  // Container perimeter and rim remain in front; water never masks the boundary.
  line(ctx,[[left,top],[left,BOTTOM],[right,BOTTOM],[right,top]],papel,3,0.78);
  line(ctx,[[left,top],[left+dx,top+dy],[right+dx,top+dy],[right,top],[left,top]],papel,2.1,0.80);
  line(ctx,[[right+dx,top+dy],[right+dx,BOTTOM+dy],[right,BOTTOM]],papel,1.6,0.60);
  // Two broad specular edges, anchored to glass; no per-frame texture noise.
  line(ctx,[[left+8,top+13],[left+8,top+48]],papel,2,0.35);
  line(ctx,[[right-8,BOTTOM-14],[right-8,BOTTOM-46]],papel,2,0.22);
  if(debug) {
    const y=BOTTOM-s.meanHeight*SCALE;
    ctx.save();ctx.setLineDash([6,6]);line(ctx,[[left,y],[right,y]],theme.risco,1,0.7);ctx.restore();
    const arrow=clamp(s.kinematics.a*48,-96,96);
    line(ctx,[[x,top-60],[x+arrow,top-60]],theme.risco,3,0.9);
    if(Math.abs(arrow)>2) {
      const sign=Math.sign(arrow);polygon(ctx,[[x+arrow,top-60],[x+arrow-sign*8,top-65],[x+arrow-sign*8,top-55]],theme.risco);
    }
  }
  ctx.restore();
}
