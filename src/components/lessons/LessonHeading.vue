<script setup>
import { computed } from 'vue'
import { lessons } from '../../data/chapter'
import { useProgress } from '../../composables/useProgress'

const props = defineProps({
  id: { type: String, required: true },
  number: { type: Number, required: true },
  title: { type: String, required: true },
  objective: { type: String, required: true }
})

const { state, completedIds } = useProgress()
const lesson = lessons.find((item) => item.id === props.id)
const complete = computed(() => completedIds.value.has(props.id))
const started = computed(() =>
  lesson ? lesson.checkIds.some((checkId) => Boolean(state.checks[checkId])) : false
)
</script>

<template>
  <header class="lesson-head">
    <p class="lesson-kicker">Lesson {{ number }}</p>
    <h2 :id="`${id}-title`">{{ title }}</h2>
    <p class="lesson-objective">{{ objective }}</p>
    <span class="lesson-status" :class="{ 'is-complete': complete }">
      {{ complete ? 'Complete' : started ? 'In progress' : 'Not started' }}
    </span>
  </header>
</template>
