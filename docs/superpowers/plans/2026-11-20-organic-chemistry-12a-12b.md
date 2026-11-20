# Chapters 12A and 12B Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two complete interactive ICSE Chemistry chapters — 12A Organic Compounds and 12B Hydrocarbons: Alkanes — behind a three-chapter landing page, without changing the existing Chapter 1 content.

**Architecture:** Convert the single-chapter Vue app into a four-entry Vite multi-page build. A shared chapter provider supplies the active chapter configuration and progress store; a shared shell renders navigation, progress, chapter switching and sources. Chapter 1 keeps its existing lessons and labs, while 12A and 12B add chapter-specific lessons and labs under separate folders.

**Tech Stack:** Vue 3 `<script setup>`, Vite 8, plain CSS, localStorage, Playwright, Node 20.19+.

**Spec:** `docs/superpowers/specs/2026-11-20-organic-chemistry-12a-12b-design.md`

## Global Constraints

- Node.js 20.19 or newer; npm.
- No router, state library, CSS framework, remote fonts, remote images or new runtime dependencies.
- Keep `base: './'` in `vite.config.js`.
- Keep the Chapter 1 storage key exactly `icse10.organic1.state`.
- Use `icse10.organic12a.state` for 12A and `icse10.organic12b.state` for 12B.
- All assessment questions are original practice questions, not board past-paper questions.
- Do not copy the supplied book's exercise questions verbatim.
- Use CISCE ICSE Chemistry 2027 Unit 9 as the scope authority and the supplied pages for order and emphasis.
- Omit metamerism, catalytic oxidation and slow combustion, which the book marks “not in syllabus”.
- Label functional isomerism as an extension.
- Keep 12B to alkanes only; do not teach alkenes or alkynes.
- Preserve chemical formulae, equations, conditions and state symbols.
- Every interactive control has a visible, text-described outcome; no hover-only content; no colour-only status.
- Respect `prefers-reduced-motion`; layouts must work at 360 px, 768 px and 1280 px.
- Run `npm run build`, `npm run test:e2e` and `npm run validate:questions` before claiming completion.
- Do not create commits unless the user explicitly authorises them. Commit steps below are checkpoint instructions only.

---

## File Structure

```text
index.html                                  landing page entry
chapter-1.html                              existing chapter entry
chapter-12a.html                            new 12A entry
chapter-12b.html                            new 12B entry
vite.config.js                              four rollup inputs
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
    ChapterProvider.vue
    ChapterShell.vue
    ChapterHeroPanel.vue
    SourcesPanel.vue
    ChapterCard.vue
    QuickCheck.vue
    Assessment.vue
    QuestionCard.vue
    PerformanceReport.vue
    Flashcards.vue
    lessons/LessonHeading.vue
    chapters/chapter-12a/
      LessonOne.vue ... LessonSix.vue
      FunctionalGroupLab.vue
      HomologousLadderLab.vue
      NameBuilderLab.vue
      IsomerExplorer.vue
      MemoryWorkshop.vue
      RevisionCentre.vue
    chapters/chapter-12b/
      LessonOne.vue ... LessonThree.vue
      AlkaneLadderLab.vue
      GasPrepLab.vue
      ChlorinationLab.vue
      CombustionLab.vue
      MemoryWorkshop.vue
      RevisionCentre.vue
  composables/
    useChapter.js
    useProgress.js
  data/
    chapters/
      index.js
      chapter-1.js
      chapter-12a.js
      chapter-12b.js
    questions/
      chapter-1.json
      chapter-12a.json
      chapter-12b.json
    chapter-12a/
      functionalGroups.js
      homologousSeries.js
      nameExamples.js
      isomers.js
      flashcards.js
    chapter-12b/
      alkanes.js
      preparations.js
      reactions.js
      flashcards.js
  lib/
    progressSummary.js
  styles/
    main.css
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
```

Existing Chapter 1 components, labs, lessons and data files stay in place. Only their shell, progress and outcome wiring changes.

---

### Task 1: Chapter context and parameterised progress

**Files:**
- Create: `src/composables/useChapter.js`
- Modify: `src/composables/useProgress.js`
- Create: `src/data/chapters/chapter-1.js`
- Modify: `src/data/chapter.js`
- Create: `src/components/ChapterProvider.vue`
- Create: `src/components/ChapterShell.vue`
- Create: `src/components/SourcesPanel.vue`
- Create: `src/pages/ChapterOnePage.vue`
- Modify: `src/main.js`
- Modify: `src/components/QuickCheck.vue`
- Modify: `src/components/Assessment.vue`
- Modify: `src/components/QuestionCard.vue`
- Modify: `src/components/PerformanceReport.vue`
- Modify: `src/components/lessons/LessonHeading.vue`
- Move: `src/data/questions.json` → `src/data/questions/chapter-1.json`

**Interfaces:**
- Consumes: existing Chapter 1 lessons, labs, questions and CSS.
- Produces:
  - `createChapterProgress(chapter) -> { state, save, recordCheck, completedLessons, completedIds, assessmentSubmitted, milestonesTotal, progressPercent, resetAll }`
  - `provideChapter(chapter) -> { chapter, progress }`
  - `useChapter() -> { chapter, progress }`
  - Chapter config shape with `id`, `storageKey`, `lessons`, `outcomes`, `features`, `questions`, `sources`.

- [ ] **Step 1: Write the failing regression test**

Add this to `tests/chapter.spec.js` after the persistence test:

```js
test('chapter context preserves the chapter 1 storage contract', async ({ page }) => {
  for (const [id, value] of [
    ['l1-q1', 'B'],
    ['l1-q2', 'A'],
    ['l1-q3', 'C']
  ]) {
    await page.locator(`input[name="${id}"][value="${value}"]`).check()
  }

  const keys = await page.evaluate(() => Object.keys(localStorage))
  expect(keys.some((key) => key === 'icse10.organic1.state')).toBe(true)
})
```

- [ ] **Step 2: Run the baseline suite**

Run: `npm run test:e2e -- tests/chapter.spec.js`
Expected: PASS. This is the behaviour the refactor must preserve.

- [ ] **Step 3: Create the Chapter 1 configuration**

First move the question bank as described in Step 4, so the JSON import below resolves.

Create `src/data/chapters/chapter-1.js`:

```js
import questions from '../questions/chapter-1.json'

export const chapter = {
  id: 'chapter-1',
  href: './chapter-1.html',
  label: 'Chapter 1',
  title: 'Organic Chemistry',
  subtitle: 'Introduction to Organic Compounds',
  description:
    'Meet organic chemistry, carbon’s unique bonding, the organic–inorganic divide and the everyday importance of carbon compounds.',
  storageKey: 'icse10.organic1.state',
  syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(i)',
  estimatedMinutes: [45, 60],
  assessmentLabel: '24-question assessment',
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: 'What are organic compounds?', checkIds: ['l1-q1', 'l1-q2', 'l1-q3'] },
    { id: 'lesson-2', number: 2, navLabel: 'Why carbon is central', checkIds: ['l2-q1', 'l2-q2', 'l2-q3'] },
    { id: 'lesson-3', number: 3, navLabel: 'Organic vs inorganic', checkIds: ['l3-q1', 'l3-q2', 'l3-q3'] },
    { id: 'lesson-4', number: 4, navLabel: 'Everyday examples', checkIds: ['l4-q1', 'l4-q2', 'l4-q3'] },
    { id: 'lesson-5', number: 5, navLabel: 'Why it matters', checkIds: ['l5-q1', 'l5-q2', 'l5-q3'] }
  ],
  outcomes: {
    O1: 'Meaning and history',
    O2: "Carbon's central role",
    O3: 'Organic vs inorganic',
    O4: 'Everyday examples',
    O5: 'Importance and environment'
  },
  features: { memory: true, revision: true, assessment: true },
  questions,
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the CISCE ICSE Chemistry syllabus for the examination year 2027, Unit 9.1 introduction to organic compounds. The 2026-27 syllabus retains the same introduction wording. The official syllabus is published by the Council for the Indian School Certificate Examinations.',
      'CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed. All examination-style questions in this chapter are original practice questions, not board past-paper questions. Enrichment content is labelled.',
      'Progress is stored only in this browser using localStorage. It is not synchronised across devices.'
    ],
    links: [
      {
        label: 'CISCE Regulations and Syllabuses',
        href: 'https://cisce.org/regulations-and-syllabuses'
      }
    ]
  }
}

export const lessons = chapter.lessons
export const outcomes = chapter.outcomes
export const storageKey = chapter.storageKey

export default chapter
```

- [ ] **Step 4: Move the Chapter 1 question bank and replace the old module**

Move `src/data/questions.json` to `src/data/questions/chapter-1.json` without editing its contents.

Replace `src/data/chapter.js` with:

```js
export { chapter as default, lessons, outcomes, storageKey } from './chapters/chapter-1'
```

- [ ] **Step 5: Add the context composable**

Create `src/composables/useChapter.js`:

```js
import { inject, provide } from 'vue'
import { createChapterProgress } from './useProgress'

const CHAPTER_KEY = Symbol('chapter')

export function provideChapter(chapter) {
  const progress = createChapterProgress(chapter)
  const value = { chapter, progress }
  provide(CHAPTER_KEY, value)
  return value
}

export function useChapter() {
  const value = inject(CHAPTER_KEY)
  if (!value) {
    throw new Error('useChapter() must be used inside ChapterProvider')
  }
  return value
}
```

- [ ] **Step 6: Parameterise the progress store**

Replace `src/composables/useProgress.js` with:

```js
import { computed, reactive } from 'vue'

function defaultState() {
  return {
    checks: {},
    assessment: { answers: {}, selfScores: {}, submitted: false }
  }
}

export function loadChapterState(storageKey) {
  if (typeof localStorage === 'undefined') return defaultState()

  try {
    const raw = localStorage.getItem(storageKey)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw)
    const checks =
      parsed && parsed.checks && typeof parsed.checks === 'object' && !Array.isArray(parsed.checks)
        ? parsed.checks
        : {}
    const assessment = parsed?.assessment || {}
    return {
      checks,
      assessment: {
        answers:
          assessment.answers && typeof assessment.answers === 'object' && !Array.isArray(assessment.answers)
            ? assessment.answers
            : {},
        selfScores:
          assessment.selfScores && typeof assessment.selfScores === 'object' && !Array.isArray(assessment.selfScores)
            ? assessment.selfScores
            : {},
        submitted: Boolean(assessment.submitted)
      }
    }
  } catch {
    return defaultState()
  }
}

export function createChapterProgress(chapter) {
  const state = reactive(loadChapterState(chapter.storageKey))

  const save = () => {
    try {
      localStorage.setItem(chapter.storageKey, JSON.stringify(state))
    } catch {
      // Storage can be unavailable in private or restricted browser contexts.
    }
  }

  const recordCheck = (id, answer, correct) => {
    const previous = state.checks[id]
    state.checks[id] = {
      answer,
      correct: Boolean(correct),
      attempts: (previous?.attempts || 0) + 1
    }
    save()
  }

  const completedLessons = computed(() =>
    chapter.lessons.filter((lesson) =>
      lesson.checkIds.every((checkId) => state.checks[checkId]?.correct === true)
    )
  )

  const completedIds = computed(() => new Set(completedLessons.value.map((lesson) => lesson.id)))
  const assessmentSubmitted = computed(() => state.assessment.submitted)
  const assessmentMilestone = chapter.features.assessment ? 1 : 0
  const milestonesTotal = chapter.lessons.length + assessmentMilestone

  const progressPercent = computed(() => {
    const done = completedLessons.value.length + (assessmentSubmitted.value ? assessmentMilestone : 0)
    return milestonesTotal ? Math.round((done / milestonesTotal) * 100) : 0
  })

  const resetAll = () => {
    try {
      localStorage.removeItem(chapter.storageKey)
    } catch {
      // Ignore storage failures; reload still restores in-memory defaults.
    }
    window.location.reload()
  }

  return {
    state,
    save,
    recordCheck,
    completedLessons,
    completedIds,
    assessmentSubmitted,
    milestonesTotal,
    progressPercent,
    resetAll
  }
}
```

