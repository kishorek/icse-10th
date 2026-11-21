<script setup>
import { ref } from 'vue'

defineProps({
  technique: { type: String, required: true },
  title: { type: String, required: true },
  aid: { type: String, required: true },
  mapping: { type: Array, required: true },
  recall: { type: String, required: true }
})

const showMapping = ref(true)
</script>

<template>
  <aside class="memory-hook" :aria-label="`Memory hook: ${title}`">
    <p class="memory-hook__kicker">Memory hook · {{ technique }}</p>
    <h3>{{ title }}</h3>
    <p class="memory-hook__aid">{{ aid }}</p>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="showMapping = !showMapping">
        {{ showMapping ? 'Cover the mapping' : 'Reveal the mapping' }}
      </button>
    </div>

    <div v-show="showMapping" class="memory-hook__table-wrap">
      <table class="memory-hook__mapping">
        <caption class="sr-only">Cue-to-content mapping</caption>
        <thead>
          <tr>
            <th scope="col">Cue</th>
            <th scope="col">Remember</th>
            <th scope="col">Why it fits</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in mapping" :key="row.cue">
            <td>{{ row.cue }}</td>
            <td>{{ row.target }}</td>
            <td>{{ row.meaning }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="memory-hook__recall"><strong>Recall:</strong> {{ recall }}</p>
  </aside>
</template>
