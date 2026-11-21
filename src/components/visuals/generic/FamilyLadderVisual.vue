<script setup>
import { computed } from 'vue'

const props = defineProps({
  family: { type: String, required: true },
  formula: { type: String, required: true },
  members: { type: Array, required: true },
  bondLabel: { type: String, default: '' }
})

const positions = computed(() =>
  props.members.map((member, index) => ({
    ...member,
    x: 110 + index * 240
  }))
)
</script>

<template>
  <svg viewBox="0 0 720 300" role="img" :aria-label="`${family} family ladder`">
    <title>{{ family }} family ladder</title>
    <desc>
      Members of the {{ family }} family arranged in order. The general formula is {{ formula }}.
      Each step adds one carbon and two hydrogen atoms.
    </desc>

    <text x="360" y="32" text-anchor="middle" class="svg-heading">{{ family }}</text>
    <text x="360" y="56" text-anchor="middle" class="svg-small">General formula: {{ formula }}</text>

    <g v-for="(member, index) in positions" :key="member.name">
      <rect
        :x="member.x - 82"
        y="92"
        width="164"
        height="112"
        rx="14"
        fill="var(--paper-2)"
        stroke="var(--teal)"
        stroke-width="3"
      />
      <text :x="member.x" y="124" text-anchor="middle" class="svg-name">{{ member.name }}</text>
      <text :x="member.x" y="154" text-anchor="middle" class="svg-formula">{{ member.formula }}</text>
      <text :x="member.x" y="180" text-anchor="middle" class="svg-small">{{ member.note }}</text>

      <g v-if="index < positions.length - 1" aria-hidden="true">
        <line
          :x1="member.x + 88"
          y1="148"
          :x2="member.x + 146"
          y2="148"
          stroke="var(--amber)"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          :d="`M ${member.x + 138} 140 L ${member.x + 150} 148 L ${member.x + 138} 156`"
          fill="none"
          stroke="var(--amber)"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <text :x="member.x + 117" y="132" text-anchor="middle" class="svg-step">+ CH₂</text>
      </g>
    </g>

    <text v-if="bondLabel" x="360" y="246" text-anchor="middle" class="svg-small">
      {{ bondLabel }}
    </text>
    <text x="360" y="272" text-anchor="middle" class="svg-small">
      Same family, same pattern; each member differs by CH₂.
    </text>
  </svg>
</template>

<style scoped>
.svg-heading {
  font-family: system-ui, sans-serif;
  font-size: 20px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.svg-name {
  font-family: system-ui, sans-serif;
  font-size: 15px;
  font-weight: 700;
  fill: var(--ink);
}
.svg-formula {
  font-family: ui-monospace, monospace;
  font-size: 18px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.svg-small {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  fill: var(--ink-soft);
}
.svg-step {
  font-family: ui-monospace, monospace;
  font-size: 12px;
  font-weight: 700;
  fill: var(--amber-dark, #8a5a00);
}
</style>
