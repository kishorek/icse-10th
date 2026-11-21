<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const mass = 2
const initialSpeed = 1
const force = 6
const distance = 4
const progress = reactive({ value: 0 })
const status = ref('Ready')
let run = null
let reduced = false

const acceleration = force / mass
const initialK = 0.5 * mass * initialSpeed ** 2
const finalSpeedSquared = initialSpeed ** 2 + 2 * acceleration * distance
const finalSpeed = Math.sqrt(finalSpeedSquared)
const finalK = 0.5 * mass * finalSpeedSquared
const work = force * distance
const currentDistance = computed(() => distance * progress.value)
const currentWork = computed(() => force * currentDistance.value)
const currentK = computed(() => initialK + currentWork.value)
const deltaK = computed(() => currentK.value - initialK)
const blockX = computed(() => 120 + currentDistance.value * 62)
const summary = computed(
  () => `Force ${force} N acts over ${distance} m. Work = ${work.toFixed(0)} J. Initial K = ${initialK.toFixed(1)} J, final K = ${finalK.toFixed(1)} J, so ΔK = ${(finalK - initialK).toFixed(0)} J.`
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
  run = animate(progress, { value: 1, duration: 1700, easing: 'easeInOutQuad' })
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
  <div class="work-energy">
    <svg viewBox="0 0 720 300" role="img" aria-labelledby="we-title we-desc">
      <title id="we-title">Work-energy theorem for an accelerating block</title>
      <desc id="we-desc">{{ summary }}</desc>
      <defs>
        <marker id="we-force" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#a05f0c" />
        </marker>
      </defs>

      <line x1="70" y1="216" x2="650" y2="216" stroke="var(--line)" stroke-width="2" />
      <line x1="120" y1="238" x2="120" y2="254" stroke="var(--ink-soft)" stroke-width="2" />
      <line x1="368" y1="238" x2="368" y2="254" stroke="var(--ink-soft)" stroke-width="2" />
      <line x1="120" y1="248" x2="368" y2="248" stroke="var(--teal)" stroke-width="2" marker-end="url(#we-force)" />
      <text x="244" y="274" text-anchor="middle" class="small">s = {{ distance }} m</text>

      <rect :x="blockX - 34" y="164" width="68" height="52" rx="7" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
      <text :x="blockX" y="196" text-anchor="middle" class="block">m</text>
      <line :x1="blockX - 36" y1="150" :x2="blockX - 120" y2="150" stroke="var(--amber)" stroke-width="5" marker-end="url(#we-force)" />
      <text :x="blockX - 126" y="136" text-anchor="end" class="small">F = {{ force }} N</text>

      <rect x="440" y="44" width="238" height="126" rx="8" fill="#fbf8f1" stroke="var(--line)" />
      <text x="458" y="70" class="small">Work done so far</text>
      <rect x="458" y="80" width="190" height="13" rx="3" fill="var(--line)" />
      <rect x="458" y="80" :width="(currentWork / work) * 190" height="13" rx="3" fill="var(--teal)" />
      <text x="458" y="114" class="big">{{ currentWork.toFixed(1) }} J</text>
      <text x="458" y="138" class="small">Change in K = {{ deltaK.toFixed(1) }} J</text>
      <text x="458" y="158" class="small">W = ΔK</text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Predict: with double the force over the same distance, ΔK doubles.</strong> {{ summary }}
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.work-energy { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.work-energy svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.small, .big, .block { font-family: var(--sans); }
.small { font-size: 12px; fill: var(--ink-soft); }
.big { font-size: 22px; font-weight: 700; fill: var(--teal-dark); }
.block { font-size: 20px; font-weight: 700; fill: var(--teal-dark); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
