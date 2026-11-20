<script setup>
import { computed, ref, watch } from 'vue'
import { useProgress } from '../composables/useProgress'

const props = defineProps({
  id: { type: String, required: true },
  question: { type: String, required: true },
  options: { type: Array, required: true },
  correctValue: { type: String, required: true },
  correctFeedback: { type: String, required: true },
  wrongFeedback: { type: String, required: true }
})

const { state, recordCheck } = useProgress()
const selected = ref(state.checks[props.id]?.answer ?? '')
const feedbackId = computed(() => `${props.id}-feedback`)

watch(
  () => state.checks[props.id],
  (value) => {
    selected.value = value?.answer ?? ''
  }
)

const isCorrect = computed(
  () => Boolean(selected.value) && selected.value === props.correctValue
)

const feedback = computed(() => {
  if (!selected.value) return ''
  return isCorrect.value ? props.correctFeedback : props.wrongFeedback
})

function optionClass(option) {
  const chosen = selected.value === option.value
  return {
    'is-selected': chosen,
    'is-correct': chosen && isCorrect.value,
    'is-wrong': chosen && !isCorrect.value
  }
}

function onChange() {
  recordCheck(props.id, selected.value, selected.value === props.correctValue)
}
</script>

<template>
  <fieldset class="quick-check">
    <legend>{{ question }}</legend>
    <div class="qc-options">
      <label v-for="option in options" :key="option.value" class="qc-option" :class="optionClass(option)">
        <input
          v-model="selected"
          type="radio"
          :name="id"
          :value="option.value"
          :aria-describedby="feedbackId"
          @change="onChange"
        />
        <span>{{ option.text }}</span>
      </label>
    </div>
    <p
      :id="feedbackId"
      class="qc-feedback"
      :class="{ 'is-correct': isCorrect, 'is-wrong': selected && !isCorrect }"
      role="status"
      aria-live="polite"
    >
      {{ feedback }}
    </p>
  </fieldset>
</template>
