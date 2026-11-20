<script setup>
import LessonHeading from './LessonHeading.vue'
import QuickCheck from '../QuickCheck.vue'
import OrganicSorter from '../OrganicSorter.vue'
</script>

<template>
  <section id="lesson-3" class="lesson" aria-labelledby="lesson-3-title">
    <LessonHeading
      id="lesson-3"
      :number="3"
      title="Organic vs inorganic compounds"
      objective="Compare the typical properties of organic and inorganic compounds, and recognise the exceptions that stop the comparison from becoming a set of absolute rules."
    />

    <div class="prose">
      <p>
        Organic and inorganic compounds are not separated by a single test. They differ in a set of
        typical properties. Use the word <strong>generally</strong> carefully: most of these are
        trends, not laws.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Typical differences between organic and inorganic compounds</caption>
          <thead>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Organic compounds</th>
              <th scope="col">Inorganic compounds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Bonding</th>
              <td>Mostly covalent.</td>
              <td>Often ionic; some are covalent.</td>
            </tr>
            <tr>
              <th scope="row">Melting and boiling points</th>
              <td>Generally low for simple covalent molecules.</td>
              <td>Generally high for ionic and giant covalent structures.</td>
            </tr>
            <tr>
              <th scope="row">Solubility</th>
              <td>Usually insoluble in water; often soluble in organic solvents.</td>
              <td>Often soluble in water.</td>
            </tr>
            <tr>
              <th scope="row">Electrical conductivity</th>
              <td>Generally poor; most are non-electrolytes.</td>
              <td>Ionic compounds conduct when molten or in aqueous solution.</td>
            </tr>
            <tr>
              <th scope="row">Combustion</th>
              <td>Many burn in oxygen to form carbon dioxide and water.</td>
              <td>Generally non-flammable.</td>
            </tr>
            <tr>
              <th scope="row">Reaction rate</th>
              <td>Often slower, because covalent bonds must be broken.</td>
              <td>Often faster, especially in ionic solutions.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Why the differences appear</h3>
      <p>
        Simple organic compounds are usually made of separate covalent molecules. The forces
        <em>between</em> those molecules are weak, so less energy is needed to melt or boil the
        substance. There are no free ions, so the liquid or solution does not conduct electricity.
      </p>
      <p>
        Many inorganic compounds are ionic. Their oppositely charged ions are held in a giant lattice
        by strong electrostatic forces, so melting points are high. When melted or dissolved, the
        ions become free to move and the substance conducts.
      </p>

      <div class="definition">
        <span class="definition__label">Useful rule</span>
        <p>
          <strong>Like dissolves like.</strong> Polar solvents such as water tend to dissolve polar
          or ionic substances. Non-polar organic solvents such as petrol tend to dissolve non-polar
          organic substances.
        </p>
      </div>

      <p>
        This is why many organic compounds do not dissolve in water but do dissolve in petrol,
        ether or other organic solvents. It also explains why soap is needed to help oily dirt mix
        with water: the oil is non-polar, while water is polar.
      </p>

      <div class="misconception">
        <span class="tag">Common misconception</span>
        <p>
          “All organic compounds are flammable” and “all inorganic compounds conduct electricity”
          are both too strong. Many organic compounds burn, but not all do. Only ionic inorganic
          compounds conduct, and only when molten or dissolved. Treat the comparison as a set of
          general trends.
        </p>
      </div>

      <OrganicSorter />

      <h3>Check your understanding</h3>

      <QuickCheck
        id="l3-q1"
        question="1. Which set of properties is most typical of simple organic compounds?"
        :options="[
          { value: 'A', text: 'High melting point, ionic bonding, conducts when molten.' },
          { value: 'B', text: 'Low melting point, covalent bonding, poor conductivity.' },
          { value: 'C', text: 'High melting point, soluble in water, strong electrolyte.' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Simple organic compounds are usually covalent molecules with low melting points and poor conductivity."
        wrong-feedback="Think about the weak forces between simple covalent molecules. They melt easily and do not conduct."
      />

      <QuickCheck
        id="l3-q2"
        question="2. Carbon dioxide contains carbon. Is it classified as organic in school chemistry?"
        :options="[
          { value: 'A', text: 'Yes, because it contains carbon.' },
          { value: 'B', text: 'No, it is a standard inorganic exception.' }
        ]"
        correct-value="B"
        correct-feedback="Correct. CO₂ is an oxide of carbon and is conventionally classified as inorganic."
        wrong-feedback="Contains carbon does not always mean organic. CO₂ is one of the standard exceptions."
      />

      <QuickCheck
        id="l3-q3"
        question="3. A simple non-polar organic compound is most likely to dissolve in:"
        :options="[
          { value: 'A', text: 'Water' },
          { value: 'B', text: 'Petrol' },
          { value: 'C', text: 'Sodium chloride solution' }
        ]"
        correct-value="B"
        correct-feedback="Correct. ‘Like dissolves like’: a non-polar organic compound dissolves in a non-polar organic solvent such as petrol."
        wrong-feedback="Water and salt solutions are polar. A non-polar organic compound is more likely to dissolve in a non-polar solvent."
      />
    </div>
  </section>
</template>
