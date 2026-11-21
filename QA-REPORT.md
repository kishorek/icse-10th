# QA Report — ICSE Class 10 Science: Physics 1 Force, Physics 2 Work, Energy and Power, and Chemistry 1, 12A–12F

**Date:** 21 November 2026
**Chapters:** ICSE Class 10 Physics — Force (1) and Work, Energy and Power (2); Chemistry — Introduction to Organic Compounds, Organic Compounds (12A), Hydrocarbons: Alkanes (12B), Hydrocarbons: Alkenes (12C), Hydrocarbons: Alkynes (12D), Alcohols (12E), Carboxylic Acids (12F)
**Syllabus:** CISCE ICSE Chemistry, examination year 2027, Unit 9
**Build tested:** Vue 3 + Vite multi-page application, production `dist/`

> Sections 1–8 record the original eight-chapter build. Sections A and B record the later Physics 1 and Physics 2 additions. The current build produces ten HTML entries and nine question exports; section B is the current Physics 2 record.

---

## 1. Gates and approvals

| Gate | Result | Date |
|---|---|---|
| GATE 1 — lesson list | Approved | 21 November 2026 |
| GATE 2 — complex-term analysis | Approved | 21 November 2026 |
| GATE 3 — visual and animation plan | Approved | 21 November 2026 |
| Skipped gates | None | — |

The approved lesson list, terminology decisions and visual plan are recorded in `content/chemistry/chapter-12c-12f/chapter-content.md`. One extra sorter lab per chapter was added inside an approved lesson concept; the deviations are recorded in that file and add no new syllabus content.

---

## 2. Environment

| Item | Value |
|---|---|
| Node.js | v22.23.2 |
| npm | 10.9.8 |
| Vue | 3.5.46 |
| Vite | 8.3.8 |
| anime.js | Installed from npm; no CDN |
| Playwright | 1.65.1 |
| Browser | Chromium (Playwright build) |
| Server | Vite preview on port 4173 |

---

## 3. Build

**Command:** `npm run build`

**Result:** Passed.

`dist/` contains all eight expected HTML entries:

- `dist/index.html`
- `dist/chapter-1.html`
- `dist/chapter-12a.html`
- `dist/chapter-12b.html`
- `dist/chapter-12c.html`
- `dist/chapter-12d.html`
- `dist/chapter-12e.html`
- `dist/chapter-12f.html`

The build output has no remote font, script, stylesheet or image dependencies. Anime.js is bundled from npm.

---

## 4. Production preview checks

The built `dist/` was served with `npm run preview` and checked with Playwright and screenshots.

**Result:** Passed.

| Check | Result |
|---|---|
| All eight pages return HTTP 200 | Passed |
| Titles and H1 headings match the intended chapters | Passed |
| Chapter switcher order 1 → 12A → 12B → 12C → 12D → 12E → 12F | Passed |
| Deep link `chapter-12a.html#lesson-5` shows lesson 5 | Passed |
| 12A quick-check progress reached `1 of 7 milestones` | Passed |
| Reset progress returned 12A to `0 of 7 milestones` | Passed |
| 12C assessment submitted, persisted and reset to `0 of 20 answered` | Passed |
| 12D assessment submitted, persisted and reset to `0 of 20 answered` | Passed |
| 12E assessment submitted, persisted and reset to `0 of 20 answered` | Passed |
| 12F assessment submitted, persisted and reset to `0 of 20 answered` | Passed |
| Console errors, page errors and failed requests during tested flows | None |
| Page-level horizontal overflow, all eight pages at 360, 768 and 1280 px | `0` in every case |

Visual review used 1280 px desktop captures of 12C, 12D, 12E and 12F, plus 360 px mobile captures of 12C and 12E. The header switcher, progress block, section navigation, hero, lesson visuals and lab controls were readable and reflowed without page-level overflow.

---

## 5. Question exports and validation

**Commands:** `npm run export:questions` then `npm run validate:questions`

**Result:** Passed.

