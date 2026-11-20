<script setup>
import { provideChapter } from '../composables/useChapter'

const props = defineProps({
  chapter: { type: Object, required: true }
})

provideChapter(props.chapter)
</script>

<template>
  <slot />
</template>
