<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { lessons } from './data/chapter'
import { useProgress } from './composables/useProgress'
import ChapterHero from './components/ChapterHero.vue'
import LessonOne from './components/lessons/LessonOne.vue'
import LessonTwo from './components/lessons/LessonTwo.vue'
import LessonThree from './components/lessons/LessonThree.vue'
import LessonFour from './components/lessons/LessonFour.vue'
import LessonFive from './components/lessons/LessonFive.vue'
import MemoryWorkshop from './components/MemoryWorkshop.vue'
import RevisionCentre from './components/RevisionCentre.vue'
import Assessment from './components/Assessment.vue'

const {
  completedIds,
  assessmentSubmitted,
  progressPercent,
  milestonesTotal,
  resetAll
} = useProgress()

const activeId = ref('orientation')
let ticking = false

const navItems = [
  { id: 'orientation', label: 'Orientation' },
  ...lessons.map((lesson) => ({
    id: lesson.id,
    label: `${lesson.number}. ${lesson.navLabel}`,
    lesson: true
  })),
  { id: 'memory', label: 'Memory workshop' },
  { id: 'revision', label: 'Revision centre' },
  { id: 'assessment', label: 'Assessment', milestone: true },
  { id: 'sources', label: 'Sources and scope' }
]

const completedCount = computed(
  () => completedIds.value.size + (assessmentSubmitted.value ? 1 : 0)
)

function isNavComplete(item) {
  if (item.lesson) return completedIds.value.has(item.id)
  if (item.milestone) return assessmentSubmitted.value
  return false
}

function navLabel(item) {
  return isNavComplete(item) ? `${item.label} (completed)` : item.label
}

function confirmReset() {
  const ok = window.confirm(
    'Reset all lesson progress, quick-check answers and assessment answers? This cannot be undone.'
  )
  if (ok) resetAll()
}

function updateActive() {
  const marker = window.scrollY + window.innerHeight * 0.28
  let current = navItems[0].id

  for (const item of navItems) {
    const section = document.getElementById(item.id)
    if (!section) continue
    const top = section.getBoundingClientRect().top + window.scrollY
    if (top <= marker) current = item.id
  }

  activeId.value = current
}

function handleScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    updateActive()
    ticking = false
  })
}

onMounted(() => {
  updateActive()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to chapter content</a>

  <header class="site-header">
    <div class="site-header__inner">
      <span class="brand">ICSE Class 10 · Chemistry</span>
      <span class="header-meta">Organic Chemistry · Chapter 1</span>
    </div>
  </header>

  <div class="layout">
    <nav id="chapter-nav" class="chapter-nav" aria-label="Chapter sections">
      <div class="progress-block">
        <span id="progress-label" class="progress-label">
          {{ completedCount }} of {{ milestonesTotal }} milestones · {{ progressPercent }}%
        </span>
        <div
          class="progress-track"
          role="progressbar"
          aria-label="Chapter progress"
          aria-valuemin="0"
          aria-valuemax="100"
          :aria-valuenow="progressPercent"
        >
          <div id="progress-fill" class="progress-fill" :style="{ width: `${progressPercent}%` }"></div>
        </div>
      </div>

      <ul class="nav-list">
        <li v-for="item in navItems" :key="item.id">
          <a
            class="nav-link"
            :href="`#${item.id}`"
            :aria-current="activeId === item.id ? 'true' : undefined"
            :aria-label="navLabel(item)"
          >
            <span>{{ item.label }}</span>
            <span v-if="isNavComplete(item)" class="nav-check" aria-hidden="true">✓</span>
          </a>
        </li>
      </ul>

      <button id="reset-progress" type="button" class="btn btn-ghost btn-small" @click="confirmReset">
        Reset progress
      </button>
    </nav>

    <main id="main-content" class="chapter">
      <ChapterHero />
      <LessonOne />
      <LessonTwo />
      <LessonThree />
      <LessonFour />
      <LessonFive />
      <MemoryWorkshop />
      <RevisionCentre />
      <Assessment />

      <section id="sources" class="sources" aria-labelledby="sources-title">
        <h2 id="sources-title">Sources and scope</h2>
        <p>
          This chapter follows the CISCE ICSE Chemistry syllabus for the examination year 2027,
          Unit 9.1 introduction to organic compounds. The 2026-27 syllabus retains the same
          introduction wording. The official syllabus is published by the Council for the Indian
          School Certificate Examinations.
        </p>
        <ul>
          <li>
            <a href="https://cisce.org/regulations-and-syllabuses" target="_blank" rel="noopener">
              CISCE Regulations and Syllabuses
            </a>
          </li>
          <li>Standard chemistry references for definitions, formulae, bonding and examples.</li>
        </ul>
        <p>
          CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed.
          All examination-style questions in this chapter are original practice questions, not board
          past-paper questions. Enrichment content is labelled.
        </p>
        <p>
          Progress is stored only in this browser using localStorage. It is not synchronised across
          devices.
        </p>
      </section>
    </main>
  </div>

  <footer class="site-footer">
    <div class="site-footer__inner">
      <span>ICSE Class 10 Chemistry · Organic Chemistry Chapter 1</span>
      <span>Original practice questions. Not a board past paper.</span>
    </div>
  </footer>
</template>
