<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  isomers: { type: Array, required: true }
})

const activeId = ref(props.isomers[0]?.id)
const active = computed(() => props.isomers.find((item) => item.id === activeId.value) || props.isomers[0])
</script>

<template>
  <div :id="id" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>{{ title }}</h3>
        <p class="lab__note">
          Switch between the isomers. The molecular formula stays the same; the arrangement changes.
        </p>
      </div>
    </div>

    <div class="lab-controls" role="group" aria-label="Choose an isomer">
      <button
        v-for="isomer in isomers"
        :key="isomer.id"
        type="button"
        class="btn btn-small"
        :aria-pressed="activeId === isomer.id"
        @click="activeId = isomer.id"
      >
        {{ isomer.name }}
      </button>
    </div>

    <div class="lab-output" aria-live="polite">
      <p><strong>Name:</strong> {{ active.name }}</p>
      <p><strong>Molecular formula:</strong> <span class="formula">{{ active.formula }}</span></p>
      <p><strong>Structure:</strong> <span class="formula">{{ active.structure }}</span></p>
      <p><strong>Type of isomerism:</strong> {{ active.type }}</p>
      <p>{{ active.note }}</p>
    </div>
  </div>
</template>