| Chapter | Questions | Marks |
|---|---:|---:|
| Chapter 1 | 24 | 39 |
| Chapter 12A | 30 | 50 |
| Chapter 12B | 20 | 34 |
| Chapter 12C | 20 | 37 |
| Chapter 12D | 20 | 37 |
| Chapter 12E | 20 | 33 |
| Chapter 12F | 20 | 36 |

```text
Exported 154 questions across 7 chapters.
Validated all 7 chapter question exports.
```

All exports validate against `.agents/icse-class10-interactive-learning-skill/schemas/question.schema.json`. Every question is labelled `original_practice`.

---

## 6. Browser end-to-end tests

**Command:** `npm run test:e2e` (`npx playwright test`)

**Result:** 57 passed, 0 failed (about 2.0 minutes). After a final cosmetic SVG tweak, `chapter-12f.spec.js` and `lesson-media.spec.js` were re-run: 10 passed.

| Suite | Tests | Result |
|---|---:|---|
| `landing.spec.js` | 1 | Passed |
| `chapter-1.spec.js` | 8 | Passed |
| `chapter-12a.spec.js` | 10 | Passed |
| `chapter-12b.spec.js` | 7 | Passed |
| `chapter-12c.spec.js` | 6 | Passed |
| `chapter-12d.spec.js` | 5 | Passed |
| `chapter-12e.spec.js` | 5 | Passed |
| `chapter-12f.spec.js` | 4 | Passed |
| `integration.spec.js` | 5 | Passed |
| `lesson-media.spec.js` | 6 | Passed |

Coverage includes:

- Landing page lists and links all seven chapters.
- New chapter lessons, quick checks, named labs, memory workshops, revision centres and flashcards.
- 12C isomer, preparation and sorting labs; animated preparation flow; reduced-motion behaviour.
- 12D isomer, preparation, identification-bench and addition-sorting labs.
- 12E hydroxyl, preparation, property-trend, reaction-sorter, safety-comparison and risk-sorter activities.
- 12F acid sorter, ester builder, reaction map and use/property sorter.
- Assessment submission, self-marking, persistence across reload and reset for 12C–12F.
- Progress isolation across chapters.
- Chapter switcher and deep links.
- No page-level horizontal overflow at 360, 768 and 1280 px on all eight pages.
- Every lesson in 12A–12F has at least one purpose-built visual and one memory hook with a cover/reveal mapping.
- No console errors, page errors or failed requests during the tested flows.

---

## 7. Responsive and accessibility checks

- Page-level horizontal overflow was `0` for all eight pages at 360, 768 and 1280 px.
- Diagrams and wide flow panels scroll inside their own containers.
- All controls are native links, buttons, radios, checkboxes, selects or text inputs.
- Correct/incorrect status and observations use text, not colour alone.
- Progress bars expose labels and `aria-valuenow`.
- Lesson visuals include a caption, “What to notice” list, SVG title/description or text equivalent, and a “Read the visual” disclosure.
- Animations have Play, Pause and Restart buttons. `prefers-reduced-motion` was tested on the 12C preparation animation; the same shared component pattern is used by the other animations.
- Anime.js timelines are paused and reverted in `onBeforeUnmount`.

**Not performed:** a full screen-reader audit with NVDA, JAWS or VoiceOver; an automated axe scan; a complete manual keyboard-only walkthrough of every assessment question and every lab; physical phone or tablet testing. These remain unverified.

---

## 8. Content and scope checks

