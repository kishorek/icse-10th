<script setup>
import { computed, ref, watch } from 'vue'
import { homologousSeries } from '../../../data/chapter-12a/homologousSeries'

const familyId = ref(homologousSeries[0].id)
const n = ref(homologousSeries[0].members[0].n)

const family = computed(
  () => homologousSeries.find((item) => item.id === familyId.value) ?? homologousSeries[0]
)
const member = computed(
  () => family.value.members.find((item) => item.n === Number(n.value)) ?? null
)
const minN = computed(() => family.value.members[0].n)
const maxN = computed(() => family.value.members[family.value.members.length - 1].n)

watch(familyId, () => {
  n.value = family.value.members[0].n
})
</script>

<template>
  <div id="homologous-ladder" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>Homologous series ladder</h3>
        <p class="lab__note">
          Choose a family and a carbon number to climb the series one CH₂ step at a time.
        </p>
      </div>
    </div>

    <div class="lab-controls" role="group" aria-label="Choose a homologous series">
      <button
        v-for="item in homologousSeries"
        :key="item.id"
        type="button"
        class="btn"
        :aria-pressed="familyId === item.id"
        @click="familyId = item.id"
      >
        {{ item.name }}
      </button>
    </div>

    <div class="range-row">
      <label for="homologous-n">Carbon number n</label>
      <input
        id="homologous-n"
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
        <p><strong>Series:</strong> {{ family.name }}</p>
        <p><strong>General formula:</strong> {{ family.general }}</p>
        <p><strong>Member:</strong> {{ member.name }}</p>
        <p>
          <strong>Formula:</strong>
          <span class="formula">{{ member.formula }}</span>
        </p>
        <p><strong>Molar mass:</strong> {{ member.molarMass }} u</p>
        <p>
          <strong>CH₂ step:</strong> Successive members differ by CH₂, so the molar mass rises by
          12 + 2 = 14 u each step.
        </p>
      </template>
      <p v-else>
        Enter a carbon number from {{ minN }} to {{ maxN }} for the {{ family.name.toLowerCase() }}
        series.
      </p>
    </div>
  </div>
</template>
