# ICSE Class 10 Science — Physics and Organic Chemistry

Ten interactive Vue 3 chapters for the CISCE ICSE examination year 2027: two Physics chapters, Force and Work, Energy and Power, plus seven organic chemistry chapters from the introduction through alkanes, alkenes, alkynes, alcohols and carboxylic acids.

**Live site:** https://kishorek.github.io/icse-10th/

## Chapters and URLs

| Chapter | Subject | Title | URL | Scope |
|---|---|---|---|---|---|
| Physics 1 | Physics | Force | `chapter-physics-1.html` | Unit 1 Force: moment of force, couple, equilibrium, principle of moments, centre of gravity and uniform circular motion |
| Physics 2 | Physics | Work, Energy and Power | `chapter-physics-2.html` | Unit 1(iii), (iv), (vi): work, work by gravity, power, energy units, U = mgh, K = ½mv², work-energy theorem, energy forms, dissipation, conservation, free fall and the simple pendulum |
| Chapter 1 | Chemistry | Introduction to Organic Compounds | `chapter-1.html` | Unit 9(i): organic compounds, carbon's tetravalency and catenation, organic vs inorganic, examples and importance |
| Chapter 12A | Chemistry | Organic Compounds | `chapter-12a.html` | Unit 9(ii)–(iv): sources, carbon's bonding, hydrocarbon families, functional groups, homologous series, IUPAC naming and isomerism |
| Chapter 12B | Chemistry | Hydrocarbons: Alkanes | `chapter-12b.html` | Unit 9(v), alkanes only: the alkane family, methane and ethane, preparation, properties, combustion, substitution and uses |
| Chapter 12C | Chemistry | Hydrocarbons: Alkenes | `chapter-12c.html` | Unit 9(v), alkenes: the alkene family, ethene structure and preparation, addition, combustion, uses and tests |
| Chapter 12D | Chemistry | Hydrocarbons: Alkynes | `chapter-12d.html` | Unit 9(v), alkynes: the alkyne family, ethyne structure and preparation, stepwise addition, combustion, uses and tests |
| Chapter 12E | Chemistry | Alcohols | `chapter-12e.html` | Unit 9(vi): the alcohol family, ethanol preparation, properties, reactions, denatured/spurious alcohol and uses |
| Chapter 12F | Chemistry | Carboxylic Acids | `chapter-12f.html` | Unit 9(vii): the carboxyl family, acetic acid structure and properties, acid reactions, esterification and uses |

The root page (`index.html`) is a chapter list with local-progress summaries. The chapters are separate HTML pages built by Vite.

## What is included

**Physics 1 — Force**

- Five lessons: moment of force, couples and equilibrium, the principle of moments, centre of gravity, and uniform circular motion.
- Twelve purpose-built visuals: five interactive labs, five teaching animations, one comparison toggle and one static diagram — a door torque bench, line-of-action animation, couple demonstration, equilibrium classifier, metre-rule balance, see-saw calculation, spring-balance diagram, centre-of-gravity explorer, plumb-line method, tangent-velocity orbit, centripetal-force escape and a two-observer rotating-frame comparison.
- Every animation has Play, Pause and Restart controls, respects reduced motion and cleans up its anime.js instance.
- Memory workshop, flashcards, revision centre and a 24-question assessment (50 marks).

**Physics 2 — Work, Energy and Power**

- Seven lessons: work and its measurement, work by gravity and units, power, energy units, potential and kinetic energy, forms and transformations, and conservation of energy.
- Twenty-two purpose-built visuals covering work at an angle, force-displacement graphs, gravity paths, unit conversion, power races, energy meters, PE-KE exchange, energy forms, dissipation, free fall and the pendulum.
- Guided predictions, Play/Pause/Restart controls, reduced-motion final states and anime.js cleanup on unmount.
- Memory workshop, flashcards, revision centre and a 24-question assessment (53 marks).

**Chapter 1 (Chemistry)**

- Five lessons and two carbon labs.
- An organic/inorganic sorter and an everyday-objects explorer.
- Memory workshop, active-recall flashcards and a revision centre.
- A 24-question assessment (39 marks).

**Chapter 12A**

