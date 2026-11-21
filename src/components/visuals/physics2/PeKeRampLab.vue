<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const height = ref(5)
const mass = 2
const g = 10
const progress = reactive({ value: 0 })
const status = ref('Ready')
let run = null
let reduced = false

const top = { x: 140, y: 64 }
const bottom = { x: 550, y: 246 }
const currentHeight = computed(() => height.value * (1 - progress.value))
const u = computed(() => mass * g * currentHeight.value)
const k = computed(() => mass * g * (height.value - currentHeight.value))
const total = computed(() => mass * g * height.value)
const ball = computed(() => ({
  x: top.x + (bottom.x - top.x) * progress.value,
  y: top.y + (bottom.y - top.y) * progress.value
}))
const uPercent = computed(() => (total.value ? (u.value / total.value) * 100 : 0))
const kPercent = computed(() => (total.value ? (k.value / total.value) * 100 : 0))
const summary = computed(
  () => `Height ${currentHeight.value.toFixed(1)} m: U = ${u.value.toFixed(1)} J, K = ${k.value.toFixed(1)} J, total = ${total.value.toFixed(1)} J.`
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
  run = animate(progress, { value: 1, duration: 1600, easing: 'easeInOutQuad' })
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
  status.value = `Step to height ${currentHeight.value.toFixed(1)} m`
}

function reset() {
  run?.pause()
  run?.revert?.()
  progress.value = 0
  height.value = 5
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
  <div class="peke">
    <svg viewBox="0 0 720 320" role="img" aria-labelledby="peke-title peke-desc">
      <title id="peke-title">Potential energy changing to kinetic energy on a ramp</title>
      <desc id="peke-desc">{{ summary }}</desc>
      <line x1="80" y1="270" x2="650" y2="270" stroke="var(--line)" stroke-width="2" />
      <polygon :points="`${top.x},${top.y} ${bottom.x},${bottom.y} 80,270`" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
      <line :x1="top.x" :y1="top.y" :x2="top.x" :y2="270" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 4" />
      <text :x="top.x + 10" :y="178" class="dim">height</text>
      <circle :cx="ball.x" :cy="ball.y - 10" r="12" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
      <text x="560" y="86" class="small">U → K</text>

      <g transform="translate(470 34)">
        <text x="0" y="0" class="small">Energy</text>
        <rect x="0" y="14" width="130" height="16" rx="4" fill="var(--line)" />
        <rect x="0" y="14" :width="uPercent * 1.3" height="16" rx="4" fill="var(--teal)" />
        <text x="140" y="27" class="small">U = {{ u.toFixed(0) }} J</text>
        <rect x="0" y="42" width="130" height="16" rx="4" fill="var(--line)" />
        <rect x="0" y="42" :width="kPercent * 1.3" height="16" rx="4" fill="var(--amber)" />
        <text x="140" y="55" class="small">K = {{ k.toFixed(0) }} J</text>
        <line x1="0" y1="72" x2="130" y2="72" stroke="var(--ink-soft)" stroke-width="2" />
        <text x="140" y="78" class="small">total {{ total.toFixed(0) }} J</text>
      </g>
    </svg>

    <label class="bench-field">
      <span>Starting height: {{ height }} m</span>
      <input v-model.number="height" type="range" min="2" max="8" step="1" aria-label="Starting height in metres" />
    </label>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Release</button>
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
.peke { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.peke svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.bench-field { display: grid; gap: 0.2rem; font-size: 0.9rem; color: var(--ink-soft); }
.bench-field input { width: 100%; accent-color: var(--teal); }
.dim, .small { font-family: var(--sans); }
.dim { font-size: 12px; fill: var(--ink-soft); }
.small { font-size: 12px; fill: var(--ink-soft); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
