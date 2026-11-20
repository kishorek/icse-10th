# ICSE Class 10 Chemistry — Organic Chemistry

Three interactive Vue 3 chapters for the CISCE ICSE Chemistry syllabus, examination year 2027. The set moves from the introduction to organic compounds, through structure and naming, to the alkanes.

**Live site:** https://kishorek.github.io/icse-10th/

## Chapters and URLs

| Chapter | Title | URL | Scope |
|---|---|---|---|
| Chapter 1 | Introduction to Organic Compounds | `chapter-1.html` | Unit 9(i): organic compounds, carbon's tetravalency and catenation, organic vs inorganic, examples and importance |
| Chapter 12A | Organic Compounds | `chapter-12a.html` | Unit 9(ii)–(iv): sources, carbon's bonding, hydrocarbon families, functional groups, homologous series, IUPAC naming and isomerism |
| Chapter 12B | Hydrocarbons: Alkanes | `chapter-12b.html` | Unit 9(v), alkanes only: the alkane family, methane and ethane, preparation, properties, combustion, substitution and uses |

The root page (`index.html`) is a chapter list with local-progress summaries. The chapters are separate HTML pages built by Vite.

## What is included

**Chapter 1**

- Five lessons and two carbon labs.
- An organic/inorganic sorter and an everyday-objects explorer.
- Memory workshop, active-recall flashcards and a revision centre.
- A 24-question assessment (39 marks).

**Chapter 12A**

- Six lessons: carbon and organic compounds, hydrocarbon families, structures and functional groups, homologous series, IUPAC naming, and isomerism.
- Four interactive labs: functional groups, homologous-series ladder, name builder and isomer explorer.
- Memory workshop based on a name-building routine, flashcards and a revision centre.
- A 30-question assessment (50 marks).

**Chapter 12B**

- Three lessons: the alkane family, methane and ethane structure and preparation, and reactions and uses.
- Four interactive labs: alkane ladder, gas preparation, chlorination and combustion.
- Memory workshop based on a reaction map, flashcards and a revision centre.
- A 20-question assessment (34 marks).

Across all chapters: objective items are auto-scored; written answers reveal marking points only after submission and are self-assessed; performance reports group by learning outcome; progress, answers and scores persist locally.

## Stack

- Vue 3 with `<script setup>` single-file components.
- Vite multi-page build for development and static output.
- npm for dependency management.
- Plain CSS with design tokens in `src/styles/main.css`.
- localStorage for local progress.
- Playwright for browser QA.

No router, state library, CSS framework, remote fonts, remote images or other remote assets are used.

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
- `npm run build` writes the static production build to `dist/`, including four HTML entries.
- `npm run preview` serves the built `dist/` locally. Use a static server; opening the HTML files directly from the filesystem may be blocked by browser module rules.
- `npm run test:e2e` runs the Playwright browser checks. The first run may require `npx playwright install chromium`.
- `npm run export:questions` regenerates the three schema-shaped question exports:
  - `exports/chapter-1-questions.json` (24 questions)
  - `exports/chapter-12a-questions.json` (30 questions)
  - `exports/chapter-12b-questions.json` (20 questions)
- `npm run validate:questions` validates every exported question against the project schema and exits non-zero if any export is missing or invalid.

## Project structure

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
tests/
  landing.spec.js
  chapter-1.spec.js
  chapter-12a.spec.js
  chapter-12b.spec.js
  integration.spec.js
src/
  entries/
  pages/
  components/
    shared chapter shell, assessment, revision and UI components
    lessons/                  Chapter 1 lessons
    chapters/chapter-12a/     12A lessons and labs
    chapters/chapter-12b/     12B lessons and labs
  composables/
  lib/
  styles/main.css
  data/
    chapters/                 chapter configurations
    questions/                chapter question banks
    chapter-12a/
    chapter-12b/
```

The build deploys the contents of `dist/`. The four HTML entries are `index.html`, `chapter-1.html`, `chapter-12a.html` and `chapter-12b.html`.

## Content and documentation files

- `chapter-content.md` — full teaching content and notes for Chapter 1.
- `chapter-sources.md` — syllabus and source notes for all three chapters.
- `QA-REPORT.md` — what was tested, what passed, and what remains unverified.
- `AGENTS.md` — project conventions for future work.
- `docs/superpowers/specs/2026-11-20-organic-chemistry-12a-12b-design.md` — current 12A/12B design.
- `docs/superpowers/specs/2026-11-20-organic-chemistry-chapter-2-design.md` — superseded tetravalency Chapter 2 design.

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

- Chapter 1 is the Unit 9(i) introduction. It does not teach the full hydrocarbons, nomenclature, homologous-series or functional-group unit.
- Chapter 12A covers Unit 9(ii)–(iv). Functional isomerism is labelled as an extension because the 2027 syllabus names chain and position isomerism. Metamerism is omitted because the supplied book marks it outside the syllabus.
- Chapter 12B covers alkanes only. Alkenes and alkynes belong to later chapters. Catalytic oxidation and slow combustion are omitted because the supplied book marks them outside the syllabus.
- Enrichment content is labelled. CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed in student-facing prose.

All examination-style questions are original practice questions. They are not CISCE past-paper questions.

## Progress

Progress is stored in the browser under one key per chapter:

- Chapter 1: `icse10.organic1.state`
- Chapter 12A: `icse10.organic12a.state`
- Chapter 12B: `icse10.organic12b.state`

Progress is local to the browser. It is not synchronised across devices. Each chapter can be reset independently.

## Verification

Before delivery:

1. Run `npm run build` and confirm `dist/` contains all four HTML files.
2. Run `npm run test:e2e`.
3. Run `npm run validate:questions`.
4. Open `npm run preview` and check all three chapters, chapter switching, deep links, assessment submission and reset, and mobile layout.
5. Update `QA-REPORT.md` with the actual results.
