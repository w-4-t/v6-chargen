# VTM V6 Alpha Character Generator — v0.7.0

Static adaptive PWA for Vampire: The Masquerade V6 Alpha character creation.

## Source basis

- `vtmv6_for_machine.docx` supplied with the project.
- Character-creation rules follow the V6 Alpha Player Packet unless a project interpretation or house rule is explicitly labelled.
- No V5 / V5.5 hybrid rules are intentionally imported.

## v0.7.0 — live English / Ukrainian UI

- Added a persistent `UA / EN` language switch without page reload and without rebuilding or clearing the character state.
- Desktop: the language switch sits on the opposite side of the utility area from `Reset character`; Export / Import remain directly below.
- Mobile: language switch is the left-most utility action and Reset is the right-most action.
- The selected UI language is stored separately from the character JSON. Exported characters therefore remain language-neutral and can be imported while either locale is active.
- Navigation, step headings, controls, counters, validation/status labels, contextual-help labels, Attributes, Skills, Skill descriptions, Attribute rating descriptions, Sire types, Lifepaths, Resources, clan card descriptions, and Discipline summaries have Ukrainian localization.
- Canonical VTM names that are useful for cross-reference with the English Alpha (clans, most Discipline names, Power names, Merit/Clan Trait/Nature names, and user-entered Focus values) are intentionally retained in their source form where translating the term could create an unofficial competing rules term.
- Longer source-rule passages that do not yet have an explicit Ukrainian translation remain in the original English rather than being replaced with guessed or lossy paraphrase. This includes some full Power, Clan Trait, Merit, Nature, and clan chapter text. The locale switch is therefore functional and broad, but the rules-text translation layer is still being expanded.
- New PWA cache key includes the language module and Ukrainian localization data.

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

The number of known Powers is a separate chargen budget from Discipline dots. A character may know more than one Power in a Discipline with rating 1, but every selected Power must have rank less than or equal to that Discipline rating.

## Current Alpha source gaps

- Several clans do not have complete entries in the supplied Alpha packet.
- Blood Sorcery, Necromancy, Tellurgy, and Vicissitude appear in summaries but lack Chapter 5 power definitions in the supplied packet.
- `Shared Soul` is listed in the Animalism power summary but lacks a full power entry.
- Attribute qualitative examples are supplied only through 5 dots even though Ancilla/Elder Max Dots can exceed 5.
- Skills have descriptions and example Focus guidance but no Attribute-style rating-by-rating qualitative scale.
- Resources generally use qualitative scaling. The Alpha does not provide exact currency brackets for Wealth 2–4 or a fixed equipment/weapon table for each Repository rating.
- Ghoul/Duskborn are not yet enabled in the active generator flow.

## Deployment

Upload the folder contents to any static web host or GitHub Pages. The service worker cache key is `vtm-v6-alpha-chargen-v0.7.0`.
