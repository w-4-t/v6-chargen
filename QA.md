# QA — v0.5.0

## Rules / interpretation checks

- [x] Attribute category budgets are distributed above a free 1-dot baseline.
- [x] Attribute Max Dots: Neonate 5, Ancilla 6, Elder 8.
- [x] RAW Focus thresholds remain 1 / 3 / 5.
- [x] Project interpretation: Lifepath parenthetical Focuses are recommendations, never mandatory or auto-filled.
- [x] Project Lifepath Skill Cap house rule remains base 3 +1 for every selected Lifepath that lists the Skill.
- [x] Variable Clan Discipline is resolved on the Clan page only.

## Automated/static checks

- [x] `src/app.js` passes Node syntax check.
- [x] `data/v6.js` passes Node syntax check.
- [x] v0.4.2 localStorage is included in migration sources.
- [x] Focus UI contains no fixed/automatic Focus selection path.
- [x] Lasombra variable Discipline picker is rendered by the Clan step only.
- [x] Final review groups Powers by Discipline and renders Skills as structured entries.
- [x] Headless Chromium smoke test renders the desktop Focus and final Review pages without page errors.
- [x] Headless Chromium mobile Review smoke test reports no horizontal document overflow.

## Manual browser regression

- [ ] Select Criminal and give Fighting a Focus slot: Fighting Dirty appears as a Lifepath suggestion, but Hand-to-Hand and custom Focus remain selectable.
- [ ] Select Military and give Medicine a Focus slot: First Aid appears as a suggestion and is not auto-filled.
- [ ] Artist Expression shows the Lifepath prompt to choose an art form without creating a fixed value.
- [ ] Diplomat Persuasion offers Fraternizing and Negotiation as suggestions without restricting custom Focus.
- [ ] Rating 2 Skill has exactly one Focus slot; rating 3 has two; rating 5 has three.
- [ ] Lasombra shows Corruption / Oblivion on Clan step and does not repeat the picker on Discipline step.
- [ ] Final review Skills wrap cleanly and show Focus tags per Skill.
- [ ] Final review Powers are grouped under their Disciplines and do not overlap/overflow.
- [ ] Mobile Focus selection remains usable with explicit Info behavior.
- [ ] Desktop review remains readable at 1280 px and wider.
