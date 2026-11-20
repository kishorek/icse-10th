<script setup>
import { computed } from 'vue'
import { outcomes } from '../data/chapter'
import {
  answerIsCorrect,
  formatCorrectAnswer,
  matchScore,
  selfMax
} from '../lib/scoring'

const props = defineProps({
  question: { type: Object, required: true },
  answers: { type: Object, required: true },
  selfScores: { type: Object, required: true },
  submitted: { type: Boolean, default: false }
})

const typeLabels = {
  single: 'Single choice',
  multiple: 'Multiple select',
  truefalse: 'True or false',
  fill: 'Fill in the blank',
  match: 'Matching',
  short: 'Short answer',
  long: 'Long answer'
}

const trueFalseOptions = [
  { value: 'True', text: 'True' },
  { value: 'False', text: 'False' }
]

const choices = computed(() =>
  props.question.type === 'truefalse' ? trueFalseOptions : props.question.options || []
)

const isObjective = computed(() =>
  ['single', 'multiple', 'truefalse', 'fill', 'match'].includes(props.question.type)
)

const selfLimit = computed(() => selfMax(props.question))
const hasSelf = computed(() => selfLimit.value > 0)

const selectedValues = computed(() => {
  const value = props.answers[props.question.id]
  return Array.isArray(value) ? value : value ? [value] : []
})

const isCorrect = computed(() => {
  if (!isObjective.value) return null
  return answerIsCorrect(props.question, props.answers)
})

const matchCorrectCount = computed(() =>
  props.question.type === 'match' ? matchScore(props.question, props.answers) : 0
)

const selfScore = computed({
  get: () => props.selfScores[props.question.id] ?? 0,
  set: (value) => {
    props.selfScores[props.question.id] = Number(value)
  }
})

const canSelfScore = computed(() => {
  if (props.question.type === 'short' || props.question.type === 'long') {
    return String(props.answers[props.question.id] ?? '').trim().length > 0
  }
  if (props.question.type === 'truefalse') {
    return String(props.answers[`${props.question.id}-justify`] ?? '').trim().length > 0
  }
  return false
})

function optionState(option) {
  if (!props.submitted) return {}
  const answer = props.question.answer
  const isSelected = selectedValues.value.includes(option.value)

  if (props.question.type === 'multiple') {
    const shouldBeSelected = Array.isArray(answer) && answer.includes(option.value)
    return {
      'is-correct': shouldBeSelected,
      'is-wrong': isSelected && !shouldBeSelected
    }
  }

  if (props.question.type === 'single' || props.question.type === 'truefalse') {
    return {
      'is-correct': option.value === answer,
      'is-wrong': isSelected && option.value !== answer
    }
  }

  return {}
}

function matchRowState(index) {
  if (!props.submitted) return {}
  const pair = props.question.pairs[index]
  const chosen = props.answers[`${props.question.id}-${index}`]
  return {
    'is-correct': chosen === pair.answer,
    'is-wrong': Boolean(chosen) && chosen !== pair.answer
  }
}

const feedbackTone = computed(() => {
  if (!props.submitted) return ''
  if (props.question.type === 'short' || props.question.type === 'long') return ''
  return isCorrect.value ? 'is-correct' : 'is-wrong'
})

const feedbackStatus = computed(() => {
  if (props.question.type === 'short' || props.question.type === 'long') {
    return 'Self-assess using the marking points.'
  }
  if (props.question.type === 'match') {
    return `Correct pairs: ${matchCorrectCount.value} of ${props.question.pairs.length}.`
  }
  return isCorrect.value ? 'Correct.' : 'Not correct.'
})
</script>

