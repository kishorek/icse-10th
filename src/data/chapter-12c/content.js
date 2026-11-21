export const lessonContent = [
  {
    id: 'lesson-1',
    number: 1,
    title: 'The alkene family',
    objective:
      'Define alkenes, use the general formula CₙH₂ₙ, recognise chain and position isomers, and explain why alkenes are unsaturated.',
    blocks: [
      {
        type: 'p',
        text: 'A ripe fruit releases a gas that can speed up the ripening of other fruit. That gas is ethene, the first member of the alkene family. Alkenes are hydrocarbons that contain a carbon–carbon double bond. The double bond makes them more reactive than alkanes and gives them a different general formula.'
      },
      {
        type: 'h3',
        text: 'What is an alkene?'
      },
      {
        type: 'definition',
        label: 'Definition',
        text: 'Alkenes are unsaturated aliphatic hydrocarbons that contain one carbon–carbon double bond. Their general formula is CₙH₂ₙ.'
      },
      {
        type: 'p',
        text: 'The older name for alkenes is olefins, meaning oil-forming, because the lower members form oily products when treated with chlorine or bromine. Use alkene as the IUPAC family name.'
      },
      {
        type: 'table',
        caption: 'The first three alkenes',
        headers: ['Name', 'Molecular formula', 'Condensed formula', 'Structural feature'],
        rows: [
          ['Ethene', 'C₂H₄', 'CH₂=CH₂', 'One C=C bond'],
          ['Propene', 'C₃H₆', 'CH₃–CH=CH₂', 'One C=C bond'],
          ['Butene', 'C₄H₈', 'CH₃–CH₂–CH=CH₂', 'One C=C bond']
        ]
      },
      {
        type: 'p',
        text: 'Each member differs from the previous member by one CH₂ unit. That is the same homologous-series pattern you met in Chapter 12A, but the family formula is different because the double bond removes two hydrogen atoms compared with the corresponding alkane.'
      },
      {
        type: 'h3',
        text: 'Why alkenes are unsaturated'
      },
      {
        type: 'p',
        text: 'A double bond contains two shared pairs of electrons. The carbon atoms are not joined to the maximum possible number of hydrogen atoms, so the molecule can add more atoms across the double bond. That is what unsaturated means in organic chemistry. It does not mean that a solution is concentrated or dilute.'
      },
      {
        type: 'misconception',
        text: 'Do not call an alkene saturated just because it contains only carbon and hydrogen. Saturation is about the type of carbon–carbon bond. Alkanes have only single bonds; alkenes have a double bond.'
      },
      {
        type: 'h3',
        text: 'Sources and occurrence'
      },
      {
        type: 'p',
        text: 'Alkenes are reactive, so they are seldom found free in nature. Lower alkenes occur in small quantities in coal gas. On a large scale they are produced by cracking petroleum, which breaks larger hydrocarbon molecules into smaller, more useful ones.'
      },
      {
        type: 'h3',
        text: 'Isomerism in alkenes'
      },
      {
        type: 'p',
        text: 'Alkenes with four or more carbon atoms can form isomers. Butene, C₄H₈, has three structural isomers. Two are position isomers because the double bond is in a different position on the same carbon skeleton. The third is a chain isomer because the carbon skeleton is branched.'
      },
      {
        type: 'list',
        items: [
          'But-1-ene: CH₂=CH–CH₂–CH₃. The double bond starts at carbon 1.',
          'But-2-ene: CH₃–CH=CH–CH₃. The double bond starts at carbon 2.',
          '2-methylpropene: CH₂=C(CH₃)₂. The carbon skeleton is branched.'
        ]
      },
      {
        type: 'visual',
        component: 'FamilyLadderVisual',
        id: 'c1-family-visual',
        title: 'The alkene family ladder',
        caption: 'Every alkene has one C=C bond and follows CₙH₂ₙ; each step adds CH₂.',
        description:
          'Three cards show ethene, propene and butene in order. The general formula is CₙH₂ₙ, and each arrow adds one carbon and two hydrogen atoms.',
        notice: [
          'The family formula is CₙH₂ₙ, not CₙH₂ₙ₊₂.',
          'Every member contains exactly one C=C double bond.',
          'The +CH₂ step explains the 14 g/mol increase in molar mass.'
        ],
        props: {
          family: 'Alkenes',
          formula: 'CₙH₂ₙ',
          bondLabel: 'One carbon–carbon double bond in every member.',
          members: [
            { name: 'Ethene', formula: 'C₂H₄', note: 'first member' },
            { name: 'Propene', formula: 'C₃H₆', note: 'adds CH₂' },
            { name: 'Butene', formula: 'C₄H₈', note: 'isomers appear' }
          ]
        }
      },
      {
        type: 'lab',
        component: 'IsomerLab',
        props: {
          id: 'alkene-isomers',
          title: 'Butene isomer explorer',
          isomers: [
            {
              id: 'but-1-ene',
              name: 'But-1-ene',
              formula: 'C₄H₈',
              structure: 'CH₂=CH–CH₂–CH₃',
              type: 'Position isomerism',
              note: 'The double bond begins at carbon 1 of the four-carbon chain.'
            },
            {
              id: 'but-2-ene',
              name: 'But-2-ene',
              formula: 'C₄H₈',
              structure: 'CH₃–CH=CH–CH₃',
              type: 'Position isomerism',
              note: 'The double bond begins at carbon 2; the skeleton is still a straight chain.'
            },
            {
              id: 'methylpropene',
              name: '2-methylpropene',
              formula: 'C₄H₈',
              structure: 'CH₂=C(CH₃)₂',
              type: 'Chain isomerism',
              note: 'The same four carbons are arranged with a branch, so the skeleton differs.'
            }
          ]
        }
      },
      {
        type: 'examtip',
        text: 'When you name an alkene, number the longest chain so that the double bond gets the lowest possible number. State the position even when there is only one possible place, because the locant is part of the name.'
      },
      {
        type: 'memory',
        technique: 'Acrostic',
        title: 'Every pupil brings',
        aid: '“Every pupil brings” gives the first three alkenes in order.',
        mapping: [
          { cue: 'Every', target: 'Ethene', meaning: 'The first member, C₂H₄.' },
          { cue: 'Pupil', target: 'Propene', meaning: 'The second member, C₃H₆.' },
          { cue: 'Brings', target: 'Butene', meaning: 'The third member, C₄H₈, which has isomers.' }
        ],
        recall:
          'Cover the mapping. Say the sentence, then write the name and formula of each of the first three alkenes.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'c1-q1',
            question: '1. Which general formula represents the alkenes?',
            options: [
              { value: 'A', text: 'CₙH₂ₙ₊₂' },
              { value: 'B', text: 'CₙH₂ₙ' },
              { value: 'C', text: 'CₙH₂ₙ₋₂' },
              { value: 'D', text: 'CₙH₂ₙ₊₁OH' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Alkenes contain one C=C bond, so their general formula is CₙH₂ₙ.',
            wrongFeedback: 'The alkene formula has two fewer hydrogen atoms than the alkane formula. That is CₙH₂ₙ.'
          },
          {
            id: 'c1-q2',
            question: '2. But-1-ene and but-2-ene have the same molecular formula. What type of isomerism do they show?',
            options: [
              { value: 'A', text: 'Chain isomerism' },
              { value: 'B', text: 'Position isomerism' },
              { value: 'C', text: 'Functional isomerism' },
              { value: 'D', text: 'No isomerism' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. The carbon skeleton is the same; only the position of the double bond changes.',
            wrongFeedback: 'The skeleton is the same straight chain in both. The double bond is in a different position, so this is position isomerism.'
          },
          {
            id: 'c1-q3',
            question: '3. Why is ethene described as unsaturated?',
            options: [
              { value: 'A', text: 'It contains a carbon–carbon double bond and can add atoms.' },
              { value: 'B', text: 'It contains only single bonds.' },
              { value: 'C', text: 'It dissolves in water.' },
              { value: 'D', text: 'It contains no hydrogen.' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. The double bond means the molecule can add more atoms, so it is unsaturated.',
            wrongFeedback: 'Saturation is about multiple bonds. Ethene has a C=C bond, so it is unsaturated and undergoes addition.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    number: 2,
    title: 'Ethene: structure and preparation',
    objective:
      'Describe the planar structure of ethene and explain its laboratory preparation by dehydration and dehydrohalogenation.',
    blocks: [
      {
        type: 'p',
        text: 'Ethene is the first member of the alkene family. It is a colourless, inflammable gas with a faint sweet smell. Small amounts occur in natural gas, and ethene also acts as a plant hormone that helps fruit ripen. Industry makes it on a large scale by cracking petroleum.'
      },
      {
        type: 'h3',
        text: 'The structure of ethene'
      },
      {
        type: 'p',
        text: 'In ethene, each carbon atom is joined to two hydrogen atoms by single bonds and to the other carbon atom by a double bond. There are four C–H single bonds and one C=C double bond. All six atoms lie in one plane, and the H–C–H and H–C=C bond angles are about 120°.'
      },
      {
        type: 'visual',
        component: 'MoleculeVisual',
        id: 'c2-structure-visual',
        title: 'Ethene is planar',
        caption: 'The two carbon atoms share two pairs of electrons; the atoms around each carbon are arranged at about 120°.',
        description:
          'A structural diagram of ethene shows a central C=C double bond, four C–H single bonds and an angle of about 120 degrees.',
        notice: [
          'The double bond is a shared pair of electron pairs, not two separate single bonds.',
          'All the atoms lie in one plane.',
          'The 120° angle is a consequence of the planar arrangement.'
        ],
        props: { kind: 'ethene' }
      },
      {
        type: 'h3',
        text: 'Preparation by dehydration of ethanol'
      },
      {
        type: 'p',
        text: 'In the laboratory, ethene is prepared by heating ethanol with concentrated sulphuric acid. The acid removes the elements of water from ethanol. The reaction is therefore called dehydration.'
      },
      {
        type: 'formula',
        text: 'C₂H₅OH → C₂H₄ + H₂O'
      },
      {
        type: 'p',
        text: 'The mixture is heated gradually to about 170°C. Ethene is evolved and passed through sodium hydroxide solution to remove carbon dioxide and sulphur dioxide impurities formed by oxidation of the acid. The gas is collected by downward displacement of water because it is inflammable and only slightly soluble in water. A little aluminium sulphate is added to reduce frothing.'
      },
      {
        type: 'p',
        text: 'On an industrial scale, ethanol vapour is passed over heated alumina at about 300°C:'
      },
      {
        type: 'formula',
        text: 'C₂H₅OH → C₂H₄ + H₂O    (Al₂O₃, 300°C)'
      },
      {
        type: 'h3',
        text: 'Preparation by dehydrohalogenation'
      },
      {
        type: 'p',
        text: 'An alkyl halide such as chloroethane, bromoethane or iodoethane can be heated with hot concentrated alcoholic potassium hydroxide. The alkali removes a hydrogen atom and the halogen atom from adjacent carbon atoms, and a double bond forms:'
      },
      {
        type: 'formula',
        text: 'C₂H₅Cl + KOH (alcoholic) → C₂H₄ + KCl + H₂O'
      },
      {
        type: 'formula',
        text: 'C₂H₅Br + KOH (alcoholic) → C₂H₄ + KBr + H₂O'
      },
      {
        type: 'visual',
        component: 'PreparationFlowVisual',
        id: 'c2-prep-visual',
        title: 'Two routes to ethene',
        caption: 'Dehydration removes water from ethanol; dehydrohalogenation removes H and a halogen from an alkyl halide.',
        description:
          'Two numbered routes show ethanol with concentrated sulphuric acid at 170 degrees, and bromoethane with alcoholic potassium hydroxide. Each route produces ethene and a small molecule.',
        notice: [
          'The condition decides the reaction: concentrated H₂SO₄ and heat for dehydration.',
          'Alcoholic KOH, not aqueous KOH, is used for dehydrohalogenation.',
          'Both routes create the same C=C double bond.'
        ],
        props: {
          steps: [
            {
              label: 'Dehydration of ethanol',
              equation: 'C₂H₅OH → C₂H₄ + H₂O',
              detail: 'Concentrated sulphuric acid, about 170°C. The acid removes H and OH as water.'
            },
            {
              label: 'Industrial dehydration',
              equation: 'C₂H₅OH → C₂H₄ + H₂O',
              detail: 'Ethanol vapour over alumina, about 300°C.'
            },
            {
              label: 'Dehydrohalogenation',
              equation: 'C₂H₅Br + KOH → C₂H₄ + KBr + H₂O',
              detail: 'Hot concentrated alcoholic KOH removes H and Br from adjacent carbons.'
            }
          ],
          note: 'In every route, the product is ethene, C₂H₄.'
        }
      },
      {
        type: 'lab',
        component: 'PreparationLab',
        props: {
          id: 'ethene-prep',
          title: 'Ethene preparation control',
          routes: [
            {
              id: 'ethanol-acid',
              label: 'Ethanol + concentrated sulphuric acid',
              reactants: 'Ethanol, C₂H₅OH, and concentrated H₂SO₄',
              conditions: 'Heat gradually to about 170°C',
              equation: 'C₂H₅OH → C₂H₄ + H₂O',
              product: 'Ethene, C₂H₄',
              collection: 'Downward displacement of water; ethene is inflammable and only slightly soluble.',
              note: 'Sodium hydroxide solution removes CO₂ and SO₂ impurities. Aluminium sulphate reduces frothing.'
            },
            {
              id: 'ethanol-alumina',
              label: 'Ethanol vapour over alumina',
              reactants: 'Ethanol vapour and heated alumina, Al₂O₃',
              conditions: 'About 300°C',
              equation: 'C₂H₅OH → C₂H₄ + H₂O',
              product: 'Ethene, C₂H₄',
              collection: 'Industrial preparation; the gas is separated and purified.',
              note: 'This is the industrial dehydration route.'
            },
            {
              id: 'bromoethane-koh',
              label: 'Bromoethane + alcoholic KOH',
              reactants: 'Bromoethane, C₂H₅Br, and hot concentrated alcoholic KOH',
              conditions: 'Heat under reflux',
              equation: 'C₂H₅Br + KOH → C₂H₄ + KBr + H₂O',
              product: 'Ethene, C₂H₄',
              collection: 'Gas can be collected over water after purification.',
              note: 'This is dehydrohalogenation. Aqueous KOH would favour substitution to ethanol instead.'
            }
          ]
        }
      },
      {
        type: 'misconception',
        text: 'Do not write “dehydration” as if the acid simply dries the ethanol. The acid removes a hydrogen atom and a hydroxyl group from the organic molecule, releasing them as water and leaving a C=C bond.'
      },
      {
        type: 'memory',
        technique: 'Cause-and-effect chain',
        title: 'Acid takes water; alkali takes H and halogen',
        aid: 'For dehydration, acid steals H and OH. For dehydrohalogenation, alcoholic KOH steals H and the halogen. Either way, a double bond is left behind.',
        mapping: [
          { cue: 'Conc. H₂SO₄, 170°C', target: 'Ethene from ethanol', meaning: 'H and OH leave as water.' },
          { cue: 'Al₂O₃, 300°C', target: 'Industrial ethene', meaning: 'Ethanol vapour is dehydrated over alumina.' },
          { cue: 'Alcoholic KOH, heat', target: 'Ethene from bromoethane', meaning: 'H and Br are removed from adjacent carbons.' },
          { cue: 'Aqueous KOH', target: 'Ethanol, not ethene', meaning: 'Substitution replaces Br with OH instead of eliminating HBr.' }
        ],
        recall:
          'Cover the mapping. For each route, name the reagent, the condition, the product and the small molecule removed.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'c2-q1',
            question: '1. Which reagent and condition are used to prepare ethene by dehydration of ethanol?',
            options: [
              { value: 'A', text: 'Aqueous KOH at room temperature' },
              { value: 'B', text: 'Concentrated H₂SO₄ at about 170°C' },
              { value: 'C', text: 'Dilute HCl at 100°C' },
              { value: 'D', text: 'Sodium metal in dry ether' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Concentrated sulphuric acid at about 170°C dehydrates ethanol to ethene.',
            wrongFeedback: 'Dehydration of ethanol uses concentrated sulphuric acid and heat at about 170°C.'
          },
          {
            id: 'c2-q2',
            question: '2. Why is ethene collected by downward displacement of water?',
            options: [
              { value: 'A', text: 'It is heavier than water.' },
              { value: 'B', text: 'It is inflammable and only slightly soluble in water.' },
              { value: 'C', text: 'It reacts with water to form ethanol.' },
              { value: 'D', text: 'It is denser than air and soluble in water.' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Ethene is only slightly soluble and is inflammable, so water displacement is suitable.',
            wrongFeedback: 'Ethene is only slightly soluble in water and is inflammable, so it is collected over water rather than by air displacement.'
          },
          {
            id: 'c2-q3',
            question: '3. What is the shape of the ethene molecule?',
            options: [
              { value: 'A', text: 'Linear' },
              { value: 'B', text: 'Tetrahedral' },
              { value: 'C', text: 'Planar' },
              { value: 'D', text: 'Pyramidal' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. All the atoms of ethene lie in one plane, with bond angles of about 120°.',
            wrongFeedback: 'Ethene is planar. The two carbons and four hydrogens lie in one plane, with angles of about 120°.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-3',
    number: 3,
    title: 'Addition reactions of ethene',
    objective:
      'Describe addition of hydrogen and the halogens Cl₂, Br₂ and I₂ to ethene, and explain why the products are saturated.',
    blocks: [
      {
        type: 'p',
        text: 'The double bond is the reactive part of an alkene. Atoms can add across it without any atom being removed from the original molecule. This is an addition reaction, and it converts the unsaturated alkene into a saturated product.'
      },
      {
        type: 'definition',
        label: 'Definition',
        text: 'An addition reaction is a reaction in which atoms add across a multiple bond, giving a single product.'
      },
      {
        type: 'h3',
        text: 'Addition of hydrogen: hydrogenation'
      },
      {
        type: 'p',
        text: 'When ethene and hydrogen are passed over finely divided platinum or palladium at ordinary temperature, or over nickel at about 200°C, the two atoms of the hydrogen molecule add across the double bond. The product is ethane:'
      },
      {
        type: 'formula',
        text: 'C₂H₄ + H₂ → C₂H₆    (Ni, 200°C or Pt/Pd)'
      },
      {
        type: 'p',
        text: 'The catalyst is not used up overall. It provides a surface on which the reaction can occur more quickly.'
      },
      {
        type: 'h3',
        text: 'Addition of halogens: halogenation'
      },
      {
        type: 'p',
        text: 'Chlorine, bromine and iodine add to the double bond at room temperature, forming saturated dihalogeno compounds. Fluorine reacts violently and is not used in the school laboratory.'
      },
      {
        type: 'formula',
        text: 'C₂H₄ + Cl₂ → C₂H₄Cl₂    (1,2-dichloroethane)'
      },
      {
        type: 'formula',
        text: 'C₂H₄ + Br₂ → C₂H₄Br₂    (1,2-dibromoethane)'
      },
      {
        type: 'formula',
        text: 'C₂H₄ + I₂ → C₂H₄I₂    (1,2-diiodoethane)'
      },
      {
        type: 'p',
        text: 'Bromine in carbon tetrachloride has an orange-brown colour. When it is added dropwise to ethene, the colour disappears because the bromine is used up to form the colourless dibromo compound. This is the standard test for an unsaturated hydrocarbon. The reaction with iodine is slow and the product is unstable; it readily gives back iodine and ethene.'
      },
      {
        type: 'visual',
        component: 'BondChangeVisual',
        id: 'c3-addition-visual',
        title: 'Bromine adds across the double bond',
        caption: 'The C=C bond becomes a C–C single bond and two C–Br bonds form; the orange-brown colour fades.',
        description:
          'Ethene reacts with bromine. The double bond is replaced by a single bond and one bromine atom attaches to each carbon, giving 1,2-dibromoethane.',
        notice: [
          'Addition uses up the double bond, so the product is saturated.',
          'Two new C–Br bonds form, one on each carbon.',
          'The loss of bromine colour is the observation; the product is the inference.'
        ],
        props: {
          left: 'C₂H₄',
          reagent: 'Br₂',
          right: 'C₂H₄Br₂',
          bond: 'double',
          note: 'The same pattern applies with H₂, Cl₂ and I₂. The product is always saturated.'
        }
      },
      {
        type: 'lab',
        component: 'SorterLab',
        props: {
          id: 'addition-sorter',
          title: 'Addition or substitution?',
          instruction: 'Select each statement, then classify it as an addition reaction or a substitution reaction.',
          categories: [
            { id: 'addition', label: 'Addition' },
            { id: 'substitution', label: 'Substitution' }
          ],
          items: [
            {
              id: 'add-1',
              label: 'Ethene + H₂ over nickel gives ethane.',
              answer: 'addition',
              note: 'Hydrogen adds across the C=C bond; no atom is replaced.'
            },
            {
              id: 'add-2',
              label: 'Ethene + Br₂ gives 1,2-dibromoethane.',
              answer: 'addition',
              note: 'Bromine adds across the double bond and the product is saturated.'
            },
            {
              id: 'sub-1',
              label: 'Methane + Cl₂ in ultraviolet light gives chloromethane and HCl.',
              answer: 'substitution',
              note: 'Chlorine replaces hydrogen; a hydrogen atom leaves with chlorine as HCl.'
            },
            {
              id: 'sub-2',
              label: 'Ethane + Cl₂ in diffused sunlight gives chloroethane and HCl.',
              answer: 'substitution',
              note: 'An alkane is saturated, so chlorine substitutes rather than adds.'
            }
          ]
        }
      },
      {
        type: 'h3',
        text: 'Addition of water and hydrogen chloride: enrichment'
      },
      {
        type: 'p',
        text: 'Ethene also adds water in the presence of an acid catalyst to form ethanol, and adds hydrogen chloride to form chloroethane. These reactions help explain the industrial link between ethene and ethanol, but the 2027 syllabus places particular emphasis on addition of hydrogen and the halogens Cl₂, Br₂ and I₂.'
      },
      {
        type: 'formula',
        text: 'C₂H₄ + H₂O → C₂H₅OH    (H⁺ catalyst)'
      },
      {
        type: 'formula',
        text: 'C₂H₄ + HCl → C₂H₅Cl'
      },
      {
        type: 'examtip',
        text: 'For an addition equation, show the reagent adding across the double bond and give one product only. Name the product precisely: C₂H₄Br₂ is 1,2-dibromoethane, not “dibromoethene”.'
      },
      {
        type: 'memory',
        technique: 'Pattern sentence',
        title: 'Add the pair, lose the double bond',
        aid: '“Add the pair, lose the double bond” works for every required addition: H₂, Cl₂, Br₂ or I₂ adds as a pair of atoms and the C=C becomes C–C.',
        mapping: [
          { cue: 'H₂', target: 'Ethane', meaning: 'Hydrogenation with Ni, Pt or Pd.' },
          { cue: 'Cl₂', target: '1,2-dichloroethane', meaning: 'Chlorine adds across C=C.' },
          { cue: 'Br₂', target: '1,2-dibromoethane', meaning: 'Bromine colour fades; standard unsaturation test.' },
          { cue: 'I₂', target: '1,2-diiodoethane', meaning: 'Slow and unstable; iodine can be regenerated.' }
        ],
        recall:
          'Cover the mapping. Say the sentence, then write the four addition equations and the observation for bromine.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'c3-q1',
            question: '1. What is the product when ethene reacts with hydrogen over a nickel catalyst?',
            options: [
              { value: 'A', text: 'Ethanol' },
              { value: 'B', text: 'Ethane' },
              { value: 'C', text: 'Ethyne' },
              { value: 'D', text: 'Chloroethane' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Hydrogen adds across the double bond and ethene becomes ethane.',
            wrongFeedback: 'Hydrogenation adds H₂ across the C=C bond. The saturated product is ethane, C₂H₆.'
          },
          {
            id: 'c3-q2',
            question: '2. What is observed when bromine in carbon tetrachloride is added to ethene?',
            options: [
              { value: 'A', text: 'The orange-brown colour disappears.' },
              { value: 'B', text: 'A white precipitate forms.' },
              { value: 'C', text: 'The solution turns purple.' },
              { value: 'D', text: 'No change occurs.' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Bromine adds across the double bond, so its orange-brown colour fades.',
            wrongFeedback: 'Bromine is used up in the addition reaction, so its orange-brown colour disappears. This is the test for unsaturation.'
          },
          {
            id: 'c3-q3',
            question: '3. Why is the product of ethene and chlorine described as saturated?',
            options: [
              { value: 'A', text: 'It contains a double bond.' },
              { value: 'B', text: 'The double bond has become a single bond, so no more atoms can add across it.' },
              { value: 'C', text: 'It contains only carbon and hydrogen.' },
              { value: 'D', text: 'It is a gas at room temperature.' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Addition removes the C=C bond, leaving only single bonds in the product.',
            wrongFeedback: 'After addition, the double bond is gone. The product has only single bonds, so it is saturated.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-4',
    number: 4,
    title: 'Combustion, uses and testing',
    objective:
      'Describe complete and incomplete combustion of ethene, explain its main uses and use bromine water to test for unsaturation.',
    blocks: [
      {
        type: 'p',
        text: 'Ethene is a fuel as well as a chemical feedstock. Its high carbon content means that the oxygen supply matters: with plenty of air it burns with a pale blue flame, but with too little air it produces a sooty flame.'
      },
      {
        type: 'h3',
        text: 'Combustion of ethene'
      },
      {
        type: 'p',
        text: 'In a good supply of air, ethene burns completely to carbon dioxide and water:'
      },
      {
        type: 'formula',
        text: 'C₂H₄ + 3O₂ → 2CO₂ + 2H₂O + heat'
      },
      {
        type: 'p',
        text: 'The flame is pale blue and a large amount of heat is released. With insufficient air, combustion is incomplete and a sooty flame forms because carbon particles are produced.'
      },
      {
        type: 'h3',
        text: 'Uses of ethene'
      },
      {
        type: 'list',
        items: [
          'Making polythene, a polymer used for bags, bottles and packaging.',
          'Making ethanol, which is used as a solvent and as a starting material for other products.',
          'Ripening fruits; ethene is a natural plant hormone.',
          'Making epoxyethane, which is used in detergents.',
          'Producing an oxy-ethylene flame for cutting and welding metals.',
          'Making other synthetic chemicals.'
        ]
      },
      {
        type: 'p',
        text: 'Polymerisation, the joining of many ethene molecules into polythene, and oxidation with alkaline potassium manganate(VII) are useful industrial reactions. They are enrichment for this chapter because the 2027 wording concentrates on addition with hydrogen and the halogens.'
      },
      {
        type: 'h3',
        text: 'Testing for unsaturation'
      },
      {
        type: 'p',
        text: 'Bromine water is the standard test. Ethene decolourises the orange-brown bromine water because bromine adds across the double bond. Ethane, a saturated alkane, does not decolourise bromine water under the same conditions. Alkaline potassium manganate(VII) is another test: the purple colour fades with an alkene. The bromine test is the one to quote first.'
      },
      {
        type: 'visual',
        component: 'TestBenchVisual',
        id: 'c4-test-visual',
        title: 'Test bench: ethene and ethane',
        caption: 'Choose a gas and a test. The observation must be separated from the conclusion.',
        description:
          'A test bench compares ethene and ethane with bromine water, alkaline potassium manganate(VII) and combustion. Ethene decolourises bromine water and burns with a sooty flame; ethane does not decolourise bromine water.',
        notice: [
          'Ethene decolourises bromine water; ethane does not.',
          'A sooty flame is an observation; incomplete combustion is the inference.',
          'The conclusion must name the gas and the evidence.'
        ],
        props: {
          samples: [
            { id: 'ethene', label: 'Ethene, C₂H₄' },
            { id: 'ethane', label: 'Ethane, C₂H₆' }
          ],
          tests: [
            { id: 'bromine', label: 'Bromine water' },
            { id: 'kmno4', label: 'Alkaline KMnO₄' },
            { id: 'burn', label: 'Combustion in air' }
          ],
          results: {
            ethene: {
              bromine: {
                observation: 'The orange-brown colour of bromine water disappears.',
                conclusion: 'Ethene is unsaturated; bromine adds across the C=C bond.',
                equation: 'C₂H₄ + Br₂ → C₂H₄Br₂'
              },
              kmno4: {
                observation: 'The purple colour fades.',
                conclusion: 'Ethene is oxidised; this is a second test for unsaturation.'
              },
              burn: {
                observation: 'Burns with a sooty flame in limited air; pale blue in excess air.',
                conclusion: 'Ethene has a high carbon content and can burn incompletely.'
              }
            },
            ethane: {
              bromine: {
                observation: 'No change in the orange-brown colour.',
                conclusion: 'Ethane is saturated and does not decolourise bromine water.'
              },
              kmno4: {
                observation: 'No change.',
                conclusion: 'Ethane is not oxidised under these conditions.'
              },
              burn: {
                observation: 'Burns with a non-sooty flame in sufficient air.',
                conclusion: 'Ethane is a saturated hydrocarbon fuel.'
              }
            }
          }
        }
      },
      {
        type: 'lab',
        component: 'SorterLab',
        props: {
          id: 'unsaturation-sorter',
          title: 'Observation or conclusion?',
          instruction: 'Select each statement, then classify it as an observation or a conclusion.',
          categories: [
            { id: 'observation', label: 'Observation' },
            { id: 'conclusion', label: 'Conclusion' }
          ],
          items: [
            {
              id: 'obs-1',
              label: 'The orange-brown colour of bromine water disappears.',
              answer: 'observation',
              note: 'This is what you see. It does not yet name the cause.'
            },
            {
              id: 'obs-2',
              label: 'A sooty flame is seen.',
              answer: 'observation',
              note: 'Soot is visible evidence; the reason is incomplete combustion.'
            },
            {
              id: 'con-1',
              label: 'The gas is ethene because it is unsaturated.',
              answer: 'conclusion',
              note: 'This interprets the colour change and identifies the gas.'
            },
            {
              id: 'con-2',
              label: 'The gas is burning incompletely because the air supply is limited.',
              answer: 'conclusion',
              note: 'This explains the sooty flame rather than merely describing it.'
            }
          ]
        }
      },
      {
        type: 'examtip',
        text: 'When asked to distinguish ethene from ethane, state the test, the observation and the conclusion. “Bromine water” alone is not enough: say that ethene decolourises it and ethane does not.'
      },
      {
        type: 'memory',
        technique: 'Contrast pair',
        title: 'Ethene clears bromine; ethane does not',
        aid: 'Remember the pair as “clear or clear?” Ethene clears the bromine colour; ethane leaves it clear of change.',
        mapping: [
          { cue: 'Ethene + bromine water', target: 'Colour disappears', meaning: 'Unsaturated; addition occurs.' },
          { cue: 'Ethane + bromine water', target: 'No change', meaning: 'Saturated; no addition.' },
          { cue: 'Ethene flame', target: 'Sooty in limited air', meaning: 'Incomplete combustion.' },
          { cue: 'Ethane flame', target: 'Non-sooty in sufficient air', meaning: 'Complete combustion.' }
        ],
        recall:
          'Cover the mapping. Describe the bromine-water test for ethene and ethane, then state one use of ethene.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'c4-q1',
            question: '1. Which products form when ethene burns completely?',
            options: [
              { value: 'A', text: 'Carbon monoxide and water' },
              { value: 'B', text: 'Carbon dioxide and water' },
              { value: 'C', text: 'Soot and hydrogen' },
              { value: 'D', text: 'Ethanol and oxygen' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Complete combustion gives carbon dioxide and water: C₂H₄ + 3O₂ → 2CO₂ + 2H₂O.',
            wrongFeedback: 'Complete combustion oxidises carbon to CO₂ and hydrogen to H₂O. Carbon monoxide and soot indicate incomplete combustion.'
          },
          {
            id: 'c4-q2',
            question: '2. Which observation shows that ethene is unsaturated?',
            options: [
              { value: 'A', text: 'It burns with a pale blue flame.' },
              { value: 'B', text: 'It decolourises bromine water.' },
              { value: 'C', text: 'It is a gas at room temperature.' },
              { value: 'D', text: 'It has a faint sweet smell.' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. Bromine adds across the double bond, so the orange-brown colour disappears.',
            wrongFeedback: 'The standard chemical test is decolourisation of bromine water, which shows that addition occurs at a double bond.'
          },
          {
            id: 'c4-q3',
            question: '3. Which is a major use of ethene?',
            options: [
              { value: 'A', text: 'Making polythene' },
              { value: 'B', text: 'Making window glass' },
              { value: 'C', text: 'Extinguishing fires' },
              { value: 'D', text: 'Making table salt' }
            ],
            correctValue: 'A',
            correctFeedback: 'Correct. Ethene is polymerised to make polythene, and it is also used to make ethanol and to ripen fruit.',
            wrongFeedback: 'Ethene is the monomer for polythene. It is not used for glass, fire extinguishing or table salt.'
          }
        ]
      }
    ]
  }
]

export const flashcards = [
  {
    id: 'c-fc1',
    question: 'What is the general formula of the alkenes?',
    answer: 'CₙH₂ₙ. Each alkene contains one carbon–carbon double bond.'
  },
  {
    id: 'c-fc2',
    question: 'What does unsaturated mean for an alkene?',
    answer:
      'The molecule contains a double bond, so it can add atoms across that bond. It is not saturated with single bonds.'
  },
  {
    id: 'c-fc3',
    question: 'Name the three structural isomers of butene and classify them.',
    answer:
      'But-1-ene and but-2-ene are position isomers; 2-methylpropene is a chain isomer.'
  },
  {
    id: 'c-fc4',
    question: 'Describe the shape of ethene.',
    answer:
      'Ethene is planar. Each carbon is joined to two hydrogens by single bonds and to the other carbon by a double bond; bond angles are about 120°.'
  },
  {
    id: 'c-fc5',
    question: 'How is ethene prepared by dehydration of ethanol?',
    answer:
      'Heat ethanol with concentrated sulphuric acid to about 170°C: C₂H₅OH → C₂H₄ + H₂O. Sodium hydroxide removes acidic impurities.'
  },
  {
    id: 'c-fc6',
    question: 'How is ethene prepared by dehydrohalogenation?',
    answer:
      'Heat bromoethane with hot concentrated alcoholic KOH: C₂H₅Br + KOH → C₂H₄ + KBr + H₂O.'
  },
  {
    id: 'c-fc7',
    question: 'What happens when ethene is hydrogenated?',
    answer:
      'Hydrogen adds across the double bond over Ni at about 200°C or Pt/Pd at room temperature: C₂H₄ + H₂ → C₂H₆.'
  },
  {
    id: 'c-fc8',
    question: 'What happens when ethene reacts with bromine?',
    answer:
      'Bromine adds across the double bond to give 1,2-dibromoethane: C₂H₄ + Br₂ → C₂H₄Br₂. The orange-brown colour fades.'
  },
  {
    id: 'c-fc9',
    question: 'Compare complete and incomplete combustion of ethene.',
    answer:
      'Complete: C₂H₄ + 3O₂ → 2CO₂ + 2H₂O with a pale blue flame. Incomplete: a sooty flame and carbon particles because oxygen is limited.'
  },
  {
    id: 'c-fc10',
    question: 'Give three uses of ethene.',
    answer:
      'Making polythene, making ethanol, and ripening fruit. It is also used for epoxyethane, oxy-ethylene welding and other synthetic chemicals.'
  },
  {
    id: 'c-fc11',
    question: 'How would you distinguish ethene from ethane?',
    answer:
      'Add bromine water. Ethene decolourises the orange-brown bromine water because it is unsaturated; ethane does not.'
  },
  {
    id: 'c-fc12',
    question: 'Why is the product of an addition reaction saturated?',
    answer:
      'The multiple bond is used up and becomes a single bond. The product has only single bonds, so no more atoms can add across it.'
  }
]

export const memoryWorkshop = {
  title: 'Build the alkene reaction map',
  objective:
    'Organise the chapter as a map of structure, preparation, addition and tests instead of memorising isolated equations.',
  intro: [
    'There is no single acrostic for the whole chapter. The reliable memory aid is a reaction map: start from the alkene, follow the condition, and name the product.',
    'Say the condition with every equation. The same starting material can be dehydrated, dehydrohalogenated or hydrogenated depending on the reagent.'
  ],
  sections: [
    {
      title: 'Preparation map',
      note: 'Both routes to ethene remove a small molecule and leave a C=C bond.',
      headers: ['Route', 'Condition', 'Equation', 'Product'],
      rows: [
        ['Dehydration', 'Conc. H₂SO₄, 170°C', 'C₂H₅OH → C₂H₄ + H₂O', 'Ethene'],
        ['Industrial dehydration', 'Al₂O₃, 300°C', 'C₂H₅OH → C₂H₄ + H₂O', 'Ethene'],
        ['Dehydrohalogenation', 'Alcoholic KOH, heat', 'C₂H₅Br + KOH → C₂H₄ + KBr + H₂O', 'Ethene']
      ]
    },
    {
      title: 'Addition map',
      note: 'Every addition uses up the double bond and gives one saturated product.',
      headers: ['Reagent', 'Product', 'Observation'],
      rows: [
        ['H₂ / Ni, 200°C', 'Ethane', 'No colour change; catalytic hydrogenation'],
        ['Cl₂', '1,2-dichloroethane', 'Chlorine adds across C=C'],
        ['Br₂', '1,2-dibromoethane', 'Orange-brown colour fades'],
        ['I₂', '1,2-diiodoethane', 'Slow; product is unstable']
      ]
    },
    {
      title: 'Test and use map',
      note: 'Separate the observation from the conclusion.',
      headers: ['Question', 'Observation', 'Conclusion'],
      rows: [
        ['Ethene + bromine water', 'Colour disappears', 'Unsaturated; addition occurs'],
        ['Ethane + bromine water', 'No change', 'Saturated; no addition'],
        ['Ethene combustion', 'Sooty flame in limited air', 'Incomplete combustion'],
        ['Use of ethene', 'Polythene, ethanol, fruit ripening', 'Reactive double bond and polymerisation']
      ]
    }
  ],
  recall:
    'Cover the tables. For ethene, say one preparation route, one addition reaction with its condition, the bromine test and two uses. Repeat after 1 day, 3 days, 7 days and 14 days.',
  flashcards
}

export const revision = {
  rapidSheet: [
    'Alkenes are unsaturated aliphatic hydrocarbons containing one C=C bond; general formula CₙH₂ₙ.',
    'Ethene, propene and butene are the first three members. Each step adds CH₂.',
    'Butene has three structural isomers: but-1-ene and but-2-ene are position isomers; 2-methylpropene is a chain isomer.',
    'Ethene is planar, with four C–H single bonds and one C=C double bond; bond angles are about 120°.',
    'Ethene is prepared by dehydration of ethanol (conc. H₂SO₄, 170°C) or dehydrohalogenation of an alkyl halide (alcoholic KOH).',
    'Addition of H₂, Cl₂, Br₂ or I₂ across the double bond gives a saturated product.',
    'Bromine water is decolourised by ethene but not by ethane.',
    'Complete combustion gives CO₂ and H₂O; incomplete combustion gives a sooty flame.',
    'Uses of ethene include polythene, ethanol, fruit ripening, epoxyethane and oxy-ethylene welding.'
  ],
  definitions: [
    {
      term: 'Alkene',
      meaning:
        'An unsaturated aliphatic hydrocarbon containing one carbon–carbon double bond; general formula CₙH₂ₙ.'
    },
    {
      term: 'Addition reaction',
      meaning: 'A reaction in which atoms add across a multiple bond, giving a single product.'
    },
    {
      term: 'Dehydration',
      meaning:
        'Removal of the elements of water from a molecule; ethanol with concentrated H₂SO₄ at 170°C gives ethene.'
    },
    {
      term: 'Dehydrohalogenation',
      meaning:
        'Removal of hydrogen and a halogen from adjacent carbon atoms using hot alcoholic KOH, forming a double bond.'
    },
    {
      term: 'Hydrogenation',
      meaning: 'Addition of hydrogen across a multiple bond, usually with Ni, Pt or Pd as catalyst.'
    },
    {
      term: 'Unsaturated',
      meaning: 'Containing a multiple bond, so atoms can add without replacing existing atoms.'
    }
  ],
  equations: [
    {
      reaction: 'Dehydration of ethanol',
      equation: 'C₂H₅OH → C₂H₄ + H₂O',
      condition: 'Conc. H₂SO₄, about 170°C',
      observation: 'Ethene gas evolved; collected over water.'
    },
    {
      reaction: 'Industrial dehydration',
      equation: 'C₂H₅OH → C₂H₄ + H₂O',
      condition: 'Al₂O₃, about 300°C',
      observation: 'Ethene produced from ethanol vapour.'
    },
    {
      reaction: 'Dehydrohalogenation',
      equation: 'C₂H₅Br + KOH → C₂H₄ + KBr + H₂O',
      condition: 'Hot concentrated alcoholic KOH',
      observation: 'Ethene formed; aqueous KOH would give ethanol instead.'
    },
    {
      reaction: 'Hydrogenation',
      equation: 'C₂H₄ + H₂ → C₂H₆',
      condition: 'Ni, 200°C or Pt/Pd',
      observation: 'Saturated ethane formed.'
    },
    {
      reaction: 'Bromination',
      equation: 'C₂H₄ + Br₂ → C₂H₄Br₂',
      condition: 'Room temperature; bromine in CCl₄',
      observation: 'Orange-brown colour fades.'
    },
    {
      reaction: 'Complete combustion',
      equation: 'C₂H₄ + 3O₂ → 2CO₂ + 2H₂O',
      condition: 'Sufficient oxygen',
      observation: 'Pale blue flame; much heat.'
    },
    {
      reaction: 'Incomplete combustion',
      equation: 'C₂H₄ + 2O₂ → 2CO + 2H₂O',
      condition: 'Limited oxygen',
      observation: 'Carbon monoxide may form; sooty flame with very little air.'
    }
  ],
  comparisons: [
    {
      pair: 'Ethene vs ethane',
      difference:
        'Ethene has a C=C bond and is unsaturated; ethane has only single bonds and is saturated.'
    },
    {
      pair: 'Addition vs substitution',
      difference:
        'Addition adds atoms across a multiple bond with one product; substitution replaces an atom or group and usually gives two products.'
    },
    {
      pair: 'Dehydration vs dehydrohalogenation',
      difference:
        'Dehydration removes H and OH as water from an alcohol; dehydrohalogenation removes H and a halogen from an alkyl halide.'
    },
    {
      pair: 'Observation vs conclusion',
      difference:
        'A colour change or sooty flame is observed; “unsaturated” or “incomplete combustion” is the conclusion drawn from it.'
    }
  ],
  memoryAids: [
    '“Every pupil brings”: Ethene, Propene, Butene.',
    '“Add the pair, lose the double bond”: H₂, Cl₂, Br₂ or I₂ addition.',
    '“Ethene clears bromine; ethane does not”: the unsaturation test.'
  ],
  mistakes: [
    'Using the alkane formula CₙH₂ₙ₊₂ for an alkene. Alkenes follow CₙH₂ₙ.',
    'Calling the product of bromination “dibromoethene”; the product is saturated 1,2-dibromoethane.',
    'Using aqueous KOH for dehydrohalogenation. Hot alcoholic KOH is required for elimination.',
    'Forgetting the condition (conc. H₂SO₄, 170°C) in the dehydration equation.',
    'Saying that ethene “turns bromine water colourless” without naming the addition product or the conclusion.',
    'Treating polymerisation or KMnO₄ oxidation as required 2027 content. They are enrichment.'
  ],
  reviewQuestions: [
    'Define an alkene and give its general formula.',
    'Draw and name the three structural isomers of butene, and classify each type of isomerism.',
    'Describe the structure of ethene, including the bond angle and shape.',
    'Describe the laboratory preparation of ethene from ethanol, including the condition, equation and collection method.',
    'Explain how ethene is prepared from bromoethane and why alcoholic KOH is used.',
    'Describe the addition of hydrogen and bromine to ethene, giving equations and observations.',
    'How would you distinguish ethene from ethane using bromine water?',
    'Give three uses of ethene and link each to a property of the molecule.'
  ]
}
