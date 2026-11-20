# AGENTS.md

## Project

Interactive ICSE Class 10 Chemistry chapters, covering three organic chemistry chapters:

- **Chapter 1: Introduction to Organic Compounds** — Unit 9(i).
- **Chapter 12A: Organic Compounds** — Unit 9(ii)–(iv).
- **Chapter 12B: Hydrocarbons: Alkanes** — Unit 9(v), alkanes only.

They follow the CISCE ICSE Chemistry syllabus for examination year 2027. The root page is a chapter list; each chapter is a separate HTML page.

## Stack

- Vue 3 with `<script setup>` single-file components.
- Vite multi-page build for development and static builds.
- npm for dependency management.
- Plain CSS with design tokens in `src/styles/main.css`.
- localStorage for local progress.
- Playwright for browser QA.
- No router, state library, CSS framework, remote fonts or remote assets.

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

Run `npm run build` before claiming the work is complete. The deployable output is `dist/` and must contain `index.html`, `chapter-1.html`, `chapter-12a.html` and `chapter-12b.html`.

## Structure

```text
index.html
chapter-1.html
chapter-12a.html
chapter-12b.html
vite.config.js
playwright.config.js
scripts/
  export-questions.mjs
  validate-questions.mjs
exports/
  chapter-1-questions.json
  chapter-12a-questions.json
  chapter-12b-questions.json
tests/
  landing.spec.js
  chapter-1.spec.js
  chapter-12a.spec.js
  chapter-12b.spec.js
  integration.spec.js
src/
  entries/
    home.js
    chapter-1.js
    chapter-12a.js
    chapter-12b.js
  pages/
    HomePage.vue
    ChapterOnePage.vue
    Chapter12APage.vue
    Chapter12BPage.vue
  components/
    ChapterShell.vue
    ChapterProvider.vue
    ChapterCard.vue
    ChapterHero.vue
    ChapterHeroPanel.vue
    QuickCheck.vue
    Assessment.vue
    QuestionCard.vue
    PerformanceReport.vue
    Flashcards.vue
    RevisionCentre.vue
    SourcesPanel.vue
    BondLab.vue, ChainLab.vue, OrganicSorter.vue, EverydayExplorer.vue
    lessons/
      LessonHeading.vue
      LessonOne.vue ... LessonFive.vue
    chapters/
      chapter-12a/    six lessons, labs, memory and revision
      chapter-12b/    three lessons, labs, memory and revision
  composables/
    useChapter.js
    useProgress.js
  lib/
    scoring.js
    progressSummary.js
  styles/main.css
  data/
    chapters/
      chapter-1.js
      chapter-12a.js
      chapter-12b.js
      index.js
    questions/
      chapter-1.json
      chapter-12a.json
      chapter-12b.json
    chapter-12a/
    chapter-12b/
    sorterItems.js
    everydayItems.js
    flashcards.js
    chapter.js
```

## Content rules

1. Use the CISCE syllabus as the scope authority. Do not invent syllabus statements or board questions.
2. Label all authored exam-style questions as original practice questions. Do not claim they are past-paper questions.
3. CISCE does not prescribe a Chemistry textbook. Do not claim textbook page mappings unless source pages are supplied.
4. Teach the reason before the memory aid. Acrostics must be real sentences with an explicit word-to-item mapping, never acronyms.
5. Chapter 1 stays scoped to Unit 9(i): organic compounds, carbon's tetravalency and catenation, bond/chain preview, organic vs inorganic, examples, and importance.
6. Chapter 12A covers Unit 9(ii)–(iv): sources, carbon's bonding, hydrocarbons, structural formulae, functional groups, homologous series, IUPAC nomenclature and structural isomerism. Functional isomerism is a labelled extension because the 2027 syllabus names chain and position isomerism. Metamerism is omitted because the supplied book marks it outside the syllabus.
7. Chapter 12B covers Unit 9(v) alkanes only: the alkane family, methane and ethane, preparation, physical properties, combustion, substitution and uses. Do not drift into alkenes or alkynes. Catalytic oxidation and slow combustion are omitted because the supplied book marks them outside the syllabus.
8. Preserve correct chemical formulae, state symbols where relevant, and clear distinctions between observation and inference.
9. Mark enrichment content as enrichment, not required examination content.

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

- One localStorage key per chapter:
  - Chapter 1: `icse10.organic1.state`
  - Chapter 12A: `icse10.organic12a.state`
  - Chapter 12B: `icse10.organic12b.state`
- Progress is local to the browser only. Do not claim cross-device sync.
- Each chapter's progress and assessment reset independently.
- Scoring logic belongs in `src/lib/scoring.js` and must remain independent of Vue rendering.
- Written responses reveal marking points only after submission.

## Question exports

`npm run export:questions` reads the three banks in `src/data/questions/` and writes:

- `exports/chapter-1-questions.json` — 24 questions.
- `exports/chapter-12a-questions.json` — 30 questions.
- `exports/chapter-12b-questions.json` — 20 questions.

`npm run validate:questions` validates all three exports against `.agents/icse-class10-interactive-learning-skill/schemas/question.schema.json` and fails non-zero if an export is missing or any question is invalid.

## GitHub Pages

`vite.config.js` uses `base: './'` so `dist/` works at a project subpath such as `https://<user>.github.io/<repo>/`. The workflow at `.github/workflows/deploy.yml` builds and deploys `dist/` with GitHub Pages Actions. The current live site is https://kishorek.github.io/icse-10th/.

If the site is hosted at a domain root instead, `base: '/'` is also valid. Keep the relative base for portability.

## Verification

Before delivery:

1. `npm run build`.
2. `npm run test:e2e`.
3. `npm run validate:questions`.
4. Confirm `dist/` contains four HTML files.
5. Open the production preview and test all three chapters, chapter switching, deep links, assessment submission and reset, and mobile layout.
6. Check the browser console for errors and failed requests.
7. Check desktop and mobile layouts.
8. Test keyboard-only operation of navigation, quick checks and at least one lab per chapter.
9. Update `QA-REPORT.md` with what was actually tested and what remains unverified.
