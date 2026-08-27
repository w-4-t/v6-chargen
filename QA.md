# QA — v0.1.0

## Automated/static checks performed

- `src/app.js` passes `node --check`.
- `data/v6.js` passes `node --check`.
- Data integrity check confirms:
  - 14 Lifepaths; each has 5 Skills and 3 Resources.
  - all Lifepath Skill/Resource IDs resolve.
  - all clan Discipline IDs resolve.
  - no duplicate power IDs within a Discipline.
  - no duplicate Clan Trait IDs within a clan.
  - 15 clan summary entries.
  - 81 selectable Alpha power records, including the summary-only `Shared Soul` record.

## Manual browser regression checklist

1. Neonate / Brujah / Unknown Sire / Potence.
   - Attribute budgets 7/5/3.
   - Discipline budget 3 + sire 1.
   - 4 powers, 2 Clan Traits, 1 Merit, 8 free Skill dots, 3 free Resource dots.
2. Switch Neonate → Ancilla.
   - Lifepaths become 3.
   - Attribute budgets become 8/6/4.
   - Generation list becomes 10th/9th.
   - Discipline/power/trait/merit/resource budgets update.
3. Lasombra variable Discipline.
   - Must choose Corruption or Oblivion.
4. Caitiff.
   - Randomize selects exactly 3 Disciplines.
5. Adoptive Sire.
   - Selecting adoptive clan changes allowed bonus Discipline list.
6. Lifepath allocation.
   - Exactly 5 Skill dots and 3 Resource dots per normal Lifepath.
   - Final Skill cannot be raised beyond chargen cap 3 through stepper controls.
7. Young Neonate.
   - One Lifepath; 8 Lifepath Skill dots; 5 Lifepath Resource dots.
8. Focuses.
   - Skill 1–2 requires one Focus; Skill 3 requires two Focuses.
9. Attributes.
   - Desktop info panel shows rating meaning for 1–5.
   - ratings above 5 show the Alpha source-gap warning.
10. Powers.
    - only ranks ≤ current Discipline rating are shown.
    - `Shared Soul` displays missing-full-entry warning.
11. Trait/Merit prerequisites.
    - ineligible items are disabled.
12. Resources.
    - non-Wealth free Resources require a specific label.
13. Review.
    - Vitae = 10 + Stamina.
    - Willpower = 5 + Composure + Resolve.
14. Persistence.
    - refresh retains state.
    - JSON export/import restores state.
15. Responsive behavior.
    - desktop ≥901 px: persistent left navigation + right rules panel.
    - mobile ≤900 px: horizontal progress + bottom rules drawer + fixed Back/Next bar.
