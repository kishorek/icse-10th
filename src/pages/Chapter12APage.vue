<script setup>
import chapter from '../data/chapters/chapter-12a'
import ChapterProvider from '../components/ChapterProvider.vue'
import ChapterShell from '../components/ChapterShell.vue'
import ChapterHeroPanel from '../components/ChapterHeroPanel.vue'
import LessonOne from '../components/chapters/chapter-12a/LessonOne.vue'
import LessonTwo from '../components/chapters/chapter-12a/LessonTwo.vue'
import LessonThree from '../components/chapters/chapter-12a/LessonThree.vue'
import LessonFour from '../components/chapters/chapter-12a/LessonFour.vue'
import LessonFive from '../components/chapters/chapter-12a/LessonFive.vue'
import LessonSix from '../components/chapters/chapter-12a/LessonSix.vue'
import MemoryWorkshop from '../components/chapters/chapter-12a/MemoryWorkshop.vue'
import RevisionCentre from '../components/chapters/chapter-12a/RevisionCentre.vue'
</script>

<template>
  <ChapterProvider :chapter="chapter">
    <ChapterShell :chapter="chapter">
      <ChapterHeroPanel :hero="chapter.hero" />
      <LessonOne />
      <LessonTwo />
      <LessonThree />
      <LessonFour />
      <LessonFive />
      <LessonSix />
      <MemoryWorkshop />
      <RevisionCentre />
    </ChapterShell>
  </ChapterProvider>
</template>
