<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'

const force = ref(20)
const dist = ref(0.6)
const angle = ref(90)
const upward = ref(true)

const swing = reactive({ value: 0 })
let animation = null
let reduced = false

const pivotX = 180
const pivotY = 215
const scale = 280
const doorLength = computed(() => dist.value * scale)
const radians = computed(() => (angle.value * Math.PI) / 180)
const moment = computed(() => force.value * dist.value * Math.sin(radians.value))
const arm = computed(() => dist.value * Math.sin(radians.value))
const maxMoment = 50 * 1.2

const handle = computed(() => ({ x: pivotX + doorLength.value, y: pivotY }))
const unit = computed(() => ({
  x: Math.cos(radians.value),
  y: upward.value ? -Math.sin(radians.value) : Math.sin(radians.value)
}))
const foot = computed(() => {
  const hx = pivotX - handle.value.x
  const hy = pivotY - handle.value.y
  const dot = hx * unit.value.x + hy * unit.value.y
  return {
    x: handle.value.x + unit.value.x * dot,
    y: handle.value.y + unit.value.y * dot
  }
})
const armLine = computed(() => ({ x1: pivotX, y1: pivotY, x2: foot.value.x, y2: foot.value.y }))
const tip = computed(() => ({
  x: handle.value.x + unit.value.x * 74,
  y: handle.value.y + unit.value.y * 74
}))
const lineStart = computed(() => ({
  x: handle.value.x - unit.value.x * 60,
  y: handle.value.y - unit.value.y * 60
}))

const rightAngle = computed(() => {
  const n = { x: pivotX - foot.value.x, y: pivotY - foot.value.y }
  const len = Math.hypot(n.x, n.y) || 1
  n.x /= len
  n.y /= len
  const ux = unit.value.x
  const uy = unit.value.y
  const size = 10
  return [
    { x: foot.value.x + ux * size, y: foot.value.y + uy * size },
    { x: foot.value.x + ux * size + n.x * size, y: foot.value.y + uy * size + n.y * size },
    { x: foot.value.x + n.x * size, y: foot.value.y + n.y * size }
  ]
})

const direction = computed(() => (upward.value ? 'anticlockwise' : 'clockwise'))

const summary = computed(
  () =>
    `Force ${force.value} N at ${dist.value.toFixed(1)} m from the hinge, angle ${angle.value} degrees. Perpendicular distance ${arm.value.toFixed(2)} m. Moment ${moment.value.toFixed(1)} N m ${direction.value}.`
)

function targetSwing() {
  const fraction = Math.min(1, moment.value / maxMoment)
  return (upward.value ? -1 : 1) * fraction * 42
}

function updateMotion() {
  const target = targetSwing()
  animation?.pause()
  animation?.revert?.()
  animation = null
  if (reduced) {
    swing.value = target
    return
  }
  animation = animate(swing, {
    value: target,
    duration: 480,
    easing: 'easeOutQuad'
  })
}

function reset() {
  force.value = 20
  dist.value = 0.6
  angle.value = 90
  upward.value = true
}

watch([force, dist, angle, upward], updateMotion)

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
updateMotion()

onBeforeUnmount(() => {
  animation?.pause()
  animation?.revert?.()
  animation = null
})
</script>

