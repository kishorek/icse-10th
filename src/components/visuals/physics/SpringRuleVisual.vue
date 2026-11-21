<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const includeRule = ref(false)
const shownF = reactive({ value: 16 })
const ruleOpacity = reactive({ value: 0 })
const status = ref('Ready')
let run = null
let fadeRun = null
let reduced = false

const reaction = computed(() => (includeRule.value ? 26 : 16))
const forceTipY = computed(() => 166 - 20 - shownF.value * 1.7)
const equation = computed(() =>
  includeRule.value
    ? '40 × 40 + 20 × 50 = 2600 → F = 2600 ÷ 100 = 26 kgf'
    : '40 × 40 = 1600 → F = 1600 ÷ 100 = 16 kgf'
)
const summary = computed(
  () =>
    includeRule.value
      ? 'The rule’s own weight 20 kgf acts at its midpoint, 50 cm from A. The spring must now supply 26 kgf.'
      : 'With a negligible rule, the only clockwise moment is the 40 kgf weight at 40 cm. The spring supplies 16 kgf.'
)

function apply() {
  run?.pause()
  run?.revert?.()
  fadeRun?.pause()
  fadeRun?.revert?.()
  run = null
  fadeRun = null
  if (reduced) {
    shownF.value = reaction.value
    ruleOpacity.value = includeRule.value ? 1 : 0
    return
  }
  run = animate(shownF, { value: reaction.value, duration: 650, easing: 'easeOutQuad' })
  fadeRun = animate(ruleOpacity, {
    value: includeRule.value ? 1 : 0,
    duration: 450,
    easing: 'easeOutQuad'
  })
}

function toggleRule() {
  includeRule.value = !includeRule.value
  status.value = includeRule.value ? 'Rule weight included' : 'Rule weight removed'
  apply()
}

function reset() {
  includeRule.value = false
  status.value = 'Reset'
  apply()
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
apply()

onBeforeUnmount(() => {
  run?.pause()
  run?.revert?.()
  fadeRun?.pause()
  fadeRun?.revert?.()
  run = null
  fadeRun = null
})
</script>

<template>
  <div class="spring-rule">
    <svg viewBox="0 0 720 340" role="img" aria-labelledby="spring-rule-title spring-rule-desc">
      <title id="spring-rule-title">Spring balance supporting a metre rule</title>
      <desc id="spring-rule-desc">{{ summary }}</desc>
      <defs>
        <marker id="spring-head" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="10" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#0f5c5c" />
        </marker>
      </defs>

      <text x="360" y="28" text-anchor="middle" class="panel-title">
        {{ includeRule ? 'Rule of mass 20 kg included' : 'Rule of negligible mass' }}
      </text>

      <rect x="100" y="150" width="520" height="16" rx="3" fill="#f2e7d2" stroke="var(--teal-dark)" stroke-width="3" />
      <line x1="110" y1="158" x2="610" y2="158" stroke="var(--line)" stroke-width="2" />
      <path d="M 100 166 L 100 192 L 80 214 L 120 214 Z" fill="var(--teal)" />
      <text x="100" y="234" text-anchor="middle" class="tiny">pivot A</text>

      <line x1="308" y1="166" x2="308" y2="212" stroke="var(--ink-soft)" stroke-width="2" />
      <rect x="288" y="212" width="40" height="28" rx="4" fill="#f5e3c8" stroke="var(--amber-deep)" stroke-width="2" />
      <text x="308" y="231" text-anchor="middle" class="weight">40</text>
      <text x="308" y="270" text-anchor="middle" class="tiny">40 kgf at 40 cm</text>

      <g :opacity="ruleOpacity.value">
        <line x1="360" y1="158" x2="360" y2="182" stroke="var(--ink-soft)" stroke-width="2" />
        <rect x="342" y="182" width="36" height="26" rx="4" fill="#d9e7df" stroke="var(--teal-dark)" stroke-width="2" />
        <text x="360" y="200" text-anchor="middle" class="weight">20</text>
        <text x="392" y="198" class="tiny">rule weight at 50 cm</text>
      </g>

      <line x1="620" y1="166" x2="620" :y2="forceTipY" stroke="var(--teal)" stroke-width="4" marker-end="url(#spring-head)" />
      <text x="620" :y="forceTipY - 12" text-anchor="middle" class="force">F = {{ shownF.value.toFixed(0) }} kgf</text>
      <text x="620" y="188" text-anchor="middle" class="tiny">spring at 100 cm</text>

      <line x1="100" y1="136" x2="308" y2="136" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4" />
      <text x="204" y="126" text-anchor="middle" class="tiny">40 cm</text>
      <line x1="100" y1="292" x2="620" y2="292" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4" />
      <text x="360" y="310" text-anchor="middle" class="tiny">100 cm</text>

      <text x="360" y="332" text-anchor="middle" class="equation">{{ equation }}</text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" :aria-pressed="includeRule" @click="toggleRule">
        {{ includeRule ? 'Remove the rule’s weight' : 'Include the rule’s weight (20 kg)' }}
      </button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>
    <p class="sim-summary" aria-live="polite">{{ summary }}</p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.spring-rule {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.5rem;
}
.panel-title,
.tiny,
.weight,
.force,
.equation {
  font-family: system-ui, sans-serif;
}
.panel-title {
  font-size: 14px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.tiny {
  font-size: 10px;
  fill: var(--ink-soft);
}
.weight {
  font-size: 11px;
  font-weight: 700;
  fill: var(--ink);
}
.force {
  font-size: 13px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.equation {
  font-size: 13px;
  fill: var(--ink);
}
.sim-summary {
  margin: 0;
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--teal);
  background: var(--paper-2);
  font-size: 0.93rem;
}
</style>
