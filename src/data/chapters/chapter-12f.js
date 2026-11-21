import questions from '../questions/chapter-12f.json'
import { flashcards } from '../chapter-12f/content'

export const chapter = {
  id: 'chapter-12f',
  href: './chapter-12f.html',
  label: 'Chapter 12F',
  title: 'Carboxylic Acids',
  subtitle: 'Acetic acid: properties and uses',
  description:
    'Study the carboxylic acid family, the structure and physical properties of acetic acid, its acid reactions, esterification and uses.',
  storageKey: 'icse10.organic12f.state',
  syllabusReference: 'CISCE ICSE Chemistry 2027, Unit 9(vii), carboxylic acids',
  estimatedMinutes: [75, 85],
  assessmentLabel: '20-question assessment',
  lessons: [
    { id: 'lesson-1', number: 1, navLabel: 'The carboxylic acid family', checkIds: ['f1-q1', 'f1-q2', 'f1-q3'] },
    { id: 'lesson-2', number: 2, navLabel: 'Acetic acid: structure and properties', checkIds: ['f2-q1', 'f2-q2', 'f2-q3'] },
    { id: 'lesson-3', number: 3, navLabel: 'Acidic reactions and esterification', checkIds: ['f3-q1', 'f3-q2', 'f3-q3'] },
    { id: 'lesson-4', number: 4, navLabel: 'Preparation context, tests and uses', checkIds: ['f4-q1', 'f4-q2', 'f4-q3'] }
  ],
  outcomes: {
    F1: 'Carboxylic acid family, carboxyl group and nomenclature',
    F2: 'Acetic acid structure, vinegar, glacial acetic acid and physical properties',
    F3: 'Acidic reactions and esterification',
    F4: 'Preparation context, tests and uses'
  },
  features: { memory: true, revision: true, assessment: true },
  questions,
  flashcards,
  hero: {
    eyebrow: 'ICSE Class 10 · Chemistry · Unit 9(vii)',
    title: 'Carboxylic Acids',
    subtitle: 'Chapter 12F · Acetic acid: properties and uses',
    question: 'Why does the same –COOH group make vinegar sour and produce fruity-smelling esters?',
    chips: [
      '4 lessons',
      '4 interactive labs',
      '20-question assessment',
      'Estimated study time: 75–85 minutes'
    ],
    outcomes: [
      'Recognise the carboxyl group and name the first carboxylic acids.',
      'Describe the structure of acetic acid and the vinegar/glacial distinction.',
      'Explain reactions with litmus, alkalis and alcohols.',
      'Describe the preparation, tests and uses of acetic acid.'
    ],
    prerequisites: [
      'Functional groups and homologous series from Chapter 12A.',
      'Ethanol and esterification from Chapter 12E.',
      'Acids, bases and neutralisation from earlier chemistry.'
    ],
    conceptMap: [
      { href: '#lesson-1', label: 'The carboxylic acid family' },
      { href: '#lesson-2', label: 'Acetic acid structure and properties' },
      { href: '#lesson-3', label: 'Acidic reactions and esterification' },
      { href: '#lesson-4', label: 'Preparation, tests and uses' }
    ],
    scopeNote:
      'This chapter follows the supplied 12F pages and the CISCE 2027 Unit 9(vii) scope. Preparation routes and reactions with metals, carbonates, bicarbonates, PCl₅, anhydrides and LiAlH₄ are labelled enrichment or omitted; the required reactions are litmus, alkalis and alcohols.'
  },
  sources: {
    title: 'Sources and scope',
    paragraphs: [
      'This chapter follows the supplied Chapter 12F pages for sequence and terminology. CISCE ICSE Chemistry 2027 Unit 9(vii) sets the examinable scope for acetic acid.',
      'CISCE does not prescribe a Chemistry textbook, so no textbook page mapping is claimed. All quick checks and assessment questions are original practice questions.',
      'The required chemical properties are action with litmus, alkalis and alcohols. Preparation routes and extra acid reactions are enrichment.'
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
