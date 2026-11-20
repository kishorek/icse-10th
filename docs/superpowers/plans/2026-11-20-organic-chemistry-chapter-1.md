# Organic Chemistry Chapter 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete ICSE Class 10 Chemistry Chapter 1 Vue application on the introduction to organic compounds, with a static `dist/` build for GitHub Pages.

**Architecture:** Vue 3 + Vite single-page application. Lesson content is split into components; reusable labs and assessment components manage interaction; progress is stored in localStorage through a composable; scoring lives in a pure module.

**Tech Stack:** Vue 3, Vite, npm, CSS, inline SVG, localStorage. No router, state library, CSS framework, or remote assets.

**Spec:** `docs/superpowers/specs/2026-11-20-organic-chemistry-chapter-1-design.md`

## Global Constraints

- Chapter app lives at the repository root.
- Syllabus scope: ICSE 2027, Unit 9.1 introduction only.
- All questions are original practice questions; never label them as past-paper questions.
- No textbook mapping claims; CISCE does not prescribe a Chemistry textbook.
- No external fonts, scripts, stylesheets, or images.
- Acrostic must be the sentence “Tiny Carbon Makes Isomers” with exact mapping to Tetravalency, Catenation, Multiple bonds, Isomerism.
- Respect `prefers-reduced-motion`; all interactions must be keyboard operable.
- localStorage keys must start with `icse10.organic1.`.
- Written answers must not reveal model answers before an attempt.
- `vite.config.js` uses `base: './'` for GitHub Pages subpath hosting.
- `npm run build` must produce a working `dist/`.

---

