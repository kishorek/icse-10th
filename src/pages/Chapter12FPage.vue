<script setup>
import chapter from '../data/chapters/chapter-12f'
import chapter12e from '../data/chapters/chapter-12e'
import ChapterProvider from '../components/ChapterProvider.vue'
import ChapterShell from '../components/ChapterShell.vue'
import ChapterHeroPanel from '../components/ChapterHeroPanel.vue'
import LessonRenderer from '../components/lessons/LessonRenderer.vue'
import ChapterMemoryWorkshop from '../components/chapters/ChapterMemoryWorkshop.vue'
import ChapterRevisionCentre from '../components/chapters/ChapterRevisionCentre.vue'
import Assessment from '../components/Assessment.vue'
import { lessonContent, memoryWorkshop, revision } from '../data/chapter-12f/content'
</script>

<template>
  <ChapterProvider :chapter="chapter">
    <ChapterShell :chapter="chapter" :previous="chapter12e">
      <ChapterHeroPanel :hero="chapter.hero" />
      <LessonRenderer v-for="lesson in lessonContent" :key="lesson.id" :lesson="lesson" />
      <ChapterMemoryWorkshop :data="memoryWorkshop" />
      <ChapterRevisionCentre :data="revision" />
      <Assessment />
    </ChapterShell>
  </ChapterProvider>
</template>
