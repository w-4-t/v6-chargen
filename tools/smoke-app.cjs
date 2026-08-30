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
assert.ok(x.get('mainCard').innerHTML.includes('A recently Embraced vampire, usually within the first 50 years of unlife.'), 'EN Creature tile narrative did not render');
assert.ok(x.get('mainCard').innerHTML.includes('data-info-creature="vampire_neonate"'), 'Creature tile info control is missing');
assert.ok(x.get('mainCard').innerHTML.includes('data-info-young'), 'young-character info control is missing');
assert.ok(!x.get('mainCard').innerHTML.includes('Max dots 5') && !x.get('mainCard').innerHTML.includes('3+1 Discipline dots'), 'Creature tile still exposes chargen math');
assert.ok(x.get('infoContent').innerHTML.includes('Maximum dots') && x.get('infoContent').innerHTML.includes('5'), 'EN Creature mechanics were not moved to the info panel');
assert.ok(x.get('infoContent').innerHTML.includes('Generations 11–13'), 'EN Creature generation band is missing from info panel');
assert.ok(x.get('mainCard').innerHTML.includes('Step 1 · What Are You?'), 'EN static text key did not render');
assert.ok(!x.get('mainCard').innerHTML.includes('[[s_'), 'unresolved static text token remained in EN main render');
assert.ok(!x.get('infoContent').innerHTML.includes('[[s_'), 'unresolved static text token remained in EN info render');
assert.strictEqual(x.get('navSteps').children.length, 11);
assert.ok(x.get('navSteps').children[0].innerHTML.includes('navCount good\">1/1'), 'completed desktop nav counter is not green 1/1');
assert.ok(x.get('navSteps').children[1].innerHTML.includes('navCount danger\">0/1'), 'empty desktop nav counter is not red 0/1');
assert.ok(x.get('navSteps').children[2].innerHTML.includes('navCount warn\">1/3'), 'partial desktop nav counter is not yellow 1/3');
assert.ok(x.get('navSteps').children[3].innerHTML.includes('navCount danger\">0/18'), 'Lifepath aggregate counter is not 0/18 for a standard neonate');
assert.ok(x.get('navSteps').children[7].innerHTML.includes('navCount danger\">0/10'), 'Powers aggregate counter is not 0/10 for a standard neonate');
let saved=JSON.parse(x.store.get('vtm_v6_alpha_chargen_v0_9_0'));
assert.strictEqual(saved.schemaVersion,3);

x=run('uk');
assert.ok(x.get('mainCard').innerHTML.includes('Вампір (Неонат)'), 'UK localized rules data did not render directly');
assert.ok(x.get('mainCard').innerHTML.includes('Крок 1 · Хто ви?'), 'UK static text key did not render');
assert.ok(x.get('mainCard').innerHTML.includes('Нещодавно Обернений вампір, зазвичай у межах перших 50 років нежиття.'), 'UK Creature tile narrative did not render');
assert.ok(x.get('mainCard').innerHTML.includes('data-info-creature="vampire_neonate"'), 'UK Creature tile info control is missing');
assert.ok(x.get('mainCard').innerHTML.includes('data-info-young'), 'UK young-character info control is missing');
assert.ok(!x.get('mainCard').innerHTML.includes('Макс. точок 5') && !x.get('mainCard').innerHTML.includes('3+1 точок Дисциплін'), 'UK Creature tile still exposes chargen math');
assert.ok(x.get('infoContent').innerHTML.includes('Максимум точок') && x.get('infoContent').innerHTML.includes('5'), 'UK Creature mechanics were not moved to the info panel');
assert.ok(x.get('infoContent').innerHTML.includes('Покоління 11–13'), 'UK Creature generation band is missing from info panel');
assert.ok(!x.get('mainCard').innerHTML.includes('[[s_'), 'unresolved static text token remained in UK main render');
assert.ok(!x.get('infoContent').innerHTML.includes('[[s_'), 'unresolved static text token remained in UK info render');
assert.strictEqual(x.ctx.V6I18N.text('s_44c57abd888a'), 'Скинути');
assert.strictEqual(x.ctx.V6I18N.text('s_37f710d1e891'), 'Скинути');
assert.strictEqual(x.ctx.V6I18N.text('s_bc399052d420'), 'Експорт');
assert.strictEqual(x.ctx.V6I18N.text('s_1a5894339f89'), 'Імпорт');
assert.ok(x.get('navSteps').children[0].innerHTML.includes('1. Істота'), 'UK desktop nav label Creature was not updated');
assert.ok(x.get('navSteps').children[2].innerHTML.includes('3. Сір'), 'UK desktop nav label Sire was not updated');
assert.ok(x.get('navSteps').children[6].innerHTML.includes('7. Фокус'), 'UK desktop nav label Focus was not updated');
assert.ok(x.get('navSteps').children[7].innerHTML.includes('8. Сили'), 'UK desktop nav label Powers was not updated');

