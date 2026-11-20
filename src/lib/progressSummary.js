import { loadChapterState } from '../composables/useProgress'

export function readChapterSummary(chapter) {
  const state = loadChapterState(chapter.storageKey)
  const completed = chapter.lessons.filter((lesson) =>
    lesson.checkIds.every((id) => state.checks[id]?.correct === true)
  ).length
  const assessmentDone = chapter.features.assessment && state.assessment.submitted ? 1 : 0
  const total = chapter.lessons.length + (chapter.features.assessment ? 1 : 0)
  const done = completed + assessmentDone
  return {
    done,
    total,
    percent: total ? Math.round((done / total) * 100) : 0,
    assessmentSubmitted: state.assessment.submitted
  }
}