- [ ] **Step 7: Add the provider, shell and sources panel**

Create `src/components/ChapterProvider.vue`:

```vue
<script setup>
import { provideChapter } from '../composables/useChapter'

const props = defineProps({
  chapter: { type: Object, required: true }
})

provideChapter(props.chapter)
</script>

<template>
  <slot />
</template>
```

Move the existing `App.vue` shell markup and scroll logic into `src/components/ChapterShell.vue`. Use `useChapter()` for progress, build `navItems` from `chapter.lessons` and the `features` flags, and render `<slot />` plus `<SourcesPanel :sources="chapter.sources" />` inside `<main id="main-content">`. Keep the existing IDs `chapter-nav`, `progress-label`, `progress-fill`, `reset-progress` and skip link unchanged. Add a `<nav class="chapter-switcher" aria-label="Chapter switcher">` containing an `All chapters` link and, when provided, previous/next chapter links.

Create `src/components/SourcesPanel.vue`:

```vue
<script setup>
defineProps({
  sources: { type: Object, required: true }
})
</script>

<template>
  <section id="sources" class="sources" aria-labelledby="sources-title">
    <h2 id="sources-title">{{ sources.title }}</h2>
    <p v-for="paragraph in sources.paragraphs" :key="paragraph">{{ paragraph }}</p>
    <ul v-if="sources.links?.length">
      <li v-for="link in sources.links" :key="link.href">
        <a :href="link.href" target="_blank" rel="noopener">{{ link.label }}</a>
      </li>
    </ul>
  </section>
</template>
```

- [ ] **Step 8: Compose the Chapter 1 page**

Create `src/pages/ChapterOnePage.vue`:

```vue
<script setup>
import chapter from '../data/chapters/chapter-1'
import ChapterProvider from '../components/ChapterProvider.vue'
import ChapterShell from '../components/ChapterShell.vue'
import ChapterHero from '../components/ChapterHero.vue'
import LessonOne from '../components/lessons/LessonOne.vue'
import LessonTwo from '../components/lessons/LessonTwo.vue'
import LessonThree from '../components/lessons/LessonThree.vue'
import LessonFour from '../components/lessons/LessonFour.vue'
import LessonFive from '../components/lessons/LessonFive.vue'
import MemoryWorkshop from '../components/MemoryWorkshop.vue'
import RevisionCentre from '../components/RevisionCentre.vue'
import Assessment from '../components/Assessment.vue'
</script>

<template>
  <ChapterProvider :chapter="chapter">
    <ChapterShell :chapter="chapter">
      <ChapterHero />
      <LessonOne />
      <LessonTwo />
      <LessonThree />
      <LessonFour />
      <LessonFive />
      <MemoryWorkshop />
      <RevisionCentre />
      <Assessment />
    </ChapterShell>
  </ChapterProvider>
</template>
```

Replace `src/main.js` with:

```js
import { createApp } from 'vue'
import ChapterOnePage from './pages/ChapterOnePage.vue'
import './styles/main.css'

createApp(ChapterOnePage).mount('#app')
```

Delete `src/App.vue`.

- [ ] **Step 9: Point shared components at the context**

Make these exact changes:

```js
// QuickCheck.vue
import { useChapter } from '../composables/useChapter'
const { progress } = useChapter()
const { state, recordCheck } = progress
```

```js
// Assessment.vue
import { useChapter } from '../composables/useChapter'
const { chapter, progress } = useChapter()
const questions = chapter.questions
const { state, save } = progress
```

```js
// QuestionCard.vue and PerformanceReport.vue
import { useChapter } from '../composables/useChapter'
const { chapter } = useChapter()
const outcomes = chapter.outcomes
```

In `Assessment.vue`, add a computed total and replace the hardcoded “24 … 39 marks” sentence:

```js
const totalMarks = computed(() =>
  questions.reduce((sum, question) => sum + Number(question.marks || 0), 0)
)
```

```vue
<p class="lesson-objective">
  {{ questions.length }} original practice questions, worth {{ totalMarks }} marks.
  Objective answers are scored automatically. Written answers reveal marking points after
  submission and are self-assessed.
</p>
```

```js
// lessons/LessonHeading.vue
import { useChapter } from '../composables/useChapter'
const { chapter, progress } = useChapter()
const { state, completedIds } = progress
const lesson = computed(() => chapter.lessons.find((item) => item.id === props.id))
```

Remove any now-unused `../data/chapter` and `../data/questions.json` imports.

- [ ] **Step 10: Run the Chapter 1 regression suite**

Run: `npm run test:e2e -- tests/chapter.spec.js`
Expected: PASS, including the storage-key assertion.

- [ ] **Step 11: Checkpoint**

Run: `git status --short`
Expected: only shell, progress, config and Chapter 1 wiring changes. Commit only if authorised:

```bash
git add src tests
git commit -m "refactor: add chapter context and parameterised progress"
```

---

### Task 2: Multi-page build and chapter landing page

**Files:**
- Modify: `index.html`
- Create: `chapter-1.html`
- Create: `src/entries/home.js`
- Create: `src/entries/chapter-1.js`
- Create: `src/pages/HomePage.vue`
- Create: `src/components/ChapterCard.vue`
- Create: `src/data/chapters/index.js`
- Create: `src/lib/progressSummary.js`
- Modify: `vite.config.js`
- Modify: `src/styles/main.css`
- Create: `tests/landing.spec.js`
- Move: `tests/chapter.spec.js` → `tests/chapter-1.spec.js`, changing `page.goto('/')` to `page.goto('/chapter-1.html')`
- Delete: `src/main.js`

**Interfaces:**
- Consumes: `chapter-1` config and `readChapterSummary`.
- Produces:
  - `chapters` array from `src/data/chapters/index.js`
  - `readChapterSummary(chapter) -> { done, total, percent, assessmentSubmitted }`
  - `ChapterCard` props `{ chapter: Object, summary: Object }`

- [ ] **Step 1: Write the failing landing test**

Create `tests/landing.spec.js`:

```js
import { expect, test } from '@playwright/test'

test('root lists the available chapter and links to it', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Organic Chemistry \| ICSE Class 10/)
  await expect(page.getByRole('heading', { level: 1, name: 'Organic Chemistry' })).toBeVisible()
  const link = page.getByRole('link', { name: /Chapter 1/ })
  await expect(link).toHaveAttribute('href', './chapter-1.html')
  await link.click()
  await expect(page).toHaveURL(/chapter-1\.html$/)
  await expect(page.locator('#chapter-title')).toHaveText('Organic Chemistry')
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run test:e2e -- tests/landing.spec.js`
Expected: FAIL because `/` still serves Chapter 1 and has no chapter card.

- [ ] **Step 3: Create the chapter list and summary helper**

Create `src/data/chapters/index.js`:

```js
import chapterOne from './chapter-1'

export const chapters = [chapterOne]
export default chapters
```

Create `src/lib/progressSummary.js`:

```js
import { loadChapterState } from '../composables/useProgress'

export function readChapterSummary(chapter) {
  const state = loadChapterState(chapter.storageKey)
  const completed = chapter.lessons.filter((lesson) =>
    lesson.checkIds.every((id) => state.checks[id]?.correct === true)
  ).length
  const assessmentDone = chapter.features.assessment && state.assessment.submitted ? 1 : 0
  const total = chapter.lessons.length + (chapter.features.assessment ? 1 : 0)
  const done = completed + assessmentDone
  return {
    done,
    total,
    percent: total ? Math.round((done / total) * 100) : 0,
    assessmentSubmitted: state.assessment.submitted
  }
}
```

- [ ] **Step 4: Create the card and landing page**

Create `src/components/ChapterCard.vue`:

```vue
<script setup>
import { computed } from 'vue'

const props = defineProps({
  chapter: { type: Object, required: true },
  summary: { type: Object, required: true }
})

const progressLabel = computed(() => {
  if (props.summary.done === 0) return 'Not started'
  if (props.summary.assessmentSubmitted) return 'Assessment complete'
  return `${props.summary.done} of ${props.summary.total} milestones`
})
</script>

<template>
  <a class="chapter-card" :href="chapter.href">
    <p class="eyebrow">{{ chapter.label }}</p>
    <h2>{{ chapter.title }}</h2>
    <p>{{ chapter.description }}</p>
    <ul class="chapter-card__meta">
      <li>{{ chapter.lessons.length }} lessons</li>
      <li>{{ chapter.assessmentLabel }}</li>
      <li>{{ chapter.estimatedMinutes[0] }}–{{ chapter.estimatedMinutes[1] }} minutes</li>
    </ul>
    <p class="chapter-card__progress">{{ progressLabel }}</p>
  </a>
</template>
```

Create `src/pages/HomePage.vue`:

```vue
<script setup>
import { chapters } from '../data/chapters'
import { readChapterSummary } from '../lib/progressSummary'
import ChapterCard from '../components/ChapterCard.vue'

const summaries = Object.fromEntries(
  chapters.map((chapter) => [chapter.id, readChapterSummary(chapter)])
)
</script>

<template>
  <a class="skip-link" href="#chapters">Skip to chapters</a>
  <main class="home">
    <header class="home-hero">
      <p class="eyebrow">ICSE Class 10 · Chemistry</p>
      <h1>Organic Chemistry</h1>
      <p>Three chapters. Start with the introduction, then take 12A and 12B in order.</p>
    </header>

    <section id="chapters" class="chapter-grid" aria-label="Chapters">
      <ChapterCard
        v-for="chapter in chapters"
        :key="chapter.id"
        :chapter="chapter"
        :summary="summaries[chapter.id]"
      />
    </section>

    <p class="score-note">
      Progress is stored in this browser only. It is not synchronised across devices.
    </p>
  </main>
</template>
```

- [ ] **Step 5: Create entries and HTML pages**

Create `src/entries/home.js`:

```js
import { createApp } from 'vue'
import HomePage from '../pages/HomePage.vue'
import '../styles/main.css'

createApp(HomePage).mount('#app')
```

Create `src/entries/chapter-1.js`:

```js
import { createApp } from 'vue'
import ChapterOnePage from '../pages/ChapterOnePage.vue'
import '../styles/main.css'

createApp(ChapterOnePage).mount('#app')
```

