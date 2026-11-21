<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const units = {
  J: { label: 'joule (J)', toJoule: 1 },
  kJ: { label: 'kilojoule (kJ)', toJoule: 1e3 },
  MJ: { label: 'megajoule (MJ)', toJoule: 1e6 },
  GJ: { label: 'gigajoule (GJ)', toJoule: 1e9 },
  erg: { label: 'erg', toJoule: 1e-7 }
}

const value = ref(1)
const from = ref('J')
const to = ref('erg')
const pulse = reactive({ value: 0.4 })
let run = null
let reduced = false

const result = computed(() => (Number(value.value) * units[from.value].toJoule) / units[to.value].toJoule)
const formatted = computed(() => {
  const number = result.value
  if (number !== 0 && (Math.abs(number) >= 1e9 || Math.abs(number) < 1e-3)) {
    return number.toExponential(4)
  }
  return Number(number.toPrecision(7)).toString()
})
const summary = computed(
  () => `${value.value} ${units[from.value].label} = ${formatted.value} ${units[to.value].label}.`
)

function pulseLadder() {
  run?.pause()
  run?.revert?.()
  if (reduced) {
    pulse.value = 0.9
    return
  }
  pulse.value = 0.2
  run = animate(pulse, { value: 0.95, duration: 650, easing: 'easeOutQuad' })
}

function reset() {
  value.value = 1
  from.value = 'J'
  to.value = 'erg'
  pulseLadder()
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
pulseLadder()

onBeforeUnmount(() => {
  run?.pause()
  run?.revert?.()
  run = null
})
</script>

<template>
  <div class="unit-ladder">
    <svg viewBox="0 0 720 250" role="img" aria-labelledby="ul-title ul-desc">
      <title id="ul-title">Work unit conversion ladder</title>
      <desc id="ul-desc">{{ summary }} One joule equals ten million ergs.</desc>

      <line x1="90" y1="188" x2="650" y2="188" stroke="var(--line)" stroke-width="2" />
      <g v-for="(unit, key, index) in units" :key="key">
        <line :x1="112 + index * 128" y1="174" :x2="112 + index * 128" y2="202" stroke="var(--ink-soft)" stroke-width="2" />
        <circle :cx="112 + index * 128" cy="188" r="8" fill="var(--teal-dark)" />
        <text :x="112 + index * 128" y="224" text-anchor="middle" class="unit-name">{{ key }}</text>
        <text :x="112 + index * 128" y="160" text-anchor="middle" class="unit-sub">{{ unit.label.replace(/ \(.*\)/, '') }}</text>
      </g>

      <rect x="238" y="48" width="356" height="70" rx="8" fill="#fbf8f1" stroke="var(--line)" />
      <text x="416" y="76" text-anchor="middle" class="small">1 J = 10⁷ erg · 1 kJ = 10³ J</text>
      <text x="416" y="102" text-anchor="middle" class="big">{{ summary }}</text>

      <circle :cx="112 + Object.keys(units).indexOf(to) * 128" cy="188" :r="14" fill="var(--amber)" :opacity="pulse.value" />
    </svg>

    <div class="unit-controls">
      <label class="bench-field">
        <span>Value</span>
        <input v-model.number="value" type="number" inputmode="decimal" step="any" aria-label="Value to convert" />
      </label>
      <label class="bench-field">
        <span>From</span>
        <select v-model="from" aria-label="Convert from unit">
          <option v-for="(unit, key) in units" :key="key" :value="key">{{ unit.label }}</option>
        </select>
      </label>
      <label class="bench-field">
        <span>To</span>
        <select v-model="to" aria-label="Convert to unit">
          <option v-for="(unit, key) in units" :key="key" :value="key">{{ unit.label }}</option>
        </select>
      </label>
    </div>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>{{ summary }}</strong>
      Predict first: 1 J = 10⁷ erg and 1 kWh = 3.6 × 10⁶ J.
    </p>
  </div>
</template>

<style scoped>
.unit-ladder { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.6rem; }
.unit-ladder svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.unit-controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.6rem; }
.bench-field { display: grid; gap: 0.2rem; font-size: 0.9rem; color: var(--ink-soft); }
.bench-field input, .bench-field select { min-height: 38px; padding: 0.3rem 0.45rem; border: 1px solid var(--line); border-radius: 5px; background: #fffdf7; }
.unit-name { font-family: var(--sans); font-size: 14px; font-weight: 700; fill: var(--teal-dark); }
.unit-sub, .small, .big { font-family: var(--sans); }
.unit-sub { font-size: 10px; fill: var(--ink-soft); }
.small { font-size: 12px; fill: var(--ink-soft); }
.big { font-size: 16px; font-weight: 700; fill: var(--teal-dark); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
