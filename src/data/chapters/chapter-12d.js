import questions from '../questions/chapter-12d.json'
import { flashcards } from '../chapter-12d/content'

export const chapter = {
  id: 'chapter-12d',
  href: './chapter-12d.html',
  label: 'Chapter 12D',
  title: 'Hydrocarbons: Alkynes',
  subtitle: 'Ethyne and the C≡C bond',
  description:
    'Study the alkyne family, the structure and preparation of ethyne, stepwise addition and the tests that identify a terminal alkyne.',
  storageKey: 'icse10.organic12d.state',
  syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(v), alkynes',
  estimatedMinutes: [70, 80],
  assessmentLabel: '20-question assessment',
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: 'The alkyne family', checkIds: ['d1-q1', 'd1-q2', 'd1-q3'] },
    { id: 'lesson-2', number: 2, navLabel: 'Ethyne: structure and preparation', checkIds: ['d2-q1', 'd2-q2', 'd2-q3'] },
    { id: 'lesson-3', number: 3, navLabel: 'Addition reactions', checkIds: ['d3-q1', 'd3-q2', 'd3-q3'] },
    { id: 'lesson-4', number: 4, navLabel: 'Combustion, uses and tests', checkIds: ['d4-q1', 'd4-q2', 'd4-q3'] }
  ],
  outcomes: {
    D1: 'Alkyne family, general formula and isomerism',
    D2: 'Ethyne structure and preparation',
    D3: 'Stepwise addition reactions of ethyne',
    D4: 'Combustion, uses and distinguishing tests'
  },
  features: { memory: true, revision: true, assessment: true },
  questions,
  flashcards,
  hero: {
    eyebrow: 'ICSE Class 10 · Chemistry · Unit 9(v)',
    title: 'Hydrocarbons: Alkynes',
    subtitle: 'Chapter 12D · Ethyne and the C≡C bond',
    question: 'Why can a triple bond add two pairs of atoms, one stage at a time?',
    chips: [
      '4 lessons',
      '4 interactive labs',
      '20-question assessment',
      'Estimated study time: 70–80 minutes'
    ],
    outcomes: [
      'Define alkynes and use the general formula CₙH₂ₙ₋₂.',
      'Describe the structure and preparation of ethyne.',
      'Explain stepwise addition of hydrogen and halogens.',
      'Use combustion and specific tests to identify ethyne.'
    ],
    prerequisites: [
      'Covalent bonding and multiple bonds.',
      'The alkene family from Chapter 12C.',
      'Balanced equations and laboratory apparatus conventions.'
    ],
    conceptMap: [
      { href: '#lesson-1', label: 'The alkyne family' },
      { href: '#lesson-2', label: 'Ethyne structure and preparation' },
      { href: '#lesson-3', label: 'Addition reactions' },
      { href: '#lesson-4', label: 'Combustion, uses and tests' }
    ],
    scopeNote:
      'This chapter follows the supplied 12D pages and the CISCE 2027 Unit 9(v) alkyne scope. Reactions with HCl and ozone are labelled enrichment. Cuprous chloride and silver nitrate tests are labelled extension tests.'
  },
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the supplied Chapter 12D pages for sequence and terminology. CISCE ICSE Chemistry 2027 Unit 9(v) sets the examinable scope for alkynes.',
      'CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed. All quick checks and assessment questions are original practice questions.',
      'The required addition reactions are with hydrogen and the halogens Cl₂, Br₂ and I₂. HCl and ozone reactions are enrichment.'
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
