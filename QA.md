# QA — v0.2.0

## Automated/static checks performed

- `src/app.js` passes `node --check`.
- `data/v6.js` passes `node --check`.
- Mock-DOM runtime smoke test confirms:
  - 11 chargen navigation steps render.
  - Lasombra with unresolved third Discipline shows Corruption and Oblivion on the Clan page.
  - the Discipline page also exposes the unresolved Lasombra choice.
  - after choosing Oblivion, the Clan Discipline set resolves to Dominate / Potence / Oblivion.
  - Attributes, Skills, and Focuses render as separate pages.
- Data integrity checks confirm Lifepath and Clan Discipline references resolve and Discipline power identifiers are unique within each Discipline.

## Manual browser regression checklist

1. Desktop text-heavy lists.
   - Clan and Sire rows keep their own natural height; adjacent entries do not stretch to the tallest row.
2. Split pages.
   - Step 5 = Attributes.
   - Step 6 = Skills.
   - Step 7 = Focuses.
3. Mobile Attributes.
   - tapping Attribute dots changes the rating without opening the rules drawer.
   - tapping the Attribute Info button opens the drawer.
4. Desktop Attributes.
   - tapping dots updates the persistent right-side Attribute reference.
5. Sire & Generation.
   - Sire Type uses list rows.
   - Generation uses direct chips.
   - related Clan, when required, uses direct chips.
   - Bonus Discipline uses direct choices.
6. Lasombra.
   - selecting Lasombra immediately exposes Corruption / Oblivion.
   - leaving the choice unresolved produces a clear validation message.
   - the Discipline page repeats the choice if still unresolved.
   - after selecting one, three Clan Disciplines are available for dot allocation.
7. Neonate / Brujah / Unknown Sire / Potence.
   - Attribute budgets 7/5/3.
   - Discipline budget 3 + sire 1.
   - 4 powers, 2 Clan Traits, 1 Merit, 8 free Skill dots, 3 free Resource dots.
8. Switch Neonate → Ancilla.
   - Lifepaths become 3.
   - Attribute budgets become 8/6/4.
   - Generation choices become 10th/9th.
9. Lifepath allocation.
   - exactly 5 Skill dots and 3 Resource dots per normal Lifepath.
   - final Skill cannot exceed chargen cap 3.
10. Focuses.
   - Skill 1–2 requires one Focus; Skill 3 requires two Focuses.
11. Persistence.
   - v0.1 saved state migrates to v0.2 navigation.
   - refresh retains state.
   - JSON export/import restores state.
12. Responsive behavior.
   - desktop ≥901 px: persistent left navigation + right rules panel.
   - mobile ≤900 px: horizontal progress + explicit bottom rules drawer + fixed Back/Next bar.
