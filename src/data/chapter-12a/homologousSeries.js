export const homologousSeries = [
  {
    id: 'alkanes',
    name: 'Alkanes',
    general: 'CₙH₂ₙ₊₂',
    members: [
      { n: 1, name: 'Methane', formula: 'CH4', molarMass: 16 },
      { n: 2, name: 'Ethane', formula: 'C2H6', molarMass: 30 },
      { n: 3, name: 'Propane', formula: 'C3H8', molarMass: 44 },
      { n: 4, name: 'Butane', formula: 'C4H10', molarMass: 58 },
      { n: 5, name: 'Pentane', formula: 'C5H12', molarMass: 72 }
    ]
  },
  {
    id: 'alkenes',
    name: 'Alkenes',
    general: 'CₙH₂ₙ',
    members: [
      { n: 2, name: 'Ethene', formula: 'C2H4', molarMass: 28 },
      { n: 3, name: 'Propene', formula: 'C3H6', molarMass: 42 },
      { n: 4, name: 'Butene', formula: 'C4H8', molarMass: 56 },
      { n: 5, name: 'Pentene', formula: 'C5H10', molarMass: 70 }
    ]
  },
  {
    id: 'alkynes',
    name: 'Alkynes',
    general: 'CₙH₂ₙ₋₂',
    members: [
      { n: 2, name: 'Ethyne', formula: 'C2H2', molarMass: 26 },
      { n: 3, name: 'Propyne', formula: 'C3H4', molarMass: 40 },
      { n: 4, name: 'Butyne', formula: 'C4H6', molarMass: 54 },
      { n: 5, name: 'Pentyne', formula: 'C5H8', molarMass: 68 }
    ]
  },
  {
    id: 'alcohols',
    name: 'Alcohols',
    general: 'CₙH₂ₙ₊₁OH',
    members: [
      { n: 1, name: 'Methanol', formula: 'CH4O', molarMass: 32 },
      { n: 2, name: 'Ethanol', formula: 'C2H6O', molarMass: 46 },
      { n: 3, name: 'Propan-1-ol', formula: 'C3H8O', molarMass: 60 },
      { n: 4, name: 'Butan-1-ol', formula: 'C4H10O', molarMass: 74 },
      { n: 5, name: 'Pentan-1-ol', formula: 'C5H12O', molarMass: 88 }
    ]
  }
]

export default homologousSeries
