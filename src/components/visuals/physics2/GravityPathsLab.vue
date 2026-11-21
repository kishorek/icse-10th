<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'

const paths = {
  stairs: {
    label: 'Stairs',
    points: [
      [120, 232], [180, 232], [180, 198], [246, 198], [246, 164], [312, 164],
      [312, 130], [378, 130], [378, 96], [444, 96], [444, 62], [540, 62]
    ]
  },
  slope: {
    label: 'Slope',
    points: [[120, 232], [540, 62]]
  },
  lift: {
    label: 'Lift',
    points: [[500, 232], [500, 62]]
  }
}

const active = ref('stairs')
const progress = reactive({ value: 0 })
const status = ref('Ready')
let run = null
let reduced = false
const mass = 50
const height = 3
const g = 10
const work = mass * g * height

function pointOnPath() {
  const points = paths[active.value].points
  const segments = []
  let total = 0
  for (let i = 1; i < points.length; i += 1) {
    const [x1, y1] = points[i - 1]
    const [x2, y2] = points[i]
    const length = Math.hypot(x2 - x1, y2 - y1)
    segments.push({ x1, y1, x2, y2, length, start: total })
    total += length
  }
  const travelled = total * Math.min(1, Math.max(0, progress.value))
  const segment = segments.find((item) => travelled <= item.start + item.length) || segments.at(-1)
  const local = segment.length ? (travelled - segment.start) / segment.length : 0
  return {
    x: segment.x1 + (segment.x2 - segment.x1) * local,
    y: segment.y1 + (segment.y2 - segment.y1) * local
  }
}

const body = computed(pointOnPath)
const pathD = computed(() => `M ${paths[active.value].points.map(([x, y]) => `${x} ${y}`).join(' L ')}`)
const verdict = computed(
  () => `${paths[active.value].label}: the body rises through the same vertical height ${height} m. Work = mgh = ${mass} × ${g} × ${height} = ${work} J.`
)

function play() {
  run?.pause()
  run?.revert?.()
  if (reduced) {
    progress.value = 1
    status.value = 'Final state shown because reduced motion is on'
    return
  }
  run = animate(progress, { value: 1, duration: 1500, easing: 'easeInOutQuad' })
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

watch(active, reset)

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
  <div class="gravity-paths">
    <div class="lab-controls" role="group" aria-label="Choose a path">
      <button
        v-for="(path, key) in paths"
        :key="key"
        type="button"
        class="btn btn-small"
        :aria-pressed="active === key"
        @click="active = key"
      >
        {{ path.label }}
      </button>
    </div>

    <svg viewBox="0 0 700 300" role="img" aria-labelledby="gp-title gp-desc">
      <title id="gp-title">Same vertical height by stairs, slope or lift</title>
      <desc id="gp-desc">{{ verdict }}</desc>
      <defs>
        <marker id="gp-arrow" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 z" fill="#a05f0c" />
        </marker>
      </defs>

      <line x1="80" y1="252" x2="620" y2="252" stroke="var(--line)" stroke-width="2" />
      <line x1="80" y1="62" x2="80" y2="252" stroke="var(--line)" stroke-width="2" />
      <line x1="68" y1="62" x2="92" y2="62" stroke="var(--ink-soft)" stroke-width="2" />
      <line x1="68" y1="252" x2="92" y2="252" stroke="var(--ink-soft)" stroke-width="2" />
      <line x1="80" y1="96" x2="120" y2="96" stroke="var(--ink-soft)" stroke-width="2" stroke-dasharray="4 3" />
      <line x1="120" y1="96" x2="120" y2="232" stroke="var(--amber)" stroke-width="3" marker-start="url(#gp-arrow)" marker-end="url(#gp-arrow)" />
      <text x="132" y="170" class="dim">h = 3 m</text>

      <path :d="pathD" fill="none" stroke="var(--teal-dark)" stroke-width="4" />
      <circle :cx="body.x" :cy="body.y" r="12" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />

      <rect x="360" y="44" width="300" height="92" rx="8" fill="#fbf8f1" stroke="var(--line)" />
      <text x="380" y="70" class="small">Path: {{ paths[active].label }}</text>
      <text x="380" y="96" class="big">W = mgh = {{ work }} J</text>
      <text x="380" y="120" class="small">m = 50 kg, g = 10 m s⁻²</text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Predict first: which path needs more work?</strong> {{ verdict }}
      The route changes, but the vertical height and the work by gravity do not.
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.gravity-paths { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.gravity-paths svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.dim, .small, .big { font-family: var(--sans); }
.dim { font-size: 12px; fill: var(--amber-deep); paint-order: stroke; stroke: #fbf8f1; stroke-width: 3px; }
.small { font-size: 12px; fill: var(--ink-soft); }
.big { font-size: 19px; font-weight: 700; fill: var(--teal-dark); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