Replace `index.html` with a landing document whose title is `Organic Chemistry | ICSE Class 10 Chemistry`, description mentions the three chapters, and script is `/src/entries/home.js`.

Create `chapter-1.html` with the old Chapter 1 head and title `Organic Chemistry Chapter 1 | ICSE Class 10 Chemistry`, script `/src/entries/chapter-1.js`.

Delete `src/main.js`.

- [ ] **Step 6: Configure the multi-page build**

Replace `vite.config.js`:

```js
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        chapter1: resolve(root, 'chapter-1.html')
      }
    }
  }
})
```

- [ ] **Step 7: Add landing and switcher styles**

Append to `src/styles/main.css`:

```css
.home {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 2.5rem 0 4rem;
}

.home-hero {
  max-width: 70ch;
  margin-bottom: 2rem;
}

.home-hero h1 {
  margin: 0.2rem 0 0.8rem;
  font-size: clamp(2rem, 5vw, 3.4rem);
}

.chapter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.chapter-card {
  display: block;
  padding: 1.25rem;
  border: 1px solid var(--line);
  border-radius: 0.75rem;
  background: var(--paper);
  color: inherit;
  text-decoration: none;
}

.chapter-card:hover,
.chapter-card:focus-visible {
  border-color: var(--teal);
  box-shadow: 0 0.5rem 1.5rem rgb(9 63 63 / 12%);
}

.chapter-card h2 {
  margin: 0.2rem 0 0.5rem;
}

.chapter-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1rem;
  padding: 0;
  margin: 0.75rem 0;
  list-style: none;
  font-size: 0.9rem;
}

.chapter-card__progress {
  margin: 0;
  font-weight: 700;
  color: var(--teal);
}

.chapter-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  font-size: 0.9rem;
}

.chapter-switcher a {
  color: inherit;
}

@media (max-width: 600px) {
  .home {
    width: min(100% - 1.25rem, 1100px);
    padding-top: 1.5rem;
  }
}
```

- [ ] **Step 8: Move the Chapter 1 test file**

Move `tests/chapter.spec.js` to `tests/chapter-1.spec.js`. Change `await page.goto('/')` to `await page.goto('/chapter-1.html')`. Keep the title assertion `/Organic Chemistry Chapter 1/`.

- [ ] **Step 9: Run the landing and Chapter 1 tests**

Run: `npm run test:e2e -- tests/landing.spec.js tests/chapter-1.spec.js`
Expected: PASS. Landing shows one chapter card; Chapter 1 still passes at its new URL.

- [ ] **Step 10: Build the two-page output**

Run: `npm run build`
Expected: `dist/index.html` and `dist/chapter-1.html` exist.

- [ ] **Step 11: Checkpoint**

Run: `git status --short`
Expected: only multipage, landing and test-move changes. Commit only if authorised:

```bash
git add index.html chapter-1.html vite.config.js src tests
git commit -m "feat: add chapter landing page and multipage build"
```

---

### Task 3: 12A configuration, hero and lessons 1–2

**Files:**
- Create: `src/data/chapters/chapter-12a.js`
- Modify: `src/data/chapters/index.js`
- Create: `src/components/ChapterHeroPanel.vue`
- Create: `src/pages/Chapter12APage.vue`
- Create: `src/entries/chapter-12a.js`
- Create: `chapter-12a.html`
- Create: `src/components/chapters/chapter-12a/LessonOne.vue`
- Create: `src/components/chapters/chapter-12a/LessonTwo.vue`
- Modify: `vite.config.js`
- Create: `tests/chapter-12a.spec.js`

**Interfaces:**
- Consumes: Task 1 context and Task 2 multipage build.
- Produces:
  - `chapter-12a` config with lesson IDs `lesson-1` and `lesson-2`
  - `ChapterHeroPanel` prop `{ hero: Object }`
  - quick-check IDs `a1-q1`…`a1-q3`, `a2-q1`…`a2-q3`

- [ ] **Step 1: Write the failing 12A test**

Create `tests/chapter-12a.spec.js`:

```js
import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/chapter-12a.html')
})

test.afterEach(() => {
  expect(errors, 'browser console and request errors').toEqual([])
  errors.length = 0
})

test('12A lessons 1 and 2 load with scope and sources', async ({ page }) => {
  await expect(page).toHaveTitle(/Chapter 12A/)
  await expect(page.getByRole('heading', { level: 1, name: 'Organic Compounds' })).toBeVisible()
  await expect(page.locator('#lesson-1')).toContainText('vital-force')
  await expect(page.locator('#lesson-1')).toContainText('Wöhler')
  await expect(page.locator('#lesson-2')).toContainText('CₙH₂ₙ₊₂')
  await expect(page.locator('#sources')).toContainText('original practice questions')
})

test('12A lessons 1 and 2 quick checks mark the lessons complete', async ({ page }) => {
  for (const [id, value] of [
    ['a1-q1', 'C'],
    ['a1-q2', 'B'],
    ['a1-q3', 'D'],
    ['a2-q1', 'B'],
    ['a2-q2', 'C'],
    ['a2-q3', 'A']
  ]) {
    await page.locator(`input[name="${id}"][value="${value}"]`).check()
  }

  await expect(page.locator('#progress-label')).toContainText('2 of 2 milestones')
  await expect(page.locator('#lesson-1 .lesson-status')).toHaveText('Complete')
  await expect(page.locator('#lesson-2 .lesson-status')).toHaveText('Complete')
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run test:e2e -- tests/chapter-12a.spec.js`
Expected: FAIL with a 404 or missing chapter page.

- [ ] **Step 3: Create the 12A configuration**

Create `src/data/chapters/chapter-12a.js`. Use the full scope, outcomes and hero text from spec sections 4.1–4.4, with this shape:

```js
export const chapter = {
  id: 'chapter-12a',
  href: './chapter-12a.html',
  label: 'Chapter 12A',
  title: 'Organic Compounds',
  subtitle: 'Structure, families and naming',
  description:
    'Build the full picture: carbon’s bonding, hydrocarbons, functional groups, homologous series, IUPAC names and isomerism.',
  storageKey: 'icse10.organic12a.state',
  syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(ii)–(iv)',
  estimatedMinutes: [90, 120],
  assessmentLabel: '30-question assessment',
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: 'Organic compounds and carbon', checkIds: ['a1-q1', 'a1-q2', 'a1-q3'] },
    { id: 'lesson-2', number: 2, navLabel: 'Hydrocarbons and families', checkIds: ['a2-q1', 'a2-q2', 'a2-q3'] }
  ],
  outcomes: {
    A1: 'Organic compounds, sources, and organic vs inorganic trends',
    A2: "Carbon's unique nature, bonding and hydrocarbon classification",
    A3: 'Structural formulae, alkyl groups and functional groups',
    A4: 'Homologous series',
    A5: 'IUPAC nomenclature',
    A6: 'Structural isomerism'
  },
  features: { memory: false, revision: false, assessment: false },
  questions: [],
  hero: {
    eyebrow: 'ICSE Class 10 · Chemistry · Unit 9(ii)–(iv)',
    title: 'Organic Compounds',
    subtitle: 'Chapter 12A · Structure, families and naming',
    question: 'Why can carbon build millions of compounds from the same few bond types?',
    chips: ['6 lessons', '4 interactive labs', '30-question assessment', 'Estimated study time: 90–120 minutes'],
    outcomes: [
      'Explain why carbon forms so many compounds.',
      'Classify hydrocarbons and recognise functional groups.',
      'Use homologous-series patterns and IUPAC naming rules.',
      'Identify chain, position and functional isomers.'
    ],
    prerequisites: [
      'Elements, compounds and covalent bonding.',
      'Valency and the octet idea.',
      'The first 20 elements and their symbols.'
    ],
    conceptMap: [
      { href: '#lesson-1', label: 'Carbon and organic compounds' },
      { href: '#lesson-2', label: 'Hydrocarbon families' },
      { href: '#lesson-3', label: 'Functional groups' },
      { href: '#lesson-4', label: 'Homologous series' },
      { href: '#lesson-5', label: 'Naming compounds' },
      { href: '#lesson-6', label: 'Isomerism' }
    ],
    scopeNote:
      'This chapter follows the supplied 12A pages and the CISCE 2027 Unit 9 scope. Metamerism is omitted because the book marks it outside the syllabus. Functional isomerism is labelled as an extension.'
  },
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the supplied Chapter 12A pages for sequence, terminology and worked examples. CISCE ICSE Chemistry 2027 Unit 9(ii)–(iv) sets the examinable scope.',
      'CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed. All quick checks and assessment questions are original practice questions, not board past-paper questions.',
      'Functional isomerism is included as a labelled extension because the supplied book teaches it, while the 2027 syllabus names chain and position isomerism.'
    ],
    links: [
      { label: 'CISCE Regulations and Syllabuses', href: 'https://cisce.org/regulations-and-syllabuses' }
    ]
  }
}

export default chapter
```

Add 12A to `src/data/chapters/index.js` after Chapter 1 and export the array in order.

While lessons 3–6 do not yet exist, trim `hero.conceptMap` to the lessons that exist so no dead hash links appear. Restore the full six-node map in Task 6.

- [ ] **Step 4: Create the reusable hero panel**

Create `src/components/ChapterHeroPanel.vue` using the existing Chapter 1 hero CSS classes. Render `hero.eyebrow`, `hero.title`, `hero.subtitle`, `hero.question`, `hero.chips`, `hero.outcomes`, `hero.prerequisites`, `hero.conceptMap` and `hero.scopeNote`. Keep the section ID `orientation` and heading ID `chapter-title`. Each concept-map link targets its lesson hash.

- [ ] **Step 5: Create 12A Lessons 1 and 2**

Create `src/components/chapters/chapter-12a/LessonOne.vue` and `LessonTwo.vue` with `LessonHeading`, prose and three `QuickCheck` components each. Teach exactly the content in spec section 4.2, Lessons 1–2:

- Lesson 1: organic definition, vital-force theory, Wöhler, Kolbe, Berthelot, sources, organic/inorganic comparison trends, tetravalency, catenation, bond types and chain types, large number of organic compounds.
- Lesson 2: hydrocarbon definition, aliphatic/cyclic, saturated/unsaturated, alkanes/alkenes/alkynes, alicyclic/aromatic, benzene, substitution vs addition preview.

Use these quick-check IDs and correct values:

| ID | Correct | Tested idea |
|---|---|---|
| `a1-q1` | C | Modern organic definition |
| `a1-q2` | B | Wöhler and laboratory synthesis |
| `a1-q3` | D | Carbonate as an inorganic exception |
| `a2-q1` | B | Alkane general formula |
| `a2-q2` | C | Benzene as aromatic |
| `a2-q3` | A | Alkyne triple bond |

Each `QuickCheck` needs `question`, `options`, `correct-value`, `correct-feedback` and `wrong-feedback`. Use text-only feedback, not colour alone.

- [ ] **Step 6: Create the 12A page and entry**

Create `src/pages/Chapter12APage.vue`:

