<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'

const force = ref(50)
const distance = ref(4)
const angle = ref(60)
const travel = reactive({ value: 4 })
let animation = null
let reduced = false

const radians = computed(() => (angle.value * Math.PI) / 180)
const work = computed(() => force.value * distance.value * Math.cos(radians.value))
const along = computed(() => force.value * Math.cos(radians.value))
const sign = computed(() => {
  if (Math.abs(work.value) < 0.05) return 'zero'
  return work.value > 0 ? 'positive' : 'negative'
})
const blockX = computed(() => 110 + travel.value * 38)
const blockY = 190
const forceLength = computed(() => 40 + force.value * 0.9)
const forceTip = computed(() => ({
  x: blockX.value + Math.cos(radians.value) * forceLength.value,
  y: blockY - Math.sin(radians.value) * forceLength.value
}))
const workLabel = computed(() => `${work.value.toFixed(1)} J (${sign.value})`)
const summary = computed(
  () =>
    `Force ${force.value} N, displacement ${distance.value} m, angle ${angle.value} degrees. Work = F s cos theta = ${work.value.toFixed(1)} joules, ${sign.value}.`
)

function updateTravel() {
  animation?.pause()
  animation?.revert?.()
  animation = null
  if (reduced) {
    travel.value = distance.value
    return
  }
  animation = animate(travel, {
    value: distance.value,
    duration: 700,
    easing: 'easeOutQuad'
  })
}

function reset() {
  force.value = 50
  distance.value = 4
  angle.value = 60
  updateTravel()
}

watch(distance, updateTravel)

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
travel.value = distance.value

onBeforeUnmount(() => {
  animation?.pause()
  animation?.revert?.()
  animation = null
})
</script>

<template>
  <div class="work-bench">
    <svg viewBox="0 0 720 310" role="img" aria-labelledby="work-bench-title work-bench-desc">
      <title id="work-bench-title">Work bench with force, displacement and angle</title>
      <desc id="work-bench-desc">{{ summary }}</desc>
      <defs>
        <marker id="wep-work-force" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="15" refX="11" refY="7.5" orient="auto">
          <path d="M 0 0 L 15 7.5 L 0 15 z" fill="#a05f0c" />
        </marker>
        <marker id="wep-work-move" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="15" refX="11" refY="7.5" orient="auto">
          <path d="M 0 0 L 15 7.5 L 0 15 z" fill="#0f5c5c" />
        </marker>
      </defs>

      <line x1="48" y1="244" x2="672" y2="244" stroke="var(--line)" stroke-width="2" />
      <line x1="110" y1="244" x2="110" y2="214" stroke="var(--line)" stroke-width="2" />
      <line x1="110" y1="228" x2="560" y2="228" stroke="var(--teal)" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#wep-work-move)" />
      <text x="335" y="276" text-anchor="middle" class="axis-label">displacement s = {{ distance }} m</text>

      <g>
        <rect :x="blockX - 34" :y="blockY - 26" width="68" height="48" rx="7" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
        <text :x="blockX" :y="blockY + 5" text-anchor="middle" class="block-label">m</text>
        <line :x1="blockX" :y1="blockY - 10" :x2="forceTip.x" :y2="forceTip.y" stroke="var(--amber)" stroke-width="5" stroke-linecap="round" marker-end="url(#wep-work-force)" />
        <text :x="forceTip.x + 8" :y="forceTip.y - 8" class="force-label">F = {{ force }} N</text>
        <line :x1="blockX" :y1="blockY - 12" :x2="blockX + 70" :y2="blockY - 12" stroke="var(--teal)" stroke-width="3" stroke-dasharray="4 3" />
        <text :x="blockX + 74" :y="blockY - 8" class="small-label">θ = {{ angle }}°</text>
      </g>

      <rect x="404" y="46" width="270" height="92" rx="8" fill="#fbf8f1" stroke="var(--line)" />
      <text x="424" y="72" class="small-label">Force along displacement</text>
      <text x="424" y="98" class="readout">{{ along.toFixed(1) }} N</text>
      <text x="424" y="124" class="small-label">W = F s cos θ</text>
      <text x="424" y="150" class="readout">{{ workLabel }}</text>

      <text x="52" y="62" class="hint-label">Predict: at 90° the work is zero.</text>
    </svg>

    <div class="bench-controls">
      <label class="bench-field">
        <span>Force: {{ force }} N</span>
        <input v-model.number="force" type="range" min="0" max="100" step="5" aria-label="Force in newtons" />
      </label>
      <label class="bench-field">
        <span>Displacement: {{ distance }} m</span>
        <input v-model.number="distance" type="range" min="0" max="10" step="1" aria-label="Displacement in metres" />
      </label>
      <label class="bench-field">
        <span>Angle: {{ angle }}°</span>
        <input v-model.number="angle" type="range" min="0" max="180" step="15" aria-label="Angle between force and displacement in degrees" />
      </label>
    </div>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Work = {{ workLabel }}.</strong>
      At 90°, the force has no component along the displacement.
    </p>
  </div>
</template>

<style scoped>
.work-bench { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.work-bench svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.bench-controls { display: grid; gap: 0.6rem; }
.bench-field { display: grid; gap: 0.2rem; font-size: 0.9rem; color: var(--ink-soft); }
.bench-field input { width: 100%; accent-color: var(--teal); }
.axis-label, .small-label, .hint-label, .block-label, .force-label, .readout { font-family: var(--sans); }
.axis-label { font-size: 13px; fill: var(--ink-soft); }
.small-label, .hint-label { font-size: 12px; fill: var(--ink-soft); paint-order: stroke; stroke: #fbf8f1; stroke-width: 3px; }
.block-label { font-size: 20px; font-weight: 700; fill: var(--teal-dark); }
.force-label { font-size: 17px; font-weight: 700; fill: var(--amber-deep); paint-order: stroke; stroke: #fbf8f1; stroke-width: 3px; }
.readout { font-size: 18px; font-weight: 700; fill: var(--teal-dark); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
