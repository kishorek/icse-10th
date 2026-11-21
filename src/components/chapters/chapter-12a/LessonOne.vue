<script setup>
import LessonHeading from '../../lessons/LessonHeading.vue'
import QuickCheck from '../../QuickCheck.vue'
import LessonVisual from '../../visuals/LessonVisual.vue'
import MemoryHook from '../../MemoryHook.vue'
import CarbonBondingVisual from '../../visuals/chapter-12a/CarbonBondingVisual.vue'
</script>

<template>
  <section id="lesson-1" class="lesson" aria-labelledby="lesson-1-title">
    <LessonHeading
      id="lesson-1"
      :number="1"
      title="Organic compounds and carbon"
      objective="Trace the modern meaning of ‘organic’, compare organic and inorganic compounds, and explain how carbon's bonding produces millions of compounds."
    />

    <div class="prose">
      <p>
        A candle burns away, but a steel nail held near the same flame does not burn in the same
        way. Candle wax is mainly a mixture of carbon compounds. The nail is mostly iron, a metal.
        The different behaviour is a clue to why carbon compounds are studied as a family of their
        own.
      </p>

      <h3>Why is it called “organic”?</h3>
      <p>
        The word <strong>organic</strong> comes from history. Early chemists noticed that compounds
        obtained from plants, animals and other living things behaved differently from compounds
        obtained from minerals. They believed that a special <strong>vital force</strong>, present
        only in living organisms, was needed to make an organic compound. This idea is called the
        <strong>vital-force theory</strong>.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Laboratory syntheses that overturned the vital-force theory</caption>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Chemist</th>
              <th scope="col">What was synthesised</th>
              <th scope="col">Why it mattered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1828</th>
              <td>Friedrich Wöhler</td>
              <td>Urea, <span class="formula">CO(NH₂)₂</span>, by heating ammonium cyanate, <span class="formula">NH₄CNO</span>.</td>
              <td>An organic compound was made from an inorganic starting material without a living organism.</td>
            </tr>
            <tr>
              <th scope="row">1845</th>
              <td>Adolf Kolbe</td>
              <td>Acetic acid (ethanoic acid), <span class="formula">CH₃COOH</span>.</td>
              <td>Another organic compound was built in the laboratory from inorganic substances.</td>
            </tr>
            <tr>
              <th scope="row">1856</th>
              <td>Marcellin Berthelot</td>
              <td>Methane, <span class="formula">CH₄</span>.</td>
              <td>Further laboratory synthesis showed that organic compounds do not need a living source.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Wöhler's experiment is the standard turning point. It showed that an organic compound could
        be prepared in the laboratory, so the vital-force theory was abandoned. Organic chemistry
        became the study of carbon compounds regardless of where they come from.
      </p>

      <div class="definition">
        <span class="definition__label">Modern definition</span>
        <p>
          <strong>Organic compounds</strong> are carbon compounds, usually containing hydrogen,
          excluding simple carbon compounds such as carbon monoxide, carbon dioxide, carbonates,
          bicarbonates, cyanides and carbides.
        </p>
      </div>

      <div class="misconception">
        <span class="tag">Common misconception</span>
        <p>
          “Every compound that contains carbon is organic.” This is false. Carbon monoxide,
          carbon dioxide, calcium carbonate, sodium bicarbonate, sodium cyanide and calcium carbide
          all contain carbon, but they are conventionally classified as inorganic. Use the school
          definition, not the presence of carbon alone.
        </p>
      </div>

      <h3>Where organic compounds come from</h3>
      <p>
        Organic compounds can be obtained from living things and from mineral sources. Plants and
        animals supply carbohydrates, proteins, fats and oils. Coal, petroleum and natural gas are
        fossil sources of hydrocarbons. Wood, fermentation products and laboratory synthesis are
        further sources.
      </p>

      <ul>
        <li><strong>Plants and animals:</strong> starch, cellulose, sugar, proteins, fats and oils.</li>
        <li><strong>Coal, petroleum and natural gas:</strong> mixtures of hydrocarbons used as fuels and raw materials.</li>
        <li><strong>Wood:</strong> cellulose and other plant materials.</li>
        <li><strong>Fermentation:</strong> ethanol from sugars.</li>
        <li><strong>Synthetic methods:</strong> medicines, plastics, dyes and many other compounds made in factories.</li>
      </ul>

      <p>
        Organic chemistry matters because organic compounds are fuels, foods, clothing fibres,
        medicines, plastics, dyes, solvents, fertilisers and detergents. It also creates
        environmental problems, such as plastic waste and the carbon dioxide released by burning
        fossil fuels.
      </p>

      <h3>Organic and inorganic compounds compared</h3>
      <p>
        Organic and inorganic compounds are not separated by a single test. They differ in a set of
        typical properties. Read the table as a set of <strong>trends</strong>, not absolute laws.
      </p>

      <div class="table-wrap">
        <table class="compare-table">
          <caption>Typical differences between organic and inorganic compounds</caption>
          <thead>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Organic compounds</th>
              <th scope="col">Inorganic compounds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Carbon</th>
              <td>Carbon is present, apart from the standard inorganic exceptions.</td>
              <td>Most do not contain carbon.</td>
            </tr>
            <tr>
              <th scope="row">Bonding</th>
              <td>Mostly covalent.</td>
              <td>Often ionic; some are covalent.</td>
            </tr>
            <tr>
              <th scope="row">Melting and boiling points</th>
              <td>Generally low for simple covalent molecules.</td>
              <td>Generally high for ionic and giant covalent structures.</td>
            </tr>
            <tr>
              <th scope="row">Solubility</th>
              <td>Usually insoluble in water; often soluble in organic solvents.</td>
              <td>Often soluble in water.</td>
            </tr>
            <tr>
              <th scope="row">Combustion</th>
              <td>Many burn in oxygen to form carbon dioxide and water.</td>
              <td>Generally non-flammable.</td>
            </tr>
            <tr>
              <th scope="row">Electrical conductivity</th>
              <td>Generally poor; most are non-electrolytes.</td>
              <td>Ionic compounds conduct when molten or in aqueous solution.</td>
            </tr>
            <tr>
              <th scope="row">Isomerism</th>
              <td>Very common, because carbon skeletons can be arranged differently.</td>
              <td>Rare.</td>
            </tr>
            <tr>
              <th scope="row">Colour and smell</th>
              <td>Many have a characteristic smell or colour, though many pure compounds are colourless.</td>
              <td>Many are colourless or odourless; coloured salts also exist.</td>
            </tr>
            <tr>
              <th scope="row">Reaction rate</th>
              <td>Often slower, because covalent bonds must be broken.</td>
              <td>Often faster, especially in ionic solutions.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The trends follow from structure. Simple organic compounds are usually separate covalent
        molecules, so the forces between molecules are weak and less energy is needed to melt or
        boil them. They contain no free ions, so they do not conduct. Many inorganic compounds are
        ionic and form giant lattices, so they melt at high temperatures and conduct when molten or
        dissolved.
      </p>

      <h3>Carbon: the atom behind the family</h3>
      <p>
        Carbon has atomic number 6 and the electronic configuration 2,4. It needs four more
        electrons to complete its outer shell. Losing or gaining four electrons would need too much
        energy, so carbon shares electrons instead. It forms four covalent bonds.
      </p>

      <div class="definition">
        <span class="definition__label">Definition</span>
        <p>
          <strong>Tetravalency</strong> is the property of carbon by which it forms four covalent
          bonds.
        </p>
      </div>

      <p>
        Carbon atoms can also bond with one another. This self-linking property is called
        <strong>catenation</strong>. Carbon–carbon bonds are strong, so the resulting chains and
        rings can be long and stable.
      </p>

      <div class="definition">
        <span class="definition__label">Definition</span>
        <p>
          <strong>Catenation</strong> is the self-linking of carbon atoms to form straight chains,
          branched chains or closed rings.
        </p>
      </div>

      <p>
        Carbon can share one, two or three pairs of electrons with another carbon atom. A single
        bond (C–C) has one shared pair, a double bond (C=C) has two shared pairs, and a triple bond
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Ethane</th>
              <td class="formula">C₂H₆</td>
              <td>Single (C–C)</td>
            </tr>
            <tr>
              <th scope="row">Ethene</th>
              <td class="formula">C₂H₄</td>
              <td>Double (C=C)</td>
            </tr>
            <tr>
              <th scope="row">Ethyne</th>
              <td class="formula">C₂H₂</td>
              <td>Triple (C≡C)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The carbon skeleton itself can be arranged in three basic ways. A <strong>straight
        chain</strong> has its carbon atoms in one continuous line. A <strong>branched chain</strong>
        has a side branch attached to a main chain. A <strong>cyclic chain</strong> joins its carbon
        atoms into a closed ring. The same number of carbon atoms can often produce more than one
        skeleton.
      </p>

      <h3>Why are there so many organic compounds?</h3>
      <p>
        Several properties work together:
      </p>
      <ul>
        <li>Tetravalency lets each carbon atom join four other atoms.</li>
        <li>Catenation allows carbon atoms to link into chains and rings of different lengths.</li>
        <li>Single, double and triple bonds create different families.</li>
        <li>Straight, branched and cyclic skeletons multiply the possible arrangements.</li>
        <li>Carbon can bond with hydrogen, oxygen, nitrogen, sulfur, phosphorus and halogens.</li>
        <li>Different arrangements of the same molecular formula produce isomers.</li>
      </ul>

      <p>
        <strong>Isomers</strong> are compounds with the same molecular formula but different
        structural formulae. For example, butane and 2-methylpropane both have the formula
        <span class="formula">C₄H₁₀</span>, but their carbon skeletons differ. Isomerism is only
        previewed here; it is studied in detail later.
      </p>

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          Keep tetravalency and catenation separate. Tetravalency explains why carbon forms four
          bonds. Catenation explains why carbon can link to itself to form chains and rings. Both are
          needed to explain carbon's versatility.
        </p>
      </div>

      <h3>Check your understanding</h3>

      <LessonVisual
        title="Carbon’s four bonds build chains and rings"
        caption="One carbon atom forms four bonds; carbon atoms then link into straight chains, branched chains and rings."
        description="The left panel shows tetravalency. The middle panel shows carbon atoms linked in a chain with a branch. The right panel shows a closed six-carbon ring."
        :notice="[
          'Four bonds come from carbon’s four valence electrons.',
          'Self-linking produces long chains, branches and rings.',
          'These carbon skeletons are the base of every organic family.'
        ]"
      >
        <CarbonBondingVisual />
      </LessonVisual>

      <MemoryHook
        technique="Story"
        title="Carbon’s four hands"
        aid="Picture carbon with four hands: it holds four partners, holds other carbons, and arranges them in lines, forks or rings."
        :mapping="[
          { cue: 'Four hands', target: 'Tetravalency', meaning: 'Carbon forms four covalent bonds.' },
          { cue: 'Holding other carbons', target: 'Catenation', meaning: 'Carbon atoms link to one another.' },
          { cue: 'One, two or three handshakes', target: 'Single, double and triple bonds', meaning: 'Carbon shares one, two or three pairs.' },
          { cue: 'Lines, forks or rings', target: 'Straight, branched and cyclic chains', meaning: 'The carbon skeleton can take three shapes.' }
        ]"
        recall="Cover the mapping. Retell the four-hand story, then name the property or bond type each part represents."
      />

      <QuickCheck
        id="a1-q1"
        question="1. Which statement gives the modern school definition of organic compounds?"
        :options="[
          { value: 'A', text: 'Compounds obtained only from living organisms.' },
          { value: 'B', text: 'All carbon-containing compounds without any exception.' },
          { value: 'C', text: 'Carbon compounds, usually containing hydrogen, excluding simple carbon compounds such as CO₂ and carbonates.' },
          { value: 'D', text: 'Compounds that contain no carbon.' }
        ]"
        correct-value="C"
        correct-feedback="Correct. Organic compounds are carbon compounds, but simple carbon compounds such as CO₂ and carbonates are conventional exceptions."
        wrong-feedback="The modern definition is based on carbon-based structure, with a few simple carbon compounds excluded. Origin from living things no longer defines an organic compound."
      />

      <QuickCheck
        id="a1-q2"
        question="2. What did Wöhler's 1828 synthesis of urea demonstrate?"
        :options="[
          { value: 'A', text: 'Urea is an inorganic compound because it contains no carbon.' },
          { value: 'B', text: 'An organic compound could be made from an inorganic starting material in the laboratory.' },
          { value: 'C', text: 'Organic compounds can be made only by living organisms.' },
          { value: 'D', text: 'Carbon cannot form covalent bonds.' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Wöhler heated ammonium cyanate, an inorganic compound, and obtained urea in the laboratory. This challenged the vital-force theory."
        wrong-feedback="Wöhler prepared urea without a living organism. That laboratory synthesis is what weakened the vital-force theory."
      />

      <QuickCheck
        id="a1-q3"
        question="3. Which substance is usually classified as inorganic even though it contains carbon?"
        :options="[
          { value: 'A', text: 'Ethanol' },
          { value: 'B', text: 'Glucose' },
          { value: 'C', text: 'Methane' },
          { value: 'D', text: 'Calcium carbonate' }
        ]"
        correct-value="D"
        correct-feedback="Correct. Calcium carbonate, CaCO₃, is a carbonate and is conventionally classified as inorganic."
        wrong-feedback="Look for a standard exception among the carbonates, bicarbonates, cyanides, carbides or oxides of carbon. Calcium carbonate is one."
      />
    </div>
  </section>
</template>