```vue
<script setup>
import chapter from '../data/chapters/chapter-12a'
import ChapterProvider from '../components/ChapterProvider.vue'
import ChapterShell from '../components/ChapterShell.vue'
import ChapterHeroPanel from '../components/ChapterHeroPanel.vue'
import LessonOne from '../components/chapters/chapter-12a/LessonOne.vue'
import LessonTwo from '../components/chapters/chapter-12a/LessonTwo.vue'
</script>

<template>
  <ChapterProvider :chapter="chapter">
    <ChapterShell :chapter="chapter">
      <ChapterHeroPanel :hero="chapter.hero" />
      <LessonOne />
      <LessonTwo />
    </ChapterShell>
  </ChapterProvider>
</template>
```

Create `src/entries/chapter-12a.js`:

```js
import { createApp } from 'vue'
import Chapter12APage from '../pages/Chapter12APage.vue'
import '../styles/main.css'

createApp(Chapter12APage).mount('#app')
```

Create `chapter-12a.html` with title `Organic Compounds Chapter 12A | ICSE Class 10 Chemistry` and script `/src/entries/chapter-12a.js`.

- [ ] **Step 7: Add 12A to the Vite inputs**

Update `vite.config.js`:

```js
input: {
  home: resolve(root, 'index.html'),
  chapter1: resolve(root, 'chapter-1.html'),
  chapter12a: resolve(root, 'chapter-12a.html')
}
```

- [ ] **Step 8: Run the 12A and landing tests**

Run: `npm run test:e2e -- tests/chapter-12a.spec.js tests/landing.spec.js`
Expected: PASS. Landing now shows two cards.

- [ ] **Step 9: Checkpoint**

Run: `npm run build`
Expected: `dist/chapter-12a.html` exists. Commit only if authorised:

```bash
git add chapter-12a.html vite.config.js src tests
git commit -m "feat: add chapter 12A shell and first lessons"
```

---

### Task 4: 12A functional groups and homologous series

**Files:**
- Create: `src/data/chapter-12a/functionalGroups.js`
- Create: `src/data/chapter-12a/homologousSeries.js`
- Create: `src/components/chapters/chapter-12a/LessonThree.vue`
- Create: `src/components/chapters/chapter-12a/LessonFour.vue`
- Create: `src/components/chapters/chapter-12a/FunctionalGroupLab.vue`
- Create: `src/components/chapters/chapter-12a/HomologousLadderLab.vue`
- Modify: `src/data/chapters/chapter-12a.js`
- Modify: `src/pages/Chapter12APage.vue`
- Modify: `src/styles/main.css`
- Modify: `tests/chapter-12a.spec.js`

**Interfaces:**
- Produces:
  - `FunctionalGroupLab` with buttons labelled by molecule name and text output
  - `HomologousLadderLab` with `#homologous-n` number input
  - quick-check IDs `a3-q1`…`a3-q3`, `a4-q1`…`a4-q3`

- [ ] **Step 1: Write the failing lab tests**

Add to `tests/chapter-12a.spec.js`:

```js
test('functional group lab identifies families and suffixes', async ({ page }) => {
  const lab = page.locator('#functional-group-lab')
  await lab.getByRole('button', { name: /Ethanol/ }).click()
  await expect(lab).toContainText('Alcohol')
  await expect(lab).toContainText('–OH')
  await expect(lab).toContainText('-ol')
})

test('homologous ladder updates formula and molar mass', async ({ page }) => {
  const lab = page.locator('#homologous-ladder')
  await lab.locator('#homologous-n').fill('4')
  await expect(lab).toContainText('C4H10')
  await expect(lab).toContainText('58')
  await lab.getByRole('button', { name: 'Alkenes' }).click()
  await lab.locator('#homologous-n').fill('3')
  await expect(lab).toContainText('C3H6')
  await expect(lab).toContainText('42')
})
```

- [ ] **Step 2: Run them to verify they fail**

Run: `npm run test:e2e -- tests/chapter-12a.spec.js`
Expected: FAIL because lessons 3–4 and the labs do not exist.

- [ ] **Step 3: Create the functional-group data**

Create `src/data/chapter-12a/functionalGroups.js` with these nine entries: haloalkane `–X`, alkene `C=C`, alkyne `C≡C`, alcohol `–OH`, aldehyde `–CHO`, ketone `>C=O`, carboxylic acid `–COOH`, ether `–O–`, ester `–COO–`. Each entry must include `id`, `name`, `group`, `general`, `prefix`, `suffix`, `example`, `exampleName` and `note`. Use the examples from spec section 4.2, Lesson 3.

- [ ] **Step 4: Create the homologous-series data**

Create `src/data/chapter-12a/homologousSeries.js` with four families:

```js
export const homologousSeries = [
  {
    id: 'alkanes',
    name: 'Alkanes',
    general: 'CₙH₂ₙ₊₂',
    members: [
      { n: 1, name: 'Methane', formula: 'CH4', molarMass: 16 },
      { n: 2, name: 'Ethane', formula: 'C2H6', molarMass: 30 },
      { n: 3, name: 'Propane', formula: 'C3H8', molarMass: 44 },
      { n: 4, name: 'Butane', formula: 'C4H10', molarMass: 58 },
      { n: 5, name: 'Pentane', formula: 'C5H12', molarMass: 72 }
    ]
  },
  {
    id: 'alkenes',
    name: 'Alkenes',
    general: 'CₙH₂ₙ',
    members: [
      { n: 2, name: 'Ethene', formula: 'C2H4', molarMass: 28 },
      { n: 3, name: 'Propene', formula: 'C3H6', molarMass: 42 },
      { n: 4, name: 'Butene', formula: 'C4H8', molarMass: 56 },
      { n: 5, name: 'Pentene', formula: 'C5H10', molarMass: 70 }
    ]
  },
  {
    id: 'alkynes',
    name: 'Alkynes',
    general: 'CₙH₂ₙ₋₂',
    members: [
      { n: 2, name: 'Ethyne', formula: 'C2H2', molarMass: 26 },
      { n: 3, name: 'Propyne', formula: 'C3H4', molarMass: 40 },
      { n: 4, name: 'Butyne', formula: 'C4H6', molarMass: 54 },
      { n: 5, name: 'Pentyne', formula: 'C5H8', molarMass: 68 }
    ]
  },
  {
    id: 'alcohols',
    name: 'Alcohols',
    general: 'CₙH₂ₙ₊₁OH',
    members: [
      { n: 1, name: 'Methanol', formula: 'CH4O', molarMass: 32 },
      { n: 2, name: 'Ethanol', formula: 'C2H6O', molarMass: 46 },
      { n: 3, name: 'Propan-1-ol', formula: 'C3H8O', molarMass: 60 },
      { n: 4, name: 'Butan-1-ol', formula: 'C4H10O', molarMass: 74 },
      { n: 5, name: 'Pentan-1-ol', formula: 'C5H12O', molarMass: 88 }
    ]
  }
]

export default homologousSeries
```

- [ ] **Step 5: Create the two labs**

Create `FunctionalGroupLab.vue` with `id="functional-group-lab"`, a `role="group"` set of buttons, `aria-pressed`, a selected detail panel, and an `aria-live="polite"` output. The button labels must include the example name, for example `Ethanol (C₂H₅OH)`.

Create `HomologousLadderLab.vue` with `id="homologous-ladder"`, family buttons, a `#homologous-n` number input, and an `aria-live` output showing general formula, member name, formula, molar mass and the CH₂/14 u note. Reset the selected `n` to the first valid member when the family changes.

- [ ] **Step 6: Create Lessons 3 and 4**

Lesson 3 teaches structural/condensed formulae, alkyl groups, 1°–4° carbons, functional-group definition, the nine-family table and characteristic properties. Include `FunctionalGroupLab`.

Lesson 4 teaches homologous-series definition, CH₂/14 u step, general formulae, gradation, significance and a next-member worked example. Include `HomologousLadderLab`.

Use these quick-check IDs and correct values:

| ID | Correct | Tested idea |
|---|---|---|
| `a3-q1` | B | Functional-group definition |
| `a3-q2` | C | `–COOH` is carboxylic acid |
| `a3-q3` | A | Identifying an alcohol |
| `a4-q1` | B | CH₂ difference |
| `a4-q2` | C | 14 u mass difference |
| `a4-q3` | A | Alkene general formula |

- [ ] **Step 7: Wire the lessons and styles**

Add lessons 3 and 4 to `chapter-12a.js` with check IDs `a3-q1`…`a3-q3` and `a4-q1`…`a4-q3`. Import and render both lessons in `Chapter12APage.vue`.

Append to `src/styles/main.css`:

```css
.lab-panel {
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid var(--line);
  border-radius: 0.75rem;
  background: var(--paper-soft);
}

.lab-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0;
}

.lab-output {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--line);
}

.lab-output p {
  margin: 0.35rem 0;
}

#homologous-n {
  width: 100%;
  max-width: 28rem;
}
```

- [ ] **Step 8: Run the 12A tests**

Run: `npm run test:e2e -- tests/chapter-12a.spec.js`
Expected: PASS for the labs and all quick checks.

- [ ] **Step 9: Checkpoint**

Run: `npm run build`
Expected: build succeeds. Commit only if authorised:

```bash
git add src tests
git commit -m "feat: add 12A functional groups and homologous series"
```

---

### Task 5: 12A IUPAC name builder

**Files:**
- Create: `src/data/chapter-12a/nameExamples.js`
- Create: `src/components/chapters/chapter-12a/NameBuilderLab.vue`
- Create: `src/components/chapters/chapter-12a/LessonFive.vue`
- Modify: `src/data/chapters/chapter-12a.js`
- Modify: `src/pages/Chapter12APage.vue`
- Modify: `src/styles/main.css`
- Modify: `tests/chapter-12a.spec.js`

**Interfaces:**
- Produces:
  - `NameBuilderLab` with `#name-builder`, `#builder-example`, `#builder-root`, `#builder-suffix`, `#builder-prefix`, `#builder-locant`
  - quick-check IDs `a5-q1`…`a5-q3`

- [ ] **Step 1: Write the failing builder test**

Add to `tests/chapter-12a.spec.js`:

```js
test('name builder assembles a correct IUPAC name', async ({ page }) => {
  const lab = page.locator('#name-builder')
  await lab.locator('#builder-example').selectOption('propan-2-ol')
  await lab.locator('#builder-root').selectOption('prop')
  await lab.locator('#builder-suffix').selectOption('ol')
  await lab.locator('#builder-locant').selectOption('2')
  await lab.getByRole('button', { name: 'Check name' }).click()
  await expect(lab).toContainText('propan-2-ol')
  await expect(lab).toContainText('Correct')
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run test:e2e -- tests/chapter-12a.spec.js`
Expected: FAIL because the builder does not exist.

- [ ] **Step 3: Create the fixed naming examples**

Create `src/data/chapter-12a/nameExamples.js` with these eight examples. Each entry has `id`, `structure`, `root`, `suffix`, `prefix`, `locant`, `name`, `reason`.

