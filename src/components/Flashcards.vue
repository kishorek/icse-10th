<script setup>
import { computed, ref } from 'vue'
import { flashcards } from '../data/flashcards'

const deck = ref([...flashcards])
const index = ref(0)
const flipped = ref(false)

const card = computed(() => deck.value[index.value])

function flip() {
  flipped.value = !flipped.value
}

function next() {
  index.value = (index.value + 1) % deck.value.length
  flipped.value = false
}

function previous() {
  index.value = (index.value - 1 + deck.value.length) % deck.value.length
  flipped.value = false
}

function shuffle() {
  const copy = [...deck.value]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  deck.value = copy
  index.value = 0
  flipped.value = false
}
</script>

<template>
  <div id="flashcards" class="lab">
    <div class="lab__head">
      <div>
        <h3>Active-recall flashcards</h3>
        <p class="lab__note">Answer in your head before you flip the card.</p>
      </div>
    </div>

    <button type="button" class="flashcard" @click="flip">
      <span class="flashcard__label">{{ flipped ? 'Answer' : 'Question' }}</span>
      <span class="flashcard__text">{{ flipped ? card.answer : card.question }}</span>
      <span class="flashcard__hint">
        {{ flipped ? 'Click to show the question' : 'Click to reveal the answer' }}
      </span>
    </button>

    <p class="flashcard-counter">Card {{ index + 1 }} of {{ deck.length }}</p>

    <div class="flashcard-controls">
      <button type="button" class="btn btn-small" @click="previous">Previous</button>
      <button type="button" class="btn btn-small" @click="flip">
        {{ flipped ? 'Show question' : 'Show answer' }}
      </button>
      <button type="button" class="btn btn-small" @click="next">Next</button>
      <button type="button" class="btn btn-small" @click="shuffle">Shuffle</button>
    </div>

    <p class="sr-only" aria-live="polite">
      {{ flipped ? 'Answer shown.' : 'Question shown.' }}
    </p>
  </div>
</template>
