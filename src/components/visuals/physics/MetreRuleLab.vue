<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'

const leftMass = ref(40)
const leftPos = ref(20)
const rightMass = ref(40)
const rightPos = ref(80)
const pivot = ref(50)
const tilt = reactive({ value: 0 })
const pulse = reactive({ r: 16, o: 0 })
let animation = null
let pulseRun = null
let reduced = false

const startX = 80
const endX = 640
const scale = (endX - startX) / 100
const pivotX = computed(() => startX + pivot.value * scale)
const leftX = computed(() => startX + leftPos.value * scale)
const rightX = computed(() => startX + rightPos.value * scale)

const leftMoment = computed(() => leftMass.value * (leftPos.value - pivot.value))
const rightMoment = computed(() => rightMass.value * (rightPos.value - pivot.value))
const net = computed(() => leftMoment.value + rightMoment.value)
const clockwise = computed(() =>
  Math.max(0, leftMoment.value) + Math.max(0, rightMoment.value)
)
const anticlockwise = computed(() =>
  Math.abs(Math.min(0, leftMoment.value) + Math.min(0, rightMoment.value))
)
const balanced = computed(() => Math.abs(net.value) < 0.5)
const maxBar = computed(() => Math.max(clockwise.value, anticlockwise.value, 1))

const status = computed(() =>
  balanced.value
    ? 'Balanced: clockwise moment = anticlockwise moment.'
    : net.value > 0
      ? 'Not balanced: the clockwise moment is larger, so the rule tilts to the right.'
      : 'Not balanced: the anticlockwise moment is larger, so the rule tilts to the left.'
)

function applyTilt() {
  animation?.pause()
  animation?.revert?.()
  animation = null
  const goal = Math.max(-9, Math.min(9, (net.value / 2200) * 9))
  if (reduced) {
    tilt.value = goal
    return
  }
  animation = animate(tilt, { value: goal, duration: 950, easing: 'easeOutElastic' })
}

watch([leftMass, leftPos, rightMass, rightPos, pivot], applyTilt)

function pulseBalance() {
  if (reduced) return
  pulseRun?.pause()
  pulseRun?.revert?.()
  pulse.r = 16
  pulse.o = 0.75
  pulseRun = animate(pulse, { r: 46, o: 0, duration: 950, easing: 'easeOutQuad' })
}

watch(balanced, (value) => {
  if (value) pulseBalance()
})

