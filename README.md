# ICSE Class 10 Chemistry — Organic Chemistry, Chapter 1

An interactive Vue 3 chapter on the introduction to organic compounds for the CISCE ICSE Chemistry syllabus, examination year 2027 (Unit 9.1).

**Live site:** https://kishorek.github.io/icse-10th/

## What is included

- Five lessons: organic compounds, carbon's unique nature, organic vs inorganic, everyday examples, and importance.
- Two carbon labs: a bond builder and a catenation explorer.
- An organic/inorganic sorter with carbon-exception traps.
- An everyday-objects explorer.
- A memory workshop with the acrostic **“Tiny Carbon Makes Isomers.”**
- Active-recall flashcards.
- A revision centre with definitions, structures, common mistakes and a rapid sheet.
- A 24-question assessment (39 marks) with auto-scored objective items, marking-point self-assessment for written answers, outcome breakdown, retry set and spaced-revision suggestion.
- Local progress and assessment persistence with a reset control.

## Stack

- Vue 3 with `<script setup>` single-file components.
- Vite for development and static builds.
- npm for dependency management.
- Plain CSS with design tokens in `src/styles/main.css`.
- localStorage for local progress.
- Playwright for browser QA.

No router, state library, CSS framework, remote fonts or remote images are used.

## Requirements

- Node.js 20.19 or newer.
- npm.

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

- `npm run dev` starts the Vite development server.
- `npm run build` writes the static production build to `dist/`.
- `npm run preview` serves the built `dist/` locally. Serve `dist/` through a static server; opening `index.html` directly from the filesystem may be blocked by browser module rules.
- `npm run test:e2e` runs the Playwright browser checks. The first run may require `npx playwright install chromium`.
- `npm run export:questions` regenerates `chapter-questions.json` from `src/data/questions.json`.
- `npm run validate:questions` checks the exported question bank against the project schema.

## Project structure

```text
index.html
vite.config.js
playwright.config.js
scripts/
  export-questions.mjs
  validate-questions.mjs
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
tests/
  chapter.spec.js
```

## Content and assessment files

- `chapter-content.md` — full teaching content, syllabus mapping, worked examples and revision notes.
- `chapter-questions.json` — schema-shaped export of the question bank. The app reads `src/data/questions.json`; regenerate the export with `npm run export:questions`.
- `chapter-sources.md` — syllabus and verification sources.
- `QA-REPORT.md` — what was tested, what passed, and what remains unverified.
- `AGENTS.md` — project conventions for future work.

## GitHub Pages deployment

The repository includes `.github/workflows/deploy.yml`. It builds with `npm ci` and `npm run build`, then deploys `dist/` using GitHub Pages Actions.

1. Push the repository to GitHub on your default branch (`main` or `master`).
2. In the repository settings, open **Pages** and set the source to **GitHub Actions**.
3. Run the workflow, or push to the default branch.

`vite.config.js` uses `base: './'`, so the build works at a project subpath such as:

```text
https://<user>.github.io/<repo>/
```

If the site is hosted at a domain root, `base: '/'` is also valid. Keep the relative base unless you have a specific reason to change it.

## Content scope

This is an introduction to Unit 9.1. It does not teach the full hydrocarbons, nomenclature, homologous-series, alcohol or carboxylic-acid sections. Enrichment content (the silicon comparison) is labelled.

All examination-style questions are original practice questions. They are not CISCE past-paper questions.

## Progress

Progress is stored under the localStorage prefix `icse10.organic1.`. It is local to the browser and is not synchronised across devices. The reset control clears local progress after confirmation.

## Verification

Before delivery:

1. Run `npm run build`.
2. Run `npm run test:e2e`.
3. Run `npm run validate:questions`.
4. Open `npm run preview` and check the built output.
5. Update `QA-REPORT.md` with the actual results.
