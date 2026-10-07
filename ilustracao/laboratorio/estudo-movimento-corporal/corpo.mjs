/** Reconstrução cinemática ilustrativa; não é simulação clínica ou muscular. */
export const meta = {
  id: 'movimento-corporal',
  title: 'Corpo em movimento',
  duration: 8,
  summary: 'Caminhada com transferência de apoio, sola plantada, joelhos articulados e braços coordenados.',
  limitations: 'Um adulto estilizado de perfil em piso plano. A marcha foi construída cinematicamente; não prevê forças musculares, equilíbrio clínico, corrida ou terreno irregular.',
  controls: []
};

const TAU = Math.PI * 2;
const PERIOD = 8 / 3;
const STRIDE = 128;
const SPEED = STRIDE / PERIOD;
const START_X = 270;
const GROUND = 441;
const STANCE = 0.60;
const THIGH = 86;
const SHIN = 85;
const UPPER_ARM = 57;
const FOREARM = 51;
const clamp = (v, lo=0, hi=1) => Math.min(hi, Math.max(lo, v));
const smooth = v => { const x=clamp(v); return x*x*x*(10+x*(-15+6*x)); };
const lerp = (a,b,t) => a+(b-a)*t;
const point = (x,y) => ({x,y});
const rotate = (p,a) => point(p.x*Math.cos(a)-p.y*Math.sin(a), p.x*Math.sin(a)+p.y*Math.cos(a));
const add = (a,b) => point(a.x+b.x,a.y+b.y);
const distance = (a,b) => Math.hypot(a.x-b.x,a.y-b.y);

// Choose the forward-facing knee branch in the sagittal projection.
function solveKnee(hip, ankle) {
  const d=distance(hip,ankle), u=point((ankle.x-hip.x)/d,(ankle.y-hip.y)/d);
  const along=(THIGH*THIGH-SHIN*SHIN+d*d)/(2*d);
  const h=Math.sqrt(Math.max(0,THIGH*THIGH-along*along));
  return point(hip.x+u.x*along+u.y*h,hip.y+u.y*along-u.x*h);
}

function shoeAt(baseX, angle, pivot='ankle', y=GROUND-12) {
  let ankle;
  if (pivot==='heel') ankle=add(point(baseX-13,GROUND),rotate(point(13,-12),angle));
  else if (pivot==='toe') ankle=add(point(baseX+33,GROUND),rotate(point(-33,-12),angle));
  else ankle=point(baseX,y);
  const heel=add(ankle,rotate(point(-13,12),angle));
  const toe=add(ankle,rotate(point(33,12),angle));
  return {ankle,heel,toe,angle};
}

function footAt(t, offset) {
  const cycles=t/PERIOD+offset, cycle=Math.floor(cycles), p=cycles-cycle;
  const strikeTime=(cycle-offset)*PERIOD;
  const anchorX=START_X+SPEED*strikeTime+STRIDE*0.30;
  if (p<STANCE) {
    const heelLoad=smooth(p/0.10);
    const toePush=smooth((p-0.46)/(STANCE-0.46));
    const mode=p<0.10?'heel':p>0.46?'toe':'sole';
    const angle=p<0.10?lerp(-0.17,0,heelLoad):0.32*toePush;
    const shoe=shoeAt(anchorX,angle,mode==='sole'?'ankle':mode);
    return {...shoe,phase:p,cycle,mode,support:true,anchorX,contactId:`${offset}:${cycle}:${mode}`,
      contact:mode==='heel'?shoe.heel:mode==='toe'?shoe.toe:point(anchorX+10,GROUND)};
  }
  const u=(p-STANCE)/(1-STANCE), q=smooth(u);
  const lift=29*Math.pow(Math.sin(Math.PI*u),2);
  const launch=shoeAt(anchorX,0.32,'toe');
  const land=shoeAt(anchorX+STRIDE,-0.17,'heel');
  const ankle=point(lerp(launch.ankle.x,land.ankle.x,q),lerp(launch.ankle.y,land.ankle.y,q)-lift);
  const angle=lerp(0.32,-0.17,q);
  const shoe={ankle,angle,heel:add(ankle,rotate(point(-13,12),angle)),toe:add(ankle,rotate(point(33,12),angle))};
  return {...shoe,phase:p,cycle,mode:'swing',support:false,anchorX,contactId:null,contact:null};
}