- Seven chapters are present with the intended scope: Chapter 1 Unit 9(i); 12A Unit 9(ii)–(iv); 12B Unit 9(v) alkanes; 12C Unit 9(v) alkenes; 12D Unit 9(v) alkynes; 12E Unit 9(vi); 12F Unit 9(vii).
- 12C covers the alkene family, ethene structure and preparation, addition with H₂/Cl₂/Br₂/I₂, combustion, uses and bromine-water testing.
- 12D covers the alkyne family, ethyne structure and preparation, stepwise addition, combustion, uses and distinguishing tests.
- 12E covers the alcohol family, hydrolysis of an alkyl halide, required physical properties, combustion, sodium, esterification, dehydration, denatured/spurious alcohol and uses.
- 12F covers the carboxyl family, acetic acid structure, vinegar, glacial acetic acid, litmus/alkali/alcohol reactions and uses.
- Enrichment is labelled: ozonolysis, polymerisation and KMnO₄ oxidation in 12C; HCl/ozone and extra tests in 12D; fermentation, industrial hydration and oxidation in 12E; preparation routes and extra acid reactions in 12F.
- Written marking points are hidden until submission; written answers are self-assessed.
- No textbook page mapping is claimed in student-facing prose; supplied scans are disclosed in `chapter-sources.md`.

**Not performed:** a fresh independent subject-expert review of every taught sentence. Chemistry accuracy was checked by reading the rendered chapters and comparing equations, names and conditions with the supplied pages.

---

## 9. Text/visual learning-time budget

The full per-lesson table is in `content/chemistry/chapter-12c-12f/chapter-content.md`.

**Result:** every lesson is inside the 35–45% visual band.

| Chapter | Text-led minutes | Visual-led minutes | Visual share |
|---|---:|---:|---:|
| 12C | 30 | 21 | 41% |
| 12D | 30 | 21 | 41% |
| 12E | 35.5 | 22 | 38% |
| 12F | 32 | 22 | 41% |
| **Total** | **127.5** | **86** | **40.3%** |

Assessment, revision centre and memory workshop are excluded from the per-lesson budget, as specified by the skill.

---

## 10. Known limitations and unverified items

1. **Official CISCE PDF:** the cisce.org page returned HTTP 403 to automated retrieval. Scope was cross-checked against current 2026-27 syllabus summaries and the unchanged 2025-26 wording.
2. **Textbook:** CISCE does not prescribe a Chemistry textbook. The 12A–12F scans were supplied without edition or publisher details, and no page mapping is claimed in the chapters.
3. **Written answers:** marked by student self-assessment against marking points. There is no teacher or backend marking.
4. **Progress storage:** localStorage only. It is not synchronised across devices and can be erased by clearing browser data.
5. **Cross-browser:** tested in Chromium only. Firefox and Safari were not tested.
6. **Real devices:** no physical phone or tablet testing.
7. **Screen reader:** no NVDA/JAWS/VoiceOver pass and no automated axe scan.
8. **Reduced motion:** tested on the 12C preparation animation; the other animations share the same pattern but were not individually reduced-motion tested.
9. **Print:** print styles were not printed or PDF-tested.
10. **Assessment edge cases:** submission with answered and unanswered questions was tested; not every possible answer combination was.
11. **Deployment:** pushed to `main` and deployed by GitHub Actions run 44866267039. The live landing page links all seven chapters, and `chapter-12c.html` was checked live with no console errors.

---

## 11. Delivery status

The seven-chapter application builds successfully, produces eight HTML entries, passes all 57 automated browser tests, validates all 154 exported questions, passed production-preview checks for navigation, deep links, progress isolation, assessment reset, responsive overflow, labs and lesson media, and is deployed at https://kishorek.github.io/icse-10th/. The limitations above are disclosed rather than claimed as verified.


---

# Addendum — Physics Chapter 1 Force (21 November 2026)

This addendum records the work and verification for the new Physics Chapter 1. It supersedes the earlier seven-chapter totals where the two differ.

## A1. Gates and approvals

| Gate | Result | Date |
|---|---|---|
| GATE 1 — lesson list | Approved | 21 November 2026 |
| GATE 2 — complex-term analysis | Approved | 21 November 2026 |
| GATE 3 — visual and animation plan | Approved | 21 November 2026 |
| Skipped gates | None | — |

The approved versions are recorded in `content/physics/chapter-1-force/chapter-content.md`. No lesson, term or visual outside the approved lists was added.

## A2. Source intake

