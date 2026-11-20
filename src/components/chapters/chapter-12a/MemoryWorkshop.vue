<script setup>
import { ref } from 'vue'
import Flashcards from '../../Flashcards.vue'
import { flashcards } from '../../../data/chapter-12a/flashcards'

const showChecklist = ref(false)

const steps = [
  {
    title: 'Find the longest chain',
    detail:
      'Trace every continuous path of carbon atoms and choose the longest one. That chain supplies the root word: meth, eth, prop, but, pent and so on.'
  },
  {
    title: 'Identify the principal group',
    detail:
      'Look for the functional group with the highest priority or for a multiple bond. It decides the suffix and whether the ending is -ane, -ene, -yne, -ol, -al, -one or -oic acid.'
  },
  {
    title: 'Number the chain',
    detail:
      'Number from the end that gives the principal group the lowest locant. If there is no principal group, give the double or triple bond the lowest locant, then the substituents.'
  },
  {
    title: 'Place the substituents',
    detail:
      'Name each branch or halogen as a prefix, attach its locant, and use di, tri or tetra when the same substituent appears more than once.'
  },
  {
    title: 'Assemble the name',
    detail:
      'Write prefixes alphabetically, then the root, then the suffix. Use hyphens between numbers and letters, and commas between numbers.'
  }
]

const checklist = [
  'Longest chain: four carbons, so the root is but.',
  'Principal group: –OH, so the suffix is -ol.',
  'Number from the –OH end: the OH carbon is carbon 1.',
  'Substituent: a methyl group on carbon 3, so the prefix is 3-methyl.',
  'Assemble: 3-methylbutan-1-ol.'
]
</script>

<template>
  <section id="memory" class="lesson" aria-labelledby="memory-title">
    <header class="lesson-head">
      <p class="lesson-kicker">Memory workshop</p>
      <h2 id="memory-title">Use the five-step name-building routine</h2>
      <p class="lesson-objective">
        Rebuild an IUPAC name from a structure with the same five decisions every time, then test
        yourself with spaced recall.
      </p>
    </header>

    <div class="prose">
      <p>
        There is no acrostic to memorise in this chapter. A reliable
        <strong>name-building routine</strong> is more useful because it works for every structure,
        not only for the examples you have seen. Follow the five steps in order and say each decision
        aloud.
      </p>

      <div class="definition">
        <span class="definition__label">Name skeleton</span>
        <p>
          <span class="formula">prefix</span> + <span class="formula">root</span> +
          <span class="formula">primary suffix</span> +
          <span class="formula">secondary suffix</span>. For example,
          <span class="formula">3-methylbutan-1-ol</span> has the prefix 3-methyl, the root but, the
          primary suffix ane and the secondary suffix ol.
        </p>
      </div>

      <h3>The five-step name-building routine</h3>
      <ol>
        <li v-for="step in steps" :key="step.title">
          <strong>{{ step.title }}.</strong> {{ step.detail }}
        </li>
      </ol>

      <h3>Cover and rebuild</h3>
      <p>
        Cover the checklist below and reconstruct the IUPAC name of this structure one step at a
        time. Write each decision before you reveal the next one.
      </p>
      <p class="structure-block">CH₃–CH(CH₃)–CH₂–CH₂–OH</p>

      <div class="lab-controls">
        <button type="button" class="btn" @click="showChecklist = !showChecklist">
          {{ showChecklist ? 'Cover the checklist' : 'Reveal the checklist' }}
        </button>
      </div>

      <div v-show="showChecklist" class="recall-prompt">
        <strong>Checklist.</strong>
        <ol>
          <li v-for="item in checklist" :key="item">{{ item }}</li>
        </ol>
      </div>

      <div class="recall-prompt">
        <strong>Recall prompt.</strong> Cover the five-step list. For
        <span class="formula">CH₃–CH₂–CH(OH)–CH₂–CH₃</span>, say the longest chain, the principal
        group, the numbering direction, the substituents and the final name. Then check every
        decision in order.
      </div>

      <h3>Spaced recall</h3>
      <p>
        Return to the five steps after 1 day, 3 days, 7 days and 14 days. Each time, rebuild two
        names from structures before looking at the worked examples. Short, repeated recall is more
        effective than one long reread.
      </p>

      <h3>Functional groups at a glance</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Families and the suffix or prefix they use in a name</caption>
          <thead>
            <tr>
              <th scope="col">Family</th>
              <th scope="col">Group</th>
              <th scope="col">Name part</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Alkane</th>
              <td>Only single C–C bonds</td>
              <td>Suffix -ane</td>
            </tr>
            <tr>
              <th scope="row">Alkene</th>
              <td>C=C double bond</td>
              <td>Suffix -ene</td>
            </tr>
            <tr>
              <th scope="row">Alkyne</th>
              <td>C≡C triple bond</td>
              <td>Suffix -yne</td>
            </tr>
            <tr>
              <th scope="row">Alcohol</th>
              <td>–OH</td>
              <td>Suffix -ol</td>
            </tr>
            <tr>
              <th scope="row">Aldehyde</th>
              <td>–CHO</td>
              <td>Suffix -al</td>
            </tr>
            <tr>
              <th scope="row">Ketone</th>
              <td>&gt;C=O between carbons</td>
              <td>Suffix -one</td>
            </tr>
            <tr>
              <th scope="row">Carboxylic acid</th>
              <td>–COOH</td>
              <td>Suffix -oic acid</td>
            </tr>
            <tr>
              <th scope="row">Haloalkane</th>
              <td>–X halogen</td>
              <td>Prefix halo-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Active recall</h3>
      <p>
        Flip each card, answer before you reveal, and say the reason rather than only the word.
      </p>
      <Flashcards :cards="flashcards" />
    </div>
  </section>
</template>
