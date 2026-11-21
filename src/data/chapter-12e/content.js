export const lessonContent = [
  {
    id: 'lesson-1',
    number: 1,
    title: 'The alcohol family',
    objective:
      'Recognise the hydroxyl group, use the general formula CₙH₂ₙ₊₁OH, and classify alcohols as mono-, di- or trihydric.',
    blocks: [
      {
        type: 'p',
        text: 'Alcohols are a family of organic compounds built by replacing a hydrogen atom of an alkane with a hydroxyl group, –OH. Ethanol is the alcohol in alcoholic drinks and in hand sanitiser; methanol is an industrial solvent and a dangerous poison. Both belong to the same homologous series.'
      },
      {
        type: 'h3',
        text: 'What is an alcohol?'
      },
      {
        type: 'definition',
        label: 'Definition',
        text: 'Alcohols are hydroxyl derivatives of alkanes. They contain the hydroxyl group –OH attached to a carbon atom, and their general formula is CₙH₂ₙ₊₁OH.'
      },
      {
        type: 'table',
        caption: 'The first four alcohols',
        headers: ['Common name', 'Molecular formula', 'Abbreviated formula', 'IUPAC name'],
        rows: [
          ['Methyl alcohol', 'CH₄O', 'CH₃–OH', 'Methanol'],
          ['Ethyl alcohol', 'C₂H₆O', 'CH₃–CH₂–OH', 'Ethanol'],
          ['Propyl alcohol', 'C₃H₈O', 'CH₃–CH₂–CH₂–OH', 'Propanol'],
          ['Butyl alcohol', 'C₄H₁₀O', 'CH₃–CH₂–CH₂–CH₂–OH', 'Butanol']
        ]
      },
      {
        type: 'p',
        text: 'The –OH group is not the hydroxide ion, OH⁻. In an alcohol it is covalently bonded to carbon, so it does not make the compound an ionic alkali. Ethanol is a neutral molecule, even though it contains an –OH group.'
      },
      {
        type: 'h3',
        text: 'Mono-, di- and trihydric alcohols'
      },
      {
        type: 'p',
        text: 'The prefix tells you how many hydroxyl groups are attached to the carbon skeleton. This is a useful classification, not a different general formula for each class.'
      },
      {
        type: 'list',
        items: [
          'Monohydric: one –OH group, e.g. methanol, CH₃OH, and ethanol, C₂H₅OH.',
          'Dihydric: two –OH groups, e.g. ethylene glycol, C₂H₄(OH)₂.',
          'Trihydric: three –OH groups, e.g. glycerol, C₃H₅(OH)₃, with IUPAC name propane-1,2,3-triol.'
        ]
      },
      {
        type: 'visual',
        component: 'FamilyLadderVisual',
        id: 'e1-family-visual',
        title: 'The alcohol family ladder',
        caption: 'Every member contains one –OH group and follows CₙH₂ₙ₊₁OH.',
        description:
          'Three cards show methanol, ethanol and propanol in order. The general formula is CₙH₂ₙ₊₁OH, and each arrow adds one carbon and two hydrogen atoms.',
        notice: [
          'The family formula is CₙH₂ₙ₊₁OH.',
          'The –OH group is attached to a carbon atom.',
          'The +CH₂ step raises the boiling point gradually.'
        ],
        props: {
          family: 'Alcohols',
          formula: 'CₙH₂ₙ₊₁OH',
          bondLabel: 'One hydroxyl group, –OH, in each monohydric alcohol.',
          members: [
            { name: 'Methanol', formula: 'CH₃OH', note: 'one carbon' },
            { name: 'Ethanol', formula: 'C₂H₅OH', note: 'two carbons' },
            { name: 'Propanol', formula: 'C₃H₇OH', note: 'three carbons' }
          ]
        }
      },
      {
        type: 'lab',
        component: 'SorterLab',
        props: {
          id: 'hydroxyl-sorter',
          title: 'How many hydroxyl groups?',
          instruction: 'Select each alcohol, then classify it as monohydric, dihydric or trihydric.',
          categories: [
            { id: 'mono', label: 'Monohydric' },
            { id: 'di', label: 'Dihydric' },
            { id: 'tri', label: 'Trihydric' }
          ],
          items: [
            {
              id: 'methanol',
              label: 'Methanol, CH₃OH',
              answer: 'mono',
              note: 'One carbon carries one –OH group.'
            },
            {
              id: 'ethanol',
              label: 'Ethanol, C₂H₅OH',
              answer: 'mono',
              note: 'One –OH group on a two-carbon chain.'
            },
            {
              id: 'glycol',
              label: 'Ethylene glycol, C₂H₄(OH)₂',
              answer: 'di',
              note: 'Two –OH groups, one on each carbon.'
            },
            {
              id: 'glycerol',
              label: 'Glycerol, C₃H₅(OH)₃',
              answer: 'tri',
              note: 'Three –OH groups on a three-carbon chain.'
            }
          ]
        }
      },
      {
        type: 'examtip',
        text: 'Do not confuse the number of hydroxyl groups with the number of hydrogen atoms. Monohydric means one –OH group, not one hydrogen atom.'
      },
      {
        type: 'memory',
        technique: 'Counting pattern',
        title: 'Mono, di, tri: count the OH',
        aid: 'The prefix is the count: mono = one, di = two, tri = three hydroxyl groups.',
        mapping: [
          { cue: 'Mono', target: 'One –OH', meaning: 'Methanol and ethanol are monohydric.' },
          { cue: 'Di', target: 'Two –OH', meaning: 'Ethylene glycol is dihydric.' },
          { cue: 'Tri', target: 'Three –OH', meaning: 'Glycerol is trihydric.' }
        ],
        recall:
          'Cover the mapping. Name one example of a monohydric, a dihydric and a trihydric alcohol, with formulae.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'e1-q1',
            question: '1. Which general formula represents the monohydric alcohols?',
            options: [
              { value: 'A', text: 'CₙH₂ₙ₊₂' },
              { value: 'B', text: 'CₙH₂ₙ' },
              { value: 'C', text: 'CₙH₂ₙ₊₁OH' },
              { value: 'D', text: 'CₙH₂ₙ₋₂' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. Monohydric alcohols follow CₙH₂ₙ₊₁OH.',
            wrongFeedback: 'An alcohol has one –OH in place of one hydrogen of an alkane, giving CₙH₂ₙ₊₁OH.'
          },
          {
            id: 'e1-q2',
            question: '2. Which alcohol is trihydric?',
            options: [
              { value: 'A', text: 'Methanol' },
              { value: 'B', text: 'Ethanol' },
              { value: 'C', text: 'Ethylene glycol' },
              { value: 'D', text: 'Glycerol' }
            ],
            correctValue: 'D',
            correctFeedback: 'Correct. Glycerol has three –OH groups and is trihydric.',
            wrongFeedback: 'Glycerol, C₃H₅(OH)₃, has three hydroxyl groups. Ethylene glycol is dihydric; methanol and ethanol are monohydric.'
          },
          {
            id: 'e1-q3',
            question: '3. Which statement about the –OH group in ethanol is correct?',
            options: [
              { value: 'A', text: 'It is the hydroxide ion, OH⁻.' },
              { value: 'B', text: 'It is covalently bonded to carbon.' },
              { value: 'C', text: 'It makes ethanol an ionic alkali.' },
              { value: 'D', text: 'It is not part of the molecule.' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. The hydroxyl group is covalently bonded to a carbon atom.',
            wrongFeedback: 'The –OH group in an alcohol is covalent, not the free hydroxide ion. Ethanol is a neutral molecule.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    number: 2,
    title: 'Ethanol: occurrence and preparation',
    objective:
      'Describe the occurrence of ethanol and explain its preparation by hydrolysis of an alkyl halide, with fermentation and hydration as enrichment.',
    blocks: [
      {
        type: 'p',
        text: 'Ethanol is the alcohol found in alcoholic drinks. It is also called spirit of wine or grain alcohol. It is not found free in the atmosphere in large amounts; it is obtained by synthesis, fermentation or hydration of ethene.'
      },
      {
        type: 'h3',
        text: 'Occurrence and sources'
      },
      {
        type: 'p',
        text: 'Ethanol is produced when sugar is fermented by enzymes from yeast. The reaction is anaerobic, meaning it happens without air:'
      },
      {
        type: 'formula',
        text: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂    (enzymes, about 37°C)'
      },
      {
        type: 'p',
        text: 'Cracking petroleum is a source of ethene, which can then be hydrated to ethanol. Fermentation and industrial hydration are useful context, but the 2027 syllabus specifically requires the laboratory preparation by hydrolysis of an alkyl halide.'
      },
      {
        type: 'h3',
        text: 'Laboratory preparation by hydrolysis of an alkyl halide'
      },
      {
        type: 'p',
        text: 'Ethanol is prepared by heating an alkyl halide with hot dilute aqueous alkali. The alkali hydrolyses the carbon–halogen bond, replacing the halogen with –OH:'
      },
      {
        type: 'formula',
        text: 'C₂H₅Cl + KOH (aqueous) → C₂H₅OH + KCl'
      },
      {
        type: 'formula',
        text: 'C₂H₅Br + NaOH (aqueous) → C₂H₅OH + NaBr'
      },
      {
        type: 'p',
        text: 'The general pattern is RX + KOH(aq) → ROH + KX. The reaction is hydrolysis because water splits the bond; the alkali removes the halogen as a halide ion. Do not confuse this with dehydrohalogenation, which uses hot alcoholic KOH and gives an alkene.'
      },
      {
        type: 'h3',
        text: 'Industrial hydration of ethene: enrichment'
      },
      {
        type: 'p',
        text: 'Ethene can be hydrated industrially. Concentrated sulphuric acid is added to ethene at about 80°C and 30 atm to form ethyl hydrogen sulphate, which is then hydrolysed with boiling water:'
      },
      {
        type: 'formula',
        text: 'C₂H₄ + H₂SO₄ → C₂H₅HSO₄'
      },
      {
        type: 'formula',
        text: 'C₂H₅HSO₄ + H₂O → C₂H₅OH + H₂SO₄'
      },
      {
        type: 'p',
        text: 'Alternatively, ethene is heated with water at about 300°C and 60 atm in the presence of phosphoric acid. This route is important industrially but is enrichment for the 2027 alcohol wording.'
      },
      {
        type: 'visual',
        component: 'PreparationFlowVisual',
        id: 'e2-prep-visual',
        title: 'Three routes to ethanol',
        caption: 'Hydrolysis of an alkyl halide is the required laboratory route; fermentation and hydration are context.',
        description:
          'Three numbered routes show bromoethane with aqueous KOH, glucose with yeast enzymes, and ethene with steam and a catalyst. Each produces ethanol.',
        notice: [
          'Aqueous KOH gives substitution to ethanol.',
          'Alcoholic KOH would give elimination to ethene instead.',
          'Fermentation is anaerobic and uses enzymes; hydration uses ethene and a catalyst.'
        ],
        props: {
          steps: [
            {
              label: 'Hydrolysis of an alkyl halide',
              equation: 'C₂H₅Br + NaOH(aq) → C₂H₅OH + NaBr',
              detail: 'Heat with hot dilute aqueous alkali. This is the required laboratory preparation.'
            },
            {
              label: 'Fermentation of sugar',
              equation: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂',
              detail: 'Enzymes from yeast, about 37°C, anaerobic. Enrichment context.'
            },
            {
              label: 'Hydration of ethene',
              equation: 'C₂H₄ + H₂O → C₂H₅OH',
              detail: 'H₃PO₄ catalyst, about 300°C and 60 atm. Industrial enrichment.'
            }
          ],
          note: 'The laboratory route is substitution: the halogen is replaced by –OH.'
        }
      },
      {
        type: 'lab',
        component: 'PreparationLab',
        props: {
          id: 'ethanol-prep',
          title: 'Ethanol preparation control',
          routes: [
            {
              id: 'hydrolysis',
              label: 'Hydrolysis of bromoethane',
              reactants: 'Bromoethane, C₂H₅Br, and hot dilute aqueous NaOH or KOH',
              conditions: 'Heat under reflux',
              equation: 'C₂H₅Br + NaOH(aq) → C₂H₅OH + NaBr',
              product: 'Ethanol, C₂H₅OH',
              note: 'Aqueous alkali favours substitution. Alcoholic KOH would favour elimination to ethene.'
            },
            {
              id: 'fermentation',
              label: 'Fermentation of glucose',
              reactants: 'Glucose and yeast enzymes',
              conditions: 'About 37°C, anaerobic',
              equation: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂',
              product: 'Ethanol, C₂H₅OH',
              note: 'Enrichment context. The reaction is anaerobic and produces carbon dioxide.'
            },
            {
              id: 'hydration',
              label: 'Hydration of ethene',
              reactants: 'Ethene and steam',
              conditions: 'H₃PO₄ catalyst, about 300°C and 60 atm',
              equation: 'C₂H₄ + H₂O → C₂H₅OH',
              product: 'Ethanol, C₂H₅OH',
              note: 'Industrial enrichment. Sulphuric acid can also be used in a two-step process.'
            }
          ]
        }
      },
      {
        type: 'misconception',
        text: 'The reagent concentration matters. Hot dilute aqueous alkali hydrolyses an alkyl halide to an alcohol; hot concentrated alcoholic alkali eliminates HX to give an alkene.'
      },
      {
        type: 'memory',
        technique: 'Contrast pair',
        title: 'Aqueous substitutes; alcoholic eliminates',
        aid: 'Aqueous KOH puts –OH in place of the halogen. Alcoholic KOH takes H and the halogen away and leaves a double bond.',
        mapping: [
          { cue: 'Aqueous KOH', target: 'Ethanol', meaning: 'Substitution: Br is replaced by OH.' },
          { cue: 'Alcoholic KOH', target: 'Ethene', meaning: 'Elimination: H and Br are removed.' },
          { cue: 'Yeast, 37°C, no air', target: 'Fermentation', meaning: 'Glucose gives ethanol and CO₂.' },
          { cue: 'H₃PO₄, 300°C, 60 atm', target: 'Hydration of ethene', meaning: 'Industrial ethanol from ethene and steam.' }
        ],
        recall:
          'Cover the mapping. Write the hydrolysis equation and state one difference between aqueous and alcoholic KOH.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'e2-q1',
            question: '1. Which reagent hydrolyses bromoethane to ethanol?',
            options: [
              { value: 'A', text: 'Hot concentrated alcoholic KOH' },
              { value: 'B', text: 'Hot dilute aqueous KOH' },
              { value: 'C', text: 'Concentrated sulphuric acid at 170°C' },
              { value: 'D', text: 'Bromine water' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Hot dilute aqueous KOH replaces the bromine with –OH, giving ethanol.',
            wrongFeedback: 'Aqueous KOH gives substitution to ethanol. Hot alcoholic KOH would eliminate HBr and give ethene.'
          },
          {
            id: 'e2-q2',
            question: '2. Which process produces ethanol from glucose without air?',
            options: [
              { value: 'A', text: 'Fermentation' },
              { value: 'B', text: 'Dehydration' },
              { value: 'C', text: 'Halogenation' },
              { value: 'D', text: 'Combustion' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Fermentation uses yeast enzymes and is anaerobic, giving ethanol and carbon dioxide.',
            wrongFeedback: 'Fermentation is the anaerobic breakdown of glucose by yeast enzymes.'
          },
          {
            id: 'e2-q3',
            question: '3. What is the product of the reaction between ethene and steam over a phosphoric acid catalyst?',
            options: [
              { value: 'A', text: 'Ethane' },
              { value: 'B', text: 'Ethanol' },
              { value: 'C', text: 'Ethyne' },
              { value: 'D', text: 'Ethanoic acid' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Hydration of ethene adds water across the double bond to give ethanol.',
            wrongFeedback: 'Hydration adds H and OH across the C=C bond, giving ethanol.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-3',
    number: 3,
    title: 'Physical properties and combustion',
    objective:
      'Describe the physical properties of ethanol and write the equation for its complete combustion.',
    blocks: [
      {
        type: 'p',
        text: 'Ethanol is a colourless, volatile liquid with a faint odour and a burning taste. It is less dense than water and mixes with water in all proportions. Its physical properties explain why it is used as a solvent, a fuel and a preservative.'
      },
      {
        type: 'h3',
        text: 'Physical properties'
      },
      {
        type: 'table',
        caption: 'Physical properties of ethanol',
        headers: ['Property', 'Observation or value', 'Explanation'],
        rows: [
          ['Nature', 'Colourless, volatile liquid', 'Evaporates readily at room temperature.'],
          ['Odour and taste', 'Faint odour; burning taste', 'Not a reliable identification test.'],
          ['Solubility', 'Miscible with water in all proportions', 'The –OH group forms hydrogen bonds with water.'],
          ['Density', 'About 0.79 g/cm³ at 293 K', 'Less dense than water.'],
          ['Boiling point', '78.3°C', 'Higher than methanol (64.5°C) because the chain is longer.']
        ]
      },
      {
        type: 'p',
        text: 'The boiling point of alcohols rises as the carbon chain gets longer. A longer chain has stronger intermolecular forces, so more energy is needed to separate the molecules. Methanol boils at about 64.5°C and ethanol at about 78.3°C.'
      },
      {
        type: 'visual',
        component: 'PropertyTrendVisual',
        id: 'e3-trend-visual',
        title: 'Boiling points of the first alcohols',
        caption: 'Select an alcohol to compare its boiling point. The trend rises with chain length.',
        description:
          'A bar chart compares methanol, ethanol, propanol and butanol. Boiling point increases as the carbon chain gets longer; all are miscible with water.',
        notice: [
          'Methanol has the lowest boiling point of the four.',
          'Each additional CH₂ raises the boiling point.',
          'The trend is caused by stronger intermolecular forces, not stronger covalent bonds.'
        ],
        props: {
          rows: [
            { id: 'methanol', name: 'Methanol', formula: 'CH₃OH', bp: 64.5, solubility: 'Miscible with water.' },
            { id: 'ethanol', name: 'Ethanol', formula: 'C₂H₅OH', bp: 78.3, solubility: 'Miscible with water.' },
            { id: 'propanol', name: 'Propanol', formula: 'C₃H₇OH', bp: 97, solubility: 'Miscible with water.' },
            { id: 'butanol', name: 'Butanol', formula: 'C₄H₉OH', bp: 117.7, solubility: 'Soluble in water, less so than the lower alcohols.' }
          ],
          max: 130
        }
      },
      {
        type: 'h3',
        text: 'Combustion'
      },
      {
        type: 'p',
        text: 'Ethanol burns readily in air with a pale blue flame, producing carbon dioxide and water:'
      },
      {
        type: 'formula',
        text: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O + heat'
      },
      {
        type: 'p',
        text: 'The reaction releases a large amount of heat, which is why ethanol can be used as a fuel. In a limited supply of air, incomplete combustion can produce carbon monoxide or soot, just like other carbon fuels.'
      },
      {
        type: 'definition',
        label: 'Safety',
        text: 'Ethanol is toxic in large amounts and is depressant to the central nervous system. Methanol is much more dangerous: drinking it can cause blindness or death. Ethanol also damages the liver and kidneys when consumed repeatedly in large amounts.'
      },
      {
        type: 'examtip',
        text: 'When explaining the boiling-point trend, talk about intermolecular forces. Do not say that the O–H bond gets stronger as the chain gets longer; the covalent bonds are not what break during boiling.'
      },
      {
        type: 'memory',
        technique: 'Cause-and-effect chain',
        title: 'Longer chain, stronger pull, higher boiling point',
        aid: 'Add CH₂, add surface area and electrons, strengthen the forces between molecules, raise the boiling point.',
        mapping: [
          { cue: 'More CH₂', target: 'Longer chain', meaning: 'Larger surface area and more electrons.' },
          { cue: 'Stronger intermolecular forces', target: 'More energy needed', meaning: 'Boiling point rises.' },
          { cue: 'Ethanol + O₂', target: 'CO₂ + H₂O', meaning: 'Complete combustion with a pale blue flame.' }
        ],
        recall:
          'Cover the mapping. State the boiling-point trend from methanol to butanol, explain it, and write the combustion equation for ethanol.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'e3-q1',
            question: '1. Which statement about ethanol is correct?',
            options: [
              { value: 'A', text: 'It is denser than water.' },
              { value: 'B', text: 'It is miscible with water in all proportions.' },
              { value: 'C', text: 'It is insoluble in water.' },
              { value: 'D', text: 'It is a solid at room temperature.' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Ethanol is miscible with water because its –OH group forms hydrogen bonds with water.',
            wrongFeedback: 'Ethanol is a liquid that mixes with water in all proportions. It is less dense than water.'
          },
          {
            id: 'e3-q2',
            question: '2. Why does the boiling point increase from methanol to ethanol?',
            options: [
              { value: 'A', text: 'The O–H bond becomes stronger.' },
              { value: 'B', text: 'The longer chain gives stronger intermolecular forces.' },
              { value: 'C', text: 'Ethanol has fewer hydrogen atoms.' },
              { value: 'D', text: 'Ethanol is ionic.' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. A longer chain gives stronger intermolecular forces, so more energy is needed to boil the liquid.',
            wrongFeedback: 'Boiling breaks intermolecular forces, not covalent bonds. The longer ethanol chain has stronger forces between molecules.'
          },
          {
            id: 'e3-q3',
            question: '3. Which equation shows the complete combustion of ethanol?',
            options: [
              { value: 'A', text: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O' },
              { value: 'B', text: 'C₂H₅OH → C₂H₄ + H₂O' },
              { value: 'C', text: 'C₂H₅OH + Na → C₂H₅ONa + H₂' },
              { value: 'D', text: 'C₂H₅OH + CH₃COOH → CH₃COOC₂H₅ + H₂O' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Complete combustion gives carbon dioxide and water.',
            wrongFeedback: 'Complete combustion reacts ethanol with oxygen to give CO₂ and H₂O: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-4',
    number: 4,
    title: 'Reactions of ethanol',
    objective:
      'Describe the reactions of ethanol with sodium, acetic acid and concentrated sulphuric acid, and explain the products and conditions.',
    blocks: [
      {
        type: 'p',
        text: 'Ethanol is a reactive compound. The –OH group can be replaced, oxidised or eliminated, and the O–H hydrogen can be displaced by a metal. The four reactions in this lesson are the core 2027 requirements: combustion, sodium, esterification with acetic acid, and dehydration with concentrated sulphuric acid.'
      },
      {
        type: 'h3',
        text: 'Action with sodium'
      },
      {
        type: 'p',
        text: 'Sodium reacts with ethanol at room temperature, liberating hydrogen gas and forming sodium ethoxide:'
      },
      {
        type: 'formula',
        text: '2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑'
      },
      {
        type: 'p',
        text: 'The effervescence of hydrogen is a test for an alcohol. The reaction is less vigorous than the reaction of sodium with water, because ethanol is a weaker acid than water.'
      },
      {
        type: 'h3',
        text: 'Esterification with acetic acid'
      },
      {
        type: 'p',
        text: 'When ethanol is warmed with acetic acid in the presence of concentrated sulphuric acid, ethyl acetate is formed. The reaction is called esterification, and the product is an ester:'
      },
      {
        type: 'formula',
        text: 'C₂H₅OH + CH₃COOH → CH₃COOC₂H₅ + H₂O    (conc. H₂SO₄)'
      },
      {
        type: 'p',
        text: 'Ethyl acetate has a fruity smell. Esters are often detected by this smell, but the structure –COO– is the reliable identification. Concentrated sulphuric acid acts as a catalyst and removes water, shifting the equilibrium towards the ester.'
      },
      {
        type: 'h3',
        text: 'Dehydration with concentrated sulphuric acid'
      },
      {
        type: 'p',
        text: 'When concentrated sulphuric acid is added to ethanol and the mixture is heated to about 170°C, ethanol is dehydrated to ethene:'
      },
      {
        type: 'formula',
        text: 'C₂H₅OH → C₂H₄ + H₂O    (conc. H₂SO₄, 170°C)'
      },
      {
        type: 'p',
        text: 'At a lower temperature, about 140°C, the product is diethyl ether instead. The temperature therefore controls the outcome. Ethanol can also be dehydrated by passing its vapour over alumina at about 350°C.'
      },
      {
        type: 'h3',
        text: 'Oxidation: enrichment'
      },
      {
        type: 'p',
        text: 'Acidified potassium dichromate or acidified potassium manganate(VII) can oxidise ethanol first to ethanal and then to ethanoic acid. This is why wine left open in air eventually tastes like vinegar. Oxidation is enrichment for the 2027 alcohol wording but is useful for understanding the link to Chapter 12F.'
      },
      {
        type: 'visual',
        component: 'ReactionMapVisual',
        id: 'e4-reaction-visual',
        title: 'Reaction map of ethanol',
        caption: 'Choose a branch to see the reagent, equation and product for ethanol.',
        description:
          'A central ethanol molecule has branches for sodium, acetic acid, concentrated sulphuric acid at 170 degrees, and oxidation. Each branch shows the equation and product.',
        notice: [
          'The reagent decides which part of ethanol reacts.',
          'Dehydration at 170°C gives ethene; at 140°C it gives diethyl ether.',
          'Esterification produces water as well as the ester.'
        ],
        props: {
          center: 'Ethanol, C₂H₅OH',
          branches: [
            {
              id: 'sodium',
              label: 'Sodium',
              equation: '2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑',
              product: 'Sodium ethoxide and hydrogen',
              note: 'Effervescence of hydrogen; a test for the –OH group.'
            },
            {
              id: 'ester',
              label: 'Acetic acid',
              equation: 'C₂H₅OH + CH₃COOH → CH₃COOC₂H₅ + H₂O',
              product: 'Ethyl acetate and water',
              note: 'Conc. H₂SO₄ catalyst; fruity smell.'
            },
            {
              id: 'dehydrate',
              label: 'Conc. H₂SO₄, 170°C',
              equation: 'C₂H₅OH → C₂H₄ + H₂O',
              product: 'Ethene and water',
              note: 'At 140°C the product is diethyl ether instead.'
            },
            {
              id: 'oxidise',
              label: 'Acidified K₂Cr₂O₇',
              equation: 'C₂H₅OH → CH₃CHO → CH₃COOH',
              product: 'Ethanal, then ethanoic acid',
              note: 'Enrichment; links to the carboxylic acid chapter.'
            }
          ]
        }
      },
      {
        type: 'lab',
        component: 'SorterLab',
        props: {
          id: 'ethanol-reaction-sorter',
          title: 'Match the reagent to the product',
          instruction: 'Select each reaction description, then classify the product.',
          categories: [
            { id: 'ethene', label: 'Ethene' },
            { id: 'ester', label: 'Ester' },
            { id: 'ethoxide', label: 'Sodium ethoxide' },
            { id: 'acid', label: 'Ethanoic acid' }
          ],
          items: [
            {
              id: 'dehydration',
              label: 'Ethanol + conc. H₂SO₄ at 170°C',
              answer: 'ethene',
              note: 'Dehydration removes water and leaves a C=C bond.'
            },
            {
              id: 'esterification',
              label: 'Ethanol + acetic acid + conc. H₂SO₄',
              answer: 'ester',
              note: 'Ethyl acetate and water form; the ester has a fruity smell.'
            },
            {
              id: 'sodium',
              label: 'Ethanol + sodium',
              answer: 'ethoxide',
              note: 'Sodium ethoxide and hydrogen form; hydrogen bubbles are seen.'
            },
            {
              id: 'oxidation',
              label: 'Ethanol + acidified K₂Cr₂O₇',
              answer: 'acid',
              note: 'Ethanol is oxidised through ethanal to ethanoic acid; enrichment.'
            }
          ]
        }
      },
      {
        type: 'examtip',
        text: 'Include the condition with every equation. Dehydration at 170°C gives ethene, but at 140°C it gives diethyl ether. Esterification needs concentrated sulphuric acid and produces water as well as the ester.'
      },
      {
        type: 'memory',
        technique: 'Reaction map',
        title: 'Four reagents, four products',
        aid: 'Sodium gives hydrogen; acetic acid gives an ester; concentrated acid at 170°C gives ethene; oxidising agent gives ethanoic acid.',
        mapping: [
          { cue: 'Na', target: 'Sodium ethoxide + H₂', meaning: 'Metal displaces the O–H hydrogen.' },
          { cue: 'CH₃COOH / conc. H₂SO₄', target: 'Ethyl acetate + H₂O', meaning: 'Esterification with a fruity smell.' },
          { cue: 'Conc. H₂SO₄, 170°C', target: 'Ethene + H₂O', meaning: 'Dehydration; 140°C would give ether.' },
          { cue: 'Acidified K₂Cr₂O₇', target: 'Ethanal then ethanoic acid', meaning: 'Oxidation; enrichment.' }
        ],
        recall:
          'Cover the mapping. Write the four equations with their conditions and name each product.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'e4-q1',
            question: '1. What is formed when ethanol reacts with sodium?',
            options: [
              { value: 'A', text: 'Ethene and water' },
              { value: 'B', text: 'Sodium ethoxide and hydrogen' },
              { value: 'C', text: 'Ethyl acetate and water' },
              { value: 'D', text: 'Ethanoic acid and hydrogen' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Sodium displaces the O–H hydrogen, giving sodium ethoxide and hydrogen gas.',
            wrongFeedback: 'The reaction is 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑. Hydrogen effervescence is observed.'
          },
          {
            id: 'e4-q2',
            question: '2. Which product forms when ethanol is warmed with acetic acid and concentrated sulphuric acid?',
            options: [
              { value: 'A', text: 'Ethene' },
              { value: 'B', text: 'Ethyl acetate' },
              { value: 'C', text: 'Sodium ethoxide' },
              { value: 'D', text: 'Ethanal' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Esterification gives ethyl acetate and water.',
            wrongFeedback: 'Ethanol and acetic acid form the ester ethyl acetate: C₂H₅OH + CH₃COOH → CH₃COOC₂H₅ + H₂O.'
          },
          {
            id: 'e4-q3',
            question: '3. What is the product when ethanol is heated with concentrated sulphuric acid at 170°C?',
            options: [
              { value: 'A', text: 'Ethane' },
              { value: 'B', text: 'Ethene' },
              { value: 'C', text: 'Ethanoic acid' },
              { value: 'D', text: 'Diethyl ether' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. At 170°C, ethanol is dehydrated to ethene.',
            wrongFeedback: 'Dehydration at 170°C gives ethene. At about 140°C the product is diethyl ether.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-5',
    number: 5,
    title: 'Denatured alcohol, spurious alcohol and uses',
    objective:
      'Distinguish denatured and spurious alcohol, explain the risks of methanol, and describe the important uses of ethanol.',
    blocks: [
      {
        type: 'p',
        text: 'Ethanol is useful because it dissolves many substances, burns cleanly and can be made from renewable sugar. It is also a drug, and illegal or improperly made alcohol can contain methanol, which is highly poisonous. Chemistry matters here because the difference between a useful solvent and a dangerous drink is a matter of composition and control.'
      },
      {
        type: 'h3',
        text: 'Denatured or methylated spirit'
      },
      {
        type: 'p',
        text: 'Ethanol for industrial use is made undrinkable by adding small amounts of poisonous or bitter substances. The mixture is called denatured alcohol or methylated spirit. Common additives include methanol, pyridine, copper sulphate and a dye such as methyl violet.'
      },
      {
        type: 'p',
        text: 'Denatured alcohol is still ethanol chemically, so it can be used as a solvent and fuel. The additives make it unsafe to drink and easy to recognise. It is not a different alcohol.'
      },
      {
        type: 'h3',
        text: 'Spurious alcohol'
      },
      {
        type: 'p',
        text: 'Spurious alcohol is illicit liquor made by improper distillation. It may contain a large proportion of methanol, which is extremely toxic. Methanol is oxidised in the body to methanal and methanoic acid, which damage the optic nerve and other tissues. Drinking spurious alcohol can cause blindness or death.'
      },
      {
        type: 'visual',
        component: 'ComparisonVisual',
        id: 'e5-comparison-visual',
        title: 'Denatured alcohol vs spurious alcohol',
        caption: 'Both may contain methanol, but the purpose and control are different. Industrial denaturing is deliberate; spurious liquor is uncontrolled.',
        description:
          'Two cards compare denatured alcohol and spurious alcohol. Denatured alcohol is ethanol with added methanol, pyridine and dye for industrial use. Spurious alcohol is illicit liquor that may contain dangerous methanol.',
        notice: [
          'Denatured alcohol is deliberately made undrinkable.',
          'Spurious alcohol is uncontrolled and may contain dangerous amounts of methanol.',
          'Methanol poisoning can cause blindness or death.'
        ],
        props: {
          options: [
            {
              id: 'denatured',
              title: 'Denatured alcohol (methylated spirit)',
              label: 'Denatured',
              items: [
                'Ethanol with methanol, pyridine, copper sulphate and a dye.',
                'Deliberately made unfit to drink.',
                'Used as an industrial solvent and fuel.',
                'The additives are controlled and labelled.'
              ],
              note: 'Still ethanol chemically; the additives are the safety feature.'
            },
            {
              id: 'spurious',
              title: 'Spurious alcohol',
              label: 'Spurious',
              items: [
                'Illicit liquor made by improper distillation.',
                'May contain a large proportion of methanol.',
                'No controlled composition or labelling.',
                'Can cause blindness, organ damage or death.'
              ],
              note: 'The danger is uncontrolled methanol, not the ethanol itself.'
            }
          ]
        }
      },
      {
        type: 'h3',
        text: 'Uses of ethanol'
      },
      {
        type: 'list',
        items: [
          'A good solvent for gums, resins and many organic substances.',
          'In thermometers and as a preservative for biological specimens because of its low freezing point.',
          'In the manufacture of chloroform, iodoform, ether, acetic acid, dyes, esters, perfumes, antiseptics and preservatives.',
          'In alcoholic drinks such as beer, wine and spirits.',
          'As a fuel in power alcohol and as an antifreeze for automobile radiators.'
        ]
      },
      {
        type: 'p',
        text: 'Power alcohol is ethanol blended with petrol for use as a motor fuel. It is a mixture, not a different chemical. Antifreeze is a substance added to water to lower its freezing point; ethanol can serve this purpose, although other compounds are also used.'
      },
      {
        type: 'lab',
        component: 'SorterLab',
        props: {
          id: 'alcohol-risk-sorter',
          title: 'Safe use or serious risk?',
          instruction: 'Select each statement, then classify it as a safe/controlled use or a serious risk.',
          categories: [
            { id: 'safe', label: 'Safe or controlled' },
            { id: 'risk', label: 'Serious risk' }
          ],
          items: [
            {
              id: 'solvent',
              label: 'Using denatured ethanol as an industrial solvent.',
              answer: 'safe',
              note: 'The additives make it undrinkable but it remains useful as a solvent when handled correctly.'
            },
            {
              id: 'thermometer',
              label: 'Using ethanol in a laboratory thermometer.',
              answer: 'safe',
              note: 'Ethanol has a low freezing point and is suitable for low-temperature thermometers.'
            },
            {
              id: 'spurious',
              label: 'Drinking illegally distilled liquor of unknown composition.',
              answer: 'risk',
              note: 'It may contain methanol, which can cause blindness or death.'
            },
            {
              id: 'methanol',
              label: 'Assuming methanol is safe because it is an alcohol.',
              answer: 'risk',
              note: 'Methanol is highly toxic; it is not safe to drink in any amount.'
            }
          ]
        }
      },
      {
        type: 'examtip',
        text: 'For a question on denatured alcohol, name at least one denaturant and state the purpose. For spurious alcohol, name methanol as the main danger and state one consequence.'
      },
      {
        type: 'memory',
        technique: 'Contrast pair',
        title: 'Denatured is controlled; spurious is not',
        aid: 'Denatured = deliberately undrinkable, controlled additives. Spurious = illegally made, uncontrolled methanol.',
        mapping: [
          { cue: 'Denatured', target: 'Ethanol + methanol + pyridine + dye', meaning: 'Industrial use; made unfit to drink.' },
          { cue: 'Spurious', target: 'Illicit liquor', meaning: 'Uncontrolled; may contain dangerous methanol.' },
          { cue: 'Methanol', target: 'Blindness or death', meaning: 'Oxidised to toxic methanal and methanoic acid.' },
          { cue: 'Power alcohol', target: 'Ethanol + petrol', meaning: 'A fuel mixture, not a different alcohol.' }
        ],
        recall:
          'Cover the mapping. Explain the difference between denatured and spurious alcohol, then give three uses of ethanol.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'e5-q1',
            question: '1. What is denatured alcohol?',
            options: [
              { value: 'A', text: 'Pure ethanol' },
              { value: 'B', text: 'Ethanol made undrinkable by adding substances such as methanol and pyridine' },
              { value: 'C', text: 'A different alcohol from ethanol' },
              { value: 'D', text: 'Ethanol mixed with water only' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Denatured alcohol is ethanol with additives that make it unfit to drink.',
            wrongFeedback: 'Denatured alcohol is still ethanol chemically, but additives such as methanol and pyridine make it undrinkable.'
          },
          {
            id: 'e5-q2',
            question: '2. Why is spurious alcohol dangerous?',
            options: [
              { value: 'A', text: 'It contains no ethanol.' },
              { value: 'B', text: 'It may contain a dangerous amount of methanol.' },
              { value: 'C', text: 'It is always more expensive.' },
              { value: 'D', text: 'It contains too much water.' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Uncontrolled methanol in spurious liquor can cause blindness or death.',
            wrongFeedback: 'Spurious alcohol is illicit liquor that may contain methanol, a highly toxic alcohol.'
          },
          {
            id: 'e5-q3',
            question: '3. Which is a use of ethanol?',
            options: [
              { value: 'A', text: 'As a solvent for gums and resins' },
              { value: 'B', text: 'As a fertiliser' },
              { value: 'C', text: 'As a fire extinguisher' },
              { value: 'D', text: 'As a source of calcium carbide' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Ethanol is a good solvent for gums, resins and many organic substances.',
            wrongFeedback: 'Ethanol is used as a solvent, fuel, preservative and chemical feedstock, not as a fertiliser or fire extinguisher.'
          }
        ]
      }
    ]
  }
]

export const flashcards = [
  {
    id: 'e-fc1',
    question: 'What is the general formula of the monohydric alcohols?',
    answer: 'CₙH₂ₙ₊₁OH. The –OH group is attached to a carbon atom.'
  },
  {
    id: 'e-fc2',
    question: 'Distinguish monohydric, dihydric and trihydric alcohols.',
    answer:
      'Monohydric has one –OH (ethanol); dihydric has two (ethylene glycol); trihydric has three (glycerol).'
  },
  {
    id: 'e-fc3',
    question: 'How is ethanol prepared by hydrolysis of an alkyl halide?',
    answer:
      'Heat the alkyl halide with hot dilute aqueous KOH or NaOH: C₂H₅Br + NaOH → C₂H₅OH + NaBr.'
  },
  {
    id: 'e-fc4',
    question: 'How does fermentation produce ethanol?',
    answer:
      'Yeast enzymes break down glucose anaerobically at about 37°C: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.'
  },
  {
    id: 'e-fc5',
    question: 'How is ethanol made industrially from ethene?',
    answer:
      'Hydrate ethene with steam over phosphoric acid at about 300°C and 60 atm: C₂H₄ + H₂O → C₂H₅OH.'
  },
  {
    id: 'e-fc6',
    question: 'List the required physical properties of ethanol.',
    answer:
      'Colourless volatile liquid, miscible with water, density about 0.79 g/cm³, boiling point 78.3°C, faint odour and burning taste.'
  },
  {
    id: 'e-fc7',
    question: 'Write the complete combustion equation for ethanol.',
    answer: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O + heat. The flame is pale blue.'
  },
  {
    id: 'e-fc8',
    question: 'What happens when ethanol reacts with sodium?',
    answer:
      'Sodium displaces the O–H hydrogen: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑. Hydrogen effervescence is observed.'
  },
  {
    id: 'e-fc9',
    question: 'What is formed when ethanol reacts with acetic acid?',
    answer:
      'Ethyl acetate and water form with concentrated H₂SO₄ as catalyst: C₂H₅OH + CH₃COOH → CH₃COOC₂H₅ + H₂O. The ester has a fruity smell.'
  },
  {
    id: 'e-fc10',
    question: 'What happens when ethanol is dehydrated with concentrated sulphuric acid?',
    answer:
      'At about 170°C, ethene and water form: C₂H₅OH → C₂H₄ + H₂O. At about 140°C, diethyl ether forms instead.'
  },
  {
    id: 'e-fc11',
    question: 'What is denatured alcohol?',
    answer:
      'Ethanol made unfit to drink by adding methanol, pyridine, copper sulphate and a dye. It is used as an industrial solvent and fuel.'
  },
  {
    id: 'e-fc12',
    question: 'Why is spurious alcohol dangerous, and what are three uses of ethanol?',
    answer:
      'Spurious liquor may contain methanol, which can cause blindness or death. Ethanol is used as a solvent, a fuel, a preservative, in thermometers and in manufacturing chemicals.'
  }
]

export const memoryWorkshop = {
  title: 'Map ethanol from source to use',
  objective:
    'Organise preparation, physical properties, reactions and safety as one connected map.',
  intro: [
    'The central idea is the –OH group. It makes ethanol soluble, lets sodium replace its hydrogen, and allows esterification or dehydration.',
    'For safety, separate controlled denaturing from uncontrolled spurious liquor. The chemical difference is the amount and control of methanol.'
  ],
  sections: [
    {
      title: 'Preparation map',
      headers: ['Route', 'Condition', 'Equation', 'Status'],
      rows: [
        ['Hydrolysis of alkyl halide', 'Hot dilute aqueous KOH/NaOH', 'C₂H₅Br + NaOH → C₂H₅OH + NaBr', 'Required laboratory route'],
        ['Fermentation', 'Yeast enzymes, 37°C, anaerobic', 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂', 'Enrichment'],
        ['Hydration of ethene', 'H₃PO₄, 300°C, 60 atm', 'C₂H₄ + H₂O → C₂H₅OH', 'Industrial enrichment']
      ]
    },
    {
      title: 'Reaction map',
      headers: ['Reagent', 'Equation', 'Product', 'Observation'],
      rows: [
        ['Sodium', '2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑', 'Sodium ethoxide', 'Effervescence of hydrogen'],
        ['Acetic acid + conc. H₂SO₄', 'C₂H₅OH + CH₃COOH → CH₃COOC₂H₅ + H₂O', 'Ethyl acetate', 'Fruity smell'],
        ['Conc. H₂SO₄, 170°C', 'C₂H₅OH → C₂H₄ + H₂O', 'Ethene', 'Dehydration'],
        ['Acidified K₂Cr₂O₇', 'C₂H₅OH → CH₃CHO → CH₃COOH', 'Ethanal then ethanoic acid', 'Enrichment']
      ]
    },
    {
      title: 'Safety map',
      headers: ['Substance', 'What it is', 'Risk or purpose'],
      rows: [
        ['Denatured alcohol', 'Ethanol + methanol + pyridine + dye', 'Industrial use; made undrinkable'],
        ['Spurious alcohol', 'Illicit liquor', 'May contain dangerous methanol'],
        ['Methanol', 'Simplest alcohol', 'Toxic; can cause blindness or death'],
        ['Power alcohol', 'Ethanol blended with petrol', 'Motor fuel mixture']
      ]
    }
  ],
  recall:
    'Cover the tables. Say one preparation route, two reactions with conditions, the safety difference between denatured and spurious alcohol, and three uses. Repeat after 1, 3, 7 and 14 days.',
  flashcards
}

export const revision = {
  rapidSheet: [
    'Alcohols contain the hydroxyl group –OH attached to carbon; monohydric alcohols follow CₙH₂ₙ₊₁OH.',
    'Methanol, ethanol, propanol and butanol are the first four members.',
    'Ethanol is prepared by hydrolysis of an alkyl halide with hot dilute aqueous KOH.',
    'Fermentation and hydration of ethene are enrichment routes.',
    'Ethanol is a colourless volatile liquid, miscible with water, density 0.79 g/cm³, boiling point 78.3°C.',
    'Complete combustion gives CO₂ and H₂O with a pale blue flame.',
    'Sodium gives sodium ethoxide and hydrogen; acetic acid gives ethyl acetate; conc. H₂SO₄ at 170°C gives ethene.',
    'Denatured alcohol is deliberately made undrinkable; spurious alcohol may contain dangerous methanol.',
    'Uses include solvent, fuel, preservative, thermometers and chemical manufacture.'
  ],
  definitions: [
    {
      term: 'Alcohol',
      meaning: 'An organic compound containing the hydroxyl group –OH attached to a carbon atom.'
    },
    {
      term: 'Monohydric alcohol',
      meaning: 'An alcohol containing one hydroxyl group, general formula CₙH₂ₙ₊₁OH.'
    },
    {
      term: 'Hydrolysis',
      meaning:
        'A reaction in which water splits a bond; an alkyl halide with aqueous KOH gives an alcohol and a halide salt.'
    },
    {
      term: 'Esterification',
      meaning:
        'Reaction of an alcohol with a carboxylic acid, with concentrated H₂SO₄, to form an ester and water.'
    },
    {
      term: 'Denatured alcohol',
      meaning:
        'Ethanol made unfit to drink by adding substances such as methanol, pyridine and a dye.'
    },
    {
      term: 'Spurious alcohol',
      meaning:
        'Illicit liquor made by improper distillation; it may contain dangerous amounts of methanol.'
    }
  ],
  equations: [
    {
      reaction: 'Hydrolysis of bromoethane',
      equation: 'C₂H₅Br + NaOH(aq) → C₂H₅OH + NaBr',
      condition: 'Hot dilute aqueous alkali',
      observation: 'Ethanol formed by substitution.'
    },
    {
      reaction: 'Fermentation',
      equation: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂',
      condition: 'Yeast enzymes, about 37°C, anaerobic',
      observation: 'Ethanol and carbon dioxide form.'
    },
    {
      reaction: 'Hydration of ethene',
      equation: 'C₂H₄ + H₂O → C₂H₅OH',
      condition: 'H₃PO₄, 300°C, 60 atm',
      observation: 'Industrial ethanol.'
    },
    {
      reaction: 'Complete combustion',
      equation: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
      condition: 'Sufficient oxygen',
      observation: 'Pale blue flame; heat released.'
    },
    {
      reaction: 'Reaction with sodium',
      equation: '2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑',
      condition: 'Room temperature',
      observation: 'Effervescence of hydrogen.'
    },
    {
      reaction: 'Esterification',
      equation: 'C₂H₅OH + CH₃COOH → CH₃COOC₂H₅ + H₂O',
      condition: 'Conc. H₂SO₄',
      observation: 'Fruity smell of ethyl acetate.'
    },
    {
      reaction: 'Dehydration',
      equation: 'C₂H₅OH → C₂H₄ + H₂O',
      condition: 'Conc. H₂SO₄, 170°C',
      observation: 'Ethene formed; 140°C gives diethyl ether.'
    }
  ],
  comparisons: [
    {
      pair: 'Aqueous vs alcoholic KOH',
      difference:
        'Aqueous KOH substitutes the halogen to give an alcohol; alcoholic KOH eliminates HX to give an alkene.'
    },
    {
      pair: 'Denatured vs spurious alcohol',
      difference:
        'Denatured alcohol is deliberately made undrinkable under controlled conditions; spurious alcohol is uncontrolled illicit liquor that may contain dangerous methanol.'
    },
    {
      pair: 'Dehydration at 170°C vs 140°C',
      difference: '170°C gives ethene; about 140°C gives diethyl ether.'
    },
    {
      pair: 'Ethanol vs methanol',
      difference:
        'Ethanol has two carbons and is the alcohol in drinks; methanol has one carbon and is highly toxic.'
    }
  ],
  memoryAids: [
    '“Mono, di, tri: count the OH.”',
    '“Aqueous substitutes; alcoholic eliminates.”',
    '“Denatured is controlled; spurious is not.”'
  ],
  mistakes: [
    'Using alcoholic KOH for hydrolysis to ethanol. Aqueous KOH is needed for substitution.',
    'Forgetting that esterification produces water as well as the ester.',
    'Writing the dehydration product as ethane. Dehydration of ethanol gives ethene.',
    'Saying that boiling breaks the O–H covalent bond. Boiling breaks intermolecular forces.',
    'Treating denatured alcohol as a different chemical from ethanol. It is ethanol plus additives.',
    'Confusing spurious alcohol with denatured alcohol; spurious liquor is uncontrolled and may contain dangerous methanol.'
  ],
  reviewQuestions: [
    'Define an alcohol and give the general formula of the monohydric alcohols.',
    'Classify methanol, ethylene glycol and glycerol as mono-, di- or trihydric.',
    'Describe the laboratory preparation of ethanol from bromoethane, including the condition and equation.',
    'Compare fermentation and hydration of ethene as routes to ethanol.',
    'List the required physical properties of ethanol and explain the boiling-point trend in the alcohol family.',
    'Write the complete combustion equation for ethanol.',
    'Describe the reactions of ethanol with sodium, acetic acid and concentrated sulphuric acid at 170°C.',
    'Distinguish denatured alcohol from spurious alcohol and explain the danger of methanol.',
    'Give three uses of ethanol.'
  ]
}
