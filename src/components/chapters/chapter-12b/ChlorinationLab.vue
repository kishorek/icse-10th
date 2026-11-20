<script setup>
import { computed, ref } from 'vue'
import { chlorinationSteps } from '../../../data/chapter-12b/reactions'

const index = ref(0)
const step = computed(() => chlorinationSteps[index.value])
const atEnd = computed(() => index.value === chlorinationSteps.length - 1)

function next() {
  if (!atEnd.value) index.value += 1
}

function reset() {
  index.value = 0
}
</script>

<template>
  <div id="chlorination" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>Chlorination step-through</h3>
        <p class="lab__note">
          Each step replaces one hydrogen atom with one chlorine atom. Chlorine is added in diffused
          sunlight or ultraviolet light, and hydrogen chloride is released each time.
        </p>
      </div>
      <p class="lab__note">Step {{ step.step }} of {{ chlorinationSteps.length }}</p>
    </div>

    <div class="lab-output" aria-live="polite">
      <p>
        <strong>Equation:</strong>
        <span class="formula">{{ step.equation }}</span>
      </p>
      <p>
        <strong>Product:</strong> {{ step.product }}
      </p>
      <p>
        <strong>Product formula:</strong>
        <span class="formula">{{ step.productFormula }}</span>
      </p>
      <p>
        <strong>Hydrogen atoms remaining:</strong> {{ 4 - step.step }}
      </p>
      <p>{{ step.note }}</p>
    </div>

    <div class="lab-controls">
      <button id="chlorination-next" class="btn" type="button" :disabled="atEnd" @click="next">
        Add one chlorine atom
      </button>
      <button class="btn btn--ghost" type="button" @click="reset">Reset to methane</button>
    </div>
  </div>
</template>