| id | structure | root | suffix | prefix | locant | name |
|---|---|---|---|---|---|---|
| `chloromethane` | CH₃–Cl | meth | ane | chloro | 1 | chloromethane |
| `2-bromobutane` | CH₃–CH(Br)–CH₂–CH₃ | but | ane | bromo | 2 | 2-bromobutane |
| `propan-1-ol` | CH₃–CH₂–CH₂–OH | prop | ol | — | 1 | propan-1-ol |
| `propan-2-ol` | CH₃–CH(OH)–CH₃ | prop | ol | — | 2 | propan-2-ol |
| `ethanal` | CH₃–CHO | eth | al | — | 1 | ethanal |
| `propanone` | CH₃–CO–CH₃ | prop | one | — | 2 | propanone |
| `propanoic-acid` | CH₃–CH₂–COOH | prop | oic acid | — | 1 | propanoic acid |
| `2-methylbutane` | CH₃–CH(CH₃)–CH₂–CH₃ | but | ane | methyl | 2 | 2-methylbutane |

The `reason` strings must explain the longest chain, suffix and locant, as in spec section 4.2, Lesson 5.

- [ ] **Step 4: Create the guided builder**

Create `NameBuilderLab.vue` with a structure selector, four part selectors (root, suffix, prefix, locant) and a `Check name` button. On check, compare all four parts with the selected example. On success, display `Correct: <name>. <reason>`. On failure, display a prompt to recheck the parts. Use `aria-live="polite"` for the result.

Supported roots: `meth`, `eth`, `prop`, `but`, `pent`. Supported suffixes: `ane`, `ol`, `al`, `one`, `oic acid`. Supported prefixes: none, `methyl`, `ethyl`, `chloro`, `bromo`.

- [ ] **Step 5: Create Lesson 5**

Lesson 5 teaches trivial vs IUPAC names, root/suffix/prefix, longest-chain rule, numbering for the functional group and substituents, lowest-sum and alphabetical rules, multiplicative prefixes, worked examples and reverse structure drawing. Include `NameBuilderLab`.

Use these quick-check IDs and correct values:

| ID | Correct | Tested idea |
|---|---|---|
| `a5-q1` | C | Longest-chain selection |
| `a5-q2` | B | Lowest locant for `–OH` |
| `a5-q3` | D | Name of CH₃CH₂COOH |

- [ ] **Step 6: Wire the lesson and builder styles**

Add lesson 5 to `chapter-12a.js` with check IDs `a5-q1`…`a5-q3`. Import and render it in `Chapter12APage.vue`.

Append to `src/styles/main.css`:

```css
.builder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 0.75rem;
  margin: 0.75rem 0;
}

.builder-grid label {
  display: block;
  margin-bottom: 0.25rem;
}

#name-builder .q-select {
  width: 100%;
}

#name-builder .btn {
  margin-top: 0.5rem;
}
```

- [ ] **Step 7: Run the 12A tests**

Run: `npm run test:e2e -- tests/chapter-12a.spec.js`
Expected: PASS including the name-builder test.

- [ ] **Step 8: Checkpoint**

Run: `npm run build`
Expected: build succeeds. Commit only if authorised:

```bash
git add src tests
git commit -m "feat: add 12A IUPAC name builder"
```

---

### Task 6: 12A isomerism, memory and revision

**Files:**
- Create: `src/data/chapter-12a/isomers.js`
- Create: `src/data/chapter-12a/flashcards.js`
- Create: `src/components/chapters/chapter-12a/LessonSix.vue`
- Create: `src/components/chapters/chapter-12a/IsomerExplorer.vue`
- Create: `src/components/chapters/chapter-12a/MemoryWorkshop.vue`
- Create: `src/components/chapters/chapter-12a/RevisionCentre.vue`
- Modify: `src/components/Flashcards.vue`
- Modify: `src/data/chapters/chapter-12a.js`
- Modify: `src/pages/Chapter12APage.vue`
- Modify: `src/styles/main.css`
- Modify: `tests/chapter-12a.spec.js`

**Interfaces:**
- Produces:
  - `IsomerExplorer` with `#isomer-formula` select
  - `Flashcards` prop `cards`
  - quick-check IDs `a6-q1`…`a6-q3`
  - 12A memory and revision sections enabled

- [ ] **Step 1: Write the failing tests**

Add to `tests/chapter-12a.spec.js`:

```js
test('isomer explorer shows chain and functional isomers', async ({ page }) => {
  const lab = page.locator('#isomer-explorer')
  await lab.locator('#isomer-formula').selectOption('c4h10')
  await expect(lab).toContainText('Butane')
  await expect(lab).toContainText('2-Methylpropane')
  await expect(lab).toContainText('Chain isomerism')
  await lab.locator('#isomer-formula').selectOption('c2h6o')
  await expect(lab).toContainText('Ethanol')
  await expect(lab).toContainText('Methoxymethane')
  await expect(lab).toContainText('Functional isomerism')
})

test('12A memory and revision sections work', async ({ page }) => {
  await expect(page.locator('#memory')).toContainText('name-building routine')
  await expect(page.locator('#revision')).toContainText('Common mistakes')
  const flashcards = page.locator('#flashcards')
  await flashcards.locator('.flashcard').click()
  await expect(flashcards).toContainText('carbon compound')
})
```

- [ ] **Step 2: Run them to verify they fail**

Run: `npm run test:e2e -- tests/chapter-12a.spec.js`
Expected: FAIL because the sections do not exist.

- [ ] **Step 3: Create the isomer data**

Create `src/data/chapter-12a/isomers.js` with four formulas: C₄H₁₀ (chain), C₅H₁₂ (chain), C₄H₈ (position and chain), C₂H₆O (functional). Each record has `id`, `formula`, `type` and an `isomers` array of `{ name, structure, note }`. Use the exact names and structures in spec section 4.2, Lesson 6.

- [ ] **Step 4: Create the explorer and flashcards changes**

Create `IsomerExplorer.vue` with `id="isomer-explorer"`, a `#isomer-formula` select, a type line and a grid of isomer cards showing name, structure and note.

Modify `src/components/Flashcards.vue` to accept a deck:

```js
import { ref } from 'vue'
import { flashcards as defaultCards } from '../data/flashcards'

const props = defineProps({
  cards: { type: Array, default: () => defaultCards }
})

const deck = ref([...props.cards])
```

Replace every use of `flashcards` in the script and template with `deck`. The existing Chapter 1 `<Flashcards />` must keep working.

- [ ] **Step 5: Create 12A flashcards, memory and revision**

Create `src/data/chapter-12a/flashcards.js` with 15 cards covering organic definition, hydrocarbon, functional group, homologous series, CH₂/14 u, alkane/alkene/alkyne/alcohol general formulae, root words, longest-chain rule, lowest-locant rule, isomer definition, chain vs position isomerism and functional isomerism as an extension.

Create `MemoryWorkshop.vue` with `id="memory"`, a five-step name-building routine, a recall prompt and `<Flashcards :cards="flashcards" />`. Do not force an acrostic; the chapter uses direct procedure and spaced recall.

Create `RevisionCentre.vue` with `id="revision"`, the rapid sheet, definitions, functional-group table, homologous-series table, common mistakes and six review questions from spec section 7.9.

- [ ] **Step 6: Create Lesson 6**

Lesson 6 teaches isomer definition, chain isomers, position isomers, functional isomers as an extension, classification and the rise in isomer count with carbon number. Include `IsomerExplorer`.

Use these quick-check IDs and correct values:

| ID | Correct | Tested idea |
|---|---|---|
| `a6-q1` | B | Isomer definition |
| `a6-q2` | C | Butane and 2-methylpropane are chain isomers |
| `a6-q3` | D | Ethanol and methoxymethane are functional isomers |

- [ ] **Step 7: Wire sections, features and styles**

Add lesson 6 to `chapter-12a.js` with check IDs `a6-q1`…`a6-q3`, and restore the full six-node `hero.conceptMap`. Set `features` to `{ memory: true, revision: true, assessment: false }`. Import and render `LessonSix`, `MemoryWorkshop` and `RevisionCentre` in `Chapter12APage.vue` after `LessonFive`, in that order.

Append to `src/styles/main.css`:

```css
.isomer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.isomer-card {
  padding: 0.75rem;
  border: 1px solid var(--line);
  border-radius: 0.6rem;
  background: var(--paper);
}

.isomer-card h4 {
  margin: 0 0 0.35rem;
}

.isomer-card p {
  margin: 0.25rem 0;
}
```

- [ ] **Step 8: Run the 12A tests**

Run: `npm run test:e2e -- tests/chapter-12a.spec.js`
Expected: PASS including isomer, memory, revision and flashcards tests.

- [ ] **Step 9: Checkpoint**

Run: `npm run build`
Expected: build succeeds. Commit only if authorised:

```bash
git add src tests
git commit -m "feat: add 12A isomerism, memory and revision"
```

---

### Task 7: 12A assessment and performance report

**Files:**
- Create: `src/data/questions/chapter-12a.json`
- Modify: `src/data/chapters/chapter-12a.js`
- Modify: `src/pages/Chapter12APage.vue`
- Modify: `tests/chapter-12a.spec.js`

**Interfaces:**
- Consumes: existing `Assessment`, `QuestionCard`, `PerformanceReport`, `scoring.js`.
- Produces: 30-question, 50-mark bank with IDs `AQ1`–`AQ30` and outcomes `A1`–`A6`.

- [ ] **Step 1: Write the failing assessment test**

Add to `tests/chapter-12a.spec.js`:

```js
test('12A assessment submits, self-marks, persists and resets', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await page.locator('#AQ29').fill('Propan-2-ol: three-carbon chain, OH on carbon 2.')
  await page.getByRole('button', { name: 'Submit assessment' }).click()
  await expect(page.locator('#assessment-summary')).toBeVisible()
  await expect(page.locator('.score-big')).toContainText('/ 50')

  await page.locator('#AQ29-self').selectOption('3')
  await expect(page.locator('.score-big')).toContainText('3 / 50')

  await page.reload()
  await expect(page.locator('#assessment-summary')).toBeVisible()
  await expect(page.locator('.score-big')).toContainText('3 / 50')

  await page.getByRole('button', { name: 'Reset answers' }).click()
  await expect(page.locator('.assessment-status')).toContainText('0 of 30 answered')
  await expect(page.locator('#assessment-summary')).toHaveCount(0)
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run test:e2e -- tests/chapter-12a.spec.js`
Expected: FAIL because there is no 12A assessment.

- [ ] **Step 3: Create the 30-question bank**

Create `src/data/questions/chapter-12a.json` with exactly these IDs, outcomes, types and marks. Write original prompts; use the book only as a coverage checklist.

