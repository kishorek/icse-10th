<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { createTimeline, svg } from 'animejs'

const mode = ref('wheel')
const spin = reactive({ value: 0 })
const status = ref('Ready')
const forceTop = ref(null)
const forceBottom = ref(null)
const armPath = ref(null)
let timeline = null
let reduced = false

const force = 5
const armMetres = computed(() => (mode.value === 'wheel' ? 0.5 : 0.4))
const moment = computed(() => force * armMetres.value)

const armLine = computed(() =>
  mode.value === 'wheel'
    ? { x1: 430, y1: 70, x2: 430, y2: 290 }
    : { x1: 210, y1: 300, x2: 510, y2: 300 }
)

function buildTimeline() {
  timeline?.revert?.()
  timeline = null
  spin.value = 0

  if (mode.value === 'wheel') {
    if (!forceTop.value || !forceBottom.value || !armPath.value) return
    timeline = createTimeline({ autoplay: false })
    timeline
      .add(forceTop.value, { opacity: [0, 1], translateY: [-12, 0], duration: 380 }, 0)
      .add(forceBottom.value, { opacity: [0, 1], translateY: [12, 0], duration: 380 }, 160)
      .add(svg.createDrawable(armPath.value), { draw: '0 1', duration: 420 }, 420)
      .add(spin, { value: 70, duration: 1200, easing: 'easeInOutCubic' }, 760)
    return
  }

  if (!armPath.value) return
  timeline = createTimeline({ autoplay: false })
  timeline.add(svg.createDrawable(armPath.value), { draw: '0 1', duration: 520 }, 0)
}

function play() {
  timeline?.play()
  status.value = 'Playing'
}
function pause() {
  timeline?.pause()
  status.value = 'Paused'
}
function restart() {
  timeline?.restart()
  status.value = 'Playing from the start'
}
function reset() {
  timeline?.pause()
  if (timeline) timeline.progress = 0
  spin.value = 0
  status.value = 'Reset'
}

watch(mode, () => {
  requestAnimationFrame(() => {
    buildTimeline()
    if (reduced && timeline) {
      timeline.progress = 1
      timeline.pause()
    }
  })
})

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  requestAnimationFrame(() => {
    buildTimeline()
    if (reduced && timeline) {
      timeline.progress = 1
      timeline.pause()
      status.value = 'Final state shown because reduced motion is on'
    }
  })
}

onBeforeUnmount(() => {
  timeline?.pause()
  timeline?.revert?.()
  timeline = null
})
</script>

<template>
  <div class="couple-visual">
    <svg viewBox="0 0 720 330" role="img" aria-labelledby="couple-title couple-desc">
      <title id="couple-title">A couple produces rotation with no drift</title>
      <desc id="couple-desc">
        Two equal and opposite forces act on separate parallel lines. Their moments add, the body rotates,
        and the resultant force stays zero.
      </desc>
      <defs>
        <marker markerUnits="userSpaceOnUse" id="couple-head-a" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#a05f0c" />
        </marker>
      </defs>

      <text x="360" y="26" text-anchor="middle" class="heading">
        {{ mode === 'wheel' ? 'Steering wheel' : 'Bar pivoted at its centre' }}
      </text>

      <g v-if="mode === 'wheel'">
        <g :transform="`rotate(${spin.value} 360 180)`">
          <circle cx="360" cy="180" r="110" fill="#f3ead9" stroke="var(--teal-dark)" stroke-width="6" />
          <circle cx="360" cy="180" r="16" fill="var(--teal)" />
          <line x1="360" y1="70" x2="360" y2="290" stroke="var(--teal)" stroke-width="5" />
          <line x1="250" y1="180" x2="470" y2="180" stroke="var(--teal)" stroke-width="5" />
          <circle cx="360" cy="180" r="7" fill="var(--paper-2)" />
          <path d="M 360 40 A 140 140 0 0 1 500 180" fill="none" stroke="var(--amber)" stroke-width="3" stroke-dasharray="7 5" />
          <path d="M 492 168 L 504 182 L 488 190" fill="none" stroke="var(--amber)" stroke-width="3" />
        </g>

        <g ref="forceTop">
          <line x1="360" y1="70" x2="430" y2="70" stroke="var(--amber)" stroke-width="5" stroke-linecap="round" marker-end="url(#couple-head-a)" />
          <text x="424" y="58" text-anchor="middle" class="force-label">F</text>
        </g>
        <g ref="forceBottom">
          <line x1="360" y1="290" x2="290" y2="290" stroke="var(--amber)" stroke-width="5" stroke-linecap="round" marker-end="url(#couple-head-a)" />
          <text x="296" y="312" text-anchor="middle" class="force-label">F</text>
        </g>
      </g>

      <g v-else>
        <rect x="210" y="170" width="300" height="20" rx="6" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
        <circle cx="360" cy="180" r="10" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
        <circle cx="210" cy="180" r="7" fill="var(--paper-2)" stroke="var(--teal-dark)" stroke-width="3" />
        <circle cx="510" cy="180" r="7" fill="var(--paper-2)" stroke="var(--teal-dark)" stroke-width="3" />
        <line x1="210" y1="180" x2="210" y2="108" stroke="var(--amber)" stroke-width="5" stroke-linecap="round" marker-end="url(#couple-head-a)" />
        <text x="198" y="118" text-anchor="end" class="force-label">F</text>
        <line x1="510" y1="180" x2="510" y2="252" stroke="var(--amber)" stroke-width="5" stroke-linecap="round" marker-end="url(#couple-head-a)" />
        <text x="522" y="250" class="force-label">F</text>
        <path d="M 300 250 A 110 110 0 0 0 420 250" fill="none" stroke="var(--amber)" stroke-width="3" stroke-dasharray="7 5" />
        <path d="M 306 240 L 298 252 L 314 254" fill="none" stroke="var(--amber)" stroke-width="3" />
      </g>

      <line :x1="armLine.x1" :y1="armLine.y1" :x2="armLine.x2" :y2="armLine.y2" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 4" />
      <path ref="armPath" :d="`M ${armLine.x1} ${armLine.y1} L ${armLine.x2} ${armLine.y2}`" fill="none" stroke="var(--teal)" stroke-width="4" />
      <text
        v-if="mode === 'wheel'"
        :x="armLine.x1 + 46"
        :y="(armLine.y1 + armLine.y2) / 2"
        class="arm-label"
      >
        couple arm d = {{ armMetres.toFixed(1) }} m
      </text>
      <text v-else x="360" y="292" text-anchor="middle" class="arm-label">
        couple arm d = {{ armMetres.toFixed(1) }} m
      </text>

    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
      <button type="button" class="btn btn-small" @click="mode = mode === 'wheel' ? 'bar' : 'wheel'">
        Show {{ mode === 'wheel' ? 'bar' : 'steering wheel' }}
      </button>
    </div>
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
  gap: 0.4rem;
}
.heading,
.force-label,
.arm-label,
.result,
.tiny,
.couple-note {
  font-family: system-ui, sans-serif;
}
.heading {
  font-size: 15px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.force-label {
  paint-order: stroke;
  stroke: var(--paper-2);
  stroke-width: 3px;
  font-size: 17px;
  font-weight: 700;
  fill: var(--amber-deep);
}
.arm-label {
  font-size: 13px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.result {
  font-size: 14px;
  font-weight: 700;
  fill: var(--ink);
}
.tiny {
  font-size: 11px;
  fill: var(--ink-soft);
}
.sim-summary {
  margin: 0;
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--teal);
  background: var(--paper-2);
  font-size: 0.93rem;
}
</style>
