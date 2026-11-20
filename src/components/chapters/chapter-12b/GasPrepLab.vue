<script setup>
import { computed, ref } from 'vue'
import { preparationRoutes } from '../../../data/chapter-12b/preparations'

const routeId = ref(preparationRoutes[0].id)
const route = computed(() => preparationRoutes.find((item) => item.id === routeId.value) ?? preparationRoutes[0])
</script>

<template>
  <div id="gas-prep" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>Gas preparation walkthrough</h3>
        <p class="lab__note">
          Choose a preparation route to compare the reactants, conditions, equation and collection
          method.
        </p>
      </div>
    </div>

    <div class="range-row">
      <label for="gas-route">Preparation route</label>
      <select id="gas-route" v-model="routeId" class="q-select">
        <option v-for="item in preparationRoutes" :key="item.id" :value="item.id">
          {{ item.label }}
        </option>
      </select>
    </div>

    <div class="lab-output" aria-live="polite">
      <p><strong>Gas produced:</strong> {{ route.gas }}</p>
      <p><strong>Reactants:</strong> {{ route.reactants }}</p>
      <p><strong>Conditions:</strong> {{ route.conditions }}</p>
      <p>
        <strong>Equation:</strong>
        <span class="formula">{{ route.equation }}</span>
      </p>
      <p><strong>Collection:</strong> {{ route.collection }}</p>
      <p><strong>Note:</strong> {{ route.note }}</p>
    </div>
  </div>
</template>
