<script setup>
import { computed, nextTick, onMounted } from 'vue'
import questions from '../data/questions.json'
import { useProgress } from '../composables/useProgress'
import { isAnswered, scoreAssessment } from '../lib/scoring'
import QuestionCard from './QuestionCard.vue'
import PerformanceReport from './PerformanceReport.vue'

const { state, save } = useProgress()
const answers = state.assessment.answers
const selfScores = state.assessment.selfScores

const submitted = computed(() => state.assessment.submitted)
const answeredCount = computed(
  () => questions.filter((question) => isAnswered(question, answers)).length
)
const score = computed(() => scoreAssessment(questions, answers, selfScores))

function ensureArrays() {
  questions.forEach((question) => {
    if (question.type === 'multiple' && !Array.isArray(answers[question.id])) {
      answers[question.id] = []
    }
  })
}

onMounted(ensureArrays)

function submit() {
  const missing = questions.length - answeredCount.value
  if (
    missing > 0 &&
    !window.confirm(
      `You have ${missing} unanswered ${missing === 1 ? 'question' : 'questions'}. Submit anyway?`
    )
  ) {
    return
  }

  state.assessment.submitted = true
  save()
  nextTick(() => {
    document.getElementById('assessment-summary')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function reset() {
  if (
    answeredCount.value > 0 &&
    !window.confirm('Reset all assessment answers and self-scores? This cannot be undone.')
  ) {
    return
  }

  Object.keys(answers).forEach((key) => {
    delete answers[key]
  })
  Object.keys(selfScores).forEach((key) => {
    delete selfScores[key]
  })
  state.assessment.submitted = false
  ensureArrays()
  save()
  nextTick(() => {
    document.getElementById('assessment')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
</script>

<template>
  <section id="assessment" class="lesson" aria-labelledby="assessment-title">
    <header class="lesson-head">
      <p class="lesson-kicker">Chapter assessment</p>
      <h2 id="assessment-title">Check your examination readiness</h2>
      <p class="lesson-objective">
        24 original practice questions, worth 39 marks. Objective answers are scored automatically.
        Written answers reveal marking points after submission and are self-assessed.
      </p>
    </header>

    <div class="assessment-toolbar">
      <p class="assessment-status" aria-live="polite">
        {{ answeredCount }} of {{ questions.length }} answered
      </p>
      <div class="assessment-actions">
        <button type="button" class="btn btn-primary" :disabled="submitted" @click="submit">
          Submit assessment
        </button>
        <button type="button" class="btn" @click="reset">Reset answers</button>
      </div>
    </div>

    <form id="assessment-form" novalidate @change="save" @input="save" @submit.prevent>
      <QuestionCard
        v-for="question in questions"
        :key="question.id"
        :question="question"
        :answers="answers"
        :self-scores="selfScores"
        :submitted="submitted"
      />
    </form>

    <div v-if="submitted" id="assessment-summary" class="assessment-summary">
      <PerformanceReport :score="score" :questions="questions" />
    </div>
    <p v-else class="score-note">
      Written answers are self-marked after submission. Do not look ahead at the marking points
      before you attempt each question.
    </p>
  </section>
</template>
