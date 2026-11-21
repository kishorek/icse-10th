export const lessonContent = [
  {
    id: 'lesson-1',
    number: 1,
    title: 'The carboxylic acid family',
    objective:
      'Recognise the carboxyl group –COOH, use the general formula CₙH₂ₙ₊₁COOH, classify acids as mono- or dicarboxylic, and name the first members.',
    blocks: [
      {
        type: 'p',
        text: 'Vinegar is a dilute solution of acetic acid. The sharp taste and sour smell come from a carboxyl group, –COOH. Carboxylic acids are a family of organic acids, and acetic acid is the member required for 2027.'
      },
      {
        type: 'h3',
        text: 'What is a carboxylic acid?'
      },
      {
        type: 'definition',
        label: 'Definition',
        text: 'A carboxylic acid is an organic compound containing the carboxyl group –COOH. Aliphatic monocarboxylic acids have the general formula CₙH₂ₙ₊₁COOH, also written RCOOH.'
      },
      {
        type: 'p',
        text: 'The carboxyl group is made of a carbonyl group (C=O) and a hydroxyl group (–OH) on the same carbon. The hydrogen of the –OH is the acidic hydrogen. The other hydrogens in the carbon chain are not acidic.'
      },
      {
        type: 'table',
        caption: 'The first four monocarboxylic acids',
        headers: ['Formula', 'Common name', 'IUPAC name'],
        rows: [
          ['HCOOH', 'Formic acid', 'Methanoic acid'],
          ['CH₃COOH', 'Acetic acid', 'Ethanoic acid'],
          ['CH₃CH₂COOH', 'Propionic acid', 'Propanoic acid'],
          ['CH₃CH₂CH₂COOH', 'Butyric acid', 'Butanoic acid']
        ]
      },
      {
        type: 'p',
        text: 'The IUPAC name is built by replacing the -e of the corresponding alkane with -oic acid. Methane gives methanoic acid, ethane gives ethanoic acid, and so on. These acids are also called alkanoic acids.'
      },
      {
        type: 'h3',
        text: 'Monocarboxylic and dicarboxylic acids'
      },
      {
        type: 'p',
        text: 'A monocarboxylic acid contains one –COOH group. A dicarboxylic acid contains two. Oxalic acid, (COOH)₂ or HOOC–COOH, is a dicarboxylic acid with the IUPAC name ethanedioic acid.'
      },
      {
        type: 'visual',
        component: 'FamilyLadderVisual',
        id: 'f1-family-visual',
        title: 'The carboxylic acid family ladder',
        caption: 'Every member contains one –COOH group and follows CₙH₂ₙ₊₁COOH.',
        description:
          'Three cards show methanoic acid, ethanoic acid and propanoic acid in order. The general formula is CₙH₂ₙ₊₁COOH, and each arrow adds CH₂.',
        notice: [
          'The family formula is CₙH₂ₙ₊₁COOH.',
          'The –COOH group is the acidic part.',
          'The +CH₂ step lengthens the carbon chain without changing the functional group.'
        ],
        props: {
          family: 'Carboxylic acids',
          formula: 'CₙH₂ₙ₊₁COOH',
          bondLabel: 'One carboxyl group, –COOH, in each monocarboxylic acid.',
          members: [
            { name: 'Methanoic acid', formula: 'HCOOH', note: 'one carbon' },
            { name: 'Ethanoic acid', formula: 'CH₃COOH', note: 'two carbons' },
            { name: 'Propanoic acid', formula: 'C₂H₅COOH', note: 'three carbons' }
          ]
        }
      },
      {
        type: 'lab',
        component: 'SorterLab',
        props: {
          id: 'acid-sorter',
          title: 'Mono- or dicarboxylic?',
          instruction: 'Select each acid, then classify it by the number of –COOH groups.',
          categories: [
            { id: 'mono', label: 'Monocarboxylic' },
            { id: 'di', label: 'Dicarboxylic' }
          ],
          items: [
            {
              id: 'methanoic',
              label: 'Methanoic acid, HCOOH',
              answer: 'mono',
              note: 'One –COOH group.'
            },
            {
              id: 'ethanoic',
              label: 'Ethanoic acid, CH₃COOH',
              answer: 'mono',
              note: 'One –COOH group on a two-carbon chain.'
            },
            {
              id: 'oxalic',
              label: 'Oxalic acid, HOOC–COOH',
              answer: 'di',
              note: 'Two –COOH groups; IUPAC name ethanedioic acid.'
            },
            {
              id: 'propanoic',
              label: 'Propanoic acid, C₂H₅COOH',
              answer: 'mono',
              note: 'One –COOH group on a three-carbon chain.'
            }
          ]
        }
      },
      {
        type: 'examtip',
        text: 'Do not count every hydrogen as acidic. Only the hydrogen of the –COOH group is released as H⁺ in an acid reaction.'
      },
      {
        type: 'memory',
        technique: 'Word pattern',
        title: 'Alkane minus e, plus oic acid',
        aid: 'Methane → methanoic acid; ethane → ethanoic acid; propane → propanoic acid. Drop the -e and add -oic acid.',
        mapping: [
          { cue: 'Methane', target: 'Methanoic acid', meaning: 'One-carbon acid, HCOOH.' },
          { cue: 'Ethane', target: 'Ethanoic acid', meaning: 'Two-carbon acid, CH₃COOH.' },
          { cue: 'Propane', target: 'Propanoic acid', meaning: 'Three-carbon acid, C₂H₅COOH.' }
        ],
        recall:
          'Cover the mapping. Name the first three monocarboxylic acids from their alkane names and write their formulae.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'f1-q1',
            question: '1. Which group is present in every carboxylic acid?',
            options: [
              { value: 'A', text: '–OH only' },
              { value: 'B', text: '–CHO' },
              { value: 'C', text: '–COOH' },
              { value: 'D', text: '–O–' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. The carboxyl group –COOH defines the carboxylic acid family.',
            wrongFeedback: 'Carboxylic acids contain the carboxyl group –COOH, which includes both C=O and –OH on the same carbon.'
          },
          {
            id: 'f1-q2',
            question: '2. Which is the IUPAC name of CH₃COOH?',
            options: [
              { value: 'A', text: 'Methanoic acid' },
              { value: 'B', text: 'Ethanoic acid' },
              { value: 'C', text: 'Propanoic acid' },
              { value: 'D', text: 'Ethanal' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. CH₃COOH has two carbon atoms and is ethanoic acid; acetic acid is the common name.',
            wrongFeedback: 'Two carbons give the root eth-, and the acid suffix is -oic acid. The IUPAC name is ethanoic acid.'
          },
          {
            id: 'f1-q3',
            question: '3. Which acid is dicarboxylic?',
            options: [
              { value: 'A', text: 'Methanoic acid' },
              { value: 'B', text: 'Acetic acid' },
              { value: 'C', text: 'Oxalic acid' },
              { value: 'D', text: 'Propanoic acid' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. Oxalic acid, HOOC–COOH, has two carboxyl groups.',
            wrongFeedback: 'Oxalic acid contains two –COOH groups and is dicarboxylic. The others each have one.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    number: 2,
    title: 'Acetic acid: structure and physical properties',
    objective:
      'Describe the structure of acetic acid, explain vinegar and glacial acetic acid, and list the required physical properties.',
    blocks: [
      {
        type: 'p',
        text: 'Acetic acid is the acid that gives vinegar its sour taste and pungent smell. Its name comes from the Latin acetum, meaning vinegar. Pure acetic acid is a colourless liquid, but a 4–5% aqueous solution is the vinegar used in food.'
      },
      {
        type: 'h3',
        text: 'Structure of acetic acid'
      },
      {
        type: 'p',
        text: 'Acetic acid is CH₃COOH. The carboxyl carbon is joined to a methyl group, double-bonded to one oxygen atom and single-bonded to a hydroxyl group. The acidic hydrogen is the one on the –OH of the carboxyl group.'
      },
      {
        type: 'visual',
        component: 'MoleculeVisual',
        id: 'f2-structure-visual',
        title: 'The structure of acetic acid',
        caption: 'A methyl group is attached to a carboxyl group; the carboxyl carbon carries one =O and one –OH.',
        description:
          'A structural formula shows CH₃–COOH. The carboxyl carbon is double-bonded to oxygen and single-bonded to a hydroxyl group.',
        notice: [
          'The –COOH group is the acidic part.',
          'The C=O and –OH are on the same carbon.',
          'The methyl hydrogens are not acidic.'
        ],
        props: { kind: 'acetic' }
      },
      {
        type: 'h3',
        text: 'Vinegar and glacial acetic acid'
      },
      {
        type: 'p',
        text: 'Vinegar is a dilute solution of acetic acid, about 4–5% by mass. The colouring matter from the original fruit or wine can give vinegar a greyish colour. Vinegar is used for flavouring and preserving food.'
      },
      {
        type: 'p',
        text: 'Pure acetic acid is called glacial acetic acid because it freezes to ice-like crystals at about 17°C. It is hygroscopic, meaning it absorbs moisture from the air, and it has a specific gravity of about 1.08 at 0°C. It is miscible with water, alcohol and ether in all proportions.'
      },
      {
        type: 'visual',
        component: 'ComparisonVisual',
        id: 'f2-comparison-visual',
        title: 'Vinegar or glacial acetic acid?',
        caption: 'The same acid, but very different concentration and behaviour.',
        description:
          'Two cards compare dilute vinegar with pure glacial acetic acid. Vinegar is about 4–5% acid; glacial acetic acid is pure, hygroscopic and freezes at about 17 degrees Celsius.',
        notice: [
          'Vinegar is a mixture, not pure acid.',
          'Glacial acetic acid is pure and freezes to ice-like crystals.',
          'Both contain the same –COOH group; concentration is the difference.'
        ],
        props: {
          options: [
            {
              id: 'vinegar',
              title: 'Vinegar',
              label: 'Vinegar',
              items: [
                'About 4–5% acetic acid in water.',
                'Used for flavouring and preserving food.',
                'May be coloured by the original fruit or wine.',
                'A mixture, not a pure compound.'
              ],
              note: 'The sour taste and smell come from acetic acid.'
            },
            {
              id: 'glacial',
              title: 'Glacial acetic acid',
              label: 'Glacial',
              items: [
                'Pure acetic acid.',
                'Freezes to ice-like crystals at about 17°C.',
                'Hygroscopic; absorbs moisture from the air.',
                'Miscible with water, alcohol and ether.'
              ],
              note: '“Glacial” describes the ice-like solid, not the source of the acid.'
            }
          ]
        }
      },
      {
        type: 'h3',
        text: 'Physical properties'
      },
      {
        type: 'table',
        caption: 'Physical properties of acetic acid',
        headers: ['Property', 'Observation or value'],
        rows: [
          ['Physical state', 'Colourless liquid'],
          ['Odour', 'Characteristic pungent smell'],
          ['Boiling point', '118°C'],
          ['Melting point', '17°C; anhydrous acid forms ice-like crystals'],
          ['Nature', 'Hygroscopic; specific gravity 1.08 at 0°C'],
          ['Solubility', 'Miscible with water, alcohol and ether']
        ]
      },
      {
        type: 'lab',
        component: 'SorterLab',
        props: {
          id: 'acid-property-sorter',
          title: 'Vinegar or glacial acid?',
          instruction: 'Select each statement, then classify it as a property of vinegar or of glacial acetic acid.',
          categories: [
            { id: 'vinegar', label: 'Vinegar' },
            { id: 'glacial', label: 'Glacial acetic acid' }
          ],
          items: [
            {
              id: 'five',
              label: 'A 4–5% aqueous solution used on food.',
              answer: 'vinegar',
              note: 'Vinegar is dilute acetic acid.'
            },
            {
              id: 'freezes',
              label: 'Freezes to ice-like crystals at about 17°C.',
              answer: 'glacial',
              note: 'Pure acetic acid is called glacial because of this behaviour.'
            },
            {
              id: 'hygroscopic',
              label: 'Absorbs moisture from the air.',
              answer: 'glacial',
              note: 'Pure acetic acid is hygroscopic.'
            },
            {
              id: 'flavour',
              label: 'Used for flavouring and preserving food.',
              answer: 'vinegar',
              note: 'Vinegar is the food-grade dilute acid.'
            }
          ]
        }
      },
      {
        type: 'examtip',
        text: 'If a question asks why pure acetic acid is called glacial, answer with the freezing behaviour: it forms ice-like crystals at about 17°C. Do not say that it comes from a glacier.'
      },
      {
        type: 'memory',
        technique: 'Word association',
        title: 'Glacial = ice-like, not icy source',
        aid: 'Glacial acetic acid freezes at 17°C into ice-like crystals. Vinegar is the dilute, food-grade solution.',
        mapping: [
          { cue: 'Glacial', target: 'Pure acetic acid', meaning: 'Ice-like crystals at about 17°C.' },
          { cue: 'Vinegar', target: '4–5% acetic acid', meaning: 'Dilute solution used in food.' },
          { cue: 'Hygroscopic', target: 'Absorbs moisture', meaning: 'Pure acid takes water from the air.' },
          { cue: 'Miscible', target: 'Mixes in all proportions', meaning: 'With water, alcohol and ether.' }
        ],
        recall:
          'Cover the mapping. Define vinegar and glacial acetic acid, and state two physical properties of pure acetic acid.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'f2-q1',
            question: '1. What is vinegar?',
            options: [
              { value: 'A', text: 'Pure acetic acid' },
              { value: 'B', text: 'A 4–5% aqueous solution of acetic acid' },
              { value: 'C', text: 'Ethanol' },
              { value: 'D', text: 'A carboxylic acid with two –COOH groups' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Vinegar is a dilute aqueous solution of acetic acid, about 4–5%.',
            wrongFeedback: 'Vinegar is dilute acetic acid, not the pure acid. Pure acetic acid is glacial acetic acid.'
          },
          {
            id: 'f2-q2',
            question: '2. Why is pure acetic acid called glacial acetic acid?',
            options: [
              { value: 'A', text: 'It comes from glaciers.' },
              { value: 'B', text: 'It freezes to ice-like crystals at about 17°C.' },
              { value: 'C', text: 'It is always frozen.' },
              { value: 'D', text: 'It contains ice.' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Pure acetic acid solidifies at about 17°C into ice-like crystals.',
            wrongFeedback: 'The name comes from the ice-like appearance of the pure solid, which forms at about 17°C.'
          },
          {
            id: 'f2-q3',
            question: '3. Which statement about acetic acid is correct?',
            options: [
              { value: 'A', text: 'It is insoluble in water.' },
              { value: 'B', text: 'It is miscible with water, alcohol and ether.' },
              { value: 'C', text: 'It is a strong base.' },
              { value: 'D', text: 'It contains no oxygen.' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Acetic acid is miscible with water, alcohol and ether in all proportions.',
            wrongFeedback: 'Acetic acid is a weak acid and is miscible with water, alcohol and ether.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-3',
    number: 3,
    title: 'Acidic reactions and esterification',
    objective:
      'Describe the reactions of acetic acid with litmus, alkalis and ethanol, and explain esterification.',
    blocks: [
      {
        type: 'p',
        text: 'Acetic acid is a weak acid, but it still shows the characteristic reactions of an acid. It turns blue litmus red, reacts with alkalis to form a salt and water, and reacts with alcohols to form esters. These reactions are the core 2027 requirements.'
      },
      {
        type: 'h3',
        text: 'Acid strength and litmus'
      },
      {
        type: 'p',
        text: 'Acetic acid is a weak acid because it ionises only partially in water. A dilute solution still turns blue litmus red. Do not confuse weak with dilute: a concentrated weak acid can be corrosive, while a dilute strong acid is still a strong acid.'
      },
      {
        type: 'formula',
        text: 'CH₃COOH ⇌ CH₃COO⁻ + H⁺'
      },
      {
        type: 'h3',
        text: 'Reaction with alkalis'
      },
      {
        type: 'p',
        text: 'Acetic acid neutralises an alkali to form a salt and water. With sodium hydroxide, sodium acetate forms:'
      },
      {
        type: 'formula',
        text: 'CH₃COOH + NaOH → CH₃COONa + H₂O'
      },
      {
        type: 'p',
        text: 'The salt is sodium acetate (sodium ethanoate). The reaction is a neutralisation, even though the acid is weak.'
      },
      {
        type: 'h3',
        text: 'Reaction with carbonates and metals: enrichment'
      },
      {
        type: 'p',
        text: 'Acetic acid also liberates carbon dioxide from carbonates and hydrogen carbonates, and hydrogen from active metals such as zinc and magnesium. These reactions support the idea that it is an acid, but the 2027 wording specifically names litmus, alkalis and alcohols.'
      },
      {
        type: 'formula',
        text: '2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑'
      },
      {
        type: 'formula',
        text: 'CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑'
      },
      {
        type: 'h3',
        text: 'Esterification with ethanol'
      },
      {
        type: 'p',
        text: 'When acetic acid is warmed with ethanol in the presence of concentrated sulphuric acid, ethyl acetate forms. The reaction is called esterification:'
      },
      {
        type: 'formula',
        text: 'CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O    (conc. H₂SO₄)'
      },
      {
        type: 'p',
        text: 'Ethyl acetate has a pleasant fruity smell. The ester linkage is –COO–. Concentrated sulphuric acid acts as a catalyst and helps remove water, shifting the equilibrium towards the ester.'
      },
      {
        type: 'visual',
        component: 'ReactionMapVisual',
        id: 'f3-reaction-visual',
        title: 'Acetic acid reaction map',
        caption: 'Choose a reagent to see the equation and the evidence for acidity.',
        description:
          'A central acetic acid molecule has branches for litmus, sodium hydroxide, sodium carbonate and ethanol. Each branch shows the equation and observation.',
        notice: [
          'Litmus and alkalis are the core 2027 reactions.',
          'Carbonates give carbon dioxide; this supports the acidic nature.',
          'Esterification needs concentrated sulphuric acid and gives a fruity-smelling ester.'
        ],
        props: {
          center: 'Acetic acid, CH₃COOH',
          branches: [
            {
              id: 'litmus',
              label: 'Blue litmus',
              equation: 'CH₃COOH ⇌ CH₃COO⁻ + H⁺',
              product: 'Litmus turns red',
              note: 'Evidence of acidity; acetic acid is a weak acid.'
            },
            {
              id: 'alkali',
              label: 'Sodium hydroxide',
              equation: 'CH₃COOH + NaOH → CH₃COONa + H₂O',
              product: 'Sodium acetate and water',
              note: 'Neutralisation gives a salt and water.'
            },
            {
              id: 'carbonate',
              label: 'Sodium carbonate',
              equation: '2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑',
              product: 'Sodium acetate, water and carbon dioxide',
              note: 'Effervescence supports the acidic nature; enrichment.'
            },
            {
              id: 'ester',
              label: 'Ethanol + conc. H₂SO₄',
              equation: 'CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O',
              product: 'Ethyl acetate and water',
              note: 'Esterification; fruity smell.'
            }
          ]
        }
      },
      {
        type: 'visual',
        component: 'BondChangeVisual',
        id: 'f4-ester-visual',
        title: 'Esterification: acid + alcohol → ester + water',
        caption: 'The acid and alcohol join through an –COO– linkage and eliminate water.',
        description:
          'Acetic acid reacts with ethanol to form ethyl acetate and water. The ester contains the –COO– linkage.',
        notice: [
          'Water is a product, not a solvent.',
          'The ester linkage is –COO–.',
          'Concentrated sulphuric acid is a catalyst.'
        ],
        props: {
          left: 'CH₃COOH',
          reagent: 'C₂H₅OH',
          right: 'CH₃COOC₂H₅',
          bond: 'double',
          bondNote: 'carboxyl + hydroxyl',
          productLabel: 'ester + water',
          note: 'The product is ethyl acetate; water is also formed. Conc. H₂SO₄ catalyses the reaction.'
        }
      },
      {
        type: 'lab',
        component: 'EsterBuilderLab',
        props: {
          id: 'ester-builder',
          title: 'Ester builder',
          acids: [
            { id: 'methanoic', label: 'Methanoic acid, HCOOH' },
            { id: 'ethanoic', label: 'Ethanoic acid, CH₃COOH' }
          ],
          alcohols: [
            { id: 'methanol', label: 'Methanol, CH₃OH' },
            { id: 'ethanol', label: 'Ethanol, C₂H₅OH' }
          ],
          products: {
            'methanoic:methanol': {
              name: 'Methyl methanoate',
              formula: 'HCOOCH₃',
              note: 'A fruity-smelling ester formed from methanoic acid and methanol.'
            },
            'methanoic:ethanol': {
              name: 'Ethyl methanoate',
              formula: 'HCOOC₂H₅',
              note: 'A fruity-smelling ester formed from methanoic acid and ethanol.'
            },
            'ethanoic:methanol': {
              name: 'Methyl ethanoate',
              formula: 'CH₃COOCH₃',
              note: 'A fruity-smelling ester formed from ethanoic acid and methanol.'
            },
            'ethanoic:ethanol': {
              name: 'Ethyl ethanoate (ethyl acetate)',
              formula: 'CH₃COOC₂H₅',
              note: 'The ester formed from ethanoic acid and ethanol; fruity smell.'
            }
          }
        }
      },
      {
        type: 'examtip',
        text: 'For esterification, write the acid first, the alcohol second, and include water as a product. Do not write the ester as if it were an ether; the –COO– linkage is the key.'
      },
      {
        type: 'memory',
        technique: 'Pattern sentence',
        title: 'Acid plus alcohol, ester plus water',
        aid: '“Acid plus alcohol, ester plus water” is the whole esterification pattern. Concentrated sulphuric acid is the catalyst.',
        mapping: [
          { cue: 'Acid', target: 'CH₃COOH', meaning: 'Provides the –COO– part of the ester.' },
          { cue: 'Alcohol', target: 'C₂H₅OH', meaning: 'Provides the alkyl group.' },
          { cue: 'Ester', target: 'CH₃COOC₂H₅', meaning: 'Ethyl acetate; fruity smell.' },
          { cue: 'Water', target: 'H₂O', meaning: 'Eliminated during esterification.' }
        ],
        recall:
          'Cover the mapping. Write the esterification equation and name the ester formed from acetic acid and ethanol.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'f3-q1',
            question: '1. What is observed when blue litmus is added to acetic acid?',
            options: [
              { value: 'A', text: 'It turns red.' },
              { value: 'B', text: 'It turns blue.' },
              { value: 'C', text: 'It becomes colourless.' },
              { value: 'D', text: 'No change.' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Acetic acid turns blue litmus red, showing that it is acidic.',
            wrongFeedback: 'Acids turn blue litmus red. Acetic acid is a weak acid but still gives this test.'
          },
          {
            id: 'f3-q2',
            question: '2. What is formed when acetic acid reacts with sodium hydroxide?',
            options: [
              { value: 'A', text: 'Sodium acetate and water' },
              { value: 'B', text: 'Ethyl acetate and water' },
              { value: 'C', text: 'Ethanol and carbon dioxide' },
              { value: 'D', text: 'Sodium chloride and hydrogen' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Neutralisation gives sodium acetate and water: CH₃COOH + NaOH → CH₃COONa + H₂O.',
            wrongFeedback: 'An acid and an alkali give a salt and water. With sodium hydroxide, the salt is sodium acetate.'
          },
          {
            id: 'f3-q3',
            question: '3. What is formed when acetic acid reacts with ethanol in the presence of concentrated sulphuric acid?',
            options: [
              { value: 'A', text: 'Ethene and water' },
              { value: 'B', text: 'Ethyl acetate and water' },
              { value: 'C', text: 'Sodium acetate and hydrogen' },
              { value: 'D', text: 'Ethanal and oxygen' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Esterification gives ethyl acetate and water.',
            wrongFeedback: 'The reaction is esterification: CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-4',
    number: 4,
    title: 'Preparation context, tests and uses',
    objective:
      'Describe the preparation and uses of acetic acid, and distinguish it from other acids using simple tests.',
    blocks: [
      {
        type: 'p',
        text: 'Acetic acid is made industrially from ethyne or ethanol, and it is used in food, medicine, dyes, perfumes and materials. The 2027 syllabus requires its structure, physical properties, reactions with litmus, alkalis and alcohols, and uses. The preparation routes and extra tests in this lesson are useful context and enrichment.'
      },
      {
        type: 'h3',
        text: 'Preparation from ethyne: enrichment'
      },
      {
        type: 'p',
        text: 'Ethyne is first converted into ethanal by passing it through 40% sulphuric acid at about 60°C with mercury(II) sulphate as catalyst. Ethanal is then oxidised to acetic acid by passing a mixture of its vapour and air over manganese acetate at about 70°C:'
      },
      {
        type: 'formula',
        text: 'C₂H₂ + H₂O → CH₃CHO    (H₂SO₄, HgSO₄, 60°C)'
      },
      {
        type: 'formula',
        text: '2CH₃CHO + O₂ → 2CH₃COOH    (manganese acetate, 70°C)'
      },
      {
        type: 'h3',
        text: 'Preparation from ethanol: enrichment'
      },
      {
        type: 'p',
        text: 'Ethanol vapour and air are passed over platinum black at about 300°C. The ethanol is oxidised to acetic acid:'
      },
      {
        type: 'formula',
        text: 'C₂H₅OH + O₂ → CH₃COOH + H₂O    (Pt, 300°C)'
      },
      {
        type: 'p',
        text: 'In the laboratory, acetic acid can be prepared by oxidising ethanol or ethanal with acidified potassium dichromate or acidified potassium manganate(VII). These preparation routes are not required by the 2027 wording but help connect the chapters.'
      },
      {
        type: 'h3',
        text: 'Tests for acetic acid'
      },
      {
        type: 'list',
        items: [
          'Add sodium carbonate or sodium hydrogen carbonate: carbon dioxide is evolved.',
          'Warm with ethanol and concentrated sulphuric acid: a fruity smell of ethyl acetate is produced.',
          'Add neutral iron(III) chloride solution: a wine-red colour is produced. This is an enrichment test.'
        ]
      },
      {
        type: 'h3',
        text: 'Uses of acetic acid'
      },
      {
        type: 'list',
        items: [
          'As a solvent for resins and cellulose.',
          'As a laboratory reagent.',
          'As vinegar for flavouring and preserving food.',
          'In medicines.',
          'In the production of dyes, perfumes and esters.',
          'For coagulating rubber latex.',
          'For making cellulose acetate, used in materials, varnishes and rayon.'
        ]
      },
      {
        type: 'visual',
        component: 'UsesExplorer',
        id: 'f4-uses-visual',
        title: 'Uses of acetic acid',
        caption: 'Select a use to see the property that makes it possible.',
        description:
          'A set of use cards explains vinegar, solvents, medicines, dyes and cellulose acetate. Each card links the use to a property of acetic acid.',
        notice: [
          'Vinegar is the dilute food-grade use.',
          'The solvent use depends on miscibility with organic substances.',
          'Esters made from acetic acid are used in perfumes and flavourings.'
        ],
        props: {
          uses: [
            {
              id: 'vinegar',
              label: 'Vinegar',
              title: 'Flavouring and preserving food',
              detail: 'A 4–5% solution of acetic acid is used as vinegar.',
              link: 'The sour taste and antimicrobial effect come from the acid.'
            },
            {
              id: 'solvent',
              label: 'Solvent',
              title: 'Solvent for resins and cellulose',
              detail: 'Acetic acid dissolves many organic materials.',
              link: 'It is miscible with water and many organic solvents.'
            },
            {
              id: 'medicine',
              label: 'Medicine',
              title: 'Medicines and laboratory reagent',
              detail: 'Acetic acid is used in some medicines and as a laboratory acid.',
              link: 'It is a weak acid, so it can be used where a strong acid would be too harsh.'
            },
            {
              id: 'esters',
              label: 'Esters',
              title: 'Dyes, perfumes and esters',
              detail: 'Acetic acid is used to make esters for flavours and fragrances.',
              link: 'Esterification with alcohols gives fruity-smelling esters.'
            },
            {
              id: 'cellulose',
              label: 'Cellulose acetate',
              title: 'Materials, varnishes and rayon',
              detail: 'Cellulose acetate is made using acetic acid.',
              link: 'The acid reacts with cellulose to form a useful modified material.'
            }
          ]
        }
      },
      {
        type: 'lab',
        component: 'SorterLab',
        props: {
          id: 'acetic-use-sorter',
          title: 'Which property explains the use?',
          instruction: 'Select each use, then choose the property that best explains it.',
          categories: [
            { id: 'acid', label: 'Acidic nature' },
            { id: 'solvent', label: 'Solvent behaviour' },
            { id: 'ester', label: 'Ester formation' }
          ],
          items: [
            {
              id: 'vinegar-use',
              label: 'Vinegar preserves food.',
              answer: 'acid',
              note: 'The acidic nature inhibits many microorganisms.'
            },
            {
              id: 'resin-use',
              label: 'Acetic acid dissolves resins.',
              answer: 'solvent',
              note: 'It mixes with many organic substances.'
            },
            {
              id: 'perfume-use',
              label: 'Esters from acetic acid are used in perfumes.',
              answer: 'ester',
              note: 'Esterification produces fruity-smelling compounds.'
            },
            {
              id: 'medicine-use',
              label: 'Acetic acid is used as a laboratory acid.',
              answer: 'acid',
              note: 'It provides H⁺ in acid reactions while being a weak acid.'
            }
          ]
        }
      },
      {
        type: 'examtip',
        text: 'For a uses question, link each use to a property. “Vinegar” is not an explanation by itself; say that the dilute acid flavours and preserves food. For esters, name the fruity smell and the –COO– linkage.'
      },
      {
        type: 'memory',
        technique: 'Use-to-property map',
        title: 'Vinegar, solvent, ester, medicine',
        aid: 'Four use pictures: a salad (vinegar), a dissolving jar (solvent), a perfume bottle (ester) and a medicine bottle.',
        mapping: [
          { cue: 'Salad', target: 'Vinegar', meaning: 'Dilute acetic acid flavours and preserves food.' },
          { cue: 'Dissolving jar', target: 'Solvent', meaning: 'Acetic acid dissolves resins and cellulose.' },
          { cue: 'Perfume bottle', target: 'Ester', meaning: 'Esterification gives fruity-smelling esters.' },
          { cue: 'Medicine bottle', target: 'Medicine/laboratory', meaning: 'Weak acid used in medicines and as a reagent.' }
        ],
        recall:
          'Cover the mapping. Give four uses of acetic acid and link each to a property.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'f4-q1',
            question: '1. Which gas is evolved when acetic acid reacts with sodium carbonate?',
            options: [
              { value: 'A', text: 'Hydrogen' },
              { value: 'B', text: 'Oxygen' },
              { value: 'C', text: 'Carbon dioxide' },
              { value: 'D', text: 'Chlorine' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. Carbon dioxide is evolved: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑.',
            wrongFeedback: 'Acids liberate carbon dioxide from carbonates and hydrogen carbonates.'
          },
          {
            id: 'f4-q2',
            question: '2. Which observation suggests the formation of ethyl acetate?',
            options: [
              { value: 'A', text: 'A fruity smell' },
              { value: 'B', text: 'A white precipitate' },
              { value: 'C', text: 'A purple colour' },
              { value: 'D', text: 'A sooty flame' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Esters such as ethyl acetate have a characteristic fruity smell.',
            wrongFeedback: 'Esterification produces a fruity-smelling ester. A white precipitate is not the usual observation here.'
          },
          {
            id: 'f4-q3',
            question: '3. Which is a use of acetic acid?',
            options: [
              { value: 'A', text: 'Making vinegar' },
              { value: 'B', text: 'Making window glass' },
              { value: 'C', text: 'Extinguishing fires' },
              { value: 'D', text: 'Making calcium carbide' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Dilute acetic acid is vinegar, used for flavouring and preserving food.',
            wrongFeedback: 'Acetic acid is used as vinegar, a solvent, in medicines, dyes, perfumes and cellulose acetate.'
          }
        ]
      }
    ]
  }
]

export const flashcards = [
  {
    id: 'f-fc1',
    question: 'What is the general formula of the aliphatic monocarboxylic acids?',
    answer: 'CₙH₂ₙ₊₁COOH, also written RCOOH.'
  },
  {
    id: 'f-fc2',
    question: 'What is the carboxyl group, and why is it acidic?',
    answer:
      'The –COOH group. Its –OH hydrogen can be released as H⁺, so the compound behaves as an acid.'
  },
  {
    id: 'f-fc3',
    question: 'Name the first three monocarboxylic acids and give their formulae.',
    answer: 'Methanoic acid, HCOOH; ethanoic acid, CH₃COOH; propanoic acid, C₂H₅COOH.'
  },
  {
    id: 'f-fc4',
    question: 'What is the difference between a monocarboxylic and a dicarboxylic acid?',
    answer:
      'A monocarboxylic acid has one –COOH group; a dicarboxylic acid has two, e.g. oxalic acid, HOOC–COOH.'
  },
  {
    id: 'f-fc5',
    question: 'What is vinegar?',
    answer: 'A 4–5% aqueous solution of acetic acid, used for flavouring and preserving food.'
  },
  {
    id: 'f-fc6',
    question: 'Why is pure acetic acid called glacial acetic acid?',
    answer:
      'It freezes to ice-like crystals at about 17°C. It is also hygroscopic and miscible with water, alcohol and ether.'
  },
  {
    id: 'f-fc7',
    question: 'What is observed when acetic acid is added to blue litmus?',
    answer: 'Blue litmus turns red, showing that acetic acid is acidic.'
  },
  {
    id: 'f-fc8',
    question: 'Write the equation for acetic acid with sodium hydroxide.',
    answer: 'CH₃COOH + NaOH → CH₃COONa + H₂O. Sodium acetate and water form.'
  },
  {
    id: 'f-fc9',
    question: 'What is esterification?',
    answer:
      'Reaction of a carboxylic acid with an alcohol in the presence of concentrated H₂SO₄ to form an ester and water.'
  },
  {
    id: 'f-fc10',
    question: 'Write the equation for acetic acid with ethanol.',
    answer:
      'CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O. The ester is ethyl acetate, with a fruity smell.'
  },
  {
    id: 'f-fc11',
    question: 'How is acetic acid prepared industrially from ethyne?',
    answer:
      'Ethyne is hydrated to ethanal with H₂SO₄/HgSO₄ at 60°C, then ethanal is oxidised to acetic acid over manganese acetate at 70°C.'
  },
  {
    id: 'f-fc12',
    question: 'Give four uses of acetic acid.',
    answer:
      'Vinegar for food, solvent for resins and cellulose, medicines and laboratory reagent, dyes/perfumes/esters, and cellulose acetate for materials and rayon.'
  }
]

export const memoryWorkshop = {
  title: 'Map the acid from group to use',
  objective:
    'Organise the carboxyl group, physical properties, acid reactions, esterification and uses into one connected map.',
  intro: [
    'The central idea is the carboxyl group –COOH. It provides the acidic hydrogen and the ester linkage.',
    'For uses, always link the use to a property: acid for vinegar and neutralisation, solvent behaviour for resins, ester formation for perfumes.'
  ],
  sections: [
    {
      title: 'Structure and property map',
      headers: ['Feature', 'Consequence', 'Example'],
      rows: [
        ['–COOH group', 'Weak acid; turns blue litmus red', 'Acetic acid, CH₃COOH'],
        ['Hygroscopic pure acid', 'Absorbs moisture; freezes at 17°C', 'Glacial acetic acid'],
        ['Miscible with water', 'Forms vinegar when dilute', '4–5% solution'],
        ['Ester linkage –COO–', 'Fruity-smelling esters', 'Ethyl acetate']
      ]
    },
    {
      title: 'Reaction map',
      headers: ['Reagent', 'Equation', 'Product', 'Observation'],
      rows: [
        ['Blue litmus', 'CH₃COOH ⇌ CH₃COO⁻ + H⁺', 'Red litmus', 'Acidic'],
        ['NaOH', 'CH₃COOH + NaOH → CH₃COONa + H₂O', 'Sodium acetate', 'Neutralisation'],
        ['Na₂CO₃', '2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑', 'Sodium acetate + CO₂', 'Effervescence'],
        ['Ethanol + conc. H₂SO₄', 'CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O', 'Ethyl acetate', 'Fruity smell']
      ]
    },
    {
      title: 'Use-to-property map',
      headers: ['Use', 'Property', 'Example'],
      rows: [
        ['Vinegar', 'Acidic nature', 'Flavouring and preserving food'],
        ['Solvent', 'Miscibility', 'Resins and cellulose'],
        ['Perfumes and flavours', 'Ester formation', 'Ethyl acetate'],
        ['Materials', 'Cellulose acetate formation', 'Varnishes and rayon']
      ]
    }
  ],
  recall:
    'Cover the tables. State the carboxyl group, the vinegar/glacial distinction, two acid reactions, the esterification equation and three uses. Repeat after 1, 3, 7 and 14 days.',
  flashcards
}

export const revision = {
  rapidSheet: [
    'Carboxylic acids contain the carboxyl group –COOH; aliphatic monocarboxylic acids follow CₙH₂ₙ₊₁COOH.',
    'Methanoic, ethanoic, propanoic and butanoic acids are the first four members.',
    'Acetic acid is CH₃COOH; its IUPAC name is ethanoic acid.',
    'Vinegar is a 4–5% solution of acetic acid; pure acid is glacial acetic acid, freezing at about 17°C.',
    'Acetic acid is a weak acid; it turns blue litmus red and reacts with alkalis to give a salt and water.',
    'Esterification with ethanol and concentrated H₂SO₄ gives ethyl acetate and water.',
    'Carbonates and hydrogen carbonates give carbon dioxide; this supports the acidic nature.',
    'Uses include vinegar, solvent, medicines, dyes, perfumes, esters and cellulose acetate.'
  ],
  definitions: [
    {
      term: 'Carboxylic acid',
      meaning: 'An organic acid containing the carboxyl group –COOH.'
    },
    {
      term: 'Carboxyl group',
      meaning: 'The group –COOH, made of a carbonyl group and a hydroxyl group on the same carbon.'
    },
    {
      term: 'Vinegar',
      meaning: 'A 4–5% aqueous solution of acetic acid, used for flavouring and preserving food.'
    },
    {
      term: 'Glacial acetic acid',
      meaning:
        'Pure acetic acid, which freezes to ice-like crystals at about 17°C and is hygroscopic.'
    },
    {
      term: 'Esterification',
      meaning:
        'Reaction of a carboxylic acid with an alcohol, with concentrated H₂SO₄, forming an ester and water.'
    },
    {
      term: 'Weak acid',
      meaning: 'An acid that ionises only partially in water; acetic acid is a weak acid.'
    }
  ],
  equations: [
    {
      reaction: 'Acetic acid with litmus',
      equation: 'CH₃COOH ⇌ CH₃COO⁻ + H⁺',
      condition: 'Aqueous solution',
      observation: 'Blue litmus turns red.'
    },
    {
      reaction: 'Neutralisation with sodium hydroxide',
      equation: 'CH₃COOH + NaOH → CH₃COONa + H₂O',
      condition: 'Aqueous solution',
      observation: 'Salt and water form.'
    },
    {
      reaction: 'Reaction with sodium carbonate',
      equation: '2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂↑',
      condition: 'Aqueous solution',
      observation: 'Effervescence of carbon dioxide.'
    },
    {
      reaction: 'Esterification',
      equation: 'CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O',
      condition: 'Conc. H₂SO₄, warm',
      observation: 'Fruity smell of ethyl acetate.'
    },
    {
      reaction: 'Preparation from ethyne',
      equation: 'C₂H₂ + H₂O → CH₃CHO; 2CH₃CHO + O₂ → 2CH₃COOH',
      condition: 'H₂SO₄/HgSO₄, 60°C; manganese acetate, 70°C',
      observation: 'Enrichment: ethyne to ethanal to acetic acid.'
    },
    {
      reaction: 'Preparation from ethanol',
      equation: 'C₂H₅OH + O₂ → CH₃COOH + H₂O',
      condition: 'Platinum black, about 300°C',
      observation: 'Enrichment: ethanol oxidised to acetic acid.'
    }
  ],
  comparisons: [
    {
      pair: 'Vinegar vs glacial acetic acid',
      difference:
        'Vinegar is a 4–5% solution used in food; glacial acetic acid is pure, hygroscopic and freezes at about 17°C.'
    },
    {
      pair: 'Monocarboxylic vs dicarboxylic acid',
      difference: 'One –COOH group vs two –COOH groups.'
    },
    {
      pair: 'Acetic acid vs ethanol',
      difference:
        'Acetic acid contains –COOH and is acidic; ethanol contains –OH and is neutral.'
    },
    {
      pair: 'Ester vs ether',
      difference: 'An ester contains –COO–; an ether contains –O– between two carbon groups.'
    }
  ],
  memoryAids: [
    '“Alkane minus e, plus oic acid”: methane → methanoic acid, ethane → ethanoic acid.',
    '“Glacial = ice-like, not icy source”: pure acetic acid freezes at about 17°C.',
    '“Acid plus alcohol, ester plus water”: esterification.'
  ],
  mistakes: [
    'Calling every hydrogen in acetic acid acidic. Only the –COOH hydrogen is acidic.',
    'Saying that vinegar is pure acetic acid. Vinegar is a 4–5% solution.',
    'Explaining “glacial” as coming from a glacier. It describes the ice-like solid.',
    'Forgetting water as a product of esterification.',
    'Confusing a weak acid with a dilute acid. Acetic acid is weak because it ionises partially.',
    'Writing the ester as an ether. The ester linkage is –COO–.'
  ],
  reviewQuestions: [
    'Define a carboxylic acid and give the general formula of the aliphatic monocarboxylic acids.',
    'Name and draw the first three monocarboxylic acids.',
    'Describe the structure of acetic acid and identify the acidic hydrogen.',
    'Explain the difference between vinegar and glacial acetic acid.',
    'List the required physical properties of acetic acid.',
    'Describe the reactions of acetic acid with litmus, sodium hydroxide and ethanol.',
    'Write the esterification equation and name the ester formed.',
    'Describe how acetic acid is prepared from ethyne or ethanol as enrichment.',
    'Give four uses of acetic acid and link each to a property.'
  ]
}