- Uploaded file: `selina-class-10-physics-chapter-1-force.pdf`, 18 scanned pages, no text layer.
- Filed unmodified at `content/physics/chapter-1-force/source/`.
- Read page by page from 110 dpi page images.
- Scope cross-checked against the chapter's printed syllabus box and current 2026-27 CISCE Physics syllabus summaries.
- Edition and publisher are not stated in the scan, so no page mapping is claimed.

## A3. Build and production output

**Commands:** `npm run build`, `npm run export:questions`, `npm run validate:questions`.

**Results:** passed.

- `dist/` contains nine HTML entries: `index.html`, `chapter-physics-1.html`, `chapter-1.html`, `chapter-12a.html`, `chapter-12b.html`, `chapter-12c.html`, `chapter-12d.html`, `chapter-12e.html`, `chapter-12f.html`.
- `npm run export:questions` exported 178 questions across 8 chapters, including 24 for Physics.
- `npm run validate:questions` validated all 8 exports, including `exports/chapter-physics-1-questions.json` (24 questions, 50 marks).

## A4. Automated browser tests

**Command:** `npx playwright test` against the Vite development server with Chromium.

**Result:** 65 passed, 0 failed (2.4 minutes).

Physics-specific coverage (8 tests, all passed):

1. Chapter loads with all five approved lessons and key content.
2. Moment bench recalculates M = F × d, changes with angle, and switches direction.
3. Couple and equilibrium simulations respond to all tested controls.
4. Metre-rule lab balances and unbalances; see-saw steps through the calculation.
5. Centre-of-gravity selector and plumb-line animation work.
6. Tangent velocity, removal of centripetal force and the two observer frames work.
7. Reduced motion renders the final state for the line-of-action animation.
8. Memory, revision, assessment submission, persistence and progress milestones work.

The rest of the suite covers the seven chemistry chapters, landing page, chapter isolation, deep links, chapter navigation and no page-level overflow at 360, 768 and 1280 px. The physics page is included in the overflow test.

## A5. Keyboard and reduced-motion checks

- Keyboard: focused the force range input on the torque bench and pressed ArrowRight twice. The value moved from 20 N to 30 N and the moment changed from 12.0 to 18.0 N m. Focused the equilibrium “Couple” button and pressed Enter; the verdict changed to “spins about its centre”. Native range inputs, buttons and selects provide the keyboard path.
- Reduced motion: Playwright `emulateMedia({ reducedMotion: 'reduce' })` reloaded the page; the line-of-action visual rendered its final state and reported reduced motion. All other animations share the same pattern (render final state, do not loop) and were code-reviewed for it.

## A6. Visual review

Desktop captures at 1280 px and mobile captures at 360 px were taken of all twelve physics visuals and inspected. Issues found and fixed:

- Couple summary text and the couple-arm label overlapped the wheel; the summary moved below the diagram and the arm label moved outside the wheel.
- Equilibrium force labels sat on the body; they moved above and below the body.
- See-saw child boxes overlapped; the horizontal scale and box width were adjusted.
- Circular-motion arrowheads were oversized after using stroked markers; markers were switched to `userSpaceOnUse` with corrected sizes.
- The velocity arrow collided with the heading; the circle moved down and the arrow shortened.
- The centripetal escape path left the viewBox; the release angle and escape length were changed so the straight path stays visible.
- On 360 px, grid min-content sizing made lab controls extend past the viewport; `grid-template-columns: minmax(0, 1fr)` on the visual roots keeps controls wrapped while the diagram itself scrolls inside its container.

Final checked states: mobile controls are fully visible, the diagrams scroll inside their own containers, and page-level overflow remains 0 at 360, 768 and 1280 px.

## A7. Text/visual learning-time budget

| Lesson | Text-led minutes | Visual-led minutes | Visual share | Within 35-45%? |
|---|---:|---:|---:|---|
| 1 | 12 | 8 | 40.0% | Yes |
| 2 | 12 | 7.5 | 38.5% | Yes |
| 3 | 14 | 10 | 41.7% | Yes |
| 4 | 12 | 8 | 40.0% | Yes |
| 5 | 13 | 9 | 40.9% | Yes |
| **Total** | **63** | **42.5** | **40.3%** | Yes |

