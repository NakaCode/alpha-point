/** v003: new proportions and a frontal graphic construction.
 * Four fingers: 3D FK drives the visible projected skin. Palm and closing thumb: authored paths.
 * Pinch: directed 2D contours from a separate component; no physical finger-length claim.
 * The earlier drawPose() plates are retained as shape references, not used to animate.
 */
import {samplePinch,drawPinch,geometryPinch} from './pinca-forma-v003.mjs';
export const meta={id:'maos-movimento',title:'Mãos, dedos e punho · desenho revisado',duration:12,summary:'Palma e dedos redesenhados, fechamento progressivo, punho articulado e pinça em vista palmar.',limitations:'Quatro dedos usam FK; a superfície da palma e o polegar de fechamento são desenho dirigido. Sem forças nem colisão global. Pinça desenhada em 2D, sem simulação física nem conservação dos ossos nessa modalidade.',controls:[{key:'gesto',label:'Movimento da mão',type:'select',default:'fechamento',options:[{value:'fechamento',label:'Fechamento progressivo'},{value:'pinca',label:'Pinça de precisão'},{value:'punho',label:'Flexão e desvio do punho'}]}],stage:'animated-shape-review',view:'slightly oblique palmar orthographic view; yaw atan(.15), pitch atan(.20)'};
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const smooth=x=>{x=clamp(x);return x*x*x*(10+x*(-15+6*x));};
export function sample(time,options={}){
 if(!Number.isFinite(time))throw new TypeError('Tempo finito requerido.');
 const gesture=options.gesto??'fechamento';if(!['fechamento','pinca','punho'].includes(gesture))throw new RangeError('Gesto desconhecido.');
 const t=clamp(time,0,12),phase=smooth((t-1)/3)*(1-smooth((t-7)/3.3)),gate=smooth(t/.8)*(1-smooth((t-11.2)/.8));
 const flex=gesture==='punho'?29*Math.sin(Math.PI*2*(t-.8)/5.2)*gate:0,deviation=gesture==='punho'?9*Math.sin(Math.PI*2*(t-.8)/7.4)*gate:0;
 if(gesture==='pinca'){const pinch=samplePinch(t,phase);return{t,gesture,phase,q:phase,flex:0,deviation:0,fingers:[],pinch,representation:{fingers:'directed 2D contours',thumb:'directed 2D contours',palm:'drawn silhouette'},contacts:{active:phase>1-1e-9,measured:false,dimension:2,marks:pinch.contact},wrist:[0,0,0]};}
 const q=gesture==='punho'?.018:phase,fingers=fingersAt(q);
 return{t,gesture,phase,q,flex,deviation,fingers,thumbPhase:smooth((q-.20)/.80),pose:q<.1?'aberta':q>.9?'fechada':'intermediaria',representation:{fingers:'FK 3D drives skin paths',thumb:'directed contour poses',palm:'drawn silhouette'},contacts:{active:false,measured:false},wrist:[0,0,0]};
}

