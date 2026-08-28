# QA — v0.10.0

## Data / logic separation

- [x] Language-independent rules data lives in `data/core.js`.
- [x] English content lives in `data/en.js`.
- [x] Ukrainian content lives in `data/uk.js`.
- [x] `src/data.js` merges machine data with the active locale without changing machine fields.
- [x] Static EN/UA UI catalogs are outside `src/i18n.js` and use matching stable `strings.text` IDs.
- [x] Generic `src/i18n.js` contains no Ukrainian copy, no English-value translation map, no DOM text walker, and no locale-specific formatter dependency.
- [x] Dynamic UI phrases use matching keyed message catalogs in `data/en.js` and `data/uk.js`.
- [x] Static UI copy in `src/app.js` is referenced by stable text IDs rather than embedded English phrases.
- [x] Static UI copy in `index.html` is referenced with `data-i18n` IDs.
- [x] `src/app.js` contains no hard-coded `en` / `uk` locale branches; locale migration lookup is delegated to `src/data.js`.
- [x] Legacy `src/i18n-uk.js` regex formatting has been removed.
- [x] Navigation step order is machine data; EN/UA step labels are locale data.
- [x] Old duplicated `data/v6.js`, `data/v6_uk.js`, and `data/v6_uk_full.json` were removed.
- [x] Attribute logic uses `physical / social / mental` IDs rather than localized category names.
- [x] Resource category logic uses stable category IDs.
- [x] Sire Discipline eligibility comes from machine data.
- [x] Clan Trait / Merit eligibility uses structured prerequisites rather than parsing English prerequisite prose.
- [x] Lifepath Resource aggregation uses stable `labelKey` values rather than localized labels.
- [x] Built-in Focus state uses stable Focus references rather than English/Ukrainian display labels.

## State migration

- [x] Character state schema is version 2.
- [x] v0.8.1 localStorage is included in legacy migration.
- [x] Schema-v1 built-in Focus strings migrate to stable refs where a known EN or UA label exists.
- [x] Unknown/user-defined Focus strings migrate as custom text.
- [x] Schema-v1 Resource detail keys are migrated to stable Resource label keys.
- [x] Schema-v1 and schema-v2 JSON imports are accepted.

## Rules / interpretation regression

- [x] Attribute category budgets are distributed above a free 1-dot baseline.
- [x] Attribute Max Dots: Neonate 5, Ancilla 6, Elder 8.
- [x] RAW Focus thresholds remain 1 / 3 / 5.
- [x] Lifepath parenthetical Focuses remain recommendations, never mandatory or auto-filled.
- [x] Project Lifepath Skill Cap house rule remains base 3 +1 for every selected Lifepath that lists the Skill.
- [x] Variable Clan Discipline is resolved on the Clan page only.
- [x] Discipline Power eligibility remains `Power rank <= Discipline rating`; Power count is a separate budget.
- [x] Important Item count remains one additional item per Lifepath.

## Localization regression

- [x] `UA / EN` controls remain in desktop and mobile utility areas.
- [x] Language preference is stored separately from character JSON.
- [x] Switching locale does not alter machine IDs, ratings, allocations, or selections.
- [x] EN and UA rule packs use the same stable entity IDs.
- [x] Attribute/Resource category labels are localized at the presentation boundary.
- [x] Focus recommendation refs have labels in both EN and UA packs.
- [x] Static UI text catalogs use stable string IDs shared by EN and UA packs.
- [x] Every static text ID referenced by `src/app.js` and `index.html` exists in both locale packs.
- [x] Humanity position labels and Custom Lifepath fallback text are localized through keyed data rather than hard-coded in application logic.
- [x] Existing terminology choices from v0.8.1 are preserved in `data/uk.js`.

## Automated checks

- [x] `node --check` passes for `data/core.js`, `data/en.js`, `data/uk.js`, `src/data.js`, `src/i18n.js`, and `src/app.js`.
- [x] `node tools/qa-data.cjs` passes.
- [x] `node tools/smoke-app.cjs` passes.
- [x] Service worker cache is `vtm-v6-alpha-chargen-v0.10.0` and includes all runtime data files.

## Manual browser checks still required

Container Chromium remains unreliable in this runtime, so final real-browser checks remain necessary:

- [ ] Desktop: EN → UA → EN changes visible rules data and UI immediately without changing character state.
- [ ] Desktop language button remains opposite Reset; Export / Import remain usable.
- [ ] Mobile language button, Export, Import, Reset all remain accessible in the utility bar.
- [ ] Existing v0.8.1 character localStorage migrates without visible loss.
- [ ] Built-in Focuses display in the active language after switching locale.
- [ ] Lifepath Resource detail text remains attached to the same Resource after switching locale.
- [ ] Long Ukrainian strings do not introduce overflow in Skills, Focuses, Powers, Resources, or Finish.
- [ ] Contextual help remains readable at desktop widths and in the mobile drawer.
- [ ] PWA upgrade replaces the previous service-worker cache without retaining stale older files.

## Terminology status

Current Ukrainian wording remains a working localization pass. Terminology changes should now be made in `data/uk.js` without touching rules logic or character-state IDs.