Memory workshop, revision centre and assessment are excluded, as the skill specifies. Each lesson includes guided “Try this” tasks so the interactive time is instructional, not passive watching.

## A8. Coverage map summary

| Syllabus point | Lesson | Assessment questions |
|---|---|---|
| Translational and rotational motion | 1 | PQ1, PQ4 |
| Moment of force, units, perpendicular distance, direction | 1 | PQ1–PQ5 |
| Couple, couple arm, moment of couple | 2 | PQ6–PQ7 |
| Equilibrium, static and dynamic, two conditions | 2 | PQ8–PQ9 |
| Principle of moments and verification | 3 | PQ10, PQ13–PQ14 |
| Numerical problems on moments | 3 | PQ3, PQ11–PQ12 |
| Centre of gravity, regular bodies, plumb line | 4 | PQ15–PQ18 |
| Uniform circular motion, speed vs velocity | 5 | PQ19–PQ20 |
| Centripetal and centrifugal force | 5 | PQ21–PQ24 |

## A9. Physics limitations and unverified items

1. The official CISCE Physics PDF could not be fetched by the build environment (HTTP 403); scope was checked against the supplied chapter's syllabus box and current syllabus summaries.
2. The scanned textbook states no edition or publication year, so no page mapping is claimed.
3. Written responses are self-marked against marking points; there is no teacher or backend marking.
4. Progress is localStorage only and is not synchronised across devices.
5. Chromium only; Firefox and Safari were not tested.
6. No physical phone or tablet testing; mobile checks used a 360 px emulated viewport.
7. No NVDA/JAWS/VoiceOver or automated axe pass.
8. Reduced motion was explicitly tested on the line-of-action animation; the other animations were checked in code and share the same pattern.
9. The animated diagrams are teaching schematics, not scale-accurate engineering drawings.
10. Print styles were not printed or PDF-tested.

## A10. Production preview verification

The built `dist/` was served with `npm run preview` on port 4174 and checked with Playwright.

| Check | Result |
|---|---|
| All nine pages return HTTP 200 | Passed (`index`, physics 1, chemistry 1, 12A–12F) |
| Titles match the intended pages | Passed |
| Deep link `chapter-physics-1.html#lesson-5` shows lesson 5 | Passed |
| Torque bench updates the moment when the distance slider changes | Passed (`24.0 N m` at 1.2 m with 20 N) |
| Reduced motion renders the line-of-action final state | Passed |
| Page-level overflow at 360, 768 and 1280 px | `0` in every case |
| Console errors, page errors and failed requests | None |

## A11. Physics delivery status

Physics Chapter 1 is implemented to the approved plan: five lessons, twelve purpose-built visuals (five interactive labs, five animations, one comparison toggle and one static diagram), fifteen quick checks, a memory workshop, a revision centre, flashcards and a 24-question/50-mark original practice assessment. It builds, validates and passes the automated browser suite. The limitations in section A9 are disclosed rather than claimed as verified.

## A12. Deployment

- Commit `d80dcda` (`feat: add physics chapter 1 force`) pushed to `main`.
- GitHub Actions workflow `Deploy to GitHub Pages` run `44876029838` completed successfully: build, Pages configuration, artifact upload and deploy all passed.
- Live checks at https://kishorek.github.io/icse-10th/:
  - Home page and `chapter-physics-1.html` both return HTTP 200 with the expected titles.
  - Home page shows 8 chapter cards; the Physics 1 card links to `./chapter-physics-1.html`.
  - The physics page shows the H1 “Force” and all 5 lesson sections.
  - The torque bench changes the moment when its direction control is used.
  - Reduced motion renders the final line-of-action state.
  - No page-level overflow at 1280 px and no console, page or request errors.

## A13. Visual and animation quality pass (21 November 2026)

Approved follow-up pass to raise the quality of all twelve physics visuals. No lesson prose, syllabus scope or assessment changed.

**Motion and behaviour**

