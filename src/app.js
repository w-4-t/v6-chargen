(() => {
  "use strict";
  const R = window.V6Data.core;
  const D = window.V6Data.current;
  const ATTR_CATEGORIES = ["physical", "social", "mental"];
  const attrCategoryLabel = (id) => window.V6Data.categoryLabel("attributes", id);
  const attrCategorySingularLabel = (id) =>
    window.V6Data.locales[window.V6Data.getLocale()]?.categories?.attributeSingular?.[id] || attrCategoryLabel(id);
  const resourceCategoryLabel = (id) => window.V6Data.categoryLabel("resources", id);
  const STORAGE = "vtm_v6_alpha_chargen_v0_9_0";
  const LEGACY_STORAGE = [
    "vtm_v6_alpha_chargen_v0_8_1",
    "vtm_v6_alpha_chargen_v0_8_0",
    "vtm_v6_alpha_chargen_v0_7_0",
    "vtm_v6_alpha_chargen_v0_6_1",
    "vtm_v6_alpha_chargen_v0_6_0",
    "vtm_v6_alpha_chargen_v0_5_0",
    "vtm_v6_alpha_chargen_v0_4_2",
    "vtm_v6_alpha_chargen_v0_4_1",
    "vtm_v6_alpha_chargen_v0_4_0",
    "vtm_v6_alpha_chargen_v0_3_0",
    "vtm_v6_alpha_chargen_v0_2_1",
    "vtm_v6_alpha_chargen_v0_2_0",
    "vtm_v6_alpha_chargen_v0_1_0",
  ];
  const STEP_IDS = R.config.stepIds;
  const stepText = (i) => {
    const id = STEP_IDS[i];
    return window.V6Data.locales[window.V6Data.getLocale()]?.interface?.steps?.[id] || { nav: id, title: id };
  };
  const byId = (arr, id) => arr.find((x) => x.id === id);
  const S = (key) => window.V6I18N?.text?.(key) ?? String(key);
  const M = (key, vars = {}) => window.V6I18N?.msg?.(key, vars) ?? String(key);
  const e = (s) =>
    String(s ?? "").replace(
      /[&<>'"]/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[c],
    );
  const L = (markup) =>
    String(markup ?? "").replace(/\[\[(s_[0-9a-f]{12})\]\]/g, (_m, key) => e(S(key)));
  const dots = (n) => "●".repeat(Math.max(0, Number(n) || 0));
  const sum = (o) =>
    Object.values(o || {}).reduce((a, b) => a + (Number(b) || 0), 0);
  const tierOf = () => creature()?.tier || "neonate";
  const tierRank = (t) => D.tierRank[t] || 0;
  const creature = () =>
    byId(D.creatures, state.creature) || byId(D.creatures, R.config.defaultCreature);
  const attrById = (id) => byId(D.attributes, id),
    skillById = (id) => byId(D.skills, id),
    discById = (id) => byId(D.disciplines, id),
    clanById = (id) => byId(D.clans, id),
    lpById = (id) => byId(D.lifepaths, id);
  const sourceGapDisc = (id) => discById(id)?.powers?.length === 0;

  function blankState() {
    const attrs = {};
    D.attributes.forEach((a) => (attrs[a.id] = 1));
    return {
      schemaVersion: 2,
      step: 0,
      creature: R.config.defaultCreature,
      young: false,
      clan: { id: null, choice: null, caitiffDisciplines: [] },
      sire: { type: null, relatedClan: null, bonusDiscipline: null },
      generation: 13,
      lifepaths: [],
      attributes: {
        roles: { physical: "primary", social: "secondary", mental: "tertiary" },
        ratings: attrs,
      },
      freeSkills: {},
      focuses: {},
      disciplines: { clanDots: {}, powers: [] },
      traits: [],
      merits: [],
      humanity: { position: 0, nature: null },
      resources: { free: [], details: {} },
      identity: {
        name: "",
        alias: "",
        apparentAge: "",
        actualAge: "",
        nostalgicDecade: "",
        flaws: "",
        items: [],
        weapons: "",
      },
      info: null,
    };
  }
  let state = load() || blankState();
  normalizeState();
  function load() {
    try {
      const current = JSON.parse(localStorage.getItem(STORAGE) || "null");
      if (current) return current;
      for (const key of LEGACY_STORAGE) {
        const legacy = JSON.parse(localStorage.getItem(key) || "null");
        if (!legacy) continue;
        if (key.endsWith("_v0_1_0")) {
          const oldStep = Number(legacy.step || 0),
            map = [0, 1, 2, 3, 4, 7, 8, 9, 10];
          legacy.step = map[oldStep] ?? 0;
        }
        if (
          [
            "vtm_v6_alpha_chargen_v0_4_2",
            "vtm_v6_alpha_chargen_v0_4_1",
            "vtm_v6_alpha_chargen_v0_4_0",
            "vtm_v6_alpha_chargen_v0_3_0",
            "vtm_v6_alpha_chargen_v0_2_1",
            "vtm_v6_alpha_chargen_v0_2_0",
            "vtm_v6_alpha_chargen_v0_1_0",
          ].includes(key)
        )
          legacy.focuses = {};
        return legacy;
      }
      return null;
    } catch {
      return null;
    }
  }
  function save() {
    localStorage.setItem(STORAGE, JSON.stringify(state));
  }
  function focusRefForLabel(skillId, value) {
    return window.V6Data.focusRefForLabel(skillId, value);
  }
  function normalizeFocusEntry(skillId, value) {
    if (value && typeof value === "object") {
      if (typeof value.ref === "string" && value.ref) return { ref: value.ref };
      if (typeof value.custom === "string" && value.custom.trim())
        return { custom: value.custom.trim() };
      return null;
    }
    const text = String(value || "").trim();
    if (!text) return null;
    const ref = focusRefForLabel(skillId, text);
    return ref ? { ref } : { custom: text };
  }
  function migrateResourceDetailKeys(details) {
    const out = { ...(details || {}) };
    for (const locale of window.V6Data.localeIds()) {
      const data = window.V6Data.forLocale(locale);
      for (const lp of data.lifepaths || []) {
        for (const r of lp.resources || []) {
          const old = `${r.type}|${normalizeResourceLabel(r.label)}`;
          const next = `${r.type}|${r.labelKey || ""}`;
          if (old in out && !(next in out)) out[next] = out[old];
        }
      }
    }
    return out;
  }
  function migrateStateV1(old) {
    const next = old && typeof old === "object" ? old : blankState();
    next.schemaVersion = 2;
    next.focuses = next.focuses || {};
    for (const s of R.skills || []) {
      const values = Array.isArray(next.focuses[s.id]) ? next.focuses[s.id] : [];
      next.focuses[s.id] = values.map((v) => normalizeFocusEntry(s.id, v));
    }
    next.resources = next.resources || { free: [], details: {} };
    next.resources.details = migrateResourceDetailKeys(next.resources.details);
    return next;
  }
  function normalizeState() {
    if (!state || ![1, 2].includes(Number(state.schemaVersion))) state = blankState();
    if (Number(state.schemaVersion) === 1) state = migrateStateV1(state);
    if (!state.attributes?.ratings) state.attributes = blankState().attributes;
    D.attributes.forEach((a) => {
      if (!Number.isFinite(Number(state.attributes.ratings[a.id])))
        state.attributes.ratings[a.id] = 1;
    });
    state.resources = state.resources || { free: [], details: {} };
    state.resources.free = Array.isArray(state.resources.free)
      ? state.resources.free
      : [];
    state.resources.details = state.resources.details || {};
    state.resources.free.forEach((r) => {
      if (typeof r.description !== "string") r.description = "";
    });
    state.identity = state.identity || blankState().identity;
    if (typeof state.identity.weapons !== "string") state.identity.weapons = "";
    ensureLpSlots();
    enforceSkillCaps();
    ensureItems();
  }
  function tierGenerations() {
    return D.generationByTier[tierOf()] || [13, 12, 11];
  }
  function ensureGeneration() {
    const arr = tierGenerations();
    if (!arr.includes(Number(state.generation))) state.generation = arr[0];
  }
  function youngRuleApplies() {
    return state.young && tierOf() === R.config.youngCharacter.tier;
  }
  function lpCount() {
    return youngRuleApplies() ? R.config.youngCharacter.lifepaths : creature().lifepaths;
  }
  function lpSkillBudget() {
    return youngRuleApplies() ? R.config.youngCharacter.skillDots : 5;
  }
  function lpResourceBudget() {
    return youngRuleApplies() ? R.config.youngCharacter.resourceDots : 3;
  }
  function ensureLpSlots() {
    const n = lpCount();
    state.lifepaths = Array.isArray(state.lifepaths) ? state.lifepaths : [];
    while (state.lifepaths.length < n)
      state.lifepaths.push({
        id: null,
        skillDots: {},
        resourceDots: {},
        custom: null,
      });
    if (state.lifepaths.length > n) state.lifepaths.length = n;
  }
  function ensureItems() {
    const n = lpCount();
    state.identity.items = Array.isArray(state.identity.items)
      ? state.identity.items
      : [];
    while (state.identity.items.length < n) state.identity.items.push("");
    if (state.identity.items.length > n) state.identity.items.length = n;
  }
  function allowedLifepaths() {
    const tr = tierRank(tierOf());
    return D.lifepaths.filter(
      (lp) => lp.type === "mortal" || tierRank(lp.tier) <= tr,
    );
  }
  function lpDef(slot) {
    const x = state.lifepaths[slot];
    if (!x) return null;
    if (x.id === "__custom__") return customLpDef(x);
    return lpById(x.id);
  }
  function customLpDef(x) {
    const c = x.custom || {};
    return {
      id: "__custom__",
      name: c.name || S("s_be07deb375e0"),
      description: c.description || "",
      type: "custom",
      tier: "custom",
      skills: (c.skills || []).map((id) => ({ skill: id, focus: "" })),
      resources: (c.resources || []).map((r, i) => ({
        id: `custom:${i}`,
        type: r.type,
        labelKey: `custom:${normalizeResourceLabel(r.label)}`,
        label: r.label || "",
      })),
    };
  }
  function lifepathSkillRating(id) {
    return state.lifepaths.reduce(
      (n, lp) => n + Number(lp.skillDots?.[id] || 0),
      0,
    );
  }
  function lifepathSkillSources(id) {
    const out = [];
    state.lifepaths.forEach((lp, i) => {
      const n = Number(lp.skillDots?.[id] || 0),
        d = lpDef(i);
      if (n && d) out.push({ source: d.name, dots: n });
    });
    return out;
  }
  function lifepathCapSources(id) {
    const out = [];
    state.lifepaths.forEach((lp, i) => {
      const d = lpDef(i);
      if (d && (d.skills || []).some((x) => x.skill === id)) out.push(d.name);
    });
    return out;
  }
  function skillCap(id) {
    return R.config.skillBaseChargenCap + lifepathCapSources(id).length;
  }
  function finalSkill(id) {
    return lifepathSkillRating(id) + Number(state.freeSkills[id] || 0);
  }
  function enforceSkillCaps() {
    D.skills.forEach((s) => {
      let excess = finalSkill(s.id) - skillCap(s.id);
      if (excess <= 0) return;
      const free = Number(state.freeSkills[s.id] || 0),
        cut = Math.min(excess, free);
      if (cut) {
        state.freeSkills[s.id] = free - cut;
        if (state.freeSkills[s.id] <= 0) delete state.freeSkills[s.id];
        excess -= cut;
      }
      if (excess <= 0) return;
      for (let i = state.lifepaths.length - 1; i >= 0 && excess > 0; i--) {
        const lp = state.lifepaths[i],
          cur = Number(lp.skillDots?.[s.id] || 0),
          c = Math.min(excess, cur);
        if (c) {
          lp.skillDots[s.id] = cur - c;
          if (lp.skillDots[s.id] <= 0) delete lp.skillDots[s.id];
          excess -= c;
        }
      }
    });
    ensureFocusSlots();
  }
  function finalSkills() {
    const o = {};
    D.skills.forEach((s) => (o[s.id] = finalSkill(s.id)));
    return o;
  }
  function focusThresholds(id) {
    const n = finalSkill(id);
    return R.config.focusThresholds.filter((t) => n >= t);
  }
  function requiredFocuses(id) {
    return focusThresholds(id).length;
  }
  function lpSkillEntry(def, id) {
    return (def?.skills || []).find((x) => x.skill === id) || null;
  }
  function focusSlotDefs(id) {
    return focusThresholds(id).map((threshold) => ({ threshold }));
  }
  function ensureFocusSlots() {
    state.focuses = state.focuses || {};
    R.skills.forEach((s) => {
      const slots = focusSlotDefs(s.id),
        old = Array.isArray(state.focuses[s.id]) ? state.focuses[s.id] : [],
        a = [];
      slots.forEach((slot, i) => {
        a[i] = normalizeFocusEntry(s.id, old[i]);
      });
      state.focuses[s.id] = a;
    });
  }
  function focusRefLabel(skillId, ref) {
    return window.V6Data.focusLabel(skillId, ref);
  }
  function focusEntryLabel(skillId, entry) {
    if (!entry) return "";
    if (entry.ref) return focusRefLabel(skillId, entry.ref);
    return String(entry.custom || "");
  }
  function focusEntryFilled(entry) {
    return Boolean(entry?.ref || String(entry?.custom || "").trim());
  }
  function lifepathFocusRecommendations(id) {
    const out = [];
    state.lifepaths.forEach((lp, i) => {
      const d = lpDef(i),
        x = lpSkillEntry(d, id);
      if (!d || !x) return;
      const values = [];
      for (const ref of x.recommendationIds || []) {
        const label = x.recommendationLabels?.[ref] || focusRefLabel(id, ref);
        if (label && !values.some((v) => v.ref === ref)) values.push({ ref, label });
      }
      if (values.length) out.push({ source: d.name, values });
    });
    return out;
  }
  function rawFocusSuggestions(id) {
    return (skillById(id)?.focuses || [])
      .map((f) => ({ ref: f.id, label: f.name }))
      .filter((x) => x.ref && x.label);
  }
  function lifepathFocusLabel(x) {
    if (!x) return "";
    const labels = (x.recommendationIds || [])
      .map((ref) => x.recommendationLabels?.[ref] || focusRefLabel(x.skill, ref))
      .filter(Boolean);
    return labels.length ? labels.join(" / ") : "";
  }
  function clanDisciplineIds() {
    const c = clanById(state.clan.id);
    if (!c) return [];
    const r = c.disciplineRule || {};
    if (r.random) return state.clan.caitiffDisciplines || [];
    return [
      ...(r.fixed || []),
      ...(r.choice ? [state.clan.choice].filter(Boolean) : []),
    ];
  }
  function allClanPossibleDiscs(clanId) {
    const c = clanById(clanId);
    if (!c) return [];
    const r = c.disciplineRule || {};
    if (r.random) return D.disciplines.map((d) => d.id);
    return [...(r.fixed || []), ...(r.choice || [])];
  }
  function sireAllowedDisciplines() {
    const s = byId(D.sires, state.sire.type);
    if (!s) return [];
    if (s.relation === "clan") return allClanPossibleDiscs(state.sire.relatedClan);
    return s.allowedDisciplines || [];
  }
  function disciplineRating(id) {
    return (
      Number(state.disciplines.clanDots[id] || 0) +
      (state.sire.bonusDiscipline === id ? 1 : 0)
    );
  }
  function totalClanDisciplineDots() {
    return sum(state.disciplines.clanDots);
  }
  function eligiblePowers() {
    const out = [];
    D.disciplines.forEach((d) => {
      const r = disciplineRating(d.id);
      if (r < 1) return;
      (d.powers || []).forEach((p) => {
        if (p.rank <= r)
          out.push({ ...p, disciplineId: d.id, disciplineName: d.name });
      });
    });
    return out;
  }
  function selectedPowerKey(p) {
    return `${p.disciplineId}:${p.id}`;
  }
  function powerSelected(did, pid) {
    return state.disciplines.powers.some(
      (x) => x.disciplineId === did && x.powerId === pid,
    );
  }
  function generationModifier() {
    return Number(
      D.generationModifiers[String(state.generation)] ||
        creature().generationModifier ||
        1,
    );
  }
  function vitaeMax() {
    return 10 + Number(state.attributes.ratings.stamina || 0);
  }
  function willpowerMax() {
    return (
      5 +
      Number(state.attributes.ratings.composure || 0) +
      Number(state.attributes.ratings.resolve || 0)
    );
  }
  function roleBudget(cat) {
    const c = creature();
    const role = state.attributes.roles[cat];
    return role === "primary"
      ? c.attributeBudgets[0]
      : role === "secondary"
        ? c.attributeBudgets[1]
        : c.attributeBudgets[2];
  }
  function categorySum(cat) {
    return D.attributes
      .filter((a) => a.category === cat)
      .reduce((n, a) => n + Number(state.attributes.ratings[a.id] || 0), 0);
  }
  function categorySpent(cat) {
    return (
      categorySum(cat) - D.attributes.filter((a) => a.category === cat).length
    );
  }
  function totalAttributeSpent() {
    return D.attributes.reduce(
      (n, a) =>
        n + Math.max(0, Number(state.attributes.ratings[a.id] || 1) - 1),
      0,
    );
  }
  function attrMax() {
    return creature().maxDots || 5;
  }
  function tierDisciplineCaps() {
    return R.config.disciplineCapsByTier[tierOf()] || R.config.disciplineCapsByTier.neonate;
  }
  function freeResourceSpent() {
    return state.resources.free.reduce((n, r) => n + Number(r.dots || 0), 0);
  }
  function lpResourceSpent(slot) {
    return sum(state.lifepaths[slot]?.resourceDots || {});
  }
  function sourceResourceEntries() {
    const out = [];
    state.lifepaths.forEach((lp, i) => {
      const d = lpDef(i);
      (d?.resources || []).forEach((r, ri) => {
        const n = Number(lp.resourceDots?.[String(ri)] || 0);
        if (n)
          out.push({
            source: d.name,
            type: r.type,
            labelKey: r.labelKey || "",
            label: r.label || "",
            dots: n,
          });
      });
    });
    return out;
  }
  function normalizeResourceLabel(label) {
    return String(label || "")
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase();
  }
  function resourceKey(type, labelKey) {
    return `${type}|${String(labelKey || "")}`;
  }
  function aggregatedLifepathResources() {
    const map = new Map();
    for (const r of sourceResourceEntries()) {
      const key = resourceKey(r.type, r.labelKey);
      if (!map.has(key))
        map.set(key, {
          key,
          type: r.type,
          labelKey: r.labelKey || "",
          label: r.label || "",
          dots: 0,
          sources: [],
        });
      const x = map.get(key);
      x.dots += Number(r.dots || 0);
      x.sources.push({ source: r.source, dots: Number(r.dots || 0) });
    }
    return [...map.values()];
  }
  function resourceDetail(key) {
    return String(state.resources.details?.[key] || "");
  }
  function setResourceDetail(key, value) {
    state.resources.details = state.resources.details || {};
    state.resources.details[key] = value;
  }
  function resourceType(id) {
    return byId(D.resourceTypes, id);
  }

  function requirementsEligible(req) {
    const r = req || {};
    if (Array.isArray(r.creatureKinds) && r.creatureKinds.length) {
      if (!r.creatureKinds.includes(creature().kind)) return false;
    }
    for (const x of r.attributes || []) {
      if (Number(state.attributes.ratings[x.id] || 0) < Number(x.min || 0))
        return false;
    }
    for (const x of r.all || []) {
      if (disciplineRating(x.id) < Number(x.min || 0)) return false;
    }
    for (const x of r.any || []) {
      const best = Math.max(
        0,
        ...(x.disciplines || []).map((id) => disciplineRating(id)),
      );
      if (best < Number(x.min || 0)) return false;
    }
    return true;
  }
  function traitEligible(t) {
    return (
      tierRank(tierOf()) >= tierRank(t.tier) && requirementsEligible(t.requirements)
    );
  }

  function setInfo(obj, openMobile = false) {
    state.info = obj;
    renderInfo();
    if (openMobile && innerWidth <= 900) openDrawer();
  }
  function infoCreature(c) {
    c = c || creature();
    const gens = (D.generationByTier[c.tier] || []).map(Number);
    const genBand = gens.length > 1
      ? `${Math.min(...gens)}–${Math.max(...gens)}`
      : (gens[0] ?? "—");
    const genValue = gens.length
      ? M(gens.length === 1 ? "creatureGenerationBand" : "creatureGenerationBandPlural", { generations: genBand })
      : "—";
    const meta = [
      [S("s_c01d0a100001"), genValue],
      [S("s_c01d0a100002"), String(c.generationModifier)],
      [S("s_c01d0a100003"), String(c.maxDots)],
      [S("s_c01d0a100004"), String(c.maxDisciplineDots)],
      [S("s_c01d0a100005"), String(c.lifepaths)],
      [S("s_c01d0a100006"), M("creatureAttributeBudgetValue", { budgets: c.attributeBudgets.join(" / ") })],
      [S("s_c01d0a100007"), String(c.disciplineDots)],
      [S("s_c01d0a100008"), M("creatureSireBonusValue", { bonus: c.sireBonus })],
      [S("s_c01d0a100009"), String(c.disciplinePowers)],
      [S("s_c01d0a10000a"), String(c.merits)],
      [S("s_c01d0a10000b"), String(c.clanTraits)],
      [S("s_c01d0a10000c"), String(c.freeSkillDots)],
      [S("s_c01d0a10000d"), String(c.freeResourceDots)],
    ];
    let body = c.details || S("s_6be9c5fe6ad8");
    if (youngRuleApplies()) {
      meta.push(
        [S("s_c01d0a10000e"), M("creatureYoungStatus")],
        [S("s_c01d0a10000f"), String(R.config.youngCharacter.lifepaths)],
        [S("s_c01d0a100010"), M("creatureYoungSkillDots", { dots: R.config.youngCharacter.skillDots })],
        [S("s_c01d0a100011"), M("creatureYoungResourceDots", { dots: R.config.youngCharacter.resourceDots })],
        [S("s_c01d0a100012"), M("creatureYoungSkillCap", { cap: R.config.skillBaseChargenCap + 1 })],
      );
      body += `\n\n${D.youngCharacter.details}`;
    }
    return {
      kicker: S("s_6b74730c1fa8"),
      title: c.name,
      summary: c.description || S("s_7a86e32b667f"),
      meta,
      body,
      source: S("s_b16d86448469"),
    };
  }
  function infoForStep(i) {
    if (i === 0) return infoCreature(creature());
    const defs = [
      {
        kicker: S("s_93e867006f47"),
        title: S("s_c0dce5113590"),
        summary:
          S("s_5eba94f8eb0c"),
        body: S("s_f968928dd6a6"),
      },
      {
        kicker: S("s_c84165902437"),
        title: S("s_91086a4d7284"),
        summary:
          S("s_4c4391d44b76"),
        body: S("s_3a22a44e5401"),
      },
      {
        kicker: S("s_0447f8fce29d"),
        title: S("s_35136d138aa4"),
        summary:
          S("s_0c8d307769e5"),
        body: `${S("s_62afcf0ac07b")} ${D.lifepathCompetence}`,
      },
      {
        kicker: S("s_888cbc4ee772"),
        title: S("s_a6652617f2c7"),
        summary:
          S("s_c863282730d9"),
        body: S("s_4b0931b0a70e"),
      },
      {
        kicker: S("s_0af602e1cfbd"),
        title: S("s_e09212c7d3ea"),
        summary:
          S("s_95dd68b6f8d5"),
        body: S("s_75e4b6763084"),
      },
      {
        kicker: S("s_888cbc4ee772"),
        title: S("s_7e5ef51d0b0a"),
        summary:
          S("s_276ab8afd966"),
        body: S("s_9d3594c5c91c"),
      },
      {
        kicker: S("s_f20e8a60f277"),
        title: S("s_185385a394e5"),
        summary:
          S("s_24e8ebf0392e"),
        body: S("s_2279914d74bc"),
      },
      {
        kicker: S("s_9451b2ae56ee"),
        title: S("s_423845be217f"),
        summary:
          S("s_294f11225936"),
        body: S("s_9361e50b0341"),
      },
      {
        kicker: S("s_81a164992cdb"),
        title: S("s_87df60de337f"),
        summary:
          S("s_1d51847696ab"),
        body: D.resourceRuleText,
      },
      {
        kicker: S("s_d7fdd44e17fd"),
        title: S("s_576d45922f56"),
        summary:
          S("s_af96fe7898ac"),
        body: S("s_d6f6623ba186"),
      },
    ];
    return defs[i - 1];
  }
  function infoAttribute(id) {
    const a = attrById(id);
    return {
      kicker: M("attributeKicker", { category: attrCategorySingularLabel(a.category) }),
      title: a.name,
      summary: a.description,
      meta: [
        [S("s_d917a6a13dfc"), String(state.attributes.ratings[id])],
        [S("s_0e774a36d81a"), String(attrMax())],
        [S("s_002aec72fe56"), String(maxLegalAttrRating(a))],
        [
          S("s_3f80363119b9"),
          M("distributed", { used: categorySpent(a.category), total: roleBudget(a.category) }),
        ],
        [S("s_a2221d5d58ed"), String(categorySum(a.category))],
      ],
      ratings: a.ratings,
      maxRating: attrMax(),
      currentRating: Number(state.attributes.ratings[id]),
      body: (a.mechanics || []).join("\n\n"),
      source: S("s_2793aab3b7f2"),
    };
  }
  function infoSkill(id) {
    const s = skillById(id),
      caps = lifepathCapSources(id);
    return {
      kicker: S("s_ec9f630c8693"),
      title: s.name,
      summary: s.description,
      meta: [
        [S("s_d917a6a13dfc"), String(finalSkill(id))],
        [S("s_e5d078fd7ca2"), String(skillCap(id))],
        [
          S("s_5deaef543a60"),
          caps.length ? `+${caps.length} · ${caps.join(" · ")}` : "—",
        ],
        [S("s_a218e1d22bd1"), String(requiredFocuses(id))],
      ],
      body: `${S("s_e2471d3d6c65")}\n\n${(s.focuses || []).map((f) => `${f.name}: ${f.description}`).join("\n\n")}`,
      source:
        S("s_f0fca5da9b18"),
    };
  }
  function infoClan(id) {
    const c = clanById(id);
    return {
      kicker: c.complete
        ? S("s_50c5a0f29d19")
        : S("s_310f416783ae"),
      title: c.name,
      summary: c.description,
      meta: [
        [S("s_3ed4ae577398"), c.disciplineText],
        [S("s_0b3d98d5a8a2"), c.curseName],
        [S("s_c095734e905e"), c.frenzyName],
      ],
      body: [c.overview, c.beastText, c.curseText, c.frenzyText]
        .filter(Boolean)
        .join("\n\n"),
      source: S("s_a9c6ab0505df"),
    };
  }
  function infoLp(slot) {
    const d = lpDef(slot);
    if (!d) return infoForStep(3);
    return {
      kicker: S("s_51a33f5c1e2e"),
      title: d.name,
      summary: d.description,
      meta: [
        [
          S("s_f3310e5bbc05"),
          `${sum(state.lifepaths[slot].skillDots)} / ${lpSkillBudget()}`,
        ],
        [S("s_ab3884347a09"), `${lpResourceSpent(slot)} / ${lpResourceBudget()}`],
      ],
      body: `${M("lifepathSkillsBody", { skills: (d.skills || []).map((x) => lifepathFocusLabel(x) ? M("lifepathSuggestedFocus", { skill: skillById(x.skill)?.name || x.skill, focus: lifepathFocusLabel(x) }) : (skillById(x.skill)?.name || x.skill)).join(", ") })}\n\n${M("lifepathResourcesBody", { resources: (d.resources || []).map((x) => (resourceType(x.type)?.name || x.type) + (x.label ? `: ${x.label}` : "")).join(", ") })}\n\n${D.lifepathCompetence}`,
      source: S("s_a23c10b98141"),
    };
  }
  function infoPower(did, pid) {
    const d = discById(did),
      p = d?.powers.find((x) => x.id === pid);
    if (!p) return infoForStep(7);
    return {
      kicker: M("disciplinePowerKicker", { discipline: d.name, rank: p.rank, category: p.category }),
      title: p.name,
      summary: S("s_baec6cbbd048"),
      meta: [
        [S("s_14877e80cbce"), d.name],
        [S("s_92ef08325a48"), p.activate || "—"],
        [S("s_a086d942884a"), p.attribute || "—"],
        [S("s_64ae43e8fe76"), p.cost || "—"],
        [S("s_7945d3c8f7a0"), p.difficulty || "—"],
        [S("s_423208095dd7"), p.distance || "—"],
        [S("s_1370004da76f"), p.duration || "—"],
      ],
      body: p.text,
      source: M("chapter5Source", { discipline: d.name }),
    };
  }
  function infoDiscipline(id) {
    const d = discById(id);
    return {
      kicker: S("s_14877e80cbce"),
      title: d.name,
      summary: d.description,
      meta: [
        [S("s_d917a6a13dfc"), String(disciplineRating(d.id))],
        [S("s_2bd9ab68600c"), String(d.powers.length)],
      ],
      body: d.powers.length
        ? S("s_6d467bbf24d9")
        : S("s_91f12d9e6b85"),
      source: S("s_e1543c54dcfc"),
    };
  }
  function infoTrait(t) {
    return {
      kicker: M("clanTraitKicker", { tier: t.tier }),
      title: t.name,
      summary: M("prerequisites", { value: t.prerequisites }),
      body: t.text,
      source: S("s_a9c6ab0505df"),
    };
  }
  function infoMerit(m) {
    return {
      kicker: S("s_56005f735049"),
      title: m.name,
      summary: m.summary,
      meta: [[S("s_eed036e414a3"), m.prerequisites || "—"]],
      body: m.text,
      source: S("s_a930af0fa76c"),
    };
  }
  function infoNature(n) {
    return {
      kicker: S("s_bddc7adb1204"),
      title: n.name,
      summary: n.summary,
      body: n.text,
      source: S("s_e90e12240c44"),
    };
  }
  function infoReviewTier() {
    const c = creature();
    return {
      kicker: S("s_0cb84c5dbd1e"),
      title: c.name,
      summary:
        S("s_0ad43f5d6677"),
      meta: [
        [S("s_23423b80c319"), String(c.maxDots)],
        [S("s_b672cc452b9f"), String(c.maxDisciplineDots)],
        [S("s_35136d138aa4"), String(lpCount())],
      ],
      body: S("s_6be9c5fe6ad8"),
      source: S("s_b16d86448469"),
    };
  }
  function infoReviewGeneration() {
    return {
      kicker: S("s_8d441fb5f62f"),
      title: M("generation", { generation: state.generation }),
      summary:
        S("s_a9dc68728a37"),
      meta: [[S("s_7fcd0b0c2ed7"), String(generationModifier())]],
      body: S("s_ee4abcdc8b43"),
      source: S("s_a7cedb33ba16"),
    };
  }
  function infoReviewSire() {
    const sire = byId(D.sires, state.sire.type);
    return {
      kicker: S("s_927b41aad7da"),
      title: sire?.name || S("s_0a2795b612ad"),
      summary:
        sire?.description ||
        S("s_d9feb2156cb1"),
      meta: [
        [
          S("s_923461b005c9"),
          state.sire.bonusDiscipline
            ? discById(state.sire.bonusDiscipline)?.name || "—"
            : "—",
        ],
      ],
      body: sire?.discipline
        ? M("sireGrantInfo", { discipline: sire.discipline })
        : S("s_3db4351ea582"),
      source: S("s_a682be9fd0ef"),
    };
  }
  function infoReviewLifepaths() {
    const names = state.lifepaths.map((_, i) => lpDef(i)?.name).filter(Boolean);
    return {
      kicker: S("s_35136d138aa4"),
      title: S("s_fb8f768276ea"),
      summary: names.join(" · ") || S("s_2843922e9869"),
      meta: [[S("s_66e12969c225"), String(names.length)]],
      body: `${S("s_48865785331d")}\n\n${D.lifepathCompetence}`,
      source: S("s_a23c10b98141"),
    };
  }
  function infoReviewHumanity() {
    const pos =
      humanityPositions().find((x) => x.v === state.humanity.position)?.l ||
      "—";
    return {
      kicker: S("s_b283d8b5f50f"),
      title: pos,
      summary:
        S("s_e2d50e533bec"),
      body: S("s_dcecd1fd7253"),
      source: S("s_9847b7a9bc31"),
    };
  }
  function infoApparentAge() {
    return {
      kicker: S("s_29a1bcad04d0"),
      title: S("s_ca051f59e015"),
      summary: S("s_7d9fef6db018"),
      body: S("s_1e875593c6d5"),
      source: S("s_cfa83195d1a7"),
    };
  }
  function infoImportantItems() {
    return {
      kicker: S("s_035c7abf4d6e"),
      title: S("s_f836fce0ec05"),
      summary:
        S("s_c3d35b2b566a"),
      meta: [
        [S("s_d8a235db08cc"), S("s_f942c3fc5495")],
        [S("s_0fa0f7ae68ce"), S("s_c146a87f96a2")],
      ],
      body: S("s_9005943434bf"),
      source: S("s_97ba9d01b175"),
    };
  }
  function infoWeapons() {
    return {
      kicker: S("s_035c7abf4d6e"),
      title: S("s_f32d0645a833"),
      summary:
        S("s_8390e618e362"),
      meta: [
        [S("s_a36ef8aba229"), S("s_7ba2335f1684")],
        [S("s_d404968ea90b"), S("s_63f6d0e7995b")],
        [S("s_84d7adf04f3b"), S("s_a9bd860d67e4")],
      ],
      body: S("s_a7d43bc86fa5"),
      source: S("s_a23024858339"),
    };
  }

  function resourceGuidance(id) {
    const map = {
      haven:
        S("s_e2b1c8926c84"),
      property:
        S("s_60ce6365fd66"),
      repository:
        S("s_e48f36d289d3"),
      vehicle:
        S("s_0bfddaa563f2"),
      ally: S("s_c085fb772c22"),
      minions: resourceType("minions")?.description || "",
      retainer: S("s_b7fd6bfa5d4c"),
      contact:
        S("s_e7cce698f013"),
      fame: S("s_b184171d0a6f"),
      herd: S("s_ff92de542624"),
      mask: S("s_d34899124c51"),
      status:
        S("s_5a2e2dbb9aa6"),
      wealth:
        S("s_14be55eb1cdb"),
    };
    return map[id] || "";
  }
  function infoResource(id) {
    const r = resourceType(id);
    return {
      kicker: resourceCategoryLabel(r.category),
      title: r.name,
      summary: r.description,
      meta: [
        [
          S("s_0dc54af53c59"),
          S("s_4d555de01caf"),
        ],
        [
          S("s_e91dc373ffba"),
          S("s_db0a99516418"),
        ],
        [S("s_ea924f72d31e"), S("s_08c8c44610b3")],
      ],
      body: `${resourceGuidance(id)}\n\n${S("s_4c20a09282a0")}`,
      source: S("s_bd473fe2d257"),
    };
  }
  function renderInfo() {
    const I = state.step === 0 ? infoForStep(0) : (state.info || infoForStep(state.step));
    const meta = (I.meta || [])
      .map(
        ([k, v]) => `<div class="kv"><span>${e(k)}</span><b>${e(v)}</b></div>`,
      )
      .join("");
    let ratings = "";
    if (I.ratings) {
      const max = Number(
        I.maxRating || Math.max(...Object.keys(I.ratings).map(Number)),
      );
      ratings =
        '<div class="ratingList">' +
        Array.from({ length: max }, (_, i) => {
          const n = i + 1,
            t = I.ratings[String(n)],
            missing = !t;
          return `<div class="ratingItem ${n === I.currentRating ? "active" : ""}"><div class="ratingDots">${e(M("ratingDots", { rating: n }))} · ${dots(n)}</div><div class="meta">${e(t || S("s_3ea93adb60fe"))}</div>${missing ? '<div class="tagrow"><span class="tag warn">[[s_d6330c5ff7a7]]</span></div>' : ""}</div>`;
        }).join("") +
        "</div>";
    }
    const body = String(I.body || "")
      .split(/\n\n+/)
      .filter(Boolean)
      .map((p) => `<p>${e(p)}</p>`)
      .join("");
    document.getElementById("infoContent").innerHTML = L(
      `<div class="infoKicker">${e(I.kicker || S("s_2bfbc2406946"))}</div><h2>${e(I.title || S("s_0eb5ed506e49"))}</h2><div class="infoSummary">${e(I.summary || "")}</div>${meta ? `<div class="infoMeta">${meta}</div>` : ""}${ratings}<div class="infoBody">${body}</div><div class="infoSource">${e(I.source || S("s_29dc4dcf1b49"))}</div>`,
    );
  }
  function openDrawer() {
    document.getElementById("infoPanel").classList.add("open");
    document.getElementById("drawerBack").classList.add("open");
  }
  function closeDrawer() {
    document.getElementById("infoPanel").classList.remove("open");
    document.getElementById("drawerBack").classList.remove("open");
  }

  function issue(severity, msg) {
    return { severity, msg };
  }
  function validateStep(i) {
    const out = [];
    const c = creature();
    if (i === 0) {
      if (
        !["vampire_neonate", "vampire_ancilla", "vampire_elder"].includes(
          state.creature,
        )
      )
        out.push(issue("error", S("s_4a21eeed24ce")));
    }
    if (i === 1) {
      const cl = clanById(state.clan.id);
      if (!cl) out.push(issue("incomplete", S("s_fa84ba249563")));
      else {
        const r = cl.disciplineRule || {};
        if (r.choice && !state.clan.choice)
          out.push(
            issue(
              "incomplete",
              M("validationChooseVariableDiscipline", { clan: cl.name }),
            ),
          );
        if (r.random && (state.clan.caitiffDisciplines || []).length !== 3)
          out.push(
            issue(
              "incomplete",
              S("s_ea3371b4af5e"),
            ),
          );
        if (!cl.complete)
          out.push(
            issue(
              "warning",
              S("s_0db58fcd9f64"),
            ),
          );
      }
    }
    if (i === 2) {
      if (!state.sire.type)
        out.push(issue("incomplete", S("s_943cb1478e3c")));
      if (
        ["adoptive_sire", "brood_child"].includes(state.sire.type) &&
        !state.sire.relatedClan
      )
        out.push(
          issue("incomplete", S("s_da5b43a11f6e")),
        );
      if (!state.sire.bonusDiscipline)
        out.push(
          issue(
            "incomplete",
            S("s_9fba51a373e7"),
          ),
        );
      if (!tierGenerations().includes(Number(state.generation)))
        out.push(issue("error", S("s_93a49d3105d0")));
    }
    if (i === 3) {
      ensureLpSlots();
      state.lifepaths.forEach((lp, slot) => {
        const d = lpDef(slot);
        if (!d) out.push(issue("incomplete", M("validationChooseLifepath", { n: slot + 1 })));
        else {
          if (lp.id === "__custom__") {
            if (!lp.custom?.name?.trim())
              out.push(
                issue(
                  "incomplete",
                  M("validationCustomName", { n: slot + 1 }),
                ),
              );
            if ((lp.custom?.skills || []).length !== 5)
              out.push(
                issue(
                  "incomplete",
                  M("validationCustomSkills", { n: slot + 1 }),
                ),
              );
            if ((lp.custom?.resources || []).length !== 3)
              out.push(
                issue(
                  "incomplete",
                  M("validationCustomResources", { n: slot + 1 }),
                ),
              );
            if ((lp.custom?.resources || []).some((r) => !resourceType(r.type)))
              out.push(
                issue(
                  "incomplete",
                  M("validationCustomResourceTypes", { n: slot + 1 }),
                ),
              );
          }
          if (sum(lp.skillDots) !== lpSkillBudget())
            out.push(
              issue(
                "incomplete",
                M("validationLpSkillDots", { lifepath: d.name, count: lpSkillBudget() }),
              ),
            );
          if (lpResourceSpent(slot) !== lpResourceBudget())
            out.push(
              issue(
                "incomplete",
                M("validationLpResourceDots", { lifepath: d.name, count: lpResourceBudget() }),
              ),
            );
        }
      });
    }
    if (i === 4) {
      ATTR_CATEGORIES.forEach((cat) => {
        if (categorySpent(cat) !== roleBudget(cat))
          out.push(
            issue(
              "incomplete",
              M("validationAttributeDots", { category: attrCategoryLabel(cat), count: roleBudget(cat), distributed: categorySpent(cat) }),
            ),
          );
      });
      const roles = Object.values(state.attributes.roles);
      if (new Set(roles).size !== 3)
        out.push(
          issue(
            "error",
            S("s_47e756779db7"),
          ),
        );
      D.attributes.forEach((a) => {
        const n = Number(state.attributes.ratings[a.id]);
        if (n < 1 || n > attrMax())
          out.push(
            issue("error", M("validationAttributeRange", { attribute: a.name, max: attrMax() })),
          );
      });
    }
    if (i === 5) {
      if (sum(state.freeSkills) !== c.freeSkillDots)
        out.push(
          issue(
            "incomplete",
            M("validationFreeSkillDots", { count: c.freeSkillDots }),
          ),
        );
      D.skills.forEach((s) => {
        const n = finalSkill(s.id),
          cap = skillCap(s.id);
        if (n > cap)
          out.push(
            issue(
              "error",
              M("validationSkillCap", { skill: s.name, cap }),
            ),
          );
      });
    }
    if (i === 6) {
      D.skills.forEach((s) => {
        const n = finalSkill(s.id),
          cap = skillCap(s.id),
          req = requiredFocuses(s.id),
          arr = state.focuses[s.id] || [];
        if (n > cap)
          out.push(
            issue(
              "error",
              M("validationSkillCap", { skill: s.name, cap }),
            ),
          );
        if (arr.length !== req || arr.some((x) => !focusEntryFilled(x)))
          out.push(
            issue(
              "incomplete",
              M("validationFocusSlots", { skill: s.name, count: req, slotWord: M(req === 1 ? "focusSlotsOne" : "focusSlotsOther"), rating: n }),
            ),
          );
      });
    }
    if (i === 7) {
      const cds = clanDisciplineIds();
      if (cds.length !== 3)
        out.push(
          issue("incomplete", S("s_4df4cb79ead7")),
        );
      if (totalClanDisciplineDots() !== c.disciplineDots)
        out.push(
          issue(
            "incomplete",
            M("validationClanDisciplineDots", { count: c.disciplineDots }),
          ),
        );
      D.disciplines.forEach((d) => {
        if (disciplineRating(d.id) > c.maxDisciplineDots)
          out.push(
            issue(
              "error",
              M("validationDisciplineMax", { discipline: d.name, max: c.maxDisciplineDots }),
            ),
          );
      });
      if (state.disciplines.powers.length !== c.disciplinePowers)
        out.push(
          issue(
            "incomplete",
            M("chooseExactPowers", { count: c.disciplinePowers }),
          ),
        );
      state.disciplines.powers.forEach((x) => {
        const p = discById(x.disciplineId)?.powers.find(
          (p) => p.id === x.powerId,
        );
        if (!p || p.rank > disciplineRating(x.disciplineId))
          out.push(
            issue(
              "error",
              S("s_713b9a525949"),
            ),
          );
        else if (p.detailsMissing)
          out.push(
            issue(
              "warning",
              M("validationMissingPowerEntry", { power: p.name }),
            ),
          );
      });
      if (state.traits.length !== c.clanTraits)
        out.push(
          issue("incomplete", M("chooseExactTraits", { count: c.clanTraits })),
        );
      if (state.merits.length !== c.merits)
        out.push(issue("incomplete", M("chooseExactMerits", { count: c.merits })));
      const cl = clanById(state.clan.id);
      if (cl && !cl.complete)
        out.push(
          issue(
            "warning",
            S("s_f39322fb54fa"),
          ),
        );
      const usedIncomplete = D.disciplines.filter(
        (d) => disciplineRating(d.id) > 0 && sourceGapDisc(d.id),
      );
      if (usedIncomplete.length)
        out.push(
          issue(
            "warning",
            M("validationNoPowerDefinitions", { disciplines: usedIncomplete.map((d) => d.name).join(", ") }),
          ),
        );
    }
    if (i === 8) {
      if (!state.humanity.nature)
        out.push(issue("incomplete", S("s_7856f741dc3")));
      const allowedHumanity = humanityPositions();
      if (!allowedHumanity.some((x) => x.v === state.humanity.position))
        out.push(
          issue(
            "error",
            S("s_f58f020996c1"),
          ),
        );
    }
    if (i === 9) {
      if (freeResourceSpent() !== c.freeResourceDots)
        out.push(
          issue(
            "incomplete",
            M("validationFreeResourceDots", { count: c.freeResourceDots }),
          ),
        );
      aggregatedLifepathResources().forEach((r) => {
        if (Number(r.dots) > attrMax())
          out.push(
            issue(
              "error",
              M("validationResourceMax", { resource: `${resourceType(r.type)?.name || r.type}${r.label ? `: ${r.label}` : ""}`, max: attrMax() }),
            ),
          );
        if (
          r.type !== "wealth" &&
          !String(r.label || "").trim() &&
          !resourceDetail(r.key).trim()
        )
          out.push(
            issue(
              "incomplete",
              M("validationResourceSpecific", { resource: resourceType(r.type)?.name || r.type }),
            ),
          );
      });
      state.resources.free.forEach((r, idx) => {
        if (!resourceType(r.type))
          out.push(
            issue("error", M("validationFreeResourceUnknown", { n: idx + 1 })),
          );
        if (Number(r.dots) < 1 || Number(r.dots) > attrMax())
          out.push(
            issue("error", M("validationFreeResourceRating", { n: idx + 1 })),
          );
        if (r.type !== "wealth" && !String(r.label || "").trim())
          out.push(
            issue(
              "incomplete",
              M("validationResourceLabel", { resource: resourceType(r.type)?.name || S("s_021493f340d3") }),
            ),
          );
      });
    }
    if (i === 10) {
      ensureItems();
      if (!state.identity.name.trim())
        out.push(issue("incomplete", S("s_c804c336534d")));
      state.identity.items.forEach((x, j) => {
        if (!String(x).trim())
          out.push(issue("incomplete", M("validationImportantItem", { n: j + 1 })));
      });
    }
    return out;
  }
  function allIssues() {
    return STEP_IDS.flatMap((_, i) =>
      validateStep(i).map((x) => ({ ...x, step: i })),
    );
  }
  function render() {
    ensureGeneration();
    ensureLpSlots();
    ensureFocusSlots();
    ensureItems();
    renderNav();
    renderMain();
    renderInfo();
    save();
    window.V6I18N?.apply(document);
  }
  function stepProgressCounts(i) {
    const c = creature();
    if (i === 0) return { done: state.creature ? 1 : 0, total: 1 };
    if (i === 1) {
      const cl = clanById(state.clan.id);
      const base = cl ? 1 : 0;
      if (cl?.disciplineRule?.choice)
        return { done: base + (state.clan.choice ? 1 : 0), total: 2 };
      if (cl?.disciplineRule?.random) {
        const required = Number(cl.disciplineRule.random || 0);
        return {
          done: base + (state.clan.caitiffDisciplines || []).length,
          total: 1 + required,
        };
      }
      return { done: base, total: 1 };
    }
    if (i === 2) {
      const related = ["adoptive_sire", "brood_child"].includes(state.sire.type);
      const done =
        (state.sire.type ? 1 : 0) +
        (state.generation ? 1 : 0) +
        (state.sire.bonusDiscipline ? 1 : 0) +
        (related && state.sire.relatedClan ? 1 : 0);
      return { done, total: 3 + (related ? 1 : 0) };
    }
    if (i === 3) {
      const pathTotal = lpCount();
      const pathDone = state.lifepaths.filter((_, j) => !!lpDef(j)).length;
      const skillDone = state.lifepaths.reduce((n, lp) => n + sum(lp.skillDots), 0);
      const resourceDone = state.lifepaths.reduce((n, _lp, j) => n + lpResourceSpent(j), 0);
      return {
        done: pathDone + skillDone + resourceDone,
        total: pathTotal * (1 + lpSkillBudget() + lpResourceBudget()),
      };
    }
    if (i === 4)
      return {
        done: totalAttributeSpent(),
        total: c.attributeBudgets.reduce((a, b) => a + b, 0),
      };
    if (i === 5) return { done: sum(state.freeSkills), total: c.freeSkillDots };
    if (i === 6) {
      const total = D.skills.reduce((n, x) => n + requiredFocuses(x.id), 0);
      const done = D.skills.reduce(
        (n, x) => n + (state.focuses[x.id] || []).filter(focusEntryFilled).length,
        0,
      );
      return { done, total };
    }
    if (i === 7)
      return {
        done:
          totalClanDisciplineDots() +
          state.disciplines.powers.length +
          state.traits.length +
          state.merits.length,
        total: c.disciplineDots + c.disciplinePowers + c.clanTraits + c.merits,
      };
    if (i === 8) return { done: state.humanity.nature ? 1 : 0, total: 1 };
    if (i === 9) return { done: freeResourceSpent(), total: c.freeResourceDots };
    if (i === 10) {
      const total = 1 + lpCount();
      const done =
        (state.identity.name.trim() ? 1 : 0) +
        state.identity.items.filter((x) => String(x).trim()).length;
      return { done, total };
    }
    return { done: 0, total: 0 };
  }
  function progressTone(done, total) {
    if (done === 0) return "danger";
    if (total > 0 && done === total) return "good";
    if (done > total) return "danger";
    return "warn";
  }
  function renderNav() {
    const nav = document.getElementById("navSteps"),
      mob = document.getElementById("mobileProgress");
    nav.innerHTML = "";
    mob.innerHTML = "";
    STEP_IDS.forEach((_, i) => {
      const s = stepText(i);
      const issues = validateStep(i);
      const blocked = issues.some((x) => x.severity === "error");
      const progress = stepProgressCounts(i);
      const tone = progressTone(progress.done, progress.total);
      const b = document.createElement("button");
      b.className = `navStep ${i === state.step ? "active" : ""} ${blocked ? "blocked" : ""}`;
      b.innerHTML = `<span class="navStepLabel">${i + 1}. ${e(s.nav)}</span><span class="navCount ${tone}">${progress.done}/${progress.total}</span>`;
      b.onclick = () => goStep(i);
      nav.appendChild(b);
      const m = document.createElement("button");
      m.className = `mobileStep ${i === state.step ? "active" : ""}`;
      m.textContent = `${i + 1} ${s.nav}`;
      m.onclick = () => goStep(i);
      mob.appendChild(m);
    });
  }
  function goStep(i) {
    state.step = Math.max(0, Math.min(STEP_IDS.length - 1, i));
    state.info = infoForStep(state.step);
    closeDrawer();
    render();
    scrollTo({ top: 0, behavior: "instant" });
  }
  function navFooter() {
    return `<div class="bottomNav"><button class="btn" data-action="prev" ${state.step === 0 ? "disabled" : ""}>[[s_b52b36b7269f]]</button><button class="btn primary" data-action="next">${e(S(state.step === STEP_IDS.length - 1 ? "s_e29a79fe0c34" : "s_bc981983e7f5"))}</button></div>`;
  }
  function issuesHtml(i) {
    const a = validateStep(i);
    if (!a.length)
      return '<div class="notice good">[[s_2751329afa45]]</div>';
    return `<div class="issues">${a.map((x) => `<div class="issue ${x.severity}">${e(x.msg)}</div>`).join("")}</div>`;
  }
  function renderMain() {
    const f = [
      renderCreature,
      renderClan,
      renderSire,
      renderLifepaths,
      renderAttributes,
      renderSkills,
      renderFocuses,
      renderPowers,
      renderHumanity,
      renderResources,
      renderFinish,
    ][state.step];
    document.getElementById("mainCard").innerHTML = L(f() + navFooter());
    bindMain();
  }

  function renderCreature() {
    const options = D.creatures.filter((c) => c.id.startsWith("vampire_"));
    return `<section class="step active"><h1>[[s_ff7f77cc88bd]]</h1><div class="lead">[[s_f59ac5cba69f]]</div><div class="grid3">${options.map((c) => `<button class="choiceCard ${state.creature === c.id ? "selected" : ""}" data-creature="${c.id}"><h3>${e(c.name)}</h3><div class="meta">${e(c.description || "")}</div></button>`).join("")}</div>${tierOf() === "neonate" ? `<div class="sectionTitle">[[s_43397f29829c]]</div><label class="card checkline"><input type="checkbox" id="youngToggle" ${state.young ? "checked" : ""}><div><b>[[s_160d9b4c3d17]]</b><div class="meta">${e(D.youngCharacter.description || "")}</div></div></label>` : ""}${issuesHtml(0)}</section>`;
  }
  function renderClan() {
    const selected = clanById(state.clan.id);
    return `<section class="step active"><h1>[[s_17afcda150ef]]</h1><div class="lead">[[s_2da1d5349de3]]</div>${selected ? `<div class="selectedSummary"><div><div class="meta">[[s_cfad8f685677]]</div><b>${e(selected.name)}</b><div class="tagrow"><span class="tag">${e(selected.disciplineText)}</span>${selected.complete ? '<span class="tag good">[[s_a6700df73fa9]]</span>' : '<span class="tag warn">[[s_f6146d719b7b]]</span>'}</div></div><button class="tileInfo inlineInfo" data-info-clan="${selected.id}" aria-label="${e(M("readClanRules", { name: selected.name }))}">?</button></div>${renderClanDisciplineChoice()}` : ""}<div class="sectionTitle">[[s_a55c248714f4]]</div><div class="optionList">${D.clans.map((c) => `<button class="choiceRow ${state.clan.id === c.id ? "selected" : ""} ${!c.complete ? "incomplete" : ""}" data-clan="${c.id}"><div class="choiceRowMain"><div class="choiceRowTitle">${e(c.name)}</div><div class="choiceRowMeta">${e(c.description)}</div></div><div class="choiceRowAside"><span class="tag">${e(c.disciplineText)}</span>${c.complete ? '<span class="tag good">[[s_cd8e66e3508a]]</span>' : '<span class="tag warn">[[s_f6146d719b7b]]</span>'}</div></button>`).join("")}</div>${issuesHtml(1)}</section>`;
  }
  function renderClanDisciplineChoice() {
    const c = clanById(state.clan.id);
    if (!c) return "";
    const r = c.disciplineRule || {};
    if (r.choice)
      return `<div class="requiredChoice"><div class="sectionTitle" style="margin-top:0">${e(M("requiredThirdDiscipline", { clan: c.name }))}</div><div class="grid2 equalTiles">${r.choice.map((id) => `<button class="choiceCompact ${state.clan.choice === id ? "selected" : ""}" data-clan-choice="${id}"><b>${e(discById(id)?.name)}</b><span>${e(discById(id)?.description)}</span></button>`).join("")}</div></div>`;
    if (r.random)
      return `<div class="requiredChoice"><div class="sectionTitle" style="margin-top:0">[[s_f8c192193934]]</div><div class="notice warn">[[s_263a34e33825]]</div><button class="btn" data-action="random-caitiff">[[s_7322c289ed12]]</button><div class="optionList caitiffList" style="margin-top:9px">${D.disciplines.map((d) => `<label class="caitiffChoice ${(state.clan.caitiffDisciplines || []).includes(d.id) ? "selected" : ""}"><input type="checkbox" data-caitiff-disc="${d.id}" ${(state.clan.caitiffDisciplines || []).includes(d.id) ? "checked" : ""}><div class="choiceRowMain"><div class="choiceRowTitle">${e(d.name)}</div><div class="choiceRowMeta">${e(d.description)}</div></div></label>`).join("")}</div></div>`;
    return "";
  }
  function renderSire() {
    const s = byId(D.sires, state.sire.type),
      relatedNeeded = ["adoptive_sire", "brood_child"].includes(
        state.sire.type,
      ),
      allowed = sireAllowedDisciplines();
    return `<section class="step active"><h1>[[s_1b63ea19f8e9]]</h1><div class="lead">[[s_3915eebd224f]]</div><div class="sectionTitle">[[s_fae0d8a2bb23]]</div><div class="optionList">${D.sires.map((x) => `<button class="choiceRow ${state.sire.type === x.id ? "selected" : ""}" data-sire-type="${x.id}"><div class="choiceRowMain"><div class="choiceRowTitle">${e(x.name)}</div><div class="choiceRowMeta">${e(x.description)}</div></div><div class="choiceRowAside"><span class="tag">${e(M("bonus", { value: x.discipline }))}</span></div></button>`).join("")}</div><div class="sectionTitle">[[s_8d441fb5f62f]]</div><div class="choiceChipGrid">${tierGenerations()
      .map(
        (g) =>
          `<button class="choiceChip ${Number(state.generation) === g ? "selected" : ""}" data-generation="${g}"><b>${e(M("generationOrdinal", { generation: g }))}</b><span>${e(M("modifier", { value: D.generationModifiers[String(g)] }))}</span></button>`,
      )
      .join(
        "",
      )}</div>${relatedNeeded ? `<div class="sectionTitle">${e(S(state.sire.type === "adoptive_sire" ? "s_89c526bf651d" : "s_f6bcb7d6144e"))}</div><div class="choiceChipGrid">${D.clans.map((c) => `<button class="choiceChip ${state.sire.relatedClan === c.id ? "selected" : ""}" data-related-clan="${c.id}"><b>${e(c.name)}</b></button>`).join("")}</div>` : ""}<div class="sectionTitle">[[s_923461b005c9]]</div>${allowed.length ? `<div class="grid3">${allowed.map((id) => `<button class="choiceCompact ${state.sire.bonusDiscipline === id ? "selected" : ""}" data-sire-bonus="${id}"><b>${e(discById(id)?.name)}</b><span>${e(discById(id)?.description)}</span></button>`).join("")}</div>` : `<div class="notice warn">${e(M(relatedNeeded ? "chooseSireAndClanFirst" : "chooseSireFirst"))}</div>`}${s ? `<div class="notice"><b>${e(s.name)}</b> · ${e(s.discipline)}</div>` : ""}${issuesHtml(2)}</section>`;
  }
  function renderLifepaths() {
    ensureLpSlots();
    return `<section class="step active"><h1>[[s_1c173828f39d]]</h1><div class="lead">${e(M("chooseLifepathsLead", { count: lpCount(), pathWord: M(lpCount() === 1 ? "lifepathSingular" : "lifepathPlural"), skillDots: lpSkillBudget(), resourceDots: lpResourceBudget() }))}</div>${state.lifepaths.map((lp, i) => renderLpSlot(lp, i)).join("")}${issuesHtml(3)}</section>`;
  }
  function renderLpSlot(lp, slot) {
    const d = lpDef(slot),
      allowed = allowedLifepaths();
    return `<div class="lpCard"><div class="lpHead"><div><div class="sectionTitle" style="margin:0 0 6px">${e(M("lifepathNumber", { n: slot + 1 }))}</div>${d ? `<b style="font-size:18px">${e(d.name)}</b><div class="meta">${e(d.description)}</div>` : '<div class="meta">[[s_ab9fee6941a5]]</div>'}</div><div class="field" style="margin:0"><label>[[s_d1f8e5ea93b2]]</label><select data-lp-select="${slot}"><option value="">[[s_c3b69e661eec]]</option>${allowed.map((x) => `<option value="${x.id}" ${lp.id === x.id ? "selected" : ""}>${e(x.name)}${x.type === "vampire" ? ` · ${e(({ neonate: S("s_c994f9e6adb6"), ancilla: S("s_6ca3aa935891"), elder: S("s_f429030cf5c0") })[x.tier] || x.tier)}` : ""}</option>`).join("")}<option value="__custom__" ${lp.id === "__custom__" ? "selected" : ""}>[[s_47388a3e9202]]</option></select></div></div>${lp.id === "__custom__" ? renderCustomLp(lp, slot) : ""}${d ? `<div class="budgetBar"><span class="pill ${sum(lp.skillDots) === lpSkillBudget() ? "good" : "warn"}">${e(M("skillDotsProgress", { used: sum(lp.skillDots), total: lpSkillBudget() }))}</span><span class="pill ${lpResourceSpent(slot) === lpResourceBudget() ? "good" : "warn"}">${e(M("resourceDotsProgress", { used: lpResourceSpent(slot), total: lpResourceBudget() }))}</span><button class="fieldInfoBtn" data-info-lp="${slot}" aria-label="[[s_226781712bbe]]">?</button></div><div class="sectionTitle">[[s_bb2ff987995e]]</div><div class="lpSkillGrid">${(d.skills || []).map((x) => renderLpSkill(slot, x)).join("")}</div><div class="sectionTitle">[[s_5590f2a6ebe7]]</div><div class="lpResGrid">${(d.resources || []).map((r, ri) => renderLpResource(slot, r, ri)).join("")}</div>` : ""}</div>`;
  }
  function renderCustomLp(lp, slot) {
    const c = lp.custom || {
      name: "",
      description: "",
      skills: [],
      resources: [],
    };
    const skillSet = new Set(c.skills || []);
    return `<div class="grid2"><div class="field"><label>[[s_29024d7d22ea]]</label><input data-custom-name="${slot}" value="${e(c.name || "")}"></div><div class="field"><label>[[s_55f8ebc805e6]]</label><input data-custom-desc="${slot}" value="${e(c.description || "")}"></div></div><div class="sectionTitle">[[s_cdca8eca3a50]]</div><div class="gridAuto">${D.skills.map((s) => `<label class="card checkline"><input type="checkbox" data-custom-skill="${slot}:${s.id}" ${skillSet.has(s.id) ? "checked" : ""}><div><b>${e(s.name)}</b><div class="meta">${e(s.description)}</div></div></label>`).join("")}</div><div class="sectionTitle">[[s_0bb4dbf25a37]]</div><div class="grid3">${[
      0, 1, 2,
    ]
      .map((ri) => {
        const r = c.resources?.[ri] || { type: "", label: "" };
        return `<div class="card"><div class="field"><label>${e(M("resourceNumber", { n: ri + 1 }))}</label><select data-custom-res-type="${slot}:${ri}"><option value="">[[s_c3b69e661eec]]</option>${D.resourceTypes.map((x) => `<option value="${x.id}" ${r.type === x.id ? "selected" : ""}>${e(x.name)}</option>`).join("")}</select></div><div class="field"><label>[[s_d15a04bf03ea]]</label><input data-custom-res-label="${slot}:${ri}" value="${e(r.label || "")}"></div></div>`;
      })
      .join("")}</div>`;
  }
  function renderLpSkill(slot, x) {
    const n = Number(state.lifepaths[slot].skillDots?.[x.skill] || 0),
      s = skillById(x.skill),
      cap = skillCap(x.skill),
      sources = lifepathCapSources(x.skill),
      suggested = lifepathFocusLabel(x);
    return `<div class="row"><div><div class="rowname">${e(s?.name || x.skill)} ${suggested ? `<span class="tag">${e(M("suggestedFocus", { focus: suggested }))}</span>` : ""}</div><div class="rowmeta">${e(M("currentCapHouse", { current: finalSkill(x.skill), cap, bonus: sources.length }))}</div></div>${stepper(`lp-skill:${slot}:${x.skill}`, n, 0, lpSkillBudget())}</div>`;
  }
  function renderLpResource(slot, r, ri) {
    const n = Number(state.lifepaths[slot].resourceDots?.[String(ri)] || 0),
      rt = resourceType(r.type);
    return `<div class="row"><div><div class="rowname">${e(rt?.name || r.type)}${r.label ? `: ${e(r.label)}` : ""}</div><div class="rowmeta">${e(rt ? resourceCategoryLabel(rt.category) : S("s_021493f340d3"))}</div></div>${stepper(`lp-res:${slot}:${ri}`, n, 0, lpResourceBudget())}</div>`;
  }
  function stepper(key, n, min, max) {
    return `<div class="stepper"><button data-stepper="${key}" data-delta="-1" ${n <= min ? "disabled" : ""}>−</button><div class="n">${n}</div><button data-stepper="${key}" data-delta="1" ${n >= max ? "disabled" : ""}>+</button></div>`;
  }

  function roleSwapValid(key, newRole) {
    const roles = { ...state.attributes.roles },
      oldRole = roles[key];
    if (newRole === oldRole) return true;
    const other = Object.keys(roles).find(
      (k) => k !== key && roles[k] === newRole,
    );
    if (!other) return false;
    roles[key] = newRole;
    roles[other] = oldRole;
    const budgetFor = (k) => {
      const r = roles[k],
        b = creature().attributeBudgets;
      return r === "primary" ? b[0] : r === "secondary" ? b[1] : b[2];
    };
    return (
      categorySpent(key) <= budgetFor(key) &&
      categorySpent(other) <= budgetFor(other)
    );
  }
  function maxLegalAttrRating(a) {
    const current = Number(state.attributes.ratings[a.id] || 1),
      spent = categorySpent(a.category),
      target = roleBudget(a.category);
    return Math.max(
      1,
      Math.min(attrMax(), current + Math.max(0, target - spent)),
    );
  }
  function attrRatingAllowed(a, rating) {
    return rating >= 1 && rating <= maxLegalAttrRating(a);
  }
  function renderAttributes() {
    const total = creature().attributeBudgets.reduce((a, b) => a + b, 0),
      left = Math.max(0, total - totalAttributeSpent());
    return `<section class="step active"><h1>[[s_d1491c761cf3]]</h1><div class="lead">[[s_93b9dac31ca1]]</div><div class="allocationStatus ${left === 0 ? "complete" : ""}"><div><span>[[s_d3bc3d68e50a]]</span><strong>${left}</strong><small>${e(M("distributedOf", { used: totalAttributeSpent(), total }))}</small></div><button class="btn resetStepBtn" data-action="reset-attributes">[[s_5e4e5bd526ff]]</button></div><div class="notice">[[s_4a6686dc5fae]]</div><div class="attrCols">${ATTR_CATEGORIES.map(renderAttrCat).join("")}</div><div class="derived" style="margin-top:10px"><div class="card"><div class="meta">[[s_a522e333addb]]</div><b>${vitaeMax()}</b><div class="meta">[[s_55471d5f3de4]]</div></div><div class="card"><div class="meta">[[s_815d46237b83]]</div><b>${willpowerMax()}</b><div class="meta">[[s_d3355d77c43a]]</div></div></div>${issuesHtml(4)}</section>`;
  }
  function renderAttrCat(cat) {
    const key = cat,
      label = attrCategoryLabel(cat),
      target = roleBudget(cat),
      spent = categorySpent(cat),
      left = Math.max(0, target - spent),
      finalTotal = categorySum(cat);
    return `<div class="attrCol"><div class="attrColHead"><div><b>${e(label)}</b><div class="meta">${e(M("distributedLeftFinal", { used: spent, total: target, left, final: finalTotal }))}</div></div><select class="roleSelect" data-role="${key}" aria-label="${e(M("categoryPriority", { category: label }))}">${["primary", "secondary", "tertiary"].map((r) => `<option value="${r}" ${state.attributes.roles[key] === r ? "selected" : ""} ${roleSwapValid(key, r) ? "" : "disabled"}>${e(({ primary: S("s_a9a96ec01949"), secondary: S("s_025de599ea0a"), tertiary: S("s_b710a1f98200") })[r] || r)}</option>`).join("")}</select></div>${D.attributes
      .filter((a) => a.category === cat)
      .map((a) => {
        const n = Number(state.attributes.ratings[a.id]);
        return `<div class="attrItem"><div class="attrItemTop"><button class="attrNameBtn" data-info-attr="${a.id}">${e(a.name)}</button><span class="attrCurrent">${e(M("ratingMaxNow", { rating: n, max: maxLegalAttrRating(a) }))}</span></div><div class="attrRatings">${Array.from(
          { length: attrMax() },
          (_, i) => {
            const r = i + 1,
              allowed = attrRatingAllowed(a, r) || r === n;
            return `<button class="ratingBtn ${r === n ? "selected" : ""}" data-attr="${a.id}" data-rating="${r}" ${allowed ? "" : "disabled"} aria-label="${e(M("setAttribute", { attribute: a.name, rating: r }))}">${r}</button>`;
          },
        ).join(
          "",
        )}<button class="fieldInfoBtn" data-info-attr="${a.id}" aria-label="${e(M("readDescriptionScale", { name: a.name }))}">?</button></div></div>`;
      })
      .join("")}</div>`;
  }
  function renderSkills() {
    const fromLp = D.skills.filter((s) => lifepathSkillRating(s.id) > 0),
      freeOnly = D.skills.filter((s) => lifepathSkillRating(s.id) === 0),
      used = sum(state.freeSkills),
      left = Math.max(0, creature().freeSkillDots - used);
    return `<section class="step active"><h1>[[s_4b9f7c999804]]</h1><div class="lead">${e(M("skillsLead", { count: creature().freeSkillDots }))}</div><div class="allocationStatus ${left === 0 ? "complete" : ""}"><div><span>[[s_d5ad6bf8fba7]]</span><strong>${left}</strong><small>${e(M("distributedOf", { used, total: creature().freeSkillDots }))}</small></div><button class="btn resetStepBtn" data-action="reset-skills">[[s_f4dd509ac115]]</button></div><div class="budgetBar"><span class="pill">[[s_8a66c3199e81]]</span></div><div class="sectionTitle">[[s_829318c8d255]]</div>${fromLp.length ? `<div class="optionList">${fromLp.map(renderSkillRow).join("")}</div>` : '<div class="notice">[[s_b5fcfbeba84a]]</div>'}<div class="sectionTitle">[[s_0e49bb3a8b01]]</div><div class="optionList">${freeOnly.map(renderSkillRow).join("")}</div>${issuesHtml(5)}</section>`;
  }
  function renderSkillRow(s) {
    const base = lifepathSkillRating(s.id),
      free = Number(state.freeSkills[s.id] || 0),
      total = base + free,
      sources = lifepathSkillSources(s.id),
      capSources = lifepathCapSources(s.id),
      cap = skillCap(s.id);
    const canDown = free > 0,
      canUp = sum(state.freeSkills) < creature().freeSkillDots && total < cap,
      allocationParts = [];
    if (capSources.length)
      allocationParts.push(
        M("capDetail", { bonus: capSources.length, sources: capSources.join(" · "), rest: "" }),
      );
    if (base) {
      const sourceText = sources.length
        ? ` (${sources.map((x) => M("resourceSourceTag", { source: x.source, dots: x.dots })).join(" · ")})`
        : "";
      allocationParts.push(M("lifepathDotsDetail", { dots: base, rest: sourceText }));
    }
    if (free) allocationParts.push(M("freePlus", { dots: free }));
    return `<div class="skillRow ${total > 0 ? "hasRating" : ""}"><div class="skillRowMain"><div class="skillTitleLine"><button class="skillNameBtn" data-info-skill="${s.id}">${e(s.name)}</button><span class="skillStat current">${e(S("s_4fc0e2bc8073"))} <b>${total}</b></span><span class="skillStat cap">${e(S("s_b38fd978df2c"))} <b>${cap}</b></span></div><div class="rowmeta">${e(allocationParts.join(" · "))}</div><div class="choiceRowMeta">${e(s.description)}</div></div><div class="stepper"><button data-stepper="free-skill:${s.id}" data-delta="-1" ${canDown ? "" : "disabled"}>−</button><div class="n">${total}</div><button data-stepper="free-skill:${s.id}" data-delta="1" ${canUp ? "" : "disabled"}>+</button></div></div>`;
  }
  function renderFocuses() {
    ensureFocusSlots();
    const relevant = D.skills.filter((s) => requiredFocuses(s.id) > 0),
      fromLp = relevant.filter((s) => lifepathCapSources(s.id).length > 0),
      freeOnly = relevant.filter((s) => lifepathCapSources(s.id).length === 0),
      req = relevant.reduce((n, s) => n + requiredFocuses(s.id), 0),
      filled = relevant.reduce(
        (n, s) =>
          n +
          (state.focuses[s.id] || []).filter(focusEntryFilled).length,
        0,
      ),
      left = Math.max(0, req - filled);
    return `<section class="step active"><h1>[[s_af3504b785ff]]</h1><div class="lead">[[s_81fe9de42544]]</div><div class="allocationStatus ${left === 0 ? "complete" : ""}"><div><span>[[s_a99d31e819de]]</span><strong>${left}</strong><small>${e(M("selectedOf", { used: filled, total: req }))}</small></div><button class="btn resetStepBtn" data-action="reset-focuses">[[s_ae0cf17bafa8]]</button></div><div class="notice">[[s_d69f520a0925]]</div><div class="sectionTitle">[[s_70c343b19cd7]]</div>${fromLp.length ? `<div class="optionList">${fromLp.map(renderFocusRow).join("")}</div>` : '<div class="notice">[[s_68119e6a931d]]</div>'}<div class="sectionTitle">[[s_946254b0a26e]]</div>${freeOnly.length ? `<div class="optionList">${freeOnly.map(renderFocusRow).join("")}</div>` : '<div class="notice">[[s_463e4257d41a]]</div>'}${issuesHtml(6)}</section>`;
  }
  function renderFocusRow(s) {
    const slots = focusSlotDefs(s.id),
      arr = state.focuses[s.id] || [],
      capSources = lifepathCapSources(s.id),
      recs = lifepathFocusRecommendations(s.id);
    return `<div class="focusCard"><div class="focusHead"><div><button class="skillNameBtn" data-info-skill="${s.id}">${e(s.name)}</button><div class="rowmeta">${e(M("focusRowMeta", { current: finalSkill(s.id), cap: skillCap(s.id), lifepaths: capSources.length ? M("focusRowLifepaths", { names: capSources.join(" · ") }) : "", slots: slots.length, slotsLabel: M(slots.length === 1 ? "focusSlotsOne" : "focusSlotsOther") }))}</div></div></div>${recs.length ? `<div class="focusRecommendationSummary">${recs.map((r) => `<span><b>${e(r.source)}</b>: ${r.values.map((v) => e(v.label)).join(" / ")}</span>`).join("")}</div>` : ""}<div class="focusInputs">${slots.map((slot, i) => renderFocusSlot(s, slot, i, arr[i] || null)).join("")}</div></div>`;
  }
  function renderFocusSlot(s, slot, i, value) {
    const recs = lifepathFocusRecommendations(s.id),
      lpValues = [];
    recs.forEach((r) =>
      r.values.forEach((v) => {
        if (!lpValues.some((x) => x.ref === v.ref)) lpValues.push(v);
      }),
    );
    const raw = rawFocusSuggestions(s.id).filter(
        (v) => !lpValues.some((x) => x.ref === v.ref),
      ),
      all = [...lpValues, ...raw],
      displayValue = focusEntryLabel(s.id, value);
    return `<div class="focusSlot"><div class="focusSlotHead"><b>${e(M("focusAtRating", { rating: slot.threshold }))}</b><span class="tag">[[s_1d5d6e8f1778]]</span></div><div class="field" style="margin:0"><input list="focus-${s.id}-${i}" data-focus="${s.id}:${i}" value="${e(displayValue)}" placeholder="[[s_1c85fd5e02c0]]"><datalist id="focus-${s.id}-${i}">${all.map((x) => `<option value="${e(x.label)}"></option>`).join("")}</datalist></div>${lpValues.length ? `<div class="focusChoiceLabel">[[s_30df11dceb56]]</div><div class="focusSuggestions">${lpValues.map((x) => `<button type="button" class="focusSuggestion recommended" data-focus-pick="${s.id}:${i}" data-focus-ref="${e(x.ref)}">${e(x.label)}</button>`).join("")}</div>` : ""}${
      raw.length
        ? `<div class="focusChoiceLabel">[[s_b527157990fb]]</div><div class="focusSuggestions">${raw
            .slice(0, 10)
            .map(
              (x) =>
                `<button type="button" class="focusSuggestion" data-focus-pick="${s.id}:${i}" data-focus-ref="${e(x.ref)}">${e(x.label)}</button>`,
            )
            .join("")}</div>`
        : ""
    }<div class="rowmeta">[[s_a7e985288ef7]]</div></div>`;
  }

  function renderPowers() {
    const c = creature(),
      cl = clanById(state.clan.id),
      cds = clanDisciplineIds(),
      needsChoice = !!(cl?.disciplineRule?.choice && !state.clan.choice),
      sireOnly =
        state.sire.bonusDiscipline && !cds.includes(state.sire.bonusDiscipline)
          ? state.sire.bonusDiscipline
          : null,
      caps = tierDisciplineCaps();
    return `<section class="step active"><h1>[[s_5f7f7ffccf35]]</h1><div class="lead">${e(M("powersLead", { dots: c.disciplineDots, powers: c.disciplinePowers, traits: c.clanTraits, merits: c.merits }))}</div>${needsChoice ? `<div class="notice warn"><b>${e(M("variableClanUnresolved", { clan: cl.name }))}</b> ${e(M("resolveClanChoiceNote"))} <button class="btn ghost" type="button" data-action="go-clan" style="margin-left:8px;min-height:32px">[[s_f7acc2ce067e]]</button></div>` : ""}<div class="sectionTitle">[[s_039300206d12]]</div><div class="budgetBar"><span class="pill ${totalClanDisciplineDots() === c.disciplineDots ? "good" : "warn"}">${e(M("clanDotsBudget", { used: totalClanDisciplineDots(), total: c.disciplineDots }))}</span><span class="pill">${e(M("sireBonus", { value: state.sire.bonusDiscipline ? `${discById(state.sire.bonusDiscipline)?.name} 1` : S("s_d0a5cd87735f") }))}</span><span class="pill">${e(M("chargenMax", { max: c.maxDisciplineDots }))}</span></div><div class="notice">${e(M("disciplineSpreadNote", { clan: caps.clan, nonClan: caps.nonClan }))}</div><div class="grid3 equalTiles">${cds.map((id) => renderDiscDotCard(id)).join("") || '<div class="notice warn">[[s_03cba82e6be6]]</div>'}${sireOnly ? renderSireOnlyDiscCard(sireOnly) : ""}</div><div class="sectionTitle">[[s_1a11e3511dc4]]</div><div class="budgetBar"><span class="pill ${state.disciplines.powers.length === c.disciplinePowers ? "good" : "warn"}">${e(M("powersBudget", { used: state.disciplines.powers.length, total: c.disciplinePowers }))}</span></div>${renderPowerGroups()}<div class="sectionTitle">[[s_f2d358efc8f6]]</div><div class="budgetBar"><span class="pill ${state.traits.length === c.clanTraits ? "good" : "warn"}">${e(M("traitsBudget", { used: state.traits.length, total: c.clanTraits }))}</span></div>${cl?.complete ? `<div class="gridAuto">${cl.traits.map(renderTraitCard).join("")}</div>` : `<div class="notice warn">${e(M("missingClanTraitSet", { clan: cl?.name || S("s_ff48b4ba7b3f") }))}</div>`}<div class="sectionTitle">[[s_12473ae7fbd7]]</div><div class="budgetBar"><span class="pill ${state.merits.length === c.merits ? "good" : "warn"}">${e(M("meritsBudget", { used: state.merits.length, total: c.merits }))}</span></div><div class="gridAuto">${D.merits.map(renderMeritCard).join("")}</div>${issuesHtml(7)}</section>`;
  }
  function renderDiscDotCard(id) {
    const d = discById(id),
      free = Number(state.disciplines.clanDots[id] || 0),
      rating = disciplineRating(id),
      sire = state.sire.bonusDiscipline === id,
      canDown = free > 0,
      canUp =
        totalClanDisciplineDots() < creature().disciplineDots &&
        rating < creature().maxDisciplineDots;
    return `<div class="card infoTile"><button class="tileInfo" data-info-disc="${id}" aria-label="${e(M("readRules", { name: d.name }))}">?</button><div class="row"><div><div class="rowname">${e(d.name)}</div><div class="rowmeta">${e(M("disciplineRatingMeta", { rating, allocation: free, sire: sire ? M("sireMarker") : "", gap: sourceGapDisc(id) ? M("powerGapMarker") : "" }))}</div></div><div class="stepper"><button data-stepper="disc:${id}" data-delta="-1" ${canDown ? "" : "disabled"}>−</button><div class="n">${rating}</div><button data-stepper="disc:${id}" data-delta="1" ${canUp ? "" : "disabled"}>+</button></div></div></div>`;
  }
  function renderSireOnlyDiscCard(id) {
    const d = discById(id);
    return `<div class="card infoTile"><button class="tileInfo" data-info-disc="${id}" aria-label="${e(M("readRules", { name: d.name }))}">?</button><div class="row"><div><div class="rowname">${e(d.name)}</div><div class="rowmeta">${e(M("sireOnlyDisciplineMeta"))}</div></div><div class="stepper"><button disabled>−</button><div class="n">1</div><button disabled>+</button></div></div></div>`;
  }
  function renderPowerGroups() {
    const ids = D.disciplines
      .filter((d) => disciplineRating(d.id) > 0)
      .map((d) => d.id);
    if (!ids.length)
      return '<div class="notice warn">[[s_04841f39c2eb]]</div>';
    return ids
      .map((id) => {
        const d = discById(id),
          r = disciplineRating(id),
          powers = (d.powers || []).filter((p) => p.rank <= r),
          sel = state.disciplines.powers.filter(
            (x) => x.disciplineId === id,
          ).length;
        return `<div class="powerGroup"><div class="powerGroupHead"><div><b>${e(d.name)}</b><div class="meta">${e(M("disciplineSelectedPowers", { rating: r, count: sel, powerWord: M(sel === 1 ? "powerSingular" : "powerPlural") }))}</div></div><button class="tileInfo inlineInfo" data-info-disc="${id}" aria-label="${e(M("readRules", { name: d.name }))}">?</button></div>${powers.length ? `<div class="gridAuto equalTiles">${powers.map((p) => renderPowerCard({ ...p, disciplineId: id, disciplineName: d.name })).join("")}</div>` : `<div class="notice warn">[[s_bdc1c11f48f2]]</div>`}</div>`;
      })
      .join("");
  }
  function renderPowerCard(p) {
    const sel = powerSelected(p.disciplineId, p.id);
    return `<div class="powerCard infoTile selectable ${sel ? "selected" : ""}" data-power="${p.disciplineId}:${p.id}"><button class="tileInfo" data-info-power="${p.disciplineId}:${p.id}" aria-label="${e(M("readRules", { name: p.name }))}">?</button><div class="checkline"><input type="checkbox" ${sel ? "checked" : ""} tabindex="-1"><div><b>${e(p.name)}</b><div class="meta">${e(M("disciplinePowerKicker", { discipline: p.disciplineName, rank: p.rank, category: p.category }))}</div></div></div><div class="powerMeta"><span class="tag">${e(p.cost || S("s_ce0e9e10727e"))}</span><span class="tag">${e(p.activate || S("s_b4395abff639"))}</span>${p.detailsMissing ? '<span class="tag warn">[[s_89edce0fa0d8]]</span>' : ""}</div></div>`;
  }
  function renderTraitCard(t) {
    const ok = traitEligible(t),
      sel = state.traits.includes(t.id);
    return `<div class="traitCard infoTile selectable ${sel ? "selected" : ""} ${!ok ? "disabled" : ""}" data-trait="${t.id}"><button class="tileInfo" data-info-trait="${t.id}" aria-label="${e(M("readRules", { name: t.name }))}">?</button><div class="checkline"><input type="checkbox" ${sel ? "checked" : ""} ${!ok ? "disabled" : ""} tabindex="-1"><div><b>${e(t.name)}</b><div class="meta">${e(t.prerequisites)}</div></div></div></div>`;
  }
  function renderMeritCard(m) {
    const ok = requirementsEligible(m.requirements),
      sel = state.merits.includes(m.id);
    return `<div class="meritCard infoTile selectable ${sel ? "selected" : ""} ${!ok ? "disabled" : ""}" data-merit="${m.id}"><button class="tileInfo" data-info-merit="${m.id}" aria-label="${e(M("readRules", { name: m.name }))}">?</button><div class="checkline"><input type="checkbox" ${sel ? "checked" : ""} ${!ok ? "disabled" : ""} tabindex="-1"><div><b>${e(m.name)}</b><div class="meta">${e(m.summary)}</div></div></div></div>`;
  }

  function humanityPositions() {
    const t = tierOf();
    if (t === "ancilla")
      return [
        { v: -1, l: S("s_b3427402aa5f") },
        { v: 0, l: S("s_4bd291394543") },
        { v: 1, l: S("s_fb9b57f130a6") },
      ];
    if (t === "elder")
      return [
        { v: -2, l: S("s_9ccb23bcec26") },
        { v: 0, l: S("s_4bd291394543") },
        { v: 2, l: S("s_2e9317893258") },
      ];
    return [{ v: 0, l: S("s_4bd291394543") }];
  }
  function renderHumanity() {
    return `<section class="step active"><h1>[[s_4a03a519b095]]</h1><div class="lead">[[s_bab17e0d5f3a]]</div><div class="sectionTitle">[[s_dc3a695ed2b8]]</div><div class="grid3">${humanityPositions()
      .map(
        (x) =>
          `<button class="choiceCard ${state.humanity.position === x.v ? "selected" : ""}" data-humanity="${x.v}"><h3>${e(x.l)}</h3><div class="meta">${e(S(x.v === 0 ? "s_230e2e006d44" : "s_483424abfa31"))}</div></button>`,
      )
      .join(
        "",
      )}</div><div class="sectionTitle">[[s_bddc7adb1204]]</div><div class="gridAuto">${D.natures.map((n) => `<div class="natureCard infoTile selectable ${state.humanity.nature === n.id ? "selected" : ""}" data-nature="${n.id}"><button class="tileInfo" data-info-nature="${n.id}" aria-label="${e(M("readNatureRules", { name: n.name }))}">?</button><b>${e(n.name)}</b><div class="meta">${e(n.summary)}</div></div>`).join("")}</div>${issuesHtml(8)}</section>`;
  }

  function renderResources() {
    const c = creature(),
      agg = aggregatedLifepathResources(),
      left = Math.max(0, c.freeResourceDots - freeResourceSpent());
    return `<section class="step active"><h1>[[s_b729875dd3e3]]</h1><div class="lead">[[s_8143e9593c80]]</div><div class="notice resourceRules"><b>[[s_d2c94d04a851]]</b> [[s_eec5303b9536]] <b>?</b> [[s_a74a5c796c05]]</div><div class="sectionTitle">[[s_829318c8d255]]</div><div class="grid2">${
      agg
        .map((r) => {
          const rt = resourceType(r.type),
            detail = resourceDetail(r.key);
          return `<div class="card infoTile resourceCard"><button class="tileInfo" data-info-resource="${r.type}" aria-label="${e(M("readRules", { name: rt?.name || r.type }))}">?</button><div class="resourceTitle"><b>${e(rt?.name || r.type)}</b><span class="resourceDots">${dots(r.dots)} <small>${r.dots}</small></span></div>${r.label ? `<div class="meta">${e(r.label)}</div>` : ""}<div class="choiceRowMeta">${e(rt?.description || "")}</div><div class="tagrow">${r.sources.map((x) => `<span class="tag">${e(M("resourceSourceTag", { source: x.source, dots: x.dots }))}</span>`).join("")}</div><div class="field resourceDetailField"><label>${e(S(r.label ? "s_68f2dea03f3e" : "s_1c3a28365f55"))}</label><textarea data-resource-detail="${e(r.key)}" placeholder="${e(S(r.type === "haven" ? "s_24b751fc219f" : "s_783776510dd9"))}">${e(detail)}</textarea></div></div>`;
        })
        .join("") ||
      '<div class="notice warn">[[s_a2a85f7653c6]]</div>'
    }</div><div class="sectionTitle">[[s_d3fc0a9dc167]]</div><div class="allocationStatus compact ${left === 0 ? "complete" : ""}"><div><span>[[s_7020f74451f5]]</span><strong>${left}</strong><small>${e(M("resourceFreeProgress", { used: freeResourceSpent(), total: c.freeResourceDots }))}</small></div><button class="btn" data-action="add-resource" ${freeResourceSpent() >= c.freeResourceDots ? "disabled" : ""}>[[s_99f57cd5f741]]</button></div>${state.resources.free.map((r, i) => renderFreeResource(r, i)).join("")}${issuesHtml(9)}</section>`;
  }
  function renderFreeResource(r, i) {
    const rt = resourceType(r.type);
    return `<div class="resourceEntry infoTile">${r.type ? `<button class="tileInfo" data-info-resource="${r.type}" aria-label="${e(M("readRules", { name: rt?.name || r.type }))}">?</button>` : ""}<div class="field"><label>[[s_3deb74565196]]</label><select data-free-res-type="${i}"><option value="">[[s_c3b69e661eec]]</option>${D.resourceTypes.map((x) => `<option value="${x.id}" ${r.type === x.id ? "selected" : ""}>${e(x.name)}</option>`).join("")}</select></div><div class="field"><label>[[s_d15a04bf03ea]]</label><input data-free-res-label="${i}" value="${e(r.label || "")}" placeholder="[[s_ed5af1424bf8]]"></div><div class="field"><label>[[s_4b4475f26b43]]</label><input data-free-res-dots="${i}" type="number" min="1" max="${attrMax()}" value="${Number(r.dots || 1)}"></div><button class="btn danger" data-remove-resource="${i}">[[s_e963907dac5c]]</button><div class="field resourceFreeDescription"><label>[[s_68f2dea03f3e]]</label><textarea data-free-res-description="${i}" placeholder="[[s_033072d2ce30]]">${e(r.description || "")}</textarea></div></div>`;
  }

  function renderFinish() {
    const issues = allIssues(),
      lpNames = state.lifepaths.map((_, i) => lpDef(i)?.name).filter(Boolean);
    return `<section class="step active"><h1>[[s_c543e29e315c]]</h1><div class="lead">[[s_32dccedb01e3]]</div><div class="grid2"><div class="field"><label>[[s_709a23220f2c]]</label><input id="charName" value="${e(state.identity.name)}"></div><div class="field"><label>[[s_04259816ace1]]</label><input id="charAlias" value="${e(state.identity.alias)}"></div><div class="field"><div class="fieldLabelRow"><label>[[s_ca051f59e015]]</label><button class="fieldInfoBtn" data-info-apparent-age aria-label="[[s_eb4ac84dcf2a]]">?</button></div><input id="apparentAge" value="${e(state.identity.apparentAge)}"><div class="fieldHint">[[s_d9fb4dbdff9a]]</div></div><div class="field"><label>[[s_6272cf988e1c]]</label><input id="actualAge" value="${e(state.identity.actualAge)}"><div class="fieldHint">[[s_9713d6f12099]]</div></div><div class="field"><label>[[s_a16df9616267]]</label><input id="nostalgicDecade" value="${e(state.identity.nostalgicDecade)}"></div></div><div class="sectionTitle sectionTitleWithInfo"><span>[[s_f836fce0ec05]]</span><button class="fieldInfoBtn" data-info-important-items aria-label="[[s_8fa9796dcc94]]">?</button></div><div class="notice">${e(M("importantItemsAllowance", { items: lpCount(), itemWord: M(lpCount() === 1 ? "importantItemSingular" : "importantItemPlural"), paths: lpCount(), pathWord: M(lpCount() === 1 ? "lifepathSingular" : "lifepathPlural"), names: lpNames.join(" · ") || "—" }))}</div><div class="grid2">${state.identity.items.map((x, i) => `<div class="field"><label>${e(M("importantItemNumber", { n: i + 1 }))}</label><input data-important-item="${i}" value="${e(x)}" placeholder="[[s_00c7620ae215]]"></div>`).join("")}</div><div class="field"><div class="fieldLabelRow"><label>[[s_c16d9124ca48]]</label><button class="fieldInfoBtn" data-info-weapons aria-label="[[s_7d246cc0ac3a]]">?</button></div><textarea id="weapons" placeholder="[[s_6cbda4b51ec4]]">${e(state.identity.weapons || "")}</textarea></div><div class="field"><label>[[s_05ab2829f589]]</label><textarea id="flaws">${e(state.identity.flaws)}</textarea></div><div class="sectionTitle">[[s_16910c218ae6]]</div>${reviewHtml()}<div class="sectionTitle">[[s_dd74d182c641]]</div>${issues.length ? `<div class="issues">${issues.map((x) => `<div class="issue ${x.severity}">${e(M("stepNumberedIssue", { step: x.step + 1, message: x.msg }))}</div>`).join("")}</div>` : '<div class="notice good">[[s_87a16d48cf00]]</div>'}${issuesHtml(10)}</section>`;
  }
  function sheetDots(n) {
    return n > 0
      ? `<span class="sheetDots" aria-label="${e(M("sheetDotsAria", { count: n }))}">${dots(n)}</span>`
      : '<span class="sheetDots empty">—</span>';
  }
  function sheetInfoButton(attr, value, label) {
    return `<button class="sheetInfoBtn" ${attr}="${e(value)}" aria-label="${e(label)}">?</button>`;
  }
  function reviewSkillRow(s) {
    const r = finalSkill(s.id),
      fs = (state.focuses[s.id] || [])
        .filter(focusEntryFilled)
        .map((entry) => focusEntryLabel(s.id, entry));
    return `<div class="sheetSkillRow"><span class="sheetSkillName">${e(s.name)}</span>${sheetDots(r)}<span class="sheetFocuses">${fs.length ? e(fs.join(" · ")) : "—"}</span>${sheetInfoButton("data-info-skill", s.id, M("readRules", { name: s.name }))}</div>`;
  }
  function reviewDiscGroup(d) {
    const r = disciplineRating(d.id),
      powers = state.disciplines.powers
        .map((x) =>
          x.disciplineId === d.id
            ? d.powers.find((p) => p.id === x.powerId)
            : null,
        )
        .filter(Boolean)
        .sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name));
    return `<div class="sheetDiscGroup"><div class="sheetDiscTitle"><b>${e(d.name)}</b><span class="sheetDiscTitleRight">${sheetDots(r)}${sheetInfoButton("data-info-disc", d.id, M("readRules", { name: d.name }))}</span></div>${powers.length ? powers.map((p) => `<div class="sheetPowerRow"><span>${e(p.name)}</span><span class="sheetPowerActions"><small class="sheetPowerRank">${e(M("rankDot", { rank: p.rank }))}</small>${sheetInfoButton("data-info-power", `${d.id}:${p.id}`, M("readRules", { name: p.name }))}</span></div>`).join("") : '<div class="sheetMuted">[[s_7b5b5aba3395]]</div>'}</div>`;
  }
  function reviewTraitCard(t) {
    return `<div class="sheetDiscGroup sheetRuleCard"><div class="sheetDiscTitle"><b>${e(t.name)}</b>${sheetInfoButton("data-info-trait", t.id, M("readRules", { name: t.name }))}</div><div class="sheetMuted">${e(t.prerequisites || S("s_94f47410b37b"))}</div></div>`;
  }
  function reviewMeritCard(m) {
    return `<div class="sheetDiscGroup sheetRuleCard"><div class="sheetDiscTitle"><b>${e(m.name)}</b>${sheetInfoButton("data-info-merit", m.id, M("readRules", { name: m.name }))}</div><div class="sheetMuted">${e(m.summary || m.prerequisites || S("s_56005f735049"))}</div></div>`;
  }
  function reviewResourceRow(r, detail = "") {
    const rt = resourceType(r.type);
    return `<div class="sheetResourceRow"><div class="sheetResourceHead"><b>${e(rt?.name || r.type)}${r.label ? `: ${e(r.label)}` : ""}</b><span class="sheetResourceActions">${sheetDots(Number(r.dots || 0))}${sheetInfoButton("data-info-resource", r.type, M("readRules", { name: rt?.name || r.type }))}</span></div>${detail ? `<div class="sheetResourceDetail">${e(detail)}</div>` : ""}</div>`;
  }
  function reviewHtml() {
    const c = clanById(state.clan.id),
      sire = byId(D.sires, state.sire.type),
      nature = byId(D.natures, state.humanity.nature),
      traits = state.traits
        .map((id) => c?.traits.find((t) => t.id === id))
        .filter(Boolean),
      merits = state.merits.map((id) => byId(D.merits, id)).filter(Boolean),
      humanity =
        humanityPositions().find((x) => x.v === state.humanity.position)?.l ||
        "—",
      lpResources = aggregatedLifepathResources(),
      freeResources = state.resources.free.filter((r) => r.type);
    return `<div class="sheetReview"><section class="sheetBlock sheetIdentity"><h3>[[s_7e5a975b6add]]</h3><div class="sheetIdentityGrid">${sheetKV(S("s_709a23220f2c"), state.identity.name || "—")}${sheetKV(S("s_04259816ace1"), state.identity.alias || "—")}${sheetKV(S("s_37894f731729"), c?.name || "—", `data-info-clan="${e(c?.id || "")}"`)}${sheetKV(S("s_5bd44ebe63cd"), creature().name, "data-info-review-tier")}${sheetKV(S("s_8d441fb5f62f"), M("generationWithModifier", { generation: state.generation, modifier: generationModifier() }), "data-info-review-generation")}${sheetKV(S("s_0a2795b612ad"), sire?.name || "—", "data-info-review-sire")}${sheetKV(S("s_ca051f59e015"), state.identity.apparentAge || "—", "data-info-apparent-age")}${sheetKV(S("s_6272cf988e1c"), state.identity.actualAge || "—")}${sheetKV(S("s_a16df9616267"), state.identity.nostalgicDecade || "—")}${sheetKV(S("s_35136d138aa4"), state.lifepaths.map((_, i) => lpDef(i)?.name || "—").join(" · "), "data-info-review-lifepaths", "wide")}</div></section><section class="sheetBlock sheetHumanity"><h3>${e(S("s_7869e66e6173"))} ${sheetInfoButton("data-info-review-humanity", "1", S("s_2b4c564c2f46"))}</h3><div class="sheetHumanityLine"><strong>${e(humanity)}</strong><span>${e(S("s_bddc7adb1204"))}: <b>${e(nature?.name || "—")}</b> ${nature ? sheetInfoButton("data-info-nature", nature.id, M("readNature", { name: nature.name })) : ""}</span></div></section><div class="sheetVitals"><section class="sheetBlock vital"><span>[[s_a522e333addb]]</span><strong>${vitaeMax()}</strong><small>[[s_55471d5f3de4]]</small></section><section class="sheetBlock vital"><span>[[s_815d46237b83]]</span><strong>${willpowerMax()}</strong><small>[[s_d3355d77c43a]]</small></section></div><section class="sheetBlock"><h3>[[s_a6652617f2c7]]</h3><div class="sheetAttrGrid">${ATTR_CATEGORIES
      .map(
        (cat) =>
          `<div class="sheetAttrCol"><h4>${e(attrCategoryLabel(cat))}</h4>${D.attributes
            .filter((a) => a.category === cat)
            .map(
              (a) =>
                `<div class="sheetAttrRow"><span>${e(a.name)}</span><span class="sheetAttrActions">${sheetDots(Number(state.attributes.ratings[a.id] || 0))}${sheetInfoButton("data-info-attr", a.id, M("readRules", { name: a.name }))}</span></div>`,
            )
            .join("")}</div>`,
      )
      .join(
        "",
      )}</div></section><section class="sheetBlock"><h3>[[s_e09212c7d3ea]]</h3><div class="sheetSkillGrid">${D.skills.map(reviewSkillRow).join("")}</div></section><section class="sheetBlock"><h3>[[s_2b3505197fe7]]</h3><div class="sheetDiscGrid">${
      D.disciplines
        .filter((d) => disciplineRating(d.id) > 0)
        .map(reviewDiscGroup)
        .join("") || '<span class="sheetMuted">—</span>'
    }</div></section><section class="sheetBlock"><h3>[[s_f2d358efc8f6]]</h3><div class="sheetDiscGrid">${traits.length ? traits.map(reviewTraitCard).join("") : '<span class="sheetMuted">—</span>'}</div></section><section class="sheetBlock"><h3>[[s_12473ae7fbd7]]</h3><div class="sheetDiscGrid">${merits.length ? merits.map(reviewMeritCard).join("") : '<span class="sheetMuted">—</span>'}</div></section><section class="sheetBlock"><h3>[[s_87df60de337f]]</h3><div class="sheetResourceGrid">${lpResources.map((r) => reviewResourceRow(r, resourceDetail(r.key))).join("")}${freeResources.map((r) => reviewResourceRow(r, r.description || "")).join("") || '<span class="sheetMuted">—</span>'}</div></section><div class="sheetTwoCol"><section class="sheetBlock"><h3>${e(S("s_f836fce0ec05"))} ${sheetInfoButton("data-info-important-items", "1", S("s_8fa9796dcc94"))}</h3><div class="sheetSimpleList">${
      state.identity.items
        .filter((x) => String(x).trim())
        .map((x) => `<div>${e(x)}</div>`)
        .join("") || '<span class="sheetMuted">—</span>'
    }</div></section><section class="sheetBlock"><h3>${e(S("s_24bcb3f0be1e"))} ${sheetInfoButton("data-info-weapons", "1", S("s_885aa6e5e0c8"))}</h3><div class="sheetText">${e(state.identity.weapons || "—")}</div></section></div>${state.identity.flaws.trim() ? `<section class="sheetBlock"><h3>[[s_73bd6bc4841a]]</h3><div class="sheetText">${e(state.identity.flaws)}</div></section>` : ""}</div>`;
  }
  function sheetKV(k, v, infoAttr = "", extraClass = "") {
    return `<div class="sheetKV ${extraClass}"><span>${e(k)}</span><span class="sheetKVValue"><b>${e(v)}</b>${infoAttr ? `<button class="sheetInfoBtn" ${infoAttr} aria-label="${e(M("readInformation", { name: k }))}">?</button>` : ""}</span></div>`;
  }
  function kv(k, v) {
    return `<div class="kv"><span>${e(k)}</span><b>${e(v)}</b></div>`;
  }

  function bindMain() {
    const root = document.getElementById("mainCard");
    root
      .querySelectorAll('[data-action="prev"]')
      .forEach((b) => (b.onclick = () => goStep(state.step - 1)));
    root
      .querySelectorAll('[data-action="next"]')
      .forEach(
        (b) =>
          (b.onclick = () =>
            goStep(Math.min(state.step + 1, STEP_IDS.length - 1))),
      );
    root
      .querySelectorAll('[data-action="go-clan"]')
      .forEach((b) => (b.onclick = () => goStep(1)));
    const ra = root.querySelector('[data-action="reset-attributes"]');
    if (ra)
      ra.onclick = () => {
        if (
          confirm(S("s_b59155107bd0"))
        ) {
          D.attributes.forEach((a) => (state.attributes.ratings[a.id] = 1));
          render();
        }
      };
    const rs = root.querySelector('[data-action="reset-skills"]');
    if (rs)
      rs.onclick = () => {
        if (
          confirm(
            S("s_89f31ccd8547"),
          )
        ) {
          state.freeSkills = {};
          ensureFocusSlots();
          render();
        }
      };
    const rf = root.querySelector('[data-action="reset-focuses"]');
    if (rf)
      rf.onclick = () => {
        if (confirm(S("s_96bedcc0a719"))) {
          state.focuses = {};
          ensureFocusSlots();
          render();
        }
      };
    root.querySelectorAll("[data-info-step]").forEach(
      (b) =>
        (b.onclick = (ev) => {
          ev.stopPropagation();
          setInfo(infoForStep(Number(b.dataset.infoStep)), true);
        }),
    );
    root
      .querySelectorAll("[data-info-review-tier]")
      .forEach((b) => (b.onclick = () => setInfo(infoReviewTier(), true)));
    root
      .querySelectorAll("[data-info-review-generation]")
      .forEach(
        (b) => (b.onclick = () => setInfo(infoReviewGeneration(), true)),
      );
    root
      .querySelectorAll("[data-info-review-sire]")
      .forEach((b) => (b.onclick = () => setInfo(infoReviewSire(), true)));
    root
      .querySelectorAll("[data-info-review-lifepaths]")
      .forEach((b) => (b.onclick = () => setInfo(infoReviewLifepaths(), true)));
    root
      .querySelectorAll("[data-info-review-humanity]")
      .forEach((b) => (b.onclick = () => setInfo(infoReviewHumanity(), true)));
    root
      .querySelectorAll("[data-info-apparent-age]")
      .forEach((b) => (b.onclick = () => setInfo(infoApparentAge(), true)));
    root
      .querySelectorAll("[data-info-important-items]")
      .forEach((b) => (b.onclick = () => setInfo(infoImportantItems(), true)));
    root
      .querySelectorAll("[data-info-weapons]")
      .forEach((b) => (b.onclick = () => setInfo(infoWeapons(), true)));
    root.querySelectorAll("[data-creature]").forEach(
      (b) =>
        (b.onclick = () => {
          const id = b.dataset.creature;
          if (id !== state.creature) {
            const oldIdentity = state.identity;
            state = blankState();
            state.creature = id;
            state.identity = {
              ...state.identity,
              name: oldIdentity.name,
              alias: oldIdentity.alias,
            };
            ensureGeneration();
            ensureLpSlots();
            ensureItems();
          }
          render();
        }),
    );
    const young = root.querySelector("#youngToggle");
    if (young)
      young.onchange = () => {
        state.young = young.checked;
        state.lifepaths = [];
        state.freeSkills = {};
        state.focuses = {};
        state.resources.free = [];
        ensureLpSlots();
        ensureFocusSlots();
        ensureItems();
        render();
      };
    root.querySelectorAll("[data-clan]").forEach(
      (b) =>
        (b.onclick = () => {
          state.clan = {
            id: b.dataset.clan,
            choice: null,
            caitiffDisciplines: [],
          };
          state.disciplines = { clanDots: {}, powers: [] };
          state.traits = [];
          state.sire.bonusDiscipline = null;
          setInfo(infoClan(b.dataset.clan), false);
          render();
        }),
    );
    root.querySelectorAll("[data-info-clan]").forEach(
      (b) =>
        (b.onclick = (ev) => {
          ev.stopPropagation();
          setInfo(infoClan(b.dataset.infoClan), true);
        }),
    );
    root.querySelectorAll("[data-clan-choice]").forEach(
      (b) =>
        (b.onclick = () => {
          state.clan.choice = b.dataset.clanChoice;
          state.disciplines = { clanDots: {}, powers: [] };
          state.traits = [];
          render();
        }),
    );
    root.querySelectorAll("[data-caitiff-disc]").forEach(
      (x) =>
        (x.onchange = () => {
          let a = state.clan.caitiffDisciplines || [];
          if (x.checked) {
            if (a.length >= 3) {
              x.checked = false;
              return;
            }
            a = [...a, x.dataset.caitiffDisc];
          } else a = a.filter((id) => id !== x.dataset.caitiffDisc);
          state.clan.caitiffDisciplines = a;
          state.disciplines = { clanDots: {}, powers: [] };
          render();
        }),
    );
    const rc = root.querySelector('[data-action="random-caitiff"]');
    if (rc)
      rc.onclick = () => {
        const ids = D.disciplines.map((d) => d.id);
        for (let i = ids.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [ids[i], ids[j]] = [ids[j], ids[i]];
        }
        state.clan.caitiffDisciplines = ids.slice(0, 3);
        state.disciplines = { clanDots: {}, powers: [] };
        render();
      };
    root.querySelectorAll("[data-sire-type]").forEach(
      (b) =>
        (b.onclick = () => {
          state.sire.type = b.dataset.sireType;
          state.sire.relatedClan = null;
          state.sire.bonusDiscipline = null;
          render();
        }),
    );
    root.querySelectorAll("[data-generation]").forEach(
      (b) =>
        (b.onclick = () => {
          state.generation = Number(b.dataset.generation);
          render();
        }),
    );
    root.querySelectorAll("[data-related-clan]").forEach(
      (b) =>
        (b.onclick = () => {
          state.sire.relatedClan = b.dataset.relatedClan;
          state.sire.bonusDiscipline = null;
          render();
        }),
    );
    root.querySelectorAll("[data-sire-bonus]").forEach(
      (b) =>
        (b.onclick = () => {
          state.sire.bonusDiscipline = b.dataset.sireBonus;
          state.disciplines.powers = state.disciplines.powers.filter((x) =>
            disciplinesPowerStillValid(x),
          );
          render();
        }),
    );
    root.querySelectorAll("[data-lp-select]").forEach(
      (sel) =>
        (sel.onchange = () => {
          const i = Number(sel.dataset.lpSelect);
          state.lifepaths[i] = {
            id: sel.value || null,
            skillDots: {},
            resourceDots: {},
            custom:
              sel.value === "__custom__"
                ? {
                    name: "",
                    description: "",
                    skills: [],
                    resources: [
                      { type: "", label: "" },
                      { type: "", label: "" },
                      { type: "", label: "" },
                    ],
                  }
                : null,
          };
          enforceSkillCaps();
          render();
        }),
    );
    root.querySelectorAll("[data-custom-name]").forEach(
      (x) =>
        (x.oninput = () => {
          state.lifepaths[Number(x.dataset.customName)].custom.name = x.value;
          save();
        }),
    );
    root.querySelectorAll("[data-custom-desc]").forEach(
      (x) =>
        (x.oninput = () => {
          state.lifepaths[Number(x.dataset.customDesc)].custom.description =
            x.value;
          save();
        }),
    );
    root.querySelectorAll("[data-custom-skill]").forEach(
      (x) =>
        (x.onchange = () => {
          const [si, id] = x.dataset.customSkill.split(":");
          const c = state.lifepaths[Number(si)].custom;
          let a = c.skills || [];
          if (x.checked) {
            if (a.length >= 5) {
              x.checked = false;
              return;
            }
            a = [...a, id];
          } else a = a.filter((y) => y !== id);
          c.skills = a;
          state.lifepaths[Number(si)].skillDots = {};
          enforceSkillCaps();
          render();
        }),
    );
    root.querySelectorAll("[data-custom-res-type]").forEach(
      (x) =>
        (x.onchange = () => {
          const [si, ri] = x.dataset.customResType.split(":");
          state.lifepaths[Number(si)].custom.resources[Number(ri)].type =
            x.value;
          state.lifepaths[Number(si)].resourceDots = {};
          render();
        }),
    );
    root.querySelectorAll("[data-custom-res-label]").forEach(
      (x) =>
        (x.oninput = () => {
          const [si, ri] = x.dataset.customResLabel.split(":");
          state.lifepaths[Number(si)].custom.resources[Number(ri)].label =
            x.value;
          save();
        }),
    );
    root
      .querySelectorAll("[data-stepper]")
      .forEach(
        (b) =>
          (b.onclick = () =>
            handleStepper(b.dataset.stepper, Number(b.dataset.delta))),
      );
    root
      .querySelectorAll("[data-info-lp]")
      .forEach(
        (b) =>
          (b.onclick = () => setInfo(infoLp(Number(b.dataset.infoLp)), true)),
      );
    root.querySelectorAll("[data-role]").forEach(
      (sel) =>
        (sel.onchange = () => {
          const key = sel.dataset.role,
            newRole = sel.value;
          if (!roleSwapValid(key, newRole)) {
            render();
            return;
          }
          const other = Object.keys(state.attributes.roles).find(
            (k) => k !== key && state.attributes.roles[k] === newRole,
          );
          if (other) {
            const old = state.attributes.roles[key];
            state.attributes.roles[other] = old;
          }
          state.attributes.roles[key] = newRole;
          render();
        }),
    );
    root.querySelectorAll("[data-attr]").forEach(
      (b) =>
        (b.onclick = () => {
          const a = attrById(b.dataset.attr),
            r = Number(b.dataset.rating);
          if (!a || !attrRatingAllowed(a, r)) return;
          state.attributes.ratings[a.id] = r;
          setInfo(infoAttribute(a.id), false);
          render();
        }),
    );
    root
      .querySelectorAll("[data-info-attr]")
      .forEach(
        (b) =>
          (b.onclick = () => setInfo(infoAttribute(b.dataset.infoAttr), true)),
      );
    root
      .querySelectorAll("[data-info-skill]")
      .forEach(
        (b) =>
          (b.onclick = () => setInfo(infoSkill(b.dataset.infoSkill), true)),
      );
    root.querySelectorAll("[data-focus]").forEach(
      (x) =>
        (x.oninput = () => {
          const [sid, i] = x.dataset.focus.split(":");
          state.focuses[sid][Number(i)] = normalizeFocusEntry(sid, x.value);
          save();
        }),
    );
    root.querySelectorAll("[data-focus-pick]").forEach(
      (b) =>
        (b.onclick = () => {
          const [sid, i] = b.dataset.focusPick.split(":");
          state.focuses[sid][Number(i)] = { ref: b.dataset.focusRef };
          render();
        }),
    );
    root
      .querySelectorAll("[data-info-disc]")
      .forEach(
        (b) =>
          (b.onclick = () => setInfo(infoDiscipline(b.dataset.infoDisc), true)),
      );
    root.querySelectorAll("[data-power]").forEach(
      (card) =>
        (card.onclick = (ev) => {
          if (ev.target.closest("[data-info-power]")) return;
          const [did, pid] = card.dataset.power.split(":");
          togglePower(did, pid);
        }),
    );
    root.querySelectorAll("[data-info-power]").forEach(
      (b) =>
        (b.onclick = (ev) => {
          ev.stopPropagation();
          const [did, pid] = b.dataset.infoPower.split(":");
          setInfo(infoPower(did, pid), true);
        }),
    );
    root.querySelectorAll("[data-trait]").forEach(
      (card) =>
        (card.onclick = (ev) => {
          if (ev.target.closest("[data-info-trait]")) return;
          const c = clanById(state.clan.id),
            t = c?.traits.find((t) => t.id === card.dataset.trait);
          if (!t || !traitEligible(t)) return;
          toggleLimited(state.traits, t.id, creature().clanTraits);
          render();
        }),
    );
    root.querySelectorAll("[data-info-trait]").forEach(
      (b) =>
        (b.onclick = (ev) => {
          ev.stopPropagation();
          const t = clanById(state.clan.id)?.traits.find(
            (t) => t.id === b.dataset.infoTrait,
          );
          if (t) setInfo(infoTrait(t), true);
        }),
    );
    root.querySelectorAll("[data-merit]").forEach(
      (card) =>
        (card.onclick = (ev) => {
          if (ev.target.closest("[data-info-merit]")) return;
          const m = byId(D.merits, card.dataset.merit);
          if (!m || !requirementsEligible(m.requirements)) return;
          toggleLimited(state.merits, m.id, creature().merits);
          render();
        }),
    );
    root.querySelectorAll("[data-info-merit]").forEach(
      (b) =>
        (b.onclick = (ev) => {
          ev.stopPropagation();
          const m = byId(D.merits, b.dataset.infoMerit);
          if (m) setInfo(infoMerit(m), true);
        }),
    );
    root.querySelectorAll("[data-humanity]").forEach(
      (b) =>
        (b.onclick = () => {
          state.humanity.position = Number(b.dataset.humanity);
          render();
        }),
    );
    root.querySelectorAll("[data-nature]").forEach(
      (card) =>
        (card.onclick = (ev) => {
          if (ev.target.closest("[data-info-nature]")) return;
          state.humanity.nature = card.dataset.nature;
          render();
        }),
    );
    root.querySelectorAll("[data-info-nature]").forEach(
      (b) =>
        (b.onclick = (ev) => {
          ev.stopPropagation();
          const n = byId(D.natures, b.dataset.infoNature);
          setInfo(infoNature(n), true);
        }),
    );
    const ar = root.querySelector('[data-action="add-resource"]');
    if (ar)
      ar.onclick = () => {
        state.resources.free.push({
          type: "",
          label: "",
          dots: 1,
          description: "",
        });
        render();
      };
    root.querySelectorAll("[data-free-res-type]").forEach(
      (x) =>
        (x.onchange = () => {
          state.resources.free[Number(x.dataset.freeResType)].type = x.value;
          render();
        }),
    );
    root.querySelectorAll("[data-free-res-label]").forEach(
      (x) =>
        (x.oninput = () => {
          state.resources.free[Number(x.dataset.freeResLabel)].label = x.value;
          save();
        }),
    );
    root.querySelectorAll("[data-free-res-description]").forEach(
      (x) =>
        (x.oninput = () => {
          state.resources.free[
            Number(x.dataset.freeResDescription)
          ].description = x.value;
          save();
        }),
    );
    root.querySelectorAll("[data-resource-detail]").forEach(
      (x) =>
        (x.oninput = () => {
          setResourceDetail(x.dataset.resourceDetail, x.value);
          save();
        }),
    );
    root.querySelectorAll("[data-free-res-dots]").forEach(
      (x) =>
        (x.onchange = () => {
          state.resources.free[Number(x.dataset.freeResDots)].dots = Math.max(
            1,
            Math.min(attrMax(), Number(x.value) || 1),
          );
          render();
        }),
    );
    root.querySelectorAll("[data-remove-resource]").forEach(
      (b) =>
        (b.onclick = () => {
          state.resources.free.splice(Number(b.dataset.removeResource), 1);
          render();
        }),
    );
    root
      .querySelectorAll("[data-info-resource]")
      .forEach(
        (b) =>
          (b.onclick = () =>
            setInfo(infoResource(b.dataset.infoResource), true)),
      );
    bindText("charName", (v) => (state.identity.name = v));
    bindText("charAlias", (v) => (state.identity.alias = v));
    bindText("apparentAge", (v) => (state.identity.apparentAge = v));
    bindText("actualAge", (v) => (state.identity.actualAge = v));
    bindText("nostalgicDecade", (v) => (state.identity.nostalgicDecade = v));
    bindText("weapons", (v) => (state.identity.weapons = v));
    bindText("flaws", (v) => (state.identity.flaws = v));
    root.querySelectorAll("[data-important-item]").forEach(
      (x) =>
        (x.oninput = () => {
          state.identity.items[Number(x.dataset.importantItem)] = x.value;
          save();
        }),
    );
  }
  function bindText(id, set) {
    const x = document.getElementById(id);
    if (x)
      x.oninput = () => {
        set(x.value);
        save();
      };
  }
  function handleStepper(key, delta) {
    const parts = key.split(":");
    if (parts[0] === "lp-skill") {
      const slot = Number(parts[1]),
        sid = parts[2],
        lp = state.lifepaths[slot],
        cur = Number(lp.skillDots[sid] || 0);
      if (
        delta > 0 &&
        (sum(lp.skillDots) >= lpSkillBudget() ||
          finalSkill(sid) >= skillCap(sid))
      )
        return;
      lp.skillDots[sid] = Math.max(0, cur + delta);
      if (lp.skillDots[sid] === 0) delete lp.skillDots[sid];
      ensureFocusSlots();
      setInfo(infoSkill(sid), false);
      render();
      return;
    }
    if (parts[0] === "lp-res") {
      const slot = Number(parts[1]),
        ri = parts[2],
        lp = state.lifepaths[slot],
        cur = Number(lp.resourceDots[ri] || 0);
      if (delta > 0 && lpResourceSpent(slot) >= lpResourceBudget()) return;
      lp.resourceDots[ri] = Math.max(0, cur + delta);
      if (lp.resourceDots[ri] === 0) delete lp.resourceDots[ri];
      render();
      return;
    }
    if (parts[0] === "free-skill") {
      const sid = parts[1],
        cur = Number(state.freeSkills[sid] || 0);
      if (
        delta > 0 &&
        (sum(state.freeSkills) >= creature().freeSkillDots ||
          finalSkill(sid) >= skillCap(sid))
      )
        return;
      state.freeSkills[sid] = Math.max(0, cur + delta);
      if (state.freeSkills[sid] === 0) delete state.freeSkills[sid];
      ensureFocusSlots();
      setInfo(infoSkill(sid), false);
      render();
      return;
    }
    if (parts[0] === "disc") {
      const id = parts[1],
        cur = Number(state.disciplines.clanDots[id] || 0);
      if (
        delta > 0 &&
        (totalClanDisciplineDots() >= creature().disciplineDots ||
          disciplineRating(id) >= creature().maxDisciplineDots)
      )
        return;
      state.disciplines.clanDots[id] = Math.max(0, cur + delta);
      if (state.disciplines.clanDots[id] === 0)
        delete state.disciplines.clanDots[id];
      state.disciplines.powers = state.disciplines.powers.filter(
        disciplinesPowerStillValid,
      );
      state.traits = state.traits.filter((tid) => {
        const t = clanById(state.clan.id)?.traits.find((t) => t.id === tid);
        return t && traitEligible(t);
      });
      state.merits = state.merits.filter((mid) => {
        const m = byId(D.merits, mid);
        return m && requirementsEligible(m.requirements);
      });
      render();
      return;
    }
  }
  function disciplinesPowerStillValid(x) {
    const p = discById(x.disciplineId)?.powers.find((p) => p.id === x.powerId);
    return !!p && p.rank <= disciplineRating(x.disciplineId);
  }
  function togglePower(did, pid) {
    const idx = state.disciplines.powers.findIndex(
      (x) => x.disciplineId === did && x.powerId === pid,
    );
    if (idx >= 0) state.disciplines.powers.splice(idx, 1);
    else if (state.disciplines.powers.length < creature().disciplinePowers)
      state.disciplines.powers.push({ disciplineId: did, powerId: pid });
    render();
  }
  function toggleLimited(arr, id, max) {
    const i = arr.indexOf(id);
    if (i >= 0) arr.splice(i, 1);
    else if (arr.length < max) arr.push(id);
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `vtm-v6-alpha-${(state.identity.name || "character").replace(/[^a-z0-9_-]+/gi, "_")}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function importJson(file) {
    const r = new FileReader();
    r.onload = () => {
      try {
        const x = JSON.parse(r.result);
        if (![1, 2].includes(Number(x.schemaVersion))) throw new Error(S("s_7804e1e535fb"));
        state = x;
        normalizeState();
        render();
      } catch (err) {
        alert(S("s_4f33b57d5257") + err.message);
      }
    };
    r.readAsText(file);
  }

  function bindGlobal() {
    const reset = () => {
      if (confirm(S("s_5375c6d91d74"))) {
        state = blankState();
        render();
      }
    };
    document.getElementById("exportBtn").onclick = exportJson;
    document.getElementById("importFile").onchange = (e) => {
      if (e.target.files[0]) importJson(e.target.files[0]);
      e.target.value = "";
    };
    document.getElementById("resetBtn").onclick = reset;
    const me = document.getElementById("mobileExportBtn");
    if (me) me.onclick = exportJson;
    const mi = document.getElementById("mobileImportFile");
    if (mi)
      mi.onchange = (e) => {
        if (e.target.files[0]) importJson(e.target.files[0]);
        e.target.value = "";
      };
    const mr = document.getElementById("mobileResetBtn");
    if (mr) mr.onclick = reset;
    const lang = () => {
      window.V6I18N?.toggle();
      render();
    };
    const lb = document.getElementById("langToggleBtn");
    if (lb) lb.onclick = lang;
    const mlb = document.getElementById("mobileLangToggleBtn");
    if (mlb) mlb.onclick = lang;
    document.getElementById("drawerClose").onclick = closeDrawer;
    document.getElementById("drawerBack").onclick = closeDrawer;
    document.getElementById("mobileInfoTop").onclick = () => {
      renderInfo();
      window.V6I18N?.apply(document);
      openDrawer();
    };
    window.V6I18N?.updateControls();
  }
  bindGlobal();
  render();
})();
