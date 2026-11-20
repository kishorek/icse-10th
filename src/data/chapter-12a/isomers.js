export const isomerSets = [
  {
    id: 'c4h10',
    formula: 'C₄H₁₀',
    type: 'Chain isomerism',
    note: 'Both compounds have the same molecular formula but different carbon skeletons.',
    isomers: [
      {
        name: 'Butane',
        structure: 'CH₃–CH₂–CH₂–CH₃',
        note: 'A straight chain of four carbon atoms.'
      },
      {
        name: '2-Methylpropane',
        structure: 'CH₃–CH(CH₃)–CH₃',
        note: 'A three-carbon parent chain with a methyl branch on carbon 2.'
      }
    ]
  },
  {
    id: 'c5h12',
    formula: 'C₅H₁₂',
    type: 'Chain isomerism',
    note: 'The same five carbon atoms can be arranged as one chain or as a branched chain.',
    isomers: [
      {
        name: 'Pentane',
        structure: 'CH₃–CH₂–CH₂–CH₂–CH₃',
        note: 'A straight chain of five carbon atoms.'
      },
      {
        name: '2-Methylbutane',
        structure: 'CH₃–CH(CH₃)–CH₂–CH₃',
        note: 'A four-carbon parent chain with a methyl branch on carbon 2.'
      },
      {
        name: '2,2-Dimethylpropane',
        structure: 'CH₃–C(CH₃)₂–CH₃',
        note: 'A three-carbon parent chain with two methyl branches on carbon 2.'
      }
    ]
  },
  {
    id: 'c4h8',
    formula: 'C₄H₈',
    type: 'Position and chain isomerism',
    note: 'The double bond can move along the chain, or the carbon skeleton itself can change.',
    isomers: [
      {
        name: 'But-1-ene',
        structure: 'CH₂=CH–CH₂–CH₃',
        note: 'Position isomer: the double bond starts at carbon 1.'
      },
      {
        name: 'But-2-ene',
        structure: 'CH₃–CH=CH–CH₃',
        note: 'Position isomer: the double bond starts at carbon 2.'
      },
      {
        name: '2-Methylpropene',
        structure: 'CH₂=C(CH₃)₂',
        note: 'Chain isomer: a branched three-carbon skeleton with a double bond.'
      }
    ]
  },
  {
    id: 'c2h6o',
    formula: 'C₂H₆O',
    type: 'Functional isomerism (extension)',
    note: 'The atoms can be joined into different functional groups. This comparison is an extension: the 2027 syllabus names chain and position isomerism only.',
    isomers: [
      {
        name: 'Ethanol',
        structure: 'CH₃–CH₂–OH',
        note: 'Alcohol: the –OH group is attached to a carbon atom.'
      },
      {
        name: 'Methoxymethane',
        structure: 'CH₃–O–CH₃',
        note: 'Ether: an oxygen atom links two methyl groups.'
      }
    ]
  }
]

export default isomerSets
