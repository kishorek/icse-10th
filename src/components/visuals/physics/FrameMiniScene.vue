<script setup>
import { computed } from 'vue'

const props = defineProps({
  view: { type: String, required: true },
  spin: { type: Number, default: 0 }
})

const cx = 170
const cy = 132
const radius = 78

const ball = computed(() => {
  if (props.view === 'platform') return { x: cx + radius, y: cy }
  const radians = (props.spin * Math.PI) / 180
  return { x: cx + radius * Math.cos(radians), y: cy - radius * Math.sin(radians) }
})

const label = computed(() =>
  props.view === 'ground' ? 'Observer on the ground' : 'Observer on the platform'
)

const description = computed(() =>
  props.view === 'ground'
    ? 'The ball travels in a circle. Tension provides the centripetal force towards the centre.'
    : 'The ball stays in front of the observer. An outward centrifugal force is invented to balance the tension.'
)
</script>

<template>
  <figure class="mini-frame">
    <figcaption>{{ label }}</figcaption>
    <svg viewBox="0 0 340 280" role="img" :aria-label="`${label}. ${description}`">
      <title>{{ label }}</title>
      <desc>{{ description }}</desc>
      <defs>
        <marker :id="`mini-head-${view}`" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 z" fill="#0f5c5c" />
        </marker>
        <marker :id="`mini-amber-${view}`" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 12 6 L 0 12 z" fill="#a05f0c" />
        </marker>
      </defs>

      <g :transform="`rotate(${view === 'ground' ? spin : 0} ${cx} ${cy})`">
        <circle :cx="cx" :cy="cy" :r="radius" fill="#f3ead9" stroke="var(--teal-dark)" stroke-width="3" />
        <g v-for="mark in [0, 60, 120, 180, 240, 300]" :key="mark">
          <line
            :x1="cx"
            :y1="cy"
            :x2="cx + radius * Math.cos((mark * Math.PI) / 180)"
            :y2="cy - radius * Math.sin((mark * Math.PI) / 180)"
            stroke="var(--line)"
            stroke-width="1.5"
          />
        </g>
        <circle :cx="cx" :cy="cy" r="9" fill="var(--teal-dark)" />
      </g>

      <circle
        v-if="view === 'ground'"
        :cx="cx"
        :cy="cy"
        :r="radius"
        fill="none"
        stroke="var(--amber)"
        stroke-width="2"
        stroke-dasharray="5 5"
      />

      <line :x1="cx" :y1="cy" :x2="ball.x" :y2="ball.y" stroke="var(--ink-soft)" stroke-width="1.6" />
      <line
        :x1="ball.x"
        :y1="ball.y"
        :x2="cx + (ball.x - cx) * 0.55"
        :y2="cy + (ball.y - cy) * 0.55"
        stroke="var(--teal)"
        stroke-width="3"
        :marker-end="`url(#mini-head-${view})`"
      />
      <circle :cx="ball.x" :cy="ball.y" r="8" fill="var(--amber-light)" stroke="var(--amber-deep)" stroke-width="2" />

      <g v-if="view === 'platform'">
        <line
          :x1="ball.x + 8"
          :y1="ball.y"
          :x2="ball.x + 58"
          :y2="ball.y"
          stroke="var(--amber)"
          stroke-width="3"
          :marker-end="`url(#mini-amber-${view})`"
        />
        <text :x="ball.x + 6" :y="ball.y + 28" class="mini-note">centrifugal</text>
        <text :x="ball.x + 8" :y="ball.y - 18" class="mini-note teal">tension</text>
      </g>

      <text x="170" y="258" text-anchor="middle" class="mini-observer">
        {{ view === 'ground' ? 'observer M' : 'observer A' }}
      </text>
    </svg>
  </figure>
</template>

<style scoped>
.mini-frame {
  margin: 0;
  padding: 0.5rem;
  border: 1px solid var(--line);
  border-radius: 0.6rem;
  background: var(--paper-2);
}
.mini-frame svg {
  display: block;
  width: 100%;
  min-width: 0;
  height: auto;
}
.mini-frame figcaption {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--teal-dark);
  margin-bottom: 0.25rem;
}
.mini-note,
.mini-observer {
  font-family: system-ui, sans-serif;
}
.mini-note {
  font-size: 9px;
  fill: var(--amber-deep);
}
.mini-note.teal {
  fill: var(--teal-dark);
}
.mini-observer {
  font-size: 10px;
  fill: var(--ink-soft);
}
</style>
