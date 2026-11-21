<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { createTimeline } from 'animejs'

const props = defineProps({
  center: { type: String, required: true },
  branches: { type: Array, required: true }
})

const activeId = ref(props.branches[0]?.id)
const active = computed(() => props.branches.find((branch) => branch.id === activeId.value) || props.branches[0])
const panelRef = ref(null)
let timeline = null

function buildTimeline() {
  if (!panelRef.value) return
  timeline = createTimeline({ autoplay: false })
  timeline.add(panelRef.value, {
    opacity: [0.35, 1],
    translateY: [10, 0],
    duration: 420,
    easing: 'easeOutQuad'
  })
}

function choose(id) {
  activeId.value = id
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    if (timeline) { timeline.progress = 1; timeline.pause() }
    return
  }
  timeline?.restart()
}

onMounted(buildTimeline)

onBeforeUnmount(() => {
  timeline?.pause()
  timeline?.revert?.()
  timeline = null
})
</script>

<template>
  <div class="reaction-map">
    <div class="reaction-map__center">{{ center }}</div>
    <div class="lab-controls" role="group" aria-label="Choose a reaction">
      <button
        v-for="branch in branches"
        :key="branch.id"
        type="button"
        class="btn btn-small"
        :aria-pressed="activeId === branch.id"
        @click="choose(branch.id)"
      >
        {{ branch.label }}
      </button>
    </div>

    <div ref="panelRef" class="comparison-card" aria-live="polite">
      <h4>{{ active.label }}</h4>
      <p v-if="active.equation" class="formula">{{ active.equation }}</p>
      <p v-if="active.product"><strong>Product:</strong> {{ active.product }}</p>
      <p v-if="active.note">{{ active.note }}</p>
    </div>
  </div>
</template>

<style scoped>
.reaction-map__center {
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: var(--teal);
  color: #fff;
  font-weight: 700;
}
.comparison-card {
  margin-top: 0.75rem;
  padding: 1rem 1.1rem;
  border: 1px solid var(--line, #d7d0c2);
  border-left: 4px solid var(--amber);
  border-radius: 0.65rem;
  background: var(--paper-2);
}
.comparison-card h4 {
  margin: 0 0 0.5rem;
}
</style>
