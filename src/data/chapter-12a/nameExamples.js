export const nameExamples = [
  {
    id: 'chloromethane',
    structure: 'CH₃–Cl',
    root: 'meth',
    suffix: 'ane',
    prefix: 'chloro',
    locant: '1',
    name: 'chloromethane',
    reason:
      'The longest chain has one carbon, so the root is meth. The –Cl substituent uses the prefix chloro. Only one carbon is possible, so the locant is 1 and is not written in the name.'
  },
  {
    id: '2-bromobutane',
    structure: 'CH₃–CH(Br)–CH₂–CH₃',
    root: 'but',
    suffix: 'ane',
    prefix: 'bromo',
    locant: '2',
    name: '2-bromobutane',
    reason:
      'The longest chain has four carbons, so the root is but. The compound is a saturated alkane, so the suffix is ane. The bromo substituent is on carbon 2 when the chain is numbered from the nearer end.'
  },
  {
    id: 'propan-1-ol',
    structure: 'CH₃–CH₂–CH₂–OH',
    root: 'prop',
    suffix: 'ol',
    prefix: '',
    locant: '1',
    name: 'propan-1-ol',
    reason:
      'The longest chain has three carbons, giving the root prop. The –OH group is the principal functional group, so the suffix is ol and the name ends in -1-ol because the –OH is on carbon 1.'
  },
  {
    id: 'propan-2-ol',
    structure: 'CH₃–CH(OH)–CH₃',
    root: 'prop',
    suffix: 'ol',
    prefix: '',
    locant: '2',
    name: 'propan-2-ol',
    reason:
      'The longest chain has three carbons, so the root is prop. The –OH group gives the suffix ol. Numbering either way places –OH on carbon 2, so the locant is 2.'
  },
  {
    id: 'ethanal',
    structure: 'CH₃–CHO',
    root: 'eth',
    suffix: 'al',
    prefix: '',
    locant: '1',
    name: 'ethanal',
    reason:
      'The longest chain has two carbons, so the root is eth. The –CHO group is an aldehyde and must be at the end of the chain, so it takes the suffix al and the locant 1 is understood.'
  },
  {
    id: 'propanone',
    structure: 'CH₃–CO–CH₃',
    root: 'prop',
    suffix: 'one',
    prefix: '',
    locant: '2',
    name: 'propanone',
    reason:
      'The longest chain has three carbons, so the root is prop. The C=O group between two carbon atoms is a ketone, giving the suffix one. The carbonyl carbon is carbon 2, but with only one possible position the locant is often left out.'
  },
  {
    id: 'propanoic-acid',
    structure: 'CH₃–CH₂–COOH',
    root: 'prop',
    suffix: 'oic acid',
    prefix: '',
    locant: '1',
    name: 'propanoic acid',
    reason:
      'The longest chain has three carbons, so the root is prop. The –COOH group is a carboxylic acid, so the suffix is oic acid. The carboxyl carbon is always carbon 1 and the locant is not written.'
  },
  {
    id: '2-methylbutane',
    structure: 'CH₃–CH(CH₃)–CH₂–CH₃',
    root: 'but',
    suffix: 'ane',
    prefix: 'methyl',
    locant: '2',
    name: '2-methylbutane',
    reason:
      'The longest continuous chain has four carbons, so the root is but. The molecule is saturated, giving the suffix ane. The extra CH₃ group is a methyl substituent on carbon 2.'
  }
]
