<script setup>
const definitions = [
  {
    term: 'Organic chemistry',
    meaning:
      'The branch of chemistry that studies carbon compounds, especially those containing carbon–hydrogen bonds, and their reactions.'
  },
  {
    term: 'Organic compound',
    meaning:
      'A carbon compound, usually containing hydrogen, excluding simple carbon compounds such as CO, CO₂, carbonates, bicarbonates, cyanides and carbides.'
  },
  {
    term: 'Inorganic compound',
    meaning:
      'A compound that is not classified as organic; often ionic, and may or may not contain carbon.'
  },
  {
    term: 'Tetravalency',
    meaning: 'The property of carbon by which it forms four covalent bonds.'
  },
  {
    term: 'Catenation',
    meaning:
      'The self-linking of carbon atoms to form straight chains, branched chains or rings.'
  },
  {
    term: 'Hydrocarbon',
    meaning: 'An organic compound containing only carbon and hydrogen.'
  },
  {
    term: 'Isomer',
    meaning:
      'A compound with the same molecular formula as another compound but a different structural formula.'
  }
]

const structures = [
  { name: 'Methane', formula: 'CH₄', bond: 'Four C–H single bonds', note: 'Simplest hydrocarbon.' },
  { name: 'Ethane', formula: 'C₂H₆', bond: 'One C–C single bond', note: 'Saturated.' },
  { name: 'Ethene', formula: 'C₂H₄', bond: 'One C=C double bond', note: 'Unsaturated.' },
  { name: 'Ethyne', formula: 'C₂H₂', bond: 'One C≡C triple bond', note: 'Unsaturated.' },
  { name: 'Benzene', formula: 'C₆H₆', bond: 'Six-carbon ring', note: 'Cyclic; simplified structure.' },
  { name: 'Ethanol', formula: 'C₂H₅OH', bond: 'Contains an –OH group', note: 'Everyday alcohol.' },
  { name: 'Urea', formula: 'CO(NH₂)₂', bond: 'Contains carbon and nitrogen', note: 'Nitrogen fertiliser.' }
]

const mistakes = [
  'Saying that every carbon-containing compound is organic. CO₂, carbonates, bicarbonates, cyanides and carbides are standard exceptions.',
  'Saying that organic compounds come only from living things. Many are synthesized in laboratories and factories.',
  'Treating tetravalency and catenation as the same property. Tetravalency is four bonds; catenation is self-linking.',
  'Assuming that all organic compounds dissolve in water. Many simple organic compounds are non-polar and insoluble in water.',
  'Assuming that all organic compounds burn. Many do, but not all.',
  'Confusing a double bond with two separate bonds to two different atoms. A double bond is two shared pairs between the same atoms.',
  'Giving C₆H₁₂ for benzene. Benzene is C₆H₆; C₆H₁₂ is cyclohexane.'
]
</script>

<template>
  <section id="revision" class="lesson" aria-labelledby="revision-title">
    <header class="lesson-head">
      <p class="lesson-kicker">Revision centre</p>
      <h2 id="revision-title">The chapter at a glance</h2>
      <p class="lesson-objective">
        Use this after you have worked through the lessons. It is a revision aid, not a replacement
        for the explanations.
      </p>
    </header>

    <div class="prose">
      <div class="rapid-sheet">
        <h3>Rapid revision sheet</h3>
        <ul>
          <li>Organic chemistry is the study of carbon compounds and their reactions.</li>
          <li>Wöhler synthesized urea in 1828, challenging the vital-force theory.</li>
          <li>Carbon has the electronic configuration 2,4 and forms four covalent bonds.</li>
          <li>Catenation is carbon's self-linking into chains and rings.</li>
          <li>Carbon can form single, double and triple bonds.</li>
          <li>Isomerism produces different structures from the same molecular formula.</li>
          <li>Organic compounds are generally covalent, have low melting points and do not conduct.</li>
          <li>CO₂, carbonates, bicarbonates, cyanides and carbides are standard inorganic exceptions.</li>
          <li>Organic compounds are important in fuels, food, medicine, plastics and agriculture.</li>
          <li>Plastic pollution and fuel emissions are environmental costs.</li>
        </ul>
      </div>

      <h3>Key definitions</h3>
      <dl class="definitions">
        <div v-for="item in definitions" :key="item.term" class="definition-row">
          <dt>{{ item.term }}</dt>
          <dd>{{ item.meaning }}</dd>
        </div>
      </dl>

      <h3>Structures at a glance</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Formulae and bond types worth recognising</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Formula</th>
              <th scope="col">Key feature</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in structures" :key="item.name">
              <th scope="row">{{ item.name }}</th>
              <td class="formula">{{ item.formula }}</td>
              <td>{{ item.bond }}</td>
              <td>{{ item.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Common mistakes to avoid</h3>
      <ol class="mistake-list">
        <li v-for="mistake in mistakes" :key="mistake">{{ mistake }}</li>
      </ol>

      <h3>Can you answer these?</h3>
      <ol>
        <li>Why is organic chemistry studied separately from inorganic chemistry?</li>
        <li>What is the difference between tetravalency and catenation?</li>
        <li>Why is CO₂ not classified as organic in school chemistry?</li>
        <li>Give two properties that usually distinguish organic from inorganic compounds.</li>
        <li>Name two everyday organic compounds and one use of each.</li>
        <li>State one benefit and one environmental cost of organic compounds.</li>
      </ol>
    </div>
  </section>
</template>
