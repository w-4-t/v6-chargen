const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

class El {
  constructor(id='') { this.id=id; this.innerHTML=''; this.textContent=''; this.value=''; this.checked=false; this.files=[]; this.dataset={}; this.style={}; this.children=[]; this.className=''; this.classList={add(){},remove(){},toggle(){}}; this.attrs={}; }
  querySelectorAll(){ return []; }
  querySelector(){ return null; }
  setAttribute(k,v){ this.attrs[k]=String(v); }
  getAttribute(k){ return this.attrs[k] || ''; }
  hasAttribute(k){ return Object.prototype.hasOwnProperty.call(this.attrs,k); }
  appendChild(x){ this.children.push(x); return x; }
  click(){}
}

function run(locale='en', initialStore={}) {
  const els=new Map(); const get=(id)=>{ if(!els.has(id)) els.set(id,new El(id)); return els.get(id); };
  const store=new Map(Object.entries(initialStore));
  store.set('vtm_v6_alpha_chargen_language', locale);
  const doc={getElementById:get,querySelectorAll(){return[]},createElement(tag){return new El(tag)},body:new El('body'),documentElement:{lang:locale},title:''};
  const ctx={console,window:null,document:doc,localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,String(v)),removeItem:k=>store.delete(k)},innerWidth:1200,alert(){},confirm(){return true},setTimeout(fn){fn()},clearTimeout(){},URL:{createObjectURL(){return'blob:x'},revokeObjectURL(){}},Blob:function(){},FileReader:function(){}};
  ctx.window=ctx;
  vm.createContext(ctx);
  for (const f of ['data/core.js','data/en.js','data/uk.js','src/data.js','src/i18n.js','src/app.js']) vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f});
  return {ctx,els,store,get};
}

let x=run('en');
assert.ok(x.get('mainCard').innerHTML.includes('Vampire (Neonate)'), 'EN localized rules data did not render');
assert.ok(x.get('mainCard').innerHTML.includes('Step 1 · What Are You?'), 'EN static text key did not render');
assert.ok(!x.get('mainCard').innerHTML.includes('[[s_'), 'unresolved static text token remained in EN main render');
assert.ok(!x.get('infoContent').innerHTML.includes('[[s_'), 'unresolved static text token remained in EN info render');
assert.strictEqual(x.get('navSteps').children.length, 11);
let saved=JSON.parse(x.store.get('vtm_v6_alpha_chargen_v0_9_0'));
assert.strictEqual(saved.schemaVersion,2);

x=run('uk');
assert.ok(x.get('mainCard').innerHTML.includes('Вампір (Неонат)'), 'UK localized rules data did not render directly');
assert.ok(x.get('mainCard').innerHTML.includes('Крок 1 · Хто ви?'), 'UK static text key did not render');
assert.ok(x.get('mainCard').innerHTML.includes('Макс. точок 5'), 'UK keyed dynamic message did not render');
assert.ok(!x.get('mainCard').innerHTML.includes('[[s_'), 'unresolved static text token remained in UK main render');
assert.ok(!x.get('infoContent').innerHTML.includes('[[s_'), 'unresolved static text token remained in UK info render');
assert.strictEqual(x.ctx.V6I18N.text('s_44c57abd888a'), 'Скинути');

// Switching locale rerenders the same machine state rather than translating/storing display text.
x=run('en');
const beforeToggle=JSON.parse(x.store.get('vtm_v6_alpha_chargen_v0_9_0'));
x.get('langToggleBtn').onclick();
assert.ok(x.get('mainCard').innerHTML.includes('Крок 1 · Хто ви?'), 'EN -> UK toggle did not rerender keyed UI');
const afterToggle=JSON.parse(x.store.get('vtm_v6_alpha_chargen_v0_9_0'));
assert.deepStrictEqual(afterToggle,beforeToggle,'locale toggle changed character state');

const oldState={
  schemaVersion:1,step:0,creature:'vampire_neonate',young:false,
  clan:{id:null,choice:null,caitiffDisciplines:[]},sire:{type:null,relatedClan:null,bonusDiscipline:null},generation:13,lifepaths:[],
  attributes:{roles:{physical:'primary',social:'secondary',mental:'tertiary'},ratings:{strength:1,dexterity:1,stamina:1,charisma:1,manipulation:1,composure:1,intelligence:1,wits:1,resolve:1}},
  freeSkills:{athletics:1},focuses:{athletics:['Running']},disciplines:{clanDots:{},powers:[]},traits:[],merits:[],humanity:{position:0,nature:null},
  resources:{free:[],details:{'repository|weapons':'old detail'}},identity:{name:'Test',alias:'',apparentAge:'',actualAge:'',nostalgicDecade:'',flaws:'',items:[],weapons:''},info:null
};
x=run('en',{'vtm_v6_alpha_chargen_v0_8_1':JSON.stringify(oldState)});
saved=JSON.parse(x.store.get('vtm_v6_alpha_chargen_v0_9_0'));
assert.strictEqual(saved.schemaVersion,2);
assert.deepStrictEqual(saved.focuses.athletics[0],{ref:'running'});

// Built-in Focus refs render through the active locale rather than storing display text.
const focusState=JSON.parse(run('en').store.get('vtm_v6_alpha_chargen_v0_9_0'));
focusState.step=6; focusState.freeSkills={athletics:1}; focusState.focuses={athletics:[{ref:'running'}]};
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(focusState)});
assert.ok(x.get('mainCard').innerHTML.includes('value="Біг"'), 'Focus ref did not localize to UK');
assert.ok(!x.get('mainCard').innerHTML.includes('[[s_'), 'unresolved token remained in Focus render');

// Lifepath Resource detail keys stay attached to stable label keys across locales.
const resState=JSON.parse(run('en').store.get('vtm_v6_alpha_chargen_v0_9_0'));
resState.step=9;
resState.lifepaths=[
  {id:'military',skillDots:{},resourceDots:{'2':1},custom:null},
  {id:null,skillDots:{},resourceDots:{},custom:null}
];
resState.resources={free:[],details:{'ally|former_comrades':'DETAIL-STABLE'}};
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(resState)});
assert.ok(x.get('mainCard').innerHTML.includes('Колишні товариші по службі'), 'UK Resource label did not render');
assert.ok(x.get('mainCard').innerHTML.includes('DETAIL-STABLE'), 'Resource detail detached from stable label key');
assert.ok(!x.get('mainCard').innerHTML.includes('[[s_'), 'unresolved token remained in Resource render');

// Humanity labels are keyed rather than hard-coded in app.js.
const humanityState=JSON.parse(run('en').store.get('vtm_v6_alpha_chargen_v0_9_0'));
humanityState.step=8;
humanityState.creature='vampire_ancilla';
humanityState.humanity={position:-1,nature:null};
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(humanityState)});
assert.ok(x.get('mainCard').innerHTML.includes('Чудовисько 1'), 'Humanity position label did not localize to UK');

console.log('smoke-app: OK');
