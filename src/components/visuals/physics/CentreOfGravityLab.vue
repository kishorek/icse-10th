<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'

const shapes = [
  { id: 'rod', name: 'Uniform rod', where: 'Midpoint of the rod' },
  { id: 'disc', name: 'Circular disc', where: 'Centre of the circle' },
  { id: 'ring', name: 'Circular ring', where: 'Centre of the ring, outside the material' },
  { id: 'triangle', name: 'Triangular lamina', where: 'Intersection of the medians' },
  { id: 'parallelogram', name: 'Parallelogram', where: 'Intersection of the diagonals' },
  { id: 'square', name: 'Square lamina', where: 'Intersection of the diagonals' },
  { id: 'cylinder', name: 'Solid cylinder', where: 'Midpoint of the axis' },
  { id: 'cone', name: 'Solid cone', where: 'On the axis, h/4 above the base' }
]

const shape = ref('rod')
const supported = ref(true)
const tilt = reactive({ value: 0 })
let animation = null
let reduced = false

const active = computed(() => shapes.find((item) => item.id === shape.value))
const gPoint = computed(() => {
  if (shape.value === 'triangle') return { x: 360, y: 185 }
  if (shape.value === 'cone') return { x: 360, y: 198 }
  if (shape.value === 'cylinder') return { x: 360, y: 168 }
  return { x: 360, y: 165 }
})
const gx = computed(() => gPoint.value.x)
const gy = computed(() => gPoint.value.y)
const supportStart = computed(() => (shape.value === 'cone' ? 250 : gy.value + 26))

function apply() {
  animation?.pause()
  animation?.revert?.()
  animation = null
  const goal = supported.value ? 0 : 9
  if (reduced) {
    tilt.value = goal
    return
  }
  animation = animate(tilt, {
    value: goal,
    duration: 520,
    easing: supported.value ? 'easeOutBack' : 'easeOutQuad'
  })
}

watch([shape, supported], apply)

function reset() {
  shape.value = 'rod'
  supported.value = true
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
  <div class="cg-lab">
    <svg viewBox="0 0 720 330" role="img" aria-labelledby="cg-title cg-desc">
      <title id="cg-title">Centre of gravity of regular shapes</title>
      <desc id="cg-desc">
        {{ active.name }}: centre of gravity at the {{ active.where.toLowerCase() }}.
        {{ supported ? 'It balances when supported at G.' : 'Without support at G it tilts.' }}
      </desc>

      <g :transform="`rotate(${tilt.value} ${gx} ${gy})`">
        <g v-if="shape === 'rod'">
          <rect x="210" y="156" width="300" height="18" rx="6" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
        </g>
        <g v-else-if="shape === 'disc'">
          <circle cx="360" cy="165" r="86" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
          <line x1="274" y1="165" x2="446" y2="165" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4" />
        </g>
        <g v-else-if="shape === 'ring'">
          <circle cx="360" cy="165" r="86" fill="none" stroke="var(--teal-dark)" stroke-width="22" />
          <line x1="274" y1="165" x2="446" y2="165" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4" />
        </g>
        <g v-else-if="shape === 'triangle'">
          <polygon points="360,78 448,238 272,238" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
          <line x1="360" y1="78" x2="360" y2="238" stroke="var(--teal)" stroke-width="1.5" stroke-dasharray="4 4" />
          <line x1="448" y1="238" x2="316" y2="158" stroke="var(--teal)" stroke-width="1.5" stroke-dasharray="4 4" />
          <line x1="272" y1="238" x2="404" y2="158" stroke="var(--teal)" stroke-width="1.5" stroke-dasharray="4 4" />
        </g>
        <g v-else-if="shape === 'parallelogram'">
          <polygon points="286,100 458,100 434,230 262,230" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
          <line x1="286" y1="100" x2="434" y2="230" stroke="var(--teal)" stroke-width="1.5" stroke-dasharray="4 4" />
          <line x1="458" y1="100" x2="262" y2="230" stroke="var(--teal)" stroke-width="1.5" stroke-dasharray="4 4" />
        </g>
        <g v-else-if="shape === 'square'">
          <rect x="286" y="91" width="148" height="148" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
          <line x1="286" y1="91" x2="434" y2="239" stroke="var(--teal)" stroke-width="1.5" stroke-dasharray="4 4" />
          <line x1="434" y1="91" x2="286" y2="239" stroke="var(--teal)" stroke-width="1.5" stroke-dasharray="4 4" />
        </g>
        <g v-else-if="shape === 'cylinder'">
          <rect x="296" y="98" width="128" height="140" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
          <ellipse cx="360" cy="98" rx="64" ry="16" fill="#f7efdf" stroke="var(--teal-dark)" stroke-width="3" />
          <line x1="360" y1="98" x2="360" y2="238" stroke="var(--teal)" stroke-width="1.5" stroke-dasharray="4 4" />
        </g>
        <g v-else>
          <polygon points="360,78 434,238 286,238" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
          <ellipse cx="360" cy="238" rx="74" ry="18" fill="#f7efdf" stroke="var(--teal-dark)" stroke-width="3" />
          <line x1="360" y1="78" x2="360" y2="238" stroke="var(--teal)" stroke-width="1.5" stroke-dasharray="4 4" />
        </g>

        <circle :cx="gx" :cy="gy" r="7" fill="var(--amber)" stroke="var(--amber-deep)" stroke-width="2" />
        <text :x="gx + 14" :y="gy + 5" class="g-label">G</text>
      </g>

      <path :d="`M ${gx} ${supportStart} L ${gx} ${supportStart + 24} L ${gx - 18} ${supportStart + 48} L ${gx + 18} ${supportStart + 48} Z`" fill="var(--teal)" />
      <text :x="gx" :y="supportStart + 66" text-anchor="middle" class="small">
        {{ shape === 'cone' ? 'support under the base centre' : 'support at G' }}
      </text>

      <text x="360" y="36" text-anchor="middle" class="heading">{{ active.name }}</text>
      <text x="360" y="58" text-anchor="middle" class="subheading">{{ active.where }}</text>
      <text x="660" y="316" text-anchor="end" class="badge">
        {{ supported ? 'Balanced' : 'Tilts without support at G' }}
      </text>
    </svg>

    <div class="lab-controls">
      <button
        v-for="item in shapes"
        :key="item.id"
        type="button"
        class="btn btn-small"
        :aria-pressed="shape === item.id"
        @click="shape = item.id"
      >
        {{ item.name }}
      </button>
      <button type="button" class="btn btn-small" :aria-pressed="!supported" @click="supported = !supported">
        {{ supported ? 'Remove support' : 'Support at G' }}
      </button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>{{ active.name }}:</strong> G is at the {{ active.where.toLowerCase() }}.
      <span v-if="shape === 'ring'">The centre of a ring is empty, yet the ring balances there.</span>
    </p>
  </div>
</template>

<style scoped>
.cg-lab {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.5rem;
}
.heading,
.subheading,
.g-label,
.small,
.badge {
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
.g-label {
  font-size: 16px;
  font-weight: 700;
  fill: var(--amber-deep);
}
.small {
  font-size: 11px;
  fill: var(--ink-soft);
}
.badge {
  font-size: 11px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.sim-summary {
  margin: 0;
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--teal);
  background: var(--paper-2);
  font-size: 0.93rem;
}
</style>
