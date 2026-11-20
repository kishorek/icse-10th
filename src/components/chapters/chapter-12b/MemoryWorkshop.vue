<script setup>
import Flashcards from '../../Flashcards.vue'
import { flashcards } from '../../../data/chapter-12b/flashcards'
import { preparationRoutes } from '../../../data/chapter-12b/preparations'

const combustionMap = [
  {
    mode: 'Complete combustion',
    condition: 'Sufficient oxygen',
    equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
    products: 'Carbon dioxide and water',
    observation: 'Non-sooty flame; a large amount of heat is released.'
  },
  {
    mode: 'Incomplete combustion',
    condition: 'Insufficient oxygen',
    equation: '2CH₄ + 3O₂ → 2CO + 4H₂O',
    products: 'Carbon monoxide and water',
    observation: 'Carbon monoxide is poisonous, so the gas is dangerous in an enclosed space.'
  },
  {
    mode: 'Incomplete combustion',
    condition: 'Very limited oxygen',
    equation: 'CH₄ + O₂ → C + 2H₂O',
    products: 'Soot (carbon) and water',
    observation: 'Sooty flame with black carbon particles.'
  }
]

const substitutionMap = [
  {
    step: '1',
    equation: 'CH₄ + Cl₂ → CH₃Cl + HCl',
    product: 'Chloromethane',
    note: 'One hydrogen is replaced.'
  },
  {
    step: '2',
    equation: 'CH₃Cl + Cl₂ → CH₂Cl₂ + HCl',
    product: 'Dichloromethane',
    note: 'A second hydrogen is replaced.'
  },
  {
    step: '3',
    equation: 'CH₂Cl₂ + Cl₂ → CHCl₃ + HCl',
    product: 'Trichloromethane (chloroform)',
    note: 'A third hydrogen is replaced.'
  },
  {
    step: '4',
    equation: 'CHCl₃ + Cl₂ → CCl₄ + HCl',
    product: 'Tetrachloromethane (carbon tetrachloride)',
    note: 'All four hydrogen atoms are replaced.'
  }
]
</script>

<template>
  <section id="memory" class="lesson" aria-labelledby="memory-title">
    <header class="lesson-head">
      <p class="lesson-kicker">Memory workshop</p>
      <h2 id="memory-title">Trace the reaction map</h2>
      <p class="lesson-objective">
        Organise the chapter as a map of starting materials, conditions and products instead of
        memorising isolated equations.
      </p>
    </header>

    <div class="prose">
      <p>
        There is no acrostic in this chapter. The reliable memory aid is a
        <strong>reaction map</strong>: start from the alkane, follow the condition, and name the
        products. Say the condition with every equation, because the same alkane can burn or
        substitute depending on what is present.
      </p>

      <div class="definition">
        <span class="definition__label">Map skeleton</span>
        <p>
          <span class="formula">alkane + oxygen</span> → combustion products;
          <span class="formula">alkane + chlorine + light</span> → substituted product + HCl;
          <span class="formula">preparation route</span> → alkane gas.
        </p>
      </div>

      <h3>Combustion map</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>What the oxygen supply decides</caption>
          <thead>
            <tr>
              <th scope="col">Condition</th>
              <th scope="col">Equation</th>
              <th scope="col">Products</th>
              <th scope="col">Observation or hazard</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in combustionMap" :key="row.condition">
              <th scope="row">{{ row.condition }}</th>
              <td class="formula">{{ row.equation }}</td>
              <td>{{ row.products }}</td>
              <td>{{ row.observation }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Substitution map</h3>
      <p>
        In diffused sunlight or ultraviolet light, chlorine replaces hydrogen atoms one at a time.
        Every step also produces hydrogen chloride, HCl.
      </p>
      <ol class="reaction-steps">
        <li v-for="row in substitutionMap" :key="row.step">
          <strong>Step {{ row.step }}:</strong>
          <span class="formula">{{ row.equation }}</span>
          — {{ row.product }}. {{ row.note }}
        </li>
      </ol>

      <h3>Preparation map</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Each preparation route and the gas it produces</caption>
          <thead>
            <tr>
              <th scope="col">Route</th>
              <th scope="col">Reactants</th>
              <th scope="col">Condition</th>
              <th scope="col">Gas produced</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="route in preparationRoutes" :key="route.id">
              <th scope="row">{{ route.label }}</th>
              <td>{{ route.reactants }}</td>
              <td>{{ route.conditions }}</td>
              <td>{{ route.gas }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="recall-prompt">
        <strong>Spaced recall prompt.</strong> Cover the tables. For methane, say the laboratory
        preparation equation, the complete-combustion equation and the first substitution equation
        with its condition. Then check each row in the map. Repeat after 1 day, 3 days, 7 days and
        14 days.
      </div>

      <h3>Active recall</h3>
      <p>Flip each card, answer before you reveal, and say the reason rather than only the word.</p>
      <Flashcards :cards="flashcards" />
    </div>
  </section>
</template>
