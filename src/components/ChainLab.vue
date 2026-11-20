<script setup>
import { computed, ref, watch } from 'vue'

const count = ref(4)
const shape = ref('straight')

const shapes = [
  { value: 'straight', label: 'Straight chain' },
  { value: 'branched', label: 'Branched chain' },
  { value: 'ring', label: 'Ring' }
]

const subscripts = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉']

function sub(value) {
  return String(value)
    .split('')
    .map((digit) => subscripts[Number(digit)])
    .join('')
}

function alkaneFormula(n) {
  if (n === 1) return 'CH₄'
  if (n === 2) return 'C₂H₆'
  return `C${sub(n)}H${sub(2 * n + 2)}`
}

function ringFormula(n) {
  return `C${sub(n)}H${sub(2 * n)}`
}

const branchedDisabled = computed(() => count.value < 4)
const ringDisabled = computed(() => count.value < 3)

watch(count, () => {
  if (shape.value === 'branched' && branchedDisabled.value) {
    shape.value = 'straight'
  }
  if (shape.value === 'ring' && ringDisabled.value) {
    shape.value = 'straight'
  }
})

const skeleton = computed(() => {
  const n = count.value

  if (shape.value === 'ring') {
    const points = Array.from({ length: n }, (_, index) => {
      const angle = (-90 + (360 / n) * index) * (Math.PI / 180)
      return {
        x: 180 + 68 * Math.cos(angle),
        y: 110 + 68 * Math.sin(angle)
      }
    })
    return { main: points, branch: null, close: true }
  }

  if (shape.value === 'branched') {
    const mainCount = n - 1
    const points = Array.from({ length: mainCount }, (_, index) => ({
      x: 60 + (240 / (mainCount - 1)) * index,
      y: 132
    }))
    const anchor = points[1]
    return {
      main: points,
      branch: { x: anchor.x, y: 72 },
      close: false
    }
  }

  const points = Array.from({ length: n }, (_, index) => {
    if (n === 1) return { x: 180, y: 110 }
    return {
      x: 60 + (240 / (n - 1)) * index,
      y: index % 2 === 0 ? 92 : 132
    }
  })
  return { main: points, branch: null, close: false }
})

const formula = computed(() =>
  shape.value === 'ring' ? ringFormula(count.value) : alkaneFormula(count.value)
)

const summary = computed(() => {
  if (shape.value === 'ring') {
    return `${count.value} carbon atoms in a closed ring. A saturated ring with ${count.value} carbon atoms has the formula ${formula.value}. Hydrogen atoms are omitted from the skeleton; each carbon still forms four bonds.`
  }

  if (shape.value === 'branched') {
    return `${count.value} carbon atoms with one branch. This has the same molecular formula (${formula.value}) as the straight chain but a different arrangement — an isomer.`
  }

  const carbonWord = count.value === 1 ? 'carbon atom' : 'carbon atoms'
  return `${count.value} ${carbonWord} in a straight chain. The saturated straight-chain alkane formula is ${formula.value}. Hydrogen atoms are omitted from the skeleton; each carbon still forms four bonds.`
})

function reset() {
  count.value = 4
  shape.value = 'straight'
}
</script>

<template>
  <div id="chain-lab" class="lab">
    <div class="lab__head">
      <div>
        <h3>Catenation explorer</h3>
        <p class="lab__note">
          Change the number of carbon atoms and the shape of the carbon skeleton.
        </p>
      </div>
      <button type="button" class="btn btn-small" @click="reset">Reset</button>
    </div>

    <div class="lab-controls" role="group" aria-label="Choose a carbon skeleton shape">
      <button
        v-for="item in shapes"
        :key="item.value"
        type="button"
        class="btn"
        :aria-pressed="shape === item.value"
        :disabled="item.value === 'branched' ? branchedDisabled : item.value === 'ring' ? ringDisabled : false"
        @click="shape = item.value"
      >
        {{ item.label }}
      </button>
    </div>

    <div class="range-row">
      <label for="chain-count">Carbon atoms</label>
      <input id="chain-count" v-model.number="count" type="range" min="1" max="6" step="1" />
      <output class="range-value" for="chain-count">{{ count }}</output>
    </div>

    <svg class="lab-svg" viewBox="0 0 360 220" role="img" :aria-label="summary">
      <title>Carbon skeleton</title>
      <desc>{{ summary }}</desc>
      <line
        v-for="(point, index) in skeleton.main.slice(1)"
        :key="`line-${index}`"
        class="bond"
        :x1="skeleton.main[index].x"
        :y1="skeleton.main[index].y"
        :x2="point.x"
        :y2="point.y"
      />
      <line
        v-if="skeleton.close"
        class="bond"
        :x1="skeleton.main[skeleton.main.length - 1].x"
        :y1="skeleton.main[skeleton.main.length - 1].y"
        :x2="skeleton.main[0].x"
        :y2="skeleton.main[0].y"
      />
      <line
        v-if="skeleton.branch"
        class="bond"
        :x1="skeleton.main[1].x"
        :y1="skeleton.main[1].y"
        :x2="skeleton.branch.x"
        :y2="skeleton.branch.y"
      />
      <g v-for="(point, index) in skeleton.main" :key="`atom-${index}`">
        <circle class="atom-carbon" :cx="point.x" :cy="point.y" r="15" />
        <text class="chain-label" :x="point.x" :y="point.y + 5" text-anchor="middle">C</text>
      </g>
      <g v-if="skeleton.branch">
        <circle class="atom-carbon" :cx="skeleton.branch.x" :cy="skeleton.branch.y" r="15" />
        <text class="chain-label" :x="skeleton.branch.x" :y="skeleton.branch.y + 5" text-anchor="middle">
          C
        </text>
      </g>
    </svg>

    <div class="lab-readout">
      <div>
        <strong>Carbon atoms</strong>
        <span>{{ count }}</span>
      </div>
      <div>
        <strong>Skeleton formula</strong>
        <span>{{ formula }}</span>
      </div>
    </div>

    <p class="lab-summary" aria-live="polite">{{ summary }}</p>
    <p v-if="branchedDisabled || ringDisabled" class="lab__note">
      A ring needs at least 3 carbon atoms. A branched skeleton needs at least 4 in this model.
    </p>
  </div>
</template>

<style scoped>
.chain-label {
  fill: #fffdf7;
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 700;
}
</style>