<template>
  <article :id="`q-${question.id}`" class="question" tabindex="-1" :aria-labelledby="`${question.id}-prompt`">
    <div class="q-head">
      <span class="q-number">{{ question.id }}</span>
      <span class="q-meta">
        {{ outcomes[question.outcome] }} · {{ typeLabels[question.type] }} · {{ question.marks }}
        {{ question.marks === 1 ? 'mark' : 'marks' }}
      </span>
    </div>

    <p :id="`${question.id}-prompt`" class="q-prompt">{{ question.prompt }}</p>

    <div class="q-body">
      <fieldset
        v-if="question.type === 'single' || question.type === 'truefalse'"
        :aria-labelledby="`${question.id}-prompt`"
      >
        <legend class="sr-only">Choose one answer</legend>
        <div class="q-options">
          <label
            v-for="option in choices"
            :key="option.value"
            class="q-option"
            :class="optionState(option)"
          >
            <input
              v-model="answers[question.id]"
              type="radio"
              :name="question.id"
              :value="option.value"
              :disabled="submitted"
            />
            <span>{{ option.text }}</span>
          </label>
        </div>

        <div v-if="question.type === 'truefalse' && question.justify" class="q-justify">
          <label class="q-label" :for="`${question.id}-justify`">Justify your answer.</label>
          <textarea
            :id="`${question.id}-justify`"
            v-model="answers[`${question.id}-justify`]"
            class="q-textarea"
            :disabled="submitted"
          ></textarea>
        </div>
      </fieldset>

      <fieldset
        v-else-if="question.type === 'multiple'"
        :aria-labelledby="`${question.id}-prompt`"
      >
        <legend class="sr-only">Select all that apply</legend>
        <div class="q-options">
          <label
            v-for="option in question.options"
            :key="option.value"
            class="q-option"
            :class="optionState(option)"
          >
            <input
              v-model="answers[question.id]"
              type="checkbox"
              :value="option.value"
              :disabled="submitted"
            />
            <span>{{ option.text }}</span>
          </label>
        </div>
      </fieldset>

      <div v-else-if="question.type === 'fill'">
        <label class="q-label" :for="question.id">Your answer</label>
        <input
          :id="question.id"
          v-model="answers[question.id]"
          class="q-input"
          type="text"
          autocomplete="off"
          :aria-describedby="`${question.id}-prompt`"
          :disabled="submitted"
        />
      </div>

      <div v-else-if="question.type === 'match'" class="match-grid">
        <div
          v-for="(pair, index) in question.pairs"
          :key="pair.left"
          class="match-row"
          :class="matchRowState(index)"
        >
          <span>{{ pair.left }}</span>
          <select
            v-model="answers[`${question.id}-${index}`]"
            class="q-select"
            :aria-label="`Match for ${pair.left}`"
            :disabled="submitted"
          >
            <option value="">Choose a description</option>
            <option v-for="option in question.options" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
      </div>

      <div v-else>
        <label class="q-label" :for="question.id">Your answer</label>
        <textarea
          :id="question.id"
          v-model="answers[question.id]"
          class="q-textarea"
          :aria-describedby="`${question.id}-prompt`"
          :disabled="submitted"
        ></textarea>
      </div>
    </div>

    <div v-if="submitted" class="q-feedback" :class="feedbackTone">
      <template v-if="isObjective">
        <span class="feedback-status" :class="isCorrect ? 'is-correct' : 'is-wrong'">
          {{ feedbackStatus }}
        </span>
        <p>
          <strong>Correct answer:</strong> {{ formatCorrectAnswer(question) }}
        </p>
        <p>{{ question.explanation }}</p>
      </template>

      <template v-if="hasSelf">
        <p><strong>Model answer:</strong> {{ question.modelAnswer }}</p>
        <p><strong>Marking points:</strong></p>
        <ul class="marking-points">
          <li v-for="point in question.markingPoints" :key="point">{{ point }}</li>
        </ul>
        <div class="self-score">
          <label :for="`${question.id}-self`">Self-score for the written part:</label>
          <select
            :id="`${question.id}-self`"
            v-model.number="selfScore"
            :disabled="!canSelfScore"
          >
            <option v-for="n in selfLimit + 1" :key="n - 1" :value="n - 1">{{ n - 1 }}</option>
          </select>
          <span>out of {{ selfLimit }}</span>
          <span v-if="!canSelfScore">Write an answer before self-scoring.</span>
        </div>
      </template>

      <p v-if="question.misconception">
        <strong>Watch out:</strong> {{ question.misconception }}
      </p>
    </div>
  </article>
</template>
