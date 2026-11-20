<script setup>
import LessonHeading from '../../lessons/LessonHeading.vue'
import QuickCheck from '../../QuickCheck.vue'
import AlkaneLadderLab from './AlkaneLadderLab.vue'
</script>

<template>
  <section id="lesson-1" class="lesson" aria-labelledby="lesson-1-title">
    <LessonHeading
      id="lesson-1"
      :number="1"
      title="The alkane family and chain isomers"
      objective="Define alkanes, use the general formula, name their main sources, recognise chain isomers and describe the physical gradation of the family."
    />

    <div class="prose">
      <p>
        Natural gas burns with a clean blue flame in a kitchen hob. Petrol and diesel power vehicles.
        Both come from the same broad family of compounds: the <strong>alkanes</strong>. They are the
        simplest hydrocarbons, and they are the starting point for studying how a family of carbon
        compounds behaves.
      </p>

      <h3>What is an alkane?</h3>
      <p>
        A hydrocarbon contains only carbon and hydrogen. In an alkane, every carbon–carbon bond is
        a single bond. Each carbon atom still forms four covalent bonds in total, so the remaining
        bonds join carbon to hydrogen.
      </p>

      <div class="definition">
        <span class="definition__label">Definition</span>
        <p>
          <strong>Alkanes</strong> are hydrocarbons in which all the carbon–carbon bonds are single
          bonds. They are described as <strong>saturated</strong> because they contain no double or
          triple bonds. Their older name is <strong>paraffins</strong>.
        </p>
      </div>

      <p>
        The general formula of the alkanes is <span class="formula">CₙH₂ₙ₊₂</span>, where
        <em>n</em> is the number of carbon atoms. Check it for the first few members: methane is
        <span class="formula">CH₄</span>, ethane is <span class="formula">C₂H₆</span> and propane
        is <span class="formula">C₃H₈</span>. Substituting <em>n</em> = 1, 2 and 3 gives these
        formulae.
      </p>

      <div class="misconception">
        <span class="tag">Common misconception</span>
        <p>
          “Saturated” does not mean that the compound cannot react. It means that the carbon atoms
          are already joined to as many atoms as their four bonds allow, with no double or triple
          carbon–carbon bonds. Alkanes can still react by substitution, as later lessons show.
        </p>
      </div>

      <h3>Where alkanes come from</h3>
      <p>
        The two everyday sources named in the syllabus are <strong>natural gas</strong> and
        <strong>petroleum</strong>. Natural gas is mainly methane. Petroleum is a mixture of
        hydrocarbons that is separated into useful fractions by fractional distillation.
      </p>
      <ul>
        <li><strong>Natural gas:</strong> mainly methane, with smaller amounts of ethane and other gases.</li>
        <li><strong>Petroleum:</strong> a mixture of alkanes and other hydrocarbons, separated into petrol, kerosene, diesel and other fractions.</li>
      </ul>

      <h3>Burning: a first look</h3>
      <p>
        Alkanes burn in oxygen. With plenty of air they burn completely to carbon dioxide and water
        vapour, releasing a large amount of energy:
      </p>
      <p class="formula">CH₄ + 2O₂ → CO₂ + 2H₂O</p>
      <p>
        With a limited supply of air the combustion is incomplete. Carbon monoxide, a poisonous gas,
        and soot (carbon) may form. This preview is developed with equations in Lesson 3.
      </p>

      <h3>Chain isomers</h3>
      <p>
        Alkanes with the same molecular formula can have different carbon skeletons. These are
        <strong>chain isomers</strong>: same molecular formula, different arrangement of the carbon
        chain.
      </p>
      <p>
        Butane and 2-methylpropane both have the molecular formula
        <span class="formula">C₄H₁₀</span>. Butane has a straight four-carbon chain. In
        2-methylpropane the same four carbon atoms are arranged with a three-carbon parent chain and
        a methyl branch, so the skeleton is branched.
      </p>
      <p>
        Pentane, <span class="formula">C₅H₁₂</span>, has three chain isomers: pentane with a straight
        five-carbon chain, 2-methylbutane with a four-carbon parent chain and one methyl branch, and
        2,2-dimethylpropane with a three-carbon parent chain and two methyl branches.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Chain isomers of butane and pentane</caption>
          <thead>
            <tr>
              <th scope="col">Molecular formula</th>
              <th scope="col">Chain isomers</th>
              <th scope="col">Skeleton</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">C₄H₁₀</th>
              <td>Butane and 2-methylpropane</td>
              <td>Straight and branched</td>
            </tr>
            <tr>
              <th scope="row">C₅H₁₂</th>
              <td>Pentane, 2-methylbutane and 2,2-dimethylpropane</td>
              <td>Straight, one branch and two branches</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The number of possible chain isomers grows quickly as the chain gets longer. That is one
        reason the alkane family is so large.
      </p>

      <h3>Physical gradation</h3>
      <p>
        As the carbon chain gets longer, the molecule gets larger and its molar mass increases. The
        intermolecular forces become stronger, so melting point and boiling point rise. The first
        four alkanes are gases at room temperature, the middle members are liquids, and the very
        long-chain members are solids.
      </p>
      <p>
        Use the ladder below to see how the formula, molar mass, state and number of chain isomers
        change with the number of carbon atoms.
      </p>

      <AlkaneLadderLab />

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          When asked to explain a boiling-point trend, link the chain length to molar mass and then
          to the strength of the intermolecular forces. Do not say that the covalent bonds inside the
          molecule get stronger; it is the forces between molecules that matter for boiling.
        </p>
      </div>

      <h3>Check your understanding</h3>

      <QuickCheck
        id="b1-q1"
        question="1. Which formula is the general formula of the alkanes?"
        :options="[
          { value: 'A', text: 'CₙH₂ₙ' },
          { value: 'B', text: 'CₙH₂ₙ₋₂' },
          { value: 'C', text: 'CₙH₂ₙ₊₂' },
          { value: 'D', text: 'CₙH₂ₙ₊₁' }
        ]"
        correct-value="C"
        correct-feedback="Correct. Alkanes follow CₙH₂ₙ₊₂, so methane is CH₄ and ethane is C₂H₆."
        wrong-feedback="The alkane formula has two more hydrogen atoms than twice the number of carbon atoms. That is CₙH₂ₙ₊₂."
      />

      <QuickCheck
        id="b1-q2"
        question="2. Butane and 2-methylpropane both have the formula C₄H₁₀. What is the relationship between them?"
        :options="[
          { value: 'A', text: 'They are position isomers.' },
          { value: 'B', text: 'They are chain isomers.' },
          { value: 'C', text: 'They are functional isomers.' },
          { value: 'D', text: 'They are not isomers because their formulae are different.' }
        ]"
        correct-value="B"
        correct-feedback="Correct. They have the same molecular formula but different carbon skeletons, so they are chain isomers."
        wrong-feedback="The molecular formula is the same, but the carbon skeleton differs: one is straight and one is branched. That makes them chain isomers."
      />

      <QuickCheck
        id="b1-q3"
        question="3. Why are alkanes described as saturated?"
        :options="[
          { value: 'A', text: 'They contain only single bonds between carbon atoms.' },
          { value: 'B', text: 'They contain at least one double bond.' },
          { value: 'C', text: 'They can add hydrogen easily across a double bond.' },
          { value: 'D', text: 'They contain only carbon atoms and no hydrogen.' }
        ]"
        correct-value="A"
        correct-feedback="Correct. Every carbon–carbon bond in an alkane is a single bond, so the carbon atoms are saturated with single bonds."
        wrong-feedback="Saturation refers to the absence of double or triple carbon–carbon bonds. Alkanes have only single bonds."
      />
    </div>
  </section>
</template>