// Clan page separates selectable Alpha-ready clans from future/incomplete entries.
const clanState=JSON.parse(run('uk').store.get('vtm_v6_alpha_chargen_v0_9_0'));
clanState.step=1;
clanState.clan={id:'brujah',choice:null,caitiffDisciplines:[]};
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(clanState)});
const clanHtml=x.get('mainCard').innerHTML;
assert.ok(clanHtml.includes('Доступні Клани'), 'UK available Clan section is missing');
assert.ok(clanHtml.includes('Недоступні в поточній Alpha'), 'UK unavailable Clan section is missing');
assert.ok(clanHtml.includes('data-clan="brujah"'), 'Alpha-ready Brujah is not selectable');
assert.ok(!clanHtml.includes('data-clan="banu_haqim"'), 'incomplete Banu Haqim is still selectable');
assert.ok(clanHtml.includes('data-info-clan="banu_haqim"'), 'incomplete Clan lost read-only info access');
assert.ok(clanHtml.includes('clanRow selected') && clanHtml.includes('data-clan="brujah"'), 'selected Clan is not marked on its list row');
assert.ok(clanHtml.includes('clanDisciplineLine') && clanHtml.includes('Celerity') && clanHtml.includes('Potence') && clanHtml.includes('Presence'), 'Clan tile does not use structured canonical English Discipline rows');
assert.ok(!clanHtml.includes('Стрімкість') && !clanHtml.includes('Могутність') && !clanHtml.includes('Присутність'), 'Clan tile still uses translated Discipline names');
assert.ok(clanHtml.includes('Blood Sorcery') && clanHtml.includes('Obfuscate'), 'Alpha-incomplete Clan does not display its Discipline list');
assert.ok(!clanHtml.includes('selectedSummary'), 'duplicate selected-Clan summary returned');
assert.ok(!clanHtml.includes('повний запис Alpha') && !clanHtml.includes('неповний запис Alpha'), 'Alpha completeness badges leaked into the Clan UI');
assert.ok(x.get('navSteps').children[1].innerHTML.includes('navCount good">1/1'), 'ready fixed Clan does not complete Clan progress');

const incompleteClanState=JSON.parse(JSON.stringify(clanState));
incompleteClanState.clan={id:'banu_haqim',choice:null,caitiffDisciplines:[]};
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(incompleteClanState)});
assert.ok(x.get('navSteps').children[1].innerHTML.includes('navCount danger">0/1'), 'legacy incomplete Clan state incorrectly counts as a valid choice');

const lasombraState=JSON.parse(JSON.stringify(clanState));
lasombraState.clan={id:'lasombra',choice:null,caitiffDisciplines:[]};
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(lasombraState)});
assert.ok(x.get('navSteps').children[1].innerHTML.includes('navCount good">1/1'), 'Lasombra Clan choice should complete the Clan step without resolving its variable Discipline');
assert.ok(!x.get('mainCard').innerHTML.includes('data-clan-choice='), 'variable Clan Discipline selector is still rendered on the Clan step');
assert.ok(x.get('mainCard').innerHTML.includes('Corruption<span class="disciplineOr">/</span>Oblivion'), 'Lasombra variable Disciplines are not grouped on one Clan-list row');

