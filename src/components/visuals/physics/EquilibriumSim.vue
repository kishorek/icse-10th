<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'

const arrangement = ref('balanced')
const motion = reactive({ x: 0, rot: 0 })
const meters = reactive({ force: 0, moment: 0 })
let animation = null
let meterAnimation = null
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
  if (arrangement.value === 'balanced') {
    return { x: 0, rot: 0, force: 0, moment: 0, forceText: '0 N', momentText: '0 N m' }
  }
  if (arrangement.value === 'unbalanced') {
    return { x: 68, rot: 0, force: 6, moment: 0, forceText: '6 N to the right', momentText: '0 N m about the centre' }
  }
  if (arrangement.value === 'couple') {
    return { x: 0, rot: 26, force: 0, moment: 4, forceText: '0 N', momentText: '4 N m (10 N × 0.4 m)' }
  }
  return {
    x: 58,
    rot: 18,
    force: 10,
    moment: 3,
    forceText: '10 N to the right',
    momentText: 'not zero about the centre'
  }
})

const verdict = computed(() => {
  if (arrangement.value === 'balanced') return 'No change: the body stays at rest. Both equilibrium conditions are satisfied.'
  if (arrangement.value === 'unbalanced') return 'The body slides to the right: the forces do not cancel.'
  if (arrangement.value === 'couple') return 'The body spins about its centre: the forces cancel but their moments add.'
  return 'The body slides and spins: one force gives both a net force and a moment about the centre.'
})

const forcePercent = computed(() => Math.min(100, (meters.force / 10) * 100))
const momentPercent = computed(() => Math.min(100, (meters.moment / 4) * 100))

const rotationArc = computed(() => {
  if (motion.rot < 0.5) return ''
  return 'M 318 158 A 44 44 0 0 0 318 202'
})

function apply() {
  animation?.pause()
  animation?.revert?.()
  meterAnimation?.pause()
  meterAnimation?.revert?.()
  animation = null
  meterAnimation = null

  const goal = target.value
  if (reduced) {
    motion.x = goal.x
    motion.rot = goal.rot
    meters.force = goal.force
    meters.moment = goal.moment
    return
  }

  animation = animate(motion, {
    x: goal.x,
    rot: goal.rot,
    duration: 950,
    easing: 'easeOutElastic'
  })
  meterAnimation = animate(meters, {
    force: goal.force,
    moment: goal.moment,
    duration: 700,
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
  meterAnimation?.pause()
  meterAnimation?.revert?.()
  animation = null
  meterAnimation = null
})
</script>

<template>
  <div class="equilibrium-sim">
    <svg viewBox="0 0 720 350" role="img" aria-labelledby="eq-title eq-desc">
      <title id="eq-title">Four force arrangements</title>
      <desc id="eq-desc">{{ verdict }}</desc>
      <defs>
        <marker id="eq-head" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="12" refY="8" orient="auto">
          <path d="M 0 0 L 16 8 L 0 16 z" fill="#a05f0c" />
        </marker>
        <marker id="eq-arc-head" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 z" fill="#0f5c5c" />
        </marker>
      </defs>

      <line x1="60" y1="300" x2="660" y2="300" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 6" />
      <text x="92" y="324" class="floor">starting position</text>

      <rect x="280" y="130" width="160" height="100" rx="10" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="7 5" />
      <circle cx="360" cy="180" r="3" fill="var(--muted)" />

      <line x1="360" y1="180" :x2="360 + motion.x" y2="180" stroke="var(--teal)" stroke-width="2" stroke-dasharray="5 4" opacity="0.6" />
      <path v-if="rotationArc" :d="rotationArc" fill="none" stroke="var(--teal)" stroke-width="3" marker-end="url(#eq-arc-head)" :opacity="Math.min(1, motion.rot / 20)" />

      <g :transform="`translate(${motion.x} 0) rotate(${motion.rot} 360 180)`">
        <rect x="280" y="130" width="160" height="100" rx="10" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="4" />
        <circle cx="360" cy="180" r="6" fill="var(--teal-dark)" />
        <text x="360" y="204" text-anchor="middle" class="body-label">body</text>
        <g v-for="(arrow, index) in arrows" :key="`${arrangement}-${index}`">
          <line
            :x1="arrow.x1"
            :y1="arrow.y1"
            :x2="arrow.x2"
            :y2="arrow.y2"
            stroke="var(--amber)"
            stroke-width="6"
            stroke-linecap="round"
            marker-end="url(#eq-head)"
          />
          <text :x="(arrow.x1 + arrow.x2) / 2" :y="arrow.labelY" text-anchor="middle" class="force-label">
            {{ arrow.label }}
          </text>
        </g>
      </g>


      <text x="360" y="38" text-anchor="middle" class="heading">
        {{ arrangements.find((item) => item.id === arrangement).label }}
      </text>
    </svg>

    <div class="meter-block">
      <div class="meter-row">
        <span class="meter-label">Resultant force</span>
        <span class="meter-track"><span class="meter-fill force" :style="{ width: `${forcePercent}%` }"></span></span>
        <span class="meter-value">{{ meters.force.toFixed(0) }} N</span>
      </div>
      <div class="meter-row">
        <span class="meter-label">Resultant moment</span>
        <span class="meter-track"><span class="meter-fill moment" :style="{ width: `${momentPercent}%` }"></span></span>
        <span class="meter-value">{{ meters.moment.toFixed(1) }} N m</span>
      </div>
    </div>

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
      <p>Resultant force: {{ target.forceText }} · Resultant moment: {{ target.momentText }}</p>
    </div>
  </div>
</template>

<style scoped>
.equilibrium-sim {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.5rem;
}
.meter-block {
  display: grid;
  gap: 0.35rem;
}
.meter-row {
  display: grid;
  grid-template-columns: 8.5rem 1fr 5.5rem;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.86rem;
  color: var(--ink-soft);
}
.meter-track {
  display: block;
  height: 12px;
  border-radius: 999px;
  background: var(--paper-3);
  overflow: hidden;
}
.meter-fill {
  display: block;
  height: 100%;
  transition: width 220ms ease-out;
}
.meter-fill.force {
  background: var(--amber);
}
.meter-fill.moment {
  background: var(--teal);
}
.meter-value {
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  color: var(--teal-dark);
}
.heading,
.body-label,
.force-label,
.floor {
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
  paint-order: stroke;
  stroke: var(--paper-2);
  stroke-width: 3px;
}
.floor {
  font-size: 11px;
  fill: var(--muted);
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
