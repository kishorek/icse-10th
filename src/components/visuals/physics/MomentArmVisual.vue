<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const state = reactive({ angle: 90 })
const status = ref('Ready')
let run = null
let reduced = false

const pivotX = 160
const pivotY = 212
const handleX = 470
const fullDistance = 1

const radians = computed(() => (state.angle * Math.PI) / 180)
const unit = computed(() => ({ x: Math.cos(radians.value), y: -Math.sin(radians.value) }))
const armFraction = computed(() => Math.sin(radians.value))

const foot = computed(() => {
  const hx = pivotX - handleX
  const hy = 0
  const dot = hx * unit.value.x + hy * unit.value.y
  return { x: handleX + unit.value.x * dot, y: pivotY + unit.value.y * dot }
})
const tip = computed(() => ({
  x: handleX + unit.value.x * 96,
  y: pivotY + unit.value.y * 96
}))
const tail = computed(() => ({
  x: handleX - unit.value.x * 210,
  y: pivotY - unit.value.y * 210
}))

const arcPath = computed(() => {
  const radius = 50
  const endX = handleX + radius * Math.cos(radians.value)
  const endY = pivotY - radius * Math.sin(radians.value)
  return `M ${handleX + radius} ${pivotY} A ${radius} ${radius} 0 0 0 ${endX} ${endY}`
})

const angleLabel = computed(() => ({
  x: handleX + 74 * Math.cos(radians.value / 2),
  y: pivotY - 74 * Math.sin(radians.value / 2) + 4
}))

const rightAngle = computed(() => {
  const nx = pivotX - foot.value.x
  const ny = pivotY - foot.value.y
  const len = Math.hypot(nx, ny) || 1
  const size = 11
  return [
    { x: foot.value.x + unit.value.x * size, y: foot.value.y + unit.value.y * size },
    {
      x: foot.value.x + unit.value.x * size + (nx / len) * size,
      y: foot.value.y + unit.value.y * size + (ny / len) * size
    },
    { x: foot.value.x + (nx / len) * size, y: foot.value.y + (ny / len) * size }
  ]
})

const armLabel = computed(() => {
  const midX = (pivotX + foot.value.x) / 2
  const midY = (pivotY + foot.value.y) / 2
  let nx = -(foot.value.y - pivotY)
  let ny = foot.value.x - pivotX
  const len = Math.hypot(nx, ny) || 1
  nx /= len
  ny /= len
  if (ny > 0) {
    nx = -nx
    ny = -ny
  }
  return { x: midX + nx * 26, y: midY + ny * 26 }
})

const stageText = computed(() =>
  state.angle > 80
    ? 'Perpendicular push: the line of action is vertical and the full 1.00 m distance is the arm.'
    : `Slanted push at ${state.angle}°: the line of action passes closer to the pivot, so the arm shrinks to ${(armFraction.value).toFixed(2)} m.`
)

function play() {
  run?.pause()
  run?.revert?.()
  if (reduced) return
  const target = state.angle > 60 ? 32 : 90
  run = animate(state, { angle: target, duration: 1400, easing: 'easeInOutQuad' })
  status.value = 'Playing'
}

function pause() {
  run?.pause()
  status.value = 'Paused'
}

function setAngle(value) {
  run?.pause()
  state.angle = value
  status.value = `Set to ${value} degrees`
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    state.angle = 32
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
  <div class="arm-visual">
    <svg viewBox="0 0 720 340" role="img" aria-labelledby="arm-title arm-desc">
      <title id="arm-title">Perpendicular distance and line of action</title>
      <desc id="arm-desc">{{ stageText }}</desc>
      <defs>
        <marker id="arm-force-head" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="12" refY="8" orient="auto">
          <path d="M 0 0 L 16 8 L 0 16 z" fill="#a05f0c" />
        </marker>
      </defs>

      <line x1="44" y1="268" x2="676" y2="268" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 6" />

      <rect :x="pivotX" :y="pivotY - 10" :width="handleX - pivotX" height="20" rx="4" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
      <line :x1="pivotX + 10" :y1="pivotY" :x2="handleX - 8" :y2="pivotY" stroke="var(--line)" stroke-width="2" />
      <circle :cx="pivotX" :cy="pivotY" r="10" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
      <text :x="pivotX - 8" :y="pivotY + 34" text-anchor="end" class="label">pivot O</text>
      <text :x="(pivotX + handleX) / 2" :y="pivotY + 38" text-anchor="middle" class="ghost-label">
        full distance 1.00 m
      </text>

      <line :x1="tail.x" :y1="tail.y" :x2="tip.x" :y2="tip.y" stroke="#b98a4e" stroke-width="1.5" stroke-dasharray="6 5" />
      <line :x1="handleX" :y1="pivotY" :x2="tip.x" :y2="tip.y" stroke="var(--amber)" stroke-width="6" stroke-linecap="round" marker-end="url(#arm-force-head)" />
      <text :x="tip.x + 8" :y="tip.y + 4" class="force-label">F</text>

      <path :d="arcPath" fill="none" stroke="var(--teal)" stroke-width="2" stroke-dasharray="4 3" />
      <text :x="angleLabel.x" :y="angleLabel.y" text-anchor="middle" class="angle-label">θ = {{ state.angle }}°</text>

      <line :x1="pivotX" :y1="pivotY" :x2="foot.x" :y2="foot.y" stroke="var(--teal)" stroke-width="4" stroke-dasharray="9 5" />
      <polyline :points="rightAngle.map((p) => `${p.x},${p.y}`).join(' ')" fill="none" stroke="var(--teal)" stroke-width="2" />

      <text :x="armLabel.x" :y="armLabel.y" text-anchor="middle" class="arm-label">
        d = {{ armFraction.toFixed(2) }} m
      </text>
      <text :x="armLabel.x" :y="armLabel.y + 15" text-anchor="middle" class="arm-small">
        perpendicular distance
      </text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="setAngle(90)">Perpendicular push</button>
      <button type="button" class="btn btn-small" @click="setAngle(42)">Slanted push</button>
    </div>

    <label class="bench-field">
      <span>Angle between the force and the door: {{ state.angle }}°</span>
      <input
        :value="state.angle"
        type="range"
        min="15"
        max="90"
        step="1"
        aria-label="Angle between force and door in degrees"
        @input="setAngle(Number($event.target.value))"
      />
    </label>

    <p class="sim-summary" aria-live="polite">
      <strong>{{ stageText }}</strong>
      The moment is F × {{ armFraction.toFixed(2) }} m, not F × 1.00 m.
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.arm-visual {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.5rem;
}
.bench-field {
  display: grid;
  gap: 0.2rem;
  font-size: 0.9rem;
  color: var(--ink-soft);
}
.bench-field input {
  width: 100%;
  max-width: 32rem;
  accent-color: var(--teal);
}
.label,
.force-label,
.arm-label,
.arm-small,
.angle-label,
.ghost-label {
  font-family: system-ui, sans-serif;
}
.label {
  font-size: 12px;
  fill: var(--ink-soft);
}
.force-label {
  font-size: 18px;
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
.arm-small {
  font-size: 10px;
  fill: var(--ink-soft);
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
.sim-summary {
  margin: 0;
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--teal);
  background: var(--paper-2);
  font-size: 0.93rem;
}
</style>
