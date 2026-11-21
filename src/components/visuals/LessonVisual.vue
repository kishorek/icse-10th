<script setup>
defineProps({
  id: { type: String, default: '' },
  title: { type: String, required: true },
  caption: { type: String, required: true },
  description: { type: String, required: true },
  notice: { type: Array, default: () => [] }
})
</script>

<template>
  <figure :id="id || undefined" class="lesson-visual">
    <div class="lesson-visual__canvas">
      <slot />
    </div>
    <p class="lesson-visual__scroll-hint">Scroll sideways to see the full diagram.</p>
    <figcaption class="lesson-visual__caption">
      <strong>{{ title }}</strong>
      <span>{{ caption }}</span>
    </figcaption>
    <div class="lesson-visual__notice">
      <h3>What to notice</h3>
      <ul>
        <li v-for="item in notice" :key="item">{{ item }}</li>
      </ul>
    </div>
    <details class="lesson-visual__details">
      <summary>Read the visual</summary>
      <p>{{ description }}</p>
    </details>
  </figure>
</template>