| ID | Outcome | Type | Marks | Tested idea |
|---|---|---|---|---|
| AQ1 | A1 | single | 1 | Modern organic definition |
| AQ2 | A1 | single | 1 | Wöhler and vital-force theory |
| AQ3 | A1 | single | 1 | Standard inorganic exceptions |
| AQ4 | A2 | single | 1 | Tetravalency |
| AQ5 | A2 | single | 1 | Catenation |
| AQ6 | A2 | single | 1 | Alkane/alkene/alkyne formulae |
| AQ7 | A3 | single | 1 | Functional-group identification |
| AQ8 | A3 | single | 1 | Alkyl group formula |
| AQ9 | A4 | single | 1 | CH₂/14 u step |
| AQ10 | A5 | single | 1 | Longest-chain rule |
| AQ11 | A5 | single | 1 | Lowest-locant rule |
| AQ12 | A6 | single | 1 | Isomer definition |
| AQ13 | A1 | fill | 1 | Wöhler's product |
| AQ14 | A2 | fill | 1 | Alkyne general formula |
| AQ15 | A3 | fill | 1 | Alcohol suffix |
| AQ16 | A4 | fill | 1 | Molar-mass difference |
| AQ17 | A5 | fill | 1 | Root for four carbons |
| AQ18 | A2 | multiple | 2 | Carbon properties that increase variety |
| AQ19 | A3 | multiple | 2 | Correct functional-group pairs |
| AQ20 | A5 | multiple | 2 | Correct naming steps |
| AQ21 | A1 | truefalse | 2 | Every carbon compound is organic (false, justify) |
| AQ22 | A4 | truefalse | 2 | Homologous members differ by CH₂ (true, justify) |
| AQ23 | A6 | truefalse | 2 | Ethanol and methoxymethane are chain isomers (false, justify) |
| AQ24 | A3 | match | 6 | Match six functional groups to families |
| AQ25 | A2 | short | 2 | Explain tetravalency and catenation |
| AQ26 | A4 | short | 2 | Two homologous-series characteristics |
| AQ27 | A5 | short | 2 | Name 2-methylbutane and explain the locant |
| AQ28 | A6 | short | 2 | Classify an isomer pair |
| AQ29 | A5 | short | 3 | Name propan-2-ol and describe its structure |
| AQ30 | A5 | long | 4 | Name a branched alcohol and explain an isomer |

Use the existing question schema in `src/data/questions/chapter-1.json`. Every item needs `id`, `outcome`, `topic`, `type`, `marks`, `prompt`, `explanation` and `misconception`. Single/multiple items need `options` and `answer`. Fill items need `answer` array. True/false items need `answer`, `autoMarks: 1`, `justify: true`, `modelAnswer` and `markingPoints`. Matching items need `pairs` and `options` (strings). Short/long items need `modelAnswer` and `markingPoints`.

Sample single-choice item:

```json
{
  "id": "AQ1",
  "outcome": "A1",
  "topic": "Modern definition of organic compounds",
  "type": "single",
  "marks": 1,
  "prompt": "Which statement best defines organic compounds?",
  "options": [
    { "value": "A", "text": "All carbon-containing compounds" },
    { "value": "B", "text": "Compounds obtained only from living organisms" },
    { "value": "C", "text": "Carbon compounds, usually containing hydrogen, excluding simple carbon compounds such as CO₂ and carbonates" },
    { "value": "D", "text": "Compounds containing oxygen" }
  ],
  "answer": "C",
  "explanation": "The modern definition is structural. Simple carbon compounds such as CO₂, carbonates, bicarbonates, cyanides and carbides are conventionally inorganic.",
  "misconception": "Assuming every carbon-containing compound is organic."
}
```

- [ ] **Step 4: Wire the bank and assessment**

In `src/data/chapters/chapter-12a.js`, import the JSON, replace `questions: []` with `questions`, and set `features` to `{ memory: true, revision: true, assessment: true }`.

Import `Assessment` and render it after `RevisionCentre` in `Chapter12APage.vue`.

- [ ] **Step 5: Run the 12A assessment test**

Run: `npm run test:e2e -- tests/chapter-12a.spec.js`
Expected: PASS with `/ 50` and `0 of 30 answered`.

- [ ] **Step 6: Checkpoint**

Run: `npm run build`
Expected: build succeeds. Commit only if authorised:

```bash
git add src tests
git commit -m "feat: add 12A assessment"
```

---

### Task 8: 12B configuration, hero, lesson 1 and alkane ladder

**Files:**
- Create: `src/data/chapters/chapter-12b.js`
- Modify: `src/data/chapters/index.js`
- Create: `src/data/chapter-12b/alkanes.js`
- Create: `src/components/chapters/chapter-12b/LessonOne.vue`
- Create: `src/components/chapters/chapter-12b/AlkaneLadderLab.vue`
- Create: `src/pages/Chapter12BPage.vue`
- Create: `src/entries/chapter-12b.js`
- Create: `chapter-12b.html`
- Modify: `vite.config.js`
- Create: `tests/chapter-12b.spec.js`

**Interfaces:**
- Consumes: Task 1 context, Task 2 multipage, Task 3 hero panel.
- Produces:
  - `chapter-12b` config with lesson ID `lesson-1`
  - `AlkaneLadderLab` with `#alkane-n`
  - quick-check IDs `b1-q1`…`b1-q3`

- [ ] **Step 1: Write the failing 12B test**

Create `tests/chapter-12b.spec.js`:

```js
import { expect, test } from '@playwright/test'

const errors = []

test.beforeEach(async ({ page }) => {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('requestfailed', (request) => errors.push(`Request failed: ${request.url()}`))
  await page.goto('/chapter-12b.html')
})

test.afterEach(() => {
  expect(errors, 'browser console and request errors').toEqual([])
  errors.length = 0
})

test('12B lesson 1 loads and the alkane ladder works', async ({ page }) => {
  await expect(page).toHaveTitle(/Chapter 12B/)
  await expect(page.getByRole('heading', { level: 1, name: 'Hydrocarbons: Alkanes' })).toBeVisible()
  await expect(page.locator('#lesson-1')).toContainText('CₙH₂ₙ₊₂')
  await expect(page.locator('#lesson-1')).toContainText('2-methylpropane')

  const lab = page.locator('#alkane-ladder')
  await lab.locator('#alkane-n').fill('5')
  await expect(lab).toContainText('C5H12')
  await expect(lab).toContainText('72')
  await expect(lab).toContainText('3')
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run test:e2e -- tests/chapter-12b.spec.js`
Expected: FAIL with a 404 or missing page.

- [ ] **Step 3: Create the alkane data**

Create `src/data/chapter-12b/alkanes.js`:

```js
export const alkanes = [
  { n: 1, name: 'Methane', formula: 'CH4', molarMass: 16, state: 'gas', isomers: 1 },
  { n: 2, name: 'Ethane', formula: 'C2H6', molarMass: 30, state: 'gas', isomers: 1 },
  { n: 3, name: 'Propane', formula: 'C3H8', molarMass: 44, state: 'gas', isomers: 1 },
  { n: 4, name: 'Butane', formula: 'C4H10', molarMass: 58, state: 'gas', isomers: 2 },
  { n: 5, name: 'Pentane', formula: 'C5H12', molarMass: 72, state: 'liquid', isomers: 3 },
  { n: 6, name: 'Hexane', formula: 'C6H14', molarMass: 86, state: 'liquid', isomers: 5 },
  { n: 7, name: 'Heptane', formula: 'C7H16', molarMass: 100, state: 'liquid', isomers: 9 },
  { n: 8, name: 'Octane', formula: 'C8H18', molarMass: 114, state: 'liquid', isomers: 18 },
  { n: 9, name: 'Nonane', formula: 'C9H20', molarMass: 128, state: 'liquid', isomers: 35 },
  { n: 10, name: 'Decane', formula: 'C10H22', molarMass: 142, state: 'liquid', isomers: 75 }
]

export default alkanes
```

- [ ] **Step 4: Create the 12B configuration**

Create `src/data/chapters/chapter-12b.js` using the 12A shape and the full scope from spec sections 5.1–5.4. Required metadata:

```js
id: 'chapter-12b',
href: './chapter-12b.html',
label: 'Chapter 12B',
title: 'Hydrocarbons: Alkanes',
subtitle: 'Methane and ethane',
description:
  'Study the alkane family, methane and ethane, their preparation, combustion, substitution reactions and uses.',
storageKey: 'icse10.organic12b.state',
syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(v), alkanes',
estimatedMinutes: [60, 75],
assessmentLabel: '20-question assessment',
lessons: [
  { id: 'lesson-1', number: 1, navLabel: 'The alkane family', checkIds: ['b1-q1', 'b1-q2', 'b1-q3'] }
],
outcomes: {
  B1: 'Alkane family, sources and chain isomerism',
  B2: 'Methane and ethane: occurrence, structure, preparation and physical properties',
  B3: 'Reactions and uses of methane and ethane'
},
features: { memory: false, revision: false, assessment: false },
questions: []
```

While lessons 2–3 do not yet exist, trim `hero.conceptMap` to the lessons that exist. Restore the full map in Task 9.

Add the hero from spec section 5.2 with these chips: `3 lessons`, `4 interactive labs`, `20-question assessment`, `Estimated study time: 60–75 minutes`. Add sources noting that alkenes and alkynes are out of scope and that catalytic oxidation and slow combustion are omitted.

- [ ] **Step 5: Create the alkane ladder**

Create `AlkaneLadderLab.vue` with `id="alkane-ladder"`, a `#alkane-n` number input from 1 to 10 and an `aria-live` output showing name, formula, molar mass, state and number of chain isomers. Include the sentence “Boiling point increases as the chain gets longer.”

- [ ] **Step 6: Create Lesson 1**

Create `LessonOne.vue` with `LessonHeading`, prose and `AlkaneLadderLab`. Teach the content in spec section 5.2, Lesson 1: single C–C and C–H bonds, saturation, paraffins, CₙH₂ₙ₊₂, natural gas and petroleum, combustion preview, butane and pentane chain isomers, and physical gradation.

Use these quick-check IDs and correct values:

| ID | Correct | Tested idea |
|---|---|---|
| `b1-q1` | C | Alkane general formula |
| `b1-q2` | B | Butane and 2-methylpropane are chain isomers |
| `b1-q3` | A | Alkanes are saturated because they have only single bonds |

- [ ] **Step 7: Create the page, entry and HTML**

Create `Chapter12BPage.vue` with provider, shell, hero and `LessonOne`.

Create `src/entries/chapter-12b.js`:

```js
import { createApp } from 'vue'
import Chapter12BPage from '../pages/Chapter12BPage.vue'
import '../styles/main.css'

createApp(Chapter12BPage).mount('#app')
```

Create `chapter-12b.html` with title `Alkanes Chapter 12B | ICSE Class 10 Chemistry` and script `/src/entries/chapter-12b.js`.

- [ ] **Step 8: Wire the chapter list and Vite**

Update `src/data/chapters/index.js` to export Chapter 1, 12A and 12B in order. Update the Vite input map with `chapter12b: resolve(root, 'chapter-12b.html')`.

Append to `src/styles/main.css`:

```css
#alkane-n {
  width: 100%;
  max-width: 28rem;
}
```

- [ ] **Step 9: Run the 12B and landing tests**

Run: `npm run test:e2e -- tests/chapter-12b.spec.js tests/landing.spec.js`
Expected: PASS. Landing now shows three cards.

- [ ] **Step 10: Checkpoint**

Run: `npm run build`
Expected: `dist/chapter-12b.html` exists. Commit only if authorised:

```bash
git add chapter-12b.html vite.config.js src tests
git commit -m "feat: add chapter 12B shell and alkane family"
```

---

### Task 9: 12B preparation, combustion and substitution

