<script setup>
import { computed, ref, watch } from 'vue'
import { nameExamples } from '../../../data/chapter-12a/nameExamples'

const roots = ['meth', 'eth', 'prop', 'but', 'pent']
const suffixes = ['ane', 'ol', 'al', 'one', 'oic acid']
const prefixes = [
  { value: '', label: '— (none)' },
  { value: 'methyl', label: 'methyl' },
  { value: 'ethyl', label: 'ethyl' },
  { value: 'chloro', label: 'chloro' },
  { value: 'bromo', label: 'bromo' }
]
const locants = ['1', '2', '3', '4']

const exampleId = ref(nameExamples[0].id)
const root = ref('')
const suffix = ref('')
const prefix = ref('')
const locant = ref('')
const result = ref(null)

const example = computed(
  () => nameExamples.find((item) => item.id === exampleId.value) ?? nameExamples[0]
)

watch(exampleId, () => {
  root.value = ''
  suffix.value = ''
  prefix.value = ''
  locant.value = ''
  result.value = null
})

watch([root, suffix, prefix, locant], () => {
  result.value = null
})

function checkName() {
  const missing = [root.value, suffix.value, locant.value].includes('')
  const matches =
    root.value === example.value.root &&
    suffix.value === example.value.suffix &&
    prefix.value === example.value.prefix &&
    locant.value === example.value.locant

  if (matches) {
    result.value = {
      status: 'correct',
      text: `Correct: ${example.value.name}. ${example.value.reason}`
    }
    return
  }

  result.value = {
    status: 'wrong',
    text: missing
      ? 'Choose a root, a suffix, a prefix (or none) and a locant, then check again.'
      : 'Not quite. Recheck the longest chain for the root, the principal functional group for the suffix, and number from the end that gives the lowest locant.'
  }
}
</script>

<template>
  <div id="name-builder" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>IUPAC name builder</h3>
        <p class="lab__note">
          Choose a structure, then build its name from the root, suffix, prefix and locant.
        </p>
      </div>
    </div>

    <div class="builder-grid">
      <div>
        <label for="builder-example">Structure</label>
        <select id="builder-example" v-model="exampleId" class="q-select">
          <option v-for="item in nameExamples" :key="item.id" :value="item.id">
            {{ item.structure }}
          </option>
        </select>
      </div>

      <div>
        <label for="builder-root">Root</label>
        <select id="builder-root" v-model="root" class="q-select">
          <option value="">Choose</option>
          <option v-for="item in roots" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>

      <div>
        <label for="builder-suffix">Suffix</label>
        <select id="builder-suffix" v-model="suffix" class="q-select">
          <option value="">Choose</option>
          <option v-for="item in suffixes" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>

      <div>
        <label for="builder-prefix">Prefix</label>
        <select id="builder-prefix" v-model="prefix" class="q-select">
          <option v-for="item in prefixes" :key="item.value" :value="item.value">
            {{ item.label }}
          </option>
        </select>
      </div>

      <div>
        <label for="builder-locant">Locant</label>
        <select id="builder-locant" v-model="locant" class="q-select">
          <option value="">Choose</option>
          <option v-for="item in locants" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>
    </div>

    <p class="structure-block">{{ example.structure }}</p>

    <button type="button" class="btn btn-primary" @click="checkName">Check name</button>

    <div class="lab-output" aria-live="polite">
      <p v-if="result" :class="result.status === 'correct' ? 'is-correct' : 'is-wrong'">
        {{ result.text }}
      </p>
      <p v-else>
        Pick one option from each list, then select Check name. Use “— (none)” when the molecule has
        no substituent prefix.
      </p>
    </div>
  </div>
</template>
