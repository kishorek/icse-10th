<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { createTimeline, svg } from 'animejs'

const props = defineProps({
  left: { type: String, required: true },
  reagent: { type: String, required: true },
  right: { type: String, required: true },
  bond: { type: String, default: 'double' },
  bondNote: { type: String, default: '' },
  productLabel: { type: String, default: 'saturated product' },
  note: { type: String, default: '' }
})

const arrowPath = ref(null)
const productGroup = ref(null)
const status = ref('Ready')
let timeline = null

function buildTimeline() {
  if (!arrowPath.value || !productGroup.value) return
  timeline = createTimeline({ autoplay: false })
  timeline.add(svg.createDrawable(arrowPath.value), {
    draw: '0 1',
    duration: 650,
    easing: 'easeInOutQuad'
  })
  timeline.add(
    productGroup.value,
    { opacity: [0, 1], scale: [0.92, 1], duration: 520, easing: 'easeOutQuad' },
    '-=180'
  )
}

function play() {
  timeline?.play()
  status.value = 'Playing'
}

function pause() {
  timeline?.pause()
  status.value = 'Paused'
}

function restart() {
  timeline?.restart()
  status.value = 'Playing from the start'
}

onMounted(() => {
  buildTimeline()
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    if (timeline) { timeline.progress = 1; timeline.pause() }
    status.value = 'Final state shown because reduced motion is on'
  }
})

onBeforeUnmount(() => {
  timeline?.pause()
  timeline?.revert?.()
  timeline = null
})
</script>

<template>
  <div class="bond-change">
    <svg viewBox="0 0 720 250" role="img" :aria-label="`${left} plus ${reagent} gives ${right}`">
      <title>Bond change</title>
      <desc>{{ left }} reacts with {{ reagent }} to give {{ right }}. {{ note }}</desc>

      <rect x="28" y="74" width="180" height="90" rx="12" fill="var(--paper-2)" stroke="var(--teal)" stroke-width="3" />
      <text x="118" y="112" text-anchor="middle" class="mol">{{ left }}</text>
      <text x="118" y="140" text-anchor="middle" class="tiny">{{ bondNote || (bond === 'triple' ? 'C≡C present' : 'C=C present') }}</text>

      <text x="230" y="126" text-anchor="middle" class="plus">+</text>
      <text x="280" y="126" text-anchor="middle" class="mol-small">{{ reagent }}</text>

      <path
        ref="arrowPath"
        d="M 390 120 L 500 120"
        fill="none"
        stroke="var(--amber)"
        stroke-width="5"
        stroke-linecap="round"
      />
      <path d="M 490 110 L 502 120 L 490 130" fill="none" stroke="var(--amber)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />

      <g ref="productGroup">
        <rect x="516" y="74" width="176" height="90" rx="12" fill="#e8f4ef" stroke="var(--teal-dark)" stroke-width="3" />
        <text x="604" y="112" text-anchor="middle" class="mol">{{ right }}</text>
        <text x="604" y="140" text-anchor="middle" class="tiny">{{ productLabel }}</text>
      </g>
    </svg>
    <p v-if="note" class="flow-note">{{ note }}</p>
    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="restart">Restart</button>
    </div>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.mol {
  font-family: ui-monospace, monospace;
  font-size: 18px;
  font-weight: 700;
  fill: var(--ink);
}
.mol-small {
  font-family: ui-monospace, monospace;
  font-size: 15px;
  fill: var(--ink);
}
.plus {
  font-family: system-ui, sans-serif;
  font-size: 24px;
  font-weight: 700;
  fill: var(--amber-dark, #8a5a00);
}
.tiny {
  font-family: system-ui, sans-serif;
  font-size: 11px;
  fill: var(--ink-soft);
}
</style>
