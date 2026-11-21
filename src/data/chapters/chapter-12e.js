import questions from '../questions/chapter-12e.json'
import { flashcards } from '../chapter-12e/content'

export const chapter = {
  id: 'chapter-12e',
  href: './chapter-12e.html',
  label: 'Chapter 12E',
  title: 'Alcohols',
  subtitle: 'Ethanol: preparation, properties and uses',
  description:
    'Study the alcohol family, the preparation of ethanol, its physical properties, reactions with sodium, acetic acid and sulphuric acid, and its uses.',
  storageKey: 'icse10.organic12e.state',
  syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(vi), alcohols',
  estimatedMinutes: [90, 100],
  assessmentLabel: '20-question assessment',
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: 'The alcohol family', checkIds: ['e1-q1', 'e1-q2', 'e1-q3'] },
    { id: 'lesson-2', number: 2, navLabel: 'Ethanol: occurrence and preparation', checkIds: ['e2-q1', 'e2-q2', 'e2-q3'] },
    { id: 'lesson-3', number: 3, navLabel: 'Physical properties and combustion', checkIds: ['e3-q1', 'e3-q2', 'e3-q3'] },
    { id: 'lesson-4', number: 4, navLabel: 'Reactions of ethanol', checkIds: ['e4-q1', 'e4-q2', 'e4-q3'] },
    { id: 'lesson-5', number: 5, navLabel: 'Denatured alcohol and uses', checkIds: ['e5-q1', 'e5-q2', 'e5-q3'] }
  ],
  outcomes: {
    E1: 'Alcohol family, hydroxyl group and monohydric/dihydric/trihydric classification',
    E2: 'Ethanol occurrence and preparation',
    E3: 'Physical properties and combustion of ethanol',
    E4: 'Reactions of ethanol with sodium, acetic acid and concentrated sulphuric acid',
    E5: 'Denatured and spurious alcohol, and uses of ethanol'
  },
  features: { memory: true, revision: true, assessment: true },
  questions,
  flashcards,
  hero: {
    eyebrow: 'ICSE Class 10 · Chemistry · Unit 9(vi)',
    title: 'Alcohols',
    subtitle: 'Chapter 12E · Ethanol: preparation, properties and uses',
    question: 'How does one –OH group make ethanol a solvent, a fuel and a chemical feedstock?',
    chips: [
      '5 lessons',
      '4 interactive labs',
      '20-question assessment',
      'Estimated study time: 90–100 minutes'
    ],
    outcomes: [
      'Recognise the hydroxyl group and classify alcohols.',
      'Describe how ethanol is prepared by hydrolysis of an alkyl halide.',
      'Explain the required physical properties and combustion of ethanol.',
      'Describe reactions with sodium, acetic acid and concentrated sulphuric acid.',
      'Distinguish denatured and spurious alcohol and state the uses of ethanol.'
    ],
    prerequisites: [
      'The idea of a functional group from Chapter 12A.',
      'Alkenes and addition reactions from Chapter 12C.',
      'Balanced equations and simple laboratory apparatus.'
    ],
    conceptMap: [
      { href: '#lesson-1', label: 'The alcohol family' },
      { href: '#lesson-2', label: 'Ethanol preparation' },
      { href: '#lesson-3', label: 'Physical properties and combustion' },
      { href: '#lesson-4', label: 'Reactions of ethanol' },
      { href: '#lesson-5', label: 'Denatured alcohol and uses' }
    ],
    scopeNote:
      'This chapter follows the supplied 12E pages and the CISCE 2027 Unit 9(vi) scope. Fermentation, industrial hydration, oxidation, PCl₃ and ether formation are labelled enrichment or omitted because the required preparation is hydrolysis of an alkyl halide.'
  },
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the supplied Chapter 12E pages for sequence and terminology. CISCE ICSE Chemistry 2027 Unit 9(vi) sets the examinable scope for ethanol.',
      'CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed. All quick checks and assessment questions are original practice questions.',
      'The required preparation is hydrolysis of an alkyl halide. Fermentation and industrial hydration are enrichment context.'
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
