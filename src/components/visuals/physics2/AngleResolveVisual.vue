<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const angle = reactive({ value: 90 })
const force = 50
const distance = 4
const status = ref('Ready')
let run = null
let reduced = false

const radians = computed(() => (angle.value * Math.PI) / 180)
const along = computed(() => force * Math.cos(radians.value))
const perp = computed(() => force * Math.sin(radians.value))
const work = computed(() => force * distance * Math.cos(radians.value))
const blockX = 180
const blockY = 210
const forceLength = 150
const tip = computed(() => ({
  x: blockX + Math.cos(radians.value) * forceLength,
  y: blockY - Math.sin(radians.value) * forceLength
}))
const alongTip = computed(() => ({ x: blockX + along.value * 2.3, y: blockY }))
const perpTip = computed(() => ({ x: blockX, y: blockY - perp.value * 2.3 }))
const stageText = computed(() => {
  if (angle.value > 88) {
    return 'At 90°, the force is perpendicular to the displacement. The along-displacement component is 0 N, so W = 0 J.'
  }
  return `At ${angle.value.toFixed(0)}°, the along-displacement component is ${along.value.toFixed(1)} N, so W = ${work.value.toFixed(1)} J. The perpendicular component does no work.`
})

function setAngle(value) {
  run?.pause()
  run?.revert?.()
  angle.value = value
  status.value = `Set to ${value} degrees`
}

function play() {
  run?.pause()
  run?.revert?.()
  if (reduced) {
    angle.value = 60
    status.value = 'Final state shown because reduced motion is on'
    return
  }
  run = animate(angle, { value: 60, duration: 1300, easing: 'easeInOutQuad' })
  status.value = 'Playing'
}

function pause() {
  run?.pause()
  status.value = 'Paused'
}

function restart() {
  run?.pause()
  run?.revert?.()
  angle.value = 90
  play()
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    angle.value = 60
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
  <div class="angle-resolve">
    <svg viewBox="0 0 720 330" role="img" aria-labelledby="angle-title angle-desc">
      <title id="angle-title">Resolving a force at an angle to the displacement</title>
      <desc id="angle-desc">{{ stageText }}</desc>
      <defs>
        <marker id="angle-force" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="15" refX="11" refY="7.5" orient="auto">
          <path d="M 0 0 L 15 7.5 L 0 15 z" fill="#a05f0c" />
        </marker>
        <marker id="angle-comp" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 z" fill="#0f5c5c" />
        </marker>
      </defs>

      <line x1="90" y1="250" x2="650" y2="250" stroke="var(--line)" stroke-width="2" />
      <rect :x="blockX - 36" :y="blockY - 28" width="72" height="50" rx="7" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
      <text :x="blockX" :y="blockY + 4" text-anchor="middle" class="block">m</text>

      <line :x1="blockX" :y1="blockY - 12" :x2="tip.x" :y2="tip.y" stroke="var(--amber)" stroke-width="5" stroke-linecap="round" marker-end="url(#angle-force)" />
      <text :x="tip.x + 8" :y="tip.y - 8" class="force">F = {{ force }} N</text>

      <line :x1="blockX" :y1="blockY - 12" :x2="alongTip.x" :y2="alongTip.y" stroke="var(--teal)" stroke-width="4" marker-end="url(#angle-comp)" />
      <text :x="alongTip.x + 8" :y="alongTip.y + 20" class="comp">F cos θ = {{ along.toFixed(1) }} N</text>

      <line :x1="blockX" :y1="blockY - 12" :x2="perpTip.x" :y2="perpTip.y" stroke="var(--amber-deep)" stroke-width="3" stroke-dasharray="5 4" marker-end="url(#angle-comp)" />
      <text :x="perpTip.x + 10" :y="perpTip.y - 8" class="perp">F sin θ = {{ perp.toFixed(1) }} N (no work)</text>

      <path :d="`M ${blockX + 70} ${blockY - 12} A 70 70 0 0 0 ${blockX + 70 * Math.cos(radians)} ${blockY - 12 - 70 * Math.sin(radians)}`" fill="none" stroke="var(--teal-dark)" stroke-width="2" stroke-dasharray="4 3" />
      <text :x="blockX + 88" :y="blockY - 50" class="theta">θ = {{ angle.value.toFixed(0) }}°</text>

      <rect x="430" y="54" width="240" height="98" rx="8" fill="#fbf8f1" stroke="var(--line)" />
      <text x="448" y="80" class="small">Along-displacement part</text>
      <text x="448" y="108" class="big">{{ along.toFixed(1) }} N</text>
      <text x="448" y="134" class="small">Work = {{ work.toFixed(1) }} J</text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="setAngle(90)">Set 90°</button>
      <button type="button" class="btn btn-small" @click="setAngle(60)">Set 60°</button>
    </div>

    <p class="sim-summary" aria-live="polite"><strong>{{ stageText }}</strong></p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.angle-resolve { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.angle-resolve svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.block, .force, .comp, .perp, .theta, .small, .big { font-family: var(--sans); }
.block { font-size: 20px; font-weight: 700; fill: var(--teal-dark); }
.force { font-size: 17px; font-weight: 700; fill: var(--amber-deep); paint-order: stroke; stroke: #fbf8f1; stroke-width: 3px; }
.comp { font-size: 13px; font-weight: 700; fill: var(--teal-dark); paint-order: stroke; stroke: #fbf8f1; stroke-width: 3px; }
.perp { font-size: 12px; fill: var(--amber-deep); paint-order: stroke; stroke: #fbf8f1; stroke-width: 3px; }
.theta { font-size: 14px; font-weight: 700; fill: var(--teal-dark); }
.small { font-size: 12px; fill: var(--ink-soft); }
.big { font-size: 21px; font-weight: 700; fill: var(--teal-dark); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
