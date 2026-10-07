/** Experimental surface only. The original kinematic sample is imported unchanged. */
import {sample as rigSample,meta as rigMeta} from './maos.mjs';
export const sample=rigSample;
export const meta={...rigMeta,title:'Mãos, dedos e punho · forma revisada',limitations:rigMeta.limitations+' Superfície em revisão artística.',renderer:{type:'cpu-depth-buffer',width:960,height:540,lighting:'generic configurable study; theme.maoVolume'}};
const PI=Math.PI,TAU=PI*2,R=PI/180,N=16;
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const smooth=x=>{x=clamp(x);return x*x*x*(10+x*(-15+6*x));};
const add=(a,b)=>a.map((x,i)=>x+b[i]),sub=(a,b)=>a.map((x,i)=>x-b[i]),mul=(a,s)=>a.map(x=>x*s),dot=(a,b)=>a.reduce((r,x,i)=>r+x*b[i],0),length=a=>Math.hypot(...a),unit=a=>mul(a,1/(length(a)||1)),mix=(a,b,t)=>a.map((x,i)=>x+(b[i]-x)*t),cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const cam=unit([1.0925,-.85,2.315]),light=unit([-.45,-.6,1]);
function wrist(p,flex,dev,w=1){const f=flex*R*w,d=dev*R*w,q=[p[0]*Math.cos(f)-p[2]*Math.sin(f),p[1],p[0]*Math.sin(f)+p[2]*Math.cos(f)];return[q[0]*Math.cos(d)-q[1]*Math.sin(d),q[0]*Math.sin(d)+q[1]*Math.cos(d),q[2]];}
function P(p,view){return view==='pinca-lateral'?[422+1.72*p[0]+.05*p[1],350-.18*p[0]-.12*p[1]-1.58*p[2],-p[1]]:[418+1.6*p[0]+.15*p[1]-.7*p[2],300-.5*p[0]+1.4*p[1]+.75*p[2],dot(p,cam)];}
function row(p,r,depth=r,axis=null,across=null){return{p,r,depth,axis,across};}
function makeTube(rows,id,part,faces,transform,across=[0,1,0]){
 const rings=rows.map((r,i)=>{const tangent=r.axis??unit(sub(rows[Math.min(i+1,rows.length-1)].p,rows[Math.max(0,i-1)].p)),reference=r.across??across,v=unit(sub(reference,mul(tangent,dot(reference,tangent)))),w=unit(cross(tangent,v));
 return Array.from({length:N},(_,k)=>{const a=TAU*k/N;return transform(add(r.p,add(mul(v,r.r*Math.cos(a)),mul(w,r.depth*Math.sin(a)))));});});
 for(let i=0;i<rings.length-1;i++)for(let k=0;k<N;k++){const n=(k+1)%N;faces.push({id,part,points:[rings[i][k],rings[i][n],rings[i+1][n],rings[i+1][k]]});}
 return rings;
}
function digit(f,faces,transform,isThumb=false,padNormal=null){
 const start=isThumb?1:0,j=f.joints,r=f.radii,rows=[],firstAxis=unit(sub(j[start+1],j[start]));
 // Long nearly straight phalangeal sections with a small rounded transition at each joint.
 rows.push(row(j[start],r[start]*(isThumb?1.10:1),r[start]*.87,firstAxis));
 for(let i=start;i<3;i++){
  const a=j[i],b=j[i+1],d=unit(sub(b,a)),L=length(sub(b,a));
  const end=i<2?sub(b,mul(d,Math.min(5,L*.14))):b;
  rows.push(row(mix(a,b,.48),r[i]*.53+r[i+1]*.47,(r[i]*.53+r[i+1]*.47)*.89,d));
  rows.push(row(end,r[i+1],r[i+1]*.90,d));
  if(i<2){const next=unit(sub(j[i+2],b)),c=add(b,mul(next,5));
   for(let k=1;k<=3;k++){const t=k/3,p=add(add(mul(end,(1-t)*(1-t)),mul(b,2*t*(1-t))),mul(c,t*t));rows.push(row(p,r[i+1]*(1-.025*Math.sin(PI*t)),r[i+1]*.90,unit(mix(d,next,t))));}
  }
 }
 const end=j[3],axis=unit(sub(end,j[2])),radius=r[3];
 // The terminal pad remains a hemisphere of the original contact radius.
 const lateral=padNormal?sub(padNormal,mul(axis,dot(padNormal,axis))):null,padAcross=lateral&&length(lateral)>1e-7?unit(lateral):null;
 rows[rows.length-1]=row(end,radius,radius,axis,padAcross);
 const capAngles=Array.from({length:5},(_,k)=>PI/2*(k+1)/5);if(padNormal)capAngles.push(Math.asin(clamp(dot(padNormal,axis))));capAngles.sort((a,b)=>a-b);
 for(const a of capAngles){const rr=a>=PI/2-1e-10?0:radius*Math.cos(a);rows.push(row(add(end,mul(axis,radius*Math.sin(a))),rr,rr,axis,padAcross));}
 const across=isThumb?unit([-firstAxis[1],firstAxis[0],0]):[0,1,0];
 const rings=makeTube(rows,f.id,'skin',faces,transform,across);
 faces.push({id:f.id,part:'skin',points:rings.at(-1)});
 return{ring:rings[0],localRing:makeTube(rows.slice(0,1),f.id,'skin',[],p=>p,across)[0]};
}
function palm(faces,g,roots,wristRing,transform){
 const top=[],bottom=[],skip=[];
 function point(p,z=9){top.push(transform([p[0],p[1],p[2]+z]));bottom.push(transform([p[0],p[1],p[2]-z]));skip.push(false);}
 function outlet(ring){for(let k=N/2;k>=0;k--){top.push(ring[k]);bottom.push(ring[(N-k)%N]);skip.push(k!==0);}}
 // One connected palmar shell. The first web reaches the thumb MCP, engulfing its metacarpal.
 point([15,-28,0],11);
 point([27,-40,2],10);point([38,-60,5],9);
 outlet(roots[0].ring);
 const thumb=g.thumb.joints[1],index=g.fingers[0].joints[0];
 const web=mix(thumb,index,.59);web[0]-=7;web[1]+=8;web[2]*=.40;point(web,7);
 roots.slice(1).forEach(root=>outlet(root.ring));
 point([70,53,0],8);point([59,53,0],10);point([45,46,0],11);point([32,39,0],12);point([19,29,0],12);
 // Proximal opening shares the exact wrist ring; its top arc closes the palmar boundary.
 for(let k=0;k<=N/2;k++){top.push(wristRing[k]);bottom.push(wristRing[(N-k)%N]);skip.push(k!==N/2);}
 const center=[49,5,0],count=top.length;
 function unhand(p){const d=-g.dev*R,f=-g.flex*R,q=[p[0]*Math.cos(d)-p[1]*Math.sin(d),p[0]*Math.sin(d)+p[1]*Math.cos(d),p[2]];return[q[0]*Math.cos(f)-q[2]*Math.sin(f),q[1],q[0]*Math.sin(f)+q[2]*Math.cos(f)];}
 for(const side of [1,-1]){
  const boundary=side>0?top:bottom;let inner=null;
  const rings=[.001,.28,.55,.78,.91,1].map(r=>r===1?boundary:boundary.map(p=>{
   // Interpolate in world coordinates so the entire shell shares one wrist transform.
   const b=unhand(p),xy=mix([center[0],center[1],0],b,r),thumbCenter=g.thumb.joints[1],dx=(xy[0]-thumbCenter[0])/25,dy=(xy[1]-thumbCenter[1])/27,bulge=thumbCenter[2]*Math.exp(-dx*dx-dy*dy)*.76,z=side*11.5+bulge;xy[2]=z+(b[2]-z)*smooth((r-.87)/.13);return transform(xy);
  }));
  for(const outer of rings){if(inner){for(let k=0;k<count;k++){const n=(k+1)%count,pts=[inner[k],outer[k],outer[n],inner[n]];if(side<0)pts.reverse();faces.push({id:'palma',part:'skin',points:pts});}}inner=outer;}
 }
 for(let k=0;k<count;k++){if(skip[k])continue;const n=(k+1)%count;faces.push({id:'palma',part:'skin',points:[top[k],bottom[k],bottom[n],top[n]]});}
}
function fairPalm(faces){
 const movable=new Set(),shared=new Set(),thumbVertices=new Set(),adj=new Map();
 for(const f of faces){if(f.id==='polegar')f.points.forEach(p=>thumbVertices.add(p));if(f.id==='palma')f.points.forEach(p=>movable.add(p));else f.points.forEach(p=>shared.add(p));for(let i=0;i<f.points.length;i++){const p=f.points[i],a=f.points[(i+1)%f.points.length],b=f.points[(i+f.points.length-1)%f.points.length];if(!adj.has(p))adj.set(p,new Set());adj.get(p).add(a);adj.get(p).add(b);}}
 for(let pass=0;pass<3;pass++){const updates=[];for(const p of movable){const neighbors=[...adj.get(p)],center=mul(neighbors.reduce((a,b)=>add(a,b),[0,0,0]),1/neighbors.length),weight=shared.has(p)?(thumbVertices.has(p)?.28:.13):.40;updates.push([p,mix(p,center,weight)]);}for(const [p,q] of updates){p[0]=q[0];p[1]=q[1];p[2]=q[2];}}
}
export function surfaceMesh(s){
 const faces=[],g=s._local,hand=p=>wrist(p,g.flex,g.dev),bridge=p=>wrist(p,g.flex,g.dev,smooth((p[0]+35)/40));
 const sleeve=makeTube([row([-210,0,0],38,25),row([-160,0,0],34,23),row([-110,0,0],29,20),row([-80,0,0],26.5,18)],'manga','sleeve',faces,p=>p);
 faces.push({id:'manga',part:'sleeve',points:sleeve[0].slice().reverse()});
 makeTube([row([-83,0,0],27,18.5),row([-76,0,0],26,17.5)],'borda-manga','cuff',faces,p=>p);
 const wr=makeTube([row([-78,0,0],25,17),row([-50,0,0],24,15.5),row([-28,0,0],22.5,14),row([-8,0,0],22,13),row([5,0,0],22,13)],'punho','skin',faces,bridge);
 const opposition=s.gesture==='pinca'?unit(sub(g.thumb.joints[3],g.fingers[0].joints[3])):null;
 const roots=[digit(g.thumb,faces,hand,true,opposition?mul(opposition,-1):null),...g.fingers.map((f,i)=>digit(f,faces,hand,false,i===0?opposition:null))];
 palm(faces,g,roots,wr.at(-1),hand);
 fairPalm(faces);
 return faces;
}
const rgb=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
const cache=new Map();
/** Pure pixels, fixed 960Ã—540. Cache never returns its own backing storage. */
export function rasterize(s,theme){
 const key=JSON.stringify([s,theme]);if(cache.has(key))return cache.get(key).slice();
 const W=960,H=540,rgba=new Uint8ClampedArray(W*H*4),depth=new Float32Array(W*H).fill(-Infinity),bg=rgb(theme.fundo);
 for(let i=0;i<W*H;i++){rgba[i*4]=bg[0];rgba[i*4+1]=bg[1];rgba[i*4+2]=bg[2];rgba[i*4+3]=255;}
 const faces=surfaceMesh(s),normals=new Map(),palmVertices=new Set(),otherVertices=new Set();
 for(const f of faces)for(const p of f.points)(f.id==='palma'?palmVertices:otherVertices).add(p);
 for(const f of faces){const n=cross(sub(f.points[1],f.points[0]),sub(f.points[2],f.points[0]));for(const p of f.points){const old=normals.get(p);if(old){old[0]+=n[0];old[1]+=n[1];old[2]+=n[2];}else normals.set(p,n.slice());}}
 for(const [k,n] of normals){let u=unit(n);if(palmVertices.has(k)&&!otherVertices.has(k)){const front=unit(wrist([0,0,1],s.flex,s.deviation)),sign=dot(u,front)>=0?1:-1,normal=mul(front,sign),weight=.48*smooth((Math.abs(dot(u,front))-.3)/.55);u=unit(mix(u,normal,weight));}normals.set(k,u);}
 // Generic volume study, configurable independently of the channel palette.
 const volume=theme.maoVolume??{},baseShade=volume.base??.05,shadeAmplitude=volume.amplitude??.26,lit=unit(volume.light??light);
 const C=s.view==='pinca-lateral'?[0,-1,0]:cam,projected=new Map(),colors={skin:rgb(theme.papel),sleeve:rgb(theme.contraparte),cuff:rgb(theme.contorno)};
 for(const f of faces){const color=colors[f.part],pts=f.points.map(p=>{if(projected.has(p))return projected.get(p);let n=normals.get(p);if(dot(n,C)<0)n=mul(n,-1);const q=[...P(p,s.view),clamp(baseShade+shadeAmplitude*(1-Math.max(0,dot(n,lit))))];projected.set(p,q);return q;});
  for(let k=1;k<pts.length-1;k++){
   const a=pts[0],b=pts[k],c=pts[k+1],den=(b[1]-c[1])*(a[0]-c[0])+(c[0]-b[0])*(a[1]-c[1]);if(Math.abs(den)<1e-7)continue;
   const minX=Math.max(0,Math.floor(Math.min(a[0],b[0],c[0]))),maxX=Math.min(W-1,Math.ceil(Math.max(a[0],b[0],c[0]))),minY=Math.max(0,Math.floor(Math.min(a[1],b[1],c[1]))),maxY=Math.min(H-1,Math.ceil(Math.max(a[1],b[1],c[1])));
   const ux=(b[1]-c[1])/den,uy=(c[0]-b[0])/den,vx=(c[1]-a[1])/den,vy=(a[0]-c[0])/den;
   for(let y=minY;y<=maxY;y++){let u=ux*(minX+.5-c[0])+uy*(y+.5-c[1]),v=vx*(minX+.5-c[0])+vy*(y+.5-c[1]);for(let x=minX;x<=maxX;x++,u+=ux,v+=vx){const w=1-u-v;if(u<0||v<0||w<0)continue;const z=u*a[2]+v*b[2]+w*c[2],i=y*W+x;if(z<=depth[i])continue;depth[i]=z;const d=u*a[3]+v*b[3]+w*c[3];for(let j=0;j<3;j++)rgba[i*4+j]=color[j]*(1-d)+bg[j]*d;}}
  }
 }
 cache.set(key,rgba);if(cache.size>4)cache.delete(cache.keys().next().value);return rgba.slice();
}
let offscreen=null,offctx=null;
export function draw(ctx,s,theme,debug=false){
 const pixels=rasterize(s,theme);
 if(!offscreen){
  if(typeof OffscreenCanvas!=='undefined')offscreen=new OffscreenCanvas(960,540);
  else if(typeof document!=='undefined'&&document.createElement){offscreen=document.createElement('canvas');offscreen.width=960;offscreen.height=540;}
  else throw new Error('O desenho requer OffscreenCanvas ou um canvas auxiliar fornecido pelo DOM. Use rasterize() para obter pixels em ambiente sem canvas.');
  offctx=offscreen.getContext('2d');
 }
 const d=offctx.createImageData(960,540);d.data.set(pixels);offctx.putImageData(d,0,0);ctx.save();ctx.drawImage(offscreen,0,0);ctx.restore();
 if(debug){ctx.save();ctx.strokeStyle=theme.risco;ctx.lineWidth=1.5;for(const f of [...s.fingers,s.thumb]){ctx.beginPath();f.joints.map(p=>P(p,s.view)).forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.stroke();}ctx.restore();}
}
