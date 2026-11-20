# QA Report — Organic Chemistry Chapter 1

**Date:** 20 November 2026
**Chapter:** ICSE Class 10 Chemistry — Organic Chemistry, Chapter 1: Introduction to Organic Compounds
**Syllabus:** CISCE ICSE Chemistry, examination year 2027, Unit 9.1 introduction
**Build tested:** Vue 3 + Vite application, production `dist/`

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
| Server | Vite dev server on 5173; Vite preview on 4174–4176; static checks on 8090–8095 |

---

## 2. Build

**Command:** `npm run build`

**Result:** Passed. `npm ci` also completed successfully: 45 packages added, 46 audited, 0 vulnerabilities.

```text
dist/index.html                   1.00 kB │ gzip: 0.55 kB
dist/assets/index-Du5NjC5-.css   23.31 kB │ gzip: 5.39 kB
dist/assets/index-4GB24_1U.js   171.93 kB │ gzip: 55.54 kB
✓ built in 430ms
```

The production output is in `dist/`. It has no external font, script, stylesheet or image dependencies.

---

## 3. Production preview check

The built `dist/` was served with `npm run preview` and checked with Playwright.

**Result:** Passed.

- Title: `Organic Chemistry Chapter 1 | ICSE Class 10 Chemistry`
- H1: `Organic Chemistry`
- Body background applied from the built CSS: `rgb(247, 243, 234)`
- Bond builder interaction worked in the built app (`Ethene` rendered `C₂H₄`).
- Catenation explorer worked in the built app: one carbon rendered “1 carbon atom,” and six carbons in a ring rendered the closed-ring summary.
- Page-level horizontal overflow at 1280 px: `0`
- Page-level horizontal overflow at 360 px: `0`
- Console errors: none
- Failed requests: none
- HTTP responses of 400 or above: none

The built `dist/` was also served by a plain static server (`python3 -m http.server 8090 --directory dist`) to approximate GitHub Pages hosting. The page loaded, the bond builder worked, there were no console errors or failed requests, and page-level horizontal overflow was `0`.

Screenshots:
- `qa/preview-desktop.png`
- `qa/preview-mobile-360.png`

### GitHub Pages deployment

- Repository: https://github.com/kishorek/icse-10th
- Live URL: https://kishorek.github.io/icse-10th/
- Pages source: GitHub Actions (`build_type: workflow`)
- Workflow: `Deploy to GitHub Pages`, run `44744652038` — completed successfully (build 13s, deploy 9s)
- Live verification: HTTP 200; title, H1, built CSS, and bond-builder interaction worked; no console errors, failed requests, or 400+ responses; page-level horizontal overflow `0` at 1280 px.

---

## 4. Browser end-to-end tests

**Command:** `npm run test:e2e`

**Result:** 7 passed, 0 failed.

| Test | Result |
|---|---|
| Loads, exposes landmarks, and supports skip navigation | Passed |
| Quick checks complete lessons and update progress | Passed |
| Carbon labs, sorter, explorer and flashcards work | Passed |
| Assessment submits, self-marks, and resets | Passed |
| Desktop layout has no page-level horizontal overflow | Passed |
| Mobile and tablet layouts reflow without page-level horizontal overflow | Passed |
| Lesson progress persists across reload and reset | Passed |

### What the tests exercised

- `h1`, `main`, navigation landmark, skip link and focus.
- Every internal anchor target exists exactly once.
- All 15 quick-check questions across five lessons.
- Lesson completion, progress bar and nav completion state.
- Quick-check answers, latest correctness and attempt counts are persisted.
- Bond builder: methane, ethene and ethyne.
- Catenation explorer: carbon count, straight chain and ring.
- Organic/inorganic sorter: a wrong placement, a correction, and a correct placement.
- Everyday-object explorer: cotton → cellulose.
- Flashcards: flip and next.
- Assessment: submit with unanswered questions, summary display, self-score gating (enabled after an answer, disabled without one), self-score update, persistence of the submitted summary across reload, reset, and active-nav state.
- Progress persistence across reload.
- Progress reset with confirmation.
- No console errors, page errors or failed requests.

---

## 5. Responsive checks

No page-level horizontal overflow was found at:

- 360 × 800 px
- 390 × 844 px
- 768 × 1024 px
- 1280 × 900 px

Screenshots reviewed:
- `qa/desktop-top.png`
- `qa/tablet-768-top.png`
- `qa/mobile-360-top.png`
- `qa/mobile-top.png`
- `qa/bond-lab.png`
- `qa/chain-lab.png`
- `qa/memory.png`
- `qa/revision.png`
- `qa/assessment-top.png`
- `qa/assessment-summary.png`
- `qa/assessment-summary-marked.png`
- `qa/mobile-bond-lab.png`
- `qa/mobile-assessment.png`
- `qa/mobile-assessment-summary.png`

