<script setup>
import LessonHeading from './LessonHeading.vue'
import QuickCheck from '../QuickCheck.vue'
import EverydayExplorer from '../EverydayExplorer.vue'
</script>

<template>
  <section id="lesson-4" class="lesson" aria-labelledby="lesson-4-title">
    <LessonHeading
      id="lesson-4"
      :number="4"
      title="Everyday organic compounds"
      objective="Recognise organic compounds in fuels, food, clothing, medicine, plastics, cleaning products and agriculture."
    />

    <div class="prose">
      <p>
        Organic chemistry is not confined to a laboratory. It is in the kitchen, the wardrobe, the
        medicine cabinet and the fuel tank. The word “organic” in everyday speech can mean something
        different from its chemistry meaning, so focus on the compounds.
      </p>

      <h3>Fuels</h3>
      <p>
        LPG is mainly a mixture of propane <span class="formula">C₃H₈</span> and butane
        <span class="formula">C₄H₁₀</span>. Petrol and diesel are mixtures of hydrocarbons obtained
        from crude oil. Natural gas is mainly methane <span class="formula">CH₄</span>, and biogas is
        also mainly methane. These compounds release energy when they burn in oxygen.
      </p>

      <h3>Food</h3>
      <p>
        Carbohydrates such as glucose <span class="formula">C₆H₁₂O₆</span> and starch, proteins made
        of amino acids, and fats and oils are all organic. They provide energy and the building
        materials that living things need.
      </p>

      <h3>Clothing and materials</h3>
      <p>
        Cotton and paper are mainly cellulose, a natural polymer of glucose. Wool and silk are
        protein fibres. Polyester, nylon and polythene are synthetic organic polymers. Plastics are
        used for bottles, bags, pipes and countless other products.
      </p>

      <h3>Medicine</h3>
      <p>
        Many medicines are organic compounds. Aspirin is acetylsalicylic acid, and paracetamol is
        another familiar example. Organic chemistry is used to design, test and manufacture drugs.
      </p>

      <h3>Cleaning and agriculture</h3>
      <p>
        Soap is a sodium salt of a fatty acid. Detergents are also organic compounds. Urea,
        <span class="formula">CO(NH₂)₂</span>, is a major nitrogen fertiliser. Organic compounds are
        also used in pesticides, dyes, cosmetics and food additives.
      </p>

      <EverydayExplorer />

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          When an exam question asks for an everyday example, name the compound and give its use. For
          example: “Methane is used as a fuel in natural gas” is stronger than “gas.”
        </p>
      </div>

      <h3>Check your understanding</h3>

      <QuickCheck
        id="l4-q1"
        question="1. Which of these is an organic fuel?"
        :options="[
          { value: 'A', text: 'Sodium chloride' },
          { value: 'B', text: 'LPG' },
          { value: 'C', text: 'Calcium carbonate' }
        ]"
        correct-value="B"
        correct-feedback="Correct. LPG is mainly propane and butane, both hydrocarbons used as fuels."
        wrong-feedback="LPG is the fuel made mainly of propane and butane. The other options are inorganic substances."
      />

      <QuickCheck
        id="l4-q2"
        question="2. Cotton is mainly made of which organic material?"
        :options="[
          { value: 'A', text: 'Cellulose' },
          { value: 'B', text: 'Sodium chloride' },
          { value: 'C', text: 'Calcium carbonate' }
        ]"
        correct-value="A"
        correct-feedback="Correct. Cotton fibres are almost pure cellulose, a natural polymer of glucose."
        wrong-feedback="Cotton is a plant fibre. The main organic material in plant cell walls is cellulose."
      />

      <QuickCheck
        id="l4-q3"
        question="3. Aspirin is an example of an organic compound used as a:"
        :options="[
          { value: 'A', text: 'Fuel' },
          { value: 'B', text: 'Medicine' },
          { value: 'C', text: 'Metal' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Aspirin is an organic medicine used for pain relief and fever reduction."
        wrong-feedback="Aspirin is taken as a medicine. It is not a fuel or a metal."
      />
    </div>
  </section>
</template>
