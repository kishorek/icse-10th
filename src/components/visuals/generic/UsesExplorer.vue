<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  uses: { type: Array, required: true }
})

const activeId = ref(props.uses[0]?.id)
const active = computed(() => props.uses.find((item) => item.id === activeId.value) || props.uses[0])
</script>

<template>
  <div class="uses-explorer">
    <div class="lab-controls" role="group" aria-label="Choose a use">
      <button
        v-for="item in uses"
        :key="item.id"
        type="button"
        class="btn btn-small"
        :aria-pressed="activeId === item.id"
        @click="activeId = item.id"
      >
        {{ item.label }}
      </button>
    </div>
    <div class="comparison-card" aria-live="polite">
      <h4>{{ active.title }}</h4>
      <p>{{ active.detail }}</p>
      <p v-if="active.link" class="flow-note"><strong>Why it works:</strong> {{ active.link }}</p>
    </div>
  </div>
</template>

<style scoped>
.comparison-card {
  margin-top: 0.75rem;
  padding: 1rem 1.1rem;
  border: 1px solid var(--line, #d7d0c2);
  border-left: 4px solid var(--amber);
  border-radius: 0.65rem;
  background: var(--paper-2);
}
.comparison-card h4 {
  margin: 0 0 0.5rem;
}
</style>
