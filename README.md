# VTM V6 Alpha Character Generator — v0.5.0

Static adaptive PWA for Vampire: The Masquerade V6 Alpha character creation.

## Source basis

- `vtmv6_for_machine.docx` supplied with the project.
- Character-creation rules follow the V6 Alpha Player Packet unless a project house rule is explicitly labelled.
- No V5 / V5.5 hybrid rules are intentionally imported.

## v0.5.0 changes

### Focuses

- Focus slots remain tied to Skill ratings 1, 3, and 5.
- Every Focus is now selected by the player.
- Parenthetical Focuses printed in selected Lifepaths are treated as **recommendations**, matching the project interpretation and Demiplane behavior. They never lock or auto-fill a Focus.
- Lifepath recommendations appear separately from the Skill's RAW example Focuses.
- Custom relevant Focus text remains allowed.
- The Focus page still separates Skills listed by selected Lifepaths from other Skills.
- Migration from older builds intentionally clears saved Focus selections once, because v0.4.x could have auto-filled Lifepath Focuses.

### Clan variable Discipline

- Variable Clan Discipline choices such as Lasombra `Corruption / Oblivion` are made only on the Clan page.
- The Discipline page no longer repeats the choice. If an imported/incomplete character reaches the page without resolving it, the generator shows a warning and a button back to the Clan step.

### Final review

- Skills are presented as individual compact entries with a numeric rating and Focus tags.
- Disciplines and Powers are grouped by Discipline. Each selected Power is shown on its own row with its rank.
- Clan Traits and Merits are separated from the Power list.
- Skills and Disciplines/Powers use full-width review cards on desktop to avoid compressed text and overflow.

## Project house rule: Lifepath Skill Cap

RAW Alpha sets every Skill to a character-creation cap of 3. This generator intentionally uses:

`chargen Skill cap = 3 + number of selected Lifepaths that list the Skill`

The bonus applies even if no Lifepath dot was assigned to that Skill.

## Current character-creation budgets

- Neonate: Attributes 7/5/3 above the free 1-dot baseline; Discipline dots 3 + sire 1; 4 powers; 1 Merit; 2 Clan Traits; 8 free Skill dots; 3 free Resource dots; Max Dots 5; chargen Discipline max 5.
- Ancilla: Attributes 8/6/4 above baseline; Discipline dots 5 + sire 1; 6 powers; 2 Merits; 3 Clan Traits; 8 free Skill dots; 5 free Resource dots; Max Dots 6; chargen Discipline max 6.
- Elder: Attributes 9/7/5 above baseline; Discipline dots 7 + sire 1; 8 powers; 3 Merits; 4 Clan Traits; 8 free Skill dots; 7 free Resource dots; Max Dots 8; chargen Discipline max 8.

Every Attribute starts at rating 1 for free. The category budgets are distributed above that baseline. Therefore all tier Attribute caps are reachable when the category has enough budget: Neonate 5, Ancilla 6, Elder 8.

## Retained behavior

- Attributes, Skills, and Focuses are separate steps.
- Attribute input uses explicit numeric rating buttons; impossible ratings are disabled immediately.
- Skills from Lifepaths retain their existing ratings on the free Skill page and cannot be reduced below Lifepath contributions there.
- Sire-granted Discipline dots remain visible floors and cannot be removed.
- Free Discipline dots are restricted to Clan Disciplines.
- Discipline Powers are grouped by Discipline during selection.
- Matching Lifepath Resources aggregate by Resource type + specific label, sum their dots, and list all contributing Lifepaths.
- Desktop navigation shows per-step progress and remaining selections.
- Desktop uses persistent contextual help; mobile opens help explicitly.

## Known Alpha source gaps

- Several clans do not have complete entries in the supplied Alpha packet.
- Blood Sorcery, Necromancy, Tellurgy, and Vicissitude appear in summaries but lack Chapter 5 power definitions in the supplied packet.
- `Shared Soul` is listed in the Animalism power summary but lacks a full power entry.
- Attribute qualitative examples are supplied only through 5 dots even though Ancilla/Elder Max Dots can exceed 5.
- Skills have descriptions and example Focus guidance but no Attribute-style rating-by-rating qualitative scale.
- Ghoul/Duskborn are not yet enabled in the active generator flow.

## Deployment

Upload the folder contents to any static web host or GitHub Pages. Keep `.nojekyll` in the deployment root.
