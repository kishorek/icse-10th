<script setup>
import { computed, ref } from 'vue'
import { functionalGroups } from '../../../data/chapter-12a/functionalGroups'

const selectedId = ref(functionalGroups[3].id)

const selected = computed(
  () => functionalGroups.find((group) => group.id === selectedId.value) ?? functionalGroups[0]
)
</script>

<template>
  <div id="functional-group-lab" class="lab lab-panel">
    <div class="lab__head">
      <div>
        <h3>Functional group explorer</h3>
        <p class="lab__note">
          Choose a molecule to see its family, functional group, formula pattern and naming ending.
        </p>
      </div>
    </div>

    <div class="lab-controls" role="group" aria-label="Choose a molecule">
      <button
        v-for="group in functionalGroups"
        :key="group.id"
        type="button"
        class="btn"
        :aria-pressed="selectedId === group.id"
        @click="selectedId = group.id"
      >
        {{ group.exampleName }} ({{ group.example }})
      </button>
    </div>

    <div class="lab-output" aria-live="polite">
      <p><strong>Family:</strong> {{ selected.name }}</p>
      <p>
        <strong>Functional group:</strong>
        <span class="formula">{{ selected.group }}</span>
      </p>
      <p><strong>General formula:</strong> {{ selected.general }}</p>
      <p>
        <strong>Prefix:</strong> {{ selected.prefix }} ·
        <strong>Suffix:</strong> {{ selected.suffix }}
      </p>
      <p>
        <strong>Example:</strong> {{ selected.exampleName }},
        <span class="formula">{{ selected.example }}</span>
      </p>
      <p>{{ selected.note }}</p>
    </div>
  </div>
</template>
