import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {sample,meta} from './corpo.mjs';

const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const digest=v=>crypto.createHash('sha256').update(JSON.stringify(v)).digest('hex');
const allPoints=s=>['near','far'].flatMap(side=>Object.values(s.joints[side]));
let lengthError=0,plantDrift=0,maxPointSpeed=0,minClearance=Infinity,maxReach=0,minKneeCross=Infinity;
let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity,activeCount=Infinity;
const anchors=new Map(),times=Array.from({length:2401},(_,i)=>i/300);
const hashes=times.map(t=>digest(sample(t)));
let previous=null;
for (const t of times) {
  const s=sample(t);
  assert.equal(s.model,'kinematic-reconstruction');
  assert.ok(allPoints(s).every(p=>Number.isFinite(p.x)&&Number.isFinite(p.y)));
  assert.ok(s.bounds.left>=50&&s.bounds.right<=910&&s.bounds.top>=40&&s.bounds.bottom<=465,'safe area');
  minX=Math.min(minX,s.bounds.left);maxX=Math.max(maxX,s.bounds.right);minY=Math.min(minY,s.bounds.top);maxY=Math.max(maxY,s.bounds.bottom);
  activeCount=Math.min(activeCount,s.contacts.filter(c=>c.active).length);
  for (const side of ['near','far']) {
    const l=s.legs[side],a=s.arms[side];
    lengthError=Math.max(lengthError,Math.abs(dist(l.hip,l.knee)-86),Math.abs(dist(l.knee,l.ankle)-85),Math.abs(dist(a.shoulder,a.elbow)-57),Math.abs(dist(a.elbow,a.wrist)-51));
    maxReach=Math.max(maxReach,dist(l.hip,l.ankle));
    const kCross=(l.knee.x-l.hip.x)*(l.ankle.y-l.knee.y)-(l.knee.y-l.hip.y)*(l.ankle.x-l.knee.x);
    minKneeCross=Math.min(minKneeCross,kCross);
    assert.ok(a.flex>=0.18-1e-12&&a.flex<=0.30+1e-12,'elbow flexion remains on intended branch');
    const actualHandTip={x:a.wrist.x+2*Math.cos(a.handAngle)-24*Math.sin(a.handAngle),y:a.wrist.y+2*Math.sin(a.handAngle)+24*Math.cos(a.handAngle)};
    assert.ok(dist(actualHandTip,a.fingertip)<1e-9,'wrist-hand continuity');
    minClearance=Math.min(minClearance,s.ground-Math.max(l.heel.y,l.toe.y));
    if(l.support) {
      const c=s.contacts.find(c=>c.side===side);
      assert.ok(Math.abs(c.point.y-s.ground)<1e-9,'contact lies on ground');
      if(!anchors.has(c.id))anchors.set(c.id,c.point);
      plantDrift=Math.max(plantDrift,dist(c.point,anchors.get(c.id)));
    }
  }
  if(previous) {const a=allPoints(previous),b=allPoints(s);for(let i=0;i<a.length;i++)maxPointSpeed=Math.max(maxPointSpeed,dist(a[i],b[i])*300);}
  previous=s;
}
assert.ok(lengthError<1e-9,'fixed segment lengths');
assert.ok(plantDrift<1e-9,'no contact sliding');
assert.ok(minClearance>=-1e-9,'feet do not cross ground');
assert.ok(activeCount>=1,'walking never enters flight');
assert.ok(minKneeCross>0,'knees never reverse their bend');
assert.ok(maxReach<171-0.5,'avoid full-extension singularity');
assert.ok(maxPointSpeed<300,'no sample-to-sample joint teleport');
assert.ok(sample(8).joints.hip.x-sample(0).joints.hip.x>350,'world displacement is real');
for(let i=times.length-1;i>=0;i--)assert.equal(digest(sample(times[i])),hashes[i],'out-of-order deterministic sample');
assert.equal(digest(sample(-1)),digest(sample(0)));
assert.equal(digest(sample(9)),digest(sample(8)));
const boundaries=[];for(let k=-1;k<5;k++)for(const offset of [0,0.5])for(const f of [0,0.10,0.46,0.60]){const t=(k-offset+f)*(8/3);if(t>0&&t<8)boundaries.push(t);}
let maxBoundaryJump=0;
for(const t of boundaries){const a=allPoints(sample(t-1e-6)),b=allPoints(sample(t+1e-6));for(let i=0;i<a.length;i++)maxBoundaryJump=Math.max(maxBoundaryJump,dist(a[i],b[i]));}
assert.ok(maxBoundaryJump<0.001,'no discontinuity at contact handoff');

const report={study:'movimento-corporal',version:1,status:'PASSOU — auditoria geométrica local',duration:meta.duration,samples:times.length,checks:['finite states','segment lengths','world-locked heel/sole/toe contacts','foot-ground nonpenetration','at least one support','knee branch','bounded elbow flexion','wrist-hand attachment','safe drawing bounds','full extension margin','joint speed bound','contact handoff continuity','reverse order determinism','clamped time'],metrics:{maxSegmentLengthErrorPx:lengthError,maxContactDriftPx:plantDrift,minFootClearancePx:minClearance,maxJointSpeedPxPerSecond:maxPointSpeed,maxHipAnkleDistancePx:maxReach,minKneeCrossProduct:minKneeCross,maxBoundaryJumpPx:maxBoundaryJump,bounds:{left:minX,right:maxX,top:minY,bottom:maxY},minimumActiveSupports:activeCount},limits:['Não mede forças, massa ou torques.','Não é certificação de anatomia humana nem domínio universal de marcha.','Amostragem geométrica e inspeção do produtor não substituem aprovação artística e QC independente.'],artisticApproval:'PENDENTE',officialQC:'NÃO MEDIDO',moduleSha256:crypto.createHash('sha256').update(fs.readFileSync(fileURLToPath(new URL('./corpo.mjs',import.meta.url)))).digest('hex')};
fs.writeFileSync(fileURLToPath(new URL('./resultados.json',import.meta.url)),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