const OPEN=[
 ['M',-48,-21],['C',-25,-20,-6,-21,10,-25],['C',21,-29,26,-41,37,-54],
 ['C',45,-64,56,-72,70,-77],['C',78,-80,85,-77,86,-71],['C',87,-65,79,-61,71,-59],
 ['C',62,-56,58,-48,54,-42],['C',51,-37,55,-32,63,-32],['C',70,-33,76,-38,85,-38],
 ['C',104,-39,124,-40,145,-41],['C',151,-41,155,-38,155,-34],['C',155,-29,151,-27,145,-27],
 ['C',123,-25,108,-25,94,-24],['C',88,-24,85,-21,88,-18],
 ['C',107,-17,132,-17,162,-16],['C',169,-16,173,-12,173,-8],['C',173,-3,170,0,163,0],
 ['C',137,0,111,1,96,2],['C',90,2,88,5,91,9],
 ['C',108,9,128,10,149,11],['C',156,12,159,16,158,20],['C',158,25,153,27,147,27],
 ['C',128,27,107,26,90,27],['C',83,27,80,30,82,33],
 ['C',97,34,111,36,123,39],['C',129,40,132,43,131,47],['C',130,51,126,52,120,51],
 ['C',105,49,91,47,79,47],['C',69,50,58,50,47,47],['C',30,43,21,34,8,28],
 ['C',-5,22,-24,22,-48,23],['Z']
];
const CLOSED=[
 ['M',-48,-21],['C',-25,-21,-8,-22,8,-27],['C',21,-32,34,-38,49,-43],
 ['C',65,-48,83,-47,94,-40],['C',107,-38,115,-32,115,-23],
 ['C',115,-17,113,-14,112,-12],['C',120,-6,119,4,113,11],
 ['C',118,19,113,29,108,34],['C',109,43,99,51,87,51],
 ['C',72,54,57,52,44,48],['C',28,42,17,34,6,28],['C',-8,22,-25,22,-48,23],['Z']
];
const THUMB_CLOSED=[
 ['M',13,-23],['C',28,-27,37,-39,54,-49],['C',65,-57,77,-59,87,-52],
 ['C',98,-44,103,-33,105,-20],['C',106,-10,104,-2,101,3],
 ['C',98,8,92,9,88,6],['C',84,3,85,-4,84,-12],['C',83,-22,77,-28,69,-27],
 ['C',59,-24,56,-14,54,-3],['C',50,12,36,15,26,7],['C',17,0,13,-12,13,-23],['Z']
];
const PALM=[['M',-48,-21],['C',-25,-20,-6,-21,10,-25],['C',27,-29,47,-33,66,-34],['C',75,-36,79,-41,85,-41],['C',85,-31,83,-25,82,-19],['C',84,-8,86,8,78,22],['C',65,32,72,45,80,50],['C',69,52,57,51,47,47],['C',30,43,21,34,8,28],['C',-5,22,-24,22,-48,23],['Z']];
const THUMB_HALF=[['M',12,-24],['C',24,-30,29,-42,42,-54],['C',53,-63,66,-66,77,-63],['C',88,-61,96,-57,102,-51],['C',106,-47,105,-41,100,-39],['C',95,-37,90,-41,86,-44],['C',76,-50,66,-48,59,-41],['C',54,-34,50,-27,45,-24],['C',36,-19,24,-18,12,-24],['Z']];
const SPECS=[{id:'indicador',root:[84,-32,0],lengths:[30,20,16],radii:[9,8,7,6.8],closed:[70,90,40],spread:-2},{id:'medio',root:[90,-8,0],lengths:[34,23,17],radii:[10,9,8,7.4],closed:[76,95,42],spread:0},{id:'anelar',root:[84,19,0],lengths:[31,21,16],radii:[9.2,8.4,7.5,6.8],closed:[78,97,42],spread:1.5},{id:'minimo',root:[72,42,0],lengths:[24,17,13],radii:[7.6,7,6,5.6],closed:[81,96,40],spread:5}];
const Vadd=(a,b)=>a.map((v,i)=>v+b[i]),Vsub=(a,b)=>a.map((v,i)=>v-b[i]),Vmul=(a,s)=>a.map(v=>v*s),Vunit=a=>Vmul(a,1/(Math.hypot(...a)||1));
function fingersAt(q){return SPECS.map((s,i)=>{let angle=0;const joints=[s.root.slice()],angles=[],curl=Math.pow(q,[1.2,1.05,.93,.82][i]),spread=s.spread*Math.PI/180*(1-curl*.8);for(let j=0;j<3;j++){const a=s.closed[j]*Math.pow(curl,[1.5,.55,.85][j]);angles.push(a);angle+=a*Math.PI/180;joints.push(Vadd(joints[j],[s.lengths[j]*Math.cos(angle)*Math.cos(spread),s.lengths[j]*Math.sin(spread),s.lengths[j]*Math.sin(angle)*Math.cos(spread)]));}return {id:s.id,root:s.root.slice(),lengths:s.lengths.slice(),radii:s.radii.slice(),closed:s.closed.slice(),spread:s.spread,joints,angles,curl};});}
function convex(points){const p=points.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]),cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]),lo=[],hi=[];for(const a of p){while(lo.length>1&&cross(lo.at(-2),lo.at(-1),a)<=0)lo.pop();lo.push(a);}for(const a of p.slice().reverse()){while(hi.length>1&&cross(hi.at(-2),hi.at(-1),a)<=0)hi.pop();hi.push(a);}return lo.slice(0,-1).concat(hi.slice(0,-1));}
function fingerPaths(f){
 const rings=[],widen=1+.13*f.curl;
 for(let i=0;i<3;i++)for(let k=0;k<=4;k++){
  if(i&&k===0)continue;const u=k/4,a=f.joints[i],b=f.joints[i+1],center=a.map((v,j)=>v+(b[j]-v)*u),axis=Vunit(Vsub(b,a)),r=(f.radii[i]*(1-u)+f.radii[i+1]*u)*widen;
  rings.push(Array.from({length:18},(_,n)=>{const t=n*Math.PI/9;return[center[0]-axis[2]*r*.87*Math.sin(t),center[1]+r*Math.cos(t)];}));
 }
 const end=f.joints[3],axis=Vunit(Vsub(end,f.joints[2])),radius=f.radii[3]*widen;
 for(let k=1;k<=5;k++){const a=Math.PI/2*k/5,r=radius*Math.cos(a),center=Vadd(end,Vmul(axis,radius*.9*Math.sin(a)));rings.push(Array.from({length:18},(_,n)=>{const t=n*Math.PI/9;return[center[0]-axis[2]*r*.87*Math.sin(t),center[1]+r*Math.cos(t)];}));}
 return rings.slice(1).map((ring,i)=>({zone:Math.min(rows[i].zone,rows[i+1].zone),commands:convex(rings[i].concat(ring)).map((p,i)=>[i?'L':'M',...p]).concat([['Z']])}));
}
function drawHalf(ctx,theme){
 const fingers=fingersAt(.5);
 fill(ctx,PALM,theme.papel);
 for(const f of fingers)for(const p of fingerPaths(f))fill(ctx,p,theme.papel);
 for(const f of fingers){const end=f.joints[3],r=f.radii[3],pip=f.joints[1],dip=f.joints[2];
  const pad=[['M',dip[0]+2,dip[1]-f.radii[2]*.94],['C',dip[0]+3,dip[1]-f.radii[2],end[0]-4,end[1]-r,end[0]-5,end[1]],['C',end[0]-4,end[1]+r,dip[0]+3,dip[1]+f.radii[2],dip[0]+2,dip[1]+f.radii[2]*.94],['Z']];fill(ctx,pad,theme.contorno,.10);
  const fold=[['M',end[0]-2,end[1]-r*.85],['C',end[0]-7,end[1]-r*.6,end[0]-7,end[1]+r*.6,end[0]-2,end[1]+r*.85]];
  line(ctx,fold,theme.contorno,.33,.85);
  line(ctx,[['M',pip[0]+3,pip[1]-f.radii[1]*.75],['Q',pip[0]+5,pip[1],pip[0]+3,pip[1]+f.radii[1]*.75]],theme.contorno,.18,.7);
 }
 fill(ctx,THUMB_HALF,theme.papel);
 fill(ctx,[['M',21,-26],['C',31,-34,42,-46,55,-43],['C',64,-39,72,-30,84,-29],['L',71,-17],['L',24,-15],['Z']],theme.papel);
 line(ctx,[['M',66,-48],['C',76,-50,84,-43,91,-40]],theme.contorno,.22,.75);
 line(ctx,[['M',61,-23],['C',49,-18,41,-7,38,7]],theme.contorno,.23,.8);
}
function path(ctx,commands){ctx.beginPath();for(const [op,...p] of commands){if(op==='M')ctx.moveTo(...p);else if(op==='L')ctx.lineTo(...p);else if(op==='C')ctx.bezierCurveTo(...p);else if(op==='Q')ctx.quadraticCurveTo(...p);else ctx.closePath();}}
function fill(ctx,commands,color,alpha=1){ctx.globalAlpha=alpha;ctx.fillStyle=color;path(ctx,commands);ctx.fill();ctx.globalAlpha=1;}
function line(ctx,commands,color,alpha=.2,width=.8){ctx.globalAlpha=alpha;ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineCap='round';ctx.lineJoin='round';path(ctx,commands);ctx.stroke();ctx.globalAlpha=1;}
/** Draw in anatomical local space: wrist at0, fingers+X, thumb-Y. */
export function drawPose(ctx,pose,theme,options={}){
 if(!['aberta','fechada','intermediaria'].includes(pose))throw new RangeError('Esta prancha só contém aberta e fechada.');
 ctx.save();
 // Forearm and cuff are intentionally modest; the hand silhouette is the subject.
 fill(ctx,[['M',-50,-24],['L',-23,-22],['L',-23,24],['L',-50,27],['Z']],theme.superficie);
 if(pose==='intermediaria')drawHalf(ctx,theme);else fill(ctx,pose==='aberta'?OPEN:CLOSED,theme.papel);
 fill(ctx,[['M',-49,-24],['L',-25,-22],['L',-25,24],['L',-49,26],['Z']],theme.superficie);
 fill(ctx,[['M',-28,-22],['L',-24,-22],['L',-24,24],['L',-28,24],['Z']],theme.contorno,.72);
 if(options.silhouette||pose==='intermediaria'){ctx.restore();return;}
 if(pose==='aberta'){
  // Two restrained palmar folds, with no fan of struts linking finger roots to the wrist.
  line(ctx,[['M',57,-31],['C',45,-26,40,-13,38,0],['C',37,12,28,18,20,20]],theme.contorno,.28,.85);
  line(ctx,[['M',70,-24],['C',77,-14,77,1,73,13],['C',70,22,65,27,60,30]],theme.contorno,.22,.75);
  for(const [x,y,w] of [[118,-33,9],[132,-8,10],[122,19,9],[102,42,7]])line(ctx,[['M',x,y-w*.45],['Q',x-1.5,y,x,y+w*.45]],theme.contorno,.17,.65);
  line(ctx,[['M',64,-66],['Q',65,-62,67,-60]],theme.contorno,.20,.7);
 }else{
  // Broad rolled fingers, viewed obliquely from the palm; the thumb occludes index and middle.
  for(const [y,w,x,tip] of [[-26,22,111,69],[-1,25,115,65],[23,23,110,61],[43,20,99,58]]){
   const patch=[['M',tip+5,y-w*.42],['C',tip+18,y-w*.56,x-7,y-w*.50,x,y-w*.25],['C',x+7,y,x+5,y+w*.32,x-3,y+w*.44],['C',x-16,y+w*.51,tip+4,y+w*.46,tip,y+w*.2],['C',tip-5,y,tip,y-w*.27,tip+5,y-w*.42],['Z']];
   fill(ctx,patch,theme.contorno,.065);
   line(ctx,[['M',tip+2,y+w*.32],['C',tip+12,y+w*.50,x-7,y+w*.51,x,y+w*.30]],theme.contorno,.38,.95);
  }
  fill(ctx,THUMB_CLOSED,theme.papel);
  // Deliberate overlap contour: it describes the thumb rather than a decorative smile.
  line(ctx,[['M',69,-27],['C',77,-28,83,-22,84,-12],['C',85,-4,84,3,88,6],['C',92,9,98,8,101,3]],theme.contorno,.48,1.0);
  line(ctx,[['M',54,-3],['C',51,9,42,14,32,11]],theme.contorno,.22,.8);
  line(ctx,[['M',85,-19],['Q',94,-21,104,-18]],theme.contorno,.23,.8);
  const nail=[['M',91,-9],['C',94,-11,99,-10,101,-7],['L',99,1],['C',97,4,93,5,91,2],['C',90,-1,90,-5,91,-9],['Z']];
  fill(ctx,nail,theme.contorno,.075);line(ctx,nail,theme.contorno,.22,.6);

 }
 ctx.restore();
}
const THUMB_OPEN=[['M',12,-24],['C',24,-28,29,-42,39,-55],['C',49,-65,61,-73,74,-77],['C',81,-80,86,-76,86,-71],['C',86,-67,82,-64,77,-62],['C',73,-60,68,-59,64,-55],['C',60,-51,57,-45,54,-42],['C',51,-37,55,-32,63,-32],['C',61,-24,55,-18,49,-11],['C',44,-5,37,-4,29,-8],['C',21,-12,15,-18,12,-24],['Z']];
function poseMix(a,b,q){return a.map((cmd,i)=>cmd.map((v,j)=>j?v+(b[i][j]-v)*q:v));}
function worldPoint(p,s){const x=p[0],weight=smooth((x+24)/28),a=s.flex*Math.PI/180*weight,d=s.deviation*Math.PI/180*weight,q=[x*Math.cos(a)-p[2]*Math.sin(a),p[1],x*Math.sin(a)+p[2]*Math.cos(a)];return[q[0]*Math.cos(d)-q[1]*Math.sin(d),q[0]*Math.sin(d)+q[1]*Math.cos(d),q[2]];}
const CAMERA_YAW=Math.atan(.15),CAMERA_PITCH=Math.atan(.20);
function camera(p){const ca=Math.cos(CAMERA_YAW),sa=Math.sin(CAMERA_YAW),cb=Math.cos(CAMERA_PITCH),sb=Math.sin(CAMERA_PITCH);return[ca*p[0]+sa*p[2],-sb*sa*p[0]+cb*p[1]+sb*ca*p[2]];}
function localProjection(p,s){if(s.gesture==='pinca')return[p[0],p[1]];return camera(worldPoint(p,s));}
function stage(p){return[480+1.85*p[1],370-1.85*p[0]];}
function commandsProjected(commands,s,z=0,rigid=false){return commands.map(([op,...xy])=>{const out=[op];for(let i=0;i<xy.length;i+=2)out.push(...stage(rigid?(s.gesture==='pinca'?[xy[i],xy[i+1]]:camera([xy[i],xy[i+1],z])):localProjection([xy[i],xy[i+1],z],s)));return out;});}
function fingerSurfaces(f,s){
 const rows=[],widen=1+.32*f.curl,point=(p,r,axis,zone=0)=>({p,r:r*widen,axis,zone});
 const joints=f.joints,r=f.radii;
 rows.push(point(joints[0],r[0],Vunit(Vsub(joints[1],joints[0]))));
 for(let i=0;i<3;i++){
  const a=joints[i],b=joints[i+1],axis=Vunit(Vsub(b,a)),L=Math.hypot(...Vsub(b,a)),mid=a.map((v,j)=>v+(b[j]-v)*.5);
  rows.push(point(mid,(r[i]+r[i+1])*.5,axis,i));
  if(i<2){const next=Vunit(Vsub(joints[i+2],b)),before=Vsub(b,Vmul(axis,3)),after=Vadd(b,Vmul(next,3));rows.push(point(before,r[i+1],axis,i));for(let k=1;k<=3;k++){const t=k/3,p=Vadd(Vadd(Vmul(before,(1-t)**2),Vmul(b,2*t*(1-t))),Vmul(after,t*t));rows.push(point(p,r[i+1],Vunit(axis.map((v,j)=>v+(next[j]-v)*t)),i));}}
  else rows.push(point(b,r[3],axis,2));
 }
 const end=joints[3],axis=Vunit(Vsub(end,joints[2]));for(let k=1;k<=5;k++){const a=k*Math.PI/10;rows.push(point(Vadd(end,Vmul(axis,r[3]*.9*Math.sin(a))),r[3]*Math.cos(a),axis,2));}
 const rings=rows.map(row=>Array.from({length:20},(_,i)=>{const a=i*Math.PI/10,p=[row.p[0]-row.axis[2]*row.r*.88*Math.sin(a),row.p[1]+row.r*Math.cos(a),row.p[2]+row.axis[0]*row.r*.88*Math.sin(a)];return stage(localProjection(p,s));}));
 return rings.slice(1).map((ring,i)=>({zone:Math.min(rows[i].zone,rows[i+1].zone),commands:convex(rings[i].concat(ring)).map((p,i)=>[i?'L':'M',...p]).concat([['Z']])}));
}
/** The path commands below are the actual visible geometry in 960x540 screen space. */
export function geometry(s){
 if(s.gesture==='pinca'){const pg=geometryPinch(s.pinch),paths=[{id:'palma',commands:commandsProjected(pg.palm,s),fillRole:'papel',strokeRole:null,alpha:1,width:0}];for(const part of pg.parts){const commands=part.outline.map((p,i)=>[i?'L':'M',...stage(p)]).concat([['Z']]);paths.push({id:part.id,commands,fillRole:'papel',strokeRole:null,alpha:1,width:0});}if(pg.web)paths.push({id:'comissura-polegar',commands:commandsProjected(pg.web,s),fillRole:'papel',strokeRole:null,alpha:1,width:0});for(const [id,commands,fillRole,alpha]of [['manga',[['M',-49,-24],['L',-25,-22],['L',-25,24],['L',-49,26],['Z']],'superficie',1],['borda-manga',[['M',-28,-22],['L',-24,-22],['L',-24,24],['L',-28,24],['Z']],'contorno',.72]])paths.push({id,commands:commandsProjected(commands,s,0,true),fillRole,strokeRole:null,alpha,width:0});return{paths,projectedJoints:[],space:[960,540],representation:'directed 2D contours; decorative strokes are drawn by drawPinch',view:'frontal palmar',contact:pg.contact};}
 const paths=[],push=(id,commands,fillRole='papel',alpha=1,strokeRole=null,width=0,z=0,rigid=false)=>paths.push({id,commands:commandsProjected(commands,s,z,rigid),fillRole,strokeRole,alpha,width});
 const lineAdd=(id,c,alpha=.22,width=.8,z=0)=>push(id,c,null,alpha,'contorno',width*1.85,z);
 push('manga',[['M',-50,-24],['L',-23,-22],['L',-23,24],['L',-50,27],['Z']],'superficie',1,null,0,0,true);
 // A subtle side plane makes wrist flexion distinguishable from planar deviation.
 const sideAmount=Math.abs(s.flex)/29;
 if(sideAmount>.001)push('espessura-palmar',PALM,'contorno',.12*sideAmount,null,0,s.flex>0?-6:6);
 push('palma',PALM);
 for(const f of s.fingers){const [x,y]=f.joints[0],r=f.radii[0];if(f.id==='indicador'||f.id==='minimo'){const ya=f.id==='indicador'?y:y-r,yb=f.id==='indicador'?y+r:y;push(f.id+'-base-interna',[['M',x-11,ya],['L',x+7,ya],['L',x+7,yb],['L',x-11,yb],['Z']]);continue;}push(f.id+'-base',[['M',x-17,y-r],['C',x-7,y-r*1.04,x+4,y-r,x+8,y-r*.97],['L',x+8,y+r*.97],['C',x+4,y+r,x-7,y+r*1.04,x-17,y+r],['Z']]);}
 for(let i=0;i<3;i++){const a=s.fingers[i],b=s.fingers[i+1],ay=a.joints[0][1]+a.radii[0]*.97,by=b.joints[0][1]-b.radii[0]*.97,ax=a.joints[0][0]+10,bx=b.joints[0][0]+10,vx=Math.min(a.joints[0][0],b.joints[0][0])+3,vy=(ay+by)/2;push('comissura-'+i,[['M',ax-23,ay-3],['L',ax,ay],['C',vx+4,ay,vx,vy-1,vx,vy],['C',vx,vy+1,vx+4,by,bx,by],['L',bx-23,by+3],['Z']],'papel',1-smooth((s.q-.65)/.25));}
 const surfaces=s.fingers.map(f=>fingerSurfaces(f,s));
 for(let fi=0;fi<s.fingers.length;fi++){const f=s.fingers[fi];for(const surface of surfaces[fi])paths.push({id:f.id,commands:surface.commands,fillRole:'papel',strokeRole:null,alpha:1,width:0});}
 // The folded distal pads sit in front of the palm, never underneath a distal palm mask.
 for(let fi=0;fi<s.fingers.length;fi++){
  const f=s.fingers[fi],q=smooth((f.curl-.14)/.64),axis=Vunit(Vsub(f.joints[3],f.joints[2])),r=f.radii[3]*(1+.32*f.curl);
  if(q>.001){
   const commands=surfaces[fi].filter(p=>p.zone===2).flatMap(p=>p.commands);
   paths.push({id:f.id+'-polpa',commands,fillRole:'contorno',strokeRole:null,alpha:.07*q,width:0});
   const end=f.joints[3],left=Vadd(Vadd(end,Vmul(axis,r*.30)),[0,-r*.80,0]),right=Vadd(Vadd(end,Vmul(axis,r*.30)),[0,r*.80,0]),mid=Vadd(end,Vmul(axis,r*.98));
   const a=stage(localProjection(left,s)),b=stage(localProjection(mid,s)),c=stage(localProjection(right,s));
   paths.push({id:f.id+'-dobra',commands:[['M',...a],['Q',...b,...c]],fillRole:null,strokeRole:'contorno',alpha:.34*q,width:1.25});
  }else{const p=f.joints[1];lineAdd(f.id+'-prega',[['M',p[0],p[1]-f.radii[1]*.45],['Q',p[0]-1.5,p[1],p[0],p[1]+f.radii[1]*.45]],.17,.65,p[2]);}
 }
 const thumb=poseMix(THUMB_OPEN,THUMB_CLOSED,s.thumbPhase);
 push('polegar',thumb);
 const palmFold=poseMix([['M',57,-31],['C',45,-26,40,-13,38,0],['C',37,12,28,18,20,20]],[['M',54,-3],['C',51,9,42,14,32,11],['C',28,10,25,7,24,5]],s.thumbPhase);
 lineAdd('prega-tenar',palmFold,.25,.8);
 if(s.thumbPhase>.04){const contour=[['M',...thumb[5].slice(-2)],...thumb.slice(6,8)];lineAdd('sobreposicao-polegar',contour,.42*s.thumbPhase,.9);}
 const nip=poseMix([['M',64,-66],['C',67,-62,72,-59,77,-61]],[['M',85,-19],['C',91,-21,98,-20,104,-18]],s.thumbPhase);lineAdd('prega-polegar',nip,.20,.7);
 if(s.thumbPhase>.6){const nail=[['M',91,-9],['C',94,-11,99,-10,101,-7],['L',99,1],['C',97,4,93,5,91,2],['C',90,-1,90,-5,91,-9],['Z']];push('unha-polegar',nail,'contorno',.07*smooth((s.thumbPhase-.6)/.4));}
 if(s.q<.6)lineAdd('prega-palmar',[['M',70,-24],['C',77,-14,77,1,73,13],['C',70,22,65,27,60,30]],.2*(1-s.q/.6),.75);
 push('manga-frente',[['M',-50,-24],['L',-26,-22],['L',-26,24],['L',-50,27],['Z']],'superficie',1,null,0,0,true);
 push('borda-manga',[['M',-28,-22],['L',-24,-22],['L',-24,24],['L',-28,24],['Z']],'contorno',.72,null,0,0,true);
 const projectedJoints=s.fingers.map(f=>({id:f.id,points:f.joints.map(p=>stage(localProjection(p,s)))}));
 return{paths,projectedJoints,space:[960,540],representation:'FK finger skin + authored palm/thumb poses',view:meta.view};
}
export function draw(ctx,state,theme,debug=false){
 if(state.gesture==='pinca'){ctx.save();ctx.fillStyle=theme.fundo;ctx.fillRect(0,0,960,540);ctx.translate(480,370);ctx.rotate(-Math.PI/2);ctx.scale(1.85,1.85);drawPinch(ctx,state.pinch,theme,{silhouette:false});if(debug){ctx.strokeStyle=theme.risco;ctx.lineWidth=.7;for(const a of [state.pinch.contact.index,state.pinch.contact.thumb]){ctx.beginPath();ctx.arc(a[0],a[1],2,0,Math.PI*2);ctx.stroke();}}ctx.restore();return;}
 const g=geometry(state);ctx.save();ctx.fillStyle=theme.fundo;ctx.fillRect(0,0,960,540);
 for(let i=0;i<g.paths.length;i++){const p=g.paths[i];ctx.globalAlpha=p.alpha;if(p.fillRole==='papel'&&!p.strokeRole&&p.alpha===1){const commands=p.commands.slice();while(i+1<g.paths.length){const n=g.paths[i+1];if(n.fillRole!=='papel'||n.strokeRole||n.alpha!==1)break;commands.push(...n.commands);i++;}path(ctx,commands);ctx.fillStyle=theme.papel;ctx.fill();continue;}path(ctx,p.commands);if(p.fillRole){ctx.fillStyle=theme[p.fillRole];ctx.fill();}if(p.strokeRole){ctx.strokeStyle=theme[p.strokeRole];ctx.lineWidth=p.width;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke();}}
 ctx.globalAlpha=1;
 if(debug){ctx.strokeStyle=theme.risco;ctx.lineWidth=1.2;for(const f of g.projectedJoints){ctx.beginPath();f.points.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.stroke();}}
 ctx.restore();
}
