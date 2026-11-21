<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  options: { type: Array, required: true }
})

const activeId = ref(props.options[0]?.id)
const active = computed(() => props.options.find((option) => option.id === activeId.value) || props.options[0])
</script>

<template>
  <div class="comparison-visual">
    <div class="lab-controls" role="group" aria-label="Choose a view">
      <button
        v-for="option in options"
        :key="option.id"
        type="button"
        class="btn btn-small"
        :aria-pressed="activeId === option.id"
        @click="activeId = option.id"
      >
        {{ option.label }}
      </button>
    </div>

    <div class="comparison-card" aria-live="polite">
      <h4>{{ active.title }}</h4>
      <ul>
        <li v-for="item in active.items" :key="item">{{ item }}</li>
      </ul>
      <p v-if="active.note" class="flow-note">{{ active.note }}</p>
    </div>
  </div>
</template>

<style scoped>
.comparison-card {
  margin-top: 0.75rem;
  padding: 1rem 1.1rem;
  border: 1px solid var(--line, #d7d0c2);
  border-left: 4px solid var(--teal);
  border-radius: 0.65rem;
  background: var(--paper-2);
}
.comparison-card h4 {
  margin: 0 0 0.5rem;
}
.comparison-card ul {
  margin: 0;
  padding-left: 1.2rem;
}
.comparison-card li {
  margin: 0.3rem 0;
}
</style>
