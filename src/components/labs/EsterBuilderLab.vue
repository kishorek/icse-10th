<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  acids: { type: Array, required: true },
  alcohols: { type: Array, required: true },
  products: { type: Object, required: true }
})

const acidId = ref(props.acids[0]?.id)
const alcoholId = ref(props.alcohols[0]?.id)
const product = computed(
  () => props.products[`${acidId.value}:${alcoholId.value}`] || null
)
</script>

<template>
  <div :id="id" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>{{ title }}</h3>
        <p class="lab__note">
          Choose an acid and an alcohol. The ester name, formula and smell update.
        </p>
      </div>
    </div>

    <div class="range-row">
      <label :for="`${id}-acid`">Acid</label>
      <select :id="`${id}-acid`" v-model="acidId" class="q-select">
        <option v-for="item in acids" :key="item.id" :value="item.id">{{ item.label }}</option>
      </select>
    </div>
    <div class="range-row">
      <label :for="`${id}-alcohol`">Alcohol</label>
      <select :id="`${id}-alcohol`" v-model="alcoholId" class="q-select">
        <option v-for="item in alcohols" :key="item.id" :value="item.id">{{ item.label }}</option>
      </select>
    </div>

    <div class="lab-output" aria-live="polite">
      <p><strong>Ester:</strong> {{ product?.name || 'No ester recorded for this pair.' }}</p>
      <p v-if="product?.formula"><strong>Formula:</strong> <span class="formula">{{ product.formula }}</span></p>
      <p v-if="product?.note">{{ product.note }}</p>
    </div>
  </div>
</template>