### Task 1: Scaffold Vue project

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.js`
- Create: `src/App.vue`
- Create: `.gitignore`
- Create: `public/favicon.svg`

- [ ] **Step 1:** Add Vue, Vite, and the Vue plugin to `package.json`.
- [ ] **Step 2:** Configure `base: './'` and `dist` output.
- [ ] **Step 3:** Add the app entry HTML and mount point.
- [ ] **Step 4:** Run `npm install`.
- [ ] **Step 5:** Run `npm run build` and confirm `dist/` exists.

### Task 2: Design system and shell

**Files:**
- Create: `src/styles/main.css`
- Modify: `src/App.vue`

**Interfaces:**
- CSS variables: `--paper`, `--ink`, `--teal`, `--amber`, `--line`, `--ok`, `--bad`, `--muted`.
- Shell IDs: `chapter-nav`, `progress-fill`, `progress-label`, `main-content`, `reset-progress`.

- [ ] **Step 1:** Add tokens, reset, typography, responsive grid, focus states, print styles.
- [ ] **Step 2:** Add skip link, header, sticky chapter rail, progress bar, reset button.
- [ ] **Step 3:** Verify layout at 360, 768, and 1280 px with no page-level horizontal scroll.

### Task 3: Data, progress, and scoring modules

**Files:**
- Create: `src/data/chapter.js`
- Create: `src/data/questions.json`
- Create: `src/data/sorterItems.js`
- Create: `src/data/everydayItems.js`
- Create: `src/data/flashcards.js`
- Create: `src/composables/useProgress.js`
- Create: `src/lib/scoring.js`

**Interfaces:**
- `lessons`: `{ id, navLabel, checkIds }[]`.
- Progress state: `{ checks, assessment: { answers, selfScores, submitted } }`.
- `recordCheck(id, answer, correct)`, `save()`, `resetAll()`, `completedLessons`, `progressPercent`.
- `scoreAssessment(questions, answers, selfScores)` returns `{ autoEarned, autoTotal, selfEarned, selfTotal, totalEarned, totalMarks, byOutcome, weakIds }`.

- [ ] **Step 1:** Add the 24-question bank and supporting data.
- [ ] **Step 2:** Implement localStorage load/save/reset with namespaced key.
- [ ] **Step 3:** Implement pure scoring and outcome breakdown.
- [ ] **Step 4:** Verify `npm run build` still passes.

### Task 4: Orientation and Lesson 1

**Files:**
- Create: `src/components/ChapterHero.vue`
- Create: `src/components/QuickCheck.vue`
- Create: `src/components/lessons/LessonOne.vue`

- [ ] **Step 1:** Build orientation with outcomes, prerequisites, concept map, time estimate, scope note.
- [ ] **Step 2:** Build Lesson 1 on definitions, vital-force theory, Wöhler, exceptions, and classification.
- [ ] **Step 3:** Add three quick checks wired to progress.
- [ ] **Step 4:** Verify completion state updates after all three are correct.

### Task 5: Lesson 2 and carbon labs

**Files:**
- Create: `src/components/lessons/LessonTwo.vue`
- Create: `src/components/BondLab.vue`
- Create: `src/components/ChainLab.vue`

- [ ] **Step 1:** Teach carbon 2,4, tetravalency, catenation, bond order, chain types, benzene preview, isomerism, silicon enrichment.
- [ ] **Step 2:** Build the bond builder with methane, ethene, and ethyne.
- [ ] **Step 3:** Build the catenation explorer with 1–6 carbons and straight/branched/ring shapes.
- [ ] **Step 4:** Add three quick checks.
- [ ] **Step 5:** Verify formulas and bond counts for every mode.

### Task 6: Lesson 3, sorter, Lessons 4–5, explorer

**Files:**
- Create: `src/components/lessons/LessonThree.vue`
- Create: `src/components/OrganicSorter.vue`
- Create: `src/components/lessons/LessonFour.vue`
- Create: `src/components/EverydayExplorer.vue`
- Create: `src/components/lessons/LessonFive.vue`

- [ ] **Step 1:** Build the comparison table and sorter with CO₂, CaCO₃, and NaCN traps.
- [ ] **Step 2:** Build the everyday examples lesson and explorer.
- [ ] **Step 3:** Build the importance and environment lesson.
- [ ] **Step 4:** Add quick checks to all three lessons.

### Task 7: Memory, flashcards, revision

**Files:**
- Create: `src/components/MemoryWorkshop.vue`
- Create: `src/components/Flashcards.vue`
- Create: `src/components/RevisionCentre.vue`

- [ ] **Step 1:** Add the acrostic with exact mapping and cover/reveal control.
- [ ] **Step 2:** Add ten keyboard-accessible flashcards.
- [ ] **Step 3:** Add mind map, definitions, structures, common mistakes, and rapid sheet.

### Task 8: Assessment and performance report

**Files:**
- Create: `src/components/Assessment.vue`
- Create: `src/components/PerformanceReport.vue`
- Modify: `src/App.vue`

- [ ] **Step 1:** Render all 24 question types.
- [ ] **Step 2:** Persist answers and self-scores.
- [ ] **Step 3:** Score objective items; reveal written marking points only after submit.
- [ ] **Step 4:** Render score, outcome breakdown, retry set, and spaced-revision suggestion.
- [ ] **Step 5:** Add assessment reset.

### Task 9: Companion docs and project guidance

**Files:**
- Create: `AGENTS.md`
- Create: `README.md`
- Create: `chapter-content.md`
- Create: `chapter-questions.json`
- Create: `chapter-sources.md`
- Create: `QA-REPORT.md`
- Modify: `.agents/icse-class10-interactive-learning-skill/SKILL.md`
- Modify: `.agents/icse-class10-interactive-learning-skill/README.md`

- [ ] **Step 1:** Document Vue/Vite commands, structure, content rules, and GitHub Pages deployment.
- [ ] **Step 2:** Update the project skill to default to Vue 3 + Vite.
- [ ] **Step 3:** Write content, question bank, sources, and QA report.

### Task 10: Browser QA

**Files:**
- Modify: any component with a discovered defect.
- Modify: `QA-REPORT.md`

- [ ] **Step 1:** Run `npm run dev` and open the app.
- [ ] **Step 2:** Test desktop, tablet, and mobile widths.
- [ ] **Step 3:** Check console, labs, sorter, flashcards, assessment, reset, and keyboard navigation.
- [ ] **Step 4:** Run `npm run build` and preview `dist/` to verify the static build.
- [ ] **Step 5:** Fix defects and record evidence.

---

## Verification commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Self-review

- Spec sections 5–9 map to Tasks 4–8.
- Spec section 10 maps to Tasks 1–3 and 9.
- Spec section 11 maps to Task 10.
- All 24 assessment IDs are used consistently.
- Every component named in `App.vue` has a corresponding task.
