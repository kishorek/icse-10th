<script setup>
defineProps({
  sources: { type: Object, required: true }
})
</script>

<template>
  <section id="sources" class="sources" aria-labelledby="sources-title">
    <h2 id="sources-title">{{ sources.title }}</h2>
    <p v-for="paragraph in sources.paragraphs" :key="paragraph">{{ paragraph }}</p>
    <ul v-if="sources.links?.length">
      <li v-for="link in sources.links" :key="link.href">
        <a :href="link.href" target="_blank" rel="noopener">{{ link.label }}</a>
      </li>
    </ul>
  </section>
</template>
