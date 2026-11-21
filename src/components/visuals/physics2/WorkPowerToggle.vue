<script setup>
import { computed, ref } from 'vue'

const mode = ref('time')
const cards = computed(() =>
  mode.value === 'time'
    ? {
        title: 'Same work, different time',
        left: { label: 'Worker A', work: '500 J', time: '10 s', power: '50 W' },
        right: { label: 'Worker B', work: '500 J', time: '20 s', power: '25 W' },
        note: 'The amount of work is the same. The worker who takes less time has greater power.'
      }
    : {
        title: 'Same power, different work',
        left: { label: 'Motor X', work: '200 J', time: '4 s', power: '50 W' },
        right: { label: 'Motor Y', work: '400 J', time: '8 s', power: '50 W' },
        note: 'Both motors have the same power. The one that runs longer transfers more energy and does more work.'
      }
)
</script>

<template>
  <div class="wp-toggle">
    <div class="lab-controls" role="group" aria-label="Choose a comparison">
      <button type="button" class="btn btn-small" :aria-pressed="mode === 'time'" @click="mode = 'time'">
        Same work, different time
      </button>
      <button type="button" class="btn btn-small" :aria-pressed="mode === 'power'" @click="mode = 'power'">
        Same power, different work
      </button>
    </div>

    <div class="wp-grid">
      <article v-for="card in [cards.left, cards.right]" :key="card.label" class="wp-card">
        <h3>{{ card.label }}</h3>
        <dl>
          <div><dt>Work</dt><dd>{{ card.work }}</dd></div>
          <div><dt>Time</dt><dd>{{ card.time }}</dd></div>
          <div><dt>Power</dt><dd>{{ card.power }}</dd></div>
        </dl>
      </article>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>{{ cards.title }}.</strong> {{ cards.note }}
      <span v-if="mode === 'time'">P = W / t, not W alone.</span>
      <span v-else>W = P × t, not P alone.</span>
    </p>
  </div>
</template>

<style scoped>
.wp-toggle { display: grid; gap: 0.6rem; }
.wp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.65rem; }
.wp-card { padding: 0.8rem; border: 1px solid var(--line); border-radius: 7px; background: #fbf8f1; }
.wp-card h3 { margin: 0 0 0.5rem; font-size: 1rem; }
.wp-card dl { display: grid; gap: 0.3rem; margin: 0; }
.wp-card dl div { display: flex; justify-content: space-between; gap: 1rem; }
.wp-card dt { color: var(--muted); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.06em; }
.wp-card dd { margin: 0; font-weight: 700; }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