- Six lessons: carbon and organic compounds, hydrocarbon families, structures and functional groups, homologous series, IUPAC naming, and isomerism.
- Every lesson has a purpose-built diagram and a lesson-specific memory hook with a cover/reveal mapping.
- Four interactive labs: functional groups, homologous-series ladder, name builder and isomer explorer.
- Memory workshop based on a name-building routine, flashcards and a revision centre.
- A 30-question assessment (50 marks).

**Chapter 12B**

- Three lessons: the alkane family, methane and ethane structure and preparation, and reactions and uses.
- Every lesson has a purpose-built diagram and a lesson-specific memory hook with a cover/reveal mapping.
- Four interactive labs: alkane ladder, gas preparation, chlorination and combustion.
- Memory workshop based on a reaction map, flashcards and a revision centre.
- A 20-question assessment (34 marks).

**Chapter 12C**

- Four lessons: the alkene family, ethene structure and preparation, addition reactions, and combustion/uses/testing.
- Four interactive labs: butene isomers, ethene preparation control, addition sorting and an observation sorter.
- Animated preparation and addition visuals using anime.js v4, with pause, play, restart and reduced-motion support.
- Memory workshop, flashcards, revision centre and a 20-question assessment (37 marks).

**Chapter 12D**

- Four lessons: the alkyne family, ethyne structure and preparation, stepwise addition, and combustion/uses/tests.
- Four interactive labs: butyne isomers, ethyne preparation control, addition sorting and a hydrocarbon identification bench.
- Animated preparation and two-stage addition visuals using anime.js v4.
- Memory workshop, flashcards, revision centre and a 20-question assessment (37 marks).

**Chapter 12E**

- Five lessons: the alcohol family, ethanol preparation, physical properties and combustion, reactions, and denatured/spurious alcohol and uses.
- Four interactive labs: hydroxyl classification, ethanol preparation control, reaction sorting and a risk/use sorter.
- Animated preparation and reaction-map visuals using anime.js v4.
- Memory workshop, flashcards, revision centre and a 20-question assessment (33 marks).

**Chapter 12F**

- Four lessons: the carboxylic acid family, acetic acid structure and properties, acid reactions/esterification, and preparation context/tests/uses.
- Four interactive labs: mono/di and property classification, an ester builder and a use/property sorter.
- Animated acid-reaction and esterification visuals using anime.js v4.
- Memory workshop, flashcards, revision centre and a 20-question assessment (36 marks).

Across all chapters: objective items are auto-scored; written answers reveal marking points only after submission and are self-assessed; performance reports group by learning outcome; progress, answers and scores persist locally.

## Stack

- Vue 3 with `<script setup>` single-file components.
- Vite multi-page build for development and static output.
- npm for dependency management.
- Plain CSS with design tokens in `src/styles/main.css`.
- anime.js v4, installed from npm, for teaching animations.
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
- `npm run build` writes the static production build to `dist/`, including ten HTML entries.
- `npm run preview` serves the built `dist/` locally. Use a static server; opening the HTML files directly from the filesystem may be blocked by browser module rules.
- `npm run test:e2e` runs the Playwright browser checks. The first run may require `npx playwright install chromium`.
- `npm run export:questions` regenerates the nine schema-shaped question exports:
  - `exports/chapter-physics-1-questions.json` (24 questions)
  - `exports/chapter-physics-2-questions.json` (24 questions)
  - `exports/chapter-1-questions.json` (24 questions)
  - `exports/chapter-12a-questions.json` (30 questions)
  - `exports/chapter-12b-questions.json` (20 questions)
  - `exports/chapter-12c-questions.json` (20 questions)
  - `exports/chapter-12d-questions.json` (20 questions)
  - `exports/chapter-12e-questions.json` (20 questions)
  - `exports/chapter-12f-questions.json` (20 questions)
- `npm run validate:questions` validates every exported question against the project schema and exits non-zero if any export is missing or invalid.

## Project structure

