<script setup>
import { computed, ref } from 'vue'

const cases = [
  {
    id: 'wall',
    label: 'Pushing a wall',
    verdict: 'Zero work',
    reason: 'The force is large, but the wall does not move. With displacement s = 0, W = Fs cos θ = 0.',
    icon: 'wall'
  },
  {
    id: 'load',
    label: 'Carrying a load level',
    verdict: 'Zero work against gravity',
    reason: 'The load moves horizontally while the force of gravity on it is vertical. θ = 90°, so cos 90° = 0 and W = 0.',
    icon: 'load'
  },
  {
    id: 'orbit',
    label: 'Circular orbit',
    verdict: 'Zero work by gravity',
    reason: 'At every instant the gravitational force points to the centre and the motion is along the tangent. The force is perpendicular to the displacement, so W = 0.',
    icon: 'orbit'
  }
]

const active = ref('wall')
const current = computed(() => cases.find((item) => item.id === active.value))
const answered = ref('')
const feedback = computed(() => {
  if (!answered.value) return ''
  return answered.value === 'zero'
    ? 'Correct. In all three cases the force has no displacement along its own direction.'
    : 'Look again: the force may be large, but the displacement along the force is zero in each case.'
})
</script>

<template>
  <div class="zero-work">
    <div class="lab-controls" role="group" aria-label="Choose a zero-work example">
      <button
        v-for="item in cases"
        :key="item.id"
        type="button"
        class="btn btn-small"
        :aria-pressed="active === item.id"
        @click="active = item.id"
      >
        {{ item.label }}
      </button>
    </div>

    <svg viewBox="0 0 720 260" role="img" aria-labelledby="zero-title zero-desc">
      <title id="zero-title">Three situations where work is zero</title>
      <desc id="zero-desc">{{ current.label }}: {{ current.verdict }}. {{ current.reason }}</desc>

      <g v-if="current.icon === 'wall'">
        <rect x="300" y="54" width="44" height="150" fill="#e6dcc9" stroke="var(--teal-dark)" stroke-width="3" />
        <line x1="180" y1="150" x2="292" y2="150" stroke="var(--amber)" stroke-width="6" marker-end="url(#zero-arrow)" />
        <text x="230" y="132" text-anchor="middle" class="label">force</text>
        <text x="410" y="132" class="label">wall does not move</text>
        <text x="410" y="156" class="small">displacement s = 0</text>
      </g>

      <g v-else-if="current.icon === 'load'">
        <circle cx="260" cy="96" r="22" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
        <rect x="236" y="118" width="48" height="66" rx="6" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
        <rect x="248" y="58" width="44" height="28" rx="4" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
        <line x1="248" y1="58" x2="248" y2="24" stroke="var(--teal)" stroke-width="3" />
        <line x1="292" y1="58" x2="292" y2="24" stroke="var(--teal)" stroke-width="3" />
        <line x1="248" y1="26" x2="360" y2="26" stroke="var(--teal)" stroke-width="2" marker-end="url(#zero-arrow)" />
        <text x="304" y="18" text-anchor="middle" class="small">motion</text>
        <line x1="270" y1="66" x2="270" y2="112" stroke="var(--amber)" stroke-width="4" marker-end="url(#zero-arrow)" />
        <text x="278" y="94" class="label">weight</text>
        <text x="408" y="92" class="label">force is vertical</text>
        <text x="408" y="116" class="small">displacement is horizontal</text>
        <text x="408" y="140" class="small">θ = 90°, W = 0</text>
      </g>

      <g v-else>
        <circle cx="360" cy="140" r="82" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 5" />
        <circle cx="360" cy="140" r="16" fill="var(--teal-dark)" />
        <circle cx="442" cy="140" r="10" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
        <line x1="442" y1="140" x2="382" y2="140" stroke="var(--amber)" stroke-width="4" marker-end="url(#zero-arrow)" />
        <line x1="442" y1="140" x2="442" y2="86" stroke="var(--teal)" stroke-width="4" marker-end="url(#zero-arrow)" />
        <text x="396" y="128" class="small">gravity</text>
        <text x="450" y="108" class="small">velocity</text>
        <text x="250" y="244" class="small">Gravity is perpendicular to the velocity at every instant.</text>
      </g>

      <defs>
        <marker id="zero-arrow" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 z" fill="#a05f0c" />
        </marker>
      </defs>
    </svg>

    <fieldset class="zero-quiz">
      <legend>{{ current.label }}: what is the work done by the force named in the explanation?</legend>
      <label><input v-model="answered" type="radio" name="zero-work-answer" value="zero" /> Zero</label>
      <label><input v-model="answered" type="radio" name="zero-work-answer" value="positive" /> Positive and large</label>
      <label><input v-model="answered" type="radio" name="zero-work-answer" value="negative" /> Negative</label>
    </fieldset>

    <p class="sim-summary" aria-live="polite">
      <strong>{{ current.verdict }}.</strong> {{ current.reason }}
      <span v-if="feedback"> {{ feedback }}</span>
    </p>
  </div>
</template>

<style scoped>
.zero-work { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.6rem; }
.zero-work svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.zero-quiz { display: flex; flex-wrap: wrap; gap: 0.7rem 1rem; margin: 0; padding: 0.7rem; border: 1px solid var(--line); border-radius: 6px; background: #fbf8f1; }
.zero-quiz legend { padding: 0 0.25rem; font-size: 0.9rem; font-weight: 650; }
.label, .small { font-family: var(--sans); fill: var(--ink); }
.label { font-size: 13px; font-weight: 700; }
.small { font-size: 12px; fill: var(--ink-soft); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
