<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  instruction: { type: String, default: 'Select a card, then choose its category.' },
  categories: { type: Array, required: true },
  items: { type: Array, required: true }
})

const selectedId = ref('')
const placed = ref({})
const feedback = ref('')

const selected = computed(() => props.items.find((item) => item.id === selectedId.value))
const remaining = computed(() => props.items.filter((item) => !placed.value[item.id]))
const score = computed(
  () => props.items.filter((item) => placed.value[item.id] === item.answer).length
)

function chooseItem(id) {
  selectedId.value = id
  feedback.value = ''
}

function place(categoryId) {
  if (!selected.value) {
    feedback.value = 'Choose a card first.'
    return
  }
  placed.value = { ...placed.value, [selected.value.id]: categoryId }
  const correct = selected.value.answer === categoryId
  feedback.value = correct
    ? `Correct. ${selected.value.note}`
    : `Not quite. ${selected.value.note}`
  selectedId.value = ''
}

function reset() {
  selectedId.value = ''
  placed.value = {}
  feedback.value = ''
}
</script>

<template>
  <div :id="id" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>{{ title }}</h3>
        <p class="lab__note">{{ instruction }}</p>
      </div>
      <p class="lab__note">{{ score }} of {{ items.length }} correct</p>
    </div>

    <div class="sort-bank" role="group" aria-label="Cards to classify">
      <button
        v-for="item in remaining"
        :key="item.id"
        type="button"
        class="btn btn-small"
        :aria-pressed="selectedId === item.id"
        @click="chooseItem(item.id)"
      >
        {{ item.label }}
      </button>
      <p v-if="remaining.length === 0" class="lab__note">All cards placed. Check the feedback or reset.</p>
    </div>

    <div class="lab-controls" role="group" aria-label="Categories">
      <button
        v-for="category in categories"
        :key="category.id"
        type="button"
        class="btn"
        @click="place(category.id)"
      >
        {{ category.label }}
      </button>
    </div>

    <p class="lab-output" aria-live="polite">{{ feedback }}</p>

    <div v-if="Object.keys(placed).length" class="table-wrap">
      <table class="compare-table">
        <caption>Your placements</caption>
        <thead>
          <tr>
            <th scope="col">Card</th>
            <th scope="col">Your category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items.filter((entry) => placed[entry.id])" :key="item.id">
            <th scope="row">{{ item.label }}</th>
            <td>{{ categories.find((category) => category.id === placed[item.id])?.label }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.sort-bank {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
</style>
