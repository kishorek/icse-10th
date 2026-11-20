<script setup>
import { computed, ref } from 'vue'
import { combustionModes, ethaneCombustion } from '../../../data/chapter-12b/reactions'

const modeId = ref(combustionModes[0].id)
const mode = computed(() => combustionModes.find((item) => item.id === modeId.value) ?? combustionModes[0])
</script>

<template>
  <div id="combustion" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>Combustion comparison</h3>
        <p class="lab__note">
          Change the oxygen supply to see the balanced equation, products and observation for
          methane.
        </p>
      </div>
    </div>

    <div class="range-row">
      <label for="combustion-mode">Oxygen supply</label>
      <select id="combustion-mode" v-model="modeId" class="q-select">
        <option v-for="item in combustionModes" :key="item.id" :value="item.id">
          {{ item.label }}
        </option>
      </select>
    </div>

    <div class="lab-output" aria-live="polite">
      <p>
        <strong>Equation:</strong>
        <span class="formula">{{ mode.equation }}</span>
      </p>
      <p><strong>Products:</strong> {{ mode.products }}</p>
      <p><strong>Observation:</strong> {{ mode.observation }}</p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Ethane follows the same pattern</caption>
          <thead>
            <tr>
              <th scope="col">Air supply</th>
              <th scope="col">Equation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in ethaneCombustion" :key="item.label">
              <th scope="row">{{ item.label }}</th>
              <td><span class="formula">{{ item.equation }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
