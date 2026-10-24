(()=>{const C=window.BOT_CONFIG,T=C.testi,$=id=>document.getElementById(id),r=document.documentElement.style;
document.documentElement.lang=C.lingua||'it';
r.setProperty('--p',C.colores.primario);r.setProperty('--s',C.colores.secundario);r.setProperty('--bg',C.colores.fondo);
document.title=C.negocio;$('nombre').textContent=C.negocio;$('eslogan').textContent=C.eslogan;$('dir').textContent=C.direccion+' · '+C.telefono;
['hOrario','hDove','hAss','pAss'].forEach(k=>$(k).textContent=T[k]);$('orario').textContent=C.orarioBreve;
$('cta').textContent=T.cta;$('cta').onclick=()=>Bot.open(T.ctaMsg);$('bi').placeholder=T.placeholder;
$('logo').innerHTML=/\.(png|jpe?g|svg|webp)$/i.test(C.logo)?`<img src="${C.logo}" alt="">`:C.logo;$('bname').textContent=C.nombreBot+' · '+C.negocio;
$('foot').textContent='© '+C.negocio+' · '+T.footer;
const M=window.BotMatch,reRe=new RegExp(T.reRe);
let flow=null,lead={},history=[];
const add=(t,w)=>{const d=document.createElement('div');d.className='m '+w;d.textContent=t;$('msgs').appendChild(d);$('msgs').scrollTop=1e9;return d;};
const sugs=l=>{$('sugs').innerHTML='';(l||[]).forEach(s=>{const b=document.createElement('button');b.textContent=s;b.onclick=()=>send(s);$('sugs').appendChild(b);});};
// Invio al titolare: 1) link WhatsApp precompilato (gratis)  2) mailto  3) webhook opzionale
function links(l){const txt=T.riepilogo(l,C.negocio);
 return {wa:`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(txt)}`,
  mail:C.emailTitolare?`mailto:${C.emailTitolare}?subject=${encodeURIComponent(T.oggetto(C.negocio))}&body=${encodeURIComponent(txt)}`:null};}
function saveLead(){const all=JSON.parse(localStorage.getItem('leads')||'[]');lead.registrato=new Date().toISOString();all.push(lead);localStorage.setItem('leads',JSON.stringify(all));
 if(C.leadWebhook)fetch(C.leadWebhook,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...lead,negozio:C.negocio})}).catch(()=>{});}
function addButtons(l){const k=links(l),d=document.createElement('div');d.className='m b acts';
 const a=(h,t,c)=>{const e=document.createElement('a');e.href=h;e.target='_blank';e.rel='noopener';e.textContent=t;e.className='act '+c;d.appendChild(e);};
 a(k.wa,T.btnWa,'wa');if(k.mail)a(k.mail,T.btnMail,'mail');$('msgs').appendChild(d);$('msgs').scrollTop=1e9;}
const P=T.passi;
function booking(t){if(flow===null){flow=0;lead={};return P[0][1];}
 lead[P[flow][0]]=t;flow++;if(flow<P.length)return P[flow][1];
 flow=null;saveLead();lead._done=true;return T.fine(lead);}
function local(t){const n=M.norm(t);
 if(reRe.test(n))return booking(t);
 const b=M.best(t,C.faqs);if(b)return b.respuesta;
 if(/\b(hola|buenas|hey|ciao|salve|buongiorno|buonasera)\b/.test(n))return T.ciao;
 if(/gracias|grazie/.test(n))return T.grazie;
 return T.nonSo(C.telefono);}
async function answer(t){if(flow!==null)return booking(t);
 if(C.llmEndpoint&&!reRe.test(M.norm(t))){try{const ctx=C.faqs.map(f=>f.respuesta).join('\n');
  const r=await fetch(C.llmEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'system',content:`Sei ${C.nombreBot}, assistente di ${C.negocio} (${C.direccion}, ${C.telefono}). Rispondi breve, nella lingua del cliente (${C.lingua}), SOLO con queste informazioni:\n${ctx}`},...history.slice(-6),{role:'user',content:t}]})});
  const j=await r.json();const a=j.reply||j.choices?.[0]?.message?.content;if(a)return a;}catch(e){}}
 return local(t);}
async function send(t){t=t.trim();if(!t)return;add(t,'u');history.push({role:'user',content:t});sugs();const a=await answer(t);
 const done=lead._done;if(done)delete lead._done;const snap={...lead};
 setTimeout(()=>{add(a,'b');history.push({role:'assistant',content:a});if(done)addButtons(snap);if(flow===null)sugs(C.sugerencias);},350);}
$('bf').onsubmit=e=>{e.preventDefault();send($('bi').value);$('bi').value='';};
let started=false;window.Bot={toggle(){$('bot').classList.toggle('hidden');if(!started){started=true;add(C.saludo,'b');sugs(C.sugerencias);}},
 open(q){if($('bot').classList.contains('hidden'))this.toggle();if(q)send(q);},send,links,leads:()=>JSON.parse(localStorage.getItem('leads')||'[]')};})();