- Door, metre rule, beam and centre-of-gravity support now settle with elastic easing instead of a linear ease-out.
- Couple, tangent-velocity and merry-go-round visuals loop continuously with Play, Pause and Restart, and pause automatically when scrolled out of view via an IntersectionObserver.
- Numeric readouts now count to their new values (see-saw total and adult distance, spring-balance reading).
- Added motion trails and ghosts: displacement and rotation ghosts in the equilibrium classifier, orbit trail in the velocity visual, ghost starting position and rotation arc, tangent trail after release.
- Centripetal release is now sequenced: the force is removed first, then the body leaves along the tangent.
- The spring-balance visual now has a two-state toggle that animates the rule’s weight in and scales the spring force arrow between 16 kgf and 26 kgf.
- The two-observer visual adds a split view with both frames side by side; controls and summaries still work in single-frame mode.

**Diagram quality**

- Consistent larger arrowheads using `markerUnits="userSpaceOnUse"`.
- Collision-safe labels and paint-order outlines on force, arm and angle labels.
- Improved compositions: moment bench angle arc, full-distance comparison and moment gauge; live perpendicular-distance lab with an angle slider; couple arm outside the wheel; metre-rule reaction arrow, distance dimensions, weight units and a BALANCED badge; spring-balance labels separated; ring support shown below G with a leader line; plumb-line support pin and thread; velocity acceleration arrow; centripetal force meter; split-view mini scenes.
- Mobile: controls stay wrapped at 360 px, diagrams scroll inside their own containers, split view collapses to one column, page-level overflow remains 0.

**Verification**

- `npm run build`: passed, nine HTML entries.
- `npx playwright test`: 65 passed, 0 failed (2.5 minutes), including the physics suite’s new checks for the spring toggle, acceleration toggle, split view and reduced motion.
- Manual screenshot review at 1280 px and 360 px covered all twelve labs; label collisions found in the first pass were fixed and rechecked.


---

# B. Physics Chapter 2 — Work, Energy and Power

**Date:** 21 November 2026
**Chapter:** Physics 2, Work, Energy and Power
**Syllabus:** CISCE ICSE Physics 2027, Unit 1(iii), (iv) and (vi)
**Source:** supplied Selina ICSE Class 10 Physics Chapter 2 scan, 28 pages, no usable text layer

## B1. Gates and approvals

| Gate | Result | Date |
|---|---|---|
| GATE 1 — lesson list | Approved | 21 November 2026 |
| GATE 2 — complex-term analysis | Approved | 21 November 2026 |
| GATE 3 — visual and animation plan | Approved | 21 November 2026 |
| Skipped gates | None | — |

The approved lesson list, complex-term table, 22-visual plan and final budget are recorded in `content/physics/chapter-2-work-energy-and-power/chapter-content.md`. No lesson, term or visual outside the approved lists was added.

## B2. Source intake and scope

- Uploaded file: `selina-class-10-physics-chapter-2-work-energy-and-power.pdf`, 28 scanned pages.
- Filed unmodified at `content/physics/chapter-2-work-energy-and-power/source/` and excluded from publication by `.gitignore`.
- Read page by page from 110 dpi page images.
- The printed syllabus box matches the 2027 Unit 1 parts (iii), (iv) and (vi).
- Unit 1(v) Machines is absent from the supplied chapter and is explicitly excluded; it requires a separate later chapter.
- The scan states no edition or publication year, so no page mapping is claimed.

## B3. Build, exports and validation

**Commands:** `npm run build`, `npm run export:questions`, `npm run validate:questions`.

**Results:** passed.

- `dist/` contains ten HTML entries: `index.html`, `chapter-physics-1.html`, `chapter-physics-2.html`, `chapter-1.html`, `chapter-12a.html`, `chapter-12b.html`, `chapter-12c.html`, `chapter-12d.html`, `chapter-12e.html`, `chapter-12f.html`.
- Physics 2 entry is `dist/chapter-physics-2.html`; its bundled JS and CSS are local, with no remote assets.
- `npm run export:questions` exported 202 questions across 9 chapters. Physics 2 contributes 24 questions and 53 marks.
- `npm run validate:questions` validated all 9 exports, including `exports/chapter-physics-2-questions.json` (24 questions).
- Every bank question is labelled `original_practice`.

