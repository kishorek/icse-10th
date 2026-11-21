<script setup>
import chapter from '../data/chapters/chapter-1'
import physics2 from '../data/chapters/physics-2'
import chapter12a from '../data/chapters/chapter-12a'
import ChapterProvider from '../components/ChapterProvider.vue'
import ChapterShell from '../components/ChapterShell.vue'
import ChapterHero from '../components/ChapterHero.vue'
import LessonOne from '../components/lessons/LessonOne.vue'
import LessonTwo from '../components/lessons/LessonTwo.vue'
import LessonThree from '../components/lessons/LessonThree.vue'
import LessonFour from '../components/lessons/LessonFour.vue'
import LessonFive from '../components/lessons/LessonFive.vue'
import MemoryWorkshop from '../components/MemoryWorkshop.vue'
import RevisionCentre from '../components/RevisionCentre.vue'
import Assessment from '../components/Assessment.vue'
</script>

<template>
  <ChapterProvider :chapter="chapter">
    <ChapterShell :chapter="chapter" :previous="physics2" :next="chapter12a">
      <ChapterHero />
      <LessonOne />
      <LessonTwo />
      <LessonThree />
      <LessonFour />
      <LessonFive />
      <MemoryWorkshop />
      <RevisionCentre />
      <Assessment />
    </ChapterShell>
  </ChapterProvider>
</template>
