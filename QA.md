# QA — v0.7.0

## Rules / interpretation regression

- [x] Attribute category budgets are distributed above a free 1-dot baseline.
- [x] Attribute Max Dots: Neonate 5, Ancilla 6, Elder 8.
- [x] RAW Focus thresholds remain 1 / 3 / 5.
- [x] Lifepath parenthetical Focuses remain recommendations, never mandatory or auto-filled.
- [x] Project Lifepath Skill Cap house rule remains base 3 +1 for every selected Lifepath that lists the Skill.
- [x] Variable Clan Discipline is resolved on the Clan page only.
- [x] Discipline Power eligibility remains `power rank <= Discipline rating`; Power count is a separate budget.
- [x] Important Item count remains one additional item per Lifepath.

## Bilingual implementation

- [x] `UA / EN` controls exist in desktop and mobile utility areas.
- [x] Language preference is stored under its own localStorage key and is not written into character JSON.
- [x] Switching language calls the normal render path and does not reset character state.
- [x] Switching back to English restores original DOM text for persistent static controls.
- [x] Ukrainian localization covers primary chargen UI, navigation, counters, Attributes and their rating help, Skills and Focus descriptions, Sires, Lifepaths, Resources, clan card descriptions, and Discipline summaries.
- [x] Canonical game/entity names and user-entered values are not rewritten in exported state.
- [x] Untranslated long source-rule blocks remain English rather than being machine-like partial translations.
- [x] Service worker pre-caches `data/v6_uk.js` and `src/i18n.js`.

## Static checks

- [x] `src/app.js` passes `node --check`.
- [x] `src/i18n.js` passes `node --check`.
- [x] `data/v6.js` passes `node --check`.
- [x] `data/v6_uk.js` passes `node --check`.
- [x] `index.html` loads scripts in order: V6 data → Ukrainian localization → i18n runtime → app.
- [x] Service-worker cache key is `vtm-v6-alpha-chargen-v0.7.0`.

## Manual browser checks still required

Container Chromium remains unreliable in this runtime, so these remain real-device/browser checks:

- [ ] Desktop: EN → UA → EN changes visible UI immediately without changing allocations or selections.
- [ ] Desktop language button is visually opposite Reset, with Export / Import still usable.
- [ ] Mobile language button, Export, Import, Reset all remain accessible and fit the sticky header.
- [ ] Ukrainian text does not create new overflow in Skills, Focuses, Caitiff Discipline rows, or Finish.
- [ ] Contextual help remains readable at 1280 px and wider.
- [ ] PWA upgrade from v0.6.1 refreshes the service-worker cache and does not retain stale UI strings.