## B4. Automated browser tests

**Command:** `npm run test:e2e` (`npx playwright test`) against the Vite development server with Chromium.

**Result:** **81 passed, 0 failed** (3.4 minutes).

Physics 2 coverage (14 tests, all passed):

1. Seven lessons and all 22 approved visual IDs render.
2. Work bench calculates positive, zero and negative work.
3. Angle resolver, playback controls and component values work.
4. Zero-work classifier gives reasons for wall, load and orbit cases.
5. Stairs, slope and lift all give W = mgh = 1500 J.
6. Unit ladder converts J to erg and kJ.
7. Power race and P = Fv labs calculate correctly.
8. Work/power, energy/power and friction comparisons toggle correctly.
9. Energy meter and energy-unit ordering task work.
10. PE-KE ramp, KE-speed, work-energy and KE-forms visuals work.
11. Conversion-chain and dissipation animations support Play/Pause/Restart.
12. Free fall, pendulum and energy graph show conservation.
13. Reduced motion renders the final state and reports it.
14. Memory, revision, assessment submission, persistence and the 8-milestone progress count work.

The rest of the suite covers the landing page, Physics 1, seven chemistry chapters, isolation, deep links, next/previous navigation and no page-level overflow at 360, 768 and 1280 px. `lesson-media.spec.js` confirms every lesson in Physics 1 and Physics 2 has a visual and a memory hook.

## B5. Production preview verification

The built `dist/` was served with `npm run preview` on port 4175 and checked with Playwright.

| Check | Result |
|---|---|
| All ten pages return HTTP 200 | Passed |
| Physics 2 title and H1 match the intended chapter | Passed |
| Deep link `chapter-physics-2.html#lesson-5` shows lesson 5 | Passed |
| Page-level overflow at 360, 768 and 1280 px | `0` in every case |
| Work bench gives −500.0 J at 100 N, 5 m, 180° | Passed |
| Keyboard: range 60° → 75° with ArrowRight | Passed |
| Keyboard: Play button activates with Enter | Passed |
| Reduced motion reports the final state for Angle Resolve and Power Race | Passed |
| Assessment submit changes progress to `1 of 8 milestones · 13%` | Passed |
| Assessment answer and summary persist after reload | Passed |
| Console errors, page errors and failed requests | None |

## B6. Visual review

Captures at 1280 px and 360 px were inspected for the whole chapter plus representative visuals: Work Bench, Angle Resolve, Gravity Paths, Power Race, kWh Meter, PE-KE Ramp, Dissipation, Pendulum and the energy graph. Evidence files:

- `qa/wep-desktop-top.png`
- `qa/wep-mobile-360-top.png`
- `qa/wep-work-bench.png`
- `qa/wep-pendulum-360.png`

Issues found and fixed:

- The Angle Resolve template called `toFixed` on the reactive object instead of its value, which stopped the page rendering; corrected before the final test run.
- Long summaries in grid visuals inherited the diagram's min-content width at 360 px. `grid-template-columns: minmax(0, 1fr)` was added to the affected roots so summaries wrap while diagrams scroll inside their own container.
- Reduced-motion initial states were made explicit for all animated labs, so each shows its final state without requiring Play.
- Unit conversion formatting was adjusted to avoid exponential notation for ordinary values such as 10⁷ erg.
- Labels use paint-order outlines and arrow markers use `userSpaceOnUse`; force, angle and value labels remain readable in the checked states.
- The approved GATE 3 table named `createTimeline`, `svg.createDrawable` and `svg.createMotionPath` for several rows. The implementation uses single anime.js `animate` calls that drive the same SVG attributes and reactive quantities, because each visual teaches one relationship. The subject transformations, measurements, controls and accessibility behaviour match the approved rows; this is recorded as a technique simplification, not a content change.

