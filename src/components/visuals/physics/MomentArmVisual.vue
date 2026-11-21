<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { createTimeline, svg } from 'animejs'

const state = reactive({ angle: 90 })
const stage = ref(0)
const status = ref('Ready')
const linePath = ref(null)
const armPath = ref(null)
let timeline = null

const pivotX = 170
const pivotY = 215
const handleX = 450
const radians = computed(() => (state.angle * Math.PI) / 180)
const unit = computed(() => ({ x: Math.cos(radians.value), y: -Math.sin(radians.value) }))
const arm = computed(() => Math.sin(radians.value))

const foot = computed(() => {
  const hx = pivotX - handleX
  const hy = pivotY - pivotY
  const dot = hx * unit.value.x + hy * unit.value.y
  return { x: handleX + unit.value.x * dot, y: pivotY + unit.value.y * dot }
})
const tip = computed(() => ({
  x: handleX + unit.value.x * 88,
  y: pivotY + unit.value.y * 88
}))
const tail = computed(() => ({
  x: handleX - unit.value.x * 180,
  y: pivotY - unit.value.y * 180
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

const stageText = computed(() => {
  if (stage.value === 0) return 'Stage 1: a perpendicular push. The line of action is vertical, and the full distance from the pivot counts.'
  if (stage.value === 1) return 'Stage 2: tilt the same force. The line of action now passes closer to the pivot.'
  return 'Stage 3: the perpendicular distance d is shorter, so the moment is smaller even though the force has not changed.'
})

function buildTimeline() {
  if (!linePath.value || !armPath.value) return
  const lineDraw = svg.createDrawable(linePath.value)
  const armDraw = svg.createDrawable(armPath.value)
  timeline = createTimeline({ autoplay: false })
  timeline
    .call(() => {
      stage.value = 0
    }, 0)
    .add(state, { angle: 90, duration: 180 })
    .add(lineDraw, { draw: '0 1', duration: 420 }, 260)
    .call(() => {
      stage.value = 1
    }, 760)
    .add(state, { angle: 42, duration: 1000, easing: 'easeInOutQuad' }, 780)
    .call(() => {
      stage.value = 2
    }, 1780)
    .add(armDraw, { draw: ['1 1', '0 1'], duration: 6 }, 1790)
    .add(lineDraw, { draw: ['1 1', '0 1'], duration: 6 }, 1790)
    .add(lineDraw, { draw: '0 1', duration: 360 }, 1800)
    .add(armDraw, { draw: '0 1', duration: 360 }, 1880)
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

function showPerpendicular() {
  timeline?.pause()
  state.angle = 90
  stage.value = 0
}
function showSlanted() {
  timeline?.pause()
  state.angle = 42
  stage.value = 2
}

const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (typeof window !== 'undefined') {
  requestAnimationFrame(() => {
    buildTimeline()
    if (reduced) {
      state.angle = 42
      stage.value = 2
      if (timeline) {
        timeline.progress = 1
        timeline.pause()
      }
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
  <div class="arm-visual">
    <svg viewBox="0 0 720 330" role="img" aria-labelledby="arm-title arm-desc">
      <title id="arm-title">Perpendicular distance and line of action</title>
      <desc id="arm-desc">{{ stageText }}</desc>
      <defs>
        <marker markerUnits="userSpaceOnUse" id="arm-force-head" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#a05f0c" />
        </marker>
      </defs>

      <line x1="60" y1="265" x2="650" y2="265" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 6" />

      <rect :x="pivotX" :y="pivotY - 10" :width="handleX - pivotX" height="20" rx="4" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
      <circle :cx="pivotX" :cy="pivotY" r="10" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
      <text :x="pivotX - 8" :y="pivotY + 34" text-anchor="end" class="label">pivot O</text>

      <line :x1="tail.x" :y1="tail.y" :x2="tip.x" :y2="tip.y" stroke="#b98a4e" stroke-width="1.5" stroke-dasharray="5 5" />
      <line :x1="handleX" :y1="pivotY" :x2="tip.x" :y2="tip.y" stroke="var(--amber)" stroke-width="5" stroke-linecap="round" marker-end="url(#arm-force-head)" />
      <text :x="tip.x + 10" :y="tip.y + 4" class="force-label">F</text>

      <path ref="linePath" :d="`M ${tail.x} ${tail.y} L ${tip.x} ${tip.y}`" fill="none" stroke="var(--amber)" stroke-width="2" stroke-dasharray="6 4" opacity="0.55" />

      <line :x1="pivotX" :y1="pivotY" :x2="foot.x" :y2="foot.y" stroke="var(--teal)" stroke-width="3" stroke-dasharray="8 4" />
      <path ref="armPath" :d="`M ${pivotX} ${pivotY} L ${foot.x} ${foot.y}`" fill="none" stroke="var(--teal)" stroke-width="4" />
      <polyline :points="rightAngle.map((p) => `${p.x},${p.y}`).join(' ')" fill="none" stroke="var(--teal)" stroke-width="2" />

      <text :x="(pivotX + foot.x) / 2" :y="(pivotY + foot.y) / 2 - 30" text-anchor="middle" class="arm-label">
        d = {{ (arm * 1).toFixed(2) }} of the full distance
      </text>
      <text :x="(pivotX + foot.x) / 2" :y="(pivotY + foot.y) / 2 - 12" text-anchor="middle" class="arm-small">
        perpendicular distance
      </text>

      <text x="360" y="306" text-anchor="middle" class="stage">
        {{ stageText }}
      </text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="showPerpendicular">Perpendicular push</button>
      <button type="button" class="btn btn-small" @click="showSlanted">Slanted push</button>
    </div>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
    <p class="arm-note">
      With the door 1.00 m long, a push at 42° has a perpendicular distance of about 0.67 m. At 90° it is 1.00 m.
    </p>
  </div>
</template>

<style scoped>
.arm-visual {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.4rem;
}
.label,
.force-label,
.arm-label,
.arm-small,
.stage {
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
}
.arm-label {
  paint-order: stroke;
  stroke: var(--paper-2);
  stroke-width: 3px;
  font-size: 13px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.arm-small {
  font-size: 10px;
  fill: var(--ink-soft);
}
.stage {
  font-size: 12px;
  fill: var(--ink-soft);
}
.arm-note {
  margin: 0;
  font-size: 0.9rem;
  color: var(--ink-soft);
}
</style>
