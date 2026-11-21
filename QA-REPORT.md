# QA Report — Organic Chemistry Chapters 1 and 12A–12F

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
