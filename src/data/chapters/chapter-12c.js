import questions from '../questions/chapter-12c.json'
import { flashcards } from '../chapter-12c/content'

export const chapter = {
  id: 'chapter-12c',
  href: './chapter-12c.html',
  label: 'Chapter 12C',
  title: 'Hydrocarbons: Alkenes',
  subtitle: 'Ethene and the C=C bond',
  description:
    'Study the alkene family, the structure and preparation of ethene, addition reactions and the tests that reveal unsaturation.',
  storageKey: 'icse10.organic12c.state',
  syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(v), alkenes',
  estimatedMinutes: [70, 80],
  assessmentLabel: '20-question assessment',
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: 'The alkene family', checkIds: ['c1-q1', 'c1-q2', 'c1-q3'] },
    { id: 'lesson-2', number: 2, navLabel: 'Ethene: structure and preparation', checkIds: ['c2-q1', 'c2-q2', 'c2-q3'] },
    { id: 'lesson-3', number: 3, navLabel: 'Addition reactions', checkIds: ['c3-q1', 'c3-q2', 'c3-q3'] },
    { id: 'lesson-4', number: 4, navLabel: 'Combustion, uses and testing', checkIds: ['c4-q1', 'c4-q2', 'c4-q3'] }
  ],
  outcomes: {
    C1: 'Alkene family, general formula and isomerism',
    C2: 'Ethene structure and preparation',
    C3: 'Addition reactions of ethene',
    C4: 'Combustion, uses and testing for unsaturation'
  },
  features: { memory: true, revision: true, assessment: true },
  questions,
  flashcards,
  hero: {
    eyebrow: 'ICSE Class 10 · Chemistry · Unit 9(v)',
    title: 'Hydrocarbons: Alkenes',
    subtitle: 'Chapter 12C · Ethene and the C=C bond',
    question: 'Why does one double bond make an entire family more reactive?',
    chips: [
      '4 lessons',
      '4 interactive labs',
      '20-question assessment',
      'Estimated study time: 70–80 minutes'
    ],
    outcomes: [
      'Define alkenes and use the general formula CₙH₂ₙ.',
      'Describe the structure and preparation of ethene.',
      'Explain addition of hydrogen and the halogens Cl₂, Br₂ and I₂.',
      'Use combustion and bromine water to identify an alkene.'
    ],
    prerequisites: [
      'Covalent bonding and the idea of a hydrocarbon.',
      'Structural formulae and chain/position isomerism from Chapter 12A.',
      'Balanced equations and state symbols.'
    ],
    conceptMap: [
      { href: '#lesson-1', label: 'The alkene family' },
      { href: '#lesson-2', label: 'Ethene structure and preparation' },
      { href: '#lesson-3', label: 'Addition reactions' },
      { href: '#lesson-4', label: 'Combustion, uses and testing' }
    ],
    scopeNote:
      'This chapter follows the supplied 12C pages and the CISCE 2027 Unit 9(v) alkene scope. Ozonolysis, polymerisation and oxidation with alkaline KMnO₄ are labelled enrichment or omitted because the 2027 wording concentrates on addition with hydrogen and the halogens.'
  },
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the supplied Chapter 12C pages for sequence and terminology. CISCE ICSE Chemistry 2027 Unit 9(v) sets the examinable scope for alkenes.',
      'CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed. All quick checks and assessment questions are original practice questions.',
      'The required addition reactions are with hydrogen and the halogens Cl₂, Br₂ and I₂. Ozonolysis, polymerisation and KMnO₄ oxidation are enrichment.'
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
