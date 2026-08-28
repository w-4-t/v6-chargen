# VTM V6 Alpha Character Generator — v0.10.1

Static adaptive PWA for Vampire: The Masquerade V6 Alpha character creation.

## Source basis

- `vtmv6_for_machine.docx` supplied with the project.
- Character-creation rules follow the V6 Alpha Player Packet unless a project interpretation or house rule is explicitly labelled.
- No V5 / V5.5 hybrid rules are intentionally imported.

## v0.10.1 — desktop navigation/UI pass

- Desktop utility buttons now use short labels: Reset / Export / Import and Скинути / Експорт / Імпорт.
- The adaptive-PWA subtitle and project-house-rules badge were removed from the desktop sidebar.
- The version label now sits beneath Export / Import.
- The generator title is constrained to one line in both EN and UA.
- Ukrainian desktop navigation terminology is now Істота / Сір / Фокус / Сили.
- Desktop step progress is a single aggregate `N/M` badge. Empty, partial, and complete counts use danger, warning, and success states respectively; the old completion checkmark is removed. Lifepath progress aggregates selected Lifepaths plus their Skill and Resource dot budgets (for example, Elder `0/36`).

## v0.10.0 — full data / locale separation

This release completes the separation between machine rules, localized content, and application logic. English and Ukrainian content are independent locale packs that share only stable machine IDs. Application code no longer translates canonical English strings or scans rendered DOM text to find translations.

### Runtime structure

- `data/core.js` — language-independent machine data only: stable IDs, tiers, dot budgets, caps, Discipline relationships, structured prerequisites, Focus references, Resource label keys, and other values used by chargen logic.
- `data/en.js` — English rules/content pack and English UI string catalog.
- `data/uk.js` — Ukrainian rules/content pack and Ukrainian UI string catalog. It uses the same stable IDs as the English pack; translated text is not used as an identifier.
- `src/data.js` — generic data facade. It merges `core.js` with the active locale for rendering while preserving the same machine fields in every language.
- `src/app.js` — chargen state, calculations, validation, event handling, and rendering. Rules checks operate on IDs and structured machine data instead of English names or translated strings. Static UI copy is requested only by stable text IDs; dynamic copy is requested only by message IDs.
- `src/i18n.js` — generic key lookup and message interpolation. It contains no English-to-Ukrainian value map, no regex formatter, no DOM text walker, no Ukrainian copy, and no game-rule logic.
- Static UI text lives under `strings.text` in each locale pack. Dynamic validation, progress, status, ARIA, budget, and mixed-value phrases live under `strings.messages`.
- `src/data.js` owns generic locale/data lookup helpers, including cross-locale migration lookup for old Focus display strings. `src/app.js` does not hard-code `en` or `uk`.

The old `data/v6.js`, `data/v6_uk.js`, and duplicated `v6_uk_full.json` data trees were removed.

### Locale-independent character state

Character JSON is now schema version 2.

- Built-in Focus choices are stored as stable references such as `{ "ref": "running" }` instead of the displayed English/Ukrainian label.
- User-entered Focuses remain explicit free text as `{ "custom": "..." }`.
- Lifepath Resource details use stable `labelKey` identifiers rather than localized Resource labels.
- v0.8.1 and earlier schema-version-1 state is migrated automatically when loaded or imported.

This allows the same saved character to switch EN ↔ UA without changing rule identifiers or losing Focus/Resource associations.

### Logic no longer parses display text

The following locale/data dependencies were removed from chargen logic:

- Attribute category checks against strings such as `"Physical"`.
- Discipline lookup by localized Discipline name.
- Merit/Clan Trait prerequisite parsing from English prose.
- Sire Discipline eligibility hard-coded inside `app.js`.
- Focus recommendation detection based on English phrases such as `"choose ..."`.
- Lifepath Resource aggregation based on localized labels.
- Translation by comparing rendered English strings with Ukrainian strings.
- Locale-specific regex formatting of dynamic phrases.
- DOM tree-walking to rewrite visible English text after rendering.

Prerequisites are represented as structured requirements in `data/core.js`. Attribute/Resource categories and all relationships use stable IDs.

### Verification

Run:

```text
node tools/qa-data.cjs
node tools/smoke-app.cjs
```

`qa-data.cjs` checks locale/core topology, verifies that locale overlays cannot override machine data, validates stable IDs and references, verifies EN/UA static-text and message-key parity, checks that every UI key used by the app exists in both locale packs, and rejects legacy value-based translation machinery. `smoke-app.cjs` executes the real locale engine and application with a minimal DOM harness in EN and UA, verifies keyed static/dynamic rendering, and verifies schema-v1 → schema-v2 Focus migration.

## Existing project decisions retained

### Lifepath Skill Cap house rule

RAW Alpha sets every Skill to a character-creation cap of 3. This generator intentionally uses:

`chargen Skill cap = 3 + number of selected Lifepaths that list the Skill`

The bonus applies even if no Lifepath dot was assigned to that Skill.

### Focus interpretation

Parenthetical Focuses printed beside Lifepath Skills are recommendations rather than mandatory values. Every Focus slot is chosen by the player. RAW Focus thresholds remain 1 / 3 / 5.

### Attribute allocation

Every Attribute begins at rating 1 for free. The category budgets are distributed above that baseline.

- Neonate: Attributes 7/5/3; Max Dots 5.
- Ancilla: Attributes 8/6/4; Max Dots 6.
- Elder: Attributes 9/7/5; Max Dots 8.

### Discipline Powers

The number of known Powers is a separate chargen budget from Discipline dots. A character may know multiple Powers in a Discipline with rating 1, provided every selected Power is rank 1. In general, a selected Power's rank must be less than or equal to that Discipline's current rating.

## Current Alpha source gaps

- Several clans do not have complete entries in the supplied Alpha packet.
- Blood Sorcery, Necromancy, Tellurgy, and Vicissitude appear in summaries but lack Chapter 5 power definitions in the supplied packet.
- `Shared Soul` is listed in the Animalism power summary but lacks a full power entry.
- Attribute qualitative examples are supplied only through 5 dots even though Ancilla/Elder Max Dots can exceed 5.
- Skills have descriptions and example Focus guidance but no Attribute-style rating-by-rating qualitative scale.
- Resources generally use qualitative scaling rather than fixed currency/equipment brackets.
- Ghoul/Duskborn are not yet enabled in the active generator flow.

## Deployment

Upload the folder contents to a static web host or GitHub Pages. The service-worker cache key is `vtm-v6-alpha-chargen-v0.10.1`.
