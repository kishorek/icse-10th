<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const phase = reactive({ value: 0 })
const status = ref('Ready')
let run = null
let reduced = false
const length = 130
const amplitude = (35 * Math.PI) / 180
const pivot = { x: 250, y: 52 }

const angle = computed(() => amplitude * Math.cos(phase.value))
const bob = computed(() => ({
  x: pivot.x + length * Math.sin(angle.value),
  y: pivot.y + length * Math.cos(angle.value)
}))
const maxHeight = computed(() => length * (1 - Math.cos(amplitude)))
const height = computed(() => length * (1 - Math.cos(angle.value)))
const u = computed(() => 100 * (height.value / maxHeight.value))
const k = computed(() => 100 - u.value)
const summary = computed(() => {
  const extreme = Math.abs(angle.value) > amplitude - 0.05
  if (extreme) return 'At the extreme position, the bob momentarily stops: U is maximum and K is zero.'
  return `Between the extremes, U = ${u.value.toFixed(0)} units and K = ${k.value.toFixed(0)} units. Their total stays 100.`
})

function play() {
  run?.pause()
  run?.revert?.()
  if (reduced) {
    phase.value = 0
    status.value = 'Final state shown because reduced motion is on'
    return
  }
  if (phase.value >= Math.PI * 2 - 0.01) phase.value = 0
  run = animate(phase, { value: Math.PI * 2, duration: 2500, easing: 'linear' })
  status.value = 'Playing'
}

function pause() {
  run?.pause()
  status.value = 'Paused'
}

function restart() {
  run?.pause()
  run?.revert?.()
  phase.value = 0
  play()
}

function reset() {
  run?.pause()
  run?.revert?.()
  phase.value = 0
  status.value = 'Reset'
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) status.value = 'Final state shown because reduced motion is on'
}

onBeforeUnmount(() => {
  run?.pause()
  run?.revert?.()
  run = null
})
</script>

<template>
  <div class="pendulum">
    <svg viewBox="0 0 720 310" role="img" aria-labelledby="pen-title pen-desc">
      <title id="pen-title">Simple pendulum and conservation of energy</title>
      <desc id="pen-desc">{{ summary }}</desc>
      <line x1="150" y1="52" x2="350" y2="52" stroke="var(--teal-dark)" stroke-width="4" />
      <line :x1="pivot.x" :y1="pivot.y" :x2="bob.x" :y2="bob.y" stroke="var(--ink-soft)" stroke-width="2" />
      <circle :cx="bob.x" :cy="bob.y" r="16" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
      <line x1="250" y1="52" x2="250" y2="196" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4" />
      <path d="M 186 54 Q 250 250 314 54" fill="none" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4" />
      <text x="330" y="194" class="small">mean position</text>

      <g transform="translate(430 44)">
        <text x="0" y="0" class="small">Energy through the swing</text>
        <rect x="0" y="16" width="200" height="16" rx="4" fill="var(--line)" />
        <rect x="0" y="16" :width="u * 2" height="16" rx="4" fill="var(--teal)" />
        <text x="0" y="52" class="small">U = {{ u.toFixed(0) }} units</text>
        <rect x="0" y="72" width="200" height="16" rx="4" fill="var(--line)" />
        <rect x="0" y="72" :width="k * 2" height="16" rx="4" fill="var(--amber)" />
        <text x="0" y="108" class="small">K = {{ k.toFixed(0) }} units</text>
        <line x1="0" y1="128" x2="200" y2="128" stroke="var(--ink-soft)" stroke-width="2" />
        <text x="0" y="150" class="small">Total = 100 units</text>
      </g>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Predict: the bob moves fastest at the mean position.</strong> {{ summary }}
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.pendulum { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.pendulum svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.small { font-family: var(--sans); font-size: 12px; fill: var(--ink-soft); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
