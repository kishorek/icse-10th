import { onBeforeUnmount, onMounted } from 'vue'

export function useVisibilityPause(targetRef, onChange) {
  let observer = null

  onMounted(() => {
    if (!targetRef.value || typeof IntersectionObserver === 'undefined') return
    observer = new IntersectionObserver(
      ([entry]) => onChange(entry.isIntersecting),
      { threshold: 0.08 }
    )
    observer.observe(targetRef.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })
}
