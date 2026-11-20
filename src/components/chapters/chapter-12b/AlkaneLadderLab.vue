<script setup>
import { computed, ref } from 'vue'
import { alkanes } from '../../../data/chapter-12b/alkanes'

const n = ref(1)
const member = computed(() => alkanes.find((item) => item.n === Number(n.value)) ?? null)
const minN = alkanes[0].n
const maxN = alkanes[alkanes.length - 1].n
</script>

<template>
  <div id="alkane-ladder" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>Alkane ladder</h3>
        <p class="lab__note">
          Choose a carbon number from 1 to 10 to see the formula, molar mass, state and chain
          isomers of that alkane.
        </p>
      </div>
    </div>

    <div class="range-row">
      <label for="alkane-n">Carbon number n</label>
      <input
        id="alkane-n"
        v-model.number="n"
        type="number"
        :min="minN"
        :max="maxN"
        step="1"
        inputmode="numeric"
      />
    </div>

    <div class="lab-output" aria-live="polite">
      <template v-if="member">
        <p><strong>Name:</strong> {{ member.name }}</p>
        <p>
          <strong>Formula:</strong>
          <span class="formula">{{ member.formula }}</span>
        </p>
        <p><strong>Molar mass:</strong> {{ member.molarMass }} u</p>
        <p><strong>State at room temperature:</strong> {{ member.state }}</p>
        <p><strong>Chain isomers:</strong> {{ member.isomers }}</p>
        <p>
          Boiling point increases as the chain gets longer. With more carbon atoms there are more
          electrons, so the intermolecular forces are stronger and more energy is needed to boil the
          alkane.
        </p>
      </template>
      <p v-else>
        Enter a carbon number from {{ minN }} to {{ maxN }} to see an alkane.
      </p>
    </div>
  </div>
</template>
