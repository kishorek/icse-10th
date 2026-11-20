<script setup>
import LessonHeading from './LessonHeading.vue'
import QuickCheck from '../QuickCheck.vue'
</script>

<template>
  <section id="lesson-1" class="lesson" aria-labelledby="lesson-1-title">
    <LessonHeading
      id="lesson-1"
      :number="1"
      title="What are organic compounds?"
      objective="Define organic chemistry, explain why it became a separate branch, and recognise the standard carbon-containing exceptions."
    />

    <div class="prose">
      <p>
        A candle burns away. A steel nail held near the same flame does not burn away in the same
        way. The candle wax is mainly a mixture of <strong>hydrocarbons</strong> — compounds of
        carbon and hydrogen. The nail is mostly iron, a metal. The difference is a useful first clue
        to why carbon compounds are studied as a family of their own.
      </p>

      <div class="definition">
        <span class="definition__label">Definition</span>
        <p>
          <strong>Organic chemistry</strong> is the branch of chemistry that studies carbon
          compounds, especially those containing carbon–hydrogen bonds, and their reactions.
        </p>
      </div>

      <h3>Why “organic”?</h3>
      <p>
        The name comes from history. Early chemists noticed that compounds obtained from plants and
        animals behaved differently from compounds obtained from minerals. They believed that a
        special “vital force” present only in living organisms was needed to make organic compounds.
        This idea is called the <strong>vital-force theory</strong>.
      </p>

      <ol class="timeline" aria-label="How the definition of organic chemistry changed">
        <li>
          <strong>Before the 1800s</strong>
          Organic compounds were thought to require a vital force found only in living things.
        </li>
        <li>
          <strong>1828</strong>
          Friedrich Wöhler synthesized urea from ammonium cyanate, an inorganic compound, in the
          laboratory.
        </li>
        <li>
          <strong>Today</strong>
          Organic compounds are defined by their carbon-based structure, not by their origin. Many
          are made in laboratories and factories.
        </li>
      </ol>

      <p>
        Wöhler's experiment was important because it showed that an organic compound could be
        prepared without a living organism. The vital-force theory was abandoned, and organic
        chemistry became the study of carbon compounds regardless of where they come from.
      </p>

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          If a question asks why organic chemistry is a separate branch, link the answer to the
          very large number of carbon compounds and to carbon's unique bonding behaviour. Do not say
          that organic compounds are “alive” or that they come only from living things.
        </p>
      </div>

      <h3>What counts as an organic compound?</h3>
      <p>
        In school chemistry, organic compounds are carbon compounds — usually containing hydrogen
        and often oxygen, nitrogen, sulfur, phosphorus or a halogen. A few simple carbon-containing
        compounds are conventionally classified as inorganic.
      </p>

      <div class="definition">
        <span class="definition__label">Exam-ready definition</span>
        <p>
          <strong>Organic compounds</strong> are carbon compounds, usually containing hydrogen,
          excluding simple carbon compounds such as carbon monoxide, carbon dioxide, carbonates,
          bicarbonates, cyanides and carbides.
        </p>
      </div>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Carbon-containing compounds that are usually classified as inorganic</caption>
          <thead>
            <tr>
              <th scope="col">Compound</th>
              <th scope="col">Formula</th>
              <th scope="col">Why it is treated as inorganic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Carbon monoxide</th>
              <td class="formula">CO</td>
              <td>An oxide of carbon.</td>
            </tr>
            <tr>
              <th scope="row">Carbon dioxide</th>
              <td class="formula">CO₂</td>
              <td>An oxide of carbon.</td>
            </tr>
            <tr>
              <th scope="row">Calcium carbonate</th>
              <td class="formula">CaCO₃</td>
              <td>A carbonate.</td>
            </tr>
            <tr>
              <th scope="row">Sodium bicarbonate</th>
              <td class="formula">NaHCO₃</td>
              <td>A bicarbonate.</td>
            </tr>
            <tr>
              <th scope="row">Sodium cyanide</th>
              <td class="formula">NaCN</td>
              <td>A cyanide.</td>
            </tr>
            <tr>
              <th scope="row">Calcium carbide</th>
              <td class="formula">CaC₂</td>
              <td>A carbide.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="misconception">
        <span class="tag">Common misconception</span>
        <p>
          “Every compound that contains carbon is organic.” This is false. Carbon dioxide, calcium
          carbonate and sodium cyanide all contain carbon, but they are conventionally classified as
          inorganic. Use the school definition, not the presence of carbon alone.
        </p>
      </div>

      <h3>Try a quick classification</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Classify each substance using the school definition</caption>
          <thead>
            <tr>
              <th scope="col">Substance</th>
              <th scope="col">Classification</th>
              <th scope="col">Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Glucose</th>
              <td>Organic</td>
              <td>A carbon compound with C–H and C–O bonds.</td>
            </tr>
            <tr>
              <th scope="row">Methane</th>
              <td>Organic</td>
              <td>A hydrocarbon: carbon bonded only to hydrogen.</td>
            </tr>
            <tr>
              <th scope="row">Carbon dioxide</th>
              <td>Inorganic</td>
              <td>An oxide of carbon, a standard exception.</td>
            </tr>
            <tr>
              <th scope="row">Sodium chloride</th>
              <td>Inorganic</td>
              <td>An ionic compound that contains no carbon.</td>
            </tr>
            <tr>
              <th scope="row">Ethanol</th>
              <td>Organic</td>
              <td>An alcohol with carbon–hydrogen and carbon–oxygen bonds.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Check your understanding</h3>

      <QuickCheck
        id="l1-q1"
        question="1. Which statement best defines organic compounds?"
        :options="[
          { value: 'A', text: 'All compounds that contain carbon.' },
          { value: 'B', text: 'Carbon compounds, usually containing hydrogen, excluding simple carbon compounds such as CO₂ and carbonates.' },
          { value: 'C', text: 'Compounds obtained only from living organisms.' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Organic compounds are carbon compounds, but simple carbon compounds such as CO₂ and carbonates are conventional exceptions."
        wrong-feedback="Not quite. The modern definition is based on carbon-based structure, with a few simple carbon compounds excluded."
      />

      <QuickCheck
        id="l1-q2"
        question="2. The vital-force theory was challenged when Wöhler synthesized urea from an inorganic compound."
        :options="[
          { value: 'A', text: 'True' },
          { value: 'B', text: 'False' }
        ]"
        correct-value="A"
        correct-feedback="Correct. Wöhler's 1828 synthesis showed that an organic compound could be made in the laboratory."
        wrong-feedback="Think again. The synthesis of urea from ammonium cyanate is the standard example of an organic compound made from an inorganic starting material."
      />

      <QuickCheck
        id="l1-q3"
        question="3. Which substance is usually classified as inorganic even though it contains carbon?"
        :options="[
          { value: 'A', text: 'Ethanol' },
          { value: 'B', text: 'Glucose' },
          { value: 'C', text: 'Carbon dioxide' }
        ]"
        correct-value="C"
        correct-feedback="Correct. Carbon dioxide is an oxide of carbon and is conventionally classified as inorganic."
        wrong-feedback="Look for the standard exception. CO₂ contains carbon but is not treated as an organic compound in school chemistry."
      />
    </div>
  </section>
</template>
