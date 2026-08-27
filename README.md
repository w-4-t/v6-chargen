# VTM V6 Alpha Character Generator — v0.8.1

Static adaptive PWA for Vampire: The Masquerade V6 Alpha character creation.

## Source basis

- `vtmv6_for_machine.docx` supplied with the project.
- Character-creation rules follow the V6 Alpha Player Packet unless a project interpretation or house rule is explicitly labelled.
- No V5 / V5.5 hybrid rules are intentionally imported.

## v0.8.1 — rules-reference localization fix

### v0.8.1 fix

The contextual rules panel renders long rules entries as separate paragraphs. In v0.8.0 the localization map paired the complete English and Ukrainian source strings, but the renderer split those strings before translation; multi-paragraph Powers, Clan text, and similar entries could therefore fall back to English paragraph-by-paragraph. v0.8.1 registers aligned paragraph pairs in addition to each complete rules string. Character data and EN/UA switching behavior are unchanged.

- `UA / EN` switches live without reloading the page or rebuilding character state.
- Language preference is stored separately from character JSON. The same exported character file can be used in either language.
- Ukrainian localization covers the generator UI and the rules content represented by the app: Attributes and rating descriptions, Skills and Focuses, Sire types, Lifepaths, Resources, Clans, Discipline descriptions and available Powers, Power metadata, Clan Traits, Merits, Natures, validation, contextual help, and Finish/review.
- `data/v6_uk.js` mirrors the English rules-data tree so nested Powers, Traits, Merits, Focuses, and other entries can be paired recursively instead of relying on isolated string patches.
- Power metadata such as Cost, Difficulty, Distance, Duration, and activation terms is localized.
- Lifepath Focus recommendations and Resource labels are localized.
- Defined VTM/game terms preserve terminological capitalization in Ukrainian when the English source uses capitalization as part of the term. Examples include `Kindred → Сородичі`, `Embrace → Обернення`, `Beast → Звір`, `Frenzy → Шаленство`, `Final Death → Остаточна Смерть`, and `Blood Bond → Кровний Зв’язок`.
- Terms that become misleading or unnecessarily bulky when forced into Ukrainian can remain in source form in compact UI. Current examples include `Sire`, `Vitae`, `Duskborn`, `Oblivion`, `Vicissitude`, clan names, and several formal titles. Longer help text may retain an English term where cross-reference to the Alpha is useful.
- Compact tiles avoid repetitive bilingual parentheses.
- Current Ukrainian word choices are intentionally treated as provisional. A separate terminology audit is expected after the full localization pass; changing a translation does not require changing character-state IDs or JSON.
- `Wealth` currently uses `Статки`, replacing the too-broad earlier `Добробут`.
- Migration includes v0.7.0 and earlier supported builds. Focus selections are preserved for v0.5.0 and later; only older builds with the obsolete auto-Focus behavior clear Focus state during migration.

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

Upload the folder contents to a static web host or GitHub Pages. The service-worker cache key is `vtm-v6-alpha-chargen-v0.8.1`.
