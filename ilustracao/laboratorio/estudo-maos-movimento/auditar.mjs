import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {sample,surfaceMesh,meta} from './maos-forma-v002.mjs';

const sub=(a,b)=>a.map((v,i)=>v-b[i]),add=(a,b)=>a.map((v,i)=>v+b[i]),mul=(a,s)=>a.map(v=>v*s),dot=(a,b)=>a.reduce((n,v,i)=>n+v*b[i],0),norm=a=>Math.hypot(...a),dist=(a,b)=>norm(sub(a,b));
const hash=a=>crypto.createHash('sha256').update(JSON.stringify(a)).digest('hex');
function closestTriangle(p,a,b,c){
 const ab=sub(b,a),ac=sub(c,a),ap=sub(p,a),d1=dot(ab,ap),d2=dot(ac,ap);if(d1<=0&&d2<=0)return a;
 const bp=sub(p,b),d3=dot(ab,bp),d4=dot(ac,bp);if(d3>=0&&d4<=d3)return b;
 const vc=d1*d4-d3*d2;if(vc<=0&&d1>=0&&d3<=0)return add(a,mul(ab,d1/(d1-d3)));
 const cp=sub(p,c),d5=dot(ab,cp),d6=dot(ac,cp);if(d6>=0&&d5<=d6)return c;
 const vb=d5*d2-d1*d6;if(vb<=0&&d2>=0&&d6<=0)return add(a,mul(ac,d2/(d2-d6)));
 const va=d3*d6-d5*d4;if(va<=0&&(d4-d3)>=0&&(d5-d6)>=0)return add(b,mul(sub(c,b),(d4-d3)/((d4-d3)+(d5-d6))));
 const den=va+vb+vc;if(Math.abs(den)<1e-15)return a;return add(a,add(mul(ab,vb/den),mul(ac,vc/den)));
}
function surfaceDistance(p,faces){let min=Infinity;for(const f of faces)for(let k=1;k<f.points.length-1;k++)min=Math.min(min,dist(p,closestTriangle(p,f.points[0],f.points[k],f.points[k+1])));return min;}
function P(s,p){return s.view==='pinca-lateral'?[422+1.72*p[0]+.05*p[1],350-.18*p[0]-.12*p[1]-1.58*p[2]]:[418+1.60*p[0]+.15*p[1]-.70*p[2],300-.50*p[0]+1.40*p[1]+.75*p[2]];}
const expected=[[44,31,25],[49,34,27],[46,32,25],[35,25,21],[44,38,31]];
const modes={};
for(const gesto of ['fechamento','pinca','punho']){
 let lengthError=0,minGap=Infinity,maxContactError=0,maxSpeed=0,maxWrist=0,minReachMargin=Infinity;
 const times=Array.from({length:1441},(_,i)=>i/120),states=times.map(t=>sample(t,{gesto})),hashes=states.map(hash);
 const anchor=hash(states[0].forearmAnchors);let previous;
 for(const s of states){
   const digits=[...s.fingers,s.thumb];
   digits.forEach((f,k)=>{for(let j=0;j<3;j++)lengthError=Math.max(lengthError,Math.abs(dist(f.joints[j],f.joints[j+1])-expected[k][j]));});
   assert.equal(hash(s.forearmAnchors),anchor,'forearm remains stable');maxWrist=Math.max(maxWrist,norm(s.wrist));
   assert.ok(Math.abs(s.flex)<=28+1e-9&&Math.abs(s.deviation)<=12+1e-9);
   assert.ok(digits.flatMap(f=>f.joints.flat()).every(Number.isFinite));
   if(gesto==='pinca'){
     assert.ok(s.thumb.reach.reachable,'thumb target reachable');minReachMargin=Math.min(minReachMargin,69-s.thumb.reach.distance);
     minGap=Math.min(minGap,s.contacts.gap);if(s.contacts.active)maxContactError=Math.max(maxContactError,dist(s.contacts.index,s.contacts.thumb));
   }
   const joints=digits.flatMap(f=>f.joints);if(previous){for(let j=0;j<joints.length;j++)maxSpeed=Math.max(maxSpeed,dist(joints[j],previous[j])*120);}previous=joints;
 }
 for(let i=times.length-1;i>=0;i--)assert.equal(hash(sample(times[i],{gesto})),hashes[i],'out-of-order deterministic state');
 assert.ok(lengthError<1e-9,'rigid bone lengths');assert.equal(maxWrist,0,'wrist pivot fixed');assert.ok(maxSpeed<190,'no joint teleport');
 if(gesto==='pinca'){assert.ok(minGap>=-1e-9,'rounded terminal pads never cross');assert.ok(maxContactError<1e-9,'terminal surfaces meet');assert.ok(minReachMargin>.25,'two-link solver keeps reach margin');}
 let bounds={left:Infinity,top:Infinity,right:-Infinity,bottom:-Infinity},facesPerFrame=0,forearmMeshHash=null;
 for(let frame=0;frame<=360;frame++){
   const s=sample(frame/30,{gesto}),faces=surfaceMesh(s);facesPerFrame=faces.length;
   const staticMeshHash=hash(faces.filter(f=>f.part==='sleeve'||f.part==='cuff'));
   if(forearmMeshHash===null)forearmMeshHash=staticMeshHash;else assert.equal(staticMeshHash,forearmMeshHash,'drawn forearm surface remains fixed');
   for(const f of faces)for(const v of f.points){assert.ok(v.every(Number.isFinite));const [x,y]=P(s,v);bounds.left=Math.min(bounds.left,x-.4);bounds.top=Math.min(bounds.top,y-.4);bounds.right=Math.max(bounds.right,x+.4);bounds.bottom=Math.max(bounds.bottom,y+.4);}
 }
 assert.ok(bounds.left>=50&&bounds.top>=40&&bounds.right<=910&&bounds.bottom<=465,'actual mesh + stroke respects safe region');
 let boundaryJump=0;for(const t of [0.8,1,4,7,10.3,11.2]){const a=sample(t-1e-6,{gesto}),b=sample(t+1e-6,{gesto}),ja=[...a.fingers,a.thumb].flatMap(f=>f.joints),jb=[...b.fingers,b.thumb].flatMap(f=>f.joints);for(let j=0;j<ja.length;j++)boundaryJump=Math.max(boundaryJump,dist(ja[j],jb[j]));}
 assert.ok(boundaryJump<0.001,'continuous transition');
 modes[gesto]={stateSamples:times.length,meshFrames:361,facesPerFrame,forearmMeshStable:true,maxBoneLengthError:lengthError,maxJointSpeedUnitsPerSecond:maxSpeed,maxTransitionJump:boundaryJump,bounds,maxWristDrift:maxWrist,view:states[0].view,...(gesto==='pinca'?{minPadGap:minGap,maxContactSurfaceGap:maxContactError,minThumbReachMargin:minReachMargin}: {})};
}

