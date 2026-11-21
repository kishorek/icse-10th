<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  rows: { type: Array, required: true },
  max: { type: Number, default: 120 }
})

const activeId = ref(props.rows[0]?.id)
const active = computed(() => props.rows.find((row) => row.id === activeId.value) || props.rows[0])
const width = computed(() => Math.min(100, Math.round(((active.value?.bp || 0) / props.max) * 100)))
</script>

<template>
  <div class="property-trend">
    <div class="lab-controls" role="group" aria-label="Choose an alcohol">
      <button
        v-for="row in rows"
        :key="row.id"
        type="button"
        class="btn btn-small"
        :aria-pressed="activeId === row.id"
        @click="activeId = row.id"
      >
        {{ row.name }}
      </button>
    </div>

    <div class="property-card" aria-live="polite">
      <p><strong>{{ active.name }}</strong> · <span class="formula">{{ active.formula }}</span></p>
      <p>Boiling point: <strong>{{ active.bp }} °C</strong></p>
      <div class="property-bar" :aria-label="`Boiling point ${active.bp} degrees Celsius`">
        <span :style="{ width: `${width}%` }"></span>
      </div>
      <p class="flow-note">{{ active.solubility }}</p>
    </div>
  </div>
</template>

<style scoped>
.property-card {
  margin-top: 0.75rem;
  padding: 1rem 1.1rem;
  border: 1px solid var(--line, #d7d0c2);
  border-left: 4px solid var(--teal);
  border-radius: 0.65rem;
  background: var(--paper-2);
}
.property-card p {
  margin: 0.35rem 0;
}
.property-bar {
  height: 0.8rem;
  margin: 0.5rem 0;
  overflow: hidden;
  border-radius: 999px;
  background: #e6e0d4;
}
.property-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--amber);
}
</style>