<template>
  <div class="moment-bench">
    <svg viewBox="0 0 720 360" role="img" aria-labelledby="moment-bench-title moment-bench-desc">
      <title id="moment-bench-title">Door torque bench</title>
      <desc id="moment-bench-desc">{{ summary }}</desc>
      <defs>
        <marker markerUnits="userSpaceOnUse" id="moment-force-head" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#a05f0c" />
        </marker>
      </defs>

      <line x1="60" y1="300" x2="660" y2="300" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 6" />
      <text x="96" y="326" class="floor">floor plan</text>

      <g :transform="`rotate(${swing.value} ${pivotX} ${pivotY})`">
        <rect
          :x="pivotX"
          :y="pivotY - 10"
          :width="Math.max(doorLength, 4)"
          height="20"
          rx="4"
          fill="#efe4cf"
          stroke="var(--teal-dark)"
          stroke-width="3"
        />
        <line
          :x1="pivotX + 8"
          :y1="pivotY"
          :x2="pivotX + doorLength - 6"
          :y2="pivotY"
          stroke="var(--line)"
          stroke-width="2"
        />
        <circle :cx="handle.x" :cy="pivotY" r="7" fill="var(--paper-2)" stroke="var(--teal-dark)" stroke-width="3" />
      </g>

      <circle :cx="pivotX" :cy="pivotY" r="10" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
      <text :x="pivotX - 10" :y="pivotY + 34" text-anchor="end" class="label">pivot O</text>

      <line
        :x1="lineStart.x"
        :y1="lineStart.y"
        :x2="tip.x"
        :y2="tip.y"
        stroke="#b98a4e"
        stroke-width="1.5"
        stroke-dasharray="5 5"
      />
      <line
        :x1="handle.x"
        :y1="handle.y"
        :x2="tip.x"
        :y2="tip.y"
        stroke="var(--amber)"
        stroke-width="5"
        stroke-linecap="round"
        marker-end="url(#moment-force-head)"
      />
      <text :x="tip.x + 10" :y="tip.y + 4" class="force-label">F</text>

      <line
        :x1="armLine.x1"
        :y1="armLine.y1"
        :x2="armLine.x2"
        :y2="armLine.y2"
        stroke="var(--teal)"
        stroke-width="3"
        stroke-dasharray="7 4"
      />
      <polyline
        :points="rightAngle.map((point) => `${point.x},${point.y}`).join(' ')"
        fill="none"
        stroke="var(--teal)"
        stroke-width="2"
      />
      <text :x="(pivotX + foot.x) / 2" :y="(pivotY + foot.y) / 2 - 24" text-anchor="middle" class="arm-label">
        d = {{ arm.toFixed(2) }} m
      </text>

      <g v-if="moment < 0.05">
        <text x="420" y="120" text-anchor="middle" class="zero-note">
          Line of action passes through the pivot → zero moment
        </text>
      </g>
    </svg>

    <div class="bench-controls">
      <label class="bench-field">
        <span>Force: {{ force }} N</span>
        <input v-model.number="force" type="range" min="0" max="50" step="5" aria-label="Force in newtons" />
      </label>
      <label class="bench-field">
        <span>Distance from hinge: {{ dist.toFixed(1) }} m</span>
        <input v-model.number="dist" type="range" min="0.1" max="1.2" step="0.1" aria-label="Distance from hinge in metres" />
      </label>
      <label class="bench-field">
        <span>Angle of push: {{ angle }}°</span>
        <input v-model.number="angle" type="range" min="15" max="90" step="15" aria-label="Angle of push in degrees" />
      </label>
      <div class="bench-buttons">
        <button type="button" class="btn btn-small" :aria-pressed="upward" @click="upward = !upward">
          {{ upward ? 'Push up (anticlockwise)' : 'Push down (clockwise)' }}
        </button>
        <button type="button" class="btn btn-small" @click="reset">Reset</button>
      </div>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Moment = {{ moment.toFixed(1) }} N m {{ direction }}.</strong>
      Perpendicular distance {{ arm.toFixed(2) }} m; force {{ force }} N at {{ angle }}°.
    </p>
  </div>
</template>

<style scoped>
.moment-bench {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.6rem;
}
.bench-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 0.75rem;
  align-items: end;
}
.bench-field {
  display: grid;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: var(--ink-soft);
}
.bench-field input {
  width: 100%;
  accent-color: var(--teal);
}
.bench-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.sim-summary {
  margin: 0;
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--amber);
  background: var(--paper-2);
  font-size: 0.94rem;
}
.floor,
.label,
.arm-label,
.force-label,
.zero-note {
  font-family: system-ui, sans-serif;
}
.floor {
  font-size: 11px;
  fill: var(--muted);
}
.label {
  font-size: 12px;
  fill: var(--ink-soft);
}
.force-label {
  font-size: 18px;
  font-weight: 700;
  fill: var(--amber-deep);
}
.arm-label {
  paint-order: stroke;
  stroke: var(--paper-2);
  stroke-width: 3px;
  font-size: 13px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.zero-note {
  font-size: 13px;
  fill: var(--bad);
}
</style>
