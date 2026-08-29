# QA — v0.10.9

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

## Desktop global UI regression

- [x] Desktop Reset / Export / Import labels are short in EN and UA.
- [x] `adaptive PWA` and the project-house-rules badge are absent from the desktop sidebar.
- [x] Version `v0.10.9` is displayed beneath Export / Import.
- [x] Desktop Character Generator / Генератор Персонажа title is forced to one line.
- [x] UA desktop navigation uses Істота / Сір / Фокус / Сили.
- [x] Desktop navigation uses one aggregate `N/M` counter per step.
- [x] Empty / partial / complete counters use danger / warning / success states.
- [x] The old green completion checkmark is removed.
- [x] Lifepath aggregate totals include each path selection plus all Lifepath Skill and Resource dots.

## Creature / Істота regression

- [x] Creature tiles contain the tier name plus narrative summary only; maximum dots, Generation Modifier, Attribute budgets, and Discipline budgets are absent from the tile body.
- [x] Neonate, Ancilla, and Elder tiles have separate EN/UA narrative summaries in the locale packs.
- [x] The desktop information panel derives all Creature numeric values from `data/core.js` and renders the labels through the active locale.
- [x] The selected Creature info panel exposes Generation band, Generation Modifier, maximum ratings, Lifepaths, Attribute budgets, Discipline allocation, Discipline Powers, Merits, Clan Traits, free Skill dots, and free Resource dots.
- [x] The one-Lifepath young-character choice contains narrative copy only.
- [x] When the young-character option is active, its 1 Lifepath / 8 Skill dots / 5 Resource dots / project cap-4 rule appears in the information panel instead of the choice card.
- [x] Creature info is rebuilt from the current locale on render rather than persisting localized Creature help text in character data.

## Clan / Клан regression

- [x] The selected-Clan duplicate summary card is absent.
- [x] Alpha-ready Clans are rendered in a selectable section above unavailable Clans.
- [x] Unavailable Clans retain narrative summaries and `?` information access but have no `data-clan` selection control.
- [x] Selected playable Clan rows use the success/green border state.
- [x] “Alpha entry complete/incomplete” badges are absent from the Clan page.
- [x] Canonical English Discipline names are shown on Clan selection surfaces in EN and UA.
- [x] Ukrainian Clan/Discipline information panels can show `English (Українська)` Discipline labels.
- [x] A legacy unavailable Clan selection counts as `0/1` rather than a completed Clan step.
- [x] Variable Discipline choices for playable Clans remain part of Clan-step progress.

## Automated checks

- [x] `node --check` passes for `data/core.js`, `data/en.js`, `data/uk.js`, `src/data.js`, `src/i18n.js`, and `src/app.js`.
- [x] `node tools/qa-data.cjs` passes.
- [x] `node tools/smoke-app.cjs` passes.
- [x] Service worker cache is `vtm-v6-alpha-chargen-v0.10.9` and includes all runtime data files.

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
- [ ] Creature tiles remain balanced at common desktop widths after removing numeric tags.
- [ ] Clan page: selecting a playable Clan changes only that existing row border and does not insert a duplicate summary card.
- [ ] Clan page: `?` opens details for both playable and unavailable Clans without changing the selected Clan.
- [ ] Clan page: unavailable Clans cannot be selected by mouse or keyboard.
- [ ] Clan page: canonical English Discipline names remain readable in UA; Ukrainian equivalents appear only as explanatory parentheticals in the right panel where applicable.
- [ ] Selecting Neonate / Ancilla / Elder updates the right information panel immediately.
- [ ] Enabling the one-Lifepath option exposes its detailed rule math only in the information panel.
- [ ] PWA upgrade replaces the previous service-worker cache without retaining stale older files.

## Terminology status

Current Ukrainian wording remains a working localization pass. Terminology changes should now be made in `data/uk.js` without touching rules logic or character-state IDs.

## v0.10.4 focused checks

- [x] Lasombra variable Discipline is chosen in Powers, not Clan.
- [x] Clan progress is 1/1 once an Alpha-ready Clan is chosen.
- [x] Powers progress includes the variable Discipline choice when applicable.
- [x] Creature tiles expose dedicated `?` controls on mobile and desktop.
- [x] One-Lifepath has its own `?` info target and does not share a combined Creature info entry.
- [x] Creature selection tiles use equal-height grid rows.

## v0.10.7 focused checks

- [x] Ukrainian Sire terminology is rendered as `Сір` rather than `Sire`.
- [x] The Sire step lead contains player-facing rules guidance rather than an implementation note.
- [x] Every Alpha Sire type has a dedicated `?` info target backed by the expanded Player Packet description.
- [x] Sire Discipline options use a fixed proportional right-hand list with canonical English Discipline names on separate rows.
- [x] `Adoptive Sire` and `Brood Child` show a compact Clan-Discipline placeholder in the Sire list until the related Clan is chosen.
- [x] Generation heading includes the active tier and has a direct info control.
- [x] Bonus Discipline cards are equal height.
- [x] Adoptive/Brood related-Clan tiles use an equal-sized responsive grid.
- [x] Existing core/locale split and stable machine IDs remain intact.


## v0.10.9 focused checks

- [x] Built-in Lifepath tiles use compact summaries while `?` retains the full localized Alpha description.
- [x] Hound shows `Sweeper / Ductus`, Diplomat shows `Emissary / Herald`, and Sheriff shows `Warlord` directly in the tile.
- [x] Custom Lifepath editor appears immediately below the create/edit control area.
- [x] A selected Custom Lifepath with five valid Skills unlocks the Skill matrix independently of unfinished Resource definitions.
- [x] Resource matrix remains gated until the selected Custom Lifepath has three distinct valid Resource definitions.
- [x] Skill matrix has one row per Skill and one allocation column per selected Lifepath.
- [x] Matching Resource definitions from standard Lifepaths share one matrix row.
- [x] Skill and Resource rows in Step 4 expose `?` help.
- [x] Resource rows are alphabetically sorted using the active locale's display labels.
- [x] Matrix containers scroll horizontally and keep the Skill/Resource name column sticky on narrow screens and high browser zoom.
- [x] `Reset allocations` clears Lifepath Skill/Resource dots while preserving Lifepath selections.
- [x] Validation/status output below the reset control has explicit vertical spacing.
- [x] Portable `user_content` remains self-contained and schema-versioned for cross-device JSON import.
