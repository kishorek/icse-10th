<script setup>
import { computed } from 'vue'

const props = defineProps({
  kind: { type: String, required: true }
})

const labels = computed(() => {
  const map = {
    ethene: {
      title: 'Ethene, C₂H₄',
      desc: 'Two carbon atoms joined by a double bond, each carbon joined to two hydrogen atoms. The molecule is planar with bond angles of about 120 degrees.'
    },
    ethyne: {
      title: 'Ethyne, C₂H₂',
      desc: 'Two carbon atoms joined by a triple bond, each carbon joined to one hydrogen atom. The molecule is linear.'
    },
    ethanol: {
      title: 'Ethanol, C₂H₅OH',
      desc: 'A two-carbon chain with one hydroxyl group on the terminal carbon.'
    },
    acetic: {
      title: 'Acetic acid, CH₃COOH',
      desc: 'A methyl group joined to a carboxyl group. The carboxyl carbon is double-bonded to oxygen and single-bonded to hydroxyl.'
    }
  }
  return map[props.kind] || map.ethene
})
</script>

<template>
  <svg viewBox="0 0 720 340" role="img" :aria-label="labels.title">
    <title>{{ labels.title }}</title>
    <desc>{{ labels.desc }}</desc>

    <template v-if="kind === 'ethene'">
      <text x="360" y="34" text-anchor="middle" class="svg-heading">Ethene: planar around the C=C bond</text>
      <line x1="300" y1="170" x2="420" y2="170" stroke="var(--teal)" stroke-width="4" />
      <line x1="300" y1="182" x2="420" y2="182" stroke="var(--teal)" stroke-width="4" />
      <circle cx="300" cy="176" r="18" fill="var(--teal-light)" stroke="var(--teal)" stroke-width="3" />
      <circle cx="420" cy="176" r="18" fill="var(--teal-light)" stroke="var(--teal)" stroke-width="3" />
      <text x="300" y="182" text-anchor="middle" class="atom">C</text>
      <text x="420" y="182" text-anchor="middle" class="atom">C</text>

      <line x1="282" y1="168" x2="228" y2="132" stroke="var(--ink-soft)" stroke-width="3" />
      <line x1="282" y1="184" x2="228" y2="220" stroke="var(--ink-soft)" stroke-width="3" />
      <line x1="438" y1="168" x2="492" y2="132" stroke="var(--ink-soft)" stroke-width="3" />
      <line x1="438" y1="184" x2="492" y2="220" stroke="var(--ink-soft)" stroke-width="3" />
      <circle cx="218" cy="124" r="14" fill="var(--paper-2)" stroke="var(--ink-soft)" stroke-width="2" />
      <circle cx="218" cy="228" r="14" fill="var(--paper-2)" stroke="var(--ink-soft)" stroke-width="2" />
      <circle cx="502" cy="124" r="14" fill="var(--paper-2)" stroke="var(--ink-soft)" stroke-width="2" />
      <circle cx="502" cy="228" r="14" fill="var(--paper-2)" stroke="var(--ink-soft)" stroke-width="2" />
      <text x="218" y="130" text-anchor="middle" class="atom-small">H</text>
      <text x="218" y="234" text-anchor="middle" class="atom-small">H</text>
      <text x="502" y="130" text-anchor="middle" class="atom-small">H</text>
      <text x="502" y="234" text-anchor="middle" class="atom-small">H</text>

      <path d="M 300 176 A 48 48 0 0 0 348 128" fill="none" stroke="var(--amber)" stroke-width="2" stroke-dasharray="5 5" />
      <text x="352" y="118" text-anchor="middle" class="svg-small">about 120°</text>
      <text x="360" y="290" text-anchor="middle" class="svg-small">
        Four C–H single bonds and one C=C double bond; all atoms lie in one plane.
      </text>
    </template>

    <template v-else-if="kind === 'ethyne'">
      <text x="360" y="34" text-anchor="middle" class="svg-heading">Ethyne: linear around the C≡C bond</text>
      <line x1="230" y1="176" x2="490" y2="176" stroke="var(--ink-soft)" stroke-width="3" />
      <line x1="300" y1="162" x2="420" y2="162" stroke="var(--teal)" stroke-width="4" />
      <line x1="300" y1="176" x2="420" y2="176" stroke="var(--teal)" stroke-width="4" />
      <line x1="300" y1="190" x2="420" y2="190" stroke="var(--teal)" stroke-width="4" />
      <circle cx="300" cy="176" r="18" fill="var(--teal-light)" stroke="var(--teal)" stroke-width="3" />
      <circle cx="420" cy="176" r="18" fill="var(--teal-light)" stroke="var(--teal)" stroke-width="3" />
      <text x="300" y="182" text-anchor="middle" class="atom">C</text>
      <text x="420" y="182" text-anchor="middle" class="atom">C</text>
      <circle cx="210" cy="176" r="14" fill="var(--paper-2)" stroke="var(--ink-soft)" stroke-width="2" />
      <circle cx="510" cy="176" r="14" fill="var(--paper-2)" stroke="var(--ink-soft)" stroke-width="2" />
      <text x="210" y="182" text-anchor="middle" class="atom-small">H</text>
      <text x="510" y="182" text-anchor="middle" class="atom-small">H</text>
      <line x1="270" y1="110" x2="450" y2="110" stroke="var(--amber)" stroke-width="2" stroke-dasharray="5 5" />
      <text x="360" y="96" text-anchor="middle" class="svg-small">straight line through the two carbons</text>
      <text x="360" y="270" text-anchor="middle" class="svg-small">
        Two C–H single bonds and one C≡C triple bond; shape linear.
      </text>
    </template>

    <template v-else-if="kind === 'ethanol'">
      <text x="360" y="34" text-anchor="middle" class="svg-heading">Ethanol: a two-carbon chain with –OH</text>
      <g transform="translate(210 150)">
        <text x="0" y="0" class="atom">C</text>
        <line x1="18" y1="-6" x2="88" y2="-6" stroke="var(--teal)" stroke-width="3" />
        <text x="112" y="0" class="atom">C</text>
        <line x1="132" y1="-6" x2="196" y2="-6" stroke="var(--teal)" stroke-width="3" />
        <text x="222" y="0" class="atom">O</text>
        <line x1="242" y1="-6" x2="274" y2="-6" stroke="var(--teal)" stroke-width="3" />
        <text x="296" y="0" class="atom-small">H</text>
        <text x="0" y="30" text-anchor="middle" class="svg-small">H₃C</text>
        <text x="112" y="30" text-anchor="middle" class="svg-small">CH₂</text>
        <text x="222" y="30" text-anchor="middle" class="svg-small">OH</text>
      </g>
      <text x="360" y="252" text-anchor="middle" class="svg-small">
        The –OH group is attached to a carbon atom, not free in solution.
      </text>
    </template>

    <template v-else>
      <text x="360" y="34" text-anchor="middle" class="svg-heading">Acetic acid: the –COOH group</text>
      <g transform="translate(190 150)">
        <text x="0" y="0" class="atom">C</text>
        <line x1="18" y1="-6" x2="88" y2="-6" stroke="var(--teal)" stroke-width="3" />
        <text x="112" y="0" class="atom">C</text>
        <line x1="132" y1="-18" x2="188" y2="-48" stroke="var(--teal)" stroke-width="3" />
        <line x1="136" y1="-12" x2="192" y2="-42" stroke="var(--teal)" stroke-width="3" />
        <text x="204" y="-54" class="atom">O</text>
        <line x1="132" y1="6" x2="190" y2="36" stroke="var(--teal)" stroke-width="3" />
        <text x="206" y="42" class="atom">O</text>
        <line x1="226" y1="36" x2="258" y2="36" stroke="var(--teal)" stroke-width="3" />
        <text x="280" y="42" class="atom-small">H</text>
        <text x="0" y="30" text-anchor="middle" class="svg-small">H₃C</text>
        <text x="112" y="30" text-anchor="middle" class="svg-small">C</text>
        <text x="214" y="-62" text-anchor="middle" class="svg-small">double bond</text>
        <text x="244" y="62" text-anchor="middle" class="svg-small">hydroxyl</text>
      </g>
      <text x="360" y="280" text-anchor="middle" class="svg-small">
        The carboxyl carbon is bonded to one methyl group, one =O and one –OH.
      </text>
    </template>
  </svg>
</template>

<style scoped>
.svg-heading {
  font-family: system-ui, sans-serif;
  font-size: 19px;
  font-weight: 700;
  fill: var(--teal-dark);
}
.svg-small {
  font-family: system-ui, sans-serif;
  font-size: 12px;
  fill: var(--ink-soft);
}
.atom {
  font-family: system-ui, sans-serif;
  font-size: 22px;
  font-weight: 700;
  fill: var(--ink);
}
.atom-small {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  fill: var(--ink-soft);
}
</style>
