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