function armAt(shoulder, phase) {
  const a=-0.31*Math.cos(TAU*phase);
  const flex=0.24+0.06*Math.sin(TAU*phase-0.35);
  const elbow=add(shoulder,point(Math.sin(a)*UPPER_ARM,Math.cos(a)*UPPER_ARM));
  const foreAngle=a+flex;
  const wrist=add(elbow,point(Math.sin(foreAngle)*FOREARM,Math.cos(foreAngle)*FOREARM));
  // Wrist is coupled to forearm with a small, bounded secondary rotation.
  const handAngle=-foreAngle+0.035*Math.sin(TAU*phase-0.55);
  const fingertip=add(wrist,rotate(point(2,24),handAngle));
  return {shoulder,elbow,wrist,fingertip,upperAngle:a,foreAngle,handAngle,flex};
}

export function sample(time, options={}) {
  const t=clamp(Number.isFinite(time)?time:0,0,meta.duration), cycle=t/PERIOD;
  const x=START_X+SPEED*t;
  const bob=2.2*Math.cos(2*TAU*cycle-0.25);
  const hip=point(x,261.5+bob);
  const phaseNear=cycle-Math.floor(cycle);
  const phaseFar=(cycle+0.5)-Math.floor(cycle+0.5);
  const torsoTilt=0.025+0.013*Math.sin(TAU*cycle);
  const shoulder=point(x+5+96*Math.sin(torsoTilt),hip.y-96*Math.cos(torsoTilt));
  const neck=point(shoulder.x+1,shoulder.y-20);
  const head=point(neck.x+1.5,neck.y-29);
  const nearFoot=footAt(t,0), farFoot=footAt(t,0.5);
  const nearHip=point(hip.x+2*Math.sin(TAU*cycle),hip.y), farHip=point(hip.x-2*Math.sin(TAU*cycle),hip.y+1);
  const near={hip:nearHip,knee:solveKnee(nearHip,nearFoot.ankle),...nearFoot};
  const far={hip:farHip,knee:solveKnee(farHip,farFoot.ankle),...farFoot};
  const nearArm=armAt(point(shoulder.x+1.5,shoulder.y+1),phaseNear);
  const farArm=armAt(point(shoulder.x-2,shoulder.y+1),phaseFar);
  const joints={hip,shoulder,neck,head,near:{hip:near.hip,knee:near.knee,ankle:near.ankle,shoulder:nearArm.shoulder,elbow:nearArm.elbow,wrist:nearArm.wrist,fingertip:nearArm.fingertip},far:{hip:far.hip,knee:far.knee,ankle:far.ankle,shoulder:farArm.shoulder,elbow:farArm.elbow,wrist:farArm.wrist,fingertip:farArm.fingertip}};
  const extents=[...Object.values(joints.near),...Object.values(joints.far),near.heel,near.toe,far.heel,far.toe,point(head.x-26,head.y-29),point(head.x+32,head.y+25)];
  const bounds={left:Math.min(...extents.map(p=>p.x))-18,right:Math.max(...extents.map(p=>p.x))+18,top:Math.min(...extents.map(p=>p.y))-3,bottom:GROUND+3};
  return {t,phase:phaseNear,ground:GROUND,joints,legs:{near,far},arms:{near:nearArm,far:farArm},torsoTilt,contacts:[near,far].map((f,i)=>({side:i?'far':'near',active:f.support,mode:f.mode,id:f.contactId,point:f.contact})),bounds,parameters:{period:PERIOD,stride:STRIDE,speed:SPEED,stance:STANCE,lengths:{thigh:THIGH,shin:SHIN,upperArm:UPPER_ARM,forearm:FOREARM}},model:'kinematic-reconstruction'};
}

