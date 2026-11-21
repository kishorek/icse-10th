<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'
import { useVisibilityPause } from '../../../composables/useVisibilityPause'

const root = ref(null)
const mode = ref('wheel')
const spin = reactive({ value: 0 })
const running = ref(false)
const status = ref('Ready')
let loop = null
let reduced = false

const force = 5
const armMetres = computed(() => (mode.value === 'wheel' ? 0.5 : 0.4))
const moment = computed(() => force * armMetres.value)

function stop() {
  loop?.pause()
  loop = null
  running.value = false
}

function start() {
  stop()
  if (reduced) {
    spin.value = 18
    status.value = 'Static final frame because reduced motion is on'
    return
  }
  loop = animate(spin, {
    value: spin.value + 360,
    duration: 6400,
    easing: 'linear',
    loop: true
  })
  running.value = true
  status.value = 'Playing. The body rotates continuously; the centre does not move.'
}

function play() {
  if (running.value) return
  start()
}
function pause() {
  loop?.pause()
  running.value = false
  status.value = 'Paused'
}
function restart() {
  stop()
  spin.value = 0
  start()
}
function reset() {
  stop()
  spin.value = 0
  status.value = 'Reset'
}
function switchMode() {
  mode.value = mode.value === 'wheel' ? 'bar' : 'wheel'
}

watch(mode, () => {
  stop()
  spin.value = 0
  start()
})

useVisibilityPause(root, (visible) => {
  if (visible) {
    if (!loop) start()
  } else if (loop) {
    loop.pause()
    loop = null
    running.value = false
  }
})

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  start()
}

onBeforeUnmount(() => {
  loop?.pause()
  loop?.revert?.()
  loop = null
})
</script>

<template>
  <div ref="root" class="couple-visual">
    <svg viewBox="0 0 720 360" role="img" aria-labelledby="couple-title couple-desc">
      <title id="couple-title">A couple produces rotation with no drift</title>
      <desc id="couple-desc">
        Two equal and opposite forces act on separate parallel lines. Their moments add, the body rotates,
        and the resultant force stays zero.
      </desc>
      <defs>
        <marker id="couple-head-a" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="12" refY="8" orient="auto">
          <path d="M 0 0 L 16 8 L 0 16 z" fill="#a05f0c" />
        </marker>
      </defs>

      <text x="360" y="28" text-anchor="middle" class="heading">
        {{ mode === 'wheel' ? 'Steering wheel' : 'Bar pivoted at its centre' }}
      </text>

      <g v-if="mode === 'wheel'">
        <circle cx="360" cy="185" r="30" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5" />
        <g :transform="`rotate(${spin.value} 360 185)`">
          <circle cx="360" cy="185" r="112" fill="#f3ead9" stroke="var(--teal-dark)" stroke-width="6" />
          <circle cx="360" cy="185" r="16" fill="var(--teal)" />
          <line x1="360" y1="73" x2="360" y2="297" stroke="var(--teal)" stroke-width="5" />
          <line x1="248" y1="185" x2="472" y2="185" stroke="var(--teal)" stroke-width="5" />
          <circle cx="360" cy="185" r="7" fill="var(--paper-2)" />
          <circle cx="360" cy="105" r="5" fill="var(--amber)" />
          <circle cx="440" cy="185" r="5" fill="var(--amber)" />
          <circle cx="360" cy="265" r="5" fill="var(--amber)" />
          <circle cx="280" cy="185" r="5" fill="var(--amber)" />
        </g>

        <line x1="360" y1="73" x2="438" y2="73" stroke="var(--amber)" stroke-width="6" stroke-linecap="round" marker-end="url(#couple-head-a)" />
        <text x="430" y="58" text-anchor="middle" class="force-label">F</text>
        <line x1="360" y1="297" x2="282" y2="297" stroke="var(--amber)" stroke-width="6" stroke-linecap="round" marker-end="url(#couple-head-a)" />
        <text x="290" y="322" text-anchor="middle" class="force-label">F</text>

        <line x1="444" y1="73" x2="444" y2="297" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 4" />
        <line x1="436" y1="73" x2="436" y2="297" stroke="var(--teal)" stroke-width="4" />
        <text x="482" y="185" class="arm-label">couple arm d = {{ armMetres.toFixed(1) }} m</text>
        <text x="482" y="206" class="tiny">perpendicular gap between the force lines</text>

        <circle cx="360" cy="185" r="4" fill="var(--ink)" />
        <text x="360" y="340" text-anchor="middle" class="tiny">centre O stays fixed · no translational motion</text>
      </g>

      <g v-else :transform="`rotate(${spin.value} 360 185)`">
        <rect x="240" y="175" width="240" height="20" rx="6" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
        <circle cx="360" cy="185" r="10" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
        <circle cx="240" cy="185" r="7" fill="var(--paper-2)" stroke="var(--teal-dark)" stroke-width="3" />
        <circle cx="480" cy="185" r="7" fill="var(--paper-2)" stroke="var(--teal-dark)" stroke-width="3" />
        <line x1="240" y1="185" x2="240" y2="118" stroke="var(--amber)" stroke-width="6" stroke-linecap="round" marker-end="url(#couple-head-a)" />
        <line x1="480" y1="185" x2="480" y2="252" stroke="var(--amber)" stroke-width="6" stroke-linecap="round" marker-end="url(#couple-head-a)" />
      </g>

    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
      <button type="button" class="btn btn-small" @click="switchMode">
        Show {{ mode === 'wheel' ? 'bar' : 'steering wheel' }}
      </button>
    </div>
    <p v-if="mode === 'bar'" class="bar-note">
      Couple arm d = {{ armMetres.toFixed(1) }} m · each force 5 N · the pair rotates together.
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
    <p class="sim-summary" aria-live="polite">
      <strong>Resultant force = 0 · Moment = {{ moment.toFixed(1) }} N m.</strong>
      The two forces are equal and opposite, so the body does not move away. Because their lines are separate,
      their turning effects add as F × d.
    </p>
  </div>
</template>

<style scoped>
.couple-visual {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.5rem;
}
.heading,
.force-label,
.arm-label,
.tiny {
  font-family: system-ui, sans-serif;
}
.heading {
  font-size: 15px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.force-label {
  font-size: 17px;
  font-weight: 700;
  fill: var(--amber-deep);
  paint-order: stroke;
  stroke: var(--paper-2);
  stroke-width: 3px;
}
.arm-label {
  font-size: 13px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.tiny {
  font-size: 11px;
  fill: var(--ink-soft);
}
.bar-note {
  margin: 0;
  font-size: 0.88rem;
  color: var(--ink-soft);
}
.sim-summary {
  margin: 0;
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--teal);
  background: var(--paper-2);
  font-size: 0.93rem;
}
</style>
