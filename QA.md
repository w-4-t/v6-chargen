# QA — v0.4.1

## Rules audit

- Step 1 creature table checked: Neonate 5/5, Ancilla 6/6, Elder 8/8 for Max Dots / Max Discipline at character creation.
- Tier Attribute Max Dots checked: 5 / 6 / 8. Step 5 explicitly exempts Skills from the creature Max Dots rule; Attributes are not exempted. With the generator's 1-dot Attribute floor and 7/5/3, 8/6/4, 9/7/5 budgets, the highest normally reachable starting Attribute is 5 / 6 / 7 respectively.
- Attribute qualitative descriptions checked: supplied only for ratings 1–5. No source text was found for Attribute rating descriptions 6–8.
- Dot Distribution checked: Neonate 3+1 Discipline dots, Ancilla 5+1, Elder 7+1.
- Discipline text checked: free dots are distributed among the three Clan Disciplines; Sire +1 is separate. No mandatory distribution pattern is stated.
- Tiers of Play checked: later Discipline caps are Neonate Clan 5 / Non-Clan 3; Ancilla Clan 7 / Non-Clan 5; Elder Clan 8 / Non-Clan 7.
- RAW Skill cap checked: 3 during character creation. v0.4.1 intentionally replaces this with the project Lifepath Skill Cap house rule.
- Project Skill cap formula checked: base 3 +1 per selected Lifepath whose Skill list contains the Skill, independent of actual Lifepath dot assignment.
- Focus text checked: Focuses are gained at Skill ratings 1/3/5. No additional threshold is defined above 5.
- Skill guidance checked: every Skill has a general description and example Focus descriptions; there is no Attribute-style rating-by-rating Skill scale.

## Automated checks completed

- [x] JavaScript syntax check passes for `src/app.js` and `data/v6.js`.
- [x] Two zero-dot Lifepaths listing Awareness produce Awareness cap 5.
- [x] A Skill absent from the selected Lifepaths remains cap 3.
- [x] Neonate primary 7 budget permits 5/1/1 and blocks a further increase.
- [x] Ancilla primary 8 budget permits a rating 6 Attribute.
- [x] Elder tier reports Max Dots 8 while the 9-dot primary budget with 1-dot floors yields an effective starting maximum of 7.
- [x] A house-rule Skill rating 7 still produces exactly three Focus slots (1/3/5).

## Manual / browser regression checklist

- [ ] Skill listed by no selected Lifepath has chargen cap 3.
- [ ] Skill listed by one selected Lifepath has chargen cap 4 even if that Lifepath assigns 0 dots to it.
- [ ] Skill listed by two selected Lifepaths has chargen cap 5 even if one or both assign 0 dots to it.
- [ ] Lifepath Skill allocation cannot raise a Skill above its dynamic cap.
- [ ] Free Skill allocation cannot raise a Skill above its dynamic cap.
- [ ] Removing/changing a Lifepath lowers affected caps immediately and clears excess free dots before Lifepath dots.
- [ ] Focus slots remain 1 at rating 1, 2 at rating 3, 3 at rating 5, and do not grow again at rating 7.
- [ ] Skills from Lifepaths appear in the upper block at their existing rating, not 0.
- [ ] A free Skill dot can raise a Lifepath Skill but cannot lower it below its Lifepath floor.
- [ ] Other Skills appear in the lower free-allocation block.
- [ ] Skill Info shows description, current rating, dynamic cap, Lifepath cap sources, and example Focus descriptions.
- [ ] Attribute controls are numeric buttons rather than dot targets.
- [ ] Attribute controls disable a rating that would exceed the current category budget.
- [ ] Attribute priority selector disables a swap if the current category totals cannot fit the swapped budgets.
- [ ] Fresh Neonate cannot exceed rating 5 in an Attribute.
- [ ] Ancilla allows Attribute ratings through 6.
- [ ] Elder shows tier Max Dots 8 but blocks rating 8 under the standard 9-dot primary budget while the other two Attributes retain their 1-dot floor; rating 7 is reachable.
- [ ] Attribute Info shows source descriptions through rating 5 and a source-gap notice for 6–8.
- [ ] Sire Discipline starts at rating 1 and cannot be reduced below that floor.
- [ ] If the Sire Discipline is non-Clan, it appears as a separate locked card and receives no free Clan Discipline dots.
- [ ] Powers are grouped under separate Discipline headings.
- [ ] Left desktop navigation shows progress / remaining counts for every step.
- [ ] Identical Lifepath Resources combine into one rating and list all contributing Lifepaths.
- [ ] Aggregated Lifepath Resource rating cannot exceed the selected tier's character-creation max dots.
- [ ] Existing v0.3.0 localStorage state migrates.
- [ ] Mobile Attribute rating buttons do not auto-open Info.


## v0.4.1 Attribute budget correction
- Every Attribute has a free baseline rating of 1.
- Tier category budgets are distributed above that baseline.
- Neonate final category totals are 10 / 8 / 6 for 7 / 5 / 3 allocations.
- Ancilla final category totals are 11 / 9 / 7; Elder 12 / 10 / 8.
- Per-Attribute Max Dots remain Neonate 5, Ancilla 6, Elder 8.
