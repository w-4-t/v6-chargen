# QA — v0.6.1

## Rules / interpretation checks

- [x] Attribute category budgets are distributed above a free 1-dot baseline.
- [x] Attribute Max Dots: Neonate 5, Ancilla 6, Elder 8.
- [x] RAW Focus thresholds remain 1 / 3 / 5.
- [x] Project interpretation: Lifepath parenthetical Focuses are recommendations, never mandatory or auto-filled.
- [x] Generic Lifepath instructions such as `choose an art form` are not treated as concrete Suggested Focus names.
- [x] Project Lifepath Skill Cap house rule remains base 3 +1 for every selected Lifepath that lists the Skill.
- [x] Variable Clan Discipline is resolved on the Clan page only.
- [x] Important Item count is one additional item per Lifepath; item slots are generic rather than permanently assigned to a single Lifepath.
- [x] Important Item help includes the possible +1 die for creative/interesting use.
- [x] Physical and Social Assets can be made character-specific.

## Static checks

- [x] `src/app.js` passes Node syntax check.
- [x] `data/v6.js` passes Node syntax check.
- [x] v0.5.0 localStorage is included in migration sources and its already-correct Focus selections are preserved.
- [x] Focus UI contains no fixed/automatic Focus selection path.
- [x] Lasombra variable Discipline picker is rendered by the Clan step only.
- [x] Final review groups Powers by Discipline and renders Skills as structured rows.
- [x] Service-worker cache key is `vtm-v6-alpha-chargen-v0.6.1`.

## Browser / visual regression

The container's Chromium process does not terminate correctly in this runtime, so v0.6.0 browser screenshots could not be treated as a reliable automated regression result. These items remain manual:

- [ ] Desktop Skills: non-zero Skills are highlighted and `Current` / `Cap` labels remain readable at 1280 px and wider.
- [ ] Desktop Skills / Attributes / Focuses: reset actions only reset the intended allocations.
- [ ] Artist Expression does not show `choose an art form` as a literal Suggested Focus.
- [ ] Criminal Fighting can suggest Fighting Dirty without restricting Hand-to-Hand or a custom Focus.
- [ ] Rating 2 Skill has exactly one Focus slot; rating 3 has two; rating 5 has three.
- [ ] Lasombra shows Corruption / Oblivion on Clan step and does not repeat the picker on Discipline step.
- [ ] Power / Merit / Trait / Nature help uses compact `?` controls without covering selectable content.
- [ ] Cost / Action tags are optically centered.
- [ ] Resource descriptions and `?` help are readable without stretching cards awkwardly.
- [ ] Finish page follows the new hierarchy and does not allow Skills or Powers to dominate the layout.
- [ ] Mobile remains functional; v0.6.0 was designed primarily as a desktop look-and-feel pass.


## v0.6.1 checks

- [x] `src/app.js` passes `node --check`.
- [x] Caitiff selection uses a dedicated two-column checkbox/content row instead of the generic choice-row grid.
- [x] Mobile header contains Export, Import, and Reset controls wired to the same handlers as desktop.
- [x] Finish help hooks exist for Attributes, Skills, Disciplines, Powers, Clan Traits, Merits, Resources, Humanity/Nature, Tier, Generation, Sire, Clan, Lifepaths, Important Items, and Weapons.
- [x] Power info identifies the parent Discipline in metadata without repeating the Discipline description as the Power summary.
- [x] PWA icons are regenerated as V6/CG and service-worker cache key is v0.6.1.
- [ ] Manual visual regression remains required in a real desktop/mobile browser because container Chromium still does not terminate reliably.
