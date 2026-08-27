# VTM V6 Alpha Character Generator — v0.4.1

Static adaptive PWA for Vampire: The Masquerade V6 Alpha character creation.

## Source basis

- `vtmv6_for_machine.docx` supplied with the project.
- Character-creation rules follow the V6 Alpha Player Packet unless a project house rule is explicitly labelled.
- No V5 / V5.5 hybrid rules are intentionally imported.

## v0.4.1 changes

- Added the project **Lifepath Skill Cap** house rule. A Skill has a base chargen cap of 3, plus +1 for every selected Lifepath whose Skill list contains that Skill. The bonus applies even when that Lifepath assigns no Skill dot to it. Example: two selected Lifepaths both list Awareness → Awareness chargen cap 5.
- The dynamic Skill cap applies both while spending Lifepath Skill dots and while spending the later free Skill dots.
- If a Lifepath change lowers a Skill cap below the current rating, the generator removes excess free Skill dots first, then excess Lifepath dots, so an illegal hidden state is not retained. The affected Lifepath budget may then need to be reassigned.
- Focus acquisition remains tied to the Alpha thresholds at Skill ratings 1, 3, and 5. A house-rule Skill rating of 6 or 7 does not invent new Focus thresholds.
- Attribute selection now uses explicit numeric rating buttons instead of dot targets. The visual sheet can still render dots; chargen input prioritizes clarity.
- Attribute choices that would exceed the current Physical/Social/Mental category budget are disabled immediately. Priority swaps are also disabled when the existing ratings would not fit the resulting budgets.
- Attribute contextual help now displays the current rating, category budget, and the tier-specific character-creation cap.
- Attribute help explicitly marks ratings 6–8 as an Alpha source gap: the packet allows those ratings for Ancilla/Elder character creation but supplies qualitative rating descriptions only through 5.
- Skill contextual help was audited. The Alpha provides a general description for every Skill plus example Focuses and Focus descriptions, but it does not provide a 1–5 rating-by-rating qualitative scale comparable to Attributes. The generator shows the available Skill and Focus guidance and states this limitation.

## Current character-creation budgets

- Neonate: Attributes 7/5/3, Discipline dots 3 + sire 1, 4 powers, 1 Merit, 2 Clan Traits, 8 free Skill dots, 3 free Resource dots, max dots 5, chargen Discipline max 5.
- Ancilla: Attributes 8/6/4, Discipline dots 5 + sire 1, 6 powers, 2 Merits, 3 Clan Traits, 8 free Skill dots, 5 free Resource dots, max dots 6, chargen Discipline max 6.
- Elder: Attributes 9/7/5, Discipline dots 7 + sire 1, 8 powers, 3 Merits, 4 Clan Traits, 8 free Skill dots, 7 free Resource dots, max dots 8, chargen Discipline max 8.

## Project house rule: Lifepath Skill Cap

RAW Alpha sets every Skill to a character-creation cap of 3. This generator intentionally overrides that single rule:

`chargen Skill cap = 3 + number of selected Lifepaths that list the Skill`

Examples:

- Skill appears in no selected Lifepath → cap 3.
- Skill appears in one selected Lifepath → cap 4.
- Skill appears in two selected Lifepaths → cap 5.
- Ancilla/Elder characters can reach higher caps if three or four selected Lifepaths all list the same Skill.

The cap bonus depends on the Lifepath Skill list, not on where its 5 Lifepath Skill dots were actually spent.

## Attribute caps audit

The Player Packet's `Creatures of the Night` table gives these character-creation **Maximum Dots** values:

- Vampire (Neonate): 5.
- Vampire (Ancilla): 6.
- Vampire (Elder): 8.

Step 5 states that the creature/tier maximum applies when distributing dots, with Skills explicitly treated as the exception. The generator therefore treats 5/6/8 as the tier-level Attribute ceilings.

There is an important interaction with the category budgets. The generator uses a 1-dot floor for each Attribute, consistent with the supplied Attribute scale and rules that reduce Attributes only to a minimum of 1. With three Attributes in a category, the highest rating reachable from the starting budgets is therefore 5 for a Neonate (7 budget), 6 for an Ancilla (8 budget), and 7 for an Elder (9 budget). Elder `Max Dots 8` is a valid tier ceiling, but the standard Elder chargen Attribute budget does not provide enough dots to reach 8 while the other two Attributes remain at 1.

The later `Tiers of Play` table separately gives Blood Surge and Discipline maxima. It does not replace the chargen Attribute ceilings.

## Other retained v0.3.0 behavior

- Skills and Focuses remain split into Lifepath-derived and free-allocation sections.
- Lifepath Skill dots remain protected floors when spending free Skill dots.
- Sire-granted Discipline dots remain visible floors and cannot be removed.
- Non-Clan Sire Disciplines remain separate locked rating-1 cards; free Discipline dots remain restricted to Clan Disciplines.
- Discipline Powers remain grouped by Discipline.
- Desktop left navigation shows per-step progress and remaining allocations.
- Matching Lifepath Resources aggregate by Resource type + specific label; their dots are summed and contributing Lifepaths are shown.
- Discipline allocation remains RAW: the Alpha gives a pool of dots to distribute among Clan Disciplines and states no mandatory spread such as 3/2/1.

## Known Alpha source gaps

The generator preserves explicit Alpha gaps instead of inventing replacements.

- Several clans do not have complete clan entries in the supplied Chapter 3 material.
- Blood Sorcery, Necromancy, Tellurgy, and Vicissitude appear in summaries but have no Chapter 5 power definitions in the supplied packet.
- `Shared Soul` is listed in the Animalism power summary but has no full power entry later in the supplied packet.
- Attribute qualitative examples are supplied only through 5 dots even though Ancilla/Elder character-creation maxima can exceed 5.
- Skills have descriptions and example Focus guidance, but no rating-by-rating qualitative scale.
- v0.4.1 enables Vampire tiers only. Ghoul/Duskborn remain outside the active flow.

## Deployment

Upload the folder contents to any static web host or GitHub Pages. Keep `.nojekyll` in the deployment root.


## v0.4.1 Attribute budget correction
- Every Attribute has a free baseline rating of 1.
- Tier category budgets are distributed above that baseline.
- Neonate final category totals are 10 / 8 / 6 for 7 / 5 / 3 allocations.
- Ancilla final category totals are 11 / 9 / 7; Elder 12 / 10 / 8.
- Per-Attribute Max Dots remain Neonate 5, Ancilla 6, Elder 8.
