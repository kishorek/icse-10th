<script setup>
import chapter from '../data/chapters/chapter-12b'
import ChapterProvider from '../components/ChapterProvider.vue'
import ChapterShell from '../components/ChapterShell.vue'
import ChapterHeroPanel from '../components/ChapterHeroPanel.vue'
import LessonOne from '../components/chapters/chapter-12b/LessonOne.vue'
import LessonTwo from '../components/chapters/chapter-12b/LessonTwo.vue'
import LessonThree from '../components/chapters/chapter-12b/LessonThree.vue'
</script>

<template>
  <ChapterProvider :chapter="chapter">
    <ChapterShell :chapter="chapter">
      <ChapterHeroPanel :hero="chapter.hero" />
      <LessonOne />
      <LessonTwo />
      <LessonThree />
    </ChapterShell>
  </ChapterProvider>
</template>
