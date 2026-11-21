# AGENTS.md

## Project

Interactive ICSE Class 10 Science chapters: one Physics chapter plus seven organic chemistry chapters.

**Physics**

- **Chapter 1: Force** — CISCE ICSE Physics 2027 Unit 1. Moment of a force, couple, equilibrium, principle of moments, centre of gravity, uniform circular motion and centripetal/centrifugal force.

**Chemistry**

- **Chapter 1: Introduction to Organic Compounds** — Unit 9(i).
- **Chapter 12A: Organic Compounds** — Unit 9(ii)–(iv).
- **Chapter 12B: Hydrocarbons: Alkanes** — Unit 9(v), alkanes only.
- **Chapter 12C: Hydrocarbons: Alkenes** — Unit 9(v), alkenes; ethene.
- **Chapter 12D: Hydrocarbons: Alkynes** — Unit 9(v), alkynes; ethyne.
- **Chapter 12E: Alcohols** — Unit 9(vi), ethanol.
- **Chapter 12F: Carboxylic Acids** — Unit 9(vii), acetic acid.

The chapters follow the CISCE ICSE syllabuses for examination year 2027. The root page groups chapters by subject; each chapter is a separate HTML page.

## Starting a chapter

Before starting, resuming, or substantially changing any chapter, always read and follow `.agents/icse-class10-interactive-learning-skill/SKILL.md`. This is mandatory for every chapter.

That skill's approval-gated workflow controls the work:

1. Intake the supplied PDF, text, or notes and file it under the correct subject.
2. Present the lesson list and wait for explicit approval (GATE 1).
3. Present complex-term breakdowns, for example `tetravalency = tetra (four) + valency (combining capacity)`, and wait for approval (GATE 2).
4. Present the visual and animation plan, marking which concepts are animation-worthy and which anime.js technique each will use, and wait for approval (GATE 3).
5. Author to the approved plan and keep the 60% text / 40% visual learning-time budget.
6. Validate with `npm run build`, `npm run preview`, and `npm run test:e2e`, then record the actual results in `QA-REPORT.md`.

Do not skip a gate unless the user explicitly says "skip gates"; record any skip in `QA-REPORT.md`.

## Stack

- Vue 3 with `<script setup>` single-file components.
- Vite multi-page build for development and static builds.
- npm for dependency management.
- Plain CSS with design tokens in `src/styles/main.css`.
- anime.js v4 is the approved animation library, installed from npm when an approved visual plan needs it.
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

Run `npm run build` before claiming the work is complete. The deployable output is `dist/` and must contain `index.html`, `chapter-physics-1.html`, `chapter-1.html`, `chapter-12a.html`, `chapter-12b.html`, `chapter-12c.html`, `chapter-12d.html`, `chapter-12e.html` and `chapter-12f.html`.

## Structure

