<script setup>
import { preparationRoutes } from '../../../data/chapter-12b/preparations'

const rapidSheet = [
  'An alkane is a saturated hydrocarbon containing only single carbon–carbon bonds; alkanes are also called paraffins.',
  'The general formula of the alkanes is CₙH₂ₙ₊₂. Successive members differ by CH₂, a molar mass step of 14 g/mol.',
  'Natural gas and petroleum are the main sources. Natural gas is mainly methane with about 10–20% ethane.',
  'Methane occurs as marsh gas, in exhaled air and intestinal gases, as coal-mine fire-damp, and in the dry distillation of wood, peat and coal.',
  'Methane has a tetrahedral structure with four C–H single bonds. Ethane has a single C–C bond and six C–H bonds.',
  'Methane is prepared from sodium ethanoate and soda lime; ethane from sodium propanoate and soda lime. Both are heated to about 300°C.',
  'Other routes include reduction of iodomethane or bromoethane with zinc and dilute HCl, aluminium carbide with water, and the Wurtz reaction in dry ether.',
  'Complete combustion gives CO₂ and H₂O with a non-sooty flame. Incomplete combustion gives CO or soot and is hazardous.',
  'Substitution with chlorine needs diffused sunlight or ultraviolet light. Each step replaces one hydrogen and releases HCl.',
  'Alkenes and alkynes are out of scope for this chapter; alkanes contain no C=C or C≡C bond.'
]

const equations = [
  {
    reaction: 'Methane from sodium ethanoate',
    equation: 'CH₃COONa + NaOH → Na₂CO₃ + CH₄↑',
    condition: 'Soda lime (NaOH + CaO), about 300°C',
    observation: 'Colourless methane collected over water.'
  },
  {
    reaction: 'Ethane from sodium propanoate',
    equation: 'C₂H₅COONa + NaOH → Na₂CO₃ + C₂H₆↑',
    condition: 'Soda lime (NaOH + CaO), about 300°C',
    observation: 'Colourless ethane collected over water.'
  },
  {
    reaction: 'Methane from aluminium carbide',
    equation: 'Al₄C₃ + 12H₂O → 3CH₄↑ + 4Al(OH)₃',
    condition: 'Room temperature',
    observation: 'Methane is released by hydrolysis.'
  },
  {
    reaction: 'Wurtz reaction',
    equation: '2CH₃I + 2Na → C₂H₆ + 2NaI',
    condition: 'Dry ether',
    observation: 'Ethane forms; methane cannot be prepared this way.'
  },
  {
    reaction: 'Complete combustion of methane',
    equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
    condition: 'Sufficient oxygen',
    observation: 'Non-sooty flame; much heat released.'
  },
  {
    reaction: 'Incomplete combustion of methane',
    equation: '2CH₄ + 3O₂ → 2CO + 4H₂O',
    condition: 'Insufficient oxygen',
    observation: 'Poisonous carbon monoxide forms.'
  },
  {
    reaction: 'Very limited combustion of methane',
    equation: 'CH₄ + O₂ → C + 2H₂O',
    condition: 'Very limited oxygen',
    observation: 'Sooty flame; black carbon particles form.'
  },
  {
    reaction: 'Chlorination of methane',
    equation: 'CH₄ + Cl₂ → CH₃Cl + HCl',
    condition: 'Diffused sunlight or ultraviolet light',
    observation: 'Substitution; HCl is released at every step.'
  },
  {
    reaction: 'Complete combustion of ethane',
    equation: '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O',
    condition: 'Sufficient oxygen',
    observation: 'Non-sooty flame; CO₂ and H₂O form.'
  }
]

const mistakes = [
  'Confusing complete and incomplete combustion: carbon monoxide and soot belong to incomplete combustion, not complete combustion.',
  'Omitting HCl from a chlorination equation. Every substitution step produces one HCl molecule as well as the organic product.',
  'Writing methane as the product of the Wurtz reaction. Two methyl groups join to give ethane, so methane cannot be prepared this way.',
  'Treating soda lime as pure sodium hydroxide. Soda lime is a mixture of NaOH and CaO, and the CaO keeps the mixture dry.',
  'Forgetting that alkenes and alkynes are out of scope. This chapter is about saturated alkanes and their substitution reactions.',
  'Separating combustion products from observations: carbon dioxide and water are products; a non-sooty flame is an observation.',
  'Mixing up the salt and the gas in a soda-lime preparation. Sodium ethanoate gives methane and sodium propanoate gives ethane.'
]

const reviewQuestions = [
  'Define an alkane and explain why it is described as saturated. Give the general formula.',
  'Name the two main natural sources of alkanes and state the approximate composition of natural gas.',
  'Describe the laboratory preparation of methane from sodium ethanoate, including the condition and balanced equation.',
  'Explain why the Wurtz reaction can prepare ethane but not methane.',
  'Compare complete and incomplete combustion of methane, giving an equation and one hazard for each.',
  'Describe the reaction of methane with chlorine in diffused sunlight and explain why it is substitution rather than addition.'
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
          <li v-for="item in rapidSheet" :key="item">{{ item }}</li>
        </ul>
      </div>

      <h3>Equations with conditions and observations</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Reaction, balanced equation, condition and what is observed</caption>
          <thead>
            <tr>
              <th scope="col">Reaction</th>
              <th scope="col">Balanced equation</th>
              <th scope="col">Condition</th>
              <th scope="col">Observation or product</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in equations" :key="row.reaction">
              <th scope="row">{{ row.reaction }}</th>
              <td class="formula">{{ row.equation }}</td>
              <td>{{ row.condition }}</td>
              <td>{{ row.observation }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Preparation comparison</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Routes to methane and ethane</caption>
          <thead>
            <tr>
              <th scope="col">Method</th>
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

      <h3>Common mistakes</h3>
      <ol class="mistake-list">
        <li v-for="mistake in mistakes" :key="mistake">{{ mistake }}</li>
      </ol>

      <h3>Review questions</h3>
      <ol>
        <li v-for="question in reviewQuestions" :key="question">{{ question }}</li>
      </ol>
    </div>
  </section>
</template>
