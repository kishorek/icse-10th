<script setup>
import { computed, ref } from 'vue'

const force = ref(200)
const speed = ref(4)
const power = computed(() => force.value * speed.value)
const summary = computed(
  () => `Force ${force.value} N at a constant speed of ${speed.value} m s⁻¹ gives power P = Fv = ${power.value} W.`
)
</script>

<template>
  <div class="power-fv">
    <svg viewBox="0 0 720 260" role="img" aria-labelledby="pfv-title pfv-desc">
      <title id="pfv-title">Power as force times speed</title>
      <desc id="pfv-desc">{{ summary }}</desc>
      <defs>
        <marker id="pfv-arrow" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#a05f0c" />
        </marker>
      </defs>

      <line x1="70" y1="208" x2="650" y2="208" stroke="var(--line)" stroke-width="2" />
      <rect x="240" y="166" width="150" height="42" rx="8" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
      <circle cx="270" cy="212" r="12" fill="var(--ink-soft)" />
      <circle cx="360" cy="212" r="12" fill="var(--ink-soft)" />
      <line x1="240" y1="160" x2="170" y2="160" stroke="var(--amber)" stroke-width="6" marker-end="url(#pfv-arrow)" />
      <text x="188" y="146" class="small">F = {{ force }} N</text>
      <line x1="400" y1="146" x2="510" y2="146" stroke="var(--teal)" stroke-width="4" marker-end="url(#pfv-arrow)" />
      <text x="420" y="132" class="small">v = {{ speed }} m s⁻¹</text>

      <rect x="400" y="38" width="260" height="78" rx="8" fill="#fbf8f1" stroke="var(--line)" />
      <text x="420" y="66" class="small">P = F × v</text>
      <text x="420" y="96" class="big">{{ power }} W</text>
    </svg>

    <div class="bench-controls">
      <label class="bench-field">
        <span>Force: {{ force }} N</span>
        <input v-model.number="force" type="range" min="0" max="500" step="25" aria-label="Force in newtons" />
      </label>
      <label class="bench-field">
        <span>Speed: {{ speed }} m s⁻¹</span>
        <input v-model.number="speed" type="range" min="0" max="20" step="1" aria-label="Speed in metres per second" />
      </label>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Predict: double the speed and the power doubles.</strong> {{ summary }}
    </p>
  </div>
</template>

<style scoped>
.power-fv { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.power-fv svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.bench-controls { display: grid; gap: 0.6rem; }
.bench-field { display: grid; gap: 0.2rem; font-size: 0.9rem; color: var(--ink-soft); }
.bench-field input { width: 100%; accent-color: var(--teal); }
.small, .big { font-family: var(--sans); }
.small { font-size: 12px; fill: var(--ink-soft); }
.big { font-size: 20px; font-weight: 700; fill: var(--teal-dark); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
