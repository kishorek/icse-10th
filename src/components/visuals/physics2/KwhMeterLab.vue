<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const power = ref(2000)
const hours = ref(0.5)
const progress = reactive({ value: 0 })
const status = ref('Ready')
let run = null
let reduced = false

const energy = computed(() => (power.value / 1000) * hours.value)
const shownEnergy = computed(() => energy.value * progress.value)
const discAngle = computed(() => shownEnergy.value * 720)
const summary = computed(
  () => `${power.value} W for ${hours.value} h uses ${energy.value.toFixed(2)} kWh. Energy = power × time.`
)

function runMeter() {
  run?.pause()
  run?.revert?.()
  if (reduced) {
    progress.value = 1
    status.value = 'Final state shown because reduced motion is on'
    return
  }
  progress.value = 0
  run = animate(progress, { value: 1, duration: 1500, easing: 'easeInOutQuad' })
  status.value = 'Running'
}

function pause() {
  run?.pause()
  status.value = 'Paused'
}

function reset() {
  run?.pause()
  run?.revert?.()
  progress.value = 0
  power.value = 2000
  hours.value = 0.5
  status.value = 'Reset'
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    progress.value = 1
    status.value = 'Final state shown because reduced motion is on'
  }
}

onBeforeUnmount(() => {
  run?.pause()
  run?.revert?.()
  run = null
})
</script>

<template>
  <div class="kwh-meter">
    <svg viewBox="0 0 720 280" role="img" aria-labelledby="kwh-title kwh-desc">
      <title id="kwh-title">Domestic energy meter</title>
      <desc id="kwh-desc">{{ summary }} The disc turns and the counter advances as energy is used.</desc>

      <rect x="214" y="38" width="292" height="196" rx="12" fill="#efe4cf" stroke="var(--teal-dark)" stroke-width="3" />
      <rect x="246" y="64" width="228" height="62" rx="5" fill="#fbf8f1" stroke="var(--line)" />
      <text x="360" y="104" text-anchor="middle" class="counter">{{ shownEnergy.toFixed(2) }} kWh</text>

      <circle cx="360" cy="182" r="32" fill="#fbf8f1" stroke="var(--line)" stroke-width="3" />
      <g :transform="`rotate(${discAngle} 360 182)`">
        <line x1="360" y1="154" x2="360" y2="184" stroke="var(--amber-deep)" stroke-width="3" />
      </g>
      <text x="360" y="248" text-anchor="middle" class="small">meter disc</text>

      <rect x="534" y="62" width="152" height="128" rx="8" fill="#fbf8f1" stroke="var(--line)" />
      <text x="610" y="88" text-anchor="middle" class="small">Energy used</text>
      <text x="610" y="120" text-anchor="middle" class="big">{{ energy.toFixed(2) }} kWh</text>
      <text x="610" y="150" text-anchor="middle" class="small">{{ power }} W × {{ hours }} h</text>
      <text x="610" y="174" text-anchor="middle" class="small">= {{ (energy * 3.6e6).toExponential(2) }} J</text>
    </svg>

    <div class="bench-controls">
      <label class="bench-field">
        <span>Appliance power: {{ power }} W</span>
        <input v-model.number="power" type="range" min="100" max="3000" step="100" aria-label="Appliance power in watts" />
      </label>
      <label class="bench-field">
        <span>Time: {{ hours }} h</span>
        <input v-model.number="hours" type="range" min="0.5" max="8" step="0.5" aria-label="Time in hours" />
      </label>
    </div>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="runMeter">Run meter</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Predict: 2 kW for 0.5 h uses the same energy as 1 kW for 1 h.</strong> {{ summary }}
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.kwh-meter { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.5rem; }
.kwh-meter svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.bench-controls { display: grid; gap: 0.6rem; }
.bench-field { display: grid; gap: 0.2rem; font-size: 0.9rem; color: var(--ink-soft); }
.bench-field input { width: 100%; accent-color: var(--teal); }
.counter { font-family: "SFMono-Regular", Consolas, monospace; font-size: 26px; font-weight: 700; fill: var(--teal-dark); }
.small, .big { font-family: var(--sans); }
.small { font-size: 12px; fill: var(--ink-soft); }
.big { font-size: 18px; font-weight: 700; fill: var(--teal-dark); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
