<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { animate } from 'animejs'

const devices = {
  torch: {
    label: 'Torch',
    chain: ['Chemical (battery)', 'Electrical', 'Light + heat']
  },
  motor: {
    label: 'Electric motor',
    chain: ['Electrical', 'Mechanical']
  },
  solar: {
    label: 'Solar cell',
    chain: ['Light', 'Electrical']
  },
  speaker: {
    label: 'Loudspeaker',
    chain: ['Electrical', 'Sound']
  },
  microphone: {
    label: 'Microphone',
    chain: ['Sound', 'Electrical']
  },
  kettle: {
    label: 'Electric kettle',
    chain: ['Electrical', 'Heat']
  }
}

const device = ref('torch')
const progress = reactive({ value: 0 })
const status = ref('Ready')
let run = null
let reduced = false

const chain = computed(() => devices[device.value].chain)
const tokenX = computed(() => 100 + progress.value * 500)
const activeStage = computed(() =>
  Math.min(chain.value.length - 1, Math.floor(progress.value * chain.value.length))
)
const summary = computed(
  () => `${devices[device.value].label}: ${chain.value.join(' → ')}.`
)

function play() {
  run?.pause()
  run?.revert?.()
  if (reduced) {
    progress.value = 1
    status.value = 'Final state shown because reduced motion is on'
    return
  }
  if (progress.value >= 0.99) progress.value = 0
  run = animate(progress, { value: 1, duration: 1500, easing: 'easeInOutQuad' })
  status.value = 'Playing'
}

function pause() {
  run?.pause()
  status.value = 'Paused'
}

function reset() {
  run?.pause()
  run?.revert?.()
  progress.value = 0
  device.value = 'torch'
  status.value = 'Reset'
}

if (typeof window !== 'undefined') {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    progress.value = 1
    status.value = 'Final state shown because reduced motion is on'
  }
}

onBeforeUnmount(() => {
  run?.pause()
  run?.revert?.()
  run = null
})
</script>

<template>
  <div class="chain-lab">
    <div class="lab-controls" role="group" aria-label="Choose a device">
      <button
        v-for="(item, key) in devices"
        :key="key"
        type="button"
        class="btn btn-small"
        :aria-pressed="device === key"
        @click="device = key; progress.value = 0"
      >
        {{ item.label }}
      </button>
    </div>

    <svg viewBox="0 0 720 250" role="img" aria-labelledby="cc-title cc-desc">
      <title id="cc-title">Energy conversion chain</title>
      <desc id="cc-desc">{{ summary }}</desc>
      <line x1="100" y1="124" x2="620" y2="124" stroke="var(--line)" stroke-width="3" />
      <g v-for="(stage, index) in chain" :key="stage">
        <circle
          :cx="100 + (index * 520) / Math.max(1, chain.length - 1)"
          cy="124"
          r="24"
          :fill="index <= activeStage ? 'var(--teal-dark)' : '#fbf8f1'"
          :stroke="index <= activeStage ? 'var(--teal-dark)' : 'var(--line)'"
          stroke-width="3"
        />
        <text
          :x="100 + (index * 520) / Math.max(1, chain.length - 1)"
          y="176"
          text-anchor="middle"
          class="stage"
          :class="{ active: index <= activeStage }"
        >
          {{ stage }}
        </text>
      </g>
      <circle :cx="tokenX" cy="124" r="11" fill="var(--amber)" stroke="var(--amber-deep)" stroke-width="3" />
      <text :x="tokenX" y="96" text-anchor="middle" class="token-label">energy</text>
    </svg>

    <div class="lab-controls">
      <button type="button" class="btn btn-small" @click="play">Play</button>
      <button type="button" class="btn btn-small" @click="pause">Pause</button>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <p class="sim-summary" aria-live="polite">
      <strong>Predict the output form before you play.</strong> {{ summary }}
      Energy is transferred, not used up.
    </p>
    <p class="sr-only" aria-live="polite">{{ status }}</p>
  </div>
</template>

<style scoped>
.chain-lab { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0.6rem; }
.chain-lab svg { width: 100%; height: auto; background: #fbf8f1; border: 1px solid #e4ddcf; border-radius: 6px; }
.stage { font-family: var(--sans); font-size: 12px; fill: var(--ink-soft); }
.stage.active { fill: var(--teal-dark); font-weight: 700; }
.token-label { font-family: var(--sans); font-size: 11px; fill: var(--amber-deep); }
.sim-summary { margin: 0; padding: 0.6rem 0.75rem; border-left: 3px solid var(--teal); background: var(--paper-2); font-size: 0.93rem; }
</style>
