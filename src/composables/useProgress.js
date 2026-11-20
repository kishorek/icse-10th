import { computed, reactive } from 'vue'
import { lessons, storageKey } from '../data/chapter'

function defaultState() {
  return {
    checks: {},
    assessment: {
      answers: {},
      selfScores: {},
      submitted: false
    }
  }
}

function loadState() {
  if (typeof localStorage === 'undefined') {
    return defaultState()
  }

  try {
    const raw = localStorage.getItem(storageKey)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw)
    const checks =
      parsed &&
      parsed.checks &&
      typeof parsed.checks === 'object' &&
      !Array.isArray(parsed.checks)
        ? parsed.checks
        : {}
    const assessment = parsed?.assessment || {}
    return {
      checks,
      assessment: {
        answers:
          assessment.answers &&
          typeof assessment.answers === 'object' &&
          !Array.isArray(assessment.answers)
            ? assessment.answers
            : {},
        selfScores:
          assessment.selfScores &&
          typeof assessment.selfScores === 'object' &&
          !Array.isArray(assessment.selfScores)
            ? assessment.selfScores
            : {},
        submitted: Boolean(assessment.submitted)
      }
    }
  } catch {
    return defaultState()
  }
}

const state = reactive(loadState())

export function useProgress() {
  const save = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state))
    } catch {
      // Storage can be unavailable in private or restricted browser contexts.
    }
  }

  const recordCheck = (id, answer, correct) => {
    const previous = state.checks[id]
    state.checks[id] = {
      answer,
      correct: Boolean(correct),
      attempts: (previous?.attempts || 0) + 1
    }
    save()
  }

  const completedLessons = computed(() =>
    lessons.filter((lesson) =>
      lesson.checkIds.every((checkId) => state.checks[checkId]?.correct === true)
    )
  )

  const completedIds = computed(() => new Set(completedLessons.value.map((lesson) => lesson.id)))

  const assessmentSubmitted = computed(() => state.assessment.submitted)

  const milestonesTotal = lessons.length + 1

  const progressPercent = computed(() => {
    const done = completedLessons.value.length + (assessmentSubmitted.value ? 1 : 0)
    return Math.round((done / milestonesTotal) * 100)
  })

  const resetAll = () => {
    try {
      localStorage.removeItem(storageKey)
    } catch {
      // Ignore storage failures; reload still restores in-memory defaults.
    }
    window.location.reload()
  }

  return {
    state,
    save,
    recordCheck,
    completedLessons,
    completedIds,
    assessmentSubmitted,
    milestonesTotal,
    progressPercent,
    resetAll
  }
}
