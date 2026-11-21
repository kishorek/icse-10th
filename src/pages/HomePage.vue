<script setup>
import { chapters } from '../data/chapters'
import { readChapterSummary } from '../lib/progressSummary'
import ChapterCard from '../components/ChapterCard.vue'

const summaries = Object.fromEntries(
  chapters.map((chapter) => [chapter.id, readChapterSummary(chapter)])
)

const physicsChapters = chapters.filter((chapter) => chapter.subject === 'Physics')
const chemistryChapters = chapters.filter((chapter) => chapter.subject !== 'Physics')
</script>

<template>
  <a class="skip-link" href="#chapters">Skip to chapters</a>
  <main class="home">
    <header class="home-hero">
      <p class="eyebrow">ICSE Class 10 · Science</p>
      <h1>Interactive Science</h1>
      <p>Physics and organic chemistry, chapter by chapter. Open a chapter, work through the lessons and labs, then test yourself.</p>
    </header>

    <section id="chapters" aria-label="Chapters">
      <div class="chapter-group">
        <p class="subject-heading">Physics</p>
        <p class="group-note">Force and motion, starting with turning effects and circular motion.</p>
        <div class="chapter-grid">
          <ChapterCard
            v-for="chapter in physicsChapters"
            :key="chapter.id"
            :chapter="chapter"
            :summary="summaries[chapter.id]"
          />
        </div>
      </div>

      <div class="chapter-group">
        <p class="subject-heading">Chemistry</p>
        <p class="group-note">Seven organic chemistry chapters. Start with the introduction, then take 12A–12F in order.</p>
        <div class="chapter-grid">
          <ChapterCard
            v-for="chapter in chemistryChapters"
            :key="chapter.id"
            :chapter="chapter"
            :summary="summaries[chapter.id]"
          />
        </div>
      </div>
    </section>

    <p class="score-note">
      Progress is stored in this browser only. It is not synchronised across devices.
    </p>
  </main>
</template>