At 360 px, controls remain visible above the diagrams; the diagrams themselves scroll horizontally with the standard scroll hint. Page-level overflow remains 0.

## B7. Text/visual learning-time budget

| Lesson | Text-led minutes | Visual-led minutes | Visual share | Within 35–45%? |
|---|---:|---:|---:|---|
| 1 | 9.8 | 8 | 45.0% | Yes |
| 2 | 7.5 | 5 | 40.0% | Yes |
| 3 | 7.3 | 6 | 45.0% | Yes |
| 4 | 6.2 | 5 | 44.5% | Yes |
| 5 | 9.8 | 8 | 45.0% | Yes |
| 6 | 7.5 | 5 | 40.1% | Yes |
| 7 | 10.1 | 8 | 44.1% | Yes |
| **Total** | **58.2** | **45** | **43.6%** | Yes |

Text minutes use the 150 words per minute rule on lesson prose, definitions, tables, worked examples, exam tips, misconceptions, memory hooks and quick checks. Visual minutes count only guided tasks. The approved GATE 3 planning table estimated 142 text-led and 88 visual-led minutes; the final measured result is lower in both categories but remains inside the 35–45% band. The deviation is recorded in `chapter-content.md`.

## B8. Coverage map

| Syllabus point | Lesson | Assessment questions |
|---|---|---|
| Definition of work, `W = FS cos θ`, special cases θ = 0° and 90° | 1 | WQ1–WQ4 |
| Work by gravity, `W = mgh`, path independence | 2 | WQ5–WQ6 |
| Units of work and energy; erg and conversions | 2, 4 | WQ7, WQ12–WQ13 |
| Power, `P = W/t`, SI and CGS units, kW/MW/GW, horsepower | 3 | WQ8–WQ10 |
| Energy as work done; kWh, calorie and eV | 4 | WQ11–WQ13 |
| Mechanical energy; `U = mgh` derivation | 5 | WQ14, WQ17 |
| Kinetic energy; `K = ½mv²` derivation and numericals | 5 | WQ15–WQ16, WQ18 |
| Work-energy theorem | 5 | WQ18 |
| Translational, rotational and vibrational kinetic energy | 5 | WQ16 |
| Forms of energy and conversions | 6 | WQ19–WQ20 |
| Principle of conservation of energy | 7 | WQ21, WQ24 |
| `U + K` constant in free fall | 7 | WQ21–WQ22, WQ24 |
| Simple pendulum (qualitative) | 7 | WQ23 |
| Machines, Unit 1(v) | Excluded | Separate chapter required |

## B9. Limitations and unverified items

1. The supplied textbook edition is unknown, so no page mapping is claimed.
2. The official CISCE site returned HTTP 403 to automated retrieval; the 2027 wording was cross-checked against a public copy of the 2027 Science (52) Physics syllabus and current syllabus summaries.
3. Written responses are self-marked against marking points; there is no teacher or backend marking.
4. Progress uses localStorage only and is not synchronised across devices.
5. Chromium only; Firefox and Safari were not tested.
6. No physical phone or tablet; 360 px checks used an emulated viewport.
7. No NVDA, JAWS, VoiceOver or axe pass.
8. All 22 visuals were inspected at 1280 px and representative visuals at 360 px; every visual was not individually captured at both widths.
9. Diagrams are teaching schematics, not scale-accurate engineering drawings.
10. Print styles were not printed or PDF-tested.
11. Machines (Unit 1(v)) is deliberately not covered because it is absent from the supplied chapter and reserved for a separate chapter.

## B10. Delivery status

Physics Chapter 2 is implemented to the approved plan: seven lessons, 22 purpose-built visuals, 21 lesson quick checks, seven memory hooks, a memory workshop with 22 flashcards, a revision centre and a 24-question/53-mark original practice assessment. It builds, exports and validates with the full project, passes all 81 browser tests, and passes the production-preview checks recorded above. The limitations in section B9 are disclosed rather than claimed as verified.
