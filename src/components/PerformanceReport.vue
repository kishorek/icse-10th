<script setup>
import { computed } from 'vue'
import { outcomes } from '../data/chapter'

const props = defineProps({
  score: { type: Object, required: true },
  questions: { type: Array, required: true }
})

const outcomeRows = computed(() =>
  Object.entries(props.score.byOutcome).map(([key, value]) => ({
    key,
    label: outcomes[key] || key,
    earned: value.earned,
    total: value.total,
    percent: value.total ? Math.round((value.earned / value.total) * 100) : 0
  }))
)

const weakQuestions = computed(() =>
  props.questions.filter((question) => props.score.weakIds.includes(question.id))
)

const message = computed(() => {
  if (props.score.percent >= 80) {
    return 'Strong result. Revise the weak outcomes and keep the definitions precise.'
  }
  if (props.score.percent >= 60) {
    return 'Developing. Revisit the weak outcomes and retry the questions listed below.'
  }
  return 'Needs revision. Return to the lessons, then retry the assessment after reviewing.'
})
</script>

<template>
  <div class="summary-panel">
    <p class="eyebrow">Your result</p>
    <p class="score-big" aria-live="polite">{{ score.totalEarned }} / {{ score.totalMarks }}</p>
    <p class="score-note">{{ score.percent }}% · {{ message }}</p>

    <div class="summary-stats">
      <div class="summary-stat">
        <strong>{{ score.autoEarned }} / {{ score.autoTotal }}</strong>
        Objective marks
      </div>
      <div class="summary-stat">
        <strong>{{ score.selfEarned }} / {{ score.selfTotal }}</strong>
        {{ score.selfEarned === 0 ? 'Self-assessed written marks (not yet marked)' : 'Self-assessed written marks' }}
      </div>
    </div>

    <h3>By outcome</h3>
    <div class="outcome-list">
      <div v-for="row in outcomeRows" :key="row.key" class="outcome-row">
        <span>{{ row.label }}</span>
        <span>{{ row.earned }} / {{ row.total }}</span>
        <div class="outcome-bar" :aria-label="`${row.label}: ${row.percent}%`">
          <span :style="{ width: `${row.percent}%` }"></span>
        </div>
      </div>
    </div>

    <h3>Questions to revisit</h3>
    <p v-if="weakQuestions.length === 0" class="score-note">
      No weak questions in this attempt. Still review the written marking points before moving on.
    </p>
    <ul v-else class="retry-list">
      <li v-for="question in weakQuestions" :key="question.id">
        <a :href="`#q-${question.id}`">{{ question.id }} · {{ question.topic }}</a>
      </li>
    </ul>

    <h3>Suggested revision</h3>
    <p class="score-note">
      Review today, then return after 1, 3, 7 and 14 days. Use the flashcards and the retry set
      rather than rereading the whole chapter.
    </p>
    <p class="score-note">
      Written answers are self-marked. Compare your answer with the marking points before changing a
      self-score.
    </p>
  </div>
</template>
