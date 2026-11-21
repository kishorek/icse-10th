<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  samples: { type: Array, required: true },
  tests: { type: Array, required: true },
  results: { type: Object, required: true }
})

const sampleId = ref(props.samples[0]?.id)
const testId = ref(props.tests[0]?.id)

const sample = computed(() => props.samples.find((item) => item.id === sampleId.value))
const test = computed(() => props.tests.find((item) => item.id === testId.value))
const result = computed(
  () => props.results?.[sampleId.value]?.[testId.value] || null
)
</script>

<template>
  <div class="test-bench">
    <div class="range-row">
      <label for="bench-sample">Sample</label>
      <select id="bench-sample" v-model="sampleId" class="q-select">
        <option v-for="item in samples" :key="item.id" :value="item.id">{{ item.label }}</option>
      </select>
    </div>
    <div class="range-row">
      <label for="bench-test">Test</label>
      <select id="bench-test" v-model="testId" class="q-select">
        <option v-for="item in tests" :key="item.id" :value="item.id">{{ item.label }}</option>
      </select>
    </div>

    <div class="lab-output" aria-live="polite">
      <p><strong>Sample:</strong> {{ sample?.label }}</p>
      <p><strong>Test:</strong> {{ test?.label }}</p>
      <p><strong>Observation:</strong> {{ result?.observation || 'No observation recorded.' }}</p>
      <p><strong>Conclusion:</strong> {{ result?.conclusion || 'Choose another combination.' }}</p>
      <p v-if="result?.equation" class="formula">{{ result.equation }}</p>
    </div>
  </div>
</template>
