<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useChapter } from '../composables/useChapter'
import SourcesPanel from './SourcesPanel.vue'

const props = defineProps({
  chapter: { type: Object, required: true },
  previous: { type: Object, default: null },
  next: { type: Object, default: null }
})

const { progress } = useChapter()
const { completedIds, assessmentSubmitted, progressPercent, milestonesTotal, resetAll } = progress

const activeId = ref('orientation')
let ticking = false

const navItems = computed(() => [
  { id: 'orientation', label: 'Orientation' },
  ...props.chapter.lessons.map((lesson) => ({
    id: lesson.id,
    label: `${lesson.number}. ${lesson.navLabel}`,
    lesson: true
  })),
  ...(props.chapter.features.memory ? [{ id: 'memory', label: 'Memory workshop' }] : []),
  ...(props.chapter.features.revision ? [{ id: 'revision', label: 'Revision centre' }] : []),
  ...(props.chapter.features.assessment
    ? [{ id: 'assessment', label: 'Assessment', milestone: true }]
    : []),
  { id: 'sources', label: 'Sources and scope' }
])

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
  let current = navItems.value[0].id

  for (const item of navItems.value) {
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
      <span class="brand">ICSE Class 10 · {{ chapter.subjectLabel || 'Chemistry' }}</span>
      <span class="header-meta">{{ chapter.title }} · {{ chapter.label }}</span>
      <nav class="chapter-switcher" aria-label="Chapter switcher">
        <a href="./">All chapters</a>
        <a v-if="previous" :href="previous.href">{{ previous.label }}</a>
        <a v-if="next" :href="next.href">{{ next.label }}</a>
      </nav>
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
      <slot />
      <SourcesPanel :sources="chapter.sources" />
      <nav class="chapter-end-nav" aria-label="Chapter navigation">
        <a href="./">All chapters</a>
        <a v-if="previous" :href="previous.href">{{ previous.label }}</a>
        <a v-if="next" :href="next.href">{{ next.label }}</a>
      </nav>
    </main>
  </div>

  <footer class="site-footer">
    <div class="site-footer__inner">
      <span>ICSE Class 10 {{ chapter.subjectLabel || 'Chemistry' }} · {{ chapter.title }} {{ chapter.label }}</span>
      <span>Original practice questions. Not a board past paper.</span>
    </div>
  </footer>
</template>
