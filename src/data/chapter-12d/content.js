export const lessonContent = [
  {
    id: 'lesson-1',
    number: 1,
    title: 'The alkyne family',
    objective:
      'Define alkynes, use the general formula CₙH₂ₙ₋₂, recognise position and chain isomers, and explain why alkynes are unsaturated.',
    blocks: [
      {
        type: 'p',
        text: 'Ethyne, or acetylene, burns with a very hot flame used for welding. It is the first member of the alkyne family, hydrocarbons that contain a carbon–carbon triple bond. The triple bond makes alkynes even more unsaturated than alkenes, and their general formula shows two fewer hydrogen atoms than the corresponding alkene.'
      },
      {
        type: 'h3',
        text: 'What is an alkyne?'
      },
      {
        type: 'definition',
        label: 'Definition',
        text: 'Alkynes are unsaturated aliphatic hydrocarbons containing one carbon–carbon triple bond. Their general formula is CₙH₂ₙ₋₂.'
      },
      {
        type: 'table',
        caption: 'The first three alkynes',
        headers: ['Name', 'Molecular formula', 'Condensed formula', 'Structural feature'],
        rows: [
          ['Ethyne (acetylene)', 'C₂H₂', 'CH≡CH', 'One C≡C bond'],
          ['Propyne', 'C₃H₄', 'CH₃–C≡CH', 'One C≡C bond'],
          ['Butyne', 'C₄H₆', 'CH₃–CH₂–C≡CH', 'One C≡C bond']
        ]
      },
      {
        type: 'p',
        text: 'Each member differs from the previous member by CH₂, just like other homologous series. The family name ending -yne marks the triple bond. The older name acetylene is still used for ethyne, but the IUPAC name is ethyne.'
      },
      {
        type: 'h3',
        text: 'Why alkynes are unsaturated'
      },
      {
        type: 'p',
        text: 'A triple bond contains three shared pairs of electrons. The carbon atoms can add more atoms across the triple bond, so the molecule is unsaturated. Addition can occur in two stages: the triple bond first becomes a double bond, and then a single bond.'
      },
      {
        type: 'misconception',
        text: 'Do not call the triple bond “three single bonds”. It is one bond made of three shared electron pairs between the same two carbon atoms.'
      },
      {
        type: 'h3',
        text: 'Sources and occurrence'
      },
      {
        type: 'p',
        text: 'Alkynes are reactive and do not remain free in nature for long. Traces of ethyne occur in coal gas and in gases obtained by decomposing complex organic compounds. It is also obtained by cracking alkanes from petroleum.'
      },
      {
        type: 'h3',
        text: 'Isomerism in alkynes'
      },
      {
        type: 'p',
        text: 'Alkynes with four or more carbon atoms can form isomers. Butyne, C₄H₆, shows both position isomerism and chain isomerism.'
      },
      {
        type: 'list',
        items: [
          'But-1-yne: CH₃–CH₂–C≡CH. The triple bond starts at carbon 1.',
          'But-2-yne: CH₃–C≡C–CH₃. The triple bond starts at carbon 2.',
          'The two are position isomers because the carbon skeleton is the same.'
        ]
      },
      {
        type: 'visual',
        component: 'FamilyLadderVisual',
        id: 'd1-family-visual',
        title: 'The alkyne family ladder',
        caption: 'Every alkyne has one C≡C bond and follows CₙH₂ₙ₋₂; each step adds CH₂.',
        description:
          'Three cards show ethyne, propyne and butyne in order. The general formula is CₙH₂ₙ₋₂, and each arrow adds one carbon and two hydrogen atoms.',
        notice: [
          'The family formula is CₙH₂ₙ₋₂.',
          'Every member contains exactly one C≡C triple bond.',
          'The +CH₂ step gives the same 14 g/mol increase as other homologous series.'
        ],
        props: {
          family: 'Alkynes',
          formula: 'CₙH₂ₙ₋₂',
          bondLabel: 'One carbon–carbon triple bond in every member.',
          members: [
            { name: 'Ethyne', formula: 'C₂H₂', note: 'first member' },
            { name: 'Propyne', formula: 'C₃H₄', note: 'adds CH₂' },
            { name: 'Butyne', formula: 'C₄H₆', note: 'isomers appear' }
          ]
        }
      },
      {
        type: 'lab',
        component: 'IsomerLab',
        props: {
          id: 'alkyne-isomers',
          title: 'Butyne isomer explorer',
          isomers: [
            {
              id: 'but-1-yne',
              name: 'But-1-yne',
              formula: 'C₄H₆',
              structure: 'CH₃–CH₂–C≡CH',
              type: 'Position isomerism',
              note: 'The triple bond begins at carbon 1 of the four-carbon chain.'
            },
            {
              id: 'but-2-yne',
              name: 'But-2-yne',
              formula: 'C₄H₆',
              structure: 'CH₃–C≡C–CH₃',
              type: 'Position isomerism',
              note: 'The triple bond begins at carbon 2; the skeleton is still a straight chain.'
            }
          ]
        }
      },
      {
        type: 'examtip',
        text: 'Number the longest chain so that the triple bond gets the lowest possible number, just as for the double bond in alkenes.'
      },
      {
        type: 'memory',
        technique: 'Acrostic',
        title: 'Every pupil brings',
        aid: '“Every pupil brings” also gives the first three alkynes in order; only the ending changes to -yne.',
        mapping: [
          { cue: 'Every', target: 'Ethyne', meaning: 'The first member, C₂H₂.' },
          { cue: 'Pupil', target: 'Propyne', meaning: 'The second member, C₃H₄.' },
          { cue: 'Brings', target: 'Butyne', meaning: 'The third member, C₄H₆, which has position isomers.' }
        ],
        recall:
          'Cover the mapping. Say the sentence, then write the name and formula of the first three alkynes and state the general formula.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'd1-q1',
            question: '1. Which general formula represents the alkynes?',
            options: [
              { value: 'A', text: 'CₙH₂ₙ₊₂' },
              { value: 'B', text: 'CₙH₂ₙ' },
              { value: 'C', text: 'CₙH₂ₙ₋₂' },
              { value: 'D', text: 'CₙH₂ₙ₊₁OH' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. Alkynes contain one C≡C bond, so their general formula is CₙH₂ₙ₋₂.',
            wrongFeedback: 'The alkyne formula has four fewer hydrogen atoms than the alkane formula. That is CₙH₂ₙ₋₂.'
          },
          {
            id: 'd1-q2',
            question: '2. But-1-yne and but-2-yne have the same molecular formula. What type of isomerism do they show?',
            options: [
              { value: 'A', text: 'Chain isomerism' },
              { value: 'B', text: 'Position isomerism' },
              { value: 'C', text: 'Functional isomerism' },
              { value: 'D', text: 'No isomerism' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. The skeleton is the same; only the position of the triple bond changes.',
            wrongFeedback: 'Both have the same straight carbon skeleton. The triple bond is in a different position, so they are position isomers.'
          },
          {
            id: 'd1-q3',
            question: '3. Why is ethyne described as unsaturated?',
            options: [
              { value: 'A', text: 'It contains a triple bond and can add atoms.' },
              { value: 'B', text: 'It contains only single bonds.' },
              { value: 'C', text: 'It is a gas.' },
              { value: 'D', text: 'It contains no carbon.' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. The triple bond allows addition, so ethyne is unsaturated.',
            wrongFeedback: 'The triple bond is the key. It can be partially or completely saturated by addition.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    number: 2,
    title: 'Ethyne: structure and preparation',
    objective:
      'Describe the linear structure of ethyne and explain its preparation from calcium carbide and from 1,2-dibromoethane.',
    blocks: [
      {
        type: 'p',
        text: 'Ethyne is a colourless gas when pure, with a faint ether-like smell. The gas prepared from calcium carbide often has a garlic odour because of impurities such as phosphine and hydrogen sulphide. It is lighter than air and only slightly soluble in water.'
      },
      {
        type: 'h3',
        text: 'The structure of ethyne'
      },
      {
        type: 'p',
        text: 'In ethyne, each carbon atom is joined to one hydrogen atom by a single bond and to the other carbon atom by a triple bond. The shape of the molecule is linear: H–C≡C–H.'
      },
      {
        type: 'visual',
        component: 'MoleculeVisual',
        id: 'd2-structure-visual',
        title: 'Ethyne is linear',
        caption: 'A triple bond joins the two carbon atoms, and each carbon carries one hydrogen.',
        description:
          'A structural diagram shows H–C≡C–H in a straight line, with three shared pairs between the carbon atoms.',
        notice: [
          'The C≡C bond is one triple bond, not three single bonds.',
          'The molecule is linear.',
          'Each carbon forms two bonds in total: one to H and three to the other carbon.'
        ],
        props: { kind: 'ethyne' }
      },
      {
        type: 'h3',
        text: 'Preparation from calcium carbide'
      },
      {
        type: 'p',
        text: 'Ethyne is prepared in the laboratory by the action of water on calcium carbide. Water is added drop by drop through a thistle funnel onto calcium carbide in a flask. The reaction is exothermic and produces ethyne gas:'
      },
      {
        type: 'formula',
        text: 'CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑'
      },
      {
        type: 'p',
        text: 'The gas is collected by downward displacement of water because it is insoluble in water. The flask should not contain air when the reaction starts, because ethyne forms an explosive mixture with air. The air is displaced with oil gas before collection.'
      },
      {
        type: 'p',
        text: 'Impurities such as phosphine, hydrogen sulphide, ammonia and arsine are formed from impurities in the calcium carbide. Passing the gas through acidified copper(II) sulphate solution or acidified potassium dichromate removes phosphine and other impurities.'
      },
      {
        type: 'h3',
        text: 'Preparation from 1,2-dibromoethane'
      },
      {
        type: 'p',
        text: 'When 1,2-dibromoethane is boiled with alcoholic potassium hydroxide, ethyne is formed. This is a double dehydrohalogenation: hydrogen and bromine are removed from each carbon.'
      },
      {
        type: 'formula',
        text: 'C₂H₄Br₂ + 2KOH (alcoholic) → C₂H₂ + 2KBr + 2H₂O'
      },
      {
        type: 'visual',
        component: 'PreparationFlowVisual',
        id: 'd2-prep-visual',
        title: 'Two routes to ethyne',
        caption: 'Calcium carbide reacts with water; 1,2-dibromoethane loses H and Br with alcoholic KOH.',
        description:
          'Two numbered routes show water dripping onto calcium carbide to release ethyne, and 1,2-dibromoethane boiling with alcoholic potassium hydroxide to release ethyne.',
        notice: [
          'Calcium carbide + water is the standard laboratory preparation.',
          '1,2-dibromoethane requires hot alcoholic KOH for double elimination.',
          'Both routes produce the same C≡C triple bond.'
        ],
        props: {
          steps: [
            {
              label: 'Calcium carbide + water',
              equation: 'CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑',
              detail: 'Add water drop by drop. The reaction is exothermic; collect ethyne over water.'
            },
            {
              label: 'Purification',
              equation: 'Impurities: PH₃, H₂S, NH₃, AsH₃',
              detail: 'Pass through acidified copper(II) sulphate or acidified potassium dichromate.'
            },
            {
              label: '1,2-dibromoethane + alcoholic KOH',
              equation: 'C₂H₄Br₂ + 2KOH → C₂H₂ + 2KBr + 2H₂O',
              detail: 'Boil with alcoholic KOH. H and Br are removed from each carbon.'
            }
          ],
          note: 'The product in both routes is ethyne, C₂H₂.'
        }
      },
      {
        type: 'lab',
        component: 'PreparationLab',
        props: {
          id: 'ethyne-prep',
          title: 'Ethyne preparation control',
          routes: [
            {
              id: 'carbide',
              label: 'Calcium carbide + water',
              reactants: 'Calcium carbide, CaC₂, and water',
              conditions: 'Water added drop by drop; reaction is exothermic',
              equation: 'CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑',
              product: 'Ethyne, C₂H₂',
              collection: 'Downward displacement of water; ethyne is insoluble.',
              note: 'Purify through acidified CuSO₄ or acidified K₂Cr₂O₇ to remove phosphine and H₂S.'
            },
            {
              id: 'dibromoethane',
              label: '1,2-dibromoethane + alcoholic KOH',
              reactants: '1,2-dibromoethane, C₂H₄Br₂, and alcoholic KOH',
              conditions: 'Boil under reflux',
              equation: 'C₂H₄Br₂ + 2KOH → C₂H₂ + 2KBr + 2H₂O',
              product: 'Ethyne, C₂H₂',
              collection: 'Collect over water after condensation.',
              note: 'This is a double dehydrohalogenation. Aqueous KOH would favour substitution.'
            }
          ]
        }
      },
      {
        type: 'misconception',
        text: 'Do not say that ethyne is “collected by upward displacement of air”. It is insoluble in water, so downward displacement of water is used. Air must be displaced from the apparatus before collection because ethyne–air mixtures are explosive.'
      },
      {
        type: 'memory',
        technique: 'Cause-and-effect chain',
        title: 'Carbide meets water; dibromide meets alkali',
        aid: 'Two pictures: water dripping onto carbide, and a dibromide boiling with alcoholic KOH. Both leave a triple bond behind.',
        mapping: [
          { cue: 'CaC₂ + H₂O', target: 'Ethyne + calcium hydroxide', meaning: 'Water hydrolyses calcium carbide.' },
          { cue: 'Acidified CuSO₄', target: 'Purification', meaning: 'Removes phosphine and other impurities.' },
          { cue: 'C₂H₄Br₂ + alcoholic KOH', target: 'Ethyne + KBr + H₂O', meaning: 'Double elimination removes H and Br from each carbon.' }
        ],
        recall:
          'Cover the mapping. Write both preparation equations and state one safety precaution.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'd2-q1',
            question: '1. Which reactants prepare ethyne in the laboratory?',
            options: [
              { value: 'A', text: 'Calcium carbide and water' },
              { value: 'B', text: 'Calcium carbonate and hydrochloric acid' },
              { value: 'C', text: 'Sodium ethanoate and soda lime' },
              { value: 'D', text: 'Ethanol and concentrated sulphuric acid' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Calcium carbide reacts with water to give ethyne and calcium hydroxide.',
            wrongFeedback: 'Ethyne is prepared from calcium carbide and water. Calcium carbonate with acid gives carbon dioxide, not ethyne.'
          },
          {
            id: 'd2-q2',
            question: '2. Why is ethyne collected over water?',
            options: [
              { value: 'A', text: 'It is insoluble in water.' },
              { value: 'B', text: 'It is heavier than water.' },
              { value: 'C', text: 'It reacts with water.' },
              { value: 'D', text: 'It dissolves completely in water.' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Ethyne is only slightly soluble, so it can be collected by downward displacement of water.',
            wrongFeedback: 'Ethyne is insoluble in water, so water displacement is suitable. It is not collected by air displacement because explosive mixtures can form.'
          },
          {
            id: 'd2-q3',
            question: '3. What is the shape of the ethyne molecule?',
            options: [
              { value: 'A', text: 'Planar' },
              { value: 'B', text: 'Tetrahedral' },
              { value: 'C', text: 'Linear' },
              { value: 'D', text: 'Bent' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. H–C≡C–H is linear.',
            wrongFeedback: 'The two carbon atoms and two hydrogen atoms lie on a straight line, so ethyne is linear.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-3',
    number: 3,
    title: 'Addition reactions of ethyne',
    objective:
      'Describe the stepwise addition of hydrogen and halogens to ethyne and explain why the product becomes more saturated at each stage.',
    blocks: [
      {
        type: 'p',
        text: 'Ethyne is highly reactive because of its triple bond. Addition can happen in two stages: the triple bond first becomes a double bond, and then the double bond becomes a single bond. Each stage adds a pair of atoms.'
      },
      {
        type: 'h3',
        text: 'Addition of hydrogen'
      },
      {
        type: 'p',
        text: 'With nickel, platinum or palladium as catalyst, ethyne adds hydrogen in two stages:'
      },
      {
        type: 'formula',
        text: 'C₂H₂ + H₂ → C₂H₄    (first stage)'
      },
      {
        type: 'formula',
        text: 'C₂H₄ + H₂ → C₂H₆    (second stage)'
      },
      {
        type: 'p',
        text: 'The overall change is:'
      },
      {
        type: 'formula',
        text: 'C₂H₂ + 2H₂ → C₂H₆'
      },
      {
        type: 'p',
        text: 'The first product, ethene, is still unsaturated. The final product, ethane, is saturated. The product therefore depends on how much hydrogen is supplied and on the catalyst.'
      },
      {
        type: 'h3',
        text: 'Addition of halogens'
      },
      {
        type: 'p',
        text: 'Bromine in carbon tetrachloride adds to ethyne in two stages. The brown colour disappears as the bromine is used up:'
      },
      {
        type: 'formula',
        text: 'C₂H₂ + Br₂ → C₂H₂Br₂    (acetylene dibromide)'
      },
      {
        type: 'formula',
        text: 'C₂H₂Br₂ + Br₂ → C₂H₂Br₄    (acetylene tetrabromide)'
      },
      {
        type: 'p',
        text: 'Chlorine behaves in the same way in an inert solvent such as carbon tetrachloride. In sunlight, chlorine reacts vigorously with ethyne and can produce carbon and hydrogen chloride. Iodine reacts slowly in the presence of alcohol to give the di-iodo derivative.'
      },
      {
        type: 'visual',
        component: 'BondChangeVisual',
        id: 'd3-addition-visual',
        title: 'Two-stage addition to ethyne',
        caption: 'The triple bond first becomes a double bond, then a single bond; each stage adds a pair of atoms.',
        description:
          'Ethyne reacts with bromine in two stages. The first stage gives a dibromo compound with a double bond; the second gives a tetrabromo compound with only single bonds.',
        notice: [
          'Stage 1 leaves a double bond, so the product is still unsaturated.',
          'Stage 2 removes the double bond, giving a saturated product.',
          'The bromine colour fades at each stage.'
        ],
        props: {
          left: 'C₂H₂',
          reagent: 'Br₂',
          right: 'C₂H₂Br₄',
          bond: 'triple',
          note: 'With one equivalent of Br₂ the product is C₂H₂Br₂; with excess Br₂ it is C₂H₂Br₄.'
        }
      },
      {
        type: 'lab',
        component: 'SorterLab',
        props: {
          id: 'ethyne-addition-sorter',
          title: 'How many pairs added?',
          instruction: 'Select each product, then classify how many pairs of atoms have added to ethyne.',
          categories: [
            { id: 'one', label: 'One pair added' },
            { id: 'two', label: 'Two pairs added' }
          ],
          items: [
            {
              id: 'ethene',
              label: 'Ethene, C₂H₄, from ethyne + H₂',
              answer: 'one',
              note: 'One H₂ molecule has added; a double bond remains.'
            },
            {
              id: 'ethane',
              label: 'Ethane, C₂H₆, from ethyne + excess H₂',
              answer: 'two',
              note: 'Two H₂ molecules have added; only single bonds remain.'
            },
            {
              id: 'dibromide',
              label: 'C₂H₂Br₂ from ethyne + one Br₂',
              answer: 'one',
              note: 'One Br₂ molecule has added; a double bond remains.'
            },
            {
              id: 'tetrabromide',
              label: 'C₂H₂Br₄ from ethyne + excess Br₂',
              answer: 'two',
              note: 'Two Br₂ molecules have added; the product is saturated.'
            }
          ]
        }
      },
      {
        type: 'h3',
        text: 'Reaction with hydrogen chloride and ozone: enrichment'
      },
      {
        type: 'p',
        text: 'Ethyne also adds hydrogen chloride in two stages, first to chloroethene and then to 1,1-dichloroethane. Ozone reacts with ethyne to give an ozonide. These reactions are useful context but are not the main 2027 requirement, which emphasises addition of hydrogen and the halogens Cl₂, Br₂ and I₂.'
      },
      {
        type: 'examtip',
        text: 'If a question says “excess” hydrogen or bromine, take the addition to the saturated product. If it says “one mole” or “one equivalent”, stop at the first stage and show the double bond that remains.'
      },
      {
        type: 'memory',
        technique: 'Two-step story',
        title: 'Triple, double, single',
        aid: 'Think of a staircase: triple → double → single. Each step down adds one pair of atoms.',
        mapping: [
          { cue: 'Triple', target: 'Ethyne, C₂H₂', meaning: 'Starting point with three shared pairs.' },
          { cue: 'Double', target: 'Ethene, C₂H₄, or C₂H₂Br₂', meaning: 'One pair of atoms has added.' },
          { cue: 'Single', target: 'Ethane, C₂H₆, or C₂H₂Br₄', meaning: 'Two pairs of atoms have added; product is saturated.' }
        ],
        recall:
          'Cover the mapping. Write the two-stage hydrogenation and bromination equations, then say which product is saturated.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'd3-q1',
            question: '1. What is the product of the first stage of hydrogenation of ethyne?',
            options: [
              { value: 'A', text: 'Ethane' },
              { value: 'B', text: 'Ethene' },
              { value: 'C', text: 'Ethanol' },
              { value: 'D', text: 'Ethyne' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. The first H₂ molecule converts the triple bond to a double bond, giving ethene.',
            wrongFeedback: 'Hydrogenation is stepwise. The first stage gives ethene; a second H₂ gives ethane.'
          },
          {
            id: 'd3-q2',
            question: '2. What is the formula of the product when excess bromine reacts with ethyne?',
            options: [
              { value: 'A', text: 'C₂H₂Br₂' },
              { value: 'B', text: 'C₂H₂Br₄' },
              { value: 'C', text: 'C₂H₄Br₂' },
              { value: 'D', text: 'C₂H₆' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Two Br₂ molecules add, giving C₂H₂Br₄.',
            wrongFeedback: 'With excess bromine, both stages occur: C₂H₂ + 2Br₂ → C₂H₂Br₄.'
          },
          {
            id: 'd3-q3',
            question: '3. Why is the final product of complete hydrogenation saturated?',
            options: [
              { value: 'A', text: 'The triple bond has become a single bond and only single bonds remain.' },
              { value: 'B', text: 'It contains a double bond.' },
              { value: 'C', text: 'It contains a triple bond.' },
              { value: 'D', text: 'It has lost all its hydrogen.' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Complete addition removes the multiple bond, leaving a saturated alkane.',
            wrongFeedback: 'After two H₂ additions, ethyne becomes ethane, which has only single bonds.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-4',
    number: 4,
    title: 'Combustion, uses and distinguishing tests',
    objective:
      'Describe the combustion and uses of ethyne and use the bromine, KMnO₄, cuprous chloride and silver nitrate tests to distinguish alkanes, alkenes and alkynes.',
    blocks: [
      {
        type: 'p',
        text: 'Ethyne contains a higher proportion of carbon than ethane or ethene. That is why it burns with a sooty flame in air and why it can produce a very hot flame when burned in pure oxygen. Its reactivity also gives it distinctive laboratory tests.'
      },
      {
        type: 'h3',
        text: 'Combustion of ethyne'
      },
      {
        type: 'p',
        text: 'In a limited supply of air, ethyne burns with a sooty flame. In excess air it burns with a brilliant white flame and produces carbon dioxide, water vapour and a large amount of heat:'
      },
      {
        type: 'formula',
        text: '2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O + heat'
      },
      {
        type: 'p',
        text: 'The oxy-acetylene flame is hot enough to melt and weld metals. The flame temperature comes from complete combustion in oxygen, not from the fuel alone.'
      },
      {
        type: 'h3',
        text: 'Uses of ethyne'
      },
      {
        type: 'list',
        items: [
          'Oxy-acetylene welding and cutting of metals at very high temperature.',
          'Illuminant in oxy-acetylene lamps.',
          'Artificial ripening and preservation of fruit.',
          'Manufacture of synthetic polymers, rubber and oxalic acid.',
          'Manufacture of acetaldehyde, acetic acid, plastics and other organic chemicals.'
        ]
      },
      {
        type: 'p',
        text: 'Ethyne is stored and handled carefully because ethyne–air mixtures are explosive over a wide range. Industrial cylinders use a porous packing and a solvent such as acetone to reduce the hazard.'
      },
      {
        type: 'h3',
        text: 'Distinguishing alkanes, alkenes and alkynes'
      },
      {
        type: 'table',
        caption: 'Four tests and what they show',
        headers: ['Test', 'Alkane', 'Alkene', 'Alkyne'],
        rows: [
          ['Bromine in CCl₄', 'No change', 'Orange-brown colour decolourised', 'Colour decolourised'],
          ['Alkaline KMnO₄', 'No change', 'Purple colour fades (Baeyer’s test)', 'Purple colour fades; ethyne oxidised to oxalic acid'],
          ['Ammoniacal cuprous chloride', 'No change', 'No change', 'Red precipitate of copper acetylide'],
          ['Ammoniacal silver nitrate', 'No change', 'No change', 'White precipitate of silver acetylide']
        ]
      },
      {
        type: 'p',
        text: 'The first two tests show unsaturation: both alkenes and alkynes react. The copper and silver tests are more specific: they detect a terminal alkyne such as ethyne because the hydrogen on the triple-bonded carbon is acidic enough to be replaced by a metal.'
      },
      {
        type: 'visual',
        component: 'TestBenchVisual',
        id: 'd4-test-visual',
        title: 'Hydrocarbon identification bench',
        caption: 'Choose a gas and a test. The observation tells you which family the gas belongs to.',
        description:
          'A test bench compares methane, ethene and ethyne with bromine in carbon tetrachloride, alkaline potassium manganate(VII), ammoniacal cuprous chloride and ammoniacal silver nitrate.',
        notice: [
          'Bromine and KMnO₄ react with both alkenes and alkynes.',
          'Cuprous chloride gives a red precipitate only with a terminal alkyne.',
          'Silver nitrate gives a white precipitate only with a terminal alkyne.'
        ],
        props: {
          samples: [
            { id: 'methane', label: 'Methane, CH₄' },
            { id: 'ethene', label: 'Ethene, C₂H₄' },
            { id: 'ethyne', label: 'Ethyne, C₂H₂' }
          ],
          tests: [
            { id: 'bromine', label: 'Bromine in CCl₄' },
            { id: 'kmno4', label: 'Alkaline KMnO₄' },
            { id: 'cuprous', label: 'Ammoniacal cuprous chloride' },
            { id: 'silver', label: 'Ammoniacal silver nitrate' }
          ],
          results: {
            methane: {
              bromine: { observation: 'No change.', conclusion: 'Methane is saturated.' },
              kmno4: { observation: 'No change.', conclusion: 'Methane is not oxidised under these conditions.' },
              cuprous: { observation: 'No change.', conclusion: 'No terminal alkyne.' },
              silver: { observation: 'No change.', conclusion: 'No terminal alkyne.' }
            },
            ethene: {
              bromine: { observation: 'Orange-brown colour decolourised.', conclusion: 'Ethene is unsaturated.' },
              kmno4: { observation: 'Purple colour fades.', conclusion: 'Ethene is oxidised; Baeyer’s test is positive.' },
              cuprous: { observation: 'No change.', conclusion: 'No terminal alkyne.' },
              silver: { observation: 'No change.', conclusion: 'No terminal alkyne.' }
            },
            ethyne: {
              bromine: { observation: 'Orange-brown colour decolourised.', conclusion: 'Ethyne is unsaturated.' },
              kmno4: {
                observation: 'Purple colour fades.',
                conclusion: 'Ethyne is oxidised; oxalic acid is formed.',
                equation: 'CH≡CH + 4[O] → HOOC–COOH'
              },
              cuprous: {
                observation: 'Red precipitate forms.',
                conclusion: 'Copper acetylide forms; ethyne has a terminal alkyne hydrogen.'
              },
              silver: {
                observation: 'White precipitate forms.',
                conclusion: 'Silver acetylide forms; confirms a terminal alkyne.'
              }
            }
          }
        }
      },
      {
        type: 'lab',
        component: 'TestBenchLab',
        props: {
          id: 'hydrocarbon-tests',
          title: 'Hydrocarbon identification bench',
          samples: [
            { id: 'methane', label: 'Methane, CH₄' },
            { id: 'ethene', label: 'Ethene, C₂H₄' },
            { id: 'ethyne', label: 'Ethyne, C₂H₂' }
          ],
          tests: [
            { id: 'bromine', label: 'Bromine in CCl₄' },
            { id: 'kmno4', label: 'Alkaline KMnO₄' },
            { id: 'cuprous', label: 'Ammoniacal cuprous chloride' },
            { id: 'silver', label: 'Ammoniacal silver nitrate' }
          ],
          results: {
            methane: {
              bromine: { observation: 'No change.', conclusion: 'Saturated alkane.' },
              kmno4: { observation: 'No change.', conclusion: 'No oxidation.' },
              cuprous: { observation: 'No change.', conclusion: 'No terminal alkyne.' },
              silver: { observation: 'No change.', conclusion: 'No terminal alkyne.' }
            },
            ethene: {
              bromine: { observation: 'Decolourised.', conclusion: 'Unsaturated alkene.' },
              kmno4: { observation: 'Purple colour fades.', conclusion: 'Alkene is oxidised.' },
              cuprous: { observation: 'No change.', conclusion: 'No terminal alkyne.' },
              silver: { observation: 'No change.', conclusion: 'No terminal alkyne.' }
            },
            ethyne: {
              bromine: { observation: 'Decolourised.', conclusion: 'Unsaturated alkyne.' },
              kmno4: { observation: 'Purple colour fades.', conclusion: 'Alkyne is oxidised.' },
              cuprous: { observation: 'Red precipitate.', conclusion: 'Copper acetylide; terminal alkyne.' },
              silver: { observation: 'White precipitate.', conclusion: 'Silver acetylide; terminal alkyne.' }
            }
          }
        }
      },
      {
        type: 'examtip',
        text: 'For a test question, write three things: the reagent, the observation and the conclusion. If you need to distinguish ethene from ethyne, bromine water shows both are unsaturated, so use ammoniacal cuprous chloride or silver nitrate for ethyne.'
      },
      {
        type: 'memory',
        technique: 'Contrast grid',
        title: 'Two tests for unsaturation, two tests for ethyne',
        aid: 'Bromine and KMnO₄ say “unsaturated”. Cuprous chloride and silver nitrate say “terminal alkyne”.',
        mapping: [
          { cue: 'Bromine in CCl₄', target: 'Alkene or alkyne', meaning: 'Colour disappears for both.' },
          { cue: 'Alkaline KMnO₄', target: 'Alkene or alkyne', meaning: 'Purple colour fades for both.' },
          { cue: 'Cuprous chloride', target: 'Ethyne only', meaning: 'Red copper acetylide precipitate.' },
          { cue: 'Silver nitrate', target: 'Ethyne only', meaning: 'White silver acetylide precipitate.' }
        ],
        recall:
          'Cover the mapping. Name the two general unsaturation tests and the two ethyne-specific tests, with the colour of each precipitate.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'd4-q1',
            question: '1. Which product is formed when ethyne burns completely in excess oxygen?',
            options: [
              { value: 'A', text: 'Carbon monoxide and water' },
              { value: 'B', text: 'Carbon dioxide and water' },
              { value: 'C', text: 'Soot and hydrogen' },
              { value: 'D', text: 'Ethanol and oxygen' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Complete combustion gives CO₂ and H₂O: 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O.',
            wrongFeedback: 'Complete combustion oxidises carbon to CO₂ and hydrogen to H₂O. Soot and CO indicate incomplete combustion.'
          },
          {
            id: 'd4-q2',
            question: '2. Which reagent gives a red precipitate with ethyne?',
            options: [
              { value: 'A', text: 'Bromine water' },
              { value: 'B', text: 'Ammoniacal cuprous chloride' },
              { value: 'C', text: 'Alkaline KMnO₄' },
              { value: 'D', text: 'Dilute hydrochloric acid' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Ethyne forms red copper acetylide with ammoniacal cuprous chloride.',
            wrongFeedback: 'The red precipitate is copper acetylide, formed with ammoniacal cuprous chloride. Bromine and KMnO₄ show unsaturation but do not give this precipitate.'
          },
          {
            id: 'd4-q3',
            question: '3. Which gas is used for oxy-acetylene welding?',
            options: [
              { value: 'A', text: 'Methane' },
              { value: 'B', text: 'Ethene' },
              { value: 'C', text: 'Ethyne' },
              { value: 'D', text: 'Carbon dioxide' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. Ethyne burns in oxygen to give a very hot flame used for welding and cutting metals.',
            wrongFeedback: 'The fuel in oxy-acetylene welding is ethyne (acetylene), burned in oxygen.'
          }
        ]
      }
    ]
  }
]

export const flashcards = [
  {
    id: 'd-fc1',
    question: 'What is the general formula of the alkynes?',
    answer: 'CₙH₂ₙ₋₂. Each alkyne contains one carbon–carbon triple bond.'
  },
  {
    id: 'd-fc2',
    question: 'Name the first three alkynes.',
    answer: 'Ethyne, C₂H₂; propyne, C₃H₄; butyne, C₄H₆.'
  },
  {
    id: 'd-fc3',
    question: 'Name the two position isomers of butyne.',
    answer: 'But-1-yne, CH₃–CH₂–C≡CH, and but-2-yne, CH₃–C≡C–CH₃.'
  },
  {
    id: 'd-fc4',
    question: 'Describe the shape of ethyne.',
    answer: 'Ethyne is linear: H–C≡C–H. Each carbon is joined to one hydrogen and to the other carbon by a triple bond.'
  },
  {
    id: 'd-fc5',
    question: 'How is ethyne prepared from calcium carbide?',
    answer:
      'Add water drop by drop to calcium carbide: CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑. The reaction is exothermic.'
  },
  {
    id: 'd-fc6',
    question: 'How is ethyne prepared from 1,2-dibromoethane?',
    answer:
      'Boil 1,2-dibromoethane with alcoholic KOH: C₂H₄Br₂ + 2KOH → C₂H₂ + 2KBr + 2H₂O.'
  },
  {
    id: 'd-fc7',
    question: 'Why must air be displaced from the ethyne preparation apparatus?',
    answer:
      'Ethyne forms an explosive mixture with air. The air is displaced with oil gas before the gas is collected.'
  },
  {
    id: 'd-fc8',
    question: 'Write the two stages of hydrogenation of ethyne.',
    answer:
      'C₂H₂ + H₂ → C₂H₄, then C₂H₄ + H₂ → C₂H₆. The overall equation is C₂H₂ + 2H₂ → C₂H₆.'
  },
  {
    id: 'd-fc9',
    question: 'What happens when excess bromine reacts with ethyne?',
    answer:
      'Two Br₂ molecules add: C₂H₂ + Br₂ → C₂H₂Br₂, then C₂H₂Br₂ + Br₂ → C₂H₂Br₄.'
  },
  {
    id: 'd-fc10',
    question: 'Compare the combustion of ethyne in limited and excess air.',
    answer:
      'Limited air: sooty flame. Excess air: brilliant white flame, CO₂ and H₂O, with a large amount of heat.'
  },
  {
    id: 'd-fc11',
    question: 'Give three uses of ethyne.',
    answer:
      'Oxy-acetylene welding and cutting, artificial ripening of fruit, and manufacture of polymers, rubber, oxalic acid, acetaldehyde or acetic acid.'
  },
  {
    id: 'd-fc12',
    question: 'How would you distinguish ethyne from ethene?',
    answer:
      'Both decolourise bromine water, so use ammoniacal cuprous chloride: ethyne gives a red precipitate of copper acetylide; ethene gives no precipitate. Ammoniacal silver nitrate gives a white precipitate with ethyne.'
  }
]

export const memoryWorkshop = {
  title: 'Trace the alkyne reaction map',
  objective:
    'Organise the chapter as a map of preparation, two-stage addition and identifying tests.',
  intro: [
    'The key idea is the staircase from triple to double to single. Every addition reaction moves the molecule one step down that staircase.',
    'For tests, separate the general unsaturation tests from the ethyne-specific tests. Bromine and KMnO₄ answer “unsaturated?”; cuprous chloride and silver nitrate answer “terminal alkyne?”.'
  ],
  sections: [
    {
      title: 'Preparation map',
      note: 'Both routes produce ethyne; one uses water, the other uses alcoholic KOH.',
      headers: ['Route', 'Condition', 'Equation', 'Safety or purification'],
      rows: [
        ['Calcium carbide + water', 'Water drop by drop; exothermic', 'CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑', 'Displace air; purify through acidified CuSO₄'],
        ['1,2-dibromoethane + alcoholic KOH', 'Boil under reflux', 'C₂H₄Br₂ + 2KOH → C₂H₂ + 2KBr + 2H₂O', 'Aqueous KOH would favour substitution']
      ]
    },
    {
      title: 'Two-stage addition map',
      headers: ['Starting point', 'One pair added', 'Two pairs added'],
      rows: [
        ['C₂H₂', 'C₂H₄ (ethene)', 'C₂H₆ (ethane)'],
        ['Bromine', 'C₂H₂Br₂ (dibromide)', 'C₂H₂Br₄ (tetrabromide)'],
        ['Hydrogen chloride', 'C₂H₃Cl (chloroethene)', 'C₂H₄Cl₂ (dichloroethane)']
      ]
    },
    {
      title: 'Test map',
      headers: ['Test', 'Observation with ethyne', 'What it proves'],
      rows: [
        ['Bromine in CCl₄', 'Colour decolourised', 'Unsaturated'],
        ['Alkaline KMnO₄', 'Purple colour fades', 'Unsaturated; oxidised'],
        ['Ammoniacal cuprous chloride', 'Red precipitate', 'Terminal alkyne'],
        ['Ammoniacal silver nitrate', 'White precipitate', 'Terminal alkyne']
      ]
    }
  ],
  recall:
    'Cover the tables. Write both preparation equations, the two-stage hydrogenation and bromination, and the four tests with their observations. Repeat after 1, 3, 7 and 14 days.',
  flashcards
}

export const revision = {
  rapidSheet: [
    'Alkynes are unsaturated aliphatic hydrocarbons containing one C≡C bond; general formula CₙH₂ₙ₋₂.',
    'Ethyne, propyne and butyne are the first three members. But-1-yne and but-2-yne are position isomers.',
    'Ethyne is linear: H–C≡C–H.',
    'Ethyne is prepared from calcium carbide and water, or from 1,2-dibromoethane with alcoholic KOH.',
    'Air must be displaced before collecting ethyne because ethyne–air mixtures are explosive.',
    'Addition is stepwise: triple → double → single. H₂ and Br₂ can add in two stages.',
    'Complete combustion gives CO₂ and H₂O; limited air gives a sooty flame.',
    'Bromine and KMnO₄ test for unsaturation; cuprous chloride and silver nitrate identify a terminal alkyne.',
    'Uses include oxy-acetylene welding, fruit ripening and manufacture of polymers, rubber and organic chemicals.'
  ],
  definitions: [
    {
      term: 'Alkyne',
      meaning:
        'An unsaturated aliphatic hydrocarbon containing one carbon–carbon triple bond; general formula CₙH₂ₙ₋₂.'
    },
    {
      term: 'Triple bond',
      meaning: 'A covalent bond formed by three shared pairs of electrons between two atoms.'
    },
    {
      term: 'Dehydrohalogenation',
      meaning:
        'Removal of hydrogen and a halogen from adjacent carbon atoms using hot alcoholic KOH, forming a multiple bond.'
    },
    {
      term: 'Terminal alkyne',
      meaning: 'An alkyne in which the triple bond is at the end of the chain, so one carbon carries a hydrogen atom.'
    },
    {
      term: 'Copper acetylide',
      meaning: 'A red precipitate formed when ethyne reacts with ammoniacal cuprous chloride.'
    },
    {
      term: 'Silver acetylide',
      meaning: 'A white precipitate formed when ethyne reacts with ammoniacal silver nitrate.'
    }
  ],
  equations: [
    {
      reaction: 'Ethyne from calcium carbide',
      equation: 'CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑',
      condition: 'Water added drop by drop; exothermic',
      observation: 'Colourless ethyne; garlic odour from impurities.'
    },
    {
      reaction: 'Ethyne from 1,2-dibromoethane',
      equation: 'C₂H₄Br₂ + 2KOH → C₂H₂ + 2KBr + 2H₂O',
      condition: 'Hot concentrated alcoholic KOH',
      observation: 'Double elimination gives the triple bond.'
    },
    {
      reaction: 'First hydrogenation stage',
      equation: 'C₂H₂ + H₂ → C₂H₄',
      condition: 'Ni, Pt or Pd',
      observation: 'Ethene formed; still unsaturated.'
    },
    {
      reaction: 'Second hydrogenation stage',
      equation: 'C₂H₄ + H₂ → C₂H₆',
      condition: 'Ni, Pt or Pd',
      observation: 'Ethane formed; saturated.'
    },
    {
      reaction: 'Bromination, first stage',
      equation: 'C₂H₂ + Br₂ → C₂H₂Br₂',
      condition: 'Bromine in CCl₄',
      observation: 'Brown colour fades; dibromide formed.'
    },
    {
      reaction: 'Bromination, second stage',
      equation: 'C₂H₂Br₂ + Br₂ → C₂H₂Br₄',
      condition: 'Excess bromine',
      observation: 'Tetrabromide formed; saturated.'
    },
    {
      reaction: 'Complete combustion',
      equation: '2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O',
      condition: 'Excess oxygen',
      observation: 'Brilliant white flame; much heat.'
    }
  ],
  comparisons: [
    {
      pair: 'Alkene vs alkyne',
      difference:
        'Alkene has one C=C bond, CₙH₂ₙ; alkyne has one C≡C bond, CₙH₂ₙ₋₂.'
    },
    {
      pair: 'Ethene vs ethyne with bromine',
      difference:
        'Both decolourise bromine, but ethyne can add two Br₂ molecules while ethene adds one.'
    },
    {
      pair: 'General unsaturation test vs terminal-alkyne test',
      difference:
        'Bromine and KMnO₄ react with alkenes and alkynes; cuprous chloride and silver nitrate react specifically with a terminal alkyne.'
    },
    {
      pair: 'Complete vs incomplete combustion',
      difference:
        'Excess oxygen gives CO₂ and H₂O with a brilliant flame; limited oxygen gives soot and carbon monoxide.'
    }
  ],
  memoryAids: [
    '“Every pupil brings”: Ethyne, Propyne, Butyne.',
    '“Triple, double, single”: the two-stage addition staircase.',
    '“Red copper, white silver”: the two ethyne-specific precipitates.'
  ],
  mistakes: [
    'Using CₙH₂ₙ for an alkyne. The correct formula is CₙH₂ₙ₋₂.',
    'Forgetting that hydrogenation and bromination are stepwise; “excess” means the second stage also occurs.',
    'Writing that ethyne is collected by air displacement. It is collected over water, and air must first be displaced for safety.',
    'Confusing the red copper acetylide precipitate with the white silver acetylide precipitate.',
    'Saying that bromine water distinguishes ethene from ethyne. Both are unsaturated and both decolourise it.',
    'Treating reaction with HCl or ozone as required 2027 content. They are enrichment.'
  ],
  reviewQuestions: [
    'Define an alkyne and give its general formula.',
    'Draw and name the position isomers of butyne.',
    'Describe the structure and shape of ethyne.',
    'Describe the laboratory preparation of ethyne from calcium carbide, including the equation, collection and one safety precaution.',
    'Describe the preparation of ethyne from 1,2-dibromoethane and explain why alcoholic KOH is used.',
    'Write the two stages of hydrogenation and bromination of ethyne.',
    'Compare the combustion of ethyne in limited and excess air.',
    'Describe two tests that distinguish ethyne from ethene, giving observations and conclusions.',
    'Give three uses of ethyne.'
  ]
}