function blend(a,b,t) {
  if (!/^#[0-9a-f]{6}$/i.test(a)||!/^#[0-9a-f]{6}$/i.test(b)) return a;
  const result=[1,3,5].map(i=>Math.round(lerp(parseInt(a.slice(i,i+2),16),parseInt(b.slice(i,i+2),16),t)).toString(16).padStart(2,'0')).join('');
  return '#'+result;
}
function stroke(ctx,points,width,color) {
  ctx.beginPath();ctx.moveTo(points[0].x,points[0].y);
  for(let i=1;i<points.length;i++)ctx.lineTo(points[i].x,points[i].y);
  ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineJoin='round';ctx.lineCap='round';ctx.stroke();
}
function limb(ctx,a,b,r1,r2,color) {
  const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy),nx=-dy/d,ny=dx/d;
  ctx.beginPath();ctx.moveTo(a.x+nx*r1,a.y+ny*r1);ctx.lineTo(b.x+nx*r2,b.y+ny*r2);
  ctx.arc(b.x,b.y,r2,Math.atan2(ny,nx),Math.atan2(ny,nx)-Math.PI,true);
  ctx.lineTo(a.x-nx*r1,a.y-ny*r1);ctx.arc(a.x,a.y,r1,Math.atan2(-ny,-nx),Math.atan2(-ny,-nx)-Math.PI,true);ctx.closePath();ctx.fillStyle=color;ctx.fill();
}
function shoe(ctx,foot,color,sole) {
  ctx.save();ctx.translate(foot.ankle.x,foot.ankle.y);ctx.rotate(foot.angle);
  ctx.beginPath();ctx.moveTo(-12,-5);ctx.quadraticCurveTo(-14,1,-13,12);ctx.lineTo(33,12);ctx.quadraticCurveTo(38,8,31,4);ctx.lineTo(12,-2);ctx.lineTo(9,-8);ctx.quadraticCurveTo(-4,-4,-12,-5);ctx.closePath();ctx.fillStyle=color;ctx.fill();
  ctx.beginPath();ctx.moveTo(-12,10);ctx.lineTo(33,10);ctx.lineWidth=3;ctx.strokeStyle=sole;ctx.stroke();ctx.restore();
}
function drawLeg(ctx,leg,color,shoeColor,sole) {
  limb(ctx,leg.hip,leg.knee,17,12,color);limb(ctx,leg.knee,leg.ankle,12,8,color);
  shoe(ctx,leg,shoeColor,sole);
}
function hand(ctx,arm,color) {
  ctx.save();ctx.translate(arm.wrist.x,arm.wrist.y);ctx.rotate(arm.handAngle);
  // One continuous relaxed side-view silhouette. Four fingers group naturally;
  // the thumb has its own root rather than looking like a fifth parallel finger.
  ctx.beginPath();ctx.moveTo(-5,-3);ctx.bezierCurveTo(-6,4,-7,11,-5,18);ctx.quadraticCurveTo(-3,24,0,25);
  ctx.quadraticCurveTo(3,26,4,23);ctx.lineTo(7,14);ctx.quadraticCurveTo(10,17,11,13);ctx.quadraticCurveTo(11,7,6,4);ctx.lineTo(5,-3);ctx.closePath();ctx.fillStyle=color;ctx.fill();ctx.restore();
}
function drawArm(ctx,arm,shirt,skin) {
  limb(ctx,arm.shoulder,arm.elbow,13,9,shirt);
  const cuff=point(lerp(arm.shoulder.x,arm.elbow.x,0.73),lerp(arm.shoulder.y,arm.elbow.y,0.73));
  limb(ctx,cuff,arm.elbow,9.8,8.2,skin);limb(ctx,arm.elbow,arm.wrist,8.2,5,skin);hand(ctx,arm,skin);
}

