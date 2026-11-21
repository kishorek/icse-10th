<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'

const speed = ref(5)
const angle = reactive({ value: 45 })
const running = ref(false)
const status = ref('Ready')
let loop = null
let reduced = false

const cx = 360
const cy = 200
const radius = 100

const position = computed(() => {
  const radians = (angle.value * Math.PI) / 180
  return {
    x: cx + radius * Math.cos(radians),
    y: cy - radius * Math.sin(radians)
  }
})

const tangent = computed(() => {
  const radians = (angle.value * Math.PI) / 180
  return { x: -Math.sin(radians), y: -Math.cos(radians) }
})

const tip = computed(() => ({
  x: position.value.x + tangent.value.x * 52,
  y: position.value.y + tangent.value.y * 52
}))

const compass = computed(() => {
  const { x, y } = tangent.value
  if (Math.abs(x) > Math.abs(y)) return x > 0 ? 'east' : 'west'
  return y < 0 ? 'north' : 'south'
})

const ghosts = [90, 180, 270, 0].map((deg) => {
  const radians = (deg * Math.PI) / 180
  return {
    deg,
    x: cx + radius * Math.cos(radians),
    y: cy - radius * Math.sin(radians),
    tx: -Math.sin(radians),
    ty: -Math.cos(radians)
  }
})

function start() {
  loop?.pause()
  loop?.revert?.()
  loop = null
  if (reduced) {
    angle.value = 45
    running.value = false
    status.value = 'Static final frame because reduced motion is on'
    return
  }
  loop = animate(angle, {
    value: angle.value + 360,
    duration: 9000 / speed.value,
    easing: 'linear',
    loop: true
  })
  running.value = true
  status.value = 'Playing. Speed is constant; direction keeps changing.'
}

function pause() {
  loop?.pause()
  running.value = false
  status.value = 'Paused'
}

function restart() {
  angle.value = 45
  start()
}

watch(speed, () => {
  if (running.value) start()
})

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    angle.value = 45
  } else {
    start()
  }
}

onBeforeUnmount(() => {
  loop?.pause()
  loop?.revert?.()
  loop = null
})
</script>

<template>
  <div class="circular-velocity">
    <svg viewBox="0 0 720 345" role="img" aria-labelledby="vel-title vel-desc">
      <title id="vel-title">Velocity along the tangent in circular motion</title>
      <desc id="vel-desc">
        A particle moves at constant speed around a circle. Its velocity arrow is always tangent to the circle,
        so the direction of velocity changes even though the speed does not.
      </desc>
      <defs>
        <marker markerUnits="userSpaceOnUse" id="vel-head" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#a05f0c" />
        </marker>
      </defs>

      <circle :cx="cx" :cy="cy" :r="radius" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 6" />
      <circle :cx="cx" :cy="cy" r="6" fill="var(--teal-dark)" />

      <g v-for="ghost in ghosts" :key="ghost.deg" opacity="0.35">
        <line
          :x1="ghost.x"
          :y1="ghost.y"
          :x2="ghost.x + ghost.tx * 46"
          :y2="ghost.y + ghost.ty * 46"
          stroke="var(--teal)"
          stroke-width="2"
        />
      </g>

      <circle :cx="position.x" :cy="position.y" r="10" fill="var(--teal)" stroke="var(--teal-dark)" stroke-width="2" />
      <line
        :x1="position.x"
        :y1="position.y"
        :x2="tip.x"
        :y2="tip.y"
        stroke="var(--amber)"
        stroke-width="5"
        stroke-linecap="round"
        marker-end="url(#vel-head)"
      />
      <text :x="tip.x + 10" :y="tip.y + 4" class="v-label">v</text>

      <text x="360" y="24" text-anchor="middle" class="heading">Uniform circular motion</text>
      <text x="360" y="44" text-anchor="middle" class="subheading">speed stays the same · velocity direction changes</text>

      <text x="120" y="312" class="readout">speed = {{ speed.toFixed(1) }} m/s (constant)</text>
      <text x="120" y="332" class="readout">velocity points {{ compass }}</text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="start">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
    </div>
    <label class="bench-field">
      <span>Speed setting: {{ speed.toFixed(1) }} m/s</span>
      <input v-model.number="speed" type="range" min="2" max="10" step="0.5" aria-label="Speed in metres per second" />
    </label>
    <p class="sim-summary" aria-live="polite">
      <strong>Speed is constant; velocity is not.</strong> The arrow never changes length, but it keeps changing
      direction, so the velocity changes. A change of velocity is an acceleration.
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.circular-velocity {
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
  max-width: 30rem;
  accent-color: var(--teal);
}
.heading,
.subheading,
.v-label,
.readout {
  font-family: system-ui, sans-serif;
}
.heading {
  font-size: 16px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.subheading {
  font-size: 12px;
  fill: var(--ink-soft);
}
.v-label {
  paint-order: stroke;
  stroke: var(--paper-2);
  stroke-width: 3px;
  font-size: 18px;
  font-weight: 700;
  fill: var(--amber-deep);
}
.readout {
  font-size: 13px;
  fill: var(--ink-soft);
}
.sim-summary {
  margin: 0;
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--amber);
  background: var(--paper-2);
  font-size: 0.93rem;
}
</style>
