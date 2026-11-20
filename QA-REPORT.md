# QA Report — Organic Chemistry Chapters 1, 12A and 12B

**Date:** 20 November 2026
**Chapters:** ICSE Class 10 Chemistry — Introduction to Organic Compounds, Organic Compounds (12A), Hydrocarbons: Alkanes (12B)
**Syllabus:** CISCE ICSE Chemistry, examination year 2027, Unit 9
**Build tested:** Vue 3 + Vite multi-page application, production `dist/`

---

## 1. Environment

| Item | Value |
|---|---|
| Node.js | v22.23.2 |
| npm | 10.9.8 |
| Vue | 3.5.46 |
| Vite | 8.3.8 |
| Playwright | 1.65.1 |
| Browser | Chromium 159.0.8154.6 (Playwright build) |
| Server | Vite dev server on 5173; Vite preview on 4176 |

---

## 2. Build

**Command:** `npm run build`

**Result:** Passed.

```text
dist/index.html                                     1.21 kB │ gzip:  0.60 kB
dist/chapter-12b.html                               1.29 kB │ gzip:  0.62 kB
dist/chapter-1.html                                 1.42 kB │ gzip:  0.65 kB
dist/chapter-12a.html                               1.60 kB │ gzip:  0.72 kB
dist/assets/main-CEpdd1Fl.css                      24.70 kB │ gzip:  5.71 kB
dist/assets/main-CVXTOa8Z.js                       98.84 kB │ gzip: 35.03 kB
✓ built in 604ms
```

`dist/` contains exactly the four expected HTML entries:

- `dist/index.html`
- `dist/chapter-1.html`
- `dist/chapter-12a.html`
- `dist/chapter-12b.html`

The built output has no remote font, script, stylesheet or image dependencies.

---

## 3. Production preview check

The built `dist/` was served with `npm run preview` on port 4176 and checked with Playwright.

**Result:** Passed.

| Check | Result |
|---|---|
| All four pages return HTTP 200 | Passed |
| Titles and H1 headings match the intended chapters | Passed |
| Chapter switcher: Chapter 1 → 12A → 12B and 12B → 12A | Passed |
| Deep link `chapter-12a.html#lesson-5` shows lesson 5 | Passed |
| 12A quick-check progress reached `1 of 7 milestones` | Passed |
| Reset progress returned 12A to `0 of 7 milestones` | Passed |
| Chapter 1 assessment submitted, persisted, and reset to `0 of 24 answered` | Passed |
| 12A assessment submitted, persisted, and reset to `0 of 30 answered` | Passed |
| 12B assessment submitted, persisted, and reset to `0 of 20 answered` | Passed |
| Console errors, page errors and failed requests | None |
| HTTP responses of 400 or above | None |
| Page-level horizontal overflow, all four pages at 360, 768 and 1280 px | `0` in every case |

A visual review of 1280 × 900 Chapter 12A and 360 × 800 Chapter 12B preview captures found the header switcher, progress block, section navigation, hero and chapter map readable and correctly reflowed.

---

## 4. Question exports and validation

**Commands:** `npm run export:questions` then `npm run validate:questions`

**Result:** Passed.

```text
Exported 24 questions from src/data/questions/chapter-1.json to exports/chapter-1-questions.json
Exported 30 questions from src/data/questions/chapter-12a.json to exports/chapter-12a-questions.json
Exported 20 questions from src/data/questions/chapter-12b.json to exports/chapter-12b-questions.json
Exported 74 questions across 3 chapters.

Validated 24 questions in exports/chapter-1-questions.json.
Validated 30 questions in exports/chapter-12a-questions.json.
Validated 20 questions in exports/chapter-12b-questions.json.
Validated all 3 chapter question exports.
```

The validation script compiles the schema once, reports each file and count, and exits non-zero on a missing file or an invalid question. The retired root `chapter-questions.json` has been removed.

---

## 5. Browser end-to-end tests

**Command:** `npm run test:e2e`

**Result:** 29 passed, 0 failed (53.2 s).

| Suite | Tests | Result |
|---|---|---|
| `landing.spec.js` | 1 | Passed |
| `chapter-1.spec.js` | 8 | Passed |
| `chapter-12a.spec.js` | 10 | Passed |
| `chapter-12b.spec.js` | 6 | Passed |
| `integration.spec.js` | 4 | Passed |

Coverage includes:

