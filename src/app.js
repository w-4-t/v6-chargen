(() => {
  "use strict";
  const D = window.V6_DATA;
  const STORAGE = "vtm_v6_alpha_chargen_v0_8_1";
  const LEGACY_STORAGE = [
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
  const STEPS = [
    ["Creature", "What are you?"],
    ["Clan", "Your Clan"],
    ["Sire", "Sire & Generation"],
    ["Lifepaths", "Your Lifepaths"],
    ["Attributes", "Attributes"],
    ["Skills", "Skills"],
    ["Focuses", "Focuses"],
    ["Powers", "Disciplines, Traits & Merits"],
    ["Humanity", "Humanity & Nature"],
    ["Resources", "Your Resources"],
    ["Finish", "Finishing Touches"],
  ];
  const byId = (arr, id) => arr.find((x) => x.id === id);
  const T = (s) =>
    window.V6I18N?.getLocale() === "uk" ? window.V6I18N.tr(s) : String(s ?? "");
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
  const dots = (n) => "●".repeat(Math.max(0, Number(n) || 0));
  const sum = (o) =>
    Object.values(o || {}).reduce((a, b) => a + (Number(b) || 0), 0);
  const tierOf = () =>
    state.creature.includes("elder")
      ? "elder"
      : state.creature.includes("ancilla")
        ? "ancilla"
        : "neonate";
  const tierRank = (t) => D.tierRank[t] || 0;
  const creature = () =>
    byId(D.creatures, state.creature) || byId(D.creatures, "vampire_neonate");
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
      schemaVersion: 1,
      step: 0,
      creature: "vampire_neonate",
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
  function normalizeState() {
    if (!state || state.schemaVersion !== 1) state = blankState();
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
  function lpCount() {
    return state.young && tierOf() === "neonate" ? 1 : creature().lifepaths;
  }
  function lpSkillBudget() {
    return state.young && tierOf() === "neonate" ? 8 : 5;
  }
  function lpResourceBudget() {
    return state.young && tierOf() === "neonate" ? 5 : 3;
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
      name: c.name || "Custom Lifepath",
      description: c.description || "",
      type: "custom",
      tier: "custom",
      skills: (c.skills || []).map((id) => ({ skill: id, focus: "" })),
      resources: (c.resources || []).map((r) => ({
        type: r.type,
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
    return 3 + lifepathCapSources(id).length;
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
    return [1, 3, 5].filter((t) => n >= t);
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
    D.skills.forEach((s) => {
      const slots = focusSlotDefs(s.id),
        old = Array.isArray(state.focuses[s.id]) ? state.focuses[s.id] : [],
        a = [];
      slots.forEach((slot, i) => (a[i] = String(old[i] || "").trim()));
      state.focuses[s.id] = a;
    });
  }
  function lifepathFocusRecommendations(id) {
    const out = [];
    state.lifepaths.forEach((lp, i) => {
      const d = lpDef(i),
        x = lpSkillEntry(d, id);
      if (!d || !x) return;
      const values = [];
      (x.focusOptions || []).forEach((v) => {
        if (v && !values.includes(v)) values.push(v);
      });
      if (
        x.focus &&
        !/^choose /i.test(String(x.focus).trim()) &&
        !values.includes(x.focus)
      )
        values.push(x.focus);
      if (values.length) out.push({ source: d.name, values });
    });
    return out;
  }
  function rawFocusSuggestions(id) {
    return (skillById(id)?.focuses || []).map((f) => f.name).filter(Boolean);
  }
  function lifepathFocusLabel(x) {
    if (!x) return "";
    if (Array.isArray(x.focusOptions) && x.focusOptions.length)
      return x.focusOptions.join(" / ");
    if (x.focusPrompt || /^choose /i.test(String(x.focus || "").trim()))
      return "";
    return x.focus || "";
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
    if (["adoptive_sire", "brood_child"].includes(s.id))
      return allClanPossibleDiscs(state.sire.relatedClan);
    const map = {
      caring_sire: ["fortitude", "potence", "presence"],
      cruel_sire: ["dominate", "fortitude", "obfuscate"],
      manipulative_sire: ["dominate", "potence", "presence"],
      secretive_sire: ["auspex", "celerity", "obfuscate"],
      unknown_sire: ["celerity", "fortitude", "potence"],
      vigilant_sire: ["auspex", "dominate", "fortitude"],
    };
    return map[s.id] || [];
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
    const role = state.attributes.roles[cat.toLowerCase()];
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
    return (
      {
        neonate: { clan: 5, nonClan: 3 },
        ancilla: { clan: 7, nonClan: 5 },
        elder: { clan: 8, nonClan: 7 },
      }[tierOf()] || { clan: 5, nonClan: 3 }
    );
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
  function resourceKey(type, label) {
    return `${type}|${normalizeResourceLabel(label)}`;
  }
  function aggregatedLifepathResources() {
    const map = new Map();
    for (const r of sourceResourceEntries()) {
      const key = resourceKey(r.type, r.label);
      if (!map.has(key))
        map.set(key, {
          key,
          type: r.type,
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

  function prereqEligible(text) {
    text = String(text || "")
      .replace(/\s+/g, " ")
      .trim();
    const tr = tierRank(tierOf());
    if (/Ancilla or stronger/i.test(text) && tr < 2) return false;
    if (/Neonate or stronger/i.test(text) && tr < 1) return false;
    const attrMatch = text.match(/At least\s+(\d+)\s+dots?\s+in\s+Stamina/i);
    if (
      attrMatch &&
      Number(state.attributes.ratings.stamina) < Number(attrMatch[1])
    )
      return false;
    const either = [
      ...text.matchAll(
        /(?:at least\s+)?(\d+)\s+dots?\s+in\s+either\s+([A-Za-z ]+?)\s+or\s+([A-Za-z ]+?)(?:\.|$)/gi,
      ),
    ];
    for (const m of either) {
      const n = Number(m[1]),
        a = discIdByName(m[2]),
        b = discIdByName(m[3]);
      if (Math.max(disciplineRating(a), disciplineRating(b)) < n) return false;
    }
    let stripped = text.replace(
      /(?:at least\s+)?\d+\s+dots?\s+in\s+either\s+[A-Za-z ]+?\s+or\s+[A-Za-z ]+?(?:\.|$)/gi,
      "",
    );
    const reqs = [
      ...stripped.matchAll(
        /(?:At least\s+)?(\d+)\s+dots?\s+in\s+([A-Za-z ]+?)(?=\s+and|\.|$)/gi,
      ),
    ];
    for (const m of reqs) {
      const id = discIdByName(m[2]);
      if (id && disciplineRating(id) < Number(m[1])) return false;
    }
    return true;
  }
  function discIdByName(name) {
    const n = String(name || "")
      .trim()
      .toLowerCase();
    return D.disciplines.find((d) => d.name.toLowerCase() === n)?.id || null;
  }
  function traitEligible(t) {
    return (
      tierRank(tierOf()) >= tierRank(t.tier) && prereqEligible(t.prerequisites)
    );
  }

  function setInfo(obj, openMobile = false) {
    state.info = obj;
    renderInfo();
    if (openMobile && innerWidth <= 900) openDrawer();
  }
  function infoForStep(i) {
    const defs = [
      {
        kicker: "Step 1 · Player Packet",
        title: "What Are You?",
        summary:
          "Choose the vampire tier. The tier sets maximum dots and the character-creation budgets for Lifepaths, Attributes, Disciplines, powers, Merits, Clan Traits, Skills, and Resources.",
        body: "This build focuses on Vampire Neonate, Ancilla, and Elder. Ghoul and Duskborn remain outside the enabled flow for now.",
      },
      {
        kicker: "Step 2 · Player Packet",
        title: "Your Clan",
        summary:
          "Clan determines your curse, Beast/frenzy expression, clan Disciplines, and available Clan Traits.",
        body: "Select a clan, then resolve any required variable Discipline immediately. For Lasombra this means choosing Corruption or Oblivion before Discipline-dot allocation.",
      },
      {
        kicker: "Step 3 · Player Packet",
        title: "Sire & Generation",
        summary:
          "Your sire type grants 1 additional Discipline dot. Generation places you in a power category and sets the generation modifier.",
        body: "The Storyteller typically chooses generation. Neonates are 13th–11th generation, Ancillae 10th–9th, and Elders 8th–6th in the supplied Alpha rules.",
      },
      {
        kicker: "Step 4 · Player Packet",
        title: "Lifepaths",
        summary:
          "Lifepaths represent past professions, identities, and roles. Each Lifepath gives Skill and Resource dots.",
        body: `Each Lifepath normally grants 5 Skill dots among its listed Skills and 3 Resource dots among its listed Resources. ${D.lifepathCompetence}`,
      },
      {
        kicker: "Step 5 · Player Packet",
        title: "Attributes",
        summary:
          "Attributes define the character’s potential in Physical, Social, and Mental categories.",
        body: "Assign primary, secondary, and tertiary category budgets. Each Attribute begins at 1. Use the Info button to read what each rating means; changing dots on mobile no longer opens the help drawer automatically.",
      },
      {
        kicker: "Step 5 · Player Packet + house rule",
        title: "Skills",
        summary:
          "Skills define learned competency. Lifepaths contribute dots first, then you distribute the free Skill dots from the tier budget.",
        body: "House rule: the base chargen Skill cap is 3, and each selected Lifepath that lists a Skill raises that Skill’s cap by +1, whether or not a Lifepath dot was assigned to it. Focus selection is handled on the next page.",
      },
      {
        kicker: "Step 5 · Player Packet",
        title: "Focuses",
        summary:
          "A Skill has one Focus at rating 1, a second at 3, and a third at 5. Rating 2 therefore still has exactly one Focus.",
        body: "All Focus slots are player choices. Parenthetical Focuses printed in selected Lifepaths are shown as recommendations during selection, alongside the Skill’s RAW example Focuses. They never lock or auto-fill a Focus, and you may type another relevant Focus.",
      },
      {
        kicker: "Step 6 · Player Packet",
        title: "Disciplines, Clan Traits & Merits",
        summary:
          "Discipline dots unlock powers by rank. Clan Traits and Merits provide distinctive passive or activated abilities.",
        body: "Choose the exact number of powers, Clan Traits, and Merits from the Dot Distribution table. A power’s rank cannot exceed your dots in its Discipline. Prerequisites are enforced when the Alpha text provides them.",
      },
      {
        kicker: "Step 7 · Player Packet",
        title: "Humanity Scale & Nature",
        summary:
          "A vampire begins balanced in the center of the seven-position Humanity Scale. Nature defines the mortal axis and its outburst.",
        body: "Ancillae may begin at stage 1 toward either side if the Storyteller chooses an unbalanced beginning. Elders may begin at stage 2 toward either side.",
      },
      {
        kicker: "Step 8 · Player Packet",
        title: "Resources",
        summary:
          "Resources are Physical Assets, Social Assets, and Wealth. Lifepaths grant Resource dots; the Dot Distribution table grants additional free Resource dots.",
        body: D.resourceRuleText,
      },
      {
        kicker: "Step 9 · Player Packet",
        title: "Finishing Touches",
        summary:
          "Calculate Vitae and Willpower, then define identity details, important items, and optional Flaws.",
        body: "Vitae Maximum = 10 + Stamina. Willpower Maximum = 5 + Composure + Resolve. You receive one additional important item per Lifepath, provided it fits that Lifepath. Flaws have no fixed mechanical bonus or penalty in the Alpha packet.",
      },
    ];
    return defs[i];
  }
  function infoAttribute(id) {
    const a = attrById(id);
    return {
      kicker: `${a.category} Attribute`,
      title: a.name,
      summary: a.description,
      meta: [
        ["Current rating", String(state.attributes.ratings[id])],
        ["Tier Max Dots", String(attrMax())],
        ["Highest legal now", String(maxLegalAttrRating(a))],
        [
          "Category allocation",
          `${categorySpent(a.category)} / ${roleBudget(a.category)} distributed`,
        ],
        ["Final category total", String(categorySum(a.category))],
      ],
      ratings: a.ratings,
      maxRating: attrMax(),
      currentRating: Number(state.attributes.ratings[id]),
      body: (a.mechanics || []).join("\n\n"),
      source: "Player Packet · Step 1 + Step 5: Maximum Dots and Attributes",
    };
  }
  function infoSkill(id) {
    const s = skillById(id),
      caps = lifepathCapSources(id);
    return {
      kicker: "Skill",
      title: s.name,
      summary: s.description,
      meta: [
        ["Current rating", String(finalSkill(id))],
        ["Chargen cap", String(skillCap(id))],
        [
          "Lifepath cap bonus",
          caps.length ? `+${caps.length} · ${caps.join(" · ")}` : "—",
        ],
        ["Focus slots", String(requiredFocuses(id))],
      ],
      body: `The Alpha packet provides a Skill description and example Focuses, but no rating-by-rating Skill scale comparable to Attributes.\n\n${(s.focuses || []).map((f) => `${f.name}: ${f.description}`).join("\n\n")}`,
      source:
        "Player Packet · Step 5: Skills & Focuses · cap modified by project house rule",
    };
  }
  function infoClan(id) {
    const c = clanById(id);
    return {
      kicker: c.complete
        ? "Clan · Alpha entry complete"
        : "Clan · Alpha entry incomplete",
      title: c.name,
      summary: c.description,
      meta: [
        ["Disciplines", c.disciplineText],
        ["Curse", c.curseName],
        ["Frenzy", c.frenzyName],
      ],
      body: [c.overview, c.beastText, c.curseText, c.frenzyText]
        .filter(Boolean)
        .join("\n\n"),
      source: "Player Packet · Chapter 3: The Clans",
    };
  }
  function infoLp(slot) {
    const d = lpDef(slot);
    if (!d) return infoForStep(3);
    return {
      kicker: "Lifepath",
      title: d.name,
      summary: d.description,
      meta: [
        [
          "Skill dots",
          `${sum(state.lifepaths[slot].skillDots)} / ${lpSkillBudget()}`,
        ],
        ["Resource dots", `${lpResourceSpent(slot)} / ${lpResourceBudget()}`],
      ],
      body: `Skills: ${(d.skills || []).map((x) => skillById(x.skill)?.name + (lifepathFocusLabel(x) ? ` (suggested Focus: ${lifepathFocusLabel(x)})` : "")).join(", ")}\n\nResources: ${(d.resources || []).map((x) => (resourceType(x.type)?.name || x.type) + (x.label ? `: ${x.label}` : "")).join(", ")}\n\n${D.lifepathCompetence}`,
      source: "Player Packet · Step 4: Lifepaths",
    };
  }
  function infoPower(did, pid) {
    const d = discById(did),
      p = d?.powers.find((x) => x.id === pid);
    if (!p) return infoForStep(7);
    return {
      kicker: `${d.name} · ${p.rank}-dot ${p.category}`,
      title: p.name,
      summary: "Discipline Power",
      meta: [
        ["Discipline", d.name],
        ["Activate", p.activate || "—"],
        ["Attribute", p.attribute || "—"],
        ["Cost", p.cost || "—"],
        ["Difficulty", p.difficulty || "—"],
        ["Distance", p.distance || "—"],
        ["Duration", p.duration || "—"],
      ],
      body: p.text,
      source: `Player Packet · Chapter 5: ${d.name}`,
    };
  }
  function infoDiscipline(id) {
    const d = discById(id);
    return {
      kicker: "Discipline",
      title: d.name,
      summary: d.description,
      meta: [
        ["Current rating", String(disciplineRating(d.id))],
        ["Alpha powers", String(d.powers.length)],
      ],
      body: d.powers.length
        ? "Powers are listed by rank. Open an individual power for activation, cost, Difficulty, distance, duration, and full rules text."
        : "The supplied Alpha packet lists this Discipline in clan summaries but does not provide Chapter 5 power definitions for it.",
      source: "Player Packet · Chapter 5: Powers of the Blood",
    };
  }
  function infoTrait(t) {
    return {
      kicker: `Clan Trait · ${t.tier}`,
      title: t.name,
      summary: `Prerequisites: ${t.prerequisites}`,
      body: t.text,
      source: "Player Packet · Chapter 3: The Clans",
    };
  }
  function infoMerit(m) {
    return {
      kicker: "Merit",
      title: m.name,
      summary: m.summary,
      meta: [["Prerequisites", m.prerequisites || "—"]],
      body: m.text,
      source: "Player Packet · Step 6: Merits",
    };
  }
  function infoNature(n) {
    return {
      kicker: "Nature",
      title: n.name,
      summary: n.summary,
      body: n.text,
      source: "Player Packet · Step 7: Humanity Scale and Your Nature",
    };
  }
  function infoReviewTier() {
    const c = creature();
    return {
      kicker: "Tier of Play",
      title: c.name,
      summary:
        "The selected vampire tier sets character-creation budgets and maximum ratings.",
      meta: [
        ["Maximum Dots", String(c.maxDots)],
        ["Maximum Discipline at chargen", String(c.maxDisciplineDots)],
        ["Lifepaths", String(lpCount())],
      ],
      body: "Tier determines the scale of the character and the chargen budgets used throughout this generator. The sidebar and each allocation step apply the selected tier automatically.",
      source: "Player Packet · Step 1: What Are You?",
    };
  }
  function infoReviewGeneration() {
    return {
      kicker: "Generation",
      title: `Generation ${state.generation}`,
      summary:
        "Generation measures how far the vampire is descended from the First Vampire.",
      meta: [["Generation Modifier", String(generationModifier())]],
      body: "Lower generations have stronger blood. Generation Modifier is used by multiple blood- and generation-related rules. The allowed generation range depends on the selected tier.",
      source: "Player Packet · Step 3: Generation",
    };
  }
  function infoReviewSire() {
    const sire = byId(D.sires, state.sire.type);
    return {
      kicker: "Sire Type",
      title: sire?.name || "Sire",
      summary:
        sire?.description ||
        "The vampire relationship that shaped the character’s early nights.",
      meta: [
        [
          "Bonus Discipline",
          state.sire.bonusDiscipline
            ? discById(state.sire.bonusDiscipline)?.name || "—"
            : "—",
        ],
      ],
      body: sire?.discipline
        ? `This Sire type grants: ${sire.discipline}. The selected bonus dot is already included in the Discipline rating and cannot be removed during chargen.`
        : "The Sire step determines the bonus Discipline dot.",
      source: "Player Packet · Step 3: Your Sire and Generation",
    };
  }
  function infoReviewLifepaths() {
    const names = state.lifepaths.map((_, i) => lpDef(i)?.name).filter(Boolean);
    return {
      kicker: "Lifepaths",
      title: "Selected Lifepaths",
      summary: names.join(" · ") || "No Lifepaths selected",
      meta: [["Count", String(names.length)]],
      body: `Lifepaths represent major roles and experiences from the character’s past. They grant Skill and Resource allocations and can also establish suggested Focuses.\n\n${D.lifepathCompetence}`,
      source: "Player Packet · Step 4: Lifepaths",
    };
  }
  function infoReviewHumanity() {
    const pos =
      humanityPositions().find((x) => x.v === state.humanity.position)?.l ||
      "—";
    return {
      kicker: "Humanity Scale",
      title: pos,
      summary:
        "The Humanity Scale tracks the character between Beast-driven and mortal impulses.",
      body: "The starting position depends on tier and Storyteller options. Nature represents the mortal axis that continues to pull on the character. Open the Nature entry separately for its specific rules text.",
      source: "Player Packet · Step 7: Humanity Scale and Nature",
    };
  }
  function infoApparentAge() {
    return {
      kicker: "Character Detail",
      title: "Apparent Age",
      summary: "How old or young the character looks.",
      body: "Vampires stop aging when they are Embraced. Apparent Age is the age someone would estimate from the character’s visible appearance. For a vampire that appearance is normally the body preserved from the Embrace, but the field asks how old the character looks rather than asking for the exact age-at-Embrace number. Actual Age is the chronological field: how old the character really is, how old they were at the Embrace, and how long ago that was.",
      source: "Player Packet · Step 9: Character Details",
    };
  }
  function infoImportantItems() {
    return {
      kicker: "Step 8 · Equipment",
      title: "Important Items",
      summary:
        "A short list of key objects the character carries that may matter during play.",
      meta: [
        ["Baseline gear", "ID, cellphone, and keys to the haven are assumed"],
        ["Allowance", "One additional Important Item per Lifepath"],
      ],
      body: "RAW says each additional Important Item must fit the character’s Lifepath background. The rule limits the number of items by the number of Lifepaths; it does not require a permanent one-to-one slot assignment to a particular Lifepath. If an Important Item is used creatively or interestingly during a test, the Storyteller might award +1 die. Important Items are therefore practical narrative equipment with a possible situational bonus, not a Touchstone-style relationship mechanic.\n\nWeapons are described separately. The Alpha gives weapon categories and says to work with the Storyteller to decide which weapon or weapons suit the character; it does not state a fixed chargen weapon count.",
      source: "Player Packet · Step 8: Important Items and Weapons",
    };
  }
  function infoWeapons() {
    return {
      kicker: "Step 8 · Equipment",
      title: "Weapons",
      summary:
        "Weapons use broad categories that determine base damage and effective distance.",
      meta: [
        ["Light", "Damage 2 · Close/Medium · +1 die to hide"],
        ["Medium", "Damage 3 · Close/Long"],
        ["Heavy", "Damage 4 · Close/Far Away · −1 die to hide"],
      ],
      body: "Unarmed attacks deal damage equal to half Strength and have Close distance. The weapon categories are deliberately loose. RAW says to work with the Storyteller to decide which weapon or weapons suit the character and how they are handled in play. The supplied Alpha does not state a fixed number of weapons granted during character creation.",
      source: "Player Packet · Step 8: Weapons",
    };
  }

  function resourceGuidance(id) {
    const map = {
      haven:
        "Each dot increases the Haven’s size and security and raises the Difficulty for others trying to find or break into it. The Alpha does not give a fixed square-meter or security-system table by rating.",
      property:
        "Each dot increases the size, number, and overall value of your holdings, ranging from a handful of dilapidated fixer-uppers toward a massive downtown office tower.",
      repository:
        "Each dot increases the size and complexity of the collection, from a modest collection with limited items toward a hoard that would make a museum jealous. For a weapons Repository, RAW does not map dots to specific weapon tiers or prices.",
      vehicle:
        "Each dot increases the vehicle’s size, value, and prestige, from small vehicles toward extremely expensive or prestigious ones. The Alpha gives no exact price brackets.",
      ally: "An Ally helps when doing so does not cost them too much or put them at great risk. The packet does not provide a separate 1–5 Ally scale beyond the Minions and Retainer variants.",
      minions: "Each dot represents three weak individuals at your disposal.",
      retainer: "The dot rating is the Retainer’s NPC Level.",
      contact:
        "Each dot represents greater proficiency, knowledge, and access to restricted or confidential information.",
      fame: "Each dot increases the reach of your fame, from a small niche toward an international audience.",
      herd: "Each dot represents a small group of mortals you can safely feed on if needed.",
      mask: "Each dot represents a distinct alternate identity and improves the quality of your masks.",
      status:
        "Dots represent relative power and influence in a specific society. 1 dot is a basic but respectable member; 5 dots place you among its top authority figures.",
      wealth:
        "Dots increase overall financial worth and routine purchasing power. 1 dot supports frugal/economic habits; 5 dots makes you probably one of the wealthiest individuals in your city. The Alpha gives no fixed currency values for ratings 2–4. It explicitly gives an example where Wealth 2 can be strained by spending 1 dot for a particularly expensive purchase or several nights in a luxurious hotel.",
    };
    return map[id] || "";
  }
  function infoResource(id) {
    const r = resourceType(id);
    return {
      kicker: r.category,
      title: r.name,
      summary: r.description,
      meta: [
        [
          "How tests use it",
          "Resource dots + an Attribute chosen by the Storyteller",
        ],
        [
          "Straining a Resource",
          "Temporarily spend a dot for a greater effect",
        ],
        ["Recovery", "Spent dots recover through downtime"],
      ],
      body: `${resourceGuidance(id)}\n\nPhysical and Social Assets must be specific to the character. Most Resource types do not have an exact 1–5 shopping list in the Alpha; their dots scale the quality, size, reach, access, or NPC Level described by that type.`,
      source: "Player Packet · Step 8: Your Resources",
    };
  }
  function renderInfo() {
    const I = state.info || infoForStep(state.step);
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
          return `<div class="ratingItem ${n === I.currentRating ? "active" : ""}"><div class="ratingDots">Rating ${n} · ${dots(n)}</div><div class="meta">${e(t || "The supplied Alpha packet gives no qualitative description for this Attribute rating.")}</div>${missing ? '<div class="tagrow"><span class="tag warn">Alpha source gap</span></div>' : ""}</div>`;
        }).join("") +
        "</div>";
    }
    const body = String(I.body || "")
      .split(/\n\n+/)
      .filter(Boolean)
      .map((p) => `<p>${e(p)}</p>`)
      .join("");
    document.getElementById("infoContent").innerHTML =
      `<div class="infoKicker">${e(I.kicker || "Rules reference")}</div><h2>${e(I.title || "Information")}</h2><div class="infoSummary">${e(I.summary || "")}</div>${meta ? `<div class="infoMeta">${meta}</div>` : ""}${ratings}<div class="infoBody">${body}</div><div class="infoSource">${e(I.source || "VTM V6 Alpha Player Packet")}</div>`;
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
        out.push(issue("error", "Choose a supported Vampire tier."));
    }
    if (i === 1) {
      const cl = clanById(state.clan.id);
      if (!cl) out.push(issue("incomplete", "Choose a Clan."));
      else {
        const r = cl.disciplineRule || {};
        if (r.choice && !state.clan.choice)
          out.push(
            issue(
              "incomplete",
              `Choose ${cl.name}’s variable third Discipline.`,
            ),
          );
        if (r.random && (state.clan.caitiffDisciplines || []).length !== 3)
          out.push(
            issue(
              "incomplete",
              "Caitiff requires 3 randomly determined Disciplines.",
            ),
          );
        if (!cl.complete)
          out.push(
            issue(
              "warning",
              "This clan remains partially in development in the supplied Alpha packet.",
            ),
          );
      }
    }
    if (i === 2) {
      if (!state.sire.type)
        out.push(issue("incomplete", "Choose a sire type."));
      if (
        ["adoptive_sire", "brood_child"].includes(state.sire.type) &&
        !state.sire.relatedClan
      )
        out.push(
          issue("incomplete", "Choose the adoptive sire / broodmate Clan."),
        );
      if (!state.sire.bonusDiscipline)
        out.push(
          issue(
            "incomplete",
            "Choose the bonus Discipline granted by the sire type.",
          ),
        );
      if (!tierGenerations().includes(Number(state.generation)))
        out.push(issue("error", "Generation is outside the selected tier."));
    }
    if (i === 3) {
      ensureLpSlots();
      state.lifepaths.forEach((lp, slot) => {
        const d = lpDef(slot);
        if (!d) out.push(issue("incomplete", `Choose Lifepath ${slot + 1}.`));
        else {
          if (lp.id === "__custom__") {
            if (!lp.custom?.name?.trim())
              out.push(
                issue(
                  "incomplete",
                  `Custom Lifepath ${slot + 1} needs a name.`,
                ),
              );
            if ((lp.custom?.skills || []).length !== 5)
              out.push(
                issue(
                  "incomplete",
                  `Custom Lifepath ${slot + 1} must define exactly 5 Skills.`,
                ),
              );
            if ((lp.custom?.resources || []).length !== 3)
              out.push(
                issue(
                  "incomplete",
                  `Custom Lifepath ${slot + 1} must define exactly 3 Resources.`,
                ),
              );
            if ((lp.custom?.resources || []).some((r) => !resourceType(r.type)))
              out.push(
                issue(
                  "incomplete",
                  `Custom Lifepath ${slot + 1}: choose all 3 Resource types.`,
                ),
              );
          }
          if (sum(lp.skillDots) !== lpSkillBudget())
            out.push(
              issue(
                "incomplete",
                `${d.name}: spend exactly ${lpSkillBudget()} Lifepath Skill dots.`,
              ),
            );
          if (lpResourceSpent(slot) !== lpResourceBudget())
            out.push(
              issue(
                "incomplete",
                `${d.name}: spend exactly ${lpResourceBudget()} Lifepath Resource dots.`,
              ),
            );
        }
      });
    }
    if (i === 4) {
      ["Physical", "Social", "Mental"].forEach((cat) => {
        if (categorySpent(cat) !== roleBudget(cat))
          out.push(
            issue(
              "incomplete",
              `${cat}: distribute exactly ${roleBudget(cat)} Attribute dots above the three baseline dots (${categorySpent(cat)} distributed).`,
            ),
          );
      });
      const roles = Object.values(state.attributes.roles);
      if (new Set(roles).size !== 3)
        out.push(
          issue(
            "error",
            "Physical, Social, and Mental must use different primary/secondary/tertiary budgets.",
          ),
        );
      D.attributes.forEach((a) => {
        const n = Number(state.attributes.ratings[a.id]);
        if (n < 1 || n > attrMax())
          out.push(
            issue("error", `${a.name} must be between 1 and ${attrMax()}.`),
          );
      });
    }
    if (i === 5) {
      if (sum(state.freeSkills) !== c.freeSkillDots)
        out.push(
          issue(
            "incomplete",
            `Spend exactly ${c.freeSkillDots} free Skill dots.`,
          ),
        );
      D.skills.forEach((s) => {
        const n = finalSkill(s.id),
          cap = skillCap(s.id);
        if (n > cap)
          out.push(
            issue(
              "error",
              `${s.name} exceeds its house-rule character-creation cap of ${cap}.`,
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
              `${s.name} exceeds its house-rule character-creation cap of ${cap}.`,
            ),
          );
        if (arr.length !== req || arr.some((x) => !String(x).trim()))
          out.push(
            issue(
              "incomplete",
              `${s.name}: fill ${req} Focus slot${req === 1 ? "" : "s"} for rating ${n}.`,
            ),
          );
      });
    }
    if (i === 7) {
      const cds = clanDisciplineIds();
      if (cds.length !== 3)
        out.push(
          issue("incomplete", "Resolve the Clan’s three Disciplines first."),
        );
      if (totalClanDisciplineDots() !== c.disciplineDots)
        out.push(
          issue(
            "incomplete",
            `Distribute exactly ${c.disciplineDots} Clan Discipline dots.`,
          ),
        );
      D.disciplines.forEach((d) => {
        if (disciplineRating(d.id) > c.maxDisciplineDots)
          out.push(
            issue(
              "error",
              `${d.name} exceeds maximum ${c.maxDisciplineDots} dots for this tier.`,
            ),
          );
      });
      if (state.disciplines.powers.length !== c.disciplinePowers)
        out.push(
          issue(
            "incomplete",
            `Choose exactly ${c.disciplinePowers} Discipline powers.`,
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
              "A selected Discipline power no longer meets its rank requirement.",
            ),
          );
        else if (p.detailsMissing)
          out.push(
            issue(
              "warning",
              `${p.name} is listed in the Alpha power summary but its full rules entry is missing from the supplied packet.`,
            ),
          );
      });
      if (state.traits.length !== c.clanTraits)
        out.push(
          issue("incomplete", `Choose exactly ${c.clanTraits} Clan Traits.`),
        );
      if (state.merits.length !== c.merits)
        out.push(issue("incomplete", `Choose exactly ${c.merits} Merits.`));
      const cl = clanById(state.clan.id);
      if (cl && !cl.complete)
        out.push(
          issue(
            "warning",
            "Full Clan Traits are unavailable for this clan in the supplied Alpha packet.",
          ),
        );
      const usedIncomplete = D.disciplines.filter(
        (d) => disciplineRating(d.id) > 0 && sourceGapDisc(d.id),
      );
      if (usedIncomplete.length)
        out.push(
          issue(
            "warning",
            `No power definitions are supplied for: ${usedIncomplete.map((d) => d.name).join(", ")}.`,
          ),
        );
    }
    if (i === 8) {
      if (!state.humanity.nature)
        out.push(issue("incomplete", "Choose a Nature."));
      const allowedHumanity = humanityPositions();
      if (!allowedHumanity.some((x) => x.v === state.humanity.position))
        out.push(
          issue(
            "error",
            "Starting Humanity position is not allowed for this tier.",
          ),
        );
    }
    if (i === 9) {
      if (freeResourceSpent() !== c.freeResourceDots)
        out.push(
          issue(
            "incomplete",
            `Spend exactly ${c.freeResourceDots} free Resource dots.`,
          ),
        );
      aggregatedLifepathResources().forEach((r) => {
        if (Number(r.dots) > attrMax())
          out.push(
            issue(
              "error",
              `${resourceType(r.type)?.name || r.type}${r.label ? `: ${r.label}` : ""} exceeds the ${attrMax()}-dot character-creation maximum after Lifepath sources are combined.`,
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
              `${resourceType(r.type)?.name || r.type} from Lifepaths must be made specific with a character description.`,
            ),
          );
      });
      state.resources.free.forEach((r, idx) => {
        if (!resourceType(r.type))
          out.push(
            issue("error", `Free Resource ${idx + 1} has an unknown type.`),
          );
        if (Number(r.dots) < 1 || Number(r.dots) > attrMax())
          out.push(
            issue("error", `Free Resource ${idx + 1} has an invalid rating.`),
          );
        if (r.type !== "wealth" && !String(r.label || "").trim())
          out.push(
            issue(
              "incomplete",
              `${resourceType(r.type)?.name || "Resource"} needs a specific label.`,
            ),
          );
      });
    }
    if (i === 10) {
      ensureItems();
      if (!state.identity.name.trim())
        out.push(issue("incomplete", "Enter a character name."));
      state.identity.items.forEach((x, j) => {
        if (!String(x).trim())
          out.push(issue("incomplete", `Important item ${j + 1} is empty.`));
      });
    }
    return out;
  }
  function allIssues() {
    return STEPS.flatMap((_, i) =>
      validateStep(i).map((x) => ({ ...x, step: i })),
    );
  }
  function isStepDone(i) {
    return !validateStep(i).some((x) =>
      ["error", "incomplete"].includes(x.severity),
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
  function stepProgress(i) {
    const c = creature();
    if (i === 0) return state.creature ? "1/1 selected" : "0/1 selected";
    if (i === 1) {
      const cl = clanById(state.clan.id),
        base = cl ? 1 : 0,
        extra = cl?.disciplineRule?.choice
          ? `${state.clan.choice ? 1 : 0}/1 Discipline`
          : cl?.disciplineRule?.random
            ? `${(state.clan.caitiffDisciplines || []).length}/3 Disciplines`
            : "";
      return `${base}/1 Clan${extra ? ` · ${extra}` : ""}`;
    }
    if (i === 2) {
      const related = ["adoptive_sire", "brood_child"].includes(
          state.sire.type,
        ),
        done =
          (state.sire.type ? 1 : 0) +
          (state.generation ? 1 : 0) +
          (state.sire.bonusDiscipline ? 1 : 0) +
          (related && state.sire.relatedClan ? 1 : 0),
        total = 3 + (related ? 1 : 0);
      return `${done}/${total} choices · ${Math.max(0, total - done)} left`;
    }
    if (i === 3) {
      const chosen = state.lifepaths.filter((_, j) => !!lpDef(j)).length,
        skillLeft = state.lifepaths.reduce(
          (n, lp) => n + Math.max(0, lpSkillBudget() - sum(lp.skillDots)),
          0,
        ),
        resLeft = state.lifepaths.reduce(
          (n, lp, j) =>
            n +
            (lpDef(j)
              ? Math.max(0, lpResourceBudget() - lpResourceSpent(j))
              : lpResourceBudget()),
          0,
        );
      return `${chosen}/${lpCount()} paths · ${skillLeft + resLeft} dots left`;
    }
    if (i === 4) {
      const total = c.attributeBudgets.reduce((a, b) => a + b, 0),
        used = totalAttributeSpent(),
        left = Math.max(0, total - used);
      return `${used}/${total} distributed · ${left} left`;
    }
    if (i === 5) {
      const used = sum(state.freeSkills),
        left = Math.max(0, c.freeSkillDots - used);
      return `${used}/${c.freeSkillDots} free dots · ${left} left`;
    }
    if (i === 6) {
      const req = D.skills.reduce((n, x) => n + requiredFocuses(x.id), 0),
        filled = D.skills.reduce(
          (n, x) =>
            n +
            (state.focuses[x.id] || []).filter((v) => String(v).trim()).length,
          0,
        );
      return `${filled}/${req} Focuses · ${Math.max(0, req - filled)} left`;
    }
    if (i === 7) {
      return `Dots ${totalClanDisciplineDots()}/${c.disciplineDots} · Powers ${state.disciplines.powers.length}/${c.disciplinePowers} · Traits ${state.traits.length}/${c.clanTraits} · Merits ${state.merits.length}/${c.merits}`;
    }
    if (i === 8) return `${state.humanity.nature ? 1 : 0}/1 Nature`;
    if (i === 9) {
      const used = freeResourceSpent();
      return `${used}/${c.freeResourceDots} free dots · ${Math.max(0, c.freeResourceDots - used)} left`;
    }
    if (i === 10) {
      const req = 1 + lpCount(),
        done =
          (state.identity.name.trim() ? 1 : 0) +
          state.identity.items.filter((x) => String(x).trim()).length;
      return `${done}/${req} required fields · ${Math.max(0, req - done)} left`;
    }
    return "";
  }
  function renderNav() {
    const nav = document.getElementById("navSteps"),
      mob = document.getElementById("mobileProgress");
    nav.innerHTML = "";
    mob.innerHTML = "";
    STEPS.forEach((s, i) => {
      const issues = validateStep(i);
      const blocked = issues.some((x) => x.severity === "error");
      const done = isStepDone(i);
      const b = document.createElement("button");
      b.className = `navStep ${i === state.step ? "active" : ""} ${done ? "done" : ""} ${blocked ? "blocked" : ""}`;
      b.innerHTML = `<span class="navStepLabel">${i + 1}. ${e(s[0])}</span><span class="navProgress">${e(stepProgress(i))}</span>`;
      b.onclick = () => goStep(i);
      nav.appendChild(b);
      const m = document.createElement("button");
      m.className = `mobileStep ${i === state.step ? "active" : ""}`;
      m.textContent = `${i + 1} ${s[0]}`;
      m.onclick = () => goStep(i);
      mob.appendChild(m);
    });
  }
  function goStep(i) {
    state.step = Math.max(0, Math.min(STEPS.length - 1, i));
    state.info = infoForStep(state.step);
    closeDrawer();
    render();
    scrollTo({ top: 0, behavior: "instant" });
  }
  function navFooter() {
    return `<div class="bottomNav"><button class="btn" data-action="prev" ${state.step === 0 ? "disabled" : ""}>Back</button><button class="btn primary" data-action="next">${state.step === STEPS.length - 1 ? "Review" : "Next"}</button></div>`;
  }
  function issuesHtml(i) {
    const a = validateStep(i);
    if (!a.length)
      return '<div class="notice good">This step is complete.</div>';
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
    document.getElementById("mainCard").innerHTML = f() + navFooter();
    bindMain();
  }

  function renderCreature() {
    const options = D.creatures.filter((c) => c.id.startsWith("vampire_"));
    return `<section class="step active"><h1>Step 1 · What Are You?</h1><div class="lead">Choose the vampire tier used for this character. It controls the RAW creation budgets and maximum ratings.</div><div class="grid3">${options.map((c) => `<button class="choiceCard ${state.creature === c.id ? "selected" : ""}" data-creature="${c.id}"><h3>${e(c.name)}</h3><div class="meta">Max dots ${c.maxDots} · Chargen max Discipline ${c.maxDisciplineDots} · Generation Modifier ${c.generationModifier}</div><div class="tagrow"><span class="tag">${c.lifepaths} Lifepaths</span><span class="tag">Attributes ${c.attributeBudgets.join("/")}</span><span class="tag">${c.disciplineDots}+${c.sireBonus} Discipline dots</span></div></button>`).join("")}</div>${tierOf() === "neonate" ? `<div class="sectionTitle">Optional young character rule</div><label class="card checkline"><input type="checkbox" id="youngToggle" ${state.young ? "checked" : ""}><div><b>Use one Lifepath</b><div class="meta">${e(D.youngCharacter)} The project Lifepath Skill Cap house rule overrides the RAW cap-3 sentence: a Skill listed by this Lifepath has chargen cap 4.</div></div></label>` : ""}${issuesHtml(0)}</section>`;
  }
  function renderClan() {
    const selected = clanById(state.clan.id);
    return `<section class="step active"><h1>Step 2 · Your Clan</h1><div class="lead">Choose a clan. Long descriptions use list rows on desktop so each entry keeps its natural height.</div>${selected ? `<div class="selectedSummary"><div><div class="meta">Selected clan</div><b>${e(selected.name)}</b><div class="tagrow"><span class="tag">${e(selected.disciplineText)}</span>${selected.complete ? '<span class="tag good">Full Alpha entry</span>' : '<span class="tag warn">In development</span>'}</div></div><button class="tileInfo inlineInfo" data-info-clan="${selected.id}" aria-label="Read ${e(selected.name)} clan rules">?</button></div>${renderClanDisciplineChoice()}` : ""}<div class="sectionTitle">Clan list</div><div class="optionList">${D.clans.map((c) => `<button class="choiceRow ${state.clan.id === c.id ? "selected" : ""} ${!c.complete ? "incomplete" : ""}" data-clan="${c.id}"><div class="choiceRowMain"><div class="choiceRowTitle">${e(c.name)}</div><div class="choiceRowMeta">${e(c.description)}</div></div><div class="choiceRowAside"><span class="tag">${e(c.disciplineText)}</span>${c.complete ? '<span class="tag good">Full Alpha</span>' : '<span class="tag warn">In development</span>'}</div></button>`).join("")}</div>${issuesHtml(1)}</section>`;
  }
  function renderClanDisciplineChoice() {
    const c = clanById(state.clan.id);
    if (!c) return "";
    const r = c.disciplineRule || {};
    if (r.choice)
      return `<div class="requiredChoice"><div class="sectionTitle" style="margin-top:0">Required · choose ${e(c.name)}’s third Discipline</div><div class="grid2 equalTiles">${r.choice.map((id) => `<button class="choiceCompact ${state.clan.choice === id ? "selected" : ""}" data-clan-choice="${id}"><b>${e(discById(id)?.name)}</b><span>${e(discById(id)?.description)}</span></button>`).join("")}</div></div>`;
    if (r.random)
      return `<div class="requiredChoice"><div class="sectionTitle" style="margin-top:0">Caitiff · 3 randomly determined Disciplines</div><div class="notice warn">RAW says these are randomly determined. Use Randomize for a RAW selection; manual changes remain available for table adjudication.</div><button class="btn" data-action="random-caitiff">Randomize 3</button><div class="optionList caitiffList" style="margin-top:9px">${D.disciplines.map((d) => `<label class="caitiffChoice ${(state.clan.caitiffDisciplines || []).includes(d.id) ? "selected" : ""}"><input type="checkbox" data-caitiff-disc="${d.id}" ${(state.clan.caitiffDisciplines || []).includes(d.id) ? "checked" : ""}><div class="choiceRowMain"><div class="choiceRowTitle">${e(d.name)}</div><div class="choiceRowMeta">${e(d.description)}</div></div></label>`).join("")}</div></div>`;
    return "";
  }
  function renderSire() {
    const s = byId(D.sires, state.sire.type),
      relatedNeeded = ["adoptive_sire", "brood_child"].includes(
        state.sire.type,
      ),
      allowed = sireAllowedDisciplines();
    return `<section class="step active"><h1>Step 3 · Sire & Generation</h1><div class="lead">Choose each part directly. This page no longer uses dropdowns for the primary chargen choices.</div><div class="sectionTitle">Sire type</div><div class="optionList">${D.sires.map((x) => `<button class="choiceRow ${state.sire.type === x.id ? "selected" : ""}" data-sire-type="${x.id}"><div class="choiceRowMain"><div class="choiceRowTitle">${e(x.name)}</div><div class="choiceRowMeta">${e(x.description)}</div></div><div class="choiceRowAside"><span class="tag">Bonus: ${e(x.discipline)}</span></div></button>`).join("")}</div><div class="sectionTitle">Generation</div><div class="choiceChipGrid">${tierGenerations()
      .map(
        (g) =>
          `<button class="choiceChip ${Number(state.generation) === g ? "selected" : ""}" data-generation="${g}"><b>${g}th</b><span>Modifier ${D.generationModifiers[String(g)]}</span></button>`,
      )
      .join(
        "",
      )}</div>${relatedNeeded ? `<div class="sectionTitle">${state.sire.type === "adoptive_sire" ? "Adoptive sire" : "Broodmate"} Clan</div><div class="choiceChipGrid">${D.clans.map((c) => `<button class="choiceChip ${state.sire.relatedClan === c.id ? "selected" : ""}" data-related-clan="${c.id}"><b>${e(c.name)}</b></button>`).join("")}</div>` : ""}<div class="sectionTitle">Bonus Discipline</div>${allowed.length ? `<div class="grid3">${allowed.map((id) => `<button class="choiceCompact ${state.sire.bonusDiscipline === id ? "selected" : ""}" data-sire-bonus="${id}"><b>${e(discById(id)?.name)}</b><span>${e(discById(id)?.description)}</span></button>`).join("")}</div>` : '<div class="notice warn">Choose the sire type' + (relatedNeeded ? " and related Clan" : "") + " first.</div>"}${s ? `<div class="notice"><b>${e(s.name)}</b> · ${e(s.discipline)}</div>` : ""}${issuesHtml(2)}</section>`;
  }
  function renderLifepaths() {
    ensureLpSlots();
    return `<section class="step active"><h1>Step 4 · Your Lifepaths</h1><div class="lead">Choose ${lpCount()} Lifepath${lpCount() === 1 ? "" : "s"}. Allocate ${lpSkillBudget()} Skill dots and ${lpResourceBudget()} Resource dots inside each.</div>${state.lifepaths.map((lp, i) => renderLpSlot(lp, i)).join("")}${issuesHtml(3)}</section>`;
  }
  function renderLpSlot(lp, slot) {
    const d = lpDef(slot),
      allowed = allowedLifepaths();
    return `<div class="lpCard"><div class="lpHead"><div><div class="sectionTitle" style="margin:0 0 6px">Lifepath ${slot + 1}</div>${d ? `<b style="font-size:18px">${e(d.name)}</b><div class="meta">${e(d.description)}</div>` : '<div class="meta">Choose a Lifepath.</div>'}</div><div class="field" style="margin:0"><label>Selection</label><select data-lp-select="${slot}"><option value="">Choose…</option>${allowed.map((x) => `<option value="${x.id}" ${lp.id === x.id ? "selected" : ""}>${e(x.name)}${x.type === "vampire" ? ` · ${x.tier}` : ""}</option>`).join("")}<option value="__custom__" ${lp.id === "__custom__" ? "selected" : ""}>Custom Lifepath (RAW)</option></select></div></div>${lp.id === "__custom__" ? renderCustomLp(lp, slot) : ""}${d ? `<div class="budgetBar"><span class="pill ${sum(lp.skillDots) === lpSkillBudget() ? "good" : "warn"}">Skill dots ${sum(lp.skillDots)} / ${lpSkillBudget()}</span><span class="pill ${lpResourceSpent(slot) === lpResourceBudget() ? "good" : "warn"}">Resource dots ${lpResourceSpent(slot)} / ${lpResourceBudget()}</span><button class="fieldInfoBtn" data-info-lp="${slot}" aria-label="Read Lifepath details">?</button></div><div class="sectionTitle">Lifepath Skills</div><div class="lpSkillGrid">${(d.skills || []).map((x) => renderLpSkill(slot, x)).join("")}</div><div class="sectionTitle">Lifepath Resources</div><div class="lpResGrid">${(d.resources || []).map((r, ri) => renderLpResource(slot, r, ri)).join("")}</div>` : ""}</div>`;
  }
  function renderCustomLp(lp, slot) {
    const c = lp.custom || {
      name: "",
      description: "",
      skills: [],
      resources: [],
    };
    const skillSet = new Set(c.skills || []);
    return `<div class="grid2"><div class="field"><label>Custom Lifepath name</label><input data-custom-name="${slot}" value="${e(c.name || "")}"></div><div class="field"><label>Description</label><input data-custom-desc="${slot}" value="${e(c.description || "")}"></div></div><div class="sectionTitle">Choose exactly 5 Skills</div><div class="gridAuto">${D.skills.map((s) => `<label class="card checkline"><input type="checkbox" data-custom-skill="${slot}:${s.id}" ${skillSet.has(s.id) ? "checked" : ""}><div><b>${e(s.name)}</b><div class="meta">${e(s.description)}</div></div></label>`).join("")}</div><div class="sectionTitle">Define exactly 3 Resource types</div><div class="grid3">${[
      0, 1, 2,
    ]
      .map((ri) => {
        const r = c.resources?.[ri] || { type: "", label: "" };
        return `<div class="card"><div class="field"><label>Resource ${ri + 1}</label><select data-custom-res-type="${slot}:${ri}"><option value="">Choose…</option>${D.resourceTypes.map((x) => `<option value="${x.id}" ${r.type === x.id ? "selected" : ""}>${e(x.name)}</option>`).join("")}</select></div><div class="field"><label>Specific label</label><input data-custom-res-label="${slot}:${ri}" value="${e(r.label || "")}"></div></div>`;
      })
      .join("")}</div>`;
  }
  function renderLpSkill(slot, x) {
    const n = Number(state.lifepaths[slot].skillDots?.[x.skill] || 0),
      s = skillById(x.skill),
      cap = skillCap(x.skill),
      sources = lifepathCapSources(x.skill),
      suggested = lifepathFocusLabel(x);
    return `<div class="row"><div><div class="rowname">${e(s?.name || x.skill)} ${suggested ? `<span class="tag">Suggested Focus: ${e(suggested)}</span>` : ""}</div><div class="rowmeta">Current ${finalSkill(x.skill)} · Cap ${cap} · house-rule cap bonus +${sources.length}</div></div>${stepper(`lp-skill:${slot}:${x.skill}`, n, 0, lpSkillBudget())}</div>`;
  }
  function renderLpResource(slot, r, ri) {
    const n = Number(state.lifepaths[slot].resourceDots?.[String(ri)] || 0),
      rt = resourceType(r.type);
    return `<div class="row"><div><div class="rowname">${e(rt?.name || r.type)}${r.label ? `: ${e(r.label)}` : ""}</div><div class="rowmeta">${e(rt?.category || "Resource")}</div></div>${stepper(`lp-res:${slot}:${ri}`, n, 0, lpResourceBudget())}</div>`;
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
      categorySpent(key[0].toUpperCase() + key.slice(1)) <= budgetFor(key) &&
      categorySpent(other[0].toUpperCase() + other.slice(1)) <= budgetFor(other)
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
    return `<section class="step active"><h1>Step 5 · Attributes</h1><div class="lead">Every Attribute starts at 1. Assign the primary, secondary, and tertiary budgets as additional dots above that baseline. Choices are blocked immediately when they would exceed the category allocation or the tier’s Max Dots.</div><div class="allocationStatus ${left === 0 ? "complete" : ""}"><div><span>Attribute dots remaining</span><strong>${left}</strong><small>${totalAttributeSpent()} of ${total} distributed</small></div><button class="btn resetStepBtn" data-action="reset-attributes">Reset Attributes</button></div><div class="notice">RAW tier Max Dots: Neonate 5, Ancilla 6, Elder 8. Attribute budgets (7/5/3, 8/6/4, 9/7/5) are dots distributed above the free 1-dot baseline in every Attribute. Final category totals are therefore budget + 3. The Alpha provides qualitative rating descriptions only through 5.</div><div class="attrCols">${["Physical", "Social", "Mental"].map(renderAttrCat).join("")}</div><div class="derived" style="margin-top:10px"><div class="card"><div class="meta">Vitae Maximum</div><b>${vitaeMax()}</b><div class="meta">10 + Stamina</div></div><div class="card"><div class="meta">Willpower Maximum</div><b>${willpowerMax()}</b><div class="meta">5 + Composure + Resolve</div></div></div>${issuesHtml(4)}</section>`;
  }
  function renderAttrCat(cat) {
    const key = cat.toLowerCase(),
      target = roleBudget(cat),
      spent = categorySpent(cat),
      left = Math.max(0, target - spent),
      finalTotal = categorySum(cat);
    return `<div class="attrCol"><div class="attrColHead"><div><b>${cat}</b><div class="meta">${spent} / ${target} distributed · ${left} left · final ${finalTotal}</div></div><select class="roleSelect" data-role="${key}" aria-label="${cat} category priority">${["primary", "secondary", "tertiary"].map((r) => `<option value="${r}" ${state.attributes.roles[key] === r ? "selected" : ""} ${roleSwapValid(key, r) ? "" : "disabled"}>${r[0].toUpperCase() + r.slice(1)}</option>`).join("")}</select></div>${D.attributes
      .filter((a) => a.category === cat)
      .map((a) => {
        const n = Number(state.attributes.ratings[a.id]);
        return `<div class="attrItem"><div class="attrItemTop"><button class="attrNameBtn" data-info-attr="${a.id}">${e(a.name)}</button><span class="attrCurrent">Rating ${n} · max now ${maxLegalAttrRating(a)}</span></div><div class="attrRatings">${Array.from(
          { length: attrMax() },
          (_, i) => {
            const r = i + 1,
              allowed = attrRatingAllowed(a, r) || r === n;
            return `<button class="ratingBtn ${r === n ? "selected" : ""}" data-attr="${a.id}" data-rating="${r}" ${allowed ? "" : "disabled"} aria-label="Set ${e(a.name)} to ${r}">${r}</button>`;
          },
        ).join(
          "",
        )}<button class="fieldInfoBtn" data-info-attr="${a.id}" aria-label="Read ${e(a.name)} description and rating scale">?</button></div></div>`;
      })
      .join("")}</div>`;
  }
  function renderSkills() {
    const fromLp = D.skills.filter((s) => lifepathSkillRating(s.id) > 0),
      freeOnly = D.skills.filter((s) => lifepathSkillRating(s.id) === 0),
      used = sum(state.freeSkills),
      left = Math.max(0, creature().freeSkillDots - used);
    return `<section class="step active"><h1>Step 6 · Skills</h1><div class="lead">Ratings earned through Lifepaths stay in place. Spend ${creature().freeSkillDots} additional Skill dots without reducing any Lifepath rating.</div><div class="allocationStatus ${left === 0 ? "complete" : ""}"><div><span>Free Skill dots remaining</span><strong>${left}</strong><small>${used} of ${creature().freeSkillDots} distributed</small></div><button class="btn resetStepBtn" data-action="reset-skills">Reset Skills</button></div><div class="budgetBar"><span class="pill">House rule: base cap 3 +1 per Lifepath listing the Skill</span></div><div class="sectionTitle">From Lifepaths</div>${fromLp.length ? `<div class="optionList">${fromLp.map(renderSkillRow).join("")}</div>` : '<div class="notice">No Skill dots have been assigned through Lifepaths yet.</div>'}<div class="sectionTitle">Other Skills · free allocation</div><div class="optionList">${freeOnly.map(renderSkillRow).join("")}</div>${issuesHtml(5)}</section>`;
  }
  function renderSkillRow(s) {
    const base = lifepathSkillRating(s.id),
      free = Number(state.freeSkills[s.id] || 0),
      total = base + free,
      sources = lifepathSkillSources(s.id),
      capSources = lifepathCapSources(s.id),
      cap = skillCap(s.id);
    const canDown = free > 0,
      canUp = sum(state.freeSkills) < creature().freeSkillDots && total < cap;
    return `<div class="skillRow ${total > 0 ? "hasRating" : ""}"><div class="skillRowMain"><div class="skillTitleLine"><button class="skillNameBtn" data-info-skill="${s.id}">${e(s.name)}</button><span class="skillStat current">Current <b>${total}</b></span><span class="skillStat cap">Cap <b>${cap}</b></span></div><div class="rowmeta">${capSources.length ? `House-rule cap +${capSources.length} (${capSources.map(e).join(" · ")})` : ""}${base ? `${capSources.length ? " · " : ""}Lifepath dots ${base}${sources.length ? ` (${sources.map((x) => `${e(x.source)} +${x.dots}`).join(" · ")})` : ""}` : ""}${free ? ` · Free +${free}` : ""}</div><div class="choiceRowMeta">${e(s.description)}</div></div><div class="stepper"><button data-stepper="free-skill:${s.id}" data-delta="-1" ${canDown ? "" : "disabled"}>−</button><div class="n">${total}</div><button data-stepper="free-skill:${s.id}" data-delta="1" ${canUp ? "" : "disabled"}>+</button></div></div>`;
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
          (state.focuses[s.id] || []).filter((v) => String(v).trim()).length,
        0,
      ),
      left = Math.max(0, req - filled);
    return `<section class="step active"><h1>Step 7 · Focuses</h1><div class="lead">A Skill gains Focus slots at ratings 1, 3, and 5. Every Focus is selected by the player. Concrete parenthetical Focuses printed in Lifepaths are recommendations, never fixed values.</div><div class="allocationStatus ${left === 0 ? "complete" : ""}"><div><span>Focus choices remaining</span><strong>${left}</strong><small>${filled} of ${req} selected</small></div><button class="btn resetStepBtn" data-action="reset-focuses">Reset Focuses</button></div><div class="notice">Concrete Lifepath suggestions appear first when available. Instructions such as “choose an art form” are not treated as Focus names. RAW Skill examples remain available as quick choices, and you can always type another relevant Focus.</div><div class="sectionTitle">Skills from selected Lifepaths</div>${fromLp.length ? `<div class="optionList">${fromLp.map(renderFocusRow).join("")}</div>` : '<div class="notice">No current Focus-bearing Skill is listed by a selected Lifepath.</div>'}<div class="sectionTitle">Other Skills</div>${freeOnly.length ? `<div class="optionList">${freeOnly.map(renderFocusRow).join("")}</div>` : '<div class="notice">No other Skill currently has a Focus slot.</div>'}${issuesHtml(6)}</section>`;
  }
  function renderFocusRow(s) {
    const slots = focusSlotDefs(s.id),
      arr = state.focuses[s.id] || [],
      capSources = lifepathCapSources(s.id),
      recs = lifepathFocusRecommendations(s.id);
    return `<div class="focusCard"><div class="focusHead"><div><button class="skillNameBtn" data-info-skill="${s.id}">${e(s.name)}</button><div class="rowmeta">Current ${finalSkill(s.id)} · Cap ${skillCap(s.id)}${capSources.length ? ` · Lifepaths: ${capSources.map(e).join(" · ")}` : ""} · ${slots.length} Focus slot${slots.length === 1 ? "" : "s"}</div></div></div>${recs.length ? `<div class="focusRecommendationSummary">${recs.map((r) => `<span><b>${e(r.source)}</b>: ${r.values.map(e).join(" / ")}</span>`).join("")}</div>` : ""}<div class="focusInputs">${slots.map((slot, i) => renderFocusSlot(s, slot, i, arr[i] || "")).join("")}</div></div>`;
  }
  function renderFocusSlot(s, slot, i, value) {
    const recs = lifepathFocusRecommendations(s.id),
      lpValues = [];
    recs.forEach((r) =>
      r.values.forEach((v) => {
        if (!lpValues.includes(v)) lpValues.push(v);
      }),
    );
    const raw = rawFocusSuggestions(s.id).filter((v) => !lpValues.includes(v)),
      all = [...lpValues, ...raw];
    return `<div class="focusSlot"><div class="focusSlotHead"><b>Focus at rating ${slot.threshold}</b><span class="tag">Player choice</span></div><div class="field" style="margin:0"><input list="focus-${s.id}-${i}" data-focus="${s.id}:${i}" value="${e(value)}" placeholder="Choose or type a Focus"><datalist id="focus-${s.id}-${i}">${all.map((x) => `<option value="${e(x)}"></option>`).join("")}</datalist></div>${lpValues.length ? `<div class="focusChoiceLabel">Suggested by Lifepath</div><div class="focusSuggestions">${lpValues.map((x) => `<button type="button" class="focusSuggestion recommended" data-focus-pick="${s.id}:${i}" data-focus-value="${e(x)}">${e(x)}</button>`).join("")}</div>` : ""}${
      raw.length
        ? `<div class="focusChoiceLabel">RAW Skill examples</div><div class="focusSuggestions">${raw
            .slice(0, 10)
            .map(
              (x) =>
                `<button type="button" class="focusSuggestion" data-focus-pick="${s.id}:${i}" data-focus-value="${e(x)}">${e(x)}</button>`,
            )
            .join("")}</div>`
        : ""
    }<div class="rowmeta">Suggestions are optional. Enter another relevant Focus if it better fits the character.</div></div>`;
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
    return `<section class="step active"><h1>Step 8 · Disciplines, Clan Traits & Merits</h1><div class="lead">Spend ${c.disciplineDots} dots only among the three Clan Disciplines. The sire-granted dot is already present and cannot be removed. Then choose ${c.disciplinePowers} powers, ${c.clanTraits} Clan Traits, and ${c.merits} Merits.</div>${needsChoice ? `<div class="notice warn"><b>${e(cl.name)}’s variable Clan Discipline has not been resolved.</b> Make that choice once on the Clan page before allocating Discipline dots. <button class="btn ghost" type="button" data-action="go-clan" style="margin-left:8px;min-height:32px">Open Clan step</button></div>` : ""}<div class="sectionTitle">Discipline dots</div><div class="budgetBar"><span class="pill ${totalClanDisciplineDots() === c.disciplineDots ? "good" : "warn"}">Clan dots ${totalClanDisciplineDots()} / ${c.disciplineDots}</span><span class="pill">Sire bonus: ${state.sire.bonusDiscipline ? e(discById(state.sire.bonusDiscipline)?.name) + " 1" : "not selected"}</span><span class="pill">Chargen max ${c.maxDisciplineDots}</span></div><div class="notice">RAW says to distribute the listed dots among the three Clan Disciplines; it does not state a mandatory 3/2/1-style spread. Tier caps after character creation are Clan ${caps.clan} / Non-Clan ${caps.nonClan}.</div><div class="grid3 equalTiles">${cds.map((id) => renderDiscDotCard(id)).join("") || '<div class="notice warn">Complete the Clan Discipline choice first.</div>'}${sireOnly ? renderSireOnlyDiscCard(sireOnly) : ""}</div><div class="sectionTitle">Discipline powers</div><div class="budgetBar"><span class="pill ${state.disciplines.powers.length === c.disciplinePowers ? "good" : "warn"}">Powers ${state.disciplines.powers.length} / ${c.disciplinePowers}</span></div>${renderPowerGroups()}<div class="sectionTitle">Clan Traits</div><div class="budgetBar"><span class="pill ${state.traits.length === c.clanTraits ? "good" : "warn"}">Traits ${state.traits.length} / ${c.clanTraits}</span></div>${cl?.complete ? `<div class="gridAuto">${cl.traits.map(renderTraitCard).join("")}</div>` : `<div class="notice warn">The supplied Alpha packet does not provide a full Clan Trait set for ${e(cl?.name || "this clan")}.</div>`}<div class="sectionTitle">Merits</div><div class="budgetBar"><span class="pill ${state.merits.length === c.merits ? "good" : "warn"}">Merits ${state.merits.length} / ${c.merits}</span></div><div class="gridAuto">${D.merits.map(renderMeritCard).join("")}</div>${issuesHtml(7)}</section>`;
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
    return `<div class="card infoTile"><button class="tileInfo" data-info-disc="${id}" aria-label="Read ${e(d.name)} rules">?</button><div class="row"><div><div class="rowname">${e(d.name)}</div><div class="rowmeta">Rating ${rating} · Clan allocation ${free}${sire ? " · Sire +1" : ""}${sourceGapDisc(id) ? " · powers in development" : ""}</div></div><div class="stepper"><button data-stepper="disc:${id}" data-delta="-1" ${canDown ? "" : "disabled"}>−</button><div class="n">${rating}</div><button data-stepper="disc:${id}" data-delta="1" ${canUp ? "" : "disabled"}>+</button></div></div></div>`;
  }
  function renderSireOnlyDiscCard(id) {
    const d = discById(id);
    return `<div class="card infoTile"><button class="tileInfo" data-info-disc="${id}" aria-label="Read ${e(d.name)} rules">?</button><div class="row"><div><div class="rowname">${e(d.name)}</div><div class="rowmeta">Rating 1 · granted by Sire · non-Clan at chargen</div></div><div class="stepper"><button disabled>−</button><div class="n">1</div><button disabled>+</button></div></div></div>`;
  }
  function renderPowerGroups() {
    const ids = D.disciplines
      .filter((d) => disciplineRating(d.id) > 0)
      .map((d) => d.id);
    if (!ids.length)
      return '<div class="notice warn">No eligible powers yet. Add or receive a Discipline dot first.</div>';
    return ids
      .map((id) => {
        const d = discById(id),
          r = disciplineRating(id),
          powers = (d.powers || []).filter((p) => p.rank <= r),
          sel = state.disciplines.powers.filter(
            (x) => x.disciplineId === id,
          ).length;
        return `<div class="powerGroup"><div class="powerGroupHead"><div><b>${e(d.name)}</b><div class="meta">Rating ${r} · ${sel} power${sel === 1 ? "" : "s"} selected</div></div><button class="tileInfo inlineInfo" data-info-disc="${id}" aria-label="Read ${e(d.name)} rules">?</button></div>${powers.length ? `<div class="gridAuto equalTiles">${powers.map((p) => renderPowerCard({ ...p, disciplineId: id, disciplineName: d.name })).join("")}</div>` : `<div class="notice warn">No full power definitions for this Discipline are supplied in the Alpha packet.</div>`}</div>`;
      })
      .join("");
  }
  function renderPowerCard(p) {
    const sel = powerSelected(p.disciplineId, p.id);
    return `<div class="powerCard infoTile selectable ${sel ? "selected" : ""}" data-power="${p.disciplineId}:${p.id}"><button class="tileInfo" data-info-power="${p.disciplineId}:${p.id}" aria-label="Read ${e(p.name)} rules">?</button><div class="checkline"><input type="checkbox" ${sel ? "checked" : ""} tabindex="-1"><div><b>${e(p.name)}</b><div class="meta">${e(p.disciplineName)} · ${p.rank}-dot ${e(p.category)}</div></div></div><div class="powerMeta"><span class="tag">${e(p.cost || "Cost —")}</span><span class="tag">${e(p.activate || "Action —")}</span>${p.detailsMissing ? '<span class="tag warn">full entry missing</span>' : ""}</div></div>`;
  }
  function renderTraitCard(t) {
    const ok = traitEligible(t),
      sel = state.traits.includes(t.id);
    return `<div class="traitCard infoTile selectable ${sel ? "selected" : ""} ${!ok ? "disabled" : ""}" data-trait="${t.id}"><button class="tileInfo" data-info-trait="${t.id}" aria-label="Read ${e(t.name)} rules">?</button><div class="checkline"><input type="checkbox" ${sel ? "checked" : ""} ${!ok ? "disabled" : ""} tabindex="-1"><div><b>${e(t.name)}</b><div class="meta">${e(t.prerequisites)}</div></div></div></div>`;
  }
  function renderMeritCard(m) {
    const ok = prereqEligible(m.prerequisites),
      sel = state.merits.includes(m.id);
    return `<div class="meritCard infoTile selectable ${sel ? "selected" : ""} ${!ok ? "disabled" : ""}" data-merit="${m.id}"><button class="tileInfo" data-info-merit="${m.id}" aria-label="Read ${e(m.name)} rules">?</button><div class="checkline"><input type="checkbox" ${sel ? "checked" : ""} ${!ok ? "disabled" : ""} tabindex="-1"><div><b>${e(m.name)}</b><div class="meta">${e(m.summary)}</div></div></div></div>`;
  }

  function humanityPositions() {
    const t = tierOf();
    if (t === "ancilla")
      return [
        { v: -1, l: "Monstrous 1" },
        { v: 0, l: "Neutral" },
        { v: 1, l: "Mortal 1" },
      ];
    if (t === "elder")
      return [
        { v: -2, l: "Monstrous 2" },
        { v: 0, l: "Neutral" },
        { v: 2, l: "Mortal 2" },
      ];
    return [{ v: 0, l: "Neutral" }];
  }
  function renderHumanity() {
    return `<section class="step active"><h1>Step 9 · Humanity Scale & Nature</h1><div class="lead">Choose the permitted starting Humanity position and the Nature that represents the character’s mortal axis.</div><div class="sectionTitle">Starting Humanity</div><div class="grid3">${humanityPositions()
      .map(
        (x) =>
          `<button class="choiceCard ${state.humanity.position === x.v ? "selected" : ""}" data-humanity="${x.v}"><h3>${e(x.l)}</h3><div class="meta">${x.v === 0 ? "Middle dot of the 7-dot Humanity Scale." : "Optional unbalanced beginning if the Storyteller uses that rule."}</div></button>`,
      )
      .join(
        "",
      )}</div><div class="sectionTitle">Nature</div><div class="gridAuto">${D.natures.map((n) => `<div class="natureCard infoTile selectable ${state.humanity.nature === n.id ? "selected" : ""}" data-nature="${n.id}"><button class="tileInfo" data-info-nature="${n.id}" aria-label="Read ${e(n.name)} Nature rules">?</button><b>${e(n.name)}</b><div class="meta">${e(n.summary)}</div></div>`).join("")}</div>${issuesHtml(8)}</section>`;
  }

  function renderResources() {
    const c = creature(),
      agg = aggregatedLifepathResources(),
      left = Math.max(0, c.freeResourceDots - freeResourceSpent());
    return `<section class="step active"><h1>Step 10 · Your Resources</h1><div class="lead">Matching Resources from multiple Lifepaths are combined into one rating. Define what each Physical or Social Asset actually is for this character.</div><div class="notice resourceRules"><b>How Resource dots work:</b> dots represent usable economic, physical, or social capital. A Resource test uses Resource dots + an Attribute chosen by the Storyteller. Each dot improves the Resource’s quality or potential uses. You can temporarily spend a dot to strain the Resource for a greater effect, then recover spent dots through downtime. Use <b>?</b> on a Resource for its specific dot meaning.</div><div class="sectionTitle">From Lifepaths</div><div class="grid2">${
      agg
        .map((r) => {
          const rt = resourceType(r.type),
            detail = resourceDetail(r.key);
          return `<div class="card infoTile resourceCard"><button class="tileInfo" data-info-resource="${r.type}" aria-label="Read ${e(rt?.name || r.type)} rules">?</button><div class="resourceTitle"><b>${e(rt?.name || r.type)}</b><span class="resourceDots">${dots(r.dots)} <small>${r.dots}</small></span></div>${r.label ? `<div class="meta">${e(r.label)}</div>` : ""}<div class="choiceRowMeta">${e(rt?.description || "")}</div><div class="tagrow">${r.sources.map((x) => `<span class="tag">${e(x.source)} +${x.dots}</span>`).join("")}</div><div class="field resourceDetailField"><label>${r.label ? "Character details (optional)" : "Make this asset specific"}</label><textarea data-resource-detail="${e(r.key)}" placeholder="${r.type === "haven" ? "e.g. basement flat in Neustadt, concealed entrance, reinforced shutters" : "Describe the actual asset, person, collection, or identity"}">${e(detail)}</textarea></div></div>`;
        })
        .join("") ||
      '<div class="notice warn">No Lifepath Resource dots allocated yet.</div>'
    }</div><div class="sectionTitle">Free Resources</div><div class="allocationStatus compact ${left === 0 ? "complete" : ""}"><div><span>Free Resource dots remaining</span><strong>${left}</strong><small>${freeResourceSpent()} of ${c.freeResourceDots} distributed</small></div><button class="btn" data-action="add-resource" ${freeResourceSpent() >= c.freeResourceDots ? "disabled" : ""}>Add Resource</button></div>${state.resources.free.map((r, i) => renderFreeResource(r, i)).join("")}${issuesHtml(9)}</section>`;
  }
  function renderFreeResource(r, i) {
    const rt = resourceType(r.type);
    return `<div class="resourceEntry infoTile">${r.type ? `<button class="tileInfo" data-info-resource="${r.type}" aria-label="Read ${e(rt?.name || r.type)} rules">?</button>` : ""}<div class="field"><label>Type</label><select data-free-res-type="${i}"><option value="">Choose…</option>${D.resourceTypes.map((x) => `<option value="${x.id}" ${r.type === x.id ? "selected" : ""}>${e(x.name)}</option>`).join("")}</select></div><div class="field"><label>Specific label</label><input data-free-res-label="${i}" value="${e(r.label || "")}" placeholder="e.g. Armory, Dresden court, BMW 5 Series"></div><div class="field"><label>Dots</label><input data-free-res-dots="${i}" type="number" min="1" max="${attrMax()}" value="${Number(r.dots || 1)}"></div><button class="btn danger" data-remove-resource="${i}">Remove</button><div class="field resourceFreeDescription"><label>Character details (optional)</label><textarea data-free-res-description="${i}" placeholder="What exactly is this Resource for the character?">${e(r.description || "")}</textarea></div></div>`;
  }

  function renderFinish() {
    const issues = allIssues(),
      lpNames = state.lifepaths.map((_, i) => lpDef(i)?.name).filter(Boolean);
    return `<section class="step active"><h1>Step 11 · Finishing Touches</h1><div class="lead">Complete identity details, Important Items, weapons if relevant, and optional Flaws. The review below follows a character-sheet hierarchy instead of equal-weight dashboard cards.</div><div class="grid2"><div class="field"><label>Name</label><input id="charName" value="${e(state.identity.name)}"></div><div class="field"><label>Alias</label><input id="charAlias" value="${e(state.identity.alias)}"></div><div class="field"><div class="fieldLabelRow"><label>Apparent Age</label><button class="fieldInfoBtn" data-info-apparent-age aria-label="Explain Apparent Age">?</button></div><input id="apparentAge" value="${e(state.identity.apparentAge)}"><div class="fieldHint">How old the character looks, not a second chronological age field.</div></div><div class="field"><label>Actual Age</label><input id="actualAge" value="${e(state.identity.actualAge)}"><div class="fieldHint">Chronological age; the Alpha also asks how old they were at the Embrace and how long ago it was.</div></div><div class="field"><label>Nostalgic Decade</label><input id="nostalgicDecade" value="${e(state.identity.nostalgicDecade)}"></div></div><div class="sectionTitle sectionTitleWithInfo"><span>Important Items</span><button class="fieldInfoBtn" data-info-important-items aria-label="Explain Important Items">?</button></div><div class="notice">RAW allowance: ${lpCount()} additional Important Item${lpCount() === 1 ? "" : "s"} because the character has ${lpCount()} Lifepath${lpCount() === 1 ? "" : "s"}. Each item should fit the character’s Lifepath background; slots are not permanently assigned one-to-one. Selected Lifepaths: ${e(lpNames.join(" · ") || "—")}.</div><div class="grid2">${state.identity.items.map((x, i) => `<div class="field"><label>Important Item ${i + 1}</label><input data-important-item="${i}" value="${e(x)}" placeholder="Key object carried during the night"></div>`).join("")}</div><div class="field"><div class="fieldLabelRow"><label>Weapons / combat gear (optional, Storyteller-adjudicated)</label><button class="fieldInfoBtn" data-info-weapons aria-label="Explain weapon categories">?</button></div><textarea id="weapons" placeholder="The Alpha gives no fixed chargen weapon count; list agreed weapons or combat gear here.">${e(state.identity.weapons || "")}</textarea></div><div class="field"><label>Flaws (optional, free text)</label><textarea id="flaws">${e(state.identity.flaws)}</textarea></div><div class="sectionTitle">Character Review</div>${reviewHtml()}<div class="sectionTitle">Validation</div>${issues.length ? `<div class="issues">${issues.map((x) => `<div class="issue ${x.severity}">Step ${x.step + 1}: ${e(x.msg)}</div>`).join("")}</div>` : '<div class="notice good">Character is complete under the implemented Alpha rules.</div>'}${issuesHtml(10)}</section>`;
  }
  function sheetDots(n) {
    return n > 0
      ? `<span class="sheetDots" aria-label="${n} dots">${dots(n)}</span>`
      : '<span class="sheetDots empty">—</span>';
  }
  function sheetInfoButton(attr, value, label) {
    return `<button class="sheetInfoBtn" ${attr}="${e(value)}" aria-label="${e(label)}">?</button>`;
  }
  function reviewSkillRow(s) {
    const r = finalSkill(s.id),
      fs = (state.focuses[s.id] || []).filter((x) => String(x).trim());
    return `<div class="sheetSkillRow"><span class="sheetSkillName">${e(s.name)}</span>${sheetDots(r)}<span class="sheetFocuses">${fs.length ? e(fs.join(" · ")) : "—"}</span>${sheetInfoButton("data-info-skill", s.id, `Read ${s.name} rules`)}</div>`;
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
    return `<div class="sheetDiscGroup"><div class="sheetDiscTitle"><b>${e(d.name)}</b><span class="sheetDiscTitleRight">${sheetDots(r)}${sheetInfoButton("data-info-disc", d.id, `Read ${d.name} rules`)}</span></div>${powers.length ? powers.map((p) => `<div class="sheetPowerRow"><span>${e(p.name)}</span><span class="sheetPowerActions"><small class="sheetPowerRank">${p.rank}-dot</small>${sheetInfoButton("data-info-power", `${d.id}:${p.id}`, `Read ${p.name} rules`)}</span></div>`).join("") : '<div class="sheetMuted">No selected powers</div>'}</div>`;
  }
  function reviewTraitCard(t) {
    return `<div class="sheetDiscGroup sheetRuleCard"><div class="sheetDiscTitle"><b>${e(t.name)}</b>${sheetInfoButton("data-info-trait", t.id, `Read ${t.name} rules`)}</div><div class="sheetMuted">${e(t.prerequisites || "Clan Trait")}</div></div>`;
  }
  function reviewMeritCard(m) {
    return `<div class="sheetDiscGroup sheetRuleCard"><div class="sheetDiscTitle"><b>${e(m.name)}</b>${sheetInfoButton("data-info-merit", m.id, `Read ${m.name} rules`)}</div><div class="sheetMuted">${e(m.summary || m.prerequisites || "Merit")}</div></div>`;
  }
  function reviewResourceRow(r, detail = "") {
    const rt = resourceType(r.type);
    return `<div class="sheetResourceRow"><div class="sheetResourceHead"><b>${e(rt?.name || r.type)}${r.label ? `: ${e(r.label)}` : ""}</b><span class="sheetResourceActions">${sheetDots(Number(r.dots || 0))}${sheetInfoButton("data-info-resource", r.type, `Read ${rt?.name || r.type} rules`)}</span></div>${detail ? `<div class="sheetResourceDetail">${e(detail)}</div>` : ""}</div>`;
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
    return `<div class="sheetReview"><section class="sheetBlock sheetIdentity"><h3>Identity</h3><div class="sheetIdentityGrid">${sheetKV("Name", state.identity.name || "—")}${sheetKV("Alias", state.identity.alias || "—")}${sheetKV("Clan", c?.name || "—", `data-info-clan="${e(c?.id || "")}"`)}${sheetKV("Tier", creature().name, "data-info-review-tier")}${sheetKV("Generation", `${state.generation} · modifier ${generationModifier()}`, "data-info-review-generation")}${sheetKV("Sire", sire?.name || "—", "data-info-review-sire")}${sheetKV("Apparent Age", state.identity.apparentAge || "—", "data-info-apparent-age")}${sheetKV("Actual Age", state.identity.actualAge || "—")}${sheetKV("Nostalgic Decade", state.identity.nostalgicDecade || "—")}${sheetKV("Lifepaths", state.lifepaths.map((_, i) => lpDef(i)?.name || "—").join(" · "), "data-info-review-lifepaths", "wide")}</div></section><section class="sheetBlock sheetHumanity"><h3>Humanity ${sheetInfoButton("data-info-review-humanity", "1", "Explain Humanity Scale")}</h3><div class="sheetHumanityLine"><strong>${e(humanity)}</strong><span>Nature: <b>${e(nature?.name || "—")}</b> ${nature ? sheetInfoButton("data-info-nature", nature.id, `Read ${nature.name} Nature`) : ""}</span></div></section><div class="sheetVitals"><section class="sheetBlock vital"><span>Vitae Maximum</span><strong>${vitaeMax()}</strong><small>10 + Stamina</small></section><section class="sheetBlock vital"><span>Willpower Maximum</span><strong>${willpowerMax()}</strong><small>5 + Composure + Resolve</small></section></div><section class="sheetBlock"><h3>Attributes</h3><div class="sheetAttrGrid">${[
      "Physical",
      "Social",
      "Mental",
    ]
      .map(
        (cat) =>
          `<div class="sheetAttrCol"><h4>${cat}</h4>${D.attributes
            .filter((a) => a.category === cat)
            .map(
              (a) =>
                `<div class="sheetAttrRow"><span>${e(a.name)}</span><span class="sheetAttrActions">${sheetDots(Number(state.attributes.ratings[a.id] || 0))}${sheetInfoButton("data-info-attr", a.id, `Read ${a.name} rules`)}</span></div>`,
            )
            .join("")}</div>`,
      )
      .join(
        "",
      )}</div></section><section class="sheetBlock"><h3>Skills</h3><div class="sheetSkillGrid">${D.skills.map(reviewSkillRow).join("")}</div></section><section class="sheetBlock"><h3>Disciplines & Powers</h3><div class="sheetDiscGrid">${
      D.disciplines
        .filter((d) => disciplineRating(d.id) > 0)
        .map(reviewDiscGroup)
        .join("") || '<span class="sheetMuted">—</span>'
    }</div></section><section class="sheetBlock"><h3>Clan Traits</h3><div class="sheetDiscGrid">${traits.length ? traits.map(reviewTraitCard).join("") : '<span class="sheetMuted">—</span>'}</div></section><section class="sheetBlock"><h3>Merits</h3><div class="sheetDiscGrid">${merits.length ? merits.map(reviewMeritCard).join("") : '<span class="sheetMuted">—</span>'}</div></section><section class="sheetBlock"><h3>Resources</h3><div class="sheetResourceGrid">${lpResources.map((r) => reviewResourceRow(r, resourceDetail(r.key))).join("")}${freeResources.map((r) => reviewResourceRow(r, r.description || "")).join("") || '<span class="sheetMuted">—</span>'}</div></section><div class="sheetTwoCol"><section class="sheetBlock"><h3>Important Items ${sheetInfoButton("data-info-important-items", "1", "Explain Important Items")}</h3><div class="sheetSimpleList">${
      state.identity.items
        .filter((x) => String(x).trim())
        .map((x) => `<div>${e(x)}</div>`)
        .join("") || '<span class="sheetMuted">—</span>'
    }</div></section><section class="sheetBlock"><h3>Weapons / Combat Gear ${sheetInfoButton("data-info-weapons", "1", "Explain weapons")}</h3><div class="sheetText">${e(state.identity.weapons || "—")}</div></section></div>${state.identity.flaws.trim() ? `<section class="sheetBlock"><h3>Flaws</h3><div class="sheetText">${e(state.identity.flaws)}</div></section>` : ""}</div>`;
  }
  function sheetKV(k, v, infoAttr = "", extraClass = "") {
    return `<div class="sheetKV ${extraClass}"><span>${e(k)}</span><span class="sheetKVValue"><b>${e(v)}</b>${infoAttr ? `<button class="sheetInfoBtn" ${infoAttr} aria-label="Read ${e(k)} information">?</button>` : ""}</span></div>`;
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
            goStep(Math.min(state.step + 1, STEPS.length - 1))),
      );
    root
      .querySelectorAll('[data-action="go-clan"]')
      .forEach((b) => (b.onclick = () => goStep(1)));
    const ra = root.querySelector('[data-action="reset-attributes"]');
    if (ra)
      ra.onclick = () => {
        if (
          confirm(T("Reset all Attribute ratings to their 1-dot baseline?"))
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
            T("Reset all free Skill dots? Lifepath Skill dots will stay."),
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
        if (confirm(T("Clear all selected Focuses?"))) {
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
          state.focuses[sid][Number(i)] = x.value;
          save();
        }),
    );
    root.querySelectorAll("[data-focus-pick]").forEach(
      (b) =>
        (b.onclick = () => {
          const [sid, i] = b.dataset.focusPick.split(":");
          state.focuses[sid][Number(i)] = b.dataset.focusValue;
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
          if (!m || !prereqEligible(m.prerequisites)) return;
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
        return m && prereqEligible(m.prerequisites);
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
        if (x.schemaVersion !== 1) throw new Error("Unsupported schema");
        state = x;
        normalizeState();
        render();
      } catch (err) {
        alert(T("Could not import this character JSON: ") + err.message);
      }
    };
    r.readAsText(file);
  }

  function bindGlobal() {
    const reset = () => {
      if (confirm(T("Reset the current character?"))) {
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
