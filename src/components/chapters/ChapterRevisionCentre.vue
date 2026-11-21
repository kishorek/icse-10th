<script setup>
defineProps({
  data: { type: Object, required: true }
})
</script>

<template>
  <section id="revision" class="lesson" aria-labelledby="revision-title">
    <header class="lesson-head">
      <p class="lesson-kicker">Revision centre</p>
      <h2 id="revision-title">The chapter at a glance</h2>
      <p class="lesson-objective">
        Use this after you have worked through the lessons. It is a revision aid, not a replacement
        for the explanations.
      </p>
    </header>

    <div class="prose">
      <div class="rapid-sheet">
        <h3>Rapid revision sheet</h3>
        <ul>
          <li v-for="item in data.rapidSheet" :key="item">{{ item }}</li>
        </ul>
      </div>

      <template v-if="data.definitions?.length">
        <h3>Definitions and statements</h3>
        <div class="table-wrap">
          <table class="compare-table">
            <caption>Terms to reproduce precisely</caption>
            <thead>
              <tr>
                <th scope="col">Term</th>
                <th scope="col">Exam-safe meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in data.definitions" :key="row.term">
                <th scope="row">{{ row.term }}</th>
                <td>{{ row.meaning }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template v-if="data.equations?.length">
        <h3>Equations with conditions and observations</h3>
        <div class="table-wrap">
          <table class="compare-table">
            <caption>Reaction, balanced equation, condition and what is observed</caption>
            <thead>
              <tr>
                <th scope="col">Reaction</th>
                <th scope="col">Balanced equation</th>
                <th scope="col">Condition</th>
                <th scope="col">Observation or product</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in data.equations" :key="row.reaction">
                <th scope="row">{{ row.reaction }}</th>
                <td class="formula">{{ row.equation }}</td>
                <td>{{ row.condition }}</td>
                <td>{{ row.observation }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template v-if="data.comparisons?.length">
        <h3>Easily confused ideas</h3>
        <div class="table-wrap">
          <table class="compare-table">
            <caption>Compare the pair before the exam</caption>
            <thead>
              <tr>
                <th scope="col">Pair</th>
                <th scope="col">Key difference</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in data.comparisons" :key="row.pair">
                <th scope="row">{{ row.pair }}</th>
                <td>{{ row.difference }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template v-if="data.memoryAids?.length">
        <h3>Memory aids</h3>
        <ul>
          <li v-for="item in data.memoryAids" :key="item">{{ item }}</li>
        </ul>
      </template>

      <h3>Common mistakes</h3>
      <ol class="mistake-list">
        <li v-for="mistake in data.mistakes" :key="mistake">{{ mistake }}</li>
      </ol>

      <h3>Review questions</h3>
      <ol>
        <li v-for="question in data.reviewQuestions" :key="question">{{ question }}</li>
      </ol>
    </div>
  </section>
</template>
