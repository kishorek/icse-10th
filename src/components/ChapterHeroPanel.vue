<script setup>
defineProps({
  hero: { type: Object, required: true }
})
</script>

<template>
  <section id="orientation" class="chapter-hero" aria-labelledby="chapter-title">
    <p class="eyebrow">{{ hero.eyebrow }}</p>
    <h1 id="chapter-title">{{ hero.title }}</h1>
    <p class="subtitle">{{ hero.subtitle }}</p>

    <div class="essential-question">
      <p>{{ hero.question }}</p>
    </div>

    <div class="meta-chips" aria-label="Chapter details">
      <span v-for="chip in hero.chips" :key="chip" class="chip">{{ chip }}</span>
    </div>

    <div class="hero-grid">
      <div>
        <h2>What you will learn</h2>
        <ul class="plain-list">
          <li v-for="outcome in hero.outcomes" :key="outcome">{{ outcome }}</li>
        </ul>
      </div>
      <div>
        <h2>Before you start</h2>
        <ul class="plain-list">
          <li v-for="prerequisite in hero.prerequisites" :key="prerequisite">{{ prerequisite }}</li>
        </ul>
      </div>
    </div>

    <figure class="concept-map" aria-labelledby="concept-map-caption">
      <figcaption id="concept-map-caption" class="concept-map__caption">
        Chapter map
      </figcaption>
      <div class="concept-map__grid">
        <div class="concept-map__center">Organic compounds</div>
        <a
          v-for="node in hero.conceptMap"
          :key="node.href"
          class="concept-node"
          :href="node.href"
        >{{ node.label }}</a>
      </div>
    </figure>

    <aside class="exam-tip">
      <span class="tag">Scope note</span>
      <p>{{ hero.scopeNote }}</p>
    </aside>
  </section>
</template>
