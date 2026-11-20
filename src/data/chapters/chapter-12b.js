export const chapter = {
  id: 'chapter-12b',
  href: './chapter-12b.html',
  label: 'Chapter 12B',
  title: 'Hydrocarbons: Alkanes',
  subtitle: 'Methane and ethane',
  description:
    'Study the alkane family, methane and ethane, their preparation, combustion, substitution reactions and uses.',
  storageKey: 'icse10.organic12b.state',
  syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(v), alkanes',
  estimatedMinutes: [60, 75],
  assessmentLabel: '20-question assessment',
  lessons: [
    {
      id: 'lesson-1',
      number: 1,
      navLabel: 'The alkane family',
      checkIds: ['b1-q1', 'b1-q2', 'b1-q3']
    }
  ],
  outcomes: {
    B1: 'Alkane family, sources and chain isomerism',
    B2: 'Methane and ethane: occurrence, structure, preparation and physical properties',
    B3: 'Reactions and uses of methane and ethane'
  },
  features: { memory: false, revision: false, assessment: false },
  questions: [],
  hero: {
    eyebrow: 'ICSE Class 10 · Chemistry · Unit 9(v)',
    title: 'Hydrocarbons: Alkanes',
    subtitle: 'Chapter 12B · Methane and ethane',
    question: 'Why does a family of compounds with only single bonds still behave in so many ways?',
    chips: [
      '3 lessons',
      '4 interactive labs',
      '20-question assessment',
      'Estimated study time: 60–75 minutes'
    ],
    outcomes: [
      'Explain what alkanes are and use the general formula CₙH₂ₙ₊₂.',
      'Describe how methane and ethane occur, are structured and are prepared.',
      'Explain combustion, substitution with chlorine and the uses of methane and ethane.'
    ],
    prerequisites: [
      'Covalent bonding and valency.',
      'The idea of a hydrocarbon from Chapter 12A.',
      'Balanced chemical equations and state symbols.'
    ],
    conceptMap: [{ href: '#lesson-1', label: 'The alkane family' }],
    scopeNote:
      'This chapter follows the supplied 12B pages and the CISCE 2027 Unit 9(v) scope. Alkenes and alkynes belong to later chapters and are out of scope here. Catalytic oxidation and slow combustion are omitted because the book marks them outside the syllabus.'
  },
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the supplied Chapter 12B pages for sequence, terminology and worked examples. CISCE ICSE Chemistry 2027 Unit 9(v) sets the examinable scope for alkanes.',
      'CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed. All quick checks and assessment questions are original practice questions, not board past-paper questions.',
      'Alkenes and alkynes are out of scope for this chapter. Catalytic oxidation of alkanes and slow combustion with acidified K₂Cr₂O₇ or KMnO₄ are omitted because the supplied book marks them outside the syllabus.'
    ],
    links: [
      { label: 'CISCE Regulations and Syllabuses', href: 'https://cisce.org/regulations-and-syllabuses' }
    ]
  }
}

export const lessons = chapter.lessons
export const outcomes = chapter.outcomes
export const storageKey = chapter.storageKey

export default chapter
