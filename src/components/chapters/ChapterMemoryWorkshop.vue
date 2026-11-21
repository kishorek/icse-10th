<script setup>
import Flashcards from '../Flashcards.vue'

defineProps({
  data: { type: Object, required: true }
})
</script>

<template>
  <section id="memory" class="lesson" aria-labelledby="memory-title">
    <header class="lesson-head">
      <p class="lesson-kicker">Memory workshop</p>
      <h2 id="memory-title">{{ data.title }}</h2>
      <p class="lesson-objective">{{ data.objective }}</p>
    </header>

    <div class="prose">
      <p v-for="paragraph in data.intro" :key="paragraph">{{ paragraph }}</p>

      <template v-for="section in data.sections" :key="section.title">
        <h3>{{ section.title }}</h3>
        <p v-if="section.note">{{ section.note }}</p>
        <div class="table-wrap">
          <table class="compare-table">
            <caption v-if="section.caption">{{ section.caption }}</caption>
            <thead>
              <tr>
                <th v-for="header in section.headers" :key="header" scope="col">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in section.rows" :key="row[0]">
                <th scope="row">{{ row[0] }}</th>
                <td v-for="cell in row.slice(1)" :key="cell">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <div class="recall-prompt">
        <strong>Spaced recall prompt.</strong> {{ data.recall }}
      </div>

      <h3>Active recall</h3>
      <p>Flip each card, answer before you reveal, and say the reason rather than only the word.</p>
      <Flashcards :cards="data.flashcards" />
    </div>
  </section>
</template>
