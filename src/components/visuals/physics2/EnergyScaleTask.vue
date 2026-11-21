<script setup>
import { computed, ref } from 'vue'

const unitBank = {
  eV: { label: '1 electron volt (eV)', joule: '1.6 × 10⁻¹⁹ J' },
  J: { label: '1 joule (J)', joule: '1 J' },
  cal: { label: '1 calorie (cal)', joule: '4.18 J' },
  Wh: { label: '1 watt-hour (Wh)', joule: '3600 J' },
  kWh: { label: '1 kilowatt-hour (kWh)', joule: '3.6 × 10⁶ J' }
}
const expected = ['eV', 'J', 'cal', 'Wh', 'kWh']
const order = ref(['Wh', 'eV', 'J', 'kWh', 'cal'])
const checked = ref(false)

const correct = computed(() => order.value.every((key, index) => key === expected[index]))
const summary = computed(() => {
  if (!checked.value) return 'Arrange the five amounts from smallest to largest, then check your order.'
  return correct.value
    ? 'Correct. The order is eV, J, cal, Wh, kWh.'
    : 'Not yet. Compare the joule values: 1.6 × 10⁻¹⁹, 1, 4.18, 3600 and 3.6 × 10⁶.'
})

function move(index, direction) {
  const target = index + direction
  if (target < 0 || target >= order.value.length) return
  const copy = [...order.value]
  ;[copy[index], copy[target]] = [copy[target], copy[index]]
  order.value = copy
  checked.value = false
}

function reset() {
  order.value = ['Wh', 'eV', 'J', 'kWh', 'cal']
  checked.value = false
}
</script>

<template>
  <div class="energy-scale">
    <p class="prompt">
      Predict the order first. Which is smallest: an electron volt, a joule, a calorie, a
      watt-hour or a kilowatt-hour?
    </p>

    <ol class="unit-order">
      <li v-for="(key, index) in order" :key="key">
        <span class="unit-label">{{ unitBank[key].label }}</span>
        <span class="unit-value">{{ unitBank[key].joule }}</span>
        <span class="move-buttons">
          <button type="button" class="btn btn-small" :disabled="index === 0" :aria-label="`Move ${unitBank[key].label} up`" @click="move(index, -1)">Up</button>
          <button type="button" class="btn btn-small" :disabled="index === order.length - 1" :aria-label="`Move ${unitBank[key].label} down`" @click="move(index, 1)">Down</button>
        </span>
      </li>
    </ol>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="checked = true">Check order</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>{{ summary }}</strong>
    </p>
  </div>
</template>

<style scoped>
.energy-scale { display: grid; gap: 0.6rem; }
.prompt { margin: 0; font-size: 0.93rem; color: var(--ink-soft); }
.unit-order { display: grid; gap: 0.4rem; margin: 0; padding: 0; list-style: none; counter-reset: unit; }
.unit-order li { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: 0.6rem; padding: 0.5rem 0.6rem; border: 1px solid var(--line); border-radius: 6px; background: #fbf8f1; }
.unit-order li::before { counter-increment: unit; content: counter(unit); display: none; }
.unit-label { font-weight: 650; }
.unit-value { color: var(--ink-soft); font-size: 0.84rem; }
.move-buttons { display: flex; gap: 0.3rem; }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
@media (max-width: 600px) {
  .unit-order li { grid-template-columns: minmax(0, 1fr) auto; }
  .unit-value { grid-column: 1; }
  .move-buttons { grid-column: 2; grid-row: 1 / span 2; }
}
</style>
