// Coupled vertical body + quasi-hydrostatic level, SI units. No CFD or splash model.
export const meta={id:'agua-interacao',title:'Objetos dentro da água',duration:12,
summary:'Solte um corpo, compare flutuação e afundamento ou libere um corpo leve já submerso. O nível responde ao volume deslocado.',
limitations:['Modelo vertical de esfera rígida e nível hidrostático instantâneo; sem ondas propagadas, respingos, tensão superficial ou massa adicionada.','Densidades e arrasto são valores ilustrativos da bancada, sem calibração de material real. A entrada na água usa força hidrostática aproximada.'],
controls:[{key:'caso',label:'Interação',type:'select',default:'flutuar',options:[{value:'flutuar',label:'Cair e flutuar'},{value:'afundar',label:'Cair e afundar'},{value:'emergir',label:'Submerso e solto'}]}]};
export const config=Object.freeze({g:9.81,radius:.4,width:3.2,depth:.95,height:1.8,initialLevel:.95,waterDensity:1000,cd:.8,linearDamping:450,step:1/360,hold:.6});
const cache=new Map(),clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const sphereVolume=4/3*Math.PI*config.radius**3;
export function capVolume(h){const r=config.radius,hc=clamp(h,0,2*r);return hc>=2*r?sphereVolume:Math.PI*hc*hc*(r-hc/3)}
// A level increase displaces the submerged cap; bisection solves the coupled constraint.
export function immersion(y){const c=config,area=c.width*c.depth;let lo=c.initialLevel,hi=lo+sphereVolume/area;for(let i=0;i<42;i++){const mid=(lo+hi)/2,f=mid-c.initialLevel-capVolume(mid-y+c.radius)/area;if(f>0)hi=mid;else lo=mid}const level=(lo+hi)/2,volume=capVolume(level-y+c.radius);return {level,volume,fraction:volume/sphereVolume,waterVolume:area*level-volume}}
function params(caso){if(!['flutuar','afundar','emergir'].includes(caso))throw new RangeError('Caso desconhecido');return{caso,density:caso==='afundar'?1250:420,mass:sphereVolume*(caso==='afundar'?1250:420),y0:caso==='emergir'?.60:2.05}}
export function forces(y,v,p){const c=config,im=immersion(y),buoyancy=c.waterDensity*c.g*im.volume;const drag=-.5*c.waterDensity*c.cd*Math.PI*c.radius*c.radius*im.fraction*v*Math.abs(v)-c.linearDamping*im.fraction*v;return{...im,buoyancy,weight:p.mass*c.g,drag,acceleration:(buoyancy+drag)/p.mass-c.g}}
function derivative(s,p){const f=forces(s[0],s[1],p);if(s[0]<=config.radius&&s[1]<=0&&f.acceleration<0)return[0,0];return[s[1],f.acceleration]}
function rk(s,h,p){const a=derivative(s,p),b=derivative(s.map((v,i)=>v+a[i]*h/2),p),c=derivative(s.map((v,i)=>v+b[i]*h/2),p),d=derivative(s.map((v,i)=>v+c[i]*h),p);let n=s.map((v,i)=>v+h*(a[i]+2*b[i]+2*c[i]+d[i])/6);if(n[0]<config.radius)n=[config.radius,Math.max(0,n[1])];return n}
function history(p,step){const key=p.caso+':'+step;if(cache.has(key))return cache.get(key);const frames=[[p.y0,0]],count=Math.ceil((meta.duration-config.hold)/step);for(let i=0;i<count;i++)frames.push(rk(frames.at(-1),step,p));if(cache.size>8)cache.clear();cache.set(key,frames);return frames}
export function sample(t,options={}){if(!Number.isFinite(t))throw new TypeError('Tempo precisa ser finito');const p=params(options.caso??'flutuar'),step=options._step??config.step;if(!Number.isFinite(step)||step<1/1440||step>1/120)throw new RangeError('Passo fora do domínio');const time=clamp(t,0,meta.duration),local=Math.max(0,time-config.hold),frames=history(p,step),i=Math.min(frames.length-1,Math.floor(local/step)),rest=local-i*step,state=rest>1e-12?rk(frames[i],rest,p):frames[i].slice(),f=forces(state[0],state[1],p),normal=time>=config.hold&&state[0]<=config.radius+1e-8?Math.max(0,p.mass*config.g-f.buoyancy-f.drag):0,holdingForce=time<config.hold?p.mass*config.g-f.buoyancy-f.drag:0;return{time,caso:p.caso,density:p.density,mass:p.mass,y:state[0],velocity:state[1],...f,normal,holdingForce,freeAcceleration:f.acceleration,acceleration:f.acceleration+(normal+holdingForce)/p.mass,targetWaterVolume:config.width*config.depth*config.initialLevel,bodyVolume:sphereVolume,phase:time<config.hold?'antes da soltura':state[0]<=config.radius+1e-5?'apoiado no fundo':f.fraction===0?'queda no ar':Math.abs(state[1])<.003?'equilíbrio de flutuação':state[1]<0?'entrada / descida':'empuxo / subida',bounds:{left:188,right:772,top:80,bottom:458}}}
function path(ctx,points,fill,stroke=null,width=1,alpha=1){ctx.save();ctx.globalAlpha=alpha;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));if(fill){ctx.closePath();ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.lineJoin='round';ctx.stroke()}ctx.restore()}
function arrow(ctx,x,y,dy,color){if(Math.abs(dy)<2)return;ctx.save();ctx.strokeStyle=color;ctx.fillStyle=color;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y+dy);ctx.stroke();const s=Math.sign(dy);ctx.beginPath();ctx.moveTo(x,y+dy);ctx.lineTo(x-5,y+dy-s*8);ctx.lineTo(x+5,y+dy-s*8);ctx.closePath();ctx.fill();ctx.restore()}
export function draw(ctx,s,theme,debug=false){const scale=145,bottom=436,left=248,right=712,top=175,dx=34,dy=-21,waterY=bottom-s.level*scale,initialY=bottom-config.initialLevel*scale,cx=478,cy=bottom-s.y*scale,r=config.radius*scale;
ctx.save();
path(ctx,[[188,458],[772,458]],null,theme.contorno,1.4,.35);
path(ctx,[[left-10,bottom+3],[right+10,bottom+3],[right+dx+10,bottom+dy+3],[left+dx-10,bottom+dy+3]],theme.contorno);
path(ctx,[[left-10,bottom+3],[right+10,bottom+3],[right+10,bottom+12],[left-10,bottom+12]],theme.superficie);
path(ctx,[[left+dx,top+dy],[right+dx,top+dy],[right+dx,bottom+dy],[left+dx,bottom+dy]],theme.papel,theme.contorno,1,.09);
path(ctx,[[left,waterY],[right,waterY],[right,bottom],[left,bottom]],theme.contraparte,null,1,.35);
path(ctx,[[right,waterY],[right+dx,waterY+dy],[right+dx,bottom+dy],[right,bottom]],theme.contraparte,null,1,.48);
path(ctx,[[left,waterY],[right,waterY],[right+dx,waterY+dy],[left+dx,waterY+dy]],theme.contraparte,null,1,.6);
// The sphere is an illustration of the 3D body used by the volume formula.
ctx.fillStyle=theme.protagonista;ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fill();
ctx.save();ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.clip();ctx.fillStyle=theme.papel;ctx.globalAlpha=.21;ctx.beginPath();ctx.ellipse(cx-r*.2,cy-r*.3,r*.6,r*.35,-.55,0,Math.PI*2);ctx.fill();ctx.globalAlpha=.17;ctx.fillStyle=theme.superficie;ctx.beginPath();ctx.arc(cx+r*.8,cy+r*.1,r*1.05,0,Math.PI*2);ctx.fill();ctx.restore();
// The nearby water pane tints the submerged part, preserving the real intersection.
ctx.save();ctx.beginPath();ctx.rect(left,waterY,right-left,bottom-waterY);ctx.clip();ctx.fillStyle=theme.contraparte;ctx.globalAlpha=.25;ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fill();ctx.restore();
path(ctx,[[left,waterY],[right,waterY]],null,theme.papel,1.8,.8);
path(ctx,[[left+dx,waterY+dy],[right+dx,waterY+dy]],null,theme.papel,1,.3);
path(ctx,[[left,top],[left,bottom],[right,bottom],[right,top]],null,theme.papel,3,.8);
path(ctx,[[left,top],[left+dx,top+dy],[right+dx,top+dy],[right,top],[left,top]],null,theme.papel,2,.8);
path(ctx,[[right+dx,top+dy],[right+dx,bottom+dy],[right,bottom]],null,theme.papel,1.5,.5);
if(debug){ctx.save();ctx.setLineDash([5,5]);path(ctx,[[left-10,initialY],[right+10,initialY]],null,theme.contorno,1);ctx.restore();arrow(ctx,cx-18,cy,s.weight/24,theme.risco);arrow(ctx,cx+18,cy,-s.buoyancy/24,theme.tinta)}
ctx.restore();}
