<script setup>
import LessonHeading from '../../lessons/LessonHeading.vue'
import QuickCheck from '../../QuickCheck.vue'
import GasPrepLab from './GasPrepLab.vue'
</script>

<template>
  <section id="lesson-2" class="lesson" aria-labelledby="lesson-2-title">
    <LessonHeading
      id="lesson-2"
      :number="2"
      title="Methane and ethane: structure and preparation"
      objective="Describe where methane and ethane occur, explain the tetrahedral structure of methane, and compare the laboratory and other preparation routes."
    />

    <div class="prose">
      <p>
        Methane and ethane are the first two members of the alkane family. They are colourless,
        odourless gases that burn readily, and they are the main hydrocarbons in natural gas. Their
        simple structures make them a good starting point for studying how alkanes are prepared and
        how they behave.
      </p>

      <h3>Where methane and ethane occur</h3>
      <p>
        <strong>Methane</strong> is the main component of natural gas. It is also called
        <strong>marsh gas</strong> because it forms when vegetation decays under water in marshes.
        In coal mines it collects in the workings and is known as <strong>fire-damp</strong>; a flame
        can ignite it, which is why mine ventilation and safety lamps matter. Small amounts of
        methane are present in exhaled air and in intestinal gases, and it is released when wood,
        peat or coal is heated strongly without air (dry distillation).
      </p>
      <p>
        <strong>Ethane</strong> makes up roughly 10–20% of natural gas. It is also obtained from
        petroleum and is separated from natural gas along with other hydrocarbons.
      </p>

      <div class="definition">
        <span class="definition__label">Environmental context</span>
        <p>
          Methane is a <strong>greenhouse gas</strong>. It absorbs infrared radiation and contributes
          to the warming of the atmosphere. This is a context point: you do not need to explain the
          detailed mechanism of the greenhouse effect here.
        </p>
      </div>

      <h3>The structure of methane</h3>
      <p>
        A methane molecule has one carbon atom joined to four hydrogen atoms by four single covalent
        bonds. The four bonds point towards the corners of a <strong>tetrahedron</strong>, so the
        molecule is not flat. All four C–H bonds are identical, which is why methane has no separate
        isomers.
      </p>
      <p>
        The tetrahedral arrangement gives a bond angle of about 109.5°. The value is useful for
        picturing the shape, but it is <strong>enrichment</strong> rather than a required memory item
        for this chapter.
      </p>

      <h3>Laboratory preparation from sodium ethanoate</h3>
      <p>
        Methane is prepared in the laboratory by heating a mixture of
        <strong>sodium ethanoate</strong> (sodium acetate) and <strong>soda lime</strong>. Soda lime
        is a mixture of sodium hydroxide and calcium oxide. The calcium oxide keeps the mixture dry
        and helps the reaction proceed.
      </p>
      <p class="formula">CH₃COONa + NaOH → Na₂CO₃ + CH₄↑</p>
      <p>
        The mixture is heated at about 300°C. Methane is collected over water in an inverted gas jar,
        because it is almost insoluble in water. The apparatus is a hard-glass test tube fitted with a
        delivery tube; the gas bubbles through a trough of water into the inverted jar.
      </p>
      <ul>
        <li><strong>Reactants:</strong> sodium ethanoate and soda lime (NaOH + CaO).</li>
        <li><strong>Conditions:</strong> heating to about 300°C.</li>
        <li><strong>Products:</strong> methane and sodium carbonate.</li>
        <li><strong>Collection:</strong> over water, since methane is almost insoluble in water.</li>
      </ul>
      <p>
        The same pattern prepares <strong>ethane</strong> from sodium propanoate (sodium propionate):
      </p>
      <p class="formula">C₂H₅COONa + NaOH → Na₂CO₃ + C₂H₆↑</p>
      <p>
        In each case the carboxylate salt loses a carbon atom as carbonate, so the alkane produced has
        one carbon atom fewer than the salt’s carbon chain.
      </p>

      <GasPrepLab />

      <h3>Other preparation methods</h3>
      <p>
        Methane and ethane can also be obtained by reducing an alkyl halide. Iodomethane gives
        methane, and bromoethane gives ethane, when treated with zinc and dilute hydrochloric acid or
        with a zinc–copper couple:
      </p>
      <p class="formula">CH₃I + 2[H] → CH₄ + HI</p>
      <p class="formula">C₂H₅Br + 2[H] → C₂H₆ + HBr</p>
      <p>
        Aluminium carbide reacts with water at room temperature to release methane:
      </p>
      <p class="formula">Al₄C₃ + 12H₂O → 3CH₄ + 4Al(OH)₃</p>
      <p>
        The <strong>Wurtz reaction</strong> joins two identical alkyl groups using sodium in dry
        ether:
      </p>
      <p class="formula">2CH₃I + 2Na → C₂H₆ + 2NaI</p>
      <p>
        Because two alkyl groups are joined, the product always contains an even number of carbon
        atoms. The Wurtz reaction therefore <strong>cannot prepare methane</strong>: the smallest
        possible product, made from two one-carbon groups, is ethane.
      </p>

      <h3>Physical properties of methane and ethane</h3>
      <div class="table-wrap">
        <table class="compare-table">
          <caption>Physical properties of methane and ethane</caption>
          <thead>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Methane, CH₄</th>
              <th scope="col">Ethane, C₂H₆</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Appearance</th>
              <td>Colourless gas</td>
              <td>Colourless gas</td>
            </tr>
            <tr>
              <th scope="row">Odour and taste</th>
              <td>Odourless and tasteless</td>
              <td>Odourless and tasteless</td>
            </tr>
            <tr>
              <th scope="row">Solubility in water</th>
              <td>Almost insoluble</td>
              <td>Almost insoluble</td>
            </tr>
            <tr>
              <th scope="row">Density compared with air</th>
              <td>Less dense</td>
              <td>Less dense</td>
            </tr>
            <tr>
              <th scope="row">Boiling point</th>
              <td>About −161°C</td>
              <td>About −89°C</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The boiling point of ethane is higher than that of methane because ethane has more electrons
        and a larger surface area, so the intermolecular forces are stronger.
      </p>

      <div class="exam-tip">
        <span class="tag">Exam tip</span>
        <p>
          When a question asks for the laboratory preparation of methane, name both reactants, give
          the condition, write the balanced equation and state that the gas is collected over water.
          Do not confuse sodium ethanoate with sodium propanoate: the salt with two carbon atoms gives
          methane, and the salt with three carbon atoms gives ethane.
        </p>
      </div>

      <h3>Check your understanding</h3>

      <QuickCheck
        id="b2-q1"
        question="1. Which pair of reactants is used to prepare methane in the laboratory?"
        :options="[
          { value: 'A', text: 'Sodium propanoate and soda lime' },
          { value: 'B', text: 'Sodium ethanoate and soda lime' },
          { value: 'C', text: 'Iodomethane and sodium in dry ether' },
          { value: 'D', text: 'Sodium chloride and concentrated sulfuric acid' }
        ]"
        correct-value="B"
        correct-feedback="Correct. Sodium ethanoate and soda lime are heated together to about 300°C, giving methane and sodium carbonate."
        wrong-feedback="Methane is prepared by heating sodium ethanoate with soda lime. Sodium propanoate gives ethane, and the Wurtz reaction gives an even-carbon alkane."
      />

      <QuickCheck
        id="b2-q2"
        question="2. Coal-mine fire-damp is mainly which gas?"
        :options="[
          { value: 'A', text: 'Ethane' },
          { value: 'B', text: 'Carbon monoxide' },
          { value: 'C', text: 'Methane' },
          { value: 'D', text: 'Hydrogen' }
        ]"
        correct-value="C"
        correct-feedback="Correct. Fire-damp is methane that has collected in coal-mine workings; it can ignite and cause an explosion."
        wrong-feedback="Fire-damp is the old name for methane found in coal mines, not carbon monoxide or hydrogen."
      />

      <QuickCheck
        id="b2-q3"
        question="3. Why can the Wurtz reaction not be used to prepare methane?"
        :options="[
          { value: 'A', text: 'It joins two alkyl groups, so the product has at least two carbon atoms.' },
          { value: 'B', text: 'It needs ultraviolet light to start.' },
          { value: 'C', text: 'It only works with bromoalkanes.' },
          { value: 'D', text: 'It produces carbon dioxide instead of an alkane.' }
        ]"
        correct-value="A"
        correct-feedback="Correct. Two alkyl groups are joined, so the smallest alkane that can form is ethane. Methane cannot be made this way."
        wrong-feedback="The Wurtz reaction couples two identical alkyl groups. Joining two one-carbon groups gives ethane, not methane."
      />
    </div>
  </section>
</template>