const lasombraPowersState=JSON.parse(JSON.stringify(lasombraState));
lasombraPowersState.step=7;
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(lasombraPowersState)});
assert.ok(x.get('navSteps').children[7].innerHTML.includes('navCount danger">0/11'), 'unresolved Lasombra Discipline choice is not counted in Powers progress');
assert.ok(x.get('mainCard').innerHTML.includes('data-clan-choice="corruption"') && x.get('mainCard').innerHTML.includes('data-clan-choice="oblivion"'), 'variable Clan Discipline choices were not moved to Powers');
assert.ok(x.get('mainCard').innerHTML.includes('Corruption') && x.get('mainCard').innerHTML.includes('Oblivion'), 'variable Clan Discipline choices do not use canonical English names');

// Sire step: localized terminology, structured Discipline rows, Alpha info access, tier-labelled Generation, and equal grids.
const sireState=JSON.parse(run('uk').store.get('vtm_v6_alpha_chargen_v0_9_0'));
sireState.step=2;
sireState.creature='vampire_ancilla';
sireState.sire={type:'caring_sire',relatedClan:null,bonusDiscipline:null};
sireState.generation=10;
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(sireState)});
const sireHtml=x.get('mainCard').innerHTML;
assert.ok(sireHtml.includes('Крок 3 · Сір і Покоління'), 'UK Sire step title did not use Сір');
assert.ok(!sireHtml.includes('Виберіть кожну складову напряму'), 'implementation-note lead remains on Sire step');
assert.ok(sireHtml.includes('Покоління — Анцилла'), 'Generation heading does not identify the active Ancilla tier');
assert.ok(sireHtml.includes('data-info-generation'), 'Generation section has no direct info control');
assert.strictEqual((sireHtml.match(/data-info-sire=/g)||[]).length, 8, 'not every Alpha Sire type exposes a direct info control');
assert.ok(sireHtml.includes('sireDisciplineLine') && sireHtml.includes('Fortitude') && sireHtml.includes('Potence') && sireHtml.includes('Presence'), 'Sire rows do not use structured canonical Discipline lines');
assert.ok(sireHtml.includes('sireBonusGrid') && sireHtml.includes('equalTiles'), 'bonus Discipline cards are not using equal-height layout');
assert.ok(!sireHtml.includes('Стійкість') && !sireHtml.includes('Могутність') && !sireHtml.includes('Присутність'), 'Sire list or bonus cards use translated Discipline names instead of canonical English');
assert.ok(fs.readFileSync('src/app.js','utf8').includes('function infoSire(id)'), 'dedicated Sire info function is missing');
assert.ok(x.ctx.V6Data.forLocale('uk').sires.every(s=>s.details), 'one or more Sire types lack expanded Alpha details');

const adoptiveState=JSON.parse(JSON.stringify(sireState));
adoptiveState.sire={type:'adoptive_sire',relatedClan:'brujah',bonusDiscipline:null};
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(adoptiveState)});
assert.ok(x.get('mainCard').innerHTML.includes('relatedClanGrid'), 'Adoptive Sire related Clans do not use the equal-sized grid');
assert.ok(x.get('mainCard').innerHTML.includes('1 Кланова Дисципліна'), 'Adoptive Sire list does not use the compact Clan-Discipline placeholder');

// The one-Lifepath option keeps narrative copy in the choice and moves its numeric rule detail to the info panel.
const youngState=JSON.parse(run('uk').store.get('vtm_v6_alpha_chargen_v0_9_0'));
youngState.step=0; youngState.creature='vampire_neonate'; youngState.young=true;
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(youngState)});
assert.ok(x.get('mainCard').innerHTML.includes('Молодий і відносно недосвідчений персонаж'), 'young-character narrative summary is missing from the choice');
assert.ok(!x.get('mainCard').innerHTML.includes('8 точок Навичок') && !x.get('mainCard').innerHTML.includes('5 точок Ресурсів'), 'young-character choice still exposes numeric allocation rules');
assert.ok(x.get('mainCard').innerHTML.includes('data-info-young'), 'young-character choice has no direct info control');
assert.ok(!x.get('infoContent').innerHTML.includes('8 точок Навичок') && !x.get('infoContent').innerHTML.includes('5 точок Ресурсів'), 'Creature default info still mixes in one-Lifepath rules');
assert.ok(fs.readFileSync('src/app.js','utf8').includes('function infoYoungCharacter()'), 'dedicated young-character info panel is missing');


