# AGENTS.md

## Project

Interactive ICSE Class 10 Chemistry chapters. The current chapter is **Organic Chemistry, Chapter 1: Introduction to Organic Compounds**. It follows the CISCE ICSE Chemistry syllabus for examination year 2027, Unit 9.1 introduction.

## Stack

- Vue 3 with `<script setup>` single-file components.
- Vite for development and static builds.
- npm for dependency management.
- Plain CSS with design tokens in `src/styles/main.css`.
- localStorage for local progress.
- No router, state library, CSS framework, or remote assets.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run test:e2e
npm run export:questions
npm run validate:questions
```

The first Playwright run may require `npx playwright install chromium`.

Run `npm run build` before claiming the work is complete. The deployable output is `dist/`.

## Structure

```text
index.html
vite.config.js
playwright.config.js
scripts/
  export-questions.mjs
  validate-questions.mjs
tests/
  chapter.spec.js
src/
  main.js
  App.vue
  styles/main.css
  data/
    chapter.js
    questions.json
    sorterItems.js
    everydayItems.js
    flashcards.js
  composables/useProgress.js
  lib/scoring.js
  components/
    ChapterHero.vue
    QuickCheck.vue
    BondLab.vue
    ChainLab.vue
    OrganicSorter.vue
    EverydayExplorer.vue
    Flashcards.vue
    MemoryWorkshop.vue
    RevisionCentre.vue
    Assessment.vue
    QuestionCard.vue
    PerformanceReport.vue
    lessons/
      LessonHeading.vue
      LessonOne.vue ... LessonFive.vue
```

## Content rules

1. Use the CISCE syllabus as the scope authority. Do not invent syllabus statements or board questions.
2. Label all authored exam-style questions as original practice questions. Do not claim they are past-paper questions.
3. CISCE does not prescribe a Chemistry textbook. Do not claim textbook page mappings unless source pages are supplied.
4. Teach the reason before the memory aid. Acrostics must be real sentences with an explicit word-to-item mapping, never acronyms.
5. Keep the introduction scoped to Unit 9.1: organic compounds, carbon's tetravalency and catenation, bond/chain preview, organic vs inorganic, examples, and importance. Do not teach the full hydrocarbons, nomenclature, or functional-group unit here.
6. Preserve correct chemical formulae, state symbols where relevant, and clear distinctions between observation and inference.
7. Mark enrichment content as enrichment, not required examination content.

## UI rules

1. Use semantic HTML and native controls where possible.
2. Every interactive control must have a visible outcome. No dead buttons.
3. Keep keyboard access and visible focus states.
4. Do not use colour alone for correct/incorrect status.
5. Respect `prefers-reduced-motion`.
6. Keep the layout usable at 360 px, 768 px, and 1280 px widths.
7. Avoid generic gradient/glass/card-soup styling. Use the warm paper, teal, and amber design language.
8. Do not add remote fonts, scripts, stylesheets, or images.

## Progress and scoring

- localStorage key prefix: `icse10.organic1.`
- Progress is local to the browser only. Do not claim cross-device sync.
- Scoring logic belongs in `src/lib/scoring.js` and must remain independent of Vue rendering.
- Written responses reveal marking points only after submission.

## GitHub Pages

`vite.config.js` uses `base: './'` so `dist/` works at a project subpath such as `https://<user>.github.io/<repo>/`. The workflow at `.github/workflows/deploy.yml` builds and deploys `dist/` with GitHub Pages Actions. The current live site is https://kishorek.github.io/icse-10th/.

If the site is hosted at a domain root instead, `base: '/'` is also valid. Keep the relative base for portability.

## Verification

Before delivery:

1. `npm run build`.
2. `npm run test:e2e`.
3. `npm run validate:questions`.
4. Open the dev server and test all five lessons, both carbon labs, the sorter, explorer, flashcards, assessment, score report, and reset.
5. Check the browser console for errors.
6. Check desktop and mobile layouts.
7. Test keyboard-only operation.
8. Update `QA-REPORT.md` with what was actually tested and what remains unverified.
