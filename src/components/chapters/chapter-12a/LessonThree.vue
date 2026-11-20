<script setup>
import LessonHeading from '../../lessons/LessonHeading.vue'
import QuickCheck from '../../QuickCheck.vue'
import FunctionalGroupLab from './FunctionalGroupLab.vue'
import { functionalGroups } from '../../../data/chapter-12a/functionalGroups'
</script>

<template>
  <section id="lesson-3" class="lesson" aria-labelledby="lesson-3-title">
    <LessonHeading
      id="lesson-3"
      :number="3"
      title="Structures, alkyl groups and functional groups"
      objective="Read structural and condensed formulae, name alkyl groups, classify carbon atoms as primary to quaternary, and recognise the nine functional groups that define organic families."
    />

    <div class="prose">
      <p>
        A molecular formula tells you how many atoms of each element a molecule contains, but not
        how they are joined. Two compounds can share a molecular formula and still behave
        differently because their atoms are arranged differently. To show the arrangement, chemists
        use structural formulae and carbon skeletons.
      </p>

      <h3>Structural, condensed and skeletal formulae</h3>
      <p>
        A <strong>structural formula</strong> shows every atom and every bond. A
        <strong>condensed structural formula</strong> groups the atoms attached to each carbon and
        writes the carbon chain in one line. A <strong>carbon skeleton</strong> draws only the
        carbon–carbon bonds as lines; the hydrogen atoms are understood from carbon's four bonds.
      </p>

      <pre class="structure-block">Ethane, C₂H₆

  H   H
  |   |
H–C–C–H
  |   |
  H   H

