<script setup>
import LessonHeading from '../../lessons/LessonHeading.vue'
import QuickCheck from '../../QuickCheck.vue'
import LessonVisual from '../../visuals/LessonVisual.vue'
import MemoryHook from '../../MemoryHook.vue'
import HydrocarbonTreeVisual from '../../visuals/chapter-12a/HydrocarbonTreeVisual.vue'
</script>

<template>
  <section id="lesson-2" class="lesson" aria-labelledby="lesson-2-title">
    <LessonHeading
      id="lesson-2"
      :number="2"
      title="Hydrocarbons and organic families"
      objective="Define hydrocarbons, classify them as aliphatic or cyclic, saturated or unsaturated, and recognise alkanes, alkenes, alkynes, alicyclic compounds and aromatic compounds."
    />

    <div class="prose">
      <p>
        Organic compounds are a very large family, so chemists sort them by structure. The first
        broad division is between compounds made only of carbon and hydrogen and compounds that
        also contain other elements.
      </p>

      <div class="definition">
        <span class="definition__label">Definition</span>
        <p>
          A <strong>hydrocarbon</strong> is an organic compound that contains only carbon and
          hydrogen.
        </p>
      </div>

      <p>
        Methane <span class="formula">CH₄</span>, ethene <span class="formula">C₂H₄</span> and
        benzene <span class="formula">C₆H₆</span> are hydrocarbons. Ethanol
        <span class="formula">C₂H₅OH</span> is not a hydrocarbon, because it also contains oxygen.
        Organic compounds that contain other elements as well as carbon and hydrogen are called
        <strong>derivatives</strong> of hydrocarbons.
      </p>

      <div class="misconception">
        <span class="tag">Common misconception</span>
        <p>
          “Hydrocarbon” does not mean “any organic compound”. A hydrocarbon contains only carbon
          and hydrogen. Ethanol, ethanoic acid and glucose are organic compounds, but they are not
          hydrocarbons because they also contain oxygen.
        </p>
      </div>

      <h3>A simple classification</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Classifying organic compounds by structure</caption>
          <thead>
            <tr>
              <th scope="col">Group</th>
              <th scope="col">Key feature</th>
              <th scope="col">Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Hydrocarbons</th>
              <td>Contain only carbon and hydrogen.</td>
              <td>Methane <span class="formula">CH₄</span>, ethene <span class="formula">C₂H₄</span>, benzene <span class="formula">C₆H₆</span>.</td>
            </tr>
            <tr>
              <th scope="row">Organic derivatives</th>
              <td>Also contain oxygen, nitrogen, sulfur or a halogen.</td>
              <td>Ethanol <span class="formula">C₂H₅OH</span>, ethanoic acid <span class="formula">CH₃COOH</span>, chloromethane <span class="formula">CH₃Cl</span>.</td>
            </tr>
            <tr>
              <th scope="row">Aliphatic hydrocarbons</th>
              <td>Open-chain compounds, with no closed ring.</td>
              <td>Methane, ethane, ethene, ethyne.</td>
            </tr>
            <tr>
              <th scope="row">Cyclic hydrocarbons</th>
              <td>Contain a closed ring of carbon atoms.</td>
              <td>Cyclohexane <span class="formula">C₆H₁₂</span>, benzene <span class="formula">C₆H₆</span>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Saturated and unsaturated</h3>
      <p>
        A hydrocarbon with only single carbon–carbon bonds is <strong>saturated</strong>. It has
        the maximum number of hydrogen atoms that the carbon skeleton can hold. A hydrocarbon with
        one or more double or triple carbon–carbon bonds is <strong>unsaturated</strong>.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>The three main hydrocarbon families</caption>
          <thead>
            <tr>
              <th scope="col">Family</th>
              <th scope="col">Bond between carbon atoms</th>
              <th scope="col">General formula</th>
              <th scope="col">Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Alkanes</th>
              <td>Only single bonds (C–C); saturated.</td>
              <td><span class="formula">CₙH₂ₙ₊₂</span></td>
              <td>Methane <span class="formula">CH₄</span>, ethane <span class="formula">C₂H₆</span>, propane <span class="formula">C₃H₈</span>.</td>
            </tr>
            <tr>
              <th scope="row">Alkenes</th>
              <td>At least one double bond (C=C); unsaturated.</td>
              <td><span class="formula">CₙH₂ₙ</span></td>
              <td>Ethene <span class="formula">C₂H₄</span>, propene <span class="formula">C₃H₆</span>.</td>
            </tr>
            <tr>
              <th scope="row">Alkynes</th>
              <td>At least one triple bond (C≡C); unsaturated.</td>
              <td><span class="formula">CₙH₂ₙ₋₂</span></td>
              <td>Ethyne <span class="formula">C₂H₂</span>, propyne <span class="formula">C₃H₄</span>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The general formulae apply to open-chain hydrocarbons with one double or triple bond.
        Alkanes are saturated because every carbon–carbon bond is single. Alkenes and alkynes are
        unsaturated because they contain a multiple bond that can take on more atoms in an addition
        reaction.
      </p>

      <h3>Cyclic compounds: alicyclic and aromatic</h3>
      <p>
        A cyclic hydrocarbon contains a closed ring of carbon atoms. Cyclic compounds are divided
        into two groups.
      </p>

      <div class="definition">
        <span class="definition__label">Definitions</span>
        <p>
          <strong>Alicyclic compounds</strong> contain a ring of carbon atoms but do not have the
          special stability of a benzene ring. Their properties are similar to those of aliphatic
          compounds. <strong>Aromatic compounds</strong> contain a benzene ring or a similar
          delocalised ring system.
        </p>
      </div>

      <p>
        Cyclohexane <span class="formula">C₆H₁₂</span> is an alicyclic hydrocarbon. It has a ring of
        six carbon atoms joined by single bonds. Benzene <span class="formula">C₆H₆</span> is the
        simplest aromatic hydrocarbon. It has a ring of six carbon atoms with one hydrogen atom
        attached to each carbon.
      </p>

      <p>
        At this level, benzene is often drawn as a hexagon with alternating single and double bonds.
        This is a simplified picture. The inner dashed ring used in some diagrams reminds us that
        the electrons are spread around the ring rather than fixed between one pair of carbon atoms.
      </p>

      <div class="enrichment">
        <span class="tag">Enrichment — not required for the examination</span>
        <p>
          The alternating-double-bond drawing is called a Kekulé-style structure. The real benzene
          molecule has its six ring electrons delocalised around the ring. This delocalisation gives
          benzene a special stability. You only need the simplified structural preview here.
        </p>
      </div>

      <h3>Saturated and unsaturated compounds react differently</h3>
      <p>
        The presence or absence of a multiple bond changes the typical reaction.
      </p>
      <ul>
        <li>
          <strong>Saturated compounds</strong> tend to undergo <strong>substitution</strong>. An atom
          or group in the molecule is replaced by another atom or group. For example, methane reacts
          with chlorine in diffused sunlight to give chloromethane and hydrogen chloride:
          <span class="formula">CH₄ + Cl₂ → CH₃Cl + HCl</span>.
        </li>
        <li>
          <strong>Unsaturated compounds</strong> tend to undergo <strong>addition</strong>. Atoms add
          across the multiple bond, which becomes a single bond. For example, ethene adds hydrogen
          to give ethane: <span class="formula">C₂H₄ + H₂ → C₂H₆</span>.
        </li>
      </ul>

      <p>
        These reactions are previews only. The detailed chemistry of alkanes, alkenes and alkynes is
        studied later.
      </p>

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          When you classify a hydrocarbon, ask three questions in order. Is there a ring? If not, it
          is aliphatic. Is the ring a benzene ring? If yes, it is aromatic; if not, it is alicyclic.
          Are all the carbon–carbon bonds single? If yes, it is saturated; otherwise it is
          unsaturated.
        </p>
      </div>

      <h3>Check your understanding</h3>

      <LessonVisual
        title="Classify a hydrocarbon in two decisions"
        caption="First decide open chain or ring; then decide single or multiple bonds."
        description="The tree separates aliphatic open chains from cyclic compounds. Open chains are saturated alkanes or unsaturated alkenes and alkynes. Rings are alicyclic or aromatic."
        :notice="[
          'Open-chain and cyclic are the first split.',
          'Saturated means single bonds only.',
          'Aromatic is a ring family, not just any ring.'
        ]"
      >
        <HydrocarbonTreeVisual />
      </LessonVisual>

      <MemoryHook
        technique="Chunking"
        title="Open or ring, single or multiple"
        aid="Say the two-question chant: “Open or ring? Single or multiple?” Then attach the family name."
        :mapping="[
          { cue: 'Open', target: 'Aliphatic / open chain', meaning: 'The carbon chain is not closed into a ring.' },
          { cue: 'Ring', target: 'Cyclic', meaning: 'The carbon atoms form a closed loop.' },
          { cue: 'Single', target: 'Saturated — alkane', meaning: 'Only single carbon–carbon bonds are present.' },
          { cue: 'Double', target: 'Unsaturated — alkene', meaning: 'One C=C double bond is present.' },
          { cue: 'Triple', target: 'Unsaturated — alkyne', meaning: 'One C≡C triple bond is present.' },
          { cue: 'Alternating double bonds in a ring', target: 'Aromatic — benzene', meaning: 'The ring has delocalised electrons.' }
        ]"
        recall="Cover the mapping. Classify methane, ethene, ethyne and benzene using only the two-question chant."
      />

      <QuickCheck
        id="a2-q1"
        question="1. Which is the general formula of the alkanes?"
        :options="[
          { value: 'A', text: 'CₙH₂ₙ' },
          { value: 'B', text: 'CₙH₂ₙ₊₂' },
          { value: 'C', text: 'CₙH₂ₙ₋₂' },
          { value: 'D', text: 'CₙH₂ₙ₊₁' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Alkanes are saturated and have the general formula CₙH₂ₙ₊₂. For example, ethane is C₂H₆."
        wrong-feedback="Alkanes contain only single carbon–carbon bonds. Compare methane CH₄ and ethane C₂H₆ with the formulae: the alkane pattern is CₙH₂ₙ₊₂."
      />

      <QuickCheck
        id="a2-q2"
        question="2. Benzene, C₆H₆, is best classified as:"
        :options="[
          { value: 'A', text: 'An alkane' },
          { value: 'B', text: 'An alkyne' },
          { value: 'C', text: 'An aromatic hydrocarbon' },
          { value: 'D', text: 'An inorganic carbonate' }
        ]"
        correct-value="C"
        correct-feedback="Correct. Benzene contains a ring of six carbon atoms and is the simplest aromatic hydrocarbon."
        wrong-feedback="Benzene has a closed ring with delocalised electrons. That makes it aromatic, not an alkane, alkyne or carbonate."
      />

      <QuickCheck
        id="a2-q3"
        question="3. What feature makes a hydrocarbon an alkyne?"
        :options="[
          { value: 'A', text: 'It contains a carbon–carbon triple bond.' },
          { value: 'B', text: 'It contains a carbon–carbon double bond.' },
          { value: 'C', text: 'It contains only carbon–carbon single bonds.' },
          { value: 'D', text: 'It contains no carbon atoms.' }
        ]"
        correct-value="A"
        correct-feedback="Correct. Alkynes are unsaturated hydrocarbons containing at least one C≡C triple bond, such as ethyne C₂H₂."
        wrong-feedback="Alkynes are defined by the carbon–carbon triple bond. A double bond belongs to an alkene; among open-chain hydrocarbons, single bonds belong to an alkane, while alicyclic rings such as cyclohexane also contain only single bonds."
      />
    </div>
  </section>
</template>