// Lifepath step uses a two-stage selection + shared Skill/Resource matrices with no premature cap/Focus noise.
const lpState=JSON.parse(run('en').store.get('vtm_v6_alpha_chargen_v0_9_0'));
lpState.step=3;
lpState.lifepaths=[
  {id:'hunter',skillDots:{},resourceDots:{}},
  {id:'hound',skillDots:{},resourceDots:{}}
];
x=run('en',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(lpState)});
const lpHtml=x.get('mainCard').innerHTML;
assert.ok(lpHtml.includes('Skill dots from Lifepaths') && lpHtml.includes('Resource dots from Lifepaths'), 'Lifepath matrices are not rendered after all paths are selected');
assert.ok(lpHtml.includes('class="lpMatrix"'), 'Lifepath allocation is not using the shared matrix UI');
assert.ok(lpHtml.includes('class="desktopLpMatrix"') && lpHtml.includes('class="mobileLpMatrix"'), 'Lifepath allocation is missing separate desktop matrix and mobile stacked presentation');
assert.strictEqual((lpHtml.match(/data-info-lp-skill="fighting"/g)||[]).length,2,'shared Fighting Skill should appear once in each desktop/mobile presentation, not once per Lifepath');
assert.strictEqual((lpHtml.match(/<span>Repository: Armory<\/span>/g)||[]).length,2,'shared Armory Resource should appear once in each desktop/mobile presentation, not once per Lifepath');
assert.ok(!lpHtml.includes('Current 0') && !lpHtml.includes('house-rule cap bonus') && !lpHtml.includes('Suggested Focus'), 'Lifepath step still exposes cap or Focus recommendation noise');
assert.ok(lpHtml.includes('data-info-lp-skill="awareness"'), 'Lifepath Skill rows are missing ? info controls');
assert.ok(lpHtml.includes('data-info-resource="repository"'), 'Lifepath Resource rows are missing ? info controls');
assert.ok(lpHtml.indexOf('<span>Ally: Fellow hunter</span>') < lpHtml.indexOf('<span>Repository: Armory</span>') && lpHtml.indexOf('<span>Repository: Armory</span>') < lpHtml.indexOf('<span>Status: Sect</span>'), 'Lifepath Resource rows are not alphabetically ordered by their localized display labels');
assert.ok(lpHtml.includes('Also represents: Sweeper / Ductus'), 'Hound tile does not expose its Alpha alternate roles');
assert.ok(lpHtml.includes('Also represents: Warlord') || x.ctx.V6Data.forLocale('en').lifepaths.find(v=>v.id==='sheriff').aliases.includes('Warlord'), 'Sheriff alternate role is missing from localized Lifepath data');
assert.ok(!lpHtml.includes('You can also use this [lifepath] to represent a Sweeper or Ductus.'), 'Hound tile still renders the long Alpha paragraph instead of compact tile copy');
assert.ok(lpHtml.includes('Hunter</b><span class="lifepathOrderSlot" aria-hidden="true"><span class="lifepathOrderBadge"># 1</span>'), 'first selected Lifepath tile lacks # 1 order marker');
assert.ok(lpHtml.includes('Hound</b><span class="lifepathOrderSlot" aria-hidden="true"><span class="lifepathOrderBadge"># 2</span>'), 'second selected Lifepath tile lacks # 2 order marker');
assert.ok(lpHtml.includes('data-lp-move="0:-1"') && lpHtml.includes('data-lp-move="0:1"') && lpHtml.includes('data-lp-move="1:-1"') && lpHtml.includes('data-lp-move="1:1"'), 'matrix Lifepath reorder controls are missing');
assert.ok(!lpHtml.includes('matrixPathOrder') && !lpHtml.includes('class="lpMatrixPath"><div class="matrixPathTitle"><span class="matrixPathOrder"'), 'matrix headers still expose Lifepath order numbers');

