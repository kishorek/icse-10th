<script setup>
import { computed, ref } from 'vue'
import { isomerSets } from '../../../data/chapter-12a/isomers'

const formulaId = ref(isomerSets[0].id)

const selected = computed(
  () => isomerSets.find((item) => item.id === formulaId.value) ?? isomerSets[0]
)
</script>

<template>
  <div id="isomer-explorer" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>Isomer explorer</h3>
        <p class="lab__note">
          Choose a molecular formula and compare every structural isomer shown.
        </p>
      </div>
    </div>

    <div class="range-row">
      <label for="isomer-formula">Molecular formula</label>
      <select id="isomer-formula" v-model="formulaId" class="q-select">
        <option v-for="item in isomerSets" :key="item.id" :value="item.id">
          {{ item.formula }}
        </option>
      </select>
    </div>

    <div class="lab-output" aria-live="polite">
      <p><strong>Type:</strong> {{ selected.type }}</p>
      <p><strong>Count:</strong> {{ selected.isomers.length }} structural isomers</p>
      <p>{{ selected.note }}</p>

      <div class="isomer-grid">
        <article v-for="isomer in selected.isomers" :key="isomer.name" class="isomer-card">
          <h4>{{ isomer.name }}</h4>
          <p class="formula">{{ isomer.structure }}</p>
          <p>{{ isomer.note }}</p>
        </article>
      </div>
    </div>
  </div>
</template>
