/** Mão oblíqua articulada: geometria local; demonstração cinemática, sem dinâmica tecidual. */
export const meta={id:'maos-movimento',title:'Mãos, dedos e punho',duration:12,summary:'Fechamento progressivo, oposição do polegar e pinça de polpas; punho articulado com antebraço estável.',limitations:'Uma mão estilizada em vista oblíqua. Sem forças, pronação/supinação, colisão geral entre todos os dedos ou preensão de objetos.',controls:[{key:'gesto',label:'Movimento da mão',type:'select',default:'fechamento',options:[{value:'fechamento',label:'Fechamento progressivo'},{value:'pinca',label:'Pinça de precisão'},{value:'punho',label:'Flexão e desvio do punho'}]}]};
const PI=Math.PI,TAU=2*PI,R=PI/180;
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const mix=(a,b,t)=>a+(b-a)*t;
const smooth=t=>{t=clamp(t);return t*t*t*(10+t*(-15+6*t));};
const add=(a,b)=>a.map((v,i)=>v+b[i]);
const sub=(a,b)=>a.map((v,i)=>v-b[i]);
const mul=(a,t)=>a.map(v=>v*t);
const dot=(a,b)=>a.reduce((n,v,i)=>n+v*b[i],0);
const len=a=>Math.hypot(...a);
const unit=a=>mul(a,1/(len(a)||1));
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const lerp=(a,b,t)=>a.map((v,i)=>mix(v,b[i],t));
const CAMERA=unit([1.075,-.85,2.315]);
const ORIGIN=[418,300];
const fingerSpecs=[
 {id:'indicador',root:[99,-35,0],lengths:[44,31,25],radii:[13,12.2,9.8,7.8],open:[2,5,3],closed:[72,91,43],spread:-3},
 {id:'medio',root:[106,-8,0],lengths:[49,34,27],radii:[14,12.6,10.2,8.1],open:[3,7,4],closed:[77,95,45],spread:0},
 {id:'anelar',root:[98,22,0],lengths:[46,32,25],radii:[12.8,11.6,9.1,7.3],open:[5,9,6],closed:[79,97,44],spread:2.5},
 {id:'minimo',root:[80,45,1],lengths:[35,25,21],radii:[10.4,9.4,7.5,6.2],open:[8,10,7],closed:[83,95,43],spread:7}
];
const thumbLengths=[44,38,31],thumbRadii=[15.5,13.2,10.4,8.2],thumbRoot=[47,-30,8];
const thumbOpenDirs=[[.22,-.945,.24],[.55,-.817,.17],[.75,-.65,.13]].map(unit);
function envelope(t){return smooth((t-1.0)/3.0)*(1-smooth((t-7)/3.3));}
function rotateWrist(p,flex,dev,weight=1){
 const f=flex*R*weight,d=dev*R*weight;
 const q=[p[0]*Math.cos(f)-p[2]*Math.sin(f),p[1],p[0]*Math.sin(f)+p[2]*Math.cos(f)];
 return[q[0]*Math.cos(d)-q[1]*Math.sin(d),q[0]*Math.sin(d)+q[1]*Math.cos(d),q[2]];
}
function project(p,view='obliqua'){
 if(view==='pinca-lateral')return{x:422+1.72*p[0]+.05*p[1],y:350-.18*p[0]-.12*p[1]-1.58*p[2],depth:-p[1]};
 return{x:ORIGIN[0]+1.60*p[0]+.15*p[1]-.70*p[2],y:ORIGIN[1]-.50*p[0]+1.40*p[1]+.75*p[2],depth:dot(p,CAMERA)};
}
function finger(spec,curl,mode){
 let spread=spec.spread*(1-.76*curl)*R;
 if(mode==='pinca'&&spec.id==='indicador')spread=mix(-3,-14,curl)*R;
 const targets=mode==='pinca'?(spec.id==='indicador'?[12,60,58]:[98,86,35]):spec.closed;
 const joints=[spec.root.slice()],angles=[];let total=0;
 for(let k=0;k<3;k++){
   const q=Math.pow(curl,[1,1.14,1.32][k]);const a=mix(spec.open[k],targets[k],q);angles.push(a);total+=a*R;
   joints.push(add(joints[k],[spec.lengths[k]*Math.cos(total)*Math.cos(spread),spec.lengths[k]*Math.sin(spread),spec.lengths[k]*Math.sin(total)*Math.cos(spread)]));
 }
 return{id:spec.id,joints,angles,lengths:spec.lengths.slice(),radii:spec.radii.slice(),curl};
}
function openThumb(directions=thumbOpenDirs){const pts=[thumbRoot.slice()];thumbLengths.forEach((l,i)=>pts.push(add(pts[i],mul(directions[i],l))));return pts;}
function solveTwo(p,target,l1,l2,pole){
 const delta=sub(target,p),d=len(delta),u=unit(delta);const h=(l1*l1-l2*l2+d*d)/(2*d);
 const n=unit(sub(pole,mul(u,dot(pole,u))));const side=Math.sqrt(Math.max(0,l1*l1-h*h));
 return{joint:add(p,add(mul(u,h),mul(n,side))),reach:d,reachable:d<l1+l2&&d>Math.abs(l1-l2)};
}
function makeThumb(q,mode,index){
 const pinchOpenDirs=[[.16,-.68,.72],[.50,-.42,.76],[.66,-.25,.71]].map(unit);
 const opened=openThumb(mode==='pinca'?pinchOpenDirs:thumbOpenDirs);let joints,reach=null;
 if(mode==='pinca'){
   const dir=unit(lerp(pinchOpenDirs[0],unit([.70,-.57,.43]),q));
   const mcp=add(thumbRoot,mul(dir,thumbLengths[0]));
   const finalIndex=finger(fingerSpecs[0],1,'pinca');
   const contactNormal=unit(sub(finalIndex.joints[3],finalIndex.joints[2]));
   const finalTarget=add(finalIndex.joints[3],mul(contactNormal,fingerSpecs[0].radii[3]+thumbRadii[3]));
   const target=lerp(opened[3],finalTarget,q);
   const solved=solveTwo(mcp,target,thumbLengths[1],thumbLengths[2],[0,-1,0]);
   joints=[thumbRoot.slice(),mcp,solved.joint,target];reach={distance:solved.reach,reachable:solved.reachable};
 }else{
   const closed=[[.58,-.32,.75],[.50,.52,.68],[.40,.81,.43]].map(unit);joints=[thumbRoot.slice()];
   thumbLengths.forEach((l,i)=>{const d=unit(lerp(thumbOpenDirs[i],closed[i],Math.pow(q,[.85,1.05,1.15][i])));joints.push(add(joints[i],mul(d,l)));});
 }
 return{id:'polegar',joints,lengths:thumbLengths.slice(),radii:thumbRadii.slice(),curl:q,reach};
}
function makeLocal(t,gesture){
 const q=envelope(t);let flex=0,dev=0,curls;
 if(gesture==='punho'){
   const gate=smooth(t/.8)*(1-smooth((t-11.2)/.8));
   flex=28*Math.sin(TAU*(t-.8)/5.2)*gate;dev=12*Math.sin(TAU*(t-.8)/7.4)*gate;
   curls=[.025,.035,.055,.075];
 }else if(gesture==='pinca'){
   curls=[q,Math.pow(q,.92),Math.pow(q,.88),Math.pow(q,.84)];flex=3*q;dev=-2*q;
 }else{
   curls=[1.25,1.08,.94,.83].map(power=>Math.pow(q,power));flex=3*q;dev=-2*q;
 }
 const fingers=fingerSpecs.map((s,i)=>finger(s,curls[i],gesture));
 const thumb=makeThumb(gesture==='punho'?.10:gesture==='fechamento'?Math.pow(q,1.18):q,gesture,fingers[0]);
 return{fingers,thumb,flex,dev,q};
}
export function sample(time,options={}){
 if(!Number.isFinite(time))throw new TypeError('Tempo deve ser um número finito em segundos.');
 const gesture=options.gesto??'fechamento';
 if(!['fechamento','pinca','punho'].includes(gesture))throw new RangeError('Gesto desconhecido.');
 const t=clamp(time,0,meta.duration);
 const g=makeLocal(t,gesture),transform=p=>rotateWrist(p,g.flex,g.dev);
 const fingers=g.fingers.map(f=>({...f,localJoints:f.joints.map(p=>p.slice()),joints:f.joints.map(transform)}));
 const thumb={...g.thumb,localJoints:g.thumb.joints.map(p=>p.slice()),joints:g.thumb.joints.map(transform)};
 const i=fingers[0],tipI=i.joints[3],tipT=thumb.joints[3],normal=unit(sub(tipT,tipI));
 const padI=add(tipI,mul(normal,i.radii[3])),padT=sub(tipT,mul(normal,thumb.radii[3]));
 const gap=len(sub(tipT,tipI))-i.radii[3]-thumb.radii[3];
 const closed=gesture==='pinca'&&g.q>1-1e-10;
 return{t,gesture,phase:g.q,flex:g.flex,deviation:g.dev,view:gesture==='pinca'?'pinca-lateral':'obliqua',wrist:[0,0,0],forearmAnchors:[[-210,0,0],[-78,0,0],[-35,0,0]],fingers,thumb,
   contacts:{active:closed,kind:'opposed-rounded-fingertip-pads',index:padI,thumb:padT,center:mul(add(padI,padT),.5),gap},
   joints:{wrist:[0,0,0],fingers:fingers.map(f=>({id:f.id,MCP:f.joints[0],PIP:f.joints[1],DIP:f.joints[2],tip:f.joints[3]})),thumb:{CMC:thumb.joints[0],MCP:thumb.joints[1],IP:thumb.joints[2],tip:thumb.joints[3]}},
   bounds:{left:52,top:40,right:910,bottom:465},model:'cinematica-3D-projetada',projection:'orthographic-oblique',_local:g};
}
function catmull(points,steps=4,closed=false){
 const out=[];for(let i=0;i<(closed?points.length:points.length-1);i++){const n=points.length,p0=points[closed?(i-1+n)%n:Math.max(0,i-1)],p1=points[i],p2=points[(i+1)%n],p3=points[closed?(i+2)%n:Math.min(n-1,i+2)];
   for(let k=0;k<steps;k++){const t=k/steps;out.push(p1.map((v,j)=>.5*(2*v+(-p0[j]+p2[j])*t+(2*p0[j]-5*v+4*p2[j]-p3[j])*t*t+(-p0[j]+3*v-3*p2[j]+p3[j])*t*t*t)));}}
 if(!closed)out.push(points[points.length-1]);return out;
}
function meshTube(rows,id,part,faces,transform,across=[0,1,0],sides=20){
 const rings=rows.map((r,i)=>{const tangent=unit(sub(rows[Math.min(i+1,rows.length-1)].slice(0,3),rows[Math.max(0,i-1)].slice(0,3))),v=unit(sub(across,mul(tangent,dot(across,tangent)))),w=unit(cross(tangent,v));
   return Array.from({length:sides},(_,k)=>{const a=TAU*k/sides;return transform(add(r.slice(0,3),add(mul(v,r[3]*Math.cos(a)),mul(w,(r[4]??r[3]) *Math.sin(a)))));});});
 for(let i=0;i<rings.length-1;i++)for(let k=0;k<sides;k++){const next=(k+1)%sides;faces.push({id,part,points:[rings[i][k],rings[i+1][k],rings[i+1][next],rings[i][next]]});}
 // End caps are only used at sleeve/base; digit tips close with hemisphere rows.
 faces.push({id,part,points:rings[0].slice().reverse()});faces.push({id,part,points:rings[rings.length-1]});
}
function digitMesh(f,faces,transform){
 const raw=f.joints.map((p,i)=>p.concat(f.radii[i])),rows=catmull(raw,5);
 // Spherical terminal pad joins a smooth tapered finger; no balls at joints.
 const end=f.joints[3],axis=unit(sub(end,f.joints[2])),r=f.radii[3];
 for(let k=1;k<=6;k++){const a=(PI/2)*k/6;rows.push(add(end,mul(axis,r*Math.sin(a))).concat(Math.max(.06,r*Math.cos(a))));}
 meshTube(rows,f.id,'skin',faces,transform,[0,1,0],24);
}
function palmMesh(faces,transform){
 const outline=[[-22,-21],[0,-24],[26,-34],[50,-44],[84,-48],[98,-47],[106,-30],[112,-18],[119,-6],[115,8],[107,17],[105,29],[92,37],[86,48],[72,56],[50,52],[27,42],[7,29],[-22,21]];
 const edge=catmull(outline,3,true),center=[44,3];
 for(const side of [1,-1]){
   const values=[.001,.19,.38,.57,.74,.88,1];
   const rings=values.map(r=>edge.map(p=>{const xy=lerp(center,p,r),z=side*(4+(side>0?13:10)*Math.sqrt(Math.max(0,1-r*r)));return transform([xy[0],xy[1],z]);}));
   for(let j=0;j<rings.length-1;j++)for(let k=0;k<edge.length;k++){const n=(k+1)%edge.length;let pts=[rings[j][k],rings[j+1][k],rings[j+1][n],rings[j][n]];if(side<0)pts.reverse();faces.push({id:'palma',part:'skin',points:pts});}
 }
 const a=edge.map(p=>transform([p[0],p[1],4])),b=edge.map(p=>transform([p[0],p[1],-4]));for(let k=0;k<edge.length;k++){const n=(k+1)%edge.length;faces.push({id:'palma','part':'skin',points:[a[k],b[k],b[n],a[n]]});}
}
export function surfaceMesh(state){
 const faces=[],g=state._local;
 const hand=p=>rotateWrist(p,g.flex,g.dev);
 const bridge=p=>rotateWrist(p,g.flex,g.dev,smooth((p[0]+35)/43));
 meshTube(catmull([[-210,0,0,38,25],[-160,0,0,34,23],[-110,0,0,29,20],[-80,0,0,26.5,18]],4),'manga','sleeve',faces,p=>p);
 meshTube(catmull([[-83,0,0,27,18.5],[-76,0,0,26,17.5]],2),'borda-manga','cuff',faces,p=>p);
 meshTube(catmull([[-78,0,0,25,17],[-50,0,0,24,15.5],[-30,0,0,22.5,14],[-8,0,0,23,13],[13,1,0,29,14]],5),'punho','skin',faces,bridge);
 palmMesh(faces,hand);
 g.fingers.forEach(f=>digitMesh(f,faces,hand));digitMesh(g.thumb,faces,hand);
 // Small interdigital webs merge the roots into the distal palm.
 for(let k=0;k<3;k++){
   const a=g.fingers[k],b=g.fingers[k+1];
   const ca=lerp(a.joints[0],a.joints[1],.16),cb=lerp(b.joints[0],b.joints[1],.16),center=mul(add(ca,cb),.5);
   const span=len(sub(cb,ca))*.54;
   meshTube([[center[0]-13,center[1],3,span,7],[center[0]-4,center[1],3,span*.82,6],[center[0]+1,center[1],3,span*.30,3]],`web-${k}`,'skin',faces,hand,[0,1,0],14);
 }
 // Thenar mass bridges palm and moving thumb base without a circular joint cap.
 const cmc=g.thumb.joints[0],mcp=g.thumb.joints[1];
 const thenar=[[-4,-18,5,17,13],[19,-23,7,24,16],[cmc[0],cmc[1]+3,cmc[2],23,16],[mix(cmc[0],mcp[0],.48),mix(cmc[1],mcp[1],.48)+3,mix(cmc[2],mcp[2],.48),18,13]];
 meshTube(catmull(thenar,4),'tenar','skin',faces,hand,[0,1,0],24);
 return faces;
}
function blend(a,b,t){if(!/^#[0-9a-f]{6}$/i.test(a)||!/^#[0-9a-f]{6}$/i.test(b))return a;return '#'+[1,3,5].map(i=>Math.round(mix(parseInt(a.slice(i,i+2),16),parseInt(b.slice(i,i+2),16),t)).toString(16).padStart(2,'0')).join('');}
function faceNormal(f){for(let i=1;i<f.points.length-1;i++){const n=cross(sub(f.points[i],f.points[0]),sub(f.points[i+1],f.points[0]));if(len(n)>1e-8)return unit(n);}return[0,0,1];}
export function draw(ctx,state,theme,debug=false){
 const faces=surfaceMesh(state),p=theme;ctx.save();ctx.clearRect(0,0,960,540);ctx.fillStyle=p.fundo;ctx.fillRect(0,0,960,540);
 const light=unit([-.28,-.46,1]);
 const P=q=>project(q,state.view);
 const drawable=faces.map(f=>{const normal=faceNormal(f),points=f.points.map(P),depth=points.reduce((n,q)=>n+q.depth,0)/points.length;return{...f,normal,points,depth};});
 drawable.sort((a,b)=>a.depth-b.depth);
 for(const f of drawable){
   const base=f.part==='sleeve'?p.contraparte:f.part==='cuff'?p.contorno:p.papel;
   // Intersecting local skin volumes form one visual surface. Lighting every
   // hidden/interior polygon made false square creases at the wrist and roots.
   const skinShade={indicador:.035,medio:.045,anelar:.065,minimo:.085,polegar:.025};
   const shade=f.part==='skin'?(skinShade[f.id]??.035):f.part==='cuff'?.04:.13;
   ctx.fillStyle=blend(base,p.fundo,shade);ctx.strokeStyle=ctx.fillStyle;ctx.lineWidth=.65;ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(f.points[0].x,f.points[0].y);for(let k=1;k<f.points.length;k++)ctx.lineTo(f.points[k].x,f.points[k].y);ctx.closePath();ctx.fill();ctx.stroke();
 }
 // Few palm creases, clipped conceptually to the palmar dome. No joint circles.
 function line(local,alpha,width){ctx.globalAlpha=alpha;ctx.beginPath();local.map(a=>P(rotateWrist(a,state.flex,state.deviation))).forEach((a,i)=>i?ctx.lineTo(a.x,a.y):ctx.moveTo(a.x,a.y));ctx.strokeStyle=p.contorno;ctx.lineWidth=width;ctx.lineCap='round';ctx.stroke();ctx.globalAlpha=1;}
 if(state.gesture!=='pinca'){
   line([[18,-13,17],[31,-18,20],[40,-12,20],[45,0,20],[46,15,19]],.28,1.1);
   line([[52,-20,18],[66,-8,19],[79,9,17],[84,25,13]],.21,.9);
 }
 if(debug){ctx.globalAlpha=.8;ctx.strokeStyle=p.risco;ctx.lineWidth=1.6;
   for(const f of [...state.fingers,state.thumb]){const pts=f.joints.map(P);ctx.beginPath();pts.forEach((a,i)=>i?ctx.lineTo(a.x,a.y):ctx.moveTo(a.x,a.y));ctx.stroke();for(const a of pts){ctx.beginPath();ctx.arc(a.x,a.y,3,0,TAU);ctx.fillStyle=p.risco;ctx.fill();}}
   if(state.gesture==='pinca'){const a=P(state.contacts.index),b=P(state.contacts.thumb);ctx.beginPath();ctx.arc(a.x,a.y,4,0,TAU);ctx.arc(b.x,b.y,4,0,TAU);ctx.stroke();}
 }
 ctx.restore();
}
