# VTM V6 Alpha Character Generator — v0.1.0

Static adaptive PWA for Vampire: The Masquerade V6 Alpha character creation.

## Source basis

- `vtmv6_for_machine.docx` supplied with the project.
- Character-creation flow follows Player Packet Steps 1–9.
- No V5 / V5.5 hybrid rules are intentionally imported.

## Implemented

- Vampire Neonate / Ancilla / Elder RAW creation budgets.
- Clan selection with explicit Alpha-incomplete markers.
- Variable Clan Discipline choices for Lasombra, Tremere, and Tzimisce; Caitiff random/manual selection.
- Sire type, related clan where needed, bonus Discipline, generation and generation modifier.
- Mortal and vampire Lifepaths, including RAW Custom Lifepath and optional Young Character rule for Neonates.
- Lifepath Skill/Resource dot allocation and Lifepath as Competence reference.
- Attribute primary/secondary/tertiary category budgets with dot-level contextual explanations.
- Free Skill dots, final chargen cap 3, Focus slots at Skill 1/3 with +1 Focus rule.
- Clan Discipline dots + separate sire bonus, power rank validation, full Alpha power text where present.
- Clan Traits for the seven clans with complete Alpha entries.
- All 16 Merits in the supplied Alpha packet with prerequisite checks.
- Humanity starting position and all 8 Natures with full Outburst text.
- Lifepath Resources + free Resources, labels, Important Items, Flaws.
- Derived Vitae and Willpower.
- Desktop three-column layout with persistent contextual rules/reference panel.
- Mobile single-column layout with contextual information in a bottom drawer.
- localStorage autosave, JSON import/export, PWA manifest and offline service worker.

## Known Alpha source gaps

The current packet explicitly leaves several clans / mechanics in development. The generator preserves those gaps instead of inventing replacements.

- Banu Haqim, Giovanni, Malkavian, Ravnos, Salubri, Tremere, Tzimisce, and Caitiff do not have complete clan entries in the supplied Chapter 3 material.
- Blood Sorcery, Necromancy, Tellurgy, and Vicissitude appear in summaries but have no Chapter 5 power definitions in the supplied packet.
- `Shared Soul` is listed as a 1-dot Animalism power in the Discipline Powers List but has no full power entry later in the supplied packet. It is selectable and explicitly marked as missing full rules.
- The packet gives qualitative Attribute descriptions only through 5 dots even though Ancilla/Elder maximums can exceed 5. The UI warns when a selected rating has no supplied qualitative description.
- v0.1.0 enables Vampire tiers only. Ghoul/Duskborn budgets exist in the Dot Distribution table, but the Step 1 creature table in the supplied packet does not provide equivalent full creature profiles.

## Deployment

Upload the folder contents to any static web host or GitHub Pages. Keep `.nojekyll` in the deployment root.
