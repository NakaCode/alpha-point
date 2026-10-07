/** Pinça gráfica para a vista palmar v003. Poses desenhadas em 2D, não IK 3D.
 * +X aponta aos dedos; -Y ao polegar. Sem câmera ou relógio neste módulo.
 */
const lerp=(a,b,t)=>a+(b-a)*t;
const clamp=x=>Math.max(0,Math.min(1,x));
const smooth=x=>{x=clamp(x);return x*x*(3-2*x)};
const blend=(a,b,t)=>a.map((v,i)=>lerp(v,b[i],t));
const PALM=[['M',-48,-21],['C',-25,-20,-6,-21,10,-25],['C',24,-32,27,-39,40,-39],['C',58,-40,69,-33,85,-38],['C',86,-28,89,-22,87,-16],['C',91,-8,92,4,88,13],['C',86,21,88,27,81,33],['C',83,40,81,44,79,47],['C',69,50,58,50,47,47],['C',30,43,21,34,8,28],['C',-5,22,-24,22,-48,23],['Z']];
const WEB_OPEN=[['M',58,-42],['C',52,-36,66,-30,88,-31],['L',94,-15],['L',45,-10],['L',45,-36],['Z']];
const WEB_PINCH=[['M',83,-58],['C',75,-51,82,-43,95,-35],['L',94,-15],['L',45,-10],['L',45,-45],['Z']];
function catmull(points,u){const k=Math.min(points.length-2,Math.floor(u)),t=u-k,p0=points[Math.max(0,k-1)],p1=points[k],p2=points[k+1],p3=points[Math.min(points.length-1,k+2)];return p1.map((_,j)=>.5*((2*p1[j])+(-p0[j]+p2[j])*t+(2*p0[j]-5*p1[j]+4*p2[j]-p3[j])*t*t+(-p0[j]+3*p1[j]-3*p2[j]+p3[j])*t*t*t));}
function ribbon(nodes,radii){
 const left=[],right=[],n=60,points=[];
 for(let i=0;i<=n;i++){
  const u=(nodes.length-1)*i/n,p=catmull(nodes,u),a=catmull(nodes,Math.max(0,u-.005)),b=catmull(nodes,Math.min(nodes.length-1,u+.005)),dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy)||1,k=Math.min(radii.length-2,Math.floor(u)),r=lerp(radii[k],radii[k+1],u-k);
  left.push([p[0]-dy/len*r,p[1]+dx/len*r]);right.push([p[0]+dy/len*r,p[1]-dx/len*r]);points.push(p);
 }
 const p=points.at(-1),d=[p[0]-points.at(-2)[0],p[1]-points.at(-2)[1]],angle=Math.atan2(d[1],d[0]),cap=[];
 for(let i=1;i<13;i++){const a=angle+Math.PI/2-i*Math.PI/12;cap.push([p[0]+Math.cos(a)*radii.at(-1),p[1]+Math.sin(a)*radii.at(-1)]);}
 return {outline:[...left,...cap,...right.reverse()],spine:points};
}
const INDEX_OPEN=[[84,-32],[119,-34],[141,-34],[153,-33]];
const INDEX_PINCH=[[84,-32],[119,-26],[137,-42],[111,-48]];
const THUMB_OPEN=[[31,-10],[43,-39],[63,-65],[79,-72]];
const THUMB_PINCH=[[31,-10],[57,-43],[89,-65],[111,-61]];
const REST=[
 {id:'medio',open:[[87,-7],[130,-7],[155,-7],[165,-7]],close:[[87,-7],[125,-5],[150,-3],[158,-1]],r:[8.8,8.5,7.7,7.2]},
 {id:'anelar',open:[[83,20],[119,20],[141,20],[150,20]],close:[[83,20],[116,21],[136,23],[142,25]],r:[8.1,8,7.1,6.7]},
 {id:'minimo',open:[[77,41],[101,43],[120,45],[125,45]],close:[[77,41],[97,43],[110,45],[115,47]],r:[6.6,6.3,5.8,5.4]}
];
export function samplePinch(t,phase){
 if(!Number.isFinite(t))throw new TypeError('Tempo finito requerido.');
 if(phase===undefined)phase=smooth((t-1)/3)*(1-smooth((t-7)/3.3));
 if(!Number.isFinite(phase))throw new TypeError('Fase finita requerida.');phase=clamp(phase);
 const indexNodes=INDEX_OPEN.map((p,i)=>blend(p,INDEX_PINCH[i],phase));
 const thumbNodes=THUMB_OPEN.map((p,i)=>blend(p,THUMB_PINCH[i],phase));
 const index={id:'indicador',nodes:indexNodes,radii:[8,7.5,6.8,6],...ribbon(indexNodes,[8,7.5,6.8,6])};
 const thumb={id:'polegar',nodes:thumbNodes,radii:[20,15,10,8],...ribbon(thumbNodes,[20,15,10,8])};
 const rest=REST.map((f,i)=>{const amount=phase*(.84+i*.055),nodes=f.open.map((p,j)=>blend(p,f.close[j],amount));return {id:f.id,nodes,radii:f.r.slice(),...ribbon(nodes,f.r)}});
 const web=WEB_OPEN.map((c,i)=>[c[0],...c.slice(1).map((n,j)=>lerp(n,WEB_PINCH[i][j+1],phase))]);
 return {t,phase,palm:PALM.map(c=>c.slice()),web,index,thumb,rest,contact:{index:[indexNodes[3][0],indexNodes[3][1]-6],thumb:[thumbNodes[3][0],thumbNodes[3][1]+8],type:'marcas 2D de polpas na pose desenhada; pequeno recobrimento gráfico para evitar fresta de antialiasing'}};
}
export function geometryPinch(state){return {palm:state.palm,web:state.web,parts:[...[...state.rest].reverse(),state.index,state.thumb],contact:state.contact,dimension:2,method:'poses vetoriais dirigidas'}};
function path(ctx,commands){ctx.beginPath();for(const[op,...p]of commands){if(op==='M')ctx.moveTo(...p);else if(op==='C')ctx.bezierCurveTo(...p);else if(op==='Q')ctx.quadraticCurveTo(...p);else if(op==='L')ctx.lineTo(...p);else ctx.closePath()}}
function shape(ctx,commands,color,alpha=1){ctx.fillStyle=color;ctx.globalAlpha=alpha;path(ctx,commands);ctx.fill();ctx.globalAlpha=1;}
function stroke(ctx,commands,color,alpha=.28,width=.7){ctx.strokeStyle=color;ctx.globalAlpha=alpha;ctx.lineWidth=width;ctx.lineCap='round';ctx.lineJoin='round';path(ctx,commands);ctx.stroke();ctx.globalAlpha=1;}
function fillRibbon(ctx,part,color){ctx.beginPath();part.outline.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();ctx.fillStyle=color;ctx.fill();}
export function drawPinch(ctx,state,theme,options={}){
 const silhouette=typeof options==='boolean'?options:options.silhouette;
 ctx.save();shape(ctx,state.palm,theme.papel);
 for(const part of [...state.rest].reverse())fillRibbon(ctx,part,theme.papel);
 fillRibbon(ctx,state.index,theme.papel);fillRibbon(ctx,state.thumb,theme.papel);
 // Comissura curva entre a base do polegar e a palma, sem canto de tubo.
 shape(ctx,state.web,theme.papel);
 shape(ctx,[['M',-49,-24],['L',-25,-22],['L',-25,24],['L',-49,26],['Z']],theme.superficie);
 shape(ctx,[['M',-28,-22],['L',-24,-22],['L',-24,24],['L',-28,24],['Z']],theme.contorno,.72);
 if(!silhouette){
  stroke(ctx,[['M',55,-29],['C',43,-23,39,-9,38,0],['C',37,12,28,18,20,20]],theme.contorno,.28,.85);
  stroke(ctx,[['M',70,-21],['C',76,-13,77,0,73,13],['C',70,22,65,27,60,30]],theme.contorno,.22,.75);
  for(const part of state.rest){
   const p=part.nodes[1],r=part.radii[1];stroke(ctx,[['M',p[0]-1,p[1]-r*.62],['Q',p[0]-2,p[1],p[0]-1,p[1]+r*.62]],theme.contorno,.18+state.phase*.12,.75);
   if(state.phase>.05){const q=part.nodes[2];stroke(ctx,[['M',q[0]+1,q[1]-r*.50],['Q',q[0]+3,q[1],q[0]+1,q[1]+r*.50]],theme.contorno,.23*state.phase,.75);}
  }
  const p=state.index.nodes[1];stroke(ctx,[['M',p[0],p[1]-4.5],['Q',p[0]-1,p[1],p[0],p[1]+4.5]],theme.contorno,.25,.75);
  // Linha curta de separação na aproximação; não é pressão ou colisão 3D.
  if(state.phase>.7){const a=state.contact.index,b=state.contact.thumb,alpha=smooth((state.phase-.7)/.3)*.35;stroke(ctx,[['M',a[0]-3,(a[1]+b[1])/2],['Q',a[0],(a[1]+b[1])/2+.7,a[0]+3,(a[1]+b[1])/2]],theme.contorno,alpha,.65);}
 }
 ctx.restore();
}
