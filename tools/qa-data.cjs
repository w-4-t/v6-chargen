const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

function loadAll() {
  const store = new Map();
  const ctx = {
    window: {},
    localStorage: {
      getItem: (k) => store.get(k) || null,
      setItem: (k, v) => store.set(k, String(v)),
    },
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  for (const f of ['data/core.js', 'data/en.js', 'data/uk.js', 'src/data.js'])
    vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
  return ctx;
}

const ctx = loadAll();
const core = ctx.V6_RULES;
const en = ctx.V6Data.forLocale('en');
const uk = ctx.V6Data.forLocale('uk');

function assertCorePreserved(base, merged, path='core') {
  if (Array.isArray(base)) {
    assert.ok(Array.isArray(merged), `${path}: merged value is not an array`);
    for (let i = 0; i < base.length; i++) assertCorePreserved(base[i], merged[i], `${path}[${i}]`);
    return;
  }
  if (base && typeof base === 'object') {
    assert.ok(merged && typeof merged === 'object', `${path}: merged value is not an object`);
    for (const [k,v] of Object.entries(base)) assertCorePreserved(v, merged[k], `${path}.${k}`);
    return;
  }
  assert.deepStrictEqual(merged, base, `${path}: locale pack overrode machine data`);
}
assertCorePreserved(core, en, 'EN');
assertCorePreserved(core, uk, 'UK');

function ids(xs) { return (xs || []).map((x) => x.id); }
function sameIds(label, a, b) {
  assert.deepStrictEqual(Array.from(ids(a)), Array.from(ids(b)), `${label}: ID mismatch`);
}

for (const key of ['attributes','skills','sires','creatures','lifepaths','disciplines','merits','natures','clans','resourceTypes']) {
  sameIds(`${key} EN`, core[key], en[key]);
  sameIds(`${key} UK`, core[key], uk[key]);
}

for (const [i, a] of core.attributes.entries()) {
  assert.strictEqual(en.attributes[i].category, a.category);
  assert.strictEqual(uk.attributes[i].category, a.category);
}
for (const [i, r] of core.resourceTypes.entries()) {
  assert.strictEqual(en.resourceTypes[i].category, r.category);
  assert.strictEqual(uk.resourceTypes[i].category, r.category);
}
for (const [i, c] of core.creatures.entries()) {
  for (const k of ['kind','tier','lifepaths','disciplineDots','sireBonus','disciplinePowers','merits','clanTraits','freeSkillDots','freeResourceDots','maxDots','maxDisciplineDots','generationModifier']) {
    assert.deepStrictEqual(en.creatures[i][k], c[k], `creature ${c.id} EN ${k}`);
    assert.deepStrictEqual(uk.creatures[i][k], c[k], `creature ${c.id} UK ${k}`);
  }
}

for (const lp of core.lifepaths) {
  const e = en.lifepaths.find((x) => x.id === lp.id);
  const u = uk.lifepaths.find((x) => x.id === lp.id);
  assert.strictEqual(e.type, lp.type); assert.strictEqual(u.type, lp.type);
  assert.strictEqual(e.tier, lp.tier); assert.strictEqual(u.tier, lp.tier);
  sameIds(`LP ${lp.id} skills EN`, lp.skills, e.skills);
  sameIds(`LP ${lp.id} skills UK`, lp.skills, u.skills);
  sameIds(`LP ${lp.id} resources EN`, lp.resources, e.resources);
  sameIds(`LP ${lp.id} resources UK`, lp.resources, u.resources);
  for (const s of lp.skills) {
    const es = e.skills.find((x) => x.id === s.id), us = u.skills.find((x) => x.id === s.id);
    assert.deepStrictEqual(Array.from(es.recommendationIds || []), Array.from(s.recommendationIds || []));
    assert.deepStrictEqual(Array.from(us.recommendationIds || []), Array.from(s.recommendationIds || []));
    for (const ref of s.recommendationIds || []) {
      assert.ok(es.recommendationLabels?.[ref], `${lp.id}/${s.id}: missing EN Focus label ${ref}`);
      assert.ok(us.recommendationLabels?.[ref], `${lp.id}/${s.id}: missing UK Focus label ${ref}`);
    }
  }
  for (const r of lp.resources) {
    const er=e.resources.find((x)=>x.id===r.id), ur=u.resources.find((x)=>x.id===r.id);
    assert.strictEqual(er.type,r.type); assert.strictEqual(ur.type,r.type);
    assert.strictEqual(er.labelKey,r.labelKey); assert.strictEqual(ur.labelKey,r.labelKey);
  }
}

const discIds = new Set(ids(core.disciplines));
const attrIds = new Set(ids(core.attributes));
function checkReq(req, where) {
  for (const x of req?.all || []) assert.ok(discIds.has(x.id), `${where}: bad Discipline ${x.id}`);
  for (const x of req?.any || []) for (const id of x.disciplines || []) assert.ok(discIds.has(id), `${where}: bad Discipline ${id}`);
  for (const x of req?.attributes || []) assert.ok(attrIds.has(x.id), `${where}: bad Attribute ${x.id}`);
}
for (const m of core.merits) checkReq(m.requirements, `Merit ${m.id}`);
for (const c of core.clans) {
  for (const id of [...(c.disciplineRule?.fixed || []), ...(c.disciplineRule?.choice || [])]) assert.ok(discIds.has(id), `Clan ${c.id}: bad Discipline ${id}`);
  for (const t of c.traits || []) checkReq(t.requirements, `Trait ${c.id}/${t.id}`);
}
for (const s of core.sires) for (const id of s.allowedDisciplines || []) assert.ok(discIds.has(id), `Sire ${s.id}: bad Discipline ${id}`);

const forbiddenCoreKeys = new Set([
  'name','description','summary','text','overview','curseName','curseText','frenzyName','frenzyText','beastText',
  'disciplineText','discipline','prerequisites','activate','attribute','categoryLabel','cost','difficulty','distance','duration',
  'focusPrompt','recommendationLabels','label'
]);
function auditCore(node, path='core') {
  if (Array.isArray(node)) return node.forEach((x,i)=>auditCore(x,`${path}[${i}]`));
  if (!node || typeof node !== 'object') return;
  for (const [k,v] of Object.entries(node)) {
    assert.ok(!forbiddenCoreKeys.has(k), `${path}.${k}: localized/display field leaked into core`);
    auditCore(v, `${path}.${k}`);
  }
}
auditCore(core);

const app = fs.readFileSync('src/app.js','utf8');
for (const bad of ['window.V6_DATA','window.V6_UK_DATA','discIdByName','prereqEligible','.name.toLowerCase()','.category === "Physical"','.category === "Social"','.category === "Mental"','V6I18N.tr','const T ='])
  assert.ok(!app.includes(bad), `app.js still contains locale-coupled logic: ${bad}`);

const i18n = fs.readFileSync('src/i18n.js','utf8');
for (const bad of ['const UI = {','const LONG = {','const EXTRA = {','pairData','createTreeWalker','NodeFilter','V6LocaleFormatters','function tr(','strings?.exact'])
  assert.ok(!i18n.includes(bad), `i18n.js still contains legacy translation machinery: ${bad}`);
assert.ok(!/[А-Яа-яІіЇїЄєҐґ]/.test(i18n), 'generic i18n.js contains Ukrainian copy');
assert.ok(!fs.existsSync('src/i18n-uk.js'), 'legacy Ukrainian dynamic formatter still exists');

for (const id of core.config.stepIds || []) {
  assert.ok(ctx.V6Data.locales.en?.interface?.steps?.[id]?.nav, `missing EN step label ${id}`);
  assert.ok(ctx.V6Data.locales.uk?.interface?.steps?.[id]?.nav, `missing UK step label ${id}`);
}

const enStringIds = Object.keys(ctx.V6Data.locales.en?.strings?.text || {});
const ukStringIds = Object.keys(ctx.V6Data.locales.uk?.strings?.text || {});
assert.deepStrictEqual(Array.from(enStringIds), Array.from(ukStringIds), 'EN/UK UI text catalog IDs differ');
assert.ok(enStringIds.length > 300, 'static UI text catalog is unexpectedly small');
assert.ok(enStringIds.every((id) => /^s_[0-9a-f]{12}$/.test(id)), 'UI text catalog contains non-stable IDs');

const enMessageIds = Object.keys(ctx.V6Data.locales.en?.strings?.messages || {});
const ukMessageIds = Object.keys(ctx.V6Data.locales.uk?.strings?.messages || {});
assert.deepStrictEqual(Array.from(enMessageIds), Array.from(ukMessageIds), 'EN/UK message catalog IDs differ');
assert.ok(enMessageIds.length > 100, 'dynamic message catalog is unexpectedly small');
for (const id of ['physical','social','mental']) {
  assert.ok(ctx.V6Data.locales.en?.categories?.attributeSingular?.[id], `missing EN singular Attribute category ${id}`);
  assert.ok(ctx.V6Data.locales.uk?.categories?.attributeSingular?.[id], `missing UK singular Attribute category ${id}`);
}

// Every static key referenced by app templates, S(), or index data-i18n attributes must exist in both locale packs.
const referencedTextIds = new Set();
for (const m of app.matchAll(/\[\[(s_[0-9a-f]{12})\]\]/g)) referencedTextIds.add(m[1]);
for (const m of app.matchAll(/\bS\(["'](s_[0-9a-f]{12})["']\)/g)) referencedTextIds.add(m[1]);
const html = fs.readFileSync('index.html','utf8');
for (const m of html.matchAll(/data-i18n(?:-title|-aria|-placeholder)?=["'](s_[0-9a-f]{12})["']/g)) referencedTextIds.add(m[1]);
for (const id of referencedTextIds) {
  assert.ok(Object.prototype.hasOwnProperty.call(ctx.V6Data.locales.en.strings.text, id), `missing EN static text ${id}`);
  assert.ok(Object.prototype.hasOwnProperty.call(ctx.V6Data.locales.uk.strings.text, id), `missing UK static text ${id}`);
}

// app.js may contain machine enum IDs, but visible canonical English strings must live in data/en.js.
const allowedMachineLiterals = new Set(['mortal','neonate','ancilla','elder']);
for (const [id, value] of Object.entries(ctx.V6Data.locales.en.strings.text)) {
  if (!value || allowedMachineLiterals.has(value)) continue;
  const dq = JSON.stringify(value);
  const sq = `'${value.replace(/\\/g,'\\\\').replace(/'/g,"\\'")}'`;
  assert.ok(!app.includes(dq) && !app.includes(sq), `app.js embeds EN display text ${id}: ${value}`);
}
for (const forbidden of ['Character Generator','V6 Alpha · project house rules labelled','Reset character','Export JSON','Import JSON','>Info<','>Export<','>Import<','>Reset<'])
  assert.ok(!html.includes(forbidden), `index.html embeds localized EN UI copy: ${forbidden}`);

// Runtime lookup is key-based only: no reverse English-value matching.
{
  const c = {
    window: {},
    localStorage: { getItem(){return 'uk';}, setItem(){} },
    document: { getElementById(){return null;}, documentElement: {}, title: '' },
  };
  c.window = c; vm.createContext(c);
  for (const f of ['data/core.js','data/en.js','data/uk.js','src/data.js','src/i18n.js']) vm.runInContext(fs.readFileSync(f,'utf8'), c, {filename:f});
  assert.strictEqual(c.V6I18N.text('s_44c57abd888a'), 'Скинути');
  assert.strictEqual(c.V6I18N.msg('validationFreeSkillDots', {count: 8}), 'Розподіліть рівно 8 вільних точок Навичок.');
  assert.strictEqual(c.V6I18N.msg('attributeKicker', {category: 'Фізичний'}), 'Фізичний Атрибут');
  assert.strictEqual(typeof c.V6I18N.tr, 'undefined', 'legacy value-based translator is still exposed');
}

const sw = fs.readFileSync('service-worker.js','utf8');
for (const asset of ['./data/core.js','./data/en.js','./data/uk.js','./src/data.js','./src/i18n.js']) assert.ok(sw.includes(asset), `service worker missing ${asset}`);

console.log('qa-data: OK');
