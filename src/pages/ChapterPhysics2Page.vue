<script setup>
import chapter from '../data/chapters/physics-2'
import physics1 from '../data/chapters/physics-1'
import chapterOne from '../data/chapters/chapter-1'
import ChapterProvider from '../components/ChapterProvider.vue'
import ChapterShell from '../components/ChapterShell.vue'
import ChapterHeroPanel from '../components/ChapterHeroPanel.vue'
import LessonRenderer from '../components/lessons/LessonRenderer.vue'
import ChapterMemoryWorkshop from '../components/chapters/ChapterMemoryWorkshop.vue'
import ChapterRevisionCentre from '../components/chapters/ChapterRevisionCentre.vue'
import Assessment from '../components/Assessment.vue'
import { lessonContent, memoryWorkshop, revision } from '../data/chapter-physics-2/content'
</script>

<template>
  <ChapterProvider :chapter="chapter">
    <ChapterShell :chapter="chapter" :previous="physics1" :next="chapterOne">
      <ChapterHeroPanel :hero="chapter.hero" />
      <LessonRenderer v-for="lesson in lessonContent" :key="lesson.id" :lesson="lesson" />
      <ChapterMemoryWorkshop :data="memoryWorkshop" />
      <ChapterRevisionCentre :data="revision" />
      <Assessment />
    </ChapterShell>
  </ChapterProvider>
</template>
