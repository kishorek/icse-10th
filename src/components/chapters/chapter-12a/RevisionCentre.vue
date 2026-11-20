<script setup>
import { functionalGroups } from '../../../data/chapter-12a/functionalGroups'
import { homologousSeries } from '../../../data/chapter-12a/homologousSeries'

const definitions = [
  {
    term: 'Organic compound',
    meaning:
      'A carbon compound, usually containing hydrogen, excluding simple carbon compounds such as CO, CO₂, carbonates, bicarbonates, cyanides and carbides.'
  },
  {
    term: 'Hydrocarbon',
    meaning: 'An organic compound containing only carbon and hydrogen.'
  },
  {
    term: 'Functional group',
    meaning:
      'An atom or group of atoms that gives a family of organic compounds its characteristic chemical properties.'
  },
  {
    term: 'Homologous series',
    meaning:
      'A family of organic compounds with the same general formula, similar structure and similar chemical properties, in which successive members differ by one CH₂ unit.'
  },
  {
    term: 'Isomer',
    meaning:
      'A compound with the same molecular formula as another compound but a different structural formula.'
  },
  {
    term: 'IUPAC name',
    meaning:
      'A systematic name, built from a root, suffix and prefixes, that describes the structure unambiguously.'
  }
]

const isomerTypes = [
  {
    type: 'Chain',
    same: 'Same molecular formula and functional group; different carbon skeleton.',
    example: 'Butane and 2-methylpropane'
  },
  {
    type: 'Position',
    same: 'Same molecular formula, skeleton and functional group; different position.',
    example: 'But-1-ene and but-2-ene'
  },
  {
    type: 'Functional (extension)',
    same: 'Same molecular formula; different functional group.',
    example: 'Ethanol and methoxymethane'
  }
]

const mistakes = [
  'Using the wrong root word because the longest continuous chain was not checked, especially when the chain bends.',
  'Choosing the wrong locant by numbering from the end nearer a substituent instead of the end that gives the principal functional group the lowest number.',
  'Using a suffix where a prefix is needed, such as writing chloro as a suffix or treating an ether as an alcohol.',
  'Forgetting the longest-chain rule and naming a branch as though it were the parent chain.',
  'Confusing molecular and structural formulae: isomers share the molecular formula but differ in the structural formula.',
  'Calling every difference an isomerism. A different molecular formula is not isomerism at all.'
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
          <li>Organic compounds are carbon compounds, usually containing hydrogen, with standard inorganic exceptions.</li>
          <li>A hydrocarbon contains only carbon and hydrogen.</li>
          <li>Carbon is tetravalent and can catenate into chains and rings.</li>
          <li>Alkanes have only single C–C bonds and the general formula CₙH₂ₙ₊₂.</li>
          <li>Alkenes contain a C=C double bond and have the general formula CₙH₂ₙ.</li>
          <li>Alkynes contain a C≡C triple bond and have the general formula CₙH₂ₙ₋₂.</li>
          <li>Alcohols contain –OH and have the general formula CₙH₂ₙ₊₁OH.</li>
          <li>A homologous series differs by CH₂, or 14 g/mol, at each step.</li>
          <li>An IUPAC name is built from a prefix, root, primary suffix and secondary suffix.</li>
          <li>The longest chain supplies the root; numbering gives the lowest locant to the principal group.</li>
          <li>Chain and position isomerism are examinable; functional isomerism is a labelled extension.</li>
        </ul>
      </div>

      <h3>Key definitions</h3>
      <dl class="definitions">
        <div v-for="item in definitions" :key="item.term" class="definition-row">
          <dt>{{ item.term }}</dt>
          <dd>{{ item.meaning }}</dd>
        </div>
      </dl>

      <h3>Functional groups</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Family, general formula, prefix and suffix</caption>
          <thead>
            <tr>
              <th scope="col">Family</th>
              <th scope="col">General formula</th>
              <th scope="col">Prefix</th>
              <th scope="col">Suffix</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="group in functionalGroups" :key="group.id">
              <th scope="row">{{ group.name }}</th>
              <td class="formula">{{ group.general }}</td>
              <td>{{ group.prefix }}</td>
              <td>{{ group.suffix }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Homologous series</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>General formulae and the CH₂ / 14 g/mol step</caption>
          <thead>
            <tr>
              <th scope="col">Series</th>
              <th scope="col">General formula</th>
              <th scope="col">First members</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="family in homologousSeries" :key="family.id">
              <th scope="row">{{ family.name }}</th>
              <td class="formula">{{ family.general }}</td>
              <td>
                <span v-for="(member, index) in family.members" :key="member.formula">
                  {{ member.name }} <span class="formula">{{ member.formula }}</span
                  ><span v-if="index < family.members.length - 1">, </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Each successive member adds one CH₂ unit. The molar mass step is
        <span class="formula">12 + (2 × 1) = 14 g/mol</span>.
      </p>

      <h3>Nomenclature decision checklist</h3>
      <ol>
        <li>Find the longest continuous carbon chain and write the root word.</li>
        <li>Identify the principal functional group and write the suffix.</li>
        <li>Number the chain to give the principal group the lowest locant.</li>
        <li>Name substituents as prefixes with their locants.</li>
        <li>Assemble the name with alphabetical prefixes and correct punctuation.</li>
      </ol>

      <h3>Isomerism comparison</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Chain, position and functional isomerism</caption>
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">What changes</th>
              <th scope="col">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in isomerTypes" :key="item.type">
              <th scope="row">{{ item.type }}</th>
              <td>{{ item.same }}</td>
              <td>{{ item.example }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Common mistakes</h3>
      <ol class="mistake-list">
        <li v-for="mistake in mistakes" :key="mistake">{{ mistake }}</li>
      </ol>

      <h3>Six review questions</h3>
      <ol>
        <li>Define an organic compound and name two carbon-containing compounds that are not classified as organic.</li>
        <li>Distinguish a saturated hydrocarbon from an unsaturated hydrocarbon, giving one example of each.</li>
        <li>What is a functional group? Name the group and suffix for alcohols, aldehydes and carboxylic acids.</li>
        <li>State three features that every homologous series must have, and explain the 14 g/mol step.</li>
        <li>Explain the longest-chain rule and the lowest-locant rule using one worked structure.</li>
        <li>Classify each pair as chain, position or functional isomers: butane and 2-methylpropane; but-1-ene and but-2-ene; ethanol and methoxymethane.</li>
      </ol>
    </div>
  </section>
</template>
