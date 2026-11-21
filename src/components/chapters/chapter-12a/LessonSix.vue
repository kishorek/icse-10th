<script setup>
import LessonHeading from '../../lessons/LessonHeading.vue'
import QuickCheck from '../../QuickCheck.vue'
import LessonVisual from '../../visuals/LessonVisual.vue'
import MemoryHook from '../../MemoryHook.vue'
import IsomerTreeVisual from '../../visuals/chapter-12a/IsomerTreeVisual.vue'
import IsomerExplorer from './IsomerExplorer.vue'
</script>

<template>
  <section id="lesson-6" class="lesson" aria-labelledby="lesson-6-title">
    <LessonHeading
      id="lesson-6"
      :number="6"
      title="Isomerism"
      objective="Define structural isomerism, identify chain, position and functional isomers, classify a pair, and explain why the number of isomers rises with the number of carbon atoms."
    />

    <div class="prose">
      <p>
        Carbon can join its atoms in many different arrangements while keeping the same number of
        each kind of atom. Butane and 2-methylpropane are both
        <span class="formula">C₄H₁₀</span>, yet they are different compounds with different
        structures and different physical properties. This is structural isomerism.
      </p>

      <div class="definition">
        <span class="definition__label">Definition</span>
        <p>
          <strong>Structural isomers</strong> are compounds that have the same molecular formula but
          different structural formulae. The atoms are the same, but the way they are joined is
          different.
        </p>
      </div>

      <p>
        A molecular formula counts the atoms, for example <span class="formula">C₄H₁₀</span>. A
        structural formula shows how those atoms are connected, for example
        <span class="formula">CH₃–CH₂–CH₂–CH₃</span>. Isomers therefore share a molecular formula
        but not a structural formula. They are different substances, not different names for one
        substance.
      </p>

      <h3>Chain isomerism</h3>
      <p>
        <strong>Chain isomers</strong> have different carbon skeletons. The parent chain may be
        straight or branched, but the same atoms are present. The number of carbon atoms in the
        longest chain can change because a branch uses carbon atoms that could otherwise lengthen the
        main chain.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Chain isomers of C₄H₁₀ and C₅H₁₂</caption>
          <thead>
            <tr>
              <th scope="col">Molecular formula</th>
              <th scope="col">Name</th>
              <th scope="col">Structural formula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" rowspan="2" class="formula">C₄H₁₀</th>
              <td>Butane</td>
              <td class="formula">CH₃–CH₂–CH₂–CH₃</td>
            </tr>
            <tr>
              <td>2-Methylpropane</td>
              <td class="formula">CH₃–CH(CH₃)–CH₃</td>
            </tr>
            <tr>
              <th scope="row" rowspan="3" class="formula">C₅H₁₂</th>
              <td>Pentane</td>
              <td class="formula">CH₃–CH₂–CH₂–CH₂–CH₃</td>
            </tr>
            <tr>
              <td>2-Methylbutane</td>
              <td class="formula">CH₃–CH(CH₃)–CH₂–CH₃</td>
            </tr>
            <tr>
              <td>2,2-Dimethylpropane</td>
              <td class="formula">CH₃–C(CH₃)₂–CH₃</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Butane has a four-carbon chain. 2-Methylpropane has a three-carbon parent chain with a
        methyl branch, so its longest chain is shorter. The two compounds both have four carbon atoms
        and ten hydrogen atoms, but their skeletons differ. Notice that the name
        <span class="formula">2-methylpropane</span> needs a locant: the methyl group is on carbon 2
        of the three-carbon parent chain.
      </p>

      <h3>Position isomerism</h3>
      <p>
        <strong>Position isomers</strong> have the same carbon skeleton and the same functional
        group, but the functional group or multiple bond is attached at a different position. The
        molecular formula and the type of group are unchanged; only the locant changes.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Position isomers with a double bond and with an alcohol group</caption>
          <thead>
            <tr>
              <th scope="col">Family</th>
              <th scope="col">Isomer</th>
              <th scope="col">Structural formula</th>
              <th scope="col">Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" rowspan="2">Alkene, C₄H₈</th>
              <td>But-1-ene</td>
              <td class="formula">CH₂=CH–CH₂–CH₃</td>
              <td>Double bond starts at carbon 1.</td>
            </tr>
            <tr>
              <td>But-2-ene</td>
              <td class="formula">CH₃–CH=CH–CH₃</td>
              <td>Double bond starts at carbon 2.</td>
            </tr>
            <tr>
              <th scope="row" rowspan="2">Alcohol, C₃H₈O</th>
              <td>Propan-1-ol</td>
              <td class="formula">CH₃–CH₂–CH₂–OH</td>
              <td>–OH is on carbon 1.</td>
            </tr>
            <tr>
              <td>Propan-2-ol</td>
              <td class="formula">CH₃–CH(OH)–CH₃</td>
              <td>–OH is on carbon 2.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        In but-1-ene the double bond is between carbon 1 and carbon 2. In but-2-ene it is between
        carbon 2 and carbon 3. Both have the formula C₄H₈ and both are alkenes, so the change is a
        change of position, not a change of family.
      </p>

      <h3>Functional isomerism (extension)</h3>
      <p>
        <strong>Functional isomers</strong> have the same molecular formula but different functional
        groups. Ethanol and methoxymethane both have the formula
        <span class="formula">C₂H₆O</span>, but ethanol is an alcohol and methoxymethane is an ether.
        Their chemical properties differ because the functional groups differ.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Functional isomers of C₂H₆O and C₃H₆O</caption>
          <thead>
            <tr>
              <th scope="col">Molecular formula</th>
              <th scope="col">Name</th>
              <th scope="col">Structural formula</th>
              <th scope="col">Family</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" rowspan="2" class="formula">C₂H₆O</th>
              <td>Ethanol</td>
              <td class="formula">CH₃–CH₂–OH</td>
              <td>Alcohol</td>
            </tr>
            <tr>
              <td>Methoxymethane</td>
              <td class="formula">CH₃–O–CH₃</td>
              <td>Ether</td>
            </tr>
            <tr>
              <th scope="row" rowspan="2" class="formula">C₃H₆O</th>
              <td>Propanal</td>
              <td class="formula">CH₃–CH₂–CHO</td>
              <td>Aldehyde</td>
            </tr>
            <tr>
              <td>Propanone</td>
              <td class="formula">CH₃–CO–CH₃</td>
              <td>Ketone</td>
            </tr>
          </tbody>
        </table>
      </div>

      <aside class="exam-tip">
        <span class="tag">Extension</span>
        <p>
          Functional isomerism is included here as a labelled extension. The 2027 syllabus names
          chain and position isomerism for examination, but the comparison with ethanol and
          methoxymethane helps you see that the same molecular formula can produce a different
          family altogether.
        </p>
      </aside>

      <h3>Classifying a pair</h3>
      <p>
        Ask two questions in order. First, do the two compounds have the same molecular formula? If
        not, they are not isomers. Second, compare the functional groups before the carbon skeleton,
        because a different functional group changes the whole family.
      </p>
      <ol>
        <li>
          If the functional group has changed, the pair shows
          <strong>functional isomerism</strong>, labelled as an extension at this level.
        </li>
        <li>
          If the functional group is unchanged but the carbon skeleton has changed, the pair shows
          <strong>chain isomerism</strong>.
        </li>
        <li>
          If the functional group and skeleton are unchanged but the position of the group or bond
          has changed, the pair shows <strong>position isomerism</strong>.
        </li>
      </ol>

      <div class="misconception">
        <span class="tag">Common misconception</span>
        <p>
          Different physical properties do not prove that two compounds are isomers. Isomerism
          depends on having the same molecular formula. Always compare the formulae first, then
          compare the structures.
        </p>
      </div>

      <h3>Drawing all isomers of a small formula</h3>
      <p>
        For a small molecular formula, work systematically rather than guessing. Start with the
        longest possible chain, then shorten the chain one carbon at a time and place the remaining
        carbon atoms as branches. Stop when no new skeleton can be drawn.
      </p>
      <ol>
        <li>Write the longest straight chain first, for example four carbons for C₄H₁₀.</li>
        <li>Shorten the parent chain and add one branch, then check that every carbon still has four bonds.</li>
        <li>Move the branch to each different position; positions related by symmetry are the same isomer.</li>
        <li>If a double bond or –OH is present, repeat the skeleton with the group at each different position.</li>
        <li>Check the molecular formula of every drawing before you count it.</li>
      </ol>
      <p>
        For C₄H₁₀ this gives butane and 2-methylpropane. For C₅H₁₂ it gives pentane, 2-methylbutane
        and 2,2-dimethylpropane. For C₄H₈, the double bond adds position isomers such as but-1-ene
        and but-2-ene, as well as the branched 2-methylpropene. These examples are acyclic alkene
        isomers; cyclic isomers such as cyclobutane and methylcyclopropane also exist but are
        outside this chapter’s scope.
      </p>

      <div class="definition">
        <span class="definition__label">Drawing prompt</span>
        <p>
          Draw every structural isomer of <span class="formula">C₅H₁₂</span> on paper. Label the
          longest chain in each drawing and check that no two drawings are the same structure rotated
          or renamed.
        </p>
      </div>

      <details class="lab lab-panel">
        <summary>Reveal the checklist for C₅H₁₂</summary>
        <ul>
          <li>Pentane: a straight five-carbon chain.</li>
          <li>2-Methylbutane: a four-carbon parent chain with one methyl group on carbon 2.</li>
          <li>2,2-Dimethylpropane: a three-carbon parent chain with two methyl groups on carbon 2.</li>
          <li>No other skeleton is possible without repeating one of these under a different orientation.</li>
          <li>All three drawings must contain five carbon atoms and twelve hydrogen atoms.</li>
        </ul>
      </details>

      <h3>Why the number of isomers rises with carbon count</h3>
      <p>
        Each additional carbon atom creates new ways to branch the skeleton or to place a functional
        group. For alkane skeletons, one or two carbon atoms give only one chain arrangement; chain
        branching first becomes possible at four carbon atoms. With four carbon atoms there are two
        chain isomers of C₄H₁₀, and with five carbon atoms there are three chain isomers of C₅H₁₂.
        The number grows quickly because every new carbon can lengthen a chain, start a branch, or
        take part in a different position for a multiple bond or functional group.
      </p>
      <p>
        This is one reason organic chemistry contains so many compounds. A molecular formula does not
        identify a single substance; the structure must also be specified.
      </p>

      <IsomerExplorer />

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          When asked to classify a pair, write the molecular formula of each compound first, then
          state exactly what differs: skeleton, position or functional group. A clear reason earns
          the mark; the label alone may not.
        </p>
      </div>

      <h3>Check your understanding</h3>

      <LessonVisual
        title="Same formula, three doors"
        caption="Chain, position and functional isomerism are three different answers to “what changed?”"
        description="Three branches compare C₄H₁₀ chain isomers, C₄H₈ position isomers and C₂H₆O functional isomers."
        :notice="[
          'Start with the same molecular formula.',
          'Ask whether the skeleton, the position or the functional group changed.',
          'Different structures can still have the same formula.'
        ]"
      >
        <IsomerTreeVisual />
      </LessonVisual>

      <MemoryHook
        technique="Story"
        title="Same formula, three doors"
        aid="A molecule walks up to three doors. Behind each door, one thing has changed."
        :mapping="[
          { cue: 'Door 1: the skeleton forks', target: 'Chain isomerism', meaning: 'Same functional group, different carbon skeleton — butane and 2-methylpropane.' },
          { cue: 'Door 2: the group moves', target: 'Position isomerism', meaning: 'Same functional group, different position — but-1-ene and but-2-ene.' },
          { cue: 'Door 3: the group changes', target: 'Functional isomerism (extension)', meaning: 'Different functional group — ethanol and methoxymethane.' }
        ]"
        recall="Cover the mapping. Classify butane/2-methylpropane, but-1-ene/but-2-ene and ethanol/methoxymethane by naming the door."
      />

      <QuickCheck
        id="a6-q1"
        question="1. Which statement defines structural isomers?"
        :options="[
          { value: 'A', text: 'Compounds with different molecular formulae but the same structure' },
          { value: 'B', text: 'Compounds with the same molecular formula but different structural formulae' },
          { value: 'C', text: 'Compounds with the same structural formula but different names' },
          { value: 'D', text: 'Compounds with the same molecular formula and the same structure' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Structural isomers share a molecular formula but have different structural formulae."
        wrong-feedback="Isomerism starts with the same molecular formula. The difference is in how the atoms are joined, so the structural formulae differ."
      />

      <QuickCheck
        id="a6-q2"
        question="2. Butane and 2-methylpropane both have the formula C₄H₁₀. What type of isomerism do they show?"
        :options="[
          { value: 'A', text: 'Position isomerism' },
          { value: 'B', text: 'Functional isomerism' },
          { value: 'C', text: 'Chain isomerism' },
          { value: 'D', text: 'No isomerism, because the formula is the same' }
        ]"
        correct-value="C"
        correct-feedback="Correct. The carbon skeleton changes from a straight four-carbon chain to a branched three-carbon chain, so they are chain isomers."
        wrong-feedback="Compare the skeletons. Butane has a straight four-carbon chain, while 2-methylpropane has a three-carbon parent chain with a methyl branch. That is chain isomerism."
      />

      <QuickCheck
        id="a6-q3"
        question="3. Ethanol and methoxymethane both have the formula C₂H₆O. What type of isomerism do they show?"
        :options="[
          { value: 'A', text: 'Chain isomerism' },
          { value: 'B', text: 'Position isomerism' },
          { value: 'C', text: 'No isomerism, because the formula is the same' },
          { value: 'D', text: 'Functional isomerism (an extension)' }
        ]"
        correct-value="D"
        correct-feedback="Correct. Ethanol is an alcohol and methoxymethane is an ether, so the functional group differs. This comparison is a labelled extension."
        wrong-feedback="The two compounds have the same molecular formula but different functional groups: –OH in ethanol and an ether oxygen in methoxymethane. That is functional isomerism, treated here as an extension."
      />
    </div>
  </section>
</template>
