<script setup>
import { ref } from 'vue'
import Flashcards from './Flashcards.vue'

const showMapping = ref(true)

const mapping = [
  {
    word: 'Tiny',
    item: 'Tetravalency',
    meaning: 'Carbon forms four covalent bonds.'
  },
  {
    word: 'Carbon',
    item: 'Catenation',
    meaning: 'Carbon atoms link to one another to form chains and rings.'
  },
  {
    word: 'Makes',
    item: 'Multiple bonds',
    meaning: 'Carbon can form single, double and triple bonds.'
  },
  {
    word: 'Isomers',
    item: 'Isomerism',
    meaning: 'The same molecular formula can give different structural formulae.'
  }
]
</script>

<template>
  <section id="memory" class="lesson" aria-labelledby="memory-title">
    <header class="lesson-head">
      <p class="lesson-kicker">Memory workshop</p>
      <h2 id="memory-title">Remember the four reasons</h2>
      <p class="lesson-objective">
        Use a sentence, not a string of letters, to reconstruct why carbon is central to organic
        chemistry.
      </p>
    </header>

    <div class="prose">
      <div class="acrostic">
        <p class="acrostic__sentence">“Tiny Carbon Makes Isomers.”</p>
        <table v-show="showMapping" class="acrostic-table">
          <caption class="sr-only">
            Word-to-item mapping for the acrostic
          </caption>
          <thead>
            <tr>
              <th scope="col">Word</th>
              <th scope="col">Target item</th>
              <th scope="col">What it means</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in mapping" :key="row.word">
              <td>{{ row.word }}</td>
              <td>{{ row.item }}</td>
              <td>{{ row.meaning }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="lab-controls">
        <button type="button" class="btn" @click="showMapping = !showMapping">
          {{ showMapping ? 'Cover the mapping' : 'Reveal the mapping' }}
        </button>
      </div>

      <div class="recall-prompt">
        <strong>Recall prompt.</strong> Cover the table. Say the sentence aloud. Then rebuild the
        four items in order: tetravalency, catenation, multiple bonds, isomerism. For each item, add
        one sentence explaining what it means.
      </div>

      <h3>How to use the sentence</h3>
      <ol>
        <li>Read the sentence once and picture a tiny carbon atom holding hands with itself.</li>
        <li>Say the first word, then name the target item and explain it.</li>
        <li>Repeat the sequence without looking. Check only after you finish.</li>
        <li>Return to the sentence after 1, 3, 7 and 14 days.</li>
      </ol>

      <aside class="exam-tip">
        <span class="tag">Why this works</span>
        <p>
          The sentence preserves the order of the four reasons. The order matters: carbon's bonding
          capacity comes first, then self-linking, then multiple bonding, then the structural variety
          that follows.
        </p>
      </aside>

      <Flashcards />
    </div>
  </section>
</template>
