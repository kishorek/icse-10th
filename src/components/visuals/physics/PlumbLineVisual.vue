<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { createTimeline, svg } from 'animejs'

const rotation = reactive({ value: 0 })
const stage = ref(0)
const status = ref('Ready')
const lineEls = ref([])
let timeline = null
let reduced = false

const gx = 360
const gy = 170
const holes = [
  { id: 'a', x: -80, y: -30 },
  { id: 'b', x: 70, y: -55 },
  { id: 'c', x: 35, y: 75 }
]

const laminaPath = computed(() => {
  const points = [
    [-110, -40],
    [-70, -95],
    [-5, -70],
    [55, -100],
    [110, -45],
    [95, 20],
    [120, 80],
    [40, 105],
    [-20, 90],
    [-90, 60]
  ]
  return `M ${points.map(([x, y]) => `${gx + x} ${gy + y}`).join(' L ')} Z`
})

const rotations = holes.map((hole) => {
  const angle = (Math.atan2(hole.y, hole.x) * 180) / Math.PI
  return -90 - angle
})

const lines = computed(() =>
  holes.map((hole) => {
    const farX = hole.x + (0 - hole.x) * 2.3
    const farY = hole.y + (0 - hole.y) * 2.3
    return {
      id: hole.id,
      x1: gx + hole.x,
      y1: gy + hole.y,
      x2: gx + farX,
      y2: gy + farY
    }
  })
)

const stageText = computed(() => {
  if (stage.value === 0) return 'Hang the lamina from hole a. It settles with G vertically below the hole; mark the plumb line.'
  if (stage.value === 1) return 'Now hang it from hole b. The card turns, and a second plumb line is marked.'
  if (stage.value === 2) return 'Hang it from hole c and mark the third line.'
  return 'The three marked lines meet at G, the centre of gravity of the lamina.'
})

function buildTimeline() {
  if (lineEls.value.length < 3) return
  timeline?.revert?.()
  rotation.value = rotations[0]
  stage.value = 0
  const draws = lineEls.value.map((el) => svg.createDrawable(el))
  timeline = createTimeline({ autoplay: false })
  timeline
    .add(rotation, { value: rotations[0], duration: 500, easing: 'easeOutQuad' }, 0)
    .add(draws[0], { draw: '0 1', duration: 320 }, 520)
    .call(() => {
      stage.value = 1
    }, 880)
    .add(rotation, { value: rotations[1], duration: 850, easing: 'easeInOutQuad' }, 900)
    .add(draws[1], { draw: '0 1', duration: 320 }, 1760)
    .call(() => {
      stage.value = 2
    }, 2090)
    .add(rotation, { value: rotations[2], duration: 850, easing: 'easeInOutQuad' }, 2110)
    .add(draws[2], { draw: '0 1', duration: 320 }, 2970)
    .call(() => {
      stage.value = 3
    }, 3300)
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
  rotation.value = rotations[0]
  timeline?.restart()
  status.value = 'Playing from the start'
}
function reset() {
  timeline?.pause()
  if (timeline) timeline.progress = 0
  rotation.value = rotations[0]
  stage.value = 0
  status.value = 'Reset'
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  requestAnimationFrame(() => {
    buildTimeline()
    if (reduced && timeline) {
      timeline.progress = 1
      timeline.pause()
      stage.value = 3
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
  <div class="plumb-visual">
    <svg viewBox="0 0 720 360" role="img" aria-labelledby="plumb-title plumb-desc">
      <title id="plumb-title">Finding the centre of gravity with a plumb line</title>
      <desc id="plumb-desc">{{ stageText }}</desc>

      <line x1="360" y1="24" x2="360" y2="336" stroke="var(--line)" stroke-width="1" stroke-dasharray="5 6" />

      <g :transform="`rotate(${rotation.value} ${gx} ${gy})`">
        <path :d="laminaPath" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
        <circle
          v-for="hole in holes"
          :key="hole.id"
          :cx="gx + hole.x"
          :cy="gy + hole.y"
          r="5"
          fill="var(--paper-2)"
          stroke="var(--teal-dark)"
          stroke-width="2"
        />
        <text
          v-for="hole in holes"
          :key="`${hole.id}-label`"
          :x="gx + hole.x + 10"
          :y="gy + hole.y - 6"
          class="hole"
        >
          {{ hole.id }}
        </text>

        <path
          v-for="(line, index) in lines"
          :key="`${line.id}-draw`"
          ref="lineEls"
          :d="`M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`"
          fill="none"
          stroke="var(--amber)"
          stroke-width="3"
        />
      </g>

      <circle :cx="gx" :cy="gy" r="8" fill="var(--amber)" stroke="var(--amber-deep)" stroke-width="2" />
      <text :x="gx + 14" :y="gy + 6" class="g-label">G</text>

      <text x="360" y="346" text-anchor="middle" class="step">{{ stageText }}</text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>
    <p class="sr-only" aria-live="polite">{{ status }}. Stage {{ stage + 1 }} of 4.</p>
    <p class="plumb-note">
      Each plumb line is marked on the card, so the mark turns with the lamina. After three suspensions the marks cross at G.
    </p>
  </div>
</template>

<style scoped>
.plumb-visual {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.4rem;
}
.hole,
.g-label,
.step,
.plumb-note {
  font-family: system-ui, sans-serif;
}
.hole {
  font-size: 12px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.g-label {
  font-size: 16px;
  font-weight: 700;
  fill: var(--amber-deep);
}
.step {
  font-size: 12px;
  fill: var(--ink-soft);
}
.plumb-note {
  margin: 0;
  font-size: 0.9rem;
  color: var(--ink-soft);
}
</style>
