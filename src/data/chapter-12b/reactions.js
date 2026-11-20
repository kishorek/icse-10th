export const chlorinationSteps = [
  { step: 1, equation: 'CH₄ + Cl₂ → CH₃Cl + HCl', product: 'Chloromethane', productFormula: 'CH3Cl', note: 'One hydrogen is replaced by chlorine.' },
  { step: 2, equation: 'CH₃Cl + Cl₂ → CH₂Cl₂ + HCl', product: 'Dichloromethane', productFormula: 'CH2Cl2', note: 'A second hydrogen is replaced.' },
  { step: 3, equation: 'CH₂Cl₂ + Cl₂ → CHCl₃ + HCl', product: 'Trichloromethane (chloroform)', productFormula: 'CHCl3', note: 'A third hydrogen is replaced.' },
  { step: 4, equation: 'CHCl₃ + Cl₂ → CCl₄ + HCl', product: 'Tetrachloromethane (carbon tetrachloride)', productFormula: 'CCl4', note: 'All four hydrogens have now been replaced.' }
]

export const combustionModes = [
  { id: 'complete', label: 'Sufficient oxygen', equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O', products: 'Carbon dioxide and water', observation: 'Burns with a non-sooty flame and releases a large amount of heat.' },
  { id: 'incomplete', label: 'Insufficient oxygen', equation: '2CH₄ + 3O₂ → 2CO + 4H₂O', products: 'Carbon monoxide and water', observation: 'Carbon monoxide is poisonous and is formed when oxygen is insufficient.' },
  { id: 'limited', label: 'Very limited oxygen', equation: 'CH₄ + O₂ → C + 2H₂O', products: 'Soot (carbon) and water', observation: 'A sooty flame and black carbon particles are observed.' }
]

export const ethaneCombustion = [
  { label: 'Complete', equation: '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O' },
  { label: 'Incomplete', equation: '2C₂H₆ + 5O₂ → 4CO + 6H₂O' }
]
