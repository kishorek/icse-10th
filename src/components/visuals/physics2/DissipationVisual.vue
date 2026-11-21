<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const progress = reactive({ value: 0 })
const status = ref('Ready')
let run = null
let reduced = false
const initialHeight = 160
const ground = 240

const height = computed(() => {
  const p = progress.value
  const decay = Math.exp(-2.3 * p)
  return initialHeight * decay * Math.abs(Math.cos(p * Math.PI * 4))
})
const ballY = computed(() => ground - height.value - 10)
const mechanical = computed(() => 100 * Math.exp(-2.3 * progress.value))
const lost = computed(() => 100 - mechanical.value)
const summary = computed(
  () => `Mechanical energy falls from 100 units to ${mechanical.value.toFixed(0)}. Heat and sound rise to ${lost.value.toFixed(0)}. The total stays 100.`
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
  run = animate(progress, { value: 1, duration: 2200, easing: 'easeInOutQuad' })
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

function reset() {
  run?.pause()
  run?.revert?.()
  progress.value = 0
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
  <div class="dissipation">
    <svg viewBox="0 0 720 300" role="img" aria-labelledby="dis-title dis-desc">
      <title id="dis-title">A bouncing ball loses mechanical energy to heat and sound</title>
      <desc id="dis-desc">{{ summary }}</desc>
      <line x1="70" y1="240" x2="390" y2="240" stroke="var(--line)" stroke-width="3" />
      <circle cx="210" :cy="ballY" r="16" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
      <path d="M 70 258 Q 210 286 350 258" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4" />

      <g transform="translate(450 44)">
        <text x="0" y="0" class="small">Energy account</text>
        <rect x="0" y="14" width="200" height="16" rx="4" fill="var(--line)" />
        <rect x="0" y="14" :width="mechanical * 2" height="16" rx="4" fill="var(--teal)" />
        <text x="0" y="50" class="small">Mechanical: {{ mechanical.toFixed(0) }}</text>

        <rect x="0" y="70" width="200" height="16" rx="4" fill="var(--line)" />
        <rect x="0" y="70" :width="lost * 2" height="16" rx="4" fill="var(--amber)" />
        <text x="0" y="106" class="small">Heat + sound: {{ lost.toFixed(0) }}</text>

        <line x1="0" y1="126" x2="200" y2="126" stroke="var(--ink-soft)" stroke-width="2" />
        <text x="0" y="148" class="small">Total: 100 units throughout</text>
      </g>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Predict: where does the missing mechanical energy go?</strong> {{ summary }}
      The energy is dissipated, not destroyed.
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.dissipation { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.dissipation svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.small { font-family: var(--sans); font-size: 13px; fill: var(--ink-soft); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
