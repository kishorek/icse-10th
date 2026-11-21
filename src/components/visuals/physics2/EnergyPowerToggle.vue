<script setup>
import { computed, ref } from 'vue'

const mode = ref('energy')
const data = computed(() =>
  mode.value === 'energy'
    ? {
        title: 'Same energy, different power',
        left: { label: 'LED lamp', energy: '1 kWh', power: '10 W', time: '100 h' },
        right: { label: 'Electric kettle', energy: '1 kWh', power: '2000 W', time: '0.5 h' },
        note: 'Both transfer 1 kWh. The kettle transfers it much faster, so its power is much greater.'
      }
    : {
        title: 'Same power, different energy',
        left: { label: 'Heater for 1 h', energy: '2 kWh', power: '2000 W', time: '1 h' },
        right: { label: 'Heater for 2 h', energy: '4 kWh', power: '2000 W', time: '2 h' },
        note: 'The power is the same. Running for twice as long transfers twice the energy.'
      }
)
</script>

<template>
  <div class="ep-toggle">
    <div class="lab-controls" role="group" aria-label="Choose a comparison">
      <button type="button" class="btn btn-small" :aria-pressed="mode === 'energy'" @click="mode = 'energy'">
        Same energy, different power
      </button>
      <button type="button" class="btn btn-small" :aria-pressed="mode === 'power'" @click="mode = 'power'">
        Same power, different energy
      </button>
    </div>

    <div class="ep-grid">
      <article v-for="card in [data.left, data.right]" :key="card.label" class="ep-card">
        <h3>{{ card.label }}</h3>
        <dl>
          <div><dt>Energy</dt><dd>{{ card.energy }}</dd></div>
          <div><dt>Power</dt><dd>{{ card.power }}</dd></div>
          <div><dt>Time</dt><dd>{{ card.time }}</dd></div>
        </dl>
      </article>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>{{ data.title }}.</strong> {{ data.note }}
      Energy is the amount; power is the rate.
    </p>
  </div>
</template>

<style scoped>
.ep-toggle { display: grid; gap: 0.6rem; }
.ep-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.65rem; }
.ep-card { padding: 0.8rem; border: 1px solid var(--line); border-radius: 7px; background: #fbf8f1; }
.ep-card h3 { margin: 0 0 0.5rem; font-size: 1rem; }
.ep-card dl { display: grid; gap: 0.3rem; margin: 0; }
.ep-card dl div { display: flex; justify-content: space-between; gap: 1rem; }
.ep-card dt { color: var(--muted); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.06em; }
.ep-card dd { margin: 0; font-weight: 700; }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
