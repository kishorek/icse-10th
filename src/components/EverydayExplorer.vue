<script setup>
import { computed, ref } from 'vue'
import { everydayItems } from '../data/everydayItems'

const selectedId = ref('lpg')
const selected = computed(() => everydayItems.find((item) => item.id === selectedId.value))
</script>

<template>
  <div id="everyday-explorer" class="lab">
    <div class="lab__head">
      <div>
        <h3>Everyday organics explorer</h3>
        <p class="lab__note">Choose an object to see the organic chemistry behind it.</p>
      </div>
    </div>

    <div class="explorer-grid" role="group" aria-label="Everyday objects">
      <button
        v-for="item in everydayItems"
        :key="item.id"
        type="button"
        class="explorer-item"
        :aria-label="item.label"
        :aria-pressed="selectedId === item.id"
        @click="selectedId = item.id"
      >
        <span>{{ item.badge }}</span>
        <span>{{ item.label }}</span>
      </button>
    </div>

    <div class="explorer-detail" aria-live="polite">
      <p class="detail-label">Selected item</p>
      <h4>{{ selected.label }}</h4>
      <p><span class="detail-label">Class:</span> {{ selected.className }}</p>
      <p><span class="detail-label">Example formula:</span> <span class="formula">{{ selected.formula }}</span></p>
      <p><span class="detail-label">Use:</span> {{ selected.use }}</p>
      <p><span class="detail-label">Why it matters:</span> {{ selected.note }}</p>
    </div>
  </div>
</template>