export function draw(ctx,state,theme,debug=false) {
  const p=theme, j=state.joints, s=j.shoulder, h=j.hip;
  ctx.save();ctx.clearRect(0,0,960,540);ctx.fillStyle=p.fundo;ctx.fillRect(0,0,960,540);
  // Quiet ground reference makes planted feet visible; no camera-driven treadmill.
  ctx.fillStyle=p.superficie;ctx.beginPath();ctx.roundRect(66,442,828,8,4);ctx.fill();
  ctx.globalAlpha=0.55;ctx.strokeStyle=p.contorno;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(66,441.5);ctx.lineTo(894,441.5);ctx.stroke();ctx.globalAlpha=1;
  for (const f of [state.legs.far,state.legs.near]) {ctx.globalAlpha=f.support?0.15:0.045;ctx.fillStyle=p.tinta;ctx.beginPath();ctx.ellipse(f.ankle.x+10,state.ground+2,27,3,0,0,TAU);ctx.fill();}ctx.globalAlpha=1;
  const farPants=blend(p.contraparte,p.fundo,0.28),farSkin=blend(p.papel,p.fundo,0.24),farShirt=blend(p.protagonista,p.fundo,0.25);
  drawArm(ctx,state.arms.far,farShirt,farSkin);
  drawLeg(ctx,state.legs.far,farPants,blend(p.tinta,p.fundo,0.28),p.contorno);
  drawLeg(ctx,state.legs.near,p.contraparte,p.tinta,p.papel);
  // Connected trunk and pelvis, with a soft waist transition instead of circles.
  ctx.beginPath();ctx.moveTo(s.x-16,s.y-3);ctx.bezierCurveTo(s.x-25,s.y+18,h.x-24,h.y-29,h.x-22,h.y-2);
  ctx.quadraticCurveTo(h.x+4,h.y+9,h.x+24,h.y+1);ctx.bezierCurveTo(h.x+20,h.y-23,s.x+28,s.y+33,s.x+22,s.y+4);ctx.quadraticCurveTo(s.x+8,s.y-9,s.x-16,s.y-3);ctx.closePath();ctx.fillStyle=p.protagonista;ctx.fill();
  // Small plane of shade reinforces volume without adding contour clutter.
  ctx.save();ctx.clip();ctx.fillStyle=blend(p.protagonista,p.fundo,0.14);ctx.beginPath();ctx.moveTo(s.x-25,s.y);ctx.quadraticCurveTo(s.x-5,s.y+58,h.x-9,h.y+7);ctx.lineTo(h.x-30,h.y+7);ctx.closePath();ctx.fill();ctx.restore();
  limb(ctx,point(j.neck.x-2,j.neck.y-4),point(s.x+2,s.y+1),7.5,9,p.papel);
  const head=j.head;
  ctx.save();ctx.translate(head.x,head.y);
  ctx.beginPath();ctx.moveTo(-17,-17);ctx.bezierCurveTo(-27,-5,-24,16,-13,22);ctx.lineTo(1,26);ctx.quadraticCurveTo(13,27,14,17);ctx.lineTo(20,16);ctx.quadraticCurveTo(25,14,22,10);ctx.lineTo(18,6);ctx.lineTo(25,3);ctx.lineTo(18,-5);ctx.quadraticCurveTo(19,-19,6,-24);ctx.quadraticCurveTo(-8,-29,-17,-17);ctx.closePath();ctx.fillStyle=p.papel;ctx.fill();
  ctx.beginPath();ctx.moveTo(-19,10);ctx.bezierCurveTo(-27,4,-28,-16,-12,-25);ctx.bezierCurveTo(0,-33,16,-23,19,-14);ctx.quadraticCurveTo(6,-13,-4,-17);ctx.lineTo(-8,2);ctx.quadraticCurveTo(-16,-3,-16,7);ctx.lineTo(-19,10);ctx.closePath();ctx.fillStyle=p.tinta;ctx.fill();
  ctx.fillStyle=p.tinta;ctx.beginPath();ctx.ellipse(14,-4,1.6,1.8,0,0,TAU);ctx.fill();ctx.restore();
  drawArm(ctx,state.arms.near,p.protagonista,p.papel);
  if(debug) {
    ctx.globalAlpha=0.85;
    for(const side of ['far','near']) {const leg=state.legs[side],arm=state.arms[side];stroke(ctx,[leg.hip,leg.knee,leg.ankle],1.5,p.risco);stroke(ctx,[arm.shoulder,arm.elbow,arm.wrist],1.5,p.risco);
      for(const a of [leg.hip,leg.knee,leg.ankle,arm.shoulder,arm.elbow,arm.wrist]) {ctx.beginPath();ctx.arc(a.x,a.y,3,0,TAU);ctx.fillStyle=p.risco;ctx.fill();}}
    for(const c of state.contacts) if(c.active){ctx.beginPath();ctx.arc(c.point.x,c.point.y,5,0,TAU);ctx.strokeStyle=p.risco;ctx.lineWidth=2;ctx.stroke();}
  }
  ctx.restore();
}
