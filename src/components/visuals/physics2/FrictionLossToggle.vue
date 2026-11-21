<script setup>
import { computed, ref } from 'vue'

const real = ref(false)
const data = computed(() =>
  real.value
    ? {
        title: 'Real system with friction and air resistance',
        mechanical: 70,
        heat: 30,
        note: 'Mechanical energy falls from 100 to 70 units. The missing 30 units appear as heat and sound. The total energy is still 100 units, but it is now degraded.'
      }
    : {
        title: 'Ideal system with no friction or air resistance',
        mechanical: 100,
        heat: 0,
        note: 'Mechanical energy stays at 100 units throughout. This is the special case in which U + K is constant.'
      }
)
</script>

<template>
  <div class="friction-toggle">
    <div class="lab-controls" role="group" aria-label="Choose the system">
      <button type="button" class="btn btn-small" :aria-pressed="!real" @click="real = false">
        Ideal: no friction
      </button>
      <button type="button" class="btn btn-small" :aria-pressed="real" @click="real = true">
        Real: friction and air resistance
      </button>
    </div>

    <svg viewBox="0 0 720 250" role="img" aria-labelledby="fl-title fl-desc">
      <title id="fl-title">Mechanical energy in an ideal and a real system</title>
      <desc id="fl-desc">{{ data.title }}. {{ data.note }}</desc>
      <line x1="60" y1="200" x2="660" y2="200" stroke="var(--line)" stroke-width="3" />
      <g v-if="!real">
        <circle cx="300" cy="152" r="22" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
        <line x1="330" y1="152" x2="500" y2="152" stroke="var(--teal)" stroke-width="3" stroke-dasharray="5 4" />
        <text x="500" y="142" class="small">no loss</text>
      </g>
      <g v-else>
        <circle cx="300" cy="152" r="22" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />
        <path d="M 280 190 l 10 -10 l 10 10 l 10 -10 l 10 10 l 10 -10 l 10 10" fill="none" stroke="var(--amber-deep)" stroke-width="2" />
        <text x="322" y="152" class="small">friction → heat + sound</text>
      </g>

      <g transform="translate(470 34)">
        <text x="0" y="0" class="small">Energy account</text>
        <rect x="0" y="16" width="180" height="16" rx="4" fill="var(--line)" />
        <rect x="0" y="16" :width="data.mechanical * 1.8" height="16" rx="4" fill="var(--teal)" />
        <text x="0" y="52" class="small">Mechanical: {{ data.mechanical }}</text>
        <rect x="0" y="72" width="180" height="16" rx="4" fill="var(--line)" />
        <rect x="0" y="72" :width="data.heat * 1.8" height="16" rx="4" fill="var(--amber)" />
        <text x="0" y="108" class="small">Heat + sound: {{ data.heat }}</text>
        <line x1="0" y1="128" x2="180" y2="128" stroke="var(--ink-soft)" stroke-width="2" />
        <text x="0" y="150" class="small">Total: 100</text>
      </g>
    </svg>

    <p class="sim-summary" aria-live="polite">
      <strong>{{ data.title }}.</strong> {{ data.note }}
    </p>
  </div>
</template>

<style scoped>
.friction-toggle { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.6rem; }
.friction-toggle svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.small { font-family: var(--sans); font-size: 12px; fill: var(--ink-soft); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