Visual review covered hierarchy, spacing, line wrapping, lab sizing, sticky navigation, sorter layout, assessment feedback, summary layout and mobile reflow. Defects found during review were fixed and retested:

- Active navigation could remain on the previous section inside the long assessment section. Replaced with a scroll-position calculation.
- Mobile navigation hid later sections in a horizontal scroller with little affordance. Replaced with a responsive grid.
- Mobile outcome rows were cramped. Changed to a two-row layout with the bar below the label and score.
- Methane's readout label said “Carbon–carbon bond” despite having no C–C bond. Changed to “Key bonding.”
- The everyday “plastic bottle” example implied polythene for all bottles. Changed to “plastic bag.”
- The carbon atom diagram's electron positions were corrected to show 2 inner-shell and 4 outer-shell electrons.
- Benzene's prose was aligned with the dashed-ring representation used in the diagram.
- Self-score controls are now disabled until the student writes an answer, preventing marking of blank responses.

---

## 6. Content checks

- All 24 assessment questions have a stable ID, outcome, type, marks, answer/model answer, explanation, misconception and source label.
- All 24 questions in `chapter-questions.json` validate against the chapter schema with `npm run validate:questions`. The companion file is generated from `src/data/questions.json` with `npm run export:questions`.
- Total assessment marks: 39.
- Objective marks: 14; self-assessed written marks: 25.
- Written marking points are hidden until submission.
- Self-scoring is disabled for a written answer until the student has written an answer.
- The acrostic is a sentence, **“Tiny Carbon Makes Isomers,”** with an explicit word-to-item mapping in this order: Tetravalency, Catenation, Multiple bonds, Isomerism.
- Carbon-containing inorganic exceptions are stated consistently: CO, CO₂, carbonates, bicarbonates, cyanides, carbides.
- Enrichment (silicon comparison) is labelled.
- All exam-style questions are labelled as original practice questions.
- No textbook page mapping is claimed.

---

## 7. Accessibility checks performed

- Semantic landmarks: header, navigation, main, footer, sections with labelled headings.
- Native radio buttons, checkboxes, text inputs, textareas and selects.
- Every form control has an associated label or accessible name.
- Visible `:focus-visible` outline using the amber accent.
- Skip link is the first focusable element and was tested with the keyboard.
- Correct/incorrect feedback uses text, not colour alone.
- Progress bar has a label and `aria-valuenow`.
- Feedback and score updates use `role="status"` / `aria-live` where appropriate.
- SVGs use `role="img"` with title/description or an accessible label.
- `prefers-reduced-motion` is respected in CSS.
- No hover-only essential information.
- Muted and amber text tokens were checked by calculation against paper backgrounds: muted ≈5.27:1 and amber ≈4.58:1 on the main paper background. This is a token check, not a full contrast audit of every component.

**Not performed:** a full screen-reader audit with NVDA, JAWS or VoiceOver; an automated axe scan; a complete keyboard-only walkthrough of all 24 assessment questions. These remain unverified.

---

## 8. Known limitations and unverified items

1. **Official CISCE PDF:** the cisce.org page returned HTTP 403 to automated retrieval. The Unit 9.1 scope was cross-checked against current 2026-27 syllabus summaries and the unchanged 2025-26 wording. The official PDF was not downloaded directly.
2. **Textbook mapping:** CISCE does not prescribe a Chemistry textbook, and no textbook was supplied. No page or chapter mapping is claimed.
3. **Written answers:** marked by student self-assessment against marking points. Scores depend on honest self-marking; there is no teacher or backend marking.
4. **Progress storage:** localStorage only. It is not synchronised across devices and can be erased by clearing browser data.
5. **GitHub Pages:** deployment succeeded at the default `github.io` URL. No custom domain is configured.
6. **Cross-browser:** tested in Chromium only. Firefox and Safari were not tested.
7. **Real devices:** no physical phone or tablet testing. Responsive checks used Chromium viewport emulation.
8. **Screen reader:** no NVDA/JAWS/VoiceOver pass was performed.
9. **Print:** print styles exist but were not printed or PDF-tested.
10. **Assessment edge cases:** submitting with a mixture of answered and unanswered questions was tested; every possible combination of answers was not.

---

## 9. Delivery status

The chapter is functional, builds successfully, passes the seven automated browser tests, passed the production-preview and static-host checks, and is deployed at https://kishorek.github.io/icse-10th/. The remaining limitations are disclosed above rather than claimed as verified.
