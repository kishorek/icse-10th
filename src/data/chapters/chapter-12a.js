export const chapter = {
  id: 'chapter-12a',
  href: './chapter-12a.html',
  label: 'Chapter 12A',
  title: 'Organic Compounds',
  subtitle: 'Structure, families and naming',
  description:
    'Build the full picture: carbon’s bonding, hydrocarbons, functional groups, homologous series, IUPAC names and isomerism.',
  storageKey: 'icse10.organic12a.state',
  syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(ii)–(iv)',
  estimatedMinutes: [90, 120],
  assessmentLabel: '30-question assessment',
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: 'Organic compounds and carbon', checkIds: ['a1-q1', 'a1-q2', 'a1-q3'] },
    { id: 'lesson-2', number: 2, navLabel: 'Hydrocarbons and families', checkIds: ['a2-q1', 'a2-q2', 'a2-q3'] },
    { id: 'lesson-3', number: 3, navLabel: 'Structures and functional groups', checkIds: ['a3-q1', 'a3-q2', 'a3-q3'] },
    { id: 'lesson-4', number: 4, navLabel: 'Homologous series', checkIds: ['a4-q1', 'a4-q2', 'a4-q3'] }
  ],
  outcomes: {
    A1: 'Organic compounds, sources, and organic vs inorganic trends',
    A2: "Carbon's unique nature, bonding and hydrocarbon classification",
    A3: 'Structural formulae, alkyl groups and functional groups',
    A4: 'Homologous series',
    A5: 'IUPAC nomenclature',
    A6: 'Structural isomerism'
  },
  features: { memory: false, revision: false, assessment: false },
  questions: [],
  hero: {
    eyebrow: 'ICSE Class 10 · Chemistry · Unit 9(ii)–(iv)',
    title: 'Organic Compounds',
    subtitle: 'Chapter 12A · Structure, families and naming',
    question: 'Why can carbon build millions of compounds from the same few bond types?',
    chips: ['6 lessons', '4 interactive labs', '30-question assessment', 'Estimated study time: 90–120 minutes'],
    outcomes: [
      'Explain why carbon forms so many compounds.',
      'Classify hydrocarbons and recognise functional groups.',
      'Use homologous-series patterns and IUPAC naming rules.',
      'Identify chain, position and functional isomers.'
    ],
    prerequisites: [
      'Elements, compounds and covalent bonding.',
      'Valency and the octet idea.',
      'The first 20 elements and their symbols.'
    ],
    conceptMap: [
      { href: '#lesson-1', label: 'Carbon and organic compounds' },
      { href: '#lesson-2', label: 'Hydrocarbon families' },
      { href: '#lesson-3', label: 'Structure and functional groups' },
      { href: '#lesson-4', label: 'Homologous series' }
    ],
    scopeNote:
      'This chapter follows the supplied 12A pages and the CISCE 2027 Unit 9 scope. Metamerism is omitted because the book marks it outside the syllabus. Functional isomerism is labelled as an extension.'
  },
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the supplied Chapter 12A pages for sequence, terminology and worked examples. CISCE ICSE Chemistry 2027 Unit 9(ii)–(iv) sets the examinable scope.',
      'CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed. All quick checks and assessment questions are original practice questions, not board past-paper questions.',
      'Functional isomerism is included as a labelled extension because the supplied book teaches it, while the 2027 syllabus names chain and position isomerism.'
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