```text
index.html
chapter-physics-1.html
chapter-physics-2.html
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
  chapter-physics-2-questions.json
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
  chapter-physics-2.spec.js
  chapter-1.spec.js
  chapter-12a.spec.js
  chapter-12b.spec.js
  chapter-12c.spec.js
  chapter-12d.spec.js
  chapter-12e.spec.js
  chapter-12f.spec.js
  integration.spec.js
  lesson-media.spec.js
content/physics/chapter-1-force/
  source/                 supplied Force scan (local only)
  chapter-content.md      gate approvals, scope and budget
content/physics/chapter-2-work-energy-and-power/
  source/                 supplied Chapter 2 scan (local only)
  chapter-content.md      gate approvals, scope and budget
content/chemistry/chapter-12c-12f/
  source/12C.pdf          supplied scanned pages (local only; not committed)
  chapter-content.md      gate approvals, scope and budget
src/
  entries/
  pages/
  components/
    shared chapter shell, assessment, revision and UI components
    lessons/                  Chapter 1 lessons and data-driven LessonRenderer
    visuals/generic/          shared family, molecule, flow, comparison and test visuals
    labs/                     shared isomer, preparation, test-bench, sorter and ester labs
    chapters/
      ChapterMemoryWorkshop.vue
      ChapterRevisionCentre.vue
      chapter-12a/            12A lessons and labs
      chapter-12b/            12B lessons and labs
  composables/
  lib/
  styles/main.css
  data/
    chapters/                 chapter configurations
    questions/                chapter question banks
    chapter-12a/
    chapter-12b/
    chapter-12c/
    chapter-12d/
    chapter-12e/
    chapter-12f/
```

The build deploys the contents of `dist/`. The ten HTML entries are `index.html`, `chapter-physics-1.html`, `chapter-physics-2.html`, `chapter-1.html`, `chapter-12a.html`, `chapter-12b.html`, `chapter-12c.html`, `chapter-12d.html`, `chapter-12e.html` and `chapter-12f.html`.

## Content and documentation files

- `chapter-content.md` — teaching content and notes for Chapter 1 plus syllabus and scope summaries for the later chapters.
- `chapter-sources.md` — syllabus and source notes for all nine chapters.
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

- Physics 1 covers Unit 1 Force. Physics 2 covers Unit 1(iii), (iv) and (vi). Machines, Unit 1(v), belongs in a separate chapter and is not included in Physics 2.
- Chapter 1 is the Unit 9(i) introduction. It does not teach the full hydrocarbons, nomenclature, homologous-series or functional-group unit.
- Chapter 12A covers Unit 9(ii)–(iv). Functional isomerism is labelled as an extension because the 2027 syllabus names chain and position isomerism. Metamerism is omitted because the supplied book marks it outside the syllabus.
- Chapter 12B covers alkanes only. Alkenes and alkynes belong to later chapters. Catalytic oxidation and slow combustion are omitted because the supplied book marks them outside the syllabus.
- Chapter 12C covers alkenes; Chapter 12D covers alkynes. Ozonolysis, polymerisation and extra tests are labelled enrichment or omitted. Chapter 12E covers ethanol; Chapter 12F covers acetic acid. Fermentation, industrial hydration and extra acid reactions are labelled enrichment.
- Enrichment content is labelled. CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed in student-facing prose.

All examination-style questions are original practice questions. They are not CISCE past-paper questions.

## Progress

Progress is stored in the browser under one key per chapter:

- Physics 1: `icse10.physics1.state`
- Physics 2: `icse10.physics2.state`
- Chapter 1: `icse10.organic1.state`
- Chapter 12A: `icse10.organic12a.state`
- Chapter 12B: `icse10.organic12b.state`
- Chapter 12C: `icse10.organic12c.state`
- Chapter 12D: `icse10.organic12d.state`
- Chapter 12E: `icse10.organic12e.state`
- Chapter 12F: `icse10.organic12f.state`

Progress is local to the browser. It is not synchronised across devices. Each chapter can be reset independently.

## Verification

Before delivery:

1. Run `npm run build` and confirm `dist/` contains all ten HTML files.
2. Run `npm run test:e2e`.
3. Run `npm run validate:questions`.
4. Open `npm run preview` and check all nine chapters, chapter switching, deep links, assessment submission and reset, and mobile layout.
5. Update `QA-REPORT.md` with the actual results.
