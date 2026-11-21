<script setup>
import { computed, ref } from 'vue'

const speed = ref(10)
const mass = 1000
const kinetic = computed(() => 0.5 * mass * speed.value ** 2)
const doubled = computed(() => 0.5 * mass * (speed.value * 2) ** 2)
const summary = computed(
  () => `Mass ${mass} kg at ${speed.value} m s⁻¹: K = ½mv² = ${kinetic.value.toLocaleString()} J. At double the speed, K = ${doubled.value.toLocaleString()} J, four times as large.`
)
</script>

<template>
  <div class="ke-speed">
    <svg viewBox="0 0 720 250" role="img" aria-labelledby="kes-title kes-desc">
      <title id="kes-title">Kinetic energy and speed</title>
      <desc id="kes-desc">{{ summary }}</desc>
      <line x1="60" y1="188" x2="660" y2="188" stroke="var(--line)" stroke-width="2" />
      <rect x="256" y="136" width="170" height="48" rx="10" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
      <circle cx="288" cy="188" r="12" fill="var(--ink-soft)" />
      <circle cx="394" cy="188" r="12" fill="var(--ink-soft)" />
      <line x1="426" y1="120" x2="532" y2="120" stroke="var(--teal)" stroke-width="4" />
      <text x="454" y="106" class="small">v = {{ speed }} m s⁻¹</text>

      <rect x="70" y="42" width="250" height="82" rx="8" fill="#fbf8f1" stroke="var(--line)" />
      <text x="90" y="68" class="small">v² = {{ (speed ** 2).toLocaleString() }} m² s⁻²</text>
      <text x="90" y="102" class="big">K = {{ kinetic.toLocaleString() }} J</text>
    </svg>

    <label class="bench-field">
      <span>Speed: {{ speed }} m s⁻¹</span>
      <input v-model.number="speed" type="range" min="0" max="20" step="1" aria-label="Speed in metres per second" />
    </label>

    <p class="sim-summary" aria-live="polite">
      <strong>Predict: doubling the speed makes K four times as large.</strong> {{ summary }}
    </p>
  </div>
</template>

<style scoped>
.ke-speed { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.ke-speed svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.bench-field { display: grid; gap: 0.2rem; font-size: 0.9rem; color: var(--ink-soft); }
.bench-field input { width: 100%; accent-color: var(--teal); }
.small, .big { font-family: var(--sans); }
.small { font-size: 13px; fill: var(--ink-soft); }
.big { font-size: 21px; font-weight: 700; fill: var(--teal-dark); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
