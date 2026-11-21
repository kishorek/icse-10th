<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'

const stage = ref(0)
const phase = reactive({ value: 0 })
const beamTilt = reactive({ value: -7 })
let run = null
let tiltRun = null
let reduced = false

const pivotX = 360
const pivotY = 220
const scale = 100
const childOneX = pivotX - 2.0 * scale
const childTwoX = pivotX - 2.5 * scale
const adultX = pivotX + 2.5 * scale

const stepText = computed(() => {
  if (stage.value === 0) return 'Start with the two children on the left. The beam is not balanced.'
  if (stage.value === 1) return 'Both children are left of the pivot, so their anticlockwise moments add: 60 + 125 = 185 kgf m.'
  if (stage.value === 2) return 'The adult must supply the same clockwise moment. Let the distance be x: 74 × x = 185.'
  return 'x = 185 ÷ 74 = 2.5 m. The adult sits 2.5 m from the pivot and the beam levels.'
})

function setStage(next) {
  stage.value = Math.max(0, Math.min(3, next))
  phase.value = stage.value
  const goal = stage.value < 3 ? -7 : 0
  tiltRun?.pause()
  tiltRun?.revert?.()
  if (reduced) {
    beamTilt.value = goal
    return
  }
  tiltRun = animate(beamTilt, { value: goal, duration: 620, easing: 'easeOutQuad' })
}

function play() {
  run?.pause()
  run?.revert?.()
  if (stage.value >= 3) setStage(0)
  const remaining = 3 - stage.value
  if (reduced) {
    setStage(3)
    return
  }
  run = animate(phase, {
    value: 3,
    duration: Math.max(800, remaining * 1500),
    easing: 'linear',
    onUpdate: () => {
      const next = Math.min(3, Math.floor(phase.value + 0.001))
      if (next !== stage.value) setStage(next)
    }
  })
}

function pause() {
  run?.pause()
}

function next() {
  run?.pause()
  setStage(stage.value + 1)
}

function reset() {
  run?.pause()
  run?.revert?.()
  tiltRun?.pause()
  tiltRun?.revert?.()
  beamTilt.value = -7
  setStage(0)
}

watch(stage, () => {}, { immediate: false })

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
setStage(0)

onBeforeUnmount(() => {
  run?.pause()
  run?.revert?.()
  tiltRun?.pause()
  tiltRun?.revert?.()
  run = null
  tiltRun = null
})
</script>

<template>
  <div class="seesaw-visual">
    <svg viewBox="0 0 720 360" role="img" aria-labelledby="seesaw-title seesaw-desc">
      <title id="seesaw-title">See-saw moment calculation</title>
      <desc id="seesaw-desc">{{ stepText }}</desc>
      <defs>
        <marker markerUnits="userSpaceOnUse" id="seesaw-head" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 z" fill="#405451" />
        </marker>
      </defs>

      <g :transform="`rotate(${beamTilt.value} ${pivotX} ${pivotY})`">
        <rect :x="pivotX - 280" :y="pivotY - 8" width="560" height="16" rx="6" fill="#e9dcc4" stroke="var(--teal-dark)" stroke-width="3" />
        <circle :cx="pivotX" :cy="pivotY" r="8" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />

        <g>
          <line :x1="childOneX" :y1="pivotY" :x2="childOneX" :y2="pivotY + 52" stroke="var(--ink-soft)" stroke-width="2" marker-end="url(#seesaw-head)" />
          <rect :x="childOneX - 23" :y="pivotY - 60" width="46" height="44" rx="8" fill="#d9e7df" stroke="var(--teal-dark)" stroke-width="2" />
          <text :x="childOneX" :y="pivotY - 34" text-anchor="middle" class="person">30 kg</text>
          <text :x="childOneX" :y="pivotY + 46" text-anchor="middle" class="small">2.0 m</text>
        </g>

        <g>
          <line :x1="childTwoX" :y1="pivotY" :x2="childTwoX" :y2="pivotY + 52" stroke="var(--ink-soft)" stroke-width="2" marker-end="url(#seesaw-head)" />
          <rect :x="childTwoX - 23" :y="pivotY - 60" width="46" height="44" rx="8" fill="#d9e7df" stroke="var(--teal-dark)" stroke-width="2" />
          <text :x="childTwoX" :y="pivotY - 34" text-anchor="middle" class="person">50 kg</text>
          <text :x="childTwoX" :y="pivotY + 46" text-anchor="middle" class="small">2.5 m</text>
        </g>

        <g v-if="stage >= 2">
          <line :x1="adultX" :y1="pivotY" :x2="adultX" :y2="pivotY + 52" stroke="var(--ink-soft)" stroke-width="2" marker-end="url(#seesaw-head)" />
          <rect :x="adultX - 23" :y="pivotY - 60" width="46" height="44" rx="8" fill="#f5e3c8" stroke="var(--amber-deep)" stroke-width="2" />
          <text :x="adultX" :y="pivotY - 34" text-anchor="middle" class="person">74 kg</text>
          <text :x="adultX" :y="pivotY + 46" text-anchor="middle" class="small">x m</text>
        </g>
      </g>

      <path :d="`M ${pivotX} ${pivotY + 10} L ${pivotX} ${pivotY + 34} L ${pivotX - 24} ${pivotY + 62} L ${pivotX + 24} ${pivotY + 62} Z`" fill="var(--teal)" />
      <text :x="pivotX" y="304" text-anchor="middle" class="small">pivot at the middle</text>

      <g v-if="stage >= 1">
        <text x="150" y="70" class="moment">30 × 2.0 = 60</text>
        <text x="150" y="92" class="moment">50 × 2.5 = 125</text>
        <text x="150" y="118" class="moment-total">total = 185 kgf m</text>
      </g>
      <g v-if="stage >= 3">
        <text x="540" y="86" class="moment">74 × 2.5 = 185</text>
        <text x="540" y="110" class="moment-total">balanced</text>
      </g>

      <text x="360" y="336" text-anchor="middle" class="step">{{ stepText }}</text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="next">Next step</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>
    <p class="seesaw-note" aria-live="polite">
      Stage {{ stage + 1 }} of 4. Moments are taken about the middle of the see-saw.
    </p>
  </div>
</template>

<style scoped>
.seesaw-visual {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.4rem;
}
.person,
.small,
.moment,
.moment-total,
.step,
.seesaw-note {
  font-family: system-ui, sans-serif;
}
.person {
  font-size: 12px;
  font-weight: 700;
  fill: var(--ink);
}
.small {
  font-size: 11px;
  fill: var(--ink-soft);
}
.moment {
  font-size: 14px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.moment-total {
  font-size: 15px;
  font-weight: 700;
  fill: var(--amber-deep);
}
.step {
  font-size: 12px;
  fill: var(--ink-soft);
}
.seesaw-note {
  margin: 0;
  font-size: 0.9rem;
  color: var(--ink-soft);
}
</style>
