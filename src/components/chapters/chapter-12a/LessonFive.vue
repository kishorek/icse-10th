<script setup>
import LessonHeading from '../../lessons/LessonHeading.vue'
import QuickCheck from '../../QuickCheck.vue'
import NameBuilderLab from './NameBuilderLab.vue'
</script>

<template>
  <section id="lesson-5" class="lesson" aria-labelledby="lesson-5-title">
    <LessonHeading
      id="lesson-5"
      :number="5"
      title="Naming organic compounds"
      objective="Distinguish trivial names from IUPAC names, identify the root, suffix and prefix, apply the longest-chain and lowest-locant rules, and build or draw a structure from a systematic name."
    />

    <div class="prose">
      <p>
        Organic compounds have two kinds of name. A <strong>trivial name</strong> is a traditional
        name that often comes from a source or a property: formic acid from ants, acetic acid from
        vinegar, acetone for propanone. Trivial names are useful in the laboratory, but they do not
        tell you the structure, and the same compound may have several of them.
      </p>
      <p>
        An <strong>IUPAC name</strong> is a systematic name built from rules agreed by the
        International Union of Pure and Applied Chemistry. Every part of the name carries
        information, so a chemist can draw the structure from the name alone. That is why the IUPAC
        system is needed for unambiguous communication.
      </p>

      <h3>Three parts of a systematic name</h3>
      <p>
        A systematic name is assembled from a root word, a suffix and one or more prefixes. Read the
        name from left to right and each part answers a different question about the molecule.
      </p>
      <ul>
        <li><strong>Root word</strong> — how many carbon atoms are in the longest chain?</li>
        <li>
          <strong>Primary suffix</strong> — are the carbon–carbon bonds single, double or triple?
        </li>
        <li>
          <strong>Secondary suffix</strong> — which principal functional group is present?
        </li>
        <li>
          <strong>Prefix</strong> — which substituents or ring features are attached to the chain?
        </li>
      </ul>

      <div class="definition">
        <span class="definition__label">Name skeleton</span>
        <p>
          <span class="formula">prefix + root + primary suffix + secondary suffix</span>. For
          example, in <span class="formula">2-bromobutane</span> the prefix is bromo, the root is
          but, and the primary suffix is ane. In <span class="formula">propan-2-ol</span> the root
          is prop and the secondary suffix is ol.
        </p>
      </div>

      <h3>Root words</h3>
      <p>
        The root word counts the carbon atoms in the parent chain. Learn the first ten because they
        recur in every family.
      </p>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Root words for chains of one to ten carbon atoms</caption>
          <thead>
            <tr>
              <th scope="col">Carbon atoms</th>
              <th scope="col">Root word</th>
              <th scope="col">Carbon atoms</th>
              <th scope="col">Root word</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>meth</td>
              <th scope="row">6</th>
              <td>hex</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>eth</td>
              <th scope="row">7</th>
              <td>hept</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>prop</td>
              <th scope="row">8</th>
              <td>oct</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>but</td>
              <th scope="row">9</th>
              <td>non</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>pent</td>
              <th scope="row">10</th>
              <td>dec</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Primary suffixes: the carbon–carbon bond</h3>
      <p>
        The primary suffix is chosen from the type of carbon–carbon bond in the parent chain. Add
        the suffix to the root, then drop a final <em>e</em> when the secondary suffix begins with a
        vowel.
      </p>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Primary suffixes for single, double and triple bonds</caption>
          <thead>
            <tr>
              <th scope="col">Bond in the chain</th>
              <th scope="col">Primary suffix</th>
              <th scope="col">Example</th>
              <th scope="col">Structure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Single C–C bonds</th>
              <td>ane</td>
              <td>propane</td>
              <td class="formula">CH₃–CH₂–CH₃</td>
            </tr>
            <tr>
              <th scope="row">One C=C double bond</th>
              <td>ene</td>
              <td>propene</td>
              <td class="formula">CH₂=CH–CH₃</td>
            </tr>
            <tr>
              <th scope="row">One C≡C triple bond</th>
              <td>yne</td>
              <td>propyne</td>
              <td class="formula">CH≡C–CH₃</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        In propene and propyne the double or triple bond is the unsaturated part of the molecule,
        and its position must be numbered when there is a choice. For example,
        <span class="formula">but-2-ene</span> is <span class="formula">CH₃–CH=CH–CH₃</span>, while
        <span class="formula">but-1-ene</span> is <span class="formula">CH₂=CH–CH₂–CH₃</span>.
      </p>

      <h3>Secondary suffixes: the principal functional group</h3>
      <p>
        The secondary suffix names the principal functional group. It follows the primary suffix,
        and the final <em>e</em> of ane, ene or yne is dropped before a vowel, as in propanol and
        propanal.
      </p>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Secondary suffixes for common functional groups</caption>
          <thead>
            <tr>
              <th scope="col">Functional group</th>
              <th scope="col">Family</th>
              <th scope="col">Secondary suffix</th>
              <th scope="col">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">–OH</th>
              <td>Alcohol</td>
              <td>ol</td>
              <td>propan-2-ol</td>
            </tr>
            <tr>
              <th scope="row">–CHO</th>
              <td>Aldehyde</td>
              <td>al</td>
              <td>ethanal</td>
            </tr>
            <tr>
              <th scope="row">C=O between carbons</th>
              <td>Ketone</td>
              <td>one</td>
              <td>propanone</td>
            </tr>
            <tr>
              <th scope="row">–COOH</th>
              <td>Carboxylic acid</td>
              <td>oic acid</td>
              <td>propanoic acid</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Some groups are named as prefixes instead of suffixes. Halogens and alkyl groups are always
        substituents, so they appear as prefixes. If the molecule contains more than one functional
        group, the group with the higher priority supplies the suffix and the others become
        prefixes. At this level, remember the order: carboxylic acid, then aldehyde, then ketone,
        then alcohol, then alkene or alkyne.
      </p>

      <h3>Prefixes</h3>
      <p>
        Prefixes describe what is attached to the parent chain. A
        <strong>primary prefix</strong> such as cyclo- describes a closed ring. A
        <strong>secondary prefix</strong> names a substituent: an alkyl group or a halogen.
      </p>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Common prefixes</caption>
          <thead>
            <tr>
              <th scope="col">Group</th>
              <th scope="col">Prefix</th>
              <th scope="col">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">–CH₃</th>
              <td>methyl</td>
              <td>2-methylbutane</td>
            </tr>
            <tr>
              <th scope="row">–C₂H₅</th>
              <td>ethyl</td>
              <td>3-ethylpentane</td>
            </tr>
            <tr>
              <th scope="row">–Cl</th>
              <td>chloro</td>
              <td>chloromethane</td>
            </tr>
            <tr>
              <th scope="row">–Br</th>
              <td>bromo</td>
              <td>2-bromobutane</td>
            </tr>
            <tr>
              <th scope="row">Closed ring</th>
              <td>cyclo-</td>
              <td>cyclohexane</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>The longest-chain rule</h3>
      <p>
        First find the <strong>longest continuous chain of carbon atoms</strong>. That chain supplies
        the root word. The chain may bend; a bent line of five carbons is still a five-carbon chain.
        Do not choose a shorter straight-looking path when a longer continuous path exists.
      </p>
      <p>
        If two different chains have the same length, choose the one that carries more substituents
        as the parent chain. This keeps the name as simple as possible and gives the substituents the
        lower locants.
      </p>

      <div class="misconception">
        <span class="tag">Common misconception</span>
        <p>
          The parent chain is not always written in one horizontal row. Rotate the structure in your
          mind and follow every continuous path before deciding the root. In
          2-methylbutane, the parent chain is the four-carbon path, not either three-carbon branch.
        </p>
      </div>

      <h3>Numbering the chain</h3>
      <p>
        Number the parent chain from the end that gives the <strong>lowest locant</strong> to the
        principal functional group. A locant is the number that shows where a group is attached. If
        there is no principal functional group, number to give the lowest locant to the double or
        triple bond, then to the substituents.
      </p>
      <p>
        When two numbering directions give the same locant for the principal group, compare the
        complete set of substituent locants and choose the direction with the
        <strong>lowest sum</strong>. For example, substituents at positions 2 and 4 are preferred to
        positions 3 and 5 because 2 + 4 = 6 is lower than 3 + 5 = 8.
      </p>
      <p>
        If the locant sets are still identical, list the substituents in
        <strong>alphabetical order</strong> in the name. Alphabetical order ignores the
        multiplicative prefixes di, tri and tetra, so “ethyl” comes before “methyl” but
        “dimethyl” is alphabetised under m.
      </p>

      <h3>Multiplicative prefixes</h3>
      <p>
        When the same substituent appears more than once, count it with a multiplicative prefix:
        <strong>di</strong> for two, <strong>tri</strong> for three and <strong>tetra</strong> for
        four. Each copy keeps its own locant, separated by commas.
      </p>
      <ul>
        <li><span class="formula">2,2-dimethylpropane</span> has two methyl groups on carbon 2.</li>
        <li><span class="formula">2,3,4-trimethylpentane</span> has three methyl groups.</li>
        <li><span class="formula">2,2,3,3-tetramethylbutane</span> has four methyl groups.</li>
      </ul>

      <h3>Worked examples</h3>
      <p>
        Read each example as a sequence of decisions: longest chain, suffix, numbering, then
        prefixes in alphabetical order.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Worked IUPAC names and the decisions behind them</caption>
          <thead>
            <tr>
              <th scope="col">Structure</th>
              <th scope="col">Name</th>
              <th scope="col">Reasoning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="formula">CH₃–Cl</th>
              <td>chloromethane</td>
              <td>One carbon gives meth; the –Cl prefix is chloro; the single bond gives ane.</td>
            </tr>
            <tr>
              <th scope="row" class="formula">CH₃–CH(Br)–CH₂–CH₃</th>
              <td>2-bromobutane</td>
              <td>Four carbons give but; numbering from the left puts bromo on 2, not 3.</td>
            </tr>
            <tr>
              <th scope="row" class="formula">CH₃–CH₂–CH₂–OH</th>
              <td>propan-1-ol</td>
              <td>Three carbons give prop; –OH takes the suffix ol and is on carbon 1.</td>
            </tr>
            <tr>
              <th scope="row" class="formula">CH₃–CH(OH)–CH₃</th>
              <td>propan-2-ol</td>
              <td>Three carbons give prop; –OH is on the middle carbon, so the locant is 2.</td>
            </tr>
            <tr>
              <th scope="row" class="formula">CH₃–CHO</th>
              <td>ethanal</td>
              <td>Two carbons give eth; the –CHO aldehyde group gives the suffix al.</td>
            </tr>
            <tr>
              <th scope="row" class="formula">CH₃–CO–CH₃</th>
              <td>propanone</td>
              <td>Three carbons give prop; the ketone group gives one, on carbon 2.</td>
            </tr>
            <tr>
              <th scope="row" class="formula">CH₃–CH₂–COOH</th>
              <td>propanoic acid</td>
              <td>Three carbons give prop; –COOH gives oic acid and is always carbon 1.</td>
            </tr>
            <tr>
              <th scope="row" class="formula">CH₃–CH(CH₃)–CH₂–CH₃</th>
              <td>2-methylbutane</td>
              <td>Longest chain is four carbons; the branch is a methyl on carbon 2.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Guided examples: alkenes, alkynes, ethers and esters</h3>
      <p>
        These families need extra care, so treat them as worked examples rather than builder
        options. For an alkene or alkyne, the multiple bond must receive the lowest possible locant,
        even if that is not the lowest locant for a substituent.
      </p>
      <p>
        In <span class="formula">CH₃–C(Br)=CH–CH(CH₃)–CH₃</span> the longest chain has five
        carbons. Numbering from the left gives the double bond at position 2 and the bromo group at
        2; numbering from the right would give the double bond at 3. The name is therefore
        <strong>2-bromo-4-methylpent-2-ene</strong>. The bromo prefix comes before methyl because b
        precedes m alphabetically.
      </p>
      <p>
        Ethyne, <span class="formula">CH≡CH</span>, is the simplest alkyne. Propyne,
        <span class="formula">CH≡C–CH₃</span>, has three carbons. With a longer chain the triple
        bond is numbered, as in <span class="formula">but-1-yne</span> and
        <span class="formula">but-2-yne</span>.
      </p>
      <p>
        An <strong>ether</strong> has an oxygen atom between two carbon groups. Name the smaller
        group as an alkoxy prefix and the larger as the parent chain:
        <span class="formula">CH₃–O–CH₃</span> is methoxymethane, and
        <span class="formula">CH₃–O–CH₂–CH₃</span> is methoxyethane.
      </p>
      <p>
        An <strong>ester</strong> is named in two parts. The part that comes from the alcohol is
        written first as an alkyl group, and the part from the carboxylic acid becomes an
        <em>-oate</em>. For example, the ester made from ethanol and ethanoic acid is
        <span class="formula">CH₃COOCH₂CH₃</span>, named <strong>ethyl ethanoate</strong>. The
        “ethyl” names the alcohol part and “ethanoate” names the acid part.
      </p>

      <h3>Writing a structure from a name</h3>
      <p>
        Reverse the naming steps to draw a structure. This is a common examination task because it
        tests whether you understand each part of the name rather than just memorising examples.
      </p>
      <ol>
        <li>Read the root word to find the number of carbon atoms in the parent chain.</li>
        <li>Read the suffix to find the principal functional group, then place it on the chain.</li>
        <li>Read the prefixes to find the substituents and attach them at their locants.</li>
        <li>Number the chain so every locant matches the name, then check that every carbon has four bonds.</li>
      </ol>
      <p>
        For <strong>2-methylbutane</strong>, the root but gives a four-carbon chain. The prefix
        methyl adds a CH₃ group on carbon 2, and the suffix ane shows only single bonds. The
        structure is <span class="formula">CH₃–CH(CH₃)–CH₂–CH₃</span>.
      </p>
      <p>
        For <strong>propan-2-ol</strong>, the root prop gives three carbons, the suffix ol places an
        –OH group, and the locant 2 puts it on the middle carbon. The structure is
        <span class="formula">CH₃–CH(OH)–CH₃</span>.
      </p>
      <p>
        For <strong>2-bromo-4-methylpent-2-ene</strong>, the root pent gives five carbons, the
        suffix ene puts a double bond starting at carbon 2, bromo sits on carbon 2 and methyl on
        carbon 4. The structure is
        <span class="formula">CH₃–C(Br)=CH–CH(CH₃)–CH₃</span>.
      </p>

      <NameBuilderLab />

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          Do not write a locant before a group that can only be in one place. Ethanal is not
          “ethan-1-al”, and propanoic acid is not “propan-1-oic acid”; the –CHO and –COOH groups
          must sit at the end of the chain. For alcohols such as propan-2-ol, however, the locant is
          needed because the –OH could be on carbon 1 or carbon 2.
        </p>
      </div>

      <div class="misconception">
        <span class="tag">Common misconception</span>
        <p>
          Numbering does not always start at the end nearer a substituent. The principal functional
          group has priority for the lowest locant. If numbering one way gives –OH at 2 and a methyl
          at 4, while the other way gives –OH at 4 and methyl at 2, choose the direction that puts
          –OH at 2.
        </p>
      </div>

      <h3>Check your understanding</h3>

      <QuickCheck
        id="a5-q1"
        question="1. A carbon skeleton has a five-carbon continuous path and a four-carbon path. Which path supplies the root word?"
        :options="[
          { value: 'A', text: 'The shorter path, because it has fewer branches' },
          { value: 'B', text: 'Any path, because the molecular formula is the same' },
          { value: 'C', text: 'The longest continuous path, here five carbons' },
          { value: 'D', text: 'The path that looks most horizontal on the page' }
        ]"
        correct-value="C"
        correct-feedback="Correct. The longest continuous chain supplies the root word, even when the chain bends."
        wrong-feedback="Count every continuous path. The parent chain is the longest one, not the shortest or the straightest, so the five-carbon path gives the root."
      />

      <QuickCheck
        id="a5-q2"
        question="2. In CH₃–CH(OH)–CH₂–CH₃, numbering from one end puts –OH at 2 and from the other end at 3. Which locant is used?"
        :options="[
          { value: 'A', text: '1' },
          { value: 'B', text: '2' },
          { value: 'C', text: '3' },
          { value: 'D', text: '4' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Number from the end that gives the –OH group the lower locant, so the name is butan-2-ol."
        wrong-feedback="The principal functional group must receive the lowest possible locant. Number from the end nearer the –OH group to give it locant 2."
      />

      <QuickCheck
        id="a5-q3"
        question="3. What is the IUPAC name of CH₃CH₂COOH?"
        :options="[
          { value: 'A', text: 'ethanal' },
          { value: 'B', text: 'propanal' },
          { value: 'C', text: 'ethanoic acid' },
          { value: 'D', text: 'propanoic acid' }
        ]"
        correct-value="D"
        correct-feedback="Correct. Three carbons give prop, and the –COOH group gives the suffix oic acid, so the name is propanoic acid."
        wrong-feedback="Count the carbons in the chain: there are three, so the root is prop. The –COOH group gives the ending oic acid, making propanoic acid."
      />
    </div>
  </section>
</template>