// Embedded user-created content is self-contained and visibly typed in the save.
const userLpState=JSON.parse(JSON.stringify(lpState));
userLpState.user_content={
  schema_version:1,
  meta:{created_by:'v6-chargen',note:'User-created content embedded in this character save.'},
  lifepaths:{
    user_lifepath_001:{id:'user_lifepath_001',source:'user_created',content_type:'lifepath',content_schema_version:1,name:'Corporate Security',description:'Security work',skills:['awareness','investigation','fighting','shooting','subterfuge'],resources:['user_resource_001','user_resource_002','user_resource_003'],meta:{created_by:'v6-chargen',note:'User-created Lifepath embedded in this character save.'}}
  },
  resources:{
    user_resource_001:{id:'user_resource_001',source:'user_created',content_type:'resource',content_schema_version:1,type:'wealth',label:'',meta:{}},
    user_resource_002:{id:'user_resource_002',source:'user_created',content_type:'resource',content_schema_version:1,type:'contact',label:'Corporate Security',meta:{}},
    user_resource_003:{id:'user_resource_003',source:'user_created',content_type:'resource',content_schema_version:1,type:'repository',label:'Security Equipment',meta:{}}
  }
};
userLpState.lifepaths=[
  {id:'military',skillDots:{},resourceDots:{}},
  {id:'user_lifepath_001',skillDots:{},resourceDots:{}}
];
x=run('en',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(userLpState)});
assert.ok(x.get('mainCard').innerHTML.includes('Corporate Security'), 'embedded user Lifepath did not render on another load');
const userLpHtml=x.get('mainCard').innerHTML;
assert.ok(userLpHtml.indexOf('User-created Lifepaths') < userLpHtml.indexOf('Mortal Lifepaths'), 'user-created Lifepath section is not above built-in categories');
assert.ok(userLpHtml.includes('class="userLifepathCard selected') && userLpHtml.includes('Corporate Security</b><span class="lifepathOrderSlot" aria-hidden="true"><span class="lifepathOrderBadge"># 2</span>'), 'collapsed user-created Lifepath row/order marker did not render');
assert.ok(userLpHtml.includes('data-edit-user-lifepath="user_lifepath_001"') && userLpHtml.includes('data-delete-user-lifepath="user_lifepath_001"') && userLpHtml.includes('data-info-lp-id="user_lifepath_001"'), 'collapsed user-created Lifepath controls are incomplete');
saved=JSON.parse(x.store.get('vtm_v6_alpha_chargen_v0_9_0'));
assert.strictEqual(saved.user_content.lifepaths.user_lifepath_001.source,'user_created');
assert.strictEqual(saved.user_content.lifepaths.user_lifepath_001.content_type,'lifepath');
assert.strictEqual(saved.user_content.resources.user_resource_002.content_type,'resource');

// A selected Custom Lifepath unlocks the Skill matrix as soon as its five Skills are defined; incomplete Resources do not block Skill allocation.
const partialUserLpState=JSON.parse(JSON.stringify(userLpState));
partialUserLpState.user_content.resources.user_resource_001.type='';
partialUserLpState.user_content.resources.user_resource_002.type='';
partialUserLpState.user_content.resources.user_resource_003.type='';
x=run('en',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(partialUserLpState)});
const partialUserLpHtml=x.get('mainCard').innerHTML;
assert.ok(partialUserLpHtml.includes('Skill dots from Lifepaths') && partialUserLpHtml.includes('Corporate Security'), 'selected Custom Lifepath with five Skills does not unlock the Skill matrix');
assert.ok(partialUserLpHtml.includes('Define three distinct Resource types'), 'incomplete Custom Lifepath Resources do not get their own Resource-matrix notice');

