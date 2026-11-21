<script setup>
import LessonHeading from '../../lessons/LessonHeading.vue'
import QuickCheck from '../../QuickCheck.vue'
import LessonVisual from '../../visuals/LessonVisual.vue'
import MemoryHook from '../../MemoryHook.vue'
import ReactionMapVisual from '../../visuals/chapter-12b/ReactionMapVisual.vue'
import ChlorinationLab from './ChlorinationLab.vue'
import CombustionLab from './CombustionLab.vue'
</script>

<template>
  <section id="lesson-3" class="lesson" aria-labelledby="lesson-3-title">
    <LessonHeading
      id="lesson-3"
      :number="3"
      title="Reactions and uses of methane and ethane"
      objective="Explain complete and incomplete combustion, describe the successive chlorination of methane and ethane, and evaluate the uses and safety issues of these alkanes."
    />

    <div class="prose">
      <p>
        Alkanes are saturated, but they are not unreactive. They burn in oxygen, and in the presence
        of light they undergo substitution with chlorine. These two reactions explain most of the
        everyday behaviour of methane and ethane, including their use as fuels and the hazards of
        incomplete burning.
      </p>

      <h3>Complete combustion</h3>
      <p>
        When methane burns in a plentiful supply of oxygen, the carbon is oxidised to carbon dioxide
        and the hydrogen to water:
      </p>
      <p class="formula">CH₄ + 2O₂ → CO₂ + 2H₂O</p>
      <p>
        Ethane burns in the same way, but more oxygen is needed for each molecule:
      </p>
      <p class="formula">2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O</p>
      <p>
        Complete combustion produces a <strong>non-sooty flame</strong> and releases a large amount of
        heat. This is why natural gas is a useful domestic and industrial fuel.
      </p>

      <h3>Incomplete combustion</h3>
      <p>
        When oxygen is insufficient, the carbon is not completely oxidised. Carbon monoxide may form:
      </p>
      <p class="formula">2CH₄ + 3O₂ → 2CO + 4H₂O</p>
      <p class="formula">2C₂H₆ + 5O₂ → 4CO + 6H₂O</p>
      <p>
        With very little oxygen, carbon itself is deposited as soot:
      </p>
      <p class="formula">CH₄ + O₂ → C + 2H₂O</p>

      <div class="definition">
        <span class="definition__label">Safety and environment</span>
        <p>
          <strong>Carbon monoxide</strong> is colourless, odourless and poisonous. It binds to
          haemoglobin in the blood more strongly than oxygen does, so the blood carries less oxygen
          around the body. <strong>Soot</strong> is unburnt carbon: it produces a smoky flame, dirties
          surfaces and can damage the lungs when inhaled. Rooms with gas appliances need good
          ventilation, and burners should be adjusted to give a clean blue flame.
        </p>
      </div>

      <CombustionLab />

      <h3>Substitution with chlorine</h3>
      <p>
        In <strong>diffused sunlight</strong> or <strong>ultraviolet light</strong>, chlorine replaces
        hydrogen atoms in methane one at a time. This is a
        <strong>substitution reaction</strong>: one atom or group in a molecule is replaced by another
        atom or group. Each step also produces hydrogen chloride.
      </p>
      <p class="formula">CH₄ + Cl₂ → CH₃Cl + HCl</p>
      <p class="formula">CH₃Cl + Cl₂ → CH₂Cl₂ + HCl</p>
      <p class="formula">CH₂Cl₂ + Cl₂ → CHCl₃ + HCl</p>
      <p class="formula">CHCl₃ + Cl₂ → CCl₄ + HCl</p>
      <p>
        The products are chloromethane, dichloromethane, trichloromethane (chloroform) and
        tetrachloromethane (carbon tetrachloride). The reaction usually gives a mixture of these
        products, which can be separated by <strong>fractional distillation</strong> because they have
        different boiling points.
      </p>

      <ChlorinationLab />

      <h3>Ethane reacts in the same pattern</h3>
      <p>
        Ethane also undergoes substitution with chlorine under the same conditions. The first step
        replaces one hydrogen atom:
      </p>
      <p class="formula">C₂H₆ + Cl₂ → C₂H₅Cl + HCl</p>
      <p>
        Further substitution can replace more hydrogen atoms, giving a mixture of chloroethanes. The
        pattern is the same as for methane: light supplies the energy, chlorine is the substituting
        agent, and hydrogen chloride is released each time.
      </p>

      <h3>Uses of methane and ethane</h3>
      <ul>
        <li><strong>Methane</strong> is the main fuel in natural gas. It is burned for cooking, heating and industrial energy, and it is also used to make hydrogen and carbon black.</li>
        <li><strong>Ethane</strong> is burned as a fuel and is used as a feedstock in the petrochemical industry.</li>
        <li>Both gases are useful because they burn with a hot, clean flame when the oxygen supply is sufficient.</li>
      </ul>
      <p>
        Their usefulness comes with responsibility. Methane escaping into the atmosphere acts as a
        greenhouse gas, and burning any carbon fuel with too little air produces carbon monoxide or
        soot. Efficient burners and good ventilation reduce these risks.
      </p>

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          For combustion questions, state the oxygen supply first, then write the matching equation
          and observation. For substitution, name the condition (diffused sunlight or ultraviolet
          light), show one hydrogen replaced per step, and include HCl as the second product. Do not
          call chlorination an addition reaction: alkanes are saturated, so chlorine replaces
          hydrogen rather than adding across a bond.
        </p>
      </div>

      <h3>Check your understanding</h3>

      <LessonVisual
        title="One reactant, two reaction maps"
        caption="Methane burns differently as oxygen changes, and substitutes one hydrogen at a time with chlorine."
        description="The left side shows complete, incomplete and soot-forming combustion. The right side shows the four chlorination products with HCl released at each step."
        :notice="[
          'Less oxygen moves the product from CO₂ to CO to soot.',
          'Chlorination is substitution, not addition.',
          'Each substitution step releases HCl and leaves one more chlorine in the product.'
        ]"
      >
        <ReactionMapVisual />
      </LessonVisual>

      <MemoryHook
        technique="Cause-effect chain"
        title="Follow the atoms"
        aid="For chlorine: light starts it, chlorine takes a hydrogen, HCl leaves, and the substituted product stays. For oxygen: climb down the ladder as oxygen falls."
        :mapping="[
          { cue: 'Enough O₂', target: 'CO₂ + H₂O', meaning: 'Complete combustion with a non-sooty flame.' },
          { cue: 'Less O₂', target: 'CO + H₂O', meaning: 'Incomplete combustion; carbon monoxide is poisonous.' },
          { cue: 'Very little O₂', target: 'C + H₂O', meaning: 'Soot forms.' },
          { cue: 'Cl₂ + UV', target: 'Substitution begins', meaning: 'Chlorine replaces one hydrogen and HCl is released.' },
          { cue: 'Repeat with Cl₂', target: 'CH₃Cl → CH₂Cl₂ → CHCl₃ → CCl₄', meaning: 'Each step replaces one more hydrogen.' }
        ]"
        recall="Cover the mapping. Trace the three combustion outcomes, then recite the four chlorination products in order."
      />

      <QuickCheck
        id="b3-q1"
        question="1. Which products are formed when methane burns completely in a sufficient supply of oxygen?"
        :options="[
          { value: 'A', text: 'Carbon monoxide and water' },
          { value: 'B', text: 'Soot (carbon) and water' },
          { value: 'C', text: 'Carbon dioxide and carbon monoxide' },
          { value: 'D', text: 'Carbon dioxide and water' }
        ]"
        correct-value="D"
        correct-feedback="Correct. Complete combustion of methane gives carbon dioxide and water: CH₄ + 2O₂ → CO₂ + 2H₂O."
        wrong-feedback="Complete combustion means that carbon is fully oxidised to carbon dioxide and hydrogen to water. Carbon monoxide and soot form only when oxygen is insufficient."
      />

      <QuickCheck
        id="b3-q2"
        question="2. Which condition is used for the substitution of methane with chlorine?"
        :options="[
          { value: 'A', text: 'Darkness at room temperature' },
          { value: 'B', text: 'Diffused sunlight or ultraviolet light' },
          { value: 'C', text: 'Concentrated sulfuric acid' },
          { value: 'D', text: 'Aqueous sodium hydroxide' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Diffused sunlight or ultraviolet light supplies the energy for chlorine to replace hydrogen atoms in methane."
        wrong-feedback="The substitution needs light energy. Diffused sunlight or ultraviolet light is the standard condition."
      />

      <QuickCheck
        id="b3-q3"
        question="3. Which compound forms when one hydrogen atom of methane is replaced by one chlorine atom?"
        :options="[
          { value: 'A', text: 'CH₃Cl' },
          { value: 'B', text: 'CH₂Cl₂' },
          { value: 'C', text: 'CHCl₃' },
          { value: 'D', text: 'CCl₄' }
        ]"
        correct-value="A"
        correct-feedback="Correct. Replacing one hydrogen gives chloromethane, CH₃Cl, together with HCl."
        wrong-feedback="One substitution replaces only one hydrogen atom. The product is CH₃Cl; the other formulae come from further substitutions."
      />
    </div>
  </section>
</template>
