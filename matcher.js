// Motore di matching per parole chiave con punteggio (usato dal browser e dai test Node)
(function(g){
const norm=s=>(' '+s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9ñ@.+ ]/g,' ').replace(/\s+/g,' ')+' ');
// claves con prefisso "~" = parola generica, peso basso
const stem=w=>w.length>4?w.slice(0,w.length-1):w; // gestisce singolare/plurale (orario/orari, piatto/piatti)
function score(text,claves){const n=norm(text),toks=n.trim().split(' ');let s=0;
 claves.forEach(k=>{const w=k[0]==='~'?0.25:1;k=k.replace(/^~/,'');const kn=norm(k).trim();if(!kn)return;const kw=kn.split(' ');
  if(kw.length>1){ if(n.includes(' '+kn+' '))s+=w*4*kw.length; }   // frase esatta: peso alto
  else if(toks.includes(kn))s+=w*2;                                  // parola esatta
  else if(kn.length>3&&toks.some(t=>t.length>3&&stem(t)===stem(kn)))s+=w*1.5; // variante
 });return s;}
function best(text,faqs){let b=null,bs=0;faqs.forEach(f=>{const s=score(text,f.claves);if(s>bs){bs=s;b=f;}});return bs>=0.5?b:null;}
g.BotMatch={norm,score,best};if(typeof module!=='undefined')module.exports=g.BotMatch;
})(typeof window!=='undefined'?window:globalThis);
