<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'

const source = ref('tension')
const escape = reactive({ value: 0 })
const released = ref(false)
let run = null
let reduced = false

const cx = 360
const cy = 170
const radius = 105
const theta = (-60 * Math.PI) / 180

const point = {
  x: cx + radius * Math.cos(theta),
  y: cy - radius * Math.sin(theta)
}
const tangent = { x: -Math.sin(theta), y: -Math.cos(theta) }
const escapeEnd = { x: point.x + tangent.x * 220, y: point.y + tangent.y * 220 }
const escapePoint = computed(() => ({
  x: point.x + (escapeEnd.x - point.x) * escape.value,
  y: point.y + (escapeEnd.y - point.y) * escape.value
}))

const sourceLabel = computed(() => {
  if (source.value === 'tension') return 'tension in the string'
  if (source.value === 'gravity') return 'gravity from the star'
  return 'electrostatic attraction from the nucleus'
})

const verdict = computed(() => {
  if (!released.value) {
    return `The ${sourceLabel.value} points to the centre and keeps the body on the circle. It is the centripetal force here.`
  }
  return `With the force removed, the body leaves along the tangent in a straight line. It does not move outwards along a radius.`
})

function release() {
  released.value = true
  run?.pause()
  run?.revert?.()
  run = null
  if (reduced) {
    escape.value = 1
    return
  }
  run = animate(escape, { value: 1, duration: 1100, easing: 'easeInOutQuad' })
}

function reset() {
  run?.pause()
  run?.revert?.()
  run = null
  escape.value = 0
  released.value = false
}

watch(source, reset)

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

onBeforeUnmount(() => {
  run?.pause()
  run?.revert?.()
  run = null
})
</script>

<template>
  <div class="centripetal-lab">
    <svg viewBox="0 0 720 340" role="img" aria-labelledby="cent-title cent-desc">
      <title id="cent-title">Centripetal force and what happens when it is removed</title>
      <desc id="cent-desc">{{ verdict }}</desc>
      <defs>
        <marker markerUnits="userSpaceOnUse" id="cent-head" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#0f5c5c" />
        </marker>
        <marker markerUnits="userSpaceOnUse" id="cent-escape" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 z" fill="#a05f0c" />
        </marker>
      </defs>

      <circle :cx="cx" :cy="cy" :r="radius" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 6" />

      <g>
        <circle v-if="source === 'gravity'" :cx="cx" :cy="cy" r="26" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
        <circle v-else-if="source === 'electrostatic'" :cx="cx" :cy="cy" r="12" fill="var(--bad)" opacity="0.85" />
        <circle v-else :cx="cx" :cy="cy" r="10" fill="var(--teal-dark)" />
        <text :x="cx" :y="cy + 46" text-anchor="middle" class="tiny">
          {{ source === 'gravity' ? 'star' : source === 'electrostatic' ? 'nucleus' : 'hand' }}
        </text>
      </g>

      <line
        v-if="source === 'tension' && !released"
        :x1="cx"
        :y1="cy"
        :x2="point.x"
        :y2="point.y"
        stroke="var(--ink-soft)"
        stroke-width="2"
      />

      <line
        :x1="point.x"
        :y1="point.y"
        :x2="cx + (point.x - cx) * 0.45"
        :y2="cy + (point.y - cy) * 0.45"
        stroke="var(--teal)"
        stroke-width="4"
        stroke-linecap="round"
        marker-end="url(#cent-head)"
        :opacity="1 - escape.value"
      />
      <text
        :x="cx + (point.x - cx) * 0.62"
        :y="cy + (point.y - cy) * 0.62 - 8"
        text-anchor="middle"
        class="force-label"
        :opacity="1 - escape.value"
      >
        {{ source === 'tension' ? 'tension' : source === 'gravity' ? 'gravity' : 'electrostatic' }}
      </text>

      <line
        v-if="escape.value > 0"
        :x1="point.x"
        :y1="point.y"
        :x2="escapePoint.x"
        :y2="escapePoint.y"
        stroke="var(--amber)"
        stroke-width="3"
        stroke-dasharray="7 4"
      />
      <line
        v-if="escape.value > 0"
        :x1="escapePoint.x - tangent.x * 16"
        :y1="escapePoint.y - tangent.y * 16"
        :x2="escapePoint.x"
        :y2="escapePoint.y"
        stroke="var(--amber)"
        stroke-width="4"
        marker-end="url(#cent-escape)"
      />

      <circle :cx="escapePoint.x" :cy="escapePoint.y" r="10" fill="var(--teal)" stroke="var(--teal-dark)" stroke-width="2" />
      <text x="360" y="322" text-anchor="middle" class="step">{{ verdict }}</text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" :aria-pressed="source === 'tension'" @click="source = 'tension'">
        String (tension)
      </button>
      <button type="button" class="btn btn-small" :aria-pressed="source === 'gravity'" @click="source = 'gravity'">
        Planet (gravity)
      </button>
      <button type="button" class="btn btn-small" :aria-pressed="source === 'electrostatic'" @click="source = 'electrostatic'">
        Atom (electrostatic)
      </button>
      <button type="button" class="btn btn-small" @click="release">
        {{ source === 'tension' ? 'Cut the string' : 'Switch the force off' }}
      </button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>
    <p class="sim-summary" aria-live="polite">{{ verdict }}</p>
  </div>
</template>

<style scoped>
.centripetal-lab {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.5rem;
}
.force-label,
.tiny,
.step {
  font-family: system-ui, sans-serif;
}
.force-label {
  paint-order: stroke;
  stroke: var(--paper-2);
  stroke-width: 3px;
  font-size: 12px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.tiny {
  font-size: 11px;
  fill: var(--ink-soft);
}
.step {
  font-size: 12px;
  fill: var(--ink-soft);
}
.sim-summary {
  margin: 0;
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--teal);
  background: var(--paper-2);
  font-size: 0.93rem;
}
</style>
