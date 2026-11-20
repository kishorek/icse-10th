<script setup>
import { computed, ref } from 'vue'

const mode = ref('methane')

const modes = [
  { value: 'methane', label: 'Methane CH₄' },
  { value: 'ethene', label: 'Ethene C₂H₄' },
  { value: 'ethyne', label: 'Ethyne C₂H₂' }
]

const data = computed(() => {
  if (mode.value === 'ethene') {
    return {
      title: 'Ethene molecule',
      formula: 'C₂H₄',
      bond: 'C=C double bond — two shared pairs',
      summary:
        'Two carbon atoms share two pairs of electrons. Each carbon also forms two single bonds to hydrogen. Ethene is unsaturated.'
    }
  }

  if (mode.value === 'ethyne') {
    return {
      title: 'Ethyne molecule',
      formula: 'C₂H₂',
      bond: 'C≡C triple bond — three shared pairs',
      summary:
        'Two carbon atoms share three pairs of electrons. Each carbon also forms one single bond to hydrogen. Ethyne is unsaturated.'
    }
  }

  return {
    title: 'Methane molecule',
    formula: 'CH₄',
    bond: 'Four C–H single bonds',
    summary:
      'One carbon atom shares four pairs of electrons with four hydrogen atoms. All four bonds are single bonds, and the molecule is tetrahedral.'
  }
})
</script>

<template>
  <div id="bond-lab" class="lab">
    <div class="lab__head">
      <div>
        <h3>Carbon bond builder</h3>
        <p class="lab__note">Choose a molecule and compare single, double and triple bonds.</p>
      </div>
    </div>

    <div class="lab-controls" role="group" aria-label="Choose a molecule">
      <button
        v-for="item in modes"
        :key="item.value"
        type="button"
        class="btn"
        :aria-pressed="mode === item.value"
        @click="mode = item.value"
      >
        {{ item.label }}
      </button>
    </div>

    <svg class="lab-svg" viewBox="0 0 360 220" role="img" :aria-label="data.summary">
      <title>{{ data.title }}</title>
      <desc>{{ data.summary }}</desc>

      <g v-if="mode === 'methane'">
        <line class="bond" x1="180" y1="110" x2="180" y2="50" />
        <line class="bond" x1="180" y1="110" x2="240" y2="110" />
        <line class="bond" x1="180" y1="110" x2="180" y2="170" />
        <line class="bond" x1="180" y1="110" x2="120" y2="110" />
        <circle class="atom-hydrogen" cx="180" cy="35" r="14" />
        <circle class="atom-hydrogen" cx="255" cy="110" r="14" />
        <circle class="atom-hydrogen" cx="180" cy="185" r="14" />
        <circle class="atom-hydrogen" cx="105" cy="110" r="14" />
        <circle class="atom-carbon" cx="180" cy="110" r="23" />
        <text class="atom-label" x="180" y="116" text-anchor="middle">C</text>
        <text class="atom-label-h" x="180" y="40" text-anchor="middle">H</text>
        <text class="atom-label-h" x="255" y="115" text-anchor="middle">H</text>
        <text class="atom-label-h" x="180" y="190" text-anchor="middle">H</text>
        <text class="atom-label-h" x="105" y="115" text-anchor="middle">H</text>
      </g>

      <g v-else-if="mode === 'ethene'">
        <line class="bond" x1="130" y1="103" x2="230" y2="103" />
        <line class="bond" x1="130" y1="117" x2="230" y2="117" />
        <line class="bond" x1="130" y1="110" x2="130" y2="61" />
        <line class="bond" x1="130" y1="110" x2="130" y2="159" />
        <line class="bond" x1="230" y1="110" x2="230" y2="61" />
        <line class="bond" x1="230" y1="110" x2="230" y2="159" />
        <circle class="atom-hydrogen" cx="130" cy="45" r="14" />
        <circle class="atom-hydrogen" cx="130" cy="175" r="14" />
        <circle class="atom-hydrogen" cx="230" cy="45" r="14" />
        <circle class="atom-hydrogen" cx="230" cy="175" r="14" />
        <circle class="atom-carbon" cx="130" cy="110" r="22" />
        <circle class="atom-carbon" cx="230" cy="110" r="22" />
        <text class="atom-label" x="130" y="116" text-anchor="middle">C</text>
        <text class="atom-label" x="230" y="116" text-anchor="middle">C</text>
        <text class="atom-label-h" x="130" y="50" text-anchor="middle">H</text>
        <text class="atom-label-h" x="130" y="180" text-anchor="middle">H</text>
        <text class="atom-label-h" x="230" y="50" text-anchor="middle">H</text>
        <text class="atom-label-h" x="230" y="180" text-anchor="middle">H</text>
      </g>

      <g v-else>
        <line class="bond" x1="130" y1="100" x2="230" y2="100" />
        <line class="bond" x1="130" y1="110" x2="230" y2="110" />
        <line class="bond" x1="130" y1="120" x2="230" y2="120" />
        <line class="bond" x1="130" y1="110" x2="80" y2="110" />
        <line class="bond" x1="230" y1="110" x2="280" y2="110" />
        <circle class="atom-hydrogen" cx="65" cy="110" r="14" />
        <circle class="atom-hydrogen" cx="295" cy="110" r="14" />
        <circle class="atom-carbon" cx="130" cy="110" r="22" />
        <circle class="atom-carbon" cx="230" cy="110" r="22" />
        <text class="atom-label" x="130" y="116" text-anchor="middle">C</text>
        <text class="atom-label" x="230" y="116" text-anchor="middle">C</text>
        <text class="atom-label-h" x="65" y="115" text-anchor="middle">H</text>
        <text class="atom-label-h" x="295" y="115" text-anchor="middle">H</text>
      </g>
    </svg>

    <div class="lab-readout">
      <div>
        <strong>Molecular formula</strong>
        <span>{{ data.formula }}</span>
      </div>
      <div>
        <strong>Key bonding</strong>
        <span>{{ data.bond }}</span>
      </div>
    </div>

    <p class="lab-summary">{{ data.summary }}</p>
    <p v-if="mode === 'methane'" class="lab__note">
      The diagram is a simplified 2D view. In methane, the four bonds are arranged tetrahedrally in
      three dimensions.
    </p>
  </div>
</template>

<style scoped>
.atom-label {
  fill: #fffdf7;
  font-family: var(--sans);
  font-size: 17px;
  font-weight: 700;
}

.atom-label-h {
  fill: var(--ink);
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 650;
}
</style>
