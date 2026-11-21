<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { createTimeline } from 'animejs'

const props = defineProps({
  steps: { type: Array, required: true },
  note: { type: String, default: '' }
})

const stepEls = ref([])
const status = ref('Ready')
let timeline = null

function buildTimeline() {
  if (!stepEls.value.length) return
  timeline = createTimeline({
    autoplay: false,
    defaults: { duration: 520, easing: 'easeOutQuad' }
  })
  stepEls.value.forEach((element, index) => {
    timeline.add(
      element,
      { opacity: [0.25, 1], translateY: [10, 0] },
      index * 420
    )
  })
}

function play() {
  if (!timeline) return
  timeline.play()
  status.value = 'Playing'
}

function pause() {
  if (!timeline) return
  timeline.pause()
  status.value = 'Paused'
}

function restart() {
  if (!timeline) return
  timeline.restart()
  status.value = 'Playing from the start'
}

onMounted(() => {
  buildTimeline()
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    if (timeline) { timeline.progress = 1; timeline.pause() }
    status.value = 'Final state shown because reduced motion is on'
  }
})

onBeforeUnmount(() => {
  timeline?.pause()
  timeline?.revert?.()
  timeline = null
})
</script>

<template>
  <div class="flow-visual">
    <ol class="flow-steps">
      <li v-for="(step, index) in steps" :key="`${step.label}-${index}`" ref="stepEls" class="flow-step">
        <span class="flow-step__number" aria-hidden="true">{{ index + 1 }}</span>
        <div>
          <h4>{{ step.label }}</h4>
          <p v-if="step.equation" class="formula">{{ step.equation }}</p>
          <p v-if="step.detail" class="flow-step__detail">{{ step.detail }}</p>
        </div>
      </li>
    </ol>
    <p v-if="note" class="flow-note">{{ note }}</p>
    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
    </div>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.flow-steps {
  display: grid;
  gap: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.flow-step {
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 0.75rem;
  align-items: start;
  padding: 0.85rem 1rem;
  border: 1px solid var(--line, #d7d0c2);
  border-left: 4px solid var(--teal);
  border-radius: 0.65rem;
  background: var(--paper-2);
}
.flow-step__number {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--teal);
  color: #fff;
  font-weight: 700;
}
.flow-step h4 {
  margin: 0 0 0.25rem;
  font-size: 1rem;
}
.flow-step p {
  margin: 0.2rem 0;
}
.flow-step__detail {
  font-size: 0.92rem;
  color: var(--ink-soft);
}
.flow-note {
  margin-top: 0.8rem;
  font-size: 0.92rem;
  color: var(--ink-soft);
}
</style>
