// Two deliberately bounded demonstrations. No N-body, GR, media, or internal clock.
export const meta={
  id:'espaco',title:'Órbitas e rotação diferencial',duration:12,
  summary:'Uma órbita excêntrica conserva áreas e momento angular; um disco estelar mostra anéis com velocidades angulares diferentes.',
  limitations:'Unidades normalizadas e tempo comprimido. Corpos ampliados para leitura. Galáxia é um disco de partículas de teste em potencial fixo, com braços iniciais impostos; não simula braços reais, matéria escura medida, buracos negros ou relatividade.',
  controls:[{key:'modelo',label:'Modelo de bancada',type:'select',default:'orbitas',options:[{value:'orbitas',label:'Órbita de Kepler'},{value:'galaxia',label:'Disco e rotação diferencial'}]}]
};

const TAU=Math.PI*2, ECC=0.64, A=1, PERIOD=12, MEAN=TAU/PERIOD;
const MU=MEAN**2*A**3, B=A*Math.sqrt(1-ECC**2), CORE=0.18,V0=0.32;
const ORBIT_SCALE=260,GALAXY_SCALE=340, CY=252;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

export function orbitAt(t) {
  const m=MEAN*t, turns=Math.floor((m+Math.PI)/TAU), reduced=m-turns*TAU;
  let e=reduced;
  for(let i=0;i<12;i++)e-=(e-ECC*Math.sin(e)-reduced)/(1-ECC*Math.cos(e));
  const rate=MEAN/(1-ECC*Math.cos(e));
  const x=A*(Math.cos(e)-ECC),y=B*Math.sin(e),r=Math.hypot(x,y);
  const vx=-A*Math.sin(e)*rate,vy=B*Math.cos(e)*rate;
  return {x,y,vx,vy,r,ax:-MU*x/r**3,ay:-MU*y/r**3,
    eccentricAnomaly:e+turns*TAU,meanAnomaly:m,
    angularMomentum:x*vy-y*vx,specificEnergy:(vx*vx+vy*vy)/2-MU/r,
    sweptArea:A*B*(m)/2,a:A,b:B,eccentricity:ECC,mu:MU,period:PERIOD};
}

function seeded(seed) {
  let x=seed>>>0;
  return ()=>{x+=0x6D2B79F5;let n=x;n=Math.imul(n^(n>>>15),n|1);n^=n+Math.imul(n^(n>>>7),n|61);return ((n^(n>>>14))>>>0)/4294967296;};
}
const random=seeded(3910026);
const initialStars=Array.from({length:480},(_,i)=>{
  const arm=i%2,r=0.075+0.925*Math.sqrt(random());
  const theta=arm*Math.PI+Math.log(r/0.075)*1.7+(random()-0.5)*0.32;
  return {id:i,r,theta,size:0.65+random()*1.05,alpha:0.25+random()*0.65,arm};
});
const field=Array.from({length:45},()=>({x:90+random()*780,y:55+random()*394,size:0.5+random()*0.6,alpha:0.08+random()*0.10}));
const bulge=Array.from({length:90},()=>{
  const angle=random()*TAU,r=Math.sqrt(random())*0.16;
  return {r,angle,size:0.6+random()*1.0,alpha:0.15+random()*0.32};
});

export function circularAt(r,theta0,t) {
  const omega=V0/Math.sqrt(r*r+CORE*CORE),theta=theta0+omega*t;
  const x=r*Math.cos(theta),y=r*Math.sin(theta),vx=-omega*y,vy=omega*x;
  return {r,theta,omega,x,y,vx,vy,ax:-omega*omega*x,ay:-omega*omega*y,
    angularMomentum:r*r*omega,specificEnergy:(vx*vx+vy*vy)/2+V0*V0*Math.log(r*r+CORE*CORE)/2};
}

export function sample(t,options={}) {
  if(!Number.isFinite(t))throw new TypeError('t precisa ser finito em segundos');
  const time=clamp(t,0,12),modelo=options.modelo===undefined?'orbitas':options.modelo;
  if(!['orbitas','galaxia'].includes(modelo))throw new RangeError('modelo deve ser orbitas ou galaxia');
  if(modelo==='orbitas') {
    const body=orbitAt(time),trail=Array.from({length:41},(_,i)=>orbitAt(time-1.5+i*1.5/40));
    const sectors=[0,PERIOD/2].map(start=>Array.from({length:41},(_,i)=>orbitAt(start+i*0.6/40)));
    return {time,options:{modelo},model:'kepler-two-body-test-particle',body,trail,sectors,
      marks:Array.from({length:24},(_,i)=>orbitAt(i*PERIOD/24)),
      focus:{x:480+ECC*ORBIT_SCALE,y:CY},bounds:{left:208,right:752,top:40.2,bottom:463.8},
      note:'Áreas de dois setores com o mesmo intervalo de 0,6 s; unidades normalizadas e corpos ampliados.'};
  }
  const stars=initialStars.map(star=>({...star,...circularAt(star.r,star.theta,time)}));
  const tracers=[{r:0.28,theta:0.3},{r:0.83,theta:0.3}].map((p,i)=>({id:i,...circularAt(p.r,p.theta,time),trail:Array.from({length:30},(_,j)=>circularAt(p.r,p.theta,time-0.8+j*0.8/29))}));
  return {time,options:{modelo},model:'axisymmetric-fixed-potential-test-particles',stars,tracers,
    potential:{type:'logarithmic-cored',v0:V0,core:CORE},bounds:{left:127,right:833,top:51,bottom:453},
    note:'Braços iniciais impostos, enrolados pela rotação diferencial; não é uma simulação da formação de galáxias.'};
}