const pinch=sample(5,{gesto:'pinca'}),mesh=surfaceMesh(pinch),ip=pinch.fingers[0],th=pinch.thumb,n=mul(sub(th.joints[3],ip.joints[3]),1/dist(th.joints[3],ip.joints[3]));
const indexAxis=mul(sub(ip.joints[3],ip.joints[2]),1/dist(ip.joints[3],ip.joints[2])),thumbAxis=mul(sub(th.joints[3],th.joints[2]),1/dist(th.joints[3],th.joints[2]));
assert.ok(dot(n,indexAxis)>0&&dot(mul(n,-1),thumbAxis)>0,'contacts lie on exposed terminal hemisphere');
const meshContactDistances={index:surfaceDistance(pinch.contacts.index,mesh.filter(f=>f.id==='indicador')),thumb:surfaceDistance(pinch.contacts.thumb,mesh.filter(f=>f.id==='polegar'))};
assert.ok(meshContactDistances.index<.3&&meshContactDistances.thumb<.3,'analytic contacts match drawn tip mesh');
let minDistalClearance=Infinity;
for(let frame=0;frame<=360;frame++){
 const s=sample(frame/30,{gesto:'pinca'}),a=s.fingers[0],b=s.thumb;
 for(let j=0;j<=20;j++)for(let k=0;k<=20;k++){
   const u=j/20,v=k/20,p=add(a.joints[2],mul(sub(a.joints[3],a.joints[2]),u)),q=add(b.joints[2],mul(sub(b.joints[3],b.joints[2]),v));
   const ra=a.radii[2]+(a.radii[3]-a.radii[2])*u,rb=b.radii[2]+(b.radii[3]-b.radii[2])*v;
   minDistalClearance=Math.min(minDistalClearance,dist(p,q)-ra-rb);
 }
}
assert.ok(minDistalClearance>=-1e-8,'terminal finger segments do not cross in sampled tapered-capsule check');
for(const bad of [NaN,Infinity,-Infinity,undefined])assert.throws(()=>sample(bad));assert.throws(()=>sample(0,{gesto:'outro'}));
for(const gesto of Object.keys(modes)){assert.equal(hash(sample(-10,{gesto})),hash(sample(0,{gesto})));assert.equal(hash(sample(30,{gesto})),hash(sample(12,{gesto})));}
const report={study:'maos-movimento',status:'PASSOU — verificação técnica local',duration:meta.duration,modes,contact:{interval:[4,7],kind:'tangent rounded terminal pads',meshContactDistances,minDistalClearance,distalSampling:'361 tempos × 21 × 21 amostras dos dois últimos segmentos',limits:'Não testa colisão global entre todos os dedos, palma e antebraço; não calcula pressão/deformação de tecido.'},checks:['determinism outside chronological order','fixed anatomical segment lengths','wrist attached to stable forearm','bounded wrist flexion and deviation','safe actual mesh with stroke','continuous transitions','reachable thumb opposition targets','terminal pad nonpenetration','analytic surface contact against drawn mesh','sampled distal-segment clearance','invalid input rejection'],visualReview:'Revisão v002 da superfície, preservando a articulação avaliada positivamente. Inspeção visual do produtor é separada dos testes numéricos. Novo aceite de Lucas pendente; QC oficial não medido.',artisticApproval:'PENDENTE',officialQC:'NÃO MEDIDO',moduleSha256:crypto.createHash('sha256').update(fs.readFileSync(fileURLToPath(new URL('./maos-forma-v002.mjs',import.meta.url)))).digest('hex')};
fs.writeFileSync(fileURLToPath(new URL('./resultados.json',import.meta.url)),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
