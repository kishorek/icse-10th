<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  routes: { type: Array, required: true }
})

const routeId = ref(props.routes[0]?.id)
const route = computed(() => props.routes.find((item) => item.id === routeId.value) || props.routes[0])
</script>

<template>
  <div :id="id" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>{{ title }}</h3>
        <p class="lab__note">
          Choose a preparation route, then read the reactants, conditions and product.
        </p>
      </div>
    </div>

    <div class="range-row">
      <label :for="`${id}-route`">Preparation route</label>
      <select :id="`${id}-route`" v-model="routeId" class="q-select">
        <option v-for="item in routes" :key="item.id" :value="item.id">{{ item.label }}</option>
      </select>
    </div>

    <div class="lab-output" aria-live="polite">
      <p><strong>Reactants:</strong> {{ route.reactants }}</p>
      <p><strong>Conditions:</strong> {{ route.conditions }}</p>
      <p><strong>Equation:</strong> <span class="formula">{{ route.equation }}</span></p>
      <p><strong>Product:</strong> {{ route.product }}</p>
      <p v-if="route.collection"><strong>Collection:</strong> {{ route.collection }}</p>
      <p>{{ route.note }}</p>
    </div>
  </div>
</template>