function dot(ctx,x,y,r,color,alpha=1){ctx.save();ctx.globalAlpha=alpha;ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore();}
function path(ctx,points,color,width=1,alpha=1,close=false,fill=false){ctx.save();ctx.globalAlpha=alpha;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));if(close)ctx.closePath();ctx.lineJoin='round';ctx.lineCap='round';if(fill){ctx.fillStyle=color;ctx.fill();}else{ctx.lineWidth=width;ctx.strokeStyle=color;ctx.stroke();}ctx.restore();}
function projected(p){const a=-0.11,u=p.x*GALAXY_SCALE,v=p.y*GALAXY_SCALE*0.54;return [480+u*Math.cos(a)-v*Math.sin(a),CY+u*Math.sin(a)+v*Math.cos(a)];}

export function draw(ctx,s,theme,debug=false) {
  ctx.save();
  for(const star of field)dot(ctx,star.x,star.y,star.size,theme.papel,star.alpha);
  if(s.options.modelo==='orbitas') {
    const f=s.focus,project=p=>[f.x+p.x*ORBIT_SCALE,f.y-p.y*ORBIT_SCALE];
    const ellipse=Array.from({length:181},(_,i)=>project(orbitAt(i*PERIOD/180)));
    path(ctx,ellipse,theme.contorno,1.35,0.75,true);
    s.sectors.forEach((sector,i)=>{const polygon=[[f.x,f.y],...sector.map(project)];path(ctx,polygon,i?theme.contraparte:theme.protagonista,1,0.16,true,true);path(ctx,[[f.x,f.y],project(sector[0])],theme.contorno,1,0.45);path(ctx,[[f.x,f.y],project(sector.at(-1))],theme.contorno,1,0.45);});
    for(const p of s.marks){const [x,y]=project(p);dot(ctx,x,y,2.2,theme.papel,0.33);}
    for(let i=1;i<s.trail.length;i++)path(ctx,[project(s.trail[i-1]),project(s.trail[i])],theme.protagonista,3,0.1+0.75*i/s.trail.length);
    dot(ctx,f.x,f.y,30,theme.protagonista,0.05);dot(ctx,f.x,f.y,23,theme.protagonista,1);dot(ctx,f.x-7,f.y-8,6,theme.papel,0.16);
    const [x,y]=project(s.body);
    dot(ctx,x,y,12,theme.papel,1);dot(ctx,x+3,y+2,8,theme.contraparte,0.52);dot(ctx,x-4,y-4,2,theme.papel,1);
    if(debug){path(ctx,[[f.x,f.y],[x,y]],theme.risco,1,0.6);path(ctx,[[x,y],[x+s.body.vx*37,y-s.body.vy*37]],theme.protagonista,2,0.9);}
  } else {
    // Uniform viewing transform: the tilt is an explicit projection, never a physical radius change.
    for(const r of [0.28,0.83]) {
      const ring=Array.from({length:121},(_,i)=>projected({x:r*Math.cos(i*TAU/120),y:r*Math.sin(i*TAU/120)}));
      path(ctx,ring,theme.contorno,1,0.22,true);
    }
    // Draw only local stellar concentrations. There is no rigid spinning galaxy plate.
    for(const star of s.stars){const [x,y]=projected(star);dot(ctx,x,y,star.size*2.6,star.arm?theme.contraparte:theme.protagonista,star.alpha*0.055);}
    for(const p of bulge){const [x,y]=projected({x:p.r*Math.cos(p.angle),y:p.r*Math.sin(p.angle)});dot(ctx,x,y,p.size,theme.papel,p.alpha);}
    for(const star of s.stars){const [x,y]=projected(star);dot(ctx,x,y,star.size,star.arm?theme.papel:theme.protagonista,star.alpha);}
    for(const tracer of s.tracers){const color=tracer.id?theme.contraparte:theme.protagonista;for(let j=1;j<tracer.trail.length;j++)path(ctx,[projected(tracer.trail[j-1]),projected(tracer.trail[j])],color,2,0.07+0.5*j/tracer.trail.length);const [x,y]=projected(tracer);dot(ctx,x,y,5.5,color,1);dot(ctx,x,y,2.2,theme.papel,0.92);if(debug)path(ctx,[[480,CY],[x,y]],theme.risco,1,0.3);}
    dot(ctx,480,CY,3.2,theme.papel,0.85);
  }
  ctx.restore();
}
