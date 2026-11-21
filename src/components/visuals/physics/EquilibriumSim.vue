<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'

const arrangement = ref('balanced')
const motion = reactive({ x: 0, rot: 0 })
let animation = null
let reduced = false

const arrangements = [
  { id: 'balanced', label: 'Equal forces, same line' },
  { id: 'unbalanced', label: 'Unequal forces, same line' },
  { id: 'couple', label: 'Couple' },
  { id: 'single', label: 'One off-centre force' }
]

const arrows = computed(() => {
  if (arrangement.value === 'balanced') {
    return [
      { x1: 226, y1: 180, x2: 300, y2: 180, label: '10 N', labelY: 116 },
      { x1: 494, y1: 180, x2: 420, y2: 180, label: '10 N', labelY: 116 }
    ]
  }
  if (arrangement.value === 'unbalanced') {
    return [
      { x1: 226, y1: 180, x2: 300, y2: 180, label: '10 N', labelY: 116 },
      { x1: 494, y1: 180, x2: 452, y2: 180, label: '4 N', labelY: 116 }
    ]
  }
  if (arrangement.value === 'couple') {
    return [
      { x1: 300, y1: 126, x2: 420, y2: 126, label: '10 N', labelY: 112 },
      { x1: 420, y1: 234, x2: 300, y2: 234, label: '10 N', labelY: 256 }
    ]
  }
  return [{ x1: 300, y1: 126, x2: 420, y2: 126, label: '10 N', labelY: 112 }]
})

const target = computed(() => {
  if (arrangement.value === 'balanced') return { x: 0, rot: 0, force: '0 N', moment: '0 N m' }
  if (arrangement.value === 'unbalanced') return { x: 68, rot: 0, force: '6 N to the right', moment: '0 N m about the centre' }
  if (arrangement.value === 'couple') return { x: 0, rot: 26, force: '0 N', moment: '10 N × 0.4 m = 4 N m' }
  return { x: 58, rot: 18, force: '10 N to the right', moment: 'not zero about the centre' }
})

const verdict = computed(() => {
  if (arrangement.value === 'balanced') return 'No change: the body stays at rest. Both equilibrium conditions are satisfied.'
  if (arrangement.value === 'unbalanced') return 'The body slides to the right: the forces do not cancel.'
  if (arrangement.value === 'couple') return 'The body spins about its centre: the forces cancel but their moments add.'
  return 'The body slides and spins: one force gives both a net force and a moment about the centre.'
})

function apply() {
  animation?.pause()
  animation?.revert?.()
  animation = null
  const goal = target.value
  if (reduced) {
    motion.x = goal.x
    motion.rot = goal.rot
    return
  }
  animation = animate(motion, {
    x: goal.x,
    rot: goal.rot,
    duration: 720,
    easing: 'easeOutQuad'
  })
}

watch(arrangement, apply)

function reset() {
  arrangement.value = 'balanced'
  apply()
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
apply()

onBeforeUnmount(() => {
  animation?.pause()
  animation?.revert?.()
  animation = null
})
</script>

<template>
  <div class="equilibrium-sim">
    <svg viewBox="0 0 720 330" role="img" aria-labelledby="eq-title eq-desc">
      <title id="eq-title">Four force arrangements</title>
      <desc id="eq-desc">{{ verdict }}</desc>
      <defs>
        <marker markerUnits="userSpaceOnUse" id="eq-head" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#a05f0c" />
        </marker>
      </defs>

      <line x1="60" y1="286" x2="660" y2="286" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 6" />

      <g :transform="`translate(${motion.x} 0) rotate(${motion.rot} 360 180)`">
        <rect x="280" y="130" width="160" height="100" rx="10" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="4" />
        <circle cx="360" cy="180" r="6" fill="var(--teal-dark)" />
        <text x="360" y="204" text-anchor="middle" class="body-label">body</text>
      </g>

      <g v-for="(arrow, index) in arrows" :key="`${arrangement}-${index}`">
        <line
          :x1="arrow.x1"
          :y1="arrow.y1"
          :x2="arrow.x2"
          :y2="arrow.y2"
          stroke="var(--amber)"
          stroke-width="5"
          stroke-linecap="round"
          marker-end="url(#eq-head)"
        />
        <text :x="(arrow.x1 + arrow.x2) / 2" :y="arrow.labelY" text-anchor="middle" class="force-label">
          {{ arrow.label }}
        </text>
      </g>

      <text x="360" y="36" text-anchor="middle" class="heading">
        {{ arrangements.find((item) => item.id === arrangement).label }}
      </text>
    </svg>

    <div class="lab-controls">
      <button
        v-for="option in arrangements"
        :key="option.id"
        type="button"
        class="btn btn-small"
        :aria-pressed="arrangement === option.id"
        @click="arrangement = option.id"
      >
        {{ option.label }}
      </button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <div class="sim-summary" aria-live="polite">
      <p><strong>{{ verdict }}</strong></p>
      <p>Resultant force: {{ target.force }} · Resultant moment: {{ target.moment }}</p>
    </div>
  </div>
</template>

<style scoped>
.equilibrium-sim {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.5rem;
}
.heading,
.body-label,
.force-label {
  font-family: system-ui, sans-serif;
}
.heading {
  font-size: 15px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.body-label {
  font-size: 12px;
  fill: var(--ink-soft);
}
.force-label {
  font-size: 13px;
  font-weight: 700;
  fill: var(--amber-deep);
}
.sim-summary {
  padding: 0.65rem 0.8rem;
  border-left: 3px solid var(--teal);
  background: var(--paper-2);
  font-size: 0.94rem;
}
.sim-summary p {
  margin: 0.15rem 0;
}
</style>
