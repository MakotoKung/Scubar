const D=[
{id:'b',c:'f',n:'Basic Freediver',s:'1 วัน · สระ',p:'฿5,900',d:'คอร์สเริ่มต้นสำหรับทุกคน ว่ายน้ำไม่เป็นก็เรียนได้ รับบัตร SSI Basic Freediver',
 pk:[['Basic Freediver (1 วัน สระ)','฿5,900'],['Basic + Fun Dive เกาะราชา (2 วัน)','฿8,900']],
 sc:[['09:30','เจอกันที่ร้าน Season Dive'],['09:45','ภาคทฤษฎี'],['13:00','ภาคปฏิบัติที่สระ']],
 ln:['Breathwork','Relaxation','Equalization','Duckdive','BO Rescue','ลึกไม่เกิน 5 ม.'],
 inc:['รูปถ่าย & วิดีโอ','ค่าสระ','อุปกรณ์ดำน้ำ','ประกันอุบัติเหตุ']},
{id:'l1',c:'f',n:'Freediver LV1',s:'3 วัน · สระ + ทะเล · 10 ม.',p:'฿11,900',d:'ว่ายน้ำเป็น ลอยตัวได้ และไม่กลัวน้ำ เรียนทฤษฎี + สระ + สอบทะเล รับบัตร SSI Freediver',
 pk:[['LV1 ไม่รวมค่าเรือ','฿9,900'],['LV1 + ค่าเรือ เกาะราชา','฿11,900']],
 sc:[['วัน 1','ทฤษฎี + สระ'],['วัน 2','สระ Hug Ocean'],['วัน 3','สอบทะเลเกาะราชา']],
 ln:['Frenzel EQ','Static 1:30','Dynamic 30 ม.','CWT 10 ม.','BO Rescue'],inc:['รูปถ่าย & วิดีโอ','ค่าสระ','อุปกรณ์','ประกัน']},
{id:'l2',c:'f',n:'Advanced Freediver LV2',s:'3 วัน · 20 ม.',p:'฿15,900',d:'สำหรับผู้จบ LV1 หรือเทียบเท่า ต่อยอดความลึก 20–30 เมตร',
 pk:[['LV2 ไม่รวมค่าเรือ','฿11,900'],['LV2 + ค่าเรือ','฿15,900']],sc:[['วัน 1','ทฤษฎี + สระ'],['วัน 2–3','สอบทะเลเกาะราชา']],
 ln:['Static 2:30','Dynamic 50 ม.','CWT 20 ม.','Towing 25 ม.'],inc:['รูปถ่าย & วิดีโอ','ค่าสระ','อุปกรณ์','ประกัน']},
{id:'l3',c:'f',n:'Performance Freediver LV3',s:'4 วัน · 30 ม.',p:'฿18,900',d:'ระดับสูงสุด Recreational · Mouth Fill EQ · ลึก 30–40 เมตร',
 pk:[['LV3 ไม่รวมค่าเรือ','฿12,900'],['LV3 + ค่าเรือ','฿18,900']],sc:[['วัน 1','ทฤษฎี + สระ'],['วัน 2–4','สอบทะเลเกาะราชา']],
 ln:['Mouth Fill EQ','Static 3:30','Dynamic 75 ม.','Rope rescue 20 ม.'],inc:['รูปถ่าย & วิดีโอ','ค่าสระ','อุปกรณ์','ประกัน']},
{id:'in',c:'f',n:'Freediving Instructor',s:'10–14 วัน · บัตร SSI Instructor',p:'฿45,900',d:'[รายละเอียดคอร์ส Instructor]',pk:[['Freediving Instructor','฿45,900']],sc:[],ln:[],inc:[]},
{id:'zh',c:'f',n:'Zero to Hero Program',s:'LV1+LV2+LV3+Instructor+React Right',p:'฿89,900',d:'โปรแกรมต่อเนื่อง 3 เดือนขึ้นไป [รายละเอียด]',pk:[['Zero to Hero','฿89,900']],sc:[],ln:[],inc:[]},
{id:'tm',c:'m',n:'Try Mermaid',s:'ครึ่งวัน · สระ 3 ชม.',p:'฿3,900',d:'คอร์สทดลองในสระ ว่ายน้ำเป็นก็เรียนได้',pk:[['Try Mermaid','฿3,900']],sc:[],ln:['สวมหาง + Monofin','Dolphin Kick','โพสท่าถ่ายรูปใต้น้ำ'],inc:['ค่าสระ','หาง + Monofin','รูปใต้น้ำ','Certificate']},
{id:'mm',c:'m',n:'Mermaid',s:'1–2 วัน · ทฤษฎี + สระ',p:'฿6,900',d:'ทฤษฎี + ฝึกในสระ รับบัตร SSI Mermaid',pk:[['Mermaid 1 วัน','฿6,900'],['Mermaid + Fun Dive Racha','฿9,900']],sc:[['เช้า','ทฤษฎี'],['บ่าย','ฝึกในสระ']],ln:[],inc:['ค่าสระ','หาง + Monofin','รูปใต้น้ำ','ประกัน']},
{id:'om',c:'m',n:'Ocean Mermaid',s:'3 วัน · สระ 2 + ทะเล 1',p:'฿12,900',d:'สระ 2 วัน + สอบทะเลเกาะราชา 1 วัน รับบัตร SSI Ocean Mermaid',pk:[['Ocean Mermaid','฿12,900']],sc:[['วัน 1–2','ทฤษฎี + สระ'],['วัน 3','สอบทะเลเกาะราชา']],ln:['Dolphin Kick ขั้นสูง','Mermaid ในทะเลเปิด','Pose & Photography'],inc:['ค่าสระ','ค่าเรือ','อาหาร','รูป & วิดีโอ']},
{id:'sr',c:'s',n:'เกาะราชา',s:'1 วัน · 3 Dives',p:'฿3,900',d:'สำหรับผู้มีบัตร Scuba · รวมอาหาร + ประกัน',pk:[['Scuba Racha Islands','฿3,900']],sc:[['07:40','เจอที่ท่าเรือฉลอง'],['10:30','Dive 1'],['12:30','Dive 2'],['14:30','Dive 3'],['17:00','ถึงท่าเรือ']],ln:[],inc:['ค่าเรือ','อาหาร','ประกัน','วิดีโอ Action Cam']},
{id:'sp',c:'s',n:'พีพี + Shark Point',s:'1 วัน · 3 Dives',p:'฿3,900',d:'Leopard Shark & ปะการังสีสัน · ต้องมีบัตร Scuba',pk:[['Scuba Phi Phi + Shark Point','฿3,900']],sc:[['07:40','เจอที่ท่าเรือฉลอง'],['11:30','Dive 1'],['13:30','Dive 2'],['15:30','Dive 3 Shark Point']],ln:[],inc:['ค่าเรือ','อาหาร','ประกัน'],no:'ไม่รวมค่าอุทยานฯ ต่างชาติ ฿400 + Scuba fee ฿200'},
{id:'sk',c:'s',n:'King Cruiser · Shark Point · Koh Doc Mai',s:'ทุก อ. พ. ศ. · 3 Dives',p:'฿3,900',d:'เรือจมคิงครุยเซอร์ ออกทุกวันอังคาร พุธ ศุกร์',pk:[['Scuba King Cruiser','฿3,900']],sc:[['10:30','Dive 1 King Cruiser'],['12:30','Dive 2 Shark Point'],['14:30','Dive 3 Koh Doc Mai']],ln:[],inc:['ค่าเรือ','อาหาร','ประกัน']},
{id:'fr',c:'t',n:'Racha Islands',s:'Freedive · 3 Dives',p:'฿3,600',d:'30 นาทีจากภูเก็ต น้ำใส ปะการังสวย สำหรับผู้มีใบรับรอง Freediver',pk:[['Freedive Racha Islands','฿3,600']],sc:[['07:40','เจอที่ท่าเรือฉลอง'],['10:30','Dive 1'],['12:30','Dive 2'],['14:30','Dive 3']],ln:[],inc:['ค่าเรือ','อาหาร','ประกัน','วิดีโอ']},
{id:'fp',c:'t',n:'Phi Phi Islands',s:'Freedive · 3 Dives',p:'฿3,900',d:'Leopard Shark · ปะการังหลากสี · น้ำใส',pk:[['Freedive Phi Phi','฿3,900']],sc:[['07:40','เจอที่ท่าเรือฉลอง'],['11:30','Dive 1'],['13:30','Dive 2'],['15:30','Dive 3']],ln:[],inc:['ค่าเรือ','อาหาร','ประกัน'],no:'ไม่รวมค่าอุทยานฯ ต่างชาติ ฿400'},
{id:'fs',c:'t',n:'Similan Islands',s:'Freedive · ต.ค.–พ.ค.',p:'฿4,200',d:'3 จุดดำน้ำ + หินเรือใบ เกาะ 8 · ออกจากท่าเรือทับละมุ',pk:[['Fun Freediving Similan','฿4,200']],sc:[['08:00','ถึงท่าเรือทับละมุ'],['10:20','เกาะ 9'],['13:00','เกาะ 7'],['14:00','เกาะ 4']],ln:[],inc:['อาหาร 3 มื้อ','ช่างภาพใต้น้ำ','ไกด์','ประกัน'],no:'ไม่รวมค่าอุทยานฯ ต่างชาติ ฿500 · รถรับ-ส่ง'},
{id:'bd',c:'t',n:'Beach Dive',s:'ครึ่งวัน',p:'฿2,000',d:'Kata Beach / Thavorn Bridge ดำจากชายหาด ไม่ต้องขึ้นเรือ',pk:[['Beach Dive','฿2,000']],sc:[],ln:[],inc:[]}];
const CAT={f:['SSI Freediving','ดำน้ำแบบกลั้นหายใจ'],m:['SSI Mermaid','หาง Mermaid + Monofin'],s:['Scuba Day Trip','สำหรับผู้มีบัตร Scuba']};
const O=[['11–14 มี.ค.','🇹🇭 หมู่เกาะสุรินทร์','Seastay × Season Dive','เต็มแล้ว'],['1–5 พ.ค.','🇵🇭 โครอน ปาลาวัน #1','Seastay × Season Dive','เต็มแล้ว'],['7–11 พ.ค.','🇵🇭 โครอน ปาลาวัน #2','Seastay × Season Dive','ว่าง'],['7–11 พ.ค.','🇵🇭 ปังเลา โบโฮล','Season Dive','ว่าง'],['ก.ค.','🇯🇵 โอกินาวา','Seastay × Season Dive','ว่าง'],['ก.ค.','🇯🇵 ทริปวาฬ อามามิ','Season Dive','สอบถาม'],['27 ก.ค.–1 ส.ค.','🇮🇩 บาหลี','Season Dive','สอบถาม'],['1–5 ส.ค.','🇮🇩 ฉลามวาฬ กอรอนตาโล','Season Dive','สอบถาม'],['5–8 ส.ค.','🇮🇩 สำรวจสุลาเวสี','Season Dive','สอบถาม'],['11–16 ส.ค.','🇮🇩 โคโมโด Liveaboard','Seastay × Season Dive','สอบถาม'],['ก.ย.–ต.ค.','🇲🇻 มัลดีฟส์','Season Dive','สอบถาม']];
const $=s=>document.querySelector(s),dg=$('#dg');
const item=x=>`<button class="it" data-i="${x.id}"><div><b>${x.n}</b><span>${x.s}</span></div><em>${x.p}</em></button>`;
$('#cg').innerHTML=Object.keys(CAT).map(k=>`<div class="card"><div class="ph">[รูปภาพ]</div><div class="b"><h3>${CAT[k][0]}</h3><small>${CAT[k][1]}</small><div style="margin-top:10px">${D.filter(x=>x.c==k).map(item).join('')}</div></div></div>`).join('');
$('#td').innerHTML=D.filter(x=>'ts'.includes(x.c)).map(x=>`<div class="card"><div class="ph">[รูปภาพ]</div><div class="b"><small>${x.c=='s'?'Scuba':'Freedive'} · ${x.s}</small><h3>${x.n}</h3><p style="margin:6px 0;color:var(--mu)">${x.d}</p><button class="it" data-i="${x.id}"><b style="font:500 20px Mitr">${x.p}</b><span style="color:var(--ac)">ดูรายละเอียด</span></button></div></div>`).join('');
$('#tb').innerHTML=O.map(r=>`<tr><td>${r[0]}</td><td><b>${r[1]}</b></td><td>${r[2]}</td><td><span class="tag ${r[3]=='เต็มแล้ว'?'f':r[3]=='ว่าง'?'a':''}">${r[3]}</span></td></tr>`).join('');
$('#gl').innerHTML=['Mermaid · Racha','Swim-Through · Racha','Leopard Shark · Phi Phi','Freediver · Similan','Sunset · Surin','Coral Garden · Phi Phi'].map(t=>`<div class="ph">[${t}]</div>`).join('');
$('#sv').insertAdjacentHTML('beforeend',D.map(x=>`<option>${x.n} (${x.p})</option>`).join('')+'<option>ทริปต่างประเทศ 2027</option><option>สอบถามทั่วไป</option>');
const list=(a,t)=>a.length?`<h4>${t}</h4><div class="ul">${a.map(i=>`<span>${i}</span>`).join('')}</div>`:'';
document.addEventListener('click',e=>{const b=e.target.closest('.it');if(b){const x=D.find(y=>y.id==b.dataset.i);
$('#mt').textContent=x.n;$('#ms').textContent=x.d;
$('#mbody').innerHTML=`<h4>แพ็คเกจ / ราคา</h4>${x.pk.map(p=>`<div class="pk"><span>${p[0]}</span><b>${p[1]}</b></div>`).join('')}`+(x.sc.length?`<h4>ตารางเรียน</h4><div class="sc">${x.sc.map(s=>`<i>${s[0]}</i><span>${s[1]}</span>`).join('')}</div>`:'')+list(x.ln,'สิ่งที่จะได้เรียน')+list(x.inc,'ราคารวม')+(x.no?`<p class="note">${x.no}</p>`:'')+list(['ชุดว่ายน้ำ','ครีมกันแดด Reef Safe','ผ้าเช็ดตัว','ยาประจำตัว','หมวก / แว่นกันแดด'],'สิ่งที่ต้องเตรียม')+`<p class="note">เวลา-สถานที่อาจเปลี่ยนตามสภาพอากาศ</p><p><a class="btn" href="#contact" onclick="dg.close();$('#sv').selectedIndex=${D.indexOf(x)+1}">จองเลย</a> <a class="btn o" href="https://line.me/ti/p/@seasondive">สอบถาม Line</a></p>`;
dg.showModal();}
const t=e.target.closest('[data-t]');if(t){document.querySelectorAll('.tabs button').forEach(k=>k.classList.toggle('on',k==t));$('#td').hidden=t.dataset.t!='d';$('#to').hidden=t.dataset.t!='o'}
if(e.target==dg)dg.close()});
$('#f').addEventListener('submit',async e=>{e.preventDefault();const f=new FormData(e.target),c=e.submitter.dataset.c;
const m=`สนใจจอง: ${f.get('sv')}\nชื่อ: ${f.get('fn')} ${f.get('ln')}\nติดต่อ: ${f.get('ph')}\nวันที่: ${f.get('dt')}\nจำนวน: ${f.get('gs')} คน\n${f.get('ms')}`;
try{await navigator.clipboard.writeText(m)}catch(_){}
$('#fm').textContent='คัดลอกข้อความแล้ว วางในแชทแล้วกดส่ง';
window.open(c=='line'?'https://line.me/ti/p/@seasondive':'https://wa.me/66881944215?text='+encodeURIComponent(m),'_blank')});