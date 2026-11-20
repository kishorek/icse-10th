export const preparationRoutes = [
  {
    id: 'methane-acetate',
    label: 'Methane from sodium ethanoate and soda lime',
    gas: 'Methane, CH₄',
    reactants: 'Sodium ethanoate (sodium acetate) and soda lime (NaOH + CaO)',
    conditions: 'CaO, about 300°C',
    equation: 'CH₃COONa + NaOH → Na₂CO₃ + CH₄↑',
    collection: 'Collected over water because methane is almost insoluble in water.',
    note: 'The laboratory preparation of methane uses sodium ethanoate and soda lime. The CaO in soda lime keeps the mixture dry and absorbs carbon dioxide.'
  },
  {
    id: 'ethane-propanoate',
    label: 'Ethane from sodium propanoate and soda lime',
    gas: 'Ethane, C₂H₆',
    reactants: 'Sodium propanoate (sodium propionate) and soda lime (NaOH + CaO)',
    conditions: 'CaO, about 300°C',
    equation: 'C₂H₅COONa + NaOH → Na₂CO₃ + C₂H₆↑',
    collection: 'Collected over water because ethane is almost insoluble in water.',
    note: 'The same decarboxylation pattern that gives methane from sodium ethanoate gives ethane from sodium propanoate: the carbon chain is one carbon shorter than the carboxylate salt.'
  },
  {
    id: 'methane-iodide',
    label: 'Methane by reduction of iodomethane',
    gas: 'Methane, CH₄',
    reactants: 'Iodomethane and zinc with dilute hydrochloric acid',
    conditions: 'Zn and dilute HCl, or Zn/Cu couple',
    equation: 'CH₃I + 2[H] → CH₄ + HI',
    collection: 'Collected over water because methane is almost insoluble in water.',
    note: 'Zinc and dilute hydrochloric acid produce hydrogen in contact with the alkyl halide, reducing iodomethane to methane. The Zn/Cu couple can be used instead.'
  },
  {
    id: 'ethane-bromide',
    label: 'Ethane by reduction of bromoethane',
    gas: 'Ethane, C₂H₆',
    reactants: 'Bromoethane and zinc with dilute hydrochloric acid',
    conditions: 'Zn and dilute HCl, or Zn/Cu couple',
    equation: 'C₂H₅Br + 2[H] → C₂H₆ + HBr',
    collection: 'Collected over water because ethane is almost insoluble in water.',
    note: 'This is the same reduction method used for methane, applied to bromoethane. The two-carbon chain is unchanged.'
  },
  {
    id: 'methane-carbide',
    label: 'Methane from aluminium carbide and water',
    gas: 'Methane, CH₄',
    reactants: 'Aluminium carbide and water',
    conditions: 'room temperature',
    equation: 'Al₄C₃ + 12H₂O → 3CH₄ + 4Al(OH)₃',
    collection: 'Collected over water because methane is almost insoluble in water.',
    note: 'Aluminium carbide reacts with water at room temperature to release methane. This is a hydrolysis reaction, not a decarboxylation.'
  },
  {
    id: 'wurtz',
    label: 'Ethane by the Wurtz reaction',
    gas: 'Ethane, C₂H₆',
    reactants: 'Iodomethane and sodium',
    conditions: 'dry ether',
    equation: '2CH₃I + 2Na → C₂H₆ + 2NaI',
    collection: 'Collected over water because ethane is almost insoluble in water.',
    note: 'The Wurtz reaction joins two identical alkyl groups, so it gives alkanes with an even number of carbon atoms. It cannot prepare methane, because the smallest possible product has two carbon atoms.'
  }
]

export default preparationRoutes