**Files:**
- Create: `src/data/chapter-12b/preparations.js`
- Create: `src/data/chapter-12b/reactions.js`
- Create: `src/components/chapters/chapter-12b/LessonTwo.vue`
- Create: `src/components/chapters/chapter-12b/LessonThree.vue`
- Create: `src/components/chapters/chapter-12b/GasPrepLab.vue`
- Create: `src/components/chapters/chapter-12b/ChlorinationLab.vue`
- Create: `src/components/chapters/chapter-12b/CombustionLab.vue`
- Modify: `src/data/chapters/chapter-12b.js`
- Modify: `src/pages/Chapter12BPage.vue`
- Modify: `src/styles/main.css`
- Modify: `tests/chapter-12b.spec.js`

**Interfaces:**
- Produces:
  - `GasPrepLab` with `#gas-route`
  - `ChlorinationLab` with `#chlorination-next`
  - `CombustionLab` with `#combustion-mode`
  - quick-check IDs `b2-q1`…`b2-q3`, `b3-q1`…`b3-q3`

- [ ] **Step 1: Write the failing lab tests**

Add to `tests/chapter-12b.spec.js`:

```js
test('gas preparation lab shows the methane route and Wurtz limitation', async ({ page }) => {
  const lab = page.locator('#gas-prep')
  await lab.locator('#gas-route').selectOption('methane-acetate')
  await expect(lab).toContainText('Sodium ethanoate')
  await expect(lab).toContainText('CaO')
  await expect(lab).toContainText('CH₄')
  await expect(lab).toContainText('Na₂CO₃')

  await lab.locator('#gas-route').selectOption('wurtz')
  await expect(lab).toContainText('dry ether')
  await expect(lab).toContainText('even number')
})

test('chlorination lab steps from methane to tetrachloromethane', async ({ page }) => {
  const lab = page.locator('#chlorination')
  await expect(lab).toContainText('CH3Cl')
  await lab.locator('#chlorination-next').click()
  await expect(lab).toContainText('CH2Cl2')
  await lab.locator('#chlorination-next').click()
  await expect(lab).toContainText('CHCl3')
  await lab.locator('#chlorination-next').click()
  await expect(lab).toContainText('CCl4')
  await expect(lab).toContainText('HCl')
})

test('combustion lab switches between complete and incomplete products', async ({ page }) => {
  const lab = page.locator('#combustion')
  await lab.locator('#combustion-mode').selectOption('complete')
  await expect(lab).toContainText('CO₂')
  await lab.locator('#combustion-mode').selectOption('incomplete')
  await expect(lab).toContainText('CO')
  await lab.locator('#combustion-mode').selectOption('limited')
  await expect(lab).toContainText('soot')
})
```

- [ ] **Step 2: Run them to verify they fail**

Run: `npm run test:e2e -- tests/chapter-12b.spec.js`
Expected: FAIL because lessons 2–3 and the labs do not exist.

- [ ] **Step 3: Create the preparation data**

Create `src/data/chapter-12b/preparations.js` with six routes:

| id | gas | equation | conditions |
|---|---|---|---|
| `methane-acetate` | methane | `CH₃COONa + NaOH → Na₂CO₃ + CH₄↑` | CaO, about 300°C |
| `ethane-propanoate` | ethane | `C₂H₅COONa + NaOH → Na₂CO₃ + C₂H₆↑` | CaO, about 300°C |
| `methane-iodide` | methane | `CH₃I + 2[H] → CH₄ + HI` | Zn and dilute HCl, or Zn/Cu couple |
| `ethane-bromide` | ethane | `C₂H₅Br + 2[H] → C₂H₆ + HBr` | Zn and dilute HCl, or Zn/Cu couple |
| `methane-carbide` | methane | `Al₄C₃ + 12H₂O → 3CH₄ + 4Al(OH)₃` | room temperature |
| `wurtz` | ethane | `2CH₃I + 2Na → C₂H₆ + 2NaI` | dry ether |

Each route includes `label`, `reactants`, `conditions`, `gas`, `equation`, `collection` and `note`. The Wurtz note must say it gives even-carbon alkanes and cannot prepare methane.

- [ ] **Step 4: Create the reaction data**

Create `src/data/chapter-12b/reactions.js`:

```js
export const chlorinationSteps = [
  { step: 1, equation: 'CH₄ + Cl₂ → CH₃Cl + HCl', product: 'Chloromethane', productFormula: 'CH3Cl', note: 'One hydrogen is replaced by chlorine.' },
  { step: 2, equation: 'CH₃Cl + Cl₂ → CH₂Cl₂ + HCl', product: 'Dichloromethane', productFormula: 'CH2Cl2', note: 'A second hydrogen is replaced.' },
  { step: 3, equation: 'CH₂Cl₂ + Cl₂ → CHCl₃ + HCl', product: 'Trichloromethane (chloroform)', productFormula: 'CHCl3', note: 'A third hydrogen is replaced.' },
  { step: 4, equation: 'CHCl₃ + Cl₂ → CCl₄ + HCl', product: 'Tetrachloromethane (carbon tetrachloride)', productFormula: 'CCl4', note: 'All four hydrogens have now been replaced.' }
]

export const combustionModes = [
  { id: 'complete', label: 'Sufficient oxygen', equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O', products: 'Carbon dioxide and water', observation: 'Burns with a non-sooty flame and releases a large amount of heat.' },
  { id: 'incomplete', label: 'Insufficient oxygen', equation: '2CH₄ + 3O₂ → 2CO + 4H₂O', products: 'Carbon monoxide and water', observation: 'Carbon monoxide is poisonous and is formed when oxygen is insufficient.' },
  { id: 'limited', label: 'Very limited oxygen', equation: 'CH₄ + O₂ → C + 2H₂O', products: 'Soot (carbon) and water', observation: 'A sooty flame and black carbon particles are observed.' }
]

export const ethaneCombustion = [
  { label: 'Complete', equation: '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O' },
  { label: 'Incomplete', equation: '2C₂H₆ + 5O₂ → 4CO + 6H₂O' }
]
```

- [ ] **Step 5: Create the three labs**

- `GasPrepLab.vue`: `id="gas-prep"`, `#gas-route` select, output with reactants, conditions, gas, equation, collection and note.
- `ChlorinationLab.vue`: `id="chlorination"`, current equation/product, step counter, `#chlorination-next` button and reset. Start at step 1 (`CH3Cl`). After each click, advance one step. At step 4 show `CCl4`.
- `CombustionLab.vue`: `id="combustion"`, `#combustion-mode` select, equation, products and observation. Use the exact mode IDs `complete`, `incomplete`, `limited`.

- [ ] **Step 6: Create Lessons 2 and 3**

Lesson 2 teaches occurrence, greenhouse context, tetrahedral methane, preparation routes and equations, physical properties, aluminium carbide and the Wurtz limitation. Include `GasPrepLab`.

Lesson 3 teaches complete and incomplete combustion, carbon monoxide/soot safety, chlorination conditions and successive products, ethane’s parallel reaction, fractional distillation separation and uses. Include `ChlorinationLab` and `CombustionLab`.

Use these quick-check IDs and correct values:

| ID | Correct | Tested idea |
|---|---|---|
| `b2-q1` | B | Methane from sodium ethanoate |
| `b2-q2` | C | Fire-damp is methane |
| `b2-q3` | A | Wurtz cannot prepare methane |
| `b3-q1` | D | Complete combustion products |
| `b3-q2` | B | Chlorination condition |
| `b3-q3` | A | One-chlorine substitution product |

- [ ] **Step 7: Wire lessons and styles**

Add lessons 2 and 3 to `chapter-12b.js` with their check IDs, and restore the full three-node `hero.conceptMap`. Import and render `LessonTwo` and `LessonThree` in `Chapter12BPage.vue` after `LessonOne`.

Append to `src/styles/main.css`:

```css
.formula {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 1.05rem;
  overflow-wrap: anywhere;
}

#chlorination .formula {
  padding: 0.75rem;
  border-left: 3px solid var(--amber);
  background: var(--paper);
}
```

- [ ] **Step 8: Run the 12B tests**

Run: `npm run test:e2e -- tests/chapter-12b.spec.js`
Expected: PASS including all three labs.

- [ ] **Step 9: Checkpoint**

Run: `npm run build`
Expected: build succeeds. Commit only if authorised:

```bash
git add src tests
git commit -m "feat: add 12B preparation, combustion and substitution"
```

---

### Task 10: 12B memory, revision and assessment

**Files:**
- Create: `src/data/chapter-12b/flashcards.js`
- Create: `src/components/chapters/chapter-12b/MemoryWorkshop.vue`
- Create: `src/components/chapters/chapter-12b/RevisionCentre.vue`
- Create: `src/data/questions/chapter-12b.json`
- Modify: `src/data/chapters/chapter-12b.js`
- Modify: `src/pages/Chapter12BPage.vue`
- Modify: `tests/chapter-12b.spec.js`

**Interfaces:**
- Consumes: existing `Flashcards`, `Assessment`, `PerformanceReport`.
- Produces: 20-question, 34-mark bank with IDs `BQ1`–`BQ20` and outcomes `B1`–`B3`.

- [ ] **Step 1: Write the failing assessment test**

Add to `tests/chapter-12b.spec.js`:

```js
test('12B assessment submits, self-marks, persists and resets', async ({ page }) => {
  page.on('dialog', (dialog) => dialog.accept())

  await page.locator('#BQ18').fill('Methane is prepared by heating sodium ethanoate with soda lime.')
  await page.getByRole('button', { name: 'Submit assessment' }).click()
  await expect(page.locator('#assessment-summary')).toBeVisible()
  await expect(page.locator('.score-big')).toContainText('/ 34')

  await page.locator('#BQ18-self').selectOption('3')
  await expect(page.locator('.score-big')).toContainText('3 / 34')

  await page.reload()
  await expect(page.locator('.score-big')).toContainText('3 / 34')

  await page.getByRole('button', { name: 'Reset answers' }).click()
  await expect(page.locator('.assessment-status')).toContainText('0 of 20 answered')
  await expect(page.locator('#assessment-summary')).toHaveCount(0)
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npm run test:e2e -- tests/chapter-12b.spec.js`
Expected: FAIL because there is no 12B assessment.

- [ ] **Step 3: Create the 20-question bank**

Create `src/data/questions/chapter-12b.json` with exactly these IDs, outcomes, types and marks:

| ID | Outcome | Type | Marks | Tested idea |
|---|---|---|---|---|
| BQ1 | B1 | single | 1 | Alkane general formula |
| BQ2 | B1 | single | 1 | Saturated meaning |
| BQ3 | B1 | single | 1 | Butane isomer count |
| BQ4 | B1 | single | 1 | Natural gas source |
| BQ5 | B2 | single | 1 | Methane from sodium ethanoate |
| BQ6 | B2 | single | 1 | Fire-damp |
| BQ7 | B2 | single | 1 | Tetrahedral methane |
| BQ8 | B3 | single | 1 | Complete combustion product |
| BQ9 | B1 | fill | 1 | General formula |
| BQ10 | B2 | fill | 1 | Gas from sodium propanoate |
| BQ11 | B2 | fill | 1 | Wurtz solvent |
| BQ12 | B3 | fill | 1 | Substitution condition |
| BQ13 | B2 | multiple | 2 | Valid methane preparation routes |
| BQ14 | B3 | multiple | 2 | Incomplete-combustion products and hazards |
| BQ15 | B1 | truefalse | 2 | All alkanes are saturated (true, justify) |
| BQ16 | B3 | truefalse | 2 | Chlorination is addition (false, justify) |
| BQ17 | B2 | match | 4 | Match preparation route to gas |
| BQ18 | B2 | short | 3 | Describe methane preparation with equation |
| BQ19 | B3 | short | 3 | Explain complete vs incomplete combustion |
| BQ20 | B3 | long | 4 | Preparation, combustion and substitution of methane |

