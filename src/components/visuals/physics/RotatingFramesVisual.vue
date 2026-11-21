<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { animate } from 'animejs'
import FrameMiniScene from './FrameMiniScene.vue'
import { useVisibilityPause } from '../../../composables/useVisibilityPause'

const root = ref(null)
const view = ref('ground')
const spin = reactive({ value: 25 })
let loop = null
let reduced = false

const cx = 320
const cy = 182
const radius = 120

const ball = computed(() => {
  if (view.value === 'platform') return { x: cx + radius, y: cy }
  const radians = (spin.value * Math.PI) / 180
  return { x: cx + radius * Math.cos(radians), y: cy - radius * Math.sin(radians) }
})

const summary = computed(() => {
  if (view.value === 'ground') {
    return 'Observer M stands on the ground. The ball travels in a circle because the tension provides the centripetal force.'
  }
  if (view.value === 'platform') {
    return 'Observer A rotates with the platform. The ball stays in front of A, so A invents an outward centrifugal force to balance the tension.'
  }
  return 'Both observers describe the same ball. M uses one real tension force; A adds a fictitious centrifugal force because A’s frame rotates.'
})

function startLoop() {
  loop?.pause()
  loop = null
  if (view.value === 'platform' || reduced) return
  loop = animate(spin, {
    value: spin.value + 360,
    duration: 9000,
    easing: 'linear',
    loop: true
  })
}

function setView(next) {
  view.value = next
  loop?.pause()
  loop?.revert?.()
  loop = null
  if (next === 'platform') {
    spin.value = 0
    return
  }
  if (reduced) {
    spin.value = 25
    return
  }
  spin.value = 25
  startLoop()
}

watch(view, (next) => {
  loop?.pause()
  loop?.revert?.()
  loop = null
  if (next === 'platform') {
    spin.value = 0
    return
  }
  if (!reduced) {
    spin.value = 25
    startLoop()
  }
})

useVisibilityPause(root, (visible) => {
  if (visible) {
    if (!loop && view.value !== 'platform' && !reduced) startLoop()
  } else if (loop) {
    loop.pause()
    loop = null
  }
})

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduced) startLoop()
}

onBeforeUnmount(() => {
  loop?.pause()
  loop?.revert?.()
  loop = null
})
</script>

<template>
  <div ref="root" class="frames-visual">
    <svg v-if="view !== 'both'" viewBox="0 0 720 360" role="img" aria-labelledby="frames-title frames-desc">
      <title id="frames-title">Two observers of the same ball</title>
      <desc id="frames-desc">{{ summary }}</desc>
      <defs>
        <marker markerUnits="userSpaceOnUse" id="frames-head" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#0f5c5c" />
        </marker>
        <marker markerUnits="userSpaceOnUse" id="frames-head-amber" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto">
          <path d="M 0 0 L 14 7 L 0 14 z" fill="#a05f0c" />
        </marker>
      </defs>

      <g :transform="`rotate(${spin.value} ${cx} ${cy})`">
        <circle :cx="cx" :cy="cy" :r="radius" fill="#f3ead9" stroke="var(--teal-dark)" stroke-width="4" />
        <g v-for="mark in [0, 45, 90, 135, 180, 225, 270, 315]" :key="mark">
          <line
            :x1="cx"
            :y1="cy"
            :x2="cx + radius * Math.cos((mark * Math.PI) / 180)"
            :y2="cy - radius * Math.sin((mark * Math.PI) / 180)"
            stroke="var(--line)"
            stroke-width="2"
          />
        </g>
        <circle :cx="cx" :cy="cy" r="12" fill="var(--teal-dark)" />
      </g>

      <circle
        v-if="view === 'ground'"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="none"
        stroke="var(--amber)"
        stroke-width="2"
        stroke-dasharray="6 6"
      />

      <line :x1="cx" :y1="cy" :x2="ball.x" :y2="ball.y" stroke="var(--ink-soft)" stroke-width="2" />
      <circle :cx="ball.x" :cy="ball.y" r="11" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="3" />

      <line
        :x1="ball.x"
        :y1="ball.y"
        :x2="cx + (ball.x - cx) * 0.55"
        :y2="cy + (ball.y - cy) * 0.55"
        stroke="var(--teal)"
        stroke-width="4"
        marker-end="url(#frames-head)"
      />
      <text
        :x="cx + (ball.x - cx) * 0.45"
        :y="cy + (ball.y - cy) * 0.45 - 12"
        text-anchor="middle"
        class="force-label"
      >
        tension
      </text>

      <g v-if="view === 'platform'">
        <line
          :x1="ball.x + 12"
          :y1="ball.y"
          :x2="ball.x + 78"
          :y2="ball.y"
          stroke="var(--amber)"
          stroke-width="4"
          marker-end="url(#frames-head-amber)"
        />
        <text :x="ball.x + 14" :y="ball.y + 40" class="fictitious">centrifugal (fictitious)</text>
        <text :x="ball.x + 14" :y="ball.y - 22" class="tiny">observer A</text>
      </g>

      <text v-if="view === 'ground'" x="640" y="300" text-anchor="end" class="tiny">observer M on the ground</text>
      <text x="360" y="336" text-anchor="middle" class="step">{{ summary }}</text>
    </svg>

    <div v-else class="split-frames">
      <FrameMiniScene view="ground" :spin="spin.value" />
      <FrameMiniScene view="platform" :spin="spin.value" />
    </div>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" :aria-pressed="view === 'ground'" @click="setView('ground')">
        Observer on the ground
      </button>
      <button type="button" class="btn btn-small" :aria-pressed="view === 'platform'" @click="setView('platform')">
        Observer on the platform
      </button>
      <button type="button" class="btn btn-small" :aria-pressed="view === 'both'" @click="setView('both')">
        Show both observers
      </button>
    </div>
    <p class="sim-summary" aria-live="polite">
      <strong>
        {{
          view === 'ground'
            ? 'Ground frame: one real force.'
            : view === 'platform'
              ? 'Rotating frame: one real force, one invented force.'
              : 'Split view: the same ball, two consistent descriptions.'
        }}
      </strong>
      {{ summary }}
    </p>
  </div>
</template>

<style scoped>
.frames-visual {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.5rem;
}
.force-label,
.fictitious,
.tiny,
.step {
  font-family: system-ui, sans-serif;
}
.force-label {
  paint-order: stroke;
  stroke: var(--paper-2);
  stroke-width: 3px;
  font-size: 12px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.fictitious {
  font-size: 11px;
  font-weight: 700;
  fill: var(--amber-deep);
}
.tiny {
  font-size: 11px;
  fill: var(--ink-soft);
}
.step {
  font-size: 12px;
  fill: var(--ink-soft);
}
.split-frames {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  animation: split-in 260ms ease-out;
}
@keyframes split-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 620px) {
  .split-frames {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (prefers-reduced-motion: reduce) {
  .split-frames {
    animation: none;
  }
}
.sim-summary {
  margin: 0;
  padding: 0.6rem 0.75rem;
  border-left: 3px solid var(--teal);
  background: var(--paper-2);
  font-size: 0.93rem;
}
</style>
