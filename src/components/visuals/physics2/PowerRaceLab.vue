<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const work = 5000
const timeA = 10
const timeB = ref(20)
const a = reactive({ value: 0 })
const b = reactive({ value: 0 })
let runA = null
let runB = null
let reduced = false
const status = ref('Ready')

const powerA = computed(() => work / timeA)
const powerB = computed(() => work / timeB.value)
const summary = computed(
  () => `Both cranes do ${work} J. Crane A takes ${timeA} s, so P = ${powerA.value.toFixed(0)} W. Crane B takes ${timeB.value} s, so P = ${powerB.value.toFixed(0)} W.`
)

function stop() {
  runA?.pause()
  runA?.revert?.()
  runB?.pause()
  runB?.revert?.()
  runA = null
  runB = null
}

function play() {
  stop()
  if (reduced) {
    a.value = 1
    b.value = 1
    status.value = 'Final state shown because reduced motion is on'
    return
  }
  a.value = 0
  b.value = 0
  runA = animate(a, { value: 1, duration: 1200, easing: 'easeInOutQuad' })
  runB = animate(b, {
    value: 1,
    duration: Math.max(900, (timeB.value / timeA) * 1200),
    easing: 'easeInOutQuad'
  })
  status.value = 'Playing'
}

function pause() {
  runA?.pause()
  runB?.pause()
  status.value = 'Paused'
}

function restart() {
  stop()
  a.value = 0
  b.value = 0
  play()
}

function reset() {
  stop()
  timeB.value = 20
  a.value = 0
  b.value = 0
  status.value = 'Reset'
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    a.value = 1
    b.value = 1
    status.value = 'Final state shown because reduced motion is on'
  }
}

onBeforeUnmount(stop)
</script>

<template>
  <div class="power-race">
    <svg viewBox="0 0 720 300" role="img" aria-labelledby="pr-title pr-desc">
      <title id="pr-title">Two cranes doing the same work at different rates</title>
      <desc id="pr-desc">{{ summary }}</desc>
      <defs>
        <marker id="pr-arrow" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 z" fill="#a05f0c" />
        </marker>
      </defs>

      <line x1="70" y1="250" x2="650" y2="250" stroke="var(--line)" stroke-width="2" />
      <g>
        <rect x="90" y="220" width="70" height="28" rx="4" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
        <line x1="125" y1="220" x2="125" y2="86" stroke="var(--teal-dark)" stroke-width="6" />
        <line x1="125" y1="86" x2="220" y2="86" stroke="var(--teal-dark)" stroke-width="4" />
        <line x1="210" y1="86" x2="210" y2="128" stroke="var(--ink-soft)" stroke-width="2" />
        <rect x="188" :y="128 + (1 - a.value) * 88" width="44" height="34" rx="4" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
        <text x="125" y="276" text-anchor="middle" class="small">Crane A</text>
        <text x="125" y="62" text-anchor="middle" class="big">{{ powerA.toFixed(0) }} W</text>
        <text x="268" y="76" class="small">10 s</text>
      </g>

      <g>
        <rect x="360" y="220" width="70" height="28" rx="4" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
        <line x1="395" y1="220" x2="395" y2="86" stroke="var(--teal-dark)" stroke-width="6" />
        <line x1="395" y1="86" x2="490" y2="86" stroke="var(--teal-dark)" stroke-width="4" />
        <line x1="480" y1="86" x2="480" y2="128" stroke="var(--ink-soft)" stroke-width="2" />
        <rect x="458" :y="128 + (1 - b.value) * 88" width="44" height="34" rx="4" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
        <text x="395" y="276" text-anchor="middle" class="small">Crane B</text>
        <text x="395" y="62" text-anchor="middle" class="big">{{ powerB.toFixed(0) }} W</text>
        <text x="520" y="76" class="small">{{ timeB }} s</text>
      </g>

      <text x="360" y="292" text-anchor="middle" class="small">Same work: 5000 J each. Faster crane has greater power.</text>
    </svg>

    <label class="bench-field">
      <span>Time for crane B: {{ timeB }} s (crane A: 10 s)</span>
      <input v-model.number="timeB" type="range" min="5" max="40" step="1" aria-label="Time for crane B in seconds" />
    </label>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Predict: which crane has more power?</strong> {{ summary }}
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.power-race { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.power-race svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.bench-field { display: grid; gap: 0.2rem; font-size: 0.9rem; color: var(--ink-soft); }
.bench-field input { width: 100%; accent-color: var(--teal); }
.small, .big { font-family: var(--sans); }
.small { font-size: 12px; fill: var(--ink-soft); }
.big { font-size: 19px; font-weight: 700; fill: var(--teal-dark); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
