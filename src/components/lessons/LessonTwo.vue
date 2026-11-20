<script setup>
import LessonHeading from './LessonHeading.vue'
import QuickCheck from '../QuickCheck.vue'
import BondLab from '../BondLab.vue'
import ChainLab from '../ChainLab.vue'
</script>

<template>
  <section id="lesson-2" class="lesson" aria-labelledby="lesson-2-title">
    <LessonHeading
      id="lesson-2"
      :number="2"
      title="Why is carbon the central element?"
      objective="Explain carbon's tetravalency and catenation, and how multiple bonds, chain shapes and isomerism create enormous variety."
    />

    <div class="prose">
      <p>
        Carbon is not the most abundant element on Earth, yet it is the central element of organic
        chemistry. The reason is not one property alone. It is a combination of properties that
        allow carbon to build an extraordinary range of stable structures.
      </p>

      <figure class="figure">
        <svg viewBox="0 0 420 190" role="img" aria-labelledby="carbon-atom-title carbon-atom-desc">
          <title id="carbon-atom-title">Carbon atom electron arrangement</title>
          <desc id="carbon-atom-desc">
            A carbon atom has six electrons. Two are in the inner shell and four are in the outer
            shell.
          </desc>
          <circle cx="110" cy="95" r="58" fill="none" stroke="#d8d0c0" stroke-width="2" />
          <circle cx="110" cy="95" r="30" fill="none" stroke="#d8d0c0" stroke-width="2" />
          <circle cx="110" cy="95" r="20" fill="#0f5c5c" />
          <text x="110" y="101" text-anchor="middle" fill="#fffdf7" font-family="Georgia, serif" font-size="16">
            C
          </text>
          <circle cx="110" cy="65" r="5" fill="#0f5c5c" />
          <circle cx="110" cy="125" r="5" fill="#0f5c5c" />
          <circle cx="110" cy="37" r="5" fill="#b86e12" />
          <circle cx="168" cy="95" r="5" fill="#b86e12" />
          <circle cx="110" cy="153" r="5" fill="#b86e12" />
          <circle cx="52" cy="95" r="5" fill="#b86e12" />
          <text x="230" y="70" fill="#1c2b2b" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="14">
            Atomic number: 6
          </text>
          <text x="230" y="95" fill="#1c2b2b" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="14">
            Electronic configuration: 2,4
          </text>
          <text x="230" y="120" fill="#1c2b2b" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="14">
            Valence electrons: 4
          </text>
          <text x="230" y="145" fill="#405451" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="12">
            Four more electrons complete the octet.
          </text>
        </svg>
        <figcaption class="figcaption">
          Carbon has four valence electrons. It shares four pairs of electrons rather than losing or
          gaining four electrons.
        </figcaption>
      </figure>

      <h3>Tetravalency: four bonds</h3>
      <p>
        Carbon has the electronic configuration 2,4. It needs four more electrons to complete its
        outer shell. Losing or gaining four electrons would require too much energy, so carbon
        shares electrons instead. It forms four covalent bonds.
      </p>

      <div class="definition">
        <span class="definition__label">Definition</span>
        <p>
          <strong>Tetravalency</strong> is the property of carbon by which it forms four covalent
          bonds.
        </p>
      </div>

      <p>
        Those four bonds can be with hydrogen, oxygen, nitrogen, sulfur, phosphorus, a halogen, or
        other carbon atoms. This is why carbon can sit at the centre of such a wide variety of
        compounds.
      </p>

      <h3>Catenation: carbon bonds to carbon</h3>
      <p>
        Carbon atoms can bond with one another to form chains and rings. This self-linking property
        is called <strong>catenation</strong>. Carbon–carbon bonds are strong, so the chains can be
        long and stable.
      </p>

      <div class="definition">
        <span class="definition__label">Definition</span>
        <p>
          <strong>Catenation</strong> is the self-linking of carbon atoms to form straight chains,
          branched chains or closed rings.
        </p>
      </div>

      <p>
        A carbon skeleton can be straight, branched or cyclic. The same number of carbon atoms can
        produce more than one skeleton, which is one reason organic compounds are so numerous.
      </p>

      <ChainLab />

      <h3>Single, double and triple bonds</h3>
      <p>
        Carbon can share one, two or three pairs of electrons with another carbon atom. A single
        bond (C–C) has one shared pair. A double bond (C=C) has two shared pairs. A triple bond
        (C≡C) has three shared pairs.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Bond order in simple carbon compounds</caption>
          <thead>
            <tr>
              <th scope="col">Compound</th>
              <th scope="col">Formula</th>
              <th scope="col">Carbon–carbon bond</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Ethane</th>
              <td class="formula">C₂H₆</td>
              <td>Single (C–C)</td>
              <td>Saturated</td>
            </tr>
            <tr>
              <th scope="row">Ethene</th>
              <td class="formula">C₂H₄</td>
              <td>Double (C=C)</td>
              <td>Unsaturated</td>
            </tr>
            <tr>
              <th scope="row">Ethyne</th>
              <td class="formula">C₂H₂</td>
              <td>Triple (C≡C)</td>
              <td>Unsaturated</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        A compound with only single carbon–carbon bonds is described as <strong>saturated</strong>.
        One with a double or triple bond is <strong>unsaturated</strong>. The full study of these
        families comes later in the Organic Chemistry unit.
      </p>

      <BondLab />

      <h3>Benzene: a ring preview</h3>
      <p>
        Benzene has six carbon atoms in a ring, with one hydrogen atom attached to each carbon. Its
        molecular formula is <span class="formula">C₆H₆</span>. At this level, benzene is drawn as a
        regular hexagon of six carbon atoms. A common simplified representation shows alternating
        double bonds. The diagram here uses a dashed inner ring to suggest that the electrons are
        not fixed between one pair of atoms; they are spread around the ring.
      </p>

      <figure class="figure">
        <svg viewBox="0 0 320 180" role="img" aria-labelledby="benzene-title benzene-desc">
          <title id="benzene-title">Simplified benzene ring</title>
          <desc id="benzene-desc">
            A hexagon of six carbon atoms with one hydrogen atom attached to each carbon and
            alternating double bonds shown inside the ring.
          </desc>
          <polygon
            points="160,35 213,65 213,125 160,155 107,125 107,65"
            fill="#e6f0ec"
            stroke="#0f5c5c"
            stroke-width="2"
          />
          <polygon
            points="160,55 197,76 197,114 160,135 123,114 123,76"
            fill="none"
            stroke="#b86e12"
            stroke-width="2"
            stroke-dasharray="10 8"
          />
          <g fill="#0f5c5c">
            <circle cx="160" cy="35" r="6" />
            <circle cx="213" cy="65" r="6" />
            <circle cx="213" cy="125" r="6" />
            <circle cx="160" cy="155" r="6" />
            <circle cx="107" cy="125" r="6" />
            <circle cx="107" cy="65" r="6" />
          </g>
          <g fill="#1c2b2b" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="13">
            <text x="160" y="20" text-anchor="middle">H</text>
            <text x="232" y="60">H</text>
            <text x="232" y="130">H</text>
            <text x="160" y="175" text-anchor="middle">H</text>
            <text x="72" y="130">H</text>
            <text x="72" y="60">H</text>
          </g>
        </svg>
        <figcaption class="figcaption">
          Simplified benzene ring. The hexagon is the carbon skeleton; the dashed inner ring
          suggests that the electrons are spread around the ring rather than fixed in one position.
        </figcaption>
      </figure>

      <h3>Isomerism: same formula, different structure</h3>
      <p>
        Because carbon skeletons can be arranged differently, two compounds can have the same
        molecular formula but different structural formulae. Such compounds are called
        <strong>isomers</strong>. For example, butane and 2-methylpropane both have the formula
        <span class="formula">C₄H₁₀</span>, but their carbon skeletons are different.
      </p>

      <p>
        Isomerism is previewed here because it helps explain the huge number of organic compounds.
        You will study structural isomerism in more detail later.
      </p>

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          Keep tetravalency and catenation separate in your answers. Tetravalency explains why carbon
          forms four bonds. Catenation explains why carbon can link to itself to form chains and
          rings. Both are needed to explain carbon's versatility.
        </p>
      </div>

      <div class="enrichment">
        <span class="tag">Enrichment — not required for the examination</span>
        <p>
          Silicon is also tetravalent, but silicon–silicon bonds are weaker and silicon does not
          catenate as readily as carbon. Carbon's small size allows strong, stable bonds and an
          enormous variety of structures. This comparison is useful background, not a syllabus
          requirement for this chapter.
        </p>
      </div>

      <h3>Check your understanding</h3>

      <QuickCheck
        id="l2-q1"
        question="1. Carbon has the electronic configuration 2,4. What does this tell you about its bonding?"
        :options="[
          { value: 'A', text: 'It forms two covalent bonds.' },
          { value: 'B', text: 'It forms four covalent bonds.' },
          { value: 'C', text: 'It forms six ionic bonds.' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Carbon has four valence electrons and shares four pairs, giving four covalent bonds."
        wrong-feedback="Count the electrons in the outer shell. Carbon has four valence electrons, so it forms four covalent bonds."
      />

      <QuickCheck
        id="l2-q2"
        question="2. Which property allows carbon atoms to form long chains and rings?"
        :options="[
          { value: 'A', text: 'Tetravalency' },
          { value: 'B', text: 'Catenation' },
          { value: 'C', text: 'Ionisation' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Catenation is the self-linking of carbon atoms into chains and rings."
        wrong-feedback="Tetravalency is about forming four bonds. The self-linking property is called catenation."
      />

      <QuickCheck
        id="l2-q3"
        question="3. A carbon–carbon double bond contains how many shared pairs of electrons?"
        :options="[
          { value: 'A', text: 'One' },
          { value: 'B', text: 'Two' },
          { value: 'C', text: 'Three' }
        ]"
        correct-value="B"
        correct-feedback="Correct. A double bond has two shared pairs. A triple bond has three."
        wrong-feedback="Count the shared pairs. Single = one, double = two, triple = three."
      />
    </div>
  </section>
</template>
