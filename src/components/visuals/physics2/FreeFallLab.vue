<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const startHeight = ref(5)
const mass = 1
const g = 10
const progress = reactive({ value: 0 })
const status = ref('Ready')
let run = null
let reduced = false

const remaining = computed(() => startHeight.value * (1 - progress.value))
const u = computed(() => mass * g * remaining.value)
const k = computed(() => mass * g * (startHeight.value - remaining.value))
const total = computed(() => mass * g * startHeight.value)
const ballY = computed(() => 48 + progress.value * 180)
const uPercent = computed(() => (total.value ? (u.value / total.value) * 100 : 0))
const kPercent = computed(() => (total.value ? (k.value / total.value) * 100 : 0))
const summary = computed(
  () => `Height ${remaining.value.toFixed(1)} m: U = ${u.value.toFixed(1)} J, K = ${k.value.toFixed(1)} J, U + K = ${total.value.toFixed(1)} J.`
)

function play() {
  run?.pause()
  run?.revert?.()
  if (reduced) {
    progress.value = 1
    status.value = 'Final state shown because reduced motion is on'
    return
  }
  if (progress.value >= 0.99) progress.value = 0
  run = animate(progress, { value: 1, duration: 1700, easing: 'easeInQuad' })
  status.value = 'Playing'
}

function pause() {
  run?.pause()
  status.value = 'Paused'
}

function restart() {
  run?.pause()
  run?.revert?.()
  progress.value = 0
  play()
}

function step() {
  run?.pause()
  progress.value = Math.min(1, Number((progress.value + 0.25).toFixed(2)))
  status.value = `Step to height ${remaining.value.toFixed(1)} m`
}

function reset() {
  run?.pause()
  run?.revert?.()
  progress.value = 0
  startHeight.value = 5
  status.value = 'Reset'
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    progress.value = 1
    status.value = 'Final state shown because reduced motion is on'
  }
}

onBeforeUnmount(() => {
  run?.pause()
  run?.revert?.()
  run = null
})
</script>

<template>
  <div class="freefall">
    <svg viewBox="0 0 720 300" role="img" aria-labelledby="ff-title ff-desc">
      <title id="ff-title">Free fall and conservation of mechanical energy</title>
      <desc id="ff-desc">{{ summary }}</desc>
      <line x1="80" y1="248" x2="370" y2="248" stroke="var(--line)" stroke-width="3" />
      <line x1="250" y1="30" x2="250" y2="248" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 4" />
      <text x="264" y="52" class="small">start</text>
      <text x="264" y="242" class="small">ground</text>
      <circle cx="250" :cy="ballY" r="14" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
      <line x1="250" :y1="ballY + 18" :x2="250" y2="244" stroke="var(--teal)" stroke-width="2" stroke-dasharray="3 3" />

      <g transform="translate(430 38)">
        <text x="0" y="0" class="small">Energy against height</text>
        <rect x="0" y="16" width="190" height="16" rx="4" fill="var(--line)" />
        <rect x="0" y="16" :width="uPercent * 1.9" height="16" rx="4" fill="var(--teal)" />
        <text x="0" y="52" class="small">U = {{ u.toFixed(1) }} J</text>
        <rect x="0" y="72" width="190" height="16" rx="4" fill="var(--line)" />
        <rect x="0" y="72" :width="kPercent * 1.9" height="16" rx="4" fill="var(--amber)" />
        <text x="0" y="108" class="small">K = {{ k.toFixed(1) }} J</text>
        <line x1="0" y1="128" x2="190" y2="128" stroke="var(--ink-soft)" stroke-width="2" />
        <text x="0" y="150" class="small">Total = {{ total.toFixed(1) }} J at every height</text>
      </g>
    </svg>

    <label class="bench-field">
      <span>Starting height: {{ startHeight }} m</span>
      <input v-model.number="startHeight" type="range" min="2" max="10" step="1" aria-label="Starting height in metres" />
    </label>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="step">Step</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Predict: at half the height, U and K are equal.</strong> {{ summary }}
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.freefall { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.freefall svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.bench-field { display: grid; gap: 0.2rem; font-size: 0.9rem; color: var(--ink-soft); }
.bench-field input { width: 100%; accent-color: var(--teal); }
.small { font-family: var(--sans); font-size: 12px; fill: var(--ink-soft); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