// Schema v2 Custom Lifepaths migrate into portable user_content definitions and stable Resource IDs.
const v2Custom=JSON.parse(run('en').store.get('vtm_v6_alpha_chargen_v0_9_0'));
v2Custom.schemaVersion=2;
delete v2Custom.user_content;
v2Custom.step=3;
v2Custom.lifepaths=[
  {id:'__custom__',skillDots:{awareness:2},resourceDots:{'0':1,'2':2},custom:{name:'Old Custom',description:'legacy',skills:['awareness','craft','fighting','shooting','survival'],resources:[{type:'wealth',label:''},{type:'contact',label:'X'},{type:'repository',label:'Y'}]}},
  {id:'military',skillDots:{shooting:1},resourceDots:{'2':1},custom:null}
];
x=run('en',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(v2Custom)});
saved=JSON.parse(x.store.get('vtm_v6_alpha_chargen_v0_9_0'));
assert.strictEqual(saved.schemaVersion,3);
assert.strictEqual(saved.lifepaths[0].id,'user_lifepath_001');
assert.deepStrictEqual(saved.lifepaths[0].resourceDots,{user_resource_001:1,user_resource_003:2});
assert.deepStrictEqual(saved.lifepaths[1].resourceDots,{'ally:former_comrades:2':1});
assert.ok(saved.user_content.lifepaths.user_lifepath_001 && saved.user_content.resources.user_resource_003,'v2 Custom Lifepath migration did not embed its definitions');

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
assert.strictEqual(saved.schemaVersion,3);
assert.deepStrictEqual(saved.focuses.athletics[0],{ref:'running'});

// Built-in Focus refs render through the active locale rather than storing display text.
const focusState=JSON.parse(run('en').store.get('vtm_v6_alpha_chargen_v0_9_0'));
// Skills page keeps only actionable allocation data in the list; detailed rules stay in help.
const skillsState=JSON.parse(run('uk').store.get('vtm_v6_alpha_chargen_v0_9_0'));
skillsState.step=5;
skillsState.lifepaths=[{id:'military',skillDots:{athletics:1,fighting:1,medicine:1,shooting:1,survival:1},resourceDots:{}}];
skillsState.freeSkills={athletics:1};
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(skillsState)});
const skillsHtml=x.get('mainCard').innerHTML;
assert.ok(skillsHtml.includes('Розподіліть 8 додаткових точок Навичок'), 'UK Skills lead is not action-oriented');
assert.ok(!skillsHtml.includes('Правило проєкту: базовий ліміт 3'), 'Skills page still exposes the house-rule banner');
assert.ok(!skillsHtml.includes('Розподілено 1 із 8'), 'Skills page still exposes redundant distributed-of-total text');
assert.ok(!skillsHtml.includes('Поточний <b>'), 'Skills rows still expose Current metadata');
assert.ok(skillsHtml.includes('Ліміт <b>') && skillsHtml.includes('data-info-skill="athletics"'), 'Skills rows lost cap or ? help access');
assert.ok(!skillsHtml.includes('Your physical training') && !skillsHtml.includes('Ваше фізичне тренування'), 'Skill description leaked back into the Skills list');
x.get('mobileInfoTop').onclick();
assert.ok(x.get('infoContent').innerHTML.includes('один Фокус на 1–2') && x.get('infoContent').innerHTML.includes('Уважність:') && x.get('infoContent').innerHTML.includes('Емпатія'), 'Skills step help does not include Focus thresholds/localized examples');

focusState.step=6; focusState.freeSkills={athletics:1}; focusState.focuses={athletics:[{ref:'running'}]};
x=run('uk',{'vtm_v6_alpha_chargen_v0_9_0':JSON.stringify(focusState)});
assert.ok(x.get('mainCard').innerHTML.includes('value="Біг"'), 'Focus ref did not localize to UK');
assert.ok(!x.get('mainCard').innerHTML.includes('[[s_'), 'unresolved token remained in Focus render');

// Lifepath Resource detail keys stay attached to stable label keys across locales.
const resState=JSON.parse(run('en').store.get('vtm_v6_alpha_chargen_v0_9_0'));
resState.step=9;
resState.lifepaths=[
  {id:'military',skillDots:{},resourceDots:{'ally:former_comrades:2':1}},
  {id:null,skillDots:{},resourceDots:{}}
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
