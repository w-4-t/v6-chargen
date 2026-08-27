# VTM V6 Alpha Character Generator — v0.6.0

Static adaptive PWA for Vampire: The Masquerade V6 Alpha character creation.

## Source basis

- `vtmv6_for_machine.docx` supplied with the project.
- Character-creation rules follow the V6 Alpha Player Packet unless a project interpretation or house rule is explicitly labelled.
- No V5 / V5.5 hybrid rules are intentionally imported.

## v0.6.0 desktop UI changes

### Skills and Focuses

- The free Skill allocation page now has a prominent remaining-dot counter.
- Non-zero Skills receive a visual highlight.
- Skill names are larger/bolder.
- `Current` and `Cap` are shown as separate labelled values instead of an ambiguous bare fraction.
- Added `Reset Skills`, `Reset Attributes`, and `Reset Focuses` actions.
- Focuses remain player-selected at Skill ratings 1, 3, and 5.
- Concrete parenthetical Focuses printed in Lifepaths are shown as recommendations only.
- Generic instructions such as `choose an art form` are not rendered as Suggested Focus names.
- RAW Skill examples and custom relevant Focus text remain available.

### Contextual help controls

- Full-text `Read full power`, `Read Merit`, `Read clan`, and similar tile actions were replaced with small `?` controls.
- Discipline Power metadata tags use centered text for Cost / Action / similar compact fields.

### Resources

- The Resources step now explains the shared Resource mechanics: Resource tests, quality/potential, temporarily spending dots, and downtime recovery.
- Every Resource type has contextual guidance describing what its dots actually scale under the Alpha text.
- Physical and Social Assets can be made character-specific with labels/descriptions.
- Aggregated Lifepath Resources still sum matching entries and list all contributing Lifepaths.
- The generator deliberately does not invent missing price tables or weapon-quality tables where the Alpha gives only qualitative guidance.

### Finish / review

The final review now uses a character-sheet hierarchy rather than equal-weight dashboard cards:

1. Identity across the full width.
2. Humanity.
3. Vitae and Willpower.
4. Attributes split into Physical / Social / Mental.
5. Skills.
6. Disciplines and Powers grouped by Discipline.
7. Clan Traits and Merits.
8. Resources.
9. Important Items and weapons/combat gear.
10. Flaws, when present.

Dots are used again in the review where they improve scanability.

### Character details / equipment clarification

- `Apparent Age` has contextual help explaining that it means how old the character looks; `Actual Age` is the chronological field.
- Important Items use generic slots with a total count equal to the number of Lifepaths. Slots are not permanently tied one-to-one to specific Lifepaths, but RAW still says each item should fit the character's Lifepath background.
- Important Items help explains the possible +1 die for creative/interesting use.
- Weapons/combat gear are kept in a separate optional field. The supplied Alpha gives weapon categories but no fixed chargen weapon count.

## Project house rule: Lifepath Skill Cap

RAW Alpha sets every Skill to a character-creation cap of 3. This generator intentionally uses:

`chargen Skill cap = 3 + number of selected Lifepaths that list the Skill`

The bonus applies even if no Lifepath dot was assigned to that Skill.

## Focus interpretation used by this project

The generator treats parenthetical Focuses printed beside Lifepath Skills as recommendations rather than mandatory values. Every Focus slot is chosen by the player. This matches the project decision after comparison with the Demiplane implementation.

RAW Focus thresholds remain 1 / 3 / 5 and the Alpha's general Skill Focus lists remain examples.

## Current vampire character-creation budgets

- Neonate: Attributes 7/5/3 above the free 1-dot baseline; Discipline dots 3 + sire 1; 4 powers; 1 Merit; 2 Clan Traits; 8 free Skill dots; 3 free Resource dots; Max Dots 5; chargen Discipline max 5.
- Ancilla: Attributes 8/6/4 above baseline; Discipline dots 5 + sire 1; 6 powers; 2 Merits; 3 Clan Traits; 8 free Skill dots; 5 free Resource dots; Max Dots 6; chargen Discipline max 6.
- Elder: Attributes 9/7/5 above baseline; Discipline dots 7 + sire 1; 8 powers; 3 Merits; 4 Clan Traits; 8 free Skill dots; 7 free Resource dots; Max Dots 8; chargen Discipline max 8.

Every Attribute starts at rating 1 for free. The category budgets are distributed above that baseline.

## Known Alpha source gaps

- Several clans do not have complete entries in the supplied Alpha packet.
- Blood Sorcery, Necromancy, Tellurgy, and Vicissitude appear in summaries but lack Chapter 5 power definitions in the supplied packet.
- `Shared Soul` is listed in the Animalism power summary but lacks a full power entry.
- Attribute qualitative examples are supplied only through 5 dots even though Ancilla/Elder Max Dots can exceed 5.
- Skills have descriptions and example Focus guidance but no Attribute-style rating-by-rating qualitative scale.
- Resources generally use qualitative scaling. The Alpha does not provide exact currency brackets for Wealth 2–4 or a fixed equipment/weapon table for each Repository rating.
- Ghoul/Duskborn are not yet enabled in the active generator flow.

## Deployment

Upload the folder contents to any static web host or GitHub Pages. The service worker cache key is versioned as `vtm-v6-alpha-chargen-v0.6.0`.
