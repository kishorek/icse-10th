<script setup>
import chapter from '../data/chapters/chapter-12c'
import chapter12b from '../data/chapters/chapter-12b'
import chapter12d from '../data/chapters/chapter-12d'
import ChapterProvider from '../components/ChapterProvider.vue'
import ChapterShell from '../components/ChapterShell.vue'
import ChapterHeroPanel from '../components/ChapterHeroPanel.vue'
import LessonRenderer from '../components/lessons/LessonRenderer.vue'
import ChapterMemoryWorkshop from '../components/chapters/ChapterMemoryWorkshop.vue'
import ChapterRevisionCentre from '../components/chapters/ChapterRevisionCentre.vue'
import Assessment from '../components/Assessment.vue'
import { lessonContent, memoryWorkshop, revision } from '../data/chapter-12c/content'
</script>

<template>
  <ChapterProvider :chapter="chapter">
    <ChapterShell :chapter="chapter" :previous="chapter12b" :next="chapter12d">
      <ChapterHeroPanel :hero="chapter.hero" />
      <LessonRenderer v-for="lesson in lessonContent" :key="lesson.id" :lesson="lesson" />
      <ChapterMemoryWorkshop :data="memoryWorkshop" />
      <ChapterRevisionCentre :data="revision" />
      <Assessment />
    </ChapterShell>
  </ChapterProvider>
</template>
