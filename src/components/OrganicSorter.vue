<script setup>
import { computed, reactive, ref } from 'vue'
import { sorterItems } from '../data/sorterItems'

const placed = reactive({ organic: [], inorganic: [] })
const selectedId = ref(null)
const score = ref(0)
const feedback = ref({
  text: 'Select an item, then choose a bin.',
  tone: ''
})

const sortedIds = computed(() => new Set([...placed.organic, ...placed.inorganic]))
const pool = computed(() => sorterItems.filter((item) => !sortedIds.value.has(item.id)))
const selectedItem = computed(() =>
  selectedId.value ? sorterItems.find((item) => item.id === selectedId.value) : null
)

function itemById(id) {
  return sorterItems.find((item) => item.id === id)
}

function selectItem(id) {
  selectedId.value = selectedId.value === id ? null : id
  if (selectedId.value) {
    feedback.value = { text: 'Now choose the bin where the item belongs.', tone: '' }
  }
}

function place(bin) {
  if (!selectedItem.value) {
    feedback.value = { text: 'Choose an item from the pool first.', tone: 'is-bad' }
    return
  }

  const item = selectedItem.value
  if (item.bin === bin) {
    placed[bin].push(item.id)
    score.value += 1
    selectedId.value = null
    feedback.value = {
      text: `Correct. ${item.why}`,
      tone: 'is-ok'
    }
    if (pool.value.length === 0) {
      feedback.value = {
        text: `All 10 items classified. Score: ${score.value}/10. Reset to try again.`,
        tone: 'is-ok'
      }
    }
    return
  }

  feedback.value = {
    text: `Not quite. ${item.hint} Try again.`,
    tone: 'is-bad'
  }
}

function reset() {
  placed.organic = []
  placed.inorganic = []
  selectedId.value = null
  score.value = 0
  feedback.value = { text: 'Select an item, then choose a bin.', tone: '' }
}
</script>

<template>
  <div id="organic-sorter" class="lab">
    <div class="lab__head">
      <div>
        <h3>Organic or inorganic?</h3>
        <p class="lab__note">
          Select a substance, then place it in the correct bin. Watch for the carbon exceptions.
        </p>
      </div>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <div class="sorter-pool" aria-label="Unsorted substances">
      <button
        v-for="item in pool"
        :key="item.id"
        type="button"
        class="sort-chip"
        :class="{ 'is-selected': selectedId === item.id }"
        :aria-pressed="selectedId === item.id"
        @click="selectItem(item.id)"
      >
        {{ item.label }}
      </button>
      <span v-if="pool.length === 0" class="lab__note">All items classified.</span>
    </div>

    <div class="bins">
      <div class="bin" data-bin="organic">
        <h4>Organic</h4>
        <button
          type="button"
          class="bin-target"
          aria-label="Place selected item in the organic bin"
          @click="place('organic')"
        >
          Place selected item here
        </button>
        <ul class="bin-list">
          <li v-for="id in placed.organic" :key="id">
            {{ itemById(id).label }} · {{ itemById(id).formula }}
          </li>
        </ul>
      </div>
      <div class="bin" data-bin="inorganic">
        <h4>Inorganic</h4>
        <button
          type="button"
          class="bin-target"
          aria-label="Place selected item in the inorganic bin"
          @click="place('inorganic')"
        >
          Place selected item here
        </button>
        <ul class="bin-list">
          <li v-for="id in placed.inorganic" :key="id">
            {{ itemById(id).label }} · {{ itemById(id).formula }}
          </li>
        </ul>
      </div>
    </div>

    <p class="sorter-status" :class="feedback.tone" role="status" aria-live="polite">
      {{ feedback.text }}
    </p>
    <p class="lab__note">Score: {{ score }} / 10</p>
  </div>
</template>