function reset() {
  leftMass.value = 40
  leftPos.value = 20
  rightMass.value = 40
  rightPos.value = 80
  pivot.value = 50
  applyTilt()
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
applyTilt()

onBeforeUnmount(() => {
  animation?.pause()
  animation?.revert?.()
  pulseRun?.pause()
  pulseRun?.revert?.()
  animation = null
  pulseRun = null
})
</script>

<template>
  <div class="rule-lab">
    <svg viewBox="0 0 720 390" role="img" aria-labelledby="rule-title rule-desc">
      <title id="rule-title">Metre rule balance</title>
      <desc id="rule-desc">{{ status }}</desc>
      <defs>
        <marker markerUnits="userSpaceOnUse" id="rule-arrow" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 z" fill="#405451" />
        </marker>
      </defs>

      <g :transform="`rotate(${tilt.value} ${pivotX} 200)`">
        <rect :x="startX" y="190" :width="endX - startX" height="20" rx="3" fill="#f2e7d2" stroke="var(--teal-dark)" stroke-width="3" />
        <g v-for="mark in [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]" :key="mark">
          <line :x1="startX + mark * scale" y1="190" :x2="startX + mark * scale" y2="200" stroke="var(--teal)" stroke-width="1.5" />
          <text :x="startX + mark * scale" y="184" text-anchor="middle" class="tick">{{ mark }}</text>
        </g>

        <g v-if="leftMass > 0">
          <line :x1="leftX" y1="210" :x2="leftX" y2="238" stroke="var(--ink-soft)" stroke-width="2" />
          <rect :x="leftX - 18" y="238" width="36" height="26" rx="4" fill="#d9e7df" stroke="var(--teal-dark)" stroke-width="2" />
          <text :x="leftX" y="256" text-anchor="middle" class="weight-label">{{ leftMass }}</text>
          <text :x="leftX" y="270" text-anchor="middle" class="weight-unit">gf</text>
        </g>
        <g v-if="rightMass > 0">
          <line :x1="rightX" y1="210" :x2="rightX" y2="238" stroke="var(--ink-soft)" stroke-width="2" />
          <rect :x="rightX - 18" y="238" width="36" height="26" rx="4" fill="#f5e3c8" stroke="var(--amber-deep)" stroke-width="2" />
          <text :x="rightX" y="256" text-anchor="middle" class="weight-label">{{ rightMass }}</text>
          <text :x="rightX" y="270" text-anchor="middle" class="weight-unit">gf</text>
        </g>
      </g>

      <path :d="`M ${pivotX} 268 L ${pivotX} 292 L ${pivotX - 16} 310 L ${pivotX + 16} 310 Z`" fill="var(--teal)" />
      <line :x1="pivotX" y1="264" :x2="pivotX" y2="222" stroke="var(--teal)" stroke-width="4" marker-end="url(#rule-up)" />
      <text :x="pivotX + 20" y="242" class="reaction">reaction R</text>
      <text :x="pivotX" y="326" text-anchor="middle" class="tiny">fulcrum at {{ pivot }} cm</text>

      <circle :cx="pivotX" cy="200" :r="pulse.r" :opacity="pulse.o" fill="none" stroke="var(--ok)" stroke-width="4" />

      <g v-if="balanced">
        <rect x="552" y="40" width="116" height="30" rx="15" fill="var(--ok-bg)" stroke="var(--ok)" stroke-width="2" />
        <text x="610" y="60" text-anchor="middle" class="badge">BALANCED</text>
      </g>

      <line :x1="Math.min(leftX, pivotX)" y1="344" :x2="Math.max(leftX, pivotX)" y2="344" stroke="var(--line)" stroke-width="2" />
      <text :x="(leftX + pivotX) / 2" y="362" text-anchor="middle" class="tiny">{{ Math.abs(leftPos - pivot) }} cm</text>
      <line :x1="Math.min(rightX, pivotX)" y1="344" :x2="Math.max(rightX, pivotX)" y2="344" stroke="var(--line)" stroke-width="2" />
      <text :x="(rightX + pivotX) / 2" y="362" text-anchor="middle" class="tiny">{{ Math.abs(rightPos - pivot) }} cm</text>
    </svg>

    <div class="balance-bars">
      <div class="balance-row">
        <span class="balance-label">Anticlockwise</span>
        <span class="balance-track"><span class="balance-fill acw" :style="{ width: `${(anticlockwise / maxBar) * 100}%` }"></span></span>
        <span class="balance-value">{{ anticlockwise.toFixed(0) }} gf cm</span>
      </div>
      <div class="balance-row">
        <span class="balance-label">Clockwise</span>
        <span class="balance-track"><span class="balance-fill cw" :style="{ width: `${(clockwise / maxBar) * 100}%` }"></span></span>
        <span class="balance-value">{{ clockwise.toFixed(0) }} gf cm</span>
      </div>
    </div>

    <div class="rule-controls">
      <label class="bench-field">
        <span>Left mass: {{ leftMass }} gf at {{ leftPos }} cm</span>
        <input v-model.number="leftMass" type="range" min="0" max="100" step="5" aria-label="Left mass in gram-force" />
        <input v-model.number="leftPos" type="range" min="0" max="100" step="1" aria-label="Left mass position in centimetres" />
      </label>
      <label class="bench-field">
        <span>Right mass: {{ rightMass }} gf at {{ rightPos }} cm</span>
        <input v-model.number="rightMass" type="range" min="0" max="100" step="5" aria-label="Right mass in gram-force" />
        <input v-model.number="rightPos" type="range" min="0" max="100" step="1" aria-label="Right mass position in centimetres" />
      </label>
      <label class="bench-field">
        <span>Fulcrum: {{ pivot }} cm</span>
        <input v-model.number="pivot" type="range" min="30" max="70" step="1" aria-label="Fulcrum position in centimetres" />
      </label>
      <div class="bench-buttons">
        <button type="button" class="btn btn-small" @click="reset">Reset</button>
      </div>
    </div>

    <p class="sim-summary" :class="{ 'is-balanced': balanced }" aria-live="polite">
      <strong>{{ status }}</strong>
      Net moment {{ net.toFixed(0) }} gf cm.
    </p>
  </div>
</template>

<style scoped>
.rule-lab {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.55rem;
}
.rule-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.75rem;
  align-items: end;
}
.bench-field {
  display: grid;
  gap: 0.2rem;
  font-size: 0.9rem;
  color: var(--ink-soft);
}
.bench-field input {
  width: 100%;
  accent-color: var(--teal);
}
.bench-buttons {
  display: flex;
  gap: 0.5rem;
}
.balance-bars {
  display: grid;
  gap: 0.35rem;
  margin-top: 0.2rem;
}
.balance-row {
  display: grid;
  grid-template-columns: 7.5rem 1fr 5.5rem;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.86rem;
}
.balance-track {
  height: 12px;
  border-radius: 999px;
  background: var(--paper-3);
  overflow: hidden;
}
.balance-fill {
  display: block;
  height: 100%;
  transition: width 220ms ease-out;
}
.balance-fill.acw {
  background: var(--teal);
}
.balance-fill.cw {
  background: var(--amber);
}
.balance-label,
.balance-value {
  color: var(--ink-soft);
}
.balance-value {
  font-variant-numeric: tabular-nums;
}
.sim-summary {
  margin: 0;
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--amber);
  background: var(--paper-2);
  font-size: 0.93rem;
}
.sim-summary.is-balanced {
  border-left-color: var(--ok);
}
.tick,
.tiny,
.weight-label {
  font-family: system-ui, sans-serif;
}
.tick {
  font-size: 9px;
  fill: var(--ink-soft);
}
.tiny {
  font-size: 11px;
  fill: var(--ink-soft);
}
.weight-label {
  font-size: 12px;
  font-weight: 700;
  fill: var(--ink);
}
.weight-unit,
.reaction,
.badge {
  font-family: system-ui, sans-serif;
}
.weight-unit {
  font-size: 9px;
  fill: var(--ink-soft);
}
.reaction {
  font-size: 11px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.badge {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  fill: var(--ok);
}
</style>
