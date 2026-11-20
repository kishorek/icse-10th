import { inject, provide } from 'vue'
import { createChapterProgress } from './useProgress'

const CHAPTER_KEY = Symbol('chapter')

export function provideChapter(chapter) {
  const progress = createChapterProgress(chapter)
  const value = { chapter, progress }
  provide(CHAPTER_KEY, value)
  return value
}

export function useChapter() {
  const value = inject(CHAPTER_KEY)
  if (!value) {
    throw new Error('useChapter() must be used inside ChapterProvider')
  }
  return value
}
