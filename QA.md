# QA — v0.8.1

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

- [x] `UA / EN` controls exist in desktop and mobile utility areas.
- [x] Language preference is stored separately from character JSON.
- [x] Translation does not change internal IDs, ratings, allocations, selections, or export schema.
- [x] `data/v6_uk.js` mirrors the English rules-data structure.
- [x] Attributes, Skills, Focuses, Lifepaths, Resources, Sires, represented Clan rules, Discipline Powers, Clan Traits, Merits, Natures, and Power metadata have Ukrainian data/text mappings.
- [x] Dynamic chargen counters, validation messages, rank labels, allocation summaries, ARIA labels, and Finish/review composites have Ukrainian translation rules.
- [x] `Wealth → Статки`; the earlier UI term `Добробут` is absent.
- [x] `Persuasion → Вплив` as the Skill label; the earlier Skill label `Переконання` is absent.
- [x] `Blood Sorcery → Чаклунство Крові` in the current terminology set.
- [x] Defined-term capitalization policy is represented in the Ukrainian data for terms such as Звір, Шаленство, Обернення, Остаточна Смерть, and Кровний Зв’язок.
- [x] Compact UI intentionally preserves selected source terms such as `Sire`, `Vitae`, `Duskborn`, `Oblivion`, and `Vicissitude` rather than forcing unclear translations.
- [x] v0.7.0 and older supported localStorage keys are included in migration.
- [x] Focus state is cleared only for builds older than v0.5.0 that used obsolete automatic Focus behavior.

## Static checks

- [x] `src/app.js` passes `node --check` after final packaging pass.
- [x] `src/i18n.js` passes `node --check` after final packaging pass.
- [x] `data/v6.js` passes `node --check` after final packaging pass.
- [x] `data/v6_uk.js` passes `node --check` after final packaging pass.
- [x] English and Ukrainian rules-data trees pass structural comparison.
- [x] i18n smoke tests cover representative static, dynamic, nested-data, validation, and Finish strings.
- [x] `index.html` script order is V6 data → Ukrainian data → i18n runtime → app.
- [x] Service-worker cache key is `vtm-v6-alpha-chargen-v0.8.1` and caches both language data files plus i18n runtime.
- [x] Final ZIP passes `unzip -t`.

## Manual browser checks still required

Container Chromium remains unreliable in this runtime, including on minimal pages, so these remain real-browser checks:

- [ ] Desktop: EN → UA → EN changes visible UI immediately without changing allocations or selections.
- [ ] Desktop language button remains opposite Reset; Export / Import remain usable.
- [ ] Mobile language button, Export, Import, Reset all remain accessible in the utility bar.
- [ ] Long Ukrainian strings do not introduce overflow in Skills, Focuses, Caitiff rows, Power cards, Resources, or Finish.
- [ ] Contextual help remains readable at desktop widths and in the mobile drawer.
- [ ] PWA upgrade replaces the previous service-worker cache without retaining stale localization strings.

## Terminology status

Current Ukrainian wording is a complete working localization pass, not the final terminology authority. A user-led terminology audit is planned after this build; disputed choices can be changed independently of rules logic and saved-character data.

## v0.8.1 localization regression

- [x] Multi-paragraph EN/UA data entries have matching paragraph counts.
- [x] Every paragraph produced by splitting translated rules-data on blank lines resolves to Ukrainian through the runtime translator: 0 untranslated split data paragraphs.
- [x] Spot checks pass for multi-paragraph Powers in Animalism, Auspex, and Celerity.
- [x] v0.8.0 localStorage is included in legacy migration so existing character state is preserved.
