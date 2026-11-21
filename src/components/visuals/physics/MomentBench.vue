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
const gaugePercent = computed(() => Math.min(100, (moment.value / maxMoment) * 100))

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
const arrowLength = computed(() => 12 + force.value * 1.6)
const tip = computed(() => ({
  x: handle.value.x + unit.value.x * arrowLength.value,
  y: handle.value.y + unit.value.y * arrowLength.value
}))
const lineStart = computed(() => ({
  x: handle.value.x - unit.value.x * 70,
  y: handle.value.y - unit.value.y * 70
}))

const arcPath = computed(() => {
  const radius = 54
  const startX = handle.value.x + radius
  const startY = handle.value.y
  const endX = handle.value.x + radius * Math.cos(radians.value)
  const endY = handle.value.y + (upward.value ? -1 : 1) * radius * Math.sin(radians.value)
  return `M ${startX} ${startY} A ${radius} ${radius} 0 0 ${upward.value ? 0 : 1} ${endX} ${endY}`
})

const angleLabel = computed(() => ({
  x: handle.value.x + 54,
  y: handle.value.y + (upward.value ? 32 : -32)
}))

const rightAngle = computed(() => {
  const nx = pivotX - foot.value.x
  const ny = pivotY - foot.value.y
  const len = Math.hypot(nx, ny) || 1
  const size = 10
  return [
    { x: foot.value.x + unit.value.x * size, y: foot.value.y + unit.value.y * size },
    {
      x: foot.value.x + unit.value.x * size + (nx / len) * size,
      y: foot.value.y + unit.value.y * size + (ny / len) * size
    },
    { x: foot.value.x + (nx / len) * size, y: foot.value.y + (ny / len) * size }
  ]
})

const direction = computed(() => (upward.value ? 'anticlockwise' : 'clockwise'))

const summary = computed(
  () =>
    `Force ${force.value} N at ${dist.value.toFixed(1)} m from the hinge, angle ${angle.value} degrees. Perpendicular distance ${arm.value.toFixed(2)} m. Moment ${moment.value.toFixed(1)} N m ${direction.value}.`
)

function targetSwing() {
  const fraction = Math.min(1, moment.value / maxMoment)
  return (upward.value ? -1 : 1) * fraction * 44
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
    duration: 900,
    easing: 'easeOutElastic'
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
    <svg viewBox="0 0 720 370" role="img" aria-labelledby="moment-bench-title moment-bench-desc">
      <title id="moment-bench-title">Door torque bench</title>
      <desc id="moment-bench-desc">{{ summary }}</desc>
      <defs>
        <marker id="moment-force-head" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="12" refY="8" orient="auto">
          <path d="M 0 0 L 16 8 L 0 16 z" fill="#a05f0c" />
        </marker>
      </defs>

      <line x1="52" y1="302" x2="668" y2="302" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 6" />
      <text x="88" y="326" class="floor">floor plan</text>

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
          :x1="pivotX + 10"
          :y1="pivotY"
          :x2="pivotX + doorLength - 8"
          :y2="pivotY"
          stroke="var(--line)"
          stroke-width="2"
        />
        <circle :cx="handle.x" :cy="pivotY" r="7" fill="var(--paper-2)" stroke="var(--teal-dark)" stroke-width="3" />
      </g>

      <circle :cx="pivotX" :cy="pivotY" r="10" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
      <text :x="pivotX - 10" :y="pivotY + 34" text-anchor="end" class="label">pivot O</text>

      <g :transform="`rotate(${swing.value} ${pivotX} ${pivotY})`">
      <path :d="arcPath" fill="none" stroke="var(--teal)" stroke-width="2" stroke-dasharray="4 3" />
      <text :x="angleLabel.x" :y="angleLabel.y" text-anchor="middle" class="angle-label">θ = {{ angle }}°</text>

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
        stroke-width="6"
        stroke-linecap="round"
        marker-end="url(#moment-force-head)"
      />
      <text :x="tip.x + 10" :y="tip.y - 8" class="force-label">F = {{ force }} N</text>

      <line
        :x1="armLine.x1"
        :y1="armLine.y1"
        :x2="armLine.x2"
        :y2="armLine.y2"
        stroke="var(--teal)"
        stroke-width="4"
        stroke-dasharray="8 5"
      />
      <polyline
        :points="rightAngle.map((point) => `${point.x},${point.y}`).join(' ')"
        fill="none"
        stroke="var(--teal)"
        stroke-width="2"
      />
      <text :x="pivotX + doorLength / 2" :y="pivotY + 44" text-anchor="middle" class="arm-label">
        d = {{ arm.toFixed(2) }} m
      </text>
      <text
        v-if="angle < 90"
        :x="pivotX + doorLength / 2"
        :y="pivotY + 66"
        text-anchor="middle"
        class="ghost-label"
      >
        full distance {{ dist.toFixed(1) }} m
      </text>
      </g>

      <g v-if="moment < 0.05">
        <text x="430" y="112" text-anchor="middle" class="zero-note">
          Line of action passes through the pivot → zero moment
        </text>
      </g>
    </svg>

    <div class="moment-gauge" aria-hidden="true">
      <span class="gauge-label">Turning effect</span>
      <span class="gauge-track">
        <span class="gauge-fill" :class="{ reverse: !upward }" :style="{ width: `${gaugePercent}%` }"></span>
      </span>
      <span class="gauge-value">{{ moment.toFixed(1) }} N m</span>
    </div>

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
      M = F × d = {{ force }} N × {{ arm.toFixed(2) }} m. The full distance is
      {{ dist.toFixed(1) }} m; at {{ angle }}° only its perpendicular part counts.
    </p>
  </div>
</template>

<style scoped>
.moment-bench {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.6rem;
}
.moment-gauge {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.6rem;
  align-items: center;
  font-size: 0.86rem;
  color: var(--ink-soft);
}
.gauge-track {
  display: block;
  height: 12px;
  border-radius: 999px;
  background: var(--paper-3);
  overflow: hidden;
}
.gauge-fill {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--teal), #2b8a78);
  transition: width 240ms ease-out;
}
.gauge-fill.reverse {
  background: linear-gradient(90deg, var(--amber-deep), var(--amber));
}
.gauge-value {
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: var(--teal-dark);
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
.zero-note,
.angle-label,
.ghost-label {
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
  font-size: 13px;
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
  paint-order: stroke;
  stroke: var(--paper-2);
  stroke-width: 3px;
}
.angle-label {
  font-size: 12px;
  font-weight: 700;
  fill: var(--teal-dark);
  paint-order: stroke;
  stroke: var(--paper-2);
  stroke-width: 3px;
}
.ghost-label {
  font-size: 11px;
  fill: var(--muted);
}
.zero-note {
  font-size: 13px;
  fill: var(--bad);
}
</style>
