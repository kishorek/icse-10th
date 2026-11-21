<script setup>
import { chapters } from '../data/chapters'
import { readChapterSummary } from '../lib/progressSummary'
import ChapterCard from '../components/ChapterCard.vue'

const summaries = Object.fromEntries(
  chapters.map((chapter) => [chapter.id, readChapterSummary(chapter)])
)
</script>

<template>
  <a class="skip-link" href="#chapters">Skip to chapters</a>
  <main class="home">
    <header class="home-hero">
      <p class="eyebrow">ICSE Class 10 · Chemistry</p>
      <h1>Organic Chemistry</h1>
      <p>Seven chapters. Start with the introduction, then take 12A–12F in order.</p>
    </header>

    <section id="chapters" class="chapter-grid" aria-label="Chapters">
      <ChapterCard
        v-for="chapter in chapters"
        :key="chapter.id"
        :chapter="chapter"
        :summary="summaries[chapter.id]"
      />
    </section>

    <p class="score-note">
      Progress is stored in this browser only. It is not synchronised across devices.
    </p>
  </main>
</template>
