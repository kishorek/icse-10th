<script setup>
import LessonHeading from '../../lessons/LessonHeading.vue'
import QuickCheck from '../../QuickCheck.vue'
import HomologousLadderLab from './HomologousLadderLab.vue'
import { homologousSeries } from '../../../data/chapter-12a/homologousSeries'
</script>

<template>
  <section id="lesson-4" class="lesson" aria-labelledby="lesson-4-title">
    <LessonHeading
      id="lesson-4"
      :number="4"
      title="Homologous series"
      objective="Define a homologous series, use the CH₂ and 14 u steps, apply the general formulae, explain the gradation in properties, and predict the next member of a series."
    />

    <div class="prose">
      <p>
        Alkanes, alkenes, alkynes and alcohols each form a family of compounds built on the same
        pattern. The members of one family can be arranged in order of increasing molecular size.
        Such an ordered family is called a homologous series.
      </p>

      <div class="definition">
        <span class="definition__label">Definition</span>
        <p>
          A <strong>homologous series</strong> is a family of organic compounds with the same general
          formula, similar structure and similar chemical properties, in which successive members
          differ by one <span class="formula">CH₂</span> unit.
        </p>
      </div>

      <p>
        The definition has four parts, and all four must hold. The members share a general formula,
        share the same functional group or bond pattern, show similar chemical reactions, and differ
        from one another by a constant <span class="formula">CH₂</span> step.
      </p>

      <h3>The CH₂ step and the 14 u difference</h3>
      <p>
        Moving from one member to the next adds one carbon atom and two hydrogen atoms. That group is
        <span class="formula">CH₂</span>. Its mass is the mass of one carbon atom plus two hydrogen
        atoms:
      </p>

      <p class="formula">CH₂ = 12 u + (2 × 1 u) = 14 u</p>

      <p>
        So the molar mass increases by 14 u at every step. Methane
        <span class="formula">CH₄</span> has a molar mass of 16 u and ethane
        <span class="formula">C₂H₆</span> has 30 u; the difference is 14 u. Ethane to propane is
        30 u to 44 u, again 14 u. This constant step is the test that a list of formulae belongs to
        one homologous series.
      </p>

      <h3>General formulae of four series</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>General formulae and the first members of four homologous series</caption>
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
        The same CH₂ step applies to every series. In the alcohol series, methanol
        <span class="formula">CH₄O</span> is followed by ethanol
        <span class="formula">C₂H₆O</span>, then propan-1-ol
        <span class="formula">C₃H₈O</span>. The formulae change, but the –OH functional group stays
        the same.
      </p>

      <h3>Gradation in physical properties</h3>
      <p>
        Within a homologous series, physical properties change gradually as the molecules get larger.
        Melting point, boiling point and density generally increase. The reason is that larger
        molecules have stronger forces between them, so more energy is needed to separate them.
      </p>

      <ul>
        <li><strong>Boiling point and melting point</strong> generally rise with increasing molar mass.</li>
        <li><strong>Density</strong> generally rises, though the change is small in the lower members.</li>
        <li><strong>Physical state</strong> can change from gas to liquid to solid as the chain grows.</li>
        <li><strong>Solubility</strong> in water can fall as the hydrocarbon part becomes larger.</li>
      </ul>

      <p>
        These are trends, not strict rules, and the exact values must come from data. The important
        exam point is the direction of the trend and its cause: larger molecules, stronger
        intermolecular forces, higher melting and boiling points.
      </p>

      <h3>Similar chemical properties</h3>
      <p>
        Members of a homologous series share the same functional group, so they react in similar
        ways. All alcohols, for example, contain –OH and show the characteristic reactions of the
        alcohol family. All alkanes contain only single carbon–carbon bonds and tend to undergo
        substitution. The chain length changes the physical properties far more than the chemical
        behaviour.
      </p>

      <h3>Why homologous series matter</h3>
      <ul>
        <li>The general formula lets you write the formula of any member once you know n.</li>
        <li>The CH₂ step lets you predict the next member and its molar mass.</li>
        <li>Similar chemical properties let you learn one member and apply the pattern to the family.</li>
        <li>Systematic study replaces memorising every compound one by one.</li>
      </ul>

      <h3>Worked example: find the next member</h3>
      <p>
        Propane has the formula <span class="formula">C₃H₈</span> and a molar mass of 44 u. It belongs
        to the alkane series, whose general formula is <span class="formula">CₙH₂ₙ₊₂</span>. Find the
        next member.
      </p>
      <ol>
        <li>Identify the series from the formula: C₃H₈ fits CₙH₂ₙ₊₂, so it is an alkane.</li>
        <li>Add one CH₂ unit: C₃H₈ + CH₂ gives C₄H₁₀.</li>
        <li>Name the member: C₄H₁₀ is butane.</li>
        <li>Add 14 u to the molar mass: 44 u + 14 u = 58 u.</li>
      </ol>
      <p>
        The next member is butane, <span class="formula">C₄H₁₀</span>, with a molar mass of 58 u.
        Repeating the step once more gives pentane, <span class="formula">C₅H₁₂</span>, at 72 u.
      </p>

      <HomologousLadderLab />

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          Do not use the 14 u difference on its own to identify a series. A list of formulae must
          also share the same general formula and functional group. State both the CH₂ step and the
          similar chemical properties when you define a homologous series.
        </p>
      </div>

      <h3>Check your understanding</h3>

      <QuickCheck
        id="a4-q1"
        question="1. Successive members of a homologous series differ by:"
        :options="[
          { value: 'A', text: 'CH₃' },
          { value: 'B', text: 'CH₂' },
          { value: 'C', text: 'C₂H₄' },
          { value: 'D', text: 'H₂O' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Each successive member differs by one CH₂ unit."
        wrong-feedback="The constant step is one carbon atom and two hydrogen atoms, which is CH₂."
      />

      <QuickCheck
        id="a4-q2"
        question="2. What is the increase in molar mass between successive members of a homologous series?"
        :options="[
          { value: 'A', text: '12 u' },
          { value: 'B', text: '16 u' },
          { value: 'C', text: '14 u' },
          { value: 'D', text: '28 u' }
        ]"
        correct-value="C"
        correct-feedback="Correct. CH₂ has a mass of 12 + 2 = 14 u, so the molar mass rises by 14 u each step."
        wrong-feedback="Add the mass of one carbon atom (12 u) and two hydrogen atoms (2 × 1 u). The step is 14 u."
      />

      <QuickCheck
        id="a4-q3"
        question="3. Which is the general formula of the alkenes?"
        :options="[
          { value: 'A', text: 'CₙH₂ₙ' },
          { value: 'B', text: 'CₙH₂ₙ₊₂' },
          { value: 'C', text: 'CₙH₂ₙ₋₂' },
          { value: 'D', text: 'CₙH₂ₙ₊₁OH' }
        ]"
        correct-value="A"
        correct-feedback="Correct. Alkenes contain one C=C double bond and have the general formula CₙH₂ₙ, as in ethene C₂H₄."
        wrong-feedback="Alkenes are unsaturated compounds with one C=C double bond. Their general formula is CₙH₂ₙ. CₙH₂ₙ₊₂ belongs to alkanes and CₙH₂ₙ₋₂ to alkynes."
      />
    </div>
  </section>
</template>