- Landing page lists and links Chapter 1, 12A and 12B.
- Chapter 1 lessons, quick checks, both carbon labs, sorter, explorer, flashcards, assessment, persistence and reset.
- All 12A and 12B quick-check sets, named labs, memory and revision sections.
- 12A and 12B assessment submission, self-marking, persistence across reload and reset.
- Progress isolation: completing 12A lesson 1 leaves Chapter 1 at `0 of 6` and 12B at `0 of 4`.
- Chapter switcher navigation and deep hash links.
- No page-level horizontal overflow at 360, 768 and 1280 px on all four pages.
- No console errors, page errors or failed requests during the tested flows.

---

## 6. Responsive checks

Page-level horizontal overflow was `0` for:

- `/` at 360, 768 and 1280 px.
- `/chapter-1.html` at 360, 768 and 1280 px.
- `/chapter-12a.html` at 360, 768 and 1280 px.
- `/chapter-12b.html` at 360, 768 and 1280 px.

Chapter 1 also retains its existing 390 px and tablet checks in `chapter-1.spec.js`.

**Not performed:** physical phone or tablet testing. These checks used Chromium viewport emulation.

---

## 7. Keyboard and accessibility checks

Performed against the production preview:

- The skip link is the first focusable element and receives focus.
- The chapter switcher links are reachable with Tab and activate with Enter; Chapter 1 → 12A was completed by keyboard.
- A 12A quick-check radio was selected with Space.
- The 12A functional-group lab was operated with keyboard focus and Enter.
- The 12B chlorination lab advanced with keyboard focus and Enter.
- Assessment reset controls for all three chapters were operated from the preview.
- Native links, radio buttons, checkboxes, selects, buttons and text inputs are used throughout.
- Correct/incorrect and complete/incomplete status uses text, not colour alone.
- Progress bars expose labels and `aria-valuenow`.
- `prefers-reduced-motion` rules remain in the stylesheet.
- Tables use captions and scoped headers.

**Not performed:** a full screen-reader audit with NVDA, JAWS or VoiceOver; an automated axe scan; a complete keyboard-only walkthrough of every assessment question and every lab. These remain unverified.

---

## 8. Content and scope checks

- Three chapters are present with the intended scope: Chapter 1 Unit 9(i); 12A Unit 9(ii)–(iv); 12B Unit 9(v) alkanes only.
- Question counts and marks: Chapter 1 24 questions / 39 marks; 12A 30 questions / 50 marks; 12B 20 questions / 34 marks.
- All 74 exported questions validate against the project schema.
- Every exported question is labelled `original_practice`; the chapters state that questions are not board past-paper questions.
- Written marking points are hidden until submission; written answers are self-assessed.
- Progress keys are per chapter and unchanged for Chapter 1: `icse10.organic1.state`, `icse10.organic12a.state`, `icse10.organic12b.state`.
- 12A omits metamerism and labels functional isomerism as an extension.
- 12B omits catalytic oxidation and slow combustion, and keeps alkenes/alkynes out of scope.
- Enrichment material is labelled.
- No textbook page mapping is claimed in student-facing prose; the supplied scans are disclosed in `chapter-sources.md`.
- The old tetravalency Chapter 2 spec is marked **Superseded** and points to the 12A/12B design.

**Not performed:** a fresh line-by-line subject-expert review of every taught sentence and equation during this final integration pass. Chemistry accuracy was checked during the content tasks; the final pass verified rendering, navigation, exports and the tested interactions.

---

## 9. Known limitations and unverified items

1. **Official CISCE PDF:** the cisce.org page returned HTTP 403 to automated retrieval. Scope was cross-checked against current 2026-27 syllabus summaries and the unchanged 2025-26 wording.
2. **Textbook:** CISCE does not prescribe a Chemistry textbook. The 12A/12B scans were supplied without edition or publisher details, and no page mapping is claimed in the chapters.
3. **Written answers:** marked by student self-assessment against marking points. There is no teacher or backend marking.
4. **Progress storage:** localStorage only. It is not synchronised across devices and can be erased by clearing browser data.
5. **Cross-browser:** tested in Chromium only. Firefox and Safari were not tested.
6. **Real devices:** no physical phone or tablet testing.
7. **Screen reader:** no NVDA/JAWS/VoiceOver pass and no automated axe scan.
8. **Print:** print styles were not printed or PDF-tested.
9. **Assessment edge cases:** submission with answered and unanswered questions was tested; not every possible answer combination was.
10. **Deployment:** this task did not push or redeploy. The live site reflects the previously deployed version until the workflow runs again.

---

## 10. Delivery status

The three-chapter application builds successfully, produces four HTML entries, passes all 29 automated browser tests, validates all 74 exported questions, and passed the production-preview checks for navigation, deep links, progress isolation, assessment reset, keyboard operation and responsive overflow. The limitations above are disclosed rather than claimed as verified.
