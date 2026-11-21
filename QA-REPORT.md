# QA Report — ICSE Class 10 Science: Physics 1 Force and Chemistry 1, 12A–12F

**Date:** 21 November 2026
**Chapters:** ICSE Class 10 Chemistry — Introduction to Organic Compounds, Organic Compounds (12A), Hydrocarbons: Alkanes (12B), Hydrocarbons: Alkenes (12C), Hydrocarbons: Alkynes (12D), Alcohols (12E), Carboxylic Acids (12F)
**Syllabus:** CISCE ICSE Chemistry, examination year 2027, Unit 9
**Build tested:** Vue 3 + Vite multi-page application, production `dist/`

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
