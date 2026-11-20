import { computed, reactive } from 'vue'

function defaultState() {
  return {
    checks: {},
    assessment: { answers: {}, selfScores: {}, submitted: false }
  }
}

export function loadChapterState(storageKey) {
  if (typeof localStorage === 'undefined') return defaultState()

  try {
    const raw = localStorage.getItem(storageKey)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw)
    const checks =
      parsed && parsed.checks && typeof parsed.checks === 'object' && !Array.isArray(parsed.checks)
        ? parsed.checks
        : {}
    const assessment = parsed?.assessment || {}
    return {
      checks,
      assessment: {
        answers:
          assessment.answers && typeof assessment.answers === 'object' && !Array.isArray(assessment.answers)
            ? assessment.answers
            : {},
        selfScores:
          assessment.selfScores && typeof assessment.selfScores === 'object' && !Array.isArray(assessment.selfScores)
            ? assessment.selfScores
            : {},
        submitted: Boolean(assessment.submitted)
      }
    }
  } catch {
    return defaultState()
  }
}

export function createChapterProgress(chapter) {
  const state = reactive(loadChapterState(chapter.storageKey))

  const save = () => {
    try {
      localStorage.setItem(chapter.storageKey, JSON.stringify(state))
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
    chapter.lessons.filter((lesson) =>
      lesson.checkIds.every((checkId) => state.checks[checkId]?.correct === true)
    )
  )

  const completedIds = computed(() => new Set(completedLessons.value.map((lesson) => lesson.id)))
  const assessmentSubmitted = computed(() => state.assessment.submitted)
  const assessmentMilestone = chapter.features.assessment ? 1 : 0
  const milestonesTotal = chapter.lessons.length + assessmentMilestone

  const progressPercent = computed(() => {
    const done = completedLessons.value.length + (assessmentSubmitted.value ? assessmentMilestone : 0)
    return milestonesTotal ? Math.round((done / milestonesTotal) * 100) : 0
  })

  const resetAll = () => {
    try {
      localStorage.removeItem(chapter.storageKey)
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