```text
index.html
chapter-physics-1.html
chapter-1.html
chapter-12a.html
chapter-12b.html
chapter-12c.html
chapter-12d.html
chapter-12e.html
chapter-12f.html
vite.config.js
playwright.config.js
scripts/
  export-questions.mjs
  validate-questions.mjs
exports/
  chapter-physics-1-questions.json
  chapter-1-questions.json
  chapter-12a-questions.json
  chapter-12b-questions.json
  chapter-12c-questions.json
  chapter-12d-questions.json
  chapter-12e-questions.json
  chapter-12f-questions.json
tests/
  landing.spec.js
  chapter-physics-1.spec.js
  chapter-1.spec.js
  chapter-12a.spec.js
  chapter-12b.spec.js
  chapter-12c.spec.js
  chapter-12d.spec.js
  chapter-12e.spec.js
  chapter-12f.spec.js
  integration.spec.js
  lesson-media.spec.js
src/
  entries/
    home.js
    chapter-physics-1.js
    chapter-1.js
    chapter-12a.js
    chapter-12b.js
    chapter-12c.js
    chapter-12d.js
    chapter-12e.js
    chapter-12f.js
  pages/
    HomePage.vue
    ChapterPhysics1Page.vue
    ChapterOnePage.vue
    Chapter12APage.vue
    Chapter12BPage.vue
    Chapter12CPage.vue
    Chapter12DPage.vue
    Chapter12EPage.vue
    Chapter12FPage.vue
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
      LessonRenderer.vue
      LessonOne.vue ... LessonFive.vue
    visuals/generic/  shared family, molecule, flow, comparison, test and trend visuals
    visuals/physics/  twelve Chapter 1 Force labs and animations
    labs/             shared isomer, preparation, test-bench, sorter and ester labs
    chapters/
      chapter-12a/    six lessons, labs, memory and revision
      chapter-12b/    three lessons, labs, memory and revision
      chapter-12c/    four lessons, labs, memory and revision
      chapter-12d/    four lessons, labs, memory and revision
      chapter-12e/    five lessons, labs, memory and revision
      chapter-12f/    four lessons, labs, memory and revision
  composables/
    useChapter.js
    useProgress.js
  lib/
    scoring.js
    progressSummary.js
  styles/main.css
  data/
    chapters/
      physics-1.js
      chapter-1.js
      chapter-12a.js
      chapter-12b.js
      chapter-12c.js
      chapter-12d.js
      chapter-12e.js
      chapter-12f.js
      index.js
    questions/
      chapter-physics-1.json
      chapter-1.json
      chapter-12a.json
      chapter-12b.json
      chapter-12c.json
      chapter-12d.json
      chapter-12e.json
      chapter-12f.json
    chapter-physics-1/
    chapter-12a/
    chapter-12b/
    chapter-12c/
    chapter-12d/
    chapter-12e/
    chapter-12f/
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
5. Physics Chapter 1 stays scoped to CISCE Unit 1 Force: translational and rotational motion, moment of force, couple, equilibrium, principle of moments and its verification, centre of gravity (qualitative, with regular bodies and the plumb-line method) and uniform circular motion with centripetal and centrifugal force. Do not drift into work, energy, power or machines. Centrifugal force is always labelled fictitious and is never described as the reaction to centripetal force.
6. Chapter 1 stays scoped to Unit 9(i): organic compounds, carbon's tetravalency and catenation, bond/chain preview, organic vs inorganic, examples, and importance.
7. Chapter 12A covers Unit 9(ii)–(iv): sources, carbon's bonding, hydrocarbons, structural formulae, functional groups, homologous series, IUPAC nomenclature and structural isomerism. Functional isomerism is a labelled extension because the 2027 syllabus names chain and position isomerism. Metamerism is omitted because the supplied book marks it outside the syllabus.
8. Chapter 12B covers Unit 9(v) alkanes only: the alkane family, methane and ethane, preparation, physical properties, combustion, substitution and uses. Do not drift into alkenes or alkynes. Catalytic oxidation and slow combustion are omitted because the supplied book marks them outside the syllabus.
9. Chapter 12C covers Unit 9(v) alkenes: the alkene family, ethene structure and preparation, addition with H₂/Cl₂/Br₂/I₂, combustion, uses and tests. Chapter 12D covers Unit 9(v) alkynes: the alkyne family, ethyne structure and preparation, stepwise addition, combustion, uses and distinguishing tests. Ozonolysis and polymerisation are labelled enrichment or omitted.
10. Chapter 12E covers Unit 9(vi) ethanol: the alcohol family, hydrolysis of an alkyl halide, required physical properties, combustion, sodium, esterification, dehydration, denatured/spurious alcohol and uses. Chapter 12F covers Unit 9(vii) acetic acid: the carboxyl family, structure, vinegar, glacial acetic acid, litmus/alkali/alcohol reactions and uses. Fermentation, industrial hydration and extra acid reactions are labelled enrichment or omitted.
11. Preserve correct chemical formulae, state symbols where relevant, and clear distinctions between observation and inference.
12. Mark enrichment content as enrichment, not required examination content.
13. Every lesson must include at least one purpose-built `LessonVisual` and one `MemoryHook`. The visual needs a caption, an accessible text/title description and “What to notice” points; the memory hook needs an explicit cue-to-content mapping and a recall prompt. Acrostics must be real sentences with a word-to-item mapping, never acronyms.

## UI rules

1. Use semantic HTML and native controls where possible.
2. Every interactive control must have a visible outcome. No dead buttons.
3. Keep keyboard access and visible focus states.
4. Do not use colour alone for correct/incorrect status.
6. Respect `prefers-reduced-motion`.
7. Keep the layout usable at 360 px, 768 px, and 1280 px widths.
8. Avoid generic gradient/glass/card-soup styling. Use the warm paper, teal, and amber design language.
9. Do not add remote fonts, scripts, stylesheets, or images.
10. Every lesson visual must remain keyboard-readable, have a text caption and equivalent description, and must not rely on colour alone. On narrow screens, diagrams may scroll horizontally inside their own container but must not cause page-level overflow.

## Progress and scoring

- One localStorage key per chapter:
  - Physics Chapter 1: `icse10.physics1.state`
  - Chapter 1: `icse10.organic1.state`
  - Chapter 12A: `icse10.organic12a.state`
  - Chapter 12B: `icse10.organic12b.state`
  - Chapter 12C: `icse10.organic12c.state`
  - Chapter 12D: `icse10.organic12d.state`
  - Chapter 12E: `icse10.organic12e.state`
  - Chapter 12F: `icse10.organic12f.state`
- Progress is local to the browser only. Do not claim cross-device sync.
- Each chapter's progress and assessment reset independently.
- Scoring logic belongs in `src/lib/scoring.js` and must remain independent of Vue rendering.
- Written responses reveal marking points only after submission.

## Question exports

`npm run export:questions` reads the eight banks in `src/data/questions/` and writes:

- `exports/chapter-physics-1-questions.json` — 24 questions.
- `exports/chapter-1-questions.json` — 24 questions.
- `exports/chapter-12a-questions.json` — 30 questions.
- `exports/chapter-12b-questions.json` — 20 questions.
- `exports/chapter-12c-questions.json` — 20 questions.
- `exports/chapter-12d-questions.json` — 20 questions.
- `exports/chapter-12e-questions.json` — 20 questions.
- `exports/chapter-12f-questions.json` — 20 questions.

`npm run validate:questions` validates all eight exports against `.agents/icse-class10-interactive-learning-skill/schemas/question.schema.json` and fails non-zero if an export is missing or any question is invalid.

## GitHub Pages

`vite.config.js` uses `base: './'` so `dist/` works at a project subpath such as `https://<user>.github.io/<repo>/`. The workflow at `.github/workflows/deploy.yml` builds and deploys `dist/` with GitHub Pages Actions. The current live site is https://kishorek.github.io/icse-10th/.

If the site is hosted at a domain root instead, `base: '/'` is also valid. Keep the relative base for portability.

## Verification

Before delivery:

1. `npm run build`.
2. `npm run test:e2e`.
3. `npm run validate:questions`.
4. Confirm `dist/` contains nine HTML files.
6. Open the production preview and test all eight chapters, chapter switching, deep links, assessment submission and reset, and mobile layout.
7. Check the browser console for errors and failed requests.
8. Check desktop and mobile layouts.
9. Test keyboard-only operation of navigation, quick checks and at least one lab per chapter.
10. Update `QA-REPORT.md` with what was actually tested and what remains unverified.
