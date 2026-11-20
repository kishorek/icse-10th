<script setup>
import LessonHeading from './LessonHeading.vue'
import QuickCheck from '../QuickCheck.vue'
</script>

<template>
  <section id="lesson-5" class="lesson" aria-labelledby="lesson-5-title">
    <LessonHeading
      id="lesson-5"
      :number="5"
      title="Why do organic compounds matter?"
      objective="Explain the importance of organic compounds in life, health, agriculture, materials and energy, and recognise their environmental costs."
    />

    <div class="prose">
      <p>
        Organic compounds are not just a syllabus topic. They are the molecules of life and the
        materials of modern society. The same properties that make them useful can also create
        problems.
      </p>

      <div class="impact-grid">
        <section class="impact-item">
          <h3>Life</h3>
          <p>
            Proteins, carbohydrates, lipids and nucleic acids such as DNA are organic compounds.
            They build cells, store energy and carry genetic information.
          </p>
        </section>
        <section class="impact-item">
          <h3>Food and agriculture</h3>
          <p>
            Food itself is largely organic. Fertilisers such as urea and many pesticides are organic
            compounds that help increase crop yields.
          </p>
        </section>
        <section class="impact-item">
          <h3>Health</h3>
          <p>
            Medicines, vitamins, antiseptics and many medical materials are organic. Organic
            chemistry helps us design safer and more effective treatments.
          </p>
        </section>
        <section class="impact-item">
          <h3>Materials and clothing</h3>
          <p>
            Plastics, synthetic fibres, rubber, paints, adhesives and dyes are organic products.
            They shape clothing, housing, transport and packaging.
          </p>
        </section>
        <section class="impact-item">
          <h3>Energy and transport</h3>
          <p>
            Petrol, diesel, LPG and natural gas are organic fuels. They power vehicles, cooking and
            electricity generation, but burning them releases carbon dioxide.
          </p>
        </section>
        <section class="impact-item">
          <h3>Economy and work</h3>
          <p>
            The petrochemical, pharmaceutical, food, textile and agricultural industries depend on
            organic chemistry and provide employment to millions of people.
          </p>
        </section>
      </div>

      <h3>The other side: environmental costs</h3>
      <p>
        Many plastics are not biodegradable, so they persist in the environment and can harm
        wildlife. Burning fossil fuels releases carbon dioxide, a greenhouse gas linked to climate
        change. Some organic solvents and pesticides are toxic or pollute water and soil.
      </p>

      <div class="misconception">
        <span class="tag">Balanced view</span>
        <p>
          “Organic” does not automatically mean “safe” or “environmentally friendly.” Natural
          organic compounds can be poisonous, and synthetic organic products can be harmful. The
          useful question is how a substance is made, used and disposed of.
        </p>
      </div>

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          For “importance” questions, give a use and a reason. For “environmental” questions, name a
          specific problem and connect it to an organic material or fuel. Avoid vague answers such as
          “it is useful.”
        </p>
      </div>

      <h3>Check your understanding</h3>

      <QuickCheck
        id="l5-q1"
        question="1. Which organic compound is widely used as a nitrogen fertiliser?"
        :options="[
          { value: 'A', text: 'Urea' },
          { value: 'B', text: 'Sodium chloride' },
          { value: 'C', text: 'Calcium carbonate' }
        ]"
        correct-value="A"
        correct-feedback="Correct. Urea supplies nitrogen and is widely used as a fertiliser."
        wrong-feedback="Urea is the organic nitrogen fertiliser. The other two are inorganic compounds."
      />

      <QuickCheck
        id="l5-q2"
        question="2. Which is an environmental problem linked to organic compounds?"
        :options="[
          { value: 'A', text: 'Plastic pollution from non-biodegradable polymers' },
          { value: 'B', text: 'The strength of covalent bonds' },
          { value: 'C', text: 'The colour of a flame' }
        ]"
        correct-value="A"
        correct-feedback="Correct. Many plastics are non-biodegradable and persist in the environment."
        wrong-feedback="Plastic pollution is the environmental problem here. Bond strength and flame colour are not pollution problems."
      />

      <QuickCheck
        id="l5-q3"
        question="3. Why is organic chemistry important to society?"
        :options="[
          { value: 'A', text: 'It supports medicines, fuels, food and materials.' },
          { value: 'B', text: 'It studies only rocks and minerals.' },
          { value: 'C', text: 'It has no practical applications.' }
        ]"
        correct-value="A"
        correct-feedback="Correct. Organic chemistry underpins medicines, fuels, food, plastics, clothing and agriculture."
        wrong-feedback="Organic chemistry is central to medicines, fuels, food, plastics and many other everyday materials."
      />
    </div>
  </section>
</template>

<style scoped>
.impact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem 1.5rem;
  margin: 1.4rem 0;
}

.impact-item {
  padding-top: 0.7rem;
  border-top: 3px solid var(--line);
}

.impact-item h3 {
  margin: 0 0 0.35rem;
  font-size: 1.15rem;
}

.impact-item p {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 640px) {
  .impact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