Condensed: CH₃–CH₃
Skeleton:  C–C</pre>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Three ways to write the first four alkanes</caption>
          <thead>
            <tr>
              <th scope="col">Alkane</th>
              <th scope="col">Molecular formula</th>
              <th scope="col">Condensed structural formula</th>
              <th scope="col">Carbon skeleton</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Methane</th>
              <td class="formula">CH₄</td>
              <td class="formula">CH₄</td>
              <td class="formula">C</td>
            </tr>
            <tr>
              <th scope="row">Ethane</th>
              <td class="formula">C₂H₆</td>
              <td class="formula">CH₃–CH₃</td>
              <td class="formula">C–C</td>
            </tr>
            <tr>
              <th scope="row">Propane</th>
              <td class="formula">C₃H₈</td>
              <td class="formula">CH₃–CH₂–CH₃</td>
              <td class="formula">C–C–C</td>
            </tr>
            <tr>
              <th scope="row">Butane</th>
              <td class="formula">C₄H₁₀</td>
              <td class="formula">CH₃–CH₂–CH₂–CH₃</td>
              <td class="formula">C–C–C–C</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Check every carbon in a structural formula. It must have exactly four bonds. In ethane, each
        carbon is bonded to three hydrogen atoms and to the other carbon, giving four bonds in
        total. That is tetravalency at work.
      </p>

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          A condensed formula still shows the order of atoms in the chain. Butane is
          CH₃–CH₂–CH₂–CH₃, not just C₄H₁₀. The carbon skeleton C–C–C–C carries the same information
          with the hydrogen atoms left out.
        </p>
      </div>

      <h3>Alkyl groups</h3>
      <p>
        Remove one hydrogen atom from an alkane and the remaining group is an
        <strong>alkyl group</strong>. Alkyl groups are not stable compounds on their own; they are
        parts of larger molecules, usually attached to a functional group or another carbon chain.
        Their general formula is <span class="formula">CₙH₂ₙ₊₁</span>.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Common alkyl groups</caption>
          <thead>
            <tr>
              <th scope="col">Alkane</th>
              <th scope="col">Alkyl group</th>
              <th scope="col">Formula</th>
              <th scope="col">Condensed group</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Methane</th>
              <td>Methyl</td>
              <td class="formula">CH₃</td>
              <td class="formula">CH₃–</td>
            </tr>
            <tr>
              <th scope="row">Ethane</th>
              <td>Ethyl</td>
              <td class="formula">C₂H₅</td>
              <td class="formula">CH₃CH₂–</td>
            </tr>
            <tr>
              <th scope="row">Propane</th>
              <td>Propyl</td>
              <td class="formula">C₃H₇</td>
              <td class="formula">CH₃CH₂CH₂–</td>
            </tr>
            <tr>
              <th scope="row">Butane</th>
              <td>Butyl</td>
              <td class="formula">C₄H₉</td>
              <td class="formula">CH₃CH₂CH₂CH₂–</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The dash in CH₃– marks the bond that was occupied by the removed hydrogen atom. For example,
        in chloromethane <span class="formula">CH₃Cl</span> a methyl group is attached to a chlorine
        atom.
      </p>

      <h3>Primary, secondary, tertiary and quaternary carbon atoms</h3>
      <p>
        Carbon atoms in a skeleton can be classified by how many other carbon atoms they are directly
        bonded to. Count only carbon neighbours; hydrogen atoms do not affect the class.
      </p>

      <div class="definition">
        <span class="definition__label">Definitions</span>
        <p>
          A <strong>primary (1°) carbon</strong> is bonded to one other carbon atom. A
          <strong>secondary (2°) carbon</strong> is bonded to two. A
          <strong>tertiary (3°) carbon</strong> is bonded to three, and a
          <strong>quaternary (4°) carbon</strong> is bonded to four.
        </p>
      </div>

      <p>
        In 2-methylpropane, <span class="formula">CH₃–CH(CH₃)–CH₃</span>, the central carbon is
        bonded to three other carbon atoms, so it is tertiary. The three outer carbons are each
        bonded to one other carbon, so they are primary. In 2,2-dimethylpropane,
        <span class="formula">C(CH₃)₄</span>, the central carbon is bonded to four others and is
        quaternary.
      </p>

      <div class="misconception">
        <span class="tag">Common misconception</span>
        <p>
          A primary carbon is not “the first carbon in the chain”. The label depends on the number of
          carbon neighbours. A carbon at the end of a chain is usually primary because it has only one
          carbon neighbour.
        </p>
      </div>

      <h3>Functional groups</h3>
      <div class="definition">
        <span class="definition__label">Definition</span>
        <p>
          A <strong>functional group</strong> is an atom or group of atoms that replaces hydrogen in a
          hydrocarbon and gives the compound its characteristic chemical properties.
        </p>
      </div>

      <p>
        The carbon skeleton controls the size and shape of a molecule, but the functional group
        usually controls how it reacts. Ethanol and ethane both contain two carbon atoms, yet ethanol
        reacts with sodium and ethane does not, because ethanol contains the –OH group. Compounds with
        the same functional group form a family and show similar chemical properties.
      </p>

      <FunctionalGroupLab />

      <h3>The nine functional-group families</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Functional groups, general formulae and naming endings</caption>
          <thead>
            <tr>
              <th scope="col">Family</th>
              <th scope="col">Functional group</th>
              <th scope="col">General formula</th>
              <th scope="col">Prefix</th>
              <th scope="col">Suffix</th>
              <th scope="col">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="group in functionalGroups" :key="group.id">
              <th scope="row">{{ group.name }}</th>
              <td class="formula">{{ group.group }}</td>
              <td class="formula">{{ group.general }}</td>
              <td>{{ group.prefix }}</td>
              <td>{{ group.suffix }}</td>
              <td>{{ group.exampleName }} <span class="formula">{{ group.example }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The table gives the naming clue for each family, but naming is studied in Lesson 5. For now,
        use the group and the suffix to recognise the family. A compound with –COOH is a carboxylic
        acid; a compound with –OH is an alcohol. The double and triple carbon–carbon bonds are also
        functional groups, which is why alkenes and alkynes form families of their own.
      </p>

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          Learn the functional group before the suffix. The group is the chemical reason for the
          family's behaviour; the suffix is only the naming label attached to it.
        </p>
      </div>

      <h3>Check your understanding</h3>

      <QuickCheck
        id="a3-q1"
        question="1. Which statement best defines a functional group?"
        :options="[
          { value: 'A', text: 'The longest continuous chain of carbon atoms in a molecule.' },
          { value: 'B', text: 'An atom or group of atoms that replaces hydrogen in a hydrocarbon and gives the compound its characteristic properties.' },
          { value: 'C', text: 'A carbon atom bonded to four other carbon atoms.' },
          { value: 'D', text: 'The total number of hydrogen atoms in a molecule.' }
        ]"
        correct-value="B"
        correct-feedback="Correct. A functional group is the atom or group that replaces hydrogen and gives the molecule its characteristic chemical behaviour."
        wrong-feedback="A functional group is about the reactive part of the molecule, not the length of the chain or the carbon count. It is the atom or group that replaces hydrogen."
      />

      <QuickCheck
        id="a3-q2"
        question="2. A compound contains the –COOH group. Which family does it belong to?"
        :options="[
          { value: 'A', text: 'Alcohol' },
          { value: 'B', text: 'Aldehyde' },
          { value: 'C', text: 'Carboxylic acid' },
          { value: 'D', text: 'Ester' }
        ]"
        correct-value="C"
        correct-feedback="Correct. The –COOH group is the carboxyl group, so the compound is a carboxylic acid, such as ethanoic acid CH₃COOH."
        wrong-feedback="The –COOH group contains both C=O and –OH, but together they form the carboxyl group. That makes the compound a carboxylic acid. An alcohol has –OH only."
      />

      <QuickCheck
        id="a3-q3"
        question="3. Which formula represents an alcohol?"
        :options="[
          { value: 'A', text: 'C₂H₅OH' },
          { value: 'B', text: 'CH₃COOH' },
          { value: 'C', text: 'CH₃CHO' },
          { value: 'D', text: 'CH₃COCH₃' }
        ]"
        correct-value="A"
        correct-feedback="Correct. C₂H₅OH is ethanol, which contains the hydroxyl group –OH and is therefore an alcohol."
        wrong-feedback="Look for a molecule whose only oxygen-containing functional group is –OH. CH₃COOH is a carboxylic acid, CH₃CHO an aldehyde and CH₃COCH₃ a ketone."
      />
    </div>
  </section>
</template>

<style scoped>
.structure-block {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 0.5rem;
  background: var(--paper-soft);
  font-family: 'Courier New', monospace;
  font-size: 0.86rem;
  line-height: 1.45;
  white-space: pre;
}
</style>