Use the same JSON shape as `chapter-12a.json`. Every item needs `explanation` and `misconception`. True/false items need `autoMarks: 1`, `justify: true`, `modelAnswer` and `markingPoints`. The long item needs `modelAnswer` and `markingPoints`.

- [ ] **Step 4: Create 12B flashcards and memory/revision**

Create 12 flashcards covering the general formula, saturation, sources, butane/pentane isomers, methane occurrence, tetrahedral structure, the two soda-lime preparations, reduction routes, Wurtz, complete/incomplete combustion, chlorination and uses.

Create `MemoryWorkshop.vue` with `id="memory"` and a reaction map:

- Alkane + oxygen → complete: CO₂ + H₂O; incomplete: CO or C + H₂O.
- Alkane + chlorine/UV → substituted product + HCl.
- Preparation route → gas produced.

Include `<Flashcards :cards="flashcards" />`. No forced acrostic.

Create `RevisionCentre.vue` with `id="revision"`, the rapid sheet, equation table, preparation comparison, common mistakes and review questions from spec section 7.9.

- [ ] **Step 5: Wire features, components and bank**

In `chapter-12b.js`, import the question JSON and flashcards, replace `questions: []`, and set `features` to `{ memory: true, revision: true, assessment: true }`.

Import and render `MemoryWorkshop`, `RevisionCentre` and `Assessment` after `LessonThree` in `Chapter12BPage.vue`.

- [ ] **Step 6: Run the 12B tests**

Run: `npm run test:e2e -- tests/chapter-12b.spec.js`
Expected: PASS with `/ 34` and `0 of 20 answered`.

- [ ] **Step 7: Checkpoint**

Run: `npm run build`
Expected: build succeeds. Commit only if authorised:

```bash
git add src tests
git commit -m "feat: add 12B memory, revision and assessment"
```

---

### Task 11: Integration, exports, documentation and QA

**Files:**
- Modify: `scripts/export-questions.mjs`
- Modify: `scripts/validate-questions.mjs`
- Modify: `README.md`
- Modify: `AGENTS.md`
- Modify: `chapter-sources.md`
- Modify: `QA-REPORT.md`
- Create: `tests/integration.spec.js`
- Delete: `chapter-questions.json` after the new exports exist

**Interfaces:**
- Consumes: all three chapter configs and question banks.
- Produces:
  - `exports/chapter-1-questions.json`
  - `exports/chapter-12a-questions.json`
  - `exports/chapter-12b-questions.json`
  - passing build, e2e and validation.

- [ ] **Step 1: Write the failing integration test**

Create `tests/integration.spec.js`:

```js
import { expect, test } from '@playwright/test'

test('landing links to all three chapters', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: /Chapter 1/ })).toHaveAttribute('href', './chapter-1.html')
  await expect(page.getByRole('link', { name: /Chapter 12A/ })).toHaveAttribute('href', './chapter-12a.html')
  await expect(page.getByRole('link', { name: /Chapter 12B/ })).toHaveAttribute('href', './chapter-12b.html')
})

test('chapter progress is isolated', async ({ page }) => {
  await page.goto('/chapter-12a.html')
  for (const [id, value] of [
    ['a1-q1', 'C'],
    ['a1-q2', 'B'],
    ['a1-q3', 'D']
  ]) {
    await page.locator(`input[name="${id}"][value="${value}"]`).check()
  }
  await expect(page.locator('#progress-label')).toContainText('1 of 7 milestones')

  await page.goto('/chapter-1.html')
  await expect(page.locator('#progress-label')).toContainText('0 of 6 milestones')

  await page.goto('/chapter-12b.html')
  await expect(page.locator('#progress-label')).toContainText('0 of 4 milestones')
})

test('chapter switcher and deep links work', async ({ page }) => {
  await page.goto('/chapter-12a.html#lesson-5')
  await expect(page.locator('#lesson-5')).toBeVisible()
  await page.getByRole('navigation', { name: 'Chapter switcher' }).getByRole('link', { name: /Chapter 12B/ }).click()
  await expect(page).toHaveURL(/chapter-12b\.html$/)
  await expect(page.locator('#chapter-title')).toHaveText('Hydrocarbons: Alkanes')
})

test('required widths have no page-level horizontal overflow', async ({ page }) => {
  for (const path of ['/', '/chapter-1.html', '/chapter-12a.html', '/chapter-12b.html']) {
    for (const [width, height] of [[360, 800], [768, 1024], [1280, 900]]) {
      await page.setViewportSize({ width, height })
      await page.goto(path)
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      )
      expect(overflow, `${path} at ${width}px`).toBeLessThanOrEqual(1)
    }
  }
})
```

- [ ] **Step 2: Run it to verify the current gaps**

Run: `npm run test:e2e -- tests/integration.spec.js`
Expected: FAIL until all three pages and the switcher are present.

- [ ] **Step 2b: Wire previous/next chapter navigation**

Import the neighbouring configs in each page and pass them to `ChapterShell`:

```js
// ChapterOnePage.vue
import chapter12a from '../data/chapters/chapter-12a'
// <ChapterShell :chapter="chapter" :next="chapter12a">
```

```js
// Chapter12APage.vue
import chapterOne from '../data/chapters/chapter-1'
import chapter12b from '../data/chapters/chapter-12b'
// <ChapterShell :chapter="chapter" :previous="chapterOne" :next="chapter12b">
```

```js
// Chapter12BPage.vue
import chapter12a from '../data/chapters/chapter-12a'
// <ChapterShell :chapter="chapter" :previous="chapter12a">
```

`ChapterShell` already renders `previous.label` and `next.label` in its `Chapter switcher` navigation. Ensure the links are visible and keyboard focusable.

- [ ] **Step 3: Make the export script chapter-aware**

Update `scripts/export-questions.mjs` to loop over three sources:

```js
const chapters = [
  {
    id: 'chapter-1',
    source: 'src/data/questions/chapter-1.json',
    syllabus: 'CISCE ICSE Chemistry 2027, Unit 9.1',
    outcomes: { O1: 'Meaning and history', O2: "Carbon's central role", O3: 'Organic vs inorganic', O4: 'Everyday examples', O5: 'Importance and environment' }
  },
  {
    id: 'chapter-12a',
    source: 'src/data/questions/chapter-12a.json',
    syllabus: 'CISCE ICSE Chemistry 2027, Unit 9(ii)-(iv)',
    outcomes: {
      A1: 'Organic compounds, sources, and organic vs inorganic trends',
      A2: "Carbon's unique nature, bonding and hydrocarbon classification",
      A3: 'Structural formulae, alkyl groups and functional groups',
      A4: 'Homologous series',
      A5: 'IUPAC nomenclature',
      A6: 'Structural isomerism'
    }
  },
  {
    id: 'chapter-12b',
    source: 'src/data/questions/chapter-12b.json',
    syllabus: 'CISCE ICSE Chemistry 2027, Unit 9(v), alkanes',
    outcomes: {
      B1: 'Alkane family, sources and chain isomerism',
      B2: 'Methane and ethane: occurrence, structure, preparation and physical properties',
      B3: 'Reactions and uses of methane and ethane'
    }
  }
]
```

Keep the existing type mapping and question transformation. For each chapter, read its source, use its outcome labels and syllabus string, write `exports/${chapter.id}-questions.json`, and log the count. Create the `exports/` directory if missing.

- [ ] **Step 4: Make validation cover all exports**

Update `scripts/validate-questions.mjs` to loop over:

```js
const files = [
  'exports/chapter-1-questions.json',
  'exports/chapter-12a-questions.json',
  'exports/chapter-12b-questions.json'
]
```

Compile the schema once. Validate every question in every file. Print the file name and count. Exit non-zero if any file is missing or any question fails. Remove `chapter-questions.json` from the repository after the new exports are generated.

- [ ] **Step 5: Run export and validation**

Run:

```bash
npm run export:questions
npm run validate:questions
```

Expected: three exports are written; validation reports 24, 30 and 20 questions and exits 0.

- [ ] **Step 6: Update documentation**

Update `README.md`:

- Three chapters and their URLs.
- Multi-page structure.
- Chapter storage keys.
- New script output paths.
- `npm run build`, `npm run test:e2e`, `npm run validate:questions`.
- Scope note: 12A covers Unit 9(ii)–(iv); 12B covers alkanes only.
- Original-practice-question disclaimer.

Update `AGENTS.md`:

- Current chapter section now covers all three.
- Structure lists the new pages, entries, data folders and tests.
- Storage keys.
- Commands and verification unchanged.
- Content rules add 12A/12B scope notes.

Add a `Status: Superseded` note at the top of `docs/superpowers/specs/2026-11-20-organic-chemistry-chapter-2-design.md`, pointing to the new 12A/12B spec. Do not delete the old spec.

Update `chapter-sources.md`:

- Add supplied 12A pages (book pp. 194–209) and 12B pages (book pp. 210–216).
- Record that the pages were supplied scans.
- Keep the no-prescribed-textbook disclaimer.
- Note that metamerism, catalytic oxidation and slow combustion were omitted as book-marked non-syllabus.

Update `QA-REPORT.md` with actual build, test, validation, responsive and accessibility results. Do not claim untested items.

- [ ] **Step 7: Run the full verification**

Run:

```bash
npm run build
npm run test:e2e
npm run validate:questions
```

Expected: all pass. Inspect `dist/` for four HTML files. Open the production preview and check all three chapters, chapter switching, assessment reset and mobile layout.

- [ ] **Step 8: Final checkpoint**

Run: `git status --short`
Expected: only intended files. Commit only if authorised:

```bash
git add README.md AGENTS.md chapter-sources.md QA-REPORT.md scripts exports src tests index.html chapter-1.html chapter-12a.html chapter-12b.html vite.config.js
git commit -m "feat: add chapters 12A and 12B with multi-chapter navigation"
```

---

## Plan Self-Review

**Spec coverage:**

- 12A scope and six lessons: Tasks 3–7.
- 12A labs, memory, revision, assessment: Tasks 4–7.
- 12B scope and three lessons: Tasks 8–10.
- 12B labs, memory, revision, assessment: Tasks 9–10.
- Root chapter list and three pages: Tasks 2, 3, 8, 11.
- Progress isolation and storage keys: Tasks 1 and 11.
- Question exports and validation: Task 11.
- Documentation and QA: Task 11.
- Accessibility, responsive and console checks: Tasks 3–11 plus Task 11 integration test.

**Placeholder scan:** No TBD or TODO markers. Content tasks point to exact spec sections and provide the required data tables, equations and test expectations.

**Type consistency:** The plan consistently uses `chapter` configs, `features` flags, `createChapterProgress`, `useChapter`, question IDs `AQ`/`BQ`, and quick-check IDs `a1`–`a6`/`b1`–`b3`. Storage keys match the spec.


