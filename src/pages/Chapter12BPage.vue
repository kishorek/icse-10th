<script setup>
import chapter from '../data/chapters/chapter-12b'
import chapter12a from '../data/chapters/chapter-12a'
import chapter12c from '../data/chapters/chapter-12c'
import ChapterProvider from '../components/ChapterProvider.vue'
import ChapterShell from '../components/ChapterShell.vue'
import ChapterHeroPanel from '../components/ChapterHeroPanel.vue'
import LessonOne from '../components/chapters/chapter-12b/LessonOne.vue'
import LessonTwo from '../components/chapters/chapter-12b/LessonTwo.vue'
import LessonThree from '../components/chapters/chapter-12b/LessonThree.vue'
import MemoryWorkshop from '../components/chapters/chapter-12b/MemoryWorkshop.vue'
import RevisionCentre from '../components/chapters/chapter-12b/RevisionCentre.vue'
import Assessment from '../components/Assessment.vue'
</script>

<template>
  <ChapterProvider :chapter="chapter">
    <ChapterShell :chapter="chapter" :previous="chapter12a" :next="chapter12c">
      <ChapterHeroPanel :hero="chapter.hero" />
      <LessonOne />
      <LessonTwo />
      <LessonThree />
      <MemoryWorkshop />
      <RevisionCentre />
      <Assessment />
    </ChapterShell>
  </ChapterProvider>
</template>
